/*!
 * jQuery UI 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */((jQuery);/*!
 * jQuery UI Widget 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */((jQuery);/*!
 * jQuery UI Mouse 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */((jQuery);/*
 * jQuery UI Position 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */((jQuery);/*
 * jQuery UI Autocomplete 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */((jQuery),jQuery);/*
 * jQuery UI Datepicker 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */((jQuery);;(function($){$.extend({
	notifier: {
		options: {
			core:				"notifier",
			box_class: 			"n-box",
			notice_class: 		"n-notice",
			error_class: 		"n-error",
			close_class: 		"n-close",
			duration:			4000
		},
		notices:{},


		broadcast: function(title, message, type){
			this.core();

			var id = "notice-" + this.timestamp();

			// set notices object
			this.notices[id] = {id: id};
			notice = {
				id: id,
				ttl: title,
				msg: message
			}

			// box
			$("#" + this.options.core).append(this.box(notice).addClass(type));
		},


		notice: function(title, message){
			this.broadcast(title, message, this.options.notice_class);
		},


		error: 


		core: function(){
			var core	= this.options.core;
			return $("#" + core).length == 0 ? $('body').append("<div id=\"" + core + "\"></div>") : $("#" + core);
		},


		box: function(notice){
			var box	= $("<div id=\"" + notice.id + "\" class=\"" + this.options.box_class + "\"></div>");
			if (notice.ttl != null) box.append($("<h3></h3>").append(notice.ttl));
			box.append($("<p></p>").append(notice.msg));
			box.hide().show();
			this.life(box, notice.id);
			this.events(box, notice.id);
			return box;
		},


		events: function(box, seed){
			$(box).bind(
				'click',
				function(){
					var seed = $(this).attr("id");
					$.notifier.destroy(seed, true);
				}
			)
			$(box).bind(
				'mouseover',
				function(){
					if($.notifier.notices[$(this).attr("id")].interval){
						var seed = $(this).attr("id");
						$.notifier.destroy(seed)
					}
				}
			)
			$(box).bind(
				'mouseout',
				function(){
					$.notifier.life(this, $(this).attr("id"));
				}
			)
		},


		life: function(box, seed){
			if(!this.notices[seed].duration){this.notices[seed].duration = this.options.duration}
			this.notices[seed].interval = {};
			this.notices[seed].interval	= setInterval(
				function(){
					(
					(seed)
				},
				this.notices[seed].duration
			)
		},


		destroy: function(seed, remove){
			clearInterval($.notifier.notices[seed].interval);
			delete $.notifier.notices[seed].interval;
			if(remove == true){$("#" + seed).slideUp(250, function(){$(this).remove()});}
		},


		timestamp:	}
})})(jQuery);/*
 * jqModal - Minimalist Modaling with jQuery
 *   (http://dev.iceburg.net/jquery/jqModal/)
 *
 * Copyright (c) 2007,2008 Brice Burgess <bhb@iceburg.net>
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * $Version: 03/01/2009 +r14
 */
(function ($) {
	$.fn.jqm = function (o) {
		var p = {
			overlay: 50,
			overlayClass: 'jqmOverlay',
			closeClass: 'jqmClose',
			trigger: '.jqModal',
			ajax: F,
			ajaxText: '',
			target: F,
			modal: F,
			toTop: F,
			onShow: F,
			onHide: F,
			onLoad: F
		};
		return this.each(function () {
			if (this._jqm) return H[this._jqm].c = $.extend({}, H[this._jqm].c, o);
			s++;
			this._jqm = s;
			H[s] = {
				c: $.extend(p, $.jqm.params, o),
				a: F,
				w: $(this).addClass('jqmID' + s),
				s: s
			};
			if (p.trigger) $(this).jqmAddTrigger(p.trigger);
		});
	};

	$.fn.jqmAddClose = function (e) {
		return hs(this, e, 'jqmHide');
	};
	$.fn.jqmAddTrigger = 
	$.fn.jqmShow = function (t) {
		return this.each(function () {
			t = t || window.event;
			$.jqm.open(this._jqm, t);
		});
	};
	$.fn.jqmHide = function (t) {
		return this.each(function () {
			t = t || window.event;
			$.jqm.close(this._jqm, t)
		});
	};

	$.jqm = {
		hash: {},
		open: function (s, t) {
			var h = H[s],
				c = h.c,
				cc = '.' + c.closeClass,
				z = (parseInt(h.w.css('z-index'))),
				z = (z > 0) ? z : 3000,
				o = $('<div></div>').css({
					height: '100%',
					width: '100%',
					position: 'fixed',
					left: 0,
					top: 0,
					'z-index': z - 1,
					opacity: c.overlay / 100
				});
			if (h.a) return F;
			h.t = t;
			h.a = true;
			h.w.css('z-index', z);
			if (c.modal) {
				if (!A[0]) L('bind');
				A.push(s);
			} else if (c.overlay > 0) h.w.jqmAddClose(o);
			else o = F;

			h.o = (o) ? o.addClass(c.overlayClass).prependTo('body') : F;
			if (ie6) {
				$('html,body').css({
					height: '100%',
					width: '100%'
				});
				if (o) {
					o = o.css({
						position: 'absolute'
					})[0];
					for (var y in {
						Top: 1,
						Left: 1
					}) o.style.setExpression(y.toLowerCase(), "(_=(document.documentElement.scroll" + y + " || document.body.scroll" + y + "))+'px'");
				}
			}

			if (c.ajax) {
				var r = c.target || h.w,
					u = c.ajax,
					r = (typeof r == 'string') ? $(r, h.w) : $(r),
					u = (u.substr(0, 1) == '@') ? $(t).attr(u.substring(1)) : u;
				r.html(c.ajaxText).load(u, ;
			} else if (cc) h.w.jqmAddClose($(cc, h.w));

			if (c.toTop && h.o) h.w.before('<span id="jqmP' + h.w[0]._jqm + '"></span>').insertAfter(h.o);
			(c.onShow) ? c.onShow(h) : h.w.show();
			e(h);
			return F;
		},
		close: function (s) {
			var h = H[s];
			if (!h.a) return F;
			h.a = F;
			if (A[0]) {
				A.pop();
				if (!A[0]) L('unbind');
			}
			if (h.c.toTop && h.o) $('#jqmP' + h.w[0]._jqm).after(h.w).remove();
			if (h.c.onHide) h.c.onHide(h);
			else {
				h.w.hide();
				if (h.o) h.o.remove();
			}
			return F;
		},
		params: {}
	};
	var s = 0,
		H = $.jqm.hash,
		A = [],
		ie6 = $.browser.msie && ($.browser.version == "6.0"),
		F = false,
		i = $('<iframe src="javascript:false;document.write(\'\');" class="jqm"></iframe>').css({
			opacity: 0
		}),
		e = function (h) {
			if (ie6) if (h.o) h.o.html('<p style="width:100%;height:100%"/>').prepend(i);
			else if (!$('iframe.jqm', h.w)[0]) h.w.prepend(i);
			f(h);
		},
		f = 
		L = 
		m = function (e) {
			var h = H[A[A.length - 1]],
				r = (!$(e.target).parents('.jqmID' + h.s)[0]);
			if (r) f(h);
			return !r;
		},
		hs = function (w, t, c) {
			return w.each(function () {
				var s = this._jqm;
				$(t).each(function () {
					if (!this[c]) {
						this[c] = [];
						$(this).click(;
					}
					this[c].push(s);
				});
			});
		};
})(jQuery);;/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;((jQuery);;



jQuery.richArray={isin:function(a,b){a=jQuery.richArray.getArray(a);b=b||0;for(var i=0,len=a.length;i<len;++i){if(a[i]==b){return true}}return false},unique:function(a){a=jQuery.richArray.getArray(a);var b=[];for(var i=0,len=a.length;i<len;++i){if(!jQuery.richArray.isin(b,a[i])){b.push(a[i])}}return b},diff:function(a,b){a=jQuery.richArray.getArray(a);b=jQuery.richArray.getArray(b);var c=[];for(var i=0,len=a.length;i<len;++i){if(!jQuery.richArray.isin(b,a[i])){c.push(a[i])}}return c},intersect:function(a,b){a=jQuery.richArray.getArray(a);b=jQuery.richArray.getArray(b);var c=[];for(var i=0,len=a.length;i<len;++i){if(jQuery.richArray.isin(b,a[i])){c.push(a[i])}}return c},filter:function(a,b,c){a=jQuery.richArray.getArray(a);b=jQuery.richArray.getFunction(b);c=c||this;var d=[];for(var i=0,len=a.length;i<len;++i){if(b.call(c,a[i])){d.push(a[i])}}return d},map:function(a,b,c){a=jQuery.richArray.getArray(a);b=jQuery.richArray.getFunction(b);c=c||this;result=[];for(var i=0,len=a.length;i<len;++i){result.push(b.call(c,a[i]))}return result},sum:function(a,b){a=jQuery.richArray.getArray(a);b=b||0;for(var i=0,len=a.length;i<len;++i){b+=a[i]}return b},product:function(a,b){a=jQuery.richArray.getArray(a);b=b||1;for(var i=0,len=a.length;i<len;++i){b*=a[i]}return b},reduce:function(a){a=jQuery.richArray.getArray(a);if(1==a.length){return a[0]}return a},compact:function(a){var b=[];for(var i=0,len=a.length;i<len;++i){if(null!=a[i]){b.push(a[i])}}return b},without:function(a,b){var c=[];for(var i=0,len=a.length;i<len;++i){if(b!=a[i]){c.push(a[i])}}return c},getArray:function(a){if(!(a instanceof Array)){a=[]}return a},getFunction:function(a){if(!(a instanceof Function))a=new Function();return a}};;// ----------------------------------------------------------------------------
// markItUp! Universal MarkUp Engine, JQuery plugin
// v 1.1.12
// Dual licensed under the MIT and GPL licenses.
// ----------------------------------------------------------------------------
// Copyright (C) 2007-2011 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// ----------------------------------------------------------------------------
(function($) {
	$.fn.markItUp = function(settings, extraSettings) {
		var options, ctrlKey, shiftKey, altKey;
		ctrlKey = shiftKey = altKey = false;

		options = {	id:						'',
			nameSpace:				'',
			root:					'',
			previewInWindow:		'', // 'width=800, height=600, resizable=yes, scrollbars=yes'
			previewAutoRefresh:		true,
			previewPosition:		'after',
			previewTemplatePath:	'~/templates/preview.html',
			previewParser:			false,
			previewParserPath:		'',
			previewParserVar:		'data',
			resizeHandle:			true,
			beforeInsert:			'',
			afterInsert:			'',
			onEnter:				{},
			onShiftEnter:			{},
			onCtrlEnter:			{},
			onTab:					{},
			markupSet:			[	{ /* set */ } ]
		};
		$.extend(options, settings, extraSettings);

		// compute markItUp! path
		if (!options.root) {
			$('script').each(function(a, tag) {
				miuScript = $(tag).get(0).src.match(/(.*)jquery\.markitup(\.pack)?\.js$/);
				if (miuScript !== null) {
					options.root = miuScript[1];
				}
			});
		}

		return this.each(function() {
			var $$, textarea, levels, scrollPosition, caretPosition, caretOffset,
				clicked, hash, header, footer, previewWindow, template, iFrame, abort;
			$$ = $(this);
			textarea = this;
			levels = [];
			abort = false;
			scrollPosition = caretPosition = 0;
			caretOffset = -1;

			options.previewParserPath = localize(options.previewParserPath);
			options.previewTemplatePath = localize(options.previewTemplatePath);

			// apply the computed path to ~/
			function localize(data, inText) {
				if (inText) {
					return 	data.replace(/("|')~\//g, "$1"+options.root);
				}
				return 	data.replace(/^~\//, options.root);
			}

			// init and build editor
			function init() {
				id = ''; nameSpace = '';
				if (options.id) {
					id = 'id="'+options.id+'"';
				} else if ($$.attr("id")) {
					id = 'id="markItUp'+($$.attr("id").substr(0, 1).toUpperCase())+($$.attr("id").substr(1))+'"';

				}
				if (options.nameSpace) {
					nameSpace = 'class="'+options.nameSpace+'"';
				}
				$$.wrap('<div '+nameSpace+'></div>');
				$$.wrap('<div '+id+' class="markItUp"></div>');
				$$.wrap('<div class="markItUpContainer"></div>');
				$$.addClass("markItUpEditor");

				// add the header before the textarea
				header = $('<div class="markItUpHeader"></div>').insertBefore($$);
				$(dropMenus(options.markupSet)).appendTo(header);

				// add the footer after the textarea
				footer = $('<div class="markItUpFooter"></div>').insertAfter($$);

				// add the resize handle after textarea
				if (options.resizeHandle === true && $.browser.safari !== true) {
					resizeHandle = $('<div class="markItUpResizeHandle"></div>')
						.insertAfter($$)
						.bind("mousedown", function(e) {
							var h = $$.height(), y = e.clientY, mouseMove, mouseUp;
							mouseMove = function(e) {
								$$.css("height", Math.max(20, e.clientY+h-y)+"px");
								return false;
							};
							mouseUp = function(e) {
								$("html").unbind("mousemove", mouseMove).unbind("mouseup", mouseUp);
								return false;
							};
							$("html").bind("mousemove", mouseMove).bind("mouseup", mouseUp);
						});
					footer.append(resizeHandle);
				}

				// listen key events
				$$.keydown(keyPressed).keyup(keyPressed);

				// bind an event to catch external calls
				$$.bind("insertion", function(e, settings) {
					if (settings.target !== false) {
						get();
					}
					if (textarea === $.markItUp.focused) {
						markup(settings);
					}
				});

				// remember the last focus
				$$.focus(;
			}

			// recursively build header with dropMenus from markupset
			function dropMenus(markupSet) {
				var ul = $('<ul></ul>'), i = 0;
				$('li:hover > ul', ul).css('display', 'block');
				$.each(markupSet, function() {
					var button = this, t = '', title, li, j;
					title = (button.key) ? (button.name||'')+' [Ctrl+'+button.key+']' : (button.name||'');
					key   = (button.key) ? 'accesskey="'+button.key+'"' : '';
					if (button.separator) {
						li = $('<li class="markItUpSeparator">'+(button.separator||'')+'</li>').appendTo(ul);
					} else {
						i++;
						for (j = levels.length -1; j >= 0; j--) {
							t += levels[j]+"-";
						}
						li = $('<li class="markItUpButton markItUpButton'+t+(i)+' '+(button.className||'')+'"><a href="" '+key+' title="'+title+'">'+(button.name||'')+'</a></li>')
							.bind("contextmenu", function() { // prevent contextmenu on mac and allow ctrl+click
								return false;
							}).click(function() {
								return false;
							}).bind("focusin", function(){
								//$$.focus();
							}).mouseup(function() {
								if (button.call) {
									eval(button.call)();
								}
								setTimeout(function() { markup(button) },1);
								return false;
							}).hover(function() {
									$('> ul', this).show();
									$(document).one('click', 									);
								}, function() {
									$('> ul', this).hide();
								}
							).appendTo(ul);
						if (button.dropMenu) {
							levels.push(i);
							$(li).addClass('markItUpDropMenu').append(dropMenus(button.dropMenu));
						}
					}
				});
				levels.pop();
				return ul;
			}

			// markItUp! markups
			function magicMarkups(string) {
				if (string) {
					string = string.toString();
					string = string.replace(/\(\!\(([\s\S]*?)\)\!\)/g,
						function(x, a) {
							var b = a.split('|!|');
							if (altKey === true) {
								return (b[1] !== undefined) ? b[1] : b[0];
							} else {
								return (b[1] === undefined) ? "" : b[0];
							}
						}
					);
					// [![prompt]!], [![prompt:!:value]!]
					string = string.replace(/\[\!\[([\s\S]*?)\]\!\]/g,
						function(x, a) {
							var b = a.split(':!:');
							if (abort === true) {
								return false;
							}
							value = prompt(b[0], (b[1]) ? b[1] : '');
							if (value === null) {
								abort = true;
							}
							return value;
						}
					);
					return string;
				}
				return "";
			}

			// prepare action
			function prepare(action) {
				if ($.isFunction(action)) {
					action = action(hash);
				}
				return magicMarkups(action);
			}

			// build block to insert
			function build(string) {
				var openWith 			= prepare(clicked.openWith);
				var placeHolder 		= prepare(clicked.placeHolder);
				var replaceWith 		= prepare(clicked.replaceWith);
				var closeWith 			= prepare(clicked.closeWith);
				var openBlockWith 		= prepare(clicked.openBlockWith);
				var closeBlockWith 		= prepare(clicked.closeBlockWith);
				var multiline 			= clicked.multiline;

				if (replaceWith !== "") {
					block = openWith + replaceWith + closeWith;
				} else if (selection === '' && placeHolder !== '') {
					block = openWith + placeHolder + closeWith;
				} else {
					string = string || selection;

					var lines = [string], blocks = [];
					if (multiline===true) {
						lines = string.split(/\r?\n/);
					}

					for (var l=0; l < lines.length; l++) {
						line = lines[l];
						var trailingSpaces;
						if (trailingSpaces = line.match(/ *$/)) {
							blocks.push(openWith + line.replace(/ *$/g, '') + closeWith + trailingSpaces);
						} else {
							blocks.push(openWith + line + closeWith);
						}
					}

					block = blocks.join("\n");
				}

				block = openBlockWith + block + closeBlockWith;

				return {	block:block,
					openWith:openWith,
					replaceWith:replaceWith,
					placeHolder:placeHolder,
					closeWith:closeWith
				};
			}

			// define markup to insert
			function markup(button) {
				var len, j, n, i;
				hash = clicked = button;
				get();
				$.extend(hash, {	line:"",
						root:options.root,
						textarea:textarea,
						selection:(selection||''),
						selectionOuter:(selectionOuter||''),
						caretPosition:caretPosition,
						ctrlKey:ctrlKey,
						shiftKey:shiftKey,
						altKey:altKey
					}
				);
				// callbacks before insertion
				prepare(options.beforeInsert);
				prepare(clicked.beforeInsert);
				if ((ctrlKey === true && shiftKey === true) || button.multiline === true) {
					prepare(clicked.beforeMultiInsert);
				}
				$.extend(hash, { line:1 });

				if ((ctrlKey === true && shiftKey === true)) {
					lines = selection.split(/\r?\n/);
					for (j = 0, n = lines.length, i = 0; i < n; i++) {
						if ($.trim(lines[i]) !== '') {
							$.extend(hash, { line:++j, selection:lines[i] } );
							lines[i] = build(lines[i]).block;
						} else {
							lines[i] = "";
						}
					}
					string = { block:lines.join('\n')};
					start = caretPosition;
					len = string.block.length + (($.browser.opera) ? n-1 : 0);
				} else if (ctrlKey === true) {
					string = build(selection);
					start = caretPosition + string.openWith.length;
					len = string.block.length - string.openWith.length - string.closeWith.length;
					len = len - (string.block.match(/ $/) ? 1 : 0);
					len -= fixIeBug(string.block);
				} else if (shiftKey === true) {
					string = build(selection);
					start = caretPosition;
					len = string.block.length;
					len -= fixIeBug(string.block);
				} else {
					string = build(selection);
					start = caretPosition + string.block.length ;
					len = 0;
					start -= fixIeBug(string.block);
				}
				if ((selection === '' && string.replaceWith === '')) {
					caretOffset += fixOperaBug(string.block);

					start = caretPosition + string.openWith.length;
					len = string.block.length - string.openWith.length - string.closeWith.length;

					caretOffset = $$.val().substring(caretPosition,  $$.val().length).length;
					caretOffset -= fixOperaBug($$.val().substring(0, caretPosition));
				}
				$.extend(hash, { caretPosition:caretPosition, scrollPosition:scrollPosition } );

				if (string.block !== selection && abort === false) {
					insert(string.block);
					set(start, len);
				} else {
					caretOffset = -1;
				}
				get();

				$.extend(hash, { line:'', selection:selection });

				// callbacks after insertion
				if ((ctrlKey === true && shiftKey === true) || button.multiline === true) {
					prepare(clicked.afterMultiInsert);
				}
				prepare(clicked.afterInsert);
				prepare(options.afterInsert);

				// refresh preview if opened
				if (previewWindow && options.previewAutoRefresh) {
					refreshPreview();
				}

				// reinit keyevent
				shiftKey = altKey = ctrlKey = abort = false;
			}

			// Substract linefeed in Opera
			function fixOperaBug(string) {
				if ($.browser.opera) {
					return string.length - string.replace(/\n*/g, '').length;
				}
				return 0;
			}
			// Substract linefeed in IE
			function fixIeBug(string) {
				if ($.browser.msie) {
					return string.length - string.replace(/\r*/g, '').length;
				}
				return 0;
			}

			// add markup
			function insert(block) {
				if (document.selection) {
					var newSelection = document.selection.createRange();
					newSelection.text = block;
				} else {
					textarea.value =  textarea.value.substring(0, caretPosition)  + block + textarea.value.substring(caretPosition + selection.length, textarea.value.length);
				}
			}

			// set a selection
			function set(start, len) {
				if (textarea.createTextRange){
					// quick fix to make it work on Opera 9.5
					if ($.browser.opera && $.browser.version >= 9.5 && len == 0) {
						return false;
					}
					range = textarea.createTextRange();
					range.collapse(true);
					range.moveStart('character', start);
					range.moveEnd('character', len);
					range.select();
				} else if (textarea.setSelectionRange ){
					textarea.setSelectionRange(start, start + len);
				}
				textarea.scrollTop = scrollPosition;
				textarea.focus();
			}

			// get the selection
			function get() {
				// get the selection by outer text
				selectionOuter = '';
				if(window.getSelection){
					selectionOuter = window.getSelection().toString();
				} else if(window.document.selection){
					var sel = window.document.selection.createRange();
					selectionOuter = sel.text || sel;
					if(selectionOuter.toString) {
						selectionOuter = selectionOuter.toString();
					} else {
						selectionOuter='';
					}
				}
				textarea.focus();

				scrollPosition = textarea.scrollTop;
				if (document.selection) {
					selection = document.selection.createRange().text;
					if ($.browser.msie) { // ie
						var range = document.selection.createRange(), rangeCopy = range.duplicate();
						rangeCopy.moveToElementText(textarea);
						caretPosition = -1;
						while(rangeCopy.inRange(range)) {
							rangeCopy.moveStart('character');
							caretPosition ++;
						}
					} else { // opera
						caretPosition = textarea.selectionStart;
					}
				} else { // gecko & webkit
					caretPosition = textarea.selectionStart;

					selection = textarea.value.substring(caretPosition, textarea.selectionEnd);
				}
				return selection;
			}

			// open preview window
			function preview() {
				if (!previewWindow || previewWindow.closed) {
					if (options.previewInWindow) {
						previewWindow = window.open('', 'preview', options.previewInWindow);
						$(window).unload(function() {
							previewWindow.close();
						});
					} else {
						iFrame = $('<iframe class="markItUpPreviewFrame"></iframe>');
						if (options.previewPosition == 'after') {
							iFrame.insertAfter(footer);
						} else {
							iFrame.insertBefore(header);
						}
						previewWindow = iFrame[iFrame.length - 1].contentWindow || frame[iFrame.length - 1];
					}
				} else if (altKey === true) {
					if (iFrame) {
						iFrame.remove();
					} else {
						previewWindow.close();
					}
					previewWindow = iFrame = false;
				}
				if (!options.previewAutoRefresh) {
					refreshPreview();
				}
				if (options.previewInWindow) {
					previewWindow.focus();
				}
			}

			// refresh Preview window
			
			function renderPreview() {
				var phtml;
				if (options.previewParser && typeof options.previewParser === 'function') {
					var data = options.previewParser( $$.val() );
					writeInPreview( localize(data, 1) );
				} else if (options.previewParserPath !== '') {
					$.ajax({
						type: 'POST',
						dataType: 'text',
						global: false,
						url: options.previewParserPath,
						data: options.previewParserVar+'='+encodeURIComponent($$.val()),
						success: 					});
				} else {
					if (!template) {
						$.ajax({
							url: options.previewTemplatePath,
							dataType: 'text',
							global: false,
							success: function(data) {
								writeInPreview( localize(data, 1).replace(/<!-- content -->/g, $$.val()) );
							}
						});
					}
				}
				return false;
			}

			function writeInPreview(data) {
				if (previewWindow.document) {
					try {
						sp = previewWindow.document.documentElement.scrollTop
					} catch(e) {
						sp = 0;
					}
					previewWindow.document.open();
					previewWindow.document.write(data);
					previewWindow.document.close();
					previewWindow.document.documentElement.scrollTop = sp;
				}
			}

			// set keys pressed
			function keyPressed(e) {
				shiftKey = e.shiftKey;
				altKey = e.altKey;
				ctrlKey = (!(e.altKey && e.ctrlKey)) ? (e.ctrlKey || e.metaKey) : false;

				if (e.type === 'keydown') {
					if (ctrlKey === true) {
						li = $('a[accesskey="'+String.fromCharCode(e.keyCode)+'"]', header).parent('li');
						if (li.length !== 0) {
							ctrlKey = false;
							setTimeout(1);
							return false;
						}
					}
					if (e.keyCode === 13 || e.keyCode === 10) { // Enter key
						if (ctrlKey === true) {  // Enter + Ctrl
							ctrlKey = false;
							markup(options.onCtrlEnter);
							return options.onCtrlEnter.keepDefault;
						} else if (shiftKey === true) { // Enter + Shift
							shiftKey = false;
							markup(options.onShiftEnter);
							return options.onShiftEnter.keepDefault;
						} else { // only Enter
							markup(options.onEnter);
							return options.onEnter.keepDefault;
						}
					}
					if (e.keyCode === 9) { // Tab key
						if (shiftKey == true || ctrlKey == true || altKey == true) {
							return false;
						}
						if (caretOffset !== -1) {
							get();
							caretOffset = $$.val().length - caretOffset;
							set(caretOffset, 0);
							caretOffset = -1;
							return false;
						} else {
							markup(options.onTab);
							return options.onTab.keepDefault;
						}
					}
				}
			}

			init();
		});
	};

	$.fn.markItUpRemove = function() {
		return this.each(function() {
				var $$ = $(this).unbind().removeClass('markItUpEditor');
				$$.parent('div').parent('div.markItUp').parent('div').replaceWith($$);
			}
		);
	};

	$.markItUp = function(settings) {
		var options = { target:false };
		$.extend(options, settings);
		if (options.target) {
			return $(options.target).each(function() {
				$(this).focus();
				$(this).trigger('insertion', [options]);
			});
		} else {
			$('textarea').trigger('insertion', [options]);
		}
	};
})(jQuery);
;/*!
 * jQuery Form Plugin
 * version: 2.83 (11-JUL-2011)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($) {

	/*
        Usage Note:
        -----------
        Do not use both ajaxSubmit and ajaxForm on the same form.  These
        functions are intended to be exclusive.  Use ajaxSubmit if you want
        to bind your own submit handler to the form.  For example,

        $(document).ready(function() {
            $('#myForm').bind('submit', function(e) {
                e.preventDefault(); // <-- important
                $(this).ajaxSubmit({
                    target: '#output'
                });
            });
        });

        Use ajaxForm when you want the plugin to manage all the event binding
        for you.  For example,

        $(document).ready(function() {
            $('#myForm').ajaxForm({
                target: '#output'
            });
        });

        When using ajaxForm, the ajaxSubmit function will be invoked for you
        at the appropriate time.
    */

	/**
	 * ajaxSubmit() provides a mechanism for immediately submitting
	 * an HTML form using AJAX.
	 */
	$.fn.ajaxSubmit = function(options) {
		// fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
		if (!this.length) {
			log('ajaxSubmit: skipping submit process - no element selected');
			return this;
		}

		var method, action, url, $form = this;

		if (typeof options == 'function') {
			options = { success: options };
		}

		method = this.attr('method');
		action = this.attr('action');
		url = (typeof action === 'string') ? $.trim(action) : '';
		url = url || window.location.href || '';
		if (url) {
			// clean url (don't include hash vaue)
			url = (url.match(/^([^#]+)/)||[])[1];
		}

		options = $.extend(true, {
			url:  url,
			success: $.ajaxSettings.success,
			type: method || 'GET',
			iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
		}, options);

		// hook for manipulating the form data before it is extracted;
		// convenient for use with rich editors like tinyMCE or FCKEditor
		var veto = {};
		this.trigger('form-pre-serialize', [this, options, veto]);
		if (veto.veto) {
			log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
			return this;
		}

		// provide opportunity to alter form data before it is serialized
		if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
			log('ajaxSubmit: submit aborted via beforeSerialize callback');
			return this;
		}

		var n,v,a = this.formToArray(options.semantic);
		if (options.data) {
			options.extraData = options.data;
			for (n in options.data) {
				if(options.data[n] instanceof Array) {
					for (var k in options.data[n]) {
						a.push( { name: n, value: options.data[n][k] } );
					}
				}
				else {
					v = options.data[n];
					v = $.isFunction(v) ? v() : v; // if value is fn, invoke it
					a.push( { name: n, value: v } );
				}
			}
		}

		// give pre-submit callback an opportunity to abort the submit
		if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
			log('ajaxSubmit: submit aborted via beforeSubmit callback');
			return this;
		}

		// fire vetoable 'validate' event
		this.trigger('form-submit-validate', [a, this, options, veto]);
		if (veto.veto) {
			log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
			return this;
		}

		var q = $.param(a);

		if (options.type.toUpperCase() == 'GET') {
			options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
			options.data = null;  // data is null for 'get'
		}
		else {
			options.data = q; // data is the query string for 'post'
		}

		var callbacks = [];
		if (options.resetForm) {
			callbacks.push(function() { $form.resetForm(); });
		}
		if (options.clearForm) {
			callbacks.push(function() { $form.clearForm(); });
		}

		// perform a load on the target only if dataType is not provided
		if (!options.dataType && options.target) {
			var oldSuccess = options.success || function(){};
			callbacks.push(;
		}
		else if (options.success) {
			callbacks.push(options.success);
		}

		options.success = 

		// are there files to upload?
		var fileInputs = $('input:file', this).length > 0;
		var mp = 'multipart/form-data';
		var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

		// options.iframe allows user to force iframe mode
		// 06-NOV-09: now defaulting to iframe mode if file input is detected
		if (options.iframe !== false && (fileInputs || options.iframe || multipart)) {
			// hack to fix Safari hang (thanks to Tim Molendijk for this)
			// see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
			if (options.closeKeepAlive) {
				$.get(options.closeKeepAlive, ;
			}
			else {
				fileUpload(a);
			}
		}
		else {
			// IE7 massage (see issue 57)
			if ($.browser.msie && method == 'get') {
				var ieMeth = $form[0].getAttribute('method');
				if (typeof ieMeth === 'string')
					options.type = ieMeth;
			}
			$.ajax(options);
		}

		// fire 'notify' event
		this.trigger('form-submit-notify', [this, options]);
		return this;


		// private function for handling file uploads (hat tip to YAHOO!)
		function fileUpload(a) {
			var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
			var useProp = !!$.fn.prop;

			if (a) {
				// ensure that every serialized input is still enabled
				for (i=0; i < a.length; i++) {
					el = $(form[a[i].name]);
					el[ useProp ? 'prop' : 'attr' ]('disabled', false);
				}
			}

			if ($(':input[name=submit],:input[id=submit]', form).length) {
				// if there is an input with a name or id of 'submit' then we won't be
				// able to invoke the submit fn on the form (at least not x-browser)
				alert('Error: Form elements must not have name or id of "submit".');
				return;
			}

			s = $.extend(true, {}, $.ajaxSettings, options);
			s.context = s.context || s;
			id = 'jqFormIO' + (new Date().getTime());
			if (s.iframeTarget) {
				$io = $(s.iframeTarget);
				n = $io.attr('name');
				if (n == null)
					$io.attr('name', id);
				else
					id = n;
			}
			else {
				$io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
				$io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
			}
			io = $io[0];


			xhr = { // mock object
				aborted: 0,
				responseText: null,
				responseXML: null,
				status: 0,
				statusText: 'n/a',
				getAllResponseHeaders: function() {},
				getResponseHeader: function() {},
				setRequestHeader: function() {},
				abort: 			};

			g = s.global;
			// trigger ajax global events so that activity/block indicators work like normal
			if (g && ! $.active++) {
				$.event.trigger("ajaxStart");
			}
			if (g) {
				$.event.trigger("ajaxSend", [xhr, s]);
			}

			if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
				if (s.global) {
					$.active--;
				}
				return;
			}
			if (xhr.aborted) {
				return;
			}

			// add submitting element to data if we know it
			sub = form.clk;
			if (sub) {
				n = sub.name;
				if (n && !sub.disabled) {
					s.extraData = s.extraData || {};
					s.extraData[n] = sub.value;
					if (sub.type == "image") {
						s.extraData[n+'.x'] = form.clk_x;
						s.extraData[n+'.y'] = form.clk_y;
					}
				}
			}

			var CLIENT_TIMEOUT_ABORT = 1;
			var SERVER_ABORT = 2;

			
			// take a breath so that pending repaints get some cpu time before the upload starts
			function doSubmit() {
				// make sure form attrs are set
				var t = $form.attr('target'), a = $form.attr('action');

				// update form attrs in IE friendly way
				form.setAttribute('target',id);
				if (!method) {
					form.setAttribute('method', 'POST');
				}
				if (a != s.url) {
					form.setAttribute('action', s.url);
				}

				// ie borks in some cases when setting encoding
				if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
					$form.attr({
						encoding: 'multipart/form-data',
						enctype:  'multipart/form-data'
					});
				}

				// support timout
				if (s.timeout) {
					timeoutHandle = setTimeout( s.timeout);
				}

				// look for server aborts
				function checkState() {
					try {
						var state = getDoc(io).readyState;
						log('state = ' + state);
						if (state.toLowerCase() == 'uninitialized')
							setTimeout(checkState,50);
					}
					catch(e) {
						log('Server abort: ' , e, ' (', e.name, ')');
						cb(SERVER_ABORT);
						timeoutHandle && clearTimeout(timeoutHandle);
						timeoutHandle = undefined;
					}
				}

				// add "extra" data to form if provided in options
				var extraInputs = [];
				try {
					if (s.extraData) {
						for (var n in s.extraData) {
							extraInputs.push(
								$('<input type="hidden" name="'+n+'" />').attr('value',s.extraData[n])
									.appendTo(form)[0]);
						}
					}

					if (!s.iframeTarget) {
						// add iframe to doc and submit the form
						$io.appendTo('body');
						io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);
					}
					setTimeout(checkState,15);
					form.submit();
				}
				finally {
					// reset attrs and remove "extra" input elements
					form.setAttribute('action',a);
					if(t) {
						form.setAttribute('target', t);
					} else {
						$form.removeAttr('target');
					}
					$(extraInputs).remove();
				}
			}

			if (s.forceSync) {
				doSubmit();
			}
			else {
				setTimeout(doSubmit, 10); // this lets dom updates render
			}

			var data, doc, domCheckCount = 50, callbackProcessed;

			function cb(e) {
				if (xhr.aborted || callbackProcessed) {
					return;
				}
				try {
					doc = getDoc(io);
				}
				catch(ex) {
					log('cannot access response document: ', ex);
					e = SERVER_ABORT;
				}
				if (e === CLIENT_TIMEOUT_ABORT && xhr) {
					xhr.abort('timeout');
					return;
				}
				else if (e == SERVER_ABORT && xhr) {
					xhr.abort('server abort');
					return;
				}

				if (!doc || doc.location.href == s.iframeSrc) {
					// response not received yet
					if (!timedOut)
						return;
				}
				io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);

				var status = 'success', errMsg;
				try {
					if (timedOut) {
						throw 'timeout';
					}

					var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
					log('isXml='+isXml);
					if (!isXml && window.opera && (doc.body == null || doc.body.innerHTML == '')) {
						if (--domCheckCount) {
							// in some browsers (Opera) the iframe DOM is not always traversable when
							// the onload callback fires, so we loop a bit to accommodate
							log('requeing onLoad callback, DOM not available');
							setTimeout(cb, 250);
							return;
						}
						// let this fall through because server response could be an empty document
						//log('Could not access iframe DOM after mutiple tries.');
						//throw 'DOMException: not available';
					}

					//log('response detected');
					var docRoot = doc.body ? doc.body : doc.documentElement;
					xhr.responseText = docRoot ? docRoot.innerHTML : null;
					xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
					if (isXml)
						s.dataType = 'xml';
					xhr.getResponseHeader = 
					// support for XHR 'status' & 'statusText' emulation :
					if (docRoot) {
						xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
						xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
					}

					var dt = s.dataType || '';
					var scr = /(json|script|text)/.test(dt.toLowerCase());
					if (scr || s.textarea) {
						// see if user embedded response in textarea
						var ta = doc.getElementsByTagName('textarea')[0];
						if (ta) {
							xhr.responseText = ta.value;
							// support for XHR 'status' & 'statusText' emulation :
							xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
							xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
						}
						else if (scr) {
							// account for browsers injecting pre around json response
							var pre = doc.getElementsByTagName('pre')[0];
							var b = doc.getElementsByTagName('body')[0];
							if (pre) {
								xhr.responseText = pre.textContent ? pre.textContent : pre.innerHTML;
							}
							else if (b) {
								xhr.responseText = b.innerHTML;
							}
						}
					}
					else if (s.dataType == 'xml' && !xhr.responseXML && xhr.responseText != null) {
						xhr.responseXML = toXml(xhr.responseText);
					}

					try {
						data = httpData(xhr, s.dataType, s);
					}
					catch (e) {
						status = 'parsererror';
						xhr.error = errMsg = (e || status);
					}
				}
				catch (e) {
					log('error caught: ',e);
					status = 'error';
					xhr.error = errMsg = (e || status);
				}

				if (xhr.aborted) {
					log('upload aborted');
					status = null;
				}

				if (xhr.status) { // we've set xhr.status
					status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
				}

				// ordering of these callbacks/triggers is odd, but that's how $.ajax does it
				if (status === 'success') {
					s.success && s.success.call(s.context, data, 'success', xhr);
					g && $.event.trigger("ajaxSuccess", [xhr, s]);
				}
				else if (status) {
					if (errMsg == undefined)
						errMsg = xhr.statusText;
					s.error && s.error.call(s.context, xhr, status, errMsg);
					g && $.event.trigger("ajaxError", [xhr, s, errMsg]);
				}

				g && $.event.trigger("ajaxComplete", [xhr, s]);

				if (g && ! --$.active) {
					$.event.trigger("ajaxStop");
				}

				s.complete && s.complete.call(s.context, xhr, status);

				callbackProcessed = true;
				if (s.timeout)
					clearTimeout(timeoutHandle);

				// clean up
				setTimeout( 100);
			}

			var toXml = $.parseXML || 
			var parseJSON = $.parseJSON || 

			var httpData = 
		}
	};

	/**
	 * ajaxForm() provides a mechanism for fully automating form submission.
	 *
	 * The advantages of using this method instead of ajaxSubmit() are:
	 *
	 * 1: This method will include coordinates for <input type="image" /> elements (if the element
	 *	is used to submit the form).
	 * 2. This method will include the submit element's name/value data (for the element that was
	 *	used to submit the form).
	 * 3. This method binds the submit() method to the form for you.
	 *
	 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
	 * passes the options argument along after properly binding events for submit elements and
	 * the form itself.
	 */
	$.fn.ajaxForm = 

// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
	$.fn.ajaxFormUnbind = function() {
		return this.unbind('submit.form-plugin click.form-plugin');
	};

	/**
	 * formToArray() gathers form element data into an array of objects that can
	 * be passed to any of the following ajax functions: $.get, $.post, or load.
	 * Each object in the array has both a 'name' and 'value' property.  An example of
	 * an array for a simple login form might be:
	 *
	 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
	 *
	 * It is this array that is passed to pre-submit callback functions provided to the
	 * ajaxSubmit() and ajaxForm() methods.
	 */
	$.fn.formToArray = 

	/**
	 * Serializes form data into a 'submittable' string. This method will return a string
	 * in the format: name1=value1&amp;name2=value2
	 */
	$.fn.formSerialize = 

	/**
	 * Serializes all field elements in the jQuery object into a query string.
	 * This method will return a string in the format: name1=value1&amp;name2=value2
	 */
	$.fn.fieldSerialize = 

	/**
	 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
	 *
	 *  <form><fieldset>
	 *	  <input name="A" type="text" />
	 *	  <input name="A" type="text" />
	 *	  <input name="B" type="checkbox" value="B1" />
	 *	  <input name="B" type="checkbox" value="B2"/>
	 *	  <input name="C" type="radio" value="C1" />
	 *	  <input name="C" type="radio" value="C2" />
	 *  </fieldset></form>
	 *
	 *  var v = $(':text').fieldValue();
	 *  // if no values are entered into the text inputs
	 *  v == ['','']
	 *  // if values entered into the text inputs are 'foo' and 'bar'
	 *  v == ['foo','bar']
	 *
	 *  var v = $(':checkbox').fieldValue();
	 *  // if neither checkbox is checked
	 *  v === undefined
	 *  // if both checkboxes are checked
	 *  v == ['B1', 'B2']
	 *
	 *  var v = $(':radio').fieldValue();
	 *  // if neither radio is checked
	 *  v === undefined
	 *  // if first radio is checked
	 *  v == ['C1']
	 *
	 * The successful argument controls whether or not the field element must be 'successful'
	 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
	 * The default value of the successful argument is true.  If this value is false the value(s)
	 * for each element is returned.
	 *
	 * Note: This method *always* returns an array.  If no valid value can be determined the
	 *	   array will be empty, otherwise it will contain one or more values.
	 */
	$.fn.fieldValue = 

	/**
	 * Returns the value of the field element.
	 */
	$.fieldValue = 

	/**
	 * Clears the form data.  Takes the following actions on the form's input fields:
	 *  - input text fields will have their 'value' property set to the empty string
	 *  - select elements will have their 'selectedIndex' property set to -1
	 *  - checkbox and radio inputs will have their 'checked' property set to false
	 *  - inputs of type submit, button, reset, and hidden will *not* be effected
	 *  - button elements will *not* be effected
	 */
	$.fn.clearForm = 

	/**
	 * Clears the selected form elements.
	 */
	$.fn.clearFields = $.fn.clearInputs = function() {
		var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
		return this.each(function() {
			var t = this.type, tag = this.tagName.toLowerCase();
			if (re.test(t) || tag == 'textarea') {
				this.value = '';
			}
			else if (t == 'checkbox' || t == 'radio') {
				this.checked = false;
			}
			else if (tag == 'select') {
				this.selectedIndex = -1;
			}
		});
	};

	/**
	 * Resets the form data.  Causes all form elements to be reset to their original value.
	 */
	$.fn.resetForm = 

	/**
	 * Enables or disables any matching elements.
	 */
	$.fn.enable = 

	/**
	 * Checks/unchecks any matching checkboxes or radio buttons and
	 * selects/deselects and matching option elements.
	 */
	$.fn.selected = 

// helper fn for console logging
	function log() {
		var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
		if (window.console && window.console.log) {
			window.console.log(msg);
		}
		else if (window.opera && window.opera.postError) {
			window.opera.postError(msg);
		}
	};

})(jQuery);
;/*
 *jQuery browser plugin detection 1.0.3
 * http://plugins.jquery.com/project/jqplugin
 * Checks for plugins / mimetypes supported in the browser extending the jQuery.browser object
 * Copyright (c) 2008 Leonardo Rossetti motw.leo@gmail.com
 * MIT License: http://www.opensource.org/licenses/mit-license.php
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   THE SOFTWARE.
*/
(function ($) {
	//$.getScript("http://java.com/js/deployJava.js");

	//checks if browser object exists
	if (typeof $.browser === "undefined" || !$.browser) {
		var browser = {};
		$.extend(browser);
	}
	var pluginList = {
		flash: {
			activex: ["ShockwaveFlash.ShockwaveFlash", "ShockwaveFlash.ShockwaveFlash.3", "ShockwaveFlash.ShockwaveFlash.4", "ShockwaveFlash.ShockwaveFlash.5", "ShockwaveFlash.ShockwaveFlash.6", "ShockwaveFlash.ShockwaveFlash.7"],
			plugin: /flash/gim
		},
		sl: {
			activex: ["AgControl.AgControl"],
			plugin: /silverlight/gim
		},
		pdf: {
			activex: ["acroPDF.PDF.1", "PDF.PdfCtrl.1", "PDF.PdfCtrl.4", "PDF.PdfCtrl.5", "PDF.PdfCtrl.6"],
			plugin: /adobe\s?acrobat/gim
		},
		qtime: {
			activex: ["QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "QuickTime.QuickTime.4"],
			plugin: /quicktime/gim
		},
		wmp: {
			activex: ["WMPlayer.OCX", "MediaPlayer.MediaPlayer.1"],
			plugin: /(windows\smedia)|(Microsoft)/gim
		},
		shk: {
			activex: ["SWCtl.SWCtl", "SWCt1.SWCt1.7", "SWCt1.SWCt1.8", "SWCt1.SWCt1.9", "ShockwaveFlash.ShockwaveFlash.1"],
			plugin: /shockwave/gim
		},
		rp: {
			activex: ["RealPlayer", "rmocx.RealPlayer G2 Control.1"],
			plugin: /realplayer/gim
		}
	};
	var isSupported = function (p) {
		if (window.ActiveXObject) {
			$.browser[p] = false;

			for (i = 0; i < pluginList[p].activex.length; i++) {
				try {
					new ActiveXObject(pluginList[p].activex[i]);
					$.browser[p] = true;
				} catch (e) {}
			}
		} else {
			$.each(navigator.plugins, function () {
				if (this.name.match(pluginList[p].plugin)) {
					$.browser[p] = true;
					return false;
				} else {
					$.browser[p] = false;
				}
			});
		}
	};

	$.each(pluginList, ;
	//uses sun script to detect if java plugin is available
	/*
	$.getScript("http://java.com/js/deployJava.js", function () {
		if (deployJava.versionCheck("1.6.0+") || deployJava.versionCheck("1.4") || deployJava.versionCheck("1.5.0*")) {
			$.browser.java = true;
		} else {
			$.browser.java = false;
		}
	});
	*/
})(jQuery);;/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie = 
;(function($){
	$.fn.serializeJSON=function() {
		var json = {};
		jQuery.map($(this).serializeArray(), ;
		return json;
	};
})(jQuery);;;(function($) {

	jQuery.fn.choose = 


	jQuery.fn.file = function(options) {
		var config = $.extend({
			name: 'file-upload'
		}, options);
		return this.each(function() {
			var btn = $(this);
			var pos = btn.offset();

			function update() {
				pos = btn.offset();
				file.css({
					'top': pos.top,
					'left': pos.left,
					'width': btn.width(),
					'height': btn.height()
				});
			}

			btn.mouseover(update);

			var hidden = $('<div></div>').css({
				'display': 'none'
			}).appendTo('body');

			var file = $('<div id="area-form-file-'+config.name+'"><form></form></div>').appendTo('body').css({
				'position': 'absolute',
				'overflow': 'hidden',
				'-moz-opacity': '0',
				'filter':  'alpha(opacity: 0)',
				'opacity': '0',
				'cursor': 'pointer',
				'z-index': '2'
			});

			var form = file.find('form');
			var input = form.find('input');

			function reset() {
				var input = $('<input type="file" multiple>').attr('name',config.name).css({'cursor':'pointer'}).appendTo(form);
				input.change(function(e) {
					input.unbind();
					input.detach();
					btn.trigger('choose', [input]);
					reset();
				});
			};

			reset();

			function placer(e) {
				form.css('margin-left', e.pageX - pos.left - offset.width);
				form.css('margin-top', e.pageY - pos.top - offset.height + 3);
			}

			
			file.mousemove(placer);
			btn.mousemove(placer);

			redirect('mouseover');
			redirect('mouseout');
			redirect('mousedown');
			redirect('mouseup');

			var offset = {
				width: file.width() - 25,
				height: file.height() / 2
			};

			update();
		});
	};

})(jQuery);;/**
 * jquery.Jcrop.js v0.9.9
 * jQuery Image Cropping Plugin
 * @author Kelly Hallman <khallman@gmail.com>
 * Copyright (c) 2008-2011 Kelly Hallman - released under MIT License {{{
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * }}}
 */

(function ($) {

	$.Jcrop = function (obj, opt) {
		var options = $.extend({}, $.Jcrop.defaults),
			docOffset, lastcurs, ie6mode = false;

		// Internal Methods {{{
		function px(n) {
			return parseInt(n, 10) + 'px';
		}
										//}}}
				//}}}
		function setOptions(opt) //{{{
		{
			if (typeof(opt) !== 'object') {
				opt = {};
			}
			options = $.extend(options, opt);

			if (typeof(options.onChange) !== 'function') {
				options.onChange = function () {};
			}
			if (typeof(options.onSelect) !== 'function') {
				options.onSelect = function () {};
			}
			if (typeof(options.onRelease) !== 'function') {
				options.onRelease = function () {};
			}
		}
		//}}}
		function myCursor(type) //{{{
		{
			if (type !== lastcurs) {
				Tracker.setCursor(type);
				lastcurs = type;
			}
		}
		//}}}
		function startDragMode(mode, pos) //{{{
		{
			docOffset = getPos($img);
			Tracker.setCursor(mode === 'move' ? mode : mode + '-resize');

			if (mode === 'move') {
				return Tracker.activateHandlers(createMover(pos), doneSelect);
			}

			var fc = Coords.getFixed();
			var opp = oppLockCorner(mode);
			var opc = Coords.getCorner(oppLockCorner(opp));

			Coords.setPressed(Coords.getCorner(opp));
			Coords.setCurrent(opc);

			Tracker.activateHandlers(dragmodeHandler(mode, fc), doneSelect);
		}
		//}}}
		function dragmodeHandler(mode, f) //{{{
		{
			return function (pos) {
				if (!options.aspectRatio) {
					switch (mode) {
						case 'e':
							pos[1] = f.y2;
							break;
						case 'w':
							pos[1] = f.y2;
							break;
						case 'n':
							pos[0] = f.x2;
							break;
						case 's':
							pos[0] = f.x2;
							break;
					}
				} else {
					switch (mode) {
						case 'e':
							pos[1] = f.y + 1;
							break;
						case 'w':
							pos[1] = f.y + 1;
							break;
						case 'n':
							pos[0] = f.x + 1;
							break;
						case 's':
							pos[0] = f.x + 1;
							break;
					}
				}
				Coords.setCurrent(pos);
				Selection.update();
			};
		}
		//}}}
		function createMover(pos) //{{{
		{
			var lloc = pos;
			KeyManager.watchKeys();

			return 
		}
		//}}}
				//}}}
		function createDragger(ord) //{{{
		{
			return function (e) {
				if (options.disabled) {
					return false;
				}
				if ((ord === 'move') && !options.allowMove) {
					return false;
				}
				btndown = true;
				startDragMode(ord, mouseAbs(e));
				e.stopPropagation();
				e.preventDefault();
				return false;
			};
		}
		//}}}
		function presize($obj, w, h) //{{{
		{
			var nw = $obj.width(),
				nh = $obj.height();
			if ((nw > w) && w > 0) {
				nw = w;
				nh = (w / $obj.width()) * $obj.height();
			}
			if ((nh > h) && h > 0) {
				nh = h;
				nw = (h / $obj.height()) * $obj.width();
			}
			xscale = $obj.width() / nw;
			yscale = $obj.height() / nh;
			$obj.width(nw).height(nh);
		}
		//}}}
		function unscale(c) //{{{
		{
			return {
				x: parseInt(c.x * xscale, 10),
				y: parseInt(c.y * yscale, 10),
				x2: parseInt(c.x2 * xscale, 10),
				y2: parseInt(c.y2 * yscale, 10),
				w: parseInt(c.w * xscale, 10),
				h: parseInt(c.h * yscale, 10)
			};
		}
		//}}}
		function doneSelect(pos) //{{{
		{
			var c = Coords.getFixed();
			if ((c.w > options.minSelect[0]) && (c.h > options.minSelect[1])) {
				Selection.enableHandles();
				Selection.done();
			} else {
				Selection.release();
			}
			Tracker.setCursor(options.allowSelect ? 'crosshair' : 'default');
		}
		//}}}
		function newSelection(e) //{{{
		{
			if (options.disabled) {
				return false;
			}
			if (!options.allowSelect) {
				return false;
			}
			btndown = true;
			docOffset = getPos($img);
			Selection.disableHandles();
			myCursor('crosshair');
			var pos = mouseAbs(e);
			Coords.setPressed(pos);
			Selection.update();
			Tracker.activateHandlers(selectDrag, doneSelect);
			KeyManager.watchKeys();

			e.stopPropagation();
			e.preventDefault();
			return false;
		}
		//}}}
				//}}}
		function newTracker() //{{{
		{
			var trk = $('<div></div>').addClass(cssClass('tracker'));
			if ($.browser.msie) {
				trk.css({
					opacity: 0,
					backgroundColor: 'white'
				});
			}
			return trk;
		}
		//}}}

		// }}}
		// Initialization {{{
		// Sanitize some options {{{
		if ($.browser.msie && ($.browser.version.split('.')[0] === '6')) {
			ie6mode = true;
		}
		if (typeof(obj) !== 'object') {
			obj = $(obj)[0];
		}
		if (typeof(opt) !== 'object') {
			opt = {};
		}
		// }}}
		setOptions(opt);
		// Initialize some jQuery objects {{{
		// The values are SET on the image(s) for the interface
		// If the original image has any of these set, they will be reset
		// However, if you destroy() the Jcrop instance the original image's
		// character in the DOM will be as you left it.
		var img_css = {
			border: 'none',
			margin: 0,
			padding: 0,
			position: 'absolute'
		};

		var $origimg = $(obj);
		var $img = $origimg.clone().removeAttr('id').css(img_css);

		$img.width($origimg.width());
		$img.height($origimg.height());
		$origimg.after($img).hide();

		presize($img, options.boxWidth, options.boxHeight);

		var boundx = $img.width(),
			boundy = $img.height(),


			$div = $('<div />').width(boundx).height(boundy).addClass(cssClass('holder')).css({
				position: 'relative',
				backgroundColor: options.bgColor
			}).insertAfter($origimg).append($img);

		delete(options.bgColor);
		if (options.addClass) {
			$div.addClass(options.addClass);
		}

		var $img2 = $('<img />')
				.attr('src', $img.attr('src')).css(img_css).width(boundx).height(boundy),

			$img_holder = $('<div />')
				.width(pct(100)).height(pct(100)).css({
					zIndex: 310,
					position: 'absolute',
					overflow: 'hidden'
				}).append($img2),

			$hdl_holder = $('<div />')
				.width(pct(100)).height(pct(100)).css('zIndex', 320),

			$sel = $('<div />')
				.css({
					position: 'absolute',
					zIndex: 300
				}).insertBefore($img).append($img_holder, $hdl_holder);

		if (ie6mode) {
			$sel.css({
				overflowY: 'hidden'
			});
		}

		var bound = options.boundary;
		var $trk = newTracker().width(boundx + (bound * 2)).height(boundy + (bound * 2)).css({
			position: 'absolute',
			top: px(-bound),
			left: px(-bound),
			zIndex: 290
		}).mousedown(newSelection);

		/* }}} */
		// Set more variables {{{
		var bgopacity = options.bgOpacity,
			xlimit, ylimit, xmin, ymin, xscale, yscale, enabled = true,
			btndown, animating, shift_down;

		docOffset = getPos($img);
		// }}}
		// }}}
		// Internal Modules {{{
		// Touch Module {{{
		var Touch = (function () {
			// Touch support detection function adapted (under MIT License)
			// from code by Jeffrey Sambells - http://github.com/iamamused/
			function hasTouchSupport() {
				var support = {},
					events = ['touchstart', 'touchmove', 'touchend'],
					el = document.createElement('div'), i;

				try {
					for(i=0; i<events.length; i++) {
						var eventName = events[i];
						eventName = 'on' + eventName;
						var isSupported = (eventName in el);
						if (!isSupported) {
							el.setAttribute(eventName, 'return;');
							isSupported = typeof el[eventName] == 'function';
						}
						support[events[i]] = isSupported;
					}
					return support.touchstart && support.touchend && support.touchmove;
				}
				catch(err) {
					return false;
				}
			}

			function detectSupport() {
				if ((options.touchSupport === true) || (options.touchSupport === false)) return options.touchSupport;
				else return hasTouchSupport();
			}
			return {
				createDragger: function (ord) {
					return function (e) {
						e.pageX = e.originalEvent.changedTouches[0].pageX;
						e.pageY = e.originalEvent.changedTouches[0].pageY;
						if (options.disabled) {
							return false;
						}
						if ((ord === 'move') && !options.allowMove) {
							return false;
						}
						btndown = true;
						startDragMode(ord, mouseAbs(e));
						e.stopPropagation();
						e.preventDefault();
						return false;
					};
				},
				newSelection: function (e) {
					e.pageX = e.originalEvent.changedTouches[0].pageX;
					e.pageY = e.originalEvent.changedTouches[0].pageY;
					return newSelection(e);
				},
				isSupported: hasTouchSupport,
				support: detectSupport()
			};
		}());
		// }}}
		// Coords Module {{{
		var Coords = (function () {
			var x1 = 0,
				y1 = 0,
				x2 = 0,
				y2 = 0,
				ox, oy;

						//}}}
						//}}}
						//}}}
			function moveOffset(offset) //{{{
			{
				var ox = offset[0],
					oy = offset[1];

				if (0 > x1 + ox) {
					ox -= ox + x1;
				}
				if (0 > y1 + oy) {
					oy -= oy + y1;
				}

				if (boundy < y2 + oy) {
					oy += boundy - (y2 + oy);
				}
				if (boundx < x2 + ox) {
					ox += boundx - (x2 + ox);
				}

				x1 += ox;
				x2 += ox;
				y1 += oy;
				y2 += oy;
			}
			//}}}
						//}}}
			function getFixed() //{{{
			{
				if (!options.aspectRatio) {
					return getRect();
				}
				// This function could use some optimization I think...
				var aspect = options.aspectRatio,
					min_x = options.minSize[0] / xscale,


					//min_y = options.minSize[1]/yscale,
					max_x = options.maxSize[0] / xscale,
					max_y = options.maxSize[1] / yscale,
					rw = x2 - x1,
					rh = y2 - y1,
					rwa = Math.abs(rw),
					rha = Math.abs(rh),
					real_ratio = rwa / rha,
					xx, yy;

				if (max_x === 0) {
					max_x = boundx * 10;
				}
				if (max_y === 0) {
					max_y = boundy * 10;
				}
				if (real_ratio < aspect) {
					yy = y2;
					w = rha * aspect;
					xx = rw < 0 ? x1 - w : w + x1;

					if (xx < 0) {
						xx = 0;
						h = Math.abs((xx - x1) / aspect);
						yy = rh < 0 ? y1 - h : h + y1;
					} else if (xx > boundx) {
						xx = boundx;
						h = Math.abs((xx - x1) / aspect);
						yy = rh < 0 ? y1 - h : h + y1;
					}
				} else {
					xx = x2;
					h = rwa / aspect;
					yy = rh < 0 ? y1 - h : y1 + h;
					if (yy < 0) {
						yy = 0;
						w = Math.abs((yy - y1) * aspect);
						xx = rw < 0 ? x1 - w : w + x1;
					} else if (yy > boundy) {
						yy = boundy;
						w = Math.abs(yy - y1) * aspect;
						xx = rw < 0 ? x1 - w : w + x1;
					}
				}

				// Magic %-)
				if (xx > x1) { // right side
					if (xx - x1 < min_x) {
						xx = x1 + min_x;
					} else if (xx - x1 > max_x) {
						xx = x1 + max_x;
					}
					if (yy > y1) {
						yy = y1 + (xx - x1) / aspect;
					} else {
						yy = y1 - (xx - x1) / aspect;
					}
				} else if (xx < x1) { // left side
					if (x1 - xx < min_x) {
						xx = x1 - min_x;
					} else if (x1 - xx > max_x) {
						xx = x1 - max_x;
					}
					if (yy > y1) {
						yy = y1 + (x1 - xx) / aspect;
					} else {
						yy = y1 - (x1 - xx) / aspect;
					}
				}

				if (xx < 0) {
					x1 -= xx;
					xx = 0;
				} else if (xx > boundx) {
					x1 -= xx - boundx;
					xx = boundx;
				}

				if (yy < 0) {
					y1 -= yy;
					yy = 0;
				} else if (yy > boundy) {
					y1 -= yy - boundy;
					yy = boundy;
				}

				return makeObj(flipCoords(x1, y1, xx, yy));
			}
			//}}}
			function rebound(p) //{{{
			{
				if (p[0] < 0) {
					p[0] = 0;
				}
				if (p[1] < 0) {
					p[1] = 0;
				}

				if (p[0] > boundx) {
					p[0] = boundx;
				}
				if (p[1] > boundy) {
					p[1] = boundy;
				}

				return [p[0], p[1]];
			}
			//}}}
			function flipCoords(x1, y1, x2, y2) //{{{
			{
				var xa = x1,
					xb = x2,
					ya = y1,
					yb = y2;
				if (x2 < x1) {
					xa = x2;
					xb = x1;
				}
				if (y2 < y1) {
					ya = y2;
					yb = y1;
				}
				return [Math.round(xa), Math.round(ya), Math.round(xb), Math.round(yb)];
			}
			//}}}
			function getRect() //{{{
			{
				var xsize = x2 - x1,
					ysize = y2 - y1,
					delta;

				if (xlimit && (Math.abs(xsize) > xlimit)) {
					x2 = (xsize > 0) ? (x1 + xlimit) : (x1 - xlimit);
				}
				if (ylimit && (Math.abs(ysize) > ylimit)) {
					y2 = (ysize > 0) ? (y1 + ylimit) : (y1 - ylimit);
				}

				if (ymin / yscale && (Math.abs(ysize) < ymin / yscale)) {
					y2 = (ysize > 0) ? (y1 + ymin / yscale) : (y1 - ymin / yscale);
				}
				if (xmin / xscale && (Math.abs(xsize) < xmin / xscale)) {
					x2 = (xsize > 0) ? (x1 + xmin / xscale) : (x1 - xmin / xscale);
				}

				if (x1 < 0) {
					x2 -= x1;
					x1 -= x1;
				}
				if (y1 < 0) {
					y2 -= y1;
					y1 -= y1;
				}
				if (x2 < 0) {
					x1 -= x2;
					x2 -= x2;
				}
				if (y2 < 0) {
					y1 -= y2;
					y2 -= y2;
				}
				if (x2 > boundx) {
					delta = x2 - boundx;
					x1 -= delta;
					x2 -= delta;
				}
				if (y2 > boundy) {
					delta = y2 - boundy;
					y1 -= delta;
					y2 -= delta;
				}
				if (x1 > boundx) {
					delta = x1 - boundy;
					y2 -= delta;
					y1 -= delta;
				}
				if (y1 > boundy) {
					delta = y1 - boundy;
					y2 -= delta;
					y1 -= delta;
				}

				return makeObj(flipCoords(x1, y1, x2, y2));
			}
			//}}}
						//}}}

			return {
				flipCoords: flipCoords,
				setPressed: setPressed,
				setCurrent: setCurrent,
				getOffset: getOffset,
				moveOffset: moveOffset,
				getCorner: getCorner,
				getFixed: getFixed
			};
		}());

		//}}}
		// Selection Module {{{
		var Selection = (function () {
			var awake, hdep = 370;
			var borders = {};
			var handle = {};
			var seehandles = false;
			var hhs = options.handleOffset;

			// Private Methods
			function insertBorder(type) //{{{
			{
				var jq = $('<div />').css({
					position: 'absolute',
					opacity: options.borderOpacity
				}).addClass(cssClass(type));
				$img_holder.append(jq);
				return jq;
			}
			//}}}
			function dragDiv(ord, zi) //{{{
			{
				var jq = $('<div />').mousedown(createDragger(ord)).css({
					cursor: ord + '-resize',
					position: 'absolute',
					zIndex: zi
				});

				if (Touch.support) {
					jq.bind('touchstart', Touch.createDragger(ord));
				}

				$hdl_holder.append(jq);
				return jq;
			}
			//}}}
			function insertHandle(ord) //{{{
			{
				return dragDiv(ord, hdep++).css({
					top: px(-hhs + 1),
					left: px(-hhs + 1),
					opacity: options.handleOpacity
				}).addClass(cssClass('handle'));
			}
			//}}}
			function insertDragbar(ord) //{{{
			{
				var s = options.handleSize,
					h = s,
					w = s,
					t = hhs,
					l = hhs;

				switch (ord) {
					case 'n':
					case 's':
						w = pct(100);
						break;
					case 'e':
					case 'w':
						h = pct(100);
						break;
				}

				return dragDiv(ord, hdep++).width(w).height(h).css({
					top: px(-t + 1),
					left: px(-l + 1)
				});
			}
			//}}}
			function createHandles(li) //{{{
			{
				var i;
				for (i = 0; i < li.length; i++) {
					handle[li[i]] = insertHandle(li[i]);
				}
			}
			//}}}
			function moveHandles(c) //{{{
			{
				var midvert = Math.round((c.h / 2) - hhs),
					midhoriz = Math.round((c.w / 2) - hhs),
					north = -hhs + 1,
					west = -hhs + 1,
					east = c.w - hhs,
					south = c.h - hhs,
					x, y;

				if (handle.e) {
					handle.e.css({
						top: px(midvert),
						left: px(east)
					});
					handle.w.css({
						top: px(midvert)
					});
					handle.s.css({
						top: px(south),
						left: px(midhoriz)
					});
					handle.n.css({
						left: px(midhoriz)
					});
				}
				if (handle.ne) {
					handle.ne.css({
						left: px(east)
					});
					handle.se.css({
						top: px(south),
						left: px(east)
					});
					handle.sw.css({
						top: px(south)
					});
				}
				if (handle.b) {
					handle.b.css({
						top: px(south)
					});
					handle.r.css({
						left: px(east)
					});
				}
			}
			//}}}
			function moveto(x, y) //{{{
			{
				$img2.css({
					top: px(-y),
					left: px(-x)
				});
				$sel.css({
					top: px(y),
					left: px(x)
				});
			}
			//}}}
						//}}}
						//}}}

			// Internal Methods
			function updateVisible() //{{{
			{
				if (awake) {
					return update();
				}
			}
			//}}}
			function update() //{{{
			{
				var c = Coords.getFixed();

				resize(c.w, c.h);
				moveto(c.x, c.y);

				/*
                            options.drawBorders &&
                                borders.right.css({ left: px(c.w-1) }) &&
                                    borders.bottom.css({ top: px(c.h-1) });
                      */

				if (seehandles) {
					moveHandles(c);
				}
				if (!awake) {
					show();
				}

				options.onChange.call(api, unscale(c));
			}
			//}}}
			function show() //{{{
			{
				$sel.show();

				if (options.bgFade) {
					$img.fadeTo(options.fadeTime, bgopacity);
				} else {
					$img.css('opacity', bgopacity);
				}

				awake = true;
			}
			//}}}
			function release() //{{{
			{
				disableHandles();
				$sel.hide();

				if (options.bgFade) {
					$img.fadeTo(options.fadeTime, 1);
				} else {
					$img.css('opacity', 1);
				}

				awake = false;
				options.onRelease.call(api);
			}
			//}}}
			function showHandles() //{{{
			{
				if (seehandles) {
					moveHandles(Coords.getFixed());
					$hdl_holder.show();
				}
			}
			//}}}
			function enableHandles() //{{{
			{
				seehandles = true;
				if (options.allowResize) {
					moveHandles(Coords.getFixed());
					$hdl_holder.show();
					return true;
				}
			}
			//}}}
						//}}}
			function animMode(v) //{{{
			{
				if (animating === v) {
					disableHandles();
				} else {
					enableHandles();
				}
			}
			//}}}
						//}}}
			/* Insert draggable elements {{{*/

			// Insert border divs for outline
			if (options.drawBorders) {
				borders = {
					top: insertBorder('hline'),
					bottom: insertBorder('hline bottom'),
					left: insertBorder('vline'),
					right: insertBorder('vline right')
				};
			}

			// Insert handles on edges
			if (options.dragEdges) {
				handle.t = insertDragbar('n');
				handle.b = insertDragbar('s');
				handle.r = insertDragbar('e');
				handle.l = insertDragbar('w');
			}

			// Insert side and corner handles
			if (options.sideHandles) {
				createHandles(['n', 's', 'e', 'w']);
			}
			if (options.cornerHandles) {
				createHandles(['sw', 'nw', 'ne', 'se']);
			}


			//}}}

			var $track = newTracker().mousedown(createDragger('move')).css({
				cursor: 'move',
				position: 'absolute',
				zIndex: 360
			});

			if (Touch.support) {
				$track.bind('touchstart.jcrop', Touch.createDragger('move'));
			}

			$img_holder.append($track);
			disableHandles();

			return {
				updateVisible: updateVisible,
				update: update,
				release: release,
				refresh: refresh,
				isAwake: function () {
					return awake;
				},
				setCursor: 
				enableHandles: enableHandles,
				enableOnly: 
				showHandles: showHandles,
				disableHandles: disableHandles,
				animMode: animMode,
				done: done
			};
		}());

		//}}}
		// Tracker Module {{{
		var Tracker = (function () {
			var onMove = function () {},
				onDone = function () {},
				trackDoc = options.trackDocument;

			function toFront() //{{{
			{
				$trk.css({
					zIndex: 450
				});
				if (trackDoc) {
					$(document)
						.bind('mousemove',trackMove)
						.bind('mouseup',trackUp);
				}
			}
			//}}}
			function toBack() //{{{
			{
				$trk.css({
					zIndex: 290
				});
				if (trackDoc) {
					$(document)
						.unbind('mousemove', trackMove)
						.unbind('mouseup', trackUp);
				}
			}
			//}}}
			function trackMove(e) //{{{
			{
				onMove(mouseAbs(e));
				return false;
			}
			//}}}
			function trackUp(e) //{{{
			{
				e.preventDefault();
				e.stopPropagation();

				if (btndown) {
					btndown = false;

					onDone(mouseAbs(e));

					if (Selection.isAwake()) {
						options.onSelect.call(api, unscale(Coords.getFixed()));
					}

					toBack();
					onMove = function () {};
					onDone = function () {};
				}

				return false;
			}
			//}}}
			function activateHandlers(move, done) //{{{
			{
				btndown = true;
				onMove = move;
				onDone = done;
				toFront();
				return false;
			}
			//}}}
			function trackTouchMove(e) //{{{
			{
				e.pageX = e.originalEvent.changedTouches[0].pageX;
				e.pageY = e.originalEvent.changedTouches[0].pageY;
				return trackMove(e);
			}
			//}}}
			function trackTouchEnd(e) //{{{
			{
				e.pageX = e.originalEvent.changedTouches[0].pageX;
				e.pageY = e.originalEvent.changedTouches[0].pageY;
				return trackUp(e);
			}
			//}}}
						//}}}

			if (Touch.support) {
				$(document)
					.bind('touchmove', trackTouchMove)
					.bind('touchend', trackTouchEnd);
			}

			if (!trackDoc) {
				$trk.mousemove(trackMove).mouseup(trackUp).mouseout(trackUp);
			}

			$img.before($trk);
			return {
				activateHandlers: activateHandlers,
				setCursor: setCursor
			};
		}());
		//}}}
		// KeyManager Module {{{
		var KeyManager = (function () {
			var $keymgr = $('<input type="radio" />').css({
					position: 'fixed',
					left: '-120px',
					width: '12px'
				}),
				$keywrap = $('<div />').css({
					position: 'absolute',
					overflow: 'hidden'
				}).append($keymgr);

			function watchKeys() //{{{
			{
				if (options.keySupport) {
					$keymgr.show();
					$keymgr.focus();
				}
			}
			//}}}
						//}}}
			function doNudge(e, x, y) //{{{
			{
				if (options.allowMove) {
					Coords.moveOffset([x, y]);
					Selection.updateVisible();
				}
				e.preventDefault();
				e.stopPropagation();
			}
			//}}}
			function parseKey(e) //{{{
			{
				if (e.ctrlKey) {
					return true;
				}
				shift_down = e.shiftKey ? true : false;
				var nudge = shift_down ? 10 : 1;

				switch (e.keyCode) {
					case 37:
						doNudge(e, -nudge, 0);
						break;
					case 39:
						doNudge(e, nudge, 0);
						break;
					case 38:
						doNudge(e, 0, -nudge);
						break;
					case 40:
						doNudge(e, 0, nudge);
						break;
					case 27:
						Selection.release();
						break;
					case 9:
						return true;
				}

				return false;
			}
			//}}}

			if (options.keySupport) {
				$keymgr.keydown(parseKey).blur(onBlur);
				if (ie6mode || !options.fixedSupport) {
					$keymgr.css({
						position: 'absolute',
						left: '-20px'
					});
					$keywrap.append($keymgr).insertBefore($img);
				} else {
					$keymgr.insertBefore($img);
				}
			}


			return {
				watchKeys: watchKeys
			};
		}());
		//}}}
		// }}}
		// API methods {{{
				//}}}
		function animateTo(a, callback) //{{{
		{
			var x1 = parseInt(a[0], 10) / xscale,
				y1 = parseInt(a[1], 10) / yscale,
				x2 = parseInt(a[2], 10) / xscale,
				y2 = parseInt(a[3], 10) / yscale;

			if (animating) {
				return;
			}

			var animto = Coords.flipCoords(x1, y1, x2, y2),
				c = Coords.getFixed(),
				initcr = [c.x, c.y, c.x2, c.y2],
				animat = initcr,
				interv = options.animationDelay,
				ix1 = animto[0] - initcr[0],
				iy1 = animto[1] - initcr[1],
				ix2 = animto[2] - initcr[2],
				iy2 = animto[3] - initcr[3],
				pcent = 0,
				velocity = options.swingSpeed;

			x = animat[0];
			y = animat[1];
			x2 = animat[2];
			y2 = animat[3];

			Selection.animMode(true);
			var anim_timer;

						var animator = (function () {
				return function () {
					pcent += (100 - pcent) / velocity;

					animat[0] = x + ((pcent / 100) * ix1);
					animat[1] = y + ((pcent / 100) * iy1);
					animat[2] = x2 + ((pcent / 100) * ix2);
					animat[3] = y2 + ((pcent / 100) * iy2);

					if (pcent >= 99.8) {
						pcent = 100;
					}
					if (pcent < 100) {
						setSelectRaw(animat);
						queueAnimator();
					} else {
						Selection.done();
						if (typeof(callback) === 'function') {
							callback.call(api);
						}
					}
				};
			}());
			queueAnimator();
		}
		//}}}
		function setSelect(rect) //{{{
		{
			setSelectRaw([
				parseInt(rect[0], 10) / xscale, parseInt(rect[1], 10) / yscale, parseInt(rect[2], 10) / xscale, parseInt(rect[3], 10) / yscale]);
		}
		//}}}
				//}}}
				//}}}
				//}}}
				//}}}
		function disableCrop() //{{{
		{
			options.disabled = true;
			Selection.disableHandles();
			Selection.setCursor('default');
			Tracker.setCursor('default');
		}
		//}}}
				//}}}
				//}}}
				//}}}
		function setImage(src, callback) //{{{
		{
			Selection.release();
			disableCrop();
			var img = new Image();
			img.onload = function () {
				var iw = img.width;
				var ih = img.height;
				var bw = options.boxWidth;
				var bh = options.boxHeight;
				$img.width(iw).height(ih);
				$img.attr('src', src);
				$img2.attr('src', src);
				presize($img, bw, bh);
				boundx = $img.width();
				boundy = $img.height();
				$img2.width(boundx).height(boundy);
				$trk.width(boundx + (bound * 2)).height(boundy + (bound * 2));
				$div.width(boundx).height(boundy);
				enableCrop();

				if (typeof(callback) === 'function') {
					callback.call(api);
				}
			};
			img.src = src;
		}
		//}}}
		function interfaceUpdate(alt) //{{{
		// This method tweaks the interface based on options object.
		// Called when options are changed and at end of initialization.
		{
			if (options.allowResize) {
				if (alt) {
					Selection.enableOnly();
				} else {
					Selection.enableHandles();
				}
			} else {
				Selection.disableHandles();
			}

			Tracker.setCursor(options.allowSelect ? 'crosshair' : 'default');
			Selection.setCursor(options.allowMove ? 'move' : 'default');


			if (options.hasOwnProperty('setSelect')) {
				setSelect(options.setSelect);
				Selection.done();
				delete(options.setSelect);
			}

			if (options.hasOwnProperty('trueSize')) {
				xscale = options.trueSize[0] / boundx;
				yscale = options.trueSize[1] / boundy;
			}
			if (options.hasOwnProperty('bgColor')) {

				if (supportsColorFade() && options.fadeTime) {
					$div.animate({
						backgroundColor: options.bgColor
					}, {
						queue: false,
						duration: options.fadeTime
					});
				} else {
					$div.css('backgroundColor', options.bgColor);
				}

				delete(options.bgColor);
			}
			if (options.hasOwnProperty('bgOpacity')) {
				bgopacity = options.bgOpacity;

				if (Selection.isAwake()) {
					if (options.fadeTime) {
						$img.fadeTo(options.fadeTime, bgopacity);
					} else {
						$div.css('opacity', options.opacity);
					}
				}
				delete(options.bgOpacity);
			}

			xlimit = options.maxSize[0] || 0;
			ylimit = options.maxSize[1] || 0;
			xmin = options.minSize[0] || 0;
			ymin = options.minSize[1] || 0;

			if (options.hasOwnProperty('outerImage')) {
				$img.attr('src', options.outerImage);
				delete(options.outerImage);
			}

			Selection.refresh();
		}
		//}}}
		//}}}

		if (Touch.support) {
			$trk.bind('touchstart', Touch.newSelection);
		}

		$hdl_holder.hide();
		interfaceUpdate(true);

		var api = {
			setImage: setImage,
			animateTo: animateTo,
			setSelect: setSelect,
			setOptions: setOptionsNew,
			tellSelect: tellSelect,
			tellScaled: tellScaled,
			setClass: setClass,

			disable: disableCrop,
			enable: enableCrop,
			cancel: cancelCrop,
			release: Selection.release,
			destroy: destroy,

			focus: KeyManager.watchKeys,

			getBounds: 
			getWidgetSize: function () {
				return [boundx, boundy];
			},
			getScaleFactor: 

			ui: {
				holder: $div,
				selection: $sel
			}
		};

		if ($.browser.msie) {
			$div.bind('selectstart', ;
		}

		$origimg.data('Jcrop', api);
		return api;
	};
	$.fn.Jcrop = function (options, callback) //{{{
	{

		function attachWhenDone(from) //{{{
		{
			var opt = (typeof(options) === 'object') ? options : {};
			var loadsrc = opt.useImg || from.src;
			var img = new Image();
			img.onload = function () {
				function attachJcrop() {
					var api = $.Jcrop(from, opt);
					if (typeof(callback) === 'function') {
						callback.call(api);
					}
				}

				function attachAttempt() {
					if (!img.width || !img.height) {
						window.setTimeout(attachAttempt, 50);
					} else {
						attachJcrop();
					}
				}
				window.setTimeout(attachAttempt, 50);
			};
			img.src = loadsrc;
		}
		//}}}

		// Iterate over each object, attach Jcrop
		this.each(function () {
			// If we've already attached to this object
			if ($(this).data('Jcrop')) {
				// The API can be requested this way (undocumented)
				if (options === 'api') {
					return $(this).data('Jcrop');
				}
				// Otherwise, we just reset the options...
				else {
					$(this).data('Jcrop').setOptions(options);
				}
			}
			// If we haven't been attached, preload and attach
			else {
				attachWhenDone(this);
			}
		});

		// Return "this" so the object is chainable (jQuery-style)
		return this;
	};
	//}}}
	// Global Defaults {{{
	$.Jcrop.defaults = {

		// Basic Settings
		allowSelect: true,
		allowMove: true,
		allowResize: true,

		trackDocument: true,

		// Styling Options
		baseClass: 'jcrop',
		addClass: null,
		bgColor: 'black',
		bgOpacity: 0.6,
		bgFade: false,
		borderOpacity: 0.4,
		handleOpacity: 0.5,
		handleSize: 9,
		handleOffset: 5,

		aspectRatio: 0,
		keySupport: true,
		cornerHandles: true,
		sideHandles: true,
		drawBorders: true,
		dragEdges: true,
		fixedSupport: true,
		touchSupport: null,

		boxWidth: 0,
		boxHeight: 0,
		boundary: 2,
		fadeTime: 400,
		animationDelay: 20,
		swingSpeed: 3,

		minSelect: [0, 0],
		maxSize: [0, 0],
		minSize: [0, 0],

		// Callbacks / Event Handlers
		onChange: function () {},
		onSelect: function () {},
		onRelease: 	};

	// }}}
}(jQuery));
;/*
 * Poshy Tip jQuery plugin v1.1+
 * http://vadikom.com/tools/poshy-tip-jquery-plugin-for-stylish-tooltips/
 * Copyright 2010-2011, Vasil Dinkov, http://vadikom.com/
 */

(function($) {

	var tips = [],
		reBgImage = /^url\(["']?([^"'\)]*)["']?\);?$/i,
		rePNG = /\.png$/i,
		ie6 = $.browser.msie && $.browser.version == 6;

	// make sure the tips' position is updated on resize
	function handleWindowResize() {
		$.each(tips, ;
	}
	$(window).resize(handleWindowResize);

	$.Poshytip = function(elm, options) {
		this.$elm = $(elm);
		this.opts = $.extend({}, $.fn.poshytip.defaults, options);
		this.$tip = $(['<div class="infobox ',this.opts.className,'">',
			'<div class="tip-inner tip-bg-image word-wrap"></div>',
			'<div class="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"></div>',
			'</div>'].join('')).appendTo(document.body);
		this.$arrow = this.$tip.find('div.tip-arrow');
		this.$inner = this.$tip.find('div.tip-inner');
		this.disabled = false;
		this.content = null;
		this.init();
	};

	$.Poshytip.prototype = {
		init: function() {
			if (this.opts.content=='[title]' && this.opts.showOnlyNotEmpty) {
				if (!this.$elm.attr('title')) {
					return;
				}
			}
			tips.push(this);

			// save the original title and a reference to the Poshytip object
			var title = this.$elm.attr('title');
			this.$elm.data('title.poshytip', title !== undefined ? title : null)
				.data('poshytip', this);

			// hook element events
			if (this.opts.showOn != 'none') {
				this.$elm.bind({
					'mouseenter.poshytip': $.proxy(this.mouseenter, this),
					'mouseleave.poshytip': $.proxy(this.mouseleave, this)
				});
				switch (this.opts.showOn) {
					case 'hover':
						if (this.opts.alignTo == 'cursor')
							this.$elm.bind('mousemove.poshytip', $.proxy(this.mousemove, this));
						if (this.opts.allowTipHover)
							this.$tip.hover($.proxy(this.clearTimeouts, this), $.proxy(this.mouseleave, this));
						break;
					case 'focus':
						this.$elm.bind({
							'focus.poshytip': $.proxy(this.show, this),
							'blur.poshytip': $.proxy(this.hide, this)
						});
						break;
				}
			}
		},
		mouseenter: function(e) {
			if (this.disabled)
				return true;

			this.$elm.attr('title', '');
			if (this.opts.showOn == 'focus')
				return true;

			this.clearTimeouts();
			this.showTimeout = setTimeout($.proxy(this.show, this), this.opts.showTimeout);
		},
		mouseleave: function(e) {
			if (this.disabled || this.asyncAnimating && (this.$tip[0] === e.relatedTarget || jQuery.contains(this.$tip[0], e.relatedTarget)))
				return true;

			var title = this.$elm.data('title.poshytip');
			if (title !== null)
				this.$elm.attr('title', title);
			if (this.opts.showOn == 'focus')
				return true;

			this.clearTimeouts();
			this.hideTimeout = setTimeout($.proxy(this.hide, this), this.opts.hideTimeout);
		},
		mousemove: function(e) {
			if (this.disabled)
				return true;

			this.eventX = e.pageX;
			this.eventY = e.pageY;
			if (this.opts.followCursor && this.$tip.data('active')) {
				this.calcPos();
				this.$tip.css({left: this.pos.l, top: this.pos.t});
				if (this.pos.arrow)
					this.$arrow[0].className = 'tip-arrow tip-arrow-' + this.pos.arrow;
			}
		},
		show: function() {
			if (this.disabled || this.$tip.data('active'))
				return;

			this.reset();
			this.update();
			this.display();
			if (this.opts.timeOnScreen) {
				this.clearTimeouts();
				this.hideTimeout = setTimeout($.proxy(this.hide, this), this.opts.timeOnScreen);
			}
		},
		hide: function() {
			if (this.disabled || !this.$tip.data('active'))
				return;

			this.display(true);
		},
		reset: function() {
			this.$tip.queue([]).detach().css('visibility', 'hidden').data('active', false);
			this.$inner.find('*').poshytip('hide');
			if (this.opts.fade)
				this.$tip.css('opacity', this.opacity);
			this.$arrow[0].className = 'tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left';
			this.asyncAnimating = false;
		},
		update: function(content, dontOverwriteOption) {
			if (this.disabled)
				return;

			var async = content !== undefined;
			if (async) {
				if (!dontOverwriteOption)
					this.opts.content = content;
				if (!this.$tip.data('active'))
					return;
			} else {
				content = this.opts.content;
			}

			// update content only if it has been changed since last time
			var self = this,
				newContent = typeof content == 'function' ?
					content.call(this.$elm[0],  :
					content == '[title]' ? this.$elm.data('title.poshytip') : content;
			if (this.content !== newContent) {
				this.$inner.empty().append(newContent);
				this.content = newContent;
			}

			this.refresh(async);
		},
		refresh: function(async) {
			if (this.disabled)
				return;

			if (async) {
				if (!this.$tip.data('active'))
					return;
				// save current position as we will need to animate
				var currPos = {left: this.$tip.css('left'), top: this.$tip.css('top')};
			}

			// reset position to avoid text wrapping, etc.
			this.$tip.css({left: 0, top: 0}).appendTo(document.body);

			// save default opacity
			if (this.opacity === undefined)
				this.opacity = this.$tip.css('opacity');

			// check for images - this code is here (i.e. executed each time we show the tip and not on init) due to some browser inconsistencies
			/*var bgImage = this.$tip.css('background-image').match(reBgImage),
				arrow = this.$arrow.css('background-image').match(reBgImage);

			if (bgImage) {
				var bgImagePNG = rePNG.test(bgImage[1]);
				// fallback to background-color/padding/border in IE6 if a PNG is used
				if (ie6 && bgImagePNG) {
					this.$tip.css('background-image', 'none');
					this.$inner.css({margin: 0, border: 0, padding: 0});
					bgImage = bgImagePNG = false;
				} else {
					this.$tip.prepend('<table border="0" cellpadding="0" cellspacing="0"><tr><td class="tip-top tip-bg-image" colspan="2"><span></span></td><td class="tip-right tip-bg-image" rowspan="2"><span></span></td></tr><tr><td class="tip-left tip-bg-image" rowspan="2"><span></span></td><td></td></tr><tr><td class="tip-bottom tip-bg-image" colspan="2"><span></span></td></tr></table>')
						.css({border: 0, padding: 0, 'background-image': 'none', 'background-color': 'transparent'})
						.find('.tip-bg-image').css('background-image', 'url("' + bgImage[1] +'")').end()
						.find('td').eq(3).append(this.$inner);
				}
				// disable fade effect in IE due to Alpha filter + translucent PNG issue
				if (bgImagePNG && !$.support.opacity)
					this.opts.fade = false;
			}
			// IE arrow fixes
			if (arrow && !$.support.opacity) {
				// disable arrow in IE6 if using a PNG
				if (ie6 && rePNG.test(arrow[1])) {
					arrow = false;
					this.$arrow.css('background-image', 'none');
				}
				// disable fade effect in IE due to Alpha filter + translucent PNG issue
				this.opts.fade = false;
			}

			var $table = this.$tip.find('table');
			if (ie6) {
				// fix min/max-width in IE6
				this.$tip[0].style.width = '';
				$table.width('auto').find('td').eq(3).width('auto');
				var tipW = this.$tip.width(),
					minW = parseInt(this.$tip.css('min-width')),
					maxW = parseInt(this.$tip.css('max-width'));
				if (!isNaN(minW) && tipW < minW)
					tipW = minW;
				else if (!isNaN(maxW) && tipW > maxW)
					tipW = maxW;
				this.$tip.add($table).width(tipW).eq(0).find('td').eq(3).width('100%');
			} else if ($table[0]) {
				// fix the table width if we are using a background image
				// IE9, FF4 use float numbers for width/height so use getComputedStyle for them to avoid text wrapping
				// for details look at: http://vadikom.com/dailies/offsetwidth-offsetheight-useless-in-ie9-firefox4/
				$table.width('auto').find('td').eq(3).width('auto').end().end().width(document.defaultView && document.defaultView.getComputedStyle && parseFloat(document.defaultView.getComputedStyle(this.$tip[0], null).width) || this.$tip.width()).find('td').eq(3).width('100%');
			}*/
			this.tipOuterW = this.$tip.outerWidth();
			this.tipOuterH = this.$tip.outerHeight();

			this.calcPos();

			// position and show the arrow image
			if (this.pos.arrow) {
				this.$arrow[0].className = 'tip-arrow tip-arrow-' + this.pos.arrow;
				this.$arrow.css('visibility', 'inherit');
			}

			if (async && this.opts.refreshAniDuration) {
				this.asyncAnimating = true;
				var self = this;
				this.$tip.css(currPos).animate({left: this.pos.l, top: this.pos.t}, this.opts.refreshAniDuration, ;
			} else {
				this.$tip.css({left: this.pos.l, top: this.pos.t});
			}
		},
		display: function(hide) {
			var active = this.$tip.data('active');
			if (active && !hide || !active && hide)
				return;

			this.$tip.stop();
			if ((this.opts.slide && this.pos.arrow || this.opts.fade) && (hide && this.opts.hideAniDuration || !hide && this.opts.showAniDuration)) {
				var from = {}, to = {};
				// this.pos.arrow is only undefined when alignX == alignY == 'center' and we don't need to slide in that rare case
				if (this.opts.slide && this.pos.arrow) {
					var prop, arr;
					if (this.pos.arrow == 'bottom' || this.pos.arrow == 'top') {
						prop = 'top';
						arr = 'bottom';
					} else {
						prop = 'left';
						arr = 'right';
					}
					var val = parseInt(this.$tip.css(prop));
					from[prop] = val + (hide ? 0 : (this.pos.arrow == arr ? -this.opts.slideOffset : this.opts.slideOffset));
					to[prop] = val + (hide ? (this.pos.arrow == arr ? this.opts.slideOffset : -this.opts.slideOffset) : 0) + 'px';
				}
				if (this.opts.fade) {
					from.opacity = hide ? this.$tip.css('opacity') : 0;
					to.opacity = hide ? 0 : this.opacity;
				}
				this.$tip.css(from).animate(to, this.opts[hide ? 'hideAniDuration' : 'showAniDuration']);
			}
			hide ? this.$tip.queue($.proxy(this.reset, this)) : this.$tip.css('visibility', 'inherit');
			this.$tip.data('active', !active);
		},
		disable: 
		enable: function() {
			this.disabled = false;
		},
		destroy: function() {
			this.reset();
			this.$tip.remove();
			delete this.$tip;
			this.content = null;
			this.$elm.unbind('.poshytip').removeData('title.poshytip').removeData('poshytip');
			tips.splice($.inArray(this, tips), 1);
		},
		clearTimeouts: function() {
			if (this.showTimeout) {
				clearTimeout(this.showTimeout);
				this.showTimeout = 0;
			}
			if (this.hideTimeout) {
				clearTimeout(this.hideTimeout);
				this.hideTimeout = 0;
			}
		},
		calcPos: function() {
			var pos = {l: 0, t: 0, arrow: ''},
				$win = $(window),
				win = {
					l: $win.scrollLeft(),
					t: $win.scrollTop(),
					w: $win.width(),
					h: $win.height()
				}, xL, xC, xR, yT, yC, yB;
			if (this.opts.alignTo == 'cursor') {
				xL = xC = xR = this.eventX;
				yT = yC = yB = this.eventY;
			} else { // this.opts.alignTo == 'target'
				var elmOffset = this.$elm.offset(),
					elm = {
						l: elmOffset.left,
						t: elmOffset.top,
						w: this.$elm.outerWidth(),
						h: this.$elm.outerHeight()
					};
				xL = elm.l + (this.opts.alignX != 'inner-right' ? 0 : elm.w);	// left edge
				xC = xL + Math.floor(elm.w / 2);				// h center
				xR = xL + (this.opts.alignX != 'inner-left' ? elm.w : 0);	// right edge
				yT = elm.t + (this.opts.alignY != 'inner-bottom' ? 0 : elm.h);	// top edge
				yC = yT + Math.floor(elm.h / 2);				// v center
				yB = yT + (this.opts.alignY != 'inner-top' ? elm.h : 0);	// bottom edge
			}

			// keep in viewport and calc arrow position
			switch (this.opts.alignX) {
				case 'right':
				case 'inner-left':
					pos.l = xR + this.opts.offsetX;
					if (pos.l + this.tipOuterW > win.l + win.w)
						pos.l = win.l + win.w - this.tipOuterW;
					if (this.opts.alignX == 'right' || this.opts.alignY == 'center')
						pos.arrow = 'left';
					break;
				case 'center':
					pos.l = xC - Math.floor(this.tipOuterW / 2);
					if (pos.l + this.tipOuterW > win.l + win.w)
						pos.l = win.l + win.w - this.tipOuterW;
					else if (pos.l < win.l)
						pos.l = win.l;
					break;
				default: // 'left' || 'inner-right'
					pos.l = xL - this.tipOuterW - this.opts.offsetX;
					if (pos.l < win.l)
						pos.l = win.l;
					if (this.opts.alignX == 'left' || this.opts.alignY == 'center')
						pos.arrow = 'right';
			}
			switch (this.opts.alignY) {
				case 'bottom':
				case 'inner-top':
					pos.t = yB + this.opts.offsetY;
					// 'left' and 'right' need priority for 'target'
					if (!pos.arrow || this.opts.alignTo == 'cursor')
						pos.arrow = 'top';
					if (pos.t + this.tipOuterH > win.t + win.h) {
						pos.t = yT - this.tipOuterH - this.opts.offsetY;
						if (pos.arrow == 'top')
							pos.arrow = 'bottom';
					}
					break;
				case 'center':
					pos.t = yC - Math.floor(this.tipOuterH / 2);
					if (pos.t + this.tipOuterH > win.t + win.h)
						pos.t = win.t + win.h - this.tipOuterH;
					else if (pos.t < win.t)
						pos.t = win.t;
					break;
				default: // 'top' || 'inner-bottom'
					pos.t = yT - this.tipOuterH - this.opts.offsetY;
					// 'left' and 'right' need priority for 'target'
					if (!pos.arrow || this.opts.alignTo == 'cursor')
						pos.arrow = 'bottom';
					if (pos.t < win.t) {
						pos.t = yB + this.opts.offsetY;
						if (pos.arrow == 'bottom')
							pos.arrow = 'top';
					}
			}
			this.pos = pos;
		}
	};

	$.fn.poshytip = function(options) {
		if (typeof options == 'string') {
			var args = arguments,
				method = options;
			Array.prototype.shift.call(args);
			// unhook live events if 'destroy' is called
			if (method == 'destroy')
				this.die('mouseenter.poshytip').die('focus.poshytip');
			return this.each(;
		}

		var opts = $.extend({}, $.fn.poshytip.defaults, options);

		// generate CSS for this tip class if not already generated
		if (opts.injectBaseCss && !$('#poshytip-css-' + opts.className)[0])
			$(['<style id="poshytip-css-',opts.className,'" type="text/css">',
				'div.',opts.className,'{visibility:hidden;position:absolute;top:0;left:0;}',
				'div.',opts.className,' table, div.',opts.className,' td{margin:0;font-family:inherit;font-size:inherit;font-weight:inherit;font-style:inherit;font-variant:inherit;}',
				'div.',opts.className,' td.tip-bg-image span{display:block;font:1px/1px sans-serif;height:',opts.bgImageFrameSize,'px;width:',opts.bgImageFrameSize,'px;overflow:hidden;}',
				'div.',opts.className,' td.tip-right{background-position:100% 0;}',
				'div.',opts.className,' td.tip-bottom{background-position:100% 100%;}',
				'div.',opts.className,' td.tip-left{background-position:0 100%;}',
				'div.',opts.className,' div.tip-inner{background-position:-',opts.bgImageFrameSize,'px -',opts.bgImageFrameSize,'px;}',
				'div.',opts.className,' div.tip-arrow{visibility:hidden;position:absolute;overflow:hidden;font:1px/1px sans-serif;}',
				'</style>'].join('')).appendTo('head');

		// check if we need to hook live events
		if (opts.liveEvents && opts.showOn != 'none') {
			var deadOpts = $.extend({}, opts, { liveEvents: false });
			switch (opts.showOn) {
				case 'hover':
					this.live('mouseenter.poshytip', function() {
						var $this = $(this);
						if (!$this.data('poshytip'))
							$this.poshytip(deadOpts).poshytip('mouseenter');
					});
					break;
				case 'focus':
					this.live('focus.poshytip', function() {
						var $this = $(this);
						if (!$this.data('poshytip'))
							$this.poshytip(deadOpts).poshytip('show');
					});
					break;
			}
			return this;
		}

		return this.each(;
	}

	// default settings
	$.fn.poshytip.defaults = {
		content: 		'[title]',	// content to display ('[title]', 'string', element, function(updateCallback){...}, jQuery)
		className:		'tip-yellow',	// class for the tips
		injectBaseCss:	false,	// injection default base css in head
		showOnlyNotEmpty:	true,	// show only not empty content, actual only for content=[title]
		bgImageFrameSize:	10,		// size in pixels for the background-image (if set in CSS) frame around the inner content of the tip
		showTimeout:		500,		// timeout before showing the tip (in milliseconds 1000 == 1 second)
		hideTimeout:		100,		// timeout before hiding the tip
		timeOnScreen:		0,		// timeout before automatically hiding the tip after showing it (set to > 0 in order to activate)
		showOn:			'hover',	// handler for showing the tip ('hover', 'focus', 'none') - use 'none' to trigger it manually
		liveEvents:		false,		// use live events
		alignTo:		'cursor',	// align/position the tip relative to ('cursor', 'target')
		alignX:			'right',	// horizontal alignment for the tip relative to the mouse cursor or the target element
		// ('right', 'center', 'left', 'inner-left', 'inner-right') - 'inner-*' matter if alignTo:'target'
		alignY:			'top',		// vertical alignment for the tip relative to the mouse cursor or the target element
		// ('bottom', 'center', 'top', 'inner-bottom', 'inner-top') - 'inner-*' matter if alignTo:'target'
		offsetX:		-22,		// offset X pixels from the default position - doesn't matter if alignX:'center'
		offsetY:		18,		// offset Y pixels from the default position - doesn't matter if alignY:'center'
		allowTipHover:		true,		// allow hovering the tip without hiding it onmouseout of the target - matters only if showOn:'hover'
		followCursor:		false,		// if the tip should follow the cursor - matters only if showOn:'hover' and alignTo:'cursor'
		fade: 			true,		// use fade animation
		slide: 			true,		// use slide animation
		slideOffset: 		8,		// slide animation offset
		showAniDuration: 	300,		// show animation duration - set to 0 if you don't want show animation
		hideAniDuration: 	300,		// hide animation duration - set to 0 if you don't want hide animation
		refreshAniDuration:	200		// refresh animation duration - set to 0 if you don't want animation when updating the tooltip asynchronously
	};

})(jQuery);;/*! http://mths.be/placeholder v2.0.6 by @mathias */
;(function(g,i,d){var a='placeholder' in i.createElement('input'),e='placeholder' in i.createElement('textarea'),j=d.fn,c=d.valHooks,l,k;if(a&&e){k=j.placeholder=k.input=k.textarea=true}else{k=j.placeholder=k.input=a;k.textarea=e;l={get:set:;a||(c.input=l);e||(c.textarea=l);d(;d(g).bind('beforeunload.placeholder',}unction b(o,p){var n=this,q=d(n),m;if(n.value==q.attr('placeholder')&&q.hasClass('placeholder')){m=n==i.activeElement;if(q.data('placeholder-password')){q=q.hide().next().show().attr('id',q.removeAttr('id').data('placeholder-id'));if(o===true){return q[0].value=p}q.focus()}else{n.value='';q.removeClass('placeholder')}m&&n.select()}}(this,document,jQuery));;/*
 * 	Character Count Plugin - jQuery plugin
 * 	Dynamic character count for text areas and input fields
 *	written by Alen Grakalic
 *	http://cssglobe.com/post/7161/jquery-plugin-simplest-twitterlike-dynamic-character-count-for-textareas
 *
 *	Copyright (c) 2009 Alen Grakalic (http://cssglobe.com)
 *	Dual licensed under the MIT (MIT-LICENSE.txt)
 *	and GPL (GPL-LICENSE.txt) licenses.
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */

(function($) {

	$.fn.charCount = function(options){

		// default configuration properties
		var defaults = {
			allowed: 140,
			warning: 25,
			css: 'counter',
			counterElement: 'span',
			cssWarning: 'warning',
			cssExceeded: 'exceeded',
			counterText: ''
		};

		var options = $.extend(defaults, options);

		function calculate(obj){
			var count = $(obj).val().length;
			var available = options.allowed - count;
			if(available <= options.warning && available >= 0){
				$(obj).next().addClass(options.cssWarning);
			} else {
				$(obj).next().removeClass(options.cssWarning);
			}
			if(available < 0){
				$(obj).next().addClass(options.cssExceeded);
			} else {
				$(obj).next().removeClass(options.cssExceeded);
			}
			$(obj).next().html(options.counterText + available);
		};

		this.each(function() {
			$(this).after('<'+ options.counterElement +' class="' + options.css + '">'+ options.counterText +'</'+ options.counterElement +'>');
			calculate(this);
			$(this).keyup(function(){calculate(this)});
			$(this).change(;
		});

	};

})(jQuery);
;function H(){var x=navigator&&navigator.userAgent&&/\bMSIE 6\./.test(navigator.userAgent);H=return x}(function(){function x(b){b=b.split(/ /g);var a={};for(var c=b.length;--c>=0;){var d=b[c];if(d)a[d]=null}return a}var y="break continue do else for if return while ",U=y+"auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile ",D=U+"catch class delete false import new operator private protected public this throw true try ",
	I=D+"alignof align_union asm axiom bool concept concept_map const_cast constexpr decltype dynamic_cast explicit export friend inline late_check mutable namespace nullptr reinterpret_cast static_assert static_cast template typeid typename typeof using virtual wchar_t where ",J=D+"boolean byte extends final finally implements import instanceof null native package strictfp super synchronized throws transient ",V=J+"as base by checked decimal delegate descending event fixed foreach from group implicit in interface internal into is lock object out override orderby params readonly ref sbyte sealed stackalloc string select uint ulong unchecked unsafe ushort var ",
	K=D+"debugger eval export function get null set undefined var with Infinity NaN ",L="caller delete die do dump elsif eval exit foreach for goto if import last local my next no our print package redo require sub undef unless until use wantarray while BEGIN END ",M=y+"and as assert class def del elif except exec finally from global import in is lambda nonlocal not or pass print raise try with yield False True None ",N=y+"alias and begin case class def defined elsif end ensure false in module next nil not or redo rescue retry self super then true undef unless until when yield BEGIN END ",
	O=y+"case done elif esac eval fi function in local set then until ",W=I+V+K+L+M+N+O;unction u(b,a,c,d){b.unshift(c,d||0);try{a.splice.apply(a,b)}finally{b.splice(0,2)}}var Y=(function(){var b=["!","!=","!==","#","%","%=","&","&&","&&=","&=","(","*","*=","+=",",","-=","->","/","/=",":","::",";","<","<<","<<=","<=","=","==","===",">",">=",">>",">>=",">>>",">>>=","?","@","[","^","^=","^^","^^=","{","|","|=","||","||=","~","break","case","continue",
	"delete","do","else","finally","instanceof","return","throw","try","typeof"],a="(?:(?:(?:^|[^0-9.])\\.{1,3})|(?:(?:^|[^\\+])\\+)|(?:(?:^|[^\\-])-)";for(var c=0;c<b.length;++c){var d=b[c];a+=X(d.charAt(0))?"|\\b"+d:"|"+d.replace(/([^=<>:&])/g,"\\$1")}a+="|^)\\s*$";return new RegExp(a)})(),P=/&/g,Q=/</g,R=/>/g,Z=/\"/g;r aa=
	/&lt;/g,ba=/&gt;/g,ca=/&apos;/g,da=/&quot;/g,ea=/&amp;/g,fa=/&nbsp;/g;function ga(b){var a=b.indexOf("&");if(a<0)return b;for(--a;(a=b.indexOf("&#",a+1))>=0;){var c=b.indexOf(";",a);if(c>=0){var d=b.substring(a+3,c),g=10;if(d&&d.charAt(0)==="x"){d=d.substring(1);g=16}var e=parseInt(d,g);if(!isNaN(e))b=b.substring(0,a)+String.fromCharCode(e)+b.substring(c+1)}}return b.replace(aa,"<").replace(ba,">").replace(ca,"'").replace(da,'"').replace(ea,"&").replace(fa," ")}	function z(b,a){switch(b.nodeType){case 1:var c=b.tagName.toLowerCase();a.push("<",c);for(var d=0;d<b.attributes.length;++d){var g=b.attributes[d];if(!g.specified)continue;a.push(" ");z(g,a)}a.push(">");for(var e=b.firstChild;e;e=e.nextSibling)z(e,a);if(b.firstChild||!/^(?:br|link|img)$/.test(c))a.push("</",c,">");break;case 2:a.push(b.name.toLowerCase(),'="',$(b.value),'"');break;case 3:case 4:a.push(E(b.nodeValue));break}}var F=null;function ha(b){if(null===F){var a=document.createElement("PRE");
		a.appendChild(document.createTextNode('<!DOCTYPE foo PUBLIC "foo bar">\n<foo />'));F=!/</.test(a.innerHTML)}if(F){var c=b.innerHTML;if(S(b))c=E(c);return c}var d=[];for(var g=b.firstChild;g;g=g.nextSibling)z(g,d);return d.join("")}function ia(b){var a=0;return function(c){var d=null,g=0;for(var e=0,h=c.length;e<h;++e){var f=c.charAt(e);switch(f){case "\t":if(!d)d=[];d.push(c.substring(g,e));var i=b-a%b;a+=i;for(;i>=0;i-="                ".length)d.push("                ".substring(0,i));g=e+1;break;
		case "\n":a=0;break;default:++a}}if(!d)return c;d.push(c.substring(g));return d.join("")}}var ja=/(?:[^<]+|<!--[\s\S]*?--\>|<!\[CDATA\[([\s\S]*?)\]\]>|<\/?[a-zA-Z][^>]*>|<)/g,ka=/^<!--/,la=/^<\[CDATA\[/,ma=/^<br\b/i;function na(b){var a=b.match(ja),c=[],d=0,g=[];if(a)for(var e=0,h=a.length;e<h;++e){var f=a[e];if(f.length>1&&f.charAt(0)==="<"){if(ka.test(f))continue;if(la.test(f)){c.push(f.substring(9,f.length-3));d+=f.length-12}else if(ma.test(f)){c.push("\n");++d}else g.push(d,f)}else{var i=ga(f);
		c.push(i);d+=i.length}}return{source:c.join(""),tags:g}}function v(b,a){var c={};(function(){var g=b.concat(a);for(var e=g.length;--e>=0;){var h=g[e],f=h[3];if(f)for(var i=f.length;--i>=0;)c[f.charAt(i)]=h}})();var d=a.length;return function(g,e){e=e||0;var h=[e,"pln"],f="",i=0,j=g;while(j.length){var o,m=null,k,l=c[j.charAt(0)];if(l){k=j.match(l[1]);m=k[0];o=l[0]}else{for(var n=0;n<d;++n){l=a[n];var p=l[2];if(p&&!p.test(f))continue;k=j.match(l[1]);if(k){m=k[0];o=l[0];break}}if(!m){o="pln";m=j.substring(0,
		1)}}h.push(e+i,o);i+=m.length;j=j.substring(m.length);if(o!=="com"&&/\S/.test(m))f=m}return h}}var oa=v([],[["pln",/^[^<]+/,null],["dec",/^<!\w[^>]*(?:>|$)/,null],["com",/^<!--[\s\S]*?(?:--\>|$)/,null],["src",/^<\?[\s\S]*?(?:\?>|$)/,null],["src",/^<%[\s\S]*?(?:%>|$)/,null],["src",/^<(script|style|xmp)\b[^>]*>[\s\S]*?<\/\1\b[^>]*>/i,null],["tag",/^<\/?\w[^<>]*>/,null]]);function pa(b){var a=oa(b);for(var c=0;c<a.length;c+=2)if(a[c+1]==="src"){var d,g;d=a[c];g=c+2<a.length?a[c+2]:b.length;var e=b.substring(d,
		g),h=e.match(/^(<[^>]*>)([\s\S]*)(<\/[^>]*>)$/);if(h)a.splice(c,2,d,"tag",d+h[1].length,"src",d+h[1].length+(h[2]||"").length,"tag")}return a}var qa=v([["atv",/^\'[^\']*(?:\'|$)/,null,"'"],["atv",/^\"[^\"]*(?:\"|$)/,null,'"'],["pun",/^[<>\/=]+/,null,"<>/="]],[["tag",/^[\w:\-]+/,/^</],["atv",/^[\w\-]+/,/^=/],["atn",/^[\w:\-]+/,null],["pln",/^\s+/,null," \t\r\n"]]);function ra(b,a){for(var c=0;c<a.length;c+=2){var d=a[c+1];if(d==="tag"){var g,e;g=a[c];e=c+2<a.length?a[c+2]:b.length;var h=b.substring(g,
		e),f=qa(h,g);u(f,a,c,2);c+=f.length-2}}return a}function r(b){var a=[],c=[];if(b.tripleQuotedStrings)a.push(["str",/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]);else if(b.multiLineStrings)a.push(["str",/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]);else a.push(["str",/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,
		null,"\"'"]);c.push(["pln",/^(?:[^\'\"\`\/\#]+)/,null," \r\n"]);if(b.hashComments)a.push(["com",/^#[^\r\n]*/,null,"#"]);if(b.cStyleComments)c.push(["com",/^\/\/[^\r\n]*/,null]);if(b.regexLiterals)c.push(["str",/^\/(?:[^\\\*\/\[]|\\[\s\S]|\[(?:[^\]\\]|\\.)*(?:\]|$))+(?:\/|$)/,Y]);if(b.cStyleComments)c.push(["com",/^\/\*[\s\S]*?(?:\*\/|$)/,null]);var d=x(b.keywords);b=null;var g=v(a,c),e=v([],[["pln",/^\s+/,null," \r\n"],["pln",/^[a-z_$@][a-z_$@0-9]*/i,null],["lit",/^0x[a-f0-9]+[a-z]/i,null],["lit",
		/^(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d+)(?:e[+\-]?\d+)?[a-z]*/i,null,"123456789"],["pun",/^[^\s\w\.$@]+/,null]]);function h(f,i){for(var j=0;j<i.length;j+=2){var o=i[j+1];if(o==="pln"){var m,k,l,n;m=i[j];k=j+2<i.length?i[j+2]:f.length;l=f.substring(m,k);n=e(l,m);for(var p=0,t=n.length;p<t;p+=2){var w=n[p+1];if(w==="pln"){var A=n[p],B=p+2<t?n[p+2]:l.length,s=f.substring(A,B);if(s===".")n[p+1]="pun";else if(s in d)n[p+1]="kwd";else if(/^@?[A-Z][A-Z$]*[a-z][A-Za-z$]*$/.test(s))n[p+1]=s.charAt(0)==="@"?"lit":
		"typ"}}u(n,i,j,2);j+=n.length-2}}return i}return function(f){var i=g(f);i=h(f,i);return i}}var G=r({keywords:W,hashComments:true,cStyleComments:true,multiLineStrings:true,regexLiterals:true});function sa(b,a){for(var c=0;c<a.length;c+=2){var d=a[c+1];if(d==="src"){var g,e;g=a[c];e=c+2<a.length?a[c+2]:b.length;var h=G(b.substring(g,e));for(var f=0,i=h.length;f<i;f+=2)h[f]+=g;u(h,a,c,2);c+=h.length-2}}return a}function ta(b,a){var c=false;for(var d=0;d<a.length;d+=2){var g=a[d+1],e,h;if(g==="atn"){e=
		a[d];h=d+2<a.length?a[d+2]:b.length;c=/^on|^style$/i.test(b.substring(e,h))}else if(g==="atv"){if(c){e=a[d];h=d+2<a.length?a[d+2]:b.length;var f=b.substring(e,h),i=f.length,j=i>=2&&/^[\"\']/.test(f)&&f.charAt(0)===f.charAt(i-1),o,m,k;if(j){m=e+1;k=h-1;o=f}else{m=e+1;k=h-1;o=f.substring(1,f.length-1)}var l=G(o);for(var n=0,p=l.length;n<p;n+=2)l[n]+=m;if(j){l.push(k,"atv");u(l,a,d+2,0)}else u(l,a,d,2)}c=false}}return a}function ua(b){var a=pa(b);a=ra(b,a);a=sa(b,a);a=ta(b,a);return a}function va(b,
																																																																																																																														   a,c){var d=[],g=0,e=null,h=null,f=0,i=0,j=ia(8);function o(k){if(k>g){if(e&&e!==h){d.push("</span>");e=null}if(!e&&h){e=h;d.push('<span class="',e,'">')}var l=E(j(b.substring(g,k))).replace(/(\r\n?|\n| ) /g,"$1&nbsp;").replace(/\r\n?|\n/g,"<br />");d.push(l);g=k}}while(true){var m;m=f<a.length?(i<c.length?a[f]<=c[i]:true):false;if(m){o(a[f]);if(e){d.push("</span>");e=null}d.push(a[f+1]);f+=2}else if(i<c.length){o(c[i]);h=c[i+1];i+=2}else break}o(b.length);if(e)d.push("</span>");return d.join("")}
	var C={};function q(b,a){for(var c=a.length;--c>=0;){var d=a[c];if(!C.hasOwnProperty(d))C[d]=b;else if("console"in window)console.log("cannot override language handler %s",d)}}q(G,["default-code"]);q(ua,["default-markup","html","htm","xhtml","xml","xsl"]);q(r({keywords:I,hashComments:true,cStyleComments:true}),["c","cc","cpp","cs","cxx","cyc"]);q(r({keywords:J,cStyleComments:true}),["java"]);q(r({keywords:O,hashComments:true,multiLineStrings:true}),["bsh","csh","sh"]);q(r({keywords:M,hashComments:true,
		multiLineStrings:true,tripleQuotedStrings:true}),["cv","py"]);q(r({keywords:L,hashComments:true,multiLineStrings:true,regexLiterals:true}),["perl","pl","pm"]);q(r({keywords:N,hashComments:true,multiLineStrings:true,regexLiterals:true}),["rb"]);q(r({keywords:K,cStyleComments:true,regexLiterals:true}),["js"]);function T(b,a){try{var c=na(b),d=c.source,g=c.tags;if(!C.hasOwnProperty(a))a=/^\s*</.test(d)?"default-markup":"default-code";var e=C[a].call({},d);return va(d,g,e)}catch(h){if("console"in window){console.log(h);
		console.trace()}return b}}function wa(b){var a=H(),c=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],d=[];for(var g=0;g<c.length;++g)for(var e=0;e<c[g].length;++e)d.push(c[g][e]);c=null;var h=0;function f(){var i=(new Date).getTime()+250;for(;h<d.length&&(new Date).getTime()<i;h++){var j=d[h];if(j.className&&j.className.indexOf("prettyprint")>=0){var o=j.className.match(/\blang-(\w+)\b/);if(o)o=o[1];var m=false;for(var k=j.parentNode;k;k=
		k.parentNode)if((k.tagName==="pre"||k.tagName==="code"||k.tagName==="xmp")&&k.className&&k.className.indexOf("prettyprint")>=0){m=true;break}if(!m){var l=ha(j);l=l.replace(/(?:\r\n?|\n)$/,"");var n=T(l,o);if(!S(j))j.innerHTML=n;else{var p=document.createElement("PRE");for(var t=0;t<j.attributes.length;++t){var w=j.attributes[t];if(w.specified)p.setAttribute(w.name,w.value)}p.innerHTML=n;j.parentNode.replaceChild(p,j);p=j}if(a&&j.tagName==="PRE"){var A=j.getElementsByTagName("br");for(var B=A.length;--B>=
	0;){var s=A[B];s.parentNode.replaceChild(document.createTextNode("\r\n"),s)}}}}}if(h<d.length)setTimeout(f,250);else if(b)b()}f()}window.PR_normalizedHtml=z;window.prettyPrintOne=T;window.prettyPrint=wa;window.PR={createSimpleLexer:v,registerLangHandler:q,sourceDecorator:r,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ"}})();
;/*! Social Likes v3.1.0 by Artem Sapegin - http://sapegin.github.com/social-likes - Licensed MIT */
!function(a,b){"use strict";ocial-likes",l=k+"__",m=k+"_opened",n="https:"===location.protocol?"https:":"http:",o={facebook:{counterUrl:"https://graph.facebook.com/fql?q=SELECT+total_count+FROM+link_stat+WHERE+url%3D%22{url}%22&callback=?",convertNumber:popupUrl:"https://www.facebook.com/sharer/sharer.php?u={url}",popupWidth:600,popupHeight:359},twitter:{popupUrl:"https://twitter.com/intent/tweet?url={url}&text={title}",popupWidth:600,popupHeight:250,click:!0}},mailru:{counterUrl:n+"//connect.mail.ru/share_count?url_list={url}&callback=1&func=?",convertNumes},popupUrl:"https://connect.mail.ru/share?share_url={url}&title={title}",popupWidth:492,popupHeight:500},vkontakte:{counterUrl:"https://vk.com/share.php?act=count&url={url}&index={index}",count)},popupUrl:"https://vk.com/share.php?url={url}&title={title}",popupWidth:655,popupHeight:450},odnoklassniki:{counterUrl:n+"//connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}",count)},popupUrl:"https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}",popupWidth:580,popupHeight:336},plusone:{counterUrl:n+"//share.yandex.ru/gpp.xml?url={url}&callback=?",convertNum0)},popupUrl:"https://plus.google.com/share?url={url}",popupWidth:500,popupHeight:550},pinterest:{counterUrl:n+"//api.pinterest.com/v1/urls/count.json?url={url}&callback=?",convertNumnt},popupUrl:"https://pinterest.com/pin/create/button/?url={url}&description={title}",popupWidth:740,popupHeight:550}},p={promises:{},fec]}};a.fn.socialLi})},a.fn.socialLikes.defaults={url:window.location.href.replace(window.location.hash,""),title:document.title,counters:!0,zeroes:!1,wait:500,timeout:1e4,popupCheckInterval:500,singleTitle:"Share"},c.prototype={init:function(){this.container.addClass(k),this.single=this.container.hasClass(k+"_single"),this.initUserButtons(),this.countersLeft=0,this.number=0,this.container.on("counter."+k,a.proxy(this.updateCounter,this));var b=this.container.children();this.makeSingleButton(),this.buttons=[],b.each(a.pr++},this)),this.options.counters?(this.timer=setTimeout(a.proxy(this.appear,this),this.options.wait),this.timeout=setTimeout(a.proxy(this.ready,this,!0),this.options.timeout)):this.appear()},initUserButt!0},makeSingleButton:function(){if(this.single){var b=this.container;b.addClass(k+"_vertical"),b.wrap(a("<div>",{"class":k+"_single-w"})),b.wrapInner(a("<div>",{"class":k+"__single-container"}));var c=b.parent(),d=a("<div>",{"class":h("widget","single")}),e=a(g('<div class="{buttonCls}"><span class="{iconCls}"></span>{title}</div>',{buttonCls:h("button","single"),iconCls:h("icon","single"),title:this.options.singleTitle}));d.append(e),c.append(d),d.on("cli!1}),this.widget=d}},upd)}},updateCounter:function(a,b,c){c=c||0,(c||this.options.zeroes)&&(this.number+=c,this.single&&this.getCounterElem().text(this.number)),0===this.countersLeft&&(this.appear(),this.ready()),this.countersLeft--},app")},ready:function(a){this.timeout&&clearTimeout(this.timeout),this.container.addClass(k+"_ready"),a||this.container.trigger("ready."+k,this.number)},getCounterE,b}},d.prototype={i0)},upd()},detectServ])},detectParl)},initHtml:function(){var b=this.options,c=this.widget,d=c.find("a");d.length&&this.cloneDataAttrs(d,c);var e=a("<span>",{"class":this.getElementClassNames("button"),text:c.text()});if(b.clickUrl){var g=f(b.clickUrl,{url:b.url,title:b.title}),h=a("<a>",{href:g});this.cloneDataAttrs(c,h),c.replaceWith(h),this.widget=c=h}else c.on("click",a.proxy(this.click,this));c.removeClass(this.service),c.addClass(this.getElementClassNames("widget")),e.prepend(a("<span>",{"class":this.getElementClassNames("icon")})),c.empty().append(e),this.button=e},initCoun)}},cloneDataAt])},getElementClassNae)},updateCoun])},cl!1},addAdditionalParamsTo+c},openPo=b}()})});;/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/o
})( window.jQuery || window.Zepto );

(function($) {

	/**
	 * Initialize elements as "modals". Modals typically are popup dialogs,
	 * notices, modal windows, &c.
	 *
	 * @name jqm
	 * @param options user defined options, augments defaults.
	 * @type jQuery
	 * @cat Plugins/jqModal
	 */

	$.fn.jqm=function(options){
		return this.each(function(){
			var jqm = $(this).data('jqm') || $.extend({ID: I++}, $.jqm.params),
				o = $.extend(jqm,options);

			// add/extend options to modal and mark as initialized
			$(this).data('jqm',o).addClass('jqm-init')[0]._jqmID = o.ID;

			// ... Attach events to trigger showing of this modal
			$(this).jqmAddTrigger(o.trigger);
		});
	};

	/**
	 * Matching modals will have their jqmShow() method fired by attaching a
	 *   onClick event to elements matching `trigger`.
	 *
	 * @name jqmAddTrigger
	 * @param trigger a a string selector, jQuery collection, or DOM element.
	 */
	$.fn.jqmAddTrigger=function(trigger){
		if(trigger){
			return this.each(function(){
				if (!addTrigger($(this), 'jqmShow', trigger))
					err("jqmAddTrigger must be called on initialized modals");
			});
		}
	};

	/**
	 * Matching modals will have their jqmHide() method fired by attaching an
	 *   onClick event to elements matching `trigger`.
	 *
	 * @name jqmAddClose
	 * @param trigger a string selector, jQuery collection, or DOM element.
	 */
	$.fn.jqmAddClose=function(trigger){
		if(trigger){
			return this.each(function(){
				if(!addTrigger($(this), 'jqmHide', trigger))
					err ("jqmAddClose must be called on initialized modals");
			});
		}
	};

	/**
	 * Open matching modals (if not shown)
	 */
	$.fn.jqmShow=function(trigger){
		return this.each(function(){ if(!this._jqmShown) show($(this), trigger); });
	};

	/**
	 * Close matching modals
	 */
	$.fn.jqmHide=function(trigger){
		return this.each(function(){ if(this._jqmShown) hide($(this), trigger); });
	};

	// utility functions

	var
		err = function(msg){
			if(window.console && window.console.error) window.console.error(msg);

		}, show = function(m, t){

			/**
			 * m = modal element (as jQuery object)
			 * t = triggering element
			 *
			 * o = options
			 * z = z-index of modal
			 * v = overlay element (as jQuery object)
			 * h = hash (for jqModal <= r15 compatibility)
			 */

			t = t || window.event;

			var o = m.data('jqm'),
				z = (parseInt(m.css('z-index'))) || 3000,
				v = $('<div></div>').addClass(o.overlayClass).css({
					height:'100%',
					width:'100%',
					position:'fixed',
					left:0,
					top:0,
					'z-index':z-1,
					opacity:o.overlay/100
				}),

				// maintain legacy "hash" construct
				h = {w: m, c: o, o: v, t: t};

			m.css('z-index',z);

			if(o.ajax){
				var target = o.target || m,
					url = o.ajax;

				target = (typeof target === 'string') ? $(target,m) : $(target);
				if(url.substr(0,1) === '@') url = $(t).attr(url.substring(1));

				// load remote contents
				target.load(url,function(){
					if(o.onLoad) o.onLoad.call(this,h);
				});

				// show modal
				if(o.ajaxText) target.html(o.ajaxText);
				open(h);
			}
			else { open(h); }

		}, hide = function(m, t){
			/**
			 * m = modal element (as jQuery object)
			 * t = triggering element
			 *
			 * o = options
			 * h = hash (for jqModal <= r15 compatibility)
			 */

			t = t || window.event;
			var o = m.data('jqm'),
				// maintain legacy "hash" construct
				h = {w: m, c: o, o: m.data('jqmv'), t: t};

			close(h);

		}, onShow = function(hash){
			// onShow callback. Responsible for showing a modal and overlay.
			//  return false to stop opening modal.

			// hash object;
			//  w: (jQuery object) The modal element
			//  c: (object) The modal's options object
			//  o: (jQuery object) The overlay element
			//  t: (DOM object) The triggering element

			// if overlay not disabled, prepend to body
			if(hash.c.overlay > 0) hash.o.prependTo('body');

			// make modal visible
			hash.w.show();

			// call focusFunc (attempts to focus on first input in modal)
			$.jqm.focusFunc(hash.w,true);

			return true;

		}, onHide = function(hash){
			// onHide callback. Responsible for hiding a modal and overlay.
			//  return false to stop closing modal.

			// hash object;
			//  w: (jQuery object) The modal element
			//  c: (object) The modal's options object
			//  o: (jQuery object) The overlay element
			//  t: (DOM object) The triggering element

			// hide modal and if overlay, remove overlay.
			if(hash.w.hide() && hash.o) hash.o.remove();

			return true;

		},  addTrigger = function(m, key, trigger){
			// addTrigger: Adds a jqmShow/jqmHide (key) event click on modal (m)
			//  to all elements that match trigger string (trigger)

			var jqm = m.data('jqm');
			if(jqm) return $(trigger).each(function(){
				this[key] = this[key] || [];

				// register this modal with this trigger only once
				if($.inArray(jqm.ID,this[key]) < 0) {
					this[key].push(jqm.ID);

					// register trigger click event for this modal
					//  allows cancellation of show/hide event from
					$(this).click(function(e){
						if(!e.isDefaultPrevented()) m[key](this);
						return false;
					});
				}

			});

		}, open = function(h){
			// open: executes the onOpen callback + performs common tasks if successful

			// transform legacy hash into new var shortcuts
			var m = h.w,
				v = h.o,
				o = h.c;

			// execute onShow callback
			if(o.onShow(h) !== false){
				// mark modal as shown
				m[0]._jqmShown = true;

				// if modal:true  dialog
				//   Bind the Keep Focus Function [F] if no other Modals are active
				// else,
				//   trigger closing of dialog when overlay is clicked
				if(o.modal){
					if(!ActiveModals[0]){ F('bind'); }
					ActiveModals.push(m[0]);
				}
				else m.jqmAddClose(v);

				//  Attach events to elements inside the modal matching closingClass
				if(o.closeClass) m.jqmAddClose($('.' + o.closeClass,m));

				// if toTop is true and overlay exists;
				//  remember modal DOM position with <span> placeholder element, and move
				//  the modal to a direct child of the body tag (after overlyay)
				if(o.toTop && v)
					m.before('<span id="jqmP'+o.ID+'"></span>').insertAfter(v);

				// remember overlay (for closing function)
				m.data('jqmv',v);

				// close modal if the esc key is pressed and closeOnEsc is set to true
				m.unbind("keydown",$.jqm.closeOnEscFunc);
				if(o.closeOnEsc) {
					m.attr("tabindex", 0).bind("keydown",$.jqm.closeOnEscFunc).focus();
				}
			}

		}, close = function(h){
			// close: executes the onHide callback + performs common tasks if successful

			// transform legacy hash into new var shortcuts
			var m = h.w,
				v = h.o,
				o = h.c;

			// execute onHide callback
			if(o.onHide(h) !== false){
				// mark modal as !shown
				m[0]._jqmShown = false;

				// If modal, remove from modal stack.
				// If no modals in modal stack, unbind the Keep Focus Function
				if(o.modal){
					ActiveModals.pop();
					if(!ActiveModals[0]) F('unbind');
				}

				// IF toTop was passed and an overlay exists;
				//  Move modal back to its "remembered" position.
				if(o.toTop && v) $('#jqmP'+o.ID).after(m).remove();
			}

		},  		}, X = function(e){
			// X: The Focus Examination Function (for modal: true dialogs)

			var targetModal = $(e.target).data('jqm') ||
				$(e.target).parents('.jqm-init:first').data('jqm');
			var activeModal = ActiveModals[ActiveModals.length-1];

			// allow bubbling if event target is within active modal dialog
			return (targetModal && targetModal.ID === activeModal._jqmID) ?
				true : $.jqm.focusFunc(activeModal,e);
		},

		I = 0,   // modal ID increment (for nested modals)
		ActiveModals = [];  // array of active modals

	// $.jqm, overridable defaults
	$.jqm = {
		/**
		 *  default options
		 *
		 * (Integer)   overlay      - [0-100] Translucency percentage (opacity) of the body covering overlay. Set to 0 for NO overlay, and up to 100 for a 100% opaque overlay.
		 * (String)    overlayClass - Applied to the body covering overlay. Useful for controlling overlay look (tint, background-image, &c) with CSS.
		 * (String)    closeClass   - Children of the modal element matching `closeClass` will fire the onHide event (to close the modal).
		 * (Mixed)     trigger      - Matching elements will fire the onShow event (to display the modal). Trigger can be a selector String, a jQuery collection of elements, a DOM element, or a False boolean.
		 * (String)    ajax         - URL to load content from via an AJAX request. False to disable ajax. If ajax begins with a "@", the URL is extracted from the attribute of the triggering element (e.g. use '@data-url' for; <a href="#" class="jqModal" data-url="modal.html">...)
		 * (Mixed)     target       - Children of the modal element to load the ajax response into. If false, modal content will be overwritten by ajax response. Useful for retaining modal design.
		 *                            Target may be a selector string, jQuery collection of elements, or a DOM element -- and MUST exist as a child of the modal element.
		 * (String)    ajaxText     - Text shown while waiting for ajax return. Replaces HTML content of `target` element.
		 * (Boolean)   modal        - If true, user interactivity will be locked to the modal window until closed.
		 * (Boolean)   toTop        - If true, modal will be posistioned as a first child of the BODY element when opened, and its DOM posistion restored when closed. Useful for overcoming z-Index container issues.
		 * (Function)  onShow       - User defined callback function fired when modal opened.
		 * (Function)  onHide       - User defined callback function fired when modal closed.
		 * (Function)  onLoad       - User defined callback function fired when ajax content loads.
		 */
		params: {
			overlay: 50,
			overlayClass: 'jqmOverlay',
			closeClass: 'jqmClose',
			closeOnEsc: false,
			trigger: '.jqModal',
			ajax: false,
			target: false,
			ajaxText: '',
			modal: false,
			toTop: false,
			onShow: onShow,
			onHide: onHide,
			onLoad: false
		},

		// focusFunc is fired:
		//   a) when a modal:true dialog is shown,
		//   b) when an event occurs outside an active modal:true dialog
		// It is passed the active modal:true dialog as well as event
		focusFunc: function(activeModal, e) {

			// if the event occurs outside the activeModal, focus on first element
			if(e) $(':input:visible:first',activeModal).focus();

			// lock interactions to the activeModal
			return false;
		},

		// closeOnEscFunc is attached to modals where closeOnEsc param true.
		closeOnEscFunc: function(e){
			if (e.keyCode === 27) {
				$(this).jqmHide();
				return false;
			}
		}
	};

})( jQuery );

String.prototype.tr = function(a,p) {
	var k;
	var p = typeof(p)=='string' ? p : '';
	var s = this;
	jQuery.each(a,function(k){
		var tk = p?p.split('/'):[];
		tk[tk.length] = k;
		var tp = tk.join('/');
		if(typeof(a[k])=='object'){
			s = s.tr(a[k],tp);
		}else{
			s = s.replace((new RegExp('%%'+tp+'%%', 'g')), a[k]);
		};
	});
	return s;
};


var ls = ls || {};

/**
 * Управление всплывающими сообщениями
 */
ls.msg = (function ($) {
	/**
	* Опции
	*/
	this.options = {
		class_notice: 'n-notice',
		class_error: 'n-error'
	};

	/**
	* Отображение информационного сообщения
	*/
	this.notice = function(title,msg){
		$.notifier.broadcast(title, msg, this.options.class_notice);
	};

	/**
	* Отображение сообщения об ошибке
	*/
	this.error = function(title,msg){
		$.notifier.broadcast(title, msg, this.options.class_error);
	};

	return this;
}).call(ls.msg || {},jQuery);


/**
* Доступ к языковым текстовкам (предварительно должны быть прогружены в шаблон)
*/
ls.lang = (function ($) {
	/**
	* Набор текстовок
	*/
	this.msgs = {};

	/**
	* Загрузка текстовок
	*/
	this.load = function(msgs){
		$.extend(true,this.msgs,msgs);
	};

	/**
	* Отображение сообщения об ошибке
	*/
	this.get = function(name,replace){
		if (this.msgs[name]) {
			var value=this.msgs[name];
			if (replace) {
				value = value.tr(replace);
			}
			return value;
		}
		return '';
	};

	return this;
}).call(ls.lang || {},jQuery);

/**
 * Методы таймера например, запуск функии через интервал
 */
ls.timer = (function ($) {

	this.aTimers={};

	/**
	 * Запуск метода через определенный период, поддерживает пролонгацию
	 */
	this.run = function(fMethod,sUniqKey,aParams,iTime){
		iTime=iTime || 1500;
		aParams=aParams || [];
		sUniqKey=sUniqKey || Math.random();

		if (this.aTimers[sUniqKey]) {
			clearTimeout(this.aTimers[sUniqKey]);
			this.aTimers[sUniqKey]=null;
		}
		var timeout = setTimeout(function(){
			clesUniqKey]=null;
			fMethod.apply(this,sUniqKey]=timeout;
	};

	return this;
}).call(ls.timer || {},jQuery);

/**
 * Функционал хранения js данных
 */
ls.registry = (function ($) {

	this.aData={};

	/**
	 * Сохранение
	 */
	this.set = function(sName,data){
		this.aData[sName]=data;
	};

	/**
	 * Получение
	 */
	this.get = function(sName){
		return this.aData[sName];
	};

	return this;
}).call(ls.registry || {},jQuery);

/**
* Вспомогательные функции
*/
ls.tools = (function ($) {

	/**
	* Переводит первый символ в верхний регистр
	*/
	this.ucfirst = function(str) {
		var f = str.charAt(0).toUpperCase();
		return f + str.substr(1, str.length-1);
	};

	/**
	* Выделяет все chekbox с определенным css классом
	*/
	this.checkAll = function(cssclass, checkbox, invert) {
		$('.'+cssclass).each(function(index, item){
			if (invert) {
				$(item).attr('checked', !$(item).attr("checked"));
			} else {
				$(item).attr('checked', $(checkbox).attr("checked"));
			}
		});
	};

	/**
	* Предпросмотр
	*/
	this.textPreview = function(textId, save, divPreview) {
		var text =(BLOG_USE_TINYMCE) ? tinyMCE.activeEditor.getContent()  : $('#'+textId).val();
		var ajaxUrl = aRouter['ajax']+'preview/text/';
		var ajaxOptions = {text: text, save: save};
		ls.hook.marker('textPreviewAjaxBefore');
		ls.ajax(ajaxUrl, ajaxOptions, function(result){
			if (!result) {
				ls.msg.error('Error','Please try again later');
			}
			if (result.bStateError) {
				ls.msg.error(result.sMsgTitle||'Error',result.sMsg||'Please try again later');
			} else {
				if (!divPreview) {
					divPreview = 'text_preview';
				}
				var elementPreview = $('#'+divPreview);
				ls.hook.marker('textPreviewDisplayBefore');
				if (elementPreview.length) {
					elementPreview.html(result.sText);
					ls.hook.marker('textPreviewDisplayAfter');
				}
			}
		});
	};

	/**
	* Возвращает выделенный текст на странице
	*/
	this.getSelectedText = function(){
		var text = '';
		if(window.getSelection){
			text = window.getSelection().toString();
		} else if(window.document.selection){
			var sel = window.document.selection.createRange();
			text = sel.text || sel;
			if(text.toString) {
				text = text.toString();
			} else {
				text = '';
			}
		}
		return text;
	};


	return this;
}).call(ls.tools || {},jQuery);


/**
* Дополнительные функции
*/
ls = (function ($) {

	/**
	* Глобальные опции
	*/
	this.options = this.options || {};

	/**
	* Выполнение AJAX запроса, автоматически передает security key
	*/
	this.ajax = function(url,params,callback,more){
		more=more || {};
		params=params || {};
		params.security_ls_key=LIVESTREET_SECURITY_KEY;

		$.each(params,function(k,v){
			if (typeof(v) == "boolean") {
				params[k]=v ? 1 : 0;
			}
		});

		if (url.indexOf('http://')!=0 && url.indexOf('https://')!=0 && url.indexOf('/')!=0) {
			url=aRouter['ajax']+url+'/';
		}

		var ajaxOptions = {
			type: more.type || "POST",
			url: url,
			data: params,
			dataType: more.dataType || 'json',
			success: callback || function(){
				ls.debug("ajax success: ");
				ls.debug.apply(this,arguments);
			}.bind(this),
			error: more.error || function(msg){
				ls.debug("ajax error: ");
				ls.debug.apply(this,arguments);
			}.bind(this),
			complete: more.complete || function(msg){
				ls.debug("ajax complete: ");
				ls.debug.apply(this,arguments);
			}.bind(this)
		};

		ls.hook.run('ls_ajax_before', [ajaxOptions], this);

		return $.ajax(ajaxOptions);
	};

	/**
	* Выполнение AJAX отправки формы, включая загрузку файлов
	*/
	this.ajaxSubmit = function(url,form,callback,more) {
		more=more || {};
		if (typeof(form)=='string') {
			form=$('#'+form);
		}
		if (url.indexOf('http://')!=0 && url.indexOf('https://')!=0 && url.indexOf('/')!=0) {
			url=aRouter['ajax']+url+'/';
		}

		var options={
			type: 'POST',
			url: url,
			dataType: more.dataType || 'json',
			data: {security_ls_key: LIVESTREET_SECURITY_KEY},
			success: callback || function(){
				ls.debug("ajax success: ");
				ls.debug.apply(this,arguments);
			}.bind(this),
			error: more.error || function(){
				ls.debug("ajax error: ");
				ls.debug.apply(this,arguments);
			}.bind(this)

		};

		ls.hook.run('ls_ajaxsubmit_before', [options], this);

		form.ajaxSubmit(options);
	};

	/**
	* Загрузка изображения
	*/
	this.ajaxUploadImg = function(form, sToLoad) {
		ls.hook.marker('ajaxUploadImgBefore');
		ls.ajaxSubmit('upload/image/',form,function(data){
			if (data.bStateError) {
				ls.msg.error(data.sMsgTitle,data.sMsg);
			} else {
				$.markItUp({replaceWith: data.sText} );
				$('#window_upload_img').find('input[type="text"], input[type="file"]').val('');
				$('#window_upload_img').jqmHide();
				ls.hook.marker('ajaxUploadImgAfter');
			}
		});
	};

	/**
	* Дебаг сообщений
	*/
	this.debug = function() {
		if (this.options.debug) {
			this.log.apply(this,arguments);
		}
	};

	/**
	* Лог сообщений
	*/
	this.log = function() {
		if (!$.browser.msie && window.console && window.console.log) {
			Function.prototype.bind.call(console.log, console).apply(console, arguments);
		} else {
			//alert(msg);
		}
	};

	return this;
}).call(ls || {},jQuery);







/**
* Костыли для ИЕ
*/
ls.ie = (function ($) {

	// эмуляция border-sizing в IE
	this.bordersizing = function(inputs) {
		if ($('html').hasClass('ie7')) {
			if (!tinyMCE) $('textarea.mce-editor').addClass('markItUpEditor');

			inputs.each(function(i){
				var obj = $(this);
				if (obj.css('box-sizing') == 'border-box') {
					obj.css('width', '100%');
					obj.width(2 * obj.width() - obj.outerWidth());
				}
			});
		}
	};

	return this;
}).call(ls.ie || {},jQuery);



/**
* Добавление в избранное
*/
ls.favourite = (function ($) {
	/**
	* Опции
	*/
	this.options = {
		active: 'active',
		type: {
			topic: {
				url: 			aRouter['ajax']+'favourite/topic/',
				targetName: 	'idTopic'
			},
			talk: {
				url: 			aRouter['ajax']+'favourite/talk/',
				targetName: 	'idTalk'
			},
			comment: {
				url: 			aRouter['ajax']+'favourite/comment/',
				targetName: 	'idComment'
			}
		}
	};

	/**
	* Переключение избранного
	*/
	this.toggle = function(idTarget, objFavourite, type) {
		if (!this.options.type[type]) { return false; }

		this.objFavourite = $(objFavourite);

		var params = {};
		params['type'] = !this.objFavourite.hasClass(this.options.active);
		params[this.options.type[type].targetName] = idTarget;

		ls.hook.marker('toggleBefore');
		ls.ajax(this.options.type[type].url, params, function(result) {
			$(this).trigger('toggle',[idTarget,objFavourite,type,params,result]);
			if (result.bStateError) {
				ls.msg.error(null, result.sMsg);
			} else {
				ls.msg.notice(null, result.sMsg);
				this.objFavourite.removeClass(this.options.active);
				if (result.bState) {
					this.objFavourite.addClass(this.options.active);
					this.showTags(type,idTarget);
				} else {
					this.hideTags(type,idTarget);
				}
				ls.hook.run('ls_favourite_toggle_after',[idTarget,objFavourite,type,params,result],this);
			}
		}.bind(this));
		return false;
	};

	this.showEditTags = function(idTarget,type,obj) {
		var form=$('#favourite-form-tags');
		$('#favourite-form-tags-target-type').val(type);
		$('#favourite-form-tags-target-id').val(idTarget);
		var text='';
		var tags=$('.js-favourite-tags-'+$('#favourite-form-tags-target-type').val()+'-'+$('#favourite-form-tags-target-id').val());
		tags.find('.js-favourite-tag-user a').each(function(k,tag){
			if (text) {
				text=text+', '+$(tag).text();
			} else {
				text=$(tag).text();
			}
		});
		$('#favourite-form-tags-tags').val(text);
	favourite-form-tags').jqmHide();
		return false;
	};

	this.saveTags = function(form) {
		var url=aRouter['ajax']+'favourite/save-tags/';
		ls.hook.marker('saveTagsBefore');
		ls.ajaxSubmit(url, $(form), function(result) {
			if (result.bStateError) {
				ls.msg.error(null, result.sMsg);
			} else {
				this.hideEditTags();
				var type=$('#favourite-form-tags-target-type').val();
				var tags=$('.js-favourite-tags-'+type+'-'+$('#favourite-form-tags-target-id').val());
				tags.find('.js-favourite-tag-user').detach();
				var edit=tags.find('.js-favourite-tag-edit');
				$.each(result.aTags,function(k,v){
					edit.before('<li class="'+type+'-tags-user js-favourite-tag-user">, <a rel="tag" href="'+v.url+'">'+v.tag+'</a></li>');
				});

				ls.hook.run('ls_favourite_save_tags_after',[form,result],this);
			}
		}.bind(this));
		return false;
	};

	this.hideTags = function(targetType,targetId) {
		var tags=$('.js-favourite-tags-'+targetType+'-'+targetId);
		tags.find('.js-favourite-tag-user').detach();
		tags.find('.js-favourite-tag-edit').hide();
		this.hideEditTags();
	};

	this.showTags = function(targetType,targetId) {
		$('.js-favourite-tags-'+targetType+'-'+targetId).find('.js-favourite-tag-edit').show();
	};

	return this;
}).call(ls.favourite || {}, jQuery);

/**
* Функционал личных сообщений
*/
ls.talk = (function ($) {

	/**
	* Добавляет пользователя к переписке
	*/
	this.addToTalk = function(idTalk){
		var sUsers = $('#talk_speaker_add').val();
		if(!sUsers) return false;
		$('#talk_speaker_add').val('');

		var url = aRouter['talk']+'ajaxaddtalkuser/';
		var params = {users: sUsers, idTalk: idTalk};

		ls.hook.marker('addToTalkBefore');
		ls.ajax(url, params, function(result) {
			if (result.bStateError) {
				ls.msg.error(null, result.sMsg);
			} else {
				$.each(result.aUsers, function(index, item) {
					if(item.bStateError){
						ls.msg.notice(null, item.sMsg);
					} else {
						var list = $('#speaker_list');
						if(list.length == 0) {
							list = $('<ul class="list" id="speaker_list"></ul>');
							$('#speaker_list_block').append(list);
						}
						var listItem = $('<li id="speaker_item_'+item.sUserId+'_area"><a href="'+item.sUserLink+'" class="user">'+item.sUserLogin+'</a> - <a href="#" id="speaker_item_'+item.sUserId+'" class="delete">'+ls.lang.get('delete')+'</a></li>')
						list.append(listItem);
						ls.hook.run('ls_talk_add_to_talk_item_after',[idTalk,item],listItem);
					}
				});

				ls.hook.run('ls_talk_add_to_talk_after',[idTalk,result]);
			}
		});
		return false;
	};

	/**
	* Удаляет пользователя из переписки
	*/
	this.removeFromTalk = function(link, idTalk) {
		link = $(link);

		$('#'+link.attr('id')+'_area').fadeOut(500,function(){
			$(this).remove();
		});
		var idTarget = link.attr('id').replace('speaker_item_','');

		var url = aRouter['talk']+'ajaxdeletetalkuser/';
		var params = {idTarget: idTarget, idTalk: idTalk};

		ls.hook.marker('removeFromTalkBefore');
		ls.ajax(url, params, function(result) {
			if (!result) {
				ls.msg.error('Error','Please try again later');
				link.parent('li').show();
			}
			if (result.bStateError) {
				ls.msg.error(null, result.sMsg);
				link.parent('li').show();
			}
			ls.hook.run('ls_talk_remove_from_talk_after',[idTalk,idTarget],link);
		});

		return false;
	};

	/**
	* Добавляет пользователя в черный список
	*/
	this.addToBlackList = function() {
		var sUsers = $('#talk_blacklist_add').val();
		if(!sUsers) return false;
		$('#talk_blacklist_add').val('');

		var url = aRouter['talk']+'ajaxaddtoblacklist/';
		var params = {users: sUsers};

		ls.hook.marker('addToBlackListBefore');
		ls.ajax(url, params, function(result) {
			if (result.bStateError) {
				ls.msg.error(null, result.sMsg);
			} else {
				$.each(result.aUsers, function(index, item) {
					if(item.bStateError){
						ls.msg.notice(null, item.sMsg);
					} else {
						var list = $('#black_list');
						if(list.length == 0) {
							list = $('<ul class="list" id="black_list"></ul>');
							$('#black_list_block').append(list);
						}
						var listItem = $('<li id="blacklist_item_'+item.sUserId+'_area"><a href="#" class="user">'+item.sUserLogin+'</a> - <a href="#" id="blacklist_item_'+item.sUserId+'" class="delete">'+ls.lang.get('delete')+'</a></li>');
						$('#black_list').append(listItem);
						ls.hook.run('ls_talk_add_to_black_list_item_after',[item],listItem);
					}
				});
				ls.hook.run('ls_talk_add_to_black_list_after',[result]);
			}
		});
		return false;
	};

	/**
	* Удаляет пользователя из черного списка
	*/
	this.removeFromBlackList = function(link) {
		link = $(link);

		$('#'+link.attr('id')+'_area').fadeOut(500,function(){
			$(this).remove();
		});
		var idTarget = link.attr('id').replace('blacklist_item_','');

		var url = aRouter['talk']+'ajaxdeletefromblacklist/';
		var params = {idTarget: idTarget};

		ls.hook.marker('removeFromBlackListBefore');
		ls.ajax(url, params, function(result) {
			if (!result) {
				ls.msg.error('Error','Please try again later');
				link.parent('li').show();
			}
			if (result.bStateError) {
				ls.msg.error(null, result.sMsg);
				link.parent('li').show();
			}
			ls.hook.run('ls_talk_remove_from_black_list_after',[idTarget],link);
		});
		return false;
	};

	/**
	* Добавляет или удаляет друга из списка получателей
	*/
	this.toggleRecipient = function(login, add) {
		var to = $.map($('#talk_users').val().split(','), function(item, index){
			item = $.trim(item);
			return item != '' ? item : null;
		});
		if (add) { to.push(login); to = $.richArray.unique(to); } else { to = $.richArray.without(to, login); }
		$('#talk_users').val(to.join(', '));
	};

	/**
	 * Очищает поля фильтра
	 */
	this.clearFilter = function() {
		$('#block_talk_search_content').find('input[type="text"]').val('');
		$('#block_talk_search_content').find('input[type="checkbox"]').removeAttr("checked");
		return false;
	};

	/**
	 * Удаление списка писем
	 */
	this.removeTalks = function() {
		if ($('.form_talks_checkbox:checked').length == 0) {
			return false;
		}
		$('#form_talks_list_submit_del').val(1);
		$('#form_talks_list_submit_read').val(0);
		$('#form_talks_list').submit();
		return false;
	};

	/**
	 * Пометка о прочтении писем
	 */
	this.makeReadTalks = function() {
		if ($('.form_talks_checkbox:checked').length == 0) {
			return false;
		}
		$('#form_talks_list_submit_read').val(1);
		$('#form_talks_list_submit_del').val(0);
		$('#form_talks_list').submit();
		return false;
	};

	return this;
}).call(ls.talk || {},jQuery);


/**
* Голосование
*/
ls.vote = (function ($) {
	/**
	* Опции
	*/
	this.options = {
		classes: {
			voted: 		'voted',
			plus: 		'voted-up',
			minus:  	'voted-down',
			positive:	'vote-count-positive',
			negative:  	'vote-count-negative',
			voted_zero: 'voted-zero',
			zero: 	 	'vote-count-zero',
			not_voted:  'not-voted'
		},
		prefix_area: 'vote_area_',
		prefix_total: 'vote_total_',
		prefix_count: 'vote_count_',

		type: {
			comment: {
				url: aRouter['ajax']+'vote/comment/',
				targetName: 'idComment'
			},
			topic: {
				url: aRouter['ajax']+'vote/topic/',
				targetName: 'idTopic'
			},
			blog: {
				url: aRouter['ajax']+'vote/blog/',
				targetName: 'idBlog'
			},
			user: {
				url: aRouter['ajax']+'vote/user/',
				targetName: 'idUser'
			}
		}
	};

	this.vote = function(idTarget, objVote, value, type) {
		if (!this.options.type[type]) return false;

		objVote = $(objVote);
		var params = {};
		params['value'] = value;
		params[this.options.type[type].targetName] = idTarget;

		ls.hook.marker('voteBefore');
		ls.ajax(this.options.type[type].url, params, function(result) {
			var args = [idTarget, objVote, value, type, result];
			this.onVote.apply(this,args);
		}.bind(this));
		return false;
	}

	this.onVote = function(idTarget, objVote, value, type, result) {
		if (result.bStateError) {
			ls.msg.error(null, result.sMsg);
		} else {
			ls.msg.notice(null, result.sMsg);

			var divVoting = $('#'+this.options.prefix_area+type+'_'+idTarget);

			divVoting.addClass(this.options.classes.voted);

			if (value > 0) {
				divVoting.addClass(this.options.classes.plus);
			}
			if (value < 0) {
				divVoting.addClass(this.options.classes.minus);
			}
			if (value == 0) {
				divVoting.addClass(this.options.classes.voted_zero);
			}

			var divTotal = $('#'+this.options.prefix_total+type+'_'+idTarget);
			var divCount = $('#'+this.options.prefix_count+type+'_'+idTarget);

			if (divCount.length>0 && result.iCountVote) {
				divCount.text(parseInt(result.iCountVote));
			}

			result.iRating = parseFloat(result.iRating);

			divVoting.removeClass(this.options.classes.negative);
			divVoting.removeClass(this.options.classes.positive);
			divVoting.removeClass(this.options.classes.not_voted);
			divVoting.removeClass(this.options.classes.zero);

			if (result.iRating > 0) {
				divVoting.addClass(this.options.classes.positive);
				divTotal.text('+'+result.iRating);
			}else if (result.iRating < 0) {
				divVoting.addClass(this.options.classes.negative);
				divTotal.text(result.iRating);
			}else if (result.iRating == 0) {
				divVoting.addClass(this.options.classes.zero);
				divTotal.text(0);
			}

			var method='onVote'+ls.tools.ucfirst(type);
			if ($.type(this[method])=='function') {
				this[method].apply(this,[idTarget, objVote, value, type, result]);
			}

		}

		$(this).trigger('vote',[idTarget, objVote, value, type, result]);
	}



	this.onVoteUser = function(idTarget, objVote, value, type, result) {
		$('#user_skill_'+idTarget).text(result.iSkill);
	}

	this.getVoteListParams = { target_type: '', target_id: '', page:1 };
	this.getVoteList = function(targetType, targetId, page) {
		page = page || 1;

		this.initVoteList();

		this.getVoteListParams['target_type'] = targetType;
		this.getVoteListParams['target_id'] = targetId;
		this.getVoteListParams['page'] = page;

		ls.ajax(aRouter['ajax']+'vote/get/', this.getVoteListParams, function(result) {
			if (result.bStateError) {
				ls.msg.error(null, result.sMsg);
			} else {
				$('#modal_vote_list .modal-body').removeClass('loader');
				$('#modal_vote_list .modal-body').html(result.sText);
			}
		});
	};

	this.voteListInited = false;
	this.initVoteList  = function() {

		if (!this.voteListInited) {

			this.voteListInited = true;

			var that = this;
			var modal = '<div class="modal fade in" id="modal_vote_list">\n'+
				'	<div class="modal-dialog">\n'+
				'		<header class="modal-header">\n'+
				'			<button type="button" class="close jqmClose" data-dismiss="modal" aria-hidden="true">&times;</button>\n'+
				'			<h4 class="modal-title">История голосования</h4>\n'+
				'		</header>\n'+
				'		<div class="modal-content">\n'+
				'			<div class="modal-body">\n'+
				'			</div>\n'+
				'		</div>\n'+
				'	</div>\n'+
				'</div>';

			$(modal).appendTo('body');

			$('#modal_vote_list').jqm();

			$(document).on('click', '#vote-paging a', function (event) {
				event.preventDefault();
				that.getVoteList(that.getVoteListParams['target_type'], that.getVoteListParams['target_id'], $(this).data('page'));
			});
		}

		$('#modal_vote_list').jqmShow();
		$('#modal_vote_list .modal-body').html('');
		$('#modal_vote_list .modal-body').addClass('loader');
	};

	return this;

}).call(ls.vote || {}, jQuery);

/**
* Опросы
*/
ls.poll = (function ($) {

	/**
	* Голосование в опросе
	*/
	this.vote = function(idTopic, idAnswer) {
		var url = aRouter['ajax']+'vote/question/';
		var params = {idTopic: idTopic, idAnswer: idAnswer};
		ls.hook.marker('voteBefore');
		ls.ajax(url, params, function(result) {
			if (result.bStateError) {
				ls.msg.error(null, result.sMsg);
			} else {
				ls.msg.notice(null, result.sMsg);
				var area = $('#topic_question_area_'+idTopic);
				ls.hook.marker('voteDisplayBefore');
				area.html(result.sText);
				ls.hook.run('ls_pool_vote_after',[idTopic, idAnswer,result],area);
			}
		});
	};

	/**
	* Добавляет вариант ответа
	*/
	this.addAnswer = function() {
		if($("#question_list li").length == 20) {
			ls.msg.error(null, ls.lang.get('topic_question_create_answers_error_max'));
			return false;
		}
		var newItem = $("#question_list li:first-child").clone();
		newItem.find('a').remove();
		var removeAnchor = $('<a href="#"/>').text(ls.lang.get('delete')).click(function(e){
			e.preventDefault();
			return this.removeAnswer(e.target);
		}.bind(this));
		newItem.appendTo("#question_list").append(removeAnchor);
		newItem.find('input').val('');
		ls.hook.run('ls_pool_add_answer_after',[removeAnchor],newItem);
	};

	/**
	* Удаляет вариант ответа
	*/
	this.removeAnswer = function(obj) {
		$(obj).parent("li").remove();
		return false;
	};

	this.switchResult = function(obj, iTopicId) {
		if ($('#poll-result-sort-'+iTopicId).css('display') == 'none') {
			$('#poll-result-original-'+iTopicId).hide();
			$('#poll-result-sort-'+iTopicId).show();
			$(obj).toggleClass('active');
		} else {
			$('#poll-result-sort-'+iTopicId).hide();
			$('#poll-result-original-'+iTopicId).show();
			$(obj).toggleClass('active');
		}
		return false;
	};

	return this;
}).call(ls.poll || {}, jQuery);

/**
* Обработка комментариев
*/
ls.comments = (function ($) {
    /**
     * Опции
     */
    this.options = {
        type: {
            topic: {
                url_add: aRouter.blog + 'ajaxaddcomment/',
                url_response: aRouter.blog + 'ajaxresponsecomment/'
            },
            talk: {
                url_add: aRouter.talk + 'ajaxaddcomment/',
                url_response: aRouter.talk + 'ajaxresponsecomment/'
            }
        },
        classes: {
            form_loader: 'loader',
            comment_new: 'comment-new',
            comment_current: 'comment-current',
            comment_deleted: 'comment-deleted',
            comment_self: 'comment-self',
            comment: 'comment',
            comment_goto_parent: 'goto-comment-parent',
            comment_goto_child: 'goto-comment-child'
        },
        wysiwyg: null,
        folding: true
    };

    this.iCurrentShowFormComment = 0;
    this.iCurrentViewComment = null;
    this.aCommentNew = [];

    this.preStoreCommentText = function (sText) {
        var sNewText = sText.trim();
        sNewText = sNewText.replace(/\n\s*\n/g, '\n');
        sNewText = sNewText.replace(/\n/g, '<br>');
        return sNewText;

    };

    this.cleanCommentsText = function (sText) {

        var sNewText = sText.replace(/<br\s?\/?>/g, '\n');
        sNewText = sNewText.replace(/\n\s*\n/g, '\n');
        return sNewText;

    };
    // Добавляет комментарий
    this.add = function (formObj, targetId, targetType) {
        if (this.options.wysiwyg) {
            $('#' + formObj + ' textarea').val(tinyMCE.activeEditor.getContent());
        }
        $('#' + formObj + ' textarea').val(this.preStoreCommentText($('#' + formObj + ' textarea').val()));
        formObj = $('#' + formObj);

        $('#form_comment_text').addClass(this.options.classes.form_loader).attr('readonly', true);
        $('#comment-button-submit').attr('disabled', 'disabled');

        ls.ajax(this.options.type[targetType].url_add, formObj.serializeJSON(), function (result) {
            $('#comment-button-submit').removeAttr('disabled');
            if (!result) {
                this.enableFormComment();
                ls.msg.error('Error', 'Please try again later');
                return;
            }
            if (result.bStateError) {
                this.enableFormComment();
                ls.msg.error(null, result.sMsg);
            } else {
                this.enableFormComment();
                $('#form_comment_text').val('');

                // Load new comments
                this.load(targetId, targetType, result.sCommentId, true);
                ls.hook.run('ls_comments_add_after', [formObj, targetId, targetType, result]);
            }
        }.bind(this));
    };


    // Активирует форму
    this.enableFormComment = function () {
        $('#form_comment_text').removeClass(this.options.classes.form_loader).attr('readonly', false);
    };


    // Показ� function (idComment, bNoFocus) {
        var reply = $('#reply');
        if (!reply.length) {
            return;
        }
        $('#comment_preview_' + this.iCurrentShowFormComment).remove();

        if (this.iCurrentShowFormComment == idComment && reply.is(':visible')) {
            reply.hide();
            return;
        }
        if (this.options.wysiwyg) {
            tinyMCE.execCommand('mceRemoveControl',true,'form_comment_text');
        }
        reply.insertAfter('#comment_id_' + idComment).show();
        $('#form_comment_text').val('');
        $('#form_comment_reply').val(idComment);

        this.iCurrentShowFormComment = idComment;
        if (this.options.wysiwyg) {
            tinyMCE.execCommand('mceAddControl', true, 'form_comment_text');
        }

        // if (!bNoFocus) $('#form_comment_text').focus();
        // Временная заплатка
        if (!bNoFocus) $('#form_comment_text').focus();

        if ($('html').hasClass('ie7')) {
            var inputs = $('input.input-text, textarea');
            ls.ie.bordersizing(inputs);
        }

        setTimeout(function () {
            tinyMCE.execCommand('mceFocus', false, "form_comment_text");
        }, 100);

    };


    // Подгружает новые комментарии
    this.load = function (idTarget, typeTarget, selfIdComment, bNotFlushNew) {
        var idCommentLast = $("#comment_last_id").val();

        // Удаляем подсветку у комментариев
        if (!bNotFlushNew) {
            $('.comment').each(function (index, item) {
                $(item).removeClass(this.options.classes.comment_new + ' ' + this.options.classes.comment_current);
            }.bind(this));
        }

        objImg = $('#update-comments');
        objImg.addClass('active');

        var params = {idCommentLast: idCommentLast, idTarget: idTarget, typeTarget: typeTarget};
        if (selfIdComment) {
            params.selfIdComment = selfIdComment;
        }
        if ($('#comment_use_paging').val()) {
            params.bUsePaging = 1;
        }

        ls.ajax(this.options.type[typeTarget].url_response, params, function (result) {
            objImg.removeClass('active');

            if (!result) {
                ls.msg.error('Error', 'Please try again later');
            }
            if (result.bStateError) {
                ls.msg.error(null, result.sMsg);
            } else {
                var aCmt = result.aComments;
                if (aCmt.length > 0 && result.iMaxIdComment) {
                    $("#comment_last_id").val(result.iMaxIdComment);
                    $('#count-comments').text(parseInt($('#count-comments').text()) + aCmt.length);
                    if (ls.blocks) {
                        var curItemBlock = ls.blocks.getCurrentItem('stream');
                        if (curItemBlock.data('type') == 'comment') {
                            ls.blocks.load(curItemBlock, 'stream');
                        }
                    }
                }
                var iCountOld = 0;
                if (bNotFlushNew) {
                    iCountOld = this.aCommentNew.length;
                } else {
                    this.aCommentNew = [];
                }
                if (selfIdComment) {
                    this.toggleCommentForm(this.iCurrentShowFormComment, true);
                    this.setCountNewComment(aCmt.length - 1 + iCountOld);
                } else {
                    this.setCountNewComment(aCmt.length + iCountOld);
                }

                $.each(aCmt, function (index, item) {
                    if (!(selfIdComment && selfIdComment == item.id)) {
                        this.aCommentNew.push(item.id);
                    }
                    this.inject(item.idParent, item.id, item.html);
                }.bind(this));

                if (selfIdComment && $('#comment_id_' + selfIdComment).length) {
                    this.scrollToComment(selfIdComment);
                }
                this.checkFolding();
                ls.hook.run('ls_comments_load_after', [idTarget, typeTarget, selfIdComment, bNotFlushNew, result]);
            }
        }.bind(this));
    };


    // Вставка комментария
    this.inject = function (idCommentParent, idComment, sHtml) {
        var newComment = $('<div>', {'class': 'comment-wrapper', id: 'comment_wrapper_id_' + idComment}).html(sHtml);
        if (idCommentParent) {
            // Уровень вложенности родителя
            var iCurrentTree = $('#comment_wrapper_id_' + idCommentParent).parentsUntil('#comments').length;
            if (iCurrentTree == ls.registry.get('comment_max_tree')) {
                // Определяем id предыдушего родителя
                var prevCommentParent = $('#comment_wrapper_id_' + idCommentParent).parent();
                idCommentParent = parseInt(prevCommentParent.attr('id').replace('comment_wrapper_id_', ''));
            }
            $('#comment_wrapper_id_' + idCommentParent).append(newComment);
        } else {
            $('#comments').append(newComment);
        }
        ls.hook.run('ls_comment_inject_after', arguments, newComment);
    };


    // Удалить/восстановить комментарий
    this.toggle = function (obj, commentId) {
        var url = aRouter['ajax'] + 'comment/delete/';
        var params = {idComment: commentId};

        ls.hook.marker('toggleBefore');
        ls.ajax(url, params, function (result) {
            if (!result) {
                ls.msg.error('Error', 'Please try again later');
            }
            if (result.bStateError) {
                ls.msg.error(null, result.sMsg);
            } else {
                ls.msg.notice(null, result.sMsg);

                $('#comment_id_' + commentId).removeClass(this.options.classes.comment_self + ' ' + this.options.classes.comment_new + ' ' + this.options.classes.comment_deleted + ' ' + this.options.classes.comment_current);
                if (result.bState) {
                    $('#comment_id_' + commentId).addClass(this.options.classes.comment_deleted);
                }
                $(obj).text(result.sTextToggle);
                ls.hook.run('ls_comments_toggle_after', [obj, commentId, result]);
            }
        }.bind(this));
    };


    // Предпросмотр комментария
    this.preview = function (divPreview) {
        if (this.options.wysiwyg) {
            $("#form_comment_text").val(tinyMCE.activeEditor.getContent());
        }
        if ($("#form_comment_text").val() == '') return;
        $("#comment_preview_" + this.iCurrentShowFormComment).remove();
        $('#reply').before('<div id="comment_preview_' + this.iCurrentShowFormComment + '" class="comment-preview text"></div>');
        ls.tools.textPreview('form_comment_text', false, 'comment_preview_' + this.iCurrentShowFormComment);
    };


    // Устанавливает число новых комментариев
    this.setCountNewComment = function (count) {
        if (count > 0) {
            $('#new_comments_counter').show().text(count);
        } else {
            $('#new_comments_counter').text(0).hide();
        }
    };


    // Вычисляет кол-во новых комментариев
    this.calcNewComments = function () {
        var aCommentsNew = $('.' + this.options.classes.comment + '.' + this.options.classes.comment_new);
        this.setCountNewComment(aCommentsNew.length);
        $.each(aCommentsNew, function (k, v) {
            this.aCommentNew.push(parseInt($(v).attr('id').replace('comment_id_', '')));
        }.bind(this));
    };


    // Переход к следующему комментарию
    this.goToNextComment = function () {
        if (this.aCommentNew[0]) {
            if ($('#comment_id_' + this.aCommentNew[0]).length) {
                this.scrollToComment(this.aCommentNew[0]);
            }
            this.aCommentNew.shift();
        }
        this.setCountNewComment(this.aCommentNew.length);
    };


    // Прокрутка к комментарию
    this.scrollToComment = function (idComment) {
        $.scrollTo('#comment_id_' + idComment, 1000, {offset: -250});

        if (this.iCurrentViewComment) {
            $('#comment_id_' + this.iCurrentViewComment).removeClass(this.options.classes.comment_current);
        }
        $('#comment_id_' + idComment).addClass(this.options.classes.comment_current);
        this.iCurrentViewComment = idCommenу комментарию
    this.goToParentComment = function (id, pid) {
        thisObj = this;
        $('.' + this.options.classes.comment_goto_child).hide().find('a').unbind();

        $("#comment_id_" + pid).find('.' + this.options.classes.comment_goto_child).show().find("a").bind("click", function () {
            $(this).parent('.' + thisObj.options.classes.comment_goto_child).hide();
            thisObj.scrollToComment(id);
            return false;
        });
        this.scrollToComment(pid);
        return false;
    };


    // Сворачивание комментариев
    this.checkFolding = function () {
        if (!this.options.folding) {
            return false;
        }
        $(".folding").each(function (index, element) {
            if ($(element).parent(".comment").next(".comment-wrapper").length == 0) {
                $(element).hide();
            } else {
                $(element).show();
            }
        });
        return false;
    };

    this.expandComment = function(folding) {
        $(folding).removeClass("folded").parent().nextAll(".comment-wrapper").show();
    };

    this.collapseComment = function(folding) {
        $(folding).addClass("folded").parent().nextAll(".comment-wrapper").hide();
    };

    this.expandCommentAll = function () {
        $.each($(".folding"), function (k, v) {
            this.expandComment(v);tAll = function() {
        $.each($(".folding"), function (k, v) {
            this.collapseComment(v);
        }.bind(this));
    };

    this.init = function() {
        this.initEvent();
        this.calcNewComments();
        this.checkFolding();
        //this.toggleCommentForm(this.iCurrentShowFormComment);

        if (typeof(this.optiowysiwyg = Boolean(BLOG_USE_TINYMCE && tinyMCE);
        }
        ls.hook.run('ls_comments_init_after', [], this);
    };

    this.initEvent = function() {
        $('#form_comment_text').bind('keyup', function (e) {
            key = e.keyCode || e.which;
            if (e.ctrlKey && (key == 13)) {
                $('#comment-button-submit').click();
                return false;
            }
        });

        if(this.options.folding){
            $(".folding").click(function (e) {
                if ($(e.target).hasClass("folded")) {
                    this.expandComment(e.target);
                } else {
                    this.collapseComment(e.target);
                }
            }.bind(this));
        }
    };

    return this;
}).call(ls.comments || {},jQuery);


/**
 * Управление пользователями
 */
ls.user = (function ($) {

	this.jcropAvatar=null;
	this.jcropFoto=null;

	/**
	 * Добавление в друзья
	 */
	this.addFriend = function(obj, idUser, sAction){
		if(sAction != 'link' && sAction != 'accept') {
			var sText = $('#add_friend_text').val();
			$('#add_friend_form').children().each(function(i, item){$(item).attr('disabled','disabled')});
		} else {
			var sText='';
		}

		if(sAction == 'accept') {
			var url = aRouter.profile+'ajaxfriendaccept/';
		} else {
			var url = aRouter.profile+'ajaxfriendadd/';
		}

		var params = {idUser: idUser, userText: sText};

		ls.hook.marker('addFriendBefore');
		ls.ajax(url, params, function(result){
			$('#add_friend_form').children().each(function(i, item){$(item).removeAttr('disabled')});
			if (!result) {
				ls.msg.error('Error','Please try again later');
			}
			if (result.bStateError) {
				ls.msg.error(null,result.sMsg);
			} else {
				ls.msg.notice(null,result.sMsg);
				$('#add_friend_form').jqmHide();
				$('#add_friend_item').remove();
				$('#profile_actions').prepend($(result.sToggleText));
				ls.hook.run('ls_user_add_friend_after', [idUser,sAction,result], obj);
			}
		});
		return false;
	};

	/**
	 * Удаление из друзей
	 */
	this.removeFriend = function(obj,idUser,sAction) {
		var url = aRouter.profile+'ajaxfrienddelete/';
		var params = {idUser: idUser,sAction: sAction};

		ls.hook.marker('removeFriendBefore');
		ls.ajax(url, params, function(result) {
			if (result.bStateError) {
				ls.msg.error(null,result.sMsg);
			} else {
				ls.msg.notice(null,result.sMsg);
				$('#delete_friend_item').remove();
				$('#profile_actions').prepend($(result.sToggleText));
				ls.hook.run('ls_user_remove_friend_after', [idUser,sAction,result], obj);
			}
		});
		return false;
	};

	/**
	 * Загрузка временной аватарки
	 * @param form
	 * @param input
	 */
	this.uploadAvatar = function(form,input) {
		if (!form && input) {
			var form = $('<form method="post" enctype="multipart/form-data"></form>').css({
				'display': 'none'
			}).appendTo('body');
			var clone=input.clone(true);
			input.hide();
			clone.insertAfter(input);
			input.appendTo(form);
		}

		ls.ajaxSubmit(aRouter['settings']+'profile/upload-avatar/',form,function(data){
			if (data.bStateError) {
				ls.msg.error(data.sMsgTitle,data.sMsg);
			} else {
				this.showResizeAvatar(data.sTmpFile);
			}
		}.bind(this));
	};

	/**
	 * Показывает форму для ресайза аватарки
	 * @param sImgFile
	 */
	this.showResizeAvatar = function(sImgFile) {
		if (this.jcropAvatar) {
			this.jcropAvatar.destroy();
		}
		$('#avatar-resize-original-img').attr('src',sImgFile+'?'+Math.random());
		$('#avatar-resize').jqmShow();
		var $this=this;
		$('#avatar-resize-original-img').Jcrop({
			aspectRatio: 1,
			minSize: [32,32]
		},function(){
			$this.jcropAvatar=this;
			this.setSelect([0,0,500,500]);
		});
	};

	/**
	 * Выполняет ресайз аватарки
	 */
	this.resizeAvatar = function() {
		if (!this.jcropAvatar) {
			return false;
		}
		var url = aRouter.settings+'profile/resize-avatar/';
		var params = {size: this.jcropAvatar.tellSelect()};

		ls.hook.marker('resizeAvatarBefore');
		ls.ajax(url, params, function(result) {
			if (result.bStateError) {
				ls.msg.error(null,result.sMsg);
			} else {
				$('#avatar-img').attr('src',result.sFile+'?'+Math.random());
				$('#avatar-resize').jqmHide();
				$('#avatar-remove').show();
				$('#avatar-upload').text(result.sTitleUpload);
				ls.hook.run('ls_user_resize_avatar_after', [params, result]);
			}
		});

		return false;
	};

	/**
	 * Удаление аватарки
	 */
	this.removeAvatar = function() {
		var url = aRouter.settings+'profile/remove-avatar/';
		var params = {};

		ls.hook.marker('removeAvatarBefore');
		ls.ajax(url, params, function(result) {
			if (result.bStateError) {
				ls.msg.error(null,result.sMsg);
			} else {
				$('#avatar-img').attr('src',result.sFile+'?'+Math.random());
				$('#avatar-remove').hide();
				$('#avatar-upload').text(result.sTitleUpload);
				ls.hook.run('ls_user_remove_avatar_after', [params, result]);
			}
		});

		return false;
	};

	/**
	 * Отмена ресайза аватарки, подчищаем временный данные
	 */
	this.cancelAvatar = function() {
		var url = aRouter.settings+'profile/cancel-avatar/';
		var params = {};

		ls.hook.marker('cancelAvatarBefore');
		ls.ajax(url, params, function(result) {
			if (result.bStateError) {
				ls.msg.error(null,result.sMsg);
			} else {
				$('#avatar-resize').jqmHide();
				ls.hook.run('ls_user_cancel_avatar_after', [params, result]);
			}
		});

		return false;
	};

	/**
	 * Загрузка временной фотки
	 * @param form
	 * @param input
	 */
	this.uploadFoto = function(form,input) {
		if (!form && input) {
			var form = $('<form method="post" enctype="multipart/form-data"></form>').css({
				'display': 'none'
			}).appendTo('body');
			var clone=input.clone(true);
			input.hide();
			clone.insertAfter(input);
			input.appendTo(form);
		}

		ls.ajaxSubmit(aRouter['settings']+'profile/upload-foto/',form,function(data){
			if (data.bStateError) {
				ls.msg.error(data.sMsgTitle,data.sMsg);
			} else {
				this.showResizeFoto(data.sTmpFile);
			}
		}.bind(this));
	};

	/**
	 * Показывает форму для ресайза фотки
	 * @param sImgFile
	 */
	this.showResizeFoto = function(sImgFile) {
		if (this.jcropFoto) {
			this.jcropFoto.destroy();
		}
		$('#foto-resize-original-img').attr('src',sImgFile+'?'+Math.random());
		$('#foto-resize').jqmShow();
		var $this=this;
		$('#foto-resize-original-img').Jcrop({
			minSize: [32,32]
		},function(){
			$this.jcropFoto=this;
			this.setSelect([0,0,500,500]);
		});
	};

	/**
	 * Выполняет ресайз фотки
	 */
	this.resizeFoto = function() {
		if (!this.jcropFoto) {
			return false;
		}
		var url = aRouter.settings+'profile/resize-foto/';
		var params = {size: this.jcropFoto.tellSelect()};

		ls.hook.marker('resizeFotoBefore');
		ls.ajax(url, params, function(result) {
			if (result.bStateError) {
				ls.msg.error(null,result.sMsg);
			} else {
				$('#foto-img').attr('src',result.sFile+'?'+Math.random());
				$('#foto-resize').jqmHide();
				$('#foto-remove').show();
				$('#foto-upload').text(result.sTitleUpload);
				ls.hook.run('ls_user_resize_foto_after', [params, result]);
			}
		});

		return false;
	};

	/**
	 * Удаление фотки
	 */
	this.removeFoto = function() {
		var url = aRouter.settings+'profile/remove-foto/';
		var params = {};

		ls.hook.marker('removeFotoBefore');
		ls.ajax(url, params, function(result) {
			if (result.bStateError) {
				ls.msg.error(null,result.sMsg);
			} else {
				$('#foto-img').attr('src',result.sFile+'?'+Math.random());
				$('#foto-remove').hide();
				$('#foto-upload').text(result.sTitleUpload);
				ls.hook.run('ls_user_remove_foto_after', [params, result]);
			}
		});

		return false;
	};

	/**
	 * Отмена ресайза фотки, подчищаем временный данные
	 */
	this.cancelFoto = function() {
		var url = aRouter.settings+'profile/cancel-foto/';
		var params = {};

		ls.hook.marker('cancelFotoBefore');
		ls.ajax(url, params, function(result) {
			if (result.bStateError) {
				ls.msg.error(null,result.sMsg);
			} else {
				$('#foto-resize').jqmHide();
				ls.hook.run('ls_user_cancel_foto_after', [params, result]);
			}
		});

		return false;
	};

	/**
	 * Валидация полей формы при регистрации
	 * @param aFields
	 */
	this.validateRegistrationFields = function(aFields,sForm) {
		var url = aRouter.registration+'ajax-validate-fields/';
		var params = {fields: aFields};
		if (typeof(sForm)=='string') {
			sForm=$('#'+sForm);
		}

		ls.hook.marker('validateRegistrationFieldsBefore');
		ls.ajax(url, params, function(result) {
			if (!sForm) {
				sForm=$('body'); // поиск полей по всей странице
			}
			$.each(aFields,function(i,aField){
				if (result.aErrors && result.aErrors[aField.field][0]) {
					sForm.find('.validate-error-field-'+aField.field).removeClass('validate-error-hide').addClass('validate-error-show').text(result.aErrors[aField.field][0]);
					sForm.find('.validate-ok-field-'+aField.field).hide();
				} else {
					sForm.find('.validate-error-field-'+aField.field).removeClass('validate-error-show').addClass('validate-error-hide');
					sForm.find('.validate-ok-field-'+aField.field).show();
				}
			});
			ls.hook.run('ls_user_validate_registration_fields_after', [aFields, sForm, result]);
		});
	};

	/**
	 * Валидация конкретного поля формы
	 * @param sField
	 * @param sValue
	 * @param aParams
	 */
	this.validateRegistrationField = function(sField,sValue,sForm,aParams) {
		var aFields=[];
		aFields.push({field: sField, value: sValue, params: aParams || {}});
		this.validateRegistrationFields(aFields,sForm);
	};

	/**
	 * Ajax регистрация пользователя с проверкой полей формы
	 * @param form
	 */
	this.registration = function(form) {
		var url = aRouter.registration+'ajax-registration/';

		this.formLoader(form);
		ls.hook.marker('registrationBefore');
		ls.ajaxSubmit(url, form, function(result) {
			this.formLoader(form,true);
			if (result.bStateError) {
				ls.msg.error(null,result.sMsg);
			} else {
				if (typeof(form)=='string') {
					form=$('#'+form);
				}
				form.find('.validate-error-show').removeClass('validate-error-show').addClass('validate-error-hide');
				if (result.aErrors) {
					$.each(result.aErrors,function(sField,aErrors){
						if (aErrors[0]) {
							form.find('.validate-error-field-'+sField).removeClass('validate-error-hide').addClass('validate-error-show').text(aErrors[0]);
						}
					});
				} else {
					if (result.sMsg) {
						ls.msg.notice(null,result.sMsg);
					}
					if (result.sUrlRedirect) {
						window.location=result.sUrlRedirect;
					}
				}
				ls.hook.run('ls_user_registration_after', [form, result]);
			}
		}.bind(this));
	};

	/**
	 * Ajax авторизация пользователя с проверкой полей формы
	 * @param form
	 */
	this.login = function(form) {
		var url = aRouter.login+'ajax-login/';

		this.formLoader(form);
		ls.hook.marker('loginBefore');
		ls.ajaxSubmit(url, form, function(result) {
			this.formLoader(form,true);
			if (typeof(form)=='string') {
				form=$('#'+form);
			}
			form.find('.validate-error-show').removeClass('validate-error-show').addClass('validate-error-hide');

			if (result.bStateError) {
				form.find('.validate-error-login').removeClass('validate-error-hide').addClass('validate-error-show').html(result.sMsg);
			} else {
				if (result.sMsg) {
					ls.msg.notice(null,result.sMsg);
				}
				if (result.sUrlRedirect) {
					window.location=result.sUrlRedirect;
				}
				ls.hook.run('ls_user_login_after', [form, result]);
			}
		}.bind(this));
	};

	this.exit = function(form) {
		/*var url = aRouter.login+'ajax-exit/?return-path=' + window.location.href;*/
        var url = aRouter.login+'ajax-exit/';
        /* ls.ajax(url, {"return-path":window.location.href}, function(result) { */
		ls.ajax(url, null, function(result) {
			if (!result.bStateError) {
				if (result.sMsg) {
					ls.msg.notice(null,result.sMsg);
				}
				if (result.sUrlRedirect) {
					window.location=result.sUrlRedirect;
				}
			}
		}.bind(this));
	};

	/**
	 * Показывает лоадер в полях формы
	 * @param form
	 * @param bHide
	 */
	this.formLoader = function(form,bHide) {
		if (typeof(form)=='string') {
			form=$('#'+form);
		}
		form.find('input[type="text"], input[type="password"]').each(function(k,v){
			if (bHide) {
				$(v).removeClass('loader');
			} else {
				$(v).addClass('loader');
			}
		});
	};

	/**
	 * Ajax запрос на смену пароля
	 * @param form
	 */
	this.reminder = function(form) {
		var url = aRouter.login+'ajax-reminder/';

		this.formLoader(form);
		ls.hook.marker('reminderBefore');
		ls.ajaxSubmit(url, form, function(result) {
			this.formLoader(form,true);
			if (typeof(form)=='string') {
				form=$('#'+form);
			}
			form.find('.validate-error-show').removeClass('validate-error-show').addClass('validate-error-hide');

			if (result.bStateError) {
				form.find('.validate-error-reminder').removeClass('validate-error-hide').addClass('validate-error-show').text(result.sMsg);
			} else {
				form.find('input').val('');
				if (result.sMsg) {
					ls.msg.notice(null,result.sMsg);
				}
				if (result.sUrlRedirect) {
					window.location=result.sUrlRedirect;
				}
				ls.hook.run('ls_user_reminder_after', [form, result]);
			}
		}.bind(this));
	};

	/**
	 * Ajax запрос на ссылку активации
	 * @param form
	 */
	this.reactivation = function(form) {
		var url = aRouter.login+'ajax-reactivation/';

		ls.hook.marker('reactivationBefore');
		ls.ajaxSubmit(url, form, function(result) {
			if (typeof(form)=='string') {
				form=$('#'+form);
			}
			form.find('.validate-error-show').removeClass('validate-error-show').addClass('validate-error-hide');

			if (result.bStateError) {
				form.find('.validate-error-reactivation').removeClass('validate-error-hide').addClass('validate-error-show').text(result.sMsg);
			} else {
				form.find('input').val('');
				if (result.sMsg) {
					ls.msg.notice(null,result.sMsg);
				}
				ls.hook.run('ls_user_reactivation_after', [form, result]);
			}
		});
	};

	/**
	 * Поиск пользователей
	 */
	this.searchUsers = function(form) {
		var url = aRouter['people']+'ajax-search/';
		var inputSearch=$('#'+form).find('input');
		inputSearch.addClass('loader');

		ls.hook.marker('searchUsersBefore');
		ls.ajaxSubmit(url, form, function(result){
			inputSearch.removeClass('loader');
			if (result.bStateError) {
				$('#users-list-search').hide();
				$('#users-list-original').show();
			} else {
				$('#users-list-original').hide();
				$('#users-list-search').html(result.sText).show();
				ls.hook.run('ls_user_search_users_after',[form, result]);
			}
		});
	};

	/**
	 * Поиск пользователей по началу логина
	 */
	this.searchUsersByPrefix = function(sPrefix,obj) {
		obj=$(obj);
		var url = aRouter['people']+'ajax-search/';
		var params = {user_login: sPrefix, isPrefix: 1};
		$('#search-user-login').addClass('loader');

		ls.hook.marker('searchUsersByPrefixBefore');
		ls.ajax(url, params, function(result){
			$('#search-user-login').removeClass('loader');
			$('#user-prefix-filter').find('.active').removeClass('active');
			obj.parent().addClass('active');
			if (result.bStateError) {
				$('#users-list-search').hide();
				$('#users-list-original').show();
			} else {
				$('#users-list-original').hide();
				$('#users-list-search').html(result.sText).show();
				ls.hook.run('ls_user_search_users_by_prefix_after',[sPrefix, obj, result]);
			}
		});
		return false;
	};

	/**
	 * Подписка
	 */
	this.followToggle = function(obj, iUserId) {
		if ($(obj).hasClass('followed')) {
			ls.stream.unsubscribe(iUserId);
			$(obj).toggleClass('followed').text(ls.lang.get('profile_user_follow'));
		} else {
			ls.stream.subscribe(iUserId);
			$(obj).toggleClass('followed').text(ls.lang.get('profile_user_unfollow'));
		}
		return false;
	};


	return this;
}).call(ls.user || {},jQuery);


/**
* Различные настройки
*/
ls.settings = (function ($) {

    this.getMarkitup = function() {
        returaceWith:'<br />\n'},
            onCtrlEnter:    {keepDefault:false, openWith:'\n<p>', closeWith:'</p>'},
            onTab:          {keepDefault:false, replaceWith:'    '},
            markupSet:  [
                {name:'H4', className:'editor-h4', openWith:'<h4>', closeWith:'</h4>' },
                {name:'H5', className:'editor-h5', openWith:'<h5>', closeWith:'</h5>' },
                {name:'H6', className:'editor-h6', openWith:'<h6>', closeWith:'</h6>' },
                {separator:'---------------' },
                {name: ls.lang.get('panel_b'), className:'editor-bold', key:'B', openWith:'(!(<strong>|!|<b>)!)', closeWith:'(!(</strong>|!|</b>)!)' },
                {name: ls.lang.get('panel_i'), className:'editor-italic', key:'I', openWith:'(!(<em>|!|<i>)!)', closeWith:'(!(</em>|!|</i>)!)'  },
                {name: ls.lang.get('panel_s'), className:'editor-stroke', key:'S', openWith:'<s>', closeWith:'</s>' },
                {name: ls.lang.get('panel_u'), className:'editor-underline', key:'U', openWith:'<u>', closeWith:'</u>' },
                {name: ls.lang.get('panel_quote'), className:'editor-quote', key:'Q', replaceWith: function(m) { if (m.selectionOuter) return '<blockquote>'+m.selectionOuter+'</blockquote>'; else if (m.selection) return '<blockquote>'+m.selection+'</blockquote>'; else return '<blockquote></blockquote>' } },
                {name: ls.lang.get('panel_code'), className:'editor-code', openWith:'<code>', closeWith:'</code>' },
                {separator:'---------------' },
                {name: ls.lang.get('panel_list'), className:'editor-ul', openWith:'    <li>', closeWith:'</li>', multiline: true, openBlockWith:'<ul>\n', closeBlockWith:'\n</ul>' },
                {name: ls.lang.get('panel_list'), className:'editor-ol', openWith:'    <li>', closeWith:'</li>', multiline: true, openBlockWith:'<ol>\n', closeBlockWith:'\n</ol>' },
                {name: ls.lang.get('panel_list_li'), className:'editor-li', openWith:'<li>', closeWith:'</li>' },
                {separator:'---------------' },
                {name: ls.lang.get('panel_image'), className:'editor-picture', key:'P', beforeInsert: function(h) { jQuery('#window_upload_img').jqmShow(); } },
                {name: ls.lang.get('panel_video'), className:'editor-video', replaceWith:'<video>[!['+ls.lang.get('panel_video_promt')+':!:http://]!]</video>' },
                {name: ls.lang.get('panel_url'), className:'editor-link', key:'L', openWith:'<a href="[!['+ls.lang.get('panel_url_promt')+':!:http://]!]"(!( title="[![Title]!]")!)>', closeWith:'</a>', placeHolder:'Your text to link...' },
         With:'<ls user="[!['+ls.lang.get('panel_user_promt')+']!]" />' },
                {separator:'---------------' },
                {name: ls.lang.get('panel_clear_tags'), className:'editor-clean', replaceWith: function(markitup) { return markitup.selection.replace(/<(.*?)>/g, "") } },
                {name: ls.lang.get('panel_cut'), className:'editor-cut', replaceWith: function(markitup) { if (markitup.selection) return '<cut name="'+markitup.selection+'">'; else return '<cut>' }}
            ]
        }
    };

    this.getMarkitupComment = function() {
        return {
            onShiftEnter:   {keepDefault:false, replaceWith:'<br />\n'},
            onTab:          {keepDefault:false, replaceWith:'    '},
            markupSet:  [
                {name: ls.lang.get('panel_b'), className:'editor-bold', key:'B', openWith:'(!(<strong>|!|<b>)!)', closeWith:'(!(</strong>|!|</b>)!)' },
                {name: ls.lang.get('panel_i'), className:'editor-italic', key:'I', openWith:'(!(<em>|!|<i>)!)', closeWith:'(!(</em>|!|</i>)!)'  },
                {name: ls.lang.get('panel_s'), className:'editor-stroke', key:'S', openWith:'<s>', closeWith:'</s>' },
                {name: ls.lang.get('panel_u'), className:'editor-underline', key:'U', openWith:'<u>', closeWith:'</u>' },
                {separator:'---------------' },
                {name: ls.lang.get('panel_quote'), className:'editor-quote', key:'Q', replaceWith: function(m) { if (m.selectionOuter) return '<blockquote>'+m.selectionOuter+'</blockquote>'; else if (m.selection) return '<blockquote>'+m.selection+'</blockquote>'; else return '<blockquote></blockquote>' } },
                {name: ls.lang.get('panel_code'), className:'editor-code', openWith:'<code>', closeWith:'</code>' },
                {name: ls.lang.get('panel_url'), className:'editor-link', key:'L', openWith:'<a href="[!['+ls.lang.get('panel_url_promt')+':!:http://]!]"(!( title="[![Title]!]")!)>', closeWith:'</a>', placeHolder:'Your text to link...' },
                {separator:'---------------' },
                {name: ls.lang.get('panel_clear_tags'), className:'editor-clean', replaceWith: function(markitup) { return markitup.selection.replace(/<(.*?)>/g, "") } }
            ]
        }
    };

    this.getTinymce = function() {
        return {
            mode :                                  "specific_textareas",
            editor_selector :                       "mce-editor",
            theme :                                 "advanced",
            autoresize_max_height :                 $(window).height() * 0.7,
            content_css :                           DIR_STATIC_SKIN + "/css/reset.css" + "," + DIR_STATIC_SKIN + "/css/tinymce.css?" + new Date().getTime(),
            theme_advanced_toolbar_location :       "top",
            theme_advanced_toolbar_align :          "left",
            theme_advanced_buttons1 :               "lshselect,formatselect,bold,italic,underline,strikethrough,justifycenter,bullist,numlist,lsspoiler,lsconfidencetag,link,unlink,lsmarket,lsvideo,lsimage,pagebreak,pastetext,pasteword,fullscreen,code",
            theme_advanced_blockformats :           "blockquote,code",
            theme_advanced_buttons2 :               "table,col_after, row_after, delete_col, delete_row, split_cells, merge_cells",
            theme_advanced_buttons3 :               "",
            theme_advanced_statusbar_location :     "bottom",
            theme_advanced_resizing :               true,
            theme_advanced_resizing_max_height:     1000,
            theme_advanced_resize_horizontal :      0,
            theme_advanced_resizing_use_cookie :    1,
            theme_advanced_path :                   false,
            object_resizing :                       false,
            force_br_newlines :                     false,
            forced_root_block :                     '', // Needed for 3.x
            force_p_newlines :                      true,
            plugins :                               "lseditor, safari,inlinepopups,media,pagebreak,autoresize,table,paste,fullscreen",
            theme_advanced_styles:                  'Button=buttonlink',
            convert_urls :                          false,
            gecko_spellcheck:                       true,
            browser_spellcheck:                     true,
            extended_valid_elements :               "embed[src|type|allowscriptaccess|allowfullscreen|width|height],code,spoiler,div[class|style]",
            pagebreak_separator :                   "<cut>",
            media_strict :                          false,
            language :                              TINYMCE_LANG,
            inline_styles:                          false,
            formats : {
                underline :     {inline : 'u', exact : true},
                strikethrough : {inline : 's', exact : true},
                precode :       {inline : 'code', exact : true}
            }
        }
    };

    this.getTinymceComment = function() {
        return {
            mode :                                  "textareas",
            theme :                                 "advanced",
            content_css :                           DIR_STATIC_SKIN + "/css/reset.css" + "," + DIR_STATIC_SKIN + "/css/tinymce.css?" + new Date().getTime(),
            theme_advanced_toolbar_location :       "top",
            theme_advanced_toolbar_align :          "left",
            theme_advanced_buttons1 :               "bold,italic,underline,strikethrough,lslink,lsquote",
            theme_advanced_buttons2 :               "",
            theme_advanced_buttons3 :               "",
            theme_advanced_statusbar_location :     "bottom",
            theme_advanced_resizing :               true,
            theme_advanced_resize_horizontal :      0,
            theme_advanced_resizing_use_cookie :    0,
            theme_advanced_path :                   false,
            object_resizing :                     '', // Needed for 3.x
            force_p_newlines :                      false,
            plugins :                               "lseditor,safari,inlinepopups,media,pagebreak,autoresize,paste",
            convert_urls :                          false,
            gecko_spellcheck:                       true,
            browser_spellcheck:                     true,
            extended_valid_elements :               "embed[src|type|allowscriptaccess|allowfullscreen|width|height]",
            pagebreak_separator :                   "<cut>",
            media_strict :                          false,
            language :                              TINYMCE_LANG,
            inline_styles:                          false,
            paste_remove_styles:                    true,
            paste_remove_spans:                     true,
            paste_strip_class_attributes:           'all',
            paste_block_drop:                       true,
            paste_preprocess : function(pl, o) {
                //o.content = o.content.replace(/<\/?[^>]+>/gi, '');
                o.content = ls.settings.stripTags(o.content, '<br><p><div>');
            },
            formats : {
                underline :     {inline : 'u', exact : true},
                strikethrough : {inline : 's', exact : true}
            },
            setup : function(ed) {
                // Display an alert onclick
                ed.onKeyPress.add(function(ed, e) {
                    key = e.keyCode || e.which;
                    if(e.ctrlKey && (key == 13)) {
                        $('#comment-button-submit').click();
                        return false;
                    }
                });
            }
        }
    };

    this.stripTags = function (input, allowed)
    {
        allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('')

        var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi
        var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi

        return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1)
        {
            return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : ''
        })
    };

    return this;
}).call(ls.settings || {},jQuery);


/**
 * Опросы
 */
ls.topic = (function ($) {

	this.preview = function(form, preview) {
		form=$('#'+form);
		preview=$('#'+preview);
		var url = aRouter['ajax']+'preview/topic/';
		ls.hook.marker('previewBefore');
		ls.ajaxSubmit(url, form, function(result) {
			if (result.bStateError) {
				ls.msg.error(null, result.sMsg);
			} else {
				preview.show().html(result.sText);
				ls.hook.run('ls_topic_preview_after',[form, preview, result]);
			}
		});
	};

	this.insertImageToEditor = function(sUrl,sAlign,sTitle) {
		sAlign=sAlign=='center' ? 'class="image-center"' : 'align="'+sAlign+'"';
		$.markItUp({replaceWith: '<img src="'+sUrl+'" title="'+sTitle+'" '+sAlign+' />'} );
		$('#window_upload_img').find('input[type="text"]').val('');
		$('#window_upload_img').jqmHide();
		return false;
	};

	return this;
}).call(ls.topic || {}, jQuery);

/**
 * JavaScript-hooks
 *
 * Examples:
 *
 * - inject function call/code at top of function body
 * ls.hook.inject([ls.lang,'get'], function(){ls.msg.notice('lang debug');})});
 * ls.hook.inject([ls,'ajax'], 'alert(url)');
 *
 * - add and call hooks
 * ls.hook.add('somefunc_hook1_name', function(param1, param2){ ... });
 *
 * function someFunc(..params..){
 * 	//code
 * 	ink http://livestreet.ru/profile/1d10t
 */
ls.hook = (function ($) {
	this.hooks = {};

	this.cloneFunc = function(func,as_text,no_def) {
		var f;
		if($.type(func)=='string'){
			eval('f = '+func+';');
		}else if($.type(func)=='array'){
			f = func[0][func[1]];
		}else{
			f = func;
		}
		if($.type(f)=='function'){
			var fbody = f.toString().replace(/^(function)([^\(]*)\(/gi, '$1 (');
			if(typeof as_text!='undefined' && as_text){
				if(typeof no_def!='undefined' && no_def){
					return fbody.replace(/^[^\{]*\{/gi, '').replace(/\}$/gi, '');
				}else{
					return fbody;
				}
			}
			return eval('('+fbody+')');
		}
		return function(){};
	};

	/**
	 * @param func functionName|object[parentObject,functionName] Name of function that will be modified
	 * @param funcInj function|string Function or code to be injected
	 * @param marker string
	 */
	this.inject = function(func,funcInj,marker) {
		var funcBody = ls.hook.cloneFunc(func, 1);
		var funcDefinition = ($.type(func)=='string'?func:($.type(func)=='array'?'func[0][func[1]]':'func'))+' = ';
		var replaceFrom = /\{/m;
		var replaceTo = '{ ';
		if($.type(marker) == 'string'){
			//replaceFrom = new RegExp('(\'\\*'+marker+'\\*\'[\r\n\t ]*;?)', 'm');
			replaceFrom = new RegExp('(ls\\.hook\\.marker\\(([\'"])'+marker+'(\\2)\\)[\\r\\n\nj'+Math.floor(Math.random()*1000000);
			eval('window["'+funcInjName+'"] = funcInj;');
			eval(funcDefinition + funcBody.replace(replaceFrom,replaceTo+funcInjName+'.apply(this, arguments); '));
		}else{
			eval(funcDefinition  + funcBody.replace(replaceFrom,replaceTo+funcInj+'; '));
		}
	};

	this.add = function(name,callback,priority) {
		var priority = priority || 0;
		if(typeof ls.hook.hooks[name] == 'undefined'){
			ls.hook.hooks[name] = [];
		}
		ls.hook.hooks[name].push({
			'callback': callback,
			'priority': priority
		})		var hooks = ls.hook.hooks;
		if(typeof hooks[name] != 'undefined'){
			hooks[name].sort(function(a,b){
				return a.priority > b.priority ?
					1
					: (a.priority < b.priority ? -1 : 0)
					;
			});
			$.each(hooks[name], function(i){
				var callback = hooks[name][i].callback;
				if($.type(callback) == 'function'){
					callback.apply(o, params);
				}else if($.type(callback) == 'array'){
					//console.log(callback);
					callback[0][callback[1]].apply(o, params);
				}else if($.type(callback) == 'string'){
					eval('(function(){'+callback+'}).apply(o, params);');
				}else{
					ls.debug('cant call hook "'+name+'"['+i+']');
				}
			});
		}
	};

	this.marker = function(name){
		// noop
	};

	return this;
}).call(ls.hook || {},jQuery);;ls.comments.options.type.custom = {
    url_add:        aRouter.ajax + 'custom/comments/ajax-add/',
    url_response:   aRouter.ajax + 'custom/comments/ajax-response/'
};

ls.comments.more = function (id)
{
    var page_id = $('#comment_page').val();
    if (!page_id)
    {
        return;
    }
    var params = {
        target_id: id,
        page_id: page_id
    };
    ls.ajax(aRouter.ajax + 'custom/comments/ajax-more/', params, function(result)
    {
        if (!result)
        {
            ls.msg.error('Error', 'Please try again later');
            return;
        }
        if (result.bStateError)
        {
            ls.msg.error(null, result.sMsg);
        } else {
            var aCmt = result.comments;
            $.each(aCmt, function (index, item) {
                this.inject(item.idParent, item.id, item.html);
            }.bind(this));
            var page_next = ++page_id;
            $('#comment_page').val(page_next);
            if (page_next > result.count)
            {
                $('#custom_get_more').remove();
            }
        }
    }.bind(this));
    return false;
};


ls.comments = ls.comments ||
{};

/**
 * Обработка комментариев
 */
/**
 * Обработка комментариев
 */
ls.comments = (function ($) {
    var that = ls.comments;

    this.superior = function (name) {
        var that = this;
        method = that[name];
        return function () {
            return method.apply(that, arguments);
        }
    }

	this.removeEditCommentButtons = function() {
		var b = $('#comment-button-submit-edit');
		console.log(b);
        if (b.length)
            b.remove();

        b = $('#comment-button-history');
        if (b.length)
            b.remove();

        b = $('#comment-button-cancel');
        if (b.length)
            b.remove();
	}

    this.mytoggleCommentForm = function (idComment, bNoFocus) {
        if (typeof (this.sBStyle) != 'undefined')
            $('#comment-button-submit').css('display', this.sBStyle);
        if (typeof (this.cbsclick) != 'u
        this.removeEditCommentButtons();
        this.super_toggleCommentForm(idComment, bNoFocus);
    }

    this.cancelEditComment = function (idComment) {
        var reply = $('#reply');
        if (!reply.length) {
            return;
        }

        if (typeof (this.sBStyle) != 'undefined')
            $('#comment-button-submit').css('display', this.sBStyle);
        if (typeof (this.cbsclick) != 'undefined') {
            $('#comment-button-submit').unbind('click');
            $('#comment-button-submit').attr('onclick', this.cbsclick);
        }

        this.removeEditCommentButtons();
        this.toggleCommentForm(0, true);
        this.setFormText('');
    }

    this.editComment = function (idComment) {
        var reply = $('#reply');
        if (!reply.length) {
            return;
        }

        if (!(this.iCurrentShowFormComment == idComment && reply.is(':visible'))) {
            var thisObj = this;
            $('#comment_content_id_' + idComment).addClass(thisObj.options.classes.form_loader);
            ls.ajax(aRouter.ajax + 'editcomment-getsource/',
                {
                    'idComment':idComment
                }, function (result) {
                    $('#comment_content_id_' + idComment).removeClass(thisObj.options.classes.form_loader);
                    if (!result) {
                        ls.msg.error('Error', 'Please try again later');
                        return;
                    }
                    if (result.bStateError) {
                        ls.msg.error(null, result.sMsg);
                    }
                    else {
                        thisObj.toggleCommentForm(idComment);
                        thisObj.sBStyle = $('#comment-button-submit').css('display');
                        var cbs = $('#comment-button-submit');
                        cbs.css('display', 'none');
                        thisObj.cbsclick = $('#comment-button-submit').attr('onclick');

                        $('#comment-button-submit').attr('onclick', "");
                        $('#comment-button-submit').bind('click', function () {
                            $('#comment-button-submit-edit').click();
                            return false;
                        });
                        if (result.bHasHistory)
                            cbs.after($(thisObj.options.history_button_code));

                        cbs.after($(thisObj.options.cancel_button_code));

                        cbs.after($(thisObj.options.edit_button_code));
                        ls.comments.setFormText(result.sCommentSource);

                        thisObj.enableFormComment();
                    }
                });
        }
        else {
			// reply.hide();
			this.cancelEditComment();
            return;
        }
    }

    this.setFormText=function (sText) {
        if (this.options.wysiwyg) {
            tinyMCE.execCommand('mceRemoveControl', false, 'form_comment_text');
            $('#form_comment_text').val(sText);
            tinyMCE.execCommand('mceAddControl', true, 'form_comment_text');
        }
        else if (typeof($('#form_comment_text').getObject) == 'function') {
            $('#form_comment_text').destroyEditor();
            $('#form_comment_text').val(sText);
            $('#form_comment_text').redactor();
        }
        else
            $('#form_comment_text').val(ls.comments.cleanCommentsText(sText));
    }

    this.edit = function (formObj, targetId, targetType) {
        $('#form_comment_text').val(ls.comments.preStoreCommentText($('#form_comment_text').val()));
        if (this.options.wysiwyg) {
            $('#' + formObj + ' textarea').val(tinyMCE.activeEditor.getContent());
        }
        if (typeof($('#form_comment_text').getObject) == 'function') {
            $('#' + formObj + ' textarea').val($('#form_comment_text').getCode());
        }

        formObj = $('#' + formObj);


        $('#form_comment_text').addClass(this.options.classes.form_loader).attr('readonly', true);
        $('#comment-button-submit').attr('disabled', 'disabled');

        var lData = formObj.serializeJSON();
        var idComment = lData.reply;

        ls.ajax(aRouter.ajax + 'editcomment-edit/', lData, function (result) {
            $('#comment-button-submit').removeAttr('disabled');
            if (!result) {
                this.enableFormComment();
                ls.msg.error('Error', 'Please try again later');
                return;
            }
            if (result.bStateError) {
                this.enableFormComment();
                ls.msg.error(null, result.sMsg);
            }
            else {
                if (result.sMsg)
                    ls.msg.notice(null, result.sMsg);

                ls.comments.enableFormComment();
                ls.comments.setFormText('');

                // Load new comments
                if (result.bEdited) {
                    $('#comment_content_id_' + idComment).html(result.sCommentText);
                }
                if (!result.bCanEditMore)
                    $('#comment_id_' + idComment).find('.editcomment_editlink').remove();
                this.load(targetId, targetType, idComment, true);
                if (ls.blocks) {
                    var curItemBlock = ls.blocks.getCurrentItem('stream');
                    if (curItemBlock.data('type') == 'comment') {
                        ls.blocks.load(curItemBlock, 'stream');
                    }
                }

                ls.hook.run('ls_comments_edit_after', [ formObj, targetId, targetType, result ]);
            }
		}.bind(this));

		this.cancelEditComment();
    }

    this.showHistory = function () {
        formObj = $('#form_comment');

        $('#form_comment_text').addClass(this.options.classes.form_loader).attr('readonly', true);
        $('#comment-button-submit-edit').attr('disabled', 'disabled');

        var lData = formObj.serializeJSON();
        lData.form_comment_text = '';
        var idComment = lData.reply;

        ls.ajax(aRouter.ajax + 'editcomment-gethistory/', lData, function (result) {
            $('#comment-button-submit-edit').removeAttr('disabled');
            if (!result) {
                this.enableFormComment();
                ls.msg.error('Error', 'Please try again later');
                return;
            }
            if (result.bStateError) {
                this.enableFormComment();
                ls.msg.error(null, result.sMsg);
            }
            else {
                if (result.sMsg)
                    ls.msg.notice(null, result.sMsg);

                this.enableFormComment();
                $('#editcomment-history-content').html(result.sContent);
                $('#modal-editcomment-history').jqmShow();
            }
        }.bind(this));
    }

    this.init_editcomment = function () {
        this.super_toggleCommentForm = that.superior("toggleCommentForm");
        ls.comments.toggleCommentForm = this.mytoggleCommentForm;
    }

    return this;
}).call(ls.comments ||
    {}, jQuery);



ls.ixbtban = (function($)
{

    this.user_id = null;

    this.deleteComments = function()
    {
        if (confirm(ls.lang.get('plugin.ixbtban.ixbtban_profile_sidebar_delete_comments_confirm')))
        {
            ls.ajax(aRouter.ajax + 'ixbt/moderation/comments/', {user_id: this.user_id}, function(result)
            {
                if (result.bStateError)
                {
                    ls.msg.error(null, result.sMsg);
                } else {
                    ls.msg.notice(null, result.sMsg);
                }
            });
        }
        return false;
    };

    this.banUser = function(form)
    {
        if (confirm(ls.lang.get('plugin.ixbtban.ixbtban_profile_sidebar_set_ban_confirm')))
        {
            ls.ajaxSubmit(aRouter.ajax + 'ixbt/moderation/ban/', form, function(result)
            {
                if (result.bStateError)
                {
                    ls.msg.error(null, result.sMsg);
    e + ']').prop('checked', false);
                } else {
                    $('input[name^=' + result.type + ']').prop('checked', true);
                    $('#moderate_user_id').val('');
                    $('#modal_moderate').addClass("modal");
                    ls.msg.notice(null, result.sMsg);
                }
            });
        }
        return false;
    };

    this.unbanUser = function(type)
    {
        ls.ajax(aRouter.ajax + 'ixbt/moderation/unban/', {user_id: this.user_id, reason_type: type}, function(result)
        {
            if (result.bStateError)
            {
                ls.msg.error(null, result.sMsg);
                $('input[name^=' + type + ']').prop('checked', true);
            } else {
                ls.msg.notice(null, result.sMsg);
                $('input[name^=' + result.type + ']').prop('checked', false);

            }
        });
        return false;
    };

    this.setModerator = function()
    {
        ls.ajax(aRouter.ajax + 'ixbt/moderation/moderator/', {user_id: this.user_id}, function(result)
        {
            if (result.bStateError)
            {
                ls.msg.error(null, result.sMsg);
            } else {
                ls.msg.notice(null, result.sMsg);
            }
        });
        return false;
    };

    this.openReport = function(id, event)
    {
        $('#report_comment_id').val(id);
        var parent_ul = $(event).closest("ul");
        parent_ul.append($('#modal_report'));
        $('#modal_report').removeClass("modal");
        $("#modal_report .jqmClose").on("click", function ()
        {
            $(this).closest("#modal_report").addClass("modal");
        });
        //tinymce.EditorManager.execCommand('mceRemoveControl',false, "report_text");
        //tinymce.EditorManager.execCommand('mceAddControl',false, "report_text");
        return false;
    };

    this.openBan = function(id, event)
    {
        $('#moderate_user_id').val(id);
        var parent_ul = $(event).closest("ul");
        parent_ul.append($('#modal_moderate'));
        $('#modal_moderate').removeClass("modal");
        $("#modal_moderate .jqmClose").on("click",function ()
        {
            $(this).closest("#modal_moderate").addClass("modal");
        });
        $('.date-picker').datepicker({
            dateFormat: 'dd.mm.yy',
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',�', 'Ноябрь', 'Декабрь'],
            firstDay: 1
        });
        //tinymce.EditorManager.execCommand('mceRemoveControl',false, "report_text");
        //tinymce.EditorManager.execCommand('mceAddControl',false, "report_text");
        return false;
    };

    this.sendReport = function(form)
    {
        ls.ajaxSubmit(aRouter.ajax + 'ixbt/moderation/report/', form, function(result)
        {
            if (result.bStateError)
            {
                ls.msg.error(null, result.sMsg);
            } else {
                $('#modal_report').addClass("modal");
                $('#report_text').val('');
                ls.msg.notice(null, result.sMsg);
            }
        });
        return false;
    };


    return this;

}).call(ls.ixbtban || {}, jQuery);



ls.ixbtblacklist = (function($)
{

    this.formLoader = function (form, bHide)
    {
        if (typeof(form) == 'string')
        {
            form = $('#' + form);
        }
        form.find('input[type="text"]').each(function(k, v)
        {
            if (bHide)
            {
                $(v).removeClass('loader');
            } else {
                $(v).addClass('loader');
            }
        });
    };

    this.add = function()
    {
        var form = $('#blacklist_create_lock');
        ls.ixbtblacklist.formLoader(form);
        ls.ajaxSubmit(aRouter['ajax'] + 'blacklist/ajax-lock/', form, function(data)
        {
            ls.ixbtblacklist.formLoader(form, true);
            if (data.bStateError)
            {
                ls.msg.error(data.sMsgTitle, data.sMsg);
            } else {
                $('#ixbtblacklist_list').append(data.text);
                $('#lock_user_' + data.id).slideDown('fast');
                $('input[id^="blacklist_"]').val('');
                ls.msg.notice(data.sMsgTitle, data.sMsg);
            }
        });
    };

    this.remove = function(id)
    {
        if (!confirm(ls.lang.get('plugin.ixbtblacklist.ixbtblacklist_blacklist_remove_confirm')))
        {
            return;
        }
        ls.ajax(aRouter['ajax'] + 'blacklist/ajax-unlock/', {'id': id}, function(data)
        {
            if (!data.bStateError)
            {
                $('#lock_user_' + id).slideUp('fast', function()
                {
                    $(this).remove();
                });
                ls.msg.notice(data.sMsgTitle, data.sMsg);
            } else {
                ls.msg.error(data.sMsgTitle, data.sMsg);
            }
        });
    };

    this.comment = function(id)
    {
        ls.ajax(aRouter['ajax'] + 'blacklist/ajax-comment/', {'id': id}, function(data)
        {
            if (!data.bStateError)
            {
                $('#comment_content_id_' + id + ' > div.text').html(data.text);
            } else {
                ls.msg.error(data.sMsgTitle, data.sMsg);
            }
        });
    };

    return this;
}).call(ls.ixbtblacklist || {}, jQuery);


ls.ixbtquote = (function($)
{

    this.div   = '#quote';
    this.reply = '#reply';

    this.getNode = function ()
    {
        var text = '';
        if (window.getSelection)
        {
            text = window.getSelection();
        } else if (document.getSelection)
        {
            text = document.getSelection();
        } else if (document.selection)
        {
            text = document.selection.createRange().text;
        }
        return text;
    };

    this.clear = function ()
    {
        if (window.getSelection)
        {
            if (window.getSelection().empty)
            {
                window.getSelection().empty();
            } else if (window.getSelection().removeAllRanges)
            {
                window.getSelection().removeAllRanges();
            } else if (document.selection)
            {
                document.selection.empty();
            }
        }
        $(ls.ixbtquote.div).hide();
        return false;
    }

    this.quote = function ()
    {
        if (!$(ls.ixbtquote.reply).length)
        {
            return false;
        }
        var noda = ls.ixbtquote.getNode();
        var text = $.trim(noda);
        if (!text.length)
        {
            return false;
        }
        var c = noda.anchorNode.parentNode.closest('.comment-content');
        var id = $(c).attr('id');
        var link = '\n<blockquote';
        if (id)
        {
            id = id.slice(id.lastIndexOf('_') + 1);
            link = link + ' comment="' + id + '"';

        }
        if (!$(ls.ixbtquote.reply).is(':visible'))
        {
            ls.comments.toggleCommentForm(0, true);
        }
        if (ls.comments.options.wysiwyg)
        {
            tinyMCE.activeEditor.dom.add(tinyMCE.activeEditor.getBody(), 'blockquote', {}, text);
            tinyMCE.activeEditor.dom.add(tinyMCE.activeEditor.getBody(), 'br', {}, '');
        } else {
            var comment_text = $('#form_comment_text');
            if (comment_text.length) {
                comment_text.val(ls.comments.cleanCommentsText(comment_text.val()) + link + '>' + text + '</blockquote>\n');
            }
        }
        $('textarea').height($('textarea').scrollHeight);
        return ls.ixbtquote.clear();
    }

    this.comment = function (id)
    {
        var text = $('#comment_content_id_' + id).text().trim();
        if (!text.length)
        {
            return false;
        }
        var link = '\n<blockquote comment="' + id + '">' + text + '</blockquote>\n';

        if (!$(ls.ixbtquote.reply).is(':visible'))
        {
            ls.comments.toggleCommentForm(0, true);
        }
        if (ls.comments.options.wysiwyg)
        {
            tinyMCE.activeEditor.dom.add(tinyMCE.activeEditor.getBody(), 'blockquote', {}, text);
            tinyMCE.activeEditor.dom.add(tinyMCE.activeEditor.getBody(), 'br', {}, '');
        } else {
            var comment_text = $('#form_comment_text');
            if (comment_text.length) {
                comment_text.val(ls.comments.cleanCommentsText(comment_text.val()) + link);
            }
        }

        ls.comments.toggleCommentForm(id);
        return false;
    }

    return this;

}).call(ls.ixbtquote || {},jQuery);


ls.comments.toggleCommentForm = function (idComment, bNoFocus)
{
    var reply = $('#reply');
    if(!reply.length)
    {
        return;
    }
    $('#comment_preview_' + ls.comments.iCurrentShowFormComment).remove();
    if (ls.comments.iCurrentShowFormComment == idComment && reply.is(':visible'))
    {
        //reply.hide();
        return;
    }
    if (ls.comments.options.wysiwyg)
    {
        tinyMCE.execCommand('mceRemoveControl', true, 'form_comment_text');
    }
    reply.insertAfter('#comment_id_'+idComment).show();
    $('#form_comment_reply').val(idComment);
    ls.comments.iCurrentShowFormComment = idComment;
    if (ls.comments.options.wysiwyg)
    {
        tinyMCE.execCommand('mceAddControl', true, 'form_comment_text');
    }
    if (!bNoFocus)
    {
        $('#form_comment_text').focus();

    }
    if ($('html').hasClass('ie7'))
    {
        var in.ie.bordersizing(inputs);
    }
};


ls.i
    this.deleteComments = function()
    {
        ls.ajax(aRouter.ajax + 'ixbt/moderation/comments/', {user_id: this.user_id}, function (result)
        {
            if (result.bStateError)
            {
                ls.msg.error(null, result.sMsg);
            } else {
                ls.msg.notice(null, result.sMsg);
            }
        });
        return false;
    };

    this.moderate = function(obj)
    {
        ls.ajax(aRouter.ajax + 'ixbt/moderation/change/', {
            user_id: this.user_id,
            role: $(obj).attr('name')
        }, function (result)
        {
            if (result.bStateError)
            {
                ls.msg.error(null, result.sMsg);
            } else {
                ls.msg.notice(null, result.sMsg);
            }
        });
        return false;
    };

    return this;

}).call(ls.ixbtmoderate || {}, jQuery);

init_iframe = function ()
{


    var area = $('#comments_area');
    if (area.length)
    {
        var page_id    = area.data('page');
        var return_url = area.data('url');
        if (!page_id || !return_url)
        {
            throw Error('Error!!!');
        }

        var url = MAIN_PATH + 'custom/jsload/' + page_id + '/?return_url=' + encodeURI(return_url);

        area.load(url,function(){
            
			if (document.location.href.indexOf("#comment") >= 0) {
				var rel = document.location.href.split("#").slice(-1)[0];
				// ls.comments.init_editcomment();
				$('html, body').animate({
					'scrollTop': $("#" + rel).offset().top
				}, 500);
			};

			$('input[name^=disallow_]').change(function () {
				var reason = $(this).attr('name')
				if ($(this).prop('checked')) {
					var label = 'plugin.ixbtban.ixbtban_profile_sidebar_ban_reason_' + reason;
					$('#moderate_reason_label').text(ls.lang.get(label));
					$('#moderate_reason').val(reason);
					ls.ixbtban.openBan(ls.ixbtban.user_id);
					$(this).prop('checked', false);
				} else {
					if (confirm(ls.lang.get('plugin.ixbtban.ixbtban_profile_sidebar_delete_ban_confirm'))) {
						ls.ixbtban.unbanUser(reason);
					} else {
						$(this).prop('checked', true);
					}
				}


			});

			$('input[name^=moderator_]').change(function () {
				ls.ixbtban.setModerator();
			});

			$('input[name^=disallow_]').change(function () {
				ls.ixbtmoderate.moderate(this);
			});
			var hash = document.location.hash;
			if(hash == 'comments')
			{
				$('html, body').animate(
					{
						scrollTop: $('#comments_area').offset().top
					}, 500);
			};
			area.on('click', 'a[href^="#"]', function (e) {
				if (hash.length) {
					$('html, body').animate(
						{
							scrollTop: $('a[name="' + hash + '"]').offset().top
						}, 500);
				}
			}).bind();


        });
    }
};