var Postmedia = Postmedia || {};
Postmedia.adConfig = Postmedia.adConfig || {};
Postmedia.Properties = Postmedia.Properties || {};
Postmedia.Weather = Postmedia.Weather || {};
/* START: Define local ad obj */

Postmedia.adConfig.Constants = {
refreshConfig: {
	delay: 30,
	max: 5,
	buffer: 50, //how much buffer should be considered part of the ad?
	per: true //is "buffer" a percentage? (false=pixels)
},
lazyloadConfig: {
	maxWaitTime: 25,
	buffer: 100
},
bigboxtop: {
	desktop: [[300,250],[300,251],[300,600],[300,601]],
	mobile: [[300,250],[300,251],[300,50],[320,50]],
	loc: "top",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
bigboxtop2: { // 2.0
	desktop: [[300,250],[300,251],[300,600],[300,601],[300,1050]],
	mobile: [],
	loc: "top",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
bigboxtop3: { // Some vendors
	desktop: [[300,250],[300,251]],
	mobile: [],
	loc: "top",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
bigboxmid: {
	desktop: [[300,250],[300,252],[300,600],[300,602]],
	mobile: [],
	loc: "mid",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
bigboxbot: {
	desktop: [[300,250],[300,253]],
	mobile: [[300,250],[300,253]],
	loc: "bot",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
bigboxbot2: { // FP
	desktop: [[300,250],[300,253],[300,600],[300,603]],
	mobile: [[300,250],[300,253]],
	loc: "bot",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
bigboxbotw300x600: { // Exception made for Business>Smart Shift, newspaper.com
	desktop: [[300,250],[300,252],[300,600]],
	mobile: [],
	loc: "bot",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
billboard: { 
	desktop: [[960,86],[970,86],[970,250]],
	mobile: [],
	loc: "top",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
billboardleaderboard: { // FP
	desktop: [[728,90],[728,91],[960,86],[970,90],[970,250]],
	mobile: [],
	loc: "top",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
leaderboard: { 
	desktop: [[728,90]],
	mobile: [],
	loc: "top",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
leaderboard2: { // 2.0
	desktop: [[728,90],[970,90],[970,250],[1200,90],[1200,250]],
	mobile: [],
	loc: "top",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
leaderboard3: { // Some vendors
	desktop: [[728,90],[970,90]],
	mobile: [],
	loc: "top",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
leaderboard4: { // Some vendors
	desktop: [[728,90],[970,250]],
	mobile: [],
	loc: "top",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
leaderboardmid1: {
	desktop: [[728,90]],
	mobile: [],
	loc: "mid",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
leaderboardmid2: {
	desktop: [[728,90]],
	mobile: [],
	loc: "mid2",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
leaderboardbot: {
	desktop: [[728,90],[728,92]],
	mobile: [],
	loc: "bot",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
impulse: {
	desktop: [[300,100]],
	mobile: [],
	loc: "top",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
impulsemid: {
	desktop: [[300,100]],
	mobile: [],
	loc: "mid",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
impulsebot: {
	desktop: [[300,100]],
	mobile: [],
	loc: "bot",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
mobileleaderboard: {
	desktop: [],
	mobile: [[300,50],[320,50]],
	loc: "top",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
mobileleaderboardmid: {
	desktop: [],
	mobile: [[300,50],[320,50]],
	loc: "mid",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
mobileleaderboardmid2: {
	desktop: [],
	mobile: [[300,50],[320,50]],
	loc: "mid2",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
mobileleaderboardbot: {
	desktop: [],
	mobile: [[300,50],[320,50]],
	loc: "bot",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
mobilebigboxtop: {
	desktop: [],
	mobile: [[300,250],[300,251],[300,50],[320,50]],
	loc: "top",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
mobilebigboxtop2: { // Some 3rd Parties
	desktop: [],
	mobile: [[300,250],[300,251]],
	loc: "top",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
mobilebigboxmid: {
	desktop: [],
	mobile: [[300,250],[300,252]],
	loc: "mid",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
mobilebigboxmid2: { // Some 3rd Parties
	desktop: [],
	mobile: [[300,250],[300,252]],
	loc: "mid",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
mobilebigboxbot: {
	desktop: [],
	mobile: [[300,250],[300,253],[300,50],[320,50]],
	loc: "bot",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
mobilebigboxbot2: { // Some 3rd Parties
	desktop: [],
	mobile: [[300,250],[300,253]],
	loc: "bot",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
oop: {
	desktop: [],// n/a
	mobile: [],
	loc: "top",
	oop: true,
	lazyAllowed: true,
	refreshAllowed: true
},
skyscraper: {
	desktop: [[160,600]],
	mobile: [],
	loc: "top",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
tile: {
	desktop: [[160,40]],
	mobile: [],
	loc: "top",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
tile2: {
	desktop: [[120,60]],
	mobile: [],
	loc: "top",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
tile3: {
	desktop: [[160,90]],
	mobile: [],
	loc: "top",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
},
wallpaper: {
	desktop: [[4,4]],
	mobile: [],
	loc: "top",
	oop: false,
	lazyAllowed: true,
	refreshAllowed: true
}
}
//Classes
//http://stackoverflow.com/questions/12487352/how-do-i-pause-and-resume-a-timer
function AdRefresh(){
	var totalSeconds = 0;
	this.totalRefreshes = 0;
	this.isInitialized = false;
	
	this.start = function () {
		this.interval = setInterval( 1000);
		this.isInitialized = true;
		return totalSeconds;
	};
	
	this.timer = 
	
	this.pause = function () {
		clearInterval(this.interval);
		delete this.interval;
		return totalSeconds;
	};
	
	this.restart = function () {
		this.pause();
		totalSeconds = 0;
		this.start();
		return totalSeconds;
	}

	this.resume = function () {
		if (!this.interval) this.start();
		return totalSeconds;
	}
};
//END Classes

// Override adConfig.keys for specific page targeting
function overrideAdConfigKeys(){
	const pageTargetingKeys = {
		"edmonton/celebrating/search": {
			imp: "celebrating",
			ck:  "celebrating"
		},
		"edmonton/anniversaries/search":  {
			imp: "anniversaries",
			ck:  "celebrating",
			sck: "anniversaries"
		},
		"edmonton/graduation/search":  {
			imp: "graduation",
			ck:  "celebrating",
			sck: "graduation"
		}
	}
	// story page shall have the 'page' key and should not have 'imp' key
	// example of story url:
	// https://classifieds.edmontonjournal.com/edmonton/community/back-in-business-live-professional-boxing/cb2591e725da411aaa28b51ef5f6
	//
	if (/\/\w+\/\w+\/(.+)\/(.+)/i.test(window.location.pathname)){
		if (Postmedia.adConfig.keys.hasOwnProperty("imp")) { delete Postmedia.adConfig.keys.imp; }
		return {...Postmedia.adConfig.keys,...{page: "story"} } };
	for (let adKeys in pageTargetingKeys) {
		if (window.location.pathname.includes(adKeys)){
			return {...Postmedia.adConfig.keys, ...pageTargetingKeys[adKeys], ...{page: "index"}};
		}
	}
	return Postmedia.adConfig.keys;
}
// end override


Postmedia.adConfig.sra = (typeof Postmedia.adConfig.sra === "boolean") ? Postmedia.adConfig.sra : true;
Postmedia.adConfig.exclusions = (Postmedia.adConfig.exclusions) ? Postmedia.adConfig.exclusions : [];
Postmedia.adConfig.adslots = (Postmedia.adConfig.adslots) ? Postmedia.adConfig.adslots : [];
Postmedia.adConfig.networkId = (Postmedia.adConfig.networkId) ? Postmedia.adConfig.networkId : "3081";
Postmedia.adConfig.site = (Postmedia.adConfig.site) ? Postmedia.adConfig.site : "ccn.com";
Postmedia.adConfig.mobileSite = (Postmedia.adConfig.mobileSite) ? Postmedia.adConfig.mobileSite : "ccn.com";
Postmedia.adConfig.zone = (Postmedia.adConfig.zone) ? Postmedia.adConfig.zone : "index";
Postmedia.adConfig.disableInitialLoad = (typeof Postmedia.adConfig.disableInitialLoad === "boolean") ? Postmedia.adConfig.disableInitialLoad : false;
Postmedia.adConfig.keys = overrideAdConfigKeys(); // Postmedia.adConfig.keys;
Postmedia.adConfig.lazyAds=[];
Postmedia.adConfig.divLoadCheckInterval=[];
var companionAdFlag=false;
var gptadslots=[];
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(();
/* START: Adobe Provided AamGpt code */
Postmedia.adConfig.AamGpt = {
strictEncode: function(str){
return encodeURIComponent(str).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
},
getCookie: 
getKey: function(c_name){
var c=this.getCookie(c_name);
c=this.strictEncode(c);
if(typeof c != "undefined" && c.match(/\w+%3D/)){
var cList=c.split("%3D");
if(typeof cList[0] != "undefined" && cList[0].match(/\w+/))
{
return cList[0];
}
}
},
getValues: function(c_name){
var c=this.getCookie(c_name);
c=this.strictEncode(c);
if(typeof c != "undefined" && c.match(/\w+%3D\w+/)){
var cList=c.split("%3D");
if(typeof cList[1] != "undefined" && cList[1].match(/\w+/))
{
var vList=cList[1].split("%2C");
if(typeof vList[0] != "undefined")
{
return vList;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}
};
/* END: Adobe Provided Postmedia.adConfig.AamGpt code */

Postmedia.adConfig.adInViewport = function(el, buffer, per)  {
	buffer = typeof buffer === "number" ? buffer : 0;
	per = typeof per === "boolean" ? per : false;
	var xpx = ypx = buffer;
	try {
		var rect=document.getElementById(el).getBoundingClientRect();
		if (per) {
			xpx=(rect.right-rect.left)*(buffer/100)*-1;
			ypx=(rect.bottom-rect.top)*(buffer/100)*-1;
		}
		return (
			(rect.top - ypx) <= (document.documentElement.clientHeight) && 
			(rect.left - xpx) <= (document.documentElement.clientWidth) && 
			(rect.bottom + ypx) >= 0 && 
			(rect.right + xpx) >= 0
		);
	} catch (e) {
		return true;	
	}
}

// Keep track of current slot loc
Postmedia.adConfig.curLoc = 1

// Define an ad.
Postmedia.adConfig.defineAd = function(slot) {
	// ad unit path should be the same between desktop and mobile
	// var adSite = Postmedia.Properties.isMobile ? Postmedia.adConfig.mobileSite : Postmedia.adConfig.site;
	var adSite = Postmedia.adConfig.site;
	var adSize = Postmedia.Properties.isMobile ? Postmedia.adConfig.Constants[Postmedia.adConfig.adslots[slot].type].mobile : Postmedia.adConfig.Constants[Postmedia.adConfig.adslots[slot].type].desktop;
	var adOop = Postmedia.Properties.isMobile ? false : Postmedia.adConfig.Constants[Postmedia.adConfig.adslots[slot].type].oop;
	if (adOop || adSize.length>0) { // Do if Oop ad or there are ad sizes
		// adLoc = Postmedia.adConfig.Constants[Postmedia.adConfig.adslots[slot].type].loc;
		adLoc = Postmedia.adConfig.curLoc;
		adName = Postmedia.adConfig.adslots[slot].name;
		gptadslots[adName] = (adOop) ? googletag.defineOutOfPageSlot('/'+Postmedia.adConfig.networkId+'/'+adSite+'/'+Postmedia.adConfig.zone, adName) : googletag.defineSlot('/'+Postmedia.adConfig.networkId+'/'+adSite+'/'+Postmedia.adConfig.zone, adSize, adName);
		if (Postmedia.adConfig.hasOwnProperty("keys") && Postmedia.adConfig.isLazyAd(Postmedia.adConfig.adslots[slot])){ // Lazy loaded ads need to have pagewide keys explicitly added.
			for (var prop in Postmedia.adConfig.keys)
				gptadslots[adName].setTargeting(prop , Postmedia.adConfig.keys[prop]);
		}
		for (var prop in Postmedia.adConfig.adslots[slot].keys) {
			if (prop!=undefined)
				gptadslots[adName].setTargeting(prop, Postmedia.adConfig.adslots[slot].keys[prop]);
		}
		if (adLoc != "")
			gptadslots[adName].setTargeting("loc", adLoc);
			Postmedia.adConfig.curLoc += 1;
		for (var ex in Postmedia.adConfig.adslots[slot].exclusions) {
			googletag.pubads().setCategoryExclusion(Postmedia.adConfig.adslots[slot].exclusions[ex]);
		}
		if (Postmedia.adConfig.adslots[slot].isCompanion) {
			gptadslots[adName].addService(googletag.pubads()).addService(googletag.companionAds())
			companionAdFlag=true;
		} else 
			gptadslots[adName].addService(googletag.pubads());		if (Postmedia.adConfig.enablerefresh && Postmedia.adConfig.adslots[slot].refresh && Postmedia.adConfig.Constants[Postmedia.adConfig.adslots[slot].type].refreshAllowed) {
			Postmedia.adConfig.adslots[slot].refresh = new AdRefresh();
			// if (Postmedia.adConfig.adInViewport(adName,Postmedia.adConfig.Constants.refreshConfig.buffer,Postmedia.adConfig.Constants.refreshConfig.per))
			Postmedia.adConfig.adslots[slot].refresh.start();
			Postmedia.adConfig.refreshListener(Postmedia.adConfig.adslots[slot]);
		}
		gptadslots[adName].setTargeting("rc", '0');
	}	
}

Postmedia.adConfig.getAdslotByName = function(name){
	try {
		for (var adnum in Postmedia.adConfig.adslots) {
			if (Postmedia.adConfig.adslots[adnum].name===name)
				return Postmedia.adConfig.adslots[adnum];
		}
		return null;
	} catch(e) {
		return null;
	}
}

/* START: Define GPT tags for header */
Postmedia.adConfig.headerAdSetup = function(){
	Postmedia.Properties = typeof(Postmedia.Properties) != 'undefined' ? Postmedia.Properties : {};
	Postmedia.Properties.isMobile = typeof(Postmedia.Properties.isMobile) != 'undefined' ? Postmedia.Properties.isMobile : false;
	var lazyFlag=false;
	var queryArr=window.location.search.substring(1).split("&");
	for (var slotnum in Postmedia.adConfig.adslots) {
		Postmedia.adConfig.adslots[slotnum].lazy = (typeof Postmedia.adConfig.adslots[slotnum].lazy === "boolean") ? Postmedia.adConfig.adslots[slotnum].lazy : true;
		if (Postmedia.adConfig.adslots[slotnum].type != undefined && Postmedia.adConfig.Constants[Postmedia.adConfig.adslots[slotnum].type] != undefined) {
			if (Postmedia.adConfig.isLazyAd(Postmedia.adConfig.adslots[slotnum])) {
				Postmedia.adConfig.lazyAds.push(slotnum);
				lazyFlag=true;
			} else
				Postmedia.adConfig.defineAd(slotnum);
		}
	}
	googletag.pubads().collapseEmptyDivs();
	if (Postmedia.adConfig.disableInitialLoad)
		googletag.pubads().disableInitialLoad();
	if(Postmedia.adConfig.sra || lazyFlag)
		googletag.pubads().enableSingleRequest();
	// Page-wide targeting
	if (typeof Postmedia.Location != "undefined" && typeof Postmedia.Location.lat != "undefined" && typeof Postmedia.Location.long != "undefined" && typeof Postmedia.Location.accuracy != "undefined") {
		if (!isNaN(Postmedia.Location.lat) && !isNaN(Postmedia.Location.long) && !isNaN(Postmedia.Location.accuracy))
			googletag.pubads().setLocation(Postmedia.Location.lat, Postmedia.Location.long, Postmedia.Location.accuracy*1000); //accuracy - convert metres to millimetres
	}
	if ( Postmedia.adConfig.hasOwnProperty("keys") ){
		for (var prop in Postmedia.adConfig.keys)
			googletag.pubads().setTargeting( prop , Postmedia.adConfig.keys[prop] );
	}
	if ( document.referrer )
		googletag.pubads().setTargeting( "r" , document.referrer.split('/')[2] );
	if ( Postmedia.Weather.CurrentDetails )
		googletag.pubads().setTargeting( "wc" , Postmedia.Weather.CurrentDetails.toLowerCase().split(' ').join('-') );
	if ( Postmedia.Weather.CurrentWindMi ) {
		try {
			var mph = Number(Postmedia.Weather.CurrentWindMi.split(" ")[0]);
			var bft = "3";
			if (mph<=3) bft = "0";
			else if (mph<=31) bft = "1";
			else if (mph<=63) bft = "2";
			googletag.pubads().setTargeting( "ww" , bft );
		} catch(e){}
	}
	if ( Postmedia.Weather.CurrentRealC ) {
		try {
			var tempc = Number(Postmedia.Weather.CurrentRealC.split(" ")[0]);
			var tempdesc = "6";
			if (tempc<=-20) tempdesc = "0";
			else if (tempc<=-10) tempdesc = "1";
			else if (tempc<=0) tempdesc = "2";
			else if (tempc<10) tempdesc = "3";
			else if (tempc<20) tempdesc = "4";
			else if (tempc<30) tempdesc = "5";
			googletag.pubads().setTargeting( "wt" , tempdesc );
		} catch(e){}
	}
	// Instart Logic
	if(  'undefined' != typeof I10C ) {
		if ( 'undefined' != I10C.Morph ) {
			if ( null != I10C.Morph ) {
				if ( 1 == I10C.Morph ) {
				   googletag.pubads().setTargeting( "shield" , "1" );
				}
			}
		}
	}
	// Client testing
	for (var i=0; i<queryArr.length; i++) {
		qk=queryArr[i].split("=")[0];
		qv=queryArr[i].split("=")[1];
		if (qk=="client_testing")
			googletag.pubads().setTargeting("ct", qv);
	}
	//Kijiji Custom Code
	if (parent.document.domain.toLowerCase().indexOf("kijiji.ca") > -1)
	{
		Postmedia.adConfig.Driving={}
		Postmedia.adConfig.Driving.manufacturer=["Acura","Alfa Romeo","AM General","AMC","Aston Martin","Audi","Bentley","BMW","Bricklin","Bugatti","Buick","Cadillac","Chevrolet","Chrysler","Daewoo","Datsun","Diahatsu","Dodge","Eagle","Ferrari","Fiat","Ford","Geo","GMC","Honda","HUMMER","Hyundai","Infiniti","International Harvester","Isuzu","Jaguar","Jeep","Kia","Land Rover","Lexus","Lincoln","Lamborghini","Lotus","Maserati","Maybach","Mazda","Mercedes Benz","Mercury","MG","MINI","Mitsubishi","Nissan","Oldsmobile","Opel","Peugeot","Plymouth","Pontiac","Porsche","Ram","Renault","Rolls Royce","Saab","Saturn","Scion","Shelby","Smart","Subaru","Suzuki","Toyota","Triumph","Volkswagen","Volvo"];
		
		//Make model year bodytype minyear maxyear location check from the page 
		Postmedia.adConfig.Driving.geoid = (typeof _pbk_loc_id !== "undefined") ? _pbk_loc_id : "";  //
		Postmedia.adConfig.Driving.lang = (typeof _pbk_language !== "undefined") ? _pbk_language : ""; //
		Postmedia.adConfig.Driving.pageid = (typeof _pbk_page_name !== "undefined") ? _pbk_page_name : ""; //
		Postmedia.adConfig.Driving.make = (typeof _pbk_att_carmake !== "undefined") ? _pbk_att_carmake : ""; //
		Postmedia.adConfig.Driving.model = (typeof _pbk_att_carmodel !== "undefined") ? _pbk_att_carmodel : ""; //
		Postmedia.adConfig.Driving.year = (typeof _pbk_att_caryear !== "undefined") ? _pbk_att_caryear : ""; //
		Postmedia.adConfig.Driving.bt = (typeof _pbk_att_carbodytype !== "undefined") ? _pbk_att_carbodytype : ""; //
		Postmedia.adConfig.Driving.mincy = (typeof _pbk_att_min_caryear !== "undefined") ? _pbk_att_min_caryear : ""; //
		Postmedia.adConfig.Driving.maxcy = (typeof _pbk_att_max_caryear !== "undefined") ? _pbk_att_max_caryear : ""; //
		Postmedia.adConfig.Driving.searchkw = (typeof _pbk_keywords !== "undefined") ? _pbk_keywords : "";
		
		//Get the url Param value
		function getParameter(param)
		{
		  //name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		  var paramSplit = "[\\?&;]"+param+"=([^;&#]*)";
		  var paramExp = new RegExp(paramSplit);
		  var paramvalue = paramExp.exec( window.location.href );
		  if( paramvalue == null )
		   return "";
		  else
			return paramvalue[1];
		} 
		
		//Search word insert in make
		if((Postmedia.adConfig.Driving.pageid  == "searchPage") && (Postmedia.adConfig.Driving.searchkw.length > 0)){
			for (var m in Postmedia.adConfig.Driving.manufacturer) {
				if((Postmedia.adConfig.Driving.searchkw.toLowerCase().search(Postmedia.adConfig.Driving.manufacturer[m].toLowerCase())!=-1) && (Postmedia.adConfig.Driving.make.search(Postmedia.adConfig.Driving.manufacturer[m].toLowerCase())== -1)) {
					if (Postmedia.adConfig.Driving.make!="")
						Postmedia.adConfig.Driving.make+=",";
					Postmedia.adConfig.Driving.make+=Postmedia.adConfig.Driving.manufacturer[m].toLowerCase().replace(" ", "-");
				}
			}
		}
		googletag.pubads().setTargeting("make", Postmedia.adConfig.Driving.make);
		googletag.pubads().setTargeting("model", Postmedia.adConfig.Driving.model);
		googletag.pubads().setTargeting("year", Postmedia.adConfig.Driving.year);
		googletag.pubads().setTargeting("mincy", Postmedia.adConfig.Driving.mincy);
		googletag.pubads().setTargeting("maxcy", Postmedia.adConfig.Driving.maxcy);
		googletag.pubads().setTargeting("lang", Postmedia.adConfig.Driving.lang);
		googletag.pubads().setTargeting("bt", Postmedia.adConfig.Driving.bt);
		googletag.pubads().setTargeting("geoid", Postmedia.adConfig.Driving.geoid);
	}
	
	// AAM cookie check
	if(typeof Postmedia.adConfig.AamGpt.getCookie("aam_dfp") != "undefined" && typeof Postmedia.adConfig.AamGpt.getCookie("aam_uuid") != "undefined" ){
		googletag.pubads().setTargeting(Postmedia.adConfig.AamGpt.getKey("aam_dfp"), Postmedia.adConfig.AamGpt.getValues("aam_dfp"));
		googletag.pubads().setTargeting("aamId", Postmedia.adConfig.AamGpt.getCookie("aam_uuid"));
	};
	// Handle companion ads vs async
	if (companionAdFlag) {
		googletag.companionAds().setRefreshUnfilledSlots(true);
		googletag.pubads().enableVideoAds();
	}
	else
		googletag.pubads().enableAsyncRendering();
	googletag.enableServices();
	if (lazyFlag && Postmedia.adConfig.lazyAds.length>0) {
		if (!parent.window.addEventListener) {
			parent.window.attachEvent("onload", function(){
				Postmedia.adConfig.lazyHandler();
				setTimeout(function(){ 
					Postmedia.adConfig.lazyHandler(true); 
				}, Postmedia.adConfig.Constants.lazyloadConfig.maxWaitTime*1000);
			});
			parent.window.attachEvent("onscroll", Postmedia.adConfig.lazyHandler);
		} else {
			parent.window.addEventListener('load', function(){
				Postmedia.adConfig.lazyHandler();
				setTimeout( Postmedia.adConfig.Constants.lazyloadConfig.maxWaitTime*1000);
			}, false);
			parent.window.addEventListener('scroll', Postmedia.adConfig.lazyHandler, false);
		}
	}
	
	// Ad Event Listeners
	googletag.pubads().addEventListener('slotRenderEnded', function(e) { 
		var renderedAd=null;
		for (var slotnum in Postmedia.adConfig.adslots) {
			if (Postmedia.adConfig.adslots[slotnum].name==e.slot.getSlotElementId()){
				renderedAd=slotnum; 
				break;
			}
		}
		if (Postmedia.adConfig.adslots[renderedAd]) {
			Postmedia.adConfig.adslots[renderedAd].renderedInfo = Postmedia.adConfig.adslots[renderedAd].renderedInfo || {};
			Postmedia.adConfig.adslots[renderedAd].renderedInfo.creativeId=e.creativeId;
			Postmedia.adConfig.adslots[renderedAd].renderedInfo.isEmpty=e.isEmpty;
			Postmedia.adConfig.adslots[renderedAd].renderedInfo.lineItemId=e.lineItemId;
			Postmedia.adConfig.adslots[renderedAd].renderedInfo.serviceName=e.serviceName;
			if (e.size!=null) {
				Postmedia.adConfig.adslots[renderedAd].renderedInfo.width=e.size[0];
				Postmedia.adConfig.adslots[renderedAd].renderedInfo.height=e.size[1];
			} else {
				Postmedia.adConfig.adslots[renderedAd].renderedInfo.width=0;
				Postmedia.adConfig.adslots[renderedAd].renderedInfo.height=0;
			}
		} else
			console.log('No Postmedia.adConfig.adslots[renderedAd].'+e.slot);
	});
};

Postmedia.adConfig.lazyHandler = function(stopLazy) {
	stopLazy = (typeof stopLazy === "boolean") ? stopLazy : false;
	if (Postmedia.adConfig.lazyAds.length>0) {
		var removeLazyAds = [];
		for (var k=0; k<Postmedia.adConfig.lazyAds.length; k++) {
			var name = Postmedia.adConfig.adslots[Postmedia.adConfig.lazyAds[k]].name;
			if ((document.getElementById(name) && Postmedia.adConfig.adInViewport(name,Postmedia.adConfig.Constants.lazyloadConfig.buffer)) || stopLazy) {
				Postmedia.adConfig.defineAd(Postmedia.adConfig.lazyAds[k]);
				googletag.cmd.push(function() {googletag.display(name)});
				removeLazyAds.push(Postmedia.adConfig.lazyAds[k]);
			}
		}
		for (k in removeLazyAds) {
			for (var i = 0; i < Postmedia.adConfig.lazyAds.length; i++) {
				if (Postmedia.adConfig.lazyAds[i] == removeLazyAds[k]) {
					Postmedia.adConfig.lazyAds.splice(i,1);
					break;
				}
			}
		}
	}
}

Postmedia.adConfig.isLazyAd = function(ad) {
	// ad=Postmedia.adConfig.adslots[adnum]
	return Postmedia.adConfig.enablelazy && ad.lazy && Postmedia.adConfig.Constants[ad.type].lazyAllowed
}

Postmedia.adConfig.refreshAds = function(param, changeCorrelator){
	slotnames = param instanceof Array ? param : []; // Expecting array of slot names
	changeCorrelator = (typeof changeCorrelator === "boolean") ? changeCorrelator : true; // Expecting boolean
	var opt = {changeCorrelator: true};
	if (!changeCorrelator)
		opt = {changeCorrelator: false};
	// Use array of slot names (possibly empty)
	if (slotnames.length>0) {
		for (i=0;i<slotnames.length;i++)
			adslot = gptadslots[slotnames[i]];
			rc = parseInt(adslot.getTargeting('rc')[0]);
			adslot.setTargeting("rc", String(rc + 1));
			googletag.cmd.push(function(){googletag.pubads().refresh([adslot], opt)});
	}
	else
		googletag.cmd.push(;
}

Postmedia.adConfig.refreshListener = function(slot) {
	var adName = slot.name;
	slot.adViewedCheck = setInterval(function () {
		if (!document.hasFocus())
			slot.refresh.pause();
		else {
			if (Postmedia.adConfig.Constants.refreshConfig.delay<=slot.refresh.timer()) {
				Postmedia.adConfig.refreshAds([adName]);
				slot.refresh.restart(); 
				slot.refresh.totalRefreshes+=1;
				if (slot.refresh.totalRefreshes>=Postmedia.adConfig.Constants.refreshConfig.max){
					clearInterval(slot.adViewedCheck);
					slot.refresh.pause();
				}
			} else {
				if (Postmedia.adConfig.adInViewport(adName,Postmedia.adConfig.Constants.refreshConfig.buffer,Postmedia.adConfig.Constants.refreshConfig.per)) {
					if (!slot.refresh.isInitialized)
						slot.refresh.start();
					else
						slot.refresh.resume();
				} else
					slot.refresh.pause();
			}
		}
	}, 1000);
}

Postmedia.adConfig.writeAd = function(name){
	var ad=Postmedia.adConfig.getAdslotByName(name);
	if (ad!=null) {
		if ((Postmedia.Properties.isMobile&&Postmedia.adConfig.Constants[ad.type].mobile.length>0)||(!Postmedia.Properties.isMobile&&Postmedia.adConfig.Constants[ad.type].desktop.length>0)&&!Postmedia.adConfig.isLazyAd(ad))
			googletag.cmd.push(;
	}
}

googletag.cmd.push(Postmedia.adConfig.headerAdSetup);
