(function(FS) {
  var session = FS.getCurrentSession(), sessionUrl = FS.getCurrentSessionURL();
      
	window['_dlo_appender'] = 'fullstory';
	window['_dlo_telemetryExporter'] = (FS));
	window['_dlo_logLevel'] = -1;
	window['_dlo_beforeDestination'] = Array.isArray(window['_dlo_beforeDestination']) ? window['_dlo_beforeDestination'] : [{ name: 'convert', enumerate: true, preserveArray: true, index: -1 },{ name: 'suffix' },{ name: 'insert', value: 'dlo', position: -1 }];
	window['_dlo_previewMode'] =  false;
	window['_dlo_readOnLoad'] = true;
	window['_dlo_validateRules'] = false;
	window['_dlo_rules_google_em'] = [
    {
      "id": "fs-ga-event",
      "source": "dataLayer",
      "operators": [
        { "name": "query", "select": "$[?(event!^gtm)]" },
        { "name": "query", "select": "$[?(event!=optimize.domChange)]" },
        { "name": "query", "select": "$[!(ecommerce,gtm.uniqueEventId)]" },
        { "name": "insert", "select": "event" }
      ],
      "destination": "FS.event"
    }
	]
  ;window['_dlo_rules_google_em_ga4'] = [
    {
      "id": "fs-gtg-event",
      "source": "dataLayer",
      "operators": [
        { "name": "query", "select": "$[(0,1,2)]" },
        { "name": "query", "select": "$[?(0=event)]" },
        { "name": "flatten" },
        { "name": "rename", "properties": { "0": "gtgCommand", "1": "gtgAction" } },
        { "name": "query", "select": "$[?(gtgAction!^gtm)]" },
        { "name": "query", "select": "$[?(gtgAction!=optimize.domChange)]" },
        { "name": "query", "select": "$[?(items=undefined)]" },
        { "name": "insert", "select": "gtgAction" }
      ],
      "destination": "FS.event"
    }
	]
  ;
	var dloScriptTag = document.createElement('script');
	dloScriptTag.type = 'text/javascript';
	dloScriptTag.async = true;
	var recSettingsHost = window['_fs_rec_settings_host'];
	var host = typeof recSettingsHost === 'string' ? recSettingsHost : 'edge.fullstory.com';
	dloScriptTag.src = 'https://' + host + '/datalayer/v4/latest.js';
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(dloScriptTag,firstScriptTag);
	
})(window['_fs_namespace'] ? window[window['_fs_namespace']] : window['FS'])