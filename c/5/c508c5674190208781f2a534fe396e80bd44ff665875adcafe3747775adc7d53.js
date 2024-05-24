/*
	External callbacks
*/

function SyncR_Callback(_ruid) {
	window['rnetplus_acqPt'](_ruid);
	//window['rnetplus_acqPt'] = null;
}
}

/* Main code */

(function () {
	var curScript = document.currentScript;
	var cid;
	var force_abp = false;
	var force_abp_v = false;

	if (!curScript) {
		var scripts = document.getElementsByTagName('script');
		for(var jk = scripts.length - 1; jk >= 0; --jk) {
			if (scripts[jk].src.indexOf('cripts/api.min.js') > 0) {
				consumeCurScript(scripts[jk]);
				//break;
			}
			else if (scripts[jk].src.indexOf('cripts/api.js') > 0) {
				consumeCurScript(scripts[jk]);
				//break;
			}
		}
	}
	else
		consumeCurScript(curScript);

	function derefFunctionByName(functionName, context, argMap) {
		if (!functionName)  return null;

		var namespaces = functionName.split(".");
		var func = namespaces.pop();
		for(var i = 0; i < namespaces.length; i++) 
			context = context[namespaces[i]];
		return {ctx: context, fn: context[func], name: func, argV: argMap };
	}

	function executeFunctionByDeref(functionCtx, arg, asyncCallFlag) {
		var retn = functionCtx.fn.apply(functionCtx.ctx, [arg, asyncCallFlag, functionCtx.argV]);
		return retn;
	}

	function consumeCurScript(curScript) {
		try {
			var href = curScript.src;

			var mapV = {};
    		href.split('?')[1].split('&').forEac});

    		var callbackFunc = derefFunctionByName(mapV["callback"], window, mapV);
    		if (mapV["cid"] && (!cid || cid == '{}')) cid = mapV["cid"];
    		if (mapV["abp"]){ 
    			force_abp_v = mapV["abp"] == true || mapV["abp"] == 1;
    			force_abp = true;
    		}

    	    window['rnetplus_acqPtCbUbCtx'] = window['rnetplus_acqPtCbUbCtx'] || [];
        	window['rnetplus_acqPtCbUbCtx'].push(callbackFunc);

        	mapV["cid"] = null;
        	mapV["callback"] = null;
    	}
		catch(ee) {
		}
	}

	/*
	 * User management
	*/
	var app_id_bacon = "a8422396-8b51-4eb1-a7b2-163540ede795";
	var app_id = "rnetplus";

    var userIdKey = "RamblerExchangeUserId";
    var userId = "";
    var ruid = "";
    var stamp= Math.round(new Date().getTime()/1000);
    var portrait = "";
    var uniq = false;
    var abp = null;

    window['rnetplus_acqPt'] = acquirePortrait;
    window['rnetplus_acqPtCb'] = acquirePortraitImpl;
    window['rnetplus_acqPtQ'] = window['rnetplus_acqPtQ'] || [];

    var uuid };

	function onApiDataLoadedCallback (data, flag) {
		data.screen = "" + window.screen.width + "x" + window.screen.height;
		data.urlParams = "screen="+data.screen + "&user_id=" + data.uid + "&rp=" + data.rp;
		if (force_abp) abp = force_abp_v;
		if (abp != null){ 
		    abp = abp ? 1 : 0;
			data.urlParams += "&abp=" + abp;
			data.abp = abp;
		}

		data.xref = encodeURIComponent(document.location);
		data.urlParams += "&xref=" +  data.xref;

		//console.log("Rnet+: " + data.urlParams);
		if (window['rnetplus_acqPtCbUbCtx']) {
			var array = [];
			for(var j = 0; j < window['rnetplus_acqPtCbUbCtx'].length; ++j) {
				var callbackFunc = window['rnetplus_acqPtCbUbCtx'][j];
				if (callbackFunc) array.push(callbackFunc);
				// window['rnetplus_acqPtCbUbCtx'][j] = null;
				// if (callbackFunc) console.log("Rnet+: " + callbackFunc.name);
			}
			for(var j = 0; j < array.length; ++j) 
				executeFunctionByDeref(array[j], data, flag);
		}
	}

    // function xlog(s) { console.log(window.location + ": " + s); }

    if (window.localStorage) {
        userId = window.localStorage.getItem(userIdKey);
        if ((!userId || userId == '{}') && cid && cid != '{}' && cid.length() > 0) {
        	userId = cid;
            uniq = true;
            window.localStorage.setItem(userIdKey, userId);
        }

        if (!userId || userId == '{}') {
            userId = uuid();
            uniq = true;
            window.localStorage.setItem(userIdKey, userId);
        }

        var oldstamp = window.localStorage.getItem(userIdKey + ".ruid.stamp");
        if (oldstamp && parseInt(oldstamp) + 24 * 3600 < stamp) {
	        window.localStorage.removeItem(userIdKey + ".ruid");
    	    window.localStorage.removeItem(userIdKey + ".ruid.stamp");
    	    window.localStorage.removeItem(userIdKey + ".ruid.rp");
        }
        ruid = window.localStorage.getItem(userIdKey + ".ruid");
	    portrait = window.localStorage.getItem(userIdKey + ".ruid.rp");
    }

    if (!window.localStorage || window.localStorage.getItem(userIdKey) != userId) {
    	// welcome private browsing
    	if (window["rnetplus_acqPt_Guid"]) 
    		userId = window["rnetplus_acqPt_Guid"];
    	else
    		window["rnetplus_acqPt_Guid"] = userId;
    	portrait = "";
    	ruid = "---";
    	abp = false;
    }

    function getUserId () { return userId; }
  }
    function getRuId () { 
    	if(ruid == "null" || ruid == "" || ruid == "KgAAAPfwGFhuL9dlAQyTBAB=") ruid = null; 
    	return ruid; 
    }

    /*
     * Digital portrait dances: 1x1px image
     * How it works: sync.rambler.ru redirects to /service/syncr?ruid=...
     * And then /service/syncr returns script calling SyncR_Callback(ruid)
    */
    function wireUserIds() {
    	/*
		var img = new Image();
		img.src = "https://sync.rambler.ru/set?partner_id="+app_id+"&id=" + getUserId() + "&dt=" + Math.round(new Date().getTime()/1000);
		*/

		if (window.wireUserIdsInProgress)  return;
		window.wireUserIdsInProgress = true;

    	var scriptVsAjax = document.createElement('script');
    	try { scriptVsAjax.crossorigin = "anonymous"; } catch(e) {}
    	scriptVsAjax.src = decodeURIComponent(
    		"https://sync.rambler.ru/emily?partner_id=" + app_id_bacon
			+ "&id=" + getUserId() 
			+ "&dt=" + new Date().getTime()
			);

		scriptVsAjax.onerror = function() { // server returned bad-ass response
			acquirePortrait('---');
		}

    	document.getElementsByTagName("head")[0].appendChild(scriptVsAjax); 
    }

    function pushBackLoads(_rp) {
    	var arr = window['rnetplus_acqPtQ'];
    	if (arr != null && arr.length > 0) {
	    	for(var j=0; j < arr.length; ++j) {
    			var data = window['rnetplus_acqPtQ'][j];
    			data.rp = _rp;
    			onApiDataLoadedCallback(data, true);
    		}
    	}
    	else {
		    onApiDataLoadedCallback({uid: getUserId(), rp: _rp, u: uniq}, true);
    	}
    }

    function acquirePortrait (_ruid) {
	    if (_ruid == '---') {
	    	pushBackLoads('');
	    	return;
	    }
	    
	    if (window.localStorage) {
    	    window.localStorage.setItem(userIdKey + ".ruid", _ruid);
        	window.localStorage.setItem(userIdKey + ".ruid.stamp", Math.round(new Date().getTime()/1000));
	    }
	    ruid = _ruid;

    	if (!_ruid) _ruid = "KgAAAPfwGFhuL9dlAQyTBAB=";
		var script = document.createElement('script');
		script.src = "https://bacon.rambler.ru/api/data/v1.5/user.get?" 
			+ "app_id=" + app_id_bacon + "&callback=acquirePortraitCallbackFunc"
			+ "&ruid="  + _ruid;
		document.getElementsByTagName("head")[0].appendChild(script); 
    }

    function wireUserIdsV2() {
		if (window.wireUserIdsInProgress)  return;
		window.wireUserIdsInProgress = true;

		var script = document.createElement('script');
		script.src = "https://bacon.rambler.ru/api/data/v1.5/user.get?" 
			+ "app_id=" + app_id_bacon + "&callback=acquirePortraitCallbackFunc";
		//document.getElementsByTagName("head")[0].appendChild(script); 

		var request = new XMLHttpRequest();
		var path="https://bacon.rambler.ru/api/data/v1.5/user.get?" 
			+ "app_id=" + app_id_bacon + "&callback=acquirePortraitCallbackFunc";
		request.onreadystatechange = function() {
			if (request.readyState==4) {// 4 = "loaded"
				if (request.status==200) {// 200 = OK
					var retx = request.responseText;
				}
  			}
		};

		request.open("GET", path, true);
		request.setRequestHeader("Referer", "https://api.rnet.plus/");
		request.setRequestHeader("Accept","application/json");
		request.setRequestHeader("Content-Type","application/json");
		request.send(null);
    }

    function detectAdBlock(callback) {
		// We look at whether FuckAdBlock already exists.
		if(typeof fuckAdBlock !== 'undefined' || typeof FuckAdBlock !== 'undefined') {
			// If this is the case, it means that something tries to usurp are identity
			// So, considering that it is a detection
			callback(true);
		} else {
			// Otherwise, you import the script FuckAdBlock
			var importFAB = document.createElement('script');
			importFAB.onload = function() {
				// If all goes well, we configure FuckAdBlock
				fuckAdBlock.onDetected(function(){callback(true);});
				fuckAdBlock.onNotDetected(function(){callback(false);});
			};
			importFAB.onerror };
			importFAB.integrity = 'sha256-xjwKUY/NgkPjZZBOtOxRYtK20GaqTwUCf7WYCJ1z69w=';
			importFAB.crossOrigin = 'anonymous';
			importFAB.src = 'https://cdnjs.cloudflare.com/ajax/libs/fuckadblock/3.2.1/fuckadblock.min.js';
			document.head.appendChild(importFAB);
		}    
	}

	function acquirePortraitImpl(result) { 
		/* result means the data from portrait description */
		/* {"data":[{"id":"1","segment":[]}]} */
		/* {"data":[{"id": "1","segment": [
			{"id": "5","lm": 1342722630,"prob": 0.9},
        	{"id": "8","lm": 1342722400,"prob": 0.8}]}]}*/
		var categories = result.data;
		var i, j;
		portrait = '';
		for(i=0; i < categories.length; ++i) {
			var segments = categories[i].segment;
			var ss = '';
			for(j=0; j < segments.length; ++j) {
				if(segments[j].prob && parseFloat(segments[j].prob) < 0.7) continue;
				if(ss.length > 0) ss += ',';
				ss += segments[j].id;
			}
			if(ss.length == 0) continue;
			if (portrait.length > 0) portrait += ';';
			portrait += ss;
		}

	    if (window.localStorage) {
	        window.localStorage.setItem(userIdKey + ".ruid.rp", portrait);
	    }
	    window.wireUserIdsInProgress = false;
	    pushBackLoads(portrait);
	}

	// last check against ABP and portraits
	abp = force_abp ? force_abp_v : null; // check always
	var skipP = false; // navigator.userAgent.toLowerCase().indexOf('safari/') > -1;

	if(navigator.userAgent.match(/chrome|chromium|crios/i)){ /* Chrome */
	} else if(navigator.userAgent.match(/firefox|fxios/i)){ skipP = true; /* Firefox */
	} else if(navigator.userAgent.match(/safari/i)){ skipP = true; /* Safari */
	} else if(navigator.userAgent.match(/opr\//i)){ /* Opera */ ;
	} else if(navigator.userAgent.match(/edg/i)){ /* edge */ ;
	}

	// disabled abp check: mean no adblock detected
	abp = false;
	if(abp == null) {
	    detectAdBlock(function(abp){
	    	if (window.localStorage) {
	        	window.localStorage.setItem(userIdKey + ".ruid.abp", "" + abp);
		    }

			var data = {uid: getUserId(), rp: getPortrait(), u: uniq, abp: abp};
    		if (!skipP && !getPortrait()) {
	    		window['rnetplus_acqPtQ'].push(data);
	    		wireUserIds (); // we have no cached value -> get it first
	    	}
		    else
	    		onApiDataLoadedCallback(data, false);
    	});
    }
    else {
		var data = {uid: getUserId(), rp: getPortrait(), u: uniq, abp: abp};
    	if (!skipP && !getPortrait()) {
    		window['rnetplus_acqPtQ'].push(data);
	    	wireUserIds (); // we have no cached value -> get it first
	    }
	    else
    		onApiDataLoadedCallback(data, false);
	}
})();
