/*! =======================================================
                      VERSION  10.0.0              
========================================================= */
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},windowIsDefined="object"===("undefined"==typeof window?"undefined":_typeof(window));!function(a){if("function"==typeof define&&define.amd)define(["jquery"],a);else if("object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports){var b;try{b=require("jquery")}catch(c){b=null}module.exports=a(b)}else window&&(window.Slider=a(window.jQuery))}(function(a){var b="slider",c="bootstrapSlider";windowIsDefined&&!window.console&&(window.console={}),windowIsDefined&&!window.console.log&&(window.console.log=function(){}),windowIsDefined&&!window.console.warn&&(window.console.warn=function(){});var d;return function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l&&l!==k)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}var m=this.map(function(){var d=a.data(this,b);return d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d)),a(this)});return!m||m.length>1?m:m[0]}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;c(a)}(a),function(a){function e(b,c){function d(a,b){var c="data-slider-"+b.replace(/_/g,"-"),d=a.getAttribute(c);try{return JSON.parse(d)}catch(e){return d}}this._state={value:null,enabled:null,offset:null,size:null,percentage:null,inDrag:!1,over:!1},this.ticksCallbackMap={},this.handleCallbackMap={},"string"==typeof b?this.element=document.querySelector(b):b instanceof HTMLElement&&(this.element=b),c=c?c:{};for(var e=Object.keys(this.defaultOptions),f=0;f<e.length;f++){var h=e[f],i=c[h];i="undefined"!=typeof i?i:d(this.element,h),i=null!==i?i:this.defaultOptions[h],this.options||(this.options={}),this.options[h]=i}"auto"===this.options.rtl&&(this.options.rtl="rtl"===window.getComputedStyle(this.element).direction),"vertical"!==this.options.orientation||"top"!==this.options.tooltip_position&&"bottom"!==this.options.tooltip_position?"horizontal"!==this.options.orientation||"left"!==this.options.tooltip_position&&"right"!==this.options.tooltip_position||(this.options.tooltip_position="top"):this.options.rtl?this.options.tooltip_position="left":this.options.tooltip_position="right";var j,k,l,m,n,o=this.element.style.width,p=!1,q=this.element.parentNode;if(this.sliderElem)p=!0;else{this.sliderElem=document.createElement("div"),this.sliderElem.className="slider";var r=document.createElement("div");r.className="slider-track",k=document.createElement("div"),k.className="slider-track-low",j=document.createElement("div"),j.className="slider-selection",l=document.createElement("div"),l.className="slider-track-high",m=document.createElement("div"),m.className="slider-handle min-slider-handle",m.setAttribute("role","slider"),m.setAttribute("aria-valuemin",this.options.min),m.setAttribute("aria-valuemax",this.options.max),n=document.createElement("div"),n.className="slider-handle max-slider-handle",n.setAttribute("role","slider"),n.setAttribute("aria-valuemin",this.options.min),n.setAttribute("aria-valuemax",this.options.max),r.appendChild(k),r.appendChild(j),r.appendChild(l),this.rangeHighlightElements=[];var s=this.options.rangeHighlights;if(Array.isArray(s)&&s.length>0)for(var t=0;t<s.length;t++){var u=document.createElement("div"),v=s[t]["class"]||"";u.className="slider-rangeHighlight slider-selection "+v,this.rangeHighlightElements.push(u),r.appendChild(u)}var w=Array.isArray(this.options.labelledby);if(w&&this.options.labelledby[0]&&m.setAttribute("aria-labelledby",this.options.labelledby[0]),w&&this.options.labelledby[1]&&n.setAttribute("aria-labelledby",this.options.labelledby[1]),!w&&this.options.labelledby&&(m.setAttribute("aria-labelledby",this.options.labelledby),n.setAttribute("aria-labelledby",this.options.labelledby)),this.ticks=[],Array.isArray(this.options.ticks)&&this.options.ticks.length>0){for(this.ticksContainer=document.createElement("div"),this.ticksContainer.className="slider-tick-container",f=0;f<this.options.ticks.length;f++){var x=document.createElement("div");if(x.className="slider-tick",this.options.ticks_tooltip){var y=this._addTickListener(),z=y.addMouseEnter(this,x,f),A=y.addMouseLeave(this,x);this.ticksCallbackMap[f]={mouseEnter:z,mouseLeave:A}}this.ticks.push(x),this.ticksContainer.appendChild(x)}j.className+=" tick-slider-selection"}if(this.tickLabels=[],Array.isArray(this.options.ticks_labels)&&this.options.ticks_labels.length>0)for(this.tickLabelContainer=document.createElement("div"),this.tickLabelContainer.className="slider-tick-label-container",f=0;f<this.options.ticks_labels.length;f++){var B=document.createElement("div"),C=0===this.options.ticks_positions.length,D=this.options.reversed&&C?this.options.ticks_labels.length-(f+1):f;B.className="slider-tick-label",B.innerHTML=this.options.ticks_labels[D],this.tickLabels.push(B),this.tickLabelContainer.appendChild(B)}var E=function(a){var b=document.createElement("div");b.className="tooltip-arrow";var c=document.createElement("div");c.className="tooltip-inner",a.appendChild(b),a.appendChild(c)},F=document.createElement("div");F.className="tooltip tooltip-main",F.setAttribute("role","presentation"),E(F);var G=document.createElement("div");G.className="tooltip tooltip-min",G.setAttribute("role","presentation"),E(G);var H=document.createElement("div");H.className="tooltip tooltip-max",H.setAttribute("role","presentation"),E(H),this.sliderElem.appendChild(r),this.sliderElem.appendChild(F),this.sliderElem.appendChild(G),this.sliderElem.appendChild(H),this.tickLabelContainer&&this.sliderElem.appendChild(this.tickLabelContainer),this.ticksContainer&&this.sliderElem.appendChild(this.ticksContainer),this.sliderElem.appendChild(m),this.sliderElem.appendChild(n),q.insertBefore(this.sliderElem,this.element),this.element.style.display="none"}if(a&&(this.$element=a(this.element),this.$sliderElem=a(this.sliderElem)),this.eventToCallbackMap={},this.sliderElem.id=this.options.id,this.touchCapable="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,this.touchX=0,this.touchY=0,this.tooltip=this.sliderElem.querySelector(".tooltip-main"),this.tooltipInner=this.tooltip.querySelector(".tooltip-inner"),this.tooltip_min=this.sliderElem.querySelector(".tooltip-min"),this.tooltipInner_min=this.tooltip_min.querySelector(".tooltip-inner"),this.tooltip_max=this.sliderElem.querySelector(".tooltip-max"),this.tooltipInner_max=this.tooltip_max.querySelector(".tooltip-inner"),g[this.options.scale]&&(this.options.scale=g[this.options.scale]),p===!0&&(this._removeClass(this.sliderElem,"slider-horizontal"),this._removeClass(this.sliderElem,"slider-vertical"),this._removeClass(this.sliderElem,"slider-rtl"),this._removeClass(this.tooltip,"hide"),this._removeClass(this.tooltip_min,"hide"),this._removeClass(this.tooltip_max,"hide"),["left","right","top","width","height"].forEach(function(a){this._removeProperty(this.trackLow,a),this._removeProperty(this.trackSelection,a),this._removeProperty(this.trackHigh,a)},this),[this.handle1,this.handle2].forEach(function(a){this._removeProperty(a,"left"),this._removeProperty(a,"right"),this._removeProperty(a,"top")},this),[this.tooltip,this.tooltip_min,this.tooltip_max].forEach(function(a){this._removeProperty(a,"left"),this._removeProperty(a,"right"),this._removeProperty(a,"top"),this._removeClass(a,"right"),this._removeClass(a,"left"),this._removeClass(a,"top")},this)),"vertical"===this.options.orientation?(this._addClass(this.sliderElem,"slider-vertical"),this.stylePos="top",this.mousePos="pageY",this.sizePos="offsetHeight"):(this._addClass(this.sliderElem,"slider-horizontal"),this.sliderElem.style.width=o,this.options.orientation="horizontal",this.options.rtl?this.stylePos="right":this.stylePos="left",this.mousePos="pageX",this.sizePos="offsetWidth"),this.options.rtl&&this._addClass(this.sliderElem,"slider-rtl"),this._setTooltipPosition(),Array.isArray(this.options.ticks)&&this.options.ticks.length>0&&(this.options.max=Math.max.apply(Math,this.options.ticks),this.options.min=Math.min.apply(Math,this.options.ticks)),Array.isArray(this.options.value)?(this.options.range=!0,this._state.value=this.options.value):this.options.range?this._state.value=[this.options.value,this.options.max]:this._state.value=this.options.value,this.trackLow=k||this.trackLow,this.trackSelection=j||this.trackSelection,this.trackHigh=l||this.trackHigh,"none"===this.options.selection?(this._addClass(this.trackLow,"hide"),this._addClass(this.trackSelection,"hide"),this._addClass(this.trackHigh,"hide")):("after"===this.options.selection||"before"===this.options.selection)&&(this._removeClass(this.trackLow,"hide"),this._removeClass(this.trackSelection,"hide"),this._removeClass(this.trackHigh,"hide")),this.handle1=m||this.handle1,this.handle2=n||this.handle2,p===!0)for(this._removeClass(this.handle1,"round triangle"),this._removeClass(this.handle2,"round triangle hide"),f=0;f<this.ticks.length;f++)this._removeClass(this.ticks[f],"round triangle hide");var I=["round","triangle","custom"],J=-1!==I.indexOf(this.options.handle);if(J)for(this._addClass(this.handle1,this.options.handle),this._addClass(this.handle2,this.options.handle),f=0;f<this.ticks.length;f++)this._addClass(this.ticks[f],this.options.handle);if(this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this.setValue(this._state.value),this.handle1Keydown=this._keydown.bind(this,0),this.handle1.addEventListener("keydown",this.handle1Keydown,!1),this.handle2Keydown=this._keydown.bind(this,1),this.handle2.addEventListener("keydown",this.handle2Keydown,!1),this.mousedown=this._mousedown.bind(this),this.touchstart=this._touchstart.bind(this),this.touchmove=this._touchmove.bind(this),this.touchCapable){var K=!1;try{var L=Object.defineProperty({},"passive",{get:function(){K=!0}});window.addEventListener("test",null,L)}catch(M){}var N=K?{passive:!0}:!1;this.sliderElem.addEventListener("touchstart",this.touchstart,N),this.sliderElem.addEventListener("touchmove",this.touchmove,N)}if(this.sliderElem.addEventListener("mousedown",this.mousedown,!1),this.resize=this._resize.bind(this),window.addEventListener("resize",this.resize,!1),"hide"===this.options.tooltip)this._addClass(this.tooltip,"hide"),this._addClass(this.tooltip_min,"hide"),this._addClass(this.tooltip_max,"hide");else if("always"===this.options.tooltip)this._showTooltip(),this._alwaysShowTooltip=!0;else{if(this.showTooltip=this._showTooltip.bind(this),this.hideTooltip=this._hideTooltip.bind(this),this.options.ticks_tooltip){var O=this._addTickListener(),P=O.addMouseEnter(this,this.handle1),Q=O.addMouseLeave(this,this.handle1);this.handleCallbackMap.handle1={mouseEnter:P,mouseLeave:Q},P=O.addMouseEnter(this,this.handle2),Q=O.addMouseLeave(this,this.handle2),this.handleCallbackMap.handle2={mouseEnter:P,mouseLeave:Q}}else this.sliderElem.addEventListener("mouseenter",this.showTooltip,!1),this.sliderElem.addEventListener("mouseleave",this.hideTooltip,!1);this.handle1.addEventListener("focus",this.showTooltip,!1),this.handle1.addEventListener("blur",this.hideTooltip,!1),this.handle2.addEventListener("focus",this.showTooltip,!1),this.handle2.addEventListener("blur",this.hideTooltip,!1)}this.options.enabled?this.enable():this.disable()}var f={formatInvalidInputErrorMsg:function(a){return"Invalid input value '"+a+"' passed in"},callingContextNotSliderInstance:"Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"},g={linear:{toValue:function(a){var b=a/100*(this.options.max-this.options.min),c=!0;if(this.options.ticks_positions.length>0){for(var d,e,f,g=0,h=1;h<this.options.ticks_positions.length;h++)if(a<=this.options.ticks_positions[h]){d=this.options.ticks[h-1],f=this.options.ticks_positions[h-1],e=this.options.ticks[h],g=this.options.ticks_positions[h];break}var i=(a-f)/(g-f);b=d+i*(e-d),c=!1}var j=c?this.options.min:0,k=j+Math.round(b/this.options.step)*this.options.step;return k<this.options.min?this.options.min:k>this.options.max?this.options.max:k},toPercentage:function(a){if(this.options.max===this.options.min)return 0;if(this.options.ticks_positions.length>0){for(var b,c,d,e=0,f=0;f<this.options.ticks.length;f++)if(a<=this.options.ticks[f]){b=f>0?this.options.ticks[f-1]:0,d=f>0?this.options.ticks_positions[f-1]:0,c=this.options.ticks[f],e=this.options.ticks_positions[f];break}if(f>0){var g=(a-b)/(c-b);return d+g*(e-d)}}return 100*(a-this.options.min)/(this.options.max-this.options.min)}},logarithmic:{toValue:function(a){var b=0===this.options.min?0:Math.log(this.options.min),c=Math.log(this.options.max),d=Math.exp(b+(c-b)*a/100);return Math.round(d)===this.options.max?this.options.max:(d=this.options.min+Math.round((d-this.options.min)/this.options.step)*this.options.step,d<this.options.min?this.options.min:d>this.options.max?this.options.max:d)},toPercentage:function(a){if(this.options.max===this.options.min)return 0;var b=Math.log(this.options.max),c=0===this.options.min?0:Math.log(this.options.min),d=0===a?0:Math.log(a);return 100*(d-c)/(b-c)}}};if(d=function(a,b){return e.call(this,a,b),this},d.prototype={_init:function(){},constructor:d,defaultOptions:{id:"",min:0,max:10,step:1,precision:0,orientation:"horizontal",value:5,range:!1,selection:"before",tooltip:"show",tooltip_split:!1,handle:"round",reversed:!1,rtl:"auto",enabled:!0,formatter:function(a){return Array.isArray(a)?a[0]+" : "+a[1]:a},natural_arrow_keys:!1,ticks:[],ticks_positions:[],ticks_labels:[],ticks_snap_bounds:0,ticks_tooltip:!1,scale:"linear",focus:!1,tooltip_position:null,labelledby:null,rangeHighlights:[]},getElement:function(){return this.sliderElem},getValue:function(){return this.options.range?this._state.value:this._state.value[0]},setValue:function(a,b,c){a||(a=0);var d=this.getValue();this._state.value=this._validateInputValue(a);var e=this._applyPrecision.bind(this);this.options.range?(this._state.value[0]=e(this._state.value[0]),this._state.value[1]=e(this._state.value[1]),this._state.value[0]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[0])),this._state.value[1]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[1]))):(this._state.value=e(this._state.value),this._state.value=[Math.max(this.options.min,Math.min(this.options.max,this._state.value))],this._addClass(this.handle2,"hide"),"after"===this.options.selection?this._state.value[1]=this.options.max:this._state.value[1]=this.options.min),this.options.max>this.options.min?this._state.percentage=[this._toPercentage(this._state.value[0]),this._toPercentage(this._state.value[1]),100*this.options.step/(this.options.max-this.options.min)]:this._state.percentage=[0,0,100],this._layout();var f=this.options.range?this._state.value:this._state.value[0];return this._setDataVal(f),b===!0&&this._trigger("slide",f),d!==f&&c===!0&&this._trigger("change",{oldValue:d,newValue:f}),this},destroy:function(){this._removeSliderEventHandlers(),this.sliderElem.parentNode.removeChild(this.sliderElem),this.element.style.display="",this._cleanUpEventCallbacksMap(),this.element.removeAttribute("data"),a&&(this._unbindJQueryEventHandlers(),this.$element.removeData("slider"))},disable:function(){return this._state.enabled=!1,this.handle1.removeAttribute("tabindex"),this.handle2.removeAttribute("tabindex"),this._addClass(this.sliderElem,"slider-disabled"),this._trigger("slideDisabled"),this},enable:function(){return this._state.enabled=!0,this.handle1.setAttribute("tabindex",0),this.handle2.setAttribute("tabindex",0),this._removeClass(this.sliderElem,"slider-disabled"),this._trigger("slideEnabled"),this},toggle:function(){return this._state.enabled?this.disable():this.enable(),this},isEnabled:function(){return this._state.enabled},on:function(a,b){return this._bindNonQueryEventHandler(a,b),this},off:function(b,c){a?(this.$element.off(b,c),this.$sliderElem.off(b,c)):this._unbindNonQueryEventHandler(b,c)},getAttribute:function(a){return a?this.options[a]:this.options},setAttribute:function(a,b){return this.options[a]=b,this},refresh:function(){return this._removeSliderEventHandlers(),e.call(this,this.element,this.options),a&&a.data(this.element,"slider",this),this},relayout:function(){return this._resize(),this._layout(),this},_removeSliderEventHandlers:function(){if(this.handle1.removeEventListener("keydown",this.handle1Keydown,!1),this.handle2.removeEventListener("keydown",this.handle2Keydown,!1),this.options.ticks_tooltip){for(var a=this.ticksContainer.getElementsByClassName("slider-tick"),b=0;b<a.length;b++)a[b].removeEventListener("mouseenter",this.ticksCallbackMap[b].mouseEnter,!1),a[b].removeEventListener("mouseleave",this.ticksCallbackMap[b].mouseLeave,!1);this.handle1.removeEventListener("mouseenter",this.handleCallbackMap.handle1.mouseEnter,!1),this.handle2.removeEventListener("mouseenter",this.handleCallbackMap.handle2.mouseEnter,!1),this.handle1.removeEventListener("mouseleave",this.handleCallbackMap.handle1.mouseLeave,!1),this.handle2.removeEventListener("mouseleave",this.handleCallbackMap.handle2.mouseLeave,!1)}this.handleCallbackMap=null,this.ticksCallbackMap=null,this.showTooltip&&(this.handle1.removeEventListener("focus",this.showTooltip,!1),this.handle2.removeEventListener("focus",this.showTooltip,!1)),this.hideTooltip&&(this.handle1.removeEventListener("blur",this.hideTooltip,!1),this.handle2.removeEventListener("blur",this.hideTooltip,!1)),this.showTooltip&&this.sliderElem.removeEventListener("mouseenter",this.showTooltip,!1),this.hideTooltip&&this.sliderElem.removeEventListener("mouseleave",this.hideTooltip,!1),this.sliderElem.removeEventListener("touchstart",this.touchstart,!1),this.sliderElem.removeEventListener("touchmove",this.touchmove,!1),this.sliderElem.removeEventListener("mousedown",this.mousedown,!1),window.removeEventListener("resize",this.resize,!1)},_bindNonQueryEventHandler:function(a,b){void 0===this.eventToCallbackMap[a]&&(this.eventToCallbackMap[a]=[]),this.eventToCallbackMap[a].push(b)},_unbindNonQueryEventHandler:function(a,b){var c=this.eventToCallbackMap[a];if(void 0!==c)for(var d=0;d<c.length;d++)if(c[d]===b){c.splice(d,1);break}},_cleanUpEventCallbacksMap:function(){for(var a=Object.keys(this.eventToCallbackMap),b=0;b<a.length;b++){var c=a[b];delete this.eventToCallbackMap[c]}},_showTooltip:function(){this.options.tooltip_split===!1?(this._addClass(this.tooltip,"in"),this.tooltip_min.style.display="none",this.tooltip_max.style.display="none"):(this._addClass(this.tooltip_min,"in"),this._addClass(this.tooltip_max,"in"),this.tooltip.style.display="none"),this._state.over=!0},_hideTooltip:function(){this._state.inDrag===!1&&this.alwaysShowTooltip!==!0&&(this._removeClass(this.tooltip,"in"),this._removeClass(this.tooltip_min,"in"),this._removeClass(this.tooltip_max,"in")),this._state.over=!1},_setToolTipOnMouseOver:function(a){function b(a,b){return b?[100-a.percentage[0],this.options.range?100-a.percentage[1]:a.percentage[1]]:[a.percentage[0],a.percentage[1]]}var c=this.options.formatter(a?a.value[0]:this._state.value[0]),d=a?b(a,this.options.reversed):b(this._state,this.options.reversed);this._setText(this.tooltipInner,c),this.tooltip.style[this.stylePos]=d[0]+"%"},_addTickListener:function(){return{addMouseEnter:function(a,b,c){var d=function(){var b=a._state,d=c>=0?c:this.attributes["aria-valuenow"].value,e=parseInt(d,10);b.value[0]=e,b.percentage[0]=a.options.ticks_positions[e],a._setToolTipOnMouseOver(b),a._showTooltip()};return b.addEventListener("mouseenter",d,!1),d},addMouseLeave:function(a,b){var c=function(){a._hideTooltip()};return b.addEventListener("mouseleave",c,!1),c}}},_layout:function(){var a;if(a=this.options.reversed?[100-this._state.percentage[0],this.options.range?100-this._state.percentage[1]:this._state.percentage[1]]:[this._state.percentage[0],this._state.percentage[1]],this.handle1.style[this.stylePos]=a[0]+"%",this.handle1.setAttribute("aria-valuenow",this._state.value[0]),isNaN(this.options.formatter(this._state.value[0]))&&this.handle1.setAttribute("aria-valuetext",this.options.formatter(this._state.value[0])),this.handle2.style[this.stylePos]=a[1]+"%",this.handle2.setAttribute("aria-valuenow",this._state.value[1]),isNaN(this.options.formatter(this._state.value[1]))&&this.handle2.setAttribute("aria-valuetext",this.options.formatter(this._state.value[1])),this.rangeHighlightElements.length>0&&Array.isArray(this.options.rangeHighlights)&&this.options.rangeHighlights.length>0)for(var b=0;b<this.options.rangeHighlights.length;b++){var c=this._toPercentage(this.options.rangeHighlights[b].start),d=this._toPercentage(this.options.rangeHighlights[b].end);if(this.options.reversed){var e=100-d;d=100-c,c=e}var f=this._createHighlightRange(c,d);f?"vertical"===this.options.orientation?(this.rangeHighlightElements[b].style.top=f.start+"%",this.rangeHighlightElements[b].style.height=f.size+"%"):(this.options.rtl?this.rangeHighlightElements[b].style.right=f.start+"%":this.rangeHighlightElements[b].style.left=f.start+"%",this.rangeHighlightElements[b].style.width=f.size+"%"):this.rangeHighlightElements[b].style.display="none"}if(Array.isArray(this.options.ticks)&&this.options.ticks.length>0){var g,h="vertical"===this.options.orientation?"height":"width";g="vertical"===this.options.orientation?"marginTop":this.options.rtl?"marginRight":"marginLeft";var i=this._state.size/(this.options.ticks.length-1);if(this.tickLabelContainer){var j=0;if(0===this.options.ticks_positions.length)"vertical"!==this.options.orientation&&(this.tickLabelContainer.style[g]=-i/2+"px"),j=this.tickLabelContainer.offsetHeight;else for(k=0;k<this.tickLabelContainer.childNodes.length;k++)this.tickLabelContainer.childNodes[k].offsetHeight>j&&(j=this.tickLabelContainer.childNodes[k].offsetHeight);"horizontal"===this.options.orientation&&(this.sliderElem.style.marginBottom=j+"px")}for(var k=0;k<this.options.ticks.length;k++){var l=this.options.ticks_positions[k]||this._toPercentage(this.options.ticks[k]);this.options.reversed&&(l=100-l),this.ticks[k].style[this.stylePos]=l+"%",this._removeClass(this.ticks[k],"in-selection"),this.options.range?l>=a[0]&&l<=a[1]&&this._addClass(this.ticks[k],"in-selection"):"after"===this.options.selection&&l>=a[0]?this._addClass(this.ticks[k],"in-selection"):"before"===this.options.selection&&l<=a[0]&&this._addClass(this.ticks[k],"in-selection"),this.tickLabels[k]&&(this.tickLabels[k].style[h]=i+"px","vertical"!==this.options.orientation&&void 0!==this.options.ticks_positions[k]?(this.tickLabels[k].style.position="absolute",this.tickLabels[k].style[this.stylePos]=l+"%",this.tickLabels[k].style[g]=-i/2+"px"):"vertical"===this.options.orientation&&(this.options.rtl?this.tickLabels[k].style.marginRight=this.sliderElem.offsetWidth+"px":this.tickLabels[k].style.marginLeft=this.sliderElem.offsetWidth+"px",this.tickLabelContainer.style[g]=this.sliderElem.offsetWidth/2*-1+"px"))}}var m;if(this.options.range){m=this.options.formatter(this._state.value),this._setText(this.tooltipInner,m),this.tooltip.style[this.stylePos]=(a[1]+a[0])/2+"%";var n=this.options.formatter(this._state.value[0]);this._setText(this.tooltipInner_min,n);var o=this.options.formatter(this._state.value[1]);this._setText(this.tooltipInner_max,o),this.tooltip_min.style[this.stylePos]=a[0]+"%",this.tooltip_max.style[this.stylePos]=a[1]+"%"}else m=this.options.formatter(this._state.value[0]),this._setText(this.tooltipInner,m),this.tooltip.style[this.stylePos]=a[0]+"%";if("vertical"===this.options.orientation)this.trackLow.style.top="0",this.trackLow.style.height=Math.min(a[0],a[1])+"%",this.trackSelection.style.top=Math.min(a[0],a[1])+"%",this.trackSelection.style.height=Math.abs(a[0]-a[1])+"%",this.trackHigh.style.bottom="0",this.trackHigh.style.height=100-Math.min(a[0],a[1])-Math.abs(a[0]-a[1])+"%";else{"right"===this.stylePos?this.trackLow.style.right="0":this.trackLow.style.left="0",this.trackLow.style.width=Math.min(a[0],a[1])+"%","right"===this.stylePos?this.trackSelection.style.right=Math.min(a[0],a[1])+"%":this.trackSelection.style.left=Math.min(a[0],a[1])+"%",this.trackSelection.style.width=Math.abs(a[0]-a[1])+"%","right"===this.stylePos?this.trackHigh.style.left="0":this.trackHigh.style.right="0",this.trackHigh.style.width=100-Math.min(a[0],a[1])-Math.abs(a[0]-a[1])+"%";var p=this.tooltip_min.getBoundingClientRect(),q=this.tooltip_max.getBoundingClientRect();"bottom"===this.options.tooltip_position?p.right>q.left?(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top="",this.tooltip_max.style.bottom="22px"):(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top=this.tooltip_min.style.top,this.tooltip_max.style.bottom=""):p.right>q.left?(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top="18px"):(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top=this.tooltip_min.style.top)}},_createHighlightRange:function(a,b){return this._isHighlightRange(a,b)?a>b?{start:b,size:a-b}:{start:a,size:b-a}:null},_isHighlightRange:function(a,b){return a>=0&&100>=a&&b>=0&&100>=b?!0:!1},_resize:function(a){this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this._layout()},_removeProperty:function(a,b){a.style.removeProperty?a.style.removeProperty(b):a.style.removeAttribute(b)},_mousedown:function(a){if(!this._state.enabled)return!1;this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos];var b=this._getPercentage(a);if(this.options.range){var c=Math.abs(this._state.percentage[0]-b),d=Math.abs(this._state.percentage[1]-b);this._state.dragged=d>c?0:1,this._adjustPercentageForRangeSliders(b)}else this._state.dragged=0;this._state.percentage[this._state.dragged]=b,this._layout(),this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),this.mousemove&&document.removeEventListener("mousemove",this.mousemove,!1),this.mouseup&&document.removeEventListener("mouseup",this.mouseup,!1),this.mousemove=this._mousemove.bind(this),this.mouseup=this._mouseup.bind(this),this.touchCapable&&(document.addEventListener("touchmove",this.mousemove,!1),document.addEventListener("touchend",this.mouseup,!1)),document.addEventListener("mousemove",this.mousemove,!1),document.addEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!0;var e=this._calculateValue();return this._trigger("slideStart",e),this._setDataVal(e),this.setValue(e,!1,!0),a.returnValue=!1,this.options.focus&&this._triggerFocusOnHandle(this._state.dragged),!0},_touchstart:function(a){if(void 0===a.changedTouches)return void this._mousedown(a);var b=a.changedTouches[0];this.touchX=b.pageX,this.touchY=b.pageY},_triggerFocusOnHandle:function(a){0===a&&this.handle1.focus(),1===a&&this.handle2.focus()},_keydown:function(a,b){if(!this._state.enabled)return!1;var c;switch(b.keyCode){case 37:case 40:c=-1;break;case 39:case 38:c=1}if(c){if(this.options.natural_arrow_keys){var d="vertical"===this.options.orientation&&!this.options.reversed,e="horizontal"===this.options.orientation&&this.options.reversed;(d||e)&&(c=-c)}var f=this._state.value[a]+c*this.options.step,g=f/this.options.max*100;if(this._state.keyCtrl=a,this.options.range){this._adjustPercentageForRangeSliders(g);var h=this._state.keyCtrl?this._state.value[0]:f,i=this._state.keyCtrl?f:this._state.value[1];f=[h,i]}return this._trigger("slideStart",f),this._setDataVal(f),this.setValue(f,!0,!0),this._setDataVal(f),this._trigger("slideStop",f),this._layout(),this._pauseEvent(b),delete this._state.keyCtrl,!1}},_pauseEvent:function(a){a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),a.cancelBubble=!0,a.returnValue=!1},_mousemove:function(a){if(!this._state.enabled)return!1;var b=this._getPercentage(a);this._adjustPercentageForRangeSliders(b),this._state.percentage[this._state.dragged]=b,this._layout();var c=this._calculateValue(!0);return this.setValue(c,!0,!0),!1},_touchmove:function(a){if(void 0!==a.changedTouches){var b=a.changedTouches[0],c=b.pageX-this.touchX,d=b.pageY-this.touchY;this._state.inDrag||("vertical"===this.options.orientation&&5>=c&&c>=-5&&(d>=15||-15>=d)?this._mousedown(a):5>=d&&d>=-5&&(c>=15||-15>=c)&&this._mousedown(a))}},_adjustPercentageForRangeSliders:function(a){if(this.options.range){var b=this._getNumDigitsAfterDecimalPlace(a);b=b?b-1:0;var c=this._applyToFixedAndParseFloat(a,b);0===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[1],b)<c?(this._state.percentage[0]=this._state.percentage[1],this._state.dragged=1):1===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[0],b)>c?(this._state.percentage[1]=this._state.percentage[0],this._state.dragged=0):0===this._state.keyCtrl&&this._state.value[1]/this.options.max*100<a?(this._state.percentage[0]=this._state.percentage[1],this._state.keyCtrl=1,this.handle2.focus()):1===this._state.keyCtrl&&this._state.value[0]/this.options.max*100>a&&(this._state.percentage[1]=this._state.percentage[0],this._state.keyCtrl=0,this.handle1.focus())}},_mouseup:function(){if(!this._state.enabled)return!1;this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),document.removeEventListener("mousemove",this.mousemove,!1),document.removeEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!1,this._state.over===!1&&this._hideTooltip();var a=this._calculateValue(!0);return this._layout(),this._setDataVal(a),this._trigger("slideStop",a),!1},_calculateValue:function(a){var b;if(this.options.range?(b=[this.options.min,this.options.max],0!==this._state.percentage[0]&&(b[0]=this._toValue(this._state.percentage[0]),b[0]=this._applyPrecision(b[0])),100!==this._state.percentage[1]&&(b[1]=this._toValue(this._state.percentage[1]),b[1]=this._applyPrecision(b[1]))):(b=this._toValue(this._state.percentage[0]),b=parseFloat(b),b=this._applyPrecision(b)),a){for(var c=[b,1/0],d=0;d<this.options.ticks.length;d++){var e=Math.abs(this.options.ticks[d]-b);e<=c[1]&&(c=[this.options.ticks[d],e])}if(c[1]<=this.options.ticks_snap_bounds)return c[0]}return b},_applyPrecision:function(a){var b=this.options.precision||this._getNumDigitsAfterDecimalPlace(this.options.step);return this._applyToFixedAndParseFloat(a,b)},_getNumDigitsAfterDecimalPlace:function(a){var b=(""+a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return b?Math.max(0,(b[1]?b[1].length:0)-(b[2]?+b[2]:0)):0},_applyToFixedAndParseFloat:function(a,b){var c=a.toFixed(b);return parseFloat(c)},_getPercentage:function(a){!this.touchCapable||"touchstart"!==a.type&&"touchmove"!==a.type||(a=a.touches[0]);var b=a[this.mousePos],c=this._state.offset[this.stylePos],d=b-c;"right"===this.stylePos&&(d=-d);var e=d/this._state.size*100;return e=Math.round(e/this._state.percentage[2])*this._state.percentage[2],this.options.reversed&&(e=100-e),Math.max(0,Math.min(100,e))},_validateInputValue:function(a){if(isNaN(+a)){if(Array.isArray(a))return this._validateArray(a),a;throw new Error(f.formatInvalidInputErrorMsg(a))}return+a},_validateArray:function(a){for(var b=0;b<a.length;b++){
var c=a[b];if("number"!=typeof c)throw new Error(f.formatInvalidInputErrorMsg(c))}},_setDataVal:function(a){this.element.setAttribute("data-value",a),this.element.setAttribute("value",a),this.element.value=a},_trigger:function(b,c){c=c||0===c?c:void 0;var d=this.eventToCallbackMap[b];if(d&&d.length)for(var e=0;e<d.length;e++){var f=d[e];f(c)}a&&this._triggerJQueryEvent(b,c)},_triggerJQueryEvent:function(a,b){var c={type:a,value:b};this.$element.trigger(c),this.$sliderElem.trigger(c)},_unbindJQueryEventHandlers:function(){this.$element.off(),this.$sliderElem.off()},_setText:function(a,b){"undefined"!=typeof a.textContent?a.textContent=b:"undefined"!=typeof a.innerText&&(a.innerText=b)},_removeClass:function(a,b){for(var c=b.split(" "),d=a.className,e=0;e<c.length;e++){var f=c[e],g=new RegExp("(?:\\s|^)"+f+"(?:\\s|$)");d=d.replace(g," ")}a.className=d.trim()},_addClass:function(a,b){for(var c=b.split(" "),d=a.className,e=0;e<c.length;e++){var f=c[e],g=new RegExp("(?:\\s|^)"+f+"(?:\\s|$)"),h=g.test(d);h||(d+=" "+f)}a.className=d.trim()},_offsetLeft:function(a){return a.getBoundingClientRect().left},_offsetRight:function(a){return a.getBoundingClientRect().right},_offsetTop:function(a){for(var b=a.offsetTop;(a=a.offsetParent)&&!isNaN(a.offsetTop);)b+=a.offsetTop,"BODY"!==a.tagName&&(b-=a.scrollTop);return b},_offset:function(a){return{left:this._offsetLeft(a),right:this._offsetRight(a),top:this._offsetTop(a)}},_css:function(b,c,d){if(a)a.style(b,c,d);else{var e=c.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(a,b){return b.toUpperCase()});b.style[e]=d}},_toValue:function(a){return this.options.scale.toValue.apply(this,[a])},_toPercentage:function(a){return this.options.scale.toPercentage.apply(this,[a])},_setTooltipPosition:function(){var a=[this.tooltip,this.tooltip_min,this.tooltip_max];if("vertical"===this.options.orientation){var b;b=this.options.tooltip_position?this.options.tooltip_position:this.options.rtl?"left":"right";var c="left"===b?"right":"left";a.forEach(function(a){this._addClass(a,b),a.style[c]="100%"}.bind(this))}else"bottom"===this.options.tooltip_position?a.forEach(function(a){this._addClass(a,"bottom"),a.style.top="22px"}.bind(this)):a.forEach(function(a){this._addClass(a,"top"),a.style.top=-this.tooltip.outerHeight-14+"px"}.bind(this))}},a&&a.fn){var h=void 0;a.fn.slider?(windowIsDefined&&window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."),h=c):(a.bridget(b,d),h=b),a.bridget(c,d),a(function(){a("input[data-provide=slider]")[h]()})}}(a),d});dvertisers & agencies"
											data-ga-event="click_header_menu" 
											data-ga-page-category="profiles" 
											data-ga-page-subcategory="advertisers__agencies"
											>
											<div class="w-100 ht-body-s u-medium u-type-color-base-text-terciary">Advertisers & agencies</div>
											<div class="w-100 ht-body-xs u-regular u-type-color-base-text-principal">Media buyers pursuing direct and premium inventory.</div>
										</a>	
																				<a 
											href="/demand-partners" 
											class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
											title="Demand partners"
											data-ga-event="click_header_menu" 
											data-ga-page-category="profiles" 
											data-ga-page-subcategory="demand_partners"
											>
											<div class="w-100 ht-body-s u-medium u-type-color-base-text-terciary">Demand partners</div>
											<div class="w-100 ht-body-xs u-regular u-type-color-base-text-principal">Programmatic buying platforms aiming to integrate with our services.</div>
										</a>	
																			
									</div>
									

																		<div class="col-2 d-flex flex-column">
																				<div class="w-100 ht-body-s u-medium u-pB-s">Get started in Tappx</div>		
										 
																				<div class="w-100 u-pB-m js-ga-header-links">
																							<div class="w-100 u-pB-xs">
													<a data-ga-event="click_header_menu" data-ga-page-category="profiles" data-ga-page-subcategory="access_the_dashboard" href="https://dashboard.tappx.com/" title="">Access the dashboard</a>												</div>	
																								<div class="w-100 u-pB-xs">
													<a data-ga-event="click_header_menu" data-ga-page-category="profiles" data-ga-page-subcategory="contact_sales" href="/contact">Contact sales</a>												</div>	
																								<div class="w-100 u-pB-xs">
													<a data-ga-event="click_header_menu" data-ga-page-category="profiles" data-ga-page-subcategory="join_the_team" href="https://www.techsoulogy.com/about-us/careers">Join the team</a>												</div>	
																						</div>
																															<div class="w-100 u-type-color-base-text-terciary reset-list m-navIdiom flex-wrap">
												<ul><li class="menu-item wpml-ls-slot-10 wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-menu-item wpml-ls-first-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-10-en"><a title="English" href="https://www.tappx.com/blog/understanding-view-through-conversion-and-viewability-in-user-acquisition-attribution-models"><span class="wpml-ls-native" lang="en">English</span></a></li>
<li class="menu-item wpml-ls-slot-10 wpml-ls-item wpml-ls-item-es wpml-ls-menu-item wpml-ls-last-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-10-es"><a title="Español" href="https://www.tappx.com/es/blog/entendiendo-view-through-conversion-y-viewability-en-los-modelos-de-atribucion-de-captacion-de-usuarios"><span class="wpml-ls-native" lang="es">Español</span></a></li>
</ul>											</div>
																				</div>
									
								</div>
							</div>
						</div>
												                    </li>
                                       <li>
						<span>Solutions</span>												<div class="sub-menu w-100 u-bg-color-superficie-secondary-light u-pTB-s">
							<div class="container u-pTB-s">
								<div class="row d-flex align-items-start justify-content-between">
									<div class="col-3 d-flex flex-column">
										<div class="w-100 ht-body-s u-medium u-pB-m">Our solutions</div>
										<div class="w-100 ht-body u-regular">Our technology works hand in hand with our brilliant team. It’s a unique human contribution.</div>
									</div>
																		<div class="col-3 d-flex flex-column l-itemsMenuMax">
																				<a 
											href="/monetization" 
											class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
											title="Monetization"
											data-ga-event="click_header_menu" 
											data-ga-page-category="solutions" 
											data-ga-page-subcategory="monetization"
											>
											<div class="w-100 ht-body-s u-medium u-type-color-base-text-terciary">Monetization</div>
											<div class="w-100 ht-body-xs u-regular u-type-color-base-text-principal">Maximize your app revenue.</div>
										</a>	
																				<a 
											href="/free-community-based-user-acquisition" 
											class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
											title="Free community-based acquisition"
											data-ga-event="click_header_menu" 
											data-ga-page-category="solutions" 
											data-ga-page-subcategory="free_community-based_acquisition"
											>
											<div class="w-100 ht-body-s u-medium u-type-color-base-text-terciary">Free community-based acquisition</div>
											<div class="w-100 ht-body-xs u-regular u-type-color-base-text-principal">Acquire users for free in exchange of showing ads from our community base.</div>
										</a>	
																				<a 
											href="/paid-user-acquisition-at-scale" 
											class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
											title="Paid user acquisition at scale"
											data-ga-event="click_header_menu" 
											data-ga-page-category="solutions" 
											data-ga-page-subcategory="paid_user_acquisition_at_scale"
											>
											<div class="w-100 ht-body-s u-medium u-type-color-base-text-terciary">Paid user acquisition at scale</div>
											<div class="w-100 ht-body-xs u-regular u-type-color-base-text-principal">Meet your user acquisition goals effectively.</div>
										</a>	
																				<a 
											href="/programmatic-brand-advertising" 
											class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
											title="Programmatic brand advertising"
											data-ga-event="click_header_menu" 
											data-ga-page-category="solutions" 
											data-ga-page-subcategory="programmatic_brand_advertising"
											>
											<div class="w-100 ht-body-s u-medium u-type-color-base-text-terciary">Programmatic brand advertising</div>
											<div class="w-100 ht-body-xs u-regular u-type-color-base-text-principal">Access direct and premium inventory.</div>
										</a>	
																				<a 
											href="/programmatic-performance-advertising" 
											class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
											title="Programmatic performance advertising"
											data-ga-event="click_header_menu" 
											data-ga-page-category="solutions" 
											data-ga-page-subcategory="programmatic_performance_advertising"
											>
											<div class="w-100 ht-body-s u-medium u-type-color-base-text-terciary">Programmatic performance advertising</div>
											<div class="w-100 ht-body-xs u-regular u-type-color-base-text-principal">Meet your ad campaign goals and pay only for the results you get.</div>
										</a>	
																			
									</div>
									

																		<div class="col-2 d-flex flex-column">
																				<div class="w-100 ht-body-s u-medium u-pB-s">Get started in Tappx</div>		
										 
																				<div class="w-100 u-pB-m js-ga-header-links">
																							<div class="w-100 u-pB-xs">
													<a data-ga-event="click_header_menu" data-ga-page-category="solutions" data-ga-page-subcategory="access_the_dashboard" href="https://dashboard.tappx.com/" title="">Access the dashboard</a>												</div>	
																								<div class="w-100 u-pB-xs">
													<a data-ga-event="click_header_menu" data-ga-page-category="solutions" data-ga-page-subcategory="contact_sales" href="/contact">Contact sales</a>												</div>	
																								<div class="w-100 u-pB-xs">
													<a data-ga-event="click_header_menu" data-ga-page-category="solutions" data-ga-page-subcategory="join_the_team" href="https://www.techsoulogy.com/about-us/careers">Join the team</a>												</div>	
																						</div>
																															<div class="w-100 u-type-color-base-text-terciary reset-list m-navIdiom flex-wrap">
												<ul><li class="menu-item wpml-ls-slot-10 wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-menu-item wpml-ls-first-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-10-en"><a title="English" href="https://www.tappx.com/blog/understanding-view-through-conversion-and-viewability-in-user-acquisition-attribution-models"><span class="wpml-ls-native" lang="en">English</span></a></li>
<li class="menu-item wpml-ls-slot-10 wpml-ls-item wpml-ls-item-es wpml-ls-menu-item wpml-ls-last-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-10-es"><a title="Español" href="https://www.tappx.com/es/blog/entendiendo-view-through-conversion-y-viewability-en-los-modelos-de-atribucion-de-captacion-de-usuarios"><span class="wpml-ls-native" lang="es">Español</span></a></li>
</ul>											</div>
																				</div>
									
								</div>
							</div>
						</div>
												                    </li>
                                       <li>
						<span>Platforms</span>												<div class="sub-menu w-100 u-bg-color-superficie-secondary-light u-pTB-s">
							<div class="container u-pTB-s">
								<div class="row d-flex align-items-start justify-content-between">
									<div class="col-3 d-flex flex-column">
										<div class="w-100 ht-body-s u-medium u-pB-m">Our platforms</div>
										<div class="w-100 ht-body u-regular">Constantly challenging to explore new ideas and platforms to deliver the most innovative solutions.</div>
									</div>
																		<div class="col-3 d-flex flex-column l-itemsMenuMax">
																				<a 
											href="/mobile" 
											class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
											title="Mobile"
											data-ga-event="click_header_menu" 
											data-ga-page-category="platforms" 
											data-ga-page-subcategory="mobile"
											>
											<div class="w-100 ht-body-s u-medium u-type-color-base-text-terciary">Mobile</div>
											<div class="w-100 ht-body-xs u-regular u-type-color-base-text-principal">In-app and mobile web environments.</div>
										</a>	
																				<a 
											href="/desktop-web" 
											class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
											title="Desktop web"
											data-ga-event="click_header_menu" 
											data-ga-page-category="platforms" 
											data-ga-page-subcategory="desktop_web"
											>
											<div class="w-100 ht-body-s u-medium u-type-color-base-text-terciary">Desktop web</div>
											<div class="w-100 ht-body-xs u-regular u-type-color-base-text-principal">Web advertising options for bigger screen size.</div>
										</a>	
																				<a 
											href="/ott-ctv" 
											class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
											title="OTT/CTV"
											data-ga-event="click_header_menu" 
											data-ga-page-category="platforms" 
											data-ga-page-subcategory="ottctv"
											>
											<div class="w-100 ht-body-s u-medium u-type-color-base-text-terciary">OTT/CTV</div>
											<div class="w-100 ht-body-xs u-regular u-type-color-base-text-principal">Video advertising options for Connected TV and over-the-top platforms.</div>
										</a>	
																			
									</div>
									

																		<div class="col-2 d-flex flex-column">
																				<div class="w-100 ht-body-s u-medium u-pB-s">Get started in Tappx</div>		
										 
																				<div class="w-100 u-pB-m js-ga-header-links">
																							<div class="w-100 u-pB-xs">
													<a data-ga-event="click_header_menu" data-ga-page-category="platforms" data-ga-page-subcategory="access_the_dashboard" href="https://dashboard.tappx.com/" title="">Access the dashboard</a>												</div>	
																								<div class="w-100 u-pB-xs">
													<a data-ga-event="click_header_menu" data-ga-page-category="platforms" data-ga-page-subcategory="contact_sales" href="/contact">Contact sales</a>												</div>	
																								<div class="w-100 u-pB-xs">
													<a data-ga-event="click_header_menu" data-ga-page-category="platforms" data-ga-page-subcategory="join_the_team" href="https://www.techsoulogy.com/about-us/careers">Join the team</a>												</div>	
																						</div>
																															<div class="w-100 u-type-color-base-text-terciary reset-list m-navIdiom flex-wrap">
												<ul><li class="menu-item wpml-ls-slot-10 wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-menu-item wpml-ls-first-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-10-en"><a title="English" href="https://www.tappx.com/blog/understanding-view-through-conversion-and-viewability-in-user-acquisition-attribution-models"><span class="wpml-ls-native" lang="en">English</span></a></li>
<li class="menu-item wpml-ls-slot-10 wpml-ls-item wpml-ls-item-es wpml-ls-menu-item wpml-ls-last-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-10-es"><a title="Español" href="https://www.tappx.com/es/blog/entendiendo-view-through-conversion-y-viewability-en-los-modelos-de-atribucion-de-captacion-de-usuarios"><span class="wpml-ls-native" lang="es">Español</span></a></li>
</ul>											</div>
																				</div>
									
								</div>
							</div>
						</div>
												                    </li>
                                       <li>
						<span>Company</span>												<div class="sub-menu w-100 u-bg-color-superficie-secondary-light u-pTB-s">
							<div class="container u-pTB-s">
								<div class="row d-flex align-items-start justify-content-between">
									<div class="col-3 d-flex flex-column">
										<div class="w-100 ht-body-s u-medium u-pB-m">Our company</div>
										<div class="w-100 ht-body u-regular">Who we are, how we work, and how to join our beloved team.</div>
									</div>
																		<div class="col-3 d-flex flex-column l-itemsMenuMax">
																				<a 
											href="/about-us" 
											class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
											title="About us"
											data-ga-event="click_header_menu" 
											data-ga-page-category="company" 
											data-ga-page-subcategory="about_us"
											>
											<div class="w-100 ht-body-s u-medium u-type-color-base-text-terciary">About us</div>
											<div class="w-100 ht-body-xs u-regular u-type-color-base-text-principal">Where we came from, where we are going to.</div>
										</a>	
																				<a 
											href="https://www.techsoulogy.com/about-us/team" 
											class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
											title="Our team"
											data-ga-event="click_header_menu" 
											data-ga-page-category="company" 
											data-ga-page-subcategory="our_team"
											>
											<div class="w-100 ht-body-s u-medium u-type-color-base-text-terciary">Our team</div>
											<div class="w-100 ht-body-xs u-regular u-type-color-base-text-principal">Meet the team members who you will be number one fan.</div>
										</a>	
																				<a 
											href="https://www.techsoulogy.com/about-us/careers" 
											class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
											title="Careers"
											data-ga-event="click_header_menu" 
											data-ga-page-category="company" 
											data-ga-page-subcategory="careers"
											>
											<div class="w-100 ht-body-s u-medium u-type-color-base-text-terciary">Careers</div>
											<div class="w-100 ht-body-xs u-regular u-type-color-base-text-principal">Do you stand out? Come on board!</div>
										</a>	
																				<a 
											href="/trust-center" 
											class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
											title="Trust Center"
											data-ga-event="click_header_menu" 
											data-ga-page-category="company" 
											data-ga-page-subcategory="trust_center"
											>
											<div class="w-100 ht-body-s u-medium u-type-color-base-text-terciary">Trust Center</div>
											<div class="w-100 ht-body-xs u-regular u-type-color-base-text-principal">Learn everything about our "Quality First Framework".</div>
										</a>	
																				<a 
											href="https://www.techsoulogy.com/about-us/press-center" 
											class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
											title="Press Center"
											data-ga-event="click_header_menu" 
											data-ga-page-category="company" 
											data-ga-page-subcategory="press_center"
											>
											<div class="w-100 ht-body-s u-medium u-type-color-base-text-terciary">Press Center</div>
											<div class="w-100 ht-body-xs u-regular u-type-color-base-text-principal">What they say about us in the press: numbers, announcements, and interviews.</div>
										</a>	
																			
									</div>
									

																		<div class="col-2 d-flex flex-column">
																				<div class="w-100 ht-body-s u-medium u-pB-s">Get started in Tappx</div>		
										 
																				<div class="w-100 u-pB-m js-ga-header-links">
																							<div class="w-100 u-pB-xs">
													<a data-ga-event="click_header_menu" data-ga-page-category="company" data-ga-page-subcategory="access_the_dashboard" href="https://dashboard.tappx.com/" title="">Access the dashboard</a>												</div>	
																								<div class="w-100 u-pB-xs">
													<a data-ga-event="click_header_menu" data-ga-page-category="company" data-ga-page-subcategory="contact_sales" href="/contact">Contact sales</a>												</div>	
																								<div class="w-100 u-pB-xs">
													<a data-ga-event="click_header_menu" data-ga-page-category="company" data-ga-page-subcategory="join_the_team" href="https://www.techsoulogy.com/about-us/careers">Join the team</a>												</div>	
																						</div>
																															<div class="w-100 u-type-color-base-text-terciary reset-list m-navIdiom flex-wrap">
												<ul><li class="menu-item wpml-ls-slot-10 wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-menu-item wpml-ls-first-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-10-en"><a title="English" href="https://www.tappx.com/blog/understanding-view-through-conversion-and-viewability-in-user-acquisition-attribution-models"><span class="wpml-ls-native" lang="en">English</span></a></li>
<li class="menu-item wpml-ls-slot-10 wpml-ls-item wpml-ls-item-es wpml-ls-menu-item wpml-ls-last-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-10-es"><a title="Español" href="https://www.tappx.com/es/blog/entendiendo-view-through-conversion-y-viewability-en-los-modelos-de-atribucion-de-captacion-de-usuarios"><span class="wpml-ls-native" lang="es">Español</span></a></li>
</ul>											</div>
																				</div>
									
								</div>
							</div>
						</div>
												                    </li>
                                       <li>
						<span>Community</span>												<div class="sub-menu w-100 u-bg-color-superficie-secondary-light u-pTB-s">
							<div class="container u-pTB-s">
								<div class="row d-flex align-items-start justify-content-between">
									<div class="col-3 d-flex flex-column">
										<div class="w-100 ht-body-s u-medium u-pB-m">Our community</div>
										<div class="w-100 ht-body u-regular">We believe in fair opportunities for all parts of the ad ecosystem. Knowledge is one way to achieve it.</div>
									</div>
																		<div class="col-3 d-flex flex-column l-itemsMenuMax">
																				<a 
											href="/knowledge-center" 
											class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
											title="Knowledge Center"
											data-ga-event="click_header_menu" 
											data-ga-page-category="community" 
											data-ga-page-subcategory="knowledge_center"
											>
											<div class="w-100 ht-body-s u-medium u-type-color-base-text-terciary">Knowledge Center</div>
											<div class="w-100 ht-body-xs u-regular u-type-color-base-text-principal">Everything you need to know about the industry in one place.</div>
										</a>	
																				<a 
											href="/blog" 
											class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
											title="Blog"
											data-ga-event="click_header_menu" 
											data-ga-page-category="community" 
											data-ga-page-subcategory="blog"
											>
											<div class="w-100 ht-body-s u-medium u-type-color-base-text-terciary">Blog</div>
											<div class="w-100 ht-body-xs u-regular u-type-color-base-text-principal">Tips and trends about technology, media, and apps to master water-cooler conversations.</div>
										</a>	
																				<a 
											href="/success-stories" 
											class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
											title="Success stories"
											data-ga-event="click_header_menu" 
											data-ga-page-category="community" 
											data-ga-page-subcategory="success_stories"
											>
											<div class="w-100 ht-body-s u-medium u-type-color-base-text-terciary">Success stories</div>
											<div class="w-100 ht-body-xs u-regular u-type-color-base-text-principal">Before you, others have trusted us and achieved the results they set out.</div>
										</a>	
																			
									</div>
									

																		<div class="col-2 d-flex flex-column">
																				<div class="w-100 ht-body-s u-medium u-pB-s">Get started in Tappx</div>		
										 
																				<div class="w-100 u-pB-m js-ga-header-links">
																							<div class="w-100 u-pB-xs">
													<a data-ga-event="click_header_menu" data-ga-page-category="community" data-ga-page-subcategory="access_the_dashboard" href="https://dashboard.tappx.com/" title="">Access the dashboard</a>												</div>	
																								<div class="w-100 u-pB-xs">
													<a data-ga-event="click_header_menu" data-ga-page-category="community" data-ga-page-subcategory="contact_sales" href="/contact">Contact sales</a>												</div>	
																								<div class="w-100 u-pB-xs">
													<a data-ga-event="click_header_menu" data-ga-page-category="community" data-ga-page-subcategory="join_the_team" href="https://www.techsoulogy.com/about-us/careers">Join the team</a>												</div>	
																						</div>
																															<div class="w-100 u-type-color-base-text-terciary reset-list m-navIdiom flex-wrap">
												<ul><li class="menu-item wpml-ls-slot-10 wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-menu-item wpml-ls-first-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-10-en"><a title="English" href="https://www.tappx.com/blog/understanding-view-through-conversion-and-viewability-in-user-acquisition-attribution-models"><span class="wpml-ls-native" lang="en">English</span></a></li>
<li class="menu-item wpml-ls-slot-10 wpml-ls-item wpml-ls-item-es wpml-ls-menu-item wpml-ls-last-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-10-es"><a title="Español" href="https://www.tappx.com/es/blog/entendiendo-view-through-conversion-y-viewability-en-los-modelos-de-atribucion-de-captacion-de-usuarios"><span class="wpml-ls-native" lang="es">Español</span></a></li>
</ul>											</div>
																				</div>
									
								</div>
							</div>
						</div>
												                    </li>
                                       <li>
						<a data-ga-event="click_cta"  data-ga-link-style="cta" data-ga-component-name="header" data-ga-component-position="6" href="https://dashboard.tappx.com/signup" class="a-btn a-btn-primary --btn-min">
        <svg class="__icon">
    <use xlink:href="#user" href="#user"></use>
    </svg>
    <span>Get Started</span>
</a>                    </li>
                   				</ul>
			</nav>
                        <div class="u-mL-m u-md-mL-0 m-selectLang js-selectLang u-type-color-base-text-principal ht-body-xs uppercase">
                <svg class="__icon u-type-color-base-text-terciary">
                    <use xlink:href="#globe" href="#globe"></use>
                </svg>
                <ul><li class="menu-item wpml-ls-slot-63 wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-menu-item wpml-ls-first-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-63-en"><a title="English" href="https://www.tappx.com/blog/understanding-view-through-conversion-and-viewability-in-user-acquisition-attribution-models"><span class="wpml-ls-native" lang="en">English</span></a></li>
<li class="menu-item wpml-ls-slot-63 wpml-ls-item wpml-ls-item-es wpml-ls-menu-item wpml-ls-last-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-63-es"><a title="Español" href="https://www.tappx.com/es/blog/entendiendo-view-through-conversion-y-viewability-en-los-modelos-de-atribucion-de-captacion-de-usuarios"><span class="wpml-ls-native" lang="es">Español</span></a></li>
</ul>                <svg class="__icon u-type-color-base-text-secondary">
                    <use xlink:href="#chevron-down" href="#chevron-down"></use>
                </svg>
            </div>
        			<button class="__btn a-btnBrgr u-type-color-base-text-terciary u-mL-s" onClick="actionMenu()">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M22 20C22 20.5523 21.5523 21 21 21L3 21C2.44772 21 2 20.5523 2 20C2 19.4477 2.44772 19 3 19L21 19C21.5523 19 22 19.4477 22 20Z" fill="currentColor"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 12.5523 21.5523 13 21 13L3 13C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11L21 11C21.5523 11 22 11.4477 22 12Z" fill="currentColor"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M22 4C22 4.55228 21.5523 5 21 5L3 5C2.44772 5 2 4.55228 2 4C2 3.44771 2.44772 3 3 3L21 3C21.5523 3 22 3.44772 22 4Z"			 fill="currentColor"/>
				</svg>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z" fill="currentColor"/>
				</svg>
			</button>
		</div>
	</div>
</header><div id="menu" class="m-menuMobile containerTop u-bg-color-superficie-principal-light">
	<div class="__bx u-bg-color-superficie-principal  u-color-five">		
		<div class="total u-pTB-m u-bg-color-superficie-white">
			<div class="container">
								<div class="m-menuMobile__body total u-pB-l">
															<nav class="m-navMobile --max" role="navigation">
						<ul class="reset-list">
														<li class="a-itemMenuMob u-mB-0 menu-item-has-children">
								<div class="w-100 ht-body u-medium u-type-color-base-text-terciary u-pTB-xs">
									<p><span>Profiles</span></p>
								</div>
								<hr>
																								<div class="sub-menu w-100">
									<div class="w-100 u-pTB-s">
										<div class="row d-flex align-items-start justify-content-between">
											<div class="col-12 d-flex flex-column u-pB-s u-mB-s">
												<div class="w-100 ht-body u-medium u-pB-s">Our users</div>
												<div class="w-100 ht-body u-regular">Only by truly prioritizing the needs of our clients we can bring them the results they need.</div>
											</div>
																						<div class="col-12 d-flex flex-column l-itemsMenuMax">
																								<a 
													href="/developers" 
													class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
													title="Developers"
													data-ga-event="click_header_menu" 
													data-ga-page-category="profiles" 
													data-ga-page-subcategory="developers"
													>
													<div class="w-100 ht-body u-medium u-type-color-base-text-terciary">Developers</div>
													<div class="w-100 ht-body-s u-regular u-type-color-base-text-principal">Independent app and game developers with agile start requirements.</div>
												</a>	
																								<a 
													href="/publishers" 
													class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
													title="Publishers"
													data-ga-event="click_header_menu" 
													data-ga-page-category="profiles" 
													data-ga-page-subcategory="publishers"
													>
													<div class="w-100 ht-body u-medium u-type-color-base-text-terciary">Publishers</div>
													<div class="w-100 ht-body-s u-regular u-type-color-base-text-principal">Mid-size and large publishers with enterprise needs.</div>
												</a>	
																								<a 
													href="/advertisers-agencies" 
													class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
													title="Advertisers & agencies"
													data-ga-event="click_header_menu" 
													data-ga-page-category="profiles" 
													data-ga-page-subcategory="advertisers__agencies"
													>
													<div class="w-100 ht-body u-medium u-type-color-base-text-terciary">Advertisers & agencies</div>
													<div class="w-100 ht-body-s u-regular u-type-color-base-text-principal">Media buyers pursuing direct and premium inventory.</div>
												</a>	
																								<a 
													href="/demand-partners" 
													class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
													title="Demand partners"
													data-ga-event="click_header_menu" 
													data-ga-page-category="profiles" 
													data-ga-page-subcategory="demand_partners"
													>
													<div class="w-100 ht-body u-medium u-type-color-base-text-terciary">Demand partners</div>
													<div class="w-100 ht-body-s u-regular u-type-color-base-text-principal">Programmatic buying platforms aiming to integrate with our services.</div>
												</a>	
																					
											</div>
																					</div>
									</div>
								</div>
																							</li>
													<li class="a-itemMenuMob u-mB-0 menu-item-has-children">
								<div class="w-100 ht-body u-medium u-type-color-base-text-terciary u-pTB-xs">
									<p><span>Solutions</span></p>
								</div>
								<hr>
																								<div class="sub-menu w-100">
									<div class="w-100 u-pTB-s">
										<div class="row d-flex align-items-start justify-content-between">
											<div class="col-12 d-flex flex-column u-pB-s u-mB-s">
												<div class="w-100 ht-body u-medium u-pB-s">Our solutions</div>
												<div class="w-100 ht-body u-regular">Our technology works hand in hand with our brilliant team. It’s a unique human contribution.</div>
											</div>
																						<div class="col-12 d-flex flex-column l-itemsMenuMax">
																								<a 
													href="/monetization" 
													class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
													title="Monetization"
													data-ga-event="click_header_menu" 
													data-ga-page-category="solutions" 
													data-ga-page-subcategory="monetization"
													>
													<div class="w-100 ht-body u-medium u-type-color-base-text-terciary">Monetization</div>
													<div class="w-100 ht-body-s u-regular u-type-color-base-text-principal">Maximize your app revenue.</div>
												</a>	
																								<a 
													href="/free-community-based-user-acquisition" 
													class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
													title="Free community-based acquisition"
													data-ga-event="click_header_menu" 
													data-ga-page-category="solutions" 
													data-ga-page-subcategory="free_community-based_acquisition"
													>
													<div class="w-100 ht-body u-medium u-type-color-base-text-terciary">Free community-based acquisition</div>
													<div class="w-100 ht-body-s u-regular u-type-color-base-text-principal">Acquire users for free in exchange of showing ads from our community base.</div>
												</a>	
																								<a 
													href="/paid-user-acquisition-at-scale" 
													class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
													title="Paid user acquisition at scale"
													data-ga-event="click_header_menu" 
													data-ga-page-category="solutions" 
													data-ga-page-subcategory="paid_user_acquisition_at_scale"
													>
													<div class="w-100 ht-body u-medium u-type-color-base-text-terciary">Paid user acquisition at scale</div>
													<div class="w-100 ht-body-s u-regular u-type-color-base-text-principal">Meet your user acquisition goals effectively.</div>
												</a>	
																								<a 
													href="/programmatic-brand-advertising" 
													class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
													title="Programmatic brand advertising"
													data-ga-event="click_header_menu" 
													data-ga-page-category="solutions" 
													data-ga-page-subcategory="programmatic_brand_advertising"
													>
													<div class="w-100 ht-body u-medium u-type-color-base-text-terciary">Programmatic brand advertising</div>
													<div class="w-100 ht-body-s u-regular u-type-color-base-text-principal">Access direct and premium inventory.</div>
												</a>	
																								<a 
													href="/programmatic-performance-advertising" 
													class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
													title="Programmatic performance advertising"
													data-ga-event="click_header_menu" 
													data-ga-page-category="solutions" 
													data-ga-page-subcategory="programmatic_performance_advertising"
													>
													<div class="w-100 ht-body u-medium u-type-color-base-text-terciary">Programmatic performance advertising</div>
													<div class="w-100 ht-body-s u-regular u-type-color-base-text-principal">Meet your ad campaign goals and pay only for the results you get.</div>
												</a>	
																					
											</div>
																					</div>
									</div>
								</div>
																							</li>
													<li class="a-itemMenuMob u-mB-0 menu-item-has-children">
								<div class="w-100 ht-body u-medium u-type-color-base-text-terciary u-pTB-xs">
									<p><span>Platforms</span></p>
								</div>
								<hr>
																								<div class="sub-menu w-100">
									<div class="w-100 u-pTB-s">
										<div class="row d-flex align-items-start justify-content-between">
											<div class="col-12 d-flex flex-column u-pB-s u-mB-s">
												<div class="w-100 ht-body u-medium u-pB-s">Our platforms</div>
												<div class="w-100 ht-body u-regular">Constantly challenging to explore new ideas and platforms to deliver the most innovative solutions.</div>
											</div>
																						<div class="col-12 d-flex flex-column l-itemsMenuMax">
																								<a 
													href="/mobile" 
													class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
													title="Mobile"
													data-ga-event="click_header_menu" 
													data-ga-page-category="platforms" 
													data-ga-page-subcategory="mobile"
													>
													<div class="w-100 ht-body u-medium u-type-color-base-text-terciary">Mobile</div>
													<div class="w-100 ht-body-s u-regular u-type-color-base-text-principal">In-app and mobile web environments.</div>
												</a>	
																								<a 
													href="/desktop-web" 
													class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
													title="Desktop web"
													data-ga-event="click_header_menu" 
													data-ga-page-category="platforms" 
													data-ga-page-subcategory="desktop_web"
													>
													<div class="w-100 ht-body u-medium u-type-color-base-text-terciary">Desktop web</div>
													<div class="w-100 ht-body-s u-regular u-type-color-base-text-principal">Web advertising options for bigger screen size.</div>
												</a>	
																								<a 
													href="/ott-ctv" 
													class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
													title="OTT/CTV"
													data-ga-event="click_header_menu" 
													data-ga-page-category="platforms" 
													data-ga-page-subcategory="ottctv"
													>
													<div class="w-100 ht-body u-medium u-type-color-base-text-terciary">OTT/CTV</div>
													<div class="w-100 ht-body-s u-regular u-type-color-base-text-principal">Video advertising options for Connected TV and over-the-top platforms.</div>
												</a>	
																					
											</div>
																					</div>
									</div>
								</div>
																							</li>
													<li class="a-itemMenuMob u-mB-0 menu-item-has-children">
								<div class="w-100 ht-body u-medium u-type-color-base-text-terciary u-pTB-xs">
									<p><span>Company</span></p>
								</div>
								<hr>
																								<div class="sub-menu w-100">
									<div class="w-100 u-pTB-s">
										<div class="row d-flex align-items-start justify-content-between">
											<div class="col-12 d-flex flex-column u-pB-s u-mB-s">
												<div class="w-100 ht-body u-medium u-pB-s">Our company</div>
												<div class="w-100 ht-body u-regular">Who we are, how we work, and how to join our beloved team.</div>
											</div>
																						<div class="col-12 d-flex flex-column l-itemsMenuMax">
																								<a 
													href="/about-us" 
													class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
													title="About us"
													data-ga-event="click_header_menu" 
													data-ga-page-category="company" 
													data-ga-page-subcategory="about_us"
													>
													<div class="w-100 ht-body u-medium u-type-color-base-text-terciary">About us</div>
													<div class="w-100 ht-body-s u-regular u-type-color-base-text-principal">Where we came from, where we are going to.</div>
												</a>	
																								<a 
													href="https://www.techsoulogy.com/about-us/team" 
													class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
													title="Our team"
													data-ga-event="click_header_menu" 
													data-ga-page-category="company" 
													data-ga-page-subcategory="our_team"
													>
													<div class="w-100 ht-body u-medium u-type-color-base-text-terciary">Our team</div>
													<div class="w-100 ht-body-s u-regular u-type-color-base-text-principal">Meet the team members who you will be number one fan.</div>
												</a>	
																								<a 
													href="https://www.techsoulogy.com/about-us/careers" 
													class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
													title="Careers"
													data-ga-event="click_header_menu" 
													data-ga-page-category="company" 
													data-ga-page-subcategory="careers"
													>
													<div class="w-100 ht-body u-medium u-type-color-base-text-terciary">Careers</div>
													<div class="w-100 ht-body-s u-regular u-type-color-base-text-principal">Do you stand out? Come on board!</div>
												</a>	
																								<a 
													href="/trust-center" 
													class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
													title="Trust Center"
													data-ga-event="click_header_menu" 
													data-ga-page-category="company" 
													data-ga-page-subcategory="trust_center"
													>
													<div class="w-100 ht-body u-medium u-type-color-base-text-terciary">Trust Center</div>
													<div class="w-100 ht-body-s u-regular u-type-color-base-text-principal">Learn everything about our "Quality First Framework".</div>
												</a>	
																								<a 
													href="https://www.techsoulogy.com/about-us/press-center" 
													class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
													title="Press Center"
													data-ga-event="click_header_menu" 
													data-ga-page-category="company" 
													data-ga-page-subcategory="press_center"
													>
													<div class="w-100 ht-body u-medium u-type-color-base-text-terciary">Press Center</div>
													<div class="w-100 ht-body-s u-regular u-type-color-base-text-principal">What they say about us in the press: numbers, announcements, and interviews.</div>
												</a>	
																					
											</div>
																					</div>
									</div>
								</div>
																							</li>
													<li class="a-itemMenuMob u-mB-0 menu-item-has-children">
								<div class="w-100 ht-body u-medium u-type-color-base-text-terciary u-pTB-xs">
									<p><span>Community</span></p>
								</div>
								<hr>
																								<div class="sub-menu w-100">
									<div class="w-100 u-pTB-s">
										<div class="row d-flex align-items-start justify-content-between">
											<div class="col-12 d-flex flex-column u-pB-s u-mB-s">
												<div class="w-100 ht-body u-medium u-pB-s">Our community</div>
												<div class="w-100 ht-body u-regular">We believe in fair opportunities for all parts of the ad ecosystem. Knowledge is one way to achieve it.</div>
											</div>
																						<div class="col-12 d-flex flex-column l-itemsMenuMax">
																								<a 
													href="/knowledge-center" 
													class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
													title="Knowledge Center"
													data-ga-event="click_header_menu" 
													data-ga-page-category="community" 
													data-ga-page-subcategory="knowledge_center"
													>
													<div class="w-100 ht-body u-medium u-type-color-base-text-terciary">Knowledge Center</div>
													<div class="w-100 ht-body-s u-regular u-type-color-base-text-principal">Everything you need to know about the industry in one place.</div>
												</a>	
																								<a 
													href="/blog" 
													class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
													title="Blog"
													data-ga-event="click_header_menu" 
													data-ga-page-category="community" 
													data-ga-page-subcategory="blog"
													>
													<div class="w-100 ht-body u-medium u-type-color-base-text-terciary">Blog</div>
													<div class="w-100 ht-body-s u-regular u-type-color-base-text-principal">Tips and trends about technology, media, and apps to master water-cooler conversations.</div>
												</a>	
																								<a 
													href="/success-stories" 
													class="w-100 u-pB-s text-decoration-none a-linkMenuItemMax" 
													title="Success stories"
													data-ga-event="click_header_menu" 
													data-ga-page-category="community" 
													data-ga-page-subcategory="success_stories"
													>
													<div class="w-100 ht-body u-medium u-type-color-base-text-terciary">Success stories</div>
													<div class="w-100 ht-body-s u-regular u-type-color-base-text-principal">Before you, others have trusted us and achieved the results they set out.</div>
												</a>	
																					
											</div>
																					</div>
									</div>
								</div>
																							</li>
													<li class="a-itemMenuMob u-mB-0 ">
								<div class="w-100 ht-body u-medium u-type-color-base-text-terciary u-pTB-xs">
									<p><a data-ga-event="click_cta"  data-ga-link-style="cta" data-ga-component-name="header" data-ga-component-position="6" href="https://dashboard.tappx.com/signup" class="a-btn a-btn-primary --btn-min">
        <svg class="__icon">
    <use xlink:href="#user" href="#user"></use>
    </svg>
    <span>Get Started</span>
</a></p>
								</div>
								<hr>
															</li>
												</ul>
					</nav>
									</div>
			</div>
		</div>
				<div class="m-menuMobile__footer w-100 u-bg-color-superficie-principal u-pTB-s u-pB-xl">
			<div class="container">
				<div class="w-100 d-flex flex-column">
										<div class="w-100 ht-body-s u-medium u-pB-s">Get started in Tappx</div>
					 
										<div class="w-100 u-pB-s">
													<div class="w-100 u-pB-xs">
								<a data-ga-event="click_header_menu" data-ga-page-category="menu_mobile" data-ga-page-subcategory="access_the_dashboard" href="https://dashboard.tappx.com/" title="">Access the dashboard</a>							</div>	
														<div class="w-100 u-pB-xs">
								<a data-ga-event="click_header_menu" data-ga-page-category="menu_mobile" data-ga-page-subcategory="contact_sales" href="/contact">Contact sales</a>							</div>	
														<div class="w-100 u-pB-xs">
								<a data-ga-event="click_header_menu" data-ga-page-category="menu_mobile" data-ga-page-subcategory="join_the_team" href="https://www.techsoulogy.com/about-us/careers">Join the team</a>							</div>	
												</div>
															<div class="w-100 u-type-color-base-text-terciary reset-list m-navIdiom">
						<ul><li class="menu-item wpml-ls-slot-10 wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-menu-item wpml-ls-first-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-10-en"><a title="English" href="https://www.tappx.com/blog/understanding-view-through-conversion-and-viewability-in-user-acquisition-attribution-models"><span class="wpml-ls-native" lang="en">English</span></a></li>
<li class="menu-item wpml-ls-slot-10 wpml-ls-item wpml-ls-item-es wpml-ls-menu-item wpml-ls-last-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-wpml-ls-10-es"><a title="Español" href="https://www.tappx.com/es/blog/entendiendo-view-through-conversion-y-viewability-en-los-modelos-de-atribucion-de-captacion-de-usuarios"><span class="wpml-ls-native" lang="es">Español</span></a></li>
</ul>					</div>
									</div>
			</div>
		</div>
			</div>
</div><div class="total m-contentBlog">
    <svg class="__decorationBlog" width="3386" height="1090" viewBox="0 0 3386 1090" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M884 555.658C884 375.684 884 285.697 921.357 218.021C948.699 168.489 989.489 127.699 1039.02 100.357C1106.7 63 1196.68 63 1376.66 63H2019.34C2199.32 63 2289.3 63 2356.98 100.357C2406.51 127.699 2447.3 168.489 2474.64 218.021C2512 285.697 2512 375.684 2512 555.658C2512 731.133 2512 818.87 2475.58 884.854C2448.92 933.148 2409.15 972.919 2360.85 999.576C2294.87 1036 2207.13 1036 2031.66 1036H1364.34C1188.87 1036 1101.13 1036 1035.15 999.576C986.852 972.919 947.081 933.148 920.424 884.854C884 818.87 884 731.133 884 555.658Z" fill="var(--souds-color-superficie-secondary-light)"/>
        <circle class="u-type-color-base-text-terciary" cx="2899.5" cy="549.5" r="486" stroke="var(--souds-color-base-text-terciary)"/>
        <circle class="u-type-color-base-text-terciary" cx="486.5" cy="549.5" r="486" stroke="var(--souds-color-base-text-terciary)"/>
    </svg>
    <div class="total u-pT-m">
        <div class="container">
            <div class="row">
                <!-- sidebar -->
                <div class="col-12 col-lg-3">

                </div>
                <!-- end sidebar -->

                <!-- content -->
                <div class="col-12 col-lg-8">
                    <div class="u-pBlogContent">
                        <div class="w-100">
                            <ol class="m-breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a href="https://www.tappx.com/" itemprop="item"><span itemprop="name">Home</span></a><meta itemprop="position" content="1" /></li><li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a href="https://www.tappx.com/blog" itemprop="item"><span itemprop="name">Blog</span></a><meta itemprop="position" content="2" /></li><li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a href="https://www.tappx.com/blog/understanding-view-through-conversion-and-viewability-in-user-acquisition-attribution-models" itemprop="item"><span itemprop="name">Understanding view-through conversion and viewability...</span></a><meta itemprop="position" content="3" /></li></ol>                        </div>
                        <h1 class="ht-three u-mB-0 u-medium">Understanding view-through conversion and viewability in user acquisition attribution models</h1>

                                                <div class="m-detailsBlog u-pB-m">
                            <picture class="m-detailsBlog__image a-avatar">
                                <img src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/08/joao-2-150x150.png" class="attachment-60x60 size-60x60 wp-post-image" alt="" decoding="async" />                            </picture>
                            <div class="m-detailsBlog__details">
                                <div class="total">
                                    <span class="ht-body-s u-medium d-block">
                                        Written by 
                                        <a href="https://www.techsoulogy.com/our-team/joao-victor-amadeu" title="Joao Victor Amadeu" class="u-type-color-base-text-principal">
                                            <u>Joao Victor Amadeu</u>
                                        </a>
                                        
                                                                                    <span class="u-regular u-type-color-base-text-principal"> - App Promotion Team Leader </span>
                                        
                                        

                                    </span>
                                </div>
                                <div class="total">
                                    <span class="ht-body-xs u-type-color-base-text-secondary d-block">
                                    <span class="last-updated">Created Aug 28, 2023</span>                                    <span class="u-pLR-xxs"> | </span>    
                                    3 min read                                     </span>
                                </div>
                            </div>
                        </div>
                                            </div>
                </div>
                <!-- end content -->

                <!-- aside no visible -->
                <div class="col-12 col-lg-1">

                </div>
                <!-- end aside no visible -->
                
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row d-flex u-pB-m">
            <!-- sidebar -->
            <div class="col-12 col-lg-3 ">
                
                
<div class="total m-listDestacados u-pB-m d-none d-lg-block">
    <div class="total u-pB-s">
        <span class="ht-body-xs u-type-color-base-text-secondary u-medium">Featured posts</span>
    </div>
    <div class="m-cardDestacado u-pB-s">
    <div class="m-cardDestacado__bxImg">
        <img src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/06/nadir-garouche_ua-and-aso-consultant_tappx-interview-150x150.png" class="attachment-90x90 size-90x90 wp-post-image" alt="" decoding="async" />    </div>
    <div class="m-cardDestacado__bxTxt">
        <p class="ht-body-xs u-medium">Nadir Garouche: &#8220;A successful game is one easy to understand and play, but hard to master&#8221;</p>
    </div>
    <a href="https://www.tappx.com/blog/nadir-garouche-ua-aso-consultant-gaming-trends-challenges" class="m-cardDestacado__link" title="Nadir Garouche: &#8220;A successful game is one easy to understand and play, but hard to master&#8221;"></a>
</div><hr class="a-lineDots u-pB-s"><div class="m-cardDestacado u-pB-s">
    <div class="m-cardDestacado__bxImg">
        <img src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/03/tips-becoming-performance-account-manager-150x150.png" class="attachment-90x90 size-90x90 wp-post-image" alt="" decoding="async" />    </div>
    <div class="m-cardDestacado__bxTxt">
        <p class="ht-body-xs u-medium">Steps to becoming a Performance Account Manager in AdTech</p>
    </div>
    <a href="https://www.tappx.com/blog/steps-becoming-performance-account-manager-adtech" class="m-cardDestacado__link" title="Steps to becoming a Performance Account Manager in AdTech"></a>
</div><hr class="a-lineDots u-pB-s"><div class="m-cardDestacado u-pB-s">
    <div class="m-cardDestacado__bxImg">
        <img src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2022/11/design-your-logo-increase-downloads-150x150.png" class="attachment-90x90 size-90x90 wp-post-image" alt="" decoding="async" />    </div>
    <div class="m-cardDestacado__bxTxt">
        <p class="ht-body-xs u-medium">Design your logo to increase app downloads</p>
    </div>
    <a href="https://www.tappx.com/blog/design-your-logo-to-increase-app-downloads" class="m-cardDestacado__link" title="Design your logo to increase app downloads"></a>
</div>    </div>
            </div>
            <!-- end sidebar -->
            <!-- content -->
            <div class="col-12 col-lg-8">
                <div class="total u-pB-m">
                    <img src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/08/view-through-and-banner-viewability-in-ua-attribution-models.png" class="total-image wp-post-image" alt="" decoding="async" fetchpriority="high" srcset="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/08/view-through-and-banner-viewability-in-ua-attribution-models.png 1920w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/08/view-through-and-banner-viewability-in-ua-attribution-models-250x137.png 250w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/08/view-through-and-banner-viewability-in-ua-attribution-models-700x384.png 700w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/08/view-through-and-banner-viewability-in-ua-attribution-models-768x422.png 768w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/08/view-through-and-banner-viewability-in-ua-attribution-models-1536x843.png 1536w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/08/view-through-and-banner-viewability-in-ua-attribution-models-120x66.png 120w " sizes="(max-width: 1920px) 100vw, 1920px" />                </div>
                <div class="u-pBlogContent u-pB-m">
                    
                                        <div class="m-genContent u-pTB-m js-get-content-TOC">
                        <p><strong>The fear that <a href="https://www.tappx.com/blog/unmasking-9-types-of-digital-advertising-fraud">fraud</a> has brought to the programmatic industry over the past years is undeniable, devastating paid campaigns and organic traffic, ending relationships between networks, agencies, and advertisers, increasing dependence on Mobile Measurement Partners, anti-fraud solutions</strong>, and a lot of money being flushed down the mobile landscape toilet.</p>
<p>It is also undeniable the current scenario looks brighter and cleaner. Fraudsters have lost a lot of space with the development of anti-fraud systems and the increase in advertisers’ knowledge of where to spread their investments on cleaner sources.</p>
<h2>Miss concepts about programmatic media buying</h2>
<p><strong>Even though the current situation is very positive and advertisers and suppliers are more aligned than ever, we nonetheless have a lot of miss concepts between the programmatic media buying ecosystem and some behaviors and consequences</strong> of the changes suffered in the industry lately, especially with the advent of IOS 14+, privacy, probabilistic, and SKAN attribution.</p>
<p>Buying on programmatic Demand Side Platforms, regardless of our choice, advertisers will face unusual situations in terms of data. Why are there so many impression-based installs, why are there low conversion rates from click to install, and what does it mean to have a high attendance rate? These riddles come along when we rely on the real-time bidding ecosystem when we decide to work with too many partners at once, the <a href="https://www.tappx.com/blog/how-creative-ads-boost-app-revenues">type of creatives we’re using</a>, how much we’re willing to spend, and the reliability of the incoming traffic from the exchanges. Having a more organized and solid media plan and not running too many tests at once, facilitates the analysis of these partners and the creatives used.</p>

<div class="total u-pB-m u-pT-xs">
    <div class="m-cardIntertext  mauto">
                <div class="__bxImage u-bg-color-superficie-brand-black">
            <img decoding="async" width="1920" height="1054" src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/06/best-ssp-for-publishers.png" class=" __img" alt="" srcset="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/06/best-ssp-for-publishers.png 1920w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/06/best-ssp-for-publishers-250x137.png 250w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/06/best-ssp-for-publishers-700x384.png 700w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/06/best-ssp-for-publishers-768x422.png 768w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/06/best-ssp-for-publishers-1536x843.png 1536w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/06/best-ssp-for-publishers-120x66.png 120w " sizes="(max-width: 1920px) 100vw, 1920px" />        </div>
                <div class="__bxTxt u-bg-color-superficie-brand-black u-pB-xs">
            <div class="__bx u-nmB-lastchild">
                                <p class="ht-body-xs u-type-color-base-text-white u-mTB-0 __subtit">Article</p>
                                                <p class="ht-body-s u-type-color-base-text-white u-medium __tit">How to choose the best SSP for publishers</p>
                            </div>
            <div class="__circle u-bg-color-superficie-brand u-type-color-base-text-white">
                <svg class="__icon">
                    <use xlink:href="#arrow-right" href="#arrow-right"></use>
                </svg>
            </div>
        </div>
        <a href="https://www.tappx.com/blog/best-ssp-for-publishers-requirements-supply-side-platform" title="How to choose the best SSP for publishers" class="__link" ></a>
    </div>
</div>


<h2>The last click is in the past</h2>
<p>The consequences of those changes on the mobile landscape, its fast development, and the enhancements of DSPs induced some experts and gurus of the industry to defend the idea that the last click idea is behind us, an old-fashioned term forever forgotten in the ’00s that the users, in reality, don’t click on ads, and, when they do, they do by mistake, giving us a fake sensation of sane click through and conversion rates. So, if those mind masters are right, why should we continue investing in ads? Well, that question is very easy to answer… Can you click on an ad on television? Or in an ad panel on the mall or at the bus stop in the city center? Definitely not, but they are there for a reason: to create engagement and awareness and give a reason for users to interact with that brand, product, or service. The same works for ads in the digital environment.<strong> The user might not click on your super cool banner, but he definitely thought it was cool and might do something about it later on… Maybe install it, play it, or even buy it.</strong></p>
<h2>How to evaluate view-through conversions</h2>
<p>Leaving behind last-click attribution and with the attribution models constantly changing alongside user behavior could lead to a misjudgment on the view-through conversions, which are those installs attributed on impression-based after the user sees an ad without clicking on it. This results in biases in our analysis because the advertiser can interpret that this user could be doing that organic install even though they were exposed to a small banner, triggering what I mentioned above regarding the assisted installs. You might be investing a lot in a DSP, but the final conversion is getting another media source, including a fraudulent one. Luckily, an extremely important metric can help us with this challenge, what would be the best way to work around this problem? It is simple, let&#8217;s go back to the TV commercial ads.</p>
<p><strong>You want to ensure that once your ad is displayed, the user is paying attention and seeing it, and it has visibility. The same goes for the ad on the mobile landscape, we want the ad to be visible and for the user to pay attention to the message. For that, we have a dimension called ad viewability</strong>, which includes the position of that banner on the page/screen, the duration the banner is displayed, and whether the banner is displayed partially or fully. All these things matter when it comes to the effectiveness of our media spend. If the user doesn’t click on that ad, we want the ad to be displayed decently at the very least, so the user interacts with it, reads the message, and gets curious about it. For that, the inventory must provide a great % of ad viewability among all the impressions counted.</p>
<p>The main outcome of the current scenario that advertisers and publishers are facing with the attributions in the app universe is that <strong>we need to make sure to evaluate and review both the banner’s quality and impression efficiency, guaranteeing that the ads are well-served and have a positive impact on users and encourage engagement.</strong></p>                    </div>

                                        <div class="total u-pTB-m">
                        <hr class="u-type-color-base-text-secondary">
                                <div class="total u-pTB-m">
            <div class="total u-pB-s">
                <div class="ht-body u-regular">Categories </div>
            </div> 
            <div class="total d-flex flex-row gap-2 flex-wrap">
            <a href='https://www.tappx.com/category/growth' title='Growth' class='a-btn a-btn-terciary --tag --btn-min'>Growth</a>            </div>
        </div>
        <hr class="u-type-color-base-text-secondary">
                            </div>
                    
                </div>
            </div>
            <!-- end content -->
            <div class="col-12 col-lg-1">
                
<ul class="reset-list gx-5 m-listSocialBlog u-type-color-base-text-principal">
    <li>
        <div class="total text-center u-pB-s">
            <span class="ht-body-xs u-type-color-base-text-secondary u-medium">Share</span>
        </div>
    </li>
    <li>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.tappx.com%2Fblog%2Funderstanding-view-through-conversion-and-viewability-in-user-acquisition-attribution-models" title="Share on Linkedin" target="_blank">
            <svg class="__icon"><use xlink:href="#linkedin" href="#linkedin"></use></svg>
        </a>
    </li>
    <li>
        <a href="https://twitter.com/intent/tweet?text=Understanding+view-through+conversion+and+viewability+in+user+acquisition+attribution+models&url=https%3A%2F%2Fwww.tappx.com%2Fblog%2Funderstanding-view-through-conversion-and-viewability-in-user-acquisition-attribution-models" target="_blank" rel="noreferrer noopener" title="Share on Twitter" target="_blank">
            <svg class="__icon"><use xlink:href="#twitter" href="#twitter"></use></svg>
        </a>
    </li>
    <li>
        <a href="mailto:?subject=Te comparto este enlace&body=Understanding+view-through+conversion+and+viewability+in+user+acquisition+attribution+models: https%3A%2F%2Fwww.tappx.com%2Fblog%2Funderstanding-view-through-conversion-and-viewability-in-user-acquisition-attribution-models" target="_blank" rel="noreferrer noopener" title="Share on mail" target="_blank">
            <svg class="__icon"><use xlink:href="#shareMail" href="#shareMail"></use></svg>
        </a>
    </li>
    <li>
        <a href="https://telegram.me/share/url?url=https%3A%2F%2Fwww.tappx.com%2Fblog%2Funderstanding-view-through-conversion-and-viewability-in-user-acquisition-attribution-models&text=Understanding+view-through+conversion+and+viewability+in+user+acquisition+attribution+models" title="Share on Telegram" target="_blank">
            <svg class="__icon">
                <use xlink:href="#telegram" href="#telegram"></use>
            </svg>
        </a>
    </li>
    <li>
        <a href="https://api.whatsapp.com/send?text=Understanding+view-through+conversion+and+viewability+in+user+acquisition+attribution+models%20https%3A%2F%2Fwww.tappx.com%2Fblog%2Funderstanding-view-through-conversion-and-viewability-in-user-acquisition-attribution-models" title="Share on Whatsapp" target="_blank">
            <svg class="__icon">
                <use xlink:href="#whatsapp" href="#whatsapp"></use>
            </svg>
        </a>
    </li>
    <li>
        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.tappx.com%2Fblog%2Funderstanding-view-through-conversion-and-viewability-in-user-acquisition-attribution-models" target="_blank" rel="noreferrer noopener" title="Share on Facebook">
            <svg class="__icon"><use xlink:href="#facebook" href="#facebook"></use></svg>
        </a>
    </li>
</ul>
            </div>
        </div>
    </div>
</div>
 <div class="total u-pTB-xxl m-sldContentBlog js-sldSingletBlog --dots-color-base-text-terciary u-bg-color-superficie-secondary-light" style="overflow: hidden;" data-cols="3"> 
	<div class="container">
		<div class="total">
			<div class="row d-flex justify-content-between align-items-center">
				<div class="col">
					<div class="a-tagDown">
						<p class="ht-body u-medium u-mB-0">Related posts</p>
						<svg width="176" class="u-type-color-base-tag" height="7" viewBox="0 0 176 7" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 6C34.7788 0.857673 96.0519 -0.856645 175 3.42895" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
						</svg>
					</div>
				</div>
                			</div>
		</div>
	</div>
	<div class="container">
		<div class="total __loop u-pTB-l u-mB-0">
                        <div class="__item u-pLR-s">
                <article class="m-cardPost col">
	<div class="m-cardPost__layout">
        		<div class="m-cardPost__bxImg">
            <a href="https://www.tappx.com/blog/unlocking-power-ad-performance-with-real-time-reporting-analytics" title="Unlocking the power of ad performance with real-time reporting and analytics">
			    <img src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/07/power-of-realtime-reporting-and-analytics-for-ad-performance.png" class="total-image wp-post-image" alt="" decoding="async" srcset="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/07/power-of-realtime-reporting-and-analytics-for-ad-performance.png 1920w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/07/power-of-realtime-reporting-and-analytics-for-ad-performance-250x137.png 250w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/07/power-of-realtime-reporting-and-analytics-for-ad-performance-700x384.png 700w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/07/power-of-realtime-reporting-and-analytics-for-ad-performance-768x422.png 768w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/07/power-of-realtime-reporting-and-analytics-for-ad-performance-1536x843.png 1536w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/07/power-of-realtime-reporting-and-analytics-for-ad-performance-120x66.png 120w " sizes="(max-width: 1920px) 100vw, 1920px" />            </a>
            		</div>
        		<div class="m-cardPost__bxCnt">
            <div class="m-cardPost__bxCnt__top">
                                <div class="m-cardPost__details">
                    <picture class="a-avatar --min">
                        <img src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/07/anastasios-stavrinos-150x150.png" class="attachment-60x60 size-60x60 wp-post-image" alt="" decoding="async" />                    </picture>
                    <span class="__title">
                        Anastasios Stavrinos - 5 Jul 2023                    </span>                       
                </div>
                                <div class="m-cardPost__title u-nmB-lastchild">
                    <p>
                        <a href="https://www.tappx.com/blog/unlocking-power-ad-performance-with-real-time-reporting-analytics" title="Unlocking the power of ad performance with real-time reporting and analytics">Unlocking the power of ad performance with real-time reporting and analytics</a>
                    </p>				
                </div>
            </div>
            <div class="m-cardPost__bxCnt__bottom">
                <div class="total m-cardPost__tagRead">
                    <div class="__col"><a href="https://www.tappx.com/category/growth" class="a-btn a-btn-selector --tag --btn-min"><span>Growth</span></a></div>                    <div class="__col __read">
                        <div class="a-readIcon">
                            <svg class="__icon"><use xlink:href="#clock" href="#clock"></use></svg>
                            <span>2 min read </span>
                        </div>
                    </div>
                </div>
                <div class="m-cardPost__bxButton">
                    <a href="https://www.tappx.com/blog/unlocking-power-ad-performance-with-real-time-reporting-analytics" title="Unlocking the power of ad performance with real-time reporting and analytics" class="a-linkIcon">
                        <span class="ht-body u-medium">Read More</span>
                        <svg class="__icon"><use xlink:href="#arrow-right" href="#arrow-right"></use></svg>
                    </a>
                </div>
            </div>
		</div>
	</div>
</article>                </div>
                        <div class="__item u-pLR-s">
                <article class="m-cardPost col">
	<div class="m-cardPost__layout">
        		<div class="m-cardPost__bxImg">
            <a href="https://www.tappx.com/blog/essential-books-mobile-growth-leaders" title="8 essential books for mobile growth leaders">
			    <img src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/04/8-books-for-mobile-growth-leaders.png" class="total-image wp-post-image" alt="" decoding="async" srcset="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/04/8-books-for-mobile-growth-leaders.png 1920w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/04/8-books-for-mobile-growth-leaders-250x137.png 250w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/04/8-books-for-mobile-growth-leaders-700x384.png 700w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/04/8-books-for-mobile-growth-leaders-768x422.png 768w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/04/8-books-for-mobile-growth-leaders-1536x843.png 1536w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/04/8-books-for-mobile-growth-leaders-120x66.png 120w " sizes="(max-width: 1920px) 100vw, 1920px" />            </a>
            		</div>
        		<div class="m-cardPost__bxCnt">
            <div class="m-cardPost__bxCnt__top">
                                <div class="m-cardPost__details">
                    <picture class="a-avatar --min">
                        <img src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/07/raquel-rios-150x150.png" class="attachment-60x60 size-60x60 wp-post-image" alt="" decoding="async" />                    </picture>
                    <span class="__title">
                        Raquel Ríos Dafonte - 21 Apr 2023                    </span>                       
                </div>
                                <div class="m-cardPost__title u-nmB-lastchild">
                    <p>
                        <a href="https://www.tappx.com/blog/essential-books-mobile-growth-leaders" title="8 essential books for mobile growth leaders">8 essential books for mobile growth leaders</a>
                    </p>				
                </div>
            </div>
            <div class="m-cardPost__bxCnt__bottom">
                <div class="total m-cardPost__tagRead">
                    <div class="__col"><a href="https://www.tappx.com/category/growth" class="a-btn a-btn-selector --tag --btn-min"><span>Growth</span></a></div>                    <div class="__col __read">
                        <div class="a-readIcon">
                            <svg class="__icon"><use xlink:href="#clock" href="#clock"></use></svg>
                            <span>9 min read </span>
                        </div>
                    </div>
                </div>
                <div class="m-cardPost__bxButton">
                    <a href="https://www.tappx.com/blog/essential-books-mobile-growth-leaders" title="8 essential books for mobile growth leaders" class="a-linkIcon">
                        <span class="ht-body u-medium">Read More</span>
                        <svg class="__icon"><use xlink:href="#arrow-right" href="#arrow-right"></use></svg>
                    </a>
                </div>
            </div>
		</div>
	</div>
</article>                </div>
                        <div class="__item u-pLR-s">
                <article class="m-cardPost col">
	<div class="m-cardPost__layout">
        		<div class="m-cardPost__bxImg">
            <a href="https://www.tappx.com/blog/essential-books-mobile-developers-should-read" title="Essential books that all mobile developers should read">
			    <img src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/04/books-for-mobile-developers.png" class="total-image wp-post-image" alt="" decoding="async" srcset="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/04/books-for-mobile-developers.png 1909w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/04/books-for-mobile-developers-250x137.png 250w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/04/books-for-mobile-developers-700x384.png 700w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/04/books-for-mobile-developers-768x421.png 768w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/04/books-for-mobile-developers-1536x842.png 1536w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/04/books-for-mobile-developers-120x66.png 120w " sizes="(max-width: 1909px) 100vw, 1909px" />            </a>
            		</div>
        		<div class="m-cardPost__bxCnt">
            <div class="m-cardPost__bxCnt__top">
                                <div class="m-cardPost__details">
                    <picture class="a-avatar --min">
                        <img src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/07/raquel-rios-150x150.png" class="attachment-60x60 size-60x60 wp-post-image" alt="" decoding="async" />                    </picture>
                    <span class="__title">
                        Raquel Ríos Dafonte - 21 Apr 2023                    </span>                       
                </div>
                                <div class="m-cardPost__title u-nmB-lastchild">
                    <p>
                        <a href="https://www.tappx.com/blog/essential-books-mobile-developers-should-read" title="Essential books that all mobile developers should read">Essential books that all mobile developers should read</a>
                    </p>				
                </div>
            </div>
            <div class="m-cardPost__bxCnt__bottom">
                <div class="total m-cardPost__tagRead">
                    <div class="__col"><a href="https://www.tappx.com/category/growth" class="a-btn a-btn-selector --tag --btn-min"><span>Growth</span></a></div>                    <div class="__col __read">
                        <div class="a-readIcon">
                            <svg class="__icon"><use xlink:href="#clock" href="#clock"></use></svg>
                            <span>10 min read </span>
                        </div>
                    </div>
                </div>
                <div class="m-cardPost__bxButton">
                    <a href="https://www.tappx.com/blog/essential-books-mobile-developers-should-read" title="Essential books that all mobile developers should read" class="a-linkIcon">
                        <span class="ht-body u-medium">Read More</span>
                        <svg class="__icon"><use xlink:href="#arrow-right" href="#arrow-right"></use></svg>
                    </a>
                </div>
            </div>
		</div>
	</div>
</article>                </div>
                        <div class="__item u-pLR-s">
                <article class="m-cardPost col">
	<div class="m-cardPost__layout">
        		<div class="m-cardPost__bxImg">
            <a href="https://www.tappx.com/blog/zero-waste-app-monetization-strategy-tappx-profit-booster-sandwich" title="A zero waste app monetization strategy to boost your profit">
			    <img src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/05/the-profit-booster-sandwich_zero-waste-app-monetization-strategy.png" class="total-image wp-post-image" alt="" decoding="async" srcset="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/05/the-profit-booster-sandwich_zero-waste-app-monetization-strategy.png 1920w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/05/the-profit-booster-sandwich_zero-waste-app-monetization-strategy-250x137.png 250w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/05/the-profit-booster-sandwich_zero-waste-app-monetization-strategy-700x384.png 700w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/05/the-profit-booster-sandwich_zero-waste-app-monetization-strategy-768x422.png 768w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/05/the-profit-booster-sandwich_zero-waste-app-monetization-strategy-1536x843.png 1536w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/05/the-profit-booster-sandwich_zero-waste-app-monetization-strategy-120x66.png 120w " sizes="(max-width: 1920px) 100vw, 1920px" />            </a>
            		</div>
        		<div class="m-cardPost__bxCnt">
            <div class="m-cardPost__bxCnt__top">
                                <div class="m-cardPost__details">
                    <picture class="a-avatar --min">
                        <img src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/07/raquel-rios-150x150.png" class="attachment-60x60 size-60x60 wp-post-image" alt="" decoding="async" />                    </picture>
                    <span class="__title">
                        Raquel Ríos Dafonte - 24 May 2023                    </span>                       
                </div>
                                <div class="m-cardPost__title u-nmB-lastchild">
                    <p>
                        <a href="https://www.tappx.com/blog/zero-waste-app-monetization-strategy-tappx-profit-booster-sandwich" title="A zero waste app monetization strategy to boost your profit">A zero waste app monetization strategy to boost your profit</a>
                    </p>				
                </div>
            </div>
            <div class="m-cardPost__bxCnt__bottom">
                <div class="total m-cardPost__tagRead">
                    <div class="__col"><a href="https://www.tappx.com/category/growth" class="a-btn a-btn-selector --tag --btn-min"><span>Growth</span></a></div>                    <div class="__col __read">
                        <div class="a-readIcon">
                            <svg class="__icon"><use xlink:href="#clock" href="#clock"></use></svg>
                            <span>3 min read </span>
                        </div>
                    </div>
                </div>
                <div class="m-cardPost__bxButton">
                    <a href="https://www.tappx.com/blog/zero-waste-app-monetization-strategy-tappx-profit-booster-sandwich" title="A zero waste app monetization strategy to boost your profit" class="a-linkIcon">
                        <span class="ht-body u-medium">Read More</span>
                        <svg class="__icon"><use xlink:href="#arrow-right" href="#arrow-right"></use></svg>
                    </a>
                </div>
            </div>
		</div>
	</div>
</article>                </div>
                        <div class="__item u-pLR-s">
                <article class="m-cardPost col">
	<div class="m-cardPost__layout">
        		<div class="m-cardPost__bxImg">
            <a href="https://www.tappx.com/blog/beyond-installs-how-generate-revenue-with-in-app-purchases" title="Beyond installs: How to generate revenue with in-app purchases">
			    <img src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/07/how-generate-revenue-with-in-app-purchases.png" class="total-image wp-post-image" alt="" decoding="async" srcset="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/07/how-generate-revenue-with-in-app-purchases.png 1920w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/07/how-generate-revenue-with-in-app-purchases-250x137.png 250w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/07/how-generate-revenue-with-in-app-purchases-700x384.png 700w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/07/how-generate-revenue-with-in-app-purchases-768x422.png 768w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/07/how-generate-revenue-with-in-app-purchases-1536x843.png 1536w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/07/how-generate-revenue-with-in-app-purchases-120x66.png 120w " sizes="(max-width: 1920px) 100vw, 1920px" />            </a>
            		</div>
        		<div class="m-cardPost__bxCnt">
            <div class="m-cardPost__bxCnt__top">
                                <div class="m-cardPost__details">
                    <picture class="a-avatar --min">
                        <img src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/07/raquel-rios-150x150.png" class="attachment-60x60 size-60x60 wp-post-image" alt="" decoding="async" />                    </picture>
                    <span class="__title">
                        Raquel Ríos Dafonte - 28 Jul 2023                    </span>                       
                </div>
                                <div class="m-cardPost__title u-nmB-lastchild">
                    <p>
                        <a href="https://www.tappx.com/blog/beyond-installs-how-generate-revenue-with-in-app-purchases" title="Beyond installs: How to generate revenue with in-app purchases">Beyond installs: How to generate revenue with in-app purchases</a>
                    </p>				
                </div>
            </div>
            <div class="m-cardPost__bxCnt__bottom">
                <div class="total m-cardPost__tagRead">
                    <div class="__col"><a href="https://www.tappx.com/category/growth" class="a-btn a-btn-selector --tag --btn-min"><span>Growth</span></a></div>                    <div class="__col __read">
                        <div class="a-readIcon">
                            <svg class="__icon"><use xlink:href="#clock" href="#clock"></use></svg>
                            <span>5 min read </span>
                        </div>
                    </div>
                </div>
                <div class="m-cardPost__bxButton">
                    <a href="https://www.tappx.com/blog/beyond-installs-how-generate-revenue-with-in-app-purchases" title="Beyond installs: How to generate revenue with in-app purchases" class="a-linkIcon">
                        <span class="ht-body u-medium">Read More</span>
                        <svg class="__icon"><use xlink:href="#arrow-right" href="#arrow-right"></use></svg>
                    </a>
                </div>
            </div>
		</div>
	</div>
</article>                </div>
                        <div class="__item u-pLR-s">
                <article class="m-cardPost col">
	<div class="m-cardPost__layout">
        		<div class="m-cardPost__bxImg">
            <a href="https://www.tappx.com/blog/native-ads-everything-you-need-know" title="Everything you need to know about Native Ads">
			    <img src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/05/everything-about-native-ads.png" class="total-image wp-post-image" alt="" decoding="async" srcset="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/05/everything-about-native-ads.png 1920w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/05/everything-about-native-ads-250x137.png 250w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/05/everything-about-native-ads-700x384.png 700w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/05/everything-about-native-ads-768x422.png 768w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/05/everything-about-native-ads-1536x843.png 1536w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/05/everything-about-native-ads-120x66.png 120w " sizes="(max-width: 1920px) 100vw, 1920px" />            </a>
            		</div>
        		<div class="m-cardPost__bxCnt">
            <div class="m-cardPost__bxCnt__top">
                                <div class="m-cardPost__details">
                    <picture class="a-avatar --min">
                        <img src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/07/raquel-rios-150x150.png" class="attachment-60x60 size-60x60 wp-post-image" alt="" decoding="async" />                    </picture>
                    <span class="__title">
                        Raquel Ríos Dafonte - 30 May 2023                    </span>                       
                </div>
                                <div class="m-cardPost__title u-nmB-lastchild">
                    <p>
                        <a href="https://www.tappx.com/blog/native-ads-everything-you-need-know" title="Everything you need to know about Native Ads">Everything you need to know about Native Ads</a>
                    </p>				
                </div>
            </div>
            <div class="m-cardPost__bxCnt__bottom">
                <div class="total m-cardPost__tagRead">
                    <div class="__col"><a href="https://www.tappx.com/category/growth" class="a-btn a-btn-selector --tag --btn-min"><span>Growth</span></a></div>                    <div class="__col __read">
                        <div class="a-readIcon">
                            <svg class="__icon"><use xlink:href="#clock" href="#clock"></use></svg>
                            <span>6 min read </span>
                        </div>
                    </div>
                </div>
                <div class="m-cardPost__bxButton">
                    <a href="https://www.tappx.com/blog/native-ads-everything-you-need-know" title="Everything you need to know about Native Ads" class="a-linkIcon">
                        <span class="ht-body u-medium">Read More</span>
                        <svg class="__icon"><use xlink:href="#arrow-right" href="#arrow-right"></use></svg>
                    </a>
                </div>
            </div>
		</div>
	</div>
</article>                </div>
                        <div class="__item u-pLR-s">
                <article class="m-cardPost col">
	<div class="m-cardPost__layout">
        		<div class="m-cardPost__bxImg">
            <a href="https://www.tappx.com/blog/how-to-convert-players-into-payers" title="How to convert players into payers">
			    <img src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/09/how-to-convert-players-into-payers-videogame-user-acquisition.png" class="total-image wp-post-image" alt="" decoding="async" srcset="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/09/how-to-convert-players-into-payers-videogame-user-acquisition.png 1920w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/09/how-to-convert-players-into-payers-videogame-user-acquisition-250x137.png 250w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/09/how-to-convert-players-into-payers-videogame-user-acquisition-700x384.png 700w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/09/how-to-convert-players-into-payers-videogame-user-acquisition-768x422.png 768w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/09/how-to-convert-players-into-payers-videogame-user-acquisition-1536x843.png 1536w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/09/how-to-convert-players-into-payers-videogame-user-acquisition-120x66.png 120w " sizes="(max-width: 1920px) 100vw, 1920px" />            </a>
            		</div>
        		<div class="m-cardPost__bxCnt">
            <div class="m-cardPost__bxCnt__top">
                                <div class="m-cardPost__details">
                    <picture class="a-avatar --min">
                        <img src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/07/raquel-rios-150x150.png" class="attachment-60x60 size-60x60 wp-post-image" alt="" decoding="async" />                    </picture>
                    <span class="__title">
                        Raquel Ríos Dafonte - 28 Sep 2023                    </span>                       
                </div>
                                <div class="m-cardPost__title u-nmB-lastchild">
                    <p>
                        <a href="https://www.tappx.com/blog/how-to-convert-players-into-payers" title="How to convert players into payers">How to convert players into payers</a>
                    </p>				
                </div>
            </div>
            <div class="m-cardPost__bxCnt__bottom">
                <div class="total m-cardPost__tagRead">
                    <div class="__col"><a href="https://www.tappx.com/category/growth" class="a-btn a-btn-selector --tag --btn-min"><span>Growth</span></a></div>                    <div class="__col __read">
                        <div class="a-readIcon">
                            <svg class="__icon"><use xlink:href="#clock" href="#clock"></use></svg>
                            <span>3 min read </span>
                        </div>
                    </div>
                </div>
                <div class="m-cardPost__bxButton">
                    <a href="https://www.tappx.com/blog/how-to-convert-players-into-payers" title="How to convert players into payers" class="a-linkIcon">
                        <span class="ht-body u-medium">Read More</span>
                        <svg class="__icon"><use xlink:href="#arrow-right" href="#arrow-right"></use></svg>
                    </a>
                </div>
            </div>
		</div>
	</div>
</article>                </div>
                        <div class="__item u-pLR-s">
                <article class="m-cardPost col">
	<div class="m-cardPost__layout">
        		<div class="m-cardPost__bxImg">
            <a href="https://www.tappx.com/blog/how-effectively-manage-publisher-accounts-best-practices" title="How to effectively manage Publisher Accounts: Best practices">
			    <img src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/06/best-practices-manage-publishers-programmatic-accounts.png" class="total-image wp-post-image" alt="" decoding="async" srcset="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/06/best-practices-manage-publishers-programmatic-accounts.png 1920w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/06/best-practices-manage-publishers-programmatic-accounts-250x137.png 250w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/06/best-practices-manage-publishers-programmatic-accounts-700x384.png 700w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/06/best-practices-manage-publishers-programmatic-accounts-768x422.png 768w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/06/best-practices-manage-publishers-programmatic-accounts-1536x843.png 1536w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/06/best-practices-manage-publishers-programmatic-accounts-120x66.png 120w " sizes="(max-width: 1920px) 100vw, 1920px" />            </a>
            		</div>
        		<div class="m-cardPost__bxCnt">
            <div class="m-cardPost__bxCnt__top">
                                <div class="m-cardPost__details">
                    <picture class="a-avatar --min">
                        <img src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/07/judithfabregasok-150x150.png" class="attachment-60x60 size-60x60 wp-post-image" alt="" decoding="async" />                    </picture>
                    <span class="__title">
                        Judith Fàbregas - 12 Jun 2023                    </span>                       
                </div>
                                <div class="m-cardPost__title u-nmB-lastchild">
                    <p>
                        <a href="https://www.tappx.com/blog/how-effectively-manage-publisher-accounts-best-practices" title="How to effectively manage Publisher Accounts: Best practices">How to effectively manage Publisher Accounts: Best practices</a>
                    </p>				
                </div>
            </div>
            <div class="m-cardPost__bxCnt__bottom">
                <div class="total m-cardPost__tagRead">
                    <div class="__col"><a href="https://www.tappx.com/category/growth" class="a-btn a-btn-selector --tag --btn-min"><span>Growth</span></a></div>                    <div class="__col __read">
                        <div class="a-readIcon">
                            <svg class="__icon"><use xlink:href="#clock" href="#clock"></use></svg>
                            <span>2 min read </span>
                        </div>
                    </div>
                </div>
                <div class="m-cardPost__bxButton">
                    <a href="https://www.tappx.com/blog/how-effectively-manage-publisher-accounts-best-practices" title="How to effectively manage Publisher Accounts: Best practices" class="a-linkIcon">
                        <span class="ht-body u-medium">Read More</span>
                        <svg class="__icon"><use xlink:href="#arrow-right" href="#arrow-right"></use></svg>
                    </a>
                </div>
            </div>
		</div>
	</div>
</article>                </div>
            		</div>	
	</div>
</div>

<div class="o-stickyNewsForm js-stickyNewsForm" style="opacity: 0;">
    <button id="closeCookieNews" class="a-btn a-btn-primary --btn-min __closeModal" aria-label="Close Modal"> 
        <svg class="__icon"> 
            <use xlink:href="#x" href="#x"></use> 
        </svg> 	
    </button>
	<div class="total u-p-s u-bg-color-superficie-secondary-light o-stickyNewsForm__bxCnt">
        		<div class="total u-pB-s">
            <p><span class="u-medium ht-three">Subscribe to our newsletter</span></p>
        </div>
        				<div class="__bxForm mauto m-formNewsActive --single">
			
<div class="wpcf7 no-js" id="wpcf7-f1477-o1" lang="en-US" dir="ltr">
<div class="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
<form action="/blog/understanding-view-through-conversion-and-viewability-in-user-acquisition-attribution-models#wpcf7-f1477-o1" method="post" class="wpcf7-form init" aria-label="Contact form" novalidate="novalidate" data-status="init">
<div style="display: none;">
<input type="hidden" name="_wpcf7" value="1477" />
<input type="hidden" name="_wpcf7_version" value="5.8.6" />
<input type="hidden" name="_wpcf7_locale" value="en_US" />
<input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f1477-o1" />
<input type="hidden" name="_wpcf7_container_post" value="0" />
<input type="hidden" name="_wpcf7_posted_data_hash" value="" />
</div>
<div class="row">
    <div class="col-12">
        <label for="email" style="text-align: left;">Join our newsletter</label>
        <span class="wpcf7-form-control-wrap" data-name="your-email"><input size="40" class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" id="email" aria-required="true" aria-invalid="false" placeholder="Your email" value="" type="email" name="your-email" /></span>
    </div>
    <div class="col-12">
        <div class="__input __acceptance u-mB-s">
            <span class="wpcf7-form-control-wrap" data-name="acceptance-473"><span class="wpcf7-form-control wpcf7-acceptance"><span class="wpcf7-list-item"><label><input type="checkbox" name="acceptance-473" value="1" aria-invalid="false" /><span class="wpcf7-list-item-label">I have read and agree to the <a href="/legal/privacy-policy" target="_blank"><u>privacy policy</u></a>.</span></label></span></span></span>
        </div>
    </div>
    <div class="col-12">
        <div class="total u-mB-s">
            <button type="submit" class="a-btn a-btn-primary --btn-total wpcf7-form-control has-spinner wpcf7-submit">Subscribe</button>
        </div>
    </div>

    <!-- 
    <div class="col-12">
        <div class="__input u-mB-xs">
            <p class="ht-body-xs">By clicking the "Subscribe" button you agree to our Privacy Policy. <u><a class="btn_round uppercase" data-target="modalRGPD" data-toggle="js-modal">Know more</a></u></p>
        </div>
    </div>
    -->
</div><p style="display: none !important;" class="akismet-fields-container" data-prefix="_wpcf7_ak_"><label>&#916;<textarea name="_wpcf7_ak_hp_textarea" cols="45" rows="8" maxlength="100"></textarea></label><input type="hidden" id="ak_js_1" name="_wpcf7_ak_js" value="27"/><script>document.getElementById( "ak_js_1" ).setAttribute( "value", ( new Date() ).getTime() );</script></p><div class="wpcf7-response-output" aria-hidden="true"></div>
</form>
</div>
		</div>
			</div> 
</div>			            <footer class="o-footer u-pT-xxl u-pB-l u-bg-color-superficie-brand-black u-type-color-base-text-white" role="contentinfo">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-3">
                                                        <div class="w-100 u-pB-s u-mB-s">
                                <a href="https://www.tappx.com" title="Tappx">
                                    <img src="https://www.tappx.com/wp-content/uploads/2022/10/tappx-white.svg" alt="Tappx">
                                </a>
                            </div>
                                                        <div class="w-100 ht-body-s u-pB-l">
                                <p>Tappx is an AdTech firm that offers innovative app monetization, user acquisition, and advertising solutions for mobile publishers, app developers, and advertisers.</p>
                            </div>
                                                        <div class="w-100 ht-body-s u-pB-l">
                                <ul class="reset-list d-flex flex-row gy-2">
                                                                        <li class="u-type-color-base-text-white u-mB-0 u-mR-s">
                                        <a href="https://www.instagram.com/tappxlife/" title="Instagram" target="_blank" rel="noopener noreferrer">
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 6C1.75 3.65279 3.65279 1.75 6 1.75H16C18.3472 1.75 20.25 3.65279 20.25 6V16C20.25 18.3472 18.3472 20.25 16 20.25H6C3.65279 20.25 1.75 18.3472 1.75 16V6ZM6 0.25C2.82436 0.25 0.25 2.82436 0.25 6V16C0.25 19.1756 2.82436 21.75 6 21.75H16C19.1756 21.75 21.75 19.1756 21.75 16V6C21.75 2.82436 19.1756 0.25 16 0.25H6ZM15.75 5.5C15.75 5.08579 16.0858 4.75 16.5 4.75H16.51C16.9242 4.75 17.26 5.08579 17.26 5.5C17.26 5.91421 16.9242 6.25 16.51 6.25H16.5C16.0858 6.25 15.75 5.91421 15.75 5.5ZM11.5198 7.74219C10.8435 7.64192 10.1529 7.75742 9.54615 8.07226C8.93936 8.38711 8.44731 8.88526 8.13996 9.49587C7.83262 10.1065 7.72565 10.7985 7.83425 11.4734C7.94285 12.1483 8.26151 12.7718 8.74489 13.2551C9.22827 13.7385 9.85177 14.0572 10.5267 14.1658C11.2016 14.2744 11.8936 14.1674 12.5042 13.8601C13.1148 13.5527 13.613 13.0607 13.9279 12.4539C14.2427 11.8471 14.3582 11.1565 14.2579 10.4803C14.1557 9.79057 13.8342 9.152 13.3412 8.65894C12.8481 8.16588 12.2095 7.84447 11.5198 7.74219ZM8.8553 6.74082C9.74213 6.28067 10.7515 6.11186 11.7398 6.25841C12.7479 6.4079 13.6812 6.87765 14.4018 7.59828C15.1225 8.3189 15.5922 9.25219 15.7417 10.2603C15.8883 11.2486 15.7195 12.2579 15.2593 13.1448C14.7991 14.0316 14.071 14.7507 13.1786 15.1999C12.2862 15.6491 11.2748 15.8054 10.2884 15.6467C9.30197 15.488 8.39072 15.0223 7.68424 14.3158C6.97776 13.6093 6.51203 12.6981 6.3533 11.7117C6.19457 10.7253 6.35092 9.71391 6.80012 8.82148C7.24931 7.92905 7.96847 7.20098 8.8553 6.74082Z" fill="currentColor"/>
</svg>
                                        </a>
                                    </li>
                                                                        <li class="u-type-color-base-text-white u-mB-0 u-mR-s">
                                        <a href="https://www.linkedin.com/company/tappx/" title="Linkedin" target="_blank" rel="noopener noreferrer">
                                            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.75C1.5 2.05964 2.05964 1.5 2.75 1.5C3.44036 1.5 4 2.05964 4 2.75C4 3.44036 3.44036 4 2.75 4C2.05964 4 1.5 3.44036 1.5 2.75ZM2.75 0C1.23122 0 0 1.23122 0 2.75C0 4.26878 1.23122 5.5 2.75 5.5C4.26878 5.5 5.5 4.26878 5.5 2.75C5.5 1.23122 4.26878 0 2.75 0ZM14.75 7.5C13.3576 7.5 12.0223 8.05312 11.0377 9.03769C10.0531 10.0223 9.5 11.3576 9.5 12.75V19H12V12.75C12 12.0207 12.2897 11.3212 12.8055 10.8055C13.3212 10.2897 14.0207 10 14.75 10C15.4793 10 16.1788 10.2897 16.6945 10.8055C17.2103 11.3212 17.5 12.0207 17.5 12.75V19H20V12.75C20 11.3576 19.4469 10.0223 18.4623 9.03769C17.4777 8.05312 16.1424 7.5 14.75 7.5ZM14.75 6C12.9598 6 11.2429 6.71116 9.97703 7.97703C8.71116 9.2429 8 10.9598 8 12.75V19.75C8 20.1642 8.33579 20.5 8.75 20.5H12.75C13.1642 20.5 13.5 20.1642 13.5 19.75V12.75C13.5 12.4185 13.6317 12.1005 13.8661 11.8661C14.1005 11.6317 14.4185 11.5 14.75 11.5C15.0815 11.5 15.3995 11.6317 15.6339 11.8661C15.8683 12.1005 16 12.4185 16 12.75V19.75C16 20.1642 16.3358 20.5 16.75 20.5H20.75C21.1642 20.5 21.5 20.1642 21.5 19.75V12.75C21.5 10.9598 20.7888 9.2429 19.523 7.97703C18.2571 6.71116 16.5402 6 14.75 6ZM0 7.75C0 7.33579 0.335786 7 0.75 7H4.75C5.16421 7 5.5 7.33579 5.5 7.75V19.75C5.5 20.1642 5.16421 20.5 4.75 20.5H0.75C0.335786 20.5 0 20.1642 0 19.75V7.75ZM1.5 8.5V19H4V8.5H1.5Z" fill="currentColor"/>
</svg>
                                        </a>
                                    </li>
                                                                        <li class="u-type-color-base-text-white u-mB-0 u-mR-s">
                                        <a href="https://twitter.com/tappx" title="Twitter" target="_blank" rel="noopener noreferrer">
                                            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3647 0.343813C15.3657 -0.0382312 16.4598 -0.103647 17.4992 0.156412C18.3738 0.375256 19.1741 0.815705 19.8248 1.43157C20.7105 1.1211 21.5496 0.689022 22.3178 0.147183L22.7501 0.760056L23.4788 0.937519C23.1373 2.33957 22.4439 3.62899 21.4669 4.68514C21.4883 4.8751 21.4994 5.0662 21.5001 5.25758L21.5001 5.26006C21.5001 11.2725 18.6099 15.6601 14.4775 17.8596C10.3633 20.0494 5.09323 20.0309 0.385845 17.4157C0.0822369 17.247 -0.0658475 16.8919 0.0279389 16.5575C0.121725 16.2231 0.432845 15.9968 0.779886 16.0106C2.66412 16.0856 4.52763 15.6698 6.19152 14.8145C4.50912 13.8582 3.33252 12.6966 2.53834 11.4426C1.56296 9.90252 1.19287 8.26848 1.12585 6.79411C1.05898 5.32302 1.29275 3.99548 1.53959 3.04102C1.66346 2.56204 1.79187 2.17229 1.89046 1.89959C1.9398 1.76311 1.9818 1.6556 2.01223 1.5805C2.02744 1.54295 2.03977 1.51346 2.0487 1.49248L2.05946 1.46744L2.0628 1.45979L2.0629 1.45956C2.06804 1.44783 2.07349 1.43618 2.07926 1.42465L2.75008 1.76006L3.36384 1.32902C4.30308 2.66644 5.55849 3.75082 7.01828 4.48558C8.26004 5.11059 9.61688 5.46613 11.0001 5.53231V5.29486C10.9868 4.22539 11.3018 3.17751 11.9025 2.29253C12.5043 1.4061 13.3638 0.725857 14.3647 0.343813ZM3.02268 3.29963C3.01238 3.33789 3.00208 3.37688 2.99181 3.41659C2.76991 4.27463 2.56617 5.44709 2.6243 6.726C2.68229 8.00163 2.9997 9.36759 3.80557 10.64C4.60842 11.9077 5.92461 13.128 8.05468 14.0747C8.30353 14.1853 8.47288 14.4221 8.4971 14.6933C8.52133 14.9646 8.39662 15.2277 8.1713 15.3806C6.82559 16.2941 5.32187 16.9279 3.74882 17.2569C7.26791 18.404 10.8692 18.0809 13.7727 16.5355C17.3899 14.6102 19.9996 10.7482 20.0001 5.26141C19.9992 5.02967 19.9769 4.7985 19.9334 4.57087C19.8864 4.32497 19.9652 4.07184 20.1434 3.89605C20.5752 3.47028 20.9474 2.99212 21.2526 2.47481C20.79 2.68319 20.3136 2.86147 19.8263 3.0082C19.5439 3.09326 19.2378 3.00483 19.0442 2.78223C18.5427 2.20568 17.8763 1.79702 17.1351 1.61155C16.3938 1.42608 15.6135 1.47273 14.8996 1.74521C14.1857 2.01768 13.5728 2.50282 13.1436 3.13502C12.7144 3.76721 12.4898 4.51596 12.5 5.28L12.5001 5.29006H12.5001V6.29006C12.5001 6.6967 12.176 7.02926 11.7695 7.0398C9.88851 7.08858 8.02463 6.6714 6.34389 5.82543C5.08738 5.19298 3.96238 4.33556 3.02268 3.29963Z" fill="currentColor"/>
</svg>
                                        </a>
                                    </li>
                                                                    </ul>
                            </div>
                            

                                                        <div class="w-100 ht-body-s u-pB-xl">
                                                                <div class="w-100 u-pB-xs u-nmB-lastchild">
                                    <p>A mobile AdTech firm with</p>
                                </div>
                                                                <div class="a-logoTechsoulogyFooter">
                                    <img src="https://www.tappx.com/wp-content/uploads/2022/10/techsoulogy.svg" class="responsive-image">
                                                                        <a href="https://www.techsoulogy.com/" title="Techsoulogy" target="_blank"></a>
                                                                    </div>
                                                            </div>
                            


                                                        <div class="w-100 ht-body-s u-type-color-base-text-white text-center u-md-pB-m">
                                
<div class="wpcf7 no-js" id="wpcf7-f1477-o2" lang="en-US" dir="ltr">
<div class="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
<form action="/blog/understanding-view-through-conversion-and-viewability-in-user-acquisition-attribution-models#wpcf7-f1477-o2" method="post" class="wpcf7-form init" aria-label="Contact form" novalidate="novalidate" data-status="init">
<div style="display: none;">
<input type="hidden" name="_wpcf7" value="1477" />
<input type="hidden" name="_wpcf7_version" value="5.8.6" />
<input type="hidden" name="_wpcf7_locale" value="en_US" />
<input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f1477-o2" />
<input type="hidden" name="_wpcf7_container_post" value="0" />
<input type="hidden" name="_wpcf7_posted_data_hash" value="" />
</div>
<div class="row">
    <div class="col-12">
        <label for="email" style="text-align: left;">Join our newsletter</label>
        <span class="wpcf7-form-control-wrap" data-name="your-email"><input size="40" class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Your email" value="" type="email" name="your-email" /></span>
    </div>
    <div class="col-12">
        <div class="__input __acceptance u-mB-s">
            <span class="wpcf7-form-control-wrap" data-name="acceptance-473"><span class="wpcf7-form-control wpcf7-acceptance"><span class="wpcf7-list-item"><label><input type="checkbox" name="acceptance-473" value="1" aria-invalid="false" /><span class="wpcf7-list-item-label">I have read and agree to the <a href="/legal/privacy-policy" target="_blank"><u>privacy policy</u></a>.</span></label></span></span></span>
        </div>
    </div>
    <div class="col-12">
        <div class="total u-mB-s">
            <button type="submit" class="a-btn a-btn-primary --btn-total wpcf7-form-control has-spinner wpcf7-submit">Subscribe</button>
        </div>
    </div>

    <!-- 
    <div class="col-12">
        <div class="__input u-mB-xs">
            <p class="ht-body-xs">By clicking the "Subscribe" button you agree to our Privacy Policy. <u><a class="btn_round uppercase" data-target="modalRGPD" data-toggle="js-modal">Know more</a></u></p>
        </div>
    </div>
    -->
</div><p style="display: none !important;" class="akismet-fields-container" data-prefix="_wpcf7_ak_"><label>&#916;<textarea name="_wpcf7_ak_hp_textarea" cols="45" rows="8" maxlength="100"></textarea></label><input type="hidden" id="ak_js_2" name="_wpcf7_ak_js" value="202"/><script>document.getElementById( "ak_js_2" ).setAttribute( "value", ( new Date() ).getTime() );</script></p><div class="wpcf7-response-output" aria-hidden="true"></div>
</form>
</div>
                            </div>
                            

                        </div>

                        <div class="col-12 col-lg-8 offset-lg-1">

                                                        <div class="row u-pB-l">                                
                                                                <div class="col-6 col-lg-3 u-type-color-base-text-white">

                                                                        <ul class="reset-list u-type-color-white m-list --v --footer u-md-pB-m">
                                                                                <li class="u-mB-0 u-pB-s"><p class="u-font-family-secondary u-medium">Profiles</p></li>
                                                                                                                                <li class="u-mB-0 u-pB-s u-type-color-white">
                                                <a href="/developers" title="Developers">Developers</a>                                            </li>
                                                                                                                                                                            <li class="u-mB-0 u-pB-s u-type-color-white">
                                                <a href="/publishers" title="Publishers">Publishers</a>                                            </li>
                                                                                                                                                                            <li class="u-mB-0 u-pB-s u-type-color-white">
                                                <a href="/advertisers-agencies" title="Advertisers & Agencies">Advertisers & Agencies</a>                                            </li>
                                                                                                                                                                            <li class="u-mB-0 u-pB-s u-type-color-white">
                                                <a href="/demand-partners" title="Demand partners">Demand partners</a>                                            </li>
                                                                                                                        </ul>
                                                                    </div>
                                                                <div class="col-6 col-lg-3 u-type-color-base-text-white">

                                                                        <ul class="reset-list u-type-color-white m-list --v --footer u-md-pB-m">
                                                                                <li class="u-mB-0 u-pB-s"><p class="u-font-family-secondary u-medium">Solutions</p></li>
                                                                                                                                <li class="u-mB-0 u-pB-s u-type-color-white">
                                                <a href="/monetization" title="Monetization">Monetization</a>                                            </li>
                                                                                                                                                                            <li class="u-mB-0 u-pB-s u-type-color-white">
                                                <a href="/free-community-based-user-acquisition" title="Free community-based acquisition">Free community-based acquisition</a>                                            </li>
                                                                                                                                                                            <li class="u-mB-0 u-pB-s u-type-color-white">
                                                <a href="/paid-user-acquisition-at-scale" title="Paid user acquisition at scale">Paid user acquisition at scale</a>                                            </li>
                                                                                                                                                                            <li class="u-mB-0 u-pB-s u-type-color-white">
                                                <a href="/programmatic-brand-advertising" title="Programmatic brand advertising">Programmatic brand advertising</a>                                            </li>
                                                                                                                                                                            <li class="u-mB-0 u-pB-s u-type-color-white">
                                                <a href="/programmatic-performance-advertising" title="Performance brand advertising">Performance brand advertising</a>                                            </li>
                                                                                                                        </ul>
                                                                    </div>
                                                                <div class="col-6 col-lg-3 u-type-color-base-text-white">

                                                                        <ul class="reset-list u-type-color-white m-list --v --footer u-md-pB-m">
                                                                                <li class="u-mB-0 u-pB-s"><p class="u-font-family-secondary u-medium">Platforms</p></li>
                                                                                                                                <li class="u-mB-0 u-pB-s u-type-color-white">
                                                <a href="/mobile" title="Mobile">Mobile</a>                                            </li>
                                                                                                                                                                            <li class="u-mB-0 u-pB-s u-type-color-white">
                                                <a href="/desktop-web" title="Desktop web">Desktop web</a>                                            </li>
                                                                                                                                                                            <li class="u-mB-0 u-pB-s u-type-color-white">
                                                <a href="/ott-ctv" title="CTV / OTT">CTV / OTT</a>                                            </li>
                                                                                                                        </ul>
                                                                    </div>
                                                                <div class="col-6 col-lg-3 u-type-color-base-text-white">

                                                                        <ul class="reset-list u-type-color-white m-list --v --footer u-md-pB-m">
                                                                                <li class="u-mB-0 u-pB-s"><p class="u-font-family-secondary u-medium">Company</p></li>
                                                                                                                                <li class="u-mB-0 u-pB-s u-type-color-white">
                                                <a href="/about-us" title="About us">About us</a>                                            </li>
                                                                                                                                                                            <li class="u-mB-0 u-pB-s u-type-color-white">
                                                <a href="https://www.techsoulogy.com/about-us/team" title="Our team">Our team</a>                                            </li>
                                                                                                                                                                            <li class="u-mB-0 u-pB-s u-type-color-white">
                                                <a href="https://www.techsoulogy.com/about-us/careers" title="Careers">Careers</a>                                            </li>
                                                                                                                                                                            <li class="u-mB-0 u-pB-s u-type-color-white">
                                                <a href="/trust-center" title="Trust center">Trust center</a>                                            </li>
                                                                                                                                                                            <li class="u-mB-0 u-pB-s u-type-color-white">
                                                <a href="https://www.techsoulogy.com/about-us/press-center" title="Press center">Press center</a>                                            </li>
                                                                                                                        </ul>
                                                                    </div>
                                                            </div>
                            
                                                        <div class="row u-pB-xxl d-flex gy-5">
                                                                <div class="col-6 col-lg-3 u-type-color-base-text-white">
                                                                            <a href="https://developers.tappx.com/" class="u-type-color-base-text-white u-medium" title="Developer portal">Integration guides</b></a>                                    
                                     
                                </div>
                                                                <div class="col-6 col-lg-3 u-type-color-base-text-white">
                                                                            <a href="/trust-center/ad-fraud-prevention" class="u-type-color-base-text-white u-medium" title="Quality First Framework">'Quality First Framework'</a>                                    
                                     
                                </div>
                                                                <div class="col-6 col-lg-3 u-type-color-base-text-white">
                                                                            <a href="/faqs" class="u-type-color-base-text-white u-medium" title="Frequently asked questions">FAQ’s</a>                                    
                                     
                                </div>
                                                                <div class="col-6 col-lg-3 u-type-color-base-text-white">
                                                                             <a href="/contact" class="a-btn a-btn-primary --btn-min">Contact us</a>                                    
                                     
                                </div>
                                                                
                            </div>
                            

                                                        <div class="row d-flex gy-5">
                                                                <div class="col-12 col-lg-6 u-type-color-base-text-white">
                                    <p class="text-center">© 2024 &#8211; All rights reserved<br />
<a href="/legal/privacy-policy">Privacy</a> &amp; <a href="/legal/cookies-policy">Cookies Policy</a> | <a href="/legal">Legal</a></p>
                                </div>
                                                                <div class="col-12 col-lg-6 u-type-color-base-text-white">
                                    <div class="w-100 d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-lg-end u-g-m">
                                        <img width="87" height="56" src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2022/10/iab-logo-member.png" class="attachment-full size-full" alt="" decoding="async" loading="lazy" /><img width="89" height="56" src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2022/10/tag-logo.png" class="attachment-full size-full" alt="" decoding="async" loading="lazy" /><img width="125" height="56" src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2022/10/iab-logo.png" class="attachment-full size-full" alt="" decoding="async" loading="lazy" srcset="https://149854053.v2.pressablecdn.com/wp-content/uploads/2022/10/iab-logo.png 125w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2022/10/iab-logo-120x54.png 120w " sizes="(max-width: 125px) 100vw, 125px" /><img width="125" height="56" src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2022/10/wayra-logo-small-1.png" class="attachment-full size-full" alt="" decoding="async" loading="lazy" srcset="https://149854053.v2.pressablecdn.com/wp-content/uploads/2022/10/wayra-logo-small-1.png 125w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2022/10/wayra-logo-small-1-120x54.png 120w " sizes="(max-width: 125px) 100vw, 125px" /><img width="120" height="120" src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/01/nailted-2023.png" class="attachment-full size-full" alt="" decoding="async" loading="lazy" /><img width="319" height="80" src="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/02/logo_feder-1.jpg" class="attachment-full size-full" alt="" decoding="async" loading="lazy" srcset="https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/02/logo_feder-1.jpg 319w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/02/logo_feder-1-250x63.jpg 250w , https://149854053.v2.pressablecdn.com/wp-content/uploads/2023/02/logo_feder-1-120x30.jpg 120w " sizes="(max-width: 319px) 100vw, 319px" />                                    </div>
                                </div>
                                                            </div>
                            

                        </div>

                    </div>
                </div>
            </footer>

            
            			
	
		
		
							<div id="modalRGPD" class="js-modal o-modal u-bg-color-superficie-brand-black">
					<div class="o-modal__modal-window">
						<div class="o-modal__modal-content u-bg-color-superficie-principal-light">
							<span class="a-closeModal" data-dismiss="js-modal">&times;</span>
							<div class="__bxCnt total u-p-m">
								<p><span class="ht-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></p>
<p>Etiam elit tortor, consequat sit amet ultricies ut, pellentesque a magna. Etiam mattis odio ut nibh pulvinar bibendum. Curabitur porta gravida urna sit amet tincidunt. Etiam sit amet nunc vulputate, blandit mauris sit amet, lacinia arcu. Morbi in orci tincidunt, tincidunt dolor vitae, hendrerit sem. Etiam in suscipit purus. Morbi dignissim vitae nibh ut condimentum.</p>
		
                                <div class="total">
                                    <button class="a-btn a-btn-secondary --btn-min" data-dismiss="js-modal"> 	
                                        <svg class="__icon">
                                            <use xlink:href="#x" href="#x"></use>
                                        </svg>
                                        <span>Close</span>
                                    </button>
                                </div>
							</div>
						</div>
					</div>
				</div>
						
		
		
		<script type="text/javascript" src="https://149854053.v2.pressablecdn.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js"></script>
<script type="text/javascript" src="https://149854053.v2.pressablecdn.com/wp-content/themes/techsoulogy-theme/assets/js/slick.min.js?ver=6.4.3" id="branng-slick-js"></script>
<script type="text/javascript" src="https://149854053.v2.pressablecdn.com/wp-content/themes/techsoulogy-theme/assets/js/scripts.js?ver=1.2.50" id="branng-scripts-js"></script>
<script defer type="text/javascript" src="https://149854053.v2.pressablecdn.com/wp-content/plugins/akismet/_inc/akismet-frontend.js?ver=1704837122" id="akismet-frontend-js"></script>
<script type="text/javascript" id="wpml-cookie-js-extra">
/* <![CDATA[ */
var wpml_cookies = {"wp-wpml_current_language":{"value":"en","expires":1,"path":"\/"}};
var wpml_cookies = {"wp-wpml_current_language":{"value":"en","expires":1,"path":"\/"}};
/* ]]> */
</script>
<script type="text/javascript" src="https://149854053.v2.pressablecdn.com/wp-content/plugins/sitepress-multilingual-cms/res/js/cookies/language-cookie.js?ver=4.6.9" id="wpml-cookie-js" defer="defer" data-wp-strategy="defer"></script>
<script type="text/javascript" id="sib-front-js-js-extra">
/* <![CDATA[ */
var sibErrMsg = {"invalidMail":"Please fill out valid email address","requiredField":"Please fill out required fields","invalidDateFormat":"Please fill out valid date format","invalidSMSFormat":"Please fill out valid phone number"};
var ajax_sib_front_object = {"ajax_url":"https:\/\/www.tappx.com\/wp-admin\/admin-ajax.php","ajax_nonce":"1b9d7ceebe","flag_url":"https:\/\/www.tappx.com\/wp-content\/plugins\/mailin\/img\/flags\/"};
/* ]]> */
</script>
<script type="text/javascript" src="https://149854053.v2.pressablecdn.com/wp-content/plugins/mailin/js/mailin-front.js?ver=1705739692" id="sib-front-js-js"></script>

  <!--copyscapeskip-->
  <aside id="moove_gdpr_cookie_info_bar" class="moove-gdpr-info-bar-hidden moove-gdpr-align-center moove-gdpr-light-scheme gdpr_infobar_postion_bottom" aria-label="GDPR Cookie Banner" style="display: none;">
    <div class="moove-gdpr-info-bar-container">
      <div class="moove-gdpr-info-bar-content">
        
<div class="moove-gdpr-cookie-notice">
  <p><span class="ht-body-s u-type-color-base-text-terciary u-medium">We use cookies</span></p>
<p><span class="ht-body-xs" style="font-size: 11pt; color: var(--souds-color-base-text-principal);">We use our own and third-party cookies to compile statistics on the use of the website in order to identify faults and improve the content and configuration of the website. We also use own and third party cookies to remember some options you have chosen (language, for example).</span></p>
<p><span class="ht-body-xs" style="font-size: 11pt; color: var(--souds-color-base-text-principal);"><button  data-href="#moove_gdpr_cookie_modal" class="change-settings-button">Manage preferences</button>.</span></p>
</div>
<!--  .moove-gdpr-cookie-notice -->        
<div class="moove-gdpr-button-holder">
		  <button class="mgbutton moove-gdpr-infobar-allow-all gdpr-fbo-1" aria-label="Accept" >Accept</button>
	  				<button class="mgbutton moove-gdpr-infobar-reject-btn gdpr-fbo-0 "  aria-label="Reject">Reject</button>
							<button class="mgbutton moove-gdpr-infobar-settings-btn change-settings-button gdpr-fbo-2" data-href="#moove_gdpr_cookie_modal" aria-label="Settings">Settings</button>
			</div>
<!--  .button-container -->      </div>
      <!-- moove-gdpr-info-bar-content -->
    </div>
    <!-- moove-gdpr-info-bar-container -->
  </aside>
  <!-- #moove_gdpr_cookie_info_bar -->
  <!--/copyscapeskip-->
<link rel='stylesheet' id='wp-block-library-css' href='https://149854053.v2.pressablecdn.com/wp-includes/css/dist/block-library/style.min.css?ver=6.4.3' media='all' />
<style id='wp-block-library-inline-css' type='text/css'>
.has-text-align-justify{text-align:justify;}
</style>
<link rel='stylesheet' id='gutenberg-pdfjs-css' href='https://149854053.v2.pressablecdn.com/wp-content/plugins/pdfjs-viewer-shortcode/inc/../blocks/dist/style.css?ver=2.1.8' media='all' />
<link rel='stylesheet' id='safe-svg-svg-icon-style-css' href='https://149854053.v2.pressablecdn.com/wp-content/plugins/safe-svg/dist/safe-svg-block-frontend.css?ver=6.4.3' media='all' />
<link rel='stylesheet' id='mediaelement-css' href='https://149854053.v2.pressablecdn.com/wp-includes/js/mediaelement/mediaelementplayer-legacy.min.css?ver=4.2.17' media='all' />
<link rel='stylesheet' id='wp-mediaelement-css' href='https://149854053.v2.pressablecdn.com/wp-includes/js/mediaelement/wp-mediaelement.min.css?ver=6.4.3' media='all' />
<link rel='stylesheet' id='contact-form-7-css' href='https://149854053.v2.pressablecdn.com/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.8.6' media='all' />
<link rel='stylesheet' id='wpcf7-redirect-script-frontend-css' href='https://149854053.v2.pressablecdn.com/wp-content/plugins/wpcf7-redirect/build/css/wpcf7-redirect-frontend.min.css?ver=1.1' media='all' />
<link rel='stylesheet' id='sib-front-css-css' href='https://149854053.v2.pressablecdn.com/wp-content/plugins/mailin/css/mailin-front.css?ver=6.4.3' media='all' />
<link rel='stylesheet' id='moove_gdpr_frontend-css' href='https://149854053.v2.pressablecdn.com/wp-content/plugins/gdpr-cookie-compliance/dist/styles/gdpr-main-nf.css?ver=4.12.8' media='all' />
<style id='moove_gdpr_frontend-inline-css' type='text/css'>
				#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-tab-main h3.tab-title, 
				#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-tab-main span.tab-title,
				#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li a, 
				#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li button,
				#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content .moove-gdpr-branding-cnt a,
				#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder a.mgbutton, 
				#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder button.mgbutton,
				#moove_gdpr_cookie_modal .cookie-switch .cookie-slider:after, 
				#moove_gdpr_cookie_modal .cookie-switch .slider:after, 
				#moove_gdpr_cookie_modal .switch .cookie-slider:after, 
				#moove_gdpr_cookie_modal .switch .slider:after,
				#moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content p, 
				#moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content p a,
				#moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.mgbutton, 
				#moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.mgbutton,
				#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-tab-main .moove-gdpr-tab-main-content h1, 
				#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-tab-main .moove-gdpr-tab-main-content h2, 
				#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-tab-main .moove-gdpr-tab-main-content h3, 
				#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-tab-main .moove-gdpr-tab-main-content h4, 
				#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-tab-main .moove-gdpr-tab-main-content h5, 
				#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-tab-main .moove-gdpr-tab-main-content h6,
				#moove_gdpr_cookie_modal .moove-gdpr-modal-content.moove_gdpr_modal_theme_v2 .moove-gdpr-modal-title .tab-title,
				#moove_gdpr_cookie_modal .moove-gdpr-modal-content.moove_gdpr_modal_theme_v2 .moove-gdpr-tab-main h3.tab-title, 
				#moove_gdpr_cookie_modal .moove-gdpr-modal-content.moove_gdpr_modal_theme_v2 .moove-gdpr-tab-main span.tab-title,
				#moove_gdpr_cookie_modal .moove-gdpr-modal-content.moove_gdpr_modal_theme_v2 .moove-gdpr-branding-cnt a {
				 	font-weight: inherit				}
			#moove_gdpr_cookie_modal,#moove_gdpr_cookie_info_bar,.gdpr_cookie_settings_shortcode_content{font-family:inherit}#moove_gdpr_save_popup_settings_button{background-color:#373737;color:#fff}#moove_gdpr_save_popup_settings_button:hover{background-color:#000}#moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.mgbutton,#moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.mgbutton{background-color:#ff0d58}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder a.mgbutton,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder button.mgbutton,.gdpr_cookie_settings_shortcode_content .gdpr-shr-button.button-green{background-color:#ff0d58;border-color:#ff0d58}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder a.mgbutton:hover,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder button.mgbutton:hover,.gdpr_cookie_settings_shortcode_content .gdpr-shr-button.button-green:hover{background-color:#fff;color:#ff0d58}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-close i,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-close span.gdpr-icon{background-color:#ff0d58;border:1px solid #ff0d58}#moove_gdpr_cookie_info_bar span.change-settings-button.focus-g,#moove_gdpr_cookie_info_bar span.change-settings-button:focus,#moove_gdpr_cookie_info_bar button.change-settings-button.focus-g,#moove_gdpr_cookie_info_bar button.change-settings-button:focus{-webkit-box-shadow:0 0 1px 3px #ff0d58;-moz-box-shadow:0 0 1px 3px #ff0d58;box-shadow:0 0 1px 3px #ff0d58}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-close i:hover,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-close span.gdpr-icon:hover,#moove_gdpr_cookie_info_bar span[data-href]>u.change-settings-button{color:#ff0d58}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li.menu-item-selected a span.gdpr-icon,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li.menu-item-selected button span.gdpr-icon{color:inherit}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li a span.gdpr-icon,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li button span.gdpr-icon{color:inherit}#moove_gdpr_cookie_modal .gdpr-acc-link{line-height:0;font-size:0;color:transparent;position:absolute}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-close:hover i,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li a,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li button,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li button i,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li a i,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-tab-main .moove-gdpr-tab-main-content a:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.mgbutton:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.mgbutton:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content span.change-settings-button:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.change-settings-button:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content u.change-settings-button:hover,#moove_gdpr_cookie_info_bar span[data-href]>u.change-settings-button,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.mgbutton.focus-g,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.mgbutton.focus-g,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.focus-g,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.focus-g,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.mgbutton:focus,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.mgbutton:focus,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a:focus,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button:focus,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content span.change-settings-button.focus-g,span.change-settings-button:focus,button.change-settings-button.focus-g,button.change-settings-button:focus,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content u.change-settings-button.focus-g,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content u.change-settings-button:focus{color:#ff0d58}#moove_gdpr_cookie_modal.gdpr_lightbox-hide{display:none}#moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.mgbutton,#moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.mgbutton,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder a.mgbutton,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder button.mgbutton,.gdpr-shr-button,#moove_gdpr_cookie_info_bar .moove-gdpr-infobar-close-btn{border-radius:0}
</style>
<script type="text/javascript" src="https://149854053.v2.pressablecdn.com/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=5.8.6" id="swv-js"></script>
<script type="text/javascript" id="contact-form-7-js-extra">
/* <![CDATA[ */
var wpcf7 = {"api":{"root":"https:\/\/www.tappx.com\/wp-json\/","namespace":"contact-form-7\/v1"},"cached":"1"};
/* ]]> */
</script>
<script type="text/javascript" src="https://149854053.v2.pressablecdn.com/wp-content/plugins/contact-form-7/includes/js/index.js?ver=5.8.6" id="contact-form-7-js"></script>
<script type="text/javascript" id="wpcf7-redirect-script-js-extra">
/* <![CDATA[ */
var wpcf7r = {"ajax_url":"https:\/\/www.tappx.com\/wp-admin\/admin-ajax.php"};
/* ]]> */
</script>
<script type="text/javascript" src="https://149854053.v2.pressablecdn.com/wp-content/plugins/wpcf7-redirect/build/js/wpcf7r-fe.js?ver=1.1" id="wpcf7-redirect-script-js"></script>
<script defer type="text/javascript" src="https://stats.wp.com/e-202405.js" id="jetpack-stats-js"></script>
<script type="text/javascript" id="jetpack-stats-js-after">
/* <![CDATA[ */
_stq = window._stq || [];
_stq.push([ "view", JSON.parse("{\"v\":\"ext\",\"blog\":\"211731099\",\"post\":\"11882\",\"tz\":\"0\",\"srv\":\"www.tappx.com\",\"hp\":\"atomic\",\"ac\":\"3\",\"amp\":\"0\",\"j\":\"1:13.1-a.9\"}") ]);
_stq.push([ "clickTrackerInit", "211731099", "11882" ]);
/* ]]> */
</script>
<script type="text/javascript" id="moove_gdpr_frontend-js-extra">
/* <![CDATA[ */
var moove_frontend_gdpr_scripts = {"ajaxurl":"https:\/\/www.tappx.com\/wp-admin\/admin-ajax.php","post_id":"11882","plugin_dir":"https:\/\/www.tappx.com\/wp-content\/plugins\/gdpr-cookie-compliance","show_icons":"all","is_page":"","ajax_cookie_removal":"false","strict_init":"2","enabled_default":{"third_party":0,"advanced":0},"geo_location":"false","force_reload":"true","is_single":"1","hide_save_btn":"false","current_user":"0","cookie_expiration":"365","script_delay":"2000","close_btn_action":"1","close_btn_rdr":"","scripts_defined":"{\"cache\":true,\"header\":\"\",\"body\":\"\",\"footer\":\"\",\"thirdparty\":{\"header\":\"\",\"body\":\"\",\"footer\":\"\"},\"advanced\":{\"header\":\"\",\"body\":\"\",\"footer\":\"\"}}","gdpr_scor":"true","wp_lang":"_en"};
/* ]]> */
</script>
<script type="text/javascript" src="https://149854053.v2.pressablecdn.com/wp-content/plugins/gdpr-cookie-compliance/dist/scripts/main.js?ver=4.12.8" id="moove_gdpr_frontend-js"></script>
<script type="text/javascript" id="moove_gdpr_frontend-js-after">
/* <![CDATA[ */
var gdpr_consent__strict = "true"
var gdpr_consent__thirdparty = "false"
var gdpr_consent__advanced = "false"
var gdpr_consent__cookies = "strict"
/* ]]> */
</script>
		<script type="text/javascript">
			(function() {
			var t   = document.createElement( 'script' );
			t.type  = 'text/javascript';
			t.async = true;
			t.id    = 'gauges-tracker';
			t.setAttribute( 'data-site-id', '635647b2186d8759f9b1c075' );
			t.src = '//secure.gaug.es/track.js';
			var s = document.getElementsByTagName( 'script' )[0];
			s.parentNode.insertBefore( t, s );
			})();
		</script>
		
  <!--copyscapeskip-->
  <button data-href="#moove_gdpr_cookie_modal"  id="moove_gdpr_save_popup_settings_button" style='display: none;' class=" gdpr-fb-hide-mobile" aria-label="Change cookie settings">
    <span class="moove_gdpr_icon">
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" style="max-width: 30px; max-height: 30px;">
        <g data-name="1">
          <path d="M293.9,450H233.53a15,15,0,0,1-14.92-13.42l-4.47-42.09a152.77,152.77,0,0,1-18.25-7.56L163,413.53a15,15,0,0,1-20-1.06l-42.69-42.69a15,15,0,0,1-1.06-20l26.61-32.93a152.15,152.15,0,0,1-7.57-18.25L76.13,294.1a15,15,0,0,1-13.42-14.91V218.81A15,15,0,0,1,76.13,203.9l42.09-4.47a152.15,152.15,0,0,1,7.57-18.25L99.18,148.25a15,15,0,0,1,1.06-20l42.69-42.69a15,15,0,0,1,20-1.06l32.93,26.6a152.77,152.77,0,0,1,18.25-7.56l4.47-42.09A15,15,0,0,1,233.53,48H293.9a15,15,0,0,1,14.92,13.42l4.46,42.09a152.91,152.91,0,0,1,18.26,7.56l32.92-26.6a15,15,0,0,1,20,1.06l42.69,42.69a15,15,0,0,1,1.06,20l-26.61,32.93a153.8,153.8,0,0,1,7.57,18.25l42.09,4.47a15,15,0,0,1,13.41,14.91v60.38A15,15,0,0,1,451.3,294.1l-42.09,4.47a153.8,153.8,0,0,1-7.57,18.25l26.61,32.93a15,15,0,0,1-1.06,20L384.5,412.47a15,15,0,0,1-20,1.06l-32.92-26.6a152.91,152.91,0,0,1-18.26,7.56l-4.46,42.09A15,15,0,0,1,293.9,450ZM247,420h33.39l4.09-38.56a15,15,0,0,1,11.06-12.91A123,123,0,0,0,325.7,356a15,15,0,0,1,17,1.31l30.16,24.37,23.61-23.61L372.06,328a15,15,0,0,1-1.31-17,122.63,122.63,0,0,0,12.49-30.14,15,15,0,0,1,12.92-11.06l38.55-4.1V232.31l-38.55-4.1a15,15,0,0,1-12.92-11.06A122.63,122.63,0,0,0,370.75,187a15,15,0,0,1,1.31-17l24.37-30.16-23.61-23.61-30.16,24.37a15,15,0,0,1-17,1.31,123,123,0,0,0-30.14-12.49,15,15,0,0,1-11.06-12.91L280.41,78H247l-4.09,38.56a15,15,0,0,1-11.07,12.91A122.79,122.79,0,0,0,201.73,142a15,15,0,0,1-17-1.31L154.6,116.28,131,139.89l24.38,30.16a15,15,0,0,1,1.3,17,123.41,123.41,0,0,0-12.49,30.14,15,15,0,0,1-12.91,11.06l-38.56,4.1v33.38l38.56,4.1a15,15,0,0,1,12.91,11.06A123.41,123.41,0,0,0,156.67,311a15,15,0,0,1-1.3,17L131,358.11l23.61,23.61,30.17-24.37a15,15,0,0,1,17-1.31,122.79,122.79,0,0,0,30.13,12.49,15,15,0,0,1,11.07,12.91ZM449.71,279.19h0Z" fill="currentColor"/>
          <path d="M263.71,340.36A91.36,91.36,0,1,1,355.08,249,91.46,91.46,0,0,1,263.71,340.36Zm0-152.72A61.36,61.36,0,1,0,325.08,249,61.43,61.43,0,0,0,263.71,187.64Z" fill="currentColor"/>
        </g>
      </svg>
    </span>

    <span class="moove_gdpr_text">Change cookie settings</span>
  </button>
  <!--/copyscapeskip-->
    
  <!--copyscapeskip-->
  <!-- V1 -->
  <div id="moove_gdpr_cookie_modal" class="gdpr_lightbox-hide" role="complementary" aria-label="GDPR Settings Screen">
    <div class="moove-gdpr-modal-content moove-clearfix logo-position-left moove_gdpr_modal_theme_v1">
          
        <button class="moove-gdpr-modal-close" aria-label="Close GDPR Cookie Settings">
          <span class="gdpr-sr-only">Close GDPR Cookie Settings</span>
          <span class="gdpr-icon moovegdpr-arrow-close"></span>
        </button>
            <div class="moove-gdpr-modal-left-content">
        
<div class="moove-gdpr-company-logo-holder">
  <img src="https://www.tappx.com/wp-content/uploads/2022/10/tappx.svg" alt=""   width="140"  height="37"  class="img-responsive" />
</div>
<!--  .moove-gdpr-company-logo-holder -->        <ul id="moove-gdpr-menu">
          
<li class="menu-item-on menu-item-privacy_overview menu-item-selected">
  <button data-href="#privacy_overview" class="moove-gdpr-tab-nav" aria-label="Privacy Overview">
    <span class="gdpr-nav-tab-title">Privacy Overview</span>
  </button>
</li>

  <li class="menu-item-strict-necessary-cookies menu-item-off">
    <button data-href="#strict-necessary-cookies" class="moove-gdpr-tab-nav" aria-label="Strictly Necessary Cookies">
      <span class="gdpr-nav-tab-title">Strictly Necessary Cookies</span>
    </button>
  </li>


  <li class="menu-item-off menu-item-third_party_cookies">
    <button data-href="#third_party_cookies" class="moove-gdpr-tab-nav" aria-label="3rd Party Cookies">
      <span class="gdpr-nav-tab-title">3rd Party Cookies</span>
    </button>
  </li>


  <li class="menu-item-moreinfo menu-item-off">
    <button data-href="#cookie_policy_modal" class="moove-gdpr-tab-nav" aria-label="Cookie Policy">
      <span class="gdpr-nav-tab-title">Cookie Policy</span>
    </button>
  </li>
        </ul>
        
<div class="moove-gdpr-branding-cnt">
  </div>
<!--  .moove-gdpr-branding -->      </div>
      <!--  .moove-gdpr-modal-left-content -->
      <div class="moove-gdpr-modal-right-content">
        <div class="moove-gdpr-modal-title">
           
        </div>
        <!-- .moove-gdpr-modal-ritle -->
        <div class="main-modal-content">

          <div class="moove-gdpr-tab-content">
            
<div id="privacy_overview" class="moove-gdpr-tab-main">
      <span class="tab-title">Privacy Overview</span>
    <div class="moove-gdpr-tab-main-content">
  	<p>This website uses cookies so that we can provide you with the best user experience possible. Cookie information is stored in your browser and performs functions such as recognising you when you return to our website and helping our team to understand which sections of the website you find most interesting and useful.</p>
  	  </div>
  <!--  .moove-gdpr-tab-main-content -->

</div>
<!-- #privacy_overview -->            
  <div id="strict-necessary-cookies" class="moove-gdpr-tab-main" style="display:none">
    <span class="tab-title">Strictly Necessary Cookies</span>
    <div class="moove-gdpr-tab-main-content">
      <p>Strictly Necessary Cookie should be enabled at all times so that we can save your preferences for cookie settings.</p>
      <div class="moove-gdpr-status-bar gdpr-checkbox-disabled checkbox-selected">
        <div class="gdpr-cc-form-wrap">
          <div class="gdpr-cc-form-fieldset">
            <label class="cookie-switch" for="moove_gdpr_strict_cookies">    
              <span class="gdpr-sr-only">Enable or Disable Cookies</span>        
              <input type="checkbox" aria-label="Strictly Necessary Cookies" disabled checked="checked"  value="check" name="moove_gdpr_strict_cookies" id="moove_gdpr_strict_cookies">
              <span class="cookie-slider cookie-round" data-text-enable="Enabled" data-text-disabled="Disabled"></span>
            </label>
          </div>
          <!-- .gdpr-cc-form-fieldset -->
        </div>
        <!-- .gdpr-cc-form-wrap -->
      </div>
      <!-- .moove-gdpr-status-bar -->
              <div class="moove-gdpr-strict-warning-message" style="margin-top: 10px;">
          <p>If you disable this cookie, we will not be able to save your preferences. This means that every time you visit this website you will need to enable or disable cookies again.</p>
        </div>
        <!--  .moove-gdpr-tab-main-content -->
                                              
    </div>
    <!--  .moove-gdpr-tab-main-content -->
  </div>
  <!-- #strict-necesarry-cookies -->
            
  <div id="third_party_cookies" class="moove-gdpr-tab-main" style="display:none">
    <span class="tab-title">3rd Party Cookies</span>
    <div class="moove-gdpr-tab-main-content">
      <p>This website uses Google Analytics to collect anonymous information such as the number of visitors to the site, and the most popular pages.</p>
<p>Keeping this cookie enabled helps us to improve our website.</p>
      <div class="moove-gdpr-status-bar">
        <div class="gdpr-cc-form-wrap">
          <div class="gdpr-cc-form-fieldset">
            <label class="cookie-switch" for="moove_gdpr_performance_cookies">    
              <span class="gdpr-sr-only">Enable or Disable Cookies</span>     
              <input type="checkbox" aria-label="3rd Party Cookies" value="check" name="moove_gdpr_performance_cookies" id="moove_gdpr_performance_cookies" >
              <span class="cookie-slider cookie-round" data-text-enable="Enabled" data-text-disabled="Disabled"></span>
            </label>
          </div>
          <!-- .gdpr-cc-form-fieldset -->
        </div>
        <!-- .gdpr-cc-form-wrap -->
      </div>
      <!-- .moove-gdpr-status-bar -->
              <div class="moove-gdpr-strict-secondary-warning-message" style="margin-top: 10px; display: none;">
          <p>Please enable Strictly Necessary Cookies first so that we can save your preferences!</p>
        </div>
        <!--  .moove-gdpr-tab-main-content -->
             
    </div>
    <!--  .moove-gdpr-tab-main-content -->
  </div>
  <!-- #third_party_cookies -->
            
            
  <div id="cookie_policy_modal" class="moove-gdpr-tab-main" style="display:none">
    <span class="tab-title">Cookie Policy</span>
    <div class="moove-gdpr-tab-main-content">
      <p>More information about our Cookie Policy <a href="/legal/cookies-policy" target="_blank" rel="noopener">Cookie Policy</a> </p>
       
    </div>
    <!--  .moove-gdpr-tab-main-content -->
  </div>
          </div>
          <!--  .moove-gdpr-tab-content -->
        </div>
        <!--  .main-modal-content -->
        <div class="moove-gdpr-modal-footer-content">
          <div class="moove-gdpr-button-holder">
			  		<button class="mgbutton moove-gdpr-modal-allow-all button-visible" aria-label="Enable All">Enable All</button>
		  					<button class="mgbutton moove-gdpr-modal-reject-all button-visible" aria-label="Reject All">Reject All</button>
								<button class="mgbutton moove-gdpr-modal-save-settings button-visible" aria-label="Save Changes">Save Changes</button>
				</div>
<!--  .moove-gdpr-button-holder -->        </div>
        <!--  .moove-gdpr-modal-footer-content -->
      </div>
      <!--  .moove-gdpr-modal-right-content -->

      <div class="moove-clearfix"></div>

    </div>
    <!--  .moove-gdpr-modal-content -->
  </div>
  <!-- #moove_gdpr_cookie_modal -->
  <!--/copyscapeskip-->


	</body>
</html>
<!--
	generated in 0.700 seconds
	191524 bytes batcached for 300 seconds
-->
