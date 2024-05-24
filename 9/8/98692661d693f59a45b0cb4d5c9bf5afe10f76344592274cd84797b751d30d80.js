/*
====================================== VISITOR JS ADDITION ! ============================================================

*/

/**
 * @license
 * Adobe Visitor API for JavaScript version: 4.3.0
 * Copyright 2019 Adobe, Inc. All Rights Reserved
 * More info available at https://marketing.adobe.com/resources/help/en_US/mcvid/
 */
var e=function(){"use strict";{ i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=i.doesOptInApply,a=i.previousPermissions,o=i.preOptInApprovals,s=i.isOptInStorageEnabled,l=i.optInCookieDomain,c=i.optInStorageExpiry,d=i.isIabContext,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},g=f.cookies,p=Le(a);Pe(p,"Invalid `previousPermissions`!"),Pe(o,"Invalid `preOptInApprovals`!");var m=u({isEnabled:!!s,cookieName:"adobeujs-optin"},{cookies:g}),h=this,_=se(h),C=ge(),I=Oe(p),v=Oe(o),D=m.get(),S={},b=I,D),A=v,I,D),y=Ae(A),O=function(e){return b=e},M=h.deny=n(!1),h.approve=n(!0),h.denyAll=h.deny.bind(h,fe),h.approveAll=h.approve.bind(h,fe),h.isApproved=h.isPreApproved=h.fetchPermissions=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?h.on(le.COMPLETE,e):Te;return!r||r&&h.isComplete||!!o?setTimeout(e(h.permissions),0):t||C.add(Ne,,n},h.complete=h.registerPlugin=h.execute=Fe(S),Object.defineProperties(h,{permissions:{get:function(){return A}},status:{get:function(){return b}},Categories:{get:function(){return ce}},doesOptInApply:{get:,isPending:{get:function(){return h.status===le.PENDING}},isComplete:{get:,__plugins:{get:function(){return Object.keys(S)}},isIabContext:{get:function(){return d}}})}_="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};Object.assign=Object.assign||var C,I,v={HANDSHAKE:"HANDSHAKE",GETSTATE:"GETSTATE",PARENTSTATE:"PARENTSTATE"},D={MCMID:"MCMID",MCAID:"MCAID",MCAAMB:"MCAAMB",MCAAMLH:"MCAAMLH",MCOPTOUT:"MCOPTOUT",CUSTOMERIDS:"CUSTOMERIDS"},S={MCMID:"getMarketingCloudVisitorID",MCAID:"getAnalyticsVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut",ALLFIELDS:"getVisitorValues"},b={CUSTOMERIDS:"getCustomerIDs"},A={MCMID:"getMarketingCloudVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut",MCAID:"getAnalyticsVisitorID",CUSTOMERIDS:"getCustomerIDs",ALLFIELDS:"getVisitorValues"},y={MC:"MCMID",A:"MCAID",AAM:"MCAAMB"},O={MCMID:"MCMID",MCOPTOUT:"MCOPTOUT",MCAID:"MCAID",MCAAMLH:"MCAAMLH",MCAAMB:"MCAAMB"},M={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2},k={GLOBAL:"global"},E={MESSAGES:v,STATE_KEYS_MAP:D,ASYNC_API_MAP:S,SYNC_API_MAP:b,ALL_APIS:A,FIELDGROUP_TO_FIELD:y,FIELDS:O,AUTH_STATE:M,OPT_OUT:k},T=E.STATE_KEYS_MAP,L=P=E.MESSAGES,w=E.ASYNC_API_MAP,R=E.SYNC_API_MAP,F=N=E.ASYNC_API_MAP,x=j=,V=(j.isObjectEmpty,j.isValueEmpty,j.getIeVersion,j.encodeAndBuildRequest,j.isObject,j.defineGlobalNamespace,j.pluck,j.parseOptOut,j.normalizeBoolean,n),U=E.MESSAGES,H={0:"prefix",1:"orgID",2:"state"},B=G=E.MESSAGES,q=Y=E.MESSAGES,X=E.ALL_APIS,z=E.ASYNC_API_MAP,W=E.FIELDGROUP_TO_FIELD,J=K=Q=$={compare:o,isLessThan:areVersionsDifferent:isGreaterThan:isEqual:,Z=!!_.postMessage,ee={postMessage:receiveMessage:,te=ne=ie={POST_MESSAGE_ENABLED:!!_.postMessage,DAYS_BETWEEN_SYNC_ID_CALLS:1,MILLIS_PER_DAY:864e5,ADOBE_MC:"adobe_mc",ADOBE_MC_SDID:"adobe_mc_sdid",VALID_VISITOR_ID_REGEX:/^[0-9a-fA-F\-]+$/,ADOBE_MC_TTL_IN_MIN:5,VERSION_REGEX:/vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,FIRST_PARTY_SERVER_COOKIE:"s_ecid"},re=ae={audienceManagerServer:{},audienceManagerServerSecure:{},cookieDomain:{},cookieLifetime:{},cookieName:{},doesOptInApply:{},disableThirdPartyCalls:{},discardTrackingServerECID:{},idSyncAfterIDCallResult:{},idSyncAttachIframeOnWindowLoad:{},idSyncContainerID:{},idSyncDisable3rdPartySyncing:{},disableThirdPartyCookies:{},idSyncDisableSyncs:{},disableIdSyncs:{},idSyncIDCallResult:{},idSyncSSLUseAkamai:{},isCoopSafe:{},isIabContext:{},isOptInStorageEnabled:{},loadSSL:{},loadTimeout:{},marketingCloudServer:{},marketingCloudServerSecure:{},optInCookieDomain:{},optInStorageExpiry:{},overwriteCrossDomainMCIDAndAID:{},preOptInApprovals:{},previousPermissions:{},resetBeforeVersion:{},sdidParamExpiry:{},serverState:{},sessionCookieName:{},secureCookie:{},takeTimeoutMetrics:{},trackingServer:{},trackingServerSecure:{},whitelistIframeDomains:{},whitelistParentDomain:{}},oe={getConfigNames:getConfigs:normalizeConfig:,se=le={PENDING:"pending",CHANGED:"changed",COMPLETE:"complete"},ce={AAM:"aam",ADCLOUD:"adcloud",ANALYTICS:"aa",CAMPAIGN:"campaign",ECID:"ecid",LIVEFYRE:"livefyre",TARGET:"target",VIDEO_ANALYTICS:"videoaa"},ue=(C={},t(C,ce.AAM,565),t(C,ce.ECID,565),C),de=(I={},t(I,ce.AAM,[1,2,5]),t(I,ce.ECID,[1,2,5]),I),fe=function(e){return Object.keys(e).map(function(t){return e[t]})}(ce),ge=pe=function(){},me=he=_e=c,Ce=new _e("[ADOBE OPT-IN]"),Ie=ve=De=Se=be=Ae=ye=Oe=Me=ke=Ee=Te=function(){},Le=Pe=we=Re=Fe=d.prototype=Object.create(Error.prototype),d.prototype.constructor=d;var Ne="fetchPermissions",xe="[OptIn#registerPlugin] Plugin is invalid.";f.Categories=ce,f.TimeoutError=d;var je=Object.freeze({OptIn:f,IabPlugin:m}),Ve={get:set:remove:,Ue=He=je.OptIn;j.defineGlobalNamespace(),window.adobe.OptInCategories=He.Categories;var Be=function(t,n,i){i.split("").reverse().join("")!==t)throw new Error("Please use `Visitor.getInstance` to instantiate Visitor.");var d=this,f=window.adobe,g="",p=!1,m=!1;d.version="4.3.0";var h=_,C=h.Visitor;C.version=d.version,C.AuthState=E.AUTH_STATE,C.OptOut=E.OPT_OUT,h.s_c_in||(h.s_c_il=[],h.s_c_in=0),d._c="Visitor",d._il=h.s_c_il,d._in=h.s_c_in,d._il[d._in]=d,h.s_c_in++,d._instanceType="regular",d._log={requests:[]},d.marketingCloudOrgID=t,d.cookieName="AMCV_"+t,d.sessionCookieName="AMCVS_"+t,d.cookieDomain=Q(),d.cookieDomain===h.location.hostname&&(d.cookieDomain=""),d.loadSSL=h.location.protocol.toLowerCase().indexOf("https")>=0,d.loadTimeout=3e4,d.CORSErrors=[],d.marketingCloudServer=d.audienceManagerServer="dpm.demdex.net",d.sdidParamExpiry=30;var I=null,v="MCMID",D="MCIDTS",S="A",b="MCAID",A="AAM",y="MCAAMB",O="NONE",M=k=ne(d);d.FIELDS=E.FIELDS,d.cookieRead=function(e){return Ve.get(e)},d.cookieWrite=d.resetState=d._isAllowedDone=!1,d._isAllowedFlag=!1,d.isAllowed=d.setMarketingCloudVisitorID=function(e){d._setMarketingCloudFields(e)},d._use1stPartyMarketingCloudServer=!1,d.getMarketingCloudVisitorID=d.getVisitorValues=d._currentCustomerIDs={},d._customerIDsHashChanged=!1,d._newCustomerIDsHash="",d.setCustomerIDs=function(t){function n(){d._customerIDsHashChanged=!1}if(!d.isOptedOut()&&t){if(!j.isObject(t)||j.isObjectEmpty(t))return!1;d._readVisitor();var i,r;for(i in t)if(M(i)&&(r=t[i]))if("object"===e(r)){var a={};r.id&&(a.id=r.id),void 0!=r.authState&&(a.authState=r.authState),d._currentCustomerIDs[i]=a}else d._currentCustomerIDs[i]={id:r};var o=d.getCustomerIDs(),s=d._getField("MCCIDH"),l="";s||(s=0);for(i in o)M(i)&&(r=o[i],l+=(l?"|":"")+i+"|"+(r.id?r.id:"")+(r.authState?r.authState:""));d._newCustomerIDsHash=String(d._hash(l)),d._newCustomerIDsHash!==s&&(d._customerIDsHashChanged=!0,d._mapCustomerIDs(n))}},d.getCustomerIDs=d.setAnalyticsVisitorID=d.getAnalyticsVisitorID=d.getAudienceManagerLocationHint=d.getLocationHint=d.getAudienceManagerLocationHint,d.getAudienceManagerBlob=d._supplementalDataIDCurrent="",d._supplementalDataIDCurrentConsumed={},d._supplementalDataIDLast="",d._supplementalDataIDLastConsumed={},d.getSupplementalDataID=var T=!1;d._liberatedOptOut=null,d.getOptOut=d.isOptedOut=d._fields=null,d._fieldsExpired=null,d._hash=d._generateID=te,d._generateLocalMID=d._callbackList=null,d._callCallback=d._registerCallback=d._callAllCallbacks=d._addQuerystringParam=d._extractParamFromUri=d._parseAdobeMcFromUrl=r(ie.ADOBE_MC),d._parseAdobeMcSdidFromUrl=r(ie.ADOBE_MC_SDID),d._attemptToPopulateSdidFromUrl=d._attemptToPopulateIdsFromUrl=d._mergeServerState=d._timeout=null,d._loadData=d._clearTimeout=d._settingsDigest=0,d._getSettingsDigest=d._readVisitorDone=!1,d._readVisitor=d._appendVersionTo=d._writeVisitor=d._getField=d._setField=d._getFieldList=d._setFieldList=d._getFieldMap=d._setFieldMap=d._setFieldExpire=d._findVisitorID=d._setFields=d._loading=null,d._getRemoteField=d._setMarketingCloudFields=d._mapCustomerIDs=d._setAnalyticsFields=function(e){d._readVisitor(),d._setFields(S,e)},d._setAudienceManagerFields=d._getAudienceManagerURLData=d.appendVisitorIDsTo=d.appendSupplementalDataIDTo=var L={parseHash:hashlessUrl:addQueryParamAtLocation:isFirstPartyAnalyticsVisitorIDCall:isObject:removeCookie:isTrackingServerPopulated:getTimestampInSeconds:parsePipeDelimetedKeyValues:generateRandomString:normalizeBoolean:parseBoolean:replaceMethodsWithFunction:;d._helpers=L;var P=re(d,C);d._destinationPublishing=P,d.timeoutMetricsLog=[];var w={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,fieldGroupObj:{},setState:;d.isClientSideMarketingCloudVisitorID=function(){return w.isClientSideMarketingCloudVisitorID},d.MCIDCallTimedOut=function(){return w.MCIDCallTimedOut},d.AnalyticsIDCallTimedOut=function(){return w.AnalyticsIDCallTimedOut},d.AAMIDCallTimedOut=function(){return w.AAMIDCallTimedOut},d.idSyncGetOnPageSyncInfo=d.idSyncByURL=d.idSyncByDataSource=Ue(d,P),d._getCookieVersion=d._resetAmcvCookie=d.setAsCoopSafe=function(){I=!0},d.setAsCoopUnsafe=),),d.init=function(){if(c())var e=f.optIn.fetchPermissions(!0);else!),),)}};Be.config=oe,_.Visitor=Be;var Ge=Be,qe=je.OptIn,Ye=je.IabPlugin;return Ge.getInstance=function(e,t){if(!e)throw new Error("Visitor requires Adobe Marketing Cloud Org ID.");e.indexOf("@")<0&&(e+="@AdobeOrg");var n=);if(n)return n;var i=);!i||{});var r=e,a=r.split("").reverse().join(""),o=new Ge(e,null,a);j.isObject(i)&&i.cookieDomain&&(o.cookieDomain=i.cookieDomain),);var s=j.getIeVersion();if("number"==typeof s&&s<10)return o._helpers.replaceMethodsWithFunction(o,function(){});var l=)&&!o)&&_.parent?new q(e,i,o,_.parent):new Ge(e,i,a);return o=null,l.init(),l},),Ge}();

var visitor = Visitor.getInstance("1E0D22CE527845790A490D4D@AdobeOrg", {
     trackingServer: "metric.makemytrip.com", // same as s.trackingServer
     trackingServerSecure: "metrics.makemytrip.com", // same as s.trackingServerSecure

     // To enable CNAME support, add the following configuration variables
     marketingCloudServer: "metric.makemytrip.com",
     marketingCloudServerSecure: "metrics.makemytrip.com" // same as s.trackingServerSecure
});



/*
====================================== OMNITURE JS ADDITION ! ============================================================

*/


var d = new Date();

if (typeof isTestServ == 'undefined')
	var isTestServ = false;

if (typeof server_IP == 'undefined')
	var server_IP = 'NoServerIP';

var trackserverIP = server_IP;

/*
if (!isTestServ) {
	if (typeof(omnitureABrsid) == 'undefined')
		var s_account = "mmtprod";
	else if (omnitureABrsid == "")
		var s_account = "mmtprod";
	else if (omnitureABrsid == "A")
		var s_account = "mmtprod";
	else if (omnitureABrsid == "B")
		var s_account = "mmtprod";
	else if (omnitureABrsid == "C")
		var s_account = "mmtprod";
	else if (omnitureABrsid == "D")
		var s_account = "mmtprod";

} else {
	if (typeof(omnitureABrsid) == 'undefined')
		var s_account = "mmtdev";
	else if (omnitureABrsid == "")
		var s_account = "mmtdev";
	else if (omnitureABrsid == "A")
		var s_account = "mmtdev";
	else if (omnitureABrsid == "B")
		var s_account = "mmtdev";
}
*/

var s_account = "mmtprod";

var s_year = d.getFullYear();

var s=s_gi(s_account);

s.visitor = Visitor.getInstance("1E0D22CE527845790A490D4D@AdobeOrg");

s.account = s_account;

s.trackDownloadLinks = true
	s.trackExternalLinks = true
	s.trackInlineStats = true
	s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls"
	s.linkInternalFilters = "javascript:,javascrip:,www.securesuite.net,www.verifiedbyvisa.com,3dsecure.payseal.com,secure5.arcot.com,cardsecurity.enstage.com,acs.bccard.com,3dsecure.banquepopulaire.fr,secure2.arcot.com,cardsecure.kkb.kz,hsbc.com.my,handelsbanken.modirum.com,acs-3dsecure.creditmutuel.fr,3ds-par-ab.fortisbanking.be,securecode.ing.nl,acs-3dsecure.cic.fr,3ds.cardcenter.ch,hsbc.wlp-acs.com,citibank.com.sg,hsbc.com.hk,www.mycardsecure.com,bankserv.co.za,bor.electracard.com,secure6.arcot.com,www.verifiedbyvisa-mastercardsecurecode.com,cap.securecode.com,barclaycard.co.uk,ubi.electracard.com,pnb.electracard.com,corpbank.electracard.com,securesuite.co.uk,secure.axisbank.com,hsbc.co.in,cardsecurity.standardchartered.com,secure4.arcot.com,citibank.co.in,netsafe.hdfcbank.com,3dsecure.icicibank.com,secure.avenues.info,//makemytrip.com,.makemytrip.com,acs1.3dsecure.no,hsbc.com.ph,sicheres-bezahlen.bw-bank.de,3dsecure.paylife.at,3dsecure.vinea.es,samsungcard.co.kr,3dsecure-prd2.monext.fr,hsbc.com.vn,visa.com.ar,taishinbank.com.tw,tds.pbebank.com,securevbv.concordefs.com,yescard.co.kr,securepay.hsbc.lk,vbv.shinhancard.com,cimbsecuree-pay.com.my,directaccess-securee-pay.com.my,www.dbindia.in,telepago.4b.com,lbp.wlp-acs.com,acs.luottokunta.fi,acsbcc.banxafe.be,tdsc.53.com,barclays.co.uk,acscartasi.ssb.it,cnce.wlp-acs.com,bnpp.wlp-acs.com,chinatrust.com.tw,acs.sbrf.ru,onlineauthentication.com.au,clicksafe.lloydstsb.com,www.tpsl-india.in,acs.cmbchina.com,sas.sermepa.es,acs.cafis-paynet.jp,ipay.bangkokbank.com,ca-sp.wlp-acs.com,sg.wlp-acs.com,bred.wlp-acs.com,www.sebkort.com,cdn.wlp-acs.com,168.1.87,168.1.94,secure3d.ing.be,paymate.co.in,acsweb.dnp-cdms.jp,hsbc.co.id,stgeorge.com.au,3ds.e-cartebleue.com,www.monetaonline.it,lottecard.co.kr,credit-mutuel.wlp-acs.com,160.224.66,3dauthentication.bankcomm.com,3dsolution.com.br,boccc.com.hk,verifiedbyvisa.skandiabanken.no,www.alignet-acs2.com,www.secure2gw.ro,suche.aolsvc.de,scb.co.th,3ds-par-a.fortisbanking.be,notify.barclays.com,25.1.3,icbc.com.cn,www.mbfcards.com,3d.seb.lv,rt03.kasikornbank.com,verifiedbyvisa.skandiabanken.se,vbv.mbnet.pt,ipg.cardcomplete.com,acsv.centrum24.pl,fisc.com.tw,3d-secure.seb-bank.de,finansbank.com.tr,3d.cupdata.com,acsm.centrum24.pl,acs1.swedbank.se,3dsecure.monext.fr,www.ccavenue.com,www.billdesk.com,.makemytrip.co.in,.makemytrip.ae,.makemytrip.ca,www.tecprocesssolution.in,www.paypal.com,secure.paymate.co.in,www.mchek.com,india.makemytrip.com,www.itzcash.com,onlineverification.icicibank.com,infinity.icicibank.co.in,www.beam.co.in,services.atomtech.in,vpos.amxvpos.com,migs.mastercard.com.au,makemytripdeals.com,makemytrip.custhelp.com,makemytrip.ae,makemytrip.ca,makemytrip.sg,secure.booking.com,secureonline.idbibank.com,mbnapayerauth.com,3dsg.dbs.com,vcas1.visa.com,tsys.arcot.com,sibacs.electrapay.com,3dsecure.icscards.nl,cbi.electracard.com,axis-acs1.enstage-sas.com,acs3.3dsecure.no,uob3ds.uobgroup.com,maybank.com.my,fnb.co.za,acs1.luottokunta.fi,acs4.3dsecure.no,secure7.arcot.com,apac.citibank.com,ccb.com.cn,3dsecure.deutsche-bank.de,sicher-einkaufen.commerzbank.de,secure.lcl.fr,3dssg.ocbc.com,acs.alfabank.ru,cosacs.electrapay.com,acs1.viseca.ch,acs.sia.eu,sicheresbezahlen.lbb.de,cal-online.co.il,acs.netcetera.ch,betalen.rabobank.nl,acs2.swedbank.se,acs.swisscard.ch,3d-secure.postbank.de,cardsecurity.enstage-sas.com,3ds.bnpparibas.com,belgium-3dsecure.wlp-acs.com,3dsecure.bpce.fr,verifiedbyvisa.comdirect.de,acs2.sbrf.ru,keb.co.kr,cimb-securee-pay.cimb.com,orbitall.com.br,acs1.edb.com,acs1.sbrf.ru,bkm.com.tr,doubleclick.net,zedo.com"
	s.linkLeaveQueryString = false
	s.linkTrackVars = "None"
	s.linkTrackEvents = "None"

	s.ActionDepthTest = true;

if (!isTestServ) {
	s.dynamicAccountSelection = true;
	s.dynamicAccountMatch = window.location.host;
	s.dynamicAccountList = "mmtotb=oktatabyebye.com;mmtprod=makemytrip.us;mmtprod=makemytrip.ae;mmtprod=makemytrip.ca;mmtprod=b2b.makemytrip.com,b2brail.makemytrip.com,intl.makemytrip.com,b2bhotels.makemytrip.com,b2b-int-hotels.makemytrip.com,b2bholidays.makemytrip.com,europe.makemytrip.com";
}

s.siteID = "" // leftmost value in pagename
	s.defaultPage = "" // filename to add when none exists
	s.queryVarsList = "" // query parameters to keep
	s.pathExcludeDelim = ";" // portion of the path to exclude
	s.pathConcatDelim = "" // page name component separator
	s.pathExcludeList = "" // elements to exclude from the path

	s.cookieDomainPeriods = "2"
	s.fpCookieDomainPeriods = "2"
	var d = window.location.hostname
	if (d.indexOf('.co.in') > -1) {
		s.cookieDomainPeriods = "3"
			s.fpCookieDomainPeriods = "3"
	}

	if (typeof(trackserverIP) == 'undefined') {
		var trackserverIP = 'NoServer';
	}

s.eVar28 = trackserverIP;
s.prop28 = trackserverIP;

s.usePlugins = true

	/*Function to read cookie*/

function s_doPlugins(s) {

	if (s.ActionDepthTest) {
		s.pdvalue = s.getActionDepth("s_depth");
		if (s.pdvalue) {
			s.prop57 = s.pdvalue;
		}
	}

	s.ActionDepthTest = false;

if(s.pageName)
{
var ppv_c = s.getPercentPageViewed(); //Get values for prior page, pass this page's identifier
	if (ppv_c && ppv_c.length >= 4) { //Were values for the prior page returned?
		var ppv_pn = (ppv_c.length > 0) ? (ppv_c[0]) : (''); //Extract last page's identifier
		var ppv_v = ((ppv_c.length > 0) ? (ppv_c[1]) : ('')) //Extract last page's total % viewed
		 + ((ppv_c.length > 2) ? ('|' + ppv_c[2]) : ('')); //Extract last page's initial % viewed, separated by '|'
		if (ppv_pn && ppv_v) { //Was pageName and percent % viewed values found?
			s.prop72 = ppv_pn; //Store percent page viewed values in the variable of your choice
			s.prop73 = ppv_v; //Store the page identifier in the variable of your choice
		}
		if (ppv_c.length > 0) {
			if (ppv_c[2] <= 25) {
				s.prop74 = "Less than 25%";
			} else if (ppv_c[2] > 25 && ppv_c[2] <= 50) {
				s.prop74 = "25% to 50%";
			} else if (ppv_c[2] > 50 && ppv_c[2] <= 75) {
				s.prop74 = "50% to 75%";
			} else if (ppv_c[2] > 75) {
				s.prop74 = "More than 75%";
			} else {
				s.prop74 = "None";
			}

			if (ppv_c[1] <= 25) {
				s.prop75 = "Less than 25%";
			} else if (ppv_c[1] > 25 && ppv_c[1] <= 50) {
				s.prop75 = "25% to 50%";
			} else if (ppv_c[1] > 50 && ppv_c[1] <= 75) {
				s.prop75 = "50% to 75%";
			} else if (ppv_c[1] > 75) {
				s.prop75 = "More than 75%";
			} else {
				s.prop75 = "None";
			}

		}

	}
}
    /* Legacy Visitor ID */
	s.prop26 = s.c_r("s_vi");

	/* Marketing Cloud ID */
	s.prop38 = s.eVar84 = s.marketingCloudVisitorID;

	s.eVar100 = s.getQueryParam('source');

	/* Marketing Cloud Visitor ID present/absent */
	s.prop37 = (typeof(Visitor) != "undefined" ? "VisitorAPI Present" : "VisitorAPI Missing");

	s.prop56 = s.getDaysSinceLastVisit('s_lv');

	if (!s.campaign) {
		var omCmp = s.getQueryParam('cmp');
		if (!omCmp && (typeof(cmp) != 'undefined' && cmp)) {
			omCmp = cmp;
		}
		if (omCmp)
			s.campaign = omCmp;
	}
	if (s.campaign != '') {
		s.prop36 = s.getAndPersistValue(s.campaign, 's_cmp_pages', 0);
	}
	if (s.prop36 != '') {
		s.prop51 = s.prop36 + " | " + s.pageName;
	}

	var ref = document.referrer
		if (ref != '') {
			var kw = s.getQueryParam('q', '', ref);
			if (typeof(kw) != 'undefined' && kw != '') {
				s.prop33 = s.getAndPersistValue(kw, 's_google_query', 0);
			}
		}
		if (s.prop33 && typeof(s.prop33) != 'undefined' && s.prop33 != '') {
			s.prop21 = s.prop33 + " | " + s.pageName;
		}

		if (s.campaign != '') {
			s.eVar51 = 'D=v0'
				s.eVar52 = 'D=v0'
				s.eVar53 = 'D=v0'
				s.eVar54 = 'D=v0'
				s.eVar55 = 'D=v0'
				s.eVar56 = 'D=v0'
				s.eVar57 = 'D=v0'
		}

		s.clickThruQuality('cmp', 'event19', 'event20')
		if (!s.eVar21)
			s.eVar21 = s.getValOnce(s.getQueryParam('intid'), 's_eVar21', 0)

				/*virenderb for MTR cookie*/
				if (!s.eVar71)
					s.eVar71 = s.getValOnce(s.c_r('_z'), 's_eVar71', 0)

						if (s.events && s.events.indexOf("event1") == -1)
							s.events = s.apl(s.events, "event1", ",", 1)
								if (!s.pageName)
									s.pageName = s.getPageName()
										s.prop23 = s.getPreviousValue(s.pageName, 'gpv_pn', '')
										s.eVar15 = s.pageName
										s.prop27 = window.location.pathname
										s.eVar18 = s.getVisitNum();
								var r3650 = s.getNewRepeat(3650, 's_nr3650');
						var r30 = s.getNewRepeat(30, 's_nr30');
				var r120 = s.getNewRepeat(120, 's_nr120');
		var r7 = s.getNewRepeat(7, 's_nr7');
	s.prop41 = r7 + "|" + r30 + "|" + r120 + "|" + r3650;
	if (r30 == 'New')
		s.events = s.apl(s.events, "event17", ",", 1);
	if (r3650 == 'New')
		s.events = s.apl(s.events, "event18", ",", 1);


	//s.prop26=s.getValOnce(s.c_r('s_vi'),'s_c26',0);
	if (!s.eVar34)
		s.eVar34 = s.getValOnce(s.getQueryParam('eid'), 's_eVar34', 0);
	var propsToCopy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 19, 22, 23, 24, 25, 26, 27, 29, 30, 40, 41, 43, 44, 48, 49, 50];
	var index;
	for (var i = 0; i < propsToCopy.length; i++) {
		index = propsToCopy[i];
		eval('if (s.prop' + index + ' && !s.evar' + index + ') s.eVar' + index + '=\'D=c' + index + '\'');


	}
/*SC to TT Integration - Commented as integration will now be handled by A4T
mboxLoadSCPlugin(s);
s.tnt = s.trackTNT();
*/

} //end do plugins

s.doPlugins = s_doPlugins

	/************************** PLUGINS SECTION *************************/
/*
 * Utility: AppMeasurement Compatibility v1.1
 * Define deprecated H-code s properties and methods used by legacy plugins
 */
s.wd=window;
s.fl=new Function("x","l",""
+"return x?(''+x).substring(0,l):x");
s.pt=new Function("x","d","f","a",""
+"var s=this,t=x,z=0,y,r,l='length';while(t){y=t.indexOf(d);y=y<0?t[l"
+"]:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d[l];t=x.subs"
+"tring(z,x[l]);t=z<x[l]?t:''}return''");
s.rep=new Function("x","o","n",""
+"var a=new Array,i=0,j;if(x){if(x.split)a=x.split(o);else if(!o)for("
+"i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){"
+"j=x.indexOf(o,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i"
+">=0)i+=o.length}}x='';j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.joi"
+"n)x=a.join(n);else for(i=1;i<j;i++)x+=n+a[i]}}return x");
s.ape=new Function("x",""
+"var s=this,h='0123456789ABCDEF',f='+~!*()\\'',i,c=s.charSet,n,l,e,y"
+"='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComp"
+"onent(x);for(i=0;i<f.length;i++){n=f.substring(i,i+1);if(x.indexOf("
+"n)>=0)x=s.rep(x,n,'%'+n.charCodeAt(0).toString(16).toUpperCase())}}"
+"else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.sub"
+"string(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e="
+"h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='"
+"+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+','%2"
+"B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0)"
+"{i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.subst"
+"ring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.subst"
+"ring(i);i=x.indexOf('%',i)}}}return x");
s.epa=new Function("x",""
+"var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Fu"
+"nction('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unescape"
+"(x)}return y');return tcf(x)}else return unescape(x)}return y");
s.parseUri=new Function("u",""
+"if(u){u=u+'';u=u.indexOf(':')<0&&u.indexOf('//')!=0?(u.indexOf('/')"
+"==0?'/':'//')+u:u}u=u?u+'':window.location.href;var e,a=document.cr"
+"eateElement('a'),l=['href','protocol','host','hostname','port','pat"
+"hname','search','hash'],p,r={href:u,toString:function(){return this"
+".href}};a.setAttribute('href',u);for(e=1;e<l.length;e++){p=l[e];r[p"
+"]=a[p]||''}delete a;p=r.pathname||'';if(p.indexOf('/')!=0)r.pathnam"
+"e='/'+p;return r");
s.gtfs=new Function(""
+"var w=window,l=w.location,d=document,u;if(!l.origin)l.origin=l.prot"
+"ocol+'//'+l.hostname+(l.port?':'+l.port:'');u=l!=w.parent.location?"
+"d.referrer:d.location;return{location:s.parseUri(u)}");

function mboxLoadSCPlugin(a){if(!a){return null}a.m_tt=function(c){var b=c.m_i("tt");b.W=true;b.r="makemytrip";b._t=function(){if(!this.isEnabled()){return}var e=this._c();if(e){var d=new mboxScPluginFetcher(this.r,this.s);e.setFetcher(d);e.load()}};b.isEnabled=function(){return this.W&&mboxFactoryDefault.isEnabled()};b._c=function(){var e=this.ad();var d=document.createElement("DIV");return mboxFactoryDefault.create(e,new Array(),d)};b.ad=function(){var d=this.s.events&&this.s.events.indexOf("purchase")!=-1;return"SiteCatalyst: "+(d?"purchase":"event")}};return a.loadModule("tt")}
/*
* TNT Integration Plugin v2.1AM
*/
s.trackTNT=new Function("v","p","b",""
+"var s=this,n='s_tnt',q='s_tntref',p=(p)?p:n,v=(v)?v:n,r='',pm=false"
+",b=(b)?b:true;if(s.Util.getQueryParam(q)!=''){s.referrer=s.Util.get"
+"QueryParam(q);}else if(s.c_r(q)!=''){s.referrer=s.c_r(q);document.c"
+"ookie=q+'=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;';}else if("
+"(document.cookie.indexOf(q)!=-1&&s.c_r(q)=='')||(location.search.in"
+"dexOf(q+'=')!=-1&&s.Util.getQueryParam(q)=='')){s.referrer='Typed/B"
+"ookmarked';document.cookie=q+'=;path=/;expires=Thu, 01-Jan-1970 00:"
+"00:01 GMT;';}if(s.Util.getQueryParam(p)!=''){pm=s.Util.getQueryPara"
+"m(p);}else if(s.c_r(p)){pm=s.c_r(p);document.cookie=p+'=;path=/;exp"
+"ires=Thu, 01-Jan-1970 00:00:01 GMT;';}else if(s.c_r(p)==''&&s.Util."
+"getQueryParam(p)==''){pm='';}if(pm)r+=(pm+',');if(window[v]!=undefi"
+"ned)r+=window[v];if(b)window[v]='';return r;");

/*
 * Plugin: getPercentPageViewed 2.0 (Minified)
 */
s.handlePPVevents=function(){if(!s_c_il)return;for(var i=0,scill=s_c_il.length;i<scill;i++)if(typeof s_c_il[i]!="undefined"&&s_c_il[i]._c&&s_c_il[i]._c=="s_c"){var s=s_c_il[i];break}if(!s)return;if(!s.getPPVid)return;var dh=Math.max(Math.max(s.d.body.scrollHeight,s.d.documentElement.scrollHeight),Math.max(s.d.body.offsetHeight,s.d.documentElement.offsetHeight),Math.max(s.d.body.clientHeight,s.d.documentElement.clientHeight)),vph=window.innerHeight||(s.d.documentElement.clientHeight||s.d.body.clientHeight),
st=window.pageYOffset||(window.document.documentElement.scrollTop||window.document.body.scrollTop),vh=st+vph,pv=Math.min(Math.round(vh/dh*100),100),c="";if(!s.c_r("tp")||decodeURIComponent(s.c_r("s_ppv").split(",")[0])!=s.getPPVid||s.ppvChange=="1"&&(s.c_r("tp")&&dh!=s.c_r("tp"))){s.c_w("tp",dh);s.c_w("s_ppv","")}else c=s.c_r("s_ppv");var a=c&&c.indexOf(",")>-1?c.split(",",4):[],id=a.length>0?a[0]:escape(s.getPPVid),cv=a.length>1?parseInt(a[1]):0,p0=a.length>2?parseInt(a[2]):pv,cy=a.length>3?parseInt(a[3]):
0,cn=pv>0?id+","+(pv>cv?pv:cv)+","+p0+","+(vh>cy?vh:cy):"";s.c_w("s_ppv",cn)};
s.getPercentPageViewed=function(pid,change){var s=this,ist=!s.getPPVid?true:false;pid=pid?pid:s.pageName?s.pageName:document.location.href;s.ppvChange=change?change:"1";if(typeof s.linkType!="undefined"&&s.linkType!="0"&&s.linkType!=""&&s.linkType!="e")return"";var v=s.c_r("s_ppv"),a=v.indexOf(",")>-1?v.split(",",4):[];if(a&&a.length<4){for(var i=3;i>0;i--)a[i]=i<a.length?a[i-1]:"";a[0]=""}if(a)a[0]=unescape(a[0]);if(!s.getPPVid||s.getPPVid!=pid){s.getPPVid=pid;s.c_w("s_ppv",escape(s.getPPVid));s.handlePPVevents()}if(ist)if(window.addEventListener){window.addEventListener("load",
s.handlePPVevents,false);window.addEventListener("click",s.handlePPVevents,false);window.addEventListener("scroll",s.handlePPVevents,false);window.addEventListener("resize",s.handlePPVevents,false)}else if(window.attachEvent){window.attachEvent("onload",s.handlePPVevents);window.attachEvent("onclick",s.handlePPVevents);window.attachEvent("onscroll",s.handlePPVevents);window.attachEvent("onresize",s.handlePPVevents)}return pid!="-"?a:a[1]};

/*
 * Plugin: Days since last Visit 1.1.H - capture time from last visit
 */
s.getDaysSinceLastVisit = new Function("c", ""
		 + "var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT"
		 + "ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s"
		 + "etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f"
		 + "2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f"
		 + "5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);"
		 + "s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da"
		 + "y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day"
		 + "){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s."
		 + "c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c"
		 + "_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c"
		 + "+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur"
		 + "n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s"
		 + "!=f5) return '';else return cval_s;");

/*
 * Plugin: getActionDepth v1.0
 */
s.getActionDepth = new Function("c", ""
		 + "var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);"
		 + "if(!s.c_r(c)){v=1}if(s.c_r(c)){v=s.c_r(c);v++}"
		 + "if(!s.c_w(c,v,t)){s.c_w(c,v,0)}return v;");

/*
 * Plugin: getQueryParam 2.4
 */
s.getQueryParam = new Function("p", "d", "u", "h", ""
		 + "var s=this,v='',i,j,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.loca"
		 + "tion);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0"
		 + "?p.length:i;t=s.p_gpv(p.substring(0,i),u+'',h);if(t){t=t.indexOf('#"
		 + "')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substrin"
		 + "g(i==p.length?i:i+1)}return v");
s.p_gpv = new Function("k", "u", "h", ""
		 + "var s=this,v='',q;j=h==1?'#':'?';i=u.indexOf(j);if(k&&i>-1){q=u.sub"
		 + "string(i+1);v=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf = new Function("t", "k", ""
		 + "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
		 + "rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
		 + "epa(v)}return''");

/*
 * Plugin: channelExtract : 1.0 - returns site section based on delimiter
 */
s.channelExtract=new Function("d","p","u","pv",""
+"var s=this,v='';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f'"
+")u=s.gtfs().location;u=u+'';li=u.lastIndexOf(d);if(li>0){u=u.substr"
+"ing(0,li);var i,n,a=s.split(u,d),al=a.length;if(al<p){if(pv==1) p=a"
+"l;else return '';}for(i=0;i<p;i++){n=a[i];v=v+n+d;}return v}return "
+"'';");

/*
 * Plugin: getPageName v2.1 - parse URL and return
 */
s.getPageName = new Function("u", ""
		 + "var s=this,v=u?u:''+s.wd.location,x=v.indexOf(':'),y=v.indexOf('/',"
		 + "x+4),z=v.indexOf('?'),c=s.pathConcatDelim,e=s.pathExcludeDelim,g=s."
		 + "queryVarsList,d=s.siteID,n=d?d:'',q=z<0?'':v.substring(z+1),p=v.sub"
		 + "string(y+1,q?z:v.length);z=p.indexOf('#');p=z<0?p:s.fl(p,z);x=e?p.i"
		 + "ndexOf(e):-1;p=x<0?p:s.fl(p,x);p+=!p||p.charAt(p.length-1)=='/'?s.d"
		 + "efaultPage:'';y=c?c:'/';while(p){x=p.indexOf('/');x=x<0?p.length:x;"
		 + "z=s.fl(p,x);if(!s.pt(s.pathExcludeList,',','p_c',z))n+=n?y+z:z;p=p."
		 + "substring(x+1)}y=c?c:'?';while(g){x=g.indexOf(',');x=x<0?g.length:x"
		 + ";z=s.fl(g,x);z=s.pt(q,'&','p_c',z);if(z){n+=n?y+z:z;y=c?c:'&'}g=g.s"
		 + "ubstring(x+1)}return n");
/*
 * Plugin: getValOnce 0.2 - get a value once per session or number of days
 */
s.getValOnce = new Function("v", "c", "e", ""
		 + "var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
		 + ")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");

/*
 * Plugin: getAndPersistValue 0.3 - get a value on every page
 */
s.getAndPersistValue=new Function("v","c","e",""
+"var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if("
+"v)s.c_w(c,v,e?a:0);return s.c_r(c);");

/*
 * Plugin: getPreviousValue v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/*
 * Plugin Utility: Append to List v1.2
 */
s.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=l.split(d),al=a.length;fo"
+"r(i=0;i<al;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowe"
+"rCase()));}}if(!m)l=l?l+d+v:v;return l;");

/*
 *  Plug-in: crossVisitParticipation v1.7 - stacks values from
 *  specified variable in cookie and returns value
 */

s.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv",""
+"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var"
+" ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l"
+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
+"f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape("
+"v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()"
+";if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=ar"
+"ry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry"
+"[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+"
+"5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.len"
+"gth-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date("
+").getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new"
+" Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td."
+"getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0"
+"]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',"
+"front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{deli"
+"m:dl});if(ce)s.c_w(cn,'');return r;");

/*
 * Plugin Utility: Replace v1.0
 */
s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/*
 * Plugin: clickThruQuality 1.0
 */
s.clickThruQuality = new Function("scp", "tcth_ev", "cp_ev", "cff_ev", "cf_th", ""
		 + "var s=this;if(s.p_fo('clickThruQuality')==1){var ev=s.events?s.even"
		 + "ts+',':'';if(s.getQueryParam&&s.getQueryParam(scp)){s.events=ev+tct"
		 + "h_ev;if(s.c_r('cf')){var tct=parseInt(s.c_r('cf'))+1;s.c_w('cf',tct"
		 + ",0);if(tct==cf_th&&cff_ev){s.events=s.events+','+cff_ev;}}else {s.c"
		 + "_w('cf',1,0);}}else {if(s.c_r('cf')>=1){s.c_w('cf',0,0);s.events=ev"
		 + "+cp_ev;}}}");
s.p_fo = new Function("n", ""
		 + "var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]="
		 + "new Object;return 1;}else {return 0;}");

/*
 * s.join: 1.0 - Joins an array into a string
 */
s.join=new Function("v","p",""
+"var s=this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back:'"
+"';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0;x"
+"<v.length;x++){if(typeof(v[x])=='object')str+=s.join(v[x],p);else s"
+"tr+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

/*
 * Utility Function: split v1.5 (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * Utility Function: p_c
 */
s.p_c = new Function("v", "c", ""
		 + "var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le"
		 + "ngth:x).toLowerCase()?v:0");

/*
 * Plugin: getTimeParting 3.4
 */
s.getTimeParting=new Function("h","z",""
+"var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMont"
+"h()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['"
+"Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturda"
+"y'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tp"
+"DST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYea"
+"r());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de)"
+"{z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getT"
+"imezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d"
+".getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' P"
+"M';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}");


/*
 * Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
 */
s.getNewRepeat=new Function("d","cn",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");


  /*
   * Plugin: getVisitNum - version 3.0
   */
   s.getVisitNum=new Function("tp","c","c2",""
  +"var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}"
  +"if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTi"
  +"me(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!"
  +"c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn="
  +"'),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisi"
  +"t){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}els"
  +"e {return 'unknown visit number';}}else {if(str){str++;k=cval.substri"
  +"ng(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);"
  +"s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e)"
  +";e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}");
  s.dimo=new Function("m","y",""
  +"var d=new Date(y,m+1,0);return d.getDate();");
  s.endof=new Function("x",""
  +"var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x=="
  +"'m'){d=s.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if("
  +"x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return "
  +"t;");

/*
 * Cookie Combining Utility v.5
 */

if(!s.__ccucr)
{
    s.c_rr = s.c_r;
    s.__ccucr = true;
    function c_r(k)
    {
        var s = this, d = new Date, v = s.c_rr(k), c = s.c_rspers(), i, m, e;
        if(v) return v; k = s.escape ? s.escape(k) : encodeURIComponent(k);
        i = c.indexOf(' ' + k + '='); c = i < 0 ? s.c_rr('s_sess') : c;
        i = c.indexOf(' ' + k + '='); m = i < 0 ? i : c.indexOf('|', i);
        e = i < 0 ? i : c.indexOf(';', i); m = m > 0 ? m : e;
        v = i < 0 ? '' : s.unescape ? s.unescape(c.substring(i + 2 + k.length, m < 0 ? c.length : m)) : decodeURIComponent(c.substring(i + 2 + k.length, m < 0 ? c.length : m));
        return v;
    }
    function c_rspers()
    {
        var s = this, cv = s.c_rr("s_pers"), date = new Date().getTime(), expd = null, cvarr = [], vcv = "";
        if(!cv) return vcv; cvarr = cv.split(";"); for(var i = 0, l = cvarr.length; i < l; i++)  { expd = cvarr[i].match(/\|([0-9]+)$/);
        if(expd && parseInt(expd[1]) >= date) { vcv += cvarr[i] + ";"; } } return vcv;
    }
    s.c_rspers = c_rspers;
    s.c_r = s.cookieRead = c_r;
}
if(!s.__ccucw)
{
    s.c_wr = s.c_w;
    s.__ccucw = true;
    function c_w(k, v, e)
    {
        var s = this, d = new Date, ht = 0, pn = 's_pers', sn = 's_sess', pc = 0, sc = 0, pv, sv, c, i, t, f;
        d.setTime(d.getTime() - 60000); if(s.c_rr(k)) s.c_wr(k, '', d); k = s.escape ? s.escape(k) : encodeURIComponent(k);
        pv = s.c_rspers(); i = pv.indexOf(' ' + k + '='); if(i > -1) { pv = pv.substring(0, i) + pv.substring(pv.indexOf(';', i) + 1); pc = 1; }
        sv = s.c_rr(sn); i = sv.indexOf(' ' + k + '='); if(i > -1) { sv = sv.substring(0, i) + sv.substring(sv.indexOf(';', i) + 1);
        sc = 1; } d = new Date; if(e) { if(e == 1) e = new Date, f = e.getYear(), e.setYear(f + 5 + (f < 1900 ? 1900 : 0));
        if(e.getTime() > d.getTime()) {  pv += ' ' + k + '=' + (s.escape ? s.escape(v) : encodeURIComponent(v)) + '|' + e.getTime() + ';';
        pc = 1; } } else { sv += ' ' + k + '=' + (s.escape ? s.escape(v) : encodeURIComponent(v)) + ';';
        sc = 1; } sv = sv.replace(/%00/g, ''); pv = pv.replace(/%00/g, ''); if(sc) s.c_wr(sn, sv, 0);
        if(pc) { t = pv; while(t && t.indexOf(';') != -1) { var t1 = parseInt(t.substring(t.indexOf('|') + 1, t.indexOf(';')));
        t = t.substring(t.indexOf(';') + 1); ht = ht < t1 ? t1 : ht; } d.setTime(ht); s.c_wr(pn, pv, d); }
        return v == s.c_r(s.unescape ? s.unescape(k) : decodeURIComponent(k));
    }
    s.c_w = s.cookieWrite = c_w;
}

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitorNamespace = "makemytrip"
	s.trackingServer = "metric.makemytrip.com"
	s.trackingServerSecure = "metrics.makemytrip.com"
	s.dc = "122"

	/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
/* End ActivityMap Module */
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 2.14.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
ppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
_pgicq();
