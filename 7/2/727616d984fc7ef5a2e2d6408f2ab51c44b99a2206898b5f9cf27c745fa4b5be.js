Array.prototype.filter||(Array.prototype.filter=function(t,e){"use strict";if("Function"!=typeof t&&"function"!=typeof t||!this)throw new TypeError;var r=this.length>>>0,o=new Array(r),n=this,l=0,i=-1;if(void 0===e)for(;++i!==r;)i in this&&t(n[i],i,n)&&(o[l++]=n[i]);else for(;++i!==r;)i in this&&t.call(e,n[i],i,n)&&(o[l++]=n[i]);return o.length=l,o}),Array.prototype.forEach||(Array.prototype.forEach=,window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),Array.prototype.indexOf||(Array.prototype.indexOf=,document.getElementsByClassName||(document.getElementsByClassName=,document.querySelectorAll||(document.querySelectorAll=,document.querySelector||(document.querySelector=,Object.keys||(Object.keys=)),"function"!=typeof String.prototype.trim&&(String.prototype.trim=,String.prototype.replaceAll||(String.prototype.replaceAll=,window.hasOwnProperty=window.hasOwnProperty||Object.prototype.hasOwnProperty;
if (typeof usi_commons === 'undefined') {
	usi_commons = {
		
		debug: location.href.indexOf("usidebug") != -1 || location.href.indexOf("usi_debug") != -1,
		
		log:function(msg) {
			if (usi_commons.debug) {
				try {
					if (msg instanceof Error) {
						console.log(msg.name + ': ' + msg.message);
					} else {
						console.log.apply(console, arguments);
					}
				} catch(err) {
					usi_commons.report_error_no_console(err);
				}
			}
		},
		log_error: function(msg) {
			if (usi_commons.debug) {
				try {
					if (msg instanceof Error) {
						console.log('%c USI Error:', usi_commons.log_styles.error, msg.name + ': ' + msg.message);
					} else {
						console.log('%c USI Error:', usi_commons.log_styles.error, msg);
					}
				} catch(err) {
					usi_commons.report_error_no_console(err);
				}
			}
		},
		log_success: function(msg) {
			if (usi_commons.debug) {
				try {
					console.log('%c USI Success:', usi_commons.log_styles.success, msg);
				} catch(err) {
					usi_commons.report_error_no_console(err);
				}
			}
		},
		dir:function(obj) {
			if (usi_commons.debug) {
				try {
					console.dir(obj);
				} catch(err) {
					usi_commons.report_error_no_console(err);
				}
			}
		},
		log_styles: {
			error: 'color: red; font-weight: bold;',
			success: 'color: green; font-weight: bold;'
		},
		domain: "https://app.upsellit.com",
		cdn: "https://www.upsellit.com",
		is_mobile: (/iphone|ipod|ipad|android|blackberry|mobi/i).test(navigator.userAgent.toLowerCase()),
		device: (/iphone|ipod|ipad|android|blackberry|mobi/i).test(navigator.userAgent.toLowerCase()) ? 'mobile' : 'desktop',
		gup:function(name) {
			try {
				name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
				var regexS = "[\\?&]" + name + "=([^&#\\?]*)";
				var regex = new RegExp(regexS);
				var results = regex.exec(window.location.href);
				if (results == null) return "";
				else return results[1];
			} catch (e) {
				usi_commons.report_error(e);
			}
		},
		load_script:function(source, callback, nocache) {
			try {
				if (source.indexOf("//www.upsellit.com") == 0) source = "https:"+source;
				var docHead = document.getElementsByTagName("head")[0];
				//if (top.location != location) docHead = parent.document.getElementsByTagName("head")[0];
				var newScript = document.createElement('script');
				newScript.type = 'text/javascript';
				var usi_appender = "";
				if (!nocache && source.indexOf("/active/") == -1 && source.indexOf("_pixel.jsp") == -1 && source.indexOf("_throttle.jsp") == -1 && source.indexOf("metro") == -1 && source.indexOf("_suppress") == -1 && source.indexOf("product_recommendations.jsp") == -1 && source.indexOf("_pid.jsp") == -1 && source.indexOf("_zips") == -1) {
					usi_appender = (source.indexOf("?")==-1?"?":"&");
					if (source.indexOf("pv2.js") != -1) usi_appender = "%7C";
					usi_appender += "si=" + usi_commons.get_sess();
				}
				newScript.src = source + usi_appender;
				if (typeof callback == "function") {
					newScript.onload = 
				}
				docHead.appendChild(newScript);
			} catch (e) {
				usi_commons.report_error(e);
			}
		},
		load_display:function(usiQS, usiSiteID, usiKey, callback) {
			try {
				usiKey = usiKey || "";
				var source = usi_commons.domain + "/launch.jsp?qs=" + usiQS + "&siteID=" + usiSiteID + "&keys=" + usiKey;
				usi_commons.load_script(source, callback);
			} catch (e) {
				usi_commons.report_error(e);
			}
		},
		load_view:function(usiHash, usiSiteID, usiKey, callback) {
			try {
				if (typeof(usi_force) != "undefined" || location.href.indexOf("usi_force") != -1 || (usi_cookies.get("usi_sale") == null && usi_cookies.get("usi_launched") == null && usi_cookies.get("usi_launched"+usiSiteID) == null)) {
					usiKey = usiKey || "";
					var usi_append = "";
					if (usi_commons.gup("usi_force_date") != "") usi_append = "&usi_force_date=" + usi_commons.gup("usi_force_date");
					else if (typeof usi_cookies !== 'undefined' && usi_cookies.get("usi_force_date") != null) usi_append = "&usi_force_date=" + usi_cookies.get("usi_force_date");
					if (usi_commons.debug) usi_append += "&usi_referrer="+encodeURIComponent(location.href);
					var source = usi_commons.domain + "/view.jsp?hash=" + usiHash + "&siteID=" + usiSiteID + "&keys=" + usiKey + usi_append;
					if (typeof(usi_commons.last_view) !== "undefined" && usi_commons.last_view == usiSiteID+"_"+usiKey) return;
					usi_commons.last_view = usiSiteID+"_"+usiKey;
					if (typeof usi_js !== 'undefined' && typeof usi_js.cleanup === 'function') usi_js.cleanup();
					usi_commons.load_script(source, callback);
				}
			} catch (e) {
				usi_commons.report_error(e);
			}
		},
		remove_loads:function() {
			try {
				if (document.getElementById("usi_obj") != null) {
					document.getElementById("usi_obj").parentNode.parentNode.removeChild(document.getElementById("usi_obj").parentNode);
				}
				if (typeof(usi_commons.usi_loads) !== "undefined") {
					for (var i in usi_commons.usi_loads) {
						if (document.getElementById("usi_"+i) != null) {
							document.getElementById("usi_"+i).parentNode.parentNode.removeChild(document.getElementById("usi_"+i).parentNode);
						}
					}
				}
			} catch (e) {
				usi_commons.report_error(e);
			}
		},
		load:function(usiHash, usiSiteID, usiKey, callback){
			try {
				if (typeof(window["usi_" + usiSiteID]) !== "undefined") return;
				usiKey = usiKey || "";
				var usi_append = "";
				if (usi_commons.gup("usi_force_date") != "") usi_append = "&usi_force_date=" + usi_commons.gup("usi_force_date");
				else if (typeof usi_cookies !== 'undefined' && usi_cookies.get("usi_force_date") != null) usi_append = "&usi_force_date=" + usi_cookies.get("usi_force_date");
				if (usi_commons.debug) usi_append += "&usi_referrer="+encodeURIComponent(location.href);
				var source = usi_commons.domain + "/usi_load.jsp?hash=" + usiHash + "&siteID=" + usiSiteID + "&keys=" + usiKey + usi_append;
				usi_commons.load_script(source, callback);
				if (typeof(usi_commons.usi_loads) === "undefined") {
					usi_commons.usi_loads = {};
				}
				usi_commons.usi_loads[usiSiteID] = usiSiteID;
			} catch (e) {
				usi_commons.report_error(e);
			}
		},
		load_precapture:function(usiQS, usiSiteID, callback) {
			try {
				if (typeof(usi_commons.last_precapture_siteID) !== "undefined" && usi_commons.last_precapture_siteID == usiSiteID) return;
				usi_commons.last_precapture_siteID = usiSiteID;
				var source = usi_commons.domain + "/hound/monitor.jsp?qs=" + usiQS + "&siteID=" + usiSiteID;
				usi_commons.load_script(source, callback);
			} catch (e) {
				usi_commons.report_error(e);
			}
		},
		load_mail:function(qs, siteID, callback) {
			try {
				var source = usi_commons.domain + "/mail.jsp?qs=" + qs + "&siteID=" + siteID + "&domain=" + encodeURIComponent(usi_commons.domain);
				usi_commons.load_script(source, callback);
			} catch (e) {
				usi_commons.report_error(e);
			}
		},
		load_products:function(options) {
			try {
				if (!options.siteID || !options.pid) return;
				var queryStr = "";
				var params = ['siteID', 'association_siteID', 'pid', 'less_expensive', 'rows', 'days_back', 'force_exact', 'match', 'nomatch', 'name_from', 'image_from', 'price_from', 'url_from', 'extra_from', 'custom_callback', 'allow_dupe_names', 'expire_seconds', 'name'];
				params.forEach(function(name, index){
					if (options[name]) {
						queryStr += (index == 0 ? "?" : "&") + name + '=' + options[name];
					}
				});
				if (options.filters) {
					queryStr += "&filters=" + encodeURIComponent(options.filters.join("&"));
				}
				usi_commons.load_script(usi_commons.cdn + '/utility/product_recommendations_filter.jsp' + queryStr, ;
			} catch (e) {
				usi_commons.report_error(e);
			}
		},
		send_prod_rec:function(siteID, info, real_time) {
			var result = false;
			try {
				if (document.getElementsByTagName("html").length > 0 && document.getElementsByTagName("html")[0].className != null && document.getElementsByTagName("html")[0].className.indexOf("translated") != -1) {
					//Ignore translated pages
					return false;
				}
				var data = [siteID, info.name, info.link, info.pid, info.price, info.image];
				if (data.indexOf(undefined) == -1) {
					var queryString = [siteID, info.name.replace(/\|/g, "&#124;"), info.link, info.pid, info.price, info.image].join("|") + "|";
					if (info.extra) queryString += info.extra + "|";
					var filetype = real_time ? "jsp" : "js";
					usi_commons.load_script(usi_commons.domain + "/utility/pv2." + filetype + "?" + encodeURIComponent(queryString));
					result = true;
				}
			} catch (e) {
				usi_commons.report_error(e);
				result = false;
			}
			return result;
		},
		report_error:function(err) {
			if (err == null) return;
			if (typeof err === 'string') err = new Error(err);
			if (!(err instanceof Error)) return;
			if (typeof(usi_commons.error_reported) !== "undefined") {
				return;
			}
			usi_commons.error_reported = true;
			if (location.href.indexOf('usishowerrors') !== -1) throw err;
			else usi_commons.load_script(usi_commons.domain + '/err.jsp?oops=' + encodeURIComponent(err.message) + '-' + encodeURIComponent(err.stack) + "&url=" + encodeURIComponent(location.href));
			usi_commons.log_error(err.message);
			usi_commons.dir(err);
		},
		report_error_no_console:function(err) {
			if (err == null) return;
			if (typeof err === 'string') err = new Error(err);
			if (!(err instanceof Error)) return;
			if (typeof(usi_commons.error_reported) !== "undefined") {
				return;
			}
			usi_commons.error_reported = true;
			if (location.href.indexOf('usishowerrors') !== -1) throw err;
			else usi_commons.load_script(usi_commons.domain + '/err.jsp?oops=' + encodeURIComponent(err.message) + '-' + encodeURIComponent(err.stack) + "&url=" + encodeURIComponent(location.href));
		},
		gup_or_get_cookie: function(name, expireSeconds, forceCookie) {
			try {
				if (typeof usi_cookies === 'undefined') {
					usi_commons.log_error('usi_cookies is not defined');
					return;
				}
				expireSeconds = (expireSeconds || usi_cookies.expire_time.day);
				if (name == "usi_enable") expireSeconds = usi_cookies.expire_time.hour;
				var value = null;
				var qsValue = usi_commons.gup(name);
				if (qsValue !== '') {
					value = qsValue;
					usi_cookies.set(name, value, expireSeconds, forceCookie);
				} else {
					value = usi_cookies.get(name);
				}
				return (value || '');
			} catch (e) {
				usi_commons.report_error(e);
			}
		},
		get_sess: function() {
			var usi_si = null;
			if (typeof(usi_cookies) === "undefined") return "";
			try {
				if (usi_cookies.get('usi_si') == null) {
					var usi_rand_str = Math.random().toString(36).substring(2);
					if (usi_rand_str.length > 6) usi_rand_str = usi_rand_str.substring(0, 6);
					usi_si = usi_rand_str + "_" + Math.round((new Date()).getTime() / 1000);
					usi_cookies.set('usi_si', usi_si, 24*60*60);
					return usi_si;
				}
				if (usi_cookies.get('usi_si') != null) usi_si = usi_cookies.get('usi_si');
				usi_cookies.set('usi_si', usi_si, 24*60*60);
			} catch(err) {
				usi_commons.report_error(err);
			}
			return usi_si;
		},
		get_id: function(usi_append) {
			if (!usi_append) usi_append = "";
			var usi_id = null;
			try {
				if (usi_cookies.get('usi_v') == null && usi_cookies.get('usi_id'+usi_append) == null) {
					var usi_rand_str = Math.random().toString(36).substring(2);
					if (usi_rand_str.length > 6) usi_rand_str = usi_rand_str.substring(0, 6);
					usi_id = usi_rand_str + "_" + Math.round((new Date()).getTime() / 1000);
					usi_cookies.set('usi_id'+usi_append, usi_id, 30 * 86400, true);
					return usi_id;
				}
				if (usi_cookies.get('usi_v') != null) usi_id = usi_cookies.get('usi_v');
				if (usi_cookies.get('usi_id'+usi_append) != null) usi_id = usi_cookies.get('usi_id'+usi_append);
				usi_cookies.set('usi_id'+usi_append, usi_id, 30 * 86400, true);
			} catch(err) {
				usi_commons.report_error(err);
			}
			return usi_id;
		},
		load_session_data: function(extended) {
			try {
				if (usi_cookies.get_json("usi_session_data") == null) {
					usi_commons.load_script(usi_commons.domain + '/utility/session_data.jsp?extended=' + (extended?"true":"false"));
				} else {
					usi_app.session_data = usi_cookies.get_json("usi_session_data");
					if (typeof(usi_app.session_data_callback) !== "undefined") {
						usi_app.session_data_callback();
					}
				}
			} catch(err) {
				usi_commons.report_error(err);
			}
		},
		customer_ip:function(last_purchase) {
			try {
				if (last_purchase != -1) {
					usi_cookies.set("usi_suppress", "1", usi_cookies.expire_time.never);
				} else {
					usi_app.main();
				}
			} catch(err) {
				usi_commons.report_error(err);
			}
		},
		customer_check:function(company_id) {
			try {
				if (!usi_app.is_enabled && !usi_cookies.value_exists("usi_ip_checked")) {
					usi_cookies.set("usi_ip_checked", "1", usi_cookies.expire_time.day);
					usi_commons.load_script(usi_commons.domain + "/utility/customer_ip2.jsp?companyID=" + company_id);
					return false;
				}
				return true;
			} catch(err) {
				usi_commons.report_error(err);
			}
		}
	};
	setTimeout(function() {
		try {
			if (usi_commons.gup_or_get_cookie("usi_debug") != "") usi_commons.debug = true;
			if (usi_commons.gup_or_get_cookie("usi_qa") != "") {
				usi_commons.domain = usi_commons.cdn = "https://prod.upsellit.com";
			}
		} catch(err) {
			usi_commons.report_error(err);
		}
	}, 1000);
}
if("undefined"==typeof usi_cookies){if(usi_cookies={expire_time:{minute:60,hour:3600,two_hours:7200,four_hours:14400,day:86400,week:604800,two_weeks:1209600,month:2592e3,year:31536e3,never:31536e4},max_cookies_count:15,max_cookie_length:1e3,update_window_name:function(e,i,n){try{var t=-1;if(-1!=n){var r=new Date;r.setTime(r.getTime()+1e3*n),t=r.getTime()}var o=window.top||window,l=0;null!=i&&-1!=i.indexOf("=")&&(i=i.replace(RegExp("=","g"),"USIEQLS")),null!=i&&-1!=i.indexOf(";")&&(i=i.replace(RegExp(";","g"),"USIPRNS"));for(var a=o.name.split(";"),u="",f=0;f<a.length;f++){var c=a[f].split("=");3==c.length?(c[0]==e&&(c[1]=i,c[2]=t,l=1),null!=c[1]&&"null"!=c[1]&&(u+=c[0]+"="+c[1]+"="+c[2]+";")):""!=a[f]&&(u+=a[f]+";")}0==l&&(u+=e+"="+i+"="+t+";"),o.name=u}catch(s){}},flush_window_name:function(e){try{for(var i=window.top||window,n=i.name.split(";"),t="",r=0;r<n.length;r++){var o=n[r].split("=");3==o.length&&(0==o[0].indexOf(e)||(t+=n[r]+";"))}i.name=t}catch(l){}},get_from_window_name:function(e){try{for(var i,n,t=(window.top||window).name.split(";"),r=0;r<t.length;r++){var o=t[r].split("=");if(3==o.length){if(o[0]==e&&(n=o[1],-1!=n.indexOf("USIEQLS")&&(n=n.replace(/USIEQLS/g,"=")),-1!=n.indexOf("USIPRNS")&&(n=n.replace(/USIPRNS/g,";")),!("-1"!=o[2]&&0>usi_cookies.datediff(o[2]))))return i=[n,o[2]]}else if(2==o.length&&o[0]==e)return n=o[1],-1!=n.indexOf("USIEQLS")&&(n=n.replace(/USIEQLS/g,"=")),-1!=n.indexOf("USIPRNS")&&(n=n.replace(/USIPRNS/g,";")),i=[n,new Date().getTime()+6048e5]}}catch(l){}return null},datediff:function(e){return e-new Date().getTime()},count_cookies:function(e){return e=e||"usi_",usi_cookies.search_cookies(e).length},root_domain:function(){try{var e=document.domain.split("."),i=e[e.length-1];if("com"==i||"net"==i||"org"==i||"us"==i||"co"==i||"ca"==i)return e[e.length-2]+"."+e[e.length-1]}catch(n){}return document.domain},create_cookie:function(e,i,n){if(!1!==navigator.cookieEnabled){var t="";if(-1!=n){var r=new Date;r.setTime(r.getTime()+1e3*n),t="; expires="+r.toGMTString()}var o="samesite=none;";0==location.href.indexOf("https://")&&(o+="secure;");var l=usi_cookies.root_domain();"undefined"!=typeof usi_parent_domain&&-1!=document.domain.indexOf(usi_parent_domain)&&(l=usi_parent_domain),document.cookie=e+"="+encodeURIComponent(i)+t+"; path=/;domain="+l+"; "+o}},create_nonencoded_cookie:function(e,i,n){if(!1!==navigator.cookieEnabled){var t="";if(-1!=n){var r=new Date;r.setTime(r.getTime()+1e3*n),t="; expires="+r.toGMTString()}var o="samesite=none;";0==location.href.indexOf("https://")&&(o+="secure;");var l=usi_cookies.root_domain();"undefined"!=typeof usi_parent_domain&&-1!=document.domain.indexOf(usi_parent_domain)&&(l=usi_parent_domain),document.cookie=e+"="+i+t+"; path=/;domain="+l+"; "+o}},read_cookie:function(e){if(!1===navigator.cookieEnabled)return null;var i=e+"=",n=[];try{n=document.cookie.split(";")}catch(t){}for(var r=0;r<n.length;r++){for(var o=n[r];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(i))return decodeURIComponent(o.substring(i.length,o.length))}return null},del:function(e){usi_cookies.set(e,null,-100);try{null!=localStorage&&localStorage.removeItem(e),null!=sessionStorage&&sessionStorage.removeItem(e)}catch(i){}},get_ls:function(e){try{var i=localStorage.getItem(e);if(null!=i){if(0==i.indexOf("{")&&-1!=i.indexOf("usi_expires")){var n=JSON.parse(i);if(new Date().getTime()>n.usi_expires)return localStorage.removeItem(e),null;i=n.value}return decodeURIComponent(i)}}catch(t){}return null},get:function(e){var i=usi_cookies.read_cookie(e);if(null!=i)return i;try{if(null!=localStorage&&(i=usi_cookies.get_ls(e),null!=i))return i;if(null!=sessionStorage&&(i=sessionStorage.getItem(e),null!=i))return decodeURIComponent(i)}catch(n){}var t=usi_cookies.get_from_window_name(e);if(null!=t&&t.length>1)try{i=decodeURIComponent(t[0])}catch(r){return t[0]}return i},get_json:function(e){var i=null,n=usi_cookies.get(e);if(null==n)return null;try{i=JSON.parse(n)}catch(t){n=n.replace(/\\"/g,'"');try{i=JSON.parse(JSON.parse(n))}catch(r){try{i=JSON.parse(n)}catch(o){}}}return i},search_cookies:function(e){e=e||"";var i=[];return document.cookie.split(";").forEach(function(n){var t=n.split("=")[0].trim();(""===e||0===t.indexOf(e))&&i.push(t)}),i},set:function(e,i,n,t){"undefined"!=typeof usi_nevercookie&&!0==usi_nevercookie&&(t=!1),void 0===n&&(n=-1);try{i=i.replace(/(\r\n|\n|\r)/gm,"")}catch(r){}"undefined"==typeof usi_windownameless&&usi_cookies.update_window_name(e+"",i+"",n);try{if(n>0&&null!=localStorage){var o=new Date,l={value:i,usi_expires:o.getTime()+1e3*n};localStorage.setItem(e,JSON.stringify(l))}else null!=sessionStorage&&sessionStorage.setItem(e,i)}catch(a){}if(t||null==i){if(null!=i){if(null==usi_cookies.read_cookie(e)&&!t&&usi_cookies.search_cookies("usi_").length+1>usi_cookies.max_cookies_count){usi_cookies.report_error('Set cookie "'+e+'" failed. Max cookies count is '+usi_cookies.max_cookies_count);return}if(i.length>usi_cookies.max_cookie_length){usi_cookies.report_error('Cookie "'+e+'" truncated ('+i.length+"). Max single-cookie length is "+usi_cookies.max_cookie_length);return}}usi_cookies.create_cookie(e,i,n)}},set_json:function(e,i,n,t){var r=JSON.stringify(i).replace(/^"/,"").replace(/"$/,"");usi_cookies.set(e,r,n,t)},flush:function(e){e=e||"usi_";var i,n,t,r=document.cookie.split(";");for(i=0;i<r.length;i++)0==(n=r[i]).trim().toLowerCase().indexOf(e)&&(t=n.trim().split("=")[0],usi_cookies.del(t));usi_cookies.flush_window_name(e);try{if(null!=localStorage)for(var o in localStorage)0==o.indexOf(e)&&localStorage.removeItem(o);if(null!=sessionStorage)for(var o in sessionStorage)0==o.indexOf(e)&&sessionStorage.removeItem(o)}catch(l){}},print:function(){for(var e=document.cookie.split(";"),i="",n=0;n<e.length;n++){var t=e[n];0==t.trim().toLowerCase().indexOf("usi_")&&(console.log(decodeURIComponent(t.trim())+" (cookie)"),i+=","+t.trim().toLowerCase().split("=")[0]+",")}try{if(null!=localStorage)for(var r in localStorage)0==r.indexOf("usi_")&&"string"==typeof localStorage[r]&&-1==i.indexOf(","+r+",")&&(console.log(r+"="+usi_cookies.get_ls(r)+" (localStorage)"),i+=","+r+",");if(null!=sessionStorage)for(var r in sessionStorage)0==r.indexOf("usi_")&&"string"==typeof sessionStorage[r]&&-1==i.indexOf(","+r+",")&&(console.log(r+"="+sessionStorage[r]+" (sessionStorage)"),i+=","+r+",")}catch(o){}for(var l=(window.top||window).name.split(";"),a=0;a<l.length;a++){var u=l[a].split("=");if(3==u.length&&0==u[0].indexOf("usi_")&&-1==i.indexOf(","+u[0]+",")){var f=u[1];-1!=f.indexOf("USIEQLS")&&(f=f.replace(/USIEQLS/g,"=")),-1!=f.indexOf("USIPRNS")&&(f=f.replace(/USIPRNS/g,";")),console.log(u[0]+"="+f+" (window.name)"),i+=","+t.trim().toLowerCase().split("=")[0]+","}}},value_exists:function(){var e,i;for(e=0;e<arguments.length;e++)if(i=usi_cookies.get(arguments[e]),""===i||null===i||"null"===i||"undefined"===i)return!1;return!0},report_error:,"undefined"!=typeof usi_commons&&"function"==typeof usi_commons.gup&&"function"==typeof usi_commons.gup_or_get_cookie)try{""!=usi_commons.gup("usi_email_id")?usi_cookies.set("usi_email_id",usi_commons.gup("usi_email_id").split(".")[0],Number(usi_commons.gup("usi_email_id").split(".")[1]),!0):null==usi_cookies.read_cookie("usi_email_id")&&null!=usi_cookies.get_from_window_name("usi_email_id")&&(usi_commons.load_script("https://www.upsellit.com/launch/blank.jsp?usi_email_id_fix="+encodeURIComponent(usi_cookies.get_from_window_name("usi_email_id")[0])),usi_cookies.set("usi_email_id",usi_cookies.get_from_window_name("usi_email_id")[0],(usi_cookies.get_from_window_name("usi_email_id")[1]-new Date().getTime())/1e3,!0)),""!=usi_commons.gup_or_get_cookie("usi_debug")&&(usi_commons.debug=!0),""!=usi_commons.gup_or_get_cookie("usi_qa")&&(usi_commons.domain=usi_commons.cdn="https://prod.upsellit.com")}catch(e){usi_commons.report_error(e)}-1!=location.href.indexOf("usi_clearcookies")&&usi_cookies.flush()}
USI_setSessionValue = usi_cookies.update_window_name;
USI_getWindowNameValue = usi_cookies.get_from_window_name;
USI_createCookie = usi_cookies.create_cookie;
USI_readCookie = usi_cookies.read_cookie;
USI_deleteVariable = usi_cookies.del;
USI_getSessionValue = usi_cookies.get;
USI_updateASession = usi_cookies.set;
USI_get = usi_cookies.get;
USI_set = usi_cookies.set;
USI_getASession = function(name) {
	try {
		if (typeof(name) == "undefined") {
			name = "USI_Session";
		}
		var USI_Session = usi_cookies.get(name);
		if (USI_Session != null) return USI_Session;
		if (name == "USI_Session" && usi_cookies.get("usi_email_id") != null) {
			return usi_cookies.get("usi_email_id");
		}
		var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
		var string_length = 4;
		var randomstring = '';
		for (var i=0; i<string_length; i++) {
			var rnum = Math.floor(Math.random() * chars.length);
			randomstring += chars.substring(rnum,rnum+1);
		}
		USI_Session = (name == "USI_Session" ? "dh_": name) + randomstring + "" + (new Date()).getTime();
		usi_cookies.set(name, USI_Session, 7*24*60*60, true);
		return USI_Session;
	} catch(err) {
		usi_commons.report_error(err);
	}
	return null;
};
var usi_js_monitor = {
	USI_siteID : 38524,
	USI_remoteIP : '147.83.130.27',
	USI_country : 'es',
	USI_PreviousFieldValues: {},
	
	USI_onlyRecordFields : ['firstName','lastName','BILLINGname1','EMAILemail','secondaryEmail'],
	
	USI_doNotRecordFields : [],
	
	USI_ignore_values : [],
	
	USI_neverRecordFields: ["cc-", "cc_", "ccnum", "creditcard", "cardnum", "cvc", "password", "pass"],
	USI_lastDataPass : '',
	USI_lastNamePass : '',
	lastElement: null,
	USI_itemsReported: 0,
	USI_getASession : 
	USI_contains : function(a, obj) {
		var i = a.length;
		while (i--) {
			if (a[i] === obj) {
				return true;
			}
		}
		return false;
	},
	USI_index : function(a, str) {
		var i = a.length;
		while (i--) {
			if (str.indexOf(a[i]) != -1) {
				return true;
			}
		}
		return false;
	},
	USI_reportAllItems : 
	USI_emailSeen : 
	USI_PostToServer : function(USI_value, USI_name, USI_Session) {
		try {
			if (typeof(usi_append_str) === "undefined") {
				usi_append_str = "";
			}
			if (USI_value.length > 1000) {
				USI_value = USI_value.substring(0, 999);
			}
			var USI_headID = document.getElementsByTagName("head")[0];
			var USI_dynScript = document.createElement("script");
			USI_dynScript.setAttribute("type","text/javascript");
			USI_dynScript.setAttribute("src",usi_commons.domain+"/hound/saveData.jsp?siteID="+usi_js_monitor.USI_siteID+"&USI_value="+encodeURIComponent(decodeURIComponent(USI_value))+"&USI_name="+encodeURIComponent(decodeURIComponent(USI_name))+"&USI_Session="+encodeURIComponent(USI_Session)+usi_append_str);
			USI_headID.appendChild(USI_dynScript);
		} catch(e) {}
	},
	USI_LoadDynamics : function(USI_value, USI_name, USI_Session) {
		try {
			try { USI_value=USI_value+""; } catch(e2) {}
			if (usi_js_monitor.USI_lastDataPass != usi_js_monitor.USI_siteID + "," + USI_value + "," + USI_name + "," + USI_Session) {
				if (!usi_js_monitor.USI_isRecordableValue(USI_value)) return;
				usi_js_monitor.USI_lastNamePass = USI_name;
				if (USI_value.indexOf("@") != -1) {
					if (usi_js_monitor.USI_itemsReported == 0) {
						usi_js_monitor.USI_itemsReported = 1;
						var keepgoing = usi_js_monitor.USI_reportAllItems();
						if (typeof(keepgoing) != "undefined" && keepgoing == false) return;
					}
				}
				usi_js_monitor.USI_lastDataPass = usi_js_monitor.USI_siteID + "," + USI_value + "," + USI_name + "," + USI_Session;
				usi_js_monitor.USI_PostToServer(USI_value, USI_name, USI_Session);
				if (USI_value.search(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) != -1) {
					usi_js_monitor.USI_emailSeen(USI_value);
					if (USI_name != "usi_email") usi_js_monitor.USI_PostToServer(USI_value, "usi_email", USI_Session);
				}
			}
		} catch(err) {
			usi_commons.report_error(err);
		}
	},
	USI_isRecordableField : function (USI_name) {
		if (usi_js_monitor.USI_onlyRecordFields.length > 0) {
			if (usi_js_monitor.USI_contains(usi_js_monitor.USI_onlyRecordFields, USI_name))
				return true;
			else
				return false;
		}
		if (usi_js_monitor.USI_doNotRecordFields.length > 0) {
			if (usi_js_monitor.USI_contains(usi_js_monitor.USI_doNotRecordFields, USI_name))
				return false;
		}
		return true;
	},
	USI_isRecordableValue : function (USI_value) {
		if (usi_js_monitor.USI_ignore_values.length > 0) {
			if (usi_js_monitor.USI_contains(usi_js_monitor.USI_ignore_values, USI_value)) {
				return false;
			}
		}
		return true;
	},
	
	USI_intervalReportStuff : function (event) {
			var theElement = this;
			if (event.srcElement != undefined) {
				theElement = event.srcElement;
			}
			usi_intervalReportingField = theElement;
	},
	
	USI_checkField: function(usi_field, usi_fieldName) {
		try {
			if (usi_field != null) {
				var usi_fieldValue = usi_field.value;
				if (usi_fieldValue != null && usi_fieldValue != "" && usi_fieldValue != usi_js_monitor.USI_PreviousFieldValues[usi_fieldName]) {
					usi_js_monitor.USI_PreviousFieldValues[usi_fieldName] = usi_fieldValue;
					if (usi_fieldValue.indexOf("@") != -1) usi_js_monitor.lastElement = usi_field;
					usi_js_monitor.USI_LoadDynamics(usi_fieldValue, usi_fieldName, USI_getASession());
				}
			}
		} catch(err) {
			usi_commons.report_error(err);
		}
	},
	USI_checkAllForChange : function() {
		try {
			for (var i = 0; i < usi_js_monitor.USI_onlyRecordFields.length; i++) {
				if (document.getElementsByName(usi_js_monitor.USI_onlyRecordFields[i]) != null && document.getElementsByName(usi_js_monitor.USI_onlyRecordFields[i]).length > 0) {
					for (var j=0; j<document.getElementsByName(usi_js_monitor.USI_onlyRecordFields[i]).length; j++) {
						usi_js_monitor.USI_checkField(document.getElementsByName(usi_js_monitor.USI_onlyRecordFields[i])[j], usi_js_monitor.USI_onlyRecordFields[i]);
					}
				} else if (document.getElementById(usi_js_monitor.USI_onlyRecordFields[i]) != null) {
					usi_js_monitor.USI_checkField(document.getElementById(usi_js_monitor.USI_onlyRecordFields[i]), usi_js_monitor.USI_onlyRecordFields[i]);
				}
			}
		} catch(err) {
			usi_commons.report_error(err);
		}
		setTimeout(usi_js_monitor.USI_checkAllForChange, 3000);
	},
	
	USI_reportIfChange : function() {
		try {
			if (usi_intervalReportingField != null) {
				try {
					var theCurrentValue = usi_intervalReportingField.value;
					if (theCurrentValue != usi_intervalReportingFieldLastValue) {
						usi_intervalReportingFieldName = usi_intervalReportingField.name;
						if (usi_intervalReportingFieldName == null || usi_intervalReportingFieldName == "") {
							usi_intervalReportingFieldName = usi_intervalReportingField.getAttribute("id");
							if (usi_intervalReportingFieldName == null || usi_intervalReportingFieldName == "") {
								usi_intervalReportingFieldName = usi_intervalReportingField.getAttribute("placeholder");
							}
						}
						if (!usi_js_monitor.USI_isRecordableField(usi_intervalReportingFieldName)) return;
						if (theCurrentValue.indexOf("@") != -1) usi_js_monitor.lastElement = usi_intervalReportingField;
						usi_js_monitor.USI_LoadDynamics(theCurrentValue, usi_intervalReportingFieldName, USI_getASession());
						usi_intervalReportingFieldLastValue = theCurrentValue;
					}
				} catch (e) { }
			}
		} catch(err) {
			usi_commons.report_error(err);
		}
		setTimeout(usi_js_monitor.USI_reportIfChange, 3000);
	},
	
	USI_reportStuff : function (event) {
		try {
			var theValue = "";
			var theName = "";
			var theElement = this;
			if (event.srcElement != undefined) {
				theElement = event.srcElement;
			}
			theName = theElement.name;
			if (theName == null || theName == "") {
				theName = theElement.getAttribute("id");
				if (theName == null || theName == "") {
					theName = theElement.getAttribute("placeholder");
				}
			}
			theValue = theElement.value;
			if (theName == null || theName.indexOf("usi_chatInput") != -1) return;
			if (((theElement.tagName).toLowerCase() == 'input' || (theElement.tagName).toLowerCase() == 'textarea') && theValue == theElement.title)  return;
			if (!usi_js_monitor.USI_isRecordableField(theName)) return false;
			if (theValue.indexOf("@") != -1) usi_js_monitor.lastElement = theElement;
			usi_js_monitor.USI_LoadDynamics(theValue, theName, USI_getASession());
			usi_intervalReportingField = null; usi_intervalReportingFieldLastValue = "";
		} catch(err) {
			usi_commons.report_error(err);
		}
	},
	USI_displayOptIn: function (obj) {
		var getMsging = function(lang) {
			if (lang.indexOf("zh") != -1) return {text:"\u6211\u4EEC\u53EF\u4EE5\u5411\u60A8\u53D1\u9001\u7535\u5B50\u90AE\u4EF6\u5417\uFF1F", yes_text:"\u662F", no_text:"\u6CA1\u6709"};
			else if (lang.indexOf("zh") != -1) return {text:"\u6211\u5011\u662F\u5426\u53EF\u4EE5\u5BC4\u9001\u96FB\u5B50\u90F5\u4EF6\u7D66\u60A8\uFF1F", yes_text:"\u662F", no_text:"\u6C92\u6709"};
			else if (lang.indexOf("ja") != -1) return {text:"\u304A\u4F7F\u3044\u306E\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3078\u9001\u4FE1\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u304B\uFF1F", yes_text:"\u306F\u3044", no_text:"\u3044\u3044\u3048"};
			else if (lang.indexOf("el") != -1) return {text:"\u039C\u03B1\u03C2 \u03B5\u03C0\u03B9\u03C4\u03C1\u03AD\u03C0\u03B5\u03C4\u03B5 \u03BD\u03B1 \u03C3\u03B1\u03C2 \u03B1\u03C0\u03BF\u03C3\u03C4\u03AD\u03BB\u03BB\u03BF\u03C5\u03BC\u03B5 e-mail;", yes_text:"\u039D\u03B1\u03AF", no_text:"\u039F\u03C7\u03B9"};
			else if (lang.indexOf("fr") != -1) return {text:"Avons-nous l'autorisation de vous envoyer un e-mail ?", yes_text:"Oui", no_text:"Non"};
			else if (lang.indexOf("ru") != -1) return {text:"\u041C\u043E\u0436\u0435\u043C \u043B\u0438 \u043C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0412\u0430\u043C \u043F\u0438\u0441\u044C\u043C\u043E?", yes_text:"\u0434\u0430", no_text:"\u043D\u0435\u0442"};
			else if (lang.indexOf("de") != -1) return {text:"D\u00FCrfen wir Ihnen E-Mails senden?", yes_text:"Ja", no_text:"Nein"};
			else if (lang.indexOf("da") != -1) return {text:"Har vi tilladelse til at sende dig e-mails?", yes_text:"Ja", no_text:"ingen"};
			else if (lang.indexOf("cs") != -1) return {text:"M\u016F\u017Eeme v\u00E1m poslat e-mail?", yes_text:"Ano", no_text:"Ne"};
			else if (lang.indexOf("it") != -1) return {text:"Possiamo contattarti tramite e-mail?", yes_text:"s\u00EC", no_text:"no"};
			else if (lang.indexOf("hu") != -1) return {text:"Enged\u00E9lyezi, hogy e-maileket k\u00FCldj\u00FCnk \u00F6nnek?", yes_text:"Igen", no_text:"nincs"};
			else if (lang.indexOf("nl") != -1) return {text:"Mogen we u e-mails sturen?", yes_text:"Ja", no_text:"geen"};
			else if (lang.indexOf("nn") != -1) return {text:"Har vi tillatelse til \u00E5 sende deg e-post?", yes_text:"Ja", no_text:"ikke"};
			else if (lang.indexOf("pl") != -1) return {text:"Czy mo\u017Cemy Ci wysy\u0142a\u0107 wiadomo\u015Bci e-mail?", yes_text:"tak", no_text:"Nie"};
			else if (lang.indexOf("pt") != -1) return {text:"Temos permiss\u00E3o para lhe enviar e-mails?", yes_text:"sim", no_text:"N\u00E3o"};
			else if (lang.indexOf("sl") != -1) return {text:"Ali vam smemo po\u0161iljati e-po\u0161tna sporo\u010Dila?", yes_text:"Ja", no_text:"Ne"};
			else if (lang.indexOf("sv") != -1) return {text:"F\u00E5r vi skicka e-post till dig?", yes_text:"Ja", no_text:"Nej"};
			else if (lang.indexOf("fi") != -1) return {text:"Annatko meille luvan l\u00E4hett\u00E4\u00E4 sinulle s\u00E4hk\u00F6postia?", yes_text:"Joo", no_text:"Ei"};
			else if (lang.indexOf("tr") != -1) return {text:"Size e-posta g\u00F6ndermeye iznim var m\u0131?", yes_text:"Evet", no_text:"Yok hay\u0131r"};
			else if (lang.indexOf("pt") != -1) return {text:"Temos permiss\u00E3o para lhe enviar e-mails?", yes_text:"sim", no_text:"N\u00E3o"};
			else if (lang.indexOf("es") != -1) return {text:"\u00BFTenemos permiso para enviar por correo electr\u00F3nico?", yes_text:"S\u00ED", no_text:"No"};
			else if (lang.indexOf("vi") != -1) return {text:"Ch\u00FAng t\u00F4i c\u00F3 \u0111\u01B0\u1EE3c ph\u00E9p g\u1EEDi email cho b\u1EA1n kh\u00F4ng?", yes_text:"V\u00E2ng", no_text:"Kh\u00F4ng"};
			else return {text:"Do we have permission to email you?", yes_text:"Yes", no_text:"No"};
		};
		var cnToLang = function(c) {
			if (c == "cn") return "zh";
			else if (c == "cn") return "zh";
			else if (c == "jp") return "ja";
			else if (c == "gr") return "el";
			else if (c == "fr") return "fr";
			else if (c == "ru") return "ru";
			else if (c == "de") return "de";
			else if (c == "dk") return "da";
			else if (c == "cz") return "cs";
			else if (c == "it") return "it";
			else if (c == "hu") return "hu";
			else if (c == "nl") return "nl";
			else if (c == "no") return "nn";
			else if (c == "pl") return "pl";
			else if (c == "pl") return "pt";
			else if (c == "si") return "sl";
			else if (c == "se") return "sv";
			else if (c == "fi") return "fi";
			else if (c == "tr") return "tr";
			else if (c == "br") return "pt";
			else if (c == "es") return "es";
			else if (c == "vi") return "vi";
			else return "en";
		};
		var getPageTopLeft = function (el) {
			var left = 0;
			var top = 0;
			try {
				var rect = el.getBoundingClientRect();
				var docEl = document.documentElement;
				left = rect.left + el.offsetWidth + (window.pageXOffset || docEl.scrollLeft || 0);
				top = rect.top + el.offsetHeight + (window.pageYOffset || docEl.scrollTop || 0);
			} catch(e) {}
			return {
				left: left,
				top: top
			};
		};
		if(typeof obj === 'undefined') {
			obj = {};
		}
		var text = 'Do we have permission to email you?';
		var yes_text = 'Yes';
		var no_text = 'No';
		if (typeof obj.text !== 'undefined' && typeof obj.yes_text !== 'undefined' && typeof obj.yes_text !== 'undefined') {
			text =  encodeURIComponent(obj.text);
			yes_text = encodeURIComponent(obj.yes_text);
			no_text = encodeURIComponent(obj.no_text);
		} else {
			var msgPack = getMsging(cnToLang(usi_js_monitor.USI_country));
			if (typeof obj.language !== 'undefined') {
				msgPack = getMsging(obj.language);
			}
			text = encodeURIComponent(msgPack.text);
			yes_text = encodeURIComponent(msgPack.yes_text);
			no_text = encodeURIComponent(msgPack.no_text);
		}
		var background_color = typeof obj.background_color !== 'undefined' ? obj.background_color : '#fff';
		var text_color = typeof obj.text_color !== 'undefined' ? obj.text_color : '#777';
		var button_color_yes = typeof obj.button_color_yes !== 'undefined' ? obj.button_color_yes : '#fff';
		var button_color_no = typeof obj.button_color_no !== 'undefined' ? obj.button_color_no : '#fff';
		var yes_color = typeof obj.yes_color !== 'undefined' ? obj.yes_color : '#07B579';
		var no_color = typeof obj.no_color !== 'undefined' ? obj.no_color : '#C1C4C3';
		var element = typeof obj.element !== 'undefined' ? obj.element : '';
		var country = usi_js_monitor.USI_country;
		var force_optin = typeof obj.force_optin !== 'undefined' ? obj.force_optin : false;
		var usi_position = 'position:fixed;right: 260px; top: 50%;';
		if(element != null && element !== '') {
			var usi_element_dimensions = getPageTopLeft(element);
			if(window.innerWidth - usi_element_dimensions.left > 280) {
				if (usi_element_dimensions.top < 70) {
					usi_element_dimensions.top = 70;
				}
				usi_position = 'position:absolute;left:' + usi_element_dimensions.left + 'px;top:' + usi_element_dimensions.top + 'px;';
			}
		}
		var html = [
			'<div id="usi_optin_contain">',
			'<p id="usi_text">', decodeURIComponent(text), '</p>',
			'<div><span id="usi_yes"><div class="usi_middle">', decodeURIComponent(yes_text), '</div></span>',
			'<span id="usi_no"><div class="usi_middle">', decodeURIComponent(no_text), '</div></span>',
			'</div>',
			'</div>'
		].join('');
		var desktop_css = [
			'#usi_optin_div * { margin: 0; padding: 0; border: 0; font-size: 16px; line-height: 16px;font-family: Helvetica, Arial, sans-serif; }',
			'#usi_optin_div {', usi_position, 'transition: transform 0.5s ease; transform: translate(3330px, 0px); z-index: 2000010000;}',
			'#usi_optin_contain:before { border: 1px solid ', background_color, '; border-color: transparent transparent ', background_color, ' ', background_color, '; border-width: 13px; content: ""; position: absolute; left: 2px; top: 30%; height: 0; width: 0; transform-origin: 0 0; transform: rotate(45deg); box-shadow: -2px 2px 1px rgba(0, 0, 0, 0.4);}',
			'#usi_optin_contain {position: absolute; left: 25px; top: -62px; background: ', background_color, '; box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, .4); width: 236px; height: 96px; text-align: center;}',
			'#usi_text {font-size: 12px;margin-top:16px;font-weight:700;font-family: Helivtica, Arial, sans-serif;color:', text_color, ';}',
			'#usi_yes {position: absolute; display:table;top: 55px; left: 18px; width: 88px; height: 30px; background: ', yes_color, '; color: ', button_color_yes, '; text-decoration: none; line-height: 2; font-weight: 700; cursor: pointer;text-transform: uppercase;}',
			'#usi_no {position: absolute; display:table;left: 126px; top: 55px; width: 88px; height: 30px; background: ', no_color, '; color: ', button_color_no, '; text-decoration: none; line-height: 2; font-weight: 700; cursor: pointer;text-transform: uppercase;}',
			'.usi_middle {display:table-cell;vertical-align:middle;}'
		].join('');
		var mobile_css = [
			'#usi_optin_div * { margin: 0; padding: 0; border: 0; font-size: 16px; line-height: 16px;font-family: Helvetica, Arial, sans-serif; }',
			'#usi_optin_div {position: fixed; height: 125px; bottom: 0; width: 100%; transition: transform 0.5s ease; transform: translate(0px, 3000px); z-index: 2000010000;}',
			'#usi_optin_contain:before {border: 1px solid ', background_color, '; border-color: ', background_color, ' transparent transparent ', background_color, '; border-width: 17px; content: ""; position: absolute; left: 50%; top: -18%; height: 0; width: 0; transform-origin: 0 0; transform: rotate(45deg); box-shadow: -2px -2px 1px rgba(0, 0, 0, 0.4);}',
			'#usi_optin_contain {position: absolute; background: ', background_color, '; box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, .4); width: 100%; height: 100%; text-align: center;}',
			'#usi_text {font-size: 1em;margin-top:16px;font-weight:700;font-family: Helivtica, Arial, sans-serif;color:', text_color, ';}',
			'#usi_yes {position: absolute; display:table;top: 50%; right: 0; width: 33%; height: 33%; background: ', yes_color, '; color: ', button_color_yes, '; text-decoration: none; line-height: 3; font-weight: 700; cursor: pointer; margin-right: 10%;text-transform: uppercase;}',
			'#usi_no {position: absolute; display:table;left: 0; top: 50%; width: 33%; height: 33%; background: ', no_color, '; color: ', button_color_no, '; text-decoration: none; line-height: 3; font-weight: 700; cursor: pointer; margin-left: 10%;text-transform: uppercase;}',
			'.usi_middle {display:table-cell;vertical-align:middle;}'
		].join('');
		var usi_isMobile = (/iphone|ipod|ipad|android|blackberry|iemobile/i).test(navigator.userAgent.toLowerCase());
		var css = usi_isMobile ? mobile_css : desktop_css;
		var remove_optin = function() {
			if (document.getElementById('usi_optin_div') != null){
				var optin = document.getElementById('usi_optin_div');
				optin.style.transform = 'translate(3000px, 0px)';
			}
		};
		var opt_in = function() {
			remove_optin();
			usi_js_monitor.USI_LoadDynamics('1', 'optedin', usi_js_monitor.USI_getASession());
			usi_js_monitor.USI_LoadDynamics('null', 'no_optedin', usi_js_monitor.USI_getASession());
		};
		var opt_out = function() {
			remove_optin();
			usi_js_monitor.USI_LoadDynamics('1', 'no_optedin', usi_js_monitor.USI_getASession());
			usi_js_monitor.USI_LoadDynamics('null', 'optedin', usi_js_monitor.USI_getASession());
		};
		var place_css = function() {
			var css_element = document.createElement("style");
			css_element.type = "text/css";
			if(css_element.styleSheet) {
				css_element.styleSheet.cssText = css;
			} else {
				css_element.innerHTML = css;
			}
			document.getElementsByTagName('head')[0].appendChild(css_element);
		};
		var place_html = function() {
			var html_element = document.createElement('div');
			html_element.setAttribute('id', 'usi_optin_div');
			html_element.innerHTML = html;
			document.body.appendChild(html_element);
		};
		var usi_gup = function( name ) {
			name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
			var regexS = "[\\?&]"+name+"=([^&#]*)";
			var regex = new RegExp( regexS );
			var results = regex.exec( window.location.href );
			if( results == null ) return "";
			else return results[1];
		};
		var optin_required = function() {
			var countries = ['at', 'be', 'bg', 'ca', 'ch', 'cy', 'cz', 'de', 'dk', 'ee', 'es', 'fi', 'fr', 'gb', 'gr', 'hr', 'hu', 'ie', 'it', 'it', 'is', 'lu', 'lv', 'lt', 'mt', 'nl', 'no', 'pl', 'pt', 'ro', 'se', 'si', 'sk', 'uk'];
			if (usi_gup("usi_country") != "") country = usi_gup("usi_country");
			
			return countries.indexOf(country) !== -1 || force_optin === true;
		};
		var show_optin = function() {
			if(optin_required() === false && location.href.indexOf("usi_optin_test") == -1) {
				opt_in();
				return;
			}
			place_css();
			place_html();
			var optin = document.getElementById('usi_optin_div');
			var yes = document.getElementById('usi_yes');
			var no = document.getElementById('usi_no');
			yes.addEventListener('click', opt_in, false);
			no.addEventListener('click', opt_out, false);
			setTimeout( 250);
		};
		show_optin();
	}
};
var usi_page_registered = false;
var usi_intervalReportingField = null; usi_intervalReportingFieldLastValue = "";
USI_registerThePage = function() {
	try {
		if (usi_page_registered) return;
		usi_page_registered = true;
		var USI_inputs = document.getElementsByTagName('input');
		for (var i=0; i<USI_inputs.length; i++ ) {
			if (USI_inputs[i].addEventListener) {
				USI_inputs[i].addEventListener("blur", usi_js_monitor.USI_reportStuff, false);
			} else if (USI_inputs[i].attachEvent) {
				var r = USI_inputs[i].attachEvent("onblur", usi_js_monitor.USI_reportStuff);
			}
		
		if (USI_inputs[i].addEventListener) {
				USI_inputs[i].addEventListener("focus", usi_js_monitor.USI_intervalReportStuff, false);
			} else if (USI_inputs[i].attachEvent) {
				var r = USI_inputs[i].attachEvent("onfocus", usi_js_monitor.USI_intervalReportStuff);
			}
		
		}
		var USI_textareas = document.getElementsByTagName('textarea');
		for (var i=0; i<USI_textareas.length; i++ ) {
			if (USI_textareas[i].addEventListener) {
				USI_textareas[i].addEventListener("blur", usi_js_monitor.USI_reportStuff, false);
			} else if (USI_textareas[i].attachEvent) {
				var r = USI_textareas[i].attachEvent("onblur", usi_js_monitor.USI_reportStuff);
			}
		
		if (USI_textareas[i].addEventListener) {
				USI_textareas[i].addEventListener("focus", usi_js_monitor.USI_intervalReportStuff, false);
			} else if (USI_textareas[i].attachEvent) {
				var r = USI_textareas[i].attachEvent("onfocus", usi_js_monitor.USI_intervalReportStuff);
			}
		
		}
		var USI_selects = document.getElementsByTagName('select');
		for (var i=0; i<USI_selects.length; i++ ) {
			if (USI_selects[i].addEventListener) {
				USI_selects[i].addEventListener("change", usi_js_monitor.USI_reportStuff, false);
			} else if (USI_selects[i].attachEvent) {
				var r = USI_selects[i].attachEvent("onchange", usi_js_monitor.USI_reportStuff);
			}
		}
		
		setTimeout(usi_js_monitor.USI_reportIfChange, 3000);
		
		setTimeout(usi_js_monitor.USI_checkAllForChange, 3000);
		
	} catch(err) {
		usi_commons.report_error(err);
	}
}

usi_monitorForEmails = function(evt){
	try {
		if (document.activeElement != null) {
			if ((document.activeElement.tagName).toLowerCase() == 'input' || (document.activeElement.tagName).toLowerCase() == 'textarea') {
				if (document.activeElement.value != null && document.activeElement.value.indexOf("@") != -1 && document.activeElement.type != "password") {
					var usi_doNotRecord = 0;
					var usi_the_name = document.activeElement.name;
					try {
						if (usi_the_name == null || usi_the_name == "") usi_the_name = document.activeElement.getAttribute("id");
						if (usi_the_name == null || usi_the_name == "") usi_the_name = document.activeElement.getAttribute("placeholder");
					} catch(e) {}
					if (usi_the_name != null && usi_the_name != "") {
						if (usi_js_monitor.USI_doNotRecordFields.length > 0) {
							if (usi_js_monitor.USI_contains(usi_js_monitor.USI_doNotRecordFields, usi_the_name))
								usi_doNotRecord = 1;
						}
						if (usi_js_monitor.USI_index(usi_js_monitor.USI_neverRecordFields, usi_the_name.toLowerCase())) {
							usi_doNotRecord = 1;
						}
					} else {
						usi_doNotRecord = 1; //default to no
						if (document.activeElement.type == "email") {
							usi_doNotRecord = 0; //unless it's an email field!
						}
					}
					if (usi_doNotRecord == 0) {
						if (usi_js_monitor.USI_onlyRecordFields.length > 0 && !usi_js_monitor.USI_contains(usi_js_monitor.USI_onlyRecordFields, usi_the_name)) {
							usi_js_monitor.USI_onlyRecordFields.push(usi_the_name);
							if (document.activeElement.addEventListener) {
								document.activeElement.addEventListener("blur", usi_js_monitor.USI_reportStuff, false);
							} else if (document.activeElement.attachEvent) {
								var r = document.activeElement.attachEvent("onblur", usi_js_monitor.USI_reportStuff);
							}
						}
					}
				}
			}
		}
	} catch(err) {
		usi_commons.report_error(err);
	}
};
if (document.addEventListener) {
	document.addEventListener("keydown", usi_monitorForEmails, false);
} else if (document.attachEvent) {
	var r = document.attachEvent("onkeydown", usi_monitorForEmails);
}

if (window.addEventListener){
	window.addEventListener('load', USI_registerThePage, true);
} else if (window.attachEvent){
	window.attachEvent('onload', USI_registerThePage);
} else {
	USI_registerThePage();
}

try {
	//  Register listeners
USI_registerThePage();

// Send data to email
usi_js_monitor.USI_reportAllItems = function () {
  try {
    if (usi_custom_monitor.is_reported) return;
    usi_custom_monitor.is_reported = true;
    if (typeof usi_app.locale != "undefined" && ["en-US"].indexOf(usi_app.locale) != -1) {
			usi_custom_monitor.send_data("1", "optedin");
      usi_js_monitor.send_all_info();
    } else if (document.getElementById("usi_optin_div") == null) {
      var locale = usi_custom_monitor.get_locale();
      if (locale == undefined) return false;
      var info = usi_app.email_info[locale];
      if (info == undefined) return false;
      usi_custom_monitor.show_opt_in(info);
      return false;
    }
  } catch (e) {}
}

usi_js_monitor.send_all_info = function() {
  // get locale data
  if (usi_custom_monitor.is_sent) return;
  usi_custom_monitor.is_sent = true;
  var locale = usi_custom_monitor.get_locale();
  if (locale == undefined) return;
  var info = usi_app.email_info[locale];
  if (info == undefined) return;
  usi_custom_monitor.send_data(locale, "usi_locale");
  usi_js_monitor.USI_LoadDynamics(usi_app.email, 'usi_email', usi_js_monitor.USI_getASession());
  // check what type of cart they are on (needed for footer text)
  usi_custom_monitor.send_cart_type();
  // send unique locale data
  usi_custom_monitor.send_locale_data(info);
  // send product data to email
  usi_custom_monitor.send_products();
  
  // NEW [2-17-2022] - Resend email after 5 sec delay
  setTimeout(function() {
    usi_commons.log('[ 145970 ] Resending email:', usi_app.email);
    usi_custom_monitor.send_data(usi_app.email, "usi_email");
  }, 5000);
}

try {
  usi_commons.log('[ 38486 - 145970 ] Init PC Monitor');
	usi_custom_monitor.init();
} catch (e) {}
} catch (err) {
	usi_commons.report_error(err);
}
