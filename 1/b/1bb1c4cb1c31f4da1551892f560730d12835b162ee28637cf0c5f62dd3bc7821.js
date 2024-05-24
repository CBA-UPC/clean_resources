(function(networkId) {
var cacheLifetimeDays = 30;

var customDataWaitForConfig = [
  { on: function() { return Invoca.Client.parseCustomDataField("aam_uuid", "Last", "URLParam", ""); }, paramName: "aam_uuid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("account_number", "Last", "URLParam", ""); }, paramName: "account_number", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("ACQ", "Last", "URLParam", ""); }, paramName: "ACQ", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("adobe_id", "Last", "URLParam", ""); }, paramName: "adobe_id", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("APPLICATION_ID", "Last", "URLParam", ""); }, paramName: "APPLICATION_ID", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("calling_page", "Last", "JavascriptDataLayer", "window.location.hostname + window.location.pathname + window.location.hash"); }, paramName: "calling_page", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("CALL_EMP_ID", "Last", "URLParam", ""); }, paramName: "CALL_EMP_ID", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("call_sales", "Last", "URLParam", ""); }, paramName: "call_sales", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("CALL_START_DT", "Last", "URLParam", ""); }, paramName: "CALL_START_DT", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("cmp", "Last", "URLParam", ""); }, paramName: "cmp", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("csq_session_replay_url", "Last", "JavascriptDataLayer", "sessionStorage.ContentsquareReplayLink"); }, paramName: "csq_session_replay_url", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("customer_journey", "Multi", "JavascriptDataLayer", "location.pathname"); }, paramName: "customer_journey", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("dclid", "Last", "URLParam", ""); }, paramName: "dclid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("destination_phone_category", "Last", "URLParam", ""); }, paramName: "destination_phone_category", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("device_type", "Last", "JavascriptDataLayer", "Invoca.Tools.deviceType()"); }, paramName: "device_type", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("ECCR_DEPT_NM", "Last", "URLParam", ""); }, paramName: "ECCR_DEPT_NM", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("ECCR_LINE_BUS_NM", "Last", "URLParam", ""); }, paramName: "ECCR_LINE_BUS_NM", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("existing_customer", "Last", "Cookie", "_vbg_cust"); }, paramName: "existing_customer", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("fios_data_speed", "Last", "URLParam", ""); }, paramName: "fios_data_speed", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("fios_tv_package", "Last", "URLParam", ""); }, paramName: "fios_tv_package", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("ga_session_id", "Last", "Cookie", "_ga_12R1DX1LX7"); }, paramName: "ga_session_id", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("gclid", "Last", "URLParam", ""); }, paramName: "gclid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("g_cid", "Last", "Cookie", "_ga"); }, paramName: "g_cid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("hsi_speed", "Last", "URLParam", ""); }, paramName: "hsi_speed", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("invoca_caller_language", "Last", "JavascriptDataLayer", "digitalData.pageInfo.languageSelected || \"noLanguageSelected\""); }, paramName: "invoca_caller_language", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("IVR_CALL_ID", "Last", "URLParam", ""); }, paramName: "IVR_CALL_ID", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("landing_page", "First", "JavascriptDataLayer", "window.location.hostname + window.location.pathname + window.location.hash"); }, paramName: "landing_page", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("marketo_id", "Last", "Cookie", "_mkto_trk"); }, paramName: "marketo_id", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("mcid", "First", "URLParam", ""); }, paramName: "mcid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("msclkid", "Last", "URLParam", ""); }, paramName: "msclkid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("optional_parameters", "Last", "JavascriptDataLayer", "window.location.search"); }, paramName: "optional_parameters", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("optional_params_first_touch", "First", "JavascriptDataLayer", "window.location.search"); }, paramName: "optional_params_first_touch", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("order_type", "Last", "URLParam", ""); }, paramName: "order_type", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("pageName_digitalData", "Last", "JavascriptDataLayer", "digitalData.pageInfo.pageName || \"Not Available\""); }, paramName: "pageName_digitalData", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("profile_name", "Last", "URLParam", ""); }, paramName: "profile_name", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("referrer", "Last", "JavascriptDataLayer", "document.referrer"); }, paramName: "referrer", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("resp_qual", "Last", "URLParam", ""); }, paramName: "resp_qual", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("resp_qual_detail", "Last", "URLParam", ""); }, paramName: "resp_qual_detail", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("SLS", "Last", "URLParam", ""); }, paramName: "SLS", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("UPG", "Last", "URLParam", ""); }, paramName: "UPG", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_campaign", "Last", "URLParam", ""); }, paramName: "utm_campaign", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_content", "Last", "URLParam", ""); }, paramName: "utm_content", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_medium", "Last", "URLParam", ""); }, paramName: "utm_medium", fallbackValue: function() { return Invoca.PNAPI.currentPageSettings.poolParams.utm_medium || null; } },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_source", "Last", "URLParam", ""); }, paramName: "utm_source", fallbackValue: },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_term", "Last", "URLParam", ""); }, paramName: "utm_term", fallbackValue: null },
  { on:  paramName: "utm_term_category", fallbackValue: null }
];

var defaultCampaignId = "1335638";

var destinationSettings = {
  paramName: "invoca_detected_destination",
  matchLocalNumbers: false,
  matchTollFreeNumbers: true,
  allowOverflow: true
};

var numbersToReplace = {
  "+18883781835": "2756448",
  "+18884168035": "2756448",
  "+18886807266": "2756448",
  "+18883783113": "2756448",
  "+18887891223": "2756448",
  "+18883288033": "2756448",
  "+18885865445": "2756448",
  "+18885808111": "2756448",
  "+18887209944": "2756448",
  "+18665205313": "2756448",
  "+18778072806": "2756448",
  "+18885527860": "2756448",
  "+18888700875": "2756448",
  "+18665205314": "2756448",
  "+18774969333": "2756448",
  "+18777287469": "2756448",
  "+18448372262": "2756448",
  "+18887560875": "2756448",
  "+18664089250": "2756448",
  "+18772469977": "2756448",
  "+18334328887": "2756448",
  "+18665149508": "2756448",
  "+18885430032": "2756448",
  "+18667036097": "2756448",
  "+18884238035": "2756448",
  "+18778072829": "2756448",
  "+18888114489": "2756448",
  "+18883147857": "2756448",
  "+18887437211": "2756448",
  "+18883781801": "2756448",
  "+18777286101": "2756448",
  "+18777284019": "2756448",
  "+18334328890": "2756448",
  "+18883789725": "2756448",
  "+18775051185": "2756448",
  "+18775927039": "2756448",
  "+18888040875": "2756448",
  "+18883779399": "2756448",
  "+18883781834": "2756448",
  "+18777180003": "2756448",
  "+18883763431": "2756448",
  "+18888338035": "2756448",
  "+18884098035": "2756448",
  "+18883783114": "2756448",
  "+18775055198": "2756448",
  "+18883792282": "2756448",
  "+18886124860": "2756448",
  "+18883778935": "2756448",
  "+18888028035": "2756448",
  "+18665205293": "2756448",
  "+18888068039": "2756448",
  "+18888500875": "2756448",
  "+18882798085": "2756448",
  "+18888089986": "2756448",
  "+18775828433": "2756448",
  "+18775051179": "2756448",
  "+18883783123": "2756448",
  "+18772469822": "2756448",
  "+18005263178": "1381112",
  "+18009240586": "1381112",
  "+18775346698": "1381112",
  "+18004654054": "1381112",
  "+18662677219": "1381112",
  "+18668398328": "1381112",
  "+18668589349": "1381112",
  "+18668229565": "1381112",
  "+18883709516": "1381112",
  "+18666348192": "1381112",
  "+18008238405": "1381112",
  "+18778743905": "1381112",
  "+18004168676": "1381112",
  "+18666444534": "1381112",
  "+18772889473": "2525267",
  "+18553437283": "2525267",
  "+18002489685": "2525267",
  "+18003173841": "2525267",
  "+18003271306": "2525267",
  "+18004980287": "2525267",
  "+18448258389": "2525267",
  "+18009220304": "2525267",
  "+18772889685": "2525267",
  "+18003207086": "2529216",
  "+18772977816": "2529216",
  "+18003163005": "2529216",
  "+18448990677": "2525267",
  "+18448990679": "2525267",
  "+18448990678": "2525267",
  "+18448990683": "2525267",
  "+18003198511": "2756451",
  "+18003192737": "2756451",
  "+18003054704": "2756451",
  "+18003163550": "2756451",
  "+18003192741": "2756451",
  "+18003196560": "2756451",
  "+18003176773": "2756451",
  "+18003163037": "2756451",
  "+18003161855": "2756451",
  "+18003052918": "2756451",
  "+18002846117": "2756451",
  "+18003253471": "2756451",
  "+18003162844": "2756451",
  "+18002748002": "2756451",
  "+18003153975": "2756451",
  "+18777287478": "2756448",
  "+18882618037": "2756448",
  "+18883618033": "2756448",
  "+18886237709": "2756448",
  "+18888116192": "2756448",
  "+18887968039": "2756448",
  "+18777286116": "2756448",
  "+18885958035": "2756448",
  "+18889078024": "2756448",
  "+18887206840": "2756448",
  "+18888458846": "2756448",
  "+18887457255": "2756448",
  "+18887457277": "2756448",
  "+18662163382": "2756448",
  "+18882316979": "2756448",
  "+18555510676": "2756448",
  "+18003173086": "2529216",
  "+18003271317": "2529216",
  "+18668222775": "1381112",
  "+18772191045": "1381112",
  "+18448990680": "2525267",
  "+18448990681": "2525267",
  "+18448990682": "2525267",
  "+18448990684": "2525267",
  "+18448990685": "2525267",
  "+18448990686": "2525267",
  "+18448990694": "2525267",
  "+18448990695": "2525267",
  "+18448990696": "2525267",
  "+18448990308": "2525267",
  "+18448990309": "2525267",
  "+18448990310": "2525267",
  "+18448990311": "2525267",
  "+18448990312": "2525267",
  "+18448990313": "2525267",
  "+18448990314": "2525267",
  "+18882314099": "2756448",
  "+18446762681": "1381112",
  "+18668398331": "1381112",
  "+18665762381": "1381112",
  "+18664511326": "1381112",
  "+18666444532": "1335638",
  "+18003139995": "1381112",
  "+18003173228": "1381112",
  "+18003689439": "1381112",
  "+18668589345": "1381112"
};

var organicSources = true;

var reRunAfter = 3000;

var requiredParams = null;

var resetCacheOn = ['gclid', 'utm_source', 'utm_medium'];

var waitFor = 0;

var customCodeIsSet = (function() {
  Invoca.Client.customCode = function(options) {
    Invoca.Tools.allowedClientSideParams([]);

options.integrations.googleAnalytics = true;

options.integrations.adobeAnalytics = {
  // insert Instance ID in place of X's
  username: "7ED836675AB3A4860A495CAD@AdobeOrg",
  paramName: "adobe_id",
  fallbackValue: null
};

// added to limit run to specific URLs (one tag deploy across Verizon - only run on business pages)
options.autoRun = window.location.pathname.slice(0,-1).split('/')[1] === 'business';



return options;
  };

  return true;
})();

var generatedOptions = {
  active:              true,
  autoSwap:            false,
  cookieDays:          cacheLifetimeDays,
  country:             "US",
  dataSilo:            "us",
  defaultCampaignId:   defaultCampaignId,
  destinationSettings: destinationSettings,
  disableUrlParams:    ['b2c','marketing_channel_detail'],
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

})(1862);
