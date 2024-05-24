function wpda_rest_api(path, data, callbackOk, callbackError, method = "POST") {
	jQuery.ajax({
		url: wpApiSettings.root + wpdaApiSettings.path + "/" + path,
		method: method,
		beforeSend: 
		data: data
	}).done(function(response) {
		if (callbackOk!==undefined) {
			callbackOk(response)
		} else {
			console.error("Missing API callback. Server response:")
			console.error(response)
		}
	}).fail(function(response) {
		if (callbackError!==undefined) {
			callbackError(response)
		} else {
			console.error("Missing API callback. Server response:")
			console.error(response)
		}
	})
}