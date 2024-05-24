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
	var ghmxy_hitcollector='ghmrs.hit.gemius.pl';
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
done:!0,value:void 0}}[Symbol.iterator](){return new Sg(this.g,this.i,this.l)}}var Tg={};class Ug{}class Vg{}Object.freeze(new Ug);Object.freeze(new Vg);let Wg;function Xg(a){if(Wg)throw Error("");Wg=a}function Yg(a){if(Wg)try{Wg(a)}catch(b){throw b.cause=a,b;}}function Zg(){const a=$g();Wg?r.setTimeout(()=>{Yg(a)},0):If(a)}function ah(a){a=Error(a);Ae(a,"warning");Yg(a);return a}function $g(){const a=Error();Ae(a,"incident");return a};function bh(a){if(null!=a&&"number"!==typeof a)throw Error(`Value of float/double field must be a number, found ${typeof a}: ${a}`);return a}function ch(a){if("boolean"!==typeof a)throw Error(`Expected boolean but got ${ya(a)}: ${a}`);return a}const dh=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function eh(a){const b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:dh.test(a)}function fh(a){if(null!=a){if(!Number.isFinite(a))throw ah("enum");a|=0}return a} 
function gh(a){return null==a?a:Number.isFinite(a)?a|0:void 0}function hh(a){if("number"!==typeof a)throw ah("int32");if(!Number.isFinite(a))throw ah("int32");return a|0}function ih(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return Number.isFinite(a)?a|0:void 0}function jh(a){if("number"!==typeof a)throw ah("uint32");if(!Number.isFinite(a))throw ah("uint32");return a>>>0} 
function kh(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return Number.isFinite(a)?a>>>0:void 0}function lh(a,b){b=!!b;if(!eh(a))throw ah("int64");"string"===typeof a?a=mh(a):b?(a=Math.trunc(a),Number.isSafeInteger(a)?a=String(a):(b=String(a),nh(b)?a=b:(sg(a),a=ug()))):a=oh(a);return a}function ph(a){return"-"===a[0]?!1:20>a.length?!0:20===a.length&&184467>Number(a.substring(0,6))} 
function nh(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}function qh(a){if(0>a){sg(a);const b=tg(qg,rg);a=Number(b);return Number.isSafeInteger(a)?a:b}if(ph(String(a)))return a;sg(a);return 4294967296*rg+(qg>>>0)}function oh(a){a=Math.trunc(a);if(!Number.isSafeInteger(a)){sg(a);var b=qg,c=rg;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a} 
function mh(a){var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");-1!==b&&(a=a.substring(0,b));nh(a)||(vg(a),a=ug());return a}function rh(a){if(null==a)return a;if(eh(a)){var b;"number"===typeof a?b=oh(a):b=mh(a);return b}} 
function sh(a,b){b=!!b;if(!eh(a))throw ah("uint64");"string"===typeof a?(b=Math.trunc(Number(a)),Number.isSafeInteger(b)&&0<=b?a=String(b):(b=a.indexOf("."),-1!==b&&(a=a.substring(0,b)),ph(a)||(vg(a),a=tg(qg,rg)))):b?(a=Math.trunc(a),0<=a&&Number.isSafeInteger(a)?a=String(a):(b=String(a),ph(b)?a=b:(sg(a),a=tg(qg,rg)))):(a=Math.trunc(a),a=0<=a&&Number.isSafeInteger(a)?a:qh(a));return a}function th(a){return null==a?a:sh(a)}function uh(a){if("string"!==typeof a)throw Error();return a} 
function vh(a){if(null!=a&&"string"!==typeof a)throw Error();return a}function wh(a){return null==a||"string"===typeof a?a:void 0}function xh(a,b,c,d){if(null!=a&&"object"===typeof a&&a.Ue===Hg)return a;if(!Array.isArray(a))return c?d&2?yh(b):new b:void 0;let e=c=a[B]|0;0===e&&(e|=d&32);e|=d&2;e!==c&&(a[B]=e);return new b(a)}function yh(a){var b=a[xg];if(b)return b;b=new a;Cg(b.W);return a[xg]=b}function zh(a,b,c){return b?uh(a):wh(a)??(c?"":void 0)};const Ah=(()=>class extends Map{constructor(){super()}})();function Bh(a){return a}function Ch(a){if(a.Xc&2)throw Error("Cannot mutate an immutable Map");} 
var Gh=class extends Ah{constructor(a,b,c=Bh,d=Bh){super();let e=a[B]|0;e|=64;this.Xc=a[B]=e;this.Wd=b;this.Cc=c||Bh;this.wf=this.Wd?Dh:d||Bh;for(let f=0;f<a.length;f++){const g=a[f],h=c(g[0],!1,!0);let k=g[1];b?void 0===k&&(k=null):k=d(g[1],!1,!0,void 0,void 0,e);super.set(h,k)}}ih(a=Eh){return this.sf(a)}sf(a=Eh){const b=[],c=super.entries();for(var d;!(d=c.next()).done;)d=d.value,d[0]=a(d[0]),d[1]=a(d[1]),b.push(d);return b}zc(){return this.size}clear(){Ch(this);super.clear()}delete(a){Ch(this); 
return super.delete(this.Cc(a,!0,!1))}entries(){var a=this.xg();return new Sg(a,Fh,this)}keys(){return this.Qi()}values(){var a=this.xg();return new Sg(a,Gh.prototype.get,this)}forEach(a,b){super.forEach((c,d)=>{a.call(b,this.get(d),d,this)})}set(a,b){Ch(this);a=this.Cc(a,!0,!1);return null==a?this:null==b?(super.delete(a),this):super.set(a,this.wf(b,!0,!0,this.Wd,!1,this.Xc))}has(a){return super.has(this.Cc(a,!1,!1))}get(a){a=this.Cc(a,!1,!1);const b=super.get(a);if(void 0!==b){var c=this.Wd;return c? 
(c=this.wf(b,!1,!0,c,this.Th,this.Xc),c!==b&&super.set(a,c),c):b}}xg(){return Array.from(super.keys())}Qi(){return super.keys()}[Symbol.iterator](){return this.entries()}};Gh.prototype.toJSON=void 0;Gh.prototype.Ui=Ig;function Dh(a,b,c,d,e,f){a=xh(a,d,c,f);e&&(a=Hh(a));return a}function Eh(a){return a}function Fh(a){return[a,this.get(a)]};let Ih;function Jh(a,b){Ih=b;a=new a(b);Ih=void 0;return a};function Kh(a,b){return Lh(b)}function Lh(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a){if(Array.isArray(a))return Mg||!Og(a,void 0,9999)?a:void 0;if(Uf(a))return Qf(a);if(a instanceof ng){const b=a.M;return null==b?"":"string"===typeof b?b:a.M=Qf(b)}if(a instanceof Gh)return a=a.ih(),og||0!==a.length?a:void 0}}return a};function Mh(a,b,c){a=wg(a);var d=a.length;const e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(const f in e)Object.prototype.hasOwnProperty.call(e,f)&&(b[f]=c(e[f]))}return a}function Nh(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&(a[B]|0)&1?void 0:f&&(a[B]|0)&2?a:Oh(a,b,c,void 0!==d,e,f);else if(Kg(a)){const g={};for(let h in a)Object.prototype.hasOwnProperty.call(a,h)&&(g[h]=Nh(a[h],b,c,d,e,f));a=g}else a=b(a,d);return a}} 
function Oh(a,b,c,d,e,f){const g=d||c?a[B]|0:0;d=d?!!(g&32):void 0;a=wg(a);for(let h=0;h<a.length;h++)a[h]=Nh(a[h],b,c,d,e,f);c&&c(g,a);return a}function Ph(a){return Nh(a,Qh,void 0,void 0,!1,!1)}function Qh(a){return a.Ue===Hg?a.toJSON():a instanceof Gh?a.ih(Ph):Lh(a)};function Rh(a,b,c=Fg){if(null!=a){if(a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=a[B]|0;if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?(a[B]=(d|34)&-12293,a):Oh(a,Rh,d&4?Fg:c,!0,!1,!0)}a.Ue===Hg?(c=a.W,d=c[B],a=d&2?a:Jh(a.constructor,Sh(c,d,!0))):a instanceof Gh&&(c=Cg(a.sf(Rh)),a=new Gh(c,a.Wd,a.Cc,a.wf));return a}}function Th(a){const b=a.W;return Jh(a.constructor,Sh(b,b[B],!1))} 
function Sh(a,b,c){const d=c||b&2?Fg:Eg,e=!!(b&32);a=Mh(a,b,f=>Rh(f,e,d));a[B]=a[B]|32|(c?2:0);return a}function Hh(a){const b=a.W,c=b[B];return c&2?Jh(a.constructor,Sh(b,c,!1)):a};function Uh(a,b,c){if(!(4&b))return!0;if(null==c)return!1;0===c&&(4096&b||8192&b)&&5>(a.constructor[yg]=(a.constructor[yg]|0)+1)&&Zg();return 0===c?!1:!(c&b)}function Vh(a,b){a=a.W;return Wh(a,a[B],b)}function Wh(a,b,c,d){if(-1===c)return null;if(c>=Gg(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}function Xh(a,b,c){const d=a.W;let e=d[B];Rg(e);Yh(d,e,b,c);return a} 
function Yh(a,b,c,d,e){const f=Gg(b);if(c>=f||e){let g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&(a[B]=g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}function Zh(a,b,c){return void 0!==$h(a,b,c,!1)} 
function ai(a,b){a=a.W;let c=a[B];const d=Wh(a,c,b);var e=null==d||"number"===typeof d?d:"NaN"===d||"Infinity"===d||"-Infinity"===d?Number(d):void 0;null!=e&&e!==d&&Yh(a,c,b,e);return e}function bi(a,b){a=Vh(a,b);return null==a||"boolean"===typeof a?a:"number"===typeof a?!!a:void 0} 
function ci(a,b,c,d,e,f,g){const h=a.W;let k=h[B];d=2&k?1:d;f=!!f;let l=di(h,k,b,e);var m=l[B]|0;if(Uh(a,m,g)){if(4&m||Object.isFrozen(l))l=wg(l),m=ei(m,k,f),k=Yh(h,k,b,l,e);let p=a=0;for(;a<l.length;a++){const q=c(l[a]);null!=q&&(l[p++]=q)}p<a&&(l.length=p);m=fi(m,k,f);m=Ag(m,20,!0);m=Ag(m,4096,!1);m=Ag(m,8192,!1);g&&(m=Ag(m,g,!0));l[B]=m;2&m&&Object.freeze(l)}gi(m)||(g=m,(c=1===d)?m=Ag(m,2,!0):f||(m=Ag(m,32,!1)),m!==g&&(l[B]=m),c&&Object.freeze(l));2===d&&gi(m)&&(l=wg(l),m=ei(m,k,f),l[B]=m,Yh(h, 
k,b,l,e));var n;f?n=l:n=l;return n}function di(a,b,c,d){a=Wh(a,b,c,d);return Array.isArray(a)?a:Pg}function fi(a,b,c){0===a&&(a=ei(a,b,c));return a=Ag(a,1,!0)}function gi(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}let hi;function ii(){return hi??(hi=new Gh(Cg([]),void 0,void 0,void 0,Tg))} 
function ji(a,b,c){var d=ki,e=b&2;let f=!1;if(null==c){if(e)return ii();c=[]}else if(c.constructor===Gh){if(0==(c.Xc&2)||e)return c;c=c.sf()}else Array.isArray(c)?f=!!((c[B]|0)&2):c=[];if(e){if(!c.length)return ii();f||(f=!0,Cg(c))}else if(f){f=!1;e=wg(c);for(c=0;c<e.length;c++){const g=e[c]=wg(e[c]);Array.isArray(g[1])&&(g[1]=Cg(g[1]))}c=e}f||((c[B]|0)&64?c[B]&=-33:32&b&&Dg(c));d=new Gh(c,d,zh,void 0);Yh(a,b,14,d,!1);return d} 
function li(a,b,c,d){const e=a.W;let f=e[B];Rg(f);if(null==c)return Yh(e,f,b),a;let g=c[B]|0,h=g;var k=!!(2&g)||Object.isFrozen(c);const l=!k&&!1;if(Uh(a,g))for(g=21,k&&(c=wg(c),h=0,g=ei(g,f,!0)),k=0;k<c.length;k++)c[k]=d(c[k]);l&&(c=wg(c),h=0,g=ei(g,f,!0));g!==h&&(c[B]=g);Yh(e,f,b,c);return a}function mi(a,b,c,d){const e=a.W;let f=e[B];Rg(f);Yh(e,f,b,("0"===d?0===Number(c):c===d)?void 0:c);return a} 
function ni(a,b,c,d){const e=a.W;let f=e[B];Rg(f);(c=oi(e,f,c))&&c!==b&&null!=d&&(f=Yh(e,f,c));Yh(e,f,b,d);return a}function pi(a,b,c){a=a.W;return oi(a,a[B],b)===c?c:-1}function oi(a,b,c){let d=0;for(let e=0;e<c.length;e++){const f=c[e];null!=Wh(a,b,f)&&(0!==d&&(b=Yh(a,b,d)),d=f)}return d}function $h(a,b,c,d){a=a.W;let e=a[B];const f=Wh(a,e,c,d);b=xh(f,b,!1,e);b!==f&&null!=b&&Yh(a,e,c,b,d);return b}function qi(a){var b=ri;return(a=$h(a,b,1,!1))?a:yh(b)} 
function C(a,b,c){b=$h(a,b,c,!1);if(null==b)return b;a=a.W;let d=a[B];if(!(d&2)){const e=Hh(b);e!==b&&(b=e,Yh(a,d,c,b,!1))}return b} 
function si(a,b,c,d,e,f,g,h){var k=!!(2&b),l=k?1:e;e=1===l;l=2===l;g=!!g;h&&(h=!k);k=di(a,b,d,f);var m=k[B]|0;const n=!!(4&m);if(!n){m=fi(m,b,g);var p=k,q=b;const x=!!(2&m);x&&(q=Ag(q,2,!0));let z=!x,G=!0,E=0,K=0;for(;E<p.length;E++){const H=xh(p[E],c,!1,q);if(H instanceof c){if(!x){const N=!!((H.W[B]|0)&2);z&&(z=!N);G&&(G=N)}p[K++]=H}}K<E&&(p.length=K);m=Ag(m,4,!0);m=Ag(m,16,G);m=Ag(m,8,z);p[B]=m;x&&Object.freeze(p)}c=!!(8&m)||e&&!k.length;if(h&&!c){gi(m)&&(k=wg(k),m=ei(m,b,g),b=Yh(a,b,d,k,f));h= 
k;c=m;for(p=0;p<h.length;p++)m=h[p],q=Hh(m),m!==q&&(h[p]=q);c=Ag(c,8,!0);c=Ag(c,16,!h.length);m=h[B]=c}gi(m)||(h=m,e?m=Ag(m,!k.length||16&m&&(!n||32&m)?2:2048,!0):g||(m=Ag(m,32,!1)),m!==h&&(k[B]=m),e&&Object.freeze(k));l&&gi(m)&&(k=wg(k),m=ei(m,b,g),k[B]=m,Yh(a,b,d,k,f));return k}function D(a,b,c){a=a.W;const d=a[B];return si(a,d,b,c,2,void 0,!1,!(2&d))}function F(a,b,c){null==c&&(c=void 0);return Xh(a,b,c)}function I(a,b,c,d){null==d&&(d=void 0);return ni(a,b,c,d)} 
function ti(a,b,c){const d=a.W;let e=d[B];Rg(e);if(null==c)return Yh(d,e,b),a;let f=c[B]|0,g=f;const h=!!(2&f)||!!(2048&f),k=h||Object.isFrozen(c);let l=!0,m=!0;for(let p=0;p<c.length;p++){var n=c[p];h||(n=!!((n.W[B]|0)&2),l&&(l=!n),m&&(m=n))}h||(f=Ag(f,5,!0),f=Ag(f,8,l),f=Ag(f,16,m));k&&f!==g&&(c=wg(c),g=0,f=ei(f,e,!0));f!==g&&(c[B]=f);Yh(d,e,b,c);return a}function ei(a,b,c){a=Ag(a,2,!!(2&b));a=Ag(a,32,!!(32&b)&&c);return a=Ag(a,2048,!1)} 
function ui(a,b,c,d,e,f,g){a=a.W;const h=a[B];Rg(h);b=si(a,h,c,b,2,f,!0);c=null!=d?d:new c;if(g&&("number"!==typeof e||0>e||e>b.length))throw Error();void 0!=e?b.splice(e,g,c):b.push(c);b[B]=(c.W[B]|0)&2?b[B]&-9:b[B]&-17}function vi(a,b){return ih(Vh(a,b))}function wi(a,b){return rh(Vh(a,b))}function L(a,b){return wh(Vh(a,b))}function M(a,b){return gh(Vh(a,b))}function xi(a){return a??0}function O(a,b,c=!1){return bi(a,b)??c}function Qi(a,b){return xi(vi(a,b))} 
function Ri(a,b){return xi(wi(a,b))}function P(a,b){return L(a,b)??""}function Si(a,b){return xi(M(a,b))}function Ti(a,b,c,d){return C(a,b,pi(a,d,c))}function Ui(a,b){a=vi(a,b);return null==a?void 0:a}function Vi(a){a=ai(a,4);return null==a?void 0:a}function Wi(a,b,c){return Xh(a,b,null==c?c:ch(c))}function Xi(a,b,c){return mi(a,b,null==c?c:ch(c),!1)}function Yi(a,b,c){return Xh(a,b,null==c?c:hh(c))}function Zi(a,b,c){return mi(a,b,null==c?c:hh(c),0)} 
function $i(a,b,c){return Xh(a,b,null==c?c:lh(c))}function Q(a,b,c){return mi(a,b,null==c?c:lh(c),"0")}function aj(a,b,c){return Xh(a,b,vh(c))}function bj(a,b,c){return mi(a,b,vh(c),"")}function R(a,b,c){return mi(a,b,fh(c),0)};function cj(a){Lg=!0;try{return JSON.stringify(a.toJSON(),Kh)}finally{Lg=!1}} 
var S=class{constructor(a){a:{null==a&&(a=Ih);Ih=void 0;if(null==a){var b=96;a=[]}else{if(!Array.isArray(a))throw Error();b=a[B]|0;if(b&64)break a;var c=a;b|=64;var d=c.length;if(d&&(--d,Kg(c[d]))){b|=256;c=d-(+!!(b&512)-1);if(1024<=c)throw Error();b=b&-16760833|(c&1023)<<14}}a[B]=b}this.W=a}toJSON(){if(Lg)var a=dj(this,this.W,!1);else a=Oh(this.W,Qh,void 0,void 0,!1,!1),a=dj(this,a,!0);return a}i(){const a=this.W,b=a[B];return b&2?this:Jh(this.constructor,Sh(a,b,!0))}};S.prototype.Ue=Hg; 
function dj(a,b,c){const d=a.constructor.P;var e=(c?a.W:b)[B],f=Gg(e),g=!1;if(d&&Mg){if(!c){b=wg(b);var h;if(b.length&&Kg(h=b[b.length-1]))for(g=0;g<d.length;g++)if(d[g]>=f){Object.assign(b[b.length-1]={},h);break}g=!0}f=b;c=!c;h=a.W[B];a=Gg(h);h=+!!(h&512)-1;var k;for(let E=0;E<d.length;E++){var l=d[E];if(l<a){l+=h;var m=f[l];null==m?f[l]=c?Pg:Bg():c&&m!==Pg&&zg(m)}else{if(!k){var n=void 0;f.length&&Kg(n=f[f.length-1])?k=n:f.push(k={})}m=k[l];null==k[l]?k[l]=c?Pg:Bg():c&&m!==Pg&&zg(m)}}}k=b.length; 
if(!k)return b;let p,q;if(Kg(n=b[k-1])){a:{var x=n;f={};c=!1;for(var z in x)if(Object.prototype.hasOwnProperty.call(x,z)){a=x[z];if(Array.isArray(a)){h=a;if(!pg&&Og(a,d,+z)||!og&&Jg(a)&&0===a.size)a=null;a!=h&&(c=!0)}null!=a?f[z]=a:c=!0}if(c){for(let E in f){x=f;break a}x=null}}x!=n&&(p=!0);k--}for(e=+!!(e&512)-1;0<k;k--){z=k-1;n=b[z];if(!(null==n||!pg&&Og(n,d,z-e)||!og&&Jg(n)&&0===n.size))break;q=!0}if(!p&&!q)return b;var G;g?G=b:G=Array.prototype.slice.call(b,0,k);b=G;g&&(b.length=k);x&&b.push(x); 
return b}function ej(a,b){if(null==b)return new a;if(!Array.isArray(b))throw Error("must be an array");if(Object.isFrozen(b)||Object.isSealed(b)||!Object.isExtensible(b))throw Error("arrays passed to jspb constructors must be mutable");b[B]|=128;return Jh(a,Dg(b))};function fj(a,b){const c=gj;gj=void 0;if(!b(a))throw b=c?c()+"\n":"",Error(b+String(a));}const hj=a=>null!==a&&void 0!==a;let gj=void 0;function ij(a){return b=>{if(null==b||""==b)b=new a;else{b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);b=Jh(a,Dg(b))}return b}};function Pe(a){return new Ne(a[0].toLowerCase())};function jj(a){var b={};if(a instanceof Fd)return a;a=kj(String(a));b.Zn&&(a=a.replace(/(^|[\r\n\t ]) /g,"$1&#160;"));b.Yn&&(a=a.replace(/(\r\n|\n|\r)/g,"<br>"));b.ao&&(a=a.replace(/(\t+)/g,'<span style="white-space:pre">$1</span>'));return Gd(a)}function kj(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}function lj(a){const b=jj("");return Gd(a.map(c=>Ed(jj(c))).join(Ed(b).toString()))}const mj=/^[a-z][a-z\d-]*$/i,nj="APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" "); 
var oj="AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" ");const pj=["action","formaction","href"];function qj(a,b){if(!mj.test("body"))throw Error("");if(-1!==nj.indexOf("BODY"))throw Error("");let c="<body";a&&(c+=rj(a));Array.isArray(b)||(b=void 0===b?[]:[b]);-1!==oj.indexOf("BODY")?c+=">":(a=lj(b.map(d=>d instanceof Fd?d:jj(String(d)))),c+=">"+a.toString()+"</body>");return Gd(c)} 
function rj(a){var b="";const c=Object.keys(a);for(let f=0;f<c.length;f++){var d=c[f],e=a[d];if(!mj.test(d))throw Error("");if(void 0!==e&&null!==e){if(/^on/i.test(d))throw Error("");-1!==pj.indexOf(d.toLowerCase())&&(e=e instanceof jd?e.toString():Ke(String(e))||"about:invalid#zClosurez");e=`${d}="${jj(String(e))}"`;b+=" "+e}}return b};function sj(a){const b=a.split(/\?|#/),c=/\?/.test(a)?"?"+b[1]:"";return{path:b[0],params:c,hash:/#/.test(a)?"#"+(c?b[2]:b[1]):""}}function tj(a,...b){if(0===b.length)return dd(a[0]);let c=a[0];for(let d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return dd(c)} 
function uj(a){var b=tj`https://cse.google.com/cse.js`;b=sj(cd(b).toString());let c=b.params,d=c.length?"&":"?";a.forEach((e,f)=>{e=e instanceof Array?e:[e];for(let g=0;g<e.length;g++){const h=e[g];null!==h&&void 0!==h&&(c+=d+encodeURIComponent(f)+"="+encodeURIComponent(String(h)),d="&")}});return dd(b.path+c+b.hash)};function vj(a,...b){let c=a[0];for(let d=0;d<a.length-1;d++)c+=String(b[d])+a[d+1];if(/[<>]/.test(c))throw Error("Forbidden characters in style string: "+c);return new sd(c,qd)};tj`https://www.google.com/recaptcha/api2/aframe`;function wj(a){var b=window;new Promise((c,d)=>{function e(){f.onload=null;f.onerror=null;f.parentElement?.removeChild(f)}const f=b.document.createElement("script");f.onload=()=>{e();c()};f.onerror=()=>{e();d(void 0)};f.type="text/javascript";Se(f,a);"complete"!==b.document.readyState?Ub(b,"load",()=>{b.document.body.appendChild(f)}):b.document.body.appendChild(f)})};async function xj(a){var b="https://pagead2.googlesyndication.com/getconfig/sodar"+`?sv=${200}&tid=${a.g}`+`&tv=${a.i}&st=`+`${a.hc}`;let c=void 0;try{c=await yj(b)}catch(g){}if(c){b=a.Bc||c.sodar_query_id;var d=void 0!==c.rc_enable&&a.j?c.rc_enable:"n",e=void 0===c.bg_snapshot_delay_ms?"0":c.bg_snapshot_delay_ms,f=void 0===c.is_gen_204?"1":c.is_gen_204;if(b&&c.bg_hash_basename&&c.bg_binary)return{context:a.l,Oh:c.bg_hash_basename,Nh:c.bg_binary,Si:a.g+"_"+a.i,Bc:b,hc:a.hc,Dd:d,Ud:e,Bd:f}}} 
let yj=a=>new Promise((b,c)=>{const d=new XMLHttpRequest;d.onreadystatechange=()=>{d.readyState===d.DONE&&(200<=d.status&&300>d.status?b(JSON.parse(d.responseText)):c())};d.open("GET",a,!0);d.send()}); 
async function zj(a){var b=await xj(a);if(b){a=window;let c=a.GoogleGcLKhOms;c&&"function"===typeof c.push||(c=a.GoogleGcLKhOms=[]);c.push({_ctx_:b.context,_bgv_:b.Oh,_bgp_:b.Nh,_li_:b.Si,_jk_:b.Bc,_st_:b.hc,_rc_:b.Dd,_dl_:b.Ud,_g2_:b.Bd});if(b=a.GoogleDX5YKUSk)a.GoogleDX5YKUSk=void 0,b[1]();a=tj`https://tpc.googlesyndication.com/sodar/${"sodar2"}.js`;wj(a)}};function Aj(a,b){return bj(a,1,b)}var Bj=class extends S{g(){return P(this,1)}};function Cj(a,b){return F(a,5,b)}function Dj(a,b){return bj(a,3,b)}function Ej(a,b){return Xi(a,6,b)}var Fj=class extends S{constructor(){super()}};function Gj(a){switch(a){case 1:return"gda";case 2:return"gpt";case 3:return"ima";case 4:return"pal";case 5:return"xfad";case 6:return"dv3n";case 7:return"spa";default:return"unk"}}var Hj=class{constructor(a){this.g=a.i;this.i=a.j;this.l=a.l;this.Bc=a.Bc;this.win=a.da();this.hc=a.hc;this.Dd=a.Dd;this.Ud=a.Ud;this.Bd=a.Bd;this.j=a.g}},Ij=class{constructor(a,b,c){this.i=a;this.j=b;this.l=c;this.win=window;this.hc="env";this.Dd="n";this.Ud="0";this.Bd="1";this.g=!0}da(){return this.win}build(){return new Hj(this)}};function Jj(a){var b=new Kj;return aj(b,1,a)}function Lj(a,b){return $i(a,2,b)}function Mj(a,b){return aj(a,3,b)}function Nj(a,b){return aj(a,4,b)}var Kj=class extends S{getValue(){return P(this,1)}getVersion(){return Si(this,5)}};var Oj=class extends S{};Oj.P=[2,3,4];function Pj(a,b,c=null,d=!1,e=!1){Qj(a,b,c,d,e)}function Qj(a,b,c,d,e=!1){a.google_image_requests||(a.google_image_requests=[]);const f=Ye("IMG",a.document);if(c||d){const g=h=>{c&&c(h);d&&eb(a.google_image_requests,f);Vb(f,"load",g);Vb(f,"error",g)};Ub(f,"load",g);Ub(f,"error",g)}e&&(f.attributionSrc="");f.src=b;a.google_image_requests.push(f)} 
var Sj=(a,b)=>{let c=`https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;af(a,(d,e)=>{if(d||0===d)c+=`&${e}=${encodeURIComponent(""+d)}`});Rj(c)},Rj=a=>{var b=window;b.fetch?b.fetch(a,{keepalive:!0,credentials:"include",redirect:"follow",method:"get",mode:"no-cors"}):Pj(b,a,void 0,!1,!1)};var Tj=window;var Uj=class extends S{constructor(){super()}};Uj.P=[15];var Vj=class extends S{constructor(){super()}getCorrelator(){return Ri(this,1)}setCorrelator(a){return Q(this,1,a)}};var Wj=class extends S{constructor(){super()}};function Xj(a){this.g=a||{cookie:""}}ca=Xj.prototype; 
ca.set=function(a,b,c){let d,e,f,g=!1,h;"object"===typeof c&&(h=c.bo,g=c.bh||!1,f=c.domain||void 0,e=c.path||void 0,d=c.Fd);if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===d&&(d=-1);this.g.cookie=a+"="+b+(f?";domain="+f:"")+(e?";path="+e:"")+(0>d?"":0==d?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*d)).toUTCString())+(g?";secure":"")+(null!=h?";samesite="+h:"")}; 
ca.get=function(a,b){const c=a+"=",d=(this.g.cookie||"").split(";");for(let e=0,f;e<d.length;e++){f=cc(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};ca.isEmpty=function(){return!this.g.cookie};ca.yc=function(){return this.g.cookie?(this.g.cookie||"").split(";").length:0}; 
ca.clear=function(){var a=(this.g.cookie||"").split(";");const b=[];var c=[];let d,e;for(let f=0;f<a.length;f++)e=cc(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(c=b.length-1;0<=c;c--)a=b[c],this.get(a),this.set(a,"",{Fd:0,path:void 0,domain:void 0})};function Yj(a,b=window){if(O(a,5))try{return b.localStorage}catch{}return null}function Zj(a=window){try{return a.localStorage}catch{return null}}function ak(a){return"null"!==a.origin}function bk(a,b,c){b=O(b,5)&&ak(c)?c.document.cookie:null;return null===b?null:(new Xj({cookie:b})).get(a)||""}function ck(a,b,c,d,e){O(b,5)&&ak(c)&&(b=new Xj(c.document),b.get(a),b.set(a,"",{Fd:0,path:d,domain:e}))};let dk=null,ek=null;function fk(){if(null!=dk)return dk;dk=!1;try{const a=We(r);a&&-1!==a.location.hash.indexOf("google_logging")&&(dk=!0);Zj(r)?.getItem("google_logging")&&(dk=!0)}catch(a){}return dk}function gk(){if(null!=ek)return ek;ek=!1;try{const a=We(r),b=Zj(r);if(a&&-1!==a.location.hash.indexOf("auto_ads_logging")||b&&b.getItem("auto_ads_logging"))ek=!0}catch(a){}return ek} 
var hk=(a,b=[])=>{let c=!1;r.google_logging_queue||(c=!0,r.google_logging_queue=[]);r.google_logging_queue.push([a,b]);c&&fk()&&Xe(r.document,tj`https://pagead2.googlesyndication.com/pagead/js/logging_library.js`)};function ik(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}ca=ik.prototype;ca.getWidth=function(){return this.right-this.left};ca.getHeight=function(){return this.bottom-this.top};function jk(a){return new ik(a.top,a.right,a.bottom,a.left)}ca.contains=function(a){return this&&a?a instanceof ik?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1}; 
function kk(a,b){return a.left<=b.right&&b.left<=a.right&&a.top<=b.bottom&&b.top<=a.bottom}ca.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};ca.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this}; 
ca.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function lk(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}function mk(a,b){var c=Math.max(a.left,b.left),d=Math.min(a.left+a.width,b.left+b.width);if(c<=d){var e=Math.max(a.top,b.top);a=Math.min(a.top+a.height,b.top+b.height);if(e<=a)return new lk(c,e,d-c,a-e)}return null} 
function nk(a,b){var c=mk(a,b);if(!c||!c.height||!c.width)return[new lk(a.left,a.top,a.width,a.height)];c=[];var d=a.top,e=a.height,f=a.left+a.width,g=a.top+a.height,h=b.left+b.width,k=b.top+b.height;b.top>a.top&&(c.push(new lk(a.left,a.top,a.width,b.top-a.top)),d=b.top,e-=b.top-a.top);k<g&&(c.push(new lk(a.left,k,a.width,g-k)),e=k-d);b.left>a.left&&c.push(new lk(a.left,d,b.left-a.left,e));h<f&&c.push(new lk(h,d,f-h,e));return c} 
lk.prototype.contains=function(a){return a instanceof Yd?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};lk.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this}; 
lk.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};lk.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};const ok={"AMP-CAROUSEL":"ac","AMP-FX-FLYING-CARPET":"fc","AMP-LIGHTBOX":"lb","AMP-STICKY-AD":"sa"};function pk(a=r){let b=a.context||a.AMP_CONTEXT_DATA;if(!b)try{b=a.parent.context||a.parent.AMP_CONTEXT_DATA}catch{}return b?.pageViewId&&b?.canonicalUrl?b:null}function qk(a=pk()){return a&&a.mode?+a.mode.version||null:null}function rk(a=pk()){if(a&&a.container){a=a.container.split(",");const b=[];for(let c=0;c<a.length;c++)b.push(ok[a[c]]||"x");return b.join()}return null} 
function sk(){var a=pk();return a&&a.initialIntersection}function tk(){const a=sk();return a&&Aa(a.rootBounds)?new Zd(a.rootBounds.width,a.rootBounds.height):null}function uk(a=pk()){return a?Te(a.master)?a.master:null:null} 
function vk(a,b){const c=a.ampInaboxIframes=a.ampInaboxIframes||[];let d=()=>{},e=()=>{};b&&(c.push(b),e=()=>{a.AMP&&a.AMP.inaboxUnregisterIframe&&a.AMP.inaboxUnregisterIframe(b);eb(c,b);d()});if(a.ampInaboxInitialized)return e;a.ampInaboxPendingMessages=a.ampInaboxPendingMessages||[];const f=g=>{if(a.ampInaboxInitialized)g=!0;else{var h,k="amp-ini-load"===g.data;a.ampInaboxPendingMessages&&!k&&(h=/^amp-(\d{15,20})?/.exec(g.data))&&(a.ampInaboxPendingMessages.push(g),g=h[1],a.ampInaboxInitialized|| 
g&&!/^\d{15,20}$/.test(g)||a.document.querySelector('script[src$="amp4ads-host-v0.js"]')||Xe(a.document,g?tj`https://cdn.ampproject.org/rtv/${g}/amp4ads-host-v0.js`:tj`https://cdn.ampproject.org/amp4ads-host-v0.js`));g=!1}g&&d()};c.google_amp_listener_added||(c.google_amp_listener_added=!0,Ub(a,"message",f),d=()=>{Vb(a,"message",f)});return e};var wk=()=>a=>{a={id:"unsafeurl",ctx:638,url:a};var b=[];for(c in a)ze(c,a[c],b);var c=ye("https://pagead2.googlesyndication.com/pagead/gen_204",b.join("&"));navigator.sendBeacon&&navigator.sendBeacon(c,"")};function xk(a,b,c){if("string"===typeof b)(b=yk(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=yk(c,d);f&&(c.style[f]=e)}}var zk={};function yk(a,b){var c=zk[b];if(!c){var d=de(b);c=d;void 0===a.style[d]&&(d=(Fc?"Webkit":Ec?"Moz":Bc?"ms":null)+ee(d),void 0!==a.style[d]&&(c=d));zk[b]=c}return c}function Ak(a,b){var c=a.style[de(b)];return"undefined"!==typeof c?c:a.style[yk(a,b)]||""} 
function Bk(a,b){var c=he(a);return c.defaultView&&c.defaultView.getComputedStyle&&(a=c.defaultView.getComputedStyle(a,null))?a[b]||a.getPropertyValue(b)||"":""}function Ck(a,b){return Bk(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}function Dk(a){try{return a.getBoundingClientRect()}catch(b){return{left:0,top:0,right:0,bottom:0}}} 
function Ek(a){var b=he(a),c=new Yd(0,0);var d=b?he(b):document;d=!Bc||9<=Number(Pc)||"CSS1Compat"==fe(d).g.compatMode?d.documentElement:d.body;if(a==d)return c;a=Dk(a);b=je(fe(b).g);c.x=a.left+b.x;c.y=a.top+b.y;return c}function Fk(a){var b=Gk;if("none"!=Ck(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a} 
function Gk(a){var b=a.offsetWidth,c=a.offsetHeight,d=Fc&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=Dk(a),new Zd(a.right-a.left,a.bottom-a.top)):new Zd(b,c)}function Hk(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;b=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+b}function Ik(a,b){return(b=a.currentStyle?a.currentStyle[b]:null)?Hk(a,b):0}var Jk={thin:2,medium:4,thick:6}; 
function Kk(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;b=a.currentStyle?a.currentStyle[b+"Width"]:null;return b in Jk?Jk[b]:Hk(a,b)};var Lk=a=>"number"===typeof a&&0<a,Nk=(a,b)=>{a=Mk(a);if(!a)return b;const c=b.slice(-1);return b+("?"===c||"#"===c?"":"&")+a},Mk=a=>Object.entries(Ok(a)).map(([b,c])=>`${b}=${encodeURIComponent(String(c))}`).join("&"),Ok=a=>{const b={};af(a,(c,d)=>{if(c||0===c||!1===c)"boolean"===typeof c&&(c=c?1:0),b[d]=c});return b},Pk=()=>{try{return Tj.history.length}catch(a){return 0}},Qk=a=>{a=uk(pk(a))||a;a.google_unique_id=(a.google_unique_id||0)+1},Rk=a=>{a=a.google_unique_id;return"number"===typeof a?a: 
0},Sk=a=>{let b;b=9!==a.nodeType&&a.id;a:{if(a&&a.nodeName&&a.parentElement){var c=a.nodeName.toString().toLowerCase();const d=a.parentElement.childNodes;let e=0;for(let f=0;f<d.length;++f){const g=d[f];if(g.nodeName&&g.nodeName.toString().toLowerCase()===c){if(a===g){c="."+e;break a}++e}}}c=""}return(a.nodeName&&a.nodeName.toString().toLowerCase())+(b?"/"+b:"")+c},Tk=()=>{if(!Tj)return!1;try{return!(!Tj.navigator.standalone&&!Tj.top.navigator.standalone)}catch(a){return!1}},Uk=a=>(a=a.google_ad_format)? 
0<a.indexOf("_0ads"):!1,Vk=a=>{let b=Number(a.google_ad_width),c=Number(a.google_ad_height);if(!(0<b&&0<c)){a:{try{const e=String(a.google_ad_format);if(e&&e.match){const f=e.match(/(\d+)x(\d+)/i);if(f){const g=parseInt(f[1],10),h=parseInt(f[2],10);if(0<g&&0<h){var d={width:g,height:h};break a}}}}catch(e){}d=null}a=d;if(!a)return null;b=0<b?b:a.width;c=0<c?c:a.height}return{width:b,height:c}};class Wk{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};const Xk=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var Yk=class{constructor(a,b){this.g=a;this.i=b}},Zk=class{constructor(a,b,c){this.url=a;this.win=b;this.ug=!!c;this.depth=null}};let $k=null;function al(){if(null===$k){$k="";try{let a="";try{a=r.top.location.hash}catch(b){a=r.location.hash}if(a){const b=a.match(/\bdeid=([\d,]+)/);$k=b?b[1]:""}}catch(a){}}return $k};function bl(){const a=r.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function cl(){const a=r.performance;return a&&a.now?a.now():null};var dl=class{constructor(a,b){var c=cl()||bl();this.label=a;this.type=b;this.value=c;this.duration=0;this.taskId=this.slotId=void 0;this.uniqueId=Math.random()}};const el=r.performance,fl=!!(el&&el.mark&&el.measure&&el.clearMarks),gl=Nb(()=>{var a;if(a=fl)a=al(),a=!!a.indexOf&&0<=a.indexOf("1337");return a});function hl(a){a&&el&&gl()&&(el.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),el.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))}function il(a){a.g=!1;a.i!=a.j.google_js_reporting_queue&&(gl()&&Va(a.i,hl),a.i.length=0)}function jl(a,b){if(!a.g)return b();const c=a.start("491",3);let d;try{d=b()}catch(e){throw hl(c),e;}a.end(c);return d} 
class kl{constructor(a){this.i=[];this.j=a||r;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.i=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=gl()||(null!=b?b:1>Math.random())}start(a,b){if(!this.g)return null;a=new dl(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;el&&gl()&&el.mark(b);return a}end(a){if(this.g&&"number"===typeof a.value){a.duration=(cl()||bl())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;el&&gl()&&el.mark(b);!this.g||2048<this.i.length|| 
this.i.push(a)}}};function ll(a,b){const c={};c[a]=b;return[c]}function ml(a,b,c,d,e){const f=[];af(a,function(g,h){(g=nl(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)} 
function nl(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(nl(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(ml(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function ol(a){let b=1;for(const c in a.i)b=c.length>b?c.length:b;return 3997-b-a.j.length-1} 
function pl(a,b){let c="https://pagead2.googlesyndication.com"+b,d=ol(a)-b.length;if(0>d)return"";a.g.sort(function(f,g){return f-g});b=null;let e="";for(let f=0;f<a.g.length;f++){const g=a.g[f],h=a.i[g];for(let k=0;k<h.length;k++){if(!d){b=null==b?g:b;break}let l=ml(h[k],a.j,",$");if(l){l=e+l;if(d>=l.length){d-=l.length;c+=l;e=a.j;break}b=null==b?g:b}}}a="";null!=b&&(a=e+"trn="+b);return c+a}class ql{constructor(){this.j="&";this.i={};this.l=0;this.g=[]}};function rl(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);a.stack&&(b=sl(a.stack,b));return b}function sl(a,b){try{-1==a.indexOf(b)&&(a=b+"\n"+a);let c;for(;a!=c;)c=a,a=a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),"$1");return a.replace(RegExp("\n *","g"),"\n")}catch(c){return b}} 
var ul=class{constructor(a,b,c=null){this.ua=a;this.A=b;this.i=c;this.g=null;this.j=!1;this.B=this.Ba}lf(a){this.g=a}l(a){this.j=a}Lc(a,b,c){let d,e;try{this.i&&this.i.g?(e=this.i.start(a.toString(),3),d=b(),this.i.end(e)):d=b()}catch(f){b=this.A;try{hl(e),b=this.B(a,new Wk(f,{message:rl(f)}),void 0,c)}catch(g){this.Ba(217,g)}if(b)window.console?.error?.(f);else throw f;}return d}Oa(a,b,c,d){return(...e)=>this.Lc(a,()=>b.apply(c,e),d)}Ba(a,b,c,d,e){e=e||"jserror";let f;try{const J=new ql;var g=J; 
g.g.push(1);g.i[1]=ll("context",a);b.error&&b.meta&&b.id||(b=new Wk(b,{message:rl(b)}));if(b.msg){g=J;var h=b.msg.substring(0,512);g.g.push(2);g.i[2]=ll("msg",h)}var k=b.meta||{};b=k;if(this.g)try{this.g(b)}catch(ba){}if(d)try{d(b)}catch(ba){}d=J;k=[k];d.g.push(3);d.i[3]=k;d=r;k=[];b=null;do{var l=d;if(Te(l)){var m=l.location.href;b=l.document&&l.document.referrer||null}else m=b,b=null;k.push(new Zk(m||"",l));try{d=l.parent}catch(ba){d=null}}while(d&&l!=d);for(let ba=0,tb=k.length-1;ba<=tb;++ba)k[ba].depth= 
tb-ba;l=r;if(l.location&&l.location.ancestorOrigins&&l.location.ancestorOrigins.length==k.length-1)for(m=1;m<k.length;++m){var n=k[m];n.url||(n.url=l.location.ancestorOrigins[m-1]||"",n.ug=!0)}var p=k;let Ea=new Zk(r.location.href,r,!1);l=null;const Ya=p.length-1;for(n=Ya;0<=n;--n){var q=p[n];!l&&Xk.test(q.url)&&(l=q);if(q.url&&!q.ug){Ea=q;break}}q=null;const Eb=p.length&&p[Ya].url;0!=Ea.depth&&Eb&&(q=p[Ya]);f=new Yk(Ea,q);if(f.i){p=J;var x=f.i.url||"";p.g.push(4);p.i[4]=ll("top",x)}var z={url:f.g.url|| 
""};if(f.g.url){var G=f.g.url.match(xe),E=G[1],K=G[3],H=G[4];x="";E&&(x+=E+":");K&&(x+="//",x+=K,H&&(x+=":"+H));var N=x}else N="";E=J;z=[z,{url:N}];E.g.push(5);E.i[5]=z;tl(this.ua,e,J,this.j,c)}catch(J){try{tl(this.ua,e,{context:"ecmserr",rctx:a,msg:rl(J),url:f&&f.g.url},this.j,c)}catch(Ea){}}return this.A}Pa(a,b,c){b.catch(d=>{d=d?d:"unknown rejection";this.Ba(a,d instanceof Error?d:Error(d),void 0,c||this.g||void 0)})}};var vl=a=>"string"===typeof a,wl=a=>void 0===a;function xl(){var a=yl;return b=>{for(const c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1}};var zl=class extends S{constructor(){super()}};function Al(a,b){try{const c=d=>[{[d.kh]:d.Cg}];return JSON.stringify([a.filter(d=>d.Re).map(c),b.toJSON(),a.filter(d=>!d.Re).map(c)])}catch(c){return Bl(c,b),""}}function Bl(a,b){try{Sj({m:rl(a instanceof Error?a:Error(String(a))),b:Si(b,1)||null,v:P(b,2)||null},"rcs_internal")}catch(c){}}var Cl=class{constructor(a,b){var c=new zl;a=R(c,1,a);this.j=bj(a,2,b).i()}};var Dl=class extends S{getValue(){return Si(this,1)}};function El(a){var b=new Fl;return Xh(b,1,fh(a))}var Fl=class extends S{getValue(){return Si(this,1)}};var Gl=class extends S{constructor(){super()}getValue(){return Si(this,1)}};function Hl(a,b){return Q(a,1,b)}function Il(a,b){return Q(a,2,b)}function Jl(a,b){return Q(a,3,b)}function Kl(a,b){return Q(a,4,b)}function Ll(a,b){return Q(a,5,b)}function Ml(a,b){return mi(a,8,bh(b),0)}function Nl(a,b){return mi(a,9,bh(b),0)}var Ol=class extends S{constructor(){super()}};function Pl(a,b){return Q(a,1,b)}function Ql(a,b){return Q(a,2,b)}var Rl=class extends S{};function Sl(a,b){ui(a,1,Rl,b)}var ki=class extends S{fh(a){ui(this,1,Rl,void 0,a,!1,1);return this}};ki.P=[1];var Tl=class extends S{constructor(){super()}};function Ul(a,b){return li(a,1,b,uh)}function Vl(a,b){return li(a,12,b,sh)}function Wl(){var a=new Xl,b=a.W,c="irr",d=b[B];Rg(d);var e=d&2;let f=Wh(b,d,2);Array.isArray(f)||(f=Pg);const g=!!(d&32);let h=f[B]|0;0===h&&g&&!e?(h|=33,f[B]=h):h&1||(h|=1,f[B]=h);if(e)h&2||Cg(f),Object.freeze(f);else if(2&h||2048&h)f=wg(f),e=1,g&&(e|=32),f[B]=e,Yh(b,d,2,f);b=f;d=b[B]|0;c=uh(c,!!(4&d)&&!!(4096&d));b.push(c);return a}function Yl(a,b){return Xi(a,3,b)}function Zl(a,b){return Xi(a,4,b)} 
function $l(a,b){return Xi(a,5,b)}function am(a,b){return Xi(a,7,b)}function bm(a,b){return Xi(a,8,b)}function cm(a,b){return Q(a,9,b)}function dm(a,b){return ti(a,10,b)}function em(a,b){return li(a,11,b,lh)}var Xl=class extends S{constructor(){super()}};Xl.P=[1,12,2,10,11];function fm(a){var b=gm();F(a,1,b)}function hm(a,b){return Q(a,2,b)}function im(a,b){return ti(a,3,b)}function jm(a,b){return ti(a,4,b)}function km(a,b){ui(a,4,Fl,b);return a}function lm(a,b){return ti(a,5,b)}function mm(a,b){return li(a,6,b,uh)}function nm(a,b){return Q(a,7,b)}function om(a,b){F(a,9,b)}function pm(a,b){return Xi(a,10,b)}function qm(a,b){return Xi(a,11,b)}function rm(a,b){return Xi(a,12,b)} 
function sm(a){var b=a.W;const c=b[B];a=c&2;b=ji(b,c,Wh(b,c,14));null==b?a=b:(!a&&ki&&(b.Th=!0),a=b);return a}var tm=class extends S{constructor(){super()}H(a){ui(this,3,Dl,void 0,a,!1,1);return this}G(a){return Q(this,8,a)}};tm.P=[3,4,5,15,6];var um=class extends S{constructor(){super()}};um.P=[2];var vm=class extends S{constructor(){super()}};var wm=class extends S{constructor(){super()}},xm=[1];function ym(a){var b=new zm;return R(b,1,a)}var zm=class extends S{constructor(){super()}};var Am=class extends S{constructor(){super()}};var Bm=class extends S{constructor(){super()}};var Cm=class extends S{constructor(){super()}};var Dm=class extends S{constructor(){super()}};var Em=class extends S{constructor(){super()}getContentUrl(){return P(this,1)}};var Fm=class extends S{constructor(){super()}};Fm.P=[1];var Gm=class extends S{constructor(){super()}};function Hm(){var a=new Im,b=new Gm;return I(a,1,kn,b)}function ln(){var a=new Im,b=new Gm;return I(a,9,kn,b)}function mn(){var a=new Im,b=new Gm;return I(a,11,kn,b)}function nn(){var a=new Im,b=new Gm;return I(a,12,kn,b)}function on(){var a=new Im,b=new Gm;return I(a,13,kn,b)}var Im=class extends S{constructor(){super()}},kn=[1,2,3,5,6,7,8,9,10,11,12,13];var pn=class extends S{constructor(){super()}};pn.P=[1];var qn=class extends S{constructor(){super()}};qn.P=[2];var rn=class extends S{constructor(){super()}};var sn=class extends S{constructor(){super()}};function tn(a){var b=new un;return R(b,1,a)}var un=class extends S{constructor(){super()}};un.P=[9];var vn=class extends S{constructor(){super()}};var wn=class extends S{constructor(){super()}};wn.P=[2];var xn=class extends S{constructor(){super()}};var yn=class extends S{constructor(){super()}},zn=[4,5];var An=class extends S{constructor(){super()}};function Bn(a){var b=new Cn;return Zi(b,2,a)}var Cn=class extends S{constructor(){super()}};Cn.P=[3];var Dn=class extends S{constructor(){super()}};var En=class extends S{constructor(){super()}};var Fn=class extends S{constructor(){super()}};var Gn=class extends S{constructor(){super()}};var Hn=class extends S{constructor(){super()}},In=[2,3];var Jn=class extends S{constructor(){super()}},Kn=[3,4,5,6,7,8,9,11,12,13];var Ln=class extends S{constructor(){super()}ec(a){return bj(this,2,a)}},Mn=[4,5,6,8,9,10,11];var Nn=class extends S{constructor(){super()}};var On=class extends S{constructor(){super()}};On.P=[4,5];var Pn=class extends S{constructor(){super()}getTagSessionCorrelator(){return Ri(this,1)}};Pn.P=[2];var Qn=class extends S{constructor(){super()}},Rn=[4,6];class Sn extends Cl{constructor(){super(...arguments)}}function Tn(a,...b){Un(a,...b.map(c=>({Re:!0,kh:3,Cg:c.toJSON()})))}function Vn(a,...b){Un(a,...b.map(c=>({Re:!0,kh:7,Cg:c.toJSON()})))}var Wn=class extends Sn{};var Xn=(a,b)=>{globalThis.fetch(a,{method:"POST",body:b,keepalive:65536>b.length,credentials:"omit",mode:"no-cors",redirect:"follow"}).catch(()=>{})};function Un(a,...b){try{a.C&&65536<=Al(a.g.concat(b),a.j).length&&Yn(a),a.l&&!a.A&&(a.A=!0,Zn(a.l,()=>{Yn(a)})),a.g.push(...b),a.g.length>=a.B&&Yn(a),a.g.length&&null===a.i&&(a.i=setTimeout(()=>{Yn(a)},a.F))}catch(c){Bl(c,a.j)}}function Yn(a){null!==a.i&&(clearTimeout(a.i),a.i=null);if(a.g.length){var b=Al(a.g,a.j);a.G("https://pagead2.googlesyndication.com/pagead/ping?e=1",b);a.g=[]}} 
var $n=class extends Wn{constructor(a,b,c,d,e){super(2,a);this.G=Xn;this.F=b;this.B=c;this.C=d;this.l=e;this.g=[];this.i=null;this.A=!1}},ao=class extends $n{constructor(a,b=1E3,c=100,d=!1,e){super(a,b,c,d&&!0,e)}};function bo(a,b,c){return b[a]||c};function co(a,b){a.g=(c,d)=>bo(2,b,()=>[])(c,1,d);a.i=()=>bo(3,b,()=>[])(1)}class eo{g(){return[]}i(){return[]}}function fo(a,b){return u(eo).g(a,b)}function go(){return u(eo).i()};function tl(a,b,c,d=!1,e){if((d?a.g:Math.random())<(e||.01))try{let f;c instanceof ql?f=c:(f=new ql,af(c,(h,k)=>{var l=f;const m=l.l++;h=ll(k,h);l.g.push(m);l.i[m]=h}));const g=pl(f,"/pagead/gen_204?id="+b+"&");g&&Pj(r,g)}catch(f){}}function ho(a,b){0<=b&&1>=b&&(a.g=b)}class io{constructor(){this.g=Math.random()}};let jo,ko;const lo=new kl(window);(a=>{jo=a??new io;"number"!==typeof window.google_srt&&(window.google_srt=Math.random());ho(jo,window.google_srt);ko=new ul(jo,!0,lo);ko.lf(()=>{});ko.l(!0);"complete"==window.document.readyState?window.google_measure_js_timing||il(lo):lo.g&&Ub(window,"load",()=>{window.google_measure_js_timing||il(lo)})})();let mo=(new Date).getTime();var no={bm:0,am:1,Xl:2,Sl:3,Yl:4,Tl:5,Zl:6,Vl:7,Wl:8,Rl:9,Ul:10,cm:11};var oo={em:0,fm:1,dm:2};function po(a,b){return a.left<b.right&&b.left<a.right&&a.top<b.bottom&&b.top<a.bottom}function qo(a){a=$a(a,b=>new ik(b.top,b.right,b.bottom,b.left));a=ro(a);return{top:a.top,right:a.right,bottom:a.bottom,left:a.left}}function ro(a){if(!a.length)throw Error("pso:box:m:nb");return ab(a.slice(1),(b,c)=>{b.left=Math.min(b.left,c.left);b.top=Math.min(b.top,c.top);b.right=Math.max(b.right,c.right);b.bottom=Math.max(b.bottom,c.bottom);return b},jk(a[0]))};var Sc={Um:0,Gl:1,Jl:2,Hl:3,Il:4,Pl:8,en:9,rm:10,sm:11,bn:16,rl:17,ql:24,om:25,Hk:26,Gk:27,xh:30,im:32,lm:40,ln:41,gn:42};var so={overlays:1,interstitials:2,vignettes:2,inserts:3,immersives:4,list_view:5,full_page:6,side_rails:7},to={[1]:1,[2]:1,[3]:7,[4]:7,[8]:2,[27]:3,[9]:4,[30]:5};var uo=728*1.38;function vo(a){return a!==a.top?512:0}function wo(a,b=420,c=!1){return(a=xo(a,c))?a>b?32768:320>a?65536:0:16384}function yo(a){var b=xo(a);a=a.innerWidth;return(b=b&&a?b/a:0)?1.05<b?262144:.95>b?524288:0:131072}function zo(a){return Math.max(0,Ao(a,!0)-T(a))}function Bo(a){a=a.document;let b={};a&&(b="CSS1Compat"==a.compatMode?a.documentElement:a.body);return b||{}}function T(a){return Bo(a).clientHeight}function xo(a,b=!1){const c=Bo(a).clientWidth;return b?c*Hf(a):c} 
function Ao(a,b){const c=Bo(a);return b?(a=T(a),c.scrollHeight===a?c.offsetHeight:c.scrollHeight):c.offsetHeight}function Co(a,b){return Do(b)||10===b||!a.adCount?!1:1==b||2==b?!(!a.adCount[1]&&!a.adCount[2]):(a=a.adCount[b])?1<=a:!1}function Eo(a,b){return a&&a.source?a.source===b||a.source.parent===b:!1}function Fo(a){return void 0===a.pageYOffset?(a.document.documentElement||a.document.body.parentNode||a.document.body).scrollTop:a.pageYOffset} 
function Go(a){return void 0===a.pageXOffset?(a.document.documentElement||a.document.body.parentNode||a.document.body).scrollLeft:a.pageXOffset}function Ho(a){const b={};let c;Array.isArray(a)?c=a:a&&a.key_value&&(c=a.key_value);if(c)for(a=0;a<c.length;a++){const d=c[a];if("key"in d&&"value"in d){const e=d.value;b[d.key]=null==e?null:String(e)}}return b}function Io(a,b,c,d){tl(c,b,{c:d.data.substring(0,500),u:a.location.href.substring(0,500)},!0,.1);return!0} 
function Jo(a){const b={bottom:"auto",clear:"none",display:"inline","float":"none",height:"auto",left:"auto",margin:0,"margin-bottom":0,"margin-left":0,"margin-right":"0","margin-top":0,"max-height":"none","max-width":"none",opacity:1,overflow:"visible",padding:0,"padding-bottom":0,"padding-left":0,"padding-right":0,"padding-top":0,position:"static",right:"auto",top:"auto","vertical-align":"baseline",visibility:"visible",width:"auto","z-index":"auto"};Va(Object.keys(b),c=>{Ak(a,c)||xk(a,c,b[c])}); 
tf(a)}function Do(a){return 26===a||27===a||40===a||41===a};function Ko(a,b){Lo(a).forEach(b,void 0)}function Lo(a){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b};function Mo(a,b){return void 0!==a.g[No(b)]}function Oo(a){const b=[];for(const c in a.g)void 0!==a.g[c]&&a.g.hasOwnProperty(c)&&b.push(a.i[c]);return b}function Po(a){const b=[];for(const c in a.g)void 0!==a.g[c]&&a.g.hasOwnProperty(c)&&b.push(a.g[c]);return b}const Qo=class{constructor(){this.g={};this.i={}}set(a,b){const c=No(a);this.g[c]=b;this.i[c]=a}get(a,b){a=No(a);return void 0!==this.g[a]?this.g[a]:b}yc(){return Oo(this).length}clear(){this.g={};this.i={}}}; 
function No(a){return a instanceof Object?String(Ba(a)):a+""};const Ro=class{constructor(a){this.g=new Qo;if(a)for(var b=0;b<a.length;++b)this.add(a[b])}add(a){this.g.set(a,!0)}contains(a){return Mo(this.g,a)}};const So=new Ro("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));function To(a,{hb:b,bb:c,Gb:d}){return d&&c(b)?b:(b=b.parentElement)?Uo(a,{hb:b,bb:c,Gb:!0}):null}function Uo(a,{hb:b,bb:c,Gb:d=!1}){const e=Vo({hb:b,bb:c,Gb:d}),f=a.g.get(e);if(f)return f.element;b=To(a,{hb:b,bb:c,Gb:d});a.g.set(e,{element:b});return b}var Wo=class{constructor(){this.g=new Map}};function Vo({hb:a,bb:b,Gb:c}){a=Ba(a);b=Ba(b);return`${a}:${b}:${c}`};function Xo(a){Wb(a.document.body.offsetHeight)};function Yo(a){a&&"function"==typeof a.ma&&a.ma()};function U(){this.B=this.B;this.G=this.G}U.prototype.B=!1;U.prototype.ma=function(){this.B||(this.B=!0,this.i())};function Zo(a,b){$o(a,Ka(Yo,b))}function $o(a,b){a.B?b():(a.G||(a.G=[]),a.G.push(b))}U.prototype.i=function(){if(this.G)for(;this.G.length;)this.G.shift()()};function ap(a){a.g.forEach((b,c)=>{if(b.overrides.delete(a)){b=Array.from(b.overrides.values()).pop()||b.originalValue;var d=a.element;b?d.style.setProperty(c,b.value,b.priority):d.style.removeProperty(c)}})} 
function bp(a,b,c){c={value:c,priority:"important"};var d=a.g.get(b);if(!d){d=a.element;var e=d.style.getPropertyValue(b);d={originalValue:e?{value:e,priority:d.style.getPropertyPriority(b)}:null,overrides:new Map};a.g.set(b,d)}d.overrides.delete(a);d.overrides.set(a,c);a=a.element;c?a.style.setProperty(b,c.value,c.priority):a.style.removeProperty(b)} 
var cp=class extends U{constructor(a,b){super();this.element=b;a=a.googTempStyleOverrideInfo=a.googTempStyleOverrideInfo||new Map;var c=a.get(b);c?b=c:(c=new Map,a.set(b,c),b=c);this.g=b}i(){ap(this);super.i()}};function dp(a){const b=new V(a.getValue());a.listen(c=>b.g(c));return b}function ep(a,b){const c=new V({first:a.M,second:b.M});a.listen(()=>c.g({first:a.M,second:b.M}));b.listen(()=>c.g({first:a.M,second:b.M}));return c}function fp(...a){const b=[...a],c=()=>b.every(f=>f.M),d=new V(c()),e=()=>{d.g(c())};b.forEach(f=>f.listen(e));return gp(d)}function hp(...a){const b=[...a],c=()=>-1!==b.findIndex(f=>f.M),d=new V(c()),e=()=>{d.g(c())};b.forEach(f=>f.listen(e));return gp(d)} 
function gp(a,b=ip){var c=a.M;const d=new V(a.M);a.listen(e=>{b(e,c)||(c=e,d.g(e))});return d}function W(a,b,c){return a.i(d=>{d===b&&c()})}function jp(a,b,c){if(a.M===b)c();else{var d={dd:null};d.dd=W(a,b,()=>{d.dd&&(d.dd(),d.dd=null);c()})}}function kp(a,b,c){gp(a).listen(d=>{d===b&&c()})}function lp(a,b){a.l&&a.l();a.l=b.listen(c=>a.g(c),!0)} 
function mp(a,b,c,d){const e=new V(!1);var f=null;a=a.map(d);W(a,!0,()=>{null===f&&(f=b.setTimeout(()=>{e.g(!0)},c))});W(a,!1,()=>{e.g(!1);null!==f&&(b.clearTimeout(f),f=null)});return gp(e)}function np(a){return{listen:b=>a.listen(b),getValue:()=>a.M}} 
class V{constructor(a){this.M=a;this.j=new Map;this.B=1;this.l=null}listen(a,b=!1){const c=this.B++;this.j.set(c,a);b&&a(this.M);return()=>{this.j.delete(c)}}i(a){return this.listen(a,!0)}A(){return this.M}g(a){this.M=a;this.j.forEach(b=>{b(this.M)})}map(a){const b=new V(a(this.M));this.listen(c=>b.g(a(c)));return b}}function ip(a,b){return a==b};function op(a){return new pp(a)}function qp(a,b){Va(a.g,c=>{c(b)})}var rp=class{constructor(){this.g=[]}};class pp{constructor(a){this.g=a}listen(a){this.g.g.push(a)}map(a){const b=new rp;this.listen(c=>qp(b,a(c)));return op(b)}delay(a,b){const c=new rp;this.listen(d=>{a.setTimeout(()=>{qp(c,d)},b)});return op(c)}}function sp(...a){const b=new rp;a.forEach(c=>{c.listen(d=>{qp(b,d)})});return op(b)};function tp(a){return gp(ep(a.g,a.j).map(b=>{var c=b.first;b=b.second;return null==c||null==b?null:up(c,b)}))}var wp=class{constructor(a){this.i=a;this.g=new V(null);this.j=new V(null);this.l=new rp;this.C=b=>{null==this.g.M&&1==b.touches.length&&this.g.g(b.touches[0])};this.A=b=>{const c=this.g.M;null!=c&&(b=vp(c,b.changedTouches),null!=b&&(this.g.g(null),this.j.g(null),qp(this.l,up(c,b))))};this.B=b=>{var c=this.g.M;null!=c&&(c=vp(c,b.changedTouches),null!=c&&(this.j.g(c),b.preventDefault()))}}}; 
function up(a,b){return{th:b.pageX-a.pageX,uh:b.pageY-a.pageY}}function vp(a,b){if(null==b)return null;for(let c=0;c<b.length;++c)if(b[c].identifier==a.identifier)return b[c];return null};function xp(a){return gp(ep(a.g,a.i).map(b=>{var c=b.first;b=b.second;return null==c||null==b?null:yp(c,b)}))}var zp=class{constructor(a,b){this.l=a;this.A=b;this.g=new V(null);this.i=new V(null);this.j=new rp;this.G=c=>{this.g.g(c)};this.B=c=>{const d=this.g.M;null!=d&&(this.g.g(null),this.i.g(null),qp(this.j,yp(d,c)))};this.C=c=>{null!=this.g.M&&(this.i.g(c),c.preventDefault())}}};function yp(a,b){return{th:b.screenX-a.screenX,uh:b.screenY-a.screenY}};var Cp=(a,b,c)=>{const d=new Ap(a,b,c);return()=>Bp(d)};function Bp(a){if(a.g)return!1;if(null==a.i)return Dp(a),!0;const b=a.i+a.A-(new Date).getTime();if(1>b)return Dp(a),!0;Ep(a,b);return!0}function Dp(a){a.i=(new Date).getTime();a.l()}function Ep(a,b){a.g=!0;a.j.setTimeout(()=>{a.g=!1;Dp(a)},b)}class Ap{constructor(a,b,c){this.j=a;this.A=b;this.l=c;this.i=null;this.g=!1}};function Fp(a){return Gp(xp(a.g),tp(a.i))}function Hp(a){return sp(op(a.g.j),op(a.i.l))}var Ip=class{constructor(a,b){this.g=a;this.i=b}};function Gp(a,b){return ep(a,b).map(({first:c,second:d})=>c||d||null)};var Jp=class{constructor(){this.cache=new Map}getBoundingClientRect(a){var b=this.cache.get(a);if(b)return b;b=a.getBoundingClientRect();this.cache.set(a,b);return b}};function Kp(a){null==a.A&&(a.A=new V(a.C.getBoundingClientRect()));return a.A}class Lp extends U{constructor(a,b){super();this.j=a;this.C=b;this.F=!1;this.A=null;this.l=()=>{Kp(this).g(this.C.getBoundingClientRect())}}g(){this.F||(this.F=!0,this.j.addEventListener("resize",this.l),this.j.addEventListener("scroll",this.l));return Kp(this)}i(){this.j.removeEventListener("resize",this.l);this.j.removeEventListener("scroll",this.l);super.i()}};function Mp(a,b){return new Np(a,b)}function Op(a){a.win.requestAnimationFrame(()=>{a.B||a.j.g(new Zd(a.element.offsetWidth,a.element.offsetHeight))})}function Pp(a){a.g||(a.g=!0,a.l.observe(a.element));return gp(a.j,$d)}var Np=class extends U{constructor(a,b){super();this.win=a;this.element=b;this.g=!1;this.j=new V(new Zd(this.element.offsetWidth,this.element.offsetHeight));this.l=new ResizeObserver(()=>{Op(this)})}i(){this.l.disconnect();super.i()}};function Qp(a,b){return{top:a.g-b,right:a.j+a.i,bottom:a.g+b,left:a.j}}class Rp{constructor(a,b,c){this.j=a;this.g=b;this.i=c}zc(){return this.i}};function Sp(a,b){a=a.getBoundingClientRect();return new Tp(a.top+Fo(b),a.bottom-a.top)}function Up(a){return new Tp(Math.round(a.g),Math.round(a.i))}class Tp{constructor(a,b){this.g=a;this.i=b}getHeight(){return this.i}};var Wp=(a,b)=>{const c=a.google_pso_loaded_fonts||(a.google_pso_loaded_fonts=[]),d=new Ro(c);b=b.filter(e=>!d.contains(e));b.length&&(Vp(a,b),ib(c,b))}; 
function Vp(a,b){for(const f of b){b=Ye("LINK",a.document);b.type="text/css";var c=tj`//fonts.googleapis.com/css`,d=wk(),e=b;c=ad(c,{family:f});if(c instanceof $c)d=c;else a:{if(c instanceof jd){d=c;break a}const g=Ee(c,De)||pd;g===pd&&d(c);d=g}e.rel="stylesheet";if(lc("stylesheet","stylesheet")){e.href=cd(d).toString();a:if(d=(e.ownerDocument&&e.ownerDocument.defaultView||r).document,d.querySelector){if((d=d.querySelector('style[nonce],link[rel="stylesheet"][nonce]'))&&(d=d.nonce||d.getAttribute("nonce"))&& 
Ud.test(d))break a;d=""}else d="";d&&e.setAttribute("nonce",d)}else{if(d instanceof $c)d=cd(d).toString();else if(d instanceof jd)d=kd(d);else{if(!(d instanceof jd)){d=String(d);b:{c=void 0;try{c=new URL(d)}catch(g){c="https:";break b}c=c.protocol}"javascript:"===c&&(d="about:invalid#zClosurez");d=new jd(d,od)}d=kd(d)}e.href=d}a.document.head.appendChild(b)}};function Xp(a,b){a.F?b(a.l):a.j.push(b)}function Yp(a,b){a.F=!0;a.l=b;a.j.forEach(c=>{c(a.l)});a.j=[]} 
class Zp extends U{constructor(a){super();this.g=a;this.j=[];this.F=!1;this.C=this.l=null;this.H=Cp(a,1E3,()=>{if(null!=this.C){var b=Ao(this.g,!0)-this.C;1E3<b&&Yp(this,b)}});this.A=null}L(a,b){null==a?(this.C=a=Ao(this.g,!0),this.g.addEventListener("scroll",this.H),null!=b&&b(a)):this.A=this.g.setTimeout(()=>{this.L(void 0,b)},a)}i(){null!=this.A&&this.g.clearTimeout(this.A);this.g.removeEventListener("scroll",this.H);this.j=[];this.l=null;super.i()}};var $p=(a,b)=>a.reduce((c,d)=>c.concat(b(d)),[]);class aq{constructor(a=1){this.g=a}next(){var a=48271*this.g%2147483647;this.g=0>2147483647*a?a+2147483647:a;return this.g/2147483647}};function bq(a,b,c){const d=[];for(const e of a.g)b(e)?d.push(e):c(e);return new cq(d)}function dq(a){return a.g.slice(0)}function eq(a,b=1){a=dq(a);const c=new aq(b);rb(a,()=>c.next());return new cq(a)}const cq=class{constructor(a){this.g=a.slice(0)}forEach(a){this.g.forEach((b,c)=>void a(b,c,this))}filter(a){return new cq(Za(this.g,a))}apply(a){return new cq(a(dq(this)))}sort(a){return new cq(dq(this).sort(a))}get(a){return this.g[a]}add(a){const b=dq(this);b.push(a);return new cq(b)}};class fq{constructor(a){this.g=new Ro(a)}contains(a){return this.g.contains(a)}};function gq(a){return new hq({value:a},null)}function iq(a){return new hq(null,a)}function jq(a){try{return gq(a())}catch(b){return iq(b)}}function kq(a){return null!=a.g?a.getValue():null}function lq(a,b){null!=a.g&&b(a.getValue());return a}function mq(a,b){null!=a.g||b(a.i);return a}class hq{constructor(a,b){this.g=a;this.i=b}getValue(){return this.g.value}map(a){return null!=this.g?(a=a(this.getValue()),a instanceof hq?a:gq(a)):this}};class nq{constructor(){this.g=new Qo}set(a,b){let c=this.g.get(a);c||(c=new Ro,this.g.set(a,c));c.add(b)}};function oq(a){return!a}function pq(a){return b=>{for(const c of a)c(b)}};function qq(a){return null!==a};var rq=class extends S{getId(){return L(this,3)}};rq.P=[4];class sq{constructor(a,{Jf:b,zh:c,Ki:d,Xg:e}){this.A=a;this.j=c;this.l=new cq(b||[]);this.i=e;this.g=d}};var tq=a=>{var b=a.split("~").filter(c=>0<c.length);a=new Qo;for(const c of b)b=c.indexOf("."),-1==b?a.set(c,""):a.set(c.substring(0,b),c.substring(b+1));return a},vq=a=>{var b=uq(a);a=[];for(let c of b)b=String(c.oc),a.push(c.Ab+"."+(20>=b.length?b:b.slice(0,19)+"_"));return a.join("~")}; 
const uq=a=>{const b=[],c=a.l;c&&c.g.length&&b.push({Ab:"a",oc:wq(c)});null!=a.j&&b.push({Ab:"as",oc:a.j});null!=a.g&&b.push({Ab:"i",oc:String(a.g)});null!=a.i&&b.push({Ab:"rp",oc:String(a.i)});b.sort(function(d,e){return d.Ab.localeCompare(e.Ab)});b.unshift({Ab:"t",oc:xq(a.A)});return b},xq=a=>{switch(a){case 0:return"aa";case 1:return"ma";default:throw Error("Invalid slot type"+a);}},wq=a=>{a=dq(a).map(yq);a=JSON.stringify(a);return cf(a)},yq=a=>{const b={};null!=L(a,7)&&(b.q=L(a,7));null!=vi(a, 
2)&&(b.o=vi(a,2));null!=vi(a,5)&&(b.p=vi(a,5));return b};function zq(){var a=new Aq;return Xh(a,2,fh(1))}var Aq=class extends S{g(){return M(this,1)}setLocation(a){return Xh(this,1,fh(a))}};function Bq(a){const b=[].slice.call(arguments).filter(Mb(e=>null===e));if(!b.length)return null;let c=[],d={};b.forEach(e=>{c=c.concat(e.Rf||[]);d=Object.assign(d,e.Ac())});return new Cq(c,d)}function Dq(a){switch(a){case 1:return new Cq(null,{google_ad_semantic_area:"mc"});case 2:return new Cq(null,{google_ad_semantic_area:"h"});case 3:return new Cq(null,{google_ad_semantic_area:"f"});case 4:return new Cq(null,{google_ad_semantic_area:"s"});default:return null}} 
function Eq(a){return null==a?null:new Cq(null,{google_ml_rank:a})}function Fq(a){return null==a?null:new Cq(null,{google_placement_id:vq(a)})}function Gq({ei:a,ti:b=null}){if(null==a)return null;a={google_daaos_ts:a};null!=b&&(a.google_erank=b+1);return new Cq(null,a)}class Cq{constructor(a,b){this.Rf=a;this.g=b}Ac(){return this.g}};var Hq=class extends S{};var Iq=class extends S{};var Jq=class extends S{};var Kq=class extends S{};var Lq=class extends S{A(){return L(this,2)}l(){return L(this,5)}g(){return D(this,Kq,3)}Nb(){return vi(this,4)}j(){return ai(this,6)}B(){return Zh(this,Jq,7)}};Lq.P=[3];var Mq=class extends S{};var Nq=class extends S{};var Oq=class extends S{constructor(){super()}};var Pq=class extends S{g(){return M(this,3)}Nb(){return wi(this,4)}j(){return bi(this,6)}};var Qq=class extends S{};var Rq=class extends S{};var Sq=class extends S{ja(){return C(this,rq,1)}g(){return M(this,2)}};var Tq=class extends S{};var Uq=class extends S{};var Vq=class extends S{getName(){return L(this,4)}},Wq=[1,2,3];var Xq=class extends S{g(){return C(this,Pq,10)}};Xq.P=[2,5,6,11];var Yq=class extends S{g(){return bi(this,2)}j(){return bi(this,3)}};var Zq=class extends S{g(){return wi(this,1)}};var $q=class extends S{};var ar=class extends S{g(){return Si(this,1)}j(){return P(this,3)}l(){return P(this,4)}};var br=class extends S{j(){return Ri(this,1)}g(){return Ri(this,1)}};var cr=class extends S{g(){return P(this,1)}j(){return P(this,2)}A(){return P(this,3)}l(){return P(this,4)}};var dr=class extends S{j(){return C(this,ar,8)}l(){return C(this,ar,9)}B(){return C(this,cr,4)}g(){return C(this,br,5)}A(){return P(this,10)}C(){return O(this,12)}G(){return O(this,14)}};var er=class extends S{l(){return O(this,1)}A(){return O(this,3)}j(){return O(this,4)}g(){return O(this,5)}};var fr=class extends S{j(){return C(this,cr,5)}g(){return C(this,br,6)}A(){return P(this,8)}B(){return O(this,9)}C(){return O(this,11)}l(){return C(this,er,12)}};function gr(){var a=new hr;a=aj(a,1,"Toggle toolbar expansion");a=aj(a,2,"Toggle privacy and legal settings display");return aj(a,3,"Dismiss privacy and legal settings display")}var hr=class extends S{};var ir=class extends S{g(){return C(this,hr,1)}};var jr=class extends S{};jr.P=[2];var kr=class extends S{};var lr=class extends S{g(){return D(this,kr,1)}};lr.P=[1];var mr=class extends S{setProperty(a){return aj(this,1,a)}getValue(){return L(this,2)}};var nr=class extends S{};nr.P=[3,4];var or=class extends S{};var pr=class extends S{ja(){return C(this,rq,1)}g(){return M(this,2)}};pr.P=[6,7,9,10,11];var qr=class extends S{};qr.P=[4];var rr=class extends S{};var sr=class extends S{g(){return ci(this,6,wh,2)}};sr.P=[6];var tr=class extends S{Ke(){return Zh(this,rr,2)}};var ur=class extends S{g(){return Ri(this,1)}};var vr=class extends S{};var xr=class extends S{g(){return Ti(this,vr,2,wr)}},wr=[1,2];var yr=class extends S{g(){return C(this,xr,3)}};var zr=class extends S{};var Ar=class extends S{g(){return D(this,zr,1)}};Ar.P=[1];var Br=class extends S{g(){return ci(this,1,wh,2)}j(){return C(this,yr,3)}};Br.P=[1,4];function Cr(a){return C(a,Iq,13)}function Dr(a){return C(a,Nq,15)}var Er=class extends S{},Fr=ij(Er);Er.P=[1,2,5,7];var Gr=class extends S{},Hr=ij(Gr);function Ir(a){try{const b=a.localStorage.getItem("google_ama_settings");return b?Hr(b):null}catch(b){return null}}function Jr(a,b){if(void 0!==a.ze){var c=Ir(b);c||(c=new Gr);void 0!==a.ze&&Wi(c,2,a.ze);a=Date.now()+864E5;Number.isFinite(a)&&$i(c,1,Math.round(a));c=cj(c);try{b.localStorage.setItem("google_ama_settings",c)}catch(d){}}else if((c=Ir(b))&&wi(c,1)<Date.now())try{b.localStorage.removeItem("google_ama_settings")}catch(d){}};var Kr={Wa:"ama_success",Qa:.1,Ta:!0,Xa:!0},Lr={Wa:"ama_failure",Qa:.1,Ta:!0,Xa:!0},Mr={Wa:"ama_coverage",Qa:.1,Ta:!0,Xa:!0},Nr={Wa:"ama_opt",Qa:.1,Ta:!0,Xa:!1},Or={Wa:"ama_auto_rs",Qa:1,Ta:!0,Xa:!1},Pr={Wa:"ama_auto_prose",Qa:1,Ta:!0,Xa:!1},Qr={Wa:"ama_improv",Qa:.1,Ta:!0,Xa:!1},Rr={Wa:"ama_constraints",Qa:0,Ta:!0,Xa:!0};function Sr(a,b,c){var d=0===a.i?a.g.j():a.g.l(),e=a.j,f=T(a.win),g=a.g.g()?.g()||0;a:switch(d?.g()){case 1:d="AUTO_PROSE_TOP_ANCHOR";break a;case 2:d="AUTO_PROSE_BOTTOM_ANCHOR";break a;default:d="UNKNOWN_POSITION"}a:switch(a.i){case 0:a="DESKTOP";break a;case 2:a="MOBILE";break a;default:a="OTHER_VIEWPORT"}Tr(e,Pr,{...c,evt:b,vh:f,eid:g,pos:d,vpt:a})}function Ur(a,b){Sr(a,"place",{sts:b})}var Vr=class{constructor(a,b,c){this.win=a;this.j=b;this.g=c;this.i=qf()}};var Wr={},Xr={},Yr={},Zr={},$r={};function as(){throw Error("Do not instantiate directly");}as.prototype.Tf=null;as.prototype.Ma=function(){return this.content};as.prototype.toString=function(){return this.content};function bs(a){if(a.Uf!==Wr)throw Error("Sanitized content was not of kind HTML.");return Gd(a.toString())}function cs(){as.call(this)}Ma(cs,as);cs.prototype.Uf=Wr;function ds(a,b){return null!=a&&a.Uf===b};function es(a){if(null!=a)switch(a.Tf){case 1:return 1;case -1:return-1;case 0:return 0}return null}function fs(a){return ds(a,Wr)?a:a instanceof Fd?gs(Ed(a).toString()):gs(String(String(a)).replace(hs,is),es(a))}var gs=function(a){function b(c){this.content=c}b.prototype=a.prototype;return function(c,d){c=new b(String(c));void 0!==d&&(c.Tf=d);return c}}(cs);function js(a){return a.replace(/<\//g,"<\\/").replace(/\]\]>/g,"]]\\>")} 
function ks(a){return ds(a,Wr)?String(String(a.Ma()).replace(ls,"").replace(ms,"&lt;")).replace(ns,is):String(a).replace(hs,is)}function os(a){a=String(a);const b=(d,e,f)=>{const g=Math.min(e.length-f,d.length);for(let k=0;k<g;k++){var h=e[f+k];if(d[k]!==("A"<=h&&"Z">=h?h.toLowerCase():h))return!1}return!0};for(var c=0;-1!=(c=a.indexOf("<",c));){if(b("\x3c/script",a,c)||b("\x3c!--",a,c))return"zSoyz";c+=1}return a} 
function ps(a){if(null==a)return" null ";if(ds(a,Xr))return a.Ma();switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(qs,rs)+"'"}}function X(a){ds(a,$r)?a=js(a.Ma()):null==a?a="":a instanceof sd?a=js(rd(a)):a instanceof Cd?a=js(a instanceof Cd&&a.constructor===Cd?a.g:"type_error:SafeStyleSheet"):(a=String(a),a=ss.test(a)?a:"zSoyz");return a} 
const ts={"\x00":"&#0;","\t":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function is(a){return ts[a]} 
const us={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\v":"\\x0b","\f":"\\f","\r":"\\r",'"':"\\x22",$:"\\x24","&":"\\x26","'":"\\x27","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e","/":"\\/",":":"\\x3a","<":"\\x3c","=":"\\x3d",">":"\\x3e","?":"\\x3f","[":"\\x5b","\\":"\\\\","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029"};function rs(a){return us[a]} 
const vs={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10","\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28", 
")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86","\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB", 
"\uff3d":"%EF%BC%BD"};function ws(a){return vs[a]} 
const hs=/[\x00\x22\x26\x27\x3c\x3e]/g,ns=/[\x00\x22\x27\x3c\x3e]/g,xs=/[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,ys=/[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,qs=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,zs=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,ss=/^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:[-\u0020\t,+.!#%_0-9a-zA-Z]|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\))+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,As= 
/^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+-]+;base64,[a-z0-9+\/]+=*$|^blob:/i,ls=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,ms=/</g;function Bs(a){a=void 0===a?"white":a;return gs('<svg width="'+ks(18)+'" height="'+ks(18)+'" viewBox="0 0 '+ks(18)+" "+ks(18)+'"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.76 10.27L17.49 16L16 17.49L10.27 11.76C9.2 12.53 7.91 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.91 12.53 9.2 11.76 10.27ZM6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2Z" fill='+(ds(a,Wr)?String(String(a.Ma()).replace(ls,"").replace(ms, 
"&lt;")).replace(ys,is):String(a).replace(xs,is))+" /></svg>")};/* 
 
 
 Copyright Mathias Bynens <http://mathiasbynens.be/> 
 
 Permission is hereby granted, free of charge, to any person obtaining 
 a copy of this software and associated documentation files (the 
 "Software"), to deal in the Software without restriction, including 
 without limitation the rights to use, copy, modify, merge, publish, 
 distribute, sublicense, and/or sell copies of the Software, and to 
 permit persons to whom the Software is furnished to do so, subject to 
 the following conditions: 
 
 The above copyright notice and this permission notice shall be 
 included in all copies or substantial portions of the Software. 
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
*/ 
const Cs=Math.floor;var Ds=/^xn--/,Es=/[\x2E\u3002\uFF0E\uFF61]/g;const Fs={Em:"Overflow: input needs wider integers to process",Am:"Illegal input >= 0x80 (not a basic code point)",km:"Invalid input"};function Gs(a){throw RangeError(Fs[a]);}function Hs(a,b){const c=a.split("@");let d="";1<c.length&&(d=c[0]+"@",a=c[1]);a=a.replace(Es,".");a=a.split(".").map(b).join(".");return d+a} 
function Is(a){return Hs(a,b=>{if(Ds.test(b)&&4<b.length){b=b.slice(4).toLowerCase();const h=[],k=b.length;let l=0,m=128;var c=72,d=b.lastIndexOf("-");0>d&&(d=0);for(var e=0;e<d;++e)128<=b.charCodeAt(e)&&Gs("Illegal input >= 0x80 (not a basic code point)"),h.push(b.charCodeAt(e));for(d=0<d?d+1:0;d<k;){e=l;for(let n=1,p=36;;p+=36){d>=k&&Gs("Invalid input");var f=b.charCodeAt(d++);f=10>f-48?f-22:26>f-65?f-65:26>f-97?f-97:36;(36<=f||f>Cs((2147483647-l)/n))&&Gs("Overflow: input needs wider integers to process"); 
l+=f*n;var g=p<=c?1:p>=c+26?26:p-c;if(f<g)break;f=36-g;n>Cs(2147483647/f)&&Gs("Overflow: input needs wider integers to process");n*=f}f=h.length+1;c=l-e;g=0;c=0==e?Cs(c/700):c>>1;for(c+=Cs(c/f);455<c;g+=36)c=Cs(c/35);c=Cs(g+36*c/(c+38));Cs(l/f)>2147483647-m&&Gs("Overflow: input needs wider integers to process");m+=Cs(l/f);l%=f;h.splice(l++,0,m)}b=String.fromCodePoint.apply(null,h)}return b})};const Js=new ub(vb,"558153351");function Ks(a,b,c){var d=a.Na.contentWindow;const e=!a.A&&"number"===typeof a.g;a.B?(b={action:"search",searchTerm:b,rsToken:c},e&&(b.experimentId=a.g),d.postMessage(b,"https://www.gstatic.com")):(d=d.google.search.cse.element.getElement(a.C),c={rsToken:c,hostName:a.host},e&&(c.afsExperimentId=a.g),d.execute(b,void 0,c))} 
function Ls(a,b){if(a.F){const c=a.Na.contentDocument?.getElementById("prose-empty-serp-container");b&&c&&Ub(b,"input",()=>{c.style.display="none"})}} 
var Ms=class{constructor(a,b,c,d,e,f,g,h,k,l,m=!1,n=!1,p=!1){this.Na=a;this.j=b;this.C=c;this.i=d;this.I=e;this.host=f.host;this.origin=f.origin;this.l=g;this.G=h;this.g=k;this.H=m;this.B=l;this.F=n;this.A=p}L(){this.Na.setAttribute("id","prose-iframe");this.Na.setAttribute("width","100%");this.Na.setAttribute("height","100%");var a=vj`box-sizing:border-box;border:unset;`;this.Na.style.cssText=rd(a);a="https://www.google.com/s2/favicons?sz=64&domain_url="+encodeURIComponent(this.host);var b=Ee(a, 
De)||pd;var c=Is(this.host.startsWith("www.")?this.host.slice(4):this.host);a=this.C;var d=this.i,e=this.I;const f=this.host;c=this.G.replace("${website}",c);const g=this.F;var h=gs,k="<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}.prose-container {max-width: 652px;}#prose-empty-serp-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 52px; position: relative; width: 248px; height: 259px; margin: auto; top: 100px;}#prose-empty-serp-icon-image {display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 30px; gap: 10px; width: 124px; height: 124px; border-radius: 62px; flex: none; order: 1; flex-grow: 0; position: absolute; top: 0;}#prose-empty-serp-text-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 19px; width: 248px; height: 83px; flex: none; order: 2; align-self: stretch; flex-grow: 0; position: absolute; top: 208px;}#prose-empty-serp-text-div {display: flex; flex-direction: column; align-items: flex-start; padding: 0; gap: 11px; width: 248px; height: 83px; flex: none; order: 0; align-self: stretch; flex-grow: 0;}#prose-empty-serp-supporting-text {width: 248px; height: 40px; font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px; text-align: center; letter-spacing: 0.2px; color: #202124; flex: none; order: 1; align-self: stretch; flex-grow: 0;}</style>"+ 
(this.H?'<script>window.__gcse={initializationCallback:function(){top.postMessage({action:"init",adChannel:"'+String(e).replace(qs,rs)+'"},top.location.origin);}};\x3c/script>':"")+'<div class="prose-container"><img class="cse-favicon" src="';ds(b,Yr)||ds(b,Zr)?b=String(b).replace(zs,ws):b instanceof jd?b=String(kd(b)).replace(zs,ws):b instanceof $c?b=String(cd(b).toString()).replace(zs,ws):(b=String(b),b=As.test(b)?b.replace(zs,ws):"about:invalid#zSoyz");a=h(k+ks(b)+'" alt="'+ks(f)+' icon"><p class="cse-header"><strong>'+ 
fs(c)+'</strong></p><div class="gcse-search" data-gname="'+ks(a)+'" data-adclient="'+ks(d)+'" data-adchannel="'+ks(e)+'" data-as_sitesearch="'+ks(f)+'" data-personalizedAds="false"></div></div>'+(g?"<div id=\"prose-empty-serp-container\"><img id='prose-empty-serp-icon-image' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjQiIGhlaWdodD0iMTI0IiByeD0iNjIiIGZpbGw9IiNGMUYzRjQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02OS4zNiA2NS4zODY3TDg0LjY0IDgwLjY2NjdMODAuNjY2NyA4NC42NEw2NS4zODY3IDY5LjM2QzYyLjUzMzMgNzEuNDEzMyA1OS4wOTMzIDcyLjY2NjcgNTUuMzMzMyA3Mi42NjY3QzQ1Ljc2IDcyLjY2NjcgMzggNjQuOTA2NyAzOCA1NS4zMzMzQzM4IDQ1Ljc2IDQ1Ljc2IDM4IDU1LjMzMzMgMzhDNjQuOTA2NyAzOCA3Mi42NjY3IDQ1Ljc2IDcyLjY2NjcgNTUuMzMzM0M3Mi42NjY3IDU5LjA5MzMgNzEuNDEzMyA2Mi41MzMzIDY5LjM2IDY1LjM4NjdaTTU1LjMzMzMgNDMuMzMzM0M0OC42OTMzIDQzLjMzMzMgNDMuMzMzMyA0OC42OTMzIDQzLjMzMzMgNTUuMzMzM0M0My4zMzMzIDYxLjk3MzMgNDguNjkzMyA2Ny4zMzMzIDU1LjMzMzMgNjcuMzMzM0M2MS45NzMzIDY3LjMzMzMgNjcuMzMzMyA2MS45NzMzIDY3LjMzMzMgNTUuMzMzM0M2Ny4zMzMzIDQ4LjY5MzMgNjEuOTczMyA0My4zMzMzIDU1LjMzMzMgNDMuMzMzM1oiIGZpbGw9IiM5QUEwQTYiLz4KPC9zdmc+Cg==' alt=''><div id='prose-empty-serp-text-container'><div id='prose-empty-serp-text-div'><div id='prose-empty-serp-supporting-text'>Search this website by entering a keyword.</div></div></div></div>": 
""));a=bs(a);this.B?(a=this.Na,d=fd(new ub(vb,"https://www.gstatic.com/prose/protected/%{version}/iframe.html?cx=%{cxId}&host=%{host}&hl=%{lang}&lrh=%{lrh}&client=%{client}&origin=%{origin}"),{version:Js,cxId:this.j,host:this.host,lang:this.l,lrh:this.G,client:this.i,origin:this.origin}),a.src=cd(d).toString()):(d=new Map([["cx",this.j],["language",this.l]]),this.A&&(e=Array.isArray(this.g)?this.g:[this.g],e.length&&d.set("fexp",e.join())),e=uj(d),d={},e=`<script src="${kj(cd(e).toString())}"`,d.async&& 
(e+=" async"),d.ci&&(e+=` custom-element="${kj(d.ci)}"`),d.defer&&(e+=" defer"),d.id&&(e+=` id="${kj(d.id)}"`),d.nonce&&(e+=` nonce="${kj(d.nonce)}"`),d.type&&(e+=` type="${kj(d.type)}"`),d=Gd(e+">\x3c/script>"),a=qj({style:vj`margin:${0};`},[a,d]),this.Na.srcdoc=Ed(a))}};function Ns(a){var b=[];Ko(a.getElementsByTagName("p"),function(c){100<=Os(c)&&b.push(c)});return b}function Os(a){if(3==a.nodeType)return a.length;if(1!=a.nodeType||"SCRIPT"==a.tagName)return 0;var b=0;Ko(a.childNodes,function(c){b+=Os(c)});return b}function Ps(a){return 0==a.length||isNaN(a[0])?a:"\\"+(30+parseInt(a[0],10))+" "+a.substring(1)} 
function Qs(a,b){if(null==a.g)return b;switch(a.g){case 1:return b.slice(1);case 2:return b.slice(0,b.length-1);case 3:return b.slice(1,b.length-1);case 0:return b;default:throw Error("Unknown ignore mode: "+a.g);}} 
const Rs=class{constructor(a,b,c,d){this.l=a;this.i=b;this.j=c;this.g=d}query(a){var b=[];try{b=a.querySelectorAll(this.l)}catch(f){}if(!b.length)return[];a=hb(b);a=Qs(this,a);"number"===typeof this.i&&(b=this.i,0>b&&(b+=a.length),a=0<=b&&b<a.length?[a[b]]:[]);if("number"===typeof this.j){b=[];for(var c=0;c<a.length;c++){var d=Ns(a[c]),e=this.j;0>e&&(e+=d.length);0<=e&&e<d.length&&b.push(d[e])}a=b}return a}toString(){return JSON.stringify({nativeQuery:this.l,occurrenceIndex:this.i,paragraphIndex:this.j, 
ignoreMode:this.g})}};function Ss(a){if(1!=a.nodeType)var b=!1;else if(b="INS"==a.tagName)a:{b=["adsbygoogle-placeholder"];a=a.className?a.className.split(/\s+/):[];for(var c={},d=0;d<a.length;++d)c[a[d]]=!0;for(d=0;d<b.length;++d)if(!c[b[d]]){b=!1;break a}b=!0}return b}function Ts(a){return Lo(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))};var Us=new t(1310,!0),Vs=new t(1277,!0),Ws=new t(1308,!0),Xs=new t(1275,!0),Ys=new t(1311),Zs=new Ab(1130,100),$s=new t(1270,!0),at=new Ab(1032,200),bt=new Bb(14),ct=new Ab(1224,.01),dt=new t(1260),et=new t(1239),ft=new t(1196),gt=new t(1160),ht=new t(316),it=new t(1290),jt=new t(1312),kt=new t(334),lt=new Ab(1263,-1),mt=new Ab(54),nt=new Ab(1265,-1),ot=new Ab(1264,-1),pt=new t(1291),qt=new t(1267,!0),rt=new t(1268,!0),st=new t(1266),tt=new t(313),ut=new Ab(66,-1),vt=new Ab(65,-1),wt=new t(1256), 
xt=new t(369),yt=new t(1241,!0),zt=new t(368),At=new t(1300,!0),Bt=new Cb(1273,["en","de"]),Ct=new t(1223,!0),Dt=new Cb(1261,["44786015","44786016"]),Et=new t(1309),Ft=new t(1289),Gt=new t(1282),Ht=new t(1250),It=new t(1151),Jt=new Ab(1072,.75),Kt=new t(290),Lt=new t(1222),Mt=new t(1238),Nt=new t(1237),Ot=new t(1313),Pt=new Bb(1307),Qt=new Ab(572636916,25),Rt=new Ab(595730437),St=new Ab(579884443),Tt=new Ab(566560958,3E4),Ut=new Ab(508040914,100),Vt=new Ab(547455356,49),Wt=new t(595118933),Xt=new t(566279275), 
Yt=new t(566279276),Zt=new t(583331697),$t=new t(595118932),au=new Cb(556791602,["1","2","4","6"]),bu=new t(45614877),cu=new t(561639568,!0),du=new t(566560957),eu=new Bb(589752731),fu=new Bb(589752730),gu=new t(579884441),hu=new Ab(571329679),iu=new t(556739145),ju=new Ab(572636915,150),ku=new Ab(579884442),lu=new Ab(595645509,.3),mu=new Ab(561668774,.1),nu=new t(598587325),ou=new t(554474127),pu=new t(550910941),qu=new t(506914611),ru=new t(597181299),su=new t(595989603),tu=new Ab(469675170,3E4), 
uu=new t(160889229),vu=new t(506852289),wu=new t(1120),xu=new t(597181300),yu=new t(586386407,!0),zu=new t(573506525,!0),Au=new t(573506524,!0),Bu=new t(562896595),Cu=new t(586643641),Du=new Ab(592337179),Eu=new t(570863962,!0),Fu=new Bb(570879859,"control_1.d"),Gu=new Ab(570863961,50),Hu=new t(570879858,!0),Iu=new t(570804360),Ju=new Bb(1166),Ku=new t(1E4),Lu=new t(562874197),Mu=new t(562874196),Nu=new t(555237685,!0),Ou=new t(45460956),Pu=new t(45414947,!0),Qu=new Ab(472785970,500),Ru=new t(45545710), 
Su=new t(439828594),Tu=new t(483962503),Uu=new t(506738118),Vu=new t(77),Wu=new t(78),Xu=new t(83),Yu=new t(80),Zu=new t(76),$u=new t(84),av=new t(1973),bv=new t(188),cv=new t(485990406);function dv(a,b){a=te(new ge(a),"DIV");const c=a.style;c.width="100%";c.height="auto";c.clear=b?"both":"none";return a}function ev(a,b,c){switch(c){case 0:b.parentNode&&b.parentNode.insertBefore(a,b);break;case 3:if(c=b.parentNode){var d=b.nextSibling;if(d&&d.parentNode!=c)for(;d&&8==d.nodeType;)d=d.nextSibling;c.insertBefore(a,d)}break;case 1:b.insertBefore(a,b.firstChild);break;case 2:b.appendChild(a)}Ss(b)&&(b.setAttribute("data-init-display",b.style.display),b.style.display="block")} 
function fv(a){if(a&&a.parentNode){const b=a.parentNode;b.removeChild(a);Ss(b)&&(b.style.display=b.getAttribute("data-init-display")||"none")}};var hv=(a,b,c,d=0)=>{var e=gv(b,c,d);if(e.L){for(c=b=e.L;c=e.ud(c);)b=c;e={anchor:b,position:e.Ld}}else e={anchor:b,position:c};a["google-ama-order-assurance"]=d;ev(a,e.anchor,e.position)},iv=(a,b,c,d=0)=>{v(tt)?hv(a,b,c,d):ev(a,b,c)}; 
function gv(a,b,c){const d=f=>{f=jv(f);return null==f?!1:c<f},e=f=>{f=jv(f);return null==f?!1:c>f};switch(b){case 0:return{L:kv(a.previousSibling,d),ud:f=>kv(f.previousSibling,d),Ld:0};case 2:return{L:kv(a.lastChild,d),ud:f=>kv(f.previousSibling,d),Ld:0};case 3:return{L:kv(a.nextSibling,e),ud:f=>kv(f.nextSibling,e),Ld:3};case 1:return{L:kv(a.firstChild,e),ud:f=>kv(f.nextSibling,e),Ld:3}}throw Error("Un-handled RelativePosition: "+b);} 
function jv(a){return a.hasOwnProperty("google-ama-order-assurance")?a["google-ama-order-assurance"]:null}function kv(a,b){return a&&b(a)?a:null};var lv=(a,b)=>{try{const c=b.document.documentElement.getBoundingClientRect(),d=a.getBoundingClientRect();return{x:d.left-c.left,y:d.top-c.top}}catch(c){return null}},mv=(a,b)=>{const c=40===a.google_reactive_ad_format,d=16===a.google_reactive_ad_format;return!!a.google_ad_resizable&&(!a.google_reactive_ad_format||c)&&!d&&!!b.navigator&&/iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent)&&b===b.top},nv=(a,b,c)=>{a=a.style;"rtl"==b?a.marginRight=c:a.marginLeft=c}; 
const ov=(a,b,c)=>{a=lv(b,a);return"rtl"==c?-a.x:a.x};var pv=(a,b)=>{b=b.parentElement;return b?(a=Ze(b,a))?a.direction:"":""},qv=(a,b,c)=>{if(0!==ov(a,b,c)){nv(b,c,"0px");var d=ov(a,b,c);nv(b,c,-1*d+"px");a=ov(a,b,c);0!==a&&a!==d&&nv(b,c,d/(a-d)*d+"px")}};const rv=RegExp("(^| )adsbygoogle($| )");function sv(a,b){for(let c=0;c<b.length;c++){const d=b[c],e=de(d.property);a[e]=d.value}}function tv(a,b,c,d,e,f){a=uv(a,e);a.wa.setAttribute("data-ad-format",d?d:"auto");vv(a,b,c,f);return a}function wv(a,b,c=null){a=uv(a,{});vv(a,b,null,c);return a}function vv(a,b,c,d){var e=[];if(d=d&&d.Rf)a.pb.className=d.join(" ");a=a.wa;a.className="adsbygoogle";a.setAttribute("data-ad-client",b);c&&a.setAttribute("data-ad-slot",c);e.length&&a.setAttribute("data-ad-channel",e.join("+"))} 
function uv(a,b){const c=dv(a,b.clearBoth||!1);var d=c.style;d.textAlign="center";b.Kd&&sv(d,b.Kd);a=te(new ge(a),"INS");d=a.style;d.display="block";d.margin="auto";d.backgroundColor="transparent";b.tf&&(d.marginTop=b.tf);b.ke&&(d.marginBottom=b.ke);b.kc&&sv(d,b.kc);c.appendChild(a);return{pb:c,wa:a}} 
function xv(a,b,c){b.dataset.adsbygoogleStatus="reserved";b.className+=" adsbygoogle-noablate";const d={element:b};c=c&&c.Ac();if(b.hasAttribute("data-pub-vars")){try{c=JSON.parse(b.getAttribute("data-pub-vars"))}catch(e){return}b.removeAttribute("data-pub-vars")}c&&(d.params=c);(a.adsbygoogle=a.adsbygoogle||[]).push(d)} 
function yv(a){const b=Ts(a.document);Va(b,function(c){const d=zv(a,c);var e;if(e=d){e=(e=lv(c,a))?e.y:0;const f=T(a);e=!(e<f)}e&&(c.setAttribute("data-pub-vars",JSON.stringify(d)),c.removeAttribute("height"),c.style.removeProperty("height"),c.removeAttribute("width"),c.style.removeProperty("width"),xv(a,c))})}function zv(a,b){b=b.getAttribute("google_element_uid");a=a.google_sv_map;if(!b||!a||!a[b])return null;a=a[b];b={};for(let c in sb)a[sb[c]]&&(b[sb[c]]=a[sb[c]]);return b};class Av{constructor(){var a=tj`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;this.g=null;this.i=!1;this.A=Math.random();this.j=this.Ba;this.B=a}lf(a){this.g=a}l(a){this.i=a}Ba(a,b,c=.01,d,e="jserror"){if((this.i?this.A:Math.random())>c)return!1;b.error&&b.meta&&b.id||(b=new Wk(b,{context:a,id:e}));if(d||this.g)b.meta={},this.g&&this.g(b.meta),d&&d(b.meta);r.google_js_errors=r.google_js_errors||[];r.google_js_errors.push(b);r.error_rep_loaded||(Xe(r.document,this.B),r.error_rep_loaded= 
!0);return!1}Lc(a,b,c){try{return b()}catch(d){if(!this.j(a,d,.01,c,"jserror"))throw d;}}Oa(a,b,c,d){return(...e)=>this.Lc(a,()=>b.apply(c,e),d)}Pa(a,b,c){b.catch(d=>{d=d?d:"unknown rejection";this.Ba(a,d instanceof Error?d:Error(d),void 0,c||this.g||void 0)})}};const Bv=(a,b)=>{b=b.google_js_reporting_queue=b.google_js_reporting_queue||[];2048>b.length&&b.push(a)}; 
var Cv=(a,b,c,d,e=!1)=>{const f=d||window,g="undefined"!==typeof queueMicrotask;return function(){e&&g&&queueMicrotask(()=>{f.google_rum_task_id_counter=f.google_rum_task_id_counter||1;f.google_rum_task_id_counter+=1});const h=cl();let k,l=3;try{k=b.apply(this,arguments)}catch(m){l=13;if(!c)throw m;c(a,m)}finally{f.google_measure_js_timing&&h&&Bv({label:a.toString(),value:h,duration:(cl()||0)-h,type:l,...(e&&g&&{taskId:f.google_rum_task_id_counter=f.google_rum_task_id_counter||1})},f)}return k}}, 
Dv=(a,b,c,d=!1)=>Cv(a,b,(e,f)=>{(new Av).Ba(e,f)},c,d);function Ev(a,b,c){return Cv(a,b,void 0,c,!0).apply()}function Fv(a,b){return Dv(754,a,b,!0).apply()}function Gv(a){if(!a)return null;var b=L(a,7);if(L(a,1)||a.getId()||0<ci(a,4,wh,2).length){var c=L(a,3),d=L(a,1),e=ci(a,4,wh,2);b=vi(a,2);var f=vi(a,5);a=Hv(M(a,6));var g="";d&&(g+=d);c&&(g+="#"+Ps(c));if(e)for(c=0;c<e.length;c++)g+="."+Ps(e[c]);b=(e=g)?new Rs(e,b,f,a):null}else b=b?new Rs(b,vi(a,2),vi(a,5),Hv(M(a,6))):null;return b}var Iv={1:1,2:2,3:3,0:0};function Hv(a){return null==a?a:Iv[a]} 
function Jv(a){for(var b=[],c=0;c<a.length;c++){var d=L(a[c],1),e=L(a[c],2);if(d&&null!=e){var f={};f.property=d;f.value=e;b.push(f)}}return b}function Kv(a,b){var c={};a&&(c.tf=L(a,1),c.ke=L(a,2),c.clearBoth=!!bi(a,3));b&&(c.Kd=Jv(D(b,mr,3)),a=D(b,mr,4),c.kc=Jv(a));return c}var Lv={1:0,2:1,3:2,4:3},Mv={0:1,1:2,2:3,3:4};const Nv=["-webkit-text-fill-color"];function Ov(a){if(Dc){{const c=Ze(a.document.body,a);if(c){a={};var b=c.length;for(let d=0;d<b;++d)a[c[d]]="initial";a=Pv(a)}else a=Qv()}}else a=Qv();return a}var Qv=()=>{const a={all:"initial"};Va(Nv,b=>{a[b]="unset"});return a};function Pv(a){Va(Nv,b=>{delete a[b]});return a};function Rv(a,b){const c=a.document.createElement("div");A(c,Ov(a));a=c.attachShadow({mode:"open"});b&&c.classList.add(b);return{Ua:c,shadowRoot:a}};function Sv({ic:a,Jb:b,Xb:c,jc:d,Kb:e,Yb:f}){const g=[];for(let n=0;n<f;n++)for(let p=0;p<c;p++){var h=p,k=c-1,l=n,m=f-1;g.push({x:a+(0===k?0:h/k)*(b-a),y:d+(0===m?0:l/m)*(e-d)})}return g}function Tv(a,b){a.hasOwnProperty("_goog_efp_called_")||(a._goog_efp_called_=a.elementFromPoint(b.x,b.y));return a.elementFromPoint(b.x,b.y)};function Uv(a,b){for(const c of b)if(b=Vv(a,c))return b;return null}function Wv(a,{Ri:b,Bj:c,width:d,height:e}){b=Sv({ic:b,Jb:b+d,Xb:10,jc:c,Kb:c+e,Yb:10});return Uv(a,b)}function Xv(a,b){var c=Sv({ic:b.left,Jb:b.right,Xb:10,jc:b.top,Kb:b.bottom,Yb:10});b=new Set;for(const d of c)(c=Vv(a,d))&&b.add(c);return b} 
function Yv(a,b,c){if("fixed"!==Ck(b,"position"))return null;var d="GoogleActiveViewInnerContainer"===b.getAttribute("class")||1>=Fk(b).width&&1>=Fk(b).height||a.g.ni&&!a.g.ni(b)?!0:!1;a.g.gg&&a.g.gg(b,c,d);return d?null:b}function Vv(a,b){var c=Tv(a.K.document,b);if(c){var d;if(!(d=Yv(a,c,b)))a:{d=a.K.document;for(c=c.offsetParent;c&&c!==d.body;c=c.offsetParent){const e=Yv(a,c,b);if(e){d=e;break a}}d=null}a=d||null}else a=null;return a}var Zv=class{constructor(a,b={}){this.K=a;this.g=b}};function $v(a){a.google_reactive_ads_global_state?(null==a.google_reactive_ads_global_state.sideRailProcessedFixedElements&&(a.google_reactive_ads_global_state.sideRailProcessedFixedElements=new Set),null==a.google_reactive_ads_global_state.sideRailAvailableSpace&&(a.google_reactive_ads_global_state.sideRailAvailableSpace=new Map),null==a.google_reactive_ads_global_state.sideRailPlasParam&&(a.google_reactive_ads_global_state.sideRailPlasParam=new Map)):a.google_reactive_ads_global_state=new aw;return a.google_reactive_ads_global_state} 
class aw{constructor(){this.wasPlaTagProcessed=!1;this.wasReactiveAdConfigReceived={};this.adCount={};this.wasReactiveAdVisible={};this.stateForType={};this.reactiveTypeEnabledInAsfe={};this.wasReactiveTagRequestSent=!1;this.reactiveTypeDisabledByPublisher={};this.tagSpecificState={};this.messageValidationEnabled=!1;this.floatingAdsStacking=new bw;this.sideRailProcessedFixedElements=new Set;this.sideRailAvailableSpace=new Map;this.sideRailPlasParam=new Map}} 
var bw=class{constructor(){this.maxZIndexRestrictions={};this.nextRestrictionId=0;this.maxZIndexListeners=[]}};function cw(a,b){return new dw(a,b)}function ew(a){const b=fw(a);Va(a.g.maxZIndexListeners,c=>c(b))}function fw(a){a=bf(a.g.maxZIndexRestrictions);return a.length?Math.min.apply(null,a):null}function gw(a,b){fb(a.g.maxZIndexListeners,c=>c===b)}class hw{constructor(a){this.g=$v(a).floatingAdsStacking}}function iw(a){if(null==a.g){var b=a.i,c=a.j;const d=b.g.nextRestrictionId++;b.g.maxZIndexRestrictions[d]=c;ew(b);a.g=d}} 
function jw(a){if(null!=a.g){var b=a.i;delete b.g.maxZIndexRestrictions[a.g];ew(b);a.g=null}}class dw{constructor(a,b){this.i=a;this.j=b;this.g=null}};function kw(a){a=a.activeElement;const b=a?.shadowRoot;return b?kw(b)||a:a}function lw(a,b){return mw(b,a.document.body).flatMap(c=>nw(c))}function mw(a,b){var c=a;for(a=[];c&&c!==b;){a.push(c);let e;var d;(d=c.parentElement)||(c=c.getRootNode(),d=(null==(e=c.mode&&c.host?c:null)?void 0:e.host)||null);c=d}return c!==b?[]:a}function nw(a){const b=a.parentElement;return b?Array.from(b.children).filter(c=>c!==a):[]};function ow(a){null!==a.g&&(a.g.ri.forEach(b=>{b.inert=!1}),a.g.kj?.focus(),a.g=null)}function pw(a,b){ow(a);const c=kw(a.win.document);b=lw(a.win,b).filter(d=>!d.inert);b.forEach(d=>{d.inert=!0});a.g={kj:c,ri:b}}var qw=class{constructor(a){this.win=a;this.g=null}Vd(){ow(this)}};function rw(a){return new sw(a,new cp(a,a.document.body),new cp(a,a.document.documentElement),new cp(a,a.document.documentElement))} 
function tw(a){bp(a.j,"scroll-behavior","auto");const b=gx(a.win);b.activePageScrollPreventers.add(a);null===b.previousWindowScroll&&(b.previousWindowScroll=a.win.scrollY);bp(a.g,"position","fixed");bp(a.g,"top",`${-b.previousWindowScroll}px`);bp(a.g,"width","100%");bp(a.g,"overflow-x","hidden");bp(a.g,"overflow-y","hidden");bp(a.i,"overflow-x","hidden");bp(a.i,"overflow-y","hidden")} 
function hx(a){ap(a.g);ap(a.i);const b=gx(a.win);b.activePageScrollPreventers.delete(a);0===b.activePageScrollPreventers.size&&(a.win.scrollTo(0,b.previousWindowScroll||0),b.previousWindowScroll=null);ap(a.j)}var sw=class{constructor(a,b,c,d){this.win=a;this.g=b;this.i=c;this.j=d}};function gx(a){return a.googPageScrollPreventerInfo=a.googPageScrollPreventerInfo||{previousWindowScroll:null,activePageScrollPreventers:new Set}} 
function ix(a){return a.googPageScrollPreventerInfo&&0<a.googPageScrollPreventerInfo.activePageScrollPreventers.size?!0:!1};function jx(a,b){return kx(`#${a}`,b)}function lx(a,b){return kx(`.${a}`,b)}function kx(a,b){b=b.querySelector(a);if(!b)throw Error(`Element (${a}) does not exist`);return b};function mx(a,b){b=Rv(a,b);a.document.body.appendChild(b.Ua);return b}function nx(a,b){const c=new V(b.M);kp(b,!0,()=>void c.g(!0));kp(b,!1,()=>{a.setTimeout(()=>{b.M||c.g(!1)},700)});return gp(c)};function ox(a){const b=a.wc;var c=a.Rd,d=a.vc;const e=a.lc,f=a.Nf,g=a.ge,h=a.Ja;a="<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: "+X(a.zIndex)+"; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: "+ 
X(b)+"; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: ";c=c?h?20:16:0;a+=X(c)+"px; transition: transform "+X(g)+"s ease-in-out;"+(d?"left: 0; border-top-right-radius: "+X(c)+"px; border-bottom-right-radius: "+X(c)+"px; transform: translateX(-100%);":"right: 0; border-top-left-radius: "+X(c)+"px; border-bottom-left-radius: "+X(c)+"px; transform: translateX(100%);")+"}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {"+(h? 
"height: 24px;":"padding: 5px;")+"}.hd-control-button {border: none; background: none; cursor: pointer;"+(h?"":"padding: 5px;")+"}#hd-back-arrow-button {"+(d?"float: right;":"float: left;")+"}#hd-close-button {"+(d?"float: left;":"float: right;")+'}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}.hd-hidden {visibility: hidden;}</style><div id="hd-drawer-container" class="hd-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-back-arrow-button" class="hd-control-button hd-hidden" aria-label="'+ 
ks(f)+'">';d=h?"#5F6368":"#444746";a+='<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="'+ks(d)+'"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg></button><button id="hd-close-button" class="hd-control-button" aria-label="'+ks(e)+'"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="'+ks(d)+'"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>'; 
return gs(a)};function px(a){a=a.top;if(!a)return null;try{var b=a.history}catch(c){b=null}b=b&&b.pushState&&"function"===typeof b.pushState?b:null;if(!b)return null;if(a.googNavStack)return a.googNavStack;b=new qx(a,b);b.L();return b?a.googNavStack=b:null}function rx(a,b){return b?b.googNavStackId===a.j?b:null:null}function sx(a,b){for(let c=b.length-1;0<=c;--c){const d=0===c;a.K.requestAnimationFrame(()=>void b[c].tj({isFinal:d}))}} 
function tx(a,b){b=kb(a.stack,b,(c,d)=>c-d.ng.googNavStackStateId);if(0<=b)return a.stack.splice(b,a.stack.length-b);b=-b-1;return a.stack.splice(b,a.stack.length-b)} 
class qx extends U{constructor(a,b){super();this.K=a;this.g=b;this.stack=[];this.j=1E9*Math.random()>>>0;this.A=0;this.l=c=>{(c=rx(this,c.state))?sx(this,tx(this,c.googNavStackStateId+.5)):sx(this,this.stack.splice(0,this.stack.length))}}pushEvent(){const a={googNavStackId:this.j,googNavStackStateId:this.A++},b=new Promise(c=>{this.stack.push({tj:c,ng:a})});this.g.pushState(a,"");return{navigatedBack:b,triggerNavigateBack:()=>{const c=tx(this,a.googNavStackStateId);var d;if(d=0<c.length){d=c[0].ng; 
const e=rx(this,this.g.state);d=e&&e.googNavStackId===d.googNavStackId&&e.googNavStackStateId===d.googNavStackStateId}d&&this.g.go(-c.length);sx(this,c)}}}L(){this.K.addEventListener("popstate",this.l)}i(){this.K.removeEventListener("popstate",this.l);super.i()}};function ux(a){return(a=px(a))?new vx(a):null}function wx(a){if(!a.g){var {navigatedBack:b,triggerNavigateBack:c}=a.l.pushEvent();a.g=c;b.then(()=>{a.g&&!a.B&&(a.g=null,qp(a.j))})}}var vx=class extends U{constructor(a){super();this.l=a;this.j=new rp;this.g=null}};function xx(a,b,c){var d=c.xe?null:new qw(a);const e=cw(new hw(a),c.zIndex-1);b=yx(a,b,c);d=new zx(a,b,d,c.ub,rw(a),e);d.L();(c.ld||void 0===c.ld)&&Ax(d);c.rb&&((a=ux(a))?Bx(d,a,c.Ye):c.Ye?.(Error("Unable to create closeNavigator")));return d}function Ax(a){a.A=b=>{"Escape"===b.key&&a.g.M&&a.collapse()};a.win.document.body.addEventListener("keydown",a.A)} 
function Bx(a,b,c){kp(a.g,!0,()=>{try{wx(b)}catch(d){c?.(d)}});kp(a.g,!1,()=>{try{b.g&&(b.g(),b.g=null)}catch(d){c?.(d)}});op(b.j).listen(()=>void a.collapse());Zo(a,b)}function Cx(a){if(a.B)throw Error("Accessing domItems after disposal");return a.C}function Dx(a){a.win.setTimeout(()=>{a.g.M&&Cx(a).Ka.focus()},500)}function Ex(a){const {Xe:b,Vh:c}=Cx(a);b.addEventListener("click",()=>void a.collapse());c.addEventListener("click",()=>void a.collapse())} 
function Fx(a){kp(a.j,!1,()=>{Cx(a).Ka.classList.add("hd-hidden")})} 
var zx=class extends U{constructor(a,b,c,d=!0,e,f){super();this.win=a;this.C=b;this.l=c;this.ub=d;this.g=new V(!1);this.j=nx(a,this.g);kp(this.j,!0,()=>{tw(e);iw(f)});kp(this.j,!1,()=>{hx(e);jw(f)})}show({bg:a=!1}={}){if(this.B)throw Error("Cannot show drawer after disposal");Cx(this).Ka.classList.remove("hd-hidden");Xo(this.win);Cx(this).Ka.classList.add("hd-revealed");this.g.g(!0);this.l&&(pw(this.l,Cx(this).gb.Ua),this.ub&&Dx(this));a&&kp(this.j,!1,()=>{this.ma()})}collapse(){Cx(this).Ka.classList.remove("hd-revealed"); 
this.g.g(!1);this.l?.Vd()}isVisible(){return this.j}L(){Ex(this);Fx(this)}i(){this.A&&this.win.document.body.removeEventListener("keydown",this.A);const a=this.C.gb.Ua,b=a.parentNode;b&&b.removeChild(a);this.l?.Vd();super.i()}}; 
function yx(a,b,c){const d=mx(a,c.ye),e=d.shadowRoot;e.appendChild(ue(new ge(a.document),bs(ox({wc:c.wc,Rd:c.Rd??!0,vc:c.vc||!1,lc:c.lc,Nf:c.Nf||"",zIndex:c.zIndex,ge:.5,Ja:c.Ja||!1}))));const f=jx("hd-drawer-container",e);c.De?.i(g=>{f.setAttribute("aria-label",g)});c=jx("hd-content-container",e);c.appendChild(b);Xo(a);return{Ka:f,Xe:jx("hd-modal-background",e),re:c,Vh:jx("hd-close-button",e),Qn:jx("hd-back-arrow-button",e),gb:d}};function Gx(a){const b=a.ej,c=a.zi;var d=a.ge;const e=a.Ja;a="<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: "+X(a.zIndex)+"; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: "+ 
X(c)+"%; transition: transform "+X(d)+"s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round ";d=e?20:28;a+=X(d)+"px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: "+ 
X(b/c*100)+"%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: "+X((c-b)/c*100)+"%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: "+ 
X(b/c*100)+"%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: "+X(b/c*100)+"%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: "+X(80)+"px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: "+ 
X(d)+"px "+X(d)+"px 0 0; background: white; display: flex; height: "+X(30)+"px; justify-content: center; cursor: grab;}.ved-handle-icon {"+(e?"background: #dadce0; width: 50px;":"background: #747775; opacity: 0.4; width: 32px;")+'border-radius: 2px; height: 4px; margin-bottom: 8px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container" class="ved-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">'+ 
Hx("ved-moving-handle")+'</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">'+Hx("ved-fixed-handle")+"</div></div></div>";return gs(a)}function Hx(a){return gs('<div class="ved-handle" id="'+ks(a)+'"><div class="ved-handle-icon"></div></div>')};function Ix(a){return Fp(a.g).map(b=>b?Jx(a,b):0)}function Jx(a,b){switch(a.direction){case 0:return Kx(-b.uh);case 1:return Kx(-b.th);default:throw Error(`Unhandled direction: ${a.direction}`);}}function Lx(a){return Hp(a.g).map(b=>Jx(a,b))}var Mx=class{constructor(a){this.g=a;this.direction=0}};function Kx(a){return 0===a?0:a};function Y(a){if(a.B)throw Error("Accessing domItems after disposal");return a.C}function Nx(a){a.win.setTimeout(()=>{a.g.M&&Y(a).Ka.focus()},500)}function Ox(a){Y(a).Ka.classList.remove("ved-hidden");Xo(a.win);const {qa:b,eb:c}=Y(a);c.getBoundingClientRect().top<=b.getBoundingClientRect().top||Px(a);Y(a).Ka.classList.add("ved-revealed");a.g.g(!0);a.j&&(pw(a.j,Y(a).gb.Ua),a.ub&&Nx(a))}function Qx(a){return nx(a.win,a.g)} 
function Rx(a,b){const c=new V(b());op(a.H).listen(()=>void c.g(b()));return gp(c)}function Sx(a){const {qa:b,Jd:c}=Y(a);return Rx(a,()=>c.getBoundingClientRect().top<=b.getBoundingClientRect().top)}function Tx(a){const {qa:b,Jd:c}=Y(a);return Rx(a,()=>c.getBoundingClientRect().top<=b.getBoundingClientRect().top-1)}function Ux(a){const {qa:b}=Y(a);return Rx(a,()=>b.scrollTop===b.scrollHeight-b.clientHeight)}function Vx(a){return hp(Sx(a),Ux(a))} 
function Wx(a){const {qa:b,eb:c}=Y(a);return Rx(a,()=>c.getBoundingClientRect().top<b.getBoundingClientRect().top-1)}function Px(a){Y(a).eb.classList.add("ved-snap-point-top");var b=Xx(a,Y(a).eb);Y(a).qa.scrollTop=b;Yx(a)}function Zx(a){W(Sx(a),!0,()=>{const {hg:b,Nc:c}=Y(a);b.classList.remove("ved-hidden");c.classList.add("ved-with-background")});W(Sx(a),!1,()=>{const {hg:b,Nc:c}=Y(a);b.classList.add("ved-hidden");c.classList.remove("ved-with-background")})} 
function $x(a){const b=Mp(a.win,Y(a).re);Pp(b).i(()=>void ay(a));Zo(a,b)}function by(a){W(cy(a),!0,()=>{Y(a).Og.classList.remove("ved-hidden")});W(cy(a),!1,()=>{Y(a).Og.classList.add("ved-hidden")})}function dy(a){const b=()=>void qp(a.F),{Xe:c,eb:d,yi:e}=Y(a);c.addEventListener("click",b);d.addEventListener("click",b);e.addEventListener("click",b);kp(ey(a),!0,b)}function fy(a){kp(Qx(a),!1,()=>{Px(a);Y(a).Ka.classList.add("ved-hidden")})}function Yx(a){jp(a.l,!1,()=>void qp(a.H))} 
function ay(a){if(!a.l.M){var {Vf:b,re:c}=Y(a),d=c.getBoundingClientRect().height;d=Math.max(gy(a),d);a.l.g(!0);var e=hy(a);b.style.setProperty("height",`${d}px`);e();a.win.requestAnimationFrame(()=>{a.win.requestAnimationFrame(()=>{a.l.g(!1)})})}}function cy(a){const {qa:b,eb:c}=Y(a);return Rx(a,()=>c.getBoundingClientRect().top<=b.getBoundingClientRect().top)}function ey(a){return fp(a.A.map(oq),iy(a))}function iy(a){return Rx(a,()=>0===Y(a).qa.scrollTop)} 
function Xx(a,b){({Nc:a}=Y(a));a=a.getBoundingClientRect().top;return b.getBoundingClientRect().top-a}function jy(a,b){a.A.g(!0);const {Nc:c,qa:d}=Y(a);d.scrollTop=0;d.classList.add("ved-scrolling-paused");c.style.setProperty("margin-top",`-${b}px`);return()=>void ky(a,b)}function ky(a,b){const {Nc:c,qa:d}=Y(a);c.style.removeProperty("margin-top");d.classList.remove("ved-scrolling-paused");Y(a).qa.scrollTop=b;Yx(a);a.A.g(!1)} 
function hy(a){const b=Y(a).qa.scrollTop;jy(a,b);return()=>void ky(a,b)}function gy(a){const {qa:b,Jd:c,Vf:d,eb:e}=Y(a);a=b.getBoundingClientRect();const f=c.getBoundingClientRect();var g=d.getBoundingClientRect();const h=e.getBoundingClientRect();g=g.top-f.top;return Math.max(a.height-h.height-g,Math.min(a.height,a.bottom-f.top)-g)} 
var ly=class extends U{constructor(a,b,c,d,e=!0){super();this.win=a;this.C=b;this.I=c;this.j=d;this.ub=e;this.F=new rp;this.H=new rp;this.g=new V(!1);this.A=new V(!1);this.l=new V(!1)}L(){Px(this);Zx(this);$x(this);by(this);dy(this);fy(this);Y(this).qa.addEventListener("scroll",()=>void Yx(this))}i(){const a=this.C.gb.Ua,b=a.parentNode;b&&b.removeChild(a);this.j?.Vd();super.i()}}; 
function my(a,b,c){const d=mx(a,c.ye),e=d.shadowRoot;e.appendChild(ue(new ge(a.document),bs(Gx({ej:100*c.cf,zi:100*c.He,zIndex:c.zIndex,ge:.5,Ja:c.Ja||!1}))));const f=jx("ved-drawer-container",e);c.De?.i(g=>{f.setAttribute("aria-label",g)});c=jx("ved-content-container",e);c.appendChild(b);Xo(a);return{Ka:f,Xe:jx("ved-modal-background",e),lh:jx("ved-ui-revealer",e),qa:jx("ved-scroller",e),Nc:jx("ved-scrolled-stack",e),yi:jx("ved-fully-closed-anchor",e),eb:jx("ved-partially-extended-anchor",e),Vf:jx("ved-content-sizer", 
e),re:c,Wn:jx("ved-moving-handle",e),Jd:jx("ved-moving-handle-holder",e),xi:jx("ved-fixed-handle",e),hg:jx("ved-fixed-handle-holder",e),Og:jx("ved-over-scroll-block",e),gb:d}};function ny(a,b,c){var d=cw(new hw(a),c.zIndex-1);b=my(a,b,c);const e=c.xe?null:new qw(a);var f=b.xi;f=new Ip(new zp(a,f),new wp(f));var g=f.g;g.A.addEventListener("mousedown",g.G);g.l.addEventListener("mouseup",g.B);g.l.addEventListener("mousemove",g.C,{passive:!1});g=f.i;g.i.addEventListener("touchstart",g.C);g.i.addEventListener("touchend",g.A);g.i.addEventListener("touchmove",g.B,{passive:!1});b=new ly(a,b,new Mx(f),e,c.ub);b.L();d=new oy(a,b,rw(a),d);Zo(d,b);d.L();c.rb&&((a=ux(a))?py(d,a,c.Ye): 
c.Ye?.(Error("Unable to create closeNavigator")));return d}function py(a,b,c){kp(a.g.g,!0,()=>{try{wx(b)}catch(d){c?.(d)}});kp(a.g.g,!1,()=>{try{b.g&&(b.g(),b.g=null)}catch(d){c?.(d)}});op(b.j).listen(()=>void a.collapse());Zo(a,b)} 
function qy(a){kp(fp(Vx(a.g),Wx(a.g)),!0,()=>{Y(a.g).eb.classList.remove("ved-snap-point-top")});W(Tx(a.g),!0,()=>{Y(a.g).qa.classList.add("ved-no-snap")});W(Tx(a.g),!1,()=>{Y(a.g).qa.classList.remove("ved-no-snap")});kp(Tx(a.g),!1,()=>{var b=a.g;var c=Y(b).Jd;c=jy(b,Xx(b,c));b.win.setTimeout(c,100)})} 
function ry(a){const b=a.g.I;Ix(b).listen(c=>{c=-c;if(0<c){const {lh:d}=Y(a.g);d.classList.add("ved-no-animation");d.style.setProperty("transform",`translateY(${c}px)`)}else({lh:c}=Y(a.g)),c.classList.remove("ved-no-animation"),c.style.removeProperty("transform")});Lx(b).listen(c=>{30<-c&&a.collapse()})} 
var oy=class extends U{constructor(a,b,c,d){super();this.win=a;this.g=b;kp(Qx(b),!0,()=>{tw(c);iw(d)});kp(Qx(b),!1,()=>{hx(c);jw(d)})}show({bg:a=!1}={}){if(this.B)throw Error("Cannot show drawer after disposal");Ox(this.g);a&&kp(Qx(this.g),!1,()=>{this.ma()})}collapse(){var a=this.g;Y(a).Ka.classList.remove("ved-revealed");a.g.g(!1);a.j?.Vd()}isVisible(){return Qx(this.g)}L(){op(this.g.F).listen(()=>{this.collapse()});qy(this);ry(this);Xo(this.win)}};var sy=class{constructor(a,b,c){this.position=a;this.Cb=b;this.Le=c}};function ty(a,b){this.start=a<b?a:b;this.end=a<b?b:a}ty.prototype.zc=function(){return this.end-this.start};function uy(a,b,c){var d=T(a);d=new sy(b.dc.Hg(b.nb),b.Cb+2*b.nb,Math.min(d,b.Gd)-b.dc.rd()+2*b.nb);d=d.position.Wf(a,d.Cb,d.Le);var e=xo(a),f=T(a);c=vy(a,new ik(Vd(d.top,0,f-1),Vd(d.right,0,e-1),Vd(d.bottom,0,f-1),Vd(d.left,0,e-1)),c);f=wy(c);let g=d.top;e=[];for(let h=0;h<f.length;h++)f[h].start>g&&e.push(new ty(g,f[h].start)),g=f[h].end;g<d.bottom&&e.push(new ty(g,d.bottom));a=T(a);d=[];for(f=e.length-1;0<=f;f--)d.push(new ty(a-e[f].end,a-e[f].start));a:{for(const h of d)if(a=h.start+b.nb,a>b.dc.rd()+ 
b.Se?a=null:(d=Math.min(h.end-b.nb,b.Gd)-a,a=d<b.Ve?null:{position:b.dc.sh(a),Hc:d}),a){b=a;break a}b=null}return{je:b,Pn:c}}function vy(a,b,c){const d=Xv(new Zv(a),b);c.forEach(e=>void d.delete(e));return d}function wy(a){return Array.from(a).map(xy).sort((b,c)=>b.start-c.start)}function xy(a){a=a.getBoundingClientRect();return new ty(a.top,a.bottom)};function yy({ca:a,ta:b}){return new zy(a,b)}var zy=class{constructor(a,b){this.ca=a;this.ta=b}Hg(a){return new zy(this.ca-a,this.ta-a)}Wf(a,b,c){a=T(a)-this.ca-c;return new ik(a,this.ta+b,a+c,this.ta)}Kf(a){a.bottom=`${this.ca}px`;a.left=`${this.ta}px`;a.right=""}jg(){return 0}rd(){return this.ca}sh(a){return new zy(a,this.ta)}};function Ay({ca:a,Ea:b}){return new By(a,b)} 
var By=class{constructor(a,b){this.ca=a;this.Ea=b}Hg(a){return new By(this.ca-a,this.Ea-a)}Wf(a,b,c){var d=xo(a);a=T(a)-this.ca-c;d=d-this.Ea-b;return new ik(a,d+b,a+c,d)}Kf(a){a.bottom=`${this.ca}px`;a.right=`${this.Ea}px`;a.left=""}jg(){return 1}rd(){return this.ca}sh(a){return new By(a,this.Ea)}};function Cy(a){const b=a.si,c=a.Xh,d=a.Qh,e=a.yj,f=a.Rh;a=a.Ph;return gs('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500,700" rel="stylesheet"><style>.ft-styless-button {border: none; background: none; user-select: none; cursor: pointer; border-radius: '+X(16)+"px;}.ft-container {position: fixed;}.ft-menu {position: absolute; bottom: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); min-height: "+ 
X(d)+"px;}.ft-menu:not(.ft-multiple-buttons *) {transition: padding 0.25s 0.25s, margin 0.25s 0.25s, border-radius 0.25s 0.25s, background-color 0s 0.5s; padding: 0; margin: "+X(a)+"px; border-radius: "+X(16)+"px; background-color: rgba(255, 255, 255, 0);}.ft-multiple-buttons .ft-menu {transition: margin 0.25s, padding 0.25s, border-radius 0.25s 0.25s, background-color 0s; padding: "+X(a)+"px; margin: 0; border-radius: "+X(16+a)+"px; background-color: rgba(255, 255, 255, 1);}.ft-left-pos .ft-menu {left: 0;}.ft-right-pos .ft-menu {right: 0;}.ft-container.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}.ft-container:not(.ft-hidden) {transition: opacity 0.25s, bottom 0.5s ease; opacity: 1;}.google-symbols {font-size: 26px; color: #3c4043;}.ft-button-holder {display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0;}.ft-flip-vertically {transform: scaleY(-1);}.ft-expand-toggle {width: "+ 
X(d)+"px; height: "+X(d)+"px;}.ft-collapsed .ft-expand-icon {transition: transform 0.25s; transform: rotate(180deg);}.ft-expand-icon:not(.ft-collapsed *) {transition: transform 0.25s; transform: rotate(0deg);}.ft-button {position: relative; height: "+X(d)+"px; margin-bottom: "+X(f)+"px; transform: margin 0.25s 0.25s;}.ft-button.ft-last-button {margin-bottom: 0;}.ft-button > button {position: relative; height: "+X(d)+"px; width: "+X(d)+"px; margin: 0; padding: 0; border: none;}.ft-button > button > * {position: relative;}.ft-button .ft-highlighter {position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); height: "+ 
X(d-6)+"px; width: "+X(d-6)+"px; border-radius: "+X(d/2)+"px; background-color: #d2e3fc; opacity: 0; transition: opacity 0.25s;}.ft-button.ft-highlighted .ft-highlighter {opacity: 1;}.ft-button-corner-info {display: none;}.ft-button.ft-show-corner-info .ft-button-corner-info {position: absolute; left: -5px; top: 4px; background: #b3261e; border: 1.5px solid #ffffff; box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15); border-radius: 100px; color: ffffff; font-family: 'Google Sans Text'; font-style: normal; font-weight: 700; font-size: 11px; line-height: 14px; min-width: 16px; height: 16px; display: flex; flex-direction: row; justify-content: center; align-items: center;}.ft-separator {display: block; width: 100%; height: "+ 
X(e)+"px;}.ft-separator > span {display: block; width: 28px; margin: 0 auto 10px auto; height: 0; border-bottom: 1px solid #dadce0;}.ft-expand-toggle-container {height: "+X(d)+"px;}.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}:not(.ft-hidden) {transition: opacity 0.25s; opacity: 1;}.ft-collapsed .ft-collapsible, .ft-collapsible.ft-collapsed, .ft-expand-toggle-container.ft-collapsed {transition: opacity 0.25s, margin 0.25s 0.25s, height 0.25s 0.25s, overflow 0.25s 0s, visibility 1s 0s; height: 0; opacity: 0; overflow: hidden; visibility: hidden; margin: 0;}.ft-collapsible:not(.ft-collapsed *):not(.ft-collapsed), .ft-expand-toggle-container:not(.ft-collapsed) {transition: margin 0.25s, height 0.25s, opacity 0.25s 0.25s; opacity: 1;}.ft-symbol-font-load-test {position: fixed; left: -1000px; top: -1000px; font-size: 26px; visibility: hidden;}.ft-reg-bubble {position: absolute; bottom: 0; padding: 10px 10px 0 10px; background: #fff; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); border-radius: "+ 
X(16)+"px; max-width: calc(90vw - "+X(2*d)+"px); width: 300px; height: 200px;}.ft-left-pos .ft-reg-bubble {left: "+X(d+10+a)+"px;}.ft-right-pos .ft-reg-bubble {right: "+X(d+10+a)+"px;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-collapsed {transition: width 0.25s ease-in 0.25s, height 0.25s ease-in 0.25s, opacity 0.05s linear 0.45s, overflow 0s 0.25s, visibility 0s 0.5s; width: 0; overflow: hidden; opacity: 0; visibility: hidden;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-no-messages {height: 0 !important;}.ft-reg-bubble:not(.ft-collapsed *):not(.ft-collapsed) {transition: width 0.25s ease-out, height 0.25s ease-out, opacity 0.05s linear;}.ft-reg-bubble-content {display: flex; flex-direction: row; max-width: calc(90vw - "+ 
X(2*d)+'px); width: 300px;}.ft-collapsed .ft-reg-bubble-content {transition: opacity 0.25s; opacity: 0;}.ft-reg-bubble-content:not(.ft-collapsed *) {transition: opacity 0.25s 0.25s; opacity: 1;}.ft-reg-message-holder {flex-grow: 1; display: flex; flex-direction: column; height: auto;}.ft-reg-controls {flex-grow: 0; padding-left: 5px;}.ft-reg-bubble-close-icon {font-size: 16px;}.ft-reg-message {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; padding-bottom: 5px; margin-bottom: 5px; border-bottom: 1px solid #dadce0;}.ft-reg-message:last-of-type {border-bottom: none;}.ft-reg-message-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ft-display-none {display: none;}</style><toolbar id="ft-floating-toolbar" class="ft-container ft-hidden"><div class="ft-menu"><div class="ft-button-holder"></div><div class="ft-separator ft-collapsible ft-collapsed"><span></span></div><div class="ft-bottom-button-holder"></div><div class="ft-expand-toggle-container"><button class="ft-expand-toggle ft-styless-button" aria-controls="ft-floating-toolbar" aria-label="'+ 
ks(b)+'"><span class="google-symbols ft-expand-icon" aria-hidden="true">expand_more</span></button></div></div><div id="ft-reg-bubble" class="ft-reg-bubble ft-collapsed ft-no-messages"><div class="ft-reg-bubble-content"><div class="ft-reg-message-holder"></div><div class="ft-reg-controls"><button class="ft-reg-bubble-close ft-styless-button" aria-controls="ft-reg-bubble" aria-label="'+ks(c)+'"><span class="google-symbols ft-reg-bubble-close-icon" aria-hidden="true">close</span></button></div></div></div></toolbar><span inert class="ft-symbol-font-load-test"><span class="ft-symbol-reference google-symbols" aria-hidden="true">keyboard_double_arrow_right</span><span class="ft-text-reference" aria-hidden="true">keyboard_double_arrow_right</span></span>')} 
function Dy(a){const b=a.googleIconName,c=a.backgroundColorCss,d=a.iconColorCss;return gs('<div class="ft-button ft-collapsible ft-collapsed ft-last-button"><button class="ft-styless-button" aria-label="'+ks(a.ariaLabel)+'" style="background-color: '+ks(X(c))+'"><span class="ft-highlighter"></span><span class="google-symbols" style="color: '+ks(X(d))+'" aria-hidden="true">'+fs(b)+'</span></button><span class="ft-button-corner-info"></span></div>')};const Ey=["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200","Google Sans Text:400,500,700"];function Fy(a,b){a=new Gy(a,b,Hy(a,b));a.L();return a}function Iy(){var {nc:a}={nc:2};return 1<a?50:120}function Jy(a,b,c){0===Ky(a)&&b.classList.remove("ft-collapsed");Ly(b,c);Xo(a.win);b.classList.remove("ft-collapsed");My(a);return()=>void Ny(a,b,c)}function Oy(a){0===Py(a.g.na.Hd).length?(a.l.M?.nj(),a.l.g(null),a.g.na.Ke.g(!1),a.g.na.tg.g(!1),a.g.na.Oe.g(!1)):(a.g.na.Ke.g(!0),Qy(a))} 
function Ry(a,{Ah:b=0,On:c=0}){b=Math.max(Py(a.g.Hb).length+b,0);c=Math.max(Py(a.g.mb).length+c,0);const d=b+c;let e=50*d;0<b&&0<c&&(e+=11);e+=10*Math.max(0,d-1);d>=a.j.nc&&(e+=60);1<d&&(e+=10);return e}function Ky(a){const b=a.g.mb;return Py(a.g.Hb).length+Py(b).length} 
function My(a){const b=a.g.mb,c=a.g.separator;0<Py(a.g.Hb).length&&0<Py(b).length?c.classList.remove("ft-collapsed"):c.classList.add("ft-collapsed");Ky(a)>=a.j.nc?a.g.sg.g(!0):a.g.sg.g(!1);1<Ky(a)?a.g.mg.g(!0):a.g.mg.g(!1);0<Ky(a)?a.g.isVisible.g(!0):a.g.isVisible.g(!1);Sy(a);Ty(a)}function Ny(a,b,c){b.classList.contains("ft-removing")||(b.classList.add("ft-removing"),b.classList.add("ft-collapsed"),My(a),a.win.setTimeout(()=>{c.removeChild(b)},750))} 
function Sy(a){const b=Py(a.g.Hb).concat(Py(a.g.mb));b.forEach(c=>{c.classList.remove("ft-last-button")});Ky(a)>=a.j.nc||b[b.length-1]?.classList.add("ft-last-button")}function Ty(a){const b=Py(a.g.Hb).concat(Py(a.g.mb)).filter(c=>!c.classList.contains("ft-reg-button"));a.F.g(0<b.length)}function Uy(a){Ko(a.g.na.Hd.children,b=>{const c=a.g.na.Pd;Ny(a,b,a.g.na.Hd);const d=c.get(b);c.delete(b);d?.isDismissed.g(!0)});Oy(a)} 
function Qy(a){if(!a.l.M){var b=Vy(a.win,{googleIconName:"verified_user",ariaLabel:P(a.j.La,2),orderingIndex:0,onClick:()=>{a.g.na.tg.g(!a.g.na.isVisible.M);for(const [,c]of a.g.na.Pd)c.wg=!0;a.g.na.Oe.g(!1)},backgroundColorCss:"#fff"});b.Zc.classList.add("ft-reg-button");Jy(a,b.Zc,a.g.mb);lp(b.Oi,a.g.na.isVisible);a.l.g({Sn:b,nj:()=>void Ny(a,b.Zc,a.g.mb)})}}function Wy(a){var b=a.g.na.Oe,c=b.g;a:{for([,d]of a.g.na.Pd)if(a=d,a.showUnlessUserInControl&&!a.wg){var d=!0;break a}d=!1}c.call(b,d)} 
function Xy(a){a.g.na.Wh.listen(()=>{Uy(a)})} 
var Gy=class extends U{constructor(a,b,c){super();this.win=a;this.j=b;this.g=c;this.l=new V(null);this.F=new V(!1)}addButton(a){a=Vy(this.win,a);return Jy(this,a.Zc,this.g.Hb)}addRegulatoryMessage(a){const b=this.g.na.Hd,c=Yy(this.win,a);Ly(c.Bg,b);this.g.na.Pd.set(c.Bg,c);Oy(this);return{showUnlessUserInControl:()=>{c.showUnlessUserInControl=!0;Wy(this)},hideUnlessUserInControl:()=>{c.showUnlessUserInControl=!1;Wy(this)},isDismissed:np(c.isDismissed)}}H(){return gp(this.l.map(a=>null!=a))}C(){return gp(this.F)}A(){return[this.g.container]}i(){const a= 
this.g.gb.Ua;a.parentNode?.removeChild(a);super.i()}L(){Wp(this.win,Ey);lp(this.g.Ej,this.j.Ic);this.win.document.body.appendChild(this.g.gb.Ua);Xy(this)}}; 
function Hy(a,b){const c=Rv(a),d=c.shadowRoot;d.appendChild(ue(new ge(a.document),bs(Cy({si:P(b.La,1),Xh:P(b.La,3),Qh:50,yj:11,Rh:10,Ph:5}))));const e=lx("ft-container",d),f=lx("ft-expand-toggle",d),g=lx("ft-expand-toggle-container",d),h=new V(null);h.i(p=>{e.style.zIndex=String(p??2147483647)});const k=new V(!0);W(k,!0,()=>{e.classList.remove("ft-collapsed");f.setAttribute("aria-expanded","true")});W(k,!1,()=>{e.classList.add("ft-collapsed");f.setAttribute("aria-expanded","false")});f.addEventListener("click", 
()=>{k.g(!k.M)});const l=new V(!1);W(l,!0,()=>{g.classList.remove("ft-collapsed");e.classList.add("ft-toolbar-collapsible")});W(l,!1,()=>{g.classList.add("ft-collapsed");e.classList.remove("ft-toolbar-collapsible");k.g(!0)});const m=new V(!1);W(m,!0,()=>{e.classList.add("ft-multiple-buttons")});W(m,!1,()=>{e.classList.remove("ft-multiple-buttons")});b.position.i(p=>{if(p){p.Kf(e.style);p=p.jg();switch(p){case 0:e.classList.add("ft-left-pos");e.classList.remove("ft-right-pos");break;case 1:e.classList.add("ft-right-pos"); 
e.classList.remove("ft-left-pos");break;default:throw Error(`Unknown HorizontalAnchoring: ${p}`);}Xo(a)}});const n=new V(!1);b=fp(Zy(a,d),n,b.position.map(p=>null!==p));W(b,!0,()=>{e.classList.remove("ft-hidden")});W(b,!1,()=>{e.classList.add("ft-hidden")});b=$y(a,lx("ft-reg-bubble",d));return{container:e,Hb:lx("ft-button-holder",d),mb:lx("ft-bottom-button-holder",d),separator:lx("ft-separator",d),gb:c,Ej:h,Vn:k,sg:l,mg:m,isVisible:n,na:b}} 
function $y(a,b){const c=new V(!1),d=new V(!1),e=hp(c,d);W(e,!0,()=>{b.classList.remove("ft-collapsed")});W(e,!1,()=>{b.classList.add("ft-collapsed")});const f=new V(!1);W(f,!0,()=>{b.classList.remove("ft-no-messages")});W(f,!1,()=>{b.classList.add("ft-no-messages")});const g=lx("ft-reg-bubble-close",b),h=new rp;g.addEventListener("click",()=>{qp(h)});const k=lx("ft-reg-message-holder",b);Pp(Mp(a,k)).i(()=>{b.style.height=`${k.offsetHeight}px`});return{Hd:k,tg:c,Oe:d,isVisible:e,Ke:f,Pd:new Map,Wh:op(h)}} 
function Vy(a,b){const c=ue(new ge(a.document),bs(Dy({googleIconName:b.googleIconName,ariaLabel:b.ariaLabel,backgroundColorCss:b.backgroundColorCss||"#e2eaf6",iconColorCss:b.iconColorCss||"#3c4043"})));if(void 0!==b.cornerNumber){const d=Vd(Math.round(b.cornerNumber),0,99);lx("ft-button-corner-info",c).appendChild(a.document.createTextNode(String(d)));c.classList.add("ft-show-corner-info")}c.orderingIndex=b.orderingIndex;b.onClick&&kx("BUTTON",c).addEventListener("click",b.onClick);a=new V(!1);W(a, 
!0,()=>{c.classList.add("ft-highlighted")});W(a,!1,()=>{c.classList.remove("ft-highlighted")});return{Zc:c,Oi:a}} 
function Yy(a,b){a=new ge(a.document);var c=gs('<div class="ft-reg-message"><button class="ft-reg-message-button"></button><div class="ft-reg-message-info"></div></div>');a=ue(a,bs(c));c=lx("ft-reg-message-button",a);b.regulatoryMessage.actionButton?(c.appendChild(b.regulatoryMessage.actionButton.buttonText),c.addEventListener("click",b.regulatoryMessage.actionButton.onClick)):c.classList.add("ft-display-none");c=lx("ft-reg-message-info",a);b.regulatoryMessage.informationText?c.appendChild(b.regulatoryMessage.informationText): 
c.classList.add("ft-display-none");a.orderingIndex=b.orderingIndex;return{Bg:a,showUnlessUserInControl:!1,wg:!1,isDismissed:new V(!1)}}function Ly(a,b){a:{var c=Array.from(b.children);for(let d=0;d<c.length;++d)if(c[d].orderingIndex>=a.orderingIndex){c=d;break a}c=c.length}b.insertBefore(a,b.childNodes[c]||null)}function Py(a){return Array.from(a.children).filter(b=>!b.classList.contains("ft-removing"))} 
function Zy(a,b){const c=new V(!1),d=lx("ft-symbol-font-load-test",b);b=lx("ft-symbol-reference",d);const e=lx("ft-text-reference",d),f=Mp(a,b);jp(Pp(f).map(g=>0<g.width&&g.width<e.offsetWidth/2),!0,()=>{c.g(!0);d.parentNode?.removeChild(d);f.ma()});return c};function az(a){const b=new rp,c=Cp(a,2500,()=>void qp(b));return new bz(a,()=>void cz(a,()=>void c()),op(b))}function dz(a){const b=new MutationObserver(()=>{a.g()});b.observe(a.win.document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style"]});$o(a,()=>void b.disconnect())}function ez(a){a.win.addEventListener("resize",a.g);$o(a,()=>void a.win.removeEventListener("resize",a.g))} 
var bz=class extends U{constructor(a,b,c){super();this.win=a;this.g=b;this.l=c;this.j=!1}};function cz(a,b){b();a.setTimeout(b,1500)};function fz(a){return a.g[a.g.length-1]}var hz=class{constructor(){this.j=gz;this.g=[];this.i=new Set}add(a){if(this.i.has(a))return!1;const b=kb(this.g,a,this.j);this.g.splice(0<=b?b:-b-1,0,a);this.i.add(a);return!0}first(){return this.g[0]}has(a){return this.i.has(a)}delete(a){fb(this.g,b=>b===a);return this.i.delete(a)}clear(){this.i.clear();return this.g.splice(0,this.g.length)}size(){return this.g.length}};function iz(a){var b=a.Hc.M;let c;for(;a.j.bi()>b&&(c=a.i.first());){var d=a,e=c;jz(d,e);d.g.add(e)}for(;(d=fz(a.g))&&a.j.Ei()<=b;)kz(a,d);for(;(d=fz(a.g))&&(c=a.i.first())&&d.priority>c.priority;)b=a,e=c,jz(b,e),b.g.add(e),kz(a,d)}function kz(a,b){a.g.delete(b);a.i.add(b)&&(b.uf=a.j.addButton(b.buttonSpec));b.isInToolbar.g(!0)}function jz(a,b){b.uf&&b.uf();b.uf=void 0;a.i.delete(b);b.isInToolbar.g(!1)} 
var lz=class{constructor(a,b){this.Hc=a;this.j=b;this.g=new hz;this.i=new hz;this.l=0;this.Hc.listen(()=>void iz(this))}addButton(a){const b={buttonSpec:a.buttonSpec,priority:a.priority,Af:this.l++,isInToolbar:new V(!1)};this.g.add(b);iz(this);return{isInToolbar:np(gp(b.isInToolbar)),removeCallback:()=>{jz(this,b);this.g.delete(b);iz(this)}}}};function gz(a,b){return a.priority===b.priority?b.Af-a.Af:a.priority-b.priority};function mz(a){a=new nz(a);a.L();return a}function oz(a){if(!ix(a.win)){if(a.j.M){const b=Fo(a.win);if(b>a.g+100||b<a.g-100)a.j.g(!1),a.g=zo(a.win)}a.l&&a.win.clearTimeout(a.l);a.l=a.win.setTimeout(()=>void pz(a),200)}}function pz(a){if(!ix(a.win)){var b=zo(a.win);a.g&&a.g>b&&(a.g=b);b=Fo(a.win);b>=a.g-100&&(a.g=Math.max(a.g,b),a.j.g(!0))}} 
var nz=class extends U{constructor(a){super();this.win=a;this.j=new V(!1);this.g=0;this.l=null;this.A=()=>void oz(this)}L(){this.win.addEventListener("scroll",this.A);this.g=zo(this.win);pz(this)}i(){this.win.removeEventListener("scroll",this.A);this.j.g(!1);super.i()}};function qz(a){if(!a.g){const b=mz(a.win);a.g=gp(b.j);Zo(a,b)}return a.g}function rz(a,b){const c=qz(a),d=a.j.addRegulatoryMessage(b.messageSpec),e=W(c,!0,()=>void d.showUnlessUserInControl()),f=W(c,!1,()=>void d.hideUnlessUserInControl());W(dp(d.isDismissed),!0,()=>{e();f()})}var sz=class extends U{constructor(a,b){super();this.win=a;this.j=b;this.g=null}addRegulatoryMessage(a){jp(qz(this),!0,()=>void rz(this,a))}};function tz(a,b){a.googFloatingToolbarManager||(a.googFloatingToolbarManager=new uz(a,b));return a.googFloatingToolbarManager}function vz(a){a.g||(a.g=wz(a.win,a.Lb,a.Ic),Zo(a,a.g.Mb),Zo(a,a.g.Wg),xz(a),yz(a,a.g.Mb));return a.g}function zz(a){var b=[];a.g?.Mb?.C().A()?(b.push(()=>Az(a)),b.push(()=>Bz(a))):(b.push(()=>Bz(a)),b.push(()=>Az(a)));a.g?.Mb?.H()?.A()&&b.push(()=>{const c=T(a.win);return{position:yy({ca:Math.floor(c/3),ta:10}),Hc:0}});for(const c of b)if(b=c())return b;return null} 
function xz(a){null===a.Ic.M&&a.g?.position.g(zz(a))}function yz(a,b){const c=az(a.win);c.j||(dz(c),ez(c),c.j=!0);c.l.listen(()=>void xz(a));Zo(a,c);b.H().listen(()=>void xz(a));b.C().listen(()=>void xz(a));a.Ic.listen(()=>void xz(a))}function Az(a){var b=a.win;const c=T(a.win);return uy(b,{dc:Ay({ca:50,Ea:10}),Se:Math.floor(c/3),Cb:60,Ve:Iy(),Gd:Math.floor(c/2),nb:20},[...(a.g?.Mb.A()??[]),a.win.document.body]).je} 
function Bz(a){var b=a.win;const c=T(a.win);return uy(b,{dc:yy({ca:50,ta:10}),Se:Math.floor(c/3),Cb:60,Ve:Iy(),Gd:Math.floor(c/2),nb:40},[...(a.g?.Mb.A()??[]),a.win.document.body]).je}class uz extends U{constructor(a,b){super();this.win=a;this.Lb=b;this.g=null;this.Ic=Cz(this.win,this)}addButton(a){return vz(this).Zi.addButton(a)}addRegulatoryMessage(a){vz(this).Wg.addRegulatoryMessage(a)}} 
function wz(a,b,c){const d=new V(null),e=Fy(a,{nc:2,position:d.map(f=>f?.position??null),La:b,Ic:c});b=new lz(d.map(f=>f?.Hc||0),{addButton:f=>e.addButton(f),bi:()=>Ry(e,{}),Ei:()=>Ry(e,{Ah:1})});a=new sz(a,{addRegulatoryMessage:f=>e.addRegulatoryMessage(f)});return{Mb:e,position:d,Zi:b,Wg:a}}function Cz(a,b){const c=new hw(a),d=new V(null),e=f=>void d.g(f);$o(b,()=>{gw(c,e)});c.g.maxZIndexListeners.push(e);d.g(fw(c));return d};function Dz(a){return tz(a.win,a.La)}var Ez=class{constructor(a,b){this.win=a;this.La=b}};function Fz(a){if(a.H){var b=Dz(new Ez(a.g,a.H)).addButton({buttonSpec:{googleIconName:"search",ariaLabel:a.Ha,orderingIndex:0,onClick:()=>{Gz(a)}},priority:0});jp(dp(b.isInToolbar),!0,()=>{Hz(a)});a.g.setTimeout(()=>{b.isInToolbar.getValue()||Ur(a.j,"pfmsb")},5E3);Iz(a)}else Jz(a)} 
function Jz(a){var b=Kz(a);b=Wv(new Zv(a.g),b);b?.className.startsWith("adsbygoogle")?Ur(a.j,"pfeaa"):b?Ur(a.j,"pfeofe"):(a.Z.appendChild(a.B.Ua),a.B.shadowRoot.appendChild(me(document,(()=>{if(a.l){var c=Lz(a),d={backgroundColor:c.backgroundColor,Pb:c.Pb,offsetTop:c.Kg,Ze:c.Jg,zIndex:2147483643};c=d.zIndex;var e=d.aj,f=d.offsetTop,g=d.Ze,h=d.backgroundColor;d=d.Pb;e=void 0===e?16:e;g=void 0===g?2:g;d=void 0===d?"white":d;h="<style>.autoprose-search-button {background: "+X(void 0===h?"#000":h)+"; border-radius: "; 
h+=X(24)+"px;"+(f?"top: "+X(f)+"%;":"bottom: "+X(g)+"%;")+"border-width: 0; box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); cursor: pointer; height: "+X(48)+"px; position: fixed; right: "+X(e)+"px; width: 48px; z-index: "+X(c)+';}.autoprose-search-icon {position: relative;}</style><button class="autoprose-search-button"><div class="autoprose-search-icon">'+Bs(d)+"</div></button>";c=gs(h);return bs(c)}c=Lz(a);var k={xj:c.wj,backgroundColor:c.backgroundColor,Pb:c.Pb,offsetTop:c.Kg,Ze:c.Jg,zIndex:2147483643}; 
c=k.xj;f=k.zIndex;g=k.aj;h=k.offsetTop;d=k.Ze;e=k.backgroundColor;k=k.Pb;g=void 0===g?16:g;d=void 0===d?2:d;k=void 0===k?"white":k;e="<style>.autoprose-search-button {align-items: center; background: "+X(void 0===e?"#000":e)+"; border-radius: ";e+=X(24)+"px; border-width: 0;"+(h?"top: "+X(h)+"%;":"bottom: "+X(d)+"%;")+"box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); cursor: pointer; display: flex; height: "+X(48)+"px; line-height: 1; padding: 0 20px; position: fixed; right: "+X(g)+"px; z-index: "+X(f)+ 
";}.autoprose-search-text {color: "+X(k)+'; font-family: Google Sans, Roboto, sans-serif; font-size: 16px; margin: 10px; user-select: none;}</style><button class="autoprose-search-button"><div class="autoprose-search-icon">'+Bs(k)+'</div><div class="autoprose-search-text">'+fs(c)+"</div></button>";c=gs(e);return bs(c)})())),(b=Mz(a))?(Hz(a),Ub(b,"click",()=>{Gz(a)})):Ur(a.j,"pfmsb"),Iz(a))}function Gz(a){a.I||(Ev(1139,()=>a.G.L(),a.g),a.I=!0);Sr(a.j,"click",{});Nz(a)} 
function Hz(a){Sr(a.j,"place",{sts:"ok"});Oz(a)}function Iz(a){a.l&&kp(a.C.isVisible(),!1,()=>{a.i.contentDocument.activeElement.blur()})}function Kz(a){let b;b=a.l?50:150;var c=a.g.innerHeight;const d=a.F?20:2;c=2===a.A?.g()?(100-d)/100*c:.2*c;return{Ri:a.g.innerWidth-16-b,Bj:c,width:b,height:50}}function Lz(a){const b=a.A?.j()||void 0,c=a.A?.l()||void 0;let d,e;2===a.A?.g()?e=a.F?20:2:d=20;return{backgroundColor:b,Pb:c,Kg:d,Jg:e,wj:a.va}} 
function Mz(a){const b=a.B.shadowRoot.querySelectorAll(".autoprose-search-button")[0];return b?b:a.B.shadowRoot.querySelectorAll(".autoprose-searchbox")[0]}function Oz(a){Ub(a.g.top,"message",b=>{b.data&&"init"===b.data.action&&"AutoProseVariant"===b.data.adChannel&&(b=Pz(a),Ls(a.G,b),Qz(a),Rz(a))})}function Nz(a){Qz(a);a.C.show();Rz(a)}function Pz(a){if(a=a.i.contentDocument?.getElementsByTagName("input")[0])return a;console.warn("searchbox missing");return null} 
function Qz(a){const b=new ResizeObserver(async d=>{a.i.height=0;await new Promise(e=>a.g.requestAnimationFrame(e));a.i.height=d[0].target.scrollHeight}),c=()=>{const d=a.i.contentDocument?.documentElement;d?b.observe(d):(console.warn("iframe body missing"),setTimeout(c,1E3))};c()}function Rz(a){a.C.isVisible()&&Pz(a)?.focus({preventScroll:!0})} 
var Sz=class{constructor(a,b,c,d,e,f,g,h){this.g=a;this.l=(this.ga=h)?500>this.g.innerWidth:2===qf();this.F=!!e?.C();this.Va=!!e?.G();this.I=!1;this.Z=c;this.B=Rv(this.g);this.j=d;c=e?.B();this.pa=c?.g()||"en";this.Ra=c?.j()||"Search results from ${website}";this.va=c?.A()||"Search";this.Ha=c?.l()||"Open AutoSearch";this.T=b.replace("ca","partner");this.O=new ge(window.document);this.i=te(this.O,"IFRAME");this.G=new Ms(this.i,e?.A()||"","auto-prose",this.T,"AutoProseVariant",a.location,this.pa,this.Ra, 
f,!1,!0,!0);a=this.i;this.C=this.l?ny(this.g,a,{cf:.95,He:.95,zIndex:2147483645,rb:!0,ld:!0,ub:!1,Ja:!0}):xx(this.g,a,{wc:"min(65vw, 768px)",lc:"",vc:!1,zIndex:2147483645,rb:!0,ld:!0,ub:!1,Rd:!1,Ja:!0});this.A=this.l?e?.l():e?.j();this.H=g}L(){this.Va?Fz(this):Jz(this)}};function Tz(a,b){for(var c=0;c<b.length;c++)a.xa(b[c]);return a}function Uz(a,b){a.j=a.j?a.j:b;return a} 
class Vz{constructor(a){this.C={};this.C.c=a;this.A=[];this.j=null;this.B=[];this.F=0}ec(a){this.C.wpc=a;return this}xa(a){for(var b=0;b<this.A.length;b++)if(this.A[b]==a)return this;this.A.push(a);return this}l(a){var b=Uc(this.C);0<this.F&&(b.t=this.F);b.err=this.A.join();b.warn=this.B.join();this.j&&(b.excp_n=this.j.name,b.excp_m=this.j.message&&this.j.message.substring(0,512),b.excp_s=this.j.stack&&sl(this.j.stack,""));b.w=0<a.innerWidth?a.innerWidth:null;b.h=0<a.innerHeight?a.innerHeight:null; 
return b}};let Wz,Xz;const Yz=new kl(r);((a,b=!0)=>{Wz=a||new io;"number"!==typeof r.google_srt&&(r.google_srt=Math.random());ho(Wz,r.google_srt);Xz=new ul(Wz,b,Yz);Xz.l(!0);"complete"==r.document.readyState?r.google_measure_js_timing||il(Yz):Yz.g&&Ub(r,"load",()=>{r.google_measure_js_timing||il(Yz)})})();var Zz=(a,b)=>Xz.Lc(a,b),$z=(a,b)=>Xz.Oa(a,b),aA=(a,b,c)=>{const d=go();!b.eid&&d.length&&(b.eid=d.toString());tl(Wz,a,b,!0,c)},bA=(a,b)=>Xz.Ba(a,b,void 0,void 0),cA=(a,b,c)=>{Xz.Pa(a,b,c)};function Tr(a,b,c){let d=b.Qa;b.Xa&&v(wt)&&(d=1,"r"in c&&(c.r+="F"));0>=d||(!b.Ta||"pvc"in c||(c.pvc=Cf(a.g)),aA(b.Wa,c,d))}function dA(a,b,c){c=c.l(a.g);b.Ta&&(c.pvc=Cf(a.g));0<=b.Qa&&(c.r=b.Qa,Tr(a,b,c))}var eA=class{constructor(a){this.g=a}};function fA(a){const b=a.i?.g()?.j()||0,c=a.j.document,d=c.createElement("div");d.classList.add("auto-prose-wrapper");c.body.appendChild(d);Ev(1138,()=>(new Sz(a.j,a.A,d,a.l,a.i,b,C(a.g,ir,33)?.g()?.i()??null,C(a.g,Yq,25)?.g()||!1)).L(),a.j)}async function gA(a){await new Promise(b=>{setTimeout(()=>{b(fA(a))})})}var hA=class{constructor(a,b,c,d){this.j=a;this.g=c;this.i=C(this.g,dr,31);this.l=new Vr(a,b,this.i||new dr);this.A=d}};function iA(a,b){Tr(a.i,Or,{...b,evt:"place",vh:T(a.win),eid:a.g.g()?.g()||0,hl:a.g.j()?.g()||""})}function jA(a,b,c){b={sts:b};c&&(b.excp_n=c.name,b.excp_m=c.message&&c.message.substring(0,512),b.excp_s=c.stack&&sl(c.stack,"")||"");iA(a,b)}var kA=class{constructor(a,b,c){this.win=a;this.i=b;this.g=c}};var lA=class{constructor(a){this.g=a}Ma(a){const b=a.document.createElement("div");A(b,Ov(a));A(b,{width:"100%","max-width":"1000px",margin:"auto"});b.appendChild(this.g);const c=a.document.createElement("div");A(c,Ov(a));A(c,{width:"100%","text-align":"center",display:"block",padding:"5px 5px 2px","box-sizing":"border-box","background-color":"#FFF"});c.appendChild(b);return c}};var nA=(a,b,c)=>{if(!b||!c)return!1;var d=b.parentElement;const e=c.parentElement;if(!d||!e||d!=e)return!1;d=0;for(b=b.nextSibling;10>d&&b;){if(b==c)return!0;if(mA(a,b))break;b=b.nextSibling;d++}return!1}; 
const mA=(a,b)=>{if(3==b.nodeType)return 3==b.nodeType?(b=b.data,a=lc(b,"&")?ae(b,a.document):b,a=/\S/.test(a)):a=!1,a;if(1==b.nodeType){var c=a.getComputedStyle(b);if("0"==c.opacity||"none"==c.display||"hidden"==c.visibility)return!1;if((c=b.tagName)&&So.contains(c.toUpperCase()))return!0;b=b.childNodes;for(c=0;c<b.length;c++)if(mA(a,b[c]))return!0}return!1}; 
var oA=a=>{if(460<=a)return a=Math.min(a,1200),Math.ceil(800>a?a/4:200);a=Math.min(a,600);return 420>=a?Math.ceil(a/1.2):Math.ceil(a/1.91)+130};const pA=class{constructor(){this.g={clearBoth:!0}}i(a,b,c,d){return tv(d.document,a,null,null,this.g,b)}j(a){return oA(Math.min(a.screen.width||0,a.screen.height||0))}};const qA=class{constructor(a){this.g=a}i(a,b,c,d){return tv(d.document,a,null,null,this.g,b)}j(){return null}};class rA{constructor(a){this.i=a}g(a){a=Math.floor(a.zc());const b=oA(a);return new Cq(["ap_container"],{google_reactive_ad_format:27,google_responsive_auto_format:16,google_max_num_ads:1,google_ad_type:this.i,google_ad_format:a+"x"+b,google_ad_width:a,google_ad_height:b})}};const sA=class{constructor(a,b){this.l=a;this.j=b}i(){return this.l}g(){return this.j}};const tA=class{constructor(a){this.g=a}i(a,b,c,d){var e=0<D(this.g,nr,9).length?D(this.g,nr,9)[0]:null,f=Kv(C(this.g,or,3),e);if(!e)return null;if(e=L(e,1)){d=d.document;var g=c.tagName;c=te(new ge(d),g);c.style.clear=f.clearBoth?"both":"none";"A"==g&&(c.style.display="block");c.style.padding="0px";c.style.margin="0px";f.Kd&&sv(c.style,f.Kd);d=te(new ge(d),"INS");f.kc&&sv(d.style,f.kc);c.appendChild(d);f={pb:c,wa:d};f.wa.setAttribute("data-ad-type","text");f.wa.setAttribute("data-native-settings-key", 
e);vv(f,a,null,b);a=f}else a=null;return a}j(){var a=0<D(this.g,nr,9).length?D(this.g,nr,9)[0]:null;if(!a)return null;a=D(a,mr,3);for(var b=0;b<a.length;b++){var c=a[b];if("height"==L(c,1)&&0<parseInt(L(c,2),10))return parseInt(L(c,2),10)}return null}};const uA=class{constructor(a){this.g=a}i(a,b,c,d){if(!this.g)return null;const e=this.g.google_ad_format||null,f=this.g.google_ad_slot||null;if(c=c.style){var g=[];for(let h=0;h<c.length;h++){const k=c.item(h);"width"!==k&&"height"!==k&&g.push({property:k,value:c.getPropertyValue(k)})}c={kc:g}}else c={};a=tv(d.document,a,f,e,c,b);a.wa.setAttribute("data-pub-vars",JSON.stringify(this.g));return a}j(){return this.g?parseInt(this.g.google_ad_height,10)||null:null}Ac(){return this.g}};class vA{constructor(a){this.i=a}g(){return new Cq([],{google_ad_type:this.i,google_reactive_ad_format:26,google_ad_format:"fluid"})}};const wA=class{constructor(a,b){this.l=a;this.j=b}g(){return this.j}i(a){a=this.l.query(a.document);return 0<a.length?a[0]:null}};function xA(a,b,c){const d=[];for(let q=0;q<a.length;q++){var e=a[q];var f=q,g=b,h=c,k=e.ja();if(k){var l=Gv(k);if(l){var m=M(e,2);m=Lv[m];var n=void 0===m?null:m;if(null===n)e=null;else{m=(m=C(e,or,3))?bi(m,3):null;l=new wA(l,n);n=ci(e,10,gh,2).slice(0);null!=vi(k,5)&&n.push(1);var p=h?h:{};h=vi(e,12);k=Zh(e,Aq,4)?C(e,Aq,4):null;1==M(e,8)?(p=p.Lh||null,e=new yA(l,new qA(Kv(C(e,or,3),null)),p,m,0,n,k,g,f,h,e)):e=2==M(e,8)?new yA(l,new tA(e),p.Li||new vA("text"),m,1,n,k,g,f,h,e):null}}else e=null}else e= 
null;null!==e&&d.push(e)}return d}function zA(a){return a.A}function AA(a){return a.va}function BA(a){return v(ft)?(a.O||(a.O=a.F.i(a.j)),a.O):a.F.i(a.j)}function CA(a){var b=a.H;a=a.j.document.createElement("div");v(ft)?a.className="google-auto-placed-ad-placeholder":a.className="google-auto-placed";var c=a.style;c.textAlign="center";c.width="100%";c.height="0px";c.clear=b?"both":"none";return a}function DA(a){return a.C instanceof uA?a.C.Ac():null} 
function EA(a,b,c){Mo(a.I,b)||a.I.set(b,[]);a.I.get(b).push(c)}function FA(a,b){a.A=!0;v(ft)&&(a.i&&fv(a.i),a.i=null);null!=b&&a.Z.push(b)}function GA(a){return dv(a.j.document,a.H||!1)}function HA(a){return a.C.j(a.j)}function IA(a,b=null,c=null){return new yA(a.F,b||a.C,c||a.T,a.H,a.Rb,a.Dc,a.Td,a.j,a.pa,a.G,a.l,a.B,a.ga)} 
class yA{constructor(a,b,c,d,e,f,g,h,k,l=null,m=null,n=null,p=null){this.F=a;this.C=b;this.T=c;this.H=d;this.Rb=e;this.Dc=f;this.Td=g?g:new Aq;this.j=h;this.pa=k;this.G=l;this.l=m;(a=!m)||(a=!(m.ja()&&null!=vi(m.ja(),5)));this.va=!a;this.B=n;this.ga=p;this.Z=[];this.A=!1;this.I=new Qo;this.O=this.i=null}da(){return this.j}g(){return this.F.g()}};function JA(a,b,c,d,e,f){const g=zq();return new yA(new sA(c,e),new pA,new rA(a),!0,2,[],g,d,null,null,null,b,f)}function KA(a,b,c,d,e){const f=zq();return new yA(new sA(b,d),new qA({clearBoth:!0}),null,!0,2,[],f,c,null,null,null,a,e)};var LA=class{constructor(a,b,c){this.articleStructure=a;this.element=b;this.win=c}da(){return this.win}A(a){return JA(a,this.articleStructure,this.element,this.win,3,null)}j(){return KA(this.articleStructure,this.element,this.win,3,null)}};const MA={TABLE:{sc:new fq([1,2])},THEAD:{sc:new fq([0,3,1,2])},TBODY:{sc:new fq([0,3,1,2])},TR:{sc:new fq([0,3,1,2])},TD:{sc:new fq([0,3])}};function NA(a,b,c,d){const e=c.childNodes;c=c.querySelectorAll(b);b=[];for(const f of c)c=Ua(e,f),0>c||b.push(new OA(a,[f],c,f,3,pe(f).trim(),d));return b} 
function PA(a,b,c){let d=[];const e=[],f=b.childNodes,g=f.length;let h=0,k="";for(let n=0;n<g;n++){var l=f[n];if(1==l.nodeType||3==l.nodeType){if(1!=l.nodeType)var m=null;else"BR"==l.tagName?m=l:(m=c.getComputedStyle(l).getPropertyValue("display"),m="inline"==m||"inline-block"==m?null:l);m?(d.length&&k&&e.push(new OA(a,d,n-1,m,0,k,c)),d=[],h=n+1,k=""):(d.push(l),l=pe(l).trim(),k+=l&&k?" "+l:l)}}d.length&&k&&e.push(new OA(a,d,h,b,2,k,c));return e}function QA(a,b){return a.g-b.g} 
class OA{constructor(a,b,c,d,e,f,g){this.l=a;this.gd=b.slice(0);this.g=c;this.Xd=d;this.Yd=e;this.B=f;this.i=g}da(){return this.i}A(a){return JA(a,this.l,this.Xd,this.i,this.Yd,this.g)}j(){return KA(this.l,this.Xd,this.i,this.Yd,this.g)}};function RA(a){return gb(a.B?PA(a.i,a.g,a.j):[],a.A?NA(a.i,a.A,a.g,a.j):[]).filter(b=>{var c=b.Xd.tagName;c?(c=MA[c.toUpperCase()],b=null!=c&&c.sc.contains(b.Yd)):b=!1;return!b})}class SA{constructor(a,b,c){this.g=a;this.A=b.ed;this.B=b.fg;this.i=b.articleStructure;this.j=c;this.l=b.If}};function TA(a,b){if(!b)return!1;const c=Ba(b),d=a.g.get(c);if(null!=d)return d;if(1==b.nodeType&&("UL"==b.tagName||"OL"==b.tagName)&&"none"!=a.i.getComputedStyle(b).getPropertyValue("list-style-type"))return a.g.set(c,!0),!0;b=TA(a,b.parentNode);a.g.set(c,b);return b}function UA(a,b){return bb(b.gd,c=>TA(a,c))}class VA{constructor(a){this.g=new Qo;this.i=a}};class WA{constructor(a,b){this.l=a;this.g=[];this.i=[];this.j=b}};var YA=(a,{rg:b=!1,mf:c=!1,Fg:d=c||v(et)?2:3,kf:e=null}={})=>{a=RA(a);return XA(a,{rg:b,mf:c,Fg:d,kf:e})},XA=(a,{rg:b=!1,mf:c=!1,Fg:d=c||v(et)?2:3,kf:e=null}={})=>{if(2>d)throw Error("minGroupSize should be at least 2, found "+d);var f=a.slice(0);f.sort(QA);a=[];b=new WA(b,e);for(const g of f){e={Md:g,zd:51>g.B.length?!1:null!=b.j?!UA(b.j,g):!0};if(b.l||e.zd)b.g.length?(f=b.g[b.g.length-1].Md,f=nA(f.da(),f.gd[f.gd.length-1],e.Md.gd[0])):f=!0,f?(b.g.push(e),e.zd&&b.i.push(e.Md)):(b.g=[e],b.i=e.zd? 
[e.Md]:[]);if(b.i.length>=d){e=b;f=c||v(et)?0:1;if(0>f||f>=e.i.length)e=null;else{for(f=e.i[f];e.g.length&&!e.g[0].zd;)e.g.shift();e.g.shift();e.i.shift();e=f}e&&a.push(e)}}return a};var $A=(a,b,c=!1)=>{a=ZA(a,b);const d=new VA(b);return $p(a,e=>YA(e,{mf:c,kf:d}))},aB=(a,b)=>{a=ZA(a,b);const c=new VA(b);return $p(a,d=>{if(d.l){var e=d.i;var f=d.j;d=d.g.querySelectorAll(d.l);var g=[];for(var h of d)g.push(new LA(e,h,f));e=g}else e=[];d=e.slice(0);if(d.length){e=[];f=d[0];for(g=1;g<d.length;g++){const m=d[g];h=f;b:{if(h.element.hasAttributes())for(l of h.element.attributes)if("style"===l.name.toLowerCase()&&l.value.toLowerCase().includes("background-image")){var k=!0;break b}k= 
h.element.tagName;k="IMG"===k||"SVG"===k}(k||1<h.element.textContent.length)&&!TA(c,f.element)&&nA(m.da(),f.element,m.element)&&e.push(f);f=m}var l=e}else l=[];return l})},ZA=(a,b)=>{const c=new Qo;a.forEach(d=>{var e=Gv(C(d,rq,1));if(e){var f=e.toString();Mo(c,f)||c.set(f,{articleStructure:d,Eh:e,ed:null,fg:!1,If:null});e=c.get(f);(f=(f=C(d,rq,2))?L(f,7):null)?e.ed=e.ed?e.ed+","+f:f:e.fg=!0;d=C(d,rq,4);e.If=d?L(d,7):null}});return Po(c).map(d=>{const e=d.Eh.query(b.document);return e.length?new SA(e[0], 
d,b):null}).filter(d=>null!=d)};var bB=a=>a?.google_ad_slot?gq(new sq(1,{zh:a.google_ad_slot})):iq(Error("Missing dimension when creating placement id")),dB=a=>{switch(a.Rb){case 0:case 1:var b=a.l;null==b?a=null:(a=b.ja(),null==a?a=null:(b=M(b,2),a=null==b?null:new sq(0,{Jf:[a],Xg:b})));return null!=a?gq(a):iq(Error("Missing dimension when creating placement id"));case 2:return a=cB(a),null!=a?gq(a):iq(Error("Missing dimension when creating placement id"));default:return iq(Error("Invalid type: "+a.Rb))}}; 
const cB=a=>{if(null==a||null==a.B)return null;const b=C(a.B,rq,1),c=C(a.B,rq,2);if(null==b||null==c)return null;const d=a.ga;if(null==d)return null;a=a.g();return null==a?null:new sq(0,{Jf:[b,c],Ki:d,Xg:Mv[a]})};function eB(a){const b=DA(a.ha);return(b?bB(b):dB(a.ha)).map(c=>vq(c))}function fB(a){a.g=a.g||eB(a);return a.g}function gB(a,b){if(a.ha.A)throw Error("AMA:AP:AP");iv(b,a.ja(),a.ha.g());FA(a.ha,b)}const hB=class{constructor(a,b,c){this.ha=a;this.i=b;this.ka=c;this.g=null}ja(){return this.i}fill(a,b){var c=this.ha;(a=c.C.i(a,b,this.i,c.j))&&gB(this,a.pb);return a}};function iB(a,b){return Fv(()=>{if(v(ft)){var c=[],d=[];for(var e=0;e<a.length;e++){var f=a[e],g=BA(f);if(g){if(!f.i&&!f.A){var h=null;try{var k=BA(f);if(k){h=CA(f);iv(h,k,f.g());var l=h}else l=null}catch(q){throw fv(h),q;}f.i=l}(h=f.i)&&d.push({ij:f,anchorElement:g,vi:h})}}if(0<d.length)for(l=Fo(b),k=Go(b),e=0;e<d.length;e++){const {ij:q,anchorElement:x,vi:z}=d[e];f=jB(z,k,l);c.push(new hB(q,x,f))}l=c}else{l=[];k=[];try{const q=[];for(let x=0;x<a.length;x++){var m=a[x],n=BA(m);n&&q.push({Qg:m,anchorElement:n})}for(n= 
0;n<q.length;n++){m=k;g=m.push;{var p=q[n];const x=p.anchorElement,z=p.Qg,G=CA(z);try{iv(G,x,z.g()),h=G}catch(E){throw fv(G),E;}}g.call(m,h)}c=Fo(b);d=Go(b);for(g=0;g<k.length;g++)e=jB(k[g],d,c),f=q[g],l.push(new hB(f.Qg,f.anchorElement,e))}finally{for(c=0;c<k.length;c++)fv(k[c])}}return l},b)}function jB(a,b,c){a=a.getBoundingClientRect();return new Rp(a.left+b,a.top+c,a.right-a.left)};const kB={1:"0.5vp",2:"300px"},lB={1:700,2:1200},mB={[1]:{hh:"3vp",pf:"1vp",gh:"0.3vp"},[2]:{hh:"900px",pf:"300px",gh:"90px"}};function nB(a,b,c){var d=oB(a),e=T(a)||lB[d],f=void 0;c&&(f=(c=(c=pB(D(c,Lq,2),d))?C(c,Jq,7):void 0)?qB(c,e):void 0);c=f;f=oB(a);a=T(a)||lB[f];const g=rB(mB[f].pf,a);a=null===g?sB(f,a):new tB(g,g,uB(g,8),8,.3,c);c=rB(mB[d].hh,e);f=rB(mB[d].pf,e);d=rB(mB[d].gh,e);e=a.j;c&&d&&f&&void 0!==b&&(e=.5>=b?f+(1-2*b)*(c-f):d+(2-2*b)*(f-d));return new tB(e,e,uB(e,a.i),a.i,a.l,a.g)} 
function vB(a,b){const c=a.Nb();a=ai(a,5);return null==c||null==a?b:new tB(a,0,[],c,1)}function wB(a,b){const c=oB(a);a=T(a)||lB[c];if(!b)return sB(c,a);if(b=pB(D(b,Lq,2),c))if(b=xB(b,a))return b;return sB(c,a)}function yB(a){const b=oB(a);a=T(a)||lB[b];return sB(b,a)}function zB(a,b){let c={Jc:a.j,wb:a.B};for(let d of a.A)d.adCount<=b&&(c=d.Oc);return c} 
function AB(a,b,c){var d=bi(b,2);b=C(b,Lq,1);var e=oB(c);var f=T(c)||lB[e];c=rB(b?.A(),f)??a.j;e=rB(b?.l(),f)??a.B;d=d?[]:BB(b?.g(),f)??a.A;const g=b?.Nb()??a.i,h=b?.j()??a.l;a=(b?.B()?qB(C(b,Jq,7),f):null)??a.g;return new tB(c,e,d,g,h,a)} 
function CB(a,b){var c=oB(b);const d=new Mq,e=new Lq;let f=!1;var g=w(lt);0<=g&&(Yi(e,4,g),f=!0);g=null;1===c?(c=w(ot),0<=c&&(g=c+"vp")):(c=w(nt),0<=c&&(g=c+"px"));null!==g&&(aj(e,2,g),f=!0);c=v(qt)?"0px":null;null!==c&&(aj(e,5,c),f=!0);if(v(st))Wi(d,2,!0),f=!0;else if(null!==c||null!==g){const m=[];for(const n of a.A){var h=m,k=h.push;var l=new Kq;l=Yi(l,1,n.adCount);l=aj(l,3,c??n.Oc.wb+"px");l=aj(l,2,g??n.Oc.Jc+"px");k.call(h,l)}ti(e,3,m)}return f?(F(d,1,e),AB(a,d,b)):a} 
class tB{constructor(a,b,c,d,e,f){this.j=a;this.B=b;this.A=c.sort((g,h)=>g.adCount-h.adCount);this.i=d;this.l=e;this.g=f}Nb(){return this.i}}function pB(a,b){for(let c of a)if(M(c,1)==b)return c;return null}function BB(a,b){if(void 0===a)return null;const c=[];for(let d of a){a=vi(d,1);const e=rB(L(d,2),b);if("number"!==typeof a||null===e)return null;c.push({adCount:a,Oc:{Jc:e,wb:rB(L(d,3),b)}})}return c} 
function xB(a,b){const c=rB(L(a,2),b),d=rB(L(a,5),b);if(null===c)return null;const e=vi(a,4);if(null==e)return null;var f=a.g();f=BB(f,b);if(null===f)return null;const g=C(a,Jq,7);b=g?qB(g,b):void 0;return new tB(c,d,f,e,ai(a,6),b)}function sB(a,b){a=rB(kB[a],b);return v(it)?new tB(null===a?Infinity:a,null,[],8,.3):new tB(null===a?Infinity:a,null,[],3,null)}function rB(a,b){if(!a)return null;const c=parseFloat(a);return isNaN(c)?null:a.endsWith("px")?c:a.endsWith("vp")?c*b:null} 
function oB(a){a=900<=xo(a);return ve()&&!a?1:2}function uB(a,b){if(4>b)return[];const c=Math.ceil(b/2);return[{adCount:c,Oc:{Jc:2*a,wb:2*a}},{adCount:c+Math.ceil((b-c)/2),Oc:{Jc:3*a,wb:3*a}}]}function qB(a,b){const c=rB(L(a,2),b)||0,d=vi(a,3)||1;return{Gg:c,Ag:d,mc:rB(L(a,1),b)||0}};function DB(a,b,c){return po({top:a.g.top-(c+1),right:a.g.right+(c+1),bottom:a.g.bottom+(c+1),left:a.g.left-(c+1)},b.g)}function EB(a){if(!a.length)return null;const b=qo(a.map(c=>c.g));a=a.reduce((c,d)=>c+d.i,0);return new FB(b,a)}class FB{constructor(a,b){this.g=a;this.i=b}};function GB(a=null){({googletag:a}=a??window);return a?.apiReady?a:void 0};var MB=(a,b)=>{var c=hb(b.document.querySelectorAll(".google-auto-placed"));const d=HB