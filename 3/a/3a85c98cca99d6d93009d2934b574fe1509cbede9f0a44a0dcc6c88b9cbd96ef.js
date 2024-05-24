(function(FS) {
  var session = FS.getCurrentSession(), sessionUrl = FS.getCurrentSessionURL();
      
	window['_dlo_appender'] = 'fullstory';
	window['_dlo_telemetryExporter'] = (FS));
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
		window['_dlo_rules_custom'] = [
  {
    "id": "experiment_ids",
    "source": "_fs_dataLayer[(expids)]",
    "readOnLoad": true,
    "operators": [
      {
        "name": "rename",
        "properties": {
          "expids": "experiment_ids"
        }
      }
    ],
    "destination": "FS.setUserVars",
    "monitor": false
  },
{
  "id": "fs-customer-loyalty-tier",
  "source": "_fs_dataLayer",
  "readOnLoad": true,
  "operators": [
    {
      "name": "query",
      "select": "$[(customer_loyalty_tier)]"
    }
  ],
  "destination": "FS.setUserVars",
  "monitor": false
},
{
  "id": "fs-customer-target-info",
  "source": "_fs_dataLayer",
  "readOnLoad": true,
  "operators": [
    {
      "name": "query",
      "select": "$[(target_activity_ids,target_activity_names,target_experience_names,tealium_event_type)]"
    }
  ],
"destination": "FS.setUserVars"
},
  {
    "id": "fs-tealium-user",
    "source": "utag.data[(cp.bloomingdales_bagguid,cp.bloomingdales_online_uid,macys_bagguid,cp.macys_online_uid,customer_type)]",
    "readOnLoad": true,
    "operators": [
      {
        "name": "rename",
        "properties": {
          "cp.macys_online_uid": "macys_online_uid",
          "cp.bloomingdales_online_uid": "bloomingdales_online_uid",
          "cp.bloomingdales_bagguid": "bloomingdales_bagguid"
        }
      }
    ],
    "destination": "FS.setUserVars",
    "monitor": false
  },
  {
    "id": "fs-pageData",
    "source": "_s[(pageName)]",
    "operators": [
      {
        "name": "rename",
        "properties": {
          "pageName": "page"
        }
      }
    ],
    "destination": "FS.setUserVars",
    "monitor": true,
    "readOnLoad": true
  },
  {
    "id": "fs-tealium-add-to-bag",
    "source": "utag.track",
    "operators": [
      {
        "name": "query",
        "select": "$.data[?(event_name=add to bag)]"
      },
      {
        "name": "convert",
        "properties": "product_quantity",
        "type": "int"
      },
      {
        "name": "convert",
        "properties": "product_original_price,product_price,product_sub_total,shipping_value",
        "type": "real"
      },
      {
        "name": "insert",
        "select": "event_name"
      }
    ],
    "destination": "FS.event"
  },
  {
    "id": "fs-tealium-error",
    "source": "utag.track",
    "operators": [
      {
        "name": "query",
        "select": "$.data[?(error_code)]"
      },
      {
        "name": "convert",
        "properties": "*",
        "type": "string"
      },
      {
        "name": "insert",
        "value": "error"
      }
    ],
    "destination": "FS.event"
  },
  {
  "id": "fs-tealium-purchase",
  "source": "utag.track",
  "operators": [
    {"name": "query", "select": "$[?(event=view)]"},
 {"name": "query", "select": "$.data"},
 {"name": "query", "select": "$[?(page_type=order confirmation)]"},
    {
      "name": "query",
      "select": "$[^(bag_shipping,free_ship,is_big_ticket,is_order_gift,opt_in_sdd_sms,order_,pickup_eligibility,product_,protection_plan_purchased,sdd_instructions_entered,secondary_order_,shipping_options_,shipping_value,star_rewards_)]"
    },
{
      "name": "query",
      "select": "$[!(order_email)]"
    },
    {
      "name": "insert",
      "value": "Purchase Event"
    }
  ],
  "destination": "FS.event"
},
{
  "id": "fs-tealium-search",
  "source": "utag.data",
  "operators": [
    {
      "name": "query",
      "select": "$[?(search_keyword)]"
    },
    {
      "name": "query",
      "select": "$[(search_engine_used,search_keyword,total_results)]"
    },
    {
      "name": "insert",
      "value": "Products Searched"
    }
  ],
  "destination": "FS.event"
},
{
  "id": "fs-page-vars",
  "source": "utag.data[(adobe_page_name,category_id,category_name,page_type)]",
  "operators": [
    { "name": "insert", "value": "page" }
  ],
  "destination": "FS.setVars"
}
];
	} catch (err) {
		console.error('FullStory custom rules error; review DLO integration\'s custom rules.');
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