Ext.ns('Ext.Uitk');
var cke = new Ext.state.CookieProvider({
		expires: new Date(new Date().getTime()+(1000*60*60*24))
	});
Ext.state.Manager.setProvider(new Ext.state.LocalStorageProvider());

Ext.QuickTips.init();

// Date.now support for legacy browsers
if (!Date.now) {
	Date.now = 
}

Ext.Ajax.timeout = 180000;
Ext.Ajax.defaultHeaders = {
	'Is-Ajax-Request':true
};

/**
 * For use with IframeMessageView
 * @param eventName
 * @param handler - function to be called when the iframe sends this event
 */
function registerIframeMessageHandler(eventName, handler) {
    window.handlerRegistry = window.handlerRegistry || {};

    if (window.handlerRegistry[eventName]) {
        return
    } else {
        window.handlerRegistry[eventName] = true;
    }

    window.addEventListener("message", function(e) {
        if (typeof e.data === 'object' && e.data.hasOwnProperty('method') && e.data.method === eventName) {
            handler(e.data.params)
        }
    })
}

function uitkGenerateId(prefix) {
	var id = (prefix || 'uitk_ext_') + (++Ext.idSeed);
    window.top.idCount++;
	return id;
};

/**
 * @deprecated - use fetchGetRequest() instead
 */
function irAjaxRequest(url, postData) {
    var promise = new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(postData ? 'POST' : 'GET', url);
        xhr.setRequestHeader('uitk_csrf', getCsrfToken());
        xhr.addEventListener("load", function (e) {
            if(xhr.status != '200') {
                if(xhr.status == '401' || xhr.status == '403') {
                    ractiveSessionExpiredPop();
                }
                reject();
            } else {
                resolve(xhr.response);
            }
        });
        xhr.send();
    });

    return promise;
};


function registerProgressBar(text) {
    window.require(['rvc!ui/util/progress'], function (prb) {
        window._ir_prb = new prb({
            el: 'body',
            append: true,
            data:         });

        if (Ext['IR'] && Ext.IR['IRNotifications']) {
            Ext.IR.IRNotifications.progressHandler =         }
    });
}

function uitkPostToUrl(path, params, ajax, responseIsJson) {
    if(ajax) {
        path = path || window.location.pathname + window.location.search;
        var pairs = [];
        for (var prop in params) {
            // if you want a comma separated list, you need to create it before sending it
            // to this function. Arrays will all be converted into arrayParam=1&arrayParam=2
            // for compatibility with java backend
            if (params.hasOwnProperty(prop)) {
                var k = encodeURIComponent(prop);
                if(Array.isArray(params[prop])) {
                    params[prop].forEach(;
                } else {
                    var v = encodeURIComponent(params[prop]);
                    pairs.push(k + "=" + v);
                }
            }
        }
        var str = pairs.join("&") + '&uitk_csrf=' + getCsrfToken();
        return fetch(path, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: str
        }).then(;
    } else {
        var form = document.createElement("form");
        form.setAttribute('method', 'POST');
        form.setAttribute('action', path);

        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                if (!Array.isArray(params[key])) {
                    params[key] = [params[key]];
                }

                params[key].forEach(function (item) {
                    var hiddenField = document.createElement("input");
                    hiddenField.setAttribute("type", "hidden");
                    hiddenField.setAttribute("name", key);
                    hiddenField.setAttribute("value", item);

                    form.appendChild(hiddenField);
                });
            }
        }

        var uitkCsrf = document.createElement("input");
        uitkCsrf.setAttribute("type", "hidden");
        uitkCsrf.setAttribute("name", "uitk_csrf");
        uitkCsrf.setAttribute("value", getCsrfToken());

        form.appendChild(uitkCsrf);

        document.body.appendChild(form);

        form.submit();
        return new Promise(; // an empty promise :(
    }
};

function uitkDebounce(fn, delay) {
    var timer = null;
    return 
};

Ext.id = function(el, prefix) {
    var me = this;
    el = Ext.getDom(el, true) || {};
    if (el === document) {
        el.id = me.documentId;
    }
    else if (el === window) {
        el.id = me.windowId;
    }
    if (!el.id) {
        el.id = uitkGenerateId(prefix);
    }
    return el.id;
}

function uitkShowHideSlide(toggler, toggled, advanced, advancedShowTitle, advancedHideTitle) {
	var togglednew = Ext.get(toggled),
		togglernew = Ext.get(toggler);

	if(togglednew.isVisible()){
		togglednew.slideOut("t", {
			useDisplay: true,
			duration: 200
		});
		if(togglernew) {
			togglernew.removeCls("uitkSlideHideTool");
			togglernew.addCls("uitkSlideShowTool");

			if(advanced) {
				togglernew.update((advancedShowTitle || 'Show advanced settings') + '<i class="fa fa-arrow-down"></i>');
			}
		}
	} else {
		togglednew.slideIn("t", {
			useDisplay: true,
			duration: 200
		});
		if(togglernew) {
			togglernew.removeCls("uitkSlideShowTool");
			togglernew.addCls("uitkSlideHideTool");

			if(advanced) {
				togglernew.update((advancedHideTitle || 'Hide advanced settings') + '<i class="fa fa-arrow-up"></i>');
			}
		}
	}
}

function uitkGridFlagColumn(evt,el) {
	el = Ext.get(el);
	var isFlagged = !el.hasCls("uitkFlagged");

	   Ext.Ajax.request({
        url: el.dom.title,
		   method:"GET",
		   params: {"flagged" : isFlagged },

        success: function(result){
		   			try{
					var response = Ext.JSON.decode(result.responseText);
		   			if(response.flaggingStatus == 'Success'){
							if(el.hasCls("uitkFlagged")){
								el.removeCls('uitkFlagged');
								el.addCls('uitkNotFlagged');
							}
							else {
								el.removeCls('uitkNotFlagged');
								el.addCls('uitkFlagged');
							}
					}else{
						alert("Failure");
					}
					}catch(e){
						alert(e);
					}
		   }
	   },el);
}

function arrayContains(arr, val) {// cross browser Array.indexOf
	if(Array.prototype.indexOf) {
		return arr.indexOf(val) > -1;
	}
	else {
		for(var i=0,ii=arr.length;i<ii;i++) {
			if(arr[i] === val) {
				return true;
			}
		}
	}
}

function uitkRegionCookie(regionId) {
	var regions = Ext.util.Cookies.getCookieValueAsArray('ext-regions');
	if(regions && regions.length > 0) {
		if(arrayContains(regions,regionId)) {
			var buildCk = "";
			for(var x=0,len=regions.length; x<len; x++){
				if(regions[x] !== "" && regionId != regions[x]) {
					buildCk +=  '+' + regions[x];
				}
			}
			cke.set("regions", buildCk);
		}
		else {
			cke.set("regions", cke.get('regions') + '+' + regionId);
		}
	}
	else {
		cke.set("regions", '+' + regionId);
	}
}

function uitkShowHide(target, showMode) {
	var cls = 'x-hidden',
		content = Ext.get(target);

	if(content.getStyle('display')=='none' || content.hasCls(cls)) {
		content.removeCls(cls);
		content.enableDisplayMode(showMode || 'block').show(true);
	} else {
		content.addCls(cls);
		content.enableDisplayMode('none').hide(true);
	}
}

function uitkDisable(el, disable) {
	disable ? el.dom.setAttribute('disabled', 'disabled') : el.dom.removeAttribute('disabled');
}

function uitkShowHideSelect(select) {
	select.getStore().each(function(record) {
		var optClass = record.raw['class'];
		if(optClass) {
			var target = Ext.get(optClass);
			if(target) {
				var displayMode = target.dom.style.display;
				if(displayMode == 'inline') {
					uitkShowHide(optClass, 'inline');
				}
				if(record.get('value') == select.getValue() && displayMode == 'none') {
					uitkShowHide(optClass, 'inline');
				}
			}
		}
	});
}

function uitkShowHideByRadio(outerId) {
	var radios = Ext.query('input[type=radio]',outerId);
	for(var x=0; x<radios.length; x++){
		selRadio = Ext.get(radios[x]);
		selBox = Ext.get(selRadio.dom.className);
		if(selBox){selBox.applyStyles('display:none');
			if(selRadio.dom.checked) {
				uitkShowHide(selBox);
			}
		}
	}
}

 function uitkChecksum(r) {
    for (var a, o = [], c = 0; c < 256; c++) {
        a = c;
        for (var f = 0; f < 8; f++) a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
        o[c] = a
    }
    for (var n = -1, t = 0; t < r.length; t++) n = n >>> 8 ^ o[255 & (n ^ r.charCodeAt(t))];
    return (-1 ^ n) >>> 0
}

function uitkDeepClone(original, keepDbId) {
    var clone = JSON.parse(JSON.stringify(original));
    if(clone.hasOwnProperty('dbId') && !keepDbId) {
    	clone['dbId'] = null;
	}
    return clone;
}

function populateCompositeInputMessages(messages) {
    window.top['___messages___'] = window.top['___messages___'] ? window.top['___messages___'] : {};
    for(k in messages) {
    	window.top['___messages___'][k] = messages[k];
	}
}

function uitkPopup(url, title, width, height, contentId, windowId, windowCls, autoScroll, destroy, closeHandler) {
	if(windowId && Ext.getCmp(windowId)) {
		var popup = Ext.getCmp(windowId);

		popup.config.closable = true;

		popup.show();
		popup.alignTo(document, 'c-c');

		return popup;
	}
	else {
		windowId = Ext.isEmpty(windowId) ? Ext.id() : windowId;

		var viewSize = Ext.getBody().getViewSize(),
			sizeX = parseInt(width)  || Math.max(viewSize.width  - 150, 850),
			sizeY = parseInt(height) || Math.max(viewSize.height - 150, 500),
			config;

		config = {
			id: windowId,
			cls: windowCls,
			title: title,
			header: !Ext.isEmpty(title),
			modal: true,
			closeAction: destroy ? 'destroy' : 'hide',
			width: sizeX,
			manageHeight: false,
            closable: true
		};

		if(!Ext.isEmpty(url)) {
			var popupUrl = Ext.String.urlAppend(url, "fromPopup=1");
			config.html = '<iframe width="100%" height="' + sizeY + '" frameborder="0" scrolling="auto" src="' + popupUrl + '"></iframe>';
		}
		else {
			config.contentEl = contentId;
			config.autoScroll = autoScroll;
		}

		if(closeHandler) {
			config.listeners = {
				close: closeHandler
			};
		}

		var popup = new Ext.window.Window(config);
		popup.show();
		return popup;
	}
}



function lightbox(params, components, content) {
	var popupComponent = new Promise(function (resolve, reject) {
        require(["rvc!ui/util/modal"], function (PopupComponent) {
            resolve(new PopupComponent({
                el: document.body,
                append: true,
                data: {params: params},
				components: components,
				partials: {content: content}
            }));
        });
    });
	return popupComponent;
}

function iframeLightbox(url, title, width, height) {
    lightbox({
        iframe: true,
        url: url,
        initialHide: false,
        showCloseButton: true,
        title: title,
        width: width || 800,
        height: height || 400,
        noContentStyle: true,
        disableScroll: false})
}

function logoutUser(logoutUrl) {
	window.location = logoutUrl ? logoutUrl : "/logOut.user";
}

function log(){
	var args = [];
	for (var i = 0; i < arguments.length; i++) {
	      args[i] = arguments[i];
	 }

	if(typeof console!="undefined"){
		var msg =args[0];
		console.log(msg,args.slice(1,args.length));
	}
}

window.extractMappings = function(dropdowns) {
    var dropdownsMap = {};
    for (k in dropdowns) {
        if (Array.isArray(dropdowns[k])) {
            dropdowns[k].forEach(
                function (it) {
                    dropdownsMap[k] = dropdownsMap[k] ? dropdownsMap[k] : {};
                    dropdownsMap[k] [it.value] = it;
                }
            )
        }
    }
    return dropdownsMap;
};

copyToClipboard = function(value) {

    var el = document.createElement('textarea');
    el.value = value;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';

    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

}

matchesNested = function (condition, me, options) {
	try {
        var match = _matchesNested(condition, me, options);
        if(condition.returnsValue) {
            return match.returnValue;
        } else {
            return Object.keys(match).length > 0;
        }
	} catch(e) {
		console.error('matching exception %o %o', e, condition);
		return false;
	}
};

_matchesNested = function(condition, me, options) {
    if(!condition) {
        return {};
    }
    if(!me) {
        me = this;
    }

    var get = function(what){
        if(typeof me.get === 'function'){
            return me.get(what);
        } else if(typeof me === 'object' && me.hasOwnProperty(what)) {
            return me[what];
        } else {
            return undefined;
        }
    };

    if(condition.children && condition.children.length > 0) {
        if(condition.conjunction === 'OR') {
            for(var i = 0,ilen=condition.children.length;i<ilen;i++) {
                var matching = _matchesNested(condition.children[i],me, options);
                if(Object.keys(matching).length > 0) {
                    return matching;
                }
            }
            return {};
        } else {
            for(var x = 0,xlen=condition.children.length;x<xlen;x++) {
                var matching = _matchesNested(condition.children[x],me, options);
                if(Object.keys(matching).length <= 0) {
                    return {};
                }
            }
            return condition;
        }
    }

    var contains = function(list, value) {
    	if(!list) {
    		return false;
		}
        for(var n=0,nlen=list.length;n<nlen;n++) {
            if(value == list[n]) {
                return true;
            }
        }
        return false;
    };

    var actual = get(condition.variable);
    if(typeof options === 'object' && options.debug){
    	console.log('condtion expected %o / operator %o / varible %o, actual %o %s',
            condition.expected, condition.operator, condition.variable, actual, options.debugcase ? `[case: ${options.debugcase}]`:'')
	}
    if(condition.operator === 'NE') {
        return actual != condition.expected ? condition : {};
    } else if(condition.operator === 'GT') {
		return actual > condition.expected ? condition : {};
    } else if(condition.operator === 'LT') {
        return actual < condition.expected ? condition : {};
    } else if(condition.operator === 'CONTAINS') {
        return contains(actual, condition.expected) ? condition : {};
    } else if(condition.operator === 'NOT_CONTAINS') {
        return !contains(actual, condition.expected) ? condition : {};
    } else if(condition.operator === 'IN') {
        return contains(condition.expected, actual) ? condition : {};
    } else if(condition.operator === 'NOT_IN') {
        return ! contains(condition.expected, actual) ? condition : {};
    } else { //EQ
        return actual == condition.expected ? condition : {};
    }
};

function uitkSessionExpiredPop(location, status) {
	if(status=='403' || status=='401') {
		Ext.MessageBox.alert(
			'Session Timeout',
			'Your session appears to have timed out.  Please log back in.',
			function () {
				window.location = location;
			},
			this
		);
	}
}


function fetchGetRequest(url, handler, errorHandler) {
    fetch(url, {
        method:'GET',
        credentials:'include',
        headers: {
            "Is-Ajax-Request" : true
        }
    })
    .then(function (resp) { return resp.json() })
    .then(function (json) {
        handler(json);
    }).catch(errorHandler);
}

function fetchPostRequest(url, payload, handler, errorHandler) {
    fetch(url, {
        method: 'POST',
        body: payload,
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Is-Ajax-Request': true,
            'uitk_csrf': getCsrfToken()
        }
    })
    .then(
    .then(.catch(errorHandler);
}

function ractiveSessionExpiredPop(where, message) {
    var popupComponent = new Promise(function (resolve, reject) {
        require(["rvc!ui/util/modal"], function (PopupComponent) {
            resolve(new PopupComponent({
                el: document.body,
                append: true,
                data: {
                    "params": {
                        okHandler: function (instance) {
                            if (where) {
                                window.top.location.href = where;
                                return;
                            }
                        	// refresh page, and remove hash
                            window.top.location.href = window.top.location.href.split('#')[0];
                        },
                        initialHide: false,
                        okLabel: "OK",
						message: message ? message : "Your session appears to have timed out.  Please log back in.",
                        width: 300,
                        height: 100
                    }
                }
            }));
        });
    });
    return popupComponent;
}
//TODO: move to core-components (not urgent)
function delinquentPopup(title, message, url, screenTop, screenLeft) {
    return new Promise(function (resolve, reject) {
        require(["rvc!ui/util/modal"], function (PopupComponent) {
            resolve(new PopupComponent({
                el: document.body,
                append: true,
                data: {
                    "params": {
                        screenZIndex: 500,
                        screenTop: screenTop,
                        screenLeft: screenLeft,
                        title: title,
                        okHandler: function (instance) {
                            window.top.location.href = url;
                        },
                        v2:true,
                        disableScreenClick:true,
                        initialHide: false,
                        okLabel: url !== "" ? "Make Deposit" : "",
                        message: message,
                        width: 360,
                        height: 230
                    }
                }
            }));
        });
    });
}

function paymentStatePopup(title, message, url, buttonText, screenTop, screenLeft) {
    return new Promise(function (resolve, reject) {
        require(["rvc!ui/util/modal"], function (PopupComponent) {
            resolve(new PopupComponent({
                el: document.body,
                append: true,
                data: {
                    "params": {
                        screenZIndex: 500,
                        screenTop: screenTop,
                        screenLeft: screenLeft,
                        title: title,
                        okHandler: 
                        v2:true,
                        disableScreenClick:true,
                        initialHide: false,
                        okLabel: buttonText,
                        message: message,
                        width: 360,
                        height: 230
                    }
                }
            }));
        });
    });
}

function uitkDestroyExtCmps(divEl) {
	divEl.select('.uitkSelect, .uitkToggle, .uitkSingleSelect, .uitkMultiSelect').each(function(el) {
		try {
			Ext.getCmp(el.dom.id).destroy();
		} catch(e) {
			log('Error destroying Ext component');
		}
	});
}

function getCsrfToken(){
	var meta = Ext.select('meta[name=csrf-token]').first(), token = meta != undefined ? meta.dom.content : undefined;
	return token;
}

/**
*
* Issues an Ajax request to the given url, with the given parameters. Displays result in the div
*
*/

function uitkDisplayAjaxUrlBase(divId, url, execution, transition, formId, renderer, skipMask, forcePost) {
    var elm = Ext.get(divId),
		mgr = elm.getLoader(),
		requestParams = {},
		cb;

    if(renderer){
    	cb = renderer;
    }
	else {
		if(!skipMask) {
			var loadMask = new Ext.LoadMask(elm);
			loadMask.show();
		}

		cb = function(el , success , response){
			if(!success && (response.status=='403' || response.status=='401')){
	            uitkSessionExpiredPop('/login.user', response.status);
			}
			else {
				if(formId) {
					var resp = !response.responseXML || !response.responseXML.body ? response.responseText : response.responseXML.body.innerHTML;
					uitkDestroyExtCmps(elm);
					elm.update(resp, true);
				}
				uitkOnReadyAndOnAjaxReadyHolder(elm.dom.id);
			}

			if(!skipMask) {
				loadMask.hide();
			}
	    };
	}

    if(formId || forcePost){
		var form = document.getElementById(formId);
        var ajaxObject = {
            method:'POST',
            headers: {
                'uitk_csrf': getCsrfToken()
            },
            params:requestParams,
            callback:cb,
            disableCaching:true
        };
		var separator = '?';
		if(url.indexOf('?') > -1){
			separator = '&';
		}
		var urlString = url+separator+transition+"=xyz&execution="+execution;

		if(forcePost || (form && form.enctype)) {// csrf support
			var match = new RegExp('[?&]uitk_csrf=([^&]*)', "i").exec(url),
				token = getCsrfToken();
			if (token) {
				if (match) {
					urlString = urlString.replace(match[1], token);
				}
				else {
					urlString += '&uitk_csrf=' + token;
				}
			}
            ajaxObject.form = formId;
		}

		ajaxObject.url = urlString;

		Ext.Ajax.request(ajaxObject);

    }else{
	    if(execution){
			requestParams.execution = execution;
    	}
		if(transition) {
			requestParams[transition] = transition;
		}
	    mgr.load({
            url: url,
            scripts: true,
            params: requestParams,
			ajaxOptions:{
				method:'GET',
				headers: {
					'uitk_csrf': getCsrfToken()
				}
			},
            callback: cb
	    });
    }
}

function uitkDisplayAjaxUrl(divId, url, execution, transition, formId, skipMask) {
	uitkDisplayAjaxUrlBase(divId, url, execution, transition, formId, null, skipMask);
}

function uitkResizeIframe(el, maxHeight) {
	try {
		el.style.height = 0;
		el.style.height = Math.min(el.contentWindow.document.body.scrollHeight, maxHeight) + 'px';
	} catch(e) {}
}

/**
 *
 * Issues an Ajax request to the given url, with the given parameters. Parses json result and displays message.  If no messages passed as arguments
 * will use message returned by server.
 *
 */
function uitkDisplayAjaxUrlMessage(divId, url, execution, transition, formId, successMsg, errorMsg, forcePost) {
    var el = Ext.get(divId),
    	renderer = function(r , success , response){
    		obj = Ext.JSON.decode(response.responseText);
			msg = obj.message;
    		if (obj.status == 'Success' || obj.status == 'true' || obj.status == '1') {
    			cssClass = 'commandPatternSuccess';
    			if (successMsg) {
    				msg = successMsg;
    			}
    		} else {
    			cssClass = 'uitkCommandPatternFailure';
    			if (errorMsg) {
    				msg = errorMsg;
    			}
    		}
			el.update("<div class='uitkCommandPatternMessage " + cssClass + "'>"+msg+"</div>");
        };

    uitkDisplayAjaxUrlBase(divId, url, execution, transition, formId, renderer, false, forcePost);
}

function uitkCommandPattern(){
	var cpAttr = Ext.get(this.id+'-attributes').dom;

	if(cpAttr.value) {
		if (!confirm(cpAttr.value)) {
			return;
		}
	}
	uitkDisplayAjaxUrlMessage(this.id + '_result', cpAttr.src, '', '', '', cpAttr.alt, cpAttr.title, true);
}

function uitkLaunchJavascript(responseText) {
  // RegExp from prototype.sonio.net
  //var ScriptFragment = '(?:<script.*?>)((\n|.)*?)(?:</script>)';
	var ScriptFragment = '(?:<script type="text/javascript">)((\r|\f|\n|.)*?)(?:</script>)';

  var theMatch    = new RegExp(ScriptFragment, 'mgi');
  var scripts  = responseText.match(theMatch);

    if(scripts) {
        var js = '';
        for(var s = 0; s < scripts.length; s++) {
            var match = new RegExp(ScriptFragment, 'im');
            js += scripts[s].match(match)[1];
        }
        eval(js);
    }

}




/*
    Represent behavior of Form Entries
 */
Ext.EstaleaFormEntry = {};

function EstaleaFormEntry(fieldId) {
	this.targetElement = Ext.get(fieldId);
	this.targetElementDiv = Ext.get('field-fl-' + fieldId) || Ext.get('field-' + fieldId);
	var me = this;

	if(this.targetElement) {
		this.targetNodeType = this.targetElement.dom.nodeName;
	}

	this.showField = function(show){
		var target = this.targetElementDiv;
		show ? target.removeCls('x-hidden') : target.addCls('x-hidden');
	};

	this.checkField = function(check){
		if(check == true) {
		Ext.getDom(fieldId).checked = true;
		}
	};

	this.updateValue = function(newValue, update) {
		if(this.targetElement) {
			if(typeof(Ext.EstaleaFormEntry[fieldId]) == "undefined"){
				 Ext.EstaleaFormEntry[fieldId] = this.targetElement.getValue();
			}
			if(update){
				Ext.EstaleaFormEntry[fieldId] = this.targetElement.getValue();
				this.targetElement.set({'value': newValue}, false);
			} else {
				this.targetElement.set({'value': Ext.EstaleaFormEntry[fieldId]}, false);
			}

			Ext.ComponentManager.onAvailable(fieldId, function(el) {
				el.setValue(newValue);
			});
		}
	};

	this.updateLabel = function(newLabel, update) {
		if(this.targetElement && update) {
			this.targetLabel = this.targetElementDiv.query('.uitkMainLabel label')[0];
			this.targetLabel.innerHTML = newLabel;
		}
	};

	this.enableField = function(enable){
		var extEl = Ext.getCmp(fieldId),
			target = this.targetElement;

		if(extEl) {
			if (extEl.hasCls('uitkSingleSelect')) {
				var targetEl = extEl.hiddenEl;

				if (targetEl !== undefined) {
					if (enable) {
						targetEl.dom.removeAttribute("disabled");
					} else {
						targetEl.set({
							'disabled': true
						});
					}
				}
			} else {
				extEl.setDisabled(!enable);
			}
		} else {
			if(target) {
				if(target.hasCls('uitkDateField')) {
					Ext.getCmp('dateCmp-' + target.id).setReadOnly(!enable);
				}
				else {
					if(enable) {
						target.dom.removeAttribute("disabled");
					}
					else {
						target.set({
							'disabled': true
						});
					}
				}
			}

			Ext.ComponentManager.onAvailable(fieldId, function(el) {
				me.enableField(enable);
			});
		}
	};

	this.setReadOnly = 
}

function uitkGetMultiSelectValues(selectElement) {
    var result = [], options = selectElement && selectElement.options;

    for (var i=0, iLen=options.length; i<iLen; i++) {
        var opt = options[i];
        if (opt.selected) {
            result.push(opt.value || opt.text);
        }
    }
    return result;
}

function uitkCheckCondition(condition){
	var elementId = String(condition.elementId),
		conditionType = String(condition.conditionType),
		conditionValue = String(condition.conditionValue),
		conditionElement = Ext.get(String(elementId)),
		conditionDOMelement = conditionElement.dom,
		extElement = Ext.getCmp(String(elementId)),
		value = conditionElement.getValue();

	if(extElement && extElement.hasCls('uitkSelect')) {
		value = extElement.getValue();
	} else if (extElement && extElement.xtype == "singleselect" && extElement.menu) {
		value = extElement.menu.getUpdatedValue();
	}

	var valueEquals = function(cVal) {
		if(conditionDOMelement.tagName == 'SELECT'
			&& conditionDOMelement.getAttribute('multiple')) {
			var selection = uitkGetMultiSelectValues(conditionDOMelement);
			if (selection.length > 1) {
				if(Ext.Array.contains(selection, cVal)) {
					return true;
				}
			}
		}
		return value == cVal;
	};

	if(conditionType == "CHECKED"){
		if(extElement && extElement.hasCls('uitkToggle')) {
			return extElement.getValue() == 1;
		}
		return conditionDOMelement.checked;
	} else if(conditionType == "NOT_CHECKED") {
		if(extElement && extElement.hasCls('uitkToggle')) {
			return extElement.getValue() == 0;
		}
		return !conditionDOMelement.checked;
	} else if(conditionType == "EQ") {
		return valueEquals(conditionValue);
	} else if(conditionType == "NOTEQ") {
		return ! valueEquals(conditionValue);
	} else if(conditionType == "IN") {
		var conditionValues = conditionValue.split(",");
		for (var i = 0, ilen = conditionValues.length; i < ilen; i++) {
			var cVal = conditionValues[i];
			if(valueEquals(cVal)) {
				return true;
			}
		}
		return false;
	} else if(conditionType == "NOTIN") {
		var conditionValues = conditionValue.split(",");
		for (var i = 0, ilen = conditionValues.length; i < ilen; i++) {
			var cVal = conditionValues[i];
			if (valueEquals(cVal)) {
				return false;
			}
		}
		return true;
	} else if(conditionType == "CHANGE") {
		return true;
	}
	throw "Unknown condition type " + conditionType;
}

function uitkCheckConditionList(conditionList) {
	var accumulator = conditionList.accumulatorType,
		len = conditionList.conditions.length,
		conditionsTrue;

	for(var i = 0; i < len; i++) {
		var currCondition  = false;

		try{
			currCondition = uitkCheckCondition(conditionList.conditions[i]);
		} catch(e) {}

		if(!Ext.isDefined(conditionsTrue)){
			conditionsTrue = currCondition;
		}

		if(accumulator == 'AND'){
			conditionsTrue = conditionsTrue && currCondition;
		}
		else if(accumulator == 'OR') {
			conditionsTrue = conditionsTrue ||  currCondition;
		}

	}
	return conditionsTrue;
}

/*
 * condition list.-- call back needs to invoke the condition checker
 * condition list should be usable to get the condition element ids.
 *
 */
function uitkAddConditionChangeListeners(condition , callBack){
	var elementId = condition.elementId,
		listenToFieldElem = Ext.get(String(elementId)),
		listenToExtElem = Ext.getCmp(String(elementId));

	if(listenToFieldElem && !listenToExtElem) {
		var listenToNodeType = listenToFieldElem.dom.nodeName;

		if (listenToNodeType == 'INPUT') {
			var listenToFieldType = listenToFieldElem.dom.type;

			if (listenToFieldType == "text") {
				listenToFieldElem.on("keyup", callBack);
			}
			else if (listenToFieldType == "checkbox") {
				listenToFieldElem.on("click", callBack);
			}
			else if (listenToFieldType == "radio") {
				var name = listenToFieldElem.dom.name;
				var inptElmnts = Ext.query("input[type=radio]");

				for (var i = 0; i < inptElmnts.length; i++) {
					if (name == inptElmnts[i].name) {
						Ext.get(inptElmnts[i]).on("click", callBack);
					}
				}
			}
		}
		else {
			listenToFieldElem.on('change', callBack);
		}
	}

	Ext.ComponentMgr.onAvailable(elementId, function() {
		listenToExtElem = this;

		if(listenToExtElem) {
			listenToExtElem.on('change', ;
		}
	});
}

function uitkAddConditionListChangeListeners(conditionList, callBack) {
	if(!conditionList || !conditionList.conditions){
		throw "ConditionList not defined";
	}
	for(var i  = 0 ; i < conditionList.conditions.length; i++) {
		uitkAddConditionChangeListeners(conditionList.conditions[i],callBack);
	}
}

function uitkDecreasePlusMinus(pmField, minValue) {
	if (pmField.getValue(true) <= minValue) {
		return false;
	}
	pmField.dom.value = pmField.getValue(true)-1;
}

function uitkIncreasePlusMinus(pmField) {
	pmField.dom.value = pmField.getValue(true)+1;
}

function uitkCreateAlertBox(el) {
	var element = Ext.get(el.dom.title);

	if(element) {
		element.on('click', function () {
			if (this.dom.checked) {
				Ext.Msg.alert(el.down('h6').dom.innerHTML, el.dom.innerHTML);
			}
		});
	}
	else {
		Ext.ComponentManager.onAvailable(el.dom.title, function() {
			this.on('click', function() {
				if(this.isChecked()) {
					Ext.Msg.alert(el.down('h6').dom.innerHTML, el.dom.innerHTML);
				}
			});
		});
	}
}


function uitkCancelConfirmPop(buttonId, confirmHandler, cancelHandler) {
	var msg = Ext.get('uitkConfirmMessage' + buttonId),
		msgType = msg.hasCls('WARNING') ? 'WARNING' : 'DANGER';

	Ext.create('Ext.ux.ConfirmationPopup', {
		msg: msg.dom.innerHTML,
		type: msgType,
		fn: function(accept) {
			if(accept) {
				confirmHandler.call();
			}
			else if(cancelHandler) {
				cancelHandler.call();
			}
		}
	}).show();
}

function uitkUpdateActivePopupWindow(params) {
    if(parent.Ext) {
        var lightbox = parent.Ext.WindowManager.getActive();
        if (lightbox != undefined && lightbox.isWindow && typeof params == "object") {
            if (params.width > 0) {
                lightbox.setWidth(params.width / 1).center();
            }
            if (params.height > 0) {
                var iframe = lightbox.el.select('iframe').first();

                if (iframe) {
                    iframe.set({height: (params.height / 1)});
                    lightbox.center();
                }
            }
        }
    } else {
        const bs = window.document.body.style;
        bs.width = params.width + 'px';
        bs.height = params.height + 'px';
    }
}

function uitkSelectConfirmPop(el, msg, type) {
	if(el.getValue() != el.initialValue) {
		Ext.create('Ext.ux.ConfirmationPopup', {
			msg: msg,
			type: type,
			fn: 		}).show();
	}
}

function uitkCreateRatingWidget(el) {
	var resettable = true;
	if(el.hasCls('showNoRatings')) {
		resettable = false;
	}
	new Ext.ux.Rating(el.dom.id, {
        canReset: resettable,
        resetValue: 0
    });
}

function submitForm(form) {
	var button = form.ownerDocument.createElement('input');
	button.style.display = 'none';
	button.type = 'submit';
	form.appendChild(button).click();
	form.removeChild(button);
}

function uitkCreateButton(el){
	var btnId = el.dom.id,
		bButton = Ext.get(el).down('button');
	if(bButton) {
		var bBtnDom = bButton.dom,
            bText = bBtnDom.innerHTML,
			titleAttr = bBtnDom.title,
			bHandler;
		el.dom.innerHTML = '';
		var bConfig = {
		        renderTo: btnId,
		        id: 'button-' + btnId,
		        type: bButton.dom.type,
		        text: bText,
		        minWidth: 55,
				disabled:el.hasCls('disabledButton')
		};
		if(!el.hasCls('uitkNoDisable')) {
			bConfig.listeners = {// prevent double click
					'click':			};
		}
		if(el.hasCls('hasIcon')) {
			bConfig.iconCls = bBtnDom.className;
		}
		var button = new Ext.Button(bConfig);

		if(titleAttr) {
			var evtId = bBtnDom.name;
			if(el.hasCls('extJsSubmit')) {
				bHandler = 
			}
			else if(el.hasCls('showInWindow') || el.hasCls('showInLightbox')) {
				var url = el.hasCls('extSimpleButton') ? titleAttr : document.URL,
					hasQ = url.indexOf('?') != -1;
				if(!hasQ) {
					url += '?';
				}
				if (el.hasCls('extWebFlowSubmit')) {
					url+= '&_eventId=' + evtId;
				}
				if(el.hasCls('showInWindow')) {
					bHandler = 
				}
				else {
                    bHandler = function(){
                        var listener = null,
						width,
						height;
                        if(bBtnDom.getAttribute('data-rurl')) {
                            listener = 
                        }
                        else if(bBtnDom && bBtnDom.value) {
                            listener = function() {
                                this.getEl().select('iframe').first().dom.src = url.replace('_eventId','oldEvent') + '&_eventId=' + bBtnDom.value;
                            };
                        }
						if (el.hasCls('customLightBox')) {
							el.dom.classList.forEach(getDimensions);
							uitkPopup(url + '&d=lightbox', '', width, height, null, null, null, false, false, listener);
						} else {
							uitkPopup(url + '&d=lightbox', '', 950, 600, null, null, null, false, false, listener);
						}
						function getDimensions(element, index, array) {
							if (element.search("Width") !== -1) {
								width = element.replace( /^\D+/g, '');
							}
							if (element.search("Height") !== -1) {
								height = element.replace( /^\D+/g, '');
							}
						}
                    };
				}
			}
			else if(el.hasCls('extWebFlowSubmit')) {
				bHandler = function(){
					var prevClick = Ext.get('wFlowButton');
					if(prevClick) {
						prevClick.dom.value = evtId;
					}
					else {
						Ext.DomHelper.append(titleAttr,{tag:'input',id:'wFlowButton',type:'hidden',name:'_eventId',value: evtId});
					}
					submitForm(Ext.get(titleAttr).dom);
				};
			}
			else if(el.hasCls('uitkRowActionPop')) {
				bHandler = function() {
					var width = Ext.getBody().getViewSize().width - 100,
						height = Ext.getBody().getViewSize().height - 100,
						ab = el.hasCls('uitkPopAddressBar') ? ',toolbar=yes,menubar=yes' : '';
					window.open(titleAttr,'newWindow','width=' + width + ',height=' + height + ',scrollbars=yes,resizable=yes'+ab);
				};
			}
			else if(el.hasCls('uitkRowActionLightbox')) {
				var bVal = bButton.dom.value;
				bHandler = 
			}
			else if(el.hasCls('extSimpleButton')) {
				bHandler = 
			}
			else if(el.hasCls('extAjaxButton')) {
				var ajaxAttr = Ext.get('ajax-' + btnId).dom;
				bHandler = function() {
					uitkRemoveEditHighlight.apply(button.el.dom);
					uitkDisplayAjaxUrl(titleAttr, ajaxAttr.value, ajaxAttr.name, '_eventId_' + evtId, ajaxAttr.className);
				};
			}
			else {
				bHandler = 
			}

			if(el.hasCls('uitkButtonConfirmation')) {
				var oldHandler = bHandler;
				bHandler = function() {
					var doConfirm = true;

					if(Ext.ConfirmationConditions && Ext.ConfirmationConditions[btnId]) {
						var conditions = Ext.JSON.decode(Ext.ConfirmationConditions[btnId]);
						doConfirm = uitkCheckConditionList(conditions);
					}

					if(doConfirm) {
						uitkCancelConfirmPop(btnId, oldHandler, ;
					}
					else {
						oldHandler.call();
					}
				};
			}

			if(el.hasCls('defaultSubmitButton')) {
				new Ext.KeyNav({
					target:document,
				    enter: function(e){
						if(e.target.nodeName.toLowerCase() != 'textarea') {
							e.stopEvent();
							bHandler.call();
						}
						return true;

				    }
				});
			}
			button.setHandler(bHandler);
		}
		bButton.destroy();
	}

}

function webflowMenuSubmitButton(formId, eventId) {

	var myForm = document.getElementById(formId);

	var webFlowEventIdElement = document.createElement('input');
	webFlowEventIdElement.setAttribute('type', 'hidden');
	webFlowEventIdElement.setAttribute('name', '_eventId');
	webFlowEventIdElement.setAttribute('value', eventId);
	myForm.appendChild(webFlowEventIdElement);

	//the form submit() doesn't trigger onsubmit() event
	submitForm(myForm);
}

function uitkSplitButtonOptions(prnt, linkFunction) {
	var menuList = [],
		lis = Ext.query(' > li > a',prnt),
		hasChildren = false,
		itemDisabled = false,
		itemSelected = false,
		itemDefault = false,
		menuItem,
		tempId,
		ctCls;

	for(var i = 0;i < lis.length;i++){
		ctCls = '';
		hasChildren = lis[i].rel !== '';
		itemDisabled = (lis[i].className.indexOf('uitkDisabled') > -1);
		itemSelected = (lis[i].className.indexOf('uitkSelected') > -1);
		itemDefault = (lis[i].className.indexOf('defaultSubmitButton') > -1);
		menuItem = {};
		tempId = lis[i].id || uitkGenerateId();
		lis[i].id = '';
		menuItem.id = tempId;
		menuItem.text = lis[i].innerHTML;
		menuItem.uitkAction = lis[i].href;
		menuItem.cls = '';
		if(!itemDisabled) {
			menuItem.handler = Ext.Function.bind(linkFunction,this,[menuItem.uitkAction,lis[i]]);
		}
		else {
			if(!hasChildren) {
				menuItem.cls += 'uitkDisabledMenuItem';
			}
			menuItem.hideOnClick = false;
		}
		if(hasChildren) {
			menuItem.menu = {
				items: uitkSplitButtonOptions(tempId+'-sub', linkFunction)
			};
			menuItem.cls += ' uitkParentMenuItem';
		}
		else if(!itemDisabled){
			if(lis[i].className.indexOf('uitkButtonConfirmation') != -1) {
				menuItem.handler = function() {
					uitkCancelConfirmPop(this.id,Ext.Function.pass(linkFunction,this.uitkAction,this));
				};
			}
			else if(lis[i].className.indexOf('uitkRowActionPop') != -1) {
				menuItem.handler = function() {
					var width = Ext.getBody().getViewSize().width - 100;
					var height = Ext.getBody().getViewSize().height - 100;
					window.open(this.uitkAction,'newWindow','width=' + width + ',height=' + height + ',scrollbars=yes,resizable=yes');
				};
			}
			else if(lis[i].className.indexOf('uitkRowActionLightbox') != -1) {
				var width = lis[i].rev,
					height = lis[i].coords;

				menuItem.handler = function() {
					uitkPopup(this.uitkAction, this.text, width, height);
				};
			}
		}
		if(itemDefault) {
			var menuItemId = menuItem.id;

			new Ext.KeyNav({
				target:document,
			    enter: function(e){
			    	e.stopEvent();
			    	Ext.getCmp(menuItemId).handler.call();
			    }
			});
		}
		if(itemSelected) {
			menuItem.cls += 'uitkSelectedMenuItem';
		}
		menuList.push(menuItem);
	}

	return menuList;
}

function uitkCreateMultiLevelDropdown(el) {
	var hiddenInput = document.getElementById('input' + el.dom.id),
		selectedLabel = hiddenInput.title,
		elId = el.dom.id;

	var uitkSetHiddenInputValue = function(link,item) {
		hiddenInput.value=item.rev;
		Ext.getCmp('button-' + elId).setText(item.innerHTML);
	};
	uitkCreateSplitButton(el,uitkSetHiddenInputValue);
	if(selectedLabel !== '') {
		Ext.getCmp('button-' + elId).setText(selectedLabel);
	}
}


function uitkCreateSplitButton(el,passedFunction) {
	var linkFunction = 
	ct = Ext.get(el.dom.id).parent();
	if (ct) {
		if (passedFunction && !passedFunction.$className) {// if not element
			linkFunction = passedFunction;
		}
		var menuList = uitkSplitButtonOptions(el.dom.id, linkFunction),
			ma = el.hasCls('uitkAlignMenuRight') ? 'tr-br' : 'tl-bl', config = {
			renderTo: ct,
			text: '<span>' + el.dom.title + '</span>',
			type: 'submit',
			id: 'button-' + el.dom.id,
			menuAlign: ma,
			cls: 'uitkSplitBtn',
			menu: {
				showSeparator: false,
				items: menuList
			}
		};

		if (el.dom.style.height) {
			config.height = el.getHeight();
		}
		new Ext.button.Split(config);
		el.destroy();
	}
}

function uitkTextCounter(el) {
	var me = el,
		id = me.dom.id,
		value = me.dom.value,
		count = value.length,
		nliteral = value.match(/\n/g),
		rliteral = value.match(/\r/g);

	if(nliteral && !rliteral) {
		//if only \n is present we must count it twice
		//because \r will be added in submission
		count += nliteral.length;
	}

	var counter = Ext.get(id + '_remLen'),
		maxCount = parseFloat(counter.dom.className);

	if(count > maxCount) {
		me.dom.value = value.substring(0, (value.length - (count - maxCount)));
		counter.dom.innerHTML = '0';
	}
	else {
		counter.dom.innerHTML = String(maxCount - count);
	}
}

function uitkSelectComboOptions(boxId,addEmptyOption) {
	var box = Ext.get(boxId).dom;
	var opts = Ext.query('option',box);
	if(addEmptyOption === true && opts.length === 0) {
		var optItem = document.createElement('option');
        box.appendChild(optItem);
	}
	for(var x=0; x<opts.length; x++){
		opts[x].selected=true;
	}
}

function uitkAjaxLinkAction() {
	uitkDisplayAjaxUrl(this.rev, this.rel, '', '' , '');
}

function uitkRemoveEditHighlight() {
	var editSection = Ext.get(this),
		editable = editSection.findParentNode('.uitkEditableLabel');
	if(!editable) {
		editable = editSection.findParentNode('.uitkEditableSection');
	}
	if(editable) {
		editable = Ext.get(editable);
		editable.removeCls('uitkEditableEdit');
		editable.removeCls('uitkEditableError');
	}
}

function uitkEditLinkHighlight() {
	var editLink = Ext.get(this),
		linkParent = editLink.findParentNode('.uitkEditableLabel');
	if(!linkParent){
		linkParent = editLink.findParentNode('.uitkEditableSection');
	}
	linkParent = Ext.get(linkParent);
	linkParent.addCls('uitkEditableEdit');
}

function createTooltip(el) {
	var tipCls,
		htmlSpan = el.down('.uitkTooltipInfo'),
		targetId = el.dom.id;

	if(htmlSpan) {
		if(htmlSpan.dom.className) {
			tipCls = htmlSpan.dom.title;
		}
		new Ext.ux.PersistentTip({
	        target: targetId,
            id: uitkGenerateId(),
	        maxWidth: 250,
	        html: htmlSpan.dom.innerHTML,
	        autoHide: true,
	        hideDelay: 1000,
	        closable: false,
	        cls: tipCls,
	        autoHeight: true,
	        bodyStyle: 'padding: 5px;'
	    });
	}
}

function createDateInput(el) {
	var parent = el.parent(),
		isMonthYear = parent.hasCls('uitkMonthYearInput');
	var config = {
	        format:!isMonthYear ? 'Y-m-d' : 'n-Y',
	        editable:false,
	        id:'dateCmp-' + parent.dom.id,
	        width:150,
			name:el.dom.name,
	        renderTo:parent
	    };
	if(el.dom.value && !Ext.isEmpty(el.dom.value)) {
		config.value = el.dom.value;
	}
	el.destroy();
	if(!isMonthYear) {
		new Ext.form.field.Date(config);
	}
	else {
		new Ext.form.field.Month(config);
	}
	if(parent.up('.uitkFields')) {
		parent.up('.uitkFields').addCls('uitkDateFieldCt');
	}
}

function createColorPickerInput(el) {
	var fieldId = el.dom.id,
		existing = Ext.getCmp('picker' + fieldId);
	if(existing) {
		existing.destroy();
	}
	var picker = new Ext.menu.ColorPicker({
		id:'picker' + fieldId,
		itemId:fieldId
	});
	picker.on('select',function(colorpalette,color){
		Ext.get(this.itemId).dom.value = color;
	});

	Ext.get(fieldId).next().on('click',function(){
		Ext.getCmp('picker'+fieldId).showAt(this.getXY());
	});
}

function convertHexToRGBA(hex,opacity){
    hex = hex.substring(1);
    var r, g, b;
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);

    var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
}

function createTabPanel(el, activeTab) {
	return new Ext.Uitk.SimpleTabs({
		renderTo: el.dom.id,
		activeTab:(activeTab ? activeTab : 0)
	});
}

function uitkOpenAgreementPopup(el) {
	var htmlPopUp = Ext.get('pop'+el.id);
	if(htmlPopUp) {
		uitkPopup('',el.title,600,500,htmlPopUp.dom.id);
	}
	else {
		uitkPopup(el.href,el.title,600,500,'');
	}
}

function uitkSetupVideoPlayer(el) {
	$('#' + el.dom.id).flowplayer({
		key:el.dom.name,
		playlist:[[
		    { mp4:el.dom.href }
		]],
		swf:el.dom.rel
	});
}

window.openTaskMgrLightbox = function(mode, taskId) {
    taskManager.then(function() {    if(typeof(window.globalTaskManager)!='undefined') {
        // mode can be createTask, taskList or taskDetails
        if (mode == 'taskDetails'){
            window.globalTaskManager.set('currentTaskId', taskId);
        }
        window.globalTaskManager.set('taskView', mode);
        window.globalTaskManager.set('taskManagerOpen', true);
    }
    });
}

var clipClient = {};
//clipClient predeclared to be accessible here
//intialized in uitk_macros
function uitkMakeCopy(el, tooltipTarget) {
    var tip = null;
    var tipTimer = null;
    var target;
    var clipboard;
    var targetId;
    if (el.dom) {
        targetId = el.dom.getAttribute('data-clipboard-target').replace('#', '');
        clipboard = new Clipboard('#' + el.dom.id);
	}else {
    	clipboard = new Clipboard('#' + el.id);
        targetId = el.getAttribute('data-clipboard-target').replace('#', '');
	}
    clipClient[targetId] = clipboard;
    clipClient[targetId].on('success', function () {
    	if (tooltipTarget) {
    		target = Ext.get(tooltipTarget);
		}
		if (!target) {
            target = Ext.get(targetId);
		}
		if (target) {
            if(tip && tipTimer) {
                clearTimeout(tipTimer);
                tipTimer = null;

                tip.destroy();
                tip = null;
            }

            tip = Ext.create('Ext.tip.AnchoredToolTip', {
                target:null,
                anchoredTo:target,
                html: clipClient['copy_message_key'],
                bodyCls:'uitkCenterContent'
            });
            tip.show();

            target.removeCls('uitkCopyAnimation');
            target.addCls('uitkCopyActive');
            setTimeout( 1);

            tipTimer = setTimeout( 2500);
		}
    });
}

function uitkMakeAnchoredTip(el) {
	var cmp = Ext.getCmp(el.dom.id);

	if(cmp && (cmp.tooltip == '')) {
		return;
	}

	Ext.create('Ext.tip.AnchoredToolTip', {
		target:el.dom,
		anchoredTo:el.dom,
		html:(cmp ? cmp.tooltip : el.dom.title)
	});

	if(cmp) {
		if(cmp.titleEl) {
			cmp.titleEl.dom.title = '';
		}
		cmp.tooltip = '';
	}
}

function uitkMoreTextWidget(el) {
	el.maxHeight = el.dom.title;
	el.dom.title = '';
	el.prevHeight = el.dom.clientHeight;
	el.moreLinkText = 'More';
	if(el.prevHeight > el.maxHeight) {
		el.setStyle('height',el.maxHeight+'px');
		var mlLink = new Ext.DomHelper.append(el,{tag:'a',cls:'uitkMoreLessLink',html:el.moreLinkText,href:'#'});
		Ext.get(mlLink).on('click',function(){
			if(!this.hasCls('uitkLessLink')) {
				el.setStyle('height',el.prevHeight+'px');
				this.addCls('uitkLessLink');
				this.dom.innerHTML = 'Less';
			}
			else {
				el.setStyle('height',el.maxHeight+'px');
				this.removeCls('uitkLessLink');
				this.dom.innerHTML = el.moreLinkText;
			}
		});
	}
}

function uitkFadeOutMessage(el) {
	var hideAction = {
		run: function() {
			if(this.taskRunCount > 1) {
				el.fadeOut();
				Ext.TaskManager.stop(hideAction);
			}
		},
		interval:3000
	};
	Ext.TaskManager.start(hideAction);
}

function uitkGetToggleCount(el) {
	var elm = el.dom;
	var ajaxUrl = elm.rel;
	if(ajaxUrl) {
		Ext.Ajax.request({
			url: ajaxUrl,
			method: 'GET',
			success: function(result){
				if(result.status == 200) {
					var response = Ext.JSON.decode(result.responseText);
					var cnt = response.count;
					if(cnt && cnt > 0) {
						var cntEl = document.createElement('b');
						cntEl.innerHTML = cnt;
						elm.appendChild(cntEl);
					}
				}
			}
		});
	}
}

function uitkPreventEnterFormSubmission(e,el) {
	el = Ext.get(el);
	el.enterAction = new Ext.KeyNav({
			target:el,
		    "enter" : 		});
	el.on('blur',el,{single:true});
}

function uitkMakeTrue(id) {
	var el = document.getElementById(id);
	el.value = (el.checked ? 'true' : 'false');
}

function uitkAutoClear(e,el) {
	var initialVal = el.alt || el.value,
		restoreInitial = function() {
		if(el.value === '') {
			el.value = initialVal;
		}
		this.un('blur',restoreInitial);
	};
	if(!el.alt) {// store initial val on alt attribute
		el.alt = initialVal;
	}
	el.value = '';
	Ext.get(el).on('blur',restoreInitial);
}


function uitkOpenSupportArticle(articleId) {
	uitkOpenWindow('/secure/support/portal.ihtml?showHelp=true');
}


function uitkFindParentForClass(className, maxDepth, element) {
    if(element != undefined && maxDepth > 0) {
        var classAttribute = element.getAttribute('class');
        if(classAttribute != undefined && classAttribute.indexOf(className) != -1) {
            return element;
        } else if(element.parentElement) {
            return uitkFindParentForClass(className, maxDepth - 1, element.parentElement);
        }
        return undefined;
    }
}

function getDateFromUTC(utcMilliseconds) {
    try {
        var result = new Date(utcMilliseconds/1 + new Date().getTimezoneOffset() * 60);
        result = result.toDateString() + " " + result.getHours() + ":" + result.getMinutes();
        return result;
    } catch(e){
    	return "Unknown";
	}
}

/*deprecated*/
function removeUitkFieldsOverflow(el) {
    try {
        var parent = uitkFindParentForClass("uitkFields", 22, document.getElementById(el)),
            style = parent ? parent.style : undefined;

        if(style != undefined){
            style.overflow = 'visible';
            style.position = "relative";
            style.left = "25px";
            style.paddingLeft = "170px";
        }
    } catch(e) {}
}

function createNewWindowLink(el,els,idx) {
    var linkhref = el.dom.href;
    el.on('click', function (e) {
		e.preventDefault();
		var height = Ext.dom.AbstractElement.getViewportHeight() - 100,
			width = Ext.dom.AbstractElement.getViewportWidth() - 100;
        newPopWindow = window.open(linkhref, 'newWindow', 'width=' + width + ',height=' + height + ',scrollbars=yes,resizable=yes');
		newPopWindow.focus();
	});
	el.insertHtml('beforeEnd',' <i class="fa fa-external-link"></i>');
}

function uitkCreateComponent(el) {
	var json = Ext.decode(el.getHTML());
	el.removeCls('uitkComponentCfg');
	el.setHTML('');

	Ext.create(json).render(el);
}

function uitkOnReadyAndOnAjaxReadyHolder(divId) {
	function s(selector) {
		if(divId) {
			return '#' + divId + ' ' + (selector || '');
		}
		return selector;
	}

	Ext.select(s('.uitkNewWindowOpen')).each(createNewWindowLink);

	Ext.select(s('.uitkDisplayTooltip')).each(createTooltip);

	Ext.select(s('.uitkDateInput input')).each(createDateInput);

	Ext.select(s('.uitkMonthYearInput input')).each(createDateInput);

	Ext.select(s('.uitkColorPickerField')).each(createColorPickerInput);

	Ext.select('.uitkEditableLabel .uitkValidationErrors, .uitkEditableSection .uitkValidationErrors').each(;

	Ext.select(s('.ratingWidget')).each(uitkCreateRatingWidget);

	Ext.select(s('.uitkSplitButton')).each(uitkCreateSplitButton);

	Ext.select(s('.uitkMultiLevelDropdown')).each(uitkCreateMultiLevelDropdown);

	Ext.select(s('.uitkEditLink')).on('click',uitkEditLinkHighlight);

	Ext.select(s('.ajaxLink')).on('click',uitkAjaxLinkAction);

	Ext.select(s('.uitkTabContainer')).each(function(el) {
		var tabPanel = createTabPanel(el, el.dom.dataset.tab);

		tabPanel.on('tabchange', function(el, tab, item) {
			if(item.dom.children.length == 1 && item.dom.children[0].getAttribute('href') != undefined) {
				window.parent.location = item.dom.children[0].getAttribute('href');
			}

			item.select('.uitkClickAjaxContent').each(function(el) {
				if(el.dom.title != '') {
					uitkDisplayAjaxUrl(el.dom.id, el.dom.title, '', '', '');
					el.dom.title = '';
				}
			});
		});
	});


	Ext.select(s('.uitkDisplayAjaxContent')).each(function(el){
		uitkDisplayAjaxUrl(el.dom.id, el.dom.title, '', '', '');
		el.dom.title = '';
	});

	(function setupVideo() {
		if(window.jQuery) {
			$(document).ready(function() {
				Ext.select(s('.uitkVideoHolder')).each(uitkSetupVideoPlayer);
			});
		} else {
			setTimeout(setupVideo, 1000);
		}
	})();


    getQueryStringFromJson = function(paramsJson) {
        if(typeof paramsJson != 'object') {
            return ""
        }
        var queryParams = "";
        var pairs = []
        for (var param in paramsJson) {
            if(paramsJson.hasOwnProperty(param) && paramsJson[param] !== undefined) {
                pairs.push(param + "=" + encodeURIComponent(paramsJson[param]));
            }
        }
        return pairs.join("&");
    }

	Ext.select(s('.hasTextCounter')).each(function(el) {
		el.on('keyup', ;
		uitkTextCounter(el);
	});

	Ext.select(s('.extButton')).each(uitkCreateButton);

	Ext.select(s('.uitkMoreTextWidget')).each(uitkMoreTextWidget);

	Ext.select(s('.uitkAgreementPopup')).on('click',;

	Ext.select(s('.uitkFlagDiv')).on('click',uitkGridFlagColumn);

	Ext.select('.uitkEditableEdit input[type=text]').on('focus', uitkPreventEnterFormSubmission);

	Ext.select(s('.uitkEditableLabel')).on('click', function(e) {
		if(e.getTarget().nodeName != 'A') {
			var label = Ext.get(this);

			if (!label.hasCls('uitkEditableEdit')) {
				label.select('.uitkEditLink').each(;
			}
		}
	});

	Ext.select(s('.uitkCommandPattern')).on('click', uitkCommandPattern);
	Ext.select(s('.extAlert')).each(uitkCreateAlertBox);

	Ext.select(s('.uitkCancelBox,') + s('.uitkMessageBox')).each(uitkFadeOutMessage);

	Ext.select(s('.uitkFormFocusFirstElement')).each(function(el) {
		this.select('input[type!=hidden],select').first().focus();
	});

	Ext.select(s('.uitkToggleCount')).each(uitkGetToggleCount);

	Ext.select(s('.uitkAutoClear')).on('focus',uitkAutoClear);

	Ext.select(s('.uitkCopy')).each(uitkMakeCopy);

	Ext.select(s('.uitkAnchoredTip')).each(uitkMakeAnchoredTip);

	Ext.select(s('.uitkComponentCfg')).each(uitkCreateComponent);

	UitkPubSub.publish('uitkReady',s());
}


Ext.onReady(function(){
	Ext.apply(Ext.QuickTips.getQuickTip(), {
		mouseOffset:[0,-50]
	});

	uitkOnReadyAndOnAjaxReadyHolder();
	new Ext.Panel({
		applyTo: 'uitk-container',
		id:'uitkBodyContainer',
		layout:'fit',
		bodyBorder:false
    });

	var regions = Ext.util.Cookies.getCookieValueAsArray('ext-regions');

	for(var x=0; x<regions.length; x++){
		var tempRegion = Ext.get(regions[x]);

		if(tempRegion) {
			document.getElementById(regions[x]).style.display = 'none';
		}
	}
});

var uitkMenuButtonHider = function(){
	if(this.menu && !this.noMouseover) {
			this.showMenu();
			this.menu.addCls('irHeaderMenu');
			var buttonHeight = this.getHeight(),
				box = this.menu.getBox(),
				boxY = this.menu.getBox().y - buttonHeight,
				boxl = box.x,
				boxt = boxY,
				boxr = box.x + box.width,
				boxb = boxY + box.height + buttonHeight,
				func = function(e) {
				var x = e.getPageX();
				var y = e.getPageY();
				if(x < boxl || x > boxr || y < boxt || y > boxb) {
					this.hideMenu();
					delete func;
					Ext.get(document.body).un('mousemove', func, this);
				}
			};
		Ext.get(document.body).on('mousemove', func, this);// if mouse outside of menu box, hide menu; with ext 4 upgrade we can use "mouseleave" event
	}
};

Ext.namespace('Ext.ux.Sprocket');

Ext.override(Ext.util.Observable, {
    subscribe: function( eventName, fn, scope, o ) {
        Ext.ux.Sprocket.PubSub.addEvents( eventName );
        Ext.ux.Sprocket.PubSub.on( eventName, fn, scope, o);
    },

    publish: function( eventName, event ) {
        if (Ext.ux.Sprocket.PubSub.eventsSuspended === true) {
			return true;
		}
        if (!Ext.ux.Sprocket.PubSub.events) {
			return false;
		}
        // a global event listener
        var glob = Ext.ux.Sprocket.PubSub.events[ '*' ],fn;
        if (glob) {
			if (glob.fire.call(glob, event, eventName) === false) {
				return true;
			}
		}
        if ( eventName.substr( 0, 1 ) == '/' && eventName.length > 1 ) {
            var chans = eventName.substr( 1 ).split( '/' );
            var matched = false;
            for ( var i = 0, len = chans.length; i <= len; i++ ) {
                fn = Ext.ux.Sprocket.PubSub.events[ '/' + chans.slice( 0, i ).join( '/' ).toLowerCase() ];
                if ( fn ) {
                    matched = true;
                    if (fn.fire.call(fn, event, eventName) === false) {
						return true;
					}
                }
            }
            return matched;
        } else {
            fn = Ext.ux.Sprocket.PubSub.events[ eventName.toLowerCase() ];
            if ( fn ) {
                fn.fire.call( fn, event, eventName );
                return true;
            }
        }
        return false;
    }

});

Ext.ux.Sprocket.PubSub = new Ext.util.Observable();
var UitkPubSub = Ext.ux.Sprocket.PubSub;

function removeSelectOptions(selectbox)
{
    var i;
    for(i = selectbox.options.length - 1 ; i >= 0 ; i--)
    {
        selectbox.remove(i);
    }
}

generateGUID = 

uitkDelay = (();

uitkActionMessage = function (message, type) {
    new Ractive({
        el: "body",
        template:
            '<div id="uitkActionMessageCt" class="uitkActionMessageCt" fade-in-out="{duration:200}"> \
                <div class="uitkActionMessage {{type==\'SUCCESS\' ? \'uitkMessagePos\' : type==\'CUSTOM\' ? \'uitkMessageCustom \': \'uitkMessageNeg\'}}"> \
                    {{{message}}} <i class="fa fa-times" on-click="@.teardown()"></i> \
                </div> \
            </div>',
        append: true,
        on: {
            render:         },
        data:     })
};

uitkDrawEnvironmentMessage = function(type) {

    require(['rvc!ui/util/staging-indicator'], function(StagingIndicator) {
        new StagingIndicator({
            data:function () {
                return {
                    type: type
                }
            }
        });
    });
};

captchaLoaded = function() {
    return !(typeof grecaptcha === "undefined");
};


function openUrlInNewWindow(path) {

    var newWin=window.open(path);
    if(!newWin || newWin.closed || typeof newWin.closed=='undefined') {
        alert('Popups appeared to be blocked by your browser!');
    }

}

function showJoinPlatformModal(accountType) {
    if (accountType === 'PUBLISHER') {
        _navigation_.fire('showjoin');
    } else {
        return window.require(['rvc!ui/pagespecific/globaldialogs/join-platform-modal'], function (jp) {
            new jp({
                el: document.body,
                data:             }).show()
        })
    }
}

// version management for localStorage
(function(ls) {
	var lsVersion = 4,// current version
		versionKey = 'lsVersion',
		provider = Ext.state.Manager.getProvider(),
		storedVersion = provider.get(versionKey);
	if(ls && (!storedVersion || storedVersion && storedVersion < lsVersion)) {
		ls.clear();
		provider.set(versionKey,lsVersion);
	}
})(localStorage);

(function (loc) {

    if (loc.match('/secure/mediapartner/home/pview')) {

        setTimeout(function () {

            var tCtr = document.getElementById('templateContainer');

            if (!tCtr) return;

            tCtr.addEventListener('click', function (ev) {

                if (ev.target.className.match && ev.target.className.match('opener')) {
                    var wdgt = ev.target.parentElement.cloneNode(true),
                        closer = wdgt.firstElementChild,
                        frameCtr = closer.nextElementSibling.nextElementSibling,
                        frm = frameCtr.firstElementChild,
                        tmplCtr = document.getElementById('templateContainer'),
                        dash = document.getElementById('dashboard'),
                        ht = tmplCtr.offsetHeight;

                    closer.className = 'closer';
                    dash.setAttribute('style', 'display: none');
                    frm.style.height = ht - 100 + 'px';
                    wdgt.style.height = ht + 'px';
                    tmplCtr.appendChild(wdgt);
                    tmplCtr.scrollIntoView();

                    closer.addEventListener('click', ;
                }

            }, false);

        }, 5000);

    }
})(document.location.href);

// polyfill for IE
if (!Object.entries) {
    Object.entries = 
}

/*
*   Trigger a custom JS event on a specific element or globally on document.
*     eventName     Name of event to trigger
*     eventData     [optional] any data you want sent listeners
*     targetElement [optional] specific element you want the event to be triggered on else it will be the global document
*
*   How to listen:
*     document.addEventListener("eventName", (e) => {
*       let eventData = e.detail;
*       ...
*     });
*/
function dispatchCustomEvent(eventName, eventData = {}, targetElement) {
    if (eventName) {
        (targetElement || document).dispatchEvent(new CustomEvent(eventName, {detail: eventData }));
    }
}

function createWindowObjectForRestCredentials(a, b){

    if (window.top.restCredentials) {
        window.top.restCredentials[a] = b
    } else {
        window.top.restCredentials = {}
        window.top.restCredentials[a] = b
    }

    return window.top.restCredentials
}