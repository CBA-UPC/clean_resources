<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>ls</title>
	</head>
	<body>
		<script type="text/javascript">
			var ssl = (document.location && document.location.protocol && document.location.protocol=='https:')?1:0;
			var lsdata = '-GREFRESH';
			var lsvalid = null;
			function convert(value) {
				var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_.";
				var eparams = [["JGAqF4golq8j.WbwIGSijfqM4vrrxkjUMNXlz2X7rnH.a7",3707702319],["VIN1rfi1kCnTvI7g9JQlPtnd0ccbIV32kATQuW6RJSP.K7",2168622380],["hVhwjNu.aux.k_ok8AJeugh1MYFIPh6nRbDgX1AmwYj.T7",2047464041],["hbiKLtrvpiBvCJwO7CUEpamvgPbgnD36Dzm2zla8uXj.I7",257314994],["Twh72LS569AOZF19x5dn.pjVMPEQ6R436BWTin0OyR7.m7",2461294418],["hElwLGijamwoDvpw6BJ6BBiXk9pIfCj.FVZ1QqRq4m3.h7",3895912316],["_iAqd78Kli8JQMKoItKAl.iZUlB4JHW3GIRZMXQYCV..27",3786485069],["KkOFVz_08EMpZ5lkIkQ2Eeo_UNUbyin7ygbU8tuo9En.97",1968900779],["VPKAzGsByk36YosnPYn7uQfUk19IfCjq39o4AgWNek..67",1349696235],["VCkqPffolih4H2bKrE6uhff7oCZ4e0nQP7JkxW2ncE7.v7",396642431],["VBkgmfi4uo9zFos4_L5D6Lm1MvvgBWmTRRGiPmG2Err.87",2363795518],["Ws.Qeq8dCrpz9_W2eQRcKnsqYlmz8hUpoyI5KsbLiWb.y7",1260343229],["WhLQJa8vCjg0Tept9uCGGxfG49tIp0jE5X2.OEvkmsD.U7",2186349960],["_j.aKb865lA5e3xLVhZotXuLIe6zx33MM.xA0gtfVbf.U7",1944076443],["Kuoqpz8Alm_TbJED5RX7_SgSYn4Y8RWn32FJPmDIuaP.27",1951186638],["T6fQhbQ5Crfehgu2N9D.3puYUHaDqipkc2pa7KtVtCT.37",3814163077],["9QIll3uu4ItfPkmDkAdWvhhoMWdIHh6eFTzD0kxnEd..x7",836891655],["WsBwY68daqxp6Jno6nmi8gfSMRFIFR5HdaZmO8w5qZX.17",1617727427],["iuqLGh9nSvnu4yiJNhtRdwfVsiNILjWeUqFMEFGcLWr.j7",1361325035],["JAOLSoh5SznzZR07RO7nkvq6UHXrPypkMGlqkKXHKHz.W7",4031587973]];
				var eparam = eparams[Math.floor(Math.random()*eparams.length)];
				var seed = eparam[1];
				var result = eparam[0];
				if (typeof value != "string" || value.length==0 || value.charAt(0)=='-') {
					return value;
				} else {
					for (var i=0; i<value.length; ++i) {
						var ch = value.charAt(i);
						var pos = chars.indexOf(ch);
						if (ch=='|') {
							return result + value.slice(i, value.length);
						} else if (pos != -1) {
							result = result + chars[(pos + Math.floor(seed / 67108864)) % chars.length];
						} else {
							result = result + ch;
						}
						seed = ((seed * 1664525) + 1013904223) % 4294967296;
					}
					return result;
				}
			}
			function refresher() {
				var n = (new Date()).getTime();
				if (lsvalid==null || lsvalid>n) {
					try {
						localStorage.gstorage = lsdata;
					} catch (e) {}
				}
			}
			function msgreceiver(e) {
				if (typeof e.data=="string" && e.data.substr(0,23)=="_xx_gemius_set_add_xx_/") {
					try {
						localStorage.gaddstorage = e.data.substr(23);
					} catch (e) {}
				}
				if (typeof e.data=="string" && e.data=="_xx_gemius_get_add_xx_" && typeof window.postMessage!='undefined') {
					try {
						if (!localStorage.gaddstorage) {
							parent.postMessage("_xx_gemius_add_xx_/","*");
						} else {
							parent.postMessage("_xx_gemius_add_xx_/"+localStorage.gaddstorage,"*");
						}
					} catch (e) {
						parent.postMessage("_xx_gemius_add_xx_/-GETERR","*");
					}
				}
				if (e.origin=="https://ls.hit.gemius.pl" && typeof e.data=="string" && e.data.substr(0,24)=="_xx_gemius_internal_xx_/" && ssl==0) {
					var data = e.data.substr(24);
					var lsvalidts = (new Date()).getTime()+(1000*86400*14);
					if (data!='' && data.charAt(0)!='-') {
						localStorage.gstorage = data+"|"+lsvalidts;
					}
					parent.postMessage("_xx_gemius_xx_/"+convert(localStorage.gstorage),"*");
				}
			}
			if (typeof window.postMessage != 'undefined') {
				try {
					lsdata = localStorage.gstorage;
					if (lsdata && lsdata.length>46 && lsdata.charAt(46)!='/') {
						lsdata = lsdata.slice(0,46)+lsdata.slice(lsdata.lastIndexOf('/'),lsdata.length);
					}
					if (lsdata && lsdata.charAt(0)!='-') {
						var m = lsdata.match(/\|(\d+)$/);
						if (m) {
							lsvalid = m[1];
						}
						setInterval("refresher()",1000);
					}
					if (ssl) {
						if (!lsdata || lsdata=='' || lsdata.charAt(0)=='-') {
							localStorage.gstorage = "Kmgruz8pO42i3_ol7nGcgnC5OhOf0hiCjQSXiIQqSPb.87/"+new String((new Date()).getTime())+"/";
						}
						lsdata = localStorage.gstorage;
						parent.postMessage("_xx_gemius_xx_/"+convert(lsdata),"*");
						try {
							if (window.location.search.indexOf("mode=new") != -1) {
								parent.postMessage("_xx_gemius_internal_xx_/"+lsdata,"http://ls.hit.gemius.pl");
							}
						} catch (e) {
						}
					} else {
						var m;
						var n;
						if (lsdata) {
							m = lsdata.match(/^([A-Z0-9a-z\.\_\/]*).*\|([0-9]+)$/);
							n = (new Date()).getTime() + 60000;
						}
						if (!lsdata || lsdata=='' || lsdata.charAt(0)=='-' || !m || m[2]<n) {
							var f = document.createElement('iframe');
							f.setAttribute('width',0);
							f.setAttribute('height',0);
							f.setAttribute('scrolling','no');
							f.style.display="none";
							f.style.visibility="hidden";
							document.body.appendChild(f);
							f.setAttribute('src','https://ls.hit.gemius.pl/lsget.html?mode=new');
						} else {
							parent.postMessage("_xx_gemius_xx_/"+convert(lsdata),"*");
						}
					}
				} catch (e) {
					parent.postMessage("_xx_gemius_xx_/-GETERR","*");
				}
				if (window.addEventListener) {
					window.addEventListener('message', msgreceiver, false);
				} else if (window.attachEvent) {
					window.attachEvent('onmessage', msgreceiver);
				}
			}
		</script>
	</body>
</html>
