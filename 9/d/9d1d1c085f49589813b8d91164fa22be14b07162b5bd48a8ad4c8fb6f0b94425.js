(function(networkId) {
var cacheLifetimeDays = 30;

var customDataWaitForConfig = [
  { on: function() { return Invoca.Client.parseCustomDataField("accountHubUser", "Last", "Cookie", "accountHubUser"); }, paramName: "accountHubUser", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("account_category", "Last", "JavascriptDataLayer", "Invoca.Client.captureAccountCategory"); }, paramName: "account_category", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("account_type_code", "Last", "JavascriptDataLayer", "Invoca.Client.captureAccountType"); }, paramName: "account_type_code", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("adobe_channel", "Last", "JavascriptDataLayer", "Invoca.Client.captureAdobeChannel"); }, paramName: "adobe_channel", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("adobe_full_page_url", "Last", "JavascriptDataLayer", "Invoca.Client.captureAdobeFullPageUrl"); }, paramName: "adobe_full_page_url", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("adobe_full_url_no_params", "Last", "JavascriptDataLayer", "location.hostname + location.pathname"); }, paramName: "adobe_full_url_no_params", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("adobe_page_name", "Last", "JavascriptDataLayer", "Invoca.Client.captureAdobePageName"); }, paramName: "adobe_page_name", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("adobe_reportsuite", "Last", "URLParam", ""); }, paramName: "adobe_reportsuite", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("adobe_site_name", "Last", "JavascriptDataLayer", "Invoca.Client.captureAdobeSiteName"); }, paramName: "adobe_site_name", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("adobe_subsection", "Last", "JavascriptDataLayer", "Invoca.Client.captureAdobeSubSection"); }, paramName: "adobe_subsection", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("agent_name", "Last", "URLParam", ""); }, paramName: "agent_name", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("ban", "Last", "JavascriptDataLayer", "Invoca.Client.captureEncryptedBAN"); }, paramName: "ban", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("CallerName", "Last", "URLParam", ""); }, paramName: "CallerName", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("calling_page", "Last", "JavascriptDataLayer", "location.href"); }, paramName: "calling_page", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("CALL_DISPOSITION_DESC_AGG", "Last", "URLParam", ""); }, paramName: "CALL_DISPOSITION_DESC_AGG", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("CALL_INTENT_AGG", "Last", "URLParam", ""); }, paramName: "CALL_INTENT_AGG", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("call_start_time_webhook", "Last", "URLParam", ""); }, paramName: "call_start_time_webhook", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("call_start_time_webhook_utc", "Last", "URLParam", ""); }, paramName: "call_start_time_webhook_utc", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("city_ip", "Last", "JavascriptDataLayer", "Invoca.Client.getLocationLevelData().city"); }, paramName: "city_ip", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("cmpid", "Last", "URLParam", ""); }, paramName: "cmpid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("country_ip", "Last", "JavascriptDataLayer", "Invoca.Client.getLocationLevelData().country"); }, paramName: "country_ip", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("customer_journey", "Multi", "JavascriptDataLayer", "window.location.pathname"); }, paramName: "customer_journey", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("customer_permissions", "Last", "JavascriptDataLayer", "Invoca.Client.captureCustomerPermissions"); }, paramName: "customer_permissions", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("customer_type", "Last", "URLParam", ""); }, paramName: "customer_type", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("dclid", "Last", "URLParam", ""); }, paramName: "dclid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("defaultTMOID", "Last", "Cookie", "defaultTMOID"); }, paramName: "defaultTMOID", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("Demdex", "Last", "Cookie", "aam_uuid"); }, paramName: "Demdex", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("domain_name", "Last", "JavascriptDataLayer", "window.location.host"); }, paramName: "domain_name", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("es_web_an_new", "Last", "Cookie", "es_web_an_new"); }, paramName: "es_web_an_new", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("gclid", "Last", "URLParam", ""); }, paramName: "gclid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("gpv_v10", "Last", "Cookie", "gpv_v10"); }, paramName: "gpv_v10", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("landing_page", "Last", "JavascriptDataLayer", "window.location.href"); }, paramName: "landing_page", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("language_domain", "Last", "JavascriptDataLayer", "window.location.host"); }, paramName: "language_domain", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("Location", "Last", "JavascriptDataLayer", "Invoca.Client.getLocationLevelData().loc"); }, paramName: "Location", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("lpc", "Last", "JavascriptDataLayer", "Invoca.Client.captureLpcValue"); }, paramName: "lpc", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("Manager", "Last", "URLParam", ""); }, paramName: "Manager", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("MasterDealerCode", "Last", "URLParam", ""); }, paramName: "MasterDealerCode", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("mcid", "Last", "Cookie", "mcid"); }, paramName: "mcid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("msclkid", "Last", "URLParam", ""); }, paramName: "msclkid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("msisdn", "Last", "JavascriptDataLayer", "Invoca.Client.captureEncryptedMSISDN"); }, paramName: "msisdn", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("postal_ip", "Last", "JavascriptDataLayer", "Invoca.Client.getLocationLevelData().postal"); }, paramName: "postal_ip", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("profile_name", "Last", "URLParam", ""); }, paramName: "profile_name", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("Regional_Manager", "Last", "URLParam", ""); }, paramName: "Regional_Manager", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("region_ip", "Last", "JavascriptDataLayer", "Invoca.Client.getLocationLevelData().region"); }, paramName: "region_ip", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("responsive_state", "Last", "JavascriptDataLayer", "digitalData.page.pageInfo.responsiveState"); }, paramName: "responsive_state", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("site_search_term", "Last", "JavascriptDataLayer", "digitalData.search.term"); }, paramName: "site_search_term", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("Skill_Name", "Last", "URLParam", ""); }, paramName: "Skill_Name", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("Skill_Number", "Last", "URLParam", ""); }, paramName: "Skill_Number", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("Supervisor", "Last", "URLParam", ""); }, paramName: "Supervisor", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("Telesales_Manager", "Last", "URLParam", ""); }, paramName: "Telesales_Manager", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("tfb_destination", "Last", "URLParam", ""); }, paramName: "tfb_destination", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_campaign", "Last", "URLParam", ""); }, paramName: "utm_campaign", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_content", "Last", "URLParam", ""); }, paramName: "utm_content", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_medium", "Last", "URLParam", ""); }, paramName: "utm_medium", fallbackValue: function() { return Invoca.PNAPI.currentPageSettings.poolParams.utm_medium || null; } },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_source", "Last", "URLParam", ""); }, paramName: "utm_source", fallbackValue: },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_term", "Last", "URLParam", ""); }, paramName: "utm_term", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("_fbc", "Last", "Cookie", "_fbc"); }, paramName: "_fbc", fallbackValue: null },
  { on:  paramName: "_fbp", fallbackValue: null }
];

var defaultCampaignId = "direct_routing";

var destinationSettings = {
  paramName: "invoca_detected_destination"
};

var numbersToReplace = null;

var organicSources = true;

var reRunAfter = 1000;

var requiredParams = null;

var resetCacheOn = ['gclid', 'utm_source', 'utm_medium'];

var waitFor = 0;

var customCodeIsSet = (function() {
  Invoca.Client.customCode = function(options) {
    // params to be stored client side as part of the SSA migration
// this list must be kept in sync with any use of readInvocaData
try {
  Invoca.Tools.allowedClientSideParams(['gclid', 'msclkid']);
} catch (error) {
  console.log(error);
}
//merge local object with existing data, to include numbers from UI
//this will have the UI take precedence over custom numbers
var customNumberToReplace = {
// T-Mobile Consumer Page Numbers
"8447097078": "direct_routing",
"8447097079": "direct_routing",
"8447097080": "direct_routing",
"8447097081": "direct_routing",
"8447097082": "direct_routing",
"8447097083": "direct_routing",
"8447097084": "direct_routing",
"8447097085": "direct_routing",
"8447097086": "direct_routing",
"8447097087": "direct_routing",
"8443012423": "direct_routing",
"8443012421": "direct_routing",
"8447862960": "direct_routing",
"8552345900": "direct_routing",
"8552359936": "direct_routing",
"8552610739": "direct_routing",
"8552698551": "direct_routing",
"8552841198": "direct_routing",
"8554006522": "direct_routing",
"8554359396": "direct_routing",
"8554728637": "direct_routing",
"8557418933": "direct_routing",
"8558829462": "direct_routing",
"8774399136": "direct_routing",
"8775006074": "direct_routing",
"8776038362": "direct_routing",
"8773147955": "direct_routing",
"8773626318": "direct_routing",
"8774598913": "direct_routing",
"8774774741": "direct_routing",
"8775281811": "direct_routing",
"8776775483": "direct_routing",
"8006725390": "direct_routing",
"8772146468": "direct_routing",
"8772149154": "direct_routing",
"8772896560": "direct_routing",
"8772921475": "direct_routing",
"8774434974": "direct_routing",
"8776709172": "direct_routing",
"8776933821": "direct_routing",
"8876995830": "direct_routing",
"8664648622": "direct_routing",
"8778806937": "direct_routing",
"8778969265": "direct_routing",
"8009596535": "direct_routing",
"8773347097": "direct_routing",
"8773347102": "direct_routing",
"8773347103": "direct_routing",
"8773347106": "direct_routing",
"8773347107": "direct_routing",
"8773347142": "direct_routing",
"8773347143": "direct_routing",
"8442336085": "direct_routing",
"8557402981": "direct_routing",
"8447402977": "direct_routing",
"8773347153": "direct_routing",
"8773347155": "direct_routing",
"8773626315": "direct_routing",
"8774906636": "direct_routing",
"8774906646": "direct_routing",
"8774906648": "direct_routing",
"8774906652": "direct_routing",
"8774906654": "direct_routing",
"8774026699": "direct_routing",
"8774906706": "direct_routing",
"8772828416": "direct_routing",
"8442336091": "direct_routing",
"8443012427": "direct_routing",
"8443012426": "direct_routing",
"8778142935": "direct_routing",
"8443012721": "direct_routing",
"8448894983": "direct_routing",
"8442336087": "direct_routing",
"8442336089": "direct_routing",
"8442336090": "direct_routing",
"8442408931": "direct_routing",
"8447153554": "direct_routing",
"8777722495": "direct_routing",
"8008662453": "conditional_routing",
"1-800-T-MOBILE": "conditional_routing",
"1-800-TMOBILE": "conditional_routing",
"8773626320": "conditional_routing",
"8774433851": "conditional_routing",
"8885374242": "conditional_routing",
"8442221826": "direct_routing",
"8442221938": "direct_routing",
"8442952755": "direct_routing",
"8448627754": "direct_routing",
"8442897477": "direct_routing",
"8337966242": "direct_routing",
"8442221936": "direct_routing",
"8337966248": "direct_routing",
"8837966254": "direct_routing",
"8337966262": "direct_routing",
"8334522555": "direct_routing",
"8442592845": "direct_routing",
"8442221924": "direct_routing",
"8334522484": "direct_routing",
"8334522736": "direct_routing",
"8442221923": "conditional_routing",
"8334522933": "direct_routing",
"8334522992": "direct_routing",
"8334522633": "direct_routing",
"8334523050": "direct_routing",
"8337966257": "direct_routing",

// T-Mobile Commercial (TFB) Page Numbers ('/business')
"8444289675": "tfb_main",
"8775904728": "tfb_web", //Invoca static number
"8663271847": "tfb_web", //Invoca static number - canceled static
"8889340607": "tfb_web", //Invoca static number
"8556209071": "tfb_web", //Invoca static number
"8775597983": "tfb_web", //Invoca static number
"8553772185": "tfb_web", //Invoca static number
"8886098382": "tfb_web", //Invoca static number
"8554081237": "tfb_web", //Invoca static number
"8554193795": "tfb_web", //Invoca static number - canceled static
"8776290708": "tfb_web", //Invoca static number
"8552293649": "tfb_web", //Invoca static number
"8554021160": "tfb_web", //Invoca static number
"8776376836": "tfb_web", //Invoca static number - email
"8886009794": "tfb_web", //Invoca static number - email
"8553899048": "tfb_web", //Invoca static number
"8667524876": "tfb_web", //Invoca static number
"8447855501": "tfb_web", //Invoca static number
"8448913251": "tfb_web",
"8445001695": "tfb_web", //Invoca static number - social media
"8554021626": "tfb_web", //Invoca static number - social media
"8777047158": "tfb_web", //Invoca static number - social media
"8557736847": "tfb_web", //Invoca static number - social media
"8664623121": "tfb_web", //Invoca static number - social media
"8664975262": "tfb_web", //Invoca static number

"8555709934": "direct_tfb_routing",
"8555709935": "direct_tfb_routing",
"8555709936": "direct_tfb_routing",
"8775761240": "direct_tfb_routing",
"8775933057": "direct_tfb_routing",
"8776091881": "direct_tfb_routing",
"8555709937": "direct_tfb_routing",
"8555709938": "direct_tfb_routing",
"8555709939": "direct_tfb_routing",
"8555709940": "direct_tfb_routing",
"8555709941": "direct_tfb_routing",
"8776721236": "direct_tfb_routing",
"8776775501": "direct_tfb_routing",
"8777592544": "direct_tfb_routing",
"8555709942": "direct_tfb_routing",
"8555709943": "direct_tfb_routing",
"8555709944": "direct_tfb_routing",
"8555709945": "direct_tfb_routing",
"8777937168": "direct_tfb_routing",
"8778141344": "direct_tfb_routing",
"8778265556": "direct_tfb_routing",
"8772929943": "direct_tfb_routing",
"8773347144": "direct_tfb_routing",
"8555709948": "direct_tfb_routing",
"8668787222": "direct_tfb_routing",
"8772038659": "direct_tfb_routing",
"8778290452": "direct_tfb_routing",
"8778455317": "direct_tfb_routing",
"8778707261": "direct_tfb_routing",
"8772227494": "direct_tfb_routing",
"8772305854": "direct_tfb_routing",
"8772392621": "direct_tfb_routing",
"8772691054": "direct_tfb_routing",
"8772803917": "direct_tfb_routing",
"8772956223": "direct_tfb_routing",
"8773147960": "direct_tfb_routing",
"8773165315": "direct_tfb_routing",
"8773846440": "direct_tfb_routing",
"8773988368": "direct_tfb_routing",
"8774262024": "direct_tfb_routing",
"8775006071": "direct_tfb_routing",
"8775249186": "direct_tfb_routing",
"8775706670": "direct_tfb_routing",
"8443012425": "direct_tfb_routing",
"8443012424": "direct_tfb_routing",

"8777546367": "tfb_main", //Invoca static number
"8339340793": "tfb_main", //Invoca static number
"8664791251": "tfb_main", //Invoca static number
"8559805194": "tfb_main", //Invoca static number
"8773290585": "tfb_main", //Invoca static number
"8443012667": "Govt", //Invoca static number
"8773864246": "Govt", //Invoca static number
"8443530891": "Govt", //Invoca static number

"8555245641": "tfb_main", //Invoca static number
"8776259404": "tfb_main", //Invoca static number
"8884160473": "tfb_main", //Invoca static number
"8558969261": "tfb_main", //Invoca static number
"8333990038": "tfb_main", //Invoca static number
"8556935515": "tfb_team-jacob", //Invoca static number
"8772658873": "tfb_main", //Invoca static number
"8444885529": "tfb_main", //Invoca static number
"8773840296": "1138829", //Invoca static number
"8445980278": "505754", //Invoca static number
"8559513562": "tfb_main", //Invoca static number
"8555935269": "tfb_main", //Invoca static number
"8664750850": "tfb_main", //Invoca static number
"8552120510": "tfb_main", //Invoca static number
"8554109914": "tfb_main", //Invoca static number
"8557100673": "tfb_main", //Invoca static number
"8447191778": "tfb_main", //Invoca static number
"8886044748": "tfb_federal", //Invoca static number
"8669650526": "tfb_main", //Invoca static number
"8777730687": "tfb_main", //Invoca static number
"8442052432": "tfb_main", //Invoca static number
"8557618424": "tfb_main", //Invoca static number
"8554043376": "tfb_sos", //Invoca static number
"8775789176": "tfb_main", //Invoca static number
"8442095677": "tfb_main", //Invoca static number
"8664821520": "tfb_main", //Invoca static number
"8776189889": "tfb_main", //Invoca static number
"8553985225": "tfb_main", //Invoca static number
"8777767516": "tfb_main", //Invoca static number
"8556451793": "tfb_main", //Invoca static number
"8447391201": "tfb_main", //Invoca static number
"8773600371": "tfb_main", //Invoca static number
"8552843892": "tfb_main", //Invoca static number
"8882951695": "tfb_main", //Invoca static number
"8333490677": "tfb_main", //Invoca static number
"8666240807": "tfb_main", //Invoca static number
"8668315066": "tfb_main", //Invoca static number
"8555181102": "tfb_main", //Invoca static number
"8448718709": "tfb_main", //Invoca static number
"8333022457": "tfb_main", //Invoca static number
"8555210870": "tfb_main", //Invoca static number
"8555452909": "tfb_main", //Invoca static number
"8334393621": "tfb_main", //Invoca static number
"8557099103": "tfb_main", //Invoca static number
"8773291827": "tfb_main", //Invoca static number
"8445188424": "tfb_main", //Invoca static number
"8777293905": "tfb_main", //Invoca static number
"8442445042": "tfb_main", //Invoca static number
"8552981351": "tfb_main", //Invoca static number
"8559635059": "tfb_main", //Invoca static number
"8773235617": "tfb_main", //Invoca static number
"8337182082": "tfb_main", //Invoca static number
"8664095446": "tfb_main", //Invoca static number
"8559665840": "tfb_main", //Invoca static number
"8556487639": "tfb_main", //Invoca static number
"8778876809": "tfb_main", //Invoca static number
"8336181030": "tfb_main", //Invoca static number
"8884453421": "tfb_main", //Invoca static number
"8339890373": "tfb_main", //Invoca static number
"8559801143": "tfb_main", //Invoca static number
"8553977117": "tfb_main", //Invoca static number
"8558080551": "tfb_main", //Invoca static number
"8773211954": "tfb_main", //Invoca static number
"8772989026": "tfb_main", //Invoca static number
"8558078231": "tfb_main", //Invoca static number


//ISP
"8448395059": "3849111",
"8442759311": "3849111",
"8334281661": "3849111",
"8448395057": "3849111", 
"8442759310": "3849111"
};

//Function to check which digitalData layer property to use to pull adobe marketing data field values
Invoca.Client.checkObjectPath = function () {
  var platformKeyword = ['nextgen', 'uno-aa', 'rainier', 'tmobile/tmobile']
  var objectName = 'no values found';
  for (var i = 0; i < platformKeyword.length; i++) {
    if (window.utag && window.utag.cfg && window.utag.cfg.path && window.utag.cfg.path.indexOf(platformKeyword[i]) !== -1) {
      return objectName = platformKeyword[i];
    }
  };
  return objectName;
}

// Condition to set autoRun to false for subdirectories
if(Invoca.Tools.contains(window.document.location.pathname, "/government-wireless-solutions")) {
  options.autoRun = false;
}

// checks for conditions where customer wants to replace :tel links only
options.onPhoneNumberFound = function(node, requestData) {
  var number = node.textContent;
  number = number.toLowerCase();
  number = number.replace(/-/g, "");
  
  var nodeName = node.nodeName.toLowerCase();
  
  if (nodeName !== "a" && Invoca.Tools.contains(number, "1800tmobile")){
    // checks if number is a 1-800-T-Mobile (vanity number)
    // prevents number replacement unless it is an <a> tag
    return false;
  }else if((nodeName == "span" || nodeName == "#text") && number.indexOf("8444289675") >= 0){
    // checks if number is a business number 1-844-428-9675
    // prevents number replacement if it is a <span> tag
    return false;
//  }else if((nodeName == "span" || nodeName == "#text") && number.indexOf("8448395057") >= 0){
    // checks if number is an ISP number 1-844-839-5057
    // prevents number replacement if it is a <span> tag
//    return false;
  }
};

// Splits encrypted MSISDN-BAN value and populates individual values into CD, this information is needed for Adobe Integration Requirements
  Invoca.Client.captureEncryptedMSISDN = function() {
    var msisdn = "";
    var wholeEncriptedValue = Invoca.Tools.readCookie('es_web_an_new') || "Invoca Phone Call: MSISDN Not Available ||Invoca Phone Call: BAN Not Available";
    var encriptedValue = wholeEncriptedValue.split('||');
    msisdn = encriptedValue[0];
    return msisdn;
  };

  Invoca.Client.captureEncryptedBAN = function() {
    var ban = "";
    var wholeEncriptedValue = Invoca.Tools.readCookie('es_web_an_new') || "Invoca Phone Call: MSISDN Not Available ||Invoca Phone Call: BAN Not Available";
    var encriptedValue = wholeEncriptedValue.split('||');
    ban = encriptedValue[1];
    return ban;
  };
  
  // Returns digitalData Information for Clients if defined, if not, sets value as string.  Note, Invoca tag is not currently on user log-in, these values would not be anticipated to be filled unless the user is logged on and the tag is on the page

  Invoca.Client.captureAccountType = function() {
  if (digitalData && digitalData.customer && digitalData.customer.account) {
    account_type_code = digitalData.customer.account.accountSubType;
  } else {
    account_type_code = "Invoca Phone Call: Account Type Code Not Available";    
    } 
  return account_type_code;
  };
    
  Invoca.Client.captureAccountCategory = function() {
    var account_category = "";
    if (digitalData && digitalData.customer && digitalData.customer.account) {
      account_category = digitalData.customer.account.isPrepaidSubscriber.toString();
    } else {
      account_category = "Invoca Phone Call: Account Category Not Available";    
    } 
    return account_category;
  };


Invoca.Client.captureCustomerPermissions = function () {
  var userRoleErrMsg = "Invoca Phone Call: User Role Not Available";
  try {
    switch (Invoca.Client.checkObjectPath()) {
      case 'uno-aa':
        return digitalData.user.profile.account.userRole || userRoleErrMsg;
      case 'nextgen':
        return digitalData.customer.account.userRole || userRoleErrMsg;
      case 'tmobile/tmobile':
        return window._PDL.Data.Account.userRole || userRoleErrMsg;
      default:
        return digitalData.user.userRole || userRoleErrMsg;
    }
  } catch (error) {
    return userRoleErrMsg;
  };
}


Invoca.Client.captureAdobePageName = function () {
  var adobePageNameErrMsg = "Invoca Phone Call: Adobe PageName Not Available";
  try {
    switch (Invoca.Client.checkObjectPath()) {
      case 'nextgen':
        return (window.ta && ta.scutl && typeof ta.scutl.fullPgNm === "function" ? ta.scutl.fullPgNm(window.digitalData) : window.tao && typeof tao.pageName == "function" && tao.pageName()) || adobePageNameErrMsg;
      case 'tmobile/tmobile':
        return (window.tao && typeof tao.classicPageNm === "function" && tao.classicPageNm()) || adobePageNameErrMsg;
      default:
        return (window.ta && ta.scutl && typeof ta.scutl.fullPgNm === "function" && ta.scutl.fullPgNm(window.digitalData)) || adobePageNameErrMsg;
    }
  } catch (error) {
    return adobePageNameErrMsg;
  };
}
  
Invoca.Client.captureAdobeChannel = function () {
  var adobeChannelErrMsg = "Invoca Phone Call: Adobe Channel Not Available";
  try {
    switch (Invoca.Client.checkObjectPath()) {
      case 'uno-aa':
        return digitalData.page.pageInfo.primaryCategory || adobeChannelErrMsg;
      case 'nextgen':
        return digitalData.page.category.primaryCategory || adobeChannelErrMsg;
      case 'tmobile/tmobile':
        return (window.ta && ta.site && typeof ta.site.get === "function" && ta.site.get().section) || adobeChannelErrMsg;
      default:
        return digitalData.page.channel || adobeChannelErrMsg;
    }
  } catch (error) {
    return adobeChannelErrMsg;
  };
}

Invoca.Client.captureAdobeSubSection = function () {
  var adobeSubSectionErrMsg = "Invoca Phone Call: Adobe subsection Not Available";
  try {
    switch (Invoca.Client.checkObjectPath()) {
      case 'uno-aa':
        return digitalData.page.pageInfo.subCategory || adobeSubSectionErrMsg;
      case 'nextgen':
        return digitalData.page.category.subCategory || adobeSubSectionErrMsg;
      case 'tmobile/tmobile':
        return (window.ta && ta.site && typeof ta.site.get === "function" && ta.site.get().subsection) || adobeSubSectionErrMsg;
      default:
        return digitalData.page.subSection || adobeSubSectionErrMsg;
    }
  } catch (error) {
    return adobeSubSectionErrMsg;
  };
}


Invoca.Client.captureAdobeSiteName = function () {
  var adobeSiteNameErrMsg = "Invoca Phone Call: Adobe Site Name Not Available";
  try {
    switch (Invoca.Client.checkObjectPath()) {
      case 'uno-aa':
        return (window.ta && ta.scutl && typeof ta.scutl.getSitename === "function" && ta.scutl.getSitename()) || adobeSiteNameErrMsg;
      case 'nextgen':
        return ((window.tao && typeof tao.siteName === "function" && tao.siteName()) || digitalData.page.pageInfo.site) || adobeSiteNameErrMsg;
      case 'tmobile/tmobile':
        return (window.tao && typeof tao.siteName === "function" && tao.siteName()) || adobeSiteNameErrMsg;
      default:
        return digitalData.page.siteName || adobeSiteNameErrMsg;
    }
  } catch (error) {
    return adobeSiteNameErrMsg;
  };
}

Invoca.Client.captureAdobeFullPageUrl = function () {
  var adobeFullPageUrlErrMsg = "Invoca Phone Call: Adobe full page url Not Available";
  try {
    switch (Invoca.Client.checkObjectPath()) {
      case 'uno-aa':
        return digitalData.page.pageInfo.url || adobeFullPageUrlErrMsg;
      case 'nextgen':
        return digitalData.page.pageInfo.pageURL || digitalData.page.pageInfo.pageURLFull || adobeFullPageUrlErrMsg;
      case 'tmobile/tmobile':
        return location.href || adobeFullPageUrlErrMsg;
      default:
        return digitalData.page.href || adobeFullPageUrlErrMsg;
    }
  } catch (error) {
    return adobeFullPageUrlErrMsg;
  };
}

//Capture lpc
Invoca.Client.captureLpcValue = function () {
  var lpcErrMsg = "Invoca Phone Call: lpc value Not Available";
  try{
    return Invoca.Tools.readCookie('lpc') || digitalData.user.userType || lpcErrMsg;
  }catch(error){
    return lpcErrMsg;
  };
}

var mergedNumbers = Invoca.PNAPI.extend({}, customNumberToReplace, options.numberToReplace);
options.numberToReplace = mergedNumbers;
options.useLocalStorage=true;

// Custom code to track only invoca_id, gclid, and msclkid in a cookie
// this must be before "return options"
(function() {
  // Short name to keep header length low as possible
  var CUSTOM_COOKIE_NAME = "invc";

  function parseTransferCookie() {
    try {
      var string = Invoca.Tools.readCookie(CUSTOM_COOKIE_NAME);
      return string && JSON.parse(string);
    } catch(e) {
      Invoca.log("Custom transfer failed because" + e.message);
    }
  }

  function setTransferArray() {
    var jsonString = JSON.stringify([
      Invoca.Tools.readInvocaData("invoca_id"),
      Invoca.Tools.readInvocaData("gclid"),
      Invoca.Tools.readInvocaData("msclkid")
    ]);

    // This is only a vehicle to cross subdomains
    Invoca.Tools.setCookie(CUSTOM_COOKIE_NAME, jsonString, 1);
  }

  function applyTransferData() {
    var parsedArray = parseTransferCookie();
    
    if (parsedArray && parsedArray.constructor === Array) {
      var invocaId  = parsedArray[0];
      var gclid     = parsedArray[1];
      var msclkid   = parsedArray[2];

      // Indices are important please don't change!
      manageInvocaIds(invocaId);

      if (invocaId) options.poolParams.invoca_id = invocaId;
      if (gclid)    options.poolParams.gclid     = gclid;
      if (msclkid)  options.poolParams.msclkid   = msclkid;
    }
    
    // This is to remove the Invoca cookie (since we use localStorage now)
    // it will unblock browsers that were already cookied
    Invoca.Tools.removeCookie("invoca_session");
  }

  function manageInvocaIds(invocaId) {
    var lsId = window.localStorage.getItem("invoca_id");

    if (invocaId !== lsId) {
      window.localStorage.setItem("invoca_id", invocaId);
    }
  }

  applyTransferData();
  options.onComplete = setTransferArray;
})();

Invoca.Client.getLocationLevelData = 
function getAdobeMCMIDFromCookie() {
	//get Marketing cloud id  created by Adobe visitor api
	try {
		return ((decodeURIComponent(document.cookie || "").match(/AMCV_(.*)AdobeOrg\=.*(\|?MCMID)\|(.*?)\|/i) || [])[3] || document.cookie.replace(/(?:(?:^|.*;\s*)s_ecid\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
	} catch (e) { }
}
var mcmid = (window._PDL && _PDL.internal && _PDL.internal.adobeVisitorId) || (window.digitalData && digitalData.internal && digitalData.internal.adobeVisitorId) || getAdobeMCMIDFromCookie() || "";

// In new Adobe sdk, there will be no Visitor to have username as an argument.'else'can be deleted if legacy adobe is all replaced. 
if (mcmid) {
	options.poolParams.mcid = mcmid;
} else {
	options.integrations.adobeAnalytics = {
		username: "1358406C534BC94D0A490D4D@AdobeOrg"
	};
}

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
  disableUrlParams:    ['Disposition','Retailoutcome','Retailoutcomereason'],
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

})(1639);
