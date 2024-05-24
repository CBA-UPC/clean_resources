(function(networkId) {
var cacheLifetimeDays = 30;

var customDataWaitForConfig = [
  { on: function() { return Invoca.Client.parseCustomDataField("adobe_report_suite_id", "Last", "URLParam", ""); }, paramName: "adobe_report_suite_id", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("ca.cr", "Last", "URLParam", ""); }, paramName: "ca.cr", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("ca.kw", "Last", "URLParam", ""); }, paramName: "ca.kw", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("ca.mp", "Last", "URLParam", ""); }, paramName: "ca.mp", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("ca.mt", "Last", "URLParam", ""); }, paramName: "ca.mt", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("ca.target", "Last", "URLParam", ""); }, paramName: "ca.target", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("calling_page", "Last", "JavascriptDataLayer", "location.hostname + location.pathname"); }, paramName: "calling_page", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("cb.device", "Last", "URLParam", ""); }, paramName: "cb.device", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("customer_id", "Last", "URLParam", ""); }, paramName: "customer_id", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("dclid", "Last", "URLParam", ""); }, paramName: "dclid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("ecid", "Last", "URLParam", ""); }, paramName: "ecid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("ecid_first", "First", "URLParam", "ecid"); }, paramName: "ecid_first", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("fbc", "Last", "JavascriptDataLayer", "Invoca.Client.captureFBClickID()"); }, paramName: "fbc", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("fbp", "Last", "Cookie", "_fbp"); }, paramName: "fbp", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("first_page", "First", "JavascriptDataLayer", "Invoca.location"); }, paramName: "first_page", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("gclid", "Last", "URLParam", ""); }, paramName: "gclid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("gclsrc", "Last", "URLParam", ""); }, paramName: "gclsrc", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("gcm_uid_first", "First", "URLParam", "gcm_uid"); }, paramName: "gcm_uid_first", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("icid", "Last", "URLParam", ""); }, paramName: "icid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("journey", "Multi", "JavascriptDataLayer", "window.location.pathname"); }, paramName: "journey", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("landing_page", "Last", "URLParam", ""); }, paramName: "landing_page", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("language", "Last", "Cookie", "language"); }, paramName: "language", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("last_page", "Last", "JavascriptDataLayer", "Invoca.location"); }, paramName: "last_page", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("line_of_business", "Last", "JavascriptDataLayer", "Invoca.Client.getLineOfBusiness()"); }, paramName: "line_of_business", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("maketing_channel", "Last", "JavascriptDataLayer", "Invoca.Client.getMarketingChannel()"); }, paramName: "maketing_channel", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("match_id", "Last", "URLParam", ""); }, paramName: "match_id", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("mcid", "First", "Cookie", "_sdsat_MCID"); }, paramName: "mcid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("msclkid", "Last", "URLParam", ""); }, paramName: "msclkid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("offerid", "Last", "URLParam", ""); }, paramName: "offerid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("pagename", "Last", "JavascriptDataLayer", "Invoca.Client.getAdobeAnalyticsPageName()"); }, paramName: "pagename", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("profile_name", "Last", "URLParam", ""); }, paramName: "profile_name", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("province", "Last", "Cookie", "province"); }, paramName: "province", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("region_category", "Last", "URLParam", ""); }, paramName: "region_category", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("session_id", "First", "JavascriptDataLayer", "window.previousPageViewDataLayer.sessionID"); }, paramName: "session_id", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("signal_name", "Last", "URLParam", ""); }, paramName: "signal_name", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("TrackingID", "Last", "JavascriptDataLayer", "Invoca.Tools.readUrl(\"ecid\") || Invoca.Tools.readUrl (\"icid\") || \"null\""); }, paramName: "TrackingID", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_campaign", "Last", "URLParam", ""); }, paramName: "utm_campaign", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_content", "Last", "URLParam", ""); }, paramName: "utm_content", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_content_id", "Last", "URLParam", ""); }, paramName: "utm_content_id", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_medium_first", "First", "URLParam", "utm_medium"); }, paramName: "utm_medium_first", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_source_first", "First", "URLParam", "utm_source"); }, paramName: "utm_source_first", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_source_id", "Last", "URLParam", ""); }, paramName: "utm_source_id", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_term", "Last", "URLParam", ""); }, paramName: "utm_term", fallbackValue: null },
  { on:  paramName: "wbraid", fallbackValue: null }
];

var defaultCampaignId = null;

var destinationSettings = {
  paramName: null
};

var numbersToReplace = {
  "+18552388334": "323225",
  "+18776966839": "323225",
  "+18774909481": "325097",
  "+18773301304": "8977895",
  "+18774909478": "9193563",
  "+18333697311": "325097",
  "+18446851964": "335708",
  "+18663769523": "361733",
  "+18667946792": "361733",
  "+18882609880": "383029",
  "+18664321977": "401899",
  "+18665841211": "401899",
  "+18008216678": "9520008",
  "+18443070296": "545265",
  "+18443701512": "556399",
  "+18558460701": "587549",
  "+18556619980": "587555",
  "+18554628803": "605613",
  "+18665368243": "361733",
  "+18668413705": "323225",
  "+18883011429": "9527035",
  "+18666890758": "2715654",
  "+18556511929": "3829257",
  "+18556652755": "3865231",
  "+18443552706": "3849717",
  "+18445360245": "4575381",
  "+18663014996": "4585440",
  "+18447859069": "4576262",
  "+18553854762": "4608976",
  "+18779047823": "4661080",
  "+18777781299": "4732654",
  "+18778413793": "4732828",
  "+18669029534": "5724049",
  "+18559505229": "5838037",
  "+18883746678": "5724049",
  "+18776925248": "5724049",
  "+18885556666": "6522508",
  "+18665699961": "9527036",
  "+18442532530": "9526627",
  "+18662736349": "9527047",
  "+18556764377": "9527029",
  "+18446182551": "9204397",
  "+18667717757": "8977895",
  "+18442932849": "9526940",
  "+18444944054": "4692023",
  "+18666548536": "4692024",
  "+18448229862": "9526938",
  "+18777913317": "5838037",
  "+18556771636": "4732828",
  "+18668013528": "556399"
};

var organicSources = false;

var reRunAfter = null;

var requiredParams = null;

var resetCacheOn = ['gclid', 'utm_source', 'utm_medium'];

var waitFor = 1000;

var customCodeIsSet = (function() {
  Invoca.Client.customCode = function(options) {
    // params to be stored client side as part of the SSA migration
// this list must be kept in sync with any use of readInvocaData
try {
  Invoca.Tools.allowedClientSideParams(['gclid', 'gcm_uid', 'fbclid', 'ecid', 'icid', 'utm_medium']);

} catch (error) {
  console.log(error);
}
Invoca.search = "?" + Invoca.location.split("?")[1];

options.integrations.adobeAnalytics = {username: "D7FD34FA53D63B860A490D44@AdobeOrg", paramName: "mcid"};
options.poolParams.ecid = Invoca.Tools.readInvocaData('ecid', Invoca.Tools.readUrl("ecid"));

function useGCM() {
  if (Invoca.Tools.readUrl("gclid") || Invoca.Tools.readInvocaData("gclid") || Invoca.Tools.readCookie("gclid")) {
    return null;
  } else {
    return Invoca.Tools.readUrl("gcm_uid") || 
           Invoca.Tools.readCookie("gcm_uid") ||
           Invoca.Tools.readInvocaData("gcm_uid");
  }
}

Invoca.Client.captureFBClickID = 
Invoca.Client.getTrackingId = function () {
	return {
		ecid: Invoca.Tools.readCookie('X_DOM_ECID') || Invoca.Client.readParam('ecid'),
		icid: Invoca.Tools.readCookie('X_DOM_ICID') || Invoca.Client.readParam('icid')
	}
}

Invoca.Client.readParam = 
var ecid = Invoca.Client.getTrackingId().ecid
var icid = Invoca.Client.getTrackingId().icid

Invoca.Client.getMarketingChannel = function() {
  if (!ecid && !icid) {
    return Invoca.Client.getMarketingMedium(); 
  };
  var ICID_MARKETING_CHANNEL = 'Internal';
  var ECID_MARKETING_CHANNELS = {
	'PS' : 'Paid Search',
	'DIS': 'Display',
	'SOC': 'Social Media',
	'SMS': 'SMS Messages',
	'EM' : 'Email',
	'AFF': 'Affiliate',
	'APP': 'Mobile App',
	'BLG': 'Blog',
	'VA' : 'Vanity URLs',
	'VID': 'Video Ads',
	'RBW': 'RB Website'
  };
  if (ecid) {
    var keyword = ecid.split('_')[0].toUpperCase();
    return ECID_MARKETING_CHANNELS[keyword];
  } else if (icid) {
    return ICID_MARKETING_CHANNEL;
  }
}

Invoca.Client.getLineOfBusiness = function() {
  var lineOfBusiness = ''
  var LINE_OF_BUSINESS = {
    'WIR': 'WIRELESS',
    'CBL': 'CABLE',
    'ADM': 'Advantage Mobility',
    'IOT': 'IoT',
    'DCC': 'Data Center & Cloud',
    'VOS': 'Voice Solutions',
    'COS': 'Collab Solutions',
    'SER': 'SERVICE',
    'OTH': 'Other',
    'PLH': 'Product Launch',
    'WLS': 'Wireless',
    'SWN': 'Small - Wireline ACQ',
    'SWS': 'Small - Wireless ACQ',
    'BRA': 'Brand',
    'BNS': 'Business Solutions',
    'CWS': 'Commercial - Wireless ACQ',
    'CWN': 'Commercial - Wireline ACQ',
    'BIL': 'BILLING',
    'CAB': 'CABLE',
    'COR': 'CORPORATE',
    'HOC': 'HOCKEY',
    'IDV': 'IDV',
    'IGN': 'IGNITE',
	'RTS': 'RETURN TO SPORTS',
	'SHM': 'SMART HOME MONITOR',
	'SOH': 'SOHO',
	'INT': 'INTERNET',
  }
  if (ecid) {
    var ecidKeyword = ecid.split('_')[3].toUpperCase();
  	lineOfBusiness = LINE_OF_BUSINESS[ecidKeyword];
  } else if (icid) {
    var icidKeyword = icid.split('_')[1].toUpperCase();
	lineOfBusiness = LINE_OF_BUSINESS[icidKeyword];
  } 
  return lineOfBusiness;
}

Invoca.Client.getMarketingMedium = function() {
    var mediumList = ['direct', 'organic', 'referral'];
    var medium = options.poolParams.utm_medium;
    return mediumList.indexOf(medium) > -1 ? medium : ''; 
}

options.integrations.googleAnalytics = true;
options.poolParams.gcm_uid = useGCM();
options.poolParams.ecid = ecid;
options.poolParams.icid = icid;

function buildMediumSource() {
  var referralDomain = Invoca.Tools.parseDomainFromFullUrl(Invoca.referrer).slice(1);
  var currentDomain  = Invoca.Tools.parseDomainFromFullUrl(location.href).slice(1);
   
  if (Invoca.Tools.readUrl("gclid")) {
    return ["paid search", "google.com"];
     
  // this is here to avoid updating the referral on clicks through the website
  } else if (referralDomain !== currentDomain) {
    return Invoca.Tools.parseReferrer({
      "google.com": ["organic", "google.com"],
      "bing.com"  : ["organic", "bing.com"],
      "yahoo.com" : ["organic", "yahoo.com"],
      "google.ca" : ["organic", "google.ca"],
      ""          :   ["direct", "direct"]
    }, ["referral", referralDomain], null, "topLevelDomain");
   
  } else {
    return [Invoca.Tools.readInvocaData("utm_medium"), Invoca.Tools.readInvocaData("utm_source")];
  }
}
  
// Identify & Attribute the utm_medium Media Channel and utm_source. Pick first item in array for medium and second item in array for source.
options.poolParams = {
  utm_medium: Invoca.Tools.readUrl("utm_medium") || buildMediumSource()[0],
  utm_source: Invoca.Tools.readUrl("utm_source") || buildMediumSource()[1]
};

Invoca.Client.getAnalytics1 = function () {
    var analytics1 = JSON.parse(decodeURIComponent(Invoca.Tools.readCookie('_analytics_1')));
    return analytics1? analytics1.pName : ''; 
}

Invoca.Client.getCvars = function () {
    var cvars = JSON.parse(decodeURIComponent(Invoca.Tools.readCookie('_cs_cvars')));
    return cvars? cvars['2'][1]: '';
}

Invoca.Client.getAdobeAnalyticsPageName = setTimeout( "4000")

return options;
  };

  return true;
})();

var generatedOptions = {
  active:              true,
  autoSwap:            false,
  cookieDays:          cacheLifetimeDays,
  country:             null,
  dataSilo:            "us",
  defaultCampaignId:   defaultCampaignId,
  destinationSettings: destinationSettings,
  disableUrlParams:    ['brand','gcm_uid','g_cid','utm_medium','utm_source'],
  doNotSwap:           [],
  maxWaitFor:          waitFor,
  networkId:           networkId || null,
  numberToReplace:     numbersToReplace,
  organicSources:      organicSources,
  poolParams:          {},
  reRunAfter:          reRunAfter,
  requiredParams:      requiredParams,
  resetCacheOn:        resetCacheOn,
  waitForData:         customDataWaitForConfig
};

Invoca.Client.startFromWizard(generatedOptions);

})(1521);
