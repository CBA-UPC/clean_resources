/*! For license information please see client.min.js.LICENSE.txt */
(function(){var __webpack_modules__={1377:1400:3222:3964:2630:6226:7541:4478:9095:6993:3292:9275:2683:3963:8006:5010:1702:2476:5799:8101:9846:9877:function(n){n.exports={DEFAULT_INTERVAL:20}},6094:2233:6282:3189:9489:882:function(){},8011:8380:4467:6909:3382:1388:7939:4482:6814:9645:7945:4730:3533:7246:2156:5301:7219:9842:7170:8839:6245:2528:970:1441:9779:4477:740:1731:7493:1930:8479:6935:9325:2420:7769:7543:3270:6095:826:6434:8287:7613:6199:6465:8204:6743:4142:3009:5302:8148:4834:7845:7946:49:484:563:3133:9294:7169:5510:9854:5403:5811:9400:585:1228:2548:8315:8157:966:671:6744:6:424:1514:8569:9707:8378:8286:5851:3105:1422:1625:7266:969:5741:5234:1147:9589:2290:4937:1739:5661:8076:5318:8926:2387:9155:7755:1686:5140:7970:2193:3786:2713:7295:8751:8560:6843:8340:function(n,t,e){n.exports=e(4478)},1197:1001:5335:2248:1135:4257:3756:3198:4739:8717:5473:6522:861:6949:5697:2183:3199:9795:4346:9714:1569:9015:6602:6801:1182:9721:6857:function(n,t,e){n.exports=function(n){n.registerApiModule("behavior",e(9721))}},818:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(6489)),n.registerAudienceMatcher("behavior",e(1089))}},1089:6489:function(n,t,e){var i=e(513);n.exports={provides:"events",isTransient:!0,getter:[function(){return i.getEvents()}]}},8156:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(4003))}},4003:5529:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(6731)),n.registerAudienceMatcher("first_session",e(1927))}},1927:6731:9923:513:5198:8713:7472:2779:6758:function(n){n.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(n){return n.getId()}]}},8629:function(n){n.exports={provides:"browserVersion",getter:["sources/browser_id",function(n){return n.getVersion()}]}},1012:6767:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(8606)),n.registerAudienceMatcher("campaign",e(2659))}},2659:8606:7228:function(n,t,e){n.exports=function(n){n.registerAudienceMatcher("code",e(7025))}},7025:8402:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(8618)),n.registerAudienceMatcher("cookies",e(5026))}},5026:8618:6382:4538:2573:5596:283:function(n){n.exports={fieldsNeeded:["device"],match:function(n,t){return n.device===t.value}}},6763:5444:8533:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(5771)),n.registerAudienceMatcher("device_type",e(7320))}},7320:5771:8582:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(6341)),n.registerAudienceMatcher("location",e(3927))}},3927:6341:9013:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(8134)),n.registerAudienceMatcher("query",e(4888))}},4888:8134:function(n,t,e){var i=e(2193);n.exports={provides:"queryParams",getter:[function(){return i.getQueryParams()}]}},3224:6397:1127:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(7967)),n.registerAudienceMatcher("referrer",e(972))}},972:7967:8454:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(7330)),n.registerAudienceMatcher("source_type",e(7577))}},7577:7330:7716:9864:3032:9646:8111:7850:2712:1153:5761:7176:6143:2632:1807:7421:9154:8439:6218:,__webpack_module_cache__={};_webpack_require__.amdO={},__webpack_require__.g=),__webpack_require__.nmd=var __webpack_exports__={};!function(){try{!function(){var n=window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin"),__webpack_require__(8439).initialize();var t=__webpack_require__(7769);t.time("gtagReady");var e=__webpack_require__(6843),i=__webpack_require__(740);__webpack_require__(3199);var r=i.get("stores/directive");if(!__webpack_require__(861).isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var o,a=__webpack_require__(5010),u=__webpack_require__(1731),c=__webpack_require__(3198),s={"accountId": "15853140465", "namespace": "a15853140465", "revision": "125873", "anonymizeIP": true, "enableForceParameters": true, "experimental": {"trimPages": true}, "snippetId": "19194980281", "projectId": "19194980281", "layers": [{"changes": null, "id": "24308080832", "name": null, "commitId": "24313810796", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18817253497": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "23074782274", "23185140152", "23934340133"], "audienceName": null, "changes": null, "id": "24330130621", "integrationSettings": null, "variations": [{"id": "24354290226", "name": null, "actions": []}, {"id": "24363070720", "name": null, "actions": [{"viewId": "24310301175", "changes": [{"dependencies": [], "type": "custom_code", "id": "0873f541a7dc4102a0bf6f2267f014fb", "value": function($){window.sessionStorage.setItem('checkout_mobile_payments', 1);
window.sessionStorage.setItem('new_checkout_flow', 1);
window.sessionStorage.setItem('checkout_bypass_address', 1);
window.sessionStorage.setItem('checkout_removal', 1);
}}]}]}], "weightDistributions": [{"entityId": "24363070720", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["24310301175"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "26330420035", "name": null, "commitId": "26349690004", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18817253497": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "23074782274", "23185140152", "23381500330"], "audienceName": null, "changes": null, "id": "26339010071", "integrationSettings": null, "variations": [{"id": "26341890048", "name": null, "actions": [{"viewId": "26329530065", "changes": [{"id": "5760319612eb4fb2bc73965c5f27ca37", "type": "custom_code", "value": function($){window.sessionStorage.setItem('checkout_mobile_payments', 1);
window.sessionStorage.setItem('new_checkout_flow', 1);
window.sessionStorage.setItem('checkout_bypass_address', 1);
window.sessionStorage.setItem('checkout_removal', 1);
window.sessionStorage.setItem('checkout_mobile_payments_eur', 1);
}, "dependencies": []}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["26329530065"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "23751020483", "name": null, "commitId": "23740001897", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18639401787": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "20188124813", "21268460620", "21163500197"], "audienceName": null, "changes": null, "id": "23741170630", "integrationSettings": null, "variations": [{"id": "23718300454", "name": null, "actions": []}, {"id": "23722060589", "name": null, "actions": [{"viewId": "23748030389", "changes": [{"dependencies": [], "type": "custom_code", "id": "5a8590f5763e4764aa8eb96dc12ec7c5", "value": function($){((w) => {
	const tag = 'cv-x-11';
	const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
	const qa = document.cookie.indexOf('cfQA') > -1;
	const log = qa ? Function.prototype.bind.call(console.log, console, '[CONV] NUK X.11 |') : () => { };

	window.optimizely = window.optimizely || [];

	const utils = {
		waitUntil: (condition, wait = 5000) => {
			return new Promise((resolve, reject) => {
				let stop;
	
				const timeout =
					wait && setTimeout(() => {
						stop = true; 
						reject();
					}, wait);
	
				const check = () => {
					if (stop) return;
					if (!condition()) return requestAnimationFrame(check);
	
					clearTimeout(timeout);
					resolve(condition());
				};
	
				requestAnimationFrame(check);
			});
		}
	};

	if (document.querySelector(`.${tag}-section`)) return;

	const markup = `
		<section class='${tag}-section'>
            <h3 class='headline'>Other subscription options</h3>
            <a href='https://globalstore.thetimes.co.uk/student/'>
                <div class='${tag}-container'>
                    <div class='${tag}-image'>
                        <img src='https://cfactory-img.s3.amazonaws.com/NUK/X.11/sub.png'>
                    </div>
                    <div class='${tag}-text'>
                        <h5>Student Subscription</h5>
                        <p>Attending university? Keep well informed with unlimited digital access. Enjoy your first month free, then pay just £1.99 per month thereafter.</p>
                        <span class='${tag}-label'>Find out more</span>
                    </div>
                </div>
            </a>
		</section>
	`;

	utils
		.waitUntil(() => document.querySelector('.faq'), 0)
		.then((element) => {
			log('Running');

			document.body.classList.add(tag);

			element.insertAdjacentHTML('beforebegin', markup);
		});

})(window);
}}, {"value": "<style>.cv-x-11-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 0 0 70px !important;\n}\n.cv-x-11-section a {\n    text-decoration: none !important;\n    color: #000 !important;\n}\n.cv-x-11-section h3 {\n    margin-bottom: 40px;\n}\n.cv-x-11-container {\n    cursor: pointer;\n    display: flex;\n    align-items: start;\n    justify-content: center;\n    flex-direction: row;\n    width: 640px;\n    background-color: #fff;\n    border: 1px solid #e2e2e2;\n    border-radius: 3px;\n    position: relative;\n    margin: 0 0 15px;\n    padding: 20px;\n    min-height: 140px;\n}\n.cv-x-11-container:hover {\n    background-color: #fcfcfc;\n    border-color: #a9a9a9;\n}\n.cv-x-11-image {\n    width: 124px;\n}\n.cv-x-11-image img {\n    width: 98px;\n    height: 98px;\n    border-radius: 50%;\n}\n.cv-x-11-text {\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n    width: calc(100% - 100px);\n}\n.cv-x-11-text h5 {\n    font-family: TimesModern-Bold;\n    font-size: 2.4rem;\n    line-height: 1.1;\n    font-weight: 500;\n    margin: 0 0 10px;\n    color: #000;\n}\n.cv-x-11-text p {\n    font-family: TimesNewRoman, \"Times New Roman\", Times, Baskerville, Georgia, serif;\n    font-size: 1.8rem;\n    color: #333;\n    line-height: 1.4;\n    margin: 0;\n}\n.cv-x-11-label {\n    display: none;\n    font-family: Roboto-Regular,Roboto-Medium,Arial,Helvetica,sans-serif;\n    font-size: 15px;\n    font-size: 1.5rem;\n    color: #069;\n    letter-spacing: .38px;\n    margin: 10px 0 0;\n}\n@media screen and (max-width: 992px) {\n    .cv-x-11-container {\n        width: 750px;\n    }\n}\n@media screen and (max-width: 767px) {\n    .cv-x-11-container {\n        width: 100%;\n        padding: 0;\n        flex-direction: column;\n    }\n    .cv-x-11-image {\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        margin: 0 0 10px;\n    }\n    .cv-x-11-image img {\n        width: 60px;\n        height: 60px;\n    }\n    .cv-x-11-text {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        text-align: center;\n    }\n    .cv-x-11-text h5 {\n        font-size: 1.8rem;\n    }\n    .cv-x-11-label {\n        display: block;\n    }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "0E88889B-A6EE-42D2-ACC1-9B1374EFF076"}]}]}], "weightDistributions": [{"entityId": "23722060589", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["23748030389"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "24346460197", "name": null, "commitId": "24290840960", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18817253497": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "23093710786", "23074782274", "23185140152"], "audienceName": null, "changes": null, "id": "24359120385", "integrationSettings": null, "variations": [{"id": "24306600796", "name": null, "actions": []}, {"id": "24320980664", "name": null, "actions": [{"viewId": "24371460258", "changes": [{"dependencies": [], "type": "custom_code", "id": "36cc648bdf384e719bab18ce4bf79d15", "value": function($){window.sessionStorage.setItem('checkout_mobile_payments', 1);
window.sessionStorage.setItem('new_checkout_flow', 1);
window.sessionStorage.setItem('checkout_bypass_address', 1);
window.sessionStorage.setItem('checkout_removal', 1);
}}]}]}], "weightDistributions": [{"entityId": "24320980664", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["24371460258"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "26337610597", "name": null, "commitId": "26596101845", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18639401787": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "20188124813", "21268460620"], "audienceName": null, "changes": null, "id": "26448120284", "integrationSettings": null, "variations": [{"id": "26319990727", "name": null, "actions": []}, {"id": "26323641232", "name": null, "actions": [{"viewId": "26465750096", "changes": [{"dependencies": [], "type": "custom_code", "id": "27a44f3cb49d417d865c85919cf24b90", "value": function($){(function (w) {
	'use strict';

	var tag = 'cv-0-47', // TO DO: test name
	debug = document.cookie.indexOf('cfQA') > -1,
	window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;

	window[tag] = {
	log: function (msg) {
		if (debug) console.log('[CONV]', tag, '-->', msg);
	},

	waitForElement: function (cssSelector, callback) {
		var stop,
		elementCached,
		timeout,
		check = function () {
			try {
			elementCached = document.querySelector(cssSelector);

			if (stop) return;

			if (elementCached) {
				callback(elementCached);
				clearTimeout(timeout);

				window[tag].log(cssSelector + ' found');
			} else {
				window.requestAnimationFrame(check);
			}
			} catch (err) {
			window[tag].log(err.message);
			}
		};

		window.requestAnimationFrame(check);

		timeout = setTimeout(function () {
		stop = true;
		window[tag].log(cssSelector + ' not found');
		}, 10000);
	},

	init: function () {
		try {
		this.waitForElement('body',);

		initVariation();

		window[tag].log('test running');
		} catch (err) {
		window[tag].log(err.message);
		}
	},
	};

	window[tag].init();

	const copy = 'Billed as £1 for your first 6 months, then £4.99 a month for the next 6 months. Trial offer not available to current subscribers.';

	function initVariation() {
		if (window.location.href.includes('globalstore.thetimes')) {
			window[tag].waitForElement('#custom_left_aligned_block .custom_left_aligned_tandc', (copyEl) => {
				copyEl.textContent = copy;

				window[tag].waitForElement('.feature-column .prompt', (bottomCopyEl) => {
					bottomCopyEl.innerHTML = 'Billed as £1 for your first 6 months, then £4.99 a month for the next 6 months.<br>Trial offer not available to current subscribers.';
				});

				window[tag].waitForElement('.custom-cta > a', (cta) => {
					cta.href = 'https://www.thetimes.co.uk/checkout?pc=INTL017YY96N&pid=gl-7&_ga=2.7163506.1936606438.1702293400-1305171952.1702293400';
				});

				window[tag].waitForElement('.featured-cta > a', (cta) => {
					cta.href = 'https://www.thetimes.co.uk/checkout?pc=INTL017YY96N&pid=gl-7&_ga=2.7163506.1936606438.1702293400-1305171952.1702293400';
				});
			});
		}

		if (window.location.href.includes('checkout')) {
			window[tag].waitForElement('main > div > div > div:nth-child(2) > p', (element) => {
				element.innerText = '£1 for your first 6 months, then £4.99 a month for the next 6 months. Billed as £10 a month after trial.';
			});
		}
	}
})(window);
}}]}]}], "weightDistributions": [{"entityId": "26319990727", "endOfRange": 5000}, {"entityId": "26323641232", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["26465750096"], "weightDistributions": null, "decisionMetadata": null}, {"changes": [{"dependencies": [], "type": "custom_code", "id": "d9b56c561cc747f18420a4ebde5b33bd", "value": function($){window.optimizely = window.optimizely || [];

const exp = 'NUK 0.51';

window.sessionStorage.setItem(exp, true);

var section = window.nuk && nuk.ads.commercialSection;

window.optimizely.push({
	"type": "user",
	"attributes": {
		"website-section": section
	}
});

document.addEventListener('click', (e) => {
	if (e.target.matches('#returning-user-subscription-offer div[data-target=\'modal-inner-container\'] a')) {
		window.optimizely.push({
			type: "event",
			eventName: "clicks-returning-users-pop-up-cta",
		});
	}
});
}}], "id": "27156740936", "name": null, "commitId": "27292410538", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18802034055": {}, "22275782302": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "20692010806", "19011630586", "22391750619", "21175821657", "25469260064"], "audienceName": null, "changes": null, "id": "27159940796", "integrationSettings": null, "variations": [{"id": "27216660448", "name": null, "actions": [{"viewId": "27180220623", "changes": [{"id": "EA366EA9-D2D3-4E69-BB4C-22801B2303CE", "type": "custom_code", "value": function($){((w) => {
	const exp = 'NUK 0.50';
	const qa = document.cookie.indexOf('cfQA') > -1;
	const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
	const log = qa ? Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`) : () => { };

	const utils = {
		waitUntil: (condition, wait = 5000) => {
			return new Promise((resolve, reject) => {
				let stop;
	
				const timeout =
					wait && setTimeout(() => {
						stop = true; 
						reject();
					}, wait);
	
				const check = () => {
					if (stop) return;
					if (!condition()) return requestAnimationFrame(check);
	
					clearTimeout(timeout);
					resolve(condition());
				};
	
				requestAnimationFrame(check);
			});
		}
	};

	log('Running');

	const initReturningUser = () => {
		utils
			.waitUntil(() => document.querySelector('#returning-user-subscription-offer h3 + div'), 0)
			.then((element) => {
				element.innerHTML = 'Enjoy unlimited digital access.<br>Just £1 a month.';
			});

		utils
			.waitUntil(() => document.querySelector('#returning-user-subscription-offer h3 + div + div a'), 0)
			.then((element) => {
				element.innerText = 'Subscribe now';
			});
	};

	if (window.location.pathname === '/subscribe/digital/') {
		utils
			.waitUntil(() => document.querySelector('.subscription_pack0 .c-subscription_pack_price'), 0)
			.then((element) => {
				element.innerText = '£1 /month for 3 months';
			});

		utils
			.waitUntil(() => document.querySelector('.subscription_pack1 .c-subscription_pack_price'), 0)
			.then((element) => {
				element.innerText = '£1 /month for 3 months';
			});

		utils
			.waitUntil(() => document.querySelector('.subscription_pack0 .c-subscription_pack__subscribe-benefits-desktop-view'), 0)
			.then(() => {
				document
					.querySelectorAll('.subscription_pack0 .c-subscription-pack__cta_link')
					.forEach(element => {
						element.href = 'https://www.thetimes.co.uk/checkout?pc=ONS150154HQSC&pid=uk-19461';
						element.textContent = 'Subscribe Now';
						element.title = 'Subscribe Now';
					});
			});

			utils
			.waitUntil(() => document.querySelector('.subscription_pack1 .c-subscription_pack__subscribe-benefits-desktop-view'), 0)
			.then(() => {
				document
					.querySelectorAll('.subscription_pack1 .c-subscription-pack__cta_link')
					.forEach(element => {
						element.href = 'https://www.thetimes.co.uk/checkout?pc=ONS2601T0D69B&pid=uk-19463';
						element.textContent = 'Subscribe Now';
						element.title = 'Subscribe Now';
					});
			});

		utils
			.waitUntil(() => document.querySelector('.subscription_pack0 .c-subscription_pack__terms_conditions span'), 0)
			.then((element) => {
				element.innerText = 'Billed as £1 a month for your first 3 months, then £15 a month thereafter. Free trial offer not available to current subscribers.';
			});

		utils
			.waitUntil(() => document.querySelector('.subscription_pack1 .c-subscription_pack__terms_conditions span'), 0)
			.then((element) => {
				element.innerText = 'Billed as £1 a month for your first 3 months, then £26 a month after trial. Trial offer not available to current subscribers.';
			});

		utils
			.waitUntil(() => document.querySelector('.store-inactive-popup .popup-title'), 0)
			.then(() => {
				setTimeout(() => {
					document
						.querySelectorAll('.store-inactive-popup .popup-title')
						.forEach(element => {
							element.innerText = 'Just £1 for 3 months';
						});

					document
						.querySelectorAll('.store-inactive-popup .popup-info-hint')
						.forEach(element => {
							element.innerText = 'Billed at £1 for your first 3 months, then £26 a month thereafter.';
						});
				}, 2000);
			});
	}

	if (window.location.pathname === '/') {
		initReturningUser();

		let copy = 'Read trusted, award-winning journalism. Just £1 a month.';

		utils
			.waitUntil(() => document.querySelector('#react-edition-homepage-banner h2 + rText = copy;
			});

		utils
			.waitUntil(() => document.querySelector('#react-edition-homepage-banner a'), 0)
			.then((element) => {
				element.innerText = 'Subscribe now';
			});
	}

	if (window.location.pathname.includes('/article/')) {
		initReturningUser();

		utils
			.waitUntil(() => document.querySelector('#paywall-portal-page-footer h4 + div'), 0)
			.then((element) => {
				let copy = 'Enjoy unlimited digital access.<br>Just £1 a month.';

				element.innerHTML = copy;

				const check = setInterval(() => {
					const el = document.querySelector('#paywall-portal-page-footer h4 + div');
					if (el) el.innerHTML = copy;
				}, 250);

				setTimeout(() => clearInterval(check), 8000);
			});

		utils
			.waitUntil(() => document.querySelector('#paywall-portal-page-footer h4 + divontent = copy;
			});
	}

})(window);
}, "dependencies": []}, {"id": "C0AAE54F-9BAC-40D4-9B44-7A67E18E41B3", "type": "append", "selector": "head", "value": "<style>@media screen and (max-width: 767px) {\n    #react-edition-homepage-banner h2 + div {\n        max-width: 275px;\n        line-height: 1.4;\n    }\n}</style>", "dependencies": []}]}]}, {"id": "27167940563", "name": null, "actions": [{"viewId": "27180220623", "changes": [{"dependencies": [], "type": "custom_code", "id": "9cd094a3a7d944bfa6c81b0bcb7f1029", "value": function($){((w) => {
	const tag = 'cv-0-50';
	const exp = 'NUK 0.50';
	const qa = document.cookie.indexOf('cfQA') > -1;
	const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
	const log = qa ? Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`) : () => { };

	const utils = {
		waitUntil: (condition, wait = 5000) => {
			return new Promise((resolve, reject) => {
				let stop;
	
				const timeout =
					wait && setTimeout(() => {
						stop = true; 
						reject();
					}, wait);
	
				const check = () => {
					if (stop) return;
					if (!condition()) return requestAnimationFrame(check);
	
					clearTimeout(timeout);
					resolve(condition());
				};
	
				requestAnimationFrame(check);
			});
		}
	};

	if (window.location.pathname === '/subscribe/digital/') {
		utils
			.waitUntil(() => document.getElementById('site-content'), 0)
			.then((element) => {
				log('Running');

				document.body.classList.add(tag);
		
				const banner = `
					<div class='${tag}-banner'>
						<div class='${tag}-banner-inner'>
							<h1>Enjoy unlimited digital access</h1>
							<h2>Read trusted, award-winning journalism</h2>
							<div class='${tag}-banner-plans'>
								<div class='${tag}-plan'>
									<div class='${tag}-sub'>
										MONTHLY OFFER
									</div>
									<div class='${tag}-price'>
										<div class="${tag}-original-price">£26</div> Free /first month
									</div>
									<a href='https://www.thetimes.co.uk/checkout?pc=ONS1M01GJJ4W2&pid=uk-11694' title='Subscribe now' class='c-subscription-pack__cta_link'>Subscribe now</a>
									<div class='${tag}-terms'>
										Pay nothing for your first month, then £26 a month thereafter. Free trial offer not available for current subscribers.
									</div>
								</div>
								<div class='${tag}-plan ${tag}-plan-highlight'>
									<div class='${tag}-sub'>
										ANNUAL OFFER
									</div>
									<div class='${tag}-price'>
										<div class="${tag}-original-price">£312</div> £125 /first year
										<div class='${tag}-discount'> 
											GET 7 MONTHS FREE
										</div>
									</div>
									<a href='https://www.thetimes.co.uk/checkout?pc=ON12501S43ZG5' title='Subscribe now' class='c-subscription-pack__cta_link subscription_pack-button-highlight'>Subscribe now</a>
									<div class='${tag}-terms'>
										Billed today as £125 for one year. Renews automatically each year. We'll notify you of any changes to your price in advance.
									</div>
								</div>
							</div>
						</div>
						<img class='${tag}-illustration' src='https://cfactory-img.s3.amazonaws.com/NUK/0.45/illustration.png'>
					</div>
				`;

				element.insertAdjacentHTML('afterbegin', banner);
			});
	}

})(window);
}}, {"id": "9b6a0ed187f44c9c933d95e488308054", "type": "append", "selector": "head", "value": "<style>.cv-0-50 .sfuk-banner-desktop,\n.cv-0-50 .sfuk-banner-mobile,\n.cv-0-50 .page__subscription_pack-container,\n.cv-0-50 .c-page-block--three-columns {\n    display: none;\n}\n.cv-0-50-banner {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    background: #eee;\n    text-align: center;\n    --fontTimesBold: TimesModern-Bold, TimesNewRoman, \"Times New Roman\", Times, Baskerville, Georgia, serif;\n    --fontTimes: TimesModern-Regular,TimesNewRoman,\"Times New Roman\",Times,Baskerville,Georgia,serif;\n    --fontRoboto: Roboto-Regular, Roboto-Medium, Arial, Helvetica, sans-serif;\n}\n.cv-0-50-banner-inner {\n    width: 100%;\n    max-width: 1170px;\n    margin: 0 auto;\n    position: relative;\n    padding: 53px 24px 162px;\n}\n.cv-0-50-banner-inner h1 {\n    font-family: var(--fontTimesBold);\n    color: #333;\n    font-size: 44px;\n    font-weight: 400;\n    line-height: 112.5%;\n    margin: 0 0 12px;\n}\n.cv-0-50-banner-inner h2 {\n    font-family: var(--fontTimes);\n    color: #333;\n    font-size: 24px;\n    font-weight: 400;\n    line-height: 24px;\n    margin: 0 0 77px;\n}\n.cv-0-50-banner-plans {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 16px;\n}\n.cv-0-50-plan {\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n    flex: 50%;\n    padding: 18px 14px;\n    max-width: 344px;\n    height: auto;\n    border: 1px solid #D9D9D9;\n    background: #FFF;\n    position: relative;\n}\n.cv-0-50-plan-highlight {\n    padding: 17px 14px;\n    border: 2px solid #FFA300;\n}\n.cv-0-50-plan-highlight::before {\n    content: 'BEST VALUE';\n    position: absolute;\n    top: -25px;\n    height: 25px;\n    background: #FFA300;\n    width: calc(100% + 4px);\n    left: -2px;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    font-family: var(--fontRoboto);\n    color: #000;\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: 0.96px;\n}\n.cv-0-50-sub,\n.cv-0-50-terms {\n    font-family: var(--fontRoboto);\n    color: #696969;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 150%;\n}\n.cv-0-50-sub {\n    margin: 0 0 8px;\n    text-transform: uppercase;\n}\n.cv-0-50-price {\n    font-family: var(--fontTimes);\n    color: #01000D;\n    font-size: 24px;\n    font-weight: 400;\n    line-height: 112.50%;\n    margin: 0 0 22px;\n}\n.cv-0-50-original-price {\n    display: inline-block;\n    color: #696969;\n    text-decoration-line: line-through;\n}\n.cv-0-50-discount {\n    color: #01000D;\n    font-family: var(--fontRoboto);\n    font-size: 10px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 150%;\n    padding: 8px;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    border-radius: 27px;\n    background: #FFA300;\n    max-height: 23px;\n    display: inline-flex;\n    margin: 0 0 0 16px;\n    position: absolute;\n}\n.cv-0-50-plan a {\n    margin: 0 0 12px;\n    color: #000;\n}\n.cv-0-50-plan:not(.cv-0-50-plan-highlight) a {\n    background: #005C8A;\n    color: #FFF;\n}\n.cv-0-50-plan:not(.cv-0-50-plan-highlight) a:hover {\n    background: #006699;\n}\n.cv-0-50-illustration {\n    position: absolute;\n    bottom: -15px;\n    width: 304px;\n    z-index: 20;\n    left: calc(50% - 152px);\n}\n.cv-0-50 .c-page-block--other-subscriptions-digital {\n    display: none;\n}\n@media screen and (max-width: 1024px) {\n    .cv-0-50-banner-inner {\n        padding: 53px 24px 144px;\n    }\n    .cv-0-50-banner-plans {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: center;\n        gap: 16px;\n    }\n    .cv-0-50-plan {\n        padding: 24px 14px;\n        max-width: 344px;\n    }\n    .cv-0-50-illustration {\n        bottom: -14px;\n        width: 280px;\n        left: calc(50% - 140px);\n    }\n}\n@media screen and (max-width: 767px) {\n    .cv-0-50-banner {\n        text-align: left;\n        margin-bottom: 20px;\n    }\n    .cv-0-50-banner-inner {\n        padding: 34px 8px 121px;\n    }\n    .cv-0-50-banner-inner h1 {\n        font-size: 36px;\n        margin: 0 auto 3px;\n        max-width: 300px;\n        left: -22px;\n        position: relative;\n    }\n    .cv-0-50-banner-inner h2 {\n        font-size: 18px;\n        margin: 0 auto 33px;\n        max-width: 300px;\n        left: -22px;\n        position: relative;\n    }\n    .cv-0-50-banner-plans {\n        flex-direction: column;\n        gap: 11px;\n    }\n    .cv-0-50-plan {\n        padding: 18px 14px 16px;\n    }\n    .cv-0-50-plan-highlight {\n        margin-top: 37px;\n    }\n    .cv-0-50-illustration {\n        bottom: -11px;\n        width: 230px;\n        left: calc(50% - 115px);\n    }\n    .cv-0-50-price {\n        margin: 0 0 16px;\n    }\n}\n@media screen and (max-width: 359px) {\n    .cv-0-50-banner-inner {\n        padding: 34px 10px 121px;\n    }\n    .cv-0-50-banner-inner h1 {\n        left: 0;\n        position: relative;\n        margin: 0 0 5px;\n    }\n    .cv-0-50-banner-inner h2 {\n        left: 0;\n        position: relative;\n        margin: 0 0 34px;\n    }\n}</style>", "dependencies": []}]}]}, {"id": "27278820014", "name": null, "actions": [{"viewId": "27180220623", "changes": [{"id": "34DB4BBD-00E2-4C5C-A150-B497376DF990", "type": "custom_code", "value": function($){((w) => {
	const tag = 'cv-0-50';
	const exp = 'NUK 0.50';
	const qa = document.cookie.indexOf('cfQA') > -1;
	const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
	const log = qa ? Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`) : () => { };

	const utils = {
		waitUntil: (condition, wait = 5000) => {
			return new Promise((resolve, reject) => {
				let stop;
	
				const timeout =
					wait && setTimeout(() => {
						stop = true; 
						reject();
					}, wait);
	
				const check = () => {
					if (stop) return;
					if (!condition()) return requestAnimationFrame(check);
	
					clearTimeout(timeout);
					resolve(condition());
				};
	
				requestAnimationFrame(check);
			});
		}
	};

	if (window.location.pathname === '/subscribe/digital/') {
		utils
			.waitUntil(() => document.getElementById('site-content'), 0)
			.then((element) => {
				log('Running');

				document.body.classList.add(tag);
		
				const banner = `
					<div class='${tag}-banner'>
						<div class='${tag}-banner-inner'>
							<h1>Enjoy unlimited digital access</h1>
							<h2>Read trusted, award-winning journalism</h2>
							<div class='${tag}-banner-plans'>
								<div class='${tag}-plan'>
									<div class='${tag}-sub'>
										MONTHLY OFFER
									</div>
									<div class='${tag}-price'>
										<div class="${tag}-original-price">£26</div> Free /first month
									</div>
									<a href='https://www.thetimes.co.uk/checkout?pc=ONS1M01GJJ4W2&pid=uk-11694' title='Subscribe now' class='c-subscription-pack__cta_link'>Subscribe now</a>
									<div class='${tag}-terms'>
										Pay nothing for your first month, then £26 a month thereafter. Free trial offer not available for current subscribers.
									</div>
								</div>
								<div class='${tag}-plan ${tag}-plan-highlight'>
									<div class='${tag}-sub'>
										ANNUAL OFFER
									</div>
									<div class='${tag}-price'>
										<div class="${tag}-original-price">£312</div> £99 /first year
										<div class='${tag}-discount'> 
											GET 8 MONTHS FREE
										</div>
									</div>
									<a href='https://www.thetimes.co.uk/checkout?pc=ONS9901M5V3N7' title='Subscribe now' class='c-subscription-pack__cta_link subscription_pack-button-highlight'>Subscribe now</a>
									<div class='${tag}-terms'>
										Billed today as £99 for one year. Renews automatically each year. We'll notify you of any changes to your price in advance.
									</div>
								</div>
							</div>
						</div>
						<img class='${tag}-illustration' src='https://cfactory-img.s3.amazonaws.com/NUK/0.45/illustration.png'>
					</div>
				`;

				element.insertAdjacentHTML('afterbegin', banner);
			});
	}

})(window);
}, "dependencies": []}, {"id": "2EAB78CB-C493-4219-AA99-D88EAD4BED86", "type": "append", "selector": "head", "value": "<style>.cv-0-50 .sfuk-banner-desktop,\n.cv-0-50 .sfuk-banner-mobile,\n.cv-0-50 .page__subscription_pack-container,\n.cv-0-50 .c-page-block--three-columns {\n    display: none;\n}\n.cv-0-50-banner {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    background: #eee;\n    text-align: center;\n    --fontTimesBold: TimesModern-Bold, TimesNewRoman, \"Times New Roman\", Times, Baskerville, Georgia, serif;\n    --fontTimes: TimesModern-Regular,TimesNewRoman,\"Times New Roman\",Times,Baskerville,Georgia,serif;\n    --fontRoboto: Roboto-Regular, Roboto-Medium, Arial, Helvetica, sans-serif;\n}\n.cv-0-50-banner-inner {\n    width: 100%;\n    max-width: 1170px;\n    margin: 0 auto;\n    position: relative;\n    padding: 53px 24px 162px;\n}\n.cv-0-50-banner-inner h1 {\n    font-family: var(--fontTimesBold);\n    color: #333;\n    font-size: 44px;\n    font-weight: 400;\n    line-height: 112.5%;\n    margin: 0 0 12px;\n}\n.cv-0-50-banner-inner h2 {\n    font-family: var(--fontTimes);\n    color: #333;\n    font-size: 24px;\n    font-weight: 400;\n    line-height: 24px;\n    margin: 0 0 77px;\n}\n.cv-0-50-banner-plans {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 16px;\n}\n.cv-0-50-plan {\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n    flex: 50%;\n    padding: 18px 14px;\n    max-width: 344px;\n    height: auto;\n    border: 1px solid #D9D9D9;\n    background: #FFF;\n    position: relative;\n}\n.cv-0-50-plan-highlight {\n    padding: 17px 14px;\n    border: 2px solid #FFA300;\n}\n.cv-0-50-plan-highlight::before {\n    content: 'BEST VALUE';\n    position: absolute;\n    top: -25px;\n    height: 25px;\n    background: #FFA300;\n    width: calc(100% + 4px);\n    left: -2px;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    font-family: var(--fontRoboto);\n    color: #000;\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: 0.96px;\n}\n.cv-0-50-sub,\n.cv-0-50-terms {\n    font-family: var(--fontRoboto);\n    color: #696969;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 150%;\n}\n.cv-0-50-sub {\n    margin: 0 0 8px;\n    text-transform: uppercase;\n}\n.cv-0-50-price {\n    font-family: var(--fontTimes);\n    color: #01000D;\n    font-size: 24px;\n    font-weight: 400;\n    line-height: 112.50%;\n    margin: 0 0 22px;\n}\n.cv-0-50-original-price {\n    display: inline-block;\n    color: #696969;\n    text-decoration-line: line-through;\n}\n.cv-0-50-discount {\n    color: #01000D;\n    font-family: var(--fontRoboto);\n    font-size: 10px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 150%;\n    padding: 8px;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    border-radius: 27px;\n    background: #FFA300;\n    max-height: 23px;\n    display: inline-flex;\n    margin: 0 0 0 16px;\n    position: absolute;\n}\n.cv-0-50-plan a {\n    margin: 0 0 12px;\n    color: #000;\n}\n.cv-0-50-plan:not(.cv-0-50-plan-highlight) a {\n    background: #005C8A;\n    color: #FFF;\n}\n.cv-0-50-plan:not(.cv-0-50-plan-highlight) a:hover {\n    background: #006699;\n}\n.cv-0-50-illustration {\n    position: absolute;\n    bottom: -15px;\n    width: 304px;\n    z-index: 20;\n    left: calc(50% - 152px);\n}\n.cv-0-50 .c-page-block--other-subscriptions-digital {\n    display: none;\n}\n@media screen and (max-width: 1024px) {\n    .cv-0-50-banner-inner {\n        padding: 53px 24px 144px;\n    }\n    .cv-0-50-banner-plans {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: center;\n        gap: 16px;\n    }\n    .cv-0-50-plan {\n        padding: 24px 14px;\n        max-width: 344px;\n    }\n    .cv-0-50-illustration {\n        bottom: -14px;\n        width: 280px;\n        left: calc(50% - 140px);\n    }\n}\n@media screen and (max-width: 767px) {\n    .cv-0-50-banner {\n        text-align: left;\n        margin-bottom: 20px;\n    }\n    .cv-0-50-banner-inner {\n        padding: 34px 8px 121px;\n    }\n    .cv-0-50-banner-inner h1 {\n        font-size: 36px;\n        margin: 0 auto 3px;\n        max-width: 300px;\n        left: -22px;\n        position: relative;\n    }\n    .cv-0-50-banner-inner h2 {\n        font-size: 18px;\n        margin: 0 auto 33px;\n        max-width: 300px;\n        left: -22px;\n        position: relative;\n    }\n    .cv-0-50-banner-plans {\n        flex-direction: column;\n        gap: 11px;\n    }\n    .cv-0-50-plan {\n        padding: 18px 14px 16px;\n    }\n    .cv-0-50-plan-highlight {\n        margin-top: 37px;\n    }\n    .cv-0-50-illustration {\n        bottom: -11px;\n        width: 230px;\n        left: calc(50% - 115px);\n    }\n    .cv-0-50-price {\n        margin: 0 0 16px;\n    }\n}\n@media screen and (max-width: 359px) {\n    .cv-0-50-banner-inner {\n        padding: 34px 10px 121px;\n    }\n    .cv-0-50-banner-inner h1 {\n        left: 0;\n        position: relative;\n        margin: 0 0 5px;\n    }\n    .cv-0-50-banner-inner h2 {\n        left: 0;\n        position: relative;\n        margin: 0 0 34px;\n    }\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "27216660448", "endOfRange": 3333}, {"entityId": "27167940563", "endOfRange": 6666}, {"entityId": "27278820014", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["27180220623"], "weightDistributions": null, "decisionMetadata": null}, {"changes": [{"dependencies": [], "type": "custom_code", "id": "cc56966884714b13aed2343d57508cad", "value": function($){(function(){

    window.optimizely = window.optimizely || [];

    var url = window.location.href;

    if (url.indexOf('ONS7D01Z8H1SM') > -1) {
        window.optimizely.push({
            "type": "user",
            "attributes": {
                "plan-type": "7 day print"
            }
        });
    }

    if (url.indexOf('ONS6D02PFV6TF') > -1) {
        window.optimizely.push({
            "type": "user",
            "attributes": {
                "plan-type": "6 day print"
            }
        });
    }

    if (url.indexOf('ONSSTPD21') > -1) {
        window.optimizely.push({
            "type": "user",
            "attributes": {
                "plan-type": "Sunday Times print"
            }
        });
    }

    if (url.indexOf('ONSUl040QSD3K') > -1) {
        window.optimizely.push({
            "type": "user",
            "attributes": {
                "plan-type": "Print and digital"
            }
        });
    }

    var observerNode;
  
    var waitForTarget = setInterval(function() {
        
        var target = document.querySelector('main > div > div:nth-child(2)');
        var wrapper = document.querySelector('.abandonWrapper');
        var mobileForm = document.querySelector('.abandonWrapper > form');
        
        if (target || mobileForm) {
            clearInterval(waitForTarget);
            mobileForm ? observerNode = wrapper : observerNode = target;
            
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function() {
                    if (document.querySelector('h1').innerText === "Payment Type" || document.querySelector('h1').innerText === "Payment method") {
                        window.optimizely.push({
                            "type": "user",
                            "attributes": {
                                "checkout-stage": "3B (Payment method)"
                            }
                        });
                    }
                });    
            });

            var config = {
                attributes: true,
                childList: true,
                characterData: true
            };

            observer.observe(observerNode, config);
        nterval(waitForTarget);
    }, 5000);
})();
}}], "id": "21174700335", "name": null, "commitId": "21187200981", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18817253497": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "19605404013"], "audienceName": null, "changes": null, "id": "21185910036", "integrationSettings": null, "variations": [{"id": "21158830993", "name": null, "actions": []}, {"id": "21148910808", "name": null, "actions": [{"viewId": "21203020181", "changes": [{"value": "<style>form button#direct-debit {\n\tdisplay: none;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "2febef02b233418c886b5d0fe45af8bf"}]}]}], "weightDistributions": [{"entityId": "21148910808", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["21203020181"], "weightDistributions": null, "decisionMetadata": null}, {"changes": [{"id": "5a91eee5f5b14ed4b2700353a1a7b8d6", "type": "custom_code", "value": function($){((w) => {
	const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;

	window.optimizely = window.optimizely || [];

	const utils = {
		waitUntil: (condition, wait = 5000) => {
			return new Promise((resolve, reject) => {
				let stop;
	
				const timeout =
					wait && setTimeout(() => {
						stop = true; 
						reject();
					}, wait);
	
				const check = () => {
					if (stop) return;
					if (!condition()) return requestAnimationFrame(check);
	
					clearTimeout(timeout);
					resolve(condition());
				};
	
				requestAnimationFrame(check);
			});
		},
		
		sendEvent: (label) => {
			window.optimizely.push({
				type: 'event',
				eventName: label,
			});
		}
	};

	document.addEventListener('click', (e) => {
		if (e.target.closest('a[href^="/checkout?pc=REGMX"]')) {
			utils.sendEvent('CONV_Clicks_registration_paywall_CTA');
		}
	});

	const pageViewData = JSON.parse(localStorage.getItem('NUK 14.0 page'));

	if (!pageViewData) {
		localStorage.setItem(
		  	'NUK 14.0 page',
		  	JSON.stringify({
				pageView: 1,
				url: location.pathname,
		  	})
		);

		utils.sendEvent('Article_1_viewed_in_registration');
	}

	if (pageViewData && pageViewData.url !== location.pathname) {
		localStorage.setItem(
			'NUK 14.0 page',
			JSON.stringify({
				pageView: pageViewData.pageView + 1,
				url: location.pathname,
			})
		);
	}

	if (JSON.parse(localStorage.getItem('NUK 14.0 page')).pageView === 2) {
		utils.sendEvent('Article_2_viewed_in_registration');
	}

	if (JSON.parse(localStorage.getItem('NUK 14.0 page')).pageView === 3) {
		utils.sendEvent('Article_3_viewed_in_registration');
	}
	
	if (JSON.parse(localStorage.getItem('NUK 14.0 page')).pageView === 4) {
		utils.sendEvent('Article_limit_reached');
	}
})(window);
}, "dependencies": []}], "id": "26530410032", "name": null, "commitId": "26716110317", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18802034055": {}, "22275782302": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "19408543900", "20692010806"], "audienceName": null, "changes": null, "id": "26546110029", "integrationSettings": null, "variations": [{"id": "26555200079", "name": null, "actions": []}, {"id": "26545690044", "name": null, "actions": [{"viewId": "26516720042", "changes": [{"id": "f52ef3baeaac45e7b28e3cb3272dc415", "type": "custom_code", "value": function($){((w) => {
	const tag = 'cv-14-0';
	const exp = 'NUK 14.0';
	const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
	const qa = document.cookie.indexOf('cfQA') > -1;
	const log = qa
		? Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`)
		: () => {};

	const utils = {
		waitUntil: (condition, wait = 5000) => {
			return new Promise((resolve, reject) => {
				let stop;

				const timeout =
				wait &&
				setTimeout(() => {
					stop = true;
					reject();
				}, wait);

				const check = () => {
				if (stop) return;
				if (!condition()) return requestAnimationFrame(check);

				clearTimeout(timeout);
				resolve(condition());
				};

				requestAnimationFrame(check);
			});
		}
	};

	utils
		.waitUntil(() => document.body, 0)
		.then((body) => {
			if (!!window.sessionStorage.getItem('NUK 14.0')) return;

			window.sessionStorage.setItem('NUK 14.0', 'Activated');

			log('Running');

			body.insertAdjacentHTML('afterbegin', `
				<div class='${tag}-container'>
					<div class='${tag}-close'>
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
							<path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black"/>
				  		</svg>
					</div>
					<div class='${tag}-inner'>
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M22 9.98V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19L2.01 7C2.01 5.9 2.9 5 4 5H14.1C14.04 5.32 14 5.66 14 6C14 6.34 14.04 6.68 14.1 7H4L12 12L15.67 9.71C16.14 10.14 16.69 10.47 17.3 10.69L12 14L4 9V19H20V10.9C20.74 10.75 21.42 10.42 22 9.98ZM16 6C16 7.66 17.34 9 19 9C20.66 9 22 7.66 22 6C22 4.34 20.66 3 19 3C17.34 3 16 4.34 16 6Z" fill="black"/>
					 		</svg>
							<h3>Check your inbox</h3>
						</div>
						<p>Verify your email by clicking on the link sent to your inbox.</p>
					</div>
				</div>
			`);

			setTimeout(() => body.classList.add(tag), 500);

			const close = document.querySelector(`.${tag}-close`);

			close.addEventListener('click', () => {
				window.optimizely.push({
					type: "event",
					eventName: "closes-email-fly-in",
				});
				
				close.parentElement.remove();
			});
		});
})(window);
}, "dependencies": []}, {"id": "9788349b45254685b8ee95be80a4edd3", "type": "append", "selector": "head", "value": "<style>.cv-14-0-container {\n\tposition: fixed;\n\ttop: -500px;\n\tleft: calc(50% - 249px);\n\tdisplay: flex;\n\twidth: 498px;\n\tpadding: 16px;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tborder-top: 3px solid #005C8A;\n\tbackground: #FFF;\n\tbox-shadow: 0 16px 24px 0 rgba(17, 17, 17, 0.20);\n\tz-index: 2;\n\ttransition: top 1s;\n}\n.cv-14-0 .cv-14-0-container {\n\ttop: 80px;\n}\n.cv-14-0-close {\n\tcursor: pointer;\n    position: absolute;\n    right: 16px;\n    top: 20px;\n    height: 14px;\n    width: 14px;\n}\n.cv-14-0-inner {\n    display: flex;\n    flex-direction: column;\n}\n.cv-14-0-inner > div {\n    display: flex;\n    flex-direction: row;\n\tmargin-bottom: 9px;\n}\n.cv-14-0-inner > div > svg {\n\tmargin: 0 16px 0 0;\n}\n.cv-14-0-inner > div > h3 {\n\tcolor: #333;\n\tfont-family: Times, serif;\n\tfont-size: 24px;\n\tfont-style: normal;\n\tfont-weight: 700;\n\tline-height: normal;\n\tmargin-top: -1px;\n}\n.cv-14-0-inner p {\n\tfont-family: Roboto-Regular, Roboto-Regular-fallback, sans-serif;\n\tfont-size: 16px;\n\tfont-style: normal;\n\tfont-weight: 400;\n\tline-height: 24px; \n}\n@media only screen and (max-width:575px) {\n\t.cv-14-0-container {\n\t\ttop: 140px;\n\t\tleft: 24px;\n\t\twidth: calc(100% - 48px);\n\t}\n\t.cv-14-0-inner {\n\t\tmargin-top: -2px;\n\t}\n\t.cv-14-0-inner > div > svg {\n\t\tmargin: 0 8px 0 0;\n\t}\n\t.cv-14-0-inner > div > h3 {\n\t\tfont-size: 18px;\n\t\tmargin-top: 2px;\n\t}\n\t.cv-14-0-inner p {\n\t\tfont-size: 14px;\n\t}\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "26555200079", "endOfRange": 5000}, {"entityId": "26545690044", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["26516720042"], "weightDistributions": null, "decisionMetadata": null}, {"changes": [{"dependencies": [], "type": "custom_code", "id": "88801e341319410b8877fea0a151ddf5", "value": function($){window.optimizely = window.optimizely || [];

const exp = 'NUK 0.48';

window.sessionStorage.setItem(exp, true);

var section = window.nuk && nuk.ads.commercialSection;

window.optimizely.push({
	"type": "user",
	"attributes": {
		"website-section": section
	}
});

document.addEventListener('click', (e) => {
	if (e.target.matches('#returning-user-subscription-offer div[data-target=\'modal-inner-container\'] a')) {
		window.optimizely.push({
			type: "event",
			eventName: "clicks-returning-users-pop-up-cta",
		});
	}
});

let source;

if (window.location.href.includes('source=meta')) source = 'Meta';
if (window.location.href.includes('source=linkedin')) source = 'LinkedIn';
if (window.location.href.includes('source=TikTok')) source = 'TikTok';

if (source !== undefined) {
	window.optimizely.push({
		"type": "user",
		"attributes": {
			"nuk-048-source": source
		}
	});
}
}}], "id": "26709920627", "name": null, "commitId": "27187960016", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18802034055": {}, "22275782302": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "19408543900", "20692010806", "21175821657", "19011630586"], "audienceName": null, "changes": null, "id": "26744050389", "integrationSettings": null, "variations": [{"id": "26717900610", "name": null, "actions": [{"viewId": "26767850049", "changes": []}]}, {"id": "26728030547", "name": null, "actions": [{"viewId": "26767850049", "changes": [{"dependencies": [], "type": "custom_code", "id": "2686c6a60b1d40e0bf03f3b532578d5e", "value": function($){((w) => {
	const tag = 'cv-0-48';
	const exp = 'NUK 0.48';
	const qa = document.cookie.indexOf('cfQA') > -1;
	const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
	const log = qa ? Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`) : () => { };

	window.optimizely = window.optimizely || [];

	let offer = {
		short: "£9.99 a year",
		url: "https://www.thetimes.co.uk/subscribe/student/"
	};

	const utils = {
		waitUntil: (condition, wait = 5000) => {
			return new Promise((resolve, reject) => {
				let stop;
	
				const timeout =
					wait && setTimeout(() => {
						stop = true; 
						reject();
					}, wait);
	
				const check = () => {
					if (stop) return;
					if (!condition()) return requestAnimationFrame(check);
	
					clearTimeout(timeout);
					resolve(condition());
				};
	
				requestAnimationFrame(check);
			});
		}
	};

	const initArticle = () => {
		initReturningUser();

		utils
			.waitUntil(() => document.querySelector('#paywall-portal-page-footer > [data-testid=\'ConversionPopUp\'] > div h4'), 0)
			.then((heading) => {
				heading.textContent = 'Continue reading';
			});

		utils
			.waitUntil(() => document.querySelector('#paywall-portal-page-footer > [data-testid=\'ConversionPopUp\'] > div h4 + div'), 0)
			.then((sub) => {
				sub.innerHTML = `Enjoy unlimited digital access.<br>${offer.short}.`;

				var checkSub = setInterval(() => {
					var sub = document.querySelector('#paywall-portal-page-footer > [data-testid=\'ConversionPopUp\'] > div h4 + div');

					if (sub.innerHTML.includes(offer.short)) return;

					sub.innerHTML = `<p>Enjoy unlimited digital access.</p><p style='margin: 5px 0'>${offer.short}.</p>`;
				}, 10);

				setTimeout(() => clearInterval(checkSub), 2000);
			});

		utils
			.waitUntil(() => document.querySelector('#paywall-portal-page-footer > [data-testid=\'ConversionPopUp\'] > div a'), 0)
			.then((link) => {
				var checkLink = setInterval(() => {
					var link = document.querySelector('#paywall-portal-page-footer > [data-testid=\'ConversionPopUp\'] > div a');

					if (link.textContent === 'Subscribe now' && link.href.includes(offer.url)) return;

					link.textContent = 'Subscribe now';
					link.href = offer.url;
				}, 10);

				setTimeout(() => clearInterval(checkLink), 2000);

				link.nextElementSibling.querySelectorAll('p').forEach(para => {
					if (para.innerHTML.includes('Have an account')) {
						para.innerHTML = para.innerHTML.replace('Have an account', 'Already a subscriber');
					}
				});
			});
	};

	const initHome = () => {
		initReturningUser();

		utils
			.waitUntil(() => document.querySelector('#react-edition-homepage-m. Just ${offer.short}.`;
			});

		utils
			.waitUntil(() => document.querySelector('#react-edition-homepage-banner a'), 0)
			.then((element) => {
				element.textContent = 'Subscribe now';
				element.href = offer.url;
			});
	};

	const initReturningUser = () => {
		let checkForModal = setInterval(() => {
			const modal = document.querySelector('#returning-user-subscription-offer div[data-target=\'modal-inner-container\']');
			
			if (modal) {
				clearInterval(checkForModal);

				modal.querySelector('h3').innerHTML = 'Thank you for reading The Times and Sunday Times.';
				modal.querySelector('h3 + div').innerHTML = `Enjoy unlimited digital access.<br>Just ${offer.short}.`;
				modal.querySelector('a').innerText = 'Subscribe now';
				modal.querySelector('a').href = offer.url;
				modal.querySelector('a').parentElement.style.padding = '0 24px';

				if (document.querySelector(`.${tag}-login`)) return;

				modal.querySelector('a').parentElement.insertAdjacentHTML('afterend', `
					<p class='${tag}-login'>Already a subscriber? <a href="https://login.thetimes.co.uk?gotoUrl=https://www.thetimes.co.uk${window.location.pathname}" data-di-id="di-id-912fcc03-c67615">Log in<svg width="25" height="24" viewBox="0 0 25 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-di-res-id="23531b87-4ca88760" data-di-rand="1696930226144"><mask id="mask0_1724_60825" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24" fill="currentColor" style="mask-type: alpha;"><path d="M9.08984 16.59L13.6698 12L9.08984 7.41L10.4998 6L16.4998 12L10.4998 18L9.08984 16.59Z" fill="currentColor"></path></mask><g mask="url(#mask0_1724_60825)"><rect x="0.5" width="24" height="24" fill="currentColor"></rect></g></svg></a></p>
				`);> clearInterval(checkForModal), 6000);
	};

	if (window.location.pathname.indexOf('article') > -1) initArticle();
	if (window.location.pathname === '/') initHome();

})(window);
}}, {"id": "620F39FE-F2A0-40E9-9923-88927899F40F", "type": "append", "selector": "head", "value": "<style>#returning-user-subscription-offer section {\n    padding: 0 6%;\n}\n#returning-user-subscription-offer p {\n    margin-top: 1em;\n    margin-bottom: 0;\n    color: #333;\n}\n#react-edition-homepage-banner > div > div {\n  \talign-items: flex-start;\n}\n#paywall-portal-page-footer > [data-testid='ConversionPopUp'] > div h4 + div + div {\n\t\tdisplay: none\n}\n.cv-0-48-login {\n    font-family: Roboto-Regular, sans-serif;\n    font-size: 16px;\n    text-align: center;\n    margin-bottom: 24px;\n}\n.cv-0-48-login a {\n    color: rgb(0, 92, 138);\n    font-weight: 600;\n    text-decoration: none;\n}\n.cv-0-48-login svg {\n    vertical-align: -6px;\n    margin-left: -3px;\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "26717900610", "endOfRange": 5000}, {"entityId": "26728030547", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["26767850049"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "27310060122", "name": null, "commitId": "27320700005", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18802034055": {}, "22275782302": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "19075813113", "20155453121"], "audienceName": null, "changes": null, "id": "27282140192", "integrationSettings": null, "variations": [{"id": "27319080194", "name": null, "actions": []}, {"id": "27331770054", "name": null, "actions": [{"viewId": "27276640234", "changes": [{"id": "8a6b0a6b9dc34ede91be4be2b4b9d6da", "type": "custom_code", "value": function($){var utils = window["optimizely"].get('utils');

utils.waitForElement('.times-radio-cta').then(function(button) {
  button.addEventListener("click", () => {
  		window['optimizely'].push({
  		type: "event",
  		eventName: "times-radio-banner-cta"
		});
  });
  
});
}, "dependencies": []}, {"id": "009d94fe233d4e26865b8e6c5f8c5cc7", "type": "append", "selector": "head", "value": "<style>.times-radio-banner {\n  background-color: #0e2831;\n  color: white; \n  text-transform: uppercase;\n  text-align: center; \n  padding-top: 10px; \n  padding-bottom: 10px; \n  font-family: roboto;\n  font-weight: bold;\n}\n.times-radio-cta{\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   line-height: 18px;\n}\n\n.times-radio-cta svg{\n\tmargin-right: 10px;\n}\n\n.text-emphasize{\n  color: #EB7A7A;\n  margin-left: 3px;\n  margin-right: 3px;\n}</style>", "dependencies": []}, {"id": "36bd494f2a664d17975bedc9c9a30e5b", "type": "append", "dependencies": [], "selector": ".GlobalNav", "value": "<div class=\"times-radio-banner\">\n<a class=\"times-radio-cta\" href=\"https://www.thetimes.co.uk/radio/live\" target=\"_blank\">\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_78_5508)\">\n<rect width=\"18\" height=\"18\" rx=\"9\" fill=\"#EB7A7A\"/>\n<mask id=\"mask0_78_5508\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"1\" y=\"1\" width=\"16\" height=\"16\">\n<path d=\"M6.33398 4.33333V13.6667L13.6673 9L6.33398 4.33333Z\" fill=\"#0A0A0A\"/>\n</mask>\n<g mask=\"url(#mask0_78_5508)\">\n<rect x=\"1\" y=\"1\" width=\"14\" height=\"14\" fill=\"#073137\"/>\n</g>\n</g>\n<defs>\n<clipPath id=\"clip0_78_5508\">\n<rect width=\"18\" height=\"18\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>\n\nListen <span\nclass=\"text-emphasize\"     >Live</span> to Times Radio\n</a>\n</div>", "operator": "after"}]}]}, {"id": "27305160199", "name": null, "actions": [{"viewId": "27276640234", "changes": [{"id": "25d56d94c4824caa955391091c47303a", "type": "custom_code", "value": function($){var utils = window["optimizely"].get('utils');

utils.waitForElement('.times-radio-cta').then(function(button) {
  button.addEventListener("click", () => {
  		window['optimizely'].push({
  		type: "event",
  		eventName: "times-radio-banner-cta"
		});
  });
  
});
}, "dependencies": []}, {"id": "6433665743584655b4c797526a1d76ad", "type": "append", "selector": "head", "value": "<style>.times-radio-banner {\n  background-color: #0e2831;\n  color: white; \n  text-transform: uppercase;\n  text-align: center; \n  padding-top: 10px; \n  padding-bottom: 10px; \n  font-family: roboto;\n  font-weight: bold;\n}\n.times-radio-cta{\n   display: flex;\n   justify-content: center;\n   align-items: center;\n  line-height: 18px;\n}\n\n.times-radio-cta svg{\n\tmargin-right: 10px;\n}\n\n.text-emphasize{\n  color: #EB7A7A;\n}\n\n.text-emphasize{\n  color: #EB7A7A;\n  margin-left: 3px;\n  margin-right: 3px;\n}</style>", "dependencies": []}, {"id": "6382724bbe3c4e01aa3cf8bd03dadcd8", "type": "append", "dependencies": [], "selector": ".GlobalNav", "value": "<div class=\"times-radio-banner\">\n<a class=\"times-radio-cta\" href=\"https://www.thetimes.co.uk/radio/live\" target=\"_blank\">\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_78_5508)\">\n<rect width=\"18\" height=\"18\" rx=\"9\" fill=\"#EB7A7A\"/>\n<mask id=\"mask0_78_5508\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"1\" y=\"1\" width=\"16\" height=\"16\">\n<path d=\"M6.33398 4.33333V13.6667L13.6673 9L6.33398 4.33333Z\" fill=\"#0A0A0A\"/>\n</mask>\n<g mask=\"url(#mask0_78_5508)\">\n<rect x=\"1\" y=\"1\" width=\"14\" height=\"14\" fill=\"#073137\"/>\n</g>\n</g>\n<defs>\n<clipPath id=\"clip0_78_5508\">\n<rect width=\"18\" height=\"18\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>\n\nListen <span\nclass=\"text-emphasize\"     > free</span> to Times Radio\n</a>\n</div>", "operator": "after"}]}]}], "weightDistributions": [{"entityId": "27319080194", "endOfRange": 3300}, {"entityId": "27331770054", "endOfRange": 3400}, {"entityId": "27305160199", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["27276640234"], "weightDistributions": null, "decisionMetadata": null}, {"changes": [{"id": "c6e137a2a7564128b775827fec9b315f", "type": "custom_code", "value": function($){((w) => {
	const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;

	window.optimizely = window.optimizely || [];

	window.localStorage.setItem('NUK 3.14', 'Activated');

	const utils = {
		waitUntil: (condition, wait = 5000) => {
			return new Promise((resolve, reject) => {
				let stop;
	
				const timeout =
					wait && setTimeout(() => {
						stop = true; 
						reject();
					}, wait);
	
				const check = () => {
					if (stop) return;
					if (!condition()) return requestAnimationFrame(check);
	
					clearTimeout(timeout);
					resolve(condition());
				};
	
				requestAnimationFrame(check		eventName: label,
			});
		}
	};

	document.addEventListener('click', (e) => {
		if (e.target.closest('[data-testid="ConversionPopUp"] a')) {
			utils.sendEvent('CONV_Clicks_registration_paywall_CTA');
		}
	});

	const pageViewData = JSON.parse(localStorage.getItem('NUK 3.14 page'));

	if (!pageViewData) {
		localStorage.setItem(
			'NUK 3.14 page',
			JSON.stringify([{
				pageView: 1,
				url: location.pathname,
			}])
		);

		utils.sendEvent('Article_1_viewed_in_registration');
	}

	if (pageViewData) {
		var ement.url == location.pathname);
		if(checkURL.length == 0){
			pageViewData.unshift({
				pageView: pageViewData.length + 1,
				url: location.pathname,
			})
			localStorage.setItem(
				'NUK 3.14 page',
				JSON.stringify(pageViewData)
			);
		}
	}

	if (JSON.parse(localStorage.getItem('NUK 3.14 page'))[0].pageView === 2) {
		utils.sendEvent('Article_2_viewed_in_registration');
	}

	if (JSON.parse(localStorage.getItem('NUK 3.14 page'))[0].pageView === 3) {
		utils.sendEvent('Article_3_viewed_in_registration');
	}
	
	if (JSON.parse(localStorage.getItem('NUK 3.14 page'))[0].pageView === 4) {
		utils.sendEvent('Article_limit_reached');
	}
})(window);
}, "dependencies": []}], "id": "27305640093", "name": null, "commitId": "27295300226", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18802034055": {}, "22275782302": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "19408543900", "20692010806", "25469260064"], "audienceName": null, "changes": null, "id": "27297350087", "integrationSettings": null, "variations": [{"id": "27301860055", "name": null, "actions": []}, {"id": "27268900073", "name": null, "actions": [{"viewId": "27301320072", "changes": [{"id": "5068314e502b47988bb53f1d3c4c9cd8", "type": "custom_code", "value": function($){((w) => {
	const tag = 'cv-3-14';
	const exp = 'NUK 3.14';
	const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
	const qa = document.cookie.indexOf('cfQA') > -1;
	const log = qa
		? Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`)
		: () => { };

	// if (!!window.localStorage.getItem('NUK 3.14')) return;

	const utils = {
		waitUntil: (condition, wait = 5000) => {
			return new Promise((resolve, reject) => {
				let stop;

				const timeout =
					wait &&
					setTimeout(() => {
						stop = true;
						reject();
					}, wait);

				const check = () => {
					if (stop) return;
					if (!condition()) return requestAnimationFrame(check);

					clearTimeout(timeout);
					resolve(condition());
				};

				requestAnimationFrame(check);
			}).waitUntil(() => document.body, 0)
		.then((body) => {
		(() => body.classList.add(tag), 500);
			const formData = JSON.parse(window.sessionStorage.getItem('formData'));
			var subscribeLink = "https://www.thetimes.co.uk/subscribe/digital/";
			if (formData) {
				if (formData.promoCode.includes("MX13")) {
					subscribeLink = "https://www.thetimes.co.uk/subscribe/digital/";
				} else if (formData.promoCode.includes("MX14")) {
					subscribeLink = "https://globalstore.thetimes.co.uk/";
				} else if (formData.promoCode.includes("MX15")) {
					subscribeLink = "https://store.thetimes.ie/?_ga=2.128421260.1441654992.1705403581-399402560.1704370043&_gac=1.146973381.1705403705.CjwKCAiA75itBhA6EiwAkho9e2YphIF9BzxD9IYFsb3XFlWtwYKpcQ4N4kTIYDKvSYFf4xwj8T8v-xoCfDwQAvD_BwE";
				}
			}
			const storageData = JSON.parse(localStorage.getItem('NUK 3.14 page'));
			if (storageData) {
				if (storageData[0].pageView < 4) {
					const step1and2Text = `<h3>You have ${3 - storageData[0].pageView} free article${(3 - storageData[0].pageView) != 1 ? 's' : ''} remaining</h3>`;
					const step3Text = `<div class="wrapper">
						<div class="content">
							<p>You have reached your free articles for this month.</p>
							<h5>Upgrade for unlimited article access</h5>
						</div>
						<a href="${subscribeLink}">Subscribe now</a>
					</div>`;

					// body.querySelector('.ArticlePager-container')
					utils
						.waitUntil(() => body.querySelector('.BodyContainer'), 0)
						.then((BodyContainer) => {
							BodyContainer.insertAdjacentHTML('beforeend', `<div class="${tag}-main Container"><div class="${tag}-progress-bar page-${storageData[0].pageView}">
								<div class="progress-bar-fill"></div>
							</div>
							<div class="${tag}-remaining">
								${(storageData[0].pageView === 1 || storageData[0].pageView === 2) ? step1and2Text : storageData[0].pageView === 3 ? step3Text : ""} 
							</div>
							</div>`);

							utils
								.waitUntil(() => body.querySelector('.ArticlePager'), 0)
								.then((ArticlePager) => {
									ArticlePager.prepend(document.querySelector(`.${tag}-main`));
								});
						});
				}

				utils.waitUntil(() => document.querySelector('[data-testid="ConverText = "Subscribe now";
					});
			}
		});
})(window);
}, "dependencies": []}, {"id": "6714593f9b664418aa2d0cbc66ab6e85", "type": "append", "selector": "head", "value": "<style>.cv-3-14-main{\n\tposition: sticky;\n\tbottom: 0;\n\twidth: 100%;\n}\n\n.ArticlePager .cv-3-14-main{\n\tposition: initial;\n}\n\n.cv-3-14-remaining {\n\tpadding: 30px 15px;\n\tbackground: #F5F5F5;\n}\n\n.cv-3-14-remaining h3{\n\tfont-family: \"Times Modern\";\n    font-size: 32px;\n    font-weight: 400;\n    line-height: 24px;\n    text-align: center;\n}\n\n.cv-3-14-remaining .wrapper {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.cv-3-14-remaining .wrapper p {\n\tfont-family: Roboto;\n\tfont-size: 16px;\n\tfont-weight: 400;\n\tline-height: 24px;\n\tmargin-bottom: 4px;\n}\n\n.cv-3-14-remaining .wrapper h5 {\n\tfont-family: \"Times Modern\";\n\tfont-size: 24px;\n\tfont-weight: 400;\n\tline-height: 24px;\n}\n\n.cv-3-14-remaining .wrapper a {\n\tpadding: 16px;\n\tbackground: #069;\n\tcolor: #FFF;\n\tfont-family: Roboto;\n\tfont-size: 16px;\n\tfont-weight: 400;\n\tline-height: 16px;\n\twidth: 100%;\n    max-width: 308px;\n    text-align: center;\n    margin-left: 49px;\n\ttransition: background-color 0.25s ease-in-out 0s;\n}\n\n.cv-3-14-remaining .wrapper a:hover{\n\tbackground-color: rgb(0, 82, 122);\n}\n\n.cv-3-14-progress-bar {\n    height: 8px;\n    background: #C8DFEC;\n}\n\n.cv-3-14-progress-bar .progress-bar-fill{\n\tbackground: #069;\n\theight: 100%;\n}\n\n.cv-3-14-progress-bar.page-1 .progress-bar-fill{\n\twidth: 33.33%;\n}\n\n.cv-3-14-progress-bar.page-2 .progress-bar-fill{\n\twidth: 66.66%;\n}\n\n.cv-3-14-progress-bar.page-3 .progress-bar-fill{\n\twidth: 100%;\n}\n\n.cv-3-14 .ArticlePager{\n\tdisplay: block;\n}\n\n@media screen and (max-width: 767px){\n\t.cv-3-14-remaining{\n\t\tpadding: 24px 16px;\n\t\tmargin-bottom: -1px;\n\t}\n\n\t.cv-3-14-remaining h3{\n\t\tfont-size: 20px;\n\t}\n\n\t.cv-3-14-remaining .wrapper{\n\t\tflex-direction: column;\n\t}\n\n\t.cv-3-14-remaining .wrapper p{\n\t\tfont-size: 14px;\n\t\ttext-align: center;\n\t}\n\n\t.cv-3-14-remaining .wrapper h5{\n\t\tfont-size: 20px;\n\t\tmargin-bottom: 16px;\n\t\ttext-align: center;\n\t}\n\n\t.cv-3-14-remaining .wrapper a{\n\t\tmargin-left: 0;\n\t}\n\n\t/* Step 4 */\n\t.cv-3-14 [data-testid=\"ConversionPopUp\"] > div{\n\t\tpadding: 24px 24px 8px;\n\t}\n\n\t.cv-3-14 [data-testid=\"ConversionPopUp\"] > div > div > div{\n\t\tcolor: #656565;\n\t\tpadding-top: 11px;\n\t}\n\n\t.cv-3-14 [data-testid=\"ConversionPopUp\"] > div > div > div:first-child{\n\t\tfont-size: 14px;\n\t\tline-height: 21px;\n\t\tpadding-bottom: 14px;\n\t\tpadding-top: 0;\n\t}\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "27301860055", "endOfRange": 100}, {"entityId": "27268900073", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["27301320072"], "weightDistributions": null, "decisionMetadata": null}, {"changes": [{"id": "77a17a774f7e46d5ae041c03d6890704", "type": "custom_code", "value": function($){window.optimizely = window.optimizely || [];

const tag = 'cv-3-16';
const utils = window.optimizely.get('utils');

utils.waitForElement('body').then(() => {
	if (
		nuk.user &&
		nuk.user.isRegisteredUser
	) {
		window.optimizely.push({
			"type": "user",
			"attributes": {
			  "registered-user": "True"
			}
		});
	}

	const articleEvents = () => {
		const registered = nuk.user.isRegisteredUser;
		const pageViewData = JSON.parse(localStorage.getItem(`${tag}-article-viewed`));
		
		if (!pageViewData && registered) {
			window.localStorage.setItem(
				`${tag}-article-viewed`,
				JSON.stringify({
					pageView: 1,
					url: location.pathname,
				})
			);

			if (nuk.user.isRegisteredUser && registered) {
				window.optimizely.push({
					type: 'event',
					eventName: 'Article_1_viewed_in_registration',
				});
			}
		}

		if (pageViewData && registered) {
			if (pageViewData.url !== location.pathname) {
				localStorage.setItem(
					`${tag}-article-viewed`,
					JSON.stringify({
						pageView: pageViewData.pageView + 1,
						url: location.pathname,
					})
				);
			}

			if (pageViewData.pageView == 1) {
				window.optimizely.push({
					type: 'event',
					eventName: 'Article_2_viewed_in_registration',
				});
			}

			if (pageViewData.pageView == 2) {
				window.optimizely.push({
					type: 'event',
					eventName: 'Article_3_viewed_in_registration',
				});
			}

			if (pageViewData.pageView == 3) {
				window.optimizely.push({
					type: 'event',
					eventName: 'Article_limit_reached',
				});

				localStorage.removeItem(`${tag}-article-viewed`);
			}
		}
	};

	if (location.pathname.indexOf('/atTimeout(() => articleEvents(), 2000);
	}

	utils
		.waitForElement('a[href^="/checkout?pc=REGMX"]')
		.then((element) => {
			eleion_paywall_CTA',
				});
			});
		});
});
}, "dependencies": []}], "id": "27171810142", "name": null, "commitId": "27361920078", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18802034055": {}, "22275782302": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "20692010806", "19408543900", "25469260064", "20027145419", "19011630586"], "audienceName": null, "changes": null, "id": "27164870151", "integrationSettings": null, "variations": [{"id": "27166920190", "name": null, "actions": [{"viewId": "27166250145", "changes": [{"id": "1B0830E6-D146-42B9-89D5-88CD36E3D7D9", "type": "custom_code", "value": function($){((w) => {
	document.addEventListener('click', (event) => {
		if (event.target.matches('[data-testid="ConversionPopUp"] a[href^="/checkout?pc=REGMX"]')) {
			window.optimizely.push({
				type: 'event',
				eventName: 'nuk-3-16-continue-cta',
			});
		}
	});
})(window);
}, "dependencies": []}]}]}, {"id": "27162470173", "name": null, "actions": [{"viewId": "27166250145", "changes": [{"id": "D071DEC2-B41A-4C32-8B7A-6678C562DF02", "type": "custom_code", "value": function($){((w) => {
	const tag = 'cv-3-16';
	const exp = 'NUK 3.16 v1';
	const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
	const qa = document.cookie.indexOf('cfQA') > -1;
	const mobile = window.innerWidth < 1280;
	const log = qa
		? Function.prototype.bind.call(console.log, console, `[CONV] ${exp} |`)
		: () => {};

	let checkoutLink = '';
	let price = '£0.86';

	window.optimizely = window.optimizely || [];

	const utils = {
		waitUntil: (condition, wait = 10000) => {
			return new Promise((resolve, reject) => {
				let stop;

				const timeout =
				wait &&
				setTimeout(() => {
					stop = true;
					reject();
				}, wait);

				const check = () => {
				if (stop) return;
				if (!condition()) return requestAnimationFrame(check);

				clearTimeout(timeout);
				resolve(condition());
				};

				requestAnimationFrame(check);
			}a[href^="/checkout?pc=REGMX"]'), 0)
		.then((element) => {
			document.body.classList.add(tag);

			const optionsObj = [
				{
					label: 'Create account',
					title: 'Free',
					list: [
						'Access to this article'
					]
				},
				{
					label: 'Subscribe',
					title: `${price}/day`,
					list: [
						'Unlimited access to all articles',
						'Save and share articles'
					]
				}
			];

			const markup = `
				<div class='${tag}-option-container'>
					${optionsObj.map(option => {
						return `
							<div class='${tag}-option'>
								<div class='${tag}-radio'>
									<input type='radio' name='${tag}-radio' value='${option.label}'>
									<span class='${tag}-checkmark'></span>
									<label for='${option.label}'>${option.label}</label>
								</div>
								<div class='${tag}-info'>
									<h4>${option.title}</h4>
									m}</li>
										`;
									}).join('')}
									</ul>
								</div>
							</div>
						`;
					}).join('')}
				</div>
				<div class='${tag}-button-container'></div>
			`;

			element.insertAdjacentHTML('beforebegin', markup);

			log('running');

			const paywall = document.querySelector('[data-testid="ConversionPopUp"]');
			const sub = document.querySelector('[data-testid="ConversionPopUp"] h4');
			const cta = element;
			const email = document.querySelector('input[aria-label="registration-email-input"]');
			const list = document.querySelector(`.${tag}-info li`);
			const ctaContainer = document.querySelector(`.${tag}-button-container`);

			checkoutLink = cta.href;

			sub.insertAdjacentHTML('beforebegin', `<div class='${tag}-back'><div>`);

			ctaContainer.appendChild(email);

			sub.textContent = 'Continue reading';
			cta.textContent = mobile ? 'Create account' : 'Continue';
			email.placeholder = 'Enter email address';

			document
				.querySelectorAll(`.${tag}-radio`)
				.forEach(element => {
					ellector('input').click();
					});	
				});

			document
				.querySelectorAll(`.${tag}-radio input`)
				.forEach((element, index) => {
					element.addEventListener('change', () => {
						if (!mobile) {
							if (element.checked) {
								if (index === 0) {
									paywall.classList.add(`${tag}-create`);
									cta.href = checkoutLink;
								} else {
									paywall.classList.remove(`${tag}-create`);
									cta.href = window.nuk.article.storefrontConfig;;
								}
							}
						} else {
							if (index === 0) {
								cta.textContent = 'Create account';
							} else {
								cta.textContent = 'View subscriptions';
							}
						}

						const invalid = document.querySelector('.cv-13-0-invalid + p');
						if (invalid) invalid.style.display = 'none';
					});

					if (index === 0) element.click();
				});
			
			if (mobile) {
				cta.addEventListener('click', (e) => {
					if (document.querySelector(`.${tag}-option:first-child .${tag}-radio input:checked`)) {
						if (!document.querySelector(`.${tag}-create`)) e.preventDefault();
						
						setTimeout(() => {
							paywall.classList.add(`${tag}-create`);
							sub.textContent = 'Create account';
							cta.textContent = 'Continue';
							list.textContent = 'Access this article';
						}, 100);
					} else {
						e.preventDefault();

						paywall.classList.remove(`${tag}-create`);
						window.location.replace(window.nuk.article.storefrontConfig);
					}
				});

				const back = document.querySelector(`.${tag}-back`);

				back.addEventListener('click', () => {
					paywall.classList.remove(`${tag}-create`);
					sub.textContent = 'Continue reading';
					cta.textContent = 'Create account';
					list.textContent = 'access to this article';
					if (document.querySelector('.cv-13-0-invalid')) {
						document.querySelector('.cv-13-0-invalid').classList.remove('cv-13-0-invalid');
					}
				});
			}
		});

	document.addEventListener('click', (event) => {
		if (event.target.matches(`.${tag}-button-container + a`)) {
			if (event.target.innerText.includes('Continue')) {
				window.optimizely.push({
					type: 'event',
					eventName: 'nuk-3-16-continue-cta-v1',
				});
			}

			if (event.target.innerText.includes('View subscriptions')) {
				window.optimizely.push({
					type: 'event',
					eventName: 'nuk-3-16-view-subs-v1',
				});
			}
		}
	});
})(window);
}, "dependencies": []}, {"id": "0820CF5A-D69B-44F1-B506-6AEF5C764991", "type": "append", "selector": "head", "value": "<style>input[aria-label=\"registration-email-input\"] {\n    max-height: 48px;\n}\n.cv-3-16 [data-testid=\"ConversionPopUp\"] > div {\n    padding: 20px 0;\n}\n.cv-3-16 [data-testid=\"ConversionPopUp\"] > div > div {\n    width: 719px;\n}\n.cv-3-16 [data-testid=\"ConversionPopUp\"] h4 {\n    font-size: 24px;\n    font-family: TimesModern-Bold, TimesModern-Bold-fallback, serif;\n    font-weight: 400;\n}\n.cv-3-16 [data-testid=\"ConversionPopUp\"] h4 + div {\n    display: none;\n}\n.cv-3-16 .cv-13-0-email-container {\n    border: 1px solid rgba(0, 0, 0, 0.20);\n}\n.cv-3-16-option-container {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    gap: 33px;\n    margin: 8px 0 0;\n}\n.cv-3-16-option {\n    border-radius: 4px;\n    border: 1px solid rgba(0, 0, 0, 0.20);\n    background: #FFF;\n    width: 100%;\n    padding: 16px;\n}\n.cv-3-16-radio {\n    position: relative;\n    text-align: left;\n    font-family: Roboto, sans-serif;\n    font-size: 16px !important;\n    font-style: normal;\n    font-weight: 500;\n    color: #333;\n    padding: 2px 0 16px;\n    cursor: pointer;\n}\n.cv-3-16-radio input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n}\n.cv-3-16-radio label {\n    padding-left: 30px;\n    cursor: pointer;\n    -webkit-text-size-adjust: 100%; \n}\n.cv-3-16-checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 22px;\n    width: 22px;\n    border: 2px solid #CCC;\n    background-color: #F5F5F5;\n    border-radius: 50%;\n}\n.cv-3-16-radio:hover input ~ .cv-3-16-checkmark {\n    background-color: #F5F5F5;\n}\n.cv-3-16-radio input:checked ~ .cv-3-16-checkmark {\n    background-color: #FFF;\n    border: 2px solid #005C8A;\n}\n.cv-3-16-checkmark:after {\n    content: '';\n    position: absolute;\n    display: none;\n}\n.cv-3-16-radio:hover input ~ .cv-3-16-checkmark:after {\n    display: block;\n    background: #CCC;\n}\n.cv-3-16-radio input:checked ~ .cv-3-16-checkmark:after {\n    display: block;\n    background: #005C8A;\n}\n.cv-3-16-radio .cv-3-16-checkmark:after {\n    top: 3px;\n    left: 3px;\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n}\n.cv-3-16-info {\n    padding: 16px 0 0;\n    border-top: 1px solid #CCC;\n}\n.cv-3-16-info h4 {\n    font-family: TimesModern-Regular, TimesModern-Regular-fallback, serif;\n    font-size: 24px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 27px;\n    text-align: left;\n    margin: 0;\n}\n.cv-3-16-info ul {\n    list-style: none;\n    padding-left: 0;\n    margin: 0;\n    text-align: left;\n}\n.cv-3-16-info li {\n    font-family: Roboto, sans-serif;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 18px;\n    color: #535353;\n    background: url(https://cfactory-img.s3.amazonaws.com/NUK/3.16/tick.svg) no-repeat left 5px;\n    padding: 3px 0 0 24px;\n    list-style: none;\n    margin: 0;\n}\n.cv-3-16 .cv-13-0-email-container {\n    display: none;\n    flex-direction: row;\n    width: 100%;\n    height: 48px;\n}\n.cv-3-16 .cv-3-16-create .cv-13-0-email-container {\n    display: flex;\n}\n.cv-3-16-button-container {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    gap: 16px;\n    width: 100%;\n    height: 50px;\n    margin: 16px 0 25px;\n}\n.cv-3-16-button-container + a {\n    margin: 8px 0 16px;\n}\n.cv-3-16 .cv-13-0-cta-overlay {\n    margin: 0\n}\n.cv-3-16 .cv-13-0-email-container {\n    margin: 0\n}\n.cv-3-16-create .cv-13-0-cta-overlay {\n    max-width: 225px;\n}\n.cv-3-16 .cv-13-0-email-container.cv-13-0-invalid + p {\n    position: absolute;\n    top: 45px;\n}\n.cv-3-16 .cv-3-16-create .cv-13-0-invalid {\n    margin: 0;\n}\n.cv-3-16 .cv-13-0-invalid + p + .cv-13-0-cta-overlay {\n    margin: 0;\n}\n@media only screen and (max-width:1279px) {\n    .cv-3-16 [data-testid=\"ConversionPopUp\"] {\n        background: #FFF;\n    }\n    .cv-3-16 [data-testid=\"ConversionPopUp\"] > div > div {\n        width: 100%;\n        padding: 0 18px;\n    }\n    .cv-3-16 [data-testid=\"ConversionPopUp\"] > div > div > h4 {\n        width: 100%;\n        border-bottom: 1px solid #CCC;\n    }\n    .cv-3-16-option-container {\n        flex-direction: column;\n        gap: 0;\n    }\n    .cv-3-16-option {\n        border: none;\n        padding: 8px 16px;\n    }\n    .cv-3-16-radio {\n        padding: 2px 0 0 4px;\n    }\n    .cv-3-16-info {\n        display: flex;\n        flex-direction: row;\n        border: none;\n        padding: 4px 0 0 35px;\n    }\n    .cv-3-16 .cv-3-16-info h4 {\n        font-family: Roboto, sans-serif;\n        font-weight: 300;\n        font-size: 14px;\n        line-height: 150%;\n        color: #333;\n        padding: 0;\n    }\n    .cv-3-16-info ul {\n        margin: 0 0 0 5px;\n    }\n    .cv-3-16-info li {\n        font-family: Roboto, sans-serif;\n        font-weight: 300;\n        font-size: 14px;\n        line-height: 150%;\n        color: #696969;\n        background: none;\n        padding: 0;\n        text-transform: lowercase;\n    }\n    .cv-3-16-info li:nth-child(2) {\n        display: none;\n    }\n    .cv-3-16-button-container {\n        flex-direction: column;\n        gap: 0;\n        margin: 0;\n        height: auto;\n    }\n    .cv-3-16-create .cv-13-0-cta-overlay {\n        max-width: none;\n    }\n    .cv-3-16 [data-testid=\"ConversionPopUp\"]:not(.cv-3-16-create) input {\n        display: none;\n    }\n    .cv-3-16-back {\n        position: absolute;\n        left: 23px;\n        top: 23px;\n        width: 24px;\n        height: 24px;\n        background: url('data:image/svg+xml, <svg fill=\"none\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m15.41 16.59-4.58-4.59 4.58-4.59-1.41-1.41-5.99997 6 5.99997 6z\" fill=\"%23005C8A\"/></svg>') center no-repeat;\n        cursor: pointer;\n    }\n    .cv-3-16-back {\n        display: none;\n    }\n    .cv-3-16-create .cv-3-16-option-container {\n        display: flex;\n    }\n    .cv-3-16-create .cv-3-16-option {\n        padding: 8px 0;\n    }\n    .cv-3-16-create .cv-3-16-back {\n        display: block;\n    }\n    .cv-3-16-create .cv-3-16-option-container .cv-3-16-option:nth-child(2),\n    .cv-3-16-create .cv-3-16-radio {\n        display: none;\n    }\n    .cv-3-16-create .cv-3-16-info {\n        flex-direction: column;\n        padding: 4px 0 0;\n        margin: 0 0 3px;\n    }\n    .cv-3-16-create .cv-3-16-info h4 {\n        font-family: TimesModern-Bold, TimesModern-Bold-fallback, serif;\n        font-size: 24px;\n        font-style: normal;\n        font-weight: normal;\n        line-height: 27px;\n        text-align: left;\n        margin: 0;\n    }\n    .cv-3-16-create .cv-3-16-info li {\n        text-transform: none;\n        color: #333;\n        font-size: 16px;\n    }\n    .cv-3-16-create .cv-3-16-info ul,\n    .cv-3-16-create input {\n        margin: 0;\n    }\n    .cv-3-16-create a {\n        margin: 16px 0;\n    }\n}</style>", "dependencies": []}]}]}, {"id": "27165900121", "name": null, "actions": [{"viewId": "27166250145", "changes": [{"id": "15B0A1B7-FCB9-4731-AD77-4EEE4F0AB2D5", "type": "custom_code", "value": function($){((w) => {
	const tag = 'cv-3-16';
	const exp = 'NUK 3.16 v2';
	const window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : w;
	const qa = document.cookie.indexOf('cfQA') > -1;
	const mobile = window.innerWidth < 1280;
	const log = qa
		? Function.prototype.bind.call(console.log, `[CONV] ${exp} |`)
		: () => {};
		
	let price = '£0.86';

	window.optimizely = window.optimizely || [];

	const utils = {
		waitUntil: (condition, wait = 10000) => {
			return new Promise((resolve, reject) => {
				let stop;

				const timetop = true;
					reject();
				}, wait);

				const check = () => {
				if (stop) return;
				if (!condition()) return requestAnimationFrame(check);

				clearTimeout(timeout);
				resolve(condition());
				};

				requestAnimationFrame(check);
			});
		}
	};

	utils
		.waitUntil(() => document.querySelector('a[href^="/checkout?pc=REGMX"]'), 0)
		.then((element) => {
			document.body.classList.add(tag);
			document.body.classList.add(tag + '-v2');

			const optionsObj = [
				{
					label: 'Create an account',
					title: 'Free',
					list: [
						'<b>Free</b> access to this article'
					]
				},
				{
					label: 'Subscribe',
					title: `${price}/day`,
					list: [
						'<b>£0.86/day</b> for unlimited access'
					]
				}
			];

			const markup = `
				<div class='${tag}-option-container'>
					${optionsObj.map((option, index) => {
						return `
							<div class='${tag}-option'>
                                <p>${option.label}</p>
								<div class='${tag}-info'>
									<h4>${option.title}</h4>
									<ul>
									${option.list.map(item => {
										return `
											<li>${item}</li>
										`;
									}).join('')}
									</ul>
								</div>
                                ${
                                    index === 0
                                        ? `<div class='${tag}-button-container'></div>`
                                        : `<a href='${window.nuk.article.storefrontConfig}' class='${tag}-subscribe-cta'>Subscribe now</a>`
                                }
							</div>
						`;
					}).join('')}
				</div>
				<div class='${tag}-scroll-bottom active'></div>
			`;

			element.insertAdjacentHTML('beforebegin', markup);

            log('running');

			const sub = document.querySelector('[data-testid="ConversionPopUp"] h4');
			const scrollBottom = document.querySelector(`.${tag}-scroll-bottom`);
			const cta = element;
			const email = document.querySelector('input[aria-label="registration-email-input"]');
			const ctaContainer = document.querySelector(`.${tag}-button-container`);
			const ad = document.getElementById('mobile-sticky-banner-wrapper');
			const paywall = sub.parentElement;

			ctaContainer.appendChild(email);
			ctaContainer.appendChild(cta);

			scrollBottom.insertAdjacentHTML('beforeend', document.querySelector(`.${tag}-scroll-bottom + div`).outerHTML);

			sub.textContent = 'Two ways to continue reading';
			cta.textContent = mobile ? 'Continue' : 'Continue';
			email.placeholder = 'Enter email address';
			if (ad) scrollBottom.style.bottom = ad.clientHeight + 'px';

			paywall.parentElement.addEventListener('scroll', () => {
				paywall.parentElement.scrollTop > 0
					? sub.classList.add(`${tag}-scroll`)
					: sub.classList.remove(`${tag}-scroll`);

				paywall.parentElement.scrollTop > 128
					? scrollBottom.classList.remove('active')
					: scrollBottom.classList.add('active');

				const ad = document.getElementById('mobile-sticky-banner-wrapper');
				if (ad) scrollBottom.style.bottom = ad.clientHeight + 'px';
			});
		});

	document.addEventListener('click', (event) => {
		if (event.target.matches(`.${tag}-button-container a`)) {
			if (event.target.innerText.includes('Continue')) {
				window.optimizely.push({
					type: 'event',
					eventName: 'nuk-3-16-continue-cta-v2',
				});
			}
		}

		if (event.target.matches('a')) {
			if (event.target.innerText.includes('Subscribe now')) {
				window.optimizely.push({
					type: 'event',
					eventName: 'nuk-3-16-subscribe-now-v2',
				});
			}
		}
	});
})(window);
}, "dependencies": []}, {"id": "9F0EA8E2-0A3B-4CC7-9E42-885FADE1F977", "type": "append", "selector": "head", "value": "<style>input[aria-label=\"registration-email-input\"] {\n    max-height: 48px;\n}\n.cv-3-16 [data-testid=\"ConversionPopUp\"] > div {\n    padding: 20px 0;\n}\n.cv-3-16 [data-testid=\"ConversionPopUp\"] > div > div {\n    width: 719px;\n}\n.cv-3-16 [data-testid=\"ConversionPopUp\"] h4 {\n    font-size: 24px;\n}\n.cv-3-16 [data-testid=\"ConversionPopUp\"] h4 + div {\n    display: none;\n}\n.cv-3-16 .cv-13-0-email-container {\n    border: 1px solid rgba(0, 0, 0, 0.20);\n}\n.cv-3-16-option-container {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    gap: 16px;\n    margin: 8px 0 16px;\n}\n.cv-3-16-option {\n    border-radius: 4px;\n    border: 1px solid rgba(0, 0, 0, 0.20);\n    background: #FFF;\n    width: 100%;\n    padding: 12px 16px;\n}\n.cv-3-16-option:nth-child(2) .cv-3-16-subscribe-cta {\n    display: flex;\n    -webkit-box-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    justify-content: center;\n    background-color: rgb(0, 92, 138);\n    border: 0px;\n    color: rgb(255, 255, 255);\n    font-family: Roboto-Medium, sans-serif;\n    font-size: 16px;\n    width: 100%;\n    height: 48px;\n    line-height: 24px;\n    margin: 65px 0px 0;\n    text-align: center;\n    text-decoration: none;\n    transition: background-color 0.25s ease-in-out 0s;\n}\n.cv-3-16-option > p:first-child {\n    font-family: Roboto, sans-serif;\n    font-weight: normal;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 19px;\n    color: #333;\n    text-align: left;\n}\n.cv-3-16-info {\n    padding: 8px 0 0;\n}\n.cv-3-16-info h4 {\n    font-family: TimesModern-Regular, TimesModern-Regular-fallback, serif;\n    font-size: 24px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 27px;\n    text-align: left;\n    margin: 0;\n}\n.cv-3-16-info ul {\n    list-style: none;\n    padding-left: 0;\n    margin: 0;\n    text-align: left;\n}\n.cv-3-16-info li {\n    font-family: Roboto, sans-serif;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 18px;\n    color: #535353;\n    background: url(https://cfactory-img.s3.amazonaws.com/NUK/3.16/tick.svg) no-repeat left 5px;\n    padding: 3px 0 0 24px;\n    list-style: none;\n    margin: 0;\n}\n.cv-3-16 .cv-13-0-email-container {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    height: 48px;\n}\n.cv-3-16-button-container {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    gap: 0;\n    width: 100%;\n    height: 50px;\n    margin: 0;\n}\n.cv-3-16-button-container a {\n    margin: 0;\n}\n.cv-3-16 .cv-13-0-cta-overlay {\n    margin: 0\n}\n.cv-3-16 .cv-13-0-email-container {\n    margin: 0\n}\n.cv-3-16 .cv-13-0-email-container.cv-13-0-invalid + p {\n    position: absolute;\n    top: 45px;\n}\n.cv-3-16 .cv-13-0-invalid + p + .cv-13-0-cta-overlay {\n    margin: 0;\n}\n@media only screen and (max-width:1279px) {\n    .cv-3-16 [data-testid=\"ConversionPopUp\"] {\n        background: #FFF;\n    }\n    .cv-3-16 [data-testid=\"ConversionPopUp\"] > div {\n        padding: 0 0 20px;\n        overflow: scroll;\n    }\n    .cv-3-16 [data-testid=\"ConversionPopUp\"] > div > div {\n        width: 100%;\n        padding: 0 18px;\n        max-height: 340px;\n    }\n    .cv-3-16 [data-testid=\"ConversionPopUp\"] > div > div > h4,\n    .cv-3-16-scroll-bottom {\n        font-size: 20px;\n        width: calc(100% + 10px);\n        background: #FFF;\n        padding: 22px 0;\n        position: fixed;\n        z-index: 10;\n        height: 65px;\n    }\n    .cv-3-16 [data-testid=\"ConversionPopUp\"] > div > div > h4.cv-3-16-scroll {\n        background: linear-gradient(0deg, rgba(255, 255, 255, 0.00) 1%, rgba(255, 255, 255, 0.98) 35.73%, #FFF 59.79%);\n        height: 89px;\n    }\n    .cv-3-16 [data-testid=\"ConversionPopUp\"] .cv-3-16-scroll-bottom {\n        bottom: 0;\n        background: none !important;\n        height: 78px;\n    }\n    .cv-3-16 [data-testid=\"ConversionPopUp\"] .cv-3-16-scroll-bottom.active {\n        background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 1%, rgba(255, 255, 255, 0.98) 35.73%, #FFF 59.79%) !important;\n    }\n    .cv-3-16 [data-testid=\"ConversionPopUp\"] .cv-3-16-scroll-bottom div {\n        font-size: 16px;\n        max-width: none;\n        margin-top: 16px;\n    }\n    .cv-3-16 [data-testid=\"ConversionPopUp\"] .cv-3-16-scroll-bottom + div {\n        display: none;\n    }\n    .cv-3-16 [data-testid=\"ConversionPopUp\"] > div > div > div:last-child {\n        padding: 0 0 18px;\n    }\n    .cv-3-16-option-container {\n        flex-direction: column;\n        margin: 65px 0 16px;\n        padding-bottom: 65px;\n    }\n    .cv-3-16-button-container { \n        height: auto;;\n    }\n    .cv-3-16-info h4 {\n        display: none;\n    }\n    .cv-3-16-info li {\n        font-family: Roboto, sans-serif;\n        font-weight: 400;\n        font-size: 18px;\n        line-height: 112.5%;\n        color: #01000D;\n        background: none;\n        padding: 0;\n    }\n    .cv-3-16 .cv-13-0-invalid + p + .cv-13-0-cta-overlay {\n        margin: 10px 0 16px;\n    }\n    .cv-3-16-option:nth-child(2) .cv-3-16-subscribe-cta {\n        margin: 22px 0 0;\n    }\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "27162470173", "endOfRange": 5000}, {"entityId": "27165900121", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["27166250145"], "weightDistributions": null, "decisionMetadata": null}, {"changes": [{"dependencies": [], "type": "custom_code", "id": "99f0186c8abd4393931f234886b11752", "value": function($){(function(){

    window.optimizely = window.optimizely || [];

    if (url.indexOf('ONS1MTF15') > -1) {
        window.optimizely.push({
            "type": "user",
            "attributes": {
                "plan-type": "15"
            }
        });
    }

    if (url.indexOf('ONS1M01GJJ4W2') > -1) {
        window.optimizely.push({
            "type": "user",
            "attributes": {
                "plan-type": "26"
            }
        });
    } 

    var observerNode;
  
    var waitForTarget = setInterval(function() {
        var target = document.querySelector('main > div > div:nth-child(2)'),
            wrapper = document.querySelector('.abandonWrapper'),
            mobileForm = document.querySelector('.abandonWrapper > form');
        if (target || mobileForm) {
            clearInterval(waitForTarget);
            if (mobileForm) {
                observerNode = wrapper;
            } else {
                observerNode = target;
            }
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (document.querySelector('h1').innerText === 'Payment Type' || "Payment method") {
                        run();
                    }
                });    
            });   
            var config = { attributes: true, childList: true, characterData: true };
            observer.observe(observerNode, config);
        }
    }, 50);
    setTimeout(function(){
        clearInterval(waitForTarget);
    }, 5000);

    function run() {
        window.optimizely.push({
            "type": "user",
            "attributes": {
                "checkout-stage": "3B (Payment method)"
            }
        });
    }

})();
}}], "id": "20270193695", "name": null, "commitId": "20246726144", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"18817253497": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "19605404013"], "audienceName": null, "changes": null, "id": "20271754070", "integrationSettings": null, "variations": [{"id": "20269668441", "name": null, "actions": []}, {"id": "20272161061", "name": null, "actions": [{"viewId": "20269668440", "changes": [{"dependencies": [], "type": "custom_code", "id": "be8f1a49637940289c81a0725f894f4b", "value": function($){(function(){

    var html = "<div class='cv-4-2-container'><div class='cv-4-2-top-container'>You pay £0 today</div><div class='cv-4-2-bottom-container'><p><img src='https://cfactory-img.s3.amazonaws.com/NUK/4.2/cv-4-2-icon.svg'><span>Why do we need payment details?</span></p><p>This is so your payment can be processed at the end of your trial if you choose to subscribe. You can cancel up to 48 hours before your free month ends.</p></div></div>";

    var observerNode;
  
    var waitForTarget = setInterval(function() {
        var target = document.querySelector('main > div > div:nth-child(2)'),
            wrapper = document.querySelector('.abandonWrapper'),
            mobileForm = document.querySelector('.abandonWrapper > form');
        if (target || mobileForm) {
            clearInterval(waitForTarget);
            if (mobileForm) {
                observerNode = wrapper;
            } else {
                observerNode = target;
            }
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (document.querySelector('h1').innerText === 'Payment Type' || "Payment method") {
                        run();
                    } else {
                        if (document.querySelector('.cv-4-2-container')) {
                            document.querySelector('.cv-4-2-container').remove();
                        }
                    }
                });    
            });   
            var config = { attributes: true, childList: true, characterData: true };
            observer.observe(observerNode, config);
        }
    }, 50);
    setTimeout(function(){
        clearInterval(waitForTarget);
    }, 5000);

    function run() {
        var waitForRef = setInterval(function() {
            var h1 = document.querySelector('h1');
            var mobileRef = document.querySelector('#root > div.abandonWrapper > div:nth-child(3)');
            var desktopRef = document.querySelector('#root > div.abandonWrapper > div > main #main-container > div');
            // mobile
            if (h1.innerText === "Payment method" && !document.querySelector('.cv-4-2-container') && mobileRef) {
                clearInterval(waitForRef);
                mobileRef.insertAdjacentHTML('beforebegin', html);
                document.querySelector('.abandonWrapper > div').classList.add('cv-4-2-border');
            }
            // desktop
            if (h1.innerText === "Payment Type" && !document.querySelector('.cv-4-2-container') && desktopRef) {
                clearInterval(waitForRef);
                desktopRef.insertAdjacentHTML('afterbegin', html);
            }
            if ((h1.innerText === "Payment details" || h1.innerText === "Billing address") && document.querySelector('.cv-4-2-container')) {
                document.querySelector('.cv-4-2-container').remove();
                if (document.querySelector('cv-4-2-border')) document.querySelector('.abandonWrapper > div').classList.remove('cv-4-2-border');
            } 
        }, 50);
        setTimeout(function(){
            clearInterval(waitForRef);
        }, 3000);
    }

})();
}}, {"value": "<style>.cv-4-2-container {\n    width: 528px;\n    margin: 15px 0 28px;\n    position: relative;\n    font-family: 'GillSans';\n}\n.cv-4-2-top-container {\n    background: #1573A2;\n    color: #FFF;\n    position: relative;\n    padding: 8px 12px;\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 19px;\n}\n.cv-4-2-bottom-container {\n    background: #E8F6F8;\n    position: relative;\n    height: auto;\n    padding: 12px;\n}\n.cv-4-2-bottom-container p {\n    margin: 0;\n    font-size: 14px;\n    line-height: 20px;\n    color: #333333;\n}\n.cv-4-2-bottom-container p:first-child {\n    margin: 0 0 8px;\n    position: relative;\n    font-weight: 600;\n}\n.cv-4-2-bottom-container img {\n    margin: 0;\n    position: absolute;\n}\n.cv-4-2-bottom-container span {\n    margin: 1px 0 0 28px;\n    position: relative;\n    display: inline-block;\n}\n\n@media only screen and (max-width: 767px) {\n    .cv-4-2-container {\n        width: calc(100% - 40px);\n        margin: 4px auto 28px;\n        display: block;\n    }\n    .cv-4-2-border {\n        border: none !important;\n    }\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 830px) and (orientation: landscape) {\n    .cv-4-2-container {\n        margin: 15px 40px 0;\n    }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "c564ef0bf3c644f6bccd8abb12772b67"}]}]}, {"id": "20254317256", "name": null, "actions": [{"viewId": "20269668440", "changes": [{"dependencies": [], "type": "custom_code", "id": "2b894177d5cd406299d178e13e34186d", "value": function($){(function(){

    window['optimizely'] = window['optimizely'] || [];

    var html = "<div class='cv-4-2-container'><div class='cv-4-2-top-container'>You pay £0 today</div><div class='cv-4-2-bottom-container'><p>Why do we need payment details?<img src='https://cfactory-img.s3.amazonaws.com/NUK/4.2/cv-4-2-dropdown.svg' class='cv-4-2-dropdown-icon'></p><p>This is so your payment can be processed at the end of your trial if you choose to subscribe.&nbsp;You can cancel up to 48 hours before your free month ends.</p></div></div>";

    var observerNode, dropdownIcon, dropdownBox;

    var waitForTarget = setInterval(function() {
        var target = document.querySelector('main > div > div:nth-child(2)'),
            wrapper = document.querySelector('.abandonWrapper'),
            mobileForm = document.querySelector('.abandonWrapper > form');
        if (target || mobileForm) {
            clearInterval(waitForTarget);
            if (mobileForm) {
                observerNode = wrapper;
            } else {
                observerNode = target;
            }
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (document.querySelector('h1').innerText === 'Payment Type' || "Payment method") {
                        run();
                    } else {
                        if (document.querySelector('.cv-4-2-container')) {
                            document.querySelector('.cv-4-2-container').remove();
                        }
                    }
                });    
            });   
            var config = { attributes: true, childList: true, characterData: true };
            observer.observe(observerNode, config);
        }
    }, 50);
    setTimeout(function(){
        clearInterval(waitForTarget);
    }, 5000);

    function run() {
        var waitForRef = setInterval(function() {
            var h1 = document.querySelector('h1');
            var mobileRef = document.querySelector('#root > div.abandonWrapper > div:nth-child(3)');
            var desktopRef = document.querySelector('#root > div.abandonWrapper > div > main #main-container > div');
            // mobile
            if (h1.innerText === "Payment method" && !document.querySelector('.cv-4-2-container') && mobileRef) {
                clearInterval(waitForRef);
                mobileRef.insertAdjacentHTML('beforebegin', html);
                document.querySelector('.abandonWrapper > div').classList.add('cv-4-2-border');
                dropdownIcon = document.querySelector('.cv-4-2-dropdown-icon');
                dropdownBox = document.querySelector('.cv-4-2-bottom-container');
                dropdownBox.addEventListener('click', toggleDropdown);
            }
            // desktop
            if (h1.innerText === "Payment Type" && !document.querySelector('.cv-4-2-container') && desktopRef) {
                clearInterval(waitForRef);
                desktopRef.insertAdjacentHTML('afterbegin', html);
                dropdownIcon = document.querySelector('.cv-4-2-dropdown-icon');
                dropdownBox = document.querySelector('.cv-4-2-bottom-container');
                dropdownBox.addEventListener('click', toggleDropdown);
            }
            if ((h1.innerText === "Payment details" || h1.innerText === "Billing address") && document.querySelector('.cv-4-2-container')) {
                document.querySelector('.cv-4-2-container').remove();
                if (document.querySelector('cv-4-2-border')) document.querySelector('.abandonWrapper > div').classList.remove('cv-4-2-border');
            } 
        }, 50);
        setTimeout(function(){
            clearInterval(waitForRef);
        }, 3000);
    }

    function toggleDropdown() {
        window['optimizely'].push({
            type: "event",
            eventName: "interactions-with-dropdown",
        });
        dropdownIcon.classList.contains('cv-icon-active') ? dropdownIcon.classList.remove('cv-icon-active') : dropdownIcon.classList.add('cv-icon-active');
        dropdownBox.classList.contains('cv-active') ? dropdownBox.classList.remove('cv-active') : dropdownBox.classList.add('cv-active');
    };

})();
}}, {"value": "<style>.cv-4-2-container {\n    width: 528px;\n    margin: 15px 0 28px;\n    position: relative;\n    font-family: 'GillSans';\n    overflow: hidden;\n}\n.cv-4-2-top-container {\n    background: #1573A2;\n    color: #FFF;\n    position: relative;\n    padding: 8px 12px;\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 19px;\n}\n.cv-4-2-bottom-container {\n    transition: max-height 0.2s;\n    background: #E8F6F8;\n    position: relative;\n    padding: 12px;\n    max-height: 44px;\n    cursor: pointer;\n}\n.cv-4-2-bottom-container.cv-active {\n    height: auto;\n    max-height: 158px;\n}\n.cv-4-2-bottom-container p {\n    margin: 0;\n    font-size: 14px;\n    line-height: 20px;\n    color: #333333;\n}\n.cv-4-2-bottom-container p:first-child {\n    margin: 0 0 8px;\n    position: relative;\n    font-weight: 600;\n}\n.cv-4-2-bottom-container img {\n    margin: 0;\n    position: absolute;\n}\n.cv-4-2-dropdown-icon {\n    right: 0;\n    transition: transform 0.2s;\n    transform: rotate(360deg);\n}\n.cv-4-2-dropdown-icon.cv-icon-active {\n    transform: rotate(180deg);\n}\n\n@media only screen and (max-width: 767px) {\n    .cv-4-2-container {\n        width: calc(100% - 40px);\n        margin: 4px auto 28px;\n        display: block;\n    }\n    .cv-4-2-border {\n        border: none !important;\n    }\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 830px) and (orientation: landscape) {\n    .cv-4-2-container {\n        margin: 15px 40px 0;\n    }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "bcba1ca21d7d4b7a9ca9e458ae10960a"}]}]}], "weightDistributions": [{"entityId": "20272161061", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["20269668440"], "weightDistributions": null, "decisionMetadata": null}], "groups": [], "audiences": [{"id": "19011630586", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "location", "value": "GB"}]]]}, {"id": "19075813113", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "nuk && nuk.user && nuk.user.isLoggedIn === false"}]]]}, {"id": "19408543900", "name": null, "conditions": ["and", ["or", ["not", ["or", {"match": null, "name": null, "type": "browser_version", "value": "ie"}]]]]}, {"id": "19605404013", "name": null, "conditions": ["and", ["or", ["not", ["or", {"match": null, "name": null, "type": "browser_version", "value": "ie"}]]]]}, {"id": "20027145419", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "device", "value": "mobile"}, {"match": null, "name": null, "type": "device", "value": "iphone"}]]]}, {"id": "20155453121", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "device", "value": "ipad"}], ["or", {"match": null, "name": null, "type": "device", "value": "tablet"}], ["or", {"match": null, "name": null, "type": "device", "value": "desktop"}]]]}, {"id": "20188124813", "name": null, "conditions": ["and", ["or", ["not", ["or", {"match": null, "name": null, "type": "browser_version", "value": "ie"}, {"match": null, "name": null, "type": "browser_version", "value": "edge"}]]]]}, {"id": "20692010806", "name": null, "conditions": ["and", ["or", ["not", ["or", {"match": null, "name": null, "type": "browser_version", "value": "edge"}]]]]}, {"id": "21163500197", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "location", "value": "US"}]]]}, {"id": "21175821657", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "!window.nuk || (nuk.user && nuk.user.isLoggedIn) === false"}]]]}, {"id": "21268460620", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "!window.nuk || (nuk.user && nuk.user.isLoggedIn) === false"}]]]}, {"id": "22391750619", "name": null, "conditions": ["and", ["or", ["not", ["or", {"match": null, "name": null, "type": "source_type", "value": "campaign"}]], ["not", ["or", {"match": "substring", "name": null, "type": "campaign", "value": "UK_Times_PMax_Subs"}]]]]}, {"id": "23074782274", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "browser_version", "value": "safari"}, {"match": null, "name": null, "type": "browser_version", "value": "gc"}]]]}, {"id": "23093710786", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "location", "value": "GB"}]]]}, {"id": "23185140152", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "window && !window.optimizelyDynamicallyLoaded"}]]]}, {"id": "23381500330", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "location", "value": "IE"}]]]}, {"id": "23934340133", "name": null, "conditions": ["and", ["or", ["not", ["or", {"match": null, "name": null, "type": "location", "value": "GB"}, {"match": null, "name": null, "type": "location", "value": "IE"}]]]]}, {"id": "25469260064", "name": null, "conditions": ["and", ["or", ["or", {"match": "exact", "name": "cfQA", "type": "cookies", "value": "true"}], ["or", {"match": "exact", "name": "cfQA", "type": "query", "value": "true"}]]]}], "listTargetingKeys": [], "visitorAttributes": [], "visitorIdLocator": null, "integrationSettings": [], "views": [{"id": "18808032759", "category": "other", "apiName": "18261964525_radio_live_page", "name": null, "staticConditions": ["or", ["or", {"match": "regex", "type": "url", "value": "https://www.thetimes.co.uk/radio/live$"}, {"match": "regex", "type": "url", "value": "https://www.thetimes.com/radio/live$"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
    const utils = window.optimizely.get('utils');
    
    if (window.location.pathname === "/radio") {
        utils.waitForElement("a[data-testid='listenLiveButton']").then((elListenLiveBtn) => {
            elListenLiveBtn.addEventListener("click", () => {
                utils.waitForElement("audio").then(() => {
                    activate();
                });
            });
        });
    }
    else {
        utils.waitForElement("audio").then(() => {
            activate();
        });
    }
}
}, {"id": "19593631088", "category": "other", "apiName": "18261964525_url_targeting_for_personalisation_slice_uat", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.thetimes.co.uk"}, {"match": "simple", "type": "url", "value": "https://www.thetimes.com"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "19947273314", "category": "other", "apiName": "18261964525_conv_checkout_stage_5_confirmation_page__paypal", "name": null, "staticConditions": ["and", ["or", {"match": "exact", "type": "url", "value": "https://www.thetimes.co.uk/checkout/?s=1&pok=1"}, {"match": "exact", "type": "url", "value": "https://www.thetimes.com/checkout/?s=1&pok=1"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "url_changed"}, {"id": "20026180510", "category": "other", "apiName": "18261964525_articles_prod", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "www.thetimes.co.uk/article"}, {"match": "substring", "type": "url", "value": "www.thetimes.com/article"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "20143500955", "category": "other", "apiName": "18261964525_all_pages", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "www.thetimes.co.uk"}, {"match": "substring", "type": "url", "value": "www.thetimes.com"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "url_changed"}, {"id": "20269668440", "category": "other", "apiName": "18133370155_url_targeting_for_copy_of_conv_live_nuk_42__payment_", "name": null, "staticConditions": ["and", ["or", {"match": "exact", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONS1M01GJJ4W2"}, {"match": "exact", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONS1MTF15"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "url_changed"}, {"id": "21203020181", "category": "other", "apiName": "18133370155_url_targeting_for_copy_of_conv_live_nuk_101__print_s", "name": null, "staticConditions": ["and", ["or", {"match": "exact", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONS7D01Z8H1SM"}, {"match": "exact", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONS6D02PFV6TF"}, {"match": "exact", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSSTPD21"}, {"match": "exact", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSUl040QSD3K"}, {"match": "exact", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSST01C97C1Q"}, {"match": "exact", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONS7D016WH6JH"}, {"match": "exact", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONS6D049KYNK4"}, {"match": "exact", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSUL083V0HPS"}, {"match": "exact", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSUL093TS34Z"}, {"match": "exact", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSST02FVJGD1"}, {"match": "exact", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSPR02NGHTC9"}, {"match": "exact", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSPR014QGB8D"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONS24014VU9QD"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "url_changed"}, {"id": "23748030389", "category": "other", "apiName": "16079460199_url_targeting_for_copy_of_convacq__prod__nuk_033__li", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://globalstore.thetimes.co.uk/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "23971610822", "category": "other", "apiName": "18261964525_radio_info_page", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.thetimes.co.uk/radio"}, {"match": "simple", "type": "url", "value": "https://www.thetimes.com/radio"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "24310301175", "category": "other", "apiName": "18133370155_url_targeting_for_copy_of_concluded__12__internation", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=INTL01FYMHBK"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=INTL015TVWES"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=SPAIN019KG83H"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=INTL015QZNQM"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=INTL01SQNCYX"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=INTL01SAUTO"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=INTL01XNNWSG"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=INTL01ZVBEN6"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=INTL01ZVBEN6"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=INTL01NPX7S9"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=INTL019CVT32"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?INTL01227FTU"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=INTL01MPZQCZ"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=INTL012N660D"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=INTL019MH33D"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=INTL017YY96N"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "24371460258", "category": "other", "apiName": "18133370155_url_targeting_for_copy_of_concluded__12__uk_mp__fiel", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?"}], ["not", ["or", {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSUL093TS34Z"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSST02FVJGD1"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONS24014VU9QD"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSPR04DJ5QV5"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSPR03HRQE4K"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout/?s=1&pok=1"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout/?s"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "25803900602", "category": "other", "apiName": "18261964525_conv_student_store", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.thetimes.co.uk/subscribe/student/"}, {"match": "simple", "type": "url", "value": "https://www.thetimes.com/subscribe/student/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "26329530065", "category": "other", "apiName": "18133370155_url_targeting_for_copy_of_prod__15__ire_2step_checko", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?"}], ["not", ["or", {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSUL093TS34Z"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSST02FVJGD1"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=REGMX15"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSPR03HRQE4K"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=ONSPR04DJ5QV5"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout/?s=1&pok=1"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout/?s"}]]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "26337601039", "category": "other", "apiName": "18261964525_conv_checkout_stage_5_confirmation_page", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.com/checkout"}], ["or", {"type": "element_present", "value": "#confirm-order-button"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "26465750096", "category": "other", "apiName": "16079460199_url_targeting_for_copy_of_convacq__concluded__nuk_04", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://globalstore.thetimes.co.uk/"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/checkout?pc=INTL017YY96N"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "26516720042", "category": "other", "apiName": "18261964525_url_targeting_for_copy_of_convacq__concluded__nuk__1", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/article/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": // Activation JS
function callbackFn(activate) {
	if (window.location.pathname.indexOf('/article') > -1) {
		const check = setInterval(() => {
			if (
				window.nuk &&
				window.nuk.user &&
				window.nuk.user.isLoggedIn === true &&
				window.nuk.user.isRegisteredUser === true &&
				window.nuk.user.customerType === 'registered'
			) {
				clearInterval(check);
	
				setTimeout(() => activate(), 4500);
			}
		}, 100);

		setTimeout(() => clearInterval(check), 6000);
	}
}
}, {"id": "26767850049", "category": "other", "apiName": "18261964525_url_targeting_for_copy_of_conveng__prod__nuk_912__st", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.thetimes.co.uk/"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/article/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
	const params = [
		'utm_source=meta&utm_medium=paid-social&utm_campaign=Meta_FY24_TML_11_UK_Performance_Students_Editorial_LAL&utm_content=Pro_Single_Image_Editorial_Nov-23_Students_If-Theres-Something-You-Love',
		'utm_source=meta&utm_medium=paid-social&utm_campaign=Meta_FY24_TML_11_UK_Performance_Students_Editorial_LAL&utm_content=Pro_Single_Image_Editorial_Nov-23_Students_Inside_Sephora',
		'utm_source=meta&utm_medium=paid-social&utm_campaign=Meta_FY24_TML_11_UK_Performance_Students_Editorial_LAL&utm_content=Pro_Single_Image_Editorial_Nov-23_Students_The-Happiest-Graduates',
		'utm_source=linkedin&utm_medium=paid-social&utm_campaign=linkedin_FY24_TML_11_UK_Performance_Students_Editorial_Interests&utm_content=Pro_Single_Image_Editorial_Nov-23_Students_If-Theres-Something-You-Love',
		'utm_source=linkedin&utm_medium=paid-social&utm_campaign=linkedin_FY24_TML_11_UK_Performance_Students_Editorial_Interests&utm_content=Pro_Single_Image_Editorial_Nov-23_Students_Inside-Sephora',
		'utm_source=linkedin&utm_medium=paid-social&utm_campaign=linkedin_FY24_TML_11_UK_Performance_Students_Editorial_Interests&utm_content=Pro_Single_Image_Editorial_Nov-23_Students_The-Happiest-Graduates',
		'utm_source=TikTok&utm_medium=paid-social&utm_campaign=TikTok_FY24_TML_11_UK_Performance_Students_Interests&utm_content=Pro_Single_Video_Editorial_Students_Nov-23_Sober',
		'utm_source=TikTok&utm_medium=paid-social&utm_campaign=TikTok_FY24_TML_11_UK_Performance_Students_Interests&utm_content=Pro_Single_Video_Editorial_Students_Nov-23_Gabrielle-Zevin'
	];

	if (!!window.sessionStorage.getItem('NUK 0.48')) activate();

	params.forEach(param => {
		if (window.location.href.includes(param)) activate();
	});
}
}, {"id": "27166250145", "category": "other", "apiName": "18261964525_url_targeting_for_copy_of_convacq__rollout__nuk_130_", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/article/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate) {
	const utils = window.optimizely.get('utils');

	if (
		window.location.pathname.includes('article') &&
		nuk.user &&
		nuk.user.isLoggedIn === false
	) {
		utils
			.waitForElement('[data-testid="ConversionPopUp"] a[hre	.then(() => {
				activate();
			});
	}

	if (
		window.location.pathname.includes('article') &&
		nuk.user &&
		nuk.user.isRegisteredUser === true &&
		nuk.user.customerType === 'registered'
	) {
		activate();
	}
}
}, {"id": "27180220623", "category": "other", "apiName": "18261964525_url_targeting_for_copy_of_conveng__prod__nuk_051__ba", "name": null, "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.thetimes.co.uk/"}, {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/article/"}, {"match": "simple", "type": "url", "value": "https://www.thetimes.co.uk/subscribe/digital/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "27276640234", "category": "other", "apiName": "18261964525_url_targeting_for_copy_of_prod__10__listen_to_times_", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/article/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "27301320072", "category": "other", "apiName": "18261964525_url_targeting_for_copy_of_convacq__prod__nuk_140__em", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "https://www.thetimes.co.uk/article/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": [], "activationType": "callback", "activationCode": // Activation JS
function callbackFn(activate) {
	if (window.location.pathname.indexOf('/article') > -1 && window.innerWidth < 768) {
		const check = setInterval(() => {
			if (
				window.nuk &&
				window.nuk.user &&
				window.nuk.user.isLoggedIn === true &&
				window.nuk.user.isRegisteredUser === true &&
				window.nuk.user.isMetered === true &&
				window.nuk.user.registrationType === "registered"
			) {
				clearInterval(check);
	
				activate();
			}
		}, 100);

		setTimeout(() => clearInterval(check), 6000);
	}
}
}], "events": [{"id": "19402421990", "viewId": null, "name": null, "category": "other", "apiName": "subscription", "eventType": "custom", "eventFilter": null}, {"id": "19412422409", "viewId": null, "name": null, "category": "other", "apiName": "continue button - complete order - credit_card", "eventType": "custom", "eventFilter": null}, {"id": "19724680135", "viewId": "19593631088", "name": null, "category": "other", "apiName": "18261964525_homepage_all_content", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#main-container a, .Item-media"}}, {"id": "19726840199", "viewId": "19593631088", "name": null, "category": "other", "apiName": "18261964525_homepage_personalised_slice", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#react-edition-personalised-article-rail article a"}}, {"id": "19747100201", "viewId": "19593631088", "name": null, "category": "other", "apiName": "18261964525_homepage_top_3_sections", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".Section--news .InTheNews-item a, .Section--news .Item a, #react-edition-personalised-article-rail article a, .Section--comment .Item a, .Section--comment .Puffs a"}}, {"id": "19749338318", "viewId": null, "name": null, "category": "other", "apiName": "continue button - continue to about you", "eventType": "custom", "eventFilter": null}, {"id": "19860572637", "viewId": null, "name": null, "category": "other", "apiName": "continue button - continue to payment", "eventType": "custom", "eventFilter": null}, {"id": "19882140759", "viewId": null, "name": null, "category": "other", "apiName": "continue button - review your order - credit_card", "eventType": "custom", "eventFilter": null}, {"id": "19891761055", "viewId": null, "name": null, "category": "other", "apiName": "button - subscribe", "eventType": "custom", "eventFilter": null}, {"id": "19897960246", "viewId": null, "name": null, "category": "other", "apiName": "continue button - review your order - direct_debit", "eventType": "custom", "eventFilter": null}, {"id": "19909031568", "viewId": null, "name": null, "category": "other", "apiName": "continue button - continue to billing address - credit_card", "eventType": "custom", "eventFilter": null}, {"id": "19928882313", "viewId": null, "name": null, "category": "other", "apiName": "interaction-with-the-second-tooltip", "eventType": "custom", "eventFilter": null}, {"id": "19937782864", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-in-page-paywall-section-CTA", "eventType": "custom", "eventFilter": null}, {"id": "19942893743", "viewId": null, "name": null, "category": "other", "apiName": "interaction-with-the-first-tooltip", "eventType": "custom", "eventFilter": null}, {"id": "19961023768", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-sticky-paywall-CTA", "eventType": "custom", "eventFilter": null}, {"id": "19984239968", "viewId": null, "name": null, "category": "other", "apiName": "button-show more", "eventType": "custom", "eventFilter": null}, {"id": "20040650740", "viewId": null, "name": null, "category": "other", "apiName": "ad-viewed", "eventType": "custom", "eventFilter": null}, {"id": "20100382534", "viewId": null, "name": null, "category": "other", "apiName": "download on app store", "eventType": "custom", "eventFilter": null}, {"id": "20112975586", "viewId": null, "name": null, "category": "other", "apiName": "closed-pop-up", "eventType": "custom", "eventFilter": null}, {"id": "20113185116", "viewId": null, "name": null, "category": "other", "apiName": "clicked-cta-popup", "eventType": "custom", "eventFilter": null}, {"id": "20118215210", "viewId": null, "name": null, "category": "other", "apiName": "widget-related article", "eventType": "custom", "eventFilter": null}, {"id": "20125501858", "viewId": null, "name": null, "category": "other", "apiName": "download google play", "eventType": "custom", "eventFilter": null}, {"id": "20164310155", "viewId": null, "name": null, "category": "other", "apiName": "close_popover", "eventType": "custom", "eventFilter": null}, {"id": "20164852805", "viewId": null, "name": null, "category": "other", "apiName": "right arrow", "eventType": "custom", "eventFilter": null}, {"id": "20165815913", "viewId": null, "name": null, "category": "other", "apiName": "widget - puff - sign up now - displayed", "eventType": "custom", "eventFilter": null}, {"id": "20167912056", "viewId": "20026180510", "name": null, "category": "other", "apiName": "18261964525_hamburger_menu_open_click", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#global-nav-toggle"}}, {"id": "20175317135", "viewId": null, "name": null, "category": "other", "apiName": "article - view end", "eventType": "custom", "eventFilter": null}, {"id": "20183860963", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-hero-CTA", "eventType": "custom", "eventFilter": null}, {"id": "20184761314", "viewId": null, "name": null, "category": "other", "apiName": "previous article", "eventType": "custom", "eventFilter": null}, {"id": "20186147875", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-middle-of-the-page-CTA", "eventType": "custom", "eventFilter": null}, {"id": "20186187218", "viewId": null, "name": null, "category": "other", "apiName": "interaction-with-arrow ", "eventType": "custom", "eventFilter": null}, {"id": "20189405013", "viewId": null, "name": null, "category": "other", "apiName": "sign up to newsletters", "eventType": "custom", "eventFilter": null}, {"id": "20191032937", "viewId": null, "name": null, "category": "other", "apiName": "go to my newsletters", "eventType": "custom", "eventFilter": null}, {"id": "20197241758", "viewId": null, "name": null, "category": "other", "apiName": "left arrow", "eventType": "custom", "eventFilter": null}, {"id": "20202410664", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-cta", "eventType": "custom", "eventFilter": null}, {"id": "20202451234", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-any-mandatory-tick-box", "eventType": "custom", "eventFilter": null}, {"id": "20204941229", "viewId": null, "name": null, "category": "other", "apiName": "unsubscribe from newsletter", "eventType": "custom", "eventFilter": null}, {"id": "20213217321", "viewId": null, "name": null, "category": "other", "apiName": "interactions-with-dropdown", "eventType": "custom", "eventFilter": null}, {"id": "20215265948", "viewId": null, "name": null, "category": "other", "apiName": "next article", "eventType": "custom", "eventFilter": null}, {"id": "20263823206", "viewId": null, "name": null, "category": "other", "apiName": "widget - puff - sign up now", "eventType": "custom", "eventFilter": null}, {"id": "20279203045", "viewId": null, "name": null, "category": "other", "apiName": "auto-newsletter-puff-displayed", "eventType": "custom", "eventFilter": null}, {"id": "20313269521", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-expand-arrow", "eventType": "custom", "eventFilter": null}, {"id": "20334701391", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-any-faq", "eventType": "custom", "eventFilter": null}, {"id": "20340350134", "viewId": "19593631088", "name": null, "category": "other", "apiName": "18261964525_best_of_sunday_times_article_click_2", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#best-of-sunday-times article a"}}, {"id": "20379515422", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-subscribe-cta", "eventType": "custom", "eventFilter": null}, {"id": "20438580525", "viewId": null, "name": null, "category": "other", "apiName": "click-on-details-or-view-details", "eventType": "custom", "eventFilter": null}, {"id": "20445594668", "viewId": null, "name": null, "category": "other", "apiName": "back-to-hp-from-article", "eventType": "custom", "eventFilter": null}, {"id": "20458677211", "viewId": null, "name": null, "category": "other", "apiName": "payment type - paypal", "eventType": "custom", "eventFilter": null}, {"id": "20471618880", "viewId": null, "name": null, "category": "other", "apiName": "payment type - direct debit", "eventType": "custom", "eventFilter": null}, {"id": "20477400536", "viewId": null, "name": null, "category": "other", "apiName": "click-on-view-contract-and-billing-details", "eventType": "custom", "eventFilter": null}, {"id": "20479318576", "viewId": null, "name": null, "category": "other", "apiName": "payment type - card", "eventType": "custom", "eventFilter": null}, {"id": "20482804866", "viewId": null, "name": null, "category": "other", "apiName": "users-reaching-int-store-from-article", "eventType": "custom", "eventFilter": null}, {"id": "20511341599", "viewId": null, "name": null, "category": "other", "apiName": "header-global navigation-join now", "eventType": "custom", "eventFilter": null}, {"id": "20560843990", "viewId": null, "name": null, "category": "other", "apiName": "spot im - comment - start", "eventType": "custom", "eventFilter": null}, {"id": "20574710313", "viewId": null, "name": null, "category": "other", "apiName": "listened-to-80", "eventType": "custom", "eventFilter": null}, {"id": "20581790178", "viewId": null, "name": null, "category": "other", "apiName": "clicked-sidebar-article", "eventType": "custom", "eventFilter": null}, {"id": "20583041730", "viewId": null, "name": null, "category": "other", "apiName": "clicks-hero-cta-subscribe-now", "eventType": "custom", "eventFilter": null}, {"id": "20586942294", "viewId": null, "name": null, "category": "other", "apiName": "clicks-benefits-cta-subscribe-now", "eventType": "custom", "eventFilter": null}, {"id": "20590353538", "viewId": null, "name": null, "category": "other", "apiName": "saw-comments-section", "eventType": "custom", "eventFilter": null}, {"id": "20594005068", "viewId": null, "name": null, "category": "other", "apiName": "clicked-on-apple", "eventType": "custom", "eventFilter": null}, {"id": "20601710482", "viewId": null, "name": null, "category": "other", "apiName": "clicks-subscription-options-in-nav", "eventType": "custom", "eventFilter": null}, {"id": "20603322296", "viewId": null, "name": null, "category": "other", "apiName": "post comment", "eventType": "custom", "eventFilter": null}, {"id": "20604190403", "viewId": null, "name": null, "category": "other", "apiName": "clicked-on-show-podcasts", "eventType": "custom", "eventFilter": null}, {"id": "20606640204", "viewId": null, "name": null, "category": "other", "apiName": "clicked-mobile-controls", "eventType": "custom", "eventFilter": null}, {"id": "20628930206", "viewId": null, "name": null, "category": "other", "apiName": "clicked-on-google", "eventType": "custom", "eventFilter": null}, {"id": "20629260300", "viewId": null, "name": null, "category": "other", "apiName": "clicked-pause-widget", "eventType": "custom", "eventFilter": null}, {"id": "20642990131", "viewId": null, "name": null, "category": "other", "apiName": "clicked-play-widget", "eventType": "custom", "eventFilter": null}, {"id": "20643050064", "viewId": null, "name": null, "category": "other", "apiName": "clicked-on-spotify", "eventType": "custom", "eventFilter": null}, {"id": "20682490881", "viewId": null, "name": null, "category": "other", "apiName": "clicks-outside-popup", "eventType": "custom", "eventFilter": null}, {"id": "20696731040", "viewId": null, "name": null, "category": "other", "apiName": "clicked-on-related-articles", "eventType": "custom", "eventFilter": null}, {"id": "20721040733", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-close", "eventType": "custom", "eventFilter": null}, {"id": "20725870011", "viewId": null, "name": null, "category": "other", "apiName": "closes-popup-via-esc", "eventType": "custom", "eventFilter": null}, {"id": "20733120205", "viewId": null, "name": null, "category": "other", "apiName": "clicks-subscribe-now-cta", "eventType": "custom", "eventFilter": null}, {"id": "20747230491", "viewId": "20026180510", "name": null, "category": "other", "apiName": "18261964525_conv_clicks_on_related_articles", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "div[data-testid=\"related-article-item\"] > a"}}, {"id": "20838161906", "viewId": null, "name": null, "category": "other", "apiName": "twenty-secs-inactive", "eventType": "custom", "eventFilter": null}, {"id": "20852270431", "viewId": null, "name": null, "category": "other", "apiName": "ten-secs-inactive", "eventType": "custom", "eventFilter": null}, {"id": "20863410645", "viewId": null, "name": null, "category": "other", "apiName": "thirty-secs-inactive", "eventType": "custom", "eventFilter": null}, {"id": "20886652918", "viewId": null, "name": null, "category": "other", "apiName": "share-email", "eventType": "custom", "eventFilter": null}, {"id": "20890593849", "viewId": null, "name": null, "category": "other", "apiName": "share-twitter", "eventType": "custom", "eventFilter": null}, {"id": "20898563917", "viewId": null, "name": null, "category": "other", "apiName": "share-copy", "eventType": "custom", "eventFilter": null}, {"id": "20909824098", "viewId": null, "name": null, "category": "other", "apiName": "remove from my articles", "eventType": "custom", "eventFilter": null}, {"id": "20918053585", "viewId": null, "name": null, "category": "other", "apiName": "closed-tooltip", "eventType": "custom", "eventFilter": null}, {"id": "20934540600", "viewId": null, "name": null, "category": "other", "apiName": "share-facebook", "eventType": "custom", "eventFilter": null}, {"id": "20941880182", "viewId": null, "name": null, "category": "other", "apiName": "clicked-coms-icon-on-sharing-bar", "eventType": "custom", "eventFilter": null}, {"id": "20955700004", "viewId": null, "name": null, "category": "other", "apiName": "add to my articles", "eventType": "custom", "eventFilter": null}, {"id": "20963440003", "viewId": null, "name": null, "category": "other", "apiName": "user-saw-sidebar", "eventType": "custom", "eventFilter": null}, {"id": "20976700071", "viewId": null, "name": null, "category": "other", "apiName": "clicked-expandable-section", "eventType": "custom", "eventFilter": null}, {"id": "21031234702", "viewId": null, "name": null, "category": "other", "apiName": "comment_name_pop_up_displayed", "eventType": "custom", "eventFilter": null}, {"id": "21032662090", "viewId": null, "name": null, "category": "other", "apiName": "comment_name_pop_up_clicked_x", "eventType": "custom", "eventFilter": null}, {"id": "21055580281", "viewId": null, "name": null, "category": "other", "apiName": "comment_name_pop_up_clicked_ok", "eventType": "custom", "eventFilter": null}, {"id": "21065710328", "viewId": null, "name": null, "category": "other", "apiName": "comment_name_pop_up_clicked_learn_more", "eventType": "custom", "eventFilter": null}, {"id": "21069420083", "viewId": null, "name": null, "category": "other", "apiName": "comment_name_pop_up_clicked_anywhere", "eventType": "custom", "eventFilter": null}, {"id": "21077020534", "viewId": null, "name": null, "category": "other", "apiName": "comment_name_pop_up_clicked_here", "eventType": "custom", "eventFilter": null}, {"id": "21110320653", "viewId": null, "name": null, "category": "other", "apiName": "clicked-on-most-popular", "eventType": "custom", "eventFilter": null}, {"id": "21146901640", "viewId": "20026180510", "name": null, "category": "other", "apiName": "18261964525_conv_or_view_all_subscription_options_from_inpage_pa", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#paywall-portal-article-footer p.nuk-3_7-view-all-options a"}}, {"id": "21180401787", "viewId": "20026180510", "name": null, "category": "other", "apiName": "18261964525_conv_or_view_all_subscription_options_from_sticky_pa", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#paywall-portal-page-footer p.nuk-3_7-view-all-options a"}}, {"id": "21202220083", "viewId": "20026180510", "name": null, "category": "other", "apiName": "18261964525_conv_start_free_trial_from_sticky_paywall", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#paywall-portal-page-footer > div > div > div > a"}}, {"id": "21205730378", "viewId": "20026180510", "name": null, "category": "other", "apiName": "18261964525_conv_start_free_trial_from_inpage_paywall", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#paywall-portal-article-footer > div > div > a"}}, {"id": "21213682403", "viewId": null, "name": null, "category": "other", "apiName": "clicked-puzzle-tab", "eventType": "custom", "eventFilter": null}, {"id": "21214430156", "viewId": null, "name": null, "category": "other", "apiName": "button-show less", "eventType": "custom", "eventFilter": null}, {"id": "21219921530", "viewId": null, "name": null, "category": "other", "apiName": "clicked-puzzle-category", "eventType": "custom", "eventFilter": null}, {"id": "21220851853", "viewId": null, "name": null, "category": "other", "apiName": "clicked-on-puzzle", "eventType": "custom", "eventFilter": null}, {"id": "21231561205", "viewId": null, "name": null, "category": "other", "apiName": "clicked-on-show-more", "eventType": "custom", "eventFilter": null}, {"id": "21234890108", "viewId": null, "name": null, "category": "other", "apiName": "cta-flash-sale", "eventType": "custom", "eventFilter": null}, {"id": "21237750564", "viewId": null, "name": null, "category": "other", "apiName": "closed-flash-sale", "eventType": "custom", "eventFilter": null}, {"id": "21238630732", "viewId": null, "name": null, "category": "other", "apiName": "interact-with-free-trial-summary", "eventType": "custom", "eventFilter": null}, {"id": "21253250124", "viewId": null, "name": null, "category": "other", "apiName": "clicked-show-less-go-back", "eventType": "custom", "eventFilter": null}, {"id": "21291990918", "viewId": null, "name": null, "category": "other", "apiName": "swg_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21316060526", "viewId": null, "name": null, "category": "other", "apiName": "swg_premium_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21324070892", "viewId": null, "name": null, "category": "other", "apiName": "scroll25", "eventType": "custom", "eventFilter": null}, {"id": "21330000682", "viewId": null, "name": null, "category": "other", "apiName": "scroll75", "eventType": "custom", "eventFilter": null}, {"id": "21332230535", "viewId": null, "name": null, "category": "other", "apiName": "scroll100", "eventType": "custom", "eventFilter": null}, {"id": "21334170048", "viewId": null, "name": null, "category": "other", "apiName": "swg_basic_clicked", "eventType": "custom", "eventFilter": null}, {"id": "21354940212", "viewId": null, "name": null, "category": "other", "apiName": "scroll50", "eventType": "custom", "eventFilter": null}, {"id": "21360700109", "viewId": null, "name": null, "category": "other", "apiName": "clicked-on-related-or-most-popular", "eventType": "custom", "eventFilter": null}, {"id": "21367970267", "viewId": null, "name": null, "category": "other", "apiName": "clicked-logo-or-category", "eventType": "custom", "eventFilter": null}, {"id": "21375952635", "viewId": "19593631088", "name": null, "category": "other", "apiName": "18261964525_conv_hp_cta_banner_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#react-edition-subscription-marketing-banner-slice a[href], #react-edition-homepage-banner a[href]"}}, {"id": "21562371901", "viewId": "20143500955", "name": null, "category": "other", "apiName": "18261964525_all_anchor_tags_in_nav", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".GlobalNav a, .GlobalMenu a"}}, {"id": "21602072985", "viewId": null, "name": null, "category": "other", "apiName": "header-global navigation-todays sections", "eventType": "custom", "eventFilter": null}, {"id": "21605001940", "viewId": null, "name": null, "category": "other", "apiName": "header-global navigation-logo", "eventType": "custom", "eventFilter": null}, {"id": "21615471183", "viewId": null, "name": null, "category": "other", "apiName": "1-10-most-related", "eventType": "custom", "eventFilter": null}, {"id": "21704911295", "viewId": null, "name": null, "category": "other", "apiName": "pack details - subscribe with google", "eventType": "custom", "eventFilter": null}, {"id": "21707481344", "viewId": null, "name": null, "category": "other", "apiName": "swg_clicked_basic", "eventType": "custom", "eventFilter": null}, {"id": "21722662069", "viewId": null, "name": null, "category": "other", "apiName": "creating account modal - displayed - google event 1", "eventType": "custom", "eventFilter": null}, {"id": "21728510575", "viewId": null, "name": null, "category": "other", "apiName": "swg_clicked_any", "eventType": "custom", "eventFilter": null}, {"id": "21728800057", "viewId": null, "name": null, "category": "other", "apiName": "swg_clicked_premium", "eventType": "custom", "eventFilter": null}, {"id": "21748330740", "viewId": null, "name": null, "category": "other", "apiName": "google subscription confirmation modal - continue reading", "eventType": "custom", "eventFilter": null}, {"id": "21748981494", "viewId": null, "name": null, "category": "other", "apiName": "google payflow modal - displayed", "eventType": "custom", "eventFilter": null}, {"id": "21750440072", "viewId": null, "name": null, "category": "other", "apiName": "google payflow modal - cancel", "eventType": "custom", "eventFilter": null}, {"id": "21753600919", "viewId": null, "name": null, "category": "other", "apiName": "clicked-editors-choice", "eventType": "custom", "eventFilter": null}, {"id": "21771480069", "viewId": null, "name": null, "category": "other", "apiName": "creating account modal - displayed - google event 2", "eventType": "custom", "eventFilter": null}, {"id": "21968240004", "viewId": null, "name": null, "category": "other", "apiName": "clicked-any-article-from-related-or-todays-rail", "eventType": "custom", "eventFilter": null}, {"id": "21977360038", "viewId": null, "name": null, "category": "other", "apiName": "clicked-article-in-todays", "eventType": "custom", "eventFilter": null}, {"id": "22023006917", "viewId": null, "name": null, "category": "other", "apiName": "widget-article", "eventType": "custom", "eventFilter": null}, {"id": "22029384842", "viewId": null, "name": null, "category": "other", "apiName": "clicked-sidebar-puzzle", "eventType": "custom", "eventFilter": null}, {"id": "22039837852", "viewId": null, "name": null, "category": "other", "apiName": "clicked-sidebar-puzzle-or-homepage", "eventType": "custom", "eventFilter": null}, {"id": "22054391947", "viewId": null, "name": null, "category": "other", "apiName": "scrolled-to-puzzle-section", "eventType": "custom", "eventFilter": null}, {"id": "22066001636", "viewId": null, "name": null, "category": "other", "apiName": "clicked-sidebar-puzzle-or-related", "eventType": "custom", "eventFilter": null}, {"id": "22148700181", "viewId": null, "name": null, "category": "other", "apiName": "clicked-puzzle-on-homepage", "eventType": "custom", "eventFilter": null}, {"id": "22296862323", "viewId": null, "name": null, "category": "other", "apiName": "widget-puzzle", "eventType": "custom", "eventFilter": null}, {"id": "22316140848", "viewId": null, "name": null, "category": "other", "apiName": "returned-to-key-moments", "eventType": "custom", "eventFilter": null}, {"id": "22399554593", "viewId": null, "name": null, "category": "other", "apiName": "header-global navigation-todays sections-puzzles", "eventType": "custom", "eventFilter": null}, {"id": "22423090016", "viewId": null, "name": null, "category": "other", "apiName": "clicked-puzzle-nav", "eventType": "custom", "eventFilter": null}, {"id": "22574760019", "viewId": null, "name": null, "category": "other", "apiName": "clicked-starter-category", "eventType": "custom", "eventFilter": null}, {"id": "22599070076", "viewId": null, "name": null, "category": "other", "apiName": "clicked-starter-puzzle", "eventType": "custom", "eventFilter": null}, {"id": "23077750041", "viewId": null, "name": null, "category": "other", "apiName": "cv-close-download-prompt", "eventType": "custom", "eventFilter": null}, {"id": "23081040043", "viewId": null, "name": null, "category": "other", "apiName": "cv-click-app-download-cta", "eventType": "custom", "eventFilter": null}, {"id": "23359790595", "viewId": null, "name": null, "category": "other", "apiName": "marketing-opt-in", "eventType": "custom", "eventFilter": null}, {"id": "23478040863", "viewId": null, "name": null, "category": "other", "apiName": "payment failed- stripe payment", "eventType": "custom", "eventFilter": null}, {"id": "23478451050", "viewId": null, "name": null, "category": "other", "apiName": "payment successful- stripe payment", "eventType": "custom", "eventFilter": null}, {"id": "23486630432", "viewId": null, "name": null, "category": "other", "apiName": "closed-web-story", "eventType": "custom", "eventFilter": null}, {"id": "23531530094", "viewId": null, "name": null, "category": "other", "apiName": "clicked-web-story", "eventType": "custom", "eventFilter": null}, {"id": "23556960030", "viewId": null, "name": null, "category": "other", "apiName": "continue button - complete order - stripe", "eventType": "custom", "eventFilter": null}, {"id": "23966580976", "viewId": null, "name": null, "category": "other", "apiName": "clicked-radio-link", "eventType": "custom", "eventFilter": null}, {"id": "23987201698", "viewId": null, "name": null, "category": "other", "apiName": "clicked-radio-nav", "eventType": "custom", "eventFilter": null}, {"id": "24135400793", "viewId": null, "name": null, "category": "other", "apiName": "light-viewed", "eventType": "custom", "eventFilter": null}, {"id": "24175480117", "viewId": null, "name": null, "category": "other", "apiName": "26-viewed", "eventType": "custom", "eventFilter": null}, {"id": "24177150314", "viewId": null, "name": null, "category": "other", "apiName": "15-viewed", "eventType": "custom", "eventFilter": null}, {"id": "24194070867", "viewId": null, "name": null, "category": "other", "apiName": "link- view all articles", "eventType": "custom", "eventFilter": null}, {"id": "24220340016", "viewId": null, "name": null, "category": "other", "apiName": "button- destinations", "eventType": "custom", "eventFilter": null}, {"id": "24233750040", "viewId": null, "name": null, "category": "other", "apiName": "button- offers", "eventType": "custom", "eventFilter": null}, {"id": "24235890067", "viewId": null, "name": null, "category": "other", "apiName": "article selected", "eventType": "custom", "eventFilter": null}, {"id": "24241680144", "viewId": null, "name": null, "category": "other", "apiName": "button- holiday-types", "eventType": "custom", "eventFilter": null}, {"id": "24242980439", "viewId": null, "name": null, "category": "other", "apiName": "button- most-read-stories", "eventType": "custom", "eventFilter": null}, {"id": "24307460709", "viewId": null, "name": null, "category": "other", "apiName": "clicks-inline-related-article", "eventType": "custom", "eventFilter": null}, {"id": "24369560105", "viewId": null, "name": null, "category": "other", "apiName": "clicks-any-related-article", "eventType": "custom", "eventFilter": null}, {"id": "24571301954", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-gift-article", "eventType": "custom", "eventFilter": null}, {"id": "24574550900", "viewId": null, "name": null, "category": "other", "apiName": "clicked-any-share", "eventType": "custom", "eventFilter": null}, {"id": "24584120677", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-close-button-for-gift-article", "eventType": "custom", "eventFilter": null}, {"id": "24614900131", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-close-button-for-share-articles", "eventType": "custom", "eventFilter": null}, {"id": "24619160453", "viewId": null, "name": null, "category": "other", "apiName": "clicks-on-email-a-link", "eventType": "custom", "eventFilter": null}, {"id": "24715800552", "viewId": null, "name": null, "category": "other", "apiName": "newsletter - popup - open", "eventType": "custom", "eventFilter": null}, {"id": "24758640142", "viewId": null, "name": null, "category": "other", "apiName": "checkbox updated-offers-other", "eventType": "custom", "eventFilter": null}, {"id": "24790631800", "viewId": null, "name": null, "category": "other", "apiName": "recommended-articles-click", "eventType": "custom", "eventFilter": null}, {"id": "24807140035", "viewId": null, "name": null, "category": "other", "apiName": "checkbox updated-offers-from-news-int", "eventType": "custom", "eventFilter": null}, {"id": "24858360844", "viewId": null, "name": null, "category": "other", "apiName": "continue button - complete order - direct_debit", "eventType": "custom", "eventFilter": null}, {"id": "24871780074", "viewId": null, "name": null, "category": "other", "apiName": "click-nur-9-2-sidebar-close", "eventType": "custom", "eventFilter": null}, {"id": "24898300085", "viewId": null, "name": null, "category": "other", "apiName": "continue button - complete order - paypal", "eventType": "custom", "eventFilter": null}, {"id": "24935500029", "viewId": null, "name": null, "category": "other", "apiName": "click-nur-9-2-sidebar", "eventType": "custom", "eventFilter": null}, {"id": "24961110624", "viewId": null, "name": null, "category": "other", "apiName": "link - login", "eventType": "custom", "eventFilter": null}, {"id": "25056490605", "viewId": null, "name": null, "category": "other", "apiName": "clicked-most-read-1", "eventType": "custom", "eventFilter": null}, {"id": "25061950463", "viewId": null, "name": null, "category": "other", "apiName": "clicked-most-read-2", "eventType": "custom", "eventFilter": null}, {"id": "25063520747", "viewId": null, "name": null, "category": "other", "apiName": "clicked-most-read-5", "eventType": "custom", "eventFilter": null}, {"id": "25066710014", "viewId": null, "name": null, "category": "other", "apiName": "clicked-most-read-10", "eventType": "custom", "eventFilter": null}, {"id": "25067950862", "viewId": null, "name": null, "category": "other", "apiName": "clicked-most-read-7", "eventType": "custom", "eventFilter": null}, {"id": "25069870295", "viewId": null, "name": null, "category": "other", "apiName": "clicked-most-read-8", "eventType": "custom", "eventFilter": null}, {"id": "25075510370", "viewId": null, "name": null, "category": "other", "apiName": "clicked-most-read-6", "eventType": "custom", "eventFilter": null}, {"id": "25084060111", "viewId": null, "name": null, "category": "other", "apiName": "clicked-most-read-3", "eventType": "custom", "eventFilter": null}, {"id": "25094980123", "viewId": null, "name": null, "category": "other", "apiName": "clicked-most-read-4", "eventType": "custom", "eventFilter": null}, {"id": "25110960008", "viewId": null, "name": null, "category": "other", "apiName": "clicked-most-read-9", "eventType": "custom", "eventFilter": null}, {"id": "25209330096", "viewId": null, "name": null, "category": "other", "apiName": "play-button-clicked", "eventType": "custom", "eventFilter": null}, {"id": "25408420198", "viewId": null, "name": null, "category": "other", "apiName": "Click_Close", "eventType": "custom", "eventFilter": null}, {"id": "25411840465", "viewId": null, "name": null, "category": "other", "apiName": "automatic renewal terms - expand", "eventType": "custom", "eventFilter": null}, {"id": "25412000419", "viewId": null, "name": null, "category": "other", "apiName": "automatic renewal terms - collapse", "eventType": "custom", "eventFilter": null}, {"id": "25418390163", "viewId": null, "name": null, "category": "other", "apiName": "Click_popup_CTA", "eventType": "custom", "eventFilter": null}, {"id": "25437730581", "viewId": null, "name": null, "category": "other", "apiName": "feedback-thumbs-down", "eventType": "custom", "eventFilter": null}, {"id": "25448080549", "viewId": null, "name": null, "category": "other", "apiName": "feedback-thumbs-up", "eventType": "custom", "eventFilter": null}, {"id": "25448900228", "viewId": null, "name": null, "category": "other", "apiName": "Sunday_Crossword_plays", "eventType": "custom", "eventFilter": null}, {"id": "25461910680", "viewId": null, "name": null, "category": "other", "apiName": "pause-button-clicked", "eventType": "custom", "eventFilter": null}, {"id": "25581150213", "viewId": null, "name": null, "category": "other", "apiName": "Article_3_viewed_in_registration", "eventType": "custom", "eventFilter": null}, {"id": "25606930236", "viewId": null, "name": null, "category": "other", "apiName": "subscription - success", "eventType": "custom", "eventFilter": null}, {"id": "25613770234", "viewId": null, "name": null, "category": "other", "apiName": "Article_limit_reached", "eventType": "custom", "eventFilter": null}, {"id": "25622040267", "viewId": null, "name": null, "category": "other", "apiName": "Article_1_viewed_in_registration", "eventType": "custom", "eventFilter": null}, {"id": "25625230064", "viewId": null, "name": null, "category": "other", "apiName": "NUK_6_11_Registration_complete", "eventType": "custom", "eventFilter": null}, {"id": "25633740074", "viewId": null, "name": null, "category": "other", "apiName": "Article_2_viewed_in_registration", "eventType": "custom", "eventFilter": null}, {"id": "25663900419", "viewId": null, "name": null, "category": "other", "apiName": "confirmation - PAYPAL", "eventType": "custom", "eventFilter": null}, {"id": "25674440365", "viewId": null, "name": null, "category": "other", "apiName": "confirmation - DIRECT_DEBIT", "eventType": "custom", "eventFilter": null}, {"id": "25687090370", "viewId": null, "name": null, "category": "other", "apiName": "registration", "eventType": "custom", "eventFilter": null}, {"id": "25699340482", "viewId": null, "name": null, "category": "other", "apiName": "Clicks_on_paywall_CTA", "eventType": "custom", "eventFilter": null}, {"id": "25704220059", "viewId": null, "name": null, "category": "other", "apiName": "confirmation - CREDIT_CARD", "eventType": "custom", "eventFilter": null}, {"id": "25756200887", "viewId": "19593631088", "name": null, "category": "other", "apiName": "18261964525_conv_clicks_on_homepage_banner_cta", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#react-edition-subscription-marketing-banner-slice div + a, #react-edition-homepage-banner div + a"}}, {"id": "25789870374", "viewId": null, "name": null, "category": "other", "apiName": "clicks-returning-users-pop-up-cta", "eventType": "custom", "eventFilter": null}, {"id": "25791680852", "viewId": null, "name": null, "category": "other", "apiName": "Saw_alternative_puzzles", "eventType": "custom", "eventFilter": null}, {"id": "25817290903", "viewId": null, "name": null, "category": "other", "apiName": "Played_alternative_puzzles", "eventType": "custom", "eventFilter": null}, {"id": "25817580427", "viewId": "25803900602", "name": null, "category": "other", "apiName": "18261964525_conv_student_store__clicks_on_hero_area", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#banner-checkout-button-1"}}, {"id": "25827910229", "viewId": "25803900602", "name": null, "category": "other", "apiName": "18261964525_conv_student_store__clicks_on_subscription_options_i", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".subscription-expand"}}, {"id": "25839490245", "viewId": "25803900602", "name": null, "category": "other", "apiName": "18261964525_conv_student_store__clicks_on_benefits_area", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#checkout-button"}}, {"id": "25971480028", "viewId": null, "name": null, "category": "other", "apiName": "Clicked_on_a_puzzle_and_play", "eventType": "custom", "eventFilter": null}, {"id": "26032282766", "viewId": null, "name": null, "category": "other", "apiName": "CONV_Clicks_registration_paywall_CTA", "eventType": "custom", "eventFilter": null}, {"id": "26079880178", "viewId": null, "name": null, "category": "other", "apiName": "nur-11-0-show-more", "eventType": "custom", "eventFilter": null}, {"id": "26142710610", "viewId": null, "name": null, "category": "other", "apiName": "conv_clicks_student_subscription_under_other_subscription_opt", "eventType": "custom", "eventFilter": null}, {"id": "26156401167", "viewId": null, "name": null, "category": "other", "apiName": "header-global navigation-channels-puzzles", "eventType": "custom", "eventFilter": null}, {"id": "26156911258", "viewId": null, "name": null, "category": "other", "apiName": "text-field updated-email address", "eventType": "custom", "eventFilter": null}, {"id": "26158100659", "viewId": null, "name": null, "category": "other", "apiName": "conv_studentPage_cta_click__center", "eventType": "custom", "eventFilter": null}, {"id": "26160251648", "viewId": null, "name": null, "category": "other", "apiName": "conv_Play_for_8_seconds", "eventType": "custom", "eventFilter": null}, {"id": "26161891633", "viewId": null, "name": null, "category": "other", "apiName": "header-global navigation-channels", "eventType": "custom", "eventFilter": null}, {"id": "26164491243", "viewId": null, "name": null, "category": "other", "apiName": "clicks-take-the-tour", "eventType": "custom", "eventFilter": null}, {"id": "26165601135", "viewId": null, "name": null, "category": "other", "apiName": "CONV_Play_for_30_seconds", "eventType": "custom", "eventFilter": null}, {"id": "26167731184", "viewId": null, "name": null, "category": "other", "apiName": "mobile menu-open", "eventType": "custom", "eventFilter": null}, {"id": "26168370790", "viewId": null, "name": null, "category": "other", "apiName": "conv_studentPage_cta_click__top", "eventType": "custom", "eventFilter": null}, {"id": "26171601178", "viewId": null, "name": null, "category": "other", "apiName": "Clicks regi wall 1", "eventType": "custom", "eventFilter": null}, {"id": "26172470543", "viewId": null, "name": null, "category": "other", "apiName": "conv_User_clicks_on_Click_here_CTA", "eventType": "custom", "eventFilter": null}, {"id": "26173100465", "viewId": null, "name": null, "category": "other", "apiName": "conv_clicks_Student_in_the_Nav_subscription_drop_down", "eventType": "custom", "eventFilter": null}, {"id": "26177170234", "viewId": null, "name": null, "category": "other", "apiName": "cv-9-11-clicks_paywall_v1", "eventType": "custom", "eventFilter": null}, {"id": "26185160822", "viewId": null, "name": null, "category": "other", "apiName": "User changes email", "eventType": "custom", "eventFilter": null}, {"id": "26188930259", "viewId": null, "name": null, "category": "other", "apiName": "cv-9-11-clicks_paywall_v2", "eventType": "custom", "eventFilter": null}, {"id": "26205081555", "viewId": null, "name": null, "category": "other", "apiName": "clicks-overlay-to-close", "eventType": "custom", "eventFilter": null}, {"id": "26220531002", "viewId": null, "name": null, "category": "other", "apiName": "clicks-cross-to-close", "eventType": "custom", "eventFilter": null}, {"id": "26249490775", "viewId": null, "name": null, "category": "other", "apiName": "clicks-close-to-finish", "eventType": "custom", "eventFilter": null}, {"id": "26261180028", "viewId": null, "name": null, "category": "other", "apiName": "conv_Opens_nav_mobile_or_tablet", "eventType": "custom", "eventFilter": null}, {"id": "26289080018", "viewId": null, "name": null, "category": "other", "apiName": "clicks-maybe-later", "eventType": "custom", "eventFilter": null}, {"id": "26294300015", "viewId": null, "name": null, "category": "other", "apiName": "CONV_Clicked_tooltip", "eventType": "custom", "eventFilter": null}, {"id": "26321770610", "viewId": null, "name": null, "category": "other", "apiName": "flash sale popup modal-subscribe cta", "eventType": "custom", "eventFilter": null}, {"id": "26350550144", "viewId": null, "name": null, "category": "other", "apiName": "link - subscribe", "eventType": "custom", "eventFilter": null}, {"id": "26361850361", "viewId": null, "name": null, "category": "other", "apiName": "newsletters-hub-toggle", "eventType": "custom", "eventFilter": null}, {"id": "26582850099", "viewId": null, "name": null, "category": "other", "apiName": "puzzle completed", "eventType": "custom", "eventFilter": null}, {"id": "26585910135", "viewId": null, "name": null, "category": "other", "apiName": "puzzle started", "eventType": "custom", "eventFilter": null}, {"id": "26590720083", "viewId": null, "name": null, "category": "other", "apiName": "puzzle category clicked", "eventType": "custom", "eventFilter": null}, {"id": "26617230038", "viewId": null, "name": null, "category": "other", "apiName": "puzzle completed-success", "eventType": "custom", "eventFilter": null}, {"id": "26624980749", "viewId": null, "name": null, "category": "other", "apiName": "closes-email-fly-in", "eventType": "custom", "eventFilter": null}, {"id": "27162050173", "viewId": null, "name": null, "category": "other", "apiName": "nuk-3-16-continue-cta", "eventType": "custom", "eventFilter": null}, {"id": "27166700182", "viewId": null, "name": null, "category": "other", "apiName": "conv_closes_survey", "eventType": "custom", "eventFilter": null}, {"id": "27168470040", "viewId": null, "name": null, "category": "other", "apiName": "times-radio-banner-cta", "eventType": "custom", "eventFilter": null}, {"id": "27177560134", "viewId": null, "name": null, "category": "other", "apiName": "nuk-3-16-continue-cta-v2", "eventType": "custom", "eventFilter": null}, {"id": "27177860121", "viewId": null, "name": null, "category": "other", "apiName": "nuk-3-16-continue-cta-v1", "eventType": "custom", "eventFilter": null}, {"id": "27178330248", "viewId": null, "name": null, "category": "other", "apiName": "nur-0-3-closes-survey", "eventType": "custom", "eventFilter": null}, {"id": "27201170140", "viewId": null, "name": null, "category": "other", "apiName": "nuk-3-16-subscribe-now-v2", "eventType": "custom", "eventFilter": null}, {"id": "27208940164", "viewId": null, "name": null, "category": "other", "apiName": "nuk-3-16-view-subs-v1", "eventType": "custom", "eventFilter": null}], "dimensions": [{"id": "19947278362", "name": null, "apiName": "plan-type", "segmentId": null}, {"id": "19972290967", "name": null, "apiName": "checkout-stage", "segmentId": null}, {"id": "20028919636", "name": null, "apiName": "Exit Intent", "segmentId": null}, {"id": "20046021193", "name": null, "apiName": "Segment by experiment", "segmentId": null}, {"id": "20080989385", "name": null, "apiName": "plan-type-store", "segmentId": null}, {"id": "20246495507", "name": null, "apiName": "logged-in-user-attribute", "segmentId": null}, {"id": "20267913091", "name": null, "apiName": "logged-out-user-attribute", "segmentId": null}, {"id": "20411821545", "name": null, "apiName": "related-article-count", "segmentId": null}, {"id": "20445524556", "name": null, "apiName": "website-section", "segmentId": null}, {"id": "20550021082", "name": null, "apiName": "plan-type-render", "segmentId": null}, {"id": "20569584652", "name": null, "apiName": "user-saw-sidebar", "segmentId": null}, {"id": "20603910204", "name": null, "apiName": "saw-comments-section", "segmentId": null}, {"id": "20625520423", "name": null, "apiName": "played-audio-widget", "segmentId": null}, {"id": "20633020321", "name": null, "apiName": "seen-briefing-widget", "segmentId": null}, {"id": "20686800589", "name": null, "apiName": "ten-secs-inactive", "segmentId": null}, {"id": "20713220919", "name": null, "apiName": "clicked-on-one-related-articles", "segmentId": null}, {"id": "20886395230", "name": null, "apiName": "nur-4_1-saw-content", "segmentId": null}, {"id": "20905972703", "name": null, "apiName": "type-of-article", "segmentId": null}, {"id": "20909831489", "name": null, "apiName": "reached-uk-store-page", "segmentId": null}, {"id": "20915684019", "name": null, "apiName": "next-article", "segmentId": null}, {"id": "20928031287", "name": null, "apiName": "previous-article", "segmentId": null}, {"id": "21006563682", "name": null, "apiName": "clicked-gift-icon", "segmentId": null}, {"id": "21021982265", "name": null, "apiName": "clicked-article-in-todays", "segmentId": null}, {"id": "21022931918", "name": null, "apiName": "no-todays-rail", "segmentId": null}, {"id": "21037001129", "name": null, "apiName": "seen-article-with-no-related", "segmentId": null}, {"id": "21116950066", "name": null, "apiName": "cv-7-1-clicks-on-toggle", "segmentId": null}, {"id": "21123280806", "name": null, "apiName": "clicked-on-most-popular", "segmentId": null}, {"id": "21162062895", "name": null, "apiName": "clicked-start-free-trial", "segmentId": null}, {"id": "21162490887", "name": null, "apiName": "clicked-on-save", "segmentId": null}, {"id": "21162620346", "name": null, "apiName": "print-delivery-method", "segmentId": null}, {"id": "21181690143", "name": null, "apiName": "print-plan-type", "segmentId": null}, {"id": "21182990896", "name": null, "apiName": "clicked-any-share", "segmentId": null}, {"id": "21199041409", "name": null, "apiName": "clicked-on-comments-icon", "segmentId": null}, {"id": "21204711561", "name": null, "apiName": "clicked-numbers-category", "segmentId": null}, {"id": "21211180476", "name": null, "apiName": "clicked-view-all-subscription-options", "segmentId": null}, {"id": "21231301113", "name": null, "apiName": "clicked-games-category", "segmentId": null}, {"id": "21236900658", "name": null, "apiName": "expanded-trial-section", "segmentId": null}, {"id": "21240420688", "name": null, "apiName": "clicked-words-category", "segmentId": null}, {"id": "21350810159", "name": null, "apiName": "clicked-on-related-or-most-popular", "segmentId": null}, {"id": "21372301678", "name": null, "apiName": "switched-to-monthly-15", "segmentId": null}, {"id": "21376022249", "name": null, "apiName": "switched-to-monthly-26", "segmentId": null}, {"id": "21380890891", "name": null, "apiName": "switched-to-annual-26", "segmentId": null}, {"id": "21392310954", "name": null, "apiName": "switched-to-annual-15", "segmentId": null}, {"id": "21536430338", "name": null, "apiName": "payment-type", "segmentId": null}, {"id": "21586281026", "name": null, "apiName": "is-logged-in", "segmentId": null}, {"id": "21603430141", "name": null, "apiName": "conv-plan-type", "segmentId": null}, {"id": "21639380123", "name": null, "apiName": "session-number", "segmentId": null}, {"id": "21688241046", "name": null, "apiName": "clicked-editors-choice", "segmentId": null}, {"id": "21696212028", "name": null, "apiName": "swg-flow-started", "segmentId": null}, {"id": "21737751020", "name": null, "apiName": "is-swg-subscription", "segmentId": null}, {"id": "21783230141", "name": null, "apiName": "article-market", "segmentId": null}, {"id": "21950270018", "name": null, "apiName": "clicked-any-article-from-related-or-todays-rail", "segmentId": null}, {"id": "21977410055", "name": null, "apiName": "number-of-articles-both-rails", "segmentId": null}, {"id": "21981350010", "name": null, "apiName": "saw-related", "segmentId": null}, {"id": "22055662655", "name": null, "apiName": "clicked-sidebar-puzzle", "segmentId": null}, {"id": "22060060895", "name": null, "apiName": "saw-article-page", "segmentId": null}, {"id": "22264331402", "name": null, "apiName": "swg-is-ready-to-pay-flow", "segmentId": null}, {"id": "22378642009", "name": null, "apiName": "tealium-visitor-id", "segmentId": null}, {"id": "22696480920", "name": null, "apiName": "zephr-hot-cold-paywall", "segmentId": null}, {"id": "24299950773", "name": null, "apiName": "saw-inline-related-article-nur-1-12", "segmentId": null}, {"id": "24862080918", "name": null, "apiName": "nur-9-2-sidebar-click", "segmentId": null}, {"id": "24924900460", "name": null, "apiName": "acs_tnl", "segmentId": null}, {"id": "25085270587", "name": null, "apiName": "store-page-user", "segmentId": null}, {"id": "25095300210", "name": null, "apiName": "used-most-read", "segmentId": null}, {"id": "25870510499", "name": null, "apiName": "Users_served_banner_ad", "segmentId": null}, {"id": "25932920011", "name": null, "apiName": "Saw_alternative_puzzles_segment", "segmentId": null}, {"id": "25934090006", "name": null, "apiName": "Users_who_have_not_been_served_the_banner_ad", "segmentId": null}, {"id": "26171721569", "name": null, "apiName": "CONV_Clicks_explore", "segmentId": null}, {"id": "26173630149", "name": null, "apiName": "registered-user", "segmentId": null}, {"id": "26202780397", "name": null, "apiName": "CONV_Early_life_user", "segmentId": null}, {"id": "26319720004", "name": null, "apiName": "players", "segmentId": null}, {"id": "26445290403", "name": null, "apiName": "navigation-anchor-puzzles", "segmentId": null}, {"id": "26592500218", "name": null, "apiName": "Saw_Tooltip", "segmentId": null}, {"id": "26841270252", "name": null, "apiName": "nuk-048-source", "segmentId": null}], "plugins": [function(PluginManager) {
  
  PluginManager.registerAnalyticsTracker('18639401787', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['18639401787'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        /*
 * Javascript written in this tab will run every time a user is
 * assigned to an experiment and variation, but before any experiment
 * code runs. This hook is useful for tracking which variations a
 * visitor has been assigned to. Click the help icon for more information.
 */

(function() {
  function onCampaignDecided(event) {
    if (isHoldback) {
      return;
    }
    
    // when the user doesn't pass audience conditions the expriment id is null
    if (!experimentId) {
			return;
    }

    var experimentData = {
    	experiment_platform: "optimizely_web",
      experiment_platform_user_id: window.optimizely.get('visitor_id').randomId,
      experiment_data: []
    };
    
    if (window.utag_data && window.utag_data.experiment_data && window.utag_data.experiment_data.length > 0) {
    	experimentData.experiment_data = window.utag_data.experiment_data;
    }
    
    experimentData.experiment_data.push([experimentId, variationId]);

    window.utag_data = Object.assign(window.utag_data || {}, experimentData);
  }
  
  onCampaignDecided();

})();
      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
PluginManager.registerAnalyticsTracker('18802034055', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['18802034055'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        /*
 * Javascript written in this tab will run every time a user is
 * assigned to an experiment and variation, but before any experiment
 * code runs. This hook is useful for tracking which variations a
 * visitor has been assigned to. Click the help icon for more information.
 */

(function() {
  function onCampaignDecided(event) {
    if (isHoldback) {
      return;
    }
    
    // when the user doesn't pass audience conditions the expriment id is null
    if (!experimentId) {
			return;
    }

    var experimentData = {
    	experiment_platform: "optimizely_web",
      experiment_platform_user_id: window.optimizely.get('visitor_id').randomId,
      experiment_data: []
    };
    
    if (window.utag_data && window.utag_data.experiment_data && window.utag_data.experiment_data.length > 0) {
    	experimentData.experiment_data = window.utag_data.experiment_data;
    }
    
    experimentData.experiment_data.push([experimentId, variationId]);

    window.utag_data = Object.assign(window.utag_data || {}, experimentData);
  }
  
  onCampaignDecided();

})();
      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
PluginManager.registerAnalyticsTracker('18817253497', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['18817253497'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        /*
 * Javascript written in this tab will run every time a user is
 * assigned to an experiment and variation, but before any experiment
 * code runs. This hook is useful for tracking which variations a
 * visitor has been assigned to. Click the help icon for more information.
 */

(function() {
  function onCampaignDecided(event) {
    if (isHoldback) {
      return;
    }
    
    // when the user doesn't pass audience conditions the expriment id is null
    if (!experimentId) {
			return;
    }

    var experimentData = {
    	experiment_platform: "optimizely_web",
      experiment_platform_user_id: window.optimizely.get('visitor_id').randomId,
      experiment_data: []
    };
    
    if (window.utag_data && window.utag_data.experiment_data && window.utag_data.experiment_data.length > 0) {
    	experimentData.experiment_data = window.utag_data.experiment_data;
    }
    
    experimentData.experiment_data.push([experimentId, variationId]);

    window.utag_data = Object.assign(window.utag_data || {}, experimentData);
    
    // send link event for every experiment on thank-you page
    if (window.location.href.indexOf('thank-you') !== -1 && 
        window && window.utag && window.utag.link) {
          window.utag.link({
            "event_navigation_action": "navigation",
            "event_navigation_name": "optimizely experiment data",
            "event_navigation_browsing_method": "automated",
            "experiment_platform": experimentData.experiment_platform,
            "experiment_platform_user_id": experimentData.experiment_platform_user_id,
            "experiment_data": [[experimentId, variationId]]
         });
     }
  }
  
  onCampaignDecided();

})();
      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
PluginManager.registerAnalyticsTracker('20160650637', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['20160650637'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        /*
 * Javascript written in this tab will run every time a user is
 * assigned to an experiment and variation, but before any experiment
 * code runs. This hook is useful for tracking which variations a
 * visitor has been assigned to. Click the help icon for more information.
 */

(function() {
  function onCampaignDecided(event) {
    if (isHoldback) {
      return;
    }
    
    // when the user doesn't pass audience conditions the expriment id is null
    if (!experimentId) {
			return;
    }

    var experimentData = {
    	experiment_platform: "optimizely_web",
      experiment_platform_user_id: window.optimizely.get('visitor_id').randomId,
      experiment_data: []
    };
    
    if (window.utag_data && window.utag_data.experiment_data && window.utag_data.experiment_data.length > 0) {
    	experimentData.experiment_data = window.utag_data.experiment_data;
    }
    
    experimentData.experiment_data.push([experimentId, variationId]);

    window.utag_data = Object.assign(window.utag_data || {}, experimentData);
  }
  
  onCampaignDecided();

})();
      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
PluginManager.registerAnalyticsTracker('22275782302', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['22275782302'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        /*
 * Javascript written in this tab will run every time a user is
 * assigned to an experiment and variation, but before any experiment
 * code runs. This hook is useful for tracking which variations a
 * visitor has been assigned to. Click the help icon for more information.
 */

function onCampaignDecided() {
  if (isHoldback || !experimentId || !variationId) {
    return;
  }

  window.optimizely_newrelic_data = window.optimizely_newrelic_data || [];

  window.optimizely_newrelic_data.push(experimentId + ':' + variationId);

  if (
    window.newrelic &&
    typeof window.newrelic == 'object' &&
    typeof window.newrelic.setCustomAttribute === 'function'
  ) {
    window.newrelic.setCustomAttribute('optimizely-web', JSON.stringify(window.optimizely_newrelic_data));
  }
}

if (window && window.optimizely && window.optimizely.initialized) {
  onCampaignDecided();
}

      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
PluginManager.registerAnalyticsTracker('26036251294', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['26036251294'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        exte field.default_value;
    }
  }
  })(extension);
        /*
 * Javascript written in this tab will run every time a user is
 * assigned to an experiment and variation, but before any experiment
 * code runs. This hook is useful for tracking which variations a
 * visitor has been assigned to. Click the help icon for more information.
 */

function onCampaignDecided() {
  if (isHoldback || !experimentId || !variationId) {
    return;
  }

  window.optimizely_newrelic_data = window.optimizely_newrelic_data || [];

  window.optimizely_newrelic_data.push(experimentId + ':' + variationId);

  if (
    window.newrelic &&
    typeof window.newrelic == 'object' &&
    typeof window.newrelic.setCustomAttribute === 'function'
  ) {
    window.newrelic.setCustomAttribute('optimizely-web', JSON.stringify(window.optimizely_newrelic_data));
  }
}

if (window && window.optimizely && window.optimizely.initialized) {
  onCampaignDecided();
}

      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
}
], "interestGroups": [], "tagGroups": []},f=__webpack_require__(8011),l="initializeOptimizelyPreview";if(f.initGlobalStore(s),u.populateDirectiveData(),r.clientHasAlreadyInitialized())e.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");else if(r.shouldBailForDesktopApp())e.log("Main / Disabling because of desktop app.");else if(r.conflictInObservingChanges())e.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");else{if(r.shouldLoadInnie())a.registerFunction("getProjectId",(function(){return s.projectId})),a.registerFunction("getAccountId",(function(){return s.accountId})),c.addScriptAsync("https://app.optimizely.com/js/innie.js"),e.log("Main / Disabling in favor of the editor client.");else if(r.shouldLoadPreview())(r.isSlave()?window.optimizely:window.optimizely=window.optimizely||[]).push({type:"load",data:s}),e.log("Main / Disabling in favor of the preview client."),__webpack_require__(9154).setupPreviewGlobal(),__webpack_require__(9154).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:s}),r.isSlave()||(a.registerFunction("getProjectId",(function(){return s.projectId})),c.addScriptSync("https://cdn-assets-prod.s3.amazonaws.com/public/15853140465/s/tnl_custom_snippet/preview.js"));else if(r.shouldBootstrapDataForPreview()){a.registerFunction(l,(function(t){n(),a.unregisterFunction(l)}));var d=r.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:a.getFunction("getProjectId")();v=r.getProjectToken(),h=d,p=r.getPreviewLayerIds(),o="/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",v).replace("__PROJECT_ID__",h).replace("__PREVIEW_LAYER_IDS__",p.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0),c.addScriptSync(o),__webpack_require__(9154).setupPreviewGlobal(),c.addScriptAsync("/dist/js/preview_ui.js")}else r.shouldBootstrapDation(t){n(),a.unregisterFunction(l)})),c.addScriptAsync(window.optimizely_editor_data_endpoint)):r.shouldInitialize()&&n();var v,h,p;t.timeEnd("block");var g=t.now();t.setMark("optimizelyFinished",startTime=g,duration=g)}}()}catch(n){try{__webpack_require__(9714).handleError(n)}catch(t){console.log(t)}}}()})();