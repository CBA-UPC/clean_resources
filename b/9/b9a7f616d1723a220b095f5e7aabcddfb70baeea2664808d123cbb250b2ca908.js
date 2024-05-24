<!DOCTYPE html>
<!--
	NOTES:
	1. All tokens are represented by '$' sign in the template.
	2. You can write your code only wherever mentioned.
	3. All occurrences of existing tokens will be replaced by their appropriate values.
	4. Blank lines will be removed automatically.
	5. Remove unnecessary comments before creating your template.
-->
<html>
<head>
<meta charset="UTF-8">
<meta name="authoring-tool" content="Adobe_Animate_CC">
<title>TV2_MutasdAHangod2024_SzombatEste_970x90</title>
<!-- write your code here -->
<style>
    body {
        margi: none;
        overflow: hidden;
    }
</style>
<script src="//ad.adverticum.net/scripts/goa-helper.js"></script>
<script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
<script src="TV2_MutasdAHangod2024_SzombatEste_970x90.js"></script>
<script>
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("1BB350267B184D54A80BD2ECF86E6602");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.TV2_MutasdAHangod2024_SzombatEste_970x90();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(true,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
</script>
<!-- write your code here -->
</head>
<body onload="init();" style="margin:0px;">
	<a id="clickTAG" href="" target="">
	<div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:970px; height:90px">
		<canvas id="canvas" width="970" height="90" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
		<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:970px; height:90px; position: absolute; left: 0px; top: 0px; display: block;">
		</div>
	</div>
</a>
<script>
    (function(){

        var cT = document.getElementById('clickTAG');
        cT.href = goa.clickTAG;
        cT.target = goa.clickTARGET;
    })();
</script>
</body>
</html>r: "",
            color: ""
        },

        snowEffect: 0,
        clickTag: "https://admwhu.hit.gemius.pl/hitredir/id=ncCVHzs4yVspE3c4s06tB_UVHXKp9kbGjHOyfQmOh0r.C7/nc=1/stparam=sdohovjrso/fastid=lgnihishgjtmxedhcdnykkdouckc/sarg=NC;/inner=%7C;/extra=mwid%3D;/url=" + encodeURIComponent("https://www.youtube.com/watch?v=NMpYDoi96ug"),
        redirection: "clickTag=https://admwhu.hit.gemius.pl/hitredir/id=ncCVHzs4yVspE3c4s06tB_UVHXKp9kbGjHOyfQmOh0r.C7/nc=1/stparam=sdohovjrso/fastid=lgnihishgjtmxedhcdnykkdouckc/sarg=NC;/inner=%7C;/extra=mwid%3D;/url="+encodeURIComponent("https://www.youtube.com/watch?v=NMpYDoi96ug"),
        additionalHtml: ""
    };



    gao.billboardv2.push(config);
})();

document.write('<scr'+'ipt src="https://hu.adocean.pl/files/js/billboard_v2_gao_lib.js"></scr'+'ipt>');
document.write('<scr'+'ipt src="https://hu.adocean.pl/files/user_global_files/yoflbxhnng/naosiqrjkx1675784584402174.js "></scr'+'ipt>');

imp_url_evynjffqsqwjmnfqopknwnlt="";
if(imp_url_evynjffqsqwjmnfqopknwnlt!=""){
if (imp_url_evynjffqsqwjmnfqopknwnlt.substring(0,5) =="http:")   imp_url_evynjffqsqwjmnfqopknwnlt = imp_url_evynjffqsqwjmnfqopknwnlt.replace("http:", 'https');
_ao_ext_imp_evynjffqsqwjmnfqopknwnlt = new Image(1,1);
_ao_ext_imp_evynjffqsqwjmnfqopknwnlt.src=imp_url_evynjffqsqwjmnfqopknwnlt;
}

if (typeof window.addEventListener == "function") {
    window.addEventListener("message", function(message) {
        if (message.origin == "https://hu.adocean.pl" || "".indexOf(message.origin) >= 0) {
            if (typeof window[message.data] == "function") {
                window[message.data]();
            }
        }
    });
}

document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=ncCVHzs4yVspE3c4s06tB_UVHXKp9kbGjHOyfQmOh0r.C7/nc=1/stparam=vchrkiqmit/fastid=irfwtdgmmeyaglfcxbzdecjvwcki/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

}
adoceanhutmqshngmsz.isEmpty=0;
function adoceanhukpfgcvdkno() {
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['Life_desktop_hirek_szoveges_link_1'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['kpfgcvdkno'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhukpfgcvdkno', arg:'', isEmpty:0});}
var d=document;
d.write("<div><div class=\"item\"><strong>Nincs kivel besz&#233;lgetned? Az Origo Randin a k&#246;z&#246;s &#233;rdekl&#337;d&#233;s &#246;sszehozhat a hozz&#225;d ill&#337;vel!</strong><a href=\"https://admwhu.hit.gemius.pl/hitredir/id=B8ZAratjK9Wg3EDdUdoE1qQsLb8G1s_CANqmVpGoOdj.R7/nc=1/stparam=rnpiqnsjyl/fastid=erpvixehgoyrnsbhykddudjqlxmj/sarg=NC;/inner=%7C;/extra=mwid%3D;/url=\" target=\"blank\"></a></div></div>\n");
d.write("<script type=\"text/javascript\">\n");
d.write("\n");
d.write("imp_url_evynjffqsqwjmnfqhiigxrli=\"\";\n");
d.write("if(imp_url_evynjffqsqwjmnfqhiigxrli!=\"\"){\n");
d.write("if (imp_url_evynjffqsqwjmnfqhiigxrli.substring(0,5) ==\"http:\")   imp_url_evynjffqsqwjmnfqhiigxrli = imp_url_evynjffqsqwjmnfqhiigxrli.replace(\"http:\", 'https');\n");
d.write("_ao_ext_imp_evynjffqsqwjmnfqhiigxrli = new Image(1,1);\n");
d.write("_ao_ext_imp_evynjffqsqwjmnfqhiigxrli.src=imp_url_evynjffqsqwjmnfqhiigxrli;\n");
d.write("}\n");
d.write("\n");
d.write("<\/SCRIPT>\n");

document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=B8ZAratjK9Wg3EDdUdoE1qQsLb8G1s_CANqmVpGoOdj.R7/nc=1/stparam=umismqifoq/fastid=apabppsgkhzqpxbluteaxvpxnxnb/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

}
adoceanhukpfgcvdkno.isEmpty=0;
function adoceanhuqnhjlkqqnu() {
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['Life_desktop_hirek_roadblock_2'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['qnhjlkqqnu'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhuqnhjlkqqnu', arg:'', isEmpty:0});}
!function(e){var n;n="gao",typeof window[n]==e&&(window[n]={}),typeof _gao_insdwl!=e&&typeof _gao_insdwl.init!=e||typeof gao.aoInscreenHit!=e||document.write('<script src="https://admwhu.hit.gemius.pl/gdejs/xgde.js"><\/script>'),"function"!=typeof gao.inscreenRegisterElement&&(gao.inscreenRegisterElement=function(n,o){typeof gao.aoInscreenHit!=e&&"string"==typeof o&&typeof gao.aoInscreenHit[o]!=e&&(window._gdeaq=window._gdeaq||[],window._gdeaq.push(["inscreen",gao.aoInscreenHit[o],n]),delete gao.aoInscreenHit[o])}),typeof gao.aoInscreenHit==e&&(gao.aoInscreenHit={}),gao.aoInscreenHit["evynjffqsqwjmnfqqqfpxfmn"]="https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=pchinmgimb/sarg=NC;/inner=%7C;"}("undefined");
// Template ver. 2020120801
+function() {
    var GLOBAL_QUEUE_NAME = 'adoPrebidQueue_1_0';

    var config = {
        unique: 'evynjffqsqwjmnfqqqfpxfmn',
        targetID: 'ao-evynjffqsqwjmnfqqqfpxfmn',
        creativeID: 'adoceanhuqnhjlkqqnu',
        usePredictableIDs: 1,

        sendHitFunc: (function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})(),
        emissionHits: [[{type: "commit", url:"https://hu.adocean.pl/commit/nc=1/code=qLJJgFz8iuOw6ua3LRYeU5koYThGDfwsZXlHplU82rX.r7/eprog=12/inner=ao%5Funiq%3Devynjffqsqwjmnfqdedgicfh%7C%5Fhcpref%3Dhu;/"},"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=vajlgssomh/fastid=igbgbljcwnxoamawgvsnzmvsntme/sarg=NC;/inner=%7C;/extra=mwid%3D;"]],
        emissionHitUrl: 'https://hu.adocean.pl/event/nc=1/code=qLJJgFz8iuOw6ua3LRYeU5koYThGDfwsZXlHplU82rX.r7/eprog=12/inner=ao%5Funiq%3Devynjffqsqwjmnfqdedgicfh%7C%5Fhcpref%3Dhu;/data=https://admwhu.hit.gemius.pl/redot.gif/id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=vajlgssomh/fastid=igbgbljcwnxoamawgvsnzmvsntme/sarg=NC;/inner=%7C;/extra=mwid%3D;',
        statsHitUrl: 'https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=pchinmgimb/sarg=NC;/inner=%7C;',
        secondPhaseFnct: 'adoceanhuqnhjlkqqnu_second_phase',
        emitterOfferID: 'evynjffqsqwjmnfqhoqvicks',
        currencyExchangeRates: {"BGN":0.511289098,"BYN":0.298165665,"BYR":4.60309788e-05,"CZK":0.0400929826,"DKK":0.134088241,"EEK":0.0582522037,"EUR":1,"GEL":0.349812424,"HRK":0.143248406,"HUF":0.00257819513,"KZT":0.00205666413,"LTL":0.284103201,"LVL":1.35812102,"NOK":0.0874358443,"PLN":0.230154894,"RON":0.200971254,"RSD":0.00853874658,"RUB":0.0101958618,"TJS":0.0849962024,"TRY":0.0303344151,"UAH":0.0246726047,"USD":0.9273401},
        prebidScriptUrl: 'https://hu.adocean.pl/files/js/prebid/6.27.0/EAAAAAAAAAQAAAAAAAAAAAAAAAAAQAAQFAAIAIAAAAAABAAAAAAAAAgAAAACAAAAkBA.js',

        width: "640",
        height: "360",
        extraSizes: "336x280,300x250",
        schain: "{\"validation\": \"strict\",\"config\": {\"ver\":\"1.0\", \"complete\": 1,\"nodes\": [{  \"sid\":\"13820\",  \"asi\":\"hoppex.hu\",  \"hp\":1 } ] } }",
        modules: [
{
"bidder" : "rubicon",
"params" : {
// empty _ao_bidCpmAdjustment,
// empty video,
// empty keywords,
// empty visitor,
// empty inventory,
// empty latLong,
// empty floor,
// empty userId,
// empty position,
"zoneId" : 1434790,
"siteId" : 67502,
"accountId" : 13820
}
},
{
"bidder" : "appnexus",
"params" : {
// empty _ao_bidCpmAdjustment,
// empty generate_ad_pod_id,
// empty externalImpId,
// empty extInvCode,
// empty pubClick,
// empty supplyType,
// empty trafficSourceCode,
// empty position,
// empty reserve,
// empty app,
// empty video,
// empty keywords,
// empty usePaymentRule,
// empty allowSmallerSizes,
// empty user,
// empty frameworks,
// empty publisherId,
// empty invCode,
// empty member,
"placementId" : 22470116
}
},
{
"bidder" : "pubmatic",
"params" : {
// empty _ao_bidCpmAdjustment,
// empty outstreamAU,
// empty deals,
// empty bcat,
// empty acat,
// empty dctr,
// empty currency,
// empty kadfloor,
// empty kadpageurl,
// empty gender,
// empty yob,
// empty lon,
// empty lat,
// empty pmzoneid,
"adSlot" : "4521294",
"publisherId" : "161227"
}
},
{
"bidder" : "ix",
"params" : {
// empty _ao_bidCpmAdjustment,
"siteId" : "736339"
}
},
{
"bidder" : "teads",
"params" : {
// empty _ao_bidCpmAdjustment,
"placementId" : 201925,
"pageId" : 218155
}
}
],
        prebidConfig: {
            bidderTimeout: parseInt('1000', 10) || 500
        },

        refresh: {
            timeout: "30",
            event: "2",
            limit: "",
            onEmitterWin: "1"
        },

        dealsData: "",
        adText: "Hirdet&#233;s",
        adTextClass: "ao_hird"
    };

   if (""!=="" &&  ""!=="" &&  ""!=="")
            config.extraBiddersConfiguration = '[{ "bidder" : "hoppex", "params" : {  "accountId" : "",  "siteId" : "",  "zoneId" : ""} }]';

    if ("1" === "1") {
        config.prebidScriptUrl = 'https://hu.adocean.pl/files/js/prebid/6.27.0/EAAAAAAAAAQAAAAEAAAAAAAAAAAAQAAQFAAIAIAAAAAABAAAAAAAAAgAAAACAAAAkBA.js';
        config.prebidConfig.consentManagement = {
            gdpr: {
                cmpApi: "iab",
                defaultGdprScope: true
            }
        };
    }

    document.write('<div id="' + config.targetID + '"></div>');

    if(typeof window[GLOBAL_QUEUE_NAME] === 'undefined') {
        window[GLOBAL_QUEUE_NAME] = [];
        var script = document.createElement('script');
        script.src = 'https://hu.adocean.pl/files/emitter_global_files/Av9VfV/prebid_gao_lib_hoppex_ad_after_v2_minified.js';
        document.head.appendChild(script);
    }

    window[GLOBAL_QUEUE_NAME].push(config);
}();





if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

}
adoceanhuqnhjlkqqnu.isEmpty=0;
function adoceanhunoopoxjfwt() {
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['Life_desktop_hirek_roadblock_3'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['noopoxjfwt'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhunoopoxjfwt', arg:'', isEmpty:0});}
!function(e){var n;n="gao",typeof window[n]==e&&(window[n]={}),typeof _gao_insdwl!=e&&typeof _gao_insdwl.init!=e||typeof gao.aoInscreenHit!=e||document.write('<script src="https://admwhu.hit.gemius.pl/gdejs/xgde.js"><\/script>'),"function"!=typeof gao.inscreenRegisterElement&&(gao.inscreenRegisterElement=function(n,o){typeof gao.aoInscreenHit!=e&&"string"==typeof o&&typeof gao.aoInscreenHit[o]!=e&&(window._gdeaq=window._gdeaq||[],window._gdeaq.push(["inscreen",gao.aoInscreenHit[o],n]),delete gao.aoInscreenHit[o])}),typeof gao.aoInscreenHit==e&&(gao.aoInscreenHit={}),gao.aoInscreenHit["evynjffqsqwjmnfqjjdiikms"]="https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=wemlhudgaq/sarg=NC;/inner=%7C;"}("undefined");
// Template ver. 2020120801
+function() {
    var GLOBAL_QUEUE_NAME = 'adoPrebidQueue_1_0';

    var config = {
        unique: 'evynjffqsqwjmnfqjjdiikms',
        targetID: 'ao-evynjffqsqwjmnfqjjdiikms',
        creativeID: 'adoceanhunoopoxjfwt',
        usePredictableIDs: 1,

        sendHitFunc: (function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})(),
        emissionHits: [[{type: "commit", url:"https://hu.adocean.pl/commit/nc=1/code=.pZPvMV2VXRMQjBdwwzhC5kowYFGDrx8_zRXqiBjson.p7/eprog=12/inner=ao%5Funiq%3Devynjffqsqwjmnfqdedgicfh%7C%5Fhcpref%3Dhu;/"},"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=mdooqjqmlw/fastid=igbgbljcwnxoamawgvsnzmvsntme/sarg=NC;/inner=%7C;/extra=mwid%3D;"]],
        emissionHitUrl: 'https://hu.adocean.pl/event/nc=1/code=.pZPvMV2VXRMQjBdwwzhC5kowYFGDrx8_zRXqiBjson.p7/eprog=12/inner=ao%5Funiq%3Devynjffqsqwjmnfqdedgicfh%7C%5Fhcpref%3Dhu;/data=https://admwhu.hit.gemius.pl/redot.gif/id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=mdooqjqmlw/fastid=igbgbljcwnxoamawgvsnzmvsntme/sarg=NC;/inner=%7C;/extra=mwid%3D;',
        statsHitUrl: 'https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=wemlhudgaq/sarg=NC;/inner=%7C;',
        secondPhaseFnct: 'adoceanhunoopoxjfwt_second_phase',
        emitterOfferID: 'evynjffqsqwjmnfqqgoojgkh',
        currencyExchangeRates: {"BGN":0.511289098,"BYN":0.298165665,"BYR":4.60309788e-05,"CZK":0.0400929826,"DKK":0.134088241,"EEK":0.0582522037,"EUR":1,"GEL":0.349812424,"HRK":0.143248406,"HUF":0.00257819513,"KZT":0.00205666413,"LTL":0.284103201,"LVL":1.35812102,"NOK":0.0874358443,"PLN":0.230154894,"RON":0.200971254,"RSD":0.00853874658,"RUB":0.0101958618,"TJS":0.0849962024,"TRY":0.0303344151,"UAH":0.0246726047,"USD":0.9273401},
        prebidScriptUrl: 'https://hu.adocean.pl/files/js/prebid/6.27.0/EAAAAAAAAAQAAAAAAAAAAAAAAAAAQAAQFAAIAIAAAAAABAAAAAAAAAgAAAACAAAAkBA.js',

        width: "640",
        height: "360",
        extraSizes: "336x280,300x250",
        schain: "{\"validation\": \"strict\",\"config\": {\"ver\":\"1.0\", \"complete\": 1,\"nodes\": [{  \"sid\":\"13820\",  \"asi\":\"hoppex.hu\",  \"hp\":1 } ] } }",
        modules: [
{
"bidder" : "rubicon",
"params" : {
// empty _ao_bidCpmAdjustment,
// empty video,
// empty keywords,
// empty visitor,
// empty inventory,
// empty latLong,
// empty floor,
// empty userId,
// empty position,
"zoneId" : 1434790,
"siteId" : 67502,
"accountId" : 13820
}
},
{
"bidder" : "appnexus",
"params" : {
// empty _ao_bidCpmAdjustment,
// empty generate_ad_pod_id,
// empty externalImpId,
// empty extInvCode,
// empty pubClick,
// empty supplyType,
// empty trafficSourceCode,
// empty position,
// empty reserve,
// empty app,
// empty video,
// empty keywords,
// empty usePaymentRule,
// empty allowSmallerSizes,
// empty user,
// empty frameworks,
// empty publisherId,
// empty invCode,
// empty member,
"placementId" : 22470116
}
},
{
"bidder" : "pubmatic",
"params" : {
// empty _ao_bidCpmAdjustment,
// empty outstreamAU,
// empty deals,
// empty bcat,
// empty acat,
// empty dctr,
// empty currency,
// empty kadfloor,
// empty kadpageurl,
// empty gender,
// empty yob,
// empty lon,
// empty lat,
// empty pmzoneid,
"adSlot" : "4521294",
"publisherId" : "161227"
}
},
{
"bidder" : "ix",
"params" : {
// empty _ao_bidCpmAdjustment,
"siteId" : "736339"
}
},
{
"bidder" : "teads",
"params" : {
// empty _ao_bidCpmAdjustment,
"placementId" : 201925,
"pageId" : 218155
}
}
],
        prebidConfig: {
            bidderTimeout: parseInt('1000', 10) || 500
        },

        refresh: {
            timeout: "30",
            event: "2",
            limit: "",
            onEmitterWin: "1"
        },

        dealsData: "",
        adText: "Hirdet&#233;s",
        adTextClass: "ao_hird"
    };

   if (""!=="" &&  ""!=="" &&  ""!=="")
            config.extraBiddersConfiguration = '[{ "bidder" : "hoppex", "params" : {  "accountId" : "",  "siteId" : "",  "zoneId" : ""} }]';

    if ("1" === "1") {
        config.prebidScriptUrl = 'https://hu.adocean.pl/files/js/prebid/6.27.0/EAAAAAAAAAQAAAAEAAAAAAAAAAAAQAAQFAAIAIAAAAAABAAAAAAAAAgAAAACAAAAkBA.js';
        config.prebidConfig.consentManagement = {
            gdpr: {
                cmpApi: "iab",
                defaultGdprScope: true
            }
        };
    }

    document.write('<div id="' + config.targetID + '"></div>');

    if(typeof window[GLOBAL_QUEUE_NAME] === 'undefined') {
        window[GLOBAL_QUEUE_NAME] = [];
        var script = document.createElement('script');
        script.src = 'https://hu.adocean.pl/files/emitter_global_files/Av9VfV/prebid_gao_lib_hoppex_ad_after_v2_minified.js';
        document.head.appendChild(script);
    }

    window[GLOBAL_QUEUE_NAME].push(config);
}();





if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

}
adoceanhunoopoxjfwt.isEmpty=0;
function adoceanhusinsglffzu() {
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['Life_desktop_hirek_leaderboard_1'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['sinsglffzu'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhusinsglffzu', arg:'', isEmpty:0});}
!function(e){var n;n="gao",typeof window[n]==e&&(window[n]={}),typeof _gao_insdwl!=e&&typeof _gao_insdwl.init!=e||typeof gao.aoInscreenHit!=e||document.write('<script src="https://admwhu.hit.gemius.pl/gdejs/xgde.js"><\/script>'),"function"!=typeof gao.inscreenRegisterElement&&(gao.inscreenRegisterElement=function(n,o){typeof gao.aoInscreenHit!=e&&"string"==typeof o&&typeof gao.aoInscreenHit[o]!=e&&(window._gdeaq=window._gdeaq||[],window._gdeaq.push(["inscreen",gao.aoInscreenHit[o],n]),delete gao.aoInscreenHit[o])}),typeof gao.aoInscreenHit==e&&(gao.aoInscreenHit={}),gao.aoInscreenHit["evynjffqsqwjmnfqsrqqiomh"]="https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=qgmokqsqxy/sarg=NC;/inner=%7C;"}("undefined");
// Template ver. 2020120801
+function() {
    var GLOBAL_QUEUE_NAME = 'adoPrebidQueue_1_0';

    var config = {
        unique: 'evynjffqsqwjmnfqsrqqiomh',
        targetID: 'ao-evynjffqsqwjmnfqsrqqiomh',
        creativeID: 'adoceanhusinsglffzu',
        usePredictableIDs: 1,

        sendHitFunc: (function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})(),
        emissionHits: [[{type: "commit", url:"https://hu.adocean.pl/commit/nc=1/code=eQFJUlCQitnup8u5Q0DusIt.I2XplfcXp8Sk7tLT9SH.u7/eprog=12/inner=ao%5Funiq%3Devynjffqsqwjmnfqdedgicfh%7C%5Fhcpref%3Dhu;/"},"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=weordwohsi/fastid=hiinlsjffrpfliijunakpvknxjlf/sarg=NC;/inner=%7C;/extra=mwid%3D;"]],
        emissionHitUrl: 'https://hu.adocean.pl/event/nc=1/code=eQFJUlCQitnup8u5Q0DusIt.I2XplfcXp8Sk7tLT9SH.u7/eprog=12/inner=ao%5Funiq%3Devynjffqsqwjmnfqdedgicfh%7C%5Fhcpref%3Dhu;/data=https://admwhu.hit.gemius.pl/redot.gif/id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=weordwohsi/fastid=hiinlsjffrpfliijunakpvknxjlf/sarg=NC;/inner=%7C;/extra=mwid%3D;',
        statsHitUrl: 'https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=qgmokqsqxy/sarg=NC;/inner=%7C;',
        secondPhaseFnct: 'adoceanhusinsglffzu_second_phase',
        emitterOfferID: 'evynjffqsqwjmnfqrkpqvjiu',
        currencyExchangeRates: {"BGN":0.511289098,"BYN":0.298165665,"BYR":4.60309788e-05,"CZK":0.0400929826,"DKK":0.134088241,"EEK":0.0582522037,"EUR":1,"GEL":0.349812424,"HRK":0.143248406,"HUF":0.00257819513,"KZT":0.00205666413,"LTL":0.284103201,"LVL":1.35812102,"NOK":0.0874358443,"PLN":0.230154894,"RON":0.200971254,"RSD":0.00853874658,"RUB":0.0101958618,"TJS":0.0849962024,"TRY":0.0303344151,"UAH":0.0246726047,"USD":0.9273401},
        prebidScriptUrl: 'https://hu.adocean.pl/files/js/prebid/6.27.0/EAAAAAAAAAQAAAAAAAAAAAAAAAAAQAAQFAAIAIAAAAAABAAAAAAAAAgAAAACAAAAkBA.js',

        width: "970",
        height: "250",
        extraSizes: "970x90,970x400,728x90",
        schain: "{\"validation\": \"strict\",\"config\": {\"ver\":\"1.0\", \"complete\": 1,\"nodes\": [{  \"sid\":\"13820\",  \"asi\":\"hoppex.hu\",  \"hp\":1 } ] } }",
        modules: [
{
"bidder" : "rubicon",
"params" : {
// empty _ao_bidCpmAdjustment,
// empty video,
// empty keywords,
// empty visitor,
// empty inventory,
// empty latLong,
// empty floor,
// empty userId,
// empty position,
"zoneId" : 1434780,
"siteId" : 67502,
"accountId" : 13820
}
},
{
"bidder" : "appnexus",
"params" : {
// empty _ao_bidCpmAdjustment,
// empty generate_ad_pod_id,
// empty externalImpId,
// empty extInvCode,
// empty pubClick,
// empty supplyType,
// empty trafficSourceCode,
// empty position,
// empty reserve,
// empty app,
// empty video,
// empty keywords,
// empty usePaymentRule,
// empty allowSmallerSizes,
// empty user,
// empty frameworks,
// empty publisherId,
// empty invCode,
// empty member,
"placementId" : 22470099
}
},
{
"bidder" : "pubmatic",
"params" : {
// empty _ao_bidCpmAdjustment,
// empty outstreamAU,
// empty deals,
// empty bcat,
// empty acat,
// empty dctr,
// empty currency,
// empty kadfloor,
// empty kadpageurl,
// empty gender,
// empty yob,
// empty lon,
// empty lat,
// empty pmzoneid,
"adSlot" : "4521295",
"publisherId" : "161227"
}
},
{
"bidder" : "ix",
"params" : {
// empty _ao_bidCpmAdjustment,
"siteId" : "736339"
}
},
{
"bidder" : "teads",
"params" : {
// empty _ao_bidCpmAdjustment,
"placementId" : 201925,
"pageId" : 218155
}
}
],
        prebidConfig: {
            bidderTimeout: parseInt('1000', 10) || 500
        },

        refresh: {
            timeout: "30",
            event: "2",
            limit: "",
            onEmitterWin: "1"
        },

        dealsData: "",
        adText: "Hirdet&#233;s",
        adTextClass: "ao_hird"
    };

   if ("13808"!=="" &&  "71926"!=="" &&  "774304"!=="")
            config.extraBiddersConfiguration = '[{ "bidder" : "hoppex", "params" : {  "accountId" : "13808",  "siteId" : "71926",  "zoneId" : "774304"} }]';

    if ("1" === "1") {
        config.prebidScriptUrl = 'https://hu.adocean.pl/files/js/prebid/6.27.0/EAAAAAAAAAQAAAAEAAAAAAAAAAAAQAAQFAAIAIAAAAAABAAAAAAAAAgAAAACAAAAkBA.js';
        config.prebidConfig.consentManagement = {
            gdpr: {
                cmpApi: "iab",
                defaultGdprScope: true
            }
        };
    }

    document.write('<div id="' + config.targetID + '"></div>');

    if(typeof window[GLOBAL_QUEUE_NAME] === 'undefined') {
        window[GLOBAL_QUEUE_NAME] = [];
        var script = document.createElement('script');
        script.src = 'https://hu.adocean.pl/files/emitter_global_files/Av9VfV/prebid_gao_lib_hoppex_ad_after_v2_minified.js';
        document.head.appendChild(script);
    }

    window[GLOBAL_QUEUE_NAME].push(config);
}();





if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

}
adoceanhusinsglffzu.isEmpty=0;
function adoceanhuxcmfpoquwr() {
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['Life_desktop_hirek_box_3'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['xcmfpoquwr'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhuxcmfpoquwr', arg:'', isEmpty:0});}
!function(e){var n;n="gao",typeof window[n]==e&&(window[n]={}),typeof _gao_insdwl!=e&&typeof _gao_insdwl.init!=e||typeof gao.aoInscreenHit!=e||document.write('<script src="https://admwhu.hit.gemius.pl/gdejs/xgde.js"><\/script>'),"function"!=typeof gao.inscreenRegisterElement&&(gao.inscreenRegisterElement=function(n,o){typeof gao.aoInscreenHit!=e&&"string"==typeof o&&typeof gao.aoInscreenHit[o]!=e&&(window._gdeaq=window._gdeaq||[],window._gdeaq.push(["inscreen",gao.aoInscreenHit[o],n]),delete gao.aoInscreenHit[o])}),typeof gao.aoInscreenHit==e&&(gao.aoInscreenHit={}),gao.aoInscreenHit["evynjffqsqwjmnfqlkojjcnm"]="https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=qmikbinlua/sarg=NC;/inner=%7C;"}("undefined");
// Template ver. 2020120801
+function() {
    var GLOBAL_QUEUE_NAME = 'adoPrebidQueue_1_0';

    var config = {
        unique: 'evynjffqsqwjmnfqlkojjcnm',
        targetID: 'ao-evynjffqsqwjmnfqlkojjcnm',
        creativeID: 'adoceanhuxcmfpoquwr',
        usePredictableIDs: 1,

        sendHitFunc: (function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})(),
        emissionHits: [[{type: "commit", url:"https://hu.adocean.pl/commit/nc=1/code=qKvv.F1aRbx_lggKHBkHuJj209pGl9clov2yxFXxHxv.37/eprog=12/inner=ao%5Funiq%3Devynjffqsqwjmnfqdedgicfh%7C%5Fhcpref%3Dhu;/"},"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=wkknknjsug/fastid=fpgiddoghbiplkawcndddxnfrcik/sarg=NC;/inner=%7C;/extra=mwid%3D;"]],
        emissionHitUrl: 'https://hu.adocean.pl/event/nc=1/code=qKvv.F1aRbx_lggKHBkHuJj209pGl9clov2yxFXxHxv.37/eprog=12/inner=ao%5Funiq%3Devynjffqsqwjmnfqdedgicfh%7C%5Fhcpref%3Dhu;/data=https://admwhu.hit.gemius.pl/redot.gif/id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=wkknknjsug/fastid=fpgiddoghbiplkawcndddxnfrcik/sarg=NC;/inner=%7C;/extra=mwid%3D;',
        statsHitUrl: 'https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=qmikbinlua/sarg=NC;/inner=%7C;',
        secondPhaseFnct: 'adoceanhuxcmfpoquwr_second_phase',
        emitterOfferID: 'evynjffqsqwjmnfqsoqsrngr',
        currencyExchangeRates: {"BGN":0.511289098,"BYN":0.298165665,"BYR":4.60309788e-05,"CZK":0.0400929826,"DKK":0.134088241,"EEK":0.0582522037,"EUR":1,"GEL":0.349812424,"HRK":0.143248406,"HUF":0.00257819513,"KZT":0.00205666413,"LTL":0.284103201,"LVL":1.35812102,"NOK":0.0874358443,"PLN":0.230154894,"RON":0.200971254,"RSD":0.00853874658,"RUB":0.0101958618,"TJS":0.0849962024,"TRY":0.0303344151,"UAH":0.0246726047,"USD":0.9273401},
        prebidScriptUrl: 'https://hu.adocean.pl/files/js/prebid/6.27.0/EAAAAAAAAAQAAAAAAAAAAAAAAAAAQAAQFAAIAIAAAAAABAAAAAAAAAgAAAACAAAAkBA.js',

        width: "300",
        height: "600",
        extraSizes: "300x250",
        schain: "{\"validation\": \"strict\",\"config\": {\"ver\":\"1.0\", \"complete\": 1,\"nodes\": [{  \"sid\":\"13820\",  \"asi\":\"hoppex.hu\",  \"hp\":1 } ] } }",
        modules: [
{
"bidder" : "rubicon",
"params" : {
// empty _ao_bidCpmAdjustment,
// empty video,
// empty keywords,
// empty visitor,
// empty inventory,
// empty latLong,
// empty floor,
// empty userId,
// empty position,
"zoneId" : 1434788,
"siteId" : 67502,
"accountId" : 13820
}
},
{
"bidder" : "appnexus",
"params" : {
// empty _ao_bidCpmAdjustment,
// empty generate_ad_pod_id,
// empty externalImpId,
// empty extInvCode,
// empty pubClick,
// empty supplyType,
// empty trafficSourceCode,
// empty position,
// empty reserve,
// empty app,
// empty video,
// empty keywords,
// empty usePaymentRule,
// empty allowSmallerSizes,
// empty user,
// empty frameworks,
// empty publisherId,
// empty invCode,
// empty member,
"placementId" : 22470111
}
},
{
"bidder" : "pubmatic",
"params" : {
// empty _ao_bidCpmAdjustment,
// empty outstreamAU,
// empty deals,
// empty bcat,
// empty acat,
// empty dctr,
// empty currency,
// empty kadfloor,
// empty kadpageurl,
// empty gender,
// empty yob,
// empty lon,
// empty lat,
// empty pmzoneid,
"adSlot" : "4521291",
"publisherId" : "161227"
}
},
{
"bidder" : "ix",
"params" : {
// empty _ao_bidCpmAdjustment,
"siteId" : "736339"
}
},
{
"bidder" : "teads",
"params" : {
// empty _ao_bidCpmAdjustment,
"placementId" : 201925,
"pageId" : 218155
}
}
],
        prebidConfig: {
            bidderTimeout: parseInt('1000', 10) || 500
        },

        refresh: {
            timeout: "30",
            event: "2",
            limit: "",
            onEmitterWin: "1"
        },

        dealsData: "",
        adText: "Hirdet&#233;s",
        adTextClass: "ao_hird"
    };

   if (""!=="" &&  ""!=="" &&  ""!=="")
            config.extraBiddersConfiguration = '[{ "bidder" : "hoppex", "params" : {  "accountId" : "",  "siteId" : "",  "zoneId" : ""} }]';

    if ("1" === "1") {
        config.prebidScriptUrl = 'https://hu.adocean.pl/files/js/prebid/6.27.0/EAAAAAAAAAQAAAAEAAAAAAAAAAAAQAAQFAAIAIAAAAAABAAAAAAAAAgAAAACAAAAkBA.js';
        config.prebidConfig.consentManagement = {
            gdpr: {
                cmpApi: "iab",
                defaultGdprScope: true
            }
        };
    }

    document.write('<div id="' + config.targetID + '"></div>');

    if(typeof window[GLOBAL_QUEUE_NAME] === 'undefined') {
        window[GLOBAL_QUEUE_NAME] = [];
        var script = document.createElement('script');
        script.src = 'https://hu.adocean.pl/files/emitter_global_files/Av9VfV/prebid_gao_lib_hoppex_ad_after_v2_minified.js';
        document.head.appendChild(script);
    }

    window[GLOBAL_QUEUE_NAME].push(config);
}();





if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

}
adoceanhuxcmfpoquwr.isEmpty=0;
function adoceanhunboiiumlcb() {
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['Life_desktop_hirek_box_1'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['nboiiumlcb'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhunboiiumlcb', arg:'', isEmpty:0});}
!function(e){var n;n="gao",typeof window[n]==e&&(window[n]={}),typeof _gao_insdwl!=e&&typeof _gao_insdwl.init!=e||typeof gao.aoInscreenHit!=e||document.write('<script src="https://admwhu.hit.gemius.pl/gdejs/xgde.js"><\/script>'),"function"!=typeof gao.inscreenRegisterElement&&(gao.inscreenRegisterElement=function(n,o){typeof gao.aoInscreenHit!=e&&"string"==typeof o&&typeof gao.aoInscreenHit[o]!=e&&(window._gdeaq=window._gdeaq||[],window._gdeaq.push(["inscreen",gao.aoInscreenHit[o],n]),delete gao.aoInscreenHit[o])}),typeof gao.aoInscreenHit==e&&(gao.aoInscreenHit={}),gao.aoInscreenHit["evynjffqsqwjmnfqetlsjgnr"]="https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=nbftkugjyd/sarg=NC;/inner=%7C;"}("undefined");
// Template ver. 2020120801
+function() {
    var GLOBAL_QUEUE_NAME = 'adoPrebidQueue_1_0';

    var config = {
        unique: 'evynjffqsqwjmnfqetlsjgnr',
        targetID: 'ao-evynjffqsqwjmnfqetlsjgnr',
        creativeID: 'adoceanhunboiiumlcb',
        usePredictableIDs: 1,

        sendHitFunc: (function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})(),
        emissionHits: [[{type: "commit", url:"https://hu.adocean.pl/commit/nc=1/code=ePrpkF.ueusOHyrcUQGO.LjDI9AWWfbzrESsSMF29.D.A7/eprog=12/inner=ao%5Funiq%3Devynjffqsqwjmnfqdedgicfh%7C%5Fhcpref%3Dhu;/"},"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=tpggekdquj/fastid=mguhneqatnwrnlbbwkucgktauaky/sarg=NC;/inner=%7C;/extra=mwid%3D;"]],
        emissionHitUrl: 'https://hu.adocean.pl/event/nc=1/code=ePrpkF.ueusOHyrcUQGO.LjDI9AWWfbzrESsSMF29.D.A7/eprog=12/inner=ao%5Funiq%3Devynjffqsqwjmnfqdedgicfh%7C%5Fhcpref%3Dhu;/data=https://admwhu.hit.gemius.pl/redot.gif/id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=tpggekdquj/fastid=mguhneqatnwrnlbbwkucgktauaky/sarg=NC;/inner=%7C;/extra=mwid%3D;',
        statsHitUrl: 'https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=nbftkugjyd/sarg=NC;/inner=%7C;',
        secondPhaseFnct: 'adoceanhunboiiumlcb_second_phase',
        emitterOfferID: 'evynjffqsqwjmnfqqnfrqfgh',
        currencyExchangeRates: {"BGN":0.511289098,"BYN":0.298165665,"BYR":4.60309788e-05,"CZK":0.0400929826,"DKK":0.134088241,"EEK":0.0582522037,"EUR":1,"GEL":0.349812424,"HRK":0.143248406,"HUF":0.00257819513,"KZT":0.00205666413,"LTL":0.284103201,"LVL":1.35812102,"NOK":0.0874358443,"PLN":0.230154894,"RON":0.200971254,"RSD":0.00853874658,"RUB":0.0101958618,"TJS":0.0849962024,"TRY":0.0303344151,"UAH":0.0246726047,"USD":0.9273401},
        prebidScriptUrl: 'https://hu.adocean.pl/files/js/prebid/6.27.0/EAAAAAAAAAQAAAAAAAAAAAAAAAAAQAAQFAAIAIAAAAAABAAAAAAAAAgAAAACAAAAkBA.js',

        width: "300",
        height: "600",
        extraSizes: "300x250",
        schain: "{\"validation\": \"strict\",\"config\": {\"ver\":\"1.0\", \"complete\": 1,\"nodes\": [{  \"sid\":\"13820\",  \"asi\":\"hoppex.hu\",  \"hp\":1 } ] } }",
        modules: [
{
"bidder" : "rubicon",
"params" : {
// empty _ao_bidCpmAdjustment,
// empty video,
// empty keywords,
// empty visitor,
// empty inventory,
// empty latLong,
// empty floor,
// empty userId,
// empty position,
"zoneId" : 1434782,
"siteId" : 67502,
"accountId" : 13820
}
},
{
"bidder" : "appnexus",
"params" : {
// empty _ao_bidCpmAdjustment,
// empty generate_ad_pod_id,
// empty externalImpId,
// empty extInvCode,
// empty pubClick,
// empty supplyType,
// empty trafficSourceCode,
// empty position,
// empty reserve,
// empty app,
// empty video,
// empty keywords,
// empty usePaymentRule,
// empty allowSmallerSizes,
// empty user,
// empty frameworks,
// empty publisherId,
// empty invCode,
// empty member,
"placementId" : 22470100
}
},
{
"bidder" : "pubmatic",
"params" : {
// empty _ao_bidCpmAdjustment,
// empty outstreamAU,
// empty deals,
// empty bcat,
// empty acat,
// empty dctr,
// empty currency,
// empty kadfloor,
// empty kadpageurl,
// empty gender,
// empty yob,
// empty lon,
// empty lat,
// empty pmzoneid,
"adSlot" : "4521291",
"publisherId" : "161227"
}
},
{
"bidder" : "ix",
"params" : {
// empty _ao_bidCpmAdjustment,
"siteId" : "736339"
}
},
{
"bidder" : "teads",
"params" : {
// empty _ao_bidCpmAdjustment,
"placementId" : 201925,
"pageId" : 218155
}
}
],
        prebidConfig: {
            bidderTimeout: parseInt('1000', 10) || 500
        },

        refresh: {
            timeout: "30",
            event: "2",
            limit: "",
            onEmitterWin: "1"
        },

        dealsData: "",
        adText: "Hirdet&#233;s",
        adTextClass: "ao_hird"
    };

   if ("13808"!=="" &&  "71926"!=="" &&  "774312"!=="")
            config.extraBiddersConfiguration = '[{ "bidder" : "hoppex", "params" : {  "accountId" : "13808",  "siteId" : "71926",  "zoneId" : "774312"} }]';

    if ("1" === "1") {
        config.prebidScriptUrl = 'https://hu.adocean.pl/files/js/prebid/6.27.0/EAAAAAAAAAQAAAAEAAAAAAAAAAAAQAAQFAAIAIAAAAAABAAAAAAAAAgAAAACAAAAkBA.js';
        config.prebidConfig.consentManagement = {
            gdpr: {
                cmpApi: "iab",
                defaultGdprScope: true
            }
        };
    }

    document.write('<div id="' + config.targetID + '"></div>');

    if(typeof window[GLOBAL_QUEUE_NAME] === 'undefined') {
        window[GLOBAL_QUEUE_NAME] = [];
        var script = document.createElement('script');
        script.src = 'https://hu.adocean.pl/files/emitter_global_files/Av9VfV/prebid_gao_lib_hoppex_ad_after_v2_minified.js';
        document.head.appendChild(script);
    }

    window[GLOBAL_QUEUE_NAME].push(config);
}();





if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

}
adoceanhunboiiumlcb.isEmpty=0;
function adoceanhukcfplrgqxw() {
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['Life_desktop_hirek_box_2'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['kcfplrgqxw'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhukcfplrgqxw', arg:'', isEmpty:0});}
!function(e){var n;n="gao",typeof window[n]==e&&(window[n]={}),typeof _gao_insdwl!=e&&typeof _gao_insdwl.init!=e||typeof gao.aoInscreenHit!=e||document.write('<script src="https://admwhu.hit.gemius.pl/gdejs/xgde.js"><\/script>'),"function"!=typeof gao.inscreenRegisterElement&&(gao.inscreenRegisterElement=function(n,o){typeof gao.aoInscreenHit!=e&&"string"==typeof o&&typeof gao.aoInscreenHit[o]!=e&&(window._gdeaq=window._gdeaq||[],window._gdeaq.push(["inscreen",gao.aoInscreenHit[o],n]),delete gao.aoInscreenHit[o])}),typeof gao.aoInscreenHit==e&&(gao.aoInscreenHit={}),gao.aoInscreenHit["evynjffqsqwjmnfqnljlkknw"]="https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=veonmrshvp/sarg=NC;/inner=%7C;"}("undefined");
// Template ver. 2020120801
+function() {
    var GLOBAL_QUEUE_NAME = 'adoPrebidQueue_1_0';

    var config = {
        unique: 'evynjffqsqwjmnfqnljlkknw',
        targetID: 'ao-evynjffqsqwjmnfqnljlkknw',
        creativeID: 'adoceanhukcfplrgqxw',
        usePredictableIDs: 1,

        sendHitFunc: (function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})(),
        emissionHits: [[{type: "commit", url:"https://hu.adocean.pl/commit/nc=1/code=eaDvzlAgRSMOqezxCcv95rk1EYMW8dyBjCBpAec6RU..B7/eprog=12/inner=ao%5Funiq%3Devynjffqsqwjmnfqdedgicfh%7C%5Fhcpref%3Dhu;/"},"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=ldqqfxoorv/fastid=isnyhimalddjifgtszblyabnqrku/sarg=NC;/inner=%7C;/extra=mwid%3D;"]],
        emissionHitUrl: 'https://hu.adocean.pl/event/nc=1/code=eaDvzlAgRSMOqezxCcv95rk1EYMW8dyBjCBpAec6RU..B7/eprog=12/inner=ao%5Funiq%3Devynjffqsqwjmnfqdedgicfh%7C%5Fhcpref%3Dhu;/data=https://admwhu.hit.gemius.pl/redot.gif/id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=ldqqfxoorv/fastid=isnyhimalddjifgtszblyabnqrku/sarg=NC;/inner=%7C;/extra=mwid%3D;',
        statsHitUrl: 'https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zDhL_vBIU.CRf0bwcDZuZaPMTDNGkOyj8IqMOlt5ltn.87/nc=1/stparam=veonmrshvp/sarg=NC;/inner=%7C;',
        secondPhaseFnct: 'adoceanhukcfplrgqxw_second_phase',
        emitterOfferID: 'evynjffqsqwjmnfqjgdkrjgm',
        currencyExchangeRates: {"BGN":0.511289098,"BYN":0.298165665,"BYR":4.60309788e-05,"CZK":0.0400929826,"DKK":0.134088241,"EEK":0.0582522037,"EUR":1,"GEL":0.349812424,"HRK":0.143248406,"HUF":0.00257819513,"KZT":0.00205666413,"LTL":0.284103201,"LVL":1.35812102,"NOK":0.0874358443,"PLN":0.230154894,"RON":0.200971254,"RSD":0.00853874658,"RUB":0.0101958618,"TJS":0.0849962024,"TRY":0.0303344151,"UAH":0.0246726047,"USD":0.9273401},
        prebidScriptUrl: 'https://hu.adocean.pl/files/js/prebid/6.27.0/EAAAAAAAAAQAAAAAAAAAAAAAAAAAQAAQFAAIAIAAAAAABAAAAAAAAAgAAAACAAAAkBA.js',

        width: "300",
        height: "600",
        extraSizes: "300x250",
        schain: "{\"validation\": \"strict\",\"config\": {\"ver\":\"1.0\", \"complete\": 1,\"nodes\": [{  \"sid\":\"13820\",  \"asi\":\"hoppex.hu\",  \"hp\":1 } ] } }",
        modules: [
{
"bidder" : "rubicon",
"params" : {
// empty _ao_bidCpmAdjustment,
// empty video,
// empty keywords,
// empty visitor,
// empty inventory,
// empty latLong,
// empty floor,
// empty userId,
// empty position,
"zoneId" : 1434786,
"siteId" : 67502,
"accountId" : 13820
}
},
{
"bidder" : "appnexus",
"params" : {
// empty _ao_bidCpmAdjustment,
// empty generate_ad_pod_id,
// empty externalImpId,
// empty extInvCode,
// empty pubClick,
// empty supplyType,
// empty trafficSourceCode,
// empty position,
// empty reserve,
// empty app,
// empty video,
// empty keywords,
// empty usePaymentRule,
// empty allowSmallerSizes,
// empty user,
// empty frameworks,
// empty publisherId,
// empty invCode,
// empty member,
"placementId" : 22470102
}
},
{
"bidder" : "pubmatic",
"params" : {
// empty _ao_bidCpmAdjustment,
// empty outstreamAU,
// empty deals,
// empty bcat,
// empty acat,
// empty dctr,
// empty currency,
// empty kadfloor,
// empty kadpageurl,
// empty gender,
// empty yob,
// empty lon,
// empty lat,
// empty pmzoneid,
"adSlot" : "4521291",
"publisherId" : "161227"
}
},
{
"bidder" : "ix",
"params" : {
// empty _ao_bidCpmAdjustment,
"siteId" : "736339"
}
},
{
"bidder" : "teads",
"params" : {
// empty _ao_bidCpmAdjustment,
"placementId" : 201925,
"pageId" : 218155
}
}
],
        prebidConfig: {
            bidderTimeout: parseInt('1000', 10) || 500
        },

        refresh: {
            timeout: "30",
            event: "2",
            limit: "",
            onEmitterWin: "1"
        },

        dealsData: "",
        adText: "Hirdet&#233;s",
        adTextClass: "ao_hird"
    };

   if ("13808"!=="" &&  "71926"!=="" &&  "774316"!=="")
            config.extraBiddersConfiguration = '[{ "bidder" : "hoppex", "params" : {  "accountId" : "13808",  "siteId" : "71926",  "zoneId" : "774316"} }]';

    if ("1" === "1") {
        config.prebidScriptUrl = 'https://hu.adocean.pl/files/js/prebid/6.27.0/EAAAAAAAAAQAAAAEAAAAAAAAAAAAQAAQFAAIAIAAAAAABAAAAAAAAAgAAAACAAAAkBA.js';
        config.prebidConfig.consentManagement = {
            gdpr: {
                cmpApi: "iab",
                defaultGdprScope: true
            }
        };
    }

    document.write('<div id="' + config.targetID + '"></div>');

    if(typeof window[GLOBAL_QUEUE_NAME] === 'undefined') {
        window[GLOBAL_QUEUE_NAME] = [];
        var script = document.createElement('script');
        script.src = 'https://hu.adocean.pl/files/emitter_global_files/Av9VfV/prebid_gao_lib_hoppex_ad_after_v2_minified.js';
        document.head.appendChild(script);
    }

    window[GLOBAL_QUEUE_NAME].push(config);
}();





if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

}
adoceanhukcfplrgqxw.isEmpty=0;
function adoceanhuqkdeivllzo() {
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['Life_desktop_hirek_desktopinterrupter_2'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['qkdeivllzo'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhuqkdeivllzo', arg:'', isEmpty:0});}
!function(e){var n;n="gao",typeof window[n]==e&&(window[n]={}),typeof _gao_insdwl!=e&&typeof _gao_insdwl.init!=e||typeof gao.aoInscreenHit!=e||document.write('<script src="https://admwhu.hit.gemius.pl/gdejs/xgde.js"><\/script>'),"function"!=typeof gao.inscreenRegisterElement&&(gao.inscreenRegisterElement=function(n,o){typeof gao.aoInscreenHit!=e&&"string"==typeof o&&typeof gao.aoInscreenHit[o]!=e&&(window._gdeaq=window._gdeaq||[],window._gdeaq.push(["inscreen",gao.aoInscreenHit[o],n]),delete gao.aoInscreenHit[o])}),typeof gao.aoInscreenHit==e&&(gao.aoInscreenHit={}),gao.aoInscreenHit["evynjffqsqwjmnfqgehukonl"]="https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=lfqekodrvz/sarg=NC;/inner=%7C;"}("undefined");
+function() {
    var clientCode = "<script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8559195417632426\"\r\n     crossorigin=\"anonymous\"><\/script>\r\n<!-- Mediaworks - 640x360 - Desktop interrupter 2 -->\r\n<ins class=\"adsbygoogle\"\r\n     style=\"display:inline-block;width:640px;height:360px\"\r\n     data-ad-client=\"ca-pub-8559195417632426\"\r\n     data-ad-slot=\"7380433007\"><\/ins>\r\n<script>\r\n     (adsbygoogle = window.adsbygoogle || []).push({});\r\n<\/script>";
    var unique = 'evynjffqsqwjmnfqgehukonl';
    var targetID = unique + '-ins-target';
    var output = '';
    var gao = window.gao;

    if (typeof gao === "object" && gao && gao.aoInscreenHit && gao.aoInscreenHit[unique]) {
        output = '<div id="' + targetID + '">' + clientCode + '</div>'+
            '<script>'+
            'if (typeof gao === "object" && typeof gao.inscreenRegisterElement === "function") {'+
            '    gao.inscreenRegisterElement("' + targetID + '", "' + unique + '");'+
            '}'+
            '<\/script>';
    } else {
        output = clientCode;
    }

    document.write(output);
}();

document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=rdciduphqj/fastid=muvldtxeplpxaweyirrzjozanroi/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

}
adoceanhuqkdeivllzo.isEmpty=0;
function adoceanhunlkklsfqjj() {
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['Life_desktop_hirek_desktopinterrupter_3'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['nlkklsfqjj'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhunlkklsfqjj', arg:'', isEmpty:0});}
!function(e){var n;n="gao",typeof window[n]==e&&(window[n]={}),typeof _gao_insdwl!=e&&typeof _gao_insdwl.init!=e||typeof gao.aoInscreenHit!=e||document.write('<script src="https://admwhu.hit.gemius.pl/gdejs/xgde.js"><\/script>'),"function"!=typeof gao.inscreenRegisterElement&&(gao.inscreenRegisterElement=function(n,o){typeof gao.aoInscreenHit!=e&&"string"==typeof o&&typeof gao.aoInscreenHit[o]!=e&&(window._gdeaq=window._gdeaq||[],window._gdeaq.push(["inscreen",gao.aoInscreenHit[o],n]),delete gao.aoInscreenHit[o])}),typeof gao.aoInscreenHit==e&&(gao.aoInscreenHit={}),gao.aoInscreenHit["evynjffqsqwjmnfqpmenlcoq"]="https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=lkheenkjjt/sarg=NC;/inner=%7C;"}("undefined");
+function() {
    var clientCode = "<script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8559195417632426\"\r\n     crossorigin=\"anonymous\"><\/script>\r\n<!-- Mediaworks - 640x360 - Desktop interrupter 3 -->\r\n<ins class=\"adsbygoogle\"\r\n     style=\"display:inline-block;width:640px;height:360px\"\r\n     data-ad-client=\"ca-pub-8559195417632426\"\r\n     data-ad-slot=\"3007742025\"><\/ins>\r\n<script>\r\n     (adsbygoogle = window.adsbygoogle || []).push({});\r\n<\/script>";
    var unique = 'evynjffqsqwjmnfqpmenlcoq';
    var targetID = unique + '-ins-target';
    var output = '';
    var gao = window.gao;

    if (typeof gao === "object" && gao && gao.aoInscreenHit && gao.aoInscreenHit[unique]) {
        output = '<div id="' + targetID + '">' + clientCode + '</div>'+
            '<script>'+
            'if (typeof gao === "object" && typeof gao.inscreenRegisterElement === "function") {'+
            '    gao.inscreenRegisterElement("' + targetID + '", "' + unique + '");'+
            '}'+
            '<\/script>';
    } else {
        output = clientCode;
    }

    document.write(output);
}();

document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=rijhnsgqjz/fastid=fyqntjyawjfpzviywmitzbvkzopg/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

}
adoceanhunlkklsfqjj.isEmpty=0;
function adoceanhuxmihcnjjyd() {
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['Life_desktop_hirek_desktopinterrupter_5'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['xmihcnjjyd'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhuxmihcnjjyd', arg:'', isEmpty:0});}
!function(e){var n;n="gao",typeof window[n]==e&&(window[n]={}),typeof _gao_insdwl!=e&&typeof _gao_insdwl.init!=e||typeof gao.aoInscreenHit!=e||document.write('<script src="https://admwhu.hit.gemius.pl/gdejs/xgde.js"><\/script>'),"function"!=typeof gao.inscreenRegisterElement&&(gao.inscreenRegisterElement=function(n,o){typeof gao.aoInscreenHit!=e&&"string"==typeof o&&typeof gao.aoInscreenHit[o]!=e&&(window._gdeaq=window._gdeaq||[],window._gdeaq.push(["inscreen",gao.aoInscreenHit[o],n]),delete gao.aoInscreenHit[o])}),typeof gao.aoInscreenHit==e&&(gao.aoInscreenHit={}),gao.aoInscreenHit["evynjffqsqwjmnfqifsvlgov"]="https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=legthkikqd/sarg=NC;/inner=%7C;"}("undefined");
+function() {
    var clientCode = "<script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8559195417632426\"\r\n     crossorigin=\"anonymous\"><\/script>\r\n<!-- Mediaworks - 640x360 - Desktop interrupter 5 -->\r\n<ins class=\"adsbygoogle\"\r\n     style=\"display:inline-block;width:640px;height:360px\"\r\n     data-ad-client=\"ca-pub-8559195417632426\"\r\n     data-ad-slot=\"5797556891\"><\/ins>\r\n<script>\r\n     (adsbygoogle = window.adsbygoogle || []).push({});\r\n<\/script>";
    var unique = 'evynjffqsqwjmnfqifsvlgov';
    var targetID = unique + '-ins-target';
    var output = '';
    var gao = window.gao;

    if (typeof gao === "object" && gao && gao.aoInscreenHit && gao.aoInscreenHit[unique]) {
        output = '<div id="' + targetID + '">' + clientCode + '</div>'+
            '<script>'+
            'if (typeof gao === "object" && typeof gao.inscreenRegisterElement === "function") {'+
            '    gao.inscreenRegisterElement("' + targetID + '", "' + unique + '");'+
            '}'+
            '<\/script>';
    } else {
        output = clientCode;
    }

    document.write(output);
}();

document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=rcigbqermj/fastid=eqjuzulfzvuxjhbvkaovebofximz/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

}
adoceanhuxmihcnjjyd.isEmpty=0;
function adoceanhutjmneisget() {
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['Life_desktop_hirek_desktopinterrupter_1'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['tjmneisget'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhutjmneisget', arg:'', isEmpty:0});}
!function(e){var n;n="gao",typeof window[n]==e&&(window[n]={}),typeof _gao_insdwl!=e&&typeof _gao_insdwl.init!=e||typeof gao.aoInscreenHit!=e||document.write('<script src="https://admwhu.hit.gemius.pl/gdejs/xgde.js"><\/script>'),"function"!=typeof gao.inscreenRegisterElement&&(gao.inscreenRegisterElement=function(n,o){typeof gao.aoInscreenHit!=e&&"string"==typeof o&&typeof gao.aoInscreenHit[o]!=e&&(window._gdeaq=window._gdeaq||[],window._gdeaq.push(["inscreen",gao.aoInscreenHit[o],n]),delete gao.aoInscreenHit[o])}),typeof gao.aoInscreenHit==e&&(gao.aoInscreenHit={}),gao.aoInscreenHit["evynjffqsqwjmnfqrnpomkok"]="https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=vpegqidqel/sarg=NC;/inner=%7C;"}("undefined");
+function() {
    var clientCode = "<script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8559195417632426\"\r\n     crossorigin=\"anonymous\"><\/script>\r\n<!-- Mediaworks - 640x360 - Desktop interrupter 1 -->\r\n<ins class=\"adsbygoogle\"\r\n     style=\"display:inline-block;width:640px;height:360px\"\r\n     data-ad-client=\"ca-pub-8559195417632426\"\r\n     data-ad-slot=\"3932126673\"><\/ins>\r\n<script>\r\n     (adsbygoogle = window.adsbygoogle || []).push({});\r\n<\/script>";
    var unique = 'evynjffqsqwjmnfqrnpomkok';
    var targetID = unique + '-ins-target';
    var output = '';
    var gao = window.gao;

    if (typeof gao === "object" && gao && gao.aoInscreenHit && gao.aoInscreenHit[unique]) {
        output = '<div id="' + targetID + '">' + clientCode + '</div>'+
            '<script>'+
            'if (typeof gao === "object" && typeof gao.inscreenRegisterElement === "function") {'+
            '    gao.inscreenRegisterElement("' + targetID + '", "' + unique + '");'+
            '}'+
            '<\/script>';
    } else {
        output = clientCode;
    }

    document.write(output);
}();

document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=logjjopgzv/fastid=fbqaalugvqfyppkuqwrwgkozrfnb/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

}
adoceanhutjmneisget.isEmpty=0;
function adoceanhuwljmeqmhie() {
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['Life_desktop_hirek_layer'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['wljmeqmhie'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhuwljmeqmhie', arg:'', isEmpty:0});}
!function(e){var n;n="gao",typeof window[n]==e&&(window[n]={}),typeof _gao_insdwl!=e&&typeof _gao_insdwl.init!=e||typeof gao.aoInscreenHit!=e||document.write('<script src="https://admwhu.hit.gemius.pl/gdejs/xgde.js"><\/script>'),"function"!=typeof gao.inscreenRegisterElement&&(gao.inscreenRegisterElement=function(n,o){typeof gao.aoInscreenHit!=e&&"string"==typeof o&&typeof gao.aoInscreenHit[o]!=e&&(window._gdeaq=window._gdeaq||[],window._gdeaq.push(["inscreen",gao.aoInscreenHit[o],n]),delete gao.aoInscreenHit[o])}),typeof gao.aoInscreenHit==e&&(gao.aoInscreenHit={}),gao.aoInscreenHit["evynjffqsqwjmnfqkgnhnoop"]="https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=0tJLmS9G0FQThqd8d8FmW5a1.uzpHMb5C9k.VVNl6Jn.07/nc=1/stparam=rlflbsjfsb/sarg=NC;/inner=%7C;"}("undefined");
+function() {
    var clientCode = "<script type=\"text/javascript\" src=\"https://ads.vidoomy.com/freemail.hu_20786.js\" async=\"async\"><\/script>";
    var unique = 'evynjffqsqwjmnfqkgnhnoop';
    var targetID = unique + '-ins-target';
    var output = '';
    var gao = window.gao;

    if (typeof gao === "object" && gao && gao.aoInscreenHit && gao.aoInscreenHit[unique]) {
        output = '<div id="' + targetID + '">' + clientCode + '</div>'+
            '<script>'+
            'if (typeof gao === "object" && typeof gao.inscreenRegisterElement === "function") {'+
            '    gao.inscreenRegisterElement("' + targetID + '", "' + unique + '");'+
            '}'+
            '<\/script>';
    } else {
        output = clientCode;
    }

    document.write(output);
}();

document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=0tJLmS9G0FQThqd8d8FmW5a1.uzpHMb5C9k.VVNl6Jn.07/nc=1/stparam=xjhokxfmsh/fastid=crfdfqcfjwycdjadzombvslqcykl/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

}
adoceanhuwljmeqmhie.isEmpty=0;
function adoceanhukmrqoppuie() {
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['Life_desktop_hirek_desktopinterrupter_4'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['kmrqoppuie'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhukmrqoppuie', arg:'', isEmpty:0});}
!function(e){var n;n="gao",typeof window[n]==e&&(window[n]={}),typeof _gao_insdwl!=e&&typeof _gao_insdwl.init!=e||typeof gao.aoInscreenHit!=e||document.write('<script src="https://admwhu.hit.gemius.pl/gdejs/xgde.js"><\/script>'),"function"!=typeof gao.inscreenRegisterElement&&(gao.inscreenRegisterElement=function(n,o){typeof gao.aoInscreenHit!=e&&"string"==typeof o&&typeof gao.aoInscreenHit[o]!=e&&(window._gdeaq=window._gdeaq||[],window._gdeaq.push(["inscreen",gao.aoInscreenHit[o],n]),delete gao.aoInscreenHit[o])}),typeof gao.aoInscreenHit==e&&(gao.aoInscreenHit={}),gao.aoInscreenHit["evynjffqsqwjmnfqdpkqncpu"]="https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=lpotnlrrgj/sarg=NC;/inner=%7C;"}("undefined");
+function() {
    var clientCode = "<script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8559195417632426\"\r\n     crossorigin=\"anonymous\"><\/script>\r\n<!-- Mediaworks - 336x280 - Mobil interrupter 4 -->\r\n<ins class=\"adsbygoogle\"\r\n     style=\"display:inline-block;width:336px;height:280px\"\r\n     data-ad-client=\"ca-pub-8559195417632426\"\r\n     data-ad-slot=\"2373317200\"><\/ins>\r\n<script>\r\n     (adsbygoogle = window.adsbygoogle || []).push({});\r\n<\/script>";
    var unique = 'evynjffqsqwjmnfqdpkqncpu';
    var targetID = unique + '-ins-target';
    var output = '';
    var gao = window.gao;

    if (typeof gao === "object" && gao && gao.aoInscreenHit && gao.aoInscreenHit[unique]) {
        output = '<div id="' + targetID + '">' + clientCode + '</div>'+
            '<script>'+
            'if (typeof gao === "object" && typeof gao.inscreenRegisterElement === "function") {'+
            '    gao.inscreenRegisterElement("' + targetID + '", "' + unique + '");'+
            '}'+
            '<\/script>';
    } else {
        output = clientCode;
    }

    document.write(output);
}();

document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=rnqghrnimt/fastid=bwvxwwydfsowalhffaeysorvllnh/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

}
adoceanhukmrqoppuie.isEmpty=0;
function adoceanhuncnpomnnkh() {
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhuncnpomnnkh', arg:'', isEmpty:1});}
document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zIuQAf.ZNw1cIBlRFQ_aicPaj_4WpQLUowPwSlNzyi..j7/nc=1/stparam=zocgjmllfp/fastid=ajlztxhjtuxglsdnndukroarznnk/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }


}
adoceanhuncnpomnnkh.isEmpty=1;
function adoceanhuuddmcmkjmq() {
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhuuddmcmkjmq', arg:'', isEmpty:1});}
document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zIuQAf.ZNw1cIBlRFQ_aicPaj_4WpQLUowPwSlNzyi..j7/nc=1/stparam=zopicigibl/fastid=ajlztxhjtuxglsdnndukroarznnk/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }


}
adoceanhuuddmcmkjmq.isEmpty=1;
function adoceanhupjejkipjup() {
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhupjejkipjup', arg:'', isEmpty:1});}
document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zIuQAf.ZNw1cIBlRFQ_aicPaj_4WpQLUowPwSlNzyi..j7/nc=1/stparam=qlgkjwnjlg/fastid=ajlztxhjtuxglsdnndukroarznnk/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }


}
adoceanhupjejkipjup.isEmpty=1;
function adoceanhurfjjmreqer() {
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhurfjjmreqer', arg:'', isEmpty:1});}
document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zIuQAf.ZNw1cIBlRFQ_aicPaj_4WpQLUowPwSlNzyi..j7/nc=1/stparam=nppgnuphtr/fastid=ajlztxhjtuxglsdnndukroarznnk/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }


}
adoceanhurfjjmreqer.isEmpty=1;
function adoceanhuxdlmfxqgob() {
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhuxdlmfxqgob', arg:'', isEmpty:1});}
document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zIuQAf.ZNw1cIBlRFQ_aicPaj_4WpQLUowPwSlNzyi..j7/nc=1/stparam=lhjglqnjxd/fastid=ajlztxhjtuxglsdnndukroarznnk/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }


}
adoceanhuxdlmfxqgob.isEmpty=1;
function adoceanhuxpmmfsnobj() {
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhuxpmmfsnobj', arg:'', isEmpty:1});}
document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zIuQAf.ZNw1cIBlRFQ_aicPaj_4WpQLUowPwSlNzyi..j7/nc=1/stparam=ylqlbxgszg/fastid=ajlztxhjtuxglsdnndukroarznnk/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }


}
adoceanhuxpmmfsnobj.isEmpty=1;
function adoceanhuxjitclsglb() {
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhuxjitclsglb', arg:'', isEmpty:1});}
document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zIuQAf.ZNw1cIBlRFQ_aicPaj_4WpQLUowPwSlNzyi..j7/nc=1/stparam=tgdfhqgnql/fastid=ajlztxhjtuxglsdnndukroarznnk/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }


}
adoceanhuxjitclsglb.isEmpty=1;
function adoceanhumklpnviotk() {
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhumklpnviotk', arg:'', isEmpty:1});}
document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zIuQAf.ZNw1cIBlRFQ_aicPaj_4WpQLUowPwSlNzyi..j7/nc=1/stparam=rpjkkipqpl/fastid=ajlztxhjtuxglsdnndukroarznnk/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }


}
adoceanhumklpnviotk.isEmpty=1;
function adoceanhuuaetiphthe() {
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhuuaetiphthe', arg:'', isEmpty:1});}
document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zIuQAf.ZNw1cIBlRFQ_aicPaj_4WpQLUowPwSlNzyi..j7/nc=1/stparam=zpdmcjijyp/fastid=ajlztxhjtuxglsdnndukroarznnk/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }


}
adoceanhuuaetiphthe.isEmpty=1;
function adoceanhuygpfqqrlza() {
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhuygpfqqrlza', arg:'', isEmpty:1});}
document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zIuQAf.ZNw1cIBlRFQ_aicPaj_4WpQLUowPwSlNzyi..j7/nc=1/stparam=npmjgqkuqj/fastid=ajlztxhjtuxglsdnndukroarznnk/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }


}
adoceanhuygpfqqrlza.isEmpty=1;
function adoceanhuvhgmdolqfv() {
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhuvhgmdolqfv', arg:'', isEmpty:1});}
document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zIuQAf.ZNw1cIBlRFQ_aicPaj_4WpQLUowPwSlNzyi..j7/nc=1/stparam=odqjhslles/fastid=ajlztxhjtuxglsdnndukroarznnk/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }


}
adoceanhuvhgmdolqfv.isEmpty=1;
function adoceanhuzkcgbtssof() {
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhuzkcgbtssof', arg:'', isEmpty:1});}
document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zIuQAf.ZNw1cIBlRFQ_aicPaj_4WpQLUowPwSlNzyi..j7/nc=1/stparam=sdnklkqhdu/fastid=ajlztxhjtuxglsdnndukroarznnk/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }


}
adoceanhuzkcgbtssof.isEmpty=1;
function adoceanhuofrijwnsvg() {
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhuofrijwnsvg', arg:'', isEmpty:1});}
document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zIuQAf.ZNw1cIBlRFQ_aicPaj_4WpQLUowPwSlNzyi..j7/nc=1/stparam=lhgjemigez/fastid=ajlztxhjtuxglsdnndukroarznnk/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }


}
adoceanhuofrijwnsvg.isEmpty=1;
function adoceanhuuectiukljw() {
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhuuectiukljw', arg:'', isEmpty:1});}
document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zIuQAf.ZNw1cIBlRFQ_aicPaj_4WpQLUowPwSlNzyi..j7/nc=1/stparam=mlmgmsoqqi/fastid=ajlztxhjtuxglsdnndukroarznnk/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }


}
adoceanhuuectiukljw.isEmpty=1;
function adoceanhulgipmthhaf() {
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhulgipmthhaf', arg:'', isEmpty:1});}
document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zIuQAf.ZNw1cIBlRFQ_aicPaj_4WpQLUowPwSlNzyi..j7/nc=1/stparam=mljjfojnxe/fastid=ajlztxhjtuxglsdnndukroarznnk/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }


}
adoceanhulgipmthhaf.isEmpty=1;
function adoceanhureksfjeowl() {
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhureksfjeowl', arg:'', isEmpty:1});}
document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zIuQAf.ZNw1cIBlRFQ_aicPaj_4WpQLUowPwSlNzyi..j7/nc=1/stparam=kddjdkhpbq/fastid=ajlztxhjtuxglsdnndukroarznnk/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }


}
adoceanhureksfjeowl.isEmpty=1;
function adoceanhukdegckhsbc() {
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhukdegckhsbc', arg:'', isEmpty:1});}
document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zIuQAf.ZNw1cIBlRFQ_aicPaj_4WpQLUowPwSlNzyi..j7/nc=1/stparam=kdggkomsuu/fastid=ajlztxhjtuxglsdnndukroarznnk/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }


}
adoceanhukdegckhsbc.isEmpty=1;
function adoceanhunboiiumlcb_second_phase() {

if (typeof AdOceanRTBAuctionAdServerBids==="undefined") AdOceanRTBAuctionAdServerBids={};
(function(){
var passbackCustomData={ecpm:'0', isDefault: 0};
var passbackFunction=function(){
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['Life_desktop_hirek_box_1'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['nboiiumlcb'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhunboiiumlcb', arg:'', isEmpty:0});}
!function(e){var n;n="gao",typeof window[n]==e&&(window[n]={}),typeof _gao_insdwl!=e&&typeof _gao_insdwl.init!=e||typeof gao.aoInscreenHit!=e||document.write('<script src="https://admwhu.hit.gemius.pl/gdejs/xgde.js"><\/script>'),"function"!=typeof gao.inscreenRegisterElement&&(gao.inscreenRegisterElement=function(n,o){typeof gao.aoInscreenHit!=e&&"string"==typeof o&&typeof gao.aoInscreenHit[o]!=e&&(window._gdeaq=window._gdeaq||[],window._gdeaq.push(["inscreen",gao.aoInscreenHit[o],n]),delete gao.aoInscreenHit[o])}),typeof gao.aoInscreenHit==e&&(gao.aoInscreenHit={}),gao.aoInscreenHit["evynjffqsqwjmnfqfjopxkto"]="https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=yphkmqehko/sarg=NC;/inner=%7C;"}("undefined");
(function() {
    var gao = window.gao || (window.gao = {});
    if (typeof gao.billboardv2 !== "object") gao.billboardv2 = [];

    var config = {
        unique: "evynjffqsqwjmnfqfjopxkto",
        targetID: "bbb.creativeevynjffqsqwjmnfqfjopxkto",

        width: "300",
        height: "600",
        align: "1",
        responsive: 0,
        html5: "",
        clickTagOverlay: 0,
        htmlFiFCode: "<!-- /192959950/mediaworks_300x600_desktop_box_1 -->\r\n<div id=\'div-gpt-ad-1670965873619-0\'>\r\n<\/div>\r\n<script>\r\n if (typeof googletag == \'undefined\') {\r\n	var s = document.createElement(\'script\');\r\n	s.type=\"text/javascript\";\r\n	s.charset=\"utf-8\";\r\n	s.src=\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\";\r\n	document.getElementsByTagName(\'body\')[0].appendChild(s);\r\n}\r\n  window.googletag = window.googletag || {cmd: []};\r\n  googletag.cmd.push(function() {googletag.defineSlot(\'/192959950/mediaworks_300x600_desktop_box_1\', [300, 600], \'div-gpt-ad-1670965873619-0\').addService(googletag.pubads());\r\n\r\n googletag.pubads().enableSingleRequest();\r\n    googletag.pubads().collapseEmptyDivs();\r\n    googletag.enableServices();\r\n	var targetSlot = \"div-gpt-ad-1670965873619-0\";\r\n	googletag.pubads().addEventListener(\'slotRenderEnded\', function(event) {\r\n	if(document.getElementById(\'div-gpt-ad-1670965873619-0\').style.display==\"none\"){\r\n if(typeof window.parent.adoceanhunboiiumlcb_second_phase !=\'undefined'\) {\r\n window.parent.document.getElementById(\'g_evynjffqsqwjmnfqfjopxkto\').parentElement.parentElement.parentElement.style.display = \'none\';\r\nconsole.log(\"google hide div-gpt-ad-1670965873619-0 \");\r\n}\r\n else{ \r\n	window.parent.document.getElementById(\'g_evynjffqsqwjmnfqfjopxkto\').parentElement.style.display = \'none\';\r\nconsole.log(\"google hide div-gpt-ad-1670965873619-0 \");\r\n}}else{\r\n window.parent.document.getElementById(\'bbb.creativeevynjffqsqwjmnfqfjopxkto\').style.height = document.getElementById(\'div-gpt-ad-1670965873619-0\').clientHeight+\'px\';\r\n window.parent.document.getElementById(\'bbb.creativeevynjffqsqwjmnfqfjopxkto\').style.width = document.getElementById(\'div-gpt-ad-1670965873619-0\').clientWidth+\'px\';\r\n }\r\n});\r\n});\r\n	googletag.cmd.push(function() {   googletag.display(\'div-gpt-ad-1670965873619-0\');\r\nconsole.log(\'g_div-gpt-ad-1670965873619-0_1st_load\'); });	 \r\n<\/script>",
        image: "",

        extraContainer: {
            display: 0,
            title: "",
            top: "",
            height: "",
            backgroundColor: "",
            color: ""
        },

        snowEffect: 0,
        clickTag: "https://admwhu.hit.gemius.pl/hitredir/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=lpqtitksfp/fastid=jtalnfkdvfjsgzevhikiqtmobnlb/sarg=NC;/inner=%7C;/extra=mwid%3D;/url=" + encodeURIComponent(""),
        redirection: "clickTag=https://admwhu.hit.gemius.pl/hitredir/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=lpqtitksfp/fastid=jtalnfkdvfjsgzevhikiqtmobnlb/sarg=NC;/inner=%7C;/extra=mwid%3D;/url="+encodeURIComponent(""),
        additionalHtml: ""
    };



    gao.billboardv2.push(config);
})();


document.write('<scr'+'ipt src="https://hu.adocean.pl/files/js/billboard_v2_gao_lib.js"></scr'+'ipt>');
document.write('<div id="g_evynjffqsqwjmnfqfjopxkto" class="ao_hird" style="position: relative;">');
document.write('<scr'+'ipt src="https://hu.adocean.pl/files/user_global_files/yoflbxhnng/whmjikdfry1675784618214303.js"></scr'+'ipt>');
document.write('</div>');


document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"https://hu.adocean.pl/commit/nc=1/code=qFvpyd2hMpQwIheO470kW.prwTyh7jxYhTrJeCLqT0L.17/eprog=12/inner=ao%5Funiq%3Devynjffqsqwjmnfqdedgicfh%7C%5Fhcpref%3Dhu;/\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=oojnfwqnvu/fastid=fwrlarslnrknbjnlgrhrolsvdnmd/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

};
if (typeof ado=="object" && typeof ado._registerPassback=="function"){
ado._registerPassback(
  "adoceanhunboiiumlcb",
  "evynjffqsqwjmnfqqnfrqfgh",
  passbackCustomData,
  passbackFunction
);}
AdOceanRTBAuctionAdServerBids['evynjffqsqwjmnfqqnfrqfgh']=passbackCustomData;
AdOceanRTBAuctionAdServerBids['evynjffqsqwjmnfqqnfrqfgh']['creative']=passbackFunction;
})();

}
adoceanhunboiiumlcb_second_phase.isEmpty=0;
function adoceanhukcfplrgqxw_second_phase() {

if (typeof AdOceanRTBAuctionAdServerBids==="undefined") AdOceanRTBAuctionAdServerBids={};
(function(){
var passbackCustomData={ecpm:'0', isDefault: 0};
var passbackFunction=function(){
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['Life_desktop_hirek_box_2'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['kcfplrgqxw'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhukcfplrgqxw', arg:'', isEmpty:0});}
!function(e){var n;n="gao",typeof window[n]==e&&(window[n]={}),typeof _gao_insdwl!=e&&typeof _gao_insdwl.init!=e||typeof gao.aoInscreenHit!=e||document.write('<script src="https://admwhu.hit.gemius.pl/gdejs/xgde.js"><\/script>'),"function"!=typeof gao.inscreenRegisterElement&&(gao.inscreenRegisterElement=function(n,o){typeof gao.aoInscreenHit!=e&&"string"==typeof o&&typeof gao.aoInscreenHit[o]!=e&&(window._gdeaq=window._gdeaq||[],window._gdeaq.push(["inscreen",gao.aoInscreenHit[o],n]),delete gao.aoInscreenHit[o])}),typeof gao.aoInscreenHit==e&&(gao.aoInscreenHit={}),gao.aoInscreenHit["evynjffqsqwjmnfqorliiptt"]="https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=rjdoevpgez/sarg=NC;/inner=%7C;"}("undefined");
(function() {
    var gao = window.gao || (window.gao = {});
    if (typeof gao.billboardv2 !== "object") gao.billboardv2 = [];

    var config = {
        unique: "evynjffqsqwjmnfqorliiptt",
        targetID: "bbb.creativeevynjffqsqwjmnfqorliiptt",

        width: "300",
        height: "600",
        align: "1",
        responsive: 0,
        html5: "",
        clickTagOverlay: 0,
        htmlFiFCode: "<!-- /192959950/mediaworks_300x600_desktop_box_2 -->\r\n<div id=\'div-gpt-ad-1670965899462-0\'>\r\n<\/div>\r\n<script>\r\n if (typeof googletag == \'undefined\') {\r\n	var s = document.createElement(\'script\');\r\n	s.type=\"text/javascript\";\r\n	s.charset=\"utf-8\";\r\n	s.src=\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\";\r\n	document.getElementsByTagName(\'body\')[0].appendChild(s);\r\n}\r\n  window.googletag = window.googletag || {cmd: []};\r\n  googletag.cmd.push(function() {googletag.defineSlot(\'/192959950/mediaworks_300x600_desktop_box_2\', [300, 600], \'div-gpt-ad-1670965899462-0\').addService(googletag.pubads());\r\n\r\n googletag.pubads().enableSingleRequest();\r\n    googletag.pubads().collapseEmptyDivs();\r\n    googletag.enableServices();\r\n	var targetSlot = \"div-gpt-ad-1670965899462-0\";\r\n	googletag.pubads().addEventListener(\'slotRenderEnded\', function(event) {\r\n	if(document.getElementById(\'div-gpt-ad-1670965899462-0\').style.display==\"none\"){\r\n if(typeof window.parent.adoceanhukcfplrgqxw_second_phase !=\'undefined'\) {\r\n window.parent.document.getElementById(\'g_evynjffqsqwjmnfqorliiptt\').parentElement.parentElement.parentElement.style.display = \'none\';\r\nconsole.log(\"google hide div-gpt-ad-1670965899462-0 \");\r\n}\r\n else{ \r\n	window.parent.document.getElementById(\'g_evynjffqsqwjmnfqorliiptt\').parentElement.style.display = \'none\';\r\nconsole.log(\"google hide div-gpt-ad-1670965899462-0 \");\r\n}}else{\r\n window.parent.document.getElementById(\'bbb.creativeevynjffqsqwjmnfqorliiptt\').style.height = document.getElementById(\'div-gpt-ad-1670965899462-0\').clientHeight+\'px\';\r\n window.parent.document.getElementById(\'bbb.creativeevynjffqsqwjmnfqorliiptt\').style.width = document.getElementById(\'div-gpt-ad-1670965899462-0\').clientWidth+\'px\';\r\n }\r\n});\r\n});\r\n	googletag.cmd.push(function() {   googletag.display(\'div-gpt-ad-1670965899462-0\');\r\nconsole.log(\'g_div-gpt-ad-1670965899462-0_1st_load\'); });	 \r\n<\/script>",
        image: "",

        extraContainer: {
            display: 0,
            title: "",
            top: "",
            height: "",
            backgroundColor: "",
            color: ""
        },

        snowEffect: 0,
        clickTag: "https://admwhu.hit.gemius.pl/hitredir/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=uimhbigsva/fastid=iyqjcogmwqwsoigrzxjregiynknp/sarg=NC;/inner=%7C;/extra=mwid%3D;/url=" + encodeURIComponent(""),
        redirection: "clickTag=https://admwhu.hit.gemius.pl/hitredir/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=uimhbigsva/fastid=iyqjcogmwqwsoigrzxjregiynknp/sarg=NC;/inner=%7C;/extra=mwid%3D;/url="+encodeURIComponent(""),
        additionalHtml: ""
    };



    gao.billboardv2.push(config);
})();


document.write('<scr'+'ipt src="https://hu.adocean.pl/files/js/billboard_v2_gao_lib.js"></scr'+'ipt>');
document.write('<div id="g_evynjffqsqwjmnfqorliiptt" class="ao_hird" style="position: relative;">');
document.write('<scr'+'ipt src="https://hu.adocean.pl/files/user_global_files/yoflbxhnng/whmjikdfry1675784618214303.js"></scr'+'ipt>');
document.write('</div>');


document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"https://hu.adocean.pl/commit/nc=1/code=q.vpa90xMktQDbm2peThtNn707TRtVcRt9mEytYcJcr.S7/eprog=12/inner=ao%5Funiq%3Devynjffqsqwjmnfqdedgicfh%7C%5Fhcpref%3Dhu;/\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=xhfrnkmnpf/fastid=dzhdlaqejkgmfpeutrankypfpkks/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

};
if (typeof ado=="object" && typeof ado._registerPassback=="function"){
ado._registerPassback(
  "adoceanhukcfplrgqxw",
  "evynjffqsqwjmnfqjgdkrjgm",
  passbackCustomData,
  passbackFunction
);}
AdOceanRTBAuctionAdServerBids['evynjffqsqwjmnfqjgdkrjgm']=passbackCustomData;
AdOceanRTBAuctionAdServerBids['evynjffqsqwjmnfqjgdkrjgm']['creative']=passbackFunction;
})();

}
adoceanhukcfplrgqxw_second_phase.isEmpty=0;
function adoceanhuxcmfpoquwr_second_phase() {

if (typeof AdOceanRTBAuctionAdServerBids==="undefined") AdOceanRTBAuctionAdServerBids={};
(function(){
var passbackCustomData={ecpm:'0', isDefault: 0};
var passbackFunction=function(){
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['Life_desktop_hirek_box_3'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['xcmfpoquwr'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhuxcmfpoquwr', arg:'', isEmpty:0});}
!function(e){var n;n="gao",typeof window[n]==e&&(window[n]={}),typeof _gao_insdwl!=e&&typeof _gao_insdwl.init!=e||typeof gao.aoInscreenHit!=e||document.write('<script src="https://admwhu.hit.gemius.pl/gdejs/xgde.js"><\/script>'),"function"!=typeof gao.inscreenRegisterElement&&(gao.inscreenRegisterElement=function(n,o){typeof gao.aoInscreenHit!=e&&"string"==typeof o&&typeof gao.aoInscreenHit[o]!=e&&(window._gdeaq=window._gdeaq||[],window._gdeaq.push(["inscreen",gao.aoInscreenHit[o],n]),delete gao.aoInscreenHit[o])}),typeof gao.aoInscreenHit==e&&(gao.aoInscreenHit={}),gao.aoInscreenHit["evynjffqsqwjmnfqhkjridui"]="https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=wjhffvkkec/sarg=NC;/inner=%7C;"}("undefined");
(function() {
    var gao = window.gao || (window.gao = {});
    if (typeof gao.billboardv2 !== "object") gao.billboardv2 = [];

    var config = {
        unique: "evynjffqsqwjmnfqhkjridui",
        targetID: "bbb.creativeevynjffqsqwjmnfqhkjridui",

        width: "300",
        height: "600",
        align: "1",
        responsive: 0,
        html5: "",
        clickTagOverlay: 0,
        htmlFiFCode: "<!-- /192959950/mediaworks_300x600_desktop_box_3 -->\r\n<div id=\'div-gpt-ad-1670965935599-0\'>\r\n<\/div>\r\n<script>\r\n if (typeof googletag == \'undefined\') {\r\n	var s = document.createElement(\'script\');\r\n	s.type=\"text/javascript\";\r\n	s.charset=\"utf-8\";\r\n	s.src=\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\";\r\n	document.getElementsByTagName(\'body\')[0].appendChild(s);\r\n}\r\n  window.googletag = window.googletag || {cmd: []};\r\n  googletag.cmd.push(function() {googletag.defineSlot(\'/192959950/mediaworks_300x600_desktop_box_3\', [300, 600], \'div-gpt-ad-1670965935599-0\').addService(googletag.pubads());\r\n\r\n googletag.pubads().enableSingleRequest();\r\n    googletag.pubads().collapseEmptyDivs();\r\n    googletag.enableServices();\r\n	var targetSlot = \"div-gpt-ad-1670965935599-0\";\r\n	googletag.pubads().addEventListener(\'slotRenderEnded\', function(event) {\r\n	if(document.getElementById(\'div-gpt-ad-1670965935599-0\').style.display==\"none\"){\r\n if(typeof window.parent.adoceanhuxcmfpoquwr_second_phase !=\'undefined'\) {\r\n window.parent.document.getElementById(\'g_evynjffqsqwjmnfqhkjridui\').parentElement.parentElement.parentElement.style.display = \'none\';\r\nconsole.log(\"google hide div-gpt-ad-1670965935599-0 \");\r\n}\r\n else{ \r\n	window.parent.document.getElementById(\'g_evynjffqsqwjmnfqhkjridui\').parentElement.style.display = \'none\';\r\nconsole.log(\"google hide div-gpt-ad-1670965935599-0 \");\r\n}}else{\r\n window.parent.document.getElementById(\'bbb.creativeevynjffqsqwjmnfqhkjridui\').style.height = document.getElementById(\'div-gpt-ad-1670965935599-0\').clientHeight+\'px\';\r\n window.parent.document.getElementById(\'bbb.creativeevynjffqsqwjmnfqhkjridui\').style.width = document.getElementById(\'div-gpt-ad-1670965935599-0\').clientWidth+\'px\';\r\n }\r\n});\r\n});\r\n	googletag.cmd.push(function() {   googletag.display(\'div-gpt-ad-1670965935599-0\');\r\nconsole.log(\'g_div-gpt-ad-1670965935599-0_1st_load\'); });	 \r\n<\/script>",
        image: "",

        extraContainer: {
            display: 0,
            title: "",
            top: "",
            height: "",
            backgroundColor: "",
            color: ""
        },

        snowEffect: 0,
        clickTag: "https://admwhu.hit.gemius.pl/hitredir/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=ziqobirfjh/fastid=eurwwmkkailtfadvzttgatfizhmf/sarg=NC;/inner=%7C;/extra=mwid%3D;/url=" + encodeURIComponent(""),
        redirection: "clickTag=https://admwhu.hit.gemius.pl/hitredir/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=ziqobirfjh/fastid=eurwwmkkailtfadvzttgatfizhmf/sarg=NC;/inner=%7C;/extra=mwid%3D;/url="+encodeURIComponent(""),
        additionalHtml: ""
    };



    gao.billboardv2.push(config);
})();


document.write('<scr'+'ipt src="https://hu.adocean.pl/files/js/billboard_v2_gao_lib.js"></scr'+'ipt>');
document.write('<div id="g_evynjffqsqwjmnfqhkjridui" class="ao_hird" style="position: relative;">');
document.write('<scr'+'ipt src="https://hu.adocean.pl/files/user_global_files/yoflbxhnng/whmjikdfry1675784618214303.js"></scr'+'ipt>');
document.write('</div>');


document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"https://hu.adocean.pl/commit/nc=1/code=qGJJid1DQky26llqBG9BZtn7c4vRtZbQN2vcyx3WZ.n.s7/eprog=12/inner=ao%5Funiq%3Devynjffqsqwjmnfqdedgicfh%7C%5Fhcpref%3Dhu;/\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=mijiokhrai/fastid=fxuvbwgmedrzbfnltmwlullqbhmh/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

};
if (typeof ado=="object" && typeof ado._registerPassback=="function"){
ado._registerPassback(
  "adoceanhuxcmfpoquwr",
  "evynjffqsqwjmnfqsoqsrngr",
  passbackCustomData,
  passbackFunction
);}
AdOceanRTBAuctionAdServerBids['evynjffqsqwjmnfqsoqsrngr']=passbackCustomData;
AdOceanRTBAuctionAdServerBids['evynjffqsqwjmnfqsoqsrngr']['creative']=passbackFunction;
})();

}
adoceanhuxcmfpoquwr_second_phase.isEmpty=0;
function adoceanhusinsglffzu_second_phase() {

if (typeof AdOceanRTBAuctionAdServerBids==="undefined") AdOceanRTBAuctionAdServerBids={};
(function(){
var passbackCustomData={ecpm:'0', isDefault: 0};
var passbackFunction=function(){
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['Life_desktop_hirek_leaderboard_1'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['sinsglffzu'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhusinsglffzu', arg:'', isEmpty:0});}
!function(e){var n;n="gao",typeof window[n]==e&&(window[n]={}),typeof _gao_insdwl!=e&&typeof _gao_insdwl.init!=e||typeof gao.aoInscreenHit!=e||document.write('<script src="https://admwhu.hit.gemius.pl/gdejs/xgde.js"><\/script>'),"function"!=typeof gao.inscreenRegisterElement&&(gao.inscreenRegisterElement=function(n,o){typeof gao.aoInscreenHit!=e&&"string"==typeof o&&typeof gao.aoInscreenHit[o]!=e&&(window._gdeaq=window._gdeaq||[],window._gdeaq.push(["inscreen",gao.aoInscreenHit[o],n]),delete gao.aoInscreenHit[o])}),typeof gao.aoInscreenHit==e&&(gao.aoInscreenHit={}),gao.aoInscreenHit["evynjffqsqwjmnfqqsgkjhun"]="https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=qjfmnvkfgu/sarg=NC;/inner=%7C;"}("undefined");
(function() {
    var gao = window.gao || (window.gao = {});
    if (typeof gao.billboardv2 !== "object") gao.billboardv2 = [];

    var config = {
        unique: "evynjffqsqwjmnfqqsgkjhun",
        targetID: "bbb.creativeevynjffqsqwjmnfqqsgkjhun",

        width: "970",
        height: "250",
        align: "1",
        responsive: 0,
        html5: "",
        clickTagOverlay: 0,
        htmlFiFCode: "<!-- /192959950/mediaworks_970x250_desktop_leaderboard_1 -->\r\n<div id=\'div-gpt-ad-1670966326239-0\'>\r\n<\/div>\r\n<script>\r\n if (typeof googletag == \'undefined\') {\r\n	var s = document.createElement(\'script\');\r\n	s.type=\"text/javascript\";\r\n	s.charset=\"utf-8\";\r\n	s.src=\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\";\r\n	document.getElementsByTagName(\'body\')[0].appendChild(s);\r\n}\r\n  window.googletag = window.googletag || {cmd: []};\r\n  googletag.cmd.push(function() {googletag.defineSlot(\'/192959950/mediaworks_970x250_desktop_leaderboard_1\', [[970, 250], [970, 90]], \'div-gpt-ad-1670966326239-0\').addService(googletag.pubads());\r\n\r\n googletag.pubads().enableSingleRequest();\r\n    googletag.pubads().collapseEmptyDivs();\r\n    googletag.enableServices();\r\n	var targetSlot = \"div-gpt-ad-1670966326239-0\";\r\n	googletag.pubads().addEventListener(\'slotRenderEnded\', function(event) {\r\n	if(document.getElementById(\'div-gpt-ad-1670966326239-0\').style.display==\"none\"){\r\n if(typeof window.parent.adoceanhusinsglffzu_second_phase !=\'undefined'\) {\r\n window.parent.document.getElementById(\'g_evynjffqsqwjmnfqqsgkjhun\').parentElement.parentElement.parentElement.style.display = \'none\';\r\nconsole.log(\"google hide div-gpt-ad-1670966326239-0 \");\r\n}\r\n else{ \r\n	window.parent.document.getElementById(\'g_evynjffqsqwjmnfqqsgkjhun\').parentElement.style.display = \'none\';\r\nconsole.log(\"google hide div-gpt-ad-1670966326239-0 \");\r\n}}else{\r\n window.parent.document.getElementById(\'bbb.creativeevynjffqsqwjmnfqqsgkjhun\').style.height = document.getElementById(\'div-gpt-ad-1670966326239-0\').clientHeight+\'px\';\r\n window.parent.document.getElementById(\'bbb.creativeevynjffqsqwjmnfqqsgkjhun\').style.width = document.getElementById(\'div-gpt-ad-1670966326239-0\').clientWidth+\'px\';\r\n }\r\n});\r\n});\r\n	googletag.cmd.push(function() {   googletag.display(\'div-gpt-ad-1670966326239-0\');\r\nconsole.log(\'g_div-gpt-ad-1670966326239-0_1st_load\'); });	 \r\n<\/script>",
        image: "",

        extraContainer: {
            display: 0,
            title: "",
            top: "",
            height: "",
            backgroundColor: "",
            color: ""
        },

        snowEffect: 0,
        clickTag: "https://admwhu.hit.gemius.pl/hitredir/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=tiofkirqmv/fastid=cjgnlpylonjliehwsmehczcscikr/sarg=NC;/inner=%7C;/extra=mwid%3D;/url=" + encodeURIComponent(""),
        redirection: "clickTag=https://admwhu.hit.gemius.pl/hitredir/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=tiofkirqmv/fastid=cjgnlpylonjliehwsmehczcscikr/sarg=NC;/inner=%7C;/extra=mwid%3D;/url="+encodeURIComponent(""),
        additionalHtml: ""
    };



    gao.billboardv2.push(config);
})();


document.write('<scr'+'ipt src="https://hu.adocean.pl/files/js/billboard_v2_gao_lib.js"></scr'+'ipt>');
document.write('<div id="g_evynjffqsqwjmnfqqsgkjhun" class="ao_hird" style="position: relative;">');
document.write('<scr'+'ipt src="https://hu.adocean.pl/files/user_global_files/yoflbxhnng/whmjikdfry1675784618214303.js"></scr'+'ipt>');
document.write('</div>');


document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"https://hu.adocean.pl/commit/nc=1/code=c2d.9SjePcdqpULiE1h6zPh6op0utBOehCk7YCA9k.7.77/eprog=12/inner=ao%5Funiq%3Devynjffqsqwjmnfqdedgicfh%7C%5Fhcpref%3Dhu;/\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=whhpglhmca/fastid=auntwhknhbwkzpfvlqrdjrizeimq/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

};
if (typeof ado=="object" && typeof ado._registerPassback=="function"){
ado._registerPassback(
  "adoceanhusinsglffzu",
  "evynjffqsqwjmnfqrkpqvjiu",
  passbackCustomData,
  passbackFunction
);}
AdOceanRTBAuctionAdServerBids['evynjffqsqwjmnfqrkpqvjiu']=passbackCustomData;
AdOceanRTBAuctionAdServerBids['evynjffqsqwjmnfqrkpqvjiu']['creative']=passbackFunction;
})();

}
adoceanhusinsglffzu_second_phase.isEmpty=0;
function adoceanhuqnhjlkqqnu_second_phase() {

if (typeof AdOceanRTBAuctionAdServerBids==="undefined") AdOceanRTBAuctionAdServerBids={};
(function(){
var passbackCustomData={ecpm:'0', isDefault: 0};
var passbackFunction=function(){
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['Life_desktop_hirek_roadblock_2'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['qnhjlkqqnu'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhuqnhjlkqqnu', arg:'', isEmpty:0});}
!function(e){var n;n="gao",typeof window[n]==e&&(window[n]={}),typeof _gao_insdwl!=e&&typeof _gao_insdwl.init!=e||typeof gao.aoInscreenHit!=e||document.write('<script src="https://admwhu.hit.gemius.pl/gdejs/xgde.js"><\/script>'),"function"!=typeof gao.inscreenRegisterElement&&(gao.inscreenRegisterElement=function(n,o){typeof gao.aoInscreenHit!=e&&"string"==typeof o&&typeof gao.aoInscreenHit[o]!=e&&(window._gdeaq=window._gdeaq||[],window._gdeaq.push(["inscreen",gao.aoInscreenHit[o],n]),delete gao.aoInscreenHit[o])}),typeof gao.aoInscreenHit==e&&(gao.aoInscreenHit={}),gao.aoInscreenHit["evynjffqsqwjmnfqjletjlus"]="https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=qoqrcxipaw/sarg=NC;/inner=%7C;"}("undefined");
(function() {
    var gao = window.gao || (window.gao = {});
    if (typeof gao.billboardv2 !== "object") gao.billboardv2 = [];

    var config = {
        unique: "evynjffqsqwjmnfqjletjlus",
        targetID: "bbb.creativeevynjffqsqwjmnfqjletjlus",

        width: "640",
        height: "360",
        align: "1",
        responsive: 0,
        html5: "",
        clickTagOverlay: 0,
        htmlFiFCode: "<!-- /192959950/mediaworks_640x360_desktop_roadblock_2 -->\r\n<div id=\'div-gpt-ad-1670966215804-0\'>\r\n<\/div>\r\n<script>\r\n if (typeof googletag == \'undefined\') {\r\n	var s = document.createElement(\'script\');\r\n	s.type=\"text/javascript\";\r\n	s.charset=\"utf-8\";\r\n	s.src=\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\";\r\n	document.getElementsByTagName(\'body\')[0].appendChild(s);\r\n}\r\n  window.googletag = window.googletag || {cmd: []};\r\n  googletag.cmd.push(function() {googletag.defineSlot(\'/192959950/mediaworks_640x360_desktop_roadblock_2\', [640, 360], \'div-gpt-ad-1670966215804-0\').addService(googletag.pubads());\r\n\r\n googletag.pubads().enableSingleRequest();\r\n    googletag.pubads().collapseEmptyDivs();\r\n    googletag.enableServices();\r\n	var targetSlot = \"div-gpt-ad-1670966215804-0\";\r\n	googletag.pubads().addEventListener(\'slotRenderEnded\', function(event) {\r\n	if(document.getElementById(\'div-gpt-ad-1670966215804-0\').style.display==\"none\"){\r\n if(typeof window.parent.adoceanhuqnhjlkqqnu_second_phase !=\'undefined'\) {\r\n window.parent.document.getElementById(\'g_evynjffqsqwjmnfqjletjlus\').parentElement.parentElement.parentElement.style.display = \'none\';\r\nconsole.log(\"google hide div-gpt-ad-1670966215804-0 \");\r\n}\r\n else{ \r\n	window.parent.document.getElementById(\'g_evynjffqsqwjmnfqjletjlus\').parentElement.style.display = \'none\';\r\nconsole.log(\"google hide div-gpt-ad-1670966215804-0 \");\r\n}}else{\r\n window.parent.document.getElementById(\'bbb.creativeevynjffqsqwjmnfqjletjlus\').style.height = document.getElementById(\'div-gpt-ad-1670966215804-0\').clientHeight+\'px\';\r\n window.parent.document.getElementById(\'bbb.creativeevynjffqsqwjmnfqjletjlus\').style.width = document.getElementById(\'div-gpt-ad-1670966215804-0\').clientWidth+\'px\';\r\n }\r\n});\r\n});\r\n	googletag.cmd.push(function() {   googletag.display(\'div-gpt-ad-1670966215804-0\');\r\nconsole.log(\'g_div-gpt-ad-1670966215804-0_1st_load\'); });	 \r\n<\/script>",
        image: "",

        extraContainer: {
            display: 0,
            title: "",
            top: "",
            height: "",
            backgroundColor: "",
            color: ""
        },

        snowEffect: 0,
        clickTag: "https://admwhu.hit.gemius.pl/hitredir/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=tnjlpjpkqb/fastid=hzjisnzaosothsawrrqohnbwxdnm/sarg=NC;/inner=%7C;/extra=mwid%3D;/url=" + encodeURIComponent(""),
        redirection: "clickTag=https://admwhu.hit.gemius.pl/hitredir/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=tnjlpjpkqb/fastid=hzjisnzaosothsawrrqohnbwxdnm/sarg=NC;/inner=%7C;/extra=mwid%3D;/url="+encodeURIComponent(""),
        additionalHtml: ""
    };



    gao.billboardv2.push(config);
})();


document.write('<scr'+'ipt src="https://hu.adocean.pl/files/js/billboard_v2_gao_lib.js"></scr'+'ipt>');
document.write('<div id="g_evynjffqsqwjmnfqjletjlus" class="ao_hird" style="position: relative;">');
document.write('<scr'+'ipt src="https://hu.adocean.pl/files/user_global_files/yoflbxhnng/whmjikdfry1675784618214303.js"></scr'+'ipt>');
document.write('</div>');


document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"https://hu.adocean.pl/commit/nc=1/code=ePs5W9BW4lBORXB3qxejvRhFojL_4BOSWqwVMJmcdgv.R7/eprog=12/inner=ao%5Funiq%3Devynjffqsqwjmnfqdedgicfh%7C%5Fhcpref%3Dhu;/\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=wmcfmmfgrg/fastid=cwusssremtfzdxkydslwvfidzdnv/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

};
if (typeof ado=="object" && typeof ado._registerPassback=="function"){
ado._registerPassback(
  "adoceanhuqnhjlkqqnu",
  "evynjffqsqwjmnfqhoqvicks",
  passbackCustomData,
  passbackFunction
);}
AdOceanRTBAuctionAdServerBids['evynjffqsqwjmnfqhoqvicks']=passbackCustomData;
AdOceanRTBAuctionAdServerBids['evynjffqsqwjmnfqhoqvicks']['creative']=passbackFunction;
})();

}
adoceanhuqnhjlkqqnu_second_phase.isEmpty=0;
function adoceanhunoopoxjfwt_second_phase() {

if (typeof AdOceanRTBAuctionAdServerBids==="undefined") AdOceanRTBAuctionAdServerBids={};
(function(){
var passbackCustomData={ecpm:'0', isDefault: 0};
var passbackFunction=function(){
/*_a_d_yes__*/
if (typeof adserver_emissions != 'object') adserver_emissions = {};
adserver_emissions['Life_desktop_hirek_roadblock_3'] = true;
if (typeof adserver_emissions2 != 'object') adserver_emissions2 = {};
adserver_emissions2['noopoxjfwt'] = true;
if (typeof ado==="object" && ado.beginCreative) {var _ado_elem = ado.beginCreative({id:'adoceanhunoopoxjfwt', arg:'', isEmpty:0});}
!function(e){var n;n="gao",typeof window[n]==e&&(window[n]={}),typeof _gao_insdwl!=e&&typeof _gao_insdwl.init!=e||typeof gao.aoInscreenHit!=e||document.write('<script src="https://admwhu.hit.gemius.pl/gdejs/xgde.js"><\/script>'),"function"!=typeof gao.inscreenRegisterElement&&(gao.inscreenRegisterElement=function(n,o){typeof gao.aoInscreenHit!=e&&"string"==typeof o&&typeof gao.aoInscreenHit[o]!=e&&(window._gdeaq=window._gdeaq||[],window._gdeaq.push(["inscreen",gao.aoInscreenHit[o],n]),delete gao.aoInscreenHit[o])}),typeof gao.aoInscreenHit==e&&(gao.aoInscreenHit={}),gao.aoInscreenHit["evynjffqsqwjmnfqstrlkpuh"]="https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.gif?id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=mpogetqlmk/sarg=NC;/inner=%7C;"}("undefined");
(function() {
    var gao = window.gao || (window.gao = {});
    if (typeof gao.billboardv2 !== "object") gao.billboardv2 = [];

    var config = {
        unique: "evynjffqsqwjmnfqstrlkpuh",
        targetID: "bbb.creativeevynjffqsqwjmnfqstrlkpuh",

        width: "640",
        height: "360",
        align: "1",
        responsive: 0,
        html5: "",
        clickTagOverlay: 0,
        htmlFiFCode: "<!-- /192959950/mediaworks_640x360_desktop_roadblock_3 -->\r\n<div id=\'div-gpt-ad-1670967761075-0\'>\r\n<\/div>\r\n<script>\r\n if (typeof googletag == \'undefined\') {\r\n	var s = document.createElement(\'script\');\r\n	s.type=\"text/javascript\";\r\n	s.charset=\"utf-8\";\r\n	s.src=\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\";\r\n	document.getElementsByTagName(\'body\')[0].appendChild(s);\r\n}\r\n  window.googletag = window.googletag || {cmd: []};\r\n  googletag.cmd.push(function() {googletag.defineSlot(\'/192959950/mediaworks_640x360_desktop_roadblock_3\', [640, 360], \'div-gpt-ad-1670967761075-0\').addService(googletag.pubads());\r\n\r\n googletag.pubads().enableSingleRequest();\r\n    googletag.pubads().collapseEmptyDivs();\r\n    googletag.enableServices();\r\n	var targetSlot = \"div-gpt-ad-1670967761075-0\";\r\n	googletag.pubads().addEventListener(\'slotRenderEnded\', function(event) {\r\n	if(document.getElementById(\'div-gpt-ad-1670967761075-0\').style.display==\"none\"){\r\n if(typeof window.parent.adoceanhunoopoxjfwt_second_phase !=\'undefined'\) {\r\n window.parent.document.getElementById(\'g_evynjffqsqwjmnfqstrlkpuh\').parentElement.parentElement.parentElement.style.display = \'none\';\r\nconsole.log(\"google hide div-gpt-ad-1670967761075-0 \");\r\n}\r\n else{ \r\n	window.parent.document.getElementById(\'g_evynjffqsqwjmnfqstrlkpuh\').parentElement.style.display = \'none\';\r\nconsole.log(\"google hide div-gpt-ad-1670967761075-0 \");\r\n}}else{\r\n window.parent.document.getElementById(\'bbb.creativeevynjffqsqwjmnfqstrlkpuh\').style.height = document.getElementById(\'div-gpt-ad-1670967761075-0\').clientHeight+\'px\';\r\n window.parent.document.getElementById(\'bbb.creativeevynjffqsqwjmnfqstrlkpuh\').style.width = document.getElementById(\'div-gpt-ad-1670967761075-0\').clientWidth+\'px\';\r\n }\r\n});\r\n});\r\n	googletag.cmd.push(function() {   googletag.display(\'div-gpt-ad-1670967761075-0\');\r\nconsole.log(\'g_div-gpt-ad-1670967761075-0_1st_load\'); });	 \r\n<\/script>",
        image: "",

        extraContainer: {
            display: 0,
            title: "",
            top: "",
            height: "",
            backgroundColor: "",
            color: ""
        },

        snowEffect: 0,
        clickTag: "https://admwhu.hit.gemius.pl/hitredir/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=pohqqvghrp/fastid=ctwtcqthpyamkmizjscypzyhjanh/sarg=NC;/inner=%7C;/extra=mwid%3D;/url=" + encodeURIComponent(""),
        redirection: "clickTag=https://admwhu.hit.gemius.pl/hitredir/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=pohqqvghrp/fastid=ctwtcqthpyamkmizjscypzyhjanh/sarg=NC;/inner=%7C;/extra=mwid%3D;/url="+encodeURIComponent(""),
        additionalHtml: ""
    };



    gao.billboardv2.push(config);
})();


document.write('<scr'+'ipt src="https://hu.adocean.pl/files/js/billboard_v2_gao_lib.js"></scr'+'ipt>');
document.write('<div id="g_evynjffqsqwjmnfqstrlkpuh" class="ao_hird" style="position: relative;">');
document.write('<scr'+'ipt src="https://hu.adocean.pl/files/user_global_files/yoflbxhnng/whmjikdfry1675784618214303.js"></scr'+'ipt>');
document.write('</div>');


document.write('<scr'+'ipt>+(function(){return function(c){var a=window,b=a.parent;(a._AO_sendHits?a._AO_sendHits:a.inAOFIF&&b._AO_sendHits?b._AO_sendHits:function(){})(c,0)}})()([[{type: \"commit\", url:\"https://hu.adocean.pl/commit/nc=1/code=eaGZedCI8uFOmcJ1mP9p3xgXQgn_Z1NRBA2Nxaf39A3.D7/eprog=12/inner=ao%5Funiq%3Devynjffqsqwjmnfqdedgicfh%7C%5Fhcpref%3Dhu;/\"},\"https://admwhu.hit.gemius.pl/_[TIMESTAMP]/redot.js/id=zN5A5LgQT2C4Imn9WGsMZOVyDfud7NrCTn0ISkEd7.L.y7/nc=1/stparam=snqjninsxq/fastid=bcnkfkphcolqfuenrgyygseolakm/sarg=NC;/inner=%7C;/extra=mwid%3D;\"]]);</scr'+'ipt>');
if (typeof ado==="object" && ado.endExternal){ ado.endExternal(); }

};
if (typeof ado=="object" && typeof ado._registerPassback=="function"){
ado._registerPassback(
  "adoceanhunoopoxjfwt",
  "evynjffqsqwjmnfqqgoojgkh",
  passbackCustomData,
  passbackFunction
);}
AdOceanRTBAuctionAdServerBids['evynjffqsqwjmnfqqgoojgkh']=passbackCustomData;
AdOceanRTBAuctionAdServerBids['evynjffqsqwjmnfqqgoojgkh']['creative']=passbackFunction;
})();

}
adoceanhunoopoxjfwt_second_phase.isEmpty=0;

