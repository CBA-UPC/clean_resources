(()=>{"use strict";class t{static mapFunc=new Map([["CLICK_ID",t.getClickId],["CLICK_TEXT",t.getClickText],["CLICK_URL",t.getClickUrl],["CLICK_CLASSES",t.getClickClasses],["CLICK_ELEMENT",t.getClickElement],["PAGE_URL",t.getPageUrl],["PAGE_PATH",t.getPagePath]]);constructor(t){this.event=t}getVariableValue(e){return t.mapFunc.get(e)(this.event)}getAllVariableValue(){let e={};return t.mapFunc.forEach(((t,n)=>{e[n]=t(this.event)})),e}static getClickId(t){return t.target?.id}static getClickText(t){return t.target?.innerText}static getClickUrl(t){return function(t){for(;t;){if(t.href&&t.nodeName.match(/^a$/i))return t.href;t=t.parentNode}}(t.target)}static getClickClasses(t){return t.target?.className}static getClickElement(t){var e=t.composedPath?t.composedPath():t.path;if(e)return e.slice(0,e.length-2).map((t=>{let e=t.tagName?.toLowerCase();return t.classList?.forEach((t=>e+="."+t)),e})).reverse().join(" > ")}static getPageUrl(t){return window.location.href}static getPagePath(t){return window.location.pathname}}class e{constructor(t){this.name=t.name,this.action=t.action}isMatch(t,e){return t===this.action.type&&this.isMatchRules(e)}isMatchRules(t){for(let n of this.action.rules)if(!e.isMatchRule(n,t))return!1;return!0}static isMatchRule(e,n){let i=new t(n).getVariableValue(e.variable);if(null==i)return!1;switch(e.operator){case"CONTAINS":return i.includes(e.value);case"DOES_NOT_CONTAIN":return!i.includes(e.value);case"EQUAL":return i instanceof Array?i.join(" ")===e.value:i===e.value;default:return!1}}}const n="7711843404775064594",i="https://px.dmp.zaloapp.com",a="zdmp_pssid",r="zdmp_page_view",o=[].map((t=>new e(t))),s="ztr_debug",c="ztr_pixel",d={EVENT_VERIFY:"__ZDMP_VERIFY__",EVENT_INIT_UTM:"__ZDMP_INIT_UTM__",EVENT_INIT_PIXEL:"__ZDMP_INIT_PIXEL__"};function l(){var t;function e(){t!==window.location.href&&(t=window.location.href,document.dispatchEvent(new CustomEvent(r)))}function n(t,e){e.isMatchRules(t)&&window.ztr("track",e.name)}o.forEach((t=>{!function(t){switch(t.action.type){case"CLICK":document.addEventListener("click",(e=>{n(e,t)}),!0);break;case"PAGE_VIEW":document.addEventListener(r,(e=>{n(e,t)}))}}(t)})),window.history.pushState=new Proxy(window.history.pushState,{apply:(t,n,i)=>{t.apply(n,i),e()}}),window.history.replaceState=new Proxy(window.history.replaceState,{apply:(t,n,i)=>{t.apply(n,i),e()}}),window.onpopstate=function(t){e()},e()}const u=function(t){return Object.keys(t).filter((e=>null!==t[e]&&void 0!==t[e])).map((function(e){return[e,encodeURIComponent(t[e])].join("=")})).join("&")};class p{constructor(t){this.baseUrl=t,this.params={}}addParam(t,e){this.params[t]=e}addParams(t){Object.assign(this.params,t)}get(){let t=new Image;t.referrerPolicy="unsafe-url",t.src=this.baseUrl+u(this.params)}}function m(){var e=window.location.search;const a=new URLSearchParams(e),d=a.get(s)?a.get(s):sessionStorage.getItem(s),l=a.get(c)?a.get(c):sessionStorage.getItem(c);if(!d)return;String.prototype.format=function(){var t=arguments;return this.replace(/{([0-9]+)}/g,(function(e,n){return void 0===t[n]?e:t[n]}))},function(t){let e;e=t?t===n?`Pixel ${t} connected`:`Pixel ${t} not installed`:"Pixel debug not found";const i=document.createElement("iframe");i.srcdoc='<!DOCTYPE html>\n<html lang="en">\n<head>\n    <title>Zalo DMP Debug</title>\n    <style>\n\n        body {\n            margin: 0;\n            font-family: Roboto,Helvetica Neue,Helvetica,Arial,sans-serif\n        }\n        .panel {\n            border-color: #ddd;\n            color: #333;\n        }\n\n        .panel-default {\n            border-color: #ddd;\n        }\n\n        .panel {\n            background-color: #fff;\n            border-radius: 3px;\n        }\n\n        .panel-default > .panel-heading {\n            color: #fff;\n            background-color: #2196f3;\n            border-color: #ddd;\n        }\n\n        .panel-heading {\n            position: relative;\n            border-top-right-radius: 3px;\n            border-top-left-radius: 3px;\n        }\n\n        .panel-heading {\n            padding: 15px 20px;\n            border-bottom: 1px solid transparent;\n            border-top-right-radius: 2px;\n            border-top-left-radius: 2px;\n        }\n\n        .h1.panel-title, h1.panel-title {\n            font-size: 20px;\n        }\n\n        .panel-title {\n            position: relative;\n        }\n\n        .panel-title {\n            margin-top: 0;\n            margin-bottom: 0;\n            color: inherit;\n        }\n\n        .panel-body {\n            position: relative;\n            font-size: 13px;\n        }\n\n        .panel-body {\n            padding: 15px;\n        }\n    </style>\n</head>\n<body>\n<div class="panel panel-default">\n    <div class="panel-heading">\n        <h1 class="panel-title">Zalo DMP Pixel Debug<a class="heading-elements-toggle"><i class="icon-more"></i></a></h1>\n    </div>\n\n    <div class="panel-body" style="">\n        {0}\n    </div>\n</div>\n</body>\n</html>\n'.format(e),i.style="border: 0px !important; inset: auto 24px 24px auto !important; border-radius: 8px !important; box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px !important; clip: initial !important; display: inline !important; height: 100px !important; margin: 0px !important; max-width: 95% !important; opacity: 1 !important; padding: 0px !important; position: fixed !important; visibility: visible !important; width: 300px !important; z-index: 2147483647 !important;",document.body.appendChild(i),setTimeout((function(){i.contentWindow.document.body.onclick=()=>{i.parentNode.removeChild(i)}}),100)}(l),sessionStorage.setItem(s,d),sessionStorage.setItem(c,l),document.addEventListener("click",(t=>{u("CLICK",t)}),!0),document.addEventListener(r,(t=>{u("PAGE_VIEW",t)}));const u=function(e,a){let r=new t(a).getAllVariableValue(),c=[],l=[];o.forEach((t=>{t.isMatch(e,a)?c.push(t.name):l.push(t.name)}));let u=new p(i+"/tr_debug?");u.addParam("id",n),u.addParam("event",e),u.addParam("time",Date.now()),u.addParam(s,d),u.addParams(r),u.addParam("eventsFired",c),u.addParam("eventsNotFired",l),u.get()}}function g(){try{if(window.ZDMP&&window.ZDMP.version)throw new Error("Already loaded");window.ZDMP={getVisitorID:function(e){return t.getZDMPVisitorID(e)},version:"2023-10-04"};var t={_vid:void 0,getDomain:function(){const t=window.location.hostname.split(".");return t[t.length-2]+"."+t[t.length-1]},getCookie:function(t){let e=document.cookie.split(";"),n=t+"=";for(let t=0;t<e.length;t++){let i=e[t].trim();if(0===i.indexOf(n))return i.substring(n.length,i.length)}return""},setCookieThirdParty:function(t,e){try{const n=this.getDomain(),i=new Date(Date.now()+63072e6).toUTCString();return document.cookie=t+"="+e+"; expires="+i+"; path=/; domain="+n,!0}catch(t){return!1}},formatUrlParams:function(t){return Object.keys(t).filter((e=>null!==t[e]&&void 0!==t[e])).map((function(e){return[e,encodeURIComponent(t[e])].join("=")})).join("&")},updateCookieZDMP:function(t,e,n,i){const a=new XMLHttpRequest;a.addEventListener("readystatechange",(function(){4===this.readyState&&(200===this.status?n(this.responseText):i(this.status))})),a.open("POST",t),a.withCredentials=!0,a.setRequestHeader("content-type","application/x-www-form-urlencoded"),a.send(this.formatUrlParams(e))},loadCookieFirstParty:function(e){const n={vid:e};this.updateCookieZDMP(i+"/sdk",n,(function(e){let n=JSON.parse(e);n&&n.vid?(t._vid=n.vid,t.setCookieThirdParty(t.COOKIE_ZDMP_KEY,t._vid)):t._vid=t.getCookie(t.COOKIE_ZDMP_KEY),t.notifyEvent(t.EVENT_ZDMP_READY)}),(function(e){t._vid=t.getCookie(t.COOKIE_ZDMP_KEY),t.notifyEvent(t.EVENT_ZDMP_READY)}))},loadVisitorID:function(){const e=window.location.search;let n=new URLSearchParams(e).get("utm_uid");this.isFormatVID(n)||!this.getCookie(this.COOKIE_ZDMP_KEY)?this.loadCookieFirstParty(n):(this._vid=this.getCookie(this.COOKIE_ZDMP_KEY),t.notifyEvent(t.EVENT_ZDMP_READY))},notifyEvent:function(t){let e=new Event(t,{bubbles:!0,cancelable:!0});document.dispatchEvent(e)},regexIdentified:/^3000\.((\d+)|([^\.]+\.\d$))/,EVENT_ZDMP_READY:"zdmp-sdk-ready",COOKIE_ZDMP_KEY:"__zi_zdmp",isFormatVID:function(t){return this.regexIdentified.test(t)},getZDMPVisitorID:function(t){return"function"==typeof t&&(void 0!==this._vid?t(this._vid):document.addEventListener(this.EVENT_ZDMP_READY,(function(){t(this._vid)}))),this._vid}};t.loadVisitorID()}catch(t){console.error(t)}}!function t(e,r,o,s,c){if(e.ZDMP||o||g(),!o){const t=e.location.search,n=new URLSearchParams(t),i=n.get("utm_cid"),a=n.get("utm_source"),o=n.get("utm_medium"),s=n.get("utm_campaign"),c=n.get("utm_audience"),u=n.get("utm_custom_segment");if(a){const t={utm_cid:i,utm_source:a,utm_medium:o,utm_campaign:s,utm_audience:c,utm_custom_segment:u,utm_ref:r.referrer?.replace(/(^\w+:|^)\/\//,"")};e.ztr("track",d.EVENT_INIT_UTM,t)}m(),l(),n.get("ztr_verify")&&e.ztr("track",d.EVENT_VERIFY)}if(!e.ZA){o||((c=r.createElement("script")).type="text/javascript",c.src="https://za.zdn.vn/v3/za.js?v=2.0",c.async=!1,(s=r.getElementsByTagName("script")[0]).parentNode.insertBefore(c,s),o=setInterval((function(){t(e,r,o)}),2e3));var p=e.ztr.queue||[];return e.ztr=function(t,n,i){e.ztr.queue.push({action:"track",event:n?String(n):"",arguments:Object.assign({},i)})},void(e.ztr.queue=p||[])}o&&clearInterval(o);var h=e.ztr.queue||[];e.ztr=function(a,o,s){switch(a){case"init":localStorage.setItem("zdmp_pid",""+o);break;case"track":if(!e.ZA)return e.ztr.queue=e.ztr.queue||[],e.ztr.queue.push({action:"track",event:o?String(o):"",arguments:Object.assign({},s)}),void t(e,r);let c={};c.id=n,c.event=o,Object.values(d).includes(o)?c=Object.assign(c,s):f(c,s),c.sessionId=_(),c.time=Date.now(),c.version="2.0",c.zscript=1,e.ZA.getVisitorID((function(t){c.utm_uid=t,e.ZDMP.getVisitorID((t=>{c.vidDmp=t;let e=new Image;e.referrerPolicy="unsafe-url",e.src=i+"/tr?"+u(c)}))}));break;default:console.log("Unsupported action: "+a)}},ztr.callMethod=ztr;const f=function(t,e){Object.keys(e||{}).forEach((n=>{t["p["+n+"]"]=e[n]}))},_=function(){let t=sessionStorage.getItem(a);return t||(t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){let e=16*Math.random()|0;return("x"===t?e:11&e).toString(16)})),sessionStorage.setItem(a,t)),t};h.length&&(h.forEach((function(t){ztr(t.action,t.event,t.arguments)})),e.ztr.queue=[])}(window,document)})();
bilityOptimization()
		{
			useVisibilityOptimization = false;
		}
		function turnOnTheLight()
		{
			darkBackground = false;
		}
		function showAnchor()
		{
			hasAnchor = true;
		}
		function drawAnchor()
		{
			if (!hasAnchor) return;
			anchorDiv.style.width = canvas.actualWidth + 'px';
			anchorDiv.style.height = canvas.actualHeight + 'px';
			show(anchor);
		}
		function showBorder()
		{
			hasBorder = true;
		}
		function drawBorder()
		{
			if (!hasBorder) return;
			
			
			var styleElem = document.head.appendChild(document.createElement("style"));
			var addRule = (function(style)
			{
				var sheet = document.head.appendChild(style).sheet;
				return function(selector, css)
				{
					var propText = Object.keys(css).map(function(p)
					{
						return p+":"+css[p]
					}).join(";");
					sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
				}
			})(document.createElement("style"));
			addRule("#dom_overlay_container:before",
			{
				content:"''",
				width: (canvas.actualWidth - 2) + "px",
				height: (canvas.actualHeight - 2) + "px",
				position: "absolute",
				border: "1px solid #E5E5E5",
				top: "0px",
				left: "0px"
			});
		}
		function enableMessageTracing()
		{
			traceMessages = true;
		}
		function enableLayoutTracing()
		{
			traceLayoutChange = true;
		}
		
		
		
		function sendMessage(message)
		{
			window.top.postMessage(message, '*');
			if (traceMessages) trace(message);
		}

		function initializeDFPView(width, height, maxWidth, maxHeight, align, forceType, forceId)
		{
			sendMessage({
							cmd		:	"dfpSetStyle",
							type	:	forceType ? forceType : "dfp-rmd",
							id			:	forceId ? forceId : zoneid,
							params	:
										{
											action		:	"dfp_initialize",
											width		:	width,
											height		:	height,
											maxWidth	:	maxWidth,
											maxHeight	:	maxHeight,
											align		:	align
										}
						});
			window._lastViewWidth = width;
			window._lastViewHeight = height;
		}
		function collapseDFPView(width, height, forceType, forceId)
		{
			sendMessage({
							cmd		:	"dfpSetStyle",
							type	:	forceType ? forceType : "dfp-rmd",
							id		:	forceId ? forceId : zoneid,
							params	:
										{
											action	:	"dfp_collapse",
											width	:	width,
											height	:	height
										}
						});
			if (!window.zonePosition) window.zonePosition = "Undefined Position"; 
			if (!window.zoneCategory) window.zoneCategory = "Undefined Category"; 
			dataLayer.push({
							"event"			:	"BannerEngagement",
							"EventCategory"	:	"Banner Engagement",
							"EventAction"	:	"Close",
							"Name"			:	"",
							"Phone_Email"	:	"",
							"Advertiser"	:	index_brand,
							"Campaign"		:	campaign_name,
							"EventLabel"	:	campaign_name,
							"AdFormat"		:	"Display Ads",
							"ZonePosition"	:	window.zonePosition,
							"Category"		:	window.zoneCategory
						});
		}
		function expandDFPView(width, height, forceType, forceId)
		{
			sendMessage({
							cmd		:	"dfpSetStyle",
							type	:	forceType ? forceType : "dfp-rmd",
							id		:	forceId ? forceId : zoneid,
							params	:
										{
											action	:	"dfp_expand",
											width	:	width,
											height	:	height
										}
						});
			if (!window.zonePosition) window.zonePosition = "Undefined Position"; 
			if (!window.zoneCategory) window.zoneCategory = "Undefined Category"; 
			dataLayer.push({
							"event"			:	"BannerEngagement",
							"EventCategory"	:	"Banner Engagement",
							"EventAction"	:	"Expand",
							"Name"			:	"",
							"Phone_Email"	:	"",
							"Advertiser"	:	index_brand,
							"Campaign"		:	campaign_name,
							"EventLabel"	:	campaign_name,
							"AdFormat"		:	"Display Ads",
							"ZonePosition"	:	window.zonePosition,
							"Category"		:	window.zoneCategory
						});
		}
		function resizeDFPView(width, height, forceType, forceId)
		{
			if (width == window._lastViewWidth && height == window._lastViewHeight) return;
			width * height > window._lastViewWidth * window._lastViewHeight ? expandDFPView(width, height, forceType, forceId) : collapseDFPView(width, height, forceType, forceId);
			window._lastViewWidth = width;
			window._lastViewHeight = height;
		}
		function openDFPPopupAd(width, height, url)
		{
			sendMessage({
							cmd		:	"dfpSetStyle",
							type	:	"dfp-rmd",
							id		:	zoneid,
							params	:
										{
											action	:	"dfp_popup",
											width	:	width,
											height	:	height,
											url		:	url
										}
						});
		}
		function closeDFPAd()
		{
			sendMessage({
							cmd		:	"dfpSetStyle",
							type	:	"dfp-rmd",
							id		:	zoneid,
							params	:
										{
											action	:	"dfp_close"
										}
						});
			freeze();
			destroyVideos();
			hide(body);
		}
		function closeDFPPopupAd()
		{
			sendMessage({
							cmd		:	"dfpSetStyle",
							type	:	"dfp-rmd",
							params	:
										{
											id		:	zoneid,
											action	:	"dfp_closePopup"
										}
						});
			freeze();
			destroyVideos();
			hide(body);
		}
		function localConnection(id)
		{
			sendMessage({
							cmd		:	"dfpSetStyle",
							type	:	"dfp-rmd",
							params	:
										{
											action	:	"dfp_localConnection",
											id		:	id
										}
						});
		}
		function connect(id, message)
		{
			sendMessage({
							cmd		:	"dfpSetStyle",
							type	:	"dfp-rmd",
							params	:
										{
											action	:	"dfp_localConnection",
											id		:	id,
											message	:	message
										}
						});
		}
		function syncPlay()
		{
			isSyncPlay = true;
		}
		
		
		
		function createButton(id, x, y, width, height, hitAreaOffset)
		{
			x = Math.round(x * canvas.scaleX);
			y = Math.round(y * canvas.scaleY);
			width = Math.round(width * canvas.scaleX);
			height = Math.round(height * canvas.scaleY);
			if (hitAreaOffset)
			{
				x -= hitAreaOffset;
				y -= hitAreaOffset;
			}
			var button = document.createElement("div");
				button.id = id;
				button.setAttribute('style', 'position:absolute; left:' + x + 'px; top:' + y + 'px; width:' + width + 'px; height:' + height + 'px; padding:' + hitAreaOffset + 'px; background-color:transparent; cursor:pointer; -webkit-tap-highlight-color:rgba(0,0,0,0); -webkit-tap-highlight-color:transparent;');
			wrapper.appendChild(button);
			return button;
		}
		var _textInputFormatIncrement = 0;

		function createTextInputFormat(format)
		{
			++ _textInputFormatIncrement;
			var textInputCassName = "textInput" + _textInputFormatIncrement;
			var _textInputCassName = '.' + textInputCassName;
			var textInputStyle = '';
			textInputStyle += _textInputCassName + ' {margin:0px; font-family: Arial, Helvetica, sans-serif;}';
			if (format.textColor)
			{
				textInputStyle += _textInputCassName + ' {color: ' + format.textColor + ';}';
			}
			if (format.bold === true)
			{
				textInputStyle += _textInputCassName + ' {font-weight: bold;}';
			}
			if (format.background === false)
			{
				textInputStyle += _textInputCassName + ' {background: transparent;}';
			}
			else
			{
				if (format.backgroundColor)
				{
					textInputStyle += _textInputCassName + ' {background-color: ' + format.backgroundColor + ';}';
				}
				else
				{
					textInputStyle += _textInputCassName + ' {background-color: #FFFFFF;}';
				}
			}
			if (format.border === false)
			{
				textInputStyle += _textInputCassName + ' {border: 0px;}';
			}
			else
			{
				if (format.borderColor)
				{
					textInputStyle += _textInputCassName + ' {border:1px solid ' + format.borderColor + ';}';
				}
				else
				{
					textInputStyle += _textInputCassName + ' {border: 1px solid;}';
				}
			}
			if (format.margin)
			{
				textInputStyle += _textInputCassName + ' {padding: 0 ' + format.margin + 'px;}';
			}
			else
			{
				textInputStyle += _textInputCassName + ' {padding: 0}';
			}
			if (format.textAlign)
			{
				textInputStyle += _textInputCassName + ' {text-align: ' + format.textAlign + ';}';
			}
			
			textInputStyle += _textInputCassName + ' {box-sizing: border-box;}';
			if (format.defaultTextColor)
			{
				textInputStyle += _textInputCassName + '::-webkit-input-placeholder {color: ' + format.defaultTextColor + ';}';
				textInputStyle += _textInputCassName + ':-ms-input-placeholder {color: ' + format.defaultTextColor + ';}';
				textInputStyle += _textInputCassName + '::placeholder {color: ' + format.defaultTextColor + ';}';
			}
			if (format.focus === false)
			{
				textInputStyle += _textInputCassName + ':focus {outline: none;}';
			}
			else
			{
				if (format.focusColor)
				{
					textInputStyle += _textInputCassName + ':focus {border:1px solid ' + format.focusRectColor + ';}';
				}
			}
			var styleTag=document.createElement('style');
			if (styleTag.styleSheet)
			{
				styleTag.styleSheet.cssText = textInputStyle;
			}
			else
			{
				styleTag.appendChild(document.createTextNode(textInputStyle));
			}
			document.body.appendChild(styleTag);
			return textInputCassName;
		}

		function createTextInput(id, name, x, y, width, height, size)
		{
			x = Math.round(x * canvas.scaleX);
			y = Math.round(y * canvas.scaleY);
			width = Math.round(width * canvas.scaleX);
			height = Math.round(height * canvas.scaleY);
			size = (size * Math.min(canvas.scaleX, canvas.scaleY)).toFixed(1);
			var textInput = document.createElement("input");
				textInput.id = id;
				textInput.setAttribute("type", "text");
				textInput.setAttribute("name", name);
				textInput.setAttribute("style", 'position:absolute; left:' + x + 'px; top:' + y + 'px; width:' + width + 'px; height:' + height + 'px; font-size: ' + size + 'px;');
			wrapper.appendChild(textInput);
			Object.defineProperty(textInput, "text",
			{
				get()
				{
					return textInput.value;
				},
				set(value)
				{
					textInput.value = value;
				}
			});
			Object.defineProperty(textInput, "defaultText",
			{
				get()
				{
					return textInput.placeholder;
				},
				set(value)
				{
					textInput.placeholder = value;
				}
			});
			Object.defineProperty(textInput, "fontSize",
			{
				get()
				{
					return textInput.style.fontSize;
				},
				set(value)
				{
					textInput.style.fontSize = value;
				}
			});
			Object.defineProperty(textInput, "maxChars",
			{
				get()
				{
					return textInput.maxLength;
				},
				set(value)
				{
					textInput.maxLength = value;
				}
			});
			Object.defineProperty(textInput, "spellCheck",
			{
				get()
				{
					return textInput.spellcheck;
				},
				set(value)
				{
					textInput.spellcheck = value;
				}
			});
			Object.defineProperty(textInput, "visible",
			{
				get()
				{
					return textInput.style.visibility == "visible";
				},
				set(value)
				{
					textInput.style.visibility = value ? "visible" : "hidden";
				}
			});
			textInput.setTextFormat = function(format)
			{
				textInput.className += ' ' + format;
			}
			return textInput;
		}

		function getRed(color) { return (color >> 16) & 0xff; }

		function getGreen(color) { return (color >> 8) & 0xff; }

		function getBlue(color) { return color & 0xff; }
		function loadFavicon(faviconURL)
		{
			if (!isPreview) return;
			if (window.faviconLoaded) return;
				window.faviconLoaded = true;
			var faviconType;
			var faviconExtension = faviconURL.slice(-3);
			switch(faviconExtension)
			{
				case "png":
					faviconType = "image/png";
					break;
				case "ico":
					faviconType = "image/x-icon";
					break;
				default:
					break;
			}
			var faviconElement = document.createElement('link');
				faviconElement.type = faviconType;
				faviconElement.rel = 'icon';
				faviconElement.href = faviconURL;
			head.appendChild(faviconElement);
		}
	</script>
<!--[if gt IE 8]><!-->
<script src="https://static.eclick.vn/html5/lib/createjs/1.0.0/createjs.min.js"></script>
<script src="https://static.eclick.vn/html5/vs_002/ads/t/tamanh/2022/03/03/00000/1920x270/dfp/pc/rmd/fixed/index.js?1646811808464"></script>
<script>

	PROFILE = DFP|PC_ONLY|RMD;
forceLink("https://tamanhhospital.vn/chuyen-khoa/san-phu/", "_blank");
showAnchor();
disablePreviewMode();</script>

	<script>

		if (typeof jQuery == 'undefined')
		{
			$ = function(value)
			{
				return document.querySelector(value);
			}
			$$ = function(value)
			{
				return document.querySelectorAll(value);
			}
		}

		function ajax(options)
		{
			
			if (!options.method)
			{
				options.method = "GET";
			}
			
			function noop() {}
			if (!options.success)
			{
				options.success = noop;
			}
			if (!options.warning)
			{
				options.warning = noop;
			}
			if (!options.error)
			{
				options.error = noop;
			}
			var request = new XMLHttpRequest();
			if (typeof options.data !== "string")
			{
				options.data = getQueryString(options.data);
				if (options.data === "")
				{
					trace("XHR Query: <empty>");
				}
				else
				{
					trace("XHR Query: " + options.data);
				}
			}
			request.open(options.method, options.url + options.data, true);
			if (options.dataType == "json")
			{
				request.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
				
				
				
				
				
			}
			request.onload = function()
			{
				
				if (request.readyState === 4 && request.status === 200)
				{
					if (options.dataType == "json")
					{
						if (options.logging) trace("XHR Success: Client --success--> Server --success--> Client");
						options.success(JSON.parse(request.responseText));
					}
					else
					{
						options.success(request.responseText);
					}
				}
				
				else
				{
					if (options.logging) trace("XHR Warning: Client --success--> Server --error--> Client");
					options.warning();
				}
			};
			
			request.onerror = function()
			{
				if (options.logging) trace("XHR Error: Client --error--> Server");
				options.error;
			}
			request.send(options.data);
			return request;
		}
		function getQueryString(data)
		{
			return "?" + Object.keys(data).map(function(key){return key+"="+encodeURIComponent(data[key])}).join("&");
		}

		function submitData(inputList, webAppURL, onSuccess, onError)
		{
			if (!validateData(inputList)) return null;
			var jqxhr = ajax(
			{
				url			:	webAppURL,
				type		:	"GET",
				dataType	:	"json",
				data		:	serializeObject(inputList),
				success		:	onSuccess,
				error		:	onError
			})
			return jqxhr;
		}

		function serializeObject(inputList)
		{
			var object = {};
			for (var i = 0, n = inputList.length; i < n; ++i)
			{
				var input = inputList[i];
				var name = input.name;
				var value = input.value.trim();
				object[name] = value;
			}
			return object;
		};
		function validateData(inputList)
		{
			for (var i = 0, n = inputList.length; i < n; ++i)
			{
				var input = inputList[i];
				var name = input.name;
				var value = input.value.trim();
				
				if (!value) return false;
				
				if (name.toLocaleLowerCase() == "name")
				{
					if (/\d/.test(value))
					{
						return false;
					}
				}
				
				if (name.toLocaleLowerCase() == "phone")
				{
					if (!/^(0|\+84)[93785][0-9]{8}$/.test(value))
					{
						return false;
					}
				}
			}
			return true;
		}
	</script>
	<script>
		if (isGTIE8 && isCanvasSupported)
		{
			window.addEventListener("DOMContentLoaded", onDOMLoaded);
		}
		var root, stage, exportRoot, fnStartAnimation;
		function onDOMLoaded()
		{
	var comp=AdobeAn.getComposition("5168CB3B67D3474D81338275BE604D51");
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
		
		function handleComplete(evt,comp)
		{
			
			
			
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.tamanh_00000_1920x270_030322();
	stage = new lib.Stage(canvas);
			
			
			
			
			
			
			stage.enableMouseOver(10); 
			stage.mouseMoveOutside = true; 
			
			root = exportRoot;
			stage.addChild(root);
			
			
			
			fnStartAnimation = function()
			{
				
				
				if (!window.fnStartAnimationCalled)
				{
					window.fnStartAnimationCalled = true;
					var fps = lib.properties.fps;
					if (fps == 30 || fps == 20)
					{
						createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
					}
					
					if (createjs.Ticker.framerate)
					{
						createjs.Ticker.framerate = fps;
					}
					
					else
					{
						createjs.Ticker.setFPS(fps);
					}
					
					unfreeze("fnStartAnimation");
				}
			}
			
			
			AdobeAn.compositionLoaded(lib.properties.id); 
			fnStartAnimation();
			if (!isPreview && useBuiltInRespHiDPI)
			{

				AdobeAn.makeResponsive = function(isResponsive, responsiveDimension, isScale, scaleType, domContainers, debug)
				{
					var lastViewportWidth, lastViewportHeight, lastScaleRatio = 1;
					window.addEventListener('resize', resizeCanvas);
					resizeCanvas();
					function resizeCanvas()
					{
						var exportWidth = lib.properties.width, exportHeight = lib.properties.height;
						var viewportWidth = window.viewportWidth, viewportHeight = window.viewportHeight;
						var pixelRatio = window.devicePixelRatio || 1;
						var scaleXRatio = viewportWidth/exportWidth, scaleYRatio = viewportHeight/exportHeight, scaleRatio = 1;
						if (debug) trace("--------------------------------Begin Resize Tracing---------------------------------");
						if (debug) trace("pixelRatio="+pixelRatio);
						if (debug) trace("viewportWidth="+viewportWidth+',viewportHeight='+viewportHeight);

						if (isResponsive)
						{
							if ((responsiveDimension == 'width' && lastViewportWidth == viewportWidth) || (responsiveDimension == 'height' && lastViewportHeight == viewportHeight))
							{					
								scaleRatio = lastScaleRatio;
								if (debug) trace("[No Changes]");
							}
							else if (!isScale)
							{

								if (viewportWidth < exportWidth || viewportHeight < exportHeight)
								{
									if (responsiveDimension == 'width')
									{
										scaleRatio = scaleXRatio;
									}
									else if (responsiveDimension == 'height')
									{
										scaleRatio = scaleYRatio;
									}
									else if (responsiveDimension == 'both')
									{
										scaleRatio = Math.min(scaleXRatio, scaleYRatio);
									}
								}
							}
							else if (scaleType == 1) 
							{
								scaleRatio = Math.min(scaleXRatio, scaleYRatio);
								if (debug) trace("[scaleType = 1]");
							}
							else if (scaleType == 2) 
							{
								scaleRatio = Math.max(scaleXRatio, scaleYRatio);
								if (debug) trace("[scaleType = 2] Stretch to fit");
							}
						}
						if (debug) trace("scaleXRatio="+scaleXRatio+',scaleYRatio='+scaleYRatio+',scaleRatio='+scaleRatio);
						
						domContainers[0].width = exportWidth * pixelRatio * scaleRatio;
						domContainers[0].height = exportHeight * pixelRatio * scaleRatio;
						domContainers.forEach(function(container)
						{
							container.style.width = exportWidth * scaleRatio + 'px';
							container.style.height = exportHeight * scaleRatio + 'px';
						});
						stage.scaleX = pixelRatio * scaleRatio;
						stage.scaleY = pixelRatio * scaleRatio;
						lastViewportWidth = viewportWidth; lastViewportHeight = viewportHeight; lastScaleRatio = scaleRatio;
						if (debug) trace("width="+(exportWidth * pixelRatio * scaleRatio)+',height='+(exportHeight * pixelRatio * scaleRatio));
						if (debug) trace("styleWidth="+(exportWidth * scaleRatio)+',styleHeight='+(exportHeight * scaleRatio));
						if (debug) trace("---------------------------------End Resize Tracing----------------------------------");
						stage.tickOnUpdate = false;
						stage.update();
						stage.tickOnUpdate = true;
					}
				}
	AdobeAn.makeResponsive(false,'both',false,2,[canvas,anim_container,dom_overlay_container]);
			}
			drawAnchor();
			drawBorder();
			parseTitleAndProfile();
			enablePreviewMode();
			visibilityOptimization();
			sendReadyMessage(); 
			handleReplayMessage();
			handleFocusing();
			if (!isEmbed) show(body);
		
		
		
		}
		
		function parseTitleAndProfile()
		{
			if (!isPreview) return;
			
			
			
			var title;
			var filename = "tamanh_00000_1920x270_030322";
			var filenameInfo;
			var info = filename.split('_');
			var infoCount = info.length;
			if (infoCount != 4)
			{
				filenameInfo = filename;
			}
			else
			{
				for (var i = 0; i < infoCount; ++i)
				{
					info[i] = info[i].split('-');
					if (info[i][1] == undefined) info[i][1] = '';
				}
				var project = info[0][0], subProject = info[0][1];
				var id = info[1][0], subId = info[1][1];
				var size = info[2][0], subSize = info[2][1];
				var date = info[3][0], subDate = info[3][1];
				if (subProject) project += ' (' + subProject + ')';
				id = '#' + id;
				if (subId) id += '#' + subId;
				if (subSize) size += ' (' + subSize + ')';
				date = date.slice(0, 2) + '/' + date.slice(2, 4) + '/20' + date.slice(4,6);
				if (subDate) date += ' (' + subDate + ')';
				filenameInfo = [project, date, id, size].join(' - ');
			}
			var profileInfo = "";
			var network = "Cross-Network", platform = "Cross-Platform", format = "Standard", layout = "Fixed";
			if (profile(POLYAD))
			{
				network = "PolyAd";
			}
			else if (profile(ECLICK))
			{
				network = "EClick";
			}
			else if (profile(DFP))
			{
				network = "DFP";
			}
			if (profile(MOBILE_ONLY))
			{
				platform = "Mobile Only";
			}
			else if (profile(PC_ONLY))
			{
				platform = "PC Only";
			}
			if (profile(RMD))
			{
				format = "Rich Media";
			}
			if (profile(RESP))
			{
				layout = "Responsive";
			}
			profileInfo = '[' + [network, platform, format, layout].join(', ') + ']';
			title = filenameInfo + ' ' + profileInfo;
			document.title = title;
			window.title = title;
			window.network = network;
			window.platform = platform;
			window.format = format;
			window.layout = layout;
		}
		function turnOffTheLight()
		{
			if (!isPreview) return;
			if (darkBackground)
			{
				
				html.style.backgroundColor = "#333333";
			}
		}
		function hideBackupImage()
		{
			if (!isPreview) return;
			
			hide(backupAnchor);
		}
		function enablePreviewMode()
		{
			if (!isPreview) return;
			alignToCenter();
			turnOffTheLight();
			
			loadFavicon('https://fpt.com.vn/Content/home/images/favicon.png');
		}
		
		
		
		function sendReadyMessage()
		{
			if (isSyncPlay)
			{
				sendMessage("ready,sync");
			}
			else
			{
				var message;
				if (profile(DFP))
				{
					if (readyMessage)
					{
						message = readyMessage;
						message.params.id = zoneid;
					}
					else
					{
						message = "ready,0,0";
						if (readyID) message += "," + readyID;
					}
				}
				
				else
				{
					message = "ready,0,0";
					if (readyID) message += "," + readyID;
				}
				if (message) sendMessage(message);
			}
		}
		function visibilityOptimization()
		{
			var hidden, visibilityChange;
			
			if (typeof document.hidden !== "undefined")
			{ 
				hidden = "hidden";
				visibilityChange = "visibilitychange";
			}
			else if (typeof document.mozHidden !== "undefined")
			{
				hidden = "mozHidden";
				visibilityChange = "mozvisibilitychange";
			}
			else if (typeof document.msHidden !== "undefined")
			{
				hidden = "msHidden";
				visibilityChange = "msvisibilitychange";
			}
			else if (typeof document.webkitHidden !== "undefined")
			{
				hidden = "webkitHidden";
				visibilityChange = "webkitvisibilitychange";
			}
			window.hidden = hidden;
			window.isWithinVisualViewport = true; 
			if (hidden !== undefined)
			{
				document.addEventListener(visibilityChange,	function()
				{
					checkFreezingState();
				});
			}
			var isDFP = profile(DFP);
			var isEclick = profile(ECLICK);
			
			
			
			if (!isDFP && !isEclick && !isPreview && useVisibilityOptimization)
			{
				
				window.isWithinVisualViewport = false;
				checkFreezingState(); 
				window.addEventListener("message", function (e)
				{
					var params = e.data.split(',');
					var action = params[0];
					switch (action)
					{
						case "play":
							onScrollIntoView();
							break;
						case "pause":
							onScrollOutOfView();
							break;
						default:
							break;
					}
				});
			}
			else
			{
				checkFreezingState(); 
			}
		}
		function profile(flag)
		{
			return PROFILE == (PROFILE | flag);
		}
		function onScrollIntoView()
		{
			isWithinVisualViewport = true;
			checkFreezingState();
		}
		function onScrollOutOfView()
		{
			isWithinVisualViewport = false;
			checkFreezingState();
		}
		function checkFreezingState()
		{
			var isActive, isVisible;
			if (hidden === undefined)
			{
				isActive = true;
			}
			else
			{
				isActive = !document[hidden];
			}
			var isVisible = isActive && isWithinVisualViewport;
			isVisible ? unfreeze('checkFreezingState') : freeze('checkFreezingState');
		}

		function freeze(origin)
		{
			createjs.Ticker.removeEventListener("tick", stage);
		}
		function unfreeze(origin)
		{
			createjs.Ticker.addEventListener("tick", stage);
			
			if (origin != 'fnStartAnimation') hide(backupAnchor);
		}
		function handleReplayMessage()
		{
			window.addEventListener("message", function (e)
			{
				var data = e.data;
				if (typeof data != "string") return;
				var params = data.split(',');
				var action = params[0];
				switch (action)
				{
					case "replay":
						replayAd();
						break;
					default:
						break;
				}
			});
		}
		function handleFocusing()
		{
			
			window.hasFocus = false;
			window.addEventListener('blur', function(){hasFocus = false;});
			window.addEventListener('focus', function(){hasFocus = true;});
		}
		function replayAd()
		{
			root.gotoAndPlay(0);
			root.paused = false;
		}
		function replaySync(targetIdList)
		{
			replayAd();
			for (var i = 0, n = targetIdList.length; i < n; ++i)
			{
				sendMessage('replay,0,0,' + targetIdList[i]);
			}
		}
		function alignToCenter()
		{
			
			moveCanvas((viewportWidth - initialWidth) / 2, (viewportHeight - initialHeight) / 2);
			
			
			
			
			
		}
		function alignToTop()
		{
			moveCanvas((viewportWidth - initialWidth) / 2, 0);
		}
		function autoAlignToCenter()
		{
			alignToCenter();
			window.addEventListener("resize", alignToCenter);
			window.autoAlignToCenterInterval = setInterval(alignToCenter, 10);
			
		}
		function autoAlignToTop()
		{
			alignToTop();
			window.addEventListener("resize", alignToTop);
			window.autoAlignToTopInterval = setInterval(alignToTop, 10);
			
		}
		function closeAd()
		{
			sendMessage('close,0,0');
			freeze();
			destroyVideos();
			hide(body);
		}
		function closePopupAd()
		{
			sendMessage('closepopup,0,0');
			freeze();
			destroyVideos();
			hide(body);
		}
		function destroyVideos()
		{
			var videoList = document.getElementsByTagName("video");
			for (var i = 0, n = videoList.length; i < n; ++i)
			{
				var video = videoList[i];
					video.pause();
					
					
					video.parentNode.removeChild(video);
			}
		}
		function snapBitmapToPixel()
		{
			
			stage.snapToPixelEnabled = true;
			
			createjs.DisplayObject.prototype.snapToPixel = false;
			
			createjs.Bitmap.prototype.snapToPixel = true;
		}
		function stopAll(content, excludeList)
		{
			try
			{
				var i, n;
				if (excludeList)
				{
					var excludeDict = {};
					for (i = 0, n = excludeList.length; i < n; ++i)
					{
						var excludeItem = excludeList[i];
						if (!excludeItem)
						{
							
							
							trace("one or more excluding item(s) are not exist");
							continue;
						}
						if (!isMovieClip(excludeItem)) continue;
						excludeDict[excludeItem.id] = true;
					}
				}
				if (isMovieClip(content))
				{
					content.stop();
				}
				if (hasChildren(content))
				{
					for (i = 0, n = content.numChildren; i < n; ++i)
					{
						var child = content.getChildAt(i);
						if (!isMovieClip(child)) continue;
						if (excludeDict && excludeDict[child.id]) continue;
						if (hasChildren(child))
						{
							stopAll(child);
						}
						else
						{
							child.stop();
						}
					}
				}
			}
			catch(e)
			{
				trace(e);
			}
		}
		function isMovieClip(object)
		{
			return typeof(object.stop) == "function";
		}
		function hasChildren(object)
		{
			return (object.numChildren);
		}
		function getURL(url, forceTarget)
		{
			if (!forceTarget)
			{
				window.open(url, targetWindow);
			}
			else
			{
				window.open(url, forceTarget);
			}
		}
		
		function tracking(url, includePreviewMode)
		{
			if (isPreview && !includePreviewMode) return;
			var trackingImage = document.createElement('img');
				trackingImage.setAttribute("src", url);
				trackingImage.setAttribute("width", "1px");
				trackingImage.setAttribute("height", "1px");
				trackingImage.setAttribute("border", "0");
				trackingImage.style.position = "absolute";
				trackingImage.style.top = "0px";
				trackingImage.style.left = "0px";
			wrapper.insertBefore(trackingImage, canvas);
		}
		
		function loadIframe(iframe)
		{
			if (!iframe.src)
			{
				trace("iframe src is empty");
				return;
			}
			var element = document.createElement('iframe');
				element.id = iframe.id;
				element.src = iframe.src;
				element.width = iframe.width;
				element.height = iframe.height;
				element.allowtransparency = true;
				element.hspace = '0';
				element.vspace = '0';
				element.style.position = "absolute";
				element.style.left = iframe.x + "px";
				element.style.top = iframe.y + "px";
				element.style.border = "0";
				element.style.zIndex = iframe.bringToFront ? "999" : "-9";
				
				element.marginwidth = '0'; 
				element.marginheight = '0';
				element.frameborder = '0';
				element.scrolling = iframe.scrollEnabled ? 'yes' : 'no';
			wrapper.appendChild(element);
			iframe.element = element;
			return element;
		}
		function unloadIframe(iframe)
		{
			removeID(iframe.id);
		}

		function loadVideo(video, container)
		{
			if (!video.src)
			{
				trace("video src required");
				return;
			}
			if (!video.id)
			{
				trace("video id required");
				return;
			}
			
			var videoWrapper = document.createElement('div');
				videoWrapper.id = video.id;
				videoWrapper.classList.add("videoContainer");
				videoWrapper.style.position = "absolute";
				videoWrapper.style.left = video.x + "px";
				videoWrapper.style.top = video.y + "px";
				videoWrapper.style.width = video.width + "px";
				videoWrapper.style.height = video.height + "px";
				videoWrapper.style.zIndex = video.bringToFront ? "999" : "-9";
				videoWrapper.style.pointerEvents = "none";
			var videoStage = document.createElement('video')
				videoStage.src = video.src;
				videoStage.autoplay = video.autoplay;
				
				
				if (video.loop) videoStage.loop = true;
				
				
				
				
				
				videoStage.muted = window.hasFocus ? false : video.autoplay;
				videoStage.controls = video.controls;
				videoStage.style.width = video.width + "px";
				videoStage.style.height = video.height + "px";
				videoStage.style.backgroundColor = '#000000';
				videoStage.style.position = "absolute";
				videoStage.style.left = "0px";
				videoStage.style.top = "0px";
				videoStage.style.pointerEvents = "auto";
				videoStage.setAttribute("playsinline", "");
				videoStage.setAttribute("webkit-playsinline", "");
				videoStage.addEventListener("error", function(e)
				{
					trace('Video Error: ' + e);
				});
				videoStage.replay = function(unmute)
				{
					if (unmute) videoStage.muted = false;
					videoStage.currentTime = 0;
					videoStage.play(); 
				};
				videoStage.addEventListener("ended", function()
				{
					if (!videoStage.loop)
					{
						
						if (isFirefox)
						{
							if (video.controls)
							{
								unloadVideo(video);
								video.autoplay = false;
								loadVideo(video);
							}
						}
						else
						{
							if (video.poster)
							{
								
								videoStage.load();
							}
							
							videoStage.pause();
						}
					}
				});
				if (video.onComplete) videoStage.addEventListener("ended", video.onComplete);
				if (video.poster) videoStage.poster = video.poster;
				if (video.onClick)
				{
					videoStage.style.cursor = "pointer";
					videoStage.addEventListener("click", video.onClick);
				}
				
				if (video.timeLimit)
				{
					video.firstView = true;
					videoStage.addEventListener("timeupdate", function()
					{
						var currentTime = videoStage.currentTime;
						if (currentTime >= video.timeLimit && video.firstView && !window.hasFocus)
						{
							video.firstView = false;
							videoStage.pause();
							videoStage.dispatchEvent(new Event("timelimitexceed"));
						}
					});
					videoStage.addEventListener("ended", function()
					{
						var currentTime = videoStage.currentTime;
						if (currentTime >= video.timeLimit)
						{
							videoStage.pause();
							videoStage.dispatchEvent(new Event("timelimitexceed"));
						}
						
						else
						{
							var remainingTime = video.timeLimit - currentTime;
							window.waitingForTimeLimit = setInterval(
								function()
								{
									clearInterval(window.waitingForTimeLimit);
									videoStage.pause();
									videoStage.dispatchEvent(new Event("timelimitexceed"));
								}, remainingTime*1000
							)
						}
					});
				}
				Object.defineProperty(videoStage, "visible",
				{
					get()
					{
						return videoWrapper.style.visibility == "visible";
					},
					set(value)
					{
						videoWrapper.style.visibility = value ? "visible" : "hidden";
					}
				});
				Object.defineProperty(videoStage, "x",
				{
					get()
					{
						return parseInt(videoWrapper.style.left);
					},
					set(value)
					{
						videoWrapper.style.left = value + "px";
					}
				});
				Object.defineProperty(videoStage, "y",
				{
					get()
					{
						return parseInt(videoWrapper.style.top);
					},
					set(value)
					{
						videoWrapper.style.top = value + "px";
					}
				});
				
				videoStage.move = function(x, y)
				{
					x = Math.round(x);
					y = Math.round(y);
					videoStage.x = x;
					videoStage.y = y;
				};
				videoStage.resize = function(width, height)
				{
					width = Math.round(width);
					height = Math.round(height);
					videoStage.style.width = width + "px";
					videoStage.style.height = height + "px";
					videoStage.createBorder();
				};
				videoWrapper.appendChild(videoStage);
				if (!video.borderColor) video.borderColor = "#FFF";
				videoStage.createBorder = function()
				{
					if (videoStage.border)
					{
						videoWrapper.removeChild(videoStage.border);
					}
					var videoBorder = document.createElement('div');
						videoBorder.style.position = "absolute";
						videoBorder.style.left = "0px";
						videoBorder.style.top = "0px";
						videoBorder.style.width = parseInt(videoStage.style.width) + "px";
						videoBorder.style.height = parseInt(videoStage.style.height) + "px";
					if (video.borderThickness) videoBorder.style.boxShadow = "inset 0px 0px 0px " + video.borderThickness + "px " + video.borderColor;
					videoStage.border = videoBorder;
					videoWrapper.appendChild(videoBorder);
				};
				videoStage.createBorder();
				wrapper.appendChild(videoWrapper);
			video.element = videoStage;
			videoStage.properties = video;
			videoStage.container = container;

			var divisor = 25;
			var videos_status = {};
			var advertiser = index_brand; 
			var campaign = campaign_name; 
			var adFormat = "Display Ads"; 
			var zonePosition = video.zonePosition;
			var zoneCategory = video.zoneCategory;
			if (!zonePosition) zonePosition = "Undefined Position"; 
			if (!zoneCategory) zoneCategory = "Undefined Category"; 
			function GTMTracking(e)
			{
				var videoStage = e.target;
				var videoId = video.id;
				switch (e.type)
				{
					case 'timeupdate':
						videos_status[videoId].current = Math.round(videoStage.currentTime);
						var pct = Math.floor(100 * videos_status[videoId].current / videoStage.duration);
						for (var j in videos_status[videoId]._progress_markers)
						{
							if (pct >= j && j > videos_status[videoId].greatest_marker)
							{
								videos_status[videoId].greatest_marker = j;
							}
						}
						if (videos_status[videoId].greatest_marker && !videos_status[videoId]._progress_markers[videos_status[videoId].greatest_marker])
						{
							videos_status[videoId]._progress_markers[videos_status[videoId].greatest_marker] = true;
							dataLayer.push({
								"event"			:	"PlayerEvent",
								"player_action"	:	"Progress %" + videos_status[videoId].greatest_marker,
								"Advertiser"	:	advertiser,
								"Campaign"		:	campaign,
								"EventLabel"	:	campaign_name,
								"AdFormat"		:	adFormat,
								"ZonePosition"	:	zonePosition,
								"Category"		:	zoneCategory
							});
							
						}
						break;
					case 'play':
						dataLayer.push({
							"event"			:	"PlayerEvent",
							"player_action"	:	"Video Play",
							"Advertiser"	:	advertiser,
							"Campaign"		:	campaign,
							"EventLabel"	:	campaign_name,
							"AdFormat"		:	adFormat,
							"ZonePosition"	:	zonePosition,
							"Category"		:	zoneCategory
						});
						
						break;
					case 'pause':
						dataLayer.push({
							"event"			:	"PlayerEvent",
							"player_action"	:	"Video Pause",
							"Advertiser"	:	advertiser,
							"Campaign"		:	campaign,
							"EventLabel"	:	campaign_name,
							"AdFormat"		:	adFormat,
							"ZonePosition"	:	zonePosition,
							"Category"		:	zoneCategory
						});
						
						break;
					case 'ended':
						dataLayer.push({
							"event"			:	"PlayerEvent",
							"player_action"	:	"Video Complete",
							"Advertiser"	:	advertiser,
							"Campaign"		:	campaign,
							"EventLabel"	:	campaign_name,
							"AdFormat"		:	adFormat,
							"ZonePosition"	:	zonePosition,
							"Category"		:	zoneCategory
						});
						
						break;
					default:
						break;
				}
			}
			videos_status[video.id] = {};
			videos_status[video.id].greatest_marker = 0;
			videos_status[video.id]._progress_markers = {};
			for (j = 0; j < 100; j++)
			{
				videos_status[video.id].progress_point = divisor * Math.floor(j / divisor);
				videos_status[video.id]._progress_markers[videos_status[video.id].progress_point] = false;
			}
			videos_status[video.id].current = 0;
			videoStage.addEventListener("play", GTMTracking);
			videoStage.addEventListener("pause", GTMTracking);
			videoStage.addEventListener("ended", GTMTracking);
			videoStage.addEventListener("timeupdate", GTMTracking);

			return videoStage;
		}
		function unloadVideo(video)
		{
			video.element.pause();
			removeID(video.id);
		}
		
		
		function captureVideo(videoStage)
		{
			
			var videoNaturalWidth = videoStage.videoWidth;
			var videoNaturalHeight = videoStage.videoHeight;
			
			var videoActualWidth = parseInt(videoStage.style.width);
			var videoActualHeight = parseInt(videoStage.style.height);
			
			var videoScale = Math.min(videoActualWidth / videoNaturalWidth, videoActualHeight / videoNaturalHeight);
			var videoWidth = videoNaturalWidth * videoScale;
			var videoHeight = videoNaturalHeight * videoScale;
			var videoCapture = new createjs.Bitmap(videoStage);
				videoCapture.scaleX = videoScale;
				videoCapture.scaleY = videoScale;
				videoCapture.x = (videoActualWidth - videoWidth) / 2;
				videoCapture.y = (videoActualHeight - videoHeight) / 2;
			var videoBackground = new createjs.Shape();
				videoBackground.graphics.beginFill(videoStage.style.backgroundColor).drawRect(0, 0, videoActualWidth, videoActualHeight);
			var holder = new createjs.Container();
				holder.addChild(videoBackground);
				holder.addChild(videoCapture);
				holder.cache(0, 0, videoActualWidth, videoActualHeight);
			return holder;
		}
		function removeID(id)
		{
			var element = document.getElementById(id);
			if (element) element.parentNode.removeChild(element);
		}

		function enableResizingSupport()
		{
			enableResizingSupportFor = function(mc)
			{
				mc.exportWidth = mc.getBounds()["width"];
				mc.exportHeight = mc.getBounds()["height"];
				Object.defineProperty(mc, 'width',
				{
					get: function()
					{
						return mc.scaleX * mc.exportWidth;
					},
					set: function(value)
					{
						mc.scaleX = value / mc.exportWidth;
						var resizeEvent = new createjs.Event("resize", false, false);
						mc.dispatchEvent(resizeEvent);
					}
				});
				Object.defineProperty(mc, 'height',
				{
					get: function()
					{
						return mc.scaleY * mc.exportHeight;
					},
					set: function(value)
					{
						mc.scaleY = value / mc.exportHeight;
						var resizeEvent = new createjs.Event("resize", false, false);
						mc.dispatchEvent(resizeEvent);
					}
				});
				mc.resize = function(w, h)
				{
					mc.scaleX = w / mc.exportWidth;
					mc.scaleY = h / mc.exportHeight;
					var resizeEvent = new createjs.Event("resize", false, false);
					mc.dispatchEvent(resizeEvent);
				}
				mc.move = function(x, y)
				{
					mc.x = x;
					mc.y = y;
				}
			}
			enableResizingSupportLoop = function(mc)
			{
				try
				{
					if (typeof(mc.stop) == "function")
					{
						enableResizingSupportFor(mc);
					}
					if (mc.numChildren)
					{
						var child;
						var n = mc.numChildren;
						for (var i = 0; i < n; ++i)
						{
							child = mc.getChildAt(i);
							if (child.numChildren)
								enableResizingSupportLoop(child);
							else if (typeof(child.stop) == "function")
								enableResizingSupportFor(child);
						}
					}
				}
				catch(e)
				{
					trace(e);
				}
			}
			enableResizingSupportLoop(root);
		}

		var campaign_name, index_brand, index_industrial; 
		var ADP_TRACKING = (function()
		{
			loadJs("https://la2.vnecdn.net/static/adp_banner.js");
			var params, regex, matches;
			regex = /&campaign_name=(.*)&index_brand=(.*)&index_industrial=(.*)/; 
			matches = decodeURIComponent(window.search).match(regex);
			if(!matches) return;
			campaign_name	= matches[1] || "";
			index_brand	  = matches[2] || "";
			index_industrial = matches[3] || "";
			
			anchor.addEventListener("click", function()
			{
				var logForm = window._logForm || (window._logForm = []);
					logForm.push({
						"campaign_name"	: campaign_name,
						"engagement_type"  : 1001,
						"index_brand"	  : index_brand,
						"index_industrial" : index_industrial
					})
				
			}, false);
		})();
	</script>
	<style>
		:focus
		{
			outline :none;
		}
	</style>
<!--<![endif]-->
</body>
</html>:"coupon",Tc:"item_list_name",
cf:"list_name",Di:"promotions",Uc:"shipping",df:"tax",Fd:"engagement_time_msec",Gd:"enhanced_client_id",Hd:"enhanced_conversions",lg:"enhanced_conversions_automatic_settings",Id:"estimated_delivery_date",ef:"euid_logged_in_state",Vc:"event_callback",Ek:"event_category",vb:"event_developer_id_string",Fk:"event_label",mg:"event",Jd:"event_settings",Kd:"event_timeout",Gk:"description",Hk:"fatal",Ei:"experiments",ff:"firebase_id",Ld:"first_party_collection",Md:"_x_20",kb:"_x_19",ng:"fledge",og:"flight_error_code",
pg:"flight_error_message",Fi:"fl_activity_category",Gi:"fl_activity_group",qg:"fl_advertiser_id",Hi:"fl_ar_dedupe",rg:"match_id",Ii:"fl_random_number",Ji:"tran",Ki:"u",Nd:"gac_gclid",oc:"gac_wbraid",sg:"gac_wbraid_multiple_conversions",ug:"ga_restrict_domain",vg:"ga_temp_client_id",Od:"gdpr_applies",wg:"geo_granularity",wb:"value_callback",lb:"value_key",Ik:"google_ono",Kb:"google_signals",xg:"google_tld",Pd:"groups",yg:"gsa_experiment_id",zg:"iframe_state",Wc:"ignore_referrer",hf:"internal_traffic_results",
Lb:"is_legacy_converted",yb:"is_legacy_loaded",Qd:"is_passthrough",jf:"_lps",La:"language",kf:"legacy_developer_id_string",Ma:"linker",qc:"accept_incoming",zb:"decorate_forms",W:"domains",Mb:"url_position",Ag:"method",Jk:"name",Xc:"new_customer",Bg:"non_interaction",Li:"optimize_id",Mi:"page_hostname",Yc:"page_path",Na:"page_referrer",Ab:"page_title",Cg:"passengers",Dg:"phone_conversion_callback",Ni:"phone_conversion_country_code",Eg:"phone_conversion_css_class",Oi:"phone_conversion_ids",Fg:"phone_conversion_number",
Gg:"phone_conversion_options",Hg:"_protected_audience_enabled",Zc:"quantity",Rd:"redact_device_info",lf:"referral_exclusion_definition",Nb:"restricted_data_processing",Pi:"retoken",Kk:"sample_rate",nf:"screen_name",Bb:"screen_resolution",Qi:"search_term",Sa:"send_page_view",Ob:"send_to",Sd:"server_container_url",ad:"session_duration",Td:"session_engaged",pf:"session_engaged_time",Cb:"session_id",Ud:"session_number",bd:"delivery_postal_code",Lk:"temporary_client_id",qf:"topmost_url",Ri:"tracking_id",
rf:"traffic_type",ya:"transaction_id",Pb:"transport_url",Ig:"trip_type",Qb:"update",Db:"url_passthrough",Wd:"_user_agent_architecture",Xd:"_user_agent_bitness",Yd:"_user_agent_full_version_list",Zd:"_user_agent_mobile",ae:"_user_agent_model",be:"_user_agent_platform",ce:"_user_agent_platform_version",de:"_user_agent_wow64",Ba:"user_data",Jg:"user_data_auto_latency",Kg:"user_data_auto_meta",Lg:"user_data_auto_multi",Mg:"user_data_auto_selectors",Ng:"user_data_auto_status",ee:"user_data_mode",fe:"user_data_settings",
Ta:"user_id",Ya:"user_properties",Si:"_user_region",Og:"us_privacy_string",ia:"value",sc:"wbraid",Pg:"wbraid_multiple_conversions",Yi:"_host_name",Zi:"_in_page_command",aj:"_is_passthrough_cid",fd:"non_personalized_ads",ne:"_sst_parameters",jb:"conversion_label",Aa:"page_location",xb:"global_developer_id_string",Vd:"tc_privacy_string"}},ai={},bi=Object.freeze((ai[N.g.ja]=1,ai[N.g.Ye]=1,ai[N.g.yd]=1,ai[N.g.ib]=1,ai[N.g.Z]=1,ai[N.g.Wa]=1,ai[N.g.Ka]=1,ai[N.g.Xa]=1,ai[N.g.kc]=1,ai[N.g.Qc]=1,ai[N.g.Ra]=
1,ai[N.g.mc]=1,ai[N.g.Rc]=1,ai[N.g.ba]=1,ai[N.g.ig]=1,ai[N.g.Vc]=1,ai[N.g.Jd]=1,ai[N.g.Kd]=1,ai[N.g.Ld]=1,ai[N.g.ug]=1,ai[N.g.Kb]=1,ai[N.g.xg]=1,ai[N.g.Pd]=1,ai[N.g.hf]=1,ai[N.g.Lb]=1,ai[N.g.yb]=1,ai[N.g.Ma]=1,ai[N.g.lf]=1,ai[N.g.Nb]=1,ai[N.g.Sa]=1,ai[N.g.Ob]=1,ai[N.g.Sd]=1,ai[N.g.ad]=1,ai[N.g.pf]=1,ai[N.g.bd]=1,ai[N.g.Pb]=1,ai[N.g.Qb]=1,ai[N.g.fe]=1,ai[N.g.Ya]=1,ai[N.g.ne]=1,ai));Object.freeze([N.g.Aa,N.g.Na,N.g.Ab,N.g.La,N.g.nf,N.g.Ta,N.g.ff,N.g.xi]);
var ci={},di=Object.freeze((ci[N.g.ki]=1,ci[N.g.li]=1,ci[N.g.mi]=1,ci[N.g.ni]=1,ci[N.g.oi]=1,ci[N.g.ri]=1,ci[N.g.si]=1,ci[N.g.ui]=1,ci[N.g.vi]=1,ci[N.g.xd]=1,ci)),ei={},fi=Object.freeze((ei[N.g.dg]=1,ei[N.g.eg]=1,ei[N.g.ac]=1,ei[N.g.bc]=1,ei[N.g.fg]=1,ei[N.g.Hb]=1,ei[N.g.fc]=1,ei[N.g.fb]=1,ei[N.g.sb]=1,ei[N.g.hb]=1,ei[N.g.ra]=1,ei[N.g.hc]=1,ei[N.g.Fa]=1,ei[N.g.gg]=1,ei)),gi=Object.freeze([N.g.ja,N.g.ib,N.g.mc,N.g.Wc,N.g.Qb]),hi=Object.freeze([].concat(gi)),ii=Object.freeze([N.g.Ka,N.g.Kd,N.g.ad,N.g.pf,
N.g.Fd]),ji=Object.freeze([].concat(ii)),ki={},li=(ki[N.g.J]="1",ki[N.g.R]="2",ki[N.g.N]="3",ki[N.g.Ea]="4",ki),mi={},ni=Object.freeze((mi[N.g.ja]=1,mi[N.g.yd]=1,mi[N.g.Ga]=1,mi[N.g.Ib]=1,mi[N.g.Ze]=1,mi[N.g.zd]=1,mi[N.g.Ad]=1,mi[N.g.Bd]=1,mi[N.g.Z]=1,mi[N.g.Cd]=1,mi[N.g.Qa]=1,mi[N.g.Ha]=1,mi[N.g.Wa]=1,mi[N.g.Ka]=1,mi[N.g.Xa]=1,mi[N.g.Ra]=1,mi[N.g.xa]=1,mi[N.g.Dd]=1,mi[N.g.ba]=1,mi[N.g.Bi]=1,mi[N.g.Hd]=1,mi[N.g.Id]=1,mi[N.g.ff]=1,mi[N.g.Ld]=1,mi[N.g.Lb]=1,mi[N.g.yb]=1,mi[N.g.La]=1,mi[N.g.Xc]=1,mi[N.g.Aa]=
1,mi[N.g.Na]=1,mi[N.g.Dg]=1,mi[N.g.Eg]=1,mi[N.g.Fg]=1,mi[N.g.Gg]=1,mi[N.g.Nb]=1,mi[N.g.Sa]=1,mi[N.g.Ob]=1,mi[N.g.Sd]=1,mi[N.g.bd]=1,mi[N.g.ya]=1,mi[N.g.Pb]=1,mi[N.g.Qb]=1,mi[N.g.Db]=1,mi[N.g.Ba]=1,mi[N.g.Ta]=1,mi[N.g.ia]=1,mi)),oi={},pi=Object.freeze((oi[N.g.sk]="s",oi[N.g.uk]="y",oi[N.g.rk]="p",oi[N.g.tk]="h",oi[N.g.pk]="a",oi[N.g.qk]="m",oi));Object.freeze(N.g);var qi={},ri=z.google_tag_manager=z.google_tag_manager||{},si=Math.random();qi.Ug="41a0";qi.me=Number("0")||0;qi.fa="dataLayer";qi.mk="ChAIgLWjrQYQgoHTjb2J8tFOEicA1yOXrXMX9pLZeij3wDU3wbekntGVS9I2YqngufdHHebHdave40AaAkeI";var ti={__cl:1,__ecl:1,__ehl:1,__evl:1,__fal:1,__fil:1,__fsl:1,__hl:1,__jel:1,__lcl:1,__sdl:1,__tl:1,__ytl:1},ui={__paused:1,__tg:1},vi;for(vi in ti)ti.hasOwnProperty(vi)&&(ui[vi]=1);var wi=Oa(""),xi,yi=!1;yi=!0;
xi=yi;var zi,Ai=!1;zi=Ai;var Bi,Ci=!1;Bi=Ci;var Di,Ei=!1;Di=Ei;qi.wd="www.googletagmanager.com";
var Fi=""+qi.wd+(xi?"/gtag/js":"/gtm.js"),Gi=null,Hi=null,Ii={},Ji={},Ki={},Li=function(){var a=ri.sequence||1;ri.sequence=a+1;return a};qi.lk="";var Mi="";qi.zf=Mi;var Ni=function(){return""};var Oi=new Ka,Pi={},Qi={},Ti={name:qi.fa,set:function(a,b){nb($a(a,b),Pi);Ri()},get:function(a){return Si(a,2)},reset:function(){Oi=new Ka;Pi={};Ri()}},Si=function(a,b){return 2!=b?Oi.get(a):Ui(a)},Ui=function(a,b){var c=a.split(".");b=b||[];for(var d=Pi,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==b.indexOf(d))return}return d},Vi=function(a,b){Qi.hasOwnProperty(a)||(Oi.set(a,b),nb($a(a,b),Pi),Ri())},Wi=function(){for(var a=["gtm.allowlist","gtm.blocklist","gtm.whitelist",
"gtm.blacklist","tagTypeBlacklist"],b=0;b<a.length;b++){var c=a[b],d=Si(c,1);if(Ha(d)||mb(d))d=nb(d);Qi[c]=d}},Ri=function(a){l(Qi,function(b,c){Oi.set(b,c);nb($a(b),Pi);nb($a(b,c),Pi);a&&delete Qi[b]})},Xi=function(a,b){var c,d=1!==(void 0===b?2:b)?Ui(a):Oi.get(a);"array"===jb(d)||"object"===jb(d)?c=nb(d):c=d;return c};var dj=[];function ej(a){switch(a){case 25:return 3;case 48:return 14;case 59:return 11;case 60:return 12;case 63:return 10;case 65:return 13;case 61:return 15;case 102:return 16;case 105:return 17}}function Q(a){dj[a]=!0;var b=ej(a);b&&(Rf[b]=!0)}
Q(5);Q(6);Q(7);Q(9);Q(10);
Q(14);Q(11);
Q(15);Q(18);
Q(19);Q(20);Q(21);
Q(23);Q(24);Q(31);Q(32);Q(33);Q(35);Q(36);
Q(40);Q(42);Q(45);Q(46);Q(47);
Q(49);Q(50);Q(51);
Q(53);Q(54);Q(55);Q(56);
Q(61);
Q(63);Q(64);
Q(67);Q(68);Q(69);

Q(74);
Q(87);Q(91);Q(96);
function R(a){return!!dj[a]}var ij=function(a){Ab("HEALTH",a)};var pj;try{pj=JSON.parse(yb("eyIwIjoiRVMiLCIxIjoiRVMtQ1QiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5lcyIsIjQiOiJyZWdpb24xIiwiNSI6ZmFsc2UsIjYiOnRydWUsIjciOiJhZF9zdG9yYWdlfGFuYWx5dGljc19zdG9yYWdlfGFkX3VzZXJfZGF0YXxhZF9wZXJzb25hbGl6YXRpb24ifQ"))}catch(a){L(123),ij(2),pj={}}
var qj=function(){return pj["0"]||""},rj=function(){return pj["1"]||""},sj=function(){var a=!1;return a},tj=function(){var a="";return a},uj=function(){var a=!1;a=!!pj["5"];return a},vj=function(){var a="";
return a};var wj=new function(a,b){this.h=a;this.defaultValue=void 0===b?!1:b}(1933);var xj=function(a){xj[" "](a);return a};xj[" "]=function(){};var zj=function(){var a=yj,b="th";if(a.th&&a.hasOwnProperty(b))return a.th;var c=new a;return a.th=c};var yj=function(){var a={};this.h=function(){var b=wj.h,c=wj.defaultValue;return null!=a[b]?a[b]:c};this.s=function(){a[wj.h]=!0}};var Aj=!1,Bj=!1,Cj={},Dj={},Ej=!1,Fj={ad_storage:!1,ad_user_data:!1,ad_personalization:!1};function Gj(){var a=Ec("google_tag_data",{});return a.ics=a.ics||new Hj}var Hj=function(){this.entries={};this.cps={};this.waitPeriodTimedOut=this.wasSetLate=this.accessedAny=this.accessedDefault=this.usedSetCps=this.usedImplicit=this.usedUpdate=this.usedDefault=this.usedDeclare=this.active=!1;this.h=[]};
Hj.prototype.default=function(a,b,c,d,e,f){this.usedDefault||this.usedDeclare||!this.accessedDefault&&!this.accessedAny||(this.wasSetLate=!0);this.usedDefault=this.active=!0;Ab("TAGGING",19);void 0==b?Ab("TAGGING",18):Ij(this,a,"granted"===b,c,d,e,f)};Hj.prototype.waitForUpdate=function(a,b){for(var c=0;c<a.length;c++)Ij(this,a[c],void 0,void 0,"","",b)};
var Ij=function(a,b,c,d,e,f,g){var h=a.entries,m=h[b]||{},n=m.region,p=d&&k(d)?d.toUpperCase():void 0;e=e.toUpperCase();f=f.toUpperCase();if(Jj(p,n,e,f)){var q=!!(g&&0<g&&void 0===m.update),r={region:p,declare_region:m.declare_region,implicit:m.implicit,default:void 0!==c?c:m.default,declare:m.declare,update:m.update,quiet:q};if(""!==e||!1!==m.default)h[b]=r;q&&z.setTimeout(function(){h[b]===r&&r.quiet&&(Ab("TAGGING",2),a.waitPeriodTimedOut=!0,a.clearTimeout(b,void 0),a.notifyListeners())},g)}};
aa=Hj.prototype;aa.clearTimeout=function(a,b){var c=[a],d;for(d in Cj)Cj.hasOwnProperty(d)&&Cj[d]===a&&c.push(d);var e=this.entries[a]||{},f=this.getConsentState(a);if(e.quiet){e.quiet=!1;for(var g=ea(c),h=g.next();!h.done;h=g.next())Kj(this,h.value)}else if(void 0!==b&&f!==b){var m=ea(c);for(h=m.next();!h.done;h=m.next())Kj(this,h.value)}};
aa.update=function(a,b){this.usedDefault||this.usedDeclare||this.usedUpdate||!this.accessedAny||(this.wasSetLate=!0);this.usedUpdate=this.active=!0;if(void 0!=b){var c=this.getConsentState(a),d=this.entries;(d[a]=d[a]||{}).update="granted"===b;this.clearTimeout(a,c)}};
aa.declare=function(a,b,c,d,e){this.usedDeclare=this.active=!0;var f=this.entries,g=f[a]||{},h=g.declare_region,m=c&&k(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(Jj(m,h,d,e)){var n={region:g.region,declare_region:m,declare:"granted"===b,implicit:g.implicit,default:g.default,update:g.update,quiet:g.quiet};if(""!==d||!1!==g.declare)f[a]=n}};aa.implicit=function(a,b){this.usedImplicit=!0;var c=this.entries,d=c[a]=c[a]||{};!1!==d.implicit&&(d.implicit="granted"===b)};
aa.getConsentState=function(a){var b=this.entries,c=b[a]||{},d=c.update;if(void 0!==d)return d?1:2;d=c.default;if(void 0!==d)return d?1:2;if(Cj.hasOwnProperty(a)){var e=b[Cj[a]]||{};d=e.update;if(void 0!==d)return d?1:2;d=e.default;if(void 0!==d)return d?1:2}d=c.declare;if(void 0!==d)return d?1:2;if(Sf(3)){d=c.implicit;if(void 0!==d)return d?3:4;if(Fj.hasOwnProperty(a))return Fj[a]?3:4}return 0};aa.setCps=function(a,b,c,d,e){Lj(this.cps,a,b,c,d,e)&&(this.usedSetCps=!0)};
aa.addListener=function(a,b){this.h.push({consentTypes:a,Gl:b})};var Kj=function(a,b){for(var c=0;c<a.h.length;++c){var d=a.h[c];Ha(d.consentTypes)&&-1!==d.consentTypes.indexOf(b)&&(d.Nj=!0)}};Hj.prototype.notifyListeners=function(a,b){for(var c=0;c<this.h.length;++c){var d=this.h[c];if(d.Nj){d.Nj=!1;try{d.Gl({consentEventId:a,consentPriorityId:b})}catch(e){}}}};function Jj(a,b,c,d){return""===c||a===d?!0:a===c?b!==d:!a&&!b}
function Lj(a,b,c,d,e,f){var g=a[b]||{},h=g.region,m=d&&k(d)?d.toUpperCase():void 0;e=e.toUpperCase();f=f.toUpperCase();if(Jj(m,h,e,f)){var n={enabled:"granted"===c,region:m};if(""!==e||!1!==g.enabled)return a[b]=n,!0}return!1}
var Mj=function(a){var b=Gj();b.accessedAny=!0;return(k(a)?[a]:a).every(function(c){switch(b.getConsentState(c)){case 1:case 3:return!0;case 2:case 4:return!1;default:return!0}})},Nj=function(a){var b=Gj();b.accessedAny=!0;return b.getConsentState(a)},Oj=function(a){var b=Gj();b.accessedAny=!0;return!(b.entries[a]||{}).quiet},Pj=function(){if(!zj().h())return!1;var a=Gj();a.accessedAny=!0;return a.active},Qj=function(a,b){Gj().addListener(a,b)},Rj=function(a,b){Gj().notifyListeners(a,b)},Sj=function(a,
b){function c(){for(var e=0;e<b.length;e++)if(!Oj(b[e]))return!0;return!1}if(c()){var d=!1;Qj(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Tj=function(a,b){function c(){for(var h=[],m=0;m<e.length;m++){var n=e[m];Mj(n)&&!f[n]&&h.push(n)}return h}function d(h){for(var m=0;m<h.length;m++)f[h[m]]=!0}var e=k(b)?[b]:b,f={},g=c();g.length!==e.length&&(d(g),Qj(e,function(h){function m(q){0!==q.length&&(d(q),h.consentTypes=q,a(h))}var n=c();if(0!==n.length){var p=Object.keys(f).length;n.length+p>=e.length?
m(n):z.setTimeout(function(){m(c())},500)}}))};function Uj(){}function Vj(){};var Wj=[N.g.J,N.g.R,N.g.N,N.g.Ea],Xj=function(a){for(var b=a[N.g.Va],c=Array.isArray(b)?b:[b],d={Ce:0};d.Ce<c.length;d={Ce:d.Ce},++d.Ce)l(a,function(e){return function(f,g){if(f!==N.g.Va){var h=c[e.Ce],m=qj(),n=rj();Bj=!0;Aj&&Ab("TAGGING",20);Gj().declare(f,g,h,m,n)}}}(d))},Yj=function(a){var b=a[N.g.Va];b&&L(40);var c=a[N.g.We];c&&L(41);for(var d=Ha(b)?b:[b],e={De:0};e.De<d.length;e={De:e.De},++e.De)l(a,function(f){return function(g,h){if(g!==N.g.Va&&g!==N.g.We){var m=d[f.De],n=Number(c),p=qj(),
q=rj();Aj=!0;Bj&&Ab("TAGGING",20);Gj().default(g,h,m,p,q,n)}}}(e))},Zj=function(a,b){l(a,function(c,d){Aj=!0;Bj&&Ab("TAGGING",20);Gj().update(c,d)});Rj(b.eventId,b.priorityId)},ak=function(a){for(var b=a[N.g.Va],c=Array.isArray(b)?b:[b],d={Ee:0};d.Ee<c.length;d={Ee:d.Ee},++d.Ee)l(a,function(e){return function(f,g){if(f!==N.g.Va){var h=c[e.Ee],m=qj(),n=rj();Gj().setCps(f,g,h,m,n)}}}(d))},bk=function(a){for(var b=a[N.g.Va],c=Array.isArray(b)?b:[b],d={kd:0};d.kd<c.length;d={kd:d.kd},++d.kd)a.hasOwnProperty(N.g.ag)&&
l(pi,function(e){return function(f){Lj(Dj,f,a[N.g.ag],c[e.kd],qj(),rj())&&(Ej=!0)}}(d)),l(a,function(e){return function(f,g){f!==N.g.Va&&f!==N.g.ag&&Lj(Dj,f,g,c[e.kd],qj(),rj())&&(Ej=!0)}}(d))},ck=function(a){Array.isArray(a)||(a=[a]);return a.every(function(b){return Mj(b)})},dk=function(a,b){Qj(a,b)},ek=function(a,b){Tj(a,b)},fk=function(a,b){Sj(a,b)},gk=function(){var a=[N.g.J,N.g.Ea,N.g.N];Gj().waitForUpdate(a,500)},hk=function(a){for(var b=ea(a),c=b.next();!c.done;c=b.next()){var d=c.value;Gj().clearTimeout(d,
void 0)}Rj()};var ik=function(a,b,c,d,e,f,g,h,m,n,p){this.eventId=a;this.priorityId=b;this.h=c;this.M=d;this.C=e;this.F=f;this.s=g;this.eventMetadata=h;this.onSuccess=m;this.onFailure=n;this.isGtmEvent=p},jk=function(a,b){var c=[];switch(b){case 3:c.push(a.h);c.push(a.M);c.push(a.C);c.push(a.F);c.push(a.s);break;case 2:c.push(a.h);break;case 1:c.push(a.M);c.push(a.C);c.push(a.F);c.push(a.s);break;case 4:c.push(a.h),c.push(a.M),c.push(a.C),c.push(a.F)}return c},S=function(a,b,c,d){for(var e=ea(jk(a,void 0===d?3:
d)),f=e.next();!f.done;f=e.next()){var g=f.value;if(void 0!==g[b])return g[b]}return c},kk=function(a){for(var b={},c=jk(a,4),d=ea(c),e=d.next();!e.done;e=d.next())for(var f=Object.keys(e.value),g=ea(f),h=g.next();!h.done;h=g.next())b[h.value]=1;return Object.keys(b)},lk=function(a,b,c){function d(n){mb(n)&&l(n,function(p,q){f=!0;e[p]=q})}var e={},f=!1,g=jk(a,void 0===c?3:c);g.reverse();for(var h=ea(g),m=h.next();!m.done;m=h.next())d(m.value[b]);return f?e:void 0},mk=function(a){for(var b=[N.g.Mc,
N.g.Ic,N.g.Jc,N.g.Kc,N.g.Lc,N.g.Nc,N.g.Oc],c=jk(a,3),d=ea(c),e=d.next();!e.done;e=d.next()){for(var f=e.value,g={},h=!1,m=ea(b),n=m.next();!n.done;n=m.next()){var p=n.value;void 0!==f[p]&&(g[p]=f[p],h=!0)}var q=h?g:void 0;if(q)return q}return{}},nk=function(a,b){this.uf=a;this.vf=b;this.C={};this.Sb={};this.h={};this.F={};this.ed={};this.Rb={};this.s={};this.Oa=function(){};this.X=function(){};this.M=!1},ok=function(a,b){a.C=b;return a},pk=function(a,b){a.Sb=b;return a},qk=function(a,b){a.h=b;return a},
rk=function(a,b){a.F=b;return a},sk=function(a,b){a.ed=b;return a},tk=function(a,b){a.Rb=b;return a},uk=function(a,b){a.s=b||{};return a},vk=function(a,b){a.Oa=b;return a},wk=function(a,b){a.X=b;return a},xk=function(a,b){a.M=b;return a},yk=function(a){return new ik(a.uf,a.vf,a.C,a.Sb,a.h,a.F,a.Rb,a.s,a.Oa,a.X,a.M)};function zk(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c};var Ak=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Bk=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Ck=function(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};function Dk(){return Pb?!!Wb&&!!Wb.platform:!1}function Ek(){return Zb("iPhone")&&!Zb("iPod")&&!Zb("iPad")}function Fk(){Ek()||Zb("iPad")||Zb("iPod")};ac();$b()||Zb("Trident")||Zb("MSIE");Zb("Edge");!Zb("Gecko")||-1!=Vb().toLowerCase().indexOf("webkit")&&!Zb("Edge")||Zb("Trident")||Zb("MSIE")||Zb("Edge");-1!=Vb().toLowerCase().indexOf("webkit")&&!Zb("Edge")&&Zb("Mobile");Dk()||Zb("Macintosh");Dk()||Zb("Windows");(Dk()?"Linux"===Wb.platform:Zb("Linux"))||Dk()||Zb("CrOS");Dk()||Zb("Android");Ek();Zb("iPad");Zb("iPod");Fk();Vb().toLowerCase().indexOf("kaios");var Gk=function(a,b,c,d){for(var e=b,f=c.length;0<=(e=a.indexOf(c,e))&&e<d;){var g=a.charCodeAt(e-1);if(38==g||63==g){var h=a.charCodeAt(e+f);if(!h||61==h||38==h||35==h)return e}e+=f+1}return-1},Hk=/#|$/,Ik=function(a,b){var c=a.search(Hk),d=Gk(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))},Jk=/[?&]($|#)/,Kk=function(a,b,c){for(var d,e=a.search(Hk),f=0,g,h=[];0<=(g=Gk(a,f,b,e));)h.push(a.substring(f,
g)),f=Math.min(a.indexOf("&",g)+1||e,e);h.push(a.slice(f));d=h.join("").replace(Jk,"$1");var m,n=null!=c?"="+encodeURIComponent(String(c)):"";var p=b+n;if(p){var q,r=d.indexOf("#");0>r&&(r=d.length);var t=d.indexOf("?"),u;0>t||t>r?(t=r,u=""):u=d.substring(t+1,r);q=[d.slice(0,t),u,d.slice(r)];var v=q[1];q[1]=p?v?v+"&"+p:p:v;m=q[0]+(q[1]?"?"+q[1]:"")+q[2]}else m=d;return m};var Lk=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{xj(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},Mk=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)};function Nk(a){if(!a||!C.head)return null;var b=Ok("META");C.head.appendChild(b);b.httpEquiv="origin-trial";b.content=a;return b}
var Pk=function(a){if(z.top==z)return 0;if(void 0===a?0:a){var b=z.location.ancestorOrigins;if(b)return b[b.length-1]==z.location.origin?1:2}return Lk(z.top)?1:2},Ok=function(a,b){b=void 0===b?document:b;return b.createElement(String(a).toLowerCase())};function Qk(a,b,c,d){d=void 0===d?!1:d;a.google_image_requests||(a.google_image_requests=[]);var e=Ok("IMG",a.document);if(c){var f=function(){if(c){var g=a.google_image_requests,h=Db(g,e);0<=h&&Array.prototype.splice.call(g,h,1)}e.removeEventListener&&e.removeEventListener("load",f,!1);e.removeEventListener&&e.removeEventListener("error",f,!1)};Ck(e,"load",f);Ck(e,"error",f)}d&&(e.attributionSrc="");e.src=b;a.google_image_requests.push(e)}
var Sk=function(a){var b;b=void 0===b?!1:b;var c="https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";Mk(a,function(d,e){if(d||0===d)c+="&"+e+"="+encodeURIComponent(""+d)});Rk(c,b)},Rk=function(a,b){var c=window,d;b=void 0===b?!1:b;d=void 0===d?!1:d;if(c.fetch){var e={keepalive:!0,credentials:"include",redirect:"follow",method:"get",mode:"no-cors"};d&&(e.mode="cors","setAttributionReporting"in XMLHttpRequest.prototype?e.attributionReporting={eventSourceEligible:"true",triggerEligible:"false"}:
e.headers={"Attribution-Reporting-Eligible":"event-source"});c.fetch(a,e)}else Qk(c,a,void 0===b?!1:b,void 0===d?!1:d)};var Tk=function(){};var Uk=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Vk=function(a,b){b=void 0===b?{}:b;this.s=a;this.h=null;this.M={};this.Oa=0;var c;this.X=null!=(c=b.mn)?c:500;var d;this.F=null!=(d=b.Un)?d:!1;this.C=null};sa(Vk,Tk);
var Xk=function(a){return"function"===typeof a.s.__tcfapi||null!=Wk(a)};
Vk.prototype.addEventListener=function(a){var b=this,c={internalBlockOnErrors:this.F},d=Bk(function(){return a(c)}),e=0;-1!==this.X&&(e=setTimeout(function(){c.tcString="tcunavailable";c.internalErrorState=1;d()},this.X));var f=function(g,h){clearTimeout(e);g?(c=g,c.internalErrorState=Uk(c),c.internalBlockOnErrors=b.F,h&&0===c.internalErrorState||(c.tcString="tcunavailable",h||(c.internalErrorState=3))):(c.tcString="tcunavailable",c.internalErrorState=3);a(c)};try{Yk(this,"addEventListener",f)}catch(g){c.tcString=
"tcunavailable",c.internalErrorState=3,e&&(clearTimeout(e),e=0),d()}};Vk.prototype.removeEventListener=function(a){a&&a.listenerId&&Yk(this,"removeEventListener",null,a.listenerId)};
var $k=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var m;if(0===h)if(a.purpose&&a.vendor){var n=Zk(a.vendor.consents,void 0===d?"755":d);m=n&&"1"===b&&a.purposeOneTreatment&&"CH"===a.publisherCC?!0:n&&Zk(a.purpose.consents,b)}else m=!0;else m=1===h?a.purpose&&a.vendor?Zk(a.purpose.legitimateInterests,
b)&&Zk(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return m},Zk=function(a,b){return!(!a||!a[b])},Yk=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.s.__tcfapi){var e=a.s.__tcfapi;e(b,2,c,d)}else if(Wk(a)){al(a);var f=++a.Oa;a.M[f]=c;if(a.h){var g={};a.h.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Wk=function(a){if(a.h)return a.h;var b;a:{for(var c=a.s,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames.__tcfapiLocator)}catch(h){e=
!1}if(e){b=c;break a}var f;b:{try{var g=c.parent;if(g&&g!=c){f=g;break b}}catch(h){}f=null}if(!(c=f))break}b=null}a.h=b;return a.h},al=function(a){a.C||(a.C=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.M[c.callId](c.returnValue,c.success)}catch(d){}},Ck(a.s,"message",a.C))},bl=function(a){if(!1===a.gdprApplies)return!0;void 0===a.internalErrorState&&(a.internalErrorState=Uk(a));return"error"===a.cmpStatus||0!==a.internalErrorState?a.internalBlockOnErrors?
(Sk({e:String(a.internalErrorState)}),!1):!0:"loaded"!==a.cmpStatus||"tcloaded"!==a.eventStatus&&"useractioncomplete"!==a.eventStatus?!1:!0};var cl={1:0,3:0,4:0,7:3,9:3,10:3};function dl(){var a=ri.tcf||{};return ri.tcf=a}
var el=function(){return new Vk(z,{mn:-1})},kl=function(){var a=dl(),b=el();Xk(b)&&!fl()&&!gl()&&L(124);if(!a.active&&Xk(b)){fl()&&(a.active=!0,a.Xb={},a.cmpId=0,a.tcfPolicyVersion=0,Gj().active=!0,a.tcString="tcunavailable");gk();try{b.addEventListener(function(c){if(0!==c.internalErrorState)hl(a),hk([N.g.J,N.g.Ea,N.g.N]),Gj().active=!0;else if(a.gdprApplies=c.gdprApplies,a.cmpId=c.cmpId,a.enableAdvertiserConsentMode=c.enableAdvertiserConsentMode,gl()&&(a.active=!0),!il(c)||fl()||gl()){a.tcfPolicyVersion=
c.tcfPolicyVersion;var d;if(!1===c.gdprApplies){var e={},f;for(f in cl)cl.hasOwnProperty(f)&&(e[f]=!0);d=e;b.removeEventListener(c)}else if(il(c)){var g={},h;for(h in cl)if(cl.hasOwnProperty(h))if("1"===h){var m,n=c,p={Ll:!0};p=void 0===p?{}:p;m=bl(n)?!1===n.gdprApplies||"tcunavailable"===n.tcString||void 0===n.gdprApplies&&!p.Ll||"string"!==typeof n.tcString||!n.tcString.length?!0:$k(n,"1",0):!1;g["1"]=m}else g[h]=$k(c,h,cl[h]);d=g}if(d){a.tcString=c.tcString||"tcempty";a.Xb=d;var q={},r=(q[N.g.J]=
a.Xb["1"]?"granted":"denied",q);!0!==a.gdprApplies?(hk([N.g.J,N.g.Ea,N.g.N]),Gj().active=!0):(r[N.g.Ea]=a.Xb["3"]&&a.Xb["4"]?"granted":"denied","number"===typeof a.tcfPolicyVersion&&4<=a.tcfPolicyVersion?r[N.g.N]=a.Xb["1"]&&a.Xb["7"]?"granted":"denied":hk([N.g.N]),Zj(r,{eventId:0},{gdprApplies:a?a.gdprApplies:void 0,tcString:jl()||""}))}}else hk([N.g.J,N.g.Ea,N.g.N])})}catch(c){hl(a),hk([N.g.J,N.g.Ea,N.g.N]),Gj().active=!0}}};function hl(a){a.type="e";a.tcString="tcunavailable"}
function il(a){return"tcloaded"===a.eventStatus||"useractioncomplete"===a.eventStatus||"cmpuishown"===a.eventStatus}var fl=function(){return!0===z.gtag_enable_tcf_support};function gl(){return!0===dl().enableAdvertiserConsentMode}var jl=function(){var a=dl();if(a.active)return a.tcString},ll=function(){var a=dl();if(a.active&&void 0!==a.gdprApplies)return a.gdprApplies?"1":"0"},ml=function(a){if(!cl.hasOwnProperty(String(a)))return!0;var b=dl();return b.active&&b.Xb?!!b.Xb[String(a)]:!0};var nl=[N.g.J,N.g.R],ol=[N.g.J,N.g.R,N.g.N,N.g.Ea],pl={},ql=(pl[N.g.J]=1,pl[N.g.R]=2,pl);function rl(a){if(void 0===a)return 0;switch(S(a,N.g.ja)){case void 0:return 1;case !1:return 3;default:return 2}}
var sl=function(a){var b=rl(a);if(3===b)return!1;switch(Nj(N.g.Ea)){case 1:case 3:return!0;case 2:return!1;case 4:return 2===b;case 0:return!0;default:return!1}},tl=function(){return Pj()||!Mj(N.g.J)||!Mj(N.g.R)},ul=function(){var a={},b;for(b in ql)ql.hasOwnProperty(b)&&(a[ql[b]]=Nj(b));var c=R(28)&&nl.every(function(e){return Mj(e)}),d=R(26);return c||d?Ne(a,1):Ne(a,0)},vl={},wl=(vl[N.g.J]=0,vl[N.g.R]=1,vl[N.g.N]=2,vl[N.g.Ea]=3,vl);
function xl(a){switch(a){case void 0:return 1;case !0:return 3;case !1:return 2;default:return 0}}
var yl=function(a){for(var b="1",c=0;c<ol.length;c++){var d=b,e,f=ol[c],g=Cj[f];e=void 0===g?0:wl.hasOwnProperty(g)?12|wl[g]:8;var h=Gj();h.accessedAny=!0;var m=h.entries[f]||{};e=e<<2|xl(m.implicit);b=d+(""+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e]+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[xl(m.declare)<<4|xl(m.default)<<2|xl(m.update)])}var n=b,p;p=""+(Pj()<<2|rl(a));return n+p},zl=function(){if(!Mj(N.g.N))return"-";var a=Gj(),b=Ej,c=a.cps,d=
a.usedSetCps,e={};if(b&&d)for(var f in Dj)Dj.hasOwnProperty(f)&&Dj[f].enabled&&c.hasOwnProperty(f)&&c[f].enabled?e[f]={enabled:!0,region:Dj[f].region}:e[f]={enabled:!1,region:Dj[f].region};else{var g=b?Dj:c,h;for(h in g)g.hasOwnProperty(h)&&(e[h]={enabled:g[h].enabled,region:g[h].region})}for(var m={},n=ea(Object.keys(e)),p=n.next();!p.done;p=n.next()){var q=p.value;m[q]=e[q].enabled}for(var r="",t=ea(Object.keys(pi)),u=t.next();!u.done;u=t.next()){var v=u.value;!1!==m[v]&&(r+=pi[v])}return""===r?
"-":r},Al=function(){return pj["6"]||(fl()||gl())&&"1"===ll()?"1":"0"},Bl=function(){return(pj["6"]?!0:!(!fl()&&!gl())&&"1"===ll())||Gj().usedSetCps||!Mj(N.g.N)},Cl=function(){var a="0",b="0",c;var d=dl();c=d.active?d.cmpId:void 0;"number"===typeof c&&0<=c&&4095>=c&&(a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c>>6&63],b="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c&63]);var e="0",f;var g=dl();f=g.active?g.tcfPolicyVersion:void 0;"number"===typeof f&&
0<=f&&63>=f&&(e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f]);var h=0;pj["6"]&&(h|=1);"1"===ll()&&(h|=2);fl()&&(h|=4);var m;var n=dl();m=void 0!==n.enableAdvertiserConsentMode?n.enableAdvertiserConsentMode?"1":"0":void 0;"1"===m&&(h|=8);Gj().waitPeriodTimedOut&&(h|=16);return"1"+a+b+e+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[h]};var Dl=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!==c?b^c>>21:b;return b};var El=function(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var m=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");m&&c&&(m=decodeURIComponent(m));d.push(m)}}return d};var Hl=function(a,b,c,d){return Fl(d)?El(a,String(b||Gl()),c):[]},Kl=function(a,b,c,d,e){if(Fl(e)){var f=Il(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Jl(f,function(g){return g.Gf},b);if(1===f.length)return f[0].id;f=Jl(f,function(g){return g.Ne},c);return f[0]?f[0].id:void 0}}};function Ll(a,b,c,d){var e=Gl(),f=window;"null"!==f.origin&&(f.document.cookie=a);var g=Gl();return e!=g||void 0!=c&&0<=Hl(b,g,!1,d).indexOf(c)}
var Pl=function(a,b,c,d){function e(w,x,y){if(null==y)return delete h[x],w;h[x]=y;return w+"; "+x+"="+y}function f(w,x){if(null==x)return delete h[x],w;h[x]=!0;return w+"; "+x}if(!Fl(c.Gb))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Ml(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var m;c.expires instanceof Date?m=c.expires.toUTCString():null!=c.expires&&(m=""+c.expires);g=e(g,"expires",m);g=e(g,"max-age",c.Em);g=e(g,"samesite",
c.Ym);c.bn&&(g=f(g,"secure"));var n=c.domain;if(n&&"auto"===n.toLowerCase()){for(var p=Nl(),q=void 0,r=!1,t=0;t<p.length;++t){var u="none"!==p[t]?p[t]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){q=w;continue}r=!0;if(!Ol(u,c.path)&&Ll(v,a,b,c.Gb))return 0}if(q&&!r)throw q;return 1}n&&"none"!==n.toLowerCase()&&(g=e(g,"domain",n));g=f(g,c.flags);d&&d(a,h);return Ol(n,c.path)?1:Ll(g,a,b,c.Gb)?0:1},Ql=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Pl(a,
b,c)};function Jl(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],m=b(h);m===c?d.push(h):void 0===f||m<f?(e=[h],f=m):m===f&&e.push(h)}return 0<d.length?d:e}function Il(a,b,c){for(var d=[],e=Hl(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var m=g.shift();m&&(m=m.split("-"),d.push({id:g.join("."),Gf:1*m[0]||1,Ne:1*m[1]||1}))}}return d}
var Ml=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Rl=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Sl=/(^|\.)doubleclick\.net$/i,Ol=function(a,b){return Sl.test(window.document.location.hostname)||"/"===b&&Rl.test(a)},Gl=function(){return"null"!==window.origin?window.document.cookie:""},Nl=function(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));
var e=window.document.location.hostname;Sl.test(e)||Rl.test(e)||a.push("none");return a},Fl=function(a){return a&&zj().h()?(k(a)?[a]:a).every(function(b){return Oj(b)&&Mj(b)}):!0},Tl=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Ul=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Vl=function(a){var b=Math.round(2147483647*Math.random());return a?String(b^Dl(a)&2147483647):String(b)},Wl=function(a){return[Vl(a),Math.round(Sa()/1E3)].join(".")},Xl=function(a,b,c,d,e){var f=Tl(b);return Kl(a,f,Ul(c),d,e)},Yl=function(a,b,c,d){var e=""+Tl(c),f=Ul(d);1<f&&(e+="-"+f);return[b,e,a].join(".")};var Zl=function(){ri.dedupe_gclid||(ri.dedupe_gclid=""+Wl());return ri.dedupe_gclid};var $l=function(){var a=!1;return a};var bm=function(a,b){var c=am();c.pending||(c.pending=[]);Ia(c.pending,function(d){return d.target.ctid===a.ctid&&d.target.isDestination===a.isDestination})||c.pending.push({target:a,onLoad:b})},cm=function(){this.container={};this.destination={};this.canonical={};this.pending=[];this.siloed=[]},am=function(){var a=Ec("google_tag_data",{}),b=a.tidr;b||(b=new cm,a.tidr=b);return b};var dm={},em=!1,Tf={ctid:"UA-221764886-8",Ef:"",Lj:"UA-221764886-8",Mj:"UA-221764886-8"};dm.ie=Oa("");
var hm=function(){var a=fm();return em?a.map(gm):a},jm=function(){var a=im();return em?a.map(gm):a},lm=function(){return km(Tf.ctid)},mm=function(){return km(Tf.Ef||"_"+Tf.ctid)},fm=function(){return Tf.Lj?Tf.Lj.split("|"):[Tf.ctid]},im=function(){return Tf.Mj?Tf.Mj.split("|"):[]},nm=function(a){var b=am();return a.isDestination?b.destination[a.ctid]:b.container[a.ctid]},km=function(a){return em?gm(a):a},gm=function(a){return"siloed_"+a},om=function(a){a=String(a);return em&&0===a.indexOf("siloed_")?
a.substring(7):a},pm=function(){var a=!1;if(a){var b=am();if(b.siloed){for(var c=[],d=fm(),e=im(),f={},g=0;g<b.siloed.length;f={Ff:void 0},g++)f.Ff=b.siloed[g],!em&&Ia(f.Ff.isDestination?e:d,function(h){return function(m){return m===h.Ff.ctid}}(f))?em=!0:c.push(f.Ff);b.siloed=c}}};
function qm(){var a=am();if(a.pending){for(var b,c=[],d=!1,e=hm(),f=jm(),g={},h=0;h<a.pending.length;g={Oe:void 0},h++)g.Oe=a.pending[h],Ia(g.Oe.target.isDestination?f:e,function(m){return function(n){return n===m.Oe.target.ctid}}(g))?d||(b=g.Oe.onLoad,d=!0):c.push(g.Oe);a.pending=c;if(b)try{b(mm())}catch(m){}}}
var rm=function(){for(var a=am(),b=hm(),c=0;c<b.length;c++){var d=a.container[b[c]];d?(d.state=2,d.containers=hm(),d.destinations=jm()):a.container[b[c]]={state:2,containers:hm(),destinations:jm()}}for(var e=jm(),f=0;f<e.length;f++){var g=a.destination[e[f]];g&&0===g.state&&L(93);g?(g.state=2,g.containers=hm(),g.destinations=jm()):a.destination[e[f]]={state:2,containers:hm(),destinations:jm()}}a.canonical[mm()]={};qm()},sm=function(a){return!!am().container[a]},tm=function(a){var b=am().destination[a];
return!!b&&!!b.state},um=function(){return{ctid:lm(),isDestination:dm.ie}};function vm(a){var b=am();(b.siloed=b.siloed||[]).push(a)}var wm=function(){var a=am().container,b;for(b in a)if(a.hasOwnProperty(b)&&1===a[b].state)return!0;return!1},xm=function(){var a={};l(am().destination,function(b,c){0===c.state&&(a[b]=c)});return a},ym=function(a){return!!(a&&a.parent&&a.context&&1===a.context.source&&0!==a.parent.ctid.indexOf("GTM-"))};var zm={UA:1,AW:2,DC:3,G:4,GF:5,GT:12,GTM:14,HA:6,MC:7},Am=function(a,b){var c=Tf.ctid.split("-")[0].toUpperCase(),d={};d.ctid=Tf.ctid;d.Vm=qi.me;d.Xm=qi.Ug;d.Am=dm.ie?2:1;d.uc=Tf.Ef;d.uc!==a&&(d.Tf=a);R(75)?d.Xj=2:R(76)&&(d.Xj=1);xi?(d.Rf=zm[c],d.Rf||(d.Rf=0)):d.Rf=Di?13:10;Bi?d.Ch=1:$l()?d.Ch=2:d.Ch=3;var e;var f=d.Rf,g=d.Ch;void 0===f?e="":(g||(g=0),e=""+Hg(1,1)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f<<2|g]);var h=d.Tn,m=4+e+(h?""+Hg(2,1)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[h]:
""),n,p=d.Xm;n=p&&Gg.test(p)?""+Hg(3,2)+p:"";var q,r=d.Vm;q=r?""+Hg(4,1)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[r]:"";var t;var u=d.ctid;if(u&&b){var v=u.split("-"),w=v[0].toUpperCase();if("GTM"!==w&&"OPT"!==w)t="";else{var x=v[1];t=""+Hg(5,3)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[1+x.length]+(d.Am||0)+x}}else t="";var y=d.Xj,A=d.uc,B=d.Tf,E=d.Yn;return m+n+q+t+(y?""+Hg(6,1)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[y]:
"")+(A?""+Hg(7,3)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[A.length]+A:"")+(B?""+Hg(8,3)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[B.length]+B:"")+(E?""+Hg(9,3)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[E.length]+E:"")};var Bm=/:[0-9]+$/,Cm=/^\d+\.fls\.doubleclick\.net$/,Dm=function(a,b,c,d){function e(r){return Sf(10)?decodeURIComponent(r.replace(/\+/g," ")):decodeURIComponent(r).replace(/\+/g," ")}for(var f=[],g=ea(a.split("&")),h=g.next();!h.done;h=g.next()){var m=ea(h.value.split("=")),n=m.next().value,p=ha(m);if(e(n)===b){var q=p.join("=");if(!c)return d?q:e(q);f.push(d?q:e(q))}}return c?f:void 0},Gm=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Em(a.protocol)||
Em(z.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:z.location.port)||("http"===a.protocol?80:"https"===a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||z.location.hostname).replace(Bm,"").toLowerCase());return Fm(a,b,c,d,e)},Fm=function(a,b,c,d,e){var f,g=Em(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Hm(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Bm,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&
(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"===g?80:"https"===g?443:""));break;case "path":a.pathname||a.hostname||Ab("TAGGING",1);f="/"===a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=f.split("/");0<=(d||[]).indexOf(m[m.length-1])&&(m[m.length-1]="");f=m.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Dm(f,e,!1));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#",
"");break;default:f=a&&a.href}return f},Em=function(a){return a?a.replace(":","").toLowerCase():""},Hm=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Im={},Jm=0,Lm=function(a){if(Sf(17)){var b=Im[a];b||(b=Km(a),5>Jm&&(Im[a]=b,Jm++));return b}return Km(a)},Km=function(a){var b=C.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Ab("TAGGING",1),c="/"+c);var d=b.hostname.replace(Bm,"");return{href:b.href,protocol:b.protocol,host:b.host,
hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Mm=function(a){function b(n){var p=n.split("=")[0];return 0>d.indexOf(p)?n:p+"=0"}function c(n){return n.split("&").map(b).filter(function(p){return void 0!==p}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),e=Lm(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var m=""+f+g+h;"/"===m[m.length-
1]&&(m=m.substring(0,m.length-1));return m},Nm=function(a){var b=Lm(z.location.href),c=Gm(b,"host",!1);if(c&&c.match(Cm)){var d=Gm(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}};function Om(a,b,c,d){var e,f=Number(null!=a.Wb?a.Wb:void 0);0!==f&&(e=new Date((b||Sa())+1E3*(f||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:e,Gb:d}};var Pm;var Tm=function(){var a=Qm,b=Rm,c=Sm(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Oc(C,"mousedown",d);Oc(C,"keyup",d);Oc(C,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Um=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Sm().decorators.push(f)},Vm=function(a,b,c){for(var d=Sm().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var m=g.domains,n=a,p=!!g.sameHost;if(m&&(p||n!==C.location.hostname))for(var q=0;q<m.length;q++)if(m[q]instanceof RegExp){if(m[q].test(n)){h=!0;break a}}else if(0<=n.indexOf(m[q])||p&&0<=m[q].indexOf(n)){h=!0;break a}h=!1}if(h){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&Wa(e,g.callback())}}return e};function Sm(){var a=Ec("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Wm=/(.*?)\*(.*?)\*(.*)/,Xm=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Ym=/^(?:www\.|m\.|amp\.)+/,Zm=/([^?#]+)(\?[^#]*)?(#.*)?/;function $m(a){var b=Zm.exec(a);if(b)return{Ih:b[1],query:b[2],fragment:b[3]}}
function an(a,b){var c=[Cc.userAgent,(new Date).getTimezoneOffset(),Cc.userLanguage||Cc.language,Math.floor(Sa()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Pm)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Pm=d;for(var m=4294967295,n=0;n<c.length;n++)m=m>>>8^Pm[(m^c.charCodeAt(n))&255];return((m^-1)>>>0).toString(36)}
function bn(){return function(a){var b=Lm(z.location.href),c=b.search.replace("?",""),d=Dm(c,"_gl",!1,!0)||"";a.query=cn(d)||{};var e=Gm(b,"fragment"),f;var g=-1;if(Ya(e,"_gl="))g=4;else{var h=e.indexOf("&_gl=");0<h&&(g=h+3+2)}if(0>g)f=void 0;else{var m=e.indexOf("&",g);f=0>m?e.substring(g):e.substring(g,m)}a.fragment=cn(f||"")||{}}}
var dn=function(a){var b=bn(),c=Sm();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Wa(d,e.query),a&&Wa(d,e.fragment));return d},cn=function(a){try{var b=on(a,3);if(void 0!==b){for(var c={},d=b?b.split("*"):[],e=0;e+1<d.length;e+=2){var f=d[e],g=yb(d[e+1]);c[f]=g}Ab("TAGGING",6);return c}}catch(h){Ab("TAGGING",8)}};
function on(a,b){if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Wm.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],m;a:{for(var n=g[2],p=0;p<b;++p)if(n===an(h,p)){m=!0;break a}m=!1}if(m)return h;Ab("TAGGING",7)}}}
function pn(a,b,c,d,e){function f(p){var q=p,r=(new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")).exec(q),t=q;if(r){var u=r[2],v=r[4];t=r[1];v&&(t=t+u+v)}p=t;var w=p.charAt(p.length-1);p&&"&"!==w&&(p+="&");return p+n}d=void 0===d?!1:d;e=void 0===e?!1:e;var g=$m(c);if(!g)return"";var h=g.query||"",m=g.fragment||"",n=a+"="+b;d?0!==m.substring(1).length&&e||(m="#"+f(m.substring(1))):h="?"+f(h.substring(1));return""+g.Ih+h+m}
function qn(a,b){function c(n,p,q){var r;a:{for(var t in n)if(n.hasOwnProperty(t)){r=!0;break a}r=!1}if(r){var u,v=[],w;for(w in n)if(n.hasOwnProperty(w)){var x=n[w];void 0!==x&&x===x&&null!==x&&"[object Object]"!==x.toString()&&(v.push(w),v.push(xb(String(x))))}var y=v.join("*");u=["1",an(y),y].join("*");d?(Sf(13)||Sf(11)||!p)&&rn("_gl",u,a,p,q):sn("_gl",u,a,p,q)}}var d="FORM"===(a.tagName||"").toUpperCase(),e=Vm(b,1,d),f=Vm(b,2,d),g=Vm(b,4,d),h=Vm(b,3,d);c(e,!1,!1);c(f,!0,!1);Sf(11)&&c(g,!0,!0);
for(var m in h)h.hasOwnProperty(m)&&tn(m,h[m],a)}function tn(a,b,c){"a"===c.tagName.toLowerCase()?sn(a,b,c):"form"===c.tagName.toLowerCase()&&rn(a,b,c)}function sn(a,b,c,d,e){d=void 0===d?!1:d;e=void 0===e?!1:e;var f;if(f=c.href){var g;if(!(g=!Sf(16)||d)){var h=z.location.href,m=$m(c.href),n=$m(h);g=!(m&&n&&m.Ih===n.Ih&&m.query===n.query&&m.fragment)}f=g}if(f){var p=pn(a,b,c.href,d,e);sc.test(p)&&(c.href=p)}}
function rn(a,b,c,d,e){d=void 0===d?!1:d;e=void 0===e?!1:e;if(c&&c.action){var f=(c.method||"").toLowerCase();if("get"!==f||d){if("get"===f||"post"===f){var g=pn(a,b,c.action,d,e);sc.test(g)&&(c.action=g)}}else{for(var h=c.childNodes||[],m=!1,n=0;n<h.length;n++){var p=h[n];if(p.name===a){p.setAttribute("value",b);m=!0;break}}if(!m){var q=C.createElement("input");q.setAttribute("type","hidden");q.setAttribute("name",a);q.setAttribute("value",b);c.appendChild(q)}}}}
function Qm(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||qn(e,e.hostname)}}catch(g){}}function Rm(a){try{if(a.action){var b=Gm(Lm(a.action),"host");qn(a,b)}}catch(c){}}
var un=function(a,b,c,d){Tm();Um(a,b,"fragment"===c?2:1,!!d,!1)},vn=function(a,b){Tm();Um(a,[Fm(z.location,"host",!0)],b,!0,!0)},wn=function(){var a=C.location.hostname,b=Xm.exec(C.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Ym,""),m=e.replace(Ym,""),n;if(!(n=h===m)){var p="."+m;n=h.substring(h.length-p.length,
h.length)===p}return n},xn=function(a,b){return!1===a?!1:a||b||wn()};var yn=["1"],zn={},An={},Fn=function(a,b){b=void 0===b?!0:b;var c=Bn(a.prefix);if(!zn[c])if(Cn(c,a.path,a.domain)){var d=An[Bn(a.prefix)];Dn(a,d?d.id:void 0,d?d.Bh:void 0)}else{var e=Nm("auiddc");if(e)Ab("TAGGING",17),zn[c]=e;else if(b){var f=Bn(a.prefix),g=Wl();if(0===En(f,g,a)){var h=Ec("google_tag_data",{});h._gcl_au||(h._gcl_au=g)}Cn(c,a.path,a.domain)}}};
function Dn(a,b,c){var d=Bn(a.prefix),e=zn[d];if(e){var f=e.split(".");if(2===f.length){var g=Number(f[1])||0;if(g){var h=e;b&&(h=e+"."+b+"."+(c?c:Math.floor(Sa()/1E3)));En(d,h,a,1E3*g)}}}}function En(a,b,c,d){var e=Yl(b,"1",c.domain,c.path),f=Om(c,d);f.Gb=Gn();return Ql(a,e,f)}function Cn(a,b,c){var d=Xl(a,b,c,yn,Gn());if(!d)return!1;Hn(a,d);return!0}
function Hn(a,b){var c=b.split(".");5===c.length?(zn[a]=c.slice(0,2).join("."),An[a]={id:c.slice(2,4).join("."),Bh:Number(c[4])||0}):3===c.length?An[a]={id:c.slice(0,2).join("."),Bh:Number(c[2])||0}:zn[a]=b}function Bn(a){return(a||"_gcl")+"_au"}function In(a){function b(){Mj(c)&&a()}var c=Gn();Sj(function(){b();Mj(c)||Tj(b,c)},c)}
function Jn(a){var b=dn(!0),c=Bn(a.prefix);In(function(){var d=b[c];if(d){Hn(c,d);var e=1E3*Number(zn[c].split(".")[1]);if(e){Ab("TAGGING",16);var f=Om(a,e);f.Gb=Gn();var g=Yl(d,"1",a.domain,a.path);Ql(c,g,f)}}})}function Kn(a,b,c,d,e){e=e||{};var f=function(){var g={},h=Xl(a,e.path,e.domain,yn,Gn());h&&(g[a]=h);return g};In(function(){un(f,b,c,d)})}function Gn(){return Sf(14)?["ad_storage","ad_user_data"]:["ad_storage"]};var Ln=function(a){for(var b=[],c=C.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Wh:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(g,h){return h.timestamp-g.timestamp});return b};
function Mn(a,b){var c=Ln(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].Wh]||(d[c[e].Wh]=[]);var g={version:f[0],timestamp:1E3*Number(f[1]),aa:f[2]};b&&3<f.length&&(g.labels=f.slice(3));d[c[e].Wh].push(g)}}return d};var Nn=/^\w+$/,On=/^[\w-]+$/,Pn={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"};function Qn(){return Sf(14)?["ad_storage","ad_user_data"]:["ad_storage"]}
var Rn=function(a){return!zj().h()||Mj(a)},Sn=function(a){function b(){var d=Rn(c);d&&a();return d}var c=Qn();Sj(function(){b()||Tj(b,c)},c)},Un=function(a){return Tn(a).map(function(b){return b.aa})},Tn=function(a){var b=[],c=Hl(a,C.cookie,void 0,Qn());if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d={aa:void 0},e++){var f=Vn(c[e]);if(null!=f){var g=f,h=g.version;d.aa=g.aa;var m=g.timestamp,n=g.labels,p=Ia(b,function(q){return function(r){return r.aa===q.aa}}(d));p?(p.timestamp=Math.max(p.timestamp,
m),p.labels=Wn(p.labels,n||[])):b.push({version:h,aa:d.aa,timestamp:m,labels:n})}}b.sort(function(q,r){return r.timestamp-q.timestamp});return Xn(b)};function Wn(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}function Yn(a){return a&&"string"==typeof a&&a.match(Nn)?a:"_gcl"}
var $n=function(){var a=Lm(z.location.href),b=Gm(a,"query",!1,void 0,"gclid"),c=Gm(a,"query",!1,void 0,"gclsrc"),d=Gm(a,"query",!1,void 0,"wbraid"),e=Gm(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||Dm(f,"gclid",!1);c=c||Dm(f,"gclsrc",!1);d=d||Dm(f,"wbraid",!1)}return Zn(b,c,e,d)},Zn=function(a,b,c,d){var e={},f=function(g,h){e[h]||(e[h]=[]);e[h].push(g)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&On.test(d)&&(e.wbraid=d,f(d,"gb"));if(void 0!==a&&a.match(On))switch(b){case void 0:f(a,
"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},bo=function(a){var b=$n();Sn(function(){ao(b,!1,a)})};
function ao(a,b,c,d,e){function f(w,x){var y=co(w,g);y&&(Ql(y,x,h),m=!0)}c=c||{};e=e||[];var g=Yn(c.prefix);d=d||Sa();var h=Om(c,d,!0);h.Gb=Qn();var m=!1,n=Math.round(d/1E3),p=function(w){var x=["GCL",n,w];0<e.length&&x.push(e.join("."));return x.join(".")};a.aw&&f("aw",p(a.aw[0]));a.dc&&f("dc",p(a.dc[0]));a.gf&&f("gf",p(a.gf[0]));a.ha&&f("ha",p(a.ha[0]));a.gp&&f("gp",p(a.gp[0]));if(!m&&a.gb){var q=a.gb[0],r=co("gb",g),t=!1;if(!b)for(var u=Tn(r),v=0;v<u.length;v++)u[v].aa===q&&u[v].labels&&0<u[v].labels.length&&
(t=!0);t||f("gb",p(q))}}
var fo=function(a,b){var c=dn(!0);Sn(function(){for(var d=Yn(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Pn[f]){var g=co(f,d),h=c[g];if(h){var m=Math.min(eo(h),Sa()),n;b:{for(var p=m,q=Hl(g,C.cookie,void 0,Qn()),r=0;r<q.length;++r)if(eo(q[r])>p){n=!0;break b}n=!1}if(!n){var t=Om(b,m,!0);t.Gb=Qn();Ql(g,h,t)}}}}ao(Zn(c.gclid,c.gclsrc),!1,b)})},co=function(a,b){var c=Pn[a];if(void 0!==c)return b+c},eo=function(a){return 0!==go(a.split(".")).length?1E3*(Number(a.split(".")[1])||0):0};
function Vn(a){var b=go(a.split("."));return 0===b.length?null:{version:b[0],aa:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function go(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!On.test(a[2])?[]:a}
var ho=function(a,b,c,d,e){if(Ha(b)&&"null"!==z.origin){var f=Yn(e),g=function(){for(var h={},m=0;m<a.length;++m){var n=co(a[m],f);if(n){var p=Hl(n,C.cookie,void 0,Qn());p.length&&(h[n]=p.sort()[p.length-1])}}return h};Sn(function(){un(g,b,c,d)})}},Xn=function(a){return a.filter(function(b){return On.test(b.aa)})},io=function(a,b){if("null"!==z.origin){for(var c=Yn(b.prefix),d={},e=0;e<a.length;e++)Pn[a[e]]&&(d[a[e]]=Pn[a[e]]);Sn(function(){l(d,function(f,g){var h=Hl(c+g,C.cookie,void 0,Qn());h.sort(function(t,
u){return eo(u)-eo(t)});if(h.length){var m=h[0],n=eo(m),p=0!==go(m.split(".")).length?m.split(".").slice(3):[],q={},r;r=0!==go(m.split(".")).length?m.split(".")[2]:void 0;q[f]=[r];ao(q,!0,b,n,p)}})})}};function jo(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var ko=function(a){function b(e,f,g){g&&(e[f]=g)}if(Pj()){var c=$n();if(jo(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.wbraid);vn(function(){return d},3);vn(function(){var e={};return e._up="1",e},1)}}},lo=function(a){if(!Sf(11))return null;var b=dn(!0).gad_source;if(null!=b)return z.location.hash="",b;if(Sf(12)){var c=Lm(z.location.href);b=Gm(c,"query",!1,void 0,"gad_source");if(null!=b)return b;var d=$n();if(jo(d,a))return"0"}return null},mo=function(a){var b=
lo(a);null!=b&&vn(function(){var c={};return c.gad_source=b,c},4)},no=function(a,b,c,d){var e=[];c=c||{};if(!Rn(Qn()))return e;var f=Tn(a);if(!f.length)return e;for(var g=0;g<f.length;g++)-1===(f[g].labels||[]).indexOf(b)?e.push(0):e.push(1);if(d)return e;if(1!==e[0]){var h=f[0],m=f[0].timestamp,n=[h.version,Math.round(m/1E3),h.aa].concat(h.labels||[],[b]).join("."),p=Om(c,m,!0);p.Gb=Qn();Ql(a,n,p)}return e};
function oo(a,b){var c=Yn(b),d=co(a,c);if(!d)return 0;for(var e=Tn(d),f=0,g=0;g<e.length;g++)f=Math.max(f,e[g].timestamp);return f}function po(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b}var qo=function(a){var b=Math.max(oo("aw",a),po(Rn(Qn())?Mn():{}));return Math.max(oo("gb",a),po(Rn(Qn())?Mn("_gac_gb",!0):{}))>b};var wo=/[A-Z]+/,xo=/\s/,yo=function(a,b){if(k(a)){a=Qa(a);var c=a.indexOf("-");if(!(0>c)){var d=a.substring(0,c);if(wo.test(d)){var e=a.substring(c+1),f;if(b){var g=function(n){var p=n.indexOf("/");return 0>p?[n]:[n.substring(0,p),n.substring(p+1)]};f=g(e);if("DC"===d&&2===f.length){var h=g(f[1]);2===h.length&&(f[1]=h[0],f.push(h[1]))}}else{f=e.split("/");for(var m=0;m<f.length;m++)if(!f[m]||xo.test(f[m])&&("AW"!==d||1!==m))return}return{id:a,prefix:d,da:d+"-"+f[0],P:f}}}}},Ao=function(a,b){for(var c=
{},d=0;d<a.length;++d){var e=yo(a[d],b);e&&(c[e.id]=e)}zo(c);var f=[];l(c,function(g,h){f.push(h)});return f};function zo(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.P[1]&&b.push(d.da)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Bo=function(a,b,c,d){var e=Lc(),f;if(1===e)a:{var g=Fi;g=g.toLowerCase();for(var h="https://"+g,m="http://"+g,n=1,p=C.getElementsByTagName("script"),q=0;q<p.length&&100>q;q++){var r=p[q].src;if(r){r=r.toLowerCase();if(0===r.indexOf(m)){f=3;break a}1===n&&0===r.indexOf(h)&&(n=2)}}f=n}else f=e;return(2===f||d||"http:"!=z.location.protocol?a:b)+c};
var Do=function(a,b,c){if(z[a.functionName])return b.Gh&&F(b.Gh),z[a.functionName];var d=Co();z[a.functionName]=d;if(a.Cf)for(var e=0;e<a.Cf.length;e++)z[a.Cf[e]]=z[a.Cf[e]]||Co();a.Kf&&void 0===z[a.Kf]&&(z[a.Kf]=c);Jc(Bo("https://","http://",a.Sh),b.Gh,b.Jm);return d},Co=function(){var a=function(){a.q=a.q||[];a.q.push(arguments)};return a},Eo={functionName:"_googWcmImpl",Kf:"_googWcmAk",Sh:"www.gstatic.com/wcm/loader.js"},Fo={functionName:"_gaPhoneImpl",Kf:"ga_wpid",Sh:"www.gstatic.com/gaphone/loader.js"},
Go={jk:"",bl:"5"},Ho={functionName:"_googCallTrackingImpl",Cf:[Fo.functionName,Eo.functionName],Sh:"www.gstatic.com/call-tracking/call-tracking_"+(Go.jk||Go.bl)+".js"},Io={},Jo=function(a,b,c,d){L(22);if(c){d=d||{};var e=Do(Eo,d,a),f={ak:a,cl:b};void 0===d.Fb&&(f.autoreplace=c);e(2,d.Fb,f,c,0,Ra(),d.options)}},Ko=function(a,b,c,d){L(21);if(b&&c){d=d||{};for(var e={countryNameCode:c,destinationNumber:b,retrievalTime:Ra()},f=0;f<a.length;f++){var g=a[f];Io[g.id]||
(g&&"AW"===g.prefix&&!e.adData&&2<=g.P.length?(e.adData={ak:g.P[0],cl:g.P[1]},R(104)&&(e.adData.dma=Al(),Bl()&&(e.adData.dmaCps=zl())),Io[g.id]=!0):g&&"UA"===g.prefix&&!e.gaData&&(e.gaData={gaWpid:g.da},Io[g.id]=!0))}(e.gaData||e.adData)&&Do(Ho,d)(d.Fb,e,d.options)}},Lo=function(){var a=!1;return a},Mo=function(a,b){if(a)if($l()){}else{if(k(a)){var c=yo(a);if(!c)return;a=c}var d=void 0,e=!1,f=S(b,N.g.Oi);if(f&&Ha(f)){d=[];for(var g=0;g<f.length;g++){var h=yo(f[g]);h&&(d.push(h),(a.id===h.id||a.id===a.da&&a.da===h.da)&&(e=!0))}}if(!d||e){var m=S(b,N.g.Fg),n;if(m){Ha(m)?n=m:n=[m];var p=S(b,N.g.Dg),q=S(b,N.g.Eg),r=S(b,N.g.Gg),t=S(b,N.g.Ni),u=p||q,v=1;"UA"!==a.prefix||d||(v=5);for(var w=0;w<n.length;w++)if(w<v)if(d)Ko(d,n[w],t,{Fb:u,options:r});else if("AW"===a.prefix&&a.P[1])Lo()?Ko([a],
n[w],t||"US",{Fb:u,options:r}):Jo(a.P[0],a.P[1],n[w],{Fb:u,options:r});else if("UA"===a.prefix)if(Lo())Ko([a],n[w],t||"US",{Fb:u});else{var x=a.da,y=n[w],A={Fb:u};L(23);if(y){A=A||{};var B=Do(Fo,A,x),E={};void 0!==A.Fb?E.receiver=A.Fb:E.replace=y;E.ga_wpid=x;E.destination=y;B(2,Ra(),E)}}}}}};var No,Oo=!1;function Po(){Oo=!0;No=No||{}}var Qo=function(a){Oo||Po();return No[a]};var Ro=function(a,b,c){this.target=a;this.eventName=b;this.o=c;this.h={};this.metadata=nb(c.eventMetadata||{});this.isAborted=!1};Ro.prototype.copyToHitData=function(a,b,c){var d=S(this.o,a);void 0===d&&(d=b);if(void 0!==d&&void 0!==c&&k(d)&&R(53))try{d=c(d)}catch(e){}void 0!==d&&(this.h[a]=d)};var So=function(a){return a.metadata.source_canonical_id},To=function(a,b,c){var d=Qo(a.target.da);return d&&d.hasOwnProperty(b)?d[b]:c};function Uo(a){return{getDestinationId:function(){return a.target.da},getEventName:function(){return a.eventName},setEventName:function(b){a.eventName=b},getHitData:function(b){return a.h[b]},setHitData:function(b,c){a.h[b]=c},setHitDataIfNotDefined:function(b,c){void 0===a.h[b]&&(a.h[b]=c)},copyToHitData:function(b,c){a.copyToHitData(b,c)},getMetadata:function(b){return a.metadata[b]},setMetadata:function(b,c){a.metadata[b]=c},isAborted:function(){return a.isAborted},abort:function(){a.isAborted=
!0},getFromEventContext:function(b){return S(a.o,b)},Dj:function(){return a},getHitKeys:function(){return Object.keys(a.h)}}};var Wo=function(a){var b=Vo[a.target.da];if(!a.isAborted&&b)for(var c=Uo(a),d=0;d<b.length;++d){try{b[d](c)}catch(e){a.isAborted=!0}if(a.isAborted)break}},Xo=function(a,b){var c=Vo[a];c||(c=Vo[a]=[]);c.push(b)},Vo={};function ap(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Lm(""+c+b).href}}function bp(){return!!qi.zf&&"SGTM_TOKEN"!==qi.zf.split("@@").join("")}function cp(a){for(var b=ea([N.g.Sd,N.g.Pb]),c=b.next();!c.done;c=b.next()){var d=S(a,c.value);if(d)return d}};var dp=function(a){var b=String(a[Oe.na]||"").replace(/_/g,"");0===b.indexOf("cvt")&&(b="cvt");return b},ep=0<=z.location.search.indexOf("?gtm_latency=")||0<=z.location.search.indexOf("&gtm_latency=");var fp={sampleRate:"0.005000",hk:"",gk:Number("5"),ao:Number("")},gp=[];function hp(a){gp.push(a)}var ip=!1,jp;if(!(jp=ep)){var kp=Math.random(),lp=fp.sampleRate;jp=kp<Number(lp)}
var mp=jp,np="https://www.googletagmanager.com/a?id="+Tf.ctid,op=void 0,pp={},qp=void 0,rp=new function(){var a=5;0<fp.gk&&(a=fp.gk);this.h=0;this.C=[];this.s=a},sp=1E3;function tp(a,b){var c=op;if(void 0===c)if(b)c=Li();else return"";for(var d=[np],e=0;e<gp.length;e++){var f=gp[e]({eventId:c,Zb:!!a,Vj:function(){ip=!0}});"&"===f[0]&&d.push(f)}d.push("&z=0");return d.join("")}
function up(){qp&&(z.clearTimeout(qp),qp=void 0);if(void 0!==op&&vp){var a;(a=pp[op])||(a=rp.h<rp.s?!1:1E3>Sa()-rp.C[rp.h%rp.s]);if(a||0>=sp--)L(1),pp[op]=!0;else{var b=rp.h++%rp.s;rp.C[b]=Sa();var c=tp(!0);Nc(c);if(ip){var d=c.replace("/a?","/td?");Nc(d)}vp=ip=!1}}}var vp=!1;function wp(a){pp[a]||(a!==op&&(up(),op=a),vp=!0,qp||(qp=z.setTimeout(up,500)),2022<=tp().length&&up())}var xp=Ja();function yp(){xp=Ja()}function zp(){return["&v=3&t=t","&pid="+xp].join("")};var Ap="",Bp=[];function Cp(a){var b="";Ap&&(b="&dl="+encodeURIComponent(Ap));0<Bp.length&&(b+="&tdp="+Bp.join("."));a.Zb&&(Ap="",Bp.length=0,b&&a.Vj());return b};var Dp=[];function Ep(a){if(!Dp.length)return"";var b="&tdc="+Dp.join("!");a.Zb&&(a.Vj(),Dp.length=0);return b};var Fp={initialized:11,complete:12,interactive:13},Gp={},Hp=Object.freeze((Gp[N.g.Sa]=!0,Gp)),Ip=0<=C.location.search.indexOf("?gtm_diagnostics=")||0<=C.location.search.indexOf("&gtm_diagnostics="),Kp=function(a,b,c){if(mp&&"config"===a&&!(1<yo(b).P.length)){var d,e=Ec("google_tag_data",{});e.td||(e.td={});d=e.td;var f=nb(c.F);nb(c.h,f);var g=[],h;for(h in d){var m=Jp(d[h],f);m.length&&(Ip&&console.log(m),g.push(h))}g.length&&(g.length&&mp&&Dp.push(b+"*"+g.join(".")),Ab("TAGGING",Fp[C.readyState]||
14));d[b]=f}};function Lp(a,b){var c={},d;for(d in b)b.hasOwnProperty(d)&&(c[d]=!0);for(var e in a)a.hasOwnProperty(e)&&(c[e]=!0);return c}function Jp(a,b,c,d){c=void 0===c?{}:c;d=void 0===d?"":d;if(a===b)return[];var e=function(q,r){var t=r[q];return void 0===t?Hp[q]:t},f;for(f in Lp(a,b)){var g=(d?d+".":"")+f,h=e(f,a),m=e(f,b),n="object"===jb(h)||"array"===jb(h),p="object"===jb(m)||"array"===jb(m);if(n&&p)Jp(h,m,c,g);else if(n||p||h!==m)c[g]=!0}return Object.keys(c)};var Mp={};function Np(a,b,c){mp&&void 0!==a&&(Mp[a]=Mp[a]||[],Mp[a].push(c+b),wp(a))}function Op(a){var b=a.eventId,c=a.Zb,d="",e=Mp[b]||[];e.length&&(d+="&epr="+e.join("."));c&&delete Mp[b];return d};var Qp=function(a,b){var c=yo(km(a),!0);c&&Pp.register(c,b)},Rp=function(a,b,c,d){var e=yo(c,d.isGtmEvent);e&&Pp.push("event",[b,a],e,d)},Sp=function(a,b,c,d){var e=yo(c,d.isGtmEvent);e&&Pp.push("get",[a,b],e,d)},Up=function(a){var b=yo(km(a),!0),c;b?c=Tp(Pp,b).h:c={};return c},Vp=function(a,b){var c=yo(km(a),!0);if(c){var d=Pp,e=nb(b);nb(Tp(d,c).h,e);Tp(d,c).h=e}},Wp=function(){this.status=1;this.M={};this.h={};this.s={};this.X=null;this.F={};this.C=!1},Xp=function(a,b,c,d){var e=Sa();this.type=
a;this.C=e;this.h=b;this.s=c;this.messageContext=d},Yp=function(){this.s={};this.C={};this.h=[]},Tp=function(a,b){var c=b.da;return a.s[c]=a.s[c]||new Wp},Zp=function(a,b,c,d){if(d.h){var e=Tp(a,d.h),f=e.X;if(f){var g=nb(c),h=nb(e.M[d.h.id]),m=nb(e.F),n=nb(e.h),p=nb(a.C),q={};if(mp)try{q=nb(Pi)}catch(v){L(72)}var r=d.h.prefix,t=function(v){Np(d.messageContext.eventId,r,v)},u=yk(xk(wk(vk(uk(sk(rk(tk(qk(pk(ok(new nk(d.messageContext.eventId,d.messageContext.priorityId),g),h),m),n),p),q),d.messageContext.eventMetadata),
function(){if(t){var v=t;t=void 0;v("2");if(d.messageContext.onSuccess)d.messageContext.onSuccess()}}),function(){if(t){var v=t;t=void 0;v("3");if(d.messageContext.onFailure)d.messageContext.onFailure()}}),!!d.messageContext.isGtmEvent));try{Np(d.messageContext.eventId,r,"1"),Kp(d.type,d.h.id,u),f(d.h.id,b,d.C,u)}catch(v){Np(d.messageContext.eventId,r,"4")}}}};Yp.prototype.register=function(a,b,c){var d=Tp(this,a);3!==d.status&&(d.X=b,d.status=3,c&&(nb(d.h,c),d.h=c),this.flush())};
Yp.prototype.push=function(a,b,c,d){void 0!==c&&(1===Tp(this,c).status&&(Tp(this,c).status=2,this.push("require",[{}],c,{})),Tp(this,c).C&&(d.deferrable=!1));this.h.push(new Xp(a,c,b,d));d.deferrable||this.flush()};
Yp.prototype.flush=function(a){for(var b=this,c=[],d=!1,e={};this.h.length;e={vc:void 0,lh:void 0}){var f=this.h[0],g=f.h;if(f.messageContext.deferrable)!g||Tp(this,g).C?(f.messageContext.deferrable=!1,this.h.push(f)):c.push(f),this.h.shift();else{switch(f.type){case "require":if(3!==Tp(this,g).status&&!a){this.h.push.apply(this.h,c);return}break;case "set":l(f.s[0],function(r,t){nb($a(r,t),b.C)});break;case "config":var h=Tp(this,g);e.vc={};l(f.s[0],function(r){return function(t,u){nb($a(t,u),r.vc)}}(e));
var m=!!e.vc[N.g.Qb];delete e.vc[N.g.Qb];var n=g.da===g.id;m||(n?h.F={}:h.M[g.id]={});h.C&&m||Zp(this,N.g.sa,e.vc,f);h.C=!0;n?nb(e.vc,h.F):(nb(e.vc,h.M[g.id]),L(70));d=!0;break;case "event":e.lh={};l(f.s[0],function(r){return function(t,u){nb($a(t,u),r.lh)}}(e));Zp(this,f.s[1],e.lh,f);break;case "get":var p={},q=(p[N.g.lb]=f.s[0],p[N.g.wb]=f.s[1],p);Zp(this,N.g.Pa,q,f)}this.h.shift();$p(this,f)}}this.h.push.apply(this.h,c);d&&this.flush()};
var $p=function(a,b){if("require"!==b.type)if(b.h)for(var c=Tp(a,b.h).s[b.type]||[],d=0;d<c.length;d++)c[d]();else for(var e in a.s)if(a.s.hasOwnProperty(e)){var f=a.s[e];if(f&&f.s)for(var g=f.s[b.type]||[],h=0;h<g.length;h++)g[h]()}},Pp=new Yp;var pq=function(){function a(b){ri.pscdl=b}if(void 0===ri.pscdl)try{"cookieDeprecationLabel"in Cc?(a("pending"),Cc.cookieDeprecationLabel.getValue().then(a)):a("noapi")}catch(b){a("error")}};function tq(a){var b=S(a.o,N.g.yb),c=S(a.o,N.g.Lb);b&&!c?(a.eventName!==N.g.sa&&a.eventName!==N.g.xd&&L(131),a.isAborted=!0):!b&&c&&(L(132),a.isAborted=!0)}function uq(a){var b=ck(N.g.J)?ri.pscdl:"denied";a.h[N.g.af]=b};var wq=/^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,xq=/^www.googleadservices.com$/,zq=function(a){a||(a=yq());return a.rn?!1:a.am||a.bm||a.dm||a.rh||a.If||a.Kl||a.Sl?!0:!1},yq=function(){var a={},b=dn(!0);a.rn=!!b._up;var c=$n();a.am=void 0!==c.aw;a.bm=void 0!==c.dc;a.dm=void 0!==c.wbraid;var d=Lm(z.location.href),e=Gm(d,"query",!1,void 0,"gad");a.rh=void 0!==e;if(!a.rh){var f=d.hash.replace("#",""),g=Dm(f,"gad",!1);a.rh=void 0!==g}a.If=void 0;if(R(61)){var h=Gm(d,"query",!1,void 0,"gad_source");a.If=
h;if(void 0===a.If){var m=d.hash.replace("#",""),n=Dm(m,"gad_source",!1);a.If=n}}var p=C.referrer?Gm(Lm(C.referrer),"host"):"";a.Sl=wq.test(p);a.Kl=xq.test(p);return a};var Aq=function(){var a=z.screen;return{width:a?a.width:0,height:a?a.height:0}},Bq=function(a){if(C.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!z.getComputedStyle)return!0;var c=z.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,
f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=z.getComputedStyle(d,null))}return!1};
var Lq=function(a,b,c){var d=a.element,e={U:a.U,type:a.ma,tagName:d.tagName};b&&(e.querySelector=Kq(d));c&&(e.isVisible=!Bq(d));return e},Mq=function(a,b,c){return Lq({element:a.element,U:a.U,ma:"1"},b,c)},Nq=function(a){var b=!!a.md+"."+!!a.nd;a&&a.ue&&a.ue.length&&(b+="."+a.ue.join("."));a&&a.ob&&(b+="."+a.ob.email+"."+a.ob.phone+"."+a.ob.address);return b},Qq=function(a){if(0!=a.length){var b;b=Oq(a,function(c){return!Pq.test(c.U)});b=Oq(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});
b=Oq(b,function(c){return!Bq(c.element)});return b[0]}},Rq=function(a,b){if(!b||0===b.length)return a;for(var c=[],d=0;d<a.length;d++){for(var e=!0,f=0;f<b.length;f++){var g=b[f];if(g&&zh(a[d].element,g)){e=!1;break}}e&&c.push(a[d])}return c},Oq=function(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c},Kq=function(a){var b;if(a===C.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===
a){e=g+1;break a}e=-1}else e=1}d=Kq(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b},Tq=function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c],e=d.textContent;"INPUT"===d.tagName.toUpperCase()&&d.value&&(e=d.value);if(e){var f=e.match(Sq);if(f){var g=f[0],h;if(z.location){var m=Fm(z.location,"host",!0);h=0<=g.toLowerCase().indexOf(m)}else h=!1;h||b.push({element:d,U:g})}}}return b},Xq=function(){var a=[],b=C.body;if(!b)return{elements:a,status:"4"};for(var c=b.querySelectorAll("*"),
d=0;d<c.length&&1E4>d;d++){var e=c[d];if(!(0<=Uq.indexOf(e.tagName.toUpperCase()))&&e.children instanceof HTMLCollection){for(var f=!1,g=0;g<e.childElementCount&&1E4>g;g++)if(!(0<=Vq.indexOf(e.children[g].tagName.toUpperCase()))){f=!0;break}(!f||R(30)&&-1!==Wq.indexOf(e.tagName))&&a.push(e)}}return{elements:a,status:1E4<c.length?"2":"1"}},Yq=!1;var Sq=/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
Zq=/@(gmail|googlemail)\./i,Pq=/support|noreply/i,Uq="SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),Vq=["BR"],$q={wn:"1",Ln:"2",An:"3",En:"4",tn:"5",Mn:"6",Hn:"7"},ar={},Wq=["INPUT","SELECT"];var tr=function(a){a=a||{md:!0,nd:!0};a.ob=a.ob||{email:!0,phone:!1,address:!1};var b=Nq(a),c=ar[b];if(c&&200>Sa()-c.timestamp)return c.result;var d=Xq(),e=d.status,
f=[],g,h,m=[];if(!R(30)){if(a.ob&&a.ob.email){var n=Tq(d.elements);f=Rq(n,a&&a.ue);g=Qq(f);10<n.length&&(e="3")}!a.Th&&g&&(f=[g]);for(var p=0;p<f.length;p++)m.push(Mq(f[p],a.md,a.nd));m=m.slice(0,10)}else if(a.ob){}g&&(h=Mq(g,a.md,a.nd));var E={elements:m,Mh:h,status:e};ar[b]={timestamp:Sa(),result:E};return E},ur=function(a){return a.tagName+":"+a.isVisible+":"+a.U.length+":"+Zq.test(a.U)};var vr={jl:Number('')||500,Ok:Number('')||5E3,bj:Number('')||10,vk:Number('')||5E3};function wr(a){return a.performance&&a.performance.now()||Date.now()}
var xr=function(a,b){var c;return c};var yr="https://"+qi.wd,zr=yr+"/gtm/static/",Ar=Number('')||5,Br=Number('')||50,Cr=yr,Dr=zr,Er=!1,Fr=0,Gr=Ja();function Pr(){var a=!1;return a}
function Qr(a){}
function Sr(a,b,c){}
function Lr(a,b,c,d){}
function Rr(a,b,c,d,e){}
function Tr(a,b,c,d){}
function Ur(a,b,c,d){}
function Vr(a){var b={},c=["tv.1"],d=0;
var u=c.join("~");return{U:b,Nf:u}}var Wr=void 0;function Xr(a){var b="";return b};var Yr=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};bc();Ek()||Zb("iPod");Zb("iPad");!Zb("Android")||cc()||bc()||ac()||Zb("Silk");cc();!Zb("Safari")||cc()||($b()?0:Zb("Coast"))||ac()||($b()?0:Zb("Edge"))||($b()?Yb("Microsoft Edge"):Zb("Edg/"))||($b()?Yb("Opera"):Zb("OPR"))||bc()||Zb("Silk")||Zb("Android")||Fk();var Zr={},$r=null,as=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}var f=4;void 0===f&&(f=0);if(!$r){$r={};for(var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),h=["+/=","+/","-_=","-_.","-_"],m=0;5>m;m++){var n=g.concat(h[m].split(""));Zr[m]=n;for(var p=0;p<n.length;p++){var q=n[p];void 0===$r[q]&&($r[q]=p)}}}for(var r=Zr[f],t=Array(Math.floor(b.length/3)),u=r[64]||"",v=0,w=0;v<b.length-2;v+=3){var x=b[v],
y=b[v+1],A=b[v+2],B=r[x>>2],E=r[(x&3)<<4|y>>4],G=r[(y&15)<<2|A>>6],D=r[A&63];t[w++]=""+B+E+G+D}var M=0,P=u;switch(b.length-v){case 2:M=b[v+1],P=r[(M&15)<<2]||u;case 1:var O=b[v];t[w]=""+r[O>>2]+r[(O&3)<<4|M>>4]+P+u}return t.join("")};Object.freeze(new function(){});Object.freeze(new function(){});var bs="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function cs(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}function ds(){var a=z.google_tag_data,b;if(null!=a&&a.uach){var c=a.uach,d=Object.assign({},c);c.fullVersionList&&(d.fullVersionList=c.fullVersionList.slice(0));b=d}else b=null;return b}function es(){var a,b;return null!=(b=null==(a=z.google_tag_data)?void 0:a.uach_promise)?b:null}
function fs(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}function gs(){var a=z;if(!fs(a))return null;var b=cs(a);if(b.uach_promise)return b.uach_promise;var c=a.navigator.userAgentData.getHighEntropyValues(bs).then(function(d){null!=b.uach||(b.uach=d);return d});return b.uach_promise=c};function ms(){return"attribution-reporting"}function ns(a){var b;b=void 0===b?document:b;var c;return!(null==(c=b.featurePolicy)||!c.allowedFeatures().includes(a))};var os=!1;function ps(){if(ns("join-ad-interest-group")&&Fa(Cc.joinAdInterestGroup))return!0;os||(Nk('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'),os=!0);return ns("join-ad-interest-group")&&Fa(Cc.joinAdInterestGroup)}
function qs(a,b){var c=void 0;try{c=C.querySelector('iframe[data-tagging-id="'+b+'"]')}catch(e){}if(c){var d=Number(c.dataset.loadTime);if(d&&6E4>Sa()-d){Ab("TAGGING",9);return}try{c.parentNode.removeChild(c)}catch(e){}c=void 0}else try{if(50<=C.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length){Ab("TAGGING",10);return}}catch(e){}Mc(a,void 0,{allow:"join-ad-interest-group"},{taggingId:b,loadTime:Sa()},c)}function rs(){return"https://td.doubleclick.net"};var ss=RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),ts=/^~?[\w-]+(?:\.~?[\w-]+)*$/,us=/^\d+\.fls\.doubleclick\.net$/,vs=/;gac=([^;?]+)/,ws=/;gacgb=([^;?]+)/,xs=/;gclaw=([^;?]+)/,ys=/;gclgb=([^;?]+)/;
function zs(a,b){if(us.test(C.location.host)){var c=C.location.href.match(b);return c&&2==c.length&&c[1].match(ss)?decodeURIComponent(c[1]):""}var d=[],e;for(e in a){for(var f=[],g=a[e],h=0;h<g.length;h++)f.push(g[h].aa);d.push(e+":"+f.join(","))}return 0<d.length?d.join(";"):""}
var As=function(a,b,c){var d=Rn(Qn())?Mn("_gac_gb",!0):{},e=[],f=!1,g;for(g in d){var h=no("_gac_gb_"+g,a,b,c);f=f||0!==h.length&&h.some(function(m){return 1===m});e.push(g+":"+h.join(","))}return{Jl:f?e.join(";"):"",Il:zs(d,ws)}};function Bs(a,b,c){if(us.test(C.location.host)){var d=C.location.href.match(c);if(d&&2==d.length&&d[1].match(ts))return[{aa:d[1]}]}else return Tn((a||"_gcl")+b);return[]}
var Cs=function(a){return Bs(a,"_aw",xs).map(function(b){return b.aa}).join(".")},Ds=function(a){return Bs(a,"_gb",ys).map(function(b){return b.aa}).join(".")},Es=function(a,b){var c=no((b&&b.prefix||"_gcl")+"_gb",a,b);return 0===c.length||c.every(function(d){return 0===d})?"":c.join(".")};var Fs=function(){if(Fa(z.__uspapi)){var a="";try{z.__uspapi("getUSPData",1,function(b,c){if(c&&b){var d=b.uspString;d&&RegExp("^[\\da-zA-Z-]{1,20}$").test(d)&&(a=d)}})}catch(b){}return a}};var tt={H:{Zh:"ads_conversion_hit",vd:"container_execute_start",di:"container_setup_end",Yf:"container_setup_start",ai:"container_blocking_end",bi:"container_execute_end",ei:"container_yield_end",Zf:"container_yield_start",Ui:"event_execute_end",Ti:"event_evaluation_end",Qg:"event_evaluation_start",Vi:"event_setup_end",he:"event_setup_start",Wi:"ga4_conversion_hit",je:"page_load",Kn:"pageview",Ub:"snippet_load",lj:"tag_callback_error",mj:"tag_callback_failure",nj:"tag_callback_success",oj:"tag_execute_end",
gd:"tag_execute_start"}};function ut(){function a(c,d){var e=Cb(d);e&&b.push(c+"="+e)}var b=[];a("&u","GTM");a("&ut","TAGGING");a("&h","HEALTH");return b.join("")};var vt=!1;
var du=function(a,b){},eu=function(a,b){},fu=function(a,b){},gu=function(a,b){},hu=function(){var a={};return a},Wt=function(a){a=void 0===a?!0:a;var b={};return b},iu=function(){},ju=function(a,b){},
ku=function(a,b,c){},lu=function(){};
var mu=function(a,b){var c=z,d,e=c.GooglebQhCsO;e||(e={},c.GooglebQhCsO=e);d=e;if(d[a])return!1;d[a]=[];d[a][0]=b;return!0};var nu=function(a,b,c){var d=Ik(a,"fmt");if(b){var e=Ik(a,"random"),f=Ik(a,"label")||"";if(!e)return!1;var g=as(decodeURIComponent(f.replace(/\+/g," "))+":"+decodeURIComponent(e.replace(/\+/g," ")));if(!mu(g,b))return!1}d&&4!=d&&(a=Kk(a,"rfmt",d));var h=Kk(a,"fmt",4);Jc(h,function(){z.google_noFurtherRedirects&&b&&b.call&&(z.google_noFurtherRedirects=null,b())},void 0,c,C.getElementsByTagName("script")[0].parentElement||void 0);return!0};var Eu=function(){this.h={}},Fu=function(a,b,c){null!=c&&(a.h[b]=c)},Gu=function(a){return Object.keys(a.h).map(function(b){return encodeURIComponent(b)+"="+encodeURIComponent(a.h[b])}).join("&")},Iu=function(a,b,c,d){};function Ku(a,b){if(data.entities&&data.entities[a])return data.entities[a][b]};var Mu=function(a,b,c){c=void 0===c?!1:c;var d=Lu(a);d.entity.push(b);d._entity||(d._entity={internal:[],external:[]});c?d._entity.external.push(b):d._entity.internal.push(b)},Nu=function(){var a=Lu(mm());if(R(97)){var b,c;return[].concat(ia((null==a?void 0:null==(b=a._entity)?void 0:b.internal)||[]),ia((null==a?void 0:null==(c=a._entity)?void 0:c.external)||[]))}return a.entity},Ou=function(a,b,c){c=void 0===c?!1:c;var d=Lu(a);d.event&&(d.event.push(b),d._event||(d._event={internal:[],external:[]}),
c?d._event.external.push(b):d._event.internal.push(b))},Pu=function(){var a=Lu(mm());if(R(97)){var b,c;return[].concat(ia((null==a?void 0:null==(b=a._event)?void 0:b.internal)||[]),ia((null==a?void 0:null==(c=a._event)?void 0:c.external)||[]))}return a.event||[]};function Lu(a){var b,c=ri.r;c||(c={container:{}},ri.r=c);b=c;var d=b.container[a];d||(d={entity:[],event:[],_entity:{internal:[],external:[]},_event:{internal:[],external:[]}},b.container[a]=d);return d};var Qu=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Ru={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],gaawc:["googtag"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Su={cl:["ecl"],customPixels:["customScripts",
"html"],ecl:["cl"],ehl:["hl"],gaawc:["googtag"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Tu="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),Wu=function(a){var b=Si("gtm.allowlist")||Si("gtm.whitelist");b&&L(9);xi&&(b=["google","gtagfl",
"lcl","zone"]);Uu()&&(xi?L(116):(L(117),Vu&&(b=[],window.console&&window.console.log&&window.console.log("GTM blocked. See go/13687728."))));var c=b&&Xa(Pa(b),Ru),d=Si("gtm.blocklist")||Si("gtm.blacklist");d||(d=Si("tagTypeBlacklist"))&&L(3);d?L(8):d=[];Uu()&&(d=Pa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Pa(d).indexOf("google")&&L(2);var e=d&&Xa(Pa(d),Su),f={};return function(g){var h=g&&g[Oe.na];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];
var m=Ji[h]||[],n=a(h,m);if(!R(94))for(var p=Nu(),q=0;q<p.length;q++)try{n=n&&p[q](h,m)}catch(y){n=!1}if(b){var r;if(r=n)a:{if(0>c.indexOf(h))if(m&&0<m.length)for(var t=0;t<m.length;t++){if(0>c.indexOf(m[t])){L(11);r=!1;break a}}else{r=!1;break a}r=!0}n=r}var u=!1;if(d){var v=0<=e.indexOf(h);if(v)u=v;else{var w=La(e,m||[]);w&&L(10);u=w}}var x=!n||u;x||!(0<=m.indexOf("sandboxedScripts"))||c&&-1!==c.indexOf("sandboxedScripts")||(x=La(e,Tu));return f[h]=x}},Vu=!1;
Vu=!0;var Uu=function(){return Qu.test(z.location&&z.location.hostname)},Xu=function(){if(em){var a=function(b){var c=xf(b),d;if(Cf(c)){var e=c[Oe.na];if(!e)throw"Error: No function name given for function call.";var f=qf[e];d=!!f&&!!f.runInSiloedMode}else d=!!Ku(c[Oe.na],4);return d};R(93)?Mu(mm(),function(b){return a(b.entityId)}):Mu(mm(),a)}};var Zu=function(a,b,c,d,e){if(!Yu()&&!sm(a)){var f="?id="+encodeURIComponent(a)+"&l="+qi.fa,g=0===a.indexOf("GTM-");g||(f+="&cx=c");R(41)&&(f+="&gtm="+Am());var h=bp();h&&(f+="&sign="+qi.zf);var m=c?"/gtag/js":"/gtm.js",n=zi||Bi?ap(b,m+f):void 0;if(!n){var p=qi.wd+m;h&&Dc&&g&&(p=Dc.replace(/^(?:https?:\/\/)?/i,"").split(/[?#]/)[0]);n=Bo("https://","http://",p+f)}var q=a;d.siloed&&(vm({ctid:q,isDestination:!1}),q=gm(q));var r=q,t=um();am().container[r]={state:1,context:d,parent:t};bm({ctid:r,isDestination:!1},
e);Jc(n)}},$u=function(a,b,c,d){if(!Yu()&&!tm(a))if(wm())am().destination[a]={state:0,transportUrl:b,context:c,parent:um()},bm({ctid:a,isDestination:!0},d),L(91);else{var e="/gtag/destination?id="+encodeURIComponent(a)+"&l="+qi.fa+"&cx=c";R(41)&&(e+="&gtm="+Am());bp()&&(e+="&sign="+qi.zf);var f=zi||Bi?ap(b,e):void 0;f||(f=Bo("https://","http://",qi.wd+e));var g=a;c.siloed&&(vm({ctid:g,isDestination:!0}),g=gm(g));am().destination[g]={state:1,context:c,parent:um()};bm({ctid:g,isDestination:!0},d);Jc(f)}};
function Yu(){if($l()){return!0}return!1};var av=!1,bv=0,cv=[];function dv(a){if(!av){var b=C.createEventObject,c="complete"==C.readyState,d="interactive"==C.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){av=!0;for(var e=0;e<cv.length;e++)F(cv[e])}cv.push=function(){for(var f=0;f<arguments.length;f++)F(arguments[f]);return 0}}}function ev(){if(!av&&140>bv){bv++;try{C.documentElement.doScroll("left"),dv()}catch(a){z.setTimeout(ev,50)}}}var fv=function(a){av?a():cv.push(a)};var hv=function(a,b,c){return{entityType:a,indexInOriginContainer:b,nameInOriginContainer:c,originContainerId:lm()}};var jv=function(a,b){this.h=!1;this.F=[];this.M={tags:[]};this.X=!1;this.s=this.C=0;iv(this,a,b)},kv=function(a,b,c,d){if(ui.hasOwnProperty(b)||"__zone"===b)return-1;var e={};mb(d)&&(e=nb(d,e));e.id=c;e.status="timeout";return a.M.tags.push(e)-1},lv=function(a,b,c,d){var e=a.M.tags[b];e&&(e.status=c,e.executionTime=d)},mv=function(a){if(!a.h){for(var b=a.F,c=0;c<b.length;c++)b[c]();a.h=!0;a.F.length=0}},iv=function(a,b,c){void 0!==b&&a.Bf(b);c&&z.setTimeout(function(){return mv(a)},Number(c))};
jv.prototype.Bf=function(a){var b=this,c=Va(function(){return F(function(){a(lm(),b.M)})});this.h?c():this.F.push(c)};var nv=function(a){a.C++;return Va(function(){a.s++;a.X&&a.s>=a.C&&mv(a)})},ov=function(a){a.X=!0;a.s>=a.C&&mv(a)};var pv={},rv=function(){return z[qv()]},sv=!1;var tv=function(a){z.GoogleAnalyticsObject||(z.GoogleAnalyticsObject=a||"ga");var b=z.GoogleAnalyticsObject;if(z[b])z.hasOwnProperty(b);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(Ra());z[b]=c}return z[b]},uv=function(a){if(Pj()){var b=rv();b(a+"require","linker");b(a+"linker:passthrough",!0)}};
function qv(){return z.GoogleAnalyticsObject||"ga"}
var vv=function(a){},wv=function(a,b){return function(){var c=rv(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),m=0>g.indexOf("&tid="+b);m&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+b),!0),f.set("hitCallback",void 0,!0));e(f);m&&(f.set("hitPayload",
g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};var Bv={},Cv={};function Dv(a,b){if(mp){var c;c=b.match(/^(gtm|gtag)\./)?encodeURIComponent(b):"*";Bv[a]="&e="+c+"&eid="+a;wp(a)}}function Ev(a){var b=a.eventId,c=a.Zb;if(!Bv[b])return"";var d=Cv[b]?"":"&es=1";d+=Bv[b];c&&(Cv[b]=!0);return d};var Fv={};function Gv(a,b){mp&&(Fv[a]=Fv[a]||{},Fv[a][b]=(Fv[a][b]||0)+1)}function Hv(a){var b=a.eventId,c=a.Zb,d=Fv[b]||{},e=[],f;for(f in d)d.hasOwnProperty(f)&&e.push(""+f+d[f]);c&&delete Fv[b];return e.length?"&md="+e.join("."):""};var Iv={},Jv={aev:"1",c:"2",jsm:"3",v:"4",j:"5",smm:"6",rmm:"7",input:"8"};
function Kv(a,b,c){if(mp){Iv[a]=Iv[a]||[];var d=Jv[b]||"0",e;e=c instanceof z.Element?"1":c instanceof z.Event?"2":c instanceof z.RegExp?"3":c===z?"4":c===C?"5":c instanceof z.Promise?"6":c instanceof z.Storage?"7":c instanceof z.Date?"8":c instanceof z.History?"9":c instanceof z.Performance?"a":c===z.crypto?"b":c instanceof z.Location?"c":c instanceof z.Navigator?"d":"object"!==typeof c||mb(c)?"0":"e";Iv[a].push(""+d+e)}}
function Lv(a){var b=a.eventId,c=Iv[b]||[];if(!c.length)return"";a.Zb&&delete Iv[b];return"&pcr="+c.join(".")};var Mv={},Nv={};function Ov(a,b,c){if(mp&&b){var d=dp(b);Mv[a]=Mv[a]||[];Mv[a].push(c+d);var e=(Cf(b)?"1":"2")+d;Nv[a]=Nv[a]||[];Nv[a].push(e);wp(a)}}function Pv(a){var b=a.eventId,c=a.Zb,d="",e=Mv[b]||[];e.length&&(d+="&tr="+e.join("."));var f=Nv[b]||[];f.length&&(d+="&ti="+f.join("."));c&&(delete Mv[b],delete Nv[b]);return d};function Qv(a,b,c,d){var e=of[a],f=Rv(a,b,c,d);if(!f)return null;var g=zf(e[Oe.kj],c,[]);if(g&&g.length){var h=g[0];f=Qv(h.index,{onSuccess:f,onFailure:1===h.Aj?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Rv(a,b,c,d){function e(){if(f[Oe.Tk])h();else{var w=Af(f,c,[]),x=w[Oe.kk];if(null!=x)for(var y=0;y<x.length;y++)if(!ck(x[y])){h();return}var A=kv(c.Vb,String(f[Oe.na]),Number(f[Oe.oe]),w[Oe.Uk]),B=!1;w.vtp_gtmOnSuccess=function(){if(!B){B=!0;var D=Sa()-G;Ov(c.id,of[a],"5");lv(c.Vb,A,"success",D);R(16)&&ku(c,f,tt.H.nj);g()}};w.vtp_gtmOnFailure=function(){if(!B){B=!0;var D=Sa()-G;Ov(c.id,of[a],"6");lv(c.Vb,A,"failure",D);R(16)&&ku(c,f,tt.H.mj);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=
c.id;c.priorityId&&(w.vtp_gtmPriorityId=c.priorityId);Ov(c.id,f,"1");var E=function(){ij(3);var D=Sa()-G;Ov(c.id,f,"7");lv(c.Vb,A,"exception",D);R(16)&&ku(c,f,tt.H.lj);B||(B=!0,h())};R(16)&&ju(c,f);var G=Sa();try{yf(w,{event:c,index:a,type:1})}catch(D){E(D)}R(16)&&ku(c,f,tt.H.oj)}}var f=of[a],g=b.onSuccess,h=b.onFailure,m=b.terminate;if(c.isBlocked(f))return null;var n=zf(f[Oe.pj],c,[]);if(n&&n.length){var p=n[0],q=Qv(p.index,{onSuccess:g,onFailure:h,terminate:m},c,d);if(!q)return null;g=q;h=2===
p.Aj?m:q}if(f[Oe.ej]||f[Oe.Wk]){var r=f[Oe.ej]?pf:c.jn,t=g,u=h;if(!r[a]){e=Va(e);var v=Sv(a,r,e);g=v.onSuccess;h=v.onFailure}return function(){r[a](t,u)}}return e}function Sv(a,b,c){var d=[],e=[];b[a]=Tv(d,e,c);return{onSuccess:function(){b[a]=Uv;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=Vv;for(var f=0;f<e.length;f++)e[f]()}}}function Tv(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Uv(a){a()}function Vv(a,b){b()};var Xv=function(a,b){return 1===arguments.length?Wv("set",a):Wv("set",a,b)},Yv=function(a,b){return 1===arguments.length?Wv("config",a):Wv("config",a,b)},Zv=function(a,b,c){c=c||{};c[N.g.Ob]=a;return Wv("event",b,c)};function Wv(a){return arguments}var $v=function(){this.h=[];this.s=[]};$v.prototype.enqueue=function(a,b,c){var d=this.h.length+1;a["gtm.uniqueEventId"]=b;a["gtm.priorityId"]=d;c.eventId=b;c.fromContainerExecution=!0;c.priorityId=d;var e={message:a,notBeforeEventId:b,priorityId:d,messageContext:c};this.h.push(e);for(var f=0;f<this.s.length;f++)try{this.s[f](e)}catch(g){}};$v.prototype.listen=function(a){this.s.push(a)};
$v.prototype.get=function(){for(var a={},b=0;b<this.h.length;b++){var c=this.h[b],d=a[c.notBeforeEventId];d||(d=[],a[c.notBeforeEventId]=d);d.push(c)}return a};$v.prototype.prune=function(a){for(var b=[],c=[],d=0;d<this.h.length;d++){var e=this.h[d];e.notBeforeEventId===a?b.push(e):c.push(e)}this.h=c;return b};var bw=function(a,b,c){c.eventMetadata=c.eventMetadata||{};c.eventMetadata.source_canonical_id=Tf.Ef;aw().enqueue(a,b,c)},ww=function(){var a=cw;aw().listen(a)};
function aw(){var a=ri.mb;a||(a=new $v,ri.mb=a);return a}
var Dw=function(){var a=ri.zones;a||(a=ri.zones=new Cw);return a},Ew={zone:1,cn:1,css:1,ew:1,eq:1,ge:1,gt:1,lc:1,le:1,lt:1,re:1,sw:1,um:1},Fw={cl:["ecl"],ecl:["cl"],ehl:["hl"],gaawc:["googtag"],hl:["ehl"]},Cw=function(){this.h={};this.s={};this.C=0};aa=Cw.prototype;aa.isActive=function(a,b){for(var c,d=0;d<a.length&&!(c=this.h[a[d]]);d++);if(!c)return!0;if(!this.isActive([c.Jh],b))return!1;for(var e=0;e<c.Ve.length;e++)if(this.s[c.Ve[e]].ld(b))return!0;return!1};aa.getIsAllowedFn=function(a,b){if(!this.isActive(a,
b))return function(){return!1};for(var c,d=0;d<a.length&&!(c=this.h[a[d]]);d++);if(!c)return function(){return!0};for(var e=[],f=0;f<c.Ve.length;f++){var g=this.s[c.Ve[f]];g.ld(b)&&e.push(g)}if(!e.length)return function(){return!1};var h=this.getIsAllowedFn([c.Jh],b);return function(m,n){n=n||[];if(!h(m,n))return!1;for(var p=0;p<e.length;++p)if(e[p].C(m,n))return!0;return!1}};aa.unregisterChild=function(a){for(var b=0;b<a.length;b++)delete this.h[a[b]]};aa.createZone=function(a,b){var c=String(++this.C);
this.s[c]=new Gw(a,b);return c};aa.updateZone=function(a,b,c){var d=this.s[a];d&&d.F(b,c)};aa.registerChild=function(a,b,c){var d=this.h[a];if(!d&&ri[a]||!d&&sm(a)||d&&d.Jh!==b)return!1;if(d)return d.Ve.push(c),!1;this.h[a]={Jh:b,Ve:[c]};return!0};var Gw=function(a,b){this.h=[{eventId:a,ld:!0}];this.s=null;if(b){this.s={};for(var c=0;c<b.length;c++)this.s[b[c]]=!0}};Gw.prototype.F=function(a,b){var c=this.h[this.h.length-1];a<=c.eventId||c.ld!==b&&this.h.push({eventId:a,ld:b})};Gw.prototype.ld=function(a){for(var b=
this.h.length-1;0<=b;b--)if(this.h[b].eventId<=a)return this.h[b].ld;return!1};Gw.prototype.C=function(a,b){b=b||[];if(!this.s||Ew[a]||this.s[a])return!0;for(var c=0;c<b.length;++c)if(this.s[b[c]])return!0;return!1};var Hw=function(a,b,c,d,e,f){var g=Dw();c=c&&Xa(c,Fw);for(var h=g.createZone(a,c),m=0;m<b.length;m++){var n=String(b[m]);if(g.registerChild(n,lm(),h)){var p=n,q=a,r=d,t=e,u=f;if(0===p.indexOf("GTM-"))Zu(p,void 0,!1,{source:1,fromContainerExecution:!0});else{var v=Wv("js",Ra());Zu(p,void 0,
!0,{source:1,fromContainerExecution:!0});var w={originatingEntity:t,inheritParentConfig:u};R(43)||bw(v,q,w);bw(Yv(p,r),q,w)}}}return h},Iw=function(a,b,c){Dw().updateZone(a,b,c)};
var Jw=function(a){var b=ri.zones;return b?b.getIsAllowedFn(hm(),a):function(){return!0}},Kw=function(a){var b=ri.zones;return b?b.isActive(hm(),a):!0},Lw=function(){R(93)?Ou(mm(),function(a){return Kw(a.originalEventData["gtm.uniqueEventId"])}):Ou(mm(),function(a,b){return Kw(b)});R(94)&&R(95)&&Mu(mm(),function(a){var b=a.entityId,c=a.securityGroups;return Jw(a.originalEventData["gtm.uniqueEventId"])(b,c)})};var Ow=function(a,b){for(var c=[],d=0;d<of.length;d++)if(a[d]){var e=of[d];var f=nv(b.Vb);try{var g=Qv(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(g){var h=e[Oe.na];if(!h)throw"Error: No function name given for function call.";var m=qf[h];c.push({Yj:d,Oj:(m?m.priorityOverride||0:0)||Ku(e[Oe.na],1)||0,execute:g})}else Mw(d,b),f()}catch(p){f()}}c.sort(Nw);for(var n=0;n<c.length;n++)c[n].execute();return 0<c.length};
function Nw(a,b){var c,d=b.Oj,e=a.Oj;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Yj,h=b.Yj;f=g>h?1:g<h?-1:0}return f}
function Mw(a,b){if(mp){var c=function(d){var e=b.isBlocked(of[d])?"3":"4",f=zf(of[d][Oe.kj],b,[]);f&&f.length&&c(f[0].index);Ov(b.id,of[d],e);var g=zf(of[d][Oe.pj],b,[]);g&&g.length&&c(g[0].index)};c(a)}}var Rw=!1,Pw;
var Yw=function(a){var b=a["gtm.uniqueEventId"],c=a["gtm.priorityId"],d=a.event;if(R(16)){}if("gtm.js"===d){if(Rw)return!1;Rw=!0}var e,f=!1,g=Pu(),h;if(R(93)){var m=nb(a);h=g.every(function(w){return w({originalEventData:m})})}else h=g.every(function(w){return w(d,b)});if(h)e=Jw(b);else{if("gtm.js"!==d&&"gtm.init"!==d&&"gtm.init_consent"!==
d)return!1;f=!0;e=Jw(Number.MAX_SAFE_INTEGER)}Dv(b,d);var n=a.eventCallback,p=a.eventTimeout,q=nb(a),r={id:b,priorityId:c,name:d,isBlocked:Tw(e,q),jn:[],logMacroError:function(){L(6);ij(0)},cachedModelValues:Uw(),checkPixieIncompatibility:Vw(b),Vb:new jv(function(){if(R(16)){}n&&n.apply(n,[].slice.call(arguments,0))},p),originalEventData:q};R(32)&&(r.reportMacroDiscrepancy=Gv);R(16)&&fu(r.id,r.name);var t=Kf(r);R(16)&&gu(r.id,r.name);f&&(t=Ww(t));if(R(16)){}var u=Ow(t,r),v=!1;ov(r.Vb);"gtm.js"!==d&&"gtm.sync"!==d||vv(lm());return Xw(t,u)||v};function Vw(a){return function(b){pb(b)||Kv(a,"input",b)}}
function Uw(){var a={};a.event=Xi("event",1);a.ecommerce=Xi("ecommerce",1);a.gtm=Xi("gtm");a.eventModel=Xi("eventModel");return a}function Tw(a,b){var c=Wu(a);return R(94)?function(d){if(c(d))return!0;var e=d&&d[Oe.na];if(!e||"string"!=typeof e)return!0;e=e.replace(/^_*/,"");for(var f=Nu(),g=Ji[e]||[],h=ea(f),m=h.next();!m.done;m=h.next()){var n=m.value;try{if(!n({entityId:e,securityGroups:g,originalEventData:b}))return!0}catch(p){return!0}}return!1}:c}
function Ww(a){for(var b=[],c=0;c<a.length;c++)if(a[c]){var d=String(of[c][Oe.na]);if(ti[d]||void 0!==of[c][Oe.Xk]||Ki[d]||Ku(d,2))b[c]=!0}return b}function Xw(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&of[c]&&!ui[String(of[c][Oe.na])])return!0;return!1}var Nf;var Zw={},$w={},ax=function(a,b){for(var c=[],d=[],e={},f=0;f<a.length;e={Kh:void 0,qh:void 0},f++){var g=a[f];if(0<=g.indexOf("-")){if(e.Kh=yo(g,b),e.Kh){var h=jm();Ia(h,function(r){return function(t){return r.Kh.da===t}}(e))?c.push(g):d.push(g)}}else{var m=Zw[g]||[];e.qh={};m.forEach(function(r){return function(t){return r.qh[t]=!0}}(e));for(var n=hm(),p=0;p<n.length;p++)if(e.qh[n[p]]){c=c.concat(jm());break}var q=$w[g]||[];q.length&&(c=c.concat(q))}}return{Cm:c,Fm:d}},bx=function(a){l(Zw,function(b,
c){var d=c.indexOf(a);0<=d&&c.splice(d,1)})},cx=function(a){l($w,function(b,c){var d=c.indexOf(a);0<=d&&c.splice(d,1)})};var dx="HA GF G UA AW DC MC".split(" "),ex=!1,fx=!1;function gx(a,b){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:Li()});b.eventId=a["gtm.uniqueEventId"];b.priorityId=a["gtm.priorityId"];return{eventId:b.eventId,priorityId:b.priorityId}}var hx=void 0,ix=void 0;function jx(a,b,c){var d=nb(a);d.eventId=void 0;d.inheritParentConfig=void 0;Object.keys(b).some(function(f){return void 0!==b[f]})&&L(136);var e=nb(b);nb(c,e);bw(Yv(hm()[0],e),a.eventId,d)}
function kx(a){for(var b=ea([N.g.Sd,N.g.Pb]),c=b.next();!c.done;c=b.next()){var d=c.value,e=a&&a[d]||Pp.C[d];if(e)return e}}
var lx={config:function(a,b){var c=R(33),d=gx(a,b);if(!(2>a.length)&&k(a[1])){var e={};if(2<a.length){if(void 0!=a[2]&&!mb(a[2])||3<a.length)return;e=a[2]}var f=yo(a[1],b.isGtmEvent);if(f){var g,h,m;a:{if(!dm.ie){var n=nm(um());if(ym(n)){var p=n.parent,q=p.isDestination;m={Lm:nm(p),Bm:q};break a}}m=void 0}var r=m;r&&(g=r.Lm,h=r.Bm);Dv(d.eventId,"gtag.config");var t=f.da,u=f.id!==t;if(u?-1===jm().indexOf(t):-1===hm().indexOf(t)){if(!(c&&b.inheritParentConfig||e[N.g.yb])){var v=kx(e);if(u)$u(t,v,{source:2,
fromContainerExecution:b.fromContainerExecution});else if(c&&void 0!==g&&-1!==g.containers.indexOf(t)){var w=e;hx?jx(b,w,hx):ix||(ix=nb(w))}else Zu(t,v,!0,{source:2,fromContainerExecution:b.fromContainerExecution})}}else{if(g&&(L(128),h&&L(130),c&&b.inheritParentConfig)){var x;var y=e;ix?(jx(b,ix,y),x=!1):(!y[N.g.Qb]&&wi&&hx||(hx=nb(y)),x=!0);x&&g.containers&&g.containers.join(",");return}if(wi&&!u&&!e[N.g.Qb]){var A=fx;fx=!0;if(A)return}ex||L(43);if(!b.noTargetGroup)if(u){cx(f.id);var B=f.id,E=e[N.g.Pd]||
"default";E=String(E).split(",");for(var G=0;G<E.length;G++){var D=$w[E[G]]||[];$w[E[G]]=D;0>D.indexOf(B)&&D.push(B)}}else{bx(f.id);var M=f.id,P=e[N.g.Pd]||"default";P=P.toString().split(",");for(var O=0;O<P.length;O++){var T=Zw[P[O]]||[];Zw[P[O]]=T;0>T.indexOf(M)&&T.push(M)}}delete e[N.g.Pd];var Y=b.eventMetadata||{};Y.hasOwnProperty("is_external_event")||(Y.is_external_event=!b.fromContainerExecution);b.eventMetadata=Y;delete e[N.g.Vc];for(var W=u?[f.id]:jm(),X=0;X<W.length;X++){var la=e,ka=W[X],
fa=nb(b),Da=yo(ka,fa.isGtmEvent);Da&&Pp.push("config",[la],Da,fa)}}}}},consent:function(a,b){if(3===a.length){L(39);var c=gx(a,b),d=a[1],e=a[2];b.fromContainerExecution||(e[N.g.N]&&L(139),e[N.g.Ea]&&L(140));"default"===d?Yj(e):"update"===d?Zj(e,c):"declare"===d?b.fromContainerExecution&&Xj(e):R(66)&&"core_platform_services"===d&&ak(e)}},event:function(a,b){var c=a[1];if(!(2>a.length)&&k(c)){var d;if(2<a.length){if(!mb(a[2])&&void 0!=a[2]||3<a.length)return;d=a[2]}var e=d,f={},g=(f.event=c,f);e&&(g.eventModel=
nb(e),e[N.g.Vc]&&(g.eventCallback=e[N.g.Vc]),e[N.g.Kd]&&(g.eventTimeout=e[N.g.Kd]));var h=gx(a,b),m=h.eventId,n=h.priorityId;g["gtm.uniqueEventId"]=m;n&&(g["gtm.priorityId"]=n);if("optimize.callback"===c)return g.eventModel=g.eventModel||{},g;var p;var q=d,r=q&&q[N.g.Ob];void 0===r&&(r=Si(N.g.Ob,2),void 0===r&&(r="default"));if(k(r)||Ha(r)){var t;b.isGtmEvent?t=k(r)?[r]:r:t=r.toString().replace(/\s+/g,"").split(",");var u=ax(t,b.isGtmEvent),v=u.Cm,w=u.Fm;if(w.length)for(var x=kx(q),y=0;y<w.length;y++){var A=
yo(w[y],b.isGtmEvent);A&&$u(A.da,x,{source:3,fromContainerExecution:b.fromContainerExecution})}p=Ao(v,b.isGtmEvent)}else p=void 0;var B=p;if(B){Dv(m,c);for(var E=[],G=0;G<B.length;G++){var D=B[G],M=nb(b);if(-1!==dx.indexOf(om(D.prefix))){var P=nb(d),O=M.eventMetadata||{};O.hasOwnProperty("is_external_event")||(O.is_external_event=!M.fromContainerExecution);M.eventMetadata=O;delete P[N.g.Vc];Rp(c,P,D.id,M)}E.push(D.id)}g.eventModel=g.eventModel||{};0<B.length?g.eventModel[N.g.Ob]=E.join():delete g.eventModel[N.g.Ob];
ex||L(43);void 0===b.noGtmEvent&&b.eventMetadata&&b.eventMetadata.syn_or_mod&&(b.noGtmEvent=!0);g.eventModel[N.g.Lb]&&(b.noGtmEvent=!0);return b.noGtmEvent?void 0:g}}},get:function(a,b){L(53);if(4===a.length&&k(a[1])&&k(a[2])&&Fa(a[3])){var c=yo(a[1],b.isGtmEvent),d=String(a[2]),e=a[3];if(c){ex||L(43);var f=kx();if(!Ia(jm(),function(h){return c.da===h}))$u(c.da,f,{source:4,fromContainerExecution:b.fromContainerExecution});else if(-1!==dx.indexOf(om(c.prefix))){gx(a,b);var g={};Uj(nb((g[N.g.lb]=d,
g[N.g.wb]=e,g)));Sp(d,function(h){F(function(){return e(h)})},c.id,b)}}}},js:function(a,b){if(2==a.length&&a[1].getTime){ex=!0;var c=gx(a,b),d=c.eventId,e=c.priorityId,f={};return f.event="gtm.js",f["gtm.start"]=a[1].getTime(),f["gtm.uniqueEventId"]=d,f["gtm.priorityId"]=e,f}},policy:function(a){if(3===a.length&&k(a[1])&&Fa(a[2])){Of(a[1],a[2]);if(L(74),"all"===a[1]){L(75);var b=!1;try{b=a[2](lm(),"unknown",{})}catch(c){}b||L(76)}}else{
L(73);}},set:function(a,b){var c;2==a.length&&mb(a[1])?c=nb(a[1]):3==a.length&&k(a[1])&&(c={},mb(a[2])||Ha(a[2])?c[a[1]]=nb(a[2]):c[a[1]]=a[2]);if(c){var d=gx(a,b),e=d.eventId,f=d.priorityId;nb(c);var g=nb(c);Pp.push("set",[g],void 0,b);c["gtm.uniqueEventId"]=e;f&&(c["gtm.priorityId"]=f);R(9)&&delete c.event;b.overwriteModelFields=!0;return c}}},mx={policy:!0};var nx=function(a){var b=z[qi.fa].hide;if(b&&void 0!==b[a]&&b.end){b[a]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}},ox=function(a){var b=z[qi.fa],c=b&&b.hide;c&&c.end&&(c[a]=!0)};var px=!1,qx=[];function rx(){if(!px){px=!0;for(var a=0;a<qx.length;a++)F(qx[a])}}var sx=function(a){px?F(a):qx.push(a)};var Jx=function(a){if(Ix(a))return a;this.h=a};Jx.prototype.getUntrustedMessageValue=function(){return this.h};var Ix=function(a){return!a||"object"!==jb(a)||mb(a)?!1:"getUntrustedMessageValue"in a};Jx.prototype.getUntrustedMessageValue=Jx.prototype.getUntrustedMessageValue;var Kx=0,Lx={},Mx=[],Nx=[],Ox=!1,Px=!1;function Qx(a,b){return a.messageContext.eventId-b.messageContext.eventId||a.messageContext.priorityId-b.messageContext.priorityId}
var Rx=function(a){return z[qi.fa].push(a)},Sx=function(a,b,c){a.eventCallback=b;c&&(a.eventTimeout=c);return Rx(a)},Tx=function(a,b){if(!Ga(b)||0>b)b=0;var c=ri[qi.fa],d=0,e=!1,f=void 0;f=z.setTimeout(function(){e||(e=!0,a());f=void 0},b);return function(){var g=c?c.subscribers:1;++d===g&&(f&&(z.clearTimeout(f),f=void 0),e||(a(),e=!0))}};
function Ux(a,b){var c=a._clear||b.overwriteModelFields;l(a,function(e,f){"_clear"!==e&&(c&&Vi(e),Vi(e,f))});Gi||(Gi=a["gtm.start"]);var d=a["gtm.uniqueEventId"];if(!a.event)return!1;"number"!==typeof d&&(d=Li(),a["gtm.uniqueEventId"]=d,Vi("gtm.uniqueEventId",d));return Yw(a)}
function Vx(a){if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Ma(a)){var b=a[0];if("config"===b||"event"===b||"js"===b||"get"===b)return!0}return!1}
function Wx(){var a;if(Nx.length)a=Nx.shift();else if(Mx.length)a=Mx.shift();else return;var b;var c=a;if(Ox||!Vx(c.message))b=c;else{Ox=!0;var d=c.message["gtm.uniqueEventId"];"number"!==typeof d&&(d=c.message["gtm.uniqueEventId"]=Li());var e={},f={message:(e.event="gtm.init_consent",e["gtm.uniqueEventId"]=d-2,e),messageContext:{eventId:d-2}},g={},h={message:(g.event="gtm.init",g["gtm.uniqueEventId"]=d-1,g),messageContext:{eventId:d-1}};Mx.unshift(h,c);if(mp){var m=Tf.ctid;if(m){var n,p=nm(um());
n=p&&p.context;var q,r=Lm(z.location.href);q=r.hostname+r.pathname;var t=n&&n.fromContainerExecution,u=n&&n.source,v=Tf.Ef,w=dm.ie;mp&&(Ap||(Ap=q),Bp.push(m+";"+v+";"+(t?1:0)+";"+(u||0)+";"+(w?1:0)))}}b=f}return b}
function Xx(){for(var a=!1,b;!Px&&(b=Wx());){Px=!0;delete Pi.eventModel;Ri();var c=b,d=c.message,e=c.messageContext;if(null==d)Px=!1;else{e.fromContainerExecution&&Wi();try{if(Fa(d))try{d.call(Ti)}catch(x){}else if(Ha(d)){var f=d;if(k(f[0])){var g=f[0].split("."),h=g.pop(),m=f.slice(1),n=Si(g.join("."),2);if(null!=n)try{n[h].apply(n,m)}catch(x){}}}else{var p=void 0,q=!1;if(Ma(d)){a:{if(d.length&&k(d[0])){var r=lx[d[0]];if(r&&(!e.fromContainerExecution||!mx[d[0]])){p=r(d,e);break a}}p=void 0}(q=p&&
"set"===d[0]&&!!p.event)&&L(101)}else p=d;if(p){var t=Ux(p,e);a=t||a;q&&t&&L(113)}}}finally{e.fromContainerExecution&&Ri(!0);var u=d["gtm.uniqueEventId"];if("number"===typeof u){for(var v=Lx[String(u)]||[],w=0;w<v.length;w++)Nx.push(Yx(v[w]));v.length&&Nx.sort(Qx);delete Lx[String(u)];u>Kx&&(Kx=u)}Px=!1}}}return!a}
function Zx(){if(R(16)){var a=$x();}var b=Xx();if(R(16)){}try{nx(lm())}catch(c){}return b}
function cw(a){if(Kx<a.notBeforeEventId){var b=String(a.notBeforeEventId);Lx[b]=Lx[b]||[];Lx[b].push(a)}else Nx.push(Yx(a)),Nx.sort(Qx),F(function(){Px||Xx()})}function Yx(a){return{message:a.message,messageContext:a.messageContext}}
var ay=function(){function a(f){var g={};if(Ix(f)){var h=f;f=Ix(h)?h.getUntrustedMessageValue():void 0;g.fromContainerExecution=!0}return{message:f,messageContext:g}}var b=Ec(qi.fa,[]),c=ri[qi.fa]=ri[qi.fa]||{};!0===c.pruned&&L(83);Lx=aw().get();ww();fv(function(){if(!c.gtmDom){c.gtmDom=!0;var f={};b.push((f.event="gtm.dom",f))}});sx(function(){if(!c.gtmLoad){c.gtmLoad=!0;var f={};b.push((f.event="gtm.load",f))}});c.subscribers=(c.subscribers||0)+1;var d=b.push;b.push=function(){var f;if(0<ri.SANDBOXED_JS_SEMAPHORE){f=
[];for(var g=0;g<arguments.length;g++)f[g]=new Jx(arguments[g])}else f=[].slice.call(arguments,0);var h=f.map(function(q){return a(q)});Mx.push.apply(Mx,h);var m=d.apply(b,f),n=Math.max(100,Number("1000")||300);if(this.length>n)for(L(4),c.pruned=!0;this.length>n;)this.shift();var p="boolean"!==typeof m||m;return Xx()&&p};var e=b.slice(0).map(function(f){return a(f)});Mx.push.apply(Mx,e);if($x()){if(R(16)){}F(Zx)}},$x=function(){var a=!0;return a};function by(a){if(null==a||0===a.length)return!1;var b=Number(a),c=Sa();return b<c+3E5&&b>c-9E5}function cy(a){return a&&0===a.indexOf("pending:")?by(a.substr(8)):!1};
var xy=function(){};var yy=function(){};yy.prototype.toString=function(){return"undefined"};var zy=new yy;var gz=z.clearTimeout,hz=z.setTimeout,iz=function(a,b,c,d){if($l()){b&&F(b)}else return Jc(a,b,c,d)},jz=function(){return new Date},kz=function(){return z.location.href},lz=function(a){return Gm(Lm(a),"fragment")},mz=function(a){return Hm(Lm(a))},nz=function(a,b){return Si(a,b||2)},oz=function(a,b,c){return b?Sx(a,b,c):Rx(a)},pz=function(a,b){z[a]=b},U=function(a,b,c){b&&(void 0===z[a]||c&&!z[a])&&(z[a]=b);return z[a]},
qz=function(a,b,c){return Hl(a,b,void 0===c?!0:!!c)},rz=function(a,b,c){return 0===Ql(a,b,c)},sz=function(a,b){if($l()){b&&F(b)}else Mc(a,b)},tz=function(a){return!!Ky(a,"init",!1)},uz=function(a){Iy(a,"init",!0)},vz=function(a,b,c){pb(a)||Kv(c,b,a)};

function Sz(a,b){function c(g){var h=Lm(g),m=Gm(h,"protocol"),n=Gm(h,"host",!0),p=Gm(h,"port"),q=Gm(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===m||"http"===m&&"80"===p||"https"===m&&"443"===p)m="web",p="default";return[m,n,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Tz(a){return Uz(a)?1:0}
function Uz(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Array.isArray(c)){for(var d=0;d<c.length;d++){var e=nb(a,{});nb({arg1:c[d],any_of:void 0},e);if(Tz(e))return!0}return!1}switch(a["function"]){case "_cn":return tg(b,c);case "_css":var f;a:{if(b)try{for(var g=0;g<pg.length;g++){var h=pg[g];if(b[h]){f=b[h](c);break a}}}catch(m){}f=!1}return f;case "_ew":return qg(b,c);case "_eq":return ug(b,c);case "_ge":return vg(b,c);case "_gt":return xg(b,c);case "_lc":return 0<=String(b).split(",").indexOf(String(c));
case "_le":return wg(b,c);case "_lt":return yg(b,c);case "_re":return sg(b,c,a.ignore_case);case "_sw":return zg(b,c);case "_um":return Sz(b,c)}return!1};function Vz(){var a=["&cv=1","&rv="+qi.Ug,"&tc="+of.filter(function(b){return b}).length];qi.me&&a.push("&x="+qi.me);Ni()&&a.push("&tag_exp="+Ni());return a.join("")};function Wz(){var a=qj();return a.length?"&exp_geo="+a:""}var Xz;function Yz(){try{null!=Xz||(Xz=(new Intl.DateTimeFormat).resolvedOptions().timeZone)}catch(b){}var a;return(null==(a=Xz)?0:a.length)?"&exp_tz="+Xz:""};var Zz=function(){return!1},$z=function(){var a={};return function(b,c,d){}};function aA(){var a=bA;return function(b,c,d){var e=d&&d.event;cA(c);var f=0===b.indexOf("__cvt_")?void 0:1,g=new sb;l(c,function(r,t){var u=md(t,void 0,f);void 0===u&&void 0!==t&&L(44);g.set(r,u)});a.h.h.F=Hf();var h={uj:Xf(b),eventId:void 0!==e?e.id:void 0,priorityId:void 0!==e?e.priorityId:void 0,Bf:void 0!==e?function(r){return e.Vb.Bf(r)}:void 0,wc:function(){return b},log:function(){},Fl:{index:d&&d.index,type:d&&d.type,name:d&&d.name},Wm:!!Ku(b,3),originalEventData:null==e?void 0:e.originalEventData};
e&&e.cachedModelValues&&(h.cachedModelValues={gtm:e.cachedModelValues.gtm,ecommerce:e.cachedModelValues.ecommerce});if(Zz()){var m=$z(),n=void 0,p=void 0;h.eb={Vh:[],pe:{},pb:function(r,t,u){1===t&&(n=r);7===t&&(p=u);m(r,t,u)},Dh:ph()};h.log=function(r,t){if(n){var u=Array.prototype.slice.call(arguments,1);m(n,4,{level:r,source:p,message:u})}}}var q=Ke(a,h,[b,g]);a.h.h.F=void 0;q instanceof wa&&"return"===q.h&&(q=q.s);return nd(q,void 0,f)}}
function cA(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Fa(b)&&(a.gtmOnSuccess=function(){F(b)});Fa(c)&&(a.gtmOnFailure=function(){F(c)})};function dA(a,b){var c=this;}dA.O="addConsentListener";var eA;var fA=function(a){for(var b=0;b<a.length;++b)if(eA)try{a[b]()}catch(c){L(77)}else a[b]()};function gA(a,b,c){var d=this,e;return e}gA.D="internal.addDataLayerEventListener";function hA(a,b,c){}hA.O="addDocumentEventListener";function iA(a,b,c,d){}iA.O="addElementEventListener";function jA(a){}jA.O="addEventCallback";
function nA(a){}nA.D="internal.addFormAbandonmentListener";function oA(a,b,c,d){}oA.D="internal.addFormData";var pA={},qA=[],rA={},sA=0,tA=0;
function AA(a,b){}AA.D="internal.addFormInteractionListener";
function HA(a,b){}HA.D="internal.addFormSubmitListener";
function MA(a){}MA.D="internal.addGaSendListener";var NA=function(a,b){this.tagId=a;this.uc=b};
function OA(a,b,c){var d=this;}
OA.D="internal.loadGoogleTag";function PA(a){return new ed("",function(b){b=H(this,b);if(b instanceof ed)return new ed("",function(){var c=ta.apply(0,arguments),d=this,e=nb(this.h.h);e.eventId=a.eventId;e.priorityId=a.priorityId;e.originalEventData=a.originalEventData;var f=c.map(function(h){return H(d,h)}),g=Ba(this.h);g.h=e;return b.ab.apply(b,[g].concat(ia(f)))})})};function QA(a,b,c){var d=this;}
QA.D="internal.addGoogleTagRestriction";var RA={},SA=[];
var ZA=function(a,b){};
ZA.D="internal.addHistoryChangeListener";function $A(a,b,c){}$A.O="addWindowEventListener";function aB(a,b){return!0}aB.O="aliasInWindow";function bB(a,b,c){}bB.D="internal.appendRemoteConfigParameter";function cB(){var a=2;return a};function dB(a,b){var c;return c}dB.O="callInWindow";function eB(a){}eB.O="callLater";function fB(a){}fB.D="callOnDomReady";function gB(a){}gB.D="callOnWindowLoad";function hB(a,b){var c;return c}hB.D="internal.computeGtmParameter";function iB(a,b){var c;var d=md(c,this.h,cB());void 0===d&&void 0!==c&&L(45);return d}iB.O="copyFromDataLayer";
function jB(a){var b=void 0;return b}jB.D="internal.copyFromDataLayerCache";function kB(a){var b;return b}kB.O="copyFromWindow";function lB(a){var b=void 0;return md(b,this.h,cB())}lB.D="internal.copyKeyFromWindow";function mB(a,b){var c;return c}mB.D="internal.copyPreHit";function nB(a,b){var c=null,d=cB();return md(c,this.h,d)}nB.O="createArgumentsQueue";function oB(a){var b;return md(b,this.h,1)}oB.D="internal.createGaCommandQueue";function pB(a){var b;return md(b,this.h,
cB())}pB.O="createQueue";function qB(a,b){var c=null;return c}qB.D="internal.createRegex";function rB(a){if(!a)return{};var b=a.Fl;return hv(b.type,b.index,b.name)}function sB(a){return a?{originatingEntity:rB(a)}:{}};function tB(a){}tB.D="internal.declareConsentState";function uB(a){var b="";return b}uB.D="internal.decodeUrlHtmlEntities";function vB(a,b,c){var d;return d}vB.D="internal.decorateUrlWithGaCookies";function wB(a){var b;K(this,"detect_user_provided_data","auto");var c=nd(a)||{},d=tr({md:!!c.includeSelector,nd:!!c.includeVisibility,ue:c.excludeElementSelectors,ob:c.fieldFilters,Th:!!c.selectMultipleElements});b=new sb;var e=new rb;b.set("elements",e);for(var f=d.elements,g=0;g<f.length;g++)e.push(xB(f[g]));void 0!==d.Mh&&b.set("preferredEmailElement",xB(d.Mh));b.set("status",d.status);
return b}
var xB=function(a){var b=new sb;b.set("userData",a.U);b.set("tagName",a.tagName);void 0!==a.querySelector&&b.set("querySelector",a.querySelector);void 0!==a.isVisible&&b.set("isVisible",a.isVisible);if(R(30)){}else switch(a.type){case "1":b.set("type","email")}return b};wB.D="internal.detectUserProvidedData";
function AB(a,b){return b}AB.D="internal.enableAutoEventOnClick";
function FB(a,b){return b}FB.D="internal.enableAutoEventOnElementVisibility";function GB(){}GB.D="internal.enableAutoEventOnError";var HB={},IB=[],JB={},KB=0,LB=0;
function RB(a,b){var c=this;return b}RB.D="internal.enableAutoEventOnFormInteraction";
function WB(a,b){var c=this;return b}WB.D="internal.enableAutoEventOnFormSubmit";
function aC(){var a=this;}aC.D="internal.enableAutoEventOnGaSend";var bC={},cC=[];
function jC(a,b){var c=this;return b}jC.D="internal.enableAutoEventOnHistoryChange";var kC=["http://","https://","javascript:","file://"];
function oC(a,b){var c=this;return b}oC.D="internal.enableAutoEventOnLinkClick";var pC,qC;
function BC(a,b){var c=this;
return b}BC.D="internal.enableAutoEventOnScroll";function CC(a){return function(){if(a.Ac&&a.Cc>=a.Ac)a.yc&&z.clearInterval(a.yc);else{a.Cc++;var b=Sa();Rx({event:a.eventName,"gtm.timerId":a.yc,"gtm.timerEventNumber":a.Cc,"gtm.timerInterval":a.interval,"gtm.timerLimit":a.Ac,"gtm.timerStartTime":a.Se,"gtm.timerCurrentTime":b,"gtm.timerElapsedTime":b-a.Se,"gtm.triggers":a.Xh})}}}
function DC(a,b){
return b}DC.D="internal.enableAutoEventOnTimer";var xc=ca(["data-gtm-yt-inspected-"]),EC=["www.youtube.com","www.youtube-nocookie.com"],FC,GC=!1;
function QC(a,b){var c=this;return b}QC.D="internal.enableAutoEventOnYouTubeActivity";var RC;function SC(a){var b=!1;return b}SC.D="internal.evaluateMatchingRules";var wD=function(){var a=!0;ml(7)&&ml(9)&&ml(10)||(a=!1);return a};
var AD=function(a,b){if(!b.isGtmEvent){var c=S(b,N.g.lb),d=S(b,N.g.wb),e=S(b,c);if(void 0===e){var f=void 0;xD.hasOwnProperty(c)?f=xD[c]:yD.hasOwnProperty(c)&&(f=yD[c]);1===f&&(f=zD(c));k(f)?rv()(function(){var g=rv().getByName(a).get(f);d(g)}):d(void 0)}else d(e)}},BD=function(a,b){var c=a[N.g.Mb],d=b+".",e=a[N.g.W]||"",f=void 0===c?!!a.use_anchor:"fragment"===c,g=!!a[N.g.zb];e=String(e).replace(/\s+/g,"").split(",");var h=rv();h(d+"require","linker");h(d+"linker:autoLink",e,f,g)},FD=function(a,
b,c){if(Pj()||R(25))if(!c.isGtmEvent||!CD[a]){var d=!ck(N.g.R),e=function(f){var g,h,m=rv(),n=DD(b,"",c),p,q=n.createOnlyFields._useUp;if(c.isGtmEvent||ED(b,n.createOnlyFields)){c.isGtmEvent&&(g="gtm"+Li(),h=n.createOnlyFields,n.gtmTrackerName&&(h.name=g));m(function(){var t=m.getByName(b);t&&(p=t.get("clientId"));c.isGtmEvent||m.remove(b)});m("create",a,c.isGtmEvent?h:n.createOnlyFields);d&&ck(N.g.R)&&(d=!1,m(function(){var t=rv().getByName(c.isGtmEvent?g:b);!t||t.get("clientId")==p&&q||(c.isGtmEvent?(n.fieldsToSet["&gcu"]="1",n.fieldsToSet["&sst.gcut"]=li[f]):(n.fieldsToSend["&gcu"]="1",n.fieldsToSend["&sst.gcut"]=li[f]),t.set(n.fieldsToSet),c.isGtmEvent?t.send("pageview"):t.send("pageview",n.fieldsToSend))}));c.isGtmEvent&&m(function(){m.remove(g)})}};ek(function(){return e(N.g.R)},N.g.R);ek(function(){return e(N.g.J)},
N.g.J);c.isGtmEvent&&(CD[a]=!0)}},GD=function(a,b){bp()&&b&&(a[N.g.kb]=b)},PD=function(a,b,c){function d(){var O=S(c,N.g.Rc);h(function(){if(!c.isGtmEvent&&mb(O)){var T=u.fieldsToSend,Y=m().getByName(n),W;for(W in O)if(O.hasOwnProperty(W)&&/^(dimension|metric)\d+$/.test(W)&&void 0!=O[W]){var X=Y.get(zD(O[W]));HD(T,W,X)}}})}function e(){if(u.displayfeatures){var O="_dc_gtm_"+f.replace(/[^A-Za-z0-9-]/g,"");p("require","displayfeatures",void 0,{cookieName:O})}}var f=a,g,h=c.isGtmEvent?tv(S(c,"gaFunctionName")):
tv();if(Fa(h)){var m=rv,n;c.isGtmEvent?n=S(c,"name")||S(c,"gtmTrackerName"):n="gtag_"+f.split("-").join("_");var p=function(O){var T=[].slice.call(arguments,0);T[0]=n?n+"."+T[0]:""+T[0];h.apply(window,T)},q=function(O){var T=function(fa,Da){for(var pa=0;Da&&pa<Da.length;pa++)p(fa,Da[pa])},Y=c.isGtmEvent,W=Y?ID(u):JD(b,c);if(W){var X={};GD(X,O);p("require","ec","ec.js",X);Y&&W.fh&&p("set","&cu",W.fh);var la=W.action;if(Y||"impressions"===la)if(T("ec:addImpression",W.Gj),!Y)return;if("promo_click"===
la||"promo_view"===la||Y&&W.Qe){var ka=W.Qe;T("ec:addPromo",ka);if(ka&&0<ka.length&&"promo_click"===la){Y?p("ec:setAction",la,W.nb):p("ec:setAction",la);return}if(!Y)return}"promo_view"!==la&&"impressions"!==la&&(T("ec:addProduct",W.Fc),p("ec:setAction",la,W.nb))}},r=function(O){if(O){var T={};if(mb(O))for(var Y in KD)KD.hasOwnProperty(Y)&&LD(KD[Y],Y,O[Y],T);GD(T,y);p("require","linkid",T)}},t=function(){if($l()){}else{var O=
S(c,N.g.Li);O&&(p("require",O,{dataLayer:qi.fa}),p("require","render"))}},u=DD(n,b,c),v=function(O,T,Y){Y&&(T=""+T);u.fieldsToSend[O]=T};!c.isGtmEvent&&ED(n,u.createOnlyFields)&&(h(function(){m()&&m().remove(n)}),MD[n]=!1);h("create",f,u.createOnlyFields);var w=c.isGtmEvent&&u.fieldsToSet[N.g.kb]&&R(92);if(!c.isGtmEvent&&u.createOnlyFields[N.g.kb]||w){var x=zi||Bi?ap(c.isGtmEvent?u.fieldsToSet[N.g.kb]:u.createOnlyFields[N.g.kb],"/analytics.js"):void 0;x&&(g=x)}var y=c.isGtmEvent?u.fieldsToSet[N.g.kb]:
u.createOnlyFields[N.g.kb];if(y){var A=c.isGtmEvent?u.fieldsToSet[N.g.Md]:u.createOnlyFields[N.g.Md];A&&!MD[n]&&(MD[n]=!0,h(wv(n,A)))}c.isGtmEvent?u.enableRecaptcha&&p("require","recaptcha","recaptcha.js"):(d(),r(u.linkAttribution));var B=u[N.g.Ma];B&&B[N.g.W]&&BD(B,n);p("set",u.fieldsToSet);if(c.isGtmEvent){if(u.enableLinkId){var E={};GD(E,y);p("require","linkid","linkid.js",E)}FD(f,n,c)}if(b===N.g.ic)if(c.isGtmEvent){e();if(u.remarketingLists){var G="_dc_gtm_"+f.replace(/[^A-Za-z0-9-]/g,"");p("require",
"adfeatures",{cookieName:G})}q(y);p("send","pageview");u.createOnlyFields._useUp&&uv(n+".")}else t(),p("send","pageview",u.fieldsToSend);else b===N.g.sa?(t(),Mo(f,c),S(c,N.g.Db)&&(ko(["aw","dc"]),uv(n+".")),mo(["aw","dc"]),0!=u.sendPageView&&p("send","pageview",u.fieldsToSend),FD(f,n,c)):b===N.g.Pa?AD(n,c):"screen_view"===b?p("send","screenview",u.fieldsToSend):"timing_complete"===b?(u.fieldsToSend.hitType="timing",v("timingCategory",u.eventCategory,!0),c.isGtmEvent?v("timingVar",u.timingVar,!0):
v("timingVar",u.name,!0),v("timingValue",Na(u.value)),void 0!==u.eventLabel&&v("timingLabel",u.eventLabel,!0),p("send",u.fieldsToSend)):"exception"===b?p("send","exception",u.fieldsToSend):""===b&&c.isGtmEvent||("track_social"===b&&c.isGtmEvent?(u.fieldsToSend.hitType="social",v("socialNetwork",u.socialNetwork,!0),v("socialAction",u.socialAction,!0),v("socialTarget",u.socialTarget,!0)):((c.isGtmEvent||ND[b])&&q(y),c.isGtmEvent&&e(),u.fieldsToSend.hitType="event",v("eventCategory",u.eventCategory,
!0),v("eventAction",u.eventAction||b,!0),void 0!==u.eventLabel&&v("eventLabel",u.eventLabel,!0),void 0!==u.value&&v("eventValue",Na(u.value))),p("send",u.fieldsToSend));var D=g&&R(92)&&!c.eventMetadata.suppress_script_load;if(!OD&&(!c.isGtmEvent||D)){g=g||"https://www.google-analytics.com/analytics.js";OD=!0;var M=function(){c.onFailure()},P=function(){m().loaded||M()};$l()?F(P):Jc(g,P,M)}}else F(c.onFailure)},QD=function(a,b,c,d){fk(function(){PD(a,b,d)},[N.g.R,N.g.J])},SD=function(a){function b(e){function f(h,
m){for(var n=0;n<m.length;n++){var p=m[n];if(e[p]){g[h]=e[p];break}}}var g=nb(e);f("id",["id","item_id","promotion_id"]);f("name",["name","item_name","promotion_name"]);f("brand",["brand","item_brand"]);f("variant",["variant","item_variant"]);f("list",["list_name","item_list_name"]);f("position",["list_position","creative_slot","index"]);(function(){if(e.category)g.category=e.category;else{for(var h="",m=0;m<RD.length;m++)void 0!==e[RD[m]]&&(h&&(h+="/"),h+=e[RD[m]]);h&&(g.category=h)}})();f("listPosition",
["list_position"]);f("creative",["creative_name"]);f("list",["list_name"]);f("position",["list_position","creative_slot"]);return g}for(var c=[],d=0;a&&d<a.length;d++)a[d]&&mb(a[d])&&c.push(b(a[d]));return c.length?c:void 0},TD=function(a){return ck(a)},UD=!1;var OD,MD={},CD={},VD={},WD=Object.freeze((VD.page_hostname=1,VD[N.g.ja]=1,VD[N.g.ib]=1,VD[N.g.Wa]=1,VD[N.g.Ka]=1,VD[N.g.Xa]=1,VD[N.g.kc]=
1,VD[N.g.Qc]=1,VD[N.g.Ra]=1,VD[N.g.mc]=1,VD[N.g.Aa]=1,VD[N.g.Yc]=1,VD[N.g.Na]=1,VD[N.g.Ab]=1,VD)),XD={},xD=Object.freeze((XD.client_storage="storage",XD.sample_rate=1,XD.site_speed_sample_rate=1,XD.store_gac=1,XD.use_amp_client_id=1,XD[N.g.ub]=1,XD[N.g.Ha]="storeGac",XD[N.g.Wa]=1,XD[N.g.Ka]=1,XD[N.g.Xa]=1,XD[N.g.kc]=1,XD[N.g.Qc]=1,XD[N.g.mc]=1,XD)),YD={},ZD=Object.freeze((YD._cs=1,YD._useUp=1,YD.allowAnchor=1,YD.allowLinker=1,YD.alwaysSendReferrer=1,YD.clientId=1,YD.cookieDomain=1,YD.cookieExpires=
1,YD.cookieFlags=1,YD.cookieName=1,YD.cookiePath=1,YD.cookieUpdate=1,YD.legacyCookieDomain=1,YD.legacyHistoryImport=1,YD.name=1,YD.sampleRate=1,YD.siteSpeedSampleRate=1,YD.storage=1,YD.storeGac=1,YD.useAmpClientId=1,YD._cd2l=1,YD)),$D=Object.freeze({anonymize_ip:1}),aE={},yD=Object.freeze((aE.campaign={content:"campaignContent",id:"campaignId",medium:"campaignMedium",name:"campaignName",source:"campaignSource",term:"campaignKeyword"},aE.app_id=1,aE.app_installer_id=1,aE.app_name=1,aE.app_version=
1,aE.description="exDescription",aE.fatal="exFatal",aE.language=1,aE.page_hostname="hostname",aE.transport_type="transport",aE[N.g.xa]="currencyCode",aE[N.g.Bg]=1,aE[N.g.Aa]="location",aE[N.g.Yc]="page",aE[N.g.Na]="referrer",aE[N.g.Ab]="title",aE[N.g.nf]=1,aE[N.g.Ta]=1,aE)),bE={},cE=Object.freeze((bE.content_id=1,bE.event_action=1,bE.event_category=1,bE.event_label=1,bE.link_attribution=1,bE.name=1,bE[N.g.Ma]=1,bE[N.g.Ag]=1,bE[N.g.Sa]=1,bE[N.g.ia]=1,bE)),dE=Object.freeze({displayfeatures:1,enableLinkId:1,
enableRecaptcha:1,eventAction:1,eventCategory:1,eventLabel:1,gaFunctionName:1,gtmEcommerceData:1,gtmTrackerName:1,linker:1,remarketingLists:1,socialAction:1,socialNetwork:1,socialTarget:1,timingVar:1,value:1}),RD=Object.freeze(["item_category","item_category2","item_category3","item_category4","item_category5"]),eE={},KD=Object.freeze((eE.levels=1,eE[N.g.Ka]="duration",eE[N.g.kc]=1,eE)),fE={},gE=Object.freeze((fE.anonymize_ip=1,fE.fatal=1,fE.send_page_view=1,fE.store_gac=1,fE.use_amp_client_id=1,
fE[N.g.Ha]=1,fE[N.g.Bg]=1,fE)),LD=function(a,b,c,d){if(void 0!==c)if(gE[b]&&(c=Oa(c)),"anonymize_ip"!==b||c||(c=void 0),1===a)d[zD(b)]=c;else if(k(a))d[a]=c;else for(var e in a)a.hasOwnProperty(e)&&void 0!==c[e]&&(d[a[e]]=c[e])},zD=function(a){return a&&k(a)?a.replace(/(_[a-z])/g,function(b){return b[1].toUpperCase()}):a},hE={},ND=Object.freeze((hE.checkout_progress=1,hE.select_content=1,hE.set_checkout_option=1,hE[N.g.ac]=1,hE[N.g.bc]=1,hE[N.g.Hb]=1,hE[N.g.fc]=1,hE[N.g.fb]=1,hE[N.g.sb]=1,hE[N.g.hb]=
1,hE[N.g.ra]=1,hE[N.g.hc]=1,hE[N.g.Fa]=1,hE)),iE={},jE=Object.freeze((iE.checkout_progress=1,iE.set_checkout_option=1,iE[N.g.dg]=1,iE[N.g.eg]=1,iE[N.g.ac]=1,iE[N.g.bc]=1,iE[N.g.fg]=1,iE[N.g.Hb]=1,iE[N.g.ra]=1,iE[N.g.hc]=1,iE[N.g.gg]=1,iE)),kE={},lE=Object.freeze((kE.generate_lead=1,kE.login=1,kE.search=1,kE.select_content=1,kE.share=1,kE.sign_up=1,kE.view_search_results=1,kE[N.g.fc]=1,kE[N.g.fb]=1,kE[N.g.sb]=1,kE[N.g.hb]=1,kE[N.g.Fa]=1,kE)),mE=function(a){var b="general";jE[a]?b="ecommerce":lE[a]?
b="engagement":"exception"===a&&(b="error");return b},nE={},oE=Object.freeze((nE.view_search_results=1,nE[N.g.fb]=1,nE[N.g.hb]=1,nE[N.g.Fa]=1,nE)),HD=function(a,b,c){a.hasOwnProperty(b)||(a[b]=c)},pE=function(a){if(Ha(a)){for(var b=[],c=0;c<a.length;c++){var d=a[c];if(void 0!=d){var e=d.id,f=d.variant;void 0!=e&&void 0!=f&&b.push(String(e)+"."+String(f))}}return 0<b.length?b.join("!"):void 0}},DD=function(a,b,c){var d=function(O){return S(c,O)},e={},f={},g={},h={},m=pE(d(N.g.Ei));!c.isGtmEvent&&m&&
HD(f,"exp",m);g["&gtm"]=Am(c.eventMetadata.source_canonical_id,!0);c.isGtmEvent||(g._no_slc=!0);Pj()&&(h._cs=TD);var n=d(N.g.Rc);if(!c.isGtmEvent&&mb(n))for(var p in n)if(n.hasOwnProperty(p)&&/^(dimension|metric)\d+$/.test(p)&&void 0!=n[p]){var q=d(String(n[p]));void 0!==q&&HD(f,p,q)}for(var r=!c.isGtmEvent,t=kk(c),u=0;u<t.length;++u){var v=t[u];if(c.isGtmEvent){var w=d(v);dE.hasOwnProperty(v)?e[v]=w:ZD.hasOwnProperty(v)?h[v]=w:g[v]=w}else{var x=void 0;x=v!==N.g.ba?d(v):lk(c,v);if(cE.hasOwnProperty(v))LD(cE[v],
v,x,e);else if($D.hasOwnProperty(v))LD($D[v],v,x,g);else if(yD.hasOwnProperty(v))LD(yD[v],v,x,f);else if(xD.hasOwnProperty(v))LD(xD[v],v,x,h);else if(/^(dimension|metric|content_group)\d+$/.test(v))LD(1,v,x,f);else if(v===N.g.ba){if(!UD){var y=bb(x);y&&(f["&did"]=y)}var A=void 0,B=void 0;b===N.g.sa?A=bb(lk(c,v),"."):(A=bb(lk(c,v,1),"."),B=bb(lk(c,v,2),"."));A&&(f["&gdid"]=A);B&&(f["&edid"]=B)}else v===N.g.Ra&&0>t.indexOf(N.g.kc)&&(h.cookieName=x+"_ga");R(23)&&WD[v]&&(c.C.hasOwnProperty(v)||b===N.g.sa&&
c.h.hasOwnProperty(v))&&(r=!1)}}R(23)&&r&&(f["&jsscut"]="1");!1!==d(N.g.Ye)&&!1!==d(N.g.ib)&&wD()||(g.allowAdFeatures=!1);sl(c)?R(29)&&(g.allowAdPersonalizationSignals=!0):g.allowAdPersonalizationSignals=!1;!c.isGtmEvent&&d(N.g.Db)&&(h._useUp=!0);if(c.isGtmEvent){h.name=h.name||e.gtmTrackerName;var E=g.hitCallback;g.hitCallback=function(){Fa(E)&&E();c.onSuccess()}}else{HD(h,"cookieDomain","auto");HD(g,"forceSSL",!0);HD(e,"eventCategory",mE(b));oE[b]&&HD(f,"nonInteraction",!0);"login"===b||"sign_up"===
b||"share"===b?HD(e,"eventLabel",d(N.g.Ag)):"search"===b||"view_search_results"===b?HD(e,"eventLabel",d(N.g.Qi)):"select_content"===b&&HD(e,"eventLabel",d(N.g.yi));var G=e[N.g.Ma]||{},D=G[N.g.qc];D||0!=D&&G[N.g.W]?h.allowLinker=!0:!1===D&&HD(h,"useAmpClientId",!1);f.hitCallback=c.onSuccess;h.name=a}tl()&&(g["&gcs"]=ul());g["&gcd"]=yl(c);Pj()&&(ck(N.g.R)||(h.storage="none"),ck(N.g.J)||(g.allowAdFeatures=!1,h.storeGac=!1));Bl()&&(g["&dma_cps"]=zl());g["&dma"]=Al();Xk(el())&&(g["&tcfd"]=Cl());Ni()&&
(g["&tag_exp"]=Ni());var M=cp(c)||d(N.g.kb),P=d(N.g.Md);M&&(c.isGtmEvent||(h[N.g.kb]=M),h._cd2l=!0);P&&!c.isGtmEvent&&(h[N.g.Md]=P);e.fieldsToSend=f;e.fieldsToSet=g;e.createOnlyFields=h;return e},ID=function(a){var b=a.gtmEcommerceData;if(!b)return null;var c={};b.currencyCode&&(c.fh=b.currencyCode);if(b.impressions){c.action="impressions";var d=b.impressions;c.Gj="impressions"===b.translateIfKeyEquals?SD(d):d}if(b.promoView){c.action="promo_view";var e=b.promoView.promotions;c.Qe="promoView"===b.translateIfKeyEquals?
SD(e):e}if(b.promoClick){c.action="promo_click";var f=b.promoClick.promotions;c.Qe="promoClick"===b.translateIfKeyEquals?SD(f):f;c.nb=b.promoClick.actionField;return c}for(var g in b)if(b.hasOwnProperty(g)&&"translateIfKeyEquals"!==g&&"impressions"!==g&&"promoView"!==g&&"promoClick"!==g&&"currencyCode"!==g){c.action=g;var h=b[g].products;c.Fc="products"===b.translateIfKeyEquals?SD(h):h;c.nb=b[g].actionField;break}return Object.keys(c).length?c:null},JD=function(a,b){function c(u){return{id:d(N.g.ya),
affiliation:d(N.g.jg),revenue:d(N.g.ia),tax:d(N.g.df),shipping:d(N.g.Uc),coupon:d(N.g.kg),list:d(N.g.cf)||d(N.g.Tc)||u}}for(var d=function(u){return S(b,u)},e=d(N.g.Z),f,g=0;e&&g<e.length&&!(f=e[g][N.g.cf]||e[g][N.g.Tc]);g++);var h=d(N.g.Rc);if(mb(h))for(var m=0;e&&m<e.length;++m){var n=e[m],p;for(p in h)h.hasOwnProperty(p)&&/^(dimension|metric)\d+$/.test(p)&&void 0!=h[p]&&HD(n,p,n[h[p]])}var q=null,r=d(N.g.Di);if(a===N.g.ra||a===N.g.hc)q={action:a,nb:c(),Fc:SD(e)};else if(a===N.g.ac)q={action:"add",
nb:c(),Fc:SD(e)};else if(a===N.g.bc)q={action:"remove",nb:c(),Fc:SD(e)};else if(a===N.g.Fa)q={action:"detail",nb:c(f),Fc:SD(e)};else if(a===N.g.fb)q={action:"impressions",Gj:SD(e)};else if(a===N.g.hb)q={action:"promo_view",Qe:SD(r)||SD(e)};else if("select_content"===a&&r&&0<r.length||a===N.g.sb)q={action:"promo_click",Qe:SD(r)||SD(e)};else if("select_content"===a||a===N.g.fc)q={action:"click",nb:{list:d(N.g.cf)||d(N.g.Tc)||f},Fc:SD(e)};else if(a===N.g.Hb||"checkout_progress"===a){var t={step:a===
N.g.Hb?1:d(N.g.bf),option:d(N.g.Ed)};q={action:"checkout",Fc:SD(e),nb:nb(c(),t)}}else"set_checkout_option"===a&&(q={action:"checkout_option",nb:{step:d(N.g.bf),option:d(N.g.Ed)}});q&&(q.fh=d(N.g.xa));return q},qE={},ED=function(a,b){var c=qE[a];qE[a]=nb(b);if(!c)return!1;for(var d in b)if(b.hasOwnProperty(d)&&b[d]!==c[d])return!0;for(var e in c)if(c.hasOwnProperty(e)&&c[e]!==b[e])return!0;return!1};function rE(a,b,c,d){}rE.D="internal.executeEventProcessor";function sE(a){var b=void 0;return md(b,this.h,1)}sE.D="internal.executeJavascriptString";var tE=function(a){var b;return b};function uE(){var a=new sb;return a}uE.O="getContainerVersion";function vE(a,b){b=void 0===b?!0:b;var c;return c}vE.O="getCookieValues";function wE(){return qj()}wE.D="internal.getCountryCode";function xE(){var a=[];a=jm();return md(a)}xE.D="internal.getDestinationIds";function yE(a,b){var c="";return c}yE.D="internal.getElementAttribute";function zE(a){var b=null;return b}zE.D="internal.getElementById";function AE(a){var b="";return b}AE.D="internal.getElementInnerText";function BE(a,b){var c=null;return c}BE.D="internal.getElementProperty";function CE(a){var b;return b}CE.D="internal.getElementValue";function DE(a){var b=0;return b}DE.D="internal.getElementVisibilityRatio";function EE(a){var b=null;return b}EE.D="internal.getElementsByCssSelector";
function FE(a){var b=void 0;return b}FE.D="internal.getEventData";var GE={};GE.enableAWFledge=R(6);GE.enableAdsConversionValidation=R(21);GE.enableAutoPiiOnPhoneAndAddress=R(30);GE.enableCachedEcommerceData=R(89);GE.enableCcdPreAutoPiiDetection=R(11);GE.enableCloudRecommentationsErrorLogging=R(73);GE.enableCloudRecommentationsSchemaIngestion=R(72);GE.enableCloudRetailInjectPurchaseMetadata=R(71);GE.enableCloudRetailLogging=R(70);GE.enableCloudRetailPageCategories=R(17);GE.enableConsentDisclosureActivity=R(35);GE.enableDCFledge=R(7);GE.enableDecodeUri=R(53);
GE.enableDeferAllEnhancedMeasurement=R(37);GE.enableDirectTagLoadingInGoogleTag=R(64);GE.enableEuidAutoMode=R(10);GE.enableFormSkipValidation=R(31);GE.enableLoadGoogleTagOptionsObject=R(68);GE.enableUrlDecodeEventUsage=R(47);GE.enableV1HistoryEventInApi=R(78);GE.loadContainerForGtmEventTags=R(34);GE.useEnableAutoEventOnFormApis=R(22);GE.autoPiiEligible=uj();function HE(){return md(GE)}HE.D="internal.getFlags";function IE(){return new jd(zy)}IE.D="internal.getHtmlId";function JE(a,b){var c;J(I(this),["targetId:!string","name:!string"],arguments);var d=Qo(a)||{};c=md(d[b],this.h);return c}JE.D="internal.getProductSettingsParameter";function KE(a,b){var c;return c}KE.O="getQueryParameters";function LE(a,b){var c;return c}LE.O="getReferrerQueryParameters";function ME(a){var b="";return b}ME.O="getReferrerUrl";function NE(){return rj()}NE.D="internal.getRegionCode";function OE(a,b){var c;return c}OE.D="internal.getRemoteConfigParameter";function PE(a){var b="";return b}PE.O="getUrl";function QE(){K(this,"get_user_agent");return Cc.userAgent}QE.O="getUserAgent";function aF(){return z.gaGlobal=z.gaGlobal||{}}var bF=function(){var a=aF();a.hid=a.hid||Ja();return a.hid},cF=function(a,b){var c=aF();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var KF=function(a){this.s=a;this.C="";this.h=this.s},LF=function(a,b){a.h=b;return a};function MF(a){var b=a.search;return a.protocol+"//"+a.hostname+a.pathname+(b?b+"&richsstsse":"?richsstsse")}function NF(a,b,c){if(a){var d=a||[],e=mb(b)?b:{};if(Array.isArray(d))for(var f=0;f<d.length;f++)c(d[f],e)}};var bG=window,cG=document,dG=function(a){var b=bG._gaUserPrefs;if(b&&b.ioo&&b.ioo()||cG.documentElement.hasAttribute("data-google-analytics-opt-out")||a&&!0===bG["ga-disable-"+a])return!0;try{var c=bG.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=El("AMP_TOKEN",String(cG.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return cG.getElementById("__gaOptOutExtension")?!0:!1};
function mG(a){l(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[N.g.Ya]||{};l(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var uG=function(a,b){};function tG(a,b){var c=function(){};return c}
function vG(a,b,c){};var wG=tG;var xG=function(a,b,c){for(var d=0;d<b.length;d++)a.hasOwnProperty(b[d])&&(a[b[d]]=c(a[b[d]]))};function yG(a,b,c){var d=this;}yG.D="internal.gtagConfig";function zG(){var a={};return a};
function BG(a,b){}BG.O="gtagSet";function CG(a,b){}CG.O="injectHiddenIframe";function DG(a,b,c,d,e){}DG.D="internal.injectHtml";var HG={};
function JG(a,b,c,d){}var KG=Object.freeze({dl:1,id:1}),LG={};
function MG(a,b,c,d){}JG.O="injectScript";MG.D="internal.injectScript";function NG(a){var b=!0;return b}NG.O="isConsentGranted";var OG=function(){var a=kh(function(b){this.h.h.log("error",b)});a.O="JSON";return a};function PG(a){var b=void 0;return md(b)}PG.D="internal.legacyParseUrl";var QG=function(){return!1},RG={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function SG(){}SG.O="logToConsole";function TG(a,b){}TG.D="internal.mergeRemoteConfig";function UG(a,b,c){c=void 0===c?!0:c;var d=[];return d}UG.D="internal.parseCookieValuesFromString";function VG(a){var b=void 0;return b}VG.O="parseUrl";function WG(a){}WG.D="internal.processAsNewEvent";function XG(a,b,c){var d;return d}XG.D="internal.pushToDataLayer";function YG(a,b){var c=!1;return c}YG.O="queryPermission";function ZG(){var a="";return a}ZG.O="readCharacterSet";function $G(){return qi.fa}$G.D="internal.readDataLayerName";function aH(){var a="";return a}aH.O="readTitle";function bH(a,b){var c=this;J(I(this),["destinationId:!string","callback:!Fn"],arguments),Xo(a,function(d){b.invoke(c.h,md(d,c.h,1))});}bH.D="internal.registerCcdCallback";function cH(a){return!0}cH.D="internal.registerDestination";var dH=Object.freeze(["config","event","get","set"]);function eH(a,b,c){}eH.D="internal.registerGtagCommandListener";function fH(a,b){var c=!1;return c}fH.D="internal.removeDataLayerEventListener";function gH(a,b){}
gH.D="internal.removeFormData";function hH(){}hH.O="resetDataLayer";function iH(a,b,c,d){}iH.D="internal.sendGtagEvent";function jH(a,b,c){}jH.O="sendPixel";function kH(a,b){}kH.D="internal.setAnchorHref";function lH(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f}lH.O="setCookie";function mH(a,b){}mH.D="internal.setCorePlatformServices";function nH(a,b){}nH.D="internal.setDataLayerValue";function oH(a){}oH.O="setDefaultConsentState";function pH(a,b){}pH.D="internal.setDelegatedConsentType";function qH(a,b){}qH.D="internal.setFormAction";function rH(a,b,c){return!1}rH.O="setInWindow";function sH(a,b,c){}sH.D="internal.setProductSettingsParameter";function tH(a,b,c){J(I(this),["targetId:!string","name:!string","value:!*"],arguments);for(var d=b.split("."),e=Up(a),f=0;f<d.length-1;f++){if(void 0===e[d[f]])e[d[f]]={};else if(!mb(e[d[f]]))throw Error("setRemoteConfigParameter failed, path contains a non-object type: "+d[f]);e=e[d[f]]}e[d[f]]=nd(c,this.h,1);}tH.D="internal.setRemoteConfigParameter";function uH(a,b){var c=this;}uH.D="internal.setupConversionLinker";function vH(a,b,c,d){var e=this;}vH.O="sha256";function wH(a,b,c){}
wH.D="internal.sortRemoteConfigParameters";var xH={},yH={};xH.O="templateStorage";xH.getItem=function(a){var b=null;return b};
xH.setItem=function(a,b){};
xH.removeItem=function(a){};xH.clear=function(){};function zH(a,b){var c=!1;return c}zH.D="internal.testRegex";var AH=function(a){var b;return b};function BH(a){var b;return b}BH.D="internal.unsiloId";function CH(a){}CH.O="updateConsentState";var DH;function EH(a,b,c){DH=DH||new uh;DH.add(a,b,c)}function FH(a,b){var c=DH=DH||new uh;if(c.s.hasOwnProperty(a))throw"Attempting to add a private function which already exists: "+a+".";if(c.h.hasOwnProperty(a))throw"Attempting to add a private function with an existing API name: "+a+".";c.s[a]=Fa(b)?Mg(a,b):Ng(a,b)}
function GH(){return function(a){var b;var c=DH;if(c.h.hasOwnProperty(a))b=c.get(a,this);else{var d;if(d=c.s.hasOwnProperty(a)){var e=!1,f=this.h.h;if(f){var g=f.wc();if(g){0!==g.indexOf("__cvt_")&&(e=!0);}}else e=!0;d=e}if(d){var h=c.s.hasOwnProperty(a)?c.s[a]:void 0;b=h}else throw Error(a+" is not a valid API name.");}return b}};var HH=function(){var a=function(c){return FH(c.D,c)},b=function(c){return EH(c.O,c)};b(dA);b(jA);b(aB);b(dB);b(eB);b(iB);b(kB);b(nB);b(OG());b(pB);b(uE);b(vE);b(KE);b(LE);b(ME);b(PE);b(BG);b(CG);b(JG);b(NG);b(SG);b(VG);b(YG);b(ZG);b(aH);b(jH);b(lH);b(oH);b(rH);b(vH);b(xH);b(CH);EH("Math",Sg());EH("Object",sh);EH("TestHelper",wh());EH("assertApi",Og);EH("assertThat",Pg);EH("decodeUri",Tg);EH("decodeUriComponent",Ug);EH("encodeUri",Vg);EH("encodeUriComponent",Wg);EH("fail",bh);EH("generateRandom",
ch);EH("getTimestamp",dh);EH("getTimestampMillis",dh);EH("getType",jh);EH("makeInteger",lh);EH("makeNumber",mh);EH("makeString",nh);EH("makeTableMap",oh);EH("mock",rh);EH("fromBase64",tE,!("atob"in z));EH("localStorage",RG,!QG());EH("toBase64",AH,!("btoa"in z));a(gA);a(oA);a(AA);a(HA);a(MA);a(QA);a(ZA);a(bB);a(fB);a(gB);a(jB);a(lB);a(mB);a(oB);a(qB);a(tB);a(uB);a(wB);a(AB);a(FB);a(GB);a(RB);a(WB);a(aC);a(jC);a(oC);a(BC);a(DC);a(QC);a(Xg);a(SC);a(rE);a(sE);a(wE);a(xE);a(yE);a(zE);a(AE);a(BE);a(CE);
a(DE);a(EE);a(FE);a(HE);a(IE);a(JE);a(NE);a(OE);a(yG);a(MG);a(PG);a(OA);a(TG);a(UG);a(WG);a(XG);a($G);a(bH);a(cH);a(eH);a(fH);a(gH);a(iH);a(kH);a(mH);a(pH);a(qH);a(sH);a(tH);a(wH);a(zH);FH("internal.GtagSchema",zG());R(56)&&a(DG);R(84)&&a(vB);R(90)&&a(BH);R(88)&&a(nH);R(101)&&a(uH);return GH()};var bA;function IH(){bA.h.h.M=function(a,b,c){ri.SANDBOXED_JS_SEMAPHORE=ri.SANDBOXED_JS_SEMAPHORE||0;ri.SANDBOXED_JS_SEMAPHORE++;try{return a.apply(b,c)}finally{ri.SANDBOXED_JS_SEMAPHORE--}}}function JH(a){void 0!==a&&l(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Ji[e]=Ji[e]||[];Ji[e].push(b)}})};var KH=encodeURI,V=encodeURIComponent,LH=function(a,b,c){Nc(a,b,c)},MH=function(a,b){if(!a)return!1;var c=Gm(Lm(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1},NH=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&
a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};var Z={securityGroups:{}};


Z.securityGroups.c=["google"],function(){(function(a){Z.__c=a;Z.__c.m="c";Z.__c.isVendorTemplate=!0;Z.__c.priorityOverride=0;Z.__c.isInfrastructure=!1;Z.__c.runInSiloedMode=!0})(function(a){vz(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();Z.securityGroups.e=["google"],function(){(function(a){Z.__e=a;Z.__e.m="e";Z.__e.isVendorTemplate=!0;Z.__e.priorityOverride=0;Z.__e.isInfrastructure=!1;Z.__e.runInSiloedMode=!0})(function(a){return String(a.vtp_gtmCachedValues.event)})}();Z.securityGroups.v=["google"],function(){(function(a){Z.__v=a;Z.__v.m="v";Z.__v.isVendorTemplate=!0;Z.__v.priorityOverride=0;Z.__v.isInfrastructure=!1;Z.__v.runInSiloedMode=!1})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=nz(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;vz(d,"v",a.vtp_gtmEventId);return d})}();




Z.securityGroups.rep=["google"],function(){(function(a){Z.__rep=a;Z.__rep.m="rep";Z.__rep.isVendorTemplate=!0;Z.__rep.priorityOverride=0;Z.__rep.isInfrastructure=!1;Z.__rep.runInSiloedMode=!0})(function(a){var b=om(a.vtp_containerId),c=yo(b,!0),d;switch(c.prefix){case "AW":d=VC;break;case "DC":d=hD;break;case "GF":d=nD;break;case "HA":d=sD;break;case "UA":d=QD;break;case "MC":d=wG(c,a.vtp_gtmEventId);break;default:F(a.vtp_gtmOnFailure);return}d?(F(a.vtp_gtmOnSuccess),Qp(b,d),a.vtp_remoteConfig&&Vp(b,
a.vtp_remoteConfig||{})):F(a.vtp_gtmOnFailure)})}();








Z.securityGroups.detect_user_provided_data=["google"],function(){function a(b,c){return{dataSource:c}}(function(b){Z.__detect_user_provided_data=b;Z.__detect_user_provided_data.m="detect_user_provided_data";Z.__detect_user_provided_data.isVendorTemplate=!0;Z.__detect_user_provided_data.priorityOverride=0;Z.__detect_user_provided_data.isInfrastructure=!1;Z.__detect_user_provided_data.runInSiloedMode=!1})(function(b){var c=b.vtp_createPermissionError;return{assert:function(d,e){if("auto"!==e&&"manual"!==
e&&"code"!==e)throw c(d,{},"Unknown user provided data source.");if(b.vtp_limitDataSources)if("auto"!==e||b.vtp_allowAutoDataSources){if("manual"===e&&!b.vtp_allowManualDataSources)throw c(d,{},"Detection of user provided data via manually specified CSS selectors is not allowed.");if("code"===e&&!b.vtp_allowCodeDataSources)throw c(d,{},"Detection of user provided data from an in-page variable is not allowed.");}else throw c(d,{},"Automatic detection of user provided data is not allowed.");},K:a}})}();







Z.securityGroups.get=["google"],function(){(function(a){Z.__get=a;Z.__get.m="get";Z.__get.isVendorTemplate=!0;Z.__get.priorityOverride=0;Z.__get.isInfrastructure=!1;Z.__get.runInSiloedMode=!1})(function(a){var b=a.vtp_settings,c=b.eventParameters||{},d=String(a.vtp_eventName),e={};e.eventId=a.vtp_gtmEventId;e.priorityId=a.vtp_gtmPriorityId;a.vtp_deferrable&&(e.deferrable=!0);var f=Zv(String(b.streamId),d,c);bw(f,e.eventId,e);a.vtp_gtmOnSuccess()})}();

Z.securityGroups.zone=[],function(){var a={},b=function(c){for(var d=0;d<c.length;d++)if(!c[d])return!1;return!0};(function(c){Z.__zone=c;Z.__zone.m="zone";Z.__zone.isVendorTemplate=!0;Z.__zone.priorityOverride=0;Z.__zone.isInfrastructure=!1;Z.__zone.runInSiloedMode=!1})(function(c){var d=b(c.vtp_boundaries||[]);if(c.vtp_gtmTagId in a)Iw(a[c.vtp_gtmTagId],c.vtp_gtmEventId,d);else if(d){var e=c.vtp_childContainers.map(function(m){return m.publicId}),
f=c.vtp_enableTypeRestrictions?c.vtp_whitelistedTypes.map(function(m){return m.typeId}):null,g={};var h=Hw(c.vtp_gtmEventId,e,f,g,hv(1,c.vtp_gtmEntityIndex,c.vtp_gtmEntityName),!!c.vtp_inheritParentConfig);a[c.vtp_gtmTagId]=h}F(c.vtp_gtmOnSuccess)})}();




var hJ={};hJ.dataLayer=Ti;hJ.callback=function(a){Ii.hasOwnProperty(a)&&Fa(Ii[a])&&Ii[a]();delete Ii[a]};hJ.bootstrap=0;hJ._spx=!1;
function iJ(){ri[lm()]=ri[lm()]||hJ;rm();wm()||l(xm(),function(d,e){$u(d,e.transportUrl,e.context);L(92)});Wa(Ji,Z.securityGroups);var a=nm(um()),b,c=null==a?void 0:null==(b=a.context)?void 0:b.source;2!==c&&4!==c&&3!==c||L(142);vf=Lf}
(function(a){function b(){m=C.documentElement.getAttribute("data-tag-assistant-present");by(m)&&(h=g.Mk)}if(!z["__TAGGY_INSTALLED"]){var c=!1;if(C.referrer){var d=Lm(C.referrer);c="cct.google"===Fm(d,"host")}if(!c){var e=Hl("googTaggyReferrer");c=e.length&&e[0].length}c&&(z["__TAGGY_INSTALLED"]=!0,Jc("https://cct.google/taggy/agent.js"))}if(Di)a();else{var f=function(u){var v="GTM",w="GTM";xi?(v="OGT",w="GTAG"):Di&&(w=v="OPT");var x=z["google.tagmanager.debugui2.queue"];x||(x=[],
z["google.tagmanager.debugui2.queue"]=x,Jc("https://"+qi.wd+"/debug/bootstrap?id="+Tf.ctid+"&src="+w+"&cond="+u+"&gtm="+Am()));var y={messageType:"CONTAINER_STARTING",data:{scriptSource:Dc,containerProduct:v,debug:!1,id:Tf.ctid,targetRef:{ctid:Tf.ctid,isDestination:dm.ie},aliases:fm(),destinations:im()}};y.data.resume=function(){a()};qi.lk&&(y.data.initialPublish=!0);x.push(y)},g={Bn:1,Nk:2,Zk:3,nk:4,Mk:5},h=void 0,m=void 0,n=Gm(z.location,"query",!1,void 0,"gtm_debug");by(n)&&(h=g.Nk);if(!h&&C.referrer){var p=Lm(C.referrer);
"tagassistant.google.com"===Fm(p,"host")&&(h=g.Zk)}if(!h){var q=Hl("__TAG_ASSISTANT");q.length&&q[0].length&&(h=g.nk)}h||b();if(!h&&cy(m)){var r=function(){if(t)return!0;t=!0;b();h&&Dc?f(h):a()},t=!1;Oc(C,"TADebugSignal",function(){r()},!1);z.setTimeout(function(){r()},200)}else h&&Dc?f(h):a()}})(function(){try{pm();if(R(16)){}zj().s();kl();(R(98)||R(99)||R(100))&&
pq();var a=mm();if(am().canonical[a]){var b=ri.zones;b&&b.unregisterChild(hm());var c=Lu(mm());c._event&&(c._event.external=[]);c._entity&&(c._entity.external=[]);}else{Xu();for(var d=data.resource||{},e=d.macros||[],f=0;f<e.length;f++)lf.push(e[f]);for(var g=d.tags||[],h=0;h<g.length;h++)of.push(g[h]);for(var m=d.predicates||
[],n=0;n<m.length;n++)nf.push(m[n]);for(var p=d.rules||[],q=0;q<p.length;q++){for(var r=p[q],t={},u=0;u<r.length;u++){var v=r[u][0];t[v]=Array.prototype.slice.call(r[u],1);"if"!==v&&"unless"!==v||uf(t[v])}mf.push(t)}qf=Z;rf=Tz;Nf=new Wf;var w=data.sandboxed_scripts,x=data.security_groups,y=data.infra;a:{var A=data.runtime||[],B=data.runtime_lines;bA=new Ie;IH();kf=aA();var E=bA,G=HH(),D=new ed("require",G);D.Eb();E.h.h.set("require",D);for(var M=[],P=0;P<A.length;P++){var O=A[P];if(!Ha(O)||3>O.length){if(0===
O.length)continue;break a}B&&B[P]&&B[P].length&&Ef(O,B[P]);try{bA.execute(O),R(32)&&mp&&50===O[0]&&M.push(O[1])}catch(fh){}}R(32)&&(wf=M)}if(void 0!==w)for(var T=["sandboxedScripts"],Y=0;Y<w.length;Y++){var W=w[Y].replace(/^_*/,"");Ji[W]=T}JH(x);if(void 0!==y)for(var X=0;X<y.length;X++)Ki[y[X]]=!0;iJ();if(R(25)&&!Di){for(var la=pj["7"],ka=la?la.split("|"):[],fa={},Da=0;Da<ka.length;Da++)fa[ka[Da]]=!0;for(var pa=0;pa<Wj.length;pa++){var Ea=Wj[pa],Ua=Ea,lb=fa[Ea]?"granted":"denied";Gj().implicit(Ua,
lb)}}ay();av=!1;bv=0;if("interactive"==C.readyState&&!C.createEventObject||"complete"==C.readyState)dv();else{Oc(C,"DOMContentLoaded",dv);Oc(C,"readystatechange",dv);if(C.createEventObject&&C.documentElement.doScroll){var Ib=!0;try{Ib=!z.frameElement}catch(fh){}Ib&&ev()}Oc(z,"load",dv)}px=!1;"complete"===C.readyState?rx():Oc(z,"load",rx);
mp&&(hp(zp),z.setInterval(yp,864E5));hp(Vz);hp(Ev);hp(ut);hp(Op);hp(Pv);hp(Ep);hp(Xr);hp(Cp);hp(Lv);R(32)&&hp(Hv);R(106)&&(hp(Wz),hp(Yz));xy();ij(1);Lw();Hi=Sa();hJ.bootstrap=Hi;if(R(16)){}}}catch(fh){if(ij(4),mp){var jj=tp(!0,!0);Nc(jj)}}});

})()

