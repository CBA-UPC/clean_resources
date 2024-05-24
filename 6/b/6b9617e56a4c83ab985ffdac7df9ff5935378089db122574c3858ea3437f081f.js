window.addEventListener('message', function(e) {
	if (e.origin.indexOf('destinilocators.com') != -1) {
	if (e.data.charAt(0) == "{") {
  		var thisOBJ = JSON.parse(e.data);
  		if (thisOBJ.gtmType == 1) {
			gtag('event', thisOBJ.eventAction, {
				'event_category': thisOBJ.eventCategory,
				'event_label': thisOBJ.eventLabel,
				'utm_campaign': thisOBJ.utm_campaign,
				'utm_medium': thisOBJ.utm_medium,
				'utm_source': thisOBJ.utm_source,
				'non_interaction': thisOBJ.interaction
			});
		}
		else if (thisOBJ.gtmType == 2) {
			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
				'event': thisOBJ.eventAction,
				'category': thisOBJ.eventCategory,
				'action': thisOBJ.eventCategory,
				'label': thisOBJ.eventLabel
			});	}
		}
	}
}, false);