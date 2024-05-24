if(typeof(_BSTRK_LOADED) == 'undefined') {
	var _TRK_DPUID="";
	function _trkdp_getNewSID(len) {
		var str="01234567890abcdef";
		var ret="";
		for(var i=0; i<len; i++) {
			ret=ret+(str.substr(Math.floor(Math.random()*str.length),1));
		}
		return ret;
	}
	function _trkdp_setCookie(name,value,expire) {
		var today=new Date();
		today.setTime(today.getTime()+ expire);

		var domainStr = "";
		if((typeof _TRK_CDMN)!="undefined" && _TRK_CDMN!="") domainStr = "domain="+_TRK_CDMN+";";
		document.cookie=name+"="+value+"; path=/; "+domainStr+" expires="+today.toGMTString()+";";
	}

	function _trkdp_getCookie(name) {
		var cookieName=name+"=";
		var x=0;
		while(x<=document.cookie.length) {
			var y=(x+cookieName.length);
			if(document.cookie.substring(x,y)==cookieName) {
				if((endOfCookie=document.cookie.indexOf(";",y))==-1) endOfCookie=document.cookie.length;
				return unescape(document.cookie.substring(y,endOfCookie));
			}
			x=document.cookie.indexOf(" ",x)+1;
			if(x == 0) break;
		}
		return "";
	}

	function getGuuidForBizspring(skeletonUrl, callback) {
		try{
			guuid = _trkdp_getCookie("_BS_GUUID");
			if(guuid == "") {
				var callbackName = 'bizSpring_callback_' + Math.round(100000 * Math.random());
				window[callbackName] = function(data) {
					try{delete window[callbackName];}catch(sTrkErr){}
					document.head.removeChild(script);
					callback(data);
				};
				var script = document.createElement('script');
				script.onerror = function(){
					guuid = ((typeof _TRK_UID)!="undefined" && _TRK_UID!="") ? _TRK_UID : "";
					callTracker(guuid);
				};
				script.src = skeletonUrl + (skeletonUrl.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
				document.head.append(script);
			} else {
				callTracker(guuid);
			}
		}catch(trkEr1){
			guuid = ((typeof _TRK_UID)!="undefined" && _TRK_UID!="") ? _TRK_UID : "";
			callTracker(guuid);
		}
	}

	function callTracker(guuid) {
		_TRK_DPUID = guuid;
		/* Logger Tracking Script */
		if((typeof _TRK_LID)!="undefined" && _TRK_LID!=""){
			(function(b,s,c){var f=b.getElementsByTagName(s)[0],j=b.createElement(s);j.async=true;j.src='//fs.bizspring.net/fs4/logger.v4.1.js';f.parentNode.insertBefore(j,f);if(typeof c == "function")c(j);})(document,'script',function(j){
				if (j.addEventListener) {
					j.addEventListener('load', function(){
						/* PN Tracking Script */
						if((typeof _TRK_PN)!="undefined" && _TRK_PN!=""){
							(function(b,s){var f=b.getElementsByTagName(s)[0],j=b.createElement(s);j.async=true;j.src='//fs.bizspring.net/fs4/logger.pn.v1.js';f.parentNode.insertBefore(j,f);})(document,'script');
						}
					});
				}else if(j.attachEvent){
					if( j.attachEvent('onload',  ){
						/* PN Tracking Script */
						if((typeof _TRK_PN)!="undefined" && _TRK_PN!=""){
							(function(b,s){var f=b.getElementsByTagName(s)[0],j=b.createElement(s);j.async=true;j.src='//fs.bizspring.net/fs4/logger.pn.v1.js';f.parentNode.insertBefore(j,f);})(document,'script');
						}
					}
				}
			});
		}
	}

	var guuidDom = "gu.bizspring.net";
	var guuidSetterURL = "";
	guuidSetterURL = "https://"+guuidDom+'/p.php?guuid='+_trkdp_getNewSID(32)+ "&domain="+encodeURIComponent(document.domain) ;
	getGuuidForBizspring(guuidSetterURL, function(data) {
		guuid = data;
		_trkdp_setCookie("_BS_GUUID", guuid, 30*365*24*60*60*1000);
		callTracker(guuid);
	});
	var _BSTRK_LOADED = 'loaded';

	/* ISOI Custom - 42968:PC, 42931:Mobile */
	if(typeof _TRK_LID != "undefined" && (_TRK_LID == "42968" || _TRK_LID == "42931")) {
		_L_LALT = 14;		
		(function(b,s,t,c,k){b[k]=s;b[s]=b[s]||  var f=t.getElementsByTagName(c)[0],j=t.createElement(c);j.async=true;j.src='//fs.bizspring.net/fs4/l4cts.v4.2.js';f.parentNode.insertBefore(j,f);})(window,'_tcts_m',document,'script','BSAnalyticsObj');
		if(_TRK_LID == "42968") {
			_tcts_m('15451','PROTO');
		} else if(_TRK_LID == "42931") {
			_tcts_m('15452','PROTO');
		}
	}

}

