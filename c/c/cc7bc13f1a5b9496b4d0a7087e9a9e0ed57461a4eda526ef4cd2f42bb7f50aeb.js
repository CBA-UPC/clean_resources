(function(FS) {
  var session = FS.getCurrentSession(), sessionUrl = FS.getCurrentSessionURL();
      
	var intercomSessionUrl = sessionUrl + '?integration_src=intercom';
                retryWithBackoff(intercomOnPage, fsIntercomInit, 30000, 'The FullStory integration with Intercom loaded, but did not detect Intercom on the page.', intercomInitFailure)();

    
    	
	var mixpanelSessionUrl = sessionUrl + '?integration_src=mixpanel';
	// Check if the mixpanel script is on page
	if (window['mixpanel'] && typeof(mixpanel) == "object") {
		// Check if a new session has started since we last sent data to Mixpanel
		var lastSession = loadSession('fs_mixpanel');
		if (session != lastSession) {
			mixpanelFsIntegrationAsync();
		}
	} else {
		FS.log("warn", "Mixpanel integration is enabled, but mixpanel was not found on page");
		FS('stat', {
			eventType: 'INTEGRATION_INITIALIZED',
			payload: {
				provider_id: 'mixpanel',
				event_status: 'FAILURE',
				metadata: { detail: 'Mixpanel integration is enabled, but mixpanel was not found on page' }
			}
		})
	}

	// Wait for Mixpanel to be fully loaded before we try sending data
	// We can't use their on load callback because we don't call Mixpanel's init function, the client does that
	function mixpanelFsIntegrationAsync() {
		if(window['mixpanel']['__loaded']) {
			saveSession('fs_mixpanel', session);
			mixpanel.register({
				"FullStory Session": mixpanelSessionUrl
			});
			FS('stat', {
				eventType: 'INTEGRATION_INITIALIZED',
				payload: {
					provider_id: 'mixpanel',
					event_status: 'SUCCESS',
					metadata: { detail: 'mixpanel.register', sessionUrl: mixpanelSessionUrl }
				}
			})
			mixpanel.people.set({ "Most Recent FullStory Session":mixpanelSessionUrl });
		} else {
			setTimeout(mixpanelFsIntegrationAsync, 500);
		}
	}
	
})(window['_fs_namespace'] ? window[window['_fs_namespace']] : window['FS'])