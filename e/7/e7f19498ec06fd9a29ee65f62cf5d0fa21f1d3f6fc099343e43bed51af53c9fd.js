// For license information, see `https://assets.adobedtm.com/launch-ENf88f61c4c69b40cda3622b8d0a78a9f5.js`.
window._satellite=window._satellite||{},window._satellite.container={buildInfo:{minified:!0,buildDate:"2022-01-29T06:03:59Z",turbineBuildDate:"2021-08-11T20:25:49Z",turbineVersion:"27.2.0"},environment:{id:"ENf88f61c4c69b40cda3622b8d0a78a9f5",stage:"production"},dataElements:{},extensions:{core:{displayName:"Core",hostedLibFilesBaseUrl:"https://assets.adobedtm.com/extensions/EPdf95439ac27745eea50d3c75fd6ed235/",modules:{"core/src/lib/events/libraryLoaded.js":{name:"library-loaded",displayName:"Library Loaded (Page Top)",script:,"core/src/lib/actions/customCode.js":{name:"custom-code",displayName:"Custom Code",script:,"core/src/lib/events/helpers/pageLifecycleEvents.js":{script:,"core/src/lib/actions/helpers/decorateCode.js":{script:,"core/src/lib/actions/helpers/loadCodeSequentially.js":{script:,"core/node_modules/postscribe/dist/postscribe.js":{script:,"core/src/lib/actions/helpers/unescapeHtmlCode.js":{script:,"core/src/lib/actions/helpers/decorators/decorateGlobalJavaScriptCode.js":{script:,"core/src/lib/actions/helpers/decorators/decorateNonGlobalJavaScriptCode.js":{script:,"core/src/lib/actions/helpers/decorators/decorateHtmlCode.js":{script:,"core/src/lib/actions/helpers/getSourceByUrl.js":{script:}},"twitter-uwt":{displayName:"Twitter Universal Website Tag",hostedLibFilesBaseUrl:"https://assets.adobedtm.com/extensions/EP0393ce01ac3540acb78f103d8e58a5a0/",settings:{account_id:"o051z"},modules:{}},"onetrust-consent-management-for-cookies":{displayName:"OneTrust Consent Management for Cookies",hostedLibFilesBaseUrl:"https://assets.adobedtm.com/extensions/EP56475044e122457889b23eae24de6c35/",settings:{otConfiguration:{adobeCat_0:"AAM",adobeCat_1:"ADCLOUD",adobeCat_2:"ANALYTICS",adobeCat_3:"CAMPAIGN",adobeCat_4:"ECID",adobeCat_5:"LIVEFYRE",adobeCat_6:"TARGET",adobeCat_7:"MEDIA_ANALYTICS",variableId_0:"",variableId_1:"",variableId_2:"",variableId_3:"",variableId_4:"",variableId_5:"",variableId_6:"",variableId_7:""}},modules:{"onetrust-consent-management-for-cookies/src/lib/conditions/configuration.js":{script:}}},company:{orgId:"0FB367C2524450B90A490D4C@AdobeOrg"},property:{name:"Z - All Disabled - Call of Duty",settings:{domains:["callofduty.com"],undefinedVarsReturnEmpty:!0,ruleComponentSequencingEnabled:!1},id:"PR9c584486611d4dabb833d7a719c2c7eb"},rules:[{id:"RL2c552279838543ac87cbab528f33d55e",name:"Cookie Banner - OneTrust ",events:[{modulePath:"core/src/lib/events/libraryLoaded.js",settings:{},ruleOrder:50}],conditions:[],actions:[{modulePath:"core/src/lib/actions/customCode.js",settings:{source:'<!-- OneTrust Cookies Consent Notice start -->\n\n<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js" data-document-language="true" type="text/javascript" charset="UTF-8" data-domain-script="1acb2498-b14d-45ba-8604-3c4fcbcaea6a" ></script>\n\n<script type="text/javascript">\n\nfunction OptanonWrapper() {\n\n    var eOT = new Event(\'OneTrustGroupsUpdated\');\n    document.dispatchEvent(eOT);\n/*\n    var regCheckPerformance = /,2,/;\n\n    if (OnetrustActiveGroups.match(regCheckPerformance)) {\n        if (!adobe.optIn.isApproved(adobe.OptInCategories.ECID)) {\n            adobe.optIn.approveAll();\n        }\n    } else {\n        if (adobe.optIn.isApproved(adobe.OptInCategories.ECID)) {\n            adobe.optIn.denyAll();\n        }\n    }\n  \n    var UID = {\n        _current: 0,\n        getNew: function() {\n            this._current++;\n            return this._current;\n        }\n    };\n  */\n       window.dataLayer.push( { event: \'OneTrustGroupsUpdated\' } ); // do not remove\n}\n\n\n\n</script>\n\n<!-- OneTrust Cookies Consent Notice end -->\n',language:"html"}}]}]};var _satellite=);