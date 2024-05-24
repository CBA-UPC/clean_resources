
/************************************
 * SurveyGizmo Interceptor Survey Beacon
 * www.surveygizmo.com
 *
 *           _             _
 *          //             \\
 *         /'               `\
 *        /,'     ..-..     `.\
 *       /,'   .''     ``.   `.\
 *      /,'   :   .---.   :   `.\
 *     I I   :  .'\   /`.  :   I I
 *     I b__:   . .`~'. .   :__d I
 *     I p~~:   . `._.' .   :~~q I
 *     I I   :   ./   \.   :   I I
 *      \`.   :   `---'   :   ,'/
 *       \`.   `..     ..'   ,'/
 *        \`.     ``~''     ,'/
 *         \`               '/
 *          \\             //
 *           ~             ~
 *
 *
 **************************************/
;(function(W, D, N, nm) {

	var _sessTime = 20*60         // 20 minutes
	, _ninetyDays = 90*24*60*60 // 90 days

	, _enc = encodeURIComponent
	, _dec = decodeURIComponent

	, _tm = setTimeout
	, _ctm = clearTimeout
	, _pF = parseFloat
	, _pI = parseInt
	, _pr = 'prototype'
	, _io = 'indexOf'
	, _ss = 'substring'
	, _l = 'length'
	, _lc = 'toLowerCase'
	, _uc = 'toUpperCase'
	, _gt = 'getTime'
	, _cc = 'concat'
	, _gtn = 'getElementsByTagName'

	, _sl = Array[_pr].slice

	, _date = function (p) {
		var d = new Date();
		!_iE(p) && d.setTime(d[_gt]() + (p * 1000));
		return d;
	}

	, _gc = function (n) {
		var split = n.split(','), a = [], els = D.body[_gtn]("*");
	    for (var t = 0, p = split.length; t < p; t++) {
			var re = new RegExp('(^| )' + split[t].replace(/^\s+|\s+$|\./gm, '') + '( |$)');
			for (var i = 0, j = els.length; i < j; i++)
				re.test(els[i].className) && a.push(els[i]);
		}
		return a;
	}

	, _cookie = {
		get: 
	    , set: function (key, val, exp, path, domain, sec) {
	        if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) {
	            return !1;
	        }

	        D.cookie = _enc(key) + "=" + _enc(val) +
	        	(exp.constructor === Date ? "; expires=" + exp.toUTCString() : '') +
	        	(domain ? "; domain=" + domain : "") +
	        	(path   ? "; path=" + path : "") +
	        	(sec    ? "; secure" : "");
	        return !0;
	    }

	    , has: 	}

	, _iE = 
	, _iF = 
	, _iA = 
	, _cA = function (a, c, p) {
		for (var i = 0; i < a[_l]; i++) _iF(a[i]) && a[i].apply(c || W, _iA(p) ? p : []);
	}

	, _aE = 
	, _aEL = function (d, e, c, i) {
		for (i = 0; i < d[_l]; i++) d[i] && _aE(d[i], e, c);
	}

	, _canLog = (function (n) {
		var c = D.location.search[_io](n) != -1 || _cookie.get(n);
		c && _cookie.set(n, 1, _date(_sessTime), '/');
		return c;
	})('SurveyGizmoBeaconDebug')

	, _log = function () { (_canLog && _iF(console.info)) && console.info.apply(console, ['SG'][_cc](_sl.call(arguments))); }
	, _warn = function () { (_canLog && _iF(console.warn)) && console.warn.apply(console, ['SG'][_cc](_sl.call(arguments))); }

	, _start = new Date()

	, _sec = function (ms) {
		return Math.floor( (_date()[_gt]() - (ms > 0 ? ms : _start[_gt]())) / 1000 );
	}

	, _aIO = function(a, s) {
		if (Array[_pr][_io])
			return Array[_pr][_io].call(a, s);
		var l = a[_l] + 1;
		while (l -= 1) {
			if (a[l - 1] === s) return l - 1;
		}
		return -1;
	}

	, _toQuery = function (obj, prefix) {
		var str = [];
		for (var p in obj) {
			var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
			str.push(typeof v == "object" ? _toQuery(v, k) : _enc(k) + "=" + _enc(v));
		}
		return str.join("&");
	}

	, _script = function (src, d, b, c) {
		c = D.createElement('script');
		b = D[_gtn]('script')[0];
		c.type = "text/javascript";
		c.async = 1;
		c.src = src;
		if (d) {
			if (c.readyState) {
		        c.onreadystatechange = 
		    }
		    else c.onload = d;
	    }
		b.parentNode.insertBefore(c, b);
	}

	, _ajax = function(url, d, f, i, ie8) {
	    ie8 = !!W.XDomainRequest;
	    if (i = (ie8 ? new W.XDomainRequest() : new XMLHttpRequest())) {
	        if (ie8) {
	            i.onload = 
	            i.onerror = f;
	        }
	        else {
	            i.onreadystatechange = function() {
	                i.readyState == 4 && (i.status == 200 ? d(i.responseText, i) : f());
	            };
	        }
	        i.open('GET', url, !0);
	        i.send();
	    } else f();
	}

	, _parseJSON = function (s, d) {
		if (!W.JSON || !W.JSON.parse) {
			_script(Intercept.options.jsonScript, ;
		}
		else d(JSON.parse(s));
	}

	, _f = function (s) {
		if (D.querySelectorAll)
			return D.querySelectorAll(s);
		else if (s.charAt(0) == '#')
			return [D.getElementById(s.slice(1))];
		else if (s.charAt(0) == '.')
			return _gc(s);
		return [];
	}

	, _browser = (function(nameOffset, verOffset, ix) {
		var nVer = N.appVersion
			, nAgt = N.userAgent
			, browserName = N.appName
			, fullVersion = '' + _pF(N.appVersion)
			, majorVersion = _pI(N.appVersion, 10);

		if ((verOffset = nAgt[_io]("Opera")) != -1) {
		    browserName = "Opera";
		    fullVersion = nAgt[_ss](verOffset + 6);
		    if ((verOffset = nAgt[_io]("Version")) != -1)
		        fullVersion = nAgt[_ss](verOffset + 8);
		}
		else if ((verOffset = nAgt[_io]("MSIE")) != -1) {
		    browserName = "MSIE";
		    fullVersion = nAgt[_ss](verOffset + 5);
		}
		else if ((verOffset = nAgt[_io]("Chrome")) != -1) {
		    browserName = "Chrome";
		    fullVersion = nAgt[_ss](verOffset + 7);
		}
		else if ((verOffset = nAgt[_io]("Safari")) != -1) {
		    browserName = "Safari";
		    fullVersion = nAgt[_ss](verOffset + 7);
		    if ((verOffset = nAgt[_io]("Version")) != -1)
		        fullVersion = nAgt[_ss](verOffset + 8);
		}
		else if ((verOffset = nAgt[_io]("Firefox")) != -1) {
		    browserName = "Firefox";
		    fullVersion = nAgt[_ss](verOffset + 8);
		}
		else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
		    browserName = nAgt[_ss](nameOffset, verOffset);
		    fullVersion = nAgt[_ss](verOffset + 1);
		    if (browserName[_lc]() == browserName[_uc]()) {
		        browserName = N.appName;
		    }
		}

		if ((ix = fullVersion[_io](";")) != -1)
		    fullVersion = fullVersion[_ss](0, ix);
		if ((ix = fullVersion[_io](" ")) != -1)
		    fullVersion = fullVersion[_ss](0, ix);

		majorVersion = _pI('' + fullVersion, 10);
		if (isNaN(majorVersion)) {
		    fullVersion  = '' + _pF(N.appVersion);
		    majorVersion = _pI(N.appVersion, 10);
		}

		var tablet = (/ipad/i.test(nAgt[_lc]()))
			, mobile = (/android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(nAgt[_lc]()));

		return {
			name      : browserName
			, version : majorVersion
			, tablet  : tablet
			, mobile  : mobile
			, desktop : !mobile && !tablet
		};
	})();

	// !-- HtmlNotice --
	function HtmlNotice (config, link, beacon)
	{
		_log('HtmlNotice', config, link);
		this.config   = config;
		this.url      = config.url;
		this.type     = config.type;
		this.link     = link;
		this.beacon   = beacon;

		this.fixedHtmlTop = '';
		this.fixedHtmlBottom = '';
		if (config.fixed) {
			this.fixedHtmlTop = 'style=" position: fixed; top: 0; width: 100%; box-sizing: border-box; left: 0; z-index:100;"';
			this.fixedHtmlBottom = 'style=" position: fixed; bottom: 0; width: 100%; box-sizing: border-box; left: 0; z-index:100;"';
		}

		this.cleanup();
	}

	HtmlNotice[_pr] = {

		cleanup: function () {
			var e = _f('.sg-b-p, .sg-b-p-m, .sg-b-s, .sg-b-bar');

			for (var i = 0; i < e[_l]; i++) e[i] && e[i].remove();
		}

		, addStyles: function (d, s, r) {
			d = HtmlNotice.stylesMap;
			s = HtmlNotice.styles;
			for (r in d) s = s.replace(new RegExp('{' + r + '}', "g"), this.config[r] || d[r]);

			var e = D.createElement("style");
			e.type = "text/css";
			// IE
			if (e.styleSheet)
				e.styleSheet.cssText = s;
			else
				e.innerHTML = s;
			D[_gtn]('head')[0].appendChild(e);
		}

		, add: function () {
			this.addStyles();

			if (this.type == 'inline') {
				this.addInline();
				return;
			}

			// Header
			if (this.type == 'header') {
				D.body.insertBefore(this.headerHtml(), D.body.childNodes[0]);
			}
			// Footer
			else if (this.type == 'footer') {
				D.body.insertBefore(this.footerHtml(), null);
			}
			// Popup
			else {
				this.showModal();
				this.getPopMsg().insertBefore(HtmlNotice.createHtml(this.getPar()), null);
				this.getPop().className += ' sg-b-p-s';
			}

			this.insertScript();

			var l = this.getLink(), th = this;
			l && _aE(l, 'click', function(){
				th.show();
			});

			if (this.type == 'header' || this.type == 'footer')
				_aEL([ l, _f('.sg-b-l-m')[0] ], 'click', function(){
					th.hideBanner();
				});

			if (this.type != 'popup') {
				var d = _f('.sg-js-d')[0], fn = function () {
					th.hideBanner();
				};
				d && _aE(d, 'click', fn);

				if (this.link.closeDate) {
					var s = _sec(this.link.closeDate[_gt]());
					s > 0 && _tm(fn, s);
				}
			}

			return this;
		}

		, hideBanner: function (e) {
			(e = _f('.sg-b-bar')[0]) && (e.style.display = 'none');
			this.link.setPresent(!1);
		}

		, hide: function () {
			var p = this.getPop(), m = this.getMask();
			p && (p.style.display = m.style.display = 'none');
			this.link.setPresent(!1);
		}

		, getMask: function() {
			return _f('.sg-b-p-m')[0];
		}

		, getPop: function() {
			return _f('.sg-b-p')[0];
		}

		, getIframe: function () {
			return _f('.sg-b-p-i')[0];
		}

		, getPopMsg: function () {
			return _f('.sg-b-p-t')[0];
		}

		, getInline: function () {
			return _f('.sg-b-in')[0];
		}

		, getLink: 
		, showModal: function () {
			if (!this.getPop()) {
				var frag = HtmlNotice.createHtml(
					'<div class="sg-b-p" role="alertdialog" aria-label="request to take survey" aria-describedby="sg-b-t-desc" aria-live="assertive">' +
					'<div class="sg-b-p-h">' +
					'<button type="button" class="sg-b-p-c" aria-label="close">&times;</button>' +
					'</div>' +
					'<div class="sg-b-p-t"></div>' +
					'<iframe src="' + this.url + '" frameborder="0" class="sg-b-p-i" style="display:none" title="survey" role="document" tabindex="0"></iframe>' +
					'</div>' +
					'<div class="sg-b-p-m"></div>'
				);
				D.body.insertBefore(frag, null);

				var l = _f('.sg-b-p-c')[0], th = this;

				(l && this.getMask()) && _aEL([l, this.getMask()], 'click', function() {
					th.hide();
				});
			}
			this.getMask().style.height = D.body.scrollHeight + 'px';
			scroll(0,0);
		}

		, show: function () {
			this.showModal();

			this.getPop().style.display = this.getMask().style.display = this.getIframe().style.display = 'block';

			this.getPopMsg().style.display = 'none';

			this.getPop().className = 'sg-b-p';
			_cA(this.beacon.lit);

			document.querySelector('.sg-b-p-i').focus();
		}

		, insertScript: function () {
			var head = document.head || document.getElementsByTagName('head')[0];
			if (this.config.js) {
				var script = document.createElement("script");
				script.textContent = this.config.js;
				head.appendChild(script);
			}
			if (this.config.css) {
				var style = document.createElement('style');
				style.type = 'text/css';
				if (style.styleSheet){
					style.styleSheet.cssText = this.config.css;
				} else {
					style.appendChild(document.createTextNode(this.config.css));
				}
				head.appendChild(style);
			}
		}

		, getPar: function () {
			return (String(this.config.text)[_l] ? '<p id="sg-b-t-desc" class="sg-b-t">' + this.config.text + '</p>' : '') +
				'<a class="sg-b-l-t" href="javascript:void(0);">' + this.config.link_text + '</a><a class="sg-b-l-m" href="' + this.url + '" target="_blank">' + this.config.link_text + '</a>';
		}

		, headerHtml: function () {
			return HtmlNotice.createHtml(
				'<div class="sg-b-h sg-b-bar" '+ this.fixedHtmlTop +' role="dialog" aria-label="request to take survey" aria-describedby="sg-d-h-desc">' +
				'<div id="sg-d-h-desc" class="sg-d-h"><a class="sg-js-d" href="Javascript:void(0);" aria-label="close">&times;</a></div>' +
				this.getPar() +
				'</div>'
			);
		}

		, footerHtml: function () {
			return HtmlNotice.createHtml(
				'<div class="sg-b-f sg-b-bar" '+ this.fixedHtmlBottom +' role="dialog" aria-label="request to take survey" aria-describedby="sg-d-h-desc">' +
				'<div id="sg-d-h-desc" class="sg-d-h"><a class="sg-js-d" href="Javascript:void(0);" aria-label="close">X</a></div>' +
				this.getPar() +
				'</div>'
			);
		}

		, addInline: function (e) {
			e = _f(this.config.fill);
			if (!e[_l]) {
				return !1;
			}
			var frag = HtmlNotice.createHtml(
				'<div class="sg-b-in">' +
				this.getPar() +
				'</div>'
			);
			e[0].insertBefore(frag, null);

			var l = this.getLink(), n = this.getInline(), th = this;
			l && _aE(l, 'click', function() {
				while (n.hasChildNodes()) {
					n.removeChild(n.lastChild);
				}
				frag = HtmlNotice.createHtml('<iframe src="' + th.url + '" frameborder="0" class="sg-b-p-i" title="survey"></iframe>');
				n.insertBefore(frag, null);
				_cA(th.beacon.lit);
			});

			this.insertScript();
		}

	};

	HtmlNotice.createHtml = function (htmlStr) {
	    var f = D.createDocumentFragment(), d = D.createElement('div');
	    d.innerHTML = htmlStr;
	    while (d.firstChild) {
	        f.appendChild(d.firstChild);
	    }
	    return f;
	};

	HtmlNotice.stylesMap = {
		'bg' : '#777'
		, 'color' : '#fff'
		, 'link_color' : '#AFD75B'
	};

	// removed this: '.sg-b-p.sg-b-p-s{height: auto;left: 25%;min-height: 100px;right: 25%;}' +
	// From the block of code below.  It was sort of duplicated with this:
	// '.sg-b-p.sg-b-p-s{height: auto;left: 300px;min-height: 100px;right: 300px;}' +
	// I addded this to it: min-width: 200px;
	HtmlNotice.styles = '.sg-b-h, .sg-b-f{padding:1em;}' +
		'.sg-b-p .sg-b-p-t, .sg-b-h, .sg-b-f, .sg-b-in{background-color:{bg};color:{color};text-align:center;}' +
		'.sg-b-in{height: 100%;}' +
		'.sg-b-in .sg-b-p-i{width:100%;height:100%;float:left;}' +
		'.sg-b-h a, .sg-b-f a, .sg-b-p-t a, .sg-b-in a{color:{link_color}}' +
		'.sg-b-p{background-color: #FFFFFF;box-shadow: 0 0 11px #555555;height: 100%;left: 14%;min-height: 400px;padding: 35px 10px 10px;position:absolute;right: 14%;top: 50px;z-index: 999999;margin-bottom:50px;}' +
		'.sg-b-p.sg-b-p-s{height: auto;left: 300px;min-height: 100px;right: 300px;min-width: 200px;}' +
		'.sg-b-p iframe{height:100%; width:100%; border: 0 none;}' +
		'.sg-b-p .sg-b-p-h{position:absolute;top:3px;right:3px;}' +
		'.sg-b-p .sg-b-p-c{background: none repeat scroll 0 0 rgba(0, 0, 0, 0);border: 0 none;cursor: pointer;padding: 5px 10px;color: #000000;float: right;font-size: 21px;font-weight: 700;line-height: 1;opacity: 0.2;text-shadow: 0 1px 0 #FFFFFF;}' +
		'.sg-b-p-m{position:fixed; top:0; left:0; right:0; bottom:0; opacity: 0.5; background-color:#000; z-index:999998;}'+
		'.sg-d-h{float:right;}' +
		'.sg-d-h a{font-family: arial;font-weight: bold;text-decoration: none;}' +
		'.sg-b-l-m{display:none}' +
		'@media only screen and (min-width: 300px) and ( max-width: 1024px ){ .sg-b-bar .sg-b-l-m { display:block; } .sg-b-bar .sg-b-l-t { display:none; } }';

	// !-- Link --
	function Link (config, beacon)
	{
		this.config       = config;
		this.triggers     = config.triggers;
		this.beacon       = beacon;
		this.id           = config.id;
		this.ons          = [];
		this.openDate     = this.config.open > 0 && new Date(this.config.open * 1000);
		this.closeDate    = this.config.close > 0 && new Date(this.config.close * 1000);
		this.present      = !1;
	}

	Link[_pr] = {

		show: function () {
			_log('Show link', this.id, this);
			var config = this.config.html;
			config.url = this.config.url.replace(/https?:/, '');

			var dataStr = _toQuery(Intercept.data());
			if (dataStr[_l]) {
				if (config.url[_io]('?') < 0) {
					config.url += '?' + dataStr;
				}
				else {
					var q = config.url.split('?')[1], n;
					n = q + (q[q[_l] - 1] == '&' ? '' : '&') + dataStr;
					config.url = config.url.replace(q, n);
				}
			}

			this.notice = new HtmlNotice(config, this, this.beacon).add();
			this.setPresent(!0);
			return this;
		}

		, eval: function () {
			var th = this;
			if (!_iF(this.triggers)) {
				try {
					if (this.triggers == '') {
						throw 'notrigger';
					}
					this.triggers = new Function("e", "return " + this.triggers);
				} catch (e) {
					_warn('Bad logic', this.triggers);
					this.triggers = 
				}
			}
			var v = this.triggers(function(f) {
				f = 'eval' + f;
				if (!_iF(th[f])) return !1;
				var a = _sl.call(arguments, 1)
					, r = th[f].apply(th, a);
				_log('LOGIC', f, a, r);
				return r;
			});

			// Check if it is in the link dates
			v = v && this.inTime();
			// Also check if the beacon is okay with firing
			v = v && this.beacon.canSetupLinks();
			_log('Eval', this.id, v);

			v && this.fire();
			return this;
		}

		, on: 
		, fire: function () {
			_cA(this.ons, this);
			return this;
		}

		, inTime: function () {
			return (!this.openDate || _date() >= this.openDate) && (!this.closeDate || _date() <= this.closeDate);
		}

		, setPresent: 
		, preventOthers: function () {
			return this.present && this.config.html.type != 'inline';
		}

		, evalPC: function (p) {
			p = _iE(p) || p > 100 || p < 1 ? 100 : p;
			return Math.random() < (p / 100);
		}

		// Visit count
		, evalVS: 
		// Page list -- This is the page logic. True is show banner.
		, evalPG: function (m, a) {
			var pgs = this.beacon.getPages()
			, c = 0
			, i = 0;

			if (m == 'in-order') {
				for (var i = 0; i < a.length; i++) {
					if(pgs.indexOf(a[i]) == -1)
					{
						return false
					}
				};

				return true;
			}

			if (m == 'any-order') {
				if (a.indexOf(pgs[pgs.length - 1]) !== -1)
				{
					return true;
				}
				else
				{
					return false;
				}
 			}
			else if (m == 'in-order-start') {
				for (; i < a[_l]; i++)
					c += pgs[i][_io](a[i]) === 0 ? 1 : 0;
				return c == a[_l];
			}
		}

		// Page time
		, evalPT: function (t) {
			var s = _sec(), th = this;
			if ((t * 1 - s) > 0) {
				_tm( (t - s) * 1000);
			}
			return s;
		}

		// Site time
		, evalST: function (t) {
			var s = this.beacon.getSiteTime(), th = this;
			if ((t * 1 - s) > 0) {
				_tm(function(){
					th.beacon.setVisitsCookie(null, th.beacon.firstTime + _sec());
					th.eval();
				}, (t - s) * 1000);
			}
			return s;
		}

		// Document event
		, evalDCE: function (dc) {
			if (this.evalDcCk) {
				return !0;
			}
			if (_iE(dc)) {
				return !1;
			}

			var de = 'click', th = this, e = _f(dc);
			if (!e[_l]) {
				return !1;
			}

			this.evalDcCk = 0;
			_aEL(e, de, function(){
				th.evalDcCk++;
				th.evalDcCk == 1 && th.eval();
			});
			return !1;
		}

		// Cookie value
		, evalCK: function (k) {
			return _cookie.get(k);
		}

		// Custom data
		, evalCD: 
		// Browser type
		, evalBT: function (a, i, c) {
			for (i = 0, c = 0; i < a[_l]; i++) c += _browser.name == a[i] ? 1 : 0;
			return !!c;
		}

		// Browswer device type
		, evalBD: function (a, i, c) {
			for (i = 0, c = 0; i < a[_l]; i++) c += _browser[a[i]] ? 1 : 0;
			return !!c;
		}

		// Notify date
		, evalCKEX: function (i) {
			var d = this.beacon.getNotified();
			d = (!_iE(d) && d > 0) ? Math.floor(_sec(d) / (60 * 60 * 24)) : -1;
			return d == -1 || d > i;
		}

	};

	// !-- Beacon --
	function Beacon (config)
	{
		_log('Beacon', config);
		this.config   = config;
		this.id       = config.id;
		this.links    = {};
		this.offered  = [];
		this.lit      = [];
	}

	Beacon[_pr] = {

		// Constructor deferred
		init: function () {
			this.defineBeaconData();
			this.setupLinks();

			if (Intercept.isTest()) {
				_log('TEST RESPONSE');
				this.publicLight(Intercept.options.testLink[1]);
			}
		}

		// Don't set up the links if the beacon is disabled or
		// the client has already been offered a survey in the
		// last hour or the domains don't match.  If the domain
		// array is empty then any domain is permitted.
		, canSetupLinks: function() {
			var h = location.host.replace(/^www\./, '');
			return (
				this.config.beacon_status &&
				(this.config.domain.length == 0 || _aIO(this.config.domain, h) > -1)
			);
		}

		, defineBeaconData: function () {
			// Test link - don't change the cookies
			if (Intercept.isTest()) {
				// Test response
				Intercept.data('__sg_build_test', 1);
				return;
			}

			_log('Visits', this.getVisits());
			// Session visits
			var visits = this.getVisits() + 1
				, since = this.getMinutesSince();

			if (visits == 1 || since >= 20) {
				this.setVisitsCookie(visits);
			}

			// Increment the site time
			if ((this.firstTime = this.getSiteTime()) != -1) {
				var th = this;
				W.onbeforeunload = function() {
					th.setVisitsCookie(null, th.firstTime + _sec());
				};
			}

			// Session pages
			var pages = this.getPages();
			_log('Pages', pages);

			// trim array to 10
			(pages[_l] > 9) && pages.shift();

			pages.push(D.location.pathname);
			this.setPagesCookie(pages);
		}

		// Visit cookie functions
		, getVisitsCookie: 
		, setVisitsCookie: function (v, t) {
			_log('Visits', v, t, this.getVisitsCookie());
			v = _iE(v) ? this.getVisits() : v;
			t = _iE(t) ? this.getSiteTime() : t;

			var sec = Math.floor(_date()[_gt]() / 1000)
				, l = v == this.getVisits() ? _pI(this.getSeconds() || sec) : sec;

			_cookie.set(
				Intercept.options.visitsCookie
				, v + ';' + t + ';' + l
				, _date(_ninetyDays)
				, '/'
			);
			_log('Visits 2', this.getVisitsCookie());
		}

		, getSeconds: function () {
			return _pI(this.getVisitsCookie().split(';')[2] || 0);
		}

		, getSiteTime: function () {
			return _pI(this.getVisitsCookie().split(';')[1] || 0);
		}

		, getVisits: function () {
			return _pI(this.getVisitsCookie().split(';')[0] || 0);
		}

		, getMinutesSince: function (c) {
			return (c = this.getSeconds()) > 0 ? Math.floor(_sec(c * 1000) / 60) : 0;
		}

		// Pages cookie functions
		, setPagesCookie: function (pg) {
			var pgs = _iA(pg) ? pg.join(',') : '', m = 2000;
			// Make sure the cookie does not get too big
			if (pgs[_l] > m) {
				while (pgs[_l] > m && pg[_l] > 1) {
					pg.shift();
					pgs = pg.join(',');
				}
			}

			_log('Pages', pg);
			_cookie.set(
				Intercept.options.pagesCookie
				, pgs
				, _date(_sessTime)
				, '/'
			);
			_log('Pages 2', this.getPages());
		}

		, getPages: function () {
			var c = unescape(_cookie.get(Intercept.options.pagesCookie) || '');
			return c[_l] ? c.split(',') : [];
		}

		, setupLinks: function () {
			var th = this;
			for (var key in this.config.links) {
				this.links[key] = new Link(this.config.links[key], this).on(;

				this.links[key].eval();
			}
		}

		, getNotified: 
		, setNotified: function () {
			_cookie.set(Intercept.options.noticeCookie, _date()[_gt](), _date(60 * 60 * 24 * 365 * 5), '/');
		}

		, publicLight: function (key) {
			_log('Light Link', key);
			if (!(this.links[key] instanceof Link)) {
				return !1;
			}
			for (var i in this.links) {
				if (this.links[i].preventOthers()) {
					return !1;
				}
			}
			// Show link
			this.links[key].show();
			this.afterLight();
		}

		, afterLight: function () {
			// Test link - don't change the cookies
			if (Intercept.isTest()) {
				return;
			}
			_cA(this.offered);
			this.setNotified();
		}

		, publicOnoffered: function (fn) {
			_iF(fn) && this.offered.push(fn);
		}

		, publicOnlit: 
	};

	var Intercept = {

		options : {
			beaconRequest  : '//widgixca-beacon.s3.amazonaws.com/beaconconfigs/'
			, jsonScript   : ''
			, visitsCookie : '_sg_b_v'
			, pagesCookie  : '_sg_b_p'
			, noticeCookie : '_sg_b_n'
			, maxWait      : 10000
			, testLink     : D.location.search.match(/SGINTTEST=(\d+)&?/i)
		}

		, _data : {}

		, _loadDone: []

		, data: function (k, v) {
			if (arguments[_l] == 2)
				Intercept._data[k] = v;
			else if (arguments[_l] == 1)
				return Intercept._data[k];
			else
				return Intercept._data;
		}

		, isTest: 
		// LIGHT THE BEACON OF MINAS TIRITH
		, init: function (id) {
			this.loadBeacon(id, function(config) {
				config.id = id;
				Intercept._inst = new Beacon(config);
				Intercept.doLoadDone();
				Intercept._inst.init();
			});
		}

		, doLoadDone: function () {
			for (var i = 0, e; i < Intercept._loadDone.length; i++) {
				e = Intercept._loadDone[i];
				Intercept._inst[e[0]].apply(Intercept._inst, e[1]);
			}
			Intercept._loadDone = [];
		}

		// Load the beacon config
		, loadBeacon: function (id, call) {
			_ajax(Intercept.options.beaconRequest + _enc(id) + '.json', function(s) {
				_parseJSON(s + '', ;
			}, ;
		}

		// Intercept a command from sg_beacon
		, process: function (row, cm) {
			row = _sl.call(row);
			switch (cm = row.shift())
			{
				// sg_beacon('init', '{beacon ID}')
				case 'init':
					return this.init(row[0]);
				break;
				// sg_beacon('data', 'key', 'val')
				case 'data':
					return Intercept.data.apply(null, row);
				break;
			}

			// sg_beacon('light', '{link ID}')
			// sg_beacon('onlit', function)
			// sg_beacon('onoffered', function)
			cm = 'public' + cm[0][_uc]() + cm.slice(1);
			if (_iF(Beacon[_pr][cm])) {
				if (Intercept._inst instanceof Beacon)
					return Intercept._inst[cm].apply(Intercept._inst, row);
				else
					Intercept._loadDone.push([cm, row]);
			}
			return !1;
		}
	};

	// Intercept commands made while loading this script
	if (_iA(W[ W[nm] ].q)) {
		for (var i = 0; i < W[ W[nm] ].q[_l]; i++) {
			Intercept.process(W[ W[nm] ].q[i]);
		}
	}

	// Future commands go through process
	W[ W[nm] ] = 

})(window, document, navigator, 'SurveyGizmoBeacon');
