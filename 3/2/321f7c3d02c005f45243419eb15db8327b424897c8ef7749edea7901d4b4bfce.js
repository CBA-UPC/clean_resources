// (c) by Gemius SA
// HeatMap
// ver. 6.4

var ghmxy_version = 64;

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


if (typeof ghmxy_hitcollector!='string') {
	var ghmxy_hitcollector='mreg.hit.gemius.pl';
}

function ghmxy_getchromever(){
	if (!!window.chrome && (typeof navigator.userAgent == 'string')) {
		var ver = navigator.userAgent.match(/(Chrom(e|ium)|CriOS)\/([0-9]+)\./);
		return (ver==null)?-1:parseInt(ver[3]);
	}
	return -1;
}

if (typeof ghmxy_proto!='string' || (ghmxy_proto!="http://" && ghmxy_proto!="https://")) {
	if (ghmxy_getchromever()>=67) {
		var ghmxy_proto = 'https://';
	} else {
		if(document.location && document.location.protocol) {
			var ghmxy_proto = 'http'+((document.location.protocol=='https:')?'s':'')+'://';
		} else {
			var ghmxy_proto = 'http://';
		}
	}
}

if (typeof ghmxy_cmp_timeout!='number') {
	var ghmxy_cmp_timeout=10000;
}

var ghmxy_images = new Array();
var ghmxy_hm_data_to_send = "";
var ghmxy_xy_data_to_send = "";
var ghmxy_last_x = -1;
var ghmxy_last_y = -1;

var ghmxy_closing = 0;
var ghmxy_requests = [];

var ghmxy_cmp_found = 0;
var ghmxy_waiting_for_cmp = 0;
var ghmxy_cmpto = null;
var ghmxy_has_gdpr_consent = true;
var ghmxy_explicit_consent = (typeof ghmxy_consent === 'boolean')?ghmxy_consent:null;
var ghmxy_onpagehide = false;
var ghmxy_hidetime = null;
var ghmxy_hidecnt = 0;
var ghmxy_bfcache = null;
var ghmxy_timeouts = {cmpto: null, chto: null};

var ghmxy_waiting_for_chints = 1;
var ghmxy_inner_parameters = [];

function ghmxy_set_consent(value) {
	if (ghmxy_timeouts.cmpto != null) {
		if (ghmxy_timeouts.cmpto.to != null) {
			clearTimeout(ghmxy_timeouts.cmpto.to);
		}
		ghmxy_timeouts.cmpto = null;
	}
	ghmxy_waiting_for_cmp = 0;
	ghmxy_has_gdpr_consent = value;
	ghmxy_sendhits();
}

function ghmxy_sendhits() {
	var i;
	if (ghmxy_waiting_for_cmp == 0 && ghmxy_waiting_for_chints == 0) {
		for (i=0 ; i<ghmxy_requests.length ; i++) {
			var d = new Date().getTime();
			var ghmxy_url = ghmxy_proto+ghmxy_hitcollector+"/_"+d+i+ghmxy_requests[i].params;
			var sendf = (ghmxy_closing?6:0)+(ghmxy_onpagehide?16:0);
			if (((typeof ghmxy_dnt != 'undefined') && ghmxy_dnt) || ghmxy_explicit_consent === false || !ghmxy_has_gdpr_consent) {
				ghmxy_url += "&nc=1";
			} else if (ghmxy_explicit_consent === true){
				ghmxy_url += "&nc=0";
			}
			if (ghmxy_cmp_found) {
				ghmxy_url += "&cmpf=1";
			}
			ghmxy_url += ghmxy_getinner();
			if (ghmxy_closing == 1 && typeof navigator.sendBeacon == "function") {
				sendf += 1;
				ghmxy_url += '&sendf='+sendf;
				navigator.sendBeacon(ghmxy_url);
			} else {
				ghmxy_url += '&sendf='+sendf;
				var im = new Image();
				im.src = ghmxy_url;
				ghmxy_images[ghmxy_images.length] = im;
			}
		}
		if (ghmxy_closing == 1 && typeof navigator.sendBeacon != "function" && ghmxy_requests.length > 0) {
			var start = (new Date()).getTime();
			while (start+200>(new Date()).getTime());
		}
		ghmxy_requests = [];
	}
}

function ghmxy_gettitle() {
	if (typeof document.title != "undefined") return document.title.substring(0,64);
	else return "";
}

function ghmxy_getauthor() {
	try {
		var metatag = document.querySelector("meta[name='author']");
		if (metatag) return metatag.getAttribute("content").substring(0,32);
		else return "";
	} catch (e) {
		return "";
	}
}

function ghmxy_getextra() {
	var defaults = {"title=":ghmxy_gettitle(), "author=":ghmxy_getauthor()};
	var str="";
	if (typeof ghmxy_parameters != "undefined" && typeof ghmxy_parameters.length != 'undefined') {
		for (var i=0; i<ghmxy_parameters.length; i++) {
			if (i>0) {
				str += '|';
			}
			str += ((new String(ghmxy_parameters[i])).replace(/\|/g,'_'));
			if (typeof ghmxy_parameters[i].indexOf != "undefined" && ghmxy_parameters[i].indexOf("=")>0) {
				delete defaults[ghmxy_parameters[i].substring(0,ghmxy_parameters[i].indexOf("=")+1)];
			}
		}
	}
	for (var d in defaults) {
		if (str.length>0) str += '|';
		str += d+defaults[d].replace(/\|/g,'_');
	}
	return str;
}

function ghmxy_getinner() {
	if (typeof encodeURIComponent == 'undefined') {
		return "";
	}
	var str='_ver=' + ghmxy_version;
	for (var i=0; i<ghmxy_inner_parameters.length; i++) {
		str += '|' + ((new String(ghmxy_inner_parameters[i])).replace(/\|/g,'_'));
	}
	if (ghmxy_hidecnt > 0) {
		str += '|_hdcnt=' + ghmxy_hidecnt;
	}
	return "&inner=" + encodeURIComponent(str.substring(0,1999))
}

function ghmxy_sendview() {
	if ((typeof ghmxy_view == "undefined" || ghmxy_view) && typeof encodeURIComponent != 'undefined') {
		var ghmxy_params;
		if (typeof ghmxy_view_extra == "undefined") {
			ghmxy_view_extra = ghmxy_getextra();
		}
		var href = new String(document.location.href);
		var ref = "";
		var f=0;

		if (document.referrer) {
			ref=new String(document.referrer);
		}
		if (typeof Error!='undefined') {
			try { f=(document==top.document)?1:2; if (typeof top.document.referrer=="string") { ref=top.document.referrer } } catch(e) {f=3;}
		}
		ghmxy_params = "/redot.gif?l=4&w=hview&id="+ghmxy_identifier+"&arg=0&fr="+f+"&href="+encodeURIComponent(href.substring(0,499))+"&ref="+encodeURIComponent(ref.substring(0,499))+"&extra="+encodeURIComponent(ghmxy_view_extra.substring(0,1999));
		ghmxy_requests[ghmxy_requests.length] = {params:ghmxy_params};
		ghmxy_sendhits();
	}
}

function ghmxy_send() {
	if (ghmxy_hm_data_to_send!="" || ghmxy_xy_data_to_send!="") {
		var ghmxy_params = "/redot.gif?"+ghmxy_hm_data_to_send+"&"+ghmxy_xy_data_to_send;
		ghmxy_hm_data_to_send = "";
		ghmxy_xy_data_to_send = "";
		ghmxy_requests[ghmxy_requests.length] = {params:ghmxy_params};
		ghmxy_sendhits();
	}
}

//link map

function ghmxy_checklink(node,usecache) {
	if (usecache && node.ghmxy_checklink) {
		return node.ghmxy_checklink;
	}
	var imn	= null;
	if (node.nodeName == "#text") {
		if (node.nodeValue && node.nodeValue.replace(/[ \t\r\n]+/g,"").length > 0) {
			imn = node;
		}
	} else if (node.nodeName == "IMG") {
		imn = node;
	} else if (node.childNodes) {
		for (var i = 0 ; i < node.childNodes.length ; i++) {
			var hn = ghmxy_checklink(node.childNodes[i]);
			if (hn != null) {
				if (hn.nodeName == "#text") {
					imn = hn;
					break;
				}
				if (imn == null) {
					imn = hn;
				}
			}
		}
	}
	if (usecache) {
		node.ghmxy_checklink = imn;
	}
	return imn;
}

function ghmxy_toutf8(str) {
	function Hex(n) {
		var hexMap = '0123456789ABCDEF';
		return '%'+hexMap.charAt(n>>4)+hexMap.charAt(n&0xF);
	}
	var c,s,uc,ul;
	var dst = '';
	for (var i=0 ; i<str.length ; i++) {
		c = str.charCodeAt(i);
		if ((c>=0xDC00)&&(c<0xE000)) continue;
		if ((c>=0xD800)&&(c<0xDC00)) {
			i++;
			if (i>=str.length) continue;
			s = str.charCodeAt(i);
			if ((s<0xDC00)||(s>=0xDE00)) continue;
			c = ((c-0xD800)<<10)+(s-0xDC00)+0x10000;
		}
		if (c<=0x20 || c==0x22 || c==0x7C) {
			uc = Hex(c);
		} else if (c<0x80) {
			uc = String.fromCharCode(c);
		} else if (c<0x800) {
			uc = Hex(0xC0+(c>>6))+Hex(0x80+(c&0x3F));
		} else if (c<0x10000) {
			uc = Hex(0xE0+(c>>12))+Hex(0x80+(c>>6&0x3F))+Hex(0x80+(c&0x3F));
		} else {
			uc = Hex(0xF0+(c>>18))+Hex(0x80+(c>>12&0x3F))+Hex(0x80+(c>>6&0x3F))+Hex(0x80+(c&0x3F));
		}
		dst+=uc;
	}
	return dst;
}

function ghmxy_url_escape(str) {
	return ghmxy_toutf8(str).replace(/\x2520|\x2509|\x250[aA]|\x250[dD]/g,"")
}

function ghmxy_load() {
	if (document.getElementById && document.getElementsByTagName) {
		var allImages = document.getElementsByTagName("img");
		var allInputs = document.getElementsByTagName("input");
		var allForms = document.getElementsByTagName("form");
		var i;
		if (allImages) {
			for (i=0; i<allImages.length; i++) {
				if (typeof(allImages[i].src) != "undefined") {
					allImages[i].ghmxy_src = allImages[i].src;
				}
			}
		}
		if (allInputs) {
			for (i=0; i<allInputs.length; i++) {
				if (typeof(allInputs[i].value) != "undefined") {
					allInputs[i].ghmxy_value = allInputs[i].value;
				}
				if (typeof(allInputs[i].src) != "undefined") {
					allInputs[i].ghmxy_src = allInputs[i].src;
				}
			}
		}
		if (allForms) {
			for (i=0; i<allForms.length; i++) {
				if (typeof(allForms[i].action) != "undefined") {
					allForms[i].ghmxy_action = allForms[i].action;
				}
			}
		}
	}
}

function ghmxy_gettext(node,usecache) {
	if (usecache && node.ghmxy_gettext) {
		return node.ghmxy_gettext;
	}
	var rettext="";
	if (node.nodeName=="#text") {
		rettext = node.nodeValue;
	} else if (node.nodeName=="IMG") {
		var src="";
		var alt="";
		if (node.ghmxy_src) {
			src = node.ghmxy_src;
		} else {
			src = node.src;
		}
		if (node.alt) {
			alt = node.alt;
		}
		rettext = "img:"+ghmxy_url_escape(src)+":"+alt;
	} else if (node.childNodes) {
		for (var i=0 ; i<node.childNodes.length ; i++) {
			if (node.childNodes[i].nodeName!='A') {
				rettext+=" "+ghmxy_gettext(node.childNodes[i],usecache);
			}
		}
	}
	if (usecache) {
		node.ghmxy_gettext = rettext;
	}
	return rettext;
}

function ghmxy_checksum(itext,pos) {
	var cs=0;
	var b64map=".ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
	for (var n = pos; n < itext.length; n++) {
		cs = ((cs * 13) + itext.charCodeAt(n))&0xFFF;
	}
	return b64map.charAt((cs>>6)&0x3F)+b64map.charAt(cs&0x3F);
}

function ghmxy_tail_checksum(str,limit) {
	var c,s,ul;
	for (var i=0 ; i<str.length ; i++) {
		c = str.charCodeAt(i);
		if ((c>=0xDC00)&&(c<0xE000)) continue;
		if ((c>=0xD800)&&(c<0xDC00)) {
			i++;
			if (i>=str.length) continue;
			s = str.charCodeAt(i);
			if ((s<0xDC00)||(s>=0xE000)) continue;
			c = ((c-0xD800)<<10)+(s-0xDC00)+0x10000;
		}
		if (c<=0x20) {
			ul = 3;
		} else if (c<0x80) {
			ul = 1;
		} else if (c<0x800) {
			ul = 2;
		} else if (c<0x10000) {
			ul = 3;
		} else {
			ul = 4;
		}
		limit -= ul;
		if (limit<0) {
			return ghmxy_checksum(str,i);
		}
	}
	return "";
}

function ghmxy_escape(str,limit,doescape) {
	function Hex(n) {
		var hexMap = "0123456789ABCDEF";
		return hexMap.charAt(n>>4)+hexMap.charAt(n&0xF);
	}
	var c,s,uc,ul;
	var dst = "";
	for (var i=0 ; i<str.length ; i++) {
		c = str.charCodeAt(i);
		if ((c>=0xDC00)&&(c<0xE000)) continue;
		if ((c>=0xD800)&&(c<0xDC00)) {
			i++;
			if (i>=str.length) continue;
			s = str.charCodeAt(i);
			if ((s<0xDC00)||(s>=0xE000)) continue;
			c = ((c-0xD800)<<10)+(s-0xDC00)+0x10000;
		}
		if (c<0x80) {
			uc = escape(String.fromCharCode(c)).replace(/\+/g,"%2B").replace(/\//g,"%2F");
			if (c<=0x20) {
				ul=3;
			} else {
				ul=1;
			}
		} else if (c<0x800) {
			uc = "%u"+Hex(c>>8)+Hex(c&0xFF);
			ul = 2;
		} else if (c<0x10000) {
			uc = "%u"+Hex(c>>8)+Hex(c&0xFF);
			ul = 3;
		} else {
			uc = "%U"+Hex((c>>24)&0xFF)+Hex((c>>16)&0xFF)+Hex((c>>8)&0xFF)+Hex(c&0xFF);
			ul = 4;
		}
		limit -= ul;
		if (limit<0) {
			if (doescape==0) {
				dst = str.substr(0,i);
			}
			return dst;
		}
		dst+=uc;
	}
	if (doescape==0) {
		dst = str;
	}
	return dst;
}

function ghmxy_node_desc(p,usecache) {
	var np=0;
	var ln=0;
	var ocln=0;
	var fform=0;
	var imgclick=0;
	var type="",octype="",mhref="",ocmhref="",path="",ltext="",ocltext="",lid="";
	try {
		if (p.nodeName == "A") {
			var cp = ghmxy_checklink(p,usecache);
			if (cp != null && cp.nodeName == "IMG") p = cp;
		}
		if (p.nodeName=="INPUT" || p.nodeName=="BUTTON") {
			if (p.type=="submit") {
				var value="";
				if (p.ghmxy_value) {
					value = p.ghmxy_value;
				} else {
					value = p.value;
				}
				ltext="formsubmit:"+value;
				fform=1;
			}
			if (p.type=="image") {
				var src="";
				if (p.ghmxy_src) {
					src = p.ghmxy_src;
				} else {
					src = p.src;
				}
				ltext="formimage:"+ghmxy_url_escape(src);
				fform=1;
			}
		} else if (p.nodeName=="IMG") {
			imgclick=1;
		}
		while (p) {
			if (!ocln && p.attributes && p.attributes.getNamedItem) {
				ocnode = p.attributes.getNamedItem("onclick");
				if ((ocnode && ocnode.nodeValue) || (p.nodeName=="BUTTON" && typeof(p.id)=="string" && p.id.length>0)) {
					ocln=p;
					octype = "hmc"
					ocmhref = (ocnode && ocnode.nodeValue)?ocnode.nodeValue:("button:"+p.id);
					ocltext=p.nodeName+" "+ghmxy_gettext(p);
				}
			}
			if (!ln) {
				if (p.nodeName=="AREA" && typeof(p.href)=="string" && p.href!="") {
					ln=p;
					type = "hma";
					mhref = p.href;
					ltext = p.shape+" "+p.coords;
				}
				if (p.nodeName=="A" && typeof(p.href)=="string" && p.href!="") {
					ln=p;
					if (imgclick) {
						type = "hmi"
					} else {
						type = "hml"
					}
					mhref = p.href;
					if ((typeof ghmxy_simple_hyperlink_description == "undefined" || !ghmxy_simple_hyperlink_description) && typeof(p.className)=="string" && p.className!="") {
						ltext=p.className+" "+ghmxy_gettext(p,usecache);
					} else {
						ltext=ghmxy_gettext(p,usecache);
					}
				}
				if (fform && p.nodeName=="FORM") {
					if (typeof(p.ghmxy_action)=="string" && p.ghmxy_action!="") {
						ln=p;
						type = "hmf"
						mhref = p.ghmxy_action;
					} else if (p.attributes && p.attributes.getNamedItem) {
						osnode = p.attributes.getNamedItem("onsubmit");
						if (osnode && osnode.nodeValue) {
							ln=p;
							type = "hms"
							mhref = p.attributes.getNamedItem("onsubmit").nodeValue;
						}
					}
				}
			}
			if (typeof(p.id)=="string" && (ln || ocln)) {
				if (p.id.substr(0,7)=="LinkID:") {
					lid=p.id.replace(/\x2520/g,"_").substr(7,50);
				}
				if (p.id.substr(0,9)=="LinkArea:") {
					pel=p.id.replace(/\x2520/g,"_").substr(9,10);
					if (path) {
						path=pel+"|"+path;
					} else {
						path=pel; 
					} 
				}
			}
			np = 0;
			if (typeof(p.parentNode)=="object") {
				var pp = p.parentNode;
				if (pp && pp.childNodes) {
					for (var ch=0 ; ch<pp.childNodes.length ; ch++) {
						if (pp.childNodes[ch] == p) {
							np=pp;
						}
					}
				}
			}
			p=np;
		}
		if (!ln) {
			type = octype;
			mhref = ocmhref;
			ltext = ocltext;
		}
		if (type!="" && (mhref!="" || ltext!="" || path!="" || lid!="")) {
			mhref=ghmxy_url_escape(mhref);
			ltext=ltext.replace(/[ \t\r\n]+/g," ").replace(/^ /,"").replace(/ $/,"").replace(/\x22|\||\x2520/g,"_");
			path=path.replace(/;|&|\//g,"_");
			lid=lid.replace(/;|&|\/|\|/g,"_");
			return {type:type , link:mhref , area:path , alt:ltext , lid:lid};
		}
	} catch (_ev) {
	}
	return null;
}

function ghmxy_interface_node_desc(node,usecache) {
	var cache = usecache || true;
	if (cache && node.ghmxy_node_desc) {
		return node.ghmxy_node_desc;
	}
	node_desc = ghmxy_node_desc(node,cache);
	if (node_desc) {
		// sarg = node_desc.ltext+"|"+node_desc.area
		// ref  = node_desc.mhref+"|"+node_desc.lid
		node_desc.linkcs = ghmxy_tail_checksum(node_desc.link,226);
		node_desc.link = ghmxy_escape(node_desc.link,226,0);
		node_desc.altcs = ghmxy_tail_checksum(node_desc.alt,190);
		node_desc.alt = ghmxy_escape(node_desc.alt,190,0);
		node_desc.area = ghmxy_escape(node_desc.area,50,0,0);
		node_desc.lid = ghmxy_escape(node_desc.lid,50,0,0);
		if (cache) {
			node.ghmxy_node_desc = node_desc;
		}
	}
	return node_desc;
}

function ghmxy_prepare(type,mhref,areapath,ltext,lid) {
	if (typeof encodeURIComponent != 'undefined') {
		var href = new String(document.location.href);
		ghmxy_hm_data_to_send = "l=1&id="+ghmxy_identifier+"&arg=0&sarg="+ghmxy_escape(ltext,190,1)+"|"+ghmxy_tail_checksum(ltext,190)+"|"+ghmxy_escape(areapath,50,1)+"&ref=http%3A%2F%2F0.0.0.0%2F"+type+"%3D"+ghmxy_escape(mhref,226,1)+"|"+ghmxy_tail_checksum(mhref,226)+"|"+ghmxy_escape(lid,50,1)+"&href="+encodeURIComponent(href.substring(0,499));
	}
}

function ghmxy_hm_click(ev) {
	if (document.getElementById) {
		var p = 0;
		if (!window.event) { 
			p=ev.target;
		} else {
			p=window.event.srcElement;
		}
		node_desc = ghmxy_node_desc(p,false);
		if (node_desc) {
			ghmxy_prepare(node_desc.type,node_desc.link,node_desc.area,node_desc.alt,node_desc.lid);
		}
	}
}

function ghmxy_clear_cache(node) {
	delete node.ghmxy_gettext;
	delete node.ghmxy_checklink;
	delete node.ghmxy_node_desc;
}

//gemius xy map

if (typeof(ghmxy_type)=='undefined' || (ghmxy_type!='percent' && ghmxy_type!='absolute')) {
	var ghmxy_type='x';
} else {
	ghmxy_type = ghmxy_type.substr(0,1);
}
if (typeof(ghmxy_align)=='undefined' || (ghmxy_align!='left' && ghmxy_align!='center' && ghmxy_align!='right')) {
	var ghmxy_align='x';
} else {
	ghmxy_align = ghmxy_align.substr(0,1);
}

function ghmxy_get_window_params() {
	var w = window;
	var d = document;
	var dd;
	var wparam = 'r'+screen.width+','+screen.height;
	if (typeof w.innerWidth=='number') {
		wparam += '|s'+w.innerWidth+','+w.innerHeight+'|a'+ghmxy_align.substr(0,1)+'|t'+ghmxy_type.substr(0,1)+'|m'+w.pageXOffset+','+w.pageYOffset+'|p';
	} else if ( ((dd = d.documentElement) && (dd.clientWidth || dd.clientHeight)) || ((dd = d.body) && (dd.clientWidth || dd.clientHeight)) ) {
		wparam += '|s'+dd.clientWidth+','+dd.clientHeight+'|a'+ghmxy_align.substr(0,1)+'|t'+ghmxy_type.substr(0,1)+'|m'+dd.scrollLeft+','+dd.scrollTop+'|p';
	}
	if (d.body && typeof(d.body.scrollWidth)!='undefined' && typeof(d.body.scrollHeight)!='undefined') {
		wparam += d.body.scrollWidth+','+d.body.scrollHeight;
	}
	return wparam;
}

function ghmxy_get_obj_desc(id,posx,posy,sizex,sizey) {
	return '|o'+posx+','+posy+'|d'+sizex+','+sizey+'|n'+encodeURIComponent(id);
}

function ghmxy_xy_reset() {
	ghmxy_last_x = -1;
	ghmxy_last_y = -1;
}

function ghmxy_sendxy(x,y,objdesc) {
	if ((x<ghmxy_last_x-1 || x>ghmxy_last_x+1 || y<ghmxy_last_y-1 || y>ghmxy_last_y+1) && typeof encodeURIComponent != 'undefined') {
		var href = new String(document.location.href);
		ghmxy_xy_data_to_send = 'l=2&id='+ghmxy_identifier+'&arg=0&sarg='+ghmxy_get_window_params()+objdesc+'&href='+encodeURIComponent(href.substring(0,499))+'&ref=http%3A%2F%2F0.0.0.0%2Fxy%3D'+x+':'+y;
		ghmxy_last_x = x;
		ghmxy_last_y = y;
	}
}

function ghmxy_xy_click(ev) {
	var w = window;
	var d = document;
	var dd;
	if (d.getElementById) {
		var p=0;
		var ex;
		if (!w.event) {
			p=ev.target;
		} else {
			p=w.event.srcElement;
		}
		if (typeof(p)!="object") {
			return;
		}
		if (!p.getBoundingClientRect) {
			return;
		}
		if (typeof(p.nodeName)=="undefined" || p.nodeName=="HTML") {
			return;
		}
		try {
			while (p) {
				var css;
				if (w.getComputedStyle) {
					css = getComputedStyle(p, null);
				} else {
					css = p.currentStyle;
				}
				var ov = css.overflow || "";
				var ovx = css.overflowX || "";
				var ovy = css.overflowY || "";
				var scroll = (ov=="auto" || ov=="scroll" || ovx=="auto" || ovx=="scroll" || ovy=="auto" || ovy=="scroll")?1:0;
				var pid;
				if (typeof(p.id)=="string" && p.id!="") {
					pid = p.id.replace(/\x2520/g,"_").substr(0,100);
				} else {
					pid = 0;
				}
				if (p.nodeName=="BODY" || p==d.body) {
					var bodybox;
					if (typeof w.innerWidth=='number') {
						bodybox = {x:w.pageXOffset,y:w.pageYOffset};
					} else if ( ((dd = d.documentElement) && (dd.clientWidth || dd.clientHeight)) || ((dd = d.body) && (dd.clientWidth || dd.clientHeight)) ) {
						bodybox = {x:dd.scrollLeft,y:dd.scrollTop};
					}
					var insidepos = {x:ev.clientX+bodybox.x,y:ev.clientY+bodybox.y};
					ghmxy_sendxy(ev.clientX,ev.clientY,ghmxy_get_obj_desc("%%BODY%%",insidepos.x,insidepos.y,p.scrollWidth,p.scrollHeight));
					return;
				} else if (pid && (scroll || pid.substr(0,12)=="GemiusXYMap:")) {
					var ppos;
					if (p.getBoundingClientRect) {
						var box = p.getBoundingClientRect();
						ppos = {x:box.left,y:box.top};
					} else {
						return;
					}
					var clientpos = {x:ev.clientX-ppos.x,y:ev.clientY-ppos.y};
					var insidepos = {x:clientpos.x+p.scrollLeft,y:clientpos.y+p.scrollTop};
					if (clientpos.x >= p.clientLeft && clientpos.x < p.clientLeft+p.clientWidth && clientpos.y >= p.clientTop && clientpos.y < p.clientTop+p.clientHeight) {
						ghmxy_sendxy(ev.clientX,ev.clientY,ghmxy_get_obj_desc(pid,insidepos.x,insidepos.y,p.scrollWidth,p.scrollHeight));
					}
					return;
				} else {
					var np = 0;
					if (typeof(p.parentNode)=="object") {
						var pp = p.parentNode;
						if (pp && pp.childNodes) {
							for (var ch=0 ; ch<pp.childNodes.length ; ch++) {
								if (pp.childNodes[ch] == p) {
									np=pp;
								}
							}
						}
					}
					p = np;
				}
			}
		} catch (ex) {
		}
	}
}

function ghmxy_flash(id,xx,yy) {
	if (document.getElementById) {
		var p = document.getElementById(id);
		var pid = id.replace(/\x2520/g,"_").substr(0,100);
		if (p && p.getBoundingClientRect) {
			var box = p.getBoundingClientRect();
			var ppos = {x:box.left,y:box.top};
			var ev = {clientX:ppos.x+xx,clientY:ppos.y+yy};
			ghmxy_sendxy(ev.clientX,ev.clientY,ghmxy_get_obj_desc(pid,xx,yy,p.scrollWidth,p.scrollHeight));
		}
	}
}


//Scroll Map

var ghmxy_visapi_s = "";
var ghmxy_visapi_c = "";
var ghmxy_scroll_ls = "";
var ghmxy_scroll_lt = 0;
var ghmxy_scroll_lh = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight;
var ghmxy_scroll_lupdate = ((new Date()).getTime());
var ghmxy_scroll_mdur = 7500;
var ghmxy_scroll_tdur = 0;
var ghmxy_scroll_data = [];

function ghmxy_findvisapi() {
	if (typeof document.hidden != 'undefined') {
		ghmxy_visapi_s = 'visibilityState';
		ghmxy_visapi_c = 'visibilitychange';
	} else {
		var p = ['moz','webkit','ms','o'];
		for (var i in p) {
			if (typeof document[p[i]+'Hidden'] != 'undefined') {
				ghmxy_visapi_s = p[i]+'VisibilityState';
				ghmxy_visapi_c = p[i]+'visibilitychange';
			}
		}
	}
}

function ghmxy_scroll_send() {
	if (ghmxy_scroll_data.length > 0 && typeof encodeURIComponent != 'undefined') {
		var sarg = "";
		var href = new String(document.location.href);
		var ghmxy_params = "/redot.gif?l=3&w=hsc&id="+ghmxy_identifier+"&arg=0";
		for (var i=0; i<ghmxy_scroll_data.length; i++) {
			if (i>0) {
				sarg += "|";
			}
			sarg += ghmxy_scroll_data[i].t + ":" + (ghmxy_scroll_data[i].t+ghmxy_scroll_data[i].h) + ":" + ghmxy_scroll_data[i].d;
		}
		ghmxy_params += "&sarg="+encodeURIComponent(sarg)+"&href="+encodeURIComponent(href.substring(0,499));
		ghmxy_requests[ghmxy_requests.length] = {params:ghmxy_params};
		ghmxy_sendhits();
	}
	ghmxy_scroll_data = [];
}

function ghmxy_scroll_getdur() {
	var res = 0;
	for (var i=0; i<ghmxy_scroll_data.length; i++) {
		res += ghmxy_scroll_data[i].d;
	}
	return res;
}

function ghmxy_scroll_update() {
	var t = window.pageYOffset || document.documentElement.scrollTop;
	var h = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight;
	var d = ((new Date()).getTime()) - ghmxy_scroll_lupdate;
	var s = ghmxy_visapi_s?document[ghmxy_visapi_s]:"";
	d = ((d<0)?0:((d>30000)?30000:d));
	if (ghmxy_scroll_ls && ghmxy_scroll_ls!="visible") {
		ghmxy_scroll_lupdate = ((new Date()).getTime());
	} else if ((typeof ghmxy_scroll_lt == "number") && (typeof ghmxy_scroll_lh == "number") && d > 250) {
		var data = null;
		ghmxy_scroll_lt = Math.round(ghmxy_scroll_lt);
		ghmxy_scroll_lh = Math.round(ghmxy_scroll_lh);
		for (var i=0; i<ghmxy_scroll_data.length; i++) {
			if (ghmxy_scroll_data[i].t == ghmxy_scroll_lt && ghmxy_scroll_data[i].h == ghmxy_scroll_lh) {
				data = ghmxy_scroll_data[i];
				data.d = data.d + d;
				break;
			}
		}
		if (!data && ghmxy_scroll_tdur < 900000) {
			ghmxy_scroll_data[ghmxy_scroll_data.length] = data = {t:ghmxy_scroll_lt, h:ghmxy_scroll_lh, d:d};
		}
		ghmxy_scroll_tdur += d;
		ghmxy_scroll_lupdate = ((new Date()).getTime());
	}
	if (t != ghmxy_scroll_lt) {
		ghmxy_scroll_tdur = 0;
	}
	if (ghmxy_scroll_data.length >= 50 || ghmxy_scroll_getdur() >= ghmxy_scroll_mdur) {
		ghmxy_scroll_send();
		ghmxy_scroll_mdur = ((ghmxy_scroll_mdur<=225000)?(2*ghmxy_scroll_mdur):450000);
	}
	ghmxy_scroll_ls = s;
	ghmxy_scroll_lt = t;
	ghmxy_scroll_lh = h;
}

function ghmxy_timer() {
	ghmxy_scroll_update();
}

function ghmxy_unload() {
	if (ghmxy_waiting_for_cmp == 1 && ghmxy_cmp_timeout == Infinity) {
		return;
	}
	ghmxy_closing = 1;
	ghmxy_waiting_for_cmp = 0;
	ghmxy_waiting_for_chints = 0;
	if (typeof ghmxy_scrollmap == "undefined" || ghmxy_scrollmap) {
		ghmxy_scroll_update();
		ghmxy_scroll_send();
	}
	ghmxy_sendhits();
}

function ghmxy_pagehide() {
	ghmxy_bfcache = {ghmxy_waiting_for_cmp:ghmxy_waiting_for_cmp, ghmxy_waiting_for_chints:ghmxy_waiting_for_chints};
	ghmxy_unload();
	if (ghmxy_hidetime==null) {
		ghmxy_hidetime = ((new Date()).getTime());
	}
	ghmxy_hide_timeouts();
}

function ghmxy_pageshow() {
	if (ghmxy_hidetime==null) {
		return;
	}
	if (ghmxy_bfcache) {
		ghmxy_waiting_for_cmp = ghmxy_bfcache.ghmxy_waiting_for_cmp;
		ghmxy_waiting_for_chints = ghmxy_bfcache.ghmxy_waiting_for_chints;
		ghmxy_bfcache = null;
	}
	if (typeof ghmxy_scrollmap == "undefined" || ghmxy_scrollmap) {
		ghmxy_scroll_lupdate = ((new Date()).getTime());
		ghmxy_scroll_mdur = 7500;
	}
	ghmxy_hidecnt += 1;
	ghmxy_hidetime = null;
	ghmxy_closing = 0;
	ghmxy_show_timeouts();
	ghmxy_sendview();
}

// common

function ghmxy_click(ev) {
	ghmxy_xy_click(ev);
	ghmxy_hm_click(ev);
	ghmxy_send();
}

function ghmxy_scroll() {
	ghmxy_xy_reset();
	if (typeof ghmxy_scrollmap == "undefined" || ghmxy_scrollmap) {
		ghmxy_scroll_update();
	}
}

function ghmxy_add_event(ob,evname,fn) {
	if (ob.attachEvent) {
		ob.attachEvent("on"+evname,fn);
	} else if(ob.addEventListener) {
		ob.addEventListener(evname,fn, false);
	}
}

function ghmxy_set_timeout(fn,time) {
	return {to: setTimeout(fn,time), fn: fn, time: time};
}

function ghmxy_hide_timeouts() {
	for (var key in ghmxy_timeouts) {
		var timeout = ghmxy_timeouts[key];
		if (timeout != null && timeout.to != null) {
			clearTimeout(timeout.to);
			timeout.to = null;
		}
	}
}

function ghmxy_show_timeouts() {
	for (var key in ghmxy_timeouts) {
		var timeout = ghmxy_timeouts[key];
		if (timeout!=null && timeout.to==null) {
			timeout.to = setTimeout(timeout.fn,timeout.time);
		}
	}
}

function ghmxy_get_consent() {
	if (( (typeof ghmxy_dnt == 'undefined') || !ghmxy_dnt ) && ghmxy_explicit_consent === null &&
			(typeof ghmxy_use_cmp != 'undefined') && ghmxy_use_cmp && gemius_cmpclient.find_cmp()) {
		ghmxy_cmp_found = 1;
		ghmxy_waiting_for_cmp = 1;
		ghmxy_has_gdpr_consent = false;
		var purposes = {1:[1,5],2:[1,7,8,9,10]};
		var dmp_purpose = (typeof ghmxy_dmp_purpose === 'boolean')?ghmxy_dmp_purpose:false;
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

			combine_cmp_purposes(purposes, ghmxy_cmp_purposes, dmp_purpose);
		} catch (e) {}
		gemius_cmpclient.get_consent(ghmxy_set_consent, purposes);
		if (ghmxy_cmp_timeout != Infinity) {
			ghmxy_timeouts.cmpto = ghmxy_set_timeout(function() { ghmxy_set_consent(false); }, ghmxy_cmp_timeout);
		}
	}
}

function ghmxy_chints_to_params(chints) {
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

}

function ghmxy_chints_loaded(chints) {
	if (ghmxy_waiting_for_chints != 0) {
		try {
			ghmxy_inner_parameters = ghmxy_inner_parameters.concat(ghmxy_chints_to_params(chints));
		} catch(e) {};
		ghmxy_waiting_for_chints = 0;
		ghmxy_sendhits();
	}
}

function ghmxy_chints_failed() {
	if (ghmxy_timeouts.chto != null) {
		ghmxy_timeouts.chto = null;
	}
	ghmxy_waiting_for_chints = 0;
	ghmxy_sendhits();
}

function ghmxy_get_chints() {
	ghmxy_waiting_for_chints = 1;
	if (typeof navigator.userAgentData == 'object' && typeof navigator.userAgentData.getHighEntropyValues == 'function') {
		try {
			var hints = ["architecture","model","platform","platformVersion","bitness","mobile","wow64","brands","fullVersionList"];
			navigator.userAgentData.getHighEntropyValues(hints).then(ghmxy_chints_loaded, ghmxy_chints_failed);
			ghmxy_timeouts.chto = ghmxy_set_timeout(ghmxy_chints_failed, 10000);
		} catch(e) {
			ghmxy_chints_failed();
		};
	} else {
		ghmxy_chints_failed();
	}
}

if (typeof ghmxy_identifier != "undefined") {
	ghmxy_identifier = ghmxy_identifier.replace(/([a-zA-Z0-9._]+).*/,'$1');
	ghmxy_get_consent();
	ghmxy_get_chints();
	// common:
	ghmxy_sendview();
	ghmxy_add_event(document,"mousedown",ghmxy_click);
	ghmxy_add_event(window,"scroll",ghmxy_scroll);
	ghmxy_add_event(window,"resize",ghmxy_scroll);
	if ('onpagehide' in window) {
		ghmxy_onpagehide = true;
		ghmxy_add_event(window,"pagehide",ghmxy_pagehide);
		ghmxy_add_event(window,"pageshow",ghmxy_pageshow);
	} else {
		ghmxy_add_event(window,"unload",ghmxy_unload);
	}
	// link map:
	ghmxy_add_event(window,"load",ghmxy_load);
	// scroll map:
	if (typeof ghmxy_scrollmap == "undefined" || ghmxy_scrollmap) {
		ghmxy_findvisapi();
		ghmxy_scroll_ls = ghmxy_visapi_s?document[ghmxy_visapi_s]:"";
		setInterval(ghmxy_timer,2500);
		if (ghmxy_visapi_c != '') {
			ghmxy_add_event(document,ghmxy_visapi_c,ghmxy_scroll_update);
		}
	}
}
ary-dark), 1)}.atomsBookmarkExposition--eagle .atomsBookmarkExposition__tooltip{background-color:rgba(var(--primary-dark), 1);font:var(--small4-font);color:rgba(var(--_white), 1);transition-property:opacity;transition-duration:.2s;transition-timing-function:ease-in-out;display:inline-block;position:absolute;z-index:1;right:5px;bottom:36px;width:max-content;max-width:180px;padding:.75rem 1rem;border-radius:3px;opacity:0;text-align:left;cursor:default;filter:drop-shadow(0 4px 16px rgba(0, 0, 0, 0.2))}.atomsBookmarkExposition--eagle .atomsBookmarkExposition__tooltip::after{content:"";position:absolute;right:9px;bottom:-12px;margin-top:-5px;border-width:6px;border-style:solid;border-color:rgba(0,0,0,0);border-top-color:rgba(var(--primary-dark), 1)}.atomsBookmarkExposition--eagle.js-showTooltip .atomsBookmarkExposition__tooltip{opacity:1}@media(min-width: 48em)and (max-width: 63.9375em){.medium-full .atomsBookmarkExposition .atomsBookmarkExposition--eagle .atomsBookmarkExposition__tooltip,.medium-wide .atomsBookmarkExposition .atomsBookmarkExposition--eagle .atomsBookmarkExposition__tooltip{max-width:none}}@media(min-width: 64em){.large-full .atomsBookmarkExposition .atomsBookmarkExposition--eagle .atomsBookmarkExposition__tooltip,.large-wide .atomsBookmarkExposition .atomsBookmarkExposition--eagle .atomsBookmarkExposition__tooltip{max-width:none}}
 .atomsCommentsExposition{display:flex;align-items:center;margin-bottom:0}.atomsCommentsExposition .atomsCommentsExposition__btn{background-color:rgba(242, 242, 242, 1);transition-property:background-color;transition-duration:.2s;transition-timing-function:ease-in-out;display:flex;position:relative;align-items:center;justify-content:center;width:40px;height:40px;margin:0;padding:0 .75rem;border:0;border-radius:50%;cursor:pointer}.atomsCommentsExposition .atomsCommentsExposition__btn .atomsCommentsExposition__count{font:var(--small3-font);padding-left:.25rem}.atomsCommentsExposition .atomsCommentsExposition__btn .atomsCommentsExposition__icon{width:24px;height:24px}.atomsCommentsExposition .atomsCommentsExposition__btn .atomsCommentsExposition__icon>svg{fill:rgba(26, 26, 26, 1);width:inherit;height:inherit}.atomsCommentsExposition .atomsCommentsExposition__btn .atomsCommentsExposition__activeIcon{background-color:rgba(235, 0, 0, 1);border:rgba(242, 242, 242, 1);position:absolute;top:8px;left:25px;box-sizing:content-box;width:.5rem;height:.5rem;border-width:2px;border-style:solid;border-radius:50%}.atomsCommentsExposition .atomsCommentsExposition__btn:hover{background-color:rgba(230, 230, 230, 1)}.atomsCommentsExposition .atomsCommentsExposition__btn:hover .atomsCommentsExposition__activeIcon{border-color:rgba(230, 230, 230, 1)}.atomsCommentsExposition .atomsCommentsExposition__btn--isDigit{width:auto;border-radius:99em}
 .atomsMenu{display:block;position:relative;z-index:100;width:100%;margin:0;padding:0;font-family:"Roboto",sans-serif;list-style:none}.atomsMenu__item{display:flex;position:relative;flex-wrap:wrap;justify-content:space-between;font-size:1rem;font-weight:700;line-height:1.2}.atomsMenu__item:last-child{border:0}.atomsMenu__moreButton{position:absolute;top:0;right:-1rem;width:3rem;height:auto;padding-bottom:1.5rem;font-size:1.5rem;line-height:1.2;text-align:center}.atomsMenu__moreButton>*{transition-property:transform;transition-duration:.3s;transition-timing-function:linear;transform:scale(1, 1)}.atomsMenu__moreButton--arrowUp>*{transform:scale(1, -1)}.atomsMenu__link{color:rgba(var(--_black), 1);display:inline-block;width:calc(100% - 2rem);padding-bottom:1.5rem;overflow:hidden;line-height:1.2;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;user-select:none}.atomsMenu__link:visited,.atomsMenu__link:active,.atomsMenu__link:hover{background-color:rgba(var(--_white), 1)}.atomsMenu__childrenList{transition-property:max-height,opacity;transition-duration:.2s;transition-timing-function:ease-in-out;width:100%;height:auto;max-height:800px;padding-left:1rem;overflow:hidden;transition-duration:.6s;opacity:1;list-style:none}.atomsMenu__childrenItem{line-height:1.2}.atomsMenu__childrenLink{color:rgba(var(--_black), 1);font:var(--small1-font);display:inline-block;line-height:1.2;text-decoration:none}.atomsMenu__childrenLink:last-of-type{padding-bottom:1.5rem}.atomsMenu__childrenLink>svg{margin-right:.625rem}.atomsMenu .js-hidden{max-height:0;opacity:.7}
 .atomsNavigationBreadcrumbs{background-color:rgba(var(--_white), 1);display:block;position:relative}.atomsNavigationBreadcrumbs.atomsNavigationBreadcrumbs--withoutSpacing{height:auto;margin-bottom:.75rem}.atomsNavigationBreadcrumbs.atomsNavigationBreadcrumbs--withoutSpacing .atomsNavigationBreadcrumbs__content{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;width:100%;overflow:auto;white-space:nowrap;scroll-snap-type:x mandatory;width:calc(100% + 0.75rem * 2);margin-right:-0.75rem;margin-left:-0.75rem;padding-top:0}.atomsNavigationBreadcrumbs.atomsNavigationBreadcrumbs--withoutSpacing .atomsNavigationBreadcrumbs__content>*{white-space:normal;scroll-snap-align:start}.atomsNavigationBreadcrumbs.atomsNavigationBreadcrumbs--withoutSpacing .atomsNavigationBreadcrumbs__content>*{width:auto;min-width:auto;padding-left:.75rem}.atomsNavigationBreadcrumbs.atomsNavigationBreadcrumbs--withoutSpacing .atomsNavigationBreadcrumbs__content>*:last-child{width:calc(auto + 0.75rem);min-width:calc(auto + 0.75rem);padding-right:.75rem}.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__content{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;width:100%;overflow:auto;white-space:nowrap;scroll-snap-type:x mandatory;align-items:center;margin:0 0 .5rem;padding:1.5rem 0 .5rem 0;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;-ms-overflow-style:none}.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__content>*{white-space:normal;scroll-snap-align:start}.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__content::-webkit-scrollbar{display:none}.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__list{display:flex;align-items:center;height:24px;margin:0;padding:0;padding-right:30px;list-style-type:none}.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__logo{border-right-color:rgba(230, 230, 230, 1);display:inline-flex;align-items:center;padding-left:.15625rem;text-decoration:none}.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__logo>svg{display:flex;align-items:center;width:auto;max-width:100px;max-height:24px}.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__logo+.atomsNavigationBreadcrumbs__list{margin-left:0}.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__element{font:var(--small4-font);white-space:nowrap}.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__element::before{color:rgba(179, 179, 179, 1);font:var(--small4-font);content:"\002F";padding-right:8px;padding-left:8px;font-weight:400}.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__list:only-child .atomsNavigationBreadcrumbs__element:first-child::before{content:none}.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__link{transition-property:color;transition-duration:.2s;transition-timing-function:ease-in-out;color:rgba(26, 26, 26, 1);text-decoration:none}.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__link:hover{color:rgba(var(--primary), 1)}.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__link:focus-visible{border-radius:2px;outline-color:rgba(var(--_black), 1);outline-offset:2px;outline-style:solid;outline-width:2px;margin:.375rem}.atomsNavigationBreadcrumbs--elementFontFamily .atomsNavigationBreadcrumbs__element{font-family:"Roboto",sans-serif}@media(min-width: 48em)and (max-width: 63.9375em){.medium-full .atomsNavigationBreadcrumbs,.medium-wide .atomsNavigationBreadcrumbs{height:47px;margin:0 0 .75rem}.medium-full .atomsNavigationBreadcrumbs--withoutSpacing.atomsNavigationBreadcrumbs,.medium-wide .atomsNavigationBreadcrumbs--withoutSpacing.atomsNavigationBreadcrumbs{height:auto;margin-bottom:.75rem}.medium-full .atomsNavigationBreadcrumbs--withoutSpacing.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__content,.medium-wide .atomsNavigationBreadcrumbs--withoutSpacing.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__content{width:100%;margin-right:0;margin-left:0;padding-top:0;overflow:hidden}.medium-full .atomsNavigationBreadcrumbs--withoutSpacing.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__list,.medium-wide .atomsNavigationBreadcrumbs--withoutSpacing.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__list{padding-right:0;padding-left:0}.medium-full .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__content,.medium-wide .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__content{padding-top:1rem;overflow:hidden}.medium-full .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__logo,.medium-wide .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__logo{padding-left:0}.medium-full .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__logo>svg,.medium-wide .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__logo>svg{max-width:130px}.medium-full .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__list,.medium-wide .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__list{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-left:0}.medium-full .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__element,.medium-wide .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__element{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:var(--small3-font);flex-shrink:1}.medium-full .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__element:last-child,.medium-wide .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__element:last-child{flex-shrink:1000;padding-right:0}}@media(min-width: 64em){.large-full .atomsNavigationBreadcrumbs,.large-wide .atomsNavigationBreadcrumbs{height:47px;margin:0 0 .75rem}.large-full .atomsNavigationBreadcrumbs--withoutSpacing.atomsNavigationBreadcrumbs,.large-wide .atomsNavigationBreadcrumbs--withoutSpacing.atomsNavigationBreadcrumbs{height:auto;margin-bottom:.75rem}.large-full .atomsNavigationBreadcrumbs--withoutSpacing.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__content,.large-wide .atomsNavigationBreadcrumbs--withoutSpacing.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__content{width:100%;margin-right:0;margin-left:0;padding-top:0;overflow:hidden}.large-full .atomsNavigationBreadcrumbs--withoutSpacing.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__list,.large-wide .atomsNavigationBreadcrumbs--withoutSpacing.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__list{padding-right:0;padding-left:0}.large-full .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__content,.large-wide .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__content{padding-top:1rem;overflow:hidden}.large-full .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__logo,.large-wide .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__logo{padding-left:0}.large-full .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__logo>svg,.large-wide .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__logo>svg{max-width:130px}.large-full .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__list,.large-wide .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__list{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-left:0}.large-full .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__element,.large-wide .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__element{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:var(--small3-font);flex-shrink:1}.large-full .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__element:last-child,.large-wide .atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__element:last-child{flex-shrink:1000;padding-right:0}}@media(min-width: 64em){.large-full .atomsNavigationBreadcrumbs--withoutSpacing.atomsNavigationBreadcrumbs,.large-wide .atomsNavigationBreadcrumbs--withoutSpacing.atomsNavigationBreadcrumbs{height:auto;margin-bottom:.375rem}.large-full .atomsNavigationBreadcrumbs--withoutSpacing.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__content,.large-wide .atomsNavigationBreadcrumbs--withoutSpacing.atomsNavigationBreadcrumbs .atomsNavigationBreadcrumbs__content{padding-top:0}}
 .atomsNavigationIconsDropdown{background-color:rgba(var(--_white), 1);border-color:rgba(230, 230, 230, 1);display:flex;position:relative;z-index:102;flex-direction:column;width:auto;margin:0 .75rem 1rem;padding-top:1rem;overflow:hidden;border:2px solid rgba(242, 242, 242, 1);white-space:nowrap}.atomsNavigationIconsDropdown .atomsNavigationIconsDropdown__sectionWrapper{margin-bottom:1.5rem}.atomsNavigationIconsDropdown.atomsNavigationIconsDropdown--peacock .atomsNavigationIconsDropdownUser{border-top-width:2px;border-radius:0}@media(min-width: 48em)and (max-width: 63.9375em){.medium-full .atomsNavigationIconsDropdown,.medium-wide .atomsNavigationIconsDropdown{transition-property:opacity;transition-duration:.2s;transition-timing-function:ease-in-out;pointer-events:none}.medium-full .js-visible.atomsNavigationIconsDropdown,.medium-wide .js-visible.atomsNavigationIconsDropdown{opacity:1;pointer-events:auto}.medium-full .atomsNavigationIconsDropdown--peacock.atomsNavigationIconsDropdown,.medium-wide .atomsNavigationIconsDropdown--peacock.atomsNavigationIconsDropdown{margin-top:-0.5rem;padding:.5rem 0 0;border:0;background:rgba(0,0,0,0);box-shadow:0 0 0 rgba(0,0,0,0)}.medium-full .atomsNavigationIconsDropdown--peacock.atomsNavigationIconsDropdown .atomsNavigationIconsDropdownUser,.medium-wide .atomsNavigationIconsDropdown--peacock.atomsNavigationIconsDropdown .atomsNavigationIconsDropdownUser{background-color:rgba(var(--_white), 1);padding:2rem;border:2px solid rgba(242, 242, 242, 1);box-shadow:0 0 4px 0 rgba(var(--_black), 0.2)}}@media(min-width: 64em){.large-full .atomsNavigationIconsDropdown,.large-wide .atomsNavigationIconsDropdown{transition-property:opacity;transition-duration:.2s;transition-timing-function:ease-in-out;pointer-events:none}.large-full .js-visible.atomsNavigationIconsDropdown,.large-wide .js-visible.atomsNavigationIconsDropdown{opacity:1;pointer-events:auto}.large-full .atomsNavigationIconsDropdown--peacock.atomsNavigationIconsDropdown,.large-wide .atomsNavigationIconsDropdown--peacock.atomsNavigationIconsDropdown{margin-top:-0.5rem;padding:.5rem 0 0;border:0;background:rgba(0,0,0,0);box-shadow:0 0 0 rgba(0,0,0,0)}.large-full .atomsNavigationIconsDropdown--peacock.atomsNavigationIconsDropdown .atomsNavigationIconsDropdownUser,.large-wide .atomsNavigationIconsDropdown--peacock.atomsNavigationIconsDropdown .atomsNavigationIconsDropdownUser{background-color:rgba(var(--_white), 1);padding:2rem;border:2px solid rgba(242, 242, 242, 1);box-shadow:0 0 4px 0 rgba(var(--_black), 0.2)}}@media(min-width: 48em)and (max-width: 63.9375em){.medium-full .atomsNavigationIconsDropdown{border-top-color:rgba(var(--primary), 1);position:absolute;top:100%;right:0;flex-direction:row;width:auto;margin:0;padding:1.5rem;border-right:0;border-bottom:0;border-left:0;border-top-width:4px;border-top-style:solid;opacity:0;box-shadow:0 0 4px 0 rgba(var(--_black), 0.2)}.medium-full .atomsNavigationIconsDropdown:hover{opacity:1;pointer-events:auto}.medium-full .atomsNavigationIconsDropdown .atomsNavigationIconsDropdown__sectionWrapper{margin-right:1.5rem;margin-bottom:0}.medium-full .atomsNavigationIconsDropdown--peacock.atomsNavigationIconsDropdown{border-top-width:0}}@media(min-width: 64em){.large-full .atomsNavigationIconsDropdown{border-top-color:rgba(var(--primary), 1);position:absolute;top:100%;right:0;flex-direction:row;width:auto;margin:0;padding:1.5rem;border-right:0;border-bottom:0;border-left:0;border-top-width:4px;border-top-style:solid;opacity:0;box-shadow:0 0 4px 0 rgba(var(--_black), 0.2)}.large-full .atomsNavigationIconsDropdown:hover{opacity:1;pointer-events:auto}.large-full .atomsNavigationIconsDropdown .atomsNavigationIconsDropdown__sectionWrapper{margin-right:1.5rem;margin-bottom:0}.large-full .atomsNavigationIconsDropdown--peacock.atomsNavigationIconsDropdown{border-top-width:0}}
 .atomsNavigationIconsDropdownUser{display:flex;flex-direction:column}.atomsNavigationIconsDropdownUser .atomsNavigationIconsDropdownUser__column{margin-bottom:1.5rem}.atomsNavigationIconsDropdownUser__section--subscription:not(:first-child){background-color:rgba(242, 242, 242, 1);align-items:center;margin-top:.5rem;padding:1rem}.atomsNavigationIconsDropdownUser__section--subscription:not(:first-child) .atomsNavigationIconsDropdownUser__info{justify-content:center}.atomsNavigationIconsDropdownUser .atomsNavigationIconsDropdownUser__section:not(:last-of-type){padding-bottom:1.25rem}.atomsNavigationIconsDropdownUser__title{display:none}.atomsNavigationIconsDropdownUser__info{font:var(--small2-font);color:rgba(118, 118, 118, 1);display:flex;align-items:center;justify-content:center}.atomsNavigationIconsDropdownUser__info--short{display:flex}.atomsNavigationIconsDropdownUser__info--long{display:none}.atomsNavigationIconsDropdownUser__info>svg{width:20px;height:auto;margin-top:auto;margin-right:.25rem}.atomsNavigationIconsDropdownUser__link,.atomsNavigationIconsDropdownUser .atomsNavigationIconsDropdownUser__link{font:var(--small2-font);transition-property:opacity;transition-duration:.2s;transition-timing-function:ease-in-out;color:rgba(var(--primary), 1);text-decoration:none}.atomsNavigationIconsDropdownUser__link:hover,.atomsNavigationIconsDropdownUser .atomsNavigationIconsDropdownUser__link:hover{opacity:.6}.atomsNavigationIconsDropdownUser__link--withMargin,.atomsNavigationIconsDropdownUser .atomsNavigationIconsDropdownUser__link--withMargin{margin-left:.25rem}.atomsNavigationIconsDropdownUser__btn{display:inline-block;padding:1rem 2rem;border-width:3px;border-style:solid;font-family:"Roboto",sans-serif;font-size:0.875rem;font-weight:700;line-height:1.2;text-decoration:none;background-color:rgba(var(--primary), 1);color:rgba(var(--_white), 1);border-color:rgba(var(--primary), 1);transition-property:border-color,color,background-color;transition-duration:.2s;transition-timing-function:ease-in-out;cursor:pointer;font:var(--small3-font);width:auto;height:min-content;margin:0 auto 1rem;padding:.75rem 1.5rem;text-align:center;pointer-events:auto}.atomsNavigationIconsDropdownUser__btn:hover{color:rgba(var(--primary), 1);background-color:rgba(var(--_white), 1);border-color:rgba(var(--primary-light), 1);cursor:pointer}@media(min-width: 48em)and (max-width: 63.9375em){.medium-full .atomsNavigationIconsDropdownUser{flex-direction:row}.medium-full .atomsNavigationIconsDropdownUser .atomsNavigationIconsDropdownUser__column{margin-right:1.5rem;margin-bottom:0}.medium-full .atomsNavigationIconsDropdownUser .atomsNavigationIconsDropdownUser__btn{font:var(--small2-font);width:100%;margin-bottom:0;padding:.6rem 1.5rem;pointer-events:inherit}.medium-full .atomsNavigationIconsDropdownUser .atomsNavigationIconsDropdownUser__section:not(:last-of-type){padding-bottom:1rem}.medium-full .atomsNavigationIconsDropdownUser .atomsNavigationIconsDropdownUser__title{font:var(--l9-font);color:rgba(26, 26, 26, 1);display:block;margin:0;padding-bottom:.25rem;text-transform:uppercase}.medium-full .atomsNavigationIconsDropdownUser .atomsNavigationIconsDropdownUser__info{justify-content:left;margin:0}.medium-full .atomsNavigationIconsDropdownUser .atomsNavigationIconsDropdownUser__info--short{display:none}.medium-full .atomsNavigationIconsDropdownUser .atomsNavigationIconsDropdownUser__info--long{display:flex}}@media(min-width: 64em){.large-full .atomsNavigationIconsDropdownUser{flex-direction:row}.large-full .atomsNavigationIconsDropdownUser .atomsNavigationIconsDropdownUser__column{margin-right:1.5rem;margin-bottom:0}.large-full .atomsNavigationIconsDropdownUser .atomsNavigationIconsDropdownUser__btn{font:var(--small2-font);width:100%;margin-bottom:0;padding:.6rem 1.5rem;pointer-events:inherit}.large-full .atomsNavigationIconsDropdownUser .atomsNavigationIconsDropdownUser__section:not(:last-of-type){padding-bottom:1rem}.large-full .atomsNavigationIconsDropdownUser .atomsNavigationIconsDropdownUser__title{font:var(--l9-font);color:rgba(26, 26, 26, 1);display:block;margin:0;padding-bottom:.25rem;text-transform:uppercase}.large-full .atomsNavigationIconsDropdownUser .atomsNavigationIconsDropdownUser__info{justify-content:left;margin:0}.large-full .atomsNavigationIconsDropdownUser .atomsNavigationIconsDropdownUser__info--short{display:none}.large-full .atomsNavigationIconsDropdownUser .atomsNavigationIconsDropdownUser__info--long{display:flex}}
 .atomsNavigationIconsIcon{display:inline-block;width:50%;margin-bottom:0;padding:0 .75rem .75rem;text-align:center;text-decoration:none;cursor:pointer}.atomsNavigationIconsIcon:focus-visible{border-radius:2px;outline:2px solid rgba(var(--_black), 1);outline-offset:2px}.atomsNavigationIconsIcon:first-of-type .atomsNavigationIconsIcon__title{background-color:rgba(var(--primary), 1);color:rgba(var(--_white), 1);border:0}.atomsNavigationIconsIcon>svg{display:none}.atomsNavigationIconsIcon--login{display:none}.atomsNavigationIconsIcon--button{border:none;background:none}.atomsNavigationIconsIcon .atomsNavigationIconsIcon__titleWrapper{display:block}.atomsNavigationIconsIcon .atomsNavigationIconsIcon__titleWrapper--displayGrid{display:grid;gap:.25rem;grid-template-columns:min-content 1fr;align-items:center;justify-content:center}.atomsNavigationIconsIcon .atomsNavigationIconsIcon__title{color:rgba(var(--_black), 1);border-color:rgba(230, 230, 230, 1);display:flex;align-items:center;justify-content:center;height:100%;padding:.875rem 0;border-width:1px;border-style:solid;font-size:1rem;font-weight:700}.atomsNavigationIconsIcon .atomsNavigationIconsIcon__badge{color:rgba(var(--_black), 1);background-color:rgba(var(--_yellow1), 1);font:var(--small5-font);display:none;position:absolute;top:10px;left:calc(50% - 1px);padding:1px 2px}.atomsNavigationIconsIcon .atomsNavigationIconsIcon__badge.js-show{display:inline}.atomsNavigationIconsIcon.atomsNavigationIconsIcon--peacock{background-color:rgba(var(--_white), 1);bottom:0;width:47%;margin:0 5px;padding:0;border-radius:20px}.atomsNavigationIconsIcon.atomsNavigationIconsIcon--peacock .atomsNavigationIconsIcon__title{border:0}.atomsNavigationIconsIcon.atomsNavigationIconsIcon--peacock::before{margin:-1px;opacity:0}.atomsNavigationIconsIcon.atomsNavigationIconsIcon--peacock>svg{transition-property:color;transition-duration:.2s;transition-timing-function:ease-in-out;fill:rgba(26, 26, 26, 1)}.atomsNavigationIconsIcon.atomsNavigationIconsIcon--peacock.js-hover{bottom:2px;box-shadow:0 4px 6px rgba(var(--_black), 0.2)}.atomsNavigationIconsIcon.atomsNavigationIconsIcon--peacock.js-hover>svg{fill:rgba(var(--_white), 1)}.atomsNavigationIconsIcon.atomsNavigationIconsIcon--peacock:hover{bottom:2px;box-shadow:0 4px 6px rgba(var(--_black), 0.2)}.atomsNavigationIconsIcon.atomsNavigationIconsIcon--peacock:active{bottom:-2px;box-shadow:0 0 2px rgba(var(--_black), 0.2)}.atomsNavigationIconsIcon--inToolbar{position:relative;width:100%;min-width:0;padding:.5rem 0}.atomsNavigationIconsIcon--inToolbar.js-inactive{opacity:.6}.atomsNavigationIconsIcon--inToolbar>svg{fill:rgba(var(--_white), 1);display:initial;width:2rem;height:2rem}.atomsNavigationIconsIcon--inToolbar .atomsNavigationIconsIcon__titleWrapper{padding-block:.125rem}.atomsNavigationIconsIcon--inToolbar:first-of-type .atomsNavigationIconsIcon__title{color:rgba(var(--_white), 1);background-color:initial}.atomsNavigationIconsIcon--inToolbar .atomsNavigationIconsIcon__title{font:var(--small5-font);color:rgba(var(--_white), 1);display:block;max-width:100%;height:initial;padding:0;overflow:hidden;border:0;font-size:10px;text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap}.atomsNavigationIconsIcon--toolbarMiddleIcon{display:grid;grid-template-areas:"one-of-another";place-items:center;place-content:space-between center;padding-top:0}.atomsNavigationIconsIcon--toolbarMiddleIcon::before{content:"";grid-area:one-of-another;width:2.375rem;height:2.375rem;border:2px solid rgba(var(--_white), 1);border-radius:50%;background:radial-gradient(50% 50% at 50% 50%, #fff 0%, #fff 47.92%, rgba(249, 249, 249, 0.916766) 89.58%, #fff 92.71%, rgba(239, 239, 239, 0.7) 100%)}.atomsNavigationIconsIcon--toolbarMiddleIcon>svg{fill:rgba(var(--primary), 1);grid-area:one-of-another;width:1.625rem;height:1.625rem}.atomsNavigationIconsIcon--titleBackground .atomsNavigationIconsIcon__titleWrapper{background-color:rgba(var(--_white), 1);width:fit-content;max-width:100%;margin-inline:auto;padding-inline:.25rem;border-radius:.125rem}.atomsNavigationIconsIcon--titleBackground:first-of-type .atomsNavigationIconsIcon__title,.atomsNavigationIconsIcon--titleBackground .atomsNavigationIconsIcon__title{color:rgba(var(--_black), 1) !important}.atomsNavigationIconsIcon--titleBolder .atomsNavigationIconsIcon__title{font-weight:bolder !important}@media(min-width: 48em)and (max-width: 63.9375em){.medium-full .atomsNavigationIconsIcon,.medium-wide .atomsNavigationIconsIcon{position:relative}.medium-full .js-hover.atomsNavigationIconsIcon>svg,.medium-wide .js-hover.atomsNavigationIconsIcon>svg{fill:rgba(var(--primary), 1)}.medium-full .atomsNavigationIconsIcon .atomsNavigationIconsIcon__activeIcon,.medium-wide .atomsNavigationIconsIcon .atomsNavigationIconsIcon__activeIcon{position:absolute;top:4px;right:10px}.medium-full .atomsNavigationIconsIcon--peacock.atomsNavigationIconsIcon,.medium-wide .atomsNavigationIconsIcon--peacock.atomsNavigationIconsIcon{transition-property:bottom,box-shadow,background-color;transition-duration:.2s;transition-timing-function:ease-in-out;background-image:linear-gradient(rgba(var(--_white), 1), rgba(var(--_white), 1)),0;background-origin:border-box}.medium-full .atomsNavigationIconsIcon--peacock.js-hover.atomsNavigationIconsIcon>svg,.medium-wide .atomsNavigationIconsIcon--peacock.js-hover.atomsNavigationIconsIcon>svg{fill:rgba(26, 26, 26, 1)}.medium-full .atomsNavigationIconsIcon--peacock.atomsNavigationIconsIcon .atomsNavigationIconsIcon__activeIcon,.medium-wide .atomsNavigationIconsIcon--peacock.atomsNavigationIconsIcon .atomsNavigationIconsIcon__activeIcon{top:2px;right:-5px}}@media(min-width: 64em){.large-full .atomsNavigationIconsIcon,.large-wide .atomsNavigationIconsIcon{position:relative}.large-full .js-hover.atomsNavigationIconsIcon>svg,.large-wide .js-hover.atomsNavigationIconsIcon>svg{fill:rgba(var(--primary), 1)}.large-full .atomsNavigationIconsIcon .atomsNavigationIconsIcon__activeIcon,.large-wide .atomsNavigationIconsIcon .atomsNavigationIconsIcon__activeIcon{position:absolute;top:4px;right:10px}.large-full .atomsNavigationIconsIcon--peacock.atomsNavigationIconsIcon,.large-wide .atomsNavigationIconsIcon--peacock.atomsNavigationIconsIcon{transition-property:bottom,box-shadow,background-color;transition-duration:.2s;transition-timing-function:ease-in-out;background-image:linear-gradient(rgba(var(--_white), 1), rgba(var(--_white), 1)),0;background-origin:border-box}.large-full .atomsNavigationIconsIcon--peacock.js-hover.atomsNavigationIconsIcon>svg,.large-wide .atomsNavigationIconsIcon--peacock.js-hover.atomsNavigationIconsIcon>svg{fill:rgba(26, 26, 26, 1)}.large-full .atomsNavigationIconsIcon--peacock.atomsNavigationIconsIcon .atomsNavigationIconsIcon__activeIcon,.large-wide .atomsNavigationIconsIcon--peacock.atomsNavigationIconsIcon .atomsNavigationIconsIcon__activeIcon{top:2px;right:-5px}}@media(min-width: 48em)and (max-width: 63.9375em){.medium-full .atomsNavigationIconsIcon{transition-property:background-color;transition-duration:.2s;transition-timing-function:ease-in-out;display:flex;align-items:center;justify-content:center;width:auto;min-width:40px;height:40px;padding:0 10px}.medium-full .atomsNavigationIconsIcon:first-of-type .atomsNavigationIconsIcon__title{color:rgba(var(--_black), 1);background-color:rgba(242, 242, 242, 1)}.medium-full .atomsNavigationIconsIcon>svg{fill:rgba(var(--_black), 1);transition-property:fill;transition-duration:.2s;transition-timing-function:ease-in-out;display:block;height:24px;text-align:center}.medium-full .atomsNavigationIconsIcon:hover+.atomsNavigationIconsDropdown{opacity:1;pointer-events:auto}.medium-full .atomsNavigationIconsIcon .atomsNavigationIconsIcon__title{background-color:rgba(242, 242, 242, 1);display:none;height:auto;margin-top:0;padding:0;border:0;font-weight:400}.medium-full .atomsNavigationIconsIcon--peacock.atomsNavigationIconsIcon{padding:0}}@media(min-width: 64em){.large-full .atomsNavigationIconsIcon{transition-property:background-color;transition-duration:.2s;transition-timing-function:ease-in-out;display:flex;align-items:center;justify-content:center;width:auto;min-width:40px;height:40px;padding:0 10px}.large-full .atomsNavigationIconsIcon:first-of-type .atomsNavigationIconsIcon__title{color:rgba(var(--_black), 1);background-color:rgba(242, 242, 242, 1)}.large-full .atomsNavigationIconsIcon>svg{fill:rgba(var(--_black), 1);transition-property:fill;transition-duration:.2s;transition-timing-function:ease-in-out;display:block;height:24px;text-align:center}.large-full .atomsNavigationIconsIcon:hover+.atomsNavigationIconsDropdown{opacity:1;pointer-events:auto}.large-full .atomsNavigationIconsIcon .atomsNavigationIconsIcon__title{background-color:rgba(242, 242, 242, 1);display:none;height:auto;margin-top:0;padding:0;border:0;font-weight:400}.large-full .atomsNavigationIconsIcon--peacock.atomsNavigationIconsIcon{padding:0}}
 .atomsNavigationIconsList{background-color:rgba(var(--_white), 1);display:flex;z-index:1;flex-wrap:wrap;height:fit-content;margin-bottom:0;padding:0;list-style-type:none;font-family:"Roboto",sans-serif}@media(min-width: 48em)and (max-width: 63.9375em){.medium-full .atomsNavigationIconsList{position:relative;flex-direction:row-reverse;flex-wrap:nowrap;align-items:center;justify-content:space-between;height:100%}}@media(min-width: 64em){.large-full .atomsNavigationIconsList{position:relative;flex-direction:row-reverse;flex-wrap:nowrap;align-items:center;justify-content:space-between;height:100%}}
 .atomsNavigationResponsiveLinks{font:var(--l9-font);display:inline-flex;width:100%;margin:0}.atomsNavigationResponsiveLinks__visibleList{display:inline-block;height:100%;margin:0;padding:0;list-style:none}.atomsNavigationResponsiveLinks__item{display:inline-block;white-space:nowrap}.atomsNavigationResponsiveLinks__link,.atomsNavigationResponsiveLinks__moreButton{letter-spacing:-0.04px}.atomsNavigationResponsiveLinks__link{color:rgba(var(--_black), 1);display:inline-block;padding:.75rem .5rem;text-decoration:none}.atomsNavigationResponsiveLinks__link:hover+.atomsNavigationResponsiveLinks__childrenList{z-index:2;opacity:1;pointer-events:auto}.atomsNavigationResponsiveLinks__moreButton{background-color:rgba(var(--_white), 1);transition-property:background-color;transition-duration:.2s;transition-timing-function:ease-in-out;display:inline-flex;visibility:visible;align-items:center;height:100%;border:0;outline:none;line-height:1;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0)}.atomsNavigationResponsiveLinks__moreButton.js-hoverBg{background-color:rgba(var(--_white), 1)}.atomsNavigationResponsiveLinks__moreButton.js-hoverBg .atomsNavigationResponsiveLinks__buttonIcon{transform:scale(1, -1)}.atomsNavigationResponsiveLinks__moreButton.js-desktop:hover{background-color:rgba(var(--_white), 1)}.atomsNavigationResponsiveLinks__moreButton.js-desktop:hover+.atomsNavigationResponsiveLinks__hiddenList{z-index:3;opacity:1;pointer-events:auto}.atomsNavigationResponsiveLinks__moreButton.js-desktop:hover .atomsNavigationResponsiveLinks__buttonIcon{transform:scale(1, -1)}.atomsNavigationResponsiveLinks__moreButton.js-mobile{background-color:rgba(var(--_white), 1)}.atomsNavigationResponsiveLinks__moreButton.js-mobile .atomsNavigationResponsiveLinks__buttonIcon{transform:scale(1, -1)}.atomsNavigationResponsiveLinks__moreButton.js-mobile+.atomsNavigationResponsiveLinks__hiddenList{z-index:3;opacity:1;pointer-events:auto}.atomsNavigationResponsiveLinks__moreButton.js-hidden{visibility:hidden;width:0;padding:0}.atomsNavigationResponsiveLinks__moreButton.js-tempHidden{visibility:hidden}.atomsNavigationResponsiveLinks__buttonText{display:none}.atomsNavigationResponsiveLinks__buttonIcon{transition-property:transform;transition-duration:.2s;transition-timing-function:ease-in-out;width:1.75em;height:1.15em;transform:scale(1, 1)}.atomsNavigationResponsiveLinks__hiddenList{background-color:rgba(var(--_white), 1);transition-property:opacity;transition-duration:.2s;transition-timing-function:ease-in-out;border-top-color:rgba(var(--primary), 1);position:absolute;z-index:-1;top:100%;right:0;max-height:70vh;margin:-0.25rem 0 0;padding:.5rem 0;overflow-y:auto;border-top-width:4px;border-top-style:solid;opacity:0;box-shadow:0 0 4px 0 rgba(var(--_black), 0.2);list-style:none;text-align:left;pointer-events:none}.atomsNavigationResponsiveLinks__hiddenList:hover{z-index:3;opacity:1;pointer-events:auto}.atomsNavigationResponsiveLinks__hiddenList::-webkit-scrollbar{width:8px}.atomsNavigationResponsiveLinks__hiddenList::-webkit-scrollbar-track{background-color:rgba(242, 242, 242, 1);box-shadow:inset 0 0 1px rgba(230, 230, 230, 1)}.atomsNavigationResponsiveLinks__hiddenList::-webkit-scrollbar-thumb{background-color:rgba(230, 230, 230, 1);border-radius:6px}.atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__item{display:block}.atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__link{padding-right:2rem;padding-left:1rem}.atomsNavigationResponsiveLinks.js-hidden{z-index:-1;opacity:0;pointer-events:none}.atomsNavigationResponsiveLinks.atomsNavigationResponsiveLinks--peacock .atomsNavigationResponsiveLinks__link{color:rgba(26, 26, 26, 1);transition-property:background-color;transition-duration:.2s;transition-timing-function:ease-in-out}.atomsNavigationResponsiveLinks.atomsNavigationResponsiveLinks--peacock .atomsNavigationResponsiveLinks__childrenList{border-top-color:rgba(var(--_white), 1)}.atomsNavigationResponsiveLinks.atomsNavigationResponsiveLinks--peacock .atomsNavigationResponsiveLinks__moreButton{background-color:rgba(var(--_white), 1);color:rgba(26, 26, 26, 1)}.atomsNavigationResponsiveLinks.atomsNavigationResponsiveLinks--peacock .atomsNavigationResponsiveLinks__hiddenList{border-top-color:rgba(var(--_white), 1);border-radius:0}.atomsNavigationResponsiveLinks.atomsNavigationResponsiveLinks--peacock .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__link{color:rgba(var(--_black), 1)}.atomsNavigationResponsiveLinks.atomsNavigationResponsiveLinks--peacock .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__link:hover{color:rgba(var(--primary), 1);border-top-width:0}@media(min-width: 48em)and (max-width: 63.9375em){.medium-full .atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__visibleList,.medium-wide .atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__visibleList{padding-left:1rem}.medium-full .atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__moreButton,.medium-wide .atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__moreButton{padding-top:.75rem;padding-bottom:.75rem}.medium-full .atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__moreButton>*,.medium-wide .atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__moreButton>*{display:inline-block}.medium-full .atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList,.medium-wide .atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList{padding:.75rem 0}.medium-full .atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__link,.medium-wide .atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__link{padding:.75rem 4rem .75rem 1.5rem}.medium-full .atomsNavigationResponsiveLinks--peacock.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__item,.medium-wide .atomsNavigationResponsiveLinks--peacock.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__item{width:auto}.medium-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks,.medium-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks{display:block;justify-content:flex-end}.medium-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__item,.medium-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__item{position:relative}.medium-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__link,.medium-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__link{transition-property:color;transition-duration:.2s;transition-timing-function:ease-in-out;padding:.75rem}.medium-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__link:hover,.medium-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__link:hover{color:rgba(var(--primary), 1)}.medium-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__link:hover+.atomsNavigationResponsiveLinks__childrenList,.medium-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__link:hover+.atomsNavigationResponsiveLinks__childrenList{z-index:101;opacity:1;pointer-events:auto}.medium-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__childrenList,.medium-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__childrenList{background-color:rgba(var(--_white), 1);border-top-color:rgba(var(--primary), 1);transition-property:opacity;transition-duration:.2s;transition-timing-function:ease-in-out;display:flex;position:absolute;z-index:-1;left:.75rem;flex-wrap:wrap;min-width:372px;max-width:472px;margin:0;padding:0 .75rem 1.5rem;border-top-width:4px;border-top-style:solid;opacity:0;box-shadow:0 0 4px 0 rgba(var(--_black), 0.2);list-style:none;text-align:left;pointer-events:none}.medium-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__childrenList:hover,.medium-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__childrenList:hover{z-index:101;opacity:1;pointer-events:auto}.medium-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__childrenItem,.medium-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__childrenItem{width:50%;padding:0}.medium-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__childrenLink,.medium-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__childrenLink{color:rgba(var(--_black), 1);transition-property:color;transition-duration:.2s;transition-timing-function:ease-in-out;font:var(--small3-font);display:inline-block;padding:1.5rem .75rem 0;text-decoration:none;word-break:break-word;white-space:normal}.medium-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__childrenLink:hover,.medium-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__childrenLink:hover{color:rgba(var(--primary), 1)}.medium-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__moreButton,.medium-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__moreButton{padding-right:.75rem;padding-left:.75rem;font-weight:700;text-transform:capitalize}.medium-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__moreButton.js-hoverBg,.medium-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__moreButton.js-hoverBg{pointer-events:auto}.medium-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__moreButton.js-hoverBg+.atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenList,.medium-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__moreButton.js-hoverBg+.atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenList{pointer-events:auto}.medium-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList,.medium-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList{z-index:101;min-width:372px;max-width:472px;padding:1.5rem}.medium-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__item:first-child .atomsNavigationResponsiveLinks__link,.medium-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__item:first-child .atomsNavigationResponsiveLinks__link{padding-top:0}.medium-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__item:hover .atomsNavigationResponsiveLinks__childrenList,.medium-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__item:hover .atomsNavigationResponsiveLinks__childrenList{pointer-events:auto}.medium-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__link,.medium-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__link{padding:1.5rem 0 0;white-space:nowrap}.medium-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenList,.medium-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenList{background-color:rgba(var(--_white), 1);border-top-color:rgba(var(--primary), 1);position:static;width:100%;padding:0 1rem;border-top:0;opacity:1;box-shadow:none}.medium-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenItem,.medium-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenItem{width:50%;padding:0}.medium-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenItem:nth-child(even) .atomsNavigationResponsiveLinks__childrenLink,.medium-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenItem:nth-child(even) .atomsNavigationResponsiveLinks__childrenLink{padding-left:.75rem}.medium-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenItem:nth-child(odd) .atomsNavigationResponsiveLinks__childrenLink,.medium-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenItem:nth-child(odd) .atomsNavigationResponsiveLinks__childrenLink{padding-right:.75rem}.medium-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenLink,.medium-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenLink{padding:1.5rem 0 0;text-decoration:none;white-space:normal}}@media(min-width: 64em){.large-full .atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__visibleList,.large-wide .atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__visibleList{padding-left:1rem}.large-full .atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__moreButton,.large-wide .atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__moreButton{padding-top:.75rem;padding-bottom:.75rem}.large-full .atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__moreButton>*,.large-wide .atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__moreButton>*{display:inline-block}.large-full .atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList,.large-wide .atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList{padding:.75rem 0}.large-full .atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__link,.large-wide .atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__link{padding:.75rem 4rem .75rem 1.5rem}.large-full .atomsNavigationResponsiveLinks--peacock.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__item,.large-wide .atomsNavigationResponsiveLinks--peacock.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__item{width:auto}.large-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks,.large-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks{display:block;justify-content:flex-end}.large-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__item,.large-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__item{position:relative}.large-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__link,.large-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__link{transition-property:color;transition-duration:.2s;transition-timing-function:ease-in-out;padding:.75rem}.large-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__link:hover,.large-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__link:hover{color:rgba(var(--primary), 1)}.large-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__link:hover+.atomsNavigationResponsiveLinks__childrenList,.large-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__link:hover+.atomsNavigationResponsiveLinks__childrenList{z-index:101;opacity:1;pointer-events:auto}.large-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__childrenList,.large-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__childrenList{background-color:rgba(var(--_white), 1);border-top-color:rgba(var(--primary), 1);transition-property:opacity;transition-duration:.2s;transition-timing-function:ease-in-out;display:flex;position:absolute;z-index:-1;left:.75rem;flex-wrap:wrap;min-width:372px;max-width:472px;margin:0;padding:0 .75rem 1.5rem;border-top-width:4px;border-top-style:solid;opacity:0;box-shadow:0 0 4px 0 rgba(var(--_black), 0.2);list-style:none;text-align:left;pointer-events:none}.large-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__childrenList:hover,.large-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__childrenList:hover{z-index:101;opacity:1;pointer-events:auto}.large-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__childrenItem,.large-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__childrenItem{width:50%;padding:0}.large-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__childrenLink,.large-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__childrenLink{color:rgba(var(--_black), 1);transition-property:color;transition-duration:.2s;transition-timing-function:ease-in-out;font:var(--small3-font);display:inline-block;padding:1.5rem .75rem 0;text-decoration:none;word-break:break-word;white-space:normal}.large-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__childrenLink:hover,.large-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__childrenLink:hover{color:rgba(var(--primary), 1)}.large-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__moreButton,.large-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__moreButton{padding-right:.75rem;padding-left:.75rem;font-weight:700;text-transform:capitalize}.large-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__moreButton.js-hoverBg,.large-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__moreButton.js-hoverBg{pointer-events:auto}.large-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__moreButton.js-hoverBg+.atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenList,.large-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__moreButton.js-hoverBg+.atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenList{pointer-events:auto}.large-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList,.large-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList{z-index:101;min-width:372px;max-width:472px;padding:1.5rem}.large-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__item:first-child .atomsNavigationResponsiveLinks__link,.large-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__item:first-child .atomsNavigationResponsiveLinks__link{padding-top:0}.large-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__item:hover .atomsNavigationResponsiveLinks__childrenList,.large-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__item:hover .atomsNavigationResponsiveLinks__childrenList{pointer-events:auto}.large-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__link,.large-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__link{padding:1.5rem 0 0;white-space:nowrap}.large-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenList,.large-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenList{background-color:rgba(var(--_white), 1);border-top-color:rgba(var(--primary), 1);position:static;width:100%;padding:0 1rem;border-top:0;opacity:1;box-shadow:none}.large-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenItem,.large-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenItem{width:50%;padding:0}.large-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenItem:nth-child(even) .atomsNavigationResponsiveLinks__childrenLink,.large-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenItem:nth-child(even) .atomsNavigationResponsiveLinks__childrenLink{padding-left:.75rem}.large-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenItem:nth-child(odd) .atomsNavigationResponsiveLinks__childrenLink,.large-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenItem:nth-child(odd) .atomsNavigationResponsiveLinks__childrenLink{padding-right:.75rem}.large-full .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenLink,.large-wide .atomsNavigationResponsiveLinks--navbarMenu.atomsNavigationResponsiveLinks .atomsNavigationResponsiveLinks__hiddenList .atomsNavigationResponsiveLinks__childrenLink{padding:1.5rem 0 0;text-decoration:none;white-space:normal}}
 .atomsNavigationSelect{margin:0}.atomsNavigationSelect__button{background:rgba(0,0,0,0);position:relative;width:32px;height:32px;margin-left:.5rem;padding:0;border:0;outline:none;line-height:1;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0)}.atomsNavigationSelect__button::after{transition-property:top,transform;transition-duration:.2s;transition-timing-function:ease-in-out;content:"";position:absolute;top:10px;left:11px;width:8px;height:8px;transform:rotate(45deg);border-right:2px solid rgba(var(--primary), 1);border-bottom:2px solid rgba(var(--primary), 1)}.atomsNavigationSelect__button::before{content:"";position:absolute;top:5px;left:4px;width:22px;height:22px;border-radius:50%}.atomsNavigationSelect__button:active::before{background:rgba(242, 242, 242, 1)}.atomsNavigationSelect.open .atomsNavigationSelect__button::after{top:14px;transform:rotate(-135deg)}.atomsNavigationSelect__container{transition-property:height,min-height,padding;transition-duration:.2s;transition-timing-function:ease-in-out;background-color:rgba(var(--_white), 1);display:flex;position:fixed;z-index:105;bottom:0;left:0;flex-direction:column;width:100%;height:0;min-height:0;padding:0;overflow:hidden;box-shadow:0}.atomsNavigationSelect.open .atomsNavigationSelect__container{height:100%;padding:1rem 1rem 0}.atomsNavigationSelect.inactive .atomsNavigationSelect__container::after{background:rgba(var(--_white), 0.5);content:"";position:absolute;top:0;right:0;bottom:0;left:0}.atomsNavigationSelect__title{color:rgba(26, 26, 26, 1);font:var(--header2-font);width:80%;margin:0}.atomsNavigationSelect__buttonClose{position:absolute;top:1rem;right:1rem;cursor:pointer}.atomsNavigationSelect__buttonClose::after{content:"";display:inline-block;width:20px;height:20px;background-image:url("data:image/svg+xml;charset=utf8,%3Csvg%20fill%3D%22rgba(0, 0, 0, 1)%22%20version%3D%221.1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20640%20640%22%20height%3D%2220%22%3E%3Cpath%20d%3D%22M320%20274.752l-226.272-226.272-45.248%2045.248%20226.272%20226.272-226.272%20226.272%2045.248%2045.248%20226.272-226.272%20226.272%20226.272%2045.248-45.248-226.272-226.272%20226.272-226.272-45.248-45.248-226.272%20226.272z%22%3E%3C/path%3E%3C/svg%3E");background-repeat:no-repeat}.atomsNavigationSelect__inputSearch{width:100%;margin:1rem 0;padding:.5rem .75rem;border:1px solid rgba(204, 204, 204, 1);border-radius:0}.atomsNavigationSelect__inputSearch::-webkit-input-placeholder{color:rgba(204, 204, 204, 1);font:var(--small1-font);letter-spacing:-0.28px}.atomsNavigationSelect__inputSearch::-moz-placeholder{color:rgba(204, 204, 204, 1);font:var(--small1-font);letter-spacing:-0.28px}.atomsNavigationSelect__inputSearch:-ms-input-placeholder{color:rgba(204, 204, 204, 1);font:var(--small1-font);letter-spacing:-0.28px}.atomsNavigationSelect__inputSearch:focus{border:1px solid rgba(0,0,0,0);outline:none;box-shadow:0 0 0 2px rgba(var(--primary), 1)}.atomsNavigationSelect__notification{color:rgba(118, 118, 118, 1);background:rgba(var(--_white), 1);font:var(--small3-font);display:none;margin:0;padding:1.5rem 0}.atomsNavigationSelect__description{font:var(--small3-font);transition-property:height;transition-duration:.2s;transition-timing-function:ease-in-out;display:flex;height:33px;margin:0 -1rem;padding:0 1rem;border-bottom:1px solid rgba(230, 230, 230, 1);letter-spacing:.12px}.atomsNavigationSelect__description.unActiveDescription{height:0}.atomsNavigationSelect__descriptionLink{color:rgba(var(--primary), 1)}.atomsNavigationSelect__list{margin:0 -1rem;padding:0;overflow-y:scroll;list-style:none;-ms-overflow-style:none}.atomsNavigationSelect__list::-webkit-scrollbar{display:none}.atomsNavigationSelect__list.js-loading{display:flex;align-items:center;justify-content:center}.atomsNavigationSelect__list.js-loading::after{content:"";position:absolute;z-index:1;width:14px;height:14px;-webkit-animation:primary-spinner 1.1s infinite ease;-moz-animation:primary-spinner 1.1s infinite ease;animation:primary-spinner 1.1s infinite ease;border-radius:50%;font-size:14px}@-webkit-keyframes primary-spinner{0%,100%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.01),1.8em -1.8em 0 0 rgba(var(--primary), 0.01),2.5em 0 0 0 rgba(var(--primary), 0.01),1.75em 1.75em 0 0 rgba(var(--primary), 0.01),0 2.5em 0 0 rgba(var(--primary), 0.01),-1.8em 1.8em 0 0 rgba(var(--primary), 0.2),-2.6em 0 0 0 rgba(var(--primary), 0.5),-1.8em -1.8em 0 0 rgba(var(--primary), 1)}12.5%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 1),1.8em -1.8em 0 0 rgba(var(--primary), 0.01),2.5em 0 0 0 rgba(var(--primary), 0.01),1.75em 1.75em 0 0 rgba(var(--primary), 0.01),0 2.5em 0 0 rgba(var(--primary), 0.01),-1.8em 1.8em 0 0 rgba(var(--primary), 0.01),-2.6em 0 0 0 rgba(var(--primary), 0.2),-1.8em -1.8em 0 0 rgba(var(--primary), 0.5)}25%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.5),1.8em -1.8em 0 0 rgba(var(--primary), 1),2.5em 0 0 0 rgba(var(--primary), 0.01),1.75em 1.75em 0 0 rgba(var(--primary), 0.01),0 2.5em 0 0 rgba(var(--primary), 0.01),-1.8em 1.8em 0 0 rgba(var(--primary), 0.01),-2.6em 0 0 0 rgba(var(--primary), 0.01),-1.8em -1.8em 0 0 rgba(var(--primary), 0.2)}37.5%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.2),1.8em -1.8em 0 0 rgba(var(--primary), 0.5),2.5em 0 0 0 rgba(var(--primary), 1),1.75em 1.75em 0 0 rgba(var(--primary), 0.01),0 2.5em 0 0 rgba(var(--primary), 0.01),-1.8em 1.8em 0 0 rgba(var(--primary), 0.01),-2.6em 0 0 0 rgba(var(--primary), 0.01),-1.8em -1.8em 0 0 rgba(var(--primary), 0.01)}50%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.01),1.8em -1.8em 0 0 rgba(var(--primary), 0.2),2.5em 0 0 0 rgba(var(--primary), 0.5),1.75em 1.75em 0 0 rgba(var(--primary), 1),0 2.5em 0 0 rgba(var(--primary), 0.01),-1.8em 1.8em 0 0 rgba(var(--primary), 0.01),-2.6em 0 0 0 rgba(var(--primary), 0.01),-1.8em -1.8em 0 0 rgba(var(--primary), 0.01)}62.5%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.01),1.8em -1.8em 0 0 rgba(var(--primary), 0.01),2.5em 0 0 0 rgba(var(--primary), 0.2),1.75em 1.75em 0 0 rgba(var(--primary), 0.5),0 2.5em 0 0 rgba(var(--primary), 1),-1.8em 1.8em 0 0 rgba(var(--primary), 0.01),-2.6em 0 0 0 rgba(var(--primary), 0.01),-1.8em -1.8em 0 0 rgba(var(--primary), 0.01)}75%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.01),1.8em -1.8em 0 0 rgba(var(--primary), 0.01),2.5em 0 0 0 rgba(var(--primary), 0.01),1.75em 1.75em 0 0 rgba(var(--primary), 0.2),0 2.5em 0 0 rgba(var(--primary), 0.5),-1.8em 1.8em 0 0 rgba(var(--primary), 1),-2.6em 0 0 0 rgba(var(--primary), 0.01),-1.8em -1.8em 0 0 rgba(var(--primary), 0.01)}87.5%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.01),1.8em -1.8em 0 0 rgba(var(--primary), 0.01),2.5em 0 0 0 rgba(var(--primary), 0.01),1.75em 1.75em 0 0 rgba(var(--primary), 0.01),0 2.5em 0 0 rgba(var(--primary), 0.2),-1.8em 1.8em 0 0 rgba(var(--primary), 0.5),-2.6em 0 0 0 rgba(var(--primary), 1),-1.8em -1.8em 0 0 rgba(var(--primary), 0.01)}}@-moz-keyframes primary-spinner{0%,100%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.01),1.8em -1.8em 0 0 rgba(var(--primary), 0.01),2.5em 0 0 0 rgba(var(--primary), 0.01),1.75em 1.75em 0 0 rgba(var(--primary), 0.01),0 2.5em 0 0 rgba(var(--primary), 0.01),-1.8em 1.8em 0 0 rgba(var(--primary), 0.2),-2.6em 0 0 0 rgba(var(--primary), 0.5),-1.8em -1.8em 0 0 rgba(var(--primary), 1)}12.5%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 1),1.8em -1.8em 0 0 rgba(var(--primary), 0.01),2.5em 0 0 0 rgba(var(--primary), 0.01),1.75em 1.75em 0 0 rgba(var(--primary), 0.01),0 2.5em 0 0 rgba(var(--primary), 0.01),-1.8em 1.8em 0 0 rgba(var(--primary), 0.01),-2.6em 0 0 0 rgba(var(--primary), 0.2),-1.8em -1.8em 0 0 rgba(var(--primary), 0.5)}25%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.5),1.8em -1.8em 0 0 rgba(var(--primary), 1),2.5em 0 0 0 rgba(var(--primary), 0.01),1.75em 1.75em 0 0 rgba(var(--primary), 0.01),0 2.5em 0 0 rgba(var(--primary), 0.01),-1.8em 1.8em 0 0 rgba(var(--primary), 0.01),-2.6em 0 0 0 rgba(var(--primary), 0.01),-1.8em -1.8em 0 0 rgba(var(--primary), 0.2)}37.5%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.2),1.8em -1.8em 0 0 rgba(var(--primary), 0.5),2.5em 0 0 0 rgba(var(--primary), 1),1.75em 1.75em 0 0 rgba(var(--primary), 0.01),0 2.5em 0 0 rgba(var(--primary), 0.01),-1.8em 1.8em 0 0 rgba(var(--primary), 0.01),-2.6em 0 0 0 rgba(var(--primary), 0.01),-1.8em -1.8em 0 0 rgba(var(--primary), 0.01)}50%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.01),1.8em -1.8em 0 0 rgba(var(--primary), 0.2),2.5em 0 0 0 rgba(var(--primary), 0.5),1.75em 1.75em 0 0 rgba(var(--primary), 1),0 2.5em 0 0 rgba(var(--primary), 0.01),-1.8em 1.8em 0 0 rgba(var(--primary), 0.01),-2.6em 0 0 0 rgba(var(--primary), 0.01),-1.8em -1.8em 0 0 rgba(var(--primary), 0.01)}62.5%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.01),1.8em -1.8em 0 0 rgba(var(--primary), 0.01),2.5em 0 0 0 rgba(var(--primary), 0.2),1.75em 1.75em 0 0 rgba(var(--primary), 0.5),0 2.5em 0 0 rgba(var(--primary), 1),-1.8em 1.8em 0 0 rgba(var(--primary), 0.01),-2.6em 0 0 0 rgba(var(--primary), 0.01),-1.8em -1.8em 0 0 rgba(var(--primary), 0.01)}75%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.01),1.8em -1.8em 0 0 rgba(var(--primary), 0.01),2.5em 0 0 0 rgba(var(--primary), 0.01),1.75em 1.75em 0 0 rgba(var(--primary), 0.2),0 2.5em 0 0 rgba(var(--primary), 0.5),-1.8em 1.8em 0 0 rgba(var(--primary), 1),-2.6em 0 0 0 rgba(var(--primary), 0.01),-1.8em -1.8em 0 0 rgba(var(--primary), 0.01)}87.5%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.01),1.8em -1.8em 0 0 rgba(var(--primary), 0.01),2.5em 0 0 0 rgba(var(--primary), 0.01),1.75em 1.75em 0 0 rgba(var(--primary), 0.01),0 2.5em 0 0 rgba(var(--primary), 0.2),-1.8em 1.8em 0 0 rgba(var(--primary), 0.5),-2.6em 0 0 0 rgba(var(--primary), 1),-1.8em -1.8em 0 0 rgba(var(--primary), 0.01)}}@-o-keyframes primary-spinner{0%,100%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.01),1.8em -1.8em 0 0 rgba(var(--primary), 0.01),2.5em 0 0 0 rgba(var(--primary), 0.01),1.75em 1.75em 0 0 rgba(var(--primary), 0.01),0 2.5em 0 0 rgba(var(--primary), 0.01),-1.8em 1.8em 0 0 rgba(var(--primary), 0.2),-2.6em 0 0 0 rgba(var(--primary), 0.5),-1.8em -1.8em 0 0 rgba(var(--primary), 1)}12.5%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 1),1.8em -1.8em 0 0 rgba(var(--primary), 0.01),2.5em 0 0 0 rgba(var(--primary), 0.01),1.75em 1.75em 0 0 rgba(var(--primary), 0.01),0 2.5em 0 0 rgba(var(--primary), 0.01),-1.8em 1.8em 0 0 rgba(var(--primary), 0.01),-2.6em 0 0 0 rgba(var(--primary), 0.2),-1.8em -1.8em 0 0 rgba(var(--primary), 0.5)}25%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.5),1.8em -1.8em 0 0 rgba(var(--primary), 1),2.5em 0 0 0 rgba(var(--primary), 0.01),1.75em 1.75em 0 0 rgba(var(--primary), 0.01),0 2.5em 0 0 rgba(var(--primary), 0.01),-1.8em 1.8em 0 0 rgba(var(--primary), 0.01),-2.6em 0 0 0 rgba(var(--primary), 0.01),-1.8em -1.8em 0 0 rgba(var(--primary), 0.2)}37.5%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.2),1.8em -1.8em 0 0 rgba(var(--primary), 0.5),2.5em 0 0 0 rgba(var(--primary), 1),1.75em 1.75em 0 0 rgba(var(--primary), 0.01),0 2.5em 0 0 rgba(var(--primary), 0.01),-1.8em 1.8em 0 0 rgba(var(--primary), 0.01),-2.6em 0 0 0 rgba(var(--primary), 0.01),-1.8em -1.8em 0 0 rgba(var(--primary), 0.01)}50%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.01),1.8em -1.8em 0 0 rgba(var(--primary), 0.2),2.5em 0 0 0 rgba(var(--primary), 0.5),1.75em 1.75em 0 0 rgba(var(--primary), 1),0 2.5em 0 0 rgba(var(--primary), 0.01),-1.8em 1.8em 0 0 rgba(var(--primary), 0.01),-2.6em 0 0 0 rgba(var(--primary), 0.01),-1.8em -1.8em 0 0 rgba(var(--primary), 0.01)}62.5%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.01),1.8em -1.8em 0 0 rgba(var(--primary), 0.01),2.5em 0 0 0 rgba(var(--primary), 0.2),1.75em 1.75em 0 0 rgba(var(--primary), 0.5),0 2.5em 0 0 rgba(var(--primary), 1),-1.8em 1.8em 0 0 rgba(var(--primary), 0.01),-2.6em 0 0 0 rgba(var(--primary), 0.01),-1.8em -1.8em 0 0 rgba(var(--primary), 0.01)}75%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.01),1.8em -1.8em 0 0 rgba(var(--primary), 0.01),2.5em 0 0 0 rgba(var(--primary), 0.01),1.75em 1.75em 0 0 rgba(var(--primary), 0.2),0 2.5em 0 0 rgba(var(--primary), 0.5),-1.8em 1.8em 0 0 rgba(var(--primary), 1),-2.6em 0 0 0 rgba(var(--primary), 0.01),-1.8em -1.8em 0 0 rgba(var(--primary), 0.01)}87.5%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.01),1.8em -1.8em 0 0 rgba(var(--primary), 0.01),2.5em 0 0 0 rgba(var(--primary), 0.01),1.75em 1.75em 0 0 rgba(var(--primary), 0.01),0 2.5em 0 0 rgba(var(--primary), 0.2),-1.8em 1.8em 0 0 rgba(var(--primary), 0.5),-2.6em 0 0 0 rgba(var(--primary), 1),-1.8em -1.8em 0 0 rgba(var(--primary), 0.01)}}@keyframes primary-spinner{0%,100%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.01),1.8em -1.8em 0 0 rgba(var(--primary), 0.01),2.5em 0 0 0 rgba(var(--primary), 0.01),1.75em 1.75em 0 0 rgba(var(--primary), 0.01),0 2.5em 0 0 rgba(var(--primary), 0.01),-1.8em 1.8em 0 0 rgba(var(--primary), 0.2),-2.6em 0 0 0 rgba(var(--primary), 0.5),-1.8em -1.8em 0 0 rgba(var(--primary), 1)}12.5%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 1),1.8em -1.8em 0 0 rgba(var(--primary), 0.01),2.5em 0 0 0 rgba(var(--primary), 0.01),1.75em 1.75em 0 0 rgba(var(--primary), 0.01),0 2.5em 0 0 rgba(var(--primary), 0.01),-1.8em 1.8em 0 0 rgba(var(--primary), 0.01),-2.6em 0 0 0 rgba(var(--primary), 0.2),-1.8em -1.8em 0 0 rgba(var(--primary), 0.5)}25%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.5),1.8em -1.8em 0 0 rgba(var(--primary), 1),2.5em 0 0 0 rgba(var(--primary), 0.01),1.75em 1.75em 0 0 rgba(var(--primary), 0.01),0 2.5em 0 0 rgba(var(--primary), 0.01),-1.8em 1.8em 0 0 rgba(var(--primary), 0.01),-2.6em 0 0 0 rgba(var(--primary), 0.01),-1.8em -1.8em 0 0 rgba(var(--primary), 0.2)}37.5%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.2),1.8em -1.8em 0 0 rgba(var(--primary), 0.5),2.5em 0 0 0 rgba(var(--primary), 1),1.75em 1.75em 0 0 rgba(var(--primary), 0.01),0 2.5em 0 0 rgba(var(--primary), 0.01),-1.8em 1.8em 0 0 rgba(var(--primary), 0.01),-2.6em 0 0 0 rgba(var(--primary), 0.01),-1.8em -1.8em 0 0 rgba(var(--primary), 0.01)}50%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.01),1.8em -1.8em 0 0 rgba(var(--primary), 0.2),2.5em 0 0 0 rgba(var(--primary), 0.5),1.75em 1.75em 0 0 rgba(var(--primary), 1),0 2.5em 0 0 rgba(var(--primary), 0.01),-1.8em 1.8em 0 0 rgba(var(--primary), 0.01),-2.6em 0 0 0 rgba(var(--primary), 0.01),-1.8em -1.8em 0 0 rgba(var(--primary), 0.01)}62.5%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.01),1.8em -1.8em 0 0 rgba(var(--primary), 0.01),2.5em 0 0 0 rgba(var(--primary), 0.2),1.75em 1.75em 0 0 rgba(var(--primary), 0.5),0 2.5em 0 0 rgba(var(--primary), 1),-1.8em 1.8em 0 0 rgba(var(--primary), 0.01),-2.6em 0 0 0 rgba(var(--primary), 0.01),-1.8em -1.8em 0 0 rgba(var(--primary), 0.01)}75%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.01),1.8em -1.8em 0 0 rgba(var(--primary), 0.01),2.5em 0 0 0 rgba(var(--primary), 0.01),1.75em 1.75em 0 0 rgba(var(--primary), 0.2),0 2.5em 0 0 rgba(var(--primary), 0.5),-1.8em 1.8em 0 0 rgba(var(--primary), 1),-2.6em 0 0 0 rgba(var(--primary), 0.01),-1.8em -1.8em 0 0 rgba(var(--primary), 0.01)}87.5%{box-shadow:0 -2.6em 0 0 rgba(var(--primary), 0.01),1.8em -1.8em 0 0 rgba(var(--primary), 0.01),2.5em 0 0 0 rgba(var(--primary), 0.01),1.75em 1.75em 0 0 rgba(var(--primary), 0.01),0 2.5em 0 0 rgba(var(--primary), 0.2),-1.8em 1.8em 0 0 rgba(var(--primary), 0.5),-2.6em 0 0 0 rgba(var(--primary), 1),-1.8em -1.8em 0 0 rgba(var(--primary), 0.01)}}.atomsNavigationSelect__list.js-loading::after{top:50%}.atomsNavigationSelect__listElement{transition-property:background;transition-duration:.2s;transition-timing-function:ease-in-out;font:var(--l8-font);background:rgba(var(--_white), 1);position:relative;padding:1rem;letter-spacing:.14px;cursor:pointer}.atomsNavigationSelect__listElement.open{background:rgba(242, 242, 242, 1);padding-bottom:0}.atomsNavigationSelect__listElement.open .atomsNavigationSelect__subList{display:flex;opacity:1}.atomsNavigationSelect__listElement.open .atomsNavigationSelect__listArrow{top:8px}.atomsNavigationSelect__listElement.open .atomsNavigationSelect__listArrow::after{transform:rotate(-135deg)}.atomsNavigationSelect__listElement:last-child .atomsNavigationSelect__subList{border-bottom:0}.atomsNavigationSelect__listElement:active{background:rgba(242, 242, 242, 1)}.atomsNavigationSelect__listArrow{transition-property:top;transition-duration:.2s;transition-timing-function:ease-in-out;display:flex;position:absolute;top:6px;right:.25rem;padding:1rem}.atomsNavigationSelect__listArrow::after{transition-property:transform;transition-duration:.2s;transition-timing-function:ease-in-out;content:"";width:8px;height:8px;transform:rotate(45deg);border-right:2px solid rgba(77, 77, 77, 1);border-bottom:2px solid rgba(77, 77, 77, 1)}.atomsNavigationSelect__subList{transition-property:max-height,opacity;transition-duration:.2s;transition-timing-function:ease-in-out;background:rgba(var(--_white), 1);display:none;flex-direction:column;width:calc(100% + 1rem + 2);margin:1rem -1rem 0;padding:0;border-bottom:1px solid rgba(204, 204, 204, 1);opacity:0;list-style:none}.atomsNavigationSelect__subListLink{color:rgba(26, 26, 26, 1);font:var(--body3-font);padding:.75rem 1rem;letter-spacing:.14px;text-decoration:none;cursor:pointer}.atomsNavigationSelect__subListLink:active{background:rgba(242, 242, 242, 1)}.atomsNavigationSelect__subListLink.active{color:rgba(var(--primary), 1);font-weight:700}@media(min-width: 48em)and (max-width: