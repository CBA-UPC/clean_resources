!function(doc,win){if("function"!=typeof doc.createEvent)return;function pointerEvent(type){var lo=type.toLowerCase(),ms="MS"+type;return navigator.msPointerEnabled?ms:!!window.PointerEvent&&lo}function touchEvent(name){return"on"+name in window&&name}function isTheSameFingerId(e){return!e.pointerId||void 0===pointerId||e.pointerId===pointerId}function setListener(elm,events,callback){for(var eventsArray=events.split(" "),i=eventsArray.length;i--;)elm.addEventListener(eventsArray[i],callback,!1)}function getPointerEvent(event){var hasTargetTouches=Boolean(event.targetTouches&&event.targetTouches.length);switch(!0){case Boolean(event.target.touches):return event.target.touches[0];case hasTargetTouches&&void 0!==event.targetTouches[0].pageX:return event.targetTouches[0];case hasTargetTouches&&Boolean(event.targetTouches[0].touches):return event.targetTouches[0].touches[0];default:return event}}function isMultipleTouches(event){return 1<(event.targetTouches||event.target.touches||[]).length}function getTimestamp(){return(new Date).getTime()}function sendEvent(elm,eventName,originalEvent,data){var customEvent=doc.createEvent("Event");if(customEvent.originalEvent=originalEvent,(data=data||{}).x=currX,data.y=currY,defaults.useJquery&&(customEvent=jQuery.Event(eventName,{originalEvent:originalEvent}),jQuery(elm).trigger(customEvent,data)),customEvent.initEvent){for(var key in data)customEvent[key]=data[key];customEvent.initEvent(eventName,!0,!0),elm.dispatchEvent(customEvent)}for(;elm;)elm["on"+eventName]&&elm["on"+eventName](customEvent),elm=elm.parentNode}var pointerId,currX,currY,cachedX,cachedY,timestamp,target,dblTapTimer,longtapTimer,defaults={useJquery:!win.IGNORE_JQUERY&&"undefined"!=typeof jQuery,swipeThreshold:win.SWIPE_THRESHOLD||100,tapThreshold:win.TAP_THRESHOLD||150,dbltapThreshold:win.DBL_TAP_THRESHOLD||200,longtapThreshold:win.LONG_TAP_THRESHOLD||1e3,tapPrecision:win.TAP_PRECISION/2||30,justTouchEvents:win.JUST_ON_TOUCH_DEVICES},wasTouch=!1,touchevents_touchstart=touchEvent("touchstart")||pointerEvent("PointerDown"),touchevents_touchend=touchEvent("touchend")||pointerEvent("PointerUp"),touchevents_touchmove=touchEvent("touchmove")||pointerEvent("PointerMove"),tapNum=0;setListener(doc,touchevents_touchstart+(defaults.justTouchEvents?"":" mousedown"),function(e){if(isTheSameFingerId(e)&&!isMultipleTouches(e)&&(pointerId=e.pointerId,"mousedown"!==e.type&&(wasTouch=!0),"mousedown"!==e.type||!wasTouch)){var pointer=getPointerEvent(e);cachedX=currX=pointer.pageX,cachedY=currY=pointer.pageY,longtapTimer=setTimeout(function(){sendEvent(e.target,"longtap",e),target=e.target},defaults.longtapThreshold),timestamp=getTimestamp(),tapNum++}}),setListener(doc,touchevents_touchend+(defaults.justTouchEvents?"":" mouseup"),function(e){if(isTheSameFingerId(e)&&!isMultipleTouches(e))if(pointerId=void 0,"mouseup"===e.type&&wasTouch)wasTouch=!1;else{var eventsArr=[],now=getTimestamp(),deltaY=cachedY-currY,deltaX=cachedX-currX;if(clearTimeout(dblTapTimer),clearTimeout(longtapTimer),deltaX<=-defaults.swipeThreshold&&eventsArr.push("swiperight"),deltaX>=defaults.swipeThreshold&&eventsArr.push("swipeleft"),deltaY<=-defaults.swipeThreshold&&eventsArr.push("swipedown"),deltaY>=defaults.swipeThreshold&&eventsArr.push("swipeup"),eventsArr.length){for(var i=0;i<eventsArr.length;i++){var eventName=eventsArr[i];sendEvent(e.target,eventName,e,{distance:{x:Math.abs(deltaX),y:Math.abs(deltaY)}})}tapNum=0}else cachedX>=currX-defaults.tapPrecision&&cachedX<=currX+defaults.tapPrecision&&cachedY>=currY-defaults.tapPrecision&&cachedY<=currY+defaults.tapPrecision&&0<=timestamp+defaults.tapThreshold-now&&(sendEvent(e.target,2<=tapNum&&target===e.target?"dbltap":"tap",e),target=e.target),dblTapTimer=setTimeout(function(){tapNum=0},defaults.dbltapThreshold)}}),setListener(doc,touchevents_touchmove+(defaults.justTouchEvents?"":" mousemove"),function(e){if(isTheSameFingerId(e)&&("mousemove"!==e.type||!wasTouch)){var pointer=getPointerEvent(e);currX=pointer.pageX,currY=pointer.pageY}}),win.tocca=function(options){for(var opt in options)defaults[opt]=options[opt];return defaults}}(document,window);er (when set to scrolling) */
	display: none;
}

/* When Infinite Scroll has reached its end we need to re-display elements that were hidden (via .neverending) before. */
.infinity-end.neverending .site-footer {
	display: block;
}

/*--------------------------------------------------------------
# Media
--------------------------------------------------------------*/
.page-content .wp-smiley,
.entry-content .wp-smiley,
.comment-content .wp-smiley {
	border: none;
	margin-bottom: 0;
	margin-top: 0;
	padding: 0;
}

/* Make sure embeds and iframes fit their containers. */
embed,
iframe,
object {
	max-width: 100%;
}

/*--------------------------------------------------------------
## Captions
--------------------------------------------------------------*/
.wp-caption {
	margin-bottom: 1.5em;
	max-width: 100%;
}

.wp-caption img[class*="wp-image-"] {
	display: block;
	margin-left: auto;
	margin-right: auto;
}

.wp-caption .wp-caption-text {
	margin: 0.8075em 0;
}

.wp-caption-text {
	text-align: center;
}

/*--------------------------------------------------------------
## Galleries
--------------------------------------------------------------*/
.gallery {
	margin: -5px;
	margin-bottom: 5px;
}

.gallery-item {
	padding: 5px;
	display: inline-block;
	text-align: center;
	vertical-align: top;
	width: 100%;
}

.gallery-columns-2 .gallery-item {
	max-width: 50%;
}

.gallery-columns-3 .gallery-item {
	max-width: 33.33%;
}

.gallery-columns-4 .gallery-item {
	max-width: 25%;
}

.gallery-columns-5 .gallery-item {
	max-width: 20%;
}

.gallery-columns-6 .gallery-item {
	max-width: 16.66%;
}

.gallery-columns-7 .gallery-item {
	max-width: 14.28%;
}

.gallery-columns-8 .gallery-item {
	max-width: 12.5%;
}

.gallery-columns-9 .gallery-item {
	max-width: 11.11%;
}

.gallery-caption {
	display: block;
}
