/* adriver autoUpdate plugin */
(function (pluginName){
	new adriver.Plugin(pluginName);

	adriver.extendL = function(l, r){for(var i in l){if(l.hasOwnProperty(i) && r.hasOwnProperty(i)) {l[i] = r[i];}} return l;};

	adriver.toQueryString = function(o, delimiter, assign){
		delimiter = delimiter || '&';
		assign = assign || '=';
		var l = [];
		for (var i in o){if(o.hasOwnProperty(i)){l.push(i + assign + encodeURIComponent(o[i]));}}
		return l.join(delimiter);
	};

	adriver.parseJSON = function(text){
		var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
		if(cx.test(text)){text = text.replace(cx, ;}
		if(!(/^\s*\{.*\}\s*$/).test(text)) { text = '{' + text + '}'; }
		text = text.replace(/'/g,'\"');

		try{
			return /^[\],:{}\s]*$/.
				test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
				replace(/\w+(?=\s+|,|}|:)|"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
				replace(/(?:^|:|,)(?:\s*\[)+/g, '')) ? eval('(' + text + ')') : {};
		}catch(e){}

		return {};
	};

	adriver.request = function(req, callType){
		var def = adriver.toQueryString(adriver.defaults),
			type = typeof(callType) !== 'undefined' ? callType : 'merle',
			rH = ((/^http:\/\//i).test(adriver.redirectHost) ? adriver.redirectHost.replace(/^http:\/\//i, 'https://') : ((/^\/\//).test(adriver.redirectHost) ? 'https:' : '')) + adriver.redirectHost;
		adriver.loadScript(rH + '/cgi-bin/'+type+'.cgi?rnd=![rnd]' + (def ? '&' + def : '') + (req ? '&' + req : ''));
	};

	function checkLoadComplete(){
		var i, a;

		for (i in adriver.items) {
			if (adriver.items.hasOwnProperty(i)) {
				a = adriver.items[i];
				if (!a.prm.onScroll && typeof a.reply === 'undefined') { return false; }
			}
		}

		return true;
	}

	

	adriver.loadComplete = function(){
		if (checkLoadComplete()) { adriver.loadCompleteQueue.execute(false); }
		return adriver;
	};

	adriver.prototype.init = function(){
		var _ = this, p = _.p,
			prm = adriver.parseJSON(p.getAttribute('data-Adriver') || p.title || '');
		p.title = '';
		var addDefaults = {},
			adrcid = getCookie('adrcid');
		if (adrcid) {addDefaults['cid'] = adrcid}

		_.reqPrm = {sid: 0, ad: 0, pid: 0, bid: 0, bn: 0, bt: 0, pz: 0, rnd: 0, sz: '', ph: '', keyword: '', custom: '', pass: '', yid1: '', yid2: '', gid1: '', gid2: '', mhh: '', phh: '', unid: '', bundleid: '', deviceid: '', didsha1: '', didmd5: '', dpidsha1: '', dpidmd5: '', macsha1: '', macmd5: '', IP: '', exss: '', extid: '', advid: ''};

		adriver.extend(_.prm, {defer: _.defer}, prm);
		adriver.extendL(_.reqPrm, _.prm);
		adriver.extend(adriver.defaults, addDefaults);

		_.reqPrm.custom = adriver.toQueryString(_.prm.custom, ';');

		for (var i in _.reqPrm) { if (!_.reqPrm[i]) { delete _.reqPrm[i]; } }

		_.className = p.className.match(/\w+\b/);

		adriver.onDomReady(function(){_.domReady();});
		if (!_.prm.defer) { _.load(); }
	};
	adriver.prototype.load = function(){
		try {
			if(!this.isLoading){
				this.isLoading = 1;
				adriver.request(adriver.toQueryString(this.reqPrm||this.prm));
			}
		}catch(e){}
		return this;
	};
	adriver.prototype.reload = 
	adriver.prototype.loadComplete = 
	adriver.prototype.domReady = 

	// @deprecated
	adriver.prototype.checkFlash = function(ver){
		var flashver = (function(){
			var n=navigator,f='Shockwave Flash',m,d;
			if((m=n.mimeTypes)&&(m=m['application/x-shockwave-flash'])&&m.enabledPlugin&&(n=n.plugins)&&n[f]){d=n[f].description;}
			else if(window.ActiveXObject){try{d=(new ActiveXObject((f+'.'+f).replace(/ /g,''))).GetVariable('$version');}catch(e){}}
			return d?d.replace(/\D+/,'').split(/\D+/)[0]:0;
		})();
		return flashver >= parseInt(ver);
	};
	adriver.prototype.setAnchor = function(){
		function addElement(type, o, params){
			var n = document.createElement(type);
			adriver.extend(n.style, params);
			if (type === 'IMG') { n.setAttribute("referrerpolicy","no-referrer-when-downgrade"); }
			if (o) { o.appendChild(n); }
			return n;
		}
		this.anchor = addElement('DIV', this.p, {position:'relative'});
		return this.anchor;
	};

	adriver.prototype.addPanel = window.adriver_dispatcher = adriver.prototype.detachScript = 

	var oldLoadScript = adriver.loadScript;
	adriver.loadScript = function(req){
		try{
			(/\?v(.*)$/).test(req);
			var ph = RegExp.$1;
			if (ph&&adriver(ph)) {
				var a = adriver(ph);
				a.p.adriver = a;
				adriver.extend(a, a.reply);
				setTimeout( 500);
			}
			oldLoadScript.call(adriver, req);
		}catch(e){}
		return this;
	};

	adriver.Plugin(pluginName).loadComplete();
})('autoUpdate.adriver');