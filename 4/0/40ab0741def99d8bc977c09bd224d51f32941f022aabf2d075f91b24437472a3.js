// CUSTOM PARTNER TEALIUM EXTENSION EMBEDDED

// >>> EXTENSION DEVICE
/*! deviceAdvFreq.js 0.1.58 */
(function(){var a,b,c,d,e,f,g,h,i,j;a=window.deviceAdvFreq,window.deviceAdvFreq={},c=window.document.documentElement,j=window.navigator.userAgent.toLowerCase(),deviceAdvFreq.ios=deviceAdvFreq.iphone=function(){return d("iphone")},deviceAdvFreq.ipod=function(){return d("ipod")},deviceAdvFreq.ipad=function(){return d("ipad")},deviceAdvFreq.android=function(){return d("android")},deviceAdvFreq.androidPhone=function(){return deviceAdvFreq.android()&&d("mobile")},deviceAdvFreq.androidTablet=function(){return deviceAdvFreq.android()&&!d("mobile")},deviceAdvFreq.blackberry=deviceAdvFreq.blackberryPhone=deviceAdvFreq.blackberryTablet=function(){return deviceAdvFreq.blackberry()&&d("tablet")},deviceAdvFreq.windows=function(){return d("windows")},deviceAdvFreq.windowsPhone=function(){return deviceAdvFreq.windows()&&d("phone")},deviceAdvFreq.windowsTablet=function(){return deviceAdvFreq.windows()&&d("touch")},deviceAdvFreq.fxos=deviceAdvFreq.fxosPhone=function(){return deviceAdvFreq.fxos()&&d("mobile")},deviceAdvFreq.fxosTablet=deviceAdvFreq.meego=deviceAdvFreq.mobile=deviceAdvFreq.tablet=deviceAdvFreq.portrait=deviceAdvFreq.landscape=deviceAdvFreq.noConflict=d=f=b=h=deviceAdvFreq.ios()?deviceAdvFreq.ipad()?b("ios ipad tablet"):deviceAdvFreq.iphone()?b("ios iphone mobile"):deviceAdvFreq.ipod()&&b("ios ipod mobile"):deviceAdvFreq.android()?deviceAdvFreq.androidTablet()?b("android tablet"):b("android mobile"):deviceAdvFreq.blackberry()?deviceAdvFreq.blackberryTablet()?b("blackberry tablet"):b("blackberry mobile"):deviceAdvFreq.windows()?deviceAdvFreq.windowsTablet()?b("windows tablet"):deviceAdvFreq.windowsPhone()?b("windows mobile"):b("desktop"):deviceAdvFreq.fxos()?deviceAdvFreq.fxosTablet()?b("fxos tablet"):b("fxos mobile"):deviceAdvFreq.meego()?b("meego mobile"):b("desktop"),e=i="onorientationchange"in window,g=i?"orientationchange":"resize",window.addEventListener?window.addEventListener(g,e,!1):window.attachEvent?window.attachEvent(g,e):window[g]=e,e()}).call(this);
/*}*/

// >>>> EXTENSION - FORCE SWITCHADV READING URL ?switchtodfp //
function getParameterByNameKwUrlSwitchAdv(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var keywordSwitchAdvValue = getParameterByNameKwUrlSwitchAdv('switchtodfp');
if (keywordSwitchAdvValue != null && keywordSwitchAdvValue == "true") {
	var switchAdv2017 = true;
} else if (keywordSwitchAdvValue != null && keywordSwitchAdvValue == "false") {
	var switchAdv2017 = false;
}

// DFPGETCOOKIE FUNCTION
function dfpGetCookie(name) {
	var pair = document.cookie.match(new RegExp(name + '=([^;]+)'));
	return !!pair ? pair[1] : null;
}

// GPT Debug Cookie
function dfpPrintLog(log, obj) {

	if (document.cookie.includes('logdfp=1')) {

		const style = 'color: #4285F4; background-color: #F9F9F9; border: 2px solid #4285F4; padding: 2px 5px; border-radius: 2px; font-weight: bold;';

		if ( typeof obj !== 'undefined' ) {
			console.log(`%cGPT TAG%c ${log}:`, style, 'color: #000; font-weight: bold;', obj);
		} else {
			console.log('%cGPT TAG', style, log);
		}

	}

}

// GPT Version Log
dfpPrintLog('PARTNER 197 - RCSAdobe la7 e tgla7');

// START DFPCHECKSITE FUNCTION
function dfpCheckSite(site) {
	return (window.RCSAD_sitepage.toLowerCase().indexOf(site.toLowerCase()) > -1);
}

// FINE CUSTOM TEALIUM EMBEDDED

// start CONFIANT

(function () {
	var w = window;
	var h = 'cdn.confiant-integrations.net';
	var e = document.createElement('script');
	e.async = true;
	e.src = '//' + h + '/Uz53wP4bWeNPPncp-CjbKPnK1Uo/gpt_and_prebid/config.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(e, s);
})();

// end CONFIANT

// siteNameadv
var siteNameadv = RCSAD_sitepage.substring(0, RCSAD_sitepage.indexOf('/'));

// DISABLED INIT PARTNER
var partnerExcludedInit = ["lasiciliaweb.it", "gds.it", "gazzettadelsud.it"];
var partnerDisabledInit = partnerExcludedInit.indexOf(siteNameadv)>-1 ? true : false;

var rcsAdPartner = {
	init : function () {

if (partnerDisabledInit) {
	return
}

// CONFIGURATORE DFP

var dfpTagConf = {
	"disabledGptOriginalRefresh": ["ilbianconero"],
	"skinontopleft": ["lasicilia"],
	"TLSizeRefrOrient": ["unionesarda", "dmove", "open", "leitv", "quinews"],
	"stickyON": ["unionesarda",   "dmove", "leitv", "quinews", "calciomercato", "lasicilia", "ilbianconero"],
	"prebid": ["leitv", "la7", "tglasette", "unionesarda", "sedanoallegro", "lasicilia",  "dday", "dmove", "open", "ilbianconero", "sosfanta", "calciomercato"],
	"sra": ["leitv", "la7", "tglasette", "unionesarda", "sedanoallegro", "lasicilia",  "dday", "dmove", "open", "ilbianconero", "sosfanta", "calciomercato"],
	// "ias": ["leitv", "la7", "tglasette", "unionesarda", "sedanoallegro", "lasicilia",  "dday", "dmove", "open", "ilbianconero", "sosfanta", "calciomercato"],
	"ias": [],
	"bucksense": ["leitv", "la7", "tglasette", "unionesarda", "sedanoallegro", "lasicilia",  "dday", "dmove", "open", "ilbianconero", "sosfanta", "calciomercato"],
	"appnexus": ["leitv", "la7", "tglasette", "unionesarda", "sedanoallegro", "lasicilia",  "dday", "dmove", "open", "ilbianconero", "sosfanta", "calciomercato"],
	"criteo": ["leitv", "la7", "tglasette", "unionesarda", "sedanoallegro", "lasicilia",  "dday", "dmove", "open", "ilbianconero", "sosfanta", "calciomercato"],
	"pubmatic": ["leitv", "la7", "tglasette", "unionesarda", "sedanoallegro", "lasicilia",  "dday", "dmove", "open", "ilbianconero", "sosfanta", "calciomercato"],
	"amazon": ["leitv", "la7", "tglasette", "unionesarda", "sedanoallegro", "lasicilia",  "dday", "dmove", "open", "ilbianconero", "sosfanta", "calciomercato"],
	"improve": ["leitv", "la7", "unionesarda", "sedanoallegro",  "lasicilia", "dday", "open", "ilbianconero", "sosfanta", "calciomercato"],
	"indexexchange": ["leitv", "la7", "unionesarda", "sedanoallegro",  "lasicilia",  "dday", "open", "ilbianconero", "sosfanta", "calciomercato"],
	"adomik": [],
	"latency": ["leitv", "la7", "tglasette", "unionesarda", "sedanoallegro", "lasicilia", "dday", "dmove", "open"],
	"fluidSize": [],
	"lazyLoadDfp": ["ilbianconero", "calciomercato"],
	"lazyLoadDfpParams": [],
	"omnitourCookie": ["ilbianconero", "calciomercato", "la7", "tglasette"],
	"staticConsent": ["leitv", "la7", "tglasette", "unionesarda", "sedanoallegro",   "dday", "dmove", "lasicilia", "open", "ilbianconero", "sosfanta", "calciomercato"],
	"hideTlonTabPortrait": ["unionesarda"],
	"ppid": ["la7"],
	"freqcapintro": ["leitv", "la7", "tglasette", "unionesarda", "sedanoallegro", "lasicilia",  "dday", "dmove", "open"],
	"googleinreadsize": ["unionesarda",   "lasicilia", "open", "la7", "leitv", "dday", "dmove"],
	"leaderboardbMastheahOnP1": ["ilbianconero", "calciomercato"],
	"resetSkinInsurads": ["calciomercato", "ilbianconero"],
	"resizeGoogleInread": ["lasicilia"],
	"mobileIntropageDisplay" : ["calciomercato", "ilbianconero", "sosfanta", "unionesarda", "lasicilia", "dday", "dmove", "open", "leitv", "sedanoallegro"],
	"topper": ["calciomercato"]
};

// eccezioni lazyload
if (window.RCSAD_sitepage.indexOf("open.online") > -1 && (deviceAdvFreq.mobile() || (window.RCSAD_sitepage !== "open.online/homepage" && !deviceAdvFreq.mobile()))) {
	dfpTagConf.lazyLoadDfp.push("open");
}

// la7.it
// push di la7.it solo per desktop tranne HP oppure tutte le pagine mobile
// push dei parametri custom per lazyload
if ((!deviceAdvFreq.mobile() && window.RCSAD_sitepage.includes('La7.it') && window.RCSAD_sitepage !== 'La7.it/homepage') || deviceAdvFreq.mobile()) {
	dfpTagConf.lazyLoadDfp.push('la7');
	var configToAdd = {
		"config": "la7",
		"fetchMarginPercentDfp": 200,
		"renderMarginPercentDfp": 20,
		"mobileScalingDfp": 1.0
	}
	dfpTagConf.lazyLoadDfpParams.push(configToAdd);
}


// eccezioni TLSizeRefrOrient
if (location.hostname.toLowerCase().indexOf('preprod.calciomercato') > -1) {
	dfpTagConf.TLSizeRefrOrient.push('calciomercato');
}

window.checkConfig = function (config) { // passare come argomento "prebid", "sra", "ias", "TLSizeRefrOrient", "stickyON", "latency"
	var res = false;
	try {
		dfpTagConf[config].forEach(function (item) {
			RCSAD_sitepageCheckConf = window.RCSAD_sitepage.toLowerCase().indexOf("tgla7") > - 1 ? "tglasette" : window.RCSAD_sitepage;
			return window.RCSAD_sitepageCheckConf.toLowerCase().indexOf(item) > -1 ? res = true : null;
		});
	} catch (error) {
		if (dfpGetCookie('logdfp')) {
			console.error('DFP LOG: Il parametro "' + config + '" non è valido per la funzione checkConfig - ', error);
		}
	}
	return res;
}


function getLazyLoadParams() {
	// return undefined se non esiste nessuna config con parametri custom, altrimenti ritorno la prima config che trovo in ordine di inserimento
	// ad oggi non esistono config simultanee, solo una config per sito/pagina
	var configToCheck = window.RCSAD_sitepage.toLowerCase().indexOf("tgla7") > - 1 ? "tglasette" : window.RCSAD_sitepage;
	configToCheck = configToCheck.toLowerCase();
	var params = dfpTagConf['lazyLoadDfpParams'].filter);
	return params[0];
}


// FINE CONFIGURATORE DFP

// CHECK SITEPAGE

function checkSP (sitepage) {
	return RCSAD_sitepage.toLowerCase().indexOf(sitepage.toLowerCase()) >-1
}

/*adomik analytics start*/
if (checkConfig('prebid') && checkConfig('adomik')) {
	function loadScriptPbjsAdomik(src, callback) {
		var script = document.createElement('script');
		script.src = src;
		script.onload = function () {
			return callback(script);
		};
		document.head.append(script);
	}
	loadScriptPbjsAdomik("https://cdn.kdaimo.com/rcs-189742/min.js",);

	(function() {
		dfpPrintLog('adomik test execute function Math.random() * 10');
		// sample the volume to 10%
		var ramdom = Math.floor(Math.random() * 10);
		var execute = function() {
			pbjs.que.push);
		};

		if (ramdom === 0) {
		 execute()
		}
	   })()
}
/*adomik analytics end*/


// INSURADS

if (checkSP('La7.it') || checkSP('tgla7.it')) {
	var insuradsCode = "TFO9OQP3"
} else if (checkSP('dday.it')) {
	var insuradsCode = "DJJAXJTI"
} else if (checkSP('dmove.it')) {
	var insuradsCode = "YGQJAHGT"
} else if (checkSP('gazzettadelsud.it')) {
	var insuradsCode = "6AGJN4NJ"
} else if (checkSP('gds.it')) {
	var insuradsCode = "UPWRXK23"
} else if (checkSP('lasicilia.it')) {
	var insuradsCode = "Q9KVFT4Q"
} else if (checkSP('lasiciliaweb.it')) {
	var insuradsCode = "6BWRBQ33"
} else if (checkSP('unionesarda.it')) {
	var insuradsCode = "NI9N5E6A"
} else if (checkSP('open.online')) {
	var insuradsCode = "UJHRJKQC"
} else if (checkSP('leitv.it')) {
	var insuradsCode = "MUTU39OG"
} else if (checkSP('sedanoallegro.it')) {
	var insuradsCode = "OTBWVDSP"
} else if (checkSP('sosfanta.calciomercato.com')) {
	var insuradsCode = "NLESKXL4"
} else if (checkSP('calciomercato.com')) {
	var insuradsCode = "YAUBNTCE"
} else if (checkSP('ilbianconero.com')) {
	var insuradsCode = "ZZZP7F8E"
}

if (typeof insuradsCode !== "undefined") {
	(function () {
		var iah = 'cdn.insurads.com';
		var iasrc = document.createElement('script');
		iasrc.async = true;
		iasrc.src = '//' + iah + '/bootstrap/' + insuradsCode + '.js';
		var iaspt = document.getElementsByTagName('script')[0];
		iaspt.parentNode.insertBefore(iasrc, iaspt);
	})()
}

// RESIZE GOOGLE INREAD

if (checkConfig('resizeGoogleInread')) {

	window.googletag = window.googletag || {
		cmd: []
	};

	googletag.cmd.push(function () {
		googletag.pubads().addEventListener('slotRenderEnded', function (event) {
			if (event.slot.getSlotElementId() === 'rcsad_Bottom1') {
				var size = event.size;
				var isInreadGoogle = false;

				if (size[0] && size[1]) {
					isInreadGoogle = (size[0] === 640 && size[1] === 365) ? true : false;
				}

				if (isInreadGoogle) {
					setTimeout(function () {
						(function () {
							var isMobile = deviceAdvFreq.mobile() ? true : false,
								b1 = top.document.getElementById('rcsad_Bottom1'),
								b1_ifrm = top.document.querySelector('div#rcsad_Bottom1 iframe'),
								b1_ifrm_window = b1_ifrm.contentWindow,
								b1_ifrm_body = b1_ifrm.contentDocument.body;

							if (top.RCSAD_sitepage.indexOf('lasicilia.it') > -1) {
								article_paragraph = top.document.querySelector('.article-content .content-wrapper');
							} else {
								article_paragraph = top.document.getElementsByTagName('p')[0];
							}

							// Measures
							var window_width = isMobile ? top.document.querySelector('body').clientWidth : top.innerWidth,
								creative_original_width = b1_ifrm_window.innerWidth,
								creative_original_height = b1_ifrm_window.innerHeight,
								article_paragraph_width = article_paragraph.clientWidth,
								adjusted_creative_height;

							// Creative Containers
							var outerWrapper = b1_ifrm_body.querySelector('div.outer-wrapper'),
								videoContainer = b1_ifrm_body.querySelector('div.video-container');

							// Player Elements
							var videoPlayerRoot = b1_ifrm_body.querySelector('lima-video').shadowRoot;
							var videoPlayer = videoPlayerRoot.querySelector('video');
							videoPlayer.muted = true;

							// Fix Container Sizes Desktop-Mobile
							if (!isMobile) {
								adjusted_creative_height = article_paragraph_width * (creative_original_height / creative_original_width);
								b1.style.width = article_paragraph_width + 'px';
								b1.style.height = adjusted_creative_height + 'px';
								b1_ifrm.width = article_paragraph_width;
								b1_ifrm.height = adjusted_creative_height;
								outerWrapper.style.width = article_paragraph_width + 'px';
								videoContainer.style.width = article_paragraph_width + 'px';
								outerWrapper.style.height = adjusted_creative_height + 'px';
								videoContainer.style.height = adjusted_creative_height + 'px';
							} else {
								adjusted_creative_height = window_width * (creative_original_height / creative_original_width);
								b1_ifrm.width = window_width;
								b1_ifrm.height = adjusted_creative_height;
								outerWrapper.style.width = window_width + 'px';
								videoContainer.style.width = window_width + 'px';
								outerWrapper.style.height = adjusted_creative_height + 'px';
								videoContainer.style.height = adjusted_creative_height + 'px';
							}

							// Add Closing Button
							var closeButton = document.createElement('div');
							closeButton.id = 'rcs-close-button';
							closeButton.style.cssText = 'position:absolute;right:0;width:26px;height:26px;background-size:contain;background-repeat:no-repeat;color:#fff;z-index:30;font-size:35px;cursor:pointer;background-image:url(https://components2.rcsobjects.it/rcs_adv/v1/distro/dfp/advtemplate/introDfp/xchiudi.svg);display:block;border-radius:4px;filter:drop-shadow(0 2px 4px rgba(0,0,0,.12));z-index:2147483647;';
							b1_ifrm_body.prepend(closeButton);

							b1_ifrm_body.querySelector('#rcs-close-button').onclick = function () {
								b1.style.display = 'none';
							};

							// Play the video
							setTimeout, 500);

						})();
					}, 2000);
				}
			}
		});
	});
}

// PREBID TIMEOUT

var PREBID_TIMEOUT = 2000;
var PREBID_TIMEOUT_BATCH = 2000;

/* AMAZON PREBID START */

if (checkConfig('prebid') === true && checkConfig('amazon') === true) {

  gptadslotsSRAamz = [];

  /* ----- Begin Step 1 ----- */
  //Load the APS JavaScript Library
  !("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");

  //Initialize the Library
  apstag.init({
	  pubID: '3692',
	  adServer: 'googletag'
  });
  /* ----- End Step 1 ----- */

  window.executeParallelAuctionAlongsidePrebid = function () {

	setTimeout(function () {

		var FAILSAFE_TIMEOUT = PREBID_TIMEOUT;
		var requestManager = {
			adserverRequestSent: false,
			aps: false,
			prebid: false
		};

		// when both APS and Prebid have returned, initiate ad request
		window.biddersBack = function () {
			if (requestManager.aps && requestManager.prebid) {
				sendAdserverRequest();
			}
			return;
		}

		var consentAvailable = dfpGetCookie(euconsentString) !== null && dfpGetCookie(euconsentString) !== "";

		// sends adserver request
		window.sendAdserverRequest = function () {
			if (requestManager.adserverRequestSent === true || !consentAvailable) {
				return;
			}
			requestManager.adserverRequestSent = true;
			googletag.cmd.push(function () {
				window.pbjs.que.push(function () {
					window.pbjs.setTargetingForGPTAsync();
					googletag.pubads().refresh(gptadslotsSRA);
					dfpPrintLog("PREBID sendAdserverRequest AMAZON FUNCTION CALL REFRESH");
				});
			});
		}

		// sends bid request to APS and Prebid
		window.requestHeaderBids = function () {

			// APS request
			apstag.fetchBids({
				slots: gptadslotsSRAamz
			}, function (bids) {
				googletag.cmd.push(function () {
					apstag.setDisplayBids();
					requestManager.aps = true; // signals that APS request has completed
					biddersBack(); // checks whether both APS and Prebid have returned
				});
			});

			// put prebid request here
			pbjs.que.push(function () {
				pbjs.requestBids({
					bidsBackHandler: function () {
						googletag.cmd.push(function () {
							pbjs.setTargetingForGPTAsync();
							requestManager.prebid = true; // signals that Prebid request has completed
							biddersBack(); // checks whether both APS and Prebid have returned
						})
					}
				});
			});
		}

		// initiate bid request
		requestHeaderBids();

		// set failsafe timeout
		window.setTimeout(function () {
			sendAdserverRequest();
		}, FAILSAFE_TIMEOUT);

	}, 500);

  };
}
/* AMAZON PREBID END */

// RESET/DISPLAY SKIN SOLO IN PAGINA
window.skinResetSoloInPagina = function () {
	// this.document.body.classList.add('soloinpaginareset');
	if (document.getElementById("barra_click_sx")) {
		document.getElementById("barra_click_sx").style.display ="none";
	}
	if (document.getElementById("barra_click_dx")) {
		document.getElementById("barra_click_dx").style.display ="none";
	}
	if (document.getElementById("barra_click_top")) {
		document.getElementById("barra_click_top").style.display ="none";
	}
};

window.skinDisplaySoloInPagina = function () {
	// this.document.body.classList.remove('soloinpaginareset');
	if (document.getElementById("barra_click_sx")) {
		document.getElementById("barra_click_sx").style.display ="block";
	}
	if (document.getElementById("barra_click_dx")) {
		document.getElementById("barra_click_dx").style.display ="block";
	}
	if (document.getElementById("barra_click_top")) {
		document.getElementById("barra_click_top").style.display ="block";
	}
};

// FINE RESET/DISPLAY SKIN SOLO IN PAGINA

window.addEventListener('message', function(e) {
	if (e.data == "startsoloinpagina") {
		dfpPrintLog('### FUNZIONALITA REFRESH ### Nascondo posizioni adv');
		var soloinpaginacss = document.createElement('link');
		soloinpaginacss.href = 'https://components2.rcsobjects.it/rcs_adv/v1/distro/dfp/common/css/soloinpagina.css';
		soloinpaginacss.rel = 'stylesheet';
		soloinpaginacss.id = 'soloinpagina_style';
		soloinpaginacss.type = 'text/css';
		document.body.appendChild(soloinpaginacss);
		document.querySelector('body').classList.add("soloinpagina-body");
		if(RCSAD_sitepage.indexOf('La7.it') > -1){
			document.addEventListener('eventloadedTopDFP', function() {
				skinResetSoloInPagina();
			});
		}
		
		skinResetSoloInPagina();
		
		if (document.getElementById('topleft-container'))
			document.querySelector('#topleft-container').classList.add("soloinpagina");
		if (document.getElementById('rcsad_TopLeft'))
			document.querySelector('#rcsad_TopLeft').classList.add("soloinpagina");
		if (document.getElementById('rcsad_Top'))
			document.querySelector('#rcsad_Top').classList.add("soloinpagina");
		if (document.getElementById('frame1-container'))
			document.querySelector('#frame1-container').classList.add("soloinpagina");
		if (document.getElementById('rcsad_Frame1'))
			document.querySelector('#rcsad_Frame1').classList.add("soloinpagina");
		if (document.getElementById('rcsad_Frame2'))
			document.querySelector('#rcsad_Frame2').classList.add("soloinpagina");
		if (document.getElementById('rcsad_Bottom1'))
			document.querySelector('#rcsad_Bottom1').classList.add("soloinpagina");
		if (document.getElementById('rcsad_Bottom2'))
			document.querySelector('#rcsad_Bottom2').classList.add("soloinpagina");
	} else if (e.data == "stopsoloinpagina") {
		setTimeout(function() {
			dfpPrintLog('### FUNZIONALITA REFRESH ### Mostro posizioni adv');
			var advTocollapse = document.querySelector('#soloinpagina_style');
			if (advTocollapse) {
				advTocollapse.remove();
			}
			document.querySelector('body').classList.remove("soloinpagina-body");
			skinDisplaySoloInPagina();
			if (document.getElementById('topleft-container'))
				document.querySelector('#topleft-container').classList.remove("soloinpagina");
			if (document.getElementById('rcsad_TopLeft'))
				document.querySelector('#rcsad_TopLeft').classList.remove("soloinpagina");
			if (document.getElementById('rcsad_Top'))
				document.querySelector('#rcsad_Top').classList.remove("soloinpagina");
			if (document.getElementById('frame1-container'))
				document.querySelector('#frame1-container').classList.remove("soloinpagina");
			if (document.getElementById('rcsad_Frame1'))
				document.querySelector('#rcsad_Frame1').classList.remove("soloinpagina");
			if (document.getElementById('rcsad_Frame2'))
				document.querySelector('#rcsad_Frame2').classList.remove("soloinpagina");
			if (document.getElementById('rcsad_Bottom1'))
				document.querySelector('#rcsad_Bottom1').classList.remove("soloinpagina");
			if (document.getElementById('rcsad_Bottom2'))
				document.querySelector('#rcsad_Bottom2').classList.remove("soloinpagina");
		}, 600);
	}
}, false);

// INCOLLO STICKY SCRIPT stickyON

if ( checkConfig('stickyON') ) {

	dfpPrintLog('ATTIVO stickyON');

	var stickyScriptId = 'stickyScript';

	if ( ! document.getElementById(stickyScriptId) ) {

		dfpPrintLog('[STICKY] include stickyScript');

		var stickyScript = document.createElement('script'); // stickyScript
		stickyScript.id = stickyScriptId;
		stickyScript.type = 'text/javascript';

		if ( dfpCheckSite('unionesarda') ) {
			stickyScript.src = 'https://components2.rcsobjects.it/rcs_adv/v1/distro/dfp/customScript/restyling-sticky-partner-unionesarda.js'; // UNIONESARDA
		} else if ( dfpCheckSite('gazzettadelsud') ) {
			stickyScript.src = 'https://components2.rcsobjects.it/rcs_adv/v1/distro/dfp/customScript/stickyTools_gazzettadelsud.js'; //GAZZETTADELSUD
		} else if ( dfpCheckSite('gds') ) {
			stickyScript.src = 'https://components2.rcsobjects.it/rcs_adv/v1/distro/dfp/customScript/stickyTools_gds.js'; //GIORNALE DI SICILIA
		} else if ( dfpCheckSite('dmove') ) {
			stickyScript.src = 'https://components2.rcsobjects.it/rcs_adv/v1/distro/dfp/customScript/stickyTools_dmove.js'; //DMOVE
		} else if ( dfpCheckSite('leitv') ) {
			stickyScript.src = 'https://components2.rcsobjects.it/rcs_adv/v1/distro/dfp/customScript/stickyTools_leitv.js'; //LEITV
		} else if ( dfpCheckSite('quinews') ) {
			stickyScript.src = 'https://components2.rcsobjects.it/rcs_adv/v1/distro/dfp/customScript/stickyTools_quinews.js'; //QUINEWS
		} else if ( dfpCheckSite('calciomercato') ) {
			stickyScript.src = 'https://components2.rcsobjects.it/rcs_adv/v1/distro/dfp/customScript/stickyTools_calciomercato.js'; //CALCIOMERCATO
		} else if ( dfpCheckSite('ilbianconero') ) {
			stickyScript.src = 'https://components2.rcsobjects.it/rcs_adv/v1/distro/dfp/customScript/stickyTools_ilbianconero.js'; //ILBIANCONERO
		} else if ( dfpCheckSite('lasicilia') ) {
			stickyScript.src = 'https://components2.rcsobjects.it/rcs_adv/v1/distro/dfp/customScript/stickyTools_lasicilia.js'; //LASICILIA
		} else {
			stickyScript.src = 'https://components2.rcsobjects.it/rcs_adv/v1/distro/dfp/customScript/restyling-sticky-partner.js'; //DEFAULT
		}

		document.head.appendChild(stickyScript);

	}

}

// FINE STICKY SCRIPT stickyON

// START HIDE TOPLEFT ON TABLET PORTRAIT

if (checkConfig('hideTlonTabPortrait')) {
	var hideTlPortraitTab = document.createElement('link');
	hideTlPortraitTab.href = 'https://components2.rcsobjects.it/rcs_adv/v1/distro/dfp/common/css/hideTlPortraitTab.css';
	hideTlPortraitTab.rel = 'stylesheet';
	hideTlPortraitTab.type = 'text/css';
	document.head.appendChild(hideTlPortraitTab)
}

// FINE HIDE TOPLEFT ON TABLET PORTRAIT

// EUCONSENT COOKIE CHECK / CMP READY
if ( dfpGetCookie('__lxG__consent__v2_daisybit') !== null ) {
	var euconsentString = '__lxG__consent__v2_daisybit';
} else {
	var euconsentString = 'euconsent-v2';
}

var consentAvailable =  dfpGetCookie(euconsentString) !== null && dfpGetCookie(euconsentString) !== "";

// CONFIGURO e SETTO IL COOKIE ALL'USCITA DALLA PAGINA

var cookieValue;
var refreshEvent = window.attachEvent || window.addEventListener;
var chkevent = window.attachEvent ? 'onbeforeunload' : 'beforeunload';
var isIOS = navigator.userAgent.indexOf('iPad') > -1 || navigator.userAgent.indexOf('iPhone') > -1;
if (isIOS) chkevent = 'pagehide';

if ((dfpGetCookie("cb-enabled") == null && window.RCSAD_sitepage.indexOf("unionesarda.it") > -1) ||
	(dfpGetCookie("cookie-agreed") == null && dfpGetCookie("euconsent") == null && (window.RCSAD_sitepage.indexOf("La7.it") > -1 || window.RCSAD_sitepage.indexOf("tgla7.it") > -1)) ||
	(dfpGetCookie("cookieconsent_dismissed") == null && window.RCSAD_sitepage.indexOf("sedanoallegro.it") > -1) ||
	(dfpGetCookie("cookie_eu_consented") == null && window.RCSAD_sitepage.indexOf("corriere.it/tecnologia/dday") > -1) ||
	(dfpGetCookie("__ric") == null && dfpGetCookie("cpmt_xa") == null && window.RCSAD_sitepage.indexOf("leitv.it/") > -1)
	) {
	cookieValue = document.location.href + "?refresh_ce_cp";
dfpPrintLog('ADVDFPREFRESH: Cookie Policy da accettare. Setto variabile cookieValue=' + cookieValue);
} else {
	cookieValue = document.location.origin + document.location.pathname;
	dfpPrintLog('ADVDFPREFRESH: setto variabile cookieValue=' + cookieValue);
}

if (window.RCSAD_sitepage == "unionesarda.it/homepage" ||
	window.RCSAD_sitepage == "lasicilia.it/homepage" ||
	window.RCSAD_sitepage == "gds.it/homepage" ||
	window.RCSAD_sitepage == "gazzettadelsud.it/homepage"
	) {
	setTimeout(function () {
		if (document.referrer.indexOf("refresh_ce") > -1) {
			cookieValue = document.location.href;
			dfpPrintLog('ADVDFPREFRESH: setto variabile cookieValue=' + cookieValue);
		} else {
			cookieValue = document.location.href + "?refresh_ce";
			dfpPrintLog('ADVDFPREFRESH: setto variabile cookieValue=' + cookieValue);
		}
	}, 240000);
}

refreshEvent(chkevent, function (e) {
	dfpPrintLog('ADVDFPREFRESH: Setto cookie all\'uscita dalla pagina');
	var date = new Date();
	date.setTime(date.getTime() + (60 * 1000));
	var expires = "; expires=" + date.toGMTString();
	document.cookie = "refreshAdvCookie=" + cookieValue + expires + "; path=/; domain=." + (location.hostname.split('.')).slice(-2).join('.');
});

if ((typeof window.LA7_customAds != "undefined" && window.LA7_customAds == 1) || (typeof window.RCSAD_type_page != "undefined" && window.RCSAD_type_page.indexOf("sponsored") > -1)) {
	window.RCSAD_disabled = true; // LA7 DISABILITAZIONE ADV SU PAGINE SPECIALI
}
if (typeof window.RCSAD_disabled == "undefined" || (typeof window.RCSAD_disabled != "undefined" && window.RCSAD_disabled != true)) {

	// CUSTOM COLLAPSE POST MESSAGE
	top.window.addEventListener('message', function (e) {
		if (e.data == "collapse_Frame1_dfp") {
			top.document.getElementById("rcsad_Frame1").style.display = "none";
			dfpPrintLog('collapse_Frame1_dfp');
		} else if (e.data == "collapse_Frame2_dfp") {
			top.document.getElementById("rcsad_Frame2").style.display = "none";
			dfpPrintLog('collapse_Frame2_dfp');
		} else if (e.data == "collapse_TopLeft_dfp") {
			top.document.getElementById("rcsad_TopLeft").style.display = "none";
			dfpPrintLog('collapse_TopLeft_dfp');
		}
	}, false);

	// RESET SKIN INSURADS REFRESH

	if (checkConfig('resetSkinInsurads')) {
		document.addEventListener('eventloadedTlDFP', function () {
			if (RCSAD_sitepage.indexOf('ilbianconero.com') > -1 || (RCSAD_sitepage.indexOf('calciomercato.com') > -1 && RCSAD_sitepage.indexOf('sosfanta.calciomercato.com') <= -1)) {
				var elResetMainContainer = RCSAD_sitepage.indexOf('ilbianconero.com') > -1 ? document.getElementsByClassName('main-view--container')[0] : document.getElementsByClassName('main-wrapper')[0];
			}
			var elResetSkin = document.getElementById('rcsad_TopLeft');
			var checkResetTlBg = elResetSkin !== null ? elResetSkin.style.backgroundImage !== "" : false;
			var elResetSkinlheader = document.getElementById('l-header');
			var elResetSkinWrapper = document.getElementById('rcsad_TopLeft').parentElement;
			var elResetSkinClickSx = document.getElementById('barra_click_sx');
			var elResetSkinClickDx = document.getElementById('barra_click_dx');
			var elResetSkinClickTop = document.getElementById('barra_click_top');
			if (checkResetTlBg) {
				dfpPrintLog('resetSkin tl prd 4');
				if (typeof elResetMainContainer !== "undefined" && elResetMainContainer != null) {
					if (RCSAD_sitepage.indexOf('ilbianconero.com') > -1 && !elResetMainContainer.classList.contains('resetSkinElmnt')) {
						elResetMainContainer.classList.add("resetSkinElmnt")
					} else if ((RCSAD_sitepage.indexOf('calciomercato.com') > -1 && RCSAD_sitepage.indexOf('sosfanta.calciomercato.com') <= -1) && elResetMainContainer.classList.contains('resetSkinElmnt')) {
						elResetMainContainer.classList.remove("resetSkinElmnt")
					}
				}
				if (!elResetSkin.classList.contains('resetSkinElmnt')) {
					elResetSkin.classList.add("resetSkinElmnt");
				}
				if (elResetSkinClickSx !== null) {
					elResetSkinClickSx.remove()
				}
				if (elResetSkinClickDx !== null) {
					elResetSkinClickDx.remove()
				}
				if (elResetSkinClickTop !== null) {
					elResetSkinClickTop.remove()
				}
				if (elResetSkin.classList.contains('skinVa')) {
					elResetSkin.classList.remove("skinVa")
				}
				if (elResetSkin.classList.contains('skinHp')) {
					elResetSkin.classList.remove("skinHp")
				}
				if (elResetSkinWrapper !== null) {
					if (elResetSkinWrapper.classList.contains('skinHp')) {
						elResetSkinWrapper.classList.remove("skinHp");
					}
					if (elResetSkinWrapper.classList.contains('resetSkinElmnt')) {
						elResetSkinWrapper.classList.remove("resetSkinElmnt");
					}
				}
				if (elResetSkinlheader !== null && !elResetSkinlheader.classList.contains('resetSkinElmnt')) {
					elResetSkinlheader.classList.add("resetSkinElmnt");
				}
				elResetSkin.style.backgroundImage = "";
			}
		});
		document.addEventListener('eventloadedTopDFP', function () {
			if (RCSAD_sitepage.indexOf('ilbianconero.com') > -1 || (RCSAD_sitepage.indexOf('calciomercato.com') > -1 && RCSAD_sitepage.indexOf('sosfanta.calciomercato.com') <= -1)) {
				var elResetMainContainer = RCSAD_sitepage.indexOf('ilbianconero.com') > -1 ? document.getElementsByClassName('main-view--container')[0] : document.getElementsByClassName('main-wrapper')[0];
			}
			var elResetSkin = typeof elResetSkin === "undefined" ? document.getElementById('rcsad_TopLeft') : elResetSkin;
			var elResetSkinlheader = typeof elResetSkinlheader === "undefined" ? document.getElementById('l-header') : elResetSkinlheader;
			var elResetSkinWrapper = typeof elResetSkinWrapper === "undefined" ? document.getElementById('rcsad_TopLeft').parentElement : elResetSkinWrapper;
			if (typeof elResetMainContainer !== "undefined" && elResetMainContainer != null) {
				if (RCSAD_sitepage.indexOf('ilbianconero.com') > -1 && elResetMainContainer.classList.contains('resetSkinElmnt')) {
					elResetMainContainer.classList.remove("resetSkinElmnt")
				} else if ((RCSAD_sitepage.indexOf('calciomercato.com') > -1 && RCSAD_sitepage.indexOf('sosfanta.calciomercato.com') <= -1) && !elResetMainContainer.classList.contains('resetSkinElmnt')) {
					elResetMainContainer.classList.add("resetSkinElmnt")
				}
			}
			if (elResetSkin.classList.contains('resetSkinElmnt')) {
				elResetSkin.classList.remove("resetSkinElmnt");
			}
			if (elResetSkinlheader !== null && elResetSkinlheader.classList.contains('resetSkinElmnt')) {
				elResetSkinlheader.classList.remove("resetSkinElmnt");
			}
			if (elResetSkinWrapper !== null && !elResetSkinWrapper.classList.contains('resetSkinElmnt')) {
				elResetSkinWrapper.classList.add("resetSkinElmnt");
			}
		});
	}

	// HIDE IFRAME POSITION ON PAGE

	var hidePositionNoIframe = document.createElement('link');
	hidePositionNoIframe.href = 'https://components2.rcsobjects.it/rcs_adv/v1/distro/dfp/common/css/hidePositionNoIframe.css';
	hidePositionNoIframe.rel = 'stylesheet';
	hidePositionNoIframe.type = 'text/css';
	document.head.appendChild(hidePositionNoIframe);

	//// INIZIALIZZO COUNTER POSIZIONI ONSCROLL ////

	// DETECT ELEMENT VISIBLE

	if (typeof jQuery !== "undefined" && RCSAD_sitepage.indexOf("dmove.it/")<=-1) {
		jQuery.fn.isOnScreen = function () {
			var win = jQuery(window);
			var viewport = {
				top: win.scrollTop(),
				left: win.scrollLeft()
			};
			viewport.right = viewport.left + win.width();
			viewport.bottom = viewport.top + win.height();
			bounds = this.offset();
			bounds.right = bounds.left + this.outerWidth();
			bounds.bottom = bounds.top + this.outerHeight();
			return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
		};

		// VARIABILI DI DEBUG

		jQuery(window).load(function () {
			setTimeout(function () {
				dfp_allposdiv = [];
				dfp_srapos = arrGptRcsAdvPos;
				jQuery('div[id^="rcsad_"]').map);
				var common = jQuery.grep(dfp_srapos,);
				dfp_batchpos = dfp_allposdiv.filter);
				dfpPrintLog("DFP POS BATCH: " + dfp_batchpos);
				dfpPrintLog("DFP POS SRA: " + dfp_srapos);
				document.dispatchEvent(eventloadedAllDfpPos);
			}, 1500);
		});
	}

	// CHIAMO LIBRERIA GPT E CONFIGURO GPT

	window.googletag = window.googletag || {};
	window.googletag.cmd = window.googletag.cmd || [];
	)();

	// DEFINISCO RCSAD_listpos DI DEFAULT SE NON DEF

	if (typeof window.RCSAD_listpos == "undefined") {
		dfpPrintLog('DFP RCSAD_listpos NON DEFINITA');
		if (!deviceAdvFreq.mobile() && !deviceAdvFreq.tablet()) {
			window.RCSAD_listpos = "Position1,Top,TopLeft,Frame1,Frame2";
		} else if (!deviceAdvFreq.mobile() && deviceAdvFreq.tablet()) {
			window.RCSAD_listpos = "Position1,TopLeft,Frame1,Frame2";
		} else {
			window.RCSAD_listpos = "Position1,Frame1";
		}
	}

	// open.online listpos mobile/desktop fix
    if ( dfpCheckSite('open.online') ) {

    	if ( deviceAdvFreq.mobile() ) {
            RCSAD_listpos = RCSAD_listpos.replace(',BottomLeft', '');
        } else {
            RCSAD_listpos = RCSAD_listpos.replace(/Position1,|,Floor|,Frame3/g, '');
        }

    }

    // FREQCAP INTROPAGE

	if (checkConfig('freqcapintro')) {
	
		if (getCookieIntro('introP1delivered') !== null && Number(getCookieIntro('introP1delivered')) >= 1) {
			RCSAD_listpos = RCSAD_listpos.replace('Position1,', '');
			if (typeof RCSAD_listpos_new !== "undefined") {
				RCSAD_listpos_new = RCSAD_listpos_new.replace('Position1,', '');
				dfpPrintLog('freqcapintro delete p1 RCSAD_listpos_new Open');
			};
			dfpPrintLog('freqcapintro delete p1');
		}
		document.addEventListener('eventDFPready', function (e) {
			googletag.cmd.push(function () {
				googletag.pubads().addEventListener('slotRenderEnded', function (event) {
					if (event.slot.getSlotElementId().indexOf("Position1") > -1) {
						if (!event.isEmpty) {

							var imgIntroObserver = document.createElement('div');
							imgIntroObserver.id = "imgIntroObserver";
							imgIntroObserver.style.cssText = "position: fixed;top: 50%;left: 50%;width: 1px;height: 1px;z-index: 999";
							document.body.appendChild(imgIntroObserver);

							function isVisibleIntro(elem) {
								if (!(elem instanceof Element)) throw Error('DomUtil: elem is not an element.');
								const style = getComputedStyle(elem);
								if (style.display === 'none') return false;
								if (style.visibility !== 'visible') return false;
								if (style.opacity < 0.1) return false;
								if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height +
									elem.getBoundingClientRect().width === 0) {
									return false;
								}
								const elemCenter = {
									x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
									y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
								};
								if (elemCenter.x < 0) return false;
								if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
								if (elemCenter.y < 0) return false;
								if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
								let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
								do {
									if (pointContainer === elem) return true;
								} while (pointContainer = pointContainer.parentNode);
								return false;
							}

							function checkTlVisibilityIntro() {
								elementToCheckVisibIntro = top.document.getElementById('imgIntroObserver');
								dfpPrintLog('freqcapintro checkTlVisibilityIntro: '+isVisibleIntro(elementToCheckVisibIntro));
								if (!isVisibleIntro(elementToCheckVisibIntro)) {
									var midnight = new Date();
									midnight.setHours(23, 59, 59, 0);
									if (document.cookie.indexOf('introP1delivered') <= -1) {
										document.cookie = "introP1delivered=1; expires=" + midnight + "/";
										dfpPrintLog('freqcapintro checkTlVisibilityIntro scrivo cookie: '+isVisibleIntro(elementToCheckVisibIntro));
									}
									clearInterval(varcheckTlVisibilityIntro);
								}
							}
							var varcheckTlVisibilityIntro = setInterval(checkTlVisibilityIntro, 1000);
							setTimeout(function () {
								clearInterval(varcheckTlVisibilityIntro);
								dfpPrintLog('freqcapintro checkTlVisibilityIntro end timeout 8s: '+isVisibleIntro(elementToCheckVisibIntro));
							}, 8000);
						}
					}
				});
			});
		}, false);
	}

	// CONVERTO RCSAD_listpos IN ARRAY

	arrGptRcsAdvPos = window.RCSAD_listpos.split(",");
	googletag.cmd.push(function () {

		// LA7 DISABILITA COOOKIE SE NON ACCETTATA

		if (top.RCSAD_sitepage.indexOf("La7.it/") > -1 || top.RCSAD_sitepage.indexOf("tgla7.it/") > -1 || top.RCSAD_sitepage.indexOf("sedanoallegro.it/") > -1 || top.RCSAD_sitepage.indexOf("leitv.it/") > -1) {
			var ca = document.cookie.split(';');
			var cookieReaded = false;
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') c = c.substring(1);
				if (c.indexOf("cookie-agreed") == 0 || c.indexOf("cookieconsent_dismissed") == 0 || c.indexOf("cookie_eu_consented") == 0 || c.indexOf("viewed_cookie_policy") == 0 || c.indexOf("__ric") == 0 || c.indexOf("euconsent") == 0 || c.indexOf("euconsent-v2") == 0) {
					cookieReaded = true;
				}
			}
			if (!cookieReaded) {
				dfpPrintLog('cmp-2 DFP COOKIE POLICY LA7/SEDANO NON ACCETTATA CHECKED');
				googletag.pubads().setRequestNonPersonalizedAds(1);
			} else {
				dfpPrintLog('cmp-2 DFP COOKIE POLICY LA7/SEDANO ACCETTATA CHECKED');
			}
		}

		// DEFINISCO OGGETTI GOOGLETAG

		window.gptadslots = []; // BATCH INIZIALIZZO ARRAY GENERICO
		window.gptadslotsSRA = []; // BATCH INIZIALIZZO ARRAY TUTTE POSIZIONI IN SRA
		var indexRcsPosDfp;
		arrGptRcsAdvPos = window.RCSAD_listpos.split(",");

		// DEFINISCO EVENTI CUSTOM

		// GENERIC EVENT GOOGLE TAG READY

		eventDFPready = document.createEvent('Event');
		eventDFPready.initEvent('eventDFPready', true, true);

		// EVENT CUSTOM 3 COLONNA CORRIERE QUANDO FRAME1 RENDERED

		eventclmnsxresizeDFP = document.createEvent('Event');
		eventclmnsxresizeDFP.initEvent('eventclmnsxresizeDFP', true, true);

		// POSITION1

		eventloadedP1DFP = document.createEvent('Event');
		eventloadedP1DFP.initEvent('eventloadedP1DFP', true, true);
		eventghostP1DFP = document.createEvent('Event');
		eventghostP1DFP.initEvent('eventghostP1DFP', true, true);

		// TOPLEFT

		eventloadedTlDFP = document.createEvent('Event');
		eventloadedTlDFP.initEvent('eventloadedTlDFP', true, true);
		eventghostTlDFP = document.createEvent('Event');
		eventghostTlDFP.initEvent('eventghostTlDFP', true, true);

		// POSITION3.1

		eventloadedP3_1DFP = document.createEvent('Event');
		eventloadedP3_1DFP.initEvent('eventloadedP3_1DFP', true, true);

		// POSITION3.2

		eventloadedP3_2DFP = document.createEvent('Event');
		eventloadedP3_2DFP.initEvent('eventloadedP3_2DFP', true, true);

		// FLOOR

		eventloadedFlDFP = document.createEvent('Event');
		eventloadedFlDFP.initEvent('eventloadedFlDFP', true, true);
		eventghostFlDFP = document.createEvent('Event');
		eventghostFlDFP.initEvent('eventghostFlDFP', true, true);

		// FRAME1

		eventloadedF1DFP = document.createEvent('Event');
		eventloadedF1DFP.initEvent('eventloadedF1DFP', true, true);
		eventghostF1DFP = document.createEvent('Event');
		eventghostF1DFP.initEvent('eventghostF1DFP', true, true);

		// FRAME2

		eventloadedF2DFP = document.createEvent('Event');
		eventloadedF2DFP.initEvent('eventloadedF2DFP', true, true);
		eventghostF2DFP = document.createEvent('Event');
		eventghostF2DFP.initEvent('eventghostF2DFP', true, true);

		// FRAME3
		eventloadedF3DFP = document.createEvent('Event');
		eventloadedF3DFP.initEvent('eventloadedF3DFP', true, true);
		eventghostF3DFP = document.createEvent('Event');
		eventghostF3DFP.initEvent('eventghostF3DFP', true, true);

		// BOTTOM

		eventloadedBtDFP = document.createEvent('Event');
		eventloadedBtDFP.initEvent('eventloadedBtDFP', true, true);
		eventghostBtDFP = document.createEvent('Event');
		eventghostBtDFP.initEvent('eventghostBtDFP', true, true);

		// BOTTOM 2

		eventloadedB2DFP = document.createEvent('Event');
		eventloadedB2DFP.initEvent('eventloadedB2DFP', true, true);
		eventghostB2DFP = document.createEvent('Event');
		eventghostB2DFP.initEvent('eventghostB2DFP', true, true);

		// BOTTOM 3

		eventloadedB3DFP = document.createEvent('Event');
		eventloadedB3DFP.initEvent('eventloadedB3DFP', true, true);
		eventghostB3DFP = document.createEvent('Event');
		eventghostB3DFP.initEvent('eventghostB3DFP', true, true);

		// BOTTOMLEFT

		eventloadedBlDFP = document.createEvent('Event');
		eventloadedBlDFP.initEvent('eventloadedBlDFP', true, true);
		eventghostBlDFP = document.createEvent('Event');
		eventghostBlDFP.initEvent('eventghostBlDFP', true, true);

		// BOTTOMRIGHT

		eventloadedBrDFP = document.createEvent('Event');
		eventloadedBrDFP.initEvent('eventloadedBrDFP', true, true);
		eventghostBrDFP = document.createEvent('Event');
		eventghostBrDFP.initEvent('eventghostBrDFP', true, true);

		// MIDDLE

		eventloadedMdDFP = document.createEvent('Event');
		eventloadedMdDFP.initEvent('eventloadedMdDFP', true, true);
		eventghostMdDFP = document.createEvent('Event');
		eventghostMdDFP.initEvent('eventghostMdDFP', true, true);

		// MIDDLE1

		eventloadedMd1DFP = document.createEvent('Event');
		eventloadedMd1DFP.initEvent('eventloadedMd1DFP', true, true);
		eventghostMd1DFP = document.createEvent('Event');
		eventghostMd1DFP.initEvent('eventghostMd1DFP', true, true);

		// SMALLRIGHT

		eventloadedSrDFP = document.createEvent('Event');
		eventloadedSrDFP.initEvent('eventloadedSrDFP', true, true);
		eventghostSrDFP = document.createEvent('Event');
		eventghostSrDFP.initEvent('eventghostSrDFP', true, true);

		// TOPPER

		eventloadedTprDFP = document.createEvent('Event');
		eventloadedTprDFP.initEvent('eventloadedTprDFP', true, true);
		eventghostTprDFP = document.createEvent('Event');
		eventghostTprDFP.initEvent('eventghostTprDFP', true, true);

		// EVENTO INFINTE SCROLL "eventPageScrolled"

		eventPageScrolled = document.createEvent('Event');
		eventPageScrolled.initEvent('eventPageScrolled', true, true);

		// VARIABILI DI DEBUG

		eventloadedAllDfpPos = document.createEvent('Event');
		eventloadedAllDfpPos.initEvent('eventloadedAllDfpPos', true, true);

		//DEFINISCO SIZE POSITION

		// Frame1
		if ((top.RCSAD_sitepage.indexOf("La7.it/") > -1 && (window.LA7_pagetype === "homepage" || window.LA7_pagetype === "video" || (top.LA7_pagetype === 'altro' && !top.deviceAdvFreq.mobile()) || (typeof sc_sezione1 !="undefined" && sc_sezione1 === 'donpasta') || (typeof sc_sezione !="undefined" && (sc_sezione =="podcast" || sc_sezione =="sherlock" || sc_sezione == "programmi" || sc_sezione.indexOf('i-protagonisti') > -1 || /*sc_sezione.indexOf('i-responsabili') > -1*/ top.location.href == 'https://www.la7.it/i-responsabili' || sc_sezione.indexOf('i-sondaggi') > -1 || sc_sezione =="la7prime")))) || top.RCSAD_sitepage.indexOf("open.online/") > -1 || (dfpCheckSite('ilbianconero') && tipologia === 'articolo' && !top.deviceAdvFreq.mobile())) {
			sizeCurPosDfpRcsF1 = [
			[300, 250],
			[300, 251], /*strictSize*/
			];
		} else {
			sizeCurPosDfpRcsF1 = [
			[300, 250],
			[300, 251], /*strictSize*/
			[300, 600]
			];
		}
		if (dfpCheckSite('open.online') && deviceAdvFreq.mobile()){
			sizeCurPosDfpRcsF1 = [
			[300, 250],
			[300, 251], /*strictSize*/
			[300, 600]
			];
		}
		if (!deviceAdvFreq.mobile()){
			if (top.RCSAD_sitepage.indexOf("La7.it/") > -1 && typeof sc_sezione !="undefined" && ( (sc_sezione === "eden" && location.pathname === '/eden') || sc_sezione == "dirette-tv" || sc_sezione == "figworldcup" || sc_sezione == "voicetown")){
				sizeCurPosDfpRcsF1 = [
					[300, 250],
					[300, 251], /*strictSize*/
					];
			}
		}

		// Frame1 halfpage mobile la7 hp
		if (deviceAdvFreq.mobile() && top.RCSAD_sitepage.includes("La7.it/") > -1 && window.LA7_pagetype == "homepage") {
			sizeCurPosDfpRcsF1.push([300, 600])
		}

		if (checkConfig('fluidSize') == true) sizeCurPosDfpRcsF1.push('fluid');

		// Floor
		if (top.RCSAD_sitepage.indexOf("open.online/") > -1) {
			sizeCurPosDfpRcsFlr = [
				[320, 50],
				[320, 51], /*strictSize*/
				[300, 50],
				[300, 51], /*strictSize*/
				[320, 100],
				[320, 101], /*strictSize*/
				[300, 100],
				[300, 101] /*strictSize*/
				];
		} else {
			sizeCurPosDfpRcsFlr = [
				[320, 50],
				[320, 51], /*strictSize*/
				[320, 100],
				[320, 101] /*strictSize*/
				];
		}
		if (checkConfig('fluidSize') == true) sizeCurPosDfpRcsFlr.push('fluid');

		// Top
		sizeCurPosDfpRcsTop = [
		[1920, 1080]
		];

		// Position1
		if (top.RCSAD_sitepage.indexOf("open.online/") > -1) {
			sizeCurPosDfpRcsP1 = [
			[1, 1]
			];
		} else {
			sizeCurPosDfpRcsP1 = [
			[1, 1]
			];
		}

		if (checkConfig('leaderboardbMastheahOnP1') == true && !deviceAdvFreq.mobile()) {
			sizeCurPosDfpRcsP1.push([728, 90])
		}

		if ( checkConfig('mobileIntropageDisplay') === true && deviceAdvFreq.mobile() ) {
			sizeCurPosDfpRcsP1.push([300, 250], [300, 600]);
		}

		// Position3.1, Position3.2
		sizeCurPosDfpRcsP3 = [];
		if (window.screen.availWidth >= 1400) {
			sizeCurPosDfpRcsP3 = [
				[120, 600],
				[160, 600]
			];
		}

		// TopLeft
		if (deviceAdvFreq.mobile()) {
				// mobile MONDO LA7 + DDAY + UNIONESARDA + OPEN ECCEZIONE
				if (top.RCSAD_sitepage.indexOf("open.online/") > -1) {
					sizeCurPosDfpRcsTl = [
						[320, 50],
						[300, 50], /*strictSize*/
						[320, 100],
						[300, 100] /*strictSize*/
						];
				}
				// fix size per festivaldellosport
				else if(top.RCSAD_sitepage.indexOf("gazzetta.it/festival-trento") > -1){
					sizeCurPosDfpRcsTl = [
					[320, 50],
					[320, 51] /*strictSize*/
					];
				} else {
					sizeCurPosDfpRcsTl = [
					[320, 50],
					[320, 51], /*strictSize*/
					[320, 100],
					[320, 101] /*strictSize*/
					];
				}
				if (checkConfig('fluidSize') == true) sizeCurPosDfpRcsTl.push('fluid');
			} else {
				// fix size per festivaldellosport
				if(top.RCSAD_sitepage.indexOf("gazzetta.it/festival-trento") > -1){
					sizeCurPosDfpRcsTl = [
					[728, 90],
					[728, 91] /*strictSize*/
					];
				}
				// desktop/tablet MONDO LA7 + DDAY + UNIONESARDA
				else if ( (window.LA7_pagetype == "homepage" || window.LA7_pagetype == "listing") && top.RCSAD_sitepage.toLowerCase().indexOf('la7.it') < 0) {
					// desktop/tablet MONDO LA7 + LEITV
					if ((top.RCSAD_sitepage.indexOf("leitv.it/") > -1 && !deviceAdvFreq.tablet()) || top.RCSAD_sitepage.indexOf("leitv.it/") <= -1) {
						sizeCurPosDfpRcsTl = [
						[728, 90],
						[728, 91], /*strictSize*/
						[940, 60],
						[940, 61], /*strictSize*/
						[940, 90],
						[940, 91], /*strictSize*/
						[970, 250],
						[970, 251], /*strictSize*/
						[940, 530],
						[940, 531] /*strictSize*/
						];
					}
					else {
						sizeCurPosDfpRcsTl = [
						[728, 90],
						[728, 91], /*strictSize*/
						[940, 60],
						[940, 61], /*strictSize*/
						[940, 90],
						[940, 91], /*strictSize*/
						[940, 530],
						[940, 531] /*strictSize*/
						];
					}
				} else if (typeof top.RCSAD_sitepage !== 'undefined' && top.RCSAD_sitepage.toLowerCase().indexOf('la7.it') > -1) {
					sizeCurPosDfpRcsTl = [
					[728, 90],
					[728, 91], /*strictSize*/
					[940, 60],
					[940, 61], /*strictSize*/
					[940, 90],
					[940, 91],  /*strictSize*/
					[970, 250],
					[970, 251] /*strictSize*/
					];
				}
				// nuove size per Desktop Open
				else if (top.location.href.indexOf("open.online/") > -1) {
					sizeCurPosDfpRcsTl = [
						[728, 90],
						[728, 91], /*strictSize*/
						[940, 60],
						[940, 61], /*strictSize*/
						[940, 90],
						[940, 91], /*strictSize*/
						[970, 250],
						[970, 251] /*strictSize*/
						];
				} else {
					// desktop-tablet DDAY + UNIONESARDA
					if (!checkConfig('TLSizeRefrOrient') && checkConfig('skinontopleft')) {
						// tablet SKINONTOPLEFT TRUE
						if (window.matchMedia("(orientation: portrait)").matches && deviceAdvFreq.tablet()) {
							sizeCurPosDfpRcsTl = [];
						} else if (window.matchMedia("(orientation: landscape)").matches || !deviceAdvFreq.tablet()) {
							sizeCurPosDfpRcsTl = [
							[728, 90],
							[728, 91], /*strictSize*/
							[940, 60],
							[940, 61], /*strictSize*/
							[940, 90],
							[940, 91], /*strictSize*/
							[970, 250],
							[970, 251], /*strictSize*/
							[940, 530],
							[940, 531], /*strictSize*/
							[1920, 1080],
							];
						}
					} else if (top.RCSAD_sitepage.indexOf("gazzetta.it/minisito-dacia") > -1 && !deviceAdvFreq.mobile()) {
						sizeCurPosDfpRcsTl = [
						[1920, 1080] /*strictSize*/
						];
					} else {
						// desktop-tablet DDAY + UNIONESARDA SKINONTOPLEFT FALSE
						sizeCurPosDfpRcsTl = [
						[728, 90],
						[728, 91], /*strictSize*/
						[940, 60],
						[940, 61], /*strictSize*/
						[940, 90],
						[940, 91], /*strictSize*/
						[970, 250],
						[970, 251], /*strictSize*/
						[940, 530],
						[940, 531], /*strictSize*/
						];
						if (window.screen.availWidth >= 1280 && ( RCSAD_sitepage.indexOf('calciomercato')>-1 || dfpCheckSite('ilbianconero') )) {
							sizeCurPosDfpRcsTl.push([1920, 1080])
						}
					}
				}
			}


		// Frame2
		sizeCurPosDfpRcsF2 = [
		[300, 250],
		[300, 252] /*strictSize*/
		];
		if (checkConfig('fluidSize') == true) sizeCurPosDfpRcsF2.push('fluid');

		// Frame3
		sizeCurPosDfpRcsF3 = [
			[300, 250],
			[300, 253] /*strictSize*/
		  ]
		  if (checkConfig('fluidSize') == true) sizeCurPosDfpRcsF3.push('fluid');

		// BottomLeft
		sizeCurPosDfpRcsBl = [
		[728, 90],
		[728, 92], /*strictSize*/
		[940, 60],
		[940, 62], /*strictSize*/
		[940, 90],
		[940, 92], /*strictSize*/
		[970, 250],
		[970, 252] /*strictSize*/
		];

		// BottomRight
		sizeCurPosDfpRcsBr = [
			[300, 250],
			[300, 253] /*strictSize*/
		  ];
		  if (checkConfig('fluidSize') == true) sizeCurPosDfpRcsBr.push('fluid');

		// Middle
		sizeCurPosDfpRcsMd = [
			[620, 90],
		  ];
		  if (checkConfig('fluidSize') == true) sizeCurPosDfpRcsMd.push('fluid');

		  // Middle1
		  sizeCurPosDfpRcsMd1 = [
			[300, 250],
			[300, 254] /*strictSize*/
		  ];
		  if (checkConfig('fluidSize') == true) sizeCurPosDfpRcsMd1.push('fluid');

		  // Middle2
		  sizeCurPosDfpRcsMd2 = [
			[320, 100]
		  ];
		  if (checkConfig('fluidSize') == true) sizeCurPosDfpRcsMd2.push('fluid');

		// Bottom
		sizeCurPosDfpRcsBt = 'fluid';

		// Bottom1
		sizeCurPosDfpRcsB1 = [
		[300, 1]
		];
		if (checkSP('open')) {
			sizeCurPosDfpRcsB1.push("fluid");
		}
		if (checkConfig('googleinreadsize') == true && window.RCSAD_sitepage.indexOf("lasiciliaweb") <= -1) {
			sizeCurPosDfpRcsB1.push([640, 365]);
		}

		// Bottom2
		sizeCurPosDfpRcsB2 = 'fluid';

		// Bottom3
		sizeCurPosDfpRcsB3 = 'fluid';

		// Left1
		sizeCurPosDfpRcsL1 = [
		[184, 90],
		[184, 91] /*strictSize*/
		]

		// Right1
		sizeCurPosDfpRcsR1 = [
		[184, 90],
		[184, 92] /*strictSize*/
		]

		// SmallRight
		if (top.RCSAD_sitepage.indexOf("open.online/") > -1) {
			sizeCurPosDfpRcsSr = [
			[300, 100],
			[300, 102],
			[320, 100],
			[320, 102]
			]
		} else {
			sizeCurPosDfpRcsSr = [
			[300, 100]
			]
		}

		// Topper
		if (checkConfig('topper') === true) {
			if (!deviceAdvFreq.mobile()) {
				sizeCurPosDfpRcsTpr = [
					[728, 90],
					[300, 250]
				];
			} else {
				sizeCurPosDfpRcsTpr = [
					[320, 50],
					[320, 100],
					[300, 50],
					[300, 100]
				];
			}
		}

		//CICLO L'ARRAY DELLA LISTPOS E SETTO LE DIMENSIONI PREVISTE PER OGNI POSIZIONE

		for (indexRcsPosDfp = 0; indexRcsPosDfp < arrGptRcsAdvPos.length; ++indexRcsPosDfp) {
			if (arrGptRcsAdvPos[indexRcsPosDfp] == "Frame1") {
				sizeCurPosDfpRcs = sizeCurPosDfpRcsF1;
			} else if (arrGptRcsAdvPos[indexRcsPosDfp] == "Top") {
				sizeCurPosDfpRcs = sizeCurPosDfpRcsTop;
			} else if (arrGptRcsAdvPos[indexRcsPosDfp] == "Position1") {
				sizeCurPosDfpRcs = sizeCurPosDfpRcsP1;
			} else if (arrGptRcsAdvPos[indexRcsPosDfp] == "Position3.1" || arrGptRcsAdvPos[indexRcsPosDfp] == "Position3.2") {
				sizeCurPosDfpRcs = sizeCurPosDfpRcsP3;
			} else if (arrGptRcsAdvPos[indexRcsPosDfp] == "TopLeft") {
				sizeCurPosDfpRcs = sizeCurPosDfpRcsTl;
			} else if (arrGptRcsAdvPos[indexRcsPosDfp] == "Frame2") {
				sizeCurPosDfpRcs = sizeCurPosDfpRcsF2;
			} else if (arrGptRcsAdvPos[indexRcsPosDfp] == "Frame3") {
				sizeCurPosDfpRcs = sizeCurPosDfpRcsF3;
			} else if (arrGptRcsAdvPos[indexRcsPosDfp] == "Floor") {
				sizeCurPosDfpRcs = sizeCurPosDfpRcsFlr;
			} else if (arrGptRcsAdvPos[indexRcsPosDfp] == "BottomLeft") {
				sizeCurPosDfpRcs = sizeCurPosDfpRcsBl;
			} else if (arrGptRcsAdvPos[indexRcsPosDfp] == "Bottom") {
				sizeCurPosDfpRcs = sizeCurPosDfpRcsBt;
			} else if (arrGptRcsAdvPos[indexRcsPosDfp] == "Bottom1") {
				sizeCurPosDfpRcs = sizeCurPosDfpRcsB1;
			} else if (arrGptRcsAdvPos[indexRcsPosDfp] == "Bottom2") {
				sizeCurPosDfpRcs = sizeCurPosDfpRcsB2;
			} else if (arrGptRcsAdvPos[indexRcsPosDfp] == "Bottom3") {
				sizeCurPosDfpRcs = sizeCurPosDfpRcsB3;
			} else if (arrGptRcsAdvPos[indexRcsPosDfp] == "Left1") {
				sizeCurPosDfpRcs = sizeCurPosDfpRcsL1;
			} else if (arrGptRcsAdvPos[indexRcsPosDfp] == "Right1") {
				sizeCurPosDfpRcs = sizeCurPosDfpRcsR1;
			} else if (arrGptRcsAdvPos[indexRcsPosDfp] == "Mobile-Position1") {
				sizeCurPosDfpRcs = sizeCurPosDfpRcsP1;
			} else if (arrGptRcsAdvPos[indexRcsPosDfp] == "Mobile-Frame1") {
				sizeCurPosDfpRcs = sizeCurPosDfpRcsF1;
			} else if (arrGptRcsAdvPos[indexRcsPosDfp] == "SmallRight") {
				sizeCurPosDfpRcs = sizeCurPosDfpRcsSr;
			} else if (arrGptRcsAdvPos[indexRcsPosDfp] == "Topper") {
				sizeCurPosDfpRcs = sizeCurPosDfpRcsTpr;
			}else {
				sizeCurPosDfpRcs = []
			}

			//dfpPrintLog("DefSlot DFP: " + arrGptRcsAdvPos[indexRcsPosDfp].replace(/Mobile-/g, ""));

			// LANCIO UNA DEFINE-SLOT PER OGNI POSIZIOINE PRESENTE NELLA LISTPOS PASSANDO EXIT FALSE
			if (typeof top.sezione != "undefined" && top.sezione == "video") {
				window.gptadslots[indexRcsPosDfp + 1] = googletag.defineSlot('/35821442/' + window.RCSAD_sitepage + '/' + arrGptRcsAdvPos[indexRcsPosDfp], sizeCurPosDfpRcs, 'rcsad_' + arrGptRcsAdvPos[indexRcsPosDfp].replace(/Mobile-/g, "")).addService(googletag.companionAds()).addService(googletag.pubads()).setTargeting("gestione_exitpage", "false");
				dfpPrintLog('DFP target video');
			} else {
				if (arrGptRcsAdvPos[indexRcsPosDfp] == "TopLeft" && (checkConfig('TLSizeRefrOrient') == true && RCSAD_listpos.indexOf('Top,') <= -1)) {
					var sizeCurPosDfpRcsEmpty = [];
					var sizeCurPosDfpRcsTlSkin = sizeCurPosDfpRcsTl.slice(0);
					if ( top.RCSAD_sitepage.indexOf("open.online/") == -1 ) {
						sizeCurPosDfpRcsTlSkin.push([1920, 1080]);
					}
					var mappingSizeRsTl = googletag.sizeMapping().
					addSize([1077, 1338], sizeCurPosDfpRcsEmpty). // IPAD 3 PORTRAIT
					addSize([1050, 200], sizeCurPosDfpRcsTlSkin).
					addSize([1024, 692], sizeCurPosDfpRcsTlSkin).
					addSize([1024, 1366], sizeCurPosDfpRcsEmpty). // IPAD PRO PORTRAIT
					addSize([980, 1217], sizeCurPosDfpRcsEmpty). // IPAD 2 PORTRAIT
					addSize([768, 954], sizeCurPosDfpRcsEmpty). // IPAD 6 PORTRAIT
					addSize([768, 528], sizeCurPosDfpRcsTlSkin).
					addSize([0, 0], sizeCurPosDfpRcs).
					build();
					window.gptadslots[indexRcsPosDfp + 1] = googletag.defineSlot('/35821442/' + window.RCSAD_sitepage + '/' + arrGptRcsAdvPos[indexRcsPosDfp], sizeCurPosDfpRcs, 'rcsad_' + arrGptRcsAdvPos[indexRcsPosDfp].replace(/Mobile-/g, "")).defineSizeMapping(mappingSizeRsTl).addService(googletag.pubads()).setTargeting("gestione_exitpage", "false");
				} else if (arrGptRcsAdvPos[indexRcsPosDfp] == "Top" && (checkConfig('TLSizeRefrOrient') == false)) {
					var sizeCurPosDfpRcsEmpty = [];
					var mappingSizeRsTop = googletag.sizeMapping().
					addSize([1077, 1338], sizeCurPosDfpRcsEmpty). // IPAD 3 PORTRAIT
					addSize([1050, 200], sizeCurPosDfpRcsTop).
					addSize([1024, 692], sizeCurPosDfpRcsTop).
					addSize([1024, 1366], sizeCurPosDfpRcsEmpty). // IPAD PRO PORTRAIT
					addSize([980, 1217], sizeCurPosDfpRcsEmpty). // IPAD 2 PORTRAIT
					addSize([768, 954], sizeCurPosDfpRcsEmpty). // IPAD 6 PORTRAIT
					addSize([768, 528], sizeCurPosDfpRcsTop).
					addSize([0, 0], sizeCurPosDfpRcs).
					build();
					window.gptadslots[indexRcsPosDfp + 1] = googletag.defineSlot('/35821442/' + window.RCSAD_sitepage + '/' + arrGptRcsAdvPos[indexRcsPosDfp], sizeCurPosDfpRcs, 'rcsad_' + arrGptRcsAdvPos[indexRcsPosDfp].replace(/Mobile-/g, "")).defineSizeMapping(mappingSizeRsTop).addService(googletag.pubads()).setTargeting("gestione_exitpage", "false");
				} else {
					window.gptadslots[indexRcsPosDfp + 1] = googletag.defineSlot('/35821442/' + window.RCSAD_sitepage + '/' + arrGptRcsAdvPos[indexRcsPosDfp], sizeCurPosDfpRcs, 'rcsad_' + arrGptRcsAdvPos[indexRcsPosDfp].replace(/Mobile-/g, "")).addService(googletag.pubads()).setTargeting("gestione_exitpage", "false");
				}
			}

			gptadslotsSRA.push(window.gptadslots[indexRcsPosDfp + 1]); // BATCH POPOLO ARRAY TUTTE POS
			//dfpPrintLog('DFP gptadslotsSRA: ' + arrGptRcsAdvPos[indexRcsPosDfp]);


			/* AMAZON SLOT START */
			if ( checkConfig('prebid') === true && checkConfig('amazon') === true ) {

				// clean amazon sizes
				sizeCurPosDfpRcsAmz = sizeCurPosDfpRcs.filter(function(size) {

					if ( size[0] === 1 && size[1] === 1 // remove fluid 1x1
						|| Number(size[1].toString().slice(-1)) !== 0 // normalize sizes
						) {
						return false;
					}

					return true;

				});

				gptadslotsSRAamz.push({
					slotID: 'rcsad_' + arrGptRcsAdvPos[indexRcsPosDfp],
					slotName: '/35821442/' + window.RCSAD_sitepage + '/' + arrGptRcsAdvPos[indexRcsPosDfp],
					sizes: sizeCurPosDfpRcsAmz
				});

			}
			/* AMAZON SLOT END */

		}

		// CHIAMO FUNZIONE PARTNER SLOT CHE DEFINISCE SLOT AGGIUNGIVI E LI AGGIUNGE ALL'ARRAY
		if (typeof window.definePartnerSlots == "function") {
			window.definePartnerSlots()
		}

		// SETTO EVENT LISTENER PER SLOT RENDERED SOLO SE switchAdv2017 E' TRUE
		if (switchAdv2017 == true || typeof switchAdv2017 == "undefined") {
			googletag.pubads().addEventListener('slotRenderEnded', function (event) {
				dfpPrintLog('DFP Slot has been rendered SLOT: ' + event.slot.getSlotElementId());

				// >> RENDERED POSITION1 << //

				if (event.slot.getSlotElementId() == "rcsad_Position1") {
					var P1containsAd = !event.isEmpty;
					if (P1containsAd == false) {
						dfpPrintLog('eventghostP1DFP');
						document.dispatchEvent(eventghostP1DFP);
					} else {
						dfpPrintLog('eventloadedP1DFP');
						document.dispatchEvent(eventloadedP1DFP);

						if ( checkConfig('mobileIntropageDisplay') === false ) {

							dfpPrintLog('event.size[1]: '+event.size[1]);
							if (event.size[1] >= 90) {
								function setCloseButtonP1() {
									var closeButtonP1 = document.createElement('div');
									closeButtonP1.id = 'closeButtonP1';
									closeButtonP1.onclick =;
									closeButtonP1.style.cssText = "top: 0px;right:-30px;width:40px;height:40px;background-size:contain;background-repeat: no-repeat;color: white;z-index: 999999999;position: absolute;font-size: 35px;cursor: pointer;background-image: url('https://components2.rcsobjects.it/rcs_adv/v1/distro/dfp/advtemplate/introDfp/xchiudi.svg');";
									contDivP1.appendChild(closeButtonP1);
								}
								var contDivP1 = document.getElementById('rcsad_Position1');
								contDivP1.style.cssText = "height:" + (event.size[1] + 50) + "px;width:" + (event.size[0] + 10) + "px;position:fixed;bottom:0;padding:20px;z-index:9999;left:50%;margin-left:-" + (event.size[0] / 2) + "px";

								setTimeout(function () {
									var iframePassbackP1 = document.getElementById("google_ads_iframe_/35821442/" + RCSAD_sitepage + "/Position1_0");
									try {
										var elmntiframePassbackP1 = iframePassbackP1.contentWindow.document.body;
										dfpPrintLog("event.size[1] checkidchild P1 elmntiframePassbackP1 height body ", elmntiframePassbackP1.clientHeight);
										if (elmntiframePassbackP1.clientHeight >= 90) {
											setCloseButtonP1()
										} else {
											document.getElementById('rcsad_Position1').style.display = "none"
										}
									} catch (error) {
										setCloseButtonP1()
									}
								}, 3500);
							}

						}

					}
				}

				// >> RENDERED TOPLEFT << //

				if (event.slot.getSlotElementId() == "rcsad_TopLeft") {
					var TlcontainsAd = !event.isEmpty,
					slotCurrentGhost = document.querySelector('#rcsad_TopLeft');

					if ( checkSP('open.online') && TlcontainsAd && slotCurrentGhost.parentElement ) {
						slotCurrentGhost.parentElement.classList.remove('adv--closed');
					}

					if (TlcontainsAd == false || event.size[1] == 1 || event.size[1] == 1080) {
						setTimeout(function () {
							if (slotCurrentGhost && (slotCurrentGhost.clientHeight <= 40 && (slotCurrentGhost.querySelector('div[id^="google_ads_iframe_"]') && slotCurrentGhost.querySelector('div[id^="google_ads_iframe_"]').clientHeight <= 40)) || event.size[1] == 1080) {
								document.dispatchEvent(eventghostTlDFP);
								slotCurrentGhost.style.display = "none";
								dfpPrintLog('eventghostTlDFP GHOST AFTER 500');
							} else {
								document.dispatchEvent(eventloadedTlDFP);
								dfpPrintLog('eventloadedTlDFP LOADED AFTER 500');
							}
						}, 500);
					} else {
						slotCurrentGhost.classList.remove("hiddenTop");
						document.dispatchEvent(eventloadedTlDFP);
						dfpPrintLog('eventloadedTlDFP');
					}

				}

				// >> RENDERED POSITION3.1 << //
				if (event.slot.getSlotElementId() == "rcsad_Position3.1") {
					var P3containsAd = !event.isEmpty;
					if (P3containsAd == false || event.size[1] == 1) {
						setTimeout(function () {
							if (document.getElementById('rcsad_Position3.1').clientHeight <= 40) {
								document.getElementById("rcsad_Position3.1").style.display = "none";
								dfpPrintLog('eventghostP3_1DFP GHOST AFTER 500');
							} else {
								document.dispatchEvent(eventloadedP3_1DFP);
								dfpPrintLog('eventloadedP3_1DFP LOADED AFTER 500');
							}
						}, 500);
					} else {
						document.dispatchEvent(eventloadedP3_1DFP);
						dfpPrintLog('eventloadedP3_1DFP');
					}
				}

				// >> RENDERED POSITION3.2 << //
				if (event.slot.getSlotElementId() == "rcsad_Position3.2") {
					var P3containsAd = !event.isEmpty;
					if (P3containsAd == false || event.size[1] == 1) {
						setTimeout(function () {
							if (document.getElementById('rcsad_Position3.2').clientHeight <= 40) {
								document.getElementById("rcsad_Position3.2").style.display = "none";
								dfpPrintLog('eventghostP3_2DFP GHOST AFTER 500');
							} else {
								document.dispatchEvent(eventloadedP3_2DFP);
								dfpPrintLog('eventloadedP3_2DFP LOADED AFTER 500');
							}
						}, 500);
					} else {
						document.dispatchEvent(eventloadedP3_2DFP);
						dfpPrintLog('eventloadedP3_2DFP')
					}
				}

				// >> RENDERED FRAME1 << //
				if ( /*event.slot.getSlotElementId() == "rcsad_Frame1"*/ event.slot.getSlotElementId().indexOf("rcsad_Frame1") > -1 ) {
					// FRAME 1 COLONNA DESTRA HP CORRIERE >> EVENTO CUSTOM PER FRAME1 noEMPTY(con TIMEOUT)
					document.dispatchEvent(eventclmnsxresizeDFP);
					dfpPrintLog('eventclmnsxresizeDFP SENZA TIMEOUT');
					setTimeout, 4000);

					var F1containsAd = !event.isEmpty;
					slotCurrentGhost = document.querySelector('#rcsad_Frame1');

					if ( checkSP('open.online') && F1containsAd && slotCurrentGhost.parentElement ) {
						slotCurrentGhost.parentElement.classList.remove('adv--closed');
					}

					if (F1containsAd == false || event.size[1] == 1) {
						setTimeout(function () {
							if (document.querySelector('#rcsad_Frame1').clientHeight <= 90) {
								document.dispatchEvent(eventghostF1DFP);
								document.getElementById("rcsad_Frame1").style.display = "none";
								dfpPrintLog('eventghostF1DFP GHOST AFTER 500');
							} else {
								document.dispatchEvent(eventloadedF1DFP);
								dfpPrintLog('eventloadedF1DFP LOADED AFTER 500');
							}
						}, 500);
					} else {
						if (top.RCSAD_sitepage.indexOf("La7.it/") > -1 || top.RCSAD_sitepage.indexOf("tgla7.it/") > -1 || top.RCSAD_sitepage.indexOf("sedanoallegro.it/") > -1 || top.RCSAD_sitepage.indexOf("leitv.it/") > -1) {
							document.getElementById("rcsad_Frame1").classList.remove("rcsadGhostPosDfp");
						}
						document.dispatchEvent(eventloadedF1DFP);
						dfpPrintLog('eventloadedF1DFP.slotIdDiv: ' + event.slot.getSlotElementId())
					}
				}

				// >> RENDERED FRAME2 << //
				if (event.slot.getSlotElementId() == "rcsad_Frame2") {
					var F2containsAd = !event.isEmpty;
					if (F2containsAd == false || event.size[1] == 1) {
						setTimeout(function () {
							if (document.querySelector('#rcsad_Frame2').clientHeight <= 90) {
								document.dispatchEvent(eventghostF2DFP);
								document.getElementById("rcsad_Frame2").style.display = "none";
								dfpPrintLog('eventghostF2DFP GHOST AFTER 500');
							} else {
								document.dispatchEvent(eventloadedF2DFP);
								dfpPrintLog('eventloadedF2DFP LOADED AFTER 500');
							}
						}, 500);
					} else {
						if (top.RCSAD_sitepage.indexOf("La7.it/") > -1 || top.RCSAD_sitepage.indexOf("tgla7.it/") > -1 || top.RCSAD_sitepage.indexOf("sedanoallegro.it/") > -1 || top.RCSAD_sitepage.indexOf("leitv.it/") > -1) {
							document.getElementById("rcsad_Frame2").classList.remove("rcsadGhostPosDfp");
						}
						document.dispatchEvent(eventloadedF2DFP);
						dfpPrintLog('eventloadedF2DFP')
					}
				}

				// >> RENDERED FRAME3 << //

				if (event.slot.getSlotElementId() == "rcsad_Frame3") {
					var F3containsAd = !event.isEmpty;
					if (F3containsAd == false || event.size[1] == 1) {
						setTimeout(function () {
							var slotCurrentGhost = document.querySelector('#rcsad_Frame3');
						  if (slotCurrentGhost && slotCurrentGhost.clientHeight <= 90) {
						  document.dispatchEvent(eventghostF3DFP);
						  document.getElementById("rcsad_Frame3").style.display = "none";
						  dfpPrintLog('eventghostF3DFP GHOST AFTER 500');
						  } else {
						  document.dispatchEvent(eventloadedF3DFP);
						  dfpPrintLog('eventloadedF3DFP LOADED AFTER 500');
						  }
						  }, 500);
					} else {
						document.dispatchEvent(eventloadedF3DFP);
						dfpPrintLog('eventloadedF3DFP')
					}
				}

				// >> RENDERED FLOOR << //
				if (event.slot.getSlotElementId() == "rcsad_Floor") {
					var FlcontainsAd = !event.isEmpty;
					if (FlcontainsAd == false || event.size[1] == 1) {
						setTimeout(function () {
							var slotCurrentGhost = document.querySelector('#rcsad_Floor');
							if (slotCurrentGhost && slotCurrentGhost.clientHeight <= 40) {
								document.dispatchEvent(eventghostFlDFP);
								document.getElementById("rcsad_Floor").style.display = "none";
								dfpPrintLog('eventghostFlDFP GHOST AFTER 500');
							} else {
								document.dispatchEvent(eventloadedFlDFP);
								dfpPrintLog('eventloadedFlDFP LOADED AFTER 500');
							}
						}, 500);
					} else {
						document.dispatchEvent(eventloadedFlDFP);
						dfpPrintLog('eventloadedFlDFP')
					}
				}

			// >> RENDERED SMALL RIGHT << //
			if (event.slot.getSlotElementId() == "rcsad_SmallRight") {
				var SrcontainsAd = !event.isEmpty;
				if (SrcontainsAd == false || event.size[1] == 1) {
					setTimeout(function () {
						var slotCurrentGhost = document.querySelector('#rcsad_SmallRight');
						if (slotCurrentGhost && slotCurrentGhost.clientHeight <= 40) {
							document.dispatchEvent(eventghostSrDFP);
							document.getElementById("rcsad_SmallRight").style.display = "none";
							dfpPrintLog('eventghostSrDFP GHOST AFTER 500');
						} else {
							document.dispatchEvent(eventloadedSrDFP);
							dfpPrintLog('eventloadedSrDFP LOADED AFTER 500');
						}
					}, 500);
				} else {
					document.dispatchEvent(eventloadedSrDFP);
					dfpPrintLog('eventloadedSrDFP')
				}
			}

				// >> RENDERED BOTTOM << //
				if (event.slot.getSlotElementId() == "rcsad_Bottom") {
					var BtcontainsAd = !event.isEmpty;
					if (BtcontainsAd == false || event.size[1] == 1) {
						setTimeout(function () {
							if (document.querySelector('#rcsad_Bottom').clientHeight <= 40) {
								document.dispatchEvent(eventghostBtDFP);
								document.getElementById("rcsad_Bottom").style.display = "none";
								dfpPrintLog('eventghostBtDFP GHOST AFTER 500');
							} else {
								document.dispatchEvent(eventloadedBtDFP);
								dfpPrintLog('eventloadedBtDFP LOADED AFTER 500');
							}
						}, 500);
					} else {
						if (top.RCSAD_sitepage.indexOf("La7.it/") > -1 || top.RCSAD_sitepage.indexOf("tgla7.it/") > -1 || top.RCSAD_sitepage.indexOf("sedanoallegro.it/") > -1 || top.RCSAD_sitepage.indexOf("leitv.it/") > -1) {
							document.getElementById("rcsad_Bottom").classList.remove("rcsadGhostPosDfp");
						}
						document.dispatchEvent(eventloadedBtDFP);
						dfpPrintLog('eventloadedBtDFP')
					}
				}

				// >> RENDERED BOTTOM 2 << //

				if (event.slot.getSlotElementId() == "rcsad_Bottom2") {
					var B2containsAd = !event.isEmpty;
					if (B2containsAd == false || event.size[1] == 1) {
						setTimeout(function () {
							if (document.querySelector('#rcsad_Bottom2').clientHeight <= 40) {
								document.dispatchEvent(eventghostB2DFP);
								document.getElementById("rcsad_Bottom2").style.display = "none";
								dfpPrintLog('eventghostB2DFP GHOST AFTER 500');
							} else {
								document.dispatchEvent(eventloadedB2DFP);
								dfpPrintLog('eventloadedB2DFP LOADED AFTER 500');
							}
						}, 500);
					} else {
						if (top.RCSAD_sitepage.indexOf("La7.it/") > -1 || top.RCSAD_sitepage.indexOf("tgla7.it/") > -1 || top.RCSAD_sitepage.indexOf("sedanoallegro.it/") > -1 || top.RCSAD_sitepage.indexOf("leitv.it/") > -1) {
							document.getElementById("rcsad_Bottom2").classList.remove("rcsadGhostPosDfp");
						}
						document.dispatchEvent(eventloadedB2DFP);
						dfpPrintLog('eventloadedB2DFP')
					}
				}

				// >> RENDERED BOTTOM 3 << //

				if (event.slot.getSlotElementId() == "rcsad_Bottom3") {
					var B3containsAd = !event.isEmpty;
					if (B3containsAd == false || event.size[1] == 1) {
						setTimeout(function () {
							if (document.querySelector('#rcsad_Bottom3').clientHeight <= 40) {
								document.dispatchEvent(eventghostB3DFP);
								document.getElementById("rcsad_Bottom3").style.display = "none";
								dfpPrintLog('eventghostB3DFP GHOST AFTER 500');
							} else {
								document.dispatchEvent(eventloadedB3DFP);
								dfpPrintLog('eventloadedB3DFP LOADED AFTER 500');
							}
						}, 500);
					} else {
						if (top.RCSAD_sitepage.indexOf("La7.it/") > -1 || top.RCSAD_sitepage.indexOf("tgla7.it/") > -1 || top.RCSAD_sitepage.indexOf("sedanoallegro.it/") > -1 || top.RCSAD_sitepage.indexOf("leitv.it/") > -1) {
							document.getElementById("rcsad_Bottom3").classList.remove("rcsadGhostPosDfp");
						}
						document.dispatchEvent(eventloadedB3DFP);
						dfpPrintLog('eventloadedB3DFP')
					}
				}

				// >> RENDERED BOTTOMLEFT << //

				if (event.slot.getSlotElementId() == "rcsad_BottomLeft") {
					var BlcontainsAd = !event.isEmpty;
					if (BlcontainsAd == false || event.size[1] == 1) {
						setTimeout(function () {
							if (document.querySelector('#rcsad_BottomLeft').clientHeight <= 40) {
								document.dispatchEvent(eventghostBlDFP);
								document.getElementById("rcsad_BottomLeft").style.display = "none";
								dfpPrintLog('eventghostBlDFP GHOST AFTER 500');
							} else {
								document.dispatchEvent(eventloadedBlDFP);
								dfpPrintLog('eventloadedBlDFP LOADED AFTER 500');
							}
						}, 500);
					} else {
						if (top.RCSAD_sitepage.indexOf("La7.it/") > -1 || top.RCSAD_sitepage.indexOf("tgla7.it/") > -1 || top.RCSAD_sitepage.indexOf("sedanoallegro.it/") > -1 || top.RCSAD_sitepage.indexOf("leitv.it/") > -1) {
							document.getElementById("rcsad_BottomLeft").classList.remove("rcsadGhostPosDfp");
						}
						document.dispatchEvent(eventloadedBlDFP);
						dfpPrintLog('eventloadedBlDFP')
					}
				}

				// >> RENDERED BOTTOMRIGHT << //

				if (event.slot.getSlotElementId() == "rcsad_BottomRight") {
					var BrcontainsAd = !event.isEmpty;
					if (BrcontainsAd == false || event.size[1] == 1) {
						setTimeout(function () {
							if (document.querySelector('#rcsad_BottomRight').clientHeight <= 40) {
								document.dispatchEvent(eventghostBrDFP);
								document.getElementById("rcsad_BottomRight").style.display = "none";
								dfpPrintLog('eventghostBrDFP GHOST AFTER 500');
							} else {
								document.dispatchEvent(eventloadedBrDFP);
								dfpPrintLog('eventloadedBrDFP LOADED AFTER 500');
							}
						}, 500);
					} else {
						if (top.RCSAD_sitepage.indexOf("La7.it/") > -1 || top.RCSAD_sitepage.indexOf("tgla7.it/") > -1 || top.RCSAD_sitepage.indexOf("sedanoallegro.it/") > -1 || top.RCSAD_sitepage.indexOf("leitv.it/") > -1) {
							document.getElementById("rcsad_BottomRight").classList.remove("rcsadGhostPosDfp");
						}
						document.dispatchEvent(eventloadedBrDFP);
						dfpPrintLog('eventloadedBrDFP')
					}
				}

				// >> RENDERED MIDDLE << //

				if (event.slot.getSlotElementId() == "rcsad_Middle") {
					var MdcontainsAd = !event.isEmpty;
					if (MdcontainsAd == false || event.size[1] == 1) {
						setTimeout(function () {
							if (document.querySelector('#rcsad_Middle').clientHeight <= 40) {
								document.dispatchEvent(eventghostMdDFP);
								document.getElementById("rcsad_Middle").style.display = "none";
								dfpPrintLog('eventghostMdDFP GHOST AFTER 500');
							} else {
								document.dispatchEvent(eventloadedMdDFP);
								dfpPrintLog('eventloadedMdDFP LOADED AFTER 500');
							}
						}, 500);
					} else {
						if (top.RCSAD_sitepage.indexOf("La7.it/") > -1 || top.RCSAD_sitepage.indexOf("tgla7.it/") > -1 || top.RCSAD_sitepage.indexOf("sedanoallegro.it/") > -1 || top.RCSAD_sitepage.indexOf("leitv.it/") > -1) {
							document.getElementById("rcsad_Middle").classList.remove("rcsadGhostPosDfp");
						}
						document.dispatchEvent(eventloadedMdDFP);
						dfpPrintLog('eventloadedMdDFP')
					}
				}

				// >> RENDERED MIDDLE1 << //

				if (event.slot.getSlotElementId() == "rcsad_Middle1") {
					var Md1containsAd = !event.isEmpty;
					if (Md1containsAd == false || event.size[1] == 1) {
						setTimeout(function () {
							if (document.querySelector('#rcsad_Middle1').clientHeight <= 40) {
								document.dispatchEvent(eventghostMd1DFP);
								document.getElementById("rcsad_Middle1").style.display = "none";
								dfpPrintLog('eventghostMd1DFP GHOST AFTER 500');
							} else {
								document.dispatchEvent(eventloadedMd1DFP);
								dfpPrintLog('eventloadedMd1DFP LOADED AFTER 500');
							}
						}, 500);
					} else {
						if (top.RCSAD_sitepage.indexOf("La7.it/") > -1 || top.RCSAD_sitepage.indexOf("tgla7.it/") > -1 || top.RCSAD_sitepage.indexOf("sedanoallegro.it/") > -1 || top.RCSAD_sitepage.indexOf("leitv.it/") > -1) {
							document.getElementById("rcsad_Middle1").classList.remove("rcsadGhostPosDfp");
						}
						document.dispatchEvent(eventloadedMd1DFP);
						dfpPrintLog('eventloadedMd1DFP')
					}
				}

				// >> RENDERED TOPPER << //

				if (event.slot.getSlotElementId() == "rcsad_Topper") {
					var TprcontainsAd = !event.isEmpty;
					if (TprcontainsAd == false || event.size[1] == 1) {
						setTimeout(function () {
							var slotCurrentGhost = document.querySelector('#rcsad_Topper');
							if (slotCurrentGhost && slotCurrentGhost.clientHeight <= 40) {
								document.dispatchEvent(eventghostTprDFP);
								document.getElementById("rcsad_Topper").style.display = "none";
								dfpPrintLog('eventghostTprDFP GHOST AFTER 500');
							} else {
								document.dispatchEvent(eventloadedTprDFP);
								dfpPrintLog('eventloadedTprDFP LOADED AFTER 500');
							}
						}, 500);
					} else {
						document.dispatchEvent(eventloadedTprDFP);
						dfpPrintLog('eventloadedTprDFP')
					}

				}
			});
}

		// CONFIGURAZIONE ADHOC PER VIDEO CORRIERE

		if (typeof top.sezione != "undefined" && top.sezione == "video") {
			googletag.companionAds().setRefreshUnfilledSlots(true);
			googletag.pubads().enableVideoAds();
		}

		// CONFIGURAZIONE DEFAULT

		googletag.pubads().enableSingleRequest();
		googletag.pubads().disableInitialLoad(); // BATCH DISABILITO INITIAL LOAD
		googletag.pubads().enableAsyncRendering();

		// CONFIGURAZIONE PPID DA COOKIE s_fid
		if (checkConfig('ppid') == true && dfpGetCookie("s_fid") !== null && dfpGetCookie('s_fid') !== "" && typeof utag != "undefined") {
			if (typeof utag.ut.md5 != "undefined") {
				dfpPrintLog('[s_fid] hash_md5: ' + utag.ut.md5.MD5(_tmsTools.getCookie('s_fid')).toString());
				googletag.pubads().setPublisherProvidedId(utag.ut.md5.MD5(_tmsTools.getCookie('s_fid')).toString());
			}
		}

		// LAZY LOAD POSIZIONI SRA BTF
		if (checkConfig('lazyLoadDfp')==true) {
			var fetchMarginPercentVar = 200;
			var renderMarginPercentVar= 30;
			var mobileScalingVar= 1.0;
			
			// check parametri custom lazy load
			var lazyLoadParams = getLazyLoadParams();
			if (lazyLoadParams) {
				fetchMarginPercentVar = lazyLoadParams.fetchMarginPercentDfp;
				renderMarginPercentVar = lazyLoadParams.renderMarginPercentDfp;
				mobileScalingVar = lazyLoadParams.mobileScalingDfp;
			}
			
			googletag.pubads().enableLazyLoad({
				fetchMarginPercent: fetchMarginPercentVar,
				renderMarginPercent: renderMarginPercentVar,
				mobileScaling: mobileScalingVar
			});
		}

		// PARAMETRI CUSTOM  SEZIONE //

		if (window.location.pathname == "/test/indexTestDfpPoc-HPsez.shtml" || window.location.pathname == "/test/indexTestDfpPoc-FOGLIA.shtml") {
			googletag.pubads().setTargeting('Sezione', 'listino auto')
		}

		// PARAMETRI CUSTOM RANDOM CREATIVE TARGETING

		window.soggettoKValue = Math.floor(Math.random() * 4) + 1;
		googletag.pubads().setTargeting("soggetto",  window.soggettoKValue.toString());

		// PARAMETRI CUSTOM ADMANTX DFP //

		if (typeof admantx_var != "undefined" && typeof admantx_var.admants != "undefined") {
			dfpPrintLog('ADMANT_VAR_fx definito Aggiungo admflag; valore POPOLATO');
			googletag.pubads().setTargeting('admflag', 'valued')

			var DFP_queryadmant = [];

			function admantYoN(element, i, array) {
				if (admantx_var.admants[i].name.toUpperCase().indexOf("ADV_") != "-1" || admantx_var.admants[i].name.toUpperCase().indexOf("S_") != "-1") {
					DFP_queryadmant.push(admantx_var.admants[i].name)
				}
			}
			admantx_var.admants.forEach(admantYoN);
			dfpPrintLog("ADMANT_VAR_fx DFP_query: " + DFP_queryadmant);
			googletag.pubads().setTargeting('admant', DFP_queryadmant);


		} else {
			dfpPrintLog('ADMANT_VAR_fx indefinito: non aggiungo admflag');
		}

		// PARAMETRO CUSTOM ADVDFPREFRESH //

		if (dfpGetCookie('refreshAdvCookie') != null) {
			var cValue = document.location.origin + document.location.pathname;
			if (dfpGetCookie('refreshAdvCookie').indexOf('refresh_ce') > -1 && dfpGetCookie('refreshAdvCookie').indexOf(cValue) > -1) {
				dfpPrintLog('ADVDFPREFRESH AUTOREFRESH: Passo keyValue di autorefresh');
				if(document.hidden){
					googletag.pubads().setTargeting('advDFPRefresh', 'autoRefreshNonInView');
				}else{
					googletag.pubads().setTargeting('advDFPRefresh', 'autoRefreshInView');
				}
			} else if (dfpGetCookie('refreshAdvCookie') == cValue) {
				dfpPrintLog('ADVDFPREFRESH HUMANREFRESH: Passo keyValue di humanrefresh');
				if(document.hidden){
					googletag.pubads().setTargeting('advDFPRefresh', 'autoRefreshNonInView');
				}else{
					googletag.pubads().setTargeting('advDFPRefresh', 'humanRefresh');
				}
			} else {
				dfpPrintLog('!!! FAIL !!!');
			}
		}

		// PARAMETRI CUSTOM  tipo_pagina PAGINA  //
		if (typeof top.im_rcs_tipologia != "undefined") { // GDS STAGING
			switch (top.im_rcs_tipologia.toLowerCase()) {
				case "gallery":
				top.tipopaginavalue = "photogallery";
				break;
				default:
				top.tipopaginavalue = top.im_rcs_tipologia.toLowerCase();
			}
		} else if (typeof top.RCSAD_tipo_pagina != "undefined") { // OPEN DEV
			switch (top.RCSAD_tipo_pagina.toLowerCase()) {
				case "homepage":
				top.tipopaginavalue = "homepage";
				break;
				case "articolo":
				top.tipopaginavalue = "articolo";
				break;
				default:
				top.tipopaginavalue = top.RCSAD_tipo_pagina;
			}
		} else if (typeof top.tipologia != "undefined") { // LA SICILIA
			switch (top.tipologia.toLowerCase()) {
				case "gallery":
				top.tipopaginavalue = "photogallery";
				break;
				default:
				top.tipopaginavalue = tipologia.toLowerCase();
			}
		} else if (typeof top.tipo_pagina != "undefined") {
			if (typeof window.LA7_pagetype == "undefined") {
				// TUTTO (NON LA7)
				switch (top.tipo_pagina.toLowerCase()) {
					case "home":
					top.tipopaginavalue = "homepage";
					break;
					case "fotogallery":
					top.tipopaginavalue = "photogallery";
					break;
					case "bigcard":
					top.tipopaginavalue = "photogallery";
					break;
					case "gallery":
					top.tipopaginavalue = "photogallery";
					break;
					default:
					top.tipopaginavalue = top.tipo_pagina;
				}
			} else {
				if (RCSAD_sitepage.indexOf("leitv.it/") > -1) {
					// LEITV TIPOPAGINA = LAYOUT
					if (typeof window.La7_layout != "undefined") {
						switch (top.LA7_pagetype.toLowerCase()) {
							case "homepage":
							case "listing":
								top.tipopaginavalue = "homepage";
								break;
							case "video":
								top.tipopaginavalue = "articolo";
								break;
							default:
							top.tipopaginavalue = top.tipo_pagina;
						}
					} else {
						// LEITV TIPOPAGINA = TIPOPAGINA
						top.tipopaginavalue = top.tipo_pagina;
					}
				} else {
					// LA7 - TG LA7
					switch (window.LA7_pagetype.toLowerCase()) {
						case "photogallery":
						top.tipopaginavalue = "photogallery";
						break;
						default:
						top.tipopaginavalue = window.LA7_pagetype;
					}
				}
			}
		} else if (typeof RCSAD_type_page != "undefined") {
			// DDAY
			switch (top.RCSAD_type_page.toLowerCase()) {
				case "fotogallery":
				top.tipopaginavalue = "photogallery";
				break;
				case "gallery_mobile":
				top.tipopaginavalue = "photogallery";
				break;
				case "bigcard":
				top.tipopaginavalue = "photogallery";
				break;
				case "gallery":
				top.tipopaginavalue = "photogallery";
				break;
				default:
				top.tipopaginavalue = RCSAD_type_page;
			}
		} else {
			top.tipopaginavalue = "nondefinito";
		}

		googletag.pubads().setTargeting('tipo_pagina', top.tipopaginavalue.toLowerCase())

		// TARGETING COOKIE OMNITOUR UESeg  //

		if (checkConfig('omnitourCookie')==true) {
			googletag.pubads().setTargeting('RCSadobe', _tmsTools.getCookie('UESeg'));
			dfpPrintLog('RCSadobe DFP: '+_tmsTools.getCookie('UESeg'));
		}

		// PARAMETRI CUSTOM  ESCLUSIONE EXPANDING //

		if (!deviceAdvFreq.mobile() && window.location.hostname != "www.kelkoo.it" && top.tipopaginavalue != "photogallery" && top.tipopaginavalue != "bigcard" && top.tipopaginavalue != "video" && top.tipopaginavalue != "pag_con_video" /*&& typeof window.LA7_pagetype == "undefined"*/ ) {
			if (typeof window.LA7_pagetype != "undefined" && window.LA7_pagetype != "homepage" && window.LA7_pagetype != "listing") {
				if (window.LA7_pagetype == "") {
					dfpPrintLog("DFP LA7 pageType VUOTO")
				}
				googletag.pubads().setTargeting('expandingADV', "false") // LA7/SEDANO TUTTE PAGE ESCLUSE HP - EXPANDING=FALSE
			} else {
				googletag.pubads().setTargeting('expandingADV', "true") // LA7/SEDANO TUTTE HP - EXPANDING=TRUE
			}
		} else {
			googletag.pubads().setTargeting('expandingADV', "false") // ALTRI CASI - EXPANDING=FALSE
		}

		// PARAMETRI CUSTOM  gestione_AMP (SEMPRE FALSE SU TEALIUM)  //

		googletag.pubads().setTargeting('gestione_AMP', "false")

		// CUSTOM PARAMS SETTING OPEN DEV
		if (top.location.href.indexOf("rettiliani.it/dev") > -1) {
			top.tipopaginavalue === 'homepage' ? googletag.pubads().setTargeting('video_adv', "false") : googletag.pubads().setTargeting('video_adv', "true");
			googletag.pubads().setTargeting('gestione_AMP', "true")
		}

		// PARAMETRI CUSTOM  URL (KW1 NEW CON KNAME TERMINI URL) //

	

		var keywordUrlValue = getParameterByNameKwUrl('keyword');
		var urlPageKvalue = window.location.href.toLowerCase().replace(/[^a-z]/g, ' ').replace(/\s\s+/g, ' ').split(' ');
		if (keywordUrlValue != null) {
			urlPageKvalue.push(keywordUrlValue.replace(/,/g, ' ').split(' '));
			googletag.pubads().setTargeting('keyword', urlPageKvalue);
		} else {
			googletag.pubads().setTargeting('keyword', urlPageKvalue);
		}

		// PARAMETRI CUSTOM  META SPECIALE ADV (KW2) //

		window.metaKeywords = function () {
			metaCollection = document.getElementsByTagName('meta');
			kw2 = "";
			for (i = 0; i < metaCollection.length; i++) {
				if (metaCollection[i].name == "specialeadv") {
					kw2 = metaCollection[i].content;
				}
			}
			return kw2;
		}
		window.metaKeywords();
		if (kw2 != "") {
			googletag.pubads().setTargeting('metatag', kw2);
		}

		// PARAMETRI CUSTOM  URL PER TEST LUNGHEZZA STRINGA CHIAMATA (KW3) //

		var stringUrlValue = getParameterByNameKwUrl('urldfp');
		if (stringUrlValue != null && stringUrlValue == "true") {
			googletag.pubads().setTargeting('urldfp', window.location.href)
		}

		// PARAMETRI CUSTOM  APP DISPLAY REQUEST //

		if (typeof window.RCSAD_app !== "undefined") {
			googletag.pubads().setTargeting('gestione_APP', "true")
		} else {
			googletag.pubads().setTargeting('gestione_APP', "false")
		}

		// COLLASSO DIV VUOTI (EMPTY TRUE)
		// LEITV-78
		if (top.RCSAD_sitepage.indexOf("leitv.it/") < 0) {
			googletag.pubads().collapseEmptyDivs();
		}

		// PARAMETRI CUSTOM  topleft+top //

		if (!deviceAdvFreq.mobile() && RCSAD_listpos.indexOf('Top,')>-1 && RCSAD_listpos.indexOf('TopLeft,')>-1) {
			googletag.pubads().setTargeting('top&topleft', 'true')
		} else {
			googletag.pubads().setTargeting('top&topleft', 'false')
		}

		// KVALUE INVENTORY TYPE
		if (!deviceAdvFreq.mobile()) {
			googletag.pubads().setTargeting('inventory_type', "web")
		} else {
			googletag.pubads().setTargeting('inventory_type', "mWeb")
		}

		// KVALUE POSITION1
		if ( _tmsTools.getCookie('introP1delivered') === '1' ) {
			googletag.pubads().setTargeting('pos1', "false");
		} else {
			googletag.pubads().setTargeting('pos1', "true");
		}

		// REFRESH PER POSIZIONI SOLO SE DIVERSO DA SEZIONE VIDEO, DOVE NON ESEGUO LA REFRESH

		googletag.enableServices();

		/************************************ LATENCY START ************************/
		if (checkConfig("latency") == true) {
			/* Fire multiple pixels, one per loaded ad */
			/* Check storage and googletag availability, just in case */
			if (typeof (Storage) != 'undefined' && typeof (googletag) != 'undefined') {
				if (window.localStorage.getItem('kxrcs_segs') !== null) {
					dfpPrintLog('kxrcs_segs presente');
					/* Only for 1% of the devices (Control Group Random 9 DL + Second Control Group Random 9 DL) */
					if (window.localStorage.getItem('kxrcs_segs').indexOf('st0y2djqb') >= 0 && (window.localStorage.getItem('kxrcs_segs').indexOf('st00cjeum') >= 0 || window.localStorage.getItem('kxrcs_segs').indexOf('st0z9z9x9') >= 0 || window.localStorage.getItem('kxrcs_segs').indexOf('st0z35dv2') >= 0 || window.localStorage.getItem('kxrcs_segs').indexOf('st0zypm02') >= 0 || window.localStorage.getItem('kxrcs_segs').indexOf('st0zq1q7w') >= 0)) {
						/* Global data */
						var _g_data = {};
						_g_data.start = Date.now();
						_g_data.slotInfo = {};
						/* Listen RenderEndedEvent: This event is fired when the creative code is injected into a slot.
						This event will occur before the creative's resources are fetched, so the creative may not be visible yet. */
						var ignoreLatencyLocalSlot = false;
						googletag.pubads().addEventListener('slotRenderEnded', function (event) {
							if (event.slot.getAdUnitPath().indexOf('35821442') > -1) {
								var obj = {};
								obj.render = Date.now();
								obj.lineItemId = event.lineItemId;
								obj.advertiserId = event.advertiserId;
								obj.creativeId = event.creativeId;
								obj.adunitpath = event.slot.getAdUnitPath();
								obj.fromStart = 0;
								obj.fromRender = 0;
								_g_data.slotInfo[event.slot.getSlotElementId()] = obj;
							} else {
								dfpPrintLog('Local slot. NO TRACK');
								ignoreLatencyLocalSlot = true;
							}

						});
						if (!ignoreLatencyLocalSlot) {
							/* Listen OnloadEvent: This event is fired when the creative's iframe fires its load event.
							When rendering rich media ads in sync rendering mode, no iframe is used so no SlotOnLoadEvent will be fired. */
							googletag.pubads().addEventListener('slotOnload', function (event) {
								if (typeof (_g_data.slotInfo[event.slot.getSlotElementId()]) != 'undefined') {
									_g_data.slotInfo[event.slot.getSlotElementId()].fromStart = (Date.now() - _g_data.start);
									_g_data.slotInfo[event.slot.getSlotElementId()].fromRender = (Date.now() - _g_data.slotInfo[event.slot.getSlotElementId()].render);
									if (typeof (_g_data.slotInfo[event.slot.getSlotElementId()].lineItemId) != 'undefined') {
										(new Image()).src = '//beacon.krxd.net/event.gif?event_id=MFbB4CNJ&dlrcs=' + encodeURIComponent(encodeURIComponent(
											'li=' + _g_data.slotInfo[event.slot.getSlotElementId()].lineItemId +
											'&ad=' + _g_data.slotInfo[event.slot.getSlotElementId()].advertiserId +
											'&cr=' + _g_data.slotInfo[event.slot.getSlotElementId()].creativeId +
											'&au=' + _g_data.slotInfo[event.slot.getSlotElementId()].adunitpath +
											'&lt=' + _g_data.slotInfo[event.slot.getSlotElementId()].fromRender +
											'&ts=' + Date.now().toString() +
											'&url=' + encodeURIComponent(window.location.href)
											));
									}
								}
							});
						}
					} else {
						dfpPrintLog('kxrcs_segs NON presente');
					}
				}
			}
		}
		/************************************ LATENCY END ************************/


		setTimeout(function () {
			if (typeof top.sezione == "undefined" || top.sezione != "video") {
                if (checkConfig('prebid') == false && checkConfig('disabledGptOriginalRefresh') == false) {
                    googletag.pubads().refresh(gptadslotsSRA); // BATCH REFRESH POSIZIONI IN SRA TRANNE CHE SPETTACOLI (PREBID)
                }
				dfpPrintLog('PREBID DFPTAG refresh chiamata DFP originale');
			} else {
				dfpPrintLog('DFPTAG NON refresh sezione VIDEO 0ms setTimeout');
			}
		}, 0);
		document.dispatchEvent(eventDFPready);
		dfpPrintLog('eventDFPready');
	});

	// START PREBID //

	if (checkConfig('prebid') == true) {


		/**
		 *
		 *	IMPORTANT: to update prebid in prod there's also to let the videoplayer team know,
		 *  		   they have to change the same string too since they load it before us most of the time
		 *
		 *	TESTING: overwrite prebid version with query param prebid-version=prebidX.XX.X.js, make sure it's available in this repo
		 *
		 */

		var prebidVersion = ((document.location.search.match('prebid-version=(.*?)($|&)') || [])[1] || 'prebid8.19.0.js');
		dfpPrintLog('prebidVersion', prebidVersion);

		function loadScriptPbjs(src, callback) {

			if ( !!document.querySelector('[src*="/rcs_adv/v1/distro/dfp/common/prebid"], [src*="prebid.js"]') ) {

				dfpPrintLog('prebid already in page');
				setTimeout, 0);

			} else {

				dfpPrintLog('prebid loading js');

				var script = document.createElement('script');
				script.src = src;
				script.onload =;

				document.head.append(script);

			}

		}

		function pbjsCheckCallBck(consent) {

			consent = ( typeof consent !== 'undefined' ) ? consent : true;

			loadScriptPbjs('//components2.rcsobjects.it/rcs_adv/v1/distro/dfp/common/' + prebidVersion + '?v=0', function (script) {

				dfpPrintLog('prebid cmp-2 load pbjs');

				if ( consent && checkConfig('prebid') === true && checkConfig('amazon') === true ) {
					dfpPrintLog('prebid cmp-2 LOADED! pbjs call AMAZON!');
					executeParallelAuctionAlongsidePrebid()
				}

			});

		}

		if (typeof __tcfapi !== "undefined") {
			__tcfapi('addEventListener', 2, function (tcData, success) {
				if (success && tcData.eventStatus === 'tcloaded') {
					// do something with tcData.tcString
					pbjsCheckCallBck();
					dfpPrintLog("cmp-2 success cmp tcloaded  => adrequest");
					// remove the ourself to not get called more than once
					__tcfapi('removeEventListener', 2,, tcData.listenerId);
				} else {
					// no success get consent => adrequest
					pbjsCheckCallBck(false);
					dfpPrintLog("cmp-2 no success get consent => adrequest");
				}
			});
		} else {
			if (typeof cpmt != "undefined") {
				dfpPrintLog('prebid cmp-2 cpmt defined');
				if (cpmt.data.accepted === true) {
					dfpPrintLog('prebid cmp-2 cpmt.data.accepted === true');
					pbjsCheckCallBck()
				} else {
					document.addEventListener("cpAccepted",);
				}
			} else {
				var timesRunPbjs = 0;
				var intervalPbjs = setInterval(function () {
					timesRunPbjs += 1;
					if (typeof __tcfapi !== "undefined" && typeof pbCallStarted === "undefined") {
						clearInterval(intervalPbjs);
						pbjsCheckCallBck();
						dfpPrintLog('prebid cmp-2 __tcfapi defined clearInterval, pbjs request');
						pbCallStarted = true
					}
					if (timesRunPbjs === 20) {
						clearInterval(intervalPbjs);
						dfpPrintLog('prebid cmp-2 clearInterval')
					}
				}, 100);
				document.addEventListener("cpAccepted", function () {
					if (typeof pbCallStarted === "undefined") {
						dfpPrintLog('prebid cmp-2 cpmt not defined CMP EVENT READY!');
						pbjsCheckCallBck();
						pbCallStarted = true
					}
				});
			}
		}

		// PREBID SITE-ID/ZONE-ID MAPPING
		if (window.RCSAD_sitepage.indexOf("gds.it") > -1) {
			// GDS
			if (!deviceAdvFreq.mobile()) {
				appnexusPlIdMap_Tl = "14690419";
				appnexusPlIdMap_F1 = "14690420";
				siteIdIndexExchange = "630754";
			} else {
				appnexusPlIdMap_Tl = "14690422";
				appnexusPlIdMap_F1 = "14690423";
				siteIdIndexExchange = "630768";
			}
			appnexusPlIdMap_BTF = "14690421";
			siteId_PrbRcs = '235918';
			zoneId_PrbRcs_Tl_F1 = '1162960';
			zoneId_PrbRcs_BTF = '1162962';
			zoneId_PrbRcs_rubistitial = 'nd';
		} else if (window.RCSAD_sitepage.indexOf("gazzettadelsud.it") > -1) {
			// GAZZETTA DEL SUD
			if (!deviceAdvFreq.mobile()) {
				appnexusPlIdMap_Tl = "14690460";
				appnexusPlIdMap_F1 = "14690461";
				siteIdIndexExchange = "630758";
			} else {
				appnexusPlIdMap_Tl = "14690463";
				appnexusPlIdMap_F1 = "14690464";
				siteIdIndexExchange = "630767";
			}
			appnexusPlIdMap_BTF = "14690462";
			siteId_PrbRcs = '235914';
			zoneId_PrbRcs_Tl_F1 = '1162940';
			zoneId_PrbRcs_BTF = '1162946';
			zoneId_PrbRcs_rubistitial = 'nd';
		} else if (window.RCSAD_sitepage.indexOf("La7.it") > -1 || window.RCSAD_sitepage.indexOf("tgla7.it") > -1) {
			// LA7-TGLA7
			if (!deviceAdvFreq.mobile()) {
				appnexusPlIdMap_Tl = "14690424";
				appnexusPlIdMap_F1 = "14690425";
				siteIdIndexExchange = "630744";
			} else {
				appnexusPlIdMap_Tl = "14690427";
				appnexusPlIdMap_F1 = "14690428";
				siteIdIndexExchange = "630770";
			}
			appnexusPlIdMap_BTF = "14690426";
			siteId_PrbRcs = '235942';
			zoneId_PrbRcs_Tl_F1 = '1163022';
			zoneId_PrbRcs_Top = window.RCSAD_sitepage.indexOf("La7.it") > -1 ? '1929852' : '1929880';
			zoneId_PrbRcs_BTF = '1163024';
			zoneId_PrbRcs_rubistitial = window.RCSAD_sitepage.indexOf("tgla7.it") > -1 ? '2093574' : '2093536';
		} else if (window.RCSAD_sitepage.indexOf("lasicilia.it") > -1) {
			// LA SICILIA
			if (!deviceAdvFreq.mobile()) {
				appnexusPlIdMap_Tl = "14690455";
				appnexusPlIdMap_F1 = "14690456";
				siteIdIndexExchange = "630753";
			} else {
				appnexusPlIdMap_Tl = "14690458";
				appnexusPlIdMap_F1 = "14690459";
				siteIdIndexExchange = "630771";
			}
			appnexusPlIdMap_BTF = "14690457";
			siteId_PrbRcs = '235940';
			zoneId_PrbRcs_Tl_F1 = '1163018';
			zoneId_PrbRcs_Top = '1929864';
			zoneId_PrbRcs_BTF = '1163020';
			zoneId_PrbRcs_rubistitial = '2093544';
		} else if (window.RCSAD_sitepage.indexOf("unionesarda.it") > -1) {
			// UNIONESARDA
			if (!deviceAdvFreq.mobile()) {
				appnexusPlIdMap_Tl = "14690450";
				appnexusPlIdMap_F1 = "14690451";
				siteIdIndexExchange = "630464";
			} else {
				appnexusPlIdMap_Tl = "14690453";
				appnexusPlIdMap_F1 = "14690454";
				siteIdIndexExchange = "630779";
			}
			appnexusPlIdMap_BTF = "14690452";
			siteId_PrbRcs = '235938';
			zoneId_PrbRcs_Tl_F1 = '1163008';
			zoneId_PrbRcs_BTF = '1162988';
			zoneId_PrbRcs_rubistitial = '2093572';
		} else if (window.RCSAD_sitepage.indexOf("sedanoallegro.it") > -1) {
			// SEDANO ALLEGRO
			if (!deviceAdvFreq.mobile()) {
				appnexusPlIdMap_Tl = "14690467";
				appnexusPlIdMap_F1 = "14690474";
				siteIdIndexExchange = "630755";
			} else {
				appnexusPlIdMap_Tl = "14690490";
				appnexusPlIdMap_F1 = "14690491";
				siteIdIndexExchange = "630777";
			}
			appnexusPlIdMap_BTF = "14690481";
			siteId_PrbRcs = '235932';
			zoneId_PrbRcs_Tl_F1 = '1162986';
			zoneId_PrbRcs_Top = '1929876';
			zoneId_PrbRcs_BTF = '1162992';
			zoneId_PrbRcs_rubistitial = '2093568';
		} else if (window.RCSAD_sitepage.indexOf("leitv.it") > -1) {
			// LEI TV
			if (!deviceAdvFreq.mobile()) {
				appnexusPlIdMap_Tl = "14690429";
				appnexusPlIdMap_F1 = "14690430";
				siteIdIndexExchange = "630760";
			} else {
				appnexusPlIdMap_Tl = "14690432";
				appnexusPlIdMap_F1 = "14690433";
				siteIdIndexExchange = "630773";
			}
			appnexusPlIdMap_BTF = "14690431";
			siteId_PrbRcs = '235922';
			zoneId_PrbRcs_Tl_F1 = '1162966';
			zoneId_PrbRcs_Top = '1929870';
			zoneId_PrbRcs_BTF = '1162968';
			zoneId_PrbRcs_rubistitial = '2093558';
		} else if (window.RCSAD_sitepage.indexOf("dday.it") > -1) {
			// DDAY
			if (!deviceAdvFreq.mobile()) {
				appnexusPlIdMap_Tl = "14690469";
				appnexusPlIdMap_F1 = "14690476";
				siteIdIndexExchange = "630748";
			} else {
				appnexusPlIdMap_Tl = "14690494";
				appnexusPlIdMap_F1 = "14690495";
				siteIdIndexExchange = "630765";
			}
			appnexusPlIdMap_BTF = "14690483";
			siteId_PrbRcs = '235920';
			zoneId_PrbRcs_Tl_F1 = '1162956';
			zoneId_PrbRcs_Top = '1929830';
			zoneId_PrbRcs_BTF = '1162958';
			zoneId_PrbRcs_rubistitial = '2087864';
		} else if (window.RCSAD_sitepage.indexOf("dmove.it") > -1) {
			// DMOVE
			if (!deviceAdvFreq.mobile()) {
				appnexusPlIdMap_Tl = "19110238";
				appnexusPlIdMap_F1 = "19110236";
			} else {
				appnexusPlIdMap_Tl = "19110240";
				appnexusPlIdMap_F1 = "19110239";
			}
			appnexusPlIdMap_BTF = "19110237";
			siteId_PrbRcs = '323982';
			zoneId_PrbRcs_Tl_F1 = '1686782';
			zoneId_PrbRcs_BTF = '1686784';
			zoneId_PrbRcs_rubistitial = '2087866';
		} else if (window.RCSAD_sitepage.indexOf("lasiciliaweb.it") > -1) {
			// SICILIAWEB
			if (!deviceAdvFreq.mobile()) {
				appnexusPlIdMap_Tl = "15056928";
				appnexusPlIdMap_F1 = "15056926";
				siteIdIndexExchange = "630759";
			} else {
				appnexusPlIdMap_Tl = "15056930";
				appnexusPlIdMap_F1 = "15056929";
				siteIdIndexExchange = "630772";
			}
			appnexusPlIdMap_BTF = "15056927";
			siteId_PrbRcs = '244588';
			zoneId_PrbRcs_Tl_F1 = '1210104';
			zoneId_PrbRcs_Top = '1929868';
			zoneId_PrbRcs_BTF = '1210106';
			zoneId_PrbRcs_rubistitial = '2093550';
		} else if (window.RCSAD_sitepage.indexOf("lagazzettadelmezzogiorno.it") > -1) {
			// GAZZETTADELMEZZOGIORNO
			if (!deviceAdvFreq.mobile()) {
				appnexusPlIdMap_Tl = "15056933";
				appnexusPlIdMap_F1 = "15056931";
			} else {
				appnexusPlIdMap_Tl = "15056935";
				appnexusPlIdMap_F1 = "15056934";
			}
			appnexusPlIdMap_BTF = "15056932";
			siteId_PrbRcs = '244592';
			zoneId_PrbRcs_Tl_F1 = '1210114';
			zoneId_PrbRcs_Top = '1929858';
			zoneId_PrbRcs_BTF = '1210118';
			zoneId_PrbRcs_rubistitial = '2093538';
		} else if (window.RCSAD_sitepage.indexOf("open.online") > -1) {
			// OPEN
			if (!deviceAdvFreq.mobile()) {
				appnexusPlIdMap_Tl = "20925644";
				appnexusPlIdMap_F1 = "20925641";
				siteIdIndexExchange = "630747";
			} else {
				appnexusPlIdMap_Tl = "20925649";
				appnexusPlIdMap_F1 = "20925646";
				siteIdIndexExchange = "630776";
			}
			appnexusPlIdMap_BTF = "15056932";
			siteId_PrbRcs = '361508';
			zoneId_PrbRcs_Tl_F1 = '1952380';
			zoneId_PrbRcs_BTF = '1952382';
			zoneId_PrbRcs_rubistitial = '2093566';
		} else if (window.RCSAD_sitepage.indexOf("ilbianconero.com") > -1) {
			// IlBiancoNero
			if ( !deviceAdvFreq.mobile() ) {
				appnexusPlIdMap_Tl = "24675392";
				appnexusPlIdMap_F1 = "24675392";
				siteIdIndexExchange = "671423";
			} else {
				appnexusPlIdMap_Tl = "24675392";
				appnexusPlIdMap_F1 = "24675392";
		siteIdIndexExchange = "671425";
			}
			appnexusPlIdMap_BTF = "24675392";
			siteId_PrbRcs = '381938';
			zoneId_PrbRcs_Tl_F1 = '2362220';
			zoneId_PrbRcs_BTF = '2362220';
			zoneId_PrbRcs_rubistitial = '2362224';
		} else if (window.RCSAD_sitepage.indexOf("sosfanta.calciomercato.com") > -1) {
			// SOS Fanta
			if ( !deviceAdvFreq.mobile() ) {
				appnexusPlIdMap_Tl = "24675391";
				appnexusPlIdMap_F1 = "24675391";
				siteIdIndexExchange = "800408";
			} else {
				appnexusPlIdMap_Tl = "24675391";
				appnexusPlIdMap_F1 = "24675391";
		siteIdIndexExchange = "800409";
			}
			appnexusPlIdMap_BTF = "24675391";
			siteId_PrbRcs = '417800';
			zoneId_PrbRcs_Tl_F1 = '2362206';
			zoneId_PrbRcs_BTF = '2362206';
			zoneId_PrbRcs_rubistitial = '2362214';
		} else if (window.RCSAD_sitepage.indexOf("calciomercato.com") > -1) {
			// Calciomercato
			if ( !deviceAdvFreq.mobile() ) {
				appnexusPlIdMap_Tl = "24675388";
				appnexusPlIdMap_F1 = "24675388";
				siteIdIndexExchange = "671422";
			} else {
				appnexusPlIdMap_Tl = "24675388";
				appnexusPlIdMap_F1 = "24675388";
		siteIdIndexExchange = "671424";
			}
			appnexusPlIdMap_BTF = "24675388";
			siteId_PrbRcs = '381936';
			zoneId_PrbRcs_Tl_F1 = '2362192';
			zoneId_PrbRcs_BTF = '2362192';
			zoneId_PrbRcs_rubistitial = '2362198';
		} else {
			// non definito
			siteId_PrbRcs = 'siteId_nondefinito';
			zoneId_PrbRcs_Tl_F1 = 'zoneId_ATF_nondefinito';
			zoneId_PrbRcs_Top = 'zoneId_Top_nondefinito';
			zoneId_PrbRcs_BTF = 'zoneId_BTF_nondefinito';
			zoneId_PrbRcs_rubistitial = 'zoneId_rubistitial_nondefinito';
		}

		// PREBID MAP SIZE

		// SLOT PUBMATIC
		adSlotPbMtc_topleft = RCSAD_sitepage + "/" + "TopLeft";
		adSlotPbMtc_top = top.RCSAD_sitepage + "/" + "Top";
		adSlotPbMtc_position1 = top.RCSAD_sitepage + "/" + "Position1";
		adSlotPbMtc_frame1 = top.RCSAD_sitepage + "/" + "Frame1";

		if ( checkSP('ilbianconero.com') ) {
			adSlotPbMtc_position1 = '4387042';
		} else if ( checkSP('sosfanta.calciomercato.com') ) {
			adSlotPbMtc_position1 = '4387044';
		} else if ( checkSP('calciomercato.com') ) {
			adSlotPbMtc_topleft = '4387002';
			adSlotPbMtc_position1 = '4387001';
			adSlotPbMtc_frame1 = '4387041';
		} else if ( checkSP('unionesarda.it') ) {
			adSlotPbMtc_position1 = '3631366';
		} else if ( checkSP('lasicilia.it') ) {
			adSlotPbMtc_position1 = '3631357';
		} else if ( checkSP('dday.it') ) {
			adSlotPbMtc_position1 = '3631347';
		} else if ( checkSP('dmove.it') ) {
			adSlotPbMtc_position1 = '3631348';
		} else if ( checkSP('open.online') ) {
			adSlotPbMtc_position1 = '3631361';
		} else if ( checkSP('leitv.it') ) {
			adSlotPbMtc_position1 = '3631359';
		} else if ( checkSP('sedanoallegro.it') ) {
			adSlotPbMtc_position1 = '3631362';
		}

		// START TEST SKIN PROGRAMMATIC
		if (getParameterByNameKwUrlSwitchAdv('keyword') === "testprebid") {
			siteId_PrbRcs = '52240';
			zoneId_PrbRcs_Tl_F1 = '2148232';
			zoneId_PrbRcs_Top = '2148232';
			adSlotPbMtc_topleft = "4021432";
			adSlotPbMtc_top = "4021432";
			adSlotPbMtc_position1 = "4021433";
			zoneId_PrbRcs_rubistitial = "2180252";
		}
		// FINE TEST SKIN PROGRAMMATIC

		// IMPROVE PLACEMENT ID MAPPING

		var improvePlacementId = [{
			"siteName": "abitare.it",
			"placementId": "22484128",
			"placementName": "abitare.it - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "abitare.it",
			"placementId": "22484264",
			"placementName": "abitare.it - Frame2-X",
			"primariSize": "300x250"
		},
		{
			"siteName": "abitare.it",
			"placementId": "22484173",
			"placementName": "abitare.it - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "abitare.it",
			"placementId": "22484218",
			"placementName": "abitare.it - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "amica.it",
			"placementId": "22484129",
			"placementName": "amica.it - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "amica.it",
			"placementId": "22484265",
			"placementName": "amica.it - Frame2-X",
			"primariSize": "300x250"
		},
		{
			"siteName": "amica.it",
			"placementId": "22484174",
			"placementName": "amica.it - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "amica.it",
			"placementId": "22484219",
			"placementName": "amica.it - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "corriere.it",
			"placementId": "22484130",
			"placementName": "corriere.it - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "corriere.it",
			"placementId": "22484266",
			"placementName": "corriere.it - Frame2-X",
			"primariSize": "300x250"
		},
		{
			"siteName": "corriere.it",
			"placementId": "22484175",
			"placementName": "corriere.it - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "corriere.it",
			"placementId": "22484220",
			"placementName": "corriere.it - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "dday.it",
			"placementId": "22484131",
			"placementName": "dday.it - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "dday.it",
			"placementId": "22484267",
			"placementName": "dday.it - Frame2-X",
			"primariSize": "300x250"
		},
		{
			"siteName": "dday.it",
			"placementId": "22484176",
			"placementName": "dday.it - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "dday.it",
			"placementId": "22484221",
			"placementName": "dday.it - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "freesenzaglutine.it",
			"placementId": "22484132",
			"placementName": "freesenzaglutine.it - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "freesenzaglutine.it",
			"placementId": "22484268",
			"placementName": "freesenzaglutine.it - Frame2-X",
			"primariSize": "300x250"
		},
		{
			"siteName": "freesenzaglutine.it",
			"placementId": "22484177",
			"placementName": "freesenzaglutine.it - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "freesenzaglutine.it",
			"placementId": "22484222",
			"placementName": "freesenzaglutine.it - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "gazzanet.it",
			"placementId": "22484147",
			"placementName": "gazzanet.it - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "gazzanet.it",
			"placementId": "22484283",
			"placementName": "gazzanet.it - Frame2-X",
			"primariSize": "300x250"
		},
		{
			"siteName": "gazzanet.it",
			"placementId": "22484192",
			"placementName": "gazzanet.it - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "gazzanet.it",
			"placementId": "22484238",
			"placementName": "gazzanet.it - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "gazzetta.it",
			"placementId": "22484133",
			"placementName": "gazzetta.it - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "gazzetta.it",
			"placementId": "22484269",
			"placementName": "gazzetta.it - Frame2-X",
			"primariSize": "300x250"
		},
		{
			"siteName": "gazzetta.it",
			"placementId": "22484178",
			"placementName": "gazzetta.it - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "gazzetta.it",
			"placementId": "22484223",
			"placementName": "gazzetta.it - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "gazzettadelsud.it",
			"placementId": "22484134",
			"placementName": "gazzettadelsud.it - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "gazzettadelsud.it",
			"placementId": "22484270",
			"placementName": "gazzettadelsud.it - Frame2-X",
			"primariSize": "300x250"
		},
		{
			"siteName": "gazzettadelsud.it",
			"placementId": "22484179",
			"placementName": "gazzettadelsud.it - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "gazzettadelsud.it",
			"placementId": "22484224",
			"placementName": "gazzettadelsud.it - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "gds.it",
			"placementId": "22484135",
			"placementName": "gds.it - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "gds.it",
			"placementId": "22484271",
			"placementName": "gds.it - Frame2-X",
			"primariSize": "300x250"
		},
		{
			"siteName": "gds.it",
			"placementId": "22484180",
			"placementName": "gds.it - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "gds.it",
			"placementId": "22484225",
			"placementName": "gds.it - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "iodonna.it",
			"placementId": "22484136",
			"placementName": "iodonna.it - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "iodonna.it",
			"placementId": "22484272",
			"placementName": "iodonna.it - Frame2-X",
			"primariSize": "300x250"
		},
		{
			"siteName": "iodonna.it",
			"placementId": "22484181",
			"placementName": "iodonna.it - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "iodonna.it",
			"placementId": "22484226",
			"placementName": "iodonna.it - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "la7.it",
			"placementId": "22484137",
			"placementName": "la7.it - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "la7.it",
			"placementId": "22484273",
			"placementName": "la7.it - Frame2-X",
			"primariSize": "300x250"
		},
		{
			"siteName": "la7.it",
			"placementId": "22484182",
			"placementName": "la7.it - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "la7.it",
			"placementId": "22484227",
			"placementName": "la7.it - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "lasicilia.it",
			"placementId": "22484138",
			"placementName": "lasicilia.it - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "lasicilia.it",
			"placementId": "22484274",
			"placementName": "lasicilia.it - Frame2-X",
			"primariSize": "300x250"
		},
		{
			"siteName": "lasicilia.it",
			"placementId": "22484183",
			"placementName": "lasicilia.it - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "lasicilia.it",
			"placementId": "22484229",
			"placementName": "lasicilia.it - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "lasiciliaweb.it",
			"placementId": "22484139",
			"placementName": "lasiciliaweb.it - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "lasiciliaweb.it",
			"placementId": "22484275",
			"placementName": "lasiciliaweb.it - Frame2-X",
			"primariSize": "300x250"
		},
		{
			"siteName": "lasiciliaweb.it",
			"placementId": "22484184",
			"placementName": "lasiciliaweb.it - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "lasiciliaweb.it",
			"placementId": "22484230",
			"placementName": "lasiciliaweb.it - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "leitv.it",
			"placementId": "22484140",
			"placementName": "leitv.it - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "leitv.it",
			"placementId": "22484276",
			"placementName": "leitv.it - Frame2-X",
			"primariSize": "300x250"
		},
		{
			"siteName": "leitv.it",
			"placementId": "22484185",
			"placementName": "leitv.it - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "leitv.it",
			"placementId": "22484231",
			"placementName": "leitv.it - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "living.corriere.it",
			"placementId": "22484141",
			"placementName": "living.corriere.it - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "living.corriere.it",
			"placementId": "22484277",
			"placementName": "living.corriere.it - Frame2-X",
			"primariSize": "300x250"
		},
		{
			"siteName": "living.corriere.it",
			"placementId": "22484186",
			"placementName": "living.corriere.it - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "living.corriere.it",
			"placementId": "22484232",
			"placementName": "living.corriere.it - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "oggi.it",
			"placementId": "22484142",
			"placementName": "oggi.it - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "oggi.it",
			"placementId": "22484278",
			"placementName": "oggi.it - Frame2-X",
			"primariSize": "300x250"
		},
		{
			"siteName": "oggi.it",
			"placementId": "22484187",
			"placementName": "oggi.it - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "oggi.it",
			"placementId": "22484233",
			"placementName": "oggi.it - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "open.online",
			"placementId": "22484146",
			"placementName": "open.online - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "open.online",
			"placementId": "22484282",
			"placementName": "open.online - Frame2-X",
			"primariSize": "300x250"
		},
		{
			"siteName": "open.online",
			"placementId": "22484191",
			"placementName": "open.online - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "open.online",
			"placementId": "22484237",
			"placementName": "open.online - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "sedanoallegro.it",
			"placementId": "22484143",
			"placementName": "sedanoallegro.it - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "sedanoallegro.it",
			"placementId": "22484279",
			"placementName": "sedanoallegro.it - Frame2-X",
			"primariSize": "300x250"
		},
		{
			"siteName": "sedanoallegro.it",
			"placementId": "22484188",
			"placementName": "sedanoallegro.it - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "sedanoallegro.it",
			"placementId": "22484234",
			"placementName": "sedanoallegro.it - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "style.corriere.it",
			"placementId": "22484144",
			"placementName": "style.corriere.it - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "style.corriere.it",
			"placementId": "22484280",
			"placementName": "style.corriere.it - Frame2-X",
			"primariSize": "300x250"
		},
		{
			"siteName": "style.corriere.it",
			"placementId": "22484189",
			"placementName": "style.corriere.it - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "style.corriere.it",
			"placementId": "22484235",
			"placementName": "style.corriere.it - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "unionesarda.it",
			"placementId": "22484145",
			"placementName": "unionesarda.it - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "unionesarda.it",
			"placementId": "22484281",
			"placementName": "unionesarda.it - Frame2-X",
			"primariSize": "300x250"
		},
		{
			"siteName": "unionesarda.it",
			"placementId": "22484190",
			"placementName": "unionesarda.it - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "unionesarda.it",
			"placementId": "22484236",
			"placementName": "unionesarda.it - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "calciomercato.com",
			"placementId": "22742835",
			"placementName": "calciomercato.com - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "calciomercato.com",
			"placementId": "22742836",
			"placementName": "calciomercato.com - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "calciomercato.com",
			"placementId": "22742837",
			"placementName": "calciomercato.com - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "ilbianconero.com",
			"placementId": "22742844",
			"placementName": "ilbianconero.com - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "ilbianconero.com",
			"placementId": "22742848",
			"placementName": "ilbianconero.com - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "ilbianconero.com",
			"placementId": "22742849",
			"placementName": "ilbianconero.com - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "sosfanta.calciomercato.com",
			"placementId": "22742838",
			"placementName": "sosfanta.calciomercato.com - Frame1",
			"primariSize": "300x250",
			"additionalSizes": "300x600"
		},
		{
			"siteName": "sosfanta.calciomercato.com",
			"placementId": "22742839",
			"placementName": "sosfanta.calciomercato.com - TopLeft Desktop",
			"primariSize": "728x90",
			"additionalSizes": "970x250"
		},
		{
			"siteName": "sosfanta.calciomercato.com",
			"placementId": "22742840",
			"placementName": "sosfanta.calciomercato.com - TopLeft Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		},
		{
			"siteName": "calciomercato.com",
			"placementId": "22742836",
			"placementName": "calciomercato.com - Topper Desktop",
			"primariSize": "728x90",
			"additionalSizes": "300x250"
		},
		{
			"siteName": "calciomercato.com",
			"placementId": "22742837",
			"placementName": "calciomercato.com - Topper Mobile",
			"primariSize": "320x50",
			"additionalSizes": "320x100"
		}
	]
	var siteNameadvPrebid = RCSAD_sitepage.substring(0, RCSAD_sitepage.indexOf('/')).toLocaleLowerCase();

	function getImprovePlId(sitePage, position) {
		return improvePlacementIdParced = improvePlacementId.filter(function (improvePlacementId) {
			return improvePlacementId.siteName === sitePage && improvePlacementId.placementName.indexOf(position) > -1;
		});
	}

	if (getImprovePlId(siteNameadvPrebid, "Frame1")[0] !== undefined) {
		var improvePlIdMap_F1 = getImprovePlId(siteNameadvPrebid, "Frame1")[0].placementId
	}
	if (getImprovePlId(siteNameadvPrebid, "TopLeft Mobile")[0] !== undefined && getImprovePlId(siteNameadvPrebid, "TopLeft Desktop")[0] !== undefined) {
		var improvePlIdMap_Tl = deviceAdvFreq.mobile() ? getImprovePlId(siteNameadvPrebid, "TopLeft Mobile")[0].placementId : getImprovePlId(siteNameadvPrebid, "TopLeft Desktop")[0].placementId;
	}
	if (getImprovePlId(siteNameadvPrebid, "Frame2-X")[0] !== undefined) {
		var improvePlIdMap_Fx = getImprovePlId(siteNameadvPrebid, "Frame2-X")[0].placementId;
	}
	if (getImprovePlId(siteNameadvPrebid, "Topper Mobile")[0] !== undefined && getImprovePlId(siteNameadvPrebid, "Topper Desktop")[0] !== undefined) {
		var improvePlIdMap_Tpr = deviceAdvFreq.mobile() ? getImprovePlId(siteNameadvPrebid, "Topper Mobile")[0].placementId : getImprovePlId(siteNameadvPrebid, "Topper Desktop")[0].placementId;
	}

		// F2,F3 for all
		sizeF2DfpPrebid = [
			[300, 250]
		];
		sizeF3DfpPrebid = [
			[300, 250]
		];
		sizeFlrDfpPrebid = [
			[320, 50],
			[320, 100],
		];
		sizeBlDfpPrebid = [
			[728, 90],
			[940, 60],
			[940, 90],
			[970, 250]
		];
		if (!deviceAdvFreq.mobile()) {
			// desktop for all

			if (RCSAD_listpos.indexOf('Top,') > -1 && RCSAD_listpos.indexOf('TopLeft,') > -1) {
				sizeTLDfpPrebid = [
					[728, 90],
					[970, 250]
				]
			} else {
				sizeTLDfpPrebid = [
					[728, 90],
					[940, 60],
					[940, 90],
					[970, 250]
				]
			}

			sizeTLDfpPrebid_skin = [
				[1800, 1000],
				[1920, 1080]
			];

			sizeF1DfpPrebid = (window.RCSAD_sitepage == "gazzetta.it/homepage" || window.RCSAD_sitepage == "La7.it/homepage") ? [
			[300, 250]
			] : [
			[300, 250],
			[300, 600]
			];
		} else {
			// only mobile for all
			sizeTLDfpPrebid = [
			[320, 50],
			[320, 100]
			];
			sizeF1DfpPrebid = [
			[300, 250],
			[300, 600]
			];
			// Position1
			sizeP1DfpPrebid = [
				[320, 480]
			];

	  if ( checkConfig('mobileIntropageDisplay') === true ) {
				sizeP1DfpPrebid.push([1, 1], [300, 250], [300, 600]);
			}

		}

		// Eccezione no halfpage frame1 la7 elezioni
		sizeF1DfpPrebid = ( document.URL.indexOf('la7.it/elezioni-amministrative-2021') !== -1 ) ? [[300, 250]] : sizeF1DfpPrebid;

		// Top
		sizeTopDfpPrebid = [
			[1800, 1000],
			[1920, 1080]
		];

		// Topper
		if (checkConfig('topper') === true) {
			if (!deviceAdvFreq.mobile()) {
				sizeTprDfpPrebid = [
					[728, 90],
					[300, 250]
				];
			} else {
				sizeTprDfpPrebid = [
					[320, 50],
					[320, 100],
					[300, 50],
					[300, 100]
				];
			}
		}
		

		window.possibleAdUnits = {
			rcsad_TopLeft: {
				code: 'rcsad_TopLeft',
				mediaTypes: {
					banner: {
							sizes: sizeTLDfpPrebid
						}
					},
				bids: [{
					bidder: 'rubicon',
					params: {
						accountId: '10814',
						siteId: siteId_PrbRcs,
						zoneId: zoneId_PrbRcs_Tl_F1,
						position: 'atf'
					}
				}]
			},
			rcsad_Frame1: {
				code: 'rcsad_Frame1',
				mediaTypes: {
					banner: {
							sizes: sizeF1DfpPrebid
						}
					},
				bids: [{
					bidder: 'rubicon',
					params: {
						accountId: '10814',
						siteId: siteId_PrbRcs,
						zoneId: zoneId_PrbRcs_Tl_F1,
						position: 'atf'
					}
				}]
			}
		};
		if (typeof zoneId_PrbRcs_Top !== "undefined" && !deviceAdvFreq.mobile() && RCSAD_listpos.indexOf('Top,') > -1) {
			var rcsad_Top_obj = {
					code: 'rcsad_Top',
					mediaTypes: {
						banner: {
							sizes: sizeTopDfpPrebid
						}
					},
					bids: [{
						bidder: 'rubicon',
						params: {
							accountId: '10814',
							siteId: siteId_PrbRcs,
							zoneId: zoneId_PrbRcs_Top,
							position: 'atf'
						}
					}]
			}
			window.possibleAdUnits.rcsad_Top=rcsad_Top_obj;
		};
		if (typeof sizeP1DfpPrebid !== "undefined" && deviceAdvFreq.mobile()) {
			var rcsad_Position1_obj = {
					code: 'rcsad_Position1',
					mediaTypes: {
						banner: {
							sizes: sizeP1DfpPrebid
						}
					},
					bids: [{
						bidder: 'rubicon',
						params: {
							accountId: '10814',
							siteId: siteId_PrbRcs,
							zoneId: zoneId_PrbRcs_Tl_F1,
							position: 'atf'
						}
					},
					{
						bidder: 'rubicon_rubist',
						params: {
							accountId: '10814',
							siteId: siteId_PrbRcs,
							zoneId: zoneId_PrbRcs_rubistitial,
							position: 'atf'
						}
					}]
			}

			if ( checkSP('ilbianconero.com') ) {
				rcsad_Position1_obj.bids[0].params.zoneId = '2362226'; // rubicon
				rcsad_Position1_obj.bids[1].params.zoneId = '2362224'; // rubicon_rubist
			} else if ( checkSP('sosfanta.calciomercato.com') ) {
				rcsad_Position1_obj.bids[0].params.zoneId = '2362212';
				rcsad_Position1_obj.bids[1].params.zoneId = '2362214';
			} else if ( checkSP('calciomercato.com') ) {
				rcsad_Position1_obj.bids[0].params.zoneId = '2362204';
				rcsad_Position1_obj.bids[1].params.zoneId = '2362198';
			} else if ( checkSP('unionesarda.it') ) {
				rcsad_Position1_obj.bids[0].params.zoneId = '2515802';
				rcsad_Position1_obj.bids[1].params.zoneId = '2093572';
			} else if ( checkSP('lasicilia.it') ) {
				rcsad_Position1_obj.bids[0].params.zoneId = '2515808';
				rcsad_Position1_obj.bids[1].params.zoneId = '2093544';
			} else if ( checkSP('dday.it') ) {
				rcsad_Position1_obj.bids[0].params.zoneId = '2515814';
				rcsad_Position1_obj.bids[1].params.zoneId = '2087864';
			} else if ( checkSP('dmove.it') ) {
				rcsad_Position1_obj.bids[0].params.zoneId = '2515816';
				rcsad_Position1_obj.bids[1].params.zoneId = '2087866';
			} else if ( checkSP('open.online') ) {
				rcsad_Position1_obj.bids[0].params.zoneId = '2515820';
				rcsad_Position1_obj.bids[1].params.zoneId = '2093566';
			} else if ( checkSP('leitv.it') ) {
				rcsad_Position1_obj.bids[0].params.zoneId = '2515822';
				rcsad_Position1_obj.bids[1].params.zoneId = '2093558';
			} else if ( checkSP('sedanoallegro.it') ) {
				rcsad_Position1_obj.bids[0].params.zoneId = '2515824';
				rcsad_Position1_obj.bids[1].params.zoneId = '2093568';
			}

			window.possibleAdUnits.rcsad_Position1=rcsad_Position1_obj;

		}

		// BUCKSENSE start
        if ( checkConfig('bucksense') === true ) {

            let isDesktop = !deviceAdvFreq.mobile();
            let bidderBucksenseTl = {
                bidder: 'bucksense',
                params: {
                    placementId: ( isDesktop ? 158970250 : 158320100 ),
                    size: ( isDesktop ? [970, 250] : [320, 100] )
                }
            }
            window.possibleAdUnits.rcsad_TopLeft.bids.push(bidderBucksenseTl);

            let bidderBucksenseF1sizes = [
                [ [300, 250], 158300250 ],
                [ [300, 600], 158300600 ]
            ];

            for ( let i = 0; i < bidderBucksenseF1sizes.length; i++ ) {

                window.possibleAdUnits.rcsad_Frame1.bids.push({
                    bidder: 'bucksense',
                    params: {
                        size: bidderBucksenseF1sizes[i][0],
                        placementId: bidderBucksenseF1sizes[i][1],
                    }
                });

            }

        }
        // BUCKSENSE end

		// APPNEXUS start
		if (checkConfig('appnexus')==true) {
			var bidderAppNexTl = {
				bidder: 'appnexus',
				params: {
					placementId: appnexusPlIdMap_Tl
				}
			}
			window.possibleAdUnits.rcsad_TopLeft.bids.push(bidderAppNexTl);
			var bidderAppNexF1 = {
				bidder: 'appnexus',
				params: {
					placementId: appnexusPlIdMap_F1
				}
			}
			window.possibleAdUnits.rcsad_Frame1.bids.push(bidderAppNexF1);
		}
		// APPNEXUS end

		// CRITEO start
		if (checkConfig('criteo')==true) {
			var deviceTypeAdvCriteo = deviceAdvFreq.mobile() ? "Mweb" : "Web";
			var bidderCriteoTl = {
				bidder: "criteo",
				params: {
					networkId: 1939,
					publisherSubId: siteNameadv +'_ATF_'+sizeTLDfpPrebid.join()+'_'+deviceTypeAdvCriteo
				}
			}
			window.possibleAdUnits.rcsad_TopLeft.bids.push(bidderCriteoTl);
			var bidderCriteF1 = {
				bidder: "criteo",
				params: {
					networkId: 1939,
					publisherSubId: siteNameadv +'_ATF_'+sizeF1DfpPrebid.join()+'_'+deviceTypeAdvCriteo
				}
			}
			window.possibleAdUnits.rcsad_Frame1.bids.push(bidderCriteF1);
		}
		// CRITEO end

		// PUBMATIC start
		if (checkConfig('pubmatic') == true) {
			var bidderpubmaticTl = {
				bidder: "pubmatic",
				params: {
					publisherId: "158689",
					adSlot: adSlotPbMtc_topleft
				}
			}
			window.possibleAdUnits.rcsad_TopLeft.bids.push(bidderpubmaticTl);
			var bidderpubmaticF1 = {
				bidder: "pubmatic",
				params: {
					publisherId: "158689",
					adSlot: adSlotPbMtc_frame1
				}
			}
			window.possibleAdUnits.rcsad_Frame1.bids.push(bidderpubmaticF1);
			if (typeof zoneId_PrbRcs_Top !== "undefined" && !deviceAdvFreq.mobile() && RCSAD_listpos.indexOf('Top,') > -1) {
				var bidderpubmaticTop = {
					bidder: "pubmatic",
					params: {
						publisherId: "158689",
						adSlot: adSlotPbMtc_top
					}
				}
				window.possibleAdUnits.rcsad_Top.bids.push(bidderpubmaticTop);
			}
			if (typeof sizeP1DfpPrebid !== "undefined" && deviceAdvFreq.mobile()) {
				var bidderpubmaticP1 = {
					bidder: "pubmatic",
					params: {
						publisherId: "158689",
						adSlot: adSlotPbMtc_position1
					}
				}
				window.possibleAdUnits.rcsad_Position1.bids.push(bidderpubmaticP1);
			}
		}
		  // PUBMATIC end

		// INDEX EXCHANGE start
		if (checkConfig('indexexchange') === true && typeof siteIdIndexExchange !== "undefined") {
			for (var i = 0; i < sizeTLDfpPrebid.length; i++) {
				window.possibleAdUnits.rcsad_TopLeft.bids.push(
					{
					bidder: 'ix',
					params: {
						siteId: siteIdIndexExchange,
						size: sizeTLDfpPrebid[i]
					}
				});
			}
			for (var i = 0; i < sizeF1DfpPrebid.length; i++) {
				window.possibleAdUnits.rcsad_Frame1.bids.push(
					{
					bidder: 'ix',
					params: {
						siteId: siteIdIndexExchange,
						size: sizeF1DfpPrebid[i]
					}
				});
			}
		}
		// INDEX EXCHANGE end

		// IMPROVE DIGITAL start
		if (checkConfig('improve') === true) {
			var bidderImproveTl = {
				bidder: 'improvedigital',
				params: {
					placementId: improvePlIdMap_Tl,
                    publisherId: 1913
				}
			}
			window.possibleAdUnits.rcsad_TopLeft.bids.push(bidderImproveTl);
			var bidderImproveF1 = {
				bidder: 'improvedigital',
				params: {
					placementId: improvePlIdMap_F1,
                    publisherId: 1913
				}
			}
			window.possibleAdUnits.rcsad_Frame1.bids.push(bidderImproveF1);
		}
		// IMPROVE DIGITAL end

		  // AGGIUNGO SLOT FRAME2 SE IN LISTPOS
		  if (RCSAD_listpos.indexOf('Frame2')>-1) {
			var F2DfpPrebidSlot = {
				code: 'rcsad_Frame2',
				mediaTypes: {
					banner: {
							sizes: sizeF2DfpPrebid
						}
					},
				bids: [{
					bidder: 'rubicon',
					params: {
						accountId: '10814',
						siteId: siteId_PrbRcs,
						zoneId: zoneId_PrbRcs_BTF
					}
				}]
			};

			if (checkConfig('appnexus') == true) {
				var bidderAppNexF2 = {
					bidder: 'appnexus',
					params: {
						placementId: appnexusPlIdMap_BTF
					}
				}
				F2DfpPrebidSlot.bids.push(bidderAppNexF2);
			}
			if (checkConfig('pubmatic')==true) {
				var bidderpubmaticPF2 = {
					bidder: 'pubmatic',
					params: {
						publisherId: "158689",
						adSlot : top.RCSAD_sitepage+"/"+"Frame2"
					}
				}
				F2DfpPrebidSlot.bids.push(bidderpubmaticPF2);
			  }
			  if (checkConfig('criteo') == true) {
				var biddercriteoPF2 = {
					bidder: "criteo",
					params: {
						networkId: 1939,
						publisherSubId: siteNameadv + '_BTF_' + sizeF2DfpPrebid.join() + '_' + deviceTypeAdvCriteo
					}
				}
				F2DfpPrebidSlot.bids.push(biddercriteoPF2);
			}
			if (checkConfig('indexexchange') === true && typeof siteIdIndexExchange !== "undefined") {
				var bidderindexexchangePF2 = {
					bidder: "ix",
					params: {
						siteId: siteIdIndexExchange,
						size: sizeF2DfpPrebid[0]
					}
				}
				F2DfpPrebidSlot.bids.push(bidderindexexchangePF2);
			}

			if (checkConfig('improve') === true) {
				var bidderimprovePF2 = {
					bidder: 'improvedigital',
					params: {
						placementId: improvePlIdMap_Fx,
                        publisherId: 1913
					}
				}
				F2DfpPrebidSlot.bids.push(bidderimprovePF2);
			}
			window.possibleAdUnits['rcsad_Frame2'] = F2DfpPrebidSlot;
		  }

		  // AGGIUNGO SLOT FRAME3 SE IN LISTPOS
		  if (RCSAD_listpos.indexOf('Frame3')>-1) {
			var F3DfpPrebidSlot = {
				code: 'rcsad_Frame3',
			  mediaTypes: {
				  banner: {
						  sizes: sizeF3DfpPrebid
					  }
				  },
				bids: [{
					bidder: 'rubicon',
					params: {
						accountId: '10814',
						siteId: siteId_PrbRcs,
						zoneId: zoneId_PrbRcs_BTF
					}
				}]
			};

			if (checkConfig('appnexus') == true) {
				var bidderAppNexF3 = {
					bidder: 'appnexus',
					params: {
						placementId: appnexusPlIdMap_BTF
					}
				}
				F3DfpPrebidSlot.bids.push(bidderAppNexF3);
			}
			if (checkConfig('pubmatic')==true) {
				var bidderpubmaticPF3 = {
					bidder: 'pubmatic',
					params: {
						publisherId: "158689",
						adSlot : top.RCSAD_sitepage+"/"+"Frame3"
					}
				}
				F3DfpPrebidSlot.bids.push(bidderpubmaticPF3);
			}
			if (checkConfig('criteo') == true) {
			  var biddercriteoPF3 = {
				  bidder: "criteo",
				  params: {
					  networkId: 1939,
					  publisherSubId: siteNameadv + '_BTF_' + sizeF3DfpPrebid.join() + '_' + deviceTypeAdvCriteo
				  }
			  }
			  F3DfpPrebidSlot.bids.push(biddercriteoPF3);
		  }
		  if (checkConfig('indexexchange') === true && typeof siteIdIndexExchange !== "undefined") {
			var bidderindexexchangePF3 = {
				bidder: "ix",
				params: {
					siteId: siteIdIndexExchange,
					size: sizeF3DfpPrebid[0]
				}
			}
			F3DfpPrebidSlot.bids.push(bidderindexexchangePF3);
		}

		if (checkConfig('improve') === true) {
			var bidderimprovePF3 = {
				bidder: 'improvedigital',
				params: {
					placementId: improvePlIdMap_Fx,
                    publisherId: 1913
				}
			}
			F3DfpPrebidSlot.bids.push(bidderimprovePF3);
		}
			window.possibleAdUnits['rcsad_Frame3'] = F3DfpPrebidSlot;
		}

		// AGGIUNGO SLOT BOTTOMLEFT SE IN LISTPOS
		if (RCSAD_listpos.indexOf('BottomLeft') > -1) {
			var BlDfpPrebidSlot = {
				code: 'rcsad_BottomLeft',
				mediaTypes: {
					banner: {
						sizes: sizeBlDfpPrebid
					}
				},
				bids: [{
					bidder: 'rubicon',
					params: {
						accountId: '10814',
						siteId: siteId_PrbRcs,
						zoneId: zoneId_PrbRcs_BTF
					}
				}]
			};

			if (checkConfig('appnexus') == true) {
				var bidderAppNexBl = {
					bidder: 'appnexus',
					params: {
						placementId: appnexusPlIdMap_BTF
					}
				}
				BlDfpPrebidSlot.bids.push(bidderAppNexBl);
			}
			if (checkConfig('pubmatic') == true) {
				var bidderpubmaticPBl = {
					bidder: 'pubmatic',
					params: {
						publisherId: "158689",
						adSlot: top.RCSAD_sitepage + "/" + "BottomLeft"
					}
				}
				BlDfpPrebidSlot.bids.push(bidderpubmaticPBl);
			}
			if (checkConfig('criteo') == true) {
				var biddercriteoPBl = {
					bidder: "criteo",
					params: {
						networkId: 1939,
						publisherSubId: siteNameadv + '_BTF_' + sizeBlDfpPrebid.join() + '_' + deviceTypeAdvCriteo
					}
				}
				BlDfpPrebidSlot.bids.push(biddercriteoPBl);
			}
			window.possibleAdUnits['rcsad_BottomLeft'] = BlDfpPrebidSlot;
		}

		// AGGIUNGO SLOT TOPPER SE IN LISTPOS
		if (checkConfig('topper') === true) {
			var TprDfpPrebidSlot = {
				code: 'rcsad_Topper',
				mediaTypes: {
					banner: {
						sizes: sizeTprDfpPrebid
					}
				},
				bids: [{
					bidder: 'rubicon',
					params: {
						accountId: '10814',
						siteId: siteId_PrbRcs,
						zoneId: zoneId_PrbRcs_BTF
					}
				}]
			};

			if (checkConfig('appnexus') == true) {
				var bidderAppNexTpr = {
					bidder: 'appnexus',
					params: {
						placementId: appnexusPlIdMap_BTF
					}
				}
				TprDfpPrebidSlot.bids.push(bidderAppNexTpr);
			}
			if (checkConfig('pubmatic') == true) {
				var bidderpubmaticTpr = {
					bidder: 'pubmatic',
					params: {
						publisherId: "158689",
						adSlot: top.RCSAD_sitepage + "/" + "Topper"
					}
				}
				TprDfpPrebidSlot.bids.push(bidderpubmaticTpr);
			}
			if (checkConfig('criteo') == true) {
				var biddercriteoTpr = {
					bidder: "criteo",
					params: {
						networkId: 1939,
						publisherSubId: siteNameadv + '_BTF_' + sizeTprDfpPrebid.join() + '_' + deviceTypeAdvCriteo
					}
				}
				TprDfpPrebidSlot.bids.push(biddercriteoTpr);
			}

			if (checkConfig('indexexchange') === true && typeof siteIdIndexExchange !== "undefined") {
				sizeTprDfpPrebid.forEach((size) => {
					var bidderindexexchangeTpr = {
						bidder: "ix",
						params: {
							siteId: siteIdIndexExchange,
							size: size
						}
					}
					TprDfpPrebidSlot.bids.push(bidderindexexchangeTpr);
				});				
			}
	
			if (checkConfig('improve') === true) {
				var bidderimproveTpr = {
					bidder: 'improvedigital',
					params: {
						placementId: improvePlIdMap_Tpr,
                        publisherId: 1913
					}
				}
				TprDfpPrebidSlot.bids.push(bidderimproveTpr);
			}

			window.possibleAdUnits['rcsad_Topper'] = TprDfpPrebidSlot;
		}

		  window.pbjs = window.pbjs || {};
		  window.pbjs.que = window.pbjs.que || [];

		// window.pbjs.bidderSettings = {
		//   rubicon: {
		//     sendStandardTargeting: true,
		//     adserverTargeting: [{
		//       key: "hb_priority",
		//       val: function(bidResponse) {
		//         return true;
		//       }
		//     }]
		//   }
		// };

		// Bidder Settings
        window.pbjs.que.push(function () {
            pbjs.bidderSettings = {
                criteo: {
                    storageAllowed: true,
                }
            }
        });

		var PREBID_TIMEOUT = 2000;
		window.googletag = window.googletag || {};
		window.googletag.cmd = window.googletag.cmd || [];
		window.googletag.cmd.push(function () {
			googletag.pubads().disableInitialLoad();
			window.adUnits = [];
			googletag.pubads().getSlots().forEach(function (slot) {
				if (typeof (window.possibleAdUnits[slot.getSlotElementId()]) !== 'undefined')
					window.adUnits.push(window.possibleAdUnits[slot.getSlotElementId()]);
			});

			if (RCSAD_sitepage.indexOf('open.online') <= -1 && (RCSAD_listpos.indexOf('Top,') <= -1 && RCSAD_listpos.indexOf('TopLeft,') > -1) && !deviceAdvFreq.mobile()) {
				var rcsad_TopLeft_skin_obj = {
					code: 'rcsad_TopLeft',
					mediaTypes: {
						banner: {
							sizes: sizeTLDfpPrebid_skin
						}
					},
					bids: [{
						bidder: 'rubicon',
						params: {
							accountId: '10814',
							siteId: siteId_PrbRcs,
							zoneId: zoneId_PrbRcs_Tl_F1,
							position: 'atf'
						}
					},{
						bidder: "pubmatic",
						params: {
							publisherId: "158689",
							adSlot: adSlotPbMtc_topleft
						}
					}]
				}
				window.adUnits.push(rcsad_TopLeft_skin_obj);
			}

			if (window.adUnits.length > 0) {
				window.pbjs.que.push(function () {


					 /* RUBISTITIAL START */

					 pbjs.aliasBidder("rubicon","rubicon_rubist");

					 pbjs.onEvent('beforeRequestBids', function (adUnits) {
					 	adUnits.forEach(function (adUnit) {
					 		if (adUnit.mediaTypes && adUnit.mediaTypes.banner && adUnit.code === "rcsad_Position1") {
					 			adUnit.bids.forEach(function (bid) {
					 				dfpPrintLog("check rubistitial BID: ", bid);
					 				if (bid.params && bid.params.zoneId /* && bid.params.zoneId == "2087496" */ && bid.bidder == "rubicon_rubist") {
					 					dfpPrintLog("check rubistitial OK: "+ adUnit.code + "zoneId: " + bid.params.zoneId);
					 					bid.renderer = {
					 						url: 'https://secure-assets.rubiconproject.com/utils/prebidInter/prebidInter.min.js',
					 						render: function (prebidBid) {
					 							this.push(function () {

					 								if ( getParameterByNameKwUrlSwitchAdv('keyword') === 'testprebid' ) {

					 									window.interstitial.renderAd({
					 										fullBids: prebidBid,
					 										overlayColor: "#000000",
					 										overlayOpacity: 0.5,
					 										closeTime: 10,
					 										closeCounter: true,
					 										showCloseButtonAfterSeconds: 0
					 									});

					 								} else {

					 									window.interstitial.renderAd({
					 										fullBids: prebidBid,
					 										overlayColor: "#000000",
					 										overlayOpacity: 1,
					 									});

					 								}

					 							})
					 						}
					 					}
					 				}
					 			})
					 		}
					 	})
					 });

					 /* RUBISTITIAL END */

					/* Prebid Config Start */
					dfpPrintLog('prebid cmp-2 IAB');

					var setConfigObjPbRcs = {
						bidderSequence: 'random',
						useBidCache: true,
						enableSendAllBids: true,
						priceGranularity: 'high',
						currency: {
							adServerCurrency: 'EUR',
							granularityMultiplier: 1,
							defaultRates: {
								USD: {
									EUR: 0.90
								}
							}
						},
						consentManagement: {
							gdpr: {
								cmpApi: 'iab',
								timeout: 8000,
								defaultGdprScope: true
							}
						},
						rubicon: {
							singleRequest: checkConfig('sra')
						},
						improvedigital: {
							singleRequest: checkConfig('sra')
						},
						userSync: {
							filterSettings: {
								iframe: {
									bidders: '*', // '*' represents all bidders
									filter: 'include'
								}
							}
						},
						ortb2: {
							user: {
								ext: {
									data: {
										permutive: JSON.parse(window.localStorage._prubicons || '[]').slice(0,250) // user.ext.data is sent to Rubicon as "visitor" data
									}
								}
							}
						},
						enableTIDs: true,
						gvlMapping: {
							'rubicon_rubist': 52
						}
					};

					if ( checkConfig('ias') === true ) {

						setConfigObjPbRcs.realTimeData = {
							auctionDelay: 200,
							dataProviders: [
								{
									name: 'ias',
									waitForIt: true,
									params: {
										pubId: '928924'
									}
								}
							]
						};

					}

					window.pbjs.setConfig(setConfigObjPbRcs);

					window.pbjs.bidderSettings = {
						standard: {
							storageAllowed: true,
						}
					};

					window.pbjs.addAdUnits(window.adUnits);
					/* Prebid Config End */

					/* AMAZON COMMENT START */
					if (checkConfig('prebid') === false || checkConfig('amazon') !== true) {
						window.pbjs.requestBids({
							bidsBackHandler: sendAdserverRequest
						});
					}
					/* AMAZON COMMENT END */

				});

				/* AMAZON COMMENT START */
				if (checkConfig('prebid') === false || checkConfig('amazon') !== true) {
					setTimeout, PREBID_TIMEOUT);
				}
				/* AMAZON COMMENT END */

			} else {
				/* AMAZON COMMENT START */
				if (checkConfig('prebid') === false || checkConfig('amazon') !== true) {
					sendAdserverRequest();
					dfpPrintLog("PREBID ELSE sendAdserverRequest");
				}
				/* AMAZON COMMENT END */
			}
		});


		window.sendAdserverRequest = function () {
			dfpPrintLog("PREBID check if adserverRequestSent: " + window.pbjs.adserverRequestSent);
			if (window.pbjs.adserverRequestSent) return;
			window.pbjs.adserverRequestSent = true;

			/* AMAZON COMMENT spostata in funzione amazon START */
			if (checkConfig('prebid') === false || checkConfig('amazon') !== true) {
				googletag.cmd.push(function () {
					window.pbjs.que.push(function () {
						window.pbjs.setTargetingForGPTAsync();
						googletag.pubads().refresh(gptadslotsSRA);
						dfpPrintLog("PREBID sendAdserverRequest FUNCTION CALL REFRESH");
					});
				});
			}
			/* AMAZON COMMENT spostata in funzione amazon END */

		}

	}

	// END PREBID //

	// FUNCTION DEFSLOT E REFRESH POISIZIONI IN BATCH //

	window.refreshBatchPageSlots = function (pos, adunit, div, framex) {
		if (pos == "Frame1") {
			size = sizeCurPosDfpRcsF1;
		} else if (pos == "Top") {
			size = sizeCurPosDfpRcsTop;
		} else if (pos == "Position1") {
			size = sizeCurPosDfpRcsP1;
		} else if (pos == "Position3.1" || pos == "Position3.2") {
			size = sizeCurPosDfpRcsP3;
		} else if (pos == "TopLeft") {
			size = sizeCurPosDfpRcsTl;
		} else if (pos == "Frame2") {
			size = sizeCurPosDfpRcsF2;
		} else if (pos == "Frame3" || (framex !== undefined && pos.indexOf("BottomLeft") < 0)) {
			size = sizeCurPosDfpRcsF3;
		} else if (pos == "Floor") {
			size = sizeCurPosDfpRcsFlr;
		} else if (pos == "BottomLeft" || (framex !== undefined && pos.indexOf("Frame") < 0)) {
			size = sizeCurPosDfpRcsBl;
		} else if (pos == "BottomRight") {
			size = sizeCurPosDfpRcsBr;
		} else if (pos == "Middle") {
			size = sizeCurPosDfpRcsMd;
		} else if (pos == "Middle1") {
			size = sizeCurPosDfpRcsMd1;
		} else if (pos == "Middle2") {
			size = sizeCurPosDfpRcsMd2;
		} else if (pos == "Bottom") {
			size = sizeCurPosDfpRcsBt;
		} else if (pos == "Bottom1") {
			size = sizeCurPosDfpRcsB1;
		} else if (pos == "Bottom2") {
			size = sizeCurPosDfpRcsB2;
		} else if (pos == "Bottom3") {
			size = sizeCurPosDfpRcsB3;
		} else if (pos == "Left1") {
			size = sizeCurPosDfpRcsL1;
		} else if (pos == "Right1") {
			size = sizeCurPosDfpRcsR1;
		} else if (pos == "Mobile-Position1") {
			size = sizeCurPosDfpRcsP1;
		} else if (pos == "Mobile-Frame1") {
			size = sizeCurPosDfpRcsF1;
		} else if (pos == "SmallRight") {
			size = sizeCurPosDfpRcsSr;
		} else if (pos == "Topper") {
			size = sizeCurPosDfpRcsTpr;
		} else {
			size = []
		}





		var posBatchPrebidIncluded = pos === "Middle" || pos === "Middle2" /* || pos === "Bottom2" */ || pos === "Floor" || framex !== undefined;

	if (checkConfig('prebid') === true && checkConfig('amazon') === true && posBatchPrebidIncluded) {

		// clean amazon sizes
		sizeAmz = size.filter(function(size) {

			if ( size[0] === 1 && size[1] === 1 // remove fluid 1x1
				|| Number(size[1].toString().slice(-1)) !== 0 // normalize sizes
				) {
				return false;
			}

			return true;

		});

		var gptadslotsSRAamzBatch = [{
			slotID: div,
			slotName: '/35821442/' + window.RCSAD_sitepage + '/' + pos,
			sizes: sizeAmz
		}];

		window.executeParallelAuctionAlongsidePrebidBatch = function () {

			var FAILSAFE_TIMEOUT = PREBID_TIMEOUT;
			var requestManagerBatch = {
				adserverRequestSent: false,
				aps: false,
				prebid: false
			};

			// when both APS and Prebid have returned, initiate ad request
			function biddersBackBatch() {
				if (requestManagerBatch.aps && requestManagerBatch.prebid) {
					sendAdserverRequestBatch();
				}
				return;
			}

			// sends adserver request
			function sendAdserverRequestBatch() {
				if (requestManagerBatch.adserverRequestSent === true) {
					return;
				}
				requestManagerBatch.adserverRequestSent = true;
				googletag.cmd.push(function () {
					window.pbjs.que.push(function () {
						pbjs.setTargetingForGPTAsync([div]);
						googletag.pubads().refresh([gptadslotBatchPage]);
						dfpPrintLog("PREBID sendAdserverRequestBatch AMAZON FUNCTION CALL REFRESH");
					});
				});
			}

			// sends bid request to APS and Prebid
			function requestHeaderBidsBatch() {

				// APS request
				apstag.fetchBids({
					slots: gptadslotsSRAamzBatch
				}, function (bids) {
					googletag.cmd.push(function () {
						apstag.setDisplayBids();
						requestManagerBatch.aps = true; // signals that APS request has completed
						biddersBackBatch(); // checks whether both APS and Prebid have returned
					});
				});

				// put prebid request here
				pbjs.que.push(function () {
					pbjs.requestBids({
						timeout: PREBID_TIMEOUT_BATCH,
						adUnitCodes: [div],
						bidsBackHandler: function () {
							// googletag.cmd.push(function () {
							pbjs.setTargetingForGPTAsync([div]);
							requestManagerBatch.prebid = true; // signals that Prebid request has completed
							biddersBackBatch(); // checks whether both APS and Prebid have returned
							dfpPrintLog('framex refresh prebid AMZN')
							// })
						}
					});
				});
			}

			// initiate bid request
			requestHeaderBidsBatch();

			// set failsafe timeout
			window.setTimeout, FAILSAFE_TIMEOUT);
		};

		executeParallelAuctionAlongsidePrebidBatch();

	}




		// PASSO K-VALUE "native" SOLTANTO A POSIZIONI NATIVE
		if (pos == "Bottom" || pos == "Bottom2" || pos == "Bottom3") {
			if (!deviceAdvFreq.mobile() && (RCSAD_sitepage == "corriere.it/homepage/hpcorriere" || RCSAD_sitepage == "gazzetta.it/homepage") && checkConfig('lazyLoadDfp')==false) {
				var gptadslotBatchPage = googletag.defineSlot('/35821442/' + window.RCSAD_sitepage + adunit, size, div).addService(googletag.pubads()).setTargeting("gestione_exitpage", "false").setTargeting("native", pos.toLowerCase()).setTargeting("native-inview", "false");
			} else {
				var gptadslotBatchPage = googletag.defineSlot('/35821442/' + window.RCSAD_sitepage + adunit, size, div).addService(googletag.pubads()).setTargeting("gestione_exitpage", "false").setTargeting("native", pos.toLowerCase());
			}
		}
		// PASSO K-VALUE "gestione_exitpage" SOLTANTO A POSIZIONE EXIT-PAGE
		else if (div == "rcsad_TopLeftExt") {
			var gptadslotBatchPage = googletag.defineSlot('/35821442/' + window.RCSAD_sitepage + adunit, sizeCorDfpRcsExit, div).addService(googletag.pubads()).setTargeting("gestione_exitpage", "true");
		}
		// DI DEFAULT PASSO SOLTANTO K-VALUE gestione_exitpage=FALSE
		else {
			dfpPrintLog('pos_check_bidd: ' + div + ' framex !== undefined: ' + framex !== undefined);
			var gptadslotBatchPage = googletag.defineSlot('/35821442/' + window.RCSAD_sitepage + adunit, size, div).addService(googletag.pubads()).setTargeting("gestione_exitpage", "false");

		}

		if (checkConfig('prebid') == true && posBatchPrebidIncluded) {
			var PREBID_TIMEOUT_BATCH = 2000;


			if (pos === "Middle") {
				var appnexusPlIdMap_Ml = "14938089";
				var adUnits_batchslots = [{
					code: div,
					mediaTypes: {
						banner: {
							sizes: sizeCurPosDfpRcsMd
						}
					},
					bids: [{
						bidder: 'appnexus',
						params: {
							placementId: appnexusPlIdMap_Ml
						}
					}, {
						bidder: "pubmatic",
						params: {
							publisherId: "158689",
							adSlot: window.RCSAD_sitepage + "/" + "Middle"
						}
					}, {
						bidder: "criteo",
						params: {
							networkId: 1939,
							publisherSubId: siteNameadv + '_BTF_' + sizeMlDfpPrebid.join() + '_' + deviceTypeAdvCriteo
						}
					}]
				}];
			} else if (pos === "Middle2") {
				var appnexusPlIdMap_Md2 = "19474137";
				var zoneId_PrbRcs_Md2 = '1744548';
				var adUnits_batchslots = [{
					code: div,
					mediaTypes: {
						banner: {
							sizes: sizeCurPosDfpRcsMd2
						}
					},
					bids: [{
						bidder: 'rubicon',
						params: {
							accountId: '10814',
							siteId: siteId_PrbRcs,
							zoneId: zoneId_PrbRcs_Md2,
							position: 'btf'
						}
					}, {
						bidder: 'appnexus',
						params: {
							placementId: appnexusPlIdMap_Md2
						}
					}, {
						bidder: "pubmatic",
						params: {
							publisherId: "158689",
							adSlot: window.RCSAD_sitepage + "/" + "Middle2"
						}
					}, {
						bidder: "criteo",
						params: {
							networkId: 1939,
							publisherSubId: siteNameadv + '_BTF_' + sizeCurPosDfpRcsMd2.join() + '_' + deviceTypeAdvCriteo
						}
					}]
				}];
			} /* else if (pos === "Bottom2") {
				var appnexusPlIdMap_B2 = "19474140";
				var zoneId_PrbRcs_B2 = '1744552';
				var adUnits_batchslots = [{
					code: div,
					mediaTypes: {
						native: {
							type: 'image'
						}
					},
					bids: [{
						bidder: 'rubicon',
						params: {
							accountId: '10814',
							siteId: siteId_PrbRcs,
							zoneId: zoneId_PrbRcs_B2,
							position: 'btf',
						visitor:{
							"permutive":
							JSON.parse(window.localStorage._prubicons
							|| '[]').slice(0,250)
							}
						}
					}, {
						bidder: 'appnexus',
						params: {
							placementId: appnexusPlIdMap_B2
						}
					}, {
						bidder: "pubmatic",
						params: {
							publisherId: "158689",
							adSlot: window.RCSAD_sitepage + "/" + "Bottom2"
						}
					}, {
						bidder: "criteo",
						params: {
							networkId: 1939,
							publisherSubId: siteNameadv + '_BTF_' + sizeCurPosDfpRcsB2 + '_' + deviceTypeAdvCriteo
						}
					}]
				}];
			} */ else if (pos === "Floor") {
				var appnexusPlIdMap_Flr = "19474139";
				var zoneId_PrbRcs_Flr = '1744550';
				var adUnits_batchslots = [{
					code: div,
					mediaTypes: {
						banner: {
							sizes: sizeCurPosDfpRcsFlr
						}
					},
					bids: [{
						bidder: 'rubicon',
						params: {
							accountId: '10814',
							siteId: siteId_PrbRcs,
							zoneId: zoneId_PrbRcs_Flr,
							position: 'btf',
							visitor:{
								"permutive":
								JSON.parse(window.localStorage._prubicons
								|| '[]').slice(0,250)
								}
						}
					}, {
						bidder: 'appnexus',
						params: {
							placementId: appnexusPlIdMap_Flr
						}
					}, {
						bidder: "pubmatic",
						params: {
							publisherId: "158689",
							adSlot: window.RCSAD_sitepage + "/" + "Floor"
						}
					}, {
						bidder: "criteo",
						params: {
							networkId: 1939,
							publisherSubId: siteNameadv + '_BTF_' + sizeFlrDfpPrebid.join() + '_' + deviceTypeAdvCriteo
						}
					}]
				}];
			} else if (framex !== undefined) {
				var sizeF3DfpPrebid = [
					[300, 250]
				];
				if (!deviceAdvFreq.mobile()) {
					if (RCSAD_sitepage.indexOf('open.online') > -1) {
						appnexusPlIdMap_Fx = "20925643";
					} else {
						appnexusPlIdMap_Fx = "19303704";
					}
				} else {
					if (RCSAD_sitepage.indexOf('open.online') > -1) {
						appnexusPlIdMap_Fx = "20925647";
					} else {
						appnexusPlIdMap_Fx = "19303741";
					}
				}
				var adUnits_batchslots = [{
					code: div,
					mediaTypes: {
						banner: {
							sizes: sizeF3DfpPrebid
						}
					},
					bids: [{
						bidder: 'appnexus',
						params: {
							placementId: appnexusPlIdMap_Fx
						}
					}, {
						bidder: "pubmatic",
						params: {
							publisherId: "158689",
							adSlot: window.RCSAD_sitepage + "/" + "Frame3"
						}
					}, {
						bidder: "criteo",
						params: {
							networkId: 1939,
							publisherSubId: siteNameadv + '_BTF_' + sizeF3DfpPrebid.join() + '_' + deviceTypeAdvCriteo
						}
					}]
				}];

				if (checkConfig('indexexchange') === true && typeof siteIdIndexExchange !== "undefined") {
					var bidderBatchIndexExchangeFx = {
						bidder: "ix",
						params: {
							siteId: siteIdIndexExchange,
							size: sizeF3DfpPrebid[0]
						}
					}
					adUnits_batchslots[0].bids.push(bidderBatchIndexExchangeFx);
				}

				if (checkConfig('improve') === true && typeof improvePlIdMap_Fx !== "undefined") {
					var bidderBatchimproveFx = {
						bidder: 'improvedigital',
						params: {
							placementId: improvePlIdMap_Fx,
                            publisherId: 1913
						}
					}
					adUnits_batchslots[0].bids.push(bidderBatchimproveFx);
				}
			}


			pbjs.que.push(function () {
				pbjs.removeAdUnit();
				pbjs.addAdUnits(adUnits_batchslots);
				dfpPrintLog("framex addAdUnits adUnits_batchslots");
			});

			function refreshBid_batchsSlot() {
				pbjs.que.push(function () {

					/* Prebid Config Start */
					dfpPrintLog('prebid cmp-2 IAB');

					var setConfigObjPbRcs = {
						bidderSequence: 'random',
						enableSendAllBids: true,
						priceGranularity: 'high',
						currency: {
							adServerCurrency: 'EUR',
							granularityMultiplier: 1,
							defaultRates: {
								USD: {
									EUR: 0.90
								}
							}
						},
						consentManagement: {
							gdpr: {
								cmpApi: 'iab',
								timeout: 8000,
								defaultGdprScope: true
							}
						},
						rubicon: {
							singleRequest: checkConfig('sra')
						},
						improvedigital: {
							singleRequest: checkConfig('sra')
						},
						userSync: {
							filterSettings: {
								iframe: {
									bidders: '*', // '*' represents all bidders
									filter: 'include'
								}
							}
						},
						ortb2: {
							user: {
								ext: {
									data: {
										permutive: JSON.parse(window.localStorage._prubicons || '[]').slice(0,250) // user.ext.data is sent to Rubicon as "visitor" data
									}
								}
							}
						},
						enableTIDs: true,
						gvlMapping: {
							'rubicon_rubist': 52
						}
					};

					if ( checkConfig('ias') === true ) {

						setConfigObjPbRcs.realTimeData = {
							auctionDelay: 200,
							dataProviders: [
								{
									name: 'ias',
									waitForIt: true,
									params: {
										pubId: '928924'
									}
								}
							]
						};

					}

					window.pbjs.setConfig(setConfigObjPbRcs);

					window.pbjs.bidderSettings = {
						standard: {
							storageAllowed: true,
						}
					};

					window.pbjs.addAdUnits(window.adUnits);
					/* Prebid Config End */

					/* AMAZON PREBID START */
					if (checkConfig('prebid') === false || checkConfig('amazon') !== true) {
						pbjs.requestBids({
							timeout: PREBID_TIMEOUT_BATCH,
							adUnitCodes: [div],
							bidsBackHandler: function () {
								pbjs.setTargetingForGPTAsync([div]);
								googletag.pubads().refresh([gptadslotBatchPage]);
								dfpPrintLog('framex refresh prebid')
							}
						});
					}
					/* AMAZON PREBID END */

				});
			}
			refreshBid_batchsSlot()
		}

		if (checkConfig('prebid') == false || (pos !== "Middle" && pos !== "Middle1" && pos !== "Middle2" /* && pos !== "Bottom2" */ && pos !== "Floor" && framex == undefined)) {
			dfpPrintLog("framex == undefined");
			googletag.pubads().refresh([gptadslotBatchPage]);
		}

		googletag.cmd.push);
	}

	//*EXAMPLE EXIT CALL*// refreshBatchPageSlots ("TopLeft","/TopLeft", "rcsad_TopLeftExt")

	//* INIZIO SEDANO *//

	window.printScrollSlots = function (idScrollSlots, creaDiv) {
		topMarginSlots = 0;
		for (var i = 0; i < idScrollSlots.length; i++) {
			if (creaDiv == "creadiv") {
				topMarginSlots = topMarginSlots + 300;
				var elem = document.createElement('div');
				elem.id = idScrollSlots[i];
				elem.style.cssText = 'float:left;width:300px;top:' + topMarginSlots + 'px;height:250px;z-index:100;background:#000;position:absolute';
				document.body.appendChild(elem);
			}
			googletag.cmd.push(function () {
				if (idScrollSlots[i].indexOf("Frame1") > -1) {
					var newSlot = googletag.defineSlot('/35821442/' + window.RCSAD_sitepage + "/Frame1", sizeCurPosDfpRcsF1, idScrollSlots[i]).addService(googletag.pubads()).setTargeting("gestione_exitpage", "false");
				} else if (idScrollSlots[i].indexOf("Frame2") > -1) {
					var newSlot = googletag.defineSlot('/35821442/' + window.RCSAD_sitepage + "/Frame2", sizeCurPosDfpRcsF2, idScrollSlots[i]).addService(googletag.pubads()).setTargeting("gestione_exitpage", "false");
				} else if (idScrollSlots[i].indexOf("Position3.1") > -1) {
					var newSlot = googletag.defineSlot('/35821442/' + window.RCSAD_sitepage + "/Position3.1", sizeCurPosDfpRcsP3, idScrollSlots[i]).addService(googletag.pubads()).setTargeting("gestione_exitpage", "false");
				} else if (idScrollSlots[i].indexOf("Position3.2") > -1) {
					var newSlot = googletag.defineSlot('/35821442/' + window.RCSAD_sitepage + "/Position3.2", sizeCurPosDfpRcsP3, idScrollSlots[i]).addService(googletag.pubads()).setTargeting("gestione_exitpage", "false");
				} else if (idScrollSlots[i].indexOf("Topper") > -1) {
					var newSlot = googletag.defineSlot('/35821442/' + window.RCSAD_sitepage + "/Topper", sizeCurPosDfpRcsTpr, idScrollSlots[i]).addService(googletag.pubads()).setTargeting("gestione_exitpage", "false");
				}
				googletag.display(idScrollSlots[i]);
				googletag.pubads().refresh([newSlot]);
			});
		}
		//*EXAMPLE EXIT CALL*// printScrollSlots(['Frame1-1', 'Frame2-1','Frame1-2', 'Frame2-3']);
	}
	//* FINE SEDANO *//


	// RESET SKIN
	window.skinResetVideoPage = function () {
		document.body.className = document.body.className.replace("skin", "");
		document.body.style.background = "";
		document.body.style.paddingTop = "";
		if (document.getElementById("barra_click_sx")) {
			document.getElementById("barra_click_sx").remove();
		}
		if (document.getElementById("barra_click_dx")) {
			document.getElementById("barra_click_dx").remove();
		}
		if (document.getElementById("barra_click_top")) {
			document.getElementById("barra_click_top").remove();
		}
	};
	// FINE RESET SKIN

	// FUNCTION REFRESH TABLET ORIENTATION CHANGE //
	if (deviceAdvFreq.tablet() && (checkConfig('TLSizeRefrOrient') == true && RCSAD_listpos.indexOf('Top,')<=-1) && checkConfig('skinontopleft') == false) {
		window.addEventListener("orientationchange", function () {
			skinResetVideoPage();
			setTimeout(function () {
				dfpPrintLog('Orientamento cambiato. Faccio partire la refresh SOLO ADV')
				googletag.pubads().refresh();
			}, 500);
		});
	}

}

// START - MICHELE
var _cfgTlStickyMob = {
	topleft: null,
	getTopLeft: function(){
		this.topleft = ('undefined' !== typeof document.getElementById('rcsad_TopLeft') && null !== document.getElementById('rcsad_TopLeft')) ? document.getElementById('rcsad_TopLeft') : null;
	},
	stickyTl: function(up_or_down, timeout, showBtnOnStart, cssBtn, cssTl){
		var _this = this;
		document.addEventListener('eventloadedTlDFP', function() {
			_this.getTopLeft();
			if('undefined' !== typeof _this.topleft && null !== _this.topleft){
				_this.sticky(_this.topleft, up_or_down, timeout, showBtnOnStart, cssBtn, cssTl);
			} else {
				dfpPrintLog("[STICKY-TL]: Cannot find topleft");
			}
		});
	},
	createCloseBtn: function(styleBtn){
		var _this = this;
		var btn = document.createElement('div');
		btn.id = 'closeBtnTl';
		btn.style.cssText = styleBtn;
		document.getElementById('rcsad_TopLeft').insertAdjacentElement('afterbegin', btn);
		document.getElementById('closeBtnTl').addEventListener('click', function(){
			_this.topleft.style.display = 'none';
			_this.hideOrShowBtn('hide');
		});
	},
	hideOrShowBtn: function(o){
		o == 'show' ? document.getElementById('closeBtnTl').style.display = 'block' : o == 'hide' ? document.getElementById('closeBtnTl').style.display = 'none' : null;
	},
	sticky: function(topleft, up_or_down, timeout, showBtnOnStart, cssBtn, cssTl){
		var _this = this;

		_this.createCloseBtn(cssBtn);
		if(showBtnOnStart === true){
			_this.hideOrShowBtn('show');
		}
		setTimeout(function(){
			if(showBtnOnStart === true){
				_this.hideOrShowBtn('hide');
				topleft.style.display = 'none';
			} else {
				_this.hideOrShowBtn('show');
			}
		}, timeout);
		var a = up_or_down == "up" ? "top:0" : "bottom:0";
		topleft.style.cssText = "position: fixed;"+ a +"; " + cssTl;
		var tl_iframe = topleft.querySelector('div[id*="google"]');
		if (tl_iframe) {
			tl_iframe.style.cssText += 'display: flex; justify-content: center;';
		}
	},
	checkTlVisibility: function () {
		let counterimgIntroObserver = 0;
		document.addEventListener('eventDFPready', function (e) {
			googletag.cmd.push(function () {
				googletag.pubads().addEventListener('slotRenderEnded', function (event) {
					if (event.slot.getSlotElementId().indexOf("Position1") > -1) {
						counterimgIntroObserver+=1;
						if (!event.isEmpty && counterimgIntroObserver<=1) {

							var imgIntroObserver = document.createElement('div');
							imgIntroObserver.id = "imgIntroObserver";
							imgIntroObserver.style.cssText = "position: fixed;top: 0px;width: 1px;height: 1px;z-index: 999999";
							document.body.appendChild(imgIntroObserver);

							function isVisibleIntro(elem) {
								if (!(elem instanceof Element)) throw Error('DomUtil: elem is not an element.');
								const style = getComputedStyle(elem);
								if (style.display === 'none') return false;
								if (style.visibility !== 'visible') return false;
								if (style.opacity < 0.1) return false;
								if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height +
									elem.getBoundingClientRect().width === 0) {
									return false;
								}
								const elemCenter = {
									x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
									y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
								};
								if (elemCenter.x < 0) return false;
								if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
								if (elemCenter.y < 0) return false;
								if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
								let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
								do {
									if (pointContainer === elem) return true;
								} while (pointContainer = pointContainer.parentNode);
								return false;
							}

							function checkTlVisibilityIntro() {
								elementToCheckVisibIntro = top.document.getElementById('imgIntroObserver');
								dfpPrintLog('checkivisible_4: ' + isVisibleIntro(elementToCheckVisibIntro))
								if (isVisibleIntro(elementToCheckVisibIntro)) {
									clearInterval(varcheckTlVisibilityIntro);
									dfpPrintLog('checkivisible_4: start countdown hide topleft');
										setTimeout(function () {
											if (document.getElementById('rcsad_TopLeft')) {
												document.getElementById('rcsad_TopLeft').style.display="none"
											}
										}, 10000);

								}
							}

								setTimeout(function () {
									varcheckTlVisibilityIntro = setInterval(checkTlVisibilityIntro, 1000);
									dfpPrintLog('checkivisible_4: start checking')
								}, 5000);
								setTimeout, 50000);

						}

					}
				});
			});
		}, false);
	}
};

var _cfgRefreshBatch = {
	positions: [],
	batch_positions: {},
	init: function(p) {
		var _this = this;
		_this.positions = p;
		_this.setBatchPositions();
		_this.callRefreshBatch();
		_this.collapseEmptyPos();
	},
	collapseEmptyPos: function() {
		_this = this;
		window.googletag = window.googletag || {
			cmd: []
		};
		googletag.cmd.push(function() {
			googletag.pubads().addEventListener('slotRenderEnded', function(event) {
				dfpPrintLog("slotrendered: " + event.slot.getSlotElementId());
				if (event.slot.getSlotElementId().indexOf("rcsad_"+_cfgRefreshBatch.positions + "_") > -1) {
					dfpPrintLog("slotrendered"+ _cfgRefreshBatch.positions + "_");
					var FcontainsAd = !event.isEmpty
					, el = document.getElementById(event.slot.getSlotElementId());
					setTimeout(function() {
						dfpPrintLog("COLLASSO "+_cfgRefreshBatch.positions + ": " + el.id + " figli: " + el.firstChild.childNodes.length);
						if ((FcontainsAd == false || event.size[1] == 1) || el.firstChild.childNodes.length <= 0) {
							dfpPrintLog("COLLASSO "+_cfgRefreshBatch.positions +"_X !!: " + el.id);
							el.className += " is-hidden";
						}
					}, 1000);
				}
			});
		});
	},
	set: function(path, value) {
		var _this = this
		, schema = _this.batch_positions
		, pList = path.split('.')
		, len = pList.length;
		for (var i = 0; i < len - 1; i++) {
			var elem = pList[i];
			if (!schema[elem])
				schema[elem] = {}
			schema = schema[elem];
		}
		schema[pList[len - 1]] = value;
	},
	setBatchPositions: function() {
		var _this = this;
		var elToDelete = [];
		_this.positions.forEach(function(el) {
			if (top.RCSAD_listpos.indexOf(el) > 0) {
				var pos = document.querySelectorAll("[id*='rcsad_" + el + "_']")
				, counter = 0, id = 3;
				pos.forEach(function(x) {
					counter++;
					id++;
					_this.set(el + ".nodes." + x.id + ".node", x);
					_this.set(el + ".nodes." + x.id + ".id", id);
					_this.set(el + ".nodes." + x.id + ".cnt", counter);
				});
				_this.set(el + ".counter", counter);
			} else {
				elToDelete.push(el);
			}
		});
		elToDelete.forEach(function(el){
			_this.positions.splice(_this.positions.indexOf(el), 1);
			dfpPrintLog( _this.positions);
		})
	},
	isInViewport: function(el) {
		var rect = el.getBoundingClientRect();
		var elemTop = rect.top;
		var elemBottom = rect.bottom;
		isVisible = elemTop < window.innerHeight && elemBottom >= 0;
		return isVisible;
	},
	checkPosExistence: function() {
		var _this = this;
		_this.positions.forEach(function(el) {
			var pos = document.querySelectorAll("[id*='rcsad_" + el + "_']")
			, counter = _this.batch_positions[el]['counter'];
			if (pos.length > _this.batch_positions[el]['counter']) {
				pos.forEach(function(x) {
					if (x.id.indexOf("container") < 0 && x.style.display === 'none') {
						_this.set(el + ".nodes." + x.id + ".node", x);
						counter++;
					}
				});
				_this.set(el + ".counter", counter);
			}
		});
	},
	callRefreshBatch: function() {
		var _this = this
		, throttled = false;
		function loopForBatch() {
			if (!throttled) {
				for (var key1 in _this.batch_positions) {
					var positions = _this.batch_positions[key1];
					var node = 'nodes';
					if (!throttled) {
						_this.checkPosExistence();
					}
					for (node in positions) {
						var pos = positions[node];
						for (var key2 in pos) {
							var node_name = pos[key2];
							var node = node_name['node'];
							var id = node_name['id'];

							cnt = key2.indexOf("Frame3") > -1 ? 3 + node_name['cnt'] : node_name['cnt'];
							if (node) {
								node.style.display = 'block';
								if (_this.isInViewport(node)) {
									var _key1 = key1.indexOf('Frame')>-1 ? 'Frame' : key1;
									refreshBatchPageSlots(_key1 + cnt, "/" + _key1 + cnt, key2, true);
									delete pos[key2];
									_this.batch_positions[key1]['counter']--;
									dfpPrintLog('fx inview: '+ _key1 + id);
								}
							}
						}
					}
				}
				throttled = true;
				setTimeout, 500);
			}
		}
		window.addEventListener('scroll', loopForBatch);
	}
};

hostname = location.hostname.toLowerCase();
if ((RCSAD_sitepage.indexOf('calciomercato.com') > -1 || hostname.indexOf('ilbianconero') > -1 || hostname.indexOf('preprod.sosfanta') > -1) && !deviceAdvFreq.mobile()){
	// If No Skin then Batch Position3.1, Position3.2

	document.addEventListener('eventloadedP3_1DFP', function() {
		initializeSkyscraper('rcsad_Position3.1', 'left')
	})

	document.addEventListener('eventloadedP3_2DFP',)

	document.addEventListener('eventloadedTlDFP',)

	function initializeSkyscraper(id, position) {
		skyScraper = document.getElementById(id);
		try {
			skyScraper.style.cssText += 'position:fixed; z-index: 0; top:6%;';
			if (position === 'right') {
				skyScraper.style.cssText += 'right: 0;';
			}
		} catch (e) {
			console.error('skyscraper element not found');
		}
	}

}

if (checkSP('lasicilia.it')) {
	setTimeout(function() {
		var batchPos = ["Frame3"];
		document.querySelectorAll("[id*='rcsad_Frame3_']").forEach)
		_cfgRefreshBatch.init(batchPos);
	}, 2000);
}

//INIZIO STICKY TL MOBILE LASICILIAWEB.IT
if(window.RCSAD_sitepage.indexOf('lasiciliaweb.it') > -1 && deviceAdvFreq.mobile()){

	var cssBtn = "margin: 0px 0px 0px 88%;width: 31px;height: 31px;background-size:contain;background-repeat: no-repeat;color: white;z-index: 999999999;font-size: 35px;cursor: pointer;background-image:url('https://components2.rcsobjects.it/rcs_adv/v1/distro/dfp/advtemplate/introDfp/xchiudi.svg');display:none;";
	var cssTl = "z-index: 99999; width: 100%; margin: 0; height: auto; bottom: 0; left: 0;";
	_cfgTlStickyMob.stickyTl("down", 10000, false, cssBtn, cssTl);

}
//FINE STICKY TL MOBILE LASICILIAWEB.IT

//INIZIO STICKY TL MOBILE LAGAZZETTADELMEZZOGIORNO.IT
if(window.RCSAD_sitepage.indexOf('lagazzettadelmezzogiorno.it') > -1 && deviceAdvFreq.mobile()){

	var cssBtn = "margin: 0px 0px 0px 88%;width: 31px;height: 31px;background-size:contain;background-repeat: no-repeat;color: white;z-index: 999999999;font-size: 35px;crsor: pointer;background-image:url('https://components2.rcsobjects.it/rcs_adv/v1/distro/dfp/advtemplate/introDfp/xchiudi.svg');display:none;";
	var cssTl = "z-index: 99999; width: 100%; margin: 0; padding: 0; height: auto; bottom: 0; left: 0; text-align: center !important;";

	_cfgTlStickyMob.checkTlVisibility();
	_cfgTlStickyMob.stickyTl("down", 50000, true, cssBtn, cssTl);

}
//FINE STICKY TL MOBILE LAGAZZETTADELMEZZOGIORNO.IT

//INIZIO STICKY TL MOBILE + STICKY SIDEBAR LA7.IT
if(window.RCSAD_sitepage.indexOf('La7.it') > -1){
	setTimeout(function(){
		if(deviceAdvFreq.mobile() && typeof top.RECOD3_StaticSmartFlyerHide === 'undefined'){
			var cssBtn = "margin: 0px 0px 0px 88%;width: 31px;height: 31px;background-size:contain;background-repeat: no-repeat;color: white;z-index: 999999999;font-size: 35px;crsor: pointer;background-image:url('https://components2.rcsobjects.it/rcs_adv/v1/distro/dfp/advtemplate/introDfp/xchiudi.svg');display:none;";
			var cssTl = "z-index: 99999; width: 100%; margin: 0; padding: 0; height: auto; bottom: 0; left: 0; text-align: center !important;";

			_cfgTlStickyMob.checkTlVisibility();
			_cfgTlStickyMob.stickyTl("down", 50000, true, cssBtn, cssTl);
		}
	}, 0);

	// Da configurare in base al tipo pagina
	var batchPos = ["BottomLeft"];
	_cfgRefreshBatch.init(batchPos);

	var body = top.document.body;

	function popupCall(data) {
		var divPopupSismek = document.getElementById('script-popup-sismek');
		var popupEl = document.getElementById('HDF_RPU_SKIN_INJECTION');
		var eyeDiv = document.getElementById('eyeDiv');
		var popupType = data.nativePopup;
		var sismekPlacementId = data.placementID;
		if (eyeDiv && popupEl && eyeDiv.clientWidth === 0 && eyeDiv.clientHeight === 0) {
			eyeDiv.parentNode.removeChild(eyeDiv);
			popupEl.parentNode.removeChild(popupEl);
		}
		while (divPopupSismek && divPopupSismek.firstChild) {
			divPopupSismek.removeChild(divPopupSismek.lastChild);
		}
		(function(d, script, div) {
			var divPopupSismek = document.getElementById('script-popup-sismek');
			if (!divPopupSismek) {
				div = d.createElement('div');
				div.id = 'script-popup-sismek';
				div.style.cssText = "display:none;";
				d.getElementsByTagName('body')[0].appendChild(div);
			}
			script = d.createElement('script');
			script.type = 'text/javascript';
			script.async = true;
			script.src = 'https://secure-ds.serving-sys.com/BurstingScript/programmatic/liquidhtml5shells/CS/HDF/MM_mcJS_HDF_RPU_INJECTION.js?MM_mcJS_HDF_RPU_rand[%E%][%rand%][%Q%]HDFRPUFormat[%E%]HDFRPU_Skin[%Q%]HDFRPUInjection[%E%]true[%Q%]HDFRPUPlacement[%E%]https://bs.serving-sys.com/Serving/adServer.bs?ncu=$$%%CLICK_URL_UNESC%%$$&c=28&cn=display&pli=' + sismekPlacementId + '&w=1&h=1&ord=%%CACHEBUSTER%%&z=0';
			d.getElementById('script-popup-sismek').appendChild(script);
		}(document));
	}

	function clearPopup() {
		var popupEl = document.getElementById('HDF_RPU_SKIN_INJECTION');
		var eyeDiv = document.getElementById('eyeDiv');
		if (popupEl && eyeDiv) {
			eyeDiv.parentNode.removeChild(eyeDiv);
			popupEl.parentNode.removeChild(popupEl);
		}
	}

	var nativeIframeOrigin = "safeframe.googlesyndication.com";
	window.addEventListener('message', function(e) {
		if (e.origin.indexOf(nativeIframeOrigin) > -1) {
			if (e.data === 'native-la7') {
				var opt = {
					"nativeType": ""
				}
				var ifrmB2 = document.querySelector("#rcsad_Bottom2 iframe");
				if (deviceAdvFreq.mobile()) {
					if (top.location.href.indexOf('podcast') > 0) {
						opt.nativeType = "podcastMobile";
						ifrmB2.width = '100%';
						ifrmB2.height = '549.938px';
					} else {
						opt.nativeType = 'normaleHP';
						ifrmB2.width = '100%';
						ifrmB2.height = '350px';
					}
				} else {
					if (top.location.href.indexOf('podcast') > 0 && top.location.href.indexOf('i-responsabili') < 0) {
						opt.nativeType = "podcastDsk";
						ifrmB2.width = '1024px';
						ifrmB2.height = '393.23px';
					} else if (top.LA7_pagetype === 'altro') {
						opt.nativeType = 'programmaDsk';
						ifrmB2.width = '315px';
						ifrmB2.height = '197px';
					} else if (top.LA7_pagetype === 'homepage') {
						opt.nativeType = 'normaleHP';
						ifrmB2.width = '260px';
						ifrmB2.height = '350px';
					} else {
						opt.nativeType = 'normaleSez';
						ifrmB2.width = '100%';
					}
				}
				e.source.postMessage(opt, e.origin);
			} else if (e.data.nativePopup) {
				popupCall(e.data)
			}
		}
		// Evento chiusura native popup
		else if (e.data === 'nativePopupClosed') {
			clearPopup();
		}
	});


}

if (window.location.hostname.indexOf('leitv.it') > -1) {
	setTimeout(function(){
		var batchPos = ["Frame3", "BottomLeft"];
		_cfgRefreshBatch.init(batchPos);
	}, 5000);

	var nativeIframeOrigin = "safeframe.googlesyndication.com";
	window.addEventListener('message', function(e) {
		if (e.origin.indexOf(nativeIframeOrigin) > -1) {
			if (e.data === 'native-leitv') {
				var opt = {
					"nativeType": "homepage",
					"isMobile": false
				}
				var ifrmB2 = document.querySelector("#rcsad_Bottom2 iframe");
				if (deviceAdvFreq.mobile()) {
					ifrmB2.height = '100%';
					opt.isMobile = true;
				}
				else if (typeof top.sc_sezione !== 'undefined' && typeof top.tipo_pagina !== 'undefined') {
					if (top.sc_sezione === 'homepage' || top.tipo_pagina === 'articolo') {
						opt.nativeType = "homepage";
						ifrmB2.width = '100%';
						ifrmB2.height = '495px';
					} else {
						opt.nativeType = 'hpsezione';
						ifrmB2.width = '100%';
						ifrmB2.height = '444px';
					}
				}
				e.source.postMessage(opt, e.origin);
			}
		}
	});
}

// END - MICHELE
	}
}

if (RCSAD_sitepage.indexOf('dmove.it') <= -1 || typeof restyling2021 !== "undefined") {
	if (RCSAD_sitepage.indexOf('La7') > -1 || RCSAD_sitepage.indexOf('tgla7') > -1 || RCSAD_sitepage.indexOf('leitv') > -1) {
		if (typeof window._permutivefired !== "undefined") {
			rcsAdPartner.init()
			dfpPrintLog('initGptTag-PERMUTIVE: sendAdserverRequest with PERMUTIVE CALLBACK GIA PARTITA');
		} else {
			document.addEventListener("_permutivefired",);

			// TAD
			if (window.location.href.includes('tad-test')) {
				
				if (window.permutiveCMPReject) {
					googletag.cmd.push(() => {
						googletag.pubads().setTargeting('serving_restriction', 'TAD');
					});
					rcsAdPartner.init();
				} else {
					function handler() {
						googletag.cmd.push(() => {
							googletag.pubads().setTargeting('serving_restriction', 'TAD');
						});
						rcsAdPartner.init();
						document.removeEventListener('permutiveCMPReject', handler);
					}
					document.addEventListener('permutiveCMPReject', handler);
				}
			}
		}
	} else {
		rcsAdPartner.init()
		dfpPrintLog('initGptTag-PERMUTIVE: INIT senza attendere evento _permutivefiredevent');
	}
} else {
	var doRefresh = false;
	document.addEventListener('turbolinks:load', function (e) {
		dfpPrintLog('turbolinks:load');
		if (typeof googletag !== 'undefined' && typeof googletag.destroySlots !== 'undefined') {
			googletag.destroySlots()
		};
		rcsAdPartner.init();

		if (doRefresh) {
			setTimeout, 500);
		}

		doRefresh = true;

	}, false);
}

// Margin TopLeft dday
if ( RCSAD_sitepage.indexOf('dday.it') > -1 ) {
	document.addEventListener('eventloadedTlDFP', function(){
		tl = document.getElementById("rcsad_TopLeft");
		if (tl) {
			tl.style.cssText += "margin: 12px 0;";
		}
	})
}


// FIX QUINEWS PASSBACK
if (window.RCSAD_sitepage.indexOf('Quinews.net') > -1 || window.RCSAD_sitepage.indexOf('lasicilia.it') > -1) {
	var timeoutCheckPassback = 3000;
	// if (!deviceAdvFreq.mobile()) {
		document.addEventListener("eventloadedTlDFP", function () {
			setTimeout(function () {
				try {
					var parentTlPsbck = document.getElementById("rcsad_TopLeft").parentElement;
					var iframePassback = document.getElementById("google_ads_iframe_/35821442/" + RCSAD_sitepage + "/TopLeft_0");
					var passbackGpt = iframePassback.contentWindow.document.getElementById("gpt-passback");
					if (passbackGpt !== null) {
						var elmntiframePassback = iframePassback.contentWindow.document.getElementById("gpt-passback").childNodes;
						var arrayTl = Array.prototype.slice.call(elmntiframePassback);
						arrayTl.forEach(function (item) {
							dfpPrintLog("checkidchild Tl", item.id);
							if (item.id !== undefined && item.id.indexOf("google_ads_iframe_") > -1 && item.childNodes.length === 0) {
								parentTlPsbck.style.display = "none";
								dfpPrintLog('checkidchild Tl collapsed')
							} else if (item.id !== undefined && item.id.indexOf("google_ads_iframe_") > -1 && item.childNodes.length > 0) {
								iframePassback.style.height = item.clientHeight + "px";
								// parentTlPsbck.style.height = item.clientHeight + "px";
								dfpPrintLog('checkidchild Tl resized')
							}
						});
					}
				} catch (error) {
					dfpPrintLog('error passback iframe TopLeft')
				}
			}, timeoutCheckPassback);
		});
		document.addEventListener("eventloadedF1DFP", function () {
			setTimeout(function () {
				try {
					var parentF1Psbck = document.getElementById("rcsad_Frame1");
					var iframePassbackF1 = document.getElementById("google_ads_iframe_/35821442/" + RCSAD_sitepage + "/Frame1_0");
					var elmntiframePassbackF1 = iframePassbackF1.contentWindow.document.getElementById("gpt-passback");
					dfpPrintLog("checkidchild F1 elmntiframePassbackF1 !== null: ", elmntiframePassbackF1 !== null);
					if (elmntiframePassbackF1 !== null) {
						var elmntiframePassbackF1Nodes = iframePassbackF1.contentWindow.document.getElementById("gpt-passback").childNodes;
						var arrayF1 = Array.prototype.slice.call(elmntiframePassbackF1Nodes);
						arrayF1.forEach(function (item) {
							dfpPrintLog("checkidchild F1", item.id);
							if (item.id !== undefined && item.id.indexOf("google_ads_iframe_") > -1 && item.childNodes.length === 0) {
								parentF1Psbck.style.display = "none";
								dfpPrintLog('checkidchild F1 collapsed')
							} else if (item.id !== undefined && item.id.indexOf("google_ads_iframe_") > -1 && item.childNodes.length > 0) {
								iframePassbackF1.style.height = item.clientHeight + "px";
								parentF1Psbck.style.height = item.clientHeight + "px";
								dfpPrintLog('checkidchild F1 resized')
							}
						});
					}
				} catch (error) {
					dfpPrintLog('error passback iframe Frame1')
				}
			}, timeoutCheckPassback);
		});
	// }
}
