/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!"undefined"!=typeof window?window:this,;
//# sourceMappingURL=jquery.min.map
/*
Copyright 2014 Igor Vaynberg

Version: 3.4.8 Timestamp: Thu May  1 09:50:32 EDT 2014

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

http://www.apache.org/licenses/LICENSE-2.0
http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the Apache License
or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
either express or implied. See the Apache License and the GPL License for the specific language governing
permissions and limitations under the Apache License and the GPL License.
*/
!jQuery),function(a,b){"use strict";{a.preventDefault(),a.stopPropagation()}nction D(b,c,d){var e,g,f=[];e=b.attr("class"),e&&(e=""+e,a(e.split(" ")).each2(),e=c.attr("class"),e&&(e=""+e,a(e.split(" ")).each2(),b.attr("class",f.join(" "))}nction G(c){var d,e=null,f=c.quietMillis||100,g=c.url,h=this;return function(i){window.clearTimeout(d),d=window.setTimeout(function(){var d=c.data,f=g,j=c.transport||a.fn.select2.ajaxDefaults.transport,k={type:c.type||"GET",cache:c.cache||!1,jsonpCallback:c.jsonpCallback||b,dataType:c.dataType||"json"},l=a.extend({},a.fn.select2.ajaxDefaults.params,k);d=d?d.call(h,i.term,i.page,i.context):null,f="function"==typeof f?f.call(h,i.term,i.page,i.context):f,e&&"function"==typeof e.abort&&e.abort(),c.params&&(a.isFunction(c.params)?a.extend(l,c.params.call(h)):a.extend(l,c.params)),a.extend(l,{url:f,dataType:c.dataType,data:d,success:),e=j.call(h,l)},f)}}w.Select2===b){var c,d,e,f,g,h,j,k,i={x:0,y:0},c={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:isControl:isFunctionKey:,l="<div class='select2-measure-scrollbar'></div>",m={"\u24b6":"A","\uff21":"A","\xc0":"A","\xc1":"A","\xc2":"A","\u1ea6":"A","\u1ea4":"A","\u1eaa":"A","\u1ea8":"A","\xc3":"A","\u0100":"A","\u0102":"A","\u1eb0":"A","\u1eae":"A","\u1eb4":"A","\u1eb2":"A","\u0226":"A","\u01e0":"A","\xc4":"A","\u01de":"A","\u1ea2":"A","\xc5":"A","\u01fa":"A","\u01cd":"A","\u0200":"A","\u0202":"A","\u1ea0":"A","\u1eac":"A","\u1eb6":"A","\u1e00":"A","\u0104":"A","\u023a":"A","\u2c6f":"A","\ua732":"AA","\xc6":"AE","\u01fc":"AE","\u01e2":"AE","\ua734":"AO","\ua736":"AU","\ua738":"AV","\ua73a":"AV","\ua73c":"AY","\u24b7":"B","\uff22":"B","\u1e02":"B","\u1e04":"B","\u1e06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24b8":"C","\uff23":"C","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\xc7":"C","\u1e08":"C","\u0187":"C","\u023b":"C","\ua73e":"C","\u24b9":"D","\uff24":"D","\u1e0a":"D","\u010e":"D","\u1e0c":"D","\u1e10":"D","\u1e12":"D","\u1e0e":"D","\u0110":"D","\u018b":"D","\u018a":"D","\u0189":"D","\ua779":"D","\u01f1":"DZ","\u01c4":"DZ","\u01f2":"Dz","\u01c5":"Dz","\u24ba":"E","\uff25":"E","\xc8":"E","\xc9":"E","\xca":"E","\u1ec0":"E","\u1ebe":"E","\u1ec4":"E","\u1ec2":"E","\u1ebc":"E","\u0112":"E","\u1e14":"E","\u1e16":"E","\u0114":"E","\u0116":"E","\xcb":"E","\u1eba":"E","\u011a":"E","\u0204":"E","\u0206":"E","\u1eb8":"E","\u1ec6":"E","\u0228":"E","\u1e1c":"E","\u0118":"E","\u1e18":"E","\u1e1a":"E","\u0190":"E","\u018e":"E","\u24bb":"F","\uff26":"F","\u1e1e":"F","\u0191":"F","\ua77b":"F","\u24bc":"G","\uff27":"G","\u01f4":"G","\u011c":"G","\u1e20":"G","\u011e":"G","\u0120":"G","\u01e6":"G","\u0122":"G","\u01e4":"G","\u0193":"G","\ua7a0":"G","\ua77d":"G","\ua77e":"G","\u24bd":"H","\uff28":"H","\u0124":"H","\u1e22":"H","\u1e26":"H","\u021e":"H","\u1e24":"H","\u1e28":"H","\u1e2a":"H","\u0126":"H","\u2c67":"H","\u2c75":"H","\ua78d":"H","\u24be":"I","\uff29":"I","\xcc":"I","\xcd":"I","\xce":"I","\u0128":"I","\u012a":"I","\u012c":"I","\u0130":"I","\xcf":"I","\u1e2e":"I","\u1ec8":"I","\u01cf":"I","\u0208":"I","\u020a":"I","\u1eca":"I","\u012e":"I","\u1e2c":"I","\u0197":"I","\u24bf":"J","\uff2a":"J","\u0134":"J","\u0248":"J","\u24c0":"K","\uff2b":"K","\u1e30":"K","\u01e8":"K","\u1e32":"K","\u0136":"K","\u1e34":"K","\u0198":"K","\u2c69":"K","\ua740":"K","\ua742":"K","\ua744":"K","\ua7a2":"K","\u24c1":"L","\uff2c":"L","\u013f":"L","\u0139":"L","\u013d":"L","\u1e36":"L","\u1e38":"L","\u013b":"L","\u1e3c":"L","\u1e3a":"L","\u0141":"L","\u023d":"L","\u2c62":"L","\u2c60":"L","\ua748":"L","\ua746":"L","\ua780":"L","\u01c7":"LJ","\u01c8":"Lj","\u24c2":"M","\uff2d":"M","\u1e3e":"M","\u1e40":"M","\u1e42":"M","\u2c6e":"M","\u019c":"M","\u24c3":"N","\uff2e":"N","\u01f8":"N","\u0143":"N","\xd1":"N","\u1e44":"N","\u0147":"N","\u1e46":"N","\u0145":"N","\u1e4a":"N","\u1e48":"N","\u0220":"N","\u019d":"N","\ua790":"N","\ua7a4":"N","\u01ca":"NJ","\u01cb":"Nj","\u24c4":"O","\uff2f":"O","\xd2":"O","\xd3":"O","\xd4":"O","\u1ed2":"O","\u1ed0":"O","\u1ed6":"O","\u1ed4":"O","\xd5":"O","\u1e4c":"O","\u022c":"O","\u1e4e":"O","\u014c":"O","\u1e50":"O","\u1e52":"O","\u014e":"O","\u022e":"O","\u0230":"O","\xd6":"O","\u022a":"O","\u1ece":"O","\u0150":"O","\u01d1":"O","\u020c":"O","\u020e":"O","\u01a0":"O","\u1edc":"O","\u1eda":"O","\u1ee0":"O","\u1ede":"O","\u1ee2":"O","\u1ecc":"O","\u1ed8":"O","\u01ea":"O","\u01ec":"O","\xd8":"O","\u01fe":"O","\u0186":"O","\u019f":"O","\ua74a":"O","\ua74c":"O","\u01a2":"OI","\ua74e":"OO","\u0222":"OU","\u24c5":"P","\uff30":"P","\u1e54":"P","\u1e56":"P","\u01a4":"P","\u2c63":"P","\ua750":"P","\ua752":"P","\ua754":"P","\u24c6":"Q","\uff31":"Q","\ua756":"Q","\ua758":"Q","\u024a":"Q","\u24c7":"R","\uff32":"R","\u0154":"R","\u1e58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1e5a":"R","\u1e5c":"R","\u0156":"R","\u1e5e":"R","\u024c":"R","\u2c64":"R","\ua75a":"R","\ua7a6":"R","\ua782":"R","\u24c8":"S","\uff33":"S","\u1e9e":"S","\u015a":"S","\u1e64":"S","\u015c":"S","\u1e60":"S","\u0160":"S","\u1e66":"S","\u1e62":"S","\u1e68":"S","\u0218":"S","\u015e":"S","\u2c7e":"S","\ua7a8":"S","\ua784":"S","\u24c9":"T","\uff34":"T","\u1e6a":"T","\u0164":"T","\u1e6c":"T","\u021a":"T","\u0162":"T","\u1e70":"T","\u1e6e":"T","\u0166":"T","\u01ac":"T","\u01ae":"T","\u023e":"T","\ua786":"T","\ua728":"TZ","\u24ca":"U","\uff35":"U","\xd9":"U","\xda":"U","\xdb":"U","\u0168":"U","\u1e78":"U","\u016a":"U","\u1e7a":"U","\u016c":"U","\xdc":"U","\u01db":"U","\u01d7":"U","\u01d5":"U","\u01d9":"U","\u1ee6":"U","\u016e":"U","\u0170":"U","\u01d3":"U","\u0214":"U","\u0216":"U","\u01af":"U","\u1eea":"U","\u1ee8":"U","\u1eee":"U","\u1eec":"U","\u1ef0":"U","\u1ee4":"U","\u1e72":"U","\u0172":"U","\u1e76":"U","\u1e74":"U","\u0244":"U","\u24cb":"V","\uff36":"V","\u1e7c":"V","\u1e7e":"V","\u01b2":"V","\ua75e":"V","\u0245":"V","\ua760":"VY","\u24cc":"W","\uff37":"W","\u1e80":"W","\u1e82":"W","\u0174":"W","\u1e86":"W","\u1e84":"W","\u1e88":"W","\u2c72":"W","\u24cd":"X","\uff38":"X","\u1e8a":"X","\u1e8c":"X","\u24ce":"Y","\uff39":"Y","\u1ef2":"Y","\xdd":"Y","\u0176":"Y","\u1ef8":"Y","\u0232":"Y","\u1e8e":"Y","\u0178":"Y","\u1ef6":"Y","\u1ef4":"Y","\u01b3":"Y","\u024e":"Y","\u1efe":"Y","\u24cf":"Z","\uff3a":"Z","\u0179":"Z","\u1e90":"Z","\u017b":"Z","\u017d":"Z","\u1e92":"Z","\u1e94":"Z","\u01b5":"Z","\u0224":"Z","\u2c7f":"Z","\u2c6b":"Z","\ua762":"Z","\u24d0":"a","\uff41":"a","\u1e9a":"a","\xe0":"a","\xe1":"a","\xe2":"a","\u1ea7":"a","\u1ea5":"a","\u1eab":"a","\u1ea9":"a","\xe3":"a","\u0101":"a","\u0103":"a","\u1eb1":"a","\u1eaf":"a","\u1eb5":"a","\u1eb3":"a","\u0227":"a","\u01e1":"a","\xe4":"a","\u01df":"a","\u1ea3":"a","\xe5":"a","\u01fb":"a","\u01ce":"a","\u0201":"a","\u0203":"a","\u1ea1":"a","\u1ead":"a","\u1eb7":"a","\u1e01":"a","\u0105":"a","\u2c65":"a","\u0250":"a","\ua733":"aa","\xe6":"ae","\u01fd":"ae","\u01e3":"ae","\ua735":"ao","\ua737":"au","\ua739":"av","\ua73b":"av","\ua73d":"ay","\u24d1":"b","\uff42":"b","\u1e03":"b","\u1e05":"b","\u1e07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24d2":"c","\uff43":"c","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\xe7":"c","\u1e09":"c","\u0188":"c","\u023c":"c","\ua73f":"c","\u2184":"c","\u24d3":"d","\uff44":"d","\u1e0b":"d","\u010f":"d","\u1e0d":"d","\u1e11":"d","\u1e13":"d","\u1e0f":"d","\u0111":"d","\u018c":"d","\u0256":"d","\u0257":"d","\ua77a":"d","\u01f3":"dz","\u01c6":"dz","\u24d4":"e","\uff45":"e","\xe8":"e","\xe9":"e","\xea":"e","\u1ec1":"e","\u1ebf":"e","\u1ec5":"e","\u1ec3":"e","\u1ebd":"e","\u0113":"e","\u1e15":"e","\u1e17":"e","\u0115":"e","\u0117":"e","\xeb":"e","\u1ebb":"e","\u011b":"e","\u0205":"e","\u0207":"e","\u1eb9":"e","\u1ec7":"e","\u0229":"e","\u1e1d":"e","\u0119":"e","\u1e19":"e","\u1e1b":"e","\u0247":"e","\u025b":"e","\u01dd":"e","\u24d5":"f","\uff46":"f","\u1e1f":"f","\u0192":"f","\ua77c":"f","\u24d6":"g","\uff47":"g","\u01f5":"g","\u011d":"g","\u1e21":"g","\u011f":"g","\u0121":"g","\u01e7":"g","\u0123":"g","\u01e5":"g","\u0260":"g","\ua7a1":"g","\u1d79":"g","\ua77f":"g","\u24d7":"h","\uff48":"h","\u0125":"h","\u1e23":"h","\u1e27":"h","\u021f":"h","\u1e25":"h","\u1e29":"h","\u1e2b":"h","\u1e96":"h","\u0127":"h","\u2c68":"h","\u2c76":"h","\u0265":"h","\u0195":"hv","\u24d8":"i","\uff49":"i","\xec":"i","\xed":"i","\xee":"i","\u0129":"i","\u012b":"i","\u012d":"i","\xef":"i","\u1e2f":"i","\u1ec9":"i","\u01d0":"i","\u0209":"i","\u020b":"i","\u1ecb":"i","\u012f":"i","\u1e2d":"i","\u0268":"i","\u0131":"i","\u24d9":"j","\uff4a":"j","\u0135":"j","\u01f0":"j","\u0249":"j","\u24da":"k","\uff4b":"k","\u1e31":"k","\u01e9":"k","\u1e33":"k","\u0137":"k","\u1e35":"k","\u0199":"k","\u2c6a":"k","\ua741":"k","\ua743":"k","\ua745":"k","\ua7a3":"k","\u24db":"l","\uff4c":"l","\u0140":"l","\u013a":"l","\u013e":"l","\u1e37":"l","\u1e39":"l","\u013c":"l","\u1e3d":"l","\u1e3b":"l","\u017f":"l","\u0142":"l","\u019a":"l","\u026b":"l","\u2c61":"l","\ua749":"l","\ua781":"l","\ua747":"l","\u01c9":"lj","\u24dc":"m","\uff4d":"m","\u1e3f":"m","\u1e41":"m","\u1e43":"m","\u0271":"m","\u026f":"m","\u24dd":"n","\uff4e":"n","\u01f9":"n","\u0144":"n","\xf1":"n","\u1e45":"n","\u0148":"n","\u1e47":"n","\u0146":"n","\u1e4b":"n","\u1e49":"n","\u019e":"n","\u0272":"n","\u0149":"n","\ua791":"n","\ua7a5":"n","\u01cc":"nj","\u24de":"o","\uff4f":"o","\xf2":"o","\xf3":"o","\xf4":"o","\u1ed3":"o","\u1ed1":"o","\u1ed7":"o","\u1ed5":"o","\xf5":"o","\u1e4d":"o","\u022d":"o","\u1e4f":"o","\u014d":"o","\u1e51":"o","\u1e53":"o","\u014f":"o","\u022f":"o","\u0231":"o","\xf6":"o","\u022b":"o","\u1ecf":"o","\u0151":"o","\u01d2":"o","\u020d":"o","\u020f":"o","\u01a1":"o","\u1edd":"o","\u1edb":"o","\u1ee1":"o","\u1edf":"o","\u1ee3":"o","\u1ecd":"o","\u1ed9":"o","\u01eb":"o","\u01ed":"o","\xf8":"o","\u01ff":"o","\u0254":"o","\ua74b":"o","\ua74d":"o","\u0275":"o","\u01a3":"oi","\u0223":"ou","\ua74f":"oo","\u24df":"p","\uff50":"p","\u1e55":"p","\u1e57":"p","\u01a5":"p","\u1d7d":"p","\ua751":"p","\ua753":"p","\ua755":"p","\u24e0":"q","\uff51":"q","\u024b":"q","\ua757":"q","\ua759":"q","\u24e1":"r","\uff52":"r","\u0155":"r","\u1e59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1e5b":"r","\u1e5d":"r","\u0157":"r","\u1e5f":"r","\u024d":"r","\u027d":"r","\ua75b":"r","\ua7a7":"r","\ua783":"r","\u24e2":"s","\uff53":"s","\xdf":"s","\u015b":"s","\u1e65":"s","\u015d":"s","\u1e61":"s","\u0161":"s","\u1e67":"s","\u1e63":"s","\u1e69":"s","\u0219":"s","\u015f":"s","\u023f":"s","\ua7a9":"s","\ua785":"s","\u1e9b":"s","\u24e3":"t","\uff54":"t","\u1e6b":"t","\u1e97":"t","\u0165":"t","\u1e6d":"t","\u021b":"t","\u0163":"t","\u1e71":"t","\u1e6f":"t","\u0167":"t","\u01ad":"t","\u0288":"t","\u2c66":"t","\ua787":"t","\ua729":"tz","\u24e4":"u","\uff55":"u","\xf9":"u","\xfa":"u","\xfb":"u","\u0169":"u","\u1e79":"u","\u016b":"u","\u1e7b":"u","\u016d":"u","\xfc":"u","\u01dc":"u","\u01d8":"u","\u01d6":"u","\u01da":"u","\u1ee7":"u","\u016f":"u","\u0171":"u","\u01d4":"u","\u0215":"u","\u0217":"u","\u01b0":"u","\u1eeb":"u","\u1ee9":"u","\u1eef":"u","\u1eed":"u","\u1ef1":"u","\u1ee5":"u","\u1e73":"u","\u0173":"u","\u1e77":"u","\u1e75":"u","\u0289":"u","\u24e5":"v","\uff56":"v","\u1e7d":"v","\u1e7f":"v","\u028b":"v","\ua75f":"v","\u028c":"v","\ua761":"vy","\u24e6":"w","\uff57":"w","\u1e81":"w","\u1e83":"w","\u0175":"w","\u1e87":"w","\u1e85":"w","\u1e98":"w","\u1e89":"w","\u2c73":"w","\u24e7":"x","\uff58":"x","\u1e8b":"x","\u1e8d":"x","\u24e8":"y","\uff59":"y","\u1ef3":"y","\xfd":"y","\u0177":"y","\u1ef9":"y","\u0233":"y","\u1e8f":"y","\xff":"y","\u1ef7":"y","\u1e99":"y","\u1ef5":"y","\u01b4":"y","\u024f":"y","\u1eff":"y","\u24e9":"z","\uff5a":"z","\u017a":"z","\u1e91":"z","\u017c":"z","\u017e":"z","\u1e93":"z","\u1e95":"z","\u01b6":"z","\u0225":"z","\u0240":"z","\u2c6c":"z","\ua763":"z"};j=a(document),g=),j.on("mousemove",,d=O(Object,{bind:init:function(c){var d,e,f=".select2-results";this.opts=c=this.prepareOpts(c),this.id=c.id,c.element.data("select2")!==b&&null!==c.element.data("select2")&&c.element.data("select2").destroy(),this.container=this.createContainer(),this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("select2-hidden-accessible").appendTo(document.body),this.containerId="s2id_"+(c.element.attr("id")||"autogen"+g()),this.containerEventName=this.containerId.replace(/([.])/g,"_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"),this.container.attr("id",this.containerId),this.container.attr("title",c.element.attr("title")),this.body=a("body"),D(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.attr("style",c.element.attr("style")),this.container.css(K(c.containerCss)),this.container.addClass(K(c.containerCssClass)),this.elementTabIndex=this.opts.element.attr("tabindex"),this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container).on("click.select2",A),this.container.data("select2",this),this.dropdown=this.container.find(".select2-drop"),D(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(K(c.dropdownCssClass)),this.dropdown.data("select2",this),this.dropdown.on("click",A),this.results=d=this.container.find(f),this.search=e=this.container.find("input.select2-input"),this.queryCount=0,this.resultsPage=0,this.context=null,this.initContainer(),this.container.on("click",A),v(this.results),this.dropdown.on("mousemove-filtered",f,this.bind(this.highlightUnderEvent)),this.dropdown.on("touchstart touchmove touchend",f,this.bind(),this.dropdown.on("touchmove",f,this.bind(this.touchMoved)),this.dropdown.on("touchstart touchend",f,this.bind(this.clearTouchMoved)),this.dropdown.on("click",this.bind(),x(80,this.results),this.dropdown.on("scroll-debounced",f,this.bind(this.loadMoreIfNeeded)),a(this.container).on("change",".select2-input",function(a){a.stopPropagation()}),a(this.dropdown).on("change",".select2-input",function(a){a.stopPropagation()}),a.fn.mousewheel&&d.mousewheel(,u(e),e.on("keyup-change input paste",this.bind(this.updateResults)),e.on("focus",function(){e.addClass("select2-focused")}),e.on("blur",function(){e.removeClass("select2-focused")}),this.dropdown.on("mouseup",f,this.bind(),this.dropdown.on("click mouseup mousedown touchstart touchend focusin",function(a){a.stopPropagation()}),this.nextSearchTerm=b,a.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource()),null!==c.maximumInputLength&&this.search.attr("maxlength",c.maximumInputLength);var h=c.element.prop("disabled");h===b&&(h=!1),this.enable(!h);var i=c.element.prop("readonly");i===b&&(i=!1),this.readonly(i),k=k||q(),this.autofocus=c.element.prop("autofocus"),c.element.prop("autofocus",!1),this.autofocus&&this.focus(),this.search.attr("placeholder",c.searchInputPlaceholder)},destroy:optionToData:prepareOpts:function(c){var d,e,f,h,i=this;if(d=c.element,"select"===d.get(0).tagName.toLowerCase()&&(this.select=e=c.element),e&&a.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],,c=a.extend({},{populateResults:function(d,e,f){var h,j=this.opts.id,k=this.liveRegion;h=function(d,e,l){var m,n,o,p,q,r,s,t,u,v;for(d=c.sortResults(d,e,f),m=0,n=d.length;n>m;m+=1)o=d[m],q=o.disabled===!0,p=!q&&j(o)!==b,r=o.children&&o.children.length>0,s=a("<li></li>"),s.addClass("select2-results-dept-"+l),s.addClass("select2-result"),s.addClass(p?"select2-result-selectable":"select2-result-unselectable"),q&&s.addClass("select2-disabled"),r&&s.addClass("select2-result-with-children"),s.addClass(i.opts.formatResultCssClass(o)),s.attr("role","presentation"),t=a(document.createElement("div")),t.addClass("select2-result-label"),t.attr("id","select2-result-label-"+g()),t.attr("role","option"),v=c.formatResult(o,t,f,i.opts.escapeMarkup),v!==b&&(t.html(v),s.append(t)),r&&(u=a("<ul></ul>"),u.addClass("select2-result-sub"),h(o.children,u,l+1),s.append(u)),s.data("select2-data",o),e.append(s);k.text(c.formatMatches(d.length))},h(e,d,0)}},a.fn.select2.defaults,c),"function"!=typeof c.id&&(f=c.id,c.id=function(a){return a[f]}),a.isArray(c.element.data("select2Tags"))){if("tags"in c)throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+c.element.attr("id");c.tags=c.element.data("select2Tags")}if(e?(c.query=this.bind(,c.id=function(a){return a.id}):"query"in c||("ajax"in c?(h=c.element.data("ajax-url"),h&&h.length>0&&(c.ajax.url=h),c.query=G.call(c.element,c.ajax)):"data"in c?c.query=H(c.data):"tags"in c&&(c.query=I(c.tags),c.createSearchChoice===b&&(c.createSearchChoice=,c.initSelection===b&&(c.initSelection=)),"function"!=typeof c.query)throw"query function not defined for Select2 "+c.element.attr("id");if("top"===c.createSearchChoicePosition)c.createSearchChoicePosition=function(a,b){a.unshift(b)};else if("bottom"===c.createSearchChoicePosition)c.createSearchChoicePosition=function(a,b){a.push(b)};else if("function"!=typeof c.createSearchChoicePosition)throw"invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";return c},monitorSource:function(){var c,d,a=this.opts.element;a.on("change.select2",this.bind(),c=this.bind(,a.length&&a[0].attachEvent&&a.each(,d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,d!==b&&(this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),this.propertyObserver=new d(function(a){a.forEach(c)}),this.propertyObserver.observe(a.get(0),{attributes:!0,subtree:!1}))},triggerSelect:triggerChange:isInterfaceEnabled:enableInterface:enable:disable:readonly:opened:function(){return this.container.hasClass("select2-dropdown-open")},positionDropdown:function(){var t,u,v,w,x,b=this.dropdown,c=this.container.offset(),d=this.container.outerHeight(!1),e=this.container.outerWidth(!1),f=b.outerHeight(!1),g=a(window),h=g.width(),i=g.height(),j=g.scrollLeft()+h,l=g.scrollTop()+i,m=c.top+d,n=c.left,o=l>=m+f,p=c.top-f>=g.scrollTop(),q=b.outerWidth(!1),r=j>=n+q,s=b.hasClass("select2-drop-above");s?(u=!0,!p&&o&&(v=!0,u=!1)):(u=!1,!o&&p&&(v=!0,u=!0)),v&&(b.hide(),c=this.container.offset(),d=this.container.outerHeight(!1),e=this.container.outerWidth(!1),f=b.outerHeight(!1),j=g.scrollLeft()+h,l=g.scrollTop()+i,m=c.top+d,n=c.left,q=b.outerWidth(!1),r=j>=n+q,b.show(),this.focusSearch()),this.opts.dropdownAutoWidth?(x=a(".select2-results",b)[0],b.addClass("select2-drop-auto-width"),b.css("width",""),q=b.outerWidth(!1)+(x.scrollHeight===x.clientHeight?0:k.width),q>e?e=q:q=e,f=b.outerHeight(!1),r=j>=n+q):this.container.removeClass("select2-drop-auto-width"),"static"!==this.body.css("position")&&(t=this.body.offset(),m-=t.top,n-=t.left),r||(n=c.left+this.container.outerWidth(!1)-q),w={left:n,width:e},u?(w.top=c.top-f,w.bottom="auto",this.container.addClass("select2-drop-above"),b.addClass("select2-drop-above")):(w.top=m,w.bottom="auto",this.container.removeClass("select2-drop-above"),b.removeClass("select2-drop-above")),w=a.extend(w,K(this.opts.dropdownCss)),b.css(w)},shouldOpen:clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above")},open:opening:function(){var f,b=this.containerEventName,c="scroll."+b,d="resize."+b,e="orientationchange."+b;this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),this.clearDropdownAlignmentPreference(),this.dropdown[0]!==this.body.children().last()[0]&&this.dropdown.detach().appendTo(this.body),f=a("#select2-drop-mask"),0==f.length&&(f=a(document.createElement("div")),f.attr("id","select2-drop-mask").attr("class","select2-drop-mask"),f.hide(),f.appendTo(this.body),f.on("mousedown touchstart click",),this.dropdown.prev()[0]!==f[0]&&this.dropdown.before(f),a("#select2-drop").removeAttr("id"),this.dropdown.attr("id","select2-drop"),f.show(),this.positionDropdown(),this.dropdown.show(),this.positionDropdown(),this.dropdown.addClass("select2-drop-active");var g=this;this.container.parents().add(window).each(},close:externalSearch:clearSearch:function(){},getMaximumSelectionSize:ensureHighlightVisible:function(){var c,d,e,f,g,h,i,b=this.results;if(d=this.highlight(),!(0>d)){if(0==d)return b.scrollTop(0),void 0;c=this.findHighlightableChoices().find(".select2-result-label"),e=a(c[d]),f=e.offset().top+e.outerHeight(!0),d===c.length-1&&(i=b.find("li.select2-more-results"),i.length>0&&(f=i.offset().top+i.outerHeight(!0))),g=b.offset().top+b.outerHeight(!0),f>g&&b.scrollTop(b.scrollTop()+(f-g)),h=e.offset().top-b.offset().top,0>h&&"none"!=e.css("display")&&b.scrollTop(b.scrollTop()+h)}},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")},moveHighlight:highlight:removeHighlight:touchMoved:function(){this._touchMoved=!0},clearTouchMoved:countSelectableResults:highlightUnderEvent:loadMoreIfNeeded:function(){var c,a=this.results,b=a.find("li.select2-more-results"),d=this.resultsPage+1,e=this,f=this.search.val(),g=this.context;0!==b.length&&(c=b.offset().top-a.offset().top-a.height(),c<=this.opts.loadMorePadding&&(b.addClass("select2-active"),this.opts.query({element:this.opts.element,term:f,page:d,context:g,matcher:this.opts.matcher,callback:this.bind(function(c){e.opened()&&(e.opts.populateResults.call(this,a,c.results,{term:f,page:d,context:g}),e.postprocessResults(c,!1,!1),c.more===!0?(b.detach().appendTo(a).text(K(e.opts.formatLoadMore,d+1)),window.setTimeout(function(){e.loadMoreIfNeeded()},10)):b.remove(),e.positionDropdown(),e.resultsPage=d,e.context=c.context,this.opts.element.trigger({type:"select2-loaded",items:c}))})})))},tokenize:function(){},updateResults:function(c){r g,i,l,d=this.search,e=this.results,f=this.opts,h=this,j=d.val(),k=a.data(this.container,"select2-last-term");if((c===!0||!k||!r(j,k))&&(a.data(this.container,"select2-last-term",j),c===!0||this.showSearchInput!==!1&&this.opened())){l=++this.queryCount;var o=this.getMaximumSelectionSize();if(o>=1&&(g=this.data(),a.isArray(g)&&g.length>=o&&J(f.formatSelectionTooBig,"formatSelectionTooBig")))return n("<li class='select2-selection-limit'>"+K(f.formatSelectionTooBig,o)+"</li>"),void 0;if(d.val().length<f.minimumInputLength)return J(f.formatInputTooShort,"formatInputTooShort")?n("<li class='select2-no-results'>"+K(f.formatInputTooShort,d.val(),f.minimumInputLength)+"</li>"):n(""),c&&this.showSearch&&this.showSearch(!0),void 0;if(f.maximumInputLength&&d.val().length>f.maximumInputLength)return J(f.formatInputTooLong,"formatInputTooLong")?n("<li class='select2-no-results'>"+K(f.formatInputTooLong,d.val(),f.maximumInputLength)+"</li>"):n(""),void 0;f.formatSearching&&0===this.findHighlightableChoices().length&&n("<li class='select2-searching'>"+K(f.formatSearching)+"</li>"),d.addClass("select2-active"),this.removeHighlight(),i=this.tokenize(),i!=b&&null!=i&&d.val(i),this.resultsPage=1,f.query({element:f.element,term:d.val(),page:this.resultsPage,context:null,matcher:f.matcher,callback:this.bind(function(g){var i;if(l==this.queryCount){if(!this.opened())return this.search.removeClass("select2-active"),void 0;if(this.context=g.context===b?null:g.context,this.opts.createSearchChoice&&""!==d.val()&&(i=this.opts.createSearchChoice.call(h,d.val(),g.results),i!==b&&null!==i&&h.id(i)!==b&&null!==h.id(i)&&0===a(g.results).filter(.length&&this.opts.createSearchChoicePosition(g.results,i)),0===g.results.length&&J(f.formatNoMatches,"formatNoMatches"))return n("<li class='select2-no-results'>"+K(f.formatNoMatches,d.val())+"</li>"),void 0;e.empty(),h.opts.populateResults.call(this,e,g.results,{term:d.val(),page:this.resultsPage,context:null}),g.more===!0&&J(f.formatLoadMore,"formatLoadMore")&&(e.append("<li class='select2-more-results'>"+h.opts.escapeMarkup(K(f.formatLoadMore,this.resultsPage))+"</li>"),window.setTimeout(function(){h.loadMoreIfNeeded()},10)),this.postprocessResults(g,c),m(),this.opts.element.trigger({type:"select2-loaded",items:g})}})})}},cancel:blur:focusSearch:selectHighlighted:getPlaceholder:getPlaceholderOption:initContainerWidth:),e=O(d,{createContainer:enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.focusser.prop("disabled",!this.isInterfaceEnabled())},opening:close:focus:isFocused:function(){return this.container.hasClass("select2-container-active")},cancel:destroy:function(){a("label[for='"+this.focusser.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),N.call(this,"selection","focusser")},initContainer:function(){var b,h,d=this.container,e=this.dropdown,f=g();this.opts.minimumResultsForSearch<0?this.showSearch(!1):this.showSearch(!0),this.selection=b=d.find(".select2-choice"),this.focusser=d.find(".select2-focusser"),b.find(".select2-chosen").attr("id","select2-chosen-"+f),this.focusser.attr("aria-labelledby","select2-chosen-"+f),this.results.attr("id","select2-results-"+f),this.search.attr("aria-owns","select2-results-"+f),this.focusser.attr("id","s2id_autogen"+f),h=a("label[for='"+this.opts.element.attr("id")+"']"),this.focusser.prev().text(h.text()).attr("for",this.focusser.attr("id"));var i=this.opts.element.attr("title");this.opts.element.attr("title",i||h.text()),this.focusser.attr("tabindex",this.elementTabIndex),this.search.attr("id",this.focusser.attr("id")+"_search"),this.search.prev().text(a("label[for='"+this.focusser.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.search.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()){if(a.which===c.PAGE_UP||a.which===c.PAGE_DOWN)return A(a),void 0;switch(a.which){case c.UP:case c.DOWN:return this.moveHighlight(a.which===c.UP?-1:1),A(a),void 0;case c.ENTER:return this.selectHighlighted(),A(a),void 0;case c.TAB:return this.selectHighlighted({noFocus:!0}),void 0;case c.ESC:return this.cancel(a),A(a),void 0}}})),this.search.on("blur",this.bind(),this.focusser.on("keydown",this.bind(),u(this.focusser),this.focusser.on("keyup-change input",this.bind(),b.on("mousedown touchstart","abbr",this.bind(),b.on("mousedown touchstart",this.bind(),e.on("mousedown touchstart",this.bind(),b.on("focus",this.bind(function(a){A(a)})),this.focusser.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")})).on("blur",this.bind(),this.search.on("focus",this.bind(),this.initContainerWidth(),this.opts.element.addClass("select2-offscreen"),this.setPlaceholder()},clear:initSelection:isPlaceholderOptionSelected:prepareOpts:getPlaceholder:setPlaceholder:postprocessResults:showSearch:onSelect:updateSelection:val:clearSearch:data:),f=O(d,{createContainer:prepareOpts:selectChoice:destroy:initContainer:function(){var d,b=".select2-choices";this.searchContainer=this.container.find(".select2-search-field"),this.selection=d=this.container.find(b);var e=this;this.selection.on("click",".select2-search-choice:not(.select2-locked)",,this.search.attr("id","s2id_autogen"+g()),this.search.prev().text(a("label[for='"+this.opts.element.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.search.on("input paste",this.bind(),this.search.attr("tabindex",this.elementTabIndex),this.keydowns=0,this.search.on("keydown",this.bind(),this.search.on("keyup",this.bind(),this.search.on("blur",this.bind(),this.container.on("click",b,this.bind(),this.container.on("focus",b,this.bind(),this.initContainerWidth(),this.opts.element.addClass("select2-offscreen"),this.clearSearch()},enableInterface:initSelection:clearSearch:clearPlaceholder:opening:close:focus:isFocused:updateSelection:tokenize:onSelect:function(a,c){this.triggerSelect(a)&&(this.addSelectedChoice(a),this.opts.element.trigger({type:"selected",val:this.id(a),choice:a}),this.nextSearchTerm=this.opts.nextSearchTerm(a,this.search.val()),this.clearSearch(),this.updateResults(),(this.select||!this.opts.closeOnSelect)&&this.postprocessResults(a,!1,this.opts.closeOnSelect===!0),this.opts.closeOnSelect?(this.close(),this.search.width(10)):this.countSelectableResults()>0?(this.search.width(10),this.resizeSearch(),this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()?this.updateResults(!0):this.nextSearchTerm!=b&&(this.search.val(this.nextSearchTerm),this.updateResults(),this.search.select()),this.positionDropdown()):(this.close(),this.search.width(10)),this.triggerChange({added:a}),c&&c.noFocus||this.focusSearch())},cancel:addSelectedChoice:unselect:postprocessResults:function(a,b,c){var d=this.getVal(),e=this.results.find(".select2-result"),f=this.results.find(".select2-result-with-children"),g=this;e.each2(,f.each2(,-1==this.highlight()&&c!==!1&&g.highlight(0),!this.opts.createSearchChoice&&!e.filter(".select2-result:not(.select2-selected)").length>0&&(!a||a&&!a.more&&0===this.results.find(".select2-no-results").length)&&J(g.opts.formatNoMatches,"formatNoMatches")&&this.results.append("<li class='select2-no-results'>"+K(g.opts.formatNoMatches,g.search.val())+"</li>")},getMaxSearchWidth:resizeSearch:getVal:setVal:buildChangeDetails:val:onSortStart:onSortEnd:data:),a.fn.select2=a.fn.select2.defaults={width:"copy",loadMorePadding:0,closeOnSelect:!0,openOnEnter:!0,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:formatSelection:sortResults:function(a){return a},formatResultCssClass:function(a){return a.css},formatSelectionCssClass:function(){return b},formatMatches:formatNoMatches:function(){return"No matches found"},formatInputTooShort:formatInputTooLong:formatSelectionTooBig:formatLoadMore:function(){return"Loading more results\u2026"},formatSearching:function(){return"Searching\u2026"},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:matcher:separator:",",tokenSeparators:[],tokenizer:M,escapeMarkup:F,blurOnChange:!1,selectOnBlur:!1,adaptContainerCssClass:function(a){return a},adaptDropdownCssClass:function(){return null},nextSearchTerm:function(){return b},searchInputPlaceholder:"",createSearchChoicePosition:"top",shouldFocusInput:,a.fn.select2.ajaxDefaults={transport:a.ajax,params:{type:"GET",cache:!1,dataType:"json"}},window.Select2={query:{ajax:G,local:H,tags:I},util:{debounce:w,markMatch:E,escapeMarkup:F,stripDiacritics:o},"class":{"abstract":d,single:e,multi:f}}}}(jQuery);
/**
 * @license AngularJS v1.4.14
 * (c) 2010-2015 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, document, undefined) {'use strict';

/**
 * @description
 *
 * This object provides a utility for producing rich Error messages within
 * Angular. It can be called as follows:
 *
 * var exampleMinErr = minErr('example');
 * throw exampleMinErr('one', 'This {0} is {1}', foo, bar);
 *
 * The above creates an instance of minErr in the example namespace. The
 * resulting error will have a namespaced error code of example.one.  The
 * resulting error will replace {0} with the value of foo, and {1} with the
 * value of bar. The object is not restricted in the number of arguments it can
 * take.
 *
 * If fewer arguments are specified than necessary for interpolation, the extra
 * interpolation markers will be preserved in the final string.
 *
 * Since data will be parsed statically during a build step, some restrictions
 * are applied with respect to how minErr instances are created and called.
 * Instances should have names of the form namespaceMinErr for a minErr created
 * using minErr('namespace') . Error codes, namespaces and template strings
 * should all be static strings, not variables or general expressions.
 *
 * @param {string} module The namespace to use for the new minErr instance.
 * @param {function} ErrorConstructor Custom error constructor to be instantiated when returning
 *   error from returned function, for cases when a particular type of error is useful.
 * @returns {function(code:string, template:string, ...templateArgs): Error} minErr instance
 */

function minErr(module, ErrorConstructor) {
  ErrorConstructor = ErrorConstructor || Error;
  return function() {
    var SKIP_INDEXES = 2;

    var templateArgs = arguments,
      code = templateArgs[0],
      message = '[' + (module ? module + ':' : '') + code + '] ',
      template = templateArgs[1],
      paramPrefix, i;

    message += template.replace(/\{\d+\}/g, function(match) {
      var index = +match.slice(1, -1),
        shiftedIndex = index + SKIP_INDEXES;

      if (shiftedIndex < templateArgs.length) {
        return toDebugString(templateArgs[shiftedIndex]);
      }

      return match;
    });

    message += '\nhttp://errors.angularjs.org/1.4.14/' +
      (module ? module + '/' : '') + code;

    for (i = SKIP_INDEXES, paramPrefix = '?'; i < templateArgs.length; i++, paramPrefix = '&') {
      message += paramPrefix + 'p' + (i - SKIP_INDEXES) + '=' +
        encodeURIComponent(toDebugString(templateArgs[i]));
    }

    return new ErrorConstructor(message);
  };
}

/* We need to tell jshint what variables are being exported */
/* global angular: true,
  msie: true,
  jqLite: true,
  jQuery: true,
  slice: true,
  splice: true,
  push: true,
  toString: true,
  ngMinErr: true,
  angularModule: true,
  uid: true,
  REGEX_STRING_REGEXP: true,
  VALIDITY_STATE_PROPERTY: true,

  lowercase: true,
  uppercase: true,
  manualLowercase: true,
  manualUppercase: true,
  nodeName_: true,
  isArrayLike: true,
  forEach: true,
  forEachSorted: true,
  reverseParams: true,
  nextUid: true,
  setHashKey: true,
  extend: true,
  toInt: true,
  inherit: true,
  merge: true,
  noop: true,
  identity: true,
  valueFn: true,
  isUndefined: true,
  isDefined: true,
  isObject: true,
  isBlankObject: true,
  isString: true,
  isNumber: true,
  isDate: true,
  isArray: true,
  isFunction: true,
  isRegExp: true,
  isWindow: true,
  isScope: true,
  isFile: true,
  isFormData: true,
  isBlob: true,
  isBoolean: true,
  isPromiseLike: true,
  trim: true,
  escapeForRegexp: true,
  isElement: true,
  makeMap: true,
  includes: true,
  arrayRemove: true,
  copy: true,
  shallowCopy: true,
  equals: true,
  csp: true,
  jq: true,
  concat: true,
  sliceArgs: true,
  bind: true,
  toJsonReplacer: true,
  toJson: true,
  fromJson: true,
  convertTimezoneToLocal: true,
  timezoneToOffset: true,
  startingTag: true,
  tryDecodeURIComponent: true,
  parseKeyValue: true,
  toKeyValue: true,
  encodeUriSegment: true,
  encodeUriQuery: true,
  angularInit: true,
  bootstrap: true,
  getTestability: true,
  snake_case: true,
  bindJQuery: true,
  assertArg: true,
  assertArgFn: true,
  assertNotHasOwnProperty: true,
  getter: true,
  getBlockNodes: true,
  hasOwnProperty: true,
  createMap: true,

  NODE_TYPE_ELEMENT: true,
  NODE_TYPE_ATTRIBUTE: true,
  NODE_TYPE_TEXT: true,
  NODE_TYPE_COMMENT: true,
  NODE_TYPE_DOCUMENT: true,
  NODE_TYPE_DOCUMENT_FRAGMENT: true,
*/

////////////////////////////////////

/**
 * @ngdoc module
 * @name ng
 * @module ng
 * @description
 *
 * # ng (core module)
 * The ng module is loaded by default when an AngularJS application is started. The module itself
 * contains the essential components for an AngularJS application to function. The table below
 * lists a high level breakdown of each of the services/factories, filters, directives and testing
 * components available within this core module.
 *
 * <div doc-module-components="ng"></div>
 */

var REGEX_STRING_REGEXP = /^\/(.+)\/([a-z]*)$/;

// The name of a form control's ValidityState property.
// This is used so that it's possible for internal tests to create mock ValidityStates.
var VALIDITY_STATE_PROPERTY = 'validity';

/**
 * @ngdoc function
 * @name angular.lowercase
 * @module ng
 * @kind function
 *
 * @description Converts the specified string to lowercase.
 * @param {string} string String to be converted to lowercase.
 * @returns {string} Lowercased string.
 */
var lowercase = function(string) {return isString(string) ? string.toLowerCase() : string;};
var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * @ngdoc function
 * @name angular.uppercase
 * @module ng
 * @kind function
 *
 * @description Converts the specified string to uppercase.
 * @param {string} string String to be converted to uppercase.
 * @returns {string} Uppercased string.
 */
var uppercase = function(string) {return isString(string) ? string.toUpperCase() : string;};


var manualLowercase = 
var manualUppercase = 


// String#toLowerCase and String#toUpperCase don't produce correct results in browsers with Turkish
// locale, for this reason we need to detect this case and redefine lowercase/uppercase methods
// with correct but slower alternatives.
if ('i' !== 'I'.toLowerCase()) {
  lowercase = manualLowercase;
  uppercase = manualUppercase;
}


var
    msie,             // holds major version number for IE, or NaN if UA is not IE.
    jqLite,           // delay binding since jQuery could be loaded after us.
    jQuery,           // delay binding
    slice             = [].slice,
    splice            = [].splice,
    push              = [].push,
    toString          = Object.prototype.toString,
    getPrototypeOf    = Object.getPrototypeOf,
    ngMinErr          = minErr('ng'),

    /** @name angular */
    angular           = window.angular || (window.angular = {}),
    angularModule,
    uid               = 0;

/**
 * documentMode is an IE-only property
 * http://msdn.microsoft.com/en-us/library/ie/cc196988(v=vs.85).aspx
 */
msie = document.documentMode;


/**
 * @private
 * @param {*} obj
 * @return {boolean} Returns true if `obj` is an array or array-like object (NodeList, Arguments,
 *                   String ...)
 */
function isArrayLike(obj) {

  // `null`, `undefined` and `window` are not array-like
  if (obj == null || isWindow(obj)) return false;

  // arrays, strings and jQuery/jqLite objects are array like
  // * jqLite is either the jQuery or jqLite constructor function
  // * we have to check the existance of jqLite first as this method is called
  //   via the forEach method when constructing the jqLite object in the first place
  if (isArray(obj) || isString(obj) || (jqLite && obj instanceof jqLite)) return true;

  // Support: iOS 8.2 (not reproducible in simulator)
  // "length" in obj used to prevent JIT error (gh-11508)
  var length = "length" in Object(obj) && obj.length;

  // NodeList objects (with `item` method) and
  // other objects with suitable length characteristics are array-like
  return isNumber(length) &&
    (length >= 0 && ((length - 1) in obj || obj instanceof Array) || typeof obj.item == 'function');

}

/**
 * @ngdoc function
 * @name angular.forEach
 * @module ng
 * @kind function
 *
 * @description
 * Invokes the `iterator` function once for each item in `obj` collection, which can be either an
 * object or an array. The `iterator` function is invoked with `iterator(value, key, obj)`, where `value`
 * is the value of an object property or an array element, `key` is the object property key or
 * array element index and obj is the `obj` itself. Specifying a `context` for the function is optional.
 *
 * It is worth noting that `.forEach` does not iterate over inherited properties because it filters
 * using the `hasOwnProperty` method.
 *
 * Unlike ES262's
 * [Array.prototype.forEach](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.18),
 * providing 'undefined' or 'null' values for `obj` will not throw a TypeError, but rather just
 * return the value provided.
 *
   ```js
     var values = {name: 'misko', gender: 'male'};
     var log = [];
     angular.forEach(values, function(value, key) {
       this.push(key + ': ' + value);
     }, log);
     expect(log).toEqual(['name: misko', 'gender: male']);
   ```
 *
 * @param {Object|Array} obj Object to iterate over.
 * @param {Function} iterator Iterator function.
 * @param {Object=} context Object to become context (`this`) for the iterator function.
 * @returns {Object|Array} Reference to `obj`.
 */

function forEach(obj, iterator, context) {
  var key, length;
  if (obj) {
    if (isFunction(obj)) {
      for (key in obj) {
        // Need to check if hasOwnProperty exists,
        // as on IE8 the result of querySelectorAll is an object without a hasOwnProperty function
        if (key != 'prototype' && key != 'length' && key != 'name' && (!obj.hasOwnProperty || obj.hasOwnProperty(key))) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    } else if (isArray(obj) || isArrayLike(obj)) {
      var isPrimitive = typeof obj !== 'object';
      for (key = 0, length = obj.length; key < length; key++) {
        if (isPrimitive || key in obj) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    } else if (obj.forEach && obj.forEach !== forEach) {
        obj.forEach(iterator, context, obj);
    } else if (isBlankObject(obj)) {
      // createMap() fast path --- Safe to avoid hasOwnProperty check because prototype chain is empty
      for (key in obj) {
        iterator.call(context, obj[key], key, obj);
      }
    } else if (typeof obj.hasOwnProperty === 'function') {
      // Slow path for objects inheriting Object.prototype, hasOwnProperty check needed
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    } else {
      // Slow path for objects which do not have a method `hasOwnProperty`
      for (key in obj) {
        if (hasOwnProperty.call(obj, key)) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    }
  }
  return obj;
}



/**
 * when using forEach the params are value, key, but it is often useful to have key, value.
 * @param {function(string, *)} iteratorFn
 * @returns {function(*, string)}
 */

/**
 * A consistent way of creating unique IDs in angular.
 *
 * Using simple numbers allows us to generate 28.6 million unique ids per second for 10 years before
 * we hit number precision issues in JavaScript.
 *
 * Math.pow(2,53) / 60 / 60 / 24 / 365 / 10 = 28.6M
 *
 * @returns {number} an unique alpha-numeric string
 */
function nextUid() {
  return ++uid;
}


/**
 * Set or clear the hashkey for an object.
 * @param obj object
 * @param h the hashkey (!truthy to delete the hashkey)
 */



/**
 * @ngdoc function
 * @name angular.extend
 * @module ng
 * @kind function
 *
 * @description
 * Extends the destination object `dst` by copying own enumerable properties from the `src` object(s)
 * to `dst`. You can specify multiple `src` objects. If you want to preserve original objects, you can do so
 * by passing an empty object as the target: `var object = angular.extend({}, object1, object2)`.
 *
 * **Note:** Keep in mind that `angular.extend` does not support recursive merge (deep copy). Use
 * {@link angular.merge} for this.
 *
 * @param {Object} dst Destination object.
 * @param {...Object} src Source object(s).
 * @returns {Object} Reference to `dst`.
 */
function extend(dst) {
  return baseExtend(dst, slice.call(arguments, 1), false);
}


/**
* @ngdoc function
* @name angular.merge
* @module ng
* @kind function
*
* @description
* Deeply extends the destination object `dst` by copying own enumerable properties from the `src` object(s)
* to `dst`. You can specify multiple `src` objects. If you want to preserve original objects, you can do so
* by passing an empty object as the target: `var object = angular.merge({}, object1, object2)`.
*
* Unlike {@link angular.extend extend()}, `merge()` recursively descends into object properties of source
* objects, performing a deep copy.
*
* @param {Object} dst Destination object.
* @param {...Object} src Source object(s).
* @returns {Object} Reference to `dst`.
*/






/**
 * @ngdoc function
 * @name angular.noop
 * @module ng
 * @kind function
 *
 * @description
 * A function that performs no operations. This function can be useful when writing code in the
 * functional style.
   ```js
     function foo(callback) {
       var result = calculateResult();
       (callback || angular.noop)(result);
     }
   ```
 */
function noop() {}
noop.$inject = [];


/**
 * @ngdoc function
 * @name angular.identity
 * @module ng
 * @kind function
 *
 * @description
 * A function that returns its first argument. This function is useful when writing code in the
 * functional style.
 *
   ```js
   function transformer(transformationFn, value) {
     return (transformationFn || angular.identity)(value);
   };

   // E.g.
   function getResult(fn, input) {
     return (fn || angular.identity)(input);
   };

   getResult(function(n) { return n * 2; }, 21);   // returns 42
   getResult(null, 21);                            // returns 21
   getResult(undefined, 21);                       // returns 21
   ```
 *
 * @param {*} value to be returned.
 * @returns {*} the value passed in.
 */
function identity($) {return $;}
identity.$inject = [];





/**
 * @ngdoc function
 * @name angular.isUndefined
 * @module ng
 * @kind function
 *
 * @description
 * Determines if a reference is undefined.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is undefined.
 */
function isUndefined(value) {return typeof value === 'undefined';}


/**
 * @ngdoc function
 * @name angular.isDefined
 * @module ng
 * @kind function
 *
 * @description
 * Determines if a reference is defined.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is defined.
 */


/**
 * @ngdoc function
 * @name angular.isObject
 * @module ng
 * @kind function
 *
 * @description
 * Determines if a reference is an `Object`. Unlike `typeof` in JavaScript, `null`s are not
 * considered to be objects. Note that JavaScript arrays are objects.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is an `Object` but not `null`.
 */


/**
 * Determine if a value is an object with a null prototype
 *
 * @returns {boolean} True if `value` is an `Object` with a null prototype
 */


/**
 * @ngdoc function
 * @name angular.isString
 * @module ng
 * @kind function
 *
 * @description
 * Determines if a reference is a `String`.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is a `String`.
 */
function isString(value) {return typeof value === 'string';}


/**
 * @ngdoc function
 * @name angular.isNumber
 * @module ng
 * @kind function
 *
 * @description
 * Determines if a reference is a `Number`.
 *
 * This includes the "special" numbers `NaN`, `+Infinity` and `-Infinity`.
 *
 * If you wish to exclude these then you can use the native
 * [`isFinite'](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite)
 * method.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is a `Number`.
 */
function isNumber(value) {return typeof value === 'number';}


/**
 * @ngdoc function
 * @name angular.isDate
 * @module ng
 * @kind function
 *
 * @description
 * Determines if a value is a date.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is a `Date`.
 */
function isDate(value) {
  return toString.call(value) === '[object Date]';
}


/**
 * @ngdoc function
 * @name angular.isArray
 * @module ng
 * @kind function
 *
 * @description
 * Determines if a reference is an `Array`.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is an `Array`.
 */
var isArray = Array.isArray;

/**
 * @ngdoc function
 * @name angular.isFunction
 * @module ng
 * @kind function
 *
 * @description
 * Determines if a reference is a `Function`.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is a `Function`.
 */
function isFunction(value) {return typeof value === 'function';}


/**
 * Determines if a value is a regular expression object.
 *
 * @private
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is a `RegExp`.
 */
function isRegExp(value) {
  return toString.call(value) === '[object RegExp]';
}


/**
 * Checks if `obj` is a window object.
 *
 * @private
 * @param {*} obj Object to check
 * @returns {boolean} True if `obj` is a window obj.
 */




function isFile(obj) {
  return toString.call(obj) === '[object File]';
}


function isFormData(obj) {
  return toString.call(obj) === '[object FormData]';
}








var TYPED_ARRAY_REGEXP = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/;


var trim = 

// Copied from:
// http://docs.closure-library.googlecode.com/git/local_closure_goog_string_string.js.source.html#line1021
// Prereq: s is a string.
var escapeForRegexp = 


/**
 * @ngdoc function
 * @name angular.isElement
 * @module ng
 * @kind function
 *
 * @description
 * Determines if a reference is a DOM element (or wrapped jQuery element).
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is a DOM element (or wrapped jQuery element).
 */

/**
 * @param str 'key1,key2,...'
 * @returns {object} in the form of {key1:true, key2:true, ...}
 */





/**
 * @ngdoc function
 * @name angular.copy
 * @module ng
 * @kind function
 *
 * @description
 * Creates a deep copy of `source`, which should be an object or an array.
 *
 * * If no destination is supplied, a copy of the object or array is created.
 * * If a destination is provided, all of its elements (for arrays) or properties (for objects)
 *   are deleted and then all elements/properties from the source are copied to it.
 * * If `source` is not an object or array (inc. `null` and `undefined`), `source` is returned.
 * * If `source` is identical to 'destination' an exception will be thrown.
 *
 * @param {*} source The source that will be used to make a copy.
 *                   Can be any type, including primitives, `null`, and `undefined`.
 * @param {(Object|Array)=} destination Destination into which the source is copied. If
 *     provided, must be of the same type as `source`.
 * @returns {*} The copy or updated `destination`, if `destination` was specified.
 *
 * @example
 <example module="copyExample">
 <file name="index.html">
 <div ng-controller="ExampleController">
 <form novalidate class="simple-form">
 Name: <input type="text" ng-model="user.name" /><br />
 E-mail: <input type="email" ng-model="user.email" /><br />
 Gender: <input type="radio" ng-model="user.gender" value="male" />male
 <input type="radio" ng-model="user.gender" value="female" />female<br />
 <button ng-click="reset()">RESET</button>
 <button ng-click="update(user)">SAVE</button>
 </form>
 <pre>form = {{user | json}}</pre>
 <pre>master = {{master | json}}</pre>
 </div>

 <script>
  angular.module('copyExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.master= {};

      $scope.update = function(user) {
        // Example with 1 argument
        $scope.master= angular.copy(user);
      };

      $scope.reset = function() {
        // Example with 2 arguments
        angular.copy($scope.master, $scope.user);
      };

      $scope.reset();
    }]);
 </script>
 </file>
 </example>
 */
function copy(source, destination) {
  var stackSource = [];
  var stackDest = [];

  if (destination) {
    if (isTypedArray(destination)) {
      throw ngMinErr('cpta', "Can't copy! TypedArray destination cannot be mutated.");
    }
    if (source === destination) {
      throw ngMinErr('cpi', "Can't copy! Source and destination are identical.");
    }

    // Empty the destination object
    if (isArray(destination)) {
      destination.length = 0;
    } else {
      forEach(destination, ;
    }

    stackSource.push(source);
    stackDest.push(destination);
    return copyRecurse(source, destination);
  }

  return copyElement(source);

  function copyRecurse(source, destination) {
    var h = destination.$$hashKey;
    var result, key;
    if (isArray(source)) {
      for (var i = 0, ii = source.length; i < ii; i++) {
        destination.push(copyElement(source[i]));
      }
    } else if (isBlankObject(source)) {
      // createMap() fast path --- Safe to avoid hasOwnProperty check because prototype chain is empty
      for (key in source) {
        destination[key] = copyElement(source[key]);
      }
    } else if (source && typeof source.hasOwnProperty === 'function') {
      // Slow path, which must rely on hasOwnProperty
      for (key in source) {
        if (source.hasOwnProperty(key)) {
          destination[key] = copyElement(source[key]);
        }
      }
    } else {
      // Slowest path --- hasOwnProperty can't be called as a method
      for (key in source) {
        if (hasOwnProperty.call(source, key)) {
          destination[key] = copyElement(source[key]);
        }
      }
    }
    setHashKey(destination, h);
    return destination;
  }

  function copyElement(source) {
    // Simple values
    if (!isObject(source)) {
      return source;
    }

    // Already copied values
    var index = stackSource.indexOf(source);
    if (index !== -1) {
      return stackDest[index];
    }

    if (isWindow(source) || isScope(source)) {
      throw ngMinErr('cpws',
        "Can't copy! Making copies of Window or Scope instances is not supported.");
    }

    var needsRecurse = false;
    var destination;

    if (isArray(source)) {
      destination = [];
      needsRecurse = true;
    } else if (isTypedArray(source)) {
      destination = new source.constructor(source);
    } else if (isDate(source)) {
      destination = new Date(source.getTime());
    } else if (isRegExp(source)) {
      destination = new RegExp(source.source, source.toString().match(/[^\/]*$/)[0]);
      destination.lastIndex = source.lastIndex;
    } else if (isBlob(source)) {
      destination = new source.constructor([source], {type: source.type});
    } else if (isFunction(source.cloneNode)) {
        destination = source.cloneNode(true);
    } else {
      destination = Object.create(getPrototypeOf(source));
      needsRecurse = true;
    }

    stackSource.push(source);
    stackDest.push(destination);

    return needsRecurse
      ? copyRecurse(source, destination)
      : destination;
  }
}

/**
 * Creates a shallow copy of an object, an array or a primitive.
 *
 * Assumes that there are no proto properties for objects.
 */


/**
 * @ngdoc function
 * @name angular.equals
 * @module ng
 * @kind function
 *
 * @description
 * Determines if two objects or two values are equivalent. Supports value types, regular
 * expressions, arrays and objects.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties are equal by
 *   comparing them with `angular.equals`.
 * * Both values are NaN. (In JavaScript, NaN == NaN => false. But we consider two NaN as equal)
 * * Both values represent the same regular expression (In JavaScript,
 *   /abc/ == /abc/ => false. But we consider two regular expressions as equal when their textual
 *   representation matches).
 *
 * During a property comparison, properties of `function` type and properties with names
 * that begin with `$` are ignored.
 *
 * Scope and DOMWindow objects are being compared only by identify (`===`).
 *
 * @param {*} o1 Object or value to compare.
 * @param {*} o2 Object or value to compare.
 * @returns {boolean} True if arguments are equal.
 */
function equals(o1, o2) {
  if (o1 === o2) return true;
  if (o1 === null || o2 === null) return false;
  if (o1 !== o1 && o2 !== o2) return true; // NaN === NaN
  var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
  if (t1 == t2) {
    if (t1 == 'object') {
      if (isArray(o1)) {
        if (!isArray(o2)) return false;
        if ((length = o1.length) == o2.length) {
          for (key = 0; key < length; key++) {
            if (!equals(o1[key], o2[key])) return false;
          }
          return true;
        }
      } else if (isDate(o1)) {
        if (!isDate(o2)) return false;
        return equals(o1.getTime(), o2.getTime());
      } else if (isRegExp(o1)) {
        return isRegExp(o2) ? o1.toString() == o2.toString() : false;
      } else {
        if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2) ||
          isArray(o2) || isDate(o2) || isRegExp(o2)) return false;
        keySet = createMap();
        for (key in o1) {
          if (key.charAt(0) === '$' || isFunction(o1[key])) continue;
          if (!equals(o1[key], o2[key])) return false;
          keySet[key] = true;
        }
        for (key in o2) {
          if (!(key in keySet) &&
              key.charAt(0) !== '$' &&
              isDefined(o2[key]) &&
              !isFunction(o2[key])) return false;
        }
        return true;
      }
    }
  }
  return false;
}

var csp = function() {
  if (!isDefined(csp.rules)) {


    var ngCspElement = (document.querySelector('[ng-csp]') ||
                    document.querySelector('[data-ng-csp]'));

    if (ngCspElement) {
      var ngCspAttribute = ngCspElement.getAttribute('ng-csp') ||
                    ngCspElement.getAttribute('data-ng-csp');
      csp.rules = {
        noUnsafeEval: !ngCspAttribute || (ngCspAttribute.indexOf('no-unsafe-eval') !== -1),
        noInlineStyle: !ngCspAttribute || (ngCspAttribute.indexOf('no-inline-style') !== -1)
      };
    } else {
      csp.rules = {
        noUnsafeEval: noUnsafeEval(),
        noInlineStyle: false
      };
    }
  }

  return csp.rules;

  };

/**
 * @ngdoc directive
 * @module ng
 * @name ngJq
 *
 * @element ANY
 * @param {string=} ngJq the name of the library available under `window`
 * to be used for angular.element
 * @description
 * Use this directive to force the angular.element library.  This should be
 * used to force either jqLite by leaving ng-jq blank or setting the name of
 * the jquery variable under window (eg. jQuery).
 *
 * Since angular looks for this directive when it is loaded (doesn't wait for the
 * DOMContentLoaded event), it must be placed on an element that comes before the script
 * which loads angular. Also, only the first instance of `ng-jq` will be used and all
 * others ignored.
 *
 * @example
 * This example shows how to force jqLite using the `ngJq` directive to the `html` tag.
 ```html
 <!doctype html>
 <html ng-app ng-jq>
 ...
 ...
 </html>
 ```
 * @example
 * This example shows how to use a jQuery based library of a different name.
 * The library name must be available at the top most 'window'.
 ```html
 <!doctype html>
 <html ng-app ng-jq="jQueryLib">
 ...
 ...
 </html>
 ```
 */
var jq = function() {
  if (isDefined(jq.name_)) return jq.name_;
  var el;
  var i, ii = ngAttrPrefixes.length, prefix, name;
  for (i = 0; i < ii; ++i) {
    prefix = ngAttrPrefixes[i];
    if (el = document.querySelector('[' + prefix.replace(':', '\\:') + 'jq]')) {
      name = el.getAttribute(prefix + 'jq');
      break;
    }
  }

  return (jq.name_ = name);
};




/* jshint -W101 */
/**
 * @ngdoc function
 * @name angular.bind
 * @module ng
 * @kind function
 *
 * @description
 * Returns a function which calls function `fn` bound to `self` (`self` becomes the `this` for
 * `fn`). You can supply optional `args` that are prebound to the function. This feature is also
 * known as [partial application](http://en.wikipedia.org/wiki/Partial_application), as
 * distinguished from [function currying](http://en.wikipedia.org/wiki/Currying#Contrast_with_partial_function_application).
 *
 * @param {Object} self Context which `fn` should be evaluated in.
 * @param {function()} fn Function to be bound.
 * @param {...*} args Optional arguments to be prebound to the `fn` function call.
 * @returns {function()} Function that wraps the `fn` with all the specified bindings.
 */
/* jshint +W101 */


function toJsonReplacer(key, value) {
  var val = value;

  if (typeof key === 'string' && key.charAt(0) === '$' && key.charAt(1) === '$') {
    val = undefined;
  } else if (isWindow(value)) {
    val = '$WINDOW';
  } else if (value &&  document === value) {
    val = '$DOCUMENT';
  } else if (isScope(value)) {
    val = '$SCOPE';
  }

  return val;
}


/**
 * @ngdoc function
 * @name angular.toJson
 * @module ng
 * @kind function
 *
 * @description
 * Serializes input into a JSON-formatted string. Properties with leading $$ characters will be
 * stripped since angular uses this notation internally.
 *
 * @param {Object|Array|Date|string|number} obj Input to be serialized into JSON.
 * @param {boolean|number} [pretty=2] If set to true, the JSON output will contain newlines and whitespace.
 *    If set to an integer, the JSON output will contain that many spaces per indentation.
 * @returns {string|undefined} JSON-ified string representing `obj`.
 */


/**
 * @ngdoc function
 * @name angular.fromJson
 * @module ng
 * @kind function
 *
 * @description
 * Deserializes a JSON string.
 *
 * @param {string} json JSON string to deserialize.
 * @returns {Object|Array|string|number} Deserialized JSON string.
 */


var ALL_COLONS = /:/g;






/**
 * @returns {string} Returns the string representation of the element.
 */


/////////////////////////////////////////////////

/**
 * Tries to decode the URI component without throwing an exception.
 *
 * @private
 * @param str value potential URI component to check.
 * @returns {boolean} True if `value` can be decoded
 * with the decodeURIComponent function.
 */


/**
 * Parses an escaped url query string into key-value pairs.
 * @returns {Object.<string,boolean|Array>}
 */



/**
 * We need our custom method because encodeURIComponent is too aggressive and doesn't follow
 * http://www.ietf.org/rfc/rfc3986.txt with regards to the character set (pchar) allowed in path
 * segments:
 *    segment       = *pchar
 *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
 *    pct-encoded   = "%" HEXDIG HEXDIG
 *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
 *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
 *                     / "*" / "+" / "," / ";" / "="
 */


/**
 * This method is intended for encoding *key* or *value* parts of query component. We need a custom
 * method because encodeURIComponent is too aggressive and encodes stuff that doesn't have to be
 * encoded per http://tools.ietf.org/html/rfc3986:
 *    query       = *( pchar / "/" / "?" )
 *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
 *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
 *    pct-encoded   = "%" HEXDIG HEXDIG
 *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
 *                     / "*" / "+" / "," / ";" / "="
 */

var ngAttrPrefixes = ['ng-', 'data-ng-', 'ng:', 'x-ng-'];


/**
 * @ngdoc directive
 * @name ngApp
 * @module ng
 *
 * @element ANY
 * @param {angular.Module} ngApp an optional application
 *   {@link angular.module module} name to load.
 * @param {boolean=} ngStrictDi if this attribute is present on the app element, the injector will be
 *   created in "strict-di" mode. This means that the application will fail to invoke functions which
 *   do not use explicit function annotation (and are thus unsuitable for minification), as described
 *   in {@link guide/di the Dependency Injection guide}, and useful debugging info will assist in
 *   tracking down the root of these bugs.
 *
 * @description
 *
 * Use this directive to **auto-bootstrap** an AngularJS application. The `ngApp` directive
 * designates the **root element** of the application and is typically placed near the root element
 * of the page - e.g. on the `<body>` or `<html>` tags.
 *
 * Only one AngularJS application can be auto-bootstrapped per HTML document. The first `ngApp`
 * found in the document will be used to define the root element to auto-bootstrap as an
 * application. To run multiple applications in an HTML document you must manually bootstrap them using
 * {@link angular.bootstrap} instead. AngularJS applications cannot be nested within each other.
 *
 * You can specify an **AngularJS module** to be used as the root module for the application.  This
 * module will be loaded into the {@link auto.$injector} when the application is bootstrapped. It
 * should contain the application code needed or have dependencies on other modules that will
 * contain the code. See {@link angular.module} for more information.
 *
 * In the example below if the `ngApp` directive were not placed on the `html` element then the
 * document would not be compiled, the `AppController` would not be instantiated and the `{{ a+b }}`
 * would not be resolved to `3`.
 *
 * `ngApp` is the easiest, and most common way to bootstrap an application.
 *
 <example module="ngAppDemo">
   <file name="index.html">
   <div ng-controller="ngAppDemoController">
     I can add: {{a}} + {{b}} =  {{ a+b }}
   </div>
   </file>
   <file name="script.js">
   angular.module('ngAppDemo', []).controller('ngAppDemoController', function($scope) {
     $scope.a = 1;
     $scope.b = 2;
   });
   </file>
 </example>
 *
 * Using `ngStrictDi`, you would see something like this:
 *
 <example ng-app-included="true">
   <file name="index.html">
   <div ng-app="ngAppStrictDemo" ng-strict-di>
       <div ng-controller="GoodController1">
           I can add: {{a}} + {{b}} =  {{ a+b }}

           <p>This renders because the controller does not fail to
              instantiate, by using explicit annotation style (see
              script.js for details)
           </p>
       </div>

       <div ng-controller="GoodController2">
           Name: <input ng-model="name"><br />
           Hello, {{name}}!

           <p>This renders because the controller does not fail to
              instantiate, by using explicit annotation style
              (see script.js for details)
           </p>
       </div>

       <div ng-controller="BadController">
           I can add: {{a}} + {{b}} =  {{ a+b }}

           <p>The controller could not be instantiated, due to relying
              on automatic function annotations (which are disabled in
              strict mode). As such, the content of this section is not
              interpolated, and there should be an error in your web console.
           </p>
       </div>
   </div>
   </file>
   <file name="script.js">
   angular.module('ngAppStrictDemo', [])
     // BadController will fail to instantiate, due to relying on automatic function annotation,
     // rather than an explicit annotation
     .controller('BadController', function($scope) {
       $scope.a = 1;
       $scope.b = 2;
     })
     // Unlike BadController, GoodController1 and GoodController2 will not fail to be instantiated,
     // due to using explicit annotations using the array style and $inject property, respectively.
     .controller('GoodController1', ['$scope', function($scope) {
       $scope.a = 1;
       $scope.b = 2;
     }])
     .controller('GoodController2', GoodController2);
     function GoodController2($scope) {
       $scope.name = "World";
     }
     GoodController2.$inject = ['$scope'];
   </file>
   <file name="style.css">
   div[ng-controller] {
       margin-bottom: 1em;
       -webkit-border-radius: 4px;
       border-radius: 4px;
       border: 1px solid;
       padding: .5em;
   }
   div[ng-controller^=Good] {
       border-color: #d6e9c6;
       background-color: #dff0d8;
       color: #3c763d;
   }
   div[ng-controller^=Bad] {
       border-color: #ebccd1;
       background-color: #f2dede;
       color: #a94442;
       margin-bottom: 0;
   }
   </file>
 </example>
 */

/**
 * @ngdoc function
 * @name angular.bootstrap
 * @module ng
 * @description
 * Use this function to manually start up angular application.
 *
 * See: {@link guide/bootstrap Bootstrap}
 *
 * Note that Protractor based end-to-end tests cannot use this function to bootstrap manually.
 * They must use {@link ng.directive:ngApp ngApp}.
 *
 * Angular will detect if it has been loaded into the browser more than once and only allow the
 * first loaded script to be bootstrapped and will report a warning to the browser console for
 * each of the subsequent scripts. This prevents strange results in applications, where otherwise
 * multiple instances of Angular try to work on the DOM.
 *
 * ```html
 * <!doctype html>
 * <html>
 * <body>
 * <div ng-controller="WelcomeController">
 *   {{greeting}}
 * </div>
 *
 * <script src="angular.js"></script>
 * <script>
 *   var app = angular.module('demo', [])
 *   .controller('WelcomeController', function($scope) {
 *       $scope.greeting = 'Welcome!';
 *   });
 *   angular.bootstrap(document, ['demo']);
 * </script>
 * </body>
 * </html>
 * ```
 *
 * @param {DOMElement} element DOM element which is the root of angular application.
 * @param {Array<String|Function|Array>=} modules an array of modules to load into the application.
 *     Each item in the array should be the name of a predefined module or a (DI annotated)
 *     function that will be invoked by the injector as a `config` block.
 *     See: {@link angular.module modules}
 * @param {Object=} config an object for defining configuration options for the application. The
 *     following keys are supported:
 *
 * * `strictDi` - disable automatic function annotation for the application. This is meant to
 *   assist in finding bugs which break minified code. Defaults to `false`.
 *
 * @returns {auto.$injector} Returns the newly created injector for this app.
 */
function bootstrap(element, modules, config) {
  if (!isObject(config)) config = {};
  var defaultConfig = {
    strictDi: false
  };
  config = extend(defaultConfig, config);
  var doBootstrap = function() {
    element = jqLite(element);

    if (element.injector()) {
      var tag = (element[0] === document) ? 'document' : startingTag(element);
      //Encode angle brackets to prevent input from being sanitized to empty string #8683
      throw ngMinErr(
          'btstrpd',
          "App already bootstrapped with this element '{0}'",
          tag.replace(/</,'&lt;').replace(/>/,'&gt;'));
    }

    modules = modules || [];
    modules.unshift(['$provide', function($provide) {
      $provide.value('$rootElement', element);
    }]);

    if (config.debugInfoEnabled) {
      // Pushing so that this overrides `debugInfoEnabled` setting defined in user's `modules`.
      modules.push(['$compileProvider', );
    }

    modules.unshift('ng');
    var injector = createInjector(modules, config.strictDi);
    injector.invoke(['$rootScope', '$rootElement', '$compile', '$injector',
       
    );
    return injector;
  };

  var NG_ENABLE_DEBUG_INFO = /^NG_ENABLE_DEBUG_INFO!/;
  var NG_DEFER_BOOTSTRAP = /^NG_DEFER_BOOTSTRAP!/;

  if (window && NG_ENABLE_DEBUG_INFO.test(window.name)) {
    config.debugInfoEnabled = true;
    window.name = window.name.replace(NG_ENABLE_DEBUG_INFO, '');
  }

  if (window && !NG_DEFER_BOOTSTRAP.test(window.name)) {
    return doBootstrap();
  }

  window.name = window.name.replace(NG_DEFER_BOOTSTRAP, '');
  angular.resumeBootstrap = 

  if (isFunction(angular.resumeDeferredBootstrap)) {
    angular.resumeDeferredBootstrap();
  }
}

/**
 * @ngdoc function
 * @name angular.reloadWithDebugInfo
 * @module ng
 * @description
 * Use this function to reload the current application with debug information turned on.
 * This takes precedence over a call to `$compileProvider.debugInfoEnabled(false)`.
 *
 * See {@link ng.$compileProvider#debugInfoEnabled} for more.
 */

/**
 * @name angular.getTestability
 * @module ng
 * @description
 * Get the testability service for the instance of Angular on the given
 * element.
 * @param {DOMElement} element DOM element which is the root of angular application.
 */

var SNAKE_CASE_REGEXP = /[A-Z]/g;

var bindJQueryFired = false;
var skipDestroyOnNextJQueryCleanData;
function bindJQuery() {
  var originalCleanData;

  if (bindJQueryFired) {
    return;
  }

  // bind to jQuery if present;
  var jqName = jq();
  jQuery = isUndefined(jqName) ? window.jQuery :   // use jQuery (if present)
           !jqName             ? undefined     :   // use jqLite
                                 window[jqName];   // use jQuery specified by `ngJq`

  // Use jQuery if it exists with proper functionality, otherwise default to us.
  // Angular 1.2+ requires jQuery 1.7+ for on()/off() support.
  // Angular 1.3+ technically requires at least jQuery 2.1+ but it may work with older
  // versions. It will not work for sure with jQuery <1.7, though.
  if (jQuery && jQuery.fn.on) {
    jqLite = jQuery;
    extend(jQuery.fn, {
      scope: JQLitePrototype.scope,
      isolateScope: JQLitePrototype.isolateScope,
      controller: JQLitePrototype.controller,
      injector: JQLitePrototype.injector,
      inheritedData: JQLitePrototype.inheritedData
    });

    // All nodes removed from the DOM via various jQuery APIs like .remove()
    // are passed through jQuery.cleanData. Monkey-patch this method to fire
    // the $destroy event on all removed nodes.
    originalCleanData = jQuery.cleanData;
    jQuery.cleanData = function(elems) {
      var events;
      if (!skipDestroyOnNextJQueryCleanData) {
        for (var i = 0, elem; (elem = elems[i]) != null; i++) {
          events = jQuery._data(elem, "events");
          if (events && events.$destroy) {
            jQuery(elem).triggerHandler('$destroy');
          }
        }
      } else {
        skipDestroyOnNextJQueryCleanData = false;
      }
      originalCleanData(elems);
    };
  } else {
    jqLite = JQLite;
  }

  angular.element = jqLite;

  // Prevent double-proxying.
  bindJQueryFired = true;
}

/**
 * throw error if the argument is falsy.
 */


/**
 * throw error if the name given is hasOwnProperty
 * @param  {String} name    the name to test
 * @param  {String} context the context in which the name is used, such as module or directive
 */

/**
 * Return the value accessible from the object by path. Any undefined traversals are ignored
 * @param {Object} obj starting object
 * @param {String} path path to traverse
 * @param {boolean} [bindFnToScope=true]
 * @returns {Object} value as accessible by path
 */
//TODO(misko): this function needs to be removed

/**
 * Return the DOM siblings between the first and last node in the given array.
 * @param {Array} array like object
 * @returns {Array} the inputted object or a jqLite collection containing the nodes
 */


/**
 * Creates a new object without a prototype. This object is useful for lookup without having to
 * guard against prototypically inherited properties via hasOwnProperty.
 *
 * Related micro-benchmarks:
 * - http://jsperf.com/object-create2
 * - http://jsperf.com/proto-map-lookup/2
 * - http://jsperf.com/for-in-vs-object-keys2
 *
 * @returns {Object}
 */

var NODE_TYPE_ELEMENT = 1;
var NODE_TYPE_ATTRIBUTE = 2;
var NODE_TYPE_TEXT = 3;
var NODE_TYPE_COMMENT = 8;
var NODE_TYPE_DOCUMENT = 9;
var NODE_TYPE_DOCUMENT_FRAGMENT = 11;

/**
 * @ngdoc type
 * @name angular.Module
 * @module ng
 * @description
 *
 * Interface for configuring angular {@link angular.module modules}.
 */

function setupModuleLoader(window) {

  var $injectorMinErr = minErr('$injector');
  var ngMinErr = minErr('ng');

  
  var angular = ensure(window, 'angular', Object);

  // We need to expose `angular.$$minErr` to modules such as `ngResource` that reference it during bootstrap
  angular.$$minErr = angular.$$minErr || minErr;

  return ensure(angular, 'module', function() {
    /** @type {Object.<string, angular.Module>} */
    var modules = {};

    /**
     * @ngdoc function
     * @name angular.module
     * @module ng
     * @description
     *
     * The `angular.module` is a global place for creating, registering and retrieving Angular
     * modules.
     * All modules (angular core or 3rd party) that should be available to an application must be
     * registered using this mechanism.
     *
     * Passing one argument retrieves an existing {@link angular.Module},
     * whereas passing more than one argument creates a new {@link angular.Module}
     *
     *
     * # Module
     *
     * A module is a collection of services, directives, controllers, filters, and configuration information.
     * `angular.module` is used to configure the {@link auto.$injector $injector}.
     *
     * ```js
     * // Create a new module
     * var myModule = angular.module('myModule', []);
     *
     * // register a new service
     * myModule.value('appName', 'MyCoolApp');
     *
     * // configure existing services inside initialization blocks.
     * myModule.config(['$locationProvider', function($locationProvider) {
     *   // Configure existing providers
     *   $locationProvider.hashPrefix('!');
     * }]);
     * ```
     *
     * Then you can create an injector and load your modules like this:
     *
     * ```js
     * var injector = angular.injector(['ng', 'myModule'])
     * ```
     *
     * However it's more likely that you'll just use
     * {@link ng.directive:ngApp ngApp} or
     * {@link angular.bootstrap} to simplify this process for you.
     *
     * @param {!string} name The name of the module to create or retrieve.
     * @param {!Array.<string>=} requires If specified then new module is being created. If
     *        unspecified then the module is being retrieved for further configuration.
     * @param {Function=} configFn Optional configuration function for the module. Same as
     *        {@link angular.Module#config Module#config()}.
     * @returns {angular.Module} new module with the {@link angular.Module} api.
     */
    return function module(name, requires, configFn) {
      var assertNotHasOwnProperty = 

      assertNotHasOwnProperty(name, 'module');
      if (requires && modules.hasOwnProperty(name)) {
        modules[name] = null;
      }
      return ensure(modules, name, function() {
        if (!requires) {
          throw $injectorMinErr('nomod', "Module '{0}' is not available! You either misspelled " +
             "the module name or forgot to load it. If registering a module ensure that you " +
             "specify the dependencies as the second argument.", name);
        }

        /** @type {!Array.<Array.<*>>} */
        var invokeQueue = [];

        /** @type {!Array.<Function>} */
        var configBlocks = [];

        /** @type {!Array.<Function>} */
        var runBlocks = [];

        var config = invokeLater('$injector', 'invoke', 'push', configBlocks);

        /** @type {angular.Module} */
        var moduleInstance = {
          // Private state
          _invokeQueue: invokeQueue,
          _configBlocks: configBlocks,
          _runBlocks: runBlocks,

          /**
           * @ngdoc property
           * @name angular.Module#requires
           * @module ng
           *
           * @description
           * Holds the list of modules which the injector will load before the current module is
           * loaded.
           */
          requires: requires,

          /**
           * @ngdoc property
           * @name angular.Module#name
           * @module ng
           *
           * @description
           * Name of the module.
           */
          name: name,


          /**
           * @ngdoc method
           * @name angular.Module#provider
           * @module ng
           * @param {string} name service name
           * @param {Function} providerType Construction function for creating new instance of the
           *                                service.
           * @description
           * See {@link auto.$provide#provider $provide.provider()}.
           */
          provider: invokeLaterAndSetModuleName('$provide', 'provider'),

          /**
           * @ngdoc method
           * @name angular.Module#factory
           * @module ng
           * @param {string} name service name
           * @param {Function} providerFunction Function for creating new instance of the service.
           * @description
           * See {@link auto.$provide#factory $provide.factory()}.
           */
          factory: invokeLaterAndSetModuleName('$provide', 'factory'),

          /**
           * @ngdoc method
           * @name angular.Module#service
           * @module ng
           * @param {string} name service name
           * @param {Function} constructor A constructor function that will be instantiated.
           * @description
           * See {@link auto.$provide#service $provide.service()}.
           */
          service: invokeLaterAndSetModuleName('$provide', 'service'),

          /**
           * @ngdoc method
           * @name angular.Module#value
           * @module ng
           * @param {string} name service name
           * @param {*} object Service instance object.
           * @description
           * See {@link auto.$provide#value $provide.value()}.
           */
          value: invokeLater('$provide', 'value'),

          /**
           * @ngdoc method
           * @name angular.Module#constant
           * @module ng
           * @param {string} name constant name
           * @param {*} object Constant value.
           * @description
           * Because the constants are fixed, they get applied before other provide methods.
           * See {@link auto.$provide#constant $provide.constant()}.
           */
          constant: invokeLater('$provide', 'constant', 'unshift'),

           /**
           * @ngdoc method
           * @name angular.Module#decorator
           * @module ng
           * @param {string} name The name of the service to decorate.
           * @param {Function} decorFn This function will be invoked when the service needs to be
           *                           instantiated and should return the decorated service instance.
           * @description
           * See {@link auto.$provide#decorator $provide.decorator()}.
           */
          decorator: invokeLaterAndSetModuleName('$provide', 'decorator'),

          /**
           * @ngdoc method
           * @name angular.Module#animation
           * @module ng
           * @param {string} name animation name
           * @param {Function} animationFactory Factory function for creating new instance of an
           *                                    animation.
           * @description
           *
           * **NOTE**: animations take effect only if the **ngAnimate** module is loaded.
           *
           *
           * Defines an animation hook that can be later used with
           * {@link $animate $animate} service and directives that use this service.
           *
           * ```js
           * module.animation('.animation-name', function($inject1, $inject2) {
           *   return {
           *     eventName : function(element, done) {
           *       //code to run the animation
           *       //once complete, then run done()
           *       return function cancellationFunction(element) {
           *         //code to cancel the animation
           *       }
           *     }
           *   }
           * })
           * ```
           *
           * See {@link ng.$animateProvider#register $animateProvider.register()} and
           * {@link ngAnimate ngAnimate module} for more information.
           */
          animation: invokeLaterAndSetModuleName('$animateProvider', 'register'),

          /**
           * @ngdoc method
           * @name angular.Module#filter
           * @module ng
           * @param {string} name Filter name - this must be a valid angular expression identifier
           * @param {Function} filterFactory Factory function for creating new instance of filter.
           * @description
           * See {@link ng.$filterProvider#register $filterProvider.register()}.
           *
           * <div class="alert alert-warning">
           * **Note:** Filter names must be valid angular {@link expression} identifiers, such as `uppercase` or `orderBy`.
           * Names with special characters, such as hyphens and dots, are not allowed. If you wish to namespace
           * your filters, then you can use capitalization (`myappSubsectionFilterx`) or underscores
           * (`myapp_subsection_filterx`).
           * </div>
           */
          filter: invokeLaterAndSetModuleName('$filterProvider', 'register'),

          /**
           * @ngdoc method
           * @name angular.Module#controller
           * @module ng
           * @param {string|Object} name Controller name, or an object map of controllers where the
           *    keys are the names and the values are the constructors.
           * @param {Function} constructor Controller constructor function.
           * @description
           * See {@link ng.$controllerProvider#register $controllerProvider.register()}.
           */
          controller: invokeLaterAndSetModuleName('$controllerProvider', 'register'),

          /**
           * @ngdoc method
           * @name angular.Module#directive
           * @module ng
           * @param {string|Object} name Directive name, or an object map of directives where the
           *    keys are the names and the values are the factories.
           * @param {Function} directiveFactory Factory function for creating new instance of
           * directives.
           * @description
           * See {@link ng.$compileProvider#directive $compileProvider.directive()}.
           */
          directive: invokeLaterAndSetModuleName('$compileProvider', 'directive'),

          /**
           * @ngdoc method
           * @name angular.Module#config
           * @module ng
           * @param {Function} configFn Execute this function on module load. Useful for service
           *    configuration.
           * @description
           * Use this method to register work which needs to be performed on module loading.
           * For more about how to configure services, see
           * {@link providers#provider-recipe Provider Recipe}.
           */
          config: config,

          /**
           * @ngdoc method
           * @name angular.Module#run
           * @module ng
           * @param {Function} initializationFn Execute this function after injector creation.
           *    Useful for application initialization.
           * @description
           * Use this method to register work which should be performed when the injector is done
           * loading all modules.
           */
          run:         };

        if (configFn) {
          config(configFn);
        }

        return moduleInstance;

        /**
         * @param {string} provider
         * @param {string} method
         * @param {String=} insertMethod
         * @returns {angular.Module}
         */
        
        /**
         * @param {string} provider
         * @param {string} method
         * @returns {angular.Module}
         */
        function invokeLaterAndSetModuleName(provider, method) {
          return 
        }
      });
    };
  });

}

/* global: toDebugString: true */


function toDebugString(obj) {
  if (typeof obj === 'function') {
    return obj.toString().replace(/ \{[\s\S]*$/, '');
  } else if (isUndefined(obj)) {
    return 'undefined';
  } else if (typeof obj !== 'string') {
    return serializeObject(obj);
  }
  return obj;
}

/* global angularModule: true,
  version: true,

  $CompileProvider,

  htmlAnchorDirective,
  inputDirective,
  inputDirective,
  formDirective,
  scriptDirective,
  selectDirective,
  styleDirective,
  optionDirective,
  ngBindDirective,
  ngBindHtmlDirective,
  ngBindTemplateDirective,
  ngClassDirective,
  ngClassEvenDirective,
  ngClassOddDirective,
  ngCloakDirective,
  ngControllerDirective,
  ngFormDirective,
  ngHideDirective,
  ngIfDirective,
  ngIncludeDirective,
  ngIncludeFillContentDirective,
  ngInitDirective,
  ngNonBindableDirective,
  ngPluralizeDirective,
  ngRepeatDirective,
  ngShowDirective,
  ngStyleDirective,
  ngSwitchDirective,
  ngSwitchWhenDirective,
  ngSwitchDefaultDirective,
  ngOptionsDirective,
  ngTranscludeDirective,
  ngModelDirective,
  ngListDirective,
  ngChangeDirective,
  patternDirective,
  patternDirective,
  requiredDirective,
  requiredDirective,
  minlengthDirective,
  minlengthDirective,
  maxlengthDirective,
  maxlengthDirective,
  ngValueDirective,
  ngModelOptionsDirective,
  ngAttributeAliasDirectives,
  ngEventDirectives,

  $AnchorScrollProvider,
  $AnimateProvider,
  $CoreAnimateCssProvider,
  $$CoreAnimateJsProvider,
  $$CoreAnimateQueueProvider,
  $$AnimateRunnerFactoryProvider,
  $$AnimateAsyncRunFactoryProvider,
  $BrowserProvider,
  $CacheFactoryProvider,
  $ControllerProvider,
  $DocumentProvider,
  $ExceptionHandlerProvider,
  $FilterProvider,
  $$ForceReflowProvider,
  $InterpolateProvider,
  $IntervalProvider,
  $$HashMapProvider,
  $HttpProvider,
  $HttpParamSerializerProvider,
  $HttpParamSerializerJQLikeProvider,
  $HttpBackendProvider,
  $xhrFactoryProvider,
  $LocationProvider,
  $LogProvider,
  $ParseProvider,
  $RootScopeProvider,
  $QProvider,
  $$QProvider,
  $$SanitizeUriProvider,
  $SceProvider,
  $SceDelegateProvider,
  $SnifferProvider,
  $TemplateCacheProvider,
  $TemplateRequestProvider,
  $$TestabilityProvider,
  $TimeoutProvider,
  $$RAFProvider,
  $WindowProvider,
  $$jqLiteProvider,
  $$CookieReaderProvider
*/


/**
 * @ngdoc object
 * @name angular.version
 * @module ng
 * @description
 * An object that contains information about the current AngularJS version.
 *
 * This object has the following properties:
 *
 * - `full` – `{string}` – Full version string, such as "0.9.18".
 * - `major` – `{number}` – Major version number, such as "0".
 * - `minor` – `{number}` – Minor version number, such as "9".
 * - `dot` – `{number}` – Dot version number, such as "18".
 * - `codeName` – `{string}` – Code name of the release, such as "jiggling-armfat".
 */
var version = {
  full: '1.4.14',    // all of these placeholder strings will be replaced by grunt's
  major: 1,    // package task
  minor: 4,
  dot: 14,
  codeName: 'material-distinction'
};


function publishExternalAPI(angular) {
  extend(angular, {
    'bootstrap': bootstrap,
    'copy': copy,
    'extend': extend,
    'merge': merge,
    'equals': equals,
    'element': jqLite,
    'forEach': forEach,
    'injector': createInjector,
    'noop': noop,
    'bind': bind,
    'toJson': toJson,
    'fromJson': fromJson,
    'identity': identity,
    'isUndefined': isUndefined,
    'isDefined': isDefined,
    'isString': isString,
    'isFunction': isFunction,
    'isObject': isObject,
    'isNumber': isNumber,
    'isElement': isElement,
    'isArray': isArray,
    'version': version,
    'isDate': isDate,
    'lowercase': lowercase,
    'uppercase': uppercase,
    'callbacks': {counter: 0},
    'getTestability': getTestability,
    '$$minErr': minErr,
    '$$csp': csp,
    'reloadWithDebugInfo': reloadWithDebugInfo
  });

  angularModule = setupModuleLoader(window);

  angularModule('ng', ['ngLocale'], ['$provide',
    function ngModule($provide) {
      // $$sanitizeUriProvider needs to be before $compileProvider as it is used by it.
      $provide.provider({
        $$sanitizeUri: $$SanitizeUriProvider
      });
      $provide.provider('$compile', $CompileProvider).
        directive({
            a: htmlAnchorDirective,
            input: inputDirective,
            textarea: inputDirective,
            form: formDirective,
            script: scriptDirective,
            select: selectDirective,
            style: styleDirective,
            option: optionDirective,
            ngBind: ngBindDirective,
            ngBindHtml: ngBindHtmlDirective,
            ngBindTemplate: ngBindTemplateDirective,
            ngClass: ngClassDirective,
            ngClassEven: ngClassEvenDirective,
            ngClassOdd: ngClassOddDirective,
            ngCloak: ngCloakDirective,
            ngController: ngControllerDirective,
            ngForm: ngFormDirective,
            ngHide: ngHideDirective,
            ngIf: ngIfDirective,
            ngInclude: ngIncludeDirective,
            ngInit: ngInitDirective,
            ngNonBindable: ngNonBindableDirective,
            ngPluralize: ngPluralizeDirective,
            ngRepeat: ngRepeatDirective,
            ngShow: ngShowDirective,
            ngStyle: ngStyleDirective,
            ngSwitch: ngSwitchDirective,
            ngSwitchWhen: ngSwitchWhenDirective,
            ngSwitchDefault: ngSwitchDefaultDirective,
            ngOptions: ngOptionsDirective,
            ngTransclude: ngTranscludeDirective,
            ngModel: ngModelDirective,
            ngList: ngListDirective,
            ngChange: ngChangeDirective,
            pattern: patternDirective,
            ngPattern: patternDirective,
            required: requiredDirective,
            ngRequired: requiredDirective,
            minlength: minlengthDirective,
            ngMinlength: minlengthDirective,
            maxlength: maxlengthDirective,
            ngMaxlength: maxlengthDirective,
            ngValue: ngValueDirective,
            ngModelOptions: ngModelOptionsDirective
        }).
        directive({
          ngInclude: ngIncludeFillContentDirective
        }).
        directive(ngAttributeAliasDirectives).
        directive(ngEventDirectives);
      $provide.provider({
        $anchorScroll: $AnchorScrollProvider,
        $animate: $AnimateProvider,
        $animateCss: $CoreAnimateCssProvider,
        $$animateJs: $$CoreAnimateJsProvider,
        $$animateQueue: $$CoreAnimateQueueProvider,
        $$AnimateRunner: $$AnimateRunnerFactoryProvider,
        $$animateAsyncRun: $$AnimateAsyncRunFactoryProvider,
        $browser: $BrowserProvider,
        $cacheFactory: $CacheFactoryProvider,
        $controller: $ControllerProvider,
        $document: $DocumentProvider,
        $exceptionHandler: $ExceptionHandlerProvider,
        $filter: $FilterProvider,
        $$forceReflow: $$ForceReflowProvider,
        $interpolate: $InterpolateProvider,
        $interval: $IntervalProvider,
        $http: $HttpProvider,
        $httpParamSerializer: $HttpParamSerializerProvider,
        $httpParamSerializerJQLike: $HttpParamSerializerJQLikeProvider,
        $httpBackend: $HttpBackendProvider,
        $xhrFactory: $xhrFactoryProvider,
        $location: $LocationProvider,
        $log: $LogProvider,
        $parse: $ParseProvider,
        $rootScope: $RootScopeProvider,
        $q: $QProvider,
        $$q: $$QProvider,
        $sce: $SceProvider,
        $sceDelegate: $SceDelegateProvider,
        $sniffer: $SnifferProvider,
        $templateCache: $TemplateCacheProvider,
        $templateRequest: $TemplateRequestProvider,
        $$testability: $$TestabilityProvider,
        $timeout: $TimeoutProvider,
        $window: $WindowProvider,
        $$rAF: $$RAFProvider,
        $$jqLite: $$jqLiteProvider,
        $$HashMap: $$HashMapProvider,
        $$cookieReader: $$CookieReaderProvider
      });
    }
  ]);
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *     Any commits to this file should be reviewed with security in mind.  *
 *   Changes to this file can potentially create security vulnerabilities. *
 *          An approval from 2 Core members with history of modifying      *
 *                         this file is required.                          *
 *                                                                         *
 *  Does the change somehow allow for arbitrary javascript to be executed? *
 *    Or allows for someone to change the prototype of built-in objects?   *
 *     Or gives undesired access to variables likes document or window?    *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/* global JQLitePrototype: true,
  addEventListenerFn: true,
  removeEventListenerFn: true,
  BOOLEAN_ATTR: true,
  ALIASED_ATTR: true,
*/

//////////////////////////////////
//JQLite
//////////////////////////////////

/**
 * @ngdoc function
 * @name angular.element
 * @module ng
 * @kind function
 *
 * @description
 * Wraps a raw DOM element or HTML string as a [jQuery](http://jquery.com) element.
 *
 * If jQuery is available, `angular.element` is an alias for the
 * [jQuery](http://api.jquery.com/jQuery/) function. If jQuery is not available, `angular.element`
 * delegates to Angular's built-in subset of jQuery, called "jQuery lite" or **jqLite**.
 *
 * jqLite is a tiny, API-compatible subset of jQuery that allows
 * Angular to manipulate the DOM in a cross-browser compatible way. jqLite implements only the most
 * commonly needed functionality with the goal of having a very small footprint.
 *
 * To use `jQuery`, simply ensure it is loaded before the `angular.js` file. You can also use the
 * {@link ngJq `ngJq`} directive to specify that jqlite should be used over jQuery, or to use a
 * specific version of jQuery if multiple versions exist on the page.
 *
 * <div class="alert alert-info">**Note:** All element references in Angular are always wrapped with jQuery or
 * jqLite (such as the element argument in a directive's compile / link function). They are never raw DOM references.</div>
 *
 * <div class="alert alert-warning">**Note:** Keep in mind that this function will not find elements
 * by tag name / CSS selector. For lookups by tag name, try instead `angular.element(document).find(...)`
 * or `$document.find()`, or use the standard DOM APIs, e.g. `document.querySelectorAll()`.</div>
 *
 * ## Angular's jqLite
 * jqLite provides only the following jQuery methods:
 *
 * - [`addClass()`](http://api.jquery.com/addClass/)
 * - [`after()`](http://api.jquery.com/after/)
 * - [`append()`](http://api.jquery.com/append/)
 * - [`attr()`](http://api.jquery.com/attr/) - Does not support functions as parameters
 * - [`bind()`](http://api.jquery.com/bind/) - Does not support namespaces, selectors or eventData
 * - [`children()`](http://api.jquery.com/children/) - Does not support selectors
 * - [`clone()`](http://api.jquery.com/clone/)
 * - [`contents()`](http://api.jquery.com/contents/)
 * - [`css()`](http://api.jquery.com/css/) - Only retrieves inline-styles, does not call `getComputedStyle()`.
 *   As a setter, does not convert numbers to strings or append 'px', and also does not have automatic property prefixing.
 * - [`data()`](http://api.jquery.com/data/)
 * - [`detach()`](http://api.jquery.com/detach/)
 * - [`empty()`](http://api.jquery.com/empty/)
 * - [`eq()`](http://api.jquery.com/eq/)
 * - [`find()`](http://api.jquery.com/find/) - Limited to lookups by tag name
 * - [`hasClass()`](http://api.jquery.com/hasClass/)
 * - [`html()`](http://api.jquery.com/html/)
 * - [`next()`](http://api.jquery.com/next/) - Does not support selectors
 * - [`on()`](http://api.jquery.com/on/) - Does not support namespaces, selectors or eventData
 * - [`off()`](http://api.jquery.com/off/) - Does not support namespaces, selectors or event object as parameter
 * - [`one()`](http://api.jquery.com/one/) - Does not support namespaces or selectors
 * - [`parent()`](http://api.jquery.com/parent/) - Does not support selectors
 * - [`prepend()`](http://api.jquery.com/prepend/)
 * - [`prop()`](http://api.jquery.com/prop/)
 * - [`ready()`](http://api.jquery.com/ready/)
 * - [`remove()`](http://api.jquery.com/remove/)
 * - [`removeAttr()`](http://api.jquery.com/removeAttr/)
 * - [`removeClass()`](http://api.jquery.com/removeClass/)
 * - [`removeData()`](http://api.jquery.com/removeData/)
 * - [`replaceWith()`](http://api.jquery.com/replaceWith/)
 * - [`text()`](http://api.jquery.com/text/)
 * - [`toggleClass()`](http://api.jquery.com/toggleClass/)
 * - [`triggerHandler()`](http://api.jquery.com/triggerHandler/) - Passes a dummy event object to handlers.
 * - [`unbind()`](http://api.jquery.com/unbind/) - Does not support namespaces or event object as parameter
 * - [`val()`](http://api.jquery.com/val/)
 * - [`wrap()`](http://api.jquery.com/wrap/)
 *
 * ## jQuery/jqLite Extras
 * Angular also provides the following additional methods and events to both jQuery and jqLite:
 *
 * ### Events
 * - `$destroy` - AngularJS intercepts all jqLite/jQuery's DOM destruction apis and fires this event
 *    on all DOM nodes being removed.  This can be used to clean up any 3rd party bindings to the DOM
 *    element before it is removed.
 *
 * ### Methods
 * - `controller(name)` - retrieves the controller of the current element or its parent. By default
 *   retrieves controller associated with the `ngController` directive. If `name` is provided as
 *   camelCase directive name, then the controller for this directive will be retrieved (e.g.
 *   `'ngModel'`).
 * - `injector()` - retrieves the injector of the current element or its parent.
 * - `scope()` - retrieves the {@link ng.$rootScope.Scope scope} of the current
 *   element or its parent. Requires {@link guide/production#disabling-debug-data Debug Data} to
 *   be enabled.
 * - `isolateScope()` - retrieves an isolate {@link ng.$rootScope.Scope scope} if one is attached directly to the
 *   current element. This getter should be used only on elements that contain a directive which starts a new isolate
 *   scope. Calling `scope()` on this element always returns the original non-isolate scope.
 *   Requires {@link guide/production#disabling-debug-data Debug Data} to be enabled.
 * - `inheritedData()` - same as `data()`, but walks up the DOM until a value is found or the top
 *   parent element is reached.
 *
 * @param {string|DOMElement} element HTML string or DOMElement to be wrapped into jQuery.
 * @returns {Object} jQuery object.
 */

JQLite.expando = 'ng339';

var jqCache = JQLite.cache = {},
    jqId = 1,
    addEventListenerFn = function(element, type, fn) {
      element.addEventListener(type, fn, false);
    },
    remo, fn, false);
    };

/*
 * !!! This is an undocumented "private" function !!!.e { return ++jqId; }


var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;
var MOUSE_EVENT_MAP= { mouseleave: "mouseout", mouseenter: "mouseover"};
var jqLiteMinErr = minErr('jqLite');

/**
 * Converts snake_case to camelCase.
 * Also there is special case for Moz prefix starting with upper case letter.
 * @param name NaREGEXP, 'Moz$1');
}

var SINGLE_TAG_REGEXP = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;
var HTML_REGEXP = /<|&#?\w+;/;
var TAG_NAME_REGEXP = /<([\w:-]+)/;
var XHTML_TAG_REGEXP = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi;

var wrapMap = {
  'option': [1, '<select multiple="multiple">', '</select>'],

  'thead': [1, '<table>', '</table>'],
  'col': [2, '<table><colgroup>', '</colgroup></table>'],
  'tr': [2, '<table><tbody>', '</tbody></table>'],
  'td': [3, '<table><tbody><tr>', '</tr></tbody></table>'],
  '_default': [0, "", ""]
};

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMapED} return fragment;
}

function jqLiteParseHTML(html, context) {
  context = context || document;
  var parsed;

  if ((parsed = SINGLE_TAG_REGEXP.exec(html))) {
    return [context.createElement(parsed[1])];
  }

  if ((parsed = jqLiteBuildFragment(html, context))) {
    return parsed.childNodes;
 ppendChild(node);
}


// IE9-11 has no method "contains" in SVG element and in Node.prototype. Bug #10259.
var jqLiteContains = Node.print bitwise: true
};

//////////////////////////is, element);
  }
}

function jqLiteClone(element) {
  return element.ts[i]);
    }
  }
}

function jqLiteOff(element, type, fn, unsupported) {
  if (isDefined(unsupported)) throw jqLiteMinErr('offargs', 'jqLite#off() does not support the `selector` argument');

  var expandoStore = jqLiteExpandoStore(element);
  var events = expandoStore && expandoStore.events;
  var handle = expandoStore && expandoStore.handle;

  if (!handle) return; //no listeners registered

  if (!type) {
    for (type in events) {
      if (type !== '$destroy') {
        removeEventListenerFn(element, type, handle);
      }
      delete events[type];
    }
  } else {

    var removeHandler = function(type) {
      var listenerFns = events[type];
      if (isDefined(fn)) {
        arrayRemove(listenerFns || [], fn);
      }
      if (!(isDefined(fn) && listenerFns && listenerFns.length > 0)) {
        removeEventListenerFn(element, type, handle);
        delete events[type];
      }
    };

    forEape]);
   dour t in   + 'Controller');
}

function jqLiteInheritedData(element, name, value) {
  // if element is the document object work with the html element instead
  // this makes $(document).scope() possible
  if (element.nodeType == NODE_TYPE_DOCUMENT) {
    element = element.documentElement;
  }
  var names = isArray(name) ? name : [name];

  while (element) {
    for (var i = 0, ii = names.length; i < ii; i++) {
      if (isDefined(value = jqLite.data(element, names[i]))) return value;
    }

    // If dealing with a document fragment node with a host element, and no parent, use the host
    // element as the parent. This enables directives within a Shadow DOM or polyfilled Shadow DOM
    // to lookup parent controllers.
    element = element.parentNode || (element.nodeType === NODE_TYPE_DOCUMENT_FRAGMENT && el.vead', action);
  }
}

//////////////////////////////////////////
// Functions which are declared directly.
//////////////////////////////////////////
var JQLitePrototype = JQLite.proint +W064
   in(', ')ngth + index]);
  },

  length: 0,
  push: push,
  sort: [].sort,
  splice: [].splice
};

//////////////////////////////////////////
// Functions iterating getter/setters.
// these functions return self on setter and
// value on get.
//////////////////////////////////////////
var BOOLEAN_ATTR = {};
forEach('multiple,selected,checked,disabled,readOnly,require(value)] = value;
});
var BOOLEAN_ELEMENTS = {};
forEach('input,select,option,textarea,button,form,details'.split(','), function(value) {
  BOOLEAN_ELEMENTS[value] = true;
});
var ALIASED_ATTR = {
  'ngMinlength': 'minlength',
  'ngMaxlength': 'maxlength',
  'ngMin': 'min',
  'ngMax': 'max',
  'ngPatt]IASED_ATTR[name];
}

forEach({
  data: jqLiteData,
  removeData: jqLiteRemoveData,
  hasDatQLite[name] = fn;
});

forEach({
  data: jqLiteData,
  inheritedData: jqLiteInhere', '$scope']);
  peNoTemplate');
  },

  controller: jqLiteController,

  injector: function(element) {
    return jqLiteInheritedData(element, '$injector');
  },

  removeAttr: function(element, name) {
    element.removeAttribute(name);
  },

  hasClass: jqLile[name];
    }
  },

  attr: function(element, name, value) {
    var nodeType = element.nodeType;
    if (nodeType === NODE_TYPE_TEXT || nodeType === NODE_TYPE_ATTRIBUTE || nodeType === NODE_TYPE_COMMENT) {
      return;
    }
    var lowercasedName = lowercase(name);
    if (BOOLEAN_ATTR[lowercasedName]) {
      if (isDefined(value)) {
        if (!!value) {
          element[name] = true;
          element.setAttribute(name, lowercasedName);
        } else {
          element[name] = false;
          element.removeAttribute(lowercasedName);
        }
      } else {
        return (element[name] ||
                 (element.attributes.getNamedItem(name) || noop).specified)
               ? lowercasedName
               : undefined;
      }
    } else if (isDefined(value)) {
      element.setAttribute(name, value);
    } else if (element.getAttribute) {
      // the extra argument "2" is to get the right thing for a.href in IE, see jQuery code
      // some elements (e.g. Document) don't have get attribute, so return undefined
      var ret = element.getAttribute(name, 2);
      // normalize non-existing attributes to undefined (as jQuery)
      return ret === null ? undefined : ret;
nt[name];
  = value;
  .value = verHTML = value;
  },

  empty: jqLiteEmpty
}, function(fn, name) {
  /**
   * Properties: writes return selection, reads return first value
   */
  JQLite.prototype[name] = function(arg1, arg2) {
    var i, key;
    var nodeCount = this.length;

    // jqLiteHasClass has only two arguments, but is a getter-only fn, so we need to special-case it
    // in a way that survives minification.
    // jqLiteEmpty takes no arguments but is a setter.
    if (fn !== jqLiteEmpty &&
        (isUndefined((fn.length == 2 && (fn !== jqLiteHasClass && fn !== jqLiteController)) ? arg1 : arg2))) {
      if (isObject(arg1)) {

        // we are a write, but the object properties are the key/values
        for (i = 0; i < nodeCount; i++) {
          if (fn === jqLiteData) {
            // data() takes the whole object in jQuery
            fn(this[i], arg1);
          } else {
            for (key in arg1) {
              fn(this[i], key, arg1[key]);
            }
          }
        }
        // return self for chaining
        return this;
      } else {
        // we are a read, so read the first child.
        // TODO: do we still need this?
        var value = fn.$dv;
        // Only if we have $dv do we iterate over all, otherwise it is just the first element.
        var jj = (isUndefined(value)) ? Math.min(nodeCount, 1) : nodeCount;
        for (var j = 0; j < jj; j++) {
          var nodeValue = fn(this[j], arg1, arg2);
          value = value ? value + nodeValue : nodeValue;
        }
        return value;
      }
    } else {
      // we are a write, so apply to all children
      for (i = 0; i < nodeCount; i++) {
        fn(this[i], arg1, arg2);
      }
      // return self for chaining
      return thu(rget, event);
  }
}

//////////////////////////////////////////
// Functions iterating traversal.
// These functions chain results into a single
// selector.
//////////////////////////////////////////
forEach({
  removeData: jqLiteRemoveData,

  on: function jqLiteOn(element, type, fn, unsupported) {
    if (isDefined(unsupported)) throw jqLiteMinErr('onargs', 'jqLite#on() does not support the `selector` or `eventData` parameters');

    // Do not add event handlers to non-elements because they will not be cleaned up.
    if (!jqLiteAcceptsData(element)) {
      return;
    }

    var expandoStore = jqLiteExpandoStore(element, true);
    var events = expandoStore.events;
    var handle = expandoStore.handle;

    if (!handle) {
      handle = expandoStore.handle = createEventHandler(element, events);
    }

    // http://jsperf.com/string-indexof-vs-split
    var types = type.indexOf(' ') >= 0 ? type.split(' ') : [type];
    var i = types.length;

    var addHandler = function(type, specialHandlerWrapper, noEventListener) {
      var eventFns = events[type];

      if (!eventFns) {
        eventFns = events[type] = [];
        eventFns.specialHandlerWrapper = specialHandlerWrapper;
        if (type !== '$destroy' && !noEventListener) {
          addEventListenerFn(element, type, handle);
        }
      }

      eventFns.push(fn);
    };

    while (i--) {
      type = types[i];
      if (MOUSE_EVENT_MAP[type]) {
        addHandler(MOUSE_EVENT_MAP[type], specialMouseHandlerWrapper);
        addHandler(type, undefined, true);
      } else {
        addHandler(type);
      }
    }
  },

  off:t.on(type, fn);
 = node;
    })eturn childrenildNodes || d(child);
         });
0).clone()[0]);
  },

  remove: jqLitelement, trx = node;
    }
  },

  addClass: jqLiteAddClass,
  removeClass: jqLiteRemoveCla      });
   parent : null;
  },

  next: function(element) {
    return element.nextElementSibeturn [];
    }
  },

  clone: jqLiteClone,   te.prototype.off;
});


// Provider for priva   }
    });
  };
}

/**
 * Computes a hash of an 'obj'.
 * Hash of a:
 *  string is string
 *  number is number as string
 *  object is either result of calling $$hashKey function on the object or uniquely generated id,
 *         that is also assigned to the $$hashKey property of the object.
 *
 * @param obj
 * @returns {string} hash string such that the same input will have the same hash string.
 *         The resulting string key is in 'type:h }

  return key;
}

/**
 * HashMap which can use  this.put, this);
}
HashMap.prototype = {
  /**
   * Store key value pair
   * @param key key to store can be any type
   * @param value value to store can be antUid)] = value;
  },

  /**
   * @param key
   * @returns {Object} the value for tthis.nextUid)];
  },

  /**
   * Remove the key/value pair
   * @param   return value;
  }
};

var $rn HashMap;
  }];
}];

/**
 * @ngdoc function
 * @module ng
 * @name angular.injector
 * @kind function
 *
 * @description
 * Creates an injector object that can be used for retrieving services as well as for
 * dependency injection (see {@link guide/di dependency injection}).
 *
 * @param {Array.<string|Function>} modules A list of module functions or their aliases. See
 *     {@link angular.module}. The `ng` module must be explicitly added.
 * @param {boolean=} [strictDi=false] Whether the injector should be in strict mode, which
 *     disallows argument name annotation inference.
 * @returns {injector} Injector object. See {@link auto.$injector $injector}.
 *
 * @example
 * Typical usage
 * ```js
 *   // create an injector
 *   var $injector = angular.injector(['ng']);
 *
 *   // use the injector to kick off your application
 *   // use the type inference to auto inject arguments, or use implicit injection
 *   $injector.invoke(function($rootScope, $compile, $document) {
 *     $compile($document)($rootScope);
 *     $rootScope.$digest();
 *   });
 * ```
 *
 * Sometimes you want to get access to the injector of a currently running Angular app
 * from outside Angular. Perhaps, you want to inject and compile some markup after the
 * application has been bootstrapped. You can do this using the extra `injector()` added
 * to JQuery/jqLite elements. See {@link angular.element}.
 *
 * *This is fairly rare but could be the case if a third party library is injecting the
 * markup.*
 *
 * In the following example a new block of HTML containing a `ng-controller`
 * directive is added to the end of the document body by JQuery. We then compile and link
 * it into the current AngularJS scope.
 *
 * ```js
 * var $div = $('<div ng-controller="MyCtrl">{{content.label}}</div>');
 * $(document.body).append($div);
 *
 * angular.element(document).injector().invoke(function($compile) {
 *   var scope = angular.element($div).scope();
 *   $compile($div)(scope);
 * });
 * ```
 */


/**
 * @ngdoc module
 * @name auto
 * @description
 *
 * Implicit module which gets automatically added to each {@link auto.$injector $injector}.
 */

var FN_ARGS = /^[^\(]*\(\s*([^\)]*)\)/m;
var FN_ARG_SPLIT = /,/;
var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var $injectorMinErr = minErr('$injector');

function anonFn(fn) {
  // For anonymous functions, showing at the very least the function signature can help in
  // debugging.
  var fnText = fn.toString().replace(STRIP_COMMENTS, ''),
      args = fnText.match(FN_ARGS);
  if (args) {
    return 'function(' + (args[1] || '').replace(/[\s\r\n]+/, ' ') + ')';
  }
  return 'fn';
}

function annotate(fn, strictDi, name) {
  var $inject,
      fnText,
      argDecl,
      last;

  if (typeof fn === 'function') {
    if (!($inject = fn.$inject)) {
      $inject = [];
      if (fn.length) {
        if (strictDi) {
          if (!isString(name) || !name) {
            name = fn.name || anonFn(fn);
          }
          throw $injectorMinErr('strictdi',
            '{0} is not using explicit annotation and cannot be invoked in strict mode', name);
        }
        fnText = fn.toString().replace(STRIP_COMMENTS, '');
        argDecl = fnText.match(FN_ARGS);
        forEach(argDecl[1].s      });
        });
      }
      fn.$inject = $inject;
    }
  } else if (isArray(fn)) {
    last = fn.length - 1;
    assertArgFn(fn[last], 'fn');
    $inject = fn.slice(0, last);
  } else {
    assertArgFn(fn, 'fn', true);
  }
  return $inject;
}

///////////////////////////////////////

/**
 * @ngdoc service
 * @name $injector
 *
 * @description
 *
 * `$injector` is used to retrieve object instances as defined by
 * {@link auto.$provide provider}, instantiate types, invoke methods,
 * and load modules.
 *
 * The following always holds true:
 *
 * ```js
 *   var $injector = angular.injector();
 *   expect($injector.get('$injector')).toBe($injector);
 *   expect($injector.invoke(function($injector) {
 *     return $injector;
 *   })).toBe($injector);
 * ```
 *
 * # Injection Function Annotation
 *
 * JavaScript does not have annotations, and annotations are needed for dependency injection. The
 * following are all valid ways of annotating function with injection arguments and are equivalent.
 *
 * ```js
 *   // inferred (only works if code not minified/obfuscated)
 *   $injector.invoke(function(serviceA){});
 *
 *   // annotated
 *   function explicit(serviceA) {};
 *   explicit.$inject = ['serviceA'];
 *   $injector.invoke(explicit);
 *
 *   // inline
 *   $injector.invoke(['serviceA', function(serviceA){}]);
 * ```
 *
 * ## Inference
 *
 * In JavaScript calling `toString()` on a function returns the function definition. The definition
 * can then be parsed and the function arguments can be extracted. This method of discovering
 * annotations is disallowed when the injector is in strict mode.
 * *NOTE:* This does not work with minification, and obfuscation tools since these tools change the
 * argument names.
 *
 * ## `$inject` Annotation
 * By adding an `$inject` property onto a function the injection parameters can be specified.
 *
 * ## Inline
 * As an array of injection names, where the last item in the array is the function to call.
 */

/**
 * @ngdoc method
 * @name $injector#get
 *
 * @description
 * Return an instance of the service.
 *
 * @param {string} name The name of the instance to retrieve.
 * @param {string=} caller An optional string to provide the origin of the function call for error messages.
 * @return {*} The instance.
 */

/**
 * @ngdoc method
 * @name $injector#invoke
 *
 * @description
 * Invoke the method and supply the method arguments from the `$injector`.
 *
 * @param {Function|Array.<string|Function>} fn The injectable function to invoke. Function parameters are
 *   injected according to the {@link guide/di $inject Annotation} rules.
 * @param {Object=} self The `this` for the invoked method.
 * @param {Object=} locals Optional object. If preset then any argument names are read from this
 *                         object first, before the `$injector` is consulted.
 * @returns {*} the value returned by the invoked `fn` function.
 */

/**
 * @ngdoc method
 * @name $injector#has
 *
 * @description
 * Allows the user to query if the particular service exists.
 *
 * @param {string} name Name of the service to query.
 * @returns {boolean} `true` if injector has given service.
 */

/**
 * @ngdoc method
 * @name $injector#instantiate
 * @description
 * Create a new instance of JS type. The method takes a constructor function, invokes the new
 * operator, and supplies all of the arguments to the constructor function as specified by the
 * constructor annotation.
 *
 * @param {Function} Type Annotated constructor function.
 * @param {Object=} locals Optional object. If preset then any argument names are read from this
 * object first, before the `$injector` is consulted.
 * @returns {Object} new instance of `Type`.
 */

/**
 * @ngdoc method
 * @name $injector#annotate
 *
 * @description
 * Returns an array of service names which the function is requesting for injection. This API is
 * used by the injector to determine which services need to be injected into the function when the
 * function is invoked. There are three ways in which the function can be annotated with the needed
 * dependencies.
 *
 * # Argument names
 *
 * The simplest form is to extract the dependencies from the arguments of the function. This is done
 * by converting the function into a string using `toString()` method and extracting the argument
 * names.
 * ```js
 *   // Given
 *   function MyController($scope, $route) {
 *     // ...
 *   }
 *
 *   // Then
 *   expect(injector.annotate(MyController)).toEqual(['$scope', '$route']);
 * ```
 *
 * You can disallow this method by using strict injection mode.
 *
 * This method does not work with code minification / obfuscation. For this reason the following
 * annotation strategies are supported.
 *
 * # The `$inject` property
 *
 * If a function has an `$inject` property and its value is an array of strings, then the strings
 * represent names of services to be injected into the function.
 * ```js
 *   // Given
 *   var MyController = function(obfuscatedScope, obfuscatedRoute) {
 *     // ...
 *   }
 *   // Define function dependencies
 *   MyController['$inject'] = ['$scope', '$route'];
 *
 *   // Then
 *   expect(injector.annotate(MyController)).toEqual(['$scope', '$route']);
 * ```
 *
 * # The array notation
 *
 * It is often desirable to inline Injected functions and that's when setting the `$inject` property
 * is very inconvenient. In these situations using the array notation to specify the dependencies in
 * a way that survives minification is a better choice:
 *
 * ```js
 *   // We wish to write this (not minification / obfuscation safe)
 *   injector.invoke(function($compile, $rootScope) {
 *     // ...
 *   });
 *
 *   // We are forced to write break inlining
 *   var tmpFn = function(obfuscatedCompile, obfuscatedRootScope) {
 *     // ...
 *   };
 *   tmpFn.$inject = ['$compile', '$rootScope'];
 *   injector.invoke(tmpFn);
 *
 *   // To better support inline function the inline annotation is supported
 *   injector.invoke(['$compile', '$rootScope', function(obfCompile, obfRootScope) {
 *     // ...
 *   }]);
 *
 *   // Therefore
 *   expect(injector.annotate(
 *      ['$compile', '$rootScope', function(obfus_$compile, obfus_$rootScope) {}])
 *    ).toEqual(['$compile', '$rootScope']);
 * ```
 *
 * @param {Function|Array.<string|Function>} fn Function for which dependent service names need to
 * be retrieved as described above.
 *
 * @param {boolean=} [strictDi=false] Disallow argument name annotation inference.
 *
 * @returns {Array.<string>} The names of the services which the function requires.
 */




/**
 * @ngdoc service
 * @name $provide
 *
 * @description
 *
 * The {@link auto.$provide $provide} service has a number of methods for registering components
 * with the {@link auto.$injector $injector}. Many of these functions are also exposed on
 * {@link angular.Module}.
 *
 * An Angular **service** is a singleton object created by a **service factory**.  These **service
 * factories** are functions which, in turn, are created by a **service provider**.
 * The **service providers** are constructor functions. When instantiated they must contain a
 * property called `$get`, which holds the **service factory** function.
 *
 * When you request a service, the {@link auto.$injector $injector} is responsible for finding the
 * correct **service provider**, instantiating it and then calling its `$get` **service factory**
 * function to get the instance of the **service**.
 *
 * Often services have no configuration options and there is no need to add methods to the service
 * provider.  The provider will be no more than a constructor function with a `$get` property. For
 * these cases the {@link auto.$provide $provide} service has additional helper methods to register
 * services without specifying a provider.
 *
 * * {@link auto.$provide#provider provider(provider)} - registers a **service provider** with the
 *     {@link auto.$injector $injector}
 * * {@link auto.$provide#constant constant(obj)} - registers a value/object that can be accessed by
 *     providers and services.
 * * {@link auto.$provide#value value(obj)} - registers a value/object that can only be accessed by
 *     services, not providers.
 * * {@link auto.$provide#factory factory(fn)} - registers a service **factory function**, `fn`,
 *     that will be wrapped in a **service provider** object, whose `$get` property will contain the
 *     given factory function.
 * * {@link auto.$provide#service service(class)} - registers a **constructor function**, `class`
 *     that will be wrapped in a **service provider** object, whose `$get` property will instantiate
 *      a new object using the given constructor function.
 *
 * See the individual methods for more information and examples.
 */

/**
 * @ngdoc method
 * @name $provide#provider
 * @description
 *
 * Register a **provider function** with the {@link auto.$injector $injector}. Provider functions
 * are constructor functions, whose instances are responsible for "providing" a factory for a
 * service.
 *
 * Service provider names start with the name of the service they provide followed by `Provider`.
 * For example, the {@link ng.$log $log} service has a provider called
 * {@link ng.$logProvider $logProvider}.
 *
 * Service provider objects can have additional methods which allow configuration of the provider
 * and its service. Importantly, you can configure what kind of service is created by the `$get`
 * method, or how that service will act. For example, the {@link ng.$logProvider $logProvider} has a
 * method {@link ng.$logProvider#debugEnabled debugEnabled}
 * which lets you specify whether the {@link ng.$log $log} service will log debug messages to the
 * console or not.
 *
 * @param {string} name The name of the instance. NOTE: the provider will be available under `name +
                        'Provider'` key.
 * @param {(Object|function())} provider If the provider is:
 *
 *   - `Object`: then it should have a `$get` method. The `$get` method will be invoked using
 *     {@link auto.$injector#invoke $injector.invoke()} when an instance needs to be created.
 *   - `Constructor`: a new instance of the provider will be created using
 *     {@link auto.$injector#instantiate $injector.instantiate()}, then treated as `object`.
 *
 * @returns {Object} registered provider instance

 * @example
 *
 * The following example shows how to create a simple event tracking service and register it using
 * {@link auto.$provide#provider $provide.provider()}.
 *
 * ```js
 *  // Define the eventTracker provider
 *  function EventTrackerProvider() {
 *    var trackingUrl = '/track';
 *
 *    // A provider method for configuring where the tracked events should been saved
 *    this.setTrackingUrl = function(url) {
 *      trackingUrl = url;
 *    };
 *
 *    // The service factory function
 *    this.$get = ['$http', function($http) {
 *      var trackedEvents = {};
 *      return {
 *        // Call this to track an event
 *        event: function(event) {
 *          var count = trackedEvents[event] || 0;
 *          count += 1;
 *          trackedEvents[event] = count;
 *          return count;
 *        },
 *        // Call this to save the tracked events to the trackingUrl
 *        save: function() {
 *          $http.post(trackingUrl, trackedEvents);
 *        }
 *      };
 *    }];
 *  }
 *
 *  describe('eventTracker', function() {
 *    var postSpy;
 *
 *    beforeEach(module(function($provide) {
 *      // Register the eventTracker provider
 *      $provide.provider('eventTracker', EventTrackerProvider);
 *    }));
 *
 *    beforeEach(module(function(eventTrackerProvider) {
 *      // Configure eventTracker provider
 *      eventTrackerProvider.setTrackingUrl('/custom-track');
 *    }));
 *
 *    it('tracks events', inject(function(eventTracker) {
 *      expect(eventTracker.event('login')).toEqual(1);
 *      expect(eventTracker.event('login')).toEqual(2);
 *    }));
 *
 *    it('saves to the tracking url', inject(function(eventTracker, $http) {
 *      postSpy = spyOn($http, 'post');
 *      eventTracker.event('login');
 *      eventTracker.save();
 *      expect(postSpy).toHaveBeenCalled();
 *      expect(postSpy.mostRecentCall.args[0]).not.toEqual('/track');
 *      expect(postSpy.mostRecentCall.args[0]).toEqual('/custom-track');
 *      expect(postSpy.mostRecentCall.args[1]).toEqual({ 'login': 1 });
 *    }));
 *  });
 * ```
 */

/**
 * @ngdoc method
 * @name $provide#factory
 * @description
 *
 * Register a **service factory**, which will be called to return the service instance.
 * This is short for registering a service where its provider consists of only a `$get` property,
 * which is the given service factory function.
 * You should use {@link auto.$provide#factory $provide.factory(getFn)} if you do not need to
 * configure your service in a provider.
 *
 * @param {string} name The name of the instance.
 * @param {Function|Array.<string|Function>} $getFn The injectable $getFn for the instance creation.
 *                      Internally this is a short hand for `$provide.provider(name, {$get: $getFn})`.
 * @returns {Object} registered provider instance
 *
 * @example
 * Here is an example of registering a service
 * ```js
 *   $provide.factory('ping', ['$http', function($http) {
 *     return function ping() {
 *       return $http.send('/ping');
 *     };
 *   }]);
 * ```
 * You would then inject and use this service like this:
 * ```js
 *   someModule.controller('Ctrl', ['ping', function(ping) {
 *     ping();
 *   }]);
 * ```
 */


/**
 * @ngdoc method
 * @name $provide#service
 * @description
 *
 * Register a **service constructor**, which will be invoked with `new` to create the service
 * instance.
 * This is short for registering a service where its provider's `$get` property is a factory
 * function that returns an instance instantiated by the injector from the service constructor
 * function.
 *
 * Internally it looks a bit like this:
 *
 * ```
 * {
 *   $get: function() {
 *     return $injector.instantiate(constructor);
 *   }
 * }
 * ```
 *
 *
 * You should use {@link auto.$provide#service $provide.service(class)} if you define your service
 * as a type/class.
 *
 * @param {string} name The name of the instance.
 * @param {Function|Array.<string|Function>} constructor An injectable class (constructor function)
 *     that will be instantiated.
 * @returns {Object} registered provider instance
 *
 * @example
 * Here is an example of registering a service using
 * {@link auto.$provide#service $provide.service(class)}.
 * ```js
 *   var Ping = function($http) {
 *     this.$http = $http;
 *   };
 *
 *   Ping.$inject = ['$http'];
 *
 *   Ping.prototype.send = function() {
 *     return this.$http.get('/ping');
 *   };
 *   $provide.service('ping', Ping);
 * ```
 * You would then inject and use this service like this:
 * ```js
 *   someModule.controller('Ctrl', ['ping', function(ping) {
 *     ping.send();
 *   }]);
 * ```
 */


/**
 * @ngdoc method
 * @name $provide#value
 * @description
 *
 * Register a **value service** with the {@link auto.$injector $injector}, such as a string, a
 * number, an array, an object or a function. This is short for registering a service where its
 * provider's `$get` property is a factory function that takes no arguments and returns the **value
 * service**. That also means it is not possible to inject other services into a value service.
 *
 * Value services are similar to constant services, except that they cannot be injected into a
 * module configuration function (see {@link angular.Module#config}) but they can be overridden by
 * an Angular {@link auto.$provide#decorator decorator}.
 *
 * @param {string} name The name of the instance.
 * @param {*} value The value.
 * @returns {Object} registered provider instance
 *
 * @example
 * Here are some examples of creating value services.
 * ```js
 *   $provide.value('ADMIN_USER', 'admin');
 *
 *   $provide.value('RoleLookup', { admin: 0, writer: 1, reader: 2 });
 *
 *   $provide.value('halfOf', function(value) {
 *     return value / 2;
 *   });
 * ```
 */


/**
 * @ngdoc method
 * @name $provide#constant
 * @description
 *
 * Register a **constant service** with the {@link auto.$injector $injector}, such as a string,
 * a number, an array, an object or a function. Like the {@link auto.$provide#value value}, it is not
 * possible to inject other services into a constant.
 *
 * But unlike {@link auto.$provide#value value}, a constant can be
 * injected into a module configuration function (see {@link angular.Module#config}) and it cannot
 * be overridden by an Angular {@link auto.$provide#decorator decorator}.
 *
 * @param {string} name The name of the constant.
 * @param {*} value The constant value.
 * @returns {Object} registered instance
 *
 * @example
 * Here a some examples of creating constants:
 * ```js
 *   $provide.constant('SHARD_HEIGHT', 306);
 *
 *   $provide.constant('MY_COLOURS', ['red', 'blue', 'grey']);
 *
 *   $provide.constant('double', function(value) {
 *     return value * 2;
 *   });
 * ```
 */


/**
 * @ngdoc method
 * @name $provide#decorator
 * @description
 *
 * Register a **service decorator** with the {@link auto.$injector $injector}. A service decorator
 * intercepts the creation of a service, allowing it to override or modify the behavior of the
 * service. The object returned by the decorator may be the original service, or a new service
 * object which replaces or wraps and delegates to the original service.
 *
 * @param {string} name The name of the service to decorate.
 * @param {Function|Array.<string|Function>} decorator This function will be invoked when the service needs to be
 *    instantiated and should return the decorated service instance. The function is called using
 *    the {@link auto.$injector#invoke injector.invoke} method and is therefore fully injectable.
 *    Local injection arguments:
 *
 *    * `$delegate` - The original service instance, which can be monkey patched, configured,
 *      decorated or delegated to.
 *
 * @example
 * Here we decorate the {@link ng.$log $log} service to convert warnings to errors by intercepting
 * calls to {@link ng.$log#error $log.warn()}.
 * ```js
 *   $provide.decorator('$log', ['$delegate', function($delegate) {
 *     $delegate.warn = $delegate.error;
 *     return $delegate;
 *   }]);
 * ```
 */


function createInjector(modulesToLoad, strictDi) {
  strictDi = (strictDi === true);
  var INSTANTIATING = {},
      providerSuffix = 'Provider',
      path = [],
      loadedModules = new HashMap([], true),
      providerCache = {
        $provide: {
            provider: supportObject(provider),
            factory: supportObject(factory),
            service: supportObject(service),
            value: supportObject(value),
            constant: supportObject(constant),
            decorator: decorator
          }
      },
      providerInjector = (providerCache.$injector =
          createInternalInje<- '));
          })),
      instanceCache = {},
      instanceInjector = (instanceCache.$injector =
          createInternalInjeeName);
          }));


  forEach(loadModuector.invoke(fn); });

  return instanceInjector;

  ////////////////////////////////////
  // $provider
  ////////////////////
  x]  rectoctoeFn[natance});
    };
  }

  ////////////////////////////////////
  // Module Loading
  ////////////////////////////////////
  function loadModules(modulesToLoad) {
    assertArg(isUndefined(modulesToLoad) || isArray(modulesToLoad), 'modulesToLoad', 'not an array');
    var runBlocks = [], moduleFn;
    for| e);
      }
    });
    return runBlocks;
  }

  ////////////////////////////////////
  // internal Injector
  ////////////////////////////////////

  function createInternalInjector(cache, factory) {

    function getService(serviceName, caller) {
      if (cache.hasOwnProperty(serviceName)) {
        if (cache[serviceName] === INSTANTIATING) {
          throw $injectorMinErr('cdep', 'Circular dependency found: {0}',
                    serviceName + ' <- ' + path.join(' <- '));
        }
        return cache[serviceName];
      } else {
        try {
          path.unshift(serviceName);
          cache[serviceName] = INSTANTIATING;
          return cache[serviceName] = factory(serviceName, caller);
        } catch (err) {
          if (cache[serviceName] === INSTANTIATING) {
            delete cache[serviceName];
          }
          throw err;
        } finally {
          path.shift();
        }
      }
    }

    function invoke(fn, self, locals, serviceName) {
      if (typeof locals === 'string') {
        serviceName = locals;
        locals = null;
      }

      var args = [],
          $inject = createInjector.$$annotate(fn, strictDi, serviceName),
          length, i,
          key;

      for (i = 0, length = $inject.length; i < length; i++) {
        key = $inject[i];
        if (typeof key !== 'string') {
          throw $injectorMinErr('itkn',
                  'Incorrect injection token! Expected service name as string, got {0}', key);
        }
        args.push(
          locals && locals.hasOwnProperty(key)
          ? locals[key]
          : getService(key, serviceName)
        );
      }
      if (isArray(fn)) {
        fn = fn[length];
      }

      // http://jsperf.com/angularjs-invoke-apply-vs-switch
      // #5388
      return fn.apply(self, args);
    }

    function instantiate(Type, locals, serviceName) {
      // Check if Type is annotated and use just the given function at n-1 as parameter
      // e.g. someModule.factory('greeter', ['$window', function(renamed$window) {}]);
      // Object creation: http://jsperf.com/create-constructor/2
      var instance = Object.create((isArray(Type) ? Type[Type.length - 1] : Type).prototype || null);
      var returnedValue = invoke(Type, instance, locals, serviceName);

      return isObject(returnedValue) || isFunction(returnedValue) ? returnedValue : instance;
    }

    return {
      invoke: invoke,
      instantiate: instantiate,
      get: getService,
      annotate: createInjector.$$aerty(name);
      }
    };
  }
}

createInjector.$$annotate = annotate;

/**
 * @ngdoc provider
 * @name $anchorScrollProvider
 *
 * @description
 * Use `$anchorScrollProvider` to disable automatic scrolling whenever
 * {@link ng.$location#hash $location.hash()} changes.
 */
function $AnchorScrollProvider() {

  var autoScrollingEnabled = true;

  /**
   * @ngdoc method
   * @name $anchorScrollProvider#disableAutoScrolling
   *
   * @description
   * By default, {@link ng.$anchorScroll $anchorScroll()} will automatically detect changes to
   * {@link ng.$location#hash $location.hash()} and scroll to the element matching the new hash.<br />
   * Use this method to disable automatic scrolling.
   *
   * If automatic scrolling is disabled, one must explicitly call
   * {@link ng.$anchorScroll $anchorScroll()} in order to scroll to the element related to the
   * current hash.
   */
  this.disableAutoScrolling = function() {
    autoScrollingEnabled = false;
  };

  /**
   * @ngdoc service
   * @name $anchorScroll
   * @kind function
   * @requires $window
   * @requires $location
   * @requires $rootScope
   *
   * @description
   * When called, it scrolls to the element related to the specified `hash` or (if omitted) to the
   * current value of {@link ng.$location#hash $location.hash()}, according to the rules specified
   * in the
   * [HTML5 spec](http://www.w3.org/html/wg/drafts/html/master/browsers.html#an-indicated-part-of-the-document).
   *
   * It also watches the {@link ng.$location#hash $location.hash()} and automatically scrolls to
   * match any anchor whenever it changes. This can be disabled by calling
   * {@link ng.$anchorScrollProvider#disableAutoScrolling $anchorScrollProvider.disableAutoScrolling()}.
   *
   * Additionally, you can use its {@link ng.$anchorScroll#yOffset yOffset} property to specify a
   * vertical scroll-offset (either fixed or dynamic).
   *
   * @param {string=} hash The hash specifying the element to scroll to. If omitted, the value of
   *                       {@link ng.$location#hash $location.hash()} will be used.
   *
   * @property {(number|function|jqLite)} yOffset
   * If set, specifies a vertical scroll-offset. This is often useful when there are fixed
   * positioned elements at the top of the page, such as navbars, headers etc.
   *
   * `yOffset` can be specified in various ways:
   * - **number**: A fixed number of pixels to be used as offset.<br /><br />
   * - **function**: A getter function called everytime `$anchorScroll()` is executed. Must return
   *   a number representing the offset (in pixels).<br /><br />
   * - **jqLite**: A jqLite/jQuery element to be used for specifying the offset. The distance from
   *   the top of the page to the element's bottom will be used as offset.<br />
   *   **Note**: The element will be taken into account only as long as its `position` is set to
   *   `fixed`. This option is useful, when dealing with responsive navbars/headers that adjust
   *   their height and/or positioning according to the viewport's size.
   *
   * <br />
   * <div class="alert alert-warning">
   * In order for `yOffset` to work properly, scrolling should take place on the document's root and
   * not some child element.
   * </div>
   *
   * @example
     <example module="anchorScrollExample">
       <file name="index.html">
         <div id="scrollArea" ng-controller="ScrollController">
           <a ng-click="gotoBottom()">Go to bottom</a>
           <a id="bottom"></a> You're at the bottom!
         </div>
       </file>
       <file name="script.js">
         angular.module('anchorScrollExample', [])
           .controller('ScrollController', ['$scope', '$location', '$anchorScroll',
             function ($scope, $location, $anchorScroll) {
               $scope.gotoBottom = function() {
                 // set the location.hash to the id of
                 // the element you wish to scroll to.
                 $location.hash('bottom');

                 // call $anchorScroll()
                 $anchorScroll();
               };
             }]);
       </file>
       <file name="style.css">
         #scrollArea {
           height: 280px;
           overflow: auto;
         }

         #bottom {
           display: block;
           margin-top: 2000px;
         }
       </file>
     </example>
   *
   * <hr />
   * The example below illustrates the use of a vertical scroll-offset (specified as a fixed value).
   * See {@link ng.$anchorScroll#yOffset $anchorScroll.yOffset} for more details.
   *
   * @example
     <example module="anchorScrollOffsetExample">
       <file name="index.html">
         <div class="fixed-header" ng-controller="headerCtrl">
           <a href="" ng-click="gotoAnchor(x)" ng-repeat="x in [1,2,3,4,5]">
             Go to anchor {{x}}
           </a>
         </div>
         <div id="anchor{{x}}" class="anchor" ng-repeat="x in [1,2,3,4,5]">
           Anchor {{x}} of 5
         </div>
       </file>
       <file name="script.js">
         angular.module('anchorScrollOffsetExample', [])
           .run(['$anchorScroll', function($anchorScroll) {
             $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
           }])
           .controller('headerCtrl', ['$anchorScroll', '$location', '$scope',
             function ($anchorScroll, $location, $scope) {
               $scope.gotoAnchor = function(x) {
                 var newHash = 'anchor' + x;
                 if ($location.hash() !== newHash) {
                   // set the $location.hash to `newHash` and
                   // $anchorScroll will automatically scroll to it
                   $location.hash('anchor' + x);
                 } else {
                   // call $anchorScroll() explicitly,
                   // since $location.hash hasn't changed
                   $anchorScroll();
                 }
               };
             }
           ]);
       </file>
       <file name="style.css">
         body {
           padding-top: 50px;
         }

         .anchor {
           border: 2px dashed DarkOrchid;
           padding: 10px 10px 200px 10px;
         }

         .fixed-header {
           background-color: rgba(0, 0, 0, 0.2);
           height: 50px;
           position: fixed;
           top: 0; left: 0; right: 0;
         }

         .fixed-header > a {
           display: inline-block;
           margin: 5px 15px;
         }
       </file>
     </example>
   */
  this.$get = ['$window', '$location', '$rootScope', function($window, $location, $rootScope) {
    var document = $window.document;

    // Helper function to get first anchor from a NodeList
    // (using `Array#some()` instead of `angular#forEach()` since it's more performant
    //  and working in all suppoeturneturn, 0);
      }
    }

    function scroll(hash) {
      hash = isString(hash) ? hash : $location.hash();
      var elm;

      // empty hash, scroll to the top of the page
      if (!hash) scrollTo(null);

      // element with given id
      else if ((elm = document.getElementById(hash))) scrollTo(elm);

      // first anchor with given name :-D
      else if ((elm = getFirstAnchor(document.getElementsByName(hash)))) scrollTo(elm);

      // no element and hash == 'top', scroll to the top of the page
      else if (hash === 'top') scrollTo(null);
    }

    // does not scroll when user clicks on anchor link that is currently on
    // (no url change, no $location.hash() change), browser native does scroll
    if (autoScrollingEnabled) {
     $locatio      });
        });
    }

    return scroll;
  }];
}

var $animateMinErr = minErr('$animate');
var ELEMENT_NODE = 1;
var NG_ANIMATE_CLASSNAtr});
  return obj;
}

// if any other type of options value besides an Object value is
// passed into the $animate.method() animation then this helper code
// will be run which will ignore it. While this patch is not the
// greatest solution to this, a lot of existing plugins depend on
// $animate to either call the callback (< 1.2) or return a promise
// that can be changed. This helper function ensures that the options
// are wiped clean incase a callback futions
      : {};
}

var $$Core = function() {};
};

// this is prefixed with Core since it conflicts with
// the animateQueueProvider defined in ngAnimate/animateQueue.js
var $$CoreAnimateQueueProvider = function() {
  var postDigestQueue = new HashMap();
  var postDigestElements = [];

  this.$get = ['$$AnimateRunner', '$rootScope',
       function($$AnimateRunner,   $rootScope) {
    return {
      enabled: noop,
      on: noop,
      off: noop,
      pin: noop,

      push: function(element, event, options, domOperation) {
        domOperation        && domOperation();

        options = options || {};
        options.from        && element.css(options.from);
        options.to          && element.css(options.to);

        if (options.addClass || options.removeClass) {
          addRemoveClassesPostDigest(element, options.addClass, options.removeClass);
        }

        var runner = new $$AnimateRunner(); // jshint ignore:line

        // since there are no animations to run the runner needs to be
        // notified that the animation call is complete.
        runner.complete();
        return runner;
 turn changed;
    }

    function handleCSSClassChanges() {
      forEach(postDigestElements, function(element) {
        var data = postDigestQueue.get(element);
        if (data) {
          var existing = splitClasses(element.attr('class'));
          var toAdd = '';
          var toRemove = '';
          }
          });

       emove);
          });
          postDigestQueue.remove(element);
        }
      });
      postDigestElements.leng    }
      }
    }
  }];
};

/**
 * @ngdoc provider
 * @name $animateProvider
 *
 * @description
 * Default implementation of $animate that doesn't perform any animations, instead just
 * synchronously performs DOM updates and resolves the returned runner promise.
 *
 * In order to enable animations the `ngAnimate` module has to be loaded.
 *
 * To see the functional implementation check out `src/ngAnimate/animate.js`.
 */
var $AnimateProvider = ['$provide', function($provide) {
  var provider = this;

  this.$$registeredAnimations = Object.create(null);

   /**
   * @ngdoc method
   * @name $animateProvider#register
   *
   * @description
   * Registers a new injectable animation factory function. The factory function produces the
   * animation object which contains callback functions for each event that is expected to be
   * animated.
   *
   *   * `eventFn`: `function(element, ... , doneFunction, options)`
   *   The element to animate, the `doneFunction` and the options fed into the animation. Depending
   *   on the type of animation additional arguments will be injected into the animation function. The
   *   list below explains the function signatures for the different animation methods:
   *
   *   - setClass: function(element, addedClasses, removedClasses, doneFunction, options)
   *   - addClass: function(element, addedClasses, doneFunction, options)
   *   - removeClass: function(element, removedClasses, doneFunction, options)
   *   - enter, leave, move: function(element, doneFunction, options)
   *   - animate: function(element, fromStyles, toStyles, doneFunction, options)
   *
   *   Make sure to trigger the `doneFunction` once the animation is fully complete.
   *
   * ```js
   *   return {
   *     //enter, leave, move signature
   *     eventFn : function(element, done, options) {
   *       //code to run the animation
   *       //once complete, then run done()
   *       return function endFunction(wasCancelled) {
   *         //code to cancel the animation
   *       }
   *     }
   *   }
   * ```
   *
   * @param {string} name The name of the animation (this is what the class-based CSS value will be compared to).
   * @param {Function} factory The factory function that will be executed to return the animation
   *                           object.
   *(key, factory);
  };

  /**
   * @ngdoc method
   * @name $animateProvider#classNameFilter
   *
   * @description
   * Sets and/or returns the CSS class regular expression that is checked when performing
   * an animation. Upon bootstrap the classNameFilter value is not set at all and will
   * therefore enable $animate to attempt to perform an animation on any element that is triggered.
   * When setting the `classNameFilter` value, animations will only be performed on elements
   * that successfully match the filter expression. This in turn can boost performance
   * for low-powered devices as well as applications containing a lot of structural operations.
   * @param {RegExp=} expression The className expression which will be checked against all animations
   * @return {RegExp} The current CSS className expression value. If null then there is no expression value
   */
  this.classNameFilter = function(expression) {
    if (arguments.length === 1) {
      this.$$classNameFilter = (expression instanceof RegExp) ? expression : null;
      if (this.$$classNameFilter) {
        var reservedRegex = new RegExp("(\\s+|\\/)" + NG_ANIMATE_CLASSNAME + "(\\s+|\\/)");
        if (reservedRegex.test(this.$$classNameFilter.toString())) {
          throw $animateMinErr('nongcls','$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', NG_ANIMATE_CLASSNAME);

        }
      }
    }
    return this.$$classNameFilter;
  };

  this.$get = ['$$animateQueue', function($$animateQueue) {
    function domInsert(element, parentElement, afterElement) {
      // if for some reason the previous element was removed
      // from the dom sometime before this code runs then let's
      // just stick to using the parent element as the anchor
      if (afterElement) {
        var afterNode = extractElementNode(afterElement);
        if (afterNode && !afterNode.parentNode && !afterNode.previousElementSibling) {
          afterElement = null;
        }
      }
      afterElement ? afterElement.after(element) : parentElement.prepend(element);
    }

    /**
     * @ngdoc service
     * @name $animate
     * @description The $animate service exposes a series of DOM utility methods that provide support
     * for animation hooks. The default behavior is the application of DOM operations, however,
     * when an animation is detected (and animations are enabled), $animate will do the heavy lifting
     * to ensure that animation runs with the triggered DOM operation.
     *
     * By default $animate doesn't trigger any animations. This is because the `ngAnimate` module isn't
     * included and only when it is active then the animation hooks that `$animate` triggers will be
     * functional. Once active then all structural `ng-` directives will trigger animations as they perform
     * their DOM-related operations (enter, leave and move). Other directives such as `ngClass`,
     * `ngShow`, `ngHide` and `ngMessages` also provide support for animations.
     *
     * It is recommended that the`$animate` service is always used when executing DOM-related procedures within directives.
     *
     * To learn more about enabling animation support, click here to visit the
     * {@link ngAnimate ngAnimate module page}.
     */
    return {
      // we don't call it directly since non-existant arguments may
      // be interpreted as null within the sub enabled function

      /**
       *
       * @ngdoc method
       * @name $animate#on
       * @kind function
       * @description Sets up an event listener to fire whenever the animation event (enter, leave, move, etc...)
       *    has fired on the given element or among any of its children. Once the listener is fired, the provided callback
       *    is fired with the following params:
       *
       * ```js
       * $animate.on('enter', container,
       *    function callback(element, phase) {
       *      // cool we detected an enter animation within the container
       *    }
       * );
       * ```
       *
       * @param {string} event the animation event that will be captured (e.g. enter, leave, move, addClass, removeClass, etc...)
       * @param {DOMElement} container the container element that will capture each of the animation events that are fired on itself
       *     as well as among its children
       * @param {Function} callback the callback function that will be fired when the listener is triggered
       *
       * The arguments present in the callback function are:
       * * `element` - The captured DOM element that the animation was fired on.
       * * `phase` - The phase of the animation. The two possible phases are **start** (when the animation starts) and **close** (when it ends).
       */
      on: $$animateQueue.on,

      /**
       *
       * @ngdoc method
       * @name $animate#off
       * @kind function
       * @description Deregisters an event listener based on the event which has been associated with the provided element. This method
       * can be used in three different ways depending on the arguments:
       *
       * ```js
       * // remove all the animation event listeners listening for `enter`
       * $animate.off('enter');
       *
       * // remove all the animation event listeners listening for `enter` on the given element and its children
       * $animate.off('enter', container);
       *
       * // remove the event listener function provided by `listenerFn` that is set
       * // to listen for `enter` on the given `element` as well as its children
       * $animate.off('enter', container, callback);
       * ```
       *
       * @param {string} event the animation event (e.g. enter, leave, move, addClass, removeClass, etc...)
       * @param {DOMElement=} container the container element the event listener was placed on
       * @param {Function=} callback the callback function that was registered as the listener
       */
      off: $$animateQueue.off,

      /**
       * @ngdoc method
       * @name $animate#pin
       * @kind function
       * @description Associates the provided element with a host parent element to allow the element to be animated even if it exists
       *    outside of the DOM structure of the Angular application. By doing so, any animation triggered via `$animate` can be issued on the
       *    element despite being outside the realm of the application or within another application. Say for example if the application
       *    was bootstrapped on an element that is somewhere inside of the `<body>` tag, but we wanted to allow for an element to be situated
       *    as a direct child of `document.body`, then this can be achieved by pinning the element via `$animate.pin(element)`. Keep in mind
       *    that calling `$animate.pin(element, parentElement)` will not actually insert into the DOM anywhere; it will just create the association.
       *
       *    Note that this feature is only active when the `ngAnimate` module is used.
       *
       * @param {DOMElement} element the external element that will be pinned
       * @param {DOMElement} parentElement the host parent element that will be associated with the external element
       */
      pin: $$animateQueue.pin,

      /**
       *
       * @ngdoc method
       * @name $animate#enabled
       * @kind function
       * @description Used to get and set whether animations are enabled or not on the entire application or on an element and its children. This
       * function can be called in four ways:
       *
       * ```js
       * // returns true or false
       * $animate.enabled();
       *
       * // changes the enabled state for all animations
       * $animate.enabled(false);
       * $animate.enabled(true);
       *
       * // returns true or false if animations are enabled for an element
       * $animate.enabled(element);
       *
       * // changes the enabled state for an element and its children
       * $animate.enabled(element, true);
       * $animate.enabled(element, false);
       * ```
       *
       * @param {DOMElement=} element the element that will be considered for checking/setting the enabled state
       * @param {boolean=} enabled whether or not the animations will be enabled for the element
       *
       * @return {boolean} whether or not animations are enabled
       */
      enabled: $$animateQueue.enabled,

      /**
       * @ngdoc method
       * @name $animate#cancel
       * @kind function
       * @description Cancels the provided animation.
       *
       * @param {Promise} animationPromise The animation promise that is returned when an animation is started.
    nner.end();
      },

      /**
       *
       * @ngdoc method
       * @name $animate#enter
       * @kind function
       * @description Inserts the element into the DOM either after the `after` element (if provided) or
       *   as the first child within the `parent` element and then triggers an animation.
       *   A promise is returned that will be resolved during the next digest once the animation
       *   has completed.
       *
       * @param {DOMElement} element the element which will be inserted into the DOM
       * @param {DOMElement} parent the parent element which will append the element as
       *   a child (so long as the after element is not present)
       * @param {DOMElement=} after the sibling element after which the element will be appended
       * @param {object=} options an optional collection of options/styles that will be applied to the element
       *
       * @return {Promise} the animation callback promise
       */
      enter: function(element, parent, after, options) {
        parent = parent && jqLite(parent);
        after = after && jqLite(after);
        parent = parent || after.parent();
        domInsert(element, parent, after);
        return $$animateQueue.push(element, 'enter', prepareAnimateOptions(options));
      },

      /**
       *
       * @ngdoc method
       * @name $animate#move
       * @kind function
       * @description Inserts (moves) the element into its new position in the DOM either after
       *   the `after` element (if provided) or as the first child within the `parent` element
       *   and then triggers an animation. A promise is returned that will be resolved
       *   during the next digest once the animation has completed.
       *
       * @param {DOMElement} element the element which will be moved into the new DOM position
       * @param {DOMElement} parent the parent element which will append the element as
       *   a child (so long as the after element is not present)
       * @param {DOMElement=} after the sibling element after which the element will be appended
       * @param {object=} options an optional collection of options/styles that will be applied to the element
       *
       * @return {Promise} the animation callback promise
  (options));
      },

      /**
       * @ngdoc method
       * @name $animate#leave
       * @kind function
       * @description Triggers an animation and then removes the element from the DOM.
       * When the function is called a promise is returned that will be resolved during the next
       * digest once the animation has completed.
       *
       * @param {DOMElement} element the element which will be removed from the DOM
       * @param {object=} options an optional collection of options/styles that will be applied to the element
       *
       * @return {Promise} the animation callback promise
           });
      },

      /**
       * @ngdoc method
       * @name $animate#addClass
       * @kind function
       *
       * @description Triggers an addClass animation surrounding the addition of the provided CSS class(es). Upon
       *   execution, the addClass operation will only be handled after the next digest and it will not trigger an
       *   animation if element already contains the CSS class or if the class is removed at a later step.
       *   Note that class-based animations are treated differently compared to structural animations
       *   (like enter, move and leave) since the CSS classes may be added/removed at different points
       *   depending if CSS or JavaScript animations are used.
       *
       * @param {DOMElement} element the element which the CSS classes will be applied to
       * @param {string} className the CSS class(es) that will be added (multiple classes are separated via spaces)
       * @param {object=} options an optional collection of options/styles that will be applied to the element
       *
       * @return {Promise} the animation callback promise
       */
      addClass: function(element, className, options) {
        options = prepareAnimateOptions(options);
        options.addClass = mergeClasses(options.addclass, className);
        return $$animateQueue.push(element, 'addClass', options);
      },

      /**
       * @ngdoc method
       * @name $animate#removeClass
       * @kind function
       *
       * @description Triggers a removeClass animation surrounding the removal of the provided CSS class(es). Upon
       *   execution, the removeClass operation will only be handled after the next digest and it will not trigger an
       *   animation if element does not contain the CSS class or if the class is added at a later step.
       *   Note that class-based animations are treated differently compared to structural animations
       *   (like enter, move and leave) since the CSS classes may be added/removed at different points
       *   depending if CSS or JavaScript animations are used.
       *
       * @param {DOMElement} element the element which the CSS classes will be applied to
       * @param {string} className the CSS class(es) that will be removed (multiple classes are separated via spaces)
       * @param {object=} options an optional collection of options/styles that will be applied to the element
       *
       * @return {Promise} the animation callback promise
       */, options);
      },

      /**
       * @ngdoc method
       * @name $animate#setClass
       * @kind function
       *
       * @description Performs both the addition and removal of a CSS classes on an element and (during the process)
       *    triggers an animation surrounding the class addition/removal. Much like `$animate.addClass` and
       *    `$animate.removeClass`, `setClass` will only evaluate the classes being added/removed once a digest has
       *    passed. Note that class-based animations are treated differently compared to structural animations
       *    (like enter, move and leave) since the CSS classes may be added/removed at different points
       *    depending if CSS or JavaScript animations are used.
       *
       * @param {DOMElement} element the element which the CSS classes will be applied to
       * @param {string} add the CSS class(es) that will be added (multiple classes are separated via spaces)
       * @param {string} remove the CSS class(es) that will be removed (multiple classes are separated via spaces)
       * @param {object=} options an optional collection of options/styles that will be applied to the element
       *
       * @return {Promise} the animation callback promise
      , options);
      },

      /**
       * @ngdoc method
       * @name $animate#animate
       * @kind function
       *
       * @description Performs an inline animation on the element which applies the provided to and from CSS styles to the element.
       * If any detected CSS transition, keyframe or JavaScript matches the provided className value, then the animation will take
       * on the provided styles. For example, if a transition animation is set for the given className, then the provided `from` and
       * `to` styles will be applied alongside the given transition. If the CSS style provided in `from` does not have a corresponding
       * style in `to`, the style in `from` is applied immediately, and no animation is run.
       * If a JavaScript animation is detected then the provided styles will be given in as function parameters into the `animate`
       * method (or as part of the `options` parameter):
       *
       * ```js
       * ngModule.animation('.my-inline-animation', function() {
       *   return {
       *     animate : function(element, from, to, done, options) {
       *       //animation
       *       done();
       *     }
       *   }
       * });
       * ```
       *
       * @param {DOMElement} element the element which the CSS styles will be applied to
       * @param {object} from the from (starting) CSS styles that will be applied to the element and across the animation.
       * @param {object} to the to (destination) CSS styles that will be applied to the element and across the animation.
       * @param {string=} className an optional CSS class that will be applied to the element for the duration of the animation. If
       *    this value is left as empty then a CSS class of `ng-inline-animate` will be applied to the element.
       *    (Note that if no animation is detected then this value will not be appplied to the element.)
       * @param {object=} options an optional collection of options/styles that will be applied to the element
       *
       * @return {Promise} the animation callback promise
     , options);
      }
    };
  }];
}];

var $$AnimateAsyncRunFactoryProvider = function() {
  this.$get = ['$$rAF', function($$rAF) {
    var w[];
      });
    }

    return function() {
      var passed = false;
      waitForTick(function() {
        passed = true;
   (callback);
      };
    };
  }];
};

var $$AnimateRunnerFactoryProvider = function() {
  this.$get = ['$q', '$sniffer', '$$animateAsyncRun', '$document', '$timeout',
       function($q,   $sniffer,   $$animateAsyncRun,   $document,   $timeout) {

    var INITIAL_STATE = 0;
    var DONE_PENDING_STATE = 1;
    var DONE_COMPLETE_STATE = 2;

    An  });
      }
    };

        }
      }
    };

    function AnimateRunner(host) {
      this.setHost(host);

      var rafTick = $$animateAsyncRun();
     0, false);
      };

      this._doneCallbacks = [];
      this._tick = function(fn) {
        var doc = $document[0];

        // the document may not be ready or attached
        // to the module for some internal tests
        if (doc && doc.hidden) {
          timeoutTick(fn);
        } else {
          rafTick(fn);
        }
      };
      this._state = 0;
    }

    AnimateRunner.prototypehost || {};
  ;
        }
      },

      progress: noop,

      getPromise: function() {
        if (!this.promise) {
          var self = this;
          this.promise = $q(function(resolve, reject) {
            self.done(function(status) {
              status === false ? reject() : resolve();
            });
          });
        }
        return this.promise;
  ctHandler);
      },

      'catch': function(handler) {
        return this.getPromise()['catch'](handler);
      }](handler);
      },

      pause: function() {
        if (this.host.pause) {
          this.host.pause();
        }
    ;
        }
      },

      end: function() {
        if (this.host.end) {
          this.host.end();
        }
        this._resolve(true);
    lve(false);
      ;
        }
      ;
        }
      }
    };

    return AnimateRunner;
  }];
};

/**
 * @ngdoc service
 * @name $animateCss
 * @kind object
 *
 * @description
 * This is the core version of `$animateCss`. By default, only when the `ngAnimate` is included,
 * then the `$animateCss` service will actually perform animations.
 *
 * Click here {@link ngAnimate.$animateCss to read the documentation for $animateCss}.
 */
var $CoreA   }
    };
  }];
};

/* global stripHash: true */

/**
 * ! This is a private undocumented service !
 *
 * @name $browser
 * @requires $log
 * @description
 * This object has two goals:
 *
 * - hide all the global state in the browser caused by the window object
 * - abstract away all the browser specific features and inconsistencies
 *
 * For tests we provide {@link ngMock.$browser mock implementation} of the `$browser`
 * service, which can be used for convenient testing of the application without the interaction with
 * the real browser apis.
 */
/**
 * @param {object} window The global window object.
 * @param {object} document jQuery wrapped document.
 * @param {object} $log window.console or an object with the same interface.
 * @param {object} $sniffer $sniffer service
 */
function Browser(window, document, $log, $sniffer) {
  var self = this,
      rawDocument = document[0],
      location = window.location,
      history = window.history,
      setTimeout = window.setTimeout,
      clearTimeout = window.clearTimeout,
      pendingDeferIds = {};

  self.isMock = false;

  var outstandingRequestCount = 0;
  var outstandingRequestCallbacks = [];

  // TODO(vojta): remove this temporary api
  self.$$completeOutstandingRequest = completeOutstandingRequest;
  self.$$incOutstangRequestCount++; };

  /**
   * Executes the `fn` function(supports currying) and decrements the `outstandingRequestCallbacks`
   * counter. If the counter reaches 0, all the `outstandingRequestCallbacks` ar}
 .substr(index);
  }

  /**
   * @private
   * Note: this method is used only by scenario runner
   * TODO(vojta): prefix this method with $$ ?
   * @param {function()} callback Function that will be called when no outstanding request
   */
  self.notifyWhenNoOuallback);
    }
  };

  //////////////////////////////////////////////////////////////
  // URL API
  //////////////////////////////////////////////////////////////

  var cachedState, lastHistoryState,
      lastBrowserUrl = location.href,
      baseElement = document.find('base'),
      pendingLocation = null;

  cacheState();
  lastHistoryState = cachedState;

  /**
   * @name $browser#url
   *
   * @description
   * GETTER:
   * Without any argument, this method just returns current value of location.href.
   *
   * SETTER:
   * With at least one argument, this method sets url to new value.
   * If html5 history api supported, pushState/replaceState is used, otherwise
   * location.href/location.replace is used.
   * Returns its own instance to allow chaining
   *
   * NOTE: this api is intended for use only by the $location service. Please use the
   * {@link ng.$location $location service} to change url.
   *
   * @param {string} url New url (when used as setter)
   * @param {boolean=} replace Should new url replace current history record?
   * @param {object=} state object to use with pushState/replaceState
   */
  self.url = function(url, replace, state) {
    // In modern browsers `history.state` is `null` by default; treating it separately
    // from `undefined` would cause `$browser.url('/foo')` to change `history.state`
    // to undefined via `pushState`. Instead, let's change `undefined` to `null` here.
    if (isUndefined(state)) {
      state = null;
    }

    // Android Browser BFCache causes location, history reference to become stale.
    if (location !== window.location) location = window.location;
    if (history !== window.history) history = window.history;

    // setter
    if (url) {
      var sameState = lastHistoryState === state;

      // Don't change anything if previous and current URLs and states match. This also prevents
      // IE<10 from getting into redirect loop when in LocationHashbangInHtml5Url mode.
      // See https://github.com/angular/angular.js/commit/ffb2701
      if (lastBrowserUrl === url && (!$sniffer.history || sameState)) {
        return self;
      }
      var sameBase = lastBrowserUrl && stripHash(lastBrowserUrl) === stripHash(url);
      lastBrowserUrl = url;
      lastHistoryState = state;
      // Don't use history API if only the hash changed
      // due to a bug in IE10/IE11 which leads
      // to not firing a `hashchange` nor `popstate` event
      // in some cases (see #9143).
      if ($sniffer.history && (!sameBase || !sameState)) {
        history[replace ? 'replaceState' : 'pushState'](state, '', url);
        cacheState();
        // Do the assignment again so that those two variables are referentially identical.
        lastHistoryState = cachedState;
      } else {
        if (!sameBase || pendingLocation) {
          pendingLocation = url;
        }
        if (replace) {
          location.replace(url);
        } else if (!sameBase) {
          location.href = url;
        } else {
          location.hash = getHash(url);
        }
        if (location.href !== url) {
          pendingLocation = url;
        }
      }
      return self;
    // getter
    } else {
      // - pendingLocation is needed as browsers don't allow to read out
      //   the new location.href if a reload happened or if there is a bug like in iOS 9 (see
      //   https://openradar.appspot.com/22186109).
      // - the replacement is a workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=407172
      return pendingLocation || location.href.replace(/%27/g,"'");
    }
  };

  /**
   * @name $browser#state
   *
   * @description
   * This method is a getter.
   *
   * Return history.state or null if history.state is undefined.
   *
   * @returns {object} state
   */
  self.state = function() {
    return cachedState;
  };

  var urlChangeListeners = [],
      urlChaireNFIRMED).
    }
  }

  // This variable should be used *only* inside the cacheState function.
  var lastCa = State);
    });
  }

  /**
   * @name $browser#onUrlChange
   *
   * @description
   * Register callback function that will be called, when url changes.
   *
   * It's only called when the url is changed from outside of angular:
   * - user types different url into address bar
   * - user clicks on history (forward/back) button
   * - user clicks on a link
   *
   * It's not called when url is changed by $browser.url() method
   *
   * The listener gets called with new url as parameter.
   *
   * NOTE: this api is intended for use only by the $location service. Please use the
   * {@link ng.$location $location service} to monitor url changes in angular apps.
   *
   * @param {function(string)} listener Listener function to be called when url changes.
   * @return {function(string)} Returns the registered listener fn - handy if the fn is anonymous.
   */
 eturn callback;
  };

  /**
   * @private
   * Remove popstate and hashchange handler from window.
   *
   * NOTE: this api is intended for use only by $rootScope.
   */
  self.$$appFireUrlChange);
  };

  /**
   * Checks whether the url has changed outside of Angular.
   * Needs to be exported to be able to check for changes that have been done in sync,
   * as hashchange/popstate events fire in async.
   */
  self.$$checkUrlChange = fireUrlChange;

  //////////////////////////////////////////////////////////////
  // Misc API
  //////////////////////////////////////////////////////////////

  /**
   * @name $browser#baseHref
   *
   * @description
   * Returns current <base href>
   * (always relative - without domain)
   *
   * @returns {string} The current base href
   */]*/, '') : '';
  };

  /**
   * @name $browser#defer
   * @param {function()} fn A function, who's execution should be deferred.
   * @param {number=} [delay=0] of milliseconds to defer the function execution.
   * @returns {*} DeferId that can be used to cancel the task via `$browser.defer.cancel()`.
   *
   * @description
   * Executes a fn asynchronously via `setTimeout(fn, delay)`.
   *
   * Unlike when calling `setTimeout` directly, in test this function is mocked and instead of using
   * `setTimeout` in tests, the fns are queued in an array, which can be programmatically flushed
   * via `$browser.defer.flush()`.
   *
 turn timeoutId;
  };


  /**
   * @name $browser#defer.cancel
   *
   * @description
   * Cancels a deferred task identified with `deferId`.
   *
   * @param {*} deferId Token returned by the `$browser.defer` function.
   * @returns {boolean} Returns `true` if the task hasn't executed yet and was successfully
   *                    canceled.
   */
    retiffer);
      }];
}

/**
 * @ngdoc service
 * @name $cacheFactory
 *
 * @description
 * Factory that constructs {@link $cacheFactory.Cache Cache} objects and gives access to
 * them.
 *
 * ```js
 *
 *  var cache = $cacheFactory('cacheId');
 *  expect($cacheFactory.get('cacheId')).toBe(cache);
 *  expect($cacheFactory.get('noSuchCacheId')).not.toBeDefined();
 *
 *  cache.put("key", "value");
 *  cache.put("another key", "another value");
 *
 *  // We've specified no options on creation
 *  expect(cache.info()).toEqual({id: 'cacheId', size: 2});
 *
 * ```
 *
 *
 * @param {string} cacheId Name or id of the newly created cache.
 * @param {object=} options Options object that specifies the cache behavior. Properties:
 *
 *   - `{number=}` `capacity` — turns the cache into LRU cache.
 *
 * @returns {object} Newly created cache object with the following set of methods:
 *
 * - `{object}` `info()` — Returns id, size, and options of cache.
 * - `{{*}}` `put({string} key, {*} value)` — Puts a new key-value pair into the cache and returns
 *   it.
 * - `{{*}}` `get({string} key)` — Returns cached value for `key` or undefined for cache miss.
 * - `{void}` `remove({string} key)` — Removes a key-value pair from the cache.
 * - `{void}` `removeAll()` — Removes all cached values.
 * - `{void}` `destroy()` — Removes references to this cache from $cacheFactory.
 *
 * @example
   <example module="cacheExampleApp">
     <file name="index.html">
       <div ng-controller="CacheController">
         <input ng-model="newCacheKey" placeholder="Key">
         <input ng-model="newCacheValue" placeholder="Value">
         <button ng-click="put(newCacheKey, newCacheValue)">Cache</button>

         <p ng-if="keys.length">Cached Values</p>
         <div ng-repeat="key in keys">
           <span ng-bind="key"></span>
           <span>: </span>
           <b ng-bind="cache.get(key)"></b>
         </div>

         <p>Cache Info</p>
         <div ng-repeat="(key, value) in cache.info()">
           <span ng-bind="key"></span>
           <span>: </span>
           <b ng-bind="value"></b>
         </div>
       </div>
     </file>
     <file name="script.js">
       angular.module('cacheExampleApp', []).
         controller('CacheController', ['$scope', '$cacheFactory', function($scope, $cacheFactory) {
           $scope.keys = [];
           $scope.cache = $cacheFactory('cacheId');
           $scope.put = function(key, value) {
             if (angular.isUndefined($scope.cache.get(key))) {
               $scope.keys.push(key);
             }
             $scope.cache.put(key, angular.isUndefined(value) ? null : value);
           };
         }]);
     </file>
     <file name="style.css">
       p {
         margin: 10px 0 3px;
       }
     </file>
   </example>
 */
function $CacheFactoryProvider() {

  this.$get = function() {
    var caches = {};

    function cacheFactory(cacheId, options) {
      if (cacheId in caches) {
        throw minErr('$cacheFactory')('iid', "CacheId '{0}' is already taken!", cacheId);
      }

      var size = 0,
          stats = extend({}, options, {id: cacheId}),
          data = createMap(),
          capacity = (options && options.capacity) || Number.MAX_VALUE,
          lruHash = createMap(),
          freshEnd = null,
          staleEnd = null;

      /**
       * @ngdoc type
       * @name $cacheFactory.Cache
       *
       * @description
       * A cache object used to store and retrieve data, primarily used by
       * {@link $http $http} and the {@link ng.directive:script script} directive to cache
       * templates and other data.
       *
       * ```js
       *  angular.module('superCache')
       *    .factory('superCache', ['$cacheFactory', function($cacheFactory) {
       *      return $cacheFactory('super-cache');
       *    }]);
       * ```
       *
       * Example test:
       *
       * ```js
       *  it('should behave like a cache', inject(function(superCache) {
       *    superCache.put('key', 'value');
       *    superCache.put('another key', 'another value');
       *
       *    expect(superCache.info()).toEqual({
       *      id: 'super-cache',
       *      size: 2
       *    });
       *
       *    superCache.remove('another key');
       *    expect(superCache.get('another key')).toBeUndefined();
       *
       *    superCache.removeAll();
       *    expect(superCache.info()).toEqual({
       *      id: 'super-cache',
       *      size: 0
       *    });
       *  }));
       * ```
       */
      return caches[cacheId] = {

        /**
         * @ngdoc method
         * @name $cacheFactory.Cache#put
         * @kind function
         *
         * @description
         * Inserts a named entry into the {@link $cacheFactory.Cache Cache} object to be
         * retrieved later, and incrementing the size of the cache if the key was not already
         * present in the cache. If behaving like an LRU cache, it will also remove stale
         * entries from the set.
         *
         * It will not insert undefined values into the cache.
         *
         * @param {string} key the key under which the cached data is stored.
         * @param {*} value the value to store alongside the key. If it is undefined, the key
         *    will not be stored.
         * @returns {*} the value          return value;
        },

        /**
         * @ngdoc method
         * @name $cacheFactory.Cache#get
         * @kind function
         *
         * @description
         * Retrieves named data stored in the {@link $cacheFactory.Cache Cache} object.
         *
         * @param {string} key the key of the data to be retrieved
         * @returns {*} the value      return data[key];
        },


        /**
         * @ngdoc method
         * @name $cacheFactory.Cache#remove
         * @kind function
         *
         * @description
         * Removes an entry from the {@link $cacheFactory.Cache Cache} object.
         *
         * @param {string} key the key of the entry to be removed
         */
        remove: function(key) {
          if (capacity < Number.MAX_VALUE) {
            var lruEntry = lruHash[key];

            if (!lruEntry) return;

            if (lruEntry == freshEnd) freshEnd = lruEntry.p;
            if (lruEntry == staleEnd) staleEnd = lruEntry.n;
            link(lruEntry.n,lruEntry.p);

            delete lruHash[key];
          }

          if (!(key in data)) return;

          delete data[key];
          size--;
        },


        /**
         * @ngdoc method
         * @name $cacheFactory.Cache#removeAll
         * @kind function
         *
         * @description
         * Clears the cache object of any entriehEnd = staleEnd = null;
        },


        /**
         * @ngdoc method
         * @name $cacheFactory.Cache#destroy
         * @kind function
         *
         * @description
         * Destroys the {@link $cacheFactory.Cache Cache} object entirely,
         * removing it from the {@link $cacheFactory $cacheFactory} delete caches[cacheId];
        },


        /**
         * @ngdoc method
         * @name $cacheFactory.Cache#info
         * @kind function
         *
         * @description
         * Retrieve information regarding a particular {@link $cacheFactory.Cache Cache}.
         *
         * @returns {object} an object with the following properties:
         *   <ul>
         *     <li>**id**: the id of the cache instance</li>
         *     <li>**size**: the number of entries kept in the cache instance</li>
         *     <li>**...**: any additional properties from the options object when creating the
         *       cache.</li>
         * , stats, {size: size});
        }
      };


      /**
       * makes the `entry` the freshEnd of thshEnd.n = null;
        }
      }


      /**
       * bidirectionally links two entries of th' didn't minify
        }
      }
    }


  /**
   * @ngdoc method
   * @name $cacheFactory#info
   *
   * @description
   * Get information about all the caches that have been created
   *
   * @returns {Object} - key-value map of `cacheId` to the result of calling `cache#in     });
      return info;
    };


  /**
   * @ngdoc method
   * @name $cacheFactory#get
   *
   * @description
   * Get access to a cache object by the `cacheId` used when it was created.
   *
   * @param {string} cacheId Name or id of a cache to access.
   * @returns {object} Cache object identified by the cacheId or undefined if no such cache.
   */
    cacheFactory.get = function(cacheId) {
      return caches[cacheId];
    };


    return cacheFactory;
  };
}

/**
 * @ngdoc service
 * @name $templateCache
 *
 * @description
 * The first time a template is used, it is loaded in the template cache for quick retrieval. You
 * can load templates directly into the cache in a `script` tag, or by consuming the
 * `$templateCache` service directly.
 *
 * Adding via the `script` tag:
 *
 * ```html
 *   <script type="text/ng-template" id="templateId.html">
 *     <p>This is the content of the template</p>
 *   </script>
 * ```
 *
 * **Note:** the `script` tag containing the template does not need to be included in the `head` of
 * the document, but it must be a descendent of the {@link ng.$rootElement $rootElement} (IE,
 * element with ng-app attribute), otherwise the template will be ignored.
 *
 * Adding via the `$templateCache` service:
 *
 * ```js
 * var myApp = angular.module('myApp', []);
 * myApp.run(function($templateCache) {
 *   $templateCache.put('templateId.html', 'This is the content of the template');
 * });
 * ```
 *
 * To retrieve the template later, simply use it in your HTML:
 * ```html
 * <div ng-include=" 'templateId.html' "></div>
 * ```
 *
 * or get it via Javascript:
 * ```js
 * $templateCache.get('templateId.html')
 * ```
 *
 * See {@link ng.$caacheFactory('templates');
  }];
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *     Any commits to this file should be reviewed with security in mind.  *
 *   Changes to this file can potentially create security vulnerabilities. *
 *          An approval from 2 Core members with history of modifying      *
 *                         this file is required.                          *
 *                                                                         *
 *  Does the change somehow allow for arbitrary javascript to be executed? *
 *    Or allows for someone to change the prototype of built-in objects?   *
 *     Or gives undesired access to variables likes document or window?    *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/* ! VARIABLE/FUNCTION NAMING CONVENTIONS THAT APPLY TO THIS FILE!
 *
 * DOM-related variables:
 *
 * - "node" - DOM Node
 * - "element" - DOM Element or Node
 * - "$node" or "$element" - jqLite-wrapped node or element
 *
 *
 * Compiler related stuff:
 *
 * - "linkFn" - linking fn of a single directive
 * - "nodeLinkFn" - function that aggregates all linking fns for a particular node
 * - "childLinkFn" -  function that aggregates all linking fns for child nodes of a particular node
 * - "compositeLinkFn" - function that aggregates all linking fns for a compilation root (nodeList)
 */


/**
 * @ngdoc service
 * @name $compile
 * @kind function
 *
 * @description
 * Compiles an HTML string or DOM into a template and produces a template function, which
 * can then be used to link {@link ng.$rootScope.Scope `scope`} and the template together.
 *
 * The compilation is a process of walking the DOM tree and matching DOM elements to
 * {@link ng.$compileProvider#directive directives}.
 *
 * <div class="alert alert-warning">
 * **Note:** This document is an in-depth reference of all directive options.
 * For a gentle introduction to directives with examples of common use cases,
 * see the {@link guide/directive directive guide}.
 * </div>
 *
 * ## Comprehensive Directive API
 *
 * There are many different options for a directive.
 *
 * The difference resides in the return value of the factory function.
 * You can either return a "Directive Definition Object" (see below) that defines the directive properties,
 * or just the `postLink` function (all other properties will have the default values).
 *
 * <div class="alert alert-success">
 * **Best Practice:** It's recommended to use the "directive definition object" form.
 * </div>
 *
 * Here's an example directive declared with a Directive Definition Object:
 *
 * ```js
 *   var myModule = angular.module(...);
 *
 *   myModule.directive('directiveName', function factory(injectables) {
 *     var directiveDefinitionObject = {
 *       priority: 0,
 *       template: '<div></div>', // or // function(tElement, tAttrs) { ... },
 *       // or
 *       // templateUrl: 'directive.html', // or // function(tElement, tAttrs) { ... },
 *       transclude: false,
 *       restrict: 'A',
 *       templateNamespace: 'html',
 *       scope: false,
 *       controller: function($scope, $element, $attrs, $transclude, otherInjectables) { ... },
 *       controllerAs: 'stringIdentifier',
 *       bindToController: false,
 *       require: 'siblingDirectiveName', // or // ['^parentDirectiveName', '?optionalDirectiveName', '?^optionalParent'],
 *       compile: function compile(tElement, tAttrs, transclude) {
 *         return {
 *           pre: function preLink(scope, iElement, iAttrs, controller) { ... },
 *           post: function postLink(scope, iElement, iAttrs, controller) { ... }
 *         }
 *         // or
 *         // return function postLink( ... ) { ... }
 *       },
 *       // or
 *       // link: {
 *       //  pre: function preLink(scope, iElement, iAttrs, controller) { ... },
 *       //  post: function postLink(scope, iElement, iAttrs, controller) { ... }
 *       // }
 *       // or
 *       // link: function postLink( ... ) { ... }
 *     };
 *     return directiveDefinitionObject;
 *   });
 * ```
 *
 * <div class="alert alert-warning">
 * **Note:** Any unspecified options will use the default value. You can see the default values below.
 * </div>
 *
 * Therefore the above can be simplified as:
 *
 * ```js
 *   var myModule = angular.module(...);
 *
 *   myModule.directive('directiveName', function factory(injectables) {
 *     var directiveDefinitionObject = {
 *       link: function postLink(scope, iElement, iAttrs) { ... }
 *     };
 *     return directiveDefinitionObject;
 *     // or
 *     // return function postLink(scope, iElement, iAttrs) { ... }
 *   });
 * ```
 *
 *
 *
 * ### Directive Definition Object
 *
 * The directive definition object provides instructions to the {@link ng.$compile
 * compiler}. The attributes are:
 *
 * #### `multiElement`
 * When this property is set to true, the HTML compiler will collect DOM nodes between
 * nodes with the attributes `directive-name-start` and `directive-name-end`, and group them
 * together as the directive elements. It is recommended that this feature be used on directives
 * which are not strictly behavioural (such as {@link ngClick}), and which
 * do not manipulate or replace child nodes (such as {@link ngInclude}).
 *
 * #### `priority`
 * When there are multiple directives defined on a single DOM element, sometimes it
 * is necessary to specify the order in which the directives are applied. The `priority` is used
 * to sort the directives before their `compile` functions get called. Priority is defined as a
 * number. Directives with greater numerical `priority` are compiled first. Pre-link functions
 * are also run in priority order, but post-link functions are run in reverse order. The order
 * of directives with the same priority is undefined. The default priority is `0`.
 *
 * #### `terminal`
 * If set to true then the current `priority` will be the last set of directives
 * which will execute (any directives at the current priority will still execute
 * as the order of execution on same `priority` is undefined). Note that expressions
 * and other directives used in the directive's template will also be excluded from execution.
 *
 * #### `scope`
 * The scope property can be `true`, an object or a falsy value:
 *
 * * **falsy:** No scope will be created for the directive. The directive will use its parent's scope.
 *
 * * **`true`:** A new child scope that prototypically inherits from its parent will be created for
 * the directive's element. If multiple directives on the same element request a new scope,
 * only one new scope is created. The new scope rule does not apply for the root of the template
 * since the root of the template always gets a new scope.
 *
 * * **`{...}` (an object hash):** A new "isolate" scope is created for the directive's element. The
 * 'isolate' scope differs from normal scope in that it does not prototypically inherit from its parent
 * scope. This is useful when creating reusable components, which should not accidentally read or modify
 * data in the parent scope.
 *
 * The 'isolate' scope object hash defines a set of local scope properties derived from attributes on the
 * directive's element. These local properties are useful for aliasing values for templates. The keys in
 * the object hash map to the name of the property on the isolate scope; the values define how the property
 * is bound to the parent scope, via matching attributes on the directive's element:
 *
 * * `@` or `@attr` - bind a local scope property to the value of DOM attribute. The result is
 *   always a string since DOM attributes are strings. If no `attr` name is specified then the
 *   attribute name is assumed to be the same as the local name. Given `<my-component
 *   my-attr="hello {{name}}">` and the isolate scope definition `scope: { localName:'@myAttr' }`,
 *   the directive's scope property `localName` will reflect the interpolated value of `hello
 *   {{name}}`. As the `name` attribute changes so will the `localName` property on the directive's
 *   scope. The `name` is read from the parent scope (not the directive's scope).
 *
 * * `=` or `=attr` - set up a bidirectional binding between a local scope property and an expression
 *   passed via the attribute `attr`. The expression is evaluated in the context of the parent scope.
 *   If no `attr` name is specified then the attribute name is assumed to be the same as the local
 *   name. Given `<my-component my-attr="parentModel">` and the isolate scope definition `scope: {
 *   localModel: '=myAttr' }`, the property `localModel` on the directive's scope will reflect the
 *   value of `parentModel` on the parent scope. Changes to `parentModel` will be reflected in
 *   `localModel` and vice versa. Optional attributes should be marked as such with a question mark:
 *   `=?` or `=?attr`. If the binding expression is non-assignable, or if the attribute isn't
 *   optional and doesn't exist, an exception ({@link error/$compile/nonassign `$compile:nonassign`})
 *   will be thrown upon discovering changes to the local value, since it will be impossible to sync
 *   them back to the parent scope. By default, the {@link ng.$rootScope.Scope#$watch `$watch`}
 *   method is used for tracking changes, and the equality check is based on object identity.
 *   However, if an object literal or an array literal is passed as the binding expression, the
 *   equality check is done by value (using the {@link angular.equals} function). It's also possible
 *   to watch the evaluated value shallowly with {@link ng.$rootScope.Scope#$watchCollection
 *   `$watchCollection`}: use `=*` or `=*attr` (`=*?` or `=*?attr` if the attribute is optional).
 *
 * * `&` or `&attr` - provides a way to execute an expression in the context of the parent scope. If
 *   no `attr` name is specified then the attribute name is assumed to be the same as the local name.
 *   Given `<my-component my-attr="count = count + value">` and the isolate scope definition `scope: {
 *   localFn:'&myAttr' }`, the isolate scope property `localFn` will point to a function wrapper for
 *   the `count = count + value` expression. Often it's desirable to pass data from the isolated scope
 *   via an expression to the parent scope. This can be done by passing a map of local variable names
 *   and values into the expression wrapper fn. For example, if the expression is `increment(amount)`
 *   then we can specify the amount value by calling the `localFn` as `localFn({amount: 22})`.
 *
 * In general it's possible to apply more than one directive to one element, but there might be limitations
 * depending on the type of scope required by the directives. The following points will help explain these limitations.
 * For simplicity only two directives are taken into account, but it is also applicable for several directives:
 *
 * * **no scope** + **no scope** => Two directives which don't require their own scope will use their parent's scope
 * * **child scope** + **no scope** =>  Both directives will share one single child scope
 * * **child scope** + **child scope** =>  Both directives will share one single child scope
 * * **isolated scope** + **no scope** =>  The isolated directive will use it's own created isolated scope. The other directive will use
 * its parent's scope
 * * **isolated scope** + **child scope** =>  **Won't work!** Only one scope can be related to one element. Therefore these directives cannot
 * be applied to the same element.
 * * **isolated scope** + **isolated scope**  =>  **Won't work!** Only one scope can be related to one element. Therefore these directives
 * cannot be applied to the same element.
 *
 *
 * #### `bindToController`
 * This property is used to bind scope properties directly to the controller. It can be either
 * `true` or an object hash with the same format as the `scope` property. Additionally, a controller
 * alias must be set, either by using `controllerAs: 'myAlias'` or by specifying the alias in the controller
 * definition: `controller: 'myCtrl as myAlias'`.
 *
 * When an isolate scope is used for a directive (see above), `bindToController: true` will
 * allow a component to have its properties bound to the controller, rather than to scope. When the controller
 * is instantiated, the initial values of the isolate scope bindings are already available.
 *
 * It is also possible to set `bindToController` to an object hash with the same format as the `scope` property.
 * This will set up the scope bindings to the controller directly. Note that `scope` can still be used
 * to define which kind of scope is created. By default, no scope is created. Use `scope: {}` to create an isolate
 * scope (useful for component directives).
 *
 * If both `bindToController` and `scope` are defined and have object hashes, `bindToController` overrides `scope`.
 *
 *
 * #### `controller`
 * Controller constructor function. The controller is instantiated before the
 * pre-linking phase and can be accessed by other directives (see
 * `require` attribute). This allows the directives to communicate with each other and augment
 * each other's behavior. The controller is injectable (and supports bracket notation) with the following locals:
 *
 * * `$scope` - Current scope associated with the element
 * * `$element` - Current element
 * * `$attrs` - Current attributes object for the element
 * * `$transclude` - A transclude linking function pre-bound to the correct transclusion scope:
 *   `function([scope], cloneLinkingFn, futureParentElement)`.
 *    * `scope`: optional argument to override the scope.
 *    * `cloneLinkingFn`: optional argument to create clones of the original transcluded content.
 *    * `futureParentElement`:
 *        * defines the parent to which the `cloneLinkingFn` will add the cloned elements.
 *        * default: `$element.parent()` resp. `$element` for `transclude:'element'` resp. `transclude:true`.
 *        * only needed for transcludes that are allowed to contain non html elements (e.g. SVG elements)
 *          and when the `cloneLinkinFn` is passed,
 *          as those elements need to created and cloned in a special way when they are defined outside their
 *          usual containers (e.g. like `<svg>`).
 *        * See also the `directive.templateNamespace` property.
 *
 *
 * #### `require`
 * Require another directive and inject its controller as the fourth argument to the linking function. The
 * `require` takes a string name (or array of strings) of the directive(s) to pass in. If an array is used, the
 * injected argument will be an array in corresponding order. If no such directive can be
 * found, or if the directive does not have a controller, then an error is raised (unless no link function
 * is specified, in which case error checking is skipped). The name can be prefixed with:
 *
 * * (no prefix) - Locate the required controller on the current element. Throw an error if not found.
 * * `?` - Attempt to locate the required controller or pass `null` to the `link` fn if not found.
 * * `^` - Locate the required controller by searching the element and its parents. Throw an error if not found.
 * * `^^` - Locate the required controller by searching the element's parents. Throw an error if not found.
 * * `?^` - Attempt to locate the required controller by searching the element and its parents or pass
 *   `null` to the `link` fn if not found.
 * * `?^^` - Attempt to locate the required controller by searching the element's parents, or pass
 *   `null` to the `link` fn if not found.
 *
 *
 * #### `controllerAs`
 * Identifier name for a reference to the controller in the directive's scope.
 * This allows the controller to be referenced from the directive template. This is especially
 * useful when a directive is used as component, i.e. with an `isolate` scope. It's also possible
 * to use it in a directive without an `isolate` / `new` scope, but you need to be aware that the
 * `controllerAs` reference might overwrite a property that already exists on the parent scope.
 *
 *
 * #### `restrict`
 * String of subset of `EACM` which restricts the directive to a specific directive
 * declaration style. If omitted, the defaults (elements and attributes) are used.
 *
 * * `E` - Element name (default): `<my-directive></my-directive>`
 * * `A` - Attribute (default): `<div my-directive="exp"></div>`
 * * `C` - Class: `<div class="my-directive: exp;"></div>`
 * * `M` - Comment: `<!-- directive: my-directive exp -->`
 *
 *
 * #### `templateNamespace`
 * String representing the document type used by the markup in the template.
 * AngularJS needs this information as those elements need to be created and cloned
 * in a special way when they are defined outside their usual containers like `<svg>` and `<math>`.
 *
 * * `html` - All root nodes in the template are HTML. Root nodes may also be
 *   top-level elements such as `<svg>` or `<math>`.
 * * `svg` - The root nodes in the template are SVG elements (excluding `<math>`).
 * * `math` - The root nodes in the template are MathML elements (excluding `<svg>`).
 *
 * If no `templateNamespace` is specified, then the namespace is considered to be `html`.
 *
 * #### `template`
 * HTML markup that may:
 * * Replace the contents of the directive's element (default).
 * * Replace the directive's element itself (if `replace` is true - DEPRECATED).
 * * Wrap the contents of the directive's element (if `transclude` is true).
 *
 * Value may be:
 *
 * * A string. For example `<div red-on-hover>{{delete_str}}</div>`.
 * * A function which takes two arguments `tElement` and `tAttrs` (described in the `compile`
 *   function api below) and returns a string value.
 *
 *
 * #### `templateUrl`
 * This is similar to `template` but the template is loaded from the specified URL, asynchronously.
 *
 * Because template loading is asynchronous the compiler will suspend compilation of directives on that element
 * for later when the template has been resolved.  In the meantime it will continue to compile and link
 * sibling and parent elements as though this element had not contained any directives.
 *
 * The compiler does not suspend the entire compilation to wait for templates to be loaded because this
 * would result in the whole app "stalling" until all templates are loaded asynchronously - even in the
 * case when only one deeply nested directive has `templateUrl`.
 *
 * Template loading is asynchronous even if the template has been preloaded into the {@link $templateCache}
 *
 * You can specify `templateUrl` as a string representing the URL or as a function which takes two
 * arguments `tElement` and `tAttrs` (described in the `compile` function api below) and returns
 * a string value representing the url.  In either case, the template URL is passed through {@link
 * $sce#getTrustedResourceUrl $sce.getTrustedResourceUrl}.
 *
 *
 * #### `replace` ([*DEPRECATED*!], will be removed in next major release - i.e. v2.0)
 * specify what the template should replace. Defaults to `false`.
 *
 * * `true` - the template will replace the directive's element.
 * * `false` - the template will replace the contents of the directive's element.
 *
 * The replacement process migrates all of the attributes / classes from the old element to the new
 * one. See the {@link guide/directive#template-expanding-directive
 * Directives Guide} for an example.
 *
 * There are very few scenarios where element replacement is required for the application function,
 * the main one being reusable custom components that are used within SVG contexts
 * (because SVG doesn't work with custom elements in the DOM tree).
 *
 * #### `transclude`
 * Extract the contents of the element where the directive appears and make it available to the directive.
 * The contents are compiled and provided to the directive as a **transclusion function**. See the
 * {@link $compile#transclusion Transclusion} section below.
 *
 * There are two kinds of transclusion depending upon whether you want to transclude just the contents of the
 * directive's element or the entire element:
 *
 * * `true` - transclude the content (i.e. the child nodes) of the directive's element.
 * * `'element'` - transclude the whole of the directive's element including any directives on this
 *   element that defined at a lower priority than this directive. When used, the `template`
 *   property is ignored.
 *
 *
 * #### `compile`
 *
 * ```js
 *   function compile(tElement, tAttrs, transclude) { ... }
 * ```
 *
 * The compile function deals with transforming the template DOM. Since most directives do not do
 * template transformation, it is not used often. The compile function takes the following arguments:
 *
 *   * `tElement` - template element - The element where the directive has been declared. It is
 *     safe to do template transformation on the element and child elements only.
 *
 *   * `tAttrs` - template attributes - Normalized list of attributes declared on this element shared
 *     between all directive compile functions.
 *
 *   * `transclude` -  [*DEPRECATED*!] A transclude linking function: `function(scope, cloneLinkingFn)`
 *
 * <div class="alert alert-warning">
 * **Note:** The template instance and the link instance may be different objects if the template has
 * been cloned. For this reason it is **not** safe to do anything other than DOM transformations that
 * apply to all cloned DOM nodes within the compile function. Specifically, DOM listener registration
 * should be done in a linking function rather than in a compile function.
 * </div>

 * <div class="alert alert-warning">
 * **Note:** The compile function cannot handle directives that recursively use themselves in their
 * own templates or compile functions. Compiling these directives results in an infinite loop and
 * stack overflow errors.
 *
 * This can be avoided by manually using $compile in the postLink function to imperatively compile
 * a directive's template instead of relying on automatic template compilation via `template` or
 * `templateUrl` declaration or manual compilation inside the compile function.
 * </div>
 *
 * <div class="alert alert-danger">
 * **Note:** The `transclude` function that is passed to the compile function is deprecated, as it
 *   e.g. does not know about the right outer scope. Please use the transclude function that is passed
 *   to the link function instead.
 * </div>

 * A compile function can have a return value which can be either a function or an object.
 *
 * * returning a (post-link) function - is equivalent to registering the linking function via the
 *   `link` property of the config object when the compile function is empty.
 *
 * * returning an object with function(s) registered via `pre` and `post` properties - allows you to
 *   control when a linking function should be called during the linking phase. See info about
 *   pre-linking and post-linking functions below.
 *
 *
 * #### `link`
 * This property is used only if the `compile` property is not defined.
 *
 * ```js
 *   function link(scope, iElement, iAttrs, controller, transcludeFn) { ... }
 * ```
 *
 * The link function is responsible for registering DOM listeners as well as updating the DOM. It is
 * executed after the template has been cloned. This is where most of the directive logic will be
 * put.
 *
 *   * `scope` - {@link ng.$rootScope.Scope Scope} - The scope to be used by the
 *     directive for registering {@link ng.$rootScope.Scope#$watch watches}.
 *
 *   * `iElement` - instance element - The element where the directive is to be used. It is safe to
 *     manipulate the children of the element only in `postLink` function since the children have
 *     already been linked.
 *
 *   * `iAttrs` - instance attributes - Normalized list of attributes declared on this element shared
 *     between all directive linking functions.
 *
 *   * `controller` - the directive's required controller instance(s) - Instances are shared
 *     among all directives, which allows the directives to use the controllers as a communication
 *     channel. The exact value depends on the directive's `require` property:
 *       * no controller(s) required: the directive's own controller, or `undefined` if it doesn't have one
 *       * `string`: the controller instance
 *       * `array`: array of controller instances
 *
 *     If a required controller cannot be found, and it is optional, the instance is `null`,
 *     otherwise the {@link error:$compile:ctreq Missing Required Controller} error is thrown.
 *
 *     Note that you can also require the directive's own controller - it will be made available like
 *     any other controller.
 *
 *   * `transcludeFn` - A transclude linking function pre-bound to the correct transclusion scope.
 *     This is the same as the `$transclude`
 *     parameter of directive controllers, see there for details.
 *     `function([scope], cloneLinkingFn, futureParentElement)`.
 *
 * #### Pre-linking function
 *
 * Executed before the child elements are linked. Not safe to do DOM transformation since the
 * compiler linking function will fail to locate the correct elements for linking.
 *
 * #### Post-linking function
 *
 * Executed after the child elements are linked.
 *
 * Note that child elements that contain `templateUrl` directives will not have been compiled
 * and linked since they are waiting for their template to load asynchronously and their own
 * compilation and linking has been suspended until that occurs.
 *
 * It is safe to do DOM transformation in the post-linking function on elements that are not waiting
 * for their async templates to be resolved.
 *
 *
 * ### Transclusion
 *
 * Transclusion is the process of extracting a collection of DOM elements from one part of the DOM and
 * copying them to another part of the DOM, while maintaining their connection to the original AngularJS
 * scope from where they were taken.
 *
 * Transclusion is used (often with {@link ngTransclude}) to insert the
 * original contents of a directive's element into a specified place in the template of the directive.
 * The benefit of transclusion, over simply moving the DOM elements manually, is that the transcluded
 * content has access to the properties on the scope from which it was taken, even if the directive
 * has isolated scope.
 * See the {@link guide/directive#creating-a-directive-that-wraps-other-elements Directives Guide}.
 *
 * This makes it possible for the widget to have private state for its template, while the transcluded
 * content has access to its originating scope.
 *
 * <div class="alert alert-warning">
 * **Note:** When testing an element transclude directive you must not place the directive at the root of the
 * DOM fragment that is being compiled. See {@link guide/unit-testing#testing-transclusion-directives
 * Testing Transclusion Directives}.
 * </div>
 *
 * #### Transclusion Functions
 *
 * When a directive requests transclusion, the compiler extracts its contents and provides a **transclusion
 * function** to the directive's `link` function and `controller`. This transclusion function is a special
 * **linking function** that will return the compiled contents linked to a new transclusion scope.
 *
 * <div class="alert alert-info">
 * If you are just using {@link ngTransclude} then you don't need to worry about this function, since
 * ngTransclude will deal with it for us.
 * </div>
 *
 * If you want to manually control the insertion and removal of the transcluded content in your directive
 * then you must use this transclude function. When you call a transclude function it returns a a jqLite/JQuery
 * object that contains the compiled DOM, which is linked to the correct transclusion scope.
 *
 * When you call a transclusion function you can pass in a **clone attach function**. This function accepts
 * two parameters, `function(clone, scope) { ... }`, where the `clone` is a fresh compiled copy of your transcluded
 * content and the `scope` is the newly created transclusion scope, to which the clone is bound.
 *
 * <div class="alert alert-info">
 * **Best Practice**: Always provide a `cloneFn` (clone attach function) when you call a translude function
 * since you then get a fresh clone of the original DOM and also have access to the new transclusion scope.
 * </div>
 *
 * It is normal practice to attach your transcluded content (`clone`) to the DOM inside your **clone
 * attach function**:
 *
 * ```js
 * var transcludedContent, transclusionScope;
 *
 * $transclude(function(clone, scope) {
 *   element.append(clone);
 *   transcludedContent = clone;
 *   transclusionScope = scope;
 * });
 * ```
 *
 * Later, if you want to remove the transcluded content from your DOM then you should also destroy the
 * associated transclusion scope:
 *
 * ```js
 * transcludedContent.remove();
 * transclusionScope.$destroy();
 * ```
 *
 * <div class="alert alert-info">
 * **Best Practice**: if you intend to add and remove transcluded content manually in your directive
 * (by calling the transclude function to get the DOM and calling `element.remove()` to remove it),
 * then you are also responsible for calling `$destroy` on the transclusion scope.
 * </div>
 *
 * The built-in DOM manipulation directives, such as {@link ngIf}, {@link ngSwitch} and {@link ngRepeat}
 * automatically destroy their transluded clones as necessary so you do not need to worry about this if
 * you are simply using {@link ngTransclude} to inject the transclusion into your directive.
 *
 *
 * #### Transclusion Scopes
 *
 * When you call a transclude function it returns a DOM fragment that is pre-bound to a **transclusion
 * scope**. This scope is special, in that it is a child of the directive's scope (and so gets destroyed
 * when the directive's scope gets destroyed) but it inherits the properties of the scope from which it
 * was taken.
 *
 * For example consider a directive that uses transclusion and isolated scope. The DOM hierarchy might look
 * like this:
 *
 * ```html
 * <div ng-app>
 *   <div isolate>
 *     <div transclusion>
 *     </div>
 *   </div>
 * </div>
 * ```
 *
 * The `$parent` scope hierarchy will look like this:
 *
   ```
   - $rootScope
     - isolate
       - transclusion
   ```
 *
 * but the scopes will inherit prototypically from different scopes to their `$parent`.
 *
   ```
   - $rootScope
     - transclusion
   - isolate
   ```
 *
 *
 * ### Attributes
 *
 * The {@link ng.$compile.directive.Attributes Attributes} object - passed as a parameter in the
 * `link()` or `compile()` functions. It has a variety of uses.
 *
 * * *Accessing normalized attribute names:* Directives like 'ngBind' can be expressed in many ways:
 *   'ng:bind', `data-ng-bind`, or 'x-ng-bind'. The attributes object allows for normalized access
 *   to the attributes.
 *
 * * *Directive inter-communication:* All directives share the same instance of the attributes
 *   object which allows the directives to use the attributes object as inter directive
 *   communication.
 *
 * * *Supports interpolation:* Interpolation attributes are assigned to the attribute object
 *   allowing other directives to read the interpolated value.
 *
 * * *Observing interpolated attributes:* Use `$observe` to observe the value changes of attributes
 *   that contain interpolation (e.g. `src="{{bar}}"`). Not only is this very efficient but it's also
 *   the only way to easily get the actual value because during the linking phase the interpolation
 *   hasn't been evaluated yet and so the value is at this time set to `undefined`.
 *
 * ```js
 * function linkingFn(scope, elm, attrs, ctrl) {
 *   // get the attribute value
 *   console.log(attrs.ngModel);
 *
 *   // change the attribute
 *   attrs.$set('ngModel', 'new value');
 *
 *   // observe changes to interpolated attribute
 *   attrs.$observe('ngModel', function(value) {
 *     console.log('ngModel has changed value to ' + value);
 *   });
 * }
 * ```
 *
 * ## Example
 *
 * <div class="alert alert-warning">
 * **Note**: Typically directives are registered with `module.directive`. The example below is
 * to illustrate how `$compile` works.
 * </div>
 *
 <example module="compileExample">
   <file name="index.html">
    <script>
      angular.module('compileExample', [], function($compileProvider) {
        // configure new 'compile' directive by passing a directive
        // factory function. The factory function injects the '$compile'
        $compileProvider.directive('compile', function($compile) {
          // directive factory creates a link function
          return function(scope, element, attrs) {
            scope.$watch(
              function(scope) {
                 // watch the 'compile' expression for changes
                return scope.$eval(attrs.compile);
              },
              function(value) {
                // when the 'compile' expression changes
                // assign it into the current DOM
                element.html(value);

                // compile the new DOM and link it to the current
                // scope.
                // NOTE: we only compile .childNodes so that
                // we don't get into infinite loop compiling ourselves
                $compile(element.contents())(scope);
              }
            );
          };
        });
      })
      .controller('GreeterController', ['$scope', function($scope) {
        $scope.name = 'Angular';
        $scope.html = 'Hello {{name}}';
      }]);
    </script>
    <div ng-controller="GreeterController">
      <input ng-model="name"> <br/>
      <textarea ng-model="html"></textarea> <br/>
      <div compile="html"></div>
    </div>
   </file>
   <file name="protractor.js" type="protractor">
     it('should auto compile', function() {
       var textarea = $('textarea');
       var output = $('div[compile]');
       // The initial state reads 'Hello Angular'.
       expect(output.getText()).toBe('Hello Angular');
       textarea.clear();
       textarea.sendKeys('{{name}}!');
       expect(output.getText()).toBe('Angular!');
     });
   </file>
 </example>

 *
 *
 * @param {string|DOMElement} element Element or HTML string to compile into a template function.
 * @param {function(angular.Scope, cloneAttachFn=)} transclude function available to directives - DEPRECATED.
 *
 * <div class="alert alert-danger">
 * **Note:** Passing a `transclude` function to the $compile function is deprecated, as it
 *   e.g. will not use the right outer scope. Please pass the transclude function as a
 *   `parentBoundTranscludeFn` to the link function instead.
 * </div>
 *
 * @param {number} maxPriority only apply directives lower than given priority (Only effects the
 *                 root element(s), not their children)
 * @returns {function(scope, cloneAttachFn=, options=)} a link function which is used to bind template
 * (a DOM element/tree) to a scope. Where:
 *
 *  * `scope` - A {@link ng.$rootScope.Scope Scope} to bind to.
 *  * `cloneAttachFn` - If `cloneAttachFn` is provided, then the link function will clone the
 *  `template` and call the `cloneAttachFn` function allowing the caller to attach the
 *  cloned elements to the DOM document at the appropriate place. The `cloneAttachFn` is
 *  called as: <br/> `cloneAttachFn(clonedElement, scope)` where:
 *
 *      * `clonedElement` - is a clone of the original `element` passed into the compiler.
 *      * `scope` - is the current scope with which the linking function is working with.
 *
 *  * `options` - An optional object hash with linking options. If `options` is provided, then the following
 *  keys may be used to control linking behavior:
 *
 *      * `parentBoundTranscludeFn` - the transclude function made available to
 *        directives; if given, it will be passed through to the link functions of
 *        directives found in `element` during compilation.
 *      * `transcludeControllers` - an object hash with keys that map controller names
 *        to a hash with the key `instance`, which maps to the controller instance;
 *        if given, it will make the controllers available to directives on the compileNode:
 *        ```
 *        {
 *          parent: {
 *            instance: parentControllerInstance
 *          }
 *        }
 *        ```
 *      * `futureParentElement` - defines the parent to which the `cloneAttachFn` will add
 *        the cloned elements; only needed for transcludes that are allowed to contain non html
 *        elements (e.g. SVG elements). See also the directive.controller property.
 *
 * Calling the linking function returns the element of the template. It is either the original
 * element passed in, or the clone of the element if the `cloneAttachFn` is provided.
 *
 * After linking the view is not updated until after a call to $digest which typically is done by
 * Angular automatically.
 *
 * If you need access to the bound view, there are two ways to do it:
 *
 * - If you are not asking the linking function to clone the template, create the DOM element(s)
 *   before you send them to the compiler and keep this reference around.
 *   ```js
 *     var element = $compile('<p>{{total}}</p>')(scope);
 *   ```
 *
 * - if on the other hand, you need the element to be cloned, the view reference from the original
 *   example would not point to the clone, but rather to the original template that was cloned. In
 *   this case, you can access the clone via the cloneAttachFn:
 *   ```js
 *     var templateElement = angular.element('<p>{{total}}</p>'),
 *         scope = ....;
 *
 *     var clonedElement = $compile(templateElement)(scope, function(clonedElement, scope) {
 *       //attach the clone to DOM document at the right place
 *     });
 *
 *     //now we have reference to the cloned DOM via `clonedElement`
 *   ```
 *
 *
 * For information on how the compiler works, see the
 * {@link guide/compiler Angular HTML Compiler} section of the Developer Guide.
 */

var $compileMinErr = minErr('$compile');

/**
 * @ngdoc provider
 * @name $compileProvider
 *
 * @description
 */
$CompileProvider.$inject = ['$provide', '$$sanitizeUriProvider'];
function $CompileProvider($provide, $$sanitizeUriProvider) {
  var hasDirectives = {},
      Suffix = 'Directive',
      COMMENT_DIRECTIVE_REGEXP = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
      CLASS_DIRECTIVE_REGEXP = /(([\w\-]+)(?:\:([^;]+))?;?)/,
      ALL_OR_NOTHING_ATTRS = makeMap('ngSrc,ngSrcset,src,srcset'),
      REQUIRE_PREFIX_REGEXP = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/;

  // Ref: http://developers.whatwg.org/webappapis.html#event-handler-idl-attributes
  // The assumption is that future DOM event attribute names will begin with
  // 'on' and be composed of only English letters.
  var EVENT_HANDLER_ATTR_REGEXP = /^(on[a-z]+|formaction)$/;
  var bindingCache = createMap();

  function parseIsolateBindings(scope, directiveName, isController) {
    var LOCAL_REGEXP = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/;

    var bindings = createMap();

    forEach(scope, function(definition, scopeName) {
      if (definition in bindingCache) {
        bindings[scopeName] = bindingCache[definition];
        return;
      }
      var match = definition.match(LOCAL_REGEXP);

      if (!match) {
        throw $compileMinErr('iscp',
            "Invalid {3} for directive '{0}'." +
            " Definition: {... {1}: '{2}' ...}",
            directiveName, scopeName, definition,
            (isController ? "controller bindings definition" :
            "isolate scope definition"));
      }

      bindings[scopeName] = {
        mode: match[1][0],
        collection: match[2] === '*',
        optional: match[3] === '?',
        attrName: match[4] || scopeName
      };
      if (match[4]) {
        bindingCache[definition] = bindings[scopeName];
      }
    });

    return bindings;
  }

  function parseDirectiveBindings(directive, directiveName) {
    var bindings = {
      isolateScope: null,
      bindToController: null
    };
    if (isObject(directive.scope)) {
      if (directive.bindToController === true) {
        bindings.bindToController = parseIsolateBindings(directive.scope,
                                                         directiveName, true);
        bindings.isolateScope = {};
      } else {
        bindings.isolateScope = parseIsolateBindings(directive.scope,
                                                     directiveName, false);
      }
    }
    if (isObject(directive.bindToController)) {
      bindings.bindToController =
          parseIsolateBindings(directive.bindToController, directiveName, true);
    }
    if (isObject(bindings.bindToController)) {
      var controller = directive.controller;
      var controllerAs = directive.controllerAs;
      if (!controller) {
        // There is no controller, there may or may not be a controllerAs property
        throw $compileMinErr('noctrl',
              "Cannot bind to controller without directive '{0}'s controller.",
              directiveName);
      } else if (!identifierForController(controller, controllerAs)) {
        // There is a controller, but no identifier or controllerAs property
        throw $compileMinErr('noident',
              "Cannot bind to controller without identifier for directive '{0}'.",
              directiveName);
      }
es",
            name);
    }
  }

  /**
   * @ngdoc method
   * @name $compileProvider#directive
   * @kind function
   *
   * @description
   * Register a new directive with the compiler.
   *
   * @param {string|Object} name Name of the directive in camel-case (i.e. <code>ngBind</code> which
   *    will match as <code>ng-bind</code>), or an object map of directives where the keys are the
   *    names and the values are the factories.
   * @param {Function|Array} directiveFactory An injectable directive factory function. See
   *    {@link guide/directive} for more info.
   * @returns {ng.$compileProvider} Self for chaining.
   */
   this.directive = function registerDirective(name, directiveFactory) {
    assertNotHasOwnProperty(name, 'directive');
    if (isString(name)) {
      assertValidDirectiveName(name);
      assertArg(directiveFactory, 'directiveFactory');
      if (!hasDirectives.hasOwnProperty(name)) {
        hasDirectives[name] = [];
        $provide.factory(name + Suffix, ['$injector', '$exceptionHandler',
          function($injector, $exceptionHandler) {
            var directives = [];
            forEach(hasDirectives[name], function(directiveFactory, index) {
              try {
                var directive = $injector.invoke(directiveFactory);
                if (isFunction(directive)) {
                  directive = { compile: valueFn(directive) };
                } else if (!directive.compile && directive.link) {
                  directive.compile = valueFn(directive.link);
                }
                directive.priority = directive.priority || 0;
                directive.index = index;
                directive.name = directive.name || name;
                directive.require = directive.require || (directive.controller && directive.name);
                directive.restrict = directive.restrict || 'EA';
                directive.$$moduleName = directiveFactory.$$moduleName;
                directives.push(directive);
              } catch (e) {
                $exceptionHandler(e);
              }
            });
            return directives;
          }]);
      }
      hasDirectives[name].push(directiveFactory);
    } else {
      forEach(name, reverseParams(registerDirective));
    }
    return this;
  };


  /**
   * @ngdoc method
   * @name $compileProvider#aHrefSanitizationWhitelist
   * @kind function
   *
   * @description
   * Retrieves or overrides the default regular expression that is used for whitelisting of safe
   * urls during a[href] sanitization.
   *
   * The sanitization is a security measure aimed at preventing XSS attacks via html links.
   *
   * Any url about to be assigned to a[href] via data-binding is first normalized and turned into
   * an absolute url. Afterwards, the url is matched against the `aHrefSanitizationWhitelist`
   * regular expression. If a match is found, the original url is written into the dom. Otherwise,
   * the absolute url is prefixed with `'unsafe:'` string and only then is it written into the DOM.
   *
   * @param {RegExp=} regexp New regexp to whitelist urls with.
   * @returns {RegExp|ng.$compileProvider} Current RegExp if called without value or self for
   *    chaining otherwise.
   */
  this.aHrefSanitizationWhitelist = function(regexp) {
    if (isDefined(regexp)) {
      $$sanitizeUriProvider.aHrefSanitizationWhitelist(regexp);
      return this;
    } else {
      return $$sanitizeUriProvider.aHrefSanitizationWhitelist();
    }
  };


  /**
   * @ngdoc method
   * @name $compileProvider#imgSrcSanitizationWhitelist
   * @kind function
   *
   * @description
   * Retrieves or overrides the default regular expression that is used for whitelisting of safe
   * urls during img[src] sanitization.
   *
   * The sanitization is a security measure aimed at prevent XSS attacks via html links.
   *
   * Any url about to be assigned to img[src] via data-binding is first normalized and turned into
   * an absolute url. Afterwards, the url is matched against the `imgSrcSanitizationWhitelist`
   * regular expression. If a match is found, the original url is written into the dom. Otherwise,
   * the absolute url is prefixed with `'unsafe:'` string and only then is it written into the DOM.
   *
   * @param {RegExp=} regexp New regexp to whitelist urls with.
   * @returns {RegExp|ng.$compileProvider} Current RegExp if called without value or self for
   *    chaining otherwise.
   */
  tanitizationWhitelist();
    }
  };

  /**
   * @ngdoc method
   * @name  $compileProvider#debugInfoEnabled
   *
   * @param {boolean=} enabled update the debugInfoEnabled state if provided, otherwise just return the
   * current debugInfoEnabled state
   * @returns {*} current value if used as getter or itself (chaining) if used as setter
   *
   * @kind function
   *
   * @description
   * Call this method to enable/disable various debug runtime information in the compiler such as adding
   * binding information and a reference to the current scope on to DOM elements.
   * If enabled, the compiler will add the following to DOM elements that have been bound to the scope
   * * `ng-binding` CSS class
   * * `$binding` data property containing an array of the binding expressions
   *
   * You may want to disable this in production for a significant performance boost. See
   * {@link guide/production#disabling-debug-data Disabling Debug Data} for more.
   *
   * The default value is true.
   */
  var debugInfoEnabled 
    return debugInfoEnabled;
  };

  this.$get = [
            '$injector', '$interpolate', '$exceptionHandler', '$templateRequest', '$parse',
            '$controller', '$rootScope', '$sce', '$animate', '$$sanitizeUri',
    function($injector,   $interpolate,   $exceptionHandler,   $templateRequest,   $parse,
             $controller,   $rootScope,   $sce,   $animate,   $$sanitizeUri) {

    var Attributes = function(element, attributesToCopy) {
      if (attributesToCopy) {
        var keys = Object.keys(attributesToCopy);
        var i, l, key;

        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          this[key] = attributesToCopy[key];
        }
      } else {
        this.$attr = {};
      }

      this.$$element = element;
    };

    Attributes.prototype = {
      /**
       * @ngdoc method
       * @name $compile.directive.Attributes#$normalize
       * @kind function
       *
       * @description
       * Converts an attribute name (e.g. dash/colon/underscore-delimited string, optionally prefixed with `x-` or
       * `data-`) to its normalized, camelCase form.
       *
       * Also there is special case for Moz prefix starting with upper case letter.
       *
       * For further information check out the guide on {@link guide/directive#matching-directives Matching Directives}
       *
       * @param {string} name Name to normalize
       */
      $normalize: directiveNormalize,


      /**
       * @ngdoc method
       * @name $compile.directive.Attributes#$addClass
       * @kind function
       *
       * @description
       * Adds the CSS class value specified by the classVal parameter to the element. If animations
       * are enabled then an animation will be triggered for the class addition.
       *
       * @param {string} classVal The className value that will be added to the element
       */
      $addClass: function(classVal) {
        if (classVal && classVal.length > 0) {
          $animate.addClass(this.$$element, classVal);
        }
      },

      /**
       * @ngdoc method
       * @name $compile.directive.Attributes#$removeClass
       * @kind function
       *
       * @description
       * Removes the CSS class value specified by the classVal parameter from the element. If
       * animations are enabled then an animation will be triggered for the class removal.
       *
       * @param {string} classVal The className value that will be removed from the element, classVal);
        }
      },

      /**
       * @ngdoc method
       * @name $compile.directive.Attributes#$updateClass
       * @kind function
       *
       * @description
       * Adds and removes the appropriate CSS class values to the element based on the difference
       * between the new and old CSS class values (specified as newClasses and oldClasses).
       *
       * @param {string} newClasses The current CSS className value
       * @param {string} oldClasses The former CSS className vaent, toRemove);
        }
      },

      /**
       * Set a normalized attribute on the element in a way such that all directives
       * can share the attribute. This function properly handles boolean attributes.
       * @param {string} key Normalized key. (ie ngAttribute)
       * @param {string|boolean} value The value to set. If `null` attribute will be deleted.
       * @param {boolean=} writeAttr If false, does not write the value to DOM element attribute.
       *     Defaults to true.
       * @param {string=} attrName Optional none normalized name. Defaults to key.
       */
      $set: function(key, value, writeAttr, attrName) {
        // TODO: decide whether or not to throw an error if "class"
        //is set through this function since it may cause $updateClass to
        //become unstable.

        var node = this.$$element[0],
            booleanKey = getBooleanAttrName(node, key),
            aliasedKey = getAliasedAttrName(key),
            observer = key,
            nodeName;

        if (booleanKey) {
          this.$$element.prop(key, value);
          attrName = booleanKey;
        } else if (aliasedKey) {
          this[aliasedKey] = value;
          observer = aliasedKey;
        }

        this[key] = value;

        // translate normalized key to actual key
        if (attrName) {
          this.$attr[key] = attrName;
        } else {
          attrName = this.$attr[key];
          if (!attrName) {
            this.$attr[key] = attrName = snake_case(key, '-');
          }
        }

        nodeName = nodeName_(this.$$element);

        if ((nodeName === 'a' && key === 'href') ||
            (nodeName === 'img' && key === 'src')) {
          // sanitize a[href] and img[src] values
          this[key] = value = $$sanitizeUri(value, key === 'src');
        } else if (nodeName === 'img' && key === 'srcset' && isDefined(value)) {
          // sanitize img[srcset] values
          var result = "";

          // first check if there are spaces because it's not the same pattern
          var trimmedSrcset = trim(value);
          //                (   999x   ,|   999w   ,|   ,|,   )
          var srcPattern = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/;
          var pattern = /\s/.test(trimmedSrcset) ? srcPattern : /(,)/;

          // split srcset into tuple of uri and descriptor except for the last item
          var rawUris = trimmedSrcset.split(pattern);

          // for each tuples
          var nbrUrisWith2parts = Math.floor(rawUris.length / 2);
          for (var i = 0; i < nbrUrisWith2parts; i++) {
            var innerIdx = i * 2;
            // sanitize the uri
            result += $$sanitizeUri(trim(rawUris[innerIdx]), true);
            // add the descriptor
            result += (" " + trim(rawUris[innerIdx + 1]));
          }

          // split the last item into uri and descriptor
          var lastTuple = trim(rawUris[i * 2]).split(/\s/);

          // sanitize the last uri
          result += $$sanitizeUri(trim(lastTuple[0]), true);

          // and add the last descriptor if any
          if (lastTuple.length === 2) {
            result += (" " + trim(lastTuple[1]));
          }
          this[key] = value = result;
        }

        if (writeAttr !== false) {
          if (value === null || isUndefined(value)) {
            this.$$element.removeAttr(attrName);
          } else {
            this.$$element.attr(attrName, value);
          }
        }

        // fire observers
        var $$observers = this.$$observers;
        $$observers Handler(e);
          }
        });
      },


      /**
       * @ngdoc method
       * @name $compile.directive.Attributes#$observe
       * @kind function
       *
       * @description
       * Observes an interpolated attribute.
       *
       * The observer function will be invoked once during the next `$digest` following
       * compilation. The observer is then invoked whenever the interpolated value
       * changes.
       *
       * @param {string} key Normalized key. (ie ngAttribute) .
       * @param {function(interpolatedValue)} fn Function that will be called whenever
                the interpolated value of the attribute changes.
       *        See the {@link guide/interpolation#how-text-and-attribute-bindings-work Interpolation
       *        guide} for more info.
       * @returns {function()} Returns a deregistration function for this obisteners, fn) name is read-only.
      }
    }


    var startSymbol = $interpolate.startSymbol(),
        endSymbol = $interpolate.endSymbol(),
        denormalizeTemplate = (startSymbol == '{{' && endSymbol  == '}}')
   lace(/}}/g, endSymbol);
        },
        NG_ATTR_BINDING = /^ngAttr[A-Z]/;
    var MULTI_ELEMENT_DIR_RE = /^(.+)Start$/;

    compile.$$addata('$binding', bindings);
    } : noop;

    compile.$$addss($element, 'ng-binding');
    } : noop;

    compile.$$ment.data(dataName, scope);
    } : noop;

    compile.$$aolate-scope' : 'ng-scope');
    } : noop;

    return compile;

    //================================

    function compile($compileNodes, transcludeFn, maxPriority, ignoreDirective,
                        previousCompileContext) {
      if (!($compileNodes instanceof jqLite)) {
        // jquery always rewraps, whereas we need to preserve the original selector so that we can
        // modify it.
        $compileNodes = jqLite($compileNodes);
      }

      var NOT_EMPTY = /\S+/;

      // We can not compile top level text elements since text nodes can be merged and we will
      // not be able to attach scope data to them, so we will wrap them in <span>
      for (var i = 0, len = $compileNodes.length; i < len; i++) {
        var domNode = $compileNodes[i];

        if (domNode.nodeType === NODE_TYPE_TEXT && domNode.nodeValue.match(NOT_EMPTY) /* non-empty */) {
          jqLiteWrapNode(domNode, $compileNodes[i] = document.createElement('span'));
        }
      }

      var compositeLinkFn =
              compileNodes($compileNodes, transcludeFn, $compileNodes,
                           maxPriority, ignoreDirective, previousCompileContext);
      compile.$$addScopeClass($compileNodes);
      var namespace = null;
      return function publicLinkFn(scope, cloneConnectFn, options) {
        assertArg(scope, 'scope');

        if (previousCompileContext && previousCompileContext.needsNewScope) {
          // A parent directive did a replace and a directive on this element asked
          // for transclusion, which caused us to lose a layer of element on which
          // we could hold the new transclusion scope, so we will create it manually
          // here.
          scope = scope.$parent.$new();
        }

        options = options || {};
        var parentBoundTranscludeFn = options.parentBoundTranscludeFn,
          transcludeControllers = options.transcludeControllers,
          futureParentElement = options.futureParentElement;

        // When `parentBoundTranscludeFn` is passed, it is a
        // `controllersBoundTransclude` function (it was previously passed
        // as `transclude` to directive.link) so we must unwrap it to get
        // its `boundTranscludeFn`
        if (parentBoundTranscludeFn && parentBoundTranscludeFn.$$boundTransclude) {
          parentBoundTranscludeFn = parentBoundTranscludeFn.$$boundTransclude;
        }

        if (!namespace) {
          namespace = detectNamespaceForChildElements(futureParentElement);
        }
        var $linkNode;
        if (namespace !== 'html') {
          // When using a directive with replace:true and templateUrl the $compileNodes
          // (or a child element inside of them)
          // might change, so we need to recreate the namespace adapted compileNodes
          // for call to the link function.
          // Note: This will already clone the nodes...
          $linkNode = jqLite(
            wrapTemplate(namespace, jqLite('<div>').append($compileNodes).html())
          );
        } else if (cloneConnectFn) {
          // important!!: we must call our jqLite.clone() since the jQuery one is trying to be smart
          // and sometimes changes the structure of the DOM.
          $linkNode = JQLitePrototype.clone.call($compileNodes);
        } else {
          $linkNode = $compileNodes;
        }

        if (transcludeControllers) {
          for (var controllerName in transcludeControllers) {
            $linkNode.data('$' + controllerName + 'Controller', transcludeControllers[controllerName].instance);
          }
        }

        compile.$$addScopeInfo($linkNode, scope);

        if (cloneConnectFn) cloneConnectFn($linkNode, scope);
        if (compositeLinkFn) compositeLinkFn(scope, $linkNode, $linkNode, parentBoundTranscludeFn);
        return $linkNode;
      };
    }

    function detectNamespaceForChildElements(parentElement) {
      // TODO: Make this detect MathML as well...
      var node = parentElement && parentElement[0];
      if (!node) {
        return 'html';
      } else {
        return nodeName_(node) !== 'foreignobject' && node.toString().match(/SVG/) ? 'svg' : 'html';
      }
    }

    /**
     * Compile function matches each node in nodeList against the directives. Once all directives
     * for a particular node are collected their compile functions are executed. The compile
     * functions return values - the linking functions - are combined into a composite linking
     * function, which is the a linking function for the node.
     *
     * @param {NodeList} nodeList an array of nodes or NodeList to compile
     * @param {function(angular.Scope, cloneAttachFn=)} transcludeFn A linking function, where the
     *        scope argument is auto-generated to the new child of the transcluded parent scope.
     * @param {DOMElement=} $rootElement If the nodeList is the root of the compilation tree then
     *        the rootElement must be set the jqLite collection of the compile root. This is
     *        needed so that the jqLite collection items can be replaced with widgets.
     * @param {number=} maxPriority Max directive priority.
     * @returns {Function} A composite linking function of all of the matched directives or null.
     */
    function compileNodes(nodeList, transcludeFn, $rootElement, maxPriority, ignoreDirective,
                            previousCompileContext) {
      var linkFns = [],
          attrs, directives, nodeLinkFn, childNodes, childLinkFn, linkFnFound, nodeLinkFnFound;

      for (var i = 0; i < nodeList.length; i++) {
        attrs = new Attributes();

        // we must always refer to nodeList[i] since the nodes can be replaced underneath us.
        directives = collectDirectives(nodeList[i], [], attrs, i === 0 ? maxPriority : undefined,
                                        ignoreDirective);

        nodeLinkFn = (directives.length)
            ? applyDirectivesToNode(directives, nodeList[i], attrs, transcludeFn, $rootElement,
                                      null, [], [], previousCompileContext)
            : null;

        if (nodeLinkFn && nodeLinkFn.scope) {
          compile.$$addScopeClass(attrs.$$element);
        }

        childLinkFn = (nodeLinkFn && nodeLinkFn.terminal ||
                      !(childNodes = nodeList[i].childNodes) ||
                      !childNodes.length)
            ? null
            : compileNodes(childNodes,
                 nodeLinkFn ? (
                  (nodeLinkFn.transcludeOnThisElement || !nodeLinkFn.templateOnThisElement)
                     && nodeLinkFn.transclude) : transcludeFn);

        if (nodeLinkFn || childLinkFn) {
          linkFns.push(i, nodeLinkFn, childLinkFn);
          linkFnFound = true;
          nodeLinkFnFound = nodeLinkFnFound || nodeLinkFn;
        }

        //use the previous context only for the first element in the virtual group
        previousCompileContext = null;
      }

      // return a linking function if we have found anything, null otherwise
      return linkFnFoundn);
          }
        }
      }
    }

    function createBoundTranscludeFn(scope, transcludeFn, previousBoundTranscludeFn) {

      var boundTranscludeFn = function(transcludedScope, cloneFn, controllers, futureParentElement, containingScope) {

        if (!transcludedScope) {
          transcludedScope = scope.$new(false, containingScope);
          transcludedScope.$$transcluded = true;
        }

        return transcludeFn(transcludedScope, cloneFn, {
          parentBoundTranscludeFn: previousBoundTranscludeFn,
          transcludeControllers: controllers,
          futureParentElement: futureParentElement
        });
      };

      return boundTranscludeFn;
    }

    /**
     * Looks for directives on the given node and adds them to the directive collection which is
     * sorted.
     *
     * @param node Node to search.
     * @param directives An array to which the directives are added to. This array is sorted before
     *        the function returns.
     * @param attrs The shared attrs object which is used to populate the normalized attributes.
     * @param {number=} maxPriority Max directive priority.
     */
    function collectDirectives(node, directives, attrs, maxPriority, ignoreDirective) {
      var nodeType = node.nodeType,
          attrsMap = attrs.$attr,
          match,
          nodeName,
          className;

      switch (nodeType) {
        case NODE_TYPE_ELEMENT: /* Element */

          nodeName = nodeName_(node);

          // use the node name: <directive>
          addDirective(directives,
              directiveNormalize(nodeName), 'E', maxPriority, ignoreDirective);

          // iterate over the attributes
          for (var attr, name, nName, ngAttrName, value, isNgAttr, nAttrs = node.attributes,
                   j = 0, jj = nAttrs && nAttrs.length; j < jj; j++) {
            var attrStartName = false;
            var attrEndName = false;

            attr = nAttrs[j];
            name = attr.name;
            value = trim(attr.value);

            // support ngAttr attribute binding
            ngAttrName = directiveNormalize(name);
            if (isNgAttr = NG_ATTR_BINDING.test(ngAttrName)) {
              name = name.replace(PREFIX_REGEXP, '')
          .toUpperCase();
                });
            }

            var multiElementMatch = ngAttrName.match(MULTI_ELEMENT_DIR_RE);
            if (multiElementMatch && directiveIsMultiElement(multiElementMatch[1])) {
              attrStartName = name;
              attrEndName = name.substr(0, name.length - 5) + 'end';
              name = name.substr(0, name.length - 6);
            }

            nName = directiveNormalize(name.toLowerCase());
            attrsMap[nName] = name;
            if (isNgAttr || !attrs.hasOwnProperty(nName)) {
                attrs[nName] = value;
                if (getBooleanAttrName(node, nName)) {
                  attrs[nName] = true; // presence means true
                }
            }
            addAttrInterpolateDirective(node, directives, value, nName, isNgAttr);
            addDirective(directives, nName, 'A', maxPriority, ignoreDirective, attrStartName,
                          attrEndName);
          }

          if (nodeName === 'input' && node.getAttribute('type') === 'hidden') {
            // Hidden input elements can have strange behaviour when navigating back to the page
            // This tells the browser not to try to cache and reinstate previous values
            node.setAttribute('autocomplete', 'off');
          }

          // use class as directive
          className = node.className;
          if (isObject(className)) {
              // Maybe SVGAnimatedString
              className = className.animVal;
          }
          if (isString(className) && className !== '') {
            while (match = CLASS_DIRECTIVE_REGEXP.exec(className)) {
              nName = directiveNormalize(match[2]);
              if (addDirective(directives, nName, 'C', maxPriority, ignoreDirective)) {
                attrs[nName] = trim(match[3]);
              }
              className = className.substr(match.index + match[0].length);
            }
          }
          break;
        case NODE_TYPE_TEXT: /* Text Node */
          if (msie === 11) {
            // Workaround for #11781
            while (node.parentNode && node.nextSibling && node.nextSibling.nodeType === NODE_TYPE_TEXT) {
              node.nodeValue = node.nodeValue + node.nextSibling.nodeValue;
              node.parentNode.removeChild(node.nextSibling);
            }
          }
          addTextInterpolateDirective(directives, node.nodeValue);
          break;
        case NODE_TYPE_COMMENT: /* Comment */
          try {
            match = COMMENT_DIRECTIVE_REGEXP.exec(node.nodeValue);
            if (match) {
              nName = directiveNormalize(match[1]);
              if (addDirective(directives, nName, 'M', maxPriority, ignoreDirective)) {
                attrs[nName] = trim(match[2]);
              }
            }
          } catch (e) {
            // turns out that under some circumstances IE9 throws errors when one attempts to read
            // comment's node value.
            // Just ignore it and continue. (Can't seem to reproduce in test case.)
          }
          break;
      }

      directives.sort(byPriority);
      return directives;
    }

    /**
     * Given a node with an directive-start it collects all of the siblings until it finds
     * directive-end.
     * @param node
     * @param attrStart
     * @param attrEn      return jqLite(nodes);
    }

    /**
     * Wrapper for linking function which converts normal linking function into a grouped
     * linking function.
     * @param linkFn
     * @param attrStart
     * @param attrEnd
     rs, transcludeFn);
      };
    }

    /**
     * Once the directives have been collected, their compile functions are executed. This method
     * is responsible for inlining directive templates as well as terminating the application
     * of the directives if the terminal directive has been reached.
     *
     * @param {Array} directives Array of collected directives to execute their compile function.
     *        this needs to be pre-sorted by priority order.
     * @param {Node} compileNode The raw DOM node to apply the compile functions to
     * @param {Object} templateAttrs The shared attribute function
     * @param {function(angular.Scope, cloneAttachFn=)} transcludeFn A linking function, where the
     *                                                  scope argument is auto-generated to the new
     *                                                  child of the transcluded parent scope.
     * @param {JQLite} jqCollection If we are working on the root of the compile tree then this
     *                              argument has the root jqLite array so that we can replace nodes
     *                              on it.
     * @param {Object=} originalReplaceDirective An optional directive that will be ignored when
     *                                           compiling the transclusion.
     * @param {Array.<Function>} preLinkFns
     * @param {Array.<Function>} postLinkFns
     * @param {Object} previousCompileContext Context used for previous compilation of the current
     *                                        node
     * @returns {Function} linkFn
     */
    function applyDirectivesToNode(directives, compileNode, templateAttrs, transcludeFn,
                                   jqCollection, originalReplaceDirective, preLinkFns, postLinkFns,
                                   previousCompileContext) {
      previousCompileContext = previousCompileContext || {};

      var terminalPriority = -Number.MAX_VALUE,
          newScopeDirective = previousCompileContext.newScopeDirective,
          controllerDirectives = previousCompileContext.controllerDirectives,
          newIsolateScopeDirective = previousCompileContext.newIsolateScopeDirective,
          templateDirective = previousCompileContext.templateDirective,
          nonTlbTranscludeDirective = previousCompileContext.nonTlbTranscludeDirective,
          hasTranscludeDirective = false,
          hasTemplate = false,
          hasElementTranscludeDirective = previousCompileContext.hasElementTranscludeDirective,
          $compileNode = templateAttrs.$$element = jqLite(compileNode),
          directive,
          directiveName,
          $template,
          replaceDirective = originalReplaceDirective,
          childTranscludeFn = transcludeFn,
          linkFn,
          directiveValue;

      // executes all directives on the current element
      for (var i = 0, ii = directives.length; i < ii; i++) {
        directive = directives[i];
        var attrStart = directive.$$start;
        var attrEnd = directive.$$end;

        // collect multiblock sections
        if (attrStart) {
          $compileNode = groupScan(compileNode, attrStart, attrEnd);
        }
        $template = undefined;

        if (terminalPriority > directive.priority) {
          break; // prevent further processing of directives
        }

        if (directiveValue = directive.scope) {

          // skip the check for directives with async templates, we'll check the derived sync
          // directive when the template arrives
          if (!directive.templateUrl) {
            if (isObject(directiveValue)) {
              // This directive is trying to add an isolated scope.
              // Check that there is no scope of any kind already
              assertNoDuplicate('new/isolated scope', newIsolateScopeDirective || newScopeDirective,
                                directive, $compileNode);
              newIsolateScopeDirective = directive;
            } else {
              // This directive is trying to add a child scope.
              // Check that there is no isolated scope already
              assertNoDuplicate('new/isolated scope', newIsolateScopeDirective, directive,
                                $compileNode);
            }
          }

          newScopeDirective = newScopeDirective || directive;
        }

        directiveName = directive.name;

        if (!directive.templateUrl && directive.controller) {
          directiveValue = directive.controller;
          controllerDirectives = controllerDirectives || createMap();
          assertNoDuplicate("'" + directiveName + "' controller",
              controllerDirectives[directiveName], directive, $compileNode);
          controllerDirectives[directiveName] = directive;
        }

        if (directiveValue = directive.transclude) {
          hasTranscludeDirective = true;

          // Special case ngIf and ngRepeat so that we don't complain about duplicate transclusion.
          // This option should only be used by directives that know how to safely handle element transclusion,
          // where the transcluded nodes are added or replaced after linking.
          if (!directive.$$tlb) {
            assertNoDuplicate('transclusion', nonTlbTranscludeDirective, directive, $compileNode);
            nonTlbTranscludeDirective = directive;
          }

          if (directiveValue == 'element') {
            hasElementTranscludeDirective = true;
            terminalPriority = directive.priority;
            $template = $compileNode;
            $compileNode = templateAttrs.$$element =
                jqLite(document.createComment(' ' + directiveName + ': ' +
                                              templateAttrs[directiveName] + ' '));
            compileNode = $compileNode[0];
            replaceWith(jqCollection, sliceArgs($template), compileNode);

            childTranscludeFn = compile($template, transcludeFn, terminalPriority,
                                        replaceDirective && replaceDirective.name, {
                                          // Don't pass in:
                                          // - controllerDirectives - otherwise we'll create duplicates controllers
                                          // - newIsolateScopeDirective or templateDirective - combining templates with
                                          //   element transclusion doesn't make sense.
                                          //
                                          // We need only nonTlbTranscludeDirective so that we prevent putting transclusion
                                          // on the same element more than once.
                                          nonTlbTranscludeDirective: nonTlbTranscludeDirective
                                        });
          } else {
            $template = jqLite(jqLiteClone(compileNode)).contents();
            $compileNode.empty(); // clear contents
            childTranscludeFn = compile($template, transcludeFn, undefined,
                undefined, { needsNewScope: directive.$$isolateScope || directive.$$newScope});
          }
        }

        if (directive.template) {
          hasTemplate = true;
          assertNoDuplicate('template', templateDirective, directive, $compileNode);
          templateDirective = directive;

          directiveValue = (isFunction(directive.template))
              ? directive.template($compileNode, templateAttrs)
              : directive.template;

          directiveValue = denormalizeTemplate(directiveValue);

          if (directive.replace) {
            replaceDirective = directive;
            if (jqLiteIsTextNode(directiveValue)) {
              $template = [];
            } else {
              $template = removeComments(wrapTemplate(directive.templateNamespace, trim(directiveValue)));
            }
            compileNode = $template[0];

            if ($template.length != 1 || compileNode.nodeType !== NODE_TYPE_ELEMENT) {
              throw $compileMinErr('tplrt',
                  "Template for directive '{0}' must have exactly one root element. {1}",
                  directiveName, '');
            }

            replaceWith(jqCollection, $compileNode, compileNode);

            var newTemplateAttrs = {$attr: {}};

            // combine directives from the original node and from the template:
            // - take the array of directives for this element
            // - split it into two parts, those that already applied (processed) and those that weren't (unprocessed)
            // - collect directives from the template and sort them by priority
            // - combine directives as: processed + template + unprocessed
            var templateDirectives = collectDirectives(compileNode, [], newTemplateAttrs);
            var unprocessedDirectives = directives.splice(i + 1, directives.length - (i + 1));

            if (newIsolateScopeDirective || newScopeDirective) {
              // The original directive caused the current element to be replaced but this element
              // also needs to have a new scope, so we need to tell the template directives
              // that they would need to get their scope from further up, if they require transclusion
              markDirectiveScope(templateDirectives, newIsolateScopeDirective, newScopeDirective);
            }
            directives = directives.concat(templateDirectives).concat(unprocessedDirectives);
            mergeTemplateAttributes(templateAttrs, newTemplateAttrs);

            ii = directives.length;
          } else {
            $compileNode.html(directiveValue);
          }
        }

        if (directive.templateUrl) {
          hasTemplate = true;
          assertNoDuplicate('template', templateDirective, directive, $compileNode);
          templateDirective = directive;

          if (directive.replace) {
            replaceDirective = directive;
          }

          nodeLinkFn = compileTemplateUrl(directives.splice(i, directives.length - i), $compileNode,
              templateAttrs, jqCollection, hasTranscludeDirective && childTranscludeFn, preLinkFns, postLinkFns, {
                controllerDirectives: controllerDirectives,
                newScopeDirective: (newScopeDirective !== directive) && newScopeDirective,
                newIsolateScopeDirective: newIsolateScopeDirective,
                templateDirective: templateDirective,
                nonTlbTranscludeDirective: nonTlbTranscludeDirective
              });
          ii = directives.length;
        } else if (directive.compile) {
          try {
            linkFn = directive.compile($compileNode, templateAttrs, childTranscludeFn);
            if (isFunction(linkFn)) {
              addLinkFns(null, linkFn, attrStart, attrEnd);
            } else if (linkFn) {
              addLinkFns(linkFn.pre, linkFn.post, attrStart, attrEnd);
            }
          } catch (e) {
            $exceptionHandler(e, startingTag($compileNode));
          }
        }

        if (directive.terminal) {
          nodeLinkFn.terminal = true;
          terminalPriority = Math.max(terminalPriority, directive.priority);
        }

      }

      nodeLinkFn.scope = newScopeDirective && newScopeDirective.scope === true;
      nodeLinkFn.transcludeOnThisElement = hasTranscludeDirective;
      nodeLinkFn.templateOnThisElement = hasTemplate;
      nodeLinkFn.transclude = childTranscludeFn;

      previousCompileContext.hasElementTranscludeDirective = hasElementTranscludeDirective;

      // might be normal or delayed nodeLinkFn depending on if templateUrl is present
      return nodeLinkFn;

Fns.push(post);
        }
      }


      function getControllers(directiveName, require, $element, elementControllers) {
        var value;

        if (isString(require)) {
          var match = require.match(REQUIRE_PREFIX_REGEXP);
          var name = require.substring(match[0].length);
          var inheritType = match[1] || match[3];
          var optional = match[2] === '?';

          //If only parents then start at the parent element
          if (inheritType === '^^') {
            $element = $element.parent();
          //Otherwise attempt getting the controller from elementControllers in case
          //the element is transcluded (and has no data) and to avoid .data if possible
          } else {
            value = elementControllers && elementControllers[name];
            value = value && value.instance;
          }

          if (!value) {
            var dataName = '$' + name + 'Controller';
            value = inheritType ? $element.inheritedData(dataName) : $element.data(dataName);
          }

          if (!value && !optional) {
            throw $compileMinErr('ctreq',
                "Controller '{0}', required by directive '{1}', can't be found!",
                name, directiveName);
          }
        } else if (isArray(require)) {
          value = [];
          for (var i = 0, ii = require.length; i < ii; i++) {
            value[i] = getControllers(directiveName, require[i], $element, elementControllers);
          }
        }

        return value || null;
      }

      function setupControllers($element, attrs, transcludeFn, controllerDirectives, isolateScope, scope) {
        var elementControllers = createMap();
        for (var controllerKey in controllerDirectives) {
          var directive = controllerDirectives[controllerKey];
          var locals = {
            $scope: directive === newIsolateScopeDirective || directive.$$isolateScope ? isolateScope : scope,
            $element: $element,
            $attrs: attrs,
            $transclude: transcludeFn
          };

          var controller = directive.controller;
          if (controller == '@') {
            controller = attrs[directive.name];
          }

          var controllerInstance = $controller(controller, locals, true, directive.controllerAs);

          // For directives with element transclusion the element is a comment.
          // In this case .data will not attach any data.
          // Instead, we save the controllers for the element in a local hash and attach to .data
          // later, once we have the actual element.
          elementControllers[directive.name] = controllerInstance;
          $element.data('$' + directive.name + 'Controller', controllerInstance.instance);
        }
        return elementControllers;
      }

      function nodeLinkFn(childLinkFn, scope, linkNode, $rootElement, boundTranscludeFn) {
        var linkFn, isolateScope, controllerScope, elementControllers, transcludeFn, $element,
            attrs, removeScopeBindingWatches, removeControllerBindingWatches;

        if (compileNode === linkNode) {
          attrs = templateAttrs;
          $element = templateAttrs.$$element;
        } else {
          $element = jqLite(linkNode);
          attrs = new Attributes($element, templateAttrs);
        }

        controllerScope = scope;
        if (newIsolateScopeDirective) {
          isolateScope = scope.$new(true);
        } else if (newScopeDirective) {
          controllerScope = scope.$parent;
        }

        if (boundTranscludeFn) {
          // track `boundTranscludeFn` so it can be unwrapped if `transcludeFn`
          // is later passed as `parentBoundTranscludeFn` to `publicLinkFn`
          transcludeFn = controllersBoundTransclude;
          transcludeFn.$$boundTransclude = boundTranscludeFn;
        }

        if (controllerDirectives) {
          elementControllers = setupControllers($element, attrs, transcludeFn, controllerDirectives, isolateScope, scope);
        }

        if (newIsolateScopeDirective) {
          // Initialize isolate scope bindings for new isolate scope directive.
          compile.$$addScopeInfo($element, isolateScope, true, !(templateDirective && (templateDirective === newIsolateScopeDirective ||
              templateDirective === newIsolateScopeDirective.$$originalDirective)));
          compile.$$addScopeClass($element, true);
          isolateScope.$$isolateBindings =
              newIsolateScopeDirective.$$isolateBindings;
          removeScopeBindingWatches = initializeDirectiveBindings(scope, attrs, isolateScope,
                                        isolateScope.$$isolateBindings,
                                        newIsolateScopeDirective);
          if (removeScopeBindingWatches) {
            isolateScope.$on('$destroy', removeScopeBindingWatches);
          }
        }

        // Initialize bindToController bindings
        for (var name in elementControllers) {
          var controllerDirective = controllerDirectives[name];
          var controller = elementControllers[name];
          var bindings = controllerDirective.$$bindings.bindToController;

          if (controller.identifier && bindings) {
            removeControllerBindingWatches =
              initializeDirectiveBindings(controllerScope, attrs, controller.instance, bindings, controllerDirective);
          }

          var controllerResult = controller();
          if (controllerResult !== controller.instance) {
            // If the controller constructor has a return value, overwrite the instance
            // from setupControllers
            controller.instance = controllerResult;
            $element.data('$' + controllerDirective.name + 'Controller', controllerResult);
            removeControllerBindingWatches && removeControllerBindingWatches();
            removeControllerBindingWatches =
              initializeDirectiveBindings(controllerScope, attrs, controller.instance, bindings, controllerDirective);
          }
        }

        // PRELINKING
        for (i = 0, ii = preLinkFns.length; i < ii; i++) {
          linkFn = preLinkFns[i];
          invokeLinkFn(linkFn,
              linkFn.isolateScope ? isolateScope : scope,
              $element,
              attrs,
              linkFn.require && getControllers(linkFn.directiveName, linkFn.require, $element, elementControllers),
              transcludeFn
          );
        }

        // RECURSION
        // We only pass the isolate scope, if the isolate directive has a template,
        // otherwise the child elements do not belong to the isolate directive.
        var scopeToChild = scope;
        if (newIsolateScopeDirective && (newIsolateScopeDirective.template || newIsolateScopeDirective.templateUrl === null)) {
          scopeToChild = isolateScope;
        }
        childLinkFn && childLinkFn(scopeToChild, linkNode.childNodes, undefined, boundTranscludeFn);

        // POSTLINKING
        for (i = postLinkFns.length - 1; i >= 0; i--) {
          linkFn = postLinkFns[i];
          invokeLinkFn(linkFn,
              linkFn.isolateScope ? isolateScope : scope,
              $element,
              attrs,
              linkFn.require && getControllers(linkFn.directiveName, linkFn.require, $element, elementControllers),
              transcludeFn
          );
        }

        // This is the function that is injected as `$transclude`.
        // Note: all arguments are optional!
        function controllersBoundTransclude(scope, cloneAttachFn, futureParentElement) {
          var transcludeControllers;

          // No scope passed in:
          if (!isScope(scope)) {
            futureParentElement = cloneAttachFn;
            cloneAttachFn = scope;
            scope = undefined;
          }

          if (hasElementTranscludeDirective) {
            transcludeControllers = elementControllers;
          }
          if (!futureParentElement) {
            futureParentElement = hasElementTranscludeDirective ? $element.parent() : $element;
          }
          return boundTranscludeFn(scope, cloneAttachFn, transcludeControllers, futureParentElement, scopeToChild);
        }
      }
    }

    // Depending upon the context in which a directive finds itself it might need to have a new isolated
    // or child scope created. For instance:
    // * if the directive has been pulled into a template because another directive with a higher priority
    // asked for element transclusion
    // * if the directive itself asks for transclusion but it is at the root of a template and the original
    // element was replaced. See https://github.com/anwScope: newScope});
      }
    }

    /**
     * looks up the directive and decorates it with exception handling and proper parameters. We
     * call this the boundDirective.
     *
     * @param {string} name name of the directive to look up.
     * @param {string} location The directive must be found in specific format.
     *   String containing any of theses characters:
     *
     *   * `E`: element name
     *   * `A': attribute
     *   * `C`: class
     *   * `M`: comment
     * @returns {boolean} true if directive was added.
     */
    function addDirective(tDirectives, name, location, maxPriority, ignoreDirective, startAttrName,
                          endAttrName) {
      if (name === ignoreDirective) return null;
      var match = null;
      if (hasDirectives.hasOwnProperty(name)) {
        for (var directive, directives = $injector.get(name + Suffix),
            i = 0, ii = directives.length; i < ii; i++) {
          try {
            directive = directives[i];
            if ((isUndefined(maxPriority) || maxPriority > directive.priority) &&
                 directive.restrict.indexOf(location) != -1) {
              if (startAttrName) {
                directive = inherit(directive, {$$start: startAttrName, $$end: endAttrName});
              }
              if (!directive.$$bindings) {
                var bindings = directive.$$bindings =
                    parseDirectiveBindings(directive, directive.name);
                if (isObject(bindings.isolateScope)) {
                  directive.$$isolateBindings = bindings.isolateScope;
                }
              }
              tDirectives.push(directive);
              match = directive;
            }
          } catch (e) { $exceptionHandler(e); }
        }
      }
      return match;
    }


    /**
     * looks up the directive and returns true if it is a multi-element directive,
     * and therefore requires DOM nodes between -start and -end markers to be grouped
     * together.
     *
     * @param {string} name name of the directive to look up.
     * @returns true if directive was registe      }
      return false;
    }

    /**
     * When the element is replaced with HTML template then the new attributes
     * on the template need to be merged with the existing attributes in the DOM.
     * The desired effect is to have both of the attributes present.
     *
     * @param {object} dst destination attributes (original DOM)
     * @param {object} src source attributes (from thr[key];
        }
      });
    }


    function compileTemplateUrl(directives, $compileNode, tAttrs,
        $rootElement, childTranscludeFn, preLinkFns, postLinkFns, previousCompileContext) {
      var linkQueue = [],
          afterTemplateNodeLinkFn,
          afterTemplateChildLinkFn,
          beforeTemplateCompileNode = $compileNode[0],
          origAsyncDirective = directives.shift(),
          derivedSyncDirective = inherit(origAsyncDirective, {
            templateUrl: null, transclude: null, replace: null, $$originalDirective: origAsyncDirective
          }),
          templateUrl = (isFunction(origAsyncDirective.templateUrl))
              ? origAsyncDirective.templateUrl($compileNode, tAttrs)
              : origAsyncDirective.templateUrl,
          templateNamespace = origAsyncDirective.templateNamespace;

      $compileNode.empty();

      $templateRequest(templateUrl)
        .then(function(content) {
          var compileNode, tempTemplateAttrs, $template, childBoundTranscludeFn;

          content = denormalizeTemplate(content);

          if (origAsyncDirective.replace) {
            if (jqLiteIsTextNode(content)) {
              $template = [];
            } else {
              $template = removeComments(wrapTemplate(templateNamespace, trim(content)));
            }
            compileNode = $template[0];

            if ($template.length != 1 || compileNode.nodeType !== NODE_TYPE_ELEMENT) {
              throw $compileMinErr('tplrt',
                  "Template for directive '{0}' must have exactly one root element. {1}",
                  origAsyncDirective.name, templateUrl);
            }

            tempTemplateAttrs = {$attr: {}};
            replaceWith($rootElement, $compileNode, compileNode);
            var templateDirectives = collectDirectives(compileNode, [], tempTemplateAttrs);

            if (isObject(origAsyncDirective.scope)) {
              // the original directive that caused the template to be loaded async required
              // an isolate scope
              markDirectiveScope(templateDirectives, true);
            }
            directives = templateDirectives.concat(directives);
            mergeTemplateAttributes(tAttrs, tempTemplateAttrs);
          } else {
            compileNode = beforeTemplateCompileNode;
            $compileNode.html(content);
          }

          directives.unshift(derivedSyncDirective);

          afterTemplateNodeLinkFn = applyDirectivesToNode(directives, compileNode, tAttrs,
              childTranscludeFn, $compileNode, origAsyncDirective, preLinkFns, postLinkFns,
              previousCompileContext)ode[0];
            }
          });
          afterTemplateChildLinkFn = compileNodes($compileNode[0].childNodes, childTranscludeFn);

          while (linkQueue.length) {
            var scope = linkQueue.shift(),
                beforeTemplateLinkNode = linkQueue.shift(),
                linkRootElement = linkQueue.shift(),
                boundTranscludeFn = linkQueue.shift(),
                linkNode = $compileNode[0];

            if (scope.$$destroyed) continue;

            if (beforeTemplateLinkNode !== beforeTemplateCompileNode) {
              var oldClasses = beforeTemplateLinkNode.className;

              if (!(previousCompileContext.hasElementTranscludeDirective &&
                  origAsyncDirective.replace)) {
                // it was cloned therefore we have to clone as well.
                linkNode = jqLiteClone(compileNode);
              }
              replaceWith(linkRootElement, jqLite(beforeTemplateLinkNode), linkNode);

              // Copy in CSS classes from original node
              safeAddClass(jqLite(linkNode), oldClasses);
            }
            if (afterTemplateNodeLinkFn.transcludeOnThisElement) {
              childBoundTranscludeFn = createBoundTranscludeFn(scope, afterTemplateNodeLinkFn.transclude, boundTranscludeFn);
            } else {
              childBoundTranscludeFn = boundTranscludeFn;
            }
            afterTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, linkNode, $rootElement,
              childBoundTranscludeFn);
          }
          linkQueue dTranscludeFn);
        }
      };
    }


    /**
     * Sorting function   retrtingT         ret $sce.RESOURCE_URL;
      }
    }


    function addAttrInterpolateDirective(node, directives, value, name, allOrNothing) {
      var trustedContext = getTrustedContext(node, name);
      allOrNothing = ALL_OR_NOTHING_ATTRS[name] || allOrNothing;

      var interpolateFn = $interpolate(value, true, trustedContext, allOrNothing);

      // no interpolation found -> ignore
      if (!interpolateFn) return;


      if (name === "multiple" && nodeName_(node) === "select") {
        throw $compileMinErr("selmulti",
            "Binding to the 'multiple' attribute is not supported. Element: {0}",
            startingTag(node));
      }

      directives.push({
        priority: 100,
        compile: function() {
            return {
              pre: function attrInterpolatePreLinkFn(scope, element, attr) {
                var $$observers = (attr.$$observers || (attr.$$observers = createMap()));

                if (EVENT_HANDLER_ATTR_REGEXP.test(name)) {
                  throw $compileMinErr('nodomevents',
                      "Interpolations for HTML DOM event attributes are disallowed.  Please use the " +
                          "ng- versions (such as ng-click instead of onclick) instead.");
                }

                // If the attribute has changed since last $interpolate()ed
                var newValue = attr[name];
                if (newValue !== value) {
                  // we need to interpolate again since the attribute value has been updated
                  // (e.g. by another directive's compile function)
                  // ensure unset/empty values make interpolateFn falsy
                  interpolateFn = newValue && $interpolate(newValue, true, trustedContext, allOrNothing);
                  value = newValue;
                }

                // if attribute was updated so that there is no interpolation going on we don't want to
                // register any observers
                if (!interpolateFn) return;

                // initialize attr object so that it's ready in case we need the value for isolate
                // scope initialization, otherwise the value would not be available from isolate
                // directive's linking fn during linking phase
                attr[name] = interpolateFn(scope);

                ($$observers[name] || ($$observers[name] = [])).$$inter = true;
                (attr.$$observers && attr.$$observers[name].$$scope || scope).
                  }
                  });
              }
            };
          }
      });
    }


    /**
     * This is a special jqLite.replaceWith, which can replace items which
     * have no parents, provided that the containing jqLite collection is provided.
     *
     * @param {JqLite=} $rootElement The root of the compile tree. Used so that we can replace nodes
     *                               in the root of the tree.
     * @param {JqLite} elementsToRemove The jqLite element which we are going to replace. We keep
     *                                  the shell, but replace its DOM node reference.
     * @param {Node} newNode The new DOM node.
     */
    function replaceWith($rootElement, elementsToRemove, newNode) {
      var firstElementToRemove = elementsToRemove[0],
          removeCount = elementsToRemove.length,
          parent = firstElementToRemove.parentNode,
          i, ii;

      if ($rootElement) {
        for (i = 0, ii = $rootElement.length; i < ii; i++) {
          if ($rootElement[i] == firstElementToRemove) {
            $rootElement[i++] = newNode;
            for (var j = i, j2 = j + removeCount - 1,
                     jj = $rootElement.length;
                 j < jj; j++, j2++) {
              if (j2 < jj) {
                $rootElement[j] = $rootElement[j2];
              } else {
                delete $rootElement[j];
              }
            }
            $rootElement.length -= removeCount - 1;

            // If the replaced element is also the jQuery .context then replace it
            // .context is a deprecated jQuery api, so we should set it only when jQuery set it
            // http://api.jquery.com/context/
            if ($rootElement.context === firstElementToRemove) {
              $rootElement.context = newNode;
            }
            break;
          }
        }
      }

      if (parent) {
        parent.replaceChild(newNode, firstElementToRemove);
      }

      // TODO(perf): what's this document fragment for? is it needed? can we at least reuse it?
      var fragment = document.createDocumentFragment();
      fragment.appendChild(firstElementToRemove);

      if (jqLite.hasData(firstElementToRemove)) {
        // Copy over user data (that includes Angular's $scope etc.). Don't copy private
        // data here because there's no public interface in jQuery to do that and copying over
        // event listeners (which is the main use of private data) wouldn't work anyway.
        jqLite.data(newNode, jqLite.data(firstElementToRemove));

        // Remove data of the replaced element. We cannot just call .remove()
        // on the element it since that would deallocate scope that is needed
        // for the new node. Instead, remove the data "manually".
        if (!jQuery) {
          delete jqLite.cache[firstElementToRemove[jqLite.expando]];
        } else {
          // jQuery 2.x doesn't expose the data storage. Use jQuery.cleanData to clean up after
          // the replaced element. The cleanData version monkey-patched by Angular would cause
          // the scope to be trashed and we do need the very same scope to work with the new
          // element. However, we cannot just cache the non-patched version and use it here as
          // that would break if another library patches the method after Angular does (one
          // example is jQuery UI). Instead, set a flag indicating scope destroying should be
          // skipped this one time.
          skipDestroyOnNextJQueryCleanData = true;
          jQuery.cleanData([firstElementToRemove]);
        }
      }

      for (var k = 1, kk = elementsToRemove.length; k < kk; k++) {
        var element = elementsToRemove[k];
        jqLite(element).remove(); // must do this way to clean up expando
        fragment.appendChild(element);
        delete elementsToRemove[k];
      }

      elementsToRemove[0] = newNode;
      elementments)tingTag($element));
      }
    }


    // Set up $watches for isolate scope and controller bindings. This process
    // only occurs for isolate scopes and new scopes with controllerAs.
    function initializeDirectiveBindings(scope, attrs, destination, bindings, directive) {
      var removeWatchCollection = [];
      forEach(bindings, function(definition, scopeName) {
        var attrName = definition.attrName,
        optional = definition.optional,
        mode = definition.mode, // @, =, or &
        lastValue,
        parentGet, parentSet, compare;

        switch (mode) {

          case '@':
            if (!optional && !hasOwnProperty.call(attrs, attrName)) {
              destination[scopeName] = attrs[attrName] = void 0;
            }
   ue;
              }
            });
            attrs.$$observers[attrName].$$scope = scope;
            lastValue = attrs[attrName];
            if (isString(lastValue)) {
              // If the attribute has been provided then we trigger an interpolation to ensure
              // the value is there for use in the link fn
              destination[scopeName] = $interpolate(lastValue)(scope);
            } else if (isBoolean(lastValue)) {
              // If the attributes is one of the BOOLEAN_ATTR then Angular will have converted
              // the value to boolean rather than a string, so we special case this situation
              destination[scopeName] = lastValue;
            }
            break;

          case '=':
            if (!hasOwnProperty.call(attrs, attrName)) {
              if (optional) break;
              attrs[attrName] = void 0;
            }
            if (optional && !attrs[attrName]) break;

            parentGet = $parse(attrs[attrName]);
            if (parentGet.literal) {
              compare = equals;
            === b || (a !== a && b !== b); };
            }
          e, directive.name);
            };
            lastValue = destination[scopeName] = parentGet(scope);
 alue = parentValue;
            };
            parentValueWatch.$stateful = true;
            var removeWatch;
            if (definition.collection) {
              removeWatch = scope.$watchCollection(attrs[attrName], parentValueWatch);
            } else {
              removeWatch = scope.$watch($parse(attrs[attrName], parentValueWatch), null, parentGet.literal);
            }
            removeWatchCollection.push(removeWatch);
            break;

          case '&':
            // Don't assign Object.prototype method to scope
            parentGet = attrs.hasOwnProperty(attrName) ? $parse(attrs[attrName]) : noop;

            // Don't assign noop to destination if expression is not valid
            if (parentGet === noop && optional) break;

   Get(scope, locals);
            };
            break;
        }
      });

      returollection[i]();
        }
      };
    }
  }];
}

var PREFIX_REGEXP = /^((?:x|data)[\:\-_])/i;
/**
 * Converts all accepted directives format into proper directive name.
 * me.replace(PREFIX_REGEXP, ''));
}

/**
 * @ngdoc type
 * @name $compile.directive.Attributes
 *
 * @description
 * A shared object between directive compile / linking functions which contains normalized DOM
 * element attributes. The values reflect current binding state `{{ }}`. The normalization is
 * needed since all of these are treated as equivalent in Angular:
 *
 * ```
 *    <span ng:bind="a" ng-bind="a" data-ng-bind="a" x-ng-bind="a">
 * ```
 */

/**
 * @ngdoc property
 * @name $compile.directive.Attributes#$attr
 *
 * @description
 * A map of DOM element attribute names to the normalized name. This is
 * needed to do reverse lookup from normalized name back to actual name.
 */


/**
 * @ngdoc method
 * @name $compile.directive.Attributes#$set
 * @kind function
 *
 * @description
 * Set DOM element attribute value.
 *
 *
 * @param {string} name Normalized element attribute name of the property to modify. The name is
 *          reverse-translated using the {@link ng.$compile.directive.Attributes#$attr $attr}
 *          property to the original name.
 * @param {string} value Value to set the attribute to. The value can be an interpolated string.
 */



/**
 * Closunn)1);
    }
  }
  return jqNodes;
}

var $controllerMinErr = minErr('$controller');


var CNTRL_REif (match) return match[3];
  }
}


/**
 * @ngdoc provider
 * @name $controllerProvider
 * @description
 * The {@link ng.$controller $controller service} is used by Angular to create new
 * controllers.
 *
 * This provider allows controller registration via the
 * {@link ng.$controllerProvider#register register} method.
 */
function $ControllerProvider() {
  var controllers = {},
      globals = false;

  /**
   * @ngdoc method
   * @name $controllerProvider#register
   * @param {string|Object} name Controller name, or an object map of controllers where the keys are
   *    the names and the values are the constructors.
   * @param {Function|Array} constructor Controller constructor fn (optionally decorated with DI
   *    annotations in the array nrs[name] = constructor;
    }
  };

  /**
   * @ngdoc method
   * @name $controllerProvider#allowGlobals
   * @description If called, allows `$controller` to find controller constructors on `wiction() {
    globals = true;
  };


  this.$get = ['$injector', '$window', function($injector, $window) {

    /**
     * @ngdoc service
     * @name $controller
     * @requires $injector
     *
     * @param {Function|string} constructor If called with a function then it's considered to be the
     *    controller constructor function. Otherwise it's considered to be a string which is used
     *    to retrieve the controller constructor using the following steps:
     *
     *    * check if a controller with given name is registered via `$controllerProvider`
     *    * check if evaluating the string on the current scope returns a constructor
     *    * if $controllerProvider#allowGlobals, check `window[constructor]` on the global
     *      `window` object (not recommended)
     *
     *    The string can use the `controller as property` syntax, where the controller instance is published
     *    as the specified property on the `scope`; the `scope` must be injected into `locals` param for this
     *    to work correctly.
     *
     * @param {Object} locals Injection locals for Controller.
     * @return {Object} Instance of given controller.
     *
     * @description
     * `$controller` service is responsible for instantiating controllers.
     *
     * It's just a simple call to {@link auto.$injector $injector}, but extracted into
     * a service, so that one can override this service with [BC version](https://gist.github.com/1649788).
     */
    return function(expression, locals, later, ident) {
      // PRIVATE API:
      //   param `later` --- indicates that the controller's constructor is invoked at a later time.
      //                     If true, $controller will allocate the object with the correct
      //                     prototype chain, but will not invoke the controller until a returned
      //                     callback is invoked.
      //   param `ident` --- An optional label which overrides the label parsed from the controller
      //                     expression, if any.
      var instance, match, constructor, identifier;
      later = later === true;
      if (ident && isString(ident)) {
        identifier = ident;
      }

      if (isString(expression)) {
        match = expression.match(CNTRL_REG);
        if (!match) {
          throw $controllerMinErr('ctrlfmt',
            "Badly formed controller string '{0}'. " +
            "Must match `__name__ as __id__` or `__name__`.", expression);
        }
        constructor = match[1],
        identifier = identifier || match[3];
        expression = controllers.hasOwnProperty(constructor)
            ? controllers[constructor]
            : getter(locals.$scope, constructor, true) ||
                (globals ? getter($window, constructor, true) : undefined);

        assertArgFn(expression, constructor, true);
      }

      if (later) {
        // Instantiate controller later:
        // This machinery is used to create an instance of the object before calling the
        // controller's constructor itself.
        //
        // This allows properties to be added to the controller before the constructor is
        // invoked. Primarily, this is used for isolate scope bindings in $compile.
        //
        // This feature is not intended for use by applications, and is thus not documented
        // publicly.
        // Object creation: http://jsperf.com/create-constructor/2
        var controllerPrototype = (isArray(expression) ?
          expression[expression.length - 1] : expression).prototype;
        instance = Object.create(controllerPrototype || null);

        if (identifier) {
          addIdentifier(locals, identifier, instance, constructor || expression.name);
        }

        var instantiate;
        return instantiate = extend(function() {
          var result = $injector.invoke(expression, instance, locals, constructor);
          if (result !== instance && (isObject(result) || isFunction(result))) {
            instance = result;
            if (identifier) {
              // If result changed, re-assign controllerAs value to scope.
              addIdentifier(locals, identifier, instance, constructor || expression.name);
            }
          }
          return instance;
        }, {
          instance: instance,
          identifier: identifier
        });
      }

      instance = $injector.instantiate(expression, locals, constructor);

      if (identifier) {
        addIdentifier(locals, identifier, instance, constructor || expression.name);
      }

 ope[identifier] = instance;
    }
  }];
}

/**
 * @ngdoc service
 * @name $document
 * @requires $window
 *
 * @description
 * A {@link angular.element jQuery or jqLite} wrapper for the browser's `window.document` object.
 *
 * @example
   <example module="documentExample">
     <file name="index.html">
       <div ng-controller="ExampleController">
         <p>$document title: <b ng-bind="title"></b></p>
         <p>window.document title: <b ng-bind="windowTitle"></b></p>
       </div>
     </file>
     <file name="script.js">
       angular.module('documentExample', [])
         .controller('ExampleController', ['$scope', '$document', function($scope, $document) {
           $scope.title = $document[0].title;
           $scope.windowTitle = angular.element(window.document)[0].title;
         }] jqLite(window.document);
  }];
}

/**
 * @ngdoc service
 * @name $exceptionHandler
 * @requires ng.$log
 *
 * @description
 * Any uncaught exception in angular expressions is delegated to this service.
 * The default implementation simply delegates to `$log.error` which logs it into
 * the browser console.
 *
 * In unit tests, if `angular-mocks.js` is loaded, this service is overridden by
 * {@link ngMock.$exceptionHandler mock $exceptionHandler} which aids in testing.
 *
 * ## Example:
 *
 * ```js
 *   angular.module('exceptionOverride', []).factory('$exceptionHandler', function() {
 *     return function(exception, cause) {
 *       exception.message += ' (caused by "' + cause + '")';
 *       throw exception;
 *     };
 *   });
 * ```
 *
 * This example will override the normal action of `$exceptionHandler`, to make angular
 * exceptions fail hard when they happen, instead of just logging to the console.
 *
 * <hr />
 * Note, that code executed in event-listeners (even those registered using jqLite's `on`/`bind`
 * methods) does not delegate exceptions to the {@link ng.$exceptionHandler $exceptionHandler}
 * (unless executed during a digest).
 *
 * If you wish, you can manually delegate exceptions, e.g.
 * `try { ... } catch(e) { $exceptionHandler(e); }`
 *
 * @param {Error} exception Exception associated with the error.
 * @param {string=} cause optional information about the context in which
 *  ($log, arguments);
    };
  }e.offsetWidth + 1;
    };
  }];
};

var APPLICATION_JSON = 'application/json';
var CONTENT_TYPE_APPLICATION_JSON = {'Content-Type': APPLICATION_JSON + ';charset=utf-8'};
var JSON_START = /^\[|^\{(?!\{)/;
var JSON_ENDS = {
  '[': /]$/,
  '{': /}$/
};
var JSON_PROTECTION_PREFIX = /^\)\]\}',?\n/;
var $httpMinErr = minErr('$ b() : toJson(v);
  }
  return v;
}


function $HttpParamSerializerProvider() {
  /**
   * @ngdoc service
   * @name $httpParamSerializer
   * @description
   *
   * Default {@link $http `$http`} params serializer that converts objects to strings
   * according to the following rules:
   *
   * * `{'foo': 'bar'}` results in `foo=bar`
   * * `{'foo': Date.now()}` results in `foo=2015-04-01T09%3A50%3A49.262Z` (`toISOString()` and encoded representation of a Date object)
   * * `{'foo': ['bar', 'baz']}` results in `foo=bar&foo=baz` (repeated key for each array element)
   * * `{'foo': {'bar':'baz'}}` results in `foo=%7B%22bar%22%3A%22baz%22%7D"` (stringified and encoded representation of an object)
   *
   * Note that serializer will sort the request parameters alphabetically.
   * */

  this.$get = function() {
    return function ngParamSerializer(params) {
      if (!params) return '';
      var parts = [];
      forEachSorted(params, function(value, key) {
        if (value === null || isUndefined(value)) return;
        if (isArray(v(serializeValue(v)));
          });
        } else {
          parts.push(encodeUriQuery(key) + '=' + encodeUriQuery(serializeValue(value)));
        }
      });

      retur; N_ENDS[jsonStart[0]].test(str);
}

/**
 * Parse headers into key value object
 *
 * @param {string} headers Raw headers as a string
 * @returns {Object} Parse;
    });
  }

  return parsed;
}


/**
 * Returns a function that provides access to parsed headers.
 *
 * Headers are lazy parsed when first requested.
 * @see parseHeaders
 *
 * @param {(string|Object)} headers Headers to provide access to.
 * @returns {function(string=)} Returns a getter function which if called with:
 *
 *   - if called with single an argument returns a single header value or null
 *   - if called with no arguments returns an object containing all headers.
 */
function headersGetter(heade    }

    return headersObj;
  };
}


/**
 * Chain all given functions
 *
 * This function is used for both request and response transforming
 *
 * @param {*} data Data to transform.
 * @param {function(string=)} headers HTTP headers getter fn.
 * @param {number} status HTTP status code of the response.
 * @param {(Function|Array.<Function>)} fns Function or an array of functions.
 * @ s 200 <= status && status < 300;
}


/**
 * @ngdoc provider
 * @name $httpProvider
 * @description
 * Use `$httpProvider` to change the default behavior of the {@link ng.$http $http} service.
 * */
function $HttpProvider() {
  /**
   * @ngdoc property
   * @name $httpProvider#defaults
   * @description
   *
   * Object containing default values for all {@link ng.$http $http} requests.
   *
   * - **`defaults.cache`** - {boolean|Object} - A boolean value or object created with
   * {@link ng.$cacheFactory `$cacheFactory`} to enable or disable caching of HTTP responses
   * by default. See {@link $http#caching $http Caching} for more information.
   *
   * - **`defaults.xsrfCookieName`** - {string} - Name of cookie containing the XSRF token.
   * Defaults value is `'XSRF-TOKEN'`.
   *
   * - **`defaults.xsrfHeaderName`** - {string} - Name of HTTP header to populate with the
   * XSRF token. Defaults value is `'X-XSRF-TOKEN'`.
   *
   * - **`defaults.headers`** - {Object} - Default headers for all $http requests.
   * Refer to {@link ng.$http#setting-http-headers $http} for documentation on
   * setting default headers.
   *     - **`defaults.headers.common`**
   *     - **`defaults.headers.post`**
   *     - **`defaults.headers.put`**
   *     - **`defaults.headers.patch`**
   *
   *
   * - **`defaults.paramSerializer`** - `{string|function(Object<string,string>):string}` - A function
   *  used to the prepare string representation of request parameters (specified as an object).
   *  If specified as string, it is interpreted as a function registered with the {@link auto.$injector $injector}.
   *  Defaults to {@link ng.$httpParamSerializer $httpParamSerializer}.
   *
   **/
  var defaults = this.defaults = {
    // transform incoming response data
    transformResponse: [defaultHttpResponseTransform],

    // transform outgoing reormData(d) ? toJson(d) : d;
    }],

    // default headers
    headers: {
      common: {
        'Accept': 'application/json, text/plain, */*'
      },
      post:   shallowCopy(CONTENT_TYPE_APPLICATION_JSON),
      put:    shallowCopy(CONTENT_TYPE_APPLICATION_JSON),
      patch:  shallowCopy(CONTENT_TYPE_APPLICATION_JSON)
    },

    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',

    paramSerializer: '$httpParamSerializer'
  };

  var useApplyAsync = false;
  /**
   * @ngdoc method
   * @name $httpProvider#useApplyAsync
   * @description
   *
   * Configure $http service to combine processing of multiple http responses received at around
   * the same time via {@link ng.$rootScope.Scope#$applyAsync $rootScope.$applyAsync}. This can result in
   * significant performance improvement for bigger applications that make many HTTP requests
   * concurrently (common during application bootstrap).
   *
   * Defaults to false. If no value is specified, returns the current configured value.
   *
   * @param {boolean=} value If true, when requests are loaded, they will schedule a deferred
   *    "apply" on the next tick, giving time for subsequent requests in a roughly ~10ms window
   *    to load and share the same digest cycle.
   *
   * @returns {boolean|Object} If a value is specified, returns the $httpProvider for chaining.
   *    otherwise, returns the current configured value.
   **/
  this.useApplyAsync = function(value) {
    if (isDefined(value)) {
      useApplyAsync = !!value;
      return this;
    }
    return useApplyAsync;
  };

  var useLegacyPromise = true;
  /**
   * @ngdoc method
   * @name $httpProvider#useLegacyPromiseExtensions
   * @description
   *
   * Configure `$http` service to return promises without the shorthand methods `success` and `error`.
   * This should be used to make sure that applications work without these methods.
   *
   * Defaults to true. If no value is specified, returns the current configured value.
   *
   * @param {boolean=} value If true, `$http` will return a promise with the deprecated legacy `success` and `error` methods.
   *
   * @returns {boolean|Object} If a value is specified, returns the $httpProvider for chaining.
   *    otherwise, returns the current configured value.
   **/
  
    return useLegacyPromise;
  };

  /**
   * @ngdoc property
   * @name $httpProvider#interceptors
   * @description
   *
   * Array containing service factories for all synchronous or asynchronous {@link ng.$http $http}
   * pre-processing of request or postprocessing of responses.
   *
   * These service factories are ordered by request, i.e. they are applied in the same order as the
   * array, on request, but reverse order, on response.
   *
   * {@link ng.$http#interceptors Interceptors detailed info}
   **/
  var interceptorFactories = this.interceptors = [];

  this.$get = ['$httpBackend', '$$cookieReader', '$cacheFactory', '$rootScope', '$q', '$injector',
      function($httpBackend, $$cookieReader, $cacheFactory, $rootScope, $q, $injector) {

    var defaultCache = $cacheFactory('$http');

    /**
     * Make sure that default param serializer is exposed as a function
     */
    defaults.paramSerializer = isString(defaults.paramSerializer) ?
      $injector.get(defaults.paramSerializer) : defaults.paramSerializer;

    /**
     * Interceptors stored in reverse order. Inner interceptors before outer interceptors.
     * The reversal is needed so that we can build up the interception chain around the
     * server request.
     */
    var reversedInterceptors = [];

nvoke(interceptorFactory));
    });

    /**
     * @ngdoc service
     * @kind function
     * @name $http
     * @requires ng.$httpBackend
     * @requires $cacheFactory
     * @requires $rootScope
     * @requires $q
     * @requires $injector
     *
     * @description
     * The `$http` service is a core Angular service that facilitates communication with the remote
     * HTTP servers via the browser's [XMLHttpRequest](https://developer.mozilla.org/en/xmlhttprequest)
     * object or via [JSONP](http://en.wikipedia.org/wiki/JSONP).
     *
     * For unit testing applications that use `$http` service, see
     * {@link ngMock.$httpBackend $httpBackend mock}.
     *
     * For a higher level of abstraction, please check out the {@link ngResource.$resource
     * $resource} service.
     *
     * The $http API is based on the {@link ng.$q deferred/promise APIs} exposed by
     * the $q service. While for simple usage patterns this doesn't matter much, for advanced usage
     * it is important to familiarize yourself with these APIs and the guarantees they provide.
     *
     *
     * ## General usage
     * The `$http` service is a function which takes a single argument — a {@link $http#usage configuration object} —
     * that is used to generate an HTTP request and returns  a {@link ng.$q promise}.
     *
     * ```js
     *   // Simple GET request example:
     *   $http({
     *     method: 'GET',
     *     url: '/someUrl'
     *   }).then(function successCallback(response) {
     *       // this callback will be called asynchronously
     *       // when the response is available
     *     }, function errorCallback(response) {
     *       // called asynchronously if an error occurs
     *       // or server returns response with an error status.
     *     });
     * ```
     *
     * The response object has these properties:
     *
     *   - **data** – `{string|Object}` – The response body transformed with the transform
     *     functions.
     *   - **status** – `{number}` – HTTP status code of the response.
     *   - **headers** – `{function([headerName])}` – Header getter function.
     *   - **config** – `{Object}` – The configuration object that was used to generate the request.
     *   - **statusText** – `{string}` – HTTP status text of the response.
     *
     * A response status code between 200 and 299 is considered a success status and
     * will result in the success callback being called. Note that if the response is a redirect,
     * XMLHttpRequest will transparently follow it, meaning that the error callback will not be
     * called for such responses.
     *
     *
     * ## Shortcut methods
     *
     * Shortcut methods are also available. All shortcut methods require passing in the URL, and
     * request data must be passed in for POST/PUT requests. An optional config can be passed as the
     * last argument.
     *
     * ```js
     *   $http.get('/someUrl', config).then(successCallback, errorCallback);
     *   $http.post('/someUrl', data, config).then(successCallback, errorCallback);
     * ```
     *
     * Complete list of shortcut methods:
     *
     * - {@link ng.$http#get $http.get}
     * - {@link ng.$http#head $http.head}
     * - {@link ng.$http#post $http.post}
     * - {@link ng.$http#put $http.put}
     * - {@link ng.$http#delete $http.delete}
     * - {@link ng.$http#jsonp $http.jsonp}
     * - {@link ng.$http#patch $http.patch}
     *
     *
     * ## Writing Unit Tests that use $http
     * When unit testing (using {@link ngMock ngMock}), it is necessary to call
     * {@link ngMock.$httpBackend#flush $httpBackend.flush()} to flush each pending
     * request using trained responses.
     *
     * ```
     * $httpBackend.expectGET(...);
     * $http.get(...);
     * $httpBackend.flush();
     * ```
     *
     * ## Deprecation Notice
     * <div class="alert alert-danger">
     *   The `$http` legacy promise methods `success` and `error` have been deprecated.
     *   Use the standard `then` method instead.
     *   If {@link $httpProvider#useLegacyPromiseExtensions `$httpProvider.useLegacyPromiseExtensions`} is set to
     *   `false` then these methods will throw {@link $http:legacy `$http/legacy`} error.
     * </div>
     *
     * ## Setting HTTP Headers
     *
     * The $http service will automatically add certain HTTP headers to all requests. These defaults
     * can be fully configured by accessing the `$httpProvider.defaults.headers` configuration
     * object, which currently contains this default configuration:
     *
     * - `$httpProvider.defaults.headers.common` (headers that are common for all requests):
     *   - `Accept: application/json, text/plain, * / *`
     * - `$httpProvider.defaults.headers.post`: (header defaults for POST requests)
     *   - `Content-Type: application/json`
     * - `$httpProvider.defaults.headers.put` (header defaults for PUT requests)
     *   - `Content-Type: application/json`
     *
     * To add or overwrite these defaults, simply add or remove a property from these configuration
     * objects. To add headers for an HTTP method other than POST or PUT, simply add a new object
     * with the lowercased HTTP method name as the key, e.g.
     * `$httpProvider.defaults.headers.get = { 'My-Header' : 'value' }`.
     *
     * The defaults can also be set at runtime via the `$http.defaults` object in the same
     * fashion. For example:
     *
     * ```
     * module.run(function($http) {
     *   $http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w'
     * });
     * ```
     *
     * In addition, you can supply a `headers` property in the config object passed when
     * calling `$http(config)`, which overrides the defaults without changing them globally.
     *
     * To explicitly remove a header automatically added via $httpProvider.defaults.headers on a per request basis,
     * Use the `headers` property, setting the desired header to `undefined`. For example:
     *
     * ```js
     * var req = {
     *  method: 'POST',
     *  url: 'http://example.com',
     *  headers: {
     *    'Content-Type': undefined
     *  },
     *  data: { test: 'test' }
     * }
     *
     * $http(req).then(function(){...}, function(){...});
     * ```
     *
     * ## Transforming Requests and Responses
     *
     * Both requests and responses can be transformed using transformation functions: `transformRequest`
     * and `transformResponse`. These properties can be a single function that returns
     * the transformed value (`function(data, headersGetter, status)`) or an array of such transformation functions,
     * which allows you to `push` or `unshift` a new transformation function into the transformation chain.
     *
     * <div class="alert alert-warning">
     * **Note:** Angular does not make a copy of the `data` parameter before it is passed into the `transformRequest` pipeline.
     * That means changes to the properties of `data` are not local to the transform function (since Javascript passes objects by reference).
     * For example, when calling `$http.get(url, $scope.myObject)`, modifications to the object's properties in a transformRequest
     * function will be reflected on the scope and in any templates where the object is data-bound.
     * To prevent this, transform functions should have no side-effects.
     * If you need to modify properties, it is recommended to make a copy of the data, or create new object to return.
     * </div>
     *
     * ### Default Transformations
     *
     * The `$httpProvider` provider and `$http` service expose `defaults.transformRequest` and
     * `defaults.transformResponse` properties. If a request does not provide its own transformations
     * then these will be applied.
     *
     * You can augment or replace the default transformations by modifying these properties by adding to or
     * replacing the array.
     *
     * Angular provides the following default transformations:
     *
     * Request transformations (`$httpProvider.defaults.transformRequest` and `$http.defaults.transformRequest`):
     *
     * - If the `data` property of the request configuration object contains an object, serialize it
     *   into JSON format.
     *
     * Response transformations (`$httpProvider.defaults.transformResponse` and `$http.defaults.transformResponse`):
     *
     *  - If XSRF prefix is detected, strip it (see Security Considerations section below).
     *  - If JSON response is detected, deserialize it using a JSON parser.
     *
     *
     * ### Overriding the Default Transformations Per Request
     *
     * If you wish override the request/response transformations only for a single request then provide
     * `transformRequest` and/or `transformResponse` properties on the configuration object passed
     * into `$http`.
     *
     * Note that if you provide these properties on the config object the default transformations will be
     * overwritten. If you wish to augment the default transformations then you must include them in your
     * local transformation array.
     *
     * The following code demonstrates adding a new response transformation to be run after the default response
     * transformations have been run.
     *
     * ```js
     * function appendTransform(defaults, transform) {
     *
     *   // We can't guarantee that the default transformation is an array
     *   defaults = angular.isArray(defaults) ? defaults : [defaults];
     *
     *   // Append the new transformation to the defaults
     *   return defaults.concat(transform);
     * }
     *
     * $http({
     *   url: '...',
     *   method: 'GET',
     *   transformResponse: appendTransform($http.defaults.transformResponse, function(value) {
     *     return doTransform(value);
     *   })
     * });
     * ```
     *
     *
     * ## Caching
     *
     * {@link ng.$http `$http`} responses are not cached by default. To enable caching, you must
     * set the config.cache value or the default cache value to TRUE or to a cache object (created
     * with {@link ng.$cacheFactory `$cacheFactory`}). If defined, the value of config.cache takes
     * precedence over the default cache value.
     *
     * In order to:
     *   * cache all responses - set the default cache value to TRUE or to a cache object
     *   * cache a specific response - set config.cache value to TRUE or to a cache object
     *
     * If caching is enabled, but neither the default cache nor config.cache are set to a cache object,
     * then the default `$cacheFactory($http)` object is used.
     *
     * The default cache value can be set by updating the
     * {@link ng.$http#defaults `$http.defaults.cache`} property or the
     * {@link $httpProvider#defaults `$httpProvider.defaults.cache`} property.
     *
     * When caching is enabled, {@link ng.$http `$http`} stores the response from the server using
     * the relevant cache object. The next time the same request is made, the response is returned
     * from the cache without sending a request to the server.
     *
     * Take note that:
     *
     *   * Only GET and JSONP requests are cached.
     *   * The cache key is the request URL including search parameters; headers are not considered.
     *   * Cached responses are returned asynchronously, in the same way as responses from the server.
     *   * If multiple identical requests are made using the same cache, which is not yet populated,
     *     one request will be made to the server and remaining requests will return the same response.
     *   * A cache-control header on the response does not affect if or how responses are cached.
     *
     *
     * ## Interceptors
     *
     * Before you start creating interceptors, be sure to understand the
     * {@link ng.$q $q and deferred/promise APIs}.
     *
     * For purposes of global error handling, authentication, or any kind of synchronous or
     * asynchronous pre-processing of request or postprocessing of responses, it is desirable to be
     * able to intercept requests before they are handed to the server and
     * responses before they are handed over to the application code that
     * initiated these requests. The interceptors leverage the {@link ng.$q
     * promise APIs} to fulfill this need for both synchronous and asynchronous pre-processing.
     *
     * The interceptors are service factories that are registered with the `$httpProvider` by
     * adding them to the `$httpProvider.interceptors` array. The factory is called and
     * injected with dependencies (if specified) and returns the interceptor.
     *
     * There are two kinds of interceptors (and two kinds of rejection interceptors):
     *
     *   * `request`: interceptors get called with a http {@link $http#usage config} object. The function is free to
     *     modify the `config` object or create a new one. The function needs to return the `config`
     *     object directly, or a promise containing the `config` or a new `config` object.
     *   * `requestError`: interceptor gets called when a previous interceptor threw an error or
     *     resolved with a rejection.
     *   * `response`: interceptors get called with http `response` object. The function is free to
     *     modify the `response` object or create a new one. The function needs to return the `response`
     *     object directly, or as a promise containing the `response` or a new `response` object.
     *   * `responseError`: interceptor gets called when a previous interceptor threw an error or
     *     resolved with a rejection.
     *
     *
     * ```js
     *   // register the interceptor as a service
     *   $provide.factory('myHttpInterceptor', function($q, dependency1, dependency2) {
     *     return {
     *       // optional method
     *       'request': function(config) {
     *         // do something on success
     *         return config;
     *       },
     *
     *       // optional method
     *      'requestError': function(rejection) {
     *         // do something on error
     *         if (canRecover(rejection)) {
     *           return responseOrNewPromise
     *         }
     *         return $q.reject(rejection);
     *       },
     *
     *
     *
     *       // optional method
     *       'response': function(response) {
     *         // do something on success
     *         return response;
     *       },
     *
     *       // optional method
     *      'responseError': function(rejection) {
     *         // do something on error
     *         if (canRecover(rejection)) {
     *           return responseOrNewPromise
     *         }
     *         return $q.reject(rejection);
     *       }
     *     };
     *   });
     *
     *   $httpProvider.interceptors.push('myHttpInterceptor');
     *
     *
     *   // alternatively, register the interceptor via an anonymous factory
     *   $httpProvider.interceptors.push(function($q, dependency1, dependency2) {
     *     return {
     *      'request': function(config) {
     *          // same as above
     *       },
     *
     *       'response': function(response) {
     *          // same as above
     *       }
     *     };
     *   });
     * ```
     *
     * ## Security Considerations
     *
     * When designing web applications, consider security threats from:
     *
     * - [JSON vulnerability](http://haacked.com/archive/2008/11/20/anatomy-of-a-subtle-json-vulnerability.aspx)
     * - [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)
     *
     * Both server and the client must cooperate in order to eliminate these threats. Angular comes
     * pre-configured with strategies that address these issues, but for this to work backend server
     * cooperation is required.
     *
     * ### JSON Vulnerability Protection
     *
     * A [JSON vulnerability](http://haacked.com/archive/2008/11/20/anatomy-of-a-subtle-json-vulnerability.aspx)
     * allows third party website to turn your JSON resource URL into
     * [JSONP](http://en.wikipedia.org/wiki/JSONP) request under some conditions. To
     * counter this your server can prefix all JSON requests with following string `")]}',\n"`.
     * Angular will automatically strip the prefix before processing it as JSON.
     *
     * For example if your server needs to return:
     * ```js
     * ['one','two']
     * ```
     *
     * which is vulnerable to attack, your server can return:
     * ```js
     * )]}',
     * ['one','two']
     * ```
     *
     * Angular will strip the prefix, before processing the JSON.
     *
     *
     * ### Cross Site Request Forgery (XSRF) Protection
     *
     * [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery) is an attack technique by
     * which the attacker can trick an authenticated user into unknowingly executing actions on your
     * website. Angular provides a mechanism to counter XSRF. When performing XHR requests, the
     * $http service reads a token from a cookie (by default, `XSRF-TOKEN`) and sets it as an HTTP
     * header (`X-XSRF-TOKEN`). Since only JavaScript that runs on your domain could read the
     * cookie, your server can be assured that the XHR came from JavaScript running on your domain.
     * The header will not be set for cross-domain requests.
     *
     * To take advantage of this, your server needs to set a token in a JavaScript readable session
     * cookie called `XSRF-TOKEN` on the first HTTP GET request. On subsequent XHR requests the
     * server can verify that the cookie matches `X-XSRF-TOKEN` HTTP header, and therefore be sure
     * that only JavaScript running on your domain could have sent the request. The token must be
     * unique for each user and must be verifiable by the server (to prevent the JavaScript from
     * making up its own tokens). We recommend that the token is a digest of your site's
     * authentication cookie with a [salt](https://en.wikipedia.org/wiki/Salt_(cryptography&#41;)
     * for added security.
     *
     * The name of the headers can be specified using the xsrfHeaderName and xsrfCookieName
     * properties of either $httpProvider.defaults at config-time, $http.defaults at run-time,
     * or the per-request config object.
     *
     * In order to prevent collisions in environments where multiple Angular apps share the
     * same domain or subdomain, we recommend that each application uses unique cookie name.
     *
     * @param {object} config Object describing the request to be made and how it should be
     *    processed. The object has following properties:
     *
     *    - **method** – `{string}` – HTTP method (e.g. 'GET', 'POST', etc)
     *    - **url** – `{string}` – Absolute or relative URL of the resource that is being requested.
     *    - **params** – `{Object.<string|Object>}` – Map of strings or objects which will be serialized
     *      with the `paramSerializer` and appended as GET parameters.
     *    - **data** – `{string|Object}` – Data to be sent as the request message data.
     *    - **headers** – `{Object}` – Map of strings or functions which return strings representing
     *      HTTP headers to send to the server. If the return value of a function is null, the
     *      header will not be sent. Functions accept a config object as an argument.
     *    - **xsrfHeaderName** – `{string}` – Name of HTTP header to populate with the XSRF token.
     *    - **xsrfCookieName** – `{string}` – Name of cookie containing the XSRF token.
     *    - **transformRequest** –
     *      `{function(data, headersGetter)|Array.<function(data, headersGetter)>}` –
     *      transform function or an array of such functions. The transform function takes the http
     *      request body and headers and returns its transformed (typically serialized) version.
     *      See {@link ng.$http#overriding-the-default-transformations-per-request
     *      Overriding the Default Transformations}
     *    - **transformResponse** –
     *      `{function(data, headersGetter, status)|Array.<function(data, headersGetter, status)>}` –
     *      transform function or an array of such functions. The transform function takes the http
     *      response body, headers and status and returns its transformed (typically deserialized) version.
     *      See {@link ng.$http#overriding-the-default-transformations-per-request
     *      Overriding the Default Transformations}
     *    - **paramSerializer** - `{string|function(Object<string,string>):string}` - A function used to
     *      prepare the string representation of request parameters (specified as an object).
     *      If specified as string, it is interpreted as function registered with the
     *      {@link $injector $injector}, which means you can create your own serializer
     *      by registering it as a {@link auto.$provide#service service}.
     *      The default serializer is the {@link $httpParamSerializer $httpParamSerializer};
     *      alternatively, you can use the {@link $httpParamSerializerJQLike $httpParamSerializerJQLike}
     *    - **cache** – `{boolean|Object}` – A boolean value or object created with
     *      {@link ng.$cacheFactory `$cacheFactory`} to enable or disable caching of the HTTP response.
     *      See {@link $http#caching $http Caching} for more information.
     *    - **timeout** – `{number|Promise}` – timeout in milliseconds, or {@link ng.$q promise}
     *      that should abort the request when resolved.
     *    - **withCredentials** - `{boolean}` - whether to set the `withCredentials` flag on the
     *      XHR object. See [requests with credentials](https://developer.mozilla.org/docs/Web/HTTP/Access_control_CORS#Requests_with_credentials)
     *      for more information.
     *    - **responseType** - `{string}` - see
     *      [XMLHttpRequest.responseType](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#xmlhttprequest-responsetype).
     *
     * @returns {HttpPromise} Returns a {@link ng.$q `Promise}` that will be resolved to a response object
     *                        when the request succeeds or fails.
     *
     *
     * @property {Array.<Object>} pendingRequests Array of config objects for currently pending
     *   requests. This is primarily meant to be used for debugging purposes.
     *
     *
     * @example
<example module="httpExample">
<file name="index.html">
  <div ng-controller="FetchController">
    <select ng-model="method" aria-label="Request method">
      <option>GET</option>
      <option>JSONP</option>
    </select>
    <input type="text" ng-model="url" size="80" aria-label="URL" />
    <button id="fetchbtn" ng-click="fetch()">fetch</button><br>
    <button id="samplegetbtn" ng-click="updateModel('GET', 'http-hello.html')">Sample GET</button>
    <button id="samplejsonpbtn"
      ng-click="updateModel('JSONP',
                    'https://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero')">
      Sample JSONP
    </button>
    <button id="invalidjsonpbtn"
      ng-click="updateModel('JSONP', 'https://angularjs.org/doesntexist&callback=JSON_CALLBACK')">
        Invalid JSONP
      </button>
    <pre>http status code: {{status}}</pre>
    <pre>http response data: {{data}}</pre>
  </div>
</file>
<file name="script.js">
  angular.module('httpExample', [])
    .controller('FetchController', ['$scope', '$http', '$templateCache',
      function($scope, $http, $templateCache) {
        $scope.method = 'GET';
        $scope.url = 'http-hello.html';

        $scope.fetch = function() {
          $scope.code = null;
          $scope.response = null;

          $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
            then(function(response) {
              $scope.status = response.status;
              $scope.data = response.data;
            }, function(response) {
              $scope.data = response.data || "Request failed";
              $scope.status = response.status;
          });
        };

        $scope.updateModel = function(method, url) {
          $scope.method = method;
          $scope.url = url;
        };
      }]);
</file>
<file name="http-hello.html">
  Hello, $http!
</file>
<file name="protractor.js" type="protractor">
  var status = element(by.binding('status'));
  var data = element(by.binding('data'));
  var fetchBtn = element(by.id('fetchbtn'));
  var sampleGetBtn = element(by.id('samplegetbtn'));
  var sampleJsonpBtn = element(by.id('samplejsonpbtn'));
  var invalidJsonpBtn = element(by.id('invalidjsonpbtn'));

  it('should make an xhr GET request', function() {
    sampleGetBtn.click();
    fetchBtn.click();
    expect(status.getText()).toMatch('200');
    expect(data.getText()).toMatch(/Hello, \$http!/);
  });

// Commented out due to flakes. See https://github.com/angular/angular.js/issues/9185
// it('should make a JSONP request to angularjs.org', function() {
//   sampleJsonpBtn.click();
//   fetchBtn.click();
//   expect(status.getText()).toMatch('200');
//   expect(data.getText()).toMatch(/Super Hero!/);
// });

  it('should make JSONP request to invalid URL and invoke the error handler',
      function() {
    invalidJsonpBtn.click();
    fetchBtn.click();
    expect(status.getText()).toMatch('0');
    expect(data.getText()).toMatch('Request failed');
  });
</file>
</example>
     */
    function $http(requestConfig) {

      if (!angular.isObject(requestConfig)) {
        throw minErr('$http')('badreq', 'Http request configuration must be an object.  Received: {0}', requestConfig);
      }

      if (!isString(requestConfig.url)) {
        throw minErr('$http')('badreq', 'Http request configuration url must be a string.  Received: {0}', requestConfig.url);
      }

      var config = extend({
        method: 'get',
        transformRequest: defaults.transformRequest,
        transformResponse: defaults.transformResponse,
        paramSerializer: defaults.paramSerializer
      }, requestConfig);

      config.headers = mergeHeaders(requestConfig);
      config.method = uppercase(config.method);
      config.paramSerializer = isString(config.paramSerializer) ?
        $injector.get(config.paramSerializer) : config.paramSerializer;

      var serverRequest = function(config) {
        var headers = config.headers;
        var reqData = transformData(config.data, headersGetter(headers), undefined, config.transformRequest);

        // srcase(header) === 'content-type') {
                delete headers[header];
            }
          });
        }

        if (isUndefined(config.withCredentials) && !isUndefined(defaults.withCredentials)) {
          config.withCredentials = defaults.withCredentials;
        }

        // send request
        return sendReq(config, reqData).then(transformResponse, transformResponse);
      };

      var chain = [serverRequest, undefined];
onseError) {
          chain.push(interceptor.response, interceptor.responseError);
        }
      });

      while (chain.length) {
        var thenFn = chain.shift();
        var rejectFn = chain.shift();

        promie.data, response.status, re.data, response.status, response.headers, config);
          });
          return promise;
        };
      } else {
        promise.success = $httpMinErrLegacyFn('se);
   rocessefunction for merged headers
        return executeHeaderFns(reqHeaders, shallowCopy(config));
      }
    }

    $http.pendingRequests = [];

    /**
     * @ngdoc method
     * @name $http#get
     *
     * @description
     * Shortcut method to perform `GET` request.
     *
     * @param {string} url Relative or absolute URL specifying the destination of the request
     * @param {Object=} config Optional configuration object
     * @returns {HttpPromise} Future object
     */

    /**
     * @ngdoc method
     * @name $http#delete
     *
     * @description
     * Shortcut method to perform `DELETE` request.
     *
     * @param {string} url Relative or absolute URL specifying the destination of the request
     * @param {Object=} config Optional configuration object
     * @returns {HttpPromise} Future object
     */

    /**
     * @ngdoc method
     * @name $http#head
     *
     * @description
     * Shortcut method to perform `HEAD` request.
     *
     * @param {string} url Relative or absolute URL specifying the destination of the request
     * @param {Object=} config Optional configuration object
     * @returns {HttpPromise} Future object
     */

    /**
     * @ngdoc method
     * @name $http#jsonp
     *
     * @description
     * Shortcut method to perform `JSONP` request.
     *
     * @param {string} url Relative or absolute URL specifying the destination of the request.
     *                     The name of the callback should be the string `JSON_CALLBACK`.
     * @param {Object=} config Optional configuration object
     * @returns {HttpPromise} Future object
     */
    createShortMethods('get', 'delete', 'head', 'jsonp');

    /**
     * @ngdoc method
     * @name $http#post
     *
     * @description
     * Shortcut method to perform `POST` request.
     *
     * @param {string} url Relative or absolute URL specifying the destination of the request
     * @param {*} data Request content
     * @param {Object=} config Optional configuration object
     * @returns {HttpPromise} Future object
     */

    /**
     * @ngdoc method
     * @name $http#put
     *
     * @description
     * Shortcut method to perform `PUT` request.
     *
     * @param {string} url Relative or absolute URL specifying the destination of the request
     * @param {*} data Request content
     * @param {Object=} config Optional configuration object
     * @returns {HttpPromise} Future object
     */

     /**
      * @ngdoc method
      * @name $http#patch
      *
      * @description
      * Shortcut method to perform `PATCH` request.
      *
      * @param {string} url Relative or absolute URL specifying the destination of the request
      * @param {*} data Request content
      * @param {Object=} config Optional configuration object
      * @returns {HttpPromise} Future object
      */
    createShortMethodsWithData('post', 'put', 'patch');

        /**
         * @ngdoc property
         * @name $http#defaults
         *
         * @description
         * Runtime equivalent of the `$httpProvider.defaults` property. Allows configuration of
         * default headers, withCredentials as well as request and response transformations.
         *
         * See "Setting HTTP Headers" and "Transforming Requestfig || method: name,
            url: url,
            data: data
          }));
        };
      });
    }


    /**
     * Makes the request.
     *
     * !!! ACCESSES CLOSURE VARS:
     * $httpBackend, defaults, $log, $rootScope, defaultCache, $http.pendingRequests
     */
    function sendReq(config, reqData) {
      var deferred = $q.defer(),
          promise = deferred.promise,
          cache,
          cachedResp,
          reqHeaders = config.headers,
          url = buildUrl(config.url, config.paramSerializer(config.params));

      $http.pendingRequests.push(config);
      promise.then(removePendingReq, removePendingReq);


      if ((config.cache || defaults.cache) && config.cache !== false &&
          (config.method === 'GET' || config.method === 'JSONP')) {
        cache = isObject(config.cache) ? config.cache
              : isObject(defaults.cache) ? defaults.cache
              : defaultCache;
      }

      if (cache) {
        cachedResp = cache.get(url);
        if (isDefined(cachedResp)) {
          if (isPromiseLike(cachedResp)) {
            // cached request has already been sent, but there is no response yet
            cachedResp.then(resolvePromiseWithResult, resolvePromiseWithResult);
          } else {
            // serving from cache
            if (isArray(cachedResp)) {
              resolvePromise(cachedResp[1], cachedResp[0], shallowCopy(cachedResp[2]), cachedResp[3]);
            } else {
              resolvePromise(cachedResp, 200, {}, 'OK');
            }
          }
        } else {
          // put the promise for the non-transformed response into cache as a placeholder
          cache.put(url, promise);
        }
      }


      // if we won't have the response in cache, set the xsrf headers and
      // send the request to the backend
      if (isUndefined(cachedResp)) {
        var xsrfValue = urlIsSameOrigin(config.url)
            ? $$cookieReader()[config.xsrfCookieName || defaults.xsrfCookieName]
            : undefined;
        if (xsrfValue) {
          reqHeaders[(config.xsrfHeaderName || defaults.xsrfHeaderName)] = xsrfValue;
        }

        $httpBackend(config.method, url, reqData, done, reqHeaders, config.timeout,
            config.withCredentials, config.responseType);
      }

      return promise;


      /**
       * Callback registered to $httpBackend():
       *  - caches the re      resolveHttpPromise();
          if (!$rootScope.$$phase) $rootScope.$apply();
        }
      }


      /**
       * Resolves the raw $http promise.
       */
      function resolvePromise(response, status, headers, statusText) {
        //status: HTTP response status code, 0, -1 (aborted by timeout / promise)
        status = status >= -1 ? status : 0;

        (isSuccess(status) ? deferred.resolve : deferred.reject)({
          data: response,
          status: status,
          headers: headersGresolveendingRequests.indexOf(config);
        if (idx !== -1) $http.pendingRequests.splice(idx, 1);
      }
    }


    function buildUrl(url, serializedParams) {
      if (serializedParams.length > 0) {
        url += ((url.indexOf('?') == -1) ? '?' : '&') + serializedParams;
      }
      return url;
    }
  }];
}

/**
 * @ngdoc service
 * @name $xhrFactory
 *
 * @description
 * Factory function used to create XMLHttpRequest objects.
 *
 * Replace or decorate this service to create your own custom XMLHttpRequest objects.
 *
 * ```
 * angular.module('myApp', [])
 * .factory('$xhrFactory', function() {
 *   return function createXhr(method, url) {
 *     return new window.XMLHttpRequest({mozSystem: true});
 *   };
 * });
 * ```
 *
 * @param {string} unction() {
    return function createXhr() {
      return new window.XMLHttpRequest();
    };
  };
}

/**
 * @ngdoc service
 * @name $httpBackend
 * @requires $window
 * @requires $document
 * @requires $xhrFactory
 *
 * @description
 * HTTP backend used by the {@link ng.$http service} that delegates to
 * XMLHttpRequest object or JSONP and deals with browser incompatibilities.
 *
 * You should never need to use this service directly, instead use the higher-level abstractions:
 * {@link ng.$http $http} or {@link ngResource.$resource $resource}.
 *
 * During testing this implementation is seHttpBackend($browser, $xhrFactory, $browser.defer, $window.angular.callbacks, $document[0]);
  }];
}

function createHttpBackend($browser, createXhr, $browserDefer, callbacks, rawDocument) {
  // TODO(vojta): fix the signature
  return function(method, url, post, callback, headers, timeout, withCredentials, responseType) {
    $browser.$$incOutstandingRequestCount();
    url = url || $browser.url();

    if (lowercase(method) == 'jsota) {
        callbacks[callbackId].data = data;
        callbacks[callbackId].called = true;
      };

      var jsonpDallback, status, callbacks[callbackId].data, "", text);
        callbacks[callbackId] = noop;
      });
    } else ey) {
        if (isDeatus,
            response,spec.whatwg.org/#concept-network-error
        completeRequest(callback, -1, null, null, '');
      };

      xhr.onerror = requestError;
      xhr.onabort = requestError;

      if (withCredentials) {
        xhr.withCredentials = true;
      }

      if (responseType) {
        try {
          xhr.responseType = responseType;
        } catch (e) {
          // WebKit added support for the json responseType value on 09/03/2013
          // https://bugs.webkit.org/show_bug.cgi?id=73648. Versions of Safari prior to 7 are
          // known to throw when setting the value "json" as the response type. Other older
          // browsers implementing the responseType
          //
          // The json response type can be ignored if not supported, because JSON payloads are
          // parsed on the client-side regardless.
          if (responseType !== 'json') {
            throw e;
          }
        }
      }

      xhr.send(isUndefined(post) ? null : post);
    }

    if (timeout > 0) {
      var timeoutId = $browserDefer(timeoutReques  }


    function timeoutRequest() {
      jsonpDone && jsonpDone();
      xhr && xhr.abort();
    }

    function completeRequest(callback, status, response, headersString, statusText) {
      // cancel timeout and subsequent timeout promise resolution
      if (isDefined(timeoutId)) {
        $browserDefer.cancel(timeoutId);
      }
      jsonpDone = xhr = null;

      callback(status, renerFn(script, "error", callback);
    rawDocument.body.appendChild(script);
    return callback;
  }
}

var $interpns when a trusted value is " + err) {
  return $interpolateMinErr('interr', "Can't interpolate: {0}\n{1}", text, err.toString());
};

/**
 * @ngdoc provider
 * @name $interpolateProvider
 *
 * @description
 *
 * Used for configuring the interpolation markup. Defaults to `{{` and `}}`.
 *
 * @example
<example name="custom-interpolation-markup" module="customInterpolationApp">
<file name="index.html">
<script>
  var customInterpolationApp = angular.module('customInterpolationApp', []);

  customInterpolationApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('//');
    $interpolateProvider.endSymbol('//');
  });


  customInterpolationApp.controller('DemoController', function() {
      this.label = "This binding is brought you by // interpolation symbols.";
  });
</script>
<div ng-controller="DemoController as demo">
    //demo.label//
</div>
</file>
<file name="protractor.js" type="protractor">
  it('should interpolate binding with custom symbols', function() {
    expect(element(by.binding('demo.label')).getText()).toBe('This binding is brought you by // interpolation symbols.');
  });
</file>
</example>
 */
function $InterpolateProvider() {
  var startSymbol = '{{';
  var endSymbol = '}}';

  /**
   * @ngdoc method
   * @name $interpolateProvider#startSymbol
   * @description
   * Symbol to denote start of expression in the interpolated string. Defaults to `{{`.
   *
   * @param {string=} value new value to set the starting symbol to.
   * @returns {string|self} Returns the symbol when used as getter and self if used as setter.
   */
  this.startSymbol = function(value) {
    if (value) {
      startSymbol = value;
      return this;
    } else {
      return startSymbol;
    }
  };

  /**
   * @ngdoc method
   * @name $interpolateProvider#endSymbol
   * @description
   * Symbol to denote the end of expression in the interpolated string. Defaults to `}}`.
   *
   * @param {string=} value new value to set the ending symbol to.
   * @returns {str (value) {
      endSymbol = value;
      return this;
    } else {
      return endSymbol;
    }
  };


  this.$get = ['$parse', '$exceptionHandler', '$sce', function($parse, $exceptionHandler, $sce) {
    var startSymbolLength = startSymbol.length,
        endSymbolLength = endSymbol.length,
        escapedStartRegexp = new RegExp(startSymbol.replace(/p(endrn text.replace(escapedStartRegexp, startSymbol).
        replace(escapedEndRegexp, endSymbol);
    }

    function stringify(value) {
      if (value == null) { // null || undefined
        return '';
      }
      switch (typeof value) {
        case 'string':
          break;
        case 'number':
          value = '' + value;
          break;
        default:
          value = toJson(value);
      }

      return value;
    }

    /**
     * @ngdoc service
     * @name $interpolate
     * @kind function
     *
     * @requires $parse
     * @requires $sce
     *
     * @description
     *
     * Compiles a string with markup into an interpolation function. This service is used by the
     * HTML {@link ng.$compile $compile} service for data binding. See
     * {@link ng.$interpolateProvider $interpolateProvider} for configuring the
     * interpolation markup.
     *
     *
     * ```js
     *   var $interpolate = ...; // injected
     *   var exp = $interpolate('Hello {{name | uppercase}}!');
     *   expect(exp({name:'Angular'})).toEqual('Hello ANGULAR!');
     * ```
     *
     * `$interpolate` takes an optional fourth argument, `allOrNothing`. If `allOrNothing` is
     * `true`, the interpolation function will return `undefined` unless all embedded expressions
     * evaluate to a value other than `undefined`.
     *
     * ```js
     *   var $interpolate = ...; // injected
     *   var context = {greeting: 'Hello', name: undefined };
     *
     *   // default "forgiving" mode
     *   var exp = $interpolate('{{greeting}} {{name}}!');
     *   expect(exp(context)).toEqual('Hello !');
     *
     *   // "allOrNothing" mode
     *   exp = $interpolate('{{greeting}} {{name}}!', false, null, true);
     *   expect(exp(context)).toBeUndefined();
     *   context.name = 'Angular';
     *   expect(exp(context)).toEqual('Hello Angular!');
     * ```
     *
     * `allOrNothing` is useful for interpolating URLs. `ngSrc` and `ngSrcset` use this behavior.
     *
     * ####Escaped Interpolation
     * $interpolate provides a mechanism for escaping interpolation markers. Start and end markers
     * can be escaped by preceding each of their characters with a REVERSE SOLIDUS U+005C (backslash).
     * It will be rendered as a regular start/end marker, and will not be interpreted as an expression
     * or binding.
     *
     * This enables web-servers to prevent script injection attacks and defacing attacks, to some
     * degree, while also enabling code examples to work without relying on the
     * {@link ng.directive:ngNonBindable ngNonBindable} directive.
     *
     * **For security purposes, it is strongly encouraged that web servers escape user-supplied data,
     * replacing angle brackets (&lt;, &gt;) with &amp;lt; and &amp;gt; respectively, and replacing all
     * interpolation start/end markers with their escaped counterparts.**
     *
     * Escaped interpolation markers are only replaced with the actual interpolation markers in rendered
     * output when the $interpolate service processes the text. So, for HTML elements interpolated
     * by {@link ng.$compile $compile}, or otherwise interpolated with the `mustHaveExpression` parameter
     * set to `true`, the interpolated text must contain an unescaped interpolation expression. As such,
     * this is typically useful only when user-data is used in rendering a template from the server, or
     * when otherwise untrusted data is used by a directive.
     *
     * <example>
     *  <file name="index.html">
     *    <div ng-init="username='A user'">
     *      <p ng-init="apptitle='Escaping demo'">{{apptitle}}: \{\{ username = "defaced value"; \}\}
     *        </p>
     *      <p><strong>{{username}}</strong> attempts to inject code which will deface the
     *        application, but fails to accomplish their task, because the server has correctly
     *        escaped the interpolation start/end markers with REVERSE SOLIDUS U+005C (backslash)
     *        characters.</p>
     *      <p>Instead, the result of the attempted script injection is visible, and can be removed
     *        from the database by an administrator.</p>
     *    </div>
     *  </file>
     * </example>
     *
     * @knownIssue
     * It is currently not possible for an interpolated expression to contain the interpolation end
     * symbol. For example, `{{ '}}' }}` will be incorrectly interpreted as `{{ ' }}` + `' }}`, i.e.
     * an interpolated expression consisting of a single-quote (`'`) and the `' }}` string.
     *
     * @param {string} text The text with markup to interpolate.
     * @param {boolean=} mustHaveExpression if set to true then the interpolation string must have
     *    embedded expression in order to return an interpolation function. Strings with no
     *    embedded expression will return null for the interpolation function.
     * @param {string=} trustedContext when provided, the returned function passes the interpolated
     *    result through {@link ng.$sce#getTrusted $sce.getTrusted(interpolatedResult,
     *    trustedContext)} before returning it.  Refer to the {@link ng.$sce $sce} service that
     *    provides Strict Contextual Escaping for details.
     * @param {boolean=} allOrNothing if `true`, then the returned function returns undefined
     *    unless all embedded expressions evaluate to a value other than `undefined`.
     * @returns {function(context)} an interpolation function which is used to compute the
     *    interpolated string. The function has these parameters:
     *
     * - `context`: evaluation context for all expressions embedded in the interpolated text
     */
    function $interpolate(text, mustHaveExpression, trustedContext, allOrNothing) {
      allOrNothing = !!allOrNothing;
      var startIndex,
          endIndex,
          index = 0,
          expressions = [],
          parseFns = [],
          textLength = text.length,
          exp,
          concat = [],
          expressionPositions = [];

      while (index < textLength) {
        if (((startIndex = text.indexOf(startSymbol, index)) != -1) &&
             ((endIndex = text.indexOf(endSymbol, startIndex + startSymbolLength)) != -1)) {
          if (index !== startIndex) {
            concat.push(unescapeText(text.substring(index, startIndex)));
          }
          exp = text.substring(startIndex + startSymbolLength, endIndex);
          expressions.push(exp);
          parseFns.push($parse(exp, parseStringifyInterceptor));
          index = endIndex + endSymbolLength;
          expressionPositions.push(concat.length);
          concat.push('');
        } else {
          // we did not find an interpolation, so we have to add the remainder to the separators array
          if (index !== textLength) {
            concat.push(unescapeText(text.substring(index)));
          }
          break;
        }
      }

      // Concatenating expressions makes it hard to reason about whether some combination of
      // concatenated values are unsafe to use and could easily lead to XSS.  By requiring that a
      // single expression be used for iframe[src], object[src], etc., we ensure that the value
      // that's used is assigned or constructed by some JS code somewhere that is more testable or
      // make it obvious that you bound the value to some user controlled value.  This helps reduce
      // the load when auditing for XSS issues.
      if (trustedContext && concat.length > 1) {
          $interpolateMinErr.throw  concat[expressionPositiext ?
            $sce.g) {
              $exceptionHandler($interpolateMinErr.interr(text, err));
            }

          }, {
          // all of these properties are undocumented for now
          exp: text, //just for compatibility with regular watchers created via $watch
          expressions: expressions,
          $$watchDelegate: s ? lastValue : currValue, scope);
       } catch (err) {
          $exceptionHandler($interpolateMinErr.interr(text, err));
        }
      }
    }


    /**
     * @ngdoc method
     * @name $interpolate#startSymbol
     * @description
     * Symbol to denote the start of expression in the interpolated string. Defaults to `{{`.
     *
     * Use {@link ng.$interpolateProvider#startSymbol `$interpolateProvider.startSymbol`} to change
     * the symbol.
     *
     * @returns {string} start symbol.
     */
    $interpolate.startSymbol = function() {
      return startSymbol;
    };


    /**
     * @ngdoc method
     * @name $interpolate#endSymbol
     * @description
     * Symbol to denote the end of expression in the interpolated string. Defaults to `}}`.
     *
     * Use {@link ng.$interpolateProvider#endSymbol `$interpolateProvider.endSymbol`} to chang {string} end symbol.
     */
    $interpolate.endSymbol = function() {
      return endSymbol;
    };

    return $interpolate;
  }];
}

function $IntervalProvider() {
  this.$get = ['$rootScope', '$window', '$q', '$$q',
       function($rootScope,   $window,   $q,   $$q) {
    var intervals = {};


     /**
      * @ngdoc service
      * @name $interval
      *
      * @description
      * Angular's wrapper for `window.setInterval`. The `fn` function is executed every `delay`
      * milliseconds.
      *
      * The return value of registering an interval function is a promise. This promise will be
      * notified upon each tick of the interval, and will be resolved after `count` iterations, or
      * run indefinitely if `count` is not defined. The value of the notification will be the
      * number of iterations that have run.
      * To cancel an interval, call `$interval.cancel(promise)`.
      *
      * In tests you can use {@link ngMock.$interval#flush `$interval.flush(millis)`} to
      * move forward by `millis` milliseconds and trigger any functions scheduled to run in that
      * time.
      *
      * <div class="alert alert-warning">
      * **Note**: Intervals created by this service must be explicitly destroyed when you are finished
      * with them.  In particular they are not automatically destroyed when a controller's scope or a
      * directive's element are destroyed.
      * You should take this into consideration and make sure to always cancel the interval at the
      * appropriate moment.  See the example below for more details on how and when to do this.
      * </div>
      *
      * @param {function()} fn A function that should be called repeatedly.
      * @param {number} delay Number of milliseconds between each function call.
      * @param {number=} [count=0] Number of times to repeat. If not set, or 0, will repeat
      *   indefinitely.
      * @param {boolean=} [invokeApply=true] If set to `false` skips model dirty checking, otherwise
      *   will invoke `fn` within the {@link ng.$rootScope.Scope#$apply $apply} block.
      * @param {...*=} Pass additional parameters to the executed function.
      * @returns {promise} A promise which will be notified on each iteration.
      *
      * @example
      * <example module="intervalExample">
      * <file name="index.html">
      *   <script>
      *     angular.module('intervalExample', [])
      *       .controller('ExampleController', ['$scope', '$interval',
      *         function($scope, $interval) {
      *           $scope.format = 'M/d/yy h:mm:ss a';
      *           $scope.blood_1 = 100;
      *           $scope.blood_2 = 120;
      *
      *           var stop;
      *           $scope.fight = function() {
      *             // Don't start a new fight if we are already fighting
      *             if ( angular.isDefined(stop) ) return;
      *
      *             stop = $interval(function() {
      *               if ($scope.blood_1 > 0 && $scope.blood_2 > 0) {
      *                 $scope.blood_1 = $scope.blood_1 - 3;
      *                 $scope.blood_2 = $scope.blood_2 - 4;
      *               } else {
      *                 $scope.stopFight();
      *               }
      *             }, 100);
      *           };
      *
      *           $scope.stopFight = function() {
      *             if (angular.isDefined(stop)) {
      *               $interval.cancel(stop);
      *               stop = undefined;
      *             }
      *           };
      *
      *           $scope.resetFight = function() {
      *             $scope.blood_1 = 100;
      *             $scope.blood_2 = 120;
      *           };
      *
      *           $scope.$on('$destroy', function() {
      *             // Make sure that the interval is destroyed too
      *             $scope.stopFight();
      *           });
      *         }])
      *       // Register the 'myCurrentTime' directive factory method.
      *       // We inject $interval and dateFilter service since the factory method is DI.
      *       .directive('myCurrentTime', ['$interval', 'dateFilter',
      *         function($interval, dateFilter) {
      *           // return the directive link function. (compile function not needed)
      *           return function(scope, element, attrs) {
      *             var format,  // date format
      *                 stopTime; // so that we can cancel the time updates
      *
      *             // used to update the UI
      *             function updateTime() {
      *               element.text(dateFilter(new Date(), format));
      *             }
      *
      *             // watch the expression, and update the UI on change.
      *             scope.$watch(attrs.myCurrentTime, function(value) {
      *               format = value;
      *               updateTime();
      *             });
      *
      *             stopTime = $interval(updateTime, 1000);
      *
      *             // listen on DOM destroy (removal) event, and cancel the next UI update
      *             // to prevent updating time after the DOM element was removed.
      *             element.on('$destroy', function() {
      *               $interval.cancel(stopTime);
      *             });
      *           }
      *         }]);
      *   </script>
      *
      *   <div>
      *     <div ng-controller="ExampleController">
      *       <label>Date format: <input ng-model="format"></label> <hr/>
      *       Current time is: <span my-current-time="format"></span>
      *       <hr/>
      *       Blood 1 : <font color='red'>{{blood_1}}</font>
      *       Blood 2 : <font color='red'>{{blood_2}}</font>
      *       <button type="button" data-ng-click="fight()">Fight</button>
      *       <button type="button" data-ng-click="stopFight()">StopFight</button>
      *       <button type="button" data-ng-click="resetFight()">resetFight</button>
      *     </div>
      *   </div>
      *
      * </file>
      * </example>
      */
    function interval(fn, delay, count, invokeApply) {
      var hasParams = arguments.length > 4,
          args = hasParams ? sliceArgs(arguments, 4) : [],
          setInterval = $window.setInterval,
          clearInterval = $window.clearInterval,
          iteration = 0,
          skipApply = (isDefined(invokeApply) && !invokeApply),
          deferred = (skipApply ? $$q : $q).defer(),
          promise = deferred.promise;

      count = isDefined(count) ? count : 0;

      promise.then(null, null, (!hasParams) ete intervals[promise.$$intervalId];
        }

        if (!skipApply) $rootScope.$apply();

      }, delay);

      intervals[promise.$$intervalId] = deferred;

      return promise;
    }


     /**
      * @ngdoc method
      * @name $interval#cancel
      *
      * @description
      * Cancels a task associated with the `promise`.
      *
      * @param {Promise=} promise returned by the `$interval` function.
      * @r       delete intervals[promise.$$intervalId];
        return true;
      }
      return false;
    };

    return interval;
  }];
}

/**
 * @ngdoc service
 * @name $locale
 *
 * @description
 * $locale service provides localization rules for various Angular components. As of right now the
 * only public api is:
 *
 * * `id` – `{string}` – locale id formatted as `languageId-countryId` (e.g. `en-us`)
 */

var PATH_MATCH = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
    DEFAULT_PORTS = {'http': 80, 'https': 443, 'ftp': 21};
var $locationMinErr = minErr('$location');


/**
 * Encode path using encotrl$$path && locationObj.$$path.charAt(0) != '/') {
    locationObj.$$path = '/' + locationObj.$$path;
  }
}


/**
 *
 * @param {string} begin
 * @param {string} whole
 * @returns {string} returns texgiion stripHash(url) {
  var index = url.indexOf('#');
  return index == -1 ?|#$/, '$1');
}


function stripFile(url) {
  returnport) */
function serverBase(url) {
  return url.substring(0, url.indexOf('/', url.indexOf('//') + 2));
}


/**
 * LocationHtml5Url represents an url
 * This object is exposed as $location service when HTML5 mode is enabled and supported
 *
 * @constructor
 * @param {string} appBase application base URL
 * @param {string} appBaseNoFile application base URL stripped of any filename
 * @param {string} basePrefix url path prefix
 */
function LocationHtml5Url(appBase, appBaseNoFile, basePrefix) {
  this.$$html5 = true;
  basePrefix = basePrefix || '';
  parseAbsoluteUrl(appBase, this);


  /**
   * Parse given html5 (reAppUrl(pathUrl, this);

    if (!this.$$path) {
      this.$$path = '/';
    }

    this.$$coh : '') + hash;
    this.$$absUrl = appBaseNoFile + this.$$url.substr(1); // first char is always '/'
  };

  this.$$parseLinkUrl = function(url, relHref) {
    if (relHref && relHref[0] === '#') {
      // special case for links to hash fragments:
      // keep the old url and only replace the hash fragment
      this.hash(relHref.slice(1));
      return true;
    }
    var appUrl, prevAppUrl;
    var rewrittenUrl;

    if (isDefined(appUrl = beginsWith(appBase, url))) {
      prevAppUrl = appUrl;
      if (isDefined(appUrl = beginsWith(basePrefix, appUrl))) {
        rewrittenUrl = appBaseNoFile + (beginsWith('/', appUrl) || appUrl);
      } else {
        rewrittenUrl = appBase + prevAppUrl;
      }
    } else if (isDefined(appUrl = beginsWith(appBaseNoFile, url))) {
      rewrittenUrl = appBaseNoFile + appUrl;
    } else if (appBaseNoFile == url + '/') {
      rewrittenUrl = appBaseNoFile;
    }
    if (rewrittenUrl) {
      this.$$parse(rewrittenUrl);
    }
    return !!rewrittenUrl;
  };
}


/**
 * LocationHashbangUrl represents url
 * This object is exposed as $location service when developer doesn't opt into html5 mode.
 * It also serves as the base class for html5 mode fallback on legacy browsers.
 *
 * @constructor
 * @param {string} appBase application base URL
 * @param {string} appBaseNoFile application base URL stripped of any filename
 * @param {string} hashPrefix hashbang prefix
 */
function LocationHashbangUrl(appBase, appBaseNoFile, hashPrefix) {

  parseAbsoluteUrl(appBase, this);


  /**
   * Parse given hashbang url into properties
   * @param {string} url Hashbang url
   * @private
   */
  this.$$parse = function(url) {
    var withoutBaseUrl = beginsWith(appBase, url) || beginsWith(appBaseNoFile, url);
    var withoutHashUrl;

    if (!isUndefined(withoutBaseUrl) && withoutBaseUrl.charAt(0) === '#') {

      // The rest of the url starts with a hash so we have
      // got either a hashbang path or a plain hash fragment
      withoutHashUrl = beginsWith(hashPrefix, withoutBaseUrl);
      if (isUndefined(withoutHashUrl)) {
        // There was no hashbang prefix so we just have a hash fragment
        withoutHashUrl = withoutBaseUrl;
      }

    } else {
      // There was no hashbang path nor hash fragment:
      // If we are in HTML5 mode we use what is left as the path;
      // Otherwise we ignore what is left
      if (this.$$html5) {
        withoutHashUrl = withoutBaseUrl;
      } else {
        withoutHashUrl = '';
        if (isUndefined(withoutBaseUrl)) {
          appBase = url;
          this.replace();
        }
      }
    }

    parseAppUrl(withoutHashUrl, this);

    this.$$path = removeWindowsDriveName(this.$$path, withoutHashUrl, appBase);

    this.$$compose();

    /*
     * In Windows, on an anchor node on documents loaded from
     * the filesystem, the browser will return a pathname
     * prefixed with the drive name ('/C:/path') when a
     * pathname without a drive is set:
     *  * a.setAttribute('href', '/foo')
     *   * a.pathname === '/C:/foo' //true
     *
     * InsideindowsFilePathExp.exec(path);
      return firstPathSegmentMatch ? firstPathSegmentMatch[1] : path;
    }
'?' + search : '') + hash;ash(appBase) == stripHash(url)) {
      this.$$parse(url);
      return true;
    }
    return false;
  };
}


/**
 * LocationHashbangUrl represents url
 * This object is exposed as $location service when html5 history api is enabled but the browser
 * does not support it.
 *
 * @constructor
 * @param {string} appBase application base URL
 * @param {string} appBaseNoFile application base URL stripped of any filename
 * @param {string} hashPrefix hashbang prefix
 */
function LocationHashbangInHtml5Url(appBase, appBaseNoFile, haile;
    }
    if (redoes not reload page because of removal of '#'
    this.$$absUrl = appBase + hashPrefix + this.$$url;
  };

}


var locationPrototype = {

  /**
   * Are we in html5 mode?
   * @private
   */
  $$html5: false,

  /**
   * Has any change been replacing?
   * @private
   */
  $$replace: false,

  /**
   * @ngdoc method
   * @name $location#absUrl
   *
   * @description
   * This method is getter only.
   *
   * Return full url representation with all segments encoded according to rules specified in
   * [RFC 3986](http://www.ietf.org/rfc/rfc3986.txt).
   *
   *
   * ```js
   * // given url http://example.com/#/some/path?foo=bar&baz=xoxo
   * var absUrl = $location.absUrl();
   * // => "http://example.com/#/some/path?foo=bar&baz=xoxo"
   * ```
   *
   * @return {string} full url
   */
  absUrl: locationGetter('$$absUrl'),

  /**
   * @ngdoc method
   * @name $location#url
   *
   * @description
   * This method is getter / setter.
   *
   * Return url (e.g. `/path?a=b#hash`) when called without any parameter.
   *
   * Change path, search and hash, when called with parameter and return `$location`.
   *
   *
   * ```js
   * // given url http://example.com/#/some/path?foo=bar&baz=xoxo
   * var url = $location.url();
   * // => "/some/path?foo=bar&baz=xoxo"
   * ```
   *
   * @parammatch[1] || url === '') this.search(match[3] || '');
    this.hash(match[5] || '');

    return this;
  },

  /**
   * @ngdoc method
   * @name $location#protocol
   *
   * @description
   * This method is getter only.
   *
   * Return protocol of current url.
   *
   *
   * ```js
   * // given url http://example.com/#/some/path?foo=bar&baz=xoxo
   * var protocol = $location.protocol();
   * // => "http"
   * ```
   *
   * @return {string} protocol of current url
   */
  protocol: locationGetter('$$protocol'),

  /**
   * @ngdoc method
   * @name $location#host
   *
   * @description
   * This method is getter only.
   *
   * Return host of current url.
   *
   * Note: compared to the non-angular version `location.host` which returns `hostname:port`, this returns the `hostname` portion only.
   *
   *
   * ```js
   * // given url http://example.com/#/some/path?foo=bar&baz=xoxo
   * var host = $location.host();
   * // => "example.com"
   *
   * // given url http://user:password@example.com:8080/#/some/path?foo=bar&baz=xoxo
   * host = $location.host();
   * // => "example.com"
   * host = location.host;
   * // => "example.com:8080"
   * ```
   *
   * @return {string} host of current url.
   */
  host: locationGetter('$$host'),

  /**
   * @ngdoc method
   * @name $location#port
   *
   * @description
   * This method is getter only.
   *
   * Return port of current url.
   *
   *
   * ```js
   * // given url http://example.com/#/some/path?foo=bar&baz=xoxo
   * var port = $location.port();
   * // => 80
   * ```
   *
   * @return {Number} port
   */
  port: locationGetter('$$port'),

  /**
   * @ngdoc method
   * @name $location#path
   *
   * @description
   * This method is getter / setter.
   *
   * Return path of current url when called without any parameter.
   *
   * Change path when called with parameter and return `$location`.
   *
   * Note: Path should always begin with forward slash (/), this method will add the forward slash
   * if it is missing.
   *
   *
   * ```js
   * // given url http://example.com/#/some/path?foo=bar&baz=xoxo
   * var path = $location.path();
   * // => "/some/path"
   * ```
   *
   * @param {(string|number)=} path New path
   * @return {(string|object)} path if called w   path = path !== null ? path.toString() : '';
    return path.charAt(0) == '/' ? path : '/' + path;
  }),

  /**
   * @ngdoc method
   * @name $location#search
   *
   * @description
   * This method is getter / setter.
   *
   * Return search part (as object) of current url when called without any parameter.
   *
   * Change search part when called with parameter and return `$location`.
   *
   *
   * ```js
   * // given url http://example.com/#/some/path?foo=bar&baz=xoxo
   * var searchObject = $location.search();
   * // => {foo: 'bar', baz: 'xoxo'}
   *
   * // set foo to 'yipee'
   * $location.search('foo', 'yipee');
   * // $location.search() => {foo: 'yipee', baz: 'xoxo'}
   * ```
   *
   * @param {string|Object.<string>|Object.<Array.<string>>} search New search params - string or
   * hash object.
   *
   * When called with a single argument the method acts as a setter, setting the `search` component
   * of `$location` to the specified value.
   *
   * If the argument is a hash object containing an array of values, these values will be encoded
   * as duplicate search parameters in the url.
   *
   * @param {(string|Number|Array<string>|boolean)=} paramValue If `search` is a string or number, then `paramValue`
   * will override only a single search property.
   *
   * If `paramValue` is an array, it will override the property of the `search` component of
   * `$location` specified via the first argument.
   *
   * If `paramValue` is `null`, the property specified via the first argument will be deleted.
   *
   * If `paramValue` is `true`, the property specified via the first argument will be added with no
   * value nor trailing equal sign.
   *
   * @return {Object} If called with no arguments returns the parsed `sea          this.$$search[search] = paramValue;
        }
    }

    this.$$compose();
    return this;
  },

  /**
   * @ngdoc method
   * @name $location#hash
   *
   * @description
   * This method is getter / setter.
   *
   * Returns the hash fragment when called without any parameters.
   *
   * Changes the hash fragment when called with a parameter and returns `$location`.
   *
   *
   * ```js
   * // given url http://example.com/#/some/path?foo=bar&baz=xoxo#hashValue
   * var hash = $location.hash();
   * // => "hashValue"
   * ```
   *
   * @param {(stringash: locationGetterSetter('$$hash', function(hash) {
    return hash !== null ? hash.toString() : '';
  }),

  /**
   * @ngdoc method
   * @name $location#replace
   *
   * @description
   * If called, all changes to $location during the currnstead of adding a new one.
   */
  replace: function() {
    this.$$replace = true;
    return this;
  }
};

forEach([LocationHashbangInHtml5Url, LocationHashbangUrl, LocationHtml5Url], function(Location) {
  Location.prototype = Object.create(locationPrototype);

  /**
   * @ngdoc method
   * @name $location#state
   *
   * @description
   * This method is getter / setter.
   *
   * Return the history state object when called without any parameter.
   *
   * Change the history state object when called with one parameter and return `$location`.
   * The state object is later passed to `pushState` or `replaceState`.
   *
   * NOTE: This method is supported only in HTML5 mode and only in browsers supporting
   * the HTML5 History API (i.e. methods `pushState` and `replaceState`). If you need to support
   * older browsers (like IE9 or Android < 4.0), don't use this method.
   *
   * @param {object=} state State object for pushState or replaceState
   * @return {object} state
   */
  Location.prototype.state = function(state) {
    if (!arguments.length) {
      return this.$$state;
    }

    if (Location !== LocationHtml5Url || !this.$$html5) {
      throw $locationMinErr('nostate', 'History API state support is available only ' +
        'in HTML5 mode and only in browsers supporting HTML5 History API');
    }
    // The user might modify `stateObject` after invoking `$location.state(stateObject)`
    // but we're changing the $$state reference to $browser.state() during the $digest
    // so the modificas;[property];
    }

    this[property] = preprocess(value);
    this.$$compose();

    return this;
  };
}


/**
 * @ngdoc service
 * @name $location
 *
 * @requires $rootElement
 *
 * @description
 * The $location service parses the URL in the browser address bar (based on the
 * [window.location](https://developer.mozilla.org/en/window.location)) and makes the URL
 * available to your application. Changes to the URL in the address bar are reflected into
 * $location service and changes to $location are reflected into the browser address bar.
 *
 * **The $location service:**
 *
 * - Exposes the current URL in the browser address bar, so you can
 *   - Watch and observe the URL.
 *   - Change the URL.
 * - Synchronizes the URL with the browser when the user
 *   - Changes the address bar.
 *   - Clicks the back or forward button (or clicks a History link).
 *   - Clicks on a link.
 * - Represents the URL object as a set of methods (protocol, host, port, path, search, hash).
 *
 * For more information see {@link guide/$location Developer Guide: Using $location}
 */

/**
 * @ngdoc provider
 * @name $locationProvider
 * @description
 * Use the `$locationProvider` to configure how the application deep linking paths are stored.
 */
function $LocationProvider() {
  var hashPrefix = '',
      html5Mode = {
        enabled: false,
        requireBase: true,
        rewriteLinks: true
      };

  /**
   * @ngdoc method
   * @name $locationProvider#hashPrefix
   * @description
   * @param {string=} prefix Prefix for hash part (containing path and search)
   * @returns {*} current value if used as getter or itself (chaining) if used as setter
   */
  this.hashPrefix = function(prefix) {
    if (isDefined(prefix)) {
      hashPrefix = prefix;
      return this;
    } else {
      return hashPrefix;
    }
  };

  /**
   * @ngdoc method
   * @name $locationProvider#html5Mode
   * @description
   * @param {(boolean|Object)=} mode If boolean, sets `html5Mode.enabled` to value.
   *   If object, sets `enabled`, `requireBase` and `rewriteLinks` to respective values. Supported
   *   properties:
   *   - **enabled** – `{boolean}` – (default: false) If true, will rely on `history.pushState` to
   *     change urls where supported. Will fall back to hash-prefixed paths in browsers that do not
   *     support `pushState`.
   *   - **requireBase** - `{boolean}` - (default: `true`) When html5Mode is enabled, specifies
   *     whether or not a <base> tag is required to be present. If `enabled` and `requireBase` are
   *     true, and a base tag is not present, an error will be thrown when `$location` is injected.
   *     See the {@link guide/$location $location guide for more information}
   *   - **rewriteLinks** - `{boolean}` - (default: `true`) When html5Mode is enabled,
   *     enables/disables url rewriting for relative links.
   *
   * @return.rewriteLinks = mode.rewriteLinks;
      }

      return this;
    } else {
      return html5Mode;
    }
  };

  /**
   * @ngdoc event
   * @name $location#$locationChangeStart
   * @eventType broadcast on root scope
   * @description
   * Broadcasted before a URL will change.
   *
   * This change can be prevented by calling
   * `preventDefault` method of the event. See {@link ng.$rootScope.Scope#$on} for more
   * details about event object. Upon successful change
   * {@link ng.$location#$locationChangeSuccess $locationChangeSuccess} is fired.
   *
   * The `newState` and `oldState` parameters may be defined only in HTML5 mode and when
   * the browser supports the HTML5 History API.
   *
   * @param {Object} angularEvent Synthetic event object.
   * @param {string} newUrl New URL
   * @param {string=} oldUrl URL that was before it was changed.
   * @param {string=} newState New history state object
   * @param {string=} oldState History state object that was before it was changed.
   */

  /**
   * @ngdoc event
   * @name $location#$locationChangeSuccess
   * @eventType broadcast on root scope
   * @description
   * Broadcasted after a URL was changed.
   *
   * The `newState` and `oldState` parameters may be defined only in HTML5 mode and when
   * the browser supports the HTML5 History API.
   *
   * @param {Object} angularEvent Synthetic event object.
   * @param {string} newUrl New URL
   * @param {string=} oldUrl URL that was before it was changed.
   * @param {string=} newState New history state object
   * @param {string=} oldState History state object that was before it was changed.
   */

  this.$get = ['$rootScope', '$browser', '$sniffer', '$rootElement', '$window',
      function($rootScope, $browser, $sniffer, $rootElement, $window) {
    var $location,
        LocationMode,
        baseHref = $browser.baseHref(), // if base[href] is undefined, it defaults to ''
        initialUrl = $browser.url(),
        appBase;

    if (html5Mode.enabled) {
      if (!baseHref && html5Mode.requireBase) {
        throw $locationMinErr('nobase',
          "$location in HTML5 mode requires a <base> tag to be present!");
      }
      appBase = serverBase(initialUrl) + (baseHref || '/');
      LocationMode = $sniffer.history ? LocationHtml5Url : LocationHashbangInHtml5Url;
    } else {
      appBase = stripHash(initialUrl);
      LocationMode = LocationHashbangUrl;
    }
    var appBaseNoFile = stripFile(appBase);

    $location = new LocationMode(appBase, appBaseNoFile, '#' + hashPrefix);
    $location.$$parseLinkUrl(initialUrl, initialUrte fails
        $location.url(oldUrl);
        $location.$$state = oldState;

        throw e;
      }
    }

    $rootElement.on('click', function(event) {
      // TODO(vojta): rewrite link when opening in new tab/window (in legacy browser)
      // currently we open nice url link and redirect then

      if (!html5Mode.rewriteLinks || event.ctrlKey || event.metaKey || event.shiftKey || event.which == 2 || event.button == 2) return;

      var elm = jqLite(event.target);

      // traverse the DOM up to find first A tag
      while (nodeName_(elm[0]) !== 'a') {
        // ignore rewriting if no A tag (reached root element, or no parent - removed from document)
        if (elm[0] === $rootElement[0] || !(elm = elm.parent())[0]) return;
      }

      var absHref = elm.prop('href');
      // get the actual href attribute - see
      // http://msdn.microsoft.com/en-us/library/ie/dd347148(v=vs.85).aspx
      var relHref = elm.attr('href') || elm.attr('xlink:href');

      if (isObject(absHref) && absHref.toString() === '[object SVGAnimatedString]') {
        // SVGAnimatedString.animVal should be identical to SVGAnimatedString.baseVal, unless during
        // an animation.
        absHref = urlResolve(absHref.animVal).href;
      }

      // Ignore when url is started with javascript: or mailto:
      if (IGNORE_URI_REGEXP.test(absHref)) return;

      if (absHref && !elm.attr('target') && !event.isDefaultPrevented()) {
        if ($location.$$parseLinkUrl(absHref, relHref)) {
          // We do a preventDefault for all urls that are part of the angular application,
          // in html5mode and also without, so that we are able to abort navigation without
          // getting double entries in the location history.
          event.preventDefault();
          // update location manually
          if ($location.absUrl() != $browser.url()) {
            $rootScope.$apply();
            // hack to work around FF6 bug 684208 when scenario runner clicks on links
            $window.angular['ff-684208-preventDefault'] = true;
          }
        }
      }
    });


    // rewrite hashbang url <> html5 url
    if (trimEmptyHash($location.absUrl()) != trimEmptyHash(initialUrl)) {
      $browser.url($location.absUrl(), true);
    }

    var initializing = true;

    // update $location when $browser url changes
    $browser.onUrlChange(function(newUrl, newState) {

      if (isUndefined(beginsWith(appBaseNoFile, newUrl))) {
        // If we are navigating outside of the app the  } else {
          initializing = false;
          afterLocationChange(oldUrl, oldState);
        }
      });
      if (!$rootScope.$$phase) $rootScope.$digest();
    });

    // update browser
    $rootScope.$watch(function $locationWatch() {
      var oldUrl = trimEmptyHash($browser.url());
      var newUrl = trimEmptyHash($location.absUrl());
      var oldState = $browser.state();
      var currentReplace = $location.$$replace;
      var urlOrStateChanged = oldUrl !== newUrl ||
        ($location.$$html5 && $sniffer.history && oldState !== $location.$$state); : $location.$$state);
            }
            afterLocationChange(oldUrl, oldState);
          }
        });
      }

      $location.$$replace = false;

      // we don't need to return anything because $.$broadcast('$locationChangeSuccess', $location.absUrl(), oldUrl,
        $location.$$state, oldState);
    }
}];
}

/**
 * @ngdoc service
 * @name $log
 * @requires $window
 *
 * @description
 * Simple service for logging. Default implementation safely writes the message
 * into the browser's console (if present).
 *
 * The main purpose of this service is to simplify debugging and troubleshooting.
 *
 * The default is to log `debug` messages. You can use
 * {@link ng.$logProvider ng.$logProvider#debugEnabled} to change this.
 *
 * @example
   <example module="logExample">
     <file name="script.js">
       angular.module('logExample', [])
         .controller('LogController', ['$scope', '$log', function($scope, $log) {
           $scope.$log = $log;
           $scope.message = 'Hello World!';
         }]);
     </file>
     <file name="index.html">
       <div ng-controller="LogController">
         <p>Reload this page with open console, enter text and hit the log button...</p>
         <label>Message:
         <input type="text" ng-model="message" /></label>
         <button ng-click="$log.log(message)">log</button>
         <button ng-click="$log.warn(message)">warn</button>
         <button ng-click="$log.info(message)">info</button>
         <button ng-click="$log.error(message)">error</button>
         <button ng-click="$log.debug(message)">debug</button>
       </div>
     </file>
   </example>
 */

/**
 * @ngdoc provider
 * @nrgs
      return function(arg1, arg2) {
        logFn(arg1, arg2 == null ? '' : arg2);
      };
    }
  }];
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *     Any commits to this file should be reviewed with security in mind.  *
 *   Changes to this file can potentially create security vulnerabilities. *
 *          An approval from 2 Core members with history of modifying      *
 *                         this file is required.                          *
 *                                                                         *
 *  Does the change somehow allow for arbitrary javascript to be executed? *
 *    Or allows for someone to change the prototype of built-in objects?   *
 *     Or gives undesired access to variables likes document or window?    *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var $parseMinErr = minErr('$parse');

// Sandboxing Angular Expressions
// ------------------------------
// Angular expressions are generally considered safe because these expressions only have direct
// access to `$scope` and locals. However, one can obtain the ability to execute arbitrary JS code by
// obtaining a reference to native JS functions such as the Function constructor.
//
// As an example, consider the following Angular expression:
//
//   {}.toString.constructor('alert("evil JS code")')
//
// This sandboxing technique is not perfect and doesn't aim to be. The goal is to prevent exploits
// against the expression language, but not to prevent exploits that were enabled by exposing
// sensitive JavaScript or browser APIs on Scope. Exposing such objects on a Scope is never a good
// practice and therefore we are not even trying to protect against interaction with an object
// explicitly exposed in this way.
//
// In general, it is not possible to access a Window object from an angular expression unless a
// window or some DOM object that has a reference to window is published onto a Scope.
// Similarly we prevent invocations of function known to be disallowed field in Angular expressions! '
        + 'Expression: {0}', fullExpression);
  }
  return name;
}

function getStringValue(name, fullExpression) {
  // From the JavaScript docs:
  // Property names must be strings. This means that non-string objects cannot be used
  // as keys in an object. Any non-string object, including a number, is typecasted
  // into a string via the toString method.
  //
  // So, to ensure that we are checking the same `name` that JavaScript would use,
  // we cast it to a string, if possible.
  // Doing `name + ''` can cause a repl error if the result to `toString` is not a string,
  // this is, this will handle objects that misbehave.
  name = name + '';
  if (!isString(name)) {
    throw $parseMinErr('iseccst',
        'Ca in Angular expressions is disallowed! Expression: {0}',
          fullExpression);
    }
  }
  return obj;
}

vl, apply or bind in Angular expressions is disallowed! Expression: {0}',
        fullExpression);
    }
  }
}

function ensureSafeAssignContext(obj, fullExpression) {
  if (obj) {
    if (obj === (0).constructor || obj === (false).constructor || obj === ''.constructor ||
        obj === {}.constructor || obj === [].constructor || obj === Function.constructor) {
      throw $parseMinErr('isecaf',
        'Assigning to a constructor is disallowed! Expression: {0}', fullExpression);
    }
  }
}

var OPERATORS = createMap();
forEach('+ - * / % === !== == != < > <= >= && || ! = |'.split(' '), function(operator) { OPERATORS[operator] = true; });
var ESCAPE = {"n":"\n", "f":"\f", "r":"\r", "t":"\t", "///////////////////////


/**
 * @constructor
 */
var Lexer = function(options) {
  this.options = options;
};

Lexer.prototype = {
  constructor: Lexer,

  lex: function(text) {
    this.text = text;
    this.index = 0;
    this.tokens = [];

    while (this.index < this.text.length) {
      var ch = this.text.charAt(this.index);
      if (ch === '"' || ch === "'") {
        this.readString(ch);
      } else if (this.isNumber(ch) || ch === '.' && this.isNumber(this.peek())) {
        this.readNumber();
      } else if (this.isIdent(ch)) {
        this.readIdent();
      } else if (this.is(ch, '(){}[].,;:?')) {
        this.tokens.push({index: this.index, text: ch});
        this.index++;
      } else if (this.isWhitespace(ch)) {
        this.index++;
      } else {
        var ch2 = ch + this.peek();
        var ch3 = ch2 + this.peek(2);
        var op1 = OPERATORS[ch];
        var op2 = OPERATORS[ch2];
        var op3 = OPERATORS[ch3];
        if (op1 || op2 || op3) {
          var token = op3 ? ch3 : (op2 ? ch2 : ch);
          this.tokens.push({index: this.index, text: token, operator: true});
          this.index += token.length;
        } else {
          this.throwError('Unexpect   }
    } = i || 1;
    : false;
  },

   (ch === ' ' n ('a' <= ch && ch = '$');
  },

  MinErr('lexerr',.push({
      index: start,
      text: number,
      constant: true,
      value: Number(number)
    });
  },

  readIdent: function() {
    var start = this.index;
    while (this.index < this.text.length) {
      var ch = this.text.charAt(this.index);
      if (!(this.isIdent(ch) || this.isNumber(ch))) {
        break;
      }
      this.index++;
    }
    this.tokens.push({
      ind        stringuote', start);
  }
};

var AST = function(lexer, options) {
  this.lexer = lexer;
  this.options = options;
};

AST.Program = 'Program';
AST.ExpressionStatement = 'ExpressionStatement';
AST.AssignmentExpression = 'AssignmentExpression';
AST.ConditionalExpression = 'ConditionalExpression';
AST.LogicalExpression = 'LogicalExpression';
AST.BinaryExpression = 'BinaryExpression';
AST.UnaryExpression = 'UnaryExpression';
AST.CallExpression = 'CallExpression';
AST.MemberExpression = 'MemberExpression';
AST.Identifier = 'Identifier';
AST.Literal = 'Literal';
AST.ArrayExpression = 'ArrayExpression';
AST.Property = 'Property';
AST.ObjectExpression = 'ObjectExpression';
AST.ThisExpression =length !== 0)atement());
      if (!thsionStatement: fuar token;
    while ((token = this.expect('|'))) {
      left = this.filter(left);
    }
    return left;
  },

  expression: function() {
    return this.assignment();
  },

  assignment: function() {
    var result = this.ternary();
    if (this.expect('=')) {
      result = { type: AST.AssignmentonalExpression, test: test, alternate: alternate, consequent: consequent};
      }
    }
    return test;
  },

  logicalOR: function() {
    var left = this.logicalAND();
    while (this.expect('||')) {
      left = { type: AST.LogicalE type: AST.LogicalExpression, operator: '&&', left: left, right: this.equality()};
    }
    return left;
  },

  equality: function() {
    var left = this.relational();
    var token;
    while ((token = this.expect('==','!=','===','!=='))) {
      left = { type: AST.BinaryExpress AST.BinaryExpinaryExpression, opepe: AST.Binator: token.text, prefix: true, argument: this.unary() };
    } else {
      return this.primary();
    }
  },

  primary: function() {
    var primary;
    if (this.expect('(')) {
      primary = this.filterChain();
      this.consume(')');
    } else if (this.expect('[')) {
      primary = this.arrayDeclaration();
    } else if (this.expect('{')) {
      primary = this.object();
    } else if (this.constants.hasOwnProperty(this.peek().text)) {
      primary = copy(this.constants[this.consume().text]);
    } else if (this.peek().identifier) {
      primary = this.identifier();
    } else if (this.peek().constant) {
      primary = this.constant();
    } else {
      this.throwError('not a primary expression', this.peek());
    }

    var next;
    while ((next = this.expect('(', '[', '.'))) {
      if (next.text === '(') {
        primary = {type: AST.CallExpression, callee: primary, arguments: this.parseArguments() };
        this.consume(')');
      } else if (next.text === '[') {
        primary = { type: AST.MemberExpression, object: primary, property: this.expression(), computed: true };
        this.consume(']');
      } else if (next.text === '.') {
        primary = { type: AST.MemberExpression, object: primary, property: this.identifier(), computed: falter: true};

    whi      do {
     owError('is no {
    // TODO check texpect(','));
    }
    this.consume(']');

    return { type: AST.ArrayExpression, elements: elements };
  },

  object: function() {
    var properties = [], property;
    if (this.peekToken().text !== '}') {
      do {
        if (this.peek('}')) {
          // Support trailing commas per ES5.1.
          break;
        }
        property = {type: AST.Property, kind: 'init'};
        if (this.peek().constant) {
          property.key = this.constant();
        } else if (this.peek().identifier) {
          property.key = this.identifier();
        } else {
          this.throwError("invalid key", this.peek());
        }
        this.consume(':');
        property.value = this.expression();
        properties.push(property);
      } while (this.expect(','));
    }
g at [{4}].',n) {
      thisow $parseMrn this.tokens[t === e4 ||
(e1, e2, e3, e4);
    if (token) {
      this.tokens.shift();
      return token;
    }
    return false;
  },


  /* `undefined` is not a constant, it is an identifier,
   * but using it as an identifier is not supported
   */
  constants: {
    'true': { type: AST.Literal, value: true },
    'false': { type: AST.Literal, value: false },
    'null': { type: AST.Literal, value: nul:l+ r;
}

function isStateless($filter, filterName) {
  var fn = $filter(filterName);
  return !fn.$stateful;
}

function findConstantAndWatchExpressions(ast, $filter) {
  var allConstantschExpressions(expr.expression, $filter);
      allConstants = allConstants && expr.expression.constant;
    });
    ast.constant = allConstants;
    break;
  case AST.Literal:
    ast.constant = true;
    ast.toWatch = [];
    break;
  case AST.UnaryExpression:
    findConstantAndWatchExpressions(ast.argument, $filter);
    ast.constant = ast.argument.constant;
    ast.toWatch = ast.argument.toWatch;
    break;
  case AST.BinaryExpression:
    findConstantAndWatchExpressions(ast.left, $filter);
    findConstantAndWatchExpressions(ast.right, $filter);
    ast.constant = ast.left.constant && ast.right.constant;
    ast.toWatch = ast.left.toWatch.concat(ast.right.toWatch);
    break;
  case AST.LogicalExpression:
    findConstantAndWatchExpressions(ast.left, $filter);
    findConstantAndWatchExpressions(ast.right, $filter);
    ast.constant = ast.left.constant && ast.right.constant;
    ast.toWatch = ast.constant ? [] : [ast];
    break;
  case AST.ConditionalExpression:
    findConstantAndWatchExpressions(ast.test, $filter);
    findConstantAndWatchExpressions(ast.alternate, $filter);
    findConstantAndWatchExpressions(ast.consequent, $filter);
    ast.constant = ast.test.constant && ast.alternate.constant && ast.consequent.constant;
    ast.toWatch = ast.constant ? [] : [ast];
    break;
  case AST.Identifier:
    ast.constant = false;
    ast.toWatch = [ast];
    break;
  case AST.MemberExpression:
    findConstantAndWatchExpressions(ast.object, $filter);
    if (ast.computed) {
      findConstantAndWatchExpressions(ast.property, $filter);
    }
    ast.constant = ast.object.constant && (!ast.computed || ast.property.constant);
    ast.toWatch = [ast];
    break;
  case AST.CallExpression:
    allConstants = ast.filter ? isStateless($filter, ast.callee.name) : false;
    argsToWatch = [];
    forEach(ast.arguments, function(expr) {
      findConstantAndWatchExpressions(expr, $filter);
      allConstants = allConstants && expr.constant;
      if (!expr.constant) {
        argsToWatch.push.apply(argsToWatch, expr.toWatch);
      }
    });
    ast.constant = allConstants;
    ast.toWatch = ast.filter && isStateless($filter, ast.callee.name) ? argsToWatch : [ast];
    break;
  case AST.AssignmentExpression:
    findConstantAndWatchExpressions(ast.left, $filter);
    findConstantAndWatchExpressions(ast.right, $filter);
    ast.constant = ast.left.constant && ast.right.constant;
    ast.toWatch = [ast];
    break;
  case AST.ArrayExpression:
    allConstants = true;
    argsToWatch = [];
    forEach(ast.elements, function(expr) {
      findConstantAndWatchExpressions(expr, $filter);
      allConstants = allConstants && expr.constant;
      if (!expr.constant) {
        argsToWatch.push.apply(argsToWatch, expr.toWatch);
      }
    });
    ast.constant = allConstants;
    ast.toWatch = argsToWatch;
    break;
  case AST.ObjectExpression:
    allConstants = true;
    argsToWatch = [];
    forEach(ast.properties, function(property) {
      findConstantAndWatchExpressions(property.value, $filter);
      allConstants = allConstants && property.value.constant;
      if (!property.value.constant) {
        argsToWatch.push.apply(argsToWatch, property.value.toWatch);
      }
    });
    ast.constant = allConstants;
    ast.toWatch = argsToWatch;
    break;
  case AST.ThisExpression:
    ast.constant = false;
    ast.toWatch = [];
    break;
  }
}

function getInputs(body) {
  if (body.length != 1) return;
  var lastExpression = body[0].expression;
  var candidate = lastExpression.toWatch;
  if (c
s[0].expression.type === AST.ArrayExpression ||
      ast.body[0].expression.type === AST.ObjectExpression);
}

function isConstant(ast) {
  return ast.constant;
}

function ASTCompiler(astBuilder, $filter) {
  this.astBuilder = astBuilder;
  this.$filter = $filter;
}

ASTCompiler.prototype = {
  compile: function(expression, expensiveChecks) {
    var self = this;
    var ast = this.astBuilder.ast(expression);
    this.state = {
      nextId: 0,
      filters: {},
      expensiveChecks: expensiveChecks,
      fn: {vars: [], body: [], own: {}},
      assign: {vars: [], body: [], own: {}},
      inputs: []
    };
    findConstantAndWatchExpressions(ast, self.$filter);
    var extra = '';
    var assignable;
    this.stage = 'assign';
    if ((assignable = assignableAST(ast))) {
      this.state.computing = 'assign';
      var result = this.nextId();
      this.recurse(assignable, result);
      this.return_(result);
      extra = 'fn.assign=' + this.generateFunction('ash, intoId);
      self.return_(intoId);
      self.state.inputs.push(fnKey);
      watch.watchId = key;
    });
    this.state.computing = 'fn';
    this.stage = 'main';
    this.recurse(ast);
    var fnString =
      // The build and minification steps remove the string "use strict" from the code, but this is done using a regex.
      // This is a workaround for this until we do a better job at only removing the prefix only when we should.
      '"' + this.USE + ' ' + this.STRICT + '";\n' +
      this.filterPrefix() +
      'var fn=' + this.generateFunction('fn', 's,l,a,i') +
      extra +
      this.watchFns() +
      'return fn;';

    /* jshint -W054 */
    var fn = (new Function('$filter',
        'ensureSafeMemberName',
        'ensureSafeObject',
        'ensureSafeFunction',
        'getStringValue',
        'ensureSafeAssignContext',
        'ifDefined',
        'plus',
        'text',
        fnString))(
          this.$filter,
          ensureSafeMemberName,
          ensureSafeObject,
          ensureSafeFunction,
          getStringValue,
          ensureSafeAssignContext,
          ifDefined,
          plusFn,
          expression);
    /* jshint +W054 */
    this.state = this.stage = undefined;
    fn.literal = isLiteral(ast);
    fn.constant = isConstant(ast);
    return fn;
  },

  USE: 'use',

  STRICT: 'strict',

  watchorEach(fns, function(name) {
      result.push('var ' + name + '=' + self.generateFunction(name, 's'));
    });
    if (fns.length) {
      rurn 'function(' + scape(filter) + n) {
    rars.join(',') + ';' : '';
  },

  body: function(section) {
    return this.state[section].body.join('');
  },

  recurse: function(ast, intoId, nameId, recursionFn, create, skipWatchIdCheck) {
    var left, right, self = this, args, expression;
    recursionFn = recursionFn || noop;
    if (!skipWatchIdCheck && isDefined(ast.watchId)) {
      intoId = intoId || this.nextId();
      this.if_('i',
        this.lazyAssign(intoId, this.computedMember('i', ast.watchId)),
        this.lazyRecurse(ast, intoId, nameId, recursionFn, cre      self.current().body.push(right, ';');
        } else {
          self.return_(right);
        }
      });
      break;
    case AST.Literal:
      expression = this.escape(ast.value);
      this.assign(intoId, expression);
      recursionFn(expression);
      break;
    case AST.UnaryExpression:
      this.recurse(ast.argument, undefined, undefined, function(expr) { right = expr; });
      expression = ast.operator + '(' + this.ifDefined(right, 0) + ')';
      this.assign(intoId, expression);
      recursionFn(expression);
      break;
    case AST.BinaryExpression:
      this.recurse(ast.left, undefined, undefined, function(expr) { left = expr; });
      this.recurse(ast.right, undefined, undefined, function(expr) { right = expr; });
      if (ast.operator === '+') {
        expression = this.plus(left, right);
      } else if (ast.operator === '-') {
        expression = this.ifDefined(left, 0) + ast.operator + this.ifDefined(right, 0);
      } else {
        expression = '(' + left + ')' + ast.operator + '(' + right + ')';
      }
      this.assign(intoId, expression);
      recursionFn(expression);
      break;
    case AST.LogicalExpression:
      intoId = intoId || this.nextId();
      self.recurse(ast.left, intoId);
      self.if_(ast.operator === '&&' ? intoId : self.not(intoId), self.lazyRecurse(ast.right, intoId));
      recursionFn(intoId);
      break;
    case AST.ConditionalExpression:
      intoId = intoId || this.nextId();
      self.recurse(ast.test, intoId);
      self.if_(intoId, self.lazyRecurse(ast.alternate, intoId), self.lazyRecurse(ast.consequent, intoId));
      recursionFn(intoId);
      break;
    case AST.Identifier:
      intoId = intoId || this.nextId();
      if (nameId) {
        nameId.context = self.stage === 'inputs' ? 's' : this.assign(this.nextId(), this.getHasOwnProperty('l', ast.name) + '?l:s');
        nameId.computed = false;
        nameId.name = ast.name;
      }
      ensureSafeMemberName(            }
            self.assign(intoId, self.nonComputedMember('s', ast.name));
          });
        }, intoId && self.lazyAssign(intoId, self.nonComputedMember('l', ast.name))
        );
      if (self.state.expensiveChecks || isPossiblyDangerousMemberName(ast.name)) {
        self.addEnsureSafeObject(intoId);
      }
      recursionFn(intoId);
      break;
    case AST.MemberExpression:
      left = nameId && (nameId.context = this.nextId()) || this.nextId();
      intoId = intoId || this.nextId();
      self.recurse(ast.object, left, undefined, function() {
        self.if_(self.notNull(left), function() {
          if (create && create !== 1) {
            self.addEnsureSafeAssignContext(left);
          }
          if (ast.computed) {
            right = self.nextId();
            self.recurse(ast.property, right);
            self.getStringValue(right);
            self.addEnsureSafeMemberName(right);
            if (create && create !== 1) {
              self.if_(self.not(self.computedMember(left, right)), self.lazyAssign(self.computedMember(left, right), '{}'));
            }
            expression = self.ensureSafeObject(self.computedMember(left, right));
            self.assign(intoId, expression);
            if (nameId) {
              nameId.computed = true;
              nameId.name = right;
            }
          } else {
            ensureSafeMemberName(ast.property.name);
            if (create && create !== 1) {
              self.if_(self.not(self.nonComputedMember(left, ast.property.name)), self.lazyAssign(self.nonComputedMember(left, ast.property.name), '{}'));
            }
            expression = self.nonComputedMember(left, ast.property.name);
            if (self.state.expensiveChecks || isPossiblyDangerousMemberName(ast.property.name)) {
              expression = self.ensureSafeObject(expression);
            }
            self.assign(intoId, expression);
            if (nameId) {
              nameId.computed = false;
              nameId.name = ast.property.name;
            }
          }
        }, function() {
          self.assign(intoId, 'undefined');
        });
        recursionFn(intoId);
      }, !!create);
      break;
    case AST.CallExpression:
      intoId = intoId || this.nextId();
      if (ar argument = self.nextId();
          self.recurse(expr, argument);
          args.push(argument);
        });
        expression = right + '(' + args.join(',') + ')';
        self.assign(intoId, expression);
        recursionFn(intoId);
      } else {
        right = self.nextId();
        left = {};
        args = [];
        self.recurse(ast.callee, right, left, function() {
          self.if_(self.nction(argument) {
                args.push(self.ensureSafeObject(argument));
              });
            });
            if (left.name) {
              if (!self.state.expensiveChecks) {
                self.addEnsureSafeObject(left.context);
              }
              expression = self.member(left.context, left.name, left.computed) + '(' + args.join(',') + ')';
            } else {
              expression = right + '(' + args.join(',') + ')';
            }
            expression = self.ensureSafeObject(expression);
            self.assign(intoId, expression);
          }, function() {
            self.assign(intoId, 'undefined');
          });
          recursionFn(intoId);
        });
      }
      break;
    case AST.AssignmentExpression:
      right = this.nextId();
      left = {};
      if (!isAssignable(ast.left)) {
        throw $parseMinEr;
          self.assign(intoId, expression);
          recursionFn(intoId || expression);
   curse(expr, self.nextId(), undefined, function(argument) {
          args.push(argument);
        });
      });
      expression = '[' + args.join(',') + ']';
      this.assign(intoId, expression);
      recursoperty.key.name :
                ('' + property.key.value)) +
              ':' + expr);
        });
      });
      expression = '{' + args.join(',') + '}';
      this.assign(intoId, expression);
      recursionFn(expression);
      break;
    case AST.ThisExpression:
      this.assign(intoId, 's');
      recursionFn('s');
      break;
    case AST.NGValueParxtId(false, ction(id, va     this.statefined: fundefaultValue)ft + ',' if (consequent) {
        body.push('else{');
        consequent();
        body.push('}');
      }
    }
  },

  not: function(expression) {
    return '!(' + expressio expression + '!=nul left + '.'    if (computed) return this.computedMember(left, right);
    return this.nonComputedMember(left, right);
  },

  addEnsureSafeObject: function(item) {
    this.current().body.push(this.ensureSafeObject(item), ';');
  },

  addEnsureSafeMemberName: function(item) {
    this.current().body.push(this.ensureSafeMemberName(item), ';');
  },

  addEnsureSafeFunction: function(afeAssignContext: function(item) {
    this.current().body.push(this.ensureSafeAssignContext(item), ';');
  },

  ensureSafeObject: function(item) {
    return 'ensureSafeObject(' + item + ',text)';
  },

  ensureSafeMemberName: function(item) {
    return 'ensureSafeMemberName(' + item + ',text)';
  },

  enst)';
  },

  getStringValue:  },

  ensureSafeeturn function(): function(id, value) {
    var self = this;
    return funcg,

  string;
    if (ty++);
    if (t : '


function ASTInterpreter(astBuilder, $filter) {
  this.astBuilder = astBuilder;
  this.$filter = $filter;
}

ASTInterpreter.prototype = {
  compile: function(expression, expensiveChecks) {
    var self = this;
    var ast = this.astBuilder.ast(expression);
    this.expression = expression;
    this.expensiveChecks = expensiveChecks;
    findConstantAndWatchExpressions(ast, self.$filter);
    var assignable;
    var assign;
    if ((assignable = assignableAST(ast))) {
      assign = this.recurse(assignable);
    }
    varecurse(watch);
        watch.input = input;
        inp  forEach(ast.body, function(expression) {
      expressions.push(self.recurse(expression.expression));
    });
    var fn           lastValue = exp(scope, locgn) {
      fn.assign = function(scope, value, locals) {
        return assign(scope, locals, value);
      };
    }
    if (inputs) {
      fn.inputs = inputs;
    }
    fn.literal = isLiteral(ast);
    fn.constant = isConstant(ast);
    return fn;
  },

  recurse: function(ast, context, create) {
    var left, right, self = this, args, expression;
    if (ast.input) {
      return this.inputs(ast.input, ast.watchId);
    }
    switch (ast.type) {
    case AST.Literal:
      return this.value(ast.value, context);
    case AST.UnaryExpression:
      right = this.recurse(ast.argument);
      return this['unary' + ast.operator](right, context);
    case AST.BinaryExpression:
      left = this.recurse(ast.left);
      right = this.recurse(ast.right);
      return this['binary' + ast.operator](left, right, context);
    case AST.LogicalExpression:
      left = this.recurse(ast.left);
      right = this.recurse(ast.right);
      return this['binary' + ast.operator](left, right, context);
    case AST.ConditionalExpression:
      return this['ternary?:'](
        this.recurse(ast.test),
        this.recurse(ast.alternate),
        this.recurse(ast.consequent),
        context
      );
    case AST.Identifier:
      ensureSafeMemberName(ast.name, self.expression);
      return self.identifier(ast.name,
                             self.expensiveChecks || isPossiblyDangerousMemberName(ast.name),
                             context, create, self.expression);
    case AST.MemberExpression:
      left = this.recurse(ast.object, false, !!create);
      if (!ast.computed) {
        ensureSafeMemberName(ast.property.name, self.expression);
        right = ast.property.name;
      }
      if (ast.computed) right = this.recurse(ast.property);
      return ast.computed ?
        this.computedMember(left, right, context, create, self.expression) :
        this.nonComputedMember(left, right, self.expensiveChecks, context, create, self.expression);
    case AST.CallExpression:
      args = [];
      forEach(ast.arguments, function(expr) {
        args.push(self.recurse(expr));
      });
      if (ast.filter) right = this.$filter(ast.cs, inputs);
          return context ? {context: undefined, name: undefined, value: value} : value;
        } :
        function(scope, locals, assign, inputs) {
          var rhs = right(scope, locals, assign, inputs);
          var value;
          if (rhs.value != null) {
            ensureSafeObject(rhs.context, self.expression);
            ensureSafeFunction(rhs.value, self.expression);
            var values = [];
            for (var i = 0; i < args.length; ++i) {
              values.push(ensureSafeObject(args[i](scope, locals, assign, inputs), self.expression));
            }
            value = ensureSafeObject(rhs.value.apply(rhs.context, values), self.expression);
          }
          return context ? {value: value} : value;
        };
    case AST.AssignmentExpression:
      left = this.recurse(ast.left, true, 1);
      right = this.recurse(ast.right);
      return function(scope, locals, assign, inputs) {
        var lhs = left(scope, locals, assign, inputs);
        var rhs = right(scope, locals, assign, inputs);
        ensureSafeObject(lhs.value, self.expression);
        ensureSafeAssignContext(lhs.context);
        lhs.context[lhs.name] = rhs;
        return cont
      args = [h(args[i](scope, locals, assign, inputs));
        }
        return context ? {        ('' + property.key.value),
                   value: self.recurse(property.value)
        });
      });
      return function(scope, locals, assign, inputs) {
        var value = {};
        for (var i = 0; i < args.length; ++i) {
          value[args[i].key] = args[i].value(scope, locals, assign, inputs);
e AST.ThisExpression:
      return function(s  return function(scope,     arg = +arg;
      } else {
        arg = 0;
      }
      return context ? {value: arg} : arg;
    };
  },
  'unary-': function(argument, context) {
    return function(scope, locals, assign, inputs) {
      var arg = argument(scope, locals, assign, inputs);
      if (isDefined(arg)) {
        arg = -ar    var arg = als, assign, iisDefined(lhs)assign, inputsassign, inputsassign, inputs) sign, inputs) ==sign, inputs) !ssign, inputs) ssign, inputs)assign, inputsassign, inputs)ssign, inputs) ssign, inputs) ssign, inputs) ssign, inputs) |n, inputs)
    return function() { return context ? {context: undefined, name: undefined, value: value} : value; };
  },
  identifier: function(name, expensiveChecks, context, create, expression) {
    return function(scope, locals, assign, inputs) {
      var base = locals && (name in locals) ? locals : scope;
      if (create && create !== 1 && base && !(base[name])) {
        base[name] = {};
      }
      var value = base ? base[name] : undefined;
      if (expensiveChecks) {
        ensureSafeObject(value, expression);
      }
      if (context) {
        return {context: base, name: name, value: value};
      } else {
        return value;
      }
    };
  },
  computedMember: function(left, right, context, create, expression) {
    return function(scope, locals, assign, inputs) {
      var lhs = left(scope, locals, assign, inputs);
      var rhs;
      var value;
      if (lhs != null) {
        rhs = right(scope, locals, assign, inputs);
        rhs = getStringValue(rhs);
        ensureSafeMemberName(rhs, expression);
        if (create && create !== 1) {
          ensureSafeAssignContext(lhs);
          if (lhs && !(lhs[rhs])) {
            lhs[rhs] = {};
          }
        }
        value = lhs[rhs];
        ensureSafeObject(value, expression);
      }
      if (context) {
        return {context: lhs, name: rhs, value: value};
      } else {
        return value;
      }
    };
  },
  nonComputedMember: function(left, right, expensiveChecks, context, create, expression) {
    return function(scope, locals, assign, inputs) {
      var lhs = left(scope, locals, assign, inputs);
      if (create && create !== 1) {
        ensureSafeAssignContext(lhs);
        if (lhs && !(lhs[right])) {
          lhs[right] = {};
        }
      }
      var value = lhs != null ? lhs[right] : undefined;
      if (expensiveChecks || isPossiblyDangerousMemberName(right)) {
        ensureSafeObject(value, expression);
      }
      if (context) {
        return als, inputs) {
      if (inputs) return i ASTInterpreter(this.ast, $filter) :
                   rserns.expensiveChecks);
  }
};

function isPossiblyction getValueOf(value) {
  return isFunction(value.valueOf) ? value.valueOf() : objectValueOf.call(value);
}

///////////////////////////////////

/**
 * @ngdoc service
 * @name $parse
 * @kind function
 *
 * @description
 *
 * Converts Angular {@link guide/expression expression} into a function.
 *
 * ```js
 *   var getter = $parse('user.name');
 *   var setter = getter.assign;
 *   var context = {user:{name:'angular'}};
 *   var locals = {user:{name:'local'}};
 *
 *   expect(getter(context)).toEqual('angular');
 *   setter(context, 'newValue');
 *   expect(context.user.name).toEqual('newValue');
 *   expect(getter(context, locals)).toEqual('local');
 * ```
 *
 *
 * @param {string} expression String expression to compile.
 * @returns {function(context, locals)} a function which represents the compiled expression:
 *
 *    * `context` – `{object}` – an object against which any expressions embedded in the strings
 *      are evaluated against (typically a scope object).
 *    * `locals` – `{object=}` – local variables context object, useful for overriding values in
 *      `context`.
 *
 *    The returned function also has the following properties:
 *      * `literal` – `{boolean}` – whether the expression's top-level node is a JavaScript
 *        literal.
 *      * `constant` – `{boolean}` – whether the expression is made entirely of JavaScript
 *        constant literals.
 *      * `assign` – `{?function(context, value)}` – if the expression is assignable, this will be
 *        set to a function to change its value on the given context.
 *
 */


/**
 * @ngdoc provider
 * @name $parseProvider
 *
 * @description
 * `$parseProvider` can be used for configuring the default behavior of the {@link ng.$parse $parse}
 *  service.
 */
function $ParseProvider() {
  var cacheDefault = createMap();
  var cacheExpensive = createMap();

  this.$get = ['$filter', function($filter) {
    var noUnsafeEval = csp().noUnsafeEval;
    var $parseOptions = {
          csp: noUnsafeEval,
          expensiveChecks: false
        },
        $parseOptionsExpensive = {
          csp: noUnsafeEval,
          expensiveChecks: true
        };
    var runningChecksEnabled = false;

    $parse.$$runningExpensiveChecks = function() {
      return runningChecksEnabled;
    };

    return $parse;

    function $parse(exp, interceptorFn, expensiveChecks) {
      var parsedExpression, oneTime, cacheKey;

      expensiveChecks = expensiveChecks || runningChecksEnabled;

      switch (typeof exp) {
        case 'string':
          exp = exp.trim();
          cacheKey = exp;

          var cache = (expensiveChecks ? cacheExpensive : cacheDefault);
          parsedExpression = cache[cacheKey];

          if (!parsedExpression) {
            if (exp.charAt(0) === ':' && exp.charAt(1) === ':') {
              oneTime = true;
              exp = exp.substring(2);
            }
            var parseOptions = expensiveChecks ? $parseOptionsExpensive : $parseOptions;
            var lexer = new Lexer(parseOptions);
            var parser = new Parser(lexer, $filter, parseOptions);
            parsedExpression = parser.parse(exp);
            if (parsedExpression.constant) {
              parsedExpression.$$watchDelegate = constantWatchDelegate;
            } else if (oneTime) {
              parsedExpression.$$watchDelegate = parsedExpression.literal ?
                  oneTimeLiteralWatchDelegate : oneTimeWatchDelegate;
            } else if (parsedExpression.inputs) {
              parsedExpression.$$watchDelegate = inputsWatchDelegate;
            }
            if (expensiveChecks) {
              parsedExpression = expensiveChecksInterceptor(parsedExpression);
            }
            cache[cacheKey] = parsedExpression;
          }
          return addInterceptor(parsedExpression, interceptorFn);

        case 'function':
          return addInterceptor(exp, interceptorFn);

        default:
          return addInterceptor(noop, interceptorFn);
      }
    }

    function expensiveChecksInterceptor(fn) {
      if (!fn) return fn;
      expensiveCheckFn.$$watchDelegate = fn.$$watchDelegate;
      expensiveCheckFn.assign = expensiveChecksInterceptor(fn.assign);
      expensiveCheckFn.constant = fn.constant;
      expensiveCheckFn.literal = fn.literal;
      for (var i = 0; fn.inputs && i < fn.inputs.length; ++i) {
        fn.inputs[i] = expensiveChecksInterceptor(fn.inputs[i]);
      }
      expensiveCheckFn.inputs = fn.inputs;

      return expensiveCheckFn;

      function expensiveCheckFn(scope, locals, assign, inputs) {
        var expensiveCheckOldValue = runningChecksEnabled;
        runningChecksEnabled = true;
        try {
          return fn(scope, limitive or NaN
      return newValue === oldValueOfValue || (newValue !== newValue && oldValueOfValue !== oldValueOfValue);
    }

    function inputsWatchDelegate(scope, listener, objectEquality, parsedExpression, prettyPrintExpression) {
      var inputExpressions = parsedExpression.inputs;
      var lastResult;

      if (inputExpressions.length === 1) {
        var oldInputValueOf = expressionInputDirtyCheck; // init to something unique so that equals check fails
        inputExpressions = inputExpressions[0];
        return scope.$watch(function expressionInputWatch(scope) {
          var newInputValue = inputExpressions(scope);
          if (!expressionInputDirtyCheck(newInputValue, oldInputValueOf)) {
            lastResult = parsedExpression(scope, undefined, undefined, [newInputValue]);
            oldInputValueOf = newInputValue && getValueOf(newInputValue);
          }
          return lastResult;
        }, listener, objectEquality, prettyPrintExpression);
      }

      var oldInputValueOfValues = [];
      var oldInputValues = [];
      for (var i = 0, ii = inputExpressions.length; i < ii; i++) {
        oldInputValueOfValues[i] = expressionInputDirtyCheck; // init to something unique so that equals check fails
        oldInputValues[i] = null;
      }

      return scope.$watch(function expressionInputsWatch(scope) {
        var changed = false;

        for (var i = 0, ii = inputExpressions.length; i < ii; i++) {
          var newInputValue = inputExpressions[i](scope);
          if (changed || (changed = !expressionInputDirtyCheck(newInputValue, oldInputValueOfValues[i]))) {
            oldInputValues[i] = newInputValue;
            oldInputValueOfValues[i] = newInputValue && getValueOf(newInputValue);
          }
        }

        if (changed) {
          lastResult = parsedExpression(scope, undefined, undefi     ch(value, function(val) {
          if (!isDefined(val)) allDefined = false;
        });
        return allDefined;
      }
    }

    function constantWatchDelegate(scope, listener, objectEquality, parsedExpression) {
      var unwatch;
      return unwatch = scope.$watch(function constantWatch(scope) {
        return parsedExpression(scope);
      }, function constantListener(value, old, scope) {
        if (isFunction(listener)) {
          listener.apply(this, arguments);
        }
        unwatch();
      }, objectEquality);
    }

    function addInterceptor(parsedExpression, interceptorFn) {
      if (!interceptorFn) return parsedExpression;
      var watchDelegate = parsedExpression.$$watchDelegate;
      var useInputs = false;

      var regularWatch =
          intor's result if the
        // initial value is defined (for bind-once)
        return isDefined(value) ? result : value;
      };

      // Propagate $$watchDelegates other then inputsWatchDelegate
      if (parsedExpression.$$watchDelegate &&
          parsedExpression.$$watchDelegate !== inputsWatchDelegate) {
        fn.$$watchDelegate = parsedExpression.$$watchDelegate;
      } else if (!interceptorFn.$stateful) {
        // If there is an interceptor, but no watchDelegate then treat the interceptor like
        // we treat filters - it is assumed to be a pure function unless flagged with $stateful
        fn.$$watchDelegate = inputsWatchDelegate;
        useInputs = !parsedExpression.inputs;
        fn.inputs = parsedExpression.inputs ? parsedExpression.inputs : [parsedExpression];
      }

      return fn;
    }
  }];
}

/**
 * @ngdoc service
 * @name $q
 * @requires $rootScope
 *
 * @description
 * A service that helps you run functions asynchronously, and use their return values (or exceptions)
 * when they are done processing.
 *
 * This is an implementation of promises/deferred objects inspired by
 * [Kris Kowal's Q](https://github.com/kriskowal/q).
 *
 * $q can be used in two fashions --- one which is more similar to Kris Kowal's Q or jQuery's Deferred
 * implementations, and the other which resembles ES6 (ES2015) promises to some degree.
 *
 * # $q constructor
 *
 * The streamlined ES6 style promise is essentially just using $q as a constructor which takes a `resolver`
 * function as the first argument. This is similar to the native Promise implementation from ES6,
 * see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 *
 * While the constructor-style use is supported, not all of the supporting methods from ES6 promises are
 * available yet.
 *
 * It can be used like so:
 *
 * ```js
 *   // for the purpose of this example let's assume that variables `$q` and `okToGreet`
 *   // are available in the current lexical scope (they could have been injected or passed in).
 *
 *   function asyncGreet(name) {
 *     // perform some asynchronous operation, resolve or reject the promise when appropriate.
 *     return $q(function(resolve, reject) {
 *       setTimeout(function() {
 *         if (okToGreet(name)) {
 *           resolve('Hello, ' + name + '!');
 *         } else {
 *           reject('Greeting ' + name + ' is not allowed.');
 *         }
 *       }, 1000);
 *     });
 *   }
 *
 *   var promise = asyncGreet('Robin Hood');
 *   promise.then(function(greeting) {
 *     alert('Success: ' + greeting);
 *   }, function(reason) {
 *     alert('Failed: ' + reason);
 *   });
 * ```
 *
 * Note: progress/notify callbacks are not currently supported via the ES6-style interface.
 *
 * Note: unlike ES6 behaviour, an exception thrown in the constructor function will NOT implicitly reject the promise.
 *
 * However, the more traditional CommonJS-style usage is still available, and documented below.
 *
 * [The CommonJS Promise proposal](http://wiki.commonjs.org/wiki/Promises) describes a promise as an
 * interface for interacting with an object that represents the result of an action that is
 * performed asynchronously, and may or may not be finished at any given point in time.
 *
 * From the perspective of dealing with error handling, deferred and promise APIs are to
 * asynchronous programming what `try`, `catch` and `throw` keywords are to synchronous programming.
 *
 * ```js
 *   // for the purpose of this example let's assume that variables `$q` and `okToGreet`
 *   // are available in the current lexical scope (they could have been injected or passed in).
 *
 *   function asyncGreet(name) {
 *     var deferred = $q.defer();
 *
 *     setTimeout(function() {
 *       deferred.notify('About to greet ' + name + '.');
 *
 *       if (okToGreet(name)) {
 *         deferred.resolve('Hello, ' + name + '!');
 *       } else {
 *         deferred.reject('Greeting ' + name + ' is not allowed.');
 *       }
 *     }, 1000);
 *
 *     return deferred.promise;
 *   }
 *
 *   var promise = asyncGreet('Robin Hood');
 *   promise.then(function(greeting) {
 *     alert('Success: ' + greeting);
 *   }, function(reason) {
 *     alert('Failed: ' + reason);
 *   }, function(update) {
 *     alert('Got notification: ' + update);
 *   });
 * ```
 *
 * At first it might not be obvious why this extra complexity is worth the trouble. The payoff
 * comes in the way of guarantees that promise and deferred APIs make, see
 * https://github.com/kriskowal/uncommonjs/blob/master/promises/specification.md.
 *
 * Additionally the promise api allows for composition that is very hard to do with the
 * traditional callback ([CPS](http://en.wikipedia.org/wiki/Continuation-passing_style)) approach.
 * For more on this please see the [Q documentation](https://github.com/kriskowal/q) especially the
 * section on serial or parallel joining of promises.
 *
 * # The Deferred API
 *
 * A new instance of deferred is constructed by calling `$q.defer()`.
 *
 * The purpose of the deferred object is to expose the associated Promise instance as well as APIs
 * that can be used for signaling the successful or unsuccessful completion, as well as the status
 * of the task.
 *
 * **Methods**
 *
 * - `resolve(value)` – resolves the derived promise with the `value`. If the value is a rejection
 *   constructed via `$q.reject`, the promise will be rejected instead.
 * - `reject(reason)` – rejects the derived promise with the `reason`. This is equivalent to
 *   resolving it with a rejection constructed via `$q.reject`.
 * - `notify(value)` - provides updates on the status of the promise's execution. This may be called
 *   multiple times before the promise is either resolved or rejected.
 *
 * **Properties**
 *
 * - promise – `{Promise}` – promise object associated with this deferred.
 *
 *
 * # The Promise API
 *
 * A new promise instance is created when a deferred instance is created and can be retrieved by
 * calling `deferred.promise`.
 *
 * The purpose of the promise object is to allow for interested parties to get access to the result
 * of the deferred task when it completes.
 *
 * **Methods**
 *
 * - `then(successCallback, errorCallback, notifyCallback)` – regardless of when the promise was or
 *   will be resolved or rejected, `then` calls one of the success or error callbacks asynchronously
 *   as soon as the result is available. The callbacks are called with a single argument: the result
 *   or rejection reason. Additionally, the notify callback may be called zero or more times to
 *   provide a progress indication, before the promise is resolved or rejected.
 *
 *   This method *returns a new promise* which is resolved or rejected via the return value of the
 *   `successCallback`, `errorCallback` (unless that value is a promise, in which case it is resolved
 *   with the value which is resolved in that promise using
 *   [promise chaining](http://www.html5rocks.com/en/tutorials/es6/promises/#toc-promises-queues)).
 *   It also notifies via the return value of the `notifyCallback` method. The promise cannot be
 *   resolved or rejected from the notifyCallback method.
 *
 * - `catch(errorCallback)` – shorthand for `promise.then(null, errorCallback)`
 *
 * - `finally(callback, notifyCallback)` – allows you to observe either the fulfillment or rejection of a promise,
 *   but to do so without modifying the final value. This is useful to release resources or do some
 *   clean-up that needs to be done whether the promise was rejected or resolved. See the [full
 *   specification](https://github.com/kriskowal/q/wiki/API-Reference#promisefinallycallback) for
 *   more information.
 *
 * # Chaining promises
 *
 * Because calling the `then` method of a promise returns a new derived promise, it is easily
 * possible to create a chain of promises:
 *
 * ```js
 *   promiseB = promiseA.then(function(result) {
 *     return result + 1;
 *   });
 *
 *   // promiseB will be resolved immediately after promiseA is resolved and its value
 *   // will be the result of promiseA incremented by 1
 * ```
 *
 * It is possible to create chains of any length and since a promise can be resolved with another
 * promise (which will defer its resolution further), it is possible to pause/defer resolution of
 * the promises at any point in the chain. This makes it possible to implement powerful APIs like
 * $http's response interceptors.
 *
 *
 * # Differences between Kris Kowal's Q and $q
 *
 *  There are two main differences:
 *
 * - $q is integrated with the {@link ng.$rootScope.Scope} Scope model observation
 *   mechanism in angular, which means faster propagation of resolution or rejection into your
 *   models and avoiding unnecessary browser repaints, which would result in flickering UI.
 * - Q has many more features than $q, but that comes at a cost of bytes. $q is tiny, but contains
 *   all the important functionality needed for common async tasks.
 *
 *  # Testing
 *
 *  ```js
 *    it('should simulate promise', inject(function($q, $rootScope) {
 *      var deferred = $q.defer();
 *      var promise = deferred.promise;
 *      var resolvedValue;
 *
 *      promise.then(function(value) { resolvedValue = value; });
 *      expect(resolvedValue).toBeUndefined();
 *
 *      // Simulate resolving of promise
 *      deferred.resolve(123);
 *      // Note that the 'then' function does not get called synchronously.
 *      // This is because we want the promise API to always be async, whether or not
 *      // it got called synchronously or asynchronously.
 *      expect(resolvedValue).toBeUndefined();
 *
 *      // Propagate promise resolution to 'then' functions using $apply().
 *      $rootScope.$apply();
 *      expect(resolvedValue).toEqual(123);
 *    }));
 *  ```
 *
 * @param {function(function, function)} resolver Function which is responsible for resolving or
 *   rejecting the newly created promise. The first parameter is a function which resolves the
 *   promise, the second parameter is a function which rejects the promise.
 *
 * @returns {Promise} The newly created promise.
 */
function $QProvider() {

  this.$get = ['$rootScope', '$exceptionHandler', function($roottion($browser, $exceptionHandler) {
    return qFactory(function(callback) {
      $browser.defer(callback);
    }, $exceptionHandler);
  }];
}

/**
 * Constructs a promise manager.
 *
 * @param {function(function)} nextTick Function for executing functions in the next turn.
 * @param {function(...*)} exceptionHandler Function into which unexpected exceptions are passed for
 *     debugging purposes.
 * @returns {object} Promise manager.
 */
function qFactory(nextTick, exceptionHandler) {
  var $qMinErr = minErr('$q', TypeError);
  function callOnce(self, resolveFn, rejectFn) {
    var called = false;
    function wrap(fn) {
      return function(value) {
        if (called) return;
        called = true;
        fn.call(self, value);
      };
    }

    return [wrap(resolveFn), wrap(rejectFn)];
  }

  /**
   * @ngdoc method
   * @name ng.$q#defer
   * @kind function
   *
   * @description
   * Creates a `Deferred` objectn thnce of deferred.
   */
  var defer = function() {
    return new Deferred();
  };

  function Promise() {
    this.$$state = { status: 0 };
  }

  extend(Promise.prototype, {
    then: function(onFulfilled, onRejected, progressBack) {
      if (isUndefined(onFulfilled) && isUndefined(onRejected) && isUndefined(progressBack)) {
        return this;
      }
      var result = new Deferred();

      this.$$state.pending = this.$$state.pending || [];
      this.$$state.pending.push([result, onFulfilled, onRejected, progressBack]);
      if (this.$$state.status > 0) scheduleProcessQueue(this.$allback(value, true, callback);
      }, function(error) {
        return handleCallback(error, falseom/   if resolve = simpleBind(this, this.resolve);
   xpected promise to be resolved with value other than itself '{0}'",
          val));
      } else {
        this.$$resolve(val);
      }

    },

    $$resolve: function(val) {
      var then, fns;

      fns = callOnce(this, this.$$resolve, this.$$reject);
      try {
        if ((isObject(val) || isFunction(val))) then = val && val.then;
        if (isFunction(then)) {
          this.promise.$$state.status = -1;
          then.call(val, fns[0], fns[1], this.notify);
        } else {
          this.promise.$$state.value = val;
          this.promise.$$state.status = 1;
          scheduionHandler(e);
 on) {
      thallback(progress) : progress);
            } catch (e) {
              exceptionHandler(e);
            }
          }
        });
      }
    }
  });

  /**
   * @ngdoc method
   * @name $q#reject
   * @kind function
   *
   * @description
   * Creates a promise that is resolved as rejected with the specified `reason`. This api should be
   * used to forward rejection in a chain of promises. If you are dealing with the last promise in
   * a promise chain, you don't need to worry about it.
   *
   * When comparing deferreds/promises to the familiar behavior of try/catch/throw, think of
   * `reject` as the `throw` keyword in JavaScript. This also means that if you "catch" an error via
   * a promise error callback and you want to forward the error to the promise derived from the
   * current promise, you have to "rethrow" the error by returning a rejection constructed via
   * `reject`.
   *
   * ```js
   *   promiseB = promiseA.then(function(result) {
   *     // success: do something and resolve promiseB
   *     //          with the old or a new result
   *     return result;
   *   }, function(reason) {
   *     // error: handle the error if possible and
   *     //        resolve promiseB with newPromiseOrValue,
   *     //        otherwise forward the rejection to promiseB
   *     if (canHandle(reason)) {
   *      // handle the error and recover
   *      return newPromiseOrValue;
   *     }
   *     return $q.reject(reason);
   *   });
   * ```
   *
   * @param {*} reason Constant, message, exception or an object representinhe `reason`.
   */
  v new Deferred();
    if (   }, function(error) {
        return makePromise(error, false);
      });
    } else {
      return makePromise(value, isResolved);
    }
  };

  /**
   * @ngdoc method
   * @name $q#when
   * @kind function
   *
   * @description
   * Wraps an object that might be a value or a (3rd party) then-able promise into a $q promise.
   * This is useful when you are dealing with an object that might or might not be a promise, or if
   * the promise comes from a source that can't be trusted.
   *
   * @param {*} value Value or a promise
   * @param {Function=} successCallback
   * @param {Function=} errorrogressBack) {
    var result = new Deferred();
    result.resolve(value);
    return result.promise.then(callback, errback, progressBack);
  };

  /**
   * @ngdoc method
   * @name $q#resolve
   * @kind function
   *
   * @description
   * Alias of {@link ng.$q#when when} to maintain naming consistency with ES6.
   *
   * @param {*} value Value or a promise
   * @param {Function=} successCallback
   * @param {Function=} errorCallback
   * @param {Function=} progressCallback
   * @returns {Promise} Returns a promise of the passed value or promise
   */
  var resolve = when;

  /**
   * @ngdoc method
   * @name $q#all
   * @kind function
   *
   * @description
   * Combines multiple promises into a single promise that is resolved when all of the input
   * promises are resolved.
   *
   * @param {Array.<Promise>|Object.<Promise>} promises An array or hash of promises.
   * @returns {Promise} Returns a single promise that will be resolved with an array/hash of values,
   *   each value corresponding to the promise at the same index/key in the `promises` array/hash.
     deferred.reject(reason);
      });
    });

    if (counter === 0) {
      deferred.resolve(results);
    }

    return deferred.promise;
  }

  var $Q = function Q(resolver) {
    if (!isFunction(resolver)) {
      throw $qMinErr('norslvr', "Expected resolverFn, got '{0}'", resolver);
    }

    if (!(this instanceof Q)) {
      // More useful when $Q is the Promise itself.
   ();

    function resolveFn(value) {
      deferred.resolve(value);
    }

    function rejectFn(reason) {
      deferred.reject(reason);
    }

    resolver(resolveFn, rejectFn);

    retu    return function() {
            $timeout.cancel(timer);
          };
        };

    raf.supported = rafSupported;

    return raf;
  }];
}

/**
 * DESIGN NOTES
 *
 * The design decisions behind the scope are heavily favored for speed and memory consumption.
 *
 * The typical use of scope is to watch the expressions, which most of the time return the same
 * value as last time so we optimize the operation.
 *
 * Closures construction is expensive in terms of speed as well as memory:
 *   - No closures, instead use prototypical inheritance for API
 *   - Internal state needs to be stored on scope directly, which means that private state is
 *     exposed as $$____ properties
 *
 * Loop operations are optimized by using while(count--) { ... }
 *   - This means that in order to keep the same order of execution as addition we have to add
 *     items to the array at the beginning (unshift) instead of at the end (push)
 *
 * Child scopes are created and removed often
 *   - Using an array would be slow since inserts in the middle are expensive; so we use linked lists
 *
 * There are fewer watches than observers. This is why you don't want the observer to be implemented
 * in the same way as watch. Watch requires return of the initialization function which is expensive
 * to construct.
 */


/**
 * @ngdoc provider
 * @name $rootScopeProvider
 * @description
 *
 * Provider for the $rootScope service.
 */

/**
 * @ngdoc method
 * @name $rootScopeProvider#digestTtl
 * @description
 *
 * Sets the number of `$digest` iterations the scope should attempt to execute before giving up and
 * assuming that the model is unstable.
 *
 * The current default is 10 iterations.
 *
 * In complex applications it's possible that the dependencies between `$watch`s will result in
 * several digest iterations. However if an application needs more than the default 10 digest
 * iterations for its model to stabilize then you should investigate what is causing the model to
 * continuously change during the digest.
 *
 * Increasing the TTL could have performance implications, so you should not change it without
 * proper justification.
 *
 * @param {number} limit The number of digest iterations.
 */


/**
 * @ngdoc service
 * @name $rootScope
 * @description
 *
 * Every application has a single root {@link ng.$rootScope.Scope scope}.
 * All other scopes are descendant scopes of the root scope. Scopes provide separation
 * between the model and the view, via a mechanism for watching the model for changes.
 * They also provide event emission/broadcast and subscription facility. See the
 * {@link guide/scope developer guide on scopes}.
 */
function $RootScopeProvidernullchersCount = 0;
      this.$id = nextUid();
      this.$$ChildScope = null;
    }
    ChildScope.prototype = parent;
    return ChildScope;
  njector, $exceptionHandler, $parse, $browser) {

    function destroyChildScope($event) {
        $event.currentScope.$$destroyed = true;
    }

    function cleanUpScope($scope) {

      if (msie === 9) {
        // There is a memory leak in IE9 if all child scopes are not disconnected
        // completely when a scope is destroyed. So this code will recurse up through
        // all this scopes children
        //
        // See issue https://github.com/angular/angular.js/issues/10706
        $scope.$$childHead && cleanUpScope($scope.$$childHead);
        $scope.$$nextSibling && cleanUpScope($scope.$$nextSibling);
      }

      // The code below works around IE9 and V8's memory leaks
      //
      // See:
      // - https://code.google.com/p/v8/issues/detail?id=2073#c26
      // - https://github.com/angular/angular.js/issues/6794#issuecomment-38648909
      // - https://github.com/angular/angular.js/issues/1313#issuecomment-10378451

      $scope.$parent = $scope.$$nextSibling = $scope.$$prevSibling = $scope.$$childHead =
          $scope.$$childTail = $scope.$root = $scope.$$watchers = null;
    }

    /**
     * @ngdoc type
     * @name $rootScope.Scope
     *
     * @description
     * A root scope can be retrieved using the {@link ng.$rootScope $rootScope} key from the
     * {@link auto.$injector $injector}. Child scopes are created using the
     * {@link ng.$rootScope.Scope#$new $new()} method. (Most scopes are created automatically when
     * compiled HTML template is executed.) See also the {@link guide/scope Scopes guide} for
     * an in-depth introduction and usage examples.
     *
     *
     * # Inheritance
     * A scope can inherit from a parent scope, as in this example:
     * ```js
         var parent = $rootScope;
         var child = parent.$new();

         parent.salutation = "Hello";
         expect(child.salutation).toEqual('Hello');

         child.salutation = "Welcome";
         expect(child.salutation).toEqual('Welcome');
         expect(parent.salutation).toEqual('Hello');
     * ```
     *
     * When interacting with `Scope` in tests, additional helper methods are available on the
     * instances of `Scope` type. See {@link ngMock.$rootScope.Scope ngMock Scope} for additional
     * details.
     *
     *
     * @param {Object.<string, function()>=} providers Map of service factory which need to be
     *                                       provided for the current scope. Defaults to {@link ng}.
     * @param {Object.<string, *>=} instanceCache Provides pre-instantiated services which should
     *                              append/override services provided by `providers`. This is handy
     *                              when unit-testing and havifalse;
      this.$$listeners = {};
      this.$$listenerCount = {};
      this.$$watchersCount = 0;
      this.$$isolateBindings = null;
    }

    /**
     * @ngdoc property
     * @name $rootScope.Scope#$id
     *
     * @description
     * Unique scope ID (monotonically increasing) useful for debugging.
     */

     /**
      * @ngdoc property
      * @name $rootScope.Scope#$parent
      *
      * @description
      * Reference to the parent scope.
      */

      /**
       * @ngdoc property
       * @name $rootScope.Scope#$root
       *
       * @description
       * Reference to the root scope.
       */

    Scope.prototype = {
      constructor: Scope,
      /**
       * @ngdoc method
       * @name $rootScope.Scope#$new
       * @kind function
       *
       * @description
       * Creates a new child {@link ng.$rootScope.Scope scope}.
       *
       * The parent scope will propagate the {@link ng.$rootScope.Scope#$digest $digest()} event.
       * The scope can be removed from the scope hierarchy using {@link ng.$rootScope.Scope#$destroy $destroy()}.
       *
       * {@link ng.$rootScope.Scope#$destroy $destroy()} must be called on a scope when it is
       * desired for the scope and its child scopes to be permanently detached from the parent and
       * thus stop participating in model change detection and listener notification by invoking.
       *
       * @param {boolean} isolate If true, then the scope does not prototypically inherit from the
       *         parent scope. The scope is isolated, as it can not see parent scope properties.
       *         When creating widgets, it is useful for the widget to not accidentally read parent
       *         state.
       *
       * @param {Scope} [parent=this] The {@link ng.$rootScope.Scope `Scope`} that will be the `$parent`
       *                              of the newly created scope. Defaults to `this` scope if not provided.
       *                              This is used when creating a transclude scope to correctly place it
       *                              in the scope hierarchy while maintaining the correct prototypical
       *                              inheritance.
       *
       * @returns {Object} The newly created child scope.
       *
       */
      $new: function(isolate, parent) {
        var child;

        parent = parent || this;

        if (isolate) {
          child = new Scope();
          child.$root = this.$root;
        } else {
          // Only create a child scope class if somebody asks for one,
          // but cache it to allow the VM to optimize lookups.
          if (!this.$$ChildScope) {
            this.$$ChildScope = createChildScopeClass(this);
          }
          child = new this.$$ChildScope();
        }
        child.$parent = parent;
        child.$$prevSibling = parent.$$childTail;
        if (parent.$$childHead) {
          parent.$$childTail.$$nextSibling = child;
          parent.$$childTail = child;
        } else {
          parent.$$childHead = parent.$$childTail = child;
        }

        // When the new scope is not isolated or we inherit from `this`, and
        // the parent scope is destroyed, the property `$$destroyed` is inherited
        // prototypically. In all other cases, this property needs to be set
        // when the parent scope is destroyed.
        // The listener needs to be added after the parent is set
        if (isolate || parent != this) child.$on('$destroy', destroyChildScope);

        return child;
      },

      /**
       * @ngdoc method
       * @name $rootScope.Scope#$watch
       * @kind function
       *
       * @description
       * Registers a `listener` callback to be executed whenever the `watchExpression` changes.
       *
       * - The `watchExpression` is called on every call to {@link ng.$rootScope.Scope#$digest
       *   $digest()} and should return the value that will be watched. (`watchExpression` should not change
       *   its value when executed multiple times with the same input because it may be executed multiple
       *   times by {@link ng.$rootScope.Scope#$digest $digest()}. That is, `watchExpression` should be
       *   [idempotent](http://en.wikipedia.org/wiki/Idempotence).
       * - The `listener` is called only when the value from the current `watchExpression` and the
       *   previous call to `watchExpression` are not equal (with the exception of the initial run,
       *   see below). Inequality is determined according to reference inequality,
       *   [strict comparison](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
       *    via the `!==` Javascript operator, unless `objectEquality == true`
       *   (see next point)
       * - When `objectEquality == true`, inequality of the `watchExpression` is determined
       *   according to the {@link angular.equals} function. To save the value of the object for
       *   later comparison, the {@link angular.copy} function is used. This therefore means that
       *   watching complex objects will have adverse memory and performance implications.
       * - The watch `listener` may change the model, which may trigger other `listener`s to fire.
       *   This is achieved by rerunning the watchers until no changes are detected. The rerun
       *   iteration limit is 10 to prevent an infinite loop deadlock.
       *
       *
       * If you want to be notified whenever {@link ng.$rootScope.Scope#$digest $digest} is called,
       * you can register a `watchExpression` function with no `listener`. (Be prepared for
       * multiple calls to your `watchExpression` because it will execute multiple times in a
       * single {@link ng.$rootScope.Scope#$digest $digest} cycle if a change is detected.)
       *
       * After a watcher is registered with the scope, the `listener` fn is called asynchronously
       * (via {@link ng.$rootScope.Scope#$evalAsync $evalAsync}) to initialize the
       * watcher. In rare cases, this is undesirable because the listener is called when the result
       * of `watchExpression` didn't change. To detect this scenario within the `listener` fn, you
       * can compare the `newVal` and `oldVal`. If these two values are identical (`===`) then the
       * listener was called due to initialization.
       *
       *
       *
       * # Example
       * ```js
           // let's assume that scope was dependency injected as the $rootScope
           var scope = $rootScope;
           scope.name = 'misko';
           scope.counter = 0;

           expect(scope.counter).toEqual(0);
           scope.$watch('name', function(newValue, oldValue) {
             scope.counter = scope.counter + 1;
           });
           expect(scope.counter).toEqual(0);

           scope.$digest();
           // the listener is always called during the first $digest loop after it was registered
           expect(scope.counter).toEqual(1);

           scope.$digest();
           // but now it will not be called unless the value changes
           expect(scope.counter).toEqual(1);

           scope.name = 'adam';
           scope.$digest();
           expect(scope.counter).toEqual(2);



           // Using a function as a watchExpression
           var food;
           scope.foodCounter = 0;
           expect(scope.foodCounter).toEqual(0);
           scope.$watch(
             // This function returns the value being watched. It is called for each turn of the $digest loop
             function() { return food; },
             // This is the change listener, called when the value returned from the above function changes
             function(newValue, oldValue) {
               if ( newValue !== oldValue ) {
                 // Only increment the counter if the value changed
                 scope.foodCounter = scope.foodCounter + 1;
               }
             }
           );
           // No digest has been run so the counter will be zero
           expect(scope.foodCounter).toEqual(0);

           // Run the digest but since food has not changed count will still be zero
           scope.$digest();
           expect(scope.foodCounter).toEqual(0);

           // Update food and run digest.  Now the counter will increment
           food = 'cheeseburger';
           scope.$digest();
           expect(scope.foodCounter).toEqual(1);

       * ```
       *
       *
       *
       * @param {(function()|string)} watchExpression Expression that is evaluated on each
       *    {@link ng.$rootScope.Scope#$digest $digest} cycle. A change in the return value triggers
       *    a call to the `listener`.
       *
       *    - `string`: Evaluated as {@link guide/expression expression}
       *    - `function(scope)`: called with current `scope` as a parameter.
       * @param {function(newVal, oldVal, scope)} listener Callback called whenever the value
       *    of `watchExpression` changes.
       *
       *    - `newVal` contains the current value of the `watchExpression`
       *    - `oldVal` contains the previous value of the `watchExpression`
       *    - `scope` refers to the current scope
       * @param {boolean=} objectEquality Compare for object equality using {@link angular.equals} instead of
       *     comparing for reference equality.
       * @returns {function()} Returns a deregistration function for this listener.
       */
      $watch: function(watchExp, listener, objectEquality, prettyPrintExpression) {
        var get = $parse(watchExp);

        if (get.$$watchDelegate) {
          return get.$$watchDelegate(this, listener, objectEquality, get, watchExp);
        }
        var scope = this,
            array = scope.$$watchers,
            watcher = {
              fn: listener,
              last: initWatchVal,
              get: get,
              exp: prettyPrintExpression || watchExp,
              eq: !!objectEquality
            };

        lastDirtyWatch = null;

        if (!isFunction(listener)) {
          watcher.fn = noop;
        }

        if (!array) {
          array = scope.$$watchers = [];
        }
        // we use unshift since we use a while loop in $digest for speed.
        // the while loop reads in reverse order.
        array.unshift(watcher);
        incrementWatchersCount(this, 1);

        return function deregisterWatch() {
          if (arrayRemove(array, watcher) >= 0) {
            incrementWatchersCount(scope, -1);
          }
          lastDirtyWatch = null;
        };
      },

      /**
       * @ngdoc method
       * @name $rootScope.Scope#$watchGroup
       * @kind function
       *
       * @description
       * A variant of {@link ng.$rootScope.Scope#$watch $watch()} where it watches an array of `watchExpressions`.
       * If any one expression in the collection changes the `listener` is executed.
       *
       * - The items in the `watchExpressions` array are observed via standard $watch operation and are examined on every
       *   call to $digest() to see if any items changes.
       * - The `listener` is called whenever any expression in the `watchExpressions` array changes.
       *
       * @param {Array.<string|Function(scope)>} watchExpressions Array of expressions that will be individually
       * watched using {@link ng.$rootScope.Scope#$watch $watch()}
       *
       * @param {function(newValues, oldValues, scope)} listener Callback called whenever the return value of any
       *    expression in `watchExpressions` changes
       *    The `newValues` array contains the current values of the `watchExpressions`, with the indexes matching
       *    those of `watchExpression`
       *    and the `oldValues` array contains the previous values of the `watchExpressions`, with the indexes matching
       *    those of `watchExpression`
       *    The `scope` function deregisterWatchGroup() {
          while (deregisterFns.length) {
            deregisterFns.shift()();
          }
        };
      },


      /**
       * @ngdoc method
       * @name $rootScope.Scope#$watchCollection
       * @kind function
       *
       * @description
       * Shallow watches the properties of an object and fires whenever any of the properties change
       * (for arrays, this implies watching the array items; for object maps, this implies watching
       * the properties). If a change is detected, the `listener` callback is fired.
       *
       * - The `obj` collection is observed via standard $watch operation and is examined on every
       *   call to $digest() to see if any items have been added, removed, or moved.
       * - The `listener` is called whenever anything within the `obj` has changed. Examples include
       *   adding, removing, and moving items belonging to an object or array.
       *
       *
       * # Example
       * ```js
          $scope.names = ['igor', 'matias', 'misko', 'james'];
          $scope.dataCount = 4;

          $scope.$watchCollection('names', function(newNames, oldNames) {
            $scope.dataCount = newNames.length;
          });

          expect($scope.dataCount).toEqual(4);
          $scope.$digest();

          //still at 4 ... no changes
          expect($scope.dataCount).toEqual(4);

          $scope.names.pop();
          $scope.$digest();

          //now there's been a change
          expect($scope.dataCount).toEqual(3);
       * ```
       *
       *
       * @param {string|function(scope)} obj Evaluated as {@link guide/expression expression}. The
       *    expression value should evaluate to an object or an array which is observed on each
       *    {@link ng.$rootScope.Scope#$digest $digest} cycle. Any shallow change within the
       *    collection will trigger a call to the `listener`.
       *
       * @param {function(newCollection, oldCollection, scope)} listener a callback function called
       *    when a change is detected.
       *    - The `newCollection` object is the newly modified data obtained from the `obj` expression
       *    - The `oldCollection` object is a copy of the former collection data.
       *      Due to performance considerations, the`oldCollection` value is computed only if the
       *      `listener` function declares two or more arguments.
       *    - The `scope` argument refers to the current scope.
       *
       * @returns {function()} Returns a de-registration function for this lis             }
              }
            }
          }
        }

        return this.$watch(changeDetector, $watchCollectionAction);
      },

      /**
       * @ngdoc method
       * @name $rootScope.Scope#$digest
       * @kind function
       *
       * @description
       * Processes all of the {@link ng.$rootScope.Scope#$watch watchers} of the current scope and
       * its children. Because a {@link ng.$rootScope.Scope#$watch watcher}'s listener can change
       * the model, the `$digest()` keeps calling the {@link ng.$rootScope.Scope#$watch watchers}
       * until no more listeners are firing. This means that it is possible to get into an infinite
       * loop. This function will throw `'Maximum iteration limit exceeded.'` if the number of
       * iterations exceeds 10.
       *
       * Usually, you don't call `$digest()` directly in
       * {@link ng.directive:ngController controllers} or in
       * {@link ng.$compileProvider#directive directives}.
       * Instead, you should call {@link ng.$rootScope.Scope#$apply $apply()} (typically from within
       * a {@link ng.$compileProvider#directive directive}), which will force a `$digest()`.
       *
       * If you want to be notified whenever `$digest()` is called,
       * you can register a `watchExpression` function with
       * {@link ng.$rootScope.Scope#$watch $watch()} with no `listener`.
       *
       * In unit tests, you may need to call `$digest()` to simulate the scope life cycle.
       *
       * # Example
       * ```js
           var scope = ...;
           scope.name = 'misko';
           scope.counter = 0;

           expect(scope.counter).toEqual(0);
           scope.$watch('name', function(newValue, oldValue) {
             scope.counter = scope.counter + 1;
           });
           expect(scope.counter).toEqual(0);

           scope.$digest();
           // the listener is always called during the first $digest loop after it was registered
           expect(scope.counter).toEqual(1);

           scope.$digest();
           // but now it will not be called unless the value changes
           expect(scope.counter).toEqual(1);

           scope.name = 'adam';
           scope.$digest();
           expect(scope.counter).toEqual(2);
       * ```
       *
       */
      $digest: function() {
        var watch, value, last, fn, get,
            watchers,
            length,
            dirty, ttl = TTL,
            next, current, target = this,
            watchLog = [],
            logIdx, logMsg, asyncTask;

        beginPhase('$digest');
        // Check for changes to browser url that happened in sync before the call to $digest
        $browser.$$checkUrlChange();

        if (this === $rootScope && applyAsyncId !== null) {
          // If this is the root scope, and $applyAsync has scheduled a deferred $apply(), then
          // cancel the scheduled $apply and flush the queue of expressions to be evaluated.
          $browser.defer.cancel(applyAsyncId);
          flushApplyAsync();
        }

        lastDirtyWatch = null;

        do { // "while dirty" loop
          dirty = false;
          current = target;

          while (asyncQueue.length) {
            try {
              asyncTask = asyncQueue.shift();
              asyncTask.scope.$eval(asyncTask.expression, asyncTask.locals);
            } catch (e) {
              $exceptionHandler(e);
            }
            lastDirtyWatch = null;
          }

          traverseScopesLoop:
          do { // "traverse the scopes" loop
            if ((watchers = current.$$watchers)) {
              // process our watches
              length = watchers.length;
              while (length--) {
                try {
                  watch = watchers[length];
                  // Most common watches are on primitives, in which case we can short
                  // circuit it with === operator, only when === fails do we use .equals
                  if (watch) {
                    get = watch.get;
                    if ((value = get(current)) !== (last = watch.last) &&
                        !(watch.eq
                            ? equals(value, last)
                            : (typeof value === 'number' && typeof last === 'number'
                               && isNaN(value) && isNaN(last)))) {
                      dirty = true;
                      lastDirtyWatch = watch;
                      watch.last = watch.eq ? copy(value, null) : value;
                      fn = watch.fn;
                      fn(value, ((last === initWatchVal) ? value : last), current);
                      if (ttl < 5) {
                        logIdx = 4 - ttl;
                        if (!watchLog[logIdx]) watchLog[logIdx] = [];
                        watchLog[logIdx].push({
                          msg: isFunction(watch.exp) ? 'fn: ' + (watch.exp.name || watch.exp.toString()) : watch.exp,
                          newVal: value,
                          oldVal: last
                        });
                      }
                    } else if (watch === lastDirtyWatch) {
                      // If the most recently dirty watcher is now clean, short circuit since the remaining watchers
                      // have already been tested.
                      dirty = false;
                      break traverseScopesLoop;
                    }
                  }
                } catch (e) {
                  $exceptionHandler(e);
                }
              }
            }

            // Insanity Warning: scope depth-first traversal
            // yes, this code is a bit crazy, but it works and we have tests to prove it!
            // this piece should be kept in sync with the traversal in $broadcast
            if (!(next = ((current.$$watchersCount && current.$$childHead) ||
                (current !== target && current.$$nextSibling)))) {
              while (current !== target && !(next = current.$$nextSibling)) {
                current = current.$parent;
              }
            }
          } while ((current = next));

          // `break traverseScopesLoop;` takes us to here

          if ((dirty || asyncQueue.length) && !(ttl--)) {
            clearPhase();
            throw $rootScopeMinErr('infdig',
                '{0} $digest() iterations reached. Aborting!\n' +
                'Watchers fired in the last 5 iterations: {1}',
                TTL, watchLog);
          }

        } while (dirty || asyncQueue.length);

        clearPhase();

        while (postDigestQueue.length) {
          try {
            postDigestQueue.shift()();
          } catch (e) {
            $exceptionHandler(e);
          }
        }
      },


      /**
       * @ngdoc event
       * @name $rootScope.Scope#$destroy
       * @eventType broadcast on scope being destroyed
       *
       * @description
       * Broadcasted when a scope and its children are being destroyed.
       *
       * Note that, in AngularJS, there is also a `$destroy` jQuery event, which can be used to
       * clean up DOM bindings before an element is removed from the DOM.
       */

      /**
       * @ngdoc method
       * @name $rootScope.Scope#$destroy
       * @kind function
       *
       * @description
       * Removes the current scope (and all of its children) from the parent scope. Removal implies
       * that calls to {@link ng.$rootScope.Scope#$digest $digest()} will no longer
       * propagate to the current scope and its children. Removal also implies that the current
       * scope is eligible for garbage collection.
       *
       * The `$destroy()` is usually used by directives such as
       * {@link ng.directive:ngRepeat ngRepeat} for managing the
       * unrolling of the loop.
       *
       * Just before a scope is destroyed, a `$destroy` event is broadcasted on this scope.
       * Application code can register a `$destroy` event handler that will give it a chance to
       * perform any necessary cleanup.
       *
       * Note that, in AngularJS, there is also a `$destroy` jQuery event, which can be used to
       * clean up DOM bindings before an element is removed from the DOM.
       */
      $destroy: function() {
        // We can't destroy a scope that has been already destroyed.
        if (this.$$destroyed) return;
        var parent = this.$parent;

        this.$broadcast('$destroy');
        this.$$destroyed = true;

        if (this === $rootScope) {
          //Remove handlers attached to window when $rootScope is removed
          $browser.$$applicationDestroyed();
        }

        incrementWatchersCount(this, -this.$$watchersCount);
        for (var eventName in this.$$listenerCount) {
          decrementListenerCount(this, this.$$listenerCount[eventName], eventName);
        }

        // sever all the references to parent scopes (after this cleanup, the current scope should
        // not be retained by any of our references and should be eligible for garbage collection)
        if (parent && parent.$$childHead == this) parent.$$childHead = this.$$nextSibling;
        if (parent && parent.$$childTail == this) parent.$$childTail = this.$$prevSibling;
        if (this.$$prevSibling) this.$$prevSibling.$$nextSibling = this.$$nextSibling;
        if (this.$$nextSibling) this.$$nextSibling.$$prevSibling = this.$$prevSibling;

        // Disable listeners, watchers and apply/digest methods
        this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = noop;
        this.$on = this.$watch = this.$watchGroup = function() { return noop; };
        this.$$listeners = {};

        // Disconnect the next sibling to prevent `cleanUpScope` destroying those too
        this.$$nextSibling = null;
        cleanUpScope(this);
      },

      /**
       * @ngdoc method
       * @name $rootScope.Scope#$eval
       * @kind function
       *
       * @description
       * Executes the `expression` on the current scope and returns the result. Any exceptions in
       * the expression are propagated (uncaught). This is useful when evaluating Angular
       * expressions.
       *
       * # Example
       * ```js
           var scope = ng.$rootScope.Scope();
           scope.a = 1;
           scope.b = 2;

           expect(scope.$eval('a+b')).toEqual(3);
           expect(scope.$eval(function(scope){ return scope.a + scope.b; })).toEqual(3);
       * ```
       *
       * @param {(string|function())=} expression An angular expression to be executed.
       *
       *    - `string`: execute using the rules as defined in  {@link guide/expression expression}.
       *    - `function(scope)`: execute the function with the current `scope` parameter.
       *
       * @param {(object)=} locals Local{*} The result of evaluating the expression.
       */
      $eval: function(expr, locals) {
        return $parse(expr)(this, locals);
      },

      /**
       * @ngdoc method
       * @name $rootScope.Scope#$evalAsync
       * @kind function
       *
       * @description
       * Executes the expression on the current scope at a later point in time.
       *
       * The `$evalAsync` makes no guarantees as to when the `expression` will be executed, only
       * that:
       *
       *   - it will execute after the function that scheduled the evaluation (preferably before DOM
       *     rendering).
       *   - at least one {@link ng.$rootScope.Scope#$digest $digest cycle} will be performed after
       *     `expression` execution.
       *
       * Any exceptions from the execution of the expression are forwarded to the
       * {@link ng.$exceptionHandler $exceptionHandler} service.
       *
       * __Note:__ if this function is called outside of a `$digest` cycle, a new `$digest` cycle
       * will be scheduled. However, it is encouraged to always call code that changes the model
       * from within an `$apply` call. That includes code evaluated via `$evalAsync`.
       *
       * @param {(string|function())=} expression An angular expression to be executed.
       *
       *    - `string`: execute using the rules as defined in {@link guide/expression expression}.
       *    - `function(scope)`: execute the function with the current `scope` paope.$digest();
            }
          });
        }

        asyncQueue.push({scope: this, expression: $parse(expr), locals: locals});
      },

      $$postDigest: function(fn) {
        postDigestQueue.push(fn);
      },

      /**
       * @ngdoc method
       * @name $rootScope.Scope#$apply
       * @kind function
       *
       * @description
       * `$apply()` is used to execute an expression in angular from outside of the angular
       * framework. (For example from browser DOM events, setTimeout, XHR or third party libraries).
       * Because we are calling into the angular framework we need to perform proper scope life
       * cycle of {@link ng.$exceptionHandler exception handling},
       * {@link ng.$rootScope.Scope#$digest executing watches}.
       *
       * ## Life cycle
       *
       * # Pseudo-Code of `$apply()`
       * ```js
           function $apply(expr) {
             try {
               return $eval(expr);
             } catch (e) {
               $exceptionHandler(e);
             } finally {
               $root.$digest();
             }
           }
       * ```
       *
       *
       * Scope's `$apply()` method transitions through the following stages:
       *
       * 1. The {@link guide/expression expression} is executed using the
       *    {@link ng.$rootScope.Scope#$eval $eval()} method.
       * 2. Any exceptions from the execution of the expression are forwarded to the
       *    {@link ng.$exceptionHandler $exceptionHandler} service.
       * 3. The {@link ng.$rootScope.Scope#$watch watch} listeners are fired immediately after the
       *    expression was executed using the {@link ng.$rootScope.Scope#$digest $digest()} method.
       *
       *
       * @param {(string|function())=} exp An angular expression to be executed.
       *
       *    - `string`: execute using the rules as defined in {@link guide/expression expression}.
       *    - `function(scope)`: execu
            $rootScope.$digest();
          } catch (e) {
            $exceptionHandler(e);
            throw e;
          }
        }
      },

      /**
       * @ngdoc method
       * @name $rootScope.Scope#$applyAsync
       * @kind function
       *
       * @description
       * Schedule the invocation of $apply to occur at a later time. The actual time difference
       * varies across browsers, but is typically around ~10 milliseconds.
       *
       * This can be used to queue up multiple expressions which need to be evaluated in the same
       * digest.
       *
       * @param {(string|function())=} exp An angular expression to be executed.
       *
       *    - `string`: execute using the rules as defined in {@link guide/expression expression}.
       *    - `function(scope)`: execute the function with current `scope` parameter.
       */
      $applyAsync: function(expr) {
        var;
        expr = $parse(expr);
        scheduleApplyAsync();

        function $applyAsyncExpression() {
          scope.$eval(expr);
        }
      },

      /**
       * @ngdoc method
       * @name $rootScope.Scope#$on
       * @kind function
       *
       * @description
       * Listens on events of a given type. See {@link ng.$rootScope.Scope#$emit $emit} for
       * discussion of event life cycle.
       *
       * The event listener function format is: `function(event, args...)`. The `event` object
       * passed into the listener has the following attributes:
       *
       *   - `targetScope` - `{Scope}`: the scope on which the event was `$emit`-ed or
       *     `$broadcast`-ed.
       *   - `currentScope` - `{Scope}`: the scope that is currently handling the event. Once the
       *     event propagates through the scope hierarchy, this property is set to null.
       *   - `name` - `{string}`: name of the event.
       *   - `stopPropagation` - `{function=}`: calling `stopPropagation` function will cancel
       *     further event propagation (available only for events that were `$emit`-ed).
       *   - `preventDefault` - `{function}`: calling `preventDefault` sets `defaultPrevented` flag
       *     to true.
       *   - `defaultPrevented` - `{boolean}`: true if `preventDefault` was called.
       *
       * @param {string} name Event name to listen on.
       * @param {function(event, ...args)} listener Funct!== -1) {
            namedListeners[indexOfListener] = null;
            decrementListenerCount(self, 1, name);
          }
        };
      },


      /**
       * @ngdoc method
       * @name $rootScope.Scope#$emit
       * @kind function
       *
       * @description
       * Dispatches an event `name` upwards through the scope hierarchy notifying the
       * registered {@link ng.$rootScope.Scope#$on} listeners.
       *
       * The event life cycle starts at the scope on which `$emit` was called. All
       * {@link ng.$rootScope.Scope#$on listeners} listening for `name` event on this scope get
       * notified. Afterwards, the event traverses upwards toward the root scope and calls all
       * registered listeners along the way. The event will stop propagating if one of the listeners
       * cancels it.
       *
       * Any exception emitted from the {@link ng.$rootScope.Scope#$on listeners} will be passed
       * onto the {@link ng.$exceptionHandler $exceptionHandler} service.
       *
       * @param {string} name Event name to emit.
       * @param {...*} args Optional one or more arguments whic//traverse upwards
          scope = scope.$parent;
        } while (scope);

        event.currentScope = null;

        return event;
      },


      /**
       * @ngdoc method
       * @name $rootScope.Scope#$broadcast
       * @kind function
       *
       * @description
       * Dispatches an event `name` downwards to all child scopes (and their children) notifying the
       * registered {@link ng.$rootScope.Scope#$on} listeners.
       *
       * The event life cycle starts at the scope on which `$broadcast` was called. All
       * {@link ng.$rootScope.Scope#$on listeners} listening for `name` event on this scope get
       * notified. Afterwards, the event propagates to all direct and indirect scopes of the current
       * scope and calls all registered listeners along the way. The event cannot be canceled.
       *
       * Any exception emitted from the {@link ng.$rootScope.Scope#$on listeners} will be passed
       * onto the {@link ng.$exceptionHandler $exceptionHandler} service.
       *
       * @param {string} name Event name to broadcast.
       * @param {...*} args Optional one or more arguments which w
              current = current.$parent;
            }
          }
        }

        event.currentScope = null;
        return event;
      }
    };

    var $rootScope = new Scope();

    //The internal queues. Expose them on the $rootScope for debugging/testing purposes.
    var asyncQueue = $rootScope.$$asyncQueue = [];
    var se) {ess',ncrement.$$listenerCount[name] === 0) {
          delete current.$$listenerCount[name];
        }
      } while ((current = current.$parent));
    }

    /**
     * function used as an i{
   yAsyncId === null) {
        applyAsyncId = $browser.defer(function() {
          $rootScope.$apply(flushApplyAsync);
        });
      }
    }
  }];
}

/**
 * @ngdoc service
 * @name $rootElement
 *
 * @description
 * The root element of Angular application. This is either the element where {@link
 * ng.directive:ngApp ngApp} was declared or the element passed into
 * {@link angular.bootstrap}. The element represents the root element of application. It is also the
 * location where the application's {@link auto.$injector $injector} service gets
 * published, and can be retrieved using `$rootElement.injector()`.
 */


// the implementa   if (normalizedVal !== '' && !normalizedVal.match(regex)) {
        return 'unsafe:' + normalizedVal;
      }
      return uri;
    };
  };
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *     Any commits to this file should be reviewed with security in mind.  *
 *   Changes to this file can potentially create security vulnerabilities. *
 *          An approval from 2 Core members with history of modifying      *
 *                         this file is required.                          *
 *                                                                         *
 *  Does the change somehow allow for arbitrary javascript to be executed? *
 *    Or allows for someone to change the prototype of built-in objects?   *
 *     Or gives undesired access to variables likes document or window?    *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var $sceMinErr = minErr('$sce');

var SCE_CONTEXTS = {
  HTML: 'html',
  CSS: 'css',
  URL: 'url',
  // RESOURCE_URL is a subtype of URL used in contexts where a privileged resource is heers)) {
    forEach(matchers, function(matcher) {
      adjustedMatchers.push(adjustMatcher(matcher));
    });
  }
  return adjustedMatchers;
}


/**
 * @ngdoc service
 * @name $sceDelegate
 * @kind function
 *
 * @description
 *
 * `$sceDelegate` is a service that is used by the `$sce` service to provide {@link ng.$sce Strict
 * Contextual Escaping (SCE)} services to AngularJS.
 *
 * Typically, you would configure or override the {@link ng.$sceDelegate $sceDelegate} instead of
 * the `$sce` service to customize the way Strict Contextual Escaping works in AngularJS.  This is
 * because, while the `$sce` provides numerous shorthand methods, etc., you really only need to
 * override 3 core functions (`trustAs`, `getTrusted` and `valueOf`) to replace the way things
 * work because `$sce` delegates to `$sceDelegate` for these operations.
 *
 * Refer {@link ng.$sceDelegateProvider $sceDelegateProvider} to configure this service.
 *
 * The default instance of `$sceDelegate` should work out of the box with little pain.  While you
 * can override it completely to change the behavior of `$sce`, the common case would
 * involve configuring the {@link ng.$sceDelegateProvider $sceDelegateProvider} instead by setting
 * your own whitelists and blacklists for trusting URLs used for loading AngularJS resources such as
 * templates.  Refer {@link ng.$sceDelegateProvider#resourceUrlWhitelist
 * $sceDelegateProvider.resourceUrlWhitelist} and {@link
 * ng.$sceDelegateProvider#resourceUrlBlacklist $sceDelegateProvider.resourceUrlBlacklist}
 */

/**
 * @ngdoc provider
 * @name $sceDelegateProvider
 * @description
 *
 * The `$sceDelegateProvider` provider allows developers to configure the {@link ng.$sceDelegate
 * $sceDelegate} service.  This allows one to get/set the whitelists and blacklists used to ensure
 * that the URLs used for sourcing Angular templates are safe.  Refer {@link
 * ng.$sceDelegateProvider#resourceUrlWhitelist $sceDelegateProvider.resourceUrlWhitelist} and
 * {@link ng.$sceDelegateProvider#resourceUrlBlacklist $sceDelegateProvider.resourceUrlBlacklist}
 *
 * For the general details about this service in Angular, read the main page for {@link ng.$sce
 * Strict Contextual Escaping (SCE)}.
 *
 * **Example**:  Consider the following case. <a name="example"></a>
 *
 * - your app is hosted at url `http://myapp.example.com/`
 * - but some of your templates are hosted on other domains you control such as
 *   `http://srv01.assets.example.com/`,  `http://srv02.assets.example.com/`, etc.
 * - and you have an open redirect at `http://myapp.example.com/clickThru?...`.
 *
 * Here is what a secure configuration for this scenario might look like:
 *
 * ```
 *  angular.module('myApp', []).config(function($sceDelegateProvider) {
 *    $sceDelegateProvider.resourceUrlWhitelist([
 *      // Allow same origin resource loads.
 *      'self',
 *      // Allow loading from our assets domain.  Notice the difference between * and **.
 *      'http://srv*.assets.example.com/**'
 *    ]);
 *
 *    // The blacklist overrides the whitelist so the open redirect value in a safe context.');
    }

    return { trustAs: trustAs,
             getTrusted: getTrusted,
             valueOf: valueOf };
  }];
}


/**
 * @ngdoc provider
 * @name $sceProvider
 * @description
 *
 * The $sceProvider provider allows developers to configure the {@link ng.$sce $sce} service.
 * -   enable/disable Strict Contextual Escaping (SCE) in a module
 * -   override the default implementation with a custom delegate
 *
 * Read more about {@link ng.$sce Strict Contextual Escaping (SCE)}.
 */

/* jshint maxlen: false*/

/**
 * @ngdoc service
 * @name $sce
 * @kind function
 *
 * @description
 *
 * `$sce` is a service that provides Strict Contextual Escaping services to AngularJS.
 *
 * # Strict Contextual Escaping
 *
 * Strict Contextual Escaping (SCE) is a mode in which AngularJS requires bindings in certain
 * contexts to result in a value that is marked as safe to use for that context.  One example of
 * such a context is binding arbitrary html controlled by the user via `ng-bind-html`.  We refer
 * to these contexts as privileged or SCE contexts.
 *
 * As of version 1.2, Angular ships with SCE enabled by default.
 *
 * Note:  When enabled (the default), IE<11 in quirks mode is not supported.  In this mode, IE<11 allow
 * one to execute arbitrary javascript by the use of the expression() syntax.  Refer
 * <http://blogs.msdn.com/b/ie/archive/2008/10/16/ending-expressions.aspx> to learn more about them.
 * You can ensure your document is in standards mode and not quirks mode by adding `<!doctype html>`
 * to the top of your HTML document.
 *
 * SCE assists in writing code in way that (a) is secure by default and (b) makes auditing for
 * security vulnerabilities such as XSS, clickjacking, etc. a lot easier.
 *
 * Here's an example of a binding in a privileged context:
 *
 * ```
 * <input ng-model="userHtml" aria-label="User input">
 * <div ng-bind-html="userHtml"></div>
 * ```
 *
 * Notice that `ng-bind-html` is bound to `userHtml` controlled by the user.  With SCE
 * disabled, this application allows the user to render arbitrary HTML into the DIV.
 * In a more realistic example, one may be rendering user comments, blog articles, etc. via
 * bindings.  (HTML is just one example of a context where rendering user controlled input creates
 * security vulnerabilities.)
 *
 * For the case of HTML, you might use a library, either on the client side, or on the server side,
 * to sanitize unsafe HTML before binding to the value and rendering it in the document.
 *
 * How would you ensure that every place that used these types of bindings was bound to a value that
 * was sanitized by your library (or returned as safe for rendering by your server?)  How can you
 * ensure that you didn't accidentally delete the line that sanitized the value, or renamed some
 * properties/fields and forgot to update the binding to the sanitized value?
 *
 * To be secure by default, you want to ensure that any such bindings are disallowed unless you can
 * determine that something explicitly says it's safe to use a value for binding in that
 * context.  You can then audit your code (a simple grep would do) to ensure that this is only done
 * for those values that you can easily tell are safe - because they were received from your server,
 * sanitized by your library, etc.  You can organize your codebase to help with this - perhaps
 * allowing only the files in a specific directory to do this.  Ensuring that the internal API
 * exposed by that code doesn't markup arbitrary values as safe then becomes a more manageable task.
 *
 * In the case of AngularJS' SCE service, one uses {@link ng.$sce#trustAs $sce.trustAs}
 * (and shorthand methods such as {@link ng.$sce#trustAsHtml $sce.trustAsHtml}, etc.) to
 * obtain values that will be accepted by SCE / privileged contexts.
 *
 *
 * ## How does it work?
 *
 * In privileged contexts, directives and code will bind to the result of {@link ng.$sce#getTrusted
 * $sce.getTrusted(context, value)} rather than to the value directly.  Directives use {@link
 * ng.$sce#parseAs $sce.parseAs} rather than `$parse` to watch attribute bindings, which performs the
 * {@link ng.$sce#getTrusted $sce.getTrusted} behind the scenes on non-constant literals.
 *
 * As an example, {@link ng.directive:ngBindHtml ngBindHtml} uses {@link
 * ng.$sce#parseAsHtml $sce.parseAsHtml(binding expression)}.  Here's the actual code (slightly
 * simplified):
 *
 * ```
 * var ngBindHtmlDirective = ['$sce', function($sce) {
 *   return function(scope, element, attr) {
 *     scope.$watch($sce.parseAsHtml(attr.ngBindHtml), function(value) {
 *       element.html(value || '');
 *     });
 *   };
 * }];
 * ```
 *
 * ## Impact on loading templates
 *
 * This applies both to the {@link ng.directive:ngInclude `ng-include`} directive as well as
 * `templateUrl`'s specified by {@link guide/directive directives}.
 *
 * By default, Angular only loads templates from the same domain and protocol as the application
 * document.  This is done by calling {@link ng.$sce#getTrustedResourceUrl
 * $sce.getTrustedResourceUrl} on the template URL.  To load templates from other domains and/or
 * protocols, you may either {@link ng.$sceDelegateProvider#resourceUrlWhitelist whitelist
 * them} or {@link ng.$sce#trustAsResourceUrl wrap it} into a trusted value.
 *
 * *Please note*:
 * The browser's
 * [Same Origin Policy](https://code.google.com/p/browsersec/wiki/Part2#Same-origin_policy_for_XMLHttpRequest)
 * and [Cross-Origin Resource Sharing (CORS)](http://www.w3.org/TR/cors/)
 * policy apply in addition to this and may further restrict whether the template is successfully
 * loaded.  This means that without the right CORS policy, loading templates from a different domain
 * won't work on all browsers.  Also, loading templates from `file://` URL does not work on some
 * browsers.
 *
 * ## This feels like too much overhead
 *
 * It's important to remember that SCE only applies to interpolation expressions.
 *
 * If your expressions are constant literals, they're automatically trusted and you don't need to
 * call `$sce.trustAs` on them (remember to include the `ngSanitize` module) (e.g.
 * `<div ng-bind-html="'<b>implicitly trusted</b>'"></div>`) just works.
 *
 * Additionally, `a[href]` and `img[src]` automatically sanitize their URLs and do not pass them
 * through {@link ng.$sce#getTrusted $sce.getTrusted}.  SCE doesn't play a role here.
 *
 * The included {@link ng.$sceDelegate $sceDelegate} comes with sane defaults to allow you to load
 * templates in `ng-include` from your application's domain without having to even know about SCE.
 * It blocks loading templates from other domains or loading templates over http from an https
 * served document.  You can change these by setting your own custom {@link
 * ng.$sceDelegateProvider#resourceUrlWhitelist whitelists} and {@link
 * ng.$sceDelegateProvider#resourceUrlBlacklist blacklists} for matching such URLs.
 *
 * This significantly reduces the overhead.  It is far easier to pay the small overhead and have an
 * application that's secure and can be audited to verify that with much more ease than bolting
 * security onto an application later.
 *
 * <a name="contexts"></a>
 * ## What trusted context types are supported?
 *
 * | Context             | Notes          |
 * |---------------------|----------------|
 * | `$sce.HTML`         | For HTML that's safe to source into the application.  The {@link ng.directive:ngBindHtml ngBindHtml} directive uses this context for bindings. If an unsafe value is encountered and the {@link ngSanitize $sanitize} module is present this will sanitize the value instead of throwing an error. |
 * | `$sce.CSS`          | For CSS that's safe to source into the application.  Currently unused.  Feel free to use it in your own directives. |
 * | `$sce.URL`          | For URLs that are safe to follow as links.  Currently unused (`<a href=` and `<img src=` sanitize their urls and don't constitute an SCE context. |
 * | `$sce.RESOURCE_URL` | For URLs that are not only safe to follow as links, but whose contents are also safe to include in your application.  Examples include `ng-include`, `src` / `ngSrc` bindings for tags other than `IMG` (e.g. `IFRAME`, `OBJECT`, etc.)  <br><br>Note that `$sce.RESOURCE_URL` makes a stronger statement about the URL than `$sce.URL` does and therefore contexts requiring values trusted for `$sce.RESOURCE_URL` can be used anywhere that values trusted for `$sce.URL` are required. |
 * | `$sce.JS`           | For JavaScript that is safe to execute in your application's context.  Currently unused.  Feel free to use it in your own directives. |
 *
 * ## Format of items in {@link ng.$sceDelegateProvider#resourceUrlWhitelist resourceUrlWhitelist}/{@link ng.$sceDelegateProvider#resourceUrlBlacklist Blacklist} <a name="resourceUrlPatternItem"></a>
 *
 *  Each element in these arrays must be one of the following:
 *
 *  - **'self'**
 *    - The special **string**, `'self'`, can be used to match against all URLs of the **same
 *      domain** as the application document using the **same protocol**.
 *  - **String** (except the special value `'self'`)
 *    - The string is matched against the full *normalized / absolute URL* of the resource
 *      being tested (substring matches are not good enough.)
 *    - There are exactly **two wildcard sequences** - `*` and `**`.  All other characters
 *      match themselves.
 *    - `*`: matches zero or more occurrences of any character other than one of the following 6
 *      characters: '`:`', '`/`', '`.`', '`?`', '`&`' and '`;`'.  It's a useful wildcard for use
 *      in a whitelist.
 *    - `**`: matches zero or more occurrences of *any* character.  As such, it's not
 *      appropriate for use in a scheme, domain, etc. as it would match too much.  (e.g.
 *      http://**.example.com/ would match http://evil.com/?ignore=.example.com/ and that might
 *      not have been the intention.)  Its usage at the very end of the path is ok.  (e.g.
 *      http://foo.example.com/templates/**).
 *  - **RegExp** (*see caveat below*)
 *    - *Caveat*:  While regular expressions are powerful and offer great flexibility,  their syntax
 *      (and all the inevitable escaping) makes them *harder to maintain*.  It's easy to
 *      accidentally introduce a bug when one updates a complex expression (imho, all regexes should
 *      have good test coverage).  For instance, the use of `.` in the regex is correct only in a
 *      small number of cases.  A `.` character in the regex used when matching the scheme or a
 *      subdomain could be matched against a `:` or literal `.` that was likely not intended.   It
 *      is highly recommended to use the string patterns and only fall back to regular expressions
 *      as a last resort.
 *    - The regular expression must be an instance of RegExp (i.e. not a string.)  It is
 *      matched against the **entire** *normalized / absolute URL* of the resource being tested
 *      (even when the RegExp did not have the `^` and `$` codes.)  In addition, any flags
 *      present on the RegExp (such as multiline, global, ignoreCase) are ignored.
 *    - If you are generating your JavaScript from some other templating engine (not
 *      recommended, e.g. in issue [#4006](https://github.com/angular/angular.js/issues/4006)),
 *      remember to escape your regular expression (and be aware that you might need more than
 *      one level of escaping depending on your templating engine and the way you interpolated
 *      the value.)  Do make use of your platform's escaping mechanism as it might be good
 *      enough before coding your own.  E.g. Ruby has
 *      [Regexp.escape(str)](http://www.ruby-doc.org/core-2.0.0/Regexp.html#method-c-escape)
 *      and Python has [re.escape](http://docs.python.org/library/re.html#re.escape).
 *      Javascript lacks a similar built in function for escaping.  Take a look at Google
 *      Closure library's [goog.string.regExpEscape(s)](
 *      http://docs.closure-library.googlecode.com/git/closure_goog_string_string.js.source.html#line962).
 *
 * Refer {@link ng.$sceDelegateProvider $sceDelegateProvider} for an example.
 *
 * ## Show me an example using SCE.
 *
 * <example module="mySceApp" deps="angular-sanitize.js">
 * <file name="index.html">
 *   <div ng-controller="AppController as myCtrl">
 *     <i ng-bind-html="myCtrl.explicitlyTrustedHtml" id="explicitlyTrustedHtml"></i><br><br>
 *     <b>User comments</b><br>
 *     By default, HTML that isn't explicitly trusted (e.g. Alice's comment) is sanitized when
 *     $sanitize is available.  If $sanitize isn't available, this results in an error instead of an
 *     exploit.
 *     <div class="well">
 *       <div ng-repeat="userComment in myCtrl.userComments">
 *         <b>{{userComment.name}}</b>:
 *         <span ng-bind-html="userComment.htmlComment" class="htmlComment"></span>
 *         <br>
 *       </div>
 *     </div>
 *   </div>
 * </file>
 *
 * <file name="script.js">
 *   angular.module('mySceApp', ['ngSanitize'])
 *     .controller('AppController', ['$http', '$templateCache', '$sce',
 *       function($http, $templateCache, $sce) {
 *         var self = this;
 *         $http.get("test_data.json", {cache: $templateCache}).success(function(userComments) {
 *           self.userComments = userComments;
 *         });
 *         self.explicitlyTrustedHtml = $sce.trustAsHtml(
 *             '<span onmouseover="this.textContent=&quot;Explicitly trusted HTML bypasses ' +
 *             'sanitization.&quot;">Hover over this text.</span>');
 *       }]);
 * </file>
 *
 * <file name="test_data.json">
 * [
 *   { "name": "Alice",
 *     "htmlComment":
 *         "<span onmouseover='this.textContent=\"PWN3D!\"'>Is <i>anyone</i> reading this?</span>"
 *   },
 *   { "name": "Bob",
 *     "htmlComment": "<i>Yes!</i>  Am I the only other one?"
 *   }
 * ]
 * </file>
 *
 * <file name="protractor.js" type="protractor">
 *   describe('SCE doc demo', function() {
 *     it('should sanitize untrusted values', function() {
 *       expect(element.all(by.css('.htmlComment')).first().getInnerHtml())
 *           .toBe('<span>Is <i>anyone</i> reading this?</span>');
 *     });
 *
 *     it('should NOT sanitize explicitly trusted values', function() {
 *       expect(element(by.id('explicitlyTrustedHtml')).getInnerHtml()).toBe(
 *           '<span onmouseover="this.textContent=&quot;Explicitly trusted HTML bypasses ' +
 *           'sanitization.&quot;">Hover over this text.</span>');
 *     });
 *   });
 * </file>
 * </example>
 *
 *
 *
 * ## Can I disable SCE completely?
 *
 * Yes, you can.  However, this is strongly discouraged.  SCE gives you a lot of security benefits
 * for little coding overhead.  It will be much harder to take an SCE disabled application and
 * either secure it on your own or enable SCE at a later stage.  It might make sense to disable SCE
 * for cases where you have a lot of existing code that was written before SCE was introduced and
 * you're migrating them a module at a time.
 *
 * That said, here's how you can completely disable SCE:
 *
 * ```
 * angular.module('myAppWithSceDisabledmyApp', []).config(function($sceProvider) {
 *   // Completely disable SCE.  For d = function(value) {
        return getTrusted(enumValue, value);
      };
      sce[camelCase("trust_as_" + lName)] = function(value) {
        return trustAs(enumValue, value);
      };
    });

    return sce;
  }];
}

/**
 * !!! This is an undocumented "private" service !!!
 *
 * @name $sniffer
 * @requires $window
 * @requires $document
 *
 * @property {boolean} history Does the browser support html5 history api ?
 * @property {boolean} transitions Does the browser support CSS transition events ?
 * @property {boolean} animations Does the browser support CSS animation events ?
 *
 * @description
 * This is very simple implementation of testing browser's features.
 */
function $SnifferProvider() {
  this.$get = ['$window', '$document', function($window, $document) {
    var eventSupport = {},
        android =
          toInt((/android (\d+)/.exec(lowercase(($window.navigator || {}).userAgent)) || [])[1]),
        boxee = /Boxee/i.test(($window.navigator || {}).userAgent),
        document = $document[0] || {},
        vendorPrefix,
        vendorRegex = /^(Moz|webkit|ms)(?=[A-Z])/,
        bodyStyle = document.body && document.body.style,
        transitions = false,
        animations = false,
        match;

    if (bodyStyle) {
      for (var prop in bodyStyle) {
        if (match = vendorRegex.exec(prop)) {
          vendorPrefix = match[0];
          vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
          break;
        }
      }

      if (!vendorPrefix) {
        vendorPrefix = ('WebkitOpacity' in bodyStyle) && 'webkit';
      }

      transitions = !!(('transition' in bodyStyle) || (vendorPrefix + 'Transition' in bodyStyle));
      animations  = !!(('animation' in bodyStyle) || (vendorPrefix + 'Animation' in bodyStyle));

      if (android && (!transitions ||  !animations)) {
        transitions = isString(bodyStyle.webkitTransition);
        animations = isString(bodyStyle.webkitAnimation);
      }
    }


    return {
      // Android has history.pushState, but it does not update location correctly
      // so let's not use the history API at all.
      // http://code.google.com/p/android/issues/detail?id=17471
      // https://github.com/angular/angular.js/issues/904

      // older webkit browser (533.9) on Boxee box has exactly the same problem as Android has
      // so let's not use the history API also
      // We are purposefully using `!(android < 4)` to cover the case when `android` is undefined
      // jshint -W018
      history: !!($window.history && $window.history.pushState && !(android < 4) && !boxee),
      // jshint +W018
      hasEvent: function(event) {
        // IE9 implements 'input' event it's so fubared that we rather pretend that it doesn't have
        // it. In particular the event is not fired when backspace or delete key are pressed or
        // when cut operation is performed.
        // IE10+ implements 'input' event but it erroneously fires under various situations,
        // e.g. when placeholder changes, or a form is focused.
        if (event === 'input' && msie <= 11) return false;

        if (isUndefined(eventSupport[event])) {
          var divElm = document.createElement('div');
          eventSupport[event] = 'on' + event in divElm;
        }

        return eventSupport[event];
      },
      csp: csp(),
      vendorPrefix: vendorPrefix,
      transitions: transitions,
      animations: animations,
      android: android
    };
  }];
}

var $compileMinErr = minErr('$compile');

/**
 * @ngdoc service
 * @name $templateRequest
 *
 * @description
 * The `$templateRequest` service runs security checks then downloads the provided template using
 * `$http` and, upon success, stores the contents inside of `$templateCache`. If the HTTP request
 * fails or the response data of the HTTP request is empty, a `$compile` error will be thrown (the
 * exception can be thwarted by setting the 2nd parameter of the function to true). Note that the
 * contents of `$templateCache` are trusted, so the call to `$sce.getTrustedUrl(tpl)` is omitted
 * when `tpl` is of type string and `$templateCache` has the matching entry.
 *
 * @param {string|TrustedResourceUrl} tpl The HTTP request template URL
 * @param {boolean=} ignoreRequestError Whether or not to ignore the exception when the request fails or the template is empty
 *
 * @return {Promise} a promise for the HTTP response data of the given URL.
 *
 * @property {number} totalPendingRequests total amount of pending template requests being downloaded.
 */
function $TemplateRequestProvider() {
  this.$get = ['$templateCache', '$http', '$q', '$sce', function($templateCache, $http, $q, $sce) {
    function handleRequestFn(tpl, ignoreRequestError) {
      handleRequestFn.totalPendingRequests++;

      // We consider the template cache holds only trusted templates, so
      // there's no need to go through whitelisting again for keys that already
      // are included in there. This also makes Angular accept any script
      // directive, no matter its name. However, we still need to unwrap trusted
      // types.
      if (!isString(tpl) || isUndefined($templateCache.get(tpl))) {
        tplp.defaults.transformResponse;

      if (isArray(transformResponse)) {
        transformResponse = transformResponse.filter(function(transformer) {
          return transformer !== defaultHttpResponseTransform;
        });
      } else if (transformResponse === defaultHttpResponseTransfor
        cache:        ['finally'](function() {
          handleRequestFn.totalPendingRequests--;
        })
        .then(function(response) {
          $templateCache.put(tpl, response.data);
          return response.data;
        }, handleError);

      function handleError(resp) {
        if (!ignoreRequestError) {
          throw $compileMinErr('tpload', 'Failed to load templatrequests are completed.
     *
     * @param {function} callback
     */
    testability.whenStable = function(callback) {
      $browser.notifyWhenNoOutstandingRequests(callback);
    };

    return testability;
  }];
}

function $TimeoutProvider() {
  this.$get = ['$rootScope', '$browser', '$q', '$$q', '$exceptionHandler',
       function($rootScope,   $browser,   $q,   $$q,   $exceptionHandler) {

    var deferreds = {};


     /**
      * @ngdoc service
      * @name $timeout
      *
      * @description
      * Angular's wrapper for `window.setTimeout`. The `fn` function is wrapped into a try/catch
      * block and delegates any exceptions to
      * {@link ng.$exceptionHandler $exceptionHandler} service.
      *
      * The return value of calling `$timeout` is a promise, which will be resolved when
      * the delay has passed and the timeout function, if provided, is executed.
      *
      * To cancel a timeout request, call `$timeout.cancel(promise)`.
      *
      * In tests you can use {@link ngMock.$timeout `$timeout.flush()`} to
      * synchronously flush the queue of deferred functions.
      *
      * If you only want a promise that will be resolved after some specified delay
      * then you can call `$timeout` without the `fn` function.
      *
      * @param {function()=} fn A function, whose execution should be delayed.
      * @param {number=} [delay=0] Delay in milliseconds.
      * @param {boolean=} [invokeApply=true] If set to `false` skips model dirty checking, otherwise
      *   will invoke `fn` within the {@link ng.$rootScope.Scope#$apply $apply} block.
      * @param {...*=} Pass additional parame delete deferreds[promise.$$timeoutId];
        }

        if (!skipApply) $rootScope.$apply();
      }, delay);

      promise.$$timeoutId = timeoutId;
      deferreds[timeoutId] = deferred;

      return promise;
    }


     /**
      * @ngdoc method
      * @name $timeout#cancel
      *
      * @description
      * Cancels a task associated with the `promise`. As a result of this, the promise will be
      * resolved with a rejection.
      *
   outId in deferreds) {
        deferreds[promise.$$timeoutId].reject('canceled');
        delete deferreds[promise.$$timeoutId];
        return $browser.defer.cancel(promise.$$timeoutId);
      }
      return false;
    };

    return timeout;
  }];
}

// NOTE:  The usage of window and document instead of $window and $document here is
// deliberate.  This service depends on the specific behavior of anchor nodes created by the
// browser (resolving and parsing URLs) that is unlikely to be provided by mock objects and
// cause us to break tests.  In addition, when the browser resolves a URL for XHR, it
// doesn't know about mocked locations and resolves URLs to the real document - which is
// exactly the behavior needed here.  There is little value is mocking these out for this
// service.
var urlParsingNode = document.createElement("a");
var originUrl = urlResolve(window.location.href);


/**
 *
 * Implementation Notes for non-IE browsers
 * ----------------------------------------
 * Assigning a URL to the href property of an anchor DOM node, even one attached to the DOM,
 * results both in the normalizing and parsing of the URL.  Normalizing means that a relative
 * URL will be resolved into an absolute URL in the context of the application document.
 * Parsing means that the anchor node's host, hostname, protocol, port, pathname and related
 * properties are all populated to reflect the normalized URL.  This approach has wide
 * compatibility - Safari 1+, Mozilla 1+, Opera 7+,e etc.  See
 * http://www.aptana.com/reference/html/api/HTMLAnchorElement.html
 *
 * Implementation Notes for IE
 * ---------------------------
 * IE <= 10 normalizes the URL when assigned to the anchor node similar to the other
 * browsers.  However, the parsed components will not be set if the URL assigned did not specify
 * them.  (e.g. if you assign a.href = "foo", then a.protocol, a.host, etc. will be empty.)  We
 * work around that by performing the parsing in a 2nd step by taking a previously normalized
 * URL (e.g. by assigning to a.href) and assigning it a.href again.  This correctly populates the
 * properties such as protocol, hostname, port, etc.
 *
 * References:
 *   http://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement
 *   http://www.aptana.com/reference/html/api/HTMLAnchorElement.html
 *   http://url.spec.whatwg.org/#urlutils
 *   https://github.com/angular/angular.js/pull/2902
 *   http://james.padolsey.com/javascript/parsing-urls-with-the-dom/
 *
 * @kind function
 * @param {string} url The URL to be parsed.
 * @description Normalizes and parses a URL.
 * @returns {object} Returns the normalized URL as a dictionary.
 *
 *   | member name   | Description    |
 *   |---------------|----------------|
 *   | href          | A normalized version of the provided URL if it was not an absolute URL |
 *   | protocol      | The protocol including the trailing colon                              |
 *   | host          | The host and port (if the port is non-default) of the normalizedUrl    |
 *   | search        | The search params, minus the question mark                /^#/, '') : '',
    hostname: urlParsingNode.hostname,
    port: urlParsingNode.port,
    pathname: (urlParsingNode.pathname.charAt(0) === '/')
      ? urlParsingNode.pathname
      : '/' + urlParsingNode.pathname
  };
}

/**
 * Parse a request URL and determine whether this is a same-origin request as the application document.
 nt.
 */
function urlIsSameOrigin(requestUrl) {
  var parsed = (isString(requestUrl)) ? urlResolve(requestUrl) : requestUrl;
  return (parsed.protocol === originUrl.protocol &&
          parsed.host === originUrl.host);
}

/**
 * @ngdoc service
 * @name $window
 *
 * @description
 * A reference to the browser's `window` object. While `window`
 * is globally available in JavaScript, it causes testability problems, because
 * it is a global variable. In angular we always refer to it through the
 * `$window` service, so it may be overridden, removed or mocked for testing.
 *
 * Expressions, like the one defined for the `ngClick` directive in the example
 * below, are evaluated with respect to the current scope.  Therefore, there is
 * no risk of inadvertently coding in a dependency on a global value in such an
 * expression.
 *
 * @example
   <example module="windowExample">
     <file name="index.html">
       <script>
         angular.module('windowExample', [])
           .controller('ExampleController', ['$scope', '$window', function($scope, $window) {
             $scope.greeting = 'Hello, World!';
             $scope.doGreeting = function(greeting) {
               $window.alert(greeting);
             };
           }]);
       </script>
       <div ng-controller="ExampleController">
         <input type="text" ng-model="greeting" aria-label="greeting" />
         <button ng-click="doGreeting(greeting)">ALERT</button>
       </div>
     </file>
     <file name="protractor.js" type="protractor">
      it('should display the greeting in the input box', flo, E2E Tests');
       // If we click the button it will block the test runner
       // element(':button').click();
      });
     </file>
   </example>
 */
function $WindowProvider() {
  this.$get = valueFn(window);
}

/**
 * @name $$cookieReader
 * @requires $document
 *
 * @description
 * This is a private service for reading cookies used bwDocument = $document[0] || {};
  var lastCookies = {};
  var lastCookieString = '';

  function safeDecodeURIComponent(str) {
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  }

  return function() {
    var cookieArray, cookie, i, index, name;
    var currentCookieString = rawDocument.cookie || '';

    if (currentCookieString !== lastCookieString) {
      lastCookieString = currentCookieString;
      cookieArray = lastCookieString.split('; ');
      lastCookies = {};

      for (i = 0; i < cookieArray.length; i++) {
        cookie = cookieArray[i];
        index = cookie.indexOf('=');
        if (index > 0) { //ignore nameless cookies
          name = safeDecodeURIComponent(cookie.substring(0, index));
          // the first value that is seen for a cookie is the most
          // specific one.  values for the same cookie name that
          // follow are for less specific paths.
          if (isUndefeURIComponent(cookie.substring(index + 1));
          }
        }
      }
    }
    return lastCookies;
  };
}

$$CookieReader.$inject = ['$document'];

function $$CookieReaderProvider() {
  this.$get = $$CookieReader;
}

/* global currencyFilter: true,
 dateFilter: true,
 filterFilter: true,
 jsonFilter: true,
 limitToFilter: true,
 lowercaseFilter: true,
 numberFilter: true,
 orderByFilter: true,
 uppercaseFilter: true,
 */

/**
 * @ngdoc provider
 * @name $filterProvider
 * @description
 *
 * Filters are just functions which transform input to an output. However filters need to be
 * Dependency Injected. To achieve this a filter definition consists of a factory function which is
 * annotated with dependencies and is responsible for creating a filter function.
 *
 * <div class="alert alert-warning">
 * **Note:** Filter names must be valid angular {@link expression} identifiers, such as `uppercase` or `orderBy`.
 * Names with special characters, such as hyphens and dots, are not allowed. If you wish to namespace
 * your filters, then you can use capitalization (`myappSubsectionFilterx`) or underscores
 * (`myapp_subsection_filterx`).
 * </div>
 *
 * ```js
 *   // Filter registration
 *   function MyModule($provide, $filterProvider) {
 *     // create a service to demonstrate injection (not always needed)
 *     $provide.value('greet', function(name){
 *       return 'Hello ' + name + '!';
 *     });
 *
 *     // register a filter factory which uses the
 *     // greet service to demonstrate DI.
 *     $filterProvider.register('greet', function(greet){
 *       // return the filter function which uses the greet service
 *       // to generate salutation
 *       return function(text) {
 *         // filters need to be forgiving so check input validity
 *         return text && greet(text) || text;
 *       };
 *     });
 *   }
 * ```
 *
 * The filter function is registered with the `$injector` under the filter name suffix with
 * `Filter`.
 *
 * ```js
 *   it('should be the same instance', inject(
 *     function($filterProvider) {
 *       $filterProvider.register('reverse', function(){
 *         return ...;
 *       });
 *     },
 *     function($filter, reverseFilter) {
 *       expect($filter('reverse')).toBe(reverseFilter);
 *     });
 * ```
 *
 *
 * For more information about how angular filters work, and how to create your own filters, see
 * {@link guide/filter Filters} in the Angular Developer Guide.
 */

/**
 * @ngdoc service
 * @name $filter
 * @kind function
 * @description
 * Filters are used for formatting data displayed to the user.
 *
 * The general syntax in templates is as follows:
 *
 *         {{ expression [| filter_name[:parameter_value] ... ] }}
 *
 * @param {String} name Name of the filter function to retrieve
 * @return {Function} the filter function
 * @example
   <example name="$filter" module="filterExample">
     <file name="index.html">
       <div ng-controller="MainCtrl">
        <h3>{{ originalText }}</h3>
        <h3>{{ filteredText }}</h3>
       </div>
     </file>

     <file name="script.js">
      angular.module('filterExample', [])
      .controller('MainCtrl', fr('json', jsonFilter);
  register('limitTo', limitToFilter);
  register('lowercase', lowercaseFilter);
  register('number', numberFilter);
  register('orderBy', orderByFilter);
  register('uppercase', uppercaseFilter);
}

/**
 * @ngdoc filter
 * @name filter
 * @kind function
 *
 * @description
 * Selects a subset of items from `array` and returns it as a new array.
 *
 * @param {Array} array The source array.
 * @param {string|Object|function()} expression The predicate to be used for selecting items from
 *   `array`.
 *
 *   Can be one of:
 *
 *   - `string`: The string is used for matching against the contents of the `array`. All strings or
 *     objects with string properties in `array` that match this string will be returned. This also
 *     applies to nested object properties.
 *     The predicate can be negated by prefixing the string with `!`.
 *
 *   - `Object`: A pattern object can be used to filter specific properties on objects contained
 *     by `array`. For example `{name:"M", phone:"1"}` predicate will return an array of items
 *     which have property `name` containing "M" and property `phone` containing "1". A special
 *     property name `$` can be used (as in `{$:"text"}`) to accept a match against any
 *     property of the object or its nested object properties. That's equivalent to the simple
 *     substring match with a `string` as described above. The predicate can be negated by prefixing
 *     the string with `!`.
 *     For example `{name: "!M"}` predicate will return an array of items which have property `name`
 *     not containing "M".
 *
 *     Note that a named property will match properties on the same level only, while the special
 *     `$` property will match properties on the same level or deeper. E.g. an array item like
 *     `{name: {first: 'John', last: 'Doe'}}` will **not** be matched by `{name: 'John'}`, but
 *     **will** be matched by `{$: 'John'}`.
 *
 *   - `function(value, index, array)`: A predicate function can be used to write arbitrary filters.
 *     The function is called for each element of the array, with the element, its index, and
 *     the entire array itself as arguments.
 *
 *     The final result is an array of those elements that the predicate returned true for.
 *
 * @param {function(actual, expected)|true|undefined} comparator Comparator which is used in
 *     determining if the expected value (from the filter expression) and actual value (from
 *     the object in the array) should be considered a match.
 *
 *   Can be one of:
 *
 *   - `function(actual, expected)`:
 *     The function will be given the object value and the predicate value to compare and
 *     should return true if both values should be considered equal.
 *
 *   - `true`: A shorthand for `function(actual, expected) { return angular.equals(actual, expected)}`.
 *     This is essentially strict comparison of expected and actual.
 *
 *   - `false|undefined`: A short hand for a function which will look for a substring match in case
 *     insensitive way.
 *
 *     Primitive values are converted to strings. Objects are not compared against primitives,
 *     unless they have a custom `toString` method (e.g. `Date` objects).
 *
 * @example
   <example>
     <file name="index.html">
       <div ng-init="friends = [{name:'John', phone:'555-1276'},
                                {name:'Mary', phone:'800-BIG-MARY'},
                                {name:'Mike', phone:'555-4321'},
                                {name:'Adam', phone:'555-5678'},
                                {name:'Julie', phone:'555-8765'},
                                {name:'Juliette', phone:'555-5678'}]"></div>

       <label>Search: <input ng-model="searchText"></label>
       <table id="searchTextResults">
         <tr><th>Name</th><th>Phone</th></tr>
         <tr ng-repeat="friend in friends | filter:searchText">
           <td>{{friend.name}}</td>
           <td>{{friend.phone}}</td>
         </tr>
       </table>
       <hr>
       <label>Any: <input ng-model="search.$"></label> <br>
       <label>Name only <input ng-model="search.name"></label><br>
       <label>Phone only <input ng-model="search.phone"></label><br>
       <label>Equality <input type="checkbox" ng-model="strict"></label><br>
       <table id="searchObjResults">
         <tr><th>Name</th><th>Phone</th></tr>
         <tr ng-repeat="friendObj in friends | filter:search:strict">
           <td>{{friendObj.name}}</td>
           <td>{{friendObj.phone}}</td>
         </tr>
       </table>
     </file>
     <file name="protractor.js" type="protractor">
       var expectFriendNames = function(expectedNames, key) {
         element.all(by.repeater(key + ' in friends').column(key + '.name')).then(function(arr) {
           arr.forEach(function(wd, i) {
             expect(wd.getText()).toMatch(expectedNames[i]);
           });
         });
       };

       it('should search across all fields when filtering with a string', function() {
         var searchText = element(by.model('searchText'));
         searchText.clear();
         searchText.sendKeys('m');
         expectFriendNames(['Mary', 'Mike', 'Adam'], 'friend');

         searchText.clear();
         searchText.sendKeys('76');
         expectFriendNames(['John', 'Julie'], 'friend');
       });

       it('should search in specific fields when filtering with a predicate object', function() {
         var searchAny = element(by.model('search.$'));
         searchAny.clear();
         searchAny.sendKeys('i');
         expectFriendNames(['Mary', 'Mike', 'Julie', 'Juliette'], 'friendObj');
       });
       it('should use a equal comparison when comparator is true', function() {
         var searchName = element(by.model('search.name'));
         var strict = element(by.model('strict'));
         searchName.clear();
         searchName.sendKeys('Julie');
         strict.click();
         expectFriendNames(['Julie'], 'friendObj');
       });
     </file>
   </example>
 */
function filterFilter() {
  return function(array, expression, comparator) {
    if (!isArrayLike(array)) {
      if (array == null) {
        return array;
      } else {
        throw minErr('filter')('notarray', 'Expected array but received: {0}', array);
      }
    }

    var expressionType = getTypeForFilter(expression);
    var predicateFn;
    var matchAgainstAnyProp;

    switch (expressionType) {
      case 'function':
        predicateFn = expression;
        break;
      case 'boolean':
      case 'null':
      case 'number':
      case 'string':
        matchAgainstAnyProp = true;
        //jshint -W086
      case 'object':
        //jshint +W086
        predicateFn = createPredicateFn(expression, comparator, matchAgainstAnyProp);
        break;
      default:
        return array;
    }

    return Array.prototype.filter.call(array, predicateFn);
  };
}

// Helper functions for `filterFilter`
function createPredicateFn(expression, comparator, matchAgainst objects, unless they have custom `toString` method
        return false;
      }

      actual = lowercase('' + actual);
      expected = lowercase('' + expected);
      return actual.indexOf(expected) !== -1;
    };
  }

  predicateFn = function(item) {
    if (shouldMatchPrimitives && !isObject(item)) {
      return deepCompare(item, expression.$, comparator, false);
    }
    return deepCompare(item, expression, comparator, matchAgainstAnyProp);
  };

  return predicateFn;
}

function deepCompare(actual, expected, comparator, matchAgainstAnyProp, dontMatchWholeObject) {
  var actualType = getTypeForFilter(actual);
  var expectedType = getTypeForFilter(expected);

  if ((expectedType === 'string') && (expected.charAt(0) === '!')) {
    return !deepCompare(act// In case `actual` is an array, consider it a match
    // if ANY of it's items matches `expected`
    return actual.some(function(item) {
      return deepCompare(item, expected, comparator, matchAgainstAnyProp);
    });
  }

  switch (actualType) {
    case 'object':
      var key;
      if (matchAgainstAnyProp) {
        for (key in actual) {
          if ((key.charAt(0) !== '$') && deepCompare(actual[key], expected, comparator, true)) {
            return true;
          }
        }
        return dontMatchWholeObject ? false : deepCompare(actual, expected, comparator, false);
      } else if (expectedType === 'object') {
        for (key in expected) {
          var expectedVal = expected[key];
          if (isFunction(expectedVal) || isUndefined(expectedVal)) {
            continue;
          }

          var matchAnyProperty = key === '$';
          var actualVal = matchAnyProperty ? actual : actual[key];
          if (!deepCompare(actualVal, expectedVal, comparator, matchAnyProperty, matchAnyProperty)) {
            return false;
          }
        }
        return true;
      } else {
        return compalse;
    default:
      return comparator(actual, expected);
  }
}

// Used for easily differentiating between `null` and actual `object`
function getTypeForFilter(val) {
  return (val === null) ? 'null' : typeof val;
}

var MAX_DIGITS = 22;
var DECIMAL_SEP = '.';
var ZERO_CHAR = '0';

/**
 * @ngdoc filter
 * @name currency
 * @kind function
 *
 * @description
 * Formats a number as a currency (ie $1,234.56). When no currency symbol is provided, default
 * symbol for current locale is used.
 *
 * @param {number} amount Input to filter.
 * @param {string=} symbol Currency symbol or identifier to be displayed.
 * @param {number=} fractionSize Number of decimal places to round the amount to, defaults to default max fraction size for current locale
 * @returns {string} Formatted number.
 *
 *
 * @example
   <example module="currencyExample">
     <file name="index.html">
       <script>
         angular.module('currencyExample', [])
           .controller('ExampleController', ['$scope', function($scope) {
             $scope.amount = 1234.56;
           }]);
       </script>
       <div ng-controller="ExampleController">
         <input type="number" ng-model="amount" aria-label="amount"> <br>
         default currency symbol ($): <span id="currency-default">{{amount | currency}}</span><br>
         custom currency identifier (USD$): <span id="currency-custom">{{amount | currency:"USD$"}}</span>
         no fractions (0): <span id="currency-no-fractions">{{amount | currency:"USD$":0}}</span>
       </div>
     </file>
     <file name="protractor.js" type="protractor">
       it('should init with 1234.56', function() {
         expect(element(by.id('currency-default')).getText()).toBe('$1,234.56');
         expect(element(by.id('currency-custom')).getText()).toBe('USD$1,234.56');
         expect(element(by.id('currency-no-fractions')).getText()).toBe('USD$1,235');
       });
       it('should update', function() {
         if (browser.params.browser == 'safari') {
           // Safari does not understand the minus key. See
           // https://github.com/angular/protractor/issues/481
           return;
         }
         element(by.model('amount')).clear();
         element(by.model('amount')).sendKeys('-1234');
         expect(element(by.id('currency-default')).getText()).toBe('-$1,234.00');
         expect(element(by.id(ss it through
    return (amount == null)
        ? amount
        : formatNumber(amount, formats.PATTERNS[1], formats.GROUP_SEP, formats.DECIMAL_SEP, fractionSize).
            replace(/\u00A4/g, currencySymbol);
  };
}

/**
 * @ngdoc filter
 * @name number
 * @kind function
 *
 * @description
 * Formats a number as text.
 *
 * If the input is null or undefined, it will just be returned.
 * If the input is infinite (Infinity or -Infinity), the Infinity symbol '∞' or '-∞' is returned, respectively.
 * If the input is not a number an empty string is returned.
 *
 *
 * @param {number|string} number Number to format.
 * @param {(number|string)=} fractionSize Number of decimal places to round the number to.
 * If this is not provided then the fraction size is computed from the current locale's number
 * formatting pattern. In the case of the default locale, it will be 3.
 * @returns {string} Number rounded to `fractionSize` appropriately formatted based on the current
 *                   locale (e.g., in the en_US locale it will have "." as the decimal separator and
 *                   include "," group separators after each third digit).
 *
 * @example
   <example module="numberFilterExample">
     <file name="index.html">
       <script>
         angular.module('numberFilterExample', [])
           .controller('ExampleController', ['$scope', function($scope) {
             $scope.val = 1234.56789;
           }]);
       </script>
       <div ng-controller="ExampleController">
         <label>Enter number: <input ng-model='val'></label><br>
         Default formatting: <span id='number-default'>{{val | number}}</span><br>
         No fractions: <span>{{val | number:0}}</span><br>
         Negative number: <span>{{-val | number:4}}</span>
       </div>
     </file>
     <file name="protractor.js" type="protractor">
       it('should format numbers', function() {
         expect(element(by.id('number-default')).getText()).toBe('1,234.568');
         expect(element(by.binding('val | number:0')).getText()).toBe('1,235');
         expect(element(by.binding('-val | number:4')).getText()).toBe('-1,234.5679');
       });

       it('should update', function() {
         element(by.model('val')).clear();
         element(by.model('val')).sendKeys('3374.333');
         expect(element(by.id('number-default')).getText()).toBe('3,374.333');
         expect(ele   // if null or undefined pass it through
    return (number == null)
        ? number
        : formatNumber(number, formats.PATTERNS[0], formats.GROUP_SEP, formats.DECIMAL_SEP,
                       fractionSize);
  };
}

/**
 * Parse a number (as a string) into three components that can be used
 * for formatting the number.
 *
 * (Significant bits of this parse algorithm came from https://github.com/MikeMcl/big.js/)
 *
 * @param  {string} numStr The number to parse
 * @return {object} An object describing this number, containing the following keys:
 *  - d : an array of digits containing leading zeros as necessary
 *  - i : the number of the digits in `d` that are to the left of the decimal point
 *  - e : the exponent for numbers that would need more than `MAX_DIGITS` digits in `d`
 *
 */
function parse(numStr) {
  var exponent = 0, digits, numberOfIntegerDigits;
  var i, j, zeros;

  // Decimal point?
  if ((numberOfIntegerDigits = numStr.indexOf(DECIMAL_SEP)) > -1) {
    numStr = numStr.replace(DECIMAL_SEP, '');
  }

  // Exponential form?
  if ((i = numStr.search(/e/i)) > 0) {
    // Work out the exponent.
    if (numberOfIntegerDigits < 0) numberOfIntegerDigits = i;
    numberOfIntegerDigits += +numStr.slice(i + 1);
    numStr = numStr.substring(0, i);
  } else if (numberOfIntegerDigits < 0) {
    // There was no decimal point or exponent so it is an integer.
    numberOfIntegerDigits = numStr.length;
  }

  // Count the number of leading zeros.
  for (i = 0; numStr.charAt(i) == ZERO_CHAR; i++) {/* jshint noempty: false */}

  if (i == (zeros = numStr.length)) {
    // The digits are all zero.
    digits = [0];
    numberOfIntegerDigits = 1;
  } else {
    // Count the number of trailing zeros
    zeros--;
    while (numStr.charAt(zeros) == ZERO_CHAR) zeros--;

    // Trailing zeros are insignificant so ignore them
    numberOfIntegerDigits -= i;
    digits = [];
    // Convert string to array of digits without leading/trailing zeros.
    for (j = 0; i <= zeros; i++, j++) {
      digits[j] = +numStr.charAt(i);
    }
  }

  // If the number overflows the maximum allowed digits then use an exponent.
  if (numberOfIntegerDigits > MAX_DIGITS) {
    digits = digits.splice(0, MAX_DIGITS - 1);
    exponent = numberOfIntegerDigits - 1;
    numberOfIntegerDigits = 1;
  }

  return { d: digits, e: exponent, i: numberOfIntegerDigits };
}

/**
 * Round the parsed number to the specified number of decimal places
 * This function changed the parsedNumber in-place
 */
function roundNumber(parsedNumber, fractionSize, minFrac, maxFrac) {
    var digits = parsedNumber.d;
    var fractionLen = digits.length - parsedNumber.i;

    // determine fractionSize if it is not specified; `+fractionSize` converts it to a number
    fractionSize = (isUndefined(fractionSize)) ? Math.min(Math.max(minFrac, fractionLen), maxFrac) : +fractionSize;

    // The index of the digit to where rounding is to occur
    var roundAt = fractionSize + parsedNumber.i;
    var digit = digits[roundAt];

    if (roundAt > 0) {
      digits.splice(roundAt);
    } else {
      // We rounded to zero so reset the parsedNumber
      parsedNumber.i = 1;
      digits.length = roundAt = fractionSize + 1;
      for (var i=0; i < roundAt; i++) digits[i] = 0;
    }

    if (digit >= 5) digits[roundAt - 1]++;

  ts.push(0);


    // Do any carrying, e.g. a digit was rounded up to 10
    var carry = digits.reduceRight(function(carry, d, i, digits) {
      d = d + carry;
      digits[i] = d % 10;
      return Math.floor(d / 10);
    }, 0);
    if (carry) {
      digits.unshift(carry);
      parsedNumber.i++;
    }
}

/**
 * Format a number into a string
 * @param  {number} number       The number to format
 * @param  {{
 *           minFrac, // the minimum number of digits required in the fraction part of the number
 *           maxFrac, // the maximum number of digits required in the fraction part of the number
 *           gSize,   // number of digits in each group of separated digits
 *           lgSize,  // number of digits in the last group of digits before the decimal separator
 *           negPre,  // the string to go in front of a negative number (e.g. `-` or `(`))
 *           posPre,  // the string to go in front of a positive number
 *           negSuf,  // the string to go after a negative number (e.g. `)`)
 *           posSuf   // the string to go after a positive number
 *         }} pattern
 * @param  {string} groupSep     The string to separate groups of number (e.g. `,`)
 * @param  ent) {
      formattedText += 'e+' + exponent;
    }
  }
  if (number < 0 && !isZero) {
    return pattern.negPre + formattedText + pattern.negSuf;
  } else {
    return pattern.posPre + formattedText + pattern.posSuf;
  }
}

function padNumber(num, digits, trim) {
  var neg = '';
  if (num < 0) {
    neg =  '-';
    num = -num;
  }
  num = '' + num;
  while (num.length < digits) num = ZERO_CHAR + num;
  if (trim) {
    num = num.substr(num.length - digits);
  }
  return neg + num;
}


function dateGetter(name, size, offset, trim) {
  offset = offset || 0;
  return    F     result = 1 + Math.round(diff / 6.048e8); // 6.048e8 ms per week

      return padNumber(result, size);
  tion eraGetter(date, formats) {
  return date.getFullYear() <= 0 ? formats.ERAS[0] : formats.ERAS[1];
}

function longEraGetter(date, formats) {
  return date.getFullYear() <= 0 ? formats.ERANAMES[0] : formats.ERANAMES[1];
}

var DATE_FORMATS = {
  yyyy: dateGetter('FullYear', 4),
    yy: dateGetter('FullYear', 2, 0, true),
     y: dateGetter('FullYear', 1),
  MMMM: dateStrGetter('Month'),
   MMM: dateStrGetter('Month', true),
    MM: dateGetter('Month', 2, 1),
     M: dateGetter('Month', 1, 1),
    dd: dateGetter('Date', 2),
     d: dateGetter('Date', 1),
    HH: dateGetter('Hours', 2),
     H: dateGetter('Hours', 1),
    hh: dateGetter('Hours', 2, -12),
     h: dateGetter('Hours', 1, -12),
    mm: dateGetter('Minutes', 2),
     m: dateGetter('Minutes', 1),
    ss: dateGetter('Seconds', 2),
     s: dateGetter('Seconds', 1),
     // while ISO 8601 requires fractions to be prefixed with `.` or `,`
     // we can be just safely rely on using `sss` since we currently don't support single or two digit fractions
   sss: dateGetter('Milliseconds', 3),
  EEEE: dateStrGetter('Day'),
   EEE: dateStrGetter('Day', true),
     a: ampmGetter,
     Z: timeZoneGetter,
    ww: weekGetter(2),
     w: weekGetter(1),
     G: eraGetter,
     GG: eraGetter,
     GGG: eraGetter,
     GGGG: longEraGetter
};

var DATE_FORMATS_SPLIT = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
    NUMBER_STRING = /^\-?\d+$/;

/**
 * @ngdoc filter
 * @name date
 * @kind function
 *
 * @description
 *   Formats `date` to a string based on the requested `format`.
 *
 *   `format` string can be composed of the following elements:
 *
 *   * `'yyyy'`: 4 digit representation of year (e.g. AD 1 => 0001, AD 2010 => 2010)
 *   * `'yy'`: 2 digit representation of year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)
 *   * `'y'`: 1 digit representation of year, e.g. (AD 1 => 1, AD 199 => 199)
 *   * `'MMMM'`: Month in year (January-December)
 *   * `'MMM'`: Month in year (Jan-Dec)
 *   * `'MM'`: Month in year, padded (01-12)
 *   * `'M'`: Month in year (1-12)
 *   * `'dd'`: Day in month, padded (01-31)
 *   * `'d'`: Day in month (1-31)
 *   * `'EEEE'`: Day in Week,(Sunday-Saturday)
 *   * `'EEE'`: Day in Week, (Sun-Sat)
 *   * `'HH'`: Hour in day, padded (00-23)
 *   * `'H'`: Hour in day (0-23)
 *   * `'hh'`: Hour in AM/PM, padded (01-12)
 *   * `'h'`: Hour in AM/PM, (1-12)
 *   * `'mm'`: Minute in hour, padded (00-59)
 *   * `'m'`: Minute in hour (0-59)
 *   * `'ss'`: Second in minute, padded (00-59)
 *   * `'s'`: Second in minute (0-59)
 *   * `'sss'`: Millisecond in second, padded (000-999)
 *   * `'a'`: AM/PM marker
 *   * `'Z'`: 4 digit (+sign) representation of the timezone offset (-1200-+1200)
 *   * `'ww'`: Week of year, padded (00-53). Week 01 is the week with the first Thursday of the year
 *   * `'w'`: Week of year (0-53). Week 1 is the week with the first Thursday of the year
 *   * `'G'`, `'GG'`, `'GGG'`: The abbreviated form of the era string (e.g. 'AD')
 *   * `'GGGG'`: The long form of the era string (e.g. 'Anno Domini')
 *
 *   `format` string can also be one of the following predefined
 *   {@link guide/i18n localizable formats}:
 *
 *   * `'medium'`: equivalent to `'MMM d, y h:mm:ss a'` for en_US locale
 *     (e.g. Sep 3, 2010 12:05:08 PM)
 *   * `'short'`: equivalent to `'M/d/yy h:mm a'` for en_US  locale (e.g. 9/3/10 12:05 PM)
 *   * `'fullDate'`: equivalent to `'EEEE, MMMM d, y'` for en_US  locale
 *     (e.g. Friday, September 3, 2010)
 *   * `'longDate'`: equivalent to `'MMMM d, y'` for en_US  locale (e.g. September 3, 2010)
 *   * `'mediumDate'`: equivalent to `'MMM d, y'` for en_US  locale (e.g. Sep 3, 2010)
 *   * `'shortDate'`: equivalent to `'M/d/yy'` for en_US locale (e.g. 9/3/10)
 *   * `'mediumTime'`: equivalent to `'h:mm:ss a'` for en_US locale (e.g. 12:05:08 PM)
 *   * `'shortTime'`: equivalent to `'h:mm a'` for en_US locale (e.g. 12:05 PM)
 *
 *   `format` string can contain literal values. These need to be escaped by surrounding with single quotes (e.g.
 *   `"h 'in the morning'"`). In order to output a single quote, escape it - i.e., two single quotes in a sequence
 *   (e.g. `"h 'o''clock'"`).
 *
 * @param {(Date|number|string)} date Date to format either as Date object, milliseconds (string or
 *    number) or various ISO 8601 datetime string formats (e.g. yyyy-MM-ddTHH:mm:ss.sssZ and its
 *    shorter versions like yyyy-MM-ddTHH:mmZ, yyyy-MM-dd or yyyyMMddTHHmmssZ). If no timezone is
 *    specified in the string input, the time is considered to be in the local timezone.
 * @param {string=} format Formatting rules (see Description). If not specified,
 *    `mediumDate` is used.
 * @param {string=} timezone Timezone to be used for formatting. It understands UTC/GMT and the
 *    continental US time zone abbreviations, but for general use, use a time zone offset, for
 *    example, `'+0430'` (4 hours, 30 minutes east of the Greenwich meridian)
 *    If not specified, the timezone of the browser will be used.
 * @returns {string} Formatted string or the input if input is not recognized as date/millis.
 *
 * @example
   <example>
     <file name="index.html">
       <span ng-non-bindable>{{1288323623006 | date:'medium'}}</span>:
           <span>{{1288323623006 | date:'medium'}}</span><br>
       <span ng-non-bindable>{{1288323623006 | date:'yyyy-MM-dd HH:mm:ss Z'}}</span>:
          <span>{{1288323623006 | date:'yyyy-MM-dd HH:mm:ss Z'}}</span><br>
       <span ng-non-bindable>{{1288323623006 | date:'MM/dd/yyyy @ h:mma'}}</span>:
          <span>{{'1288323623006' | date:'MM/dd/yyyy @ h:mma'}}</span><br>
       <span ng-non-bindable>{{1288323623006 | date:"MM/dd/yyyy 'at' h:mma"}}</span>:
          <span>{{'1288323623006' | date:"MM/dd/yyyy 'at' h:mma"}}</span><br>
     </file>
     <file name="protractor.js" type="protractor">
       it('should format date', function() {
         expect(element(by.binding("1288323623006 | date:'medium'")).getText()).
            toMatch(/Oct 2\d, 2010 \d{1,2}:\d{2}:\d{2} (AM|PM)/);
         expect(element(by.binding("1288323623006 | date:'yyyy-MM-dd HH:mm:ss Z'")).getText()).
            toMatch(/2010\-10\-2\d \d{2}:\d{2}:\d{2} (\-|\+)?\d{4}/);
         expect(element(by.binding("'1288323623006' | date:'MM/dd/yyyy @ h:mma'")).getText()).
            toMatch(/10\/2\d\/2010 @ \d{1,2}:\d{2}(AM|PM)/);
         expen = DATE_FORMATS[value];
      text += fn ? fn(date, $locale.DATETIME_FORMATS, dateTimezoneOffset)
                 : value === "''" ? "'" : value.replace(/(^'|'$)/g, '').replace(/''/g, "'");
    });

    return text;
  };
}


/**
 * @ngdoc filter
 * @name json
 * @kind function
 *
 * @description
 *   Allows you to convert a JavaScript object into JSON string.
 *
 *   This filter is mostly useful for debugging. When using the double curly {{value}} notation
 *   the binding is automatically converted to JSON.
 *
 * @param {*} object Any JavaScript object (including arrays and primitive types) to filter.
 * @param {number=} spacing The number of spaces to use per indentation, defaults to 2.
 * @returns {string} JSON string.
 *
 *
 * @example
   <example>
     <file name="index.html">
       <pre id="default-spacing">{{ {'name':'value'} | json }}</pre>
       <pre id="custom-spacing">{{ {'name':'value'} | json:4 }}</pre>
     </file>
     <file name="protractor.js" type="protractor">
       it('should jsonify filtered objects', function() {
         expect(ele: ?"value"\n}/);
       });
     </file>
   </example>
 *
 */
function jsonFilter() {
  return function(object, spacing) {
    if (isUndefined(spacing)) {
        spacing = 2;
    }
    return toJson(object, spacing);
  };
}


/**
 * @ngdoc filter
 * @name lowercase
 * @kind function
 * @description
 * Converts string to lowercase.
 * @see angular.lowercase
 */
var lowercaseFilter = valueFn(lowercase);


/**
 * @ngdoc filter
 * @name uppercase
 * @kind function
 * @description
 * Converts string to uppercase.
 * @see angular.uppercase
 */
var uppercaseFilter = valueFn(uppercase);

/**
 * @ngdoc filter
 * @name limitTo
 * @kind function
 *
 * @description
 * Creates a new array or string containing only a specified number of elements. The elements
 * are taken from either the beginning or the end of the source array, string or number, as specified by
 * the value and sign (positive or negative) of `limit`. If a number is used as input, it is
 * converted to a string.
 *
 * @param {Array|string|number} input Source array, string or number to be limited.
 * @param {string|number} limit The length of the returned array or string. If the `limit` number
 *     is positive, `limit` number of items from the beginning of the source array/string are copied.
 *     If the number is negative, `limit` number  of items from the end of the source array/string
 *     are copied. The `limit` will be trimmed if it exceeds `array.length`. If `limit` is undefined,
 *     the input will be returned unchanged.
 * @param {(string|number)=} begin Index at which to begin limitation. As a negative index, `begin`
 *     indicates an offset from the end of `input`. Defaults to `0`.
 * @returns {Array|string} A new sub-array or substring of length `limit` or less if input array
 *     had less than `limit` elements.
 *
 * @example
   <example module="limitToExample">
     <file name="index.html">
       <script>
         angular.module('limitToExample', [])
           .controller('ExampleController', ['$scope', function($scope) {
             $scope.numbers = [1,2,3,4,5,6,7,8,9];
             $scope.letters = "abcdefghi";
             $scope.longNumber = 2345432342;
             $scope.numLimit = 3;
             $scope.letterLimit = 3;
             $scope.longNumberLimit = 3;
           }]);
       </script>
       <div ng-controller="ExampleController">
         <label>
            Limit {{numbers}} to:
            <input type="number" step="1" ng-model="numLimit">
         </label>
         <p>Output numbers: {{ numbers | limitTo:numLimit }}</p>
         <label>
            Limit {{letters}} to:
            <input type="number" step="1" ng-model="letterLimit">
         </label>
         <p>Output letters: {{ letters | limitTo:letterLimit }}</p>
         <label>
            Limit {{longNumber}} to:
            <input type="number" step="1" ng-model="longNumberLimit">
         </label>
         <p>Output long number: {{ longNumber | limitTo:longNumberLimit }}</p>
       </div>
     </file>
     <file name="protractor.js" type="protractor">
       var numLimitInput = element(by.model('numLimit'));
       var letterLimitInput = element(by.model('letterLimit'));
       var longNumberLimitInput = element(by.model('longNumberLimit'));
       var limitedNumbers = element(by.binding('numbers | limitTo:numLimit'));
       var limitedLetters = element(by.binding('letters | limitTo:letterLimit'));
       var limitedLongNumber = element(by.binding('longNumber | limitTo:longNumberLimit'));

       it('should limit the number array to first three items', function() {
         expect(numLimitInput.getAttribute('value')).toBe('3');
         expect(letterLimitInput.getAttribute('value')).toBe('3');
         expect(longNumberLimitInput.getAttribute('value')).toBe('3');
         expect(limitedNumbers.getText()).toEqual('Output numbers: [1,2,3]');
         expect(limitedLetters.getText()).toEqual('Output letters: abc');
         expect(limitedLongNumber.getText()).toEqual('Output long number: 234');
       });

       // There is a bug in safari and protractor that doesn't like the minus key
       // it('should update the output when -3 is entered', function() {
       //   numLimitInput.clear();
       //   numLimitInput.sendKeys('-3');
       //   letterLimitInput.clear();
       //   letterLimitInput.sendKeys('-3');
       //   longNumberLimitInput.clear();
       //   longNumberLimitInput.sendKeys('-3');
       //   expect(limitedNumbers.getText()).toEqual('Output numbers: [7,8,9]');
       //   expect(limitedLetters.getText()).toEqual('Output letters: ghi');
       //   expect(limitedLongNumber.getText()).toEqual('Output long number: 342');
       // });

       it('should not exceed the maximum size of input array', function() {
         numLimitInput.clear();
         numLimitInput.sendKeys('100');
         letterLimitInput.clear();
         letterLimitInput.sendKeys('100');
         longNumberLimitInput.clear();
         longNumberLimitInput.sendKeys('100');
         expect(limitedNumbers.getText()).toEqual('Output numbers: [1,2,3,4,5,6,7,8,9]');
         expect(limitedLetters.getText()).toEqual('Output letters: abcdefghi');
         expect(limitedLongNumber.getText()).toEqual('Output long number: 2345432342');
       });
     </file>
   </example>
*/
function limitToFilter() {
  return function(input, limit, begin) {
    if (Math.abs(Number(limit)) === Infinity) {
      limit = Number(limit);
    } else {
      limit = toInt(limit);
    }
    if (isNaN(limit)) return input;

    if (isNumber(input)) input = input.toString();
    if (!isArray(input) && !isString(input)) return input;

    begin = (!begin || isNaN(begin)) ? 0 : toInt(begin);
    begin = (begin < 0) ? Math.max(0, input.length + begin) : begin;

    if (limit >= 0) {
      return input.slice(begin, begin + limit);
    } else {
      if (begin === 0) {
        return input.slice(limit, input.length);
      } else {
        return input.slice(Math.max(0, begin + limit), begin);
      }
    }
  };
}

/**
 * @ngdoc filter
 * @name orderBy
 * @kind function
 *
 * @description
 * Orders a specified `array` by the `expression` predicate. It is ordered alphabetically
 * for strings and numerically for numbers. Note: if you notice numbers are not being sorted
 * as expected, make sure they are actually being saved as numbers and not strings.
 *
 * @param {Array} array The array to sort.
 * @param {function(*)|string|Array.<(function(*)|string)>=} expression A predicate to be
 *    used by the comparator to determine the order of elements.
 *
 *    Can be one of:
 *
 *    - `function`: Getter function. The result of this function will be sorted using the
 *      `<`, `===`, `>` operator.
 *    - `string`: An Angular expression. The result of this expression is used to compare elements
 *      (for example `name` to sort by a property called `name` or `name.substr(0, 3)` to sort by
 *      3 first characters of a property called `name`). The result of a constant expression
 *      is interpreted as a property name to be used in comparisons (for example `"special name"`
 *      to sort object by the value of their `special name` property). An expression can be
 *      optionally prefixed with `+` or `-` to control ascending or descending sort order
 *      (for example, `+name` or `-name`). If no property is provided, (e.g. `'+'`) then the array
 *      element itself is used to compare where sorting.
 *    - `Array`: An array of function or string predicates. The first predicate in the array
 *      is used for sorting, but when two items are equivalent, the next predicate is used.
 *
 *    If the predicate is missing or empty then it defaults to `'+'`.
 *
 * @param {boolean=} reverse Reverse the order of the array.
 * @returns {Array} Sorted copy of the source array.
 *
 *
 * @example
 * The example below demonstrates a simple ngRepeat, where the data is sorted
 * by age in descending order (predicate is set to `'-age'`).
 * `reverse` is not set, which means it defaults to `false`.
   <example module="orderByExample">
     <file name="index.html">
       <div ng-controller="ExampleController">
         <table class="friend">
           <tr>
             <th>Name</th>
             <th>Phone Number</th>
             <th>Age</th>
           </tr>
           <tr ng-repeat="friend in friends | orderBy:'-age'">
             <td>{{friend.name}}</td>
             <td>{{friend.phone}}</td>
             <td>{{friend.age}}</td>
           </tr>
         </table>
       </div>
     </file>
     <file name="script.js">
       angular.module('orderByExample', [])
         .controller('ExampleController', ['$scope', function($scope) {
           $scope.friends =
               [{name:'John', phone:'555-1212', age:10},
                {name:'Mary', phone:'555-9876', age:19},
                {name:'Mike', phone:'555-4321', age:21},
                {name:'Adam', phone:'555-5678', age:35},
                {name:'Julie', phone:'555-8765', age:29}];
         }]);
     </file>
   </example>
 *
 * The predicate and reverse parameters can be controlled dynamically through scope properties,
 * as shown in the next example.
 * @example
   <example module="orderByExample">
     <file name="index.html">
       <div ng-controller="ExampleController">
         <pre>Sorting predicate = {{predicate}}; reverse = {{reverse}}</pre>
         <hr/>
         <button ng-click="predicate=''">Set to unsorted</button>
         <table class="friend">
           <tr>
            <th>
                <button ng-click="order('name')">Name</button>
                <span class="sortorder" ng-show="predicate === 'name'" ng-class="{reverse:reverse}"></span>
            </th>
            <th>
                <button ng-click="order('phone')">Phone Number</button>
                <span class="sortorder" ng-show="predicate === 'phone'" ng-class="{reverse:reverse}"></span>
            </th>
            <th>
                <button ng-click="order('age')">Age</button>
                <span class="sortorder" ng-show="predicate === 'age'" ng-class="{reverse:reverse}"></span>
            </th>
           </tr>
           <tr ng-repeat="friend in friends | orderBy:predicate:reverse">
             <td>{{friend.name}}</td>
             <td>{{friend.phone}}</td>
             <td>{{friend.age}}</td>
           </tr>
         </table>
       </div>
     </file>
     <file name="script.js">
       angular.module('orderByExample', [])
         .controller('ExampleController', ['$scope', function($scope) {
           $scope.friends =
               [{name:'John', phone:'555-1212', age:10},
                {name:'Mary', phone:'555-9876', age:19},
                {name:'Mike', phone:'555-4321', age:21},
                {name:'Adam', phone:'555-5678', age:35},
                {name:'Julie', phone:'555-8765', age:29}];
           $scope.predicate = 'age';
           $scope.reverse = true;
           $scope.order = function(predicate) {
             $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
             $scope.predicate = predicate;
           };
         }]);
      </file>
     <file name="style.css">
       .sortorder:after {
         content: '\25b2';
       }
       .sortorder.reverse:after {
         content: '\25bc';
       }
     </file>
   </example>
 *
 * It's also possible to call the orderBy filter manually, by injecting `$filter`, retrieving the
 * filter routine with `$filter('orderBy')`, and calling the returned filter routine with the
 * desired parameters.
 *
 * Example:
 *
 * @example
  <example module="orderByExample">
    <file name="index.html">
    <div ng-controller="ExampleController">
      <pre>Sorting predicate = {{predicate}}; reverse = {{reverse}}</pre>
      <table class="friend">
        <tr>
          <th>
              <button ng-click="order('name')">Name</button>
              <span class="sortorder" ng-show="predicate === 'name'" ng-class="{reverse:reverse}"></span>
          </th>
          <th>
              <button ng-click="order('phone')">Phone Number</button>
              <span class="sortorder" ng-show="predicate === 'phone'" ng-class="{reverse:reverse}"></span>
          </th>
          <th>
              <button ng-click="order('age')">Age</button>
              <span class="sortorder" ng-show="predicate === 'age'" ng-class="{reverse:reverse}"></span>
          </th>
        </tr>
        <tr ng-repeat="friend in friends">
          <td>{{friend.name}}</td>
          <td>{{friend.phone}}</td>
          <td>{{friend.age}}</td>
        </tr>
      </table>
    </div>
    </file>

    <file name="script.js">
      angular.module('orderByExample', [])
        .controller('ExampleController', ['$scope', '$filter', function($scope, $filter) {
          var orderBy = $filter('orderBy');
          $scope.friends = [
            { name: 'John',    phone: '555-1212',    age: 10 },
            { name: 'Mary',    phone: '555-9876',    age: 19 },
            { name: 'Mike',    phone: '555-4321',    age: 21 },
            { name: 'Adam',    phone: '555-5678',    age: 35 },
            { name: 'Julie',   phone: '555-8765',    age: 29 }
          ];
          $scope.order = function(predicate) {
            $scope.predicate = predicate;
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.friends = orderBy($scope.friends, predicate, $scope.reverse);
          };
          $scope.order('age', true);
        }]);
    </file>

    <file name="style.css">
       .sortorder:after {
         content: '\25b2';
       }
       .sortorder.reverse:after {
         content: '\25bc';
       }
    </file>
</example>
 */
orderByFilter.$inject = ['$parse'];
function orderByFilter($parse) {
  return function(array, sortPredicate, reverseOrder) {

    if (!(isArrayLike(array))) return array;

    if (!isArray(sortPredicate)) { sortPredicate = [sortPredicate]; }
    if (sortPredicate.length === 0) { sortPredicate = ['+']; }

    var predicates = processPredicates(sortPredicate, reverseOrder);
    // Add a pvaluates to the element index. This makes the
    // sort stable as it works as a tie-breaker when all the input predicates cannot
    // distinguish between two elements.
    predicates.push({ get: function() { return {}; }, descending: reverseOrder ? -1 : 1});

    // The next three lines are a version of a Swartzian Transform idiom from Perl
    // (sometimes called the Decorate-Sort-Undecorate idiom)
    // See https://en.wikipedia.org/wiki/SchwartetComparisonObject(value, index) {
      return {
        value: value,
        predicateValues: predicates.map(function(predicate) {
          return getPredicateValue(predicate.get(value), index);
        })
      };
    }

    function doComparison(v1, v2) {
      var result = 0;
      for (var index=0, length = predicates.length; index < length; ++index) {
        result = compare(v1.predicateValues[index], v2.predicateValues[index]) * predicates[index].descending;
        if (result) break;
      }
      return result;
    }
  };

  function processPredicates(sortPredicate, reverseOrder) {
    reverseOrder = reverseOrder ? -1 : 1;
    return sortPredicate.map(function(predicate) {
      var descending = 1, get = identity;

      if (isFunction(predicate)) {
        get = predicate;
      } else if (isString(predicate)) {
        if ((predicate.charAt(0) == '+' || predicate.charAt(0) == '-')) {
          descending = predicate.charAt(0) == '-' ? -1 : 1;
          predicate = predicate.substring(1);
        }
        if (predicate !== '') {
          get = $parse(predicate);
   ion isPrimitive(value) {
    switch (typeof value) {
      case 'number': /* falls through */
      case 'boolean': /* falls through */
      case 'string':
        return true;
      default:
        return false;
    }
  }

  function objectValue(value, index) {
    // If `valueOf` is a valid function use that
    if (typeof value.valueOf === 'function') {
      value = value.valueOf();
      if (isPrimitive(value)) return value;
    }
    // If `toString` is a valid function and not the one from `Object.prototype` use that
    if (hasCustomToString(value)) {
      value = value.toString();
      if (isPrimitive(value)) return value;
    }
    // We have a basic object so we use the position of the object in the collection
    return index;
  }

  function getPredicateValue(value, index) {
    var type = typeof value;
    if (value === null) {
      type = 'string';
      value = 'null';
    } else if (type === 'string') {
      value = value.toLowerCase();
    } else if (type === 'object') {
      value = objectValue(value, index);
    }
    return { value: value, type: type };
  }

  function compare(v1, v2) {
    
    return result;
  }
}

function ngDirective(directive) {
  if (isFunction(directive)) {
    directive = {
      link: directive
    };
  }
  directive.restrict = directive.restrict || 'AC';
  return valueFn(directive);
}

/**
 * @ngdoc directive
 * @name a
 * @restrict E
 *
 * @description
 * Modifies the default behavior of the html A tag so that the default action is prevented when
 * the href attribute is empty.
 *
 * This change permits the easy creation of acti    element.on('click', function(event) {
          // if we have no href url, then don't navigate anywhere.
          if (!element.attr(href)) {
            event.preventDefault();
          }
        });
      };
    }
  }
});

/**
 * @ngdoc directive
 * @name ngHref
 * @restrict A
 * @priority 99
 *
 * @description
 * Using Angular markup like `{{hash}}` in an href attribute will
 * make the link go to the wrong URL if the user clicks it before
 * Angular has a chance to replace the `{{hash}}` markup with its
 * value. Until Angular replaces the markup the link will be broken
 * and will most likely return a 404 error. The `ngHref` directive
 * solves this problem.
 *
 * The wrong way to write it:
 * ```html
 * <a href="http://www.gravatar.com/avatar/{{hash}}">link1</a>
 * ```
 *
 * The correct way to write it:
 * ```html
 * <a ng-href="http://www.gravatar.com/avatar/{{hash}}">link1</a>
 * ```
 *
 * @element A
 * @param {template} ngHref any string which can contain `{{}}` markup.
 *
 * @example
 * This example shows various combinations of `href`, `ng-href` and `ng-click` attributes
 * in links and their different behaviors:
    <example>
      <file name="index.html">
        <input ng-model="value" /><br />
        <a id="link-1" href ng-click="value = 1">link 1</a> (link, don't reload)<br />
        <a id="link-2" href="" ng-click="value = 2">link 2</a> (link, don't reload)<br />
        <a id="link-3" ng-href="/{{'123'}}">link 3</a> (link, reload!)<br />
        <a id="link-4" href="" name="xx" ng-click="value = 4">anchor</a> (link, don't reload)<br />
        <a id="link-5" name="xxx" ng-click="value = 5">anchor</a> (no link)<br />
        <a id="link-6" ng-href="{{value}}">link</a> (link, change location)
      </file>
      <file name="protractor.js" type="protractor">
        it('should execute ng-click but not reload when href without value', function() {
          element(by.id('link-1')).click();
          expect(element(by.model('value')).getAttribute('value')).toEqual('1');
          expect(element(by.id('link-1')).getAttribute('href')).toBe('');
        });

        it('should execute ng-click but not reload when href empty string', function() {
          element(by.id('link-2')).click();
          expect(element(by.model('value')).getAttribute('value')).toEqual('2');
          expect(element(by.id('link-2')).getAttribute('href')).toBe('');
        });

        it('should execute ng-click and change url when ng-href specified', function() {
          expect(element(by.id('link-3')).getAttribute('href')).toMatch(/\/123$/);

          element(by.id('link-3')).click();

          // At this point, we navigate away from an Angular page, so we need
          // to use browser.driver to get the base webdriver.

          browser.wait(function() {
            return browser.driver.getCurrentUrl().then(function(url) {
              return url.match(/\/123$/);
            });
          }, 5000, 'page should navigate to /123');
        });

        it('should execute ng-click but not reload when href empty string and name specified', function() {
          element(by.id('link-4')).click();
          expect(element(by.model('value')).getAttribute('value')).toEqual('4');
          expect(element(by.id('link-4')).getAttribute('href')).toBe('');
        });

        it('should execute ng-click but not reload when no href but name specified', function() {
          element(by.id('link-5')).click();
          expect(element(by.model('value')).getAttribute('value')).toEqual('5');
          expect(element(by.id('link-5')).getAttribute('href')).toBe(null);
        });

        it('should only change url when only ng-href', function() {
          element(by.model('value')).clear();
          element(by.model('value')).sendKeys('6');
          expect(element(by.id('link-6')).getAttribute('href')).toMatch(/\/6$/);

          element(by.id('link-6')).click();

          // At this point, we navigate away from an Angular page, so we need
          // to use browser.driver to get the base webdriver.
          browser.wait(function() {
            return browser.driver.getCurrentUrl().then(function(url) {
              return url.match(/\/6$/);
            });
          }, 5000, 'page should navigate to /6');
        });
      </file>
    </example>
 */

/**
 * @ngdoc directive
 * @name ngSrc
 * @restrict A
 * @priority 99
 *
 * @description
 * Using Angular markup like `{{hash}}` in a `src` attribute doesn't
 * work right: The browser will fetch from the URL with the literal
 * text `{{hash}}` until Angular replaces the expression inside
 * `{{hash}}`. The `ngSrc` directive solves this problem.
 *
 * The buggy way to write it:
 * ```html
 * <img src="http://www.gravatar.com/avatar/{{hash}}" alt="Description"/>
 * ```
 *
 * The correct way to write it:
 * ```html
 * <img ng-src="http://www.gravatar.com/avatar/{{hash}}" alt="Description" />
 * ```
 *
 * @element IMG
 * @param {template} ngSrc any string which can contain `{{}}` markup.
 */

/**
 * @ngdoc directive
 * @name ngSrcset
 * @restrict A
 * @priority 99
 *
 * @description
 * Using Angular markup like `{{hash}}` in a `srcset` attribute doesn't
 * work right: The browser will fetch from the URL with the literal
 * text `{{hash}}` until Angular replaces the expression inside
 * `{{hash}}`. The `ngSrcset` directive solves this problem.
 *
 * The buggy way to write it:
 * ```html
 * <img srcset="http://www.gravatar.com/avatar/{{hash}} 2x" alt="Description"/>
 * ```
 *
 * The correct way to write it:
 * ```html
 * <img ng-srcset="http://www.gravatar.com/avatar/{{hash}} 2x" alt="Description" />
 * ```
 *
 * @element IMG
 * @param {template} ngSrcset any string which can contain `{{}}` markup.
 */

/**
 * @ngdoc directive
 * @name ngDisabled
 * @restrict A
 * @priority 100
 *
 * @description
 *
 * This directive sets the `disabled` attribute on the element if the
 * {@link guide/expression expression} inside `ngDisabled` evaluates to truthy.
 *
 * A special directive is necessary because we cannot use interpolation inside the `disabled`
 * attribute. See the {@link guide/interpolation interpolation guide} for more info.
 *
 * @example
    <example>
      <file name="index.html">
        <label>Click me to toggle: <input type="checkbox" ng-model="checked"></label><br/>
        <button ng-model="button" ng-disabled="checked">Button</button>
      </file>
      <file name="protractor.js" type="protractor">
        it('should toggle button', function() {
          expect(element(by.css('button')).getAttribute('disabled')).toBeFalsy();
          element(by.model('checked')).click();
          expect(element(by.css('button')).getAttribute('disabled')).toBeTruthy();
        });
      </file>
    </example>
 *
 * @element INPUT
 * @param {expression} ngDisabled If the {@link guide/expression expression} is truthy,
 *     then the `disabled` attribute will be set on the element
 */


/**
 * @ngdoc directive
 * @name ngChecked
 * @restrict A
 * @priority 100
 *
 * @description
 * Sets the `checked` attribute on the element, if the expression inside `ngChecked` is truthy.
 *
 * Note that this directive should not be used together with {@link ngModel `ngModel`},
 * as this can lead to unexpected behavior.
 *
 * A special directive is necessary because we cannot use interpolation inside the `checked`
 * attribute. See the {@link guide/interpolation interpolation guide} for more info.
 *
 * @example
    <example>
      <file name="index.html">
        <label>Check me to check both: <input type="checkbox" ng-model="master"></label><br/>
        <input id="checkSlave" type="checkbox" ng-checked="master" aria-label="Slave input">
      </file>
      <file name="protractor.js" type="protractor">
        it('should check both checkBoxes', function() {
          expect(element(by.id('checkSlave')).getAttribute('checked')).toBeFalsy();
          element(by.model('master')).click();
          expect(element(by.id('checkSlave')).getAttribute('checked')).toBeTruthy();
        });
      </file>
    </example>
 *
 * @element INPUT
 * @param {expression} ngChecked If the {@link guide/expression expression} is truthy,
 *     then the `checked` attribute will be set on the element
 */


/**
 * @ngdoc directive
 * @name ngReadonly
 * @restrict A
 * @priority 100
 *
 * @description
 *
 * Sets the `readOnly` attribute on the element, if the expression inside `ngReadonly` is truthy.
 *
 * A special directive is necessary because we cannot use interpolation inside the `readOnly`
 * attribute. See the {@link guide/interpolation interpolation guide} for more info.
 *
 * @example
    <example>
      <file name="index.html">
        <label>Check me to make text readonly: <input type="checkbox" ng-model="checked"></label><br/>
        <input type="text" ng-readonly="checked" value="I'm Angular" aria-label="Readonly field" />
      </file>
      <file name="protractor.js" type="protractor">
        it('should toggle readonly attr', function() {
          expect(element(by.css('[type="text"]')).getAttribute('readonly')).toBeFalsy();
          element(by.model('checked')).click();
          expect(element(by.css('[type="text"]')).getAttribute('readonly')).toBeTruthy();
        });
      </file>
    </example>
 *
 * @element INPUT
 * @param {expression} ngReadonly If the {@link guide/expression expression} is truthy,
 *     then special attribute "readonly" will be set on the element
 */


/**
 * @ngdoc directive
 * @name ngSelected
 * @restrict A
 * @priority 100
 *
 * @description
 *
 * Sets the `selected` attribute on the element, if the expression inside `ngSelected` is truthy.
 *
 * A special directive is necessary because we cannot use interpolation inside the `selected`
 * attribute. See the {@link guide/interpolation interpolation guide} for more info.
 *
 * @example
    <example>
      <file name="index.html">
        <label>Check me to select: <input type="checkbox" ng-model="selected"></label><br/>
        <select aria-label="ngSelected demo">
          <option>Hello!</option>
          <option id="greet" ng-selected="selected">Greetings!</option>
        </select>
      </file>
      <file name="protractor.js" type="protractor">
        it('should select Greetings!', function() {
          expect(element(by.id('greet')).getAttribute('selected')).toBeFalsy();
          element(by.model('selected')).click();
          expect(element(by.id('greet')).getAttribute('selected')).toBeTruthy();
        });
      </file>
    </example>
 *
 * @element OPTION
 * @param {expression} ngSelected If the {@link guide/expression expression} is truthy,
 *     then special attribute "selected" will be set on the element
 */

/**
 * @ngdoc directive
 * @name ngOpen
 * @restrict A
 * @priority 100
 *
 * @description
 *
 * Sets the `open` attribute on the element, if the expression inside `ngOpen` is truthy.
 *
 * A special directive is necessary because we cannot use interpolation inside the `open`
 * attribute. See the {@link guide/interpolation interpolation guide} for more info.
 *
 * @example
     <example>
       <file name="index.html">
         <label>Check me check multiple: <input type="checkbox" ng-model="open"></label><br/>
         <details id="details" ng-open="open">
            <summary>Show/Hide me</summary>
         </details>
       </file>
       <file name="protractor.js" type="protractor">
         it('should toggle open', function() {
           expect(element(by.id('details')).getAttribute('open')).toBeFalsy();
           element(by.model('open')).click();
           expect(element(by.id('details')).getAttribute('open')).toBeTruthy();
         });
       </file>
     </example>
 *
 * @element DETAILS
 * @param {expression} ngOpen If the {@link guide/expression expression} is truthy,
 *     then special attribute "open" will be set  supported
  if (propName == "multiple") return;

  function defaultLinkFn(scope, element, attr) {
    scope.$watch(attr[normalized], scope, element, attr) {
      // ensuring ngCheckttr[normalized]) {
        defaultLinkFn(scope, element, attr);
 ", new RegExp(match[1], match[2]));
            return;
          }
        }

       property as well to achieve the desired effect.
          // we use attr[attrName] value since $set can sanitize the url.
          if (msie && propName) element.prop(propName, attr[name]);
        });
      }
    };
  };
});

/* global -nullFormCtrl, -SUBMITTED_CLASS, addSetValidityMethod: true
 */
var nuol,
  $removeControl: noop,
  $setValidity: noop,
  $setDirty: noop,
  $setPristine: noop,
  $setSubmitted: noop
},
SUBMITTED_CLASS = 'ng-submitted';

function nullFormRenameControl(control, name) {
  control.$name = name;
}

/**
 * @ngdoc type
 * @name form.FormController
 *
 * @property {boolean} $pristine True if user has not interacted with the form yet.
 * @property {boolean} $dirty True if user has already interacted with the form.
 * @property {boolean} $valid True if all of the containing forms and controls are valid.
 * @property {boolean} $invalid True if at least one containing control or form is invalid.
 * @property {boolean} $pending True if at least one containing control or form is pending.
 * @property {boolean} $submitted True if user has submitted the form even if its invalid.
 *
 * @property {Object} $error Is an object hash, containing references to controls or
 *  forms with failing validators, where:
 *
 *  - keys are validation tokens (error names),
 *  - values are arrays of controls or forms that have a failing validator for given error name.
 *
 *  Built-in validation tokens:
 *
 *  - `email`
 *  - `max`
 *  - `maxlength`
 *  - `min`
 *  - `minlength`
 *  - `number`
 *  - `pattern`
 *  - `required`
 *  - `url`
 *  - `date`
 *  - `datetimelocal`
 *  - `time`
 *  - `week`
 *  - `month`
 *
 * @description
 * `FormController` keeps track of all its controls and nested forms as well as the state of them,
 * such as being valid/invalid or dirty/pristine.
 *
 * Each {@link ng.directive:form form} directive creates an instance
 * of `FormController`.
 *
 */
//asks for $scope to fool the BC controller module
FormController.$inject = ['$element', '$attrs', '$scope', '$animate', '$interpolate'];
function FormController(element, attrs, $scope, $animate, $interpolate) {
  var form = this,
      controls = [];

  // init state
  form.$error = {};
  form.$$success = {};
  form.$pending = undefined;
  form.$name = $interpolate(attrs.name || attrs.ngForm || '')($scope);
  form.$dirty = false;
  form.$pristine = true;
  form.$valid = true;
  form.$invalid = false;
  form.$submitted = false;
  form.$$parentForm = nullFormCtrl;

  /**
   * @ngdoc method
   * @name form.FormController#$rollbackViewValue
   *
   * @description
   * Rollback all form controls pending updates to the `$modelValue`.
   *
   * Updates may be pending by a debounced event or because the input is waiting for a some future
   * event defined in `ng-model-options`. This method is typically needed by the reset button of
   * a form that uses `ng-model-options` to pend updates.
   */
  form.$rollbackViewValue = function() {
    forEach(controls, function(control) {
      control.$rollbackViewValue();
    });
  };

  /**
   * @ngdoc method
   * @name form.FormController#$commitViewValue
   *
   * @description
   * Commit all form controls pending updates to the `$modelValue`.
   *
   * Updates may be pending by a debounced event or because the input is waiting for a some future
   * event defined in `ng-model-options`. This method is rarely needed as `NgModelController`
   * usually handles calling this in response to input events.
   */
  form.$commitViewValue = function() {
    forEach(controls, function(control) {
      control.$commitViewValue();
    });
  };

  /**
   * @ngdoc method
   * @name form.FormController#$addControl
   * @param {object} control control object, either a {@link form.FormController} or an
   * {@link ngModel.NgModelController}
   *
   * @description
   * Register a control with the form. Input elements using ngModelController do this automatically
   * when they are linked.
   *
   * Note that the current state of the control will not be reflected on the new parent form. This
   * is not an issue with normal use, as freshly compiled and linked controls are in a `$pristine`
   * state.
   *
   * However, if the method is used programmatically, for example by adding dynamically created controls,
   * or controls that have been previously removed without destroying their corresponding DOM element,
   * it's the developers responsiblity to make sure the current state propagates to the parent form.
   *
   * For example, if an input control is added that is already `$dirty` and has `$error` properties,
   * calling `$setDirty()` and `$validate()` afterwards will propagate the state to the parent form.
   */
  form.$addControl = function(control) {
    // Breaking change - before, inputs whose name was "hasOwnProperty" were quietly ignored
    // and not added to the scope.  Now we throw an error.
    assertNotHasOwnProperty(corol
  form.$$renameControl = function(control, newName) {
    var oldName = control.$name;

    if (form[oldName] === control) {
      delete form[oldName];
    }
    form[newName] = control;
    control.$name = newName;
  };

  /**
   * @ngdoc method
   * @name form.FormController#$removeControl
   * @param {object} control control object, either a {@link form.FormController} or an
   * {@link ngModel.NgModelController}
   *
   * @description
   * Deregister a control from the form.
   *
   * Input elements using ngModelController do this automatically when they are destroyed.
   *
   * Note that only the removed control's validation state (`$errors`etc.) will be removed from the
   * form. `$dirty`, `$submitted` states will not be changed, because the expected behavior can be
   * different from case to case. For example, removing the only `$dirty` control from a form may or
   * may not mean that the form is still `$dirty`.
   */
  form.$removeControl = function(control) {
    if (control.$name && form[control.$name] === control) {
      delete form[control.$name];
    }
    forEachcontrol);
    });
    forEach(form.$error, function(value, name) {
      form.$setValidity(name, null, control);
    });
    forEach(form.$$success, function(value, name) {
      form.$setValidity(name, null, control);
    });

    arrayRemove(controls, control);
    control.$$parentForm = nullFormCtrl;
  };


  /**
   * @ngdoc method
   * @name form.FormCo object[propobject, property, controller) {
      var list = object[property];
      if (!list) {
        return;
      }
      arrayRemove(list, controller);
      if (list.length === 0) {
        delete object[property];
      }
    },
    $animate: $animate
  });

  /**
   * @ngdoc method
   * @name form.FormController#$setDirty
   *
   * @description
   * Sets the form to a dirty state.
   *
   * This method can be called to add the 'ng-dirty' class and set the form to a dirty
   * state (ng-dirty class). This method will also propagate to parent forms.
   */
  form.$setDirty = function() {
    $animate.removeClass(element, PRISTINE_CLASS);
    $animate.addClass(element, DIRTY_CLASS);
    form.$dirty = true;
    form.$pristine = false;
    form.$$parentForm.$setDirty();
  };

  /**
   * @ngdoc method
   * @name form.FormController#$setPristine
   *
   * @description
   * Sets the form to its pristine state.
   *
   * This method can be called to remove the 'ng-dirty' class and set the form to its pristine
   * state (ng-pristine class). This method willment, PRISTINE_CLASS, DIRTY_CLASS + ' ' + SUBMITTED_CLASS);
    form.$dirty = false;
    form.$pristine = true;
    form.$submitted = false;
    forEach(controls, function(control) {
      control.$setPristine();
    });
  };

  /**
   * @ngdoc method
   * @name form.FormController#$setUntouched
   *
   * @description
   * Sets the form to its untouched state.
   *
   * This method can be called to remove the 'ng-touched' class and set the form k to their untouched state is often useful when setting the form
   * back to its pristine state.
   */
  form.$setUntouched = function() {
    forEach(controls, function(control) {
      control.$setUntouched();
    });
  };

  /**
   * @ngdoc method
   * @name form.FormController#$setSubmitted
   *
   * @description
   * Sets the form to its submitted state.
   */
  form.$setSubmitted = function() {
    $animate.addClass(element, SUBMITTED_CLASS);
    form.$submitted = true;
    form.$$parentForm.$setSubmitted();
  };
}

/**
 * @ngdoc directive
 * @name ngForm
 * @restrict EAC
 *
 * @description
 * Nestable alias of {@link ng.directive:form `form`} directive. HTML
 * does not allow nesting of form elements. It is useful to nest forms, for example if the validity of a
 * sub-group of controls needs to be determined.
 *
 * Note: the purpose of `ngForm` is to group controls,
 * but not to be a replacement for the `<form>` tag with all of its capabilities
 * (e.g. posting to the server, ...).
 *
 * @param {string=} ngForm|name Name of the form. If specified, the form controller will be published into
 *                       related scope, under this name.
 *
 */

 /**
 * @ngdoc directive
 * @name form
 * @restrict E
 *
 * @description
 * Directive that instantiates
 * {@link form.FormController FormController}.
 *
 * If the `name` attribute is specified, the form controller is published onto the current scope under
 * this name.
 *
 * # Alias: {@link ng.directive:ngForm `ngForm`}
 *
 * In Angular, forms can be nested. This means that the outer form is valid when all of the child
 * forms are valid as well. However, browsers do not allow nesting of `<form>` elements, so
 * Angular provides the {@link ng.directive:ngForm `ngForm`} directive, which behaves identically to
 * `form` but can be nested. Nested forms can be useful, for example, if the validity of a sub-group
 * of controls needs to be determined.
 *
 * # CSS classes
 *  - `ng-valid` is set if the form is valid.
 *  - `ng-invalid` is set if the form is invalid.
 *  - `ng-pending` is set if the form is pending.
 *  - `ng-pristine` is set if the form is pristine.
 *  - `ng-dirty` is set if the form is dirty.
 *  - `ng-submitted` is set if the form was submitted.
 *
 * Keep in mind that ngAnimate can detect each of these classes when added and removed.
 *
 *
 * # Submitting a form and preventing the default action
 *
 * Since the role of forms in client-side Angular applications is different than in classical
 * roundtrip apps, it is desirable for the browser not to translate the form submission into a full
 * page reload that sends the data to the server. Instead some javascript logic should be triggered
 * to handle the form submission in an application-specific way.
 *
 * For this reason, Angular prevents the default action (form submission to the server) unless the
 * `<form>` element has an `action` attribute specified.
 *
 * You can use one of the following two ways to specify what javascript method should be called when
 * a form is submitted:
 *
 * - {@link ng.directive:ngSubmit ngSubmit} directive on the form element
 * - {@link ng.directive:ngClick ngClick} directive on the first
  *  button or input field of type submit (input[type=submit])
 *
 * To prevent double execution of the handler, use only one of the {@link ng.directive:ngSubmit ngSubmit}
 * or {@link ng.directive:ngClick ngClick} directives.
 * This is because of the following form submission rules in the HTML specification:
 *
 * - If a form has only one input field then hitting enter in this field triggers form submit
 * (`ngSubmit`)
 * - if a form has 2+ input fields and no buttons or input[type=submit] then hitting enter
 * doesn't trigger submit
 * - if a form has one or more input fields and one or more buttons or input[type=submit] then
 * hitting enter in any of the input fields will trigger the click handler on the *first* button or
 * input[type=submit] (`ngClick`) *and* a submit handler on the enclosing form (`ngSubmit`)
 *
 * Any pending `ngModelOptions` changes will take place immediately when an enclosing form is
 * submitted. Note that `ngClick` events will occur before the model is updated. Use `ngSubmit`
 * to have access to the updated model.
 *
 * ## Animation Hooks
 *
 * Animations in ngForm are triggered when any of the associated CSS classes are added and removed.
 * These classes are: `.ng-pristine`, `.ng-dirty`, `.ng-invalid` and `.ng-valid` as well as any
 * other validations that are performed within the form. Animations in ngForm are similar to how
 * they work in ngClass and animations can be hooked into using CSS transitions, keyframes as well
 * as JS animations.
 *
 * The following example shows a simple way to utilize CSS transitions to style a form element
 * that has been rendered as invalid after it has been validated:
 *
 * <pre>
 * //be sure to include ngAnimate as a module to hook into more
 * //advanced animations
 * .my-form {
 *   transition:0.5s linear all;
 *   background: white;
 * }
 * .my-form.ng-invalid {
 *   background: red;
 *   color:white;
 * }
 * </pre>
 *
 * @example
    <example deps="angular-animate.js" animations="true" fixBase="true" module="formExample">
      <file name="index.html">
       <script>
         angular.module('formExample', [])
           .controller('FormController', ['$scope', function($scope) {
             $scope.userType = 'guest';
           }]);
       </script>
       <style>
        .my-form {
          transition:all linear 0.5s;
          background: transparent;
        }
        .my-form.ng-invalid {
          background: red;
        }
       </style>
       <form name="myForm" ng-controller="FormController" class="my-form">
         userType: <input name="input" ng-model="userType" required>
         <span class="error" ng-show="myForm.input.$error.required">Required!</span><br>
         <code>userType = {{userType}}</code><br>
         <code>myForm.input.$valid = {{myForm.input.$valid}}</code><br>
         <code>myForm.input.$error = {{myForm.input.$error}}</code><br>
         <code>myForm.$valid = {{myForm.$valid}}</code><br>
         <code>myForm.$error.required = {{!!myForm.$error.required}}</code><br>
        </form>
      </file>
      <file name="protractor.js" type="protractor">
        it('should initialize to model', function() {
          var userType = element(by.binding('userType'));
          var valid = element(by.binding('myForm.input.$valid'));

          expect(userType.getText()).toContain('guest');
          expect(valid.getText()).toContain('true');
        });

        it('should be invalid if empty', function() {
          var userType = element(by.binding('userType'));
          var valid = element(by.binding('myForm.input.$valid'));
          var userInput = element(by.model('userType'));

          userInput.clear();
          userInput.sendKeys('');

          expect(userType.getText()).toEqual('userType =');
          expect(valid.getText()).toContain('false');
        });
      </file>
    </example>
 *
 * @param {string=} name Name of the form. If specified, the form controller will be published into
 *                       related scope, under this name.
 */
var formDirectiveFactory = function(isNgForm) {
  return ['$timeout', '$parse', function($timeout, $parse) {
    var formDirective = {
      name: 'form',
      restrict: isNgForm ? 'EAC' : 'E',
      require: ['form', '^^?form'], //first is the form's own ctrl, second is an optional parent form
      controller: FormController,
      compile: function ngFormCompile(formElement, attr) {
        // Setup initial state of the control
        formElement.addClass(PRISTINE_CLASS).addClass(VALID_CLASS);

        var nameAttr = attr.name ? 'name' : (isNgForm && attr.ngForm ? 'ngForm' : false);

        return {
          pre: function ngFormPreLink(scope, formElement, attr, ctrls) {
            var controller = ctrls[0];

            // if `action` attr is not present on the form, prevent the default action (submission)
            if (!('action' in attr)) {
              // we can't use jq events because if a form is destroyed during submission the default
              // action is not prevented. see #1238
              //
              // IE 9 is not affected because it doesn't fire a submit event and try to dn(event) {
                scope.$apply(function() {
                  controller.$commitViewValue();
                  controller.$setSubmitted();
                });

                event.preventDefault();
              };

              addEventListenerFn(formElement[0], 'submit', handleFormSubmi            formElement.on('$destroy', function() {
                $timeout(function() {
                  removeEventListenerFn(formElement[0], 'submit', handleFormSubmission);
                }, 0, false);
              });
            }

            var parentFormCtrl = ctrls[1] || controller.$$parentForm;
               setter(scope, undefined);
                contro {
              controller.$$parentForm.$removeControl(controller);
       if (expression === '') {
        //create an assignable expression, so forms with an empty name can be renamed later
        return $parse('this[""]').assign;
      }
      return $parse(expression).assign || noop;
    }
  }];
};

var formDirective = formDirectiveFactory();
var ngFormDirective = formDirectiveFactory(true);

/* global VALID_CLASS: false,
  INVALID_CLASS: false,
  PRISTINE_CLASS: false,
  DIRTY_CLASS: false,
  UNTOUCHED_CLASS: false,
  TOUCHED_CLASS: false,
  ngModelMinErr: false,
*/

// Regex code is obtained from SO: https://stackoverflow.com/questions/3143070/javascript-regex-iso-datetime#answer-3143231
var ISO_DATE_REGEXP = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;
// See valid URLs in RFC3987 (http://tools.ietf.org/html/rfc3987)
// Note: We are being more lenient, because browsers are too.
//   1. Scheme
//   2. Slashes
//   3. Username
//   4. Password
//   5. Hostname
//   6. Port
//   7. Path
//   8. Query
//   9. Fragment
//                 1111111111111111 222   333333    44444        555555555555555555555555    666     77777777     8888888     999
var URL_REGEXP = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i;
var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
var NUMBER_REGEXP = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/;
var DATE_REGEXP = /^(\d{4})-(\d{2})-(\d{2})$/;
var DATETIMELOCAL_REGEXP = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/;
var WEEK_REGEXP = /^(\d{4})-W(\d\d)$/;
var MONTH_REGEXP = /^(\d{4})-(\d\d)$//;

var PARTIAL_VALIDATION_EVENTS = 'keydown wheel mousedown';
var PARTIAL_VALIDATION_TYPES = createMap();
forEach('date,datetime-local,month,time,week'.split(','), function(type) {
  PARTIAL_VALIDATION_TYPES[type] = true;
});

var inputType = {

  /**
   * @ngdoc input
   * @name input[text]
   *
   * @description
   * Standard HTML text input with angular data binding, inherited by most of the `input` elements.
   *
   *
   * @param {string} ngModel Assignable angular expression to data-bind to.
   * @param {string=} name Property name of the form under which the control is published.
   * @param {string=} required Adds `required` validation error key if the value is not entered.
   * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
   *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
   *    `required` when you want to data-bind to the `required` attribute.
   * @param {number=} ngMinlength Sets `minlength` validation error key if the value is shorter than
   *    minlength.
   * @param {number=} ngMaxlength Sets `maxlength` validation error key if the value is longer than
   *    maxlength. Setting the attribute to a negative or non-numeric value, allows view values of
   *    any length.
   * @param {string=} pattern Similar to `ngPattern` except that the attribute value is the actual string
   *    that contains the regular expression body that will be converted to a regular expression
   *    as in the ngPattern directive.
   * @param {string=} ngPattern Sets `pattern` validation error key if the ngModel value does not match
   *    a RegExp found by evaluating the Angular expression given in the attribute value.
   *    If the expression evaluates to a RegExp object, then this is used directly.
   *    If the expression evaluates to a string, then it will be converted to a RegExp
   *    after wrapping it in `^` and `$` characters. For instance, `"abc"` will be converted to
   *    `new RegExp('^abc$')`.<br />
   *    **Note:** Avoid using the `g` flag on the RegExp, as it will cause each successive search to
   *    start at the index of the last search's match, thus not taking the whole input value into
   *    account.
   * @param {string=} ngChange Angular expression to be executed when input changes due to user
   *    interaction with the input element.
   * @param {boolean=} [ngTrim=true] If set to false Angular will not automatically trim the input.
   *    This parameter is ignored for input[type=password] controls, which will never trim the
   *    input.
   *
   * @example
      <example name="text-input-directive" module="textInputExample">
        <file name="index.html">
         <script>
           angular.module('textInputExample', [])
             .controller('ExampleController', ['$scope', function($scope) {
               $scope.example = {
                 text: 'guest',
                 word: /^\s*\w*\s*$/
               };
             }]);
         </script>
         <form name="myForm" ng-controller="ExampleController">
           <label>Single word:
             <input type="text" name="input" ng-model="example.text"
                    ng-pattern="example.word" required ng-trim="false">
           </label>
           <div role="alert">
             <span class="error" ng-show="myForm.input.$error.required">
               Required!</span>
             <span class="error" ng-show="myForm.input.$error.pattern">
               Single word only!</span>
           </div>
           <tt>text = {{example.text}}</tt><br/>
           <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
           <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
           <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
           <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
          </form>
        </file>
        <file name="protractor.js" type="protractor">
          var text = element(by.binding('example.text'));
          var valid = element(by.binding('myForm.input.$valid'));
          var input = element(by.model('example.text'));

          it('should initialize to model', function() {
            expect(text.getText()).toContain('guest');
            expect(valid.getText()).toContain('true');
          });

          it('should be invalid if empty', function() {
            input.clear();
            input.sendKeys('');

            expect(text.getText()).toEqual('text =');
            expect(valid.getText()).toContain('false');
          });

          it('should be invalid if multi word', function() {
            input.clear();
            input.sendKeys('hello world');

            expect(valid.getText()).toContain('false');
          });
        </file>
      </example>
   */
  'text': textInputType,

    /**
     * @ngdoc input
     * @name input[date]
     *
     * @description
     * Input with date validation and transformation. In browsers that do not yet support
     * the HTML5 date input, a text element will be used. In that case, text must be entered in a valid ISO-8601
     * date format (yyyy-MM-dd), for example: `2009-01-06`. Since many
     * modern browsers do not yet support this input type, it is important to provide cues to users on the
     * expected input format via a placeholder or label.
     *
     * The model must always be a Date object, otherwise Angular will throw an error.
     * Invalid `Date` objects (dates whose `getTime()` is `NaN`) will be rendered as an empty string.
     *
     * The timezone to be used to read/write the `Date` instance in the model can be defined using
     * {@link ng.directive:ngModelOptions ngModelOptions}. By default, this is the timezone of the browser.
     *
     * @param {string} ngModel Assignable angular expression to data-bind to.
     * @param {string=} name Property name of the form under which the control is published.
     * @param {string=} min Sets the `min` validation error key if the value entered is less than `min`. This must be a
     *   valid ISO date string (yyyy-MM-dd). You can also use interpolation inside this attribute
     *   (e.g. `min="{{minDate | date:'yyyy-MM-dd'}}"`). Note that `min` will also add native HTML5
     *   constraint validation.
     * @param {string=} max Sets the `max` validation error key if the value entered is greater than `max`. This must be
     *   a valid ISO date string (yyyy-MM-dd). You can also use interpolation inside this attribute
     *   (e.g. `max="{{maxDate | date:'yyyy-MM-dd'}}"`). Note that `max` will also add native HTML5
     *   constraint validation.
     * @param {(date|string)=} ngMin Sets the `min` validation constraint to the Date / ISO date string
     *   the `ngMin` expression evaluates to. Note that it does not set the `min` attribute.
     * @param {(date|string)=} ngMax Sets the `max` validation constraint to the Date / ISO date string
     *   the `ngMax` expression evaluates to. Note that it does not set the `max` attribute.
     * @param {string=} required Sets `required` validation error key if the value is not entered.
     * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
     *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
     *    `required` when you want to data-bind to the `required` attribute.
     * @param {string=} ngChange Angular expression to be executed when input changes due to user
     *    interaction with the input element.
     *
     * @example
     <example name="date-input-directive" module="dateInputExample">
     <file name="index.html">
       <script>
          angular.module('dateInputExample', [])
            .controller('DateController', ['$scope', function($scope) {
              $scope.example = {
                value: new Date(2013, 9, 22)
              };
            }]);
       </script>
       <form name="myForm" ng-controller="DateController as dateCtrl">
          <label for="exampleInput">Pick a date in 2013:</label>
          <input type="date" id="exampleInput" name="input" ng-model="example.value"
              placeholder="yyyy-MM-dd" min="2013-01-01" max="2013-12-31" required />
          <div role="alert">
            <span class="error" ng-show="myForm.input.$error.required">
                Required!</span>
            <span class="error" ng-show="myForm.input.$error.date">
                Not a valid date!</span>
           </div>
           <tt>value = {{example.value | date: "yyyy-MM-dd"}}</tt><br/>
           <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
           <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
           <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
           <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
       </form>
     </file>
     <file name="protractor.js" type="protractor">
        var value = element(by.binding('example.value | date: "yyyy-MM-dd"'));
        var valid = element(by.binding('myForm.input.$valid'));
        var input = element(by.model('example.value'));

        // currently protractor/webdriver does not support
        // sending keys to all known HTML5 input controls
        // for various browsers (see https://github.com/angular/protractor/issues/562).
        function setInput(val) {
          // set the value of the element and force validation.
          var scr = "var ipt = document.getElementById('exampleInput'); " +
          "ipt.value = '" + val + "';" +
          "angular.element(ipt).scope().$apply(function(s) { s.myForm[ipt.name].$setViewValue('" + val + "'); });";
          browser.executeScript(scr);
        }

        it('should initialize to model', function() {
          expect(value.getText()).toContain('2013-10-22');
          expect(valid.getText()).toContain('myForm.input.$valid = true');
        });

        it('should be invalid if empty', function() {
          setInput('');
          expect(value.getText()).toEqual('value =');
          expect(valid.getText()).toContain('myForm.input.$valid = false');
        });

        it('should be invalid if over max', function() {
          setInput('2015-01-01');
          expect(value.getText()).toContain('');
          expect(valid.getText()).toContain('myForm.input.$valid = false');
        });
     </file>
     </example>
     */
  'date': createDateInputType('date', DATE_REGEXP,
         createDateParser(DATE_REGEXP, ['yyyy', 'MM', 'dd']),
         'yyyy-MM-dd'),

   /**
    * @ngdoc input
    * @name input[datetime-local]
    *
    * @description
    * Input with datetime validation and transformation. In browsers that do not yet support
    * the HTML5 date input, a text element will be used. In that case, the text must be entered in a valid ISO-8601
    * local datetime format (yyyy-MM-ddTHH:mm:ss), for example: `2010-12-28T14:57:00`.
    *
    * The model must always be a Date object, otherwise Angular will throw an error.
    * Invalid `Date` objects (dates whose `getTime()` is `NaN`) will be rendered as an empty string.
    *
    * The timezone to be used to read/write the `Date` instance in the model can be defined using
    * {@link ng.directive:ngModelOptions ngModelOptions}. By default, this is the timezone of the browser.
    *
    * @param {string} ngModel Assignable angular expression to data-bind to.
    * @param {string=} name Property name of the form under which the control is published.
    * @param {string=} min Sets the `min` validation error key if the value entered is less than `min`.
    *   This must be a valid ISO datetime format (yyyy-MM-ddTHH:mm:ss). You can also use interpolation
    *   inside this attribute (e.g. `min="{{minDatetimeLocal | date:'yyyy-MM-ddTHH:mm:ss'}}"`).
    *   Note that `min` will also add native HTML5 constraint validation.
    * @param {string=} max Sets the `max` validation error key if the value entered is greater than `max`.
    *   This must be a valid ISO datetime format (yyyy-MM-ddTHH:mm:ss). You can also use interpolation
    *   inside this attribute (e.g. `max="{{maxDatetimeLocal | date:'yyyy-MM-ddTHH:mm:ss'}}"`).
    *   Note that `max` will also add native HTML5 constraint validation.
    * @param {(date|string)=} ngMin Sets the `min` validation error key to the Date / ISO datetime string
    *   the `ngMin` expression evaluates to. Note that it does not set the `min` attribute.
    * @param {(date|string)=} ngMax Sets the `max` validation error key to the Date / ISO datetime string
    *   the `ngMax` expression evaluates to. Note that it does not set the `max` attribute.
    * @param {string=} required Sets `required` validation error key if the value is not entered.
    * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
    *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
    *    `required` when you want to data-bind to the `required` attribute.
    * @param {string=} ngChange Angular expression to be executed when input changes due to user
    *    interaction with the input element.
    *
    * @example
    <example name="datetimelocal-input-directive" module="dateExample">
    <file name="index.html">
      <script>
        angular.module('dateExample', [])
          .controller('DateController', ['$scope', function($scope) {
            $scope.example = {
              value: new Date(2010, 11, 28, 14, 57)
            };
          }]);
      </script>
      <form name="myForm" ng-controller="DateController as dateCtrl">
        <label for="exampleInput">Pick a date between in 2013:</label>
        <input type="datetime-local" id="exampleInput" name="input" ng-model="example.value"
            placeholder="yyyy-MM-ddTHH:mm:ss" min="2001-01-01T00:00:00" max="2013-12-31T00:00:00" required />
        <div role="alert">
          <span class="error" ng-show="myForm.input.$error.required">
              Required!</span>
          <span class="error" ng-show="myForm.input.$error.datetimelocal">
              Not a valid date!</span>
        </div>
        <tt>value = {{example.value | date: "yyyy-MM-ddTHH:mm:ss"}}</tt><br/>
        <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
        <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
        <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
        <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
      </form>
    </file>
    <file name="protractor.js" type="protractor">
      var value = element(by.binding('example.value | date: "yyyy-MM-ddTHH:mm:ss"'));
      var valid = element(by.binding('myForm.input.$valid'));
      var input = element(by.model('example.value'));

      // currently protractor/webdriver does not support
      // sending keys to all known HTML5 input controls
      // for various browsers (https://github.com/angular/protractor/issues/562).
      function setInput(val) {
        // set the value of the element and force validation.
        var scr = "var ipt = document.getElementById('exampleInput'); " +
        "ipt.value = '" + val + "';" +
        "angular.element(ipt).scope().$apply(function(s) { s.myForm[ipt.name].$setViewValue('" + val + "'); });";
        browser.executeScript(scr);
      }

      it('should initialize to model', function() {
        expect(value.getText()).toContain('2010-12-28T14:57:00');
        expect(valid.getText()).toContain('myForm.input.$valid = true');
      });

      it('should be invalid if empty', function() {
        setInput('');
        expect(value.getText()).toEqual('value =');
        expect(valid.getText()).toContain('myForm.input.$valid = false');
      });

      it('should be invalid if over max', function() {
        setInput('2015-01-01T23:59:00');
        expect(value.getText()).toContain('');
        expect(valid.getText()).toContain('myForm.input.$valid = false');
      });
    </file>
    </example>
    */
  'datetime-local': createDateInputType('datetimelocal', DATETIMELOCAL_REGEXP,
      createDateParser(DATETIMELOCAL_REGEXP, ['yyyy', 'MM', 'dd', 'HH', 'mm', 'ss', 'sss']),
      'yyyy-MM-ddTHH:mm:ss.sss'),

  /**
   * @ngdoc input
   * @name input[time]
   *
   * @description
   * Input with time validation and transformation. In browsers that do not yet support
   * the HTML5 date input, a text element will be used. In that case, the text must be entered in a valid ISO-8601
   * local time format (HH:mm:ss), for example: `14:57:00`. Model must be a Date object. This binding will always output a
   * Date object to the model of January 1, 1970, or local date `new Date(1970, 0, 1, HH, mm, ss)`.
   *
   * The model must always be a Date object, otherwise Angular will throw an error.
   * Invalid `Date` objects (dates whose `getTime()` is `NaN`) will be rendered as an empty string.
   *
   * The timezone to be used to read/write the `Date` instance in the model can be defined using
   * {@link ng.directive:ngModelOptions ngModelOptions}. By default, this is the timezone of the browser.
   *
   * @param {string} ngModel Assignable angular expression to data-bind to.
   * @param {string=} name Property name of the form under which the control is published.
   * @param {string=} min Sets the `min` validation error key if the value entered is less than `min`.
   *   This must be a valid ISO time format (HH:mm:ss). You can also use interpolation inside this
   *   attribute (e.g. `min="{{minTime | date:'HH:mm:ss'}}"`). Note that `min` will also add
   *   native HTML5 constraint validation.
   * @param {string=} max Sets the `max` validation error key if the value entered is greater than `max`.
   *   This must be a valid ISO time format (HH:mm:ss). You can also use interpolation inside this
   *   attribute (e.g. `max="{{maxTime | date:'HH:mm:ss'}}"`). Note that `max` will also add
   *   native HTML5 constraint validation.
   * @param {(date|string)=} ngMin Sets the `min` validation constraint to the Date / ISO time string the
   *   `ngMin` expression evaluates to. Note that it does not set the `min` attribute.
   * @param {(date|string)=} ngMax Sets the `max` validation constraint to the Date / ISO time string the
   *   `ngMax` expression evaluates to. Note that it does not set the `max` attribute.
   * @param {string=} required Sets `required` validation error key if the value is not entered.
   * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
   *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
   *    `required` when you want to data-bind to the `required` attribute.
   * @param {string=} ngChange Angular expression to be executed when input changes due to user
   *    interaction with the input element.
   *
   * @example
   <example name="time-input-directive" module="timeExample">
   <file name="index.html">
     <script>
      angular.module('timeExample', [])
        .controller('DateController', ['$scope', function($scope) {
          $scope.example = {
            value: new Date(1970, 0, 1, 14, 57, 0)
          };
        }]);
     </script>
     <form name="myForm" ng-controller="DateController as dateCtrl">
        <label for="exampleInput">Pick a time between 8am and 5pm:</label>
        <input type="time" id="exampleInput" name="input" ng-model="example.value"
            placeholder="HH:mm:ss" min="08:00:00" max="17:00:00" required />
        <div role="alert">
          <span class="error" ng-show="myForm.input.$error.required">
              Required!</span>
          <span class="error" ng-show="myForm.input.$error.time">
              Not a valid date!</span>
        </div>
        <tt>value = {{example.value | date: "HH:mm:ss"}}</tt><br/>
        <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
        <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
        <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
        <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
     </form>
   </file>
   <file name="protractor.js" type="protractor">
      var value = element(by.binding('example.value | date: "HH:mm:ss"'));
      var valid = element(by.binding('myForm.input.$valid'));
      var input = element(by.model('example.value'));

      // currently protractor/webdriver does not support
      // sending keys to all known HTML5 input controls
      // for various browsers (https://github.com/angular/protractor/issues/562).
      function setInput(val) {
        // set the value of the element and force validation.
        var scr = "var ipt = document.getElementById('exampleInput'); " +
        "ipt.value = '" + val + "';" +
        "angular.element(ipt).scope().$apply(function(s) { s.myForm[ipt.name].$setViewValue('" + val + "'); });";
        browser.executeScript(scr);
      }

      it('should initialize to model', function() {
        expect(value.getText()).toContain('14:57:00');
        expect(valid.getText()).toContain('myForm.input.$valid = true');
      });

      it('should be invalid if empty', function() {
        setInput('');
        expect(value.getText()).toEqual('value =');
        expect(valid.getText()).toContain('myForm.input.$valid = false');
      });

      it('should be invalid if over max', function() {
        setInput('23:59:00');
        expect(value.getText()).toContain('');
        expect(valid.getText()).toContain('myForm.input.$valid = false');
      });
   </file>
   </example>
   */
  'time': createDateInputType('time', TIME_REGEXP,
      createDateParser(TIME_REGEXP, ['HH', 'mm', 'ss', 'sss']),
     'HH:mm:ss.sss'),

   /**
    * @ngdoc input
    * @name input[week]
    *
    * @description
    * Input with week-of-the-year validation and transformation to Date. In browsers that do not yet support
    * the HTML5 week input, a text element will be used. In that case, the text must be entered in a valid ISO-8601
    * week format (yyyy-W##), for example: `2013-W02`.
    *
    * The model must always be a Date object, otherwise Angular will throw an error.
    * Invalid `Date` objects (dates whose `getTime()` is `NaN`) will be rendered as an empty string.
    *
    * The timezone to be used to read/write the `Date` instance in the model can be defined using
    * {@link ng.directive:ngModelOptions ngModelOptions}. By default, this is the timezone of the browser.
    *
    * @param {string} ngModel Assignable angular expression to data-bind to.
    * @param {string=} name Property name of the form under which the control is published.
    * @param {string=} min Sets the `min` validation error key if the value entered is less than `min`.
    *   This must be a valid ISO week format (yyyy-W##). You can also use interpolation inside this
    *   attribute (e.g. `min="{{minWeek | date:'yyyy-Www'}}"`). Note that `min` will also add
    *   native HTML5 constraint validation.
    * @param {string=} max Sets the `max` validation error key if the value entered is greater than `max`.
    *   This must be a valid ISO week format (yyyy-W##). You can also use interpolation inside this
    *   attribute (e.g. `max="{{maxWeek | date:'yyyy-Www'}}"`). Note that `max` will also add
    *   native HTML5 constraint validation.
    * @param {(date|string)=} ngMin Sets the `min` validation constraint to the Date / ISO week string
    *   the `ngMin` expression evaluates to. Note that it does not set the `min` attribute.
    * @param {(date|string)=} ngMax Sets the `max` validation constraint to the Date / ISO week string
    *   the `ngMax` expression evaluates to. Note that it does not set the `max` attribute.
    * @param {string=} required Sets `required` validation error key if the value is not entered.
    * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
    *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
    *    `required` when you want to data-bind to the `required` attribute.
    * @param {string=} ngChange Angular expression to be executed when input changes due to user
    *    interaction with the input element.
    *
    * @example
    <example name="week-input-directive" module="weekExample">
    <file name="index.html">
      <script>
      angular.module('weekExample', [])
        .controller('DateController', ['$scope', function($scope) {
          $scope.example = {
            value: new Date(2013, 0, 3)
          };
        }]);
      </script>
      <form name="myForm" ng-controller="DateController as dateCtrl">
        <label>Pick a date between in 2013:
          <input id="exampleInput" type="week" name="input" ng-model="example.value"
                 placeholder="YYYY-W##" min="2012-W32"
                 max="2013-W52" required />
        </label>
        <div role="alert">
          <span class="error" ng-show="myForm.input.$error.required">
              Required!</span>
          <span class="error" ng-show="myForm.input.$error.week">
              Not a valid date!</span>
        </div>
        <tt>value = {{example.value | date: "yyyy-Www"}}</tt><br/>
        <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
        <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
        <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
        <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
      </form>
    </file>
    <file name="protractor.js" type="protractor">
      var value = element(by.binding('example.value | date: "yyyy-Www"'));
      var valid = element(by.binding('myForm.input.$valid'));
      var input = element(by.model('example.value'));

      // currently protractor/webdriver does not support
      // sending keys to all known HTML5 input controls
      // for various browsers (https://github.com/angular/protractor/issues/562).
      function setInput(val) {
        // set the value of the element and force validation.
        var scr = "var ipt = document.getElementById('exampleInput'); " +
        "ipt.value = '" + val + "';" +
        "angular.element(ipt).scope().$apply(function(s) { s.myForm[ipt.name].$setViewValue('" + val + "'); });";
        browser.executeScript(scr);
      }

      it('should initialize to model', function() {
        expect(value.getText()).toContain('2013-W01');
        expect(valid.getText()).toContain('myForm.input.$valid = true');
      });

      it('should be invalid if empty', function() {
        setInput('');
        expect(value.getText()).toEqual('value =');
        expect(valid.getText()).toContain('myForm.input.$valid = false');
      });

      it('should be invalid if over max', function() {
        setInput('2015-W01');
        expect(value.getText()).toContain('');
        expect(valid.getText()).toContain('myForm.input.$valid = false');
      });
    </file>
    </example>
    */
  'week': createDateInputType('week', WEEK_REGEXP, weekParser, 'yyyy-Www'),

  /**
   * @ngdoc input
   * @name input[month]
   *
   * @description
   * Input with month validation and transformation. In browsers that do not yet support
   * the HTML5 month input, a text element will be used. In that case, the text must be entered in a valid ISO-8601
   * month format (yyyy-MM), for example: `2009-01`.
   *
   * The model must always be a Date object, otherwise Angular will throw an error.
   * Invalid `Date` objects (dates whose `getTime()` is `NaN`) will be rendered as an empty string.
   * If the model is not set to the first of the month, the next view to model update will set it
   * to the first of the month.
   *
   * The timezone to be used to read/write the `Date` instance in the model can be defined using
   * {@link ng.directive:ngModelOptions ngModelOptions}. By default, this is the timezone of the browser.
   *
   * @param {string} ngModel Assignable angular expression to data-bind to.
   * @param {string=} name Property name of the form under which the control is published.
   * @param {string=} min Sets the `min` validation error key if the value entered is less than `min`.
   *   This must be a valid ISO month format (yyyy-MM). You can also use interpolation inside this
   *   attribute (e.g. `min="{{minMonth | date:'yyyy-MM'}}"`). Note that `min` will also add
   *   native HTML5 constraint validation.
   * @param {string=} max Sets the `max` validation error key if the value entered is greater than `max`.
   *   This must be a valid ISO month format (yyyy-MM). You can also use interpolation inside this
   *   attribute (e.g. `max="{{maxMonth | date:'yyyy-MM'}}"`). Note that `max` will also add
   *   native HTML5 constraint validation.
   * @param {(date|string)=} ngMin Sets the `min` validation constraint to the Date / ISO week string
   *   the `ngMin` expression evaluates to. Note that it does not set the `min` attribute.
   * @param {(date|string)=} ngMax Sets the `max` validation constraint to the Date / ISO week string
   *   the `ngMax` expression evaluates to. Note that it does not set the `max` attribute.

   * @param {string=} required Sets `required` validation error key if the value is not entered.
   * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
   *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
   *    `required` when you want to data-bind to the `required` attribute.
   * @param {string=} ngChange Angular expression to be executed when input changes due to user
   *    interaction with the input element.
   *
   * @example
   <example name="month-input-directive" module="monthExample">
   <file name="index.html">
     <script>
      angular.module('monthExample', [])
        .controller('DateController', ['$scope', function($scope) {
          $scope.example = {
            value: new Date(2013, 9, 1)
          };
        }]);
     </script>
     <form name="myForm" ng-controller="DateController as dateCtrl">
       <label for="exampleInput">Pick a month in 2013:</label>
       <input id="exampleInput" type="month" name="input" ng-model="example.value"
          placeholder="yyyy-MM" min="2013-01" max="2013-12" required />
       <div role="alert">
         <span class="error" ng-show="myForm.input.$error.required">
            Required!</span>
         <span class="error" ng-show="myForm.input.$error.month">
            Not a valid month!</span>
       </div>
       <tt>value = {{example.value | date: "yyyy-MM"}}</tt><br/>
       <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
       <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
       <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
       <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
     </form>
   </file>
   <file name="protractor.js" type="protractor">
      var value = element(by.binding('example.value | date: "yyyy-MM"'));
      var valid = element(by.binding('myForm.input.$valid'));
      var input = element(by.model('example.value'));

      // currently protractor/webdriver does not support
      // sending keys to all known HTML5 input controls
      // for various browsers (https://github.com/angular/protractor/issues/562).
      function setInput(val) {
        // set the value of the element and force validation.
        var scr = "var ipt = document.getElementById('exampleInput'); " +
        "ipt.value = '" + val + "';" +
        "angular.element(ipt).scope().$apply(function(s) { s.myForm[ipt.name].$setViewValue('" + val + "'); });";
        browser.executeScript(scr);
      }

      it('should initialize to model', function() {
        expect(value.getText()).toContain('2013-10');
        expect(valid.getText()).toContain('myForm.input.$valid = true');
      });

      it('should be invalid if empty', function() {
        setInput('');
        expect(value.getText()).toEqual('value =');
        expect(valid.getText()).toContain('myForm.input.$valid = false');
      });

      it('should be invalid if over max', function() {
        setInput('2015-01');
        expect(value.getText()).toContain('');
        expect(valid.getText()).toContain('myForm.input.$valid = false');
      });
   </file>
   </example>
   */
  'month': createDateInputType('month', MONTH_REGEXP,
     createDateParser(MONTH_REGEXP, ['yyyy', 'MM']),
     'yyyy-MM'),

  /**
   * @ngdoc input
   * @name input[number]
   *
   * @description
   * Text input with number validation and transformation. Sets the `number` validation
   * error if not a valid number.
   *
   * <div class="alert alert-warning">
   * The model must always be of type `number` otherwise Angular will throw an error.
   * Be aware that a string containing a number is not enough. See the {@link ngModel:numfmt}
   * error docs for more information and an example of how to convert your model if necessary.
   * </div>
   *
   * ## Issues with HTML5 constraint validation
   *
   * In browsers that follow the
   * [HTML5 specification](https://html.spec.whatwg.org/multipage/forms.html#number-state-%28type=number%29),
   * `input[number]` does not work as expected with {@link ngModelOptions `ngModelOptions.allowInvalid`}.
   * If a non-number is entered in the input, the browser will report the value as an empty string,
   * which means the view / model values in `ngModel` and subsequently the scope value
   * will also be an empty string.
   *
   *
   * @param {string} ngModel Assignable angular expression to data-bind to.
   * @param {string=} name Property name of the form under which the control is published.
   * @param {string=} min Sets the `min` validation error key if the value entered is less than `min`.
   * @param {string=} max Sets the `max` validation error key if the value entered is greater than `max`.
   * @param {string=} required Sets `required` validation error key if the value is not entered.
   * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
   *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
   *    `required` when you want to data-bind to the `required` attribute.
   * @param {number=} ngMinlength Sets `minlength` validation error key if the value is shorter than
   *    minlength.
   * @param {number=} ngMaxlength Sets `maxlength` validation error key if the value is longer than
   *    maxlength. Setting the attribute to a negative or non-numeric value, allows view values of
   *    any length.
   * @param {string=} pattern Similar to `ngPattern` except that the attribute value is the actual string
   *    that contains the regular expression body that will be converted to a regular expression
   *    as in the ngPattern directive.
   * @param {string=} ngPattern Sets `pattern` validation error key if the ngModel value does not match
   *    a RegExp found by evaluating the Angular expression given in the attribute value.
   *    If the expression evaluates to a RegExp object, then this is used directly.
   *    If the expression evaluates to a string, then it will be converted to a RegExp
   *    after wrapping it in `^` and `$` characters. For instance, `"abc"` will be converted to
   *    `new RegExp('^abc$')`.<br />
   *    **Note:** Avoid using the `g` flag on the RegExp, as it will cause each successive search to
   *    start at the index of the last search's match, thus not taking the whole input value into
   *    account.
   * @param {string=} ngChange Angular expression to be executed when input changes due to user
   *    interaction with the input element.
   *
   * @example
      <example name="number-input-directive" module="numberExample">
        <file name="index.html">
         <script>
           angular.module('numberExample', [])
             .controller('ExampleController', ['$scope', function($scope) {
               $scope.example = {
                 value: 12
               };
             }]);
         </script>
         <form name="myForm" ng-controller="ExampleController">
           <label>Number:
             <input type="number" name="input" ng-model="example.value"
                    min="0" max="99" required>
          </label>
           <div role="alert">
             <span class="error" ng-show="myForm.input.$error.required">
               Required!</span>
             <span class="error" ng-show="myForm.input.$error.number">
               Not valid number!</span>
           </div>
           <tt>value = {{example.value}}</tt><br/>
           <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
           <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
           <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
           <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
          </form>
        </file>
        <file name="protractor.js" type="protractor">
          var value = element(by.binding('example.value'));
          var valid = element(by.binding('myForm.input.$valid'));
          var input = element(by.model('example.value'));

          it('should initialize to model', function() {
            expect(value.getText()).toContain('12');
            expect(valid.getText()).toContain('true');
          });

          it('should be invalid if empty', function() {
            input.clear();
            input.sendKeys('');
            expect(value.getText()).toEqual('value =');
            expect(valid.getText()).toContain('false');
          });

          it('should be invalid if over max', function() {
            input.clear();
            input.sendKeys('123');
            expect(value.getText()).toEqual('value =');
            expect(valid.getText()).toContain('false');
          });
        </file>
      </example>
   */
  'number': numberInputType,


  /**
   * @ngdoc input
   * @name input[url]
   *
   * @description
   * Text input with URL validation. Sets the `url` validation error key if the content is not a
   * valid URL.
   *
   * <div class="alert alert-warning">
   * **Note:** `input[url]` uses a regex to validate urls that is derived from the regex
   * used in Chromium. If you need stricter validation, you can use `ng-pattern` or modify
   * the built-in validators (see the {@link guide/forms Forms guide})
   * </div>
   *
   * @param {string} ngModel Assignable angular expression to data-bind to.
   * @param {string=} name Property name of the form under which the control is published.
   * @param {string=} required Sets `required` validation error key if the value is not entered.
   * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
   *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
   *    `required` when you want to data-bind to the `required` attribute.
   * @param {number=} ngMinlength Sets `minlength` validation error key if the value is shorter than
   *    minlength.
   * @param {number=} ngMaxlength Sets `maxlength` validation error key if the value is longer than
   *    maxlength. Setting the attribute to a negative or non-numeric value, allows view values of
   *    any length.
   * @param {string=} pattern Similar to `ngPattern` except that the attribute value is the actual string
   *    that contains the regular expression body that will be converted to a regular expression
   *    as in the ngPattern directive.
   * @param {string=} ngPattern Sets `pattern` validation error key if the ngModel value does not match
   *    a RegExp found by evaluating the Angular expression given in the attribute value.
   *    If the expression evaluates to a RegExp object, then this is used directly.
   *    If the expression evaluates to a string, then it will be converted to a RegExp
   *    after wrapping it in `^` and `$` characters. For instance, `"abc"` will be converted to
   *    `new RegExp('^abc$')`.<br />
   *    **Note:** Avoid using the `g` flag on the RegExp, as it will cause each successive search to
   *    start at the index of the last search's match, thus not taking the whole input value into
   *    account.
   * @param {string=} ngChange Angular expression to be executed when input changes due to user
   *    interaction with the input element.
   *
   * @example
      <example name="url-input-directive" module="urlExample">
        <file name="index.html">
         <script>
           angular.module('urlExample', [])
             .controller('ExampleController', ['$scope', function($scope) {
               $scope.url = {
                 text: 'http://google.com'
               };
             }]);
         </script>
         <form name="myForm" ng-controller="ExampleController">
           <label>URL:
             <input type="url" name="input" ng-model="url.text" required>
           <label>
           <div role="alert">
             <span class="error" ng-show="myForm.input.$error.required">
               Required!</span>
             <span class="error" ng-show="myForm.input.$error.url">
               Not valid url!</span>
           </div>
           <tt>text = {{url.text}}</tt><br/>
           <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
           <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
           <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
           <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
           <tt>myForm.$error.url = {{!!myForm.$error.url}}</tt><br/>
          </form>
        </file>
        <file name="protractor.js" type="protractor">
          var text = element(by.binding('url.text'));
          var valid = element(by.binding('myForm.input.$valid'));
          var input = element(by.model('url.text'));

          it('should initialize to model', function() {
            expect(text.getText()).toContain('http://google.com');
            expect(valid.getText()).toContain('true');
          });

          it('should be invalid if empty', function() {
            input.clear();
            input.sendKeys('');

            expect(text.getText()).toEqual('text =');
            expect(valid.getText()).toContain('false');
          });

          it('should be invalid if not url', function() {
            input.clear();
            input.sendKeys('box');

            expect(valid.getText()).toContain('false');
          });
        </file>
      </example>
   */
  'url': urlInputType,


  /**
   * @ngdoc input
   * @name input[email]
   *
   * @description
   * Text input with email validation. Sets the `email` validation error key if not a valid email
   * address.
   *
   * <div class="alert alert-warning">
   * **Note:** `input[email]` uses a regex to validate email addresses that is derived from the regex
   * used in Chromium. If you need stricter validation (e.g. requiring a top-level domain), you can
   * use `ng-pattern` or modify the built-in validators (see the {@link guide/forms Forms guide})
   * </div>
   *
   * @param {string} ngModel Assignable angular expression to data-bind to.
   * @param {string=} name Property name of the form under which the control is published.
   * @param {string=} required Sets `required` validation error key if the value is not entered.
   * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
   *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
   *    `required` when you want to data-bind to the `required` attribute.
   * @param {number=} ngMinlength Sets `minlength` validation error key if the value is shorter than
   *    minlength.
   * @param {number=} ngMaxlength Sets `maxlength` validation error key if the value is longer than
   *    maxlength. Setting the attribute to a negative or non-numeric value, allows view values of
   *    any length.
   * @param {string=} pattern Similar to `ngPattern` except that the attribute value is the actual string
   *    that contains the regular expression body that will be converted to a regular expression
   *    as in the ngPattern directive.
   * @param {string=} ngPattern Sets `pattern` validation error key if the ngModel value does not match
   *    a RegExp found by evaluating the Angular expression given in the attribute value.
   *    If the expression evaluates to a RegExp object, then this is used directly.
   *    If the expression evaluates to a string, then it will be converted to a RegExp
   *    after wrapping it in `^` and `$` characters. For instance, `"abc"` will be converted to
   *    `new RegExp('^abc$')`.<br />
   *    **Note:** Avoid using the `g` flag on the RegExp, as it will cause each successive search to
   *    start at the index of the last search's match, thus not taking the whole input value into
   *    account.
   * @param {string=} ngChange Angular expression to be executed when input changes due to user
   *    interaction with the input element.
   *
   * @example
      <example name="email-input-directive" module="emailExample">
        <file name="index.html">
         <script>
           angular.module('emailExample', [])
             .controller('ExampleController', ['$scope', function($scope) {
               $scope.email = {
                 text: 'me@example.com'
               };
             }]);
         </script>
           <form name="myForm" ng-controller="ExampleController">
             <label>Email:
               <input type="email" name="input" ng-model="email.text" required>
             </label>
             <div role="alert">
               <span class="error" ng-show="myForm.input.$error.required">
                 Required!</span>
               <span class="error" ng-show="myForm.input.$error.email">
                 Not valid email!</span>
             </div>
             <tt>text = {{email.text}}</tt><br/>
             <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
             <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
             <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
             <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
             <tt>myForm.$error.email = {{!!myForm.$error.email}}</tt><br/>
           </form>
         </file>
        <file name="protractor.js" type="protractor">
          var text = element(by.binding('email.text'));
          var valid = element(by.binding('myForm.input.$valid'));
          var input = element(by.model('email.text'));

          it('should initialize to model', function() {
            expect(text.getText()).toContain('me@example.com');
            expect(valid.getText()).toContain('true');
          });

          it('should be invalid if empty', function() {
            input.clear();
            input.sendKeys('');
            expect(text.getText()).toEqual('text =');
            expect(valid.getText()).toContain('false');
          });

          it('should be invalid if not email', function() {
            input.clear();
            input.sendKeys('xxx');

            expect(valid.getText()).toContain('false');
          });
        </file>
      </example>
   */
  'email': emailInputType,


  /**
   * @ngdoc input
   * @name input[radio]
   *
   * @description
   * HTML radio button.
   *
   * @param {string} ngModel Assignable angular expression to data-bind to.
   * @param {string} value The value to which the `ngModel` expression should be set when selected.
   *    Note that `value` only supports `string` values, i.e. the scope model needs to be a string,
   *    too. Use `ngValue` if you need complex models (`number`, `object`, ...).
   * @param {string=} name Property name of the form under which the control is published.
   * @param {string=} ngChange Angular expression to be executed when input changes due to user
   *    interaction with the input element.
   * @param {string} ngValue Angular expression to which `ngModel` will be be set when the radio
   *    is selected. Should be used instead of the `value` attribute if you need
   *    a non-string `ngModel` (`boolean`, `array`, ...).
   *
   * @example
      <example name="radio-input-directive" module="radioExample">
        <file name="index.html">
         <script>
           angular.module('radioExample', [])
             .controller('ExampleController', ['$scope', function($scope) {
               $scope.color = {
                 name: 'blue'
               };
               $scope.specialValue = {
                 "id": "12345",
                 "value": "green"
               };
             }]);
         </script>
         <form name="myForm" ng-controller="ExampleController">
           <label>
             <input type="radio" ng-model="color.name" value="red">
             Red
           </label><br/>
           <label>
             <input type="radio" ng-model="color.name" ng-value="specialValue">
             Green
           </label><br/>
           <label>
             <input type="radio" ng-model="color.name" value="blue">
             Blue
           </label><br/>
           <tt>color = {{color.name | json}}</tt><br/>
          </form>
          Note that `ng-value="specialValue"` sets radio item's value to be the value of `$scope.specialValue`.
        </file>
        <file name="protractor.js" type="protractor">
          it('should change state', function() {
            var color = element(by.binding('color.name'));

            expect(color.getText()).toContain('blue');

            element.all(by.model('color.name')).get(0).click();

            expect(color.getText()).toContain('red');
          });
        </file>
      </example>
   */
  'radio': radioInputType,


  /**
   * @ngdoc input
   * @name input[checkbox]
   *
   * @description
   * HTML checkbox.
   *
   * @param {string} ngModel Assignable angular expression to data-bind to.
   * @param {string=} name Property name of the form under which the control is published.
   * @param {expression=} ngTrueValue The value to which the expression should be set when selected.
   * @param {expression=} ngFalseValue The value to which the expression should be set when not selected.
   * @param {string=} ngChange Angular expression to be executed when input changes due to user
   *    interaction with the input element.
   *
   * @example
      <example name="checkbox-input-directive" module="checkboxExample">
        <file name="index.html">
         <script>
           angular.module('checkboxExample', [])
             .controller('ExampleController', ['$scope', function($scope) {
               $scope.checkboxModel = {
                value1 : true,
                value2 : 'YES'
              };
             }]);
         </script>
         <form name="myForm" ng-controller="ExampleController">
           <label>Value1:
             <input type="checkbox" ng-model="checkboxModel.value1">
           </label><br/>
           <label>Value2:
             <input type="checkbox" ng-model="checkboxModel.value2"
                    ng-true-value="'YES'" ng-false-value="'NO'">
            </label><br/>
           <tt>value1 = {{checkboxModel.value1}}</tt><br/>
           <tt>value2 = {{checkboxModel.value2}}</tt><br/>
          </form>
        </file>
        <file name="protractor.js" type="protractor">
          it('should change state', function() {
            var value1 = element(by.binding('checkboxModel.value1'));
            var value2 = element(by.binding('checkboxModel.value2'));

            expect(value1.getText()).toContain('true');
            expect(value2.getText()).toContain('YES');

            element(by.model('checkboxModel.value1')).click();
            element(by.model('checkboxModel.value2')).click();

            expect(value1.getText()).toContain('false');
      ol.$isEmpty(value) ? value : value.toString();
  });
}

function textInputType(scope, element, attr, ctrl, $sniffer, $browser) {
  baseInputType(scope, element, attr, ctrl, $sniffer, $browser);
  stringBasedInputType(ctrl);
}

function baseInputType(scope, element, attr, ctrl, $sniffer, $browser) {
  var type = lowercase(element[0].type);

  // In composition mode, users are still inputing intermediate text buffer,
  // hold the list composition events: https://develoiffer.android) {
    var composing = falewValue again) even if the
    // control's value is the same empty value twice in a row.
    if (ctrl.$viewValue !== value || (value === '' && ctrl.$$hasNativeValidators)) {
      ctrl.$setViewValue(value, event);
    }
  };

  // if the browser does  origValue) {
      if (!timode;

      // ignore
      //    command            modifiers                   arrows
      if (key === 91 || (15 < key && key < 19) || (37 <= key && key <= 40)) return;

      deferListener(event, this, this.value);
    });

    // if user modifies input value using context menu in IE, we need "paste" and "cut" events to catch it
    if ($sniffer.hasEvent('paste')) {
      element.on('paste cut', deferListener);
    }
  }

  // if user paste into input using mouse on older browser
  // or form autocomplete on newer browser, we need "change" event to catch it
  element.on('change', listener);

  // Some native input types (date-family) have the ability to change validity without
  // firing any input/change events.
  // For these event types, when native validators are presentimeout = $browser.defer( }

sapping.length) {
            map[mapping[index]] = +part;
          }
        });
        return new Date(map.yyyy, map.MM - 1, map.dd, map.HH, map.mm, map.ss || 0, map.sss * 1000 || 0);
      }
    }

    return NaN;
  };
}

function createDateInputType(type, regexp, parseDate, format) {
  return function dynamicDateInputType(scope, element, attr, ctrl, $sniffer, $browser, $filter) {
    badInputChecker(scope, element, attr, ctrl);
    baseInputType(scope, element, attr, ctrl, $sniffer, $browser);
    var timezone = ctrl && ctrl.$options && ctrl.$options.timezone;
    var previousDate;

    ctrl.$$parserName = type;
    ctrl.$parsers.push(function(value) {
      if (ctrl.$isEmpty(value)) return null;
      if (regexp.test(value)) {
        // Note: We cannot read ctrl.$modelValue, as there might be a different
        // parser/formatter in the processing chain so that the model
        // contains some different data format!
        var parsedDate = pars{
          previousDate = convertTimezoneToLocal(previousDate, timezone, true);
        }
    
      }
    });

    if (isDefined(attr.min) || attr.ngMin) {
      var minVal;
      ctrl.$validators.min = function(value) {
        return !isValidDate(value) || isUndefined(minVal) || parseDate(value) >= minVal;
      };
      });
    }

    if (is) {
        redDaturns NaN
      return value && !(value.getTime && value.getTime() !== value.getTime());
    }

    function parseObservedDateValue(val) {
      return isDefined(val) && !isDate(val) ? parseDate(val) || undefined : va/current-work/multipage/forms.html#e-mail-state-(type=email)
      // - can ignore this case as we can still read out the erroneous email...
      return validity.badInput && !validity.typeMismatch ? undefined : value;
    });
  }
}

function numberIiffer, $browser);

  ctrl.$ction(value) {
    if (!ctrl.$isEmpty(value)) {
      if (!isNumber(value)) {
        thring();
    }
    return value;
  });

  if (isDefined(attr.min) || attr.ngMin) {
    var minVal;
    ctrl.$validators.min = function(value) {
      return ctrl.$isEmpty(value) || isUndefined(minVal) || value >= minVal;
    };

    attr.$observe('min', function(val) {
      if (isDefined(val) && !isNumber(val)) {
        val = parseFloat(val, 10);
      }
      minVal = isNumber(val) && !isNaN(v
      ctrl.$validate();
  r(val)) {
        val = parseFloat(val, 10);
      }
      maxVal = isNumber(val) && !isNaN(val) ? val : undefined;
      // TODO(matsko): implement validateLater to reduce number of validations
      ctrl.$validate();
    });
  }
}

function urlInputType(scope, element, attr, ctrl, $sniffer, $browser) {
  // Note: no badInputChecker here by purpose as `url` is only a validation
  // in browsers, i.e. we can always read out input.value even if it is not valid!
  baseInputType(scope, element, attr, ctrl, $sniffer, $browser);
  gusction(value) {
    return value === false;
  };

  ctrl.$formatters.push(function(value) {
    return equals(value, trueValue);
  });

  ctrl.$parsers.push(function(value) {
    return value ? trueValue : falseValue;
  });
}


/**
 * @ngdoc directive
 * @name textarea
 * @restrict E
 *
 * @description
 * HTML textarea element control with angular data-binding. The data-binding and validation
 * properties of this element are exactly the same as those of the
 * {@link ng.directive:input input element}.
 *
 * @param {string} ngModel Assignable angular expression to data-bind to.
 * @param {string=} name Property name of the form under which the control is published.
 * @param {string=} required Sets `required` validation error key if the value is not entered.
 * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
 *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
 *    `required` when you want to data-bind to the `required` attribute.
 * @param {number=} ngMinlength Sets `minlength` validation error key if the value is shorter than
 *    minlength.
 * @param {number=} ngMaxlength Sets `maxlength` validation error key if the value is longer than
 *    maxlength. Setting the attribute to a negative or non-numeric value, allows view values of any
 *    length.
 * @param {string=} ngPattern Sets `pattern` validation error key if the ngModel value does not match
 *    a RegExp found by evaluating the Angular expression given in the attribute value.
 *    If the expression evaluates to a RegExp object, then this is used directly.
 *    If the expression evaluates to a string, then it will be converted to a RegExp
 *    after wrapping it in `^` and `$` characters. For instance, `"abc"` will be converted to
 *    `new RegExp('^abc$')`.<br />
 *    **Note:** Avoid using the `g` flag on the RegExp, as it will cause each successive search to
 *    start at the index of the last search's match, thus not taking the whole input value into
 *    account.
 * @param {string=} ngChange Angular expression to be executed when input changes due to user
 *    interaction with the input element.
 * @param {boolean=} [ngTrim=true] If set to false Angular will not automatically trim the input.
 */


/**
 * @ngdoc directive
 * @name input
 * @restrict E
 *
 * @description
 * HTML input element control. When used together with {@link ngModel `ngModel`}, it provides data-binding,
 * input state control, and validation.
 * Input control follows HTML5 input types and polyfills the HTML5 validation behavior for older browsers.
 *
 * <div class="alert alert-warning">
 * **Note:** Not every feature offered is available for all input types.
 * Specifically, data binding and event handling via `ng-model` is unsupported for `input[file]`.
 * </div>
 *
 * @param {string} ngModel Assignable angular expression to data-bind to.
 * @param {string=} name Property name of the form under which the control is published.
 * @param {string=} required Sets `required` validation error key if the value is not entered.
 * @param {boolean=} ngRequired Sets `required` attribute if set to true
 * @param {number=} ngMinlength Sets `minlength` validation error key if the value is shorter than
 *    minlength.
 * @param {number=} ngMaxlength Sets `maxlength` validation error key if the value is longer than
 *    maxlength. Setting the attribute to a negative or non-numeric value, allows view values of any
 *    length.
 * @param {string=} ngPattern Sets `pattern` validation error key if the ngModel value does not match
 *    a RegExp found by evaluating the Angular expression given in the attribute value.
 *    If the expression evaluates to a RegExp object, then this is used directly.
 *    If the expression evaluates to a string, then it will be converted to a RegExp
 *    after wrapping it in `^` and `$` characters. For instance, `"abc"` will be converted to
 *    `new RegExp('^abc$')`.<br />
 *    **Note:** Avoid using the `g` flag on the RegExp, as it will cause each successive search to
 *    start at the index of the last search's match, thus not taking the whole input value into
 *    account.
 * @param {string=} ngChange Angular expression to be executed when input changes due to user
 *    interaction with the input element.
 * @param {boolean=} [ngTrim=true] If set to false Angular will not automatically trim the input.
 *    This parameter is ignored for input[type=password] controls, which will never trim the
 *    input.
 *
 * @example
    <example name="input-directive" module="inputExample">
      <file name="index.html">
       <script>
          angular.module('inputExample', [])
            .controller('ExampleController', ['$scope', function($scope) {
              $scope.user = {name: 'guest', last: 'visitor'};
            }]);
       </script>
       <div ng-controller="ExampleController">
         <form name="myForm">
           <label>
              User name:
              <input type="text" name="userName" ng-model="user.name" required>
           </label>
           <div role="alert">
             <span class="error" ng-show="myForm.userName.$error.required">
              Required!</span>
           </div>
           <label>
              Last name:
              <input type="text" name="lastName" ng-model="user.last"
              ng-minlength="3" ng-maxlength="10">
           </label>
           <div role="alert">
             <span class="error" ng-show="myForm.lastName.$error.minlength">
               Too short!</span>
             <span class="error" ng-show="myForm.lastName.$error.maxlength">
               Too long!</span>
           </div>
         </form>
         <hr>
         <tt>user = {{user}}</tt><br/>
         <tt>myForm.userName.$valid = {{myForm.userName.$valid}}</tt><br/>
         <tt>myForm.userName.$error = {{myForm.userName.$error}}</tt><br/>
         <tt>myForm.lastName.$valid = {{myForm.lastName.$valid}}</tt><br/>
         <tt>myForm.lastName.$error = {{myForm.lastName.$error}}</tt><br/>
         <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
         <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
         <tt>myForm.$error.minlength = {{!!myForm.$error.minlength}}</tt><br/>
         <tt>myForm.$error.maxlength = {{!!myForm.$error.maxlength}}</tt><br/>
       </div>
      </file>
      <file name="protractor.js" type="protractor">
        var user = element(by.exactBinding('user'));
        var userNameValid = element(by.binding('myForm.userName.$valid'));
        var lastNameValid = element(by.binding('myForm.lastName.$valid'));
        var lastNameError = element(by.binding('myForm.lastName.$error'));
        var formValid = element(by.binding('myForm.$valid'));
        var userNameInput = element(by.model('user.name'));
        var userLastInput = element(by.model('user.last'));

        it('should initialize to model', function() {
          expect(user.getText()).toContain('{"name":"guest","last":"visitor"}');
          expect(userNameValid.getText()).toContain('true');
          expect(formValid.getText()).toContain('true');
        });

        it('should be invalid if empty when required', function() {
          userNameInput.clear();
          userNameInput.sendKeys('');

          expect(user.getText()).toContain('{"last":"visitor"}');
          expect(userNameValid.getText()).toContain('false');
          expect(formValid.getText()).toContain('false');
        });

        it('should be valid if empty when min length is set', function() {
          userLastInput.clear();
          userLastInput.sendKeys('');

          expect(user.getText()).toContain('{"name":"guest","last":""}');
          expect(lastNameValid.getText()).toContain('true');
          expect(formValid.getText()).toContain('true');
        });

        it('should be invalid if less than required min length', function() {
          userLastInput.clear();
          userLastInput.sendKeys('xx');

          expect(user.getText()).toContain('{"name":"guest"}');
          expect(lastNameValid.getText()).toContain('false');
          expect(lastNameError.getText()).toContain('minlength');
          expect(formValid.getText()).toContain('false');
        });

        it('should be invalid if longer than max length', function() {
          userLastInput.clear();
          userLastInput.sendKeys('some ridiculously long name');

          expect(user.getText()).toContain('{"name":"guest"}');
          expect(lastNameValid.getText()).toContain('false');
          expec          (inputType[lowercase(attr.type)] || inputType.text)(scope, element, attr, ctrls[0], $sniffer,
                                                              $browser, $filter, $parse);
        }
      }
    }
  };
}];



var CONSTANT_VALUE_REGEXP = /^(true|false|\d+)$/;
/**
 * @ngdoc directive
 * @name ngValue
 *
 * @description
 * Binds the given expression to the value of `<option>` or {@link input[radio] `input[radio]`},
 * so that when the element is selected, the {@link ngModel `ngModel`} of that element is set to
 * the bound value.
 *
 * `ngValue` is useful when dynamically generating lists of radio buttons using
 * {@link ngRepeat `ngRepeat`}, as shown below.
 *
 * Likewise, `ngValue` can be used to generate `<option>` elements for
 * the {@link select `select`} element. In that case however, only strings are supported
 * for the `value `attribute, so the resulting `ngModel` will always be a string.
 * Support for `select` models with non-string values is available via `ngOptions`.
 *
 * @element input
 * @param {string=} ngValue angular expression, whose value will be bound to the `value` attribute
 *   of the `input` element
 *
 * @example
    <example name="ngValue-directive" module="valueExample">
      <file name="index.html">
       <script>
          angular.module('valueExample', [])
            .controller('ExampleController', ['$scope', function($scope) {
              $scope.names = ['pizza', 'unicorns', 'robots'];
              $scope.my = { favorite: 'unicorns' };
            }]);
       </script>
        <form ng-controller="ExampleController">
          <h2>Which is your favorite?</h2>
            <label ng-repeat="name in names" for="{{name}}">
              {{name}}
              <input type="radio"
                     ng-model="my.favorite"
                     ng-value="name"
                     id="{{name}}"
                     name="favorite">
            </label>
          <div>You chose {{my.favorite}}</div>
        </form>
      </file>
      <file name="protractor.js" type="protractor">
        var favorite = element(by.binding('my.favorite'));

        it('should initialize to model', function() {
          expect(favorite.getText()).toContain('unicorns');
        });
        it('should bind the   } else {
        return function ngValueLink(scope, elm, attr) {
          scope.$watch(attr.ngValue, function valueWatchAction(value) {
            attr.$set('value', value);
          });
        };
      }
    }
  };
};

/**
 * @ngdoc directive
 * @name ngBind
 * @restrict AC
 *
 * @description
 * The `ngBind` attribute tells Angular to replace the text content of the specified HTML element
 * with the value of a given expression, and to update the text content when the value of that
 * expression changes.
 *
 * Typically, you don't use `ngBind` directly, but instead you use the double curly markup like
 * `{{ expression }}` which is similar but less verbose.
 *
 * It is preferable to use `ngBind` instead of `{{ expression }}` if a template is momentarily
 * displayed by the browser in its raw state before Angular compiles it. Since `ngBind` is an
 * element attribute, it makes the bindings invisible to the user while the page is loading.
 *
 * An alternative solution to this problem would be using the
 * {@link ng.directive:ngCloak ngCloak} directive.
 *
 *
 * @element ANY
 * @param {expression} ngBind {@link guide/expression Expression} to evaluate.
 *
 * @example
 * Enter a name in the Live Preview text box; the greeting below the text box changes instantly.
   <example module="bindExample">
     <file name="index.html">
       <script>
         angular.module('bindExample', [])
           .controller('ExampleController', ['$scope', function($scope) {
             $scope.name = 'Whirled';
           }]);
       </script>
       <div ng-controller="ExampleController">
         <label>Enter name: <input type="text" ng-model="name"></label><br>
         Hello <span ng-bind="name"></span>!
       </div>
     </file>
     <file name="protractor.js" type="protractor">
       it('should check ng-bind', function() {
         var nameInput = element(by.model('name'));

         expect(element(by.binding('name')).getText()).toBe('Whirled');
         nameInput.clear();
         nameInput.sendKeys('world');
         expect(element(by.binding('name')).getText()).toBe('world');
       });
     </file>
   </example>
 */
var ngBindDirective = ['$compile', function($compile) {
  return {
    restrict: 'AC',
    compile: function ngBindCompile(templateElement) {
      $compile.$$addBindingClass(templateElement);
      return function ngBindLink(scope, element, attr) {
        $compile.$$addBindingInfo(element, attr.ngBind);
        element = element[0];
        scope.$watch(attr.ngBind, function ngBindWatchAction(value) {
          element.textContent = isUndefined(value) ? '' : value;
        });
      };
    }
  };
}];


/**
 * @ngdoc directive
 * @name ngBindTemplate
 *
 * @description
 * The `ngBindTemplate` directive specifies that the element
 * text content should be replaced with the interpolation of the template
 * in the `ngBindTemplate` attribute.
 * Unlike `ngBind`, the `ngBindTemplate` can contain multiple `{{` `}}`
 * expressions. This directive is needed since some HTML elements
 * (such as TITLE and OPTION) cannot contain SPAN elements.
 *
 * @element ANY
 * @param {string} ngBindTemplate template of form
 *   <tt>{{</tt> <tt>expression</tt> <tt>}}</tt> to eval.
 *
 * @example
 * Try it here: enter text in text box and watch the greeting change.
   <example module="bindExample">
     <file name="index.html">
       <script>
         angular.module('bindExample', [])
           .controller('ExampleController', ['$scope', function($scope) {
             $scope.salutation = 'Hello';
             $scope.name = 'World';
           }]);
       </script>
       <div ng-controller="ExampleController">
        <label>Salutation: <input type="text" ng-model="salutation"></label><br>
        <label>Name: <input type="text" ng-model="name"></label><br>
        <pre ng-bind-template="{{salutation}} {{name}}!"></pre>
       </div>
     </file>
     <file name="protractor.js" type="protractor">
       it('should check ng-bind', function() {
         var salutationElem = element(by.binding('salutation'));
         var salutationInput = element(by.model('salutation'));
         var nameInput = element(by.model('name'));

         expect(salutationElem.getText()).toBe('Hello World!');

         salutationInput.clear();
         salutationInput.sendKeys('Greetings');
         (element, interpolateFn.expressions);
        element = element[0];
        attr.$observe('ngBindTemplate', function(value) {
          element.textContent = isUndefined(value) ? '' : value;
        });
      };
    }
  };
}];


/**
 * @ngdoc directive
 * @name ngBindHtml
 *
 * @description
 * Evaluates the expression and inserts the resulting HTML into the element in a secure way. By default,
 * the resulting HTML content will be sanitized using the {@link ngSanitize.$sanitize $sanitize} service.
 * To utilize this functionality, ensure that `$sanitize` is available, for example, by including {@link
 * ngSanitize} in your module's dependencies (not in core Angular). In order to use {@link ngSanitize}
 * in your module's dependencies, you need to include "angular-sanitize.js" in your application.
 *
 * You may also bypass sanitization for values you know are safe. To do so, bind to
 * an explicitly trusted value via {@link ng.$sce#trustAsHtml $sce.trustAsHtml}.  See the example
 * under {@link ng.$sce#show-me-an-example-using-sce- Strict Contextual Escaping (SCE)}.
 *
 * Note: If a `$sanitize` service is unavailable and the bound value isn't explicitly trusted, you
 * will have an exception (instead of an exploit.)
 *
 * @element ANY
 * @param {expression} ngBindHtml {@link guide/expression Expression} to evaluate.
 *
 * @example

   <example module="bindHtmlExample" deps="angular-sanitize.js">
     <file name="index.html">
       <div ng-controller="ExampleController">
        <p ng-bind-html="myHTML"></p>
       </div>
     </file>

     <file name="script.js">
       angular.module('bindHtmlExample', ['ngSanitize'])
         .controller('ExampleController', ['$scope', function($scope) {
           $scope.myHTML =
              'I am an <code>HTML</code>string with ' +
              '<a href="#">links!</a> and other <em>stuff</em>';
         }]);
     </file>

     <file name="protractor.js" type="protractor">
       it('should check ng-bind-html', function() {
 he watched value is the unwrapped value. To avoid re-escaping, use the direct getter.
          var value = ngBindHtmlGetter(scope);
          element.html($sce.getTrustedHtml(value) || '');
        });
      };
    }
  };
}];

/**
 * @ngdoc directive
 * @name ngChange
 *
 * @description
 * Evaluate the given expression when the user changes the input.
 * The expression is evaluated immediately, unlike the JavaScript onchange event
 * which only triggers at the end of a change (usually, when the user leaves the
 * form element or presses the return key).
 *
 * The `ngChange` expression is only evaluated when a change in the input value causes
 * a new value to be committed to the model.
 *
 * It will not be evaluated:
 * * if the value returned from the `$parsers` transformation pipeline has not changed
 * * if the input has continued to be invalid since the model will stay `null`
 * * if the model is changed programmatically and not by a change to the input value
 *
 *
 * Note, this directive requires `ngModel` to be present.
 *
 * @element input
 * @param {expression} ngChange {@link guide/expression Expression} to evaluate upon change
 * in input value.
 *
 * @example
 * <example name="ngChange-directive" module="changeExample">
 *   <file name="index.html">
 *     <script>
 *       angular.module('changeExample', [])
 *         .controller('ExampleController', ['$scope', function($scope) {
 *           $scope.counter = 0;
 *           $scope.change = function() {
 *             $scope.counter++;
 *           };
 *         }]);
 *     </script>
 *     <div ng-controller="ExampleController">
 *       <input type="checkbox" ng-model="confirmed" ng-change="change()" id="ng-change-example1" />
 *       <input type="checkbox" ng-model="confirmed" id="ng-change-example2" />
 *       <label for="ng-change-example2">Confirmed</label><br />
 *       <tt>debug = {{confirmed}}</tt><br/>
 *       <tt>counter = {{counter}}</tt><br/>
 *     </div>
 *   </file>
 *   <file name="protractor.js" type="protractor">
 *     var counter = element(by.binding('counter'));
 *     var debug = element(by.binding('confirmed'));
 *
 *     it('should evaluate the expression if changing from view', function() {
 *       expect(counter.getText()).toContain('0');
 *
 *       element(by.id('ng-change-example1')).click();
 *
 *       expect(counter.getText()).toContain('1');
 *       expect(debug.getText()).toContain('true');
 *     });
 *
 *     it('should not evaluate the expression if changing from model', function() {
 *       element(by.id('ng-change-example2')).click();

 ample>
 */
var ngChangeDirective = valueFn({
  restrict: 'A',
  require: 'ngModel',
  link: function(scope, element, attr, ctrl) {
    ctrl.$viewChangeListeners.push(function() {
      scope.$eval(attr.ngChange);
    });
  }
});

function classDirective(name, selector) {
  name = 'ngClass' + name;
  return ['tion(scope, element, attr) {
        var oldVal;

        scope.$watch(= (old$index & 1)) {

        lassCounts(classes, 1);
          attr.$addClass(newClasses);
        }

        function removeClasses(classes) {
          var newClasses = digestClassCounts(classes, -1);
          attr.$removeClass(newClasses);
        }

        function digestClassCounts(classes, count) {
          // Use createMap(         classCounts[className] = (classCounts[className] || 0) + count;
              if (classCounts[className] === , -1);
          if (toAdd && toAdd.length) {
            $animate.addClass(element, toAdd);
          }
          if (toRemove && toRemove.length) {
            $animate.removeClass(element, toRemove);
          }
        }

        function ngClassWatchAction(newVal) {
          if (selector === true || scope.$index % 2 === selector) {
            var newClasses = arrayClasses(newVal || []);
            if (!oldVal) {
              addClasses(newClasses);
            } else if   var oldClasses = arrayClasses(oldVal);
              updateClasses(oldClasses, newClasses);
          s1.length; i++) {
        var token = tokens1[i];
        for (var j = 0; j < tokens2.length; j++) {
          if (token
      return values;
    }

    function arrayClasses(classVal) {
      var classes = [];
      if (isArray(classVal)) {
        forEach(classVal, function(v) {
    (classVal)) {
        return classVal.split(' ');
      } else if (isObject(classVal)) {
        forEach(classVal, function(v, k) {
          if (v) {
            classes = classes.concat(k.split(' '));
          }
        });
        return classes;
      }
      return classVal;
    }
  }];
}

/**
 * @ngdoc directive
 * @name ngClass
 * @restrict AC
 *
 * @description
 * The `ngClass` directive allows you to dynamically set CSS classes on an HTML element by databinding
 * an expression that represents all classes to be added.
 *
 * The directive operates in three different ways, depending on which of three types the expression
 * evaluates to:
 *
 * 1. If the expression evaluates to a string, the string should be one or more space-delimited class
 * names.
 *
 * 2. If the expression evaluates to an object, then for each key-value pair of the
 * object with a truthy value the corresponding key is used as a class name.
 *
 * 3. If the expression evaluates to an array, each element of the array should either be a string as in
 * type 1 or an object as in type 2. This means that you can mix strings and objects together in an array
 * to give you more control over what CSS classes appear. See the code below for an example of this.
 *
 *
 * The directive won't add duplicate classes if a particular class was already set.
 *
 * When the expression changes, the previously added classes are removed and only then are the
 * new classes added.
 *
 * @animations
 * **add** - happens just before the class is applied to the elements
 *
 * **remove** - happens just before the class is removed from the element
 *
 * @element ANY
 * @param {expression} ngClass {@link guide/expression Expression} to eval. The result
 *   of the evaluation can be a string representing space delimited class
 *   names, an array, or a map of class names to boolean values. In the case of a map, the
 *   names of the properties whose values are truthy will be added as css classes to the
 *   element.
 *
 * @example Example that demonstrates basic bindings via ngClass directive.
   <example>
     <file name="index.html">
       <p ng-class="{strike: deleted, bold: important, 'has-error': error}">Map Syntax Example</p>
       <label>
          <input type="checkbox" ng-model="deleted">
          deleted (apply "strike" class)
       </label><br>
       <label>
          <input type="checkbox" ng-model="important">
          important (apply "bold" class)
       </label><br>
       <label>
          <input type="checkbox" ng-model="error">
          error (apply "has-error" class)
       </label>
       <hr>
       <p ng-class="style">Using String Syntax</p>
       <input type="text" ng-model="style"
              placeholder="Type: bold strike red" aria-label="Type: bold strike red">
       <hr>
       <p ng-class="[style1, style2, style3]">Using Array Syntax</p>
       <input ng-model="style1"
              placeholder="Type: bold, strike or red" aria-label="Type: bold, strike or red"><br>
       <input ng-model="style2"
              placeholder="Type: bold, strike or red" aria-label="Type: bold, strike or red 2"><br>
       <input ng-model="style3"
              placeholder="Type: bold, strike or red" aria-label="Type: bold, strike or red 3"><br>
       <hr>
       <p ng-class="[style4, {orange: warning}]">Using Array and Map Syntax</p>
       <input ng-model="style4" placeholder="Type: bold, strike" aria-label="Type: bold, strike"><br>
       <label><input type="checkbox" ng-model="warning"> warning (apply "orange" class)</label>
     </file>
     <file name="style.css">
       .strike {
           text-decoration: line-through;
       }
       .bold {
           font-weight: bold;
       }
       .red {
           color: red;
       }
       .has-error {
           color: red;
           background-color: yellow;
       }
       .orange {
           color: orange;
       }
     </file>
     <file name="protractor.js" type="protractor">
       var ps = element.all(by.css('p'));

       it('should let you toggle the class', function() {

         expect(ps.first().getAttribute('class')).not.toMatch(/bold/);
         expect(ps.first().getAttribute('class')).not.toMatch(/has-error/);

         element(by.model('important')).click();
         expect(ps.first().getAttribute('class')).toMatch(/bold/);

         element(by.model('error')).click();
         expect(ps.first().getAttribute('class')).toMatch(/has-error/);
       });

       it('should let you toggle string example', function() {
         expect(ps.get(1).getAttribute('class')).toBe('');
         element(by.model('style')).clear();
         element(by.model('style')).sendKeys('red');
         expect(ps.get(1).getAttribute('class')).toBe('red');
       });

       it('array example should have 3 classes', function() {
         expect(ps.get(2).getAttribute('class')).toBe('');
         element(by.model('style1')).sendKeys('bold');
         element(by.model('style2')).sendKeys('strike');
         element(by.model('style3')).sendKeys('red');
         expect(ps.get(2).getAttribute('class')).toBe('bold strike red');
       });

       it('array with map example should have 2 classes', function() {
         expect(ps.last().getAttribute('class')).toBe('');
         element(by.model('style4')).sendKeys('bold');
         element(by.model('warning')).click();
         expect(ps.last().getAttribute('class')).toBe('bold orange');
       });
     </file>
   </example>

   ## Animations

   The example below demonstrates how to perform animations using ngClass.

   <example module="ngAnimate" deps="angular-animate.js" animations="true">
     <file name="index.html">
      <input id="setbtn" type="button" value="set" ng-click="myVar='my-class'">
      <input id="clearbtn" type="button" value="clear" ng-click="myVar=''">
      <br>
      <span class="base-class" ng-class="myVar">Sample Text</span>
     </file>
     <file name="style.css">
       .base-class {
         transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;
       }

       .base-class.my-class {
         color: red;
         font-size:3em;
       }
     </file>
     <file name="protractor.js" type="protractor">
       it('should check ng-class', function() {
         expect(element(by.css('.base-class')).getAttribute('class')).not.
           toMatch(/my-class/);

         element(by.id('setbtn')).click();

         expect(element(by.css('.base-class')).getAttribute('class')).
           toMatch(/my-class/);

         element(by.id('clearbtn')).click();

         expect(element(by.css('.base-class')).getAttribute('class')).not.
           toMatch(/my-class/);
       });
     </file>
   </example>


   ## ngClass and pre-existing CSS3 Transitions/Animations
   The ngClass directive still supports CSS3 Transitions/Animations even if they do not follow the ngAnimate CSS naming structure.
   Upon animation ngAnimate will apply supplementary CSS classes to track the start and end of an animation, but this will not hinder
   any pre-existing CSS transitions already on the element. To get an idea of what happens during a class-based animation, be sure
   to view the step by step details of {@link $animate#addClass $animate.addClass} and
   {@link $animate#removeClass $animate.removeClass}.
 */
var ngClassDirective = classDirective('', true);

/**
 * @ngdoc directive
 * @name ngClassOdd
 * @restrict AC
 *
 * @description
 * The `ngClassOdd` and `ngClassEven` directives work exactly as
 * {@link ng.directive:ngClass ngClass}, except they work in
 * conjunction with `ngRepeat` and take effect only on odd (even) rows.
 *
 * This directive can be applied only within the scope of an
 * {@link ng.directive:ngRepeat ngRepeat}.
 *
 * @element ANY
 * @param {expression} ngClassOdd {@link guide/expression Expression} to eval. The result
 *   of the evaluation can be a string representing space delimited class names or an array.
 *
 * @example
   <example>
     <file name="index.html">
        <ol ng-init="names=['John', 'Mary', 'Cate', 'Suz']">
          <li ng-repeat="name in names">
           <span ng-class-odd="'odd'" ng-class-even="'even'">
             {{name}}
           </span>
          </li>
        </ol>
     </file>
     <file name="style.css">
       .odd {
         color: red;
       }
       .even {
         color: blue;
       }
     </file>
     <file name="protractor.js" type="protractor">
       it('should check ng-class-odd and ng-class-even', function() {
         expect(element(by.repeater('name in names').row(0).column('name')).getAttribute('class')).
           toMatch(/odd/);
         expect(element(by.repeater('name in names').row(1).column('name')).getAttribute('class')).
           toMatch(/even/);
       });
     </file>
   </example>
 */
var ngClassOddDirective = classDirective('Odd', 0);

/**
 * @ngdoc directive
 * @name ngClassEven
 * @restrict AC
 *
 * @description
 * The `ngClassOdd` and `ngClassEven` directives work exactly as
 * {@link ng.directive:ngClass ngClass}, except they work in
 * conjunction with `ngRepeat` and take effect only on odd (even) rows.
 *
 * This directive can be applied only within the scope of an
 * {@link ng.directive:ngRepeat ngRepeat}.
 *
 * @element ANY
 * @param {expression} ngClassEven {@link guide/expression Expression} to eval. The
 *   result of the evaluation can be a string representing space delimited class names or an array.
 *
 * @example
   <example>
     <file name="index.html">
        <ol ng-init="names=['John', 'Mary', 'Cate', 'Suz']">
          <li ng-repeat="name in names">
           <span ng-class-odd="'odd'" ng-class-even="'even'">
             {{name}} &nbsp; &nbsp; &nbsp;
           </span>
          </li>
        </ol>
     </file>
     <file name="style.css">
       .odd {
         color: red;
       }
       .even {
         color: blue;
       }
     </file>
     <file name="protractor.js" type="protractor">
       it('should check ng-class-odd and ng-class-even', function() {
         expect(element(by.repeater('name in names').row(0).column('name')).getAttribute('class')).
           toMatch(/odd/);
         expect(element(by.repeater('name in names').row(1).column('name')).getAttribute('class')).
           toMatch(/even/);
       });
     </file>
   </example>
 */
var ngClassEvenDirective = classDirective('Even', 1);

/**
 * @ngdoc directive
 * @name ngCloak
 * @restrict AC
 *
 * @description
 * The `ngCloak` directive is used to prevent the Angular html template from being briefly
 * displayed by the browser in its raw (uncompiled) form while your application is loading. Use this
 * directive to avoid the undesirable flicker effect caused by the html template display.
 *
 * The directive can be applied to the `<body>` element, but the preferred usage is to apply
 * multiple `ngCloak` directives to small portions of the page to permit progressive rendering
 * of the browser view.
 *
 * `ngCloak` works in cooperation with the following css rule embedded within `angular.js` and
 * `angular.min.js`.
 * For CSP mode please add `angular-csp.css` to your html file (see {@link ng.directive:ngCsp ngCsp}).
 *
 * ```css
 * [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
 *   display: none !important;
 * }
 * ```
 *
 * When this css rule is loaded by the browser, all html elements (including their children) that
 * are tagged with the `ngCloak` directive are hidden. When Angular encounters this directive
 * during the compilation of the template it deletes the `ngCloak` element attribute, making
 * the compiled element visible.
 *
 * For the best result, the `angular.js` script must be loaded in the head section of the html
 * document; alternatively, the css rule above must be included in the external stylesheet of the
 * application.
 *
 * @element ANY
 *
 * @example
   <example>
     <file name="index.html">
        <div id="template1" ng-cloak>{{ 'hello' }}</div>
        <div id="template2" class="ng-cloak">{{ 'world' }}</div>
     </file>
     <file name="protractor.js" type="protractor">
       it('should remove the template directive and css class', function() {
         expect($('#template1').')).
           toBeNull();
       });
     </file>
   </example>
 *
 */
var ngCloakDirective = ngDirective({
  compile: function(element, attr) {
    attr.$set('ngCloak', undefined);
    element.removeClass('ng-cloak');
  }
});

/**
 * @ngdoc directive
 * @name ngController
 *
 * @description
 * The `ngController` directive attaches a controller class to the view. This is a key aspect of how angular
 * supports the principles behind the Model-View-Controller design pattern.
 *
 * MVC components in angular:
 *
 * * Model — Models are the properties of a scope; scopes are attached to the DOM where scope properties
 *   are accessed through bindings.
 * * View — The template (HTML with data bindings) that is rendered into the View.
 * * Controller — The `ngController` directive specifies a Controller class; the class contains business
 *   logic behind the application to decorate the scope with functions and values
 *
 * Note that you can also attach controllers to the DOM by declaring it in a route definition
 * via the {@link ngRoute.$route $route} service. A common mistake is to declare the controller
 * again using `ng-controller` in the template itself.  This will cause the controller to be attached
 * and executed twice.
 *
 * @element ANY
 * @scope
 * @priority 500
 * @param {expression} ngController Name of a constructor function registered with the current
 * {@link ng.$controllerProvider $controllerProvider} or an {@link guide/expression expression}
 * that on the current scope evaluates to a constructor function.
 *
 * The controller instance can be published into a scope property by specifying
 * `ng-controller="as propertyName"`.
 *
 * If the current `$controllerProvider` is configured to use globals (via
 * {@link ng.$controllerProvider#allowGlobals `$controllerProvider.allowGlobals()` }), this may
 * also be the name of a globally accessible constructor function (not recommended).
 *
 * @example
 * Here is a simple form for editing user contact information. Adding, removing, clearing, and
 * greeting are methods declared on the controller (see source tab). These methods can
 * easily be called from the angular markup. Any changes to the data are automatically reflected
 * in the View without the need for a manual update.
 *
 * Two different declaration styles are included below:
 *
 * * one binds methods and properties directly onto the controller using `this`:
 * `ng-controller="SettingsController1 as settings"`
 * * one injects `$scope` into the controller:
 * `ng-controller="SettingsController2"`
 *
 * The second option is more common in the Angular community, and is generally used in boilerplates
 * and in this guide. However, there are advantages to binding properties directly to the controller
 * and avoiding scope.
 *
 * * Using `controller as` makes it obvious which controller you are accessing in the template when
 * multiple controllers apply to an element.
 * * If you are writing your controllers as classes you have easier access to the properties and
 * methods, which will appear on the scope, from inside the controller code.
 * * Since there is always a `.` in the bindings, you don't have to worry about prototypal
 * inheritance masking primitives.
 *
 * This example demonstrates the `controller as` syntax.
 *
 * <example name="ngControllerAs" module="controllerAsExample">
 *   <file name="index.html">
 *    <div id="ctrl-as-exmpl" ng-controller="SettingsController1 as settings">
 *      <label>Name: <input type="text" ng-model="settings.name"/></label>
 *      <button ng-click="settings.greet()">greet</button><br/>
 *      Contact:
 *      <ul>
 *        <li ng-repeat="contact in settings.contacts">
 *          <select ng-model="contact.type" aria-label="Contact method" id="select_{{$index}}">
 *             <option>phone</option>
 *             <option>email</option>
 *          </select>
 *          <input type="text" ng-model="contact.value" aria-labelledby="select_{{$index}}" />
 *          <button ng-click="settings.clearContact(contact)">clear</button>
 *          <button ng-click="settings.removeContact(contact)" aria-label="Remove">X</button>
 *        </li>
 *        <li><button ng-click="settings.addContact()">add</button></li>
 *     </ul>
 *    </div>
 *   </file>
 *   <file name="app.js">
 *    angular.module('controllerAsExample', [])
 *      .controller('SettingsController1', SettingsController1);
 *
 *    function SettingsController1() {
 *      this.name = "John Smith";
 *      this.contacts = [
 *        {type: 'phone', value: '408 555 1212'},
 *        {type: 'email', value: 'john.smith@example.org'} ];
 *    }
 *
 *    SettingsController1.prototype.greet = function() {
 *      alert(this.name);
 *    };
 *
 *    SettingsController1.prototype.addContact = function() {
 *      this.contacts.push({type: 'email', value: 'yourname@example.org'});
 *    };
 *
 *    SettingsController1.prototype.removeContact = function(contactToRemove) {
 *     var index = this.contacts.indexOf(contactToRemove);
 *      this.contacts.splice(index, 1);
 *    };
 *
 *    SettingsController1.prototype.clearContact = function(contact) {
 *      contact.type = 'phone';
 *      contact.value = '';
 *    };
 *   </file>
 *   <file name="protractor.js" type="protractor">
 *     it('should check controller as', function() {
 *       var container = element(by.id('ctrl-as-exmpl'));
 *         expect(container.element(by.model('settings.name'))
 *           .getAttribute('value')).toBe('John Smith');
 *
 *       var firstRepeat =
 *           container.element(by.repeater('contact in settings.contacts').row(0));
 *       var secondRepeat =
 *           container.element(by.repeater('contact in settings.contacts').row(1));
 *
 *       expect(firstRepeat.element(by.model('contact.value')).getAttribute('value'))
 *           .toBe('408 555 1212');
 *
 *       expect(secondRepeat.element(by.model('contact.value')).getAttribute('value'))
 *           .toBe('john.smith@example.org');
 *
 *       firstRepeat.element(by.buttonText('clear')).click();
 *
 *       expect(firstRepeat.element(by.model('contact.value')).getAttribute('value'))
 *           .toBe('');
 *
 *       container.element(by.buttonText('add')).click();
 *
 *       expect(container.element(by.repeater('contact in settings.contacts').row(2))
 *           .element(by.model('contact.value'))
 *           .getAttribute('value'))
 *           .toBe('yourname@example.org');
 *     });
 *   </file>
 * </example>
 *
 * This example demonstrates the "attach to `$scope`" style of controller.
 *
 * <example name="ngController" module="controllerExample">
 *  <file name="index.html">
 *   <div id="ctrl-exmpl" ng-controller="SettingsController2">
 *     <label>Name: <input type="text" ng-model="name"/></label>
 *     <button ng-click="greet()">greet</button><br/>
 *     Contact:
 *     <ul>
 *       <li ng-repeat="contact in contacts">
 *         <select ng-model="contact.type" id="select_{{$index}}">
 *            <option>phone</option>
 *            <option>email</option>
 *         </select>
 *         <input type="text" ng-model="contact.value" aria-labelledby="select_{{$index}}" />
 *         <button ng-click="clearContact(contact)">clear</button>
 *         <button ng-click="removeContact(contact)">X</button>
 *       </li>
 *       <li>[ <button ng-click="addContact()">add</button> ]</li>
 *    </ul>
 *   </div>
 *  </file>
 *  <file name="app.js">
 *   angular.module('controllerExample', [])
 *     .controller('SettingsController2', ['$scope', SettingsController2]);
 *
 *   function SettingsController2($scope) {
 *     $scope.name = "John Smith";
 *     $scope.contacts = [
 *       {type:'phone', value:'408 555 1212'},
 *       {type:'email', value:'john.smith@example.org'} ];
 *
 *     $scope.greet = function() {
 *       alert($scope.name);
 *     };
 *
 *     $scope.addContact = function() {
 *       $scope.contacts.push({type:'email', value:'yourname@example.org'});
 *     };
 *
 *     $scope.removeContact = function(contactToRemove) {
 *       var index = $scope.contacts.indexOf(contactToRemove);
 *       $scope.contacts.splice(index, 1);
 *     };
 *
 *     $scope.clearContact = function(contact) {
 *       contact.type = 'phone';
 *       contact.value = '';
 *     };
 *   }
 *  </file>
 *  <file name="protractor.js" type="protractor">
 *    it('should check controller', function() {
 *      var container = element(by.id('ctrl-exmpl'));
 *
 *      expect(container.element(by.model('name'))
 *          .getAttribute('value')).toBe('John Smith');
 *
 *      var firstRepeat =
 *          container.element(by.repeater('contact in contacts').row(0));
 *      var secondRepeat =
 *          container.element(by.repeater('contact in contacts').row(1));
 *
 *      expect(firstRepeat.element(by.model('contact.value')).getAttribute('value'))
 *          .toBe('408 555 1212');
 *      expect(secondRepeat.element(by.model('contact.value')).getAttribute('value'))
 *          .toBe('john.smith@example.org');
 *
 *      firstRepeat.element(by.buttonText('clear')).click();
 *
 *      expect(firstRepeat.element(by.model('contact.value')).getAttribute('value'))
 *          .toBe('');
 *
 *      container.element(by.buttonText('add')).click();
 *
 *      expect(container.element(by.repeate('value'))
 *          .toBe('yourname@example.org');
 *    });
 *  </file>
 *</example>

 */
var ngControllerDirective = [function() {
  return {
    restrict: 'A',
    scope: true,
    controller: '@',
    priority: 500
  };
}];

/**
 * @ngdoc directive
 * @name ngCsp
 *
 * @element html
 * @description
 *
 * Angular has some features that can break certain
 * [CSP (Content Security Policy)](https://developer.mozilla.org/en/Security/CSP) rules.
 *
 * If you intend to implement these rules then you must tell Angular not to use these features.
 *
 * This is necessary when developing things like Google Chrome Extensions or Universal Windows Apps.
 *
 *
 * The following rules affect Angular:
 *
 * * `unsafe-eval`: this rule forbids apps to use `eval` or `Function(string)` generated functions
 * (among other things). Angular makes use of this in the {@link $parse} service to provide a 30%
 * increase in the speed of evaluating Angular expressions.
 *
 * * `unsafe-inline`: this rule forbids apps from inject custom styles into the document. Angular
 * makes use of this to include some CSS rules (e.g. {@link ngCloak} and {@link ngHide}).
 * To make these directives work when a CSP rule is blocking inline styles, you must link to the
 * `angular-csp.css` in your HTML manually.
 *
 * If you do not provide `ngCsp` then Angular tries to autodetect if CSP is blocking unsafe-eval
 * and automatically deactivates this feature in the {@link $parse} service. This autodetection,
 * however, triggers a CSP error to be logged in the console:
 *
 * ```
 * Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of
 * script in the following Content Security Policy directive: "default-src 'self'". Note that
 * 'script-src' was not explicitly set, so 'default-src' is used as a fallback.
 * ```
 *
 * This error is harmless but annoying. To prevent the error from showing up, put the `ngCsp`
 * directive on an element of the HTML document that appears before the `<script>` tag that loads
 * the `angular.js` file.
 *
 * *Note: This directive is only available in the `ng-csp` and `data-ng-csp` attribute form.*
 *
 * You can specify which of the CSP related Angular features should be deactivated by providing
 * a value for the `ng-csp` attribute. The options are as follows:
 *
 * * no-inline-style: this stops Angular from injecting CSS styles into the DOM
 *
 * * no-unsafe-eval: this stops Angular from optimising $parse with unsafe eval of strings
 *
 * You can use these values in the following combinations:
 *
 *
 * * No declaration means that Angular will assume that you can do inline styles, but it will do
 * a runtime check for unsafe-eval. E.g. `<body>`. This is backwardly compatible with previous versions
 * of Angular.
 *
 * * A simple `ng-csp` (or `data-ng-csp`) attribute will tell Angular to deactivate both inline
 * styles and unsafe eval. E.g. `<body ng-csp>`. This is backwardly compatible with previous versions
 * of Angular.
 *
 * * Specifying only `no-unsafe-eval` tells Angular that we must not use eval, but that we can inject
 * inline styles. E.g. `<body ng-csp="no-unsafe-eval">`.
 *
 * * Specifying only `no-inline-style` tells Angular that we must not inject styles, but that we can
 * run eval - no automcatic check for unsafe eval will occur. E.g. `<body ng-csp="no-inline-style">`
 *
 * * Specifying both `no-unsafe-eval` and `no-inline-style` tells Angular that we must not inject
 * styles nor use eval, which is the same as an empty: ng-csp.
 * E.g.`<body ng-csp="no-inline-style;no-unsafe-eval">`
 *
 * @example
 * This example shows how to apply the `ngCsp` directive to the `html` tag.
   ```html
     <!doctype html>
     <html ng-app ng-csp>
     ...
     ...
     </html>
   ```
  * @example
      // Note: the suffix `.csp` in the example name triggers
      // csp mode in our http server!
      <example name="example.csp" module="cspExample" ng-csp="true">
        <file name="index.html">
          <div ng-controller="MainController as ctrl">
            <div>
              <button ng-click="ctrl.inc()" id="inc">Increment</button>
              <span id="counter">
                {{ctrl.counter}}
              </span>
            </div>

            <div>
              <button ng-click="ctrl.evil()" id="evil">Evil</button>
              <span id="evilError">
                {{ctrl.evilError}}
              </span>
            </div>
          </div>
        </file>
        <file name="script.js">
           angular.module('cspExample', [])
             .controller('MainController', function() {
                this.counter = 0;
                this.inc = function() {
                  this.counter++;
                };
                this.evil = function() {
                  // jshint evil:true
                  try {
                    eval('1+2');
                  } catch (e) {
                    this.evilError = e.message;
                  }
                };
              });
        </file>
        <file name="protractor.js" type="protractor">
          var util, webdriver;

          var incBtn = element(by.id('inc'));
          var counter = element(by.id('counter'));
          var evilBtn = element(by.id('evil'));
          var evilError = element(by.id('evilError'));

          function getAndClearSevereErrors() {
            return browser.manage().logs().get('browser').then(function(browserLog) {
              return browserLog.filter(function(logEntry) {
                return logEntry.level.value > webdriver.logging.Level.WARNING.value;
              });
            });
          }

          function clearErrors() {
            getAndClearSevereErrors();
          }

          function expectNoErrors() {
            getAndClearSevereErrors().then(function(filteredLog) {
              expect(filteredLog.length).toEqual(0);
              if (filteredLog.length) {
                console.log('browser console errors: ' + util.inspect(filteredLog));
              }
            });
          }

          function expectError(regex) {
            getAndClearSevereErrors().then(function(filteredLog) {
              var found = false;
              filteredLog.forEach(function(log) {
                if (log.message.match(regex)) {
                  found = true;
                }
              });
              if (!found) {
                throw new Error('expected an error that matches ' + regex);
              }
            });
          }

          beforeEach(function() {
            util = require('util');
            webdriver = require('protractor/node_modules/selenium-webdriver');
          });

          // For now, we only test on Chrome,
          // as Safari does not load the page with Protractor's injected scripts,
          // and Firefox webdriver always disables content security policy (#6358)
          if (browser.params.browser !== 'chrome') {
            return;
          }

          it('should not report errors when the page is loaded', function() {
            // clear errors so we are not dependent on previous tests
            clearErrors();
            // Need to reload the page as the page is already loaded when
            // we come here
            browser.driver.getCurrentUrl().then(function(url) {
              browser.get(url);
            });
            expectNoErrors();
          });

          it('should evaluate expressions', function() {
            expect(counter.getText()).toEqual('0');
            incBtn.click();
            expect(counter.getText()).toEqual('1');
            expectNoErrors();
          });

          it('should throw and report an error when using "eval"', function() {
            evilBtn.click();
            expect(evilError.getText()).toMatch(/Content Security Policy/);
            expectError(/Content Security Policy/);
          });
        </file>
      </example>
  */

// ngCsp is not implemented as a proper directive any more, because we need it be processed while we
// bootstrap the system (before $parse is instantiated), for this reason we just have
// the csp() fn that looks for the `ng-csp` attribute anywhere in the current doc

/**
 * @ngdoc directive
 * @name ngClick
 *
 * @description
 * The ngClick directive allows you to specify custom behavior when
 * an element is clicked.
 *
 * @element ANY
 * @priority 0
 * @param {expression} ngClick {@link guide/expression Expression} to evaluate upon
 * click. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
   <example>
     <file name="index.html">
      <button ng-click="count = count + 1" ng-init="count=0">
        Increment
      </button>
      <span>
        count: {{count}}
      </span>
     </file>
     <file name="protractor.js" type="protractor">
       it('should check ng-click', function() {
         expect(element(by.binding('count')).getText()).toMatch('0');
         element(by.css('button')).click();
         expect(element(by.binding('count')).getText()).toMatch('1');
       });
     </file>
   </example>
 */
/*
 * A collection of directives that allows creation of custom event handlers that are defined as
 * angular expressions and are compiled and executed within the current scope.
 */
var ngEventDirectives = {};

// For events that might fire synchronously during DOM manipulation
// we need to execute their event handlers asynchronously using $evalAsync,
// so that they are not executed in an inconsistent staAsyncEvents[eventName] && $rootScope.$$phase) {
                scope.$evalAsync(callback);
              } else {
                scope.$apply(callback);
              }
            });
          };
        }
      };
    }];
  }
);

/**
 * @ngdoc directive
 * @name ngDblclick
 *
 * @description
 * The `ngDblclick` directive allows you to specify custom behavior on a dblclick event.
 *
 * @element ANY
 * @priority 0
 * @param {expression} ngDblclick {@link guide/expression Expression} to evaluate upon
 * a dblclick. (The Event object is available as `$event`)
 *
 * @example
   <example>
     <file name="index.html">
      <button ng-dblclick="count = count + 1" ng-init="count=0">
        Increment (on double click)
      </button>
      count: {{count}}
     </file>
   </example>
 */


/**
 * @ngdoc directive
 * @name ngMousedown
 *
 * @description
 * The ngMousedown directive allows you to specify custom behavior on mousedown event.
 *
 * @element ANY
 * @priority 0
 * @param {expression} ngMousedown {@link guide/expression Expression} to evaluate upon
 * mousedown. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
   <example>
     <file name="index.html">
      <button ng-mousedown="count = count + 1" ng-init="count=0">
        Increment (on mouse down)
      </button>
      count: {{count}}
     </file>
   </example>
 */


/**
 * @ngdoc directive
 * @name ngMouseup
 *
 * @description
 * Specify custom behavior on mouseup event.
 *
 * @element ANY
 * @priority 0
 * @param {expression} ngMouseup {@link guide/expression Expression} to evaluate upon
 * mouseup. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
   <example>
     <file name="index.html">
      <button ng-mouseup="count = count + 1" ng-init="count=0">
        Increment (on mouse up)
      </button>
      count: {{count}}
     </file>
   </example>
 */

/**
 * @ngdoc directive
 * @name ngMouseover
 *
 * @description
 * Specify custom behavior on mouseover event.
 *
 * @element ANY
 * @priority 0
 * @param {expression} ngMouseover {@link guide/expression Expression} to evaluate upon
 * mouseover. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
   <example>
     <file name="index.html">
      <button ng-mouseover="count = count + 1" ng-init="count=0">
        Increment (when mouse is over)
      </button>
      count: {{count}}
     </file>
   </example>
 */


/**
 * @ngdoc directive
 * @name ngMouseenter
 *
 * @description
 * Specify custom behavior on mouseenter event.
 *
 * @element ANY
 * @priority 0
 * @param {expression} ngMouseenter {@link guide/expression Expression} to evaluate upon
 * mouseenter. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
   <example>
     <file name="index.html">
      <button ng-mouseenter="count = count + 1" ng-init="count=0">
        Increment (when mouse enters)
      </button>
      count: {{count}}
     </file>
   </example>
 */


/**
 * @ngdoc directive
 * @name ngMouseleave
 *
 * @description
 * Specify custom behavior on mouseleave event.
 *
 * @element ANY
 * @priority 0
 * @param {expression} ngMouseleave {@link guide/expression Expression} to evaluate upon
 * mouseleave. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
   <example>
     <file name="index.html">
      <button ng-mouseleave="count = count + 1" ng-init="count=0">
        Increment (when mouse leaves)
      </button>
      count: {{count}}
     </file>
   </example>
 */


/**
 * @ngdoc directive
 * @name ngMousemove
 *
 * @description
 * Specify custom behavior on mousemove event.
 *
 * @element ANY
 * @priority 0
 * @param {expression} ngMousemove {@link guide/expression Expression} to evaluate upon
 * mousemove. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
   <example>
     <file name="index.html">
      <button ng-mousemove="count = count + 1" ng-init="count=0">
        Increment (when mouse moves)
      </button>
      count: {{count}}
     </file>
   </example>
 */


/**
 * @ngdoc directive
 * @name ngKeydown
 *
 * @description
 * Specify custom behavior on keydown event.
 *
 * @element ANY
 * @priority 0
 * @param {expression} ngKeydown {@link guide/expression Expression} to evaluate upon
 * keydown. (Event object is available as `$event` and can be interrogated for keyCode, altKey, etc.)
 *
 * @example
   <example>
     <file name="index.html">
      <input ng-keydown="count = count + 1" ng-init="count=0">
      key down count: {{count}}
     </file>
   </example>
 */


/**
 * @ngdoc directive
 * @name ngKeyup
 *
 * @description
 * Specify custom behavior on keyup event.
 *
 * @element ANY
 * @priority 0
 * @param {expression} ngKeyup {@link guide/expression Expression} to evaluate upon
 * keyup. (Event object is available as `$event` and can be interrogated for keyCode, altKey, etc.)
 *
 * @example
   <example>
     <file name="index.html">
       <p>Typing in the input box below updates the key count</p>
       <input ng-keyup="count = count + 1" ng-init="count=0"> key up count: {{count}}

       <p>Typing in the input box below updates the keycode</p>
       <input ng-keyup="event=$event">
       <p>event keyCode: {{ event.keyCode }}</p>
       <p>event altKey: {{ event.altKey }}</p>
     </file>
   </example>
 */


/**
 * @ngdoc directive
 * @name ngKeypress
 *
 * @description
 * Specify custom behavior on keypress event.
 *
 * @element ANY
 * @param {expression} ngKeypress {@link guide/expression Expression} to evaluate upon
 * keypress. ({@link guide/expression#-event- Event object is available as `$event`}
 * and can be interrogated for keyCode, altKey, etc.)
 *
 * @example
   <example>
     <file name="index.html">
      <input ng-keypress="count = count + 1" ng-init="count=0">
      key press count: {{count}}
     </file>
   </example>
 */


/**
 * @ngdoc directive
 * @name ngSubmit
 *
 * @description
 * Enables binding angular expressions to onsubmit events.
 *
 * Additionally it prevents the default action (which for form means sending the request to the
 * server and reloading the current page), but only if the form does not contain `action`,
 * `data-action`, or `x-action` attributes.
 *
 * <div class="alert alert-warning">
 * **Warning:** Be careful not to cause "double-submission" by using both the `ngClick` and
 * `ngSubmit` handlers together. See the
 * {@link form#submitting-a-form-and-preventing-the-default-action `form` directive documentation}
 * for a detailed discussion of when `ngSubmit` may be triggered.
 * </div>
 *
 * @element form
 * @priority 0
 * @param {expression} ngSubmit {@link guide/expression Expression} to eval.
 * ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
   <example module="submitExample">
     <file name="index.html">
      <script>
        angular.module('submitExample', [])
          .controller('ExampleController', ['$scope', function($scope) {
            $scope.list = [];
            $scope.text = 'hello';
            $scope.submit = function() {
              if ($scope.text) {
                $scope.list.push(this.text);
                $scope.text = '';
              }
            };
          }]);
      </script>
      <form ng-submit="submit()" ng-controller="ExampleController">
        Enter text and hit enter:
        <input type="text" ng-model="text" name="text" />
        <input type="submit" id="submit" value="Submit" />
        <pre>list={{list}}</pre>
      </form>
     </file>
     <file name="protractor.js" type="protractor">
       it('should check ng-submit', function() {
         expect(element(by.binding('list')).getText()).toBe('list=[]');
         element(by.css('#submit')).click();
         expect(element(by.binding('list')).getText()).toContain('hello');
         expect(element(by.model('text')).getAttribute('value')).toBe('');
       });
       it('should ignore empty strings', function() {
         expect(element(by.binding('list')).getText()).toBe('list=[]');
         element(by.css('#submit')).click();
         element(by.css('#submit')).click();
         expect(element(by.binding('list')).getText()).toContain('hello');
        });
     </file>
   </example>
 */

/**
 * @ngdoc directive
 * @name ngFocus
 *
 * @description
 * Specify custom behavior on focus event.
 *
 * Note: As the `focus` event is executed synchronously when calling `input.focus()`
 * AngularJS executes the expression using `scope.$evalAsync` if the event is fired
 * during an `$apply` to ensure a consistent state.
 *
 * @element window, input, select, textarea, a
 * @priority 0
 * @param {expression} ngFocus {@link guide/expression Expression} to evaluate upon
 * focus. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
 * See {@link ng.directive:ngClick ngClick}
 */

/**
 * @ngdoc directive
 * @name ngBlur
 *
 * @description
 * Specify custom behavior on blur event.
 *
 * A [blur event](https://developer.mozilla.org/en-US/docs/Web/Events/blur) fires when
 * an element has lost focus.
 *
 * Note: As the `blur` event is executed synchronously also during DOM manipulations
 * (e.g. removing a focussed input),
 * AngularJS executes the expression using `scope.$evalAsync` if the event is fired
 * during an `$apply` to ensure a consistent state.
 *
 * @element window, input, select, textarea, a
 * @priority 0
 * @param {expression} ngBlur {@link guide/expression Expression} to evaluate upon
 * blur. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
 * See {@link ng.directive:ngClick ngClick}
 */

/**
 * @ngdoc directive
 * @name ngCopy
 *
 * @description
 * Specify custom behavior on copy event.
 *
 * @element window, input, select, textarea, a
 * @priority 0
 * @param {expression} ngCopy {@link guide/expression Expression} to evaluate upon
 * copy. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
   <example>
     <file name="index.html">
      <input ng-copy="copied=true" ng-init="copied=false; value='copy me'" ng-model="value">
      copied: {{copied}}
     </file>
   </example>
 */

/**
 * @ngdoc directive
 * @name ngCut
 *
 * @description
 * Specify custom behavior on cut event.
 *
 * @element window, input, select, textarea, a
 * @priority 0
 * @param {expression} ngCut {@link guide/expression Expression} to evaluate upon
 * cut. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
   <example>
     <file name="index.html">
      <input ng-cut="cut=true" ng-init="cut=false; value='cut me'" ng-model="value">
      cut: {{cut}}
     </file>
   </example>
 */

/**
 * @ngdoc directive
 * @name ngPaste
 *
 * @description
 * Specify custom behavior on paste event.
 *
 * @element window, input, select, textarea, a
 * @priority 0
 * @param {expression} ngPaste {@link guide/expression Expression} to evaluate upon
 * paste. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
   <example>
     <file name="index.html">
      <input ng-paste="paste=true" ng-init="paste=false" placeholder='paste here'>
      pasted: {{paste}}
     </file>
   </example>
 */

/**
 * @ngdoc directive
 * @name ngIf
 * @restrict A
 * @multiElement
 *
 * @description
 * The `ngIf` directive removes or recreates a portion of the DOM tree based on an
 * {expression}. If the expression assigned to `ngIf` evaluates to a false
 * value then the element is removed from the DOM, otherwise a clone of the
 * element is reinserted into the DOM.
 *
 * `ngIf` differs from `ngShow` and `ngHide` in that `ngIf` completely removes and recreates the
 * element in the DOM rather than changing its visibility via the `display` css property.  A common
 * case when this difference is significant is when using css selectors that rely on an element's
 * position within the DOM, such as the `:first-child` or `:last-child` pseudo-classes.
 *
 * Note that when an element is removed using `ngIf` its scope is destroyed and a new scope
 * is created when the element is restored.  The scope created within `ngIf` inherits from
 * its parent scope using
 * [prototypal inheritance](https://github.com/angular/angular.js/wiki/Understanding-Scopes#javascript-prototypal-inheritance).
 * An important implication of this is if `ngModel` is used within `ngIf` to bind to
 * a javascript primitive defined in the parent scope. In this case any modifications made to the
 * variable within the child scope will override (hide) the value in the parent scope.
 *
 * Also, `ngIf` recreates elements using their compiled state. An example of this behavior
 * is if an element's class attribute is directly modified after it's compiled, using something like
 * jQuery's `.addClass()` method, and the element is later removed. When `ngIf` recreates the element
 * the added class will be lost because the original compiled state is used to regenerate the element.
 *
 * Additionally, you can provide animations via the `ngAnimate` module to animate the `enter`
 * and `leave` effects.
 *
 * @animations
 * enter - happens just after the `ngIf` contents change and a new DOM element is created and injected into the `ngIf` container
 * leave - happens just before the `ngIf` contents are removed from the DOM
 *
 * @element ANY
 * @scope
 * @priority 600
 * @param {expression} ngIf If the {@link guide/expression expression} is falsy then
 *     the element is removed from the DOM tree. If it is truthy a copy of the compiled
 *     element is added to the DOM tree.
 *
 * @example
  <example module="ngAnimate" deps="angular-animate.js" animations="true">
    <file name="index.html">
      <label>Click me: <input type="checkbox" ng-model="checked" ng-init="checked=true" /></label><br/>
      Show when checked:
      <span ng-if="checked" class="animate-if">
        This is removed when the checkbox is unchecked.
      </span>
    </file>
    <file name="animations.css">
      .animate-if {
        background:white;
        border:1px solid black;
        padding:10px;
      }

      .animate-if.ng-enter, .animate-if.ng-leave {
        transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;
      }

      .animate-if.ng-enter,
      .animate-if.ng-leave.ng-leave-active {
        opacity:0;
      }

      .animate-if.ng-leave,
      .animate-if.ng-enter.ng-enter-active {
        opacity:1;
      }
    </file>
  </example>
 */
var ngIfDirective = ['$animate', function($animate) {
  return {
    multiElement: true,
    transclude: 'element',
    priority: 600,
    terminal: true,
    restrict: 'A',
    $$tlb: true,
    link: function($scope, $elem         // by a directive with templateUrl when its template arrives.
                block = {
                  clone: clone
                };
                $animate.enter(clone, $element.parent(), $element);
              });
            }
          } else {
            if (previousElements) {
              previousElements.remove();
              previousElements = null;
            }
            if (childScope) {
              childScope.$destroy();
              childScope = null;
            }
            if (block) {
              previousElements = getBlockNodes(block.clone);
              $animate.leave(previousElements).then(function() {
                previousElements = null;
              });
              block = null;
            }
          }
        });
    }
  };
}];

/**
 * @ngdoc directive
 * @name ngInclude
 * @restrict ECA
 *
 * @description
 * Fetches, compiles and includes an external HTML fragment.
 *
 * By default, the template URL is restricted to the same domain and protocol as the
 * application document. This is done by calling {@link $sce#getTrustedResourceUrl
 * $sce.getTrustedResourceUrl} on it. To load templates from other domains or protocols
 * you may either {@link ng.$sceDelegateProvider#resourceUrlWhitelist whitelist them} or
 * {@link $sce#trustAsResourceUrl wrap them} as trusted values. Refer to Angular's {@link
 * ng.$sce Strict Contextual Escaping}.
 *
 * In addition, the browser's
 * [Same Origin Policy](https://code.google.com/p/browsersec/wiki/Part2#Same-origin_policy_for_XMLHttpRequest)
 * and [Cross-Origin Resource Sharing (CORS)](http://www.w3.org/TR/cors/)
 * policy may further restrict whether the template is successfully loaded.
 * For example, `ngInclude` won't work for cross-domain requests on all browsers and for `file://`
 * access on some browsers.
 *
 * @animations
 * enter - animation is used to bring new content into the browser.
 * leave - animation is used to animate existing content away.
 *
 * The enter and leave animation occur concurrently.
 *
 * @scope
 * @priority 400
 *
 * @param {string} ngInclude|src angular expression evaluating to URL. If the source is a string constant,
 *                 make sure you wrap it in **single** quotes, e.g. `src="'myPartialTemplate.html'"`.
 * @param {string=} onload Expression to evaluate when a new partial is loaded.
 *                  <div class="alert alert-warning">
 *                  **Note:** When using onload on SVG elements in IE11, the browser will try to call
 *                  a function with the name on the window element, which will usually throw a
 *                  "function is undefined" error. To fix this, you can instead use `data-onload` or a
 *                  different form that {@link guide/directive#normalization matches} `onload`.
 *                  </div>
   *
 * @param {string=} autoscroll Whether `ngInclude` should call {@link ng.$anchorScroll
 *                  $anchorScroll} to scroll the viewport after the content is loaded.
 *
 *                  - If the attribute is not set, disable scrolling.
 *                  - If the attribute is set without value, enable scrolling.
 *                  - Otherwise enable scrolling only if the expression evaluates to truthy value.
 *
 * @example
  <example module="includeExample" deps="angular-animate.js" animations="true">
    <file name="index.html">
     <div ng-controller="ExampleController">
       <select ng-model="template" ng-options="t.name for t in templates">
        <option value="">(blank)</option>
       </select>
       url of the template: <code>{{template.url}}</code>
       <hr/>
       <div class="slide-animate-container">
         <div class="slide-animate" ng-include="template.url"></div>
       </div>
     </div>
    </file>
    <file name="script.js">
      angular.module('includeExample', ['ngAnimate'])
        .controller('ExampleController', ['$scope', function($scope) {
          $scope.templates =
            [ { name: 'template1.html', url: 'template1.html'},
              { name: 'template2.html', url: 'template2.html'} ];
          $scope.template = $scope.templates[0];
        }]);
     </file>
    <file name="template1.html">
      Content of template1.html
    </file>
    <file name="template2.html">
      Content of template2.html
    </file>
    <file name="animations.css">
      .slide-animate-container {
        position:relative;
        background:white;
        border:1px solid black;
        height:40px;
        overflow:hidden;
      }

      .slide-animate {
        padding:10px;
      }

      .slide-animate.ng-enter, .slide-animate.ng-leave {
        transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;

        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        display:block;
        padding:10px;
      }

      .slide-animate.ng-enter {
        top:-50px;
      }
      .slide-animate.ng-enter.ng-enter-active {
        top:0;
      }

      .slide-animate.ng-leave {
        top:0;
      }
      .slide-animate.ng-leave.ng-leave-active {
        top:50px;
      }
    </file>
    <file name="protractor.js" type="protractor">
      var templateSelect = element(by.model('template'));
      var includeElem = element(by.css('[ng-include]'));

      it('should load template1.html', function() {
        expect(includeElem.getText()).toMatch(/Content of template1.html/);
      });

      it('should load template2.html', function() {
        if (browser.params.browser == 'firefox') {
          // Firefox can't handle using selects
          // See https://github.com/angular/protractor/issues/480
          return;
        }
        templateSelect.click();
        templateSelect.all(by.css('option')).get(2).click();
        expect(includeElem.getText()).toMatch(/Content of template2.html/);
      });

      it('should change to blank', function() {
        if (browser.params.browser == 'firefox') {
          // Firefox can't handle using selects
          return;
        }
        templateSelect.click();
        templateSelect.all(by.css('option')).get(0).click();
        expect(includeElem.isPresent()).toBe(false);
      });
    </file>
  </example>
 */


/**
 * @ngdoc event
 * @name ngInclude#$includeContentRequested
 * @eventType emit on the scope ngInclude was declared in
 * @description
 * Emitted every time the ngInclude content is requested.
 *
 * @param {Object} angularEvent Synthetic event object.
 * @param {String} src URL of content to load.
 */


/**
 * @ngdoc event
 * @name ngInclude#$includeContentLoaded
 * @eventType emit on the current ngInclude scope
 * @description
 * Emitted every time the ngInclude content is reloaded.
 *
 * @param {Object} angularEvent Synthetic event object.
 * @param {String} src URL of content to load.
 */


/**
 * @ngdoc event
 * @name ngInclude#$includeContentError
 * @eventType emit on the scope ngInclude was declared in
 * @description
 * Emitted when a template HTTP request yields an erroneous response (status < 200 || status > 299)
 *
 * @param {Object} angularEvent Synthetic event object.
 * @param {String} src URL of content to load.
 */
var ngIncludeDirective = ['$templateRequest', '$anchorScroll', '$animate',
                  function($templateRequest,   $anchorScroll,   $animate) {
  return {
    restrict: 'ECA',
    priority: 400,
    terminal: true,
    transclude: 'element',
    controller: angular.noop,
    compile: function(element, attr) {
      var srcExp = attr.ngInclude || attr.src,
          onloadExp = attr.onload || '',
          autoScrollExp = attr.autontElement) {
            $animate.leave(currentElement).then(function() {
              previousEleunction ngIncludeWatchAction(src) {
          var afterAnimation = function() {
            if (isDefined(autoScrollExp) && (!autoScrollExp || scope.$eval(autoScrollExp))) {
              $anchorScroll();
            }
          };
          var thisChangeId = (              if (scope.$$destroyed) return;

              if (thisChangeId === changeCounter) {
                cleanupLastIncludeContent();
                scope.$emit('$includeContentError', src);
              }
            });
            scope.$emit('$includeContentRequested', src);
          } else {
            cleanupLastIncludeContent();
            ctrl.template = null;
          }
        });
      };
    }
  };
}];

// This directive is called during the $transclude call of the first `ngInclude` directive.
// It will replace and compile the content of the element with the loaded template.
// We need this directive so that the element content is already filled when
// the link function of another directive on the same element as ngInclude
// is called.
var ngIncludeFillContentDirective = ['$compile',
  function($compile) {
    return {
      restrict: 'ECA',
      priority: -400,
      require: 'ngInclude',
      link: function(scope, $element, $attr, ctrl) {
        if (/SVG/.test($element[0].toString())) {
          // WebKit: https://bugs.webkit.org/show_bug.cgi?id=135698 --- SVG elements do not
       // specially.
          $element.empty();
          $compile(jqLiteBuildFragment(ctrl.template, document).childNodes)(scope,
              function namespaceAdaptedClone(clone) {
            $element.append(clone);
          }, {futureParentElement: $element});
          return;
        }

        $element.html(ctrl.template);
        $compile($element.contents())(scope);
      }
    };
  }];

/**
 * @ngdoc directive
 * @name ngInit
 * @restrict AC
 *
 * @description
 * The `ngInit` directive allows you to evaluate an expression in the
 * current scope.
 *
 * <div class="alert alert-danger">
 * This directive can be abused to add unnecessary amounts of logic into your templates.
 * There are only a few appropriate uses of `ngInit`, such as for aliasing special properties of
 * {@link ng.directive:ngRepeat `ngRepeat`}, as seen in the demo below; and for injecting data via
 * server side scripting. Besides these few cases, you should use {@link guide/controller controllers}
 * rather than `ngInit` to initialize values on a scope.
 * </div>
 *
 * <div class="alert alert-warning">
 * **Note**: If you have assignment in `ngInit` along with a {@link ng.$filter `filter`}, make
 * sure you have parentheses to ensure correct operator precedence:
 * <pre class="prettyprint">
 * `<div ng-init="test1 = ($index | toString)"></div>`
 * </pre>
 * </div>
 *
 * @priority 450
 *
 * @element ANY
 * @param {expression} ngInit {@link guide/expression Expression} to eval.
 *
 * @example
   <example module="initExample">
     <file name="index.html">
   <script>
     angular.module('initExample', [])
       .controller('ExampleController', ['$scope', function($scope) {
         $scope.list = [['a', 'b'], ['c', 'd']];
       }]);
   </script>
   <div ng-controller="ExampleController">
     <div ng-repeat="innerList in list" ng-init="outerIndex = $index">
       <div ng-repeat="value in innerList" ng-init="innerIndex = $index">
          <span class="example-init">list[ {{outerIndex}} ][ {{innerIndex}} ] = {{value}};</span>
       </div>
     </div>
   </div>
     </file>
     <file name="protractor.js" type="protractor">
       it('should alias index positions', function() {
         var elements = element.all(by.css('.example-init'));
         expect(elements.get(0).getText()).toBe('list[ 0 ][ 0 ] = a;');
         expect(elements.get(1).getText()).toBe('list[ 0 ][ 1 ] = b;');
         expect(ele       });
     </file>
   </example>
 */
var ngInitDirective = ngDirective({
  priority: 450,
  compile: function() {
    return {
      pre: function(scope, element, attrs) {
        scope.$eval(attrs.ngInit);
      }
    };
  }
});

/**
 * @ngdoc directive
 * @name ngList
 *
 * @description
 * Text input that converts between a delimited string and an array of strings. The default
 * delimiter is a comma followed by a space - equivalent to `ng-list=", "`. You can specify a custom
 * delimiter as the value of the `ngList` attribute - for example, `ng-list=" | "`.
 *
 * The behaviour of the directive is affected by the use of the `ngTrim` attribute.
 * * If `ngTrim` is set to `"false"` then whitespace around both the separator and each
 *   list item is respected. This implies that the user of the directive is responsible for
 *   dealing with whitespace but also allows you to use whitespace as a delimiter, such as a
 *   tab or newline character.
 * * Otherwise whitespace around the delimiter is ignored when splitting (although it is respected
 *   when joining the list items back together) and whitespace around each list item is stripped
 *   before it is added to the model.
 *
 * ### Example with Validation
 *
 * <example name="ngList-directive" module="listExample">
 *   <file name="app.js">
 *      angular.module('listExample', [])
 *        .controller('ExampleController', ['$scope', function($scope) {
 *          $scope.names = ['morpheus', 'neo', 'trinity'];
 *        }]);
 *   </file>
 *   <file name="index.html">
 *    <form name="myForm" ng-controller="ExampleController">
 *      <label>List: <input name="namesInput" ng-model="names" ng-list required></label>
 *      <span role="alert">
 *        <span class="error" ng-show="myForm.namesInput.$error.required">
 *        Required!</span>
 *      </span>
 *      <br>
 *      <tt>names = {{names}}</tt><br/>
 *      <tt>myForm.namesInput.$valid = {{myForm.namesInput.$valid}}</tt><br/>
 *      <tt>myForm.namesInput.$error = {{myForm.namesInput.$error}}</tt><br/>
 *      <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
 *      <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
 *     </form>
 *   </file>
 *   <file name="protractor.js" type="protractor">
 *     var listInput = element(by.model('names'));
 *     var names = element(by.exactBinding('names'));
 *     var valid = element(by.binding('myForm.namesInput.$valid'));
 *     var error = element(by.css('span.error'));
 *
 *     it('should initialize to model', function() {
 *       expect(names.getText()).toContain('["morpheus","neo","trinity"]');
 *       expect(valid.getText()).toContain('true');
 *       expect(error.getCssValue('display')).toBe('none');
 *     });
 *
 *     it('should be invalid if empty', function() {
 *       listInput.clear();
 *       listInput.sendKeys('');
 *
 *       expect(names.getText()).toContain('');
 *       expect(valid.getText()).toContain('false');
 *       expect(error.getCssValue('display')).not.toBe('none');
 *     });
 *   </file>
 * </example>
 *
 * ### Example - splitting on newline
 * <example name="ngList-directive-newlines">
 *   <file name="index.html">
 *    <textarea ng-model="list" ng-list="&#10;" ng-trim="false"></textarea>
 *    <pre>{{ list | json }}</pre>
 *   </file>
 *   <file name="protractor.js" type="protractor">
 *     it("should split the text by newlines", function() {
 *       var listInput = element(by.model('list'));
 *       var output = element(by.binding('list | json'));
 *       listInput.sendKeys('abc\ndef\nghi');
 *       expect(output}

        return undefined;
      });

      // Override the standard $isEmpty because an empty array means the input is empty.
      ctrl.$isEmpty = function(value) {
        return !value || !value.length;
      };
    }
  };
};

/* global VALID_CLASS: true,
  INVALID_CLASS: true,
  PRISTINE_CLASS: true,
  DIRTY_CLASS: true,
  UNTOUCHED_CLASS: true,
  TOUCHED_CLASS: true,
*/

var VALID_CLASS = 'ng-valid',
    INVALID_CLASS = 'ng-invalid',
    PRISTINE_CLASS = 'ng-pristine',
    DIRTY_CLASS = 'ng-dirty',
    UNTOUCHED_CLASS = 'ng-untouched',
    TOUCHED_CLASS = 'ng-touched',
    PENDING_CLASS = 'ng-pending';

var ngModelMinErr = minErr('ngModel');

/**
 * @ngdoc type
 * @name ngModel.NgModelController
 *
 * @property {*} $viewValue The actual value from the control's view. For `input` elements, this is a
 * String. See {@link ngModel.NgModelController#$setViewValue} for information about when the $viewValue
 * is set.
 * @property {*} $modelValue The value in the model that the control is bound to.
 * @property {Array.<Function>} $parsers Array of functions to execute, as a pipeline, whenever
       the control reads value from the DOM. The functions are called in array order, each passing
       its return value through to the next. The last return value is forwarded to the
       {@link ngModel.NgModelController#$validators `$validators`} collection.

Parsers are used to sanitize / convert the {@link ngModel.NgModelController#$viewValue
`$viewValue`}.

Returning `undefined` from a parser means a parse error occurred. In that case,
no {@link ngModel.NgModelController#$validators `$validators`} will run and the `ngModel`
will be set to `undefined` unless {@link ngModelOptions `ngModelOptions.allowInvalid`}
is set to `true`. The parse error is stored in `ngModel.$error.parse`.

 *
 * @property {Array.<Function>} $formatters Array of functions to execute, as a pipeline, whenever
       the model value changes. The functions are called in reverse array order, each passing the value through to the
       next. The last return value is used as the actual DOM value.
       Used to format / convert values for display in the control.
 * ```js
 * function formatter(value) {
 *   if (value) {
 *     return value.toUpperCase();
 *   }
 * }
 * ngModel.$formatters.push(formatter);
 * ```
 *
 * @property {Object.<string, function>} $validators A collection of validators that are applied
 *      whenever the model value changes. The key value within the object refers to the name of the
 *      validator while the function refers to the validation operation. The validation operation is
 *      provided with the model value as an argument and must return a true or false value depending
 *      on the response of that validation.
 *
 * ```js
 * ngModel.$validators.validCharacters = function(modelValue, viewValue) {
 *   var value = modelValue || viewValue;
 *   return /[0-9]+/.test(value) &&
 *          /[a-z]+/.test(value) &&
 *          /[A-Z]+/.test(value) &&
 *          /\W+/.test(value);
 * };
 * ```
 *
 * @property {Object.<string, function>} $asyncValidators A collection of validations that are expected to
 *      perform an asynchronous validation (e.g. a HTTP request). The validation function that is provided
 *      is expected to return a promise when it is run during the model validation process. Once the promise
 *      is delivered then the validation status will be set to true when fulfilled and false when rejected.
 *      When the asynchronous validators are triggered, each of the validators will run in parallel and the model
 *      value will only be updated once all validators have been fulfilled. As long as an asynchronous validator
 *      is unfulfilled, its key will be added to the controllers `$pending` property. Also, all asynchronous validators
 *      will only run once all synchronous validators have passed.
 *
 * Please note that if $http is used then it is important that the server returns a success HTTP response code
 * in order to fulfill the validation and a status level of `4xx` in order to reject the validation.
 *
 * ```js
 * ngModel.$asyncValidators.uniqueUsername = function(modelValue, viewValue) {
 *   var value = modelValue || viewValue;
 *
 *   // Lookup user by username
 *   return $http.get('/api/users/' + value).
 *      then(function resolved() {
 *        //username exists, this means validation fails
 *        return $q.reject('exists');
 *      }, function rejected() {
 *        //username does not exist, therefore this validation passes
 *        return true;
 *      });
 * };
 * ```
 *
 * @property {Array.<Function>} $viewChangeListeners Array of functions to execute whenever the
 *     view value has changed. It is called with no arguments, and its return value is ignored.
 *     This can be used in place of additional $watches against the model value.
 *
 * @property {Object} $error An object hash with all failing validator ids as keys.
 * @property {Object} $pending An object hash with all pending validator ids as keys.
 *
 * @property {boolean} $untouched True if control has not lost focus yet.
 * @property {boolean} $touched True if control has lost focus.
 * @property {boolean} $pristine True if user has not interacted with the control yet.
 * @property {boolean} $dirty True if user has already interacted with the control.
 * @property {boolean} $valid True if there is no error.
 * @property {boolean} $invalid True if at least one error on the control.
 * @property {string} $name The name attribute of the control.
 *
 * @description
 *
 * `NgModelController` provides API for the {@link ngModel `ngModel`} directive.
 * The controller contains services for data-binding, validation, CSS updates, and value formatting
 * and parsing. It purposefully does not contain any logic which deals with DOM rendering or
 * listening to DOM events.
 * Such DOM related logic should be provided by other directives which make use of
 * `NgModelController` for data-binding to control elements.
 * Angular provides this DOM logic for most {@link input `input`} elements.
 * At the end of this page you can find a {@link ngModel.NgModelController#custom-control-example
 * custom control example} that uses `ngModelController` to bind to `contenteditable` elements.
 *
 * @example
 * ### Custom Control Example
 * This example shows how to use `NgModelController` with a custom control to achieve
 * data-binding. Notice how different directives (`contenteditable`, `ng-model`, and `required`)
 * collaborate together to achieve the desired result.
 *
 * `contenteditable` is an HTML5 attribute, which tells the browser to let the element
 * contents be edited in place by the user.
 *
 * We are using the {@link ng.service:$sce $sce} service here and include the {@link ngSanitize $sanitize}
 * module to automatically remove "bad" content like inline event listener (e.g. `<span onclick="...">`).
 * However, as we are using `$sce` the model can still decide to provide unsafe content if it marks
 * that content using the `$sce` service.
 *
 * <example name="NgModelController" module="customControl" deps="angular-sanitize.js">
    <file name="style.css">
      [contenteditable] {
        border: 1px solid black;
        background-color: white;
        min-height: 20px;
      }

      .ng-invalid {
        border: 1px solid red;
      }

    </file>
    <file name="script.js">
      angular.module('customControl', ['ngSanitize']).
        directive('contenteditable', ['$sce', function($sce) {
          return {
            restrict: 'A', // only activate on element attribute
            require: '?ngModel', // get a hold of NgModelController
            link: function(scope, element, attrs, ngModel) {
              if (!ngModel) return; // do nothing if no ng-model

              // Specify how UI should be updated
              ngModel.$render = function() {
                element.html($sce.getTrustedHtml(ngModel.$viewValue || ''));
              };

              // Listen for change events to enable binding
              element.on('blur keyup change', function() {
                scope.$evalAsync(read);
              });
              read(); // initialize

              // Write data to the model
              function read() {
                var html = element.html();
                // When we clear the content editable the browser leaves a <br> behind
                // If strip-br attribute is provided then we strip this out
                if ( attrs.stripBr && html == '<br>' ) {
                  html = '';
                }
                ngModel.$setViewValue(html);
              }
            }
          };
        }]);
    </file>
    <file name="index.html">
      <form name="myForm">
       <div contenteditable
            name="myWidget" ng-model="userContent"
            strip-br="true"
            required>Change me!</div>
        <span ng-show="myForm.myWidget.$error.required">Required!</span>
       <hr>
       <textarea ng-model="userContent" aria-label="Dynamic textarea"></textarea>
      </form>
    </file>
    <file name="protractor.js" type="protractor">
    it('should data-bind and become invalid', function() {
      if (browser.params.browser == 'safari' || browser.params.browser == 'firefox') {
        // SafariDriver can't handle contenteditable
        // and Firefox driver can't clear contenteditables very well
        return;
      }
      var contentEditable = element(by.css('[contenteditable]'));
      var content = 'Change me!';

      expect(contentEditable.getText()).toEqual(content);

      contentEditable.clear();
      contentEditable.sendKeys(protractor.Key.BACK_SPACE);
      expect(contentEditable.getText()).toEqual('');
      expect(contentEditable.getAttribute('class')).toMatch(/ng-invalid-required/);
    });
    </file>
 * </example>
 *
 *
 */
var NgModelController = ['$scope', '$exceptionHandler', '$attrs', '$element', '$parse', '$animate', '$timeout', '$rootScope', '$q', '$interpolate',
    function($scope, $exceptionHandler, $attr, $element, $parse, $animate, $timeout, $rootScope, $q, $interpolate) {
  this.$viewValue = Number.NaN;
  this.$modelValue = Number.NaN;
  this.$$rawModelValue = undefined; // stores the parsed modelValue / model set from scope regardless of validity.
  this.$validators = {};
  this.$asyncValidators = {};
  this.$parsers = [];
  this.$formatters = [];
  this.$viewChangeListeners = [];
  this.$untouched = true;
  this.$touched = false;
  this.$pristine = true;
  this.$dirty = false;
  this.$valid = true;
  this.$invalid = false;
  this.$error = {}; // keep invalid keys here
  this.$$success = {}; // keep valid keys here
  this.$pending = undefined; // keep pending keys here
  this.$name = $interpolate($attr.name || '', false)($scope);
  this.$$parentForm = nullFormCtrl;

  var parsedNgModel = $parse($attr.ngModel),
      parsedNgModelAssign = parsedNgModel.assign,
      ngModelGet = parsedNgModel,
      ngModelSet = parsedNgModelAssign,
      pendingDebounce = null,
      parserValid,
      ctrl = this;

  this.$$setOptions = funct'($$$p)');

      ngModelGet = function($scope) {
        var modelValue = parsedNgModel($scope);
        if (isFunction(modelValue)) {
          modelValue = invokeModelGetter($scope);
        }
        return modelValue;
      };
      ngModelSet = function($scope, newValue) {
        if (isFunction(parsedNgModel($scope))) {
          invokeModelSetter($scope, {$$$p: ctrl.$modelValue});
        } else {
          parsedNgModelAssign($scope, ctrl.$modelValue);
        }
      };
    } else if (!parsedNgModel.assign) {
      throw ngModelMinErr('nonassign', "Expression '{0}' is non-assignable. Element: {1}",
          $attr.ngModel, startingTag($element));
    }
  };

  /**
   * @ngdoc method
   * @name ngModel.NgModelController#$render
   *
   * @description
   * Called when the view needs to be updated. It is expected that the user of the ng-model
   * directive will implement this method.
   *
   * The `$render()` method is invoked in the following situations:
   *
   * * `$rollbackViewValue()` is called.  If we are rolling back the view value to the last
   *   committed value then `$render()` is called to update the input control.
   * * The value referenced by `ng-model` is changed programmatically and both the `$modelValue` and
   *   the `$viewValue` are different from last time.
   *
   * Since `ng-model` does not do a deep watch, `$render()` is only invoked if the values of
   * `$modelValue` and `$viewValue` are actually different from their previous value. If `$modelValue`
   * or `$viewValue` are objects (rather than a string or number) then `$render()` will not be
   * invoked if you only change a property on the objects.
   */
  this.$render = noop;

  /**
   * @ngdoc method
   * @name ngModel.NgModelController#$isEmpty
   *
   * @description
   * This is called when we need to determine if the value of an input is empty.
   *
   * For instance, the required directive does this to work out if the input has data or not.
   *
   * The default `$isEmpty` function checks whether the value is `undefined`, `''`, `null` or `NaN`.
   *
   * You can override this for input directives whose concept of being empty is different from the
   * default. The `checkboxInputTypee The value of the input to check for emptiness.
   * @returns {boolean} True if `value` is "empty".
   */
  this.$isEmpty = function(value) {
    return isUndefined(value) || value === '' || value === null || value !== value;
  };

  var currentValidationRunId = 0;

  /**
   * @ngdoc method
   * @name ngModel.NgModelController#$setValidity
   *
   * @description
   * Change the validity state, and notify the form.
   *
   * This method can be called within $parsers/$formatters or a custom validation implementation.
   * However, in most cases it should be sufficient to use the `ngModel.$validators` and
   * `ngModel.$asyncValidators` collections which will call `$setValidity` automatically.
   *
   * @param {string} validationErrorKey Name of the validator. The `validationErrorKey` will be assigned
   *        to either `$error[validationErrorKey]` or `$pending[validationErrorKey]`
   *        (for unfulfilled `$asyncValidators`), so that it is available for data-binding.
   *        The `validationErrorKey` should be in camelCase and will get converted into dash-case
   *        for class name. Example: `myError` will result in `ng-valid-my-error` and `ng-invalid-my-error`
   *        class and can be bound to as  `{{someForm.someControl.$error.myError}}` .
   * @param {boolean} isValid Whether the current state is valid (true), invalid (false), pending (undefined),
   *                          or skipped (null). Pending is used for unfulfilled `$asyncValidators`.
   *                          Skipped is used by Angular when validators do not run because of parse errors and
   *                          wheailed.
   */
  addSetValidityMethod({
    ctrl: this,
    $element: $element,
    set: function(object, property) {
      object[property] = true;
    },
    unset: function(object, property) {
      delete object[property];
    },
    $animate: $animate
  });

  /**
   * @ngdoc method
   * @name ngModel.NgModelController#$setPristine
   *
   * @description
   * Sets the control to its pristine state.
   *
   * This method can be called to rn changed from when first compiled.
   */
  this.$setPristine = function() {
    ctrl.$dirty = false;
    ctrl.$pristine = true;
    $animate.removeClass($element, DIRTY_CLASS);
    $animate.addClass($element, PRISTINE_CLASS);
  };

  /**
   * @ngdoc method
   * @name ngModel.NgModelController#$setDirty
   *
   * @description
   * Sets the control to its dirty state.
   *
   * This method can be called to remove the `ng-pristine` class and set the control to its dirty
   * state (`ng-dirty` class). A model is considered to be dirty when the control has been changed
   * from when first compiled.
   */
  this.$setDirty = function() {
    ctrl.$dirty = true;
    ctrl.$pristine = false;
    $animate.removeClass($element, PRISTINE_CLASS);
    $animate.addClass($element, DIRTY_CLASS);
    ctrl.$$parentForm.$setDirty();
  };

  /**
   * @ngdoc method
   * @name ngModel.NgModelController#$setUntouched
   *
   * @description
   * Sets the control to its untouched state.
   *
   * This method can be called to remove the `ng-touched` class and set the control to its
   * untouched state (`ng-untouched` class). Upon compilation, a model is set as untouched
   * by default, however this function can be used to restore that state if the model has
   * already been touched by the user.
   */
  this.$setUntouched = function() {
    ctrl.$touched = false;
    ctrl.$untouched = true;
    $animate.setClass($element, UNTOUCHED_CLASS, TOUCHED_CLASS);
  };

  /**
   * @ngdoc method
   * @name ngModel.NgModelController#$setTouched
   *
   * @description
   * Sets the control to its touched state.
   *
   * This method can be called to remove the `ng-untouched` class and set the contelement and then shifted focus away from the control (blur event).
   */
  this.$setTouched = function() {
    ctrl.$touched = true;
    ctrl.$untouched = false;
    $animate.setClass($element, TOUCHED_CLASS, UNTOUCHED_CLASS);
  };

  /**
   * @ngdoc method
   * @name ngModel.NgModelController#$rollbackViewValue
   *
   * @description
   * Cancel an update and reset the input element's value to prevent an update to the `$modelValue`,
   * which may be caused by a pending debounced event or because the input is waiting for a some
   * future event.
   *
   * If you have an input that uses `ng-model-options` to set up debounced updates or updates that
   * depend on special events such as blur, you can have a situation where there is a period when
   * the `$viewValue` is out of sync with the ngModel's `$modelValue`.
   *
   * In this case, you can use `$rollbackViewValue()` to manually cancel the debounced / future update
   * and reset the input to the last committed view value.
   *
   * It is also possible that you run into difficulties if you try to update the ngModel's `$modelValue`
   * programmatically before these debounced/future events have resolved/occurred, because Angular's
   * dirty checking mechanism is not able to tell whether the model has actually changed or not.
   *
   * The `$rollbackViewValue()` method should be called before programmatically changing the model of an
   * input which may have such events pending. This is important in order to make sure that the
   * input field will be updated with the new model value and any pending operations are cancelled.
   *
   * <example name="ng-model-cancel-update" module="cancel-update-example">
   *   <file name="app.js">
   *     angular.module('cancel-update-example', [])
   *
   *     .controller('CancelUpdateController', ['$scope', function($scope) {
   *       $scope.model = {};
   *
   *       $scope.setEmpty = function(e, value, rollback) {
   *         if (e.keyCode == 27) {
   *           e.preventDefault();
   *           if (rollback) {
   *             $scope.myForm[value].$rollbackViewValue();
   *           }
   *           $scope.model[value] = '';
   *         }
   *       };
   *     }]);
   *   </file>
   *   <file name="index.html">
   *     <div ng-controller="CancelUpdateController">
   *        <p>Both of these inputs are only updated if they are blurred. Hitting escape should
   *        empty them. Follow these steps and observe the difference:</p>
   *       <ol>
   *         <li>Type something in the input. You will see that the model is not yet updated</li>
   *         <li>Press the Escape key.
   *           <ol>
   *             <li> In the first example, nothing happens, because the model is already '', and no
   *             update is detected. If you blur the input, the model will be set to the current view.
   *             </li>
   *             <li> In the second example, the pending update is cancelled, and the input is set back
   *             to the last committed view value (''). Blurring the input does nothing.
   *             </li>
   *           </ol>
   *         </li>
   *       </ol>
   *
   *       <form name="myForm" ng-model-options="{ updateOn: 'blur' }">
   *         <div>
   *        <p id="inputDescription1">Without $rollbackViewValue():</p>
   *         <input name="value1" aria-describedby="inputDescription1" ng-model="model.value1"
   *                ng-keydown="setEmpty($event, 'value1')">
   *         value1: "{{ model.value1 }}"
   *         </div>
   *
   *         <div>
   *        <p id="inputDescription2">With $rollbackViewValue():</p>
   *         <input name="value2" aria-describedby="inputDescription2" ng-model="model.value2"
   *                ng-keydown="setEmpty($event, 'value2', true)">
   *         value2: "{{ model.value2 }}"
   *         </div>
   *       </form>
   *     </div>
   *   </file>
     padding-right: 30px;
          }

        </file>
   * </example>
   */
  this.$rollbackViewValue = function() {
    $timeout.cancel(pendingDebounce);
    ctrl.$viewValue = ctrl.$$lastCommittedViewValue;
    ctrl.$render();
  };

  /**
   * @ngdoc method
   * @name ngModel.NgModelController#$validate
   *
   * @description
   * Runs each of the registered validators (first synchronous validators and then
   * asynchronous validators).
   * If the validity changes to invalid, the model will be set to `undefined`,
   * unless {@link ngModelOptions `ngModelOptions.allowInvalid`} is `true`.
   * If the validity changes to valid, it will set the model to the last available valid
   * `$modelValue`, i.e. either the last parsed value or the last value set from the scope.
   */
  this.$validate = function() {
    // ignore $validate before model is initialized
    if (isNumber(ctrl.$modelValue) && isNaN(ctrl.$modelValue)) {
      return;
    }

    var viewValue = ctrl.$$lastCommittedViewValue;
    // Note: we use the $$rawModelValue as $modelValue might have been
    // set to undefined during a view -> model update that found validation
    // errors. We can't parse the view here, since that could change
    // the model although neither viewValue nor the model on the scope changed
    varhe model value
        // to calculate their validity.
        ctrl.$modelValue = allValid ? modelValue : undefined;

        if (ctrl.$modelValue !== prevModelValue) {
          ctrl.$$writeModelToScope();
        }
      }
    });

  };

  this.$$runValidators = function(modelValue, viewValue, doneCallback) {
    currentValidationRunId++;
    var localValidationRunId = currentValidationRunId;

    // check parser error
    if (!processParseErrors()) {
      validationDone(false);
      return;
    }
    if (!processSyncValidators()) {
      validationDone(false);
      return;
    }
    processAsyncValidators();

    function processParseErrors() {
      var errorKey = ctrl.$$parserName || 'parse';
      if (isUndefined(parserValid)) {
        setValidity(errorKey, null);
      } else {
        if (!parserValid) {
          forEach(ctrl.$validators, function(v, name) {
            setValidity(name, null);
          });
          forEach(ctrl.$asyncValidators, function(v, name) {
            setValidity(name, null);
    etValidity(name, result);
      });
      if (!syncValidatorsValid) {
        forEach(ctrl.$asyncValidators, function(v, name) {
          setValidity(name, null);
        });
        return false;
      }
      return true;
    }

    function processAsyncValidators() {
      var validatorPromises = [];
      var allValid = true;
      forEach(ctrl.$asyncValidators, function(validator, name) {
        var promise = validator(modelValue, viewValue);
        if (!isPromiseLike(promise)) {
    e      setValidity(name, undefined);
        validatorPromises.push(promise.then(function() {
          setValidity(name, true);
        setValidity(name, false);
  {
  currentValidationRunId) {
        ctrl.$setValidity(name, isValid);
      }
    }

    function validationDone(allValid) {
      if (localValidationRunId === currentValidationRunId) {

        doneCallback(allValid);
      }
    }
  };

  /**
   * @ngdoc method
   * @name ngModel.NgModelController#$commitViewValue
   *
   * @description
   * Commit a pending update to the `$modelValue`.
   *
   * Updates may be pending by a debounced event or because the input is waiting for a some future
   * event defined in `ng-model-options`. this method is rarely needed as `NgModelController`
   * usually handles calling this in response to input events.
   */
  this.$commitViewValue = function() {
    var viewValue = ctrl.$viewValue;

    $timeout.cancel(pendingDebounce);

    // If the view value has not changed then we should just exit, except in the case where there is
    // a native validator on the element. In this case the validation state may have changed even though
    // the viewValue has stayed empty.
    if (ctrl.$$lastCommittedViewValue === viewValue && (viewValue !== '' || !ctrl.$$hasNativeValidators)) {
      return;
    }
    ctrl.$$lastCommittedViewValue = viewValue;

    // change to dirty
    if (ctrl.$pristine) {
      this.$setDirty();
    }
    this.$$parseAndValidate();
  };

  this.$$parseAndValidate = function() {
    var viewValue = ctrl.$$lastCommittedViewValue;
    var modelValue = viewValue;
    parserValid = isUndefined(modelValue) ? undefined : true;

    if (parserValid) {
      for (var i = 0; i < ctrl.$parsers.length; i++) {
        modelValue = ctrl.$parsers[i](modelValue);
        if (isUndefined(modelValue)) {
          parserValid = false;
          break;
        }
      }
    }
    if (isNumber(ctrl.$modelValue) && isNaN(ctrl.$modelValue)) {
      // ctrl.$modelValue has not been touched yet...
      ctrl.$modelValue = ngModelGet($scope);
    }
    var prevModelValue = ctrl.$modelValue;
    var allowInvalid = ctrl.$options && ctrl.$options.allowInvalid;
    ctrl.$$rawModelValue = modelValue;

    if (allowInvalid) {
      ctrl.$modelValue = modelValue;
      writeToModelIfNeeded();
    }

    // Passed on telValue = allValid ? modelValue : uodelToScope = function() {
    ngModelSet($scope, ctrl.$modelValue);
    forEach(ctrl.$viewChangeListeners, function(listener) {
      try {
        listener();
      } catch (e) {
        $exceptionHandler(e);
      }
    });
  };

  /**
   * @ngdoc method
   * @name ngModel.NgModelController#$setViewValue
   *
   * @description
   * Update the view value.
   *
   * This method should be called when a control wants to change the view value; typically,
   * this is done from within a DOM event handler. For example, the {@link ng.directive:input input}
   * directive calls it when the value of the input changes and {@link ng.directive:select select}
   * calls it when an option is selected.
   *
   * When `$setViewValue` is called, the new `value` will be staged for committing through the `$parsers`
   * and `$validators` pipelines. If there are no special {@link ngModelOptions} specified then the staged
   * value sent directly for processing, finally to be applied to `$modelValue` and then the
   * **expression** specified in the `ng-model` attribute. Lastly, all the registered change listeners,
   * in the `$viewChangeListeners` list, are called.
   *
   * In case the {@link ng.directive:ngModelOptions ngModelOptions} directive is used with `updateOn`
   * and the `default` trigger is not listed, all those actions will remain pending until one of the
   * `updateOn` events is triggered on the DOM element.
   * All these actions will be debounced if the {@link ng.directive:ngModelOptions ngModelOptions}
   * directive is used with a custom debounce for this particular event.
   * Note that a `$digest` is only triggered once the `updateOn` events are fired, or if `debounce`
   * is specified, once the timer runs out.
   *
   * When used with standard inputs, the view value will always be a string (which is in some cases
   * parsed into another type, such as a `Date` object for `input[date]`.)
   * However, custom controls might also pass objects to this method. In this case, we should make
   * a copy of the object before passing it to `$setViewValue`. This is because `ngModel` does not
   * perform a deep watch of objects, it only looks for a change of identity. If you only change
   * the property of the object then ngModel will not realise that the object has changed and
   * will not invoke the `$parsers` and `$validators` pipelines. For this reason, you should
   * not change properties of the copy once it has been passed to `$setViewValue`.
   * Otherwise you may cause the model value on the scope to change incorrectly.
   *
   * <div class="alert alert-info">
   * In any case, the value passed to the method should always reflect the current value
   * of the control. For example, if you are calling `$setViewValue` for an input element,
   * you should pass the input DOM value. Otherwise, the control and the scope model become
   * out of sync. It's also important to note that `$setViewValue` does not call `$render` or change
   * the control's DOM value in any way. If we want to change the control's DOM value
   * programmatically, we should update the `ngModel` scope expression. Its new value will be
   * picked up by the model controller, which will run it through the `$formatnt that triggered the update.
   */
 n() {
        ctrl.$commitViewValue();
      }, debounceDelay);
    } else if ($rootScope.$$phase) {
      ctrl.$commitViewValue();
    } else {
      $scope.$apply(function() {
        ctrl.$commitViewValue();
      });
    }
  };

  // model -> value
  // Note: we cannot use a normal scope.$watch as we want to detect the following:
  // 1. scope value is 'a'
  // 2. user enters 'b'
  // 3. ng-change kicks in and reverts scope value to 'a'
  //    -> scope value did not change since the last digest as
  //       ng-change executes in apply phase
  // 4. view should be changed back to 'a'
  $scope.$watch(function ngModelWatch() {
    var modelValue = ngModelGet($scope);

    // if scope model value and ngModel value are out of sync
    // TODO(perf): why not move this to the action fn?
    if (modelValue !== ctrl.$modelValue &&
       // checks for NaN is needed to allow setting the model to NaN when there's an asyncValidator
       (ctrl.$modelValue === ctrl.$modelValue || modelValue === modelValue)
    ) {
      ctrl.$modelValue = ctrl.$$rawModelValue = modelValue;
      parserValid = undefined;

      var formatters = ctrl.$formatters,
          idx = formatters.length;

      var viewValue = modelValue;
      while (idx--) {
        viewValue = formatters[idx](viewValue);
      }
      if (ctrl.$viewValue !== viewValue) {
        ctrl.$viewValue = ctrl.$$lastCommittedViewValue = viewValue;
        ctrl.$render();

        ctrl.$$runValidators(modelValue, viewValue, noop);
      }
    }

    return modelValue;
  });
}];


/**
 * @ngdoc directive
 * @name ngModel
 *
 * @element input
 * @priority 1
 *
 * @description
 * The `ngModel` directive binds an `input`,`select`, `textarea` (or custom form control) to a
 * property on the scope using {@link ngModel.NgModelController NgModelController},
 * which is created and exposed by this directive.
 *
 * `ngModel` is responsible for:
 *
 * - Binding the view into the model, which other directives such as `input`, `textarea` or `select`
 *   require.
 * - Providing validation behavior (i.e. required, number, email, url).
 * - Keeping the state of the control (valid/invalid, dirty/pristine, touched/untouched, validation errors).
 * - Setting related css classes on the element (`ng-valid`, `ng-invalid`, `ng-dirty`, `ng-pristine`, `ng-touched`, `ng-untouched`) including animations.
 * - Registering the control with its parent {@link ng.directive:form form}.
 *
 * Note: `ngModel` will try to bind to the property given by evaluating the expression on the
 * current scope. If the property doesn't already exist on this scope, it will be created
 * implicitly and added to the scope.
 *
 * For best practices on using `ngModel`, see:
 *
 *  - [Understanding Scopes](https://github.com/angular/angular.js/wiki/Understanding-Scopes)
 *
 * For basic examples, how to use `ngModel`, see:
 *
 *  - {@link ng.directive:input input}
 *    - {@link input[text] text}
 *    - {@link input[checkbox] checkbox}
 *    - {@link input[radio] radio}
 *    - {@link input[number] number}
 *    - {@link input[email] email}
 *    - {@link input[url] url}
 *    - {@link input[date] date}
 *    - {@link input[datetime-local] datetime-local}
 *    - {@link input[time] time}
 *    - {@link input[month] month}
 *    - {@link input[week] week}
 *  - {@link ng.directive:select select}
 *  - {@link ng.directive:textarea textarea}
 *
 * # Complex Models (objects or collections)
 *
 * By default, `ngModel` watches the model by reference, not value. This is important to know when
 * binding inputs to models that are objects (e.g. `Date`) or collections (e.g. arrays). If only properties of the
 * object or collection change, `ngModel` will not be notified and so the input will not be  re-rendered.
 *
 * The model must be assigned an entirely new object or collection before a re-rendering will occur.
 *
 * Some directives have options that will cause them to use a custom `$watchCollection` on the model expression
 * - for example, `ngOptions` will do so when a `track by` clause is included in the comprehension expression or
 * if the select is given the `multiple` attribute.
 *
 * The `$watchCollection()` method only does a shallow comparison, meaning that changing properties deeper than the
 * first level of the object (or only changing the properties of an item in the collection if it's an array) will still
 * not trigger a re-rendering of the model.
 *
 * # CSS classes
 * The following CSS classes are added and removed on the associated input/select/textarea element
 * depending on the validity of the model.
 *
 *  - `ng-valid`: the model is valid
 *  - `ng-invalid`: the model is invalid
 *  - `ng-valid-[key]`: for each valid key added by `$setValidity`
 *  - `ng-invalid-[key]`: for each invalid key added by `$setValidity`
 *  - `ng-pristine`: the control hasn't been interacted with yet
 *  - `ng-dirty`: the control has been interacted with
 *  - `ng-touched`: the control has been blurred
 *  - `ng-untouched`: the control hasn't been blurred
 *  - `ng-pending`: any `$asyncValidators` are unfulfilled
 *
 * Keep in mind that ngAnimate can detect each of these classes when added and removed.
 *
 * ## Animation Hooks
 *
 * Animations within models are triggered when any of the associated CSS classes are added and removed
 * on the input element which is attached to the model. These classes are: `.ng-pristine`, `.ng-dirty`,
 * `.ng-invalid` and `.ng-valid` as well as any other validations that are performed on the model itself.
 * The animations that are triggered within ngModel are similar to how they work in ngClass and
 * animations can be hooked into using CSS transitions, keyframes as well as JS animations.
 *
 * The following example shows a simple way to utilize CSS transitions to style an input element
 * that has been rendered as invalid after it has been validated:
 *
 * <pre>
 * //be sure to include ngAnimate as a module to hook into more
 * //advanced animations
 * .my-input {
 *   transition:0.5s linear all;
 *   background: white;
 * }
 * .my-input.ng-invalid {
 *   background: red;
 *   color:white;
 * }
 * </pre>
 *
 * @example
 * <example deps="angular-animate.js" animations="true" fixBase="true" module="inputExample">
     <file name="index.html">
       <script>
        angular.module('inputExample', [])
          .controller('ExampleController', ['$scope', function($scope) {
            $scope.val = '1';
          }]);
       </script>
       <style>
         .my-input {
           transition:all linear 0.5s;
           background: transparent;
         }
         .my-input.ng-invalid {
           color:white;
           background: red;
         }
       </style>
       <p id="inputDescription">
        Update input to see transitions when valid/invalid.
        Integer is a valid value.
       </p>
       <form name="testForm" ng-controller="ExampleController">
         <input ng-model="val" ng-pattern="/^\d+$/" name="anim" class="my-input"
                aria-describedby="inputDescription" />
       </form>
     </file>
 * </example>
 *
 * ## Binding to a getter/setter
 *
 * Sometimes it's helpful to bind `ngModel` to a getter/setter function.  A getter/setter is a
 * function that returns a representation of the model when called with zero arguments, and sets
 * the internal state of a model when called with an argument. It's sometimes useful to use this
 * for models that have an internal representation that's different from what the model exposes
 * to the view.
 *
 * <div class="alert alert-success">
 * **Best Practice:** It's best to keep getters fast because Angular is likely to call them more
 * frequently than other parts of your code.
 * </div>
 *
 * You use this behavior by adding `ng-model-options="{ getterSetter: true }"` to an element that
 * has `ng-model` attached to it. You can also add `ng-model-options="{ getterSetter: true }"` to
 * a `<form>`, which will enable this behavior for all `<input>`s within it. See
 * {@link ng.directive:ngModelOptions `ngModelOptions`} for more.
 *
 * The following example shows how to use `ngModel` with a getter/setter:
 *
 * @example
 * <example name="ngModel-getter-setter" module="getterSetterExample">
     <file name="index.html">
       <div ng-controller="ExampleController">
         <form name="userForm">
           <label>Name:
             <input type="text" name="userName"
                    ng-model="user.name"
                    ng-model-options="{ getterSetter: true }" />
           </label>
         </form>
         <pre>user.name = <span ng-bind="user.name()"></span></pre>
       </div>
     </file>
     <file name="app.js">
       angular.module('getterSetterExample', [])
         .controller('ExampleController', ['$scope', function($scope) {
           var _name = 'Brian';
           $scope.user = {
             name: function(newName) {
              // Note that newName can be undefined for two reasons:
              // 1. Because it is called as a getter and thus called with no arguments
              // 2. Because the property should actually be set to undefined. This happens e.g. if the
              //    input is invalid
              return arguments.length ? (_name = newName) : _name;
             }
           };
         }]);
     </file>
 * </example>
 */
var ngModelDirective = ['$rootScope', function($rootScope) {
  return {
    restrict: 'A',
    require: ['ngModel', '^?form', '^?ngModelOptions'],
    controller: NgModelController,
    // Prelink needs to run before any input directive
    // so that we can set the NgModelOptions in NgModelController
    // before anyone else uses it.
    priority: 1,
    compile: function ngModelCompile(element) {
      // Setup initial state of the control
      element.addClass(PRISTINE_CLASS).addClass(UNTOUCHED_CLASS).addClass(VALID_CLASS);

      return {
        pre: function ngModelPreLink(scope, element, attr, ctrls) {
          var modelCtrl = ctrls[0],
              formCtrl = trl.$addControl(modelCtrl);

      alue) {
              modelCtrl.$$parentForm.$$renameControl(modelCtrl, newValue);
            }
          });

          scope.$on('$destroy', function() {
            modelCtrl.$$parentForm.$removeControl(modelCtrl);
          });
     Ctrl = ctrls[0];
          if (modelCtrl.$options && modelCtrl.$options.updateOn) {
            element.on(modelCtrl.$options.updateOn, function(ev) {
              modelCtrl.$$debounceViewValueCommit(ev && ev.type);
            });
          }

          element.on('blur', function(ev) {
            if (modelCtrl.$touched) return;

            if ($rootScope.$$phase) {
              scope.$evalAsync(modelCtrl.$setTouched);
            } else {
              scope.$apply(modelCtrl.$setTouched);
            }
          });
        }
      };
    }
  };
}];

var DEFAULT_REGEXP = /(\s+|^)default(\s+|$)/;

/**
 * @ngdoc directive
 * @name ngModelOptions
 *
 * @description
 * Allows tuning how model updates are done. Using `ngModelOptions` you can specify a custom list of
 * events that will trigger a model update and/or a debouncing delay so that the actual update only
 * takes place when a timer expires; this timer will be reset after another change takes place.
 *
 * Given the nature of `ngModelOptions`, the value displayed inside input fields in the view might
 * be different from the value in the actual model. This means that if you update the model you
 * should also invoke {@link ngModel.NgModelController `$rollbackViewValue`} on the relevant input field in
 * order to make sure it is synchronized with the model and that any debounced action is canceled.
 *
 * The easiest way to reference the control's {@link ngModel.NgModelController `$rollbackViewValue`}
 * method is by making sure the input is placed inside a form that has a `name` attribute. This is
 * important because `form` controllers are published to the related scope under the name in their
 * `name` attribute.
 *
 * Any pending changes will take place immediately when an enclosing form is submitted via the
 * `submit` event. Note that `ngClick` events will occur before the model is updated. Use `ngSubmit`
 * to have access to the updated model.
 *
 * `ngModelOptions` has an effect on the element it's declared on and its descendants.
 *
 * @param {Object} ngModelOptions options to apply to the current model. Valid keys are:
 *   - `updateOn`: string specifying which event should the input be bound to. You can set several
 *     events using an space delimited list. There is a special event called `default` that
 *     matches the default events belonging of the control.
 *   - `debounce`: integer value which contains the debounce model update value in milliseconds. A
 *     value of 0 triggers an immediate update. If an object is supplied instead, you can specify a
 *     custom value for each event. For example:
 *     `ng-model-options="{ updateOn: 'default blur', debounce: { 'default': 500, 'blur': 0 } }"`
 *   - `allowInvalid`: boolean value which indicates that the model can be set with values that did
 *     not validate correctly instead of the default behavior of setting the model to undefined.
 *   - `getterSetter`: boolean value which determines whether or not to treat functions bound to
       `ngModel` as getters/setters.
 *   - `timezone`: Defines the timezone to be used to read/write the `Date` instance in the model for
 *     `<input type="date">`, `<input type="time">`, ... . It understands UTC/GMT and the
 *     continental US time zone abbreviations, but for general use, use a time zone offset, for
 *     example, `'+0430'` (4 hours, 30 minutes east of the Greenwich meridian)
 *     If not specified, the timezone of the browser will be used.
 *
 * @example

  The following example shows how to override immediate updates. Changes on the inputs within the
  form will update the model only when the control loses focus (blur event). If `escape` key is
  pressed while the input field is focused, the value is reset to the value in the current model.

  <example name="ngModelOptions-directive-blur" module="optionsExample">
    <file name="index.html">
      <div ng-controller="ExampleController">
        <form name="userForm">
          <label>Name:
            <input type="text" name="userName"
                   ng-model="user.name"
                   ng-model-options="{ updateOn: 'blur' }"
                   ng-keyup="cancel($event)" />
          </label><br />
          <label>Other data:
            <input type="text" ng-model="user.data" />
          </label><br />
        </form>
        <pre>user.name = <span ng-bind="user.name"></span></pre>
        <pre>user.data = <span ng-bind="user.data"></span></pre>
      </div>
    </file>
    <file name="app.js">
      angular.module('optionsExample', [])
        .controller('ExampleController', ['$scope', function($scope) {
          $scope.user = { name: 'John', data: '' };

          $scope.cancel = function(e) {
            if (e.keyCode == 27) {
              $scope.userForm.userName.$rollbackViewValue();
            }
          };
        }]);
    </file>
    <file name="protractor.js" type="protractor">
      var model = element(by.binding('user.name'));
      var input = element(by.model('user.name'));
      var other = element(by.model('user.data'));

      it('should allow custom events', function() {
        input.sendKeys(' Doe');
        input.click();
        expect(model.getText()).toEqual('John');
        other.click();
        expect(model.getText()).toEqual('John Doe');
      });

      it('should $rollbackViewValue when model changes', function() {
        input.sendKeys(' Doe');
        expect(input.getAttribute('value')).toEqual('John Doe');
        input.sendKeys(protractor.Key.ESCAPE);
        expect(input.getAttribute('value')).toEqual('John');
        other.click();
        expect(model.getText()).toEqual('John');
      });
    </file>
  </example>

  This one shows how to debounce model changes. Model will be updated only 1 sec after last change.
  If the `Clear` button is pressed, any debounced action is canceled and the value becomes empty.

  <example name="ngModelOptions-directive-debounce" module="optionsExample">
    <file name="index.html">
      <div ng-controller="ExampleController">
        <form name="userForm">
          <label>Name:
            <input type="text" name="userName"
                   ng-model="user.name"
                   ng-model-options="{ debounce: 1000 }" />
          </label>
          <button ng-click="userForm.userName.$rollbackViewValue(); user.name=''">Clear</button>
          <br />
        </form>
        <pre>user.name = <span ng-bind="user.name"></span></pre>
      </div>
    </file>
    <file name="app.js">
      angular.module('optionsExample', [])
        .controller('ExampleController', ['$scope', function($scope) {
          $scope.user = { name: 'Igor' };
        }]);
    </file>
  </example>

  This one shows how to bind to getter/setters:

  <example name="ngModelOptions-directive-getter-setter" module="getterSetterExample">
    <file name="index.html">
      <div ng-controller="ExampleController">
        <form name="userForm">
          <label>Name:
            <input type="text" name="userName"
                   ng-model="user.name"
                   ng-model-options="{ getterSetter: true }" />
          </label>
        </form>
        <pre>user.name = <span ng-bind="user.name()"></span></pre>
      </div>
    </file>
    <file name="app.js">
      angular.module('getterSetterExample', [])
        .controller('ExampleController', ['$scope', function($scope) {
          var _name = 'Brian';
          $scope.user = {
            name: function(newName) {
              // Note that newName can be undefined for two reasons:
              // 1. Because it is called as a getter and thus called with no arguments
              // 2. Because the property should actually be set to undefined. This happens e.g. if the
              //    input is invalid
              return arguments.length ? (_name = newName) : _name;
            }
          };
        }]);
    </file>
  </example>
 */
var ngModelOptionsDirective = function() {
  return {
    restrict: 'A',
    controller: ['$scope', '$attrs', function($scope, $attrs) {
      var that = this;
      this.$options = copy($scope.$eval($attrs.ngModelOptions));
      // Allow adding/overriding bound events
      if (isDefined(this.$options.updateOn from list of events that can trigger a model update
        this.$options.updateOn = trim(this.$options.updateOn.replace(DEFAULT_REGEXP, function() {
          that.$options.updateOnDefault = true;
          return ' ';
        }));
      } else {
        this.$options.updateOnDefault = true;
      }
    }]
  };
};



// helper methods
function addSetValidityMethod(context) {
  var ctrl = context.ctrl,
      $element = context.$element,
      classCache = {},
      set = context.set,
      unset = context.unset,
      $animate = context.$animate;

  classCache[INVALID_CLASS] = !(classCache[VALID_CLASS] = $element.hasClass(VALID_CLASS));

  ctrl.$setValidity = setValidity;

  function setValidity(validationErrorKey, state, controller) {
    if (isUndefined(state)) {
      createAndSet('$pending', validationErrorKey, controller);
    } else {
      unsetAndCleanup('$pending', validationErrorKey, controller);
    }
    if (!isBoolean(state)) {
      unset(ctrl.$error, validationErrorKey, controller);
      unset(ctrl.$$success, validationErrorKey, controller);
    } else {
      if (state) {
        unset(ctrl.$error, validationErrorKey, controller);
        set(ctrl.$$success, validationErrorKey, controller);
      } else {
        set(ctrl.$error, validationErrorKey, controller);
        unset(ctrl.$$success, validationErrorKey, controller);
      }
    }
    if (ctrl.$pending) {
      cachedToggleClass(PENDING_CLASS, true);
      ctrl.$valid = ctrl.$invalid = undefined;
      toggleValidationCss('', null);
    } else {
      cachedToggleClass(PENDING_CLASS, false);
      ctrl.$valid = isObjectEmpty(ctrl.$error);
      ctrl.$invalid = !ctrl.$valid;
      toggleValidationCss('', ctrl.$valid);
    }

    // re-read the state as the set/unset methods could have
    // combined state in ctrl.$error[validationError] (used for forms),
    // where setting/unsetting only increments/decrements the value,
    // and does not replace it.
    var combinedState;
    if (ctrl.$pending && ctrl.$pending[validationErrorKey]) {
      combinedState = undefined;
    } else if (ctrl.$error[validationErrorKey]) {
      combinedState = false;
    } else if (ctrl.$$success[validationEr;
 ],    y =s(INVALID_CLASS + validationErrorKey, isValid === false);
  }
}

function isObjectEmpty(obj) {
  if (obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
  }
  return true;
}

/**
 * @ngdoc directive
 * @name ngNonBindable
 * @restrict AC
 * @priority 1000
 *
 * @description
 * The `ngNonBindable` directive tells Angular not to compile or bind the contents of the current
 * DOM element. This is useful if the element contains what appears to be Angular directives and
 * bindings but which should be ignored by Angular. This could be the case if you have a site that
 * displays snippets of code, for instance.
 *
 * @element ANY
 *
 * @example
 * In this example there are two locations where a simple interpolation binding (`{{}}`) is present,
 * but the one wrapped in `ngNonBindable` is left alone.
 *
 * @example
    <example>
      <file name="index.html">
        <div>Normal: {{1 + 2}}</div>
        <div ng-non-bindable>Ignored: {{1 + 2}}</div>
      </file>
      <file name="protractor.js" type="protractor">
       it('should check ng-non-bindable', function() {
         expect(element(by.binding('1 + 2')).getText()).toContain('3');
         expect(element.all(by.css('div')).last().getText()).toMatch(/1 \+ 2/);
       });
      </file>
    </example>
 */
var ngNonBindableDirective = ngDirective({ terminal: true, priority: 1000 });

/* global jqLiteRemove */

var ngOptionsMinErr = minErr('ngOptions');

/**
 * @ngdoc directive
 * @name ngOptions
 * @restrict A
 *
 * @description
 *
 * The `ngOptions` attribute can be used to dynamically generate a list of `<option>`
 * elements for the `<select>` element using the array or object obtained by evaluating the
 * `ngOptions` comprehension expression.
 *
 * In many cases, `ngRepeat` can be used on `<option>` elements instead of `ngOptions` to achieve a
 * similar result. However, `ngOptions` provides some benefits such as reducing memory and
 * increasing speed by not creating a new scope for each repeated instance, as well as providing
 * more flexibility in how the `<select>`'s model is assigned via the `select` **`as`** part of the
 * comprehension expression. `ngOptions` should be used when the `<select>` model needs to be bound
 *  to a non-string value. This is because an option element can only be bound to string values at
 * present.
 *
 * When an item in the `<select>` menu is selected, the array element or object property
 * represented by the selected option will be bound to the model identified by the `ngModel`
 * directive.
 *
 * Optionally, a single hard-coded `<option>` element, with the value set to an empty string, can
 * be nested into the `<select>` element. This element will then represent the `null` or "not selected"
 * option. See example below for demonstration.
 *
 * ## Complex Models (objects or collections)
 *
 * By default, `ngModel` watches the model by reference, not value. This is important to know when
 * binding the select to a model that is an object or a collection.
 *
 * One issue occurs if you want to preselect an option. For example, if you set
 * the model to an object that is equal to an object in your collection, `ngOptions` won't be able to set the selection,
 * because the objects are not identical. So by default, you should always reference the item in your collection
 * for preselections, e.g.: `$scope.selected = $scope.collection[3]`.
 *
 * Another solution is to use a `track by` clause, because then `ngOptions` will track the identity
 * of the item not by reference, but by the result of the `track by` expression. For example, if your
 * collection items have an id property, you would `track by item.id`.
 *
 * A different issue with objects or collections is that ngModel won't detect if an object property or
 * a collection item changes. For that reason, `ngOptions` additionally watches the model using
 * `$watchCollection`, when the expression contains a `track by` clause or the the select has the `multiple` attribute.
 * This allows ngOptions to trigger a re-rendering of the options even if the actual object/collection
 * has not changed identity, but only a property on the object or an item in the collection changes.
 *
 * Note that `$watchCollection` does a shallow comparison of the properties of the object (or the items in the collection
 * if the model is an array). This means that changing a property deeper than the first level inside the
 * object/collection will not trigger a re-rendering.
 *
 * ## `select` **`as`**
 *
 * Using `select` **`as`** will bind the result of the `select` expression to the model, but
 * the value of the `<select>` and `<option>` html elements will be either the index (for array data sources)
 * or property name (for object data sources) of the value within the collection. If a **`track by`** expression
 * is used, the result of that expression will be set as the value of the `option` and `select` elements.
 *
 *
 * ### `select` **`as`** and **`track by`**
 *
 * <div class="alert alert-warning">
 * Be careful when using `select` **`as`** and **`track by`** in the same expression.
 * </div>
 *
 * Given this array of items on the $scope:
 *
 * ```js
 * $scope.items = [{
 *   id: 1,
 *   label: 'aLabel',
 *   subItem: { name: 'aSubItem' }
 * }, {
 *   id: 2,
 *   label: 'bLabel',
 *   subItem: { name: 'bSubItem' }
 * }];
 * ```
 *
 * This will work:
 *
 * ```html
 * <select ng-options="item as item.label for item in items track by item.id" ng-model="selected"></select>
 * ```
 * ```js
 * $scope.selected = $scope.items[0];
 * ```
 *
 * but this will not work:
 *
 * ```html
 * <select ng-options="item.subItem as item.label for item in items track by item.id" ng-model="selected"></select>
 * ```
 * ```js
 * $scope.selected = $scope.items[0].subItem;
 * ```
 *
 * In both examples, the **`track by`** expression is applied successfully to each `item` in the
 * `items` array. Because the selected option has been set programmatically in the controller, the
 * **`track by`** expression is also applied to the `ngModel` value. In the first example, the
 * `ngModel` value is `items[0]` and the **`track by`** expression evaluates to `items[0].id` with
 * no issue. In the second example, the `ngModel` value is `items[0].subItem` and the **`track by`**
 * expression evaluates to `items[0].subItem.id` (which is undefined). As a result, the model value
 * is not matched against any `<option>` and the `<select>` appears as having no selected value.
 *
 *
 * @param {string} ngModel Assignable angular expression to data-bind to.
 * @param {string=} name Property name of the form under which the control is published.
 * @param {string=} required The control is considered valid only if value is entered.
 * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
 *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
 *    `required` when you want to data-bind to the `required` attribute.
 * @param {comprehension_expression=} ngOptions in one of the following forms:
 *
 *   * for array data sources:
 *     * `label` **`for`** `value` **`in`** `array`
 *     * `select` **`as`** `label` **`for`** `value` **`in`** `array`
 *     * `label` **`group by`** `group` **`for`** `value` **`in`** `array`
 *     * `label` **`disable when`** `disable` **`for`** `value` **`in`** `array`
 *     * `label` **`group by`** `group` **`for`** `value` **`in`** `array` **`track by`** `trackexpr`
 *     * `label` **`disable when`** `disable` **`for`** `value` **`in`** `array` **`track by`** `trackexpr`
 *     * `label` **`for`** `value` **`in`** `array` | orderBy:`orderexpr` **`track by`** `trackexpr`
 *        (for including a filter with `track by`)
 *   * for object data sources:
 *     * `label` **`for (`**`key` **`,`** `value`**`) in`** `object`
 *     * `select` **`as`** `label` **`for (`**`key` **`,`** `value`**`) in`** `object`
 *     * `label` **`group by`** `group` **`for (`**`key`**`,`** `value`**`) in`** `object`
 *     * `label` **`disable when`** `disable` **`for (`**`key`**`,`** `value`**`) in`** `object`
 *     * `select` **`as`** `label` **`group by`** `group`
 *         **`for` `(`**`key`**`,`** `value`**`) in`** `object`
 *     * `select` **`as`** `label` **`disable when`** `disable`
 *         **`for` `(`**`key`**`,`** `value`**`) in`** `object`
 *
 * Where:
 *
 *   * `array` / `object`: an expression which evaluates to an array / object to iterate over.
 *   * `value`: local variable which will refer to each item in the `array` or each property value
 *      of `object` during iteration.
 *   * `key`: local variable which will refer to a property name in `object` during iteration.
 *   * `label`: The result of this expression will be the label for `<option>` element. The
 *     `expression` will most likely refer to the `value` variable (e.g. `value.propertyName`).
 *   * `select`: The result of this expression will be bound to the model of the parent `<select>`
 *      element. If not specified, `select` expression will default to `value`.
 *   * `group`: The result of this expression will be used to group options using the `<optgroup>`
 *      DOM element.
 *   * `disable`: The result of this expression will be used to disable the rendered `<option>`
 *      element. Return `true` to disable.
 *   * `trackexpr`: Used when working with an array of objects. The result of this expression will be
 *      used to identify the objects in the array. The `trackexpr` will most likely refer to the
 *     `value` variable (e.g. `value.propertyName`). With this the selection is preserved
 *      even when the options are recreated (e.g. reloaded from the server).
 *
 * @example
    <example module="selectExample">
      <file name="index.html">
        <script>
        angular.module('selectExample', [])
          .controller('ExampleController', ['$scope', function($scope) {
            $scope.colors = [
              {name:'black', shade:'dark'},
              {name:'white', shade:'light', notAnOption: true},
              {name:'red', shade:'dark'},
              {name:'blue', shade:'dark', notAnOption: true},
              {name:'yellow', shade:'light', notAnOption: false}
            ];
            $scope.myColor = $scope.colors[2]; // red
          }]);
        </script>
        <div ng-controller="ExampleController">
          <ul>
            <li ng-repeat="color in colors">
              <label>Name: <input ng-model="color.name"></label>
              <label><input type="checkbox" ng-model="color.notAnOption"> Disabled?</label>
              <button ng-click="colors.splice($index, 1)" aria-label="Remove">X</button>
            </li>
            <li>
              <button ng-click="colors.push({})">add</button>
            </li>
          </ul>
          <hr/>
          <label>Color (null not allowed):
            <select ng-model="myColor" ng-options="color.name for color in colors"></select>
          </label><br/>
          <label>Color (null allowed):
          <span  class="nullable">
            <select ng-model="myColor" ng-options="color.name for color in colors">
              <option value="">-- choose color --</option>
            </select>
          </span></label><br/>

          <label>Color grouped by shade:
            <select ng-model="myColor" ng-options="color.name group by color.shade for color in colors">
            </select>
          </label><br/>

          <label>Color grouped by shade, with some disabled:
            <select ng-model="myColor"
                  ng-options="color.name group by color.shade disable when color.notAnOption for color in colors">
            </select>
          </label><br/>



          Select <button ng-click="myColor = { name:'not in list', shade: 'other' }">bogus</button>.
          <br/>
          <hr/>
          Currently selected: {{ {selected_color:myColor} }}
          <div style="border:solid 1px black; height:20px"
               ng-style="{'background-color':myColor.name}">
          </div>
        </div>
      </file>
      <file name="protractor.js" type="protractor">
         it('should check ng-options', function() {
           expect(element(by.binding('{selected_color:myColor}')).getText()).toMatch('red');
           element.all(by.model('myColor')).first().click();
           element.all(by.css('select[ng-model="myColor"] option')).first().click();
           expect(element(by.binding('{selected_color:myColor}')).getText()).toMatch('black');
           element(by.css('.nullable select[ng-model="myColor"]')).click();
           element.all(by.css('.nullable select[ng-model="myColor"] option')).first().click();
           expect(element(by.binding('{selected_color:myColor}')).getText()).toMatch('null');
         });
      </file>
    </example>
 */

// jshint maxlen: false
//                     //00001111111111000000000002222222222000000000000000000000333333333300000000000000000000000004444444444400000000000005555555555555550000000006666666666666660000000777777777777777000000000000000888888888800000000000000000009999999999
var NG_OPTIONS_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/;
                        // 1: value expression (valueFn)
                        // 2: label expression (displayFn)
                        // 3: group by expression (groupByFn)
                        // 4: disable when expression (disableWhenFn)
                        // 5: array item variable name
                        // 6: object item key variable name
                        // 7: object item value variable name
                        // 8: collection expression
                        // 9: track by expression
// jshint maxlen: 100


var ngOptionsDirective = ['$compile', '$parse', function($compile, $parse) {

  function parseOptionsExpression(optionsExp, selectElement, scope) {

    var match = optionsExp.match(NG_OPTIONS_REGEXP);
    if (!(match)) {
      throw ngOptionsMinErr('iexp',
        "Expected expression in form of " +
        "'_select_ (as _label_)? for (_key_,)?_value_ in _collection_'" +
        " but got '{0}'. Element: {1}",
        optionsExp, startingTag(selectElement));
    }

    // Extract the parts from the ngOptions expression

    // The variable name for the value of the item in the collection
    var valueName = match[5] || match[7];
    // The variable name for the key of the item in the collection
    var keyName = match[6];

    // An expression that generates the viewValue for an option if there is a label expression
    var selectAs = / as /.test(match[0]) && match[1];
    // An expression that is used to track the id of each object in the options collection
    var trackBy = match[9];
    // An expression that generates the viewValue for an option if there is no label expression
    var valueFn = $parse(match[2] ? match[1] : valueName);
    var selectAsFn = selectAs && $parse(selectAs);
    var viewValueFn = selectAsFn || valueFn;
    var trackByFn = trackBy && $parse(trackBy);

    // Get the vave a trackFn then use that (passing scope and locals)
    // otherwise just hash the given viewValue
    var getTracByFn(scope, locals); } :
                              function getHashOfValue(value) { return hashKey(value); };
    var getTrackByValue = function(value, key) {
      return getTrackByValueFn(value, getLocals(value, key));
    };

nFls = {}   fu for (var itemKey in optionValues) {
          if (optionValues.hasOwnProperty(itemKey) && itemKey.charAt(0) !== '$') {
            optionValuesKeys.push(itemKey);
          }
        }
      }
      return optionValuesKeys;
    }

    return {
      trackBy: trackBy,
      getTrackByValue: getTrackByValue,
      getWatchables: $parse(valuesFn, function(optionValues) {
        // Create a collection of things that we would like to watch (watchedArray)
        // so that they can all be watched using a single $watchCollection
        // that only runs the handler once if anything changes
        var watchedArray = [];
        optionValues = optionValues || [];

        var optionValuesKeys = getOptionValuesKeys(optionValues);
        var optionValuesLength = optionValuesKeys.length;
        for (var index = 0; index < optionValuesLength; index++) {
          var key = (optionValues === optionValuesKeys) ? index : optionValuesKeys[index];
          var value = optionValues[key];

          var locals = getLocals(optionValues[key], key);
          var selectValue = getTrackByValueFn(optionValues[key], locals);
          watchedArray.push(selectValue);

          // Only need to watch the displayFn if there is a specific label expression
          if (match[2] || match[1]) {
            var label = displayFn(scope, locals);
            watchedArray.push(label);
          }

          // Only need to watch the disableWhenFn if there is a specific disable expression
          if (match[4]) {
            var disableWhen = disableWhenFn(scope, locals);
            watchedArray.push(disableWhen);
          }
        }
        return watchedArray;
      }),

      getOptions: function() {

        var optionItems = [];
        var selectValueMap = {};

        // The option values were already computed in the `getWatchables` fn,
        // which must have been called to trigger `getOptions`
        var optionValues = valuesFn(scope) || [];
        var optionValuesKeys = getOptionValuesKeys(optionValues);
        var optionValuesLength = optionValuesKeys.length;

        for (var index = 0; index < optionValuesLength; index++) {
          var key = (optionValues === optionValuesKeys) ? index : optionValuesKeys[index];
          var value = optionValues[key];
          var locals = getLocals(value, key);
          var viewValue = viewValueFn(scope, locals);
          var selectValue = getTrackByValueFn(viewValue, locals);
          var label = displayFn(scope, locals);
          var group = groupByFn(scope, locals);
          var disabled = disableWhenFn(scope, locals);
          var optionItem = new Option(selectValue, viewValue, label, group, disableonItem;
        }

        return {ect that may be mutated by the application,
            // we need to make a copy and not return the reference to the value on the option.
            return trackBy ? angular.copy(option.viewValue) : option.viewValue;
          }
        };
      }
    };
  }


  // we can't just jqLite('<option>') since jqLite is not smart enough
  // to create it in <select> and IE barfs otherwise.
  var optionTemplate = document.createElement('option'),
      optGroupTemplate = document.createElement('optgroup');


    function ngOptionsPostLink(scope, selectElement, attr, ctrls) {

      // if ngModel is not defined, we don't need to do anything
      var ngModelCtrl = ctrls[1];
      if (!ngModelCtrl) return;

      var selectCtrl = ctrls[0];
      var multiple = attr.multiple;

      // The emptyOption allows the application developer to provide their own custom "empty"
      // option when the viewValue does not match any of the option values.
      var emptyOption;
      for (var i = 0, children = selectElement.children(), ii = children.length; i < ii; i++) {
        if (children[i].value === '') {
          emptyOption = children.eq(i);
          break;
        }
      }

      var providedEmptyOption = !!emptyOption;

      var unknownOption = jqLite(optionTemplate.cloneNode(false));
      unknownOption.val('?');

      var options;
      var ngOptions = parseOptionsExpression(attr.ngOptions, selectElement, scope);


      var renderEmptyOption = function() {
        if (!providedEmptyOption) {
 Option.prop('selected', true); // needed for IE
        emptyOption.attr('selected', true);
      };

      var removeEmptyOption = function() {
        if (!providedEmptyOption) {
          emptyOption.remove();
        }
      };


      var renderUnknownOption = function() {
        selectElement.prepend(unknownOption);
        selectElement.val('?');
        unknownOption.prop('selected', true); // needed for IE
        unknownOption.attr('selected', true);
      };

      var removeUnknownOption = function() {
        unknownOption.remove();
      };

      // Update the controller methods for multiple selectable options
      if (!multiple) {

        selectCtrl.writeValue = function writeNgOptionsValue(value) {
          var option = options.getOptionFromViewValue(value);

          if (option && !option.disabled) {
            // Don't update the option when it is already selected.
            // For example, the browser will select the first option by default. In that case,
            // most properties are set automatically - except the `selected` attribute, which we
            // set always

            if (selectElement[0].value !== option.selectValue) {
              removeUnknownOption();
              removeEmptyOption();

              selectElement[0].value = option.selectValue;
              option.element.selected = true;
            }

            option.element.setAttribute('selected', 'selected');
          } else {
            if (value === null || providedEmptyOption) {
              removeUnknownOption();
              renderEmptyOption();
            } else {
              removeEmptyOption();
              renderUnknownOption();
            }
          }
        };

        selectCtrl.readValue = function readNgOptionsValue() {

          var selectedOption = options.selectValueMap[selectElement.val()];

          if (selectedOption && !selectedOption.disabled) {
            removeEmptyOption();
            removeUnknownOption();
            return options.getViewValueFromOption(selectedOption);
          }
          return null;
   cked value on the model
        // since ngModel only watches for object identity change
        if (ngOptions.trackBy) {
          scope.$watch(
            function() { return ngOptions.getTrackByValue(ngModelCtrl.$viewValue); },
            function() { ngModelCtrl.$render(); }
          );
        }
return !value || value.length === 0;
        };


        selectCtrl.writeValue = function writeNgOptionsMultiple(value) {
          options.items.forEach(function(option) {
            option.element.selected = false;
          });

          if (value) {
            value.forEach(f, function(value) {
            var option = options.selectValueMap[value];
            if (option && !option.disabled) selections.push(options.getViewValueFromOption(option));
          });

          return selections;
    function() {
            if (isArray(ngModelCtrl.$viewValue)) {
              return ngModelCtrl.$viewValue.map(function(value) {
                return ngOptions.getTrackByValue(value);
              });
            }
          }, function() {
            ngModelCtrl.$render();
          });

        }
      }


      if (providedEmptyOption) {

        // we need to remove it before calling selectElement.empty() because otherwise IE will
        // remove the label from the element. wtf?
        emptyOption.remove();

        // compile the element since there might be bindings in it
        $compile(emptyOption)(scope);

        // remove the class, which is added automatically because we recompile the element and it
        // becomes the compilation root
        emptyOption.removeClass('ng-scope');
      } else {
        emptyOption = jqLite(optionTemplate.cloneNode(false));
      }

      // We need to do this here to ensure that the options object is defined
      // when we first hit it in writeNgOptionsValue
      updateOptions();

      // We will re-render the option elements if the option values or labels change
      scope.$watchCollection(ngOptions.getWatchables, updateOptions);

      // ------------------------------------------------------------------ //


      function updateOptionElement(option, element) {
        option.element = element;
        element.disabled = option.disabled;
        // NOTE: The label must be set before the value, otherwise IE10/11/EDGE create unresponsive
        // selects in certain circumstances when multiple selects are next to each other and display
        // the option list in listbox style, i.e. the select is [multiple], or specifies a [size].
        // See https://github.com/angular/angular.js/issues/11314 for more info.
        // This is unfortunately untestable with unit / e2e tests
        if (option.label !== element.label) {
          element.label = option.label;
          element.textContent = option.label;
        }
        if (option.value !== element.value) element.value = option.selectValue;
      }

      function addOrReuseElement(parent, current, type, templateElement) {
        var element;
        // Check whether we can reuse the next element
        if (current && lowercase(current.nodeName) === type) {
          // The next element is the right type so reuse it
          element = current;
        } else {
          // The next element is not the right type so create a new one
          element = templateElement.cloneNode(false);
          if (!current) {
            // There are no more elements so just append it to the select
            parent.appendChild(element);
          } else {
            // The next element is not a group so insert the new one
            parent.insertBefore(element, current);
          }
        }
        return element;
      }


      function removeExcessElements(current) {
        var next;
        while (current) {
          next = current.nextSibling;
          jqLiteRemove(current);
          current = next;
        }
      }


      function skipEmptyAndUnknownOptions(current) {
        var emptyOption_ = emptyOption && emptyOption[0];
        var unknownOption_ = unknownOption && unknownOption[0];

        // We cannot rely on the extracted empty option being the same as the compiled empty option,
        // because the compiled empty option might have been replaced by a comment because
        // it had an "element" transclusion directive on it (such as ngIf)
        if (emptyOption_ || unknownOption_) {
          while (current &&
                (current === emptyOption_ ||
                current === unknownOption_ ||
                current.nodeType === NODE_TYPE_COMMENT ||
                (nodeName_(current) === 'option' && current.value === ''))) {
            current = current.nextSibling;
          }
        }
        return current;
      }


      function updateOptions() {

        var previousValue = options && selectCtrl.readValue();

        options = ngOptions.getOptions();

        var groupMap = {};
        var currentElement = selectElement[0].firstChild;

        // Ensure that the empty option is always there if it was explicitly provided
        if (providedEmptyOption) {
          selectElement.prepend(emptyOption);
        }

        currentElement = skipEmptyAndUnknownOptions(currentElement);

        options.items.forEach(function updateOption(option) {
          var group;
          var groupElement;
          var optionElement;

          if (option.group) {

            // This option is to live in a group
            // See if we have already created this group
            group = groupMap[option.group];

            if (!group) {

              // We have not already created this group
              groupElement = addOrReuseElement(selectElement[0],
                                               currentElement,
                                               'optgroup',
                                               optGroupTemplate);
              // Move to the next element
              currentElement = groupElement.nextSibling;

              // Update the label on the group element
              groupElement.label = option.group;

              // Store it for use later
              group = groupMap[option.group] = {
                groupElement: groupElement,
                currentOptionElement: groupElement.firstChild
              };

            }

            // So now we have a group for this option we add the option to the group
            optionElement = addOrReuseElement(group.groupElement,
                                              group.currentOptionElement,
                                              'option',
                                              optionTemplate);
            updateOptionElement(option, optionElement);
            // Move to the next element
            group.currentOptionElement = optionElement.nextSibling;

          } else {

            // This option is not in a group
            optionElement = addOrReuseElement(selectElement[0],
                                              currentElement,
                                              'option',
                                              optionTemplate);
            updateOptionElement(optinElement.nextSibling;
          }
        });


        // Now remove all excess options and group
        Object.keys(groupMap).forEach(function(key) {
          removeExcessElements(groupMap[key].currentOptionElement);
        });
        removeExcessElements(currentElement);

        ngModelCtrl.$render();

        // Check to see if the value has changed due to the update to the options
        if (!ngModelCtrl.$isEmpty(previousValue)) {
          var nextValue = selectCtrl.readValue();
          var isNotPrimitive = ngOptions.trackBy || multiple;
          if (isNotPrimitive ? !equals(previousValue, nextValue) : previousValue !== nextValue) {
  // Deactivate the SelectController.register method to prevent
        // option directives from accidentally registering themselves
        // (and unwanted $destroy handlers etc.)
        ctrls[0].registerOption = noop;
      },
      post: ngOptionsPostLink
    }
  };
}];

/**
 * @ngdoc directive
 * @name ngPluralize
 * @restrict EA
 *
 * @description
 * `ngPluralize` is a directive that displays messages according to en-US localization rules.
 * These rules are bundled with angular.js, but can be overridden
 * (see {@link guide/i18n Angular i18n} dev guide). You configure ngPluralize directive
 * by specifying the mappings between
 * [plural categories](http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html)
 * and the strings to be displayed.
 *
 * # Plural categories and explicit number rules
 * There are two
 * [plural categories](http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html)
 * in Angular's default en-US locale: "one" and "other".
 *
 * While a plural category may match many numbers (for example, in en-US locale, "other" can match
 * any number that is not 1), an explicit number rule can only match one number. For example, the
 * explicit number rule for "3" matches the number 3. There are examples of plural categories
 * and explicit number rules throughout the rest of this documentation.
 *
 * # Configuring ngPluralize
 * You configure ngPluralize by providing 2 attributes: `count` and `when`.
 * You can also provide an optional attribute, `offset`.
 *
 * The value of the `count` attribute can be either a string or an {@link guide/expression
 * Angular expression}; these are evaluated on the current scope for its bound value.
 *
 * The `when` attribute specifies the mappings between plural categories and the actual
 * string to be displayed. The value of the attribute should be a JSON object.
 *
 * The following example shows how to configure ngPluralize:
 *
 * ```html
 * <ng-pluralize count="personCount"
                 when="{'0': 'Nobody is viewing.',
 *                      'one': '1 person is viewing.',
 *                      'other': '{} people are viewing.'}">
 * </ng-pluralize>
 *```
 *
 * In the example, `"0: Nobody is viewing."` is an explicit number rule. If you did not
 * specify this rule, 0 would be matched to the "other" category and "0 people are viewing"
 * would be shown instead of "Nobody is viewing". You can specify an explicit number rule for
 * other numbers, for example 12, so that instead of showing "12 people are viewing", you can
 * show "a dozen people are viewing".
 *
 * You can use a set of closed braces (`{}`) as a placeholder for the number that you want substituted
 * into pluralized strings. In the previous example, Angular will replace `{}` with
 * <span ng-non-bindable>`{{personCount}}`</span>. The closed braces `{}` is a placeholder
 * for <span ng-non-bindable>{{numberExpression}}</span>.
 *
 * If no rule is defined for a category, then an empty string is displayed and a warning is generated.
 * Note that some locales define more categories than `one` and `other`. For example, fr-fr defines `few` and `many`.
 *
 * # Configuring ngPluralize with offset
 * The `offset` attribute allows further customization of pluralized text, which can result in
 * a better user experience. For example, instead of the message "4 people are viewing this document",
 * you might display "John, Kate and 2 others are viewing this document".
 * The offset attribute allows you to offset a number by any desired value.
 * Let's take a look at an example:
 *
 * ```html
 * <ng-pluralize count="personCount" offset=2
 *               when="{'0': 'Nobody is viewing.',
 *                      '1': '{{person1}} is viewing.',
 *                      '2': '{{person1}} and {{person2}} are viewing.',
 *                      'one': '{{person1}}, {{person2}} and one other person are viewing.',
 *                      'other': '{{person1}}, {{person2}} and {} other people are viewing.'}">
 * </ng-pluralize>
 * ```
 *
 * Notice that we are still using two plural categories(one, other), but we added
 * three explicit number rules 0, 1 and 2.
 * When one person, perhaps John, views the document, "John is viewing" will be shown.
 * When three people view the document, no explicit number rule is found, so
 * an offset of 2 is taken off 3, and Angular uses 1 to decide the plural category.
 * In this case, plural category 'one' is matched and "John, Mary and one other person are viewing"
 * is shown.
 *
 * Note that when you specify offsets, you must provide explicit number rules for
 * numbers from 0 up to and including the offset. If you use an offset of 3, for example,
 * you must provide explicit number rules for 0, 1, 2 and 3. You must also provide plural strings for
 * plural categories "one" and "other".
 *
 * @param {string|expression} count The variable to be bound to.
 * @param {string} when The mapping between plural category to its corresponding strings.
 * @param {number=} offset Offset to deduct from the total number.
 *
 * @example
    <example module="pluralizeExample">
      <file name="index.html">
        <script>
          angular.module('pluralizeExample', [])
            .controller('ExampleController', ['$scope', function($scope) {
              $scope.person1 = 'Igor';
              $scope.person2 = 'Misko';
              $scope.personCount = 1;
            }]);
        </script>
        <div ng-controller="ExampleController">
          <label>Person 1:<input type="text" ng-model="person1" value="Igor" /></label><br/>
          <label>Person 2:<input type="text" ng-model="person2" value="Misko" /></label><br/>
          <label>Number of People:<input type="text" ng-model="personCount" value="1" /></label><br/>

          <!--- Example with simple pluralization rules for en locale --->
          Without Offset:
          <ng-pluralize count="personCount"
                        when="{'0': 'Nobody is viewing.',
                               'one': '1 person is viewing.',
                               'other': '{} people are viewing.'}">
          </ng-pluralize><br>

          <!--- Example with offset --->
          With Offset(2):
          <ng-pluralize count="personCount" offset=2
                        when="{'0': 'Nobody is viewing.',
                               '1': '{{person1}} is viewing.',
                               '2': '{{person1}} and {{person2}} are viewing.',
                               'one': '{{person1}}, {{person2}} and one other person are viewing.',
                               'other': '{{person1}}, {{person2}} and {} other people are viewing.'}">
          </ng-pluralize>
        </div>
      </file>
      <file name="protractor.js" type="protractor">
        it('should show correct pluralized string', function() {
          var withoutOffset = element.all(by.css('ng-pluralize')).get(0);
          var withOffset = element.all(by.css('ng-pluralize')).get(1);
          var countInput = element(by.model('personCount'));

          expect(withoutOffset.getText()).toEqual('1 person is viewing.');
          expect(withOffset.getText()).toEqual('Igor is viewing.');

          countInput.clear();
          countInput.sendKeys('0');

          expect(withoutOffset.getText()).toEqual('Nobody is viewing.');
          expect(withOffset.getText()).toEqual('Nobody is viewing.');

          countInput.clear();
          countInput.sendKeys('2');

          expect(withoutOffset.getText()).toEqual('2 people are viewing.');
          expect(withOffset.getText()).toEqual('Igor and Misko are viewing.');

          countInput.clear();
          countInput.sendKeys('3');

          expect(withoutOffset.getText()).toEqual('3 people are viewing.');
          expect(withOffset.getText()).toEqual('Igor, Misko and one other person are viewing.');

          countInput.clear();
          countInput.sendKeys('4');

          expect(withoutOffset.getText()).toEqual('4 people are viewing.');
          expect(withOffset.getText()).toEqual('Igor, Misko and 2 other people are viewing.');
        });
        it('should show data-bound names', function() {
          var withOffset = element.all(by.css('ng-pluralize')).get(1);
          var personCount = element(by.model('personCount'));
          var person1 = element(by.model('person1'));
          var person2 = element(by.model('person2'));
          personCount.clear();
          personCount.sendKeys('4');
          person1.clear();
          person1.sendKeys('Di');
          person2.clear();
          person2.sendKeys('Vojta');
          expect(withOffset.getText()).toEqual('Di, Vojta and 2 other people are viewing.');
        });
      </file>
    </example>
 */
var ngPluralizeDirective = ['$locale', '$interpolate', '$log', function($locale, $interpolate, $log) {
  var BRACE = /{}/g,
      IS_WHEN = /^when(Minus)?(.+)$/;

  return {
    link: function(scope, element, attr) {
      var numberExp = attr.count,
          whenExp = attr.$attr.when && element.attr(attr.$attr.when), // we have {{}} in attrs
          offset = attr.offset || 0,
          whens = scope.$eval(whenExp) || {},
          whensExpFns = {},
          startSymbol = $interp  var tmpMatch = IS_WHE         whens[whenKey] = element.attr(attr.$attr[attributeName]);
        }
      });
      forEach(whens, function(expression, key) {
        whensExpFns[key] = $interpolate(expression.replace(BRACE, braceReplacement));

      });

      scope.$watch(numberExp, function ngPluralizeWatchAction(newVal) {
        var count = parseFloat(newVal);
        var countIsNaN = isNaN(count);

        if (!countIsNaN && !(count in whens)) {
          // If an explicit number rule such as 1, 2, 3... is defined, just use it.
          // Otherwise, check it against pluralization rules in $locale service.
          count = $locale.pluralCat(count - offset);
        }

        // If both `count` and `lastCount` are NaN, we don't need to re-register a watch.
        // In JS `NaN !== NaN`, so we have to exlicitly check.
        if ((count !== lastCount) && !(countIsNaN && isNumber(lastCount) && isNaN(lastCount))) {
          watchRemover();
          var whenExpFn = whensExpFns[count];
          if (isUndefined(whenExpFn)) {
            if (newVal != null) {
              $log.debug("ngPluralize: no rule defined for '" + count + "' in " + whenExp);
       } else {
            watchRemover = scope.$watch(whenExpFn, updateElementText);
          }
          lastCount = count;
        }
      });

      function updateElementText(newText) {
        element.text(newText || '');
      }
    }
  };
}];

/**
 * @ngdoc directive
 * @name ngRepeat
 * @multiElement
 *
 * @description
 * The `ngRepeat` directive instantiates a template once per item from a collection. Each template
 * instance gets its own scope, where the given loop variable is set to the current collection item,
 * and `$index` is set to the item index or key.
 *
 * Special properties are exposed on the local scope of each template instance, including:
 *
 * | Variable  | Type            | Details                                                                     |
 * |-----------|-----------------|-----------------------------------------------------------------------------|
 * | `$index`  | {@type number}  | iterator offset of the repeated element (0..length-1)                       |
 * | `$first`  | {@type boolean} | true if the repeated element is first in the iterator.                      |
 * | `$middle` | {@type boolean} | true if the repeated element is between the first and last in the iterator. |
 * | `$last`   | {@type boolean} | true if the repeated element is last in the iterator.                       |
 * | `$even`   | {@type boolean} | true if the iterator position `$index` is even (otherwise false).           |
 * | `$odd`    | {@type boolean} | true if the iterator position `$index` is odd (otherwise false).            |
 *
 * <div class="alert alert-info">
 *   Creating aliases for these properties is possible with {@link ng.directive:ngInit `ngInit`}.
 *   This may be useful when, for instance, nesting ngRepeats.
 * </div>
 *
 *
 * # Iterating over object properties
 *
 * It is possible to get `ngRepeat` to iterate over the properties of an object using the following
 * syntax:
 *
 * ```js
 * <div ng-repeat="(key, value) in myObj"> ... </div>
 * ```
 *
 * You need to be aware that the JavaScript specification does not define the order of keys
 * returned for an object. (To mitigate this in Angular 1.3 the `ngRepeat` directive
 * used to sort the keys alphabetically.)
 *
 * Version 1.4 removed the alphabetic sorting. We now rely on the order returned by the browser
 * when running `for key in myObj`. It seems that browsers generally follow the strategy of providing
 * keys in the order in which they were defined, although there are exceptions when keys are deleted
 * and reinstated. See the [MDN page on `delete` for more info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete#Cross-browser_notes).
 *
 * If this is not desired, the recommended workaround is to convert your object into an array
 * that is sorted into the order that you prefer before providing it to `ngRepeat`.  You could
 * do this with a filter such as [toArrayFilter](http://ngmodules.org/modules/angular-toArrayFilter)
 * or implement a `$watch` on the object yourself.
 *
 *
 * # Tracking and Duplicates
 *
 * `ngRepeat` uses {@link $rootScope.Scope#$watchCollection $watchCollection} to detect changes in
 * the collection. When a change happens, ngRepeat then makes the corresponding changes to the DOM:
 *
 * * When an item is added, a new instance of the template is added to the DOM.
 * * When an item is removed, its template instance is removed from the DOM.
 * * When items are reordered, their respective templates are reordered in the DOM.
 *
 * To minimize creation of DOM elements, `ngRepeat` uses a function
 * to "keep track" of all items in the collection and their corresponding DOM elements.
 * For example, if an item is added to the collection, ngRepeat will know that all other items
 * already have DOM elements, and will not re-render them.
 *
 * The default tracking function (which tracks items by their identity) does not allow
 * duplicate items in arrays. This is because when there are duplicates, it is not possible
 * to maintain a one-to-one mapping between collection items and DOM elements.
 *
 * If you do need to repeat duplicate items, you can substitute the default tracking behavior
 * with your own using the `track by` expression.
 *
 * For example, you may track items by the index of each item in the collection, using the
 * special scope property `$index`:
 * ```html
 *    <div ng-repeat="n in [42, 42, 43, 43] track by $index">
 *      {{n}}
 *    </div>
 * ```
 *
 * You may also use arbitrary expressions in `track by`, including references to custom functions
 * on the scope:
 * ```html
 *    <div ng-repeat="n in [42, 42, 43, 43] track by myTrackingFunction(n)">
 *      {{n}}
 *    </div>
 * ```
 *
 * <div class="alert alert-success">
 * If you are working with objects that have an identifier property, you should track
 * by the identifier instead of the whole object. Should you reload your data later, `ngRepeat`
 * will not have to rebuild the DOM elements for items it has already rendered, even if the
 * JavaScript objects in the collection have been substituted for new ones. For large collections,
 * this signifincantly improves rendering performance. If you don't have a unique identifier,
 * `track by $index` can also provide a performance boost.
 * </div>
 * ```html
 *    <div ng-repeat="model in collection track by model.id">
 *      {{model.name}}
 *    </div>
 * ```
 *
 * When no `track by` expression is provided, it is equivalent to tracking by the built-in
 * `$id` function, which tracks items by their identity:
 * ```html
 *    <div ng-repeat="obj in collection track by $id(obj)">
 *      {{obj.prop}}
 *    </div>
 * ```
 *
 * <div class="alert alert-warning">
 * **Note:** `track by` must always be the last expression:
 * </div>
 * ```
 * <div ng-repeat="model in collection | orderBy: 'id' as filtered_result track by model.id">
 *     {{model.name}}
 * </div>
 * ```
 *
 * # Special repeat start and end points
 * To repeat a series of elements instead of just one parent element, ngRepeat (as well as other ng directives) supports extending
 * the range of the repeater by defining explicit start and end points by using **ng-repeat-start** and **ng-repeat-end** respectively.
 * The **ng-repeat-start** directive works the same as **ng-repeat**, but will repeat all the HTML code (including the tag it's defined on)
 * up to and including the ending HTML tag where **ng-repeat-end** is placed.
 *
 * The example below makes use of this feature:
 * ```html
 *   <header ng-repeat-start="item in items">
 *     Header {{ item }}
 *   </header>
 *   <div class="body">
 *     Body {{ item }}
 *   </div>
 *   <footer ng-repeat-end>
 *     Footer {{ item }}
 *   </footer>
 * ```
 *
 * And with an input of {@type ['A','B']} for the items variable in the example above, the output will evaluate to:
 * ```html
 *   <header>
 *     Header A
 *   </header>
 *   <div class="body">
 *     Body A
 *   </div>
 *   <footer>
 *     Footer A
 *   </footer>
 *   <header>
 *     Header B
 *   </header>
 *   <div class="body">
 *     Body B
 *   </div>
 *   <footer>
 *     Footer B
 *   </footer>
 * ```
 *
 * The custom start and end points for ngRepeat also support all other HTML directive syntax flavors provided in AngularJS (such
 * as **data-ng-repeat-start**, **x-ng-repeat-start** and **ng:repeat-start**).
 *
 * @animations
 * **.enter** - when a new item is added to the list or when an item is revealed after a filter
 *
 * **.leave** - when an item is removed from the list or when an item is filtered out
 *
 * **.move** - when an adjacent item is filtered out causing a reorder or when the item contents are reordered
 *
 * @element ANY
 * @scope
 * @priority 1000
 * @param {repeat_expression} ngRepeat The expression indicating how to enumerate a collection. These
 *   formats are currently supported:
 *
 *   * `variable in expression` – where variable is the user defined loop variable and `expression`
 *     is a scope expression giving the collection to enumerate.
 *
 *     For example: `album in artist.albums`.
 *
 *   * `(key, value) in expression` – where `key` and `value` can be any user defined identifiers,
 *     and `expression` is the scope expression giving the collection to enumerate.
 *
 *     For example: `(name, age) in {'adam':10, 'amalie':12}`.
 *
 *   * `variable in expression track by tracking_expression` – You can also provide an optional tracking expression
 *     which can be used to associate the objects in the collection with the DOM elements. If no tracking expression
 *     is specified, ng-repeat associates elements by identity. It is an error to have
 *     more than one tracking expression value resolve to the same key. (This would mean that two distinct objects are
 *     mapped to the same DOM element, which is not possible.)
 *
 *     Note that the tracking expression must come last, after any filters, and the alias expression.
 *
 *     For example: `item in items` is equivalent to `item in items track by $id(item)`. This implies that the DOM elements
 *     will be associated by item identity in the array.
 *
 *     For example: `item in items track by $id(item)`. A built in `$id()` function can be used to assign a unique
 *     `$$hashKey` property to each item in the array. This property is then used as a key to associated DOM elements
 *     with the corresponding item in the array by identity. Moving the same object in array would move the DOM
 *     element in the same way in the DOM.
 *
 *     For example: `item in items track by item.id` is a typical pattern when the items come from the database. In this
 *     case the object identity does not matter. Two objects are considered equivalent as long as their `id`
 *     property is same.
 *
 *     For example: `item in items | filter:searchText track by item.id` is a pattern that might be used to apply a filter
 *     to items in conjunction with a tracking expression.
 *
 *   * `variable in expression as alias_expression` – You can also provide an optional alias expression which will then store the
 *     intermediate results of the repeater after the filters have been applied. Typically this is used to render a special message
 *     when a filter is active on the repeater, but the filtered result set is empty.
 *
 *     For example: `item in items | filter:x as results` will store the fragment of the repeated items as `results`, but only after
 *     the items have been processed through the filter.
 *
 *     Please note that `as [variable name] is not an operator but rather a part of ngRepeat micro-syntax so it can be used only at the end
 *     (and not as operator, inside an expression).
 *
 *     For example: `item in items | filter : x | orderBy : order | limitTo : limit as results` .
 *
 * @example
 * This example initializes the scope to a list of names and
 * then uses `ngRepeat` to display every person:
  <example module="ngAnimate" deps="angular-animate.js" animations="true">
    <file name="index.html">
      <div ng-init="friends = [
        {name:'John', age:25, gender:'boy'},
        {name:'Jessie', age:30, gender:'girl'},
        {name:'Johanna', age:28, gender:'girl'},
        {name:'Joy', age:15, gender:'girl'},
        {name:'Mary', age:28, gender:'girl'},
        {name:'Peter', age:95, gender:'boy'},
        {name:'Sebastian', age:50, gender:'boy'},
        {name:'Erika', age:27, gender:'girl'},
        {name:'Patrick', age:40, gender:'boy'},
        {name:'Samantha', age:60, gender:'girl'}
      ]">
        I have {{friends.length}} friends. They are:
        <input type="search" ng-model="q" placeholder="filter friends..." aria-label="filter friends" />
        <ul class="example-animate-container">
          <li class="animate-repeat" ng-repeat="friend in friends | filter:q as results">
            [{{$index + 1}}] {{friend.name}} who is {{friend.age}} years old.
          </li>
          <li class="animate-repeat" ng-if="results.length == 0">
            <strong>No results found...</strong>
          </li>
        </ul>
      </div>
    </file>
    <file name="animations.css">
      .example-animate-container {
        background:white;
        border:1px solid black;
        list-style:none;
        margin:0;
        padding:0 10px;
      }

      .animate-repeat {
        line-height:40px;
        list-style:none;
        box-sizing:border-box;
      }

      .animate-repeat.ng-move,
      .animate-repeat.ng-enter,
      .animate-repeat.ng-leave {
        transition:all linear 0.5s;
      }

      .animate-repeat.ng-leave.ng-leave-active,
      .animate-repeat.ng-move,
      .animate-repeat.ng-enter {
        opacity:0;
        max-height:0;
      }

      .animate-repeat.ng-leave,
      .animate-repeat.ng-move.ng-move-active,
      .animate-repeat.ng-enter.ng-enter-active {
        opacity:1;
        max-height:40px;
      }
    </file>
    <file name="protractor.js" type="protractor">
      var friends = element.all(by.repeater('friend in friends'));

      it('should render initial data set', function() {
        expect(friends.count()).toBe(10);
        expect(friends.get(0).getText()).toEqual('[1] John who is 25 years old.');
        expect(friends.get(1).getText()).toEqual('[2] Jessie who is 30 years old.');
        expect(friends.last().getText()).toEqual('[10] Samantha who is 60 years old.');
        expect(element(by.binding('friends.length')).getText())
            .toMatch("I have 10 friends. They are:");
      });

       it('should update repeater when filter predicate changes', function() {
         expect(friends.count()).toBe(10);

         element(by.model('q')).sendKeys('ma');

         expect(friends.count()).toBe(2);
         expect(friends.get(0).getText()).toEqual('[1] Mary who is 28 years old.');
         expect(friends.last().getText()).toEqual('[2] Samantha who e.$first = (index === 0);
    scope.$middle = .$odd = !(scope.$even = (index&1) === 0);
    // jshint bitwise: true
  };

  var getBlockStart = function(block) {
    return block.clone[0];
  };

  var getBlockEnd = function(block) {
    return block.clone[block.clone.length - 1];
  };


  return {
    restrict: 'A',
    multiElement: true,
    transclude: 'element',
    priority: 1000,
    terminal: true,
    $$tlb: true,
    compile: function ngRepeatCompile($element, $attr) {
      var expression = $attr.ngRepeat;
      var ngRepeatEndComment = document.createComment(' end ngRepeat: ' + expression + ' ');

      var match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);

      if (!match) {
        throw ngRepeatMinErr('iexp', "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",
            expression);
      }

      var lhs = match[1];
      var rhs = match[2];
      var aliasAs = match[3];
      var trackByExp = match[4];

      match = lhs.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);

      if (!match) {
        throw ngRepeatMinErr('iidexp', "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",
            lhs);
      }
      var valueIdentifier = match[3] || match[1];
      var keyIdentifier = match[2];

      if (aliasAs && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(aliasAs) ||
          /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(aliasAs))) {
        throw ngRepeatMinErr('badident', "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.",
          aliasAs);
   , trackByIdObjFn;
      vakByExp) {
        trackByExpGetter = $parse(trackByExp);
      } else {
        trackByIdArrayFn = function(key, value) {
          return hashKey(valufunctions
            if (keyIdentifier) hashFnLocals[keyIdentifier] = key;
            hashFnLocals[valueIdentifier] = value;
            hashFnLocals.$index = index;
            return trackByExpGetter($scope, hashFnLocals);
          };
        }

        // Store a list of elements from previous run. This is a hash where key is the item from the
        // iterator, and the value is objects with following properties.
        //   - scope: bound scope
        //   - element: previous element.
        //   - index: position
        //
        // We are using no-proto object so that we don't need to guard against inherited props via
        // hasOwnProperty.
        var lastBlockMap = createMap();

        //watch props
        $scope.$watchCollection(rhs, function ngRepeatAction(collection) {
          var index, length,
              previousNode = $element[0],     // node that cloned nodes should be inserted after
                                              // initialized to the comment node anchor
              nextNode,
              // Same as lastBlockMap but it has the current state. It will become the
              // lastBlockMap on the next iteration.
              nextBlockMap = createMap(),
              collectionLength,
              key, value, // key/value of iteration
              trackById,
              trackByIdFn,
              collectionKeys,
              block,       // last object information {scope, element, id}
              nextBlockOrder,
              elementsToRemove;

          if (aliasAs) {
            $scope[aliasAs] = collection;
          }

          if (isArrayLike(collection)) {
            collectionKeys = collection;
            trackByIdFn = trackByIdExpFn || trackByIdArrayFn;
          } else {
            trackByIdFn = trackByIdExpFn || trackByIdObjFn;
            // if object, extract keys, in enumeration order, unsorted
            collectionKeys = [];
            for (var itemKey in collection) {
              if (hasOwnProperty.call(collection, itemKey) && itemKey.charAt(0) !== '$') {
                collectionKeys.push(itemKey);
              }
            }
          }

          collectionLength = collectionKeys.length;
          nextBlockOrder = new Array(collectionLength);

          // locate existing items
          for (index = 0; index < collectionLength; index++) {
            key = (collection === collectionKeys) ? index : collectionKeys[index];
            value = collection[key];
            trackById = trackByIdFn(key, value, index);
            if (lastBlockMap[trackById]) {
              // found previously seen block
              block = lastBlockMap[trackById];
              delete lastBlockMap[trackById];
              nextBlorackById]) {
              // if collision detected. restore lastBlockMap and throw an error
              forEach(nextBlockOrder, function(block) {
                if (block && block.scope) lastBlockMap[block.id] = block;
              });
              throw ngRepeatMinErr('dupes',
                  "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",
                  expression, trackById, value);
            } else {
              // new never before seen block
              nextBlockOrder[index] = {id: trackById, scope: undefined, clone: undefined};
              nextBlockMap[trackById] = true;
            }
          }

          // remove leftover items
          for (var blockKey in lastBlockMap) {
            block = lastBlockMap[blockKey];
            elementsToRemove = getBlockNodes(block.clone);
            $animate.leave(elementsToRemove);
            if (elementsToRemove[0].parentNode) {
              // if the element was not removed yet because of pending animation, mark it as deleted
              // so that we can ignore it later
              for (index = 0, length = elementsToRemove.length; index < length; index++) {
                elementsToRemove[index][NG_REMOVED] = true;
              }
            }
            block.scope.$destroy();
          }

          // we are not using forEach for perf reasons (trying to avoid #call)
          for (index = 0; index < collectionLength; index++) {
            key = (collection === collectionKeys) ? index : collectionKeys[index];
            value = collection[key];
            block = nextBlockOrder[index];

            if (block.scope) {
              // if we have already seen this object, then we need to reuse the
              // associated scope/element

              nextNode = previousNode;

              // skip nodes that are already pending removal via leave animation
              do {
                nextNode = nextNode.nextSibling;
              } while (nextNode && nextNode[NG_REMOVED]);

              if (getBlockStart(block) != nextNode) {
                // existing item which got moved
                $animate.move(getBlockNodes(block.clone), null, previousNode);
              }
              prevwhen its template arrives.
                block.clone = clone;
                nextBlockMap[block.id] = block;
                updateScope(block.scope, index, valueIdentifier, value, keyIdentifier, key, collectionLength);
              });
            }
          }
          lastBlockMap = nextBlockMap;
        });
      };
    }
  };
}];

var NG_HIDE_CLASS = 'ng-hide';
var NG_HIDE_IN_PROGRESS_CLASS = 'ng-hide-animate';
/**
 * @ngdoc directive
 * @name ngShow
 * @multiElement
 *
 * @description
 * The `ngShow` directive shows or hides the given HTML element based on the expression
 * provided to the `ngShow` attribute. The element is shown or hidden by removing or adding
 * the `.ng-hide` CSS class onto the element. The `.ng-hide` CSS class is predefined
 * in AngularJS and sets the display style to none (using an !important flag).
 * For CSP mode please add `angular-csp.css` to your html file (see {@link ng.directive:ngCsp ngCsp}).
 *
 * ```html
 * <!-- when $scope.myValue is truthy (element is visible) -->
 * <div ng-show="myValue"></div>
 *
 * <!-- when $scope.myValue is falsy (element is hidden) -->
 * <div ng-show="myValue" class="ng-hide"></div>
 * ```
 *
 * When the `ngShow` expression evaluates to a falsy value then the `.ng-hide` CSS class is added to the class
 * attribute on the element causing it to become hidden. When truthy, the `.ng-hide` CSS class is removed
 * from the element causing the element not to appear hidden.
 *
 * ## Why is !important used?
 *
 * You may be wondering why !important is used for the `.ng-hide` CSS class. This is because the `.ng-hide` selector
 * can be easily overridden by heavier selectors. For example, something as simple
 * as changing the display style on a HTML list item would make hidden elements appear visible.
 * This also becomes a bigger issue when dealing with CSS frameworks.
 *
 * By using !important, the show and hide behavior will work as expected despite any clash between CSS selector
 * specificity (when !important isn't used with any conflicting styles). If a developer chooses to override the
 * styling to change how to hide an element then it is just a matter of using !important in their own CSS code.
 *
 * ### Overriding `.ng-hide`
 *
 * By default, the `.ng-hide` class will style the element with `display: none!important`. If you wish to change
 * the hide behavior with ngShow/ngHide then this can be achieved by restating the styles for the `.ng-hide`
 * class CSS. Note that the selector that needs to be used is actually `.ng-hide:not(.ng-hide-animate)` to cope
 * with extra animation classes that can be added.
 *
 * ```css
 * .ng-hide:not(.ng-hide-animate) {
 *   /&#42; this is just another form of hiding an element &#42;/
 *   display: block!important;
 *   position: absolute;
 *   top: -9999px;
 *   left: -9999px;
 * }
 * ```
 *
 * By default you don't need to override in CSS anything and the animations will work around the display style.
 *
 * ## A note about animations with `ngShow`
 *
 * Animations in ngShow/ngHide work with the show and hide events that are triggered when the directive expression
 * is true and false. This system works like the animation system present with ngClass except that
 * you must also include the !important flag to override the display property
 * so that you can perform an animation when the element is hidden during the time of the animation.
 *
 * ```css
 * //
 * //a working example can be found at the bottom of this page
 * //
 * .my-element.ng-hide-add, .my-element.ng-hide-remove {
 *   /&#42; this is required as of 1.3x to properly
 *      apply all styling in a show/hide animation &#42;/
 *   transition: 0s linear all;
 * }
 *
 * .my-element.ng-hide-add-active,
 * .my-element.ng-hide-remove-active {
 *   /&#42; the transition is defined in the active class &#42;/
 *   transition: 1s linear all;
 * }
 *
 * .my-element.ng-hide-add { ... }
 * .my-element.ng-hide-add.ng-hide-add-active { ... }
 * .my-element.ng-hide-remove { ... }
 * .my-element.ng-hide-remove.ng-hide-remove-active { ... }
 * ```
 *
 * Keep in mind that, as of AngularJS version 1.3.0-beta.11, there is no need to change the display
 * property to block during animation states--ngAnimate will handle the style toggling automatically for you.
 *
 * @animations
 * addClass: `.ng-hide` - happens after the `ngShow` expression evaluates to a truthy value and the just before contents are set to visible
 * removeClass: `.ng-hide` - happens after the `ngShow` expression evaluates to a non truthy value and just before the contents are set to hidden
 *
 * @element ANY
 * @param {expression} ngShow If the {@link guide/expression expression} is truthy
 *     then the element is shown or hidden respectively.
 *
 * @example
  <example module="ngAnimate" deps="angular-animate.js" animations="true">
    <file name="index.html">
      Click me: <input type="checkbox" ng-model="checked" aria-label="Toggle ngHide"><br/>
      <div>
        Show:
        <div class="check-element animate-show" ng-show="checked">
          <span class="glyphicon glyphicon-thumbs-up"></span> I show up when your checkbox is checked.
        </div>
      </div>
      <div>
        Hide:
        <div class="check-element animate-show" ng-hide="checked">
          <span class="glyphicon glyphicon-thumbs-down"></span> I hide when your checkbox is checked.
        </div>
      </div>
    </file>
    <file name="glyphicons.css">
      @import url(../../components/bootstrap-3.1.1/css/bootstrap.css);
    </file>
    <file name="animations.css">
      .animate-show {
        line-height: 20px;
        opacity: 1;
        padding: 10px;
        border: 1px solid black;
        background: white;
      }

      .animate-show.ng-hide-add, .animate-show.ng-hide-remove {
        transition: all linear 0.5s;
      }

      .animate-show.ng-hide {
        line-height: 0;
        opacity: 0;
        padding: 0 10px;
      }

      .check-element {
        padding: 10px;
        border: 1px solid black;
        background: white;
      }
    </file>
    <file name="protractor.js" type="protractor">
      var thumbsUp = element(by.css('span.glyphicon-thumbs-up'));
      var thumbsDown = element(by.css('span.glyphicon-thumbs-down'));

      it('should check ng-show / ng-hide', function() {
        expect(thumbsUp.isDisplayed()).toBeFalsy();
        expect(thumbsDown.isDisplayed()).toBeTruthy();

        element(by.model('checked')).click();

        expect(thumbsUp.isDisplayed()).toBeTruthy();
        expect(thumbsDown.isDisplayed()).toBeFalsy();
      });
    </file>
  </example>
 */
var ngShowDirective = ['$animate', function($animate) {
  return {
    restrict: 'A',
    multiElement: true,
    link: function(scope, element, attr) {
      scope.$watch(attr.ngShow, function ngShowWatchAction(value) {
        // we're adding a temporary, animation-specific class for ng-hide since this way
        // we can control when the element is actually displayed on screen without having
        // to have a global/greedy CSS selector that breaks when other animations are run.
        // Read: https://github.com/angular/angular.js/issues/9103#issuecomment-58335845
        $animate[value ? 'removeClass' : 'addClass'](element, NG_HIDE_CLASS, {
          tempClasses: NG_HIDE_IN_PROGRESS_CLASS
        });
      });
    }
  };
}];


/**
 * @ngdoc directive
 * @name ngHide
 * @multiElement
 *
 * @description
 * The `ngHide` directive shows or hides the given HTML element based on the expression
 * provided to the `ngHide` attribute. The element is shown or hidden by removing or adding
 * the `ng-hide` CSS class onto the element. The `.ng-hide` CSS class is predefined
 * in AngularJS and sets the display style to none (using an !important flag).
 * For CSP mode please add `angular-csp.css` to your html file (see {@link ng.directive:ngCsp ngCsp}).
 *
 * ```html
 * <!-- when $scope.myValue is truthy (element is hidden) -->
 * <div ng-hide="myValue" class="ng-hide"></div>
 *
 * <!-- when $scope.myValue is falsy (element is visible) -->
 * <div ng-hide="myValue"></div>
 * ```
 *
 * When the `ngHide` expression evaluates to a truthy value then the `.ng-hide` CSS class is added to the class
 * attribute on the element causing it to become hidden. When falsy, the `.ng-hide` CSS class is removed
 * from the element causing the element not to appear hidden.
 *
 * ## Why is !important used?
 *
 * You may be wondering why !important is used for the `.ng-hide` CSS class. This is because the `.ng-hide` selector
 * can be easily overridden by heavier selectors. For example, something as simple
 * as changing the display style on a HTML list item would make hidden elements appear visible.
 * This also becomes a bigger issue when dealing with CSS frameworks.
 *
 * By using !important, the show and hide behavior will work as expected despite any clash between CSS selector
 * specificity (when !important isn't used with any conflicting styles). If a developer chooses to override the
 * styling to change how to hide an element then it is just a matter of using !important in their own CSS code.
 *
 * ### Overriding `.ng-hide`
 *
 * By default, the `.ng-hide` class will style the element with `display: none!important`. If you wish to change
 * the hide behavior with ngShow/ngHide then this can be achieved by restating the styles for the `.ng-hide`
 * class in CSS:
 *
 * ```css
 * .ng-hide {
 *   /&#42; this is just another form of hiding an element &#42;/
 *   display: block!important;
 *   position: absolute;
 *   top: -9999px;
 *   left: -9999px;
 * }
 * ```
 *
 * By default you don't need to override in CSS anything and the animations will work around the display style.
 *
 * ## A note about animations with `ngHide`
 *
 * Animations in ngShow/ngHide work with the show and hide events that are triggered when the directive expression
 * is true and false. This system works like the animation system present with ngClass, except that the `.ng-hide`
 * CSS class is added and removed for you instead of your own CSS class.
 *
 * ```css
 * //
 * //a working example can be found at the bottom of this page
 * //
 * .my-element.ng-hide-add, .my-element.ng-hide-remove {
 *   transition: 0.5s linear all;
 * }
 *
 * .my-element.ng-hide-add { ... }
 * .my-element.ng-hide-add.ng-hide-add-active { ... }
 * .my-element.ng-hide-remove { ... }
 * .my-element.ng-hide-remove.ng-hide-remove-active { ... }
 * ```
 *
 * Keep in mind that, as of AngularJS version 1.3.0-beta.11, there is no need to change the display
 * property to block during animation states--ngAnimate will handle the style toggling automatically for you.
 *
 * @animations
 * removeClass: `.ng-hide` - happens after the `ngHide` expression evaluates to a truthy value and just before the contents are set to hidden
 * addClass: `.ng-hide` - happens after the `ngHide` expression evaluates to a non truthy value and just before the contents are set to visible
 *
 * @element ANY
 * @param {expression} ngHide If the {@link guide/expression expression} is truthy then
 *     the element is shown or hidden respectively.
 *
 * @example
  <example module="ngAnimate" deps="angular-animate.js" animations="true">
    <file name="index.html">
      Click me: <input type="checkbox" ng-model="checked" aria-label="Toggle ngShow"><br/>
      <div>
        Show:
        <div class="check-element animate-hide" ng-show="checked">
          <span class="glyphicon glyphicon-thumbs-up"></span> I show up when your checkbox is checked.
        </div>
      </div>
      <div>
        Hide:
        <div class="check-element animate-hide" ng-hide="checked">
          <span class="glyphicon glyphicon-thumbs-down"></span> I hide when your checkbox is checked.
        </div>
      </div>
    </file>
    <file name="glyphicons.css">
      @import url(../../components/bootstrap-3.1.1/css/bootstrap.css);
    </file>
    <file name="animations.css">
      .animate-hide {
        transition: all linear 0.5s;
        line-height: 20px;
        opacity: 1;
        padding: 10px;
        border: 1px solid black;
        background: white;
      }

      .animate-hide.ng-hide {
        line-height: 0;
        opacity: 0;
        padding: 0 10px;
      }

      .check-element {
        padding: 10px;
        border: 1px solid black;
        background: white;
      }
    </file>
    <file name="protractor.js" type="protractor">
      var thumbsUp = element(by.css('span.glyphicon-thumbs-up'));
      var thumbsDown = element(by.css('span.glyphicon-thumbs-down'));

      it('should check ng-show / ng-hide', function() {
        expect(thumbsUp.isDisplayed()).toBeFalsy();
        expect(thumbsDown.isDisplayed()).toBey we add and
        // remove a temporary class for the show/hide animation
        $animate[value ? 'addClass' : 'removeClass'](element,NG_HIDE_CLASS, {
          tempClasses: NG_HIDE_IN_PROGRESS_CLASS
        });
      });
    }
  };
}];

/**
 * @ngdoc directive
 * @name ngStyle
 * @restrict AC
 *
 * @description
 * The `ngStyle` directive allows you to set CSS style on an HTML element conditionally.
 *
 * @element ANY
 * @param {expression} ngStyle
 *
 * {@link guide/expression Expression} which evals to an
 * object whose keys are CSS style names and values are corresponding values for those CSS
 * keys.
 *
 * Since some CSS style names are not valid keys for an object, they must be quoted.
 * See the 'background-color' style in the example below.
 *
 * @example
   <example>
     <file name="index.html">
        <input type="button" value="set color" ng-click="myStyle={color:'red'}">
        <input type="button" value="set background" ng-click="myStyle={'background-color':'blue'}">
        <input type="button" value="clear" ng-click="myStyle={}">
        <br/>
        <span ng-style="myStyle">Sample Text</span>
        <pre>myStyle={{myStyle}}</pre>
     </file>
     <file name="style.css">
       span {
         color: black;
       }
     </file>
     <file name="protractor.js" type="protractor">
       var colorSpan = element(by.css('span'));

       it('should check ng-style', function() {
         expect(colorSpan.getCssValue('color')).toBe('rgba(0, 0, 0, 1)');
         element(by.css('input[value=\'set color\']')).click();
         expect(colorSpan.getCssValue('colorunction ngStyleWatchAction(newStyles, oldStyles) {
    if (oldStyles && (newStyles !== oldStyles)) {
      forEach(oldStyles, function(val, style) { element.css(style, '');});
    }
    if (newStyles) element.css(newStyles);
  }, true);
});

/**
 * @ngdoc directive
 * @name ngSwitch
 * @restrict EA
 *
 * @description
 * The `ngSwitch` directive is used to conditionally swap DOM structure on your template based on a scope expression.
 * Elements within `ngSwitch` but without `ngSwitchWhen` or `ngSwitchDefault` directives will be preserved at the location
 * as specified in the template.
 *
 * The directive itself works similar to ngInclude, however, instead of downloading template code (or loading it
 * from the template cache), `ngSwitch` simply chooses one of the nested elements and makes it visible based on which element
 * matches the value obtained from the evaluated expression. In other words, you define a container element
 * (where you place the directive), place an expression on the **`on="..."` attribute**
 * (or the **`ng-switch="..."` attribute**), define any inner elements inside of the directive and place
 * a when attribute per element. The when attribute is used to inform ngSwitch which element to display when the on
 * expression is evaluated. If a matching expression is not found via a when attribute then an element with the default
 * attribute is displayed.
 *
 * <div class="alert alert-info">
 * Be aware that the attribute values to match against cannot be expressions. They are interpreted
 * as literal string values to match against.
 * For example, **`ng-switch-when="someVal"`** will match against the string `"someVal"` not against the
 * value of the expression `$scope.someVal`.
 * </div>

 * @animations
 * enter - happens after the ngSwitch contents change and the matched child element is placed inside the container
 * leave - happens just after the ngSwitch contents change and just before the former contents are removed from the DOM
 *
 * @usage
 *
 * ```
 * <ANY ng-switch="expression">
 *   <ANY ng-switch-when="matchValue1">...</ANY>
 *   <ANY ng-switch-when="matchValue2">...</ANY>
 *   <ANY ng-switch-default>...</ANY>
 * </ANY>
 * ```
 *
 *
 * @scope
 * @priority 1200
 * @param {*} ngSwitch|on expression to match against <code>ng-switch-when</code>.
 * On child elements add:
 *
 * * `ngSwitchWhen`: the case statement to match against. If match then this
 *   case will be displayed. If the same match appears multiple times, all the
 *   elements will be displayed.
 * * `ngSwitchDefault`: the default case when no other case match. If there
 *   are multiple default cases, all of them will be displayed when no other
 *   case match.
 *
 *
 * @example
  <example module="switchExample" deps="angular-animate.js" animations="true">
    <file name="index.html">
      <div ng-controller="ExampleController">
        <select ng-model="selection" ng-options="item for item in items">
        </select>
        <code>selection={{selection}}</code>
        <hr/>
        <div class="animate-switch-container"
          ng-switch on="selection">
            <div class="animate-switch" ng-switch-when="settings">Settings Div</div>
            <div class="animate-switch" ng-switch-when="home">Home Span</div>
            <div class="animate-switch" ng-switch-default>default</div>
        </div>
      </div>
    </file>
    <file name="script.js">
      angular.module('switchExample', ['ngAnimate'])
        .controller('ExampleController', ['$scope', function($scope) {
          $scope.items = ['settings', 'home', 'other'];
          $scope.selection = $scope.items[0];
        }]);
    </file>
    <file name="animations.css">
      .animate-switch-container {
        position:relative;
        background:white;
        border:1px solid black;
        height:40px;
        overflow:hidden;
      }

      .animate-switch {
        padding:10px;
      }

      .animate-switch.ng-animate {
        transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;

        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
      }

      .animate-switch.ng-leave.ng-leave-active,
      .animate-switch.ng-enter {
        top:-50px;
      }
      .animate-switch.ng-leave,
      .animate-switch.ng-enter.ng-enter-active {
        top:0;
      }
    </file>
    <file name="protractor.js" type="protractor">
      var switchElem = element(by.css('[ng-switch]'));
      var select = element(by.model('selection'));

      it('should start in settings', function() {
        expect(switchElem.getText()).toMatch(/Settings Div/);
      });
      it('should change to home', function() {
        select.all(by.css('option')).get(1).click();
        expect(switchElem.getText()).toMatch(/Home Span/);
      });
      it('should select default', function() {
        select.all(by.css('option')).get(2).click();
        expect(switchElem.getText()
var ngSwitcd ngSwitchWhen: ');
              var block = { clone: caseElement };

              selectedElements.push(block);
              $animate.enter(caseEunction(scope, element, attrs, ctrl, $transclude) {
    ctrl.cases['!' + attrs.ngSwitchWhen] = (ctrl.cases['!' + attrs.ngSwitchWhen] || []);
    ct: 1200,
  require: '^ngSwitch',
  multiElement: true,
  link: function(scope, element, attr, ctrl, $transclude) {
    ctrl.cases['?'] = (ctrl.cases['?'] || []);
    ctrl.cases['?'].push({ transclude: $transclude, element: element });
   }
});

/**
 * @ngdoc directive
 * @name ngTransclude
 * @restrict EAC
 *
 * @description
 * Directive that marks the insertion point for the transcluded DOM of the nearest parent directive that uses transclusion.
 *
 * Any existing content of the element that this directive is placed on will be removed before the transcluded content is inserted.
 *
 * @element ANY
 *
 * @example
   <example module="transcludeExample">
     <file name="index.html">
       <script>
         angular.module('transcludeExample', [])
          .directive('pane', function(){
             return {
               restrict: 'E',
               transclude: true,
               scope: { title:'@' },
               template: '<div style="border: 1px solid black;">' +
                           '<div style="background-color: gray">{{title}}</div>' +
                           '<ng-transclude></ng-transclude>' +
                         '</div>'
             };
         })
         .controller('ExampleController', ['$scope', function($scope) {
           $scope.title = 'Lorem Ipsum';
           $scope.text = 'Neque porro quisquam est qui dolorem ipsum quia dolor...';
         }]);
       </script>
       <div ng-controller="ExampleController">
         <input ng-model="title" aria-label="title"> <br/>
         <textarea ng-model="text" aria-label="text"></textarea> <br/>
         <pane title="{{title}}">{{text}}</pane>
       </div>
     </file>
     <file name="protractor.js" type="protractor">
        it('should have transcluded', function() {
          var titleElement = element(by.model('title'));
          titleElement.clear();
          titleElement.sendKeys('TITLE');
          var textElement = element(by.model('text'));
          textElement.clear();
          textElement.sendKeys('TEXT');
          expect(elementlate! ' +
       'No parent directive that requires a transclusion found. ' +
       'Element: {0}',
       startingTag($element));
    }

    $transclude(function(clone) {
      $element.empty();
      $element.append(clone);
    });
  }
});

/**
 * @ngdoc directive
 * @name script
 * @restrict E
 *
 * @description
 * Load the content of a `<script>` element into {@link ng.$templateCache `$templateCache`}, so that the
 * template can be used by {@link ng.directive:ngInclude `ngInclude`},
 * {@link ngRoute.directive:ngView `ngView`}, or {@link guide/directive directives}. The type of the
 * `<script>` element must be specified as `text/ng-template`, and a cache name for the template must be
 * assigned through the element's `id`, which can then be used as a directive's `templateUrl`.
 *
 * @param {string} type Must be set to `'text/ng-template'`.
 * @param {string} id Cache name of the template.
 *
 * @example
  <example>
    <file name="index.html">
      <script type="text/ng-template" id="/tpl.html">
        Content of the template.
      </script>

      <a ng-click="currentTpl='/tpl.html'" id="tpl-link">Load inlined template</a>
      <div id="tpl-content" ng-include src="currentTpl"></div>
    </file>
    <file name="protractor.js" type="protractor">
      it('should load template defined inside script erminal: true,
    compile: function(element, attr) {
      if (attr.type == 'text/ng-template') {
        var templateUrl = attr.id,
            text = element[0].text;

        $templateCache.put(templateUrl, text);
      }
    }
  };
}];

var noopNgModelController = { $setViewValue: noop, $render: noop };

function chromeHack(optionElement) {
  // Workaround for https://code.google.com/p/chromium/issues/detail?id=381459
  // Adding an <option selected="selected"> element to a <select required="required"> should
  // automatically select the new element
  if (optionElement[0].hasAttribute('selected')) {
    optionElement[0].selected = true;
  }
}

/**
 * @ngdoc type
 * @name  select.SelectController
 * @description
 * The controller for the `<select>` directive. This provides support for reading
 * and writing the selected value(s) of the control and also coordinates dynamically
 * added `<option>` elements, perhaps by an `ngRepeat` directive.
 */
var SelectController =
        ['$element', '$scope', '$attrs', function($element, $scope, $attrs) {

  var self = this,
      optionsMap = new HashMap();

  // If the ngModel doesn't get provided then provide a dummy noop version to prevent errors
  self.ngModelCtrl = noopNgModelController;

  // The "unknown" option is one that is prepended to the list if the viewValue
  // does not match any of the options. When it is rendered the value of the unknown
  // option is '? XXX ?' where XXX is the hashKey of the value that is not known.
  //
  // We can't just jqLite('<option>') since jqLite is not smart enough
  // to create it in <select> and IE barfs otherwise.
  self.unknownOption = jqLite(document.createElement('option'))repend(self.unknownOption);
    e unknown option so that we don't do work when the whole select is being destroyed
    self.renderUnknownOption = noop;
  });

  self.removeUnknownOption = function() {
    if (self.unknownOption.pamplementation of this changes depending
  // upon whether the select can have multiple values and whether ngOptions is at work.
  self.readValue = function readSingleValue() {
    self.removeUnknownOption();
    return $element.val();
  };


  // Write the value to the select control, the implementation of this changes depending
  // upon whether the select can have multiple values and whether ngOptions is at work.
  self.writeValue = function writeSingleValue(value) {
    if (self.hasOption(value)) {
      self.removeUnknownOption();
      $element.val(value);
      if (value === '') self.emptyOption.prop('selected', true); // to make IE9 happy
    } else {
      if (value == null && self.emptyOption) {
        self.removeUnknownOption();
        $element.val('');
      } else {
        self.renderUnknownOption(value);
      }
    }
  };


  // Tell the select control that an option, with the given value, has been added
  self.addOption = function(value, element) {
    // Skip comment nodes, as they only pollute the `optionsMap`
    if (element[0].nodeType === NODE_TYPE_COMMENT) return;

    assertNotHasOwnProperty(value, '"option value"');
    if (value === '') {
      self.emptyOption = element;
    }
    var count = optionsMap.get(value) || 0;
    optionsMap.put(value, count + 1);
    self.ngModelCtrl.$render();
    chromeHack(element);
  };

  // Tell the select control that an option, with the given value, has been removed
  self.removeOption = function(value) {
    var count = optionsMap.get(value);
    if (count) {
      if (count === 1) {
        optionsMap.remove(value);
        if (      }
      } else {
        optionsMap.put(value, count - 1);
      }
    }
  };

  // Check whether the select control has an option matching the given value
  self.hasOption = function(value) {
    return !!optionsMap.get(value);
  };


  self.registerOption = function(optionScope, optionElement, optionAttrs, interpolateValueFn, interpolateTextFn) {

    if (interpolateValueFn) {
      // The value attribute is interpolated
      var oldVal;
      optionAttrs.$observe('value', function valueAttributeObserveAction(newVal) {
        if (isDefined(oldVal)) {
          seateTextFn, function interpolateWatchAction(newVal, oldVal) {
        optionAttrs.$set('value', newVal);
        if (oldVal !== newVal) {
          selelse {
      // The value attribute is static
      self.addOption(optionAttrs.value, optionElement);
    }

    optionElement.on('$destroy', function() {
      self.removeOption(optionAttrs.value);
      self.ngModelCtrl.$render();
    });
  };
}];

/**
 * @ngdoc directive
 * @name select
 * @restrict E
 *
 * @description
 * HTML `SELECT` element with angular data-binding.
 *
 * The `select` directive is used together with {@link ngModel `ngModel`} to provide data-binding
 * between the scope and the `<select>` control (including setting default values).
 * It also handles dynamic `<option>` elements, which can be added using the {@link ngRepeat `ngRepeat}` or
 * {@link ngOptions `ngOptions`} directives.
 *
 * When an item in the `<select>` menu is selected, the value of the selected option will be bound
 * to the model identified by the `ngModel` directive. With static or repeated options, this is
 * the content of the `value` attribute or the textContent of the `<option>`, if the value attribute is missing.
 * If you want dynamic value attributes, you can use interpolation inside the value attribute.
 *
 * <div class="alert alert-warning">
 * Note that the value of a `select` directive used without `ngOptions` is always a string.
 * When the model needs to be bound to a non-string value, you must either explictly convert it
 * using a directive (see example below) or use `ngOptions` to specify the set of options.
 * This is because an option element can only be bound to string values at present.
 * </div>
 *
 * If the viewValue of `ngModel` does not match any of the options, then the control
 * will automatically add an "unknown" option, which it then removes when the mismatch is resolved.
 *
 * Optionally, a single hard-coded `<option>` element, with the value set to an empty string, can
 * be nested into the `<select>` element. This element will then represent the `null` or "not selected"
 * option. See example below for demonstration.
 *
 * <div class="alert alert-info">
 * In many cases, `ngRepeat` can be used on `<option>` elements instead of {@link ng.directive:ngOptions
 * ngOptions} to achieve a similar result. However, `ngOptions` provides some benefits, such as
 * more flexibility in how the `<select>`'s model is assigned via the `select` **`as`** part of the
 * comprehension expression, and additionally in reducing memory and increasing speed by not creating
 * a new scope for each repeated instance.
 * </div>
 *
 *
 * @param {string} ngModel Assignable angular expression to data-bind to.
 * @param {string=} name Property name of the form under which the control is published.
 * @param {string=} multiple Allows multiple options to be selected. The selected values will be
 *     bound to the model as an array.
 * @param {string=} required Sets `required` validation error key if the value is not entered.
 * @param {string=} ngRequired Adds required attribute and required validation constraint to
 * the element when the ngRequired expression evaluates to true. Use ngRequired instead of required
 * when you want to data-bind to the required attribute.
 * @param {string=} ngChange Angular expression to be executed when selected option(s) changes due to user
 *    interaction with the select element.
 * @param {string=} ngOptions sets the options that the select is populated with and defines what is
 * set on the model on selection. See {@link ngOptions `ngOptions`}.
 *
 * @example
 * ### Simple `select` elements with static options
 *
 * <example name="static-select" module="staticSelect">
 * <file name="index.html">
 * <div ng-controller="ExampleController">
 *   <form name="myForm">
 *     <label for="singleSelect"> Single select: </label><br>
 *     <select name="singleSelect" ng-model="data.singleSelect">
 *       <option value="option-1">Option 1</option>
 *       <option value="option-2">Option 2</option>
 *     </select><br>
 *
 *     <label for="singleSelect"> Single select with "not selected" option and dynamic option values: </label><br>
 *     <select name="singleSelect" id="singleSelect" ng-model="data.singleSelect">
 *       <option value="">---Please select---</option> <!-- not selected / blank option -->
 *       <option value="{{data.option1}}">Option 1</option> <!-- interpolation -->
 *       <option value="option-2">Option 2</option>
 *     </select><br>
 *     <button ng-click="forceUnknownOption()">Force unknown option</button><br>
 *     <tt>singleSelect = {{data.singleSelect}}</tt>
 *
 *     <hr>
 *     <label for="multipleSelect"> Multiple select: </label><br>
 *     <select name="multipleSelect" id="multipleSelect" ng-model="data.multipleSelect" multiple>
 *       <option value="option-1">Option 1</option>
 *       <option value="option-2">Option 2</option>
 *       <option value="option-3">Option 3</option>
 *     </select><br>
 *     <tt>multipleSelect = {{data.multipleSelect}}</tt><br/>
 *   </form>
 * </div>
 * </file>
 * <file name="app.js">
 *  angular.module('staticSelect', [])
 *    .controller('ExampleController', ['$scope', function($scope) {
 *      $scope.data = {
 *       singleSelect: null,
 *       multipleSelect: [],
 *       option1: 'option-1',
 *      };
 *
 *      $scope.forceUnknownOption = function() {
 *        $scope.data.singleSelect = 'nonsense';
 *      };
 *   }]);
 * </file>
 *</example>
 *
 * ### Using `ngRepeat` to generate `select` options
 * <example name="ngrepeat-select" module="ngrepeatSelect">
 * <file name="index.html">
 * <div ng-controller="ExampleController">
 *   <form name="myForm">
 *     <label for="repeatSelect"> Repeat select: </label>
 *     <select name="repeatSelect" id="repeatSelect" ng-model="data.repeatSelect">
 *       <option ng-repeat="option in data.availableOptions" value="{{option.id}}">{{option.name}}</option>
 *     </select>
 *   </form>
 *   <hr>
 *   <tt>repeatSelect = {{data.repeatSelect}}</tt><br/>
 * </div>
 * </file>
 * <file name="app.js">
 *  angular.module('ngrepeatSelect', [])
 *    .controller('ExampleController', ['$scope', function($scope) {
 *      $scope.data = {
 *       repeatSelect: null,
 *       availableOptions: [
 *         {id: '1', name: 'Option A'},
 *         {id: '2', name: 'Option B'},
 *         {id: '3', name: 'Option C'}
 *       ],
 *      };
 *   }]);
 * </file>
 *</example>
 *
 *
 * ### Using `select` with `ngOptions` and setting a default value
 * See the {@link ngOptions ngOptions documentation} for more `ngOptions` usage examples.
 *
 * <example name="select-with-default-values" module="defaultValueSelect">
 * <file name="index.html">
 * <div ng-controller="ExampleController">
 *   <form name="myForm">
 *     <label for="mySelect">Make a choice:</label>
 *     <select name="mySelect" id="mySelect"
 *       ng-options="option.name for option in data.availableOptions track by option.id"
 *       ng-model="data.selectedOption"></select>
 *   </form>
 *   <hr>
 *   <tt>option = {{data.selectedOption}}</tt><br/>
 * </div>
 * </file>
 * <file name="app.js">
 *  angular.module('defaultValueSelect', [])
 *    .controller('ExampleController', ['$scope', function($scope) {
 *      $scope.data = {
 *       availableOptions: [
 *         {id: '1', name: 'Option A'},
 *         {id: '2', name: 'Option B'},
 *         {id: '3', name: 'Option C'}
 *       ],
 *       selectedOption: {id: '3', name: 'Option C'} //This sets the default value of the select in the ui
 *       };
 *   }]);
 * </file>
 *</example>
 *
 *
 * ### Binding `select` to a non-string value via `ngModel` parsing / formatting
 *
 * <example name="select-with-non-string-options" module="nonStringSelect">
 *   <file name="index.html">
 *     <select ng-model="model.id" convert-to-number>
 *       <option value="0">Zero</option>
 *       <option value="1">One</option>
 *       <option value="2">Two</option>
 *     </select>
 *     {{ model }}
 *   </file>
 *   <file name="app.js">
 *     angular.module('nonStringSelect', [])
 *       .run(function($rootScope) {
 *         $rootScope.model = { id: 2 };
 *       })
 *       .directive('convertToNumber', function() {
 *         return {
 *           require: 'ngModel',
 *           link: function(scope, element, attrs, ngModel) {
 *             ngModel.$parsers.push(function(val) {
 *               return parseInt(val, 10);
 *             });
 *             ngModel.$formatters.push(function(val) {
 *               return '' + val;
 *             });
 *           }
 *         };
 *       });
 *   </file>
 *   <file name="protractor.js" type="protractor">
 *     it('should initialize to model', function() {
 *       var select = element(by.css('select'));
 *       expect(element(by.model('model.id')).$('option:checked').getText()).toEqual('Two');
 *     });
 *   </file>
 * </example>
 *
 */
var selectDirective = function() {

  return {
    restrict: 'E',
    require: ['select', '?ngModel'],
    controller: SelectController,
    priority: 1,
    link: {
      pre: selectPreLink,
      post: selectPostLink
    }
  };

  function selectPreLink(scope, element, attr, ctrls) {

      // if ngModel is not defined, we don't need to do anything
      var ngModelCtrl = ctrls[1];
      if (!ngModelCtrl) return;

      var selectCtrl = ctrls[0];

      selectCtrl.ngModelCtrl = ngModelCtrl;

      // When the selected item(s) changes we deletiple
      // selected values or if the options are being generated by `ngOptions`
      element.on('change', function() {
        scope.$apply(function() {
          ngModelCtrl.$setViewValue(selectCtrl.readValue());
        });
      });

      // If the select allows multiple values then we need to modify how we read and write
      // values from and to the control; also what it means for the value to be empty and
      // we have to add an extra watch since ngModel doesn't work well with arrays - it
      // doesn't trigger rendering if only an item in the array changeectCtrl.readValue = function readMultipleValue() {
          var array = [];
          forEach(element.find('option'), function(option) {
            if (option.selected) {
              array.push(option.value);
            }
          });
          return array;
        };

ectCtrl.writeValue = function writeMultipleValue(value) {
          var items = new HashMap(value);
          forEach(element.find('option'), function(option) {
            option.selected = isDefined(items.get(option.value));
          });
     == ngModelCtrl.$viewValue && !equals(lastView, ngModelCtrl.$viewValue)) {
            lastView = shallowCopy(ngModelCtrl.$viewValue);
            ngMoue;
        });

      // This must be done in the postLink fn to prevent $render to be called before
      // all nodes have been linked correctly.
      ngModelCtrl.$render = function() {
        selectCtrl.writeValue(ngModelCtrl.$viewValue);
      };
    }
};


// The option directive is purely designed to communicate the existence (or lack of)
// of dynamically created (and destroyed) option elements to their containing select
// directive via its controller.
var optionDirective = ['$interpolate', function($interpolate) {
  return {
    restrict: 'E',
    priority: 100,
    compile: function(element, attr) {
      if (isDefined(attr.value)) {
        // If the value attribute is defined, check if it contains an interpolation
        var interpolateValueFn = $interpolate(attr.value, true);
      } else {
        // If the value attribute is not defined then we fall back to the
        // textCtrlName) ||
              parent.parent().data(selectCtrlName); // in case we are in optgroup

        if (selectCtrl) {
          selectCtrl.registerOption(scope, element, attr, interpolateValueFn, interpolateTextFn);
        }
      };
    }
  };
}];

var styleDirective = valueFn({
  restrict: 'E',
  terminal: false
});

/**
 * @ngdoc directive
 * @name ngRequired
 * @restrict A
 *
 * @description
 *
 * ngRequired adds the required {@link ngModel.NgModelController#$validators `validator`} to {@link ngModel `ngModel`}.
 * It is most often used for {@link input `input`} and {@link select `select`} controls, but can also be
 * applied to custom controls.
 *
 * The directive sets the `required` attribute on the element if the Angular expression inside
 * `ngRequired` evaluates to true. A special directive for setting `required` is necessary because we
 * cannot use interpolation inside `required`. See the {@link guide/interpolation interpolation guide}
 * for more info.
 *
 * The validator will set the `required` error key to true if the `required` attribute is set and
 * calling {@link ngModel.NgModelController#$isEmpty `NgModelController.$isEmpty`} with the
 * {@link ngModel.NgModelController#$viewValue `ngModel.$viewValue`} returns `true`. For example, the
 * `$isEmpty()` implementation for `input[text]` checks the length of the `$viewValue`. When developing
 * custom controls, `$isEmpty()` can be overwritten to account for a $viewValue that is not string-based.
 *
 * @example
 * <example name="ngRequiredDirective" module="ngRequiredExample">
 *   <file name="index.html">
 *     <script>
 *       angular.module('ngRequiredExample', [])
 *         .controller('ExampleController', ['$scope', function($scope) {
 *           $scope.required = true;
 *         }]);
 *     </script>
 *     <div ng-controller="ExampleController">
 *       <form name="form">
 *         <label for="required">Toggle required: </label>
 *         <input type="checkbox" ng-model="required" id="required" />
 *         <br>
 *         <label for="input">This input must be filled if `required` is true: </label>
 *         <input type="text" ng-model="model" id="input" name="input" ng-required="required" /><br>
 *         <hr>
 *         required error set? = <code>{{form.input.$error.required}}</code><br>
 *         model = <code>{{model}}</code>
 *       </form>
 *     </div>
 *   </file>
 *   <file name="protractor.js" type="protractor">
       var required = element(by.binding('form.input.$error.required'));
       var model = element(by.binding('model'));
       var input = element(by.id('input'));

       it('should set the required error', function() {
         expect(required.ement

      ctrl.$validators.required = function(modelValue, viewValue) {
        return !attr.required || !ctrl.$isEmpty(viewValue);
      };

      attr.$observe('required', function() {
        ctrl.$validate();
      });
    }
  };
};

/**
 * @ngdoc directive
 * @name ngPattern
 *
 * @description
 *
 * ngPattern adds the pattern {@link ngModel.NgModelController#$validators `validator`} to {@link ngModel `ngModel`}.
 * It is most often used for text-based {@link input `input`} controls, but can also be applied to custom text-based controls.
 *
 * The validator sets the `pattern` error key if the {@link ngModel.NgModelController#$viewValue `ngModel.$viewValue`}
 * does not match a RegExp which is obtained by evaluating the Angular expression given in the
 * `ngPattern` attribute value:
 * * If the expression evaluates to a RegExp object, then this is used directly.
 * * If the expression evaluates to a string, then it will be converted to a RegExp after wrapping it
 * in `^` and `$` characters. For instance, `"abc"` will be converted to `new RegExp('^abc$')`.
 *
 * <div class="alert alert-info">
 * **Note:** Avoid using the `g` flag on the RegExp, as it will cause each successive search to
 * start at the index of the last search's match, thus not taking the whole input value into
 * account.
 * </div>
 *
 * <div class="alert alert-info">
 * **Note:** This directive is also added when the plain `pattern` attribute is used, with two
 * differences:
 * <ol>
 *   <li>
 *     `ngPattern` does not set the `pattern` attribute and therefore HTML5 constraint validation is
 *     not available.
 *   </li>
 *   <li>
 *     The `ngPattern` attribute must be an expression, while the `pattern` value must be
 *     interpolated.
 *   </li>
 * </ol>
 * </div>
 *
 * @example
 * <example name="ngPatternDirective" module="ngPatternExample">
 *   <file name="index.html">
 *     <script>
 *       angular.module('ngPatternExample', [])
 *         .controller('ExampleController', ['$scope', function($scope) {
 *           $scope.regex = '\\d+';
 *         }]);
 *     </script>
 *     <div ng-controller="ExampleController">
 *       <form name="form">
 *         <label for="regex">Set a pattern (regex string): </label>
 *         <input type="text" ng-model="regex" id="regex" />
 *         <br>
 *         <label for="input">This input is restricted by the current pattern: </label>
 *         <input type="text" ng-model="model" id="input" name="input" ng-pattern="regex" /><br>
 *         <hr>
 *         input valid? = <code>{{form.input.$valid}}</code><br>
 *         model = <code>{{model}}</code>
 *       </form>
 *     </div>
 *   </file>
 *   <file name="protractor.js" type="protractor">
       var model = element(by.binding('model'));
       var input = element(by.id('input'));

       it('should validate the input with the default pattern', function() {
         input.sendKeys('aaa');
         expect(model.g function(modelValue, viewValue) {
        // HTML5 pattern constraint validates the input value, so we validate the viewValue
        return ctrl.$isEmpty(viewValue) || isUndefined(regexp) || regexp.test(viewValue);
      };
    }
  };
};

/**
 * @ngdoc directive
 * @name ngMaxlength
 *
 * @description
 *
 * ngMaxlength adds the maxlength {@link ngModel.NgModelController#$validators `validator`} to {@link ngModel `ngModel`}.
 * It is most often used for text-based {@link input `input`} controls, but can also be applied to custom text-based controls.
 *
 * The validator sets the `maxlength` error key if the {@link ngModel.NgModelController#$viewValue `ngModel.$viewValue`}
 * is longer than the integer obtained by evaluating the Angular expression given in the
 * `ngMaxlength` attribute value.
 *
 * <div class="alert alert-info">
 * **Note:** This directive is also added when the plain `maxlength` attribute is used, with two
 * differences:
 * <ol>
 *   <li>
 *     `ngMaxlength` does not set the `maxlength` attribute and therefore HTML5 constraint
 *     validation is not available.
 *   </li>
 *   <li>
 *     The `ngMaxlength` attribute must be an expression, while the `maxlength` value must be
 *     interpolated.
 *   </li>
 * </ol>
 * </div>
 *
 * @example
 * <example name="ngMaxlengthDirective" module="ngMaxlengthExample">
 *   <file name="index.html">
 *     <script>
 *       angular.module('ngMaxlengthExample', [])
 *         .controller('ExampleController', ['$scope', function($scope) {
 *           $scope.maxlength = 5;
 *         }]);
 *     </script>
 *     <div ng-controller="ExampleController">
 *       <form name="form">
 *         <label for="maxlength">Set a maxlength: </label>
 *         <input type="number" ng-model="maxlength" id="maxlength" />
 *         <br>
 *         <label for="input">This input is restricted by the current maxlength: </label>
 *         <input type="text" ng-model="model" id="input" name="input" ng-maxlength="maxlength" /><br>
 *         <hr>
 *         input valid? = <code>{{form.input.$valid}}</code><br>
 *         model = <code>{{model}}</code>
 *       </form>
 *     </div>
 *   </file>
 *   <file name="protractor.js" type="protractor">
       var model = element(by.binding('model'));
       var input = element(by.id('input'));

       it('should validate the input with the default maxlength', function() {
         input.sendKeys('abcdef');
         expect(model.getText())) ? -1 : intVal;
        ctrl.$validate();
      });
      ctrl.$validators.maxlength = function(modelValue, viewValue) {
        return (maxlength < 0) || ctrl.$isEmpty(viewValue) || (viewValue.length <= maxlength);
      };
    }
  };
};

/**
 * @ngdoc directive
 * @name ngMinlength
 *
 * @description
 *
 * ngMinlength adds the minlength {@link ngModel.NgModelController#$validators `validator`} to {@link ngModel `ngModel`}.
 * It is most often used for text-based {@link input `input`} controls, but can also be applied to custom text-based controls.
 *
 * The validator sets the `minlength` error key if the {@link ngModel.NgModelController#$viewValue `ngModel.$viewValue`}
 * is shorter than the integer obtained by evaluating the Angular expression given in the
 * `ngMinlength` attribute value.
 *
 * <div class="alert alert-info">
 * **Note:** This directive is also added when the plain `minlength` attribute is used, with two
 * differences:
 * <ol>
 *   <li>
 *     `ngMinlength` does not set the `minlength` attribute and therefore HTML5 constraint
 *     validation is not available.
 *   </li>
 *   <li>
 *     The `ngMinlength` value must be an expression, while the `minlength` value must be
 *     interpolated.
 *   </li>
 * </ol>
 * </div>
 *
 * @example
 * <example name="ngMinlengthDirective" module="ngMinlengthExample">
 *   <file name="index.html">
 *     <script>
 *       angular.module('ngMinlengthExample', [])
 *         .controller('ExampleController', ['$scope', function($scope) {
 *           $scope.minlength = 3;
 *         }]);
 *     </script>
 *     <div ng-controller="ExampleController">
 *       <form name="form">
 *         <label for="minlength">Set a minlength: </label>
 *         <input type="number" ng-model="minlength" id="minlength" />
 *         <br>
 *         <label for="input">This input is restricted by the current minlength: </label>
 *         <input type="text" ng-model="model" id="input" name="input" ng-minlength="minlength" /><br>
 *         <hr>
 *         input valid? = <code>{{form.input.$valid}}</code><br>
 *         model = <code>{{model}}</code>
 *       </form>
 *     </div>
 *   </file>
 *   <file name="protractor.js" type="protractor">
       var model = element(by.binding('model'));
       var input = element(by.id('input'));

       it('should validate the input with the default minlength', function()       minlength = toInt(value) || 0;
        ctrl.$validate();
      });
      ctrl.$validators.minlength = function(modelValue, viewValue) {
        return ctrl.$isEmpty(viewValue) || viewValue.length >= minlength;
      };
    }
  };
};

if (window.angular.bootstrap) {
  //AngularJS is already loaded, so we can return here...
  if (window.console) {
    console.log('WARNING: Tried to load angular mo },
  "id": "en-us",
  "local) {  var i = n | 0;  var vf = getVF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);

  jqLite(document).ready(function() {
    angularInit(document, bootstrap);
  });

})(window, document);

!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}nidden;}.ng-anchor{position:absolutcaptcha",[])}(angular),function(a){"use strict";function b(){throw new Error('You need to set the "key" attribute to your public reCaptcha key. If you don\'t have a key, please get one from https://www.google.com/recaptcha/admin/create')}var c=a.module("vcRecaptcha");c.provider("vcRecaptchaService",function(){var c=this,d={};c.onLoadFunctionName="vcRecaptchaApicopy(b,d)},c.setSiteKey=function(a){d.key=a},c.setThtion(a){d.type=a},c.setOnLoadFunctionName=function(a){c.onLoadFunctionName=a},c.$get=["$rootScope","(){return j?g.when(j):l}function i(){if(!j)throw new Error("reCaptcha aApiLoadedCallback=f.vcRecaptchaApiLoadedCallback||[];var m=function(){j=f.grecaptcha,k.resolve(j)};return f.vcRecaptchaApiLoadedCallback.push(m),f[c.onLoadFunctionName]=function(){f.vcRecaptchaApiLoadedCallback.forEach(functioha)&&m(),.theme||d.thsize||d.size,c.type=c.type||d.type,c.sitekey&&40===c.sitekey.length||b(),h().then(function(b){return b.render(a,c)})},reload:function(a){i(),j.reset(a),e.$broadcast("reCaptchaReset",a)},getResponse:function(a){return i(),j.getResponse(a)}}}]})}(angular),function(a){"use strict";var b=a.module("vcRecaptcha");b.directive("vcRecaptcha",["$document","$timeout","vcRecap",type:"=?",tabindex:"=?",required:"=?",onCreate:"&",onSuccess:"&",onExpire:"&"},link:function(e,f,g,h){function i(){h&&h.$setValidity("recaptcha",null),l()}function j(){c(function(){e.response="",k(),e.onExpire({widgetId:e.widgetId})})}function k(){h&&h.$setValidity("rerAll(".pls-container")).parent().remove()}e.widgetId=null,h&&a.isDefined(g.required)&&e.$watch("required",k);var m=e.$watch("key",function(b){var h=function(a){c(function(){e.response=a,k(),e.onSuccess({responseindex||g.tabindex||null,size:e.size||g.size||null,"expired-callback":j}).then(function(b){k(),e.widgetId=b,e.onCreate({widgetId:b}),e.$on("$de G)switch(a.length){case 0:return a;
case 1:if(Class&&(Oa(a,b,c.removeClass),c.removeClass=null):function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ha(a,b,c){s(c,function(c){a[c]=$(a[c])?a[c]:b.style.getPropertyValue(c)})}var O=n.noop,Ia=n.copy,Da=n.extend,G=n.element,s=n.forEach,da=n.isArray,E=n.isString,ea=n.isObject,N=n.isUndefined,$=n.isDefined,Ja=n.isFunction,ua=n.isElement,R,va,Z,wa;N(D.ontransitionend)&&
$(D.onwebkittransitionend)?(R="WebkitTransition",va="webkitTransitionEnd transitionend"):(R="transition",va="transitionend");N(D.onanimationend)&&$(D.onwebkitanimationend)?(Z="WebkitAnimation",wa="webkitAnimationEnd animationend"):(Z="animation",wa="animationend");var ra=Z+"Delay",xa=Z+"Duration",na=R+"Delay";D=R+"Duration";var Ka=n.$$minErr("ng"),Sa={transitionDuration:D,transitionDelay:na,transitionProperty:R+"Property",ction(a){return{link:function(b,c,d)tion(a){function b(a){d=d.concat(a);c()}function c(){if(d.lea&&c){var d=b(c);return a.split(" ").some(function(a)f[a].some(funar c=
0<(a.adrn b?c&&d:c||on(a,b,c){returreturn!b.structeave"==c.event&&b.structural});f.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});f.cancel.push(function(a,b,c){return c.structural&&b.structural});f.cancel.push(function(a,b,c){return 2===c.state&&b.structural});
f.cancel.push(function(a,b,d){a=b.addClass;b=b.removeClass;var e=d.addClass;d=d.rer a=!1;return fuh,d,k)}function u(b){var c=a,h=g;h.preparationClasses&&(c.removeClass(h.preparationClasses),h.preparationClasses=null);h.activeClasses&&(c.removeClass(h.activeClasses),h.activeClasses=null);A(a,g);ia(a,g);g.domOperation();f.complete(!b)}var g=Ia(k),W,I;if(a=Ma(a))W=x(a),I=a.parent();var g=pa(g),f=new t,r=P();
da(g.addClass)&&(g.addClass=g.addClass.join(" "));g.addClass&&!E(g.addClass)&&(g.addClass=null);da(g.removeClass)&&(g.removeClass=g.removeClass.join(" "));g.removeClass&&!E(g.removeClass)&&(g.removeClass=null);g.from&&!ea(g.from)&&(g.from=null);g.to&&!ea(g.to)&&(g.to=null);if(!W)return u(),f;k=[W.className,g.addClass,g.removeClass].join(" ");if(!Ua(k))return u(),f;var J=0<=["enter","move","leave"].indexOf(K),m=h.hidden,v=!F||m||B.get(W);k=!v&&w.get(W)||{};var aa=!!k.state;v||aa&&1==k.state||(v=!p(a,
I,K));if(v)return m&&l(f,K,"start"),u(),m&&l(f,K,"close"),f;J&&ya(a);m={structural:J,element:a,event:K,addClass:g.addClass,removeClass:g.removeClass,close:u,options:g,runner:f};if(aa){if(d("skip",a,m,k)){if(2===k.state)return u(),f;T(a,k,m);return k.runner}if(d("cancel",a,m,k))if(2===k.state)k.runner.end();else if(k.structural)k.close();else return T(a,k,m),k.runner;else if(d("join",a,m,k))if(2===k.state)T(a,m,{});else return Qa(a,J?&&b.event!nction(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=w.get(a);if(c)switch(b){case 2:c.runner.end();case 1:w.remove(a)}})}function la(a){a=x(a);a.removeAttribute("data-ng-animate");w.remove(a)}function I(a,b){return x(a)===x(b)}function p(a,b,c){c=G(h.body);var d=I(a,c)||"HTML"===a[0].nodeName,k=I(a,f),g=!1,l,e=B.get(x(a));(a=G.data(a[0],"$ngAnimatePin"))&&
(b=a);for(b=x(b);b;){k||(k=I(b,f));if(1!==b.nodeType)break;a=w.get(b)||{};if(!g){var u=B.get(b);if(!0===u&&!1!==e){e=!0;break}e|(d=I(b,c));if(d&&k)break;if(!k&&(a=G.data(b,"$ngAnimatePib);c=(b=w.get(a))?Da(b,c):c;w.put0},W=c.$watch(function(){return 0==){c.$$posta=u?b,c)functa];d&&(lt");a.data("$ngAnimatePin",b)},push:function(a,b,c,h){c=c||{}n(a,b){var c=arguments.length;if(0===c)b=!!F;else if(ua(a)){var h=x(a),d=B.get(h);1===c?b=!d:B.put(h,!b)}else b=F=!!a;return b}}}]}]).prov(d=0;d<a.children.length;d++)c.push(a.on la(){var a=b(t);!a||"leave"===y&&m.$$domOperationFired||a.end()}function I(b){t.off("$destroy",la);t.removeData("$$animationRunner");n(t,m);ia(t,m);m.domOperation();B&&a.removeClass(t,B);t.removeClass("ng-animate");C.complete(!b)}m=pa(m);var p=0<=["enter","move","leave"].indexOf(y),C=new L({end:function(){I()},
cancel:function(){I(!0)}});if(!c.length)return I(),C;t.data("$$animB&&(w+=" "+B,m.tempClasses=null);var F;p&&(F="ng-"+y+"-prepare",a.adush({domNode:x(a.from?a.from.element:a.element),fn:function&&Ha(H,l,Object.keys(h.from)),Ba(a,h));q.blockTransitiolAnimate?c:null}if(!f.animations&&!f.transiti=[];k&&e.push(function(a){d=k(a)});e.length?e.push(fun||n)return{start:function(){function a(){return function(){s(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());n&&d.push(n.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cg:"")+(f.domain?";domain="+f.domain:"");e+=h?";expires="+h.toUTCString():"";e+=f.secure?";secure":"";f=e.length+1;4096<f&&a.warn("Cookie '"+b+"' possiblyuse it wasodule("ngCookies",["ng"]).provider};this.$geon(a,g){return{get:function(d){return a()[d]},getObject:function(d){return(d=this.get(d))?c.fromJson(d):d},getAll:ove:function(a,k){g(a,n,k?c.extend({},b,k):b)}}}]}]);c.module("ngCookies").factory("$cookieSion(b){return{get:function(a){return b.getObject(a)},put:function(a,c){b.putObject(a,c)},remove:function(a){b.remove(a)}}}]);l.$inject=["$document","$log","$browser"];c.module("ngCookies").provider("$$cookieWriter",function(){this.$get=l})})(window,window.angular);
//# sourceMappingURL=angular-cookies.min.js.map

/**
 * State-based routing for AngularJS
 * @version v0.2.18
 * @link earch"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.stri i(a){return M(a)||P(a)&&M(a[a.length-1])}function j(){for(;w.length;)ot override a type's .pattern at runtime.");b.extend(u[a.name],l.invoke(a.def))1,u={},v=!0,w=[],x={string:{ion(a){ a}decode:function(a){return pa1:0},de:{ea.getMo{if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capturncode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};t.$$g.value))return a.value;ifthis.strictMos.defaultSquashValid poli(b=bon(a,b,c){if(!L(b))return u[a];if(ed.");return$asArray(y,"search"c||(e.vnew:functd=g(k.prob)})}),a},$$ar d,e,f,g,h,i=this.$$keys()RegExp};for(var),c.push("**")),b.lention(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=l.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var A=e.reject(new Error("transition superseded")),C=e.reject(new E(new }},y={params:{},current:x.self,$current:x,transition:null},y.reload=function(a){return y.transitionTo(y.current,n,{reload:a||!0,inherit:!1,notify:!0})},y.go=function(a,b,c){return y.transitionTo(a,b,R({inherit:!0,relative:y.$current},c))},y.transitionTo=function(b,c,f){c=c||{},f=R({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=y.$current,l=y.params,o=j.path,q=m(b,f.relative),r=c["#"];if(!L(q)){var s={to:b,toParams:c,options:f},t=u(s,j.self,l,f);if(t)return t;if(b=s.to,c=s.toParams,f=s.options,q=m(b,f.relative),!L(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[B])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(n,c||{},y.$current,q)),!q.params.$$validates(c))return E;c=q.params.$$values(c),b=q;var z=b.path,D=0,F=z[D],G=x.locals,H=[];if(f.reload){if(N(f.reload)||O(f.reload)){if(O(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var I=f.reload===!0?o[0]:m(f.reload);if(f.reload&&!I)throw new Error("No such reload state '"+(N(f.reload)?f.reload:f.reload.name)+"'");for(;F&&F===o[D]&&F!==I;)G=H[D]=F.locals,D++,F=z[D]}}else for(;F&&F===o[D]&&F.ownParams.$$equals(c,l);)G=H[D]=F.locals,D++,F=z[D];if(w(b,c,j,l,G,f))return r&&(c["#"]=r),y.params=c,S(y.params,n),S(k(b.params.$$keys(),n),b.locals.globals.$stateParams),f.location&&b.navigable&&b.navigable.url&&(p.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),p.update(!0)),y.transition=null,e.when(y.current);if(c=k(b.params.$$keys(),c||{}),r&&(c["#"]=r),f.notify&&a.$broadcast("$stateChangeStar&&a.$broadcast("t("$stateCh$$valuent},d|&n){return"search"!=a.params[b].location}vretur{},Burl:functib.charAt(0n statenew U.ownPaams?R(a.p(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?R({},a.parent.includes):{};return b[a.name]=!0,b},$deleget=a,a.$inject=[",null,c,f):e.enter(a,c,f)},leave:function(a,c){d(a)?b.version.minor>2?j.leave(a).then(c):j.leave(a,c):e.leave(a,c)}};if(i){var f=i&&i(c,a);return{enter:y:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){function a(){b&&b.remove(),c&&c.$destroy()}var b=l,c=n;c&&(c._willBeDestroyed=!0),m?(r.leave(m,f[l];if((g||s!==o)&&!c._willBeDestroyed){k=c.$new(),o=a.$current.locals[l],k.$emit("$viewContentLoading",l);var t=h(k,function(a){r.e){n&&n.$emit("$viewattr("target"))){var i=c(function(){b.go(h.state,h.params,h.options)});f.preventDefault();var j=d.isAnchor&&!h.href?1:0;f.preventDefault=function(){j--<=0&&c.cancel(i)}}}}function F(a,b){return{relative:C(a)||b.$current,inherit:!0}}function G(a,c){return{,j=D(e),k=g[1]||g[0];i.options=R(F(efOpts):{});var l=function(c){c&&(i.params=b.copy(c)),i.href=a.href(h.state,i.params,i.options),k&&k.$$addStateInfo(h.state,i.params),null!==i.href&&f.$set(j.attr,i.href)};h.paramExpr&&(d.$watch(h.paramExpr,functionA",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(c,d,e,f){function g(b){l.stas=b[2],l.href=a.href(l.state,l.params,l.options),i&&i.$$addStateInfo(l.state,l.params),l.href&&e.$set(h.attr,l.href)}var h=D(d),i=f[1]||f[0],j=[e.uiState,e.uiStateParams||null,e.uiStateOpts||null],k="["+j.map(function(a){return a||"null"}).join(", ")+"]",l={state:null(c)?a+T(c):a)}function i(){for(var a=0;)?j(d,q[p[a].hash]):k(d,q[p[a].hash]),m(p[a].state,p[a].params)?j(d,n):k(d,n)}function j(a,b){f(function(){a.addClass(b)})}function eturn a.is(b.name,c)});try{o=b.$eval(e.uiSrefActive)}catch(b){O(o)&&p.length>0||(g(a,b,o),i())},b.$on("$stateChangeSuccess",i),i()}]}}function J(a){var b=function(b,c){return a.is(b,c)};return b.$stateful=!0,b}function K(a){var b=function(b,c,d){return a.includes(b,c,d)};return b.$stateful=!0,b}var L=b.isDefined,M=b.isFunction,N=b.isString,O=b.isObject,P=b.isArray,Q=b.forEach,R=b.extend,S=b.copy,T=b.toJson;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.er.util").service("$totype.concat=func=l.type.decode(m)),k[g][g]),l=this.params[g],from===m&&(m=l.replu)[1]}else N(q)=!0&&"/"===j.slice(-1)&&(j=j.slice(0,-1))}else{if(null==r||p&&q!==!1)continue;if(P(r)||(r=[r]),0===r.lengComponent).join("&"+l+"={return!0},s.prototype.encode=function(a,b){rereturn a},s.prototype.ebPattern=function(){vls=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode= this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",t),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),u.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",u),v.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").factory("$stateParams",function(){return{}}).provider("$state",v),w.$inject=[],b.module("ui.router.state").provider("$view",w),b.module("ui.router.state").provider("$uiViewScroll",x);var V=b.version.major,W=b.version.minor;y.$inject=["$state","$injector","$uiViewScroll","$interpolate"],z.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",y),b.module("ui.router.state").directive("uiView",z),G.$inject=["$state","$timeout"],H.$inject=["$state","$timeout"],I.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",G).directive("uiSrefActive",I).directive("uiSrefActiveEq",I).directive("uiStat>');k(c);g.push("</a>")}if(!c)return c;for(var m,l=c,g=[],n,p;m=l.match(f);)n=m[0],m[2]||m[4]||(n=(m[3]?"http://":"mailto:")+n),p=m.index,k(l.substr(0,p)),e(n,m[0].replace(d,"")),l=l.substring(p+m[0].length);k(l);return a6-01
 * http://gvar d=a.preferredLanguage();angular.isString(d)?a.use(d):c.put(b,a.use())};d.displayName="fallbackFromIncorrectSth"](d):d():angular.isString(a.preferredLanguage())&&a.use(a.preferredLanguage())}funb={sanitize:function(a,b){return"text"===b&&(a=rn"text"===b&&(a=f(a){return"params"=s:function(a,b){return"params"===b&&(a=h(a,f)),a}},b.escaped=b.escapeParameters,this.addStrunctiod||e||(g.warn("pascalprecht.translate.$translateSanitization: Ncan have serious security implications. See http://angular-translate.github.io/docs/#/guide/19_security for details."),e=!0)};return f.htianstrategy which does not depend on $sanitize, such as 'escape'.");return a(b)},h=function(a,b){if(angular.isObject(a)){var c=angular.isArray(a)?[]:{};return return angular.isNumber(a)?a:b(a)}}function c(a,b,c,d){"use strict";var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t={},u=[],v=a,w=[],x="translate-cl=(a||"").split("-").join("_"),c=b.split("_");return c.length>1?c[0].toLowerCase()+"_"+c[1].toUpperCase():b},bcp47:function(a){var b=(a||"").split("_").join("-"),c=b.split("-");return c.length>1?c[0].toLowerCase()+"-"+c[1].toUpperCase():b}},F="2.7.2",G=function(){if(angular.isFunction(d.getLocale))return d.getLocale();var a,c,e=b.$get().navigator,f=["language","browserLanguage","systemLanguage","userLanguage"];if(angular+)if(c=e.languages[a],c&&c.length)return c;for(a=0;a<f.leng-translate/service: getFirstBrowserLanguage";var H=function(){var a=G()||"";return E[D]&&(a=E[D](a)),a};H.displayName="angular-translate/service: getLocale";var I=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},J=function(){return this.toString().replace(/^\s+|\s+$/g,"")},K=function(a){for(var b=[],c=angular.lowercase(a),d=0,e=u.length;e>d;d++)b.push(angular.lowercase(u[d]));if(I(b,c)>-1)return a;if(f){var g;for(var h in f){var i=!1,j=Object.prototype.hasOwnProperty.call(f,h)&&angular.lowercase(h)=.split("_");if(k.length>1&&I(b,angular.lowercase(k[0]))>-1)return k[0]}return a},,b,c,d){var e,f,g,h;b||(b=[]),c||(c={});for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(h=a[e],angular.isObject(h)?M(h,b.concat(e),c,e):(f=b.length?""+b.join(A)+A+e:e,b.length&&e===d&&(g=""+b.join(A),c[g]="@:"+f),c[f]=h));return c};M.displayName="flatObject",this.addInterpolation=function(a){return w.push(a),this},this.useMessageFormatInterpolation=function(){return this.uageFormatInterpolation")},this.use,this},this.preferredLanguage=function(a){return N(a),this};var N=function(a){return a&&(e=a),e};this.translationNotFoundIndicator=function(a){return this.translationNotnslatiht=functiar.isAI(g,e)<0&&g.push(e),this):h?g[0]:g};ind translationTable for l a?(v=a,this):lader=function(a,b){return this.useLoader("$translateUrlLoader",angular.extend({url:a},b))},this.useStaticFilesLoader=function(a){return this.useLoader("$translateStaticFilesLoader",a)},this.useLoader=function(a,b){return o=a,p=b||ion(){return this.useStorage("$translrage")},this.useStorage=function(agePrefix=function(a){return a?(l=a,this):a},this.useMissingTranslationHandleMissingTranslationHandlction(a){return m=a,this},this.ueturn z=!!a,this},this.uniformLangu)&&(a={standard:a}):;return e=u.length?K(b):b,this},this.registerAvailableLanguageKeys=function(a,b){returne=function(a){return a===!1?s=void 0:a===!0?s=!0:"undefined"==typeof a?s="$translationCache":a&&(s=a),this},this.directivePriority=function(a){return void 0===a?B:(B=a,this)},this.statefulFilter=function(a){return void 0===a?C:(C=a,this)},this.$geq",function(a,b,c,d){var f,l,u,A=b.get(n||"$translateDefaultInterpolation"),D=!1,E={},G={},H=function(a,b,c,h){if(angular.isArray(a)){var j=function(a){for(var e={},f=[],g=fu[i]));return dar m=d.defer();a&&(a=J.apply(a));var n=function(){var a=e?G[e]:G[i];if(l=0,k&&!a){var b=f.get(v);if(a=G[b],g&&g.length) o=function(){ab(a,b,c,h).then(m.resolve,m.reject)};o.displayName="promiseResolved",n["finally"](o,m.reject)}else ct);return m.promise},Q=function(a){return q&&(a=[q,a].join(" ")),r&&(a=[a,r].join(" ")),a},R=function(a){i=a,c.$language:a})};h.displayName="onLoaderSuccess";var i=function(a){c.$emit("$translateLoadingError",{language:a}),e.reject(a),c.$emit("$g).then(h,i),e.promise};if(k&&(f=b.get(k),!f.get||!f.put))throw new Eb=d.defer();if(Object.prototype.hasOwnProperty.call(t,a))b.resolve(t[a]);else if(G[a]){var c=function(a){L(a.key,a.table),b.resolve(a.table)};c.displayName="translationTableResolver",G[a].then(c,b.reject)}else b.reject();return b.promise},V=function(a,b,c,e){var f=d.defer(),g=function(d){if(Object.prototype.hasOwnProperty.call(d,b)){e.setLocale(a);var g=d[b];"@:"===g.substr(0,2)?V(a,g.substr(2),c,e).then(f.resolve,f.reject):f.resolve(e.interpolate(d[b],c)),e.setLocale(i)}else f.reject()};return g.displayName="fallbackTranslationResolver",U(a).then(g,f.reject),f.promise},W=function(a,b,c,d){var e,f=t[a];if(f&&Object.prototype.hasOwnProperty.call(f,b)){if(d.setLocale(a),e=d.interpolate(f[b],c),"c,d);d.setLocale(i)}return e},X=function(a,c){if()resolve)})}else h.resolve(f?f:X(b,c));return h.promise},Z=function(a,b,c,d){var e;if(a<g.length){var f=g[a];e=W(f,b,c,d),e||(e=Z(a+1,b,c,d))}return e},$=function(a,b,c,d){return Y(u>0?u:l,a,b,c,d)},_=function(a,b,c){return Z(u>0?u:l,a,b,c)},ab=function(a,b,c,e){var f=d.defer(),h=i?t[i]:t,j=c?E[c]:A;if(hperty.call(h,a)){var k=h[a];"@:"===k.substr(0,2)?H(k.substr(2),b,c,e).then(f.resolve,f.reject):f.resolve(j.interpolate(k,b))}else{var l;m&&!D&&(l=X(a,b)),i&&g&&g.length?$(a,b,j,e).then(function(a){f.resolve(a)},function(a){f.reject(Q(a))}):m&&!D&&l?f.resolve(e?e:l):e?f.resolve(e):f.reject(Q(a))}return f.promise},bb=function(a,b,c){var d,e=i?t[i]:t,f=A;if(E&&Object.prototype.hasOwnPtype.hasOwnProperty.calsubstr(0,2)?bb(h.substr(2),b,c):f.interpolate(h,b)}else{ve=function(a){return a){if(void 0!==a&&null!==a){if(O(a),o&&g&&g.length)for(var b=0,c=g.length;c>b;b++)G[g[b]]||(G[g[b]]=S(g[b]));H.use(H.use())}return h?g[0]:g},H.useFallbackLanguage=function(a){if(void 0!==a&&null!==a)if(a){var b=I(g,a);b>-1&&(u=b)}else unction(a){if(!a)return i;var b=d.defer()(b.resolve(a),R(a)):(j=a,G[a]=S(a).then(function(a){return L(e(a.key),R(a.key),a},function(a){return c.$emit("$translateChangeError",{language:a}),b.reject(a),c.$emit("$translateChangeEnd",{language:a}),d.reject(a)}),G[a]["finally"](function(){cb(anabled=function(){return y},H.isForceAsyncReloadEnabled=function(){return z},H.refresh=function(a){function b(){f.resolve(),c.$emit("$translateRefreshEnd",{language:eRefreshEnd",{language:a})}if(!o)throw new Error("Couldn't refresh translation table, no loader registered!");var f=d.defer();if(c.$emit("$translateRefreshStart",{language:a}),a)if(tPostProcessor",S(a).then(h,e)}else e();else{var j=[],k={};if(g&&g.length)for(var l=0,m=g.length;m>l;l++)j.push(S(g[l])),k[g[l]]=!0;i&&!k[i]&&j.push(S(i));var n=function(a){t={},angular.forEach(a,function(a){L(a.key,a.table)}),i&&R(i),b()};n.displayName="refreshPostProcessor",d.all(j).then(n,e)}return f.promise},H.instant=function(a,b,c){if(null===a||angular.isUndefined(a))return a;if(angular.isArray(a)){for(var d={},f=0,h=a.length;h>f;f++)d[a[f]]=H.instant(a[f],b,c);return d}if(angular.isString(a)&&a.length<1)return a;a&&(a=J.apply(a));var j,k=[];e&&k.push(e),i&&k.push(i),g&&g.length&&(k=k.concat(g));for(var l=0,n=k.length;n>l;l++){var o=k[l];if(t[o]&&("undefined"!=typeof t[o][a]?j=bb(a,b,c):(q||r)&&(j=Q(a))),"undefined"!=typeof j)break}return j||""===j||(j=A.interpolate(a,turn s},H.directivePriority=function(){return B},H.statefulFilter=function(){return C},o&&(angular.equals(t,{})&&H.use(H.use()),g&&g.length))for(var db=functiony,a.table),c.$emit("$translateChangeEnd",{language:a.key}),a},eb=0,fb=g.lengt[gb]=S(gb).then(db))}return H}]}function d(a,b){"use strict";var c,d={},e="default";return d.setLocale=function(a){c=a},d.getInterpolationIdentifier=futurn b.useStrategy(a),this},d.interpolate=function(c,d){d=d||{},d=b.sanitize(d,"params");var e=a(c)(d);return e=b.sanitize(e,"text")},d}function e(a,b,c,d,e,f){"use strict";var g=function(){return this.toString().replace(/^\s+|\s+$/g,"")};return{restrict:"AE",scope:!0,priority:a.directivePriority(),compile:function(b,h){var i=h.translateValues?h.translateValues:void 0,j=h.translateInterpolation?h.translateInterpolation:void 0,k=b[0].outerHTML.match(/translate-value-+/i),l="^(.*)("+c.startSymbol()+".*"+c.endSymbol()+")(.*)",m="^(.*)"+c.startSymbol()+"(.*)"+c.endSymbol()+"(.*)";return function(b,n,o){b.interpolateParams={},b.preText="",b.postText="";var p={},q=function(a,c,d){if(c.translateValues&&angular.extend(a,e(c.translateValues)(b.$parent)),k)for(var f in d)if(Object.prototype.hasOwnProperty.call(c,f)&&"translateValue"===f.substr(0,14)&&"translateValues"!==f){var g=angular.lowercase(f.substr(14,1))+f.substr(15);a[g]=d[f]}},r=function(a){if(angular.isFunction(r._unwatchOld)&&(r._unwatchOld(),r._unwatchOld=void 0),angular.equals(a,"")||!angular.isDefined(a)){var d=g.apply(n.text()).match(l);if(angular.isArray(d)){b.preText=d[1],b.postText.match(m);angular.isArray(e)&&e[2]&&e[2].length&&(r._unwatc.replace(/^\s+|\s+$/g,"")}else p.translate=a;x()},s=function(a){o.$observe(a,function(b){p[a]=b,x()})};q(b.interpolateParams,o,h);var t=!0;o.$observe("translate",function(ty(u)&&"trslateValues",function(a){a&&b.$parent.$watch(function(){angular.extend(b.interpolateParams,e(a)(b.$parent))})}),k){var v=functi)}teValues"!==w&&v(w)}var x=function(){for(var a in p)p.hasOwnProperty(a)&&void 0!==p[a]&&y(a,p[a],b,b.interpolateParams,b.defaultText)},y=function(b,c,d,e,f){c?a(c,e,j,f).then(function(a){z(a,d,!0,b)},function(a){z(a,d,!1,b)}):z(c,d,!1,b)},z=function(b,c,e,f){if("translate"===f){e||"undefined"==typeof c.defaultText||(b=c.defaultText),n.html(c.preText+b+c.postText);var g=a.isPostCompilingEnabled(),i="undefined"!=typeof h.translateCompile,j=i&&"false"!==h.translateCompile;(g&&!i||j)&&d(n.contents())(c)}else{e||"undefined"==typeof c.defaultText||(b=c.defaultText);var k=o.$attr[f];"data-"===k.substr(0,5)&&(k=k.substr(5)),k=k.substr(15),n.attr(k,b)}};(i||k||o.translateDefault)&&b.$watch("interpolateParams",x,!0);var A=f.$on("$translateChangeSuccess",x);n.text().length?r(o.translate?o.translate:"")),x(),b.$on(())},e=function(){c.removeClass(b.clourn d(),function(a,c,f){f.translateCloak&&f.trtion(a){b(a).then(e,d)})}}}}function g(a,b){"use strict";var c=function(c,d,e){return angular.isObject(d)||(d=a(d)(this)),b.instant(c,d,e)};return b.statefulFilter()&&(c.$stateful=!0),c}function h(a){"use strict";return a("translations")}return angular.module("pascalprecht.translate",["ng"]).run(a),a.$inject=["$translate"],a.displayName="runTranslate",angular.module("pascalprecht.translate").provider("$translateSanitization",b),angular.module("pascalprecht.translate").constant("pascalprechtTranslateOverrider",{}).provider("$translate",c),c.$inject=["$STORAGE_KEY","$windowProvider","$translateSanitizationProvider","pascalprechtTranslateOverrider"],c.displayName="displayName",angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation",d),d.$inject=["$interpolate","$translateSanitization"],d.displayName="$translateDefaultInterpolation",angular.module("pascalprecht.translate").constant("$STORAGE_KEY","NG_TRANSLATE_LANG_KEY"),angular.module("pascalprecht.translate").directive("translate",e),e.$inject=["$translate","$q","$interpolate","$compile","$parse","$rootScope"],e.displayName="translateDirective",angular.module("pascalprecht.translate").directive("translateCloak",f),f.$inject=["$rootScope","$translate"],f.displayName="translateCloakDirective",angular.module("pascalprecht.translate").filter("translate",g),g.$inject=["$parse","ayName="$translationCache","pascalprecht.translate"});
/*! 5.1.0 */
!function(){function a(a,b){window.XMLHttpRequest.prototype[a]=b(window.X||FileAPIapply(this,arguments)}}.apply(this,[b,"_fix_for_ie_crossdomain__",e]))}}}),a("getResponseHeader",function(a){return function(b){return this.__fileApiXHR&&this.__fileApiXHR.getResponseHeader?this.__fileApiXHR.getResponseHeader(b)getAllResponseHeaders?s)}}),a("setRequestHeader",function(a){return function(b,d){if("__setXHR_"===b){c(this);var e=d(this);e instanceof Function&&e(this)}else this.__requestHeaders=this.__requestHeaders||{},this.__requestHeaders[b]=d,a.apply(this,arguments)}}),a("send",function(a){return function(){var c=this;if(arguments[0]&&arguments[0].__isFileAPIShim){var d=arguments[0],e={url:c.__url,jsonp:!1,cache:!0,complete:function(a,d){c.__completed=!0,!a&&c.__listeners.load&&c.__listeners.load({type:"load",loaded:c.__loaded,total:c.__total,target:c,lengthComputable:!0}),!a&&c.__listeners.loadend&&c.__listeners.loadend({type:"putable:!0}),"abort"===a&&c.__listeners.abort&&c.__listeners.abort({type:"abort",loaded:c._al,target:c,lengthComputable:!0}),voiunction(){return 0===d.status&&a&&"abort"!==a?500:d.status}),void 0!==d.statusText&&b(c,"statusText",function(){return d.statusText}),b(c,"readyState",function(){return 4}),void 0!==d.response&&b(c,"response",function(){return d.response});var e=d.responseText||(a&&0==ss(a),c.__total=a.total,c.__loaded=a.loaded,a.total===a.loaded){var b=this;setTimeout(function(){c.__completed||(c.getAllResponseHeaders=function(){},b.complete(null,{status:204,statusText:"No Content"}))},FileAPI.nonull!=g.val.size&&null!=g.val.type?e.files[g.key]=g.val:e.data[g.key]=g.val}setTimeout(function(){if(!FileAPI.hasFlash)throw'Adode Flash Playeor;a.apply(c,argu,window.FormDattion/x-shockwave-flash"])return!0}return!1}function c(a){var b=0,c=0;if(window.jQuery)return jQuery(a).offset();if(a.offsetParent)do b+=a.offsetLeft-a.scrollLeft,c+=a.offsetTop-a.scrollTop,a=a.offsetParent;while(a);return{left:b,top:c}}if(FileAPI.shouldLoad){if(FileAPI.forceLoad&&(FileAPI.html5=!1),!FileAPI.upload){var d,e,f,g,h,i=document.createElement("script"),j=document.getElementsByTagName("script");if(window.FileAPI.jsUrl)d=window.FileAPI.jsUrl;else if(window.FileAPI.jsPath)e=window.FileAPI.jsPath;else for(f=0;f<j.length;f++)if(h=j[f].src,g=h.search(/\/ng\-file\-upload[\-a-zA-z0-9\.]*\.js/),g>-1){e=h.substring(0,g+1);break}null==FileAPI.staticPath&&(FileAPI.staticPath=e),i.setAttribute("src",d||e+"FileAPI.min.js"),document.getElementsByTagName("head")[0].appendChild(i),FileAPI.hasFlash=b()}FileAPI.ngfFixIE=function(d,e,f,g){if(!b())throw'Adode Flash Player need to be installed. To cher h=function(){if(d.ileapi-wrapper");else{var b=d.$$ngfRefElem;b?f(d.$$ngfRefElem):(b=d.$$ngfRefElem=e(),b.addClass("js-fileapi-wrapper"),!a(d),setTimeout(function(){b.bind("mouseenter",h)},10),b.bind("change",function(a){i.apply(this,[a]),g.apply(this,[a])})),a(d)||b.css("position","absolute").css("top",c(d[0]).top+"px").css("left",c(d[0]).left+"px").css("w].name&&(b[c].name="file")a.target.files!==b&&(a.__files_=b),(a.__files_||a.target.files).item=function(b){return(a.__files_||a.target.s("js-fileapi-wrapper"):an(){var a=this,b=!1[],a.listeners[b].push(c)},this.removeEventListener=function(b,c){a.listeners[b]&&a.listeners[b].(aend&&a.onloadend(c("loadend",d)),e=c("load",d),a.onload&&a.onload(e),a.dispatchEvent(e)):"progress"===d.type?(e=c("progress",d),a.onprogress&&a.onprogress(e),a.dispatchEvent(e)):(e=c("error",d),a.onerror&&a.onerror(e),a.dispatchEvent(e))};this.readAsArrayBuffer=function(a){FileAPI.readAsBinaryString(a,d)},this.readAsBinaryString=function(a){FileAPI.readAsBina!window.XMLHttpRequest||window.FileAPI&&FileAPI.shouldLoad||(window.XMLHttpRequest.prototype.setRequestHeader=function(a){return function(b,c){if("__setXHR_"===b){var d=c(this);d instanceof Function&&d(this)}else a.apply(this,arguments)}}(window.XMLHttpRequest.prototype.setRequestHeader));var ngFileUpload=angular.module("ngFileUpload",[]);ngFileUpload.version="5.1.0",ngFileUpload.defaults={},ngFileUpload.service("Upload",["$http","$q","$timeout",function(a,b,c){function d(d){d.method=d.method||"POST",d.headers=d.headers||{};var e=b.defer(),f=e.promise;return d.headers.__setXHR_=function(){return function(a){a&&(d.__XHR=a,d.xhrFn&&d.xhrFn(a),a.upload.addEventListener("progress",function(a){a.config=d,e.notify?e.notify(a):f.progressFunc&&c(function(){f.progressFunc(a)})},!1),a.upload.addEvnotify(aa){e.resolv(a){returror=fssFunc=a,f.then(null,null,function(b){a(b)}),f},f.abort=function(){return d.__XHR&&c(function(){d.__XHR.abort()}),f},f.xhr=function(a){return d.xhrFn=function(b){return function(){b&&b.apply(f,arguments),a.apply(f,arguments)}}(d.xhrFn),f},f}this.upload=function(a){function b(c,d,e){if(void 0!==d)if(angular.isDate(d)&&(d=d.toISOString()),angular.isString(d))c.append(e,d);else if("form"===a.sendFieldsAs)if(angular.isObject(d))for(var f in d)d.hasOwnProperty(f)&&b(c,d[f],e+"["+f+"]");else c.append(e,d);else d=angular.isString(d)?d:JSON.stringify(d),"json-blob"===a.sendFieldsAs?c.append(e,new Blob([d],{type:"application/json"})):c.append(e,d)}return a.headers=a.headers||{},a.headers["Content-Type"]=void 0,a.transformRequest=a.transformRequest?angular.isArray(a.transformRequest)?a.transformRequest:[a.transformRequest]:[],a.transformRequest.push(function(c){var d,e=new FormData,f={};for(d in a.fields)a.fields.hasOwnProperty(d)&&(f[d]=a.fields[d]);c&&(f.data=c);for(d in f)if(f.hasOwnProperty(d)){var g=f[d];a.formDataAppender?a.formDataAppender(e,d,g):b(e,g,d)}if(null!=a.file){var h=a.fileFormDataName||"file";if(angular.isArray(a.file))for(var i=angular.isString(h),j=0;j<a.file.length;j++)e.append(i?h:h[j],a.file[j],a.fileName&&a.fileName[j]||a.file[j].name);else e.append(h,a.file,a.fileName||a.file.name)}return e}),d(a)},this.http=function(b){return b.transformRequest=b.transformRequest||function(b){return window.ArrayBuffer&&b instanceof window.ArrayBuffer||b instanceof Blob?b:a.defaults.transformRequest[0](arguments)},d(b)},this.dataUrl=function(a,b,d){window.FileReader&&a&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 8")||a.size<2e4)&&(!wserAgent.indexOf("MSIE 9")||a.sindow.webkitURL;if(e&&e.createObjectURL&function(){b(a.target.result)})}}}):b(null)},this.setDefaults=function(a){ngFileUpload.defaults=a||{}}}]),function(){function a(a,f,g,h,i,j,k){function l(){return"input"===f[0].tagName.toLowerCase()&&g.type&&"file"===g.type.toLowerCase()}function m(b){if(!s){s=!0;try{for(var f=b.__files_||b.target&&b.target.files,k=[],l=[],m=0;m<f.length;m++){var n=f.item(m);d(a,i,g,n,b)?k.push(n):l.push(n)}e(i,j,a,h,g,c(g,"ngfChange")||c(g,"ngfSelect"),k,l,b),0===k.length&&(b.target.value=k)}finally{s=!1}}}function n(b){c(g,"ngfMultiple")&&b.attr("multiple",i(c(g,"ngfMultiple"))(a)),c(g,"ngfCapture")&&b.attr("capture",i(c(g,"ngfCapture"))(a)),c(g,"accept")&&b.attr("accept",c(g,"accept"));for(var d=0;d<f[0].attributes.length;d++){var e=f[0].attributes[d];(l()&&"type"!==e.name||"type"!==e.name&&"class"!==e.name&&"id"!==e.name&&"style"!==e.name)&&b.attr(e.name,e.value)}}function o(b,c){if(!c&&(b||l()))return f.$$ngfRefElem||f;var d=angular.element('<input type="file">');return n(d),l()?(f.replaceWith(d),f=d,d.attr("__ngf_gen__",!0),k(f)(a)):(d.css("visibility","hidden").css("position","absolute").css("overflow","hidden").css("width","0px").css("height","0px").css("z-index","-100000").css("border","none").css("margin","0px").css("padding","0px").attr("tabindex","-1"),f.$$ngfRefElem&&f.$$ngfRefElem.remove(),f.$$ngfRefElem=d,document.body.appendChild(d[0])),d}function p(b){e(i,j,a,h,g,c(g,"ngfChange")||c(g,"ngfSelect"),[],[],b,!0)}function q(d){function e(a){a&&a.clientY>0&&k[0].click(),!l()&&a||!j||f.bind("click touchend touchstart",q)}if(f.attr("disabled")||r)return!1;if(null!=d){if("touchstart"===d.type)return t=d.originalEvent.touches[0].clientY,!0;if(d.stopPropagation(),d.preventDefault(),"touchend"===d.type){var h=d.originalEvent.changedTouches[0].clientY;if(Math.abs(h-t)>20)return!1}}var j=i((!d||j)&&k.bind("change",m),d&&j&&i(c(g,"ngfResetModelOnClick"))(a)!==!1&&p(d),b(navigator.userAgent)?setTimeout(function(){e(d)},0):e(d)),!1}if(!f.attr("__ngf_gen__")){a.$on("$destroy",function(ar b=a.match(/Android[^\d]*(\d+)\.(\d+)/);if(b&&b.length>2){var c=ngFileUpload.defaults.androidFixMinorVersion||4;return parseInt(b[1])<4||parseInt(b[1])===c&&parseInt(b[2])<c}return-1===a.indexOf("Chrome")&&/.*Windows.*Safari.*/.test(a)}ngFileUpload.getAttrWithDefaults=function(a,b){return null!=a[b]?a[b]:null==ngFileUpload.defaults[b]?ngFileUpload.defaults[b]:ngFileUpload.defaults[b].toString()};var c=ngFileUpload.getAttrWithDefaults;ngFileUpload.directive("ngfSelect",["$parse","$timeout","$compile",function(b,c,d){return{restrict:"AEC",require:"?ngModel",link:function(e,f,g,h){a(e,f,g,h,b,c,d)}}}]),ngFileUpload.validate=function(a,b,d,e,f){function g(a){if(a.length>2&&"/"===a[0]&&"/"===a[a.length-1])return a.substring(1,a.length-1);var b=a.split(","),c="";if(b.length>1)for(var d=0;d<b.length;d++)c+="("+g(b[d])+")",d<b.length-1&&(c+="|");else 0===a.indexOf(".")&&(a="*"+a),c="^"+a.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]","g"),"\\$&")+"$",c=c.replace(/\\\*/g,".*").replace(/\\\?/g,".");return c}if(null==e)return!1;var h=b(c(d,"ngfAccept"))(a,{$file:e,$event:f}),i=b(c(d,"ngfMaxSize"))(a,{$file:e,$event:f})||9007199254740991,j=b(c(d,"ngfMinSize"))(a,{$file:e,$event:f})||-1;if(null!=h&&angular.isString(h)){var k=new RegExp(g(h),"gi");if(h=null!=e.type&&k.test(e.type.toLowerCase())||null!=e.name&&k.test(e.name.toLowerCase()),!h)return e.$error="accept",!1}else if(h===!1)return e.$error="accept",!1;return null==e.size?!0:e.size>i?(e.$error="maxSize",!1):e.size<j?(e.$error="minSize",!1):!0},ngFileUpload.updateModel=function(a,b,d,e,f,g,h,i,j,k){function l(){if(a(c(f,"ngfKeep"))(d)===!0){var k=(e.$modelValue||[]).slice(0);if(h&&h.length)if(a(c(f,"ngfKeepDistinct"))(d)===!0){for(var l=k.length,m=0;m<h.length;m++){for(var n=0;l>n&&h[m].name!==k[n].name;n++);n===l&&k.push(h[m])}h=k}else he h=k}e&&(a(c(f,"ngModel")).assign(d,h),b(function(){e&&e.$setViewValue(null!=h&&0===h.length?null:h)})),c(f,"ngModelRejected")&&a(c(f,"ngModelRejected")).assign(d,i),g&&a(g)(d,{$files:h,$rejectedFiles:i,$event:j})}k?l():b(function(){l()})};var d=ngFileUpload.validate,e=ngFileUpload.updateModel}(),function(){function a(a,f,g,h,i,j,k){function l(a,b,d){var f=!0,g=d.dataTransfer.items;if(null!=g)for(var h=0;h<g.length&&f;h++)f=f&&("file"===g[h].kind||""===g[h].kind)&&c(a,i,b,g[h],d);var j=i(e(b,"ngfDragOverClass"))(a,{$event:d});return j&&(j.delay&&(s=j.delay),j.accept&&(j=f?j.accept:j.reject)),j||e(b,"ngfDragOverClass")||"dragover"}function m(b,d,e,f){function h(d){c(a,i,g,d,b)?m.push(d):n.push(d)}function l(a,b,c){if(null!=b)if(b.isDirectory){var d=(c||"")+b.name;h({name:b.name,type:"directory",path:d});var e=b.createReader(),f=[];p++;var g=function(){e.readEntries(function(d){try{if(d.length)f=f.concat(Array.prototype.sli),g();else{for(var e=0;e<f.length;e++)l(a,f[e],(c?c:"")+b.name+"/");p--}}catch(h){p--,console.error(h)}},function(){p--})};g()}else p++,b.file(function(a){try{p--,a.path=(c?c:"")+a.name,h(a)}catch(b){p--,console.error(b)}},function(){p--})}var m=[],n=[],o=b.dataTransfer.items,p=0;if(o&&o.length>0&&"file"!==k.protocol())for(var q=0;q<o.length;q++){if(o[q].webkitGetAsEntry&&o[q].webkitGetAsEntry()&&o[q].webkitGetAsEntry().isDirectory){var r=o[q].webkitGetAsEntry();if(r.isDirectory&&!e)continue;null!=r&&l(m,r)}else{var s=o[q].getAsFile();null!=s&&h(s)}if(!f&&m.length>0)break}else{var t=b.dataTransfer.files;if(null!=t)for(var u=0;u<t.length&&(h(t.item(u)),f||!(m.length>0));u++);}var v=0;!function w(a){j(function(){if(p)10*v++<2e4&&w(10);else{if(!f&&m.length>1){for(q=0;"directory"===m[q].type;)q++;m=[m[q]]}d(m,n)}},a||0)}()}var n=b();if(e(g,"dropAvailable")&&j(function(){a[e(g,"dropAvailable")]?a[e(g,"dropAvailable")].value=n:a[e(g,"dropAvailable")]=n}),!n)return void(i(e(g,"ngfHideOnDropNotAvailable"))(a)===!0&&f.css("display","none"));var o=!1;-1===e(g,"ngfDrop").search(/\W+$files\W+/)&&a.$watch(e(g,"ngfDrop"),function(a){o=a===!1});var p,q=null,r=i(e(g,"ngfStopPropagation")),s=1;f[0].addEventListener("dragover",function(b){if(!f.attr("disabled")&&!o){if(b.preventDefault(),r(a)&&b.stopPropagation(),navigator.userAgent.indexOf("Chrome")>-1){var c=b.dataTransfer.effectAllowed;b.dataTransfer.dropEffect="move"===c||"linkMove"===c?"move":"copy"}j.cancel(q),a.actualDrap)}},!1),f[0].addEventListener("dragenter",function(b){f.attr("disabled")||o||(b.preventDefault(),r(a)&&b.stopPropagation())},!1),f[0].addEventListener("dragleave",function(){f.attr("disabled")||o||(q=j(function(){f.removeClass(p),p=null},s||1))},!1),f[0].addEventListener("drop",function(b){f.attr("disabled")||o||(b.preventDefault(),r(a)&&b.stopPropagation(),f.removeClass(p),p=null,m(b,function(c,f){d(i,j,a,h,g,e(g,"ngfChange")||e(g,"ngfDrop"),c,f,b)},i(e(g,"ngfAllowDir"))(a)!==!1,e(g,"multiple")||i(e(g,"ngfMultiple"))(a)))},!1)}function b(){var a=document.createElement("div");return"draggable"in a&&"ondrop"in a}var c=ngFileUpload.validate,d=ngFileUpload.updateModel,e=n",["$parse","$timeout","$location",function(b,c,d){return{restrict:"AEC",require:"?ngModel",link:function(e,f,g,h){a(e,f,g,h,b,c,d)}}}]),ngFileU{return function(a,c){b()&&c.css("display","none")}}),ngFileUpload.directive("ngfDropAvailable",["$parse","$timeout",function(a,c){return function(d,f,g){if(b()){var h=a(e(g,"ngfDropAvailable"));c(function(){h(d),h.assign&&h.assign(d,!0)})}}}])}(),function(){function a(a,b,c,d,e,f,g){b.$watch(e,function(e){window.FileReader&&ngFileUpload.valida,function(a){g?g(a):e.dataUrl=a||c(f)(b)},c(d.ngfNoObjectUrl)(b))})}ngFileUpload.directive("ngfSrc",["$parse","Upload",function(b,c){return{restrict:"AE",link:function(d{e.attr("src",a)})}}}]),ngFileUpload.directive("ngfBackground",["$parse","Upload",function(b,c){return{restrict:"AE",link:function(d,e,f){a(c,d,b,f,f.ngfBackground,f.ngfDefaultBackground,function(a){e.css("background-image","url("+a+")")})}}}]),ngFileUpload.directive("ngfDataUrl",["$parse","Upload",function(b,c){return{restrict:"AE",link:function(d,e,f){a(c,d,b,f,f.ngfDataUrl,f.ngfDefaultDataUrl)}}}])}();
/**
 * Enhanced Select2 Dropmenus
 *
 * @AJAX Mode - When in this mode, your value will be an object (or array of objects) of the data used by Select2
 *     This change is so that you do not have to do an additional query yourself on top of Select2's own query
 * @params [options] {object} The configuration options passed to $.fn.select2(). Refer to the documentation
 */
angular.module('ui.select2', []).value('uiSelect2Config', {}).directive('uiSelect2', ['uiSelect2Config', '$timeout', function (uiSelect2Config, $timeout) {
  var options = {};
  if (uiSelect2Config) {
    angular.extend(options, uiSelect2Config);
  }
  return {
    require: 'ngModel',
    priority: 1,
    compile: function (tElm, tAttrs) {
      var watch,
        repeatOption,
        repeatAttr,
        isSelect = tElm.is('select'),
        isMultiple = angular.isDefined(tAttrs.multiple);

      // Enable watching of the options dataset if in use
      if (tElm.is('select')) {
        repeatOption = tElm.find('option[ng-repeat], option[data-ng-repeat]');

        if (repeatOption.length) {
          repeatAttr = repeatOption.attr('ng-repeat') || repeatOption.attr('data-ng-repeat');
          watch = jQuery.trim(repeatAttr.split('|')[0]).split(' ').pop();
        }
      }

      return function (scope, elm, attrs, controller) {
        // instance-specific options
        var opts = angular.extend({}, options, scope.$eval(attrs.uiSelect2));

        /*
        Convert ftToAngularModel = function(select2_data) {
          var model;
          if (opts.simple_tags) {
            model = [];
            angular.forEach(select2_data, function(value, index) {
              model.push(value.id);
            });
          } else {
            model = select2_data;
          }
          return model;
        };

        /*
        Convert from Angular view-model to Select2 view-model.
        */
        var convertToSelect2Model = function(an        }

          if (opts.simple_tags) {
            model = [];
            angular.forEach(
              angular_data,
              function(value, index) {
                model.push({'id': value, 'text': value});
              });
          } else {
            model = angular_data;
          }
          return model;
        };

        if (isSelect) {
          // Use <select multiple> instead
          delete opts.multiple;
          delete opts.initSelection;
        } else if (isMultiple) {
          opts.multiple = true;
        }

        if (controller) {
          // Watch the model for programmatic changes
           scope.$watch(tAttrs.ngModel, function(current, old) {
            if (!current) {
              return;
            }
            if (current === old) {
              return;
            }
            controller.$render();
          }, true);
          controller.$render = function () {
            if (isSelect) {
              elm.select2('val', controller.$viewValue);
            } else {
              if (opts.multiple) {
                var viewValue = controller.$viewValue;
                if (angular.isString(viewValue)) {
                  viewValue = viewValue.split(',');
                }
                elm.select2(
                  'data', convertToSelect2Model(viewValue));
              } else {
                if (angular.isObject(controller.$viewValue)) {
                  elm.select2('data', controller.$viewValue);
                } else if (!controller.$viewValue) {
                  elm.select2('data', null);
                } else {
                  elm.select2('val', controller.$viewValue);
                }
              }
            }
          };

          // Watch the options dataset for changes
          if (watch) {
            scope.$watch(watch, function (newVal, oldVal, scope) {
              if (angular.equals(newVal, oldVal)) {
                return;
              }
              // Delayed so that the options have time to be rendered
              $timeout(function () {
                elm.select2('val', controller.$viewValue);
                // Refresh angular to remove the superfluous option
                elm.trigger('change');
                if(newVal && !oldVal && controller.$setPristine) {
                  controller.$setPristine(true);
                }
              });
            });
          }

          // Update valid and dirty statuses
          controller.$parsers.push(function (value) {
            var div = elm.prev();
            div
              .toggleClass('ng-invalid', !controller.$valid)
              .toggleClass('ng-valid', controller.$valid)
              .toggleClass('ng-invalid-required', !controller.$valid)
              .toggleClass('ng-valid-required', controller.$valid)
              .toggleClass('ng-dirty', controller.$dirty)
              .toggleClass('ng-pristine', controller.$pristine);
            return value;
          });

          if (!isSelect) {
            // Set the view and model value and update the angular template manually for the ajax/multiple select2.
            elm.bind("change", function (e) {
              e.stopImmediatePropagation();
              
              if (scope.$$phase || scope.$root.$$phase) {
                return;
              }
              scope.$apply(function () {
                controller.$setViewValue(
                  convertToAngularModel(elm.select2('data')));
              });
            });

            if (opts.initSelection) {
              var initSelection = opts.initSelection;
              opts.initSelection = function (element, callback) {
                initSelection(esetViewValue(convertToAngularModel(val     };
            }
          }
    estroy");
        });

        attrs.$observe('disabled', function (value) {
          elm.select2('enable', !value);
        });

        attrs.$observe('readonly', function (value) {
          elm.select2('readonly', !!value);
        });

        if (attrs.ngMultiple) {
          scope.$watch(attrs.ngMultiple, function(newVal) {
            attrs.$set('multiple', !!newVal);
            elm.select2(opts);
          });
        }

        // Initialize the plugin late so that the injected DOM does not disrupt the template compiler
        $timeout(function () {
          elm.select2(opts);

          // Set initial value - I'm not sure about this but it seems to need to be there
          elm.val(controller.$viewValue);
          // important!
          controller.$render();

          // Not sure if I should just check for !isSelect OR if I should check for 'tags' key
          if (!opts.initSelection && !isSelect) {
            controller.$setViewValue(
              convertToAngularModel(elm.select2('data'))
            );
          }
        });
      };
    }
  };
}]);

(function() {
    'use strict';

    /**
     * usage: <textarea ng-model="content" redactor></textarea>
     *
     *    additional options:
     *      redactor: hash (pass in a redactor options hash)
     *
     */

    var redactorOptions = {};

    angular.module('angular-redactor', [])
        .constant('redactorOptions', redactorOptions)
        .directive('redactor', ['$timeout', function($timeout) {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function(scope, element, attrs, ngModel) {

                    // Expose scope var with loaded st                           $timeout(function() {
                                scope.$apply(function() {
                                    ngModel.$setViewValue(value);
                                });
                            });
                        },
                        options = {
                            changeCallback: updateModel
                        },
                        additionalOptions = attrs.redactor ?
                            scope.$eval(attrs.redactor) : {},
                        editor;

                    angular.extend(options, redactorOptions, additionalOptions);

                    // prevent collision with   if (changeCallback) {
                        options.changeCallback = function(value) {
                            updateModel.call(this, value);
                            changeCallback.call(this, value);
                        }
                    }

                    // put in timeout to avoid $digest collision.  call render()
                        ngModel.$render();
                        element.on('remove',function(){
                            element.off('remove');
                            element.redactor('core.destroy');
                        });
                    });

                    ngModel.$render = function() {
                        if(angular.isDefined(editor)) {
                            $timeout(function() {
                                element.redactor('code.set', ngModel.$viewValue || '');
                                element.redactor('placeholder.toggle');
                                scope.redactorLoaded = true;
                            })ors :e=w,a.invalid=l,a.duration=Ya,a.isMoment=o,a.weekdays=lc,a.parseZone=$b,a.localeData=y,a.isDuration=Ia,a.monthsShort=kc,a.weekdaysMin=nc,a.defineLocale=x,a.weekdaysShort=mc,a.normalizeUnits=A,a.relativeTimeThreshold=Ec;var oe=a;return oe});
"format amd";!function(){"use strict";function a(a,b){return a.module("angularMoment",[]).constant("angularMomentConfig",{preprocess:null,timezone:"",format:null,statefulFilters:!0}).constant("moment",b).constant("amTimeAgoConfig",{withoutSuffix:!1,serverTime:null,titleFormat:null,fullDateThreshold:null,fullDateFormat:null}).directive("amTimeAgoonfig","angularMomentConfig",function(b,c,d,e,f){return function(g,h,i){function j(){var a;if(p)a=p;else if(e.serverTime){var b=(new Date).getTime(),d=b-w+e.serverTime;a=c(d)}else a=c();return a}function k(){q&&(b.clearTimeout(q),q=null)}function l(a){var c=j().dimat(v):a.from(j(),s)),t&&!h.attr("title")&&h.attr("title",a.local().format(t)),!d){var e=Math.abs(j().diff(a,"minute")),f=3600;1>e?f=1:60>e?f=30:180>e&&(f=300),q=b.setTimeout(function(){l(a)},1e3*f)}}function m(a){z&&h.attr("datetime",a)}function n(){if(k(),o){var a=d.preprocessDate(o,x,r);l(a),m(a.toISOString())}}var o,p,q=null,r=f.format,s=e.withoutSuffix,t=e.titleFormat,u=e.fullDateThreshold,v=e.fullDateFormat,w=(new Date).getTime(),x=f.preprocess,y=i.amTimeAgo,z="TIME"===h[0].nodeName.toUpperCase();g.$watch(y,function(a){return"undefined"==typeof a||null== n())}),a.isDefined(i.amFrom)&&g.$watch(i.amFrom,function(a){p="undefined"==typeof a||null===a||""===a?null:c(a),n()}),a.isDefined(i.amWithoutSuffix)&&g.$watch(i.amWithoutSuffix,function(a){"boolean"==tywithoutSuffix}),i.$observe("amFormat",function(a){"undefined"!=typeof a&&(r=a,n())}),i.$observe("amPreprocess",function(a){x=a,n()}),i.$observe("amFullDateThreshold",function(a){u=a,n()}),i.$observe("amFullDateFormat",function(a){v=a,n()mMoment",["moment","processors={utc:b.uton(c,f,g){return a.isUndefined(f)&&(f=e.preprocess),this.preprocessors[f]?this.preprocessors[f](c,g):(f&&d.warn("angular-moment: Ignoring unsupported value for preprocess: "+f),!isNaN(parseFloat(c))&&isFinite(c)?b(parseInt(c,10)):b(c,g))},this.applyTimezone=function(a,b){return(b=b||e.timezone)?(b.match(/^Z|[+-]\d\d:?\d\d$/i)?a=a.utcOffset(b):a.tz?a=a.tz(b):d.warn("angular-moment: named timezone specified but moment.tz() is undefined. Did you forget to include moment-timezone.js?"),a):a}}]).filter("amCalendar",["moment","amMoment","angularMomentConfig",function(a,b,c){function d(c,d,e){if("undefined"==typeof c||null===c)return"";c=b.preprocessDate(c,d);var f=a(c);return f.isValid()?b.applyTimezone(f,e).calendar():""}return d.$stateful=c.statefulFilters,d}]).filter("amDifference",["moment","amMoment","angularMomentConfig",function(a,b,c){function d(c,d,e,f,g,h){if("undefined"==typeof c||null===c)return"";c=b.preprocessDate(c,g);var i=a(c);if(!i.isValid())return"";var j;if("undefined"==typeof d||null===d)j=a();else if(d=b.preprocessDate(d,h),j=a(d),!j.isValid())return"";return b.applyTimezone(i).diff(b.applyTimezone(j),e,f)}return d.$stateful=c.statefulFilters,d}]).filter("amDateFormat",["moment","amMoment","angularMomentConfig",function(a,b,c){function d(d,e,f,g,h){var i=h||c.format;if("undefined"==typeof d||null===d)return"";d=b.preprocessDate(d,f,i);var j=a(d);return j.isValid()?b.applyTimezone(j,g).format(e):""}return d.$stateful=c.statefulFilters,d}]).filter("amDurationFormat",["moment","angularMomentConfig",function(a,b){function c(b,c,d){return"undefined"==typeof b||null===b?"":a.duration(b,c).humanize(d)}return c.$stateful=b.statefulFilters,c}]).filter("amTimeAgo",["moment","amMoment","angularMomentConfig",function(a,b,c){function d(c,d,e,f){var g,h;return"undefined"==typeof c||null===c?"":(c=b.preprocessDate(c,d),g=a(c),g.isValid()?(h=a(f),"undefined"!=typeof f&&h.isValid()?b.applyTimezone(g).from(h,e):b.applyTimezone(g).fromNow(e)):"")}return d.$stateful=c.statefulFilters,d}]).filter("amSubtract",["moment","angularMomentConfig",function(a,b){function c(b,c,d){return"undefined"==typeof b||null===b?"":a(b).subtract(parseInt(c,10),d)}return c.$stateful=b.statefulFilters,c}]).filter("amAdd",["moment","angularMomentConfig",function(a,b){function c(b,c,d){return"undefined"==typeof b||null===b?"":a(b).add(parseInt(c,10),d)}return c.$stateful=b.statefulFilters,c}])}"function"==typeof define&&define.amd?define(["angular","moment"],a):"undefined"!=typeof module&&module&&module.exports?(a(angular,require("moment")),module.exports="angularMoment"):a(angular,("undefined"!=typeof global?global:window).moment)}();
//# sourceMappingURL=angular-moment.min.js.map
// Generated by CoffeeScript 1.10.0
(function() {
  'use strict';
  var _containersControllers, _windowEventsHandlerBinded, _windowInViewItems, addWindowInViewItem, angularInviewModule, bindWindowEvents, checkInView, debounce, getBoundingClientRect, getOffsetFromPercentage, getViewportHeight, offsetIsPercentage, removeWindowInViewItem, trackInViewContainer, triggerInViewCallback, unbindWindowEvents, untrackInViewContainer, windowCheckInView, windowEventsHandler,
    slice = [].slice;

  angularInviewModule = angular.module('angular-inview', []).directive('inView', [
    '$parse', function($parse) {
      return {
        restrict: 'A',
        require: '?^inViewContainer',
        link: function(scope, element, attrs, containerController) {
          var inViewFunc, item, options, performCheck, ref, ref1;
          if (!attrs.inView) {
            return;
          }
          inViewFunc = $parse(attrs.inView);
          item = {
            element: element,
            wasInView: false,
            offset: 0,
            customDebouncedCheck: null,
            callback: function($event, $inview, $inviewpart) {
              if ($event == null) {
                $event = {};
              }
              return scope.$evalAsync((function(_this) {
                return function() {
                  $event.inViewTarget = element[0];
                  return inViewFunc(scope, {
                    '$event': $event,
                    '$inview': $inview,
                    '$inviewpart': $inviewpart
                  });
                };
              })(this));
            }
          };
          if ((attrs.inViewOptions != null) && (options = scope.$eval(attrs.inViewOptions))) {
            item.offset = options.offset || [options.offsetTop || 0, options.offsetBottom || 0];
            if (options.debounce) {
              item.customDebouncedCheck = debounce((function(event) {
                return checkInView([item], element[0], event);
              }), options.debounce);
            }
          }
          performCheck = (ref = (ref1 = item.customDebouncedCheck) != null ? ref1 : containerController != null ? containerController.checkInView : void 0) != null ? ref : windowCheckInView;
          if (containerController != null) {
            containerController.addItem(item);
          } else {
            addWindowInViewItem(item);
          }
          setTimeout(performCheck);
          return scope.$on('$destroy', function() {
            if (containerController != null) {
              containerController.removeItem(item);
            }
            return removeWindowInViewItem(item);
          });
        }
      };
    }
  ]).directive('inViewContainer', function() {
    return {
      restrict: 'AC',
      controller: [
        '$element', function($element) {
          this.items = [];
          this.addItem = function(item) {
            return this.items.push(item);
          };
          this.removeItem = function(item) {
            var i;
            return this.items = (function() {
              var j, len, ref, results;
              ref = this.items;
              results = [];
              for (j = 0, len = ref.length; j < len; j++) {
                i = ref[j];
                if (i !== item) {
                  results.push(i);
                }
              }
              return results;
            }).call(this);
          };
          this.checkInView = (function(_this) {
            return function(event) {
              var i, j, len, ref;
              ref = _this.items;
              for (j = 0, len = ref.length; j < len; j++) {
                i = ref[j];
                if (i.customDebouncedCheck != null) {
                  i.customDebouncedCheck();
                }
              }
              return checkInView((function() {
                var k, len1, ref1, results;
                ref1 = this.items;
                results = [];
                for (k = 0, len1 = ref1.length; k < len1; k++) {
                  i = ref1[k];
                  if (i.customDebouncedCheck == null) {
                    results.push(i);
                  }
                }
                return results;
              }).call(_this), $element[0], event);
            };
          })(this);
          return this;
        }
      ],
      link: function(scope, element, attrs, controller) {
        element.bind('scroll', controller.checkInView);
        trackInViewContainer(controller);
        return scope.$on('$destroy', function() {
          element.unbind('scroll', controller.checkInView);
          return untrackInViewContainer(controller);
        });
      }
    };
  });

  _windowInViewItems = [];

  addWindowInViewItem = function(item) {
    _windowInViewItems.push(item);
    return bindWindowEvents();
  };

  removeWindowInViewItem = function(item) {
    var i;
    _windowInViewItems = (function() {
      var j, len, results;
      results = [];
      for (j = 0, len = _windowInViewItems.length; j < len; j++) {
        i = _windowInViewItems[j];
        if (i !== item) {
          results.push(i);
        }
      }
      return results;
    })();
    return unbindWindowEvents();
  };

  _containersControllers = [];

  trackInViewContainer = function(controller) {
    _containersControllers.push(controller);
    return bindWindowEvents();
  };

  untrackInViewContainer = function(container) {
    var c;
    _containersControllers = (function() {
      var j, len, results;
      results = [];
      for (j = 0, len = _containersControllers.length; j < len; j++) {
        c = _containersControllers[j];
        if (c !== container) {
          results.push(c);
        }
      }
      return results;
    })();
    return unbindWindowEvents();
  };

  _windowEventsHandlerBinded = false;

  windowEventsHandler = function(event) {
    var c, j, len;
    for (j = 0, len = _containersControllers.length; j < len; j++) {
      c = _containersControllers[j];
      c.checkInView(event);
    }
    if (_windowInViewItems.length) {
      return windowCheckInView(event);
    }
  };

  bindWindowEvents = function() {
    if (_windowEventsHandlerBinded) {
      return;
    }
    _windowEventsHandlerBinded = true;
    return angular.element(window).bind('checkInView click ready wheel mousewheel DomMouseScroll MozMousePixelScroll resize scroll touchmove mouseup', windowEventsHandler);
  };

  unbindWindowEvents = function() {
    if (!_windowEventsHandlerBinded) {
      return;
    }
    if (_windowInViewItems.length || _containersControllers.length) {
      return;
    }
    _windowEventsHandlerBinded = false;
    return angular.element(window).unbind('checkInView click ready wheel mousewheel DomMouseScroll MozMousePixelScroll resize scroll touchmove mouseup', windowEventsHandler);
  };

  triggerInViewCallback = function(event, item, inview, isTopVisible, isBottomVisible) {
    var elOffsetTop, inviewpart;
    if (inview) {
      elOffsetTop = getBoundingClientRect(item.element[0]).top + window.pageYOffset;
      inviewpart = (isTopVisible && isBottomVisible && 'neither') || (isTopVisible && 'top') || (isBottomVisible && 'bottom') || 'both';
      if (!(item.wasInView && item.wasInView === inviewpart && elOffsetTop === item.lastOffsetTop)) {
        item.lastOffsetTop = elOffsetTop;
        item.wasInView = inviewpart;
        return item.callback(event, true, inviewpart);
      }
    } else if (item.wasInView) {
      item.wasInView = false;
      return item.callback(event, false);
    }
  };

  checkInView = function(items, container, event) {
    var bounds, boundsBottom, boundsTop, element, item, j, k, len, len1, ref, ref1, ref2, ref3, results, viewport;
    viewport = {
      top: 0,
      bottom: getViewportHeight()
    };
    if (container && container !== window) {
      bounds = getBoundingClientRect(container);
      if (bounds.top > viewport.bottom || bounds.bottom < viewport.top) {
        for (j = 0, len = items.length; j < len; j++) {
          item = items[j];
          triggerInViewCallback(event, item, false);
        }
        return;
      }
      if (bounds.top > viewport.top) {
        viewport.top = bounds.top;
      }
      if (bounds.bottom < viewport.bottom) {
        viewport.bottom = bounds.bottom;
      }
    }
    results = [];
    for (k = 0, len1 = items.length; k < len1; k++) {
      item = items[k];
      element = item.element[0];
      bounds = getBoundingClientRect(element);
      boundsTop = bounds.top + (offsetIsPercentage(item.offset) ? getOffsetFromPercentage(bounds, item.offset) : parseInt((ref = (ref1 = item.offset) != null ? ref1[0] : void 0) != null ? ref : item.offset));
      boundsBottom = bounds.bottom + (offsetIsPercentage(item.offset) ? getOffsetFromPercentage(bounds, item.offset) : parseInt((ref2 = (ref3 = item.offset) != null ? ref3[1] : void 0) != null ? ref2 : item.offset));
      if (boundsTop < viewport.bottom && boundsBottom >= viewport.top) {
        results.push(triggerInViewCallback(event, item, true, boundsBottom > viewport.bottom, boundsTop < viewport.top));
      } else {
        results.push(triggerInViewCallback(event, item, false));
      }
    }
    return results;
  };

  offsetIsPercentage = function(offset) {
    return typeof offset === 'string' && offset.slice(-1) === '%';
  };

  getOffsetFromPercentage = function(bounds, offsetPercentage) {
    var percentage;
    percentage = offsetPercentage.substring(0, offsetPercentage.length - 1);
    return (bounds.bottom - bounds.top) * (percentage / 100);
  };

  getViewportHeight = function() {
    var height, mode, ref;
    height = window.innerHeight;
    if (height) {
      return height;
    }
    mode = document.compatMode;
    if (mode || !(typeof $ !== "undefined" && $ !== null ? (ref = $.support) != null ? ref.boxModel : void 0 : void 0)) {
      height = mode === 'CSS1Compat' ? document.documentElement.clientHeight : document.body.clientHeight;
    }
    return height;
  };

  getBoundingClientRect = function(element) {
    var el, parent, top;
    if (element.getBoundingClientRect != null) {
      return element.getBoundingClientRect();
    }
    top = 0;
    el = element;
    while (el) {
      top += el.offsetTop;
      el = el.offsetParent;
    }
    parent = element.parentElement;
    while (parent) {
      if (parent.scrollTop != null) {
        top -= parent.scrollTop;
      }
      parent = parent.parentElement;
    }
    return {
      top: top,
      bottom: top + element.offsetHeight
    };
  };

  debounce = function(f, t) {
    var timer;
    timer = null;
    return function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      if (timer != null) {
        clearTimeout(timer);
      }
      return timer = setTimeout((function() {
        return f.apply(null, args);
      }), t != null ? t : 100);
    };
  };

  windowCheckInView = function(event) {
    var i, j, len;
    for (j = 0, len = _windowInViewItems.length; j < len; j++) {
      i = _windowInViewItems[j];
      if (i.customDebouncedCheck != null) {
        i.customDebouncedCheck();
      }
    }
    return checkInView((function() {
      var k, len1, results;
      results = [];
      for (k = 0, len1 = _windowInViewItems.length; k < len1; k++) {
        i = _windowInViewItems[k];
        if (i.customDebouncedCheck == null) {
          results.push(i);
        }
      }
      return results;
    })(), null, event);
  };

  if (typeof define === 'function' && define.amd) {
    define(['angular'], angularInviewModule);
  } else if (typeof module !== 'undefined' && module && module.exports) {
/* == jquery mousewheel plugin == Version: 3.1.13, License: MIT License (MIT) */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPagegeHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.f0]<i[0]?d[0]:d[1],n[1]<i[1]?d[0]:d[1]],r[0]-i[0]*l[0][0]<0&&r[0]+n[0]-i[0]*l[0][1]>=0&&r[1]-i[1]*l[1][0]<0&&r[1]+n[1]-i[1]*l[1][1]>=0},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflo(){"use strict";function a(){this.defaults={scrollButtons:{enable:!0},axis:"yx"},$.mCustomScrollbar.defaults.scrollButtons=this.defaults.scrollButtons,$.mCustomScrollbar.defaults.axis=this.defaults.axis,this.$get=function(){return{defaults:this.defaults}}}function b(a,b,c,d){c.mCustomScrollbar("destroy");var e={};d.ngScrollbarsConfig&&(e=d.ngScrollbarsConfig);for(var f in a)if(a.hasOwnProperty(f))switch(f){case"scrollButtons":e.hasOwnProperty(f)||(b.scrollButtons=a[f]);break;case"axis":e.hasOwnProperty(f)||(b.axis=a[f]);bustomScrollbar(e)}function c(a){return{scope:{ngScrollbarsConfig:"=?",ngScrollbarsUpdate:"=?",element:"=?"},link:function(c,d,e){c.elem=d;var f=a.defaults,g=$.mCustomScrollbar.defaults;c.ngScrollbarsUpdate=function(){d.mCustomScrollbar.apply(d,arguments)},c.$watch("ngScrollbarsConfig",function(a,e){void 0!==a&&b(f,g,d,c)}),b(f,g,d,c)}}}angular.module("ngScrollbars",[]).provider("ScrollBars",a).directive("ngScrollbars",c),a.$inject=[],c.$inject=["ScrollBars"]}();