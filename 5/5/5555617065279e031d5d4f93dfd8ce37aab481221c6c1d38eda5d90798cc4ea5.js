"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _iterableToArrayLimit(a,b){var c=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=c){var d,e,f=[],g=!0,h=!1;try{for(c=c.call(a);!(g=(d=c.next()).done)&&(f.push(d.value),!(b&&f.length===b));g=!0);}catch(a){h=!0,e=a}finally{try{g||null==c["return"]||c["return"]()}finally{if(h)throw e}}return f}}function _arrayWithHoles(a){if(Array.isArray(a))return a}/*global jQuery, define, module, require*/ /*!
 * jquery.sumoselect v3.4.6
 * http://hemantnegi.github.io/jquery.sumoselect
 * 2016-12-12
 *
 * Copyright 2015 Hemant Negi
 * Email : hemant.frnz@gmail.com
 * Compressor http://refresh-sf.com/
 */(function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"==typeof exports?a(jQuery):module.exports=a(require("jquery"))})(function(a){"namespace sumo";a.fn.SumoSelect=function(b){// Extra check for IE compatibility
var c=function(a,b){var c=null;"function"==typeof Event?c=new Event(b,{bubbles:!0}):(c=document.createEvent("Event"),c.initEvent(b,!0,!0)),a.dispatchEvent(c)};// missing forEach on NodeList for IE11
window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach);// This is the easiest way to have default options.
var d={placeholder:"Select Here",// Dont change it here.
csvDispCount:3,// display no. of items in multiselect. 0 to display all.
captionFormat:"{0} Selected",// format of caption text. you can set your locale.
captionFormatAllSelected:"{0} all selected!",// format of caption text when all elements are selected. set null to use captionFormat. It will not work if there are disabled elements in select.
floatWidth:400,// Screen width of device at which the list is rendered in floating popup fashion.
forceCustomRendering:!1,// force the custom modal on all devices below floatWidth resolution.
nativeOnDevice:["Android","BlackBerry","iPhone","iPad","iPod","Opera Mini","IEMobile","Silk"],//
outputAsCSV:!1,// true to POST data as csv ( false for Html control array ie. default select )
csvSepChar:",",// separation char in csv mode
okCancelInMulti:!1,// display ok cancel buttons in desktop mode multiselect also.
isClickAwayOk:!1,// for okCancelInMulti=true. sets whether click outside will trigger Ok or Cancel (default is cancel).
triggerChangeCombined:!0,// im multi select mode whether to trigger change event on individual selection or combined selection.
selectAll:!1,// to display select all button in multiselect mode.|| also select all will not be available on mobile devices.
selectAllPartialCheck:!0,// Display a disabled checkbox in multiselect mode when all the items are not selected.
search:!1,// to display input for filtering content. selectAlltext will be input text placeholder
searchText:"Search...",// placeholder for search input
searchFn:function searchFn(a,b){// search function
return 0>a.toLowerCase().indexOf(b.toLowerCase())},noMatch:"No matches for \"{0}\"",prefix:"",// some prefix usually the field name. eg. '<b>Hello</b>'
locale:["OK","Cancel","Select All","Clear all"],// all text that is used. don't change the index.
up:!1,// set true to open upside.
showTitle:!0,// set to false to prevent title (tooltip) from appearing
clearAll:!1,// im multi select - clear all checked options
closeAfterClearAll:!1,// im multi select - close select after clear
max:null,// Maximum number of options selected (when multiple)
// eslint-disable-next-line no-unused-vars
renderLi:function renderLi(a){return a}// Custom <li> item renderer
},e=this.each(function(){var e=this;// the original select object.
if(!this.sumo&&a(this).is("select")){//already initialized
var f=a.extend({},d,b,a(this).data());this.sumo={E:a(e),//the jquery object of original select element.
is_multi:a(e).attr("multiple"),//if its a multiple select
select:"",caption:"",placeholder:"",optDiv:"",CaptionCont:"",ul:"",is_floating:!1,is_opened:!1,//backdrop: '',
mob:!1,// if to open device default select
Pstate:[],lastUnselected:null,selectedCount:0,createElems:function createElems(){var b=this,c=b.E.find("option:checked");//break for mobile rendring.. if forceCustomRendering is false
return b.E.wrap("<div class=\"SumoSelect\" tabindex=\"0\" role=\"button\" aria-expanded=\"false\">"),c.each(function(a,b){b.selected=!0}),b.select=b.E.parent(),b.caption=a("<span>"),b.CaptionCont=a("<p class=\"CaptionCont SelectBox ".concat(b.E.attr("class"),"\" ><label><i></i></label></p>")).attr("style",b.E.attr("style")).prepend(b.caption),b.select.append(b.CaptionCont),b.is_multi||(f.okCancelInMulti=!1),b.E.attr("disabled")&&b.select.addClass("disabled").removeAttr("tabindex"),f.outputAsCSV&&b.is_multi&&b.E.attr("name")&&(b.select.append(a("<input class=\"HEMANT123\" type=\"hidden\" />").attr("name",b.E.attr("name")).val(b.getSelStr())),b.E.removeAttr("name")),b.isMobile()&&!f.forceCustomRendering?void b.setNativeMobile():void(//hide original select
//## Creating the list...
//branch for floating list in low res devices.
//Creating the markup for the available options
b.E.attr("name")&&b.select.addClass("sumo_".concat(b.E.attr("name").replace(/\[\]/,""))),b.E.addClass("SumoUnder").attr("tabindex","-1"),b.optDiv=a("<div class=\"optWrapper ".concat(f.up?"up":"","\">")),b.floatingList(),b.ul=a("<ul class=\"options\">"),b.optDiv.append(b.ul),f.clearAll&&b.is_multi&&b.ClearAll(),f.selectAll&&b.is_multi&&!f.max&&b.SelAll(),f.search&&b.Search(),b.ul.append(b.prepItems(b.E.children())),b.is_multi&&b.multiSelelect(),b.select.append(b.optDiv),b._handleMax(),b.basicEvents(),b.selAllState());// if there is a name attr in select add a class to container div
},prepItems:function prepItems(b,c){var d=[],e=this;return a(b).each(function(b,f){// parsing options to li
var g=a(f);d.push(g.is("optgroup")?a("<li class=\"group ".concat(f.disabled?"disabled":"","\"><label></label><ul></ul></li>")).find("label").text(g.attr("label")).end().find("ul").append(e.prepItems(g.children(),f.disabled)).end():e.createLi(g,c))}),d},//## Creates a LI element from a given option and binds events to it
//## returns the jquery instance of li (not inserted in dom)
createLi:function createLi(b,c){var d=this;b.attr("value")||b.attr("value",b.val());var e=a("<li class=\"opt\"><label>".concat(b.html(),"</label></li>"));return e.data("opt",b),b.data("li",e),d.is_multi&&e.prepend("<span><i></i></span>"),(b[0].disabled||c)&&e.addClass("disabled"),d.onOptClick(e),b[0].selected&&(e.addClass("selected"),d.selectedCount++),b.attr("class")&&e.addClass(b.attr("class")),b.attr("title")&&e.attr("title",b.attr("title")),f.renderLi(e,b)},//## Returns the selected items as string in a Multiselect.
getSelStr:function getSelStr(){// get the pre selected items.
var b=[];return this.E.find("option:checked").each(function(){b.push(a(this).val())}),b.join(f.csvSepChar)},//## THOSE OK/CANCEL BUTTONS ON MULTIPLE SELECT.
multiSelelect:function multiSelelect(){var b=this;b.optDiv.addClass("multiple"),b.okbtn=a("<p tabindex=\"0\" class=\"btnOk\"></p>").click(function(){b._okbtn(),b.hideOpts()});var c=_slicedToArray(f.locale,1);b.okbtn[0].innerText=c[0],b.cancelBtn=a("<p tabindex=\"0\" class=\"btnCancel\"></p>").click(function(){b._cnbtn(),b.hideOpts()});var d=_slicedToArray(f.locale,2);b.cancelBtn[0].innerText=d[1];var e=b.okbtn.add(b.cancelBtn);b.optDiv.append(a("<div class=\"MultiControls\">").append(e)),e.on("keydown.sumo",function(c){var d=a(this);switch(c.which){case 32:// space
case 13:d.trigger("click");break;case 9://tab
if(d.hasClass("btnOk"))return;break;case 27:return b._cnbtn(),void b.hideOpts();default:}c.stopPropagation(),c.preventDefault()})},_okbtn:function _okbtn(){var a=this,b=0;f.triggerChangeCombined&&(a.E.find("option:checked").length===a.Pstate.length?a.E.find("option").each(function(c,d){d.selected&&0>a.Pstate.indexOf(c)&&(b=1)}):b=1,b&&(a.callChange(),a.setText()))},_cnbtn:function _cnbtn(){var a=this;//remove all selections
a.E.find("option:checked").each(function(){this.selected=!1}),a.optDiv.find("li.selected").removeClass("selected");//restore selections from saved state.
for(var b=0;b<a.Pstate.length;b++)a.E.find("option")[a.Pstate[b]].selected=!0,a.ul.find("li.opt").eq(a.Pstate[b]).addClass("selected");a.selAllState()},_handleMax:function _handleMax(){f.max&&(this.selectedCount>=+f.max?this.optDiv.find("li.opt").not(".hidden").each(function(b,c){a(c).hasClass("selected")||a(c).addClass("temporary-disabled disabled")}):this.optDiv.find("li.opt").not(".hidden").each(function(b,c){a(c).hasClass("temporary-disabled")&&a(c).removeClass("temporary-disabled disabled")}))},ClearAll:function ClearAll(){var b=this;if(b.is_multi){b.selAll=a("<p class=\"reset-all\"><span><i></i></span><label></label></p>");var c=_slicedToArray(f.locale,4);b.selAll.find("label")[0].innerText=c[3],b.optDiv.addClass("resetAll"),b.selAll.on("click",function(){b.selAll.removeClass("selected"),b.toggSelAll(!1,1),f.closeAfterClearAll&&b.hideOpts()}),b.optDiv.prepend(b.selAll)}},SelAll:function SelAll(){var b=this;if(b.is_multi){b.selAll=a("<p class=\"select-all\"><span><i></i></span><label></label></p>");var c=_slicedToArray(f.locale,3);b.selAll.find("label")[0].innerText=c[2],b.optDiv.addClass("selall"),b.selAll.on("click",function(){b.selAll.toggleClass("selected"),b.toggSelAll(b.selAll.hasClass("selected"),1),b.selAllState()}),b.optDiv.prepend(b.selAll)}},// search module (can be removed if not required.)
Search:function Search(){var c=this,d=c.CaptionCont.addClass("search"),e=a("<p class=\"no-match\">"),g=b.searchFn&&"function"==typeof b.searchFn?b.searchFn:f.searchFn;c.ftxt=a("<input type=\"text\" class=\"search-txt\" value=\"\" autocomplete=\"off\">").on("click",function(a){a.stopPropagation()}),c.ftxt[0].placeholder=f.searchText,d.append(c.ftxt),c.optDiv.children("ul").after(e),c.ftxt.on("keyup.sumo",function(){var b=c.optDiv.find("ul.options li.opt").each(function(b,d){var e=a(d),f=e.data("opt"),h=f[0];h.hidden=g(e.text(),c.ftxt.val(),e),e.toggleClass("hidden",h.hidden)}).not(".hidden");// Hide opt-groups with no options matched
c.optDiv[0].querySelectorAll("li.group").forEach(function(a){a.querySelector("li:not(.hidden)")?a.classList.remove("hidden"):a.classList.add("hidden")}),e.html(f.noMatch.replace(/\{0\}/g,"<em></em>")).toggle(!b.length),e.find("em").text(c.ftxt.val()),c.selAllState()})},selAllState:function selAllState(){var b=this;if(f.selectAll&&b.is_multi){var c=0,d=0;b.optDiv.find("li.opt:not(.disabled):not(.hidden)").each(function(b,f){a(f).hasClass("selected")&&c++,d++}),c==d?b.selAll.removeClass("partial").addClass("selected"):0===c?b.selAll.removeClass("selected partial"):(f.selectAllPartialCheck&&b.selAll.addClass("partial"),b.selAll.removeClass("selected"))}},showOpts:function showOpts(){var b=this;if(!b.E.attr("disabled")){if(b.E.trigger("sumo:opening",b),b.is_opened=!0,b.select.addClass("open").attr("aria-expanded","true"),b.E.trigger("sumo:opened",b),b.ftxt?b.ftxt.focus():b.select.focus(),a(document).on("click.sumo",function(a){if(!b.select.is(a.target)// if the target of the click isn't the container...
&&0===b.select.has(a.target).length){// ... nor a descendant of the container
if(!b.is_opened)return;b.hideOpts(),f.okCancelInMulti&&(f.isClickAwayOk?b._okbtn():b._cnbtn())}}),b.is_floating){var c=b.optDiv.children("ul").outerHeight()+2;// +2 is clear fix
b.is_multi&&(c+=+b.optDiv.css("padding-bottom")),b.optDiv.css("height",c),a("body").addClass("sumoStopScroll")}b.setPstate()}// if select is disabled then retrun
},//maintain state when ok/cancel buttons are available storing the indexes.
setPstate:function setPstate(){var a=this;a.is_multi&&(a.is_floating||f.okCancelInMulti)&&(a.Pstate=[],a.E.find("option").each(function(b,c){c.selected&&a.Pstate.push(b)}))},callChange:function callChange(){this.E.get().forEach(function(a){c(a,"change"),c(a,"click")})},hideOpts:function hideOpts(){var b=this;b.is_opened&&(b.E.trigger("sumo:closing",b),b.is_opened=!1,b.select.removeClass("open").attr("aria-expanded","false").find("ul li.sel").removeClass("sel"),b.E.trigger("sumo:closed",b),a(document).off("click.sumo"),a("body").removeClass("sumoStopScroll"),f.search&&(b.ftxt.val(""),b.ftxt.trigger("keyup.sumo")))},setOnOpen:function setOnOpen(){var a=this,b=a.optDiv.find("li.opt:not(.hidden)").eq(f.search?0:a.E[0].selectedIndex);b.hasClass("disabled")&&(b=b.next(":not(disabled)"),!b.length)||(a.optDiv.find("li.sel").removeClass("sel"),b.addClass("sel"),a.showOpts())},nav:function nav(a){var b=this,d=null,e=b.ul.find("li.opt.sel:not(.hidden)"),f=b.ul.find("li.opt:not(.disabled):not(.hidden)"),g=f.index(e);if(b.is_opened&&e.length){if(a&&0<g)d=f.eq(g-1);else if(!a&&g<f.length-1&&-1<g)d=f.eq(g+1);else return;// if no items before or after
e.removeClass("sel"),e=d.addClass("sel");// setting sel item to visible view.
var h=b.ul,i=h.scrollTop(),j=e.position().top+i;j>=i+h.height()-e.outerHeight()&&h.scrollTop(j-h.height()+e.outerHeight()),j<i&&h.scrollTop(j)}else b.setOnOpen()},basicEvents:function basicEvents(){var b=this;b.CaptionCont.click(function(a){b.E.trigger("click"),b.is_opened?b.hideOpts():b.showOpts(),a.stopPropagation()}),b.select.on("keydown.sumo",function(a){switch(a.which){case 38:b.nav(!0);break;case 40:b.nav(!1);break;case 65:// shortcut ctrl + a to select all and ctrl + shift + a to unselect all.
if(b.is_multi&&!f.max&&a.ctrlKey){b.toggSelAll(!a.shiftKey,1);break}else return;case 32:// space
if(f.search&&b.ftxt.is(a.target))return;break;case 13:b.is_opened?b.optDiv.find("ul li.sel").trigger("click"):b.setOnOpen();break;case 9:return void(f.okCancelInMulti||b.hideOpts());case 27:return f.okCancelInMulti&&b._cnbtn(),void b.hideOpts();default:return;// exit this handler for other keys
}a.preventDefault()}),a(window).on("resize.sumo",function(){b.floatingList()})},onOptClick:function onOptClick(b){var c=this;b.click(function(){var b=a(this);b.hasClass("disabled")||(c.is_multi?(b.toggleClass("selected"),b.data("opt")[0].selected=b.hasClass("selected"),!1===b.data("opt")[0].selected?(c.lastUnselected=b.data("opt")[0].textContent,c.selectedCount--):c.selectedCount++,f.max&&c._handleMax(),c.selAllState()):(b.parent().find("li.selected").removeClass("selected"),b.toggleClass("selected"),b.data("opt")[0].selected=!0,c.selectedCount=1),!(c.is_multi&&f.triggerChangeCombined&&(c.is_floating||f.okCancelInMulti))&&(c.setText(),c.callChange()),!c.is_multi&&c.hideOpts())})},// fixed some variables that were not explicitly typed (michc)
setText:function setText(){var a=this,b=0;if(a.placeholder="",a.is_multi){var e=a.E.find(":checked").not(":disabled");//selected options.
b=e.length,a.placeholder=f.csvDispCount&&e.length>f.csvDispCount?e.length===a.E.find("option").length&&f.captionFormatAllSelected?f.captionFormatAllSelected.replace(/\{0\}/g,e.length):f.captionFormat.replace(/\{0\}/g,e.length):e.toArray().map(function(a){return a.innerText}).join(", ")}else{var g=a.E.find(":checked").not(":disabled");a.placeholder=g.text(),b=g.length}var c=!1;a.placeholder||(c=!0,a.placeholder=a.E.attr("placeholder"),!a.placeholder&&(//if placeholder is there then set it
a.placeholder=a.E.find("option:disabled:checked").text())),a.select.attr("selected-count",b),a.select.attr("is-selected",b?"true":"false"),a.placeholder=a.placeholder?"".concat(f.prefix," ").concat(a.placeholder):f.placeholder,a.caption.text(a.placeholder),f.showTitle&&a.CaptionCont.attr("title",a.placeholder);//set the hidden field if post as csv is true.
var d=a.select.find("input.HEMANT123");return d.length&&d.val(a.getSelStr()),c?a.caption.addClass("placeholder"):a.caption.removeClass("placeholder"),a.placeholder},isMobile:function isMobile(){// Adapted from http://www.detectmobilebrowsers.com
// Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
for(var a=navigator.userAgent||navigator.vendor||window.opera,b=0;b<f.nativeOnDevice.length;b++)if(0<a.toString().toLowerCase().indexOf(f.nativeOnDevice[b].toLowerCase()))return f.nativeOnDevice[b];return!1},setNativeMobile:function setNativeMobile(){var a=this;a.E.addClass("SelectClass"),a.mob=!0,a.E.change(function(){a.setText()})},floatingList:function floatingList(){var b=this;//called on init and also on resize.
//O.is_floating = true if window width is < specified float width
b.is_floating=a(window).width()<=f.floatWidth,b.optDiv.toggleClass("isFloating",b.is_floating),b.is_floating||b.optDiv.css("height",""),b.optDiv.toggleClass("okCancelInMulti",f.okCancelInMulti&&!b.is_floating)},//HELPERS FOR OUTSIDERS
// validates range of given item operations
vRange:function vRange(a){var b=this,c=b.E.find("option");if(c.length<=a||0>a)throw new Error("index out of bounds");return b},//toggles selection on c as boolean.
toggSel:function toggSel(b,c){var d=this,e=null;"number"==typeof c?(d.vRange(c),e=d.E.find("option")[c]):e=d.E.find("option[value=\"".concat(c,"\"]"))[0]||0,!e||e.disabled||e.selected!==b&&(f.max&&!e.selected&&d.selectedCount<f.max||e.selected||!f.max&&!e.selected)&&(e.selected=b,!d.mob&&a(e).data("li").toggleClass("selected",b),d.callChange(),d.setPstate(),d.setText(),d.selAllState())},//toggles disabled on c as boolean.
toggDis:function toggDis(a,b){var c=this.vRange(b);c.E.find("option")[b].disabled=a,a&&(c.E.find("option")[b].selected=!1),c.mob||c.optDiv.find("ul.options li.opt").eq(b).toggleClass("disabled",a).removeClass("selected"),c.setText()},// toggle disable/enable on complete select control
toggSumo:function toggSumo(a){var b=this;return b.enabled=a,b.select.toggleClass("disabled",a),a?(b.E.attr("disabled","disabled"),b.select.removeAttr("tabindex")):(b.E.removeAttr("disabled"),b.select.attr("tabindex","0")),b},// toggles all option on c as boolean.
// set direct=false/0 bypasses okCancelInMulti behaviour.
toggSelAll:function toggSelAll(b,c){var d=this,e=a.extend(!0,{},a._data(d.E.get(0),"events"));d.E.off(),d.is_multi?b?d.E.find("option").toArray().filter(function(a){return!a.selected&&!a.disabled&&"none"!==a.style.display}).forEach(function(b){a(b).data("li").hasClass("hidden")||(b.selected=!0,a(b).data("li").toggleClass("selected",!0))}):d.E.find("option").toArray().filter(function(a){return a.selected&&!a.disabled&&"none"!==a.style.display}).forEach(function(b){a(b).data("li").hasClass("hidden")||(b.selected=!1,a(b).data("li").toggleClass("selected",!1))}):b?console.warn("You called `SelectAll` on a non-multiple select"):d.E[0].selectedIndex=-1,a.each(e,function(b,c){a.each(c,function(a,b){d.E.on(b.type,b.handler)})}),(!d.is_multi||f.okCancelInMulti)&&d.is_multi||(d.callChange(),d.setText()),c||(!d.mob&&d.selAll&&d.selAll.removeClass("partial").toggleClass("selected",!!b),d.setText(),d.setPstate())},/* outside accessibility options
          which can be accessed from the element instance.
         */reload:function reload(){var b=this.unload();return a(b).SumoSelect(f)},unload:function unload(){var a=this;return a.select.before(a.E),a.E.show(),a.E[0].classList.remove("SumoUnder","SelectClass"),f.outputAsCSV&&a.is_multi&&a.select.find("input.HEMANT123").length&&a.E.attr("name",a.select.find("input.HEMANT123").attr("name")),a.select.remove(),delete e.sumo,a.E.trigger("sumo:unloaded",a),e},//## add a new option to select at a given index.
add:function add(b,c,d,f){if("undefined"==typeof b)throw new Error("No value to add");var g=this,h=g.E.find("option"),i=c,j=d;"number"==typeof c?(j=c,i=b):"undefined"==typeof c&&(i=b);var k=a("<option></option>").val(b).html(i);if(f&&"object"===_typeof(f)&&a.each(f,function(a,b){k.attr(a,b)}),h.length<j)throw new Error("index out of bounds");return"undefined"==typeof j||h.length===j?(g.E.append(k),!g.mob&&g.ul.append(g.createLi(k))):(h.eq(j).before(k),!g.mob&&g.ul.find("li.opt").eq(j).before(g.createLi(k))),e},//## removes an item at a given index.
remove:function remove(a){var b=this.vRange(a);b.E.find("option").eq(a).remove(),b.mob||b.optDiv.find("ul.options li.opt").eq(a).remove(),b.setText()},// removes all but the selected one
removeAll:function removeAll(){for(var a=this,b=a.E.find("option"),c=b.length-1;0<=c;c--)!0!==b[c].selected&&a.remove(c)},find:function find(a){var b=this,c=b.E.find("option");for(var d in c)if(c[d].value===a)return+d;return-1},//## Select an item at a given index.
selectItem:function selectItem(a){this.toggSel(!0,a)},//## UnSelect an iten at a given index.
unSelectItem:function unSelectItem(a){this.toggSel(!1,a)},//## Select all items  of the select.
selectAll:function selectAll(){this.toggSelAll(!0)},//## UnSelect all items of the select.
unSelectAll:function unSelectAll(){this.toggSelAll(!1)},//## Disable an iten at a given index.
disableItem:function disableItem(a){this.toggDis(!0,a)},//## Removes disabled an iten at a given index.
enableItem:function enableItem(a){this.toggDis(!1,a)},//## New simple methods as getter and setter are not working fine in ie8-
//## variable to check state of control if enabled or disabled.
enabled:!0,//## Enables the control
enable:function enable(){return this.toggSumo(!1)},//## Disables the control
disable:function disable(){return this.toggSumo(!0)},init:function init(){var a=this;return a.createElems(),a.setText(),a.E.trigger("sumo:initialized",a),a}},e.sumo.init()}});return 1===e.length?e[0]:e}});
text-align: center;
}

#mc_embed_signup form {
	width: 100%;
	margin: 0 auto;
}

#mc_embed_signup input[type="email"] {
	padding: 9px 30px 9px 30px;
	width: 280px;
	margin-top: 0px;
	margin-bottom: 20px;
	background: transparent;
	font: 300 15px/1.6em "Roboto", sans-serif;
	color: #333e50;
	box-shadow: none;
	border-radius: 4px;
	border: 1px solid black;
	text-align: center; 
	outline: none;
}

#mc_embed_signup input[type="email"] ::-webkit-input-placeholder {
	color: #333e50;
	opacity: 0.8; 
}

#mc_embed_signup input[type="email"] ::-moz-placeholder {
	color: #333e50;
	opacity: 0.8; 
} 

#mc_embed_signup input[type="email"] :-ms-input-placeholder {
	color: #333e50;
	opacity: 0.8; 
} 

#mc_embed_signup input[type="email"] :-moz-placeholder {
	color: #333e50;
	opacity: 0.8; 
} 

#mc_embed_signup input[type="email"]:focus {
	box-shadow: 0 5px 2px -2px #bebebe; 

}

#mc_embed_signup input[type="submit"] {
	border: none;
	outline: none;
	width: 38%;
	margin-left: 5px;
}

/***** Contact Section *****/
.contact-section {
	padding-top: 80px;
	padding-bottom: 30px;
	background-color: #333e50; 
}

.contact-section p, .contact-section a {
	color: #fff; 
}

.contact-section a,
.contact-section .location-information a {
	color: #c4c4c4; 
}

.contact-section a:hover,
.contact-section .location-information a:hover {
	color: #fff; 
}

.contact-section .contact-text p {
	color: #fff; 
	font: 300 16px/26px "Roboto", sans-serif;
}

.contact-section .contact-text h3 {
	margin-top: 10px;
	color: #fff;	
}

.contact-section .location-information {
	margin-top: 19px; 
	color: #fff;
	font: 300 16px/26px "Roboto", sans-serif;
}

.contact-section .location-information p {
	font: 300 16px/26px "Roboto", sans-serif;
}

.contact-section .location-information ul {
	margin-top: 30px;
	list-style-type: none;
	padding-left: 0px; 
}

.contact-section .location-information ul .location-item {
	margin-right: 14px; 
}

.contact-section .location-information ul .location-icons {
	font-size: 15px;
	margin-right: 5px; 
}

.contact-section .location-information p.important-links {
	margin-top: 21px;
}

.contact-section .location-information p.important-links a {
	margin-right: 10px;
	position: relative;
}

.contact-section .location-information p.important-links a::before {
	position: absolute;
	content: '';
	right: -8px;
	top: 4px;
	height: 12px;
	width: 1px;
	background: #fff;
}

.contact-section .location-information p.important-links a:last-child::before {
	display: none;
}

.contact-section form {
	margin-top: 40px; 
}

.contact-section form.invalid {
	transition: margin-top .25s ease ;
	margin-top: 50px;
}

.contact-section form .wpcf7-not-valid-tip {
	display: inline-block;
	padding-top: 5px;
	font-size: 15px;
	color: #fff;
	font-weight: 300;
	opacity: .8;
}

.contact-section div.wpcf7-validation-errors {
	padding: 0;
	font-size: 15px;
	display: block;
	position: absolute;
	top: -15px;
	border: none;
	color: #fff;
	opacity: .8;
}

.wpcf7::after,
.wpcf7::before,
.contact-section form::after,
.contact-section form::before {
	content: "";
	display: table;
}

.contact-section form::after {
	clear: both;
}

.contact-section form .col-md-4, .contact-section form .col-md-12 {
	padding-left: 0px;
	padding-right: 0px; 
}

.contact-section form ::-webkit-input-placeholder {
	color: #fff;
	opacity: 0.8; 
}

.contact-section form ::-moz-placeholder {
	color: #fff;
	opacity: 0.8; 
}

.contact-section form :-ms-input-placeholder {
	color: #fff;
	opacity: 0.8; 
}

.contact-section form :-moz-placeholder {
	color: #fff;
	opacity: 0.8; 
}

.contact-section form input {
	height: 45px;
	display: inline-block;
	width: 100%;
	padding: 6px 12px;
	background: transparent;
	font: 300 15px/1.6em "Roboto", sans-serif;
	color: #fff;
	border: none;
	box-shadow: none;
	border-radius: 4px;
	border: 1px solid white;
	margin-top: 20px;
	outline: none; 
}

.contact-section form input[type="submit"] {
	text-align: center;
	display: inline-block;
	width: auto;
	font: 500 17px/1.5em "Roboto", sans-serif;
	text-transform: uppercase;
	background-color: #27c79a;
	color: #fff;
	border: none;
	border-radius: 4px;
	padding: 0 32px;
	margin-top: 10px;
	height: 45px;
	line-height: 45px;
	text-decoration: none; 
}

.contact-section form input:focus, .contact-section form textarea:focus {
	box-shadow: 0 5px 2px -2px #bebebe; 
}

.contact-section form textarea {
	background-color: transparent;
	display: block;
	width: 100%;
	color: #fff;
	font: 300 15px/1.6em "Roboto", sans-serif;
	border: 1px solid white;
	border-radius: 4px;
	margin-top: 30px; 
	padding: 6px 12px;
	height: 110px;
	outline: none; 
}

.contact-section form textarea[placeholder] {
	text-align: left; 
}

.contact-section form button {
	margin-top: 15px;
	border: none; 
}


/***** 15. Footer *****/
.site-footer {
	padding-top: 25px;
	padding-bottom: 25px;
	background-color: #333e50; 
}

.site-footer p {
	font: 300 15px/1.5em "Roboto", sans-serif;
	color: #c4c4c4;
	text-align: center;
	width: 90%;
	margin: 0 auto; 
}

.site-footer p a {
	color: #c4c4c4; 
}

.site-footer p a:hover {
	color: #fff; 
}

/***** 20. Back To Top Button *****/
a.back-to-top {
	display: none;
	width: 40px;
	height: 40px;
	text-indent: -9999px;
	position: fixed;
	z-index: 999;
	right: 10px;
	bottom: 10px;
	background: #333e50 url("../images/up-arrow.png") no-repeat center 47%;
	-webkit-border-radius: 30px;
	-moz-border-radius: 30px;
	border-radius: 30px;
	background-size: 18px 18px; 
}

a:hover.back-to-top {
	background-color: #193e52; 
}

/***** Blog/Page Header *****/

.breadcrumbs {
	margin-top: 35px;
	margin-bottom: 40px;
}
.breadcrumbs span, .breadcrumbs i {
	margin: 0 2px;
}

.blog-header {
	position: relative;
	background-image: url("../images/header-background.jpg");
	background-position: center;
	background-repeat: none;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	background-attachment: fixed;
}

.blog-header .container {
	position: relative;
	z-index: 10;
}
.blog-header .overlay {
	position: absolute;
	z-index: 1;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),  center no-repeat;
}

.blog-header .blog-header-content {
	padding: 160px 0px 140px 0px;
}

.blog-header .blog-header-content h1 {
	margin-top: 0px;
	font: 400 56px/1.2em "Roboto", sans-serif;
	color: #fff;
	text-align: center;
}

.breadcrumbs ul {
	padding-left: 0px;
	margin-top: 35px;
	list-style-type: none;
}

.breadcrumbs ul li {
	display: inline-block;
}


/***** Blog *****/
.blog-list {
	padding-bottom: 30px;
}

.blog-list.page {
	padding-top: 70px;
}

.blog-list table, 
.comment table {
	margin-bottom: 15px;
	width: 100%;
}

.blog-list table tr, 
.comment table tr,
.blog-list table th, 
.comment table th,
.blog-list table td, 
.comment table td {
    border: 1px solid #e5e5e5;
    padding: 5px;

}

.blog-list table td, 
.comment table td {
	font-size: 14px;
}

.blog-list a {
	text-decoration: none;
}

.blog-list p:before,
.blog-list p:after  {
	content: "";
	display: table;
}

.blog-list p:after {
	clear: both;
}

.blog-list img {
	height: auto; 
    width: auto; 
    max-width: 100%; 
    max-height: 100%;
}

.blog-list .entry-title {
	margin-top: 0;
	margin-bottom: 0;
}

.blog-list .entry-header img {
	display: block;
	margin-bottom: 20px;
	width: 100%;
	height: auto;
}

.blog-list .post-navigation .nav-links {
	margin-top: -10px;
}
.blog-list .post-navigation .nav-links:after,
.blog-list .post-navigation .nav-links:before {
	content: "";
	display: table;
}

.blog-list .post-navigation .nav-links:after {
	clear: both;

}

.blog-list .post-navigation .nav-links .nav-previous {
	float: left;

}
.blog-list .post-navigation .nav-links .nav-next {
	float: right;
}

.blog-list .post-navigation .nav-links .nav-previous a,
.blog-list .post-navigation .nav-links .nav-next a {
	display: block;
	font-size: 16px;
	height: 44px;
	line-height: 44px;
	-moz-background-size: 27px 44px;
	-webkit-background-size: 27px 44px;
	background-size: 27px 44px;
	background-repeat: no-repeat;
	cursor: pointer;
}

.blog-list .post-navigation .nav-links .nav-previous a {
	background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23333e50'%2F%3E%3C%2Fsvg%3E");
	background-position: left;
	padding-left: 35px;
}

.blog-list .post-navigation .nav-links .nav-next a {
	background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23333e50'%2F%3E%3C%2Fsvg%3E");
	background-position: right;
	padding-right: 35px;
}

.blog-content .single-news {
	margin-bottom: 65px;
}


.blog-content .single-news .post h3 {
	font: 400 24px/1.5em "Roboto", sans-serif; 
	margin-bottom: 0px;
}

.blog-content .single-news .post h4 {
	font: 400 20px/1.5em "Roboto", sans-serif; 
	margin-top: 20px;
}

.blog-content .single-news .post span.blog-post-date {
	display: inline-block;
	color: #7a818c;
	margin-top: 5px;
	margin-bottom: 10px;
	font-size: 14px
}

.blog-content .single-news .post span.blog-post-date a {
	text-decoration: none;
}

.blog-content .single-news .post a.button-small-solid.read-more {
	display: inline-block;
	margin-top: 5px;
}

/* Blog Posts Navigation, Previous - Next Buttons*/
.blog-content .single-news a.posts-navigation {
	display: inline-block;
	position: relative;
	margin-top: 30px;
}

.blog-content .single-news a.posts-navigation.prev {
	float: left;
	padding-left: 35px;
}

.blog-content .single-news a.posts-navigation.next {
	float: right;
	padding-right: 35px;
}

.blog-content .single-news a.posts-navigation.disabled {
	opacity: 0.35;
	cursor: auto;
	pointer-events: none;
}


/***** Blog Split Pagination *****/
.split-pagination a, .split-pagination p > span {
	display: inline-block;
	padding: 0 10px;
	height: 30px;
	line-height: 30px;
	background: #27c79a;
	border-radius: 3px;
	color: #fff;
	margin: 3px 1px;
}


.split-pagination a:hover {
	background: #1cb187 ;
}

.split-pagination p > span {
	color: #333e50;
	background: #e5e5e5;
}


/***** Comments Area *****/
.comments-area {
	padding-top: 80px;
}

.blog-list.page .comments-area {
	padding-top: 0px !important;
}


.comments-area h2 {
	font: 400 22px/1.5em "Roboto", sans-serif;
	margin: 0;
	padding-bottom: 15px;
}

.comment-respond {
	padding-top: 50px;
}

.comment-respond h3 {
	margin: 0;
	line-height: 22px;
}

.comment-respond .comment-form p {
	display: block;
	margin-top: 20px; 
	margin-bottom: 30px;
}

.comment-respond .comment-form .comment-notes {
	font-size: 14px;
	margin-top: 8px;
}

.comment-respond .comment-form label {
	float: none;
	display: block;
	font-size: 14px;
	line-height: 14px;
	font-weight: 300;
	margin-bottom: 6px;
}

.comment-respond .comment-form input, .comment-respond .comment-form textarea {
	display: block;
	width: 100%;
	height: 45px;
	background: transparent;
	font: 300 14px/1.6em "Roboto", sans-serif;
	color: #333e50;
	border: 1px solid #e5e5e5;
	box-shadow: none;
	padding: 12px;
	border-radius: 2px;
	outline: none;
}

.comment-respond .comment-form textarea {
	height: 90px;
}

.comment-respond .comment-form .form-submit {
	text-align: center;
}

.comment-respond .comment-form input[type="submit"] {
	text-align: center;
	display: inline-block;
	width: auto;
	border: none;
	font: 300 15px/26px "Roboto", sans-serif;
	background-color: #27c79a;
	color: #fff;
	border-radius: 8px;
	padding: 0 30px;
	height: 45px;
	line-height: 45px;
	text-decoration: none; 
	outline: none;
}

/***** Comments List *****/

.comment-list .pingback {
	padding: 6px 0;
}

.comment-list .pingback:first-child {
    border-top: 1px solid #e5e5e5;
}

.comment-list, .comment-list li {
	padding: 0;
	margin: 0;
	list-style: none;
	list-style-type: none;
}

.comment-list .comment {
	position: relative;
    padding-left: 100px;
    margin-bottom: 25px;
    border-top: 1px solid #e5e5e5;
}

.comment-list .comment .children {
	margin-left: -60px ;
}


.comment-list .comment .comment-body {
	margin: 25px 0;
}

.comment-list .comment .comment-content {
	padding-top: 10px;
}

.comment-list .comment .comment-reply-link, .comment-respond #cancel-comment-reply-link{
	display: inline-block;
	text-align: center;
	width: auto;
	padding: 0 13px;
	height: 30px;
	line-height: 30px;
	background: #eee;
	font-size: 13px;
	color: #333e50;
	border-radius: 2px;
	border: none;
}

.comment-list .comment .comment-reply-link:hover, 
.comment-respond #cancel-comment-reply-link:hover {
	background: #e4e4e4;
}

.comment-list .comment .comment-reply-link {
	position: absolute;
	right: 0;
	top: 25px;
}

.comment-respond #cancel-comment-reply-link {
	height: 25px;
	line-height: 25px;
	position: relative;
	top: -3px;
}

.comment-list .comment.depth-1,
.comment-list .comment.depth-2,
.comment-list .comment.depth-3,
.comment-list .comment.depth-4,
.comment-list .comment.depth-5,
.comment-list .comment.depth-6,
.comment-list .comment.depth-7,
.comment-list .comment.depth-8,
.comment-list .comment.depth-9,
.comment-list .comment.depth-10 {
	margin-bottom: 50px;
}

.comment-list .comment-author img {
	position: absolute;
	left: 0;
	top: 32px;
	width: 80px;
	height: 80px;
	border-radius: 50%;
}

.comment-list .comment-author .fn {
	font-size: 14px;
	line-height: 14px;
}

.comment-list .comment-author .says {
	display: none;
}

.comment-navigation {
    border-top: 1px solid #e5e5e5;
	padding: 25px 0;
}

.comment-navigation:before, .comment-navigation .nav-links:before,
.comment-navigation:after, .comment-navigation .nav-links:after {
	content: "";
	display: table;
}

.comment-navigation:after, .comment-navigation .nav-links:after {
	clear: both;
}

.comment-navigation .nav-links .nav-previous {
	float: left;
}

.comment-navigation .nav-links .nav-next {
	float: right;
}

.comment-list .comment-metadata {
	font-size: 12px;
	line-height: 20px;
}

.comment dt {
	padding-bottom: 4px;
}
.comment p, .comment dd, .comment li{
	font-size: 14px;
	line-height: 18px;
}
.comment address {
	font-size: 14px;
	line-height: 24px;
}

/***** 404 Page *****/
.header-404 {
	position: relative;
	min-height: auto;
	width: 100%;
	background-color: #333e50;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	min-height: 100%;
	background-attachment: fixed; 
}

.header-404 .flex-container-wrapper {
	display: flex;
	flex-direction: column;
	height: 100%; 
}

.header-404 .header-content {
	position: relative;
	width: 100%;
	padding: 100px 15px;
	z-index: 2;
	margin-top: 25px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100vh; 
}

.header-404 h1 {
	font: 400 116px/0.7em "Roboto", sans-serif;
	color: #fff;
	margin-bottom: 0px;
	margin-top: 0px; 
}

.header-404 h2 {
	font: 400 30px/1.5em "Roboto", sans-serif;
	color: #fff;
	margin-bottom: 0px; 
}

.header-404 p {
	color: #fff;
	margin-bottom: 30px;
}

/***** Text  Description *****/
.text-description-left, 
.text-description-right {
	width: 100%;
	max-width: 580px;
	margin-left: auto;
	padding: 0 25px;
}

.text-description-left {
	float: right;	
}

.text-description-right {
	float: left;	
}



/***** Media Queries *****/

/****** @min-width width 768 ******/
@media (min-width: 768px) {

	.text-description-right {
		padding-left: 45px;
	}

	h1 {
		font: 400 40px/1.25em "Roboto", sans-serif; 
	}

	/***** Navigation *****/
	.navbar-brand.img-logo.scrolling img {
		margin-top: 5px;
		margin-left: 0px; 
	}

	/* Image logo affixed while scrolling */
	.navbar.navbar-default.navbar-custom.navbar-fixed-top.affix .navbar-brand.img-logo.scrolling img {
		margin-top: 6px;
		margin-left: 0px; 
	}

	/* Text logo not affixed */
	a.navbar-brand.scrolling {
		margin-top: -3px;
		font: 300 38px/20px "Roboto", sans-serif; 
	}

	/* Text logo affixed while scrolling */
	.navbar.navbar-default.navbar-custom.navbar-fixed-top.affix a.navbar-brand.scrolling {
		font: 300 30px/20px "Roboto", sans-serif;
		margin-top: -2px;
		margin-left: 0px; 
	}

	.navbar-collapse .navbar-nav {
		margin-left: 0px; /* margin left reset for menu links */ 
	}

	.navbar-custom.affix .navbar-brand {
		font: 300 25px/20px "Roboto", sans-serif; 
	}

	.navbar-custom {
		background-color: transparent;
		padding: 25px 0;
		-webkit-transition: padding 0.3s;
		-moz-transition: padding 0.3s;
		transition: padding 0.3s;
		border: none; 
	}

	.navbar-custom .navbar-brand {
		font-size: 2em;
		-webkit-transition: all 0.3s;
		-moz-transition: all 0.3s;
		transition: all 0.3s; 
	}

	.navbar-custom .navbar-nav > .active > a {
		border-radius: 3px; 
	}

	/* Navbar height and color while scrolling */
	.navbar-custom.affix {
		background-color: #333e50;
		padding: 4px 0 3px 0; 
	}

	.navbar-custom .nav li a.scrolling {
		padding-left: 12px;
		padding-right: 12px; 
	}

	/***** Hero Header ******/
	.header {
		min-height: 100%; 
	}

	.header .header-content {
		margin-top: 0px; 
	}

	.header .header-content img {
		margin-top: 60px; 
	}

	.header .header-content .call-to-action {
		margin-top: 60px;
		margin-left: 5px; 
	}

	.header .header-content .call-to-action h1 {
		font: 400 50px/1.2em "Roboto", sans-serif;
		margin-top: 20px;
		text-align: center; 
	}
	
	.header .header-content .call-to-action h1 .rotating { 
		color: #27c79a;
		font-weight: 500; 
	}

	/****** Small Carousel ******/
	.small-carousel .carousel-indicators {
		margin-bottom: -60px; 
	}

	
	/****** Magnific PopUp FAQ PopUp ******/
	.small-dialog {
		padding: 30px 40px 40px 40px;
	}
	
	.small-dialog h3 {
		text-align: center;
		margin-bottom: 35px;
		margin-top: 20px;
		font: 400 32px/1.5em "Roboto", sans-serif; 
	}

	.small-dialog .bullet-number {
		width: 39px;
		height: 39px;
		background-color: #298aff;
		color: #fff;
		text-align: center;
		font: 600 20px/1.9em "Roboto", sans-serif;
		display: inline-block;
		vertical-align: middle;
		margin-right: 12px;
		vertical-align: top;
		margin-top: 5px;
	}

	.small-dialog .faq-text {
		max-width: 89%;
	}

	/****** Contact Section ******/
	.contact-section {
		padding-top: 80px;
		padding-bottom: 35px; 
	}

	.contact-section form button {
		margin-top: 10px; 
	}

	.contact-section form textarea {
		margin-top: 20px; 
	}

	.contact-section .location-information ul {
		margin-top: 5px; 
	}

	.contact-section .location-information ul li {
		display: inline; 
	}

}

/****** @max-width 991 ******/
@media screen and ( max-width: 991px ) {

	.button-wrapper {
		margin-bottom: 10px;
	}

	/****** Comments List ******/
	.comment-list .comment {
		position: relative;
	    padding-left: 50px;
	    margin-bottom: 25px;
	    border-top: 1px solid #e5e5e5;
	}

	.comment-list .comment .children {
		margin-left: -50px ;
	}

	.comment-list .comment-author img {
		position: absolute;
		left: 0;
		top: 32px;
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}

	.comment-list .comment .comment-reply-link {
		position: static;
	}

	/****** Feature Box ******/
	.feature-box {
		padding-top: 0px !important;
	}
	
	/****** Text Description ******/
	.text-description-left, 
	.text-description-right {
		max-width: 991px;
		margin: 0 auto;
		padding-left: 0;
		padding-right: 15px;
		float: none;
		padding-bottom: 60px;
	}

	.text-description-right {
		padding-top: 60px;
	}

}

/****** @max-width 768 ******/
@media screen and ( max-width: 768px ) {
	.comment-list .comment .children {
		margin-left: -80px ;
	}

	.text-description-right {
		padding-left: 0 !important;
	}

	/***** Navigation  *****/
	.navbar-collapse .navbar-nav {
		margin-left: -15px;
	}
	
	.navbar-custom li .sub-menu {
		position: static;
		border: rgba( 255, 255, 255, .1 );
		box-shadow: none;
		display: block;
	}

	.navbar-custom li .sub-menu li a, .navbar-custom li .sub-menu li a.scrolling {
		padding-left: 25px;
	}
	
	.navbar-custom li .sub-menu i {
		display: none;
	}

	.navbar-custom li .sub-menu ul {
		position: static;
		display: block;
	}


	/***** Hero Header *****/
	.header img {
		display: block;
		width: 100%;
		height: auto;
		vertical-align: center;
	}

}


/****** @min-width 992 ******/
@media (min-width: 992px) {
	h1 {
		font: 400 44px/1.25em "Roboto", sans-serif; 
	}
	
	/****** Navigation ******/

	/* Image logo not affixed */
	.navbar-brand.img-logo.scrolling img {
		margin-top: 3px;
		width: 140px;
		height: 45px; 
	}


	/* Image logo affixed while scrolling */
	.navbar.navbar-default.navbar-custom.navbar-fixed-top.affix .navbar-brand.img-logo.scrolling img {
		margin-top: 7px;
		width: 118px;
		height: 38px; 
	}

	/***** Hero Header ******/
	.header .header-content img {
		margin-top: 70px;
		max-height: 460px; 
	}

	.header .header-content .call-to-action {
		margin-top: 120px;
		margin-left: 0px; 
	}

	.header .header-content .call-to-action h1 {
		font: 400 52px/1.2em "Roboto", sans-serif;
		text-align: left;
		margin-bottom: 30px; 
	}
	
	/****** Small  Carousel ******/
	.small-carousel {
		display: inline-block;
		margin-top: 50px;
		margin-bottom: 30px;
		height: 100%; 
	}

	/****** Video Section  ******/
	.video-section p {
		margin: 30px auto 0px auto; 
	}

	/****** NewsLetter ******/
	#mc_embed_signup form {
		width: 70%;
		margin: 0 auto;
	}
	#mc_embed_signup input[type="email"] {
		width: 60%;
		margin: 0 auto;
		float: left;
	}

	/****** Contact Section ******/
	.contact-section form {
		width: 97%;
		float: right; 
	}

	.contact-section form .col-md-4, .contact-section form .col-md-12 {
		padding-left: 10px;
		padding-right: 10px; 
	}

	.contact-section form input {
		margin-top: 0px; 
	}

	.contact-section form textarea {
		margin-top: 10px; 
	}

	.contact-section form button {
		margin-top: 5px; 
	} 
}

/* Min-width 1200 */
@media (min-width: 1200px) {

	/****** Hero Header ******/
	.header .header-content img {
		max-height: 500px; 
	}

	.header .header-content .call-to-action {
		margin-top: 150px; 
	}

	.header .header-content .call-to-action h1 {
		font: 400 56px/1.2em "Roboto", sans-serif; 
	}

	/***** Video Section  *****/
	.video-section h1 {
	    margin-top: 40px;
	}

	/******  Feature Box Style One ******/
	.feature-box {
		margin-top: 40px; 
	}

	.feature-box .features-icons {
		font-size: 48px; 
	}

	.feature-box .features-text {
		margin-left: 70px; 
	}

	/****** Contact Section ******/
	.contact-section form {
		margin-top: 15px; 
	}

	.contact-section form button {
		margin-top: 10px; 
	}

	.contact-section .location-information p {
		margin-bottom: 0px; 
	} 	
}

.vc_tta.vc_general .vc_tta-tab>a,
.vc_tta-tab>a {
	background: none !important;
	border-radius: 4px !important;
	padding-top: 9px !important;
	border: 1px solid #aaa !important;
	padding-bottom: 9px !important;
	color: #6a6a6a !important;
	background: none !important;
}


.vc_tta-style-classic .vc_tta-tab.vc_active>a {
	background: #333e50 !important;
	color: #fff !important;
	border-color: transparent !important;
}