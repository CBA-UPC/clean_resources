(function(w, d) {
	'use strict';
	var s1 = d.getElementsByTagName('script')[0],
		s = d.createElement('script'),
		onReady;

	s.src = '//tru.am/scripts/ta-pagesocial-sdk.js';

	onReady = function() {
		var l = document.location,
			h = l.hostname.toLowerCase(),
			cid;
		if (h.indexOf('salon.com') > -1) {
			cid = '1933';
		}
		if (cid) {
			w.TRUE_ANTHEM.configure(cid);
		}
	};
	if (s.addEventListener) {
		s.addEventListener('load', onReady, false);
	} else {
		s.onreadystatechange = function() {
			if (s.readyState in {
					loaded: 1,
					complete: 1
				}) {
				s.onreadystatechange = null;
				onReady();
			}
		};
	}
	s1.parentNode.insertBefore(s, s1);
}(window, document));