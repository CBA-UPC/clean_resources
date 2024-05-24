"use strict";(self.webpackChunkpageos=self.webpackChunkpageos||[]).push([[409],{9742:(r,t)=>{t.byteLength=function(r){var t=u(r),e=t[0],n=t[1];return 3*(e+n)/4-n},t.toByteArray=function(r){var t,e,a=u(r),h=a[0],c=a[1],f=new o(function(r,t,e){return 3*(t+e)/4-e}(0,h,c)),i=0,A=c>0?h-4:h;for(e=0;e<A;e+=4)t=n[r.charCodeAt(e)]<<18|n[r.charCodeAt(e+1)]<<12|n[r.charCodeAt(e+2)]<<6|n[r.charCodeAt(e+3)],f[i++]=t>>16&255,f[i++]=t>>8&255,f[i++]=255&t;2===c&&(t=n[r.charCodeAt(e)]<<2|n[r.charCodeAt(e+1)]>>4,f[i++]=255&t);1===c&&(t=n[r.charCodeAt(e)]<<10|n[r.charCodeAt(e+1)]<<4|n[r.charCodeAt(e+2)]>>2,f[i++]=t>>8&255,f[i++]=255&t);return f},t.fromByteArray=function(r){for(var t,n=r.length,o=n%3,a=[],h=16383,u=0,f=n-o;u<f;u+=h)a.push(c(r,u,u+h>f?f:u+h));1===o?(t=r[n-1],a.push(e[t>>2]+e[t<<4&63]+"==")):2===o&&(t=(r[n-2]<<8)+r[n-1],a.push(e[t>>10]+e[t>>4&63]+e[t<<2&63]+"="));return a.join("")};for(var e=[],n=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h=0;h<64;++h)e[h]=a[h],n[a.charCodeAt(h)]=h;function u(r){var t=r.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=r.indexOf("=");return-1===e&&(e=t),[e,e===t?0:4-e%4]}function c(r,t,n){for(var o,a,h=[],u=t;u<n;u+=3)o=(r[u]<<16&16711680)+(r[u+1]<<8&65280)+(255&r[u+2]),h.push(e[(a=o)>>18&63]+e[a>>12&63]+e[a>>6&63]+e[63&a]);return h.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63}}]);s:\/\/classic.warcraftlogs.com\/search?term={search_term_string}","query-input":"required name=search_term_string"},"sameAs":["https:\/\/twitter.com\/WarcraftLogs"],"publisher":{"@type":"Organization","name":"Archon","url":"https:\/\/www.archon.gg"}}</script>
        	
                            <link rel="alternate" hreflang="de" href="https://de.classic.warcraftlogs.com/zone/statistics/1020" />
                    <link rel="alternate" hreflang="en" href="https://classic.warcraftlogs.com/zone/statistics/1020" />
                    <link rel="alternate" hreflang="es" href="https://es.classic.warcraftlogs.com/zone/statistics/1020" />
                    <link rel="alternate" hreflang="fr" href="https://fr.classic.warcraftlogs.com/zone/statistics/1020" />
                    <link rel="alternate" hreflang="it" href="https://it.classic.warcraftlogs.com/zone/statistics/1020" />
                    <link rel="alternate" hreflang="pt-BR" href="https://br.classic.warcraftlogs.com/zone/statistics/1020" />
                    <link rel="alternate" hreflang="ru" href="https://ru.classic.warcraftlogs.com/zone/statistics/1020" />
                    <link rel="alternate" hreflang="ko" href="https://ko.classic.warcraftlogs.com/zone/statistics/1020" />
                    <link rel="alternate" hreflang="zh-TW" href="https://tw.classic.warcraftlogs.com/zone/statistics/1020" />
                    <link rel="alternate" hreflang="zh-CN" href="https://cn.classic.warcraftlogs.com/zone/statistics/1020" />
                <link rel="alternate" hreflang="x-default" href="https://classic.warcraftlogs.com/zone/statistics/1020" />
    
	<link type="text/css" href="https://assets.rpglogs.com/css/global.9b99a072c7e4a7e3.css" rel="stylesheet" />
	<link type="text/css" href="https://assets.rpglogs.com/css/app.f0d5110bd054c266.css" rel="stylesheet" />
	<link type="text/css" href="https://assets.rpglogs.com/libs/material-design-iconic-font@2.2.0/css/material-design-iconic-font.min.css" rel="stylesheet" />
    <link type="text/css" href="https://assets.rpglogs.com/libs/jquery-ui.css" rel="stylesheet" />

	<link href="https://assets.rpglogs.com/libs/malihu-custom-scrollbar-plugin@3.1.6/jquery.mCustomScrollbar.min.css" rel="stylesheet" type="text/css" />
	<link rel="icon" type="image/png" href="https://assets.rpglogs.com/img/warcraft/favicon.png" />

	<link href="https://assets.rpglogs.com/libs/scrollbar/jquery.mCustomScrollbar.css" rel="stylesheet" type="text/css" />
<style>
#table-container { margin-right: 320px; }

#filter-metric-selection-container > ul { min-width:350px!important; }

.menu-boss-icon, .menu-actor-icon, .menu-faction-icon { width:20px; height:20px; border:1px solid #555555; margin-right:8px; vertical-align:-6px; --size:20; }

.main-table-name { padding-left:5px !important; white-space:nowrap }
.bar-gradient { height: 12px }
.guild-name { overflow:hidden;max-width:150px;white-space:nowrap;text-overflow:ellipsis }
.server-name { overflow:hidden; max-width:150px;white-space:nowrap;text-overflow:ellipsis }
#rankings-menubar { position:relative; z-index:9999; }
#rankings-bar { background-color:#001520; border-bottom:1px solid #555555; padding:5px 0 }
#rankings-bar-inset  { width:90vw; max-width:1800px; margin:auto; font-size:18px; padding:0 10px }
#controls-menubar { position:relative; z-index:9998; margin-top:-1px; margin-left:10px; margin-right:10px; background:#000020; font-size:11px }
#graph { margin: 10px 0; border:1px solid #555555; height:60vh }

.rankings-bar-options { float:right; }
.rankings-bar-option { color:white !important; float:left; margin-left:15px  }
.rankings-bar-option:hover { color: rgb(70, 197, 255) !important; background-color:#002040 }

.info-bar { border: 1px solid #555555; margin: 5px 0; background-color:#202020; padding:3px 9px; }
.responsive #content { max-width:1800px !important; width:90vw; }

.tier-bar { margin: 5px 10px; display:flex; }
.tier-tab { margin-left:-1px; border:1px solid #555555; padding:6px 12px; color: #c0c0c0 !important; cursor:pointer }
.tier-tab.selected, .tier-tab:hover { background-color: #002040; color:white !important; }

.ranking-metric-type { font-size:11px; color:#a0a0a0!important; float:right; }

#rankings-banner { text-align:center; padding-top:10px }


.boxed-type-selector { display:flex; margin:10px 0; }
.boxed-type-selector > a { flex: 1; border:1px solid #555555; padding:5px; text-align:center; color:#a0a0a0 }
.boxed-type-selector > a.selected { background-color:#000020; color:white }
.boxed-type-selector > a:hover { color:white }

@media (max-width:100px) {
	.rankings-bar-option-text {
		display:none;
	}
}

#right-vertical-banner { float: right; height: 100% }
@media (max-width:1000px) {
	#right-vertical-banner { display:none; }
	#table-container { margin-right: 0 }
}

@media (max-width:768px) {
	.main-table-name {
		min-width:125px;
		width:125px;
		max-width:125px;
		text-overflow:ellipsis;
		overflow:hidden;
	}
	
	#graph {
		display:none
	}
}
</style>
	<style>
    @font-face {
      font-family: 'ralewayregular';
      src: url('https://assets.rpglogs.com/fonts/Raleway-Regular-webfont.eot');
      src: url('https://assets.rpglogs.com/fonts/Raleway-Regular-webfont.eot?#iefix') format('embedded-opentype'),
      url('https://assets.rpglogs.com/fonts/Raleway-Regular-webfont.woff') format('woff'),
      url('https://assets.rpglogs.com/fonts/Raleway-Regular-webfont.ttf') format('truetype'),
      url('https://assets.rpglogs.com/fonts/Raleway-Regular-webfont.svg#ralewayregular') format('svg');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

	/* Tighten up scrollers in reports pages */
	.mCSB_inside > .mCSB_container { margin-right:20px !important }
	.mCSB_inside > .mCSB_container.mCS_no_scrollbar_y.mCS_y_hidden { margin-right:0 !important }
	.search-white { color: white; font-size:22px; }
	.searchbutton-mini-image { padding-left:7px; padding-top:3px; }
	.compact-search-container { height:36px; display:flex; align-items:center; }
	.search-compact { font-size:28px; margin-top:-3px; }
	.zmdi-hc-spin { animation: zmdi-spin 2.5s infinite linear; }
	.edge-hide { opacity: 0.01; }

	#qc-cmp2-persistent-link { left:0; right:auto; font-size:10px; background-color:#300040 }
	.logo-container { width:auto !important; }
	</style>
    <!-- Global site tag (gtag.js) - Google Analytics -->
<script>
    window.googleAnalyticsViewModel = {"id":"UA-141717050-1","siteTitle":"Warcraft Logs Classic","isLoggedIn":false,"isSubscribed":false,"subscriptionStatus":0,"sendPageViewOnContentLoaded":true,"isAdBlocking":false};
</script>
<script src="https://assets.rpglogs.com/js/global/googleAnalytics.5e807d7d65f1c851.js"></script>

    <!-- ads-script-tag -->
    <!-- playwire-script-tag -->
<script>
    window.playwireAdsViewModel = {"publisherId":"1024476","siteId":"73247","googleAnalyticsTag":"G-7CLEJL8GDT","userProfile":null};
</script>
<script src="https://assets.rpglogs.com/js/global/playwire.56d018e905fdbc0a.js"></script>

    <script src="https://btloader.com/tag?o=5150306120761344&upapi=true" async></script>

<script>
    window.isAdBlockingCookieName = 'isAdBlocking';
    </script>

    <script src="https://assets.rpglogs.com/libs/jquery@3.2.0/jquery.min.js"></script>
	<script src="https://assets.rpglogs.com/libs/jqueryui@1.12.1/jquery-ui.min.js"></script>
	<script src="https://assets.rpglogs.com/libs/lazyload@2.0.0-beta.2/lazyload.min.js"></script>

	<script>
	jQuery.browser = {};
(function () {
    jQuery.browser.msie = false;
    jQuery.browser.version = 0;
    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
        jQuery.browser.msie = true;
        jQuery.browser.version = RegExp.$1;
    }
})();

	function edgeRevert() { $(".edge-hide").css('transform', ''); $(".edge-hide").removeClass('edge-hide'); }
	function edgeZoom() { $(".edge-hide").css('transform', 'scale(2)'); setTimeout(edgeRevert, 50); }
	function edgeSpriteFix(container) {
		if (navigator.userAgent.indexOf("Edge") == -1)
			return
		var selector = (container ? container + ' ' : '') + ".sprite"
		$(selector).addClass('edge-hide')
		setTimeout(edgeZoom, 10)
	}
</script>

		<script src="https://assets.rpglogs.com/js/lang/js-localization.b693128d256fac29.js"></script>
	<script src="https://assets.rpglogs.com/js/lang/lang-en.9b0907972bcd7e55.js"></script>
		<script>Lang.setLocale('en');</script>

	<script src="https://assets.rpglogs.com/js/manifest.677a646975b79807.js"></script>
	<script src="https://assets.rpglogs.com/js/vendor.5f149046d9be0d0e.js"></script>
	<script src="https://assets.rpglogs.com/js/app.f618bd3e73612402.js"></script>

	<script src="https://assets.rpglogs.com/libs/moment.js@2.24.0/moment-with-locales.min.js"></script>
	<script src="https://assets.rpglogs.com/libs/moment-duration-format@2.2.2/moment-duration-format.min.js"></script>

	<script type="text/javascript" src="https://assets.rpglogs.com/libs/malihu-custom-scrollbar-plugin-with-iframe-fix@3.1.6-rpg1/jquery.mCustomScrollbar.min.js"></script>

	<script src="https://assets.rpglogs.com/js/global.c4afe3b170f392e3.js"></script>

	<script>
        window.locale = "en";
        moment.locale(window.locale);
	</script>

	<script type="text/javascript" src="https://assets.rpglogs.com/libs/jquery.ba-bbq@1.2.1/jquery.ba-bbq.min.js"></script>
<script type="text/javascript" src="https://assets.rpglogs.com/libs/datatables@1.10.18/datatables.min.js"></script>
<script src="https://assets.rpglogs.com/libs/highstock@1.3.7/highstock.js"></script>
<script src="https://assets.rpglogs.com/libs/highcharts@3.0.7/highcharts-more.js"></script>
<script src="https://assets.rpglogs.com/libs/highcharts/js/themes/custom.js"></script>
<script defer type="text/javascript" src="//wow.zamimg.com/widgets/power.js"></script><script>var wowhead_tooltips = { "iconizelinks": false }</script>
<script>
jQuery.fn.dataTableExt.oSort['inner-text-asc']  = function(a,b) {
	var plainA = $.trim(a.replace(/(<([^>]+)>)/ig,""))
	var plainB = $.trim(b.replace(/(<([^>]+)>)/ig,""))
	if (plainA == plainB)
		return 0
	return plainA < plainB ? -1 : 1
};

jQuery.fn.dataTableExt.oSort['inner-text-desc'] = function(a,b) {
	var plainA = $.trim(a.replace(/(<([^>]+)>)/ig,""))
	var plainB = $.trim(b.replace(/(<([^>]+)>)/ig,""))
	if (plainA == plainB)
		return 0
	return plainA < plainB ? 1 : -1
};

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
"num-html-pre": function ( a ) {
	var x = a.replace(/<(?:.|\s)*?>/g, "")
	
	var secret = x.indexOf("$")
    if (secret != -1)
    	x = x.substring(0, secret)
     
	x = x.replace(/,/g, '');

	return parseFloat(x);
},

"num-html-asc": function ( a, b ) {
	return ((a < b) ? -1 : ((a > b) ? 1 : 0));
},

"num-html-desc": function ( a, b ) {
	return ((a < b) ? 1 : ((a > b) ? -1 : 0));
}
});

$(function() {
	$('#rankings-menubar, #controls-menubar').smartmenus({
		showOnClick: true,
		mainMenuSubOffsetX: -1,
		mainMenuSubOffsetY: -1,
		subMenusSubOffsetX: 10,
		subMenusSubOffsetY: 0,
		subMenusMaxWidth: "800px",
		});
	$('#rankings-menubar').on('beforefirstshow.smapi', function(e, menu) {  $(menu).find('.lazyload').lazyload() });
});

function refreshMenus()
{
	$('#rankings-menubar, #controls-menubar').smartmenus('refresh');
}

$(window).bind('hashchange', function(e) {
	var params = $.deparam.fragment()
	loadViews(params)  
    window.dispatchEvent(new Event('page-changed'));
})

function changeLink(link, params)
{
	var newURL = $.param.fragment(window.location.href, params, 2)
	link.href = newURL
	return true
}

var obj = null
var difficulties = [];
obj = { difficulty: 4, sizes: [] };
obj.sizes.push(25);
obj.sizes.push(10);
difficulties.push(obj);
obj = { difficulty: 3, sizes: [] };
obj.sizes.push(25);
obj.sizes.push(10);
difficulties.push(obj);

var zoneID = 1020;
var gameID = 0;
var isChallengeMode = false;
var isKeystone = false;
var hasScore = false;
var hasPartitions = true;
var hasBrackets = true;
var defaultPartition = 5;
var hasVariableSamples = "false";
var bracketSingular = "Item Level";
var bracketPlural = "Item Levels";
var defaultSample = 14;
var filterMetric
var filterBoss
var filterPhase
var filterDifficulty
var filterSize
var filterRegion
var filterClass
var filterSpec
var filterSpecOne
var filterSpecTwo
var filterCombatantInfo
var filterTier

var filterDataSet
var filterTimespan
var filterSample
var filterBracket
var filterKeystoneLevel

var filterAggregate

var filterItemLevel
var filterItemLevelDisplay
//var filterRaidSizeDisplay

var filterKills
var filterRepresentation

var filterDPSType

var supportsCombinedFFRanks = "false ";

var combatantInfoLocalized = {
	'Talents': "Talents",
	'Trinkets':  "Trinkets",
	'Legendaries':  "Legendaries",
	'Azerite':  "Azerite Powers",
	'Essences':  "Essence Powers",
	'Covenants':  "Covenants",
	'Soulbinds':  "Soulbinds",
	'LegendaryEffects':  "Legendaries",
	'SoulbindPowers':  "Soulbind Powers",
	'ConduitPowers':  "Conduits",
	'ActionBars': "Action Bars",
	'ItemSets': "Item Sets" };

function hasItemLevels()
{
	if (gameID != 0)
		return false
	return zoneID >= 6 && zoneID != 9
}


function defaultSizeForZone()
{
	for (var i = 0; i < difficulties.length; ++i) {
		if (difficulties[i].difficulty == filterDifficulty)
			return difficulties[i].sizes[0];
	}
	return 10;
}

function difficultyHasMultipleSizes(difficulty)
{
	for (var i = 0; i < difficulties.length; ++i) {
		if (difficulties[i].difficulty == difficulty)
			return difficulties[i].sizes.length > 1;
	}
	return false;
}

function updateSizeMenuIfNeeded()
{
	for (var i = 0; i < difficulties.length; ++i) {
		if (difficulties[i].difficulty == filterDifficulty) {
			if (difficulties[i].sizes.length > 1) {
				$("#filter-size-selection-container").show()
				var items = ''
				for (var j = 0; j < difficulties[i].sizes.length; j++) {
					items += '<li><a href="#" class="filter-item" onclick="return setSize(' + difficulties[i].sizes[j] + ', this)" oncontextmenu="setSize(' + difficulties[i].sizes[j] + ', this)">' +  difficulties[i].sizes[j] + ' Player</a></li>';
				}
				$("#filter-size-items").html(items)
				$("#filter-size-text").html(filterSize + " Player")
			} else
				$("#filter-size-selection-container").hide()
			return;
		}
	}	
}

function defaultClassForMetric(metric)
{
	var defaultClass = "Any"
	if (metric == "hps" || (metric == "tankhps" && !isChallengeMode))
		defaultClass = "Healers"
	else if (metric == "dps" || metric == "bossdps" || metric == "wdps")
		defaultClass = "DPS"
	else if (metric == "ehrps")
		defaultClass = "Tanks"
	return defaultClass
}

function defaultMetricForZone()
{
	if (hasScore)
		return "playerscore"
	if (isChallengeMode)
		return "playerspeed"
	return "dps"
}

function pluralClassDisplay(className)
{
	if (className == "Global")
		return "";
	var ele = document.getElementById('class-' + className);
	return ele ? ele.innerText : '';
}

function specDisplay(specName, className)
{
	if (className == "Global")
		return document.getElementById('class-' + className + "-spec-" + specName).getAttribute("plural")
	return document.getElementById('class-' + className + "-spec-" + specName).innerText
}

function defaultDatasetForMetric()
{
	var isFightMetric = filterMetric == 'execution' || filterMetric == 'speed' || filterMetric == "fightdps" || filterMetric == "fighthps" || filterMetric == 'fightwipes'
	return isFightMetric || filterMetric == "deaths" ? 75 : 1000
}

function isFFCombinedMetric(metric)
{
	return metric == "healercombineddps" || metric == "tankcombineddps" || metric == "healercombinedbossdps" || metric == "tankcombinedbossdps"
}

function loadViews(params)
{
	var oldFilterMetric = filterMetric
	var oldFilterBoss = filterBoss
    var oldFilterPhase = filterPhase
	var oldFilterDifficulty = filterDifficulty
	var oldFilterSize = filterSize
	var oldFilterRegion = filterRegion
	var oldFilterClass = filterClass
	var oldFilterSpec = filterSpec
	var oldFilterSpecOne = filterSpecOne
	var oldFilterSpecTwo = filterSpecTwo
	var oldFilterCombatantInfo = filterCombatantInfo
	var oldFilterTier = filterTier
	
	var oldFilterDataSet = filterDataSet
	var oldFilterTimespan = filterTimespan
	var oldFilterSample = filterSample
	var oldFilterBracket = filterBracket
	var oldFilterKeystoneLevel = filterKeystoneLevel
	var oldFilterAggregate = filterAggregate
	
	var oldFilterItemLevel = filterItemLevel
	var oldFilterItemLevelDisplay = filterItemLevelDisplay
//	var oldFilterRaidSizeDisplay = filterRaidSizeDisplay
	
	var oldFilterKills = filterKills
	
	var oldFilterRepresentation = filterRepresentation
	
	var oldFilterDPSType = filterDPSType
	
	filterMetric = params.metric ? params.metric : defaultMetricForZone()
	if (filterMetric == "rdps" || filterMetric == "ndps") {
		filterMetric = "dps"
	} else if (filterMetric == "bossrdps" || filterMetric == "bossndps") {
		filterMetric = "bossdps"
	}
	
	var isDeathsWipes = filterMetric == "fightwipes" || filterMetric == "deaths"
	
	filterBoss = params.boss ? params.boss : 0
    filterPhase = params.phase ? params.phase : 0
	filterDifficulty = params.difficulty ? Math.min(params.difficulty, difficulties[0].difficulty) : difficulties[0].difficulty
	filterRegion = params.region ? parseInt(params.region) : defaultPartition
	filterBracket = params.bracket ? params.bracket : 0
	filterKeystoneLevel = params.keystone ? params.keystone : (zoneID == 18 ? 10 : 15)
	filterCombatantInfo = params.combatantinfo ? params.combatantinfo : 'All'
	filterKills = params.kills ? parseInt(params.kills) : 0
	filterTier = params.tier ? parseInt(params.tier) : 0
	
	var defaultClass = defaultClassForMetric(filterMetric)
	filterClass = params.class ? params.class : defaultClass
	filterSpec = params.spec ? params.spec : "Any"
	
	filterSpecOne = params.specone ? params.specone : "Any"
	filterSpecTwo = params.spectwo ? params.spectwo : "Any"

	filterDataSet = params.dataset ? params.dataset : defaultDatasetForMetric()
	filterTimespan = params.timespan ? params.timespan : 1
	filterSample = params.sample ? params.sample : defaultSample
	filterAggregate = params.aggregate ? params.aggregate : 'normalized'
	
	filterItemLevelDisplay = params.itemleveldisplay && filterTimespan == 1 ? params.itemleveldisplay : "single"
	filterItemLevel = params.itemlevel && filterTimespan == 1 && filterItemLevelDisplay == "single" ? params.itemlevel : 0
	
//	filterRaidSizeDisplay = params.raidsizedisplay && filterTimespan == 1 ? params.raidsizedisplay : "single"
	filterSize = params.size /*&& filterRaidSizeDisplay == "single"*/ ? params.size : defaultSizeForZone()
	
	filterRepresentation = params.representation ? parseInt(params.representation) : -1
	
	filterDPSType = params.dpstype ? params.dpstype : "rdps"
	
	var isPairMetric = isFFCombinedMetric(filterMetric)
	
	var isFightMetric = filterMetric == 'execution' || filterMetric == 'speed' || filterMetric == "fightdps" || filterMetric == "fighthps" || filterMetric == 'fightwipes'
	
	var classSpecRelevant = !isFightMetric && !isPairMetric
	if (classSpecRelevant)
		$("#filter-class-selection-container").show()
	else
		$("#filter-class-selection-container").hide()

	var needToLoadMainTable = filterBoss != oldFilterBoss || filterPhase != oldFilterPhase || filterDifficulty != oldFilterDifficulty || filterSize != oldFilterSize
								|| filterRegion != oldFilterRegion || filterDataSet != oldFilterDataSet || filterTimespan != oldFilterTimespan ||
								filterSample != oldFilterSample || filterMetric != oldFilterMetric || filterAggregate != oldFilterAggregate || filterDPSType != oldFilterDPSType
								|| filterBracket != oldFilterBracket || filterItemLevel != oldFilterItemLevel || filterItemLevelDisplay != oldFilterItemLevelDisplay
								|| filterKeystoneLevel != oldFilterKeystoneLevel
								|| (classSpecRelevant && (filterClass != oldFilterClass || filterSpec != oldFilterSpec || filterCombatantInfo != oldFilterCombatantInfo || filterTier != oldFilterTier))
								|| filterKills != oldFilterKills || oldFilterRepresentation != filterRepresentation
								|| (isPairMetric && (filterSpecOne != oldFilterSpecOne || filterSpecTwo != oldFilterSpecTwo))
								//|| filterRaidSizeDisplay != oldFilterRaidSizeDisplay
	
	$("#filter-metric-text").html($("#metric-" + filterMetric + " > .metric-text").html())

    let bossText = $("#boss-" + filterBoss + ' > .boss-text').html()
    if (filterPhase > 0)
        bossText += " - " + $("#boss-" + filterBoss + '-' + filterPhase + ' > .boss-text').html()
	$("#filter-boss-text").html(bossText)

	$("#filter-difficulty-text").html($("#difficulty-" + filterDifficulty).html())
	
	updateSizeMenuIfNeeded()
	
	if (hasBrackets && filterMetric != "deaths")
		$("#filter-bracket-selection-container").show()
	else
		$("#filter-bracket-selection-container").hide()
		
	if (isKeystone)
		$("#filter-bracket-text").html((filterBracket == 0 ? "All Keystone Levels" : $("#bracket-" + filterBracket).attr("keystone")))
	else
		$("#filter-bracket-text").html($("#bracket-" + filterBracket).html() + (filterBracket > 0 ? " " + bracketSingular : ""))
	
	if (filterItemLevel > 0)
		$("#filter-bracket-text").html(filterItemLevel + " Item Level")
	
	if (filterMetric == "deaths")
		$("#filter-kills-selection-container").show()
	else
		$("#filter-kills-selection-container").hide()
	$("#filter-kills-text").html("For " + $("#kills-" + filterKills).html())

	if (filterBoss || filterMetric == "wipes" || isFightMetric)
		$("#filter-aggregate-selection-container").hide()
	else
		$("#filter-aggregate-selection-container").show()

	if (isDeathsWipes) {
		$("#filter-dataset-selection-container").hide()
		$("#filter-region-selection-container").hide()
		if (filterMetric == "deaths")
			$("#filter-alternate-dataset-selection-container").show()
		else
			$("#filter-alternate-dataset-selection-container").hide()
	} else {
		$("#filter-dataset-selection-container").show()
		$("#filter-region-selection-container").show()
		$("#filter-alternate-dataset-selection-container").hide()
		$(".brackets-table").show()
		$(".brackets-separator").show()
	}

	if (classSpecRelevant) {
		var classSpec = ""
		if (filterSpec != "Any")
	 		classSpec += " " + specDisplay(filterSpec, filterClass) + " "
		if (filterClass == "Any")
			classSpec = "All Classes"
		else if (filterClass == "Tanks" || filterClass == "Healers" || filterClass == "DPS")
			classSpec += filterClass
		else if (filterClass == "Non-Healers")
			classSpec += "Tanks and DPS"
		else
			classSpec += pluralClassDisplay(filterClass)
		
		if (filterCombatantInfo != 'All')
			classSpec += ' (' +  combatantInfoLocalized[filterCombatantInfo] + ')'
	}
	
	if (isPairMetric) {
		var pair = ""
		if (filterSpecOne == "Any" && filterSpecTwo == "Any")
			pair = "All Classes"
		else {
			if (filterSpecOne != "Any")
				pair += " " + specDisplay(filterSpecOne, "Global") + " "
			if (filterSpecTwo == filterSpecOne)
				pair += " (x2)"
			else if (filterSpecTwo != "Any")
				pair += " + " + specDisplay(filterSpecTwo, "Global")
		}
		if (filterMetric == "healercombineddps" || filterMetric == "healercombinedbossdps") {
			$("#filter-healercombineddps-text").html(pair)
			$("#filter-healercombineddps-selection-container").show()
			$("#filter-tankcombineddps-selection-container").hide()
		} else {
			$("#filter-tankcombineddps-text").html(pair)
			$("#filter-healercombineddps-selection-container").hide()
			$("#filter-tankcombineddps-selection-container").show()
		} 
	} else if (supportsCombinedFFRanks) {
		$("#filter-healercombineddps-selection-container").hide()
		$("#filter-tankcombineddps-selection-container").hide()
	}
		
	$("#filter-class-text").html(classSpec)
	
	if (hasPartitions)
		$("#filter-region-text").html($("#region-" + filterRegion).html())
	else
		$("#filter-region-text").html($("#region-" + filterRegion).html())
	
	$("#filter-dataset-text").html($("#metric-dataset-" + filterDataSet).text())
	$("#filter-timespan-text").html($("#metric-timespan-" + filterTimespan).text())
	
	$(".sample-item").hide()
	$(".sample-item-partition-" + filterRegion).show()
	$("#filter-sample-text").html($("#metric-sample-" + filterRegion + "-" + filterSample).text())
	
	$("#filter-alternate-dataset-text").html($("#metric-alternate-dataset-" + filterDataSet).text())
	
	if (filterMetric == "deaths") {
		$("#aggregate-normalized").html("Aggregate Using Equal Boss Weighting");
		$("#aggregate-amount").html("Aggregate Using Pull Count Weighting");
	} else {
		$("#aggregate-normalized").html("Aggregate Using Normalized Scores");
		$("#aggregate-amount").html("Aggregate Using Per Second Amounts");
	}

	$("#filter-aggregate-text").html($("#aggregate-" + filterAggregate).text())
	
	if (filterTimespan == 1 && hasItemLevels())
		$(".item-level-options").show()
	else
		$(".item-level-options").hide()
		
	if (filterItemLevelDisplay == "scaled") {
		$("#filter-bracket-text").html($("#filter-bracket-text").html() + " (Showing Scaling)")
		$("#specific-item-level-selection").hide()
		$("#item-level-display-menu").html("Hide Item Level Scaling")
	} else
		$("#item-level-display-menu").html("Show Item Level Scaling")
		
	if (classSpecRelevant && filterCombatantInfo == "Talents" && filterClass != 0 && filterSpec != 0) {
		$("#filter-talents-bar").show()
		$(".tier-tab").removeClass('selected')
		$("#talent-tab-" + filterTier).addClass("selected")
		$("#filter-powers-bar").hide()
		$("#filter-essences-bar").hide()
	} else if (classSpecRelevant && filterCombatantInfo == "Azerite" && filterClass != 0 && filterSpec != 0) {
		$("#filter-powers-bar").show()
		$(".tier-tab").removeClass('selected')
		$("#power-tab-" + filterTier).addClass("selected")
		$("#filter-talents-bar").hide()
		$("#filter-essences-bar").hide()
	} else if (classSpecRelevant && filterCombatantInfo == "Essences" && filterClass != 0 && filterSpec != 0) {
		$("#filter-essences-bar").show()
		$(".tier-tab").removeClass('selected')
		$("#essence-tab-" + filterTier).addClass("selected")
		$("#filter-talents-bar").hide()
		$("#filter-powers-bar").hide()
	} else {
		$("#filter-talents-bar").hide()
		$("#filter-powers-bar").hide()
		$("#filter-essences-bar").hide()
	}
	
	if (!isChallengeMode)
		document.getElementById('item-level-field').value = filterItemLevel == 0 ? '' : filterItemLevel
	
	if (needToLoadMainTable) {
		// Erase the cached chart data and put in our loading indicator.
		document.getElementById('graph-loading').style.display = 'block'
		document.getElementById('table-container').style.opacity = '0.4'

		// Put up our event killer.hasF
		document.getElementById('event-killer').style.display = ''
	
		loadTable()
		
		setTimeout(refreshMenus, 100)
	}
}

var errorHTML = "<div style='text-align:center; margin-top:30px'><p>Error: Unable to fetch data.</p></div>";

function tableLoaded(response, status, xhr) {
	document.getElementById("table-container").style.opacity = ''
	document.getElementById('graph-loading').style.display = 'none'
	document.getElementById('event-killer').style.display = 'none'
	
	edgeSpriteFix("#table-container")
	
	if (status == "error") {
	    alert("Errorr")
		document.getElementById('table-container').innerHTML = errorHTML
		return;
	}
	
	if (typeof tableColumns === 'undefined') return;

	var result = $(".summary-table").dataTable({"responsive": { "details": false }, "bJQueryUI": true,  "bPaginate": false,
		"bLengthChange": false,
		"bFilter": false,
		"bInfo": false,
		"bAutoWidth": false,
		"aoColumns": tableColumns,
		"aaSorting": [[sortColumn, sortOrder]],
	});
}

function loadTable()
{
    const partition = filterRegion + (filterPhase * 1000)
	var loadString = '/zone/statistics/table/' + zoneID + '/' + filterMetric + '/' + filterBoss + '/' + filterDifficulty + '/' + filterSize + '/' + partition + '/' + filterDataSet + "/" + filterTimespan + "/" + filterSample + "/" + (filterItemLevel > 0 ? filterItemLevel : filterBracket) + '/'
	if (isFFCombinedMetric(filterMetric))
		loadString += filterSpecOne + '/' + filterSpecTwo
	else
		loadString += filterClass + '/' + filterSpec
	loadString += "/" + filterCombatantInfo + "/" + filterTier + '/' + filterAggregate + "/" + filterItemLevelDisplay + '/' /*+ filterRaidSizeDisplay + '/'*/ + filterKills + '/' + filterRepresentation + '/?' + "keystone=" + filterKeystoneLevel + "&dpstype=" + filterDPSType
	$("#table-container").load(loadString, tableLoaded)
}

function setMetric(metric, link)
{
	if (filterMetric == metric)
		return false
		
	var params = $.deparam.fragment()
	
	if (supportsCombinedFFRanks) {
		delete params.specone
		delete params.spectwo
	}
	
	if (metric == 'execution' || metric == 'speed' || metric == 'fightwipes') {
		delete params.class
		delete params.spec
	}
	
	if (metric == 'fightwipes' || metric == 'deaths') {
		delete params.dataset
		delete params.aggregate
		delete params.region
	}
	
	var oldDeaths = filterMetric == "deaths"
	var newDeaths = metric == "deaths"
	if (oldDeaths != newDeaths) {
		delete params.dataset
		delete params.aggregate
		delete params.bracket
		delete params.kills
	}

	var defaultClass = defaultClassForMetric(metric)
	if (params.class == defaultClass)
		delete params.class

	if (metric == defaultMetricForZone())
		delete params.metric
	else
		params.metric = metric
	
	return changeLink(link, params)
}

function setDPSType(dpsType, link)
{
	if (filterDPSType == dpsType)
		return false
		
	var params = $.deparam.fragment()
	
	delete params.page
	
	if (dpsType == "rdps")
		delete params.dpstype
	else
		params.dpstype = dpsType

	return changeLink(link, params)
}

function setBoss(boss, link)
{
	return setBossAndPhase(boss, 0, link)
}

function setBossAndPhase(boss, phase, link) {
    if (filterBoss == boss && filterPhase == phase)
        return false

    var params = $.deparam.fragment()

    if (filterBoss != boss) {
        if (boss == 0)
            delete params.boss
        else
            params.boss = boss
    }

    if (filterPhase != phase) {
        if (phase == 0)
            delete params.phase
        else
            params.phase = phase
    }

	return changeLink(link, params)
}

function setDifficulty(difficulty, link)
{
	if (filterDifficulty == difficulty)
		return false
		
	var params = $.deparam.fragment()
	
	delete params.page
	
	if (difficultyHasMultipleSizes(difficulty))
		delete params.size
	
	if (difficulty == difficulties[0].difficulty)
		delete params.difficulty
	else
		params.difficulty = difficulty

	return changeLink(link, params)
}

function setSize(size, link)
{
	if (filterSize == size)
		return false
		
	var params = $.deparam.fragment()
	if (size == defaultSizeForZone())
		delete params.size
	else
		params.size = size
	
	//delete params.raidsizedisplay
	
	return changeLink(link, params)
}

function setAggregate(aggregate, link)
{
	if (filterAggregate == aggregate)
		return false
		
	var params = $.deparam.fragment()
	if (aggregate == "normalized")
		delete params.aggregate
	else
		params.aggregate = aggregate
	
	return changeLink(link, params)
}

function setClassAndSpec(className, spec, combatantInfo, link)
{
	if (filterClass == className && filterSpec == spec && filterCombatantInfo == combatantInfo)
		return false
		
	var params = $.deparam.fragment()
	
	var defaultClass = defaultClassForMetric(filterMetric)
	if (className == defaultClass)
		delete params.class
	else
		params.class = className
		
	if (spec == "Any")
		delete params.spec
	else
		params.spec = spec

	if (combatantInfo == "All" || className == "Any" || className == "Tanks" || className == "Healers" || className == "DPS" || className == "Non-Healers") {
		delete params.combatantinfo
		delete params.tier
	} else {
		params.combatantinfo = combatantInfo
		delete params.tier
		delete params.timespan
		delete params.bracket
		delete params.itemlevel
		delete params.itemleveldisplay
		//delete params.raidsizedisplay
	}

	return changeLink(link, params)
}

function setCombinedSpecs(spec1, spec2, link)
{
	if (filterSpecOne == spec1 && filterSpecTwo == spec2)
		return false
	
	var params = $.deparam.fragment()
	delete params.page
	
	var defaultSpec = "Any"
	if (spec1 == defaultSpec)
		delete params.specone
	else
		params.specone = spec1
		
	if (spec2 == defaultSpec)
		delete params.spectwo
	else
		params.spectwo = spec2

	return changeLink(link, params)
}

function setRegion(region, link)
{
	if (filterRegion == region)
		return false
		
	var params = $.deparam.fragment()
	if (region == defaultPartition)
		delete params.region
	else
		params.region = region
	
	if (hasVariableSamples)
		delete params.sample
		
	return changeLink(link, params)
}

function setDataSet(dataSet, link)
{
	if (filterDataSet == dataSet)
		return false
		
	var params = $.deparam.fragment()

	if (dataSet == defaultDatasetForMetric())
		delete params.dataset
	else
		params.dataset = dataSet
	
	return changeLink(link, params)
}

function setTimespan(timespan, link)
{
	if (filterTimespan == timespan)
		return false
		
	var params = $.deparam.fragment()

	if (timespan == 1)
		delete params.timespan
	else
		params.timespan = timespan
	
	delete params.combatantinfo
	delete params.tier
	
	return changeLink(link, params)
}

function setSample(sample, link)
{
	if (filterSample == sample)
		return false
		
	var params = $.deparam.fragment()

	if (sample == defaultSample)
		delete params.sample
	else
		params.sample = sample
	
	return changeLink(link, params)
}

function setBracket(bracket, link)
{
	if (filterBracket == bracket && filterItemLevel == 0)
		return false
	
	var params = $.deparam.fragment()
	if (bracket == 0)
		delete params.bracket
	else
		params.bracket = bracket
	
	delete params.itemlevel
	delete params.combatantinfo
	delete params.tier
	
	//delete params.raidsizedisplay

	return changeLink(link, params)
}

function setTier(tier, link)
{
	if (filterTier == tier)
		return false
	
	var params = $.deparam.fragment()
	if (tier == 0)
		delete params.tier
	else
		params.tier = tier
	
	return changeLink(link, params)
}

function setKeystoneLevel(keystoneLevel, link)
{
	if (filterKeystoneLevel == keystoneLevel)
		return false
	
	var params = $.deparam.fragment()
	delete params.page
	if ((zoneID == 18 && keystoneLevel == 10) || (zoneID < 18 && keystoneLevel == 15))
		delete params.keystone
	else
		params.keystone = keystoneLevel
	
	return changeLink(link, params)
}

function setItemLevel(itemLevel, link)
{
	if (filterItemLevel == itemLevel)
		return false
	
	var params = $.deparam.fragment()
	if (itemLevel == 0)
		delete params.itemlevel
	else
		params.itemlevel = itemLevel
	delete params.combatantinfo
	delete params.tier
	
	return changeLink(link, params)
}

function toggleItemLevelDisplay(link)
{
	var params = $.deparam.fragment()
	if (filterItemLevelDisplay == "scaled")
		delete params.itemleveldisplay
	else
		params.itemleveldisplay = "scaled"
	delete params.combatantinfo
	delete params.tier
	
	//delete params.raidsizedisplay
	//delete params.raidsize
	
	return changeLink(link, params)
}

/*
function toggleRaidSizeDisplay(link)
{
	var params = $.deparam.fragment()
	if (filterRaidSizeDisplay == "scaled")
		delete params.raidsizedisplay
	else
		params.raidsizedisplay = "scaled"
	delete params.itemleveldisplay
	delete params.itemlevel
	
	delete params.size
	delete params.bracket

	return changeLink(link, params)
}
*/

function setKills(kills, link)
{
	if (filterKills == kills)
		return false
		
	var params = $.deparam.fragment()

	if (kills == 0)
		delete params.kills
	else
		params.kills = kills
	
	return changeLink(link, params)
}

</script>


<script>
window.onload = function(){
	edgeSpriteFix()
};
</script>

<link rel="stylesheet" type="text/css" href="https://assets.rpglogs.com/libs/cookieconsent2@3.1.0/cookieconsent.min.css" />
<script src="https://assets.rpglogs.com/libs/cookieconsent2@3.1.0/cookieconsent.min.js"></script>
<script>
window.addEventListener("load", function(){
if (!window.cookieconsent) return;
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#237afc"
    },
    "button": {
      "background": "#fff",
      "text": "#237afc"
    }
  }
})});


</script>

</head>


<body class="responsive
 warcraft
">


    <div id="header-container"></div>
    <script>
                attachToDom(
            '#header-container',
            'Header',
            {
                initialData: {"topBar":{"pollsCount":0,"streamsCount":35,"gameToggles":[{"title":"Classic","url":"classic.warcraftlogs.com","isActive":true},{"title":"Vanilla","url":"vanilla.warcraftlogs.com","isActive":false}],"headerLinks":[{"title":"Statistics","url":"\/zone\/statistics\/1020"},{"title":"Latest News","url":"https:\/\/www.archon.gg\/classic-wrath\/articles"},{"title":"Download Client","url":"\/client\/download"},{"title":"Recruitment","url":"\/recruitment"}],"availableLanguages":[{"title":"Deutsch","linkUrl":"de.classic.warcraftlogs.com"},{"title":"English","linkUrl":"classic.warcraftlogs.com"},{"title":"Espa\u00f1ol","linkUrl":"es.classic.warcraftlogs.com"},{"title":"Fran\u00e7ais","linkUrl":"fr.classic.warcraftlogs.com"},{"title":"Italiano","linkUrl":"it.classic.warcraftlogs.com"},{"title":"Portugu\u00eas (Brasil)","linkUrl":"br.classic.warcraftlogs.com"},{"title":"\u0420\u0443\u0441\u0441\u043a\u0438\u0439","linkUrl":"ru.classic.warcraftlogs.com"},{"title":"\ud55c\uad6d\uc5b4","linkUrl":"ko.classic.warcraftlogs.com"},{"title":"\u7e41\u9ad4\u4e2d\u6587","linkUrl":"tw.classic.warcraftlogs.com"},{"title":"\u7b80\u4f53\u4e2d\u6587","linkUrl":"cn.classic.warcraftlogs.com"}],"backgroundArtworkUrl":"https:\/\/assets.rpglogs.com\/img\/warcraft\/header-artwork_classic.jpg?v=7","currentActiveRaceLink":null,"currentActiveRaceBackgroundImageUrl":null,"currentActiveRaceArtworkImageUrl":null},"gameContents":{"contents":[{"title":"Raids","id":"raid-content","expansions":[],"hasBadge":false,"buttonIconUrl":null},{"title":"Dungeons","id":"dungeons-content","expansions":[],"hasBadge":false,"buttonIconUrl":null},{"title":"Raid Guides","id":"raid-strategies","expansions":[],"hasBadge":false,"buttonIconUrl":null},{"title":"Archon","id":"archon","expansions":[{"title":"Archon","id":"","panel":{"sections":[{"header":null,"children":[{"title":"Data-Driven Build Guides","iconUrl":"builds","type":"archon","bossLinks":[],"character":null,"report":null,"linkUrl":"https:\/\/www.archon.gg\/classic-wrath\/builds\/classes-and-specs","desktopOnlyLinkUrl":null,"subTitle":"Discover the most popular builds for each spec.","backgroundImageUrl":"https:\/\/assets.rpglogs.com\/img\/warcraft\/builds\/crosslink-gear-header.png","linkLabel":"Open Archon"},{"title":"Tier Lists - Raid & Mythic+","iconUrl":"tier-lists","type":"archon","bossLinks":[],"character":null,"report":null,"linkUrl":"https:\/\/www.archon.gg\/classic-wrath\/tier-list\/dps-rankings\/icc\/25-heroic\/all-bosses","desktopOnlyLinkUrl":null,"subTitle":"Understand the current meta with our tier list.","backgroundImageUrl":"https:\/\/assets.rpglogs.com\/img\/warcraft\/builds\/crosslink-tier-list.png","linkLabel":"Open Archon"}],"isExpanded":true}]}}],"hasBadge":true,"buttonIconUrl":"https:\/\/assets.rpglogs.com\/img\/archon\/logo.svg"}]},"characters":null,"guilds":null,"labels":{"expansionSelectLabel":"Expansions","contentTypeSelectLabel":"Content Type","guildsLabel":"Guild","charactersLabel":"Characters","signupLabel":"Sign Up","loginLabel":"Log In","streamsCountLabel":"35 Players Streaming","pollsCountLabel":"0 Poll Available!","updateCharactersLabel":"Update Characters","logoutLabel":"Log Out","createAGuildLabel":"Create a Guild or Team","joinAGuildLabel":"Join a Guild or Team","searchBarPlaceholder":"Enter a player, guild, or realm","showMore":"Show More","showLess":"Show Less","noGuildDescription":"Join a guild and get quick access to your guild's reports, rankings, recruitment, calendar and more!","noGuildTitle":"You're not in a guild yet","noCharactersTitle":"You have not claimed any characters yet","noCharactersDescription":"Learn how to claim characters","orSeparator":"or","accessibilityExpand":"Expand Dropdown","accessibilityCollapse":"Collapse Dropdown","badgeLabel":"New","followTheRaceLabel":"Follow the Race!","menuLabel":"Menu","searchLabel":"Search"}}
            },
            {
                game: {"id":0,"area":2,"locales":["de","en","es","fr","it","br","ru","ko","tw","cn"],"fullName":"World of Warcraft","lowercaseName":"warcraft","siteTitle":"Warcraft Logs Classic","siteLogoImageUrl":"https:\/\/assets.rpglogs.com\/img\/warcraft\/favicon.png?v=2","headerLogoUrl":"https:\/\/assets.rpglogs.com\/img\/warcraft\/header-logo.png","baseUrl":"https:\/\/classic.warcraftlogs.com","archonGameSlug":"classic-wrath","actorsSprite":"https:\/\/assets.rpglogs.com\/img\/warcraft\/icons\/actors.jpg?v=25","actorsSecondarySprite":"https:\/\/assets.rpglogs.com\/img\/warcraft\/icons\/secondary\/actors.jpg?v=1","actorsLargeIconsPath":"https:\/\/assets.rpglogs.com\/img\/warcraft\/icons\/large","articlesBaseUrl":"https:\/\/www.archon.gg\/classic-wrath\/articles","assetServerBaseUrl":"https:\/\/assets.rpglogs.com","abilityExternalSitePath":"https:\/\/www.wowhead.com\/wotlk\/spell=","buffExternalSitePath":"https:\/\/www.wowhead.com\/wotlk\/spell=","itemExternalSitePath":"https:\/\/www.wowhead.com\/wotlk\/item=","itemSetExternalSitePath":"https:\/\/www.wowhead.com\/wotlk\/item-set=","npcExternalSitePath":"https:\/\/www.wowhead.com\/wotlk\/npc=","tooltipLibraryPath":"\/\/wow.zamimg.com\/widgets\/power.js","abilityTooltipEndpoint":"https:\/\/classic.warcraftlogs.com\/ability\/{id}\/tooltip","encounterIconExtension":"jpg","headerTextPartOneTopColor":"rgb(45,170,200)","headerTextPartOneBottomColor":"rgb(0,140,195)","headerTextPartTwoTopColor":"rgb(230,230,230)","headerTextPartTwoBottomColor":"rgb(190,190,190)"},
                user: null
            },
            null,
            true
        );
    </script>

<div id="content-and-footer">

<div id="top-banner">
            <div id="top-banner__playwire-container"></div>
<script async>
    attachToDom(
        '#top-banner__playwire-container',
        'PlaywireAd',
        {"id":"top-banner__playwire","type":"leaderboard_atf","fallbackImageUrl":"https:\/\/assets.rpglogs.com\/img\/warcraft\/fallback\/banner.png?v=1","minimumRefreshThresholdSeconds":0},
        null,
        null,
        true
    );
</script>
    </div>

<style>
	
#zone-image { float:left; width:64px; height:64px; margin-right:5px; border: 1px solid #555555; }

.zone-link { margin-right: 10px }

.zone-name { font-size:28px; line-height:40px; font-weight:bold; color:white !important; }

.zone-block  {
	font-size:20px;
	margin-left:5px;
	line-height:22px;
	flex:1;
	margin-top:-2px;
}

@media (max-width:768px) {
	#zone-image { width:32px; height:32px; }
	.zone-name { font-size:14px; line-height:normal; }
	#zone-type { font-size:11px; }
	.zone-block { font-size:11px; line-height:normal !important; }
}

#zone-type { color:#a0a0a0; }

#rankings-bar-inset { display:flex; align-items: center; }
</style>


<div id="rankings-bar">
<div id="rankings-bar-inset">


<img id="zone-image" src="https://assets.rpglogs.com/img/warcraft/zones/zone-1020.png">


<div class="zone-block" id="zone-title">

<a href="/zone/rankings/1020" class="zone-name">Icecrown Citadel</a>
<span id="zone-type"><br>Raid Zone</span>
</div>

<span class="rankings-bar-options">

    
<a class="rankings-bar-option" href="/zone/rankings/1020/#metric=progress"><span class="zmdi zmdi-globe"></span> <span class="rankings-bar-option-text">Progress</span></a>

<a class="rankings-bar-option" href="/zone/reports?zone=1020"><span class="zmdi zmdi-view-list"></span> <span class="rankings-bar-option-text">All Reports</span></a>
        <a class="rankings-bar-option" href="/zone/rankings/1020/"><span class="zmdi zmdi-sort"></span> <span class="rankings-bar-option-text">Rankings</span></a>
        <a class="rankings-bar-option" href="/zone/statistics/1020/"><span class="zmdi zmdi-trending-up"></span> <span class="rankings-bar-option-text">Statistics</span></a>
    </span>




</div>


</div>


<div id="content" class="not-subscribed ">
	<ul id="rankings-menubar" class="sm sm-black filter-bar-menu">
<li id="filter-metric-selection-container"><a class="filter-item" href="#"><span id="filter-metric-text"></span></a>
<ul>

		<li><a href="#" id="metric-speed" class="filter-item" onclick="return setMetric('speed', this)" oncontextmenu="setMetric('speed', this)"><span class="metric-text">Speed</span> <span class="ranking-metric-type">Guild</span></a>

		<li><a href="#" id="metric-execution" class="filter-item" onclick="return setMetric('execution', this)" oncontextmenu="setMetric('execution', this)"><span class="metric-text">Execution</span>  <span class="ranking-metric-type">Guild</span></a>
		
		<li><a href="#" id="metric-fightwipes" class="filter-item" onclick="return setMetric('fightwipes', this)" oncontextmenu="setMetric('fightwipes', this)"><span class="metric-text">Kill %</span>  <span class="ranking-metric-type">Guild</span></a>
		<li><a href="#" id="metric-fightdps" class="filter-item" onclick="return setMetric('fightdps', this)" oncontextmenu="setMetric('fightdps', this)"><span class="metric-text">DPS</span>  <span class="ranking-metric-type">Guild</span></a>
		<li><a href="#" id="metric-fighthps" class="filter-item" onclick="return setMetric('fighthps', this)" oncontextmenu="setMetric('fighthps', this)"><span class="metric-text">HPS</span>  <span class="ranking-metric-type">Guild</span></a>		
		<li class="separator"></li>



		<li><a href="#" id="metric-dps" class="filter-item" onclick="return setMetric('dps', this)" oncontextmenu=" setMetric('dps', this)"><span class="metric-text">Damage</span> <span class="ranking-metric-type">Character</span></a>
		<li><a href="#" id="metric-hps" class="filter-item" onclick="return setMetric('hps', this)" oncontextmenu=" setMetric('hps', this)"><span class="metric-text">Healing</span> <span class="ranking-metric-type">Character</span></a>
		<li><a href="#" id="metric-deaths" class="filter-item" onclick="return setMetric('deaths', this)" oncontextmenu=" setMetric('deaths', this)"><span class="metric-text">Deaths</span> <span class="ranking-metric-type">Character</span></a>
		<li class="separator"></li>
		<li><a href="#" id="metric-bossdps" class="filter-item" onclick="return setMetric('bossdps', this)" oncontextmenu=" setMetric('bossdps', this)"><span class="metric-text">Damage To Bosses</span>
<span style="float:right" class="ranking-metric-type">Character</span>
		</a>
		<li><a href="#" id="metric-tankhps" class="filter-item" onclick="return setMetric('tankhps', this)" oncontextmenu=" setMetric('tankhps', this)"><span class="metric-text">Healing To Tanks</span> <span class="ranking-metric-type">Character</span></a>
</ul>


<li id="filter-boss-selection-container"><a class="filter-item" href="#"><span id="filter-boss-text"></span></a>
<ul>
<li><a id="boss-0" href="#" class="Boss" onclick="return setBoss(0, this)" oncontextmenu="setBoss(0, this)"><span class="boss-text">All Bosses</span></a></li>
<li class="separator"></li>
<div style="overflow:hidden; white-space:nowrap; margin:2px"><table cellspacing=0 cellpadding=0 style="display:inline-table;"><tbody><tr><td><li><a id="boss-845"class="Boss" style="white-space:nowrap;" href="#" onclick="return setBoss(845, this)" oncontextmenu="setBoss(845, this)"><img data-src="https://assets.rpglogs.com/img/warcraft/bosses/845-icon.jpg" class="lazyload menu-boss-icon" alt="Lord Marrowgar"><span class="boss-text">Lord Marrowgar</span></a></li><tr><td><li><a id="boss-846"class="Boss" style="white-space:nowrap;" href="#" onclick="return setBoss(846, this)" oncontextmenu="setBoss(846, this)"><img data-src="https://assets.rpglogs.com/img/warcraft/bosses/846-icon.jpg" class="lazyload menu-boss-icon" alt="Lady Deathwhisper"><span class="boss-text">Lady Deathwhisper</span></a></li><tr><td><li><a id="boss-847"class="Boss" style="white-space:nowrap;" href="#" onclick="return setBoss(847, this)" oncontextmenu="setBoss(847, this)"><img data-src="https://assets.rpglogs.com/img/warcraft/bosses/847-icon.jpg" class="lazyload menu-boss-icon" alt="Icecrown Gunship Battle"><span class="boss-text">Icecrown Gunship Battle</span></a></li><tr><td><li><a id="boss-848"class="Boss" style="white-space:nowrap;" href="#" onclick="return setBoss(848, this)" oncontextmenu="setBoss(848, this)"><img data-src="https://assets.rpglogs.com/img/warcraft/bosses/848-icon.jpg" class="lazyload menu-boss-icon" alt="Deathbringer Saurfang"><span class="boss-text">Deathbringer Saurfang</span></a></li><tr><td><li><a id="boss-849"class="Boss" style="white-space:nowrap;" href="#" onclick="return setBoss(849, this)" oncontextmenu="setBoss(849, this)"><img data-src="https://assets.rpglogs.com/img/warcraft/bosses/849-icon.jpg" class="lazyload menu-boss-icon" alt="Festergut"><span class="boss-text">Festergut</span></a></li><tr><td><li><a id="boss-850"class="Boss" style="white-space:nowrap;" href="#" onclick="return setBoss(850, this)" oncontextmenu="setBoss(850, this)"><img data-src="https://assets.rpglogs.com/img/warcraft/bosses/850-icon.jpg" class="lazyload menu-boss-icon" alt="Rotface"><span class="boss-text">Rotface</span></a></li><tr><td><li><a id="boss-851"class="Boss" style="white-space:nowrap;" href="#" onclick="return setBoss(851, this)" oncontextmenu="setBoss(851, this)"><img data-src="https://assets.rpglogs.com/img/warcraft/bosses/851-icon.jpg" class="lazyload menu-boss-icon" alt="Professor Putricide"><span class="boss-text">Professor Putricide</span></a></li><tr><td><li><a id="boss-852"class="Boss" style="white-space:nowrap;" href="#" onclick="return setBoss(852, this)" oncontextmenu="setBoss(852, this)"><img data-src="https://assets.rpglogs.com/img/warcraft/bosses/852-icon.jpg" class="lazyload menu-boss-icon" alt="Blood Council"><span class="boss-text">Blood Council</span></a></li><tr><td><li><a id="boss-853"class="Boss" style="white-space:nowrap;" href="#" onclick="return setBoss(853, this)" oncontextmenu="setBoss(853, this)"><img data-src="https://assets.rpglogs.com/img/warcraft/bosses/853-icon.jpg" class="lazyload menu-boss-icon" alt="Queen Lana'thel"><span class="boss-text">Queen Lana'thel</span></a></li><tr><td><li><a id="boss-854"class="Boss" style="white-space:nowrap;" href="#" onclick="return setBoss(854, this)" oncontextmenu="setBoss(854, this)"><img data-src="https://assets.rpglogs.com/img/warcraft/bosses/854-icon.jpg" class="lazyload menu-boss-icon" alt="Valithria Dreamwalker"><span class="boss-text">Valithria Dreamwalker</span></a></li><tr><td><li><a id="boss-855"class="Boss" style="white-space:nowrap;" href="#" onclick="return setBoss(855, this)" oncontextmenu="setBoss(855, this)"><img data-src="https://assets.rpglogs.com/img/warcraft/bosses/855-icon.jpg" class="lazyload menu-boss-icon" alt="Sindragosa"><span class="boss-text">Sindragosa</span></a></li><tr><td><li><a id="boss-856"class="Boss" style="white-space:nowrap;" href="#" onclick="return setBoss(856, this)" oncontextmenu="setBoss(856, this)"><img data-src="https://assets.rpglogs.com/img/warcraft/bosses/856-icon.jpg" class="lazyload menu-boss-icon" alt="The Lich King"><span class="boss-text">The Lich King</span></a></li></tbody></table></div>
</ul>

<li id="filter-difficulty-selection-container"><a class="filter-item" href="#"><span id="filter-difficulty-text"></span></a>
<ul>
<li><a href="#" id="difficulty-4" class="filter-item" onclick="return setDifficulty(4, this)" oncontextmenu="setDifficulty(4, this)">Heroic</a></li>
<li><a href="#" id="difficulty-3" class="filter-item" onclick="return setDifficulty(3, this)" oncontextmenu="setDifficulty(3, this)">Normal</a></li>
</ul>

<li id="filter-size-selection-container"><a class="filter-item" href="#"><span id="filter-size-text"></span></a>
<ul class="levels" id="filter-size-items">
</ul>


<li id="filter-class-selection-container"><a class="filter-item" href="#"><span id="filter-class-text"></span></a>
<ul>
	<li><a href="#" class="parent filter-item" onclick="return setClassAndSpec('Any', 'Any', 'All', this)" oncontextmenu="setClassAndSpec('Any', 'Any', 'All', this)">All Classes</a>
	<ul><li><a href="#" class="filter-item" onclick="return setClassAndSpec('Tanks', 'Any', 'All', this)" oncontextmenu="setClassAndSpec('Tanks', 'Any', 'All', this)">Tanks</a>
    <li><a href="#" class="filter-item" onclick="return setClassAndSpec('DPS', 'Any', 'All', this)" oncontextmenu="setClassAndSpec('DPS', 'Any', 'All', this)">DPS</a>
    <li><a href="#" class="filter-item" onclick="return setClassAndSpec('Healers', 'Any', 'All', this)" oncontextmenu="setClassAndSpec('Healers', 'Any', 'All', this)">Healers</a>
    <li><a href="#" class="filter-item" onclick="return setClassAndSpec('Non-Healers', 'Any', 'All', this)" oncontextmenu="setClassAndSpec('Non-Healers', 'Any', 'All', this)">Tanks and DPS</a>
    </ul></li>
	<li class="separator"></li>
<li><a plural="Death Knights" href="#" id="class-DeathKnight" class="parent DeathKnight" onclick="return setClassAndSpec('DeathKnight', 'Any', 'All', this)" oncontextmenu="setClassAndSpec('DeathKnight', 'Any', \"All\", this)"><img class="menu-actor-icon sprite actor-sprite-DeathKnight" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Death Knight"><span class="actor-text">Death Knight</span></a><ul><li><a plural="specs-warcraft.plural_deathknight_blood" href="#" id="class-DeathKnight-spec-Blood" class="DeathKnight parent" onclick="return setClassAndSpec('DeathKnight', 'Blood', 'All', this)" oncontextmenu="setClassAndSpec('DeathKnight', 'Blood', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-DeathKnight-Blood" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Blood"><span class="actor=text">Blood</span></a><li><a plural="specs-warcraft.plural_deathknight_frost" href="#" id="class-DeathKnight-spec-Frost" class="DeathKnight parent" onclick="return setClassAndSpec('DeathKnight', 'Frost', 'All', this)" oncontextmenu="setClassAndSpec('DeathKnight', 'Frost', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-DeathKnight-Frost" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Frost"><span class="actor=text">Frost</span></a><li><a plural="specs-warcraft.plural_deathknight_unholy" href="#" id="class-DeathKnight-spec-Unholy" class="DeathKnight parent" onclick="return setClassAndSpec('DeathKnight', 'Unholy', 'All', this)" oncontextmenu="setClassAndSpec('DeathKnight', 'Unholy', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-DeathKnight-Unholy" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Unholy"><span class="actor=text">Unholy</span></a><li><a plural="specs-warcraft.plural_deathknight_lichborne" href="#" id="class-DeathKnight-spec-Lichborne" class="DeathKnight parent" onclick="return setClassAndSpec('DeathKnight', 'Lichborne', 'All', this)" oncontextmenu="setClassAndSpec('DeathKnight', 'Lichborne', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-DeathKnight-Lichborne" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Lichborne"><span class="actor=text">Lichborne</span></a><li><a plural="specs-warcraft.plural_deathknight_runeblade" href="#" id="class-DeathKnight-spec-Runeblade" class="DeathKnight parent" onclick="return setClassAndSpec('DeathKnight', 'Runeblade', 'All', this)" oncontextmenu="setClassAndSpec('DeathKnight', 'Runeblade', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-DeathKnight-Runeblade" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Runeblade"><span class="actor=text">Runeblade</span></a><li><a plural="specs-warcraft.plural_deathknight_blooddps" href="#" id="class-DeathKnight-spec-BloodDPS" class="DeathKnight parent" onclick="return setClassAndSpec('DeathKnight', 'BloodDPS', 'All', this)" oncontextmenu="setClassAndSpec('DeathKnight', 'BloodDPS', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-DeathKnight-BloodDPS" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Blood (DPS)"><span class="actor=text">Blood (DPS)</span></a></ul><li><a plural="Druids" href="#" id="class-Druid" class="parent Druid" onclick="return setClassAndSpec('Druid', 'Any', 'All', this)" oncontextmenu="setClassAndSpec('Druid', 'Any', \"All\", this)"><img class="menu-actor-icon sprite actor-sprite-Druid" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Druid"><span class="actor-text">Druid</span></a><ul><li><a plural="specs-warcraft.plural_druid_balance" href="#" id="class-Druid-spec-Balance" class="Druid parent" onclick="return setClassAndSpec('Druid', 'Balance', 'All', this)" oncontextmenu="setClassAndSpec('Druid', 'Balance', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Druid-Balance" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Balance"><span class="actor=text">Balance</span></a><li><a plural="specs-warcraft.plural_druid_feral" href="#" id="class-Druid-spec-Feral" class="Druid parent" onclick="return setClassAndSpec('Druid', 'Feral', 'All', this)" oncontextmenu="setClassAndSpec('Druid', 'Feral', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Druid-Feral" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Feral"><span class="actor=text">Feral</span></a><li><a plural="specs-warcraft.plural_druid_guardian" href="#" id="class-Druid-spec-Guardian" class="Druid parent" onclick="return setClassAndSpec('Druid', 'Guardian', 'All', this)" oncontextmenu="setClassAndSpec('Druid', 'Guardian', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Druid-Guardian" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Guardian"><span class="actor=text">Guardian</span></a><li><a plural="specs-warcraft.plural_druid_restoration" href="#" id="class-Druid-spec-Restoration" class="Druid parent" onclick="return setClassAndSpec('Druid', 'Restoration', 'All', this)" oncontextmenu="setClassAndSpec('Druid', 'Restoration', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Druid-Restoration" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Restoration"><span class="actor=text">Restoration</span></a><li><a plural="specs-warcraft.plural_druid_warden" href="#" id="class-Druid-spec-Warden" class="Druid parent" onclick="return setClassAndSpec('Druid', 'Warden', 'All', this)" oncontextmenu="setClassAndSpec('Druid', 'Warden', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Druid-Warden" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Warden"><span class="actor=text">Warden</span></a></ul><li><a plural="Hunters" href="#" id="class-Hunter" class="parent Hunter" onclick="return setClassAndSpec('Hunter', 'Any', 'All', this)" oncontextmenu="setClassAndSpec('Hunter', 'Any', \"All\", this)"><img class="menu-actor-icon sprite actor-sprite-Hunter" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Hunter"><span class="actor-text">Hunter</span></a><ul><li><a plural="specs-warcraft.plural_hunter_beastmastery" href="#" id="class-Hunter-spec-BeastMastery" class="Hunter parent" onclick="return setClassAndSpec('Hunter', 'BeastMastery', 'All', this)" oncontextmenu="setClassAndSpec('Hunter', 'BeastMastery', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Hunter-BeastMastery" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Beast Mastery"><span class="actor=text">Beast Mastery</span></a><li><a plural="specs-warcraft.plural_hunter_marksmanship" href="#" id="class-Hunter-spec-Marksmanship" class="Hunter parent" onclick="return setClassAndSpec('Hunter', 'Marksmanship', 'All', this)" oncontextmenu="setClassAndSpec('Hunter', 'Marksmanship', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Hunter-Marksmanship" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Marksmanship"><span class="actor=text">Marksmanship</span></a><li><a plural="specs-warcraft.plural_hunter_survival" href="#" id="class-Hunter-spec-Survival" class="Hunter parent" onclick="return setClassAndSpec('Hunter', 'Survival', 'All', this)" oncontextmenu="setClassAndSpec('Hunter', 'Survival', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Hunter-Survival" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Survival"><span class="actor=text">Survival</span></a></ul><li><a plural="Mages" href="#" id="class-Mage" class="parent Mage" onclick="return setClassAndSpec('Mage', 'Any', 'All', this)" oncontextmenu="setClassAndSpec('Mage', 'Any', \"All\", this)"><img class="menu-actor-icon sprite actor-sprite-Mage" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Mage"><span class="actor-text">Mage</span></a><ul><li><a plural="specs-warcraft.plural_mage_arcane" href="#" id="class-Mage-spec-Arcane" class="Mage parent" onclick="return setClassAndSpec('Mage', 'Arcane', 'All', this)" oncontextmenu="setClassAndSpec('Mage', 'Arcane', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Mage-Arcane" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Arcane"><span class="actor=text">Arcane</span></a><li><a plural="specs-warcraft.plural_mage_fire" href="#" id="class-Mage-spec-Fire" class="Mage parent" onclick="return setClassAndSpec('Mage', 'Fire', 'All', this)" oncontextmenu="setClassAndSpec('Mage', 'Fire', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Mage-Fire" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Fire"><span class="actor=text">Fire</span></a><li><a plural="specs-warcraft.plural_mage_frost" href="#" id="class-Mage-spec-Frost" class="Mage parent" onclick="return setClassAndSpec('Mage', 'Frost', 'All', this)" oncontextmenu="setClassAndSpec('Mage', 'Frost', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Mage-Frost" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Frost"><span class="actor=text">Frost</span></a></ul><li><a plural="Paladins" href="#" id="class-Paladin" class="parent Paladin" onclick="return setClassAndSpec('Paladin', 'Any', 'All', this)" oncontextmenu="setClassAndSpec('Paladin', 'Any', \"All\", this)"><img class="menu-actor-icon sprite actor-sprite-Paladin" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Paladin"><span class="actor-text">Paladin</span></a><ul><li><a plural="specs-warcraft.plural_paladin_holy" href="#" id="class-Paladin-spec-Holy" class="Paladin parent" onclick="return setClassAndSpec('Paladin', 'Holy', 'All', this)" oncontextmenu="setClassAndSpec('Paladin', 'Holy', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Paladin-Holy" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Holy"><span class="actor=text">Holy</span></a><li><a plural="specs-warcraft.plural_paladin_protection" href="#" id="class-Paladin-spec-Protection" class="Paladin parent" onclick="return setClassAndSpec('Paladin', 'Protection', 'All', this)" oncontextmenu="setClassAndSpec('Paladin', 'Protection', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Paladin-Protection" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Protection"><span class="actor=text">Protection</span></a><li><a plural="specs-warcraft.plural_paladin_retribution" href="#" id="class-Paladin-spec-Retribution" class="Paladin parent" onclick="return setClassAndSpec('Paladin', 'Retribution', 'All', this)" oncontextmenu="setClassAndSpec('Paladin', 'Retribution', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Paladin-Retribution" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Retribution"><span class="actor=text">Retribution</span></a><li><a plural="specs-warcraft.plural_paladin_justicar" href="#" id="class-Paladin-spec-Justicar" class="Paladin parent" onclick="return setClassAndSpec('Paladin', 'Justicar', 'All', this)" oncontextmenu="setClassAndSpec('Paladin', 'Justicar', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Paladin-Justicar" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Justicar"><span class="actor=text">Justicar</span></a></ul><li><a plural="Priests" href="#" id="class-Priest" class="parent Priest" onclick="return setClassAndSpec('Priest', 'Any', 'All', this)" oncontextmenu="setClassAndSpec('Priest', 'Any', \"All\", this)"><img class="menu-actor-icon sprite actor-sprite-Priest" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Priest"><span class="actor-text">Priest</span></a><ul><li><a plural="specs-warcraft.plural_priest_discipline" href="#" id="class-Priest-spec-Discipline" class="Priest parent" onclick="return setClassAndSpec('Priest', 'Discipline', 'All', this)" oncontextmenu="setClassAndSpec('Priest', 'Discipline', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Priest-Discipline" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Discipline"><span class="actor=text">Discipline</span></a><li><a plural="specs-warcraft.plural_priest_holy" href="#" id="class-Priest-spec-Holy" class="Priest parent" onclick="return setClassAndSpec('Priest', 'Holy', 'All', this)" oncontextmenu="setClassAndSpec('Priest', 'Holy', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Priest-Holy" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Holy"><span class="actor=text">Holy</span></a><li><a plural="specs-warcraft.plural_priest_shadow" href="#" id="class-Priest-spec-Shadow" class="Priest parent" onclick="return setClassAndSpec('Priest', 'Shadow', 'All', this)" oncontextmenu="setClassAndSpec('Priest', 'Shadow', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Priest-Shadow" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Shadow"><span class="actor=text">Shadow</span></a></ul><li><a plural="Rogues" href="#" id="class-Rogue" class="parent Rogue" onclick="return setClassAndSpec('Rogue', 'Any', 'All', this)" oncontextmenu="setClassAndSpec('Rogue', 'Any', \"All\", this)"><img class="menu-actor-icon sprite actor-sprite-Rogue" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Rogue"><span class="actor-text">Rogue</span></a><ul><li><a plural="specs-warcraft.plural_rogue_assassination" href="#" id="class-Rogue-spec-Assassination" class="Rogue parent" onclick="return setClassAndSpec('Rogue', 'Assassination', 'All', this)" oncontextmenu="setClassAndSpec('Rogue', 'Assassination', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Rogue-Assassination" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Assassination"><span class="actor=text">Assassination</span></a><li><a plural="specs-warcraft.plural_rogue_combat" href="#" id="class-Rogue-spec-Combat" class="Rogue parent" onclick="return setClassAndSpec('Rogue', 'Combat', 'All', this)" oncontextmenu="setClassAndSpec('Rogue', 'Combat', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Rogue-Combat" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Combat"><span class="actor=text">Combat</span></a><li><a plural="specs-warcraft.plural_rogue_subtlety" href="#" id="class-Rogue-spec-Subtlety" class="Rogue parent" onclick="return setClassAndSpec('Rogue', 'Subtlety', 'All', this)" oncontextmenu="setClassAndSpec('Rogue', 'Subtlety', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Rogue-Subtlety" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Subtlety"><span class="actor=text">Subtlety</span></a></ul><li><a plural="Shaman" href="#" id="class-Shaman" class="parent Shaman" onclick="return setClassAndSpec('Shaman', 'Any', 'All', this)" oncontextmenu="setClassAndSpec('Shaman', 'Any', \"All\", this)"><img class="menu-actor-icon sprite actor-sprite-Shaman" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Shaman"><span class="actor-text">Shaman</span></a><ul><li><a plural="specs-warcraft.plural_shaman_elemental" href="#" id="class-Shaman-spec-Elemental" class="Shaman parent" onclick="return setClassAndSpec('Shaman', 'Elemental', 'All', this)" oncontextmenu="setClassAndSpec('Shaman', 'Elemental', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Shaman-Elemental" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Elemental"><span class="actor=text">Elemental</span></a><li><a plural="specs-warcraft.plural_shaman_enhancement" href="#" id="class-Shaman-spec-Enhancement" class="Shaman parent" onclick="return setClassAndSpec('Shaman', 'Enhancement', 'All', this)" oncontextmenu="setClassAndSpec('Shaman', 'Enhancement', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Shaman-Enhancement" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Enhancement"><span class="actor=text">Enhancement</span></a><li><a plural="specs-warcraft.plural_shaman_restoration" href="#" id="class-Shaman-spec-Restoration" class="Shaman parent" onclick="return setClassAndSpec('Shaman', 'Restoration', 'All', this)" oncontextmenu="setClassAndSpec('Shaman', 'Restoration', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Shaman-Restoration" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Restoration"><span class="actor=text">Restoration</span></a></ul><li><a plural="Warlocks" href="#" id="class-Warlock" class="parent Warlock" onclick="return setClassAndSpec('Warlock', 'Any', 'All', this)" oncontextmenu="setClassAndSpec('Warlock', 'Any', \"All\", this)"><img class="menu-actor-icon sprite actor-sprite-Warlock" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Warlock"><span class="actor-text">Warlock</span></a><ul><li><a plural="specs-warcraft.plural_warlock_affliction" href="#" id="class-Warlock-spec-Affliction" class="Warlock parent" onclick="return setClassAndSpec('Warlock', 'Affliction', 'All', this)" oncontextmenu="setClassAndSpec('Warlock', 'Affliction', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Warlock-Affliction" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Affliction"><span class="actor=text">Affliction</span></a><li><a plural="specs-warcraft.plural_warlock_demonology" href="#" id="class-Warlock-spec-Demonology" class="Warlock parent" onclick="return setClassAndSpec('Warlock', 'Demonology', 'All', this)" oncontextmenu="setClassAndSpec('Warlock', 'Demonology', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Warlock-Demonology" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Demonology"><span class="actor=text">Demonology</span></a><li><a plural="specs-warcraft.plural_warlock_destruction" href="#" id="class-Warlock-spec-Destruction" class="Warlock parent" onclick="return setClassAndSpec('Warlock', 'Destruction', 'All', this)" oncontextmenu="setClassAndSpec('Warlock', 'Destruction', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Warlock-Destruction" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Destruction"><span class="actor=text">Destruction</span></a></ul><li><a plural="Warriors" href="#" id="class-Warrior" class="parent Warrior" onclick="return setClassAndSpec('Warrior', 'Any', 'All', this)" oncontextmenu="setClassAndSpec('Warrior', 'Any', \"All\", this)"><img class="menu-actor-icon sprite actor-sprite-Warrior" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Warrior"><span class="actor-text">Warrior</span></a><ul><li><a plural="specs-warcraft.plural_warrior_arms" href="#" id="class-Warrior-spec-Arms" class="Warrior parent" onclick="return setClassAndSpec('Warrior', 'Arms', 'All', this)" oncontextmenu="setClassAndSpec('Warrior', 'Arms', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Warrior-Arms" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Arms"><span class="actor=text">Arms</span></a><li><a plural="specs-warcraft.plural_warrior_fury" href="#" id="class-Warrior-spec-Fury" class="Warrior parent" onclick="return setClassAndSpec('Warrior', 'Fury', 'All', this)" oncontextmenu="setClassAndSpec('Warrior', 'Fury', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Warrior-Fury" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Fury"><span class="actor=text">Fury</span></a><li><a plural="specs-warcraft.plural_warrior_protection" href="#" id="class-Warrior-spec-Protection" class="Warrior parent" onclick="return setClassAndSpec('Warrior', 'Protection', 'All', this)" oncontextmenu="setClassAndSpec('Warrior', 'Protection', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Warrior-Protection" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Protection"><span class="actor=text">Protection</span></a><li><a plural="specs-warcraft.plural_warrior_gladiator" href="#" id="class-Warrior-spec-Gladiator" class="Warrior parent" onclick="return setClassAndSpec('Warrior', 'Gladiator', 'All', this)" oncontextmenu="setClassAndSpec('Warrior', 'Gladiator', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Warrior-Gladiator" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Gladiator"><span class="actor=text">Gladiator</span></a><li><a plural="specs-warcraft.plural_warrior_champion" href="#" id="class-Warrior-spec-Champion" class="Warrior parent" onclick="return setClassAndSpec('Warrior', 'Champion', 'All', this)" oncontextmenu="setClassAndSpec('Warrior', 'Champion', 'All', this)"><img class="menu-actor-icon sprite actor-sprite-Warrior-Champion" src="https://assets.rpglogs.com/img/warcraft/icons/actors.jpg?v=25" alt="Champion"><span class="actor=text">Champion</span></a></ul></ul>


<li id="filter-bracket-selection-container"><a class="filter-item" href="#"><span id="filter-bracket-text"></span></a>
<ul class="levels">
	<li><a href="#" class="filter-item" id="bracket-0" onclick="return setBracket(0, this)" oncontextmenu="setBracket(0, this)">All Item Levels</a></li>
	<li class="separator brackets-separator"></li>
<table cellpadding=0 cellspacing=0 class="brackets-table"><tr><td nowrap><a href="#" class="filter-item" onclick="return setBracket(1, this)" oncontextmenu="setBracket(1, this)" id="bracket-1">175-177</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(2, this)" oncontextmenu="setBracket(2, this)" id="bracket-2">178-180</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(3, this)" oncontextmenu="setBracket(3, this)" id="bracket-3">181-183</a></td><tr><td nowrap><a href="#" class="filter-item" onclick="return setBracket(4, this)" oncontextmenu="setBracket(4, this)" id="bracket-4">184-186</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(5, this)" oncontextmenu="setBracket(5, this)" id="bracket-5">187-189</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(6, this)" oncontextmenu="setBracket(6, this)" id="bracket-6">190-192</a></td><tr><td nowrap><a href="#" class="filter-item" onclick="return setBracket(7, this)" oncontextmenu="setBracket(7, this)" id="bracket-7">193-195</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(8, this)" oncontextmenu="setBracket(8, this)" id="bracket-8">196-198</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(9, this)" oncontextmenu="setBracket(9, this)" id="bracket-9">199-201</a></td><tr><td nowrap><a href="#" class="filter-item" onclick="return setBracket(10, this)" oncontextmenu="setBracket(10, this)" id="bracket-10">202-204</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(11, this)" oncontextmenu="setBracket(11, this)" id="bracket-11">205-207</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(12, this)" oncontextmenu="setBracket(12, this)" id="bracket-12">208-210</a></td><tr><td nowrap><a href="#" class="filter-item" onclick="return setBracket(13, this)" oncontextmenu="setBracket(13, this)" id="bracket-13">211-213</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(14, this)" oncontextmenu="setBracket(14, this)" id="bracket-14">214-216</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(15, this)" oncontextmenu="setBracket(15, this)" id="bracket-15">217-219</a></td><tr><td nowrap><a href="#" class="filter-item" onclick="return setBracket(16, this)" oncontextmenu="setBracket(16, this)" id="bracket-16">220-222</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(17, this)" oncontextmenu="setBracket(17, this)" id="bracket-17">223-225</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(18, this)" oncontextmenu="setBracket(18, this)" id="bracket-18">226-228</a></td><tr><td nowrap><a href="#" class="filter-item" onclick="return setBracket(19, this)" oncontextmenu="setBracket(19, this)" id="bracket-19">229-231</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(20, this)" oncontextmenu="setBracket(20, this)" id="bracket-20">232-234</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(21, this)" oncontextmenu="setBracket(21, this)" id="bracket-21">235-237</a></td><tr><td nowrap><a href="#" class="filter-item" onclick="return setBracket(22, this)" oncontextmenu="setBracket(22, this)" id="bracket-22">238-240</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(23, this)" oncontextmenu="setBracket(23, this)" id="bracket-23">241-243</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(24, this)" oncontextmenu="setBracket(24, this)" id="bracket-24">244-246</a></td><tr><td nowrap><a href="#" class="filter-item" onclick="return setBracket(25, this)" oncontextmenu="setBracket(25, this)" id="bracket-25">247-249</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(26, this)" oncontextmenu="setBracket(26, this)" id="bracket-26">250-252</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(27, this)" oncontextmenu="setBracket(27, this)" id="bracket-27">253-255</a></td><tr><td nowrap><a href="#" class="filter-item" onclick="return setBracket(28, this)" oncontextmenu="setBracket(28, this)" id="bracket-28">256-258</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(29, this)" oncontextmenu="setBracket(29, this)" id="bracket-29">259-261</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(30, this)" oncontextmenu="setBracket(30, this)" id="bracket-30">262-264</a></td><tr><td nowrap><a href="#" class="filter-item" onclick="return setBracket(31, this)" oncontextmenu="setBracket(31, this)" id="bracket-31">265-267</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(32, this)" oncontextmenu="setBracket(32, this)" id="bracket-32">268-270</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(33, this)" oncontextmenu="setBracket(33, this)" id="bracket-33">271-273</a></td><tr><td nowrap><a href="#" class="filter-item" onclick="return setBracket(34, this)" oncontextmenu="setBracket(34, this)" id="bracket-34">274-276</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(35, this)" oncontextmenu="setBracket(35, this)" id="bracket-35">277-279</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(36, this)" oncontextmenu="setBracket(36, this)" id="bracket-36">280-282</a></td><tr><td nowrap><a href="#" class="filter-item" onclick="return setBracket(37, this)" oncontextmenu="setBracket(37, this)" id="bracket-37">283-285</a></td><td nowrap><a href="#" class="filter-item" onclick="return setBracket(38, this)" oncontextmenu="setBracket(38, this)" id="bracket-38">286+</a></td></table>	<li class="separator item-level-options"></li>
	<li class="item-level-options" id="specific-item-level-selection"><a class="filter-item" href="#">Enter a Specific Item Level: <form style="display:inline" action="/" onsubmit="setItemLevel(document.getElementById('item-level-field').value, parentNode); parentNode.click(); return false"><input onclick="return false" id="item-level-field" type=text size=3></form></a></li>
	<li class="item-level-options"><a class="filter-item" href="#" onclick="return toggleItemLevelDisplay(this)" oncontextmenu="toggleItemLevelDisplay(this)" id="item-level-display-menu">Show Item Level Scaling</a></li>
</ul>

<li id="filter-kills-selection-container"><a class="filter-item" href="#"><span id="filter-kills-text"></span></a>
<ul>
		<li><a href="#" id="kills-0" class="filter-item" onclick="return setKills(0, this)" oncontextmenu="setKills(0, this)">All Kills and Wipes</a></li>
		<li><a href="#" id="kills-1" class="filter-item" onclick="return setKills(1, this)" oncontextmenu="setKills(1, this)">All Wipes</a></li>
		<li><a href="#" id="kills-2" class="filter-item" onclick="return setKills(2, this)" oncontextmenu="setKills(2, this)">All Kills</a></li>
</ul>

</ul>
<ul id="controls-menubar" class="sm sm-black filter-bar-menu">
<li id="filter-dataset-selection-container"><a class="filter-item" href="#"><span id="filter-dataset-text"></span></a>
<ul>
		<li><a href="#" id="metric-dataset-1000" class="filter-item" onclick="return setDataSet(1000, this)" oncontextmenu="setDataSet(1000, this)">All Percentiles</a></li>
		<li class="separator"></li>
		<li><a href="#" id="metric-dataset-100" class="filter-item" onclick="return setDataSet(100, this)" oncontextmenu="setDataSet(100, this)">Max</a></li>
		<li><a href="#" id="metric-dataset-99" class="filter-item" onclick="return setDataSet(99, this)" oncontextmenu="setDataSet(99, this)">99th Percentile</a></li>
		<li><a href="#" id="metric-dataset-95" class="filter-item" onclick="return setDataSet(95, this)" oncontextmenu="setDataSet(95, this)">95th Percentile</a></li>
		<li><a href="#" id="metric-dataset-90" class="filter-item" onclick="return setDataSet(90, this)" oncontextmenu="setDataSet(90, this)">90th Percentile</a></li>
		<li><a href="#" id="metric-dataset-80" class="filter-item" onclick="return setDataSet(80, this)" oncontextmenu="setDataSet(80, this)">80th Percentile</a></li>
		<li><a href="#" id="metric-dataset-75" class="filter-item" onclick="return setDataSet(75, this)" oncontextmenu="setDataSet(75, this)">75th Percentile</a></li>
		<li><a href="#" id="metric-dataset-70" class="filter-item" onclick="return setDataSet(70, this)" oncontextmenu="setDataSet(70, this)">70th Percentile</a></li>
		<li><a href="#" id="metric-dataset-60" class="filter-item" onclick="return setDataSet(60, this)" oncontextmenu="setDataSet(60, this)">60th Percentile</a></li>
		<li><a href="#" id="metric-dataset-50" class="filter-item" onclick="return setDataSet(50, this)" oncontextmenu="setDataSet(50, this)">50th Percentile</a></li>
		<li><a href="#" id="metric-dataset-40" class="filter-item" onclick="return setDataSet(40, this)" oncontextmenu="setDataSet(40, this)">40th Percentile</a></li>
		<li><a href="#" id="metric-dataset-30" class="filter-item" onclick="return setDataSet(30, this)" oncontextmenu="setDataSet(30, this)">30th Percentile</a></li>
		<li><a href="#" id="metric-dataset-25" class="filter-item" onclick="return setDataSet(25, this)" oncontextmenu="setDataSet(25, this)">25th Percentile</a></li>
		<li><a href="#" id="metric-dataset-20" class="filter-item" onclick="return setDataSet(20, this)" oncontextmenu="setDataSet(20, this)">20th Percentile</a></li>
		<li><a href="#" id="metric-dataset-10" class="filter-item" onclick="return setDataSet(10, this)" oncontextmenu="setDataSet(10, this)">10th Percentile</a></li>
		<li><a href="#" id="metric-dataset-0" class="filter-item" onclick="return setDataSet(0, this)" oncontextmenu="setDataSet(0, this)">Min</a></li>
</ul>

<li id="filter-alternate-dataset-selection-container"><a class="filter-item" href="#"><span id="filter-alternate-dataset-text"></span></a>
<ul>
		<li><a href="#" id="metric-alternate-dataset-90" class="filter-item" onclick="return setDataSet(90, this)" oncontextmenu="setDataSet(90, this)">Top 10% of Players</a></li>
		<li><a href="#" id="metric-alternate-dataset-75" class="filter-item" onclick="return setDataSet(75, this)" oncontextmenu="setDataSet(75, this)">Top 25% of Players</a></li>
		<li><a href="#" id="metric-alternate-dataset-50" class="filter-item" onclick="return setDataSet(50, this)" oncontextmenu="setDataSet(50, this)">Top 50% of Players</a></li>
		<li><a href="#" id="metric-alternate-dataset-25" class="filter-item" onclick="return setDataSet(25, this)" oncontextmenu="setDataSet(25, this)">Top 75% of Players</a></li>
		<li><a href="#" id="metric-alternate-dataset-0" class="filter-item" onclick="return setDataSet(0, this)" oncontextmenu="setDataSet(0, this)">All Players</a></li>		
</ul>

<li id="filter-sample-selection-container"><a class="filter-item" href="#"><span id="filter-sample-text"></span></a>
<ul>

		<li><a href="#" id="metric-sample-1-14" class="filter-item sample-item sample-item-partition-1" onclick="return setSample(14, this)" oncontextmenu=" setSample(14, this)">Over a Range of 2 Weeks</a></li>
		<li><a href="#" id="metric-sample-1-7" class="filter-item sample-item sample-item-partition-1" onclick="return setSample(7, this)" oncontextmenu=" setSample(7, this)">Over a Range of 1 Week</a></li>
		<li><a href="#" id="metric-sample-1-1" class="filter-item sample-item sample-item-partition-1" onclick="return setSample(1, this)" oncontextmenu=" setSample(1, this)">Over a Range of 1 Day</a></li>



		<li><a href="#" id="metric-sample-2-14" class="filter-item sample-item sample-item-partition-2" onclick="return setSample(14, this)" oncontextmenu=" setSample(14, this)">Over a Range of 2 Weeks</a></li>
		<li><a href="#" id="metric-sample-2-7" class="filter-item sample-item sample-item-partition-2" onclick="return setSample(7, this)" oncontextmenu=" setSample(7, this)">Over a Range of 1 Week</a></li>
		<li><a href="#" id="metric-sample-2-1" class="filter-item sample-item sample-item-partition-2" onclick="return setSample(1, this)" oncontextmenu=" setSample(1, this)">Over a Range of 1 Day</a></li>



		<li><a href="#" id="metric-sample-3-14" class="filter-item sample-item sample-item-partition-3" onclick="return setSample(14, this)" oncontextmenu=" setSample(14, this)">Over a Range of 2 Weeks</a></li>
		<li><a href="#" id="metric-sample-3-7" class="filter-item sample-item sample-item-partition-3" onclick="return setSample(7, this)" oncontextmenu=" setSample(7, this)">Over a Range of 1 Week</a></li>
		<li><a href="#" id="metric-sample-3-1" class="filter-item sample-item sample-item-partition-3" onclick="return setSample(1, this)" oncontextmenu=" setSample(1, this)">Over a Range of 1 Day</a></li>



		<li><a href="#" id="metric-sample-4-14" class="filter-item sample-item sample-item-partition-4" onclick="return setSample(14, this)" oncontextmenu=" setSample(14, this)">Over a Range of 2 Weeks</a></li>
		<li><a href="#" id="metric-sample-4-7" class="filter-item sample-item sample-item-partition-4" onclick="return setSample(7, this)" oncontextmenu=" setSample(7, this)">Over a Range of 1 Week</a></li>
		<li><a href="#" id="metric-sample-4-1" class="filter-item sample-item sample-item-partition-4" onclick="return setSample(1, this)" oncontextmenu=" setSample(1, this)">Over a Range of 1 Day</a></li>



		<li><a href="#" id="metric-sample-5-14" class="filter-item sample-item sample-item-partition-5" onclick="return setSample(14, this)" oncontextmenu=" setSample(14, this)">Over a Range of 2 Weeks</a></li>
		<li><a href="#" id="metric-sample-5-7" class="filter-item sample-item sample-item-partition-5" onclick="return setSample(7, this)" oncontextmenu=" setSample(7, this)">Over a Range of 1 Week</a></li>
		<li><a href="#" id="metric-sample-5-1" class="filter-item sample-item sample-item-partition-5" onclick="return setSample(1, this)" oncontextmenu=" setSample(1, this)">Over a Range of 1 Day</a></li>


</ul>

<li id="filter-timespan-selection-container"><a class="filter-item" href="#"><span id="filter-timespan-text"></span></a>
<ul>
		<li><a href="#" id="metric-timespan-1" class="filter-item" onclick="return setTimespan(1, this)" oncontextmenu=" setTimespan(1, this)">Current Standings</a></li>
		<li><a href="#" id="metric-timespan-60" class="filter-item" onclick="return setTimespan(60, this)" oncontextmenu=" setTimespan(60, this)">Going Back the Last 2 Months</a></li>
		<li><a href="#" id="metric-timespan-1000" class="filter-item" onclick="return setTimespan(1000, this)" oncontextmenu=" setTimespan(1000, this)">Going Back the Entire Tier</a></li>
</ul>


<li id="filter-aggregate-selection-container"><a class="filter-item" href="#"><span id="filter-aggregate-text"></span></a>
<ul>
		<li><a href="#" id="aggregate-normalized" class="filter-item" onclick="return setAggregate('normalized', this)" oncontextmenu="setAggregate('normalized', this)">Aggregate Using Normalized Scores</a></li>
		<li><a href="#" id="aggregate-amount" class="filter-item" onclick="return setAggregate('amount', this)" oncontextmenu="setAggregate('amount', this)">Aggregate Using Per Second Amounts</a></li>
</ul>


<li id="filter-region-selection-container"><a class="filter-item" href="#"><span id="filter-region-text"></span></a>
<ul>
<li><a href="#" id="region-1" class="filter-item" onclick="return setRegion(1, this)" oncontextmenu="setRegion(1, this)">Phase 1</a>

<li><a href="#" id="region-2" class="filter-item" onclick="return setRegion(2, this)" oncontextmenu="setRegion(2, this)">Phase 2</a>

<li><a href="#" id="region-3" class="filter-item" onclick="return setRegion(3, this)" oncontextmenu="setRegion(3, this)">Phase 3</a>

<li><a href="#" id="region-4" class="filter-item" onclick="return setRegion(4, this)" oncontextmenu="setRegion(4, this)">Phase 4</a>

<li><a href="#" id="region-5" class="filter-item" onclick="return setRegion(5, this)" oncontextmenu="setRegion(5, this)">Phase 4 (Buff)</a>

</ul>


</ul>

<div id="filter-talents-bar" class="tier-bar">

<a href="#" class="tier-tab" id="talent-tab-0" onclick="return setTier(0, this)" oncontextmenu="setTier(0, this)">
	All Talents
</a>

<a href="#" class="tier-tab" id="talent-tab-1" onclick="return setTier(1, this)" oncontextmenu="setTier(1, this)">
	Talent Row 1
</a>
<a href="#" class="tier-tab" id="talent-tab-2" onclick="return setTier(2, this)" oncontextmenu="setTier(2, this)">
	Talent Row 2
</a>
<a href="#" class="tier-tab" id="talent-tab-3" onclick="return setTier(3, this)" oncontextmenu="setTier(3, this)">
	Talent Row 3
</a>
<a href="#" class="tier-tab" id="talent-tab-4" onclick="return setTier(4, this)" oncontextmenu="setTier(4, this)">
	Talent Row 4
</a>
<a href="#" class="tier-tab" id="talent-tab-5" onclick="return setTier(5, this)" oncontextmenu="setTier(5, this)">
	Talent Row 5
</a>
<a href="#" class="tier-tab" id="talent-tab-6" onclick="return setTier(6, this)" oncontextmenu="setTier(6, this)">
	Talent Row 6
</a>
<a href="#" class="tier-tab" id="talent-tab-7" onclick="return setTier(7, this)" oncontextmenu="setTier(7, this)">
	Talent Row 7
</a>
</div>

<div id="filter-powers-bar" class="tier-bar">
	
<a href="#" class="tier-tab" id="power-tab-0" onclick="return setTier(0, this)" oncontextmenu="setTier(0, this)">
	All Azerite Powers
</a>

<a href="#" class="tier-tab" id="power-tab-3" onclick="return setTier(3, this)" oncontextmenu="setTier(3, this)">
	Azerite Tier 3
</a>
<a href="#" class="tier-tab" id="power-tab-2" onclick="return setTier(2, this)" oncontextmenu="setTier(2, this)">
	Azerite Tier 2
</a>
<a href="#" class="tier-tab" id="power-tab-1" onclick="return setTier(1, this)" oncontextmenu="setTier(1, this)">
	Azerite Tier 1
</a>
</div>

<div id="filter-essences-bar" class="tier-bar">
	
<a href="#" class="tier-tab" id="essence-tab-0" onclick="return setTier(0, this)" oncontextmenu="setTier(0, this)">
	All Essence Powers
</a>

<a href="#" class="tier-tab" id="essence-tab-1" onclick="return setTier(1, this)" oncontextmenu="setTier(1, this)">
	Major Essence Powers
</a>

<a href="#" class="tier-tab" id="essence-tab-2" onclick="return setTier(2, this)" oncontextmenu="setTier(2, this)">
	Minor Essence Powers
</a>

</div>

<div style="margin:10px">
<div id="graph-wrapper" style="min-height:600px">
<div id="event-killer" style="display:none"></div>
<div id="graph-loading" style='display:none;'><p>Loading Data...</p><p><span class="zmdi zmdi-spinner zmdi-hc-spin" style="color:white; font-size:36px"></span></p></div>

<div id="right-vertical-banner" class="side-rail-ads">
    <div id="ad-side-rail-atf">
            <div id="ad-side-rail-atf__playwire-container"></div>
<script async>
    attachToDom(
        '#ad-side-rail-atf__playwire-container',
        'PlaywireAd',
        {"id":"ad-side-rail-atf__playwire","type":"sky_atf","fallbackImageUrl":"https:\/\/assets.rpglogs.com\/img\/warcraft\/fallback\/sidebar.png?v=1","minimumRefreshThresholdSeconds":0},
        null,
        null,
        true
    );
</script>
    </div>
    <div id="ad-side-rail-btf">
            <div id="ad-side-rail-btf__playwire-container"></div>
<script async>
    attachToDom(
        '#ad-side-rail-btf__playwire-container',
        'PlaywireAd',
        {"id":"ad-side-rail-btf__playwire","type":"med_rect_btf","fallbackImageUrl":"","minimumRefreshThresholdSeconds":0},
        null,
        null,
        true
    );
</script>
    </div>
</div>

<div id="table-container">
</div> 
</div>
</div>

<script>
window.googleAnalyticsViewModel.sendPageViewOnContentLoaded = false;
window.displayAdsOnContentLoaded = false;
$(window).trigger('hashchange')
</script>

</div>


<div id="footer-spacer" class="unsubscribed"></div>

<div id="footer">

    
        <div id="rich-media">
            <div id="rich-media--video__playwire-container"></div>
<script async>
    attachToDom(
        '#rich-media--video__playwire-container',
        'PlaywireAd',
        {"id":"rich-media--video__playwire","type":"trendi_video","fallbackImageUrl":"","minimumRefreshThresholdSeconds":0},
        null,
        null,
        true
    );
</script>
        <div id="rich-media--bottom-rail__playwire-container"></div>
<script async>
    attachToDom(
        '#rich-media--bottom-rail__playwire-container',
        'PlaywireAd',
        {"id":"rich-media--bottom-rail__playwire","type":"bottom_rail","fallbackImageUrl":"","minimumRefreshThresholdSeconds":0},
        null,
        null,
        true
    );
</script>
            </div>
    <div id="bottom-banner">
            <div id="bottom-banner__playwire-container"></div>
<script async>
    attachToDom(
        '#bottom-banner__playwire-container',
        'PlaywireAd',
        {"id":"bottom-banner__playwire","type":"leaderboard_btf","fallbackImageUrl":"https:\/\/assets.rpglogs.com\/img\/warcraft\/fallback\/banner.png?v=1","minimumRefreshThresholdSeconds":0},
        null,
        null,
        true
    );
</script>
    </div>
    
<div id="footer-container"></div>
<script>
    attachToDom(
        '#footer-container',
        'Footer',
        {"privacyPolicyUrl":"https:\/\/classic.warcraftlogs.com\/help\/privacy","careersUrl":"https:\/\/classic.warcraftlogs.com\/careers","backgroundImageUrl":"https:\/\/assets.rpglogs.com\/img\/warcraft\/footer-bg_classic.jpg?v=4","headerTitle":{"backgroundImageUrl":"","logoImageUrl":"https:\/\/assets.rpglogs.com\/img\/warcraft\/header-logo.png","logoIsRounded":false,"isSlim":false,"faction":null,"textPartOne":"Warcraft","textPartTwo":"Logs Classic","textPartOneTopColor":"rgb(45,170,200)","textPartOneBottomColor":"rgb(0,140,195)","textPartTwoTopColor":"rgb(230,230,230)","textPartTwoBottomColor":"rgb(190,190,190)","partTwoOverflowCutUnder380px":"Classic","isFooterSize":true,"href":"\/","logoVerticalOffsetInPx":0},"latestArticles":[{"id":152,"url":"https:\/\/www.archon.gg\/classic-wrath\/articles\/news\/wrath-edition-new-build-guides-and-tier-lists-on-archon","imageUrl":"https:\/\/assets.rpglogs.com\/cms\/Wrath_Builds_b2f8cee24f.jpg","thumbnailUrl":"https:\/\/assets.rpglogs.com\/cms\/thumbnail_Wrath_Builds_b2f8cee24f.jpg","title":"Wrath Edition: New Build Guides and Tier Lists on Archon","description":"Archon is excited to announce WoW Classic Wrath support for its first tool\u2014 popularity based builds and tier lists.","categoryName":"News","categoryUrl":"https:\/\/www.archon.gg\/classic-wrath\/articles\/news","timestamp":1705492209000,"isPinned":false,"status":"New"},{"id":151,"url":"https:\/\/www.archon.gg\/classic-wrath\/articles\/news\/wipefest-ruby-sanctum-halion","imageUrl":"https:\/\/assets.rpglogs.com\/cms\/Wipefest_Ruby_Sanctum_4618c6e613.jpg","thumbnailUrl":"https:\/\/assets.rpglogs.com\/cms\/thumbnail_Wipefest_Ruby_Sanctum_4618c6e613.jpg","title":"Wipefest: Ruby Sanctum (Halion)","description":"Wipefest has full support for Halion in Ruby Sanctum on Normal and Heroic difficulties.","categoryName":"News","categoryUrl":"https:\/\/www.archon.gg\/classic-wrath\/articles\/news","timestamp":1704990238000,"isPinned":false,"status":"New"},{"id":144,"url":"https:\/\/www.archon.gg\/classic-wrath\/articles\/news\/season-of-discovery-on-warcraft-logs","imageUrl":"https:\/\/assets.rpglogs.com\/cms\/BFD_75fb4c3b9d.jpg","thumbnailUrl":"https:\/\/assets.rpglogs.com\/cms\/thumbnail_BFD_75fb4c3b9d.jpg","title":"Season of Discovery on Warcraft Logs","description":"Read more about Season of Discovery on Warcraft Logs in this article.","categoryName":"News","categoryUrl":"https:\/\/www.archon.gg\/classic-wrath\/articles\/news","timestamp":1702932095000,"isPinned":false,"status":null},{"id":142,"url":"https:\/\/www.archon.gg\/classic-wrath\/articles\/news\/wipefest-icecrown-citadel","imageUrl":"https:\/\/assets.rpglogs.com\/cms\/ICC_1_a6b4d7823e.jpg","thumbnailUrl":"https:\/\/assets.rpglogs.com\/cms\/thumbnail_ICC_1_a6b4d7823e.jpg","title":"Wipefest: Icecrown Citadel","description":"Wipefest has full support for Icecrown Citadel on Normal and Heroic difficulties for both 10 and 25 players.","categoryName":"News","categoryUrl":"https:\/\/www.archon.gg\/classic-wrath\/articles\/news","timestamp":1698321423000,"isPinned":false,"status":null},{"id":141,"url":"https:\/\/www.archon.gg\/classic-wrath\/articles\/news\/introducing-archon","imageUrl":"https:\/\/assets.rpglogs.com\/cms\/archon_announcement_edc166a5d7.jpg","thumbnailUrl":"https:\/\/assets.rpglogs.com\/cms\/thumbnail_archon_announcement_edc166a5d7.jpg","title":"Introducing Archon","description":"RPGLogs, the company behind Warcraft Logs, FF Logs, ESO Logs, and more, is rebranding its umbrella company to Archon.","categoryName":"News","categoryUrl":"https:\/\/www.archon.gg\/classic-wrath\/articles\/news","timestamp":1695913164000,"isPinned":false,"status":null},{"id":137,"url":"https:\/\/www.archon.gg\/classic-wrath\/articles\/news\/wrath-phase-4-update","imageUrl":"https:\/\/assets.rpglogs.com\/cms\/icc_loading_50d0999e31.jpg","thumbnailUrl":"https:\/\/assets.rpglogs.com\/cms\/thumbnail_icc_loading_50d0999e31.jpg","title":"Wrath Phase 4 Update","description":"Read about the Progress, Boss Parsing, and Speedrun rules for the upcoming ICC raid and Phase 4 in Wrath Classic on Warcraft Logs. ","categoryName":"News","categoryUrl":"https:\/\/www.archon.gg\/classic-wrath\/articles\/news","timestamp":1695901470000,"isPinned":false,"status":null},{"id":60,"url":"https:\/\/www.archon.gg\/classic-wrath\/articles\/news\/multiple-report-analysis","imageUrl":"https:\/\/assets.rpglogs.com\/cms\/mra5_0b78669997.jpg","thumbnailUrl":"https:\/\/assets.rpglogs.com\/cms\/thumbnail_mra5_0b78669997.jpg","title":"Multiple Report Analysis","description":"Find out how to analyze several hundred pulls from different reports with the new <SiteTitle>' Multiple Report Analysis subscriber feature.","categoryName":"News","categoryUrl":"https:\/\/www.archon.gg\/classic-wrath\/articles\/news","timestamp":1658242273000,"isPinned":true,"status":"Featured"}],"toolLinks":[{"url":"\/client\/download","title":"Download Client","iconType":"font","iconSrc":"download","openInNewTab":false},{"url":"https:\/\/wowanalyzer.com","title":"WoWAnalyzer","iconType":"image","iconSrc":"https:\/\/assets.rpglogs.com\/img\/warcraft\/wowa-logo-80px.png","openInNewTab":true},{"url":"https:\/\/www.wipefest.gg\/?gameVersion=warcraft-classic","title":"Wipefest","iconType":"image","iconSrc":"https:\/\/assets.rpglogs.com\/img\/warcraft\/wipefest-logo-80px.png","openInNewTab":true},{"url":"\/recruitment","title":"Recruitment","iconType":"font","iconSrc":"accounts","openInNewTab":false}],"raidLinks":[{"url":"\/zone\/statistics\/1020","title":"Statistics","iconType":null,"iconSrc":null,"openInNewTab":false},{"url":"\/zone\/rankings\/1020","title":"Rankings","iconType":null,"iconSrc":null,"openInNewTab":false},{"url":"\/zone\/rankings\/1020#metric=progress","title":"Progress","iconType":null,"iconSrc":null,"openInNewTab":false},{"url":"\/zone\/reports?zone=1020","title":"All Reports","iconType":null,"iconSrc":null,"openInNewTab":false}],"ourWebsiteLinks":[{"url":"https:\/\/www.archon.gg","title":"Archon","iconType":null,"iconSrc":null,"openInNewTab":false},{"url":"https:\/\/www.warcraftlogs.com","title":"WoW Retail","iconType":null,"iconSrc":null,"openInNewTab":false},{"url":"https:\/\/classic.warcraftlogs.com","title":"WoW Classic","iconType":null,"iconSrc":null,"openInNewTab":false},{"url":"https:\/\/vanilla.warcraftlogs.com","title":"WoW Vanilla","iconType":null,"iconSrc":null,"openInNewTab":false},{"url":"https:\/\/www.fflogs.com","title":"Final Fantasy XIV","iconType":null,"iconSrc":null,"openInNewTab":false},{"url":"https:\/\/www.esologs.com","title":"Elder Scrolls Online","iconType":null,"iconSrc":null,"openInNewTab":false},{"url":"https:\/\/www.swtorlogs.com","title":"SWTOR","iconType":null,"iconSrc":null,"openInNewTab":false}],"resourceLinks":[{"url":"https:\/\/forums.combatlogforums.com","title":"Forums","iconType":null,"iconSrc":null,"openInNewTab":false},{"url":"https:\/\/www.patreon.com\/warcraftlogs","title":"Subscribe","iconType":null,"iconSrc":null,"openInNewTab":false},{"url":"https:\/\/www.archon.gg\/classic-wrath\/articles\/help\/getting-started","title":"Help and Info","iconType":null,"iconSrc":null,"openInNewTab":false},{"url":"https:\/\/www.archon.gg\/classic-wrath\/articles\/help\/rpg-logs-branding-information","title":"Brand","iconType":null,"iconSrc":null,"openInNewTab":false}],"labels":{"contactUsText":"Contact Us","privacyPolicyText":"Privacy Policy","careersText":"Careers","latestArticleText":"Latest Article","resourcesListLabel":"Resources","websitesListLabel":"Our Websites","toolsListLabel":"Our Tools","latestRaidListLabel":"Latest Raid"},"copyrightText":"\u00a9 2013-2024 Warcraft Logs","twitterUrl":"WarcraftLogs","discordUrl":"https:\/\/discord.gg\/5ebPJSsy5y","patreonUrl":"https:\/\/www.patreon.com\/warcraftlogs","pageWidth":"fill-width","extraSpaceUnderLogo":0},
        {
            game: {"id":0,"area":2,"locales":["de","en","es","fr","it","br","ru","ko","tw","cn"],"fullName":"World of Warcraft","lowercaseName":"warcraft","siteTitle":"Warcraft Logs Classic","siteLogoImageUrl":"https:\/\/assets.rpglogs.com\/img\/warcraft\/favicon.png?v=2","headerLogoUrl":"https:\/\/assets.rpglogs.com\/img\/warcraft\/header-logo.png","baseUrl":"https:\/\/classic.warcraftlogs.com","archonGameSlug":"classic-wrath","actorsSprite":"https:\/\/assets.rpglogs.com\/img\/warcraft\/icons\/actors.jpg?v=25","actorsSecondarySprite":"https:\/\/assets.rpglogs.com\/img\/warcraft\/icons\/secondary\/actors.jpg?v=1","actorsLargeIconsPath":"https:\/\/assets.rpglogs.com\/img\/warcraft\/icons\/large","articlesBaseUrl":"https:\/\/www.archon.gg\/classic-wrath\/articles","assetServerBaseUrl":"https:\/\/assets.rpglogs.com","abilityExternalSitePath":"https:\/\/www.wowhead.com\/wotlk\/spell=","buffExternalSitePath":"https:\/\/www.wowhead.com\/wotlk\/spell=","itemExternalSitePath":"https:\/\/www.wowhead.com\/wotlk\/item=","itemSetExternalSitePath":"https:\/\/www.wowhead.com\/wotlk\/item-set=","npcExternalSitePath":"https:\/\/www.wowhead.com\/wotlk\/npc=","tooltipLibraryPath":"\/\/wow.zamimg.com\/widgets\/power.js","abilityTooltipEndpoint":"https:\/\/classic.warcraftlogs.com\/ability\/{id}\/tooltip","encounterIconExtension":"jpg","headerTextPartOneTopColor":"rgb(45,170,200)","headerTextPartOneBottomColor":"rgb(0,140,195)","headerTextPartTwoTopColor":"rgb(230,230,230)","headerTextPartTwoBottomColor":"rgb(190,190,190)"},
        },
        null,
        true
    );
</script>
</div>
</div>




</body>
</html>

