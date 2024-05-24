/**
 * Featherlight – ultra slim jQuery lightbox
 * Version 1.7.9 - http://noelboss.github.io/featherlight/
 *
 * Copyright 2017, Noël Raoul Bossart (http://www.noelboss.com)
 * MIT Licensed.
**/
@media all {
	html.with-featherlight {
		/* disable global scrolling when featherlights are visible */
		overflow: hidden;
	}

	.featherlight {
		display: none;

		/* dimensions: spanning the background from edge to edge */
		position:fixed;
		top: 0; right: 0; bottom: 0; left: 0;
		z-index: 2147483647; /* z-index needs to be >= elements on the site. */

		/* position: centering content */
		text-align: center;

		/* insures that the ::before pseudo element doesn't force wrap with fixed width content; */
		white-space: nowrap;

		/* styling */
		cursor: pointer;
		background: #333;
		/* IE8 "hack" for nested featherlights */
		background: rgba(0, 0, 0, 0);
	}

	/* support for nested featherlights. Does not work in IE8 (use JS to fix) */
	.featherlight:last-of-type {
		background: rgba(0, 0, 0, 0.8);
	}

	.featherlight:before {
		/* position: trick to center content vertically */
		content: '';
		display: inline-block;
		height: 100%;
		vertical-align: middle;
	}

	.featherlight .featherlight-content {
		/* make content container for positioned elements (close button) */
		position: relative;

		/* position: centering vertical and horizontal */
		text-align: left;
		vertical-align: middle;
		display: inline-block;

		/* dimensions: cut off images */
		overflow: auto;
		padding: 25px 25px 0;
		border-bottom: 25px solid transparent;

		/* dimensions: handling large content */
		margin-left: 5%;
		margin-right: 5%;
		max-height: 95%;

		/* styling */
		background: #fff;
		cursor: auto;

		/* reset white-space wrapping */
		white-space: normal;
	}

	/* contains the content */
	.featherlight .featherlight-inner {
		/* make sure its visible */
		display: block;
	}

	/* don't show these though */
	.featherlight script.featherlight-inner,
	.featherlight link.featherlight-inner,
	.featherlight style.featherlight-inner {
		display: none;
	}

	.featherlight .featherlight-close-icon {
		/* position: centering vertical and horizontal */
		position: absolute;
		z-index: 9999;
		top: 0;
		right: 0;

		/* dimensions: 25px x 25px */
		line-height: 25px;
		width: 25px;

		/* styling */
		cursor: pointer;
		text-align: center;
		font-family: Arial, sans-serif;
		background: #fff; /* Set the background in case it overlaps the content */
		background: rgba(255, 255, 255, 0.3);
		color: #000;
		border: none;
		padding: 0;
	}

	/* See http://stackoverflow.com/questions/16077341/how-to-reset-all-default-styles-of-the-html5-button-element */
	.featherlight .featherlight-close-icon::-moz-focus-inner {
		border: 0;
		padding: 0;
	}

	.featherlight .featherlight-image {
		/* styling */
		width: 100%;
	}


	.featherlight-iframe .featherlight-content {
		/* removed the border for image croping since iframe is edge to edge */
		border-bottom: 0;
		padding: 0;
		-webkit-overflow-scrolling: touch;
		overflow-y: scroll;
	}

	.featherlight iframe {
		/* styling */
		border: none;
	}

	.featherlight * { /* See https://github.com/noelboss/featherlight/issues/42 */
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
}

/* handling phones and small screens */
@media only screen and (max-width: 1024px) {
	.featherlight .featherlight-content {
		/* dimensions: maximize lightbox with for small screens */
		margin-left: 0;
		margin-right: 0;
		max-height: 98%;

		padding: 10px 10px 0;
		border-bottom: 10px solid transparent;
	}
}

/* hide non featherlight items when printing */
@media print {
	@page {size: landscape}

	html.with-featherlight > * > :not(.featherlight) {
		display: none;
	}
}
tor");d.document.body.appendChild(f)};this.receiveIabMessage=function(b){var c="string"==typeof b.data,d={};try{d=c?JSON.parse(b.data):b.data}catch(p){}if(d.__cmpCall&&"IAB"===a.iabType){var f=d.__cmpCall.callId,h=d.__cmpCall.command,k=d.__cmpCall.parameter;a.executeCmpApi(h,k,function(p,J){p={__cmpReturn:{returnValue:p,success:J,callId:f,command:h}};b.source.postMessage(c?JSON.stringify(p):p,b.origin)})}else d.__cmpCall&&"IAB2"===
a.iabType&&console.log("Expecting IAB TCF v2.0 vendor iFrame call; Received IAB TCF v1.1");if(d.__tcfapiCall&&"IAB2"===a.iabType){var u=d.__tcfapiCall.callId,r=d.__tcfapiCall.command,A=(k=d.__tcfapiCall.parameter,d.__tcfapiCall.version);a.executeTcfApi(r,k,function(p,J){p={__tcfapiReturn:{returnValue:p,success:J,callId:u,command:r}};b&&b.source&&b.source.postMessage&&b.source.postMessage(c?JSON.stringify(p):p,"*")},A)}else d.__tcfapiCall&&"IAB"===a.iabType&&console.log("Expecting IAB TCF v1.1 vendor iFrame call; Received IAB TCF v2.0")};
this.executeCmpApi=function(){for(var b=[],c=0;c<arguments.length;c++)b[c]=arguments[c];a.iabType="IAB";c=b[0];var d=b[1];b=b[2];if("function"==typeof b&&c)if(e.isStubReady&&e.IABCookieValue)switch(c){case "ping":a.getPingRequest(b,!0);break;case "getConsentData":a.getConsentDataRequest(b);break;default:a.addToQueue(c,d,b)}else a.addToQueue(c,d,b)};this.executeTcfApi=function(){for(var b=[],c=0;c<arguments.length;c++)b[c]=arguments[c];if(a.iabType="IAB2",!b.length)return window.__tcfapi.a||[];c=b[0];
var d=b[1],f=b[2];b=b[3];"function"==typeof f&&c&&("ping"===c?a.getPingRequest(f):a.addToQueue(c,d,f,b))};this.addToQueue=function(b,c,d,f){var h=window,k="IAB"===a.iabType?"__cmp":"__tcfapi";h[k].a=h[k].a||[];h[k].a.push([b,c,d,f])};this.getPingRequest=function(b,c){if(void 0===c&&(c=!1),b){var d={},f=!1;"IAB"===a.iabType?(d={gdprAppliesGlobally:e.oneTrustIABgdprAppliesGlobally,cmpLoaded:c},f=!0):"IAB2"===a.iabType&&(d={gdprApplies:e.oneTrustIABgdprAppliesGlobally,cmpLoaded:!1,cmpStatus:"stub",displayStatus:"stub",
apiVersion:"2.0",cmpVersion:void 0,cmpId:void 0,gvlVersion:void 0,tcfPolicyVersion:void 0},f=!0);b(d,f)}};this.getConsentDataRequest=function(b){b&&e.IABCookieValue&&b({gdprApplies:e.oneTrustIABgdprAppliesGlobally,hasGlobalScope:e.hasIABGlobalScope,consentData:e.IABCookieValue},!0)};this.initConsentSDK()}var K,m,pa,B,U,qa,V,W,L,ra,x,sa,X,M,N,C,Y,ta,D,ua,t,Z,aa,va,E,wa,y,xa,ba,ya,ca,l,z,O,da,ea,P,v,fa,ha,za,F,ia,q,w,Q,R,ja,S,Aa,Ba,G,Ca,H,Da,I,Ea,ka,la,e=new function(){this.optanonCookieName="OptanonConsent";
this.optanonHtmlGroupData=[];this.optanonHostData=[];this.genVendorsData=[];this.vendorsServiceData=[];this.IABCookieValue="";this.oneTrustIABCookieName="eupubconsent";this.oneTrustIsIABCrossConsentEnableParam="isIABGlobal";this.isStubReady=!0;this.geolocationCookiesParam="geolocation";this.EUCOUNTRIES="BE BG CZ DK DE EE IE GR ES FR IT CY LV LT LU HU MT NL AT PL PT RO SI SK FI SE GB HR LI NO IS".split(" ");this.stubFileName="otSDKStub";this.DATAFILEATTRIBUTE="data-domain-script";this.bannerScriptName=
"otBannerSdk.js";this.mobileOnlineURL=[];this.isMigratedURL=!1;this.migratedCCTID="[[OldCCTID]]";this.migratedDomainId="[[NewDomainId]]";this.userLocation={country:"",state:""}};(m=K=K||{})[m.Unknown=0]="Unknown";m[m.BannerCloseButton=1]="BannerCloseButton";m[m.ConfirmChoiceButton=2]="ConfirmChoiceButton";m[m.AcceptAll=3]="AcceptAll";m[m.RejectAll=4]="RejectAll";m[m.BannerSaveSettings=5]="BannerSaveSettings";m[m.ContinueWithoutAcceptingButton=6]="ContinueWithoutAcceptingButton";(B=pa=pa||{})[B.Banner=
1]="Banner";B[B.PC=2]="PC";B[B.API=3]="API";(K=U=U||{}).AcceptAll="AcceptAll";K.RejectAll="RejectAll";K.UpdateConsent="UpdateConsent";(V=qa=qa||{})[V.Purpose=1]="Purpose";V[V.SpecialFeature=2]="SpecialFeature";(U=W=W||{}).Legal="legal";U.UserFriendly="user_friendly";(W=L=L||{}).Top="top";W.Bottom="bottom";(x=ra=ra||{})[x.Banner=0]="Banner";x[x.PrefCenterHome=1]="PrefCenterHome";x[x.VendorList=2]="VendorList";x[x.CookieList=3]="CookieList";(X=sa=sa||{})[X.RightArrow=39]="RightArrow";X[X.LeftArrow=
37]="LeftArrow";(L=M=M||{}).AfterTitle="AfterTitle";L.AfterDescription="AfterDescription";L.AfterDPD="AfterDPD";(M=N=N||{}).PlusMinus="Plusminus";M.Caret="Caret";M.NoAccordion="NoAccordion";(N=C=C||{}).Consent="Consent";N.LI="LI";N.AddtlConsent="AddtlConsent";(C=Y=Y||{}).Iab1Pub="eupubconsent";C.Iab2Pub="eupubconsent-v2";C.Iab1Eu="euconsent";C.Iab2Eu="euconsent-v2";(D=ta=ta||{})[D.Disabled=0]="Disabled";D[D.Consent=1]="Consent";D[D.LegInt=2]="LegInt";(t=ua=ua||{})[t["Banner - Allow All"]=1]="Banner - Allow All";
t[t["Banner - Reject All"]=2]="Banner - Reject All";t[t["Banner - Close"]=3]="Banner - Close";t[t["Preference Center - Allow All"]=4]="Preference Center - Allow All";t[t["Preference Center - Reject All"]=5]="Preference Center - Reject All";t[t["Preference Center - Confirm"]=6]="Preference Center - Confirm";(Y=Z=Z||{}).Active="1";Y.InActive="0";(Z=aa=aa||{}).Host="Host";Z.GenVendor="GenVen";(E=va=va||{})[E.Host=1]="Host";E[E.GenVen=2]="GenVen";E[E.HostAndGenVen=3]="HostAndGenVen";(y=wa=wa||{})[y.minDays=
1]="minDays";y[y.maxDays=30]="maxDays";y[y.maxYear=31536E3]="maxYear";y[y.maxSecToDays=86400]="maxSecToDays";(ba=xa=xa||{})[ba.RTL=0]="RTL";ba[ba.LTR=1]="LTR";(ca=ya=ya||{})[ca.GoogleVendor=1]="GoogleVendor";ca[ca.GeneralVendor=2]="GeneralVendor";(z=l=l||{})[z.Days=1]="Days";z[z.Weeks=7]="Weeks";z[z.Months=30]="Months";z[z.Years=365]="Years";(aa=O=O||{}).Checkbox="Checkbox";aa.Toggle="Toggle";(O=da=da||{}).SlideIn="Slide_In";O.FadeIn="Fade_In";O.RemoveAnimation="Remove_Animation";(da=ea=ea||{}).Link=
"Link";da.Icon="Icon";(ea=P=P||{}).consent="consent";ea.set="set";(P=v=v||{}).update="update";P.default="default";P.ads_data_redaction="ads_data_redaction";(v=fa=fa||{}).analytics_storage="analytics_storage";v.ad_storage="ad_storage";v.functionality_storage="functionality_storage";v.personalization_storage="personalization_storage";v.security_storage="security_storage";v.region="region";v.wait_for_update="wait_for_update";(fa=ha=ha||{}).granted="granted";fa.denied="denied";(F=za=za||{})[F.HostList=
0]="HostList";F[F.IabVendors=1]="IabVendors";F[F.VendorServices=2]="VendorServices";(ha=ia=ia||{}).OBJECT_TO_LI="ObjectToLI";ha.LI_ACTIVE_IF_LEGAL_BASIS="LIActiveIfLegalBasis";(ia=q=q||{}).cookies="cookies";ia.vendors="vendors";(q=w=w||{}).GDPR="GDPR";q.IAB="IAB";q.CCPA="CCPA";q.IAB2="IAB2";q.GENERIC="GENERIC";q.LGPD="LGPD";q.GENERIC_PROMPT="GENERIC_PROMPT";q.CPRA="CPRA";q.CDPA="CDPA";q.USNATIONAL="USNATIONAL";q.CUSTOM="CUSTOM";(w=Q=Q||{}).Name="OTGPPConsent";w[w.ChunkSize=4E3]="ChunkSize";w.ChunkCountParam=
"GPPCookiesCount";(w=R=R||{}).MspaCoveredTransaction="IsMSPAEnabled";w.MspaOptOutOptionMode="Opt-Out";w.MspaServiceProviderMode="Service Provider";(R=ja=ja||{}).MspaCoveredTransaction="MspaCoveredTransaction";R.MspaOptOutOptionMode="MspaOptOutOptionMode";R.MspaServiceProviderMode="MspaServiceProviderMode";(ja=S=S||{}).SensitiveDataProcessing="SensitiveDataProcessing";ja.KnownChildSensitiveDataConsents="KnownChildSensitiveDataConsents";(S=Aa=Aa||{}).CPRA="uspcav1";S.CCPA="uspcav1";S.USNATIONAL="uspnatv1";
(G=Ba=Ba||{})[G.CPRA=8]="CPRA";G[G.CCPA=8]="CCPA";G[G.USNATIONAL=7]="USNATIONAL";(H=Ca=Ca||{})[H.NotApplicable=0]="NotApplicable";H[H.OptOut=1]="OptOut";H[H.OptIn=2]="OptIn";(I=Da=Da||{})[I.NotApplicable=0]="NotApplicable";I[I.Yes=1]="Yes";I[I.No=2]="No";(ka=Ea=Ea||{})[ka.CmpId=28]="CmpId";ka[ka.CmpVersion=1]="CmpVersion";var Fa,n,T,Ha=(Q.Name,"PRODUCTION"),Ia=((la={})[l.Days]="PCenterVendorListLifespanDay",la[l.Weeks]="LfSpnWk",la[l.Months]="PCenterVendorListLifespanMonth",la[l.Years]="LfSpnYr",
na.prototype.camelize=function(a){return a.split("-").map(function(b,c){return 0===c?b:b[0].toUpperCase()+b.slice(1)}).join("")},na.prototype.strToObj=function(a){var b={};a=a.split(";").map(function(f){return f.trim()});for(var c=0,d=void 0;c<a.length;++c)if(/:/.test(a[c])){if(!(d=a[c].split(/:(.+)/))[1])return null;b[this.camelize(d[0])]=d[1].trim()}return b},na);(n=Fa=Fa||{})[n.ACTIVE=0]="ACTIVE";n[n.ALWAYS_ACTIVE=1]="ALWAYS_ACTIVE";n[n.EXPIRED=2]="EXPIRED";n[n.NO_CONSENT=3]="NO_CONSENT";n[n.OPT_OUT=
4]="OPT_OUT";n[n.PENDING=5]="PENDING";n[n.WITHDRAWN=6]="WITHDRAWN";(l=T=T||{}).ping="ping";l.addEventListener="addEventListener";l.removeEventListener="removeEventListener";l.hasSection="hasSection";l.getSection="getSection";l.getField="getField";l.getGPPData="getGPPData";var oa=new function(){var a=this;this.LOCATOR_NAME="__gppLocator";this.win=window;this.customInit="CUSTOMINIT";this.init=function(){a.win.__gpp&&"function"==typeof a.win.__gpp||(a.win.__gpp=a.executeGppApi,window.addEventListener("message",
a.messageHandler,!1),a.addFrame(a.LOCATOR_NAME))};this.removeGppApi=function(){delete a.win.__gpp;var b=document.querySelectorAll("iframe[name\x3d"+a.LOCATOR_NAME+"]")[0];b&&b.parentElement.removeChild(b)};this.executeGppApi=function(){for(var b,c=[],d=0;d<arguments.length;d++)c[d]=arguments[d];if(!c.length)return(null===(b=a.win)||void 0===b?void 0:b.__gpp).queue||[];b=c[0];d=1<c.length?c[1]:null;c=2<c.length?c[2]:null;switch(b){case T.ping:return a.getPingRequest(d);case T.addEventListener:return a.addEventListener(d,
c);case T.removeEventListener:return a.removeEventListener(c);default:return void a.addToQueue(b,d,c)}};this.getPingRequest=function(b){var c={gppVersion:1,cmpStatus:"stub",cmpDisplayStatus:"hidden",apiSupport:["uspcav1","uspvav1"],currentAPI:"",cmpId:28};return b&&b(c,!0),c};this.addFrame=function(b){var c=a.win.document;if(!a.win.frames[b])if(c.body){var d=c.createElement("iframe");d.style.cssText="display:none";d.name=b;d.setAttribute("title","GPP Locator");c.body.appendChild(d)}else setTimeout(function(){a.addFrame(b)},
5)};this.addEventListener=function(b,c){var d=a.win.__gpp;return d.events=d.events||[],null!=d&&d.lastId||(d.lastId=0),d.lastId++,d.events.push({id:d.lastId,callback:b,parameter:c}),{eventName:"listenerRegistered",listenerId:d.lastId,data:!0}};this.removeEventListener=function(b){var c=!1,d=a.win.__gpp;return d.events=d.events||[],d.events=d.events.filter(function(f){return f.id.toString()!==b.toString()||!(c=!0)}),{eventName:"listenerRemoved",listenerId:b,data:c}};this.addToQueue=function(b,c,d){var f=
a.win.__gpp;f.queue=f.queue||[];f.queue.push([b,c,d])};this.messageHandler=function(b){var c="string"==typeof b.data;try{var d=c?JSON.parse(b.data):b.data}catch(h){d=null}if(d&&d.__gppCall){var f=d.__gppCall;(0,a.win.__gpp)(f.command,function(h,k){h={__gppReturn:{returnValue:h,success:k,callId:f.callId}};b.source.postMessage(c?JSON.stringify(h):h,b.source||"*")},f.parameter)}};this.customInit||this.init()};l=(g.prototype.initConsentSDK=function(){this.initCustomEventPolyfill();this.ensureHtmlGroupDataInitialised();
this.setStubScriptElement();this.setOTDataLayer();this.getParam();this.fetchBannerSDKDependency();this.captureNonce()},g.prototype.captureNonce=function(){this.nonce=e.stubScriptElement.nonce||e.stubScriptElement.getAttribute("nonce")||null},g.prototype.fetchBannerSDKDependency=function(){this.setDomainDataFileURL();this.crossOrigin=e.stubScriptElement.getAttribute("crossorigin")||null;this.previewMode="true"===e.stubScriptElement.getAttribute("data-preview-mode");this.otFetch(e.bannerDataParentURL,
this.getLocation.bind(this))},g.prototype.setDomainIfBulkDomainEnabled=function(a){var b=a&&a.TenantFeatures,c=window.location.hostname,d=a.Domain,f=a.BulkDomainCheckUrl;b&&b.CookieV2BulkDomainManagement&&c!==d&&a.ScriptType===Ha&&((b=window.sessionStorage)&&b.getItem("bulkDomainMgmtEnabled")?this.handleBulkDomainMgmt({isValid:"true"===window.sessionStorage.getItem("bulkDomainMgmtEnabled")},a):(c={location:e.storageBaseURL.replace(/^https?:\/\//,""),domainId:this.domainId,url:c},this.otFetch(f,this.handleBulkDomainMgmt,
!1,c,a)))},g.prototype.getLocation=function(a){if(this.setDomainIfBulkDomainEnabled(a),(a.TenantFeatures&&a.TenantFeatures.CookieV2CSP||a.CookieV2CSPEnabled)&&this.nonce&&(this.setAttributePolyfillIsActive=!0,(new Ia).implementThePolyfill()),!a.RuleSet[0].Type)return this.iabTypeAdded=!1,window.__cmp=this.executeCmpApi,window.__tcfapi=this.executeTcfApi,this.intializeIabStub(),this.addBannerSDKScript(a);var b=window;b.OneTrust&&b.OneTrust.geolocationResponse?(b=b.OneTrust.geolocationResponse,this.setGeoLocation(b.countryCode,
b.stateCode),this.addBannerSDKScript(a)):(b=this.readCookieParam(e.optanonCookieName,e.geolocationCookiesParam))||a.SkipGeolocation?(this.setGeoLocation(b.split(";")[0],b.split(";")[1]),this.addBannerSDKScript(a)):this.getGeoLocation(a)},g.prototype.handleBulkDomainMgmt=function(a,b){window.sessionStorage&&window.sessionStorage.setItem("bulkDomainMgmtEnabled",JSON.stringify(a.isValid));a.isValid&&(b.Domain=window.location.hostname)},g.prototype.getGeolocationURL=function(a){a.TenantFeatures;var b=
""+e.stubScriptElement.getAttribute("src").split(e.stubFileName)[0]+a.Version;return RegExp("^file://","i").test(b)&&a.MobileSDK?(a="/"+a.GeolocationUrl.replace(/^(http|https):\/\//,"").split("/").slice(1).join("/")+".js",e.storageBaseURL+a):a.GeolocationUrl},g.prototype.geoLocationJsonCallback=function(a,b){b&&this.setGeoLocation(b.country,b.state);this.addBannerSDKScript(a)},g.prototype.getGeoLocation=function(a){var b=this.getGeolocationURL(a);this.otFetch(b,this.geoLocationJsonCallback.bind(this,
a),!0)},g.prototype.setOTDataLayer=function(){var a=e.stubScriptElement.hasAttribute("data-dLayer-ignore"),b=e.stubScriptElement.getAttribute("data-dLayer-ignore");this.otDataLayer={ignore:a&&"true"===b||a&&""===b,name:e.stubScriptElement.getAttribute("data-dLayer-name")||"dataLayer"}},g.prototype.setGeoLocation=function(a,b){void 0===b&&(b="");e.userLocation={country:a,state:b}},g.prototype.otFetch=function(a,b,c,d,f){void 0===c&&(c=!1);void 0===d&&(d=null);var h=window.sessionStorage&&window.sessionStorage.getItem("otPreviewData");
if(RegExp("^file://","i").test(a))this.otFetchOfflineFile(a,b);else if(0<=a.indexOf("/consent/")&&this.previewMode&&h)a=JSON.parse(h).domainJson,b(a);else{e.mobileOnlineURL.push(a);h=new XMLHttpRequest;if(h.onload=function(u){var r;this&&this.responseText?r=this.responseText:u&&u.target&&(r=u.target.responseText);f?b(JSON.parse(r),f):b(JSON.parse(r))},h.onerror=function(){b()},h.open("GET",a),c&&h.setRequestHeader("accept","application/json"),d)for(var k in d)h.setRequestHeader(k,d[k]);h.send()}},
g.prototype.otFetchOfflineFile=function(a,b){var c=(a=a.replace(".json",".js")).split("/"),d=c[c.length-1].split(".js")[0];this.jsonp(a,function(){b(window[d])})},g.prototype.jsonp=function(a,b){var c=document.createElement("script");c.setAttribute("src",a);this.nonce&&c.setAttribute("nonce",this.nonce);c.async=!0;c.type="text/javascript";this.crossOrigin&&c.setAttribute("crossorigin",this.crossOrigin);document.getElementsByTagName("head")[0].appendChild(c);RegExp("^file://","i").test(a)||e.mobileOnlineURL.push(a);
b&&(c.onload=c.onerror=function(){b()})},g.prototype.getRegionSet=function(a){var b,c=e.userLocation,d=a.RuleSet.filter(function(r){return!0===r.Default});if(!c.country&&!c.state)return d&&0<d.length?d[0]:null;d=c.state.toLowerCase();c=c.country.toLowerCase();for(var f=0;f<a.RuleSet.length;f++)if(!0===a.RuleSet[f].Global)var h=a.RuleSet[f];else{var k=a.RuleSet[f].States;if(k[c]&&0<=k[c].indexOf(d)){var u=a.RuleSet[f];break}0<=a.RuleSet[f].Countries.indexOf(c)&&(b=a.RuleSet[f])}return u||b||h},g.prototype.ensureHtmlGroupDataInitialised=
function(){this.initializeIABData();this.initializeGroupData();this.initializeHostData();this.initializeGenVenData()},g.prototype.initializeGroupData=function(){var a=this.readCookieParam(e.optanonCookieName,"groups");a&&(e.optanonHtmlGroupData=this.deserialiseStringToArray(a))},g.prototype.initializeHostData=function(){var a=this.readCookieParam(e.optanonCookieName,"hosts");a&&(e.optanonHostData=this.deserialiseStringToArray(a))},g.prototype.initializeGenVenData=function(){var a=this.readCookieParam(e.optanonCookieName,
"genVendors");a&&(e.genVendorsData=this.deserialiseStringToArray(a))},g.prototype.initializeIABData=function(){this.validateIABGDPRApplied();this.validateIABGlobalScope()},g.prototype.validateIABGlobalScope=function(){var a=this.readCookieParam(e.optanonCookieName,e.oneTrustIsIABCrossConsentEnableParam);a?"true"===a?(e.hasIABGlobalScope=!0,e.isStubReady=!1):(e.hasIABGlobalScope=!1,e.IABCookieValue=this.getCookie(e.oneTrustIABCookieName)):e.isStubReady=!1},g.prototype.validateIABGDPRApplied=function(){var a=
this.readCookieParam(e.optanonCookieName,e.geolocationCookiesParam).split(";")[0];a?this.isBoolean(a)?e.oneTrustIABgdprAppliesGlobally="true"===a:e.oneTrustIABgdprAppliesGlobally=0<=e.EUCOUNTRIES.indexOf(a):e.isStubReady=!1},g.prototype.isBoolean=function(a){return"true"===a||"false"===a},g.prototype.readCookieParam=function(a,b){var c;if(c=this.getCookie(a)){a={};var d=c.split("\x26");for(c=0;c<d.length;c+=1){var f=d[c].split("\x3d");a[decodeURIComponent(f[0])]=decodeURIComponent(f[1]).replace(/\+/g,
" ")}return b&&a[b]?a[b]:b&&!a[b]?"":a}return""},g.prototype.getCookie=function(a){if(this.isAmp)return(JSON.parse(window.localStorage.getItem(this.domainId))||{})[a]||null;var b,c=a+"\x3d",d=document.cookie.split(";");for(a=0;a<d.length;a+=1){for(b=d[a];" "==b.charAt(0);)b=b.substring(1,b.length);if(0==b.indexOf(c))return b.substring(c.length,b.length)}return null},g.prototype.updateGtmMacros=function(){var a,b=[],c=e.optanonHtmlGroupData.length;for(a=0;a<c;a++)this.endsWith(e.optanonHtmlGroupData[a],
":1")&&b.push(e.optanonHtmlGroupData[a].replace(":1",""));c=e.optanonHostData.length;for(a=0;a<c;a++)this.endsWith(e.optanonHostData[a],":1")&&b.push(e.optanonHostData[a].replace(":1",""));c=e.genVendorsData.length;for(a=0;a<c;a++)this.endsWith(e.genVendorsData[a],":1")&&b.push(e.genVendorsData[a].replace(":1",""));c=e.vendorsServiceData.length;for(a=0;a<c;a++)this.endsWith(e.vendorsServiceData[a],":1")&&b.push(e.vendorsServiceData[a].replace(":1",""));a=","+this.serialiseArrayToString(b)+",";window.OnetrustActiveGroups=
a;window.OptanonActiveGroups=a;c=window;this.otDataLayer.ignore||void 0===c[this.otDataLayer.name]?this.otDataLayer.ignore||(c[this.otDataLayer.name]=[{event:"OneTrustLoaded",OnetrustActiveGroups:a},{event:"OptanonLoaded",OptanonActiveGroups:a}]):c[this.otDataLayer.name].constructor===Array&&(c[this.otDataLayer.name].push({OnetrustActiveGroups:a}),c[this.otDataLayer.name].push({OptanonActiveGroups:a}));var d,f=new CustomEvent("consent.onetrust",{detail:b});!this.otDataLayer.ignore&&b.length&&(c[this.otDataLayer.name].constructor===
Array&&c[this.otDataLayer.name].push({event:"OneTrustGroupsUpdated",OnetrustActiveGroups:a}),d=new CustomEvent("OneTrustGroupsUpdated",{detail:b}));setTimeout(function(){b.length&&window.dispatchEvent(f);d&&window.dispatchEvent(d)})},g.prototype.deserialiseStringToArray=function(a){return a?a.split(","):[]},g.prototype.endsWith=function(a,b){return-1!==a.indexOf(b,a.length-b.length)},g.prototype.serialiseArrayToString=function(a){return a.toString()},g.prototype.setStubScriptElement=function(){e.stubScriptElement=
document.querySelector("script[src*\x3d'"+e.stubFileName+"']");var a=e.stubScriptElement&&0<=e.stubScriptElement.getAttribute("src").indexOf("did\x3d");e.stubScriptElement&&e.stubScriptElement.hasAttribute(e.DATAFILEATTRIBUTE)?this.domainId=e.stubScriptElement.getAttribute(e.DATAFILEATTRIBUTE).trim():a?this.domainId=e.stubScriptElement.getAttribute("src").split("did\x3d")[1]:e.stubScriptElement||(e.stubScriptElement=document.querySelector("script[src*\x3d'"+e.migratedCCTID+"']"),e.stubScriptElement&&
(e.isMigratedURL=!0,this.domainId=e.migratedDomainId.trim()))},g.prototype.setDomainDataFileURL=function(){var a=e.stubScriptElement.getAttribute("src"),b=-1<a.indexOf("/consent");a&&(e.isMigratedURL?e.storageBaseURL=a.split("/consent/"+e.migratedCCTID)[0]:e.storageBaseURL=b?a.split("/consent")[0]:a.split("/scripttemplates/"+e.stubFileName)[0]);this.storageBaseURL=e.storageBaseURL;this.isPreview&&-1===this.domainId.indexOf("test")?this.domainId+="-test":this.isPreview=!1;e.bannerBaseDataURL=e.storageBaseURL&&
e.storageBaseURL+"/consent/"+this.domainId;e.bannerDataParentURL=e.bannerBaseDataURL+"/"+this.domainId+".json"},g.prototype.initCustomEventPolyfill=function(){function a(b,c){c=c||{bubbles:!1,cancelable:!1,detail:void 0};var d=document.createEvent("CustomEvent");return d.initCustomEvent(b,c.bubbles,c.cancelable,c.detail),d}if("function"==typeof window.CustomEvent)return!1;a.prototype=window.Event.prototype;window.CustomEvent=a},g.prototype.removeTcf=function(){delete window.__tcfapi;var a=document.querySelectorAll("iframe[name\x3d'__tcfapiLocator']")[0];
a&&a.parentElement.removeChild(a)},g.prototype.getParamForIE=function(){return{get:function(a){a=(new RegExp("[?\x26]"+a+"\x3d([^\x26#]*)")).exec(window.location.search);return null===a?null:decodeURI(a[1])||""}}},g.prototype.getParam=function(){window.document.documentMode||!window.URLSearchParams?this.urlParams=this.getParamForIE():this.urlParams=new URLSearchParams(window.location.search);var a="true"===this.urlParams.get("otreset"),b="true"===this.urlParams.get("otpreview");this.geoFromUrl=(this.urlParams.get("otgeo")||
"").toLowerCase();var c=this.readCookieParam("otpreview","expiry"),d=this.readCookieParam("otpreview","geo");this.isReset=a||c&&new Date(c)<new Date;this.isPreview=!this.isReset&&(b||c&&new Date(c)>new Date);this.setGeoParam(this.geoFromUrl||d)},g.prototype.setGeoParam=function(a){if(a){var b=window;b.OneTrust||(b.OneTrust={});a=a.split(",");b.OneTrust.geolocationResponse={countryCode:a[0],stateCode:a[1]}}},g);Q=new l;return ma.OtSDKStub=l,ma.otSdkStub=Q,ma})({});