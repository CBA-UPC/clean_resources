(function(networkId) {
var cacheLifetimeDays = 30;

var customDataWaitForConfig = [
  { on: function() { return Invoca.Client.parseCustomDataField("agent", "Last", "URLParam", ""); }, paramName: "agent", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("att_tfn", "Last", "URLParam", ""); }, paramName: "att_tfn", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("AT_T_UUID", "Last", "JavascriptDataLayer", "Invoca.Client.ddoGetVar(\"user.uuid\")"); }, paramName: "AT_T_UUID", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("call_type", "Last", "JavascriptDataLayer", "Invoca.Client.getMktAvailability(\"mktHsia\")"); }, paramName: "call_type", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("campaign", "Last", "URLParam", ""); }, paramName: "campaign", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("channel", "Last", "JavascriptDataLayer", "Invoca.Client.getChannel()"); }, paramName: "channel", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("device", "Last", "JavascriptDataLayer", "Invoca.Tools.deviceType()"); }, paramName: "device", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("directv", "Last", "JavascriptDataLayer", "sessionStorage.getItem(\"Chat_ABTest\")"); }, paramName: "directv", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("existingService", "Last", "JavascriptDataLayer", "sessionStorage.getItem(\"mktLogin\")"); }, paramName: "existingService", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("experiment", "Last", "URLParam", ""); }, paramName: "experiment", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("extendedSource", "Last", "JavascriptDataLayer", "Invoca.Client.ddoGetVar(\"wtExtndSource\")"); }, paramName: "extendedSource", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("fiber_indicator", "Last", "URLParam", ""); }, paramName: "fiber_indicator", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("final_routing_intent", "Last", "URLParam", ""); }, paramName: "final_routing_intent", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("flowCode", "Last", "JavascriptDataLayer", "Invoca.Client.ddoGetVar(\"page.pageInfo.flowCode\")"); }, paramName: "flowCode", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("fnl_actn_obj", "Last", "URLParam", ""); }, paramName: "fnl_actn_obj", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("fnl_afpd_actn", "Last", "URLParam", ""); }, paramName: "fnl_afpd_actn", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("friendlyPageName", "Last", "JavascriptDataLayer", "Invoca.Client.ddoGetVar(\"page.pageInfo.friendlyPageName\")"); }, paramName: "friendlyPageName", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("fullPageURL", "Last", "JavascriptDataLayer", "window.location.hostname + window.location.pathname + window.location.search + window.location.hash"); }, paramName: "fullPageURL", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("gclid", "Last", "URLParam", ""); }, paramName: "gclid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("gclsrc", "Last", "URLParam", ""); }, paramName: "gclsrc", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("gigaAvailResult", "Last", "JavascriptDataLayer", "Invoca.Client.getMktAvailability(\"mktGiga\")"); }, paramName: "gigaAvailResult", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("language", "Last", "JavascriptDataLayer", "Invoca.Client.ddoGetVar(\"page.pageInfo.language\")"); }, paramName: "language", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("last_page", "Last", "JavascriptDataLayer", "Invoca.Client.setLastPage()"); }, paramName: "last_page", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("lob_call_center", "Last", "URLParam", ""); }, paramName: "lob_call_center", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("need_lvl_1_txt", "Last", "URLParam", ""); }, paramName: "need_lvl_1_txt", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("need_lvl_2_txt", "Last", "URLParam", ""); }, paramName: "need_lvl_2_txt", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("need_lvl_3_txt", "Last", "JavascriptDataLayer", "Invoca.Client.getOptOut()"); }, paramName: "need_lvl_3_txt", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("nsr_b", "Last", "URLParam", ""); }, paramName: "nsr_b", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("nsr_b_inv", "Last", "URLParam", ""); }, paramName: "nsr_b_inv", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("nsr_e1", "Last", "Cookie", "e1Segment"); }, paramName: "nsr_e1", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("nsr_e1_inv", "Last", "URLParam", ""); }, paramName: "nsr_e1_inv", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("nsr_fid", "Last", "Cookie", "fabrickId"); }, paramName: "nsr_fid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("nsr_fid_inv", "Last", "URLParam", ""); }, paramName: "nsr_fid_inv", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("optional1", "Last", "URLParam", ""); }, paramName: "optional1", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("optional2", "Last", "URLParam", ""); }, paramName: "optional2", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("orderid", "Last", "URLParam", ""); }, paramName: "orderid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("owner", "Last", "URLParam", ""); }, paramName: "owner", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("pageDomain", "Last", "JavascriptDataLayer", "window.location.hostname"); }, paramName: "pageDomain", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("pageName", "Last", "Cookie", "_ptid"); }, paramName: "pageName", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("pageTitle", "Last", "JavascriptDataLayer", "document.title"); }, paramName: "pageTitle", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("pathname", "Last", "JavascriptDataLayer", "window.location.pathname"); }, paramName: "pathname", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("productTypeCart", "Last", "JavascriptDataLayer", "Invoca.Client.ddoGetVar(\"page.attributes.productType\")"); }, paramName: "productTypeCart", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("product_category", "Last", "JavascriptDataLayer", "Invoca.Client.ddoGetVar(\"page.pageInfo.lineOfBusiness\")"); }, paramName: "product_category", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("product_purchased", "Last", "URLParam", ""); }, paramName: "product_purchased", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("qm_session_replay_link", "Last", "JavascriptDataLayer", "window.QuantumMetricAPI.getReplay()"); }, paramName: "qm_session_replay_link", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("qm_user_id", "Last", "JavascriptDataLayer", "window.QuantumMetricAPI.getUserID()"); }, paramName: "qm_user_id", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("rpet_wrk_func_cd", "Last", "URLParam", ""); }, paramName: "rpet_wrk_func_cd", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("rslt_lvl_1_txt", "Last", "URLParam", ""); }, paramName: "rslt_lvl_1_txt", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("Site_location", "Last", "JavascriptDataLayer", "sessionStorage.getItem(\"abtest\")"); }, paramName: "Site_location", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("source_code", "Last", "JavascriptDataLayer", "Invoca.Client.getSourceCode()"); }, paramName: "source_code", fallbackValue: null },
  { on:  paramName: "speed", fallbackValue: null }
];

var defaultCampaignId = "ATT";

var destinationSettings = {
  paramName: "buy_flow_dest_num",
  matchLocalNumbers: false,
  matchTollFreeNumbers: false
};

var numbersToReplace = null;

var organicSources = false;

var reRunAfter = 2000;

var requiredParams = null;

var resetCacheOn = ['gclid', 'utm_source', 'utm_medium'];

var waitFor = 0;

var customCodeIsSet = (function() {
  Invoca.Client.customCode = function(options) {
    options.integrations = {
	adobeAnalytics: {
		username: "55633F7A534535110A490D44@AdobeOrg",
		paramName: "mcid"
	}
};

Invoca.Tools.allowedClientSideParams([
	"invoca_id",
	"s",
	"extendedSource",
	"t",
	"gclid",
	"gcm_uid",
	"referrer",
	"source_code"
]);

var source = Invoca.Tools.readUrl("source") || Invoca.Tools.readCookie("sourceCode") || Invoca.Tools.readInvocaData("source_code");
var autoCreateRingpoolArray = ["+18776771904", "+18662996824", "+18773337175"];

Invoca.Client.ddoGetVar = function (ddoVar) {
	return ddo && ddo.getVar(ddoVar) ? ddo.getVar(ddoVar) : "";
};

Invoca.Client.getSourceCode = function() {
    if (source && source.length === 17) {
    	return source;
    } 
};

var extSource = Invoca.Tools.readUrl("wtExtndSource");
options.poolParams.extendedSource = extSource;

Invoca.Client.getMktAvailability = function (metric) {
	var metricValue;
	if (sessionStorage.mktAvailability) {
		var mktAvailabilityObj = JSON.parse(sessionStorage.mktAvailability)[0];
		metricValue = mktAvailabilityObj[metric];
		if (metric !== undefined && mktAvailabilityObj[metric] !== undefined) {
			metricValue = mktAvailabilityObj[metric];
		}
	}
	return metricValue;
};

Invoca.Client.getChannel =function() {
    var paid_source = Invoca.Client.getSourceCode();
    var channel;
    if (!paid_source) {
        return channel = ''
    }
    var lastChar = paid_source.charAt(16);    
    switch (lastChar) {
      case "P":
        channel = "Paid Search";
        break;   
      case "A":
        channel = "Affiliate";
        break;   
      case "E":
        channel = "Emails";
        break;   
      case "S":
        channel = "Paid Social";   
        break;   
      case "M":
        channel = "Organic Social";
        break;
      case "O":
        channel = "Display Ads";
        break;
      case "U":
        channel = "Vanity URL";
        break;    
      case "D":
        channel = "Direct Mail";
        break;
      case "H":
        channel = "Push Notification";
        break;
      case "T":
        channel = "SMS";
        break;
      case "L":
        channel = "Link";
        break;
      default:
        channel = "Other";
    }
   
    return channel;
};

options.onPhoneNumberFound = function (node, requestData) {
	var shouldSwap = true;
	
	//Do not swap on support pages
	if (shouldSwap === true && window.location.href.indexOf("/support/") > -1) {
		shouldSwap = false;
	}

	shouldSwap = isTollFree(requestData.request_id);

	//List of exception pages. Invoca will not work here.
	if (shouldSwap === true && (window.location.href.indexOf("/collateral/access.html") > -1 ||
			//window.location.href.indexOf("/cfd") > -1 ||
			window.location.href.indexOf("/isg") > -1 ||
			window.location.href.indexOf("/clk/") > -1 ||
			window.location.href.indexOf("/olam/talkUsageDetailPage") > -1 ||
			window.location.href.indexOf("/checkmyorder/") > -1 ||
			window.location.href.indexOf("/myorders/") > -1 ||
			window.location.href.indexOf("checkPortStatus") > -1 ||
			window.location.href.indexOf("/olam/textWebUsageDetailPage") > -1 ||
			window.location.href.indexOf("/olam/passthroughAction.myworld") > -1 ||
			window.location.href.indexOf("/checkout/thankyou.html") > -1 ||
			window.location.href.indexOf("/acctmgmt/tobr/giveUsCall") > -1 ||
			window.location.href.indexOf("/DTVAPP/register/register.jsp") > -1 ||
			window.location.href.indexOf("/my/#/viewBill") > -1 ||
			window.location.href.indexOf("#FindAccount") > -1 ||
			window.location.href.indexOf("/DTVAPP/mydirectv/account/myEquipment.jsp") > -1 ||
			window.location.href.indexOf("/olam/textUsageDetailPage") > -1 ||
			window.location.href.indexOf("/acctmgmt/tobr/") > -1 ||
			window.location.href.indexOf("directv_att_welcome") > -1 ||
			window.location.href.indexOf("/collateral/access.html") > -1 ||
			window.location.href.indexOf("/collateral/dial-guide.html") > -1 ||
			window.location.href.indexOf("/microsites/v1/prusvi/") > -1 ||
			window.location.href.indexOf("/prusvi/") > -1 ||
			window.location.href.indexOf("/rvn/support") > -1 ||
			window.location.href.indexOf("utm_service=dtv_support") > -1 ||
			window.location.href.indexOf("/dep") > -1 ||
			window.location.href.indexOf("/DTVAPP/content/business/") > -1 ||
			window.location.href.indexOf("directv-for-business") > -1 ||
			window.location.href.indexOf("support.directv.com") > -1 ||
			window.location.href.indexOf("/fiber-internet-offer/2-months-free") > -1 ||
			window.location.href.indexOf("/help/ebb/") > -1 ||
			window.location.href.indexOf("/acctmgmt/usagedetails") > -1 ||
			window.location.href.indexOf("/acctmgmt/overview") > -1 ||
			//window.location.href.indexOf("att.com/tv/") > -1 ||
			window.location.href.indexOf("att.com/home-phone/landline/") > -1 ||
			window.location.href.indexOf("/consent/ccpa") > -1 ||
			window.location.href.indexOf("/buy/checkout/accountinfo") > -1 ||
      //window.location.href.toLowerCase().indexOf("/buy/bundles/?product_suite=ndtvn") > -1 ||
      window.location.href.indexOf("att.com/home-phone/landline/") > -1 ||
      (window.location.href.indexOf("/support/") > -1 && window.location.href.indexOf("business") === -1)
		)) {
		shouldSwap = false;
	}

	if (shouldSwap && isAutoCreateRingpoolNumber(requestData.params.invoca_detected_destination)) {
		requestData.destination_name = requestData.params.invoca_detected_destination;
	}
		
	// Referrer Destinations lookup table	(DirecTV included)
	if (shouldSwap && (Invoca.Tools.readUrl("referrer") || Invoca.Tools.readInvocaData("referrer"))) {
		requestData.params.invoca_detected_destination = "";
	}
  //End Referrer Destinations
  
  //Swap New Service number on Wireline page
  var paid_source = (source && source.charAt(0) === "E") || Invoca.Tools.readInvocaData("source_code");
  if (requestData.request_id.indexOf("8883336651") > -1) {
    if (location.hostname === "www.att.com" && (location.pathname === "/support/topic/wireless" || location.pathname === 
    "/support/topic/wireless/") && paid_source ) { 
      shouldSwap = true;
    } 
  } 
	
	if (shouldSwap) {
		return requestData;
	} else {
		return false;
	}
};
  //End onPhoneNumberFound




var tfnRegexArray = [/^(?!\+1800)/, /^(?!\+1888)/, /^(?!\+1877)/, /^(?!\+1866)/, /^(?!\+1855)/, /^(?!\+1844)/, /^(?!\+1833)/];

function isTollFree(requestId) {
	

	var isTollFreeResult = !tfnRegexArray.every(prefixPresent);
	//console.log("Invoca is toll free result", isTollFreeResult);

	return isTollFreeResult;
}

//Pages included in the dynamic TFN function
// var buyFlowURLArray = ["business.att.com", "att.com", "atttv.com", "connectedcommunitiessolutions.com"];

//Check for Centerfield in pathname - route to DAP:Centerfield
Invoca.Client.centerfieldCheck = function () {
	var campaignId;
	if (window.location.href.indexOf("/cf/") > -1 || window.location.href.indexOf("/cfd/") > -1) {
		campaignId = "dap_centerfield";
	}
	return campaignId;
};

// //Check for /movers/ in pathname - route to Main-Organic: Movers
Invoca.Client.moversCheck = function () {
	var campaignId;
	if (window.location.href.indexOf("att.com/moving") > -1) {
		campaignId = "movers";
	}
	return campaignId;
};

//Check for bundles/indexb in pathname - route to Main-Organic: Bundles 
Invoca.Client.bundlesCheck = function () {
	var campaignId;
	if (window.location.pathname === "/bundles/") {
		campaignId = "bundles";
	}
	return campaignId;
};


Invoca.Client.isNotAvailablePath = function () {
    // new paths can be added.
    var notAvailablePaths = [
        "buy/broadband/not-available",
        "buy/internet/not-available",
        "es-us/buy/broadband/not-available",
    ];
    
    var currentPath = window.location.pathname;
    return notAvailablePaths.some(;
};

// check for source_code and path that contains "not-available".
Invoca.Client.paidMediaNotAvailableCheck = function () {
    var campaignId;
    if (Invoca.Client.getSourceCode() && Invoca.Client.isNotAvailablePath()) {
        campaignId = "broadband_not_available";
    }
    return campaignId;
}

//Check for source_code ECBB0000000CE100P - route to Paid Media:OSA 
Invoca.Client.osaCheck = function () {
	var campaignId;
	if (Invoca.Client.getSourceCode() && source === "ECBB0000000CE100P") {
		campaignId = "osa";
	}
	return campaignId;
};


//Check for source_code - if exists and is 17 characters, route to Paid Media: Paid Media Default
Invoca.Client.buyFlowCheck = function () {
	var campaignId;
	if (Invoca.Client.getSourceCode()) {
		campaignId = "paid_media_default";
	}
	return campaignId;
};

//Controls hierarchy of campaign routing
Invoca.Client.getCurrCampaignId = function (requestData) {
	return Invoca.Client.centerfieldCheck() || 
	        Invoca.Client.moversCheck() || 
	        Invoca.Client.bundlesCheck() || 
	        Invoca.Client.paidMediaNotAvailableCheck() ||
	        Invoca.Client.osaCheck() || 
	        Invoca.Client.buyFlowCheck();
};

options.defaultCampaignId = Invoca.Client.getCurrCampaignId();

options.destinationSettings = {
	paramName: "invoca_detected_destination"
};

function useGCM() {
	if (Invoca.Tools.readUrl("gclid") || Invoca.Tools.readInvocaData("gclid")) {
		return null;
	} else {
		return Invoca.Tools.readUrl("gcm_uid") ||
			Invoca.Tools.readCookie("gcm_uid") ||
			Invoca.Tools.readInvocaData("gcm_uid");
	}
}

options.poolParams.gcm_uid = useGCM();

Invoca.Client.setLastPage = function () {
  var prevPage = JSON.parse(sessionStorage.getItem("prevPageNameData")) !== null ? JSON.parse(sessionStorage.getItem("prevPageNameData")): "";
  var prevURL = prevPage.prevPageFullUrl !== null ? prevPage.prevPageFullUrl:"";
  return prevURL;
};


Invoca.Client.getOptOut = function () {
    var isOptOut = '0';
    var cookie = JSON.parse(Invoca.Tools.readCookie('attpc-opt'));
    if (!cookie) {
        return isOptOut;
    }
    if (cookie.consent === 'd' || cookie.gpc === 'y') {
        isOptOut = '1';
    }
    return isOptOut;
}

return options;
  };

  return true;
})();

var generatedOptions = {
  active:              true,
  autoSwap:            true,
  cookieDays:          cacheLifetimeDays,
  country:             "US",
  dataSilo:            "us",
  defaultCampaignId:   defaultCampaignId,
  destinationSettings: destinationSettings,
  disableUrlParams:    ['buy_flow_dest_num','invoca_destination_number','ipbb','mcid','profile_name','s'],
  doNotSwap:           ["866-294-3464", "800-651-5111", "866-772-3140", "800-531-5000", "888-388-4249", "800-390-2782", "800-651-1111", "800-772-3140", "800-691-4388", "800-901-9878", "866-241-6567", "866-241-6568", "866-435-3264", "877-782-8870", "888-562-8662", "888-490-6096", "888-471-4576", "888-258-7115", "888-267-1317", "877-844-5584", "866-975-0050", "855-288-2727", "866-385-3193", "877-996-7017", "866-642-4170", "833-511-0311", "800-331-0500", "800-288-2020", "888-530-0385", "877-384-2575", "855-383-6123", "866-623-0828", "800-797-3370", "888-206-6061", "888-567-8688", "800-574-7000", "844-221-7261", "833-959-2740", "855-625-8891", "888-596-7846", "855-398-7197", "844-924-4195", "855-548-0811", "866-939-5516", "855-278-4231", "833-731-1745", "855-862-2136"],
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

})(1593);
