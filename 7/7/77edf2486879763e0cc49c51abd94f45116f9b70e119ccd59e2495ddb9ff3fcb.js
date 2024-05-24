(function( $ ) {
	window.cachebreak = 1;

	function getAnchor(element, textOnly = false) {
		var anchor = element.innerText;
		if ( anchor.length == 0 && textOnly == false) {
			anchor = element.innerHTML.trim();
			if ( typeof( element.children ) !== 'undefined') {
				if ( element.children.length > 0 ) {
					if ( element.children[0].tagName == 'IMG' ) {
						anchor = 'image:' + element.children[0].src;
					}
				}
			}
		}
		return anchor;
	}

	function processAs() {
		if (showClickCounts()) {
			var data = new FormData();
			data.append("postID", getPostID());
			data.append("location", window.location);
			var url = getHomeURL() + '/wp-json/track-the-click/v2/getpagelinkclicks/' + window.cachebreak++;

			jQuery.ajax({
				url: url,
				type: "POST",
				data: data,
				contentType: false,
				processData: false,
				cache: false,
				beforeSend: 
				success: function(newdata) {
					if (newdata !== false) {
						var as = document.getElementsByTagName("a");
						Array.from(as, a => {
							newdata.forEach(clickCount => {
								if (a.href == clickCount.target && getAnchor(a) == clickCount.anchor && clickCount.clicks > 0) {
									a.setAttribute("data-clicks", clickCount.clicks);
								}
							});
						});
					}
				},
				error: 			});
		}

		var as = document.getElementsByTagName("a");
		Array.from(as, a => {
			// If the pro version of the plugin is installed, process A tags
			if ( typeof( proProcessLinks ) == 'function' ) {
				proProcessLinks( a );
			}
		})
	}

	function bubbleBeacon(event) {
		if (!ttc_data.proBeacon) {
			if (event.target.closest('A')) {
				closestA = event.target.closest('A')
				// There is an A at or above this level in the DOM
				// ie. they've clicked a link
				var data = new FormData();
				data.append("postID", getPostID());
				data.append("location", window.location);
				data.append("anchor", getAnchor(closestA));
				data.append("target", closestA.href);
				var url = getHomeURL() + '/wp-json/track-the-click/v2/hit/' + window.cachebreak++;
				navigator.sendBeacon(url, data);
			}
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener("DOMContentLoaded", processAs);
	} else {
		processAs();
	}
	document.addEventListener("click", bubbleBeacon);
})();
