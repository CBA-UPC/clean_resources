(function (window) {
	//Init
	var trackerName = objectExist(window['HeapAnalyticsObject']) && trimName(window['HeapAnalyticsObject']) || "eca";
	var actions =  window[trackerName].q || [];
	var DOMAIN = 'https://ecomm.events';
	var actionsProcessor = new ActionProcessor();

	window[trackerName] = processAction;

	for (var i = 0; i < actions.length; i++) {
		processAction.apply( null, [].slice.call(actions[i]));
	}

	function processAction(actionType) {
		if (!actionsProcessor.hasOwnProperty(actionType)) {
			try {console.warn("Can't send action", actionType)} catch(e) {}
			return;
		}
		return actionsProcessor[actionType].apply(actionsProcessor, arguments)
	}

	function ActionProcessor() {
		var context = {};
		init();
		context.send = 
		context.config = function() { config.apply(null,[].slice.call(arguments,1)); };
		context.get = function() { return get.apply(null,[].slice.call(arguments,1)); }
		return context;

		function send() {
			var args = arguments;
			var json = args[1];
			if (!!window.navigator.sendBeacon) {
				if (isExpired(context.sessionId)) {
					resetSession();
				}
				json.sessionId = context.sessionId;

				if (isExpiredVisitorId(context.visitorId)){
					resetVisitorId();
				}
				json.visitorId = context.visitorId;

				window.navigator.sendBeacon(DOMAIN+"/register", JSON.stringify(json));
				logger('send', json);
			}
		}

		function config(key, value) {
			logger('config', key + '=' + value);
			if (key === 'visitorId' && (value == null || typeof value == 'number')) {
				updateVisitorId(value);
			}
			if (key === 'platformId' && (value == null || typeof value == 'string')) {
				updatePlatformId(value);
			}
			if (key === 'sessionId' && (value == null || typeof value == 'number')) {
				updateSessionId(value);
			}
			if (key === 'allowCookies' && (typeof value == 'boolean')) {
				updateAllowCookies(value);
			}
			if (key === 'verbose' && (typeof value == 'boolean')) {
				updateVerbose(value);
			}
			if (key === 'revokeCookies') {
				revokeCookies();
			}
		}

		function get(key) {
			if (key === 'visitorId') {
				return context.visitorId;
			}
			if (key === 'sessionId') {
				return context.sessionId;
			}
			if (key === 'platformId') {
				return context.platformId;
			}
		}

		function init() {
			updateVerbose(false);
			updateAllowCookies(false);
			var currentVisitorId = getVisitorIdFromStorage();
			updateVisitorId(currentVisitorId);
			var currentSessionId = getSessionIdFromStorage();
			updateSessionId(currentSessionId);
			var currentPlatformId = getPlatformIdFromStorage();
			updatePlatformId(currentPlatformId);
		}

		function recoveryIds() {
			var currentVisitorId = context.visitorId;
			updateVisitorId(currentVisitorId);
			var currentSessionId = context.sessionId;
			updateSessionId(currentSessionId);
			var currentPlatformId = context.platformId;
			updatePlatformId(currentPlatformId);
		}

		function updateAllowCookies(allowCookies) {
			context.allowCookies = allowCookies;
			if (allowCookies) {
				recoveryIds();
			}
		}

		function revokeCookies() {
			logger('revokeCookies');
			updateAllowCookies(false);
			removeStorage('__eca_v_id_');
			removeStorage('__eca_s_id_');
			removeStorage('__eca_p_id_');
			updateVisitorId(null);
			updateSessionId(null);
		}

		function updateVisitorId(value) {
			logger('updateVisitorId', value);
			if (value == null) {
				resetVisitorId();
			} else {
				context.visitorId = initStorage("__eca_v_id_", value);
			}
		}

		function updatePlatformId(value) {
			logger('updatePlatformId', value);
			if (value == null) {
				resetPlatformId();
			} else {
				context.platformId = initStorage("__eca_p_id_", value);
			}
		}

		function updateSessionId(value) {
			logger('updateSessionId', value);
			if (value == null) {
				resetSession();
			} else {
				context.sessionId = initStorage("__eca_s_id_", value);
			}
			if (!context.sessionId || isExpired(context.sessionId)){
				resetSession();
			}
		}

		
		function isExpired(sessionId) {
			timestamp = sessionId.substring(0, sessionId.length - 6);
			return (1 * (new Date())) - timestamp >  30 * 60 * 1000;
		}

		function isExpiredVisitorId(visitorId) {
			timestamp = visitorId.substring(0, visitorId.length - 6);
			return (1 * (new Date())) - timestamp > 3600 * 24 * 365 * 1000;
		}

		function resetSession() {
			logger('resetSession');
			context.sessionId = initStorage("__eca_s_id_", generateIdValue());
		}

		function resetVisitorId() {
			logger('resetVisitorId');
			context.visitorId = initStorage("__eca_v_id_", generateIdValue());
		}

		function resetPlatformId() {
			logger('resetPlatformId');
			context.platformId = getPlatformIdFromStorage();
		}

		function initStorage(key, value) {
			if (!value) {
				value = generateIdValue();
			}
			if (context.allowCookies) {
				try {
					logger('localStorage.setItem', key + '=' + value);
					localStorage.setItem(key, value);
				} catch (e) {
					logger('initStorage error', e);
				}
			}
			return value;
		}

		function removeStorage(key) {
			logger('removeStorage', key);
			try {
				localStorage.removeItem(key);
			} catch (e) {
				logger('removeStorage error', e);
			}
		}

		function logger(event, message) {
			if (context && context.verbose) {
				var snapshot = { visitorId: context.visitorId, sessionId: context.sessionId, allowCookies: context.allowCookies, platformId: context.platformId };
				console.log(event, snapshot, message);
			}
		}
	}

	function getSessionIdFromStorage (){
		try {
			return localStorage.getItem("__eca_s_id_");
		} catch (e) {
			return null;
		}
	}

	function getVisitorIdFromStorage (){
		try {
			return localStorage.getItem("__eca_v_id_");
		} catch (e) {
			return null;
		}
	}

	function getPlatformIdFromStorage (){
		try {
			return localStorage.getItem("__eca_p_id_");
		} catch (e) {
			return null;
		}
	}

	function generateIdValue() {
		var random = Math.floor( Math.pow(10, 6) * Math.random()) + ""
		//pad left with zero
		while (random.length < 6) {
			random = "0" + random;
		}
		return 1 * (new Date()) + "" + random;
	}

	function objectExist(a) {
		return !!a && (a.constructor +"" === "String")
	}

	function trimName(a) {
		return !!a ? a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
	}
})(window);
