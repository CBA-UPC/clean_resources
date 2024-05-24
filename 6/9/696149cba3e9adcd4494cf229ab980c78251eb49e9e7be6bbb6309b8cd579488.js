<!DOCTYPE html>
<!--
	NOTES:
	1. All tokens are represented by '$' sign in the template.
	2. You can write your code only wherever mentioned.
	3. All occurrences of existing tokens will be replaced by their appropriate values.
	4. Blank lines will be removed automatically.
	5. Remove unnecessary comments before creating your template.
-->
<html>
<head>
<meta charset="UTF-8">
<meta name="authoring-tool" content="Adobe_Animate_CC">
<title>RecibosEnero_SV-B-DF-1443_dis_728x90_es</title>
<meta name="ad.size" content="width=728,height=90">
<script type="text/javascript">
	var clickTag = "https://bbva.es";
</script>
<!-- write your code here -->
<script src="https://s0.2mdn.net/ads/studio/cached_libs/createjs_2019.11.15_min.js"></script>
<script src="RecibosEnero_SV-B-DF-1443_dis_728x90_es.js"></script>
<script>
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("8BF05B034BAB1642B31BACB20D3842EA");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.RecibosEnero_SVBDF1443_dis_728x90_es();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
</script>
<!-- write your code here -->
<script type="text/javascript">
    
  (function() {
    var MAX_URL_PARAM_LENGTH = 34;
    var CLICK_X_URL_KEY = 'nx';
    var CLICK_Y_URL_KEY = 'ny';
    var CREATIVE_DIMENSIONS_KEY = 'dim';
    var AD_URL_PARAM = '&adurl=';

    var relegateNavigation = '';
    var urlParamMap = {};

    var isNewtonTokenSet = false;
    var isTurtleXAdClick = false;
    var reportingIds = {};

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

            if (clkTag.eTldPlusOne) {
              eTldPlusOnes[clkTag.url] = clkTag.eTldPlusOne;
            }
            if (clkTag.reportingId) {
              reportingIds[clkTag.url] = clkTag.reportingId;
            }
          }
        } else if (eventData.clickTag) {
          window.clickTag = eventData.clickTag;
        }
        relegateNavigation = eventData.relegateNavigation;
      }
      if (isNewtonEnabled(eventData) && !isNewtonTokenSet) {
        var newtonOt2Token = eventData.newtonOt2Token;
        enableAttributionReportingApi(newtonOt2Token);
      }
      if (eventData.isTurtleXAdClick) {
        isTurtleXAdClick = true;
      }
    };

    var isNewtonEnabled = function(eventData) {
      return 'newtonOt2Token' in eventData;
    }

    var enableAttributionReportingApi = function(originTrialToken) {
      if (/Chrome/.test(window.navigator.userAgent)) {
        var meta = document.createElement('meta');
        meta.httpEquiv = 'origin-trial';
        meta.content = String(originTrialToken);
        document.getElementsByTagName('head')[0].appendChild(meta);
        isNewtonTokenSet = true;
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
          if (isTurtleXAdClick && !!reportingIds[url]) {
            var message = {
              'reportingId': reportingIds[url],
              'clickX': urlParamMap[CLICK_X_URL_KEY],
              'clickY': urlParamMap[CLICK_Y_URL_KEY],
              'creativeDims': getCreativeDimensions()
              };
            parent.postMessage(JSON.stringify(message), '*');
          }
          url = appendExitClickParams(url);
          if (relegateNavigation === 'parent') {
            var message = {'clickTag': url, 'isPostClickTag': true};
            parent.postMessage(JSON.stringify(message), '*');
          } else {
            var args = [url, name];
            var windowFeatures = '';

            if (features) {
              windowFeatures = windowFeatures.concat(features);
            }
            if (isNewtonTokenSet &&
                !!document.featurePolicy?.allowedFeatures().includes(
                  'attribution-reporting')) {
              if (features) {
                if (!features.includes('attributionsrc')) {
                  windowFeatures = windowFeatures.concat(features, ', attributionsrc');
                }
              } else {
                windowFeatures = windowFeatures.concat('attributionsrc');
              }
            }

            if (windowFeatures) {
              args.push(windowFeatures);
            }
            open.apply(window,args);
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
<body onload="init();" style="margin:0px;">
	<a href="javascript:void(window.open(clickTag))">
		<div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:728px; height:90px">
			<canvas id="canvas" width="728" height="90" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
			<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:728px; height:90px; position: absolute; left: 0px; top: 0px; display: block;">
			</div>
		</div>
	</a>
</body>
</html>