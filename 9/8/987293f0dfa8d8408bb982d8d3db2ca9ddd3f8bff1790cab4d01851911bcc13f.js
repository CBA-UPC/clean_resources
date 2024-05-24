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
		bouncex.website = {"id":5127,"name":"AP news","cookie_name":"bounceClientVisit5127","domain":"apnews.com","ct":"bind_to_domain","ally":0,"ei":0,"tcjs":"","cjs":"/* enable.feature.DISABLE_RELOAD_CAMPAIGNS_V2 */\n\nbouncex.setVar('overlay_prioritization', Math.floor(Math.random() * 100) + 1);","force_https":false,"waypoints":false,"content_width":900,"gai":"UA-19104461-33","swids":"","sd":0,"ljq":"auto","campaign_id":0,"is_preview":false,"aco":{"first_party_limit":"3500","local_storage":"1"},"cmp":{"gdpr":0,"gmp":0,"whitelist_check":0},"burls":[{"prop":"contains","val":"apnews.com/donate"}],"ple":false,"fbe":true,"mas":2,"map":1,"gar":true,"ete":1,"ettm":true,"etjs":"","dge":true,"bxidLoadFirst":false,"pie":true,"cme":true,"gbi_enabled":1,"bpush":false,"pt":{"article":{"testmode":false,"val":[[{"activation":"current_page_url","prop":"contains","prop2":"","prop3":"","val":"/article/"}]]},"cart":{"testmode":true,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":""}]]},"category":{"testmode":false,"val":[[{"activation":"current_page_url","prop":"contains","prop2":"","prop3":"","val":"/hub/"},{"activation":"js","prop":"","prop2":"","prop3":"","val":"document.querySelectorAll('html.SectionPage').length > 0;"}]]},"checkout":{"testmode":true,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":""}]]},"gallery":{"testmode":true,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":""}]]},"home":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"window.location.pathname === '/';"}]]}},"els":{"infeed":".Article p + p, .Article p + .bxc + p, .RichTextStoryBody p + p, .RichTextStoryBody p + .bxc + p, .LiveBlogPage-layoutWrapper .RichTextBody p + p, .LiveBlogPage-layoutWrapper .RichTextBody p + .bxc + p","masthead":".Page-body"},"vars":[{"name":"dfp_rblock","polling":"all","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"/* dfp_rblock */\n(function() {\n    if (!bouncex.dfpRan) {\n        bouncex.dfpRan = true;\n        return 'not_ready';\n    }\n    function check() {\n        bouncex.dfp_loaded = false || bouncex.dfp_loaded;\n        \n        var event = bouncex.gbi2.getDfpEndPageViewEvent();\n        \n        if (event && event.dfp_status) {\n            if (event.dfp_status == 'pending') {\n                return 'not_ready';\n            } \n            \n            bouncex.dfp_loaded = true;\n\n            if (event.dfp_status == 'suppressed') {\n                bouncex.log('sponsor!!!!!');\n                return 'sponsor';\n            }\n            bouncex.log('allow!!!!!');\n            return 'allow';\n        }\n\n        return 'not_ready';\n    }\n\n    if (bouncex.website.gbi.rblocks) {\n        if (bouncex.dfp_loaded) {\n            return null;\n        } else if (window.googletag && googletag.apiReady && googletag.pubadsReady && bouncex.gbi2) {\n            bouncex.log('checking!!!');\n            return check();\n        } else if (typeof window.googletag === 'undefined') {\n            return 'no_googletag';\n        }\n        return 'fallback';\n    } else {\n        return 'not_ready';\n    }\n})();\n","trigger":"pageload"},{"name":"page_type","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"bouncex.website.pts;","trigger":"pageload"},{"name":"article_title","polling":"vars","persist":"no","page_types":["article"],"testmode":false,"default":"false","code":"jQuery('meta[property=\"og:title\"]').attr('content');","trigger":"pageload"},{"name":"ad_visible","polling":"all","persist":"no","page_types":["article"],"testmode":false,"default":"false","code":"!!jQuery('.cnx-player-wrapper .cnx-playspace-container').attr('style') || !!jQuery('div[class^=\"Component-adTitle\"]');","trigger":"pageload"},{"name":"video_visible","polling":"all","persist":"no","page_types":["article"],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"submitted_morning_wire","polling":"none","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"submitted_afternoon_wire","polling":"none","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"submitted_sports_wire","polling":"none","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"submitted_mens_ccb","polling":"none","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"submitted_women_ccb","polling":"none","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"submitted_cfb","polling":"none","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"submitted_photography","polling":"none","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"submitted_ground_game","polling":"none","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"submitted_breaking_news_alerts","polling":"none","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"article_category","polling":"vars","persist":"no","page_types":["article"],"testmode":false,"default":"false","code":"document.head.querySelector(\"[name=keywords\").content;","trigger":"pageload"},{"name":"article_tag","polling":"vars","persist":"no","page_types":["article"],"testmode":false,"default":"false","code":"(function(){\n    var tags = [],\n        $articleTags = jQuery('meta[property=\"article:tag\"]');\n\n    $articleTags.each(function(){\n        tags.push(this.content);\n    });\n\n    return tags.join(', ');\n})();","trigger":"pageload"},{"name":"submitted_onsite","polling":"all","persist":"permanent","page_types":[],"testmode":true,"default":"false","code":"bouncex.utils.url.allowParams().indexOf('link.apnews.com/page/signup-confirm') > -1 || null;","trigger":"pageload"},{"name":"backfill_deployment","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"bouncex.gbi2 ? bouncex.gbi2.getFailedDeployments().join(',') : '';","trigger":"pageload"},{"name":"video_playing","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function() {\n   if (bouncex.utils.isOnScreen('.StoryPage .JWVideoPlayer') === true && jQuery('.StoryPage .jw-state-playing').length > 0) {\n        return true ;\n   }\n    else {\n        return false;\n    }\n})();","trigger":"pageload"},{"name":"menu_at_top","polling":"all","persist":"no","page_types":[],"testmode":false,"default":0,"code":"jQuery('body[data-leaderboard-is-fixed=true]').length === 0;","trigger":"pageload"},{"name":"wk_bottombar_present","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('[id*=\"pushup-style\"]').length > 0;","trigger":"pageload"},{"name":"overlay_prioritization","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"bottom_bar_impressed","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"overlay_bid_fill","polling":"all","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"(function() {\n    for (var i = 0; i < bouncex.eventLog.length; i++) {\n        if (bouncex.eventLog[i].name === 'bid_fill') {\n    \t\treturn true;\n        }\n    }\n    return false;\n})();","trigger":"pageload"}],"dgu":"pixel.cdnwidget.com","dgp":false,"ba":{"enabled":0,"fbte":0},"biu":"assets.bounceexchange.com","bau":"api.bounceexchange.com","beu":"events.bouncex.net","ibx":{"tjs":"","cjs":"","miw":0,"mibcx":1,"te":0,"cart_rep":{"get":"","set":""},"ulpj":null,"cus":"","miw_exclude":"","enabled":0},"etjson":null,"osre":true,"osru":"osr.bounceexchange.com/v1/osr/items","checkDfp":true,"gamNetwork":"15786418","spa":1,"spatm":0,"preinit_cjs":"bouncex.utils.isOnScreen = function(selector) {\n    var el = document.querySelector(selector),\n        rect = el && el.getBoundingClientRect && el.getBoundingClientRect();\n\n    return (\n        rect &&\n        rect.top >= 0 &&\n        rect.left >= 0 &&\n        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */\n        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */\n    );\n};","crs":{"integrations":null,"pageCount":null},"mat":0,"math":0,"cpnu":"coupons.bounceexchange.com","dfpcms":0,"sms":{"optm":"","eventSharing":false,"shqId":"","enabled":0},"pde":true,"fme":false,"fmx":"","sdk":{"android":{"enabled":false,"enabledVersions":[],"eventModifications":null},"ios":{"enabled":false,"enabledVersions":[],"eventModifications":null}},"onsite":{"enabled":1},"ads":{"enabled":1},"pubs":{"enabled":1},"websdk":{"enabled":0},"ga4_property_id":"329912778","ga4_measurement_id":"G-CW1LS0SXPK"}
;
		bouncex.tag = 'tag3';
		bouncex.$ = window.jQuery;
		bouncex.env = 'production';
		bouncex.restrictedTlds = {"casl":{"ca":1},"gdpr":{"ad":1,"al":1,"at":1,"ax":1,"ba":1,"be":1,"bg":1,"by":1,"xn--90ais":1,"ch":1,"cy":1,"cz":1,"de":1,"dk":1,"ee":1,"es":1,"eu":1,"fi":1,"fo":1,"fr":1,"uk":1,"gb":1,"gg":1,"gi":1,"gr":1,"hr":1,"hu":1,"ie":1,"im":1,"is":1,"it":1,"je":1,"li":1,"lt":1,"lu":1,"lv":1,"mc":1,"md":1,"me":1,"mk":1,"xn--d1al":1,"mt":1,"nl":1,"no":1,"pl":1,"pt":1,"ro":1,"rs":1,"xn--90a3ac":1,"ru":1,"su":1,"xn--p1ai":1,"se":1,"si":1,"sj":1,"sk":1,"sm":1,"ua":1,"xn--j1amh":1,"va":1,"tr":1}};
		bouncex.client = {
			supportsBrotli: 0
		};
		bouncex.assets = {"ads":"d639085d70dd54880f3dfcd56d5c66b0","creativesBaseStyles":"a53944a2","gam_15786418":"//assets.bounceexchange.com/assets/gam/15786418/f36474eaf765fdf35a184de9873912b2.json","inbox":"48b3046e5658d067d380731acb25edd9","onsite":"5631bf90701659009118a89f964ae570","sms":"59133b5ff2491255abf0da3a6c439b40","websdk":"98cb0e9b7177c4b73a6e8bcf83f7595b"};
		bouncex.push = function(pushData) {
			bouncex.pushedData.push(pushData);
		}

		var runtime = document.createElement('script');
		runtime.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/runtime_8b30b4890203fd4144c54b9ffd765f5e.js');
		runtime.setAttribute('async', 'async');
		runtime.setAttribute('onload', 'bouncex.initializeTag()');

		bouncex.initializeTag = function() {
			var script = document.createElement('script');
			script.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/main-v2_b669f0854e04d626374d9b5ff1506c80.js');
			script.setAttribute('async', 'async');
			document.body.appendChild(script);


			var deviceGraphScript = document.createElement('script');
			deviceGraphScript.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/cjs_min_1e55b565811f11b08485230cf1d150d6.js');
			deviceGraphScript.setAttribute('async', 'async');
			var dgAttrs = [{"Key":"id","Value":"c.js"},{"Key":"async","Value":"true"},{"Key":"data-apikey","Value":"2^HIykD"},{"Key":"data-cb","Value":"bouncex.dg.initPostDeviceGraph"},{"Key":"data-bx","Value":"1"},{"Key":"data-gm","Value":"1"},{"Key":"data-fire","Value":"1"},{"Key":"data-adcb","Value":"bouncex.dg.getAdsOptStatus"}];
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