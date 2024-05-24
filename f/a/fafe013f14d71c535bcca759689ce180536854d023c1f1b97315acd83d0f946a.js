<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>728x90 728x90</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta name="ad.size" content="width=728,height=90">
<script type="text/javascript">var clickTag = "https://www.google.com";</script>
<style type="text/css">
body,html{margin:0;padding:0;}#b_116424468{background-color:#ffffff;border:0;box-sizing:border-box;cursor:pointer;display:block;height:90px;overflow:hidden;position:relative;width:728px;z-index:1;}#b_116424468 div{position:absolute;box-sizing:border-box;padding:0;margin:0;}#b_116424468 img{position:absolute;top:0;left:0;display:block;padding:0;margin:0;}#el_116424482{top:12px;left:16px;z-index:6;pointer-events:none;mix-blend-mode:normal;}#img_116424482{width:100px;height:64px;}#img_116424482.bnfy-enter{-webkit-animation:fade-in-left 300ms 300ms ease 1 both;animation:fade-in-left 300ms 300ms ease 1 both;}#el_116424474{top:27px;left:393px;z-index:5;pointer-events:auto;mix-blend-mode:normal;}#img_116424474{width:103px;height:38px;}#img_116424474.bnfy-enter{-webkit-animation:fade-in-left 400ms 600ms ease 1 both;animation:fade-in-left 400ms 600ms ease 1 both;}#hvr_116424474{display:block;cursor:pointer;width:103px;height:38px;-webkit-animation-duration:500ms!important;animation-duration:500ms!important;-webkit-animation-delay:0ms!important;animation-delay:0ms!important;-webkit-animation-iteration-count:1!important;animation-iteration-count:1!important;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-direction:normal!important;animation-direction:normal!important;}#el_116424472{top:12px;left:140px;z-index:4;pointer-events:none;mix-blend-mode:normal;}#img_116424472{width:252px;height:66px;}#img_116424472.bnfy-enter{-webkit-animation:fade-in-left 300ms 500ms ease 1 both;animation:fade-in-left 300ms 500ms ease 1 both;}#el_116424471{top:0px;left:0px;z-index:3;pointer-events:none;mix-blend-mode:normal;}#img_116424471{width:516px;height:90px;}#img_116424471.bnfy-enter{-webkit-animation:fade-in-left 300ms 0ms ease 1 both;animation:fade-in-left 300ms 0ms ease 1 both;}#el_116424470{top:0px;left:472px;z-index:2;pointer-events:none;mix-blend-mode:normal;}#img_116424470{width:256px;height:90px;}#img_116424470.bnfy-enter{-webkit-animation:fade-in 500ms 1000ms ease 1 both;animation:fade-in 500ms 1000ms ease 1 both;}#el_116424469{top:0px;left:0px;z-index:1;pointer-events:none;mix-blend-mode:normal;}#img_116424469{width:728px;height:90px;}#img_116424469.bnfy-enter{-webkit-animation:none 1000ms 0ms ease 1 both;animation:none 1000ms 0ms ease 1 both;}#el_116424468{top:0px;left:0px;z-index:0;pointer-events:none;mix-blend-mode:normal;}#img_116424468{width:728px;height:90px;}#img_116424468.bnfy-enter{-webkit-animation:undefined 0ms 0ms ease 1 both;animation:undefined 0ms 0ms ease 1 both;}@-webkit-keyframes fade-in-left{0%{-webkit-transform:translateX(-50px);transform:translateX(-50px);opacity:0}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes fade-in-left{0%{-webkit-transform:translateX(-50px);transform:translateX(-50px);opacity:0}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.hvr-grow{display:inline-block;vertical-align:middle;-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);box-shadow:0 0 1px rgba(0,0,0,0);-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-property:transform;transition-property:transform;}.hvr-grow:hover,.hvr-grow:focus,.hvr-grow:active{-webkit-transform:scale(1.1);transform:scale(1.1);}
</style>
<script type="text/javascript">
    
  (function() {
    var MAX_URL_PARAM_LENGTH = 34;
    var CLICK_X_URL_KEY = 'nx';
    var CLICK_Y_URL_KEY = 'ny';
    var CREATIVE_DIMENSIONS_KEY = 'dim';
    var AD_URL_PARAM = '&adurl=';

    var relegateNavigation = '';
    var urlParamMap = {};

    urlParamMap[CLICK_X_URL_KEY] = null;
    urlParamMap[CLICK_Y_URL_KEY] = null;
    urlParamMap[CREATIVE_DIMENSIONS_KEY] = null;

    var handleClickTagMessage = function(e) {
      try {
        var eventData = JSON.parse(e.data);
      } catch (err) {
        return;
      }
      if (eventData.isInitClickTag) {
        if (eventData.clickTags) {
          for (var i = 0; i < eventData.clickTags.length; i++) {
            var clkTag = eventData.clickTags[i];
            window[clkTag.name] = clkTag.url;
          }
        } else if (eventData.clickTag) {
          window.clickTag = eventData.clickTag;
        }
        relegateNavigation = eventData.relegateNavigation;
      }
    };

    var storeClickCoordinates = function(e) {
      urlParamMap[CLICK_X_URL_KEY] = Math.round(e.clientX);
      urlParamMap[CLICK_Y_URL_KEY] = Math.round(e.clientY);
    };

    var getCreativeDimensions = function() {
      return window.innerWidth + 'x' + window.innerHeight;
    }

    var getExitClickParams = function(e) {
      urlParamMap[CREATIVE_DIMENSIONS_KEY] = getCreativeDimensions();

      var exitParams = '';
      for (var key in urlParamMap) {
        exitParams += '&' + key + '=';
        if (urlParamMap[key] !== null) {
          exitParams += urlParamMap[key];
        }
      }
      return exitParams;
    }

    var appendExitClickParams = function(url) {
      var adUrlIndex = url.toLowerCase().indexOf(AD_URL_PARAM);
      var paramsToBeAdded = getExitClickParams();
      if (adUrlIndex > -1 && paramsToBeAdded.length <= MAX_URL_PARAM_LENGTH) {
        url = url.substr(0, adUrlIndex) + paramsToBeAdded +
          url.substr(adUrlIndex);
      };
      return url;
    };

    if (open.call) {
      window.open = function(open) {
        return function(url, name, features) {
          url = appendExitClickParams(url);
          if (relegateNavigation === 'parent') {
            var message = {'clickTag': url, 'isPostClickTag': true};
            parent.postMessage(JSON.stringify(message), '*');
          } else {
            var args = [url, name];
            if (features) {
              args.push(features);
            }
            open.apply(window, args);
          }
        };
      }(window.open);
    }

    if (window.addEventListener) {
      window.addEventListener(
          'message', handleClickTagMessage, false);
      window.addEventListener('mousedown', storeClickCoordinates, true);
    } else {
      window.attachEvent('onmessage', handleClickTagMessage);
    }
  })();
    
  </script></head>
<body><div id="b_116424468"><div style="display:none;width:100px;height:64px;" id="el_116424482" class="js-bnfy">
<img id="img_116424482" class="bnfy-enter" alt="BRAND" width="100" height="64" src="images/171e3d738d01e8cece0d46042bc4c730.svg" /></div><div style="display:none;width:103px;height:38px;" id="el_116424474" class="js-bnfy"><div id="hvr_116424474" class="hvr-grow"><img id="img_116424474" class="bnfy-enter" alt="CTA" width="103" height="38" src="images/d1886b8f35f1dd8b7d06c40090decc9d.svg" /></div></div><div style="display:none;width:252px;height:66px;" id="el_116424472" class="js-bnfy">
<img id="img_116424472" class="bnfy-enter" alt="MAIN INFO" width="252" height="66" src="images/70c08601967175c6ebd36941da3e72bc.svg" /></div><div style="display:none;width:516px;height:90px;" id="el_116424471" class="js-bnfy">
<img id="img_116424471" class="bnfy-enter" alt="Card" width="516" height="90" src="images/f180d7c60b079635f13ec1074cf66d89.png" /></div><div style="display:none;width:256px;height:90px;" id="el_116424470" class="js-bnfy">
<img id="img_116424470" class="bnfy-enter" alt="ChicoGraduación-topaz-enhance-3 3" width="256" height="90" src="images/3c616d3de6c6e28279ac6b863fea94e6.png" /></div><div style="display:none;width:728px;height:90px;" id="el_116424469" class="js-bnfy">
<img id="img_116424469" class="bnfy-enter" alt="ranking_fondo2 1" width="728" height="90" src="images/c3cbacf0ab5711d723e3127fc7758c09.jpg" /></div><div style="display:none;width:728px;height:90px;" id="el_116424468" class="js-bnfy">
<img id="img_116424468" class="bnfy-enter" alt="728x90" width="728" height="90" src="images/0757fbd1f03eb312c247ef0eee7193a1.svg" /></div></div>
<script type="text/javascript">(function () { function onImagesLoaded(container, event) { var preloads = []; preloads.push.apply(preloads, container.getElementsByTagName("img")); preloads.push.apply(preloads, container.getElementsByTagName("lottie-player")); preloads.push.apply(preloads, container.getElementsByTagName("video")); var loaded = preloads.length; for (var i = 0; i < preloads.length; i++) { var tag = preloads[i].tagName.toLowerCase(); if(tag === "lottie-player") { preloads[i].addEventListener("ready", function() { loaded--; if (loaded == 0) { event(); } }); } else if(tag === "video") { preloads[i].addEventListener('loadeddata', function() { loaded--; if (loaded == 0) { event(); } }, false); } else if(tag === "img") { if (preloads[i].complete) { loaded--; } else { preloads[i].addEventListener("load", function() { loaded--; if (loaded == 0) { event(); } }); } if (loaded == 0) { event(); } } } } onImagesLoaded(document.getElementById("b_116424468"), function() { var elements = document.getElementById("b_116424468").getElementsByClassName('js-bnfy'); for (var i=0; i < elements.length; i++) { elements[i].style.display = 'block'; } var playCount = 0; var lastPlay = true; function handleExits() {var el_img_116424482 = document.getElementById("img_116424482");
var el_img_116424474 = document.getElementById("img_116424474");
var el_img_116424472 = document.getElementById("img_116424472");
var el_img_116424471 = document.getElementById("img_116424471");
var el_img_116424470 = document.getElementById("img_116424470");
var el_img_116424469 = document.getElementById("img_116424469");
var el_img_116424468 = document.getElementById("img_116424468");
} handleExits(); }); document.getElementById('b_116424468').addEventListener('click', function () { window.open(window.clickTag); });})();</script> <noscript>
<style>#b_116424468 div{display:block!important;}
</style></noscript>
</body>
</html>rite('<div style=\"position: relative; display: inline-block; overflow: hidden;\">\r\n  <div id=\'r7b1-blitz-desktop-above-comments\'>\r\n      <script async src=\'https://www.googletagservices.com/tag/js/gpt.js\'><\/script>\r\n      <script>\r\n          var googletag = googletag || {};\r\n          googletag.cmd = googletag.cmd || [];\r\n          googletag.cmd.push(function() {\r\n              googletag.defineSlot(\'/21855143178/r7b1/blitz-desktop-above-comments\', [[728, 90]], \'r7b1-blitz-desktop-above-comments\').addService(googletag.pubads()),\r\n              googletag.pubads().enableSingleRequest(),\r\n              googletag.enableServices(),\r\n              googletag.display(\'r7b1-blitz-desktop-above-comments\')\r\n          });\r\n      <\/script>\r\n  <\/div>\r\n<\/div>');
  document.write("</div>");
})();




if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

}
adoceanblitzbgyncndpimfo.isEmpty=0;
function adoceanblitzbgkbcoludsui() {
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['300x250 Middle'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['kbcoludsui'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanblitzbgkbcoludsui', arg:'', isEmpty:0});}
/* @TemplateType JS */
(function() {
  if (window.ado === void 0) {
    throw "This template works only with placements codes (ado.js).";
  }

  var myDivId = "PEC-nyxifonsmiqtuxkiomqlogih";

  /* wklejony kod biblioteki ado_helpers.js */
  var onDocumentReady=function(){var e=[];var t=false;var o=false;function n(){if(!t){t=true;for(var n=0;n<e.length;n++){e[n].fn.call(window,e[n].ctx)}e=[]}}function a(){if(document.readyState==="complete"){n()}}return function(i,d){if(t){setTimeout(function(){i(d)},1);return}else{e.push({fn:i,ctx:d})}if(document.readyState==="complete"){setTimeout(n,1)}else if(!o){if(document.addEventListener){document.addEventListener("DOMContentLoaded",n,false);window.addEventListener("load",n,false)}else{document.attachEvent("onreadystatechange",a);window.attachEvent("onload",n)}o=true}}}();
  function activateAdoBuffer(n,t,o){function e(){var e=new AdoElement({id:n,orgId:n,clearId:n,_isBuffer:!0,onLoad:o});window.AdoElems=window.AdoElems||[];window.AdoElems.push(e);e.getDOMElement();e.initBuffor();t(e)}onDocumentReady(function(){if(ado.busy||typeof gao!=="undefined"&&gao.busy){ado.queue.unshift(function(){e()})}else{e()}})}
  function flushAdoBuffer(e){e.rewriteBuffor();e.dispatch()}
  function sendImgHit(e,t){e=e.replace(/\[TIMESTAMP\]/,(new Date).getTime())+"&extra="+encodeURIComponent(t.join("|"));var n=new Image(1,1);n.src=e}
  /* koniec wklejonego kodu biblioteki ado_helpers.js */

  var sendHits = (function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})(),
      emissionHits = [[{type: "commit", url:"https://blitzbg.adocean.pl/commit/nc=0/code=jbgCrHIKFqT1fqAc1s9Oq4.EXKZ929lkiVNJpZ1iZoD.G7/eprog=12/inner=ao%5Funiq%3Dnyxifonsmiqtuxkidedgicfh%7C%5Fhcpref%3Dblitzbg;/"},"https://blitzadbg.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=ncqbGztFbJ7fzvNjo9uH.LdN31Nkj67rTKjKtQKBGfj.97/stparam=zndonnimql/fastid=kwixqiwaomwpwcmuniikahpjaymk/sarg=NC;/inner=%7Cao_uniq%3Dnyxifonsmiqtuxkidedgicfh%7C;/extra=;"]],
      dropEmissionHits = [[{type: "commit", url:"https://blitzbg.adocean.pl/commit/nc=0/code=jbgCrHIKFqT1fqAc1s9Oq4.EXKZ929lkiVNJpZ1iZoD.G7/eprog=12/inner=ao%5Funiq%3Dnyxifonsmiqtuxkidedgicfh%7C%5Fhcpref%3Dblitzbg;/"},"https://blitzadbg.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=ncqbGztFbJ7fzvNjo9uH.LdN31Nkj67rTKjKtQKBGfj.97/stparam=zndonnimql/fastid=kwixqiwaomwpwcmuniikahpjaymk/sarg=NC;/inner=%7Cao_uniq%3Dnyxifonsmiqtuxkidedgicfh%7C;/extra=;/fastval=-1"]],
      additionalHits = [],
      hcIndex = 1,
      statsHitUrl = 'https://blitzadbg.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=ncqbGztFbJ7fzvNjo9uH.LdN31Nkj67rTKjKtQKBGfj.97/stparam=tprkeimfff/sarg=NC;/inner=%7Cao_uniq%3Dnyxifonsmiqtuxkidedgicfh%7C;',
      emissionHitUrl = 'https://blitzbg.adocean.pl/event/nc=0/code=jbgCrHIKFqT1fqAc1s9Oq4.EXKZ929lkiVNJpZ1iZoD.G7/eprog=12/inner=ao%5Funiq%3Dnyxifonsmiqtuxkidedgicfh%7C%5Fhcpref%3Dblitzbg;/data=https://blitzadbg.hit.gemius.pl/redot.gif/id=ncqbGztFbJ7fzvNjo9uH.LdN31Nkj67rTKjKtQKBGfj.97/stparam=zndonnimql/fastid=kwixqiwaomwpwcmuniikahpjaymk/sarg=NC;/inner=%7Cao_uniq%3Dnyxifonsmiqtuxkidedgicfh%7C;/extra=;',
      fitToken = "fit_token=" + Math.floor(Math.random() * 4294967296),
      FIT_TYPE_COUNT = 1,
      FIT_TYPE_DROP = 2;

  function buildExtraparams(extraParameters) {
    return "&extra="+encodeURIComponent(extraParameters.join("|"));
  }

  function buildExtraparamsStatsHit() {
    return statsHitUrl + buildExtraparams(["rtb_ao_win=1"]);
  }

  var ALL_EXTRA_PARAMS_REGEX = /[&/?;]extra=/g;
  var EXTRA_PARAM_REGEX = /([&/?;])extra=(.*?)($|\/|&|;)/;

  function hasExtraParam(url) {
    return url.match(EXTRA_PARAM_REGEX);
  }

  function addToExistingLastExtraParam(url, extraParameters) {
    var matches = url.match(ALL_EXTRA_PARAMS_REGEX);
    var lastMatch = matches[matches.length - 1];
    var lastMatchIndex = url.lastIndexOf(lastMatch);

    return url.substring(0, lastMatchIndex) + url.substring(lastMatchIndex)
      .replace(EXTRA_PARAM_REGEX, function(_, start, value, end) {
        value = decodeURIComponent(value)
          .trim()
          .split("|")
          .filter(e => e)
          .concat(extraParameters)
          .join("|");

        return start + "extra=" + encodeURIComponent(value) + end;
      });
  }

  function addParamsToHit(url, params) {
    if (hasExtraParam(url)) {
      return addToExistingLastExtraParam(url, params);
    }

    var param = buildExtraparams(params);

    if (url.match(/=$/)) {
      var i = Math.max(url.lastIndexOf('/'), url.lastIndexOf('&'));
      return url.substr(0, i) + param + url.substr(i);
    }

    return url + param;
  }


  function sendEmissionHits(type) {
    var hits = buildEmissionHits(type);

    hits = hits.concat(additionalHits);

    sendHits(hits);
  }

  function buildEmissionHits(type) {
    var hits = (type == FIT_TYPE_DROP) ? dropEmissionHits : emissionHits;

    var extraParameters = [
      "fit_type=" + type,
      fitToken
    ];

    hits[0][hcIndex] = addParamsToHit(hits[0][hcIndex], extraParameters);

    return hits;
  }

  if (window.adoPassbacks === void 0) {
    window.adoPassbacks = {};
  }

  passbackFnct = function() {
    var interphaseUnique = "nyxifonsmiqtuxkiipoqnjrt";

    if (ado.features && ado.features.passback) {
      ado.executePassback(interphaseUnique, myDivId);
    } else {
      var bids = window.AdOceanRTBAuctionAdServerBids;
      if (bids !== void 0 && bids[interphaseUnique] !== void 0 && typeof bids[interphaseUnique].creative == "function") {
        var nonDefaultCreative = !bids[interphaseUnique].isDefault;

        activateAdoBuffer(myDivId, function(adoElement) {
          var myDiv = document.getElementById(myDivId);
          if (myDiv.style) {
            myDiv.style.display = 'none';
          }
          bids[interphaseUnique].creative();
          flushAdoBuffer(adoElement);
          if (nonDefaultCreative) {
            additionalHits.push([buildExtraparamsStatsHit()]);
          }
          sendEmissionHits(FIT_TYPE_DROP);
        }, function() {
          var myDiv = document.getElementById(myDivId);
          if (myDiv && myDiv.style && _ado_elem.DOMElement.style) {
            _ado_elem.DOMElement.style.display = myDiv.style.display;
          }
        });
      }
    }
  };

  var passbackId = "blitzAds300x250_inside";
  if (window.adoPassbacks[passbackId] === void 0) {
    window.adoPassbacks[passbackId] = [];
  }
  window.adoPassbacks[passbackId].push(passbackFnct);

  if (!window.adoPassback) {
    window.adoPassback = function(id) {
      if (window.adoPassbacks[id] !== void 0) {
        var passbackFnct = window.adoPassbacks[id].shift();
        if (passbackFnct !== void 0) {
          passbackFnct();
        }
      }
    }
  }

  if (window.inFIF) {
    if (top.adoPassback === void 0) {
      var myTop = top;
      top.adoPassback = function(id) {
        if (myTop.adoPassbacks[id] !== void 0) {
          var passbackFnct = myTop.adoPassbacks[id].shift();
          if (passbackFnct !== void 0) {
            passbackFnct();
          }
        }
      }
    }
    if (top.adoPassbacks === void 0) {
      top.adoPassbacks = {};
    }
    if (top.adoPassbacks[passbackId] === void 0) {
      top.adoPassbacks[passbackId] = [];
    }
    top.adoPassbacks[passbackId].push(passbackFnct);
  }


  if (!window.adoPassback.isMessageHandlerBound) {
    function messageHandler(event) {
      if (event.data.aoFnctName !== void 0 && toString.call(event.data.aoArgs) === '[object Array]') {
        if (event.data.aoFnctName === "adoPassback" && event.data.aoArgs[0]) {
          window.adoPassback(event.data.aoArgs[0]);
        }
      }
    }

    if (window.addEventListener) {
      window.addEventListener("message", messageHandler, false);
    } else if (window.attachEvent) {
      window.attachEvent("onmessage", messageHandler);
    }

    window.adoPassback.isMessageHandlerBound = true;
  }

  var secondPhaseFnct = "adoceanblitzbgkbcoludsui_second_phase";
  if (secondPhaseFnct.length > 0 && typeof window[secondPhaseFnct] === 'function')
    window[secondPhaseFnct]();

  sendEmissionHits(FIT_TYPE_COUNT);
  document.write("<div id=\"" + myDivId + "\">");
  document.write('<div style=\"position: relative; display: inline-block; overflow: hidden;\">\r\n    <div id=\'r7b1-blitz-desktop-inside-second\'>\r\n    <script async src=\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\"><\/script>\r\n        <script>\r\n        window.googletag = window.googletag || { cmd: [] };\r\n      googletag.cmd.push(function () {\r\n            googletag.cmd.push(function() {\r\n                googletag.defineSlot(\'/21855143178/r7b1/blitz-desktop-inside-second\', [[300, 600]], \'r7b1-blitz-desktop-inside-second\').addService(googletag.pubads()),\r\n                googletag.enableServices(),\r\n                googletag.display(\'r7b1-blitz-desktop-inside-second\')\r\n            })\r\n        });\r\n        <\/script>\r\n    <\/div>\r\n<\/div>');
  document.write("</div>");
})();




if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

}
adoceanblitzbgkbcoludsui.isEmpty=0;
function adoceanblitzbgqpdrekqies() {
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['Megaboard'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['qpdrekqies'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanblitzbgqpdrekqies', arg:'', isEmpty:0});}
+function() {
    var config = {
        unique: 'nyxifonsmiqtuxkihfouokim',
        //ADOCEAN-17962
        htmlCode: "<script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8989293511003643\"\r\n     crossorigin=\"anonymous\"><\/script>\r\n<!-- Blitz.bg News 970x250 Megaboard -->\r\n<ins class=\"adsbygoogle\"\r\n     style=\"display:inline-block;width:970px;height:250px\"\r\n     data-ad-client=\"ca-pub-8989293511003643\"\r\n     data-ad-slot=\"6745558050\"><\/ins>\r\n<script>\r\n     (adsbygoogle = window.adsbygoogle || []).push({});\r\n<\/script>",
        jsSrc: '',

        image: {
            src: '',
            target: '_blank',
            clickTag: 'https://blitzadbg.hit.gemius.pl/hitredir/id=p4A1vzMnOb8UMJd8x.NNpcWmPxNB5u8GS0KEFCA0HNT.k7/stparam=zgqehtpmtx/fastid=enlupoqhjtqvgoknpervhyinoamt/sarg=NC;/inner=%7Cao_uniq%3Dnyxifonsmiqtuxkidedgicfh%7C;/extra=;/url=' + encodeURIComponent(''),
            width: '',
            height: '',
            style: ''
        }
    };

    if (config.image.src) {
        var imgConf = config.image;

        document.write('<a target="' + imgConf.target + '" href="' + imgConf.clickTag + '"><img id="' + config.unique + '_img" src="' + imgConf.src + '" WIDTH="' + imgConf.width + '" HEIGHT="' + imgConf.height + '" style="' + imgConf.style + '" border="0"></a>');

        if (typeof gao === "object" && typeof gao.inscreenRegisterElement === "function") {
            gao.inscreenRegisterElement("nyxifonsmiqtuxkihfouokim_img", "nyxifonsmiqtuxkihfouokim");
        }
    }

    if (config.jsSrc) {
        document.write('<script src="' + config.jsSrc + '"><\/script>');
    }

    +function() {

    }();

    if (config.htmlCode) {
        document.write(config.htmlCode);
    }
}();

document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://blitzadbg.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=p4A1vzMnOb8UMJd8x.NNpcWmPxNB5u8GS0KEFCA0HNT.k7/stparam=mgjodwfiuc/fastid=mhmzqrijtoooufiibavmcpjhgqll/sarg=NC;/inner=%7Cao_uniq%3Dnyxifonsmiqtuxkidedgicfh%7C;/extra=;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

}
adoceanblitzbgqpdrekqies.isEmpty=0;
function adoceanblitzbgxfnrmwjtjj() {
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanblitzbgxfnrmwjtjj', arg:'', isEmpty:1});}
document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://blitzadbg.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=bIGaphgNIyY_RD9G.qSloKQP7xdGEUMrIOogU7LZZ6n.97/stparam=ulipmnjhkq/fastid=donvlfadlikdsslisqaqpcfkrbjx/sarg=NC;/inner=%7Cao_uniq%3Dnyxifonsmiqtuxkidedgicfh%7C;/extra=;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }


}
adoceanblitzbgxfnrmwjtjj.isEmpty=1;
function adoceanblitzbgvedlpvltub() {
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanblitzbgvedlpvltub', arg:'', isEmpty:1});}
document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://blitzadbg.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=bIGaphgNIyY_RD9G.qSloKQP7xdGEUMrIOogU7LZZ6n.97/stparam=ogrhhuiqkm/fastid=donvlfadlikdsslisqaqpcfkrbjx/sarg=NC;/inner=%7Cao_uniq%3Dnyxifonsmiqtuxkidedgicfh%7C;/extra=;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }


}
adoceanblitzbgvedlpvltub.isEmpty=1;
function adoceanblitzbgxbjeprngdh() {
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['300x250 Bottom'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['xbjeprngdh'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanblitzbgxbjeprngdh', arg:'', isEmpty:0});}
/* @TemplateType JS */
(function() {
  if (window.ado === void 0) {
    throw "This template works only with placements codes (ado.js).";
  }

  var myDivId = "PEC-nyxifonsmiqtuxkisogpqgjl";

  /* wklejony kod biblioteki ado_helpers.js */
  var onDocumentReady=function(){var e=[];var t=false;var o=false;function n(){if(!t){t=true;for(var n=0;n<e.length;n++){e[n].fn.call(window,e[n].ctx)}e=[]}}function a(){if(document.readyState==="complete"){n()}}return function(i,d){if(t){setTimeout(function(){i(d)},1);return}else{e.push({fn:i,ctx:d})}if(document.readyState==="complete"){setTimeout(n,1)}else if(!o){if(document.addEventListener){document.addEventListener("DOMContentLoaded",n,false);window.addEventListener("load",n,false)}else{document.attachEvent("onreadystatechange",a);window.attachEvent("onload",n)}o=true}}}();
  function activateAdoBuffer(n,t,o){function e(){var e=new AdoElement({id:n,orgId:n,clearId:n,_isBuffer:!0,onLoad:o});window.AdoElems=window.AdoElems||[];window.AdoElems.push(e);e.getDOMElement();e.initBuffor();t(e)}onDocumentReady(function(){if(ado.busy||typeof gao!=="undefined"&&gao.busy){ado.queue.unshift(function(){e()})}else{e()}})}
  function flushAdoBuffer(e){e.rewriteBuffor();e.dispatch()}
  function sendImgHit(e,t){e=e.replace(/\[TIMESTAMP\]/,(new Date).getTime())+"&extra="+encodeURIComponent(t.join("|"));var n=new Image(1,1);n.src=e}
  /* koniec wklejonego kodu biblioteki ado_helpers.js */

  var sendHits = (function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})(),
      emissionHits = [[{type: "commit", url:"https://blitzbg.adocean.pl/commit/nc=0/code=lwgIq.nfcWJZ1lkXiZaSj4Akbh99yvPuwZEMCRyX2Pr.y7/eprog=12/inner=ao%5Funiq%3Dnyxifonsmiqtuxkidedgicfh%7C%5Fhcpref%3Dblitzbg;/"},"https://blitzadbg.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=ncqbGztFbJ7fzvNjo9uH.LdN31Nkj67rTKjKtQKBGfj.97/stparam=xdpijuighx/fastid=mujzdsvehpvfpqkfgvtfojwbdtmn/sarg=NC;/inner=%7Cao_uniq%3Dnyxifonsmiqtuxkidedgicfh%7C;/extra=;"]],
      dropEmissionHits = [[{type: "commit", url:"https://blitzbg.adocean.pl/commit/nc=0/code=lwgIq.nfcWJZ1lkXiZaSj4Akbh99yvPuwZEMCRyX2Pr.y7/eprog=12/inner=ao%5Funiq%3Dnyxifonsmiqtuxkidedgicfh%7C%5Fhcpref%3Dblitzbg;/"},"https://blitzadbg.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=ncqbGztFbJ7fzvNjo9uH.LdN31Nkj67rTKjKtQKBGfj.97/stparam=xdpijuighx/fastid=mujzdsvehpvfpqkfgvtfojwbdtmn/sarg=NC;/inner=%7Cao_uniq%3Dnyxifonsmiqtuxkidedgicfh%7C;/extra=;/fastval=-1"]],
      additionalHits = [],
      hcIndex = 1,
      statsHitUrl = 'https://blitzadbg.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=ncqbGztFbJ7fzvNjo9uH.LdN31Nkj67rTKjKtQKBGfj.97/stparam=rfnfqompmn/sarg=NC;/inner=%7Cao_uniq%3Dnyxifonsmiqtuxkidedgicfh%7C;',
      emissionHitUrl = 'https://blitzbg.adocean.pl/event/nc=0/code=lwgIq.nfcWJZ1lkXiZaSj4Akbh99yvPuwZEMCRyX2Pr.y7/eprog=12/inner=ao%5Funiq%3Dnyxifonsmiqtuxkidedgicfh%7C%5Fhcpref%3Dblitzbg;/data=https://blitzadbg.hit.gemius.pl/redot.gif/id=ncqbGztFbJ7fzvNjo9uH.LdN31Nkj67rTKjKtQKBGfj.97/stparam=xdpijuighx/fastid=mujzdsvehpvfpqkfgvtfojwbdtmn/sarg=NC;/inner=%7Cao_uniq%3Dnyxifonsmiqtuxkidedgicfh%7C;/extra=;',
      fitToken = "fit_token=" + Math.floor(Math.random() * 4294967296),
      FIT_TYPE_COUNT = 1,
      FIT_TYPE_DROP = 2;

  function buildExtraparams(extraParameters) {
    return "&extra="+encodeURIComponent(extraParameters.join("|"));
  }

  function buildExtraparamsStatsHit() {
    return statsHitUrl + buildExtraparams(["rtb_ao_win=1"]);
  }

  var ALL_EXTRA_PARAMS_REGEX = /[&/?;]extra=/g;
  var EXTRA_PARAM_REGEX = /([&/?;])extra=(.*?)($|\/|&|;)/;

  function hasExtraParam(url) {
    return url.match(EXTRA_PARAM_REGEX);
  }

  function addToExistingLastExtraParam(url, extraParameters) {
    var matches = url.match(ALL_EXTRA_PARAMS_REGEX);
    var lastMatch = matches[matches.length - 1];
    var lastMatchIndex = url.lastIndexOf(lastMatch);

    return url.substring(0, lastMatchIndex) + url.substring(lastMatchIndex)
      .replace(EXTRA_PARAM_REGEX, function(_, start, value, end) {
        value = decodeURIComponent(value)
          .trim()
          .split("|")
          .filter(e => e)
          .concat(extraParameters)
          .join("|");

        return start + "extra=" + encodeURIComponent(value) + end;
      });
  }

  function addParamsToHit(url, params) {
    if (hasExtraParam(url)) {
      return addToExistingLastExtraParam(url, params);
    }

    var param = buildExtraparams(params);

    if (url.match(/=$/)) {
      var i = Math.max(url.lastIndexOf('/'), url.lastIndexOf('&'));
      return url.substr(0, i) + param + url.substr(i);
    }

    return url + param;
  }


  function sendEmissionHits(type) {
    var hits = buildEmissionHits(type);

    hits = hits.concat(additionalHits);

    sendHits(hits);
  }

  function buildEmissionHits(type) {
    var hits = (type == FIT_TYPE_DROP) ? dropEmissionHits : emissionHits;

    var extraParameters = [
      "fit_type=" + type,
      fitToken
    ];

    hits[0][hcIndex] = addParamsToHit(hits[0][hcIndex], extraParameters);

    return hits;
  }

  if (window.adoPassbacks === void 0) {
    window.adoPassbacks = {};
  }

  passbackFnct = function() {
    var interphaseUnique = "nyxifonsmiqtuxkirhmjonri";

    if (ado.features && ado.features.passback) {
      ado.executePassback(interphaseUnique, myDivId);
    } else {
      var bids = window.AdOceanRTBAuctionAdServerBids;
      if (bids !== void 0 && bids[interphaseUnique] !== void 0 && typeof bids[interphaseUnique].creative == "function") {
        var nonDefaultCreative = !bids[interphaseUnique].isDefault;

        activateAdoBuffer(myDivId, function(adoElement) {
          var myDiv = document.getElementById(myDivId);
          if (myDiv.style) {
            myDiv.style.display = 'none';
          }
          bids[interphaseUnique].creative();
          flushAdoBuffer(adoElement);
          if (nonDefaultCreative) {
            additionalHits.push([buildExtraparamsStatsHit()]);
          }
          sendEmissionHits(FIT_TYPE_DROP);
        }, function() {
          var myDiv = document.getElementById(myDivId);
          if (myDiv && myDiv.style && _ado_elem.DOMElement.style) {
            _ado_elem.DOMElement.style.display = myDiv.style.display;
          }
        });
      }
    }
  };

  var passbackId = "blitz_300x250_desktop_articles_bottom";
  if (window.adoPassbacks[passbackId] === void 0) {
    window.adoPassbacks[passbackId] = [];
  }
  window.adoPassbacks[passbackId].push(passbackFnct);

  if (!window.adoPassback) {
    window.adoPassback = function(id) {
      if (window.adoPassbacks[id] !== void 0) {
        var passbackFnct = window.adoPassbacks[id].shift();
        if (passbackFnct !== void 0) {
          passbackFnct();
        }
      }
    }
  }

  if (window.inFIF) {
    if (top.adoPassback === void 0) {
      var myTop = top;
      top.adoPassback = function(id) {
        if (myTop.adoPassbacks[id] !== void 0) {
          var passbackFnct = myTop.adoPassbacks[id].shift();
          if (passbackFnct !== void 0) {
            passbackFnct();
          }
        }
      }
    }
    if (top.adoPassbacks === void 0) {
      top.adoPassbacks = {};
    }
    if (top.adoPassbacks[passbackId] === void 0) {
      top.adoPassbacks[passbackId] = [];
    }
    top.adoPassbacks[passbackId].push(passbackFnct);
  }


  if (!window.adoPassback.isMessageHandlerBound) {
    function messageHandler(event) {
      if (event.data.aoFnctName !== void 0 && toString.call(event.data.aoArgs) === '[object Array]') {
        if (event.data.aoFnctName === "adoPassback" && event.data.aoArgs[0]) {
          window.adoPassback(event.data.aoArgs[0]);
        }
      }
    }

    if (window.addEventListener) {
      window.addEventListener("message", messageHandler, false);
    } else if (window.attachEvent) {
      window.attachEvent("onmessage", messageHandler);
    }

    window.adoPassback.isMessageHandlerBound = true;
  }

  var secondPhaseFnct = "adoceanblitzbgxbjeprngdh_second_phase";
  if (secondPhaseFnct.length > 0 && typeof window[secondPhaseFnct] === 'function')
    window[secondPhaseFnct]();

  sendEmissionHits(FIT_TYPE_COUNT);
  document.write("<div id=\"" + myDivId + "\">");
  document.write('<div style=\"position: relative; display: inline-block; overflow: hidden;\">\r\n  <div id=\'r7b1-blitz-desktop-articles-bottom\'>\r\n    <script async src=\'https://www.googletagservices.com/tag/js/gpt.js\'><\/script>\r\n      <script>\r\n          var googletag = googletag || {};\r\n          googletag.cmd = googletag.cmd || [];\r\n          googletag.cmd.push(function() {\r\n              googletag.defineSlot(\'/21855143178/r7b1/blitz-desktop-articles-bottom\', [[300,250]], \'r7b1-blitz-desktop-articles-bottom\').addService(googletag.pubads());\r\n              googletag.pubads().enableSingleRequest();\r\n              googletag.enableServices();\r\n              googletag.display(\'r7b1-blitz-desktop-articles-bottom\')\r\n          });\r\n      <\/script>\r\n  <\/div>\r\n<\/div>');
  document.write("</div>");
})();




if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

}
adoceanblitzbgxbjeprngdh.isEmpty=0;
function adoceanblitzbgvojtgmsqej() {
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['468x60 Bottom'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['vojtgmsqej'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanblitzbgvojtgmsqej', arg:'', isEmpty:0});}
+function() {
    var config = {
        unique: 'nyxifonsmiqtuxkilheirkjq',
        //ADOCEAN-17962
        htmlCode: "<script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8989293511003643\"\r\n     crossorigin=\"anonymous\"><\/script>\r\n<!-- 728x90 Bottom -->\r\n<ins class=\"adsbygoogle\"\r\n     style=\"display:inline-block;width:728px;height:90px\"\r\n     data-ad-client=\"ca-pub-8989293511003643\"\r\n     data-ad-slot=\"4756275412\"><\/ins>\r\n<script>\r\n     (adsbygoogle = window.adsbygoogle || []).push({});\r\n<\/script>",
        jsSrc: '',

        image: {
            src: '',
            target: '_blank',
            clickTag: 'https://blitzadbg.hit.gemius.pl/hitredir/id=p4A1vzMnOb8UMJd8x.NNpcWmPxNB5u8GS0KEFCA0HNT.k7/stparam=vggtluhtyr/fastid=fmgdvgxhbmszdkbebbhikrkwacjb/sarg=NC;/inner=%7Cao_uniq%3Dnyxifonsmiqtuxkidedgicfh%7C;/extra=;/url=' + encodeURIComponent(''),
            width: '',
            height: '',
            style: ''
        }
    };

    if (config.image.src) {
        var imgConf = config.image;

        document.write('<a target="' + imgConf.target + '" href="' + imgConf.clickTag + '"><img id="' + config.unique + '_img" src="' + imgConf.src + '" WIDTH="' + imgConf.width + '" HEIGHT="' + imgConf.height + '" style="' + imgConf.style + '" border="0"></a>');

        if (typeof gao === "object" && typeof gao.inscreenRegisterElement === "function") {
            gao.inscreenRegisterElement("nyxifonsmiqtuxkilheirkjq_img", "nyxifonsmiqtuxkilheirkjq");
        }
    }

    if (config.jsSrc) {
        document.write('<script src="' + config.jsSrc + '"><\/script>');
    }

    +function() {

    }();

    if (config.htmlCode) {
        document.write(config.htmlCode);
    }
}();

document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://blitzadbg.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=p4A1vzMnOb8UMJd8x.NNpcWmPxNB5u8GS0KEFCA0HNT.k7/stparam=yfpmixnodw/fastid=mgkkfvhgtbptfmapnpiyailpsslh/sarg=NC;/inner=%7Cao_uniq%3Dnyxifonsmiqtuxkidedgicfh%7C;/extra=;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

}
adoceanblitzbgvojtgmsqej.isEmpty=0;
function adoceanblitzbgnalhixjnzn() {
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['300x250 Top'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['nalhixjnzn'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanblitzbgnalhixjnzn', arg:'', isEmpty:0});}
+function() {
    var config = {
        unique: 'nyxifonsmiqtuxkieqrqrojv',
        //ADOCEAN-17962
        htmlCode: "<script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8989293511003643\"\r\n     crossorigin=\"anonymous\"><\/script>\r\n<!-- Blitz.bg All pages 300x600 -->\r\n<ins class=\"adsbygoogle\"\r\n     style=\"display:inline-block;width:300px;height:600px\"\r\n     data-ad-client=\"ca-pub-8989293511003643\"\r\n     data-ad-slot=\"6366604058\"><\/ins>\r\n<script>\r\n     (adsbygoogle = window.adsbygoogle || []).push({});\r\n<\/script>\r\n\r\n",
        jsSrc: '',

        image: {
            src: '',
            target: '_blank',
            clickTag: 'https://blitzadbg.hit.gemius.pl/hitredir/id=p4A1vzMnOb8UMJd8x.NNpcWmPxNB5u8GS0KEFCA0HNT.k7/stparam=khdihripqm/fastid=inntyuaaoltgyxjrdduzjnmtcqne/sarg=NC;/inner=%7Cao_uniq%3Dnyxifonsmiqtuxkidedgicfh%7C;/extra=;/url=' + encodeURIComponent(''),
            width: '',
            height: '',
            style: ''
        }
    };

    if (config.image.src) {
        var imgConf = config.image;

        document.write('<a target="' + imgConf.target + '" href="' + imgConf.clickTag + '"><img id="' + config.unique + '_img" src="' + imgConf.src + '" WIDTH="' + imgConf.width + '" HEIGHT="' + imgConf.height + '" style="' + imgConf.style + '" border="0"></a>');

        if (typeof gao === "object" && typeof gao.inscreenRegisterElement === "function") {
            gao.inscreenRegisterElement("nyxifonsmiqtuxkieqrqrojv_img", "nyxifonsmiqtuxkieqrqrojv");
        }
    }

    if (config.jsSrc) {
        document.write('<script src="' + config.jsSrc + '"><\/script>');
    }

    +function() {
        console.log("AO_Google AdSense 300x600");
    }();

    if (config.htmlCode) {
        document.write(config.htmlCode);
    }
}();

document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://blitzadbg.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=p4A1vzMnOb8UMJd8x.NNpcWmPxNB5u8GS0KEFCA0HNT.k7/stparam=ngmrduokkr/fastid=dwfrwjtililckodnxpvjienmvglx/sarg=NC;/inner=%7Cao_uniq%3Dnyxifonsmiqtuxkidedgicfh%7C;/extra=;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

}
adoceanblitzbgnalhixjnzn.isEmpty=0;
function adoceanblitzbgvppmqmhred() {
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanblitzbgvppmqmhred', arg:'', isEmpty:1});}
document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://blitzadbg.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=bIGaphgNIyY_RD9G.qSloKQP7xdGEUMrIOogU7LZZ6n.97/stparam=skofmqfrme/fastid=donvlfadlikdsslisqaqpcfkrbjx/sarg=NC;/inner=%7Cao_uniq%3Dnyxifonsmiqtuxkidedgicfh%7C;/extra=;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }


}
adoceanblitzbgvppmqmhred.isEmpty=1;
function adoceanblitzbgkbcoludsui_second_phase() {

if (typeof AdOceanRTBAuctionAdServerBids==="undefined") AdOceanRTBAuctionAdServerBids={};
(function(){
var passbackCustomData={ecpm:'0', isDefault: 0};
var passbackFunction=function(){
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['300x250 Middle'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['kbcoludsui'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanblitzbgkbcoludsСпартак (Плевен) пречупи ЦСКА в последната минута</a></h3>
<span class="published">7 Февр. 2024 21:23 | 1 <a href="https://blitz.bg/sport/basketbol/spartak-pleven-prechupi-tsska-v-poslednata-minuta_535570.html#comments">коментара</a></span>
<span class="text">Александър Радукич най-резултатен в мача с 21 точки</span>
</div>
</article>
</div>
<div class="row bottom-margin">
<article class="thumb cat-list basketbol">
<div class="col-sm-5">
<div class="thumb-wrap relative">
<a href="https://blitz.bg/sport/basketbol/dalas-leti-donchich-blesti_535519.html" title="Далас лети, Дончич блести">
<div class="media">
<img width="390" height="218" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/390/202402/1707281699610x.jpg" alt="Далас лети, Дончич блести" class="img-responsive" />
</div>
</a>
<a href="https://blitz.bg/sport/basketbol" class="theme cat4 ">
Баскетбол
</a>
</div>
</div>
<div class="col-sm-7">
<h3><a href="https://blitz.bg/sport/basketbol/dalas-leti-donchich-blesti_535519.html" title="Далас лети, Дончич блести">Далас лети, Дончич блести</a></h3>
<span class="published">7 Февр. 2024 6:55 | 1 <a href="https://blitz.bg/sport/basketbol/dalas-leti-donchich-blesti_535519.html#comments">коментара</a></span>
<span class="text">Словенецът и Кайри Ървинг най-добри при успех навън</span>
</div>
</article>
</div>
<div class="row bottom-margin">
<article class="thumb cat-list basketbol">
<div class="col-sm-5">
<div class="thumb-wrap relative">
<a href="https://blitz.bg/sport/basketbol/golyama-zvezda-ot-nba-pretrpya-operatsiya_535502.html" title="Голяма звезда от НБА претърпя операция">
<div class="media">
<img width="390" height="218" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/390/202402/1707243883gettyimages-1989092952.jpg" alt="Голяма звезда от НБА претърпя операция" class="img-responsive" />
</div>
</a>
<a href="https://blitz.bg/sport/basketbol" class="theme cat4 ">
Баскетбол
</a>
</div>
</div>
<div class="col-sm-7">
<h3><a href="https://blitz.bg/sport/basketbol/golyama-zvezda-ot-nba-pretrpya-operatsiya_535502.html" title="Голяма звезда от НБА претърпя операция">Голяма звезда от НБА претърпя операция</a></h3>
<span class="published">6 Февр. 2024 21:18 | 1 <a href="https://blitz.bg/sport/basketbol/golyama-zvezda-ot-nba-pretrpya-operatsiya_535502.html#comments">коментара</a></span>
<span class="text">Джоел Ембийд трябва да почива четири седмици</span>
</div>
</article>
</div>
<div class="row bottom-margin">
<article class="thumb cat-list basketbol">
<div class="col-sm-5">
<div class="thumb-wrap relative">
<a href="https://blitz.bg/sport/basketbol/bradata-bezposhchaden-ot-nakazatelnata-liniya_535460.html" title="Брадата безпощаден от наказателната линия">
<div class="media">
<img width="390" height="218" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/390/202402/17072091881.jpg" alt="Брадата безпощаден от наказателната линия" class="img-responsive" />
</div>
</a>
<a href="https://blitz.bg/sport/basketbol" class="theme cat4 ">
Баскетбол
</a>
</div>
</div>
<div class="col-sm-7">
<h3><a href="https://blitz.bg/sport/basketbol/bradata-bezposhchaden-ot-nakazatelnata-liniya_535460.html" title="Брадата безпощаден от наказателната линия">Брадата безпощаден от наказателната линия</a></h3>
<span class="published">6 Февр. 2024 10:47 | 1 <a href="https://blitz.bg/sport/basketbol/bradata-bezposhchaden-ot-nakazatelnata-liniya_535460.html#comments">коментара</a></span>
<span class="text">Джеймс Хардън с 10 точни стрелби от 10 опита, направи дабъл-дабъл за победа на Лос Анджелис Клипърс</span>
</div>
</article>
</div>

<div class="text-center">
<nav><ul class="pagination"><li class="active"><a>1</a></li><li><a href="?page=2">2</a></li><li><a href="?page=3">3</a></li><li><a href="?page=4">4</a></li><li><a href="?page=5">5</a></li><li><a href="?page=6">6</a></li><li><a href="?page=7">7</a></li><li class="disabled"><a>...</a></li><li><a href="?page=1228">1228</a></li><li><a href="?page=1229">1229</a></li><li><a href="?page=2"> <span aria-hidden="true">&raquo;</span></a></li></ul></nav>
<!--  $articles->render();  -->
</div>

</div>

</div>

</div>

<div id="sidebar">
<div class="ad">
<div id="adoceanblitzbglmhtpqmgnp"></div>
<script type="text/javascript">
		/* (c)AdOcean 2003-2013, blitzads_bg.Blitz.bg. Sport Category Top */
		ado.slave('adoceanblitzbglmhtpqmgnp', {myMaster: 'bXisCQORTaOWSE9Vg6evO19b32zZ9y9O8B9k.F3nG3z.l7' });
		</script>
</div>
<section class="module-news moreFromCat top-margin">
<header>
<h2>Акценти ОТ <span style="color:#d36105">Баскетбол</span> </h2>
<span class="borderline"></span>
</header>
<div class="article-container">
<article class="clearfix">
<a title="Везенков блесна при бой над шампиона ВИДЕО" href="https://blitz.bg/sport/basketbol/vezenkov-blesna-pri-boy-nad-shampiona-video_535727.html" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075451052.jpg" alt="Везенков блесна при бой над шампиона ВИДЕО" />
</a>
<div class="info">
<div class="detiles">
<span>10 Февр. 2024 </span>
<span><i class="fa fa-eye"></i> 13057 </span>
<span><i class="fa fa-comments"></i> 1 </span>
</div>
<h3><a title="Везенков блесна при бой над шампиона ВИДЕО" href="https://blitz.bg/sport/basketbol/vezenkov-blesna-pri-boy-nad-shampiona-video_535727.html">Везенков блесна при бой над шампиона ВИДЕО</a></h3>
</div>
</article>
<article class="clearfix">
<a title="Баскетболът в Северна Корея – забивката е тройка, пропуските се наказват, а мачовете може да завършат наравно" href="https://blitz.bg/sport/basketbol/basketbolt-v-severna-koreya-zabivkata-e-troyka-propuskite-se-nakazvat-a-machovete-mozhe-da-zavrshat-naravno_535665.html" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17074688352.jpg" alt="Баскетболът в Северна Корея – забивката е тройка, пропуските се наказват, а мачовете може да завършат наравно" />
</a>
<div class="info">
<div class="detiles">
<span>9 Февр. 2024 </span>
<span><i class="fa fa-eye"></i> 15732 </span>
<span><i class="fa fa-comments"></i> 0 </span>
</div>
<h3><a title="Баскетболът в Северна Корея – забивката е тройка, пропуските се наказват, а мачовете може да завършат наравно" href="https://blitz.bg/sport/basketbol/basketbolt-v-severna-koreya-zabivkata-e-troyka-propuskite-se-nakazvat-a-machovete-mozhe-da-zavrshat-naravno_535665.html">Баскетболът в Северна Корея – забивката е тройка, пропуските се наказват, а мачовете може да завършат наравно</a></h3>
</div>
</article>
<article class="clearfix">
<a title="Край на сагата с Везенков!" href="https://blitz.bg/sport/basketbol/kray-na-sagata-s-vezenkov_535660.html" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17074640132.jpg" alt="Край на сагата с Везенков!" />
</a>
<div class="info">
<div class="detiles">
<span>9 Февр. 2024 </span>
<span><i class="fa fa-eye"></i> 132383 </span>
<span><i class="fa fa-comments"></i> 0 </span>
</div>
<h3><a title="Край на сагата с Везенков!" href="https://blitz.bg/sport/basketbol/kray-na-sagata-s-vezenkov_535660.html">Край на сагата с Везенков!</a></h3>
</div>
</article>
<article class="clearfix">
<a title="Сакраменто с голяма издънка при завръщането на Александър Везенков" href="https://blitz.bg/sport/basketbol/sakramento-s-golyama-izdnka-pri-zavrshchaneto-na-aleksandr-vezenkov_535585.html" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17073680531.jpg" alt="Сакраменто с голяма издънка при завръщането на Александър Везенков" />
</a>
<div class="info">
<div class="detiles">
<span>8 Февр. 2024 </span>
<span><i class="fa fa-eye"></i> 20311 </span>
<span><i class="fa fa-comments"></i> 0 </span>
</div>
<h3><a title="Сакраменто с голяма издънка при завръщането на Александър Везенков" href="https://blitz.bg/sport/basketbol/sakramento-s-golyama-izdnka-pri-zavrshchaneto-na-aleksandr-vezenkov_535585.html">Сакраменто с голяма издънка при завръщането на Александър Везенков</a></h3>
</div>
</article>
<article class="clearfix">
<a title="Нова силна подкрепа за Везенков при загуба на Сакраменто СНИМКА" href="https://blitz.bg/sport/basketbol/nova-silna-podkrepa-za-vezenkov-pri-zaguba-na-sakramento-snimka_535451.html" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17071953551.jpg" alt="Нова силна подкрепа за Везенков при загуба на Сакраменто СНИМКА" />
</a>
<div class="info">
<div class="detiles">
<span>6 Февр. 2024 </span>
<span><i class="fa fa-eye"></i> 3870 </span>
<span><i class="fa fa-comments"></i> 0 </span>
</div>
<h3><a title="Нова силна подкрепа за Везенков при загуба на Сакраменто СНИМКА" href="https://blitz.bg/sport/basketbol/nova-silna-podkrepa-za-vezenkov-pri-zaguba-na-sakramento-snimka_535451.html">Нова силна подкрепа за Везенков при загуба на Сакраменто СНИМКА</a></h3>
</div>
</article>
<article class="clearfix">
<a title="Нов удар по Левски, звезда си тръгна" href="https://blitz.bg/sport/basketbol/nov-udar-po-levski-zvezda-si-trgna_535356.html" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/1707071076559576.jpg" alt="Нов удар по Левски, звезда си тръгна" />
</a>
<div class="info">
<div class="detiles">
<span>4 Февр. 2024 </span>
<span><i class="fa fa-eye"></i> 11992 </span>
<span><i class="fa fa-comments"></i> 1 </span>
</div>
<h3><a title="Нов удар по Левски, звезда си тръгна" href="https://blitz.bg/sport/basketbol/nov-udar-po-levski-zvezda-si-trgna_535356.html">Нов удар по Левски, звезда си тръгна</a></h3>
</div>
</article>
<article class="clearfix">
<a title="Напуснал ЦСКА пред БЛИЦ: Дано завършат сезона" href="https://blitz.bg/sport/basketbol/napusnal-tsska-pred-blits-dano-zavrshat-sezona_535352.html" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/1707070784559605.jpg" alt="Напуснал ЦСКА пред БЛИЦ: Дано завършат сезона" />
</a>
<div class="info">
<div class="detiles">
<span>4 Февр. 2024 </span>
<span><i class="fa fa-eye"></i> 4824 </span>
<span><i class="fa fa-comments"></i> 0 </span>
</div>
<h3><a title="Напуснал ЦСКА пред БЛИЦ: Дано завършат сезона" href="https://blitz.bg/sport/basketbol/napusnal-tsska-pred-blits-dano-zavrshat-sezona_535352.html">Напуснал ЦСКА пред БЛИЦ: Дано завършат сезона</a></h3>
</div>
</article>
</div>
</section>
<div class="ad">
<div id="adoceanblitzbgymojdoglik"></div>
<script type="text/javascript">
		/* (c)AdOcean 2003-2013, blitzads_bg.Blitz.bg. Sport Category Middle */
		ado.slave('adoceanblitzbgymojdoglik', {myMaster: 'bXisCQORTaOWSE9Vg6evO19b32zZ9y9O8B9k.F3nG3z.l7' });
		</script>
</div>
<section class="most-tabs">
<ul class="tabs-nav">
<li class="active"><a href="#topicalNews" class="tab">актуално</a></li>
<li><a href="#mostReaded" class="tab">четени</a></li>
<li><a href="#mostCommented" class="tab">коментирани</a></li>
</ul>
<div class="tabs-container">
<div id="topicalNews" class="tab-content active">
<div class="mostTabSlider" id="actualslider">
<div class="slide">
<article>
<a href="https://blitz.bg/sport/ispaniya/real-otvya-presledvacha-si-v-bitkata-za-titlata-video_535784.html" title="Реал отвя преследвача си в битката за титлата ВИДЕО" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/1707593476gettyimages-2000652893.jpg" alt="Реал отвя преследвача си в битката за титлата ВИДЕО" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 1 </span>
<span><i class="fa fa-eye"></i> 1505 </span>
<span><a href="https://blitz.bg/sport/ispaniya" title="Испания">Испания</a></span>
</div>
<a href="https://blitz.bg/sport/ispaniya/real-otvya-presledvacha-si-v-bitkata-za-titlata-video_535784.html" title="Реал отвя преследвача си в битката за титлата ВИДЕО">
<h3>Реал отвя преследвача си в битката за титлата ВИДЕО </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/italiya/inter-likuva-sled-strakhotno-zrelishche-v-rim-video_535782.html" title="Интер ликува след страхотно зрелище в Рим ВИДЕО" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/1707591723gettyimages-2000550973.jpg" alt="Интер ликува след страхотно зрелище в Рим ВИДЕО" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 1 </span>
<span><i class="fa fa-eye"></i> 1346 </span>
<span><a href="https://blitz.bg/sport/italiya" title="Италия">Италия</a></span>
</div>
<a href="https://blitz.bg/sport/italiya/inter-likuva-sled-strakhotno-zrelishche-v-rim-video_535782.html" title="Интер ликува след страхотно зрелище в Рим ВИДЕО">
<h3>Интер ликува след страхотно зрелище в Рим ВИДЕО </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/svetoven-futbol/zamesikha-legenda-v-golyama-izmama_535780.html" title="Замесиха легенда в голяма измама" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/1707589795gettyimages-1388970391.jpg" alt="Замесиха легенда в голяма измама" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 1 </span>
<span><i class="fa fa-eye"></i> 3517 </span>
<span><a href="https://blitz.bg/sport/svetoven-futbol" title="Световен футбол">Световен футбол</a></span>
</div>
<a href="https://blitz.bg/sport/svetoven-futbol/zamesikha-legenda-v-golyama-izmama_535780.html" title="Замесиха легенда в голяма измама">
<h3>Замесиха легенда в голяма измама </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/svetoven-futbol/katar-likuva-s-kupata-na-aziya-sled-khettrik-ot-duzpi-video_535774.html" title="Катар ликува с Купата на Азия след хеттрик от дузпи ВИДЕО" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075855711.jpg" alt="Катар ликува с Купата на Азия след хеттрик от дузпи ВИДЕО" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 1 </span>
<span><i class="fa fa-eye"></i> 1955 </span>
<span><a href="https://blitz.bg/sport/svetoven-futbol" title="Световен футбол">Световен футбол</a></span>
</div>
<a href="https://blitz.bg/sport/svetoven-futbol/katar-likuva-s-kupata-na-aziya-sled-khettrik-ot-duzpi-video_535774.html" title="Катар ликува с Купата на Азия след хеттрик от дузпи ВИДЕО">
<h3>Катар ликува с Купата на Азия след хеттрик от дузпи ВИДЕО </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/svetoven-futbol/livrpul-otgovori-na-manchestr-siti-vrna-se-na-vrkha-video_535772.html" title="Ливърпул отговори на Манчестър Сити, върна се на върха ВИДЕО" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075846691.jpg" alt="Ливърпул отговори на Манчестър Сити, върна се на върха ВИДЕО" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 0 </span>
<span><i class="fa fa-eye"></i> 2034 </span>
<span><a href="https://blitz.bg/sport/svetoven-futbol" title="Световен футбол">Световен футбол</a></span>
</div>
<a href="https://blitz.bg/sport/svetoven-futbol/livrpul-otgovori-na-manchestr-siti-vrna-se-na-vrkha-video_535772.html" title="Ливърпул отговори на Манчестър Сити, върна се на върха ВИДЕО">
<h3>Ливърпул отговори на Манчестър Сити, върна се на върха ВИДЕО </h3>
</a>
</div>
</article>
</div>
<div class="slide">
<article>
<a href="https://blitz.bg/sport/sport/mirela-demireva-donese-zlato-za-blgariya-v-istanbul_535768.html" title="Мирела Демирева донесе злато за България в Истанбул" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075820601.jpg" alt="Мирела Демирева донесе злато за България в Истанбул" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 2 </span>
<span><i class="fa fa-eye"></i> 4212 </span>
<span><a href="https://blitz.bg/sport/sport" title="Спорт">Спорт</a></span>
</div>
<a href="https://blitz.bg/sport/sport/mirela-demireva-donese-zlato-za-blgariya-v-istanbul_535768.html" title="Мирела Демирева донесе злато за България в Истанбул">
<h3>Мирела Демирева донесе злато за България в Истанбул </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/bg-futbol/ekshn-na-ivaylo-boy-mezhdu-fenove-na-ludogorets-video_535766.html" title="Екшън на „Ивайло“! Бой между фенове на Лудогорец ВИДЕО" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075806261.jpg" alt="Екшън на „Ивайло“! Бой между фенове на Лудогорец ВИДЕО" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 1 </span>
<span><i class="fa fa-eye"></i> 6527 </span>
<span><a href="https://blitz.bg/sport/bg-futbol" title="БГ футбол">БГ футбол</a></span>
</div>
<a href="https://blitz.bg/sport/bg-futbol/ekshn-na-ivaylo-boy-mezhdu-fenove-na-ludogorets-video_535766.html" title="Екшън на „Ивайло“! Бой между фенове на Лудогорец ВИДЕО">
<h3>Екшън на „Ивайло“! Бой между фенове на Лудогорец ВИДЕО </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/bg-futbol/trenort-na-botev-plovdiv-prizna-za-pregovori-s-tsska-potvrdi-bomba-na-blits_535764.html" title="Треньорът на Ботев (Пловдив) призна за преговори с ЦСКА, потвърди бомба на БЛИЦ" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075793661.jpg" alt="Треньорът на Ботев (Пловдив) призна за преговори с ЦСКА, потвърди бомба на БЛИЦ" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 0 </span>
<span><i class="fa fa-eye"></i> 6174 </span>
<span><a href="https://blitz.bg/sport/bg-futbol" title="БГ футбол">БГ футбол</a></span>
</div>
<a href="https://blitz.bg/sport/bg-futbol/trenort-na-botev-plovdiv-prizna-za-pregovori-s-tsska-potvrdi-bomba-na-blits_535764.html" title="Треньорът на Ботев (Пловдив) призна за преговори с ЦСКА, потвърди бомба на БЛИЦ">
<h3>Треньорът на Ботев (Пловдив) призна за преговори с ЦСКА, потвърди бомба на БЛИЦ </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/bg-futbol/ludogorets-likuva-ss-superkupata-sled-drama-s-duzpi-rozhdenik-s-reshitelen-propusk-za-tsska-1948_535753.html" title="Лудогорец ликува със Суперкупата след драма с дузпи, рожденик с решителен пропуск за ЦСКА 1948" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075813411.jpg" alt="Лудогорец ликува със Суперкупата след драма с дузпи, рожденик с решителен пропуск за ЦСКА 1948" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 1 </span>
<span><i class="fa fa-eye"></i> 11185 </span>
<span><a href="https://blitz.bg/sport/bg-futbol" title="БГ футбол">БГ футбол</a></span>
</div>
<a href="https://blitz.bg/sport/bg-futbol/ludogorets-likuva-ss-superkupata-sled-drama-s-duzpi-rozhdenik-s-reshitelen-propusk-za-tsska-1948_535753.html" title="Лудогорец ликува със Суперкупата след драма с дузпи, рожденик с решителен пропуск за ЦСКА 1948">
<h3>Лудогорец ликува със Суперкупата след драма с дузпи, рожденик с решителен пропуск за ЦСКА 1948 </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/svetoven-futbol/manchestr-siti-oglavi-visshata-liga-sled-10-a-poredna-pobeda-video_535762.html" title="Манчестър Сити оглави Висшата лига след 10-а поредна победа ВИДЕО" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075756561.jpg" alt="Манчестър Сити оглави Висшата лига след 10-а поредна победа ВИДЕО" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 1 </span>
<span><i class="fa fa-eye"></i> 1958 </span>
<span><a href="https://blitz.bg/sport/svetoven-futbol" title="Световен футбол">Световен футбол</a></span>
</div>
<a href="https://blitz.bg/sport/svetoven-futbol/manchestr-siti-oglavi-visshata-liga-sled-10-a-poredna-pobeda-video_535762.html" title="Манчестър Сити оглави Висшата лига след 10-а поредна победа ВИДЕО">
<h3>Манчестър Сити оглави Висшата лига след 10-а поредна победа ВИДЕО </h3>
</a>
</div>
</article>
</div>
<div class="slide">
<article>
<a href="https://blitz.bg/sport/sport/nov-strakhovit-intsident-v-bansko-video_535758.html" title="Нов страховит инцидент в Банско ВИДЕО" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075717183.jpg" alt="Нов страховит инцидент в Банско ВИДЕО" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 0 </span>
<span><i class="fa fa-eye"></i> 8626 </span>
<span><a href="https://blitz.bg/sport/sport" title="Спорт">Спорт</a></span>
</div>
<a href="https://blitz.bg/sport/sport/nov-strakhovit-intsident-v-bansko-video_535758.html" title="Нов страховит инцидент в Банско ВИДЕО">
<h3>Нов страховит инцидент в Банско ВИДЕО </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/cska/el-maestro-za-igrach-na-tsska-kazakh-mu-da-si-pochiva-vkshchi_535754.html" title="Eл Маестро за играч на ЦСКА: Казах му да си почива вкъщи" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/1707569140568142.jpg" alt="Eл Маестро за играч на ЦСКА: Казах му да си почива вкъщи" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 0 </span>
<span><i class="fa fa-eye"></i> 7560 </span>
<span><a href="https://blitz.bg/sport/cska" title="ЦСКА">ЦСКА</a></span>
</div>
<a href="https://blitz.bg/sport/cska/el-maestro-za-igrach-na-tsska-kazakh-mu-da-si-pochiva-vkshchi_535754.html" title="Eл Маестро за играч на ЦСКА: Казах му да си почива вкъщи">
<h3>Eл Маестро за играч на ЦСКА: Казах му да си почива вкъщи </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/bg-futbol/tsska-se-zatrudni-sreshchu-lidera-vv-vtora-liga-sin-yunosha-ss-silni-izyavi-video_535748.html" title="ЦСКА се затрудни срещу лидера във Втора лига, &quot;син&quot; юноша със силни изяви ВИДЕО" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/1707567517568134.jpg" alt="ЦСКА се затрудни срещу лидера във Втора лига, &quot;син&quot; юноша със силни изяви ВИДЕО" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 0 </span>
<span><i class="fa fa-eye"></i> 7391 </span>
<span><a href="https://blitz.bg/sport/bg-futbol" title="БГ футбол">БГ футбол</a></span>
</div>
<a href="https://blitz.bg/sport/bg-futbol/tsska-se-zatrudni-sreshchu-lidera-vv-vtora-liga-sin-yunosha-ss-silni-izyavi-video_535748.html" title="ЦСКА се затрудни срещу лидера във Втора лига, &quot;син&quot; юноша със силни изяви ВИДЕО">
<h3>ЦСКА се затрудни срещу лидера във Втора лига, &quot;син&quot; юноша със силни изяви ВИДЕО </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/svetoven-futbol/kitay-otryaza-arzhentina-sled-golemiya-skandal-zaradi-leo-mesi_535751.html" title="Китай отряза Аржентина след големия скандал заради Лео Меси" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075653101.jpg" alt="Китай отряза Аржентина след големия скандал заради Лео Меси" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 0 </span>
<span><i class="fa fa-eye"></i> 4295 </span>
<span><a href="https://blitz.bg/sport/svetoven-futbol" title="Световен футбол">Световен футбол</a></span>
</div>
<a href="https://blitz.bg/sport/svetoven-futbol/kitay-otryaza-arzhentina-sled-golemiya-skandal-zaradi-leo-mesi_535751.html" title="Китай отряза Аржентина след големия скандал заради Лео Меси">
<h3>Китай отряза Аржентина след големия скандал заради Лео Меси </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/bg-futbol/iznenada-20-godishen-polyak-se-poyavi-v-ludogorets-snimka_535747.html" title="Изненада! 20-годишен поляк се появи в Лудогорец СНИМКА" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075606022.jpg" alt="Изненада! 20-годишен поляк се появи в Лудогорец СНИМКА" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 0 </span>
<span><i class="fa fa-eye"></i> 2653 </span>
<span><a href="https://blitz.bg/sport/bg-futbol" title="БГ футбол">БГ футбол</a></span>
</div>
<a href="https://blitz.bg/sport/bg-futbol/iznenada-20-godishen-polyak-se-poyavi-v-ludogorets-snimka_535747.html" title="Изненада! 20-годишен поляк се появи в Лудогорец СНИМКА">
<h3>Изненада! 20-годишен поляк се появи в Лудогорец СНИМКА </h3>
</a>
</div>
</article>
</div>
</div>
<script>
$( document ).ready(function() {

	$('#actualslider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true
	});
	
});
</script>
</div>
<div id="mostReaded" class="tab-content">
<div class="mostTabSlider" id="readedslider">
<div class="slide">
<article>
<a href="https://blitz.bg/sport/tenis/strakhotno-grisho-obrna-khachanov-za-final-v-marsiliya_535771.html" title="Страхотно! Гришо обърна Хачанов за финал в Марсилия" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/1707584588gettyimages-1946981995.jpg" alt="Страхотно! Гришо обърна Хачанов за финал в Марсилия" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 0 </span>
<span><i class="fa fa-eye"></i> 26766 </span>
<span><a href="https://blitz.bg/sport/tenis" title="Тенис">Тенис</a></span>
</div>
<a href="https://blitz.bg/sport/tenis/strakhotno-grisho-obrna-khachanov-za-final-v-marsiliya_535771.html" title="Страхотно! Гришо обърна Хачанов за финал в Марсилия">
<h3>Страхотно! Гришо обърна Хачанов за финал в Марсилия </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/tenis/zhrebiyat-prati-italianets-na-grigor-dimitrov_535737.html" title="Жребият прати италианец на Григор Димитров " class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/1707552338profimedia-0845221171.jpg" alt="Жребият прати италианец на Григор Димитров " />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 0 </span>
<span><i class="fa fa-eye"></i> 16182 </span>
<span><a href="https://blitz.bg/sport/tenis" title="Тенис">Тенис</a></span>
</div>
<a href="https://blitz.bg/sport/tenis/zhrebiyat-prati-italianets-na-grigor-dimitrov_535737.html" title="Жребият прати италианец на Григор Димитров ">
<h3>Жребият прати италианец на Григор Димитров  </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/ekskluzivno/rakt-zastigna-loshoto-momche-ot-protsesa-na-veka_535735.html" title="Ракът застигна Лошото момче от Процеса на века" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075517852.jpg" alt="Ракът застигна Лошото момче от Процеса на века" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 0 </span>
<span><i class="fa fa-eye"></i> 15710 </span>
<span><a href="https://blitz.bg/sport/ekskluzivno" title="Ексклузивно">Ексклузивно</a></span>
</div>
<a href="https://blitz.bg/sport/ekskluzivno/rakt-zastigna-loshoto-momche-ot-protsesa-na-veka_535735.html" title="Ракът застигна Лошото момче от Процеса на века">
<h3>Ракът застигна Лошото момче от Процеса на века </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/basketbol/vezenkov-blesna-pri-boy-nad-shampiona-video_535727.html" title="Везенков блесна при бой над шампиона ВИДЕО" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075451052.jpg" alt="Везенков блесна при бой над шампиона ВИДЕО" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 1 </span>
<span><i class="fa fa-eye"></i> 13057 </span>
<span><a href="https://blitz.bg/sport/basketbol" title="Баскетбол">Баскетбол</a></span>
</div>
<a href="https://blitz.bg/sport/basketbol/vezenkov-blesna-pri-boy-nad-shampiona-video_535727.html" title="Везенков блесна при бой над шампиона ВИДЕО">
<h3>Везенков блесна при бой над шампиона ВИДЕО </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/bg-futbol/sledete-s-blits-sport-zimna-podgotovka-2024_533333.html" title="Следете с БЛИЦ СПОРТ: Зимна подготовка 2024" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202401/1704805447profimedia-0477060898.jpg" alt="Следете с БЛИЦ СПОРТ: Зимна подготовка 2024" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 3 </span>
<span><i class="fa fa-eye"></i> 12028 </span>
<span><a href="https://blitz.bg/sport/bg-futbol" title="БГ футбол">БГ футбол</a></span>
</div>
<a href="https://blitz.bg/sport/bg-futbol/sledete-s-blits-sport-zimna-podgotovka-2024_533333.html" title="Следете с БЛИЦ СПОРТ: Зимна подготовка 2024">
<h3>Следете с БЛИЦ СПОРТ: Зимна подготовка 2024 </h3>
</a>
</div>
</article>
</div>
<div class="slide">
<article>
<a href="https://blitz.bg/sport/bg-futbol/ludogorets-likuva-ss-superkupata-sled-drama-s-duzpi-rozhdenik-s-reshitelen-propusk-za-tsska-1948_535753.html" title="Лудогорец ликува със Суперкупата след драма с дузпи, рожденик с решителен пропуск за ЦСКА 1948" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075813411.jpg" alt="Лудогорец ликува със Суперкупата след драма с дузпи, рожденик с решителен пропуск за ЦСКА 1948" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 1 </span>
<span><i class="fa fa-eye"></i> 11185 </span>
<span><a href="https://blitz.bg/sport/bg-futbol" title="БГ футбол">БГ футбол</a></span>
</div>
<a href="https://blitz.bg/sport/bg-futbol/ludogorets-likuva-ss-superkupata-sled-drama-s-duzpi-rozhdenik-s-reshitelen-propusk-za-tsska-1948_535753.html" title="Лудогорец ликува със Суперкупата след драма с дузпи, рожденик с решителен пропуск за ЦСКА 1948">
<h3>Лудогорец ликува със Суперкупата след драма с дузпи, рожденик с решителен пропуск за ЦСКА 1948 </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/sport/skandalni-razkritiya-za-lyubimka-na-putin_535788.html" title="Скандални разкрития за любимка на Путин" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/1707598969gettyimages-1946999030.jpg" alt="Скандални разкрития за любимка на Путин" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 0 </span>
<span><i class="fa fa-eye"></i> 9598 </span>
<span><a href="https://blitz.bg/sport/sport" title="Спорт">Спорт</a></span>
</div>
<a href="https://blitz.bg/sport/sport/skandalni-razkritiya-za-lyubimka-na-putin_535788.html" title="Скандални разкрития за любимка на Путин">
<h3>Скандални разкрития за любимка на Путин </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/sport/nov-strakhovit-intsident-v-bansko-video_535758.html" title="Нов страховит инцидент в Банско ВИДЕО" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075717183.jpg" alt="Нов страховит инцидент в Банско ВИДЕО" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 0 </span>
<span><i class="fa fa-eye"></i> 8626 </span>
<span><a href="https://blitz.bg/sport/sport" title="Спорт">Спорт</a></span>
</div>
<a href="https://blitz.bg/sport/sport/nov-strakhovit-intsident-v-bansko-video_535758.html" title="Нов страховит инцидент в Банско ВИДЕО">
<h3>Нов страховит инцидент в Банско ВИДЕО </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/cska/el-maestro-za-igrach-na-tsska-kazakh-mu-da-si-pochiva-vkshchi_535754.html" title="Eл Маестро за играч на ЦСКА: Казах му да си почива вкъщи" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/1707569140568142.jpg" alt="Eл Маестро за играч на ЦСКА: Казах му да си почива вкъщи" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 0 </span>
<span><i class="fa fa-eye"></i> 7560 </span>
<span><a href="https://blitz.bg/sport/cska" title="ЦСКА">ЦСКА</a></span>
</div>
<a href="https://blitz.bg/sport/cska/el-maestro-za-igrach-na-tsska-kazakh-mu-da-si-pochiva-vkshchi_535754.html" title="Eл Маестро за играч на ЦСКА: Казах му да си почива вкъщи">
<h3>Eл Маестро за играч на ЦСКА: Казах му да си почива вкъщи </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/bg-futbol/tsska-se-zatrudni-sreshchu-lidera-vv-vtora-liga-sin-yunosha-ss-silni-izyavi-video_535748.html" title="ЦСКА се затрудни срещу лидера във Втора лига, &quot;син&quot; юноша със силни изяви ВИДЕО" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/1707567517568134.jpg" alt="ЦСКА се затрудни срещу лидера във Втора лига, &quot;син&quot; юноша със силни изяви ВИДЕО" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 0 </span>
<span><i class="fa fa-eye"></i> 7391 </span>
<span><a href="https://blitz.bg/sport/bg-futbol" title="БГ футбол">БГ футбол</a></span>
</div>
<a href="https://blitz.bg/sport/bg-futbol/tsska-se-zatrudni-sreshchu-lidera-vv-vtora-liga-sin-yunosha-ss-silni-izyavi-video_535748.html" title="ЦСКА се затрудни срещу лидера във Втора лига, &quot;син&quot; юноша със силни изяви ВИДЕО">
<h3>ЦСКА се затрудни срещу лидера във Втора лига, &quot;син&quot; юноша със силни изяви ВИДЕО </h3>
</a>
</div>
</article>
</div>
<div class="slide">
<article>
<a href="https://blitz.bg/sport/bg-futbol/ekshn-na-ivaylo-boy-mezhdu-fenove-na-ludogorets-video_535766.html" title="Екшън на „Ивайло“! Бой между фенове на Лудогорец ВИДЕО" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075806261.jpg" alt="Екшън на „Ивайло“! Бой между фенове на Лудогорец ВИДЕО" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 1 </span>
<span><i class="fa fa-eye"></i> 6527 </span>
<span><a href="https://blitz.bg/sport/bg-futbol" title="БГ футбол">БГ футбол</a></span>
</div>
<a href="https://blitz.bg/sport/bg-futbol/ekshn-na-ivaylo-boy-mezhdu-fenove-na-ludogorets-video_535766.html" title="Екшън на „Ивайло“! Бой между фенове на Лудогорец ВИДЕО">
<h3>Екшън на „Ивайло“! Бой между фенове на Лудогорец ВИДЕО </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/bg-futbol/trenort-na-botev-plovdiv-prizna-za-pregovori-s-tsska-potvrdi-bomba-na-blits_535764.html" title="Треньорът на Ботев (Пловдив) призна за преговори с ЦСКА, потвърди бомба на БЛИЦ" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075793661.jpg" alt="Треньорът на Ботев (Пловдив) призна за преговори с ЦСКА, потвърди бомба на БЛИЦ" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 0 </span>
<span><i class="fa fa-eye"></i> 6174 </span>
<span><a href="https://blitz.bg/sport/bg-futbol" title="БГ футбол">БГ футбол</a></span>
</div>
<a href="https://blitz.bg/sport/bg-futbol/trenort-na-botev-plovdiv-prizna-za-pregovori-s-tsska-potvrdi-bomba-na-blits_535764.html" title="Треньорът на Ботев (Пловдив) призна за преговори с ЦСКА, потвърди бомба на БЛИЦ">
<h3>Треньорът на Ботев (Пловдив) призна за преговори с ЦСКА, потвърди бомба на БЛИЦ </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/germaniya/lidert-razbi-bayern-v-macha-na-sezona-video_535775.html" title="Лидерът разби Байерн в мача на сезона ВИДЕО" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/1707588909gettyimages-2000531960.jpg" alt="Лидерът разби Байерн в мача на сезона ВИДЕО" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 0 </span>
<span><i class="fa fa-eye"></i> 4640 </span>
<span><a href="https://blitz.bg/sport/germaniya" title="Германия">Германия</a></span>
</div>
<a href="https://blitz.bg/sport/germaniya/lidert-razbi-bayern-v-macha-na-sezona-video_535775.html" title="Лидерът разби Байерн в мача на сезона ВИДЕО">
<h3>Лидерът разби Байерн в мача на сезона ВИДЕО </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/bg-futbol/levski-prodlzhava-s-opitite-da-privleche-blgarin_535729.html" title="Левски продължава с опитите да привлече българин" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/1707546633550171.jpg" alt="Левски продължава с опитите да привлече българин" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 3 </span>
<span><i class="fa fa-eye"></i> 4507 </span>
<span><a href="https://blitz.bg/sport/bg-futbol" title="БГ футбол">БГ футбол</a></span>
</div>
<a href="https://blitz.bg/sport/bg-futbol/levski-prodlzhava-s-opitite-da-privleche-blgarin_535729.html" title="Левски продължава с опитите да привлече българин">
<h3>Левски продължава с опитите да привлече българин </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/svetoven-futbol/kitay-otryaza-arzhentina-sled-golemiya-skandal-zaradi-leo-mesi_535751.html" title="Китай отряза Аржентина след големия скандал заради Лео Меси" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075653101.jpg" alt="Китай отряза Аржентина след големия скандал заради Лео Меси" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 0 </span>
<span><i class="fa fa-eye"></i> 4295 </span>
<span><a href="https://blitz.bg/sport/svetoven-futbol" title="Световен футбол">Световен футбол</a></span>
</div>
<a href="https://blitz.bg/sport/svetoven-futbol/kitay-otryaza-arzhentina-sled-golemiya-skandal-zaradi-leo-mesi_535751.html" title="Китай отряза Аржентина след големия скандал заради Лео Меси">
<h3>Китай отряза Аржентина след големия скандал заради Лео Меси </h3>
</a>
</div>
</article>
</div>
</div>
<script>
$( document ).ready(function() {

	$('#readedslider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true
	});
	
});
</script>
</div>
<div id="mostCommented" class="tab-content">
<div class="mostTabSlider" id="commentedslider">
<div class="slide">
<article>
<a href="https://blitz.bg/sport/bg-futbol/levski-prodlzhava-s-opitite-da-privleche-blgarin_535729.html" title="Левски продължава с опитите да привлече българин" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/1707546633550171.jpg" alt="Левски продължава с опитите да привлече българин" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 3 </span>
<span><i class="fa fa-eye"></i> 4507 </span>
<span><a href="https://blitz.bg/sport/bg-futbol" title="БГ футбол">БГ футбол</a></span>
</div>
<a href="https://blitz.bg/sport/bg-futbol/levski-prodlzhava-s-opitite-da-privleche-blgarin_535729.html" title="Левски продължава с опитите да привлече българин">
<h3>Левски продължава с опитите да привлече българин </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/bg-futbol/sledete-s-blits-sport-zimna-podgotovka-2024_533333.html" title="Следете с БЛИЦ СПОРТ: Зимна подготовка 2024" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202401/1704805447profimedia-0477060898.jpg" alt="Следете с БЛИЦ СПОРТ: Зимна подготовка 2024" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 3 </span>
<span><i class="fa fa-eye"></i> 12028 </span>
<span><a href="https://blitz.bg/sport/bg-futbol" title="БГ футбол">БГ футбол</a></span>
</div>
<a href="https://blitz.bg/sport/bg-futbol/sledete-s-blits-sport-zimna-podgotovka-2024_533333.html" title="Следете с БЛИЦ СПОРТ: Зимна подготовка 2024">
<h3>Следете с БЛИЦ СПОРТ: Зимна подготовка 2024 </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/sport/mirela-demireva-donese-zlato-za-blgariya-v-istanbul_535768.html" title="Мирела Демирева донесе злато за България в Истанбул" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075820601.jpg" alt="Мирела Демирева донесе злато за България в Истанбул" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 2 </span>
<span><i class="fa fa-eye"></i> 4212 </span>
<span><a href="https://blitz.bg/sport/sport" title="Спорт">Спорт</a></span>
</div>
<a href="https://blitz.bg/sport/sport/mirela-demireva-donese-zlato-za-blgariya-v-istanbul_535768.html" title="Мирела Демирева донесе злато за България в Истанбул">
<h3>Мирела Демирева донесе злато за България в Истанбул </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/bg-futbol/ludogorets-presledva-treti-trebl_535726.html" title="Лудогорец преследва трети требъл" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/1707545659471160.jpg" alt="Лудогорец преследва трети требъл" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 1 </span>
<span><i class="fa fa-eye"></i> 1868 </span>
<span><a href="https://blitz.bg/sport/bg-futbol" title="БГ футбол">БГ футбол</a></span>
</div>
<a href="https://blitz.bg/sport/bg-futbol/ludogorets-presledva-treti-trebl_535726.html" title="Лудогорец преследва трети требъл">
<h3>Лудогорец преследва трети требъл </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/bg-futbol/dermendzhiev-kritichen-sled-triumfa-ima-neshcha-za-korigirane_535765.html" title="Дерменджиев критичен след триумфа: Има неща за коригиране" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075801141.jpg" alt="Дерменджиев критичен след триумфа: Има неща за коригиране" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 1 </span>
<span><i class="fa fa-eye"></i> 673 </span>
<span><a href="https://blitz.bg/sport/bg-futbol" title="БГ футбол">БГ футбол</a></span>
</div>
<a href="https://blitz.bg/sport/bg-futbol/dermendzhiev-kritichen-sled-triumfa-ima-neshcha-za-korigirane_535765.html" title="Дерменджиев критичен след триумфа: Има неща за коригиране">
<h3>Дерменджиев критичен след триумфа: Има неща за коригиране </h3>
</a>
</div>
</article>
</div>
<div class="slide">
<article>
<a href="https://blitz.bg/sport/bg-futbol/ludogorets-likuva-ss-superkupata-sled-drama-s-duzpi-rozhdenik-s-reshitelen-propusk-za-tsska-1948_535753.html" title="Лудогорец ликува със Суперкупата след драма с дузпи, рожденик с решителен пропуск за ЦСКА 1948" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075813411.jpg" alt="Лудогорец ликува със Суперкупата след драма с дузпи, рожденик с решителен пропуск за ЦСКА 1948" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 1 </span>
<span><i class="fa fa-eye"></i> 11185 </span>
<span><a href="https://blitz.bg/sport/bg-futbol" title="БГ футбол">БГ футбол</a></span>
</div>
<a href="https://blitz.bg/sport/bg-futbol/ludogorets-likuva-ss-superkupata-sled-drama-s-duzpi-rozhdenik-s-reshitelen-propusk-za-tsska-1948_535753.html" title="Лудогорец ликува със Суперкупата след драма с дузпи, рожденик с решителен пропуск за ЦСКА 1948">
<h3>Лудогорец ликува със Суперкупата след драма с дузпи, рожденик с решителен пропуск за ЦСКА 1948 </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/bg-futbol/pobeden-debyut-za-noviya-trenor-na-pirin_535763.html" title="Победен дебют за новия треньор на Пирин" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075771991.jpg" alt="Победен дебют за новия треньор на Пирин" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 1 </span>
<span><i class="fa fa-eye"></i> 1390 </span>
<span><a href="https://blitz.bg/sport/bg-futbol" title="БГ футбол">БГ футбол</a></span>
</div>
<a href="https://blitz.bg/sport/bg-futbol/pobeden-debyut-za-noviya-trenor-na-pirin_535763.html" title="Победен дебют за новия треньор на Пирин">
<h3>Победен дебют за новия треньор на Пирин </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/svetoven-futbol/manchestr-siti-oglavi-visshata-liga-sled-10-a-poredna-pobeda-video_535762.html" title="Манчестър Сити оглави Висшата лига след 10-а поредна победа ВИДЕО" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075756561.jpg" alt="Манчестър Сити оглави Висшата лига след 10-а поредна победа ВИДЕО" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 1 </span>
<span><i class="fa fa-eye"></i> 1958 </span>
<span><a href="https://blitz.bg/sport/svetoven-futbol" title="Световен футбол">Световен футбол</a></span>
</div>
<a href="https://blitz.bg/sport/svetoven-futbol/manchestr-siti-oglavi-visshata-liga-sled-10-a-poredna-pobeda-video_535762.html" title="Манчестър Сити оглави Висшата лига след 10-а поредна победа ВИДЕО">
<h3>Манчестър Сити оглави Висшата лига след 10-а поредна победа ВИДЕО </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/lokomotiv_pd/ofitsialno-loko-pd-s-peto-poplnenie_535738.html" title="Oфициално: Локо (Пд) с пето попълнение" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075540632.jpg" alt="Oфициално: Локо (Пд) с пето попълнение" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 1 </span>
<span><i class="fa fa-eye"></i> 788 </span>
<span><a href="https://blitz.bg/sport/lokomotiv_pd" title="Локомотив (Пд)">Локомотив (Пд)</a></span>
</div>
<a href="https://blitz.bg/sport/lokomotiv_pd/ofitsialno-loko-pd-s-peto-poplnenie_535738.html" title="Oфициално: Локо (Пд) с пето попълнение">
<h3>Oфициално: Локо (Пд) с пето попълнение </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/blitz-online/gledayte-futbolni-derbita-finala-za-kupata-na-aziya-i-grisho-s-blits_535755.html" title="Гледайте футболни дербита, финала за Купата на Азия и Гришо с БЛИЦ" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/1707569514blitz-online.jpg" alt="Гледайте футболни дербита, финала за Купата на Азия и Гришо с БЛИЦ" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 1 </span>
<span><i class="fa fa-eye"></i> 745 </span>
<span><a href="https://blitz.bg/sport/blitz-online" title="Блиц Онлайн">Блиц Онлайн</a></span>
</div>
<a href="https://blitz.bg/sport/blitz-online/gledayte-futbolni-derbita-finala-za-kupata-na-aziya-i-grisho-s-blits_535755.html" title="Гледайте футболни дербита, финала за Купата на Азия и Гришо с БЛИЦ">
<h3>Гледайте футболни дербита, финала за Купата на Азия и Гришо с БЛИЦ </h3>
</a>
</div>
</article>
</div>
<div class="slide">
<article>
<a href="https://blitz.bg/sport/bookmaker/asovete-v-rodniya-futbol-maksimalno-zatrudneni_535731.html" title="Асовете в родния футбол максимално затруднени" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/1707550598profimedia-0840361057.jpg" alt="Асовете в родния футбол максимално затруднени" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 1 </span>
<span><i class="fa fa-eye"></i> 1148 </span>
<span><a href="https://blitz.bg/sport/bookmaker" title="Bookmaker">Bookmaker</a></span>
</div>
<a href="https://blitz.bg/sport/bookmaker/asovete-v-rodniya-futbol-maksimalno-zatrudneni_535731.html" title="Асовете в родния футбол максимално затруднени">
<h3>Асовете в родния футбол максимално затруднени </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/tv-sport/sportna-tv-sbota_535733.html" title="Спортна ТВ събота" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/1707548834tv.jpg" alt="Спортна ТВ събота" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 1 </span>
<span><i class="fa fa-eye"></i> 3676 </span>
<span><a href="https://blitz.bg/sport/tv-sport" title="ТВ Спорт">ТВ Спорт</a></span>
</div>
<a href="https://blitz.bg/sport/tv-sport/sportna-tv-sbota_535733.html" title="Спортна ТВ събота">
<h3>Спортна ТВ събота </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/cska/karanga-pak-v-igra-za-tsska-sled-2045-dni_535730.html" title="Каранга пак в игра за ЦСКА след 2045 дни" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075479032.jpg" alt="Каранга пак в игра за ЦСКА след 2045 дни" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 1 </span>
<span><i class="fa fa-eye"></i> 1685 </span>
<span><a href="https://blitz.bg/sport/cska" title="ЦСКА">ЦСКА</a></span>
</div>
<a href="https://blitz.bg/sport/cska/karanga-pak-v-igra-za-tsska-sled-2045-dni_535730.html" title="Каранга пак в игра за ЦСКА след 2045 дни">
<h3>Каранга пак в игра за ЦСКА след 2045 дни </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/sport/zografski-preodolya-kvalifikatsiite-v-leyk-plesid_535728.html" title="Зографски преодоля квалификациите в Лейк Плесид" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/1707544995profimedia-0833025670.jpg" alt="Зографски преодоля квалификациите в Лейк Плесид" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 1 </span>
<span><i class="fa fa-eye"></i> 209 </span>
<span><a href="https://blitz.bg/sport/sport" title="Спорт">Спорт</a></span>
</div>
<a href="https://blitz.bg/sport/sport/zografski-preodolya-kvalifikatsiite-v-leyk-plesid_535728.html" title="Зографски преодоля квалификациите в Лейк Плесид">
<h3>Зографски преодоля квалификациите в Лейк Плесид </h3>
</a>
</div>
</article>
<article>
<a href="https://blitz.bg/sport/basketbol/vezenkov-blesna-pri-boy-nad-shampiona-video_535727.html" title="Везенков блесна при бой над шампиона ВИДЕО" class="media">
<img width="90" height="75" src="https://static.blitz.bg/documents/newsimages/thumbnails/sport/90/202402/17075451052.jpg" alt="Везенков блесна при бой над шампиона ВИДЕО" />
</a>
<div class="info">
<div class="detiles">
<span><i class="fa fa-comments"></i> 1 </span>
<span><i class="fa fa-eye"></i> 13057 </span>
<span><a href="https://blitz.bg/sport/basketbol" title="Баскетбол">Баскетбол</a></span>
</div>
<a href="https://blitz.bg/sport/basketbol/vezenkov-blesna-pri-boy-nad-shampiona-video_535727.html" title="Везенков блесна при бой над шампиона ВИДЕО">
<h3>Везенков блесна при бой над шампиона ВИДЕО </h3>
</a>
</div>
</article>
</div>
</div>
<script>
$( document ).ready(function() {

	$('#commentedslider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true
	});
	
});
</script>
</div>
</div>
</section> <div class="ad">
<div id="adoceanblitzbgvnfqglqpsf"></div>
<script type="text/javascript">
		/* (c)AdOcean 2003-2013, blitzads_bg.Blitz.bg. Sport Category Bottom */
		ado.slave('adoceanblitzbgvnfqglqpsf', {myMaster: 'bXisCQORTaOWSE9Vg6evO19b32zZ9y9O8B9k.F3nG3z.l7' });
		</script>
</div>
</div>
</div>

</div>

<footer id="page-footer">
<div class="container">
<nav id="foot-menu" class="hidden-xs">
<ul class="clearfix">
<li class="home current"><a href="https://www.blitz.bg/sport"><span class="glyphicon glyphicon-home"></span></a></li>
<li class="bg-futbol">
<a href="//www.blitz.bg/sport/bg-futbol" title="БГ футбол">БГ футбол</a>
</li>
<li class="svetoven-futbol">
<a href="//www.blitz.bg/sport/svetoven-futbol" title="Световен футбол">Световен футбол</a>
</li>
<li class="voleybol">
<a href="//www.blitz.bg/sport/voleybol" title="Волейбол">Волейбол</a>
</li>
<li class="basketbol">
<a href="//www.blitz.bg/sport/basketbol" title="Баскетбол">Баскетбол</a>
</li>
<li class="tenis">
<a href="//www.blitz.bg/sport/tenis" title="Тенис">Тенис</a>
</li>
<li class="svezho">
<a href="//www.blitz.bg/sport/svezho" title="Свежо">Свежо</a>
</li>
<li class="komentar">
<a href="//www.blitz.bg/sport/komentar" title="Коментар">Коментар</a>
</li>
<li class="options"><a href="#" class="scrollToTop">нагоре <span class="glyphicon glyphicon-chevron-up"></span></a></li>
</ul>
</nav>
<div class="about row">
<div class="col-sm-12 col-md-3">
<h3><a href="https://www.blitz.bg/sport" class="footer-logo"></a></h3>
</div>
<div class="col-sm-6 col-md-5">
<p>Съдържанието на БЛИЦ и технологиите, използвани в него, са под закрила на Закона за авторското право и сродните му права. Всички статии, репортажи, интервюта и други текстови, графични и видео материали, публикувани в сайта, са собственост на агенция БЛИЦ, освен ако изрично е посочено друго. Нарушителите ще бъдат санкционирани с цялата строгост на закона.</p>
<a href="https://www.facebook.com/Blitz.bgSport/" target="_blank"><i class="fa fa-facebook-square fa-lg"></i></a>
<a href="https://plus.google.com/+BlitzBgSport" target="_blank"><i class="fa fa-google-plus-square fa-lg"></i></a>
<a href="https://twitter.com/Blitz_Sport" target="_blank"><i class="fa fa-twitter fa-lg"></i></a>
</div>
<div class="col-sm-6 col-md-4">
<ul>
<li><a href="https://corporate.blitz.bg/?page=aboutus" target="_blank">За нас</a></li>
<li><a href="https://www.blitz.bg/sport/ourTeam" title="Нашият отбор">Нашият отбор</a></li>
<li><a href="https://blitz.bg/page/obshchi-usloviya-za-polzvane-na-saytovete-ot-mediynata-grupa-na-informatsionna-agentsiya-blits">Условия за ползване</a></li>
<li><a href="https://blitz.bg/page/politika-za-poveritelnost-na-lichni-danni">Защита на личните данни</a></li>
<li><a href="https://blitz.bg/page/politika-za-biskvitkite">Правила за бисквитките</a></li>
<li><a href="https://www.flashscore.bg/" target="_blank">Футболни резултати</a></li>
<li><a href="https://corporate.blitz.bg/?page=contacts" target="_blank">Контакти</a></li>
<li><a href target="_blank">Реклама</a></li>
</ul>
</div>
</div>
<div class="copyright row">
<div class="col-sm-12">
Copyright © 2008-2024 Информационна агенция БЛИЦ. Всички права запазени.
</div>
</div>
</div>
</footer> </div>
</div>
<script src="https://blitz.bg/s/assets/js/sport.min.js?2017"></script>
<script type="text/javascript">

	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-4455789-1']);
	  _gaq.push(['_setDomainName', '.blitz.bg']);
	  _gaq.push(['_setAllowHash', false]);
	  _gaq.push(['_trackPageview']);

	  (function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();

	</script>

<script type="text/javascript">
    <!--//--><![CDATA[//><!--
    var pp_gemius_identifier = 'pzLgu7MTG2Zpi2n9.YTaqYaTrhcpRI8UbT3CANv29gH.17';
    // lines below shouldn't be edited
    function gemius_pending(i) { window[i] = window[i] || function() {var x = window[i+'_pdata'] = window[i+'_pdata'] || []; x[x.length]=arguments;};};
    gemius_pending('gemius_hit'); gemius_pending('gemius_event'); gemius_pending('pp_gemius_hit'); gemius_pending('pp_gemius_event');
    (function(d,t) {try {var gt=d.createElement(t),s=d.getElementsByTagName(t)[0],l='http'+((location.protocol=='https:')?'s':''); gt.setAttribute('async','async');
    gt.setAttribute('defer','defer'); gt.src=l+'://gabg.hit.gemius.pl/xgemius.js'; s.parentNode.insertBefore(gt,s);} catch (e) {}})(document,'script');
    //--><!]]>
    </script>
<script>
		$(document).ready(function() {
			
			$("body").on( "click", '.show-search',  function() {
				$("#dimScreen").fadeIn(300, function() {
					$('html, body').css('overflowY','hidden');
					$("#searchFormPopup").fadeIn(300, function() {
						
					});
				});
			});
			
			/*if ($( window ).width() > 500) {
				if (!$.cookie('popupFB')) {
					$("#popup-screen").show();
					$(".dim-screen").fadeIn(); 
					$("#popup").fadeIn();
					$('html, body').css('overflow', 'hidden'); 
					$.cookie('popupFB', 'true', { expires: 1, path: '/' } );
				}
			}*/
			
			
			
			/*if (!$.cookie('cb_enabled')) {
				$("#cookieRules").slideDown();
			}
			
			$("body").on( "click", "#cookieRules .got-it", function() {
				$.cookie('cb_enabled', 'accepted', { expires: 3652, path: '/' } );
				$("#cookieRules").slideUp();
			});*/
		});
	</script>





<script type="text/javascript">
		var mx_user_settings = {
			api_domain: "https://https-blitzbgsoccer-mx-api.enetscores.com",
			links: {
				standings: {
				  "team_link":"https://blitz.bg/sport/standings/team/:team",
				  "player_link":"https://blitz.bg/sport/standings/player/:player",
				  "event_link":"https://blitz.bg/sport/standings/event/:event"
				},
				team: {
				  "team_link":"https://blitz.bg/sport/standings/team/:team",
				  "player_link":"https://blitz.bg/sport/standings/player/:player",
				  "event_link":"https://blitz.bg/sport/standings/event/:event"
				},
				stage_standing: {
				  "team_link":"https://blitz.bg/sport/standings/team/:team"
				},
				current_stages: {
				  "stage_link":"https://blitz.bg/sport/standings/tenis?stage=:stage"
				},
				ranking: {
					"team_link":"https://blitz.bg/sport/standings/formula-1?team=:team",
					"player_link":"https://blitz.bg/sport/standings/formula-1?player=:player",
					"stage_link":"https://blitz.bg/sport/standings/formula-1?stage=:stage"
				}

			}
		};
	</script>
<script>(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var g=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},l=this||self,m=/^[\w+/_-]+[=]{0,2}$/,p=null,q=function(){},r=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";
if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},u=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var v=function(a,b){Object.defineProperty(l,a,{configurable:!1,get:function(){return b},set:q})};var y=function(a,b){this.b=a===w&&b||"";this.a=x},x={},w={};var aa=function(a,b){a.src=b instanceof y&&b.constructor===y&&b.a===x?b.b:"type_error:TrustedResourceUrl";if(null===p)b:{b=l.document;if((b=b.querySelector&&b.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&m.test(b)){p=b;break b}p=""}b=p;b&&a.setAttribute("nonce",b)};var z=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^+new Date).toString(36)};var A=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)},B=function(a){this.a=a||l.document||document};B.prototype.appendChild=function(a,b){a.appendChild(b)};var C=function(a,b,c,d,e,f){try{var k=a.a,h=A(a.a,"SCRIPT");h.async=!0;aa(h,b);k.head.appendChild(h);h.addEventListener("load",function(){e();d&&k.head.removeChild(h)});h.addEventListener("error",function(){0<c?C(a,b,c-1,d,e,f):(d&&k.head.removeChild(h),f())})}catch(n){f()}};var ba=l.atob("aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vaW1hZ2VzL2ljb25zL21hdGVyaWFsL3N5c3RlbS8xeC93YXJuaW5nX2FtYmVyXzI0ZHAucG5n"),ca=l.atob("WW91IGFyZSBzZWVpbmcgdGhpcyBtZXNzYWdlIGJlY2F1c2UgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlIGlzIGludGVyZmVyaW5nIHdpdGggdGhpcyBwYWdlLg=="),da=l.atob("RGlzYWJsZSBhbnkgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlLCB0aGVuIHJlbG9hZCB0aGlzIHBhZ2Uu"),ea=function(a,b,c){this.b=a;this.f=new B(this.b);this.a=null;this.c=[];this.g=!1;this.i=b;this.h=c},F=function(a){if(a.b.body&&!a.g){var b=
function(){D(a);l.setTimeout(function(){return E(a,3)},50)};C(a.f,a.i,2,!0,function(){l[a.h]||b()},b);a.g=!0}},D=function(a){for(var b=G(1,5),c=0;c<b;c++){var d=H(a);a.b.body.appendChild(d);a.c.push(d)}b=H(a);b.style.bottom="0";b.style.left="0";b.style.position="fixed";b.style.width=G(100,110).toString()+"%";b.style.zIndex=G(2147483544,2147483644).toString();b.style["background-color"]=I(249,259,242,252,219,229);b.style["box-shadow"]="0 0 12px #888";b.style.color=I(0,10,0,10,0,10);b.style.display=
"flex";b.style["justify-content"]="center";b.style["font-family"]="Roboto, Arial";c=H(a);c.style.width=G(80,85).toString()+"%";c.style.maxWidth=G(750,775).toString()+"px";c.style.margin="24px";c.style.display="flex";c.style["align-items"]="flex-start";c.style["justify-content"]="center";d=A(a.f.a,"IMG");d.className=z();d.src=ba;d.style.height="24px";d.style.width="24px";d.style["padding-right"]="16px";var e=H(a),f=H(a);f.style["font-weight"]="bold";f.textContent=ca;var k=H(a);k.textContent=da;J(a,
e,f);J(a,e,k);J(a,c,d);J(a,c,e);J(a,b,c);a.a=b;a.b.body.appendChild(a.a);b=G(1,5);for(c=0;c<b;c++)d=H(a),a.b.body.appendChild(d),a.c.push(d)},J=function(a,b,c){for(var d=G(1,5),e=0;e<d;e++){var f=H(a);b.appendChild(f)}b.appendChild(c);c=G(1,5);for(d=0;d<c;d++)e=H(a),b.appendChild(e)},G=function(a,b){return Math.floor(a+Math.random()*(b-a))},I=function(a,b,c,d,e,f){return"rgb("+G(Math.max(a,0),Math.min(b,255)).toString()+","+G(Math.max(c,0),Math.min(d,255)).toString()+","+G(Math.max(e,0),Math.min(f,
255)).toString()+")"},H=function(a){a=A(a.f.a,"DIV");a.className=z();return a},E=function(a,b){0>=b||null!=a.a&&0!=a.a.offsetHeight&&0!=a.a.offsetWidth||(fa(a),D(a),l.setTimeout(function(){return E(a,b-1)},50))},fa=function(a){var b=a.c;var c="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];b=c?c.call(b):{next:g(b)};for(c=b.next();!c.done;c=b.next())(c=c.value)&&c.parentNode&&c.parentNode.removeChild(c);a.c=[];(b=a.a)&&b.parentNode&&b.parentNode.removeChild(b);a.a=null};var ia=function(a,b,c,d,e){var f=ha(c),k=function(n){n.appendChild(f);l.setTimeout(function(){f?(0!==f.offsetHeight&&0!==f.offsetWidth?b():a(),f.parentNode&&f.parentNode.removeChild(f)):a()},d)},h=function(n){document.body?k(document.body):0<n?l.setTimeout(function(){h(n-1)},e):b()};h(3)},ha=function(a){var b=document.createElement("div");b.className=a;b.style.width="1px";b.style.height="1px";b.style.position="absolute";b.style.left="-10000px";b.style.top="-10000px";b.style.zIndex="-10000";return b};var K={},L=null;var M=function(){},N="function"==typeof Uint8Array,O=function(a,b){a.b=null;b||(b=[]);a.j=void 0;a.f=-1;a.a=b;a:{if(b=a.a.length){--b;var c=a.a[b];if(!(null===c||"object"!=typeof c||Array.isArray(c)||N&&c instanceof Uint8Array)){a.g=b-a.f;a.c=c;break a}}a.g=Number.MAX_VALUE}a.i={}},P=[],Q=function(a,b){if(b<a.g){b+=a.f;var c=a.a[b];return c===P?a.a[b]=[]:c}if(a.c)return c=a.c[b],c===P?a.c[b]=[]:c},R=function(a,b,c){a.b||(a.b={});if(!a.b[c]){var d=Q(a,c);d&&(a.b[c]=new b(d))}return a.b[c]};
M.prototype.h=N?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){var b;void 0===b&&(b=0);if(!L){L={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));K[e]=f;for(var k=0;k<f.length;k++){var h=f[k];void 0===L[h]&&(L[h]=k)}}}b=K[b];c=[];for(d=0;d<this.length;d+=3){var n=this[d],t=(e=d+1<this.length)?this[d+1]:0;h=(f=d+2<this.length)?this[d+2]:0;k=n>>2;n=(n&
3)<<4|t>>4;t=(t&15)<<2|h>>6;h&=63;f||(h=64,e||(t=64));c.push(b[k],b[n],b[t]||"",b[h]||"")}return c.join("")};try{return JSON.stringify(this.a&&this.a,S)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.a&&this.a,S)};var S=function(a,b){return"number"!==typeof b||!isNaN(b)&&Infinity!==b&&-Infinity!==b?b:String(b)};M.prototype.toString=function(){return this.a.toString()};var T=function(a){O(this,a)};u(T,M);var U=function(a){O(this,a)};u(U,M);var ja=function(a,b){this.c=new B(a);var c=R(b,T,5);c=new y(w,Q(c,4)||"");this.b=new ea(a,c,Q(b,4));this.a=b},ka=function(a,b,c,d){b=new T(b?JSON.parse(b):null);b=new y(w,Q(b,4)||"");C(a.c,b,3,!1,c,function(){ia(function(){F(a.b);d(!1)},function(){d(!0)},Q(a.a,2),Q(a.a,3),Q(a.a,1))})};var la=function(a,b){V(a,"internal_api_load_with_sb",function(c,d,e){ka(b,c,d,e)});V(a,"internal_api_sb",function(){F(b.b)})},V=function(a,b,c){a=l.btoa(a+b);v(a,c)},W=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];e=l.btoa(a+b);e=l[e];if("function"==r(e))e.apply(null,d);else throw Error("API not exported.");};var X=function(a){O(this,a)};u(X,M);var Y=function(a){this.h=window;this.a=a;this.b=Q(this.a,1);this.f=R(this.a,T,2);this.g=R(this.a,U,3);this.c=!1};Y.prototype.start=function(){ma();var a=new ja(this.h.document,this.g);la(this.b,a);na(this)};
var ma=function(){var a=function(){if(!l.frames.googlefcPresent)if(document.body){var b=document.createElement("iframe");b.style.display="none";b.style.width="0px";b.style.height="0px";b.style.border="none";b.style.zIndex="-1000";b.style.left="-1000px";b.style.top="-1000px";b.name="googlefcPresent";document.body.appendChild(b)}else l.setTimeout(a,5)};a()},na=function(a){var b=Date.now();W(a.b,"internal_api_load_with_sb",a.f.h(),function(){var c;var d=a.b,e=l[l.btoa(d+"loader_js")];if(e){e=l.atob(e);
e=parseInt(e,10);d=l.btoa(d+"loader_js").split(".");var f=l;d[0]in f||"undefined"==typeof f.execScript||f.execScript("var "+d[0]);for(;d.length&&(c=d.shift());)d.length?f[c]&&f[c]!==Object.prototype[c]?f=f[c]:f=f[c]={}:f[c]=null;c=Math.abs(b-e);c=1728E5>c?0:c}else c=-1;0!=c&&(W(a.b,"internal_api_sb"),Z(a,Q(a.a,6)))},function(c){Z(a,c?Q(a.a,4):Q(a.a,5))})},Z=function(a,b){a.c||(a.c=!0,a=new l.XMLHttpRequest,a.open("GET",b,!0),a.send())};(function(a,b){l[a]=function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];l[a]=q;b.apply(null,d)}})("__d3lUW8vwsKlB__",function(a){"function"==typeof window.atob&&(a=window.atob(a),a=new X(a?JSON.parse(a):null),(new Y(a)).start())});}).call(this);

window.__d3lUW8vwsKlB__("WyIyMWQzN2QzZjk1NTlkZjkiLFtudWxsLG51bGwsbnVsbCwiaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20vZi9BR1NLV3hWYWVibTVUb2Y0bG1TdjVrbmMyck00VmZaZ0JjU2VaWXdqNGVPM1FQLTJMZU9mX3VOVUV1SFhFZWZWZEk5Q18tenU5Z25PVUpoZGZDQkN6Zm1ZNEFcdTAwM2RcdTAwM2QiXQosWzIwLCJkaXYtZ3B0LWFkIiwxMDAsIk1qRmtNemRrTTJZNU5UVTVaR1k1IixbbnVsbCxudWxsLG51bGwsImh0dHBzOi8vd3d3LmdzdGF0aWMuY29tLzBlbW4vZi9wLzIxZDM3ZDNmOTU1OWRmOS5qcz91c3FwXHUwMDNkQ0F3Il0KXQosImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2wvQUdTS1d4WGNtLVREXzdOMV91REhUQ0JjUEtpZFdhcTBpYzNQZUpYeUxyTGRMdkVqVDRzaE4taldKQVlDYmxRc1FydGp4SHVYdGZReHk5NGtidGIxME5BXHUwMDNkP2FiXHUwMDNkMSIsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2wvQUdTS1d4V3lQdDI2QTBMaHhjUGNZZjBqSGdOSDhISWtZOXdjUFRwR3hOcmE0LXB2TUo4dkVzemtHOEVGcml2Q0swcXZ3SnlIbFJsbFpULXpyY0xIVHJnXHUwMDNkP2FiXHUwMDNkMlx1MDAyNnNiZlx1MDAzZDEiLCJodHRwczovL2Z1bmRpbmdjaG9pY2VzbWVzc2FnZXMuZ29vZ2xlLmNvbS9sL0FHU0tXeFVLYjBRZzRDYi1JUW5aTjQzck1tZDdyTnJHOHNPRDkwQnIzczFJQXhZaW5WUjhrWEFkb0R6bU92QlY5MVpaT1h2d0tBY0s1NTlCeHhqWHBPb1x1MDAzZD9zYmZcdTAwM2QyIl0K");
</script>
</body>
</html>