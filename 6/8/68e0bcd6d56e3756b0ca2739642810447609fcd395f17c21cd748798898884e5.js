"use strict";

(function() {
	
	
	
	// Create the offline client ASAP so we receive and start queueing any messages the SW broadcasts.
	window.OfflineClientInfo = new OfflineClient();
	
}());

