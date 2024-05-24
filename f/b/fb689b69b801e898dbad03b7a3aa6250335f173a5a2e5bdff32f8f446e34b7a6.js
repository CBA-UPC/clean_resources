try { 
	var _weq = window._weq || {};
webengage.util.onReady(function() {
    _weq['webengage.ruleData'] = webengage.util.copy(_weq['webengage.ruleData'] || {}, {
        "visitorBucket": (function() {
            var _hash = webengage.util.getHashCode(webengage.util.getWebengageCookie().luid);
            return Math.abs(_hash % 100);
        })()
    }, true);
    _weq['webengage.customData'] = webengage.util.copy(_weq['webengage.customData'] || {}, {
        "visitorBucket": (function() {
            var _hash = webengage.util.getHashCode(webengage.util.getWebengageCookie().luid);
            return Math.abs(_hash % 100);
        })()
    }, true); 
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', 'i2l1kc9');
	 }
 }
