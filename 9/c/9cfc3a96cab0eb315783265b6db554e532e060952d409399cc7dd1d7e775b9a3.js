function CrossDomainStorage(origin, path){
    this.origin = origin;
    this.path = path;
    this._iframe = null;
    this._iframeReady = false;
    this._queue = [];
    this._requests = {};
    this._id = 0;
}

CrossDomainStorage.prototype = {

    constructor : CrossDomainStorage,

    init : function(){
	var that = this;
	if(!this._iframe) {
	    if(window.postMessage && window.JSON && window.localStorage) {
		this._iframe = document.createElement("iframe");
		this._iframe.style.cssText = "position:absolute;width:1px;height:1px;left:-9999px;";
		var body;
		try {
		    body = document.getElementsByTagName("body")[0];
		} catch(e) {
		}
		if(body) {
		    if(typeof document.body != "undefined") {
			body = document.body;
		    }
		}
		if(body && typeof body.appendChild != "undefined") {
		    body.appendChild(this._iframe);
		} else {
		    try {
			//console.error("body is not available ;(");
		    } catch(e) {
		    }
		}
		if(window.addEventListener) {
		    this._iframe.addEventListener("load", function(){
			that._iframeLoaded();
		    }, false);
		    window.addEventListener("message", function(event){
			that._handleMessage(event);
		    }, false);
		} else if(this._iframe.attachEvent) {
		    this._iframe.attachEvent("onload", function(){
			that._iframeLoaded();
		    }, false);
		    window.attachEvent("onmessage", function(event){
			that._handleMessage(event);
		    });
		}
	    } else {
		throw new Error("Unsupported browser.");
	    }
	}
	this._iframe.src = this.origin + this.path;
    },
    requestValue : function(key, callback){
	var request = {
	    key : key,
	    id : ++this._id
	}, data = {
	    request : request,
	    callback : callback
	};

	if(this._iframeReady) {
	    this._sendRequest(data);
	} else {
	    this._queue.push(data);
	}

	if(!this._iframe) {
	    this.init();
	}
    },
    _sendRequest : function(data){
	this._requests[data.request.id] = data;
	this._iframe.contentWindow.postMessage(JSON.stringify(data.request),
		this.origin);
    },
    _iframeLoaded : function(){
	this._iframeReady = true;

	if(this._queue.length) {
	    for( var i = 0, len = this._queue.length; i < len; i++) {
		this._sendRequest(this._queue[i]);
	    }
	    // this._queue = [];
	}
    },
    _handleMessage : function(event){
	if(event.origin == this.origin) {
	    var data = JSON.parse(event.data);
		if (this._requests[data.id]) {
			this._requests[data.id].callback(data.key, data.value);
			delete this._requests[data.id];
		}
	}
    }
};
osTablet()?e("fxos "+f):e("fxos mobile"):e("desktop"),r=function(){return device.landscape()?(o("portrait"),e("landscape")):(o("landscape"),e("portrait"))},u="onorientationchange"in window,s=u?"orientationchange":"resize",window.addEventListener?window.addEventListener(s,r,!1):window.attachEvent?window.attachEvent(s,r):window[s]=r,r(),function(){navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Nokia)|(Opera Mini)|(w(eb)?OSBrowser)|(webOS)|(UCWEB)|(Windows Phone OS 7)|(XBLWP7)|(ZuneWP7)/)&&e("no-font-face")}()}.call(this);}),this.$wrapper.addClass(this.classes.visible),this.displayed=!0,this.resultIndex=-1,this.config.forceSelection&&this.changeIndex("down")&&this.highlightResult()},s.prototype.hideResults=function(){this.$wrapper.removeClass(this.classes.visible),this.displayed=!1},s.prototype.populateResults=function(){this.processTemplate(),this.$list.html(this.$items)},s.prototype.processTemplate=function(){this.$items=e();var t=this.templates;if(this.config.templates.empty)e.merge(this.$items,t.$empty.html(this.config.templates.empty));else for(var s in this.results)if(this.results.hasOwnProperty(s)){var i=this.results[s];i.title&&e.merge(this.$items,this.renderTemplate(t.$item,i,"title")),Array.isArray(i.data)&&i.data.forEach(function(s){e.merge(this.$items,this.renderTemplate(t.$item,s,"text"))}.bind(this))}},s.prototype.renderTemplate=function(t,s,i){return t=e(t[0].outerHTML.replace(new RegExp("{{text}}|{{href}}|{{icon}}","gm"),(function(e){switch(e){case"{{text}}":default:return s[i];case"{{href}}":return s.href;case"{{icon}}":return s.icon?s.icon:" "}}))),s.disabled&&!0===s.disabled&&t.addClass(this.classes.disabled),t},s.prototype.highlightResult=function(){var e=this.$items.eq(this.resultIndex);this.$items.removeClass(this.classes.highlighted),e.hasClass(this.classes.disabled)||e.addClass(this.classes.highlighted)},s.prototype.selectResult=function(){var e=this.$items.eq(this.resultIndex);e.hasClass(this.classes.disabled)||(this.selected=!0,this.config.onItem(e),this.searchTerm=this.$el.val(),this.clearResults())},s.prototype.clearResults=function(){this.results=[],this.$list.html(null),this.resultIndex=-1,this.hideResults()},s.prototype.callFetch=function(){var e=this;this.config.limit,this.config.fetch(this.searchTerm,(function(t){t&&(e.results=t,(e.config.templates.empty||Object.keys(t).length>0)&&e.$el.is(":focus")?e.showResults():e.clearResults()),e.$wrapper.removeClass(e.classes.loading)}))},s.prototype.getTriggeredValue=function(e){var t,s,i,a=e.target.selectionStart-1,l=e.target.value,r=l.lastIndexOf(" ",a),n=l.indexOf(" ",a),h=l.lastIndexOf("\n",a),o=l.indexOf("\n",a);return t=r>h?r:h,n>-1&&o>-1?s=n<o?n:o:-1===n&&o>-1?s=o:n>-1&&-1===o&&(s=n),(i=l.substring(t+1,s)).charAt(0)===this.config.triggerChar?i:""},s.prototype.processTyping=function(t){var s=this.config.triggerChar?this.getTriggeredValue(t):e.trim(t.target.value);this.searchTerm!==s&&(this.searchTerm=s,this.selected=!1,this.searchTerm.length&&this.searchTerm.length>=this.config.threshold?this.debounceSearch():this.clearResults())},s.prototype.debounceSearch=function(){clearTimeout(this.typingTimer),this.typingTimer=setTimeout(e.proxy(this.processSearch,this),this.config.debounceTime)},s.prototype.processSearch=function(){this.$wrapper.addClass(this.classes.loading),this.callFetch()},s.prototype.currentItemDisabled=function(){return this.$items.eq(this.resultIndex).hasClass(this.classes.disabled)},s.prototype.allItemsDisabled=function(){return!this.$items.not("."+this.classes.disabled).length},s.prototype.increaseIndex=function(){this.resultIndex++,this.resultIndex===this.results.length&&(this.resultIndex=0)},s.prototype.decreaseIndex=function(){this.resultIndex<=0&&(this.resultIndex=this.results.length),this.resultIndex--},s.prototype.changeIndex=function(e){var t=this.results.length,s=this.resultIndex,i=0;if(t&&!this.allItemsDisabled())switch(e){case"up":for(this.decreaseIndex();this.currentItemDisabled()&&i<t;)this.decreaseIndex(),i++;break;case"down":for(this.increaseIndex();this.currentItemDisabled()&&i<t;)this.increaseIndex(),i++}return this.resultIndex!==s},s.prototype.processSpecialKey=function(e){var t=this.specialKeys[e.keyCode],s=!1,i=this.resultIndex>-1,a=!!this.results.length;if(clearTimeout(this.typingTimer),this.displayed)switch(t){case"up":case"down":a&&(e.preventDefault(),s=this.changeIndex(t));break;case"left":case"right":i&&(e.preventDefault(),s=this.changeIndex("left"==t?"up":"down"));break;case"enter":case"tab":i&&(e.preventDefault(),this.selectResult());break;case"esc":e.preventDefault(),this.config.forceSelection&&this.$el.val(""),this.clearResults()}s&&this.highlightResult()},s.prototype.defaultFetch=function(t,s){s(e.grep([{text:"Jon"},{text:"Bon",disabled:!0},{text:"Jovi"}],(function(e){return e.text.toLowerCase().indexOf(t.toLowerCase())>-1})))},s.prototype.defaultOnItem=function(t){e(this.config.el).val(e(t).data("value"))},e.extend({highlight:function(t,s,i,a){if(3===t.nodeType){var l=t.data.match(s);if(l){var r=document.createElement(i||"span");r.className=a||"highlight";var n=t.splitText(l.index);n.splitText(l[0].length);var h=n.cloneNode(!0);return r.appendChild(h),n.parentNode.replaceChild(r,n),1}}else if(1===t.nodeType&&t.childNodes&&!/(script|style)/i.test(t.tagName)&&(t.tagName!==i.toUpperCase()||t.className!==a))for(var o=0;o<t.childNodes.length;o++)o+=e.highlight(t.childNodes[o],s,i,a);return 0}}),e.fn.highlight=function(t,s){var i={className:"highlight",element:"span",caseSensitive:!1,wordsOnly:!1};if(e.extend(i,s),t.constructor===String&&(t=[t]),t=e.grep(t,(function(e,t){return""!==e})),0===(t=e.map(t,(function(e,t){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}))).length)return this;var a=i.caseSensitive?"":"i",l="("+t.join("|")+")";i.wordsOnly&&(l="\\b"+l+"\\b");var r=new RegExp(l,a);return this.each((function(){e.highlight(this,r,i.element,i.className)}))},s}.apply(t,i))||(e.exports=a)},9029:e=>{e.exports='module.exports = function(obj){\nvar __t,__p=\'\',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,\'\');};\nwith(obj||{}){\n__p+=\'<div class="item item-autocomplete-js" data-value="{{text}}" data-category_id="{{category_id}}"\\n     data-subcategory_id="{{subcategory_id}}" data-rubric_href="{{rubric_href}}" data-href="{{href}}">\\n\t<span class="name-autocomplete name-autocomplete-js">\\n    <span class="icon-search">{{icon}}</span>\\n    <span class="name-autocomplete__text">\\n      {{text}}\\n    </span>\\n\t\t<span class="icon-item">\\n      <svg class="svg-icon svg-icon-main--i16_close">\\n          <use xlink:href="/dist/sprites/svg/main.svg#main--i16_arrow_right"></use>\\n        </svg>\\n    </span>\\n\t</span>\\n</div>\\n\';\n}\nreturn __p;\n};\n'}}]);