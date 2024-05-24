var stlib = stlib || {
  functions: [],
  functionCount: 0,
  util: {
    prop:   },
  dynamicOn: true,
  setPublisher : function(pubKey){
    stlib.publisher = pubKey;
  },
  setProduct : 
  parseQuery: 
  getQueryParams : };

stlib.global = {
  hash: stlib.util.prop('hash', document.location).substr(1)
};

// Extract out parameters
stlib.getQueryParams();
/********************START BROWSER CODE***********************/
stlib.browser = {
	iemode: null,
	firefox: null,
	firefoxVersion: null,
	safari: null,
	chrome: null,
	opera: null,
	windows: null,
	mac: null,
	ieFallback: (/MSIE [6789]/).test(navigator.userAgent),
	//ieFallback: true,
	
	init: 

	getIEVersion : function() {
		return stlib.browser.iemode;
	},
	isFirefox : function() {
		return stlib.browser.firefox;
	},
	firefox8Version : function() {
		return stlib.browser.firefoxVersion;
	},
	isSafari : function() {
		return stlib.browser.safari;
	},
	isWindows : function() {
		return stlib.browser.windows;
	},
	isChrome : function() {
		return stlib.browser.chrome;
	},
	isOpera : function() {
		return stlib.browser.opera;
	},
	isMac : 
       isSafariBrowser: };

stlib.browser.init();
/********************END BROWSER CODE***********************/
/********************START SCRIPTLOADER***********************/
/* 
 * This handles on demand loading of javascript and CSS files
 */
stlib.scriptLoader = {
	loadJavascript : 
	loadCSS : };
/********************END SCRIPTLOADER***********************/
/********************START MOBILE BROWSER CODE***********************/

stlib.browser.mobile = {
	mobile:false,
	uagent: null,
	android: null,
	iOs: null,
	silk: null,
	windows: null,
	kindle: null,
	url: null,
	sharCreated: false,
	sharUrl: null,
	isExcerptImplementation: false, //Flag to check if multiple sharethis buttons (Excerpt) have been implemented
	iOsVer: 0, // It will hold iOS version if device is iOS else 0
	
	init: 
	
	isMobile: 
	
	isAndroid: function() {
		if (this.android === null) {
			this.android = this.uagent.indexOf("android") > -1;
		}
		return this.android;
	},

	isKindle: function() {
		if (this.kindle === null) {
			this.kindle = this.uagent.indexOf("kindle") > -1;
		}
		return this.kindle;
	},
	
	isIOs: 

	isSilk: function() {
		if (this.silk === null) {
			this.silk = this.uagent.indexOf("silk") > -1;
		}
		return this.silk;
	},

	/**
	 * This is to get iOS version if iOS device, else return 0
	 */
	getIOSVersion: 
	
	isWindowsPhone: 	
};

stlib.browser.mobile.init();

/********************END MOBILE BROWSER CODE***********************/

/********************START COOKIE LIBRARY***********************/
/*
 * This handles cookies
 */
var tpcCookiesEnableCheckingDone = false;
var tpcCookiesEnabledStatus = true;

stlib.cookie = {
	setCookie : 
	setTempCookie : 
	getCookie : 
	deleteCookie : 
	deleteAllSTCookie : 
	setFpcCookie : 
	getFpcCookie : 
	getDomain : 
	checkCookiesEnabled: 
	hasLocalStorage: };
/********************END COOKIE LIBRARY***********************/
/*
 * Requires cookie.js
 */
stlib.fpc = {
	cookieName: "__unam",
	cookieValue: "",
	createFpc: 

	determineHash: };
/*
 * This holds critical data, requires the cookie object
 */
if (typeof(stlib.data) == "undefined") {
	stlib.data = {
		bInit: false,
		publisherKeySet: false,
		pageInfo: {
		},
		shareInfo: {
		},
		resetPageData: 
		resetShareData: 
		resetData: 

		init: function() {
			if (!stlib.data.bInit) {
				stlib.data.bInit = true;
				stlib.data.resetData();
				stlib.data.set("fcmp", typeof(window.__cmp) == 'function', "pageInfo");
                              stlib.data.set("fcmpv2", typeof(window.__tcfapi) == 'function', "pageInfo");

				if (stlib.publisher){
					stlib.data.setPublisher(stlib.publisher);
				}
				stlib.data.set("product",stlib.product,"pageInfo");
				var rawUrl = document.location.href;
				var sessionID_time = '', sessionID_rand = '';
				stlib.data.set("url", rawUrl,"shareInfo");

				// no longer using fpc
				// stlib.fpc.createFpc();
				// stlib.data.set("fpc",stlib.fpc.cookieValue,"pageInfo"); // Requires that the cookie has been created

				stlib.data.set("title", document.title, "shareInfo");

				sessionID_time = (new Date()).getTime().toString();
				sessionID_rand = Number(Math.random().toPrecision(5).toString().substr(2)).toString();
				stlib.data.set("sessionID",sessionID_time + '.' + sessionID_rand,"pageInfo");
				stlib.data.validateRefDomain();
				//stlib.data.set("sourceURL", document.location.href,"pageInfo");
				stlib.data.set("hostname", document.location.hostname,"pageInfo");
				stlib.data.set("location", document.location.pathname,"pageInfo");
			}
		},

		validateRefDomain: function() {
			var refDomain = stlib.data.get("refDomain", "pageInfo");
			if (!refDomain) {
				this.setRefDomain(stlib.util.prop('referrer', window.document));
			}
		},

		setRefDomain: function (refDomain) {
			if (refDomain.length == 0) {
				return;
			}
			var referArray = refDomain.replace("http://", "").replace("https://", "").split("/");
			if(referArray.length > 0) {
				refDomain = (typeof(referArray[0]) != "undefined") ? referArray[0] : refDomain;
				refQuery = (typeof(referArray[1]) != "undefined") ? referArray[1] : "";
				stlib.data.set("refQuery", refQuery,"pageInfo");
				stlib.data.set("refDomain", refDomain ,"pageInfo");
			}
;
		},
		setPublisher: 
		setSource: 
		set: 
		get: 
		unset: 
                bindEvent: 
                debug: 
                hostname: 
                parseCookie: 
                writeCookie: 
                setConsent: 
                getEUConsent: 	};

	stlib.data.resetData();
}
stlib.comscore = {
  load: }
/********************START LOGGING***********************/
/*
 * This handles logging
 */
stlib.logger = {
  loggerUrl: "https://l.sharethis.com/",
  l2LoggerUrl: "https://l2.sharethis.com/",
  productArray: new Array(),
  version: '',
  lang: 'en',
  isFpEvent: false,

  constructParamString: 
  ibl: 
  obl: 
  getGDPRQueryString: 

  loadPixelsAsync: 

  send: 

  js: 

  logByImage: 

  // TODO: (step 1) error checking on data
  // TODO: (step 2) convert params into a generic object, normalize or prepare before logging
  log : 
  tcfapi_listener: )
};

/********************END LOGGING***********************/
stlib.logger.version = 'st_insights.js'
// set product and property for new buttons
if (window.__sharethis__) {
  stlib.setProduct(window.__sharethis__.product);
  stlib.setPublisher(window.__sharethis__.property);
}
var sop_pview_logged = typeof __stdos__ !== 'undefined' && __stdos__ !== null && __stdos__.onscriptload;
if (!sop_pview_logged && !stlib.onscriptload && document.URL.indexOf("edge.sharethis.com") == -1) {
  stlib.data.init();
  stlib.onscriptload = true;
  stlib.logger.log("pview", null);
}
stlib.logger.ibl();
stlib.data.bindEvent(document, "click", stlib.logger.obl);


if(typeof(stLight)=="undefined" && typeof(SHARETHIS)=="undefined"){ //make sure it isnt called over and over again
  var stWidgetVersion = false;

  if(typeof(switchTo5x)=="undefined") {
    stWidgetVersion = "4x"; // For Migration Phase 2 - by deafult widget will be 5xa
  }else{
    if(switchTo5x == false){
      stWidgetVersion = "4x";
    }
    if(switchTo5x == true){
      stWidgetVersion = "5xa";
    }
  }

	stLight=new 

	stLight.loadDefault = 

	stLight.options=

	stLight.onReady=




        //Used only to generate widget and pview events logs.
	stLight.log=


	if(window.document.readyState=="completed"){
		stLight.onReady();
	}else{
		if (typeof(window.addEventListener) != 'undefined') {
			window.addEventListener("load", stLight.onReady, false);
		} else if (typeof(document.addEventListener) != 'undefined') {
			document.addEventListener("load", stLight.onReady, false);
		} else if (typeof window.attachEvent != 'undefined') {
			window.attachEvent("onload", stLight.onReady);
		}
	}


	stLight.setPublisher = 

	stLight.setRefDomain = 

	stLight.setProduct = 

	stLight.getProduct = 

  stLight.getSource=

}

stLight.getUrlSearchParam = 
stLight.getUrlQueryParams = 
stLight.getScriptSrcParams = 
stLight.setParams = 
stLight.loadFromScript = 
stLight.loadFromWindowLocation = 
//END OF light.js

stLight.onDomContentLoaded=


stLight.domReady=


st_showing=false;

stLight.clickSubscribers=[];
stLight.nonClickSubscribers=[];


if(window.document.readyState=="completed"){
	stLight.domReady();//domReady
}else{
	if (typeof(window.addEventListener) != 'undefined') {
		window.addEventListener("load", stLight.domReady, false);
	} else if (typeof(document.addEventListener) != 'undefined') {
		document.addEventListener("load", stLight.domReady, false);
	} else if (typeof window.attachEvent != 'undefined') {
		window.attachEvent("onload", stLight.domReady);
	}
}



//DOMContentLoaded
if(typeof(__st_loadLate)=="undefined"){
	if (typeof(window.addEventListener) != 'undefined') {
		window.addEventListener("DOMContentLoaded", stLight.onDomContentLoaded, false);
	} else if (typeof(document.addEventListener) != 'undefined') {
		document.addEventListener("DOMContentLoaded", stLight.onDomContentLoaded, false);
	}
} else {
	if (typeof(window.addEventListener) != 'undefined') {
		window.addEventListener("DOMContentLoaded", stLight.onDomContentLoadedLazy, false);
	} else if (typeof(document.addEventListener) != 'undefined') {
		document.addEventListener("DOMContentLoaded", stLight.onDomContentLoadedLazy, false);
	}
}


if(document.readyState == "complete" && stLight.readyRun==false){ //Keep at the end of the file
	//This is called after body is loaded so the domeready call would never get called, so call it here
	stLight.domReady();
}

  


