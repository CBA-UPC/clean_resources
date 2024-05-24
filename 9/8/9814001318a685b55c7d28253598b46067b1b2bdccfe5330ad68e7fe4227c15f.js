// @license (c) by Gemius SA - gemius main script
// gAudience
(function () {
	var pageview_initialized = false;
	var init_pageview = function(p) {
		if (pageview_initialized) {
			return;
		}
		var identifier = (typeof p['identifier'] != 'undefined')?p['identifier']:(typeof gemius_identifier != 'undefined' && !gemius_identifier.match(/^USED_/))?gemius_identifier:null;
		var mode = (typeof p['mode'] != 'undefined')?p['mode']:(typeof pp_gemius_mode != 'undefined')?pp_gemius_mode:null;
		if (typeof pp_gemius_identifier != 'undefined' && !pp_gemius_identifier.match(/^USED_/)) {
			var s = mode ? 0 : 1;
			var v = 101-s;
			if (typeof window.pp_gemius_cnt != 'undefined') {
				pp_gemius_identifier = 'ERR_'+pp_gemius_identifier.replace(/id=/g,'id=ERR_');
				v = 102;
			}
			window.pp_gemius_cnt = 1;
			var extraparameters = (typeof p['extraparameters'] != 'undefined')?p['extraparameters']:(typeof pp_gemius_extraparameters != 'undefined')?pp_gemius_extraparameters:null;
			if (extraparameters) {
				gemius_hcconn.gevent(s,v,[pp_gemius_identifier].concat(extraparameters),0,1,1);
			} else {
				gemius_hcconn.ghit(s,v,[pp_gemius_identifier],0,1,1);
			}
			if (gemius_hcconn.event_identifier==null) {
				gemius_hcconn.event_identifier = pp_gemius_identifier;
			}
			if (v != 102 && typeof pp_gemius_time_identifier != 'undefined') {
				gemius_hcconn.gtimer_add(pp_gemius_time_identifier);
			}
			pp_gemius_identifier = 'USED_'+pp_gemius_identifier.replace(/id=/g,'id=USED_');
			pageview_initialized = true;
		} else if (identifier) {
			var s = (mode) ? 0 : 1;
			var v = 101-s;
			if (typeof window.pp_gemius_cnt != 'undefined') {
				if (typeof gemius_identifier != 'undefined') {
					gemius_identifier = 'ERR_'+gemius_identifier.replace(/id=/g,'id=ERR_');
				}
				v = 102;
			}
			window.pp_gemius_cnt = 1;
			var extraparameters = (typeof p['extraparameters'] != 'undefined')?p['extraparameters']:(typeof gemius_extraparameters != 'undefined')?gemius_extraparameters:null;
			if (extraparameters) {
				gemius_hcconn.gevent(s,v,[identifier].concat(extraparameters),0,1,1);
			} else {
				gemius_hcconn.ghit(s,v,[identifier],0,1,1);
			}
			if (gemius_hcconn.event_identifier==null) {
				gemius_hcconn.event_identifier = identifier;
			}
			if (typeof gemius_identifier != 'undefined') {
				gemius_identifier = 'USED_'+gemius_identifier.replace(/id=/g,'id=USED_');
			}
			pageview_initialized = true;
		}
	}
	if (typeof gemius_hcconn != "undefined" && gemius_hcconn.init_called) {
		init_pageview({});
	} else {
		if (typeof gemius_init_pageview == "undefined") {
			gemius_init_pageview = [];
		}
		gemius_init_pageview[gemius_init_pageview.length] = init_pageview;
	}
})();
// gemiuslib.js 
// cmpclient.js 
if (typeof gemius_cmpclient == "undefined") {
	gemius_cmpclient = {
		gemius_vendor_id : 328,
		cmp_frame : null,
		cmp_callbacks : {},
		add_event : function(obj,type,fn) {
			if (obj.addEventListener) {
				obj.addEventListener(type, fn, false);
			} else if (obj.attachEvent) {
				obj.attachEvent('on'+type, fn);
			}
		},
		find_cmp_frame : function(locator) {
			var f = window;
			while (!gemius_cmpclient.cmp_frame) {
				try {
					if(f.frames[locator]) {
						gemius_cmpclient.cmp_frame = f;
						return true;
					}
				} catch(e) {}
				if (f === window.top) break;
				f = f.parent;
			}
			return false;
		},
		add_cmp_event : function(return_field) {
			gemius_cmpclient.add_event(window,"message",function(event) {
				try {
					var json = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
					if (json[return_field]) {
						var i = json[return_field];
						gemius_cmpclient.cmp_callbacks[i.callId](i.returnValue, i.success);
					}
				} catch(e) {}
			});
		},
		find_cmp_v1: function() {
			if (gemius_cmpclient.__cmp)
				return true;
			if (typeof window.__cmp == 'function') {
				gemius_cmpclient.__cmp = function() {
					window.__cmp.apply(this, arguments)
				}
				return true;
			}
			if (!gemius_cmpclient.find_cmp_frame("__cmpLocator"))
				return false;
			gemius_cmpclient.add_cmp_event("__cmpReturn");
			gemius_cmpclient.__cmp = function(cmd, arg, callback) {
				var callId = Math.random() + '';
				var msg = {
					__cmpCall: {
						command: cmd,
						parameter: arg,
						callId: callId
					}
				};
				gemius_cmpclient.cmp_callbacks[callId] = callback;
				gemius_cmpclient.cmp_frame.postMessage(msg, '*');
			}
			return true;
		},
		find_cmp_v2: function() {
			if (gemius_cmpclient.__tcfapi)
				return true;
			if (typeof window.__tcfapi == 'function') {
				gemius_cmpclient.__tcfapi = function() {
					window.__tcfapi.apply(this, arguments)
				}
				return true;
			}
			if (!gemius_cmpclient.find_cmp_frame("__tcfapiLocator"))
				return false;
			gemius_cmpclient.add_cmp_event("__tcfapiReturn");
			gemius_cmpclient.__tcfapi = function(cmd, version, callback, arg) {
				var callId = Math.random() + '';
				var msg = {
					__tcfapiCall: {
						command: cmd,
						parameter: arg,
						version: version,
						callId: callId
					}
				};
				gemius_cmpclient.cmp_callbacks[callId] = callback;
				gemius_cmpclient.cmp_frame.postMessage(msg, '*');
			}
			return true;
		},
		find_cmp : function() {
			if (gemius_cmpclient.find_cmp_v2())
				return true;
			return gemius_cmpclient.find_cmp_v1();
		},
		has_consent_v1 : function(data,purposes) {
			try {
				if (!data.vendorConsents[gemius_cmpclient.gemius_vendor_id])
					return false;
				for (var i=0; i<purposes.length; i++) {
					if (!data.purposeConsents[purposes[i]])
						return false;
				}
			} catch(e) {
				return false;
			}
			return true;
		},
		cmp_callback_v1 : function(callback,purposes) {
			var called = false;
			var cmp_callback = function(data, success) {
				if (called) return;
				called = true;
				callback(success && gemius_cmpclient.has_consent_v1(data, purposes), false);
			}
			return cmp_callback;
		},
		has_consent_v2 : function(tcData,purposes) {
			try {
				if (typeof tcData.gdprApplies == 'boolean' && !tcData.gdprApplies)
					return true;
				if (!tcData.vendor.consents[gemius_cmpclient.gemius_vendor_id])
					return false;
				for (var i=0; i<purposes.length; i++) {
					if (purposes[i] == 1 && tcData.purposeOneTreatment === true) continue;
					var restrict = 1;
					try {
						restrict = tcData.publisher.restrictions[purposes[i]][gemius_cmpclient.gemius_vendor_id];
					} catch(e) {}
					if (!tcData.purpose.consents[purposes[i]] || restrict == 0)
						return false;
				}
			} catch(e) {
				return false;
			}
			return true;
		},
		cmp_callback_v2 : function(callback,purposes) {
			var called = false;
			var cmp_callback = function(tcData, success) {
				if (success && (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete')) {
					callback(gemius_cmpclient.has_consent_v2(tcData, purposes), false);
				}
			}
			return cmp_callback;
		},
		get_consent : function(callback,purposes) {
			if (typeof gemius_cmpclient.__tcfapi == 'function') {
				gemius_cmpclient.__tcfapi("addEventListener", 2, gemius_cmpclient.cmp_callback_v2(callback, purposes[2]));
			} else if (typeof gemius_cmpclient.__cmp == 'function') {
				gemius_cmpclient.__cmp("getVendorConsents", [gemius_cmpclient.gemius_vendor_id], gemius_cmpclient.cmp_callback_v1(callback, purposes[1]));
			} else {
				callback(false);
			}
		}
	}
}

// ghc.js 
// cookie.js 
if (typeof gemius_cookie == "undefined") {
	gemius_cookie = {
		https : (document.location && document.location.protocol && document.location.protocol=='https:'),
		get : function(name) {
			var ret = {primary: '-TURNEDOFF', secondary: '-TURNEDOFF', sec_state: "unknown"};
			try {
				var nsec = '-TURNEDOFF', sec = '-TURNEDOFF';
				var nsec_isset = false, sec_isset = false;
				var cookies = document.cookie.split(';');
				var cookie_arr, cookie_name, cookie_val;
				for (var i=0; i<cookies.length ; i++) {
					cookie_arr = cookies[i].split('=');
					if (cookie_arr.length < 2) {
						continue;
					}
					cookie_name = cookie_arr[0].replace(/^\s+|\s+$/g,'');
					cookie_val = cookie_arr[1].replace(/^\s+|\s+$/g,'');
					if (cookie_name==name.nsec && !nsec_isset) {
						nsec = cookie_val;
						nsec_isset = true;
						if (sec_isset || !gemius_cookie.https) {
							break;
						}
					} else if (cookie_name==name.sec && !sec_isset && gemius_cookie.https) {
						sec = cookie_val;
						sec_isset = true;
						if (nsec_isset) {
							break;
						}
					}
				}
				if (nsec_isset) {
					ret.primary = nsec;
					ret.secondary = sec;
					ret.sec_state = "nsec";
				} else if (window.self!=window.top && sec_isset) {
					ret.primary = sec;
					ret.sec_state = "sec";
				}
			} catch (e) {}
			return ret;
		},
		get_on_state : function(name,sec_state) {
			var cookie = gemius_cookie.get(name);
			if (sec_state=="unknown" || cookie.sec_state==sec_state) {
				return cookie;
			} else if (cookie.sec_state=="nsec" && sec_state=="sec") {
				return {primary: cookie.secondary, secondary: '-TURNEDOFF', sec_state: "sec"};
			} else {
				return {primary: '-TURNEDOFF', secondary: '-TURNEDOFF', sec_state: "unknown"};
			}
		},
		set : function(name,data,exp,domain,sec_state,reset_secondary) {
			if (data!='') {
				var now = (new Date()).getTime();
				try {
					if (sec_state=="unknown" || sec_state=="nsec") {
						document.cookie = name.nsec+"="+data+"; path=/"+((domain)?("; domain="+domain):"")+"; expires="+(new Date(now+exp)).toGMTString();
					}
					if (gemius_cookie.https && (sec_state=="sec" || reset_secondary || (sec_state=="unknown" && window.top!=window.self))) {
						document.cookie = name.sec+"="+data+"; path=/"+((domain)?("; domain="+domain):"")+"; SameSite=None; Secure; expires="+(new Date(now+exp)).toGMTString();
					}
				} catch (e) {}
			}
		}
	}
}

// ver. 3.47

if (typeof GemiusHitcolConnector == "undefined") {
	GemiusHitcolConnector = function(is_gde) {
		this.version = 347;
		this.lsdata = "";
		this.fpdata = "";
		this.fpdata_sec_state = "unknown";
		this.fpdata_secondary = "";
		this.fpcap = {nsec: "", sec: ""};
		this.gdprforgetts = NaN;
		this.fpcookie_name = {nsec: '__gfp_64b', sec: '__gfp_s_64b'};
		this.dntcookie_name = {nsec: '__gfp_dnt', sec: '__gfp_s_dnt'};
		this.capcookie_name = {nsec: '__gfp_cap', sec: '__gfp_s_cap'};
		this.cookie_expire = 34128000000;
		this.ref = {override: null, ref: "", frametype: 0, topref: 0};
		this.tfne = 0;
		this.tfp = {fpdata: "", origin: "", fixes: {}, interval: 0.5, need_sync: 0, need_fix: 0};
		this.gdprdisabled = 0;
		this.gdprdata = [];
		this.gdprversion = null;
		this.cmp_found = 0;
		this.gdpr_found = 0;
		this.event_identifier = null;
		this.current_receiver = null;
		this.waiting_for_fpdata = 1;
		this.waiting_for_lsdata = 1;
		this.waiting_for_chints = 1;
		this.waiting_for_tfp = 0;
		this.load_fpdata_started = 0;
		this.load_lsdata_started = 0;
		this.params_ready_called = 0;
		this.fpdata_ready_called = 0;
		this.fpdata_callbacks = [];
		this.fpdata_callback_ids = {};
		this.gsconf_added = 0;
		this.waiting_on_prerender = 1;
		this.waiting_for_consent = 1;
		this.require_consent_info = 0;
		this.has_consent = null;
		this.closing = 0;
		this.onpagehide = false;
		this.exid = '';
		this.bfcache = null;
		this.bfview_waiting = null;
		this.bfview = null;
		this.timeouts = {initto: null, cmpto: null, sto: null, fto: null, tfpto: null, tfplto: null, chto: null};
		this.init_called = 0;
		this.started = 0;
		this.visapi_s = "";
		this.visapi_h = "";
		this.visapi_c = "";
		this.loadinit = 0;
		this.addto = null;
		this.ltime = 0;
		this.lsgetframe = null;
		this.sonar_data = null;
		this.sonar_auto_init = 0;
		this.timerevents = [];
		this.timer_data = {lasttime: 0, tint: null, to: null};
		this.hidetime = null;
		this.hidecnt = 0;
		this.requests = {consent:[], no_consent:[], unknown: []};
		this.images = [];
		this.state = 0;
		this.flashv = "";
		this.inner = [];
		this.mtp_enabled = '';
		this.gde_callbacks = [];
		this.gde_params_ready = false;
		this.is_gde = is_gde;
		this.use_globals = !is_gde;
		this.src = (document.currentScript && document.currentScript.src)?document.currentScript.src:null;
		if (this.use_globals) {
			this.ssl = (typeof gemius_proto === 'string')?((gemius_proto.substr(0,5) == 'https')?1:0):(typeof pp_gemius_proto === 'string')?((pp_gemius_proto.substr(0,5) == 'https')?1:0):(document.location && document.location.protocol && document.location.protocol=='https:')?1:0;
			this.hc = (typeof gemius_hitcollector === 'string')?gemius_hitcollector:(typeof pp_gemius_hitcollector === 'string')?pp_gemius_hitcollector:'hr.hit.gemius.pl';
			this.dnt = (((typeof gemius_dnt != 'undefined') && gemius_dnt) || ((typeof pp_gemius_dnt != 'undefined') && pp_gemius_dnt))?1:0;
			this.use_cmp = (((typeof gemius_use_cmp != 'undefined') && gemius_use_cmp) || ((typeof pp_gemius_use_cmp != 'undefined') && pp_gemius_use_cmp))?1:0;
			this.cmp_purposes_overrides = (typeof gemius_cmp_purposes != 'undefined')?gemius_cmp_purposes:(typeof pp_gemius_cmp_purposes != 'undefined')?pp_gemius_cmp_purposes:null;
			this.cmp_timeout = (typeof gemius_cmp_timeout == 'number')?gemius_cmp_timeout:(typeof pp_gemius_cmp_timeout == 'number')?pp_gemius_cmp_timeout:10000;
			this.dmp_purpose = (typeof gemius_dmp_purpose === 'boolean')?gemius_dmp_purpose:(typeof pp_gemius_dmp_purpose === 'boolean')?pp_gemius_dmp_purpose:false;
			this.gdpr_applies = (typeof gemius_gdpr_applies != 'undefined')?gemius_gdpr_applies:(typeof pp_gemius_gdpr_applies != 'undefined')?pp_gemius_gdpr_applies:null;
			this.gdpr_consent = (typeof gemius_gdpr_consent != 'undefined')?gemius_gdpr_consent:(typeof pp_gemius_gdpr_consent != 'undefined')?pp_gemius_gdpr_consent:null;
			this.explicit_consent = (typeof gemius_consent === 'boolean')?gemius_consent:(typeof pp_gemius_consent === 'boolean')?pp_gemius_consent:null;
			this.bfview_disabled = (typeof gemius_disable_back_cache_hits === 'boolean')?gemius_disable_back_cache_hits:(typeof pp_gemius_disable_back_cache_hits === 'boolean')?pp_gemius_disable_back_cache_hits:false;
		} else {
			this.ssl = (document.location && document.location.protocol && document.location.protocol=='https:')?1:0;
			this.hc = 'hr.hit.gemius.pl';
			this.dnt = 0;
			this.use_cmp = 0;
			this.cmp_purposes_overrides = null;
			this.cmp_timeout = 10000;
			this.dmp_purpose = false;
			this.gdpr_applies = null;
			this.gdpr_consent = null;
			this.explicit_consent = null;
			this.bfview_disabled = false;
		}
		this.warn = function() {
			if (window.console && window.console.warn) {
				console.warn.apply(console, arguments);
			}
		};
// check_same_origin.js 
var URL_HOST_PATTERN = /^(\w+:)\/\/([\w.-]+)(?::(\d+))?\/?/;
var check_same_origin = function(ref, page_location) {
	var url_match = URL_HOST_PATTERN.exec(ref) || [];
	if (url_match) {
		var default_port = function(protocol) {
			return {'http:':'80', 'https:':'443'}[protocol];
		}
		var port_of = function(location) {
			return location.port || default_port(location.protocol||page_location.protocol);
		}
		var urlparts = { protocol: url_match[1], hostname: url_match[2], port: url_match[3] };
		var is_same_origin = !!(urlparts.protocol === page_location.protocol &&
			urlparts.hostname === page_location.hostname && port_of(urlparts) === port_of(page_location)
		);
		if (is_same_origin) return ref;
	}
	return null;
};
		this.referrer_override = function(ref) {
			var has_pending_cmds = 'gemius_cmd_pdata' in window && gemius_cmd_pdata.length;
			var msg = 'Gemius referrer override ignored ';
			if (!this.init_called || has_pending_cmds) {
				return this.warn(msg + 'before init');
			}
			if (this.hidetime !== null && !this.bfview_disabled) {
				return this.warn(msg + 'during pagehide / pageshow');
			}
			ref = check_same_origin(ref, window.location);
			if (ref === null) {
				return this.warn(msg + 'due to a different origin');
			}
			this.ref.override = ref;
		};
		this.init_params = function(p) {
			this.ssl = (typeof p['proto'] === 'string')?((p['proto'].substr(0,5) == 'https')?1:0):this.ssl;
			this.hssl = (this.ssl||this.getchromever()>=67)?1:0;
			this.hc = (typeof p['hitcollector'] === 'string')?p['hitcollector']:this.hc;
			this.dnt = (typeof p['dnt'] != 'undefined')?(p['dnt']?1:0):this.dnt;
			this.use_cmp = (typeof p['use_cmp'] != 'undefined')?(p['use_cmp']?1:0):this.use_cmp;
			this.cmp_purposes_overrides = (typeof p['cmp_purposes'] != 'undefined')?p['cmp_purposes']:this.cmp_purposes_overrides;
			this.cmp_timeout = (typeof p['cmp_timeout'] === 'number')?p['cmp_timeout']:this.cmp_timeout;
			this.dmp_purpose = (typeof p['dmp_purpose'] === 'boolean')?p['dmp_purpose']:this.dmp_purpose;
			this.gdpr_applies = (typeof p['gdpr_applies'] != 'undefined')?p['gdpr_applies']:this.gdpr_applies;
			this.gdpr_consent = (typeof p['gdpr_consent'] != 'undefined')?p['gdpr_consent']:this.gdpr_consent;
			this.explicit_consent = (typeof p['consent'] === 'boolean')?p['consent']:this.explicit_consent;
		};
		this.bind = function(fn) {
			var that = this;
			var args = Array.prototype.slice.call(arguments,1);
			return function() {
				return fn.apply(that,args.concat(Array.prototype.slice.call(arguments)));
			}
		};
		this.add_event = function(obj,type,fn) {
			if (obj.addEventListener) {
				obj.addEventListener(type, fn, false);
			} else if (obj.attachEvent) {
				obj.attachEvent('on'+type, fn);
			}
		};
		this.remove_script = function(elementid,url) {
			var el = document.getElementById(elementid);
			if (el) {
				if (url) {
					if (this.use_globals) {
						try {
							if (typeof gemius_notify != 'undefined') {
								gemius_notify(url);
							} else if (typeof pp_gemius_notify != 'undefined') {
								pp_gemius_notify(url);
							}
						} catch (e) {}
					}
				}
				try {
					el.parentNode.removeChild(el);
				} catch(e) {}
			}
		};
		this.append_script = function(url,finishedfn,notify) {
			var rndid = 'gemius_hcconn_'+((new Date()).getTime())+'_'+Math.floor(Math.random()*100000000);
			try {
				var gt=document.createElement('script'),s=document.getElementsByTagName('script')[0];
				if (finishedfn!=null) {
					this.add_event(gt,'load',finishedfn);
					this.add_event(gt,'error',finishedfn);
					this.add_event(gt,'readystatechange',function() { if (!gt.readyState || gt.readyState === 'loaded' || gt.readyState === 'complete') finishedfn(); });
				}
				this.add_event(gt,'load',this.bind(this.remove_script,rndid,notify?url:null));
				this.add_event(gt,'error',this.bind(this.remove_script,rndid,null));
				this.add_event(gt,'readystatechange',this.bind(function() { if (!gt.readyState || gt.readyState === 'loaded' || gt.readyState === 'complete') this.remove_script(rndid,notify?url:null); }));
				gt.setAttribute('id',rndid);
				gt.setAttribute('defer','defer');
				gt.setAttribute('async','async');
				gt.setAttribute('type','text/javascript');
				gt.setAttribute('src',url);
				if (s) {
					s.parentNode.insertBefore(gt,s);
				} else if (document.body) {
					document.body.appendChild(gt);
				}
			} catch (e) {}
		};
		this.xdot_loaded = function() {
			if (typeof gemius_open=='undefined') {
				this.state = 0;
			}
		};
		this.get_referrer_override = function() {
			var frametype = this.ref.frametype;
			if (frametype == 2) {
				try {
					if ('gemius_hcconn' in top && 'get_referrer_override' in top.gemius_hcconn) {
						return top.gemius_hcconn.get_referrer_override() || null;
					}
				} catch (e) {
					this.tfne = 1;
				}
			}
			return (frametype == 0 || frametype == 1 || (frametype == 3 && !this.has_tfp_answer())) ? this.ref.override : null;
		};
		var _get_referrer = function() {
			return this.get_referrer_override() || this.ref.ref;
		};
		_get_referrer = this.bind(_get_referrer);
		this.sendhit = function(robj,nr,consent,lsadd) {
			var url = (this.hssl?'https://':'http://')+this.hc+'/_';
			var d = new Date().getTime();
			var vis = (this.visapi_h=='')?3:(document[this.visapi_h])?2:1;
			var params = '&vis='+vis;
			var sendf = (this.closing?2:0)+(this.onpagehide?16:0);
			params += '&lsdata=' + (consent?this.lsdata:'-NOCONSENT');
			params += '&fpdata=' + (consent?this.getrawfpdata():'-NOCONSENT');
			if (this.tfp.fpdata != '') {
				params += '&tfpdata=' + (consent?this.tfp.fpdata:'-NOCONSENT');
			}
			if (consent && this.hidecnt==0) {
				params += '&ltime='+this.ltime;
			}
			params += this.has_tfp_answer() ? this.ref_params() : robj.refs;
			params += this.inner_params();
			if (this.ssl==0 && consent && lsadd!==null) {
				params += '&lsadd='+lsadd;
			}
			if (consent!==true) {
				params += '&nc=1';
			} else if (robj.explicit===true) {
				params += '&nc=0';
			}
			params += '&exid=' + (consent?this.exid:'-NOCONSENT') + '&brts=' + Math.floor(d/1000);
			if (this.closing) {
				url += (d+nr)+'/redot.gif?l='+robj.vers+robj.req+params;
				if (typeof navigator.sendBeacon == "function") {
					sendf += 1;
					url += '&sendf='+sendf;
					navigator.sendBeacon(url);
				} else {
					url += '&sendf='+sendf;
					var images_l = this.images.length;
					this.images[images_l]=new Image();
					this.images[images_l].src = url;
				}
			} else if (this.state>0 || robj.allowaddscript==0 || !this.use_globals || typeof gemius_open != 'undefined') {
				url += (d+nr)+'/redot.js?l='+robj.vers+'&sendf='+sendf+robj.req+params+this.fpcap_params(consent);
				this.append_script(url,null,1);
			} else {
				sendf += 8;
				url += (d+nr)+'/rexdot.js?l='+robj.vers+'&sendf='+sendf+robj.req+params+this.fpcap_params(consent);
				this.state = 1;
				this.append_script(url,this.bind(this.xdot_loaded),1);
			}
			if (consent && this.tfp.need_sync) {
				this.tfp_add_fix(robj);
			}
		};
		this.sendhits = function(lsadd) {
			if (this.waiting_on_prerender==0) {
				var i;
				for (i=0 ; i<this.requests.no_consent.length ; i++) {
					this.sendhit(this.requests.no_consent[i],i,false,lsadd);
				}
				this.requests.no_consent = [];
				if (this.waiting_for_fpdata==0 && this.waiting_for_lsdata==0) {
					for (i=0 ; i<this.requests.consent.length ; i++) {
						this.sendhit(this.requests.consent[i],i,true,lsadd);
					}
					this.requests.consent = [];
				}
			}
		};
		this.latehits = function() {
			this.tfp_sync();
			if (this.waiting_for_consent==0 && this.requests.unknown.length > 0) {
				var i;
				var requests = this.requests;
				for (i=0 ; i<requests.unknown.length ; i++) {
					var robj = requests.unknown[i];
					robj.explicit = this.explicit_consent;
					if (this.has_consent) {
						requests.consent[requests.consent.length] = robj;
					} else {
						requests.no_consent[requests.no_consent.length] = robj;
					}
				}
				this.requests.unknown = [];
			}
			if ((this.has_consent === false || (this.waiting_for_fpdata==0 && this.waiting_for_lsdata==0)) && this.waiting_on_prerender==0 && this.waiting_for_chints==0 && this.waiting_for_tfp==0) {
				if (this.closing==0 && this.ssl==0 && this.lsdata!='' && this.lsdata[0]!='-' && this.lsgetframe) {
					if (this.addto==null) {
						try {
							this.lsgetframe.contentWindow.postMessage("_xx_gemius_get_add_xx_","http://ls.hit.gemius.pl/");
							this.addto = setTimeout(this.bind(this.lsaddto),250);
						} catch (e) {
							this.sendhits(null);
						}
					}
				} else {
					this.sendhits(null);
				}
			}
		};
		this.lsaddto = function() {
			if (this.addto!=null) {
				this.addto = null;
				this.sendhits(null);
			}
		};
		this.add_fpdata_callback = function(callback,id) {
			if (id == null || !(id in this.fpdata_callback_ids)) {
				if (id != null) {
					this.fpdata_callback_ids[id] = id;
				}
				this.fpdata_callbacks[this.fpdata_callbacks.length] = callback;
				if (this.fpdata_ready_called) {
					try {
						callback(this.getconsentfpdata());
					} catch (e) {}
				}
			}
		};
		this.paramsready = function() {
			this.sync_gde_params();
			if (this.waiting_for_consent==1) {
				return;
			}
			var fpdata_ready = (this.waiting_for_fpdata==0 || this.fpdata == '-DNT');
			var lsdata_ready = (this.waiting_for_lsdata==0 || this.lsdata == '-DNT');
			if (fpdata_ready) {
				this.fpdata_ready_called = 1;
				for (var i=0 ; i<this.fpdata_callbacks.length ; i++) {
					try {
						this.fpdata_callbacks[i](this.getconsentfpdata());
					} catch (e) {}
				}
			}
			if (this.use_globals && this.params_ready_called==0 && fpdata_ready && lsdata_ready) {
				var data = {'lsdata' : this.getconsentlsdata(), 'fpdata' : this.getconsentfpdata()};
				this.params_ready_called = 1;
				try {
					if (typeof gemius_params_ready != 'undefined') {
						gemius_params_ready(data);
					} else if (typeof pp_gemius_params_ready != 'undefined') {
						pp_gemius_params_ready(data);
					}
				} catch (e) {}
			}
		};
		this.visibilitychanged = function() {
			if (document[this.visapi_s]!='prerender' && this.waiting_on_prerender) {
				this.waiting_on_prerender = 0;
				setTimeout(this.bind(this.latehits),100);
			}
		};
		this.unloadhit = function(robj,nr,consent) {
			var url = (this.hssl?'https://':'http://')+this.hc+'/_';
			var d = new Date().getTime();
			var vis = (this.visapi_h=='')?3:(document[this.visapi_h])?2:1;
			var params = '&vis='+vis;
			var sendf = 4+(this.closing?2:0)+(this.onpagehide?16:0);
			params += '&fpdata='+((this.waiting_for_fpdata==0 && consent)?this.getrawfpdata():'-UNLOAD');
			if (this.waiting_for_lsdata==0 && consent) {
				params += '&lsdata='+this.lsdata;
				if (this.hidecnt==0) {
					params += '&ltime='+this.ltime;
				}
			} else {
				params += '&lsdata=-UNLOAD';
			}
			if (this.tfp.fpdata != '') {
				params += '&tfpdata=' + (consent?this.tfp.fpdata:'-UNLOAD');
			}
			params += this.has_tfp_answer() ? this.ref_params() : robj.refs;
			params += this.inner_params();
			if (consent!==true) {
				params += '&nc=1';
			} else if (robj.explicit===true) {
				params += '&nc=0';
			}
			params += '&exid=' + (consent?this.exid:'-UNLOAD') + '&brts=' + Math.floor(d/1000);
			if (this.closing) {
				url += (d+nr)+'/redot.gif?l='+robj.vers+robj.req+params;
				if (typeof navigator.sendBeacon == "function") {
					sendf += 1;
					url += '&sendf='+sendf;
					navigator.sendBeacon(url);
				} else {
					url += '&sendf='+sendf;
					var images_l = this.images.length;
					this.images[images_l]=new Image();
					this.images[images_l].src = url;
				}
			} else {
				url += (d+nr)+'/redot.js?l='+robj.vers+'&sendf='+sendf+robj.req+params;
				this.append_script(url,null,1);
			}
			if (consent && this.tfp.need_sync) {
				this.tfp_add_fix(robj);
			}
		};
		this.unload_prepare = function() {
			if (this.require_consent_info) {
				this.has_consent = null;
			} else if (this.dnt || this.explicit_consent===false) {
				this.has_consent = false;
			} else if (this.explicit_consent===null && this.use_cmp) {
				if (this.cmp_timeout==Infinity) {
					this.require_consent_info = 1;
					this.has_consent = null;
				} else {
					this.has_consent = false;
				}
			} else if (this.explicit_consent===null && this.gdpr_params() != '') {
				this.has_consent = false;
			} else {
				this.has_consent = true;
			}
			this.waiting_for_consent = this.require_consent_info;
			if (this.use_globals) {
				if (typeof gemius_init_pageview != "undefined") {
					for (var i=0 ; i<gemius_init_pageview.length ; i++) {
						gemius_init_pageview[i]({});
					}
				}
				this.sendpendingdata();
			}
		};
		this.unload = function(closing) {
			try {
				var i;
				var uhits = 0;
				var last = (!this.closing && closing);
				var requests = this.requests;
				this.closing = (this.closing>0 || closing)?1:0;
				if (!this.init_called) {
					this.unload_prepare();
					this.send_bfview();
				}
				if (this.waiting_on_prerender==0 && (this.require_consent_info==0 || this.waiting_for_consent==0)) {
					uhits += requests.no_consent.length;
					for (i=0 ; i<requests.no_consent.length ; i++) {
						this.unloadhit(requests.no_consent[i],i+10,false);
					}
					uhits += requests.consent.length;
					for (i=0 ; i<requests.consent.length ; i++) {
						this.unloadhit(requests.consent[i],i+10,true);
					}
					uhits += requests.unknown.length;
					for (i=0 ; i<requests.unknown.length ; i++) {
						this.unloadhit(requests.unknown[i],i+10,false);
					}
					this.requests = {consent:[], no_consent:[], unknown: []};
				}
				if (last) {
					if (typeof navigator.sendBeacon != "function" && uhits > 0) {
						var start = (new Date()).getTime();
						while (start+200>(new Date()).getTime()){};
					}
				}
				this.tfp_send_fixes(true);
			} catch (e) {}
		};
		this.mousedown = function() {
			if ((this.cmp_found!=1 || this.waiting_for_consent==0) && this.waiting_for_chints==0) {
				this.unload(false);
			}
		};
		this.set_timeout = function(fn, time) {
			return {to: setTimeout(fn,time), fn: fn, time: time};
		};
		this.hide_timeouts = function() {
			for (var key in this.timeouts) {
				var timeout = this.timeouts[key];
				if (timeout != null) {
					if (timeout.to != null) {
						clearTimeout(timeout.to);
						timeout.to = null;
					}
				}
			}
		};
		this.show_timeouts = function() {
			for (var key in this.timeouts) {
				var timeout = this.timeouts[key];
				if (timeout!=null && timeout.to==null) {
					timeout.to = setTimeout(timeout.fn,timeout.time);
				}
			}
		};
		this.send_bfview = function() {
			var bfview = this.bfview;
			if (bfview!=null) {
				this.internal_hit(0,bfview.vers,bfview.id,bfview.evid,"bfview",bfview.hsrc,0,bfview.extra,bfview.refs,bfview.href);
			}
		};
		this.pagehide = function() {
			this.bfcache = {has_consent:this.has_consent,
					require_consent_info:this.require_consent_info,
					waiting_for_consent:this.waiting_for_consent};
			this.unload(true);
			if (this.hidetime==null) {
				this.hidetime = ((new Date()).getTime());
			}
			this.hide_timeouts();
			if (this.sonar_data!=null) {
				var data = this.sonar_data;
				if (data["sint"]!=null) {
					clearInterval(data["sint"]);
					data["sint"] = null;
				}
			}
			var tdata = this.timer_data;
			if (tdata["tint"]!=null) {
				clearInterval(tdata["tint"]);
				tdata["tint"] = null;
			}
			if (tdata["to"]!=null) {
				clearTimeout(tdata["to"]);
				tdata["to"] = null;
			}
			if (this.bfview_waiting) {
				this.bfview = this.bfview_waiting;
				this.bfview_waiting = null;
			}
			if (this.bfview != null) {
				var init_called = this.init_called;
				this.bfview.refs = init_called ? this.ref_params() : null;
				this.bfview.href = init_called ? new String(document.location.href) : null;
			}
		};
		this.pageshow = function() {
			if (this.hidetime==null) {
				return;
			}
			if (this.bfcache) {
				this.has_consent = this.bfcache.has_consent;
				this.require_consent_info = this.bfcache.require_consent_info;
				this.waiting_for_consent = this.bfcache.waiting_for_consent;
				this.bfcache = null;
			}
			this.tfp_pageshow();
			this.show_timeouts();
			var showtime = ((new Date()).getTime());
			var leap = (showtime>this.hidetime)?showtime-this.hidetime:0;
			if (this.sonar_data!=null) {
				var data = this.sonar_data;
				data["lasttime"] += leap;
				if (data["sint"]==null && data["id"] && data["evid"] && data["freq"]>0) {
					data["sint"] = setInterval(this.bind(this.sonar), 1000);
				}
			}
			if (this.init_called) {
				var data = this.timer_data;
				data["lasttime"] += leap;
				if (data["to"]==null && data["tint"]==null) {
					var t = showtime-data["lasttime"];
					if (t > 0 && t < 60*1000) {
						data["to"] = setTimeout(this.bind(this.timer),60*1000-t);
					} else {
						data["tint"] = setInterval(this.bind(this.timer),60*1000);
					}
				}
			}
			this.hidecnt += 1;
			this.hidetime = null;
			this.closing = 0;
			if (this.init_called) {
				this.send_bfview();
			}
		};
		this.getrawfpdata = function(fpdata) {
			if (fpdata===undefined) {
				fpdata = this.fpdata;
			}
			return fpdata.split('|')[0];
		};
		this.getconsentfpdata = function() {
			return this.has_consent?this.getrawfpdata():'-NOCONSENT';
		};
		this.getconsentlsdata = function() {
			return this.has_consent?this.lsdata:'-NOCONSENT';
		};
		this.get_fpdata_ts = function(fpdata) {
			if (fpdata===undefined) {
				fpdata = this.fpdata;
			}
			var arr = fpdata.split('|');
			return (arr.length >= 2) ? parseInt(arr[1]) * 1000 : 0;
		};
		this.getfpcookie = function() {
			var fpcookie = gemius_cookie.get_on_state(this.fpcookie_name, this.fpdata_sec_state);
			if (this.fpdata_sec_state=='unknown') {
				this.fpdata_sec_state = fpcookie.sec_state;
			}
			this.fpdata = fpcookie.primary;
			this.fpdata_secondary = fpcookie.secondary;
		};
		this.getdntcookie = function() {
			if (this.dnt==0) {
				var dntcookie = gemius_cookie.get(this.dntcookie_name);
				this.dnt = parseInt(dntcookie.primary)?1:0;
			}
		};
		this.getfpcap = function() {
			var capcookie = gemius_cookie.get(this.capcookie_name);
			if (capcookie.sec_state=='sec') {
				this.fpcap = {nsec: '-TURNEDOFF', sec: capcookie.primary};
			} else {
				this.fpcap = {nsec: capcookie.primary, sec: capcookie.secondary};
			}
		};
		this.setfpcap = function(fpcap,fpcdomain,fpsec) {
			var fpcap_sec_state = parseInt(fpsec)?'sec':'nsec';
			if (fpcap=='' || fpcdomain=='' || this.fpdata_sec_state!=fpcap_sec_state) {
				return;
			}
			this.fpcap[this.fpdata_sec_state] = fpcap;
			gemius_cookie.set(this.capcookie_name, fpcap, this.cookie_expire, fpcdomain, this.fpdata_sec_state, false);
		};
		this.fpcookie_secondary_needs_reset = function() {
			return (this.gdprforgetts>0 && this.fpdata_secondary!='' && this.fpdata_secondary[0]!='-' && this.get_fpdata_ts(this.fpdata_secondary)<this.gdprforgetts);
		};
		this.setfpcookie = function() {
			gemius_cookie.set(this.fpcookie_name, this.fpdata, this.cookie_expire, this.fpcdomain, this.fpdata_sec_state, this.fpcookie_secondary_needs_reset());
			if (this.is_gde) {
				this.sync_gde_params();
			}
		};
		this.init_fpcookie = function() {
			gemius_cookie.set(this.fpcookie_name, this.fpdata, this.cookie_expire, this.fpcdomain, this.fpdata_sec_state, this.fpcookie_secondary_needs_reset());
		};
		this.reset_fpcookie_secondary_if_needed = function() {
			if (this.fpcookie_secondary_needs_reset()) {
				gemius_cookie.set(this.fpcookie_name, this.fpdata, this.cookie_expire, this.fpcdomain, 'sec', true);
			}
		};
		this.fpdata_loaded = function() {
			if (this.timeouts.sto!=null) {
				if (this.timeouts.sto.to!=null) {
					clearTimeout(this.timeouts.sto.to);
				}
				this.timeouts.sto = null;
			}
			var fpcookie = gemius_cookie.get_on_state(this.fpcookie_name, this.fpdata_sec_state);
			if (fpcookie.sec_state == 'unknown') {
				this.init_fpcookie();
			}
			this.getfpcookie();
			this.waiting_for_fpdata = 0;
			this.tfp_send_fixes(false);
			this.paramsready();
			this.latehits();
		};
		this.addframe = function(ssl,file,args,rcvfn) {
			if (document.body) {
				this.current_receiver = rcvfn;
				var url = 'http'+(ssl?'s':'')+'://ls.hit.gemius.pl/ls'+file+'.html'+args;
				if (rcvfn!=null) {
					this.loadinit = (new Date()).getTime();
					if (this.timeouts.fto==null) {
						this.timeouts.fto = this.set_timeout(this.bind(this.frameto),10000);
					}
				}
				var rndid = 'gemius_hcconn_'+((new Date()).getTime())+'_'+Math.floor(Math.random()*100000000);
				var f = document.createElement('iframe');
				f.setAttribute('id',rndid);
				f.setAttribute('name','ls'+file+'frame');
				f.setAttribute('width',0);
				f.setAttribute('height',0);
				f.setAttribute('scrolling','no');
				f.style.display="none";
				f.style.visibility="hidden";
				document.body.appendChild(f);
				f.setAttribute('src',url);
				if (file=="get" && ssl==0) {
					this.lsgetframe = f;
				}
			} else {
				setTimeout(this.bind(this.addframe,ssl,file,args,rcvfn), 100);
			}
		};
		this.frameto = function() {
			if (this.timeouts.fto!=null) {
				this.timeouts.fto = null;
				if (this.lsdata=='') {
					this.ltime = 10000;
					this.lsdata = document.prerendering?'-PRERENDER':'-TIMEDOUT';
					this.waiting_for_lsdata = 0;
					this.paramsready();
					this.latehits();
				}
			}
		};
		this.scriptto = function() {
			if (this.timeouts.sto!=null) {
				this.timeouts.sto = null;
				if (this.fpdata!='' && this.fpdata[0]!='-') {
					this.init_fpcookie();
					this.getfpcookie();
				}
				if (this.fpdata=='') {
					this.fpdata = '-TIMEDOUT';
				}
				this.waiting_for_fpdata = 0;
				this.paramsready();
				this.latehits();
			}
		};
		this.last_datareceiver = function(lsdata) {
			this.current_receiver = null;
			this.lsdata = lsdata;
			this.waiting_for_lsdata = 0;
			this.paramsready();
			this.latehits();
		};
		this.second_datareceiver = function(data) {
			if (data.charAt(0)=='-' || data=='') {
				this.addframe(1,'set','',this.last_datareceiver);
			} else {
				this.last_datareceiver(data);
			}
		};
		this.first_datareceiver = function(data) {
			var m = data.match(/^([A-Z0-9a-z\.\_\/]*).*\|([0-9]+)$/);
			var n = (new Date()).getTime();
			if (data.charAt(0)=='-' || data=='' || !m || m[2]<n) {
				this.addframe(1,'get','',this.second_datareceiver);
			} else {
				if (m) {
					data = m[1];
				}
				this.last_datareceiver(data);
			}
		};
		this.msgreceiver = function(e) {
			try {
				var is_event = function(prefix) {
					return typeof e.data == "string" && e.data.substring(0, prefix.length) == prefix;
				}
				if (window.top === window.self && is_event("_xx_gemius_getref_xx_")) {
					var origin = window.location.origin;
					if (origin) {
						e.source.postMessage("_xx_gemius_putref_xx_/" + origin, e.origin);
					}
				}
				if (e.source === window.top) {
					if (is_event("_xx_gemius_putref_xx_/")) {
						this.set_tfp_origin(e.data.substr(22));
						this.latehits();
					}
					if (is_event("_xx_gemius_puttfpdata_xx_")) {
						var arr = e.data.substr(26).split("/");
						var tfpdata = arr[0];
						if (!this.is_gde || (tfpdata.length > 0 && tfpdata[0] != '-')) {
							this.tfp.fpdata = tfpdata;
							this.latehits();
						}
					}
				}
				if (window.top === window.self) {
					if (is_event("_xx_gemius_getfpdata_xx_")) {
						var origin = new String(document.location.origin);
						var sent = false;
						var clbk = function(fpdata) {
							if (this.has_consent && !sent) {
								e.source.postMessage("_xx_gemius_putfpdata_xx_/" + fpdata + '/' + encodeURIComponent(origin), e.origin);
								sent = true;
							}
						};
						this.add_fpdata_callback(this.bind(clbk),null);
					}
					if (is_event("_xx_gemius_gettfpdata_xx_/")) {
						var arr = e.data.substr(26).split("/");
						var sent_tfpdata = '';
						var clbk = function(fpdata) {
							var tfpdata = (this.has_consent?fpdata:'-NOCONSENT');
							if (tfpdata != sent_tfpdata) {
								e.source.postMessage("_xx_gemius_puttfpdata_xx_/" + tfpdata, e.origin);
								sent_tfpdata = tfpdata;
							}
						};
						this.add_fpdata_callback(this.bind(clbk),arr[0]);
					}
				}
				if (!this.init_called) {
					return;
				}
				if (is_event("_xx_gemius_xx_/")) {
					if (this.timeouts.fto!=null) {
						if (this.timeouts.fto.to!=null) {
							clearTimeout(this.timeouts.fto.to);
						}
						this.timeouts.fto = null;
						this.ltime = (new Date()).getTime() - this.loadinit;
					}
					if (this.current_receiver!=null) {
						this.current_receiver(e.data.substr(15));
					}
				}
				if (this.use_globals) {
					if (is_event("_xx_gemius_add_xx_/")) {
						if (this.addto!=null) {
							clearTimeout(this.addto);
							this.addto = null;
						}
						var lsadd = e.data.substr(19);
						this.sendhits((lsadd=="-GETERR")?null:lsadd);
					}
					if (is_event("_xx_gemius_set_fpcap_xx_")) {
						var fpcap = e.data.substr(25).split("/");
						this.setfpcap(fpcap[0], fpcap[1], fpcap[2]);
					}
				}
			} catch (e) {}
		};
		this.getflashv = function() {
			var fv='-';
			if (typeof Error!='undefined') {
				var fo;
				try { fv=navigator.plugins["Shockwave Flash"].description; } catch (e) {}
				if (typeof ActiveXObject!="undefined") { try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"); } catch(e) { try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"); fv="X"; fo.AllowScriptAccess="always"; } catch(e) { if (fv=="X") { fv="WIN 6,0,20,0"; }} try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"); } catch(e) {} } if ((fv=="-" || fv=="X") && fo) { fv=fo.GetVariable("$version"); }}
			}
			return fv;
		};
		this.gdpr_params = function(first) {
			var url = '';
			if (this.gdpr_applies != null) url+="&gdpr=" + (this.gdpr_applies?"1":"0");
			if (this.gdpr_consent != null) {
				url+="&gdpr_consent=" + ((typeof this.gdpr_consent == "string")?this.gdpr_consent:'');
			}
			if (first && url != '') url='?' + url.substring(1);
			return url;
		};
		this.cmp_purposes = function() {
			var purposes = {1:[1,5],2:[1,7,8,9,10]};
			try {
// cmp_utils.js 
                var combine_cmp_purposes = function(purposes, cmp_purposes_overrides, add_dmp_purposes) {
					var purposes_v1_to_v2_translation = {1:[1],2:[3,5],3:[2,4,7],4:[6,8],5:[7,8,9]};
					var dmp_purposes = {1:[1,2,3,5],2:[1,2,3,4,5,7,8,9,10]};
					if (typeof cmp_purposes_overrides != 'undefined' && cmp_purposes_overrides != null) {
						if (cmp_purposes_overrides.constructor === Array) {
							purposes[1] = cmp_purposes_overrides;
							purposes[2] = [10];
							for (var i=0; i < purposes[1].length; i++) {
								v2_purposes = purposes_v1_to_v2_translation[purposes[1][i]];
								if (typeof v2_purposes != 'undefined') {
									purposes[2] = purposes[2].concat(v2_purposes);
								}
							}
						} else {
							for (version in cmp_purposes_overrides) {
								purposes[version] = cmp_purposes_overrides[version];
							}
						}
					}
					if (add_dmp_purposes) {
						for (version in dmp_purposes) {
							purposes[version] = purposes[version].concat(dmp_purposes[version]);
						}
					}
				}

				combine_cmp_purposes(purposes, this.cmp_purposes_overrides, this.dmp_purpose);
			} catch (e) {}
			return purposes;
		};
		this.parameters = function(href) {
			var d=document;
			var w=window;
			var href=new String(href || d.location.href);
			var dd;
			var url='&tz='+(new Date()).getTimezoneOffset();
			if (typeof encodeURIComponent != 'undefined') {
				url+='&fv='+encodeURIComponent(this.flashv)+'&href='+encodeURIComponent(href.substring(0,499));
				if (typeof w.gemiusNetpanelID=='string') {
					url+='&npid='+encodeURIComponent(w.gemiusNetpanelID);
				}
			}
			if (this.mtp_enabled && (typeof navigator.maxTouchPoints=='number')) {
				url+='&mtp='+navigator.maxTouchPoints;
			}
			if (screen) {
				var s=screen;
				if (s.width) {
					if (s.deviceXDPI && s.deviceYDPI) {
						url+='&screen='+Math.floor(s.width*s.deviceXDPI/96.0)+'x'+Math.floor(s.height*s.deviceYDPI/96.0);
					} else {
						url+='&screen='+s.width+'x'+s.height;
					}
				}
				if (w.devicePixelRatio) url+='r'+Math.round((w.devicePixelRatio*1000));
				if (s.colorDepth) url+='&col='+s.colorDepth;
			}
			if (typeof w.innerWidth=='number') {
				url+='&window='+w.innerWidth+'x'+w.innerHeight;
			} else if ( ((dd = d.documentElement) && (dd.clientWidth || dd.clientHeight)) || ((dd = d.body) && (dd.clientWidth || dd.clientHeight)) ) {
				url+='&window='+dd.clientWidth+'x'+dd.clientHeight;
			}
			if (this.cmp_found) {
				url+='&cmpf=1';
			}
			if (this.gdpr_found) {
				url+='&gdprf=1';
			}
			return url;
		};
		this.fpcap_params = function(consent) {
			if (consent && this.fpdata.length>0 && this.fpdata[0]!='-' && this.fpdata_sec_state!='unknown') {
				var fpcap = this.fpcap[this.fpdata_sec_state];
				return '&fpcap=' + ((fpcap.length>0 && fpcap[0]!='-')?fpcap:'') + ((this.fpdata_sec_state=='sec')?'&fpsec=1':'');
			}
			return '';
		};
		this.frametype_init = function() {
			var ref = this.ref;
			var d=document;
			if (typeof Error!='undefined') {
				try { ref.frametype=(d==top.document)?1:2; var r = top.document.referrer; } catch(e) {ref.frametype=3;}
			}
		};
		this.ref_update = function() {
			var ref = this.ref;
			var d=document;
			if (d.referrer) { ref.ref=new String(d.referrer); } else { ref.ref=''; }
			if (typeof Error!='undefined') {
				try { if (typeof top.document.referrer=="string") { ref.ref=top.document.referrer; } } catch(e) {}
			}
			try { if (ref.ref=='' && typeof ia_document != "undefined" && ia_document.referrer) ref.ref="https://" + (new String(ia_document.referrer));} catch(e) {}
		};
		this.ref_params_obj = function() {
			var ref = this.ref;
			if (ref.frametype != 3) {
				this.ref_update();
			}
			var params = {"fr":ref.frametype};
			if (ref.topref) {
				params["tr"] = ref.topref;
			}
			if (typeof encodeURIComponent != 'undefined') {
				params["ref"] = encodeURIComponent(_get_referrer().substring(0,499));
			}
			return params;
		};
		this.ref_params = function() {
			var params = this.ref_params_obj();
			var url = '';
			for (var key in params) {
				url += '&' + key + '=' + params[key];
			}
			return url;
		};
		this.inner_params = function() {
			if (typeof encodeURIComponent != 'undefined') {
				var inner = '_ver=' + this.version;
				if (this.tfne) {
					inner += '|_tfne=' + this.tfne;
				}
				if (GemiusHitcolConnector.min) {
					inner += '|_min=1';
				}
				if (this.hidecnt > 0) {
					inner += '|_hdcnt=' + this.hidecnt;
				}
				if (this.inner.length > 0) {
					inner += '|' + this.array_to_string(this.inner, 0);
				}
				return '&inner='+encodeURIComponent(inner.substring(0,1999));
			}
			return '';
		};
		this.array_to_string = function(arr,start) {
			var i,str;
			if (typeof arr == 'string') {
				return arr;
			}
			str = '';
			if (typeof arr.length != 'undefined') {
				for (i=start ; i<arr.length ; i++) {
					if (i>start) {
						str += '|';
					}
					str += ((new String(arr[i])).replace(/\|/g,'_'));
				}
			}
			return str;
		};
		this.internal_hit = function(allowaddscript,vers,id,evid,et,hsrc,sonar,extra,refs,href) {
			var req = "";
			if (this.event_identifier==null && id) {
				this.event_identifier = id;
			}
			req += '&id='+id;
			if (typeof et != 'undefined') {
				req += '&et='+((et=='bfview')?'view':et);
			}
			if (typeof hsrc != 'undefined') {
				req += '&hsrc='+hsrc;
			}
			var not_gstream = (id && typeof id.indexOf == 'function' && id.indexOf('&sargencoding=') < 0);
			if (sonar && et == 'view' && not_gstream) {
				this.sonar_auto_init = 0;
				req += '&initsonar=1';
			}
			if (typeof extra != 'undefined' && typeof encodeURIComponent != 'undefined') {
				req += '&extra='+encodeURIComponent(extra.substring(0,1999));
			}
			req += '&eventid='+evid+this.parameters(href);
			refs = refs || this.ref_params();
			var robj = {req:req,id:id,allowaddscript:allowaddscript,vers:vers,explicit:this.explicit_consent,refs:refs};
			if (this.onpagehide && !this.bfview_disabled && (et == 'view' || et == 0) && not_gstream) {
				this.bfview_waiting = {vers: vers, id: id, evid: evid, hsrc: hsrc, extra: extra};
			}
			var requests = this.requests;
			if (this.has_consent === true) {
				requests.consent[requests.consent.length] = robj;
			} else if (this.has_consent === false) {
				requests.no_consent[requests.no_consent.length] = robj;
			} else {
				requests.unknown[requests.unknown.length] = robj;
			}
			this.latehits();
		};
		this.timer = function() {
			var i;
			var data = this.timer_data;
			data["lasttime"] = ((new Date()).getTime());
			for (i=0 ; i<this.timerevents.length ; i++) {
				this.internal_hit(0,103,this.timerevents[i],0,"sonar");
			}
			if (data["to"] != null) {
				clearTimeout(data["to"]);
				data["to"] = null;
			}
			if (data["tint"] == null) {
				data["tint"] = setInterval(this.bind(this.timer),60*1000);
			}
		};
		this.gtimer_add = function(id) {
			this.internal_hit(0,103,id,0,"sonar");
			this.timerevents[this.timerevents.length] = id;
		};
		this.sonar_add = function(identifier,evid,freq,extra) {
			if (this.sonar_data==null) {
				var data={};
				data["id"]=identifier;
				data["evid"]=evid;
				data["freq"]=freq;
				data["extra"]=extra;
				data["sint"]=null;
				data["lasttime"] = ((new Date()).getTime());
				data["sdur"] = 0;
				if (identifier && evid && freq>0) {
					data["sint"]=setInterval(this.bind(this.sonar), 1000);
				}
				this.sonar_data = data;
			}
		};
		this.sonar = function() {
			if (this.sonar_data!=null) {
				var data, prob, lvstate;
				lvstate=(this.visapi_s?document[this.visapi_s]:"");
				data=this.sonar_data;
				prob=(((new Date()).getTime()) - data["lasttime"])/1000;
				data["lasttime"]=((new Date()).getTime());
				while (prob>0) {
					if (data["sdur"]<24*3600 && prob<=4 && lvstate=="visible" && Math.random() < prob/data["freq"]) {
						this.internal_hit(0,109,data["id"],data["evid"],"smpsonar",0,0,"_ASF="+data["freq"]+(data["extra"]?("|"+data["extra"]):""));
					}
					data["sdur"] += Math.min(prob,data["freq"]);
					prob -= data["freq"];
				}
			}
		};
		this.gdprdata_loaded = function() {
			try {
				if (this.gdprdisabled) {
					this.consent_loaded(true,false);
					return;
				}
				var purposes = this.cmp_purposes()[this.gdprversion];
				if (typeof purposes == "undefined") {
					this.consent_loaded(false,false);
					return;
				}
				for (var i=0; i<purposes.length; ++i) {
					if (!this.gdprdata[purposes[i]-1]) {
						this.consent_loaded(false,false);
						return;
					}
				}
			} catch (e) {
				this.consent_loaded(false,false);
				return;
			}
			this.consent_loaded(true,false);
		};
		this.consent_loaded = function(consent,explicit) {
			if (this.timeouts.cmpto!=null) {
				if (this.timeouts.cmpto.to!=null) {
					clearTimeout(this.timeouts.cmpto.to);
				}
				this.timeouts.cmpto = null;
			}
			if (explicit || this.explicit_consent === null) {
				this.waiting_for_consent = 0;
				this.has_consent = consent?true:false;
				if (explicit) {
					this.explicit_consent = this.has_consent;
				}
				if (this.has_consent) {
					if (this.waiting_for_fpdata) {
						this.load_fpdata();
					}
					if (this.waiting_for_lsdata) {
						this.load_lsdata();
					}
				}
				this.paramsready();
				this.latehits();
			}
		};
		this.consentto = function() {
			if (this.waiting_for_consent==1) {
				this.timeouts.cmpto = null;
				this.waiting_for_consent = 0;
				this.has_consent = false;
				this.latehits();
			}
		};
		this.tfp_add_fix = function(robj) {
			if (robj.id in this.tfp.fixes) {
				return;
			}
			var is_frame = (this.ref.frametype==3);
			var fix = {
				fpdata: (this.is_gde && (this.waiting_for_fpdata==1))?1:0,
				tfpdata: (is_frame && this.tfp.fpdata=='')?1:0,
				ref: (is_frame && this.ref.topref==0)?1:0,
				refs: robj.refs
			}
			if (fix.fpdata || fix.tfpdata || fix.ref) {
				this.tfp.fixes[robj.id] = fix;
				this.tfp.need_fix = 1;
			}
		};
		this.tfp_timeout = function() {
			this.waiting_for_tfp = 0;
			this.latehits();
		};
		this.tfp_sync = function() {
			if (this.tfp.fpdata!='' && this.tfp.origin!='') {
				if (this.timeouts.tfpto!=null) {
					if (this.timeouts.tfpto.to!=null) {
						clearTimeout(this.timeouts.tfpto.to);
					}
					this.timeouts.tfpto = null;
				}
				this.tfp.need_sync = 0;
				this.waiting_for_tfp = 0;
				this.tfp_send_fixes(false);
				this.sync_gde_params();
			}
		};
		this.tfp_fix_url = function() {
			var url = (this.hssl?'https://':'http://')+this.hc+'/_';
			var d = new Date().getTime();
			url += d + "/redot.gif?fpdata=" + this.getrawfpdata();
			url += "&lsdata=" + this.lsdata;
			url += "&tfpdata=" + this.tfp.fpdata;
			url += "&roc=1&et=9&w=fpm";
			url += '&exid=' + this.exid + '&brts=' + Math.floor(d/1000);
			if (typeof encodeURIComponent != "undefined") {
				var href = new String(document.location.href);
				url += '&href=' + encodeURIComponent(href.substring(0,499));
			}
			return url;
		};
		this.tfp_send_fixes = function(unload) {
			if (!this.tfp.need_fix || !this.has_consent) {
				return;
			}
			var url = this.tfp_fix_url();
			var tfp = this.tfp;
			var has_fpdata = (this.waiting_for_fpdata==0);
			var has_tfpdata = (tfp.fpdata!='' && tfp.fpdata[0]!='-')?1:0;
			var has_ref = (tfp.origin!='')?1:0;
			this.tfp.need_fix = 0;
			for (var id in this.tfp.fixes) {
				var fix = this.tfp.fixes[id];
				var has_new_ref_fix = fix.ref && has_ref;
				var has_new_fix = ((fix.fpdata && has_fpdata) || (fix.tfpdata && has_tfpdata) || has_new_ref_fix);
				var has_missed_fix = ((fix.fpdata && !has_fpdata) || (fix.tfpdata && !has_tfpdata) || (fix.ref && !has_ref));
				if (has_new_fix && (unload || !has_missed_fix)) {
					var id_url = url + "&id=" + id;
					id_url += has_new_ref_fix ? this.ref_params(): fix.refs;
					if (typeof navigator.sendBeacon == "function") {
						navigator.sendBeacon(id_url);
					} else {
						var images_l = this.images.length;
						this.images[images_l] = new Image();
						this.images[images_l].src = id_url;
					}
					fix.fpdata &= !has_fpdata;
					fix.tfpdata &= !has_tfpdata;
					fix.ref &= !has_ref;
					if (!has_missed_fix) {
						delete this.tfp.fixes[id];
					}
				}
				if (id in this.tfp.fixes) {
					this.tfp.need_fix = 1;
				}
			}
		};
		this.set_tfp_origin = function(origin) {
			if (this.ref.frametype == 3) {
				this.ref.ref = origin;
				this.ref.topref = 1;
			}
			this.tfp.origin = origin;
		};
		this.has_tfp_answer = function() {
			return (this.ref.topref != 0) && (this.tfp.fpdata != "");
		};
		this.tfp_init = function() {
			if (window.self !== window.top && this.ref.frametype != 2) {
				try {
					var origins = document.location.ancestorOrigins;
					if (typeof origins != 'undefined') {
						this.set_tfp_origin(origins[origins.length-1]);
					}
				} catch(e) {};
				this.timeouts.tfpto = this.set_timeout(this.bind(this.tfp_timeout), 1000);
				this.waiting_for_tfp = 1;
				this.tfp.need_sync = 1;
				this.tfp.need_fix = 1;
				this.tfp_loop();
			}
		};
		this.tfp_pageshow = function() {
			if (this.timeouts.tfplto != null) {
				this.tfp.interval = 0.5;
				this.timeouts.tfplto.time = 0.5;
			}
		};
		this.tfp_loop = function() {
			if (this.tfp.need_sync) {
				if (this.tfp.origin=='') {
					window.top.postMessage("_xx_gemius_getref_xx_","*");
				}
				if (this.tfp.fpdata=='') {
					window.top.postMessage("_xx_gemius_gettfpdata_xx_/" + this.exid ,"*");
				}
				this.timeouts.tfplto = this.set_timeout(this.bind(this.tfp_loop), this.tfp.interval * 1000);
				if (this.tfp.interval < 8) {
					this.tfp.interval *= 2;
				}
				return;
			}
			this.timeouts.tfplto = null;
		};
		this.ghit = function(allowaddscript,vers,args,evid,hsrc,sonar) {
			if (args.length>0) {
				this.internal_hit(allowaddscript,vers,args[0],evid,"view",hsrc,sonar,this.array_to_string(args,1));
			}
		};
		this.gevent = function(allowaddscript,vers,args,evid,hsrc,sonar) {
			var pos = 0;
			var et = "view";
			if (args.length>1) {
				var m = (new String(args[0])).match('^_([a-zA-Z0-9]+)_$');
				if (m) {
					et = m[1];
					pos = 1;
				}
			}
			if (args.length>pos) {
				if (!args[pos] && this.event_identifier != null) {
					args[pos] = this.event_identifier;
				}
				if (args[pos]) {
					this.internal_hit(allowaddscript,vers,args[pos],evid,et,hsrc,sonar,this.array_to_string(args,pos+1));
				}
			}
		};
		this.addscripthit = function() { this.ghit(1,106,arguments,0,2,this.sonar_auto_init); };
		this.plainhit = function() { this.ghit(0,107,arguments,0,2,this.sonar_auto_init); };
		this.addscriptevent = function() { this.gevent(1,106,arguments,0,3,this.sonar_auto_init); };
		this.plainevent = function() { this.gevent(0,107,arguments,0,3,this.sonar_auto_init); };
		if (this.use_globals) {
			this.pendingdata = function(arr,fn) {
				var i;
				if (typeof window[arr] != 'undefined') {
					for (i=0 ; i<window[arr].length ; i++) {
						fn.apply(this,window[arr][i]);
					}
					window[arr]=[];
				}
			};
			this.sendpendingdata = function() {
				this.pendingdata('pp_gemius_hit_pdata',this.addscripthit);
				this.pendingdata('gemius_hit_pdata',this.plainhit);
				this.pendingdata('pp_gemius_event_pdata',this.addscriptevent);
				this.pendingdata('gemius_event_pdata',this.plainevent);
				this.pendingdata('gemius_shits',this.addscripthit);
				this.pendingdata('gemius_phits',this.plainhit);
				this.pendingdata('gemius_sevents',this.addscriptevent);
				this.pendingdata('gemius_pevents',this.plainevent);
				this.pendingdata('gemius_cmd_pdata',gemius_cmd);
			};
		}
		this.findvisapi = function() {
			var p = ['moz','webkit','ms','o'];
			var i;
			if (typeof document.hidden != 'undefined') {
				this.visapi_h = 'hidden';
				this.visapi_s = 'visibilityState';
				this.visapi_c = 'visibilitychange';
			} else {
				for (i in p) {
					if (typeof document[p[i]+'Hidden'] != 'undefined') {
						this.visapi_h = p[i]+'Hidden';
						this.visapi_s = p[i]+'VisibilityState';
						this.visapi_c = p[i]+'visibilitychange';
					}
				}
			}
		};
		this.chints_to_params = function(chints) {
// chints_params.js 
	var params = [];
	var skeys = {'architecture':'arch','platform':'pm','model':'model','platformVersion':'pver','bitness':'bits'};
	var bkeys = {'mobile':'mobile','wow64':'wow64'};
	for (var key in skeys) {
		if (key in chints) {
			var str = new String(chints[key]);
			if (str.length > 0) {
				params[params.length] = '_ch_'+skeys[key]+'='+str.substr(0,50);
			}
		}
	}
	for (var key in bkeys) {
		if (key in chints) {
			params[params.length] = '_ch_'+bkeys[key]+'='+(chints[key]?'1':'0');
		}
	}
	var brands = null;
	if (chints['fullVersionList'] instanceof Array) {
		brands = chints['fullVersionList'];
	} else if (chints['brands'] instanceof Array) {
		brands = chints['brands'];
	}
	if (brands && JSON && typeof JSON.stringify == 'function') {
		var str = JSON.stringify(brands);
		var re = new RegExp('^\\[|\\]$|"brand":|"version":', 'g');
		params[params.length] = '_ch_brands='+str.replace(re,'').substr(0,500);
	}
	return params;

		};
		this.chints_loaded = function(chints) {
			if (this.timeouts.chto != null) {
				this.timeouts.chto = null;
			}
			if (this.waiting_for_chints == 0) {
				return;
			}
			try {
				this.inner = this.inner.concat(this.chints_to_params(chints));
			} catch(e) {};
			this.waiting_for_chints = 0;
			this.latehits();
		};
		this.chints_failed = function() {
			if (this.timeouts.chto != null) {
				this.timeouts.chto = null;
			}
			this.waiting_for_chints = 0;
			this.latehits();
		};
		this.findchints = function() {
			if (typeof navigator.userAgentData == 'object' && typeof navigator.userAgentData.getHighEntropyValues == 'function') {
				try {
					var hints = ["architecture","model","platform","platformVersion","bitness","mobile","wow64","brands","fullVersionList"];
					navigator.userAgentData.getHighEntropyValues(hints).then(this.bind(this.chints_loaded),this.bind(this.chints_failed));
					this.timeouts.chto = this.set_timeout(this.bind(this.chints_failed),10000);
				} catch(e) {
					this.chints_failed();
				};
			} else {
				this.chints_failed();
			}
		};
		this.load_fpdata = function() {
			if (this.waiting_for_consent==0 && this.load_fpdata_started==0) {
				this.load_fpdata_started = 1;
				var domain = new String(document.location.hostname);
				var hcdomain = "hit.gemius.pl";
				if (domain == hcdomain || domain.substr(-hcdomain.length-1) == ("."+hcdomain)) {
					this.fpdata = '';
					this.fpcdomain = '';
					this.fpdata_loaded();
				} else {
					var url = (this.hssl?'https://':'http://')+this.hc+'/fpdata.js?href='+domain;
					url += this.is_gde?'&gde=1':'';
					this.timeouts.sto = this.set_timeout(this.bind(this.scriptto),10000);
					this.append_script(url,this.bind(this.fpdata_loaded),0);
				}
			}
		};
		this.load_lsdata = function() {
			if (this.waiting_for_consent==0 && this.load_lsdata_started==0) {
				this.load_lsdata_started = 1;
				if (this.ssl) {
					this.addframe(1,'get','',this.second_datareceiver);
				} else {
					this.addframe(0,'get','',this.first_datareceiver);
				}
			}
		};
		this.getchromever = function() {
			if (!!window.chrome && (typeof navigator.userAgent == 'string')) {
				var ver = navigator.userAgent.match(/(Chrom(e|ium)|CriOS)\/([0-9]+)\./);
				return (ver==null)?-1:parseInt(ver[3]);
			}
			return -1;
		};
		this.getanticache = function() {
			var dt = new Date();
			var v = new Date(dt.getFullYear(),dt.getMonth(),dt.getDate(),4).getTime()/(3600*1000);
			if (dt.getDay() != 0 || dt.getHours() >= 4) v += (7-dt.getDay())*24;
			return v;
		};
		this.gsconf_loaded = function() {
			if (typeof gemius_gsconf=="object" && gemius_gsconf!=null && gemius_gsconf.publishers && typeof this.src == 'string') {
				var url = new URL(this.src);
				url = url.origin + url.pathname.substr(0, url.pathname.lastIndexOf('/'));
				url += '/mgemius.js?gsver='+this.version+'&v='+this.getanticache();
				this.append_script(url,null,0);
			}
		};
		this.init_timeout = function() {
			if (this.timeouts.initto!=null) {
				this.timeouts.initto = null;
				this.init();
			}
		};
		this.gen_exid = function() {
			var refresh = !(this.exid == '');
			var ts = (new Date()).getTime();
			var exts = Math.floor(ts/1000).toString(16);
			var exrnd = Math.floor(Math.random()*1000000);
			var exuniqueid = ((ts%1000)*1000000 + exrnd).toString(16);
			this.exid = exts + Array(9-exuniqueid.length).join('0') + exuniqueid;
			if (refresh && this.is_gde) {
				this.sync_gde_params();
			}
		};
		this.add_gde_listener = function(callback) {
			this.gde_callbacks[this.gde_callbacks.length] = callback;
			try {
				callback(this.gde_params(), this.gde_params_ready);
			} catch (e) {}
		};
		this.gde_event = function(id) {
			if (this.has_consent && !this.gde_params_ready) {
				if (typeof id == 'string') {
					this.tfp_add_fix({"id":id, "refs":this.ref_params()});
				}
			}
		};
		this.gde_params = function() {
			var params = this.ref_params_obj();
			params.gde = 1;
			if (this.has_consent) {
				params.exid = this.exid;
				if (this.tfp.fpdata != '') {
					params.tfpdata = this.tfp.fpdata;
				}
				if (this.fpdata != '') {
					params.fpdata = this.getrawfpdata();
				}
				if (this.lsdata != '') {
					params.lsdata = this.lsdata;
				}
			}
			return params;
		};
		this.sync_gde_params = function() {
			this.gde_params_ready = (this.has_consent === false) || ((this.tfp.need_sync == 0) && (this.waiting_for_fpdata == 0) && (this.waiting_for_lsdata == 0));
			var params = this.gde_params();
			for (var i=0 ; i<this.gde_callbacks.length ; i++) {
				try {
					this.gde_callbacks[i](params, this.gde_params_ready);
				} catch (e) {}
			}
		};
		this.gde_init = function(params) {
			this.init(params);
		};
		this.init = function(params) {
			if (this.timeouts.initto!=null) {
				if (this.timeouts.initto.to!=null) {
					clearTimeout(this.timeouts.initto.to);
				}
				this.timeouts.initto = null;
			}
			if (this.init_called) {
				return;
			}
			this.init_called = 1;
			if (typeof params == 'object') {
				this.init_params(params);
			} else {
				params = {};
			}
			this.timer_data["lasttime"] = ((new Date()).getTime());
			this.timer_data["tint"] = setInterval(this.bind(this.timer),60*1000);
			if (this.dnt==0 && this.explicit_consent!==false) {
				this.getfpcookie();
				this.waiting_for_fpdata = ((this.fpdata.length>0 && this.fpdata[0]=='-') || this.fpdata=='')?1:0;
			} else {
				this.waiting_for_fpdata = 1;
				this.fpdata = "-DNT";
			}
			try {
				if (this.dnt==0 && this.explicit_consent!==false) {
					this.waiting_for_lsdata = (typeof window.postMessage != 'undefined' && typeof localStorage != 'undefined' && localStorage != null)?1:0;
					if (this.waiting_for_lsdata==0) {
						this.lsdata='-NOTSUP';
					}
				} else {
					this.waiting_for_lsdata = 1;
					this.lsdata = "-DNT";
				}
			} catch (e) {
				this.waiting_for_lsdata = 0;
				this.lsdata='-TURNEDOFF';
			}
			this.require_consent_info = 0;
			if (this.dnt==0 && this.explicit_consent!==false) {
				if (this.explicit_consent===null && this.use_cmp && (typeof gemius_cmpclient == "object") && gemius_cmpclient.find_cmp()) {
					this.cmp_found = 1;
					if (this.cmp_timeout==Infinity) {
						this.require_consent_info = 1;
					} else {
						this.timeouts.cmpto = this.set_timeout(this.bind(this.consentto),this.cmp_timeout);
					}
					gemius_cmpclient.get_consent(this.bind(this.consent_loaded),this.cmp_purposes());
				} else if (this.explicit_consent===null && this.gdpr_params() != '') {
					this.gdpr_found = 1;
					this.timeouts.cmpto = this.set_timeout(this.bind(this.consentto),10000);
					var url = (this.hssl?'https://':'http://')+this.hc+'/gdprdata.js' + this.gdpr_params(true);
					url += this.is_gde?'&gde=1':'';
					this.append_script(url,this.bind(this.gdprdata_loaded),0);
				} else {
					this.waiting_for_consent = 0;
					this.has_consent = true;
					if (this.waiting_for_fpdata) {
						this.load_fpdata();
					}
					if (this.waiting_for_lsdata) {
						this.load_lsdata();
					}
				}
			} else {
				this.waiting_for_consent = 0;
				this.has_consent = false;
				this.waiting_for_fpdata = 1;
				this.fpdata = "-DNT";
			}
			this.paramsready();
			this.latehits();
			this.add_event(document,"mousedown",this.bind(this.mousedown));
			if (this.use_globals) {
				gemius_hit = this.bind(this.plainhit);
				gemius_event = this.bind(this.plainevent);
				pp_gemius_hit = this.bind(this.addscripthit);
				pp_gemius_event = this.bind(this.addscriptevent);
				var p = params;
				if (typeof p['identifier'] == 'undefined' && typeof gemius_identifier == 'undefined' && typeof pp_gemius_identifier == 'undefined') {
					this.sonar_auto_init = (typeof p['sonar_auto_init_disabled'] == 'boolean')?(p['sonar_auto_init_disabled']?0:1):(typeof gemius_sonar_auto_init_disabled == 'boolean')?(gemius_sonar_auto_init_disabled?0:1):(typeof pp_gemius_sonar_auto_init_disabled == 'boolean')?(pp_gemius_sonar_auto_init_disabled?0:1):1;
				}
				try {
					if (typeof gemius_loaded != "undefined") {
						gemius_loaded();
					} else if (typeof pp_gemius_loaded != "undefined") {
						pp_gemius_loaded();
					}
				} catch (e) {}
				this.event_identifier = (typeof p['identifier'] != 'undefined')?p['identifier']:(typeof gemius_identifier != 'undefined')?gemius_identifier:(typeof pp_gemius_identifier != 'undefined')?pp_gemius_identifier:this.event_identifier;
				if (typeof gemius_init_pageview != "undefined") {
					for (var i=0 ; i<gemius_init_pageview.length ; i++) {
						gemius_init_pageview[i](params);
					}
				}
				this.sendpendingdata();
			}
			this.send_bfview();
		};
		this.start = function() {
			if (this.started) {
				return;
			}
			this.started = true;
			if (this.use_globals) {
				gemius_init = this.bind(this.init);
				pp_gemius_init = this.bind(this.init);
				gemius_close = this.bind(function() { this.closing = 1; });
			}
			this.getdntcookie();
			this.getfpcap();
			this.hssl = (this.ssl||this.getchromever()>=67)?1:0;
			this.flashv = this.getflashv();
			this.waiting_on_prerender = 0;
			this.findchints();
			this.findvisapi();
			if (this.visapi_s != '') {
				if (document[this.visapi_s] == 'prerender') {
					this.waiting_on_prerender = 1;
				}
				this.add_event(document,this.visapi_c,this.bind(this.visibilitychanged));
			}
			this.gen_exid();
			if ('onpagehide' in window) {
				this.onpagehide = true;
				this.add_event(window,"pagehide",this.bind(this.pagehide));
				this.add_event(window,"pageshow",this.bind(this.pageshow));
			} else {
				this.add_event(window,"unload",this.bind(this.unload, true));
				this.add_event(window,"beforeunload",this.bind(this.unload, true));
			}
			this.add_event(window,'message',this.bind(this.msgreceiver));
			this.frametype_init();
			this.ref_update();
			this.tfp_init();
			if (this.use_globals) {
				this.pendingdata('gemius_init_pdata',this.init);
				this.pendingdata('pp_gemius_init_pdata',this.init);
				if (!this.init_called) {
					var timeout = (typeof gemius_init_timeout == 'number')?gemius_init_timeout:(typeof pp_gemius_init_timeout == 'number')?pp_gemius_init_timeout:null;
					if (typeof timeout == 'number') {
						if (timeout == Infinity) {
							this.require_consent_info = 1;
						} else {
							this.timeouts.initto = this.set_timeout(this.bind(this.init_timeout),timeout);
						}
					} else {
						gemius_init();
					}
				}
			} else {
				this.require_consent_info = 1;
			}
		};
	}
	/** @define {number} */
	GemiusHitcolConnector.min = 0;
}


(function(name, cmds,flag) {
	var exists = name in window;
	if (!exists) {
		window[name] = new GemiusHitcolConnector(flag);
	}
// gcmd.js 
function define_gemius_cmd(conn_name, cmds) {
	var conn = window[conn_name];
	if (typeof gemius_cmd == 'undefined' || !('_' in gemius_cmd)) {
		gemius_cmd = function() {
			if (!arguments.length || typeof arguments[0] != 'string') {
				return;
			}
			var cmd = arguments[0];
			if (cmd in gemius_cmd) {
				var args = [];
				for (var i = 1; i < arguments.length; ++i) {
					args[args.length] = arguments[i];
				}
				return gemius_cmd[cmd].apply({}, args);
			}
		}
		gemius_cmd._ = 1;
	}
	for (var cmd in cmds) {
		gemius_cmd[cmd] = conn.bind(conn[cmds[cmd]]);
	}
	if (typeof pp_gemius_cmd == 'undefined' || !('_' in pp_gemius_cmd)) {
		pp_gemius_cmd = gemius_cmd;
	}
}
	define_gemius_cmd(name,cmds);
	if (!exists) {
		window[name].start();
	}
})('gemius_hcconn', {'referrer_override':'referrer_override'});
class="sub-menu-item scroll-menu-item vijesti-border-bottom ">
                        <a class="" href="/vijesti/rubrika/komentari/1413.aspx">Komentari</a>
                    </li>
                    <li class="sub-menu-item scroll-menu-item vijesti-border-bottom ">
                        <a class="" href="/vijesti/rubrika/novac/1554.aspx">Novac</a>
                    </li>
            </ul>
            <div class="scroll-menu-arrows display-none">
                <div class="navigation-arrow left-arrow disabled vijesti-text-hover"><i class="index-arrow-left"></i></div>
                <div class="navigation-arrow right-arrow disabled vijesti-text-hover"><i class="index-arrow-right"></i></div>
            </div>
        </div>
    </div>

</header>


        <div class="dfp-left-column">
            

<!-- /21703950087/D_sky_L -->
<div id='D_sky_L' class="js-slot-container" data-css-class="google-box">
    <script>
        googletag.cmd.push(function () {
            googletag.defineSlot('/21703950087/D_sky_L', [[300, 600], [160, 600]], 'D_sky_L').addService(googletag.pubads());
            googletag.display('D_sky_L');
        });
    </script>
</div>
        </div>

    






    


<div class="js-slot-container" data-has-close-btn="true">
    <div class="js-slot-close-btn dfp-close-btn dfp-close-btn-fixed display-none">
        <div class="close-btn-creative">
            <i class="index-close"></i>
        </div>
    </div>

    <!-- /21703950087/D_bottom_sticky_ino -->
    <div id='D_bottom_sticky_ino' class="js-slot-holder" data-css-class="google-box bottom-sticky">
        <script>
            googletag.cmd.push(function () {
                googletag.defineSlot('/21703950087/D_bottom_sticky_ino', [[728, 90], [970, 90], [970, 250]], 'D_bottom_sticky_ino').addService(googletag.pubads());

                googletag.display('D_bottom_sticky_ino');
            });
        </script>
    </div>
</div>




<div class="category-holder">
    <div class="category-content-holder main-container main-content-bg">



<div class="google-billboard-top">
    <!-- /21703950087/DB1 -->
    <div id='DB1' class="js-slot-container" data-css-class="google-box margin-bottom-40">
        <script>
            googletag.cmd.push(function () {
                var db1Slot = googletag.defineSlot('/21703950087/DB1_Vijesti', [[970, 250], [970, 500], [970, 90], [728, 90], [800, 250], [1, 1]], 'DB1').addService(googletag.pubads());

                googletag.display('DB1');
            });
        </script>
    </div>
</div>
        


        <div class="flex">
            <div class="left-part">
                    

    <div class="first-news-holder vertical">
        <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/co2-se-nakuplja-brze-od-potrebnog-za-limitiranje-globalnih-temperatura-na-15c/2530719.aspx">
            <div class="img-holder">
                <img class="main-img" src="https://ip.index.hr/remote/bucket.index.hr/b/index/ec13789a-2dd9-47d8-b3f0-84a4f41c1f27.jpg?width=854&height=443&mode=crop&anchor=topcenter&scale=both" alt="CO2 se nakuplja br&#x17E;e od potrebnog za limitiranje globalnih temperatura na 1.5&#xB0;C" />
            </div>
            <div class="content-holder">
                <h2 class="title">CO2 se nakuplja brže od potrebnog za limitiranje globalnih temperatura na 1.5°C</h2>
                <p class="summary">BRITANSKA meteorolo&#x161;ka slu&#x17E;ba ka&#x17E;e da bi bez biljne i oceanske apsorpcije pove&#x107;anje CO2 bilo dvostruko ve&#x107;e.</p>
            </div>
        </a>
    </div>


                <div class="other-news">
                    <div class="animate-box">
                        <div class="items-container">


<div class="grid-items-list">
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/istrazivanje-britanci-pred-bozic-imali-problema-s-vracanjem-dugova/2530711.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Istra&#x17E;ivanje: Britanci pred Bo&#x17E;i&#x107; imali problema s vra&#x107;anjem dugova" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/52cc353f-6a9b-4181-8291-173a36ce8ac0.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Istraživanje: Britanci pred Božić imali problema s vraćanjem dugova</h3>
                    <span class="summary">OBJAVLJENO je istra&#x17E;ivanje Britanske sredi&#x161;nje banke.</span>
                    <div class="publish-date">19.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/video-uhicen-vodja-meksicke-narkobande-zbog-otmice-cetvorice-amerikanaca/2530706.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="VIDEO Uhi&#x107;en vo&#x111;a meksi&#x10D;ke narkobande zbog otmice &#x10D;etvorice Amerikanaca" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/ed78b7db-34ca-4f03-99f7-a8421a23b699.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title"><span class='title-parsed-text'>VIDEO</span>  Uhićen vođa meksičke narkobande zbog otmice četvorice Amerikanaca</h3>
                    <span class="summary">U TRGOVA&#x10C;KOM centru u Meksiku uhi&#x107;en je Jos&#xE9; Alberto Garc&#xED;a Vilano, poznat kao La Kena.</span>
                    <div class="publish-date">19.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/podaci-o-cijepljenju-protiv-covida-bivseg-brazilskog-predsjednika-su-lazni/2530701.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Podaci o cijepljenju protiv covida biv&#x161;eg brazilskog predsjednika su la&#x17E;ni" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/573d0955-f313-4854-9a88-d0a3d9fd9809.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Podaci o cijepljenju protiv covida bivšeg brazilskog predsjednika su lažni</h3>
                    <span class="summary">JAIR Bolsonaro protivio se cijepljenju protiv covida, a sada su rezultati istrage pokazali da to nije ni u&#x10D;inio dok je bio predsjednik Brazila.</span>
                    <div class="publish-date">19.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/video-prvi-turski-astronaut-i-posada-lansirani-prema-issu/2530697.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="VIDEO Prvi turski astronaut i posada lansirani prema ISS-u" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/9295d250-5cfd-41a5-8854-8ba796bdcc08.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title"><span class='title-parsed-text'>VIDEO</span>  Prvi turski astronaut i posada lansirani prema ISS-u</h3>
                    <span class="summary">O&#x10C;EKUJE se da &#x107;e autonomno upravljani Crew Dragon sti&#x107;i do ISS-a&#xA0;rano u subotu ujutro i pristati uz postaju&#xA0;koja kru&#x17E;i oko 400 km iznad Zemlje.</span>
                    <div class="publish-date">19.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/video-pogodjeno-skladiste-nafte-u-rusiji-izbio-velik-pozar-dize-se-gusti-oblak-dima/2530691.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="VIDEO Pogo&#x111;eno skladi&#x161;te nafte u Rusiji. Izbio velik po&#x17E;ar, di&#x17E;e se gusti oblak dima" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/16d9cbfa-9577-4597-92ed-0ac3e90b38c6.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title"><span class='title-parsed-text'>VIDEO</span>  Pogođeno skladište nafte u Rusiji. Izbio velik požar, diže se gusti oblak dima</h3>
                    <span class="summary">STRELJIVO je palo s ukrajinskog drona na skladi&#x161;te nafte u Brjanskoj oblasti i izazvalo po&#x17E;ar, priop&#x107;io je regionalni guverner Aleksander Bogomaz.</span>
                    <div class="publish-date">19.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/sjeverna-koreja-objavila-da-je-testirala-podvodni-nuklearni-dron/2530682.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Sjeverna Koreja objavila da je testirala podvodni nuklearni dron" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/42b4f526-3faa-40a4-b675-8ad009ee07c6.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Sjeverna Koreja objavila da je testirala podvodni nuklearni dron</h3>
                    <span class="summary">ODGOVOR Sjeverne Koreje na zajedni&#x10D;ke pomorske vje&#x17E;be Ju&#x17E;ne Koreje, SAD-a i Japana.</span>
                    <div class="publish-date">19.1.2024.</div>
                </div>
            </a>
        </div>
</div>                                    


<div class="js-slot-container" data-css-class="ad-container dfp-container">
    <div class="flex no-margin double">
        <!-- /21703950087/DSSF_L -->
        <div id='DSSF_L-0'></div>
        <script>
            googletag.cmd.push(function () {
                var DSSF_L = googletag.defineSlot('/21703950087/DSSF_L_Vijesti', [[300, 250], [1, 1]], 'DSSF_L-0').addService(googletag.pubads());

                googletag.display('DSSF_L-0');
            });
        </script>

        <!-- /21703950087/DSSF_R -->
        <div id='DSSF_R-0'></div>
        <script>
            googletag.cmd.push(function () {
                var DSSF_R = googletag.defineSlot('/21703950087/DSSF_R_Vijesti', [[300, 250], [1, 1]], 'DSSF_R-0').addService(googletag.pubads());

                googletag.display('DSSF_R-0');
            });
        </script>
    </div>
</div>


<div class="grid-items-list">
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/lani-se-utrostrucio-broj-ljudi-koji-su-iz-sjeverne-koreje-pobjegli-u-juznu/2530674.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Lani se utrostru&#x10D;io broj ljudi koji su iz Sjeverne Koreje pobjegli u Ju&#x17E;nu" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/808b3a0e-1de8-4794-95b8-afb11edc7e22.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Lani se utrostručio broj ljudi koji su iz Sjeverne Koreje pobjegli u Južnu</h3>
                    <span class="summary">PRO&#x160;LE godine je iz Sjeverne Koreje najvi&#x161;e pobjeglo ljudi u dvadesetim i tridesetim godinama, a &#x17E;ene su &#x10D;inile oko 80 posto ukupnog broja.</span>
                    <div class="publish-date">19.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/wall-street-porastao-nakon-sto-su-objavljene-optimisticne-prognoze-o-cipovima/2530672.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Wall Street porastao nakon &#x161;to su objavljene optimisti&#x10D;ne prognoze o &#x10D;ipovima" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/55861d7c-9eea-4d0a-8d2f-1d14d02d099b.png?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Wall Street porastao nakon što su objavljene optimistične prognoze o čipovima</h3>
                    <span class="summary">DOW JONES oja&#x10D;ao je 0.54 posto, na 37.468 bodova, dok je S&amp;P 500 porastao 0.88 posto, na 4780 bodova, a Nasdaq indeks 1.35 posto, na 15.055 bodova.</span>
                    <div class="publish-date">19.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/trump-poziva-vrhovni-sud-da-mu-dopusti-sudjelovanje-na-predizborima-u-coloradu/2530670.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Trump poziva Vrhovni sud da mu dopusti sudjelovanje na predizborima u Coloradu" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/c4ad3675-6fc0-467b-a5f8-322a6c28cba0.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Trump poziva Vrhovni sud da mu dopusti sudjelovanje na predizborima u Coloradu</h3>
                    <span class="summary">DONALD Trump &#x17E;eli da mu Vrhovni sud poni&#x161;ti diskvalifikaciju glasovanja u Coloradu.</span>
                    <div class="publish-date">19.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/bidenov-sin-morat-ce-pred-odbore-zastupnickog-doma-koji-istrazuju-opoziv-njegovog-oca/2530668.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Bidenov sin morat &#x107;e pred odbore Zastupni&#x10D;kog doma koji istra&#x17E;uju opoziv njegovog oca" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/b6cb8d85-9347-477b-a49c-95ad0a6baa97.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Bidenov sin morat će pred odbore Zastupničkog doma koji istražuju opoziv njegovog oca</h3>
                    <span class="summary">HUNTER Biden pojavit &#x107;e se 28. velja&#x10D;e pred odborima Zastupni&#x10D;kog doma.</span>
                    <div class="publish-date">19.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/americki-ministar-obrane-danima-skrivao-da-je-u-bolnici-sve-veci-pritisak-na-njega/2530669.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Ameri&#x10D;ki ministar obrane danima skrivao da je u bolnici. Sve ve&#x107;i pritisak na njega" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/078c1b54-339b-4dbc-9b82-b892b95fdc94.png?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Američki ministar obrane danima skrivao da je u bolnici. Sve veći pritisak na njega</h3>
                    <span class="summary">PREDSJEDNIK Odbora za oru&#x17E;ane snage Zastupni&#x10D;koga doma je zatra&#x17E;io od ministra obrane da svjedo&#x10D;i pred vije&#x107;em o tome da nije na vrijeme otkrio svoju nedavnu hospitalizaciju.</span>
                    <div class="publish-date">19.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/video-vodja-huta-biden-je-starac-koji-se-jedva-penje-uz-stepenice/2530657.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="VIDEO Vo&#x111;a Huta: Biden je starac koji se jedva penje uz stepenice" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/66e3e5f1-fb11-430e-b0f5-d1f2fc3150d0.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title"><span class='title-parsed-text'>VIDEO</span>  Vođa Huta: Biden je starac koji se jedva penje uz stepenice</h3>
                    <span class="summary">VO&#x110;A jemenskih Huta ismijavao je Bidena u svom televizijskom govoru.</span>
                    <div class="publish-date">19.1.2024.</div>
                </div>
            </a>
        </div>
</div>                                    


<div class="js-slot-container" data-css-class="ad-container dfp-container">
    <div class="flex no-margin double">
        <!-- /21703950087/DSSF_L -->
        <div id='DSSF_L-1'></div>
        <script>
            googletag.cmd.push(function () {
                var DSSF_L = googletag.defineSlot('/21703950087/DSSF_L_Vijesti', [[300, 250], [1, 1]], 'DSSF_L-1').addService(googletag.pubads());

                googletag.display('DSSF_L-1');
            });
        </script>

        <!-- /21703950087/DSSF_R -->
        <div id='DSSF_R-1'></div>
        <script>
            googletag.cmd.push(function () {
                var DSSF_R = googletag.defineSlot('/21703950087/DSSF_R_Vijesti', [[300, 250], [1, 1]], 'DSSF_R-1').addService(googletag.pubads());

                googletag.display('DSSF_R-1');
            });
        </script>
    </div>
</div>


<div class="grid-items-list">
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/sad-bez-palestinske-drzave-nema-mira-na-bliskom-istoku-netanyahu-nema-sanse/2530648.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="SAD: Bez palestinske dr&#x17E;ave nema mira na Bliskom istoku. Netanyahu: Nema &#x161;anse" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/538e04b9-0d1c-40fb-a1e6-c7b50a241950.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">SAD: Bez palestinske države nema mira na Bliskom istoku. Netanyahu: Nema šanse</h3>
                    <span class="summary">NEMA na&#x10D;ina da se rije&#x161;e dugoro&#x10D;ni sigurnosni izazovi za Izrael i kratkoro&#x10D;ni izazovi ponovne izgradnje Gaze bez uspostave palestinske dr&#x17E;ave, rekao je glasnogovornik ameri&#x10D;kog State Departmenta Matthew Miller.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/izrael-iskopava-leseve-u-gazi-ne-bismo-to-radili-da-hamas-ne-otima-ljude/2530646.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Izrael iskopava le&#x161;eve u Gazi: &quot;Ne bismo to radili da Hamas ne otima ljude&quot;" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/ce00c578-98e1-46a5-a3b2-edbcfcaeefd3.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Izrael iskopava leševe u Gazi: "Ne bismo to radili da Hamas ne otima ljude"</h3>
                    <span class="summary">IZRAELSKA vojska prekopala je groblje u Khan Younisu, u ju&#x17E;noj Gazi, ranije ovog tjedna ekshumiraju&#x107;i i uklanjaju&#x107;i tijela.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/ekvador-poslao-vojsku-da-uspostavi-red-u-zatvoru-iz-kojeg-je-pobjegao-vodja-narkobande/2530642.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Ekvador poslao vojsku da uspostavi red u zatvoru iz kojeg je pobjegao vo&#x111;a narkobande" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/94122732-2866-4821-965e-4c1ec8385760.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Ekvador poslao vojsku da uspostavi red u zatvoru iz kojeg je pobjegao vođa narkobande</h3>
                    <span class="summary">EKVADOR je pokrenuo operaciju u golemom zatvorskom kompleksu u lu&#x10D;kom gradu Guayaquilu.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/sef-una-pozvao-iran-i-pakistan-da-se-suzdrze-od-eskalacije-sukoba/2530635.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="&#x160;ef UN-a pozvao Iran i Pakistan da se suzdr&#x17E;e od eskalacije sukoba" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/55fbad1d-e2ef-480f-a2ed-ac31c8dbbc01.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Šef UN-a pozvao Iran i Pakistan da se suzdrže od eskalacije sukoba</h3>
                    <span class="summary">GLAVNI tajnik Ujedinjenih naroda Antonio Guterres pozvao je Iran i Pakistan da &quot;poka&#x17E;u maksimalnu suzdr&#x17E;anost kako bi izbjegli daljnju eskalaciju napetosti&quot; nakon razmjene vatre&#xA0;izme&#x111;u zemalja, rekao je&#xA0;glasnogovornik UN-a u &#x10D;etvrtak.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/tajlandski-sud-osudio-muskarca-na-50-godina-zatvora-zbog-uvrede-velicanstva/2530629.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Tajlandski sud osudio mu&#x161;karca na 50 godina zatvora zbog &quot;uvrede veli&#x10D;anstva&quot;" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/fc37fc4b-d91c-4a49-a015-1a4e9c0666c6.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Tajlandski sud osudio muškarca na 50 godina zatvora zbog "uvrede veličanstva"</h3>
                    <span class="summary">TAJLANDSKI sud osudio je mu&#x161;karca na 50 godina zatvora zbog komentara koji su okarakterizirani kao vrije&#x111;anje i klevetanje monarhije. To je najvi&#x161;a kazna ikad izre&#x10D;ena prema ozlogla&#x161;enom zakonu o uvredi veli&#x10D;anstva.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/izvjesce-o-velikom-masakru-u-americkoj-skoli-policija-je-zakazala/2530627.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Izvje&#x161;&#x107;e o velikom masakru u ameri&#x10D;koj &#x161;koli: Policija je zakazala" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/d6f1ba05-3401-476f-bb0a-d0aad0a056de.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Izvješće o velikom masakru u američkoj školi: Policija je zakazala</h3>
                    <span class="summary">AMERI&#x10C;KO ministarstvo pravosu&#x111;a objavilo je dugo o&#x10D;ekivano izvje&#x161;&#x107;e o masovnoj pucnjavi u Osnovnoj &#x161;koli Robb u Teksasu 2022.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
</div>                                    


<div class="js-slot-container" data-css-class="ad-container dfp-container">
    <div class="flex no-margin double">
        <!-- /21703950087/DSSF_L -->
        <div id='DSSF_L-2'></div>
        <script>
            googletag.cmd.push(function () {
                var DSSF_L = googletag.defineSlot('/21703950087/DSSF_L_Vijesti', [[300, 250], [1, 1]], 'DSSF_L-2').addService(googletag.pubads());

                googletag.display('DSSF_L-2');
            });
        </script>

        <!-- /21703950087/DSSF_R -->
        <div id='DSSF_R-2'></div>
        <script>
            googletag.cmd.push(function () {
                var DSSF_R = googletag.defineSlot('/21703950087/DSSF_R_Vijesti', [[300, 250], [1, 1]], 'DSSF_R-2').addService(googletag.pubads());

                googletag.display('DSSF_R-2');
            });
        </script>
    </div>
</div>


<div class="grid-items-list">
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/pegasus-airlines-zapoceo-s-letovima-istanbulzagreb/2530620.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Pegasus Airlines zapo&#x10D;eo s letovima Istanbul-Zagreb" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/da2d8d3d-84a2-40c9-8e4a-fe87a5ea5596.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Pegasus Airlines započeo s letovima Istanbul-Zagreb</h3>
                    <span class="summary">VODE&#x106;I turski niskotarifni zrakoplovni prijevoznik Pegasus Airlines danas je zapo&#x10D;eo s izravnim letovima za Zagreb, a na liniji Istanbul-Zagreb prometovat &#x107;e dva puta tjedno - &#x10D;etvrtkom i nedjeljom.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/novi-americki-napad-na-hute-biden-porucio-da-ce-nastaviti-s-napadima/2530613.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Novi ameri&#x10D;ki napad na Hute, Biden poru&#x10D;io da &#x107;e nastaviti s napadima" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/c3b1166a-8cc8-4db8-a740-4a77abd410c4.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Novi američki napad na Hute, Biden poručio da će nastaviti s napadima</h3>
                    <span class="summary">SJEDINJENE Dr&#x17E;ave izvele su rano jutros nove napade na Hute koji su se spremali ispaliti projektile u Crveno more, rekao je novinarima glasnogovornik Bijele ku&#x107;e za nacionalnu sigurnost John Kirby.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/netanyahu-je-protiv-palestinske-drzave-u-bilo-kojem-poslijeratnom-scenariju/2530601.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Netanyahu je protiv palestinske dr&#x17E;ave u bilo kojem poslijeratnom scenariju" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/6f114b92-f9f4-4ce1-9006-c69d0b2c9c03.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Netanyahu je protiv palestinske države u bilo kojem poslijeratnom scenariju</h3>
                    <span class="summary">IZRAELSKI premijer Benjamin Netanyahu rekao je kako je obavijestio SAD da se protivi uspostavi palestinske dr&#x17E;ave kao dijela bilo kakvog poslijeratnog scenarija.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/njemacki-general-nerealno-je-ocekivati-da-ukrajina-vrati-cijeli-okupirani-teritorij/2530591.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Njema&#x10D;ki general: Nerealno je o&#x10D;ekivati da Ukrajina vrati cijeli okupirani teritorij" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/3a0cf6ec-35fb-47ca-96bd-0cb96e8e1247.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Njemački general: Nerealno je očekivati da Ukrajina vrati cijeli okupirani teritorij</h3>
                    <span class="summary">NJEMA&#x10C;KA ne&#x107;e Kijevu isporu&#x10D;iti krstare&#x107;e rakete Taurus, odlu&#x10D;io je Bundestag. Dok neki politi&#x10D;ari i stru&#x10D;njaci me&#x111;unarodnog prava smatraju da Ukrajina njema&#x10D;kim oru&#x17E;jem smije napasti Rusiju, kancelar Scholz je oprezan.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/izrael-kaze-da-je-unistio-dvije-trecine-hamasovih-postrojbi/2530602.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Izrael ka&#x17E;e da je uni&#x161;tio dvije tre&#x107;ine Hamasovih postrojbi" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/c856914c-98e9-4921-96a0-74a0295fdfd6.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Izrael kaže da je uništio dvije trećine Hamasovih postrojbi</h3>
                    <span class="summary">IZRAEL je uni&#x161;tio oko dvije tre&#x107;ine Hamasovih borbenih postrojbi u Gazi, rekao je izraelski premijer Benjamin Netanyahu obvezav&#x161;i se da &#x107;e nastaviti s ratom do &quot;potpune pobjede&quot;.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/video-u-indiji-se-prevrnuo-brod-s-ucenicima-poginulo-najmanje-12-djece/2530595.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="VIDEO U Indiji se prevrnuo brod s u&#x10D;enicima, poginulo najmanje 12 djece" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/ff50dc4c-6945-47dc-8552-baa714cab1e6.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title"><span class='title-parsed-text'>VIDEO</span>  U Indiji se prevrnuo brod s učenicima, poginulo najmanje 12 djece</h3>
                    <span class="summary">LOKALNE vlasti navode da je je tijekom dana&#x161;nje nesre&#x107;e pri kojoj se prevrnuo brod koji je u Indiji  prevozio u&#x10D;enike na &#x161;kolski izlet poginulo najmanje 12 u&#x10D;enika i dvoje u&#x10D;itelja.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
</div>                                    


<div class="js-slot-container" data-css-class="ad-container dfp-container">
    <div class="flex no-margin double">
        <!-- /21703950087/DSSF_L -->
        <div id='DSSF_L-3'></div>
        <script>
            googletag.cmd.push(function () {
                var DSSF_L = googletag.defineSlot('/21703950087/DSSF_L_Vijesti', [[300, 250], [1, 1]], 'DSSF_L-3').addService(googletag.pubads());

                googletag.display('DSSF_L-3');
            });
        </script>

        <!-- /21703950087/DSSF_R -->
        <div id='DSSF_R-3'></div>
        <script>
            googletag.cmd.push(function () {
                var DSSF_R = googletag.defineSlot('/21703950087/DSSF_R_Vijesti', [[300, 250], [1, 1]], 'DSSF_R-3').addService(googletag.pubads());

                googletag.display('DSSF_R-3');
            });
        </script>
    </div>
</div>


<div class="grid-items-list">
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/japan-ce-sutra-pokusati-sletjeti-na-mjesec-ceka-nas-20-minuta-uzasa/2530589.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Japan &#x107;e sutra poku&#x161;ati sletjeti na Mjesec: &quot;&#x10C;eka nas 20 minuta u&#x17E;asa&quot;" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/7e21284c-3e22-4fbb-b45f-397f7beb46a9.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Japan će sutra pokušati sletjeti na Mjesec: "Čeka nas 20 minuta užasa"</h3>
                    <span class="summary">JAPAN &#x107;e sutra oko 16 sati poku&#x161;ati izvesti zahtjevan&#xA0;svemirski manevar i prvi put sletjeti na povr&#x161;inu Mjeseca.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/eurozastupnici-pozvali-na-prekid-vatre-u-gazi/2530584.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Eurozastupnici pozvali na prekid vatre u Gazi" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/98dcee07-0eac-4331-80ea-396a81ff6c7a.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Eurozastupnici pozvali na prekid vatre u Gazi</h3>
                    <span class="summary">EUROZASTSUPNICI su danas pozvali na trajan prekid vatre izme&#x111;u Izraela i palestinskih militanata i tra&#x17E;enje politi&#x10D;kog rje&#x161;enja uz osloba&#x111;anje svih talaca i raspu&#x161;tanje Hamasa.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/nato-mobilizira-90000-vojnika-vjezbat-ce-scenarije-u-slucaju-ruskog-napada/2530575.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="NATO mobilizira 90.000 vojnika. Vje&#x17E;bat &#x107;e scenarije u slu&#x10D;aju ruskog napada" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/504c465a-bef0-4747-8bac-dbd1a55210de.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">NATO mobilizira 90.000 vojnika. Vježbat će scenarije u slučaju ruskog napada</h3>
                    <span class="summary">NATO namjerava mobilizirati 90.000 vojnika za najve&#x107;e vojne vje&#x17E;be&#xA0;Saveza od kraja Hladnog rata radi odvra&#x107;anja ruske agresije, pi&#x161;e danas njema&#x10D;ka agencija dpa.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/cijene-nafte-iznad-78-dolara-cini-se-da-ulagace-ne-brinu-napadi-na-crvenom-moru/2530569.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Cijene nafte iznad 78 dolara. &#x10C;ini se da ulaga&#x10D;e ne brinu napadi na Crvenom moru" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/e809e8d1-e541-4d58-91d0-a2414ad2f75e.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Cijene nafte iznad 78 dolara. Čini se da ulagače ne brinu napadi na Crvenom moru</h3>
                    <span class="summary">TRGOVCI su se fokusirali na procjene IEA i OPEC-a o potra&#x17E;nji u ovoj godini.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/u-skotskoj-osudjene-dvije-casne-sestre-tjerale-su-djecu-da-jedu-povracotinu/2530563.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="U &#x160;kotskoj osu&#x111;ene dvije &#x10D;asne sestre. Tjerale su djecu da jedu povra&#x107;otinu" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/e2b02518-c9eb-403a-9a86-284d55e9b86d.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">U Škotskoj osuđene dvije časne sestre. Tjerale su djecu da jedu povraćotinu</h3>
                    <span class="summary">DVIJE &#x10D;asne sestre&#xA0;i njegovateljica koje su zlostavljale djecu u ozlogla&#x161;enom &#x161;kotskom siroti&#x161;tu osu&#x111;ene su na po tri godine zatvora.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/katar-ocekujemo-manji-proracunski-prihod-zbog-nizih-cijena-nafte/2530560.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Katar: O&#x10D;ekujemo manji prora&#x10D;unski prihod zbog ni&#x17E;ih cijena nafte" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/68995079-0afb-4368-a4f2-fdb99d829f40.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Katar: Očekujemo manji proračunski prihod zbog nižih cijena nafte</h3>
                    <span class="summary">KATAR spada me&#x111;u vode&#x107;e svjetske izvoznike ukapljenog plina i u 2022. zabilje&#x17E;io je rekordan prihod od izvoza budu&#x107;i da su cijene posko&#x10D;ile pod utjecajem ruske invazije na Ukrajinu.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
</div>
                            <div class="read-more-news display-none">


<div class="grid-items-list">
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/europa-nespremna-ceka-povratak-trumpa-morat-ce-se-sama-suociti-s-putinom/2530433.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Europa nespremna &#x10D;eka povratak Trumpa. Morat &#x107;e se sama suo&#x10D;iti s Putinom" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/a8c510d2-8121-4d0a-8ad6-308eb55c49e0.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Europa nespremna čeka povratak Trumpa. Morat će se sama suočiti s Putinom</h3>
                    <span class="summary">NAJVE&#x106;I europski sigurnosni izazov od Hladnog rata - zastra&#x161;uju&#x107;a mogu&#x107;nost da &#x107;e sama, bez potpore SAD-a, morati financirati i naoru&#x17E;avati Ukrajinu - razotkrit &#x107;e velike politi&#x10D;ke razlike na komemoraciji u ponedjeljak koja je trebala simbolizirati solidarnost EU.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/predsjednik-izraela-iz-teherana-proizlazi-carstvo-zla/2530554.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Predsjednik Izraela: Iz Teherana proizlazi carstvo zla" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/92c0b982-9ab2-410c-ae06-e9e124d7e65f.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Predsjednik Izraela: Iz Teherana proizlazi carstvo zla</h3>
                    <span class="summary">IZRAELSKI predsjednik Isaac Herzog upozorio je danas u svom govoru na Svjetskom ekonomskom forumu u Davosu da Iran i milicije koje on&#xA0;podr&#x17E;ava ugro&#x17E;avaju globalnu stabilnost.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/medvedev-ukrajina-je-kancerogena-tvorevina-njezino-postojanje-je-smrtno-opasno/2530528.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Medvedev: Ukrajina je kancerogena tvorevina, njezino postojanje je smrtno opasno" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/4ef6b7fb-718a-4b04-9205-3837568dc51d.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Medvedev: Ukrajina je kancerogena tvorevina, njezino postojanje je smrtno opasno</h3>
                    <span class="summary">DMITRIJ Medvedev, biv&#x161;i ruski predsjednik i premijer, rekao je ju&#x10D;er da &#x107;e uvijek postojati mogu&#x107;nost za sukob izme&#x111;u njegove zemlje i Ukrajine nakon &#x161;to trenutni rat zavr&#x161;i, pi&#x161;e Newsweek.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/kreator-chatgptja-ai-ne-bi-trebala-donositi-odluke-o-zivotu-i-smrti/2530538.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Kreator ChatGPT-ja: AI ne bi trebala donositi odluke o &#x17E;ivotu i smrti" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/3a265c03-8691-45bd-a1ca-f137651c01d0.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Kreator ChatGPT-ja: AI ne bi trebala donositi odluke o životu i smrti</h3>
                    <span class="summary">SAM ALTMANN iz OpenAI-ja je danas na Svjetskom gospodarskom forumu u &#x160;vicarskoj kazao kako &#x107;e ljudi i dalje donositi va&#x17E;ne odluke o svojim &#x17E;ivotima i svjetskim doga&#x111;ajima.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/talijanska-policija-zaplijenila-luksuzni-kompleks-koji-je-pripadao-slavnom-baletanu/2530522.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Talijanska policija zaplijenila luksuzni kompleks koji je pripadao slavnom baletanu" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/7028b1ac-0aa8-4837-8dfc-c268309cdfe2.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Talijanska policija zaplijenila luksuzni kompleks koji je pripadao slavnom baletanu</h3>
                    <span class="summary">LUKSUZNI kompleks na privatnom oto&#x10D;ju nasuprot Amalfijske obale u ju&#x17E;noj Italii, koji je prethodno bio u posjedu slavnog ruskog baletana Rudolfa Nurejeva, zaplijenila je policija zbog kr&#x161;enja zakona o izgradnji, potvrdili su tu&#x17E;itelji.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/americki-sud-zabranio-prodaju-dva-appleova-pametna-sata/2530514.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Ameri&#x10D;ki sud zabranio prodaju dva Appleova pametna sata" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/a80251d2-75ff-424e-ae18-f2351d304fc9.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Američki sud zabranio prodaju dva Appleova pametna sata</h3>
                    <span class="summary">AMERI&#x10C;KI sud zabranio je prodaju dva modela Appleovih pametnih satova u SAD-u.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
</div>                                        


<div class="js-slot-container" data-css-class="ad-container dfp-container">
    <div class="flex no-margin double">
        <!-- /21703950087/DSSF_L -->
        <div id='DSSF_L-5'></div>
        <script>
            googletag.cmd.push(function () {
                var DSSF_L = googletag.defineSlot('/21703950087/DSSF_L_Vijesti', [[300, 250], [1, 1]], 'DSSF_L-5').addService(googletag.pubads());

                googletag.display('DSSF_L-5');
            });
        </script>

        <!-- /21703950087/DSSF_R -->
        <div id='DSSF_R-5'></div>
        <script>
            googletag.cmd.push(function () {
                var DSSF_R = googletag.defineSlot('/21703950087/DSSF_R_Vijesti', [[300, 250], [1, 1]], 'DSSF_R-5').addService(googletag.pubads());

                googletag.display('DSSF_R-5');
            });
        </script>
    </div>
</div>


<div class="grid-items-list">
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/kreditne-agencije-zamrzavanje-ruske-imovine-nece-utjecati-na-izdavatelje-obveznica/2530498.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Kreditne agencije: Zamrzavanje ruske imovine ne&#x107;e utjecati na izdavatelje obveznica" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/4625d8f5-6c0b-48c0-b1ed-a8b115ea57b3.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Kreditne agencije: Zamrzavanje ruske imovine neće utjecati na izdavatelje obveznica</h3>
                    <span class="summary">AKO ZAPADNE vlade odlu&#x10D;e zaplijeniti zamrznute ruske rezerve vrijedne 300 milijardi dolara, to ne bi utjecalo na zemlje izdavatelje obveznica koje je Rusija kupila, smatraju agencije za kreditni rejting Moody&#x27;s i S&amp;P Global.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/latvija-porucila-rusima-u-zemlji-rijesite-svoj-status-ili-cemo-vas-protjerati/2530497.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Latvija poru&#x10D;ila Rusima u zemlji: Rije&#x161;ite svoj status ili &#x107;emo vas protjerati" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/d7113ea0-5ff0-4688-a2e6-1573977eb608.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Latvija poručila Rusima u zemlji: Riješite svoj status ili ćemo vas protjerati</h3>
                    <span class="summary">GOTOVO tisu&#x107;i Rusa koji &#x17E;ive u Latviji kazano je da rije&#x161;e svoj migrantski status u roku od dva tjedna ili svojevoljno odu, a ako ne &#x17E;ele, bit &#x107;e protjerani.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/prodaja-novih-auta-pala-u-europi-u-hrvatskoj-jako-raste/2530483.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Prodaja novih auta pala u Europi, u Hrvatskoj jako raste" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/05d60c6e-8be9-4670-93ec-b9fcd7ea0b3f.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Prodaja novih auta pala u Europi, u Hrvatskoj jako raste</h3>
                    <span class="summary">PRODAJA automobila u EU pala je u prosincu prvi puta u gotovo godinu i pol dana, a Hrvatska je ponovo bilje&#x17E;ila dvoznamenkasti rast, pokazali su danas podaci europske udruge&#xA0;proizvo&#x111;a&#x10D;a automobila ACEA.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/zena-iz-bih-pisala-medjunarodnom-sudu-prezivjela-sam-rat-90ih-zasto-se-ovo-dogadja/2530406.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="&#x17D;ena iz BiH pisala Me&#x111;unarodnom sudu: Pre&#x17E;ivjela sam rat 90-ih. Za&#x161;to se ovo doga&#x111;a?" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/6607dbfc-b9d4-4c7e-b4c6-d6424d4787a7.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Žena iz BiH pisala Međunarodnom sudu: Preživjela sam rat 90-ih. Zašto se ovo događa?</h3>
                    <span class="summary">ARSENA Bulju&#x161;mi&#x107; Kustura, koja je pre&#x17E;ivjela genocid u BiH, poslala je pismo Me&#x111;unarodnom sudu pravde u kojem podsje&#x107;a na problemati&#x10D;nost presedana postavljenog u su&#x111;enje za ratne zlo&#x10D;ine u Srebrenici.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/raste-broj-oboljelih-od-gripe-u-njemackoj/2530472.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Raste broj oboljelih od gripe u Njema&#x10D;koj" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/29f67259-0409-42ac-9f89-9dd944c13eb4.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Raste broj oboljelih od gripe u Njemačkoj</h3>
                    <span class="summary">IZ INSTITUTA Robert Koch ka&#x17E;u da broj prijavljenih infekcija raste iz tjedna u tjedan.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/najveci-svjetski-proizvodjac-sofisticiranih-cipova-s-nizom-dobiti-na-kraju-2023/2530468.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Najve&#x107;i svjetski proizvo&#x111;a&#x10D; sofisticiranih &#x10D;ipova s ni&#x17E;om dobiti na kraju 2023." loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/3c47ffc1-6c5c-4b70-a683-9269bc11fb4a.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Najveći svjetski proizvođač sofisticiranih čipova s nižom dobiti na kraju 2023.</h3>
                    <span class="summary">POTRA&#x17D;NJA za &#x10D;ipovima je oslabila.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
</div>                                        


<div class="js-slot-container" data-css-class="ad-container dfp-container">
    <div class="flex no-margin double">
        <!-- /21703950087/DSSF_L -->
        <div id='DSSF_L-6'></div>
        <script>
            googletag.cmd.push(function () {
                var DSSF_L = googletag.defineSlot('/21703950087/DSSF_L_Vijesti', [[300, 250], [1, 1]], 'DSSF_L-6').addService(googletag.pubads());

                googletag.display('DSSF_L-6');
            });
        </script>

        <!-- /21703950087/DSSF_R -->
        <div id='DSSF_R-6'></div>
        <script>
            googletag.cmd.push(function () {
                var DSSF_R = googletag.defineSlot('/21703950087/DSSF_R_Vijesti', [[300, 250], [1, 1]], 'DSSF_R-6').addService(googletag.pubads());

                googletag.display('DSSF_R-6');
            });
        </script>
    </div>
</div>


<div class="grid-items-list">
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/u-sjevernoj-koreji-gledali-zabranjene-serije-osudjeni-na-12-godina-teskog-rada/2530463.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="U Sjevernoj Koreji gledali zabranjene serije. Osu&#x111;eni na 12 godina te&#x161;kog rada" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/4436f63c-b58e-4aaa-a074-af742204e725.png?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">U Sjevernoj Koreji gledali zabranjene serije. Osuđeni na 12 godina teškog rada</h3>
                    <span class="summary">RIJETKE snimke koje je dobio BBC na korejskom pokazuju kako Sjeverna Koreja javno osu&#x111;uje dvojicu tinejd&#x17E;era na 12 godina te&#x161;kog rada zbog gledanja ju&#x17E;nokorejskih serija.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/rusija-nema-razgovora-o-kontroli-nuklearnog-oruzja-sa-sadom-dok-podrzava-ukrajinu/2530460.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Rusija: Nema razgovora o kontroli nuklearnog oru&#x17E;ja sa SAD-om dok podr&#x17E;ava Ukrajinu" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/160e48f7-5cdc-4caa-bc7b-0c5bdbe89ab7.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Rusija: Nema razgovora o kontroli nuklearnog oružja sa SAD-om dok podržava Ukrajinu</h3>
                    <span class="summary">RUSIJA je poru&#x10D;ila da je nemogu&#x107;e razgovarati o kontroli nuklearnog naoru&#x17E;anja sa SAD-om bez da se uzme u obzir situacija u Ukrajini, optu&#x17E;iv&#x161;i Washington da &#x17E;eli ostvariti vojnu prevlast.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/politico-usprkos-kontroverzama-eu-se-nije-zasitila-cjepiva-protiv-covida/2530451.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Politico: Usprkos kontroverzama, EU se nije zasitila cjepiva protiv covida" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/55892fb1-21fd-42a5-9bbd-3e87da96e168.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Politico: Usprkos kontroverzama, EU se nije zasitila cjepiva protiv covida</h3>
                    <span class="summary">DO LANI, najmanje 215 milijuna doza cjepiva kojima je istekao rok valjanosti ba&#x10D;eno je u sme&#x107;e u zemljama EU.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/prihod-panamskog-kanala-ostro-pao-zbog-suse/2530449.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Prihod Panamskog kanala o&#x161;tro pao zbog su&#x161;e" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/378a3ad1-54a2-4848-a514-77161230dfac.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Prihod Panamskog kanala oštro pao zbog suše</h3>
                    <span class="summary">ZBOG su&#x161;e je nastupilo ograni&#x10D;enje plovidbe.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/danski-brodar-lucki-terminali-na-sjeveru-europe-su-zaguseni/2530443.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Danski brodar: Lu&#x10D;ki terminali na sjeveru Europe su zagu&#x161;eni" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/58739621-338d-444b-aa2e-7bbd8f23073a.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Danski brodar: Lučki terminali na sjeveru Europe su zagušeni</h3>
                    <span class="summary">IZVJE&#x160;TAJ kompanije Moller-Maersk.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/u-njemackoj-zbog-snijega-i-leda-prometni-kolaps-drugi-dan-zaredom/2530428.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="U Njema&#x10D;koj zbog snijega i leda prometni kolaps drugi dan zaredom" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/e219609a-a83d-4e37-83d8-0bc22eda7fd2.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">U Njemačkoj zbog snijega i leda prometni kolaps drugi dan zaredom</h3>
                    <span class="summary">O&#x10C;EKUJE se jo&#x161; snijega u Njema&#x10D;koj.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
</div>                                        


<div class="js-slot-container" data-css-class="ad-container dfp-container">
    <div class="flex no-margin double">
        <!-- /21703950087/DSSF_L -->
        <div id='DSSF_L-7'></div>
        <script>
            googletag.cmd.push(function () {
                var DSSF_L = googletag.defineSlot('/21703950087/DSSF_L_Vijesti', [[300, 250], [1, 1]], 'DSSF_L-7').addService(googletag.pubads());

                googletag.display('DSSF_L-7');
            });
        </script>

        <!-- /21703950087/DSSF_R -->
        <div id='DSSF_R-7'></div>
        <script>
            googletag.cmd.push(function () {
                var DSSF_R = googletag.defineSlot('/21703950087/DSSF_R_Vijesti', [[300, 250], [1, 1]], 'DSSF_R-7').addService(googletag.pubads());

                googletag.display('DSSF_R-7');
            });
        </script>
    </div>
</div>


<div class="grid-items-list">
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/kina-zeli-posredovati-izmedju-irana-i-pakistana/2530412.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Kina &#x17E;eli posredovati izme&#x111;u Irana i Pakistana" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/19d209a5-319c-4834-8ebc-acd54a219f5d.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Kina želi posredovati između Irana i Pakistana</h3>
                    <span class="summary">STRAHUJE se od daljnje eskalacije.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/zelenski-dozivio-ozbiljan-udarac-u-davosu-ostao-bez-zeljenog-sastanka/2530394.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Zelenski do&#x17E;ivio ozbiljan udarac u Davosu. Ostao bez &#x17E;eljenog sastanka" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/36bc7edf-2b8a-41f7-8bd4-281ca981377b.png?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Zelenski doživio ozbiljan udarac u Davosu. Ostao bez željenog sastanka</h3>
                    <span class="summary">UKRAJINSKI &#x10D;elnici nisu skrivali da se ovog tjedna &#x17E;ele sastati s kineskim du&#x17E;nosnicima u &#x160;vicarskoj, ali predsjednik Volodimir Zelenski oti&#x161;ao je ku&#x107;i bez &#x17E;eljenog susreta.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/ovo-je-frankensam-ukrajina-prvi-put-uspjesno-iskoristila-novo-hibridno-oruzje/2530405.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="&quot;Ovo je FrankenSAM&quot;. Ukrajina prvi put uspje&#x161;no iskoristila novo, hibridno oru&#x17E;je" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/748299e4-a268-467a-abf6-e3c6f21fd812.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">"Ovo je FrankenSAM". Ukrajina prvi put uspješno iskoristila novo, hibridno oružje</h3>
                    <span class="summary">UKRAJINSKA vojska izvijestila je o prvoj uspje&#x161;noj upotrebi svojih sustava protuzra&#x10D;ne obrane FrankenSAM tijekom no&#x107;nog napada koji je Rusija pokrenula ju&#x10D;er.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/ukrajinski-ministar-nece-u-francusku-otkazao-posjet-iz-sigurnosnih-razloga/2530392.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Ukrajinski ministar ne&#x107;e u Francusku, otkazao posjet iz sigurnosnih razloga" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/350a55ad-ddba-488d-8b35-428e87fdb540.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Ukrajinski ministar neće u Francusku, otkazao posjet iz sigurnosnih razloga</h3>
                    <span class="summary">UKRAJINSKI ministar obrane Rustem Umerov imat &#x107;e danas videokonferenciju sa svojim francuskim kolegom.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/svedska-trazi-izrucenje-ubojice-vodje-svedskog-kartela-likvidiranog-u-sarajevu/2530378.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="&#x160;vedska tra&#x17E;i izru&#x10D;enje ubojice vo&#x111;e &#x161;vedskog kartela likvidiranog u Sarajevu" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/1d8ddfcd-61bc-4dbc-b556-4e7a719f7485.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Švedska traži izručenje ubojice vođe švedskog kartela likvidiranog u Sarajevu</h3>
                    <span class="summary">UBOJSTVO Harrisa &#xD6;sterdahla dogodilo se prije tri mjeseca u sarajevskom naselju Stup.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/sto-se-to-dogadja-s-iranom-i-pakistanom/2530373.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="&#x160;to se to doga&#x111;a s Iranom i Pakistanom?" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/664832c1-bbd3-4a3d-80b1-50c9ed697752.png?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Što se to događa s Iranom i Pakistanom?</h3>
                    <span class="summary">NAKON rata u Ukrajini, krvavog sukoba Izraela i Hamasa te sve ozbiljnijih napada Huta na trgova&#x10D;ke brodove u Crvenom moru, otvorilo se jo&#x161; jedno krizno &#x17E;ari&#x161;te.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
</div>                                        


<div class="js-slot-container" data-css-class="ad-container dfp-container">
    <div class="flex no-margin double">
        <!-- /21703950087/DSSF_L -->
        <div id='DSSF_L-8'></div>
        <script>
            googletag.cmd.push(function () {
                var DSSF_L = googletag.defineSlot('/21703950087/DSSF_L_Vijesti', [[300, 250], [1, 1]], 'DSSF_L-8').addService(googletag.pubads());

                googletag.display('DSSF_L-8');
            });
        </script>

        <!-- /21703950087/DSSF_R -->
        <div id='DSSF_R-8'></div>
        <script>
            googletag.cmd.push(function () {
                var DSSF_R = googletag.defineSlot('/21703950087/DSSF_R_Vijesti', [[300, 250], [1, 1]], 'DSSF_R-8').addService(googletag.pubads());

                googletag.display('DSSF_R-8');
            });
        </script>
    </div>
</div>


<div class="grid-items-list">
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/video-eksplozija-u-nigeriji-razorila-sedam-kvartova-krov-mi-je-pao-na-majku/2530359.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="VIDEO Eksplozija u Nigeriji razorila sedam kvartova. &quot;Krov mi je pao na majku&quot;" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/d544e02b-7717-4e93-a1a0-31b44cdf0d08.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title"><span class='title-parsed-text'>VIDEO</span>  Eksplozija u Nigeriji razorila sedam kvartova. "Krov mi je pao na majku"</h3>
                    <span class="summary">SMRTONOSNA eksplozija je tijekom no&#x107;i potresla nigerijski grad Ibadan.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/italija-uvodi-stroga-pravila-influencerima-ovo-je-kraj-divljeg-zapada/2530354.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Italija uvodi stroga pravila influencerima: &quot;Ovo je kraj Divljeg zapada&quot;" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/1d6d6353-26de-446e-95da-30600e2c6e34.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Italija uvodi stroga pravila influencerima: "Ovo je kraj Divljeg zapada"</h3>
                    <span class="summary">TALIJANSKI influenceri i ostali kreatori sadr&#x17E;aja na dru&#x161;tvenim mre&#x17E;ama uskoro bi mogli biti vezani istim pravilima kao i tradicionalni mediji kada objavljuju sadr&#x17E;aje na internetu.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/vecina-azijskih-burzi-prati-pad-wall-streeta/2530355.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Ve&#x107;ina azijskih burzi prati pad Wall Streeta" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/44b7489e-f4dd-4ef3-b4ab-6705f7b42f18.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Većina azijskih burzi prati pad Wall Streeta</h3>
                    <span class="summary">RAST gospodarstva u Aziji nije ba&#x161; impresivan.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/zamjenik-njemackog-kancelara-afd-planira-njemacku-pretvoriti-u-diktatorsku-drzavu/2530341.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Zamjenik njema&#x10D;kog kancelara: &quot;AfD planira Njema&#x10D;ku pretvoriti u diktatorsku dr&#x17E;avu&quot;" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/c6843ee2-4513-4c8a-a808-2ba7e7cb6a80.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Zamjenik njemačkog kancelara: "AfD planira Njemačku pretvoriti u diktatorsku državu"</h3>
                    <span class="summary">ZAMJENIK njema&#x10D;kog kancelara Habeck osvrnuo se na nedavni sastanak AfD-a na kojem se navodno raspravljalo o masovnim deportacijama. I dalje traju prosvjedi za zabranu stranke i za&#x161;titu demokracije.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/kanadski-teoreticar-zavjera-optuzivao-vladu-da-podmece-pozare-a-on-ih-sam-podmetao/2530340.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Kanadski teoreti&#x10D;ar zavjera optu&#x17E;ivao vladu da podme&#x107;e po&#x17E;are, a on ih sam podmetao" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/8749a969-14a7-473a-b425-63d3b82cb4ed.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Kanadski teoretičar zavjera optuživao vladu da podmeće požare, a on ih sam podmetao</h3>
                    <span class="summary">TVRDIO je da kanadska vlada podme&#x107;e &#x161;umske po&#x17E;are kako bi ljudi povjerovali u klimatske promjene.</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
        <div class="grid-item ">
            <a class="vijesti-text-hover scale-img-hover" href="/vijesti/clanak/jak-vjetar-radi-probleme-u-prometu-zabrane-na-jadranskoj-magistrali/2530344.aspx">
                <div class="img-holder">
                    <img class="img-responsive" alt="Jak vjetar radi probleme u prometu, zabrane na Jadranskoj magistrali" loading="lazy" src="https://ip.index.hr/remote/bucket.index.hr/b/index/89f2f4c5-d8ce-4024-bcc2-c1265d348f71.jpg?width=250&height=134&mode=crop&anchor=topcenter&scale=both" />
                </div>
                <div class="content">
                    <h3 class="title">Jak vjetar radi probleme u prometu, zabrane na Jadranskoj magistrali</h3>
                    <span class="summary">ZBOG jakog vjetra, dionica Jadranske magistrale izme&#x111;u &#x10D;vorova Prapratno i Zaton Doli otvorena je samo za osobna vozila, a&#xA0;obilazak za ostala vozila je cestom Ston-Zaton Doli, upozoravaju jutros iz&#xA0;Hrvatskog autokluba (HAK).</span>
                    <div class="publish-date">18.1.2024.</div>
                </div>
            </a>
        </div>
</div>                            </div>

                            <div class="btn-read-more" data-offset="0">
                                <div class="read-more-text">PRIKAŽI JOŠ VIJESTI<i class="index-arrow-down vijesti-text"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-part">
                


<!-- /21703950087/Box1 -->
<div id='Box1' class="js-slot-container" data-css-class="google-box bottom-margin-50">
    <script>
        googletag.cmd.push(function () {
            googletag.defineSlot('/21703950087/Box1_vijesti_ino', [[300, 250], [300, 600], [160, 600], [300, 200], [1, 1]], 'Box1').addService(googletag.pubads());

            googletag.display('Box1');
        });
    </script>
</div>


                <div class="category-timeline-holder timeline-holder">
                    <div class="header clearfix">
                        <h2>Vijesti</h2>
                        <div class="periods btn-group">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                danas <i class="index-arrow-down vijesti-text"></i>
                            </a>
                            <ul class="dropdown-menu">
                                    <li class="vijesti-bg-hover" data-value="today">Danas</li>
                                    <li class="vijesti-bg-hover" data-value="yesterday">Ju&#x10D;er</li>
                                    <li class="vijesti-bg-hover" data-value="week">Zadnjih 7 dana</li>
                                    <li class="vijesti-bg-hover" data-value="month">Zadnjih 30 dana</li>
                            </ul>
                        </div>
                    </div>
                    <div class="most-read-holder">
                        

    <div class="timeline-content most-read">
        <ul>
                <li class="clearfix">
                    <div class="side-content text-center vijesti-text">
                        <span class="num">1</span>
                    </div>
                    <div class="title-box">
                        <a class="vijesti-text-hover" href="/vijesti/clanak/video-kombi-s-32-migranta-probio-rampu-na-luckom-objavljeni-svi-detalji-potjere/2530698.aspx?index_ref=_vijesti_najcitanije_d">
                            <span class='title-parsed-text'>VIDEO</span>  Kombi s 32 migranta probio rampu na Lučkom. Objavljeni svi detalji potjere
                        </a>
                        <div class="line" style="width: 90%;"></div>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="side-content text-center vijesti-text">
                        <span class="num">2</span>
                    </div>
                    <div class="title-box">
                        <a class="vijesti-text-hover" href="/vijesti/clanak/snijeg-pada-diljem-zemlje-na-cestama-zimski-uvjeti-negdje-zabranjen-promet/2530667.aspx?index_ref=_vijesti_najcitanije_d">
                            Snijeg pada diljem zemlje. Na cestama zimski uvjeti, negdje zabranjen promet
                        </a>
                        <div class="line" style="width: 81%;"></div>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="side-content text-center vijesti-text">
                        <span class="num">3</span>
                    </div>
                    <div class="title-box">
                        <a class="vijesti-text-hover" href="/vijesti/clanak/vozili-smo-se-zagrebom-neke-zetove-linije-u-prekidu-ralice-redovito-ciste-ceste/2530689.aspx?index_ref=_vijesti_najcitanije_d">
                            Vozili smo se Zagrebom, neke ZET-ove linije u prekidu. Ralice redovito čiste ceste
                        </a>
                        <div class="line" style="width: 72%;"></div>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="side-content text-center vijesti-text">
                        <span class="num">4</span>
                    </div>
                    <div class="title-box">
                        <a class="vijesti-text-hover" href="/vijesti/clanak/upucao-splitskog-kriminalca-pa-ga-bacio-na-smetliste-da-umre-sud-nije-bilo-okrutno/2530705.aspx?index_ref=_vijesti_najcitanije_d">
                            Upucao splitskog kriminalca pa ga bacio na smetlište da umre. Sud: Nije bilo okrutno
                        </a>
                        <div class="line" style="width: 63%;"></div>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="side-content text-center vijesti-text">
                        <span class="num">5</span>
                    </div>
                    <div class="title-box">
                        <a class="vijesti-text-hover" href="/vijesti/clanak/stanovnici-kornata-pod-terorom-cagljeva-u-50-godina-ne-pamtim-ovakve-krvave-pirove/2530675.aspx?index_ref=_vijesti_najcitanije_d">
                            Čagljevi postali noćna mora na Kornatima. "Više se ne boje, ne čekaju noć"
                        </a>
                        <div class="line" style="width: 54%;"></div>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="side-content text-center disabled-text">
                        <span class="num">6</span>
                    </div>
                    <div class="title-box">
                        <a class="vijesti-text-hover" href="/vijesti/clanak/vrhovni-sud-odlucio-nakon-snimke-koja-je-zabrinula-italiju-neofasisti-slave-pobjedu/2530680.aspx?index_ref=_vijesti_najcitanije_d">
                            Nakon snimke koja je uznemirila Italiju, neofašisti slave "povijesnu pobjedu"
                        </a>
                        <div class="line" style="width: 45%;"></div>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="side-content text-center disabled-text">
                        <span class="num">7</span>
                    </div>
                    <div class="title-box">
                        <a class="vijesti-text-hover" href="/vijesti/clanak/video-pogodjeno-skladiste-nafte-u-rusiji-izbio-velik-pozar-dize-se-gusti-oblak-dima/2530691.aspx?index_ref=_vijesti_najcitanije_d">
                            <span class='title-parsed-text'>VIDEO</span>  Pogođeno skladište nafte u Rusiji. Izbio velik požar, diže se gusti oblak dima
                        </a>
                        <div class="line" style="width: 36%;"></div>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="side-content text-center disabled-text">
                        <span class="num">8</span>
                    </div>
                    <div class="title-box">
                        <a class="vijesti-text-hover" href="/vijesti/clanak/video-vodja-huta-biden-je-starac-koji-se-jedva-penje-uz-stepenice/2530657.aspx?index_ref=_vijesti_najcitanije_d">
                            <span class='title-parsed-text'>VIDEO</span>  Vođa Huta: Biden je starac koji se jedva penje uz stepenice
                        </a>
                        <div class="line" style="width: 27%;"></div>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="side-content text-center disabled-text">
                        <span class="num">9</span>
                    </div>
                    <div class="title-box">
                        <a class="vijesti-text-hover" href="/vijesti/clanak/bolesti-haraju-hrvatskom-korona-i-hripavac-u-padu-stize-vrhunac-gripe/2530112.aspx?index_ref=_vijesti_najcitanije_d">
                            Bolesti haraju Hrvatskom. Korona i hripavac u padu, stiže vrhunac gripe
                        </a>
                        <div class="line" style="width: 18%;"></div>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="side-content text-center disabled-text">
                        <span class="num">10</span>
                    </div>
                    <div class="title-box">
                        <a class="vijesti-text-hover" href="/vijesti/clanak/prije-2-dana-dobio-20-godina-zbog-ubojstva-mladica-u-segetu-a-sada-ga-policija-trazi/2530724.aspx?index_ref=_vijesti_najcitanije_d">
                            Prije 2 dana dobio 20 godina zbog ubojstva mladića u Segetu, a sada ga policija traži
                        </a>
                        <div class="line" style="width: 9%;"></div>
                    </div>
                </li>
        </ul>
        <a class="more-news" href="/najcitanije?kategorija=3">Prikaži još vijesti</a>
    </div>

                    </div>
                </div>
                <div class="separator-55"></div>
                


<!-- /21703950087/Box2 -->
<div id='Box2' class="js-slot-container" data-css-class="google-box bottom-margin-50">
    <script>
        googletag.cmd.push(function () {
            googletag.defineSlot('/21703950087/Box2_vijesti_ino', [[300, 250], [300, 600], [160, 600], [300, 200], [1, 1]], 'Box2').addService(googletag.pubads());

            googletag.display('Box2');
        });
    </script>
</div>

                <div class="separator-50"></div>
                <div class="fb-page" data-href="https://www.facebook.com/IndexVijesti/" data-tabs="timeline" data-height="385" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false">
                    <blockquote cite="https://www.facebook.com/IndexVijesti/" class="fb-xfbml-parse-ignore">
                        <a href="https://www.facebook.com/IndexVijesti/">Index.hr</a>
                    </blockquote>
                </div>
                <div class="separator-50"></div>
                <div class="sticky">
                    


<!-- /21703950087/DSF_sticky -->
<div id='DSF_sticky' class="js-slot-container" data-css-class="google-box">
    <script>
        googletag.cmd.push(function () {
            googletag.defineSlot('/21703950087/DSF_sticky_vijesti', [[300, 600], [300, 250], [1, 1]], 'DSF_sticky').addService(googletag.pubads());

            googletag.display('DSF_sticky');
        });
    </script>
</div>
                </div>
            </div>
        </div>

        


<!-- /21703950087/DSF5 -->
<div id='DSF5' class="js-slot-container" data-css-class="google-box top-margin-50">
    <script>
        googletag.cmd.push(function () {
            googletag.defineSlot('/21703950087/DSF5_Vijesti', [[970, 90], [970, 250], [970, 500], [728, 90], [800, 250], [1, 1]], 'DSF5').addService(googletag.pubads());

            googletag.display('DSF5');
        });
    </script>
</div>
    </div>
</div>



        <div class="dfp-right-column">
            

<!-- /21703950087/D_sky_R -->
<div id='D_sky_R' class="js-slot-container" data-css-class="google-box">
    <script>
        googletag.cmd.push(function () {
            googletag.defineSlot('/21703950087/D_sky_R', [[300, 600], [160, 600]], 'D_sky_R').addService(googletag.pubads());
            googletag.display('D_sky_R');
        });
    </script>
</div>
        </div>

    


<div class="popup-overlay-container js-login-popup display-none">
    <div class="popup-holder comments-login-popup-holder">
        <div class="btn-close-popup" close-popup>
            <i class="index-close"></i>
        </div>

        <div class="main-title">
            Prijavite se
        </div>

        <div class="login-section">
            <div class="section-label">
                Brza prijava
            </div>
            <div class="section-desc">
                (traje par sekundi)
            </div>
            <div class="login-social-holder flex">
                <a class="social-btn fb flex" onclick="accountService.Login('/profil/prijava?auth_action=login-facebook&amp;redirectUrl=https%3A%2F%2Fwww.index.hr%2Fvijesti%2Frubrika%2Fsvijet%2F23.aspx')">
                    <img src="/Content/img/login/fb.svg" /> Facebook
                </a>
                <a class="social-btn google flex" onclick="accountService.Login('/profil/prijava?auth_action=login-google&amp;redirectUrl=https%3A%2F%2Fwww.index.hr%2Fvijesti%2Frubrika%2Fsvijet%2F23.aspx')">
                    <img src="/Content/img/login/google.svg" /> Google
                </a>
            </div>
        </div>

        <div class="login-section">
            <div class="section-label">Prijava emailom</div>
            <form class="login-form" action="/profil/prijava?redirectUrl=https%3A%2F%2Fwww.index.hr%2Fvijesti%2Frubrika%2Fsvijet%2F23.aspx" method="post" onsubmit="accountService.OnLoginFormSubmit()">

                <div class="input-holder">
                    <i class="index-mail3"></i>
                    <input type="email" class="input-field" required name="login_hint" placeholder="Unesite email" value="" />
                </div>
                <div class="description">Ako već niste registirani, poslat ćemo vam email s linkom za nastavak registracije.</div>
                <button class="login-btn" type="submit">Prijavite se</button>
            </form>
        </div>

        <div class="disclaimer-holder">
            Kreiranjem i prijavom na račun slažete se s našim <br>
            <a href="https://www.index.hr/uvjeti-koristenja">Uvjetima korištenja</a> i <a href="https://www.index.hr/uvjeti-koristenja#pravila-o-zastiti-privatnosti">Pravilima o privatnosti</a>
        </div>
    </div>
</div>

    <footer>
        <footer class="main-footer main-container main-content-bg clearfix">
    <a class="logo" href="/"><img class="logo-img" src="/Content/img/logo/logo_footer_196x29.svg" /></a>
    <nav class="list-holder flex">
        <ul>
            <li class="heading">
                <a class="vijesti-text-hover" href="/vijesti">
                    Vijesti
                </a>
            </li>
            <li>
                <a class="vijesti-text-hover" href="/vijesti/rubrika/hrvatska/22.aspx">
                    Hrvatska
                </a>
            </li>
            <li>
                <a class="vijesti-text-hover" href="/vijesti/rubrika/zagreb/1553.aspx">
                    Zagreb
                </a>
            </li>
            <li>
                <a class="vijesti-text-hover" href="/vijesti/rubrika/regija/1540.aspx">
                    Regija
                </a>
            </li>
            <li>
                <a class="vijesti-text-hover" href="/vijesti/rubrika/eu/5040.aspx">
                    EU
                </a>
            </li>
            <li>
                <a class="vijesti-text-hover" href="/vijesti/rubrika/svijet/23.aspx">
                    Svijet
                </a>
            </li>
            <li>
                <a class="vijesti-text-hover" href="/vijesti/rubrika/znanost/1722.aspx">
                    Znanost
                </a>
            </li>
            <li>
                <a class="vijesti-text-hover" href="/vijesti/rubrika/crna-kronika/46.aspx">
                    Crna kronika
                </a>
            </li>
            <li>
                <a class="vijesti-text-hover" href="/vijesti/rubrika/komentari/1413.aspx">
                    Komentari
                </a>
            </li>
            <li>
                <a class="vijesti-text-hover" href="/vijesti/rubrika/novac/1554.aspx">
                    Novac
                </a>
            </li>
        </ul>
        <ul>
            <li class="heading">
                <a class="sport-text-hover" href="/sport">
                    Sport
                </a>
            </li>
            <li>
                <a class="sport-text-hover" href="/sport/rubrika/nogomet/1638.aspx">
                    Nogomet
                </a>
            </li>
            <li>
                <a class="sport-text-hover" href="/sport/rubrika/transferi/1650.aspx">
                    Transferi
                </a>
            </li>
            <li>
                <a class="sport-text-hover" href="/sport/rubrika/kosarka/1639.aspx">
                    Košarka
                </a>
            </li>
            <li>
                <a class="sport-text-hover" href="/sport/rubrika/tenis/1640.aspx">
                    Tenis
                </a>
            </li>
            <li>
                <a class="sport-text-hover" href="/sport/rubrika/regija/1692.aspx">
                    Regija
                </a>
            </li>
            <li>
                <a class="sport-text-hover" href="/sport/rubrika/komentari/1738.aspx">
                    Komentari
                </a>
            </li>
            <li>
                <a class="sport-text-hover" href="/sport/rubrika/borilacki-sportovi/1662.aspx">
                    Borilački sportovi
                </a>
            </li>
            <li>
                <a class="sport-text-hover" href="/sport/rubrika/ostali-sportovi/1641.aspx">
                    Ostali sportovi
                </a>
            </li>
        </ul>
        <ul>
            <li class="heading">
                <a class="magazin-text-hover" href="/magazin">
                    Magazin
                </a>
            </li>
            <li>
                <a class="shopping-text-hover" href="/shopping">
                    Shopping
                </a>
            </li>
            <li>
                <a class="ljubimci-text-hover" href="/ljubimci">
                    Ljubimci
                </a>
            </li>

            <li>
                <a class="food-text-hover" href="/food">
                    Food
                </a>
            </li>
            <li>
                <a class="mame-text-hover" href="/mame">
                    Mame
                </a>
            </li>
            <li>
                <a class="auto-text-hover" href="/auto">
                    Auto
                </a>
            </li>
            <li>
                <a class="fit-text-hover" href="/fit">
                    Fit
                </a>
            </li>
            <li>
                <a class="chill-text-hover" href="/chill">
                    Chill
                </a>
            </li>
            <li>
                <a class="horoskop-text-hover" href="/horoskop">
                    Horoskop
                </a>
            </li>
        </ul>
        <ul>
            <li class="heading">
                Plus
            </li>
            <li><a class="oglasi-text-hover" href="https://www.index.hr/oglasi/">Oglasi</a></li>
            <li><a class="recepti-text-hover" href="https://recepti.index.hr/">Recepti</a></li>
            <li><a class="lajkhr-text-hover" href="http://www.index.hr/lajk/">Lajk.hr</a></li>
            <li><a class="odgovori-text-hover" href="https://odgovori.index.hr/">Odgovori</a></li>
        </ul>
        <ul>
            <li class="heading">
                Info
            </li>
            <li>
                <a class="main-text-hover" href="/info/tecaj">
                    Tečaj
                </a>
            </li>
            <li>
                <a class="main-text-hover" href="/info/tv">
                    TV program
                </a>
            </li>
            <li>
                <a class="main-text-hover" href="/info/kino">
                    Kino
                </a>
            </li>
            <li>
                <a class="main-text-hover" href="/info/vrijeme">
                    Vrijeme
                </a>
            </li>
            <li>
                <a class="main-text-hover" href="/rss/info">
                    RSS
                </a>
            </li>
        </ul>
        <ul>
            <li class="heading">
                PRATITE NAS
            </li>
            <li>
                <a href="https://www.facebook.com/index.hr/" target="_blank" class="main-text-hover flex flex-align-items-center"><i class="facebook index-facebook"></i>Facebook</a>
            </li>
            <li>
                <a href="https://www.youtube.com/channel/UCUp6H4ko32XqnV_6MOPunBA" target="_blank" class="main-text-hover flex flex-align-items-center"><i class="youtube index-youtube"></i>Youtube</a>
            </li>
            <li>
                <a href="https://instagram.com/index.hr" target="_blank" class="main-text-hover flex flex-align-items-center"><i class="instagram index-instagram"></i>Instagram</a>
            </li>
            <li>
                <a href="https://www.tiktok.com/@index.hr" target="_blank" class="main-text-hover flex flex-align-items-center"><i class="tiktok index-tiktok"></i>TikTok</a>
            </li>
            <li><a href="/posaljite-pricu" class="main-text-hover">Pošaljite nam vijest </a></li>
            <li><a href="/newsletter" class="main-text-hover">Newsletter</a></li>
        </ul>
    </nav>
    <ul class="impressum">
        <li><a href="https://cjenik.index.hr">Oglašavanje</a></li>
        <li><a href="https://jobs.index.hr/">Zaposli se na Indexu</a></li>
        <li><a href="/kontakt">Kontakt</a></li>
        <li><a href="/impressum">Impressum</a></li>
        <li><a href="/uvjeti-koristenja">Uvjeti korištenja</a></li>
        <li>
            <a href="javascript:Didomi.preferences.show()">
                Postavke kolačića
            </a>
        </li>
        <li>
            © 2024 Index
            <div class="fb-like" data-href="https://www.facebook.com/index.hr/" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="false"></div>
        </li>
    </ul>
</footer>

    </footer>

    
    

<script type="text/javascript">
    /* <![CDATA[ */
    (function () {
        window.dm = window.dm || { AjaxData: [] };
        window.dm.AjaxEvent = function (et, d, ssid, ad) {
            dm.AjaxData.push({ et: et, d: d, ssid: ssid, ad: ad });
            window.DotMetricsObj && DotMetricsObj.onAjaxDataUpdate();
        };
        var d = document,
            h = d.getElementsByTagName('head')[0],
            s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://script.dotmetrics.net/door.js?id=12269';
        h.appendChild(s);
    }());
    /* ]]> */
</script>


    <script>
        var mostReadUrl = '/Category/MostReadNews?categoryId=3&categorySlug=vijesti&timerange=%25timerange%25';

        categoryService.InitAll();
    </script>


    <script>
        // Google analytics tracking
        ga('set', 'anonymizeIp', true);
        ga('send', 'pageview');

        googleEventService.CreateCustomEvent("ab_fifty-fifty", "");

        googleEventService.CreateCustomEventGA4("layout", "ab_fifty-fifty", "");
        googleEventService.CreateCustomEventGA4("user_data", "ab_fifty-fifty", "");

        // if ad block detected send event
        if (window.indexCanRunAds === undefined) {
            googleEventService.CreateCustomEvent("ad_block_detected", "true");

            googleEventService.CreateCustomEventGA4("layout", "ad_block_detected", "true");
        }

        var abCookieUrl = '/setabcookie';

        //imageLazyLoadService.Init();
        globalDirectives.InitAll();
        layoutService.InitAll();

        layoutService.SetCurrentUrl('https%3A%2F%2Fwww.index.hr%2Fvijesti%2Frubrika%2Fsvijet%2F23.aspx');
    </script>

    <script defer src="/lib/alpinejs/cdn.min.js"></script>

    
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon='{"rayId":"847eac6aefc5867e","b":1,"version":"2024.1.0","token":"4435aa6f0d584c21a8a03c5c6cd581e7"}' crossorigin="anonymous"></script>
</body>
</html>