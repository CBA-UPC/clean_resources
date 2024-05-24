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
			this.hc = (typeof gemius_hitcollector === 'string')?gemius_hitcollector:(typeof pp_gemius_hitcollector === 'string')?pp_gemius_hitcollector:'prefix.hit.gemius.pl';
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
			this.hc = 'prefix.hit.gemius.pl';
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
(event.slot) && window.anchorSlot) {
                    emptySlots.push(event.slot);
                }
            });

            
                const videoUrlParams = window.AdviewAdsTag.videoUrlParams()
                
                    if(dfpParams && dfpParams.video && dfpParams.video.preroll && typeof dfpParams.video.preroll === 'string'){
                        dfpParams.video.preroll = dfpParams.video.preroll.replace('%26dystrybutor', videoUrlParams + '%26dystrybutor');
                        dfpParams.video.preroll = dfpParams.video.preroll.replace('[adview_hostname]', escape('wiadomosci.gazeta.pl'));
                        dfpParams.video.preroll = dfpParams.video.preroll.replace('[cb]', window.AG.rodoAccepted);
                        dfpParams.video.preroll = dfpParams.video.preroll.replace('[locationhref]', escape(window.location.href));
                        dfpParams.video.midroll = dfpParams.video.preroll.replace('090-PREROLL&', '090-MIDROLL&');
                    }
                    
                        if (dfpParams && dfpParams.video && dfpParams.video.audio && typeof dfpParams.video.audio === 'string') {
                            dfpParams.video.audio = dfpParams.video.audio.replace('%26dystrybutor', videoUrlParams + '%26dystrybutor');
                            dfpParams.video.audio = dfpParams.video.audio.replace('[adview_hostname]', escape('wiadomosci.gazeta.pl'));
                            dfpParams.video.audio = dfpParams.video.audio.replace('[cb]', window.AG.rodoAccepted);
                            dfpParams.video.audio = dfpParams.video.audio.replace('[locationhref]', escape(window.location.href));
                        }
                    

            googletag.pubads().setTargeting('kw', AdviewAdsTag.kwTargeting);
            //googletag.pubads().setTargeting('prebid_set', ['s2']);

            
            googletag.pubads().enableSingleRequest();
            
            googletag.pubads().disableInitialLoad();

            googletag.enableServices();

            
                    function runAnchor() {
                        if(window.anchorSlot) {
                            setTimeout(() => {
                                const isPremiumboardDefined = Boolean(window.dfp_slot_201_premiumboard || window.dfp_slot_201_premiumboard_mobi);
                                const isPremiumboardEmpty = emptySlots.includes(window.dfp_slot_201_premiumboard || window.dfp_slot_201_premiumboard_mobi);
                                const isToplayerDefined = Boolean(window.dfp_slot_019_toplayer || window.dfp_slot_019_toplayer_mobi)
                                const isToplayerEmpty = emptySlots.includes(window.dfp_slot_019_toplayer || window.dfp_slot_019_toplayer_mobi);

                                const isBothSlotsEmpty = isPremiumboardEmpty && isToplayerEmpty;
                                const isPremiumboardEmptyOnly = isPremiumboardEmpty && !isToplayerDefined;
                                const isToplayerEmptyOnly = isToplayerEmpty && !isPremiumboardDefined;

                                if(emptySlots.length > 0 && (isBothSlotsEmpty || isPremiumboardEmptyOnly || isToplayerEmptyOnly)) {
                                    const interval = setInterval(checkFixedElement, 1000);

                                    if(checkFixedElement()) {
                                        googletag.pubads().refresh([anchorSlot]);
                                    }

                                    function checkFixedElement() {
                                        const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
                                        const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
                                        const elements = document.elementsFromPoint(viewportWidth - 40, viewportHeight - 40);

                                        const noElementAtBottom = elements.every(el => {
                                            const position = window.getComputedStyle(el).getPropertyValue('position');
                                            if(['fixed', 'sticky'].includes(position) && !el.closest('.adviewDFPBanner') && !el.id.includes('ANCHOR')) {
                                                return false;
                                            }
                                            return true;
                                        });

                                        if(!noElementAtBottom) {
                                            googletag.destroySlots([anchorSlot]);
                                            clearInterval(interval);
                                        }

                                        return noElementAtBottom;
                                    }
                                }
                            }, 1000);
                        }
                    }

                    runAnchor();
                
                console.log('Google refresh');
                googletag.pubads().refresh([
                    
                            dfp_slot_003_rectangle,
                        
                            dfp_slot_019_toplayer,
                        
                            dfp_slot_001_topboard,
                        
                ]);
            
        });
    </script>


<!--410355753, [ /tpl/ads/prod/dfpHeader-2.1.jsp ], dfpBanersHeaderBean-->
</head>

    <!--/ AB :  :  : -->
    <body id="pageTypeId_0" class="firefoxGeckofirefox_45WINDOWS_NT6.1 simpleArt ">

        <script>
            if (window.dfpParams) {
                if (!window.dfpParams.slots || !Object.keys(window.dfpParams.slots).length) {
                    dfpParams.slots = {};
                    document.body.classList.add('noAds');
                }
            }
        </script>
        <div id="adUnit-019-TOPLAYER" class="adviewDFPBanner DFP-019-TOPLAYER">
        <span class="banLabel" style="display: none;">REKLAMA</span>
        <div id='div-gpt-ad-019-TOPLAYER-0'>
            <script type='text/javascript'>
                if(dfpParams.slots['019-TOPLAYER'] && dfpParams.slots['019-TOPLAYER'].autoLoad) {
                    if (window.adviewDFP && adviewDFP.scrollSlot) adviewDFP.scrollSlot.push('019-TOPLAYER');
                    if (window.AdviewAdsTag) window.AdviewAdsTag.autoLoadSlot.push('019-TOPLAYER');
                } else if (!dfpParams.slots['019-TOPLAYER']) {
                    if ('019-TOPLAYER'.includes('TOPBOARD')) {
                        const el = document.getElementById('adUnit-019-TOPLAYER');
                        if (el && el.parentNode.className.includes('ban') && el.parentNode.className.includes('wrapper')) {
                            el.parentNode.remove();
                        }
                    }
                } else {
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-019-TOPLAYER-0'); });
                }
            </script>
        </div>
    </div>
<!-- v1.0 -->
<!--410360849, [ /tpl/ads/prod/dfpSlotScripts.jsp ], dfpBanersSlotScriptsBean-->
<!-- v2.2.2 -->
<!--410360848, [ /tpl/ads/prod/dfpSlot.jsp ], dfpBanersSlotBean-->
<div id="adUnit-201-PREMIUMBOARD" class="adviewDFPBanner DFP-201-PREMIUMBOARD">
        <span class="banLabel" style="display: none;">REKLAMA</span>
        <div id='div-gpt-ad-201-PREMIUMBOARD-0'>
            <script type='text/javascript'>
                if(dfpParams.slots['201-PREMIUMBOARD'] && dfpParams.slots['201-PREMIUMBOARD'].autoLoad) {
                    if (window.adviewDFP && adviewDFP.scrollSlot) adviewDFP.scrollSlot.push('201-PREMIUMBOARD');
                    if (window.AdviewAdsTag) window.AdviewAdsTag.autoLoadSlot.push('201-PREMIUMBOARD');
                } else if (!dfpParams.slots['201-PREMIUMBOARD']) {
                    if ('201-PREMIUMBOARD'.includes('TOPBOARD')) {
                        const el = document.getElementById('adUnit-201-PREMIUMBOARD');
                        if (el && el.parentNode.className.includes('ban') && el.parentNode.className.includes('wrapper')) {
                            el.parentNode.remove();
                        }
                    }
                } else {
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-201-PREMIUMBOARD-0'); });
                }
            </script>
        </div>
    </div>
<!-- v2.2.2 -->
<!--410357012, [ /tpl/ads/prod/dfpSlot.jsp ], dfpBanersSlotBean-->

<!--410355769, [ null ], aggregatorModule-->
<!--patternin: app21:tomcat-serwisy: - 30 - 6000000 - LegoIndex - /tpl/prod/root/template_root -->

<!--410355738, [ /tpl/prod/portal/patternInfo.jsp ], null-->
<!-- top_2021_test v0.9 isMobile:false, isArticle:false -->

<div class="DFP-premiumBoardReservedPlace"></div>
    <div class="top_wrapper navigationWithAdsPass">
    <div id="DFP_PREMIUMBOARD" class="DFPbannerPartnerWrapper DFP-premiumBoardReservedPlace" style="background-color: #fff;"></div>
    <!-- hat_2021_desktop v0.2 isShutDown:false/aliasy/cap/wiadomosci -->
<header class="main-navigation">
        <div class="main-navigation__outer-nav">
<div class="main-navigation__inner-wrapper">
<div class="main-navigation__logo">
<a href="https://www.gazeta.pl/0,0.html#e=CapLogoG" id="LinkArea:CapLogoG" title="GAZETA.pl - Wiadomo¶ci, Rozrywka, Forum, Poczta">
<svg class="main-navigation__icon" style="width: 106px" x="0px" y="0px" viewBox="0 0 254 60" style="enable-background:new 0 0 254 60;" xml:space="preserve">
<g><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="72.128" y1="51.3644" x2="10.1928" y2="-10.5708"><stop offset="0" style="stop-color:#FF4282"></stop><stop offset="0.1292" style="stop-color:#FF3365"></stop><stop offset="0.4085" style="stop-color:#FF0D1A"></stop><stop offset="0.5" style="stop-color:#FF0000"></stop><stop offset="0.7076" style="stop-color:#FF361F"></stop><stop offset="0.9019" style="stop-color:#FF6238"></stop><stop offset="1" style="stop-color:#FF7342"></stop></linearGradient><path style="fill:url(#SVGID_1_);" d="M20.8,9.5C20.8,4.3,25,0,30.3,0c5.3,0,9.5,4.3,9.5,9.5c0,5.3-4.3,9.5-9.5,9.5C25,19,20.8,14.8,20.8,9.5z"></path><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="72.1275" y1="51.3638" x2="10.1923" y2="-10.5714"><stop offset="0" style="stop-color:#FF4282"></stop><stop offset="0.1292" style="stop-color:#FF3365"></stop><stop offset="0.4085" style="stop-color:#FF0D1A"></stop><stop offset="0.5" style="stop-color:#FF0000"></stop><stop offset="0.7076" style="stop-color:#FF361F"></stop><stop offset="0.9019" style="stop-color:#FF6238"></stop><stop offset="1" style="stop-color:#FF7342"></stop></linearGradient><path style="fill:url(#SVGID_2_);" d="M42.4,31.1c0-5.3,4.3-9.5,9.5-9.5c5.3,0,9.5,4.3,9.5,9.5c0,5.3-4.3,9.5-9.5,9.5C46.7,40.7,42.4,36.4,42.4,31.1 z"></path><linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="50.5704" y1="73.0665" x2="-11.3606" y2="11.1355"><stop offset="0" style="stop-color:#FF4282"></stop><stop offset="0.1292" style="stop-color:#FF3365"></stop><stop offset="0.4085" style="stop-color:#FF0D1A"></stop><stop offset="0.5" style="stop-color:#FF0000"></stop><stop offset="0.7076" style="stop-color:#FF361F"></stop><stop offset="0.9019" style="stop-color:#FF6238"></stop><stop offset="1" style="stop-color:#FF7342"></stop></linearGradient><path style="fill:url(#SVGID_3_);" d="M0,31.1c0-4.8,3.9-8.7,8.7-8.7c4.8,0,8.7,3.9,8.7,8.7c0,4.8-3.9,8.7-8.7,8.7C3.9,39.8,0,35.9,0,31.1z"></path><linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="61.3483" y1="62.2143" x2="-0.5841" y2="0.2819"><stop offset="0" style="stop-color:#FF4282"></stop><stop offset="0.1292" style="stop-color:#FF3365"></stop><stop offset="0.4085" style="stop-color:#FF0D1A"></stop><stop offset="0.5" style="stop-color:#FF0000"></stop><stop offset="0.7076" style="stop-color:#FF361F"></stop><stop offset="0.9019" style="stop-color:#FF6238"></stop><stop offset="1" style="stop-color:#FF7342"></stop></linearGradient><path style="fill:url(#SVGID_4_);" d="M0.9,9.5c0-4.3,3.5-7.8,7.8-7.8c4.3,0,7.8,3.5,7.8,7.8c0,4.3-3.5,7.8-7.8,7.8C4.4,17.3,0.9,13.8,0.9,9.5z"></path><linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="61.3428" y1="62.2088" x2="-0.5903" y2="0.2757"><stop offset="0" style="stop-color:#FF4282"></stop><stop offset="0.1292" style="stop-color:#FF3365"></stop><stop offset="0.4085" style="stop-color:#FF0D1A"></stop><stop offset="0.5" style="stop-color:#FF0000"></stop><stop offset="0.7076" style="stop-color:#FF361F"></stop><stop offset="0.9019" style="stop-color:#FF6238"></stop><stop offset="1" style="stop-color:#FF7342"></stop></linearGradient><path style="fill:url(#SVGID_5_);" d="M44.8,52.8c0-3.9,3.2-7.1,7.1-7.1c3.9,0,7.1,3.2,7.1,7.1c0,3.9-3.2,7.1-7.1,7.1C48,59.9,44.8,56.7,44.8,52.8z"></path><linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="82.8997" y1="40.506" x2="20.9658" y2="-21.4278"><stop offset="0" style="stop-color:#FF4282"></stop><stop offset="0.1292" style="stop-color:#FF3365"></stop><stop offset="0.4085" style="stop-color:#FF0D1A"></stop><stop offset="0.5" style="stop-color:#FF0000"></stop><stop offset="0.7076" style="stop-color:#FF361F"></stop><stop offset="0.9019" style="stop-color:#FF6238"></stop><stop offset="1" style="stop-color:#FF7342"></stop></linearGradient><path style="fill:url(#SVGID_6_);" d="M47.2,9.5c0-2.6,2.1-4.8,4.8-4.8c2.6,0,4.8,2.1,4.8,4.8c0,2.6-2.1,4.8-4.8,4.8C49.3,14.3,47.2,12.1,47.2,9.5z"></path><linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="39.7954" y1="83.9211" x2="-22.1384" y2="21.9872"><stop offset="0" style="stop-color:#FF4282"></stop><stop offset="0.1292" style="stop-color:#FF3365"></stop><stop offset="0.4085" style="stop-color:#FF0D1A"></stop><stop offset="0.5" style="stop-color:#FF0000"></stop><stop offset="0.7076" style="stop-color:#FF361F"></stop><stop offset="0.9019" style="stop-color:#FF6238"></stop><stop offset="1" style="stop-color:#FF7342"></stop></linearGradient><path style="fill:url(#SVGID_7_);" d="M3.9,52.8C3.9,50.2,6,48,8.6,48c2.6,0,4.8,2.1,4.8,4.8c0,2.6-2.1,4.8-4.8,4.8C6,57.5,3.9,55.4,3.9,52.8z"></path><linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="61.3583" y1="62.2214" x2="-0.578" y2="0.2851"><stop offset="0" style="stop-color:#FF4282"></stop><stop offset="0.1292" style="stop-color:#FF3365"></stop><stop offset="0.4085" style="stop-color:#FF0D1A"></stop><stop offset="0.5" style="stop-color:#FF0000"></stop><stop offset="0.7076" style="stop-color:#FF361F"></stop><stop offset="0.9019" style="stop-color:#FF6238"></stop><stop offset="1" style="stop-color:#FF7342"></stop></linearGradient><path style="fill:url(#SVGID_8_);" d="M24.2,31.1c0-3.3,2.7-6.1,6.1-6.1c3.3,0,6.1,2.7,6.1,6.1c0,3.3-2.7,6.1-6.1,6.1C26.9,37.2,24.2,34.5,24.2,31.1 z"></path><linearGradient id="SVGID_9_" gradientUnits="userSpaceOnUse" x1="50.5888" y1="73.0816" x2="-11.3421" y2="11.1508"><stop offset="0" style="stop-color:#FF4282"></stop><stop offset="0.1292" style="stop-color:#FF3365"></stop><stop offset="0.4085" style="stop-color:#FF0D1A"></stop><stop offset="0.5" style="stop-color:#FF0000"></stop><stop offset="0.7076" style="stop-color:#FF361F"></stop><stop offset="0.9019" style="stop-color:#FF6238"></stop><stop offset="1" style="stop-color:#FF7342"></stop></linearGradient><path style="fill:url(#SVGID_9_);" d="M24,52.8c0-3.5,2.8-6.3,6.3-6.3c3.5,0,6.3,2.8,6.3,6.3c0,3.5-2.8,6.3-6.3,6.3C26.8,59,24,56.2,24,52.8z"></path><path d="M98.8,32.2h-8.2v-1.8h10.2v1.3c0,6.3-3.6,10.3-9.6,10.3c-6.6,0-10.7-4.7-10.7-10.8c0-6.2,4.2-10.9,10.8-10.9 c5.3,0,7.6,2.8,7.6,2.8l-1.1,1.5c0,0-2.2-2.4-6.5-2.4c-5.5,0-8.8,4.1-8.8,9c0,4.9,3.2,9,8.7,9c4.6,0,7.6-3,7.6-7.7V32.2z"></path><path d="M113.6,20.8h0.5l10.1,20.8H122l-2-3.9h-12.3l-2,3.9h-2.2L113.6,20.8z M114,24.8h-0.3l-4.8,10.6l-0.2,0.4h10.4l-0.2-0.4 L114,24.8z"></path><path d="M127.2,41.1l13.3-18.4h-12.9v-1.8h16.2v0.5l-13.1,18.4h12.8v1.8h-16.2V41.1z"></path><path d="M162.9,32.2h-11.5v7.5h13v1.8h-15V20.8h15v1.8h-13v7.8h11.5V32.2z"></path><path d="M168.2,20.8H185v1.8h-7.4v18.9h-1.9V22.6h-7.4V20.8z"></path><path d="M195.3,20.8h0.5l10.1,20.8h-2.2l-2-3.9h-12.3l-2,3.9h-2.2L195.3,20.8z M195.7,24.8h-0.3l-4.8,10.6l-0.2,0.4h10.4l-0.2-0.4 L195.7,24.8z"></path><path d="M210.1,38.9c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.6,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5C208.6,39.5,209.3,38.9,210.1,38.9z"></path><path d="M217.2,20.8h8.3c5.2,0,8.2,2.4,8.2,6.9c0,4.7-3.2,7.1-8.3,7.1h-6.2v6.8h-2V20.8z M225.4,22.6h-6.3v10.3h6.3 c3.8,0,6.3-1.5,6.3-5.2C231.7,24.2,229.2,22.6,225.4,22.6z"></path><path d="M239.6,41.6V20.8h2v18.9H254v1.8H239.6z"></path></g>
</svg>
</a>
</div>
<nav class="main-navigation__nav">
<ul class="main-navigation__lists">
<li class="main-navigation__list-item ">
<a class="main-navigation__link" href="https://wiadomosci.gazeta.pl/wiadomosci/0,0.html#e=CapLinks" id="LinkArea:CapLinks" title="WIADOMO¦CI">
WIADOMO¦CI
</a>
</li>
<li class="main-navigation__list-item ">
<a class="main-navigation__link" href="https://next.gazeta.pl/next/0,0.html#e=CapLinks" id="LinkArea:CapLinks" title="NEXT">
NEXT
</a>
</li>
<li class="main-navigation__list-item ">
<a class="main-navigation__link" href="https://www.sport.pl/sport-hp/0,0.html#e=CapLinks" id="LinkArea:CapLinks" title="SPORT">
SPORT
</a>
</li>
<li class="main-navigation__list-item ">
<a class="main-navigation__link" href="https://www.plotek.pl/plotek/0,0.html#e=CapLinks" id="LinkArea:CapLinks" title="PLOTEK">
PLOTEK
</a>
</li>
<li class="main-navigation__list-item ">
<a class="main-navigation__link" href="https://www.edziecko.pl/edziecko/0,0.html#e=CapLinks" id="LinkArea:CapLinks" title="DZIECKO">
DZIECKO
</a>
</li>
<li class="main-navigation__dropdown">
<span class="main-navigation__arrow-small js-trigger-main-navigation__show"></span>
</li>
</ul>
</nav>
<nav class="main-navigation__shortcuts">
<ul class="main-navigation__lists">
<li class="main-navigation__list-item main-navigation__list-item--mail">
<a class="main-navigation__link" href="http://poczta.gazeta.pl#e=CapIco" id="LinkArea:CapIco" title="poczta">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24"><defs> <style>.pocztaA {fill: #444; }.pocztaB {clip-path: url(#pocztaA);}.pocztaC {fill: none; }</style><clipPath id="pocztaA"> <rect class="pocztaA" width="24" height="24" transform="translate(1300 29)"></rect></clipPath></defs> <g class="pocztaB" transform="translate(-1300 -29)"><g transform="translate(1300 29)"><path class="pocztaC" d="M0,0H24V24H0Z"></path><path class="pocztaA" d="M20,4H4A2,2,0,0,0,2.01,6L2,18a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2V6A2.006,2.006,0,0,0,20,4Zm0,14H4V8l8,5,8-5Zm-8-7L4,6H20Z"></path></g></g></svg>
<span class="main-navigation__svg-name">poczta</span>
</a>
</li>
<li class="main-navigation__list-item main-navigation__list-item--forum">
<a class="main-navigation__link" href="https://forum.gazeta.pl#e=CapIco" id="LinkArea:CapIco" title="Forum">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24"><defs><style>.forumA,.forumC { fill: #444; }.forumB {clip-path: url(#forumA); }.forumC { stroke: #444; stroke-width: 0.3px;}</style><clipPath id="forumA"> <rect class="forumA" width="24" height="24" transform="translate(1370 29)"></rect></clipPath></defs><g class="forumB" transform="translate(-1370 -29)"><g transform="translate(1372 31)"><path class="forumC" d="M18.8,5.7h-.75V7.367h.75a.538.538,0,0,1,.5.5v9l-1-1.083-.5-.5H7.967a.538.538,0,0,1-.5-.5v-.75H5.8v.75A2.206,2.206,0,0,0,7.967,16.95h9.167l3.833,4V7.867A2.152,2.152,0,0,0,18.8,5.7Z" transform="translate(-0.967 -0.95)"></path> <path class="forumC" d="M13.083,11.25A2.206,2.206,0,0,0,15.25,9.083V1.833A2.158,2.158,0,0,0,13.083,0H2.167A2.206,2.206,0,0,0,0,2.167V15.25l2.5-2.5,1.417-1.5h9.167ZM2.667,10.083,1.75,11l-.083.167v-9a.538.538,0,0,1,.5-.5H13.083a.433.433,0,0,1,.333.167.632.632,0,0,1,.167.333V9.083a.538.538,0,0,1-.5.5H3.167Z"></path></g></g></svg>
<span class="main-navigation__svg-name">Forum</span>
</a>
</li>
<li class="main-navigation__list-item main-navigation__list-item--environment">
<a class="main-navigation__link" href="https://zielona.gazeta.pl/zielona_gazeta/0,0.html#e=CapIco" id="LinkArea:CapIco" title="¦rodowisko">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24"><defs> <style> .srodowiskoA {fill: #fff;}.srodowiskoB {clip-path: url(#srodowiskoA);}</style><clipPath id="srodowiskoA"><rect class="srodowiskoA" width="24" height="24"></rect></clipPath></defs> <g class="srodowiskoB"> <path class="srodowiskoA" d="M23.511,3.526c-.353-.019-8.753-.416-11.958,2.2h0a6.206,6.206,0,0,0-.9,8.63,6.021,6.021,0,0,0,4.722,2.267,6.142,6.142,0,0,0,3.842-1.355c3.2-2.614,4.569-10.981,4.626-11.336l.061-.385Zm-5.717,5-.336-.61a15.944,15.944,0,0,0-5.975,4.457,5.213,5.213,0,0,1-.4-2.807A4.192,4.192,0,0,1,12.552,7.09c2.7-1.848,5.913-1.864,8.751-1.879l.533,0c-.743,3.089-2.3,7.586-3.691,8.745a5,5,0,0,1-3.233.891,4.033,4.033,0,0,1-2.255-.926C13.859,11.409,16.632,9.323,17.794,8.527Z"></path> <path class="srodowiskoA" d="M7.908,9.45C6.151,7.617.9,7.048.676,7.025l-.4-.041.009.4c0,.229.143,5.645,1.9,7.483l.013.013a4.085,4.085,0,0,0,5.609-.008A3.872,3.872,0,0,0,7.908,9.45ZM4,10.692l-.568.416a8.426,8.426,0,0,0,2.457,3.107,2.065,2.065,0,0,1-1.061.12,2.151,2.151,0,0,1-1.395-.6A7.923,7.923,0,0,1,2.09,9.248l-.033-.411c1.635.266,3.487.79,4.215,1.543h0a4.157,4.157,0,0,0,.341.312,1.571,1.571,0,0,1,.7,1.363,2.686,2.686,0,0,1-.289,1.079A7.571,7.571,0,0,1,4,10.692Z"></path><path class="srodowiskoA" d="M9.553,13.922,9.485,13.9l-.071,0a.731.731,0,0,0-.708.663L7.392,20.709c-.078.487.488.958.8,1.009a.525.525,0,0,0,.079.006,1.474,1.474,0,0,0,.6-.187.9.9,0,0,0,.548-.621l.584-6.079A.754.754,0,0,0,9.553,13.922Z"></path></g></svg>
<span class="main-navigation__svg-name">¦rodowisko</span>
</a>
</li>
<li class="main-navigation__list-item main-navigation__list-item--search js-trigger-search-form__show">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 24 24">
<defs> <style>.szukajA { fill: #444; }.szukajB { clip-path: url(#szukajA); }.szukajC {  fill: none; }</style><clipPath id="szukajA"><rect class="szukajA" width="24" height="24" transform="translate(1560 29)"></rect> </clipPath></defs>
<g class="szukajB" transform="translate(-1560 -29)"><g transform="translate(1560 29)"><path class="szukajC" d="M0,0H24V24H0Z"></path><path class="szukajA" d="M15.864,14.321h-.813l-.288-.278a6.7,6.7,0,1,0-.72.72l.278.288v.813L19.467,21,21,19.467Zm-6.175,0A4.631,4.631,0,1,1,14.321,9.69,4.625,4.625,0,0,1,9.69,14.321Z"></path></g></g></svg>
</li><!-- UZREditor --><!-- htmEOF --><li class="main-navigation__login main-navigation__list-item">
                <!-- userName=, extUserSource=, temporaryLogged=false -->

                <a href="https://konto.gazeta.pl/konto/logowanie,.html?utm_nooverride=1&back=https://wiadomosci.gazeta.pl/prognoza-pogody#e=CapIco" id="LinkArea:CapIco" title="Zaloguj siê"
                           class="main-navigation__login main-navigation__login--logout main-navigation__link">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20"><defs><style>.login_a{fill:#444;}.login_b{clip-path:url(#login_a);}</style><clipPath id="login_a"><rect class="login_a" width="20" height="20" transform="translate(1649 135)"/></clipPath></defs><g class="login_b" transform="translate(-1649 -135)"><g transform="translate(1651.4 138)"><path class="login_a" d="M7.733,1.68A2.171,2.171,0,0,1,9.88,3.827,2.091,2.091,0,0,1,7.733,5.88,2.154,2.154,0,0,1,5.68,3.733,2.072,2.072,0,0,1,7.733,1.68m0-1.68a3.733,3.733,0,1,0,3.733,3.733A3.744,3.744,0,0,0,7.733,0Z" transform="translate(-0.2)"/><path class="login_a" d="M2.68,13.667a3.107,3.107,0,0,1,3.08-3.08H9.493a3.107,3.107,0,0,1,3.08,3.08V14.6h1.493v-.933A4.621,4.621,0,0,0,9.4,9H5.667A4.621,4.621,0,0,0,1,13.667V14.6H2.68Z" transform="translate(0 -0.6)"/></g></g></svg>
                        </a>
                    </li>
        </ul>
<div class="search-form search-form__hide-element">
<form class="search-form__form" action="https://szukaj.gazeta.pl/wyszukaj/artykul">
<input class="search-form__input" type="text" placeholder="Szukaj" name="query">
<button class="search-form__submit" type="submit">
<svg class="main-navigation__icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path class="main-navigation__icon" d="M13.006,11.805h-.632l-.224-.216a5.211,5.211,0,1,0-.56.56l.216.224v.632l4,3.994L17,15.807Zm-4.8,0a3.6,3.6,0,1,1,3.6-3.6A3.6,3.6,0,0,1,8.2,11.805Z" transform="translate(-3 -3)"></path></svg>
</button>
</form>
<span class="search-form__close">
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
<defs><style>.a{fill:#444;}</style></defs>
<path class="a" d="M17,6.209,15.791,5,11,9.791,6.209,5,5,6.209,9.791,11,5,15.791,6.209,17,11,12.209,15.791,17,17,15.791,12.209,11Z" transform="translate(-5 -5)"/></svg>
</span>
</div>
</nav>
</div>
</div><!-- UZREditor --><!-- htmEOF --><div class="navigation-lists__outer-nav">
<nav class="navigation-lists main-navigation__nav">
<div class="navigation-lists__row navigation-lists__row--site">
<ul class="navigation-lists__lists">
<li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kobieta.gazeta.pl/kobieta/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="KOBIETA">KOBIETA</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://haps.pl/Haps/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="HAPS">HAPS</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://myfitness.gazeta.pl/myfitness/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="MYFITNESS">MYFITNESS</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://podroze.gazeta.pl/podroze/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="PODRÓ¯E">PODRÓ¯E</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://pogoda.gazeta.pl/prognoza/polska#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="POGODA">POGODA</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://horoskopy.gazeta.pl/horoskop/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="HOROSKOPY">HOROSKOPY</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://avanti24.pl/#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="AVANTI24">AVANTI24</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://www.tokfm.pl/Tokfm/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="TOK FM">TOK FM</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://radiopogoda.pl/#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="RADIO POGODA">RADIO POGODA</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://weekend.gazeta.pl/weekend/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="WEEKEND">WEEKEND</a>
</li>
</ul>
</div>
<div class="navigation-lists__row navigation-lists__row--app">
<ul class="navigation-lists__lists">
<li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="http://aplikacja.gazeta.pl/aplikacjagazeta/#s=NavMoreSeo#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Pobierz nasz± aplikacjê"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><defs><style>.getApp_a{fill:none;}.getApp_b{fill:#444;}</style></defs><path class="getApp_a" d="M0,0H20V20H0Z"/><path class="getApp_b" d="M15,7.588H12.143V3H7.857V7.588H5l5,5.353ZM5,14.471V16H15V14.471Z"/></svg><span>Pobierz nasz± aplikacjê</span></a>
</li>
<li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://www.facebook.com/gazetapl/#s=NavMoreSeo#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Zobacz nas na FB"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><defs><style>.facebook_a{fill:none;}.facebook_b{fill:#444;}</style></defs><rect class="facebook_a" width="20" height="20"/><path class="facebook_b" d="M18,9.995A8,8,0,1,0,8.4,17.83V12.393H6.8v-2.4H8.4V8a2.8,2.8,0,0,1,2.8-2.8h2V7.6H11.6a.8.8,0,0,0-.8.8v1.6h2.4v2.4H10.8V17.95A8,8,0,0,0,18,9.995Z"/></svg><span>Zobacz nas na FB</span></a>
</li>
</ul>
</div>
<div class="navigation-lists__row navigation-lists__row--linked">
<div class="navigation-lists__group">
<div class="navigation-lists__smalltitle">
<div class="navigation-lists__smalltitleName">Aktualno¶ci</div>
<svg class="navigation-lists__smalltitleSVG" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><defs><style>.arrowDown_a{fill:none;}.arrowDown_b{fill:#444;}</style></defs><path class="arrowDown_a" d="M0,0H20V20H0Z"/><path class="arrowDown_b" d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-2 -2.071)"/></svg>
</div>
<ul class="navigation-lists__lists">
<li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://g.pl/news/0,188150.html#e=NavLink#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Na topie">Na topie</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://ukrayina.pl/polish/0,190250.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Wiadomo¶ci z Ukrainy">Wiadomo¶ci z Ukrainy</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://moto.pl/MotoPL/7,88389,29955852,volkswagen-wypozycza-californie-na-tygodniowe-jazdy-probne.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Volkswagen Californie na tygodniowe jazdy próbne">Volkswagen Californie na tygodniowe jazdy próbne</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://g.pl/news/0,187455.html#e=NavLink#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Podró¿e">Podró¿e</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://g.pl/news/0,187454.html#e=NavLink#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Lifestyle">Lifestyle</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://g.pl/news/0,187453.html#e=NavLink#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Horoskopy">Horoskopy</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://g.pl/news/0,187452.html#e=NavLink#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Ciekawostki">Ciekawostki</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://g.pl/news/0,187451.html#e=NavLink#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Porady">Porady</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://g.pl/news/0,187450.html#e=NavLink#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Pieni±dze">Pieni±dze</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://g.pl/news/0,187456.html#e=NavLink#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Quizy">Quizy</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://www.edziecko.pl/matura#e=NavMoreSeo#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Matura 2024">Matura 2024</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://next.gazeta.pl/inwestycje/0,0.html#e=NavLink#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Inwestycje">Inwestycje</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://next.gazeta.pl/waluty/kursy-walut-nbp#e=NavLink#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Kursy walut NBP">Kursy walut NBP</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://next.gazeta.pl/inwestycje/gielda#e=NavLink#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Gie³da">Gie³da</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://next.gazeta.pl/surowce/notowania-surowcow#e=NavLink#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Surowce">Surowce</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://next.gazeta.pl/inwestycje/kryptowaluty#e=NavLink#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Kryptowaluty">Kryptowaluty</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://next.gazeta.pl/waluty/kursy-rynkowe-forex#e=NavLink#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Forex">Forex</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/wiadomosci/0,187572.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Lokalnie">Lokalnie</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/joe-biden#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Joe Biden">Joe Biden</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://podroze.gazeta.pl/gory#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Urlop w górach">Urlop w górach</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://www.edziecko.pl/rodzice/7,79361,30559648,ferie-zimowe-2024-spadnie-nawet-30-centymetrow-sniegu-oto.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Ferie zimowe 2024">Ferie zimowe 2024</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://podroze.gazeta.pl/zima#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Zima">Zima</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/wiadomosci/0,145764.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Najnowsze wiadomo¶ci">Najnowsze wiadomo¶ci</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://www.plotek.pl/plotek/0,170959.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Newsy Plotek">Newsy Plotek</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://www.plotek.pl/true-love#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="True Love">True Love</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://www.plotek.pl/plotek/7,154063,29511613,ile-michal-wisniewski-ma-dzieci-my-tez-sie-czasem-gubimy-ale.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Ile dzieci ma Micha³ Wi¶niewski?">Ile dzieci ma Micha³ Wi¶niewski?</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://www.plotek.pl/plotek/7,187971,29514442,wziela-pozyczke-i-poleciala-do-turcji-po-piekne-zeby-potem.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Tureckie zêby">Tureckie zêby</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://www.plotek.pl/love-island#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Love Island">Love Island</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/wiadomosci/0,168571.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Na topie">Na topie</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://haps.pl/Haps/0,167709.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Wiadomo¶ci kulinarne">Wiadomo¶ci kulinarne</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://myfitness.gazeta.pl/myfitness/0,166676.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Newsy Myfitness">Newsy Myfitness</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://www.plotek.pl/plotek/0,170959.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Wiadomo¶ci Plotek">Wiadomo¶ci Plotek</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://pogoda.gazeta.pl/prognoza/0,185352.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Prognoza pogody">Prognoza pogody</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://pogoda.gazeta.pl/prognoza/0,185353.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Zjawiska meteorologiczne">Zjawiska meteorologiczne</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://horoskopy.gazeta.pl/horoskop/miesieczny#TRNavSST#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Horoskop 2024">Horoskop 2024</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://horoskopy.gazeta.pl/horoskop/dzienny#TRNavSST#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Horoskop na dzi¶">Horoskop na dzi¶</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://lotto.gazeta.pl/lotto/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Wyniki Lotto">Wyniki Lotto</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://haps.pl/Haps/0,168710.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Gazetki Promocyjne">Gazetki Promocyjne</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/niedziele-handlowe#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Niedziele handlowe">Niedziele handlowe</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/swiadczenia#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="¦wiadczenia">¦wiadczenia</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/podatki#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Podatki 2024">Podatki 2024</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://next.gazeta.pl/pit#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Jak rozliczyæ PIT">Jak rozliczyæ PIT</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://www.sport.pl/sport/0,183270.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Sport wiadomo¶ci">Sport wiadomo¶ci</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/imgw#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="IMGW ostrze¿enia">IMGW ostrze¿enia</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/pogoda-na-dzis#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Pogoda dzi¶">Pogoda dzi¶</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://pogoda.gazeta.pl/prognoza/polska/mazowieckie/warszawa-756135/jutro#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Pogoda jutro">Pogoda jutro</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://next.gazeta.pl/obostrzenia#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Nowe obostrzenia">Nowe obostrzenia</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/ukraina/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Wiadomo¶ci z Ukrainy">Wiadomo¶ci z Ukrainy</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://ukrayina.pl#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Ukrayina.pl">Ukrayina.pl</a>
</li>
</ul>
</div><div class="navigation-lists__group">
<div class="navigation-lists__smalltitle">
<div class="navigation-lists__smalltitleName">Rozrywka</div>
<svg class="navigation-lists__smalltitleSVG" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><defs><style>.arrowDown_a{fill:none;}.arrowDown_b{fill:#444;}</style></defs><path class="arrowDown_a" d="M0,0H20V20H0Z"/><path class="arrowDown_b" d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-2 -2.071)"/></svg>
</div>
<ul class="navigation-lists__lists">
<li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://www.plotek.pl/plotek/0,157292.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Sportowcy">Sportowcy</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://buzz.gazeta.pl/buzz/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Buzz Gazeta">Buzz Gazeta</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://fm.tuba.pl/#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Radio Internetowe">Radio Internetowe</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://zloteprzeboje.pl/#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Radio Z³ote Przeboje">Radio Z³ote Przeboje</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kultura.gazeta.pl/kultura/0,114438.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Film">Film</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kultura.gazeta.pl/kultura/0,127222.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Seriale">Seriale</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kultura.gazeta.pl/premiery-kinowe#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Premiery kinowe">Premiery kinowe</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kultura.gazeta.pl/kultura/0,114528.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Ksi±¿ki">Ksi±¿ki</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kultura.gazeta.pl/kultura/0,114526.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Muzyka">Muzyka</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://tv.gazeta.pl/program_tv/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Gry online">Gry online</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://www.plotek.pl/plotek/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Plotek">Plotek</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kultura.gazeta.pl/komedia#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Komedie">Komedie</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kultura.gazeta.pl/serial-kryminalny#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Seriale kryminalne">Seriale kryminalne</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kultura.gazeta.pl/polskie-filmy#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Polskie filmy">Polskie filmy</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kultura.gazeta.pl/hbo-go#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="HBO GO">HBO GO</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kultura.gazeta.pl/netflix#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Netflix">Netflix</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kultura.gazeta.pl/amazon-prime-video#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Amazon Prime Video">Amazon Prime Video</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kultura.gazeta.pl/kultura/0,115024.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Festiwale">Festiwale</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://www.plotek.pl/tvn#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="TVN">TVN</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://www.plotek.pl/instagram#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Instagram">Instagram</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://www.plotek.pl/gwiazdy#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Gwiazdy">Gwiazdy</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://next.gazeta.pl/gry#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Gry">Gry</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://next.gazeta.pl/konsole#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Konsole">Konsole</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://next.gazeta.pl/smartfony#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Smartfony">Smartfony</a>
</li>
</ul>
</div><div class="navigation-lists__group">
<div class="navigation-lists__smalltitle">
<div class="navigation-lists__smalltitleName">Moda</div>
<svg class="navigation-lists__smalltitleSVG" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><defs><style>.arrowDown_a{fill:none;}.arrowDown_b{fill:#444;}</style></defs><path class="arrowDown_a" d="M0,0H20V20H0Z"/><path class="arrowDown_b" d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-2 -2.071)"/></svg>
</div>
<ul class="navigation-lists__lists">
<li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://zakupy-czterykaty.pl/narozniki#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Naro¿niki do salonu">Naro¿niki do salonu</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://zakupy-czterykaty.pl/lampy-sufitowe/sypialnia#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Lampy suftowe do sypialni">Lampy suftowe do sypialni</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://zakupy-czterykaty.pl/narzuty#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Narzuty na ³ó¿ko">Narzuty na ³ó¿ko</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://zakupy-czterykaty.pl/smeg#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Akcesoria SMEG">Akcesoria SMEG</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://zakupy.avanti24.pl/plaszcze/damskie/wiazany#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Ciep³e p³aszcze z wi±zaniem">Ciep³e p³aszcze z wi±zaniem</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://zakupy.avanti24.pl/czapki/bezowy/damskie#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Be¿owe czapki">Be¿owe czapki</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://zakupy.avanti24.pl/sukienki/damskie/dzianina#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Dzianinowe sukienki">Dzianinowe sukienki</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://zakupy.avanti24.pl/botki/lasocki#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Botki Lasocki">Botki Lasocki</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://czterykaty.pl/inspiracje/7,153170,30546137,minimalizm-w-niedrogim-wydaniu-zyrandole-jako-stylowy-element.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Minimalistyczne wnêtrza">Minimalistyczne wnêtrza</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://czterykaty.pl/czterykaty/7,185855,30545246,jak-zaaranzowac-kremowy-salon.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Najmodniejszy kolor do salonu">Najmodniejszy kolor do salonu</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://czterykaty.pl/inspiracje/7,153170,30537042,hm-home-wyprzedaje-piekne-dekoracje-i-akcesoria-do-20-zl-idealne.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Wyprzeda¿ H&amp;M Home">Wyprzeda¿ H&amp;M Home</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://czterykaty.pl/inspiracje/7,153170,30529173,praktyczne-i-eleganckie-akcesoria-do-lazienki-z-nimi-zachowasz.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Elegancka i praktyczna ³azienka">Elegancka i praktyczna ³azienka</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://czterykaty.pl/inspiracje/7,153170,30520104,jak-zaaranzowac-modne-domowe-biuro-zadbaj-o-swoja-przestrzen.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Aran¿acja domowego biura">Aran¿acja domowego biura</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://czterykaty.pl/inspiracje/7,153170,30512542,dywany-w-stylu-prl-przezywaja-swoj-renesans-bogate-wzornictwo.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Powrót dodatków z PRL">Powrót dodatków z PRL</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://avanti24.pl/Magazyn/7,150441,30557802,znana-sieciowka-wyprzedaje-swetry-za-ulamek-ceny-obok-tych.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Wyprzeda¿ ciep³ych swetrów">Wyprzeda¿ ciep³ych swetrów</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://avanti24.pl/Magazyn/7,150441,30561504,gdy-wygoda-spotyka-styl-cieplutkie-dresy-czyli-spodnie-i-bluzy.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Wygodne i stylowe dresy">Wygodne i stylowe dresy</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://avanti24.pl/Magazyn/7,150441,30542034,lista-hitow-z-zimowej-wyprzedazy-wittchen-bestsellerowe-torebki.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Torebki Wittchen">Torebki Wittchen</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://avanti24.pl/Magazyn/7,150441,30533609,kurtke-typu-baranek-kupisz-teraz-na-wyprzedazy-nie-tylko-to.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Ciep³e kurtki">Ciep³e kurtki</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://avanti24.pl/Magazyn/7,150441,30520384,w-tych-sukienkach-zadasz-szyku-bez-wzgledu-na-okazje-satynowe.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Eleganckie sukienki">Eleganckie sukienki</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://avanti24.pl/Magazyn/7,150441,30506663,ta-marka-jest-uwielbiana-przez-kobiety-za-uniwersalnosc-i-komfort.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Stylowe zimowe ¶niegowce">Stylowe zimowe ¶niegowce</a>
</li>
</ul>
</div><div class="navigation-lists__group">
<div class="navigation-lists__smalltitle">
<div class="navigation-lists__smalltitleName">Polecamy</div>
<svg class="navigation-lists__smalltitleSVG" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><defs><style>.arrowDown_a{fill:none;}.arrowDown_b{fill:#444;}</style></defs><path class="arrowDown_a" d="M0,0H20V20H0Z"/><path class="arrowDown_b" d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-2 -2.071)"/></svg>
</div>
<ul class="navigation-lists__lists">
<li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://www.edziecko.pl/rodzice/7,79361,30559648,ferie-zimowe-2024-spadnie-nawet-30-centymetrow-sniegu-oto.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Ferie zimowe 2024">Ferie zimowe 2024</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://podroze.gazeta.pl/zima#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Zima">Zima</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://next.gazeta.pl/pieniadz/7,147306,30554959,to-koniec-500-plus-kiedy-ruszaja-wyplaty-800-plus-terminarz.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Terminarz - 800+">Terminarz - 800+</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://podroze.gazeta.pl/narty#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Narty">Narty</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kobieta.gazeta.pl/karnawal#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Karnawa³">Karnawa³</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://haps.pl/tlusty-czwartek#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Przepisy na t³usty czwartek">Przepisy na t³usty czwartek</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://next.gazeta.pl/emerytury#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Emerytury - nowo¶ci">Emerytury - nowo¶ci</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://moto.pl/zima#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Zima - pielêgnacja auta">Zima - pielêgnacja auta</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://next.gazeta.pl/swiadczenia#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="¦wiadczenia 2024">¦wiadczenia 2024</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kobieta.gazeta.pl/kobieta/7,107881,30410900,jak-zrobic-odmrazacz-do-szyb-wymieszaj-3-skladniki-i-pozegnaj.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Domowy odmra¿acz do szyb">Domowy odmra¿acz do szyb</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://zdrowie.gazeta.pl/odpornosc#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Odporno¶æ">Odporno¶æ</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kultura.gazeta.pl/kultura/7,114528,30499067,polskie-powiesci-pod-choinke-i-na-zimowe-wieczory.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Ksi±¿ki idealne na zimowe wieczory">Ksi±¿ki idealne na zimowe wieczory</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://podroze.gazeta.pl/ciekawe-miejsca-w-polsce#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Ciekawe miejsca w Polsce">Ciekawe miejsca w Polsce</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://podroze.gazeta.pl/tanie-loty#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Tanie bilety lotnicze">Tanie bilety lotnicze</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://podroze.gazeta.pl/tanie-wakacje#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Tanie wakacje">Tanie wakacje</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://podroze.gazeta.pl/wakacje-za-granica#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Wakacje za granic±">Wakacje za granic±</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://haps.pl/przetwory#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Przetwory">Przetwory</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kobieta.gazeta.pl/urodowe-triki#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Urodowe triki">Urodowe triki</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kobieta.gazeta.pl/porady#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Porady">Porady</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kobieta.gazeta.pl/domowe-sposoby#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Domowe sposoby">Domowe sposoby</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://zdrowie.gazeta.pl/dieta#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Dieta">Dieta</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://myfitness.gazeta.pl/fitness#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Fitness">Fitness</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://www.plotek.pl/stylizacje#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Stylizacje gwiazd">Stylizacje gwiazd</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://www.plotek.pl/zwiazki#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Zwi±zki gwiazd">Zwi±zki gwiazd</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/swiat#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="¦wiat">¦wiat</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kobieta.gazeta.pl/moda#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Moda">Moda</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kobieta.gazeta.pl/trendy#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Trendy">Trendy</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://next.gazeta.pl/rozliczenie-podatkowe#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Rozliczenie podatkowe">Rozliczenie podatkowe</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kobieta.gazeta.pl/swiadczenia#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="¦wiadczenia">¦wiadczenia</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://next.gazeta.pl/ulgi-podatkowe#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Ulgi podatkowe">Ulgi podatkowe</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kobieta.gazeta.pl/znaki-zodiaku#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Znaki zodiaku">Znaki zodiaku</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kobieta.gazeta.pl/horoskop-dzienny#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Horoskop dzienny">Horoskop dzienny</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kultura.gazeta.pl/kultura/0,114628.html#e=NavLink#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Wiadomo¶ci kulturalne">Wiadomo¶ci kulturalne</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kultura.gazeta.pl/najlepsze-seriale#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Najlepsze seriale">Najlepsze seriale</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kultura.gazeta.pl/podcasty#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Podcasty">Podcasty</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kultura.gazeta.pl/quizy#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Quizy">Quizy</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/sport#e=CapMoreSeo#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Sport">Sport</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://www.sport.pl/tenis/0,0.html#e=NavLink#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Tenis">Tenis</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://www.sport.pl/siatkowka/0,0.html#e=NavLink#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Siatkówka">Siatkówka</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://www.sport.pl/pilka/0,0.html#e=NavLink#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Pi³ka no¿na">Pi³ka no¿na</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://moto.pl/Porady/0,0.html#e=NavLink#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Porody motoryzacyjne">Porody motoryzacyjne</a>
</li>
</ul>
</div><div class="navigation-lists__group">
<div class="navigation-lists__smalltitle">
<div class="navigation-lists__smalltitleName">Lokale</div>
<svg class="navigation-lists__smalltitleSVG" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><defs><style>.arrowDown_a{fill:none;}.arrowDown_b{fill:#444;}</style></defs><path class="arrowDown_a" d="M0,0H20V20H0Z"/><path class="arrowDown_b" d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-2 -2.071)"/></svg>
</div>
<ul class="navigation-lists__lists">
<li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://bialystok.wyborcza.pl/bialystok/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Bia³ystok">Bia³ystok</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://bielskobiala.wyborcza.pl/bielskobiala/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Bielsko-Bia³a">Bielsko-Bia³a</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://bydgoszcz.wyborcza.pl/bydgoszcz/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Bydgoszcz">Bydgoszcz</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://czestochowa.wyborcza.pl/czestochowa/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Czêstochowa">Czêstochowa</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://gorzow.wyborcza.pl/gorzow/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Gorzów Wlkp.">Gorzów Wlkp.</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://katowice.wyborcza.pl/katowice/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Katowice">Katowice</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://kielce.wyborcza.pl/kielce/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Kielce">Kielce</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://krakow.wyborcza.pl/krakow/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Kraków">Kraków</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://lublin.wyborcza.pl/lublin/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Lublin">Lublin</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://lodz.wyborcza.pl/lodz/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="£ód¼">£ód¼</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://poznan.wyborcza.pl/poznan/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Poznañ">Poznañ</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://plock.wyborcza.pl/plock/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="P³ock">P³ock</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://opole.wyborcza.pl/opole/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Opole">Opole</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://olsztyn.wyborcza.pl/olsztyn/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Olsztyn">Olsztyn</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://radom.wyborcza.pl/radom/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Radom">Radom</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://rzeszow.wyborcza.pl/rzeszow/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Rzeszów">Rzeszów</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://szczecin.wyborcza.pl/szczecin/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Szczecin">Szczecin</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://torun.wyborcza.pl/torun/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Toruñ">Toruñ</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://trojmiasto.wyborcza.pl/trojmiasto/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Trójmiasto">Trójmiasto</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://warszawa.wyborcza.pl/warszawa/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Warszawa">Warszawa</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wroclaw.wyborcza.pl/wroclaw/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Wroc³aw">Wroc³aw</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://zielonagora.wyborcza.pl/zielonagora/0,0.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Zielona Góra">Zielona Góra</a>
</li>
</ul>
</div>
</div>
<div class="navigation-lists__row navigation-lists__row--popular">
<span class="navigation-lists__smalltitle">POPULARNE TEMATY</span>
<div class="navigation-lists__column">
<ul class="navigation-lists__lists">
<li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,143907,30125484,wybory-parlamentarne-w-polsce-na-czym-polegaja-o-co-w-nich.html#e=NavMoreSeo#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Wybory parlamentarne - na czym polegaj±?">Wybory parlamentarne - na czym polegaj±?</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,143907,30230112,czlonek-komisji-wyborczej-zarobi-wiecej-niz-w-zeszlych-wyborach.html#e=NavMoreSeo#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Wzrost wynagrodzenia dla cz³onków komisji wyborczej">Wzrost wynagrodzenia dla cz³onków komisji wyborczej</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,143907,30099374,wybory-parlamentarne-2023-jak-glosowac-poza-miejscem-zameldowania.html#e=NavMoreSeo#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Jak g³osowaæ poza miejscem zameldowania?">Jak g³osowaæ poza miejscem zameldowania?</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,143907,30107264,glosowanie-przez-pelnomocnika-kto-moze-z-niego-skorzystac.html#e=NavMoreSeo#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="G³osowanie przez pe³nomocnika">G³osowanie przez pe³nomocnika</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,143907,30085113,jak-glosowac-za-granica-co-z-glosowaniem-korespondencyjnym.html#e=NavMoreSeo#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Jak g³osowaæ za granic±?">Jak g³osowaæ za granic±?</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,143907,30233534,dopisanie-do-spisu-wyborcow-jest-naprawde-proste-wyjasniamy.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Jak dopisaæ siê do spisu wyborców?">Jak dopisaæ siê do spisu wyborców?</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,143907,30238329,cisza-wyborcza-co-to-jest-ile-trwa-kara-za-jej-zlamanie.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Czym jest cisza wyborcza?">Czym jest cisza wyborcza?</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,143907,30107263,glosowanie-korespondencyjne-co-to-jest-kto-moze-z-tego-skorzystac.html#e=NavMoreSeo#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="G³osowanie korespondencyjne - co to jest? Kto mo¿e skorzystaæ?">G³osowanie korespondencyjne - co to jest? Kto mo¿e skorzystaæ?</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,143907,30154616,centralny-rejestr-wyborcow-co-to-jest-gdzie-go-znalezc-jak.html#e=NavMoreSeo#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Centralny Rejestr Wyborców - co to jest?">Centralny Rejestr Wyborców - co to jest?</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,143907,30233337,okregi-wyborcze-do-sejmu-2023-do-ktorego-nalezy-twoj-powiat.html#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Okrêgi wyborcze do Sejmu 2023">Okrêgi wyborcze do Sejmu 2023</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,143907,30085114,glos-niewazny-w-wyborach-oto-zasady-o-ktorych-wyborcy-czesto.html#e=NavMoreSeo#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Niewa¿ny g³os - jak g³osowaæ w wyborach parlamentarnych?">Niewa¿ny g³os - jak g³osowaæ w wyborach parlamentarnych?</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,143907,30171529,obwe-co-to-za-organizacja-jej-eksperci-beda-monitorowac-wybory.html#e=NavMoreSeo#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Wybory parlamentarne monitorowane przez OBWE - co to znaczy?">Wybory parlamentarne monitorowane przez OBWE - co to znaczy?</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,143907,30173711,glosowanie-poza-miejscem-zamieszkania-co-mozna-zrobic-gdzie.html#e=NavMoreSeo#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="G³osowanie poza miejscem zamieszkania. Co zrobiæ?">G³osowanie poza miejscem zamieszkania. Co zrobiæ?</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,143907,30154619,karta-do-glosowania-w-wyborach-do-sejmu-jak-wyglada-jak-ja.html#e=NavMoreSeo#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Karta do g³osowania - jak j± wype³niæ? Na co zwróciæ uwagê?">Karta do g³osowania - jak j± wype³niæ? Na co zwróciæ uwagê?</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,143907,30154618,wybory-parlamentarne-kto-zajmuje-sie-liczeniem-glosow-na-jakich.html#e=NavMoreSeo#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Wybory parlamentarne - liczenie g³osów. Jak ustala siê wyniki?">Wybory parlamentarne - liczenie g³osów. Jak ustala siê wyniki?</a>
</li><li class="navigation-lists__list-item">
<a class="navigation-lists__link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,143907,30154617,wybory-parlamentarne-a-frekwencja-czy-ma-ona-ma-wplyw-na-waznosc.html#e=NavMoreSeo#e=CapMoreSeo" id="LinkArea:CapMoreSeo" title="Wybory parlamentarne a frekwencja">Wybory parlamentarne a frekwencja</a>
</li>
</ul>
</div>
</div>
<div class="navigation-lists__row navigation-lists__fold">
<span class="navigation-lists__fold_button">ZWIÑ</span>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><defs><style>.arrow_up-a{fill:none;}.arrow_up-b{fill:#444;}</style></defs><path class="arrow_up-a" d="M0,0H20V20H0Z"/><path class="arrow_up-b" d="M12,8,6,14l1.41,1.41L12,10.83l4.59,4.58L18,14Z" transform="translate(-2 -1.929)"/></svg>
</div>
</nav>
</div><!-- UZREditor --><!-- htmEOF --></header>
    <script>
        (() => {
            window.addEventListener("userName", (e) =>{
                const userNameElement = document.getElementById('nick');
                const userName = e.detail.userName;
    
                if (userNameElement) {
                    userNameElement.textContent = userName;
                    userNameElement.classList.add('main-navigation__link');
                }
            });
        })()
    </script>

<!--2080592, [ /tpl/prod/modules/hat/desktop/hat.jsp ], emptyBean-->
<div class="navBox">
                <div class="serviceLogo ">
<div class="serviceLogo__logoGroupElements">
<a class="serviceLogo__logo" href="https://wiadomosci.gazeta.pl/wiadomosci/0,0.html#e=LogoS" id="LinkArea:LogoS">Wiadomo¶ci</a>
</div>

</div>
<style>
@media all and (min-width: 700px){
.serviceLogo__additionalElements{
display: flex;
position: absolute;
right: 0;
}
.serviceLogo__partner{
position: relative;
}
}
</style><!-- UZREditor --><!-- htmEOF -->
<!--26923135, [ /htm/26923/j26923135.htm ], null-->
<!-- menubar2021 v0.26 showNavigation:true, isMobile:false -->
<div class="nav__overlay">
				<ul class="nav__mainMenu">
					<li class="nav__item"><!-- level 1.1 -->
								<a href="https://wiadomosci.gazeta.pl/wiadomosci/0,114883.html#e=NavLink" id="LinkArea:NavLink" class="nav__itemName">Polska</a>

								<div class="nav__overlayList">
										<div class="nav__list">

											<!-- level 2.1 -->
												<a href="https://wiadomosci.gazeta.pl/koronawirus-w-polsce#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Koronawirus w Polsce</a>

												<!-- level 2.2 -->
												<a href="https://wiadomosci.gazeta.pl/obostrzenia#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Obostrzenia</a>

												<!-- level 2.3 -->
												<a href="https://wiadomosci.gazeta.pl/protest#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Protesty</a>

												<!-- level 2.4 -->
												<a href="https://wiadomosci.gazeta.pl/policja#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Policja</a>

												<!-- level 2.5 -->
												<a href="https://wiadomosci.gazeta.pl/kosciol#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Ko¶ció³</a>

												<!-- level 2.6 -->
												<a href="https://wiadomosci.gazeta.pl/pogoda#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Pogoda</a>

												<!-- level 2.7 -->
												<a href="https://wiadomosci.gazeta.pl/najwyzsza-izba-kontroli#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem nav__last">
														NIK</a>

												</div>
									</div>

								</li>
						<li class="nav__item"><!-- level 1.2 -->
								<a href="https://wiadomosci.gazeta.pl/wiadomosci/0,114884.html#e=NavLink" id="LinkArea:NavLink" class="nav__itemName">Polityka</a>

								<div class="nav__overlayList">
										<div class="nav__list">

											<!-- level 2.1 -->
												<a href="https://wiadomosci.gazeta.pl/sejm#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Sejm</a>

												<!-- level 2.2 -->
												<a href="https://wiadomosci.gazeta.pl/rzad#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Rz±d</a>

												<!-- level 2.3 -->
												<a href="https://wiadomosci.gazeta.pl/unia-europejska#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem nav__last">
														Unia Europejska</a>

												</div>
									</div>

								</li>
						<li class="nav__item"><!-- level 1.3 -->
								<a href="https://wiadomosci.gazeta.pl/wiadomosci/0,114881.html#e=NavLink" id="LinkArea:NavLink" class="nav__itemName">¦wiat</a>

								<div class="nav__overlayList">
										<div class="nav__list">

											<!-- level 2.1 -->
												<a href="https://wiadomosci.gazeta.pl/usa#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														USA</a>

												<!-- level 2.2 -->
												<a href="https://wiadomosci.gazeta.pl/joe-biden#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Joe Biden</a>

												<!-- level 2.3 -->
												<a href="https://wiadomosci.gazeta.pl/rosja#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Rosja</a>

												<!-- level 2.4 -->
												<a href="https://wiadomosci.gazeta.pl/wladimir-putin#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														W³adimir Putin</a>

												<!-- level 2.5 -->
												<a href="https://wiadomosci.gazeta.pl/niemcy#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Niemcy</a>

												<!-- level 2.6 -->
												<a href="https://wiadomosci.gazeta.pl/angela-merkel#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Angela Merkel</a>

												<!-- level 2.7 -->
												<a href="https://wiadomosci.gazeta.pl/chiny#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Chiny</a>

												<!-- level 2.8 -->
												<a href="https://wiadomosci.gazeta.pl/wielka-brytania#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Wielka Brytania</a>

												<!-- level 2.9 -->
												<a href="https://wiadomosci.gazeta.pl/wegry#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Wêgry</a>

												<!-- level 2.10 -->
												<a href="https://wiadomosci.gazeta.pl/bialorus#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem nav__last">
														Bia³oru¶</a>

												</div>
									</div>

								</li>
						<li class="nav__item"><!-- level 1.4 -->
								<a href="https://wiadomosci.gazeta.pl/wojna-w-ukrainie#e=NavLink" id="LinkArea:NavLink" class="nav__itemName">Wojna w Ukrainie</a>

								<div class="nav__overlayList">
										<div class="nav__list">

											<!-- level 2.1 -->
												<a href="https://wiadomosci.gazeta.pl/wolodymyr-zelenski#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Wo³odymyr Ze³enski</a>

												<!-- level 2.2 -->
												<a href="https://wiadomosci.gazeta.pl/mariupol#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Mariupol</a>

												<!-- level 2.3 -->
												<a href="https://wiadomosci.gazeta.pl/donieck#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Donieck</a>

												<!-- level 2.4 -->
												<a href="https://wiadomosci.gazeta.pl/lugansk#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														£ugañsk</a>

												<!-- level 2.5 -->
												<a href="https://wiadomosci.gazeta.pl/charkow#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Charków</a>

												<!-- level 2.6 -->
												<a href="https://wiadomosci.gazeta.pl/sondaze#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Sonda¿e</a>

												<!-- level 2.7 -->
												<a href="https://wiadomosci.gazeta.pl/krym#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Krym</a>

												<!-- level 2.8 -->
												<a href="https://wiadomosci.gazeta.pl/donbas#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Donbas</a>

												<!-- level 2.9 -->
												<a href="https://wiadomosci.gazeta.pl/azowstal#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem nav__last">
														Azowstal</a>

												</div>
									</div>

								</li>
						<li class="nav__item"><!-- level 1.5 -->
								<a href="https://wiadomosci.gazeta.pl/spoleczenstwo#e=NavLink" id="LinkArea:NavLink" class="nav__itemName">Spo³eczeñstwo</a>

								<div class="nav__overlayList">
										<div class="nav__list">

											<!-- level 2.1 -->
												<a href="https://wiadomosci.gazeta.pl/aborcja#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Aborcja</a>

												<!-- level 2.2 -->
												<a href="https://wiadomosci.gazeta.pl/zdrowie#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Zdrowie</a>

												<!-- level 2.3 -->
												<a href="https://wiadomosci.gazeta.pl/lgbt#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														LGBTQ+</a>

												<!-- level 2.4 -->
												<a href="https://wiadomosci.gazeta.pl/szpitale#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Szpitale</a>

												<!-- level 2.5 -->
												<a href="https://wiadomosci.gazeta.pl/rasizm#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Rasizm</a>

												<!-- level 2.6 -->
												<a href="https://wiadomosci.gazeta.pl/szkola#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Szko³a</a>

												<!-- level 2.7 -->
												<a href="https://wiadomosci.gazeta.pl/strajk-kobiet#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Strajk Kobiet</a>

												<!-- level 2.8 -->
												<a href="https://wiadomosci.gazeta.pl/szczepionka#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Szczepionka</a>

												<!-- level 2.9 -->
												<a href="https://wiadomosci.gazeta.pl/rzecznik-praw-obywatelskich#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Rzecznik Praw Obywatelskich</a>

												<!-- level 2.10 -->
												<a href="https://wiadomosci.gazeta.pl/zwierzeta#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem nav__last">
														Zwierzêta</a>

												</div>
									</div>

								</li>
						<li class="nav__item"><!-- level 1.6 -->
								<a href="https://wiadomosci.gazeta.pl/wiadomosci/0,156046.html#e=NavLink" id="LinkArea:NavLink" class="nav__itemName">Edukacja</a>

								<div class="nav__overlayList">
										<div class="nav__list">

											<!-- level 2.1 -->
												<a href="https://wiadomosci.gazeta.pl/nauczyciele#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Nauczyciele</a>

												<!-- level 2.2 -->
												<a href="https://wiadomosci.gazeta.pl/uczniowie#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Uczniowie</a>

												<!-- level 2.3 -->
												<a href="https://wiadomosci.gazeta.pl/matura#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Matura</a>

												<!-- level 2.4 -->
												<a href="https://wiadomosci.gazeta.pl/znp#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														ZNP</a>

												<!-- level 2.5 -->
												<a href="https://wiadomosci.gazeta.pl/ministerstwo-edukacji-narodowej#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														MEN</a>

												<!-- level 2.6 -->
												<a href="https://wiadomosci.gazeta.pl/minister-edukacji#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Minister Edukacji</a>

												<!-- level 2.7 -->
												<a href="https://wiadomosci.gazeta.pl/przemyslaw-czarnek#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem nav__last">
														Przemys³aw Czarnek</a>

												</div>
									</div>

								</li>
						<li class="nav__item"><!-- level 1.7 -->
								<a href="https://wiadomosci.gazeta.pl/wiadomosci/0,187572.html#e=NavLink" id="LinkArea:NavLink" class="nav__itemName">Lokalne</a>

								<div class="nav__overlayList">
										<div class="nav__list">

											<!-- level 2.1 -->
												<a href="https://wiadomosci.gazeta.pl/dolnoslaskie#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Dolno¶l±skie</a>

												<!-- level 2.2 -->
												<a href="https://wiadomosci.gazeta.pl/kujawsko-pomorskie#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Kujawsko-pomorskie</a>

												<!-- level 2.3 -->
												<a href="https://wiadomosci.gazeta.pl/lubelskie#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Lubelskie</a>

												<!-- level 2.4 -->
												<a href="https://wiadomosci.gazeta.pl/lubuskie#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Lubuskie</a>

												<!-- level 2.5 -->
												<a href="https://wiadomosci.gazeta.pl/lodzkie#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														£ódzkie</a>

												<!-- level 2.6 -->
												<a href="https://wiadomosci.gazeta.pl/malopolskie#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Ma³opolskie</a>

												<!-- level 2.7 -->
												<a href="https://wiadomosci.gazeta.pl/mazowieckie#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Mazowieckie</a>

												<!-- level 2.8 -->
												<a href="https://wiadomosci.gazeta.pl/opolskie#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Opolskie</a>

												<!-- level 2.9 -->
												<a href="https://wiadomosci.gazeta.pl/podkarpackie#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Podkarpackie</a>

												<!-- level 2.10 -->
												<a href="https://wiadomosci.gazeta.pl/podlaskie#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Podlaskie</a>

												<!-- level 2.11 -->
												<a href="https://wiadomosci.gazeta.pl/pomorskie#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Pomorskie</a>

												<!-- level 2.12 -->
												<a href="https://wiadomosci.gazeta.pl/slaskie#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														¦l±skie</a>

												<!-- level 2.13 -->
												<a href="https://wiadomosci.gazeta.pl/swietokrzyskie#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														¦wiêtokrzyskie</a>

												<!-- level 2.14 -->
												<a href="https://wiadomosci.gazeta.pl/warminsko-mazurskie#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Warmiñsko-mazurskie</a>

												<!-- level 2.15 -->
												<a href="https://wiadomosci.gazeta.pl/wielkopolskie#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem ">
														Wielkopolskie</a>

												<!-- level 2.16 -->
												<a href="https://wiadomosci.gazeta.pl/zachodniopomorskie#e=NavLink" id="LinkArea:NavLink" class="nav__secondLevelItem nav__last">
														Zachodniopomorskie</a>

												</div>
									</div>

								</li>
						<li class="nav__dropDownButton">
							<div class="nav__dropDownOverlay">
								<div class="nav__dropDownList">

									<!-- beak_level_1.1 -->
										<a href="https://wiadomosci.gazeta.pl/wiadomosci/0,168571.html#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__firstLevelItem  nav__lastItem">Na topie</a>

										<!-- beak_level_1.2 -->
										<div class="nav__itemBox"><a href="https://pogoda.gazeta.pl/prognoza/polska#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__firstLevelItem ">Pogoda</a>

										<!-- beak_level_2.1 -->
												<a href="https://wiadomosci.gazeta.pl/pogoda#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__secondLevelItem nav__lastItem">
														Raporty pogodowe</a>

												</div><!-- nav__itemBox --><!-- beak_level_1.3 -->
										<a href="https://wiadomosci.gazeta.pl/wiadomosci/0,161770.html#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__firstLevelItem  nav__lastItem">Opinie</a>

										<!-- beak_level_1.4 -->
										<a href="https://wiadomosci.gazeta.pl/wiadomosci/0,173952.html#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__firstLevelItem  nav__lastItem">Koronawirus</a>

										<!-- beak_level_1.5 -->
										<a href="https://wiadomosci.gazeta.pl/wiadomosci/0,114885.html#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__firstLevelItem  nav__lastItem">Nauka</a>

										<!-- beak_level_1.6 -->
										<a href="https://ukrayina.pl/ukrayina/0,0.html#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__firstLevelItem  nav__lastItem">Ukrayina.pl</a>

										<!-- beak_level_1.7 -->
										<a href="https://quizy.gazeta.pl/#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__firstLevelItem  nav__lastItem">Quiz</a>

										<!-- beak_level_1.8 -->
										<a href="https://buzz.gazeta.pl/buzz/0,0.html#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__firstLevelItem  nav__lastItem">Buzz</a>

										<!-- beak_level_1.9 -->
										<a href="https://wiadomosci.gazeta.pl/wiadomosci/0,114944.html#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__firstLevelItem  nav__lastItem">Zdjêcia</a>

										<!-- beak_level_1.10 -->
										<div class="nav__itemBox"><a href="https://wiadomosci.gazeta.pl/ministerstwo#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__firstLevelItem ">Ministerstwa</a>

										<!-- beak_level_2.1 -->
												<a href="https://wiadomosci.gazeta.pl/ministerstwo-zdrowia#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__secondLevelItem ">
														Ministerstwo Zdrowia</a>

												</div><!-- nav__itemBox --><!-- beak_level_2.2 -->
												<a href="https://wiadomosci.gazeta.pl/ministerstwo-sprawiedliwosci#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__secondLevelItem ">
														Ministerstwo Sprawiedliwo¶ci</a>

												<!-- beak_level_2.3 -->
												<a href="https://wiadomosci.gazeta.pl/ministerstwo-edukacji-narodowej#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__secondLevelItem ">
														Ministerstwo Edukacji Narodowej</a>

												<!-- beak_level_2.4 -->
												<a href="https://wiadomosci.gazeta.pl/ministerstwo-spraw-zagranicznych#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__secondLevelItem ">
														Ministerstwo Spraw Zagranicznych</a>

												<!-- beak_level_2.5 -->
												<a href="https://wiadomosci.gazeta.pl/ministerstwo-kultury#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__secondLevelItem ">
														Ministerstwo Kultury</a>

												<!-- beak_level_2.6 -->
												<a href="https://wiadomosci.gazeta.pl/ministerstwo-obrony-narodowej#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__secondLevelItem ">
														Ministerstwo Obrony Narodowej</a>

												<!-- beak_level_2.7 -->
												<a href="https://wiadomosci.gazeta.pl/ministerstwo-cyfryzacji#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__secondLevelItem ">
														Ministerstwo Cyfryzacji</a>

												<!-- beak_level_2.8 -->
												<a href="https://wiadomosci.gazeta.pl/ministerstwo-srodowiska#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__secondLevelItem ">
														Ministerstwo ¦rodowiska</a>

												<!-- beak_level_2.9 -->
												<a href="https://wiadomosci.gazeta.pl/ministerstwo-finansow#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__secondLevelItem nav__lastItem">
														Ministerstwo Finansów</a>

												<!-- beak_level_1.11 -->
										<div class="nav__itemBox"><a href="https://wiadomosci.gazeta.pl/wiadomosci/0,168571.html#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__firstLevelItem ">Inne tematy</a>

										<!-- beak_level_2.1 -->
												<a href="https://wiadomosci.gazeta.pl/burza#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__secondLevelItem ">
														Burze</a>

												</div><!-- nav__itemBox --><!-- beak_level_2.2 -->
												<a href="https://wiadomosci.gazeta.pl/utrudnienia-w-ruchu#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__secondLevelItem ">
														Utrudnienia w ruchu</a>

												<!-- beak_level_2.3 -->
												<a href="https://wiadomosci.gazeta.pl/wypadek-samochodowy#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__secondLevelItem ">
														Wypadek samochodowy</a>

												<!-- beak_level_2.4 -->
												<a href="https://wiadomosci.gazeta.pl/morderstwo#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__secondLevelItem ">
														Morderstwa</a>

												<!-- beak_level_2.5 -->
												<a href="https://wiadomosci.gazeta.pl/sluzba-zdrowia#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__secondLevelItem ">
														S³u¿ba zdrowia</a>

												<!-- beak_level_2.6 -->
												<a href="https://wiadomosci.gazeta.pl/swieta#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__secondLevelItem nav__lastItem">
														¦wiêta</a>

												<!-- beak_level_1.12 -->
										<a href="https://www.edziecko.pl/rodzice/7,79361,30559648,ferie-zimowe-2024-spadnie-nawet-30-centymetrow-sniegu-oto.html#e=NavMoreSeo" id="LinkArea:NavMoreSeo" class="nav__firstLevelItem  nav__lastItem">Ferie zimowe 2024</a>

										</div>
							</div>
						</li>
					</ul>
			</div><!-- end menu2020 desk -->

		
<!--26380542, [ /tpl/prod/modules/navigation/menubar2021.jsp ], menubarController-->
</div>

            <div class="notificationBox"></div>
        </div> <!-- #top_wrapper.section_wrapper -->

        <div id="adUnit-001-TOPBOARD" class="adviewDFPBanner DFP-001-TOPBOARD">
        <span class="banLabel" style="display: none;">REKLAMA</span>
        <div id='div-gpt-ad-001-TOPBOARD-0'>
            <script type='text/javascript'>
                if(dfpParams.slots['001-TOPBOARD'] && dfpParams.slots['001-TOPBOARD'].autoLoad) {
                    if (window.adviewDFP && adviewDFP.scrollSlot) adviewDFP.scrollSlot.push('001-TOPBOARD');
                    if (window.AdviewAdsTag) window.AdviewAdsTag.autoLoadSlot.push('001-TOPBOARD');
                } else if (!dfpParams.slots['001-TOPBOARD']) {
                    if ('001-TOPBOARD'.includes('TOPBOARD')) {
                        const el = document.getElementById('adUnit-001-TOPBOARD');
                        if (el && el.parentNode.className.includes('ban') && el.parentNode.className.includes('wrapper')) {
                            el.parentNode.remove();
                        }
                    }
                } else {
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-001-TOPBOARD-0'); });
                }
            </script>
        </div>
    </div>
<!-- v1.0 -->
<!--410355729, [ /tpl/ads/prod/dfpSlotScripts.jsp ], dfpBanersSlotScriptsBean-->
<!-- v2.2.2 -->
<!--410355728, [ /tpl/ads/prod/dfpSlot.jsp ], dfpBanersSlotBean-->

<!--26380561, [ /tpl/prod/page/top_2021.jsp ], emptyBean-->
<div id="adUnit-000-MAINBOARD" class="adviewDFPBanner DFP-000-MAINBOARD">
        <span class="banLabel" style="display: none;">REKLAMA</span>
        <div id='div-gpt-ad-000-MAINBOARD-0'>
            <script type='text/javascript'>
                if(dfpParams.slots['000-MAINBOARD'] && dfpParams.slots['000-MAINBOARD'].autoLoad) {
                    if (window.adviewDFP && adviewDFP.scrollSlot) adviewDFP.scrollSlot.push('000-MAINBOARD');
                    if (window.AdviewAdsTag) window.AdviewAdsTag.autoLoadSlot.push('000-MAINBOARD');
                } else if (!dfpParams.slots['000-MAINBOARD']) {
                    if ('000-MAINBOARD'.includes('TOPBOARD')) {
                        const el = document.getElementById('adUnit-000-MAINBOARD');
                        if (el && el.parentNode.className.includes('ban') && el.parentNode.className.includes('wrapper')) {
                            el.parentNode.remove();
                        }
                    }
                } else {
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-000-MAINBOARD-0'); });
                }
            </script>
        </div>
    </div>
<!-- v1.0 -->
<!--25397345, [ /tpl/ads/prod/dfpSlotScripts.jsp ], dfpBanersSlotScriptsBean-->
<!-- v2.2.2 -->
<!--23111202, [ /tpl/ads/prod/dfpSlot.jsp ], dfpBanersSlotBean-->
<div class="index_head">
    <div class="content_wrap">
        <div class="main_content">
            <!-- tagHead  -->
<!-- !tagHead  -->

<!--410355785, [ /fix/tags/tagHead.jsp ], tagHeadBean-->
</div><!-- /.main_content -->
                <div class="right_aside">
    <div class="right_aside__wrap">
        <div id="DFP-003-RECTANGLE_INDEXHEAD" class="adviewDFPBanner"></div>
        </div><!-- /.right_aside__wrap -->
</div><!-- /.right_aside -->
<!--410357970, [ /tpl/prod/content/index/modules/index_head_aside_desk.jsp ], emptyBean-->
</div><!-- /.content_wrap -->
</div><!-- /.index_head -->
<!-- new layout false -->
<div class="index_body">
    <!-- ----------- index AWD v3.2.0 -  19906114 - show_tags ---------------- -->

<article class="index_simple lazy_load news  ">
    <section class="body">
        <div class="content_wrap">
                <div class="main_content">
                        <header class="header">
                                <h1>prognoza pogody</h1>
                                </header>
                        <ul class="list_tiles">
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30687988,paulina-wprowadzi-zamet.html" title="Paulina wprowadzi zamêt w pogodzie. Nawet 25 mm opadów. Mo¿liwe zalania i podtopienia">
                            <figure class="imgw">
                                <img src="https://bi.im-g.pl/im/89/44/1d/z30688393II,Poziom-Wisly-w-Plocku.jpg" fetchpriority="high" alt="Paulina wprowadzi zamêt w pogodzie. Nawet 25 mm opadów. Mo¿liwe zalania i podtopienia" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30687988,paulina-wprowadzi-zamet.html" title="Paulina wprowadzi zamêt w pogodzie. Nawet 25 mm opadów. Mo¿liwe zalania i podtopienia">Paulina wprowadzi zamêt w pogodzie. Nawet 25 mm opadów. Mo¿liwe zalania i podtopienia</a></h2>
                        </header>
                        <p class="lead">
                                Weekend przyniós³ nam rekordow± temperaturê siêgaj±c± kilkunastu st. C. Teraz nad Polskê nadci±ga cyklon Paulina. Przyniesie on za³amanie pogody, w tym ulewy, podczas których mo¿e spa¶æ nawet 25 mm wody. Lokalnie istnieje ryzyko zalañ i podtopieñ.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/cyklon" title="cyklon" rel="tag">cyklon</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/opady-deszczu" title="opady deszczu" rel="tag">opady deszczu</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30686775,prognoza-dlugoterminowa-na-marzec-pogoda-bedzie-w-kratke-moze.html" title="Prognoza d³ugoterminowa na marzec. Pogoda bêdzie w kratkê. Mo¿e wróciæ mróz">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/ce/31/1d/z30609614II,Pogoda--zdjecie-ilustracyjne-.jpg" fetchpriority="auto" alt="Prognoza d³ugoterminowa na marzec. Pogoda bêdzie w kratkê. Mo¿e wróciæ mróz" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30686775,prognoza-dlugoterminowa-na-marzec-pogoda-bedzie-w-kratke-moze.html" title="Prognoza d³ugoterminowa na marzec. Pogoda bêdzie w kratkê. Mo¿e wróciæ mróz">Prognoza d³ugoterminowa na marzec. Pogoda bêdzie w kratkê. Mo¿e wróciæ mróz</a></h2>
                        </header>
                        <p class="lead">
                                W ostatnich dniach towarzyszy³a nam wiosenna pogoda. Zima nie powiedzia³a jednak jeszcze ostatniego s³owa. Pierwsze prognozy d³ugoterminowe wskazuj±, ¿e w marcu nadal bêdziemy do¶wiadczaæ mrozu. Z drugiej strony IMGW nie wyklucza tak¿e cieplejszyc...
                                    </p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza" title="prognoza" rel="tag">prognoza</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/temperatura" title="temperatura" rel="tag">temperatura</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30682741,w-weekend-pogodowa-niespodzianka-temperatury-nawet-o-10-stopni.html" title="W weekend pogodowa niespodzianka. Temperatury nawet o 10 stopni wy¿sze od ¶redniej z ostatnich dekad">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/3f/43/1d/z30683455II,Prognoza-pogody-na-weekend--Przelotne-opady-deszcz.jpg" fetchpriority="auto" alt="W weekend pogodowa niespodzianka. Temperatury nawet o 10 stopni wy¿sze od ¶redniej z ostatnich dekad" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30682741,w-weekend-pogodowa-niespodzianka-temperatury-nawet-o-10-stopni.html" title="W weekend pogodowa niespodzianka. Temperatury nawet o 10 stopni wy¿sze od ¶redniej z ostatnich dekad">W weekend pogodowa niespodzianka. Temperatury nawet o 10 stopni wy¿sze od ¶redniej z ostatnich dekad</a></h2>
                        </header>
                        <p class="lead">
                                W weekend temperatura w Polsce bêdzie znacznie wy¿sza od ¶redniej z ostatnich dekad. Ociepleniu towarzyszyæ bêd± jednak przelotne opady deszczu i w niektórych regionach ¶niegu. Mo¿e te¿ wyst±piæ go³oled¼.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/imgw" title="imgw" rel="tag">imgw</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/opady" title="opady" rel="tag">opady</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                </ul>
                        </article>
                </li>
            <li id="banP99_DFP" class="entry banEntry banIndexDFP">
                                <script type="text/javascript">
                                    putBanDFPInViewObject({
                                        slot: '099-BOMBKA',
                                        divId: 'banP99_DFP',
                                        kw: ['list']
                                    });
                                </script>
                            </li>
                    <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30675112,przedwczesna-wiosna-dotrze-do-polski-na-termometrach-mozliwe.html" title="Bêdzie zaskoczenie w pogodzie. Do Polski zmierza przedwczesna wiosna. Termometry oszalej±">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/14/41/1d/z30675476II,Wiosna---zdj--ilustr-.jpg" fetchpriority="auto" alt="Bêdzie zaskoczenie w pogodzie. Do Polski zmierza przedwczesna wiosna. Termometry oszalej±" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30675112,przedwczesna-wiosna-dotrze-do-polski-na-termometrach-mozliwe.html" title="Bêdzie zaskoczenie w pogodzie. Do Polski zmierza przedwczesna wiosna. Termometry oszalej±">Bêdzie zaskoczenie w pogodzie. Do Polski zmierza przedwczesna wiosna. Termometry oszalej±</a></h2>
                        </header>
                        <p class="lead">
                                Od kilku dni w kraju utrzymuje siê wietrzna i deszczowa aura. W wyniku och³odzenia, mo¿liwe stan± siê nawet ¶nie¿yce. Do Polski zbli¿a siê jednak masa ciep³ego powietrza, które sprowadzi wiosnê i wysok± temperaturê. Kiedy zrobi siê cieplej?</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/temperatura" title="temperatura" rel="tag">temperatura</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/wiosna" title="wiosna" rel="tag">wiosna</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30669189,podmuch-wiosny-coraz-blizej-kiedy-zrobi-sie-cieplej-synoptycy.html" title="'Podmuch wiosny' coraz bli¿ej. Kiedy zrobi siê cieplej? Synoptycy: Termometry wska¿± nawet 17 stopni">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/9d/3f/1d/z30669469II,Wiosna---zdj--ilustr-.jpg" fetchpriority="auto" alt="'Podmuch wiosny' coraz bli¿ej. Kiedy zrobi siê cieplej? Synoptycy: Termometry wska¿± nawet 17 stopni" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30669189,podmuch-wiosny-coraz-blizej-kiedy-zrobi-sie-cieplej-synoptycy.html" title="'Podmuch wiosny' coraz bli¿ej. Kiedy zrobi siê cieplej? Synoptycy: Termometry wska¿± nawet 17 stopni">"Podmuch wiosny" coraz bli¿ej. Kiedy zrobi siê cieplej? Synoptycy: Termometry wska¿± nawet 17 stopni</a></h2>
                        </header>
                        <p class="lead">
                                Nawet 17 stopni Celsjusza poka¿± niebawem termometry w niektórych regionach Polski. Do kraju zbli¿a siê bowiem "podmuch wiosny". "Bêd± to najprawdopodobniej najcieplejsze dni od pocz±tku mijaj±cego roku" - prognozuj± fanipogody.pl.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/opady-deszczu" title="opady deszczu" rel="tag">opady deszczu</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/temperatura" title="temperatura" rel="tag">temperatura</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30660606,cieplejsze-dni-nie-potrwaja-dlugo-powrot-termicznej-zimy-i.html" title="Cieplejsze dni nie potrwaj± d³ugo. Powrót termicznej zimy i opadów ¶niegu ju¿ w kolejnych tygodniach">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/0c/3d/1d/z30660876II,Prognoza-pogody-na-luty--Powrot-opadow-sniegu.jpg" fetchpriority="auto" alt="Cieplejsze dni nie potrwaj± d³ugo. Powrót termicznej zimy i opadów ¶niegu ju¿ w kolejnych tygodniach" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30660606,cieplejsze-dni-nie-potrwaja-dlugo-powrot-termicznej-zimy-i.html" title="Cieplejsze dni nie potrwaj± d³ugo. Powrót termicznej zimy i opadów ¶niegu ju¿ w kolejnych tygodniach">Cieplejsze dni nie potrwaj± d³ugo. Powrót termicznej zimy i opadów ¶niegu ju¿ w kolejnych tygodniach</a></h2>
                        </header>
                        <p class="lead">
                                Synoptycy wskazuj±, ¿e najbli¿sze dni przynios± wy¿sz± ni¿ na ogó³ temperaturê powietrza. Z prognoz ¶rednioterminowych wynika jednak, ¿e okres ocieplenia nie utrzyma siê do koñca miesi±ca. Ju¿ kolejne tygodnie przynie¶æ mog± powrót sporadycznych...</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/imgw" title="imgw" rel="tag">imgw</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/temperatura" title="temperatura" rel="tag">temperatura</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30658279,cyklon-nadina-uderzy-w-polske-czeka-nas-gwaltowna-zmiana-pogody.html" title="Cyklon Nadina uderzy w Polskê. Czeka nas gwa³towna zmiana pogody">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/06/3c/1d/z30658310II,Pogoda--zdjecie-ilustracyjne-.jpg" fetchpriority="auto" alt="Cyklon Nadina uderzy w Polskê. Czeka nas gwa³towna zmiana pogody" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30658279,cyklon-nadina-uderzy-w-polske-czeka-nas-gwaltowna-zmiana-pogody.html" title="Cyklon Nadina uderzy w Polskê. Czeka nas gwa³towna zmiana pogody">Cyklon Nadina uderzy w Polskê. Czeka nas gwa³towna zmiana pogody</a></h2>
                        </header>
                        <p class="lead">
                                Fronty cyklonu Nadina, który bêdzie przemieszcza³ siê nad pó³nocn± Europ±, nad Polsk± pojawi± w pi±tek. Spowoduj± one intensywne opady i silne porywy wiatru. Przy czym nie spadnie temperatura. Wrêcz przeciwnie.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/cyklon" title="cyklon" rel="tag">cyklon</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/temperatura" title="temperatura" rel="tag">temperatura</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30642399,to-juz-koniec-zimy-prognozy-pogody-wskazuja-jasno-nadchodzi.html" title="To ju¿ koniec zimy? Prognozy pogody wskazuj± jasno: Nadchodzi ocieplenie">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/f6/39/1d/z30642934II,To-juz-koniec-zimy--Prognozy-pogody-wskazuja-jasno.jpg" fetchpriority="auto" alt="To ju¿ koniec zimy? Prognozy pogody wskazuj± jasno: Nadchodzi ocieplenie" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30642399,to-juz-koniec-zimy-prognozy-pogody-wskazuja-jasno-nadchodzi.html" title="To ju¿ koniec zimy? Prognozy pogody wskazuj± jasno: Nadchodzi ocieplenie">To ju¿ koniec zimy? Prognozy pogody wskazuj± jasno: Nadchodzi ocieplenie</a></h2>
                        </header>
                        <p class="lead">
                                W ostatnich dniach towarzyszy³a nam niska temperatura i silny wiatr. Teraz synoptycy zapowiadaj± znacznie ocieplenie. Termometry wska¿± nawet 10 stopni Celsjusza.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/temperatura" title="temperatura" rel="tag">temperatura</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30636799,niz-katrin-uderza-imgw-wydal-alerty-zolte-i-pomaranczowe.html" title="Ni¿ Katrin uderza. IMGW wyda³ alerty. ¯ó³te i pomarañczowe ostrze¿enia objê³y ponad po³owê Polski">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/13/19/1c/z29465875II,Silny-wiatr---zdjecie-ilustracyjne.jpg" fetchpriority="auto" alt="Ni¿ Katrin uderza. IMGW wyda³ alerty. ¯ó³te i pomarañczowe ostrze¿enia objê³y ponad po³owê Polski" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30636799,niz-katrin-uderza-imgw-wydal-alerty-zolte-i-pomaranczowe.html" title="Ni¿ Katrin uderza. IMGW wyda³ alerty. ¯ó³te i pomarañczowe ostrze¿enia objê³y ponad po³owê Polski">Ni¿ Katrin uderza. IMGW wyda³ alerty. ¯ó³te i pomarañczowe ostrze¿enia objê³y ponad po³owê Polski</a></h2>
                        </header>
                        <p class="lead">
                                W sobotê pogoda w Polsce mo¿e byæ gro¼na. IMG wyda³o alerty dla a¿ dziesiêciu województw. W przypadku dwóch z nich obowi±zuj± ostrze¿enia ¿ó³te i pomarañczowe, a dla pozosta³ych o¶miu ¿ó³te. Chodzi o porywy wiatru, które miejscami przekraczaæ mog±...</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/alerty-imgw" title="alerty imgw" rel="tag">alerty imgw</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/imgw" title="imgw" rel="tag">imgw</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30634566,prognoza-pogody-na-weekend-snieg-deszcz-i-silny-wiatr-w-calej.html" title="Jaka pogoda w weekend? ¦nieg, deszcz i silny wiatr w ca³ej Polsce. Porywy nawet do 130 km/h">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/89/37/1d/z30635401II,W-weekend-spodziewany-jest-silny-wiatr-i-opady-sni.jpg" fetchpriority="auto" alt="Jaka pogoda w weekend? ¦nieg, deszcz i silny wiatr w ca³ej Polsce. Porywy nawet do 130 km/h" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30634566,prognoza-pogody-na-weekend-snieg-deszcz-i-silny-wiatr-w-calej.html" title="Jaka pogoda w weekend? ¦nieg, deszcz i silny wiatr w ca³ej Polsce. Porywy nawet do 130 km/h">Jaka pogoda w weekend? ¦nieg, deszcz i silny wiatr w ca³ej Polsce. Porywy nawet do 130 km/h</a></h2>
                        </header>
                        <p class="lead">
                                W ostatni weekend stycznia nad Polsk± utrzyma siê deszczowa i wietrzna pogoda, miejscami mog± te¿ wystêpowaæ oblodzenia. Synoptycy Instytutu Meteorologii i Gospodarki Wodnej (IMGW) wydali ju¿ ostrze¿enia meteorologiczne przed silnym wiatrem. Na...</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/imgw" title="imgw" rel="tag">imgw</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/ostrzezenie-meteorologiczne" title="ostrze¿enie meteorologiczne" rel="tag">ostrze¿enie meteorologiczne</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda-na-weekend" title="pogoda na weekend" rel="tag">pogoda na weekend</a></li>
                                </ul>
                        </article>
                </li>
            </ul>
                        </div><!-- /.main_content -->
                    <div class="right_aside">
                            <!-- news_box_fallback_nsr_desktop 1.3 widget_id:48, versionId:823 -->
        <div class="newsBox lazy_load">
                    <div class="newsBox__arrows">
                        <div class="newsBox__arrows--left newsBox__arrows__hide">
                            <div class="newsBox__arrows__icon--left"></div>
                        </div>
                        <div class="newsBox__arrows--right newsBox__arrows__hide">
                            <div class="newsBox__arrows__icon--right"></div>
                        </div>
                    </div>
                    <div class="newsBox__header">
                        <div class="newsBox__tab newsBox--activeTab" data-tab="tab1">POPULARNE</div>
                        <div class="newsBox__tab" data-tab="tab2">NAJNOWSZE</div>

                    </div>
                    <div class="newsBox__content">
                        <div class="newsBox__contentElement newsBox__popularList newsBox__photoVersion">
                            <ul>
                                <li class="newsBox__item">
                                            <a class="newsBox__itemLink" href="https://wiadomosci.gazeta.pl/wiadomosci/7,114884,30688364,czarnek-nie-mogl-powstrzymac-sie-w-programie-na-zywo-bo-wstane.html#do_w=48&do_v=823&do_st=RS&do_sid=793&do_a=793&e=PSzPopImg1&do_upid=823_ti&do_utid=30688364&do_uvid=1707665545746" title=""
                                                data-bd-viewability="1" data-bd-viewability-id="newsBoxPopularList" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/7,114884,30688364,czarnek-nie-mogl-powstrzymac-sie-w-programie-na-zywo-bo-wstane.html#do_w=48&do_v=823&do_st=RS&do_sid=793&do_a=793&e=PSzPopImg1&do_upid=823_ti&do_utid=30688364&do_uvid=1707665545746">
                                                <span class="newsBox__itemPhotoBox">
                                                        <noscript>
                                                            <img class="newsBox__itemPhoto" src="https://bi.im-g.pl/im/71/44/1d/z30688369F.jpg" alt="" />
                                                        </noscript>
                                                        <img class="newsBox__itemPhoto" src="https://static.im-g.pl/i/obrazki/awd/image_placeholder_small.svg" data-src="https://bi.im-g.pl/im/71/44/1d/z30688369F.jpg" alt=""/>
                                                    </span>
                                                <span class="newsBox__itemTitle">Awantura w programie na ¿ywo. Czarnek star³ siê z Lubnauer</span>
                                            </a>
                                        </li>

                                    <li class="newsBox__item">
                                            <a class="newsBox__itemLink" href="https://wiadomosci.gazeta.pl/wiadomosci/7,114884,30691217,dziennikarz-gazeta-pl-o-tajemniczej-grupie-pis-na-whatsappie.html#do_w=48&do_v=823&do_st=RS&do_sid=793&do_a=793&e=PSzPopImg2&do_upid=823_ti&do_utid=30691217&do_uvid=1707742242647" title=""
                                                data-bd-viewability="1" data-bd-viewability-id="newsBoxPopularList" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/7,114884,30691217,dziennikarz-gazeta-pl-o-tajemniczej-grupie-pis-na-whatsappie.html#do_w=48&do_v=823&do_st=RS&do_sid=793&do_a=793&e=PSzPopImg2&do_upid=823_ti&do_utid=30691217&do_uvid=1707742242647">
                                                <span class="newsBox__itemPhotoBox">
                                                        <noscript>
                                                            <img class="newsBox__itemPhoto" src="https://bi.im-g.pl/im/31/42/1d/z30681649F.jpg" alt="" />
                                                        </noscript>
                                                        <img class="newsBox__itemPhoto" src="https://static.im-g.pl/i/obrazki/awd/image_placeholder_small.svg" data-src="https://bi.im-g.pl/im/31/42/1d/z30681649F.jpg" alt=""/>
                                                    </span>
                                                <span class="newsBox__itemTitle">Odkryli¶my tajemnicz± grupê PiS na WhatsAppie. Co tam znajdziemy?</span>
                                            </a>
                                        </li>

                                    <li class="newsBox__item">
                                            <a class="newsBox__itemLink" href="https://wiadomosci.gazeta.pl/wiadomosci/7,114884,30688067,w-pis-chca-rozliczac-dziadziusia-ale-dziadzius-ma-na-to.html#do_w=48&do_v=823&do_st=RS&do_sid=793&do_a=793&e=PSzPopImg3&do_upid=823_ti&do_utid=30688067&do_uvid=1707760621354" title=""
                                                data-bd-viewability="1" data-bd-viewability-id="newsBoxPopularList" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/7,114884,30688067,w-pis-chca-rozliczac-dziadziusia-ale-dziadzius-ma-na-to.html#do_w=48&do_v=823&do_st=RS&do_sid=793&do_a=793&e=PSzPopImg3&do_upid=823_ti&do_utid=30688067&do_uvid=1707760621354">
                                                <span class="newsBox__itemPhotoBox">
                                                        <noscript>
                                                            <img class="newsBox__itemPhoto" src="https://bi.im-g.pl/im/37/42/1d/z30679863F.jpg" alt="" />
                                                        </noscript>
                                                        <img class="newsBox__itemPhoto" src="https://static.im-g.pl/i/obrazki/awd/image_placeholder_small.svg" data-src="https://bi.im-g.pl/im/37/42/1d/z30679863F.jpg" alt=""/>
                                                    </span>
                                                <span class="newsBox__itemTitle">W PiS chc± "rozliczaæ dziadziusia", ale "dziadziu¶" ma na to patent</span>
                                            </a>
                                        </li>

                                    <li class="newsBox__item">
                                            <a class="newsBox__itemLink" href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30690795,smiertelne-potracenie-10-latka-w-wawrowie-prokuratura-zabrala.html#do_w=48&do_v=823&do_st=RS&do_sid=793&do_a=793&e=PSzPopImg4&do_upid=823_ti&do_utid=30690795&do_uvid=1707736904832" title=""
                                                data-bd-viewability="1" data-bd-viewability-id="newsBoxPopularList" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30690795,smiertelne-potracenie-10-latka-w-wawrowie-prokuratura-zabrala.html#do_w=48&do_v=823&do_st=RS&do_sid=793&do_a=793&e=PSzPopImg4&do_upid=823_ti&do_utid=30690795&do_uvid=1707736904832">
                                                <span class="newsBox__itemPhotoBox">
                                                        <noscript>
                                                            <img class="newsBox__itemPhoto" src="https://bi.im-g.pl/im/7a/43/1d/z30685562F.jpg" alt="" />
                                                        </noscript>
                                                        <img class="newsBox__itemPhoto" src="https://static.im-g.pl/i/obrazki/awd/image_placeholder_small.svg" data-src="https://bi.im-g.pl/im/7a/43/1d/z30685562F.jpg" alt=""/>
                                                    </span>
                                                <span class="newsBox__itemTitle">¦miertelne potr±cenie 10-latka w Wawrowie. Prokuratura zabra³a g³os</span>
                                            </a>
                                        </li>

                                    <li class="newsBox__item">
                                            <a class="newsBox__itemLink" href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30690126,potracenie-10-latka-w-wawrowie-co-z-kierowcami-ktorzy-prowadza.html#do_w=48&do_v=823&do_st=RS&do_sid=793&do_a=793&e=PSzPopImg5&do_upid=823_ti&do_utid=30690126&do_uvid=1707739405620" title=""
                                                data-bd-viewability="1" data-bd-viewability-id="newsBoxPopularList" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30690126,potracenie-10-latka-w-wawrowie-co-z-kierowcami-ktorzy-prowadza.html#do_w=48&do_v=823&do_st=RS&do_sid=793&do_a=793&e=PSzPopImg5&do_upid=823_ti&do_utid=30690126&do_uvid=1707739405620">
                                                <span class="newsBox__itemPhotoBox">
                                                        <noscript>
                                                            <img class="newsBox__itemPhoto" src="https://bi.im-g.pl/im/3a/59/1c/z29727290F.jpg" alt="" />
                                                        </noscript>
                                                        <img class="newsBox__itemPhoto" src="https://static.im-g.pl/i/obrazki/awd/image_placeholder_small.svg" data-src="https://bi.im-g.pl/im/3a/59/1c/z29727290F.jpg" alt=""/>
                                                    </span>
                                                <span class="newsBox__itemTitle">Kierowcy prowadz± mimo braku uprawnieñ. "Problem nierozwi±zany od wielu lat"</span>
                                            </a>
                                        </li>

                                    </ul>
                        </div>
                        <div class="newsBox__contentElement newsBox__newestList">
                            <ul>
                                <li class="newsBox__item">
                                            <time class="newsBox__itemTime" datetime="2024-02-12">22:28</time>
                                            <a class="newsBox__itemLink" href="https://wiadomosci.gazeta.pl/wiadomosci/7,114881,30692933,rosyjski-dron-spadl-na-terytorium-moldawii-na-pokladzie-znajdowalo.html#do_w=48&do_v=823&do_st=RS&do_sid=783&do_a=783&e=PSzLatLink1&do_upid=823_t&do_utid=30692933&do_uvid=1707773300576" title="Rosyjski dron uderzeniowy spad³ na terytorium Mo³dawii"
                                                data-bd-viewability="1" data-bd-viewability-id="newsBoxNewestList" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/7,114881,30692933,rosyjski-dron-spadl-na-terytorium-moldawii-na-pokladzie-znajdowalo.html#do_w=48&do_v=823&do_st=RS&do_sid=783&do_a=783&e=PSzLatLink1&do_upid=823_t&do_utid=30692933&do_uvid=1707773300576">
                                                <span class="newsBox__itemTitle">Rosyjski dron uderzeniowy spad³ na terytorium Mo³dawii</span>
                                            </a>
                                        </li>

                                    <li class="newsBox__item">
                                            <time class="newsBox__itemTime" datetime="2024-02-12">22:23</time>
                                            <a class="newsBox__itemLink" href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30693104,barbara-nowacka-zdradza-plany-wobec-hit-u-co-z-podrecznikiem.html#do_w=48&do_v=823&do_st=RS&do_sid=783&do_a=783&e=PSzLatLink2&do_upid=823_t&do_utid=30693104&do_uvid=1707773035314" title="Barbara Nowacka zdradza plany wobec HiT-u. Co z podrêcznikiem? &#034;Gniot&#034;"
                                                data-bd-viewability="1" data-bd-viewability-id="newsBoxNewestList" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30693104,barbara-nowacka-zdradza-plany-wobec-hit-u-co-z-podrecznikiem.html#do_w=48&do_v=823&do_st=RS&do_sid=783&do_a=783&e=PSzLatLink2&do_upid=823_t&do_utid=30693104&do_uvid=1707773035314">
                                                <span class="newsBox__itemTitle">Barbara Nowacka zdradza plany wobec HiT-u. Co z podrêcznikiem? "Gniot"</span>
                                            </a>
                                        </li>

                                    <li class="newsBox__item">
                                            <time class="newsBox__itemTime" datetime="2024-02-12">21:53</time>
                                            <a class="newsBox__itemLink" href="https://wiadomosci.gazeta.pl/wiadomosci/7,114881,30692943,donald-trump-lokajem-putina-prezydent-usa-przestrzega-ze.html#do_w=48&do_v=823&do_st=RS&do_sid=783&do_a=783&e=PSzLatLink3&do_upid=823_t&do_utid=30692943&do_uvid=1707771191107" title="Prezydent USA odpowiedzia³ na s³owa Trumpa. Nazwa³ go &#034;us³u¿nym lokajem&#034;"
                                                data-bd-viewability="1" data-bd-viewability-id="newsBoxNewestList" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/7,114881,30692943,donald-trump-lokajem-putina-prezydent-usa-przestrzega-ze.html#do_w=48&do_v=823&do_st=RS&do_sid=783&do_a=783&e=PSzLatLink3&do_upid=823_t&do_utid=30692943&do_uvid=1707771191107">
                                                <span class="newsBox__itemTitle">Prezydent USA odpowiedzia³ na s³owa Trumpa. Nazwa³ go "us³u¿nym lokajem"</span>
                                            </a>
                                        </li>

                                    <li class="newsBox__item">
                                            <time class="newsBox__itemTime" datetime="2024-02-12">21:36</time>
                                            <a class="newsBox__itemLink" href="https://wiadomosci.gazeta.pl/wiadomosci/7,114884,30693108,samuel-pereira-w-kanale-zero-o-pracy-w-tvp-byly-rzeczy-ktore.html#do_w=48&do_v=823&do_st=RS&do_sid=783&do_a=783&e=PSzLatLink4&do_upid=823_t&do_utid=30693108&do_uvid=1707770171276" title="Samuel Pereira w Kanale Zero. Mówi³ o &#034;standardach dziennikarskich&#034;"
                                                data-bd-viewability="1" data-bd-viewability-id="newsBoxNewestList" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/7,114884,30693108,samuel-pereira-w-kanale-zero-o-pracy-w-tvp-byly-rzeczy-ktore.html#do_w=48&do_v=823&do_st=RS&do_sid=783&do_a=783&e=PSzLatLink4&do_upid=823_t&do_utid=30693108&do_uvid=1707770171276">
                                                <span class="newsBox__itemTitle">Samuel Pereira w Kanale Zero. Mówi³ o "standardach dziennikarskich"</span>
                                            </a>
                                        </li>

                                    <li class="newsBox__item">
                                            <time class="newsBox__itemTime" datetime="2024-02-12">21:23</time>
                                            <a class="newsBox__itemLink" href="https://wiadomosci.gazeta.pl/wiadomosci/7,114884,30693018,wybory-samorzadowe-w-srode-ogloszenie-kandydatki-lewicy-na.html#do_w=48&do_v=823&do_st=RS&do_sid=783&do_a=783&e=PSzLatLink5&do_upid=823_t&do_utid=30693018&do_uvid=1707769383615" title="Magdalena Biejat wkrótce og³osi swój start w wyborach samorz±dowych"
                                                data-bd-viewability="1" data-bd-viewability-id="newsBoxNewestList" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/7,114884,30693018,wybory-samorzadowe-w-srode-ogloszenie-kandydatki-lewicy-na.html#do_w=48&do_v=823&do_st=RS&do_sid=783&do_a=783&e=PSzLatLink5&do_upid=823_t&do_utid=30693018&do_uvid=1707769383615">
                                                <span class="newsBox__itemTitle">Magdalena Biejat wkrótce og³osi swój start w wyborach samorz±dowych</span>
                                            </a>
                                        </li>

                                    </ul>
                        </div>
                    </div>
                </div>
            
<!--26162393, [ /tpl/wzorzec/modules/news/news_nsr.jsp ], bigDataRecommendationsController-->
<div id="adUnit-003-RECTANGLE" class="adviewDFPBanner DFP-003-RECTANGLE">
        <span class="banLabel" style="display: none;">REKLAMA</span>
        <div id='div-gpt-ad-003-RECTANGLE-0'>
            <script type='text/javascript'>
                if(dfpParams.slots['003-RECTANGLE'] && dfpParams.slots['003-RECTANGLE'].autoLoad) {
                    if (window.adviewDFP && adviewDFP.scrollSlot) adviewDFP.scrollSlot.push('003-RECTANGLE');
                    if (window.AdviewAdsTag) window.AdviewAdsTag.autoLoadSlot.push('003-RECTANGLE');
                } else if (!dfpParams.slots['003-RECTANGLE']) {
                    if ('003-RECTANGLE'.includes('TOPBOARD')) {
                        const el = document.getElementById('adUnit-003-RECTANGLE');
                        if (el && el.parentNode.className.includes('ban') && el.parentNode.className.includes('wrapper')) {
                            el.parentNode.remove();
                        }
                    }
                } else {
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-003-RECTANGLE-0'); });
                }
            </script>
        </div>
    </div>
<!-- v1.0 -->
<!--410355731, [ /tpl/ads/prod/dfpSlotScripts.jsp ], dfpBanersSlotScriptsBean-->
<!-- v2.2.2 -->
<!--410355730, [ /tpl/ads/prod/dfpSlot.jsp ], dfpBanersSlotBean-->
</div><!-- /.right_aside -->
                    </div><!-- /.content_wrap -->
                    <div class="midindex">
                            </div>
                    <div id="adsMidboardDivId_9">
                                <script>
                                    putBanDFPInViewObject({
                                        slot: "011-MIDBOARD",
                                        divId: "adsMidboardDivId_9",
                                    });
                                </script>
                            </div>
                        <div class="content_wrap">
                <div class="main_content">
                        <ul class="list_tiles">
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30620643,gwaltowne-ocieplenie-imgw-ostrzega-zblizaja-sie-aktywne-fronty.html" title="Gwa³towne ocieplenie, IMGW ostrzega. Zbli¿aj± siê aktywne fronty, bêdzie niebezpiecznie">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/3c/33/1d/z30620732II,Roztopy---zdj--ilustr-.jpg" fetchpriority="auto" alt="Gwa³towne ocieplenie, IMGW ostrzega. Zbli¿aj± siê aktywne fronty, bêdzie niebezpiecznie" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30620643,gwaltowne-ocieplenie-imgw-ostrzega-zblizaja-sie-aktywne-fronty.html" title="Gwa³towne ocieplenie, IMGW ostrzega. Zbli¿aj± siê aktywne fronty, bêdzie niebezpiecznie">Gwa³towne ocieplenie, IMGW ostrzega. Zbli¿aj± siê aktywne fronty, bêdzie niebezpiecznie</a></h2>
                        </header>
                        <p class="lead">
                                Pogoda w Polsce coraz bardziej przypomina wiosenn± odwil¿. Na termometrach czê¶ciej widujemy warto¶ci powy¿ej 0 st. C. W zwi±zku z dodatkowymi opadami deszczu IMGW wyda³ liczne ostrze¿enia przed roztopami. Zagro¿eniem mo¿e byæ równie¿ silny wiatr.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/alerty-imgw" title="alerty imgw" rel="tag">alerty imgw</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/opady-deszczu" title="opady deszczu" rel="tag">opady deszczu</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/ostrzezenie-meteorologiczne" title="ostrze¿enie meteorologiczne" rel="tag">ostrze¿enie meteorologiczne</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30594151,efthalia-zamiesza-w-pogodzie-nad-polske-nadciagaja-silne-zamiecie.html" title="Efthalia zamiesza w pogodzie. Nad Polskê nadci±gaj± silne zamiecie ¶nie¿ne i mróz">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/fa/23/1d/z30555898II.jpg" fetchpriority="auto" alt="Efthalia zamiesza w pogodzie. Nad Polskê nadci±gaj± silne zamiecie ¶nie¿ne i mróz" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30594151,efthalia-zamiesza-w-pogodzie-nad-polske-nadciagaja-silne-zamiecie.html" title="Efthalia zamiesza w pogodzie. Nad Polskê nadci±gaj± silne zamiecie ¶nie¿ne i mróz">Efthalia zamiesza w pogodzie. Nad Polskê nadci±gaj± silne zamiecie ¶nie¿ne i mróz</a></h2>
                        </header>
                        <p class="lead">
                                Wir ni¿owy Efthalia w najbli¿szych dniach bêdzie kszta³towa³ pogodê w ca³ej Polsce. Meteorolodzy zapowiadaj± intensywne opady ¶niegu i silny wiatr, co bêdzie skutkowa³o zamieciami ¶nie¿nymi w przewa¿aj±cej czê¶ci kraju.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/zima" title="zima" rel="tag">zima</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30593891,zima-uderzy-ze-zdwojona-sila-sa-alerty-rcb-mozliwe-przerwy.html" title="Zima uderzy ze zdwojon± si³±. S± alerty RCB. Mo¿liwe przerwy w dostawie pr±du">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/96/23/1d/z30555286II,Nagle-ocieplenie-stratosfery-spowoduje-uderzenie-z.jpg" fetchpriority="auto" alt="Zima uderzy ze zdwojon± si³±. S± alerty RCB. Mo¿liwe przerwy w dostawie pr±du" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30593891,zima-uderzy-ze-zdwojona-sila-sa-alerty-rcb-mozliwe-przerwy.html" title="Zima uderzy ze zdwojon± si³±. S± alerty RCB. Mo¿liwe przerwy w dostawie pr±du">Zima uderzy ze zdwojon± si³±. S± alerty RCB. Mo¿liwe przerwy w dostawie pr±du</a></h2>
                        </header>
                        <p class="lead">
                                Instytut Meteorologii i Gospodarki Wodnej ostrzega przed intensywnymi opadami ¶niegu i silnym wiatrem, a w konsekwencji zawiejami i zamieciami ¶nie¿nymi na pó³nocy kraju oraz oblodzeniem na po³udniowym wschodzie Polski. Alerty wyda³o te¿ Rz±dowe...</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/imgw" title="imgw" rel="tag">imgw</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/rcb" title="rcb" rel="tag">rcb</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30592728,odwilz-przyniesie-chwilowa-ulge-w-lutym-zima-uderzy-ponownie.html" title="Nag³e ocieplenie oka¿e siê chwilowe. Wiemy, kiedy znów uderzy siarczysty mróz">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/f5/2c/1d/z30592757II,Odwilz-przyniesie-chwilowa-ulge--Potem-do-kraju-po.jpg" fetchpriority="auto" alt="Nag³e ocieplenie oka¿e siê chwilowe. Wiemy, kiedy znów uderzy siarczysty mróz" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30592728,odwilz-przyniesie-chwilowa-ulge-w-lutym-zima-uderzy-ponownie.html" title="Nag³e ocieplenie oka¿e siê chwilowe. Wiemy, kiedy znów uderzy siarczysty mróz">Nag³e ocieplenie oka¿e siê chwilowe. Wiemy, kiedy znów uderzy siarczysty mróz</a></h2>
                        </header>
                        <p class="lead">
                                W najbli¿szych dniach spodziewana jest odwil¿, która jednak nie bêdzie oznacza³a koñca tegorocznej zimy. Ju¿ w lutym czeka nas kolejne gwa³towne och³odzenie, które przyniesie ujemn± anomaliê temperatury. Na termometrach ponownie pojawi± siê...</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/mroz" title="mróz" rel="tag">mróz</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/odwilz" title="odwil¿" rel="tag">odwil¿</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/opady" title="opady" rel="tag">opady</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30570301,mrozna-zima-wraca-do-polski-minionej-nocy-nawet-23-stopnie.html" title="Mro¼na zima wraca do Polski. Minionej nocy nawet -23 stopnie Celsjusza. To jednak nie koniec">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/48/27/1d/z30570312II,Zima.jpg" fetchpriority="auto" alt="Mro¼na zima wraca do Polski. Minionej nocy nawet -23 stopnie Celsjusza. To jednak nie koniec" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30570301,mrozna-zima-wraca-do-polski-minionej-nocy-nawet-23-stopnie.html" title="Mro¼na zima wraca do Polski. Minionej nocy nawet -23 stopnie Celsjusza. To jednak nie koniec">Mro¼na zima wraca do Polski. Minionej nocy nawet -23 stopnie Celsjusza. To jednak nie koniec</a></h2>
                        </header>
                        <p class="lead">
                                Za nami wyj±tkowo mro¼na noc. Szczególnie zimno by³o w pó³nocno-wschodniej czê¶ci Polski. Synoptycy jednak wskazuj±, ¿e najzimniej bêdzie we wtorek. Temperatury mog± wynie¶æ wówczas nawet -25 stopni Celsjusza przy gruncie.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30564389,do-polski-dotarl-mroz-znad-syberii-ostrzezenia-imgw-dla-wszystkich.html" title="Do Polski dotar³ mróz znad Syberii. Ostrze¿enia IMGW dla wszystkich województw">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/a3/01/1d/z30413987II,Pogoda--Zima-wkracza-do-Polski--Synoptycy-z-IMGW-z.jpg" fetchpriority="auto" alt="Do Polski dotar³ mróz znad Syberii. Ostrze¿enia IMGW dla wszystkich województw" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30564389,do-polski-dotarl-mroz-znad-syberii-ostrzezenia-imgw-dla-wszystkich.html" title="Do Polski dotar³ mróz znad Syberii. Ostrze¿enia IMGW dla wszystkich województw">Do Polski dotar³ mróz znad Syberii. Ostrze¿enia IMGW dla wszystkich województw</a></h2>
                        </header>
                        <p class="lead">
                                Nad Polskê dociera mro¼na masa powietrza znad Syberii. Nocami temperatura bêdzie spadaæ nawet do minus dwudziestu stopni. IMGW wyda³o alerty 1. stopnia przed oblodzeniem na drogach dla wszystkich województw.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/imgw" title="imgw" rel="tag">imgw</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/mroz" title="mróz" rel="tag">mróz</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/ostrzezenie-meteorologiczne" title="ostrze¿enie meteorologiczne" rel="tag">ostrze¿enie meteorologiczne</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30557156,cyklon-henk-nadchodzi-blisko-20-st-c-roznicy-w-temperaturze.html" title="Cyklon Henk nadchodzi. Blisko 20 st. C ró¿nicy w temperaturze, a to nie koniec. Gdzie spadnie ¶nieg?">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/41/24/1d/z30557249II,We-srode-Polska-bedzie-podzielona-na-trzy-obszary-.jpg" fetchpriority="auto" alt="Cyklon Henk nadchodzi. Blisko 20 st. C ró¿nicy w temperaturze, a to nie koniec. Gdzie spadnie ¶nieg?" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30557156,cyklon-henk-nadchodzi-blisko-20-st-c-roznicy-w-temperaturze.html" title="Cyklon Henk nadchodzi. Blisko 20 st. C ró¿nicy w temperaturze, a to nie koniec. Gdzie spadnie ¶nieg?">Cyklon Henk nadchodzi. Blisko 20 st. C ró¿nicy w temperaturze, a to nie koniec. Gdzie spadnie ¶nieg?</a></h2>
                        </header>
                        <p class="lead">
                                Do Polski zbli¿a siê cyklon Henk, który wywo³a trzy skrajne profile pogodowe. Podczas gdy w czê¶ci kraju na powrót zago¶ci ¶nieg, mieszkañcy pozosta³ych regionów bêd± mierzyæ siê z opadami deszczu. Ró¿nica w temperaturze bêdzie bliska 20 st. C.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/deszcz" title="deszcz" rel="tag">deszcz</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/imgw" title="IMGW" rel="tag">IMGW</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30554681,nagla-zmiana-pogody-w-calej-polsce-nadciagaja-sniezyce-i-mroz.html" title="¦nie¿yce i mróz nadci±gaj±. IMGW z najwy¿szymi alertami. Nag³a zmiana pogody w Polsce">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/c1/1f/1d/z30536129II.jpg" fetchpriority="auto" alt="¦nie¿yce i mróz nadci±gaj±. IMGW z najwy¿szymi alertami. Nag³a zmiana pogody w Polsce" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30554681,nagla-zmiana-pogody-w-calej-polsce-nadciagaja-sniezyce-i-mroz.html" title="¦nie¿yce i mróz nadci±gaj±. IMGW z najwy¿szymi alertami. Nag³a zmiana pogody w Polsce">¦nie¿yce i mróz nadci±gaj±. IMGW z najwy¿szymi alertami. Nag³a zmiana pogody w Polsce</a></h2>
                        </header>
                        <p class="lead">
                                Pogoda w najbli¿szych dniach bardzo siê zmieni. W Polsce pojawi± siê opady ¶niegu, oblodzenie, a temperatura znacznie spadnie. Synoptycy wydali ju¿ ostrze¿enia meteorologiczne dla kilku województw.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/imgw" title="imgw" rel="tag">imgw</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/synoptycy" title="synoptycy" rel="tag">synoptycy</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30554497,synoptycy-prognoza-na-wtorek-do-dopiero-preludium-spojrzcie.html" title="Mro¼ne prognozy na wtorek to zaledwie preludium. 'Spójrzcie na sobotê'">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/91/23/1d/z30554513II,Zdjecie-ilustracyjne.jpg" fetchpriority="auto" alt="Mro¼ne prognozy na wtorek to zaledwie preludium. 'Spójrzcie na sobotê'" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30554497,synoptycy-prognoza-na-wtorek-do-dopiero-preludium-spojrzcie.html" title="Mro¼ne prognozy na wtorek to zaledwie preludium. 'Spójrzcie na sobotê'">Mro¼ne prognozy na wtorek to zaledwie preludium. "Spójrzcie na sobotê"</a></h2>
                        </header>
                        <p class="lead">
                                We wtorkowy poranek temperatura odczuwalna w Suwa³kach mo¿e spa¶æ nawet do -10 stopni. Jak zapowiadaj± jednak synoptycy IMGW, to dopiero wstêp do tego, co nadejdzie w kolejnych dniach. Sobotnie prognozy wskazuj± na jeszcze wiêksze och³odzenie.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/imgw" title="imgw" rel="tag">imgw</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30553564,wielki-powrot-zimy-imgw-ostrzega-przed-zalamaniem-pogody-pojawia.html" title="Wielki powrót zimy. IMGW ostrzega przed za³amaniem pogody. Pojawi± siê ulewy i ¶nie¿yce">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/f8/23/1d/z30553592II,Zima-wroci-do-Polski.jpg" fetchpriority="auto" alt="Wielki powrót zimy. IMGW ostrzega przed za³amaniem pogody. Pojawi± siê ulewy i ¶nie¿yce" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30553564,wielki-powrot-zimy-imgw-ostrzega-przed-zalamaniem-pogody-pojawia.html" title="Wielki powrót zimy. IMGW ostrzega przed za³amaniem pogody. Pojawi± siê ulewy i ¶nie¿yce">Wielki powrót zimy. IMGW ostrzega przed za³amaniem pogody. Pojawi± siê ulewy i ¶nie¿yce</a></h2>
                        </header>
                        <p class="lead">
                                Nowy rok przyniesie za³amanie pogody. W pierwszym dniu 2024 roku w Polsce dominowaæ bêd± zachmurzenia, ulewy i ¶nie¿yce, a ju¿ nied³ugo zrobi siê naprawdê mro¼no.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/temperatura" title="temperatura" rel="tag">temperatura</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/zima" title="zima" rel="tag">zima</a></li>
                                </ul>
                        </article>
                </li>
            </ul>
                        </div><!-- /.main_content -->
                    <div class="right_aside">
                            <div class="right_aside__flexWrap">
                                            <div class="right_aside__innerWrap">
                                                <div id="DFP-003-RECTANGLE_19" class="adviewDFPBanner sticky">
                                                            <script>
                                                                putBanDFPInViewObject({
                                                                    slot: '003-RECTANGLE',
                                                                    divId: 'DFP-003-RECTANGLE_19',
                                                                });
                                                            </script>
                                                        </div>
                                                    </div><!-- /.right_aside__innerWrap -->
                                            </div><!-- /.right_aside__flexWrap -->
                                    </div><!-- /.right_aside -->
                    </div><!-- /.content_wrap -->
                    <div class="midindex">
                            </div>
                    <div id="adsMidboardDivId_19">
                                <script>
                                    putBanDFPInViewObject({
                                        slot: "011-MIDBOARD",
                                        divId: "adsMidboardDivId_19",
                                    });
                                </script>
                            </div>
                        <div class="content_wrap">
                <div class="main_content">
                        <ul class="list_tiles">
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30550845,takiego-sylwestra-dawno-nie-bylo-costa-wkroczy-do-polski-i.html" title="Takiego sylwestra dawno nie by³o. Costa wkroczy do Polski i namiesza w pogodzie">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/d6/1f/1d/z30536150II.jpg" fetchpriority="auto" alt="Takiego sylwestra dawno nie by³o. Costa wkroczy do Polski i namiesza w pogodzie" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30550845,takiego-sylwestra-dawno-nie-bylo-costa-wkroczy-do-polski-i.html" title="Takiego sylwestra dawno nie by³o. Costa wkroczy do Polski i namiesza w pogodzie">Takiego sylwestra dawno nie by³o. Costa wkroczy do Polski i namiesza w pogodzie</a></h2>
                        </header>
                        <p class="lead">
                                Ostatnie dni starego roku bêd± wyj±tkowo ciep³e i mokre w ca³ej Polsce. Pojawi± siê opady deszczu, ¶niegu oraz porywisty wiatr. "W ci±gu najbli¿szych dni nie widaæ powrotu prawdziwej zimy" - zapowiadaj± synoptycy IMGW.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/imgw" title="imgw" rel="tag">imgw</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/synoptycy" title="synoptycy" rel="tag">synoptycy</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30541309,powrot-zimy-w-nowym-roku-prognozy-na-styczen-zwiastuja-mroz.html" title="Powrót zimy w nowym roku? Prognozy na styczeñ zwiastuj± mróz i du¿e opady ¶niegu">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/36/20/1d/z30541366II,Prognoza-pogody-na-styczen.jpg" fetchpriority="auto" alt="Powrót zimy w nowym roku? Prognozy na styczeñ zwiastuj± mróz i du¿e opady ¶niegu" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30541309,powrot-zimy-w-nowym-roku-prognozy-na-styczen-zwiastuja-mroz.html" title="Powrót zimy w nowym roku? Prognozy na styczeñ zwiastuj± mróz i du¿e opady ¶niegu">Powrót zimy w nowym roku? Prognozy na styczeñ zwiastuj± mróz i du¿e opady ¶niegu</a></h2>
                        </header>
                        <p class="lead">
                                Koniec grudnia przyniós³ ze sob± wichury i opady, ale ostatecznie okaza³ siê byæ cieplejszy ni¿ zazwyczaj. Prognozy d³ugoterminowe wskazuj± jednak, ¿e trend ten ulegnie zmianie ju¿ w drugim tygodniu stycznia. Synoptycy informuj±, ¿e przez wiêkszo¶...
                                    </p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/mroz" title="mróz" rel="tag">mróz</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/temperatura" title="temperatura" rel="tag">temperatura</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30538836,pogoda-na-sylwestra-na-termometrach-pojawia-sie-dwustopniowe.html" title="Jaka pogoda w sylwestra i Nowy Rok? W jednym regionie ma byæ szczególnie ciep³o">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/97/1f/1d/z30538903II,Pogoda-na-sylwestra--Na-termometrach-pojawia-sie-d.jpg" fetchpriority="auto" alt="Jaka pogoda w sylwestra i Nowy Rok? W jednym regionie ma byæ szczególnie ciep³o" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30538836,pogoda-na-sylwestra-na-termometrach-pojawia-sie-dwustopniowe.html" title="Jaka pogoda w sylwestra i Nowy Rok? W jednym regionie ma byæ szczególnie ciep³o">Jaka pogoda w sylwestra i Nowy Rok? W jednym regionie ma byæ szczególnie ciep³o</a></h2>
                        </header>
                        <p class="lead">
                                Wed³ug prognozy Instytutu Meteorologii i Gospodarki Wodnej tegoroczny sylwester bêdzie kolejnym w historii, kiedy na termometrach pojawi± siê dwucyfrowe warto¶ci temperatury. Szczególnie ciep³o zrobi siê na po³udniu kraju. Czy s± szansê na pobicie...</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/imgw" title="IMGW" rel="tag">IMGW</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/nowy-rok" title="nowy rok" rel="tag">nowy rok</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30538148,prognoza-pogody-wiatr-nie-odpusci-nawet-w-swieta-nadal-obowiazuja.html" title="To nie koniec wichur. Wiatr nie odpu¶ci nawet w ¶wiêta. Nadal obowi±zuj± ostrze¿enia IMGW">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/ea/1f/1d/z30538218II,Prognoza-pogody--Wiatr-nie-odpusci-nawet-w-swieta-.jpg" fetchpriority="auto" alt="To nie koniec wichur. Wiatr nie odpu¶ci nawet w ¶wiêta. Nadal obowi±zuj± ostrze¿enia IMGW" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30538148,prognoza-pogody-wiatr-nie-odpusci-nawet-w-swieta-nadal-obowiazuja.html" title="To nie koniec wichur. Wiatr nie odpu¶ci nawet w ¶wiêta. Nadal obowi±zuj± ostrze¿enia IMGW">To nie koniec wichur. Wiatr nie odpu¶ci nawet w ¶wiêta. Nadal obowi±zuj± ostrze¿enia IMGW</a></h2>
                        </header>
                        <p class="lead">
                                Po niebezpiecznych wichurach z pi±tku na sobotê (22/23.12) nadejdzie niewielkie rozpogodzenie. Silny wiatr nadal bêdzie siê utrzymywa³ w niektórych rejonach kraju. IMGW utrzymuje ostrze¿enia pogodowe w pó³nocnej czê¶ci Polski i Sudetach. A jak bêd...
                                    </p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/wiatr" title="wiatr" rel="tag">wiatr</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/wichura" title="wichura" rel="tag">wichura</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30534777,potezna-wichura-lamie-duze-drzewa-gleboki-niz-burze-i-snieg.html" title="Potê¿na wichura ³amie du¿e drzewa. G³êboki ni¿, burze i ¶nieg, czyli pierwszy dzieñ kalendarzowej zimy">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/2c/1e/1d/z30534956II,Pierwszy-dzien-zimy.jpg" fetchpriority="auto" alt="Potê¿na wichura ³amie du¿e drzewa. G³êboki ni¿, burze i ¶nieg, czyli pierwszy dzieñ kalendarzowej zimy" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30534777,potezna-wichura-lamie-duze-drzewa-gleboki-niz-burze-i-snieg.html" title="Potê¿na wichura ³amie du¿e drzewa. G³êboki ni¿, burze i ¶nieg, czyli pierwszy dzieñ kalendarzowej zimy">Potê¿na wichura ³amie du¿e drzewa. G³êboki ni¿, burze i ¶nieg, czyli pierwszy dzieñ kalendarzowej zimy</a></h2>
                        </header>
                        <p class="lead">
                                W pi±tek pogoda w ca³ej Polsce bêdzie wyj±tkowo wymagaj±ca. Pojawi± siê silne porywy wiatru, opady deszczu ze ¶niegiem oraz samego ¶niegu. Lokalnie wiatr mo¿e osi±gaæ prêdko¶æ nawet 100 km/h. Musimy siê przygotowaæ na i¶cie zimow± pogodê, pierwsze...
                                    </p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/zima" title="zima" rel="tag">zima</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/snieg" title="¶nieg" rel="tag">¶nieg</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30525518,do-polski-dotrze-kulminacja-dynamicznej-pogody-mozliwy-wiatr.html" title="Do Polski dotrze 'kulminacja dynamicznej pogody'. IMGW ostrzega: Wiatr do 120 km/h. Co ze ¶wiêtami?">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/9c/1c/1d/z30525596II,Punktem-kulminacyjnym-silnych-porywow-wiatru-ma-by.jpg" fetchpriority="auto" alt="Do Polski dotrze 'kulminacja dynamicznej pogody'. IMGW ostrzega: Wiatr do 120 km/h. Co ze ¶wiêtami?" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30525518,do-polski-dotrze-kulminacja-dynamicznej-pogody-mozliwy-wiatr.html" title="Do Polski dotrze 'kulminacja dynamicznej pogody'. IMGW ostrzega: Wiatr do 120 km/h. Co ze ¶wiêtami?">Do Polski dotrze "kulminacja dynamicznej pogody". IMGW ostrzega: Wiatr do 120 km/h. Co ze ¶wiêtami?</a></h2>
                        </header>
                        <p class="lead">
                                Na kilka dni przed ¶wiêtami Bo¿ego Narodzenia do Polski zbli¿a siê seria wichur, przez synoptyków okre¶lana jako "kulminacja dynamicznej pogody". Wiatr w porywach mo¿e osi±gn±æ nawet 120 km/h. IMGW wyda³ alerty pierwszego stopnia dla niemal ca³ego...</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/opady-deszczu" title="opady deszczu" rel="tag">opady deszczu</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/silny-wiatr" title="silny wiatr" rel="tag">silny wiatr</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30521448,kiedy-spadnie-snieg-powrot-zimy-czeka-nas-jeszcze-przed-swietami.html" title="Kiedy spadnie ¶nieg? Powrót zimy mo¿liwy jeszcze przed ¶wiêtami? Najnowsze prognozy">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/9a/1b/1d/z30521498II,Kiedy-spadnie-snieg--Powrot-zimy-czeka-nas-jeszcze.jpg" fetchpriority="auto" alt="Kiedy spadnie ¶nieg? Powrót zimy mo¿liwy jeszcze przed ¶wiêtami? Najnowsze prognozy" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30521448,kiedy-spadnie-snieg-powrot-zimy-czeka-nas-jeszcze-przed-swietami.html" title="Kiedy spadnie ¶nieg? Powrót zimy mo¿liwy jeszcze przed ¶wiêtami? Najnowsze prognozy">Kiedy spadnie ¶nieg? Powrót zimy mo¿liwy jeszcze przed ¶wiêtami? Najnowsze prognozy</a></h2>
                        </header>
                        <p class="lead">
                                Ostatnie tygodnie przynios³y znaczne ocieplenie. Synoptycy zapowiadaj±, ¿e w niektórych czê¶ciach kraju opady ¶niegu mog± pojawiæ siê jeszcze przed ¶wiêtami. Czy oznacza to powrót takiej zimy, jakiej byli¶my ¶wiadkami w listopadzie?</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/zima" title="zima" rel="tag">zima</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/snieg" title="¶nieg" rel="tag">¶nieg</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30513353,pogoda-w-sobote-zgnily-wyz-nad-polska-bedzie-deszczowo-i-wietrznie.html" title="Pogoda. W sobotê zgni³y wy¿ nad Polsk±. Bêdzie deszczowo i wietrznie. S± alerty IMGW">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/d2/07/1d/z30439122II,Silny-wiatr--zdjecie-ilustracyjne-.jpg" fetchpriority="auto" alt="Pogoda. W sobotê zgni³y wy¿ nad Polsk±. Bêdzie deszczowo i wietrznie. S± alerty IMGW" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30513353,pogoda-w-sobote-zgnily-wyz-nad-polska-bedzie-deszczowo-i-wietrznie.html" title="Pogoda. W sobotê zgni³y wy¿ nad Polsk±. Bêdzie deszczowo i wietrznie. S± alerty IMGW">Pogoda. W sobotê zgni³y wy¿ nad Polsk±. Bêdzie deszczowo i wietrznie. S± alerty IMGW</a></h2>
                        </header>
                        <p class="lead">
                                Pogoda 16 grudnia. W sobotê nad Polskê nadci±gnie ocieplenie, przez co ¶nieg i deszcz ze ¶niegiem przechodziæ bêdzie w deszcz. IMGW ostrzega tak¿e przed silnym wiatrem, który bêdzie wia³ szczególnie mocno na pó³nocy Polski.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/deszcz" title="deszcz" rel="tag">deszcz</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda-na-dzis" title="pogoda na dzi¶" rel="tag">pogoda na dzi¶</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/polska" title="polska" rel="tag">polska</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30510408,alerty-imgw-dla-polowy-polski-na-drogach-zrobi-sie-niebezpiecznie.html" title="Z pogod± nie ma ¿artów. Zrobi siê niebezpiecznie. A¿ trzy alerty IMGW dla po³owy Polski na kolejne dni">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/52/18/1d/z30510674II,IMGW-wydal-ostrzezenia.jpg" fetchpriority="auto" alt="Z pogod± nie ma ¿artów. Zrobi siê niebezpiecznie. A¿ trzy alerty IMGW dla po³owy Polski na kolejne dni" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30510408,alerty-imgw-dla-polowy-polski-na-drogach-zrobi-sie-niebezpiecznie.html" title="Z pogod± nie ma ¿artów. Zrobi siê niebezpiecznie. A¿ trzy alerty IMGW dla po³owy Polski na kolejne dni">Z pogod± nie ma ¿artów. Zrobi siê niebezpiecznie. A¿ trzy alerty IMGW dla po³owy Polski na kolejne dni</a></h2>
                        </header>
                        <p class="lead">
                                Pogoda pod koniec tego tygodnia bêdzie wyj±tkowo zmienna, a miejscami niebezpieczna. Synoptycy ostrzegaj± przed silnymi porywami wiatru, oblodzeniem oraz marzn±cymi opadami deszczu. Wydano ju¿ pierwsze alerty.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/alert-pogodowy" title="alert pogodowy" rel="tag">alert pogodowy</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/imgw" title="imgw" rel="tag">imgw</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30505710,nadchodzi-duza-zmiana-w-pogodzie-kiedy-bedzie-padal-snieg.html" title="Nadchodzi du¿a zmiana w pogodzie. Kiedy bêdzie pada³ ¶nieg? Prognozy nie pozostawiaj± z³udzeñ">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/05/05/1d/z30432261II,Snieg-na-chodniku---zdjecie-ilustracyjne.jpg" fetchpriority="auto" alt="Nadchodzi du¿a zmiana w pogodzie. Kiedy bêdzie pada³ ¶nieg? Prognozy nie pozostawiaj± z³udzeñ" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30505710,nadchodzi-duza-zmiana-w-pogodzie-kiedy-bedzie-padal-snieg.html" title="Nadchodzi du¿a zmiana w pogodzie. Kiedy bêdzie pada³ ¶nieg? Prognozy nie pozostawiaj± z³udzeñ">Nadchodzi du¿a zmiana w pogodzie. Kiedy bêdzie pada³ ¶nieg? Prognozy nie pozostawiaj± z³udzeñ</a></h2>
                        </header>
                        <p class="lead">
                                Nadchodzi du¿a zmiana pogody. Kiedy bêdzie pada³ ¶nieg? W najbli¿szych czeka na du¿e ocieplenie i opady deszczu.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/deszcz" title="deszcz" rel="tag">deszcz</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/silny-wiatr" title="silny wiatr" rel="tag">silny wiatr</a></li>
                                </ul>
                        </article>
                </li>
            </ul>
                        </div><!-- /.main_content -->
                    <div class="right_aside">
                            <div class="right_aside__flexWrap">
                                            <div class="right_aside__innerWrap">
                                                <div id="DFP-003-RECTANGLE_29" class="adviewDFPBanner sticky">
                                                            <script>
                                                                putBanDFPInViewObject({
                                                                    slot: '003-RECTANGLE',
                                                                    divId: 'DFP-003-RECTANGLE_29',
                                                                });
                                                            </script>
                                                        </div>
                                                    </div><!-- /.right_aside__innerWrap -->
                                            </div><!-- /.right_aside__flexWrap -->
                                    </div><!-- /.right_aside -->
                    </div><!-- /.content_wrap -->
                    <div class="midindex">
                            </div>
                    <div id="adsMidboardDivId_29">
                                <script>
                                    putBanDFPInViewObject({
                                        slot: "011-MIDBOARD",
                                        divId: "adsMidboardDivId_29",
                                    });
                                </script>
                            </div>
                        <div class="content_wrap">
                <div class="main_content">
                        <ul class="list_tiles">
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30498839,zima-w-odwrocie-odwilz-na-dobre-zawitala-do-polski-imgw-ostrzega.html" title="Zima w odwrocie. Odwil¿ na dobre zawita³a do Polski. IMGW ostrzega przed opadami marzn±cymi">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/33/16/1d/z30498867II,Odwilz---zdj--ilustr-.jpg" fetchpriority="auto" alt="Zima w odwrocie. Odwil¿ na dobre zawita³a do Polski. IMGW ostrzega przed opadami marzn±cymi" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30498839,zima-w-odwrocie-odwilz-na-dobre-zawitala-do-polski-imgw-ostrzega.html" title="Zima w odwrocie. Odwil¿ na dobre zawita³a do Polski. IMGW ostrzega przed opadami marzn±cymi">Zima w odwrocie. Odwil¿ na dobre zawita³a do Polski. IMGW ostrzega przed opadami marzn±cymi</a></h2>
                        </header>
                        <p class="lead">
                                Na przestrzeni ostatnich dni w Polsce mia³o miejsce zauwa¿alne ocieplenie. Temperatura coraz rzadziej spada poni¿ej 0 st. C, a pokrywa ¶nie¿na zaczyna siê topiæ. Czy to koniec ¶niegu? IMGW wyda³ ostrze¿enia dla piêciu województw.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/alerty-imgw" title="alerty imgw" rel="tag">alerty imgw</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/gololedz" title="go³oled¼" rel="tag">go³oled¼</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/odwilz" title="odwil¿" rel="tag">odwil¿</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/opady-marznace" title="opady marzn±ce" rel="tag">opady marzn±ce</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30490347,jaka-bedzie-pogoda-w-boze-narodzenie-imgw-o-tym-czy-jest-szansa.html" title="Jaka bêdzie pogoda w Bo¿e Narodzenie? IMGW o tym, czy jest szansa na bia³e ¶wiêta">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/34/13/1d/z30490420II,Pogoda-na-Boze-Narodzenie--Iluminacje-swietlne-w-S.jpg" fetchpriority="auto" alt="Jaka bêdzie pogoda w Bo¿e Narodzenie? IMGW o tym, czy jest szansa na bia³e ¶wiêta" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30490347,jaka-bedzie-pogoda-w-boze-narodzenie-imgw-o-tym-czy-jest-szansa.html" title="Jaka bêdzie pogoda w Bo¿e Narodzenie? IMGW o tym, czy jest szansa na bia³e ¶wiêta">Jaka bêdzie pogoda w Bo¿e Narodzenie? IMGW o tym, czy jest szansa na bia³e ¶wiêta</a></h2>
                        </header>
                        <p class="lead">
                                Kolejne dni przynios± zapewne ocieplenie w wiêkszo¶ci Polski oraz stopniowe topnienie pokrywy ¶nie¿nej. Warunki takie utrzymaæ mog± siê przez nastêpny tydzieñ, ale czy ulegn± zmianie przed Bo¿ym Narodzeniem? Czy czekaj± nas bia³e ¶wiêta? Rzecznik...</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/boze-narodzenie" title="bo¿e narodzenie" rel="tag">bo¿e narodzenie</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/zima" title="zima" rel="tag">zima</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30490264,pogoda-w-niedziele-10-grudnia-imgw-rozszerza-alerty-na-mapie.html" title="Pogoda w niedzielê 10 grudnia. IMGW rozszerza alerty. Na mapie pojawi³y siê pomarañczowe punkty">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/ce/13/1d/z30490318II,Pogoda--ilustracyjne-.jpg" fetchpriority="auto" alt="Pogoda w niedzielê 10 grudnia. IMGW rozszerza alerty. Na mapie pojawi³y siê pomarañczowe punkty" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30490264,pogoda-w-niedziele-10-grudnia-imgw-rozszerza-alerty-na-mapie.html" title="Pogoda w niedzielê 10 grudnia. IMGW rozszerza alerty. Na mapie pojawi³y siê pomarañczowe punkty">Pogoda w niedzielê 10 grudnia. IMGW rozszerza alerty. Na mapie pojawi³y siê pomarañczowe punkty</a></h2>
                        </header>
                        <p class="lead">
                                Pogoda w niedzielê 10 grudnia. Nad Polskê nadci±ga ciep³y front, który do naszego kraju przynosi ocieplenie i odwil¿. S± one jednak poprzedzone przez niebezpieczne warunki pogodowe. IMGW wyda³o ¿ó³te i pomarañczowe alerty. Do ostrze¿eñ o opadach...</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/alerty-imgw" title="alerty imgw" rel="tag">alerty imgw</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/imgw" title="imgw" rel="tag">imgw</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/odwilz" title="odwil¿" rel="tag">odwil¿</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30488569,to-koniec-termicznej-zimy-pogoda-mocno-nas-zaskoczy-nadciaga.html" title="To koniec termicznej zimy? Pogoda mocno nas zaskoczy. Nadci±ga ocieplenie i odwil¿">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/e4/0e/1d/z30469348II,Pogoda--zdjecie-ilustracyjne-.jpg" fetchpriority="auto" alt="To koniec termicznej zimy? Pogoda mocno nas zaskoczy. Nadci±ga ocieplenie i odwil¿" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30488569,to-koniec-termicznej-zimy-pogoda-mocno-nas-zaskoczy-nadciaga.html" title="To koniec termicznej zimy? Pogoda mocno nas zaskoczy. Nadci±ga ocieplenie i odwil¿">To koniec termicznej zimy? Pogoda mocno nas zaskoczy. Nadci±ga ocieplenie i odwil¿</a></h2>
                        </header>
                        <p class="lead">
                                Pogoda w najbli¿szych dniach zaskoczy nas swoj± zmienno¶ci±. Po kilku mro¼nych dniach nast±pi znaczne ocieplenie oraz odwil¿. Poprzedz± je natomiast intensywne opady deszczu oraz ¶niegu, a miejscami zamiecie ¶nie¿ne.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/imgw" title="imgw" rel="tag">imgw</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/synoptycy" title="synoptycy" rel="tag">synoptycy</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30485056,kiedy-koniec-sniegu-weekend-bedzie-cieplejszy-ale-mroz-nie.html" title="Przed ociepleniem czeka nas za³amanie pogody. Sypnie ¶niegiem, mróz tak ³atwi nie odpu¶ci">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/65/12/1d/z30485093II,Kiedy-koniec-sniegu--Weekend-bedzie-cieplejszy--al.jpg" fetchpriority="auto" alt="Przed ociepleniem czeka nas za³amanie pogody. Sypnie ¶niegiem, mróz tak ³atwi nie odpu¶ci" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30485056,kiedy-koniec-sniegu-weekend-bedzie-cieplejszy-ale-mroz-nie.html" title="Przed ociepleniem czeka nas za³amanie pogody. Sypnie ¶niegiem, mróz tak ³atwi nie odpu¶ci">Przed ociepleniem czeka nas za³amanie pogody. Sypnie ¶niegiem, mróz tak ³atwi nie odpu¶ci</a></h2>
                        </header>
                        <p class="lead">
                                Chocia¿ synoptycy zapowiadaj± ju¿ odwil¿, to zanim ona nadejdzie, czeka nas jeszcze kilka zimniejszych dni. W weekend mo¿emy siê spodziewaæ jeszcze ujemnej temperatury z miejscowymi opadami ¶niegu.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/zima" title="zima" rel="tag">zima</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/snieg" title="¶nieg" rel="tag">¶nieg</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30480714,pogoda-na-weekend-to-juz-koniec-zimy-idzie-odwilz.html" title="Kiedy zrobi siê cieplej? W pogodzie widaæ odwil¿, temperatura bêdzie 'na plusie'">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/87/11/1d/z30480775II,Pogoda-na-weekend--To-juz-koniec-zimy--Idzie-odwil.jpg" fetchpriority="auto" alt="Kiedy zrobi siê cieplej? W pogodzie widaæ odwil¿, temperatura bêdzie 'na plusie'" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30480714,pogoda-na-weekend-to-juz-koniec-zimy-idzie-odwilz.html" title="Kiedy zrobi siê cieplej? W pogodzie widaæ odwil¿, temperatura bêdzie 'na plusie'">Kiedy zrobi siê cieplej? W pogodzie widaæ odwil¿, temperatura bêdzie "na plusie"</a></h2>
                        </header>
                        <p class="lead">
                                W najbli¿szych dniach do Polski zacznie nap³ywaæ coraz cieplejsze powietrze, które bêdzie przemieszczaæ siê z zachodu na wschód kraju. Przyniesie to odwil¿. Jaka bêdzie pogoda na weekend 9-10 grudnia? Sprawdzamy szczegó³y.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/odwilz" title="odwil¿" rel="tag">odwil¿</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/temperatura" title="temperatura" rel="tag">temperatura</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30474314,odwilz-i-ocieplenie-juz-niebawem-prognozy-pogody-wskazuja.html" title="Odwil¿ i ocieplenie ju¿ niebawem? Prognozy pogody wskazuj±, kiedy ust±pi± mrozy">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/8a/10/1d/z30474634II,Prognoza-na-kolejne-tygodnie-grudnia.jpg" fetchpriority="auto" alt="Odwil¿ i ocieplenie ju¿ niebawem? Prognozy pogody wskazuj±, kiedy ust±pi± mrozy" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30474314,odwilz-i-ocieplenie-juz-niebawem-prognozy-pogody-wskazuja.html" title="Odwil¿ i ocieplenie ju¿ niebawem? Prognozy pogody wskazuj±, kiedy ust±pi± mrozy">Odwil¿ i ocieplenie ju¿ niebawem? Prognozy pogody wskazuj±, kiedy ust±pi± mrozy</a></h2>
                        </header>
                        <p class="lead">
                                Pocz±tek meteorologicznej zimy okaza³ siê znacznie ch³odniejszy ni¿ w ostatnich latach. Synoptycy od pewnego czasu wskazuj± jednak, ¿e warunki takie najpewniej nie utrzymaj± siê do koñca grudnia. Odwil¿ w wiêkszo¶ci rejonów kraju mo¿e siê rozpocz±...
                                    </p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/odwilz" title="odwil¿" rel="tag">odwil¿</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/temperatura" title="temperatura" rel="tag">temperatura</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30472531,silny-mroz-skuje-cala-polske-z-jednej-strony-slonce-z-drugiej.html" title="Silny mróz skuje ca³± Polskê. Z jednej strony s³oñce, z drugiej zamiecie ¶nie¿ne. Pogoda na wtorek">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/bf/0e/1d/z30467519II,Zima--zdjecie-ilustracyjne-.jpg" fetchpriority="auto" alt="Silny mróz skuje ca³± Polskê. Z jednej strony s³oñce, z drugiej zamiecie ¶nie¿ne. Pogoda na wtorek" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30472531,silny-mroz-skuje-cala-polske-z-jednej-strony-slonce-z-drugiej.html" title="Silny mróz skuje ca³± Polskê. Z jednej strony s³oñce, z drugiej zamiecie ¶nie¿ne. Pogoda na wtorek">Silny mróz skuje ca³± Polskê. Z jednej strony s³oñce, z drugiej zamiecie ¶nie¿ne. Pogoda na wtorek</a></h2>
                        </header>
                        <p class="lead">
                                Wed³ug zapowiedzi synoptyków w Polsce szykuje siê kolejny mro¼ny dzieñ. Nie zabraknie chwil ze s³oñcem, ale i kolejnych opadów ¶niegu. Sprawdzamy dok³adn± prognozê pogody na wtorek.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/imgw" title="imgw" rel="tag">imgw</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza" title="prognoza" rel="tag">prognoza</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30469772,pogody-na-boze-narodzenie-2023-synoptycy-nie-maja-watpliwosci.html" title="Pogoda na Bo¿e Narodzenie 2023. Synoptycy nie maj± w±tpliwo¶ci, Barbara mog³a wiele ujawniæ">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/a2/0e/1d/z30468258II.jpg" fetchpriority="auto" alt="Pogoda na Bo¿e Narodzenie 2023. Synoptycy nie maj± w±tpliwo¶ci, Barbara mog³a wiele ujawniæ" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30469772,pogody-na-boze-narodzenie-2023-synoptycy-nie-maja-watpliwosci.html" title="Pogoda na Bo¿e Narodzenie 2023. Synoptycy nie maj± w±tpliwo¶ci, Barbara mog³a wiele ujawniæ">Pogoda na Bo¿e Narodzenie 2023. Synoptycy nie maj± w±tpliwo¶ci, Barbara mog³a wiele ujawniæ</a></h2>
                        </header>
                        <p class="lead">
                                Synoptycy IMGW podzielili siê spostrze¿eniami o pogodzie spodziewanej w nadchodz±ce ¶wiêta. Czy sprawdzi siê popularne polskie przys³owie? Meteorolodzy maj± pewne w±tpliwo¶ci.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/imgw" title="imgw" rel="tag">imgw</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/synoptycy" title="synoptycy" rel="tag">synoptycy</a></li>
                                </ul>
                        </article>
                </li>
            <li class="entry">
                    <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30470082,snieg-zasypie-poludnie-polski-imgw-wydal-ostrzezenia-przed.html" title="¦nieg zasypie po³udnie Polski. IMGW wyda³ ostrze¿enia przed silnym mrozem i zamieciami ¶nie¿nymi">
                            <figure class="imgw">
                                <img data-src="https://bi.im-g.pl/im/85/0f/1d/z30470277II,Synoptycy-wydali-ostrzezenia-przed-mrozem-i-zamiec.jpg" fetchpriority="auto" alt="¦nieg zasypie po³udnie Polski. IMGW wyda³ ostrze¿enia przed silnym mrozem i zamieciami ¶nie¿nymi" />
                                        </figure>
                        </a>
                    <article class="article">
                        <header>
                            <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30470082,snieg-zasypie-poludnie-polski-imgw-wydal-ostrzezenia-przed.html" title="¦nieg zasypie po³udnie Polski. IMGW wyda³ ostrze¿enia przed silnym mrozem i zamieciami ¶nie¿nymi">¦nieg zasypie po³udnie Polski. IMGW wyda³ ostrze¿enia przed silnym mrozem i zamieciami ¶nie¿nymi</a></h2>
                        </header>
                        <p class="lead">
                                Synoptycy ostrzegaj± przed trudnymi warunkami atmosferycznymi na po³udniu Polski. IMGW wyda³ alerty pierwszego stopnia przed silnym mrozem oraz zamieciami ¶nie¿nymi. Zawieje mog± osi±gaæ prêdko¶æ do 55 km/h.</p>
                        <ul class="tags">
                                <li><a href="//wiadomosci.gazeta.pl/alerty-imgw" title="alerty imgw" rel="tag">alerty imgw</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/imgw" title="imgw" rel="tag">imgw</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/pogoda" title="pogoda" rel="tag">pogoda</a></li>
                                <li><a href="//wiadomosci.gazeta.pl/prognoza-pogody" title="prognoza pogody" rel="tag">prognoza pogody</a></li>
                                </ul>
                        </article>
                </li>
            </ul>
                        <footer class="footer">
	<div class="pagination">
				<div class="pages">
						<span>1</span>
									<a  href="&#47;prognoza-pogody&#47;2">2</a>
											<a  href="&#47;prognoza-pogody&#47;3">3</a>
											<a  href="&#47;prognoza-pogody&#47;4">4</a>
											<a  href="&#47;prognoza-pogody&#47;5">5</a>
											<span class="dots">...</span>
						</div>
				<a  class="next" rel="next" href="&#47;prognoza-pogody&#47;2">nast&#281;pna</a>
				</div>
		</footer></div><!-- /.main_content -->
                    <div class="right_aside">
                            <div class="right_aside__flexWrap">
                                            <div id="DFP-003-RECTANGLE_39" class="adviewDFPBanner sticky">
                                                        <script>
                                                            putBanDFPInViewObject({
                                                                slot: '003-RECTANGLE',
                                                                divId: 'DFP-003-RECTANGLE_39',
                                                            });
                                                        </script>
                                                    </div>
                                                </div><!-- /.right_aside__flexWrap -->
                                    </div><!-- /.right_aside -->
                    </div><!-- /.content_wrap -->
                    </section>
</article>

<!--19906114, [ /tpl/prod/content/adaptive_index/index.jsp ], universalIndexBean-->
</div><!-- /.index_body -->


<!--410355746, [ /tpl/prod/content/index/modules/index_content.jsp ], emptyBean-->

<!--410355747, [ /tpl/prod/content/index/modules/main_content.jsp ], emptyBean-->
<div id="adsMidboardDivId_20">
        <script>
            putBanDFPInViewObject({
                slot: "011-MIDBOARD",
                divId: "adsMidboardDivId_20",
                kw: ['fif20']
            });
        </script>
    </div>
    <article class="lp_more_about index_simple lazy_load">
        <section class="body">
            <div class="content_wrap">
                <div class="main_content">
                    <header class="header">
                        <span>Wiêcej o:</span>
                        <h2>prognoza pogody</h2>
                    </header>
                    <ul class="list_tiles">
                        <li class="entry">
                                <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,24974490,dlugoterminowa-prognoza-pogody-na-lipiec-kiedy-znowu-bedzie.html">
                                    <figure class="imgw">
                                        </figure>
                                </a>
                                <article class="article">
                                    <header>
                                        <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,24974490,dlugoterminowa-prognoza-pogody-na-lipiec-kiedy-znowu-bedzie.html" title="D³ugoterminowa prognoza pogody na lipiec. Kiedy znowu bêdzie ciep³o?">
                                            D³ugoterminowa prognoza pogody na lipiec. Kiedy znowu bêdzie ciep³o?</a></h2>
                                    </header>
                                    <p class="lead">Synoptycy nie maj± dobrych wie¶ci dla osób, które przepadaj± za wysokimi temperaturami lub liczy³y na upaln± pogodê na czas urlopu. W lipcu nie zobaczymy na termometrach 30 stopni. Prognoza pogody na lipiec. Po pochmurnych dwóch tygodniach powróci s³oñce Z d³ugoterminowej prognozy pogody na portalu</p>
                                </article>
                            </li>
                        <li class="entry">
                                <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114873,420024.html">
                                    <figure class="imgw">
                                        </figure>
                                </a>
                                <article class="article">
                                    <header>
                                        <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114873,420024.html" title="Durbañska "Prognoza pogody"">
                                            Durbañska "Prognoza pogody"</a></h2>
                                    </header>
                                    <p class="lead">Durbañska "Prognoza pogody" W Durbanie palestyñscy przywódcy odnie¶li najwiêkszy od lat sukces dyplomatyczny. Mo¿e on jednak okazaæ siê pyrrusowym zwyciêstwem - pisze Dawid Warszawski w kolejnym felietonie z cyklu "Prognoza pogody" "Co by by³o, gdybym nie umar³?" - takim pytaniem pod portretem</p>
                                </article>
                            </li>
                        <li class="entry">
                                <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,25433903,prognoza-pogody-na-listopad-przed-nami-weekendowe-ochlodzenie.html">
                                    <figure class="imgw">
                                        </figure>
                                </a>
                                <article class="article">
                                    <header>
                                        <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,25433903,prognoza-pogody-na-listopad-przed-nami-weekendowe-ochlodzenie.html" title="Prognoza pogody na listopad. Przed nami weekendowe och³odzenie">
                                            Prognoza pogody na listopad. Przed nami weekendowe och³odzenie</a></h2>
                                    </header>
                                    <p class="lead">Z prognozy pogody na portalu pogodynka.pl wynika, ¿e ju¿ w najbli¿sz± sobotê temperatura wyra¼nie spadnie. Weekend 23-24 listopada bêdzie obfitowa³ w liczne przeja¶nienia, jednak termometry wska¿± w ci±gu dnia maksymalnie 12 stopni w najcieplejszych w te dni, w Katowicach, i tylko 1 stopnieñ w</p>
                                </article>
                            </li>
                        <li class="entry">
                                <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114873,324409.html">
                                    <figure class="imgw">
                                        </figure>
                                </a>
                                <article class="article">
                                    <header>
                                        <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114873,324409.html" title="Macedoñska "Prognoza Pogody"">
                                            Macedoñska "Prognoza Pogody"</a></h2>
                                    </header>
                                    <p class="lead">Macedoñska "Prognoza Pogody" W konflikcie w Macedonii racja le¿y po stronie spo³eczno¶ci miêdzynarodowej, a nie macedoñskiej ulicy. Konfliktów etnicznych nie da siê rozwi±zaæ si³± - pisze Dawid Warszawski w swym cotygodniowym felietonie "Prognoza pogody". N azwali go zdrajc± i szturmowali parlament</p>
                                </article>
                            </li>
                        <li class="entry">
                                <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,25749220,prognoza-pogody-na-marzec-kiedy-bedzie-cieplo-czy-w-tym-miesiacu.html">
                                    <figure class="imgw">
                                        </figure>
                                </a>
                                <article class="article">
                                    <header>
                                        <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,25749220,prognoza-pogody-na-marzec-kiedy-bedzie-cieplo-czy-w-tym-miesiacu.html" title="Prognoza pogody na marzec. Kiedy bêdzie ciep³o? Czy spadnie jeszcze ¶nieg?">
                                            Prognoza pogody na marzec. Kiedy bêdzie ciep³o? Czy spadnie jeszcze ¶nieg?</a></h2>
                                    </header>
                                    <p class="lead"> niewielkie przymrozki prognozowane s± jedynie miejscami. Na pierwsze zdecydowane oznaki zbli¿aj±cej siê wiosny przyjdzie nam jednak jeszcze poczekaæ" - czytamy w opracowaniu IMGW na ten tydzieñ.  Prognoza pogody na marzec. Kiedy przyjdzie wiosna? Ostatni tydzieñ miesi±ca bêdzie s³oneczny Jak d³ugo</p>
                                </article>
                            </li>
                        <li class="entry">
                                <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,25052479,prognoza-pogody-na-sierpien-kiedy-bedzie-slonce-przed-nami.html">
                                    <figure class="imgw">
                                        </figure>
                                </a>
                                <article class="article">
                                    <header>
                                        <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,25052479,prognoza-pogody-na-sierpien-kiedy-bedzie-slonce-przed-nami.html" title="Prognoza pogody na sierpieñ. Kiedy bêdzie s³oñce? Przed nami sporo ³adnych dni">
                                            Prognoza pogody na sierpieñ. Kiedy bêdzie s³oñce? Przed nami sporo ³adnych dni</a></h2>
                                    </header>
                                    <p class="lead">Z prognozy pogody na portalu pogodynka.pl wynika, ¿e przez kilka kolejnych dni pogoda nie bêdzie siê gwa³townie zmieniaæ. Od pi±tku 2 sierpnia do wtorku 6 sierpnia temperatura maksymalna bêdzie wahaæ siê w granicach 19-26 stopni (najzimniej na Suwalszczy¼nie, a najcieplej na Dolnym ¦l±sku</p>
                                </article>
                            </li>
                        <li class="entry">
                                <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,24440115,prognoza-pogody-na-dzis-poniedzialek-11-lutego-bez-parasola.html">
                                    <figure class="imgw">
                                        </figure>
                                </a>
                                <article class="article">
                                    <header>
                                        <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,24440115,prognoza-pogody-na-dzis-poniedzialek-11-lutego-bez-parasola.html" title="Prognoza pogody na dzi¶ - poniedzia³ek 11 lutego. Bez parasola ani rusz">
                                            Prognoza pogody na dzi¶ - poniedzia³ek 11 lutego. Bez parasola ani rusz</a></h2>
                                    </header>
                                    <p class="lead">. Ostrze¿enia meteorologiczne. Uwaga na silny wiatr! Z prognozy pogody przygotowanej przez IMGW wynika, ¿e w poniedzia³ek rano mo¿e wiaæ silny wiatr. Ostrze¿enia meteorologiczne I stopnia zosta³y wydane dla województw pomorskiego, dolno¶l±skiego, opolskiego, ¶l±skiego, ma³opolskiego i podkarpackiego. Id±c</p>
                                </article>
                            </li>
                        <li class="entry">
                                <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,21859805,prognoza-pogody-na-czwartek-wczoraj-zalamanie-pogody-a-jak.html">
                                    <figure class="imgw">
                                        </figure>
                                </a>
                                <article class="article">
                                    <header>
                                        <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,21859805,prognoza-pogody-na-czwartek-wczoraj-zalamanie-pogody-a-jak.html" title="Prognoza pogody na czwartek. Wczoraj za³amanie pogody, a jak bêdzie dzisiaj?">
                                            Prognoza pogody na czwartek. Wczoraj za³amanie pogody, a jak bêdzie dzisiaj?</a></h2>
                                    </header>
                                    <p class="lead"> i Przemy¶lu. Na szczê¶cie od pi±tku znowu bêdzie przyjemniej. Prognoza pogody na czwartek W czwartek w ca³ym kraju bêdzie do¶æ ciep³o. Wed³ug prognozy Instytutu Meteorologii i Gospodarki Wodnej najch³odniej ma byæ w Zakopanem - termometry poka¿± tam tylko 13 stopni. W Rzeszowie, Przemy¶lu, Kielcach</p>
                                </article>
                            </li>
                        <li class="entry">
                                <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,24493873,prognoza-pogody-na-marzec-2019-sprawdzi-sie-przyslowie-w-marcu.html">
                                    <figure class="imgw">
                                        </figure>
                                </a>
                                <article class="article">
                                    <header>
                                        <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,24493873,prognoza-pogody-na-marzec-2019-sprawdzi-sie-przyslowie-w-marcu.html" title="Prognoza pogody na marzec 2019. Sprawdzi siê przys³owie "W marcu jak w garncu"">
                                            Prognoza pogody na marzec 2019. Sprawdzi siê przys³owie "W marcu jak w garncu"</a></h2>
                                    </header>
                                    <p class="lead">"W marcu jak w garncu" - mówi stare przys³owie. Czy sprawdzi siê ono w tym roku? D³ugoterminowe przewidywania synoptyków pokazuj±, ¿e tak. W nadchodz±cym miesi±cu bêdzie sporo s³onecznych dni, ale nie zabraknie tak¿e chmur i deszczu. D³ugoterminowa prognoza pogody - marzec 2019. Ten miesi±c zacznie</p>
                                </article>
                            </li>
                        <li class="entry">
                                <a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,24397969,prognoza-pogody-na-tydzien-28-01-03-02-synoptycy-zapowiadaja.html">
                                    <figure class="imgw">
                                        </figure>
                                </a>
                                <article class="article">
                                    <header>
                                        <h2><a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,24397969,prognoza-pogody-na-tydzien-28-01-03-02-synoptycy-zapowiadaja.html" title="Prognoza pogody na tydzieñ 28.01-03.02. Synoptycy zapowiadaj± kilka s³onecznych dni">
                                            Prognoza pogody na tydzieñ 28.01-03.02. Synoptycy zapowiadaj± kilka s³onecznych dni</a></h2>
                                    </header>
                                    <p class="lead">Tydzieñ rozpocznie siê deszczowo, ale wraz z up³ywem czasu pogoda poprawi siê, a na niebie zobaczymy wiêcej s³oñca. Prognoza pogody na poniedzia³ek 28 stycznia Pierwszy dzieñ rozpoczynaj±cego siê tygodnia bêdzie stosunkowo ciep³y, ale deszczowy. Temperatura bêdzie wahaæ siê od 5 stopni</p>
                                </article>
                            </li>
                        </ul>
                </div>
                <div class="right_aside">
                    <div class="right_aside__flexWrap">
                            <div class="right_aside__innerWrap">
                                <div id="DFP-003-RECTANGLE_21" class="adviewDFPBanner sticky">
                                    <script>
                                        putBanDFPInViewObject({
                                            slot: '003-RECTANGLE',
                                            divId: 'DFP-003-RECTANGLE_21',
                                        });
                                    </script>
                                </div>
                            </div>
                            </div>
                    </div>
            </div>
        </section>
    </article>

<!--27207422, [ /fix/tags/tagMoreAbout.jsp ], articleTagModule-->

<!--27207424, [ /fix/tags/tagForum.jsp ], forumTagModule-->
<div class="aside_wrapper section_wrapper">
    <div class="content_wrap">
        <div class="recommendations lazy_load" role="tablist">
    <input type="radio" name="recommendations_tab" id="recommendations_tab1" class="hidden" />
    <label role="tab" class="tab" for="recommendations_tab1">polecamy</label>
    <input type="radio" name="recommendations_tab" id="recommendations_tab2" class="hidden" />
    <label role="tab" class="tab" for="recommendations_tab2">wiêcej tematów</label>
    <div class="recommendations_box" id="recommendations_content1">
        <!-- relatedWithQuiz v1.2 widget_id:77 version_id:824, show_quiz_element:false, hasQuiz:false -->
            <section class="related_articles lazy_load">

                <ul class="related_articles_list">
                    <li class="related_article ">

                        <a class="related_article_link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,114881,30692933,rosyjski-dron-spadl-na-terytorium-moldawii-na-pokladzie-znajdowalo.html#do_w=77&do_v=824&do_st=RS&do_sid=1071&do_a=1071&e=RelRecImg1&do_upid=824_ti&do_utid=30692933&do_uvid=1707773300576" title="Szcz±tki uzbrojonego drona Sahed spad³y na terytorium Mo³dawii" data-bd-viewability="1" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/7,114881,30692933,rosyjski-dron-spadl-na-terytorium-moldawii-na-pokladzie-znajdowalo.html#do_w=77&do_v=824&do_st=RS&do_sid=1071&do_a=1071&e=RelRecImg1&do_upid=824_ti&do_utid=30692933&do_uvid=1707773300576" data-bd-viewability-id="related_article">
                                <noscript>
                                    <img class="related_article_photo" src="https://bi.im-g.pl/im/d0/45/1d/z30693072II.jpg" alt="Szcz±tki uzbrojonego drona Sahed spad³y na terytorium Mo³dawii" />
                                </noscript>
                                <img src="https://static.im-g.pl/i/obrazki/awd/image_placeholder_small.svg" class="related_article_photo" data-src="https://bi.im-g.pl/im/d0/45/1d/z30693072II.jpg" alt="Szcz±tki uzbrojonego drona Sahed spad³y na terytorium Mo³dawii" />
                                <span class="related_article_title">Szcz±tki uzbrojonego drona Sahed spad³y na terytorium Mo³dawii</span>
                                </a>

                        </li>
                    <li class="related_article ">

                        <a class="related_article_link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30693104,barbara-nowacka-zdradza-plany-wobec-hit-u-co-z-podrecznikiem.html#do_w=77&do_v=824&do_st=RS&do_sid=1071&do_a=1071&e=RelRecImg2&do_upid=824_ti&do_utid=30693104&do_uvid=1707773035315" title="Barbara Nowacka zdradza plany wobec HiT-u. Co z podrêcznikiem? &#034;Gniot&#034;" data-bd-viewability="1" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/7,114883,30693104,barbara-nowacka-zdradza-plany-wobec-hit-u-co-z-podrecznikiem.html#do_w=77&do_v=824&do_st=RS&do_sid=1071&do_a=1071&e=RelRecImg2&do_upid=824_ti&do_utid=30693104&do_uvid=1707773035315" data-bd-viewability-id="related_article">
                                <noscript>
                                    <img class="related_article_photo" src="https://bi.im-g.pl/im/1f/45/1d/z30693151II.jpg" alt="Barbara Nowacka zdradza plany wobec HiT-u. Co z podrêcznikiem? &#034;Gniot&#034;" />
                                </noscript>
                                <img src="https://static.im-g.pl/i/obrazki/awd/image_placeholder_small.svg" class="related_article_photo" data-src="https://bi.im-g.pl/im/1f/45/1d/z30693151II.jpg" alt="Barbara Nowacka zdradza plany wobec HiT-u. Co z podrêcznikiem? &#034;Gniot&#034;" />
                                <span class="related_article_title">Barbara Nowacka zdradza plany wobec HiT-u. Co z podrêcznikiem? "Gniot"</span>
                                </a>

                        </li>
                    <li class="related_article ">

                        <a class="related_article_link" href="https://wiadomosci.gazeta.pl/wiadomosci/13,129662,19934,nowy-quiz-historyczny-sprawdzi-czy-znacie-mitologie-grecka.html#do_w=77&do_v=824&do_st=RS&do_sid=1072&do_a=1072&e=RelRecImg3" title="Nowy QUIZ historyczny sprawdzi, czy znacie mitologiê greck±. Do dzie³a!" data-bd-viewability="1" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/13,129662,19934,nowy-quiz-historyczny-sprawdzi-czy-znacie-mitologie-grecka.html#do_w=77&do_v=824&do_st=RS&do_sid=1072&do_a=1072&e=RelRecImg3" data-bd-viewability-id="related_article">
                                <noscript>
                                    <img class="related_article_photo" src="https://bi.im-g.pl/im/0a/bf/1c/z30144266II,Quiz-historyczny.jpg" alt="Nowy QUIZ historyczny sprawdzi, czy znacie mitologiê greck±. Do dzie³a!" />
                                </noscript>
                                <img src="https://static.im-g.pl/i/obrazki/awd/image_placeholder_small.svg" class="related_article_photo" data-src="https://bi.im-g.pl/im/0a/bf/1c/z30144266II,Quiz-historyczny.jpg" alt="Nowy QUIZ historyczny sprawdzi, czy znacie mitologiê greck±. Do dzie³a!" />
                                <span class="related_article_title">Nowy QUIZ historyczny sprawdzi, czy znacie mitologiê greck±. Do dzie³a!</span>
                                </a>

                        </li>
                    <li class="related_article ">

                        <div id="adUnit-091-RELATED" class="adviewDFPBanner DFP-091-RELATED">
        <span class="banLabel" style="display: none;">REKLAMA</span>
        <div id='div-gpt-ad-091-RELATED-0'>
            <script type='text/javascript'>
                if(dfpParams.slots['091-RELATED'] && dfpParams.slots['091-RELATED'].autoLoad) {
                    if (window.adviewDFP && adviewDFP.scrollSlot) adviewDFP.scrollSlot.push('091-RELATED');
                    if (window.AdviewAdsTag) window.AdviewAdsTag.autoLoadSlot.push('091-RELATED');
                } else if (!dfpParams.slots['091-RELATED']) {
                    if ('091-RELATED'.includes('TOPBOARD')) {
                        const el = document.getElementById('adUnit-091-RELATED');
                        if (el && el.parentNode.className.includes('ban') && el.parentNode.className.includes('wrapper')) {
                            el.parentNode.remove();
                        }
                    }
                } else {
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-091-RELATED-0'); });
                }
            </script>
        </div>
    </div>
<!-- v1.0 -->
<!--410355743, [ /tpl/ads/prod/dfpSlotScripts.jsp ], dfpBanersSlotScriptsBean-->
<!-- v2.2.2 -->
<!--410355744, [ /tpl/ads/prod/dfpSlot.jsp ], dfpBanersSlotBean-->
<a class="related_article_link related_article_link--ifAdHidden" href="https://wiadomosci.gazeta.pl/wiadomosci/7,114884,30688364,czarnek-nie-mogl-powstrzymac-sie-w-programie-na-zywo-bo-wstane.html#do_w=77&do_v=824&do_st=RS&do_sid=1073&do_a=1073&e=RelRecImg4&do_upid=824_ti&do_utid=30688364&do_uvid=1707665545747" title="Awantura w programie na ¿ywo. Czarnek star³ siê z Lubnauer" data-bd-viewability="1" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/7,114884,30688364,czarnek-nie-mogl-powstrzymac-sie-w-programie-na-zywo-bo-wstane.html#do_w=77&do_v=824&do_st=RS&do_sid=1073&do_a=1073&e=RelRecImg4&do_upid=824_ti&do_utid=30688364&do_uvid=1707665545747" data-bd-viewability-id="related_article">
                                <noscript>
                                    <img class="related_article_photo" src="https://bi.im-g.pl/im/77/44/1d/z30688375II.jpg" alt="Awantura w programie na ¿ywo. Czarnek star³ siê z Lubnauer" />
                                </noscript>
                                <img src="https://static.im-g.pl/i/obrazki/awd/image_placeholder_small.svg" class="related_article_photo" data-src="https://bi.im-g.pl/im/77/44/1d/z30688375II.jpg" alt="Awantura w programie na ¿ywo. Czarnek star³ siê z Lubnauer" />
                                <span class="related_article_title">Awantura w programie na ¿ywo. Czarnek star³ siê z Lubnauer</span>
                                </a>

                        </li>
                    <li class="related_article ">

                        <a class="related_article_link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,114884,30693108,samuel-pereira-w-kanale-zero-o-pracy-w-tvp-byly-rzeczy-ktore.html#do_w=77&do_v=824&do_st=RS&do_sid=1073&do_a=1073&e=RelRecImg5&do_upid=824_ti&do_utid=30693108&do_uvid=1707770171273" title="Samuel Pereira w Kanale Zero: By³y rzeczy, które powinny wygl±daæ inaczej" data-bd-viewability="1" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/7,114884,30693108,samuel-pereira-w-kanale-zero-o-pracy-w-tvp-byly-rzeczy-ktore.html#do_w=77&do_v=824&do_st=RS&do_sid=1073&do_a=1073&e=RelRecImg5&do_upid=824_ti&do_utid=30693108&do_uvid=1707770171273" data-bd-viewability-id="related_article">
                                <noscript>
                                    <img class="related_article_photo" src="https://bi.im-g.pl/im/f5/45/1d/z30693109II.jpg" alt="Samuel Pereira w Kanale Zero: By³y rzeczy, które powinny wygl±daæ inaczej" />
                                </noscript>
                                <img src="https://static.im-g.pl/i/obrazki/awd/image_placeholder_small.svg" class="related_article_photo" data-src="https://bi.im-g.pl/im/f5/45/1d/z30693109II.jpg" alt="Samuel Pereira w Kanale Zero: By³y rzeczy, które powinny wygl±daæ inaczej" />
                                <span class="related_article_title">Samuel Pereira w Kanale Zero: By³y rzeczy, które powinny wygl±daæ inaczej</span>
                                </a>

                        </li>
                    <li class="related_article ">

                        <a class="related_article_link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,114881,30692943,donald-trump-lokajem-putina-prezydent-usa-przestrzega-ze.html#do_w=77&do_v=824&do_st=RS&do_sid=1071&do_a=1071&e=RelRecImg6&do_upid=824_ti&do_utid=30692943&do_uvid=1707771191110" title="Trump &#034;us³u¿nym lokajem Putina&#034;. Biden skrytykowa³ jego wyst±pienie" data-bd-viewability="1" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/7,114881,30692943,donald-trump-lokajem-putina-prezydent-usa-przestrzega-ze.html#do_w=77&do_v=824&do_st=RS&do_sid=1071&do_a=1071&e=RelRecImg6&do_upid=824_ti&do_utid=30692943&do_uvid=1707771191110" data-bd-viewability-id="related_article">
                                <noscript>
                                    <img class="related_article_photo" src="https://bi.im-g.pl/im/73/45/1d/z30692979II.jpg" alt="Trump &#034;us³u¿nym lokajem Putina&#034;. Biden skrytykowa³ jego wyst±pienie" />
                                </noscript>
                                <img src="https://static.im-g.pl/i/obrazki/awd/image_placeholder_small.svg" class="related_article_photo" data-src="https://bi.im-g.pl/im/73/45/1d/z30692979II.jpg" alt="Trump &#034;us³u¿nym lokajem Putina&#034;. Biden skrytykowa³ jego wyst±pienie" />
                                <span class="related_article_title">Trump "us³u¿nym lokajem Putina". Biden skrytykowa³ jego wyst±pienie</span>
                                </a>

                        </li>
                    <li class="related_article ">

                        <a class="related_article_link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,114884,30691217,dziennikarz-gazeta-pl-o-tajemniczej-grupie-pis-na-whatsappie.html#do_w=77&do_v=824&do_st=RS&do_sid=1074&do_a=1074&e=RelRecImg7&do_upid=824_ti&do_utid=30691217&do_uvid=1707742242646" title="Tajemnicza grupa PiS na WhatsAppie. Politycy wiedz±, co powinni publikowaæ" data-bd-viewability="1" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/7,114884,30691217,dziennikarz-gazeta-pl-o-tajemniczej-grupie-pis-na-whatsappie.html#do_w=77&do_v=824&do_st=RS&do_sid=1074&do_a=1074&e=RelRecImg7&do_upid=824_ti&do_utid=30691217&do_uvid=1707742242646" data-bd-viewability-id="related_article">
                                <noscript>
                                    <img class="related_article_photo" src="https://bi.im-g.pl/im/31/42/1d/z30681649II.jpg" alt="Tajemnicza grupa PiS na WhatsAppie. Politycy wiedz±, co powinni publikowaæ" />
                                </noscript>
                                <img src="https://static.im-g.pl/i/obrazki/awd/image_placeholder_small.svg" class="related_article_photo" data-src="https://bi.im-g.pl/im/31/42/1d/z30681649II.jpg" alt="Tajemnicza grupa PiS na WhatsAppie. Politycy wiedz±, co powinni publikowaæ" />
                                <span class="related_article_title">Tajemnicza grupa PiS na WhatsAppie. Politycy wiedz±, co powinni publikowaæ</span>
                                </a>

                        </li>
                    <li class="related_article ">

                        <a class="related_article_link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,114884,30688067,w-pis-chca-rozliczac-dziadziusia-ale-dziadzius-ma-na-to.html#do_w=77&do_v=824&do_st=RS&do_sid=1074&do_a=1074&e=RelRecImg8&do_upid=824_ti&do_utid=30688067&do_uvid=1707760621354" title="W PiS chc± &#034;rozliczaæ dziadziusia&#034;, ale &#034;dziadziu¶&#034; ma na to patent" data-bd-viewability="1" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/7,114884,30688067,w-pis-chca-rozliczac-dziadziusia-ale-dziadzius-ma-na-to.html#do_w=77&do_v=824&do_st=RS&do_sid=1074&do_a=1074&e=RelRecImg8&do_upid=824_ti&do_utid=30688067&do_uvid=1707760621354" data-bd-viewability-id="related_article">
                                <noscript>
                                    <img class="related_article_photo" src="https://bi.im-g.pl/im/37/42/1d/z30679863II.jpg" alt="W PiS chc± &#034;rozliczaæ dziadziusia&#034;, ale &#034;dziadziu¶&#034; ma na to patent" />
                                </noscript>
                                <img src="https://static.im-g.pl/i/obrazki/awd/image_placeholder_small.svg" class="related_article_photo" data-src="https://bi.im-g.pl/im/37/42/1d/z30679863II.jpg" alt="W PiS chc± &#034;rozliczaæ dziadziusia&#034;, ale &#034;dziadziu¶&#034; ma na to patent" />
                                <span class="related_article_title">W PiS chc± "rozliczaæ dziadziusia", ale "dziadziu¶" ma na to patent</span>
                                </a>

                        </li>
                    <li class="related_article ">

                        <a class="related_article_link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,114884,30693018,wybory-samorzadowe-w-srode-ogloszenie-kandydatki-lewicy-na.html#do_w=77&do_v=824&do_st=RS&do_sid=1071&do_a=1071&e=RelRecImg9&do_upid=824_ti&do_utid=30693018&do_uvid=1707769383622" title="Magdalena Biejat zawalczy o Warszawê. Wkrótce og³osi start" data-bd-viewability="1" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/7,114884,30693018,wybory-samorzadowe-w-srode-ogloszenie-kandydatki-lewicy-na.html#do_w=77&do_v=824&do_st=RS&do_sid=1071&do_a=1071&e=RelRecImg9&do_upid=824_ti&do_utid=30693018&do_uvid=1707769383622" data-bd-viewability-id="related_article">
                                <noscript>
                                    <img class="related_article_photo" src="https://bi.im-g.pl/im/41/41/1d/z30678337II.jpg" alt="Magdalena Biejat zawalczy o Warszawê. Wkrótce og³osi start" />
                                </noscript>
                                <img src="https://static.im-g.pl/i/obrazki/awd/image_placeholder_small.svg" class="related_article_photo" data-src="https://bi.im-g.pl/im/41/41/1d/z30678337II.jpg" alt="Magdalena Biejat zawalczy o Warszawê. Wkrótce og³osi start" />
                                <span class="related_article_title">Magdalena Biejat zawalczy o Warszawê. Wkrótce og³osi start</span>
                                </a>

                        </li>
                    <li class="related_article ">

                        <a class="related_article_link" href="https://wiadomosci.gazeta.pl/wiadomosci/7,114884,30692928,tusk-w-berlinie-podjal-temat-reparacji-padly-slowa-o-fatum.html#do_w=77&do_v=824&do_st=RS&do_sid=1071&do_a=1071&e=RelRecImg10&do_upid=824_ti&do_utid=30692928&do_uvid=1707768862820" title="Berlin. Donald Tusk podj±³ temat reparacji: Niemcy maj± tu co¶ do zrobienia" data-bd-viewability="1" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/7,114884,30692928,tusk-w-berlinie-podjal-temat-reparacji-padly-slowa-o-fatum.html#do_w=77&do_v=824&do_st=RS&do_sid=1071&do_a=1071&e=RelRecImg10&do_upid=824_ti&do_utid=30692928&do_uvid=1707768862820" data-bd-viewability-id="related_article">
                                <noscript>
                                    <img class="related_article_photo" src="https://bi.im-g.pl/im/9b/45/1d/z30693019II.jpg" alt="Berlin. Donald Tusk podj±³ temat reparacji: Niemcy maj± tu co¶ do zrobienia" />
                                </noscript>
                                <img src="https://static.im-g.pl/i/obrazki/awd/image_placeholder_small.svg" class="related_article_photo" data-src="https://bi.im-g.pl/im/9b/45/1d/z30693019II.jpg" alt="Berlin. Donald Tusk podj±³ temat reparacji: Niemcy maj± tu co¶ do zrobienia" />
                                <span class="related_article_title">Berlin. Donald Tusk podj±³ temat reparacji: Niemcy maj± tu co¶ do zrobienia</span>
                                </a>

                        </li>
                    </ul>
            </section>

            <!-- quiz_from: bigdata  -->
            
<!--26758819, [ /tpl/prod/modules/related/relatedWithQuiz.jsp ], bigDataRelatedRecommendationsController-->
<!-- empty -->

<!--26758813, [ /fix/modules/empty.jsp ], emptyBean-->
</div>
    <div class="recommendations_box" id="recommendations_content2" data-bd-viewability-id="recommendationsMore" data-bd-viewability="1">
        <div class="box_seo">
<ul class="content">
<li class="seo_column">
<h3>
Moda
</h3>
<ul>
<li class="seo_row">
<a  href="https://avanti24.pl/Magazyn/7,150441,29104852,te-skorzane-botki-gino-rossi-przeceniono-z-429-99-na-159-99.html" title="Skórzane botki">Skórzane botki</a>
</li><li class="seo_row">
<a  href="https://avanti24.pl/Magazyn/7,150441,29101842,kurtki-teddy.html" title="Kurtki teddy">Kurtki teddy</a>
</li><li class="seo_row">
<a  href="https://avanti24.pl/Magazyn/7,150441,29137649,te-zimowe-plaszcze-dostaniesz-w-biedronce-za-99-zl-sa.html" title="P³aszcze na zimê">P³aszcze na zimê</a>
</li><li class="seo_row">
<a  href="https://zakupy.avanti24.pl/marynarki/damskie" title="Modne marynarki">Modne marynarki</a>
</li><li class="seo_row">
<a  href="https://zakupy.avanti24.pl/jeansy/damskie" title="Modne jeansy">Modne jeansy</a>
</li><li class="seo_row">
<a  href="https://czterykaty.pl/inspiracje/7,153170,29970722,moda-na-schody-dywanowe-vintage-powraca-stylowe-i-praktyczne.html" title="Schody dywanowe">Schody dywanowe</a>
</li><li class="seo_row">
<a  href="https://czterykaty.pl/inspiracje/7,153170,29970722,moda-na-schody-dywanowe-vintage-powraca-stylowe-i-praktyczne.html" title="Nowoczesny zegarek">Nowoczesny zegarek</a>
</li><li class="seo_row">
<a  href="https://czterykaty.pl/inspiracje/7,153170,30179675,dywany-w-stylu-vintage-w-supercenach.html" title="Dywany vintage">Dywany vintage</a>
</li><li class="seo_row">
<a  href="https://czterykaty.pl/inspiracje/7,153170,29969226,w-lidlu-stylowy-regal-to-niezbednik-w-lazience-nie-jest-drogi.html" title="Rega³ do ³azienki">Rega³ do ³azienki</a>
</li><li class="seo_row">
<a  href="https://zakupy-czterykaty.pl/lozka/sypialnia" title="£ó¿ka do sypialni">£ó¿ka do sypialni</a>
</li><li class="seo_row">
<a  href="https://zakupy-czterykaty.pl/kuchenki-mikrofalowe" title="Kuchenki mikrofalowe">Kuchenki mikrofalowe</a>
</li><li class="seo_row">
<a  href="https://zakupy-czterykaty.pl/kina-domowe" title="Kina domowe">Kina domowe</a>
</li>
</ul>
</li>
<li class="seo_column">
<h3>
Wiadomo¶ci
</h3>
<ul>
<li class="seo_row">
<a  href="https://wiadomosci.gazeta.pl/wiadomosci/0,114883.html#e=NavLink" title="Wiadomo¶ci z Polski">Wiadomo¶ci z Polski</a>
</li><li class="seo_row">
<a  href="https://wiadomosci.gazeta.pl/wiadomosci/0,114881.html#e=NavLink" title="Newsy ze ¦wiata">Newsy ze ¦wiata</a>
</li><li class="seo_row">
<a  href="https://wiadomosci.gazeta.pl/wiadomosci/0,114884.html" title="Polityka">Polityka</a>
</li><li class="seo_row">
<a  href="https://next.gazeta.pl/emerytury#e=NavLink" title="Emerytury">Emerytury</a>
</li><li class="seo_row">
<a  href="https://next.gazeta.pl/next/0,150859.html" title="Biznes">Biznes</a>
</li><li class="seo_row">
<a  href="https://next.gazeta.pl/next/0,150860.html" title="Technologie">Technologie</a>
</li><li class="seo_row">
<a  href="https://www.sport.pl/pilka/0,65039.html#e=NavLink" title="Ekstraklasa">Ekstraklasa</a>
</li><li class="seo_row">
<a  href="https://kultura.gazeta.pl/netflix#e=NavMoreSeo" title="Nowo¶ci Netflix">Nowo¶ci Netflix</a>
</li><li class="seo_row">
<a  href="https://www.sport.pl/iga-swiatek" title="Iga ¦wi±tek">Iga ¦wi±tek</a>
</li><li class="seo_row">
<a  href="https://kultura.gazeta.pl/kultura/7,114438,29877147,te-hollywoodzkie-gwiazdy-wystapily-w-polskich-produkcjach-niektore.html" title="Hollywoodzkie gwiazdy w polskich produkcjach">Hollywoodzkie gwiazdy w polskich produkcjach</a>
</li><li class="seo_row">
<a  href="https://www.sport.pl/liga-narodow" title="Siatkówka - Liga Narodów">Siatkówka - Liga Narodów</a>
</li><li class="seo_row">
<a  href="https://pogoda.gazeta.pl/prognoza/0,185352.html#e=NavLink" title="Prognoza pogody">Prognoza pogody</a>
</li>
</ul>
</li>
<li class="seo_column">
<h3>
Polecamy
</h3>
<ul>
<li class="seo_row">
<a  href="https://horoskopy.gazeta.pl/horoskop/0,166543.html" title="Horoskop na dzi¶">Horoskop na dzi¶</a>
</li><li class="seo_row">
<a  href="https://kalendarz.gazeta.pl/kalendarz/0,0.html" title="Kalendarz 2024">Kalendarz 2024</a>
</li><li class="seo_row">
<a  href="https://kultura.gazeta.pl/podcasty#e=CapMoreSeo" title="Podcasty">Podcasty</a>
</li><li class="seo_row">
<a  href="https://kultura.gazeta.pl/najlepsze-seriale#e=CapMoreSeo" title="Najlepsze seriale">Najlepsze seriale</a>
</li><li class="seo_row">
<a  href="https://zdrowie.gazeta.pl/dieta#e=CapMoreSeo" title="Dieta">Dieta</a>
</li><li class="seo_row">
<a  href="https://kobieta.gazeta.pl/porady#e=CapMoreSeo" title="Porady">Porady</a>
</li><li class="seo_row">
<a  href="https://kobieta.gazeta.pl/domowe-sposoby#e=CapMoreSeo" title="Domowe sposoby">Domowe sposoby</a>
</li><li class="seo_row">
<a  href="https://kobieta.gazeta.pl/urodowe-triki#e=CapMoreSeo" title="Urodowe triki">Urodowe triki</a>
</li><li class="seo_row">
<a  href="https://podroze.gazeta.pl/ciekawe-miejsca-w-polsce#e=CapMoreSeo" title="Ciekawe miejsca w Polsce">Ciekawe miejsca w Polsce</a>
</li><li class="seo_row">
<a  href="https://podroze.gazeta.pl/wakacje-za-granica#e=CapMoreSeo" title="Wakacje za granic±">Wakacje za granic±</a>
</li>
</ul>
</li>
<li class="seo_column">
<h3>
Plotki
</h3>
<ul>
<li class="seo_row">
<a  href="https://www.plotek.pl/uczestnicy" title="Uczestnicy Reality Show">Uczestnicy Reality Show</a>
</li><li class="seo_row">
<a  href="https://www.plotek.pl/plotek/0,166796.html#e=NavLink" title="Z ¿ycia gwiazd">Z ¿ycia gwiazd</a>
</li><li class="seo_row">
<a  href="https://www.plotek.pl/plotek/0,78649.html#e=NavLink" title="Newsy Plotek">Newsy Plotek</a>
</li><li class="seo_row">
<a  href="https://www.plotek.pl/tv-show" title="TV Show">TV Show</a>
</li><li class="seo_row">
<a  href="https://www.plotek.pl/plotek/0,156651.html#e=NavLink" title="Stylizacje gwiazd">Stylizacje gwiazd</a>
</li><li class="seo_row">
<a  href="https://www.plotek.pl/milionerzy" title="Milionerzy">Milionerzy</a>
</li><li class="seo_row">
<a  href="https://www.plotek.pl/rodzina-krolewska" title="Rodzina królewska">Rodzina królewska</a>
</li><li class="seo_row">
<a  href="https://www.plotek.pl/zwiazki-gwiazd" title="Zwi±zki Gwiazd">Zwi±zki Gwiazd</a>
</li><li class="seo_row">
<a  href="https://www.plotek.pl/aktorzy" title="Aktorzy">Aktorzy</a>
</li><li class="seo_row">
<a  href="https://www.plotek.pl/serial" title="Serial">Serial</a>
</li>
</ul>
</li>
<li class="seo_column">
<h3>
Kalkulatory
</h3>
<ul>
<li class="seo_row">
<a  href="https://moto.pl/Porady/7,178530,26853856,wirtualny-alkomat-online.html" title="Wirtualny alkomat">Wirtualny alkomat</a>
</li><li class="seo_row">
<a  href="https://moto.pl/Porady/7,178530,26883390,kalkulator-oplacalnosci-montazu-instalacji-lpg.html" title="Kalkulator op³acalno¶ci monta¿u instalacji LPG">Kalkulator op³acalno¶ci monta¿u instalacji LPG</a>
</li><li class="seo_row">
<a  href="https://moto.pl/Porady/7,178530,26885997,przelicznik-mile-na-kilometry.html" title="Mile na kilometry">Mile na kilometry</a>
</li><li class="seo_row">
<a  href="https://myfitness.gazeta.pl/myfitness/7,166676,25598252,ile-kalorii-maja-frytki-duzo-jak-zrobic-dietetyczne-frytki.html" title="Ile kalorii maj± frytki?">Ile kalorii maj± frytki?</a>
</li><li class="seo_row">
<a  href="https://moto.pl/Porady/7,178530,26930093,kalkulator-przelicznik-centymetry-cm-i-cale-in-na-stopy.html" title="Przelicznik: centymetry (cm) i cale (in) na stopy (ft)">Przelicznik: centymetry (cm) i cale (in) na stopy (ft)</a>
</li><li class="seo_row">
<a  href="https://moto.pl/Porady/7,178530,26886318,kalkulator-rozmiaru-opon-jak-dobrac-rozmiar-opon.html" title="Kalkulator rozmiaru opon">Kalkulator rozmiaru opon</a>
</li><li class="seo_row">
<a  href="https://moto.pl/Porady/7,178530,26886737,kalkulator-mocy-przelicznik-jednostek-kw-na-km-i-bhp.html" title="Kalkulator mocy">Kalkulator mocy</a>
</li><li class="seo_row">
<a  href="https://moto.pl/Porady/7,178530,26930043,kalkulator-momentu-obrotowego.html" title="Kalkulator momentu obrotowego">Kalkulator momentu obrotowego</a>
</li>
</ul>
</li>
</ul>
</div><!-- UZREditor --><!-- htmEOF -->
<!--24415903, [ /htm/24415/j24415903.htm ], null-->
</div>
</div>
<!--410355736, [ /tpl/prod/modules/recommendations/recommendations.jsp ], emptyBean-->
</div> <!-- .content_wrap -->
</div> <!-- .aside_wrapper.section_wrapper -->

<div class="section_wrapper">
    <div class="content_wrap">
        <div id="adUnit-042-FOOTBOARD" class="adviewDFPBanner DFP-042-FOOTBOARD">
        <span class="banLabel" style="display: none;">REKLAMA</span>
        <div id='div-gpt-ad-042-FOOTBOARD-0'>
            <script type='text/javascript'>
                if(dfpParams.slots['042-FOOTBOARD'] && dfpParams.slots['042-FOOTBOARD'].autoLoad) {
                    if (window.adviewDFP && adviewDFP.scrollSlot) adviewDFP.scrollSlot.push('042-FOOTBOARD');
                    if (window.AdviewAdsTag) window.AdviewAdsTag.autoLoadSlot.push('042-FOOTBOARD');
                } else if (!dfpParams.slots['042-FOOTBOARD']) {
                    if ('042-FOOTBOARD'.includes('TOPBOARD')) {
                        const el = document.getElementById('adUnit-042-FOOTBOARD');
                        if (el && el.parentNode.className.includes('ban') && el.parentNode.className.includes('wrapper')) {
                            el.parentNode.remove();
                        }
                    }
                } else {
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-042-FOOTBOARD-0'); });
                }
            </script>
        </div>
    </div>
<!-- v1.0 -->
<!--410355735, [ /tpl/ads/prod/dfpSlotScripts.jsp ], dfpBanersSlotScriptsBean-->
<!-- v2.2.2 -->
<!--410355734, [ /tpl/ads/prod/dfpSlot.jsp ], dfpBanersSlotBean-->
<div class="box_seo">
<ul class="content">
<li class="seo_column">
<h3>
Tematy
</h3>
<ul>
<li class="seo_row">
<a  href="https://wiadomosci.gazeta.pl/ukraina" title="Ukraina">Ukraina</a>
</li><li class="seo_row">
<a  href="https://wiadomosci.gazeta.pl/rosja" title="Rosja">Rosja</a>
</li><li class="seo_row">
<a  href="https://wiadomosci.gazeta.pl/wiadomosci/0,114912.html" title="Na ¿ywo">Na ¿ywo</a>
</li><li class="seo_row">
<a  href="https://m.sport.pl" title="Sport mobile">Sport mobile</a>
</li><li class="seo_row">
<a  href="https://pogoda.gazeta.pl/prognoza/polska" title="Prognoza pogody">Prognoza pogody</a>
</li><li class="seo_row">
<a  href="https://wiadomosci.gazeta.pl/niedziele-handlowe" title="Niedziele handlowe">Niedziele handlowe</a>
</li><li class="seo_row">
<a  href="https://g.pl/emerytura" title="Emerytura">Emerytura</a>
</li><li class="seo_row">
<a  href="https://forum.gazeta.pl/forum/f,28,Kraj.html" title="Forum Kraj">Forum Kraj</a>
</li><li class="seo_row">
<a  href="https://forum.gazeta.pl/forum/f,50,Swiat.html" title="Forum ¦wiat">Forum ¦wiat</a>
</li><li class="seo_row">
<a  href="https://forum.gazeta.pl/forum/f,1250,Wydarzenia_i_Aktualnosci.html" title="Forum Wydarzenia">Forum Wydarzenia</a>
</li><li class="seo_row">
<a  href="https://forum.gazeta.pl/forum/f,87,Bliski_Wschod.html" title="Forum Bliski Wschód">Forum Bliski Wschód</a>
</li><li class="seo_row">
<a  href="https://next.gazeta.pl/kursy-walut" title="Kursy walut">Kursy walut</a>
</li>
</ul>
</li>
<li class="seo_column">
<h3>
Najnowsze
</h3>
<ul>
<li class="seo_row">
<a  href="https://next.gazeta.pl/ukraina" title="Sytuacja na Ukrainie">Sytuacja na Ukrainie</a>
</li><li class="seo_row">
<a  href="https://wiadomosci.gazeta.pl/putin" title="W³adimir Putin">W³adimir Putin</a>
</li><li class="seo_row">
<a  href="https://wiadomosci.gazeta.pl/wolodymyr-zelenski" title="Wo³odymyr Ze³enski">Wo³odymyr Ze³enski</a>
</li><li class="seo_row">
<a  href="https://wiadomosci.gazeta.pl/wiadomosci/0,173952.html" title="Koronawirus">Koronawirus</a>
</li><li class="seo_row">
<a  href="https://wiadomosci.gazeta.pl/pogoda" title="Pogoda">Pogoda</a>
</li><li class="seo_row">
<a  href="https://wiadomosci.gazeta.pl/donald-tusk" title="Donald Tusk">Donald Tusk</a>
</li><li class="seo_row">
<a  href="https://wiadomosci.gazeta.pl/wybory" title="Wybory">Wybory</a>
</li><li class="seo_row">
<a  href="https://wiadomosci.gazeta.pl/michal-dworczyk" title="Micha³ Dworczyk">Micha³ Dworczyk</a>
</li><li class="seo_row">
<a  href="https://kultura.gazeta.pl/hbo" title="HBO">HBO</a>
</li><li class="seo_row">
<a  href="https://wiadomosci.gazeta.pl/sondaz" title="Sonda¿">Sonda¿</a>
</li><li class="seo_row">
<a  href="https://kultura.gazeta.pl/netflix" title="Netflix">Netflix</a>
</li><li class="seo_row">
<a  href="https://wiadomosci.gazeta.pl/ministerstwo-zdrowia" title="Ministerstwo zdrowia">Ministerstwo zdrowia</a>
</li>
</ul>
</li>
<li class="seo_column">
<h3>
Pos³uchaj i Ogl±daj
</h3>
<ul>
<li class="seo_row">
<a  href="https://www.tokfm.pl/Tokfm/0,0.html" title="TOK FM">TOK FM</a>
</li><li class="seo_row">
<a  href="https://audycje.tokfm.pl/#TRNavSST" title="Podcasty TOK FM">Podcasty TOK FM</a>
</li><li class="seo_row">
<a  href="https://fm.tuba.pl/" title="TUBA FM">TUBA FM</a>
</li><li class="seo_row">
<a  href="https://radiopogoda.pl/" title="Radio Pogoda">Radio Pogoda</a>
</li><li class="seo_row">
<a  href="https://zloteprzeboje.pl/" title="Radio Z³ote Przeboje">Radio Z³ote Przeboje</a>
</li><li class="seo_row">
<a  href="https://wiadomosci.gazeta.pl/faktoid/0,0.html" title="Faktoid">Faktoid</a>
</li><li class="seo_row">
<a  href="https://kultura.gazeta.pl/kultura/0,133070.html" title="Dzisiaj w TV">Dzisiaj w TV</a>
</li><li class="seo_row">
<a  href="https://www.sport.pl/sport/0,144964.html" title="Relacja na ¿ywo">Relacja na ¿ywo</a>
</li><li class="seo_row">
<a  href="https://g.pl/pieniadze" title="Pieni±dze">Pieni±dze</a>
</li><li class="seo_row">
<a  href="https://wiadomosci.gazeta.pl/wiadomosci/0,114944.html" title="Zdjêcia">Zdjêcia</a>
</li><li class="seo_row">
<a  href="https://www.gazeta.tv/Wideo/0,0.html" title="Gazeta.tv">Gazeta.tv</a>
</li>
</ul>
</li>
<li class="seo_column">
<h3>
Gazeta.pl
</h3>
<ul>
<li class="seo_row">
<a  href="https://pogoda.gazeta.pl/pogoda2021/0,181351,,,,polska.html" title="Prognoza pogody">Prognoza pogody</a>
</li><li class="seo_row">
<a  href="https://kultura.gazeta.pl/kultura/0,0.html" title="Kultura">Kultura</a>
</li><li class="seo_row">
<a  href="https://www.sport.pl/sport-hp/0,0.html" title="Sport">Sport</a>
</li><li class="seo_row">
<a  href="https://zdrowie.gazeta.pl/Zdrowie/0,0.html" title="Zdrowie">Zdrowie</a>
</li><li class="seo_row">
<a  href="https://www.edziecko.pl/edziecko/0,0.html" title="eDziecko">eDziecko</a>
</li><li class="seo_row">
<a  href="https://wiadomosci.gazeta.pl/wiadomosci/0,156046.html" title="Edukacja">Edukacja</a>
</li><li class="seo_row">
<a  href="https://kobieta.gazeta.pl/kobieta/0,0.html" title="Kobieta">Kobieta</a>
</li><li class="seo_row">
<a  href="https://next.gazeta.pl/next/0,0.html" title="Biznes, nowe technologie i pieni±dze">Biznes, nowe technologie i pieni±dze</a>
</li><li class="seo_row">
<a  href="https://avanti24.pl/Avanti/0,0.html" title="Avanti24">Avanti24</a>
</li><li class="seo_row">
<a  href="https://avanti24.pl/newsy/0,0.html" title="Moda">Moda</a>
</li><li class="seo_row">
<a  href="https://g.pl/ciekawostki" title="Ciekawostki">Ciekawostki</a>
</li>
</ul>
</li>
<li class="seo_column">
<h3>
Moda
</h3>
<ul>
<li class="seo_row">
<a  href="https://zakupy.avanti24.pl/kozaki/damskie/zima" title="Kozaki na zimê">Kozaki na zimê</a>
</li><li class="seo_row">
<a  href="https://zakupy.avanti24.pl/kurtki/damskie/zima" title="Kurtki zimowe">Kurtki zimowe</a>
</li><li class="seo_row">
<a  href="https://avanti24.pl/Magazyn/7,150441,28462761,modne-fryzury-dla-kobiet-po-50-tce-te-ciecia-odmladzaja-nawet.html" title="Modne fryzury">Modne fryzury</a>
</li><li class="seo_row">
<a  href="https://avanti24.pl/Magazyn/7,150441,29329357,modne-zimowe-kurtki-monnari-nawet-na-50-wyprzedazy-te-modele.html" title="Kurtki Monnari">Kurtki Monnari</a>
</li><li class="seo_row">
<a  href="https://avanti24.pl/Magazyn/7,150441,29102671,modne-czapki-dla-kobiet-po-50-tce-kremowy-model-jest-bardzo.html" title="Modne czapki">Modne czapki</a>
</li><li class="seo_row">
<a  href="https://avanti24.pl/Magazyn/7,150441,29204058,lidl-sprzedaje-ciepla-bluze-za-64-90-zl-to-model-z-mieciutkiego.html" title="Ciep³e bluzy">Ciep³e bluzy</a>
</li><li class="seo_row">
<a  href="https://avanti24.pl/Magazyn/7,150441,29292432,piekne-bluzki-za-30-zl-w-pepco-te-modele-niesamowicie-pasuja.html" title="Eleganckie bluzki">Eleganckie bluzki</a>
</li><li class="seo_row">
<a  href="https://avanti24.pl/Magazyn/7,150441,27659753,moda-po-40-tce-jak-wygladac-pieknie-i-z-klasa-te-ubrania-sa.html" title="Moda po 40-tce">Moda po 40-tce</a>
</li><li class="seo_row">
<a  href="https://zakupy.avanti24.pl/sukienki/czarny/damskie" title="Czarne sukienki">Czarne sukienki</a>
</li><li class="seo_row">
<a  href="https://zakupy.avanti24.pl/koszule/damskie/elegancki" title="Eleganckie koszule">Eleganckie koszule</a>
</li><li class="seo_row">
<a  href="https://zakupy.avanti24.pl/plaszcze/damskie" title="Modne p³aszcze">Modne p³aszcze</a>
</li>
</ul>
</li>
<li class="seo_column">
<h3>
Dom
</h3>
<ul>
<li class="seo_row">
<a  href="https://czterykaty.pl/inspiracje/7,153170,29590131,czym-wyczyscic-mosiadz-skuteczne-sposoby-na-czyszczenie-i-pielegnacje.html" title="Czyszczenie mosi±dzu">Czyszczenie mosi±dzu</a>
</li><li class="seo_row">
<a  href="https://czterykaty.pl/inspiracje/7,153170,30367928,ten-dodatek-sprawi-ze-wnetrze-nabierze-nowego-charakteru-modne.html" title="Modne dywany">Modne dywany</a>
</li><li class="seo_row">
<a  href="https://czterykaty.pl/inspiracje/7,153170,30118522,modern-vintage-we-wnetrzach-jak-stylowo-polaczyc-przeszlosc.html" title="Styl modern vintage">Styl modern vintage</a>
</li><li class="seo_row">
<a  href="https://zakupy-czterykaty.pl/fotele" title="Wygodne fotele">Wygodne fotele</a>
</li><li class="seo_row">
<a  href="https://zakupy-czterykaty.pl/lampa/salon" title="Lampy do salonu">Lampy do salonu</a>
</li><li class="seo_row">
<a  href="https://czterykaty.pl/czterykaty/7,185855,29396293,zachwycajacy-cmielow-tradycyjna-porcelana-w-nowoczesnym-wydaniu.html" title="Porcelana Æmielów">Porcelana Æmielów</a>
</li><li class="seo_row">
<a  href="https://czterykaty.pl/inspiracje/7,153170,29322135,tak-mieszka-magdalena-molek-kuchnia-z-wyspa-robi-ogromne-wrazenie.html" title="Mieszkanie Mo³ek">Mieszkanie Mo³ek</a>
</li><li class="seo_row">
<a  href="https://czterykaty.pl/inspiracje/7,153170,30162635,ten-domowy-sposob-sprawi-ze-twoje-okna-beda-blyszczec-w-kilka.html" title="Mycie okien">Mycie okien</a>
</li><li class="seo_row">
<a  href="https://czterykaty.pl/czterykaty/56,119349,17559390,aranzacje-z-ceglana-sciana-przeglad-waszych-wnetrz.html" title="Aran¿acja ceglana">Aran¿acja ceglana</a>
</li><li class="seo_row">
<a  href="https://czterykaty.pl/inspiracje/7,153170,23656278,jak-zrobic-wylewke-betonowa.html" title="Wylewka betonowa">Wylewka betonowa</a>
</li><li class="seo_row">
<a  href="https://czterykaty.pl/smartips/7,152821,20731810,jak-wyczyscic-zaluzje-jest-na-to-jeden-sprytny-patent.html" title="Czyszczenie ¿aluzji">Czyszczenie ¿aluzji</a>
</li>
</ul>
</li>
<li class="seo_column">
<h3>
Co s³ychaæ?
</h3>
<ul>
<li class="seo_row">
<a  href="https://wiadomosci.gazeta.pl/wiadomosci/0,130433.html" title="Alert24">Alert24</a>
</li><li class="seo_row">
<a  href="https://wiadomosci.gazeta.pl/wiadomosci/1,114871,17254335,Kontakt.html" title="Kontakt">Kontakt</a>
</li><li class="seo_row">
<a  href="https://wiadomosci.gazeta.pl/wiadomosci/1,114871,17254636,O_nas.html" title="O nas">O nas</a>
</li><li class="seo_row">
<a  href="https://www.facebook.com/gazetapl" title="Facebook">Facebook</a>
</li><li class="seo_row">
<a  href="mailto:redakcja_portalu@agora.pl" title="Napisz do nas">Napisz do nas</a>
</li><li class="seo_row">
<a  href="mailto:pomoc@agora.pl" title="Centrum Obs³ugi Klienta">Centrum Obs³ugi Klienta</a>
</li>
</ul>
</li>
</ul>
</div><!-- UZREditor --><!-- htmEOF -->
<!--20093413, [ /htm/20093/j20093413.htm ], null-->
<footer class="page_footer">
<div class="page_footer_upper">
<ul class="footer_upper_links">
<li>
<a href="https://www.gazeta.pl/0,0.html#e=GFootLink" title="Gazeta.pl" data-bd-viewability-id="footerUpper" data-bd-viewability-href="https://www.gazeta.pl/0,0.html#e=GFootLink" data-bd-viewability="1">Gazeta.pl</a>
</li><li>
<a href="https://wiadomosci.gazeta.pl/wiadomosci/0,0.html#e=GFootLink" title="Wiadomo¶ci" data-bd-viewability-id="footerUpper" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/0,0.html#e=GFootLink" data-bd-viewability="1">Wiadomo¶ci</a>
</li><li>
<a href="https://www.sport.pl/sport-hp/0,0.html#e=GFootLink" title="Sport.pl" data-bd-viewability-id="footerUpper" data-bd-viewability-href="https://www.sport.pl/sport-hp/0,0.html#e=GFootLink" data-bd-viewability="1">Sport.pl</a>
</li><li>
<a href="https://wyborcza.biz/biznes/0,0.html#e=GFootLink" title="Biznes" data-bd-viewability-id="footerUpper" data-bd-viewability-href="https://wyborcza.biz/biznes/0,0.html#e=GFootLink" data-bd-viewability="1">Biznes</a>
</li><li>
<a href="https://tv.gazeta.pl/program_tv/0,0.html#e=GFootLink" title="Program TV" data-bd-viewability-id="footerUpper" data-bd-viewability-href="https://tv.gazeta.pl/program_tv/0,0.html#e=GFootLink" data-bd-viewability="1">Program TV</a>
</li><li>
<a href="https://pogoda.gazeta.pl/#e=GFootLink" title="Pogoda" data-bd-viewability-id="footerUpper" data-bd-viewability-href="https://pogoda.gazeta.pl/#e=GFootLink" data-bd-viewability="1">Pogoda</a>
</li><li>
<a href="https://www.tokfm.pl/Tokfm/0,0.html#e=GFootLink" title="Tok.FM" data-bd-viewability-id="footerUpper" data-bd-viewability-href="https://www.tokfm.pl/Tokfm/0,0.html#e=GFootLink" data-bd-viewability="1">Tok.FM</a>
</li><li>
<a href="https://newslettery.gazeta.pl/newslettery#e=GFootLink" title="Newsletter" data-bd-viewability-id="footerUpper" data-bd-viewability-href="https://newslettery.gazeta.pl/newslettery#e=GFootLink" data-bd-viewability="1">Newsletter</a>
</li><li>
<a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114871,17254636,o-nas.html#e=GFootLink" title="Redakcja Wiadomo¶ci" data-bd-viewability-id="footerUpper" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/7,114871,17254636,o-nas.html#e=GFootLink" data-bd-viewability="1">Redakcja Wiadomo¶ci</a>
</li><li>
<a href="https://wiadomosci.gazeta.pl/wiadomosci/7,114871,17254335,kontakt.html#e=GFootLink" title="Kontakt" data-bd-viewability-id="footerUpper" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/7,114871,17254335,kontakt.html#e=GFootLink" data-bd-viewability="1">Kontakt</a>
</li>
</ul>
<ul class="footer_middle_links">
<li>
<a href="https://oauth.gazeta.pl/poczta/auth" title="Poczta" data-bd-viewability-id="footerMiddle" data-bd-viewability-href="https://oauth.gazeta.pl/poczta/auth" data-bd-viewability="1">Poczta</a>
</li><li>
<a href="https://www.facebook.com/gazetapl?ref=ts" title="Facebook" data-bd-viewability-id="footerMiddle" data-bd-viewability-href="https://www.facebook.com/gazetapl?ref=ts" data-bd-viewability="1">Facebook</a>
</li><li>
<a href="https://wiadomosci.gazeta.pl/wiadomosci/3660000,0.html" title="Wszystkie artyku³y" data-bd-viewability-id="footerMiddle" data-bd-viewability-href="https://wiadomosci.gazeta.pl/wiadomosci/3660000,0.html" data-bd-viewability="1">Wszystkie artyku³y</a>
</li><li>
<a href="https://wiadomosci.gazeta.pl/pub/rss/wiadomosci.xml" title="RSS" data-bd-viewability-id="footerMiddle" data-bd-viewability-href="https://wiadomosci.gazeta.pl/pub/rss/wiadomosci.xml" data-bd-viewability="1">RSS</a>
</li>
</ul>
</div>
<a href="http://www.agora.pl/agora/0,0.html#e=AFootLink" target="_blank" rel="noreferrer" data-bd-viewability-id="footerLower" data-bd-viewability-href="http://www.agora.pl/agora/0,0.html#e=AFootLink" data-bd-viewability="1">Copyright &#x00a9; Agora SA</a>
<ul class="footer_lower_links">
<li>
<a href="http://onas.gazeta.pl/#e=AFootLink" title="O Nas" data-bd-viewability-id="footerLower" data-bd-viewability-href="http://onas.gazeta.pl/#e=AFootLink" data-bd-viewability="1">O Nas</a>
</li><li>
<a href="http://kariera.agora.pl#e=AFootLink" title="Sta¿e u nas" data-bd-viewability-id="footerLower" data-bd-viewability-href="http://kariera.agora.pl#e=AFootLink" data-bd-viewability="1">Sta¿e u nas</a>
</li><li>
<a href="http://reklama.gazeta.pl/#e=AFootLink" title="Reklama" data-bd-viewability-id="footerLower" data-bd-viewability-href="http://reklama.gazeta.pl/#e=AFootLink" data-bd-viewability="1">Reklama</a>
</li><li>
<a href="https://pomoc.gazeta.pl/pomoc/7,154322,8856779,ochrona-prywatnosci.html#e=AFootLink" title="Polityka prywatno¶ci" data-bd-viewability-id="footerLower" data-bd-viewability-href="https://pomoc.gazeta.pl/pomoc/7,154322,8856779,ochrona-prywatnosci.html#e=AFootLink" data-bd-viewability="1">Polityka prywatno¶ci</a>
</li><li>
<a href="http://kontent.gazeta.pl/kontent/0,135721.html#e=AFootLink" title="Licencje/Kontent" data-bd-viewability-id="footerLower" data-bd-viewability-href="http://kontent.gazeta.pl/kontent/0,135721.html#e=AFootLink" data-bd-viewability="1">Licencje/Kontent</a>
</li><li>
<a href="https://pomoc.gazeta.pl/pomoc/7,154322,12911765,zasady-korzystania-z-serwisow-internetowych-agory-sa.html#e=AFootLink" title="Zasady korzystania z portalu" data-bd-viewability-id="footerLower" data-bd-viewability-href="https://pomoc.gazeta.pl/pomoc/7,154322,12911765,zasady-korzystania-z-serwisow-internetowych-agory-sa.html#e=AFootLink" data-bd-viewability="1">Zasady korzystania z portalu</a>
</li>
<li>
<a data-error-node href="http://pomoc.gazeta.pl/zglos_blad/0,0.html?sv=" data-width="650" data-height="505" title="Zg³o¶ b³±d" data-bd-viewability-id="helpLink" data-bd-viewability="1" data-bd-viewability-href="http://pomoc.gazeta.pl/zglos_blad/0,0.html?sv=">Zg³o¶ b³±d</a>
</li>
<script>
;!function() {
var
error_node = document.querySelector('.footer_lower_links [data-error-node]'),
loc = window.location.href,
href = error_node.getAttribute('href');
href += window.location.href;
error_node.setAttribute('href', href);
error_node.setAttribute('data-bd-viewability-href', href);
}();
</script>
</ul>
<div data-nosnippet class="page_footer_statement">
<div data-nosnippet>W³a¶ciciel niniejszego serwisu internetowego korzystaj±c z uprawnienia, przyznanego przez art. 4 ust. 3 Dyrektywy Parlamentu Europejskiego i Rady (UE) 2019/790 z dnia 17 kwietnia 2019 r. w sprawie prawa autorskiego i praw pokrewnych na jednolitym rynku cyfrowym oraz zmiany dyrektyw 96/9/WE i 2001/29/WE (Dz. U. UE. L. z 2019 r. Nr 130, str. 92) nie wyra¿a zgody na zwielokrotnianie, wykorzystywanie lub przechowywanie jakichkolwiek tre¶ci w postaci tekstów i danych oraz programów komputerowych i baz danych dostêpnych w serwisie internetowym, w celu ich eksploracji polegaj±cej na analizie, równie¿ przy zastosowaniu zautomatyzowanych technik, d±¿±cej do wygenerowania informacji obejmuj±cych w szczególno¶ci wzorce, tendencje i korelacje. Powy¿sze zastrze¿enie nie dotyczy eksploracji tre¶ci dokonywanej w celu umieszczania stron internetowych w ramach wyników wyszukiwania, jak te¿ nie ma na celu i nie mo¿e byæ interpretowane jako wy³±czenie lub ograniczenie uprawnieñ konsumentów do korzystania z tre¶ci w ramach udzielonego zezwolenia lub dozwolonego u¿ytku.</div>
<br>
<div data-nosnippet>Uzyskaj wiêcej informacji w Zastrze¿eniu dot. eksploracji tekstów i danych pod adresem <a href="https://agora.pl/zastrzezenie-prawne"><b>agora.pl/zastrzezenie-prawne.</b></a></div>
</div>
</footer><!-- UZREditor --><!-- htmEOF -->
<!--20354748, [ /htm/20354/j20354748.htm ], null-->
</div> <!-- .content_wrap -->
</div> <!-- .section_wrapper -->
<!--410355745, [ /tpl/prod/content/index/modules/bottom_wrap.jsp ], emptyBean-->

<!--410355770, [ null ], aggregatorModule-->
<script type="text/plain" class="optanon-category-C0002" id="adviewContainer">
    document.getElementById('adviewContainer').insertAdjacentHTML('beforebegin', '<iframe style="display: none;" src="https://adv.adview.pl/adview_mcgp/index.html"></iframe>');
</script>
<!--23530484, [ /tpl/ads/prod/modules/adviewMCGP.jsp ], emptyBean-->
</body>
</html>
