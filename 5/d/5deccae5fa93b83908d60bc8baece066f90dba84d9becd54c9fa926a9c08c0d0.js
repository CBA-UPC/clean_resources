(function(FS) {
  var session = FS.getCurrentSession(), sessionUrl = FS.getCurrentSessionURL();
      
	var intercomSessionUrl = sessionUrl + '?integration_src=intercom';
                retryWithBackoff(intercomOnPage, fsIntercomInit, 30000, 'The FullStory integration with Intercom loaded, but did not detect Intercom on the page.', intercomInitFailure)();

    
    	
  if (window['olark'] && typeof(olark)=="function") {
	var olarkSessionUrl = sessionUrl + '?integration_src=olark';
    var send = function() {
      var lastSession = loadSession('fs_olark');
      if (session != lastSession) {
        saveSession('fs_olark', session);
        olark('api.chat.sendNotificationToOperator', {body: 'FullStory Session: ' + olarkSessionUrl});
      }
    };
    // A conversation may begin multiple times, especially on single-page apps.
    olark('api.chat.onBeginConversation', ;
    olark('api.visitor.getDetails', ;
    FS('stat', {
      eventType: 'INTEGRATION_INITIALIZED',
      payload: {
        provider_id: 'olark',
        event_status: 'SUCCESS',
        metadata: { sessionUrl: olarkSessionUrl }
      }
    })
  } else {
    FS.log("warn", "Olark script was not loaded even though the Olark integration is turned on.");
    FS('stat', {
      eventType: 'INTEGRATION_INITIALIZED',
      payload: {
        provider_id: 'olark',
        event_status: 'FAILURE',
        metadata: { detail: 'Olark script was not loaded even though the Olark integration is turned on.' }
      }
    })
  }
  
})(window['_fs_namespace'] ? window[window['_fs_namespace']] : window['FS'])