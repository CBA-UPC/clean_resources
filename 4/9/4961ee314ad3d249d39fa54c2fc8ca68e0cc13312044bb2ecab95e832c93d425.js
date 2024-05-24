(function(FS) {
  var session = FS.getCurrentSession(), sessionUrl = FS.getCurrentSessionURL();
      
  (function() {
    var bs;
	var bugsnagSessionUrl = sessionUrl + '?integration_src=bugsnag';
    if (window['bugsnagClient']) {
      // For bugsnag API versions 4 through 6
      bs = window.bugsnagClient;
    } else if (window['Bugsnag']) {
      // For bugsnag API version 3, or 7+ (as of Dec. 2020)
      bs = window.Bugsnag;
    } else {
      FS.log("warn", "Bugsnag script was not loaded even though the Bugsnag integration is turned on.");
      FS('stat', {
        eventType: 'INTEGRATION_INITIALIZED',
        payload: {
          provider_id: 'bugsnag',
          event_status: 'FAILURE',
          metadata: { detail: "Bugsnag script was not loaded even though the Bugsnag integration is turned on.", sessionUrl: bugsnagSessionUrl }
        }
      })
      return;
    }
    if (bs.addMetadata) {
      // Recent versions have this API
      bs.addMetadata('fullstory', { url: bugsnagSessionUrl })
    } else {
      if (!bs.metaData) {
        bs.metaData = {};
      }
      if (!bs.metaData.fullstory) {
        bs.metaData.fullstory = {};
      }
      bs.metaData.fullstory.url = bugsnagSessionUrl;
    }
    FS('stat', {
      eventType: 'INTEGRATION_INITIALIZED',
      payload: {
        provider_id: 'bugsnag',
        event_status: 'SUCCESS',
        metadata: { sessionUrl: bugsnagSessionUrl }
      }
    })
  })();
  
	window['_dlo_appender'] = 'fullstory';
	window['_dlo_telemetryExporter'] = undefined;
	window['_dlo_logLevel'] = -1;
	window['_dlo_beforeDestination'] = Array.isArray(window['_dlo_beforeDestination']) ? window['_dlo_beforeDestination'] : [{ name: 'convert', enumerate: true, preserveArray: true, index: -1 },{ name: 'suffix' },{ name: 'insert', value: 'dlo', position: -1 }];
	window['_dlo_previewMode'] = false;
	window['_dlo_readOnLoad'] = true;
	window['_dlo_validateRules'] = false;

	window['_dlo_rules_adobe_am'] = [];
	window['_dlo_rules_ceddl'] = [];
	window['_dlo_rules_google_ec'] = [];
	window['_dlo_rules_google_ec_ga4'] = [];
	window['_dlo_rules_google_em'] = [];
	window['_dlo_rules_google_em_ga4'] = [];
	window['_dlo_rules_tealium_retail'] = [];
	try {
		window['_dlo_rules_custom'] = [{
    "id": "fs-uservar-ga-cid",
    "description": "vid",
    "source": "gaGlobal[(vid)]",
    "operators": [
        {
            "name": "query",
            "select": "$[(vid)]"
        },
        {
            "name": "rename",
            "properties": {
                "vid": "GA_Client_ID_str"
            }
        }
    ],
    "destination": "FS.setUserVars",
    "readOnLoad": true,
    "monitor": true,
    "debug": false
}];
	} catch (err) {
		console.error('FullStory custom rules error; review DLO integration\'s custom rules.');
	}
	
	var intercomSessionUrl = sessionUrl + '?integration_src=intercom';
                retryWithBackoff(intercomOnPage, fsIntercomInit, 30000, 'The FullStory integration with Intercom loaded, but did not detect Intercom on the page.', intercomInitFailure)();

    
    	
  function runIntercept() {
    try {
      QSI.API.load()
      QSI.API.run()
      FS('stat', {
        eventType: 'INTEGRATION_INITIALIZED',
        payload: {
          provider_id: 'qualtrics',
          event_status: 'SUCCESS'
        }
      });
    } catch(e) {
      console.warn(e);
      FS.log("warn", "Failed to load or run QSI.API, please check your Qualtrics configuration.");
      FS('stat', {
        eventType: 'INTEGRATION_INITIALIZED',
        payload: {
          provider_id: 'qualtrics',
          event_status: 'FAILURE',
          metadata: {
            detail: 'Failed to load or run QSI.API, please check your Qualtrics configuration.'
          }
        }
      });
    }
  }

  if(typeof window.QSI !== 'undefined') {
    runIntercept();
  } else {
    window.addEventListener("qsi_js_loaded", runIntercept, false);
  }

	var dloScriptTag = document.createElement('script');
	dloScriptTag.type = 'text/javascript';
	dloScriptTag.async = true;
	var recSettingsHost = window['_fs_rec_settings_host'];
	var host = typeof recSettingsHost === 'string' ? recSettingsHost : 'edge.fullstory.com';
	dloScriptTag.src = 'https://' + host + '/datalayer/v4/latest.js';
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(dloScriptTag,firstScriptTag);
	
})(window['_fs_namespace'] ? window[window['_fs_namespace']] : window['FS'])