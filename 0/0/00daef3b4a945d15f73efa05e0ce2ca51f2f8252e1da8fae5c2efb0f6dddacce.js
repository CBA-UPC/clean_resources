<html><body style="background-color:transparent"></body></html>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             1;
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
			this.hc = (typeof gemius_hitcollector === 'string')?gemius_hitcollector:(typeof pp_gemius_hitcollector === 'string')?pp_gemius_hitcollector:'gahu.hit.gemius.pl';
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
			this.hc = 'gahu.hit.gemius.pl';
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
			if (typeof 