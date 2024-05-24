/*! jQuery UI - v1.13.2 - 2022-07-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */(function($){"use strict";$.ui=$.ui||{};$.ui.version="1.13.2";/*!
* jQuery UI :data 1.13.2
* http://jqueryui.com
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license.
* http://jquery.org/license
*/$.extend($.expr.pseudos,{data:$.expr.createPseudo?$.expr.createPseudo(:);/*!
* jQuery UI Disable Selection 1.13.2
* http://jqueryui.com
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license.
* http://jquery.org/license
*/$.fn.extend({disableSelection:((),enableSelection:);/*!
* jQuery UI Focusable 1.13.2
* http://jqueryui.com
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license.
* http://jquery.org/license
*/$.ui.focusable=$.extend($.expr.pseudos,{focusable:);$.fn._form=/*!
* jQuery UI Form Reset Mixin 1.13.2
* http://jqueryui.com
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license.
* http://jquery.org/license
*/$.ui.formResetMixin={_formResetHandler:_bindFormResetHandler:_unbindFormResetHandler:;$.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());/*!
* jQuery UI Support for jQuery core 1.8.x and newer 1.13.2
* http://jqueryui.com
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license.
* http://jquery.org/license
*
*/if(!$.expr.pseudos){$.expr.pseudos=$.expr[":"];}
if(!$.uniqueSort){$.uniqueSort=$.unique;}
if(!$.escapeSelector){var rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;var fcssescape=$.escapeSelector=}
if(!$.fn.even||!$.fn.odd){$.fn.extend({even:function(){return this.filter(function(i){return i%2===0;});},odd:);}/*!
* jQuery UI Keycode 1.13.2
* http://jqueryui.com
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license.
* http://jquery.org/license
*/
$.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38};/*!
* jQuery UI Labels 1.13.2
* http://jqueryui.com
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license.
* http://jquery.org/license
*/$.fn.labels=$.ui.plugin={add:call:;/*!
* jQuery UI Position 1.13.2
* http://jqueryui.com
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license.
* http://jquery.org/license
*
* http://api.jqueryui.com/position/
*/(();$.ui.safeActiveElement=$.ui.safeBlur=/*!
* jQuery UI Scroll Parent 1.13.2
* http://jqueryui.com
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license.
* http://jquery.org/license
*/$.fn.scrollParent=/*!
* jQuery UI Tabbable 1.13.2
* http://jqueryui.com
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license.
* http://jquery.org/license
*/$.extend($.expr.pseudos,{tabbable:);/*!
* jQuery UI Unique ID 1.13.2
* http://jqueryui.com
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license.
* http://jquery.org/license
*/$.fn.extend({uniqueId:((),removeUniqueId:);/*!
* jQuery UI Widget 1.13.2
* http://jqueryui.com
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license.
* http://jquery.org/license
*/var widgetUuid=0;var widgetHasOwnProperty=Array.prototype.hasOwnProperty;var widgetSlice=Array.prototype.slice;$.cleanData=(($.cleanData);$.widget=$.widget.extend=$.widget.bridge=$.Widget=$.Widget._childConstructors=[];$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:false,create:null},_createWidget:_getCreateOptions:_getCreateEventData:$.noop,_create:$.noop,_init:$.noop,destroy:_destroy:$.noop,widget:option:_setOptions:_setOption:_setOptionClasses:_setOptionDisabled:enable:function(){return this._setOptions({disabled:false});},disable:_classes:_untrackClassesElement:_removeClass:function(element,keys,extra){return this._toggleClass(element,keys,extra,false);},_addClass:_toggleClass:_on:_off:_delay:_hoverable:function(element){this.hoverable=this.hoverable.add(element);this._on(element,{mouseenter:function(event){this._addClass($(event.currentTarget),null,"ui-state-hover");},mouseleave:function(event){this._removeClass($(event.currentTarget),null,"ui-state-hover");}});},_focusable:_trigger:;$.each({show:"fadeIn",hide:"fadeOut"},;}));