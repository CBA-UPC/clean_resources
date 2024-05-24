/*
 Bootstrap v5.2.2 (https://getbootstrap.com/)
 Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
'use strict';((this,function(){nction bootstrapHandler(element,fn){return function handler(event){hydrateObj(event,{delegateTarget:element});if(handler.oneOff)EventHandler.off(element,event.type,fn);return fn.apply(element,[event])}}function bootstrapDelegationHandler(element,selector,fn){return function handler(event){const domElements=element.querySelectorAll(selector);for(let {target}=event;target&&target!==this;target=target.parentNode)for(const domElement of domElements){if(domElement!==target)continue;
hydrateObj(event,{delegateTarget:target});if(handler.oneOff)EventHandler.off(element,event.type,selector,fn);return fn.apply(target,[event])}}}unction normalizeParameters(originalTypeEvent,handler,delegationFunction){const isDelegated=typeof handler==="string";const callable=isDelegated?delegationFunction:handler||delegationFunction;
let typeEvent=getTypeEvent(originalTypeEvent);if(!nativeEvents.has(typeEvent))typeEvent=originalTypeEvent;return[isDelegated,callable,typeEvent]}function addHandler(element,originalTypeEvent,handler,delegationFunction,oneOff){if(typeof originalTypeEvent!=="string"||!element)return;let [isDelegated,callable,typeEvent]=normalizeParameters(originalTypeEvent,handler,delegationFunction);if(originalTypeEvent in customEvents){const wrapFunction=callable=wrapFunction(callable)}const events=getElementEvents(element);const handlers=events[typeEvent]||(events[typeEvent]={});const previousFunction=findHandler(handlers,callable,isDelegated?handler:null);if(previousFunction){previousFunction.oneOff=previousFunction.oneOff&&oneOff;return}const uid=makeEventUid(callable,originalTypeEvent.replace(namespaceRegex,""));const fn$jscomp$0=isDelegated?
bootstrapDelegationHandler(element,handler,callable):bootstrapHandler(element,callable);fn$jscomp$0.delegationSelector=isDelegated?handler:null;fn$jscomp$0.callable=callable;fn$jscomp$0.oneOff=oneOff;fn$jscomp$0.uidEvent=uid;handlers[uid]=fn$jscomp$0;element.addEventListener(typeEvent,fn$jscomp$0,isDelegated)}function removeHandler(element,events,typeEvent,handler,delegationSelector){const fn=findHandler(events[typeEvent],handler,delegationSelector);if(!fn)return;element.removeEventListener(typeEvent,
fn,Boolean(delegationSelector));delete events[typeEvent][fn.uidEvent]}function hydrateObj(obj,meta){for(const [key,value]of Object.entries(meta||{}))try{obj[key]=value}catch(_unused){Object.defineProperty(obj,key,{configurable:true,get(){return value}})}return obj}function normalizeData(value){if(value==="true")return true;if(value==="false")return false;if(value===Number(value).toString())return Number(value);if(value===""||value==="null")return null;if(typeof value!=="string")return value;try{return JSON.parse(decodeURIComponent(value))}catch(_unused){return value}}
nction getWindow(node){if(node==null)return window;if(node.toString()!=="[object Window]"){var ownerDocument=node.ownerDocument;return ownerDocument?ownerDocument.defaultView||window:window}return node}function isElement(node){var OwnElement=getWindow(node).Element;return node instanceof OwnElement||node instanceof Element}
unction isShadowRoot(node){if(typeof ShadowRoot==="undefined")return false;var OwnElement=getWindow(node).ShadowRoot;return node instanceof OwnElement||node instanceof ShadowRoot}function applyStyles(_ref){var state=_ref.state;Object.keys(state.elements).forEach(function(name$jscomp$0){var style=state.styles[name$jscomp$0]||{};var attributes=state.attributes[name$jscomp$0]||
{};var element=state.elements[name$jscomp$0];if(!isHTMLElement(element)||!getNodeName(element))return;Object.assign(element.style,style);Object.keys(attributes).forEach(function(name){var value=attributes[name];if(value===false)element.removeAttribute(name);else element.setAttribute(name,value===true?"":value)})})}function effect$2(_ref2){var state=_ref2.state;var initialStyles={popper:{position:state.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(state.elements.popper.style,
initialStyles.popper);state.styles=initialStyles;if(state.elements.arrow)Object.assign(state.elements.arrow.style,initialStyles.arrow);return function(){Object.keys(state.elements).forEach(function(name){var element=state.elements[name];var attributes=state.attributes[name]||{};var styleProperties=Object.keys(state.styles.hasOwnProperty(name)?state.styles[name]:initialStyles[name]);var style$jscomp$0=styleProperties.reduce({});if(!isHTMLElement(element)||
!getNodeName(element))return;Object.assign(element.style,style$jscomp$0);Object.keys(attributes).forEach(})}}function getBasePlacement(placement){return placement.split("-")[0]}function getUAString(){var uaData=navigator.userAgentData;if(uaData!=null&&uaData.brands)return uaData.brands.map(.join(" ");return navigator.userAgent}
function getBoundingClientRect(element,includeScale,isFixedStrategy){if(includeScale===void 0)includeScale=false;if(isFixedStrategy===void 0)isFixedStrategy=false;var clientRect=element.getBoundingClientRect();var scaleX=1;var scaleY=1;if(includeScale&&isHTMLElement(element)){scaleX=element.offsetWidth>0?round(clientRect.width)/element.offsetWidth||1:1;scaleY=element.offsetHeight>0?round(clientRect.height)/element.offsetHeight||1:1}var _ref=isElement(element)?getWindow(element):window;var visualViewport=
_ref.visualViewport;var addVisualOffsets=!isLayoutViewport()&&isFixedStrategy;var x=(clientRect.left+(addVisualOffsets&&visualViewport?visualViewport.offsetLeft:0))/scaleX;var y=(clientRect.top+(addVisualOffsets&&visualViewport?visualViewport.offsetTop:0))/scaleY;var width=clientRect.width/scaleX;var height=clientRect.height/scaleY;return{width,height,top:y,right:x+width,bottom:y+height,left:x,x,y}}function getLayoutRect(element){var clientRect=getBoundingClientRect(element);var width=element.offsetWidth;
var height=element.offsetHeight;if(Math.abs(clientRect.width-width)<=1)width=clientRect.width;if(Math.abs(clientRect.height-height)<=1)height=clientRect.height;return{x:element.offsetLeft,y:element.offsetTop,width,height}}function contains(parent,child){var rootNode=child.getRootNode&&child.getRootNode();if(parent.contains(child))return true;else if(rootNode&&isShadowRoot(rootNode)){var next=child;do{if(next&&parent.isSameNode(next))return true;next=next.parentNode||next.host}while(next)}return false}
ction getParentNode(element){if(getNodeName(element)==="html")return element;return element.assignedSlot||element.parentNode||(isShadowRoot(element)?element.host:null)||getDocumentElement(element)}
function getTrueOffsetParent(element){if(!isHTMLElement(element)||getComputedStyle$1(element).position==="fixed")return null;return element.offsetParent}function getContainingBlock(element){var isFirefox=/firefox/i.test(getUAString());var isIE=/Trident/i.test(getUAString());if(isIE&&isHTMLElement(element)){var elementCss=getComputedStyle$1(element);if(elementCss.position==="fixed")return null}var currentNode=getParentNode(element);if(isShadowRoot(currentNode))currentNode=currentNode.host;for(;isHTMLElement(currentNode)&&
["html","body"].indexOf(getNodeName(currentNode))<0;){var css=getComputedStyle$1(currentNode);if(css.transform!=="none"||css.perspective!=="none"||css.contain==="paint"||["transform","perspective"].indexOf(css.willChange)!==-1||isFirefox&&css.willChange==="filter"||isFirefox&&css.filter&&css.filter!=="none")return currentNode;else currentNode=currentNode.parentNode}return null}function getOffsetParent(element){var window=getWindow(element);for(var offsetParent=getTrueOffsetParent(element);offsetParent&&
isTableElement(offsetParent)&&getComputedStyle$1(offsetParent).position==="static";)offsetParent=getTrueOffsetParent(offsetParent);if(offsetParent&&(getNodeName(offsetParent)==="html"||getNodeName(offsetParent)==="body"&&getComputedStyle$1(offsetParent).position==="static"))return window;return offsetParent||getContainingBlock(element)||window}on arrow(_ref){var _state$modifiersData$;var state=_ref.state;var name=_ref.name;var options=_ref.options;var arrowElement=
state.elements.arrow;var popperOffsets=state.modifiersData.popperOffsets;var basePlacement=getBasePlacement(state.placement);var axis=getMainAxisFromPlacement(basePlacement);var isVertical=[left,right].indexOf(basePlacement)>=0;var len=isVertical?"height":"width";if(!arrowElement||!popperOffsets)return;var paddingObject=toPaddingObject(options.padding,state);var arrowRect=getLayoutRect(arrowElement);var minProp=axis==="y"?top:left;var maxProp=axis==="y"?bottom:right;var endDiff=state.rects.reference[len]+
state.rects.reference[axis]-popperOffsets[axis]-state.rects.popper[len];var startDiff=popperOffsets[axis]-state.rects.reference[axis];var arrowOffsetParent=getOffsetParent(arrowElement);var clientSize=arrowOffsetParent?axis==="y"?arrowOffsetParent.clientHeight||0:arrowOffsetParent.clientWidth||0:0;var centerToReference=endDiff/2-startDiff/2;var min=paddingObject[minProp];var max=clientSize-arrowRect[len]-paddingObject[maxProp];var center=clientSize/2-arrowRect[len]/2+centerToReference;var offset=
within(min,center,max);var axisProp=axis;state.modifiersData[name]=(_state$modifiersData$={},_state$modifiersData$[axisProp]=offset,_state$modifiersData$.centerOffset=offset-center,_state$modifiersData$)}function effect$1(_ref2){var state=_ref2.state;var options=_ref2.options;var _options$element=options.element;var arrowElement=_options$element===void 0?"[data-popper-arrow]":_options$element;if(arrowElement==null)return;if(typeof arrowElement==="string"){arrowElement=state.elements.popper.querySelector(arrowElement);
if(!arrowElement)return}if(!contains(state.elements.popper,arrowElement))return;state.elements.arrow=arrowElement}unction roundOffsetsByDPR(_ref){var x=_ref.x;var y=_ref.y;var win=window;var dpr=win.devicePixelRatio||1;return{x:round(x*dpr)/dpr||0,y:round(y*dpr)/dpr||0}}function mapToStyles(_ref2){var _Object$assign2;var popper=_ref2.popper;var popperRect=_ref2.popperRect;var placement=_ref2.placement;var variation=_ref2.variation;var offsets=
_ref2.offsets;var position=_ref2.position;var gpuAcceleration=_ref2.gpuAcceleration;var adaptive=_ref2.adaptive;var roundOffsets=_ref2.roundOffsets;var isFixed=_ref2.isFixed;var _offsets$x=offsets.x;var x=_offsets$x===void 0?0:_offsets$x;var _offsets$y=offsets.y;var y=_offsets$y===void 0?0:_offsets$y;var _ref3=typeof roundOffsets==="function"?roundOffsets({x,y}):{x,y};x=_ref3.x;y=_ref3.y;var hasX=offsets.hasOwnProperty("x");var hasY=offsets.hasOwnProperty("y");var sideX=left;var sideY=top;var win=
window;if(adaptive){var offsetParent=getOffsetParent(popper);var heightProp="clientHeight";var widthProp="clientWidth";if(offsetParent===getWindow(popper)){offsetParent=getDocumentElement(popper);if(getComputedStyle$1(offsetParent).position!=="static"&&position==="absolute"){heightProp="scrollHeight";widthProp="scrollWidth"}}offsetParent=offsetParent;if(placement===top||(placement===left||placement===right)&&variation===end){sideY=bottom;var offsetY=isFixed&&offsetParent===win&&win.visualViewport?
win.visualViewport.height:offsetParent[heightProp];y-=offsetY-popperRect.height;y*=gpuAcceleration?1:-1}if(placement===left||(placement===top||placement===bottom)&&variation===end){sideX=right;var offsetX=isFixed&&offsetParent===win&&win.visualViewport?win.visualViewport.width:offsetParent[widthProp];x-=offsetX-popperRect.width;x*=gpuAcceleration?1:-1}}var commonStyles=Object.assign({position},adaptive&&unsetSides);var _ref4=roundOffsets===true?roundOffsetsByDPR({x,y}):{x,y};x=_ref4.x;y=_ref4.y;if(gpuAcceleration){var _Object$assign;
return Object.assign({},commonStyles,(_Object$assign={},_Object$assign[sideY]=hasY?"0":"",_Object$assign[sideX]=hasX?"0":"",_Object$assign.transform=(win.devicePixelRatio||1)<=1?"translate("+x+"px, "+y+"px)":"translate3d("+x+"px, "+y+"px, 0)",_Object$assign))}return Object.assign({},commonStyles,(_Object$assign2={},_Object$assign2[sideY]=hasY?y+"px":"",_Object$assign2[sideX]=hasX?x+"px":"",_Object$assign2.transform="",_Object$assign2))}function computeStyles(_ref5){var state=_ref5.state;var options=
_ref5.options;var _options$gpuAccelerat=options.gpuAcceleration;var gpuAcceleration=_options$gpuAccelerat===void 0?true:_options$gpuAccelerat;var _options$adaptive=options.adaptive;var adaptive=_options$adaptive===void 0?true:_options$adaptive;var _options$roundOffsets=options.roundOffsets;var roundOffsets=_options$roundOffsets===void 0?true:_options$roundOffsets;var commonStyles={placement:getBasePlacement(state.placement),variation:getVariation(state.placement),popper:state.elements.popper,popperRect:state.rects.popper,
gpuAcceleration,isFixed:state.options.strategy==="fixed"};if(state.modifiersData.popperOffsets!=null)state.styles.popper=Object.assign({},state.styles.popper,mapToStyles(Object.assign({},commonStyles,{offsets:state.modifiersData.popperOffsets,position:state.options.strategy,adaptive,roundOffsets})));if(state.modifiersData.arrow!=null)state.styles.arrow=Object.assign({},state.styles.arrow,mapToStyles(Object.assign({},commonStyles,{offsets:state.modifiersData.arrow,position:"absolute",adaptive:false,
roundOffsets})));state.attributes.popper=Object.assign({},state.attributes.popper,{"data-popper-placement":state.placement})}function effect(_ref){var state=_ref.state;var instance=_ref.instance;var options=_ref.options;var _options$scroll=options.scroll;var scroll=_options$scroll===void 0?true:_options$scroll;var _options$resize=options.resize;var resize=_options$resize===void 0?true:_options$resize;var window=getWindow(state.elements.popper);var scrollParents=[].concat(state.scrollParents.reference,
state.scrollParents.popper);if(scroll)scrollParents.forEach(function(scrollParent){scrollParent.addEventListener("scroll",instance.update,passive)});if(resize)window.addEventListener("resize",instance.update,passive);return function getOppositePlacement(placement){return placement.replace(/left|right|bottom|top/g,
function(matched){return hash$1[matched]})}tion getDocumentRect(element){var _element$ownerDocumen;
var html=getDocumentElement(element);var winScroll=getWindowScroll(element);var body=(_element$ownerDocumen=element.ownerDocument)==null?void 0:_element$ownerDocumen.body;var width=max(html.scrollWidth,html.clientWidth,body?body.scrollWidth:0,body?body.clientWidth:0);var height=max(html.scrollHeight,html.clientHeight,body?body.scrollHeight:0,body?body.clientHeight:0);var x=-winScroll.scrollLeft+getWindowScrollBarX(element);var y=-winScroll.scrollTop;if(getComputedStyle$1(body||html).direction==="rtl")x+=
max(html.clientWidth,body?body.clientWidth:0)-width;return{width,height,x,y}}function isScrollParent(element){var _getComputedStyle=getComputedStyle$1(element);var overflow=_getComputedStyle.overflow;var overflowX=_getComputedStyle.overflowX;var overflowY=_getComputedStyle.overflowY;return/auto|scroll|overlay|hidden/.test(overflow+overflowY+overflowX)}function getScrollParent(node){if(["html","body","#document"].indexOf(getNodeName(node))>=0)return node.ownerDocument.body;if(isHTMLElement(node)&&
isScrollParent(node))return node;return getScrollParent(getParentNode(node))}function listScrollParents(element,list){var _element$ownerDocumen;if(list===void 0)list=[];var scrollParent=getScrollParent(element);var isBody=scrollParent===((_element$ownerDocumen=element.ownerDocument)==null?void 0:_element$ownerDocumen.body);var win=getWindow(scrollParent);var target=isBody?[win].concat(win.visualViewport||[],isScrollParent(scrollParent)?scrollParent:[]):scrollParent;var updatedList=list.concat(target);
return isBody?updatedList:updatedList.concat(listScrollParents(getParentNode(target)))}ction getClippingParents(element){var clippingParents=listScrollParents(getParentNode(element));
var canEscapeClipping=["absolute","fixed"].indexOf(getComputedStyle$1(element).position)>=0;var clipperElement=canEscapeClipping&&isHTMLElement(element)?getOffsetParent(element):element;if(!isElement(clipperElement))return[];return clippingParents.filter(}unction computeOffsets(_ref){var reference=_ref.reference;var element=_ref.element;var placement=_ref.placement;var basePlacement=placement?getBasePlacement(placement):null;var variation=placement?getVariation(placement):null;var commonX=reference.x+reference.width/2-element.width/
2;var commonY=reference.y+reference.height/2-element.height/2;switch(basePlacement){case top:var offsets={x:commonX,y:reference.y-element.height};break;case bottom:offsets={x:commonX,y:reference.y+reference.height};break;case right:offsets={x:reference.x+reference.width,y:commonY};break;case left:offsets={x:reference.x-element.width,y:commonY};break;default:offsets={x:reference.x,y:reference.y}}var mainAxis=basePlacement?getMainAxisFromPlacement(basePlacement):null;if(mainAxis!=null){var len=mainAxis===
"y"?"height":"width";switch(variation){case start:offsets[mainAxis]=offsets[mainAxis]-(reference[len]/2-element[len]/2);break;case end:offsets[mainAxis]=offsets[mainAxis]+(reference[len]/2-element[len]/2);break}}return offsets}function detectOverflow(state,options){if(options===void 0)options={};var _options=options;var _options$placement=_options.placement;var placement=_options$placement===void 0?state.placement:_options$placement;var _options$strategy=_options.strategy;var strategy=_options$strategy===
void 0?state.strategy:_options$strategy;var _options$boundary=_options.boundary;var boundary=_options$boundary===void 0?clippingParents:_options$boundary;var _options$rootBoundary=_options.rootBoundary;var rootBoundary=_options$rootBoundary===void 0?viewport:_options$rootBoundary;var _options$elementConte=_options.elementContext;var elementContext=_options$elementConte===void 0?popper:_options$elementConte;var _options$altBoundary=_options.altBoundary;var altBoundary=_options$altBoundary===void 0?
false:_options$altBoundary;var _options$padding=_options.padding;var padding=_options$padding===void 0?0:_options$padding;var paddingObject=mergePaddingObject(typeof padding!=="number"?padding:expandToHashMap(padding,basePlacements));var altContext=elementContext===popper?reference:popper;var popperRect=state.rects.popper;var element=state.elements[altBoundary?altContext:elementContext];var clippingClientRect=getClippingRect(isElement(element)?element:element.contextElement||getDocumentElement(state.elements.popper),
boundary,rootBoundary,strategy);var referenceClientRect=getBoundingClientRect(state.elements.reference);var popperOffsets=computeOffsets({reference:referenceClientRect,element:popperRect,strategy:"absolute",placement});var popperClientRect=rectToClientRect(Object.assign({},popperRect,popperOffsets));var elementClientRect=elementContext===popper?popperClientRect:referenceClientRect;var overflowOffsets={top:clippingClientRect.top-elementClientRect.top+paddingObject.top,bottom:elementClientRect.bottom-
clippingClientRect.bottom+paddingObject.bottom,left:clippingClientRect.left-elementClientRect.left+paddingObject.left,right:elementClientRect.right-clippingClientRect.right+paddingObject.right};var offsetData=state.modifiersData.offset;if(elementContext===popper&&offsetData){var offset=offsetData[placement];Object.keys(overflowOffsets).forEach(}return overflowOffsets}
function computeAutoPlacement(state,options){if(options===void 0)options={};var _options=options;var placement$jscomp$0=_options.placement;var boundary=_options.boundary;var rootBoundary=_options.rootBoundary;var padding=_options.padding;var flipVariations=_options.flipVariations;var _options$allowedAutoP=_options.allowedAutoPlacements;var allowedAutoPlacements=_options$allowedAutoP===void 0?placements:_options$allowedAutoP;var variation=getVariation(placement$jscomp$0);var placements$1=variation?
flipVariations?variationPlacements:variationPlacements.filter(:basePlacements;var allowedPlacements=placements$1.filter(;if(allowedPlacements.length===0)allowedPlacements=placements$1;var overflows=allowedPlacements.reduce(
{});return Object.keys(overflows).sort(}unction flip(_ref){var state=_ref.state;var options=_ref.options;var name=_ref.name;if(state.modifiersData[name]._skip)return;var _options$mainAxis=
options.mainAxis;var checkMainAxis=_options$mainAxis===void 0?true:_options$mainAxis;var _options$altAxis=options.altAxis;var checkAltAxis=_options$altAxis===void 0?true:_options$altAxis;var specifiedFallbackPlacements=options.fallbackPlacements;var padding=options.padding;var boundary=options.boundary;var rootBoundary=options.rootBoundary;var altBoundary=options.altBoundary;var _options$flipVariatio=options.flipVariations;var flipVariations=_options$flipVariatio===void 0?true:_options$flipVariatio;
var allowedAutoPlacements=options.allowedAutoPlacements;var preferredPlacement=state.options.placement;var basePlacement=getBasePlacement(preferredPlacement);var isBasePlacement=basePlacement===preferredPlacement;var fallbackPlacements=specifiedFallbackPlacements||(isBasePlacement||!flipVariations?[getOppositePlacement(preferredPlacement)]:getExpandedFallbackPlacements(preferredPlacement));var placements=[preferredPlacement].concat(fallbackPlacements).reduce([]);var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var checksMap=new Map;var makeFallbackChecks=true;var firstFittingPlacement=placements[0];for(var i=0;i<placements.length;i++){var placement$jscomp$0=placements[i];var _basePlacement=getBasePlacement(placement$jscomp$0);var isStartVariation=getVariation(placement$jscomp$0)===start;var isVertical=[top,
bottom].indexOf(_basePlacement)>=0;var len=isVertical?"width":"height";var overflow=detectOverflow(state,{placement:placement$jscomp$0,boundary,rootBoundary,altBoundary,padding});var mainVariationSide=isVertical?isStartVariation?right:left:isStartVariation?bottom:top;if(referenceRect[len]>popperRect[len])mainVariationSide=getOppositePlacement(mainVariationSide);var altVariationSide=getOppositePlacement(mainVariationSide);var checks=[];if(checkMainAxis)checks.push(overflow[_basePlacement]<=0);if(checkAltAxis)checks.push(overflow[mainVariationSide]<=
0,overflow[altVariationSide]<=0);if(checks.every(function(check){return check})){firstFittingPlacement=placement$jscomp$0;makeFallbackChecks=false;break}checksMap.set(placement$jscomp$0,checks)}if(makeFallbackChecks){var numberOfChecks=flipVariations?3:1;var _loop=for(var _i=numberOfChecks;_i>0;_i--){var _ret=_loop(_i);if(_ret==="break")break}}if(state.placement!==firstFittingPlacement){state.modifiersData[name]._skip=true;state.placement=firstFittingPlacement;state.reset=true}}function getSideOffsets(overflow,rect,preventedOffsets){if(preventedOffsets===void 0)preventedOffsets={x:0,y:0};return{top:overflow.top-rect.height-preventedOffsets.y,right:overflow.right-rect.width+preventedOffsets.x,bottom:overflow.bottom-rect.height+preventedOffsets.y,
left:overflow.left-rect.width-preventedOffsets.x}}unction hide(_ref){var state=_ref.state;var name=_ref.name;var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var preventedOffsets=state.modifiersData.preventOverflow;var referenceOverflow=detectOverflow(state,{elementContext:"reference"});var popperAltOverflow=detectOverflow(state,{altBoundary:true});var referenceClippingOffsets=
getSideOffsets(referenceOverflow,referenceRect);var popperEscapeOffsets=getSideOffsets(popperAltOverflow,popperRect,preventedOffsets);var isReferenceHidden=isAnySideFullyClipped(referenceClippingOffsets);var hasPopperEscaped=isAnySideFullyClipped(popperEscapeOffsets);state.modifiersData[name]={referenceClippingOffsets,popperEscapeOffsets,isReferenceHidden,hasPopperEscaped};state.attributes.popper=Object.assign({},state.attributes.popper,{"data-popper-reference-hidden":isReferenceHidden,"data-popper-escaped":hasPopperEscaped})}
function distanceAndSkiddingToXY(placement,rects,offset){var basePlacement=getBasePlacement(placement);var invertDistance=[left,top].indexOf(basePlacement)>=0?-1:1;var _ref=typeof offset==="function"?offset(Object.assign({},rects,{placement})):offset;var skidding=_ref[0];var distance=_ref[1];skidding=skidding||0;distance=(distance||0)*invertDistance;return[left,right].indexOf(basePlacement)>=0?{x:distance,y:skidding}:{x:skidding,y:distance}}function offset(_ref2){var state=_ref2.state;var options=
_ref2.options;var name=_ref2.name;var _options$offset=options.offset;var offset=_options$offset===void 0?[0,0]:_options$offset;var data=placements.reduce({});var _data$state$placement=data[state.placement];var x=_data$state$placement.x;var y=_data$state$placement.y;if(state.modifiersData.popperOffsets!=null){state.modifiersData.popperOffsets.x+=x;state.modifiersData.popperOffsets.y+=y}state.modifiersData[name]=
data}function popperOffsets(_ref){var state=_ref.state;var name=_ref.name;state.modifiersData[name]=computeOffsets({reference:state.rects.reference,element:state.rects.popper,strategy:"absolute",placement:state.placement})}unction preventOverflow(_ref){var state=_ref.state;var options=_ref.options;var name=_ref.name;var _options$mainAxis=options.mainAxis;var checkMainAxis=_options$mainAxis===void 0?true:_options$mainAxis;var _options$altAxis=options.altAxis;
var checkAltAxis=_options$altAxis===void 0?false:_options$altAxis;var boundary=options.boundary;var rootBoundary=options.rootBoundary;var altBoundary=options.altBoundary;var padding=options.padding;var _options$tether=options.tether;var tether=_options$tether===void 0?true:_options$tether;var _options$tetherOffset=options.tetherOffset;var tetherOffset=_options$tetherOffset===void 0?0:_options$tetherOffset;var overflow=detectOverflow(state,{boundary,rootBoundary,padding,altBoundary});var basePlacement=
getBasePlacement(state.placement);var variation=getVariation(state.placement);var isBasePlacement=!variation;var mainAxis=getMainAxisFromPlacement(basePlacement);var altAxis=getAltAxis(mainAxis);var popperOffsets=state.modifiersData.popperOffsets;var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var tetherOffsetValue=typeof tetherOffset==="function"?tetherOffset(Object.assign({},state.rects,{placement:state.placement})):tetherOffset;var normalizedTetherOffsetValue=typeof tetherOffsetValue===
"number"?{mainAxis:tetherOffsetValue,altAxis:tetherOffsetValue}:Object.assign({mainAxis:0,altAxis:0},tetherOffsetValue);var offsetModifierState=state.modifiersData.offset?state.modifiersData.offset[state.placement]:null;var data={x:0,y:0};if(!popperOffsets)return;if(checkMainAxis){var _offsetModifierState$;var mainSide=mainAxis==="y"?top:left;var altSide=mainAxis==="y"?bottom:right;var len=mainAxis==="y"?"height":"width";var offset=popperOffsets[mainAxis];var min$1=offset+overflow[mainSide];var max$1=
offset-overflow[altSide];var additive=tether?-popperRect[len]/2:0;var minLen=variation===start?referenceRect[len]:popperRect[len];var maxLen=variation===start?-popperRect[len]:-referenceRect[len];var arrowElement=state.elements.arrow;var arrowRect=tether&&arrowElement?getLayoutRect(arrowElement):{width:0,height:0};var arrowPaddingObject=state.modifiersData["arrow#persistent"]?state.modifiersData["arrow#persistent"].padding:getFreshSideObject();var arrowPaddingMin=arrowPaddingObject[mainSide];var arrowPaddingMax=
arrowPaddingObject[altSide];var arrowLen=within(0,referenceRect[len],arrowRect[len]);var minOffset=isBasePlacement?referenceRect[len]/2-additive-arrowLen-arrowPaddingMin-normalizedTetherOffsetValue.mainAxis:minLen-arrowLen-arrowPaddingMin-normalizedTetherOffsetValue.mainAxis;var maxOffset=isBasePlacement?-referenceRect[len]/2+additive+arrowLen+arrowPaddingMax+normalizedTetherOffsetValue.mainAxis:maxLen+arrowLen+arrowPaddingMax+normalizedTetherOffsetValue.mainAxis;var arrowOffsetParent=state.elements.arrow&&
getOffsetParent(state.elements.arrow);var clientOffset=arrowOffsetParent?mainAxis==="y"?arrowOffsetParent.clientTop||0:arrowOffsetParent.clientLeft||0:0;var offsetModifierValue=(_offsetModifierState$=offsetModifierState==null?void 0:offsetModifierState[mainAxis])!=null?_offsetModifierState$:0;var tetherMin=offset+minOffset-offsetModifierValue-clientOffset;var tetherMax=offset+maxOffset-offsetModifierValue;var preventedOffset=within(tether?min(min$1,tetherMin):min$1,offset,tether?max(max$1,tetherMax):
max$1);popperOffsets[mainAxis]=preventedOffset;data[mainAxis]=preventedOffset-offset}if(checkAltAxis){var _offsetModifierState$2;var _mainSide=mainAxis==="x"?top:left;var _altSide=mainAxis==="x"?bottom:right;var _offset=popperOffsets[altAxis];var _len=altAxis==="y"?"height":"width";var _min=_offset+overflow[_mainSide];var _max=_offset-overflow[_altSide];var isOriginSide=[top,left].indexOf(basePlacement)!==-1;var _offsetModifierValue=(_offsetModifierState$2=offsetModifierState==null?void 0:offsetModifierState[altAxis])!=
null?_offsetModifierState$2:0;var _tetherMin=isOriginSide?_min:_offset-referenceRect[_len]-popperRect[_len]-_offsetModifierValue+normalizedTetherOffsetValue.altAxis;var _tetherMax=isOriginSide?_offset+referenceRect[_len]+popperRect[_len]-_offsetModifierValue-normalizedTetherOffsetValue.altAxis:_max;var _preventedOffset=tether&&isOriginSide?withinMaxClamp(_tetherMin,_offset,_tetherMax):within(tether?_tetherMin:_min,_offset,tether?_tetherMax:_max);popperOffsets[altAxis]=_preventedOffset;data[altAxis]=
_preventedOffset-_offset}state.modifiersData[name]=data}unction getNodeScroll(node){if(node===getWindow(node)||!isHTMLElement(node))return getWindowScroll(node);else return getHTMLElementScroll(node)}unction getCompositeRect(elementOrVirtualElement,offsetParent,isFixed){if(isFixed===void 0)isFixed=false;var isOffsetParentAnElement=isHTMLElement(offsetParent);var offsetParentIsScaled=isHTMLElement(offsetParent)&&isElementScaled(offsetParent);var documentElement=getDocumentElement(offsetParent);var rect=getBoundingClientRect(elementOrVirtualElement,offsetParentIsScaled,isFixed);var scroll={scrollLeft:0,scrollTop:0};var offsets={x:0,y:0};if(isOffsetParentAnElement||!isOffsetParentAnElement&&
!isFixed){if(getNodeName(offsetParent)!=="body"||isScrollParent(documentElement))scroll=getNodeScroll(offsetParent);if(isHTMLElement(offsetParent)){offsets=getBoundingClientRect(offsetParent,true);offsets.x+=offsetParent.clientLeft;offsets.y+=offsetParent.clientTop}else if(documentElement)offsets.x=getWindowScrollBarX(documentElement)}return{x:rect.left+scroll.scrollLeft-offsets.x,y:rect.top+scroll.scrollTop-offsets.y,width:rect.width,height:rect.height}}function order(modifiers){function sort(modifier){visited.add(modifier.name);
var requires=[].concat(modifier.requires||[],modifier.requiresIfExists||[]);requires.forEach(;result.push(modifier)}var map=new Map;var visited=new Set;var result=[];modifiers.forEach(;modifiers.forEach(;return result}unction debounce(fn){var pending;return function(){if(!pending)pending=new Promise(;return pending}}unction areValidElements(){var _len=arguments.length;var args=new Array(_len);for(var _key=0;_key<_len;_key++)args[_key]=arguments[_key];return!args.some(}function popperGenerator(generatorOptions){if(generatorOptions===
void 0)generatorOptions={};var _generatorOptions=generatorOptions;var _generatorOptions$def=_generatorOptions.defaultModifiers;var defaultModifiers=_generatorOptions$def===void 0?[]:_generatorOptions$def;var _generatorOptions$def2=_generatorOptions.defaultOptions;var defaultOptions=_generatorOptions$def2===void 0?DEFAULT_OPTIONS:_generatorOptions$def2;return function createPopper(reference$jscomp$0,popper$jscomp$0,options$jscomp$0){function runModifierEffects(){state$jscomp$0.orderedModifiers.forEach(function(_ref3){var name=
_ref3.name;var _ref3$options=_ref3.options;var options=_ref3$options===void 0?{}:_ref3$options;var effect=_ref3.effect;if(typeof effect==="function"){var cleanupFn=effect({state:state$jscomp$0,name,instance,options});var noopFn=function noopFn(){};effectCleanupFns.push(cleanupFn||noopFn)}})}f(options$jscomp$0===void 0)options$jscomp$0=defaultOptions;var state$jscomp$0={placement:"bottom",orderedModifiers:[],
options:Object.assign({},DEFAULT_OPTIONS,defaultOptions),modifiersData:{},elements:{reference:reference$jscomp$0,popper:popper$jscomp$0},attributes:{},styles:{}};var effectCleanupFns=[];var isDestroyed=false;var instance={state:state$jscomp$0,setOptions:forceUpdate:function forceUpdate(){if(isDestroyed)return;
var _state$elements=state$jscomp$0.elements;var reference=_state$elements.reference;var popper=_state$elements.popper;if(!areValidElements(reference,popper))return;state$jscomp$0.rects={reference:getCompositeRect(reference,getOffsetParent(popper),state$jscomp$0.options.strategy==="fixed"),popper:getLayoutRect(popper)};state$jscomp$0.reset=false;state$jscomp$0.placement=state$jscomp$0.options.placement;state$jscomp$0.orderedModifiers.forEach(;for(var index=0;index<state$jscomp$0.orderedModifiers.length;index++){if(state$jscomp$0.reset===true){state$jscomp$0.reset=false;index=-1;continue}var _state$orderedModifie=state$jscomp$0.orderedModifiers[index];var fn=_state$orderedModifie.fn;var _state$orderedModifie2=_state$orderedModifie.options;var _options=_state$orderedModifie2===void 0?{}:_state$orderedModifie2;var name=_state$orderedModifie.name;if(typeof fn==="function")state$jscomp$0=fn({state:state$jscomp$0,
options:_options,name,instance})||state$jscomp$0}},update:debounce(,destroy:;if(!areValidElements(reference$jscomp$0,popper$jscomp$0))return instance;instance.setOptions(options$jscomp$0).then(;return instance}}function sanitizeHtml(unsafeHtml,
allowList,sanitizeFunction){if(!unsafeHtml.length)return unsafeHtml;if(sanitizeFunction&&typeof sanitizeFunction==="function")return sanitizeFunction(unsafeHtml);const domParser=new window.DOMParser;const createdDocument=domParser.parseFromString(unsafeHtml,"text/html");const elements=[].concat(...createdDocument.body.querySelectorAll("*"));for(const element of elements){const elementName=element.nodeName.toLowerCase();if(!Object.keys(allowList).includes(elementName)){element.remove();continue}const attributeList=
[].concat(...element.attributes);const allowedAttributes=[].concat(allowList["*"]||[],allowList[elementName]||[]);for(const attribute of attributeList)if(!allowedAttribute(attribute,allowedAttributes))element.removeAttribute(attribute.nodeName)}return createdDocument.body.innerHTML}const MAX_UID=1E6;const MILLISECONDS_MULTIPLIER=1E3;const TRANSITION_END="transitionend";const toType=object=>{if(object===null||object===undefined)return`${object}`;return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase()};
const getUID=const getSelector=element=>{let selector=element.getAttribute("data-bs-target");if(!selector||selector==="#"){let hrefAttribute=element.getAttribute("href");if(!hrefAttribute||!hrefAttribute.includes("#")&&!hrefAttribute.startsWith("."))return null;if(hrefAttribute.includes("#")&&!hrefAttribute.startsWith("#"))hrefAttribute=`#${hrefAttribute.split("#")[1]}`;selector=hrefAttribute&&
hrefAttribute!=="#"?hrefAttribute.trim():null}return selector};const getSelectorFromElement=element=>{const selector=getSelector(element);if(selector)return document.querySelector(selector)?selector:null;return null};const getElementFromSelector=const getTransitionDurationFromElement=element=>{if(!element)return 0;let {transitionDuration,transitionDelay}=window.getComputedStyle(element);const floatTransitionDuration=
Number.parseFloat(transitionDuration);const floatTransitionDelay=Number.parseFloat(transitionDelay);if(!floatTransitionDuration&&!floatTransitionDelay)return 0;transitionDuration=transitionDuration.split(",")[0];transitionDelay=transitionDelay.split(",")[0];return(Number.parseFloat(transitionDuration)+Number.parseFloat(transitionDelay))*MILLISECONDS_MULTIPLIER};const triggerTransitionEnd=const isElement$1=object=>{if(!object||typeof object!==
"object")return false;if(typeof object.jquery!=="undefined")object=object[0];return typeof object.nodeType!=="undefined"};const getElement=object=>{if(isElement$1(object))return object.jquery?object[0]:object;if(typeof object==="string"&&object.length>0)return document.querySelector(object);return null};const isVisible=element=>{if(!isElement$1(element)||element.getClientRects().length===0)return false;const elementIsVisible=getComputedStyle(element).getPropertyValue("visibility")==="visible";const closedDetails=
element.closest("details:not([open])");if(!closedDetails)return elementIsVisible;if(closedDetails!==element){const summary=element.closest("summary");if(summary&&summary.parentNode!==closedDetails)return false;if(summary===null)return false}return elementIsVisible};const isDisabled=element=>{if(!element||element.nodeType!==Node.ELEMENT_NODE)return true;if(element.classList.contains("disabled"))return true;if(typeof element.disabled!=="undefined")return element.disabled;return element.hasAttribute("disabled")&&
element.getAttribute("disabled")!=="false"};const findShadowRoot=element=>{if(!document.documentElement.attachShadow)return null;if(typeof element.getRootNode==="function"){const root=element.getRootNode();return root instanceof ShadowRoot?root:null}if(element instanceof ShadowRoot)return element;if(!element.parentNode)return null;return findShadowRoot(element.parentNode)};const noop=const reflow=const getjQuery=()=>{if(window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery"))return window.jQuery;
return null};const DOMContentLoadedCallbacks=[];const onDOMContentLoaded=callback=>{if(document.readyState==="loading"){if(!DOMContentLoadedCallbacks.length)document.addEventListener("DOMContentLoaded",;DOMContentLoadedCallbacks.push(callback)}else callback()};const isRTL=const defineJQueryPlugin=const execute=callback=>{if(typeof callback==="function")callback()};const executeAfterTransition=(callback,transitionElement,waitForTransition=true)=>{if(!waitForTransition){execute(callback);return}const durationPadding=5;const emulatedDuration=getTransitionDurationFromElement(transitionElement)+durationPadding;let called=false;const handler=
({target})=>{if(target!==transitionElement)return;called=true;transitionElement.removeEventListener(TRANSITION_END,handler);execute(callback)};transitionElement.addEventListener(TRANSITION_END,handler);setTimeout(emulatedDuration)};const getNextActiveElement=(list,activeElement,shouldGetNext,isCycleAllowed)=>{const listLength=list.length;let index=list.indexOf(activeElement);if(index===-1)return!shouldGetNext&&isCycleAllowed?list[listLength-
1]:list[0];index+=shouldGetNext?1:-1;if(isCycleAllowed)index=(index+listLength)%listLength;return list[Math.max(0,Math.min(index,listLength-1))]};const namespaceRegex=/[^.]*(?=\..*)\.|.*/;const stripNameRegex=/\..*/;const stripUidRegex=/::\d+$/;const eventRegistry={};let uidEvent=1;const customEvents={mouseenter:"mouseover",mouseleave:"mouseout"};const nativeEvents=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart",
"selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);const EventHandler={on(element,event,handler,delegationFunction){addHandler(element,event,handler,
delegationFunction,false)},oneoff(element,originalTypeEvent,handler,delegationFunction){if(typeof originalTypeEvent!=="string"||!element)return;const [isDelegated,callable,typeEvent]=normalizeParameters(originalTypeEvent,handler,delegationFunction);const inNamespace=typeEvent!==originalTypeEvent;const events=getElementEvents(element);const storeElementEvent=events[typeEvent]||{};const isNamespace=
originalTypeEvent.startsWith(".");if(typeof callable!=="undefined"){if(!Object.keys(storeElementEvent).length)return;removeHandler(element,events,typeEvent,callable,isDelegated?handler:null);return}if(isNamespace)for(const elementEvent of Object.keys(events))removeNamespacedHandlers(element,events,elementEvent,originalTypeEvent.slice(1));for(const keyHandlers of Object.keys(storeElementEvent)){const handlerKey=keyHandlers.replace(stripUidRegex,"");if(!inNamespace||originalTypeEvent.includes(handlerKey)){const event=
storeElementEvent[keyHandlers];removeHandler(element,events,typeEvent,event.callable,event.delegationSelector)}}},trigger(element,event,args){if(typeof event!=="string"||!element)return null;const $=getjQuery();const typeEvent=getTypeEvent(event);const inNamespace=event!==typeEvent;let jQueryEvent=null;let bubbles=true;let nativeDispatch=true;let defaultPrevented=false;if(inNamespace&&$){jQueryEvent=$.Event(event,args);$(element).trigger(jQueryEvent);bubbles=!jQueryEvent.isPropagationStopped();nativeDispatch=
!jQueryEvent.isImmediatePropagationStopped();defaultPrevented=jQueryEvent.isDefaultPrevented()}let evt=new Event(event,{bubbles,cancelable:true});evt=hydrateObj(evt,args);if(defaultPrevented)evt.preventDefault();if(nativeDispatch)element.dispatchEvent(evt);if(evt.defaultPrevented&&jQueryEvent)jQueryEvent.preventDefault();return evt}};const elementMap=new Map;const Data={set(element,key,instance){if(!elementMap.has(element))elementMap.set(element,new Map);const instanceMap=elementMap.get(element);
if(!instanceMap.has(key)&&instanceMap.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);return}instanceMap.set(key,instance)},get(element,key){if(elementMap.has(element))return elementMap.get(element).get(key)||null;return null},remove(element,key){if(!elementMap.has(element))return;const instanceMap=elementMap.get(element);instanceMap.delete(key);if(instanceMap.size===0)elementMap.delete(element)}};const Manipulator=
{setDataAttributeremoveDataAttributegetDataAttributes(element){if(!element)return{};const attributes={};const bsKeys=Object.keys(element.dataset).filter(;for(const key of bsKeys){let pureKey=key.replace(/^bs/,"");pureKey=pureKey.charAt(0).toLowerCase()+pureKey.slice(1,pureKey.length);attributes[pureKey]=
normalizeData(element.dataset[key])}return attributes},getDataAttribute;class Config{static get Default(){return{}}CheckConfig(config,configTypes=this.constructor.DefaultType){for(const property of Object.keys(configTypes)){const expectedTypes=configTypes[property];const value=config[property];const valueType=isElement$1(value)?
"element":toType(value);if(!(new RegExp(expectedTypes)).test(valueType))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);}}}const VERSION="5.2.2";class BaseComponent extends Config{constructor(element,config){super();element=getElement(element);if(!element)return;this._element=element;this._config=this._getConfig(config);Data.set(this._element,this.constructor.DATA_KEY,this)}dispose(){Data.remove(this._element,
this.constructor.DATA_KEY);EventHandler.off(this._element,this.constructor.EVENT_KEY);for(const propertyName of Object.getOwnPropertyNames(this))this[propertyName]=null}ic get VERSION(){return VERSION}static get DATA_KEY(){return`bs.${this.NAME}`}onst enableDismissTrigger=(component,method="hide")=>{const clickEvent=`click.dismiss${component.EVENT_KEY}`;const name=component.NAME;EventHandler.on(document,clickEvent,`[data-bs-dismiss="${name}"]`,function(event){if(["A",
"AREA"].includes(this.tagName))event.preventDefault();if(isDisabled(this))return;const target=getElementFromSelector(this)||this.closest(`.${name}`);const instance=component.getOrCreateInstance(target);instance[method]()})};const NAME$f="alert";const DATA_KEY$a="bs.alert";const EVENT_KEY$b=`.${DATA_KEY$a}`;const EVENT_CLOSE=`close${EVENT_KEY$b}`;const EVENT_CLOSED=`closed${EVENT_KEY$b}`;const CLASS_NAME_FADE$5="fade";const CLASS_NAME_SHOW$8="show";class Alert extends BaseComponent{static get NAME(){return NAME$f}atic jQueryInterface(config){return this.each(function(){const data=Alert.getOrCreateInstance(this);if(typeof config!==
"string")return;if(data[config]===undefined||config.startsWith("_")||config==="constructor")throw new TypeError(`No method named "${config}"`);data[config](this)})}}enableDismissTrigger(Alert,"close");defineJQueryPlugin(Alert);const NAME$e="button";const DATA_KEY$9="bs.button";const EVENT_KEY$a=`.${DATA_KEY$9}`;const DATA_API_KEY$6=".data-api";const CLASS_NAME_ACTIVE$3="active";const SELECTOR_DATA_TOGGLE$5='[data-bs-toggle\x3d"button"]';const EVENT_CLICK_DATA_API$6=`click${EVENT_KEY$a}${DATA_API_KEY$6}`;
class Button extends BaseComponent{static get NAME(){return NAME$e}tatic jQueryInterface(config){return this.each(function(){const data=Button.getOrCreateInstance(this);if(config==="toggle")data[config]()})}}EventHandler.on(document,EVENT_CLICK_DATA_API$6,SELECTOR_DATA_TOGGLE$5,;defineJQueryPlugin(Button);const SelectorEngine={findfindOnechildrenparents(element,selector){const parents=[];let ancestor=element.parentNode.closest(selector);
for(;ancestor;){parents.push(ancestor);ancestor=ancestor.parentNode.closest(selector)}return parents},prev(element,selector){let previous=element.previousElementSibling;for(;previous;){if(previous.matches(selector))return[previous];previous=previous.previousElementSibling}return[]},nextfocusableChildren;const NAME$d="swipe";const EVENT_KEY$9=".bs.swipe";const EVENT_TOUCHSTART=`touchstart${EVENT_KEY$9}`;const EVENT_TOUCHMOVE=`touchmove${EVENT_KEY$9}`;const EVENT_TOUCHEND=`touchend${EVENT_KEY$9}`;const EVENT_POINTERDOWN=`pointerdown${EVENT_KEY$9}`;const EVENT_POINTERUP=`pointerup${EVENT_KEY$9}`;const POINTER_TYPE_TOUCH=
"touch";const POINTER_TYPE_PEN="pen";const CLASS_NAME_POINTER_EVENT="pointer-event";const SWIPE_THRESHOLD=40;const Default$c={endCallback:null,leftCallback:null,rightCallback:null};const DefaultType$c={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Swipe extends Config{constructor(element,config){super();this._element=element;if(!element||!Swipe.isSupported())return;this._config=this._getConfig(config);this._deltaX=0;this._supportPointerEvents=
Boolean(window.PointerEvent);this._initEvents()}static get Default(){return Default$c}static get DefaultType(){return DefaultType$c}static get NAME(){return NAME$d}start(event){if(!this._supportPointerEvents){this._deltaX=event.touches[0].clientX;return}if(this._eventIsPointerPenTouch(event))this._deltaX=event.clientX}_end(event){if(this._eventIsPointerPenTouch(event))this._deltaX=event.clientX-this._deltaX;this._handleSwipe();execute(this._config.endCallback)}handleSwipe(){const absDeltaX=Math.abs(this._deltaX);if(absDeltaX<=SWIPE_THRESHOLD)return;const direction=absDeltaX/this._deltaX;this._deltaX=0;if(!direction)return;execute(direction>0?this._config.rightCallback:this._config.leftCallback)}nst NAME$c="carousel";const DATA_KEY$8="bs.carousel";const EVENT_KEY$8=`.${DATA_KEY$8}`;const DATA_API_KEY$5=".data-api";const ARROW_LEFT_KEY$1="ArrowLeft";const ARROW_RIGHT_KEY$1="ArrowRight";const TOUCHEVENT_COMPAT_WAIT=500;const ORDER_NEXT="next";const ORDER_PREV="prev";const DIRECTION_LEFT="left";const DIRECTION_RIGHT="right";const EVENT_SLIDE=`slide${EVENT_KEY$8}`;const EVENT_SLID=`slid${EVENT_KEY$8}`;const EVENT_KEYDOWN$1=`keydown${EVENT_KEY$8}`;const EVENT_MOUSEENTER$1=`mouseenter${EVENT_KEY$8}`;
const EVENT_MOUSELEAVE$1=`mouseleave${EVENT_KEY$8}`;const EVENT_DRAG_START=`dragstart${EVENT_KEY$8}`;const EVENT_LOAD_DATA_API$3=`load${EVENT_KEY$8}${DATA_API_KEY$5}`;const EVENT_CLICK_DATA_API$5=`click${EVENT_KEY$8}${DATA_API_KEY$5}`;const CLASS_NAME_CAROUSEL="carousel";const CLASS_NAME_ACTIVE$2="active";const CLASS_NAME_SLIDE="slide";const CLASS_NAME_END="carousel-item-end";const CLASS_NAME_START="carousel-item-start";const CLASS_NAME_NEXT="carousel-item-next";const CLASS_NAME_PREV="carousel-item-prev";
const SELECTOR_ACTIVE=".active";const SELECTOR_ITEM=".carousel-item";const SELECTOR_ACTIVE_ITEM=SELECTOR_ACTIVE+SELECTOR_ITEM;const SELECTOR_ITEM_IMG=".carousel-item img";const SELECTOR_INDICATORS=".carousel-indicators";const SELECTOR_DATA_SLIDE="[data-bs-slide], [data-bs-slide-to]";const SELECTOR_DATA_RIDE='[data-bs-ride\x3d"carousel"]';const KEY_TO_DIRECTION={[ARROW_LEFT_KEY$1]:DIRECTION_RIGHT,[ARROW_RIGHT_KEY$1]:DIRECTION_LEFT};const Default$b={interval:5E3,keyboard:true,pause:"hover",ride:false,
touch:true,wrap:true};const DefaultType$b={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Carousel extends BaseComponent{constructor(element,config){super(element,config);this._interval=null;this._activeElement=null;this._isSliding=false;this.touchTimeout=null;this._swipeHelper=null;this._indicatorsElement=SelectorEngine.findOne(SELECTOR_INDICATORS,this._element);this._addEventListeners();if(this._config.ride===
CLASS_NAME_CAROUSEL)this.cycle()}static get Default(){return Default$b}static get DefaultType(){return DefaultType$b}static get NAME(){return NAME$c}next(){this._slide(ORDER_NEXT)}nextWhenVisible(){if(!document.hidden&&isVisible(this._element))this.next()}ause(){if(this._isSliding)triggerTransitionEnd(this._element);this._clearInterval()}maybeEnableCycle(){if(!this._config.ride)return;
if(this._isSliding){EventHandler.one(this._element,EVENT_SLID,()=>this.cycle());return}this.cycle()}ispose(){if(this._swipeHelper)this._swipeHelper.dispose();super.dispose()}addEventListeners(){if(this._config.keyboard)EventHandler.on(this._element,EVENT_KEYDOWN$1,event=>this._keydown(event));if(this._config.pause==="hover"){EventHandler.on(this._element,EVENT_MOUSEENTER$1,()=>this.pause());EventHandler.on(this._element,EVENT_MOUSELEAVE$1,()=>this._maybeEnableCycle())}if(this._config.touch&&Swipe.isSupported())this._addTouchEventListeners()}_addTouchEventListeners(){for(const img of SelectorEngine.find(SELECTOR_ITEM_IMG,this._element))EventHandler.on(img,
EVENT_DRAG_START,;const endCallBack=()=>{if(this._config.pause!=="hover")return;this.pause();if(this.touchTimeout)clearTimeout(this.touchTimeout);this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),TOUCHEVENT_COMPAT_WAIT+this._config.interval)};const swipeConfig={leftCallback:()=>this._slide(this._directionToOrder(DIRECTION_LEFT)),rightCallback:endCallback:endCallBack};this._swipeHelper=new Swipe(this._element,
swipeConfig)}_keydown(event){if(/input|textarea/i.test(event.target.tagName))return;const direction=KEY_TO_DIRECTION[event.key];if(direction){event.preventDefault();this._slide(this._directionToOrder(direction))}}setActiveIndicatorElement(index){if(!this._indicatorsElement)return;const activeIndicator=SelectorEngine.findOne(SELECTOR_ACTIVE,this._indicatorsElement);activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);activeIndicator.removeAttribute("aria-current");
const newActiveIndicator=SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`,this._indicatorsElement);if(newActiveIndicator){newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);newActiveIndicator.setAttribute("aria-current","true")}}slide(order,element=null){if(this._isSliding)return;
const activeElement=this._getActive();const isNext=order===ORDER_NEXT;const nextElement=element||getNextActiveElement(this._getItems(),activeElement,isNext,this._config.wrap);if(nextElement===activeElement)return;const nextElementIndex=this._getItemIndex(nextElement);const triggerEvent=const slideEvent=triggerEvent(EVENT_SLIDE);
if(slideEvent.defaultPrevented)return;if(!activeElement||!nextElement)return;const isCycling=Boolean(this._interval);this.pause();this._isSliding=true;this._setActiveIndicatorElement(nextElementIndex);this._activeElement=nextElement;const directionalClassName=isNext?CLASS_NAME_START:CLASS_NAME_END;const orderClassName=isNext?CLASS_NAME_NEXT:CLASS_NAME_PREV;nextElement.classList.add(orderClassName);reflow(nextElement);activeElement.classList.add(directionalClassName);nextElement.classList.add(directionalClassName);
const completeCallBack=this._queueCallback(completeCallBack,activeElement,this._isAnimated());if(isCycling)this.cycle()}_isAnimated(){return this._element.classList.contains(CLASS_NAME_SLIDE)}_getActive(){return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM,
this._element)}_getItems(){return SelectorEngine.find(SELECTOR_ITEM,this._element)}directionToOrder(direction){if(isRTL())return direction===DIRECTION_LEFT?ORDER_PREV:ORDER_NEXT;return direction===DIRECTION_LEFT?ORDER_NEXT:ORDER_PREV}_orderToDirection(order){if(isRTL())return order===ORDER_PREV?DIRECTION_LEFT:DIRECTION_RIGHT;return order===ORDER_PREV?DIRECTION_RIGHT:DIRECTION_LEFT}static jQueryInterface(config){return this.each(function(){const data=
Carousel.getOrCreateInstance(this,config);if(typeof config==="number"){data.to(config);return}if(typeof config==="string"){if(data[config]===undefined||config.startsWith("_")||config==="constructor")throw new TypeError(`No method named "${config}"`);data[config]()}})}}EventHandler.on(document,EVENT_CLICK_DATA_API$5,SELECTOR_DATA_SLIDE,function(event){const target=getElementFromSelector(this);if(!target||!target.classList.contains(CLASS_NAME_CAROUSEL))return;event.preventDefault();const carousel=Carousel.getOrCreateInstance(target);
const slideIndex=this.getAttribute("data-bs-slide-to");if(slideIndex){carousel.to(slideIndex);carousel._maybeEnableCycle();return}if(Manipulator.getDataAttribute(this,"slide")==="next"){carousel.next();carousel._maybeEnableCycle();return}carousel.prev();carousel._maybeEnableCycle()});EventHandler.on(window,EVENT_LOAD_DATA_API$3,;defineJQueryPlugin(Carousel);const NAME$b=
"collapse";const DATA_KEY$7="bs.collapse";const EVENT_KEY$7=`.${DATA_KEY$7}`;const DATA_API_KEY$4=".data-api";const EVENT_SHOW$6=`show${EVENT_KEY$7}`;const EVENT_SHOWN$6=`shown${EVENT_KEY$7}`;const EVENT_HIDE$6=`hide${EVENT_KEY$7}`;const EVENT_HIDDEN$6=`hidden${EVENT_KEY$7}`;const EVENT_CLICK_DATA_API$4=`click${EVENT_KEY$7}${DATA_API_KEY$4}`;const CLASS_NAME_SHOW$7="show";const CLASS_NAME_COLLAPSE="collapse";const CLASS_NAME_COLLAPSING="collapsing";const CLASS_NAME_COLLAPSED="collapsed";const CLASS_NAME_DEEPER_CHILDREN=
`:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;const CLASS_NAME_HORIZONTAL="collapse-horizontal";const WIDTH="width";const HEIGHT="height";const SELECTOR_ACTIVES=".collapse.show, .collapse.collapsing";const SELECTOR_DATA_TOGGLE$4='[data-bs-toggle\x3d"collapse"]';const Default$a={parent:null,toggle:true};const DefaultType$a={parent:"(null|element)",toggle:"boolean"};class Collapse extends BaseComponent{constructor(element,config){super(element,config);this._isTransitioning=false;this._triggerArray=
[];const toggleList=SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);for(const elem of toggleList){const selector=getSelectorFromElement(elem);const filterElement=SelectorEngine.find(selector).filter(;if(selector!==null&&filterElement.length)this._triggerArray.push(elem)}this._initializeChildren();if(!this._config.parent)this._addAriaAndCollapsedClass(this._triggerArray,this._isShown());if(this._config.toggle)this.toggle()}static get Default(){return Default$a}static get DefaultType(){return DefaultType$a}static get NAME(){return NAME$b}how(){if(this._isTransitioning||this._isShown())return;let activeChildren=[];if(this._config.parent)activeChildren=this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(.map(;if(activeChildren.length&&activeChildren[0]._isTransitioning)return;const startEvent=EventHandler.trigger(this._element,EVENT_SHOW$6);if(startEvent.defaultPrevented)return;for(const activeInstance of activeChildren)activeInstance.hide();
const dimension=this._getDimension();this._element.classList.remove(CLASS_NAME_COLLAPSE);this._element.classList.add(CLASS_NAME_COLLAPSING);this._element.style[dimension]=0;this._addAriaAndCollapsedClass(this._triggerArray,true);this._isTransitioning=true;const complete=
const capitalizedDimension=dimension[0].toUpperCase()+dimension.slice(1);const scrollSize=`scroll${capitalizedDimension}`;this._queueCallback(complete,this._element,true);this._element.style[dimension]=`${this._element[scrollSize]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const startEvent=EventHandler.trigger(this._element,EVENT_HIDE$6);if(startEvent.defaultPrevented)return;const dimension=this._getDimension();this._element.style[dimension]=`${this._element.getBoundingClientRect()[dimension]}px`;
reflow(this._element);this._element.classList.add(CLASS_NAME_COLLAPSING);this._element.classList.remove(CLASS_NAME_COLLAPSE,CLASS_NAME_SHOW$7);for(const trigger of this._triggerArray){const element=getElementFromSelector(trigger);if(element&&!this._isShown(element))this._addAriaAndCollapsedClass([trigger],false)}this._isTransitioning=true;const complete=this._element.style[dimension]="";this._queueCallback(complete,this._element,true)}itializeChildren(){if(!this._config.parent)return;const children=this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
for(const element of children){const selected=getElementFromSelector(element);if(selected)this._addAriaAndCollapsedClass([element],this._isShown(selected))}}addAriaAndCollapsedClass(triggerArray,isOpen){if(!triggerArray.length)return;for(const element of triggerArray){element.classList.toggle(CLASS_NAME_COLLAPSED,
!isOpen);element.setAttribute("aria-expanded",isOpen)}}static jQueryInterface(config){const _config={};if(typeof config==="string"&&/show|hide/.test(config))_config.toggle=false;return this.each(function(){const data=Collapse.getOrCreateInstance(this,_config);if(typeof config==="string"){if(typeof data[config]==="undefined")throw new TypeError(`No method named "${config}"`);data[config]()}})}}EventHandler.on(document,EVENT_CLICK_DATA_API$4,SELECTOR_DATA_TOGGLE$4,function(event){if(event.target.tagName===
"A"||event.delegateTarget&&event.delegateTarget.tagName==="A")event.preventDefault();const selector=getSelectorFromElement(this);const selectorElements=SelectorEngine.find(selector);for(const element of selectorElements)Collapse.getOrCreateInstance(element,{toggle:false}).toggle()});defineJQueryPlugin(Collapse);var top="top";var bottom="bottom";var right="right";var left="left";var auto="auto";var basePlacements=[top,bottom,right,left];var start="start";var end="end";var clippingParents="clippingParents";
var viewport="viewport";var popper="popper";var reference="reference";var variationPlacements=basePlacements.reduce([]);var placements=[].concat(basePlacements,[auto]).reduce([]);var beforeRead="beforeRead";var read="read";var afterRead="afterRead";var beforeMain="beforeMain";var main="main";var afterMain="afterMain";var beforeWrite=
"beforeWrite";var write="write";var afterWrite="afterWrite";var modifierPhases=[beforeRead,read,afterRead,beforeMain,main,afterMain,beforeWrite,write,afterWrite];const applyStyles$1={name:"applyStyles",enabled:true,phase:"write",fn:applyStyles,effect:effect$2,requires:["computeStyles"]};var max=Math.max;var min=Math.min;var round=Math.round;var toPaddingObject=const arrow$1={name:"arrow",enabled:true,phase:"main",fn:arrow,effect:effect$1,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};var unsetSides={top:"auto",right:"auto",bottom:"auto",left:"auto"};const computeStyles$1={name:"computeStyles",enabled:true,phase:"beforeWrite",fn:computeStyles,data:{}};var passive={passive:true};const eventListeners={name:"eventListeners",enabled:true,
phase:"write",fn:effect,data:{}};var hash$1={left:"right",right:"left",bottom:"top",top:"bottom"};var hash={start:"end",end:"start"};const flip$1={name:"flip",enabled:true,phase:"main",fn:flip,requiresIfExists:["offset"],data:{_skip:false}};const hide$1={name:"hide",enabled:true,phase:"main",requiresIfExists:["preventOverflow"],fn:hide};const offset$1={name:"offset",enabled:true,phase:"main",requires:["popperOffsets"],fn:offset};const popperOffsets$1={name:"popperOffsets",enabled:true,
phase:"read",fn:popperOffsets,data:{}};const preventOverflow$1={name:"preventOverflow",enabled:true,phase:"main",fn:preventOverflow,requiresIfExists:["offset"]};var DEFAULT_OPTIONS={placement:"bottom",modifiers:[],strategy:"absolute"};var createPopper$2=popperGenerator();var defaultModifiers$1=[eventListeners,popperOffsets$1,computeStyles$1,applyStyles$1];var createPopper$1=popperGenerator({defaultModifiers:defaultModifiers$1});var defaultModifiers=[eventListeners,popperOffsets$1,computeStyles$1,
applyStyles$1,offset$1,flip$1,preventOverflow$1,arrow$1,hide$1];var createPopper=popperGenerator({defaultModifiers});const Popper=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator,detectOverflow,createPopperBase:createPopper$2,createPopper,createPopperLite:createPopper$1,top,bottom,right,left,auto,basePlacements,start,end,clippingParents,viewport,popper,reference,variationPlacements,placements,beforeRead,read,afterRead,beforeMain,main,afterMain,beforeWrite,write,afterWrite,modifierPhases,
applyStyles:applyStyles$1,arrow:arrow$1,computeStyles:computeStyles$1,eventListeners,flip:flip$1,hide:hide$1,offset:offset$1,popperOffsets:popperOffsets$1,preventOverflow:preventOverflow$1},Symbol.toStringTag,{value:"Module"}));const NAME$a="dropdown";const DATA_KEY$6="bs.dropdown";const EVENT_KEY$6=`.${DATA_KEY$6}`;const DATA_API_KEY$3=".data-api";const ESCAPE_KEY$2="Escape";const TAB_KEY$1="Tab";const ARROW_UP_KEY$1="ArrowUp";const ARROW_DOWN_KEY$1="ArrowDown";const RIGHT_MOUSE_BUTTON=2;const EVENT_HIDE$5=
`hide${EVENT_KEY$6}`;const EVENT_HIDDEN$5=`hidden${EVENT_KEY$6}`;const EVENT_SHOW$5=`show${EVENT_KEY$6}`;const EVENT_SHOWN$5=`shown${EVENT_KEY$6}`;const EVENT_CLICK_DATA_API$3=`click${EVENT_KEY$6}${DATA_API_KEY$3}`;const EVENT_KEYDOWN_DATA_API=`keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;const EVENT_KEYUP_DATA_API=`keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;const CLASS_NAME_SHOW$6="show";const CLASS_NAME_DROPUP="dropup";const CLASS_NAME_DROPEND="dropend";const CLASS_NAME_DROPSTART="dropstart";const CLASS_NAME_DROPUP_CENTER=
"dropup-center";const CLASS_NAME_DROPDOWN_CENTER="dropdown-center";const SELECTOR_DATA_TOGGLE$3='[data-bs-toggle\x3d"dropdown"]:not(.disabled):not(:disabled)';const SELECTOR_DATA_TOGGLE_SHOWN=`${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;const SELECTOR_MENU=".dropdown-menu";const SELECTOR_NAVBAR=".navbar";const SELECTOR_NAVBAR_NAV=".navbar-nav";const SELECTOR_VISIBLE_ITEMS=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";const PLACEMENT_TOP=isRTL()?"top-end":"top-start";const PLACEMENT_TOPEND=
isRTL()?"top-start":"top-end";const PLACEMENT_BOTTOM=isRTL()?"bottom-end":"bottom-start";const PLACEMENT_BOTTOMEND=isRTL()?"bottom-start":"bottom-end";const PLACEMENT_RIGHT=isRTL()?"left-start":"right-start";const PLACEMENT_LEFT=isRTL()?"right-start":"left-start";const PLACEMENT_TOPCENTER="top";const PLACEMENT_BOTTOMCENTER="bottom";const Default$9={autoClose:true,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"};const DefaultType$9={autoClose:"(boolean|string)",
boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Dropdown extends BaseComponent{tatic get Default(){return Default$9}static get DefaultType(){return DefaultType$9}static get NAME(){return NAME$a}how(){if(isDisabled(this._element)||this._isShown())return;const relatedTarget={relatedTarget:this._element};const showEvent=EventHandler.trigger(this._element,EVENT_SHOW$5,relatedTarget);if(showEvent.defaultPrevented)return;this._createPopper();if("ontouchstart"in document.documentElement&&!this._parent.closest(SELECTOR_NAVBAR_NAV))for(const element of[].concat(...document.body.children))EventHandler.on(element,"mouseover",noop);this._element.focus();this._element.setAttribute("aria-expanded",
true);this._menu.classList.add(CLASS_NAME_SHOW$6);this._element.classList.add(CLASS_NAME_SHOW$6);EventHandler.trigger(this._element,EVENT_SHOWN$5,relatedTarget)}date(){this._inNavbar=this._detectNavbar();if(this._popper)this._popper.update()}_completeHide(relatedTarget){const hideEvent=EventHandler.trigger(this._element,
EVENT_HIDE$5,relatedTarget);if(hideEvent.defaultPrevented)return;if("ontouchstart"in document.documentElement)for(const element of[].concat(...document.body.children))EventHandler.off(element,"mouseover",noop);if(this._popper)this._popper.destroy();this._menu.classList.remove(CLASS_NAME_SHOW$6);this._element.classList.remove(CLASS_NAME_SHOW$6);this._element.setAttribute("aria-expanded","false");Manipulator.removeDataAttribute(this._menu,"popper");EventHandler.trigger(this._element,EVENT_HIDDEN$5,
relatedTarget)}_getConfig(config){config=super._getConfig(config);if(typeof config.reference==="object"&&!isElement$1(config.reference)&&typeof config.reference.getBoundingClientRect!=="function")throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return config}_createPopper(){if(typeof Popper==="undefined")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let referenceElement=
this._element;if(this._config.reference==="parent")referenceElement=this._parent;else if(isElement$1(this._config.reference))referenceElement=getElement(this._config.reference);else if(typeof this._config.reference==="object")referenceElement=this._config.reference;const popperConfig=this._getPopperConfig();this._popper=createPopper(referenceElement,this._menu,popperConfig)}_isShown(){return this._menu.classList.contains(CLASS_NAME_SHOW$6)}_getPlacement(){const parentDropdown=this._parent;if(parentDropdown.classList.contains(CLASS_NAME_DROPEND))return PLACEMENT_RIGHT;
if(parentDropdown.classList.contains(CLASS_NAME_DROPSTART))return PLACEMENT_LEFT;if(parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER))return PLACEMENT_TOPCENTER;if(parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER))return PLACEMENT_BOTTOMCENTER;const isEnd=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";if(parentDropdown.classList.contains(CLASS_NAME_DROPUP))return isEnd?PLACEMENT_TOPEND:PLACEMENT_TOP;return isEnd?PLACEMENT_BOTTOMEND:PLACEMENT_BOTTOM}getOffset(){const {offset}=this._config;if(typeof offset==="string")return offset.split(",").map(value=>Number.parseInt(value,10));if(typeof offset==="function")return popperData=>offset(popperData,this._element);return offset}selectMenuItem({key,target}){const items=SelectorEngine.find(SELECTOR_VISIBLE_ITEMS,this._menu).filter(;if(!items.length)return;getNextActiveElement(items,target,key===ARROW_DOWN_KEY$1,!items.includes(target)).focus()}static jQueryInterface(config){return this.each(function(){const data=
Dropdown.getOrCreateInstance(this,config);if(typeof config!=="string")return;if(typeof data[config]==="undefined")throw new TypeError(`No method named "${config}"`);data[config]()})}static clearMenus(event){if(event.button===RIGHT_MOUSE_BUTTON||event.type==="keyup"&&event.key!==TAB_KEY$1)return;const openToggles=SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);for(const toggle of openToggles){const context=Dropdown.getInstance(toggle);if(!context||context._config.autoClose===false)continue;const composedPath=
event.composedPath();const isMenuTarget=composedPath.includes(context._menu);if(composedPath.includes(context._element)||context._config.autoClose==="inside"&&!isMenuTarget||context._config.autoClose==="outside"&&isMenuTarget)continue;if(context._menu.contains(event.target)&&(event.type==="keyup"&&event.key===TAB_KEY$1||/input|select|option|textarea|form/i.test(event.target.tagName)))continue;const relatedTarget={relatedTarget:context._element};if(event.type==="click")relatedTarget.clickEvent=event;
context._completeHide(relatedTarget)}}static dataApiKeydownHandler(event){const isInput=/input|textarea/i.test(event.target.tagName);const isEscapeEvent=event.key===ESCAPE_KEY$2;const isUpOrDownEvent=[ARROW_UP_KEY$1,ARROW_DOWN_KEY$1].includes(event.key);if(!isUpOrDownEvent&&!isEscapeEvent)return;if(isInput&&!isEscapeEvent)return;event.preventDefault();const getToggleButton=this.matches(SELECTOR_DATA_TOGGLE$3)?this:SelectorEngine.prev(this,SELECTOR_DATA_TOGGLE$3)[0]||SelectorEngine.next(this,SELECTOR_DATA_TOGGLE$3)[0]||
SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3,event.delegateTarget.parentNode);const instance=Dropdown.getOrCreateInstance(getToggleButton);if(isUpOrDownEvent){event.stopPropagation();instance.show();instance._selectMenuItem(event);return}if(instance._isShown()){event.stopPropagation();instance.hide();getToggleButton.focus()}}}EventHandler.on(document,EVENT_KEYDOWN_DATA_API,SELECTOR_DATA_TOGGLE$3,Dropdown.dataApiKeydownHandler);EventHandler.on(document,EVENT_KEYDOWN_DATA_API,SELECTOR_MENU,Dropdown.dataApiKeydownHandler);
EventHandler.on(document,EVENT_CLICK_DATA_API$3,Dropdown.clearMenus);EventHandler.on(document,EVENT_KEYUP_DATA_API,Dropdown.clearMenus);EventHandler.on(document,EVENT_CLICK_DATA_API$3,SELECTOR_DATA_TOGGLE$3,;defineJQueryPlugin(Dropdown);const SELECTOR_FIXED_CONTENT=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";const SELECTOR_STICKY_CONTENT=".sticky-top";const PROPERTY_PADDING="padding-right";const PROPERTY_MARGIN=
"margin-right";class ScrollBarHelper{ementAttributes(selector,
styleProperty,callback){const scrollbarWidth=this.getWidth();const manipulationCallBack=this._applyManipulationCallback(selector,manipulationCallBack)}_saveInitialAttribute(element,
styleProperty){const actualValue=element.style.getPropertyValue(styleProperty);if(actualValue)Manipulator.setDataAttribute(element,styleProperty,actualValue)}onst NAME$9="backdrop";const CLASS_NAME_FADE$4="fade";const CLASS_NAME_SHOW$5="show";const EVENT_MOUSEDOWN=`mousedown.bs.${NAME$9}`;const Default$8={className:"modal-backdrop",clickCallback:null,isAnimated:false,isVisible:true,rootElement:"body"};const DefaultType$8={className:"string",clickCallback:"(function|null)",
isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Backdrop extends Config{constructor(config){super();this._config=this._getConfig(config);this._isAppended=false;this._element=null}static get Default(){return Default$8}static get DefaultType(){return DefaultType$8}static get NAME(){return NAME$9}show(callback){if(!this._config.isVisible){execute(callback);return}this._append();const element=this._getElement();if(this._config.isAnimated)reflow(element);element.classList.add(CLASS_NAME_SHOW$5);
this._emulateAnimation(}ispose(){if(!this._isAppended)return;EventHandler.off(this._element,EVENT_MOUSEDOWN);this._element.remove();this._isAppended=false}_getElement(){if(!this._element){const backdrop=document.createElement("div");backdrop.className=this._config.className;if(this._config.isAnimated)backdrop.classList.add(CLASS_NAME_FADE$4);
this._element=backdrop}return this._element}append(){if(this._isAppended)return;const element=this._getElement();this._config.rootElement.append(element);EventHandler.on(element,EVENT_MOUSEDOWN,;this._isAppended=true}const NAME$8="focustrap";const DATA_KEY$5="bs.focustrap";
const EVENT_KEY$5=`.${DATA_KEY$5}`;const EVENT_FOCUSIN$2=`focusin${EVENT_KEY$5}`;const EVENT_KEYDOWN_TAB=`keydown.tab${EVENT_KEY$5}`;const TAB_KEY="Tab";const TAB_NAV_FORWARD="forward";const TAB_NAV_BACKWARD="backward";const Default$7={autofocus:true,trapElement:null};const DefaultType$7={autofocus:"boolean",trapElement:"element"};class FocusTrap extends Config{tatic get Default(){return Default$7}static get DefaultType(){return DefaultType$7}static get NAME(){return NAME$8}activate(){if(this._isActive)return;
if(this._config.autofocus)this._config.trapElement.focus();EventHandler.off(document,EVENT_KEY$5);EventHandler.on(document,EVENT_FOCUSIN$2,event=>this._handleFocusin(event));EventHandler.on(document,EVENT_KEYDOWN_TAB,event=>this._handleKeydown(event));this._isActive=true}deactivate(){if(!this._isActive)return;this._isActive=false;EventHandler.off(document,EVENT_KEY$5)}_handleFocusin(event){const {trapElement}=this._config;if(event.target===document||event.target===trapElement||trapElement.contains(event.target))return;
const elements=SelectorEngine.focusableChildren(trapElement);if(elements.length===0)trapElement.focus();else if(this._lastTabNavDirection===TAB_NAV_BACKWARD)elements[elements.length-1].focus();else elements[0].focus()}_handleKeydown(event){if(event.key!==TAB_KEY)return;this._lastTabNavDirection=event.shiftKey?TAB_NAV_BACKWARD:TAB_NAV_FORWARD}}const NAME$7="modal";const DATA_KEY$4="bs.modal";const EVENT_KEY$4=`.${DATA_KEY$4}`;const DATA_API_KEY$2=".data-api";const ESCAPE_KEY$1="Escape";const EVENT_HIDE$4=
`hide${EVENT_KEY$4}`;const EVENT_HIDE_PREVENTED$1=`hidePrevented${EVENT_KEY$4}`;const EVENT_HIDDEN$4=`hidden${EVENT_KEY$4}`;const EVENT_SHOW$4=`show${EVENT_KEY$4}`;const EVENT_SHOWN$4=`shown${EVENT_KEY$4}`;const EVENT_RESIZE$1=`resize${EVENT_KEY$4}`;const EVENT_CLICK_DISMISS=`click.dismiss${EVENT_KEY$4}`;const EVENT_MOUSEDOWN_DISMISS=`mousedown.dismiss${EVENT_KEY$4}`;const EVENT_KEYDOWN_DISMISS$1=`keydown.dismiss${EVENT_KEY$4}`;const EVENT_CLICK_DATA_API$2=`click${EVENT_KEY$4}${DATA_API_KEY$2}`;const CLASS_NAME_OPEN=
"modal-open";const CLASS_NAME_FADE$3="fade";const CLASS_NAME_SHOW$4="show";const CLASS_NAME_STATIC="modal-static";const OPEN_SELECTOR$1=".modal.show";const SELECTOR_DIALOG=".modal-dialog";const SELECTOR_MODAL_BODY=".modal-body";const SELECTOR_DATA_TOGGLE$2='[data-bs-toggle\x3d"modal"]';const Default$6={backdrop:true,focus:true,keyboard:true};const DefaultType$6={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Modal extends BaseComponent{tatic get Default(){return Default$6}static get DefaultType(){return DefaultType$6}static get NAME(){return NAME$7}toggle(relatedTarget){return this._isShown?this.hide():this.show(relatedTarget)}show(relatedTarget){if(this._isShown||
this._isTransitioning)return;const showEvent=EventHandler.trigger(this._element,EVENT_SHOW$4,{relatedTarget});if(showEvent.defaultPrevented)return;this._isShown=true;this._isTransitioning=true;this._scrollBar.hide();document.body.classList.add(CLASS_NAME_OPEN);this._adjustDialog();this._backdrop.show(}hide(){if(!this._isShown||this._isTransitioning)return;const hideEvent=EventHandler.trigger(this._element,EVENT_HIDE$4);if(hideEvent.defaultPrevented)return;this._isShown=
false;this._isTransitioning=true;this._focustrap.deactivate();this._element.classList.remove(CLASS_NAME_SHOW$4);this._queueCallback(this._element,this._isAnimated())}dispose(){for(const htmlElement of[window,this._dialog])EventHandler.off(htmlElement,EVENT_KEY$4);this._backdrop.dispose();this._focustrap.deactivate();super.dispose()}nitializeFocusTrap(){return new FocusTrap({trapElement:this._element})}_showElement(relatedTarget){if(!document.body.contains(this._element))document.body.append(this._element);
this._element.style.display="block";this._element.removeAttribute("aria-hidden");this._element.setAttribute("aria-modal",true);this._element.setAttribute("role","dialog");this._element.scrollTop=0;const modalBody=SelectorEngine.findOne(SELECTOR_MODAL_BODY,this._dialog);if(modalBody)modalBody.scrollTop=0;reflow(this._element);this._element.classList.add(CLASS_NAME_SHOW$4);const transitionComplete=()=>{if(this._config.focus)this._focustrap.activate();this._isTransitioning=false;EventHandler.trigger(this._element,
EVENT_SHOWN$4,{relatedTarget})};this._queueCallback(transitionComplete,this._dialog,this._isAnimated())}_addEventListeners(){EventHandler.on(this._element,EVENT_KEYDOWN_DISMISS$1,event=>{if(event.key!==ESCAPE_KEY$1)return;if(this._config.keyboard){event.preventDefault();this.hide();return}this._triggerBackdropTransition()});EventHandler.on(window,EVENT_RESIZE$1,()=>{if(this._isShown&&!this._isTransitioning)this._adjustDialog()});EventHandler.on(this._element,EVENT_MOUSEDOWN_DISMISS,event=>{EventHandler.one(this._element,
EVENT_CLICK_DISMISS,event2=>{if(this._element!==event.target||this._element!==event2.target)return;if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}if(this._config.backdrop)this.hide()})})}isAnimated(){return this._element.classList.contains(CLASS_NAME_FADE$3)}_triggerBackdropTransition(){const hideEvent=EventHandler.trigger(this._element,EVENT_HIDE_PREVENTED$1);if(hideEvent.defaultPrevented)return;const isModalOverflowing=this._element.scrollHeight>document.documentElement.clientHeight;const initialOverflowY=this._element.style.overflowY;if(initialOverflowY==="hidden"||this._element.classList.contains(CLASS_NAME_STATIC))return;
if(!isModalOverflowing)this._element.style.overflowY="hidden";this._element.classList.add(CLASS_NAME_STATIC);this._queueCallback(this._dialog);this._element.focus()}atic jQueryInterface(config,relatedTarget){return this.each(function(){const data=Modal.getOrCreateInstance(this,
config);if(typeof config!=="string")return;if(typeof data[config]==="undefined")throw new TypeError(`No method named "${config}"`);data[config](relatedTarget)})}}EventHandler.on(document,EVENT_CLICK_DATA_API$2,SELECTOR_DATA_TOGGLE$2,function(event){const target=getElementFromSelector(this);if(["A","AREA"].includes(this.tagName))event.preventDefault();EventHandler.one(target,EVENT_SHOW$4,showEvent=>{if(showEvent.defaultPrevented)return;EventHandler.one(target,EVENT_HIDDEN$4,()=>{if(isVisible(this))this.focus()})});
const alreadyOpen=SelectorEngine.findOne(OPEN_SELECTOR$1);if(alreadyOpen)Modal.getInstance(alreadyOpen).hide();const data=Modal.getOrCreateInstance(target);data.toggle(this)});enableDismissTrigger(Modal);defineJQueryPlugin(Modal);const NAME$6="offcanvas";const DATA_KEY$3="bs.offcanvas";const EVENT_KEY$3=`.${DATA_KEY$3}`;const DATA_API_KEY$1=".data-api";const EVENT_LOAD_DATA_API$2=`load${EVENT_KEY$3}${DATA_API_KEY$1}`;const ESCAPE_KEY="Escape";const CLASS_NAME_SHOW$3="show";const CLASS_NAME_SHOWING$1=
"showing";const CLASS_NAME_HIDING="hiding";const CLASS_NAME_BACKDROP="offcanvas-backdrop";const OPEN_SELECTOR=".offcanvas.show";const EVENT_SHOW$3=`show${EVENT_KEY$3}`;const EVENT_SHOWN$3=`shown${EVENT_KEY$3}`;const EVENT_HIDE$3=`hide${EVENT_KEY$3}`;const EVENT_HIDE_PREVENTED=`hidePrevented${EVENT_KEY$3}`;const EVENT_HIDDEN$3=`hidden${EVENT_KEY$3}`;const EVENT_RESIZE=`resize${EVENT_KEY$3}`;const EVENT_CLICK_DATA_API$1=`click${EVENT_KEY$3}${DATA_API_KEY$1}`;const EVENT_KEYDOWN_DISMISS=`keydown.dismiss${EVENT_KEY$3}`;
const SELECTOR_DATA_TOGGLE$1='[data-bs-toggle\x3d"offcanvas"]';const Default$5={backdrop:true,keyboard:true,scroll:false};const DefaultType$5={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Offcanvas extends BaseComponent{tatic get Default(){return Default$5}static get DefaultType(){return DefaultType$5}static get NAME(){return NAME$6}how(relatedTarget){if(this._isShown)return;const showEvent=EventHandler.trigger(this._element,EVENT_SHOW$3,{relatedTarget});if(showEvent.defaultPrevented)return;this._isShown=true;this._backdrop.show();if(!this._config.scroll)(new ScrollBarHelper).hide();this._element.setAttribute("aria-modal",true);this._element.setAttribute("role","dialog");this._element.classList.add(CLASS_NAME_SHOWING$1);const completeCallBack=()=>{if(!this._config.scroll||this._config.backdrop)this._focustrap.activate();
this._element.classList.add(CLASS_NAME_SHOW$3);this._element.classList.remove(CLASS_NAME_SHOWING$1);EventHandler.trigger(this._element,EVENT_SHOWN$3,{relatedTarget})};this._queueCallback(completeCallBack,this._element,true)}hide(){if(!this._isShown)return;const hideEvent=EventHandler.trigger(this._element,EVENT_HIDE$3);if(hideEvent.defaultPrevented)return;this._focustrap.deactivate();this._element.blur();this._isShown=false;this._element.classList.add(CLASS_NAME_HIDING);this._backdrop.hide();const completeCallback=
()=>{this._element.classList.remove(CLASS_NAME_SHOW$3,CLASS_NAME_HIDING);this._element.removeAttribute("aria-modal");this._element.removeAttribute("role");if(!this._config.scroll)(new ScrollBarHelper).reset();EventHandler.trigger(this._element,EVENT_HIDDEN$3)};this._queueCallback(completeCallback,this._element,true)}dEventListeners(){EventHandler.on(this._element,EVENT_KEYDOWN_DISMISS,event=>{if(event.key!==ESCAPE_KEY)return;if(!this._config.keyboard){EventHandler.trigger(this._element,EVENT_HIDE_PREVENTED);
return}this.hide()})}static jQueryInterface(config){return this.each(function(){const data=Offcanvas.getOrCreateInstance(this,config);if(typeof config!=="string")return;if(data[config]===undefined||config.startsWith("_")||config==="constructor")throw new TypeError(`No method named "${config}"`);data[config](this)})}}EventHandler.on(document,EVENT_CLICK_DATA_API$1,SELECTOR_DATA_TOGGLE$1,function(event){const target=getElementFromSelector(this);if(["A","AREA"].includes(this.tagName))event.preventDefault();
if(isDisabled(this))return;EventHandler.one(target,EVENT_HIDDEN$3,()=>{if(isVisible(this))this.focus()});const alreadyOpen=SelectorEngine.findOne(OPEN_SELECTOR);if(alreadyOpen&&alreadyOpen!==target)Offcanvas.getInstance(alreadyOpen).hide();const data=Offcanvas.getOrCreateInstance(target);data.toggle(this)});EventHandler.on(window,EVENT_LOAD_DATA_API$2,;EventHandler.on(window,EVENT_RESIZE,
()=>{for(const element of SelectorEngine.find("[aria-modal][class*\x3dshow][class*\x3doffcanvas-]"))if(getComputedStyle(element).position!=="fixed")Offcanvas.getOrCreateInstance(element).hide()});enableDismissTrigger(Offcanvas);defineJQueryPlugin(Offcanvas);const uriAttributes=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]);const ARIA_ATTRIBUTE_PATTERN=/^aria-[\w-]*$/i;const SAFE_URL_PATTERN=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;const DATA_URL_PATTERN=
/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;const allowedAttribute=(attribute,allowedAttributeList)=>{const attributeName=attribute.nodeName.toLowerCase();if(allowedAttributeList.includes(attributeName)){if(uriAttributes.has(attributeName))return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue)||DATA_URL_PATTERN.test(attribute.nodeValue));return true}return allowedAttributeList.filter(.some(regex=>regex.test(attributeName))};const DefaultAllowlist={"*":["class","dir","id","lang","role",ARIA_ATTRIBUTE_PATTERN],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};const NAME$5="TemplateFactory";const Default$4={allowList:DefaultAllowlist,content:{},extraClass:"",html:false,
sanitize:true,sanitizeFn:null,template:"\x3cdiv\x3e\x3c/div\x3e"};const DefaultType$4={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"};const DefaultContentType={entry:"(string|element|function|null)",selector:"(string|element)"};class TemplateFactory extends Config{tatic get Default(){return Default$4}static get DefaultType(){return DefaultType$4}static get NAME(){return NAME$5}tml(){const templateWrapper=document.createElement("div");templateWrapper.innerHTML=this._maybeSanitize(this._config.template);for(const [selector,text]of Object.entries(this._config.content))this._setContent(templateWrapper,text,selector);const template=templateWrapper.children[0];
const extraClass=this._resolvePossibleFunction(this._config.extraClass);if(extraClass)template.classList.add(...extraClass.split(" "));return template}etContent(template,content,selector){const templateElement=SelectorEngine.findOne(selector,template);if(!templateElement)return;
content=this._resolvePossibleFunction(content);if(!content){templateElement.remove();return}if(isElement$1(content)){this._putElementInTemplate(getElement(content),templateElement);return}if(this._config.html){templateElement.innerHTML=this._maybeSanitize(content);return}templateElement.textContent=content}nst NAME$4="tooltip";const DISALLOWED_ATTRIBUTES=new Set(["sanitize","allowList","sanitizeFn"]);const CLASS_NAME_FADE$2="fade";const CLASS_NAME_MODAL="modal";const CLASS_NAME_SHOW$2="show";const SELECTOR_TOOLTIP_INNER=".tooltip-inner";const SELECTOR_MODAL=`.${CLASS_NAME_MODAL}`;const EVENT_MODAL_HIDE="hide.bs.modal";const TRIGGER_HOVER="hover";
const TRIGGER_FOCUS="focus";const TRIGGER_CLICK="click";const TRIGGER_MANUAL="manual";const EVENT_HIDE$2="hide";const EVENT_HIDDEN$2="hidden";const EVENT_SHOW$2="show";const EVENT_SHOWN$2="shown";const EVENT_INSERTED="inserted";const EVENT_CLICK$1="click";const EVENT_FOCUSIN$1="focusin";const EVENT_FOCUSOUT$1="focusout";const EVENT_MOUSEENTER="mouseenter";const EVENT_MOUSELEAVE="mouseleave";const AttachmentMap={AUTO:"auto",TOP:"top",RIGHT:isRTL()?"left":"right",BOTTOM:"bottom",LEFT:isRTL()?"right":
"left"};const Default$3={allowList:DefaultAllowlist,animation:true,boundary:"clippingParents",container:false,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:false,offset:[0,0],placement:"top",popperConfig:null,sanitize:true,sanitizeFn:null,selector:false,template:'\x3cdiv class\x3d"tooltip" role\x3d"tooltip"\x3e'+'\x3cdiv class\x3d"tooltip-arrow"\x3e\x3c/div\x3e'+'\x3cdiv class\x3d"tooltip-inner"\x3e\x3c/div\x3e'+"\x3c/div\x3e",title:"",trigger:"hover focus"};const DefaultType$3=
{allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Tooltip extends BaseComponent{constructor(element,
config){if(typeof Popper==="undefined")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(element,config);this._isEnabled=true;this._timeout=0;this._isHovered=null;this._activeTrigger={};this._popper=null;this._templateFactory=null;this._newContent=null;this.tip=null;this._setListeners();if(!this._config.selector)this._fixTitle()}static get Default(){return Default$3}static get DefaultType(){return DefaultType$3}static get NAME(){return NAME$4}enable(){this._isEnabled=
true}ggle(){if(!this._isEnabled)return;this._activeTrigger.click=!this._activeTrigger.click;if(this._isShown()){this._leave();return}this._enter()}dispose(){clearTimeout(this._timeout);EventHandler.off(this._element.closest(SELECTOR_MODAL),EVENT_MODAL_HIDE,this._hideModalHandler);if(this.tip)this.tip.remove();if(this._element.getAttribute("data-bs-original-title"))this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title"));
this._disposePopper();super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const showEvent=EventHandler.trigger(this._element,this.constructor.eventName(EVENT_SHOW$2));const shadowRoot=findShadowRoot(this._element);const isInTheDom=(shadowRoot||this._element.ownerDocument.documentElement).contains(this._element);if(showEvent.defaultPrevented||!isInTheDom)return;if(this.tip){this.tip.remove();
this.tip=null}const tip=this._getTipElement();this._element.setAttribute("aria-describedby",tip.getAttribute("id"));const {container}=this._config;if(!this._element.ownerDocument.documentElement.contains(this.tip)){container.append(tip);EventHandler.trigger(this._element,this.constructor.eventName(EVENT_INSERTED))}if(this._popper)this._popper.update();else this._popper=this._createPopper(tip);tip.classList.add(CLASS_NAME_SHOW$2);if("ontouchstart"in document.documentElement)for(const element of[].concat(...document.body.children))EventHandler.on(element,
"mouseover",noop);const complete=()=>{EventHandler.trigger(this._element,this.constructor.eventName(EVENT_SHOWN$2));if(this._isHovered===false)this._leave();this._isHovered=false};this._queueCallback(complete,this.tip,this._isAnimated())}hide(){if(!this._isShown())return;const hideEvent=EventHandler.trigger(this._element,this.constructor.eventName(EVENT_HIDE$2));if(hideEvent.defaultPrevented)return;const tip=this._getTipElement();tip.classList.remove(CLASS_NAME_SHOW$2);if("ontouchstart"in document.documentElement)for(const element of[].concat(...document.body.children))EventHandler.off(element,
"mouseover",noop);this._activeTrigger[TRIGGER_CLICK]=false;this._activeTrigger[TRIGGER_FOCUS]=false;this._activeTrigger[TRIGGER_HOVER]=false;this._isHovered=null;const complete=()=>{if(this._isWithActiveTrigger())return;if(!this._isHovered)tip.remove();this._element.removeAttribute("aria-describedby");EventHandler.trigger(this._element,this.constructor.eventName(EVENT_HIDDEN$2));this._disposePopper()};this._queueCallback(complete,this.tip,this._isAnimated())}etTipElement(){if(!this.tip)this.tip=
this._createTipElement(this._newContent||this._getContentForTemplate());return this.tip}_createTipElement(content){const tip=this._getTemplateFactory(content).toHtml();if(!tip)return null;tip.classList.remove(CLASS_NAME_FADE$2,CLASS_NAME_SHOW$2);tip.classList.add(`bs-${this.constructor.NAME}-auto`);const tipId=getUID(this.constructor.NAME).toString();tip.setAttribute("id",tipId);if(this._isAnimated())tip.classList.add(CLASS_NAME_FADE$2);return tip}getTemplateFactory(content){if(this._templateFactory)this._templateFactory.changeContent(content);else this._templateFactory=new TemplateFactory({...this._config,content,extraClass:this._resolvePossibleFunction(this._config.customClass)});return this._templateFactory}tePopper(tip){const placement=typeof this._config.placement==="function"?this._config.placement.call(this,tip,this._element):this._config.placement;const attachment=AttachmentMap[placement.toUpperCase()];return createPopper(this._element,tip,this._getPopperConfig(attachment))}_getOffset(){const {offset}=
this._config;if(typeof offset==="string")return offset.split(",").map(;if(typeof offset==="function")return return offset}etListeners(){const triggers=this._config.trigger.split(" ");
for(const trigger of triggers)if(trigger==="click")EventHandler.on(this._element,this.constructor.eventName(EVENT_CLICK$1),this._config.selector,;else if(trigger!==TRIGGER_MANUAL){const eventIn=trigger===TRIGGER_HOVER?this.constructor.eventName(EVENT_MOUSEENTER):this.constructor.eventName(EVENT_FOCUSIN$1);const eventOut=trigger===TRIGGER_HOVER?this.constructor.eventName(EVENT_MOUSELEAVE):this.constructor.eventName(EVENT_FOCUSOUT$1);
EventHandler.on(this._element,eventIn,this._config.selector,;EventHandler.on(this._element,eventOut,this._config.selector,}this._hideModalHandler=
()=>{if(this._element)this.hide()};EventHandler.on(this._element.closest(SELECTOR_MODAL),EVENT_MODAL_HIDE,this._hideModalHandler)}_fixTitle(){const title=this._element.getAttribute("title");if(!title)return;if(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim())this._element.setAttribute("aria-label",title);this._element.setAttribute("data-bs-original-title",title);this._element.removeAttribute("title")}_enter(){if(this._isShown()||this._isHovered){this._isHovered=true;return}this._isHovered=
true;this._setTimeout(this._config.delay.show)}_leave(){if(this._isWithActiveTrigger())return;this._isHovered=false;this._setTimeout(()=>{if(!this._isHovered)this.hide()},this._config.delay.hide)}etConfig(config){const dataAttributes=Manipulator.getDataAttributes(this._element);for(const dataAttribute of Object.keys(dataAttributes))if(DISALLOWED_ATTRIBUTES.has(dataAttribute))delete dataAttributes[dataAttribute];
config={...dataAttributes,...(typeof config==="object"&&config?config:{})};config=this._mergeConfigObj(config);config=this._configAfterMerge(config);this._typeCheckConfig(config);return config}_configAfterMerge(config){config.container=config.container===false?document.body:getElement(config.container);if(typeof config.delay==="number")config.delay={show:config.delay,hide:config.delay};if(typeof config.title==="number")config.title=config.title.toString();if(typeof config.content==="number")config.content=
config.content.toString();return config}_getDelegateConfig(){const config={};for(const key in this._config)if(this.constructor.Default[key]!==this._config[key])config[key]=this._config[key];config.selector=false;config.trigger="manual";return config}tatic jQueryInterface(config){return this.each(function(){const data=Tooltip.getOrCreateInstance(this,config);if(typeof config!=="string")return;if(typeof data[config]==="undefined")throw new TypeError(`No method named "${config}"`);
data[config]()})}}defineJQueryPlugin(Tooltip);const NAME$3="popover";const SELECTOR_TITLE=".popover-header";const SELECTOR_CONTENT=".popover-body";const Default$2={...Tooltip.Default,content:"",offset:[0,8],placement:"right",template:'\x3cdiv class\x3d"popover" role\x3d"tooltip"\x3e'+'\x3cdiv class\x3d"popover-arrow"\x3e\x3c/div\x3e'+'\x3ch3 class\x3d"popover-header"\x3e\x3c/h3\x3e'+'\x3cdiv class\x3d"popover-body"\x3e\x3c/div\x3e'+"\x3c/div\x3e",trigger:"click"};const DefaultType$2={...Tooltip.DefaultType,
content:"(null|string|element|function)"};class Popover extends Tooltip{static get Default(){return Default$2}static get DefaultType(){return DefaultType$2}static get NAME(){return NAME$3}tic jQueryInterface(config){return this.each(function(){const data=Popover.getOrCreateInstance(this,
config);if(typeof config!=="string")return;if(typeof data[config]==="undefined")throw new TypeError(`No method named "${config}"`);data[config]()})}}defineJQueryPlugin(Popover);const NAME$2="scrollspy";const DATA_KEY$2="bs.scrollspy";const EVENT_KEY$2=`.${DATA_KEY$2}`;const DATA_API_KEY=".data-api";const EVENT_ACTIVATE=`activate${EVENT_KEY$2}`;const EVENT_CLICK=`click${EVENT_KEY$2}`;const EVENT_LOAD_DATA_API$1=`load${EVENT_KEY$2}${DATA_API_KEY}`;const CLASS_NAME_DROPDOWN_ITEM="dropdown-item";const CLASS_NAME_ACTIVE$1=
"active";const SELECTOR_DATA_SPY='[data-bs-spy\x3d"scroll"]';const SELECTOR_TARGET_LINKS="[href]";const SELECTOR_NAV_LIST_GROUP=".nav, .list-group";const SELECTOR_NAV_LINKS=".nav-link";const SELECTOR_NAV_ITEMS=".nav-item";const SELECTOR_LIST_ITEMS=".list-group-item";const SELECTOR_LINK_ITEMS=`${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;const SELECTOR_DROPDOWN=".dropdown";const SELECTOR_DROPDOWN_TOGGLE$1=".dropdown-toggle";const Default$1={offset:null,
rootMargin:"0px 0px -25%",smoothScroll:false,target:null,threshold:[.1,.5,1]};const DefaultType$1={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class ScrollSpy extends BaseComponent{tatic get Default(){return Default$1}static get DefaultType(){return DefaultType$1}static get NAME(){return NAME$2}refresh(){this._initializeTargetsAndObservables();this._maybeEnableSmoothScroll();if(this._observer)this._observer.disconnect();else this._observer=this._getNewObserver();for(const section of this._observableSections.values())this._observer.observe(section)}configAfterMerge(config){config.target=
getElement(config.target)||document.body;config.rootMargin=config.offset?`${config.offset}px 0px -30%`:config.rootMargin;if(typeof config.threshold==="string")config.threshold=config.threshold.split(",").map(;return config}_maybeEnableSmoothScroll(){if(!this._config.smoothScroll)return;EventHandler.off(this._config.target,EVENT_CLICK);EventHandler.on(this._config.target,EVENT_CLICK,SELECTOR_TARGET_LINKS,}observerCallback(entries){const targetElement=const activate=const parentScrollTop=(this._rootElement||document.documentElement).scrollTop;const userScrollsDown=parentScrollTop>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=parentScrollTop;for(const entry of entries){if(!entry.isIntersecting){this._activeTarget=null;this._clearActiveClass(targetElement(entry));
continue}const entryIsLowerThanPrevious=entry.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(userScrollsDown&&entryIsLowerThanPrevious){activate(entry);if(!parentScrollTop)return;continue}if(!userScrollsDown&&!entryIsLowerThanPrevious)activate(entry)}}_initializeTargetsAndObservables(){this._targetLinks=new Map;this._observableSections=new Map;const targetLinks=SelectorEngine.find(SELECTOR_TARGET_LINKS,this._config.target);for(const anchor of targetLinks){if(!anchor.hash||isDisabled(anchor))continue;
const observableSection=SelectorEngine.findOne(anchor.hash,this._element);if(isVisible(observableSection)){this._targetLinks.set(anchor.hash,anchor);this._observableSections.set(anchor.hash,observableSection)}}}_process(target){if(this._activeTarget===target)return;this._clearActiveClass(this._config.target);this._activeTarget=target;target.classList.add(CLASS_NAME_ACTIVE$1);this._activateParents(target);EventHandler.trigger(this._element,EVENT_ACTIVATE,{relatedTarget:target})}_activateParents(target){if(target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)){SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1,
target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);return}for(const listGroup of SelectorEngine.parents(target,SELECTOR_NAV_LIST_GROUP))for(const item of SelectorEngine.prev(listGroup,SELECTOR_LINK_ITEMS))item.classList.add(CLASS_NAME_ACTIVE$1)}tatic jQueryInterface(config){return this.each(function(){const data=
ScrollSpy.getOrCreateInstance(this,config);if(typeof config!=="string")return;if(data[config]===undefined||config.startsWith("_")||config==="constructor")throw new TypeError(`No method named "${config}"`);data[config]()})}}EventHandler.on(window,EVENT_LOAD_DATA_API$1,()=>{for(const spy of SelectorEngine.find(SELECTOR_DATA_SPY))ScrollSpy.getOrCreateInstance(spy)});defineJQueryPlugin(ScrollSpy);const NAME$1="tab";const DATA_KEY$1="bs.tab";const EVENT_KEY$1=`.${DATA_KEY$1}`;const EVENT_HIDE$1=`hide${EVENT_KEY$1}`;
const EVENT_HIDDEN$1=`hidden${EVENT_KEY$1}`;const EVENT_SHOW$1=`show${EVENT_KEY$1}`;const EVENT_SHOWN$1=`shown${EVENT_KEY$1}`;const EVENT_CLICK_DATA_API=`click${EVENT_KEY$1}`;const EVENT_KEYDOWN=`keydown${EVENT_KEY$1}`;const EVENT_LOAD_DATA_API=`load${EVENT_KEY$1}`;const ARROW_LEFT_KEY="ArrowLeft";const ARROW_RIGHT_KEY="ArrowRight";const ARROW_UP_KEY="ArrowUp";const ARROW_DOWN_KEY="ArrowDown";const CLASS_NAME_ACTIVE="active";const CLASS_NAME_FADE$1="fade";const CLASS_NAME_SHOW$1="show";const CLASS_DROPDOWN=
"dropdown";const SELECTOR_DROPDOWN_TOGGLE=".dropdown-toggle";const SELECTOR_DROPDOWN_MENU=".dropdown-menu";const NOT_SELECTOR_DROPDOWN_TOGGLE=":not(.dropdown-toggle)";const SELECTOR_TAB_PANEL='.list-group, .nav, [role\x3d"tablist"]';const SELECTOR_OUTER=".nav-item, .list-group-item";const SELECTOR_INNER=`.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;const SELECTOR_DATA_TOGGLE='[data-bs-toggle\x3d"tab"], [data-bs-toggle\x3d"pill"], [data-bs-toggle\x3d"list"]';
const SELECTOR_INNER_ELEM=`${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;const SELECTOR_DATA_TOGGLE_ACTIVE=`.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;class Tab extends BaseComponent{constructor(element){super(element);this._parent=this._element.closest(SELECTOR_TAB_PANEL);if(!this._parent)return;this._setInitialAttributes(this._parent,this._getChildren());EventHandler.on(this._element,EVENT_KEYDOWN,event=>
this._keydown(event))}static get NAME(){return NAME$1}show(){const innerElem=this._element;if(this._elemIsActive(innerElem))return;const active=this._getActiveElem();const hideEvent=active?EventHandler.trigger(active,EVENT_HIDE$1,{relatedTarget:innerElem}):null;const showEvent=EventHandler.trigger(innerElem,EVENT_SHOW$1,{relatedTarget:active});if(showEvent.defaultPrevented||hideEvent&&hideEvent.defaultPrevented)return;this._deactivate(active,innerElem);this._activate(innerElem,active)}_activate(element,
relatedElem){if(!element)return;element.classList.add(CLASS_NAME_ACTIVE);this._activate(getElementFromSelector(element));const complete=this._queueCallback(complete,element,element.classList.contains(CLASS_NAME_FADE$1))}_deactivate(element,
relatedElem){if(!element)return;element.classList.remove(CLASS_NAME_ACTIVE);element.blur();this._deactivate(getElementFromSelector(element));const complete=this._queueCallback(complete,element,element.classList.contains(CLASS_NAME_FADE$1))}_keydown(event){if(![ARROW_LEFT_KEY,
ARROW_RIGHT_KEY,ARROW_UP_KEY,ARROW_DOWN_KEY].includes(event.key))return;event.stopPropagation();event.preventDefault();const isNext=[ARROW_RIGHT_KEY,ARROW_DOWN_KEY].includes(event.key);const nextActiveElement=getNextActiveElement(this._getChildren().filter(,event.target,isNext,true);if(nextActiveElement){nextActiveElement.focus({preventScroll:true});Tab.getOrCreateInstance(nextActiveElement).show()}}tInitialAttributesOnChild(child){child=this._getInnerElement(child);const isActive=this._elemIsActive(child);const outerElem=this._getOuterElement(child);child.setAttribute("aria-selected",isActive);if(outerElem!==child)this._setAttributeIfNotExists(outerElem,"role","presentation");if(!isActive)child.setAttribute("tabindex",
"-1");this._setAttributeIfNotExists(child,"role","tab");this._setInitialAttributesOnTargetPanel(child)}_setInitialAttributesOnTargetPanel(child){const target=getElementFromSelector(child);if(!target)return;this._setAttributeIfNotExists(target,"role","tabpanel");if(child.id)this._setAttributeIfNotExists(target,"aria-labelledby",`#${child.id}`)}_toggleDropDown(element$jscomp$0,open){const outerElem=this._getOuterElement(element$jscomp$0);if(!outerElem.classList.contains(CLASS_DROPDOWN))return;const toggle=
(selector,className)=>{const element=SelectorEngine.findOne(selector,outerElem);if(element)element.classList.toggle(className,open)};toggle(SELECTOR_DROPDOWN_TOGGLE,CLASS_NAME_ACTIVE);toggle(SELECTOR_DROPDOWN_MENU,CLASS_NAME_SHOW$1);outerElem.setAttribute("aria-expanded",open)}_setAttributeIfNotExists(element,attribute,value){if(!element.hasAttribute(attribute))element.setAttribute(attribute,value)}tic jQueryInterface(config){return this.each(function(){const data=Tab.getOrCreateInstance(this);if(typeof config!=="string")return;if(data[config]===undefined||config.startsWith("_")||config==="constructor")throw new TypeError(`No method named "${config}"`);data[config]()})}}EventHandler.on(document,EVENT_CLICK_DATA_API,SELECTOR_DATA_TOGGLE,function(event){if(["A","AREA"].includes(this.tagName))event.preventDefault();
if(isDisabled(this))return;Tab.getOrCreateInstance(this).show()});EventHandler.on(window,EVENT_LOAD_DATA_API,;defineJQueryPlugin(Tab);const NAME="toast";const DATA_KEY="bs.toast";const EVENT_KEY=`.${DATA_KEY}`;const EVENT_MOUSEOVER=`mouseover${EVENT_KEY}`;const EVENT_MOUSEOUT=`mouseout${EVENT_KEY}`;const EVENT_FOCUSIN=`focusin${EVENT_KEY}`;const EVENT_FOCUSOUT=`focusout${EVENT_KEY}`;const EVENT_HIDE=
`hide${EVENT_KEY}`;const EVENT_HIDDEN=`hidden${EVENT_KEY}`;const EVENT_SHOW=`show${EVENT_KEY}`;const EVENT_SHOWN=`shown${EVENT_KEY}`;const CLASS_NAME_FADE="fade";const CLASS_NAME_HIDE="hide";const CLASS_NAME_SHOW="show";const CLASS_NAME_SHOWING="showing";const DefaultType={animation:"boolean",autohide:"boolean",delay:"number"};const Default={animation:true,autohide:true,delay:5E3};class Toast extends BaseComponent{tatic get Default(){return Default}static get DefaultType(){return DefaultType}how(){const showEvent=EventHandler.trigger(this._element,EVENT_SHOW);if(showEvent.defaultPrevented)return;this._clearTimeout();if(this._config.animation)this._element.classList.add(CLASS_NAME_FADE);const complete=
this._element.classList.remove(CLASS_NAME_HIDE);reflow(this._element);this._element.classList.add(CLASS_NAME_SHOW,CLASS_NAME_SHOWING);this._queueCallback(complete,this._element,this._config.animation)}hide(){if(!this.isShown())return;const hideEvent=EventHandler.trigger(this._element,EVENT_HIDE);if(hideEvent.defaultPrevented)return;const complete=this._element.classList.add(CLASS_NAME_SHOWING);this._queueCallback(complete,this._element,this._config.animation)}dispose(){this._clearTimeout();if(this.isShown())this._element.classList.remove(CLASS_NAME_SHOW);super.dispose()}maybeScheduleHide(){if(!this._config.autohide)return;if(this._hasMouseInteraction||this._hasKeyboardInteraction)return;this._timeout=setTimeout(this._config.delay)}_onInteraction(event,
isInteracting){switch(event.type){case "mouseover":case "mouseout":{this._hasMouseInteraction=isInteracting;break}case "focusin":case "focusout":{this._hasKeyboardInteraction=isInteracting;break}}if(isInteracting){this._clearTimeout();return}const nextElement=event.relatedTarget;if(this._element===nextElement||this._element.contains(nextElement))return;this._maybeScheduleHide()}atic jQueryInterface(config){return this.each(function(){const data=Toast.getOrCreateInstance(this,config);if(typeof config==="string"){if(typeof data[config]==="undefined")throw new TypeError(`No method named "${config}"`);
data[config](this)}})}}enableDismissTrigger(Toast);defineJQueryPlugin(Toast);const index_umd={Alert,Button,Carousel,Collapse,Dropdown,Modal,Offcanvas,Popover,ScrollSpy,Tab,Toast,Tooltip};return index_umd});/*
 modernizr v3.6.0
 Build https://modernizr.com/download?-applicationcache-audio-backgroundsize-bgsizecover-borderimage-borderradius-canvasblending-canvaswinding-cookies-csscolumns-cssgradients-csspointerevents-csspseudoanimations-csspseudotransitions-cssreflections-cssremunit-csstransforms-csstransforms3d-csstransitions-eventlistener-flexbox-flexboxtweener-fontface-generatedcontent-generators-geolocation-hashchange-history-hsla-indexeddb-inlinesvg-input-inputtypes-localstorage-multiplebgs-pointerevents-postmessage-preserve3d-rgba-sessionstorage-siblinggeneral-smil-svg-svgclippaths-textshadow-todataurljpeg_todataurlpng_todataurlwebp-touchevents-video-webaudio-webgl-webp-webpalpha-websockets-websqldatabase-webworkers-hasevent-mq-setclasses-testprop-dontmin

 Copyright (c)
  Faruk Ates
  Paul Irish
  Alex Sexton
  Ryan Seddon
  Patrick Kettner
  Stu Cox
  Richard Herrera

 MIT License
 {
  "name": "Application Cache",
  "property": "applicationcache",
  "caniuse": "offline-apps",
  "tags": ["storage", "offline"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/docs/HTML/Using_the_application_cache"
  }],
  "polyfills": ["html5gears"]
}
! {
  "name": "Cookies",
  "property": "cookies",
  "tags": ["storage"],
  "authors": ["tauren"]
}
! {
  "name": "Event Listener",
  "property": "eventlistener",
  "authors": ["Andrew Betts (@triblondon)"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Registration-interfaces"
  }],
  "polyfills": ["eventlistener"]
}
! {
  "name": "Geolocation API",
  "property": "geolocation",
  "caniuse": "geolocation",
  "tags": ["media"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation"
  }],
  "polyfills": [
    "joshuabell-polyfill",
    "webshims",
    "geo-location-javascript",
    "geolocation-api-polyfill"
  ]
}
! {
  "name": "History API",
  "property": "history",
  "caniuse": "history",
  "tags": ["history"],
  "authors": ["Hay Kranen", "Alexander Farkas"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/html51/browsers.html#the-history-interface"
  }, {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.history"
  }],
  "polyfills": ["historyjs", "html5historyapi"]
}
! {
  "name": "ES6 Generators",
  "property": "generators",
  "authors": ["Michael Kachanovskyi"],
  "tags": ["es6"]
}
! {
  "name": "Local Storage",
  "property": "localstorage",
  "caniuse": "namevalue-storage",
  "tags": ["storage"],
  "knownBugs": [],
  "notes": [],
  "warnings": [],
  "polyfills": [
    "joshuabell-polyfill",
    "cupcake",
    "storagepolyfill",
    "amplifyjs",
    "yui-cacheoffline"
  ]
}
! {
  "name": "Session Storage",
  "property": "sessionstorage",
  "tags": ["storage"],
  "polyfills": ["joshuabell-polyfill", "cupcake", "sessionstorage"]
}
! {
  "name": "postMessage",
  "property": "postmessage",
  "caniuse": "x-doc-messaging",
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/html5/comms.html#posting-messages"
  }],
  "polyfills": ["easyxdm", "postmessage-jquery"]
}
! {
  "name": "Web SQL Database",
  "property": "websqldatabase",
  "caniuse": "sql-storage",
  "tags": ["storage"]
}
! {
  "name": "SVG",
  "property": "svg",
  "caniuse": "svg",
  "tags": ["svg"],
  "authors": ["Erik Dahlstrom"],
  "polyfills": [
    "svgweb",
    "raphael",
    "amplesdk",
    "canvg",
    "svg-boilerplate",
    "sie",
    "dojogfx",
    "fabricjs"
  ]
}
! {
  "name": "Web Workers",
  "property": "webworkers",
  "caniuse" : "webworkers",
  "tags": ["performance", "workers"],
  "notes": [{
    "name": "W3C Reference",
    "href": "https://www.w3.org/TR/workers/"
  }, {
    "name": "HTML5 Rocks article",
    "href": "http://www.html5rocks.com/en/tutorials/workers/basics/"
  }, {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers"
  }],
  "polyfills": ["fakeworker", "html5shims"]
}
! {
  "name": "WebSockets Support",
  "property": "websockets",
  "authors": ["Phread [fearphage]", "Mike Sherov [mikesherov]", "Burak Yigit Kaya [BYK]"],
  "caniuse": "websockets",
  "tags": ["html5"],
  "warnings": [
    "This test will reject any old version of WebSockets even if it is not prefixed such as in Safari 5.1"
  ],
  "notes": [{
    "name": "CLOSING State and Spec",
    "href": "https://www.w3.org/TR/websockets/#the-websocket-interface"
  }],
  "polyfills": [
    "sockjs",
    "socketio",
    "kaazing-websocket-gateway",
    "websocketjs",
    "atmosphere",
    "graceful-websocket",
    "portal",
    "datachannel"
  ]
}
! {
  "name": "Web Audio API",
  "property": "webaudio",
  "caniuse": "audio-api",
  "polyfills": ["xaudiojs", "dynamicaudiojs", "audiolibjs"],
  "tags": ["audio", "media"],
  "builderAliases": ["audio_webaudio_api"],
  "authors": ["Addy Osmani"],
  "notes": [{
    "name": "W3 Specification",
    "href": "https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html"
  }]
}
! {
  "name": "Hashchange event",
  "property": "hashchange",
  "caniuse": "hashchange",
  "tags": ["history"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.onhashchange"
  }],
  "polyfills": [
    "jquery-hashchange",
    "moo-historymanager",
    "jquery-ajaxy",
    "hasher",
    "shistory"
  ]
}
! {
  "name" : "HTML5 Audio Element",
  "property": "audio",
  "tags" : ["html5", "audio", "media"]
}
! {
  "name": "CSS Transform Style preserve-3d",
  "property": "preserve3d",
  "authors": ["denyskoch", "aFarkas"],
  "tags": ["css"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/1748"
  }]
}
! {
  "name": "Inline SVG",
  "property": "inlinesvg",
  "caniuse": "svg-html5",
  "tags": ["svg"],
  "notes": [{
    "name": "Test page",
    "href": "https://paulirish.com/demo/inline-svg"
  }, {
    "name": "Test page and results",
    "href": "https://codepen.io/eltonmesquita/full/GgXbvo/"
  }],
  "polyfills": ["inline-svg-polyfill"],
  "knownBugs": ["False negative on some Chromia browsers."]
}
! {
  "name": "HTML5 Video",
  "property": "video",
  "caniuse": "video",
  "tags": ["html5"],
  "knownBugs": [
    "Without QuickTime, `Modernizr.video.h264` will be `undefined`; https://github.com/Modernizr/Modernizr/issues/546"
  ],
  "polyfills": [
    "html5media",
    "mediaelementjs",
    "sublimevideo",
    "videojs",
    "leanbackplayer",
    "videoforeverybody"
  ]
}
! {
  "name": "WebGL",
  "property": "webgl",
  "caniuse": "webgl",
  "tags": ["webgl", "graphics"],
  "polyfills": ["jebgl", "cwebgl", "iewebgl"]
}
! {
  "name": "CSS Multiple Backgrounds",
  "caniuse": "multibackgrounds",
  "property": "multiplebgs",
  "tags": ["css"]
}
! {
  "name": "CSS Pointer Events",
  "caniuse": "pointer-events",
  "property": "csspointerevents",
  "authors": ["ausi"],
  "tags": ["css"],
  "builderAliases": ["css_pointerevents"],
  "notes": [
    {
      "name": "MDN Docs",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events"
    },{
      "name": "Test Project Page",
      "href": "https://ausi.github.com/Feature-detection-technique-for-pointer-events/"
    },{
      "name": "Test Project Wiki",
      "href": "https://github.com/ausi/Feature-detection-technique-for-pointer-events/wiki"
    },
    {
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/80"
    }
  ]
}
! {
  "name": "CSS Font rem Units",
  "caniuse": "rem",
  "authors": ["nsfmc"],
  "property": "cssremunit",
  "tags": ["css"],
  "builderAliases": ["css_remunit"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/css3-values/#relative0"
  },{
    "name": "Font Size with rem by Jonathan Snook",
    "href": "http://snook.ca/archives/html_and_css/font-size-with-rem"
  }]
}
! {
  "name": "CSS rgba",
  "caniuse": "css3-colors",
  "property": "rgba",
  "tags": ["css"],
  "notes": [{
    "name": "CSSTricks Tutorial",
    "href": "https://css-tricks.com/rgba-browser-support/"
  }]
}
! {
  "name": "Input attributes",
  "property": "input",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "notes": [{
    "name": "WHATWG spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#input-type-attr-summary"
  }],
  "knownBugs": ["Some blackberry devices report false positive for input.multiple"]
}
! {
  "name": "Form input types",
  "property": "inputtypes",
  "caniuse": "forms",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "polyfills": [
    "jquerytools",
    "webshims",
    "h5f",
    "webforms2",
    "nwxforms",
    "fdslider",
    "html5slider",
    "galleryhtml5forms",
    "jscolor",
    "html5formshim",
    "selectedoptionsjs",
    "formvalidationjs"
  ]
}
! {
  "name": "CSS Supports",
  "property": "supports",
  "caniuse": "css-featurequeries",
  "tags": ["css"],
  "builderAliases": ["css_supports"],
  "notes": [{
    "name": "W3 Spec",
    "href": "http://dev.w3.org/csswg/css3-conditional/#at-supports"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/648"
  },{
    "name": "W3 Info",
    "href": "http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
  }]
}
! {
  "name": "SVG clip paths",
  "property": "svgclippaths",
  "tags": ["svg"],
  "notes": [{
    "name": "Demo",
    "href": "http://srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg"
  }]
}
! {
  "name": "SVG SMIL animation",
  "property": "smil",
  "caniuse": "svg-smil",
  "tags": ["svg"],
  "notes": [{
  "name": "W3C Synchronised Multimedia spec",
  "href": "https://www.w3.org/AudioVideo/"
  }]
}
! {
  "name": "CSS Gradients",
  "caniuse": "css-gradients",
  "property": "cssgradients",
  "tags": ["css"],
  "knownBugs": ["False-positives on webOS (https://github.com/Modernizr/Modernizr/issues/202)"],
  "notes": [{
    "name": "Webkit Gradient Syntax",
    "href": "https://webkit.org/blog/175/introducing-css-gradients/"
  },{
    "name": "Linear Gradient Syntax",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient"
  },{
    "name": "W3C Gradient Spec",
    "href": "https://drafts.csswg.org/css-images-3/#gradients"
  }]
}
! {
  "name": "Canvas",
  "property": "canvas",
  "caniuse": "canvas",
  "tags": ["canvas", "graphics"],
  "polyfills": ["flashcanvas", "excanvas", "slcanvas", "fxcanvas"]
}
! {
  "name": "canvas blending support",
  "property": "canvasblending",
  "tags": ["canvas"],
  "async" : false,
  "notes": [{
      "name": "HTML5 Spec",
      "href": "https://dvcs.w3.org/hg/FXTF/rawfile/tip/compositing/index.html#blending"
    },
    {
      "name": "Article",
      "href": "https://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas"
    }]
}
! {
  "name": "canvas.toDataURL type support",
  "property": ["todataurljpeg", "todataurlpng", "todataurlwebp"],
  "tags": ["canvas"],
  "builderAliases": ["canvas_todataurl_type"],
  "async" : false,
  "notes": [{
    "name": "MDN article",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement.toDataURL"
  }]
}
! {
  "name": "canvas winding support",
  "property": ["canvaswinding"],
  "tags": ["canvas"],
  "async" : false,
  "notes": [{
    "name": "Article",
    "href": "https://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/"
  }]
}
! {
  "name": "CSS HSLA Colors",
  "caniuse": "css3-colors",
  "property": "hsla",
  "tags": ["css"]
}
! {
  "name": "Touch Events",
  "property": "touchevents",
  "caniuse" : "touch",
  "tags": ["media", "attribute"],
  "notes": [{
    "name": "Touch Events spec",
    "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
  }],
  "warnings": [
    "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
  ],
  "knownBugs": [
    "False-positive on some configurations of Nokia N900",
    "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
  ]
}
! {
  "name": "@font-face",
  "property": "fontface",
  "authors": ["Diego Perini", "Mat Marquis"],
  "tags": ["css"],
  "knownBugs": [
    "False Positive: WebOS https://github.com/Modernizr/Modernizr/issues/342",
    "False Postive: WP7 https://github.com/Modernizr/Modernizr/issues/538"
  ],
  "notes": [{
    "name": "@font-face detection routine by Diego Perini",
    "href": "http://javascript.nwbox.com/CSSSupport/"
  },{
    "name": "Filament Group @font-face compatibility research",
    "href": "https://docs.google.com/presentation/d/1n4NyG4uPRjAA8zn_pSQ_Ket0RhcWC6QlZ6LMjKeECo0/edit#slide=id.p"
  },{
    "name": "Filament Grunticon/@font-face device testing results",
    "href": "https://docs.google.com/spreadsheet/ccc?key=0Ag5_yGvxpINRdHFYeUJPNnZMWUZKR2ItMEpRTXZPdUE#gid=0"
  },{
    "name": "CSS fonts on Android",
    "href": "https://stackoverflow.com/questions/3200069/css-fonts-on-android"
  },{
    "name": "@font-face and Android",
    "href": "http://archivist.incutio.com/viewlist/css-discuss/115960"
  }]
}
! {
  "name": "CSS Generated Content",
  "property": "generatedcontent",
  "tags": ["css"],
  "warnings": ["Android won't return correct height for anything below 7px #738"],
  "notes": [{
    "name": "W3C CSS Selectors Level 3 spec",
    "href": "https://www.w3.org/TR/css3-selectors/#gen-content"
  },{
    "name": "MDN article on :before",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
  },{
    "name": "MDN article on :after",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
  }]
}
! {
  "name": "CSS general sibling selector",
  "caniuse": "css-sel3",
  "property": "siblinggeneral",
  "tags": ["css"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/889"
  }]
}
! {
  "name": "Webp Alpha",
  "async": true,
  "property": "webpalpha",
  "aliases": ["webp-alpha"],
  "tags": ["image"],
  "authors": ["Krister Kari", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
  "notes": [{
    "name": "WebP Info",
    "href": "https://developers.google.com/speed/webp/"
  },{
    "name": "Article about WebP support on Android browsers",
    "href": "http://www.wope-framework.com/en/2013/06/24/webp-support-on-android-browsers/"
  },{
    "name": "Chromium WebP announcement",
    "href": "https://blog.chromium.org/2011/11/lossless-and-transparency-encoding-in.html?m=1"
  }]
}
! {
  "name": "Webp",
  "async": true,
  "property": "webp",
  "tags": ["image"],
  "builderAliases": ["img_webp"],
  "authors": ["Krister Kari", "@amandeep", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
  "notes": [{
    "name": "Webp Info",
    "href": "https://developers.google.com/speed/webp/"
  }, {
    "name": "Chormium blog - Chrome 32 Beta: Animated WebP images and faster Chrome for Android touch input",
    "href": "https://blog.chromium.org/2013/11/chrome-32-beta-animated-webp-images-and.html"
  }, {
    "name": "Webp Lossless Spec",
    "href": "https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification"
  }, {
    "name": "Article about WebP support on Android browsers",
    "href": "http://www.wope-framework.com/en/2013/06/24/webp-support-on-android-browsers/"
  }, {
    "name": "Chormium WebP announcement",
    "href": "https://blog.chromium.org/2011/11/lossless-and-transparency-encoding-in.html?m=1"
  }]
}
! {
  "name": "DOM Pointer Events API",
  "property": "pointerevents",
  "tags": ["input"],
  "authors": ["Stu Cox"],
  "notes": [
    {
      "name": "W3C Pointer Events",
      "href": "https://www.w3.org/TR/pointerevents/"
    },{
      "name": "W3C Pointer Events Level 2",
      "href": "https://www.w3.org/TR/pointerevents2/"
    },{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent"
  }],
  "warnings": ["This property name now refers to W3C DOM PointerEvents: https://github.com/Modernizr/Modernizr/issues/548#issuecomment-12812099"],
  "polyfills": ["pep"]
}
! {
  "name": "CSS textshadow",
  "property": "textshadow",
  "caniuse": "css-textshadow",
  "tags": ["css"],
  "knownBugs": ["FF3.0 will false positive on this test"]
}
! {
  "name": "IndexedDB",
  "property": "indexeddb",
  "caniuse": "indexeddb",
  "tags": ["storage"],
  "polyfills": ["indexeddb"],
  "async": true
}
! {
  "name": "CSS Transforms",
  "property": "csstransforms",
  "caniuse": "transforms2d",
  "tags": ["css"]
}
! {
  "name": "CSS Transforms 3D",
  "property": "csstransforms3d",
  "caniuse": "transforms3d",
  "tags": ["css"],
  "warnings": [
    "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
  ]
}
! {
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
! {
  "name": "CSS Generated Content Transitions",
  "property": "csspseudotransitions",
  "tags": ["css"]
}
! {
  "name": "Background Size",
  "property": "backgroundsize",
  "tags": ["css"],
  "knownBugs": ["This will false positive in Opera Mini - https://github.com/Modernizr/Modernizr/issues/396"],
  "notes": [{
    "name": "Related Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/396"
  }]
}
! {
  "name": "Background Size Cover",
  "property": "bgsizecover",
  "tags": ["css"],
  "builderAliases": ["css_backgroundsizecover"],
  "notes": [{
    "name" : "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/background-size"
  }]
}
! {
  "name": "Border Image",
  "property": "borderimage",
  "caniuse": "border-image",
  "polyfills": ["css3pie"],
   "knownBugs": ["Android < 2.0 is true, but has a broken implementation"],
  "tags": ["css"]
}
! {
  "name": "Border Radius",
  "property": "borderradius",
  "caniuse": "border-radius",
  "polyfills": ["css3pie"],
  "tags": ["css"],
  "notes": [{
    "name": "Comprehensive Compat Chart",
    "href": "https://muddledramblings.com/table-of-css3-border-radius-compliance"
  }]
}
! {
  "name": "CSS Columns",
  "property": "csscolumns",
  "caniuse": "multicolumn",
  "polyfills": ["css3multicolumnjs"],
  "tags": ["css"]
}
! {
  "name": "Flexbox",
  "property": "flexbox",
  "caniuse": "flexbox",
  "tags": ["css"],
  "notes": [{
    "name": "The _new_ flexbox",
    "href": "http://dev.w3.org/csswg/css3-flexbox"
  }],
  "warnings": [
    "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
  ]
}
! {
  "name": "Flexbox (tweener)",
  "property": "flexboxtweener",
  "tags": ["css"],
  "polyfills": ["flexie"],
  "notes": [{
    "name": "The _inbetween_ flexbox",
    "href": "https://www.w3.org/TR/2011/WD-css3-flexbox-20111129/"
  }],
  "warnings": ["This represents an old syntax, not the latest standard syntax."]
}
! {
  "name": "CSS Reflections",
  "caniuse": "css-reflections",
  "property": "cssreflections",
  "tags": ["css"]
}
! {
  "name": "CSS Animations",
  "property": "cssanimations",
  "caniuse": "css-animation",
  "polyfills": ["transformie", "csssandpaper"],
  "tags": ["css"],
  "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
  "notes": [{
    "name" : "Article: 'Dispelling the Android CSS animation myths'",
    "href": "https://goo.gl/OGw5Gm"
  }]
}
! {
  "name": "CSS Generated Content Animations",
  "property": "csspseudoanimations",
  "tags": ["css"]
}
!*/
(function(window,document,undefined}function testRunner(){var aliasIdx;var nameIdx;for(var featureIdx in tests)if(tests.hasOwnProperty(featureIdx)){var featureNames=[];var feature=tests[featureIdx];if(feature.name){featureNames.push(feature.name.toLowerCase());if(feature.options&&feature.options.aliases&&feature.options.aliases.length)for(aliasIdx=0;aliasIdx<feature.options.aliases.length;aliasIdx++)featureNames.push(feature.options.aliases[aliasIdx].toLowerCase())}var result=
is(feature.fn,"function")?feature.fn():feature.fn;for(nameIdx=0;nameIdx<featureNames.length;nameIdx++){var featureName=featureNames[nameIdx];var featureNameSplit=featureName.split(".");if(featureNameSplit.length===1)Modernizr[featureNameSplit[0]]=result;else{if(Modernizr[featureNameSplit[0]]&&!(Modernizr[featureNameSplit[0]]instanceof Boolean))Modernizr[featureNameSplit[0]]=new Boolean(Modernizr[featureNameSplit[0]]);Modernizr[featureNameSplit[0]][featureNameSplit[1]]=result}classes.push((result?
"":"no-")+featureNameSplit.join("-"))}}}function setClasses(classes){var className=docElement.className;var classPrefix=Modernizr._config.classPrefix||"";if(isSVG)className=className.baseVal;if(Modernizr._config.enableJSClass){var reJS=new RegExp("(^|\\s)"+classPrefix+"no-js(\\s|$)");className=className.replace(reJS,"$1"+classPrefix+"js$2")}if(Modernizr._config.enableClasses){className+=" "+classPrefix+classes.join(" "+classPrefix);if(isSVG)docElement.className.baseVal=className;else docElement.className=
className}}function createElement(){if(typeof document.createElement!=="function")return document.createElement(arguments[0]);else if(isSVG)return document.createElementNS.call(document,"http://www.w3.org/2000/svg",arguments[0]);else return document.createElement.apply(document,argumentsfunction injectElementWithStyles(rule,
callback,nodes,testnames){var mod="modernizr";var div=createElement("div");var body=getBody();if(parseInt(nodes,10))for(;nodes--;){var node=createElement("div");node.id=testnames?testnames[nodes]:mod+(nodes+1);div.appendChild(node)}var style=createElement("style");style.type="text/css";style.id="s"+mod;(!body.fake?div:body).appendChild(style);body.appendChild(div);if(style.styleSheet)style.styleSheet.cssText=rule;else style.appendChild(document.createTextNode(rule));div.id=mod;if(body.fake){body.style.background=
"";body.style.overflow="hidden";var docOverflow=docElement.style.overflow;docElement.style.overflow="hidden";docElement.appendChild(body)}var ret=callback(div,rule);if(body.fake){body.parentNode.removeChild(body);docElement.style.overflow=docOverflow;docElement.offsetHeight}else div.parentNode.removeChild(div);return!!re}function addTest(feature,test){if(typeof feature==
"object")for(var key in feature){if(hasOwnProp(feature,key))addTest(key,feature[key])}else{feature=feature.toLowerCase();var featureNameSplit=feature.split(".");var last=Modernizr[featureNameSplit[0]];if(featureNameSplit.length==2)last=last[featureNameSplit[1]];if(typeof last!="undefined")return Modernizr;test=typeof test=="function"?test():test;if(featureNameSplit.length==1)Modernizr[featureNameSplit[0]]=test;else{if(Modernizr[featureNameSplit[0]]&&!(Modernizr[featureNameSplit[0]]instanceof Boolean))Modernizr[featureNameSplit[0]]=
new Boolean(Modernizr[featureNameSplit[0]]);Modernizr[featureNameSplit[0]][featureNameSplit[1]]=test}setClasses([(!!test&&test!=false?"":"no-")+featureNameSplit.join("-")]);Modernizr._trigger(feature,test)}return Moderniz}function computedStyle(elem,pseudo,prop){if("getComputedStyle"in window){var result=getComputedStyle.call(window,elem,pseudo);var console=window.console;if(result!==
null){if(prop)result=result.getPropertyValue(prop)}else if(console){var method=console.error?"error":"log";console[method].call(console,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else result=!pseudo&&elem.currentStyle&&elem.currentStyle[prop];return result}function nativeTestProps(props,value){var i=props.length;if("CSS"in window&&"supports"in window.CSS){for(;i--;)if(window.CSS.supports(domToCSS(props[i]),value))return true;return false}else if("CSSSupportsRule"in
window){for(var conditionText=[];i--;)conditionText.push("("+domToCSS(props[i])+":"+value+")");conditionText=conditionText.join(" or ");return injectElementWithStyles("@supports ("+conditionText+") { #modernizr { position: absolute; } }})}return undefined}function testProps(props,prefixed,value,skipValueTest}skipValueTest=is(skipValueTest,"undefined")?
false:skipValueTest;if(!is(value,"undefined")){var result=nativeTestProps(props,value);if(!is(result,"undefined"))return result}var i;for(var elems=["modernizr","tspan","samp"];!mStyle.style&&elems.length;){var afterInit=true;mStyle.modElem=createElement(elems.shift());mStyle.style=mStyle.modElem.style}var propsLength=props.length;for(i=0;i<propsLength;i++){var prop=props[i];var before=mStyle.style[prop];if(contains(prop,"-"))prop=cssToDOM(prop);if(mStyle.style[prop]!==undefined)if(!skipValueTest&&
!is(value,"undefined")){try{mStyle.style[prop]=value}catch(e){}if(mStyle.style[prop]!=before){cleanElems();return prefixed=="pfx"?prop:true}}else{cleanElems();return prefixed=="pfx"?prop:true}}cleanElems();return fals}function testDOMProps(props,obj,elem){for(var i in props)if(props[i]in obj){if(elem===false)return props[i];var item=obj[props[i]];if(is(item,"function"))return fnBind(item,elem||obj);return item}return false}
function testPropsAll(prop,prefixed,elem,value,skipValueTest){var ucProp=prop.charAt(0).toUpperCase()+prop.slice(1);var props=(prop+" "+cssomPrefixes.join(ucProp+" ")+ucProp).split(" ");if(is(prefixed,"string")||is(prefixed,"undefined"))return testProps(props,prefixed,value,skipValueTest);else{props=(prop+" "+domPrefixes.join(ucProp+" ")+ucProp).split(" ");return testDOMProps(props,prefixed,elem)}}function detectDeleteDatabase(indexeddb,testDBName){var deleteReq=indexeddb.deleteDatabase(testDBName);
deleteReq.onsuccess=function(){addTest("indexeddb.deletedatabase",true)};deleteReq.onerro}var classes=[];var tests=[];var ModernizrProto={_version:"3.6.0",_config:{"classPrefix":"","enableClasses":true,"enableJSClass":true,"usePrefixes":true},_q:[],o},addTes},addAsyncTes}};var Moderniz};Modernizr.prototype=ModernizrProto;Modernizr=new Modernizr;Modernizr.addTest("applicationcache","applicationCache"in window);Modernizr.addTest("cookies",function(){try{document.cookie="cookietest\x3d1";var ret=document.cookie.indexOf("cookietest\x3d")!=-1;document.cookie="cookietest\x3d1; expires\x3dThu, 01-Jan-1970 00:00:01 GMT";return ret}catch(e){return false}});Modernizr.addTest("eventlistener",
"addEventListener"in window);Modernizr.addTest("geolocation","geolocation"in navigator);Modernizr.addTest("history",function(){var ua=navigator.userAgent;if((ua.indexOf("Android 2.")!==-1||ua.indexOf("Android 4.0")!==-1)&&ua.indexOf("Mobile Safari")!==-1&&ua.indexOf("Chrome")===-1&&ua.indexOf("Windows Phone")===-1&&location.protocol!=="file:")return false;return window.history&&"pushState"in window.history});Modernizr.addTest("generators",function(){try{(new Function("function* test() {}"))()}catch(e){return false}return true});
Modernizr.addTest("localstorage",function(){var mod="modernizr";try{localStorage.setItem(mod,mod);localStorage.removeItem(mod);return true}catch(e){return false}});Modernizr.addTest("sessionstorage});Modernizr.addTest("postmessage","postMessage"in window);Modernizr.addTest("websqldatabase","openDatabase"in window);Modernizr.addTest("svg",!!document.createElementNS&&
!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);Modernizr.addTest("webworkers","Worker"in window);var supports=false;try{supports="WebSocket"in window&&window.WebSocket.CLOSING===2}catch(e){}Modernizr.addTest("websockets",supports);Modernizr.addTest("webaudio",function(){var prefixed="webkitAudioContext"in window;var unprefixed="AudioContext"in window;if(Modernizr._config.usePrefixes)return prefixed||unprefixed;return unprefixed});var docElement=document.documentElement;
var isSVG=docElement.nodeName.toLowerCase()==="svg";var hasEvent=function(){function inner(eventName,element){if(!eventName)return false;if(!element||typeof element==="string")element=createElement(element||"div");eventName="on"+eventName;var isSupported=eventName in element;if(!isSupported&&needsFallback){if(!element.setAttribute)element=createElement("div");element.setAttribute(eventName,"");isSupported=typeof element[eventName]==="function";if(element[eventName]!==undefined)element[eventName]=
undefined;element.removeAttribute(eventName)}return isSupported}var needsFallback=!("onblur"in document.documentElement);return inner}();ModernizrProto.hasEvent=hasEvent;Modernizr.addTest("hashchange",function(){if(hasEvent("hashchange",window)===false)return false;return document.documentMode===undefined||document.documentMode>7});Modernizr.addTest("audio",function(){var elem=createElement("audio");var bool=false;try{bool=!!elem.canPlayType;if(bool){bool=new Boolean(bool);bool.ogg=elem.canPlayType('audio/ogg; codecs\x3d"vorbis"').replace(/^no$/,
"");bool.mp3=elem.canPlayType('audio/mpeg; codecs\x3d"mp3"').replace(/^no$/,"");bool.opus=elem.canPlayType('audio/ogg; codecs\x3d"opus"')||elem.canPlayType('audio/webm; codecs\x3d"opus"').replace(/^no$/,"");bool.wav=elem.canPlayType('audio/wav; codecs\x3d"1"').replace(/^no$/,"");bool.m4a=(elem.canPlayType("audio/x-m4a;")||elem.canPlayType("audio/aac;")).replace(/^no$/,"")}}catch(e){}return bool});Modernizr.addTest("preserve3d",function(){var CSS=window.CSS;var result=false;if(CSS&&CSS.supports&&CSS.supports("(transform-style: preserve-3d)"))return true;
var outerAnchor=createElement("a");var innerAnchor=createElement("a");outerAnchor.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);";innerAnchor.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);";outerAnchor.appendChild(innerAnchor);docElement.appendChild(outerAnchor);result=innerAnchor.getBoundingClientRect();docElement.removeChild(outerAnchor);result=result.width&&
result.width<4;return result});Modernizr.addTest("inlinesvg",function(){var div=createElement("div");div.innerHTML="\x3csvg/\x3e";return(typeof SVGRect!="undefined"&&div.firstChild&&div.firstChild.namespaceURI)=="http://www.w3.org/2000/svg"});Modernizr.addTest("video",function(){var elem=createElement("video");var bool=false;try{bool=!!elem.canPlayType;if(bool){bool=new Boolean(bool);bool.ogg=elem.canPlayType('video/ogg; codecs\x3d"theora"').replace(/^no$/,"");bool.h264=elem.canPlayType('video/mp4; codecs\x3d"avc1.42E01E"').replace(/^no$/,
"");bool.webm=elem.canPlayType('video/webm; codecs\x3d"vp8, vorbis"').replace(/^no$/,"");bool.vp9=elem.canPlayType('video/webm; codecs\x3d"vp9"').replace(/^no$/,"");bool.hls=elem.canPlayType('application/x-mpegURL; codecs\x3d"avc1.42E01E"').replace(/^no$/,"")}}catch(e){}return bool});Modernizr.addTest("webgl",function(){var canvas=createElement("canvas");var supports="probablySupportsContext"in canvas?"probablySupportsContext":"supportsContext";if(supports in canvas)return canvas[supports]("webgl")||
canvas[supports]("experimental-webgl");return"WebGLRenderingContext"in window});Modernizr.addTest("multiplebgs",function(){var style=createElement("a").style;style.cssText="background:url(https://),url(https://),red url(https://)";return/(url\s*\(.*?){3}/.test(style.background)});Modernizr.addTest("csspointerevents",function(){var style=createElement("a").style;style.cssText="pointer-events:auto";return style.pointerEvents==="auto"});Modernizr.addTest("cssremunit});Modernizr.addTest("rgba",function(){var style=createElement("a").style;style.cssText="background-color:rgba(150,255,150,.5)";return(""+style.backgroundColor).indexOf("rgba")>-1});var inputElem=createElement("input");var inputattrs="autocomplete autofocus list placeholder max min multiple pattern required step".split(" ");var attrs={};Modernizr.input=function(props){var i=0;for(var len=props.length;i<len;i++)attrs[props[i]]=!!(props[i]in
inputElem);if(attrs.list)attrs.list=!!(createElement("datalist")&&window.HTMLDataListElement);return attrs}(inputattrs);var inputtypes="search tel url email datetime date month week time datetime-local number range color".split(" ");var inputs={};Modernizr.inputtypes=function(props){var len=props.length;var smile="1)";var inputElemType;for(var i=0;i<len;i++){inputElem.setAttribute("type",inputElemType=props[i]);var bool=inputElem.type!=="text"&&"style"in inputElem;if(bool){inputElem.value=smile;inputElem.style.cssText=
"position:absolute;visibility:hidden;";if(/^range$/.test(inputElemType)&&inputElem.style.WebkitAppearance!==undefined){docElement.appendChild(inputElem);var defaultView=document.defaultView;bool=defaultView.getComputedStyle&&defaultView.getComputedStyle(inputElem,null).WebkitAppearance!=="textfield"&&inputElem.offsetHeight!==0;docElement.removeChild(inputElem)}else if(/^(search|tel)$/.test(inputElemType));else if(/^(url|email)$/.test(inputElemType))bool=inputElem.checkValidity&&inputElem.checkValidity()===
false;else bool=inputElem.value!=smile}inputs[props[i]]=!!bool}return inputs}(inputtypes);var newSyntax="CSS"in window&&"supports"in window.CSS;var oldSyntax="supportsCSS"in window;Modernizr.addTest("supports",newSyntax||oldSyntax);var toStringFn={}.toString;Modernizr.addTest("svgclippaths",function(){return!!document.createElementNS&&/SVGClipPath/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","clipPath")))});Modernizr.addTest("smil});var prefixes=ModernizrProto._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];ModernizrProto._prefixes=prefixes;Modernizr.addTest("cssgradients",function(){var str1="background-image:";var str2="gradient(linear,left top,right bottom,from(#9f9),to(white));";var css="";var i=0;for(var len=prefixes.length-1;i<len;i++){var angle=i===0?"to ":"";css+=str1+prefixes[i]+"linear-gradient("+
angle+"left top, #9f9, white);"}if(Modernizr._config.usePrefixes)css+=str1+"-webkit-"+str2;var elem=createElement("a");var style=elem.style;style.cssText=css;return(""+style.backgroundImage).indexOf("gradient")>-1});Modernizr.addTest("canvas",function(){var elem=createElement("canvas");return!!(elem.getContext&&elem.getContext("2d"))});Modernizr.addTest("canvasblending",function(){if(Modernizr.canvas===false)return false;var ctx=createElement("canvas").getContext("2d");try{ctx.globalCompositeOperation=
"screen"}catch(e){}return ctx.globalCompositeOperation==="screen"});var canvas=createElement("canvas");Modernizr.addTest("todataurljpeg",function(){return!!Modernizr.canvas&&canvas.toDataURL("image/jpeg").indexOf("data:image/jpeg")===0});Modernizr.addTest("todataurlpng",function(){return!!Modernizr.canvas&&canvas.toDataURL("image/png").indexOf("data:image/png")===0});Modernizr.addTest("todataurlwebp",function(){var supports=false;try{supports=!!Modernizr.canvas&&canvas.toDataURL("image/webp").indexOf("data:image/webp")===
0}catch(e){}return supports});Modernizr.addTest("canvaswinding",function(){if(Modernizr.canvas===false)return false;var ctx=createElement("canvas").getContext("2d");ctx.rect(0,0,10,10);ctx.rect(2,2,6,6);return ctx.isPointInPath(5,5,"evenodd")===false});Modernizr.addTest("hsla",function(){var style=createElement("a").style;style.cssText="background-color:hsla(120,40%,100%,.5)";return contains(style.backgroundColor,"rgba")||contains(style.backgroundColor,"hsla")});var mq=function(){var matchMedia=window.matchMedia||
window.msMatchMedia;if(matchMedia)retur};retur}}();ModernizrProto.mq=mq;var testStyles=ModernizrProto.testStyles=injectElementWithStyles;Modernizr.addTest("touchevents",function(){if("ontouchstart"in
window||window.DocumentTouch&&document instanceof DocumentTouch)var bool=true;else{var query=["@media (",prefixes.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");testStyles(quer})}return bool});var blacklist=function(){var ua=navigator.userAgent;var webos=ua.match(/w(eb)?osbrowser/gi);var wppre8=ua.match(/windows phone/gi)&&ua.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return webos||wppre8}();if(blacklist)Modernizr.addTest("fontface",
false);else testStyles('@font-face {font-family:"font";src:url("https://")}',function(node,rule){var style=document.getElementById("smodernizr");var sheet=style.sheet||style.styleSheet;var cssText=sheet?sheet.cssRules&&sheet.cssRules[0]?sheet.cssRules[0].cssText:sheet.cssText||"":"";var bool=/src/i.test(cssText)&&cssText.indexOf(rule.split(" ")[0])===0;Modernizr.addTest("fontface",bool)});testStyles('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}});Modernizr.addTest("siblinggeneral",function(){return testStyles("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}},2)});var hasOwnProp;(function(){var _hasOwnProperty={}.hasOwnProperty;if(!is(_hasOwnProperty,"undefined")&&!is(_hasOwnProperty.call,"undefined"))hasOwnPro};else hasOwnPro}})();ModernizrProto._l={};ModernizrProto.on=function(feature,cb){if(!this._l[feature])this._l[feature]=[];this._l[feature].push(cb);if(Modernizr.hasOwnProperty(feature))setTimeou},0)};ModernizrProto._trigger=function(feature,res){if(!this._l[feature])return;var cbs=this._l[feature];setTimeou},0);delete this._l[feature]};
Modernizr._q.pus});Modernizr.addAsyncTest(function(){var image=new Image;image.onerror=function(){addTest("webpalpha",false,{aliases:["webp-alpha"]})};image.onload=function(){addTest("webpalpha",image.width==1,{aliases:["webp-alpha"]})};image.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA\x3d\x3d"});Modernizr.addAsyncTest(function(){function test(name,uri,cb){function addResult(event){var result=
event&&event.type==="load"?image.width==1:false;var baseTest=name==="webp";addTest(name,baseTest&&result?new Boolean(result):result);if(cb)cb(event)}var image=new Image;image.onerror=addResult;image.onload=addResult;image.src=uri}var webpTests=[{"uri":"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA\x3d","name":"webp"},{"uri":"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA\x3d\x3d",
"name":"webp.alpha"},{"uri":"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA","name":"webp.animation"},{"uri":"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA\x3d","name":"webp.lossless"}];var webp=webpTests.shift();test(webp.name,webp.uri,function(e){if(e&&e.type==="load")for(var i=0;i<webpTests.length;i++)test(webpTests[i].name,webpTests[i].uri)})});var omPrefixes="Moz O ms Webkit";
var domPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.toLowerCase().split(" "):[];ModernizrProto._domPrefixes=domPrefixes;Modernizr.addTest("pointerevents",function(){var bool=false;var i=domPrefixes.length;for(bool=Modernizr.hasEvent("pointerdown");i--&&!bool;)if(hasEvent(domPrefixes[i]+"pointerdown"))bool=true;return bool});var cssomPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.split(" "):[];ModernizrProto._cssomPrefixes=cssomPrefixes;var atRule=function(prop){var length=prefixes.length;
var cssrule=window.CSSRule;if(typeof cssrule==="undefined")return undefined;if(!prop)return false;prop=prop.replace(/^@/,"");var rule=prop.replace(/-/g,"_").toUpperCase()+"_RULE";if(rule in cssrule)return"@"+prop;for(var i=0;i<length;i++){var prefix=prefixes[i];var thisRule=prefix.toUpperCase()+"_"+rule;if(thisRule in cssrule)return"@-"+prefix.toLowerCase()+"-"+prop}return false};ModernizrProto.atRule=atRule;var modElem={elem:createElement("modernizr")};Modernizr._q.push(function(){delete modElem.elem});
var mStyle={style:modElem.elem.style};Modernizr._q.unshif});var testProp=ModernizrProto.testPro};Modernizr.addTest("textshadow",testProp("textShadow","1px 1px"));ModernizrProto.testAllProps=testPropsAll;var prefixed=ModernizrProto.prefixed=function(prop,obj,elem){if(prop.indexOf("@")===0)return atRule(prop);if(prop.indexOf("-")!=-1)prop=cssToDOM(prop);if(!obj)return testPropsAll(prop,"pfx");
else return testPropsAll(prop,obj,elem)};Modernizr.addAsyncTest(function(){try{var indexeddb=prefixed("indexedDB",window)}catch(e){}if(!!indexeddb){var testDBName="modernizr-"+Math.random();var req=indexeddb.open(testDBName);req.onerror=function(){if(req.error&&req.error.name==="InvalidStateError")addTest("indexeddb",false);else{addTest("indexeddb",true);detectDeleteDatabase(indexeddb,testDBName)}};req.onsucces}}else addTest("indexeddb",
false)});ModernizrProto.testAllProps=testAllProps;Modernizr.addTest("csstransforms});Modernizr.addTest("csstransforms3d});Modernizr.addTest("csstransitions",testAllProps("transition","all",true));Modernizr.addTest("csspseudotransitions",function(){var result=false;if(!Modernizr.csstransitions||!window.getComputedStyle)return result;
var styles='#modernizr:before { content:" "; font-size:5px;'+Modernizr._prefixes.join("transition:0s 100s;")+"}"+"#modernizr.trigger:before { font-size:10px; }";Modernizr.testStyles(styles,function(elem){window.getComputedStyle(elem,":before").getPropertyValue("font-size");elem.className+="trigger";result=window.getComputedStyle(elem,":before").getPropertyValue("font-size")==="5px"});return result});Modernizr.addTest("backgroundsize",testAllProps("backgroundSize","100%",true));Modernizr.addTest("bgsizecover",
testAllProps("backgroundSize","cover"));Modernizr.addTest("borderimage",testAllProps("borderImage","url() 1",true));Modernizr.addTest("borderradius",testAllProps("borderRadius","0px",true));(function(){Modernizr.addTest("csscolumns",function(){var bool=false;var test=testAllProps("columnCount");try{bool=!!test;if(bool)bool=new Boolean(bool)}catch(e){}return bool});var props=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"];for(var i=
0;i<props.length;i++){var name=props[i].toLowerCase();var test$jscomp$0=testAllProps("column"+props[i]);if(name==="breakbefore"||name==="breakafter"||name=="breakinside")test$jscomp$0=test$jscomp$0||testAllProps(props[i]);Modernizr.addTest("csscolumns."+name,test$jscomp$0)}})();Modernizr.addTest("flexbox",testAllProps("flexBasis","1px",true));Modernizr.addTest("flexboxtweener",testAllProps("flexAlign","end",true));Modernizr.addTest("cssreflections",testAllProps("boxReflect","above",true));Modernizr.addTest("cssanimations",
testAllProps("animationName","a",true));Modernizr.addTest("csspseudoanimations",function(){var result=false;if(!Modernizr.cssanimations||!window.getComputedStyle)return result;var styles=["@",Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/@$/,""),'#modernizr:before { content:" "; font-size:5px;',Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");Modernizr.testStyles(styles,function(elem){result=window.getComputedStyle(elem,
":before").getPropertyValue("font-size")==="10px"});return result});testRunner();setClasses(classes);delete ModernizrProto.addTest;delete ModernizrProto.addAsyncTest;for(var i$jscomp$0=0;i$jscomp$0<Modernizr._q.length;i$jscomp$0++)Modernizr._q[i$jscomp$0]();window.Modernizr=Modernizr})(window,document);/*
 SmartMenus jQuery Plugin - v1.1.1 - July 23, 2020
 http://www.smartmenus.org/

 Copyright Vasil Dinkov, Vadikom Web Ltd.
 http://vadikom.com

 Licensed MIT
*/
(function(factory){if(typeof define==="function"&&define.amd)define(["jquery"],factory);else if(typeof module==="object"&&typeof module.exports==="object")module.exports=factory(require("jquery"));else factory(jQuery)})(function($){function initMouseDetection(disable){var eNS=".smartmenus_mouse";if(!mouseDetectionEnabled&&!disable){var firstTime=true;var lastMove=null;var events={"mousemove":function(e){var thisMove={x:e.pageX,y:e.pageY,timeStamp:(new Date).getTime()};if(lastMove){var deltaX=Math.abs(lastMove.x-
thisMove.x);var deltaY=Math.abs(lastMove.y-thisMove.y);if((deltaX>0||deltaY>0)&&deltaX<=4&&deltaY<=4&&thisMove.timeStamp-lastMove.timeStamp<=300){mouse=true;if(firstTime){var $a=$(e.target).closest("a");if($a.is("a"))$.each(menuTree});firstTime=false}}}lastMove=thisMove}};events[touchEvents?"touchstart":"pointerover pointermove pointerout MSPointerOver MSPointerMove MSPointerOut"]=function(e){if(isTouchEvent(e.originalEvent))mouse=
false};$(document).on(getEventsNS(events,eNS));mouseDetectionEnabled=true}else if(mouseDetectionEnabled&&disable){$(document).off(eNS);mouseDetectionEnabled=false}function getEventsNS(events,eNS){if(!eNS)eNS="";var eventsNS={};for(var i in events)eventsNS[i.split(" ").join(eNS+" ")+eNS]=events[i];return eventsNS}var menuTrees=[];var mouse=false;var touchEvents="ontouchstart"in window;var mouseDetectionEnabled=false;var requestAnimationFrame=
window.requestAnimationFrame};var cancelAnimationFrame=window.cancelAnimationFrame};var canAnimate=!!$.fn.animate;$.SmartMenu};$.extend($.SmartMenus,{hideAl},destroy:function(){for(;menuTrees.length;)menuTrees[0].destroy();initMouseDetection(true)},prototype:{init:function(refresh){var self=this;if(!refresh){menuTrees.push(this);
this.rootId=((new Date).getTime()+Math.random()+"").replace(/\D/g,"");this.accessIdPrefix="sm-"+this.rootId+"-";if(this.$root.hasClass("sm-rtl"))this.opts.rightToLeftSubMenus=true;var eNS=".smartmenus";this.$root.data("smartmenus",this).attr("data-smartmenus-id",this.rootId).dataSM("level",1).on(getEventsNS({"mouseover focusin":$.proxy(this.rootOver,this),"mouseout focusout":$.proxy(this.rootOut,this),"keydown":$.proxy(this.rootKeyDown,this)},eNS)).on(getEventsNS({"mouseenter":$.proxy(this.itemEnter,
this),"mouseleave":$.proxy(this.itemLeave,this),"mousedown":$.proxy(this.itemDown,this),"focus":$.proxy(this.itemFocus,this),"blur":$.proxy(this.itemBlur,this),"click":$.proxy(this.itemClick,this)},eNS),"a");eNS+=this.rootId;if(this.opts.hideOnClick)$(document).on(getEventsNS({"touchstart":$.proxy(this.docTouchStart,this),"touchmove":$.proxy(this.docTouchMove,this),"touchend":$.proxy(this.docTouchEnd,this),"click":$.proxy(this.docClick,this)},eNS));$(window).on(getEventsNS({"resize orientationchange":$.proxy(this.winResize,
this)},eNS));if(this.opts.subIndicators){this.$subArrow=$("\x3cspan/\x3e").addClass("sub-arrow");if(this.opts.subIndicatorsText)this.$subArrow.html(this.opts.subIndicatorsText)}initMouseDetection()}this.$firstSub=this.$root.find("ul").eac}).eq(0);this.$firstLink=this.$root.find("a").eq(0);if(this.opts.markCurrentItem){var reDefaultDoc=/(index|default)\.[^#\?\/]*/i;var reHash=/#.*/;var locHref=window.location.href.replace(reDefaultDoc,"");var locHrefNoHash=locHref.replace(reHash,
"");this.$root.find("a:not(.mega-menu a)").each(function(){var href=this.href.replace(reDefaultDoc,"");var $this=$(this);if(href==locHref||href==locHrefNoHash){$this.addClass("current");if(self.opts.markCurrentTree)$this.parentsUntil("[data-smartmenus-id]","ul").eac})}})}this.wasCollapsible=this.isCollapsible()},destroy:function(refresh){if(!refresh){var eNS=".smartmenus";this.$root.removeData("smartmenus").removeAttr("data-smartmenus-id").removeDataSM("level").off(eNS);
eNS+=this.rootId;$(document).off(eNS);$(window).off(eNS);if(this.opts.subIndicators)this.$subArrow=null}this.menuHideAll();var self=this;this.$root.find("ul").each(function(){var $this=$(this);if($this.dataSM("scroll-arrows"))$this.dataSM("scroll-arrows").remove();if($this.dataSM("shown-before")){if(self.opts.subMenusMinWidth||self.opts.subMenusMaxWidth)$this.css({width:"",minWidth:"",maxWidth:""}).removeClass("sm-nowrap");if($this.dataSM("scroll-arrows"))$this.dataSM("scroll-arrows").remove();$this.css({zIndex:"",
top:"",left:"",marginLeft:"",marginTop:"",display:""})}if(($this.attr("id")||"").indexOf(self.accessIdPrefix)==0)$this.removeAttr("id")}).removeDataSM("in-mega").removeDataSM("shown-before").removeDataSM("scroll-arrows").removeDataSM("parent-a").removeDataSM("level").removeDataSM("beforefirstshowfired").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeAttr("aria-expanded");this.$root.find("a.has-submenu").each(function(){var $this=$(this);if($this.attr("id").indexOf(self.accessIdPrefix)==
0)$this.removeAttr("id")}).removeClass("has-submenu").removeDataSM("sub").removeAttr("aria-haspopup").removeAttr("aria-controls").removeAttr("aria-expanded").closest("li").removeDataSM("sub");if(this.opts.subIndicators)this.$root.find("span.sub-arrow").remove();if(this.opts.markCurrentItem)this.$root.find("a.current").removeClass("current");if(!refresh){this.$root=null;this.$firstLink=null;this.$firstSub=null;if(this.$disableOverlay){this.$disableOverlay.remove();this.$disableOverlay=null}menuTrees.splice($.inArray(this,
menuTrees),1)}},disabl},docClick:function(e){if(this.$touchScrollingSub){this.$touchScrollingSub=
null;return}if(this.visibleSubMenus.length&&!$.contains(this.$root[0],e.target)||$(e.target).closest("a").length)this.menuHideAll()},docTouchEnd:function(e){if(!this.lastTouch)return;if(this.visibleSubMenus.length&&(this.lastTouch.x2===undefined||this.lastTouch.x1==this.lastTouch.x2)&&(this.lastTouch.y2===undefined||this.lastTouch.y1==this.lastTouch.y2)&&(!this.lastTouch.target||!$.contains(this.$root[0],this.lastTouch.target))){if(this.hideTimeout){clearTimeout(this.hideTimeout);this.hideTimeout=
0}var self=this;this.hideTimeout=setTimeout(function(){self.menuHideAll()},350)}this.lastTouch=null},docTouchMove:function(e){if(!this.lastTouch)return;var touchPoint=e.originalEvent.touches[0];this.lastTouch.x2=touchPoint.pageX;this.lastTouch.y2=touchPoint.pageY},docTouchStar},enabl},getClosestMen},getHeigh},getOffset:function($elm,height){if($elm.css("display")=="none"){var old={position:$elm[0].style.position,visibility:$elm[0].style.visibility};$elm.css({position:"absolute",visibility:"hidden"}).show()}var box=$elm[0].getBoundingClientRect&&
$elm[0].getBoundingClientRect();var val=box&&(height?box.height||box.bottom-box.top:box.width||box.right-box.left);if(!val&&val!==0)val=height?$elm[0].offsetHeight:$elm[0].offsetWidth;if(old)$elm.hide().css(old);return val},getStartZIndex:function(root){var zIndex=parseInt(this[root?"$root":"$firstSub"].css("z-index"));if(!root&&isNaN(zIndex))zIndex=parseInt(this.$root.css("z-index"));return!isNaN(zIndex)?zIndex:1},getTouchPoin},getViewport:function(height){var name=height?"Height":"Width";var val=document.documentElement["client"+name];var val2=window["inner"+name];if(val2)val=Math.min(val,val2);return val},getViewportHeigh},getViewportWidt},getWidt},handleEvent},handleItemEvent},
isCollapsibl},isCSSO},isFixed:function(){var isFixed=this.$root.css("position")=="fixed";if(!isFixed)this.$root.parentsUntil("body").eac});return isFixed},isLinkInMegaMen},isTouchMod},itemActivate:function($a,hideDeeperSubs){var $ul=$a.closest("ul");var level=$ul.dataSM("level");if(level>1&&(!this.activatedItems[level-2]||this.activatedItems[level-2][0]!=$ul.dataSM("parent-a")[0])){var self=this;$($ul.parentsUntil("[data-smartmenus-id]","ul").get().reverse()).add($ul).eac})}if(!this.isCollapsible()||hideDeeperSubs)this.menuHideSubMenus(!this.activatedItems[level-1]||this.activatedItems[level-1][0]!=
$a[0]?level-1:level);this.activatedItems[level-1]=$a;if(this.$root.triggerHandler("activate.smapi",$a[0])===false)return;var $sub=$a.dataSM("sub");if($sub&&(this.isTouchMode()||(!this.opts.showOnClick||this.clickActivated)))this.menuShow($sub)},itemBlu},itemClick:function(e){var $a=$(e.currentTarget);if(!this.handleItemEvents($a))return;if(this.$touchScrollingSub&&this.$touchScrollingSub[0]==
$a.closest("ul")[0]){this.$touchScrollingSub=null;e.stopPropagation();return false}if(this.$root.triggerHandler("click.smapi",$a[0])===false)return false;var $sub=$a.dataSM("sub");var firstLevelSub=$sub?$sub.dataSM("level")==2:false;if($sub){var subArrowClicked=$(e.target).is(".sub-arrow");var collapsible=this.isCollapsible();var behaviorToggle=/toggle$/.test(this.opts.collapsibleBehavior);var behaviorLink=/link$/.test(this.opts.collapsibleBehavior);var behaviorAccordion=/^accordion/.test(this.opts.collapsibleBehavior);
if(!$sub.is(":visible")){if(!behaviorLink||!collapsible||subArrowClicked){if(!collapsible&&this.opts.showOnClick&&firstLevelSub)this.clickActivated=true;this.itemActivate($a,behaviorAccordion);if($sub.is(":visible")){this.focusActivated=true;return false}}}else if(!collapsible&&this.opts.showOnClick&&firstLevelSub){this.menuHide($sub);this.clickActivated=false;this.focusActivated=false;return false}else if(collapsible&&(behaviorToggle||subArrowClicked)){this.itemActivate($a,behaviorAccordion);this.menuHide($sub);
return false}}if(!collapsible&&this.opts.showOnClick&&firstLevelSub||$a.hasClass("disabled")||this.$root.triggerHandler("select.smapi",$a[0])===false)return false},itemDown:function(e){var $a=$(e.currentTarget);if(!this.handleItemEvents($a))return;$a.dataSM("mousedown",true)},itemEnter:function(e){var $a=$(e.currentTarget);if(!this.handleItemEvents($a))return;if(!this.isTouchMode()){if(this.showTimeout){clearTimeout(this.showTimeout);this.showTimeout=0}var self=this;this.showTimeout=setTimeout(function(){self.itemActivate($a)},
this.opts.showOnClick&&$a.closest("ul").dataSM("level")==1?1:this.opts.showTimeout)}this.$root.triggerHandler("mouseenter.smapi",$a[0])},itemFocus:function(e){var $a=$(e.currentTarget);if(!this.handleItemEvents($a))return;if(this.focusActivated&&(!this.isTouchMode()||!$a.dataSM("mousedown"))&&(!this.activatedItems.length||this.activatedItems[this.activatedItems.length-1][0]!=$a[0]))this.itemActivate($a,true);this.$root.triggerHandler("focus.smapi",$a[0])},itemLeave:function(e){var $a=$(e.currentTarget);
if(!this.handleItemEvents($a))return;if(!this.isTouchMode()){$a[0].blur();if(this.showTimeout){clearTimeout(this.showTimeout);this.showTimeout=0}}$a.removeDataSM("mousedown");this.$root.triggerHandler("mouseleave.smapi",$a[0])},menuHide:function($sub){if(this.$root.triggerHandler("beforehide.smapi",$sub[0])===false)return;if(canAnimate)$sub.stop(true,true);if($sub.css("display")!="none"){var complete=function(){$sub.css("z-index","")};if(this.isCollapsible())if(canAnimate&&this.opts.collapsibleHideFunction)this.opts.collapsibleHideFunction.call(this,
$sub,complete);else $sub.hide(this.opts.collapsibleHideDuration,complete);else if(canAnimate&&this.opts.hideFunction)this.opts.hideFunction.call(this,$sub,complete);else $sub.hide(this.opts.hideDuration,complete);if($sub.dataSM("scroll")){this.menuScrollStop($sub);$sub.css({"touch-action":"","-ms-touch-action":"","-webkit-transform":"",transform:""}).off(".smartmenus_scroll").removeDataSM("scroll").dataSM("scroll-arrows").hide()}$sub.dataSM("parent-a").removeClass("highlighted").attr("aria-expanded",
"false");$sub.attr({"aria-expanded":"false","aria-hidden":"true"});var level=$sub.dataSM("level");this.activatedItems.splice(level-1,1);this.visibleSubMenus.splice($.inArray($sub,this.visibleSubMenus),1);this.$root.triggerHandler("hide.smapi",$sub[0])}},menuHideAll:function(){if(this.showTimeout){clearTimeout(this.showTimeout);this.showTimeout=0}var level=this.opts.isPopup?1:0;for(var i=this.visibleSubMenus.length-1;i>=level;i--)this.menuHide(this.visibleSubMenus[i]);if(this.opts.isPopup){if(canAnimate)this.$root.stop(true,
true);if(this.$root.is(":visible"))if(canAnimate&&this.opts.hideFunction)this.opts.hideFunction.call(this,this.$root);else this.$root.hide(this.opts.hideDuration)}this.activatedItems=[];this.visibleSubMenus=[];this.clickActivated=false;this.focusActivated=false;this.zIndexInc=0;this.$root.triggerHandler("hideAll.smapi")},menuHideSubMenus:function(level){for(var i=this.activatedItems.length-1;i>=level;i--){var $sub=this.activatedItems[i].dataSM("sub");if($sub)this.menuHide($sub)}},menuInit:function($ul){if(!$ul.dataSM("in-mega")){if($ul.hasClass("mega-menu"))$ul.find("ul").dataSM("in-mega",
true);var level=2;for(var par=$ul[0];(par=par.parentNode.parentNode)!=this.$root[0];)level++;var $a=$ul.prevAll("a").eq(-1);if(!$a.length)$a=$ul.prevAll().find("a").eq(-1);$a.addClass("has-submenu").dataSM("sub",$ul);$ul.dataSM("parent-a",$a).dataSM("level",level).parent().dataSM("sub",$ul);var aId=$a.attr("id")||this.accessIdPrefix+ ++this.idInc;var ulId=$ul.attr("id")||this.accessIdPrefix+ ++this.idInc;$a.attr({id:aId,"aria-haspopup":"true","aria-controls":ulId,"aria-expanded":"false"});$ul.attr({id:ulId,
"role":"group","aria-hidden":"true","aria-labelledby":aId,"aria-expanded":"false"});if(this.opts.subIndicators)$a[this.opts.subIndicatorsPos](this.$subArrow.clone())}},menuPosition:function($sub){var $a=$sub.dataSM("parent-a");var $li=$a.closest("li");var $ul=$li.parent();var level=$sub.dataSM("level");var subW=this.getWidth($sub);var subH=this.getHeight($sub);var itemOffset=$a.offset();var itemX=itemOffset.left;var itemY=itemOffset.top;var itemW=this.getWidth($a);var itemH=this.getHeight($a);var $win=
$(window);var winX=$win.scrollLeft();var winY=$win.scrollTop();var winW=this.getViewportWidth();var winH=this.getViewportHeight();var horizontalParent=$ul.parent().is("[data-sm-horizontal-sub]")||level==2&&!$ul.hasClass("sm-vertical");var rightToLeft=this.opts.rightToLeftSubMenus&&!$li.is("[data-sm-reverse]")||!this.opts.rightToLeftSubMenus&&$li.is("[data-sm-reverse]");var subOffsetX=level==2?this.opts.mainMenuSubOffsetX:this.opts.subMenusSubOffsetX;var subOffsetY=level==2?this.opts.mainMenuSubOffsetY:
this.opts.subMenusSubOffsetY;if(horizontalParent){var x=rightToLeft?itemW-subW-subOffsetX:subOffsetX;var y=this.opts.bottomToTopSubMenus?-subH-subOffsetY:itemH+subOffsetY}else{x=rightToLeft?subOffsetX-subW:itemW-subOffsetX;y=this.opts.bottomToTopSubMenus?itemH-subOffsetY-subH:subOffsetY}if(this.opts.keepInViewport){var absX=itemX+x;var absY=itemY+y;if(rightToLeft&&absX<winX)x=horizontalParent?winX-absX+x:itemW-subOffsetX;else if(!rightToLeft&&absX+subW>winX+winW)x=horizontalParent?winX+winW-subW-
absX+x:subOffsetX-subW;if(!horizontalParent)if(subH<winH&&absY+subH>winY+winH)y+=winY+winH-subH-absY;else if(subH>=winH||absY<winY)y+=winY-absY;if(horizontalParent&&(absY+subH>winY+winH+.49||absY<winY)||!horizontalParent&&subH>winH+.49){var self=this;if(!$sub.dataSM("scroll-arrows"))$sub.dataSM("scroll-arrows",$([$('\x3cspan class\x3d"scroll-up"\x3e\x3cspan class\x3d"scroll-up-arrow"\x3e\x3c/span\x3e\x3c/span\x3e')[0],$('\x3cspan class\x3d"scroll-down"\x3e\x3cspan class\x3d"scroll-down-arrow"\x3e\x3c/span\x3e\x3c/span\x3e')[0]]).on({mouseente},mouseleav},"mousewheel DOMMouseScroll}}).insertAfter($sub));var eNS=".smartmenus_scroll";$sub.dataSM("scroll",{y:this.cssTransforms3d?0:y-itemH,step:1,itemH,subH,arrowDownH:this.getHeight($sub.dataSM("scroll-arrows").eq(1))}).on(getEventsNS({"mouseover":function(e){self.menuScrollOver($sub,e)},"mouseout":function(e){self.menuScrollOut($sub,e)},"mousewheel DOMMouseScroll":function(e){self.menuScrollMousewheel($sub,
e)}},eNS)).dataSM("scroll-arrows").css({top:"auto",left:"0",marginLeft:x+(parseInt($sub.css("border-left-width"))||0),width:subW-(parseInt($sub.css("border-left-width"))||0)-(parseInt($sub.css("border-right-width"))||0),zIndex:$sub.css("z-index")}).eq(horizontalParent&&this.opts.bottomToTopSubMenus?0:1).show();if(this.isFixed()){var events={};events[touchEvents?"touchstart touchmove touchend":"pointerdown pointermove pointerup MSPointerDown MSPointerMove MSPointerUp"};$sub.css({"touch-action":"none","-ms-touch-action":"none"}).on(getEventsNS(events,eNS))}}}$sub.css({top:"auto",left:"0",marginLeft:x,marginTop:y-itemH})},menuScroll:function($sub,once,step){var data=$sub.dataSM("scroll");var $arrows=$sub.dataSM("scroll-arrows");var end=data.up?data.upEnd:data.downEnd;if(!once&&data.momentum){data.momentum*=.92;var diff=data.momentum;if(diff<.5){this.menuScrollStop($sub);return}}else diff=step||(once||!this.opts.scrollAccelerate?this.opts.scrollStep:Math.floor(data.step));
var level=$sub.dataSM("level");if(this.activatedItems[level-1]&&this.activatedItems[level-1].dataSM("sub")&&this.activatedItems[level-1].dataSM("sub").is(":visible"))this.menuHideSubMenus(level-1);data.y=data.up&&end<=data.y||!data.up&&end>=data.y?data.y:Math.abs(end-data.y)>diff?data.y+(data.up?diff:-diff):end;$sub.css(this.cssTransforms3d?{"-webkit-transform":"translate3d(0, "+data.y+"px, 0)",transform:"translate3d(0, "+data.y+"px, 0)"}:{marginTop:data.y});if(mouse&&(data.up&&data.y>data.downEnd||
!data.up&&data.y<data.upEnd))$arrows.eq(data.up?1:0).show();if(data.y==end){if(mouse)$arrows.eq(data.up?0:1).hide();this.menuScrollStop($sub)}else if(!once){if(this.opts.scrollAccelerate&&data.step<this.opts.scrollStep)data.step+=.2;var self=this;this.scrollTimeout=requestAnimationFram})}},menuScrollMousewhee},menuScrollOut:function($sub,e){if(mouse)if(!/^scroll-(up|down)/.test((e.relatedTarget||"").className)&&($sub[0]!=e.relatedTarget&&!$.contains($sub[0],e.relatedTarget)||this.getClosestMenu(e.relatedTarget)!=$sub[0]))$sub.dataSM("scroll-arrows").css("visibility","hidden")},menuScrollOver:function($sub,e){if(mouse)if(!/^scroll-(up|down)/.test(e.target.className)&&this.getClosestMenu(e.target)==$sub[0]){this.menuScrollRefreshData($sub);var data=$sub.dataSM("scroll");
var upEnd=$(window).scrollTop()-$sub.dataSM("parent-a").offset().top-data.itemH;$sub.dataSM("scroll-arrows").eq(0).css("margin-top",upEnd).end().eq(1).css("margin-top",upEnd+this.getViewportHeight()-data.arrowDownH).end().css("visibility","visible")}},menuScrollRefreshData:function($sub){var data=$sub.dataSM("scroll");var upEnd=$(window).scrollTop()-$sub.dataSM("parent-a").offset().top-data.itemH;if(this.cssTransforms3d)upEnd=-(parseFloat($sub.css("margin-top"))-upEnd);$.extend(data,{upEnd,downEnd:upEnd+
this.getViewportHeight()-data.subH})},menuScrollSto},menuScrollTouch:function($sub,e){e=e.originalEvent;if(isTouchEvent(e)){var touchPoint=this.getTouchPoint(e);if(this.getClosestMenu(touchPoint.target)==$sub[0]){var data=$sub.dataSM("scroll");if(/(start|down)$/i.test(e.type)){if(this.menuScrollStop($sub)){e.preventDefault();this.$touchScrollingSub=$sub}else this.$touchScrollingSub=
null;this.menuScrollRefreshData($sub);$.extend(data,{touchStartY:touchPoint.pageY,touchStartTime:e.timeStamp})}else if(/move$/i.test(e.type)){var prevY=data.touchY!==undefined?data.touchY:data.touchStartY;if(prevY!==undefined&&prevY!=touchPoint.pageY){this.$touchScrollingSub=$sub;var up=prevY<touchPoint.pageY;if(data.up!==undefined&&data.up!=up)$.extend(data,{touchStartY:touchPoint.pageY,touchStartTime:e.timeStamp});$.extend(data,{up,touchY:touchPoint.pageY});this.menuScroll($sub,true,Math.abs(touchPoint.pageY-
prevY))}e.preventDefault()}else if(data.touchY!==undefined){if(data.momentum=Math.pow(Math.abs(touchPoint.pageY-data.touchStartY)/(e.timeStamp-data.touchStartTime),2)*15){this.menuScrollStop($sub);this.menuScroll($sub);e.preventDefault()}delete data.touchY}}}},menuShow:function($sub){if(!$sub.dataSM("beforefirstshowfired")){$sub.dataSM("beforefirstshowfired",true);if(this.$root.triggerHandler("beforefirstshow.smapi",$sub[0])===false)return}if(this.$root.triggerHandler("beforeshow.smapi",$sub[0])===
false)return;$sub.dataSM("shown-before",true);if(canAnimate)$sub.stop(true,true);if(!$sub.is(":visible")){var $a=$sub.dataSM("parent-a");var collapsible=this.isCollapsible();if(this.opts.keepHighlighted||collapsible)$a.addClass("highlighted");if(collapsible)$sub.removeClass("sm-nowrap").css({zIndex:"",width:"auto",minWidth:"",maxWidth:"",top:"",left:"",marginLeft:"",marginTop:""});else{$sub.css("z-index",this.zIndexInc=(this.zIndexInc||this.getStartZIndex())+1);if(this.opts.subMenusMinWidth||this.opts.subMenusMaxWidth){$sub.css({width:"auto",
minWidth:"",maxWidth:""}).addClass("sm-nowrap");if(this.opts.subMenusMinWidth)$sub.css("min-width",this.opts.subMenusMinWidth);if(this.opts.subMenusMaxWidth){var noMaxWidth=this.getWidth($sub);$sub.css("max-width",this.opts.subMenusMaxWidth);if(noMaxWidth>this.getWidth($sub))$sub.removeClass("sm-nowrap").css("width",this.opts.subMenusMaxWidth)}}this.menuPosition($sub)}var complet};if(collapsible)if(canAnimate&&this.opts.collapsibleShowFunction)this.opts.collapsibleShowFunction.call(this,
$sub,complete);else $sub.show(this.opts.collapsibleShowDuration,complete);else if(canAnimate&&this.opts.showFunction)this.opts.showFunction.call(this,$sub,complete);else $sub.show(this.opts.showDuration,complete);$a.attr("aria-expanded","true");$sub.attr({"aria-expanded":"true","aria-hidden":"false"});this.visibleSubMenus.push($sub);this.$root.triggerHandler("show.smapi",$sub[0])}},popupHid},popupShow:function(left,top){if(!this.opts.isPopup){alert('SmartMenus jQuery Error:\n\nIf you want to show this menu via the "popupShow" method, set the isPopup:true option.');return}if(this.hideTimeout){clearTimeout(this.hideTimeout);this.hideTimeout=0}this.$root.dataSM("shown-before",true);if(canAnimate)this.$root.stop(true,true);if(!this.$root.is(":visible")){this.$root.css({left,top});var self=this;
var complet};if(canAnimate&&this.opts.showFunction)this.opts.showFunction.call(this,this.$root,complete);else this.$root.show(this.opts.showDuration,complete);this.visibleSubMenus[0]=this.$root}},refres},rootKeyDown:function(e){if(!this.handleEvents())return;switch(e.keyCode){case 27:var $activeTopItem=this.activatedItems[0];if($activeTopItem){this.menuHideAll();$activeTopItem[0].focus();var $sub=$activeTopItem.dataSM("sub");
if($sub)this.menuHide($sub)}break;case 32:var $target=$(e.target);if($target.is("a")&&this.handleItemEvents($target)){$sub=$target.dataSM("sub");if($sub&&!$sub.is(":visible")){this.itemClick({currentTarget:e.target});e.preventDefault()}}break}},rootOut:function(e){if(!this.handleEvents()||this.isTouchMode()||e.target==this.$root[0])return;if(this.hideTimeout){clearTimeout(this.hideTimeout);this.hideTimeout=0}if(!this.opts.showOnClick||!this.opts.hideOnClick){var self=this;this.hideTimeout=setTimeou},
this.opts.hideTimeout)}},rootOver:function(e){if(!this.handleEvents()||this.isTouchMode()||e.target==this.$root[0])return;if(this.hideTimeout){clearTimeout(this.hideTimeout);this.hideTimeout=0}},winResize:function(e){if(!this.handleEvents()){if(this.$disableOverlay){var pos=this.$root.offset();this.$disableOverlay.css({top:pos.top,left:pos.left,width:this.$root.outerWidth(),height:this.$root.outerHeight()})}return}if(!("onorientationchange"in window)||e.type=="orientationchange"){var collapsible=
this.isCollapsible();if(!(this.wasCollapsible&&collapsible)){if(this.activatedItems.length)this.activatedItems[this.activatedItems.length-1][0].blur();this.menuHideAll()}this.wasCollapsible=collapsible}}}});$.fn.dataSM=function(key,val){if(val)return this.data(key+"_smartmenus",val);return this.data(key+"_smartmenus")};$.fn.removeDataS};$.fn.smartmenus=function(options){if(typeof options=="string"){var args=arguments;var method=options;Array.prototype.shift.call(args);
return this.eac})}return this.each(function(){var dataOpts=$(this).data("sm-options")||null;if(dataOpts&&typeof dataOpts!=="object")try{dataOpts=eval("("+dataOpts+")")}catch(e){dataOpts=null;alert('ERROR\n\nSmartMenus jQuery init:\nInvalid "data-sm-options" attribute value syntax.')}new $.SmartMenus(this,$.extend({},$.fn.smartmenus.defaults,options,dataOpts))})};$.fn.smartmenus.defaults=
{isPopup:false,mainMenuSubOffsetX:0,mainMenuSubOffsetY:0,subMenusSubOffsetX:0,subMenusSubOffsetY:0,subMenusMinWidth:"10em",subMenusMaxWidth:"20em",subIndicators:true,subIndicatorsPos:"append",subIndicatorsText:"",scrollStep:30,scrollAccelerate:true,showTimeout:250,hideTimeout:500,showDuration:0,showFunction:null,hideDuration:0,hideFunction:function($ul,complete){$ul.fadeOut(200,complete)},collapsibleShowDuration:0,collapsibleShowFunction:function($ul,complete){$ul.slideDown(200,complete)},collapsibleHideDuration:0,
collapsibleHideFunctio},showOnClick:false,hideOnClick:true,noMouseOver:false,keepInViewport:true,keepHighlighted:true,markCurrentItem:false,markCurrentTree:true,rightToLeftSubMenus:false,bottomToTopSubMenus:false,collapsibleBehavior:"default"};return $});/*
 SmartMenus jQuery Plugin Bootstrap Addon - v0.4.1 - July 23, 2020
 http://www.smartmenus.org/

 Copyright Vasil Dinkov, Vadikom Web Ltd.
 http://vadikom.com

 Licensed MIT
*/
(function(factory){if(typeof define==="function"&&define.amd)define(["jquery","smartmenus"],factory);else if(typeof module==="object"&&typeof module.exports==="object")module.exports=factory(require("jquery"));else factory(jQuery)})(function($){$.extend($.SmartMenus.Bootstrap={},{keydownFix:false,init:function(){var $navbars=$("ul.navbar-nav:not([data-sm-skip])");$navbars.each(function(){var $this$jscomp$0=$(this);var obj=$this$jscomp$0.data("smartmenus");if(!obj){$this$jscomp$0.smartmenus({subMenusSubOffsetX:2,
subMenusSubOffsetY:-6,subIndicators:false,collapsibleShowFunction:null,collapsibleHideFunction:null,rightToLeftSubMenus:$this$jscomp$0.hasClass("navbar-right"),bottomToTopSubMenus:$this$jscomp$0.closest(".navbar").hasClass("navbar-fixed-bottom")}).on({"show.smapi":function(e,menu){var $menu=$(menu);var $scrollArrows=$menu.dataSM("scroll-arrows");if($scrollArrows)$scrollArrows.css("background-color",$(document.body).css("background-color"));$menu.parent().addClass("open")},"hide.smapi}});function onInit(){$this$jscomp$0.find("a.current").parent().addClass("active");$this$jscomp$0.find("a.has-submenu").each(function(){var $this=$(this);if($this.is('[data-toggle\x3d"dropdown"]'))$this.dataSM("bs-data-toggle-dropdown",true).removeAttr("data-toggle");if($this.is('[role\x3d"button"]'))$this.dataSM("bs-role-button",true).removeAttr("role")})}onInit();function onBeforeDestroy(){$this$jscomp$0.find("a.current").parent().removeClass("active");
$this$jscomp$0.find("a.has-submenu").each(function(){var $this=$(this);if($this.dataSM("bs-data-toggle-dropdown"))$this.attr("data-toggle","dropdown").removeDataSM("bs-data-toggle-dropdown");if($this.dataSM("bs-role-button"))$this.attr("role","button").removeDataSM("bs-role-button")})}obj=$this$jscomp$0.data("smartmenus");obj.isCollapsible=function(){return!/^(left|right)$/.test(this.$firstLink.parent().css("float"))&&this.$root.css("display")=="block"};obj.refres};obj.destro};if($this$jscomp$0.is("[data-sm-skip-collapsible-behavior]"))obj.opts.collapsibleBehavior="toggle";var winW;function detectCollapsible(force){var newW=obj.getViewportWidth();if(newW!=winW||force){var $carets=$this$jscomp$0.find(".caret");if(obj.isCollapsible()){$this$jscomp$0.addClass("sm-collapsible");if(!$this$jscomp$0.is("[data-sm-skip-collapsible-behavior]"))$carets.addClass("navbar-toggle sub-arrow")}else{$this$jscomp$0.removeClass("sm-collapsible");
if(!$this$jscomp$0.is("[data-sm-skip-collapsible-behavior]"))$carets.removeClass("navbar-toggle sub-arrow")}winW=newW}}detectCollapsible();$(window).on("resize.smartmenus"+obj.rootId,detectCollapsible)}});if($navbars.length&&!$.SmartMenus.Bootstrap.keydownFix){$(document).off("keydown.bs.dropdown.data-api",".dropdown-menu");if($.fn.dropdown&&$.fn.dropdown.Constructor)$(document).on("keydown.bs.dropdown.data-api",'.dropdown-menu:not([id^\x3d"sm-"])',$.fn.dropdown.Constructor.prototype.keydown);$.SmartMenus.Bootstrap.keydownFix=
true}}});$($.SmartMenus.Bootstrap.init);return $});/*
 SmartMenus jQuery Plugin Keyboard Addon - v0.4.0 - July 23, 2020
 http://www.smartmenus.org/

 Copyright Vasil Dinkov, Vadikom Web Ltd.
 http://vadikom.com

 Licensed MIT
*/
(function(factory){if(typeof define==="function"&&define.amd)define(["jquery","smartmenus"],factory);else if(typeof module==="object"&&typeof module.exports==="object")module.exports=factory(require("jquery"));else factory(jQuery)})(function($}function getLastItemLink($ul){return $ul.find("\x3e li \x3e a:not(.disabled), \x3e li \x3e :not(ul) a:not(.disabled)").eq(-1)}function getNextItemLink($li,
noLoop){var $a=$li.nextAll("li").find("\x3e a:not(.disabled), \x3e :not(ul) a:not(.disabled)").eq(0);return noLoop||$a.length?$a:getFirstItemLink($li.parent())}function getPreviousItemLink($li,noLoop){var $a=$li.prevAll("li").find("\x3e a:not(.disabled), \x3e :not(ul) a:not(.disabled)").eq(/^1\.8\./.test($.fn.jquery)?0:-1);return noLoop||$a.length?$a:getLastItemLink($li.parent())}$.fn.focusSM=function(){if(this.length&&this[0].focus)this[0].focus();return this};$.extend($.SmartMenus.Keyboard={},{docKeydown:function(e){var keyCode=
e.keyCode;if(!/^(37|38|39|40)$/.test(keyCode))return;var $root=$(this);var obj=$root.data("smartmenus");var $target=$(e.target);if(!obj||!$target.is("a")||!obj.handleItemEvents($target))return;var $li=$target.closest("li");var $ul=$li.parent();var level=$ul.dataSM("level");if($root.hasClass("sm-rtl"))if(keyCode==37)keyCode=39;else if(keyCode==39)keyCode=37;switch(keyCode){case 37:if(obj.isCollapsible())break;if(level>2||level==2&&$root.hasClass("sm-vertical"))obj.activatedItems[level-2].focusSM();
else if(!$root.hasClass("sm-vertical"))getPreviousItemLink((obj.activatedItems[0]||$target).closest("li")).focusSM();break;case 38:if(obj.isCollapsible()){var $firstItem;if(level>1&&($firstItem=getFirstItemLink($ul)).length&&$target[0]==$firstItem[0])obj.activatedItems[level-2].focusSM();else getPreviousItemLink($li).focusSM()}else if(level==1&&!$root.hasClass("sm-vertical")&&obj.opts.bottomToTopSubMenus){if(!obj.activatedItems[0]&&$target.dataSM("sub")){if(obj.opts.showOnClick)obj.clickActivated=
true;obj.itemActivate($target);if($target.dataSM("sub").is(":visible"))obj.focusActivated=true}if(obj.activatedItems[0]&&obj.activatedItems[0].dataSM("sub")&&obj.activatedItems[0].dataSM("sub").is(":visible")&&!obj.activatedItems[0].dataSM("sub").hasClass("mega-menu"))getLastItemLink(obj.activatedItems[0].dataSM("sub")).focusSM()}else if(level>1||$root.hasClass("sm-vertical"))getPreviousItemLink($li).focusSM();break;case 39:if(obj.isCollapsible())break;if(level==1&&$root.hasClass("sm-vertical")){if(!obj.activatedItems[0]&&
$target.dataSM("sub")){if(obj.opts.showOnClick)obj.clickActivated=true;obj.itemActivate($target);if($target.dataSM("sub").is(":visible"))obj.focusActivated=true}if(obj.activatedItems[0]&&obj.activatedItems[0].dataSM("sub")&&obj.activatedItems[0].dataSM("sub").is(":visible")&&!obj.activatedItems[0].dataSM("sub").hasClass("mega-menu"))getFirstItemLink(obj.activatedItems[0].dataSM("sub")).focusSM()}else if((level==1||obj.activatedItems[level-1]&&(!obj.activatedItems[level-1].dataSM("sub")||!obj.activatedItems[level-
1].dataSM("sub").is(":visible")||obj.activatedItems[level-1].dataSM("sub").hasClass("mega-menu")))&&!$root.hasClass("sm-vertical"))getNextItemLink((obj.activatedItems[0]||$target).closest("li")).focusSM();else if(obj.activatedItems[level-1]&&obj.activatedItems[level-1].dataSM("sub")&&obj.activatedItems[level-1].dataSM("sub").is(":visible")&&!obj.activatedItems[level-1].dataSM("sub").hasClass("mega-menu"))getFirstItemLink(obj.activatedItems[level-1].dataSM("sub")).focusSM();break;case 40:if(obj.isCollapsible()){var $firstSubItem;
var $lastItem;if(obj.activatedItems[level-1]&&obj.activatedItems[level-1].dataSM("sub")&&obj.activatedItems[level-1].dataSM("sub").is(":visible")&&!obj.activatedItems[level-1].dataSM("sub").hasClass("mega-menu")&&($firstSubItem=getFirstItemLink(obj.activatedItems[level-1].dataSM("sub"))).length)$firstSubItem.focusSM();else if(level>1&&($lastItem=getLastItemLink($ul)).length&&$target[0]==$lastItem[0]){var $parentItem=obj.activatedItems[level-2].closest("li");for(var $nextParentItem=null;$parentItem.is("li")&&
!($nextParentItem=getNextItemLink($parentItem,true)).length;)$parentItem=$parentItem.parent().parent();if($nextParentItem.length)$nextParentItem.focusSM();else getFirstItemLink($root).focusSM()}else getNextItemLink($li).focusSM()}else if(level==1&&!$root.hasClass("sm-vertical")&&!obj.opts.bottomToTopSubMenus){if(!obj.activatedItems[0]&&$target.dataSM("sub")){if(obj.opts.showOnClick)obj.clickActivated=true;obj.itemActivate($target);if($target.dataSM("sub").is(":visible"))obj.focusActivated=true}if(obj.activatedItems[0]&&
obj.activatedItems[0].dataSM("sub")&&obj.activatedItems[0].dataSM("sub").is(":visible")&&!obj.activatedItems[0].dataSM("sub").hasClass("mega-menu"))getFirstItemLink(obj.activatedItems[0].dataSM("sub")).focusSM()}else if(level>1||$root.hasClass("sm-vertical"))getNextItemLink($li).focusSM();break}e.stopPropagation();e.preventDefault()}});$(document).on("keydown.smartmenus","ul.sm, ul.navbar-nav:not([data-sm-skip])",$.SmartMenus.Keyboard.docKeydown);$.extend($.SmartMenus.prototype,{keyboardSetHotkey:function(keyCode,
modifiers){var self=this;$(document).on("keydown.smartmenus"+this.rootId,function(e){if(keyCode==e.keyCode){var procede=true;if(modifiers){if(typeof modifiers=="string")modifiers=[modifiers];$.each(["ctrlKey","shiftKey","altKey","metaKey"],function(index,value){if($.inArray(value,modifiers)>=0&&!e[value]||$.inArray(value,modifiers)<0&&e[value]){procede=false;return false}})}if(procede){getFirstItemLink(self.$root).focusSM();e.stopPropagation();e.preventDefault()}}})}});return $});var gaHelper={parseTrackingData:function(data){data=data;var trackingData={};if(data.type==="event"){if(typeof data.category==="undefined"||typeof data.action==="undefined"){console.warn("GA error \u00e2\u2020\u2019 type, category, and action are required");return false}trackingData.hitType=data.type;if(typeof data.category!=="undefined")trackingData.eventCategory=data.category;if(typeof data.action!=="undefined")trackingData.eventAction=data.action;if(typeof data.label!=="undefined")trackingData.eventLabel=
data.label;if(typeof data.value!=="undefined"){var val=parseInt(data.value,10);if(val!=="NaN")trackingData.eventValue=val;else trackingData.eventValue=-1}return trackingData}else if(data.type==="social"){if(typeof data.network==="undefined"||typeof data.action==="undefined"){console.warn("GA error \u00e2\u2020\u2019 network and socialAction are required");return false}trackingData.hitType=data.type;if(typeof data.network!=="undefined")trackingData.socialNetwork=data.network;if(typeof data.action!==
"undefined")trackingData.socialAction=data.action;if(typeof data.target!=="undefined")trackingData.socialTarget=data.target;if(typeof data.page!=="undefined")trackingData.page=data.page;if(typeof data.object!=="undefined")trackingData.page=data.object;return trackingData}else if(data.type==="pageview"){if(typeof data.page==="undefined"){console.warn("GA error \u00e2\u2020\u2019 page is required");return false}trackingData.hitType=data.type;if(typeof data.page!=="undefined")trackingData.page=data.page;
if(typeof data.title!=="undefined")trackingData.title=data.title;return trackingData}else{console.warn("GA error \u00e2\u2020\u2019 Event tracking type not found or recognized");return false}}};