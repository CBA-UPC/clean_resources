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
	var ghmxy_hitcollector='gazeta.hit.gemius.pl';
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
umbered_image{position:relative}#gazeta_article_body .numbered_image img,#pagetype_art_blog #article_body .numbered_image img{margin:0}#gazeta_article_body .numbered_image span{font-size:10px;font-weight:bold;line-height:normal;background:#e1e1e1;background:rgba(225,225,225,0.8);position:absolute;left:0;top:8px;padding:2px 0;min-width:16px;text-align:center;color:#000}#gazeta_article a.external_link,#artykul a.external_link,#gazeta_article a.external_link:hover,#artykul a.external_link:hover{position:relative;font-weight:normal;color:#333 !important;text-decoration:none;border-bottom:none;background:0}#gazeta_article a.external_link:after,#artykul a.external_link:after{position:absolute;bottom:0;left:0;width:100%;content:"";display:block;border-bottom:1px dotted #888;height:0px}#article_body .art_content .art_aside{margin:30px 20px;border-left:2px solid #dededc;padding:18px 0 18px 15px;font-size:15px}#article_body .art_content .art_sub_title{font-weight:bold;margin:10px 0}#article_body .art_content .art_strong{font-weight:bold}#article_body .art_content .art_link:hover{color:#fff;background:#003966 !important}#article_body .art_content .art_blockquote{font:italic 22px Georgia,serif}#article_body .art_content .art_blockquote:before{content:'\201C'}#article_body .art_content .art_blockquote:after{content:'\201D'}#article_body .art_content .art_paragraph{word-wrap:break-word;padding-bottom:10px}#article_body .art_content .art_oList,.art_oList{margin-bottom:15px}#article_body .art_content .art_oList{list-style:decimal !important}#article_body .art_content .art_uList{list-style:disc !important}#article_body .art_content .art_list_el{margin-left:25px !important}#article_body .art_content .art_embed_yt{width:100%}#article_body .art_content .photoAuthor{display:block}#article_body .art_interview_question{margin:0 0 6px;font:700 19px/22px Arial,sans-serif}ul.searchHint{display:none;position:absolute;background:#fff;border:solid #999;border-width:0 1px 1px;padding:2px 4px}ul.searchHint li{font-size:12px;line-height:17px;padding:2px 4px;cursor:pointer}ul.searchHint li.active{background:#fca}.gazeta_rtc2012_body .entry:after,.gazeta_rtc2012_body .content footer:after,#gazeta_rtc2012_navigation:after{content:'.';display:block;height:0;width:0;visibility:hidden;clear:both}.mod_gazeta_rtc2012_info .links a,#gazeta_rtc2012_sport #gr_more_info a span,.mod_gamecenter2012 #gr_more_info a span,.gazeta_rtc2012_body .content footer a[data-action="commentsToggle"],.gazeta_rtc2012_body .content footer .fb a,.gazeta_rtc2012_body .toButtons li span,.gazeta_rtc2012_body .toButtons li button em,.gazeta_rtc2012_body header .imgw .ico,.gazeta_rtc2012_body .author.change span:first-child,#gazeta_rtc2012_navigation a,#gazeta_rtc2012_navigation span{background:url('https://static.im-g.pl/i/obrazki/rtc2012/sprite.1.2.png') no-repeat 0 1500px}h1#gazeta_rtc2012_header{font:bold 26px Arial,sans-serif;color:#000}h1#gazeta_rtc2012_header span{font:bold 22px Arial,sans-serif;color:#fff;text-transform:uppercase;background:#bf1426;padding:0 4px;display:inline-block}#gazeta_rtc2012_navigation{font:12px/31px Arial,sans-serif;border:1px solid #e2e2e2;border-width:1px 0;margin:20px 0 -10px}#gazeta_rtc2012_navigation .c0{float:left}#gazeta_rtc2012_navigation .c1{float:right}#gazeta_rtc2012_navigation .c0 a{padding-left:13px;background-position:0 -295px}#gazeta_rtc2012_navigation .c1 .prev{border-right:1px solid #e6e6e6;padding:0 8px 0 11px;background-position:0 -316px}#gazeta_rtc2012_navigation .c1 .next{border-left:1px solid #dfdfdf;padding:0 11px 0 8px;background-position:100% -356px}#gazeta_rtc2012_navigation .c1 span{color:#ababab}#gazeta_rtc2012_navigation .c1 span.prev{background-position:0 -336px}#gazeta_rtc2012_navigation .c1 span.next{background-position:100% -376px}#gazeta_rtc2012_indicator div{position:fixed;left:0;top:-50px;width:100%;z-index:100}#gazeta_rtc2012_indicator p{position:absolute;left:0;top:0;width:100%;text-align:center}#gazeta_rtc2012_indicator span{display:inline-block;height:38px;color:#002a70;font:bold 16px/38px Arial,sans-serif;padding:0 20px;background:#ffeca3;border:1px solid #fad898;border-radius:2px;-moz-box-shadow:0 0 8px 0 rgba(0,0,0,0.3);-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,0.3);box-shadow:0 0 8px 0 rgba(0,0,0,0.3)}#gazeta_rtc2012_indicator span:hover{background:#fff1bb;cursor:pointer}#gazeta_rtc2012_older_indicator{background:#fff;margin-left:90px}#gazeta_rtc2012_older_indicator.loading{background:url('https://static.im-g.pl/i/obrazki/rtc2012/loader.gif') no-repeat 50% 50%;height:16px}.gazeta_rtc2012_body > ul{margin:0;padding:0}.gazeta_rtc2012_body > ul > li{padding:10px 0;margin-top:20px;list-style:none}.gazeta_rtc2012_body > ul > li.new{background:#fff2c7;display:none}.gazeta_rtc2012_body > ul > li.old{display:none}.gazeta_rtc2012_body article.entry header{float:left;width:78px;padding-right:10px;border-right:2px solid #e6e6e6;line-height:normal;margin-bottom:0}.gazeta_rtc2012_body .urgent article.entry header,.gazeta_rtc2012_body .urgent article.entry .content,.gazeta_rtc2012_body .urgent article.mod_comments{border-color:#a90000}.gazeta_rtc2012_body .em article.entry header,.gazeta_rtc2012_body .em article.entry .content,.gazeta_rtc2012_body .em article.mod_comments{border-color:#a90000}.gazeta_rtc2012_body .goal article.entry header,.gazeta_rtc2012_body .goal article.entry .content,.gazeta_rtc2012_body .goal article.mod_comments{border-color:#bbd045}.gazeta_rtc2012_body .matchEnd article.entry header,.gazeta_rtc2012_body .matchEnd article.entry .content,.gazeta_rtc2012_body .matchEnd article.mod_comments{border-color:#383f4c}.gazeta_rtc2012_body .correspondent article.entry header,.gazeta_rtc2012_body .correspondent article.entry .content,.gazeta_rtc2012_body .correspondent article.mod_comments{border-color:#383f4c}.gazeta_rtc2012_body .power article.entry header,.gazeta_rtc2012_body .power article.entry .content,.gazeta_rtc2012_body .power article.mod_comments{border-color:#383f4c}.gazeta_rtc2012_body article.entry header p{margin:-2px 0 1px;font:bold 12px Arial,sans-serif;color:#383f4c;word-wrap:break-word}.gazeta_rtc2012_body .goal article.entry header p{color:#bbd045}.gazeta_rtc2012_body .urgent article.entry header p,.gazeta_rtc2012_body .em article.entry header p{color:#a90000}.gazeta_rtc2012_body article.entry header p + time,.gazeta_rtc2012_body article.entry header p + .time{margin-top:0}.gazeta_rtc2012_body article.entry header time,#page .gazeta_rtc2012_body article.entry header .time{display:block;font-size:14px;font-weight:normal;margin-top:-2px}.gazeta_rtc2012_body article.entry header time a,.gazeta_rtc2012_body article.entry header .time a{color:#626262}.gazeta_rtc2012_body article.entry header time a:hover,.gazeta_rtc2012_body article.entry header .time a:hover{background:0;text-decoration:underline}.gazeta_rtc2012_body article.entry header .imgw{margin-top:7px}.gazeta_rtc2012_body article.entry header .imgw :first-child{display:block;width:40px;height:40px}.gazeta_rtc2012_body header .ico.wyborcza{background-position:0 -420px}.gazeta_rtc2012_body header .ico.wyborczaBiz{background-position:0 -465px}.gazeta_rtc2012_body header .ico.tokfm{background-position:0 -510px}.gazeta_rtc2012_body header .ico.twitter{background-position:0 -555px}.gazeta_rtc2012_body header .ico.facebook{background-position:0 -600px}.gazeta_rtc2012_body header .ico.mail{background-position:0 -645px}.gazeta_rtc2012_body header .ico.quote{background-position:0 -690px}.gazeta_rtc2012_body header .ico.correspondent{background-position:0 -735px}.gazeta_rtc2012_body header .ico.change{background-position:0 -780px}.gazeta_rtc2012_body header .ico.goal{background-position:0 -825px}.gazeta_rtc2012_body header .ico.yellowCard{background-position:0 -870px}.gazeta_rtc2012_body header .ico.redCard{background-position:0 -915px}.gazeta_rtc2012_body header .ico.bronzeMedal{background-position:0 -960px}.gazeta_rtc2012_body header .ico.silverMedal{background-position:0 -1005px}.gazeta_rtc2012_body header .ico.goldMedal{background-position:0 -1050px}.gazeta_rtc2012_body header .ico.extraTime{background-position:0 -1095px}.gazeta_rtc2012_body header .ico.cup{background-position:0 -1140px}.gazeta_rtc2012_body article.entry .content{float:right;width:520px;border-left:2px solid #e6e6e6;padding-left:10px;margin-left:-2px}.gazeta_rtc2012_body article.entry .body,.gazeta_rtc2012_body article.entry .body p{font:16px/21px Arial,sans-serif;color:#1e1e1e}.gazeta_rtc2012_body article.entry .author{font:11px Arial,sans-serif;color:#383838;text-transform:none}.gazeta_rtc2012_body article.entry .author img{height:18px;width:18px;vertical-align:middle;margin-right:1px}.gazeta_rtc2012_body article.entry .author b{vertical-align:middle}.gazeta_rtc2012_body article.entry .author.change span:first-child{color:#969696;margin-right:10px;padding-right:22px;background-position:100% -396px}.gazeta_rtc2012_body article.entry .author + .module{margin-top:8px}.gazeta_rtc2012_body .module{margin-top:10px;overflow:hidden}.gazeta_rtc2012_body .module p{margin-top:10px}.gazeta_rtc2012_body .module:first-child,.gazeta_rtc2012_body .module > :first-child{margin-top:0}.gazeta_rtc2012_body .module:first-child > p:first-child{margin-top:-4px}.gazeta_rtc2012_body .module .imgw img{display:block}.gazeta_rtc2012_body article.entry .module .imgw p{margin:0;color:#666;font:11px Arial,sans-serif;padding:2px 0 4px}.gazeta_rtc2012_body .module p + .flash{margin-top:10px}.gazeta_rtc2012_body .module > table{width:100%;border-collapse:collapse}.gazeta_rtc2012_body .module > table th{color:#d8d8d8;background:#535a67;font:bold 11px Arial,sans-serif;text-align:left;padding:4px 7px 5px;vertical-align:top}.gazeta_rtc2012_body .module > table td{color:#1d1d1d;font:12px Arial,sans-serif;border-bottom:2px solid #f2f2f2;padding:4px 7px 5px;vertical-align:top}.gazeta_rtc2012_body .module > ul{font:12px Arial,sans-serif}.gazeta_rtc2012_body .module > ul li{margin-top:6px;padding-left:10px;background:url('https://static.im-g.pl/i/obrazki/rtc2012/bullet.png') no-repeat 0 6px}.gazeta_rtc2012_body .module > ul li:first-child{margin:0}.gazeta_rtc2012_body .module.article .imgw{float:left;margin:0 10px 0 0}.gazeta_rtc2012_body .module.article .imgw img{width:140px}.gazeta_rtc2012_body .module.article .content{border:0;float:none;margin:0;padding:0;width:auto;overflow:hidden}.gazeta_rtc2012_body .module.article .content .title{margin:-4px 0 0;font-weight:bold}.gazeta_rtc2012_body article.entry .content footer{margin-top:10px}.gazeta_rtc2012_body article.entry .content footer .c0{float:left;font:11px Arial,sans-serif;padding-top:3px}.gazeta_rtc2012_body article.entry .content footer a[data-action="commentsToggle"]{float:left;padding-left:16px;margin-right:10px;background-position:0 -179px}.gazeta_rtc2012_body article.entry .content footer .fb{float:left}.gazeta_rtc2012_body article.entry .content footer .fb a{padding-left:16px;background-position:0 -209px}.gazeta_rtc2012_body article.entry .content footer .c1{float:right}.gazeta_rtc2012_body article.entry .content footer a:hover{text-decoration:underline}.gazeta_rtc2012_body .toButtons li{float:left;margin-left:10px}.gazeta_rtc2012_body .toButtons li span{font:11px/18px Arial,sans-serif;color:#535353;display:inline-block;background-position:0 -240px;height:18px;padding:0 5px 0 7px;border-right:1px solid #cecece;position:relative;top:1px;vertical-align:top}.gazeta_rtc2012_body .toButtons li button{font:11px Arial,sans-serif;color:#666;border:1px solid #dfdfdf;border-radius:2px;min-width:75px;height:20px;padding:0 3px 2px;vertical-align:top;cursor:pointer;overflow:visible;text-align:center;background:#ffffff;background:-moz-linear-gradient(top,#ffffff 0%,#eaeaea 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#ffffff),color-stop(100%,#eaeaea));background:-webkit-linear-gradient(top,#ffffff 0%,#eaeaea 100%);background:-o-linear-gradient(top,#ffffff 0%,#eaeaea 100%);background:-ms-linear-gradient(top,#ffffff 0%,#eaeaea 100%);background:linear-gradient(top,#ffffff 0%,#eaeaea 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',endColorstr='#eaeaea',GradientType=0)}.gazeta_rtc2012_body .toButtons li button em{font-style:normal}.gazeta_rtc2012_body .toButtons li button:hover{color:#515151;border-color:#c2c2c2}.gazeta_rtc2012_body .toButtons li.voted button{background:#f1f1f1}.gazeta_rtc2012_body .toButtons li.voted button em{padding-left:12px;background-position:0 -266px}.gazeta_rtc2012_body .toButtons li.voted button:hover em{background-position:0 -281px}#gazeta_rtc2012_other_entries{margin:10px 0 0 88px;padding:0 0 10px 10px;border:2px solid #e6e6e6;border-width:0 0 2px 2px}#gazeta_rtc2012_other_entries a,#gazeta_rtc2012_back a{position:relative;display:block;border:1px solid;border-color:#295ea5 #011c3f #011c3f #295ea5;border-radius:3px;height:22px;padding:0 12px 1px;overflow:visible;text-shadow:-1px 1px 0px rgba(0,0,0,0.2);font:bold 12px/21px Arial,sans-serif;color:#fff;cursor:pointer;position:relative;text-align:center;background:#164585;background:-moz-linear-gradient(top,#164585 0%,#042755 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#164585),color-stop(100%,#042755));background:-webkit-linear-gradient(top,#164585 0%,#042755 100%);background:-o-linear-gradient(top,#164585 0%,#042755 100%);background:-ms-linear-gradient(top,#164585 0%,#042755 100%);background:linear-gradient(top,#164585 0%,#042755 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#164585',endColorstr='#042755',GradientType=0)}#gazeta_rtc2012_other_entries a:hover,#gazeta_rtc2012_back a:hover{background:#1b529e;background:-moz-linear-gradient(top,#1b529e 0%,#05336e 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#1b529e),color-stop(100%,#05336e));background:-webkit-linear-gradient(top,#1b529e 0%,#05336e 100%);background:-o-linear-gradient(top,#1b529e 0%,#05336e 100%);background:-ms-linear-gradient(top,#1b529e 0%,#05336e 100%);background:linear-gradient(top,#1b529e 0%,#05336e 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#1b529e',endColorstr='#05336e',GradientType=0)}#gazeta_rtc2012_other_entries a:active,#gazeta_rtc2012_back a:active{top:1px}#gazeta_rtc2012_other_entries a:after{content:'\02c7';position:relative;left:5px;top:4px}#gazeta_rtc2012_back{margin:20px 0 0 88px}#gazeta_rtc2012_back a{border-radius:3px;font:bold 16px/35px Arial,sans-serif;height:35px}.gazeta_rtc2012_body .sportHead{background:#2b313d;padding:5px}.gazeta_rtc2012_body .sportHead .match_path{font:10px/13px Arial,sans-serif;overflow:hidden;margin-bottom:5px}.gazeta_rtc2012_body .sportHead .match_path li{float:left;background:url('https://static.im-g.pl/i/obrazki/sport2011/path-sprite.png') no-repeat 0 -79px;padding-left:3px}.gazeta_rtc2012_body .sportHead .match_path li:hover{background-position:0 -117px}.gazeta_rtc2012_body .sportHead .match_path li:first-child{padding-left:0;background-image:none}.gazeta_rtc2012_body .sportHead .match_path li a,.gazeta_rtc2012_body .sportHead .match_path li span{display:block;color:#fff;font-weight:normal;padding:0 9px 0 3px;background:#474e5c url('https://static.im-g.pl/i/obrazki/sport2011/path-sprite.png') no-repeat 100% -98px}.gazeta_rtc2012_body .sportHead .match_path li:hover a,.gazeta_rtc2012_body article.entry .sportHead .match_path li:hover span{background-color:#ce212d;background-position:100% -136px}.gazeta_rtc2012_body .ggHead{overflow:hidden;zoom:1}.gazeta_rtc2012_body article.entry .ggHead .team a{color:#1c2c6f}.gazeta_rtc2012_body article.entry .ggHead .team a:hover{color:#1c2c6f;background:0;text-decoration:none}.gazeta_rtc2012_body article.entry .ggHead .team a:hover span{text-decoration:underline}.gazeta_rtc2012_body article.entry .ggHead .team{margin:0;float:left;width:200px;color:#1c2c6f;height:41px;line-height:41px;font-size:14px;font-weight:bold;padding:0 0 0 5px;border-bottom:1px solid #343840;overflow:hidden;background:#e0e0e0;background:-moz-linear-gradient(top,#e0e0e0 0%,#c6c6c7 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#e0e0e0),color-stop(100%,#c6c6c7));background:-webkit-linear-gradient(top,#e0e0e0 0%,#c6c6c7 100%);background:-o-linear-gradient(top,#e0e0e0 0%,#c6c6c7 100%);background:-ms-linear-gradient(top,#e0e0e0 0%,#c6c6c7 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#e0e0e0',endColorstr='#c6c6c7',GradientType=0);background:linear-gradient(top,#e0e0e0 0%,#c6c6c7 100%)}.gazeta_rtc2012_body article.entry .ggHead .team2{text-align:right;padding:0 5px 0 0}.gazeta_rtc2012_body article.entry .ggHead .team img{display:inline-block;border:1px solid #c6c6c6;vertical-align:middle;position:relative;top:-1px;max-width:45px}.gazeta_rtc2012_body article.entry .ggHead .team span{line-height:normal;vertical-align:middle;display:inline-block;word-wrap:brek-word;width:140px;margin:0 2px;position:relative;top:-1px}.gazeta_rtc2012_body article.entry .ggHead p.score{margin:0;float:left;width:100px;height:41px;line-height:41px;font-size:22px;font-weight:bold;color:#fff;border-bottom:1px solid #252a35;background:#ed555f;background:-moz-linear-gradient(top,#ed555f 0%,#b80b17 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#ed555f),color-stop(100%,#b80b17));background:-webkit-linear-gradient(top,#ed555f 0%,#b80b17 100%);background:-o-linear-gradient(top,#ed555f 0%,#b80b17 100%);background:-ms-linear-gradient(top,#ed555f 0%,#b80b17 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ed555f',endColorstr='#b80b17',GradientType=0);background:linear-gradient(top,#ed555f 0%,#b80b17 100%)}.gazeta_rtc2012_body article.entry .ggHead p.score a{color:#fff;background:0}.gazeta_rtc2012_body article.entry .ggHead p.score span{float:left;width:39px}.gazeta_rtc2012_body article.entry .ggHead p.score .colon{width:22px;text-align:center}.gazeta_rtc2012_body article.entry .ggHead p.score .score1{text-align:right}.gazeta_rtc2012_body article.entry .ggHead p.penalties{font-size:12px;line-height:16px;font-weight:bold;color:#ce212d;text-align:center;margin:0 auto;background:#fff;height:17px;width:100px}.gazeta_rtc2012_body article.entry .ggHead p.penalties .caption{color:#000;font-size:10px;margin:0 10px}.gazeta_rtc2012_body article.entry .indHead table{width:100%;border-collapse:collapse;font:12px Arial,sans-serif;margin:0}.gazeta_rtc2012_body article.entry .indHead th{color:#d0d0d0;font-size:11px;font-weight:bold;padding:0 0 7px;border:0;text-align:left}.gazeta_rtc2012_body article.entry .indHead th.no{text-align:center}.gazeta_rtc2012_body article.entry .indHead th.player{padding:0 6px 7px}.gazeta_rtc2012_body article.entry .indHead td{border:3px solid #d8d8d8;border-width:3px 0;background:#ebebeb;color:#000;vertical-align:middle}.gazeta_rtc2012_body article.entry .indHead td.no{border-left-width:3px;width:20px;background:#c61e29;font-weight:bold;color:#fff;text-align:center}.gazeta_rtc2012_body article.entry .indHead td.flag{background:#c6c6c7;width:17px}.gazeta_rtc2012_body article.entry .indHead td.player{width:200px;padding:3px 6px}.gazeta_rtc2012_body article.entry .indHead td.country{width:150px}.gazeta_rtc2012_body article.entry .indHead td.result{border-right-width:3px;width:100px}.gazeta_rtc2012_body article.entry .indHead tr:first-child td.player a{font-weight:bold}.gazeta_rtc2012_body article.entry .indHead td a{font-weight:normal;color:#000}.gazeta_rtc2012_body article.entry .indHead td a:hover{color:#000;background:0;text-decoration:underline}.gazeta_rtc2012_body article.entry .indHead td img{display:block}#gazeta_rtc2012_sport .node_body{position:relative}#gazeta_rtc2012_sport #game_result #gr_m #gr_m_timer,#gazeta_rtc2012_sport #game_result_m #gr_m #gr_m_timer{display:block !important;position:absolute;right:5px;top:4px;border:0;height:auto;font:10px Arial,sans-serif}#gazeta_rtc2012_sport #game_result #gr_m #gr_m_timer.dynamic > span,#gazeta_rtc2012_sport #game_result_m #gr_m #gr_m_timer.dynamic > span{padding-left:17px;background:url('https://static.im-g.pl/i/obrazki/rtc2012/live.gif') no-repeat 0 1px}#gazeta_rtc2012_sport #game_result.fold #game_score_sub,#gazeta_rtc2012_sport #game_result_m.fold #game_score_sub{display:block}#gazeta_rtc2012_sport #game_result.fold #game_score_sub .score,#gazeta_rtc2012_sport #game_result_m.fold #game_score_sub .score{display:none}#gazeta_rtc2012_sport #game_result.fold #game_score_sub #gr_m_live,#gazeta_rtc2012_sport #game_result_m.fold #game_score_sub .#gr_m_live{display:none !important}#gazeta_rtc2012_sport #game_result #gr_more_info,#gazeta_rtc2012_sport #game_result_m #gr_more_info{display:block !important}#gazeta_rtc2012_sport #game_result #gr_more_info a span,#gazeta_rtc2012_sport #game_result_m #gr_more_info a span{padding-right:9px;background-position:100% -143px}#gazeta_rtc2012_sport #game_result.fold #gr_more_info a span,#gazeta_rtc2012_sport #game_result_m.fold #gr_more_info a span{background-position:100% -113px}#page .mod_rtc2012 article.mod_comments{border-left:2px solid #e6e6e6;margin:0 0 0 88px;padding:0 0 0 10px}#page .mod_rtc2012 article.mod_comments .form{padding-top:10px;margin:0;display:none}#page .mod_rtc2012 article.mod_comments .form form{padding:7px 10px 10px}#page .mod_rtc2012 article.mod_comments .form .userLogin{margin-bottom:8px}#page .mod_rtc2012 article.mod_comments .form .userLogin label.pad{width:auto}#page .mod_rtc2012 article.mod_comments .form textarea{width:490px;margin-bottom:10px}#page .mod_rtc2012 article.mod_comments section.content > ul{padding-top:10px}#page .mod_rtc2012 article.mod_comments header p.author{font-size:12px;font-weight:bold;color:#000}#page .mod_rtc2012 article.mod_comments header .c1 strong{font-size:12px}#page .mod_rtc2012 article.mod_comments section.content > ul li{margin:10px 0 0;border-bottom:1px solid #E6E6E6}#page .mod_rtc2012 article.mod_comments section.content > ul li:first-child{margin:5px 0px 0p 0px}#page .mod_rtc2012 article.mod_comments article.content > .form{margin:0;display:block;padding:0}#page .mod_rtc2012 article.mod_comments article.content{margin:0px 0px 9px 0px}#page .mod_rtc2012 article.mod_comments article.content > p{color:#1a1a1a;padding:7px 0px 5px;font-size:14px;line-height:19px}#page .mod_rtc2012 article.mod_comments article.content > footer{padding:0 10px 5px;font-size:12px}#page .mod_rtc2012 article.mod_comments > footer{font-size:12px}#page .mod_rtc2012 article.mod_comments > footer p.more{margin-top:7px}#page .mod_rtc2012 article.mod_comments > footer p.more a ,#page .mod_rtc2012 article.mod_comments > footer .reply a{font-size:12px}#page .mod_rtc2012 article.mod_comments article.content section.links{padding:2px 10px 8px}#page .mod_rtc2012 article.mod_comments > footer .reply a:first-letter{text-transform:uppercase}#page .mod_rtc2012.single article.mod_comments .form{display:block}#page .mod_rtc2012.single article.mod_comments section.content{padding-top:10px}.gazeta_rtc2012_body > ul > li > div.msg{border-left:2px solid #e6e6e6;margin:0 0 0 88px;padding:0 0 0 10px;width:auto;overflow:hidden}.gazeta_rtc2012_body > ul > li > div.msg p{border:solid #0a0;border-width:1px 0;margin:10px 0 0;padding:4px 0;text-align:center;color:#0a0}.gazeta_rtc2012_body > ul > li > div.msg.error p{border-color:#a00;color:#a00}.gazeta_rtc2012_body > ul > li.urgent > div.msg,.gazeta_rtc2012_body > ul > li.em > div.msg{border-color:#a90000}.gazeta_rtc2012_body > ul > li.goal > div.msg,.gazeta_rtc2012_body > ul > li.correspondent > div.msg,.gazeta_rtc2012_body > ul > li.matchEnd > div.msg{border-color:#383f4c}#gazeta_rtc2012_fake_commentInput{padding-top:10px;height:44px;width:520px;background:url('https://static.im-g.pl/i/obrazki/rtc2012/fake_commentInput.png') no-repeat 0 100%;cursor:pointer}body article.mod_gazeta_rtc2012_info > header,body .index.rtc2012_related .head{border-bottom:3px solid #ce212d;padding-bottom:4px;margin-bottom:10px}body article.mod_gazeta_rtc2012_info > header,body .index.rtc2012_related .head h2{font:bold 14px Arial,sans-serif;color:#000;text-transform:none;margin:0}.mod_gazeta_rtc2012_info .body,.mod_gazeta_rtc2012_info .links{border-bottom:1px solid #e2e2e2;padding-bottom:10px}.mod_gazeta_rtc2012_info .body li{margin-top:10px;font-size:14px;color:#1e1e1e}.mod_gazeta_rtc2012_info .body li img{vertical-align:middle;margin-right:6px}.mod_gazeta_rtc2012_info .links li{margin-top:6px;line-height:15px}.mod_gazeta_rtc2012_info .links a{display:inline-block;padding:0 0 0 22px}.mod_gazeta_rtc2012_info .mail a{background-position:0 3px}.mod_gazeta_rtc2012_info .facebook a{background-position:0 -30px}.mod_gazeta_rtc2012_info .android a{background-position:0 -60px}.mod_gazeta_rtc2012_info .iphone a{background-position:0 -90px}.mod_gazeta_rtc2012_info .none a{background-position:0 -1183px}.index.rtc2012_related .entry{padding:10px 0;border-bottom:1px solid #e2e2e2}.index.rtc2012_related .entry:first-child{padding-top:0}.index.rtc2012_related .entry .imgw{float:left}.index.rtc2012_related .entry .imgw img{display:block;margin-right:9px}.index.rtc2012_related .entry h3,.mod_zr_rtc5 .node_entry h3{font:bold 16px Arial,sans-serif;position:relative;top:-4px}.mod_zr_rtc5 .node_entry{padding:4px 0 8px}.mod_zr_rtc5 .node_entry img{margin-top:4px}#RefreshLiveButton{width:400px;text-align:center;margin:auto;padding:12px 0}#RefreshLiveButton a{color:#fff;font-weight:600;font-size:16px;padding:12px 100px;-webkit-transition:background-color 0.2s;-moz-transition:background-color 0.2s;-o-transition:background-color 0.2s;transition:background-color 0.2s;background-color:#3370BC}#RefreshLiveButton a:hover{background-color:#094896}.gazeta_rtc2012_body .quizy .quizTitle{font:bold 20px/26px Arial,sans-serif;color:#1d1d1d;padding-bottom:13px;border-bottom:1px solid #e6e6e6}.gazeta_rtc2012_body .quizy .quiz-question{padding:13px 10px 15px 0;font:bold 16px/24px Arial,sans-serif;color:#1d1d1d}.gazeta_rtc2012_body .quizy .quiz-question .step{padding-right:5px}.gazeta_rtc2012_body .quizy .field{padding-left:26px;padding-bottom:11px}.gazeta_rtc2012_body .quizy .field input{display:none}.gazeta_rtc2012_body .quizy .field input + label{display:block;position:relative;font:normal 16px/24px Arial,sans-serif;color:#1d1d1d;cursor:pointer}.gazeta_rtc2012_body .quizy .field input + label::before{content:'';display:block;position:absolute;border-radius:50%;border:2px solid #a2a2a2;height:12px;width:12px;left:-26px;bottom:5px}.gazeta_rtc2012_body .quizy .field input:checked + label:before{content:"";background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAElBMVEUAAAAkJCSRkZFISEjs7Ozy8vK/s2yAAAAAAXRSTlMAQObYZgAAACNJREFUCNdjIBGwKBs5gBlMgoIKYAazoKABnIEqxQpSTBoAAKs/Amb0CBoDAAAAAElFTkSuQmCC) -2px -2px no-repeat transparent}.gazeta_rtc2012_body .quizy input[type=submit]{cursor:pointer;position:relative;float:right;margin-top:15px;color:#fff;font:bold 12px Arial,sans-serif;border:none;padding:7px 0;width:88px;text-align:center;height:auto !important;border-radius:2px;background:#3370bc}.gazeta_rtc2012_body .quizy input[type=submit]:disabled{background:#b8b8b8}.blox-lite div#banP1{margin:0 auto}.blox-lite div#banP1 div{margin:2px auto}.blox-lite .mod_bloxLite img{display:block}#pianoMediaBar,#pianoMediaBar a{font-family:Arial,sans-serif}.mod.mod_piano_header{overflow:hidden}header#pageHead,.mod_uzr7,.mod_uzr6 section.body > ul,.mod_uzr1 section.body,.mod_uzr2 section.body li{zoom:1}header#pageHead:after,.mod_uzr7:after,.mod_uzr6 section.body > ul:after,.mod_uzr1 section.body:after,.mod_uzr2 section.body li:after{content:'.';visibility:hidden;display:block;width:0;height:0;clear:both}article.mod{margin-bottom:20px}article.mod > header,article.mod_uzr8 section.body header{padding-bottom:2px;border-bottom:2px solid #d7b48a;margin-bottom:10px}article.mod > header,article.mod > header h1,article.mod_uzr8 section.body header{font:bold 14px Arial,sans-serif}article.mod section.body p.author{font-size:10px;line-height:10px;text-transform:uppercase;margin-bottom:6px}header#pageHead{margin-bottom:12px;position:relative}header#pageHead div.c0{position:relative;z-index:2}header#pageHead div.c0,header#pageHead div.c0 div.imgw{float:left}header#pageHead a,header#pageHead a:hover{background:0}header#pageHead div.c1,header#pageHead div.c0 div.fb{float:right}header#pageHead div.fb{margin:14px 0 0 18px;padding:12px 0 0}header#pageHead div.c1 span{display:inline-block;margin-left:16px;vertical-align:middle;text-align:center}header#pageHead div.c1,header#pageHead div.c1 span.hack{height:70px}header#pageHead div.c1 span{display:inline-block;vertical-align:middle}header#pageHead div.c0 a,header#pageHead div.c1 a,header#pageHead div.fb{position:relative;z-index:2}header#pageHead #banP71{position:absolute;z-index:1;top:0;left:0}header#pageHead p.pageTitle,header#pageHead p.claim{float:left;vertical-align:middle;line-height:29px;border-left:1px solid #d3d3d3;margin:20px 0 20px 20px;padding:0 0 0 20px;height:30px}header#pageHead p.pageTitle{font-size:18px}header#pageHead p.claim{font-size:12px;margin-left:12px;padding-left:12px;line-height:31px}header#pageHead p.pageTitle span,header#pageHead p.claim span{display:inline-block}header#pageHead.hasBanner div.c1,header#pageHead.hasBanner p.claim,header#pageHead.hasBanner p.pageTitle{display:none}header#pageHead.hasBanner div.c0 div.fb{float:none;margin:0;clear:both;padding:0}header#pageHead.hasBanner.small div.c0 div.fb{float:right;margin:14px 0 0 18px;padding:12px 0 0;clear:none}header#pageHead.hasBanner[data-like-shift="1"] div.c0 div.fb{margin-left:18px}.mod_uzr1 section.body{background:#e5e5e5;padding:10px}.mod_uzr1 section.body div.imgw{float:left;margin-right:10px}.mod_uzr1 section.body div.content{overflow:hidden}.mod_uzr1 section.body p{font-size:11px;line-height:14px;color:#333}.mod_uzr1 section.body header{font-size:16px;font-weight:bold;line-height:19px;margin-bottom:4px}.mod_uzr1 section.body + section.links{padding-top:8px}.mod_uzr1 section.links{padding-bottom:8px;border-bottom:1px solid #e5e5e5}.mod_uzr1 section.links li{font-size:14px;font-weight:bold;line-height:21px}.mod_uzr1 section.middle div.imgw{float:none;display:inline}.mod_uzr1 section.middle div.imgw img{max-width:69px;vertical-align:middle}.mod_uzr1 section.middle div.content{display:inline}.mod_uzr1 section.middle header{display:inline;margin:0}.mod_uzr1 section.middle header > a,.mod_uzr1 section.body header > span{display:inline-block;max-width:198px;vertical-align:middle}.mod_uzr2 section.bgADFP) div[id^=adUnit-007-CONTENTBOARD],body:not(.screeningADFP) div[id^=adUnit-billboard_],body:not(.screeningADFP) div[id^=adUnit-leaderboard_],body:not(.screeningADFP) div[id^=banC],body:not(.screeningADFP) div[id^=DFP-007-CONTENTBOARD_],body:not(.screeningADFP) div[id^=DFP-011-MIDBOARD_]{min-width:100%!important}body:not(.screeningADFP) #adUnit-000-MAINBOARD:not(#adUnit-003-RECTANGLE),body:not(.screeningADFP) #adUnit-000-MAINBOX:not(#adUnit-003-RECTANGLE),body:not(.screeningADFP) #adUnit-001-TOPBOARD:not(#adUnit-003-RECTANGLE),body:not(.screeningADFP) #adUnit-003-RECTANGLE:not(#adUnit-003-RECTANGLE),body:not(.screeningADFP) #adUnit-042-FOOTBOARD:not(#adUnit-003-RECTANGLE),body:not(.screeningADFP) #adUnit-087-ADBOARD-A:not(#adUnit-003-RECTANGLE),body:not(.screeningADFP) #banC1:not(#adUnit-003-RECTANGLE),body:not(.screeningADFP) div[id^=adsMidboardDivId_]:not(#adUnit-003-RECTANGLE),body:not(.screeningADFP) div[id^=adUnit-007-CONTENTBOARD]:not(#adUnit-003-RECTANGLE),body:not(.screeningADFP) div[id^=adUnit-billboard_]:not(#adUnit-003-RECTANGLE),body:not(.screeningADFP) div[id^=adUnit-leaderboard_]:not(#adUnit-003-RECTANGLE),body:not(.screeningADFP) div[id^=banC]:not(#adUnit-003-RECTANGLE),body:not(.screeningADFP) div[id^=DFP-007-CONTENTBOARD_]:not(#adUnit-003-RECTANGLE),body:not(.screeningADFP) div[id^=DFP-011-MIDBOARD_]:not(#adUnit-003-RECTANGLE){background-color:#f5f5f5!important}body.noAds #adUnit-000-MAINBOARD,body.noAds #adUnit-000-MAINBOX,body.noAds #adUnit-001-TOPBOARD,body.noAds #adUnit-003-RECTANGLE,body.noAds #adUnit-042-FOOTBOARD,body.noAds #adUnit-087-ADBOARD-A,body.noAds #banC1,body.noAds .ban001_wrap,body.noAds div[id^=adsMidboardDivId_],body.noAds div[id^=adUnit-007-CONTENTBOARD],body.noAds div[id^=adUnit-billboard_],body.noAds div[id^=adUnit-leaderboard_],body.noAds div[id^=banC],body.noAds div[id^=DFP-007-CONTENTBOARD_],body.noAds div[id^=DFP-011-MIDBOARD_]{display:none}div[id^=adsMidboardDivId_]{margin-bottom:10px}#adUnit-021-IMK{min-height:244px}#adUnit-000-MAINBOX,#adUnit-003-RECTANGLE,#adUnit-DFP-003-RECTANGLE_1{min-height:615px}#adUnit-035-RECTANGLE-BTF,#adUnit-067-RECTANGLE-BTF{min-height:265px}#div-gpt-ad-001-TOPBOARD-0,div[id^=div-gpt-ad-billboard_]{margin-left:auto;margin-right:auto}#DFP-003-RECTANGLE_1,#DFP-003-RECTANGLE_2{position:sticky;top:50px}body[id^=pageTypeId_1].c2c .ban000_wrapper,body[id^=pageTypeId_1].c2c .right_aside,body[id^=pageTypeId_7].c2c .ban000_wrapper,body[id^=pageTypeId_7].c2c .right_aside{display:none}body[id^=pageTypeId_1] .adviewDFPBanner.activeBan.DFP-000-MAINBOX,body[id^=pageTypeId_7] .adviewDFPBanner.activeBan.DFP-000-MAINBOX{position:sticky;top:180px;z-index:1}body[id^=pageTypeId_1] .adviewDFPBanner.activeBan.DFP-001-TOPBOARD,body[id^=pageTypeId_1] .adviewDFPBanner.activeBan.DFP-011-MIDBOARD,body[id^=pageTypeId_7] .adviewDFPBanner.activeBan.DFP-001-TOPBOARD,body[id^=pageTypeId_7] .adviewDFPBanner.activeBan.DFP-011-MIDBOARD,div[id^=adUnit-billboard_] body[id^=pageTypeId_1] .adviewDFPBanner.activeBan,div[id^=adUnit-billboard_] body[id^=pageTypeId_7] .adviewDFPBanner.activeBan,div[id^=adUnit-leaderboard_] body[id^=pageTypeId_1] .adviewDFPBanner.activeBan,div[id^=adUnit-leaderboard_] body[id^=pageTypeId_7] .adviewDFPBanner.activeBan{position:relative;margin-bottom:0;padding:15px 0;z-index:2;background-color:#f5f5f5}body[id^=pageTypeId_1].dfp-video-bg .DFP-001-TOPBOARD,body[id^=pageTypeId_1].dfp-video-bg .DFP-011-MIDBOARD,body[id^=pageTypeId_1].dfp-video-bg div[id^=adUnit-billboard_],body[id^=pageTypeId_1].screeningADFP .DFP-001-TOPBOARD,body[id^=pageTypeId_1].screeningADFP .DFP-011-MIDBOARD,body[id^=pageTypeId_1].screeningADFP div[id^=adUnit-billboard_],body[id^=pageTypeId_7].dfp-video-bg .DFP-001-TOPBOARD,body[id^=pageTypeId_7].dfp-video-bg .DFP-011-MIDBOARD,body[id^=pageTypeId_7].dfp-video-bg div[id^=adUnit-billboard_],body[id^=pageTypeId_7].screeningADFP .DFP-001-TOPBOARD,body[id^=pageTypeId_7].screeningADFP .DFP-011-MIDBOARD,body[id^=pageTypeId_7].screeningADFP div[id^=adUnit-billboard_]{background:none!important}body[id^=pageTypeId_1] [id^=adUnit-billboard_][class*=activeBan],body[id^=pageTypeId_1] [id^=banC][class*=activeBan],body[id^=pageTypeId_7] [id^=adUnit-billboard_][class*=activeBan],body[id^=pageTypeId_7] [id^=banC][class*=activeBan]{margin:15px 0;text-align:center}body[id=pageTypeId_13] .adviewDFPBanner.activeBan.DFP-001-TOPBOARD,body[id=pageTypeId_13] .adviewDFPBanner.activeBan.DFP-011-MIDBOARD{position:unset;padding-top:0}body[id^=pageTypeId_14].screeningADFP #main_wrapper{background:#fff}#banP007_DFP.activeBan,#banP0104_DFP.activeBan{text-align:center}body[id^=pageTypeId_7].screeningLabel-001-TOPBOARD .adviewDFPBanner{text-align:left}body[id^=pageTypeId_7].screeningLabel-001-TOPBOARD .adviewDFPBanner.activeBan{padding:15px 0 30px!important;line-height:unset}body.screeningADFP_Midboard div[id^=adsMidboardDivId_]:not(.screeningADFP_Midboard){min-width:1242px!important;max-width:1242px!important;margin:0 auto}body.screeningADFP_Midboard div[id=adUnit-042-FOOTBOARD] .banLabel,body.screeningADFP_Midboard div[id^=adsMidboardDivId_]:not(.screeningADFP_Midboard) .banLabel{margin-top:0;padding-top:6px}body.screeningADFP_Midboard #adUnit-003-RECTANGLE .banLabel{top:140px;position:sticky}body[id^=pageTypeId_0].adviewDFPBanner.activeBan,body[id^=pageTypeId_7].adviewDFPBanner.activeBan,body[id^=pageTypeId_56].adviewDFPBanner.activeBan{margin-bottom:30px;padding-bottom:0}.activeBan:before{display:none}@supports (display:grid){body[id^=pageTypeId_1] .ban000_wrapper,body[id^=pageTypeId_7] .ban000_wrapper{grid-column:3}body[id^=pageTypeId_1] .main_wrapper--video .ban000_wrapper,body[id^=pageTypeId_7] .main_wrapper--video .ban000_wrapper{grid-row:5;z-index:5;background:#fff;position:relative}body[id^=pageTypeId_1] .main_wrapper:not(.main_wrapper--video) .ban000_wrapper,body[id^=pageTypeId_7] .main_wrapper:not(.main_wrapper--video) .ban000_wrapper{grid-row:2/span 4}body[id^=pageTypeId_1] .ban001_wrapper,body[id^=pageTypeId_7] .ban001_wrapper{position:relative;grid-column:1/span 3;z-index:3}body[id^=pageTypeId_1] .main_wrapper--video .ban001_wrapper,body[id^=pageTypeId_7] .main_wrapper--video .ban001_wrapper{grid-row:7}body[id^=pageTypeId_1] .main_wrapper:not(.main_wrapper--video) .ban001_wrapper,body[id^=pageTypeId_7] .main_wrapper:not(.main_wrapper--video) .ban001_wrapper{grid-row:6;margin:25px 0}body[id^=pageTypeId_1]:not(.screeningADFP) .ban001_wrapper,body[id^=pageTypeId_7]:not(.screeningADFP) .ban001_wrapper{min-height:365px;padding:0 0 15px;background-color:#f5f5f5!important}body[id^=pageTypeId_1]:not(.screeningADFP) .ban001_wrapper .banLabel,body[id^=pageTypeId_7]:not(.screeningADFP) .ban001_wrapper .banLabel{width:100%}body[id^=pageTypeId_1]:not(.screeningADFP) .ban001_wrapper>div,body[id^=pageTypeId_7]:not(.screeningADFP) .ban001_wrapper>div{width:auto!important;display:block!important;position:sticky!important;position:-webkit-sticky!important;top:150px;text-align:center;z-index:1}body[id^=pageTypeId_1]:not(.screeningADFP) .ban001_wrapper:after,body[id^=pageTypeId_1]:not(.screeningADFP) .ban001_wrapper:before,body[id^=pageTypeId_7]:not(.screeningADFP) .ban001_wrapper:after,body[id^=pageTypeId_7]:not(.screeningADFP) .ban001_wrapper:before{content:"";display:block;position:absolute;top:0;width:50vw;height:100%;background-color:#f5f5f5;left:calc(-50vw - -50%);width:100vw}body[id^=pageTypeId_1].noAds .ban000_wrapper,body[id^=pageTypeId_1].noAds .ban001_wrapper,body[id^=pageTypeId_7].noAds .ban000_wrapper,body[id^=pageTypeId_7].noAds .ban001_wrapper{display:none}@media screen and (min-width:1200px){body[id^=pageTypeId_1]:not(.screeningADFP) .main_wrapper--video .ban001_wrapper:before,body[id^=pageTypeId_7]:not(.screeningADFP) .main_wrapper--video .ban001_wrapper:before{content:"";top:0;position:absolute;height:100%;z-index:-13;background:#f5f5f5;margin-left:calc(-50vw + 592.5px);width:100vw}}}@supports not (display:grid){body[id^=pageTypeId_1] .ban000_wrapper,body[id^=pageTypeId_7] .ban000_wrapper{float:right;width:300px}body[id^=pageTypeId_1] .ban001_wrapper,body[id^=pageTypeId_7] .ban001_wrapper{position:relative;float:left;width:100%;margin:30px auto}body[id^=pageTypeId_1] .ban001_wrapper:after,body[id^=pageTypeId_7] .ban001_wrapper:after{display:block;content:" ";width:100%;clear:both;float:none}}@media (-ms-high-contrast:active),(-ms-high-contrast:none){body[id^=pageTypeId_1] .ban000_wrapper,body[id^=pageTypeId_7] .ban000_wrapper{float:right;width:300px}body[id^=pageTypeId_1] .ban001_wrapper,body[id^=pageTypeId_7] .ban001_wrapper{position:relative;float:left;width:100%;margin:30px auto}body[id^=pageTypeId_1] .ban001_wrapper:after,body[id^=pageTypeId_7] .ban001_wrapper:after{display:block;content:" ";width:100%;clear:both;float:none}}body#pageTypeId_0.richMedia #adUnit-001-TOPBOARD,body#pageTypeId_0.richMedia .ban001_wrap,body#pageTypeId_0.richMedia .ban001_wrapper,body#pageTypeId_0.richMedia div[id^=adsMidboardDivId_],body#pageTypeId_7.richMedia #adUnit-001-TOPBOARD,body#pageTypeId_7.richMedia .ban001_wrap,body#pageTypeId_7.richMedia .ban001_wrapper,body#pageTypeId_7.richMedia div[id^=adsMidboardDivId_]{background-color:transparent!important}body#pageTypeId_0.richMedia #adUnit-001-TOPBOARD:after,body#pageTypeId_0.richMedia #adUnit-001-TOPBOARD:before,body#pageTypeId_0.richMedia .ban001_wrap:after,body#pageTypeId_0.richMedia .ban001_wrap:before,body#pageTypeId_0.richMedia .ban001_wrapper:after,body#pageTypeId_0.richMedia .ban001_wrapper:before,body#pageTypeId_0.richMedia div[id^=adsMidboardDivId_]:after,body#pageTypeId_0.richMedia div[id^=adsMidboardDivId_]:before,body#pageTypeId_7.richMedia #adUnit-001-TOPBOARD:after,body#pageTypeId_7.richMedia #adUnit-001-TOPBOARD:before,body#pageTypeId_7.richMedia .ban001_wrap:after,body#pageTypeId_7.richMedia .ban001_wrap:before,body#pageTypeId_7.richMedia .ban001_wrapper:after,body#pageTypeId_7.richMedia .ban001_wrapper:before,body#pageTypeId_7.richMedia div[id^=adsMidboardDivId_]:after,body#pageTypeId_7.richMedia div[id^=adsMidboardDivId_]:before{content:none}body.c2c_adserver #banC99{min-height:900px}body#pageTypeId_0.dfp-video-bg .adviewDFPBanner.activeBan:after,body#pageTypeId_0.dfp-video-bg .DFP-001-TOPBOARD:after,body#pageTypeId_0.screeningADFP .adviewDFPBanner.activeBan:after,body#pageTypeId_0.screeningADFP .DFP-001-TOPBOARD:after{display:none}body#pageTypeId_0.dfp-video-bg .DFP-001-TOPBOARD,body#pageTypeId_0.screeningADFP .DFP-001-TOPBOARD{position:static}body#pageTypeId_0.dfp-video-bg .DFP-001-TOPBOARD>div,body#pageTypeId_0.dfp-video-bg .DFP-001-TOPBOARD>span,body#pageTypeId_0.screeningADFP .DFP-001-TOPBOARD>div,body#pageTypeId_0.screeningADFP .DFP-001-TOPBOARD>span{z-index:1}body#pageTypeId_0.dfp-video-bg .index_body,body#pageTypeId_0.screeningADFP .index_body{width:1242px;margin:0 auto!important;background:#fff;position:relative}body#pageTypeId_0.dfp-video-bg .index_body.AdScreening,body#pageTypeId_0.screeningADFP .index_body.AdScreening{width:auto}body#pageTypeId_0 .DFP-001-TOPBOARD.adviewDFPBanner.activeBan,body#pageTypeId_0 [id^=DFP-001-TOPBOARD_].adviewDFPBanner.activeBan,body#pageTypeId_0 [id^=DFP-011-MIDBOARD_].adviewDFPBanner.activeBan{position:relative!important;padding:14px 0 30px!important}body#pageTypeId_0 .DFP-001-TOPBOARD.adviewDFPBanner.activeBan>div,body#pageTypeId_0 .DFP-001-TOPBOARD.adviewDFPBanner.activeBan>span,body#pageTypeId_0 [id^=DFP-001-TOPBOARD_].adviewDFPBanner.activeBan>div,body#pageTypeId_0 [id^=DFP-001-TOPBOARD_].adviewDFPBanner.activeBan>span,body#pageTypeId_0 [id^=DFP-011-MIDBOARD_].adviewDFPBanner.activeBan>div,body#pageTypeId_0 [id^=DFP-011-MIDBOARD_].adviewDFPBanner.activeBan>span{position:relative;z-index:1}body#pageTypeId_0 .DFP-001-TOPBOARD.adviewDFPBanner.activeBan:after,body#pageTypeId_0 [id^=DFP-001-TOPBOARD_].adviewDFPBanner.activeBan:after,body#pageTypeId_0 [id^=DFP-011-MIDBOARD_].adviewDFPBanner.activeBan:after{content:"";top:0;position:absolute;height:100%;background:#f5f5f5;left:calc(-50vw - -50%);width:100vw}body#pageTypeId_0 [id^=DFP-001-TOPBOARD_]{margin-bottom:0!important;background:#fff}body#pageTypeId_0 .adviewDFPBanner.sticky,body#pageTypeId_0 .DFP-003-RECTANGLE{position:sticky;top:12px}body#pageTypeId_0.screeningLabel-001-TOPBOARD .DFP-001-TOPBOARD.adviewDFPBanner.activeBan:after{display:none}body#pageTypeId_0 .banIndexDFP.activeBan{display:block;padding:30px 0;margin-left:0;margin-right:0}body#pageTypeId_0 .index_simple.tiles.onn .list_tiles:first-of-type #banP99_DFP.activeBan~.entry:nth-child(11){display:block}body#pageTypeId_0 .index_simple.tiles .list_tiles .entry.banIndexDFP.activeBan{padding:0!important;border:0}body#pageTypeId_0 .index_simple.tiles .list_tiles .entry:nth-child(11){display:none}@keyframes changeVideoOpacity{0%{opacity:0}to{opacity:1}}.onnetworkplayercontainer.miniature{animation-name:changeVideoOpacity;animation-duration:2s}.onnetworkcustomplayercontainer.podcast{margin:0}.DFP-premiumBoardLoadedAds .DFP-premiumBoardReservedPlace{height:120px}.author-bio{background-color:#fff;color:#222}@supports (display:grid){.author-bio{grid-template-columns:852px 300px}}@supports not (display:grid){.author-bio{display:flex}}.author-bio__text{font:400 18px/29px calibre,sans-serif}@supports (display:grid){.author-bio__text{grid-column:1/2}}@supports not (display:grid){.author-bio__text{order:2;width:852px}}.author-bio__title{font:900 34px/40px calibre,sans-serif;margin:40px 0 30px}.author-bio__desc{font:400 21px/30px calibre,sans-serif}.author-bio__desc--short{font:700 24px/29px calibre,sans-serif;margin-bottom:10px}.author-bio__img{display:block;margin:0 auto;width:180px}.author-bio__photo{border-radius:50%;position:relative;overflow:hidden;width:180px;height:180px;margin-top:40px}@supports not (display:grid){.author-bio__photo{order:3}}.link--default{background-image:-owg-linear-gradient(to bottom,#2ad138 50%,transparent 50%);background-image:-webkit-linear-gradient(180deg,#2ad138 50%,transparent 0);background-image:-moz-linear-gradient(to bottom,#2ad138 50%,transparent 50%);background-image:-o-linear-gradient(to bottom,#2ad138 50%,transparent 50%);background-image:linear-gradient(180deg,#2ad138 50%,transparent 0);background-size:2px 2px;background-repeat:repeat-x;background-position:0 1.1em}.link--default:hover{color:#fff;background-image:none;background-color:#2ad138;transition:all .2s linear}.link--default:hover:after{border-color:transparent;transition:all .2s linear}#disableNotifications{text-decoration:underline}.index_simple.lp_forum .header,.index_simple.lp_more_about .header{font:700 25px/29px calibre,sans-serif;color:#2ad138;display:flex}.index_simple.lp_forum .header span,.index_simple.lp_more_about .header span{padding:15px 10px 15px 0}.index_simple.lp_forum .header h2,.index_simple.lp_more_about .header h2{color:#2ad138}.index_simple.lp_more_about .list_tiles{padding-top:0}.index_simple.lp_forum .lp_forum_list{padding-top:0;display:flex;flex-wrap:wrap}.index_simple.lp_forum .lp_forum_list .lp_forum_entry{flex:1 1 calc(50% - 20px);overflow:hidden;margin:0 0 40px}.index_simple.lp_forum .lp_forum_list .lp_forum_entry:nth-child(2n){margin-left:40px}.index_simple.lp_forum .lp_forum_list .lp_forum_entry h3 a{font:600 18px/22px calibre,sans-serif}.index_simple.lp_forum .lp_forum_list .lp_forum_entry .lp_forum_lead{font:400 19px/22px calibre,sans-serif;height:64px;overflow:hidden}.index_simple.lp_forum .lp_forum_more{width:130px;height:40px;border-radius:20px;background-color:#444;display:flex;justify-content:center;margin:0 auto}.index_simple.lp_forum .lp_forum_more a{font:600 16px/22px calibre,sans-serif;color:#fff;text-transform:uppercase;text-align:center;line-height:40px}.serviceLogo{width:1202px;height:90px;margin:0 auto;position:relative;display:flex;align-items:center;padding-top:10px}.serviceLogo__img{max-height:80px}.serviceLogo__logo{display:inline-block;background:#fff;font:700 45px/40px calibre,sans-serif;color:#222;position:relative;bottom:8px;z-index:1;padding:26px 0 14px;margin:1px 0;transition:all .2s ease-out;width:fit-content;height:80px}.serviceLogo__logo:hover{color:rgba(34,34,34,.8)}.serviceLogo__logo:hover:after{width:90%}.serviceLogo__logo:after{content:"";position:absolute;bottom:10px;left:0;width:65%;height:15px;z-index:-1;transition:width .3s ease-out;background:transparent linear-gradient(90deg,#cdeb04,#49db36 100%,#49db36 0) 0 0 no-repeat padding-box}.serviceLogo__partner{max-height:60px;display:flex;align-items:center;justify-content:space-between;transition:all .3s ease-out;position:relative}.serviceLogo__partnerTitle{color:#999;text-transform:uppercase;font-size:12px;margin:0 20px 0 0}.serviceLogo__partner--DFP{opacity:0;z-index:-1}.serviceLogo__partner--DFP--active .serviceLogo__partner--DFP{opacity:1;z-index:1}.serviceLogo__autopromotionImg,.serviceLogo__partnerImg{display:block;max-height:60px;max-width:150px;width:auto;height:auto}.serviceLogo__partnerImg{z-index:2;right:0;position:relative}.serviceLogo__autopromotion{margin-left:30px;display:flex}.serviceLogo__logoGroupElements{display:flex;align-items:center;justify-content:flex-start;z-index:10}.serviceLogo__logoContainer{line-height:0}.serviceLogo__additionalElements{display:flex;position:absolute;right:0}.serviceLogo--isSport~.nav__overlay{border-top:1px solid #eee}.serviceLogo--graphicLogo:not(.serviceLogo--withAutopromotion){justify-content:center}.serviceLogo--graphicLogo .serviceLogo__logoGroupElements a{line-height:0}.serviceLogo--withPartner .serviceLogo__partner:before{content:"";margin-right:20px;color:#999;font:400 10px/26px calibre,sans-serif;text-transform:uppercase;min-width:120px;text-align:right}.serviceLogo--withPartner .serviceLogo__partner::before__parnterImg{max-width:100px;max-height:40px}.nav__mainMenu{width:1202px;margin:0 auto;display:flex;height:40px}.nav__item,.nav__overlay{position:relative}.nav__item{transition:all .2s ease-out;padding-top:12px}.nav__item:hover .nav__overlayList{display:block;margin-top:1px}.nav__item:hover .nav__itemName:after{transform:scale(1)}.nav__item:first-child .nav__itemName{margin:0 10px 0 0}.nav__itemName{display:block;font:600 18px/15px calibre,sans-serif;margin:0 10px;text-align:center;color:#222;text-transform:uppercase;transition:color .2s ease-out;white-space:nowrap;height:27px}.nav__itemName:hover{color:rgba(34,34,34,.8)}.nav__itemName:after{content:"";width:100%;height:2px;position:absolute;bottom:0;left:0;background:#49db36;transition:all .3s ease-out;transform:scale(0)}.nav__overlayList{display:none;position:absolute;z-index:111;width:auto;left:0}.nav__list{width:auto;display:flex;padding:10px;max-height:350px;flex-wrap:wrap;flex-direction:column;align-content:start}@media (-ms-high-contrast:none){.nav__list{flex-direction:inherit}}.nav__list:before{content:"";position:absolute;height:100%;width:200vw;left:-100vw;background-color:#fff;z-index:0;top:0;box-shadow:0 8px 10px rgba(0,0,0,.14)}.nav__firstLevelItem{font:600 16px/22px calibre,sans-serif}.nav__secondLevelItem,.nav__thirdLevelItem{font:400 16px/16px calibre,sans-serif}.nav__thirdLevelItem{color:#999;margin-left:15px}.nav__firstLevelItem,.nav__secondLevelItem{color:#222}.nav__firstLevelItem,.nav__secondLevelItem,.nav__thirdLevelItem{z-index:1;margin-right:28px;padding:4px 0;width:218px}@media (-ms-high-contrast:none){.nav__firstLevelItem,.nav__secondLevelItem,.nav__thirdLevelItem{float:left}}.nav__firstLevelItem a,.nav__secondLevelItem a,.nav__thirdLevelItem a{transition:color .2s ease-out}.nav__firstLevelItem a:hover,.nav__secondLevelItem a:hover,.nav__thirdLevelItem a:hover{color:rgba(34,34,34,.8)}.nav__itemBox{display:flex;flex-direction:column}@media (-ms-high-contrast:none){.nav__itemBox{flex-direction:inherit}}.nav__lastItem{margin-bottom:15px}.nav__active{transition:all .2s ease-out}.nav__active,.nav__active:hover{color:#49db36}.nav__dropDownButton{margin-left:auto;width:100px;height:30px;background-repeat:no-repeat;background-position:85px 65%;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSI3LjQxIj48cGF0aCBkPSJNMTAuNTkgMEw2IDQuNTggMS40MSAwIDAgMS40MWw2IDYgNi02eiIgZmlsbD0iIzQ0NCIvPjwvc3ZnPg==);transition:all .2s ease-out}* .nav__dropDownButton:hover{cursor:pointer}.nav__dropDownButton.active{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSI3LjQxIj48cGF0aCBkPSJNNiAwTDAgNmwxLjQxIDEuNDFMNiAyLjgzbDQuNTkgNC41OEwxMiA2eiIgZmlsbD0iIzQ0NCIvPjwvc3ZnPg==)}.nav__dropDownButton.active .nav__dropDownOverlay{display:block}.nav__dropDownOverlay{display:none;position:absolute;top:30px;left:0;width:100%;background:#fff;box-shadow:0 8px 10px rgba(0,0,0,.14);z-index:2}.nav__dropDownList{width:1202px;margin:0 auto;display:flex;padding:20px 10px 20px 0;height:400px;flex-wrap:wrap;flex-direction:column;align-content:start;overflow:hidden}.nav__dropDownList .nav__firstLevelItem{text-transform:uppercase}.nav__dropDownList .nav__secondLevelItem,.nav__dropDownList .nav__thirdLevelItem{text-transform:inherit;font:400 16px/22px calibre,sans-serif}.nav__dropDownList .nav__firstLevelItem,.nav__dropDownList .nav__secondLevelItem,.nav__dropDownList .nav__thirdLevelItem{width:218px}.main-navigation{position:relative;left:0;width:100%;z-index:10602;background:#fff;transform:translateY(0);transition:all .5s ease-out;box-shadow:0 1px 3px rgba(0,0,0,.2)}.main-navigation__svg-name{display:none}.main-navigation__logo{height:28px;margin-right:30px}.main-navigation__logo .main-navigation__icon{height:24px;max-width:101px}.main-navigation__logo a{display:block;padding-top:1px}.main-navigation__inner-wrapper{margin:auto;display:flex;align-items:center;width:1200px;height:40px}.main-navigation__nav .main-navigation__link{font:400 14px/14px calibre,sans-serif;color:#444;transition:all .2s ease-out}.main-navigation__nav .main-navigation__link:hover{opacity:.8}.main-navigation__nav .main-navigation__lists{display:flex;align-items:center;height:40px;flex-wrap:wrap;width:100%}.main-navigation__nav .main-navigation__list-item{padding:10px;cursor:pointer;height:100%}.main-navigation__nav .main-navigation__list-item--isHighlighted{background-color:#f5f5f5}.main-navigation__nav .main-navigation__list-item--isHighlighted .main-navigation__link{font-weight:700;color:#222}.main-navigation__shortcuts{display:flex;align-items:baseline;margin-left:auto;order:2}.main-navigation__shortcuts .main-navigation__lists{display:flex;height:40px}.main-navigation__shortcuts .main-navigation__link{padding:10px;display:flex;align-items:center;cursor:pointer;font:400 14px/17px calibre,sans-serif;letter-spacing:0;color:#444;text-transform:uppercase}.main-navigation__shortcuts .main-navigation__icon{height:15px}.main-navigation__shortcuts .main-navigation__list-item{cursor:pointer;order:1;margin-left:6px}.main-navigation__shortcuts .main-navigation__list-item--environment{background:transparent linear-gradient(135deg,#459c5f,#347a4c) 0 0 no-repeat padding-box;order:3}.main-navigation__shortcuts .main-navigation__list-item--environment .main-navigation__link{color:#fff}.main-navigation__shortcuts .main-navigation__list-item--search{order:2;width:40px;justify-content:center}.main-navigation__login{position:relative}.main-navigation__login span{margin-left:8px}.main-navigation__login .main-navigation__login{text-transform:none}.main-navigation__login .main-navigation__login_box{position:absolute;background:#fff;display:none;transition:all .3s ease-in-out;top:40px;right:0}.main-navigation__login .main-navigation__login_box ul{box-shadow:0 1px 3px rgba(0,0,0,.2)}.main-navigation__login.main-navigation__login--open .main-navigation__login_box,.main-navigation__login:hover .main-navigation__login_box{display:block}.main-navigation__login .main-navigation__logout{font:500 14px/17px calibre,sans-serif;min-width:123px;padding:5px 5px 5px 10px;display:flex;align-items:center}.main-navigation__nav .main-navigation__list-item,.main-navigation__shortcuts .main-navigation__list-item{display:flex;position:relative;align-items:center}.main-navigation__dropdown{position:relative}.main-navigation__arrow-small{background-repeat:no-repeat;background-position:50%;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSI3LjQxIj48cGF0aCBkPSJNMTAuNTkgMEw2IDQuNTggMS40MSAwIDAgMS40MWw2IDYgNi02eiIgZmlsbD0iIzQ0NCIvPjwvc3ZnPg==);position:absolute;margin-left:-10px;margin-top:-17px;width:44px;height:33px;cursor:pointer}* .main-navigation__arrow-small:hover{cursor:pointer}.main-navigation .navigation-lists__outer-nav{width:100%;height:100%;box-shadow:0 3px 3px -2px #d6d6d6;overflow-y:auto;display:none;max-height:calc(100vh - 40px);padding-left:17px}.navigation-lists{margin:auto;width:1200px}.navigation-lists__icon{margin-right:8px}.navigation-lists__row--site{border-bottom:1px solid #e5e5e5;padding:25px 0}.navigation-lists__row--site .navigation-lists__link{font:900 18px/30px calibre,sans-serif;color:#222;transition:color .2s ease-out}.navigation-lists__row--site .navigation-lists__link:hover{color:rgba(34,34,34,.8)}.navigation-lists__row--site .navigation-lists__list-item{padding:0 13px}.navigation-lists__row--site .navigation-lists__list-item:first-child{padding-left:0;margin-left:0}.navigation-lists__row--site .navigation-lists__lists{display:flex}.navigation-lists__row--app{font:500 14px/16px calibre,sans-serif;color:#222;border-bottom:1px solid #e5e5e5;padding:25px 0}.navigation-lists__row--app .navigation-lists__list-item{margin-right:25px}.navigation-lists__row--app .navigation-lists__link{display:flex;align-items:center}.navigation-lists__row--app .navigation-lists__link span{margin-left:8px;text-transform:uppercase}.navigation-lists__row--app .navigation-lists__lists{display:flex}.navigation-lists__row--linked{display:block;color:#222;font:500 16px/22px calibre,sans-serif;width:100%;display:flex;padding-bottom:25px;column-count:4;border-bottom:1px solid #e5e5e5}.navigation-lists__row--popular{display:flex;flex-wrap:wrap;flex-direction:column;padding:10px 0;border-bottom:1px solid #e5e5e5}.navigation-lists__row--popular .navigation-lists__column{line-height:0;display:block}.navigation-lists__row--popular .navigation-lists__lists{margin-right:-30px}.navigation-lists__row--popular .navigation-lists__link{font:500 16px/25px calibre,sans-serif}.navigation-lists__smalltitle{font:600 16px/22px calibre,sans-serif;color:#222;text-transform:uppercase;padding:16px 0}.navigation-lists__smalltitleSVG{display:none}.navigation-lists__group{font:500 16px/25px calibre,sans-serif;line-height:22px;display:flex;flex-direction:column;break-inside:avoid;padding:10px 0;width:218px;margin-right:28px}.navigation-lists__row--popular .navigation-lists__lists .navigation-lists__list-item{width:218px;margin-right:28px;display:inline-block}.navigation-lists__row--popular .navigation-lists__lists .navigation-lists__link{line-height:22px}.navigation-lists__fold{display:flex;justify-content:center;align-items:center;padding:10px 15px}.navigation-lists__fold_button{color:#222;position:relative;cursor:pointer;margin-right:5px;font:600 18px/25px calibre,sans-serif}.navigation-lists__fold_button~svg{cursor:pointer}.navigation-lists__lists{font:300 16px/22px calibre,sans-serif}.search-form{display:none;cursor:pointer;position:relative}.search-form__input{background:#f5f5f5;height:40px;padding:0 50px 0 15px;border:0;font:500 16px/19px calibre,sans-serif;color:#444;border-radius:20px;width:300px}.search-form__input:focus{outline:unset}.search-form__input::-webkit-input-placeholder{color:#444}.search-form__input::-moz-placeholder{color:#444}.search-form__input:-ms-input-placeholder{color:#444}.search-form__input:-moz-placeholder{color:#444}.search-form__close{padding:2px 5px;right:0;top:3px}.search-form__submit{background:none;border:none;padding:5px;margin-right:10px;right:0;top:8px}.search-form__close,.search-form__submit{position:absolute;cursor:pointer}.search-form__form{position:relative;margin-right:32px}.search-form--open .search-form{display:block;line-height:33px}.search-form--open .main-navigation__shortcuts .main-navigation__lists{display:none!important}.search-form--open .search-form__submit svg{fill:#444}.top_wrapper.cap--open .main-navigation{height:100vh}.top_wrapper.cap--open .main-navigation .navigation-lists__outer-nav{display:block}.top_wrapper.cap--open .main-navigation .navigation-lists{background-color:#fff}.top_wrapper.cap--open .main-navigation .navigation-lists__outer-nav{margin-top:-1px}.top_wrapper.cap--open .main-navigation__inner-wrapper{background-color:#fff;position:relative;box-shadow:0 3px 3px -2px rgba(0,0,0,.2)}.top_wrapper.cap--open .main-navigation__arrow-small{transform:rotate(180deg)}.top_wrapper.cap--open #DFP_PREMIUMBOARD,.top_wrapper.cap--open .DFP-201-PREMIUMBOARD,.top_wrapper.cap--open .DFP_PREMIUMBOARD,.top_wrapper.navbar--open #DFP_PREMIUMBOARD,.top_wrapper.navbar--open .DFP-201-PREMIUMBOARD,.top_wrapper.navbar--open .DFP_PREMIUMBOARD{display:none}.top_wrapper{position:fixed;top:0;z-index:100;width:100%;transition:all .3s ease-out;height:40px;margin-bottom:130px;background-color:transparent}.top_wrapper:before{content:"";height:50px;width:100%;top:-50px;position:absolute;z-index:11;background:#fff}.top_wrapper--capOrNavbarHidden .c2sPlayer,.top_wrapper--capOrNavbarHidden .navBox,.top_wrapper--capOrNavbarHidden .notificationBox{transform:translateY(-130px)}.top_wrapper--capOrNavbarHidden~.main_wrapper .socialBar.vertical{top:60px;margin-bottom:50px}html body:not(#pageTypeId_13){padding-top:170px}html body:not(#pageTypeId_13).premium:not(#pageTypeId_0){padding-top:635px}body .socialBar.vertical{-webkit-transition:all .6s ease-out;-moz-transition:all .6s ease-out;-o-transition:all .6s ease-out;transition:all .6s ease-out;top:189px}body .socialBar.vertical .sc_item{margin-bottom:30px}body .adviewDFPBanner.activeBan.DFP-035-RECTANGLE-BTF,body .adviewDFPBanner.activeBan.DFP-067-RECTANGLE-BTF{top:160px}body .top_wrapper--capOrNavbarHidden~.main_wrapper .socialBar.vertical{top:60px}body .top_wrapper--capOrNavbarHidden~.main_wrapper .adviewDFPBanner.activeBan.DFP-035-RECTANGLE-BTF,body .top_wrapper--capOrNavbarHidden~.main_wrapper .adviewDFPBanner.activeBan.DFP-067-RECTANGLE-BTF{top:50px}body.adviewDFPpremiumBoard--close .socialBar.vertical{-webkit-transition:all .6s ease-out;-moz-transition:all .6s ease-out;-o-transition:all .6s ease-out;transition:all .6s ease-out;top:319px}body.adviewDFPpremiumBoard--close .adviewDFPBanner.activeBan.DFP-035-RECTANGLE-BTF,body.adviewDFPpremiumBoard--close .adviewDFPBanner.activeBan.DFP-067-RECTANGLE-BTF{top:280px}body.adviewDFPpremiumBoard--close .top_wrapper--capOrNavbarHidden~.main_wrapper .socialBar.vertical{top:180px}body.adviewDFPpremiumBoard--close .top_wrapper--capOrNavbarHidden~.main_wrapper .adviewDFPBanner.activeBan.DFP-035-RECTANGLE-BTF,body.adviewDFPpremiumBoard--close .top_wrapper--capOrNavbarHidden~.main_wrapper .adviewDFPBanner.activeBan.DFP-067-RECTANGLE-BTF{top:170px}body.adviewDFPpremiumBoard--mini .socialBar.vertical{-webkit-transition:all .6s ease-out;-moz-transition:all .6s ease-out;-o-transition:all .6s ease-out;transition:all .6s ease-out;top:249px}body.adviewDFPpremiumBoard--mini .adviewDFPBanner.activeBan.DFP-035-RECTANGLE-BTF,body.adviewDFPpremiumBoard--mini .adviewDFPBanner.activeBan.DFP-067-RECTANGLE-BTF,body.adviewDFPpremiumBoard--mini .top_wrapper--capOrNavbarHidden~.main_wrapper .socialBar.vertical{top:110px}body.adviewDFPpremiumBoard--mini .top_wrapper--capOrNavbarHidden~.main_wrapper .adviewDFPBanner.activeBan.DFP-035-RECTANGLE-BTF,body.adviewDFPpremiumBoard--mini .top_wrapper--capOrNavbarHidden~.main_wrapper .adviewDFPBanner.activeBan.DFP-067-RECTANGLE-BTF{top:120px}body.notificationHP--ON .socialBar.vertical{top:229px}body.notificationHP--ON .adviewDFPBanner.activeBan.DFP-035-RECTANGLE-BTF,body.notificationHP--ON .adviewDFPBanner.activeBan.DFP-067-RECTANGLE-BTF{top:240px}body.notificationHP--ON .top_wrapper--capOrNavbarHidden~.main_wrapper .socialBar.vertical{top:100px}body.notificationHP--ON .top_wrapper--capOrNavbarHidden~.main_wrapper .adviewDFPBanner.activeBan.DFP-035-RECTANGLE-BTF,body.notificationHP--ON .top_wrapper--capOrNavbarHidden~.main_wrapper .adviewDFPBanner.activeBan.DFP-067-RECTANGLE-BTF{top:110px}body.notificationHP--ON .hp-notification-top{top:0}body.notificationHP--ON.adviewDFPpremiumBoard--close .socialBar.vertical{-webkit-transition:all .6s ease-out;-moz-transition:all .6s ease-out;-o-transition:all .6s ease-out;transition:all .6s ease-out;top:359px}body.notificationHP--ON.adviewDFPpremiumBoard--close .adviewDFPBanner.activeBan.DFP-035-RECTANGLE-BTF,body.notificationHP--ON.adviewDFPpremiumBoard--close .adviewDFPBanner.activeBan.DFP-067-RECTANGLE-BTF{top:320px}body.notificationHP--ON.adviewDFPpremiumBoard--close .top_wrapper--capOrNavbarHidden~.main_wrapper .socialBar.vertical{top:220px}body.notificationHP--ON.adviewDFPpremiumBoard--close .top_wrapper--capOrNavbarHidden~.main_wrapper .adviewDFPBanner.activeBan.DFP-035-RECTANGLE-BTF,body.notificationHP--ON.adviewDFPpremiumBoard--close .top_wrapper--capOrNavbarHidden~.main_wrapper .adviewDFPBanner.activeBan.DFP-067-RECTANGLE-BTF{top:210px}body.notificationHP--ON.adviewDFPpremiumBoard--mini .socialBar.vertical{-webkit-transition:all .6s ease-out;-moz-transition:all .6s ease-out;-o-transition:all .6s ease-out;transition:all .6s ease-out;top:289px}body.notificationHP--ON.adviewDFPpremiumBoard--mini .adviewDFPBanner.activeBan.DFP-035-RECTANGLE-BTF,body.notificationHP--ON.adviewDFPpremiumBoard--mini .adviewDFPBanner.activeBan.DFP-067-RECTANGLE-BTF{top:260px}body.notificationHP--ON.adviewDFPpremiumBoard--mini .top_wrapper--capOrNavbarHidden~.main_wrapper .adviewDFPBanner.activeBan.DFP-035-RECTANGLE-BTF,body.notificationHP--ON.adviewDFPpremiumBoard--mini .top_wrapper--capOrNavbarHidden~.main_wrapper .adviewDFPBanner.activeBan.DFP-067-RECTANGLE-BTF,body.notificationHP--ON.adviewDFPpremiumBoard--mini .top_wrapper--capOrNavbarHidden~.main_wrapper .socialBar.vertical{top:160px}body.notificationHP--ON .main_wrapper #sitePath{padding-top:40px}body.cap--open{overflow:auto}body.cap--open #DFP_PREMIUMBOARD{opacity:0;display:none;transition:all .3s ease-in-out}body.isPartnerMaterial .article__image{margin-top:0}#DFP_PREMIUMBOARD{z-index:101;position:relative}.navBox{position:relative;top:0;width:100%;background:#fff;z-index:100;box-shadow:inset 0 -1px #e5e5e5;transform:translateY(0);transition:all .6s ease-out}#adUnit-201-PREMIUMBOARD-MOBI.activeBan,#adUnit-201-PREMIUMBOARD.activeBan{position:fixed;display:block;opacity:0;top:0;min-height:50px}#rwdNav{margin-top:10px}#rwdNav .p0{display:flex}#rwdNav .p0 li{display:block}#rwdNav .p0 li .active,#rwdNav .p0 li:hover{border-bottom:1px solid #399155}#rwdNav .p0 li:first-child a{padding-left:0}#rwdNav .p0 li a{padding:0 17.5px}.index_simple{width:852px}.index_simple .header{text-transform:uppercase;font:700 28px/29px calibre,sans-serif}.index_simple .entry{overflow:hidden}.index_simple .entry .bombka{background-color:#f3f3f3;height:100%}.index_simple .entry .bombka .tags a{text-transform:uppercase;pointer-events:none;color:#399155}.index_simple .footer{border-bottom:1px solid #399155;width:1202px;padding-bottom:35px}.index_simple .footer .more a,.index_simple .footer .more a:hover{background-color:#399155}.ren-banners{position:relative;margin:85px 0 0 50px}.ren-banners--clock{margin:0}.ren-banners__top-logo{display:flex;align-items:center;position:absolute;top:0;right:0;height:51px;justify-content:end;transform:translateY(calc(-100% - 15px))}.ren-banners__top-logo-label{white-space:nowrap;font:400 14px/26px calibre,sans-serif;text-transform:uppercase;color:#999;margin-right:20px}.ren-banners__top-logo-logo{height:51px}.ren-banners a{display:block;margin:0 auto;text-align:center}.hotnews{width:1242px;margin:0 auto;padding:0 20px 20px;background:#fff}.hotnews__inner{padding:10px 0 2px;border-bottom:1px solid #e5e5e5;border-top:1px solid #e5e5e5}.hotnews__links{display:flex;flex-flow:row wrap}.hotnews__item{white-space:nowrap;margin:0 0 8px}.hotnews__item:after{content:"|";color:#e5e5e5;margin:0 15px}.hotnews__item:last-of-type:after{display:none}.hotnews__link{white-space:nowrap;color:#999;font:400 15px/15px calibre,sans-serif}.promoted{position:relative;background:#fff;min-width:1242px}body.dfp-video-bg .promoted,body.screeningADFP .promoted,body.screeningADFP_Midboard .midindex:not(.before_midboard_screening) .promoted{max-width:1242px;margin:0 auto}.promoted__wrap{background:#f5f5f5}body.dfp-video-bg .promoted__wrap,body.screeningADFP .promoted__wrap{padding:24px 20px}body:not(.dfp-video-bg) .promoted__wrap,body:not(.screeningADFP) .promoted__wrap{padding:24px 28px}.promoted__header{color:#2ad138;padding-bottom:15px;font:700 28px/34px calibre,sans-serif;text-align:left}.promoted__wrapper{display:flex;flex-flow:row nowrap}.promoted__slide{flex:1}.promoted__slide:not(:last-child){margin-right:28px}.promoted__link{display:block}.promoted__link:hover .promoted__img{opacity:.7;transition:all .2s ease-out}.promoted__photo{display:block;position:relative;overflow:hidden;padding-top:calc(56.22% + 10px)}.promoted__title{color:#fff;font:600 18px/22px calibre,sans-serif}.promoted__img{display:block;margin-bottom:10px;width:100%;transition:all .2s ease-out;position:absolute;top:0;left:0}.promoted__video{position:absolute;bottom:20px;right:20px}.promoted__partnerBox{right:20px}.promoted.promoted--secondVersion{min-width:100vw;margin-left:calc(-50vw - -50%)}body.screeningADFP_Midboard .midindex:not(.before_midboard_screening) .promoted.promoted--secondVersion{max-width:1242px;margin:0 auto}.promoted.promoted--secondVersion .promoted__wrap{display:flex;background-color:#00965e;flex-wrap:wrap}.promoted.promoted--secondVersion .promoted__header{color:#fff}.promoted.promoted--secondVersion .promoted__partner{display:flex;align-items:center;margin:-26px 0 0 auto}.promoted.promoted--secondVersion .promoted__partner small{margin-right:5px;color:#fff}.promoted.promoted--secondVersion .promoted__label{margin:10px 0 0;color:#fff;font:400 18px/22px calibre,sans-serif}.promoted.promoted--secondVersion .promoted__partnerLogo{max-height:50px}.bubbles{text-align:center;position:relative}body.dfp-video-bg .bubbles,body.screeningADFP .bubbles{max-width:1242px;padding:0;margin:0 auto}.bubbles .content_wrap{background:#fff}.bubbles__wrapper{border-bottom:1px solid #e5e5e5;display:flex;flex-flow:row nowrap;padding:40px 20px;text-align:center;justify-content:space-between}.bubbles__element{flex:1 0 100px}.bubbles__link{align-self:flex-start;padding-bottom:25px;margin-bottom:-40px;justify-content:space-between;display:block;text-decoration:none;color:#222;transition:all .2s ease-out}.bubbles__link:hover{opacity:.7;transition:all .2s ease-out}.bubbles__link:not(:last-child){margin-right:10px}.bubbles__img{display:inline-block;margin:0 auto 10px;border-radius:100%;width:100px;height:100px}.bubbles__img:hover{opacity:.7}.bubbles__title{display:block;font:600 18px/22px calibre,sans-serif;word-break:normal}.maintopicNews{position:relative;padding:20px;background:#fff;max-width:1242px;margin:0 auto}.maintopicNews__topSection{display:flex;max-height:248px;justify-content:space-between}.maintopicNews--bigPhoto{background:#2ad138;position:relative;width:940px;display:flex;border:1px solid #efefef;border-radius:2px}.maintopicNews--bigPhoto:hover .maintopicNews__photo{-webkit-filter:brightness(105%) contrast(105%);-moz-filter:brightness(105%) contrast(105%);filter:brightness(105%) contrast(105%);transition:all .2s ease-out}.maintopicNews--bigPhoto .maintopicNews__header{width:320px;height:256px;padding:15px 20px}.maintopicNews--bigPhoto .maintopicNews__photo{overflow:hidden;width:620px;border-radius:2px 0 0 2px;transition:all .2s ease-out}.maintopicNews--bigPhoto .maintopicNews__title{color:#fff;font:700 28px/34px calibre,sans-serif;-webkit-line-clamp:6;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.maintopicNews--bigPhoto picture{width:620px;padding-top:26%}.maintopicNews--smallPhoto{background:#f5f5f5;display:flex;flex-flow:column;position:relative;max-width:242px;border:1px solid #efefef;border-radius:2px;overflow:hidden}.maintopicNews--smallPhoto:hover .maintopicNews__photo{-webkit-filter:brightness(105%) contrast(105%);-moz-filter:brightness(105%) contrast(105%);filter:brightness(105%) contrast(105%);transition:all .2s ease-out}.maintopicNews--smallPhoto:hover .maintopicNews__title{opacity:.8}.maintopicNews--smallPhoto .maintopicNews__header{height:126px;overflow:hidden;padding:12px 15px}.maintopicNews--smallPhoto .maintopicNews__photo{width:295px;height:124px;border-radius:2px 2px 0 0;transition:all .2s ease-out}.maintopicNews--smallPhoto .maintopicNews__title{color:#222;-webkit-line-clamp:4;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;font:700 20px/24px calibre,sans-serif;transition:all .2s ease-out}.maintopicNews--smallPhoto picture{width:100%;padding-top:51.67%}.maintopicNews__photo{display:block;position:absolute;top:0;left:0}.maintopicNews__exclusiv{background:#2ad138;border:0;color:#fff;font:600 16px/19px calibre,sans-serif;left:10px;top:10px;text-transform:uppercase;padding:5px;position:absolute}.maintopicNews picture{overflow:hidden;position:relative;display:block}body.dfp-video-bg .maintopic,body.screeningADFP .maintopic{max-width:1242px;margin:0 auto}.maintopic{position:relative}.maintopic .maintopic__content{overflow:hidden;padding:15px 0}.maintopic__wrapper{display:flex;flex-flow:row nowrap;width:max-content;overflow:hidden}.maintopic__wrapper::-webkit-scrollbar{display:none}.maintopic__wrapper:after{display:block;width:100px;height:100%;position:absolute;right:0;top:0;content:"";z-index:9;pointer-events:none;background:linear-gradient(90deg,hsla(0,0%,100%,0),#fff 80%,#fff)}.maintopic__item{scroll-snap-align:center;position:relative}.maintopic--triple .maintopic__item{width:466px}.maintopic--triple .maintopic__item:not(:last-child){margin-right:28px}.maintopic--double .maintopic__item{width:852px}.maintopic--double .maintopic__item:not(:last-child){margin-right:50px}.maintopic__link:hover .maintopic__photo{transition:all .2s ease-out;-webkit-filter:brightness(105%) contrast(105%);filter:brightness(105%) contrast(105%)}.maintopic--double .maintopic__header{display:flex;flex-direction:column;position:absolute;color:#fff;padding:30px 30px 16px;text-shadow:2px 2px 10px rgba(0,0,0,.5);background-image:linear-gradient(transparent,rgba(0,0,0,.5),rgba(0,0,0,.8));width:100%;bottom:0;text-align:left;width:852px}.maintopic--triple .maintopic__heading{font:700 28px/34px calibre,sans-serif;padding:15px 0 10px;color:#222}.maintopic--triple .maintopic__heading:hover{transition:all .2s ease-out;color:rgba(34,34,34,.8)}.maintopic--double .maintopic__heading{font:700 32px/38px calibre,sans-serif;padding:15px 0 10px;color:#fff;text-shadow:2px 2px 10px rgba(0,0,0,.5);width:100%;bottom:0}.maintopic__photoContainer{position:relative;display:block;padding-top:56.22%;overflow:hidden}.maintopic--double .maintopic__photoContainer{padding-top:41.56%}.maintopic__photo{display:block;position:absolute;top:0;left:0;transition:all .2s ease-out}.maintopic--triple .maintopic__photo{width:100%}.maintopic--double .maintopic__photo{width:852px}.maintopic__button--next,.maintopic__button--prev{position:absolute;background:#444;width:40px;height:40px;z-index:10;border-radius:50%;cursor:pointer;transition:all .2s ease-out;user-select:none}.maintopic--double .maintopic__button--next,.maintopic--double .maintopic__button--prev{top:45%}.maintopic--triple .maintopic__button--next,.maintopic--triple .maintopic__button--prev{top:40%}.maintopic__button--next{right:0}.maintopic__button--next:before{content:"";position:absolute;transform:rotate(45deg);top:15px;height:8px;width:8px;border-color:#fff;border-style:solid;border-width:2px 2px 0 0;right:17px}.maintopic__button--prev{left:0}.maintopic__button--prev:before{content:"";position:absolute;transform:rotate(-135deg);top:15px;height:8px;width:8px;border-color:#fff;border-style:solid;border-width:2px 2px 0 0;left:17px}.maintopic__button--prev:before.maintopic__button--disabled{border-color:#666}.maintopic__pagination{display:flex;justify-content:center}.maintopic__bullet{outline:none;height:14px;width:14px;margin:0 12px;background-color:#2ad138;opacity:.3;cursor:pointer;border-radius:50%}.maintopic__bullet--active{opacity:1}.maintopic--double .maintopic__author{display:inline-flex;align-items:center}.maintopic__authorName{display:block}.maintopic--triple .maintopic__authorName{color:#666;font:600 13px/18px calibre,sans-serif}.maintopic--double .maintopic__authorName{color:#fff;font:400 13px/18px calibre,sans-serif}.maintopic--double .maintopic__authorPhoto{width:35px;height:35px;border-radius:500%;margin-right:10px}.maintopic__partnerBox{position:absolute;top:0;right:20px;background:#fff;display:flex;flex-direction:column;align-items:center;z-index:10}.maintopic__partnerLabel{font:400 12px/14px calibre,sans-serif;color:#999;text-transform:uppercase}.maintopic__partnerLogo{margin:15px 15px 22px;max-width:100px;display:block}.maintopic__partnerLink{display:block}.maintopic .maintopic__content{border-bottom:1px solid #399155;padding:45px 0 54px}.maintopic__button--next,.maintopic__button--prev{background-color:#399155}.index_simple.tiles.simple_index--slider{width:1242px;margin:0 auto;padding:0 20px}.index_simple.tiles.simple_index--slider:after{z-index:1;content:"";top:0;right:-1px;display:block;width:100px;height:100%;position:absolute;pointer-events:none;background:linear-gradient(90deg,hsla(0,0%,100%,0),#fff 80%,#fff)}.index_simple.tiles.simple_index--slider .body{overflow:hidden}.index_simple.tiles.simple_index--slider .list_tiles{display:flex;flex-wrap:nowrap;transition:.4s;width:1242px}.index_simple.tiles.simple_index--slider .list_tiles .entry{flex-shrink:0;width:466px;margin-right:28px;border:none}.index_simple.tiles.simple_index--slider .article header{color:#222;padding:15px 0 10px}.index_simple.tiles.simple_index--slider .article header h3 a{font:700 28px/34px calibre,sans-serif}.index_simple.tiles.simple_index--slider .tags{padding:0 0 15px}.index_simple.tiles.simple_index--slider .slider-nav{z-index:2;position:absolute;top:150px;left:0;width:100%}.index_simple.tiles.simple_index--slider .slider-nav-btn{position:absolute;width:40px;height:40px;border-radius:50%;background-color:#399155;cursor:pointer}.index_simple.tiles.simple_index--slider .slider-nav-btn:before{content:"";position:absolute;top:15px;height:8px;width:8px;border-color:#fff;border-style:solid;border-width:2px 2px 0 0;left:17px}.index_simple.tiles.simple_index--slider .slider-nav-btn--prev:before{transform:rotate(-135deg)}.index_simple.tiles.simple_index--slider .slider-nav-btn--next{right:0}.index_simple.tiles.simple_index--slider .slider-nav-btn--next:before{left:14px;transform:rotate(45deg)}.index_simple.tiles.simple_index--slider .slider-bullets{display:none}.notificationBox{transform:translateY(0);transition:all .6s ease-out}.hp-notification-top{display:block;background:#f5f5f5;transition:all .4s ease-out;box-shadow:0 1px 3px rgba(0,0,0,.2);z-index:100;position:fixed;width:100%;transform:translateY(-80px);padding:15px 0;height:50px;top:34px}.hp-notification-top--show{transform:translateY(0)}.hp-notification-top:hover{filter:brightness(.95);text-decoration:none}.hp-notification-top__news-box{width:1202px;margin:0 auto;overflow:hidden;display:flex;color:#222}.hp-notification-top__prefix{z-index:1;min-width:155px;font:700 19px/20px calibre,sans-serif;background:#f5f5f5;position:relative;word-break:break-all;padding:0}.hp-notification-top__prefix:after{content:"";position:absolute;width:60%;height:7px;background:linear-gradient(45deg,#ff5b1e,#ff0068);left:0;bottom:-1px;z-index:-1}.hp-notification-top__title{font:400 20px/20px calibre,sans-serif;padding:0 0 0 20px;overflow:hidden;white-space:nowrap;max-width:790px;text-overflow:ellipsis}.hp-notification-top__read-more{font:400 20px/20px calibre,sans-serif;width:90px;text-decoration:underline;white-space:nowrap;padding:0 0 0 10px}.hp-notification-top--breaking-news{background:#e30000}.hp-notification-top--breaking-news .hp-notification-top__prefix{background:#fff;color:#e30000;text-transform:uppercase;border-radius:1px;padding:0 6px;min-width:inherit}.hp-notification-top--breaking-news .hp-notification-top__prefix:after{content:none}.hp-notification-top--breaking-news .hp-notification-top__title{color:#fff;font-weight:600px}.hp-notification-top--breaking-news .hp-notification-top__read-more{color:#fff;width:auto;position:relative}.hp-notification-top--breaking-news:hover{filter:brightness(.92)}.hp-notification-bottom{height:84px;margin-left:-2px;background:#fff;display:flex;justify-content:start;align-items:center;border-radius:4px;box-shadow:0 -1px 10px rgba(0,0,0,.4);position:fixed;bottom:30px;width:750px;transition:all .6s ease-in-out;transform:translateY(130px);z-index:100000;overflow:hidden;text-decoration:none!important;transition:background .3s ease-out,transform .6s ease-out}.hp-notification-bottom:hover{text-decoration:none;background:#e6e6e6}.hp-notification-bottom svg{padding:0 30px;height:84px}.hp-notification-bottom__article-photo{padding:0 15px;height:54px;display:inline-block}.hp-notification-bottom__article-photo img{width:72px;height:100%}.hp-notification-bottom__article-content{padding:15px 15px 15px 0;font-family:Roboto,sans-serif;width:390px;display:inline-block}.hp-notification-bottom__article-title{font-size:16px;line-height:20px;color:#222;position:relative;z-index:1;font-weight:700}.hp-notification-bottom__article-title:before{content:"";position:absolute;left:0;bottom:2px;height:6px;width:71px;background:linear-gradient(90deg,#e42b38,#ca1926);z-index:-1}.hp-notification-bottom__article-lead{font-size:14px;color:#222;line-height:17px;font-weight:100}.hp-notification-bottom--show{transform:translateY(0)}@font-face{font-family:calibre;src:url(https://static.im-g.pl/css/fonts/calibre/CalibreWeb-Regular.woff) format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:calibre;src:url(https://static.im-g.pl/css/fonts/calibre/CalibreWeb-Semibold.woff) format("woff");font-weight:600;font-style:normal;font-display:swap}@font-face{font-family:calibre;src:url(https://static.im-g.pl/css/fonts/calibre/CalibreWeb-Bold.woff) format("woff");font-weight:700;font-style:normal;font-display:swap}.calc__container__center{text-align:center}.calc__label{display:inline-block;color:#2ad138}.calc__label--with_checkbox{margin:0}.calc__label .calc__checkbox{display:none}.calc__label .calc__checkbox:checked:not(.disabled)+.calc__fake_checkbox:before{content:"\2714";position:absolute;top:-11px;left:0;font-size:30px;color:#2ad138}.calc__label .calc__fake_checkbox{height:20px;width:20px;border:1px solid #b0b0b0;display:inline-block;position:relative;margin:0 10px 0 0}.calc__bold{font-weight:700}.calc__input,.calc__select{display:inline-block;width:200px;height:30px;padding:3px;border-radius:3px;border:1px solid #b0b0b0;text-align:center;margin:0 0 10px}.calc__select{background-color:#fff;text-align-last:center}.calc__group{position:relative;height:30px}.calc__group input{position:absolute;top:0;left:0}.calc__hidden{display:none}.calc__visible--none{visibility:hidden}.calc__button{width:100px;height:30px;line-height:30px;background-color:#2ad138;text-align:center;color:#fff;text-transform:uppercase;border-radius:4px;opacity:.8;font-weight:700;cursor:pointer}.calc__button:active,.calc__button:focus,.calc__button:hover{opacity:.6}.calc__break{width:100%}.calc__legend{opacity:.8;text-align:center;margin:0 0 4px;text-transform:uppercase}.calc__slider{width:100%}.calc__disclaimer{width:100%;color:#5f5f5f;font-size:11px}.calc__tooltip{display:inline-block;position:relative;border-bottom:1px dotted #b0b0b0;text-align:center;border-radius:100%;background-color:#2ad138;color:#f4f4f4;font-weight:700;width:20px;height:20px;line-height:18px;margin:0 0 0 8px}.calc__tooltip--bottom{min-width:200px;top:40px;left:50%;transform:translate(-50%);padding:0 15px;color:#444;background-color:#eee;font-weight:400;font-size:15px;border-radius:8px;position:absolute;z-index:99998;box-sizing:border-box;box-shadow:0 1px 8px rgba(0,0,0,.5);visibility:hidden;opacity:0;transition:opacity .8s;text-align:left}.calc__tooltip--bottom p{padding:0}.calc__tooltip--bottom i{position:absolute;bottom:100%;left:50%;margin-left:-12px;width:24px;height:12px;overflow:hidden}.calc__tooltip--bottom i:after{content:"";position:absolute;width:12px;height:12px;left:50%;transform:translate(-50%,50%) rotate(45deg);background-color:#eee;box-shadow:0 1px 8px rgba(0,0,0,.5)}.calc__tooltip:active .calc__tooltip--bottom,.calc__tooltip:focus .calc__tooltip--bottom,.calc__tooltip:hover .calc__tooltip--bottom{visibility:visible;opacity:1}@media print{body.one__page__print,html.one__page__print{visibility:hidden;height:100%;margin:0!important;padding:0!important;overflow:hidden}body .calc__print__area,html .calc__print__area{background-color:#fff;z-index:99999;height:100vh;width:100vw;position:fixed;top:0;left:0;margin:0;padding:15px;font-size:14px;line-height:18px}body .calc__to__print,html .calc__to__print{visibility:visible}body .calc__no__print,html .calc__no__print{visibility:hidden}}body,div,fieldset,form,h1,h2,h3,h4,h5,h6,input,li,ol,p,textarea,ul{margin:0;padding:0}em,h1,h2,h3,h4,h5,h6,strong{font-size:100%;font-weight:400;font-style:normal}ol,ul{list-style:none}fieldset,img{border:0}article,aside,figure,footer,header,hgroup,menu,nav,section{display:block;margin:0;padding:0}html{display:block}body{-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;font-smoothing:always;font-family:calibre;font-size:21px;line-height:30px}a{color:#222;text-decoration:none}a:hover{color:rgba(34,34,34,.8)}