/**
 * @file common.js
 * @author NAVER (developers@xpressengine.com)
 * @brief 몇가지 유용한 & 기본적으로 자주 사용되는 자바스크립트 함수들 모음
 **/

/* jQuery 참조변수($) 제거 */
// if(jQuery) jQuery.noConflict();

if(typeof window.XE == "undefined") {
	/*jshint -W082 */
	(function($, global) {
		/* OS check */
		var UA = navigator.userAgent.toLowerCase();
		$.os = {
			Linux: /linux/.test(UA),
			Unix: /x11/.test(UA),
			Mac: /mac/.test(UA),
			Windows: /win/.test(UA)
		};
		$.os.name = ($.os.Windows) ? 'Windows' :
			($.os.Linux) ? 'Linux' :
			($.os.Unix) ? 'Unix' :
			($.os.Mac) ? 'Mac' : '';

		var base_url;

		/**
		 * @brief XE 공용 유틸리티 함수
		 * @namespace XE
		 */
		global.XE = {
			loaded_popup_menus : [],
			addedDocument : [],
			URI: global.URI,
			URITemplate : global.URITemplate,
			IPv6: global.IPv6,
			SecondLevelDomains: global.SecondLevelDomains,
			/**
			 * @brief 특정 name을 가진 체크박스들의 checked 속성 변경
			 * @param [itemName='cart',][options={}]
			 */
			checkboxToggleAll : function(itemName) {
				if(!is_def(itemName)) itemName='cart';
				var obj;
				var options = {
					wrap : null,
					checked : 'toggle',
					doClick : false
				};

				switch(arguments.length) {
					case 1:
						if(typeof(arguments[0]) == "string") {
							itemName = arguments[0];
						} else {
							$.extend(options, arguments[0] || {});
							itemName = 'cart';
						}
						break;
					case 2:
						itemName = arguments[0];
						$.extend(options, arguments[1] || {});
				}

				if(options.doClick === true) options.checked = null;
				if(typeof(options.wrap) == "string") options.wrap ='#'+options.wrap;

				if(options.wrap) {
					obj = $(options.wrap).find('input[name="'+itemName+'"]:checkbox');
				} else {
					obj = $('input[name="'+itemName+'"]:checkbox');
				}

				if(options.checked == 'toggle') {
					obj.each(function() {
						$(this).attr('checked', ($(this).attr('checked')) ? false : true);
					});
				} else {
					if(options.doClick === true) {
						obj.click();
					} else {
						obj.attr('checked', options.checked);
					}
				}
			},

			/**
			 * @brief 문서/회원 등 팝업 메뉴 출력
			 */
			displayPopupMenu : function(ret_obj, response_tags, params) {
				var target_srl = params.target_srl;
				var menu_id = params.menu_id;
				var menus = ret_obj.menus;
				var html = "";

				if(this.loaded_popup_menus[menu_id]) {
					html = this.loaded_popup_menus[menu_id];

				} else {
					if(menus) {
						var item = menus.item;
						if(typeof(item.length)=='undefined' || item.length<1) item = new Array(item);
						if(item.length) {
							for(var i=0;i<item.length;i++) {
								var url = item[i].url;
								var str = item[i].str;
								var icon = item[i].icon;
								var target = item[i].target;

								var styleText = "";
								var click_str = "";
								/* if(icon) styleText = " style=\"background-image:url('"+icon+"')\" "; */
								switch(target) {
									case "popup" :
											click_str = 'onclick="popopen(this.href, \''+target+'\'); return false;"';
										break;
									case "javascript" :
											click_str = 'onclick="'+url+'; return false; "';
											url='#';
										break;
									default :
											click_str = 'target="_blank"';
										break;
								}

								html += '<li '+styleText+'><a href="'+url+'" '+click_str+'>'+str+'</a></li> ';
							}
						}
					}
					this.loaded_popup_menus[menu_id] =  html;
				}

				/* 레이어 출력 */
				if(html) {
					var area = $('#popup_menu_area').html('<ul>'+html+'</ul>');
					var areaOffset = {top:params.page_y, left:params.page_x};

					if(area.outerHeight()+areaOffset.top > $(window).height()+$(window).scrollTop())
						areaOffset.top = $(window).height() - area.outerHeight() + $(window).scrollTop();
					if(area.outerWidth()+areaOffset.left > $(window).width()+$(window).scrollLeft())
						areaOffset.left = $(window).width() - area.outerWidth() + $(window).scrollLeft();

					area.css({ top:areaOffset.top, left:areaOffset.left }).show().focus();
				}
			},

			isSameHost: function(url) {
				if(typeof url != "string") return false;

				var target_url;
				try {
					target_url = global.XE.URI(url).normalizePathname();
				} catch (e) {
					return false;
				}
				if(target_url.is('urn')) return false;

				var port = [Number(global.http_port) || 80, Number(global.https_port) || 443];

				if(!target_url.hostname()) {
					target_url = target_url.absoluteTo(global.request_uri);
				}

				var target_port = target_url.port();
				if(!target_port) {
					target_port = (target_url.protocol() == 'http') ? 80 : 443;
				}

				if(jQuery.inArray(Number(target_port), port) === -1) {
					return false;
				}

				if(!base_url) {
					base_url = global.XE.URI(global.request_uri).normalizePathname();
					base_url = base_url.hostname() + base_url.directory();
				}
				target_url = target_url.hostname() + target_url.directory();

				return target_url.indexOf(base_url) === 0;
			}
		};
	}) (jQuery, window || global);

	/* jQuery(document).ready() */
	(function($, global){
		$(function() {
		$('a[target]').each(function() {
			var $this = $(this);
			var href = String($this.attr('href')).trim();
			var target = String($this.attr('target')).trim();

			if(!target || !href) return;
			if(!href.match(/^(https?:\/\/)/)) return;

			if(target === '_top' || target === '_self' || target === '_parent') {
				$this.data('noopener', false);
				return;
			}

			if(!global.XE.isSameHost(href)) {
				var rel = $this.attr('rel');

				$this.data('noopener', true);

				if(typeof rel == 'string') {
					$this.attr('rel', rel + ' noopener');
				} else {
					$this.attr('rel', 'noopener');
				}
			}
		});

		$('body').on('click', 'a[target]', function(e) {
			var $this = $(this);
			var href = String($this.attr('href')).trim();

			if(!href) return;
			if(!href.match(/^(https?:\/\/)/)) return;

			if($this.data('noopener') !== false && !window.XE.isSameHost(href)) {
				var rel = $this.attr('rel');

				if(typeof rel == 'string') {
					$this.attr('rel', rel + ' noopener');
				} else {
					$this.attr('rel', 'noopener');
				}

					blankshield.open(href);
				e.preventDefault();
			}
		});

		/* select - option의 disabled=disabled 속성을 IE에서도 체크하기 위한 함수 */
		if($.browser.msie) {
			$('select').each(function(i, sels) {
				var disabled_exists = false;
				var first_enable = [];

				for(var j=0; j < sels.options.length; j++) {
					if(sels.options[j].disabled) {
						sels.options[j].style.color = '#CCCCCC';
						disabled_exists = true;
					}else{
						first_enable[i] = (first_enable[i] > -1) ? first_enable[i] : j;
					}
				}

				if(!disabled_exists) return;

				sels.oldonchange = sels.onchange;
				sels.onchange = function() {
					if(this.options[this.selectedIndex].disabled) {

						this.selectedIndex = first_enable[i];
						/*
						if(this.options.length<=1) this.selectedIndex = -1;
						else if(this.selectedIndex < this.options.length - 1) this.selectedIndex++;
						else this.selectedIndex--;
						*/

					} else {
						if(this.oldonchange) this.oldonchange();
					}
				};

				if(sels.selectedIndex >= 0 && sels.options[ sels.selectedIndex ].disabled) sels.onchange();

			});
		}

		/* 단락에디터 fold 컴포넌트 펼치기/접기 */
		var drEditorFold = $('.xe_content .fold_button');
		if(drEditorFold.size()) {
			var fold_container = $('div.fold_container', drEditorFold);
			$('button.more', drEditorFold).click(function() {
				$(this).hide().next('button').show().parent().next(fold_container).show();
			});
			$('button.less', drEditorFold).click(function() {
				$(this).hide().prev('button').show().parent().next(fold_container).hide();
			});
		}

		/*
		jQuery('input[type="submit"],button[type="submit"]').click(function(ev){
			var $el = jQuery(ev.currentTarget);

			setTimeout(function(){
				return function(){
					$el.attr('disabled', 'disabled');
				};
			}(), 0);

			setTimeout(function(){
				return function(){
					$el.removeAttr('disabled');
				};
			}(), 3000);
		});
		*/
	});
	})(jQuery, window || global);

	(function(global){ // String extension methods
		/**
		 * @brief location.href에서 특정 key의 값을 return
		 **/
		String.prototype.getQuery = function(key) {
			var url = global.XE.URI(this);
			var queries = url.search(true);

			if(typeof queries[key] == 'undefined') {
				return '';
			}

			return queries[key];
		};

		/**
		 * @brief location.href에서 특정 key의 값을 return
		 **/
		String.prototype.setQuery = function(key, val) {
			var uri = global.XE.URI(this);

			if(typeof key != 'undefined') {
				if(typeof val == "undefined" || val === '' || val === null) {
					uri.removeSearmailzeUri(uri).toString();
		};

		/**
		 * @brief string prototype으로 trim 함수 추가
		 **/
		if(!String.prototype.trim) {
			String.prototype.trim = function() {
				return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
			};
		}

		function normailzeUri(uri) {
			var query = uri.search(true);
			var filename = uri.filename() || 'index.php';
			var protocol = (global.enforce_ssl === true) ? 'https' : 'http';
			var port = 80;

			if(global.XE.isSameHost(uri.toString())) {
				if(jQuery.isEmptyObject(query)) filename = '';
			}

			if(protocol !== 'https' && query.act && jQuery.inArray(query.act, global.ssl_actions) !== -1) {
				protocol = 'https';
			}

			port = (protocol === 'http') ? global.http_port : global.https_port;

			return uri.protocol(protocol)
				.port(port || null)
				.filename(filename)
				.normalizePort();
		}
	})(window || global);

	/**
	 * @brief xSleep(micro time)
	 **/
	function xSleep(sec) {
		sec = sec / 1000;
		var now = new Date();
		var sleep = new Date();
		while( sleep.getTime() - now.getTime() < sec) {
			sleep = new Date();
		}
	}

	/**
	 * @brief 주어진 인자가 하나라도 defined되어 있지 않으면 false return
	 **/
	function isDef() {
		for(var i=0; i < arguments.length; ++i) {
			if(typeof(arguments[i]) == "undefined") return false;
		}
		return true;
	}

	/**
	 * @brief 윈도우 오픈
	 * 열려진 윈도우의 관리를 통해 window.focus()등을 FF에서도 비슷하게 구현함
	 **/
	var winopen_list = [];
	function winopen(url, target, attribute) {
		if(typeof xeVid != 'undefined' && url.indexOf(request_uri) >- 1 && !url.getQuery('vid')) {
			url = url.setQuery('vid',xeVid);
		}

		try {
			if(target != '_blank' && winopen_list[target]) {
				winopen_list[target].close();
				winopen_list[target] = null;
			}
		} catch(e) {
		}

		if(typeof target == 'undefined') target = '_blank';
		if(typeof attribute == 'undefiner win = window.open(url, target,pen_list[target] = win;
		}

	}

	/**
	 * @brief 팝업으로만 띄우기
	 * common/tpl/popup_layout.html이 요청되는 XE내의 팝업일 경우에 사용
	 **/
	function popopen(url, target) {
		winopen(url, target, "width=800,height=600,scrollbars=yes,resizable=yes,toolbars=no");
	}

	/**
	 * @brief 메일 보내기용
	 **/
	function sendMailTo(to) {
		location.href="mailto:"+to;
	}

	/**
	 * @brief url이동 (open_window 값이 N 가 아니면 새창으로 띄움)
	 **/
	function move_url(url, open_window) {
		if(!url) return false;

		if(/^\./.test(url)) url = window.request_uri + url;

		if(typeof open_window == 'undefined' || open_window == 'N') {
			location.href = url;
		} else {
			winopen(url);
		}

		return false;
	}

	/**
	 * @brief 멀티미디어 출력용 (IE에서 플래쉬/동영상 주변에 점선 생김 방지용)
	 **/
	function displayMultimedia(src, width, height, options) {
		/*jslint evil: true */
		var html = _displayMultimedia(src, width, height, options);
		if(html) document.writeln(html);
	}
	function _displayMultimedia(src, width, height, options) {
		if(src.indexOf('files') === 0) src = request_uri + src;

		var defaults = {
			wmode : 'transparent',
			allowScriptAccess : 'never',
			quality : 'high',
			flashvars : '',
			autostart : false
		};

		var params = jQuery.extend(defaults, options || {});
		var autostart = (params.autostart && params.autostart != 'false') ? 'true' : 'false';
		delete(params.autostart);

		var clsid = "";
		var codebase = "";
		var html = "";

		if(/\.(gif|jpg|jpeg|bmp|png)$/i.test(src)){
			html = '<img src="'+src+'" width="'+width+'" height="'+height+'" />';
		} else if(/\.flv$/i.test(src) || /\.mov$/i.test(src) || /\.moov$/i.test(src) || /\.m4v$/i.test(src)) {
			html = '<embed src="'+request_uri+'common/img/flvplayer.swf" allowfullscreen="true" allowscriptaccess="never" autostart="'+autostart+'" width="'+width+'" height="'+height+'" flashvars="&file='+src+'&width='+width+'&height='+height+'&autostart='+autostart+'" wmode="'+params.wmode+'" />';
		} else if(/\.swf/i.test(src)) {
			clsid = 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000';

			if(typeof(enforce_ssl)!='undefined' && enforce_ssl){ codebase = "https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0"; }
			else { codebase = "http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0"; }
			html = '<object classid="'+clsid+'" codebase="'+codebase+'" width="'+width+'" height="'+height+'" flashvars="'+params.flashvars+'">';
			html += '<param name="movie" value="'+src+'" />';
			for(var name in params) {
				if(params[name] != 'undefined' && params[name] !== '') {
					html += '<param name="'+name+'" value="'+params[name]+'" />';
				}
			}
			html += '' + '<embed src="'+src+'" allowscriptaccess="never" autostart="'+autostart+'"  width="'+width+'" height="'+height+'" flashvars="'+params.flashvars+'" wmode="'+params.wmode+'"></embed>' + '</object>';
		}  else {
			if (jQuery.browser.mozilla || jQuery.browser.opera) {
				// firefox and opera uses 0 or 1 for autostart parameter.
				autostart = (params.autostart && params.autostart != 'false') ? '1' : '0';
			}

			html = '<embed src="'+src+'" allowscriptaccess="never" autostart="'+autostart+'" width="'+width+'" height="'+height+'"';
			if(params.wmode == 'transparent') {
				html += ' windowlessvideo="1"';
			}
			html += '></embed>';
		}
		return html;
	}

	/**
	 * @brief 에디터에서 사용되는 내용 여닫는 코드 (고정, zbxe용)
	 **/
	function zbxe_folder_open(id) {
		jQuery("#folder_open_"+id).hide();
		jQuery("#folder_close_"+id).show();
		jQuery("#folder_"+id).show();
	}
	function zbxe_folder_close(id) {
		jQuery("#folder_open_"+id).show();
		jQuery("#folder_close_"+id).hide();
		jQuery("#folder_"+id).hide();
	}

	/**
	 * @brief 팝업의 경우 내용에 맞춰 현 윈도우의 크기를 조절해줌
	 * 팝업의 내용에 맞게 크기를 늘리는 것은... 쉽게 되지는 않음.. ㅡ.ㅜ
	 * popup_layout 에서 window.onload 시 자동 요청됨.
	 **/
	function setFixedPopupSize() {
		var $ = jQuery, $win = $(window), $pc = $('body>.popup'), w, h, dw, dh, offset;
		if(!$pc.size()) {
			$pc = $("#popup_content");
		}

		offset = $pc.css({overflow:'scroll'}).offset();

		w = $pc.width(10).height(10000).get(0).scrollWidth + offset.left*2 + 4;
		h = $pc.height(10).width(10000).get(0).scrollHeight + offset.top*2 + 4;

		if(w < 800) w = 800 + offset.left*2 + 4;

		dw = $win.width();
		dh = y(0, h - dh);

		$pc.width(w - offset.left*2 - 4).css({overflow:'',height:''});
	}

	/**
	 * @brief 추천/비추천,스크랩,신고기능등 특정 srl에 대한 특정 module/action을 호출하는 함수
	 **/
	function doCallModuleAction(module, action, target_srl) {
		var params = {
			target_srl : target_srl,
			cur_mid    : current_mid,
			mid        : current_mid
		};
		exec_xml(module, action, params, completeCallModuleAction);
	}

	function completeCallModuleAction(ret_obj, response_tags) {
		if(ret_obj.message!='success') alert(ret_obj.message);
		location.reload();
	}

	function completeMessage(ret_obj) {
		alert(ret_obj.message);
		location.reload();
	}



	/* 언어코드 (lang_type) 쿠키값 변경 */
	function doChangeLangType(obj) {
		if(typeof(obj) == "string") {
			setLangType(obj);
		} else {
			var val = obj.options[obj.selectedIndex].value;
			setLangType(val);
		}
		location.href = location.href.setQuery('l', '');
	}
	function setLangType(lang_type) {
		var expire = new Date();
		expire.setTime(expire.getTime()+ (7000 * 24 * 3600000));
		setCookie('lang_type', lang_type, expire, '/');
	}

	/* 미리보기 */
	function doDocumentPreview(obj) {
		var fo_obj = obj;
		while(fo_obj.nodeName != "FORM") {
			fo_obj = fo_obj.parentNode;
		}
		if(fo_obj.nodeName != "FORM") return;
		var editor_sequence = fo_obj.getAttribute('editor_sequence');

		var content = editorGetContent(editor_sequence);

		var win = window.open("", "previewDocument","toolbars=no,width=700px;height=800px,scrollbars=yes,resizable=yes");

		var dummy_obj = jQuery("#previewDocument");

		if(!dummy_obj.length) {
			jQuery(
				'<form id="previewDocument" target="previewDocument" method="post" action="'+request_uri+'">'+
				'<input type="hidden" name="module" value="document" />'+
				'<input type="hidden" name="act" value="dispDocumentPreview" />'+
				'<input type="hidden" name="content" />'+
				'</form>'
			).appendTo(document.body);

			dummy_obj = jQuery("#previewDocument")[0];
		} else {
			dummy_obj = dummy_obj[0];
		}

		if(dummy_obj) {
			dummy_obj.content.value = content;
			dummy_obj.submit();
		}
	}

	/* 게시글 저장 */
	function doDocumentSave(obj) {
		var editor_sequence = obj.form.getAttribute('editor_sequence');
		var prev_content = editorRelKeys[editor_sequence].content.value;
		if(typeof(editor_sequence)!='undefined' && editor_sequence && typeof(editorRelKeys)!='undefined' && typeof(editorGetContent)=='function') {
			var content = editorGetContent(editor_sequence);
			editorRelKeys[editor_sequence].content.value = content;
		}

		var params={}, responses=['error','message','document_srl'], elms=obj.form.elements, data=jQuery(obj.form).serializeArray();
		jQuery.each(data, function(i, field){
			var val = jQuery.trim(field.value);
			if(!val) return true;
			if(/\[\]$/.test(field.name)) field.name = field.name.replace(/\[\]$/, '');
			if(params[field.name]) params[field.name] += '|@|'+val;
			else params[field.name] = field.value;
		});

		exec_xml('document','procDocumentTempSave', params, completeDocumentSave, responses, params, obj.form);

		editorRelKeys[editor_sequence].content.value = prev_content;
		return false;
	}

	function completeDocumentSave(ret_obj) {
		jQuery('input[name=document_srl]').eq(0).val(ret_obj.document_srl);
		alert(ret_obj.message);
	}

	/* 저장된 게시글 불러오기 */
	var objForSavedDoc = null;
	function doDocumentLoad(obj) {
		// 저장된 게시글 목록 불러오기
		objForSavedDoc = obj.form;
		popopen(request_uri.setQuery('module','document').setQuery('act','dispTempSavedList'));
	}

	/* 저장된 게시글의 선택 */
	function doDocumentSelect(document_srl, module) {
		if(!opener || !opener.objForSavedDoc) {
			window.close();
			return;
		}

		if(module===undefined) {
			module = 'document';
		}

		// 게시글을 가져와서 등록하기
		switch(module) {
			case 'page' :
				var url = opener.current_url;
				url = url.setQuery('document_srl', minMobileContentModify')
				{
					url = url.setQuery('act', 'dispPageAdminMobileContentModify');
				}
				else
				{
					url = url.setQuery('act', 'dispPageAdminContentModify');
				}
				opener.location.href = url;
				break;
			default :
				opener.location.href = opener.current_url.setQuery('document_srl', document_srl).setQuery('act', 'dispBoardWrite');
				break;
		}
		window.close();
	}


	/* 스킨 정보 */
	function viewSkinInfo(module, skin) {
		popopen("./?module=module&act=dispModuleSkinInfo&selected_module="+module+"&skin="+skin, 'SkinInfo');
	}


	/* 관리자가 문서를 관리하기 위해서 선택시 세션에 넣음 */
	var addedDocument = [];
	function doAddDocumentCart(obj) {
		var srl = obj.value;
		addedDocument[addedDocument.length] = srl;
		setTimeout(function() { callAddDocumentCart(addedDocument.length); }, 100);
	}

	function callAddDocumentCart(document_length) {
		if(addedDocument.length<1 || document_length != addedDocument.length) return;
		var params = [];
		params.s,"procDocumentAddCart", params, null);
		addedDocument = [];
	}

	/* ff의 rgb(a,b,c)를 #... 로 변경 */
	function transRGB2Hex(value) {
		if(!value) return value;
		if(value.indexOf('#') > -1) return value.replace(/^#/, '');

		if(valuettp://www.webtoolkit.info/
	*
	**/

	var Basec4);

			}

			return output;
		},

		// public method for

				if (enc3 != 64) {
					output = output + String.fromCharCode(chr2);
				}
				if (enc4 != 64) {
					output = output + String.fromCharCode(chr3);
				}
			}

			output = Base64._utf8_decode(output);

			return output;

		},

		// private method for UTF-8 encoding
		_utf8_encode : function (string) {
			string = string.replace(/\r\n/g,"\n");
			var utftext = "";

			for (var n = 0; n < string.length; n++) {
				var c = string.charCodeAt(n);

				if (c < 128) {
					utftext += String.fromCharCode(c);
				}
				else if((c > 127) && (c < 2048)) {
					utftext += String.fromCharCode((c >> 6) | 192);
					utftext += String.fromCharCode((c & 63) | 128);
				}
				else {
					utftext += String.fromCharCode((c >> 12) | 224);
					utftext += String.fromCharCode(((c >> 6) & 63) | 128);
					utftext += String.fromCharCode((c & 63) | 128);
				}
			}

			return utftext;
		},

		// private method for UTF-8 decoding
		_utf8_decode : function (utftext) {
			var string = "";
			var i = 0;
		 = 0, c2 = 0, c3 = 0;

			while ( i < utftext.length ) {
				c = utftext.charCodeAt(i);

	;
				}
				else if((c > 191) && (c < 224)) {
					c2 = utftext.charCodeAt(i+1);
					string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
					i += 2;
				}
				else {
					c2 = utftext.charCodeAt(i+1);
					c3 = utftext.charCodeAt(i+2);
					string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
					i += 3;
				}
			}

			return string;
		}
	};






	/* ----------------------------------------------
	 * DEPRECATED
	 * 하위호환용으로 남겨 놓음
	 * ------------------------------------------- */

	if(typeof(resizeImageContents) == 'undefined') {
		window.resizeImageContents = function() {};
	}

	if(typeof(activateOptionDisabled) == 'undefined') {
		window.activateOptionDisabled = function() {};
	}

	var objectExtend = jQuery.extend;

	/**
�터에서 사용하되 내용 여닫는 코드 (zb5beta beta 호환�QuQuuery("#_folder_open_"+id).show();
		jQuery("#_folder_close_"+id).hide();
		jQuery("#_folder_"+id).hide();
	}

	/**
	 * @brief 날짜 선택 (달력 열기)
	 **/
	function open_calendar(fo_id, day_str, callback_func) {
		if(typeof(day_str)=="undefined") day_str = "";

		var url = "./common/tpl/calendar.php?";
		if(fo_id) url+="fo_id="+fo_id;
		if(day_str) url+="&day_str="+k__mfunction displayPopupMenu(ret_obj, response_tags, params) {
		XE.displayPopupMenu(ret_obj, response_tags, params);
	}

	function GetObjLeft(obj) {
		return jQuery(obj).offset().left;
	}
	function GetObjTop(obj) {
		return jQuery(obj).offset().top;
	}

	function replaceOuterHTML(obj, html) {
		jQuery(obj).replaceWith(html);
	}

	function getOuterHTML(obj) {
		return jQuery(obj).html().trim();
	}

	function setCookie(name, value, expire, path) {
		var s_cookie = name + "=" + escape(value) +
			((!expire) ? "" : ("; expires=" + expire.toGMTString())) +
			"; path=" + ((!path) ? "/" : path);

		document.cookie = s_cookie;
	}

	function getCookie(name) {
		var match = document.cookie.match(new RegExp(name+'=(.*?)(?:;|$)'));
		if(match) return unescape(match[1]);
	}

	function is_def(v) {
		return (typeof(v)!='undefined');
	}

	function ucfirst(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	function get_by_id(id) {
		return document.getElementById(id);
	}

	jQuery(function($){
		// display popup menu that contains member actions and document actions
		$(document).on('click', function(evt) {
			var $area = $('#popup_menu_area');
			if(!$area.length) $area = $('<div id="popup_menu_area" tabindex="0" style="display:none;z-index:9999" />').appendTo(document.body);

			// 이전에 호출되었을지 모르는 팝업메뉴 숨김
			$area.hide();

			var $target = $(evt.target).filter('a,div,span');
			if(!$target.length) $target = $(evt.target).closest('a,div,span');
			if(!$target.length) return;

			// 객체의 className값을 구함
			var cls = $target.attr('class'), match;
			if(cls) match = cls.match(new RegExp('(?:^| )((document|comment|member)_([1-9]\\d*))(?: |$)',''));
			if(!match) return;

			// mobile에서 touchstart에 의한 동작 시 pageX, pageY 위치를 구함
			if(evt.pageX===undefined || evt.pageY===undefined)
			{
				var touch = evt.originalEvent.touches[0];
				if(touch!==undefined || !touch)
				{
					touch = evt.originalEvent.changedTouches[0];
				}
				evt.pageX = touch.pageX;
				evt.pageY = touch.pageY;
			}

			var action = 'get'+ucfirst(match[2])+'Menu';
			var params = {
				mid        : current_mid,
				cur_mid    : current_mid,
				menu_id    : match[1],
				target_srl : match[3],
				cur_act    : current_url.getQuery('act'),
				page_x     : evt.pageX,
				page_y     : evt.pageY
			};
			var response_tags = 'error message menus'.split(' ');

			// prevent default action
			evt.preventDefault();
			evt.stopPropagation();

			if(is_def(window.xeVid)) params.vid = xeVid;
			if(is_def(XE.loaded_popup_menus[params.menu_id])) return XE.displayPopupMenu(params, response_tags, params);

			show_waiting_message = false;
			exec_xml('member', action, params, XE.displayPopupMenu, response_tags, params);
			show_waiting_message = true;
		});

		/**
		 * Create popup windows automatically.
		 * Find anchors that have the '_xe_popup' class, then add popup script to them.
		 */
		$('body').on('click', 'a._xe_popup', function(event) {
			var $this = $(this);
			var name = $this.attr('name');
			var href = $this.attr('href');
			var win;

			if(!name) name = '_xe_popup_' + Math.floor(Math.random() * 1000);

			var features = 'left=10,top=10,width=10,height=10,resizable=no,scrollbars=no,toolbars=no';

			if(window.XE.isSameHost(href)) {
				win = window.open(href, name, features);
				if(win) win.focus();
			} else {
				window.blankshield.open(href, name, features);
			}

			event.preventDefault();
			return false;
		});

		// date picker default settings
		if($.datepicker) {
			$.datepicker.setDefaults({
				dateFormat : 'yy-mm-dd'
			});
		}
	});
}
