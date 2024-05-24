(function() { function bxBootstrap() {
	var re = /bot|crawl|slurp|spider|mediapartners|headlesschrome|snap-prefetch|remotasks|woorank|uptime\.com|facebookexternalhit|facebookcatalog/i;
	if (re.test(navigator.userAgent) || navigator.userAgent == '') {
		return;
	}

	if (!(window.bouncex&&bouncex.website)) {
		var pushedData = [];
		if(window.bouncex && bouncex.push && bouncex.length){
			pushedData = bouncex;
		}
		window.bouncex = {};
		bouncex.pushedData = pushedData;
		bouncex.website = {"id":5491,"name":"Salon | Snopes.com","cookie_name":"bounceClientVisit5491","domain":"snopes.com","ct":"fp_local_storage","ally":0,"ei":0,"tcjs":"","cjs":"\nbouncex.recirc.addSettings({\n    enabled: true,\n    feedFormat: 'xml',\n    feedUrl: 'https://www.snopes.com/latest/feed-full/',\n    responseParser: function(response) {\n        var $doc = jQuery(response);\n        var $articles = $doc.find('item');\n        var articles = [];\n \n        $articles.each(function() {\n            var $article = jQuery(this);\n            var headline = $article.find('title').text();\n            var link = $article.find('link').text() + '?utm_source=wunderkind';\n            var image = $article.find('media\\\\:content').attr('url');\n \n            var article = {\n                headline: headline,\n                link: link,\n                image: image\n            };\n \n            articles.push(article);\n        });\n \n        return articles;\n    }\n});\n \nbouncex.recirc.init();\n\n","force_https":false,"waypoints":false,"content_width":900,"gai":"","swids":"","sd":0,"ljq":"auto","campaign_id":0,"is_preview":false,"aco":{"first_party_limit":"3500","local_storage":"1"},"cmp":{"gdpr":0,"gmp":0,"whitelist_check":0},"burls":[],"ple":false,"fbe":true,"mas":2,"map":1,"gar":true,"ete":2,"ettm":true,"etjs":"","dge":true,"bxidLoadFirst":false,"pie":false,"cme":false,"gbi_enabled":1,"bpush":false,"pt":null,"els":{"infeed":"article > p","masthead":"#mobile_nav_menu + .category_row_wrapper, #new_navbar_wrapper"},"vars":[{"name":"blocker_modal_loaded","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"bouncex.utils.cookies.read('_pc_blocker_modal_loaded');","trigger":"pageload"},{"name":"backfill_deployment_eligible","polling":"all","persist":"visit","page_types":[],"testmode":true,"default":"true","code":"(function() {\n    for (var i = 0; i < bouncex.eventLog.length; i++) {\n        if (bouncex.eventLog[i].name === 'bid_selected') {\n    \t\treturn false;\n        }\n    }\n    return true;\n})();","trigger":"pageload"}],"dgu":"pixel.cdnwidget.com","dgp":false,"ba":{"enabled":0,"fbte":0},"biu":"assets.bounceexchange.com","bau":"api.bounceexchange.com","beu":"events.bouncex.net","ibx":{"tjs":"","cjs":"","miw":0,"mibcx":1,"te":0,"cart_rep":{"get":"","set":""},"ulpj":null,"cus":"","miw_exclude":"","enabled":0},"etjson":null,"osre":true,"osru":"osr.bounceexchange.com/v1/osr/items","checkDfp":false,"gamNetwork":"","spa":0,"spatm":1,"preinit_cjs":"","crs":{"integrations":null,"pageCount":null},"mat":0,"math":0,"cpnu":"coupons.bounceexchange.com","dfpcms":0,"sms":{"optm":"","eventSharing":false,"shqId":"","enabled":0},"pde":false,"fme":false,"fmx":"","sdk":{"android":{"enabled":false,"enabledVersions":[],"eventModifications":null},"ios":{"enabled":false,"enabledVersions":[],"eventModifications":null}},"onsite":{"enabled":1},"ads":{"enabled":1},"pubs":{"enabled":1},"websdk":{"enabled":0},"ga4_property_id":"","ga4_measurement_id":""}
;
		bouncex.tag = 'tag3';
		bouncex.$ = window.jQuery;
		bouncex.env = 'production';
		bouncex.restrictedTlds = {"casl":{"ca":1},"gdpr":{"ad":1,"al":1,"at":1,"ax":1,"ba":1,"be":1,"bg":1,"by":1,"xn--90ais":1,"ch":1,"cy":1,"cz":1,"de":1,"dk":1,"ee":1,"es":1,"eu":1,"fi":1,"fo":1,"fr":1,"uk":1,"gb":1,"gg":1,"gi":1,"gr":1,"hr":1,"hu":1,"ie":1,"im":1,"is":1,"it":1,"je":1,"li":1,"lt":1,"lu":1,"lv":1,"mc":1,"md":1,"me":1,"mk":1,"xn--d1al":1,"mt":1,"nl":1,"no":1,"pl":1,"pt":1,"ro":1,"rs":1,"xn--90a3ac":1,"ru":1,"su":1,"xn--p1ai":1,"se":1,"si":1,"sj":1,"sk":1,"sm":1,"ua":1,"xn--j1amh":1,"va":1,"tr":1}};
		bouncex.client = {
			supportsBrotli: 0
		};
		bouncex.assets = {"ads":"7039311459a2b90b171de4746e015aaf","creativesBaseStyles":"a53944a2","inbox":"c555afbb18897f16008370a417a91834","onsite":"1e65144eaf4e12878292a8065df4997d","sms":"e39203556bab2366e56296ce42e974a7","websdk":"21e2475184a668bee8ed2786875da783"};
		bouncex.push = function(pushData) {
			bouncex.pushedData.push(pushData);
		}

		var runtime = document.createElement('script');
		runtime.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/runtime_6459738026535cda4232dc813c61447d.js');
		runtime.setAttribute('async', 'async');
		runtime.setAttribute('onload', 'bouncex.initializeTag()');

		bouncex.initializeTag = function() {
			var script = document.createElement('script');
			script.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/main-v2_0da712b66343f7d4eb20a9b09c128ea1.js');
			script.setAttribute('async', 'async');
			document.body.appendChild(script);


			var deviceGraphScript = document.createElement('script');
			deviceGraphScript.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/cjs_min_1e55b565811f11b08485230cf1d150d6.js');
			deviceGraphScript.setAttribute('async', 'async');
			var dgAttrs = [{"Key":"id","Value":"c.js"},{"Key":"async","Value":"true"},{"Key":"data-apikey","Value":"2^HIykD"},{"Key":"data-cb","Value":"bouncex.dg.initPostDeviceGraph"},{"Key":"data-bx","Value":"1"},{"Key":"data-adcb","Value":"bouncex.dg.getAdsOptStatus"}];
			if (dgAttrs) {
				for (var i = 0; i < dgAttrs.length; i++) {
					deviceGraphScript.setAttribute(dgAttrs[i].Key, dgAttrs[i].Value);
				}
			}
			document.body.appendChild(deviceGraphScript);

			bouncex.initializeTag = function() {};
		};

		document.body.appendChild(runtime);

	}


}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", bxBootstrap);
} else {
	bxBootstrap();
}})();