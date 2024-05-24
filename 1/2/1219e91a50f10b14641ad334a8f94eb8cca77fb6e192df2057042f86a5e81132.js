"use strict";var brandmetrics,__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};!function(l){if(void 0===l.api){l.api=null;var n,r="unknown";l.bootstrap=function(e,t,n){void 0===n&&(n=!1);var o=function(){window._brandmetrics_initiated&&window._brandmetrics_initiated(window.brandmetrics.api),t&&t(window.brandmetrics.api)};"unknown"===r||n?(r="strapping",i(e,function(e,t){var n;if(e&&!(null===(n=window.brandmetrics.api)||void 0===n?void 0:n.hasConsent()))d(t,function(e){window.brandmetrics.api=e,o()});else if(!e){window.brandmetrics.api&&window.brandmetrics.api.stop&&window.brandmetrics.api.stop();window.brandmetrics.api={hasConsent:function(){return!1},isReady:function(){return!0}},o()}})):o()},l.register=function(e){o[e.id]=e.ctor,n&&n(e)},l.getModule=function(e){return o[e],o[e]},l.defaultOptions=function(e){var t={siteId:"",baseUrl:location.protocol+"//"+location.host,consentMode:{type:"iab"},consentRetryCount:2,isTest:!1,logConfiguration:{errors:!1,bundle:!1,level:"None"},query:"",measurements:[],listeners:[],storage:"none",startMode:[{type:"manual"}],userMode:{type:"none"},version:void 0,survey:{max:10,interval:10,expInt:10,maxTot:50,intervalTot:10},adSlot:{},inview:{type:"intersectionobserver"},surveyRandomization:.5,dataRequestType:"script",scriptType:0};return p(t,e)};var p=function(e,t){return __assign(__assign({},e),t)},f=l.defaultOptions({}),o={},i=function(e,n){if(!("sandbox"in document.createElement("iframe")))throw new Error("Sandbox not supported");if(f=p(l.defaultOptions({}),e||{}),c())s(!1,f,n);else{var o=1,r=function(){t(f,function(e,t){!e&&o<=f.consentRetryCount?(o++,setTimeout(function(){r()},3e3)):n(e,t)})};r()}},t=function(t,n){if("none"!==t.consentMode.type){var e=void 0;switch(t.consentMode.type){case"iab":e=new(l.getModule(22));break;case"usp":e=new(l.getModule(34));break;case"custom":e=new(l.getModule(23))(t.consentMode.conf);break;default:throw new Error("Cannot handle consent type: "+t.consentMode.type)}e.check(function(e){e?a(t,n):s(!1,t,n)})}else a(t,n)},a=function(e,t){if(void 0===window._brandmetrics_consent)s(!0,e,t);else{var n=window._brandmetrics_consent();s(n,e,t)}},s=function(e,t,n){n(e,t)},c=function(){try{return null!==localStorage.getItem("__bmdnt")}catch(e){return!1}},d=function(d,u){var e=[];window.IntersectionObserver&&e.push(16),localStorage&&e.push(5);var t=function(){return void 0!==o[-2]&&(n=void 0,function(){var e,t=p(f,l.getModule(-2)),n="ls"===t.storage&&localStorage?5:6,o=new(l.getModule(2))(t),r=new(l.getModule(n))(t,o,!1),i=t.listeners.filter(function(e){return"api"!==e.type}).map(function(e){var t="apn"===e.type?10:"slot"===e.type?13:"gpt"===e.type?8:"pbj"===e.type?7:"ntv"===e.type?12:"gptStrict"===e.type?9:"gptHb"===e.type?28:"gptPb"===e.type?30:"kvl"===e.type?29:-1;return new(l.getModule(t))(e)});switch(t.userMode.type){case"custom":e=new(l.getModule(24))(r,o,t.userMode);break;case"internal":e=new(l.getModule(31))(r,o,t.userMode)}var a=new(l.getModule(3))(t,o,e),s=new(l.getModule(4))(a,o,r),c=new(l.getModule(1))(t,a,o,i,r);new(l.getModule(26))({options:d,collection:c});l.getModule(0)(t,o,a,s,c,0,function(e){u(e)})}(),!0)};(n=t)()||(g(d,e),t())},g=function(e,t){var n=document,o=n.location,r=o.ancestorOrigins;if(n.body){for(var i=0,a=0,s=t;a<s.length;a++){var c=s[a];i|=Math.pow(2,c)}var d=o&&o.search&&-1!==o.search.indexOf("bm_d"),u=r&&0<r.length?r:[o.href],l=u[u.length-1],p=n.createElement("a");p.href=l;var f=p.host,w="?sid="+e.siteId+"&toploc="+f;d&&(w+="&bm_d"),e.query&&(w+="&"+e.query),e.version&&(w+="&"+e.version),e.logConfiguration.bundle&&(w+="&rnd="+Math.floor(9999001*Math.random()+1e3).toString());var v=(!d&&e.cdnUrl?e.cdnUrl:e.baseUrl)+"/scripts/bundle/"+i.toString()+".js"+("?"!==w?w:""),b=document.createElement("script");b.setAttribute("type","text/javascript"),b.setAttribute("async","true"),b.setAttribute("src",v),document.body.appendChild(b)}else n.addEventListener("DOMContentLoaded",function(){g(e,t)})}}}(brandmetrics||(brandmetrics={}));"use strict";!function(){var o=!1,e=function(t){var r,e,a,n=function(){if(window.__tcfapi)return window.__tcfapi;for(var i,t=window,a={};t;){try{if(t.frames.___tcfapiLocator){i=t;break}}catch(t){}if(t===window.top)break;t=t.parent}return i?(window.addEventListener("message",function(t){var e;try{e="string"==typeof t.data?JSON.parse(t.data):t.data}catch(t){}if(void 0!==e){var n=e.__tcfapiReturn;n&&a[n.callId]&&(a[n.callId](n.returnValue,n.success),delete a[n.callId])}},!1),window.__tcfapi=function(t,e,n,o){var r={__tcfapiCall:{command:t,parameter:o,version:e,callId:Math.random().toString()}};a[r.__tcfapiCall.callId]=n,i.postMessage(r,"*")},window.__tcfapi):void 0}();n?(e=n,a=t,o||(e("addEventListener",2,function(t,e){if(e&&"loaded"===t.cmpStatus&&("tcloaded"===t.eventStatus||"useractioncomplete"===t.eventStatus)&&t.vendor&&t.purpose){var n=t.vendor,o=t.purpose,r=!1,i=!1;if(n.consents&&(r=n.consents[422]),n.legitimateInterests&&(r=r||n.legitimateInterests[422]),o.consents&&(i=o.consents[1]),o.legitimateInterests&&(i=i||o.legitimateInterests[1]),r&&i)return void a(!0)}a(!1)},[422]),o=!0)):window.__cmp&&"function"==typeof window.__cmp?(r=t,window.__cmp("getVendorConsents",Uint16Array.from([422]),function(t,e){if(e&&t.vendorConsents&&t.purposeConsents){var n=t.vendorConsents[422],o=t.purposeConsents[1];if(n&&o)return void r(!0)}r(!1)})):t(!0)},t=function(){function t(){}return t.prototype.check=function(t){e(t)},t}();window.brandmetrics.register({id:22,ctor:t})}();window.brandmetrics.bootstrap({baseUrl:"https://collector.brandmetrics.com",cdnUrl:"https://cdn.brandmetrics.com",siteId:"89e4fe55-4838-4c45-a4bd-fb2314d9fd36",consentMode:{"type":"iab","conf":null},query:"",scriptType:0,});cX || {};
			cX.callQueue = cX.callQueue || [];
			cX.callQueue.push(["initializePage"]);
			cX.callQueue.push(["setSiteId", "1135102062960807697"]);
			cX.callQueue.push([
				"sendPageViewEvent",
				{
					location: locationURL,
					referrer: referrerURL,
				},
			]);
		}
	</script><script type="text/javascript">window.cX = window.cX || {};
		cX.callQueue = cX.callQueue || [];
		cX.callQueue.push(["setSiteId", "1135102062960807697"]);
		cX.callQueue.push(["sendPageViewEvent"]);
	</script><script type="text/plain" class="optanon-category-C0002" async src="//code3.adtlgc.com/js/sati_init.js"></script><script type="text/plain" class="optanon-category-C0002">(function (d, s, e, t) {
			e = d.createElement(s);
			e.type = "text/java" + s;
			e.async = "async";
			e.src =
				"http" +
				("https:" === location.protocol ? "s://s" : "://") +
				"cdn.cxense.com/cx.js";
			t = d.getElementsByTagName(s)[0];
			t.parentNode.insertBefore(e, t);
		})(document, "script");
	</script><script>window.insertedAdsByGoogleJs = false;
		function insertAdsByGoogleJs() {
				window.insertedAdsByGoogleJs = true;
				!(function () { window.googletag = window.googletag || {}; window.vmpbjs = window.vmpbjs || {}; window.vpb = window.vpb || {}; vpb.cmd = vpb.cmd || []; vpb.st=Date.now();  vpb.fastLoad = true; googletag.cmd = googletag.cmd || []; vmpbjs.cmd = vmpbjs.cmd || []; var cmds = []; try{ cmds = googletag.cmd.slice(0); googletag.cmd.length = 0; }catch(e){} var ready = false; function exec(cb) { return cb.call(googletag); } var overriden = false; googletag.cmd.push(function () { overriden = true; googletag.cmd.unshift = function (cb) { if (ready) { return exec(cb); } cmds.unshift(cb); if (cb._startgpt) { ready = true; for (var k = 0; k < cmds.length; k++) { exec(cmds[k]); } } }; googletag.cmd.push = function (cb) { if (ready) { return exec(cb); } cmds.push(cb); }; }); if(!overriden){ googletag.cmd.push = function (cb) { cmds.push(cb); }; googletag.cmd.unshift = function (cb) { cmds.unshift(cb); if (cb._startgpt) { ready = true; if (googletag.apiReady) { cmds.forEach(function (cb) { googletag.cmd.push(cb); }); } else { googletag.cmd = cmds; } } }; } var dayMs = 36e5, cb = parseInt(Date.now() / dayMs), vpbSrc = '//player.bidmatic.io/prebidlink/' + cb + '/wrapper_hb_755701_19057.js', pbSrc = vpbSrc.replace('wrapper_hb', 'hb'), gptSrc = '//securepubads.g.doubleclick.net/tag/js/gpt.js', c = document.head || document.body || document.documentElement; function loadScript(src, cb) { var s = document.createElement('script'); s.src = src; s.defer=false; c.appendChild(s); s.onload = cb; s.onerror = function(){ var fn = function(){}; fn._startgpt = true; googletag.cmd.unshift(fn); }; return s; } loadScript(pbSrc); loadScript(gptSrc); loadScript(vpbSrc); })()

		}
		</script>

	<script>(function () {
			var timeoutBeforeInsertingAds = setTimeout(function () {
				googletag.cmd.push(function () {
					googletag.pubads().setRequestNonPersonalizedAds(1);
					googletag.pubads().refresh();
				});
				insertAdsByGoogleJs();
			}, 7500);

			var cnt = 0;
			var consentSetInterval = setInterval(function () {
				cnt += 1;
				if (cnt === 600) {
					clearInterval(consentSetInterval);
				}

				if (typeof window.__tcfapi !== "undefined") {
					clearInterval(consentSetInterval);

					window.__tcfapi(
						"addEventListener",
						2,
						function (tcData, listenerSuccess) {
							if (listenerSuccess && !window.insertedAdsByGoogleJs) {
								if (
									tcData.eventStatus === "tcloaded" ||
									tcData.eventStatus === "useractioncomplete"
								) {
									clearTimeout(timeoutBeforeInsertingAds);

									var requestNonPersonalized = 0;

									if (!tcData.gdprApplies) {
									} else {
										var hasDeviceStorageAndAccessConsent =
											tcData.purpose.consents[1] || false;

										if (hasDeviceStorageAndAccessConsent) {
											var hasGoogleAdvertisingProductsConsent =
												tcData.vendor.consents[755] ||
												false;

											if (
												!hasGoogleAdvertisingProductsConsent
											) {
												requestNonPersonalized = 1;
											}
										}
									}

									requestNonPersonalized = 1;

									googletag.cmd.push(function () {
										googletag
											.pubads()
											.setRequestNonPersonalizedAds(
												requestNonPersonalized
											);

										googletag.pubads().refresh();
									});

									insertAdsByGoogleJs();
								}
							}
						}
					);
				}

				cnt++;
			}, 100);
		})();
	</script><script type="text/plain" class="optanon-category-C0002" src="https://www.googletagmanager.com/gtag/js?id=G-RM6F9P86YL"></script><script>window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag("js", new Date());
		gtag("config", "G-RM6F9P86YL", {
			anonymize_ip: true,
			transport_type: "beacon",
		});
	</script><script>document.addEventListener("DOMContentLoaded", function () {
			// propagate reperio features to nav
			const params = new URL(document.location).searchParams;
			const reperioFeatures = params.getAll("reperio_feat");

			if (reperioFeatures.length > 0) {
				setTimeout(() => {
					const links = document.querySelectorAll("a");

					for (const link of links) {
						if (!link.href) {
							continue;
						}

						let isLocalLink = false;

						try {
							const url = new URL(link.href);
							if (url.hostname === window.location.hostname) {
								isLocalLink = true;
							}

							if (isLocalLink) {
								for (const reperioFeature of reperioFeatures) {
									url.searchParams.append(
										"reperio_feat",
										reperioFeature
									);
								}

								link.href = url.toString();
							}
						} catch (_e) {}

						// end propagate reperio features to nav
					}
				}, 1000);
			}
		});

		document.addEventListener("DOMContentLoaded", function () {
			try {
				if (window.location.pathname === "/") {
					let lastFocused = new Date();

					document.onvisibilitychange = () => {
						if (document.visibilityState === "hidden") {
							lastFocused = new Date();
						} else {
							const elapsed =
								(new Date().getTime() - lastFocused.getTime()) /
								1000;

							if (elapsed > 300) {
								window.scrollTo(0, 0);
								window.location.reload();
							}
						}
					};
				}
			} catch (_e) {
				// nsp
			}

			const links = document.querySelectorAll("a");

			for (const link of links) {
				if (!link.href) {
					continue;
				}

				// track events
				link.addEventListener(
					"click",
					function (e) {
						try {
							if (!window.dataLayer) {
								return;
							}

							let data = e.target.dataset.gtrack;

							if (data) {
								data = JSON.parse(data);
								gtag("event", data.event, data.data);
							}

							if (!e.target.href) {
								return;
							}

							if (e.target.href.startsWith("/")) {
								return;
							}

							const url = new URL(e.target.href);
							if (url.hostname === window.location.hostname) {
								return;
							}

							gtag("event", "external_click", {
								event_category: url.hostname,
								event_label: e.target.href,
							});
						} catch (e) {
							console.error(e);
						}
					},
					{
						passive: true,
					}
				);
			}

			const adid = document.getElementById("AdSense");

			if (adid && !adid.clientHeight) {
				const ads = document.querySelectorAll("div.google-adposition");
				for (const ad of ads) {
					ad.style.display = "none";
				}
			}
		});

		document.addEventListener("DOMContentLoaded", async () => {
			setTimeout(async () => {
				let ids = new Set();
				const idsToElements = {};

				[...document.querySelectorAll(".comments-count")].forEach(
					function (item) {
						var id = item.getAttribute("data-id");
						ids.add(id);
						if (!idsToElements[id]) {
							idsToElements[id] = [];
						}

						idsToElements[id].push(item);
					}
				);

				if (ids.length === 0) {
					return;
				}

				ids = [...ids].sort().slice(0, 25);

				const controller = new AbortController();
				const rti = setTimeout(() => controller.abort(), 3500);

				let fetchLiveSessions =
					simplifiedContext.content && simplifiedContext.content.id
						? simplifiedContext.content.id
						: undefined;

				const els = document.querySelectorAll(
					"main div.page-type-content .liveSessions"
				);

				if (els.length === 0) {
					fetchLiveSessions = undefined;
				}

				const res = await fetch(
					`${simplifiedContext.socialAPI}/stats/content`,
					{
						priority: "low",
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							id: ids,
							fetch_live_sessions: fetchLiveSessions,
						}),

						signal: controller.signal,
					}
				);

				clearTimeout(rti);

				if (res.status !== 200) {
					return;
				}

				const { stats } = await res.json();

				for (const stat of stats) {
					if (fetchLiveSessions && stat.live_sessions && els.length) {
						if (stat.entity_id == simplifiedContext.content.id) {
							for (const el of els) {
								el.querySelector(".value").innerText =
									stat.live_sessions;

								el.querySelector("svg").animate(
									[
										{
											stroke: "var(--contextColor)",
										},

										{
											stroke: "#FFF",
										},

										{
											stroke: "var(--contextColor)",
										},
										{
											stroke: "var(--contextColor)",
										},

										{
											stroke: "#FFF",
										},

										{
											stroke: "var(--contextColor)",
										},
									],
									{
										duration: 1250,
										easing: "ease-in-out",
									}
								);
							}
						}
					}

					if (idsToElements[stat.entity_id]) {
						if (stat.comments !== undefined) {
							idsToElements[stat.entity_id].forEach(function (
								item
							) {
								item.innerHTML =
									stat.comments < 100 ? stat.comments : "99+";
								item.style.visibility = "visible";
							});
						}

						delete idsToElements[stat.entity_id];
					}
				}
			}, 50);
		});
	</script><script> window.googletag = window.googletag || {cmd: [function(){  googletag.pubads().setTargeting('domain', 'adevarul.ro'); googletag.pubads().setTargeting('path', '/stiri-locale/bacau'); googletag.pubads().setTargeting('entity_type', 'category'); googletag.pubads().setTargeting('offensive', 'no'); googletag.pubads().setTargeting('category', 'stiri-locale/bacau');   googletag.pubads().disableInitialLoad(); googletag.pubads().enableLazyLoad({   fetchMarginPercent: 500,     renderMarginPercent: 250,   mobileScaling: 2.0  }); googletag.pubads().setCentering(true); googletag.pubads().enableSingleRequest(); googletag.pubads().enableVideoAds(); googletag.enableServices();  }]};  </script><script type="text/plain" class="optanon-category-C0002">
		(function () {
			var _sf_async_config = (window._sf_async_config =
				window._sf_async_config || {});
			_sf_async_config.uid = 65417;
			_sf_async_config.domain = "adevarul.ro";
			_sf_async_config.useCanonical = true;
			_sf_async_config.useCanonicalDomain = true;
			_sf_async_config.sections = "Bacău,",
			_sf_async_config.authors = "";
			function loadChartbeat() {
				var e = document.createElement("script");
				var n = document.getElementsByTagName("script")[0];
				e.type = "text/javascript";
				e.async = true;
				e.src = "//static.chartbeat.com/js/chartbeat.js";
				n.parentNode.insertBefore(e, n);
			}
			loadChartbeat();
		})();
	</script><script>var simplifiedContext = {"domain":"adevarul.ro","type":"category","path":"/stiri-locale/bacau","domain_config":{"default":{"lang":"ro","domain":"adevarul.ro","alternateDomain":"adevarul-ro.adh.reperio.news","friendlyName":"Adevărul","logoURL":"https://adevarul.ro/favicon-144-precomposed.png"},"MISC":{"logo":{"width":320,"height":50}}},"contextColor":"#124f73","contextColorFaded":"rgba(18,79,115,0.05)","category":{"id":228,"slug":"stiri-locale/bacau"},"socialAPI":"https://social.adh.reperio.news","authAPI":"https://auth.adevarul.ro"}</script> <style>html,body{background-color:#fff;padding:0;margin:0;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;font-style:normal;font-weight:400;font-size:18px;scrollbar-gutter:stable}#onetrust-pc-btn-handler{background-color:transparent !important;border:1px solid #474747 !important}#onetrust-reject-all-handler{background-color:transparent !important;border:1px solid #474747 !important}.demand-supply__sm{z-index:999999 !important}main.svelte-1ut1w4n{margin:0px auto;width:100%}main.svelte-1ut1w4n{--containerPadding:0px}main.svelte-1ut1w4n .titleAndHeadings{font-family:"Gelasio", Georgia, Times, "Times New Roman", serif;letter-spacing:0.2px;line-height:1.2em}main.svelte-1ut1w4n .metaFont{font-family:Arial, Helvetica, sans-serif}main.svelte-1ut1w4n .bgEagleAdevarul{background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjExNC4xIDEuNzIgMzMuMzkgMTQuOTgiPjxwYXRoIGZpbGwtb3BhY2l0eT0iMC4xIiBkPSJNMTI1LjExIDEzLjI2Yy4xMy0uMDcuMjguMDUuMzktLjAzLS4wMi4yLS40NS4xLS41LjM4LS4yNy4wMi0uNjItLjA1LS42LS4zNS4xNS0uMDMuNC0uMDUuNTctLjEzIDAgLjA2LjE2LjAxLjE0LjEzbS0uNDQtLjU2Yy0uMDMtLjAxLS4wNyAwLS4yNi4wOS0uMTQuMDctLjI5LjE1LS4zMy4zMS0uMDQuMTctLjEuMjktLjI1LjM4LS4xNC4wOC0uNDMuMTgtLjQzLjMgMCAuMTMuMDIuMzQuMDIuMzR2LjAzYy4xNS0uMi4zNS0uMzYuNTUtLjUxLjE1LjIyLjYuMTMuOC4yMi4wNy0uMDItLjAzLS4wNS4wMy0uMDkuMTMuMDUuMzMuMDMuNDggMC0uMDguMS0uNDIuMjgtLjM3LjE1LS4xOS40Ni0uODkuNjEtLjcyIDEuMDItLjA2LS4xNi4zNS0uMzEuNzItLjc1LjAzLS4wNC4wMy4wNy4wMy4xLjMtLjEuNTItLjQuODctLjM3LjAyLjA4LS4xMi4wOS0uMTMuMTQuMS0uMDMuNDktLjEzLjY4LS4xNC4xIDAgMCAuMDUgMCAuMDguMDguMDIuMS0uMDUuMi0uMDMtLjAyLS4wMy0uMDUtLjAzLS4xLS4wNS4xNy0uMDcuNy4wNS42Mi0uMTIuMzMuMDcuMzUtLjIuNjItLjE4LS4xNy0uMDctLjI1LS4yMi0uMzgtLjMyLjAzLS4xNy4wOC0uMjUuMDctLjUtLjAzLS4xMi0uMTgtLjEtLjEtLjI3LS4wNi0uMDItLjA1LjA3LS4xMi4wNXYtLjE1Yy0uMTIgMC0uMTcuMDgtLjI4LjA4LS4wMy0uMS4wMy0uMS4wMi0uMTgtLjItLjAyLS40NC4wMy0uNDctLjIyLS4yMy4wOC0uNDMtLjAyLS42NyAwLS40NC4xLS43OS43Mi0xLjEuNTltLTEuMzEgMS40Yy4wMS0uMTgtLjA4LS4zOS4wNy0uNDUuMjgtLjE3LjUtLjE3LjYtLjU1LjA3LS4yNS4zMy0uMy41Mi0uNC0uMDEgMCAuMDEgMCAwIDAtMy4wMi0uODQtNi45LTEuNjItOS4zLTMuMjctLjY3LS40NS0xLjE5LTEuMTUtMS4xNS0yLjM0LjE1LS4wMy4xNy4wOC4yOC4xLS4wNS0uMzMtLjExLS43NS0uMDUtMS4xLjQ1LjE3LjU5LjY1Ljc5IDEuMDUuMDUtLjA3LjAzLS4yLjA4LS4yNS41NC4xNS44NC41OCAxLjEyIDEuMDIuNzktLjEzIDEuMi41MyAxLjU3IDEgLjI5LS4yNSAxLjE3LS4yMiAxLjI0LjIyLjAyLjEtLjExLjA3LS4yMS4wNy4zMy4xMiAxLjAzLS4wNSAxLjQ1LjEuMDIuMTUuMTMuMi4yLjI4LjUzLS4wMiAxLjA4LjE3IDEuNTIuMzMuMDMuMDMuMDIuMS4wNS4xNC42OS4xIDEuMjIuMzUgMS45MS40MyAxLjEuNTUgMi42LjY5IDMuODEgMS4xNC4wOC4xLjE3LjEzLjM4LjIgMS43NC0uMDMgMi4zNy0xLjE3IDMuNzEtMS41OS42Ny0uMjUgMS4zLS42IDEuOTQtLjk1Ljc3LS40MyAxLjYtLjcyIDIuNDItMS4wNS44LS4zMyAxLjYyLS42OSAyLjM1LTEuMTIuOC0uNDQgMS4zNS0uOTQgMS44NS0xLjYyLjQ5LS42NS44NC0xLjM3IDEuMzQtMi4xLS4xNSAxLjQyLTEuMDQgMi4zNC0xLjk1IDMuMDkuNTQtLjE3Ljk1LS41NSAxLjM0LS45LjgtLjcgMS41Mi0xLjUgMi4wOS0yLjQ0LjI4LS40Ny40OC0xIC44NS0xLjQyLS4wNCAxLjEyLS41OSAxLjg3LTEuMSAyLjU3LS41NS43NC0xLjI3IDEuMTctMS44MyAxLjguNS0uMTcuOTMtLjQ4IDEuMzctLjc1IDEuMzItLjggMi40OS0xLjg0IDMuNjMtMi44Ni0uMjguNjUtLjg0IDEuMjctMS4zIDEuNjctLjc1LjctMS43MiAxLjE3LTIuNTIgMS44IDEuNjktLjU3IDMuMjYtMS40NyA0LjkxLTIuMTYtMS4xNS45Ny0yLjc3IDEuNS00LjExIDIuMjkgMS4zOC0uMjcgMi43MS0uODIgNC4yNi0xLS4yNS4xMi0uNTcuMjItLjkuMy0uMjIuMDctLjQ3LjEzLS42OC4yMi0uMTguMDUtLjM4LjA1LS40My4yNS41My0uMTIgMS4wNS0uMjIgMS42NC0uMjgtLjMyLjE4LS43Mi4yNS0xLjEuMzctLjM3LjEtLjc3LjIyLTEuMDUuNC41OC4wMiAxLjE0LS4yMiAxLjc3LS4yNS0uMjIuMTItLjQ4LjIyLS43NS4zLS4yNS4xLS41NS4xMi0uNzMuMjguMDMuMTMuMzMtLjAyLjM4LjEtLjI5LjI4LS43NS4zNy0xLjEuNTcgMCAuMTMuMi4wOC4yLjIzLS4yMi4yOC0uNzQuMjgtMS4wNC40OC4wNy4xLjI1LjA3LjI4LjE4LS4yNS4zOC0xLjA1LjIyLTEuMy42LS4yLjAxLS4zLjEzLS40NS4yIDAgLjA4LjA5LjA3LjA3LjE1LS4xOC4xLS40Mi4xNy0uNS4zNy0uMjkgMC0uNDkuMDgtLjYzLjIzLS4zLS4wMy0uMzguMTMtLjYyLjE1LS4xLjAyLjEyLjA4LjAyLjEtLjIuMDUtLjQzLjEtLjQ4LjMyLS4xNS4wOS0uMzMuMDctLjQ3LjEyLS4wNS4wMy0uMS4xLS4xNS4xMy0uMTUuMDctLjMzLjAzLS40NC4xLS4xMi4wOC0uMTIuMjMtLjIzLjMzLS4xNS4xMy0uMjguMDgtLjQ3LjE4LS4xMi4yOC0uMzIuNDMtLjY0LjQ3IDAgLjMyLS4zNS40OC0uNi4yOC0uMDItLjA4LS4wNS0uMTUtLjA1LS4yNy0uMjIuMTItLjAyLjMzLjEuMzktLjMzLjA4LS4yNy41NS0uNzMuNS0uMi4xOC0uNC40OS0uNzUuNDMtLjEzLjI4LS40LjQtLjc1LjQyLjE1LjA3LjMzLjIyLjIyLjQzLS4xMy4wNy0uMy4xLS40Ny4xMi0uMDUuMDgtLjAyLjIyLS4wOC4yNy0uMDcuMDgtLjI0LjA4LS4zNS4xMy4wMy4xMy4xNy4yLjIuMzUuNzMuNDggMS44NS41OCAyLjc3Ljg3LS4yNS4wMi0uNjMtLjA3LS45NS0uMS4zMi4xNS42OC4yNSAxLjEyLjI4LS4wMi4wNS0uMDguMDItLjAzLjA4LjQyLjEyLjg3LjIzIDEuMjkuMzUtLjA3LjEzLS4yNC0uMDItLjM4IDAtLjA3LjAzLjA4LjA4IDAgLjEzLS44NS0uMTItMS42NS0uMjgtMi4yOS0uNjItLjIgMC0uNi4xNy0uODUuMDMtLjA1LjA3LS4xMy4yLS4yMy4wNy4wMi4yNS4wNy42My0uMDIuODQtLjIyLjExLS40Ny0uMDUtLjY1LS4xLS42Ny4yNC0xLjQ1LS4xNy0xLjktLjUyLS44Ny4wMi0yLjAxLjEtMi45OS4wNS0xLjM1LS4wNy0yLjM5LS40NS0zLjE2LTEuMTloLS4yM2MtLjEyLjA1LjE1LjE1IDAgLjE1LS4xMi0uMDUtLjItLjEyLS4zMi0uMTgtLjQzLjA1LS44NS0uMS0xLjE1LjA1LS4xNy4xLS4yLjMyLS4zNS4zMy4wMy0uMi4xMy0uMi4xLS40LS4wMy0uMTUuMS0uNTcuMDItLjUtLjAzLS4zMy0uMjgtLjA4LS40My0uMzUtLjE4LjAyLS4xNS4yMy0uMi4zOC0uMDgtLjA1LS4xMS0uMTQtLjEzLS4yNmwtLjExLS4wMnoiIGNsYXNzPSJzdDAiLz48L3N2Zz4=")}main.svelte-1ut1w4n a{color:#36393d;text-decoration:none}@media only screen and (max-width: 500px){main.svelte-1ut1w4n{width:calc(100% - 2px);--containerPadding:5px}}
.popup.svelte-1azwx5r.svelte-1azwx5r{position:fixed;top:125px;right:0px;z-index:9999;width:100%;text-align:center}.popup.svelte-1azwx5r .container.svelte-1azwx5r{width:330px;height:150px;margin:auto;background-color:#eee;box-shadow:0px 1px 46px 22px rgba(0, 0, 0, 0.4);display:flex;justify-content:center;align-items:center;flex-direction:column;border:1px solid #012d61;padding:20px}.popup.svelte-1azwx5r .container .buttons.svelte-1azwx5r{margin-top:10px;display:flex;justify-content:center}.popup.svelte-1azwx5r .container .buttons button.svelte-1azwx5r{margin-right:10px;border:none;font-weight:bold;background-color:#ccc;cursor:pointer;padding:10px}.popup.svelte-1azwx5r .container .buttons button.svelte-1azwx5r:hover{background-color:#1171c0 !important;color:#fff}.popup.svelte-1azwx5r .container .buttons button.yes.svelte-1azwx5r{background-color:#19a14d;border-radius:2px;color:#fff}
.blockContainer.svelte-b4f4kz{display:flex}.flex-row.svelte-b4f4kz{flex-flow:row;flex-wrap:wrap;justify-content:center}.flex-column.svelte-b4f4kz{flex-flow:column}.flex-grow0.svelte-b4f4kz{flex-grow:0;width:calc(100%-10px)}.flex-grow1.svelte-b4f4kz{flex-grow:1;flex-basis:0}.flex-grow2.svelte-b4f4kz{flex-grow:2;flex-basis:0}.flex-grow3.svelte-b4f4kz{flex-grow:3;flex-basis:0}.blockContainer-co-1.svelte-b4f4kz{width:100%}.blockContainer-co-2.svelte-b4f4kz{width:50%}.blockContainer-co-3.svelte-b4f4kz{width:33%}.blockContainer-co-4.svelte-b4f4kz{width:25%}
.blockContainer{height:100%}.blockContainer-border-bottom{border-bottom:1px solid var(--contextColor)}.blockContainer-border-top{border-bottom:1px solid #d5d5d5}.blockContainer-width-full{width:100%;margin-bottom:10px}.blockContainer-min-width-250px{min-width:250px !important}.blockContainer-min-width-400px{min-width:400px !important}.blockContainer-min-width-600px{min-width:600px !important}.blockContainer-min-width-500px{min-width:500px !important}.blockContainer-max-site-width{max-width:1200px !important;margin:auto auto 10px auto;width:calc(100% - var(--containerPadding) * 2) !important;padding:0 var(--containerPadding) !important}.blockContainer-width-60percent{margin:5px;width:calc(60% - 10px) !important}.blockContainer-width-75percent{margin:5px;width:calc(75% - 10px) !important}.blockContainer-width-70percent{margin:5px;width:calc(70% - 11px) !important;border-right:1px solid #f5f5f5}.blockContainer-width-50percent{margin:5px;width:calc(50% - 11px) !important;border-right:1px solid #f5f5f5}.blockContainer-width-40percent{margin:5px;width:calc(40% - 11px) !important;border-right:1px solid #f5f5f5}.blockContainer-width-30percent{margin:5px;width:calc(30% - 11px) !important;border-right:1px solid #f5f5f5}.blockContainer-width-33percent{margin:5px;width:calc(33% - 11px) !important;border-right:1px solid #f5f5f5}.blockContainer-width-25percent{margin:5px;width:calc(25% - 11px) !important;border-right:1px solid #f5f5f5}.blockContainer-sticky{position:-webkit-sticky;position:sticky;top:0}.blockContainer-fill{height:auto;flex-grow:1}.blockContainer-article-container{border:1px solid var(--contextColor);background-color:#fff;width:calc(70% - 10px) !important;min-width:calc(1200px * 0.6 - 10px);margin-right:auto}.blockContainer:last-child{border-right:none}@media screen and (max-width: 1010px){.blockContainer-article-container{margin:auto;width:calc(100% - 20px) !important;padding:10px !important;border:none !important;min-width:auto}}@media screen and (max-width: 500px){.blockContainer{border-right:none}.blockContainer-article-container{width:calc(100% - var(--containerPadding) * 2) !important;border:none !important;margin:auto !important;padding:var(--containerPadding) !important}}@media only screen and (max-width: 1000px){.blockContainer-breakPoint-1000px{width:calc(100% - var(--containerPadding) * 2) !important;min-width:calc(100% - var(--containerPadding) * 2) !important;position:relative !important;margin-left:auto;margin-right:auto}}@media only screen and (max-width: 800px){.blockContainer-breakPoint-800px{width:calc(100% - var(--containerPadding) * 2) !important;min-width:calc(100% - var(--containerPadding) * 2) !important;position:relative !important;margin-left:auto;margin-right:auto}}@media only screen and (max-width: 600px){.blockContainer-breakPoint-600px{width:calc(100% - var(--containerPadding) * 2) !important;min-width:calc(100% - var(--containerPadding) * 2) !important;position:relative !important;flex-direction:column !important;margin-left:auto;margin-right:auto}}@media only screen and (max-width: 1000px){.blockContainer-width-1000px{position:relative !important}.blockContainer-breakPoint-1000px{width:calc(100% - var(--containerPadding) * 2) !important;min-width:calc(100% - var(--containerPadding) * 2) !important;position:relative !important;margin-left:auto;margin-right:auto}}
.container.svelte-afgpd{padding:20px;background:#ccc;border:1px solid #ddd;display:flex;justify-content:center;align-items:center}
.google-adposition{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='20px' width='50px'><text x='0' y='15' fill='lightblue' font-size='12'>publicitate</text></svg>");background-position:center center;background-repeat:no-repeat}.google-ads-smallStandard{width:100%;min-height:250px;margin-bottom:10px}.google-ads-billboard_small{min-height:135px;display:flex;justify-content:center;align-items:center}.google-ads-billboard{min-height:250px;margin-bottom:10px;display:flex;justify-content:center;align-items:center}.google-ads-in_article{min-height:250px;margin-bottom:10px;display:flex;justify-content:center;align-items:center}.google-ads-in_article_type2{min-height:280px;margin-bottom:10px;display:flex;justify-content:center;align-items:center}@media only screen and (min-width: 980px){.google-ads-in_article_type2{min-height:400px}}.google-ads-in_article_half_page{min-height:600px;margin-bottom:10px}.google-ads-in_comments{min-height:100px;margin-bottom:10px;display:flex;justify-content:center;align-items:center}
.notifications.svelte-937ibe.svelte-937ibe.svelte-937ibe{visibility:var(--visibility, hidden);background-color:#eb0e0e;color:#fff;width:36px;height:20px;font-size:14px;margin-right:5px;margin-left:5px;display:flex;align-items:center;user-select:none;justify-content:center;cursor:pointer;border-radius:5px}.notifications-items.svelte-937ibe.svelte-937ibe.svelte-937ibe{display:flex;flex-direction:column;justify-content:flex-start}.notifications-items.svelte-937ibe .item.svelte-937ibe.svelte-937ibe:nth-child(1){background-color:#f5f5f5}.notifications-items.svelte-937ibe .item.svelte-937ibe.svelte-937ibe:hover{background-color:#eee;transition:background-color 0.2s ease-in-out}.notifications-items.svelte-937ibe .item.svelte-937ibe.svelte-937ibe{cursor:pointer;margin-bottom:5px;padding:5px;font-size:16px;border-bottom:1px solid #ddd;display:flex;flex-direction:row;justify-content:space-between}.notifications-items.svelte-937ibe .item .source_comment.svelte-937ibe.svelte-937ibe{font-style:italic;color:#383737}.notifications-items.svelte-937ibe .item .reply.svelte-937ibe.svelte-937ibe{font-style:italic;color:#2222a0}.notifications-items.svelte-937ibe .item .date.svelte-937ibe.svelte-937ibe{font-weight:bold}.notifications-items.svelte-937ibe .item .remove.svelte-937ibe.svelte-937ibe{background-color:#d76464;color:#fff;width:24px;height:24px;padding:5px;display:flex;justify-content:center;align-items:center}.menu.svelte-937ibe.svelte-937ibe.svelte-937ibe{user-select:none;width:100%;display:none;flex-direction:column;border-bottom:2px solid var(--contextColor);overflow:hidden;background-color:#fff;z-index:4;position:fixed;left:0px;top:0px;font-family:Georgia, "Times New Roman", Times, serif}.menu.svelte-937ibe .headContainer.svelte-937ibe.svelte-937ibe{padding-top:10px;padding-bottom:10px;margin-bottom:5px;border-bottom:1px solid #eee;background-color:#fff;box-shadow:1px -8px 11px -11px rgba(0, 0, 0, 0.35) inset}.menu.svelte-937ibe .headContainer .head.svelte-937ibe.svelte-937ibe{display:flex;justify-content:center;align-items:center;width:100%;margin:-5px auto 5px auto;max-width:1250px;position:relative}.menu.svelte-937ibe .headContainer .head .notifications.svelte-937ibe.svelte-937ibe{display:none}.menu.svelte-937ibe .headContainer .head a.l.svelte-937ibe.svelte-937ibe{display:block;height:30px;width:calc(30px * var(--ratio))}.menu.svelte-937ibe .headContainer .head a.l img.svelte-937ibe.svelte-937ibe{object-fit:contain;width:100%;height:100%}.menu.svelte-937ibe .headContainer .head .date.svelte-937ibe.svelte-937ibe{font-size:11px;font-weight:bold;height:35px;display:flex;justify-content:center;align-items:center;position:absolute;left:20px;top:0px;color:#435762}.menu.svelte-937ibe .headContainer .head form.svelte-937ibe.svelte-937ibe{position:absolute;right:20px;top:0px;height:35px;display:flex;justify-content:center;align-items:center}.menu.svelte-937ibe .headContainer .head form.svelte-937ibe input.svelte-937ibe{width:250px;height:30px;outline-width:0;font-size:14px;padding:5px;border:1px solid #ddd}.menu.svelte-937ibe .headContainer .head form.svelte-937ibe img.svelte-937ibe{margin-left:10px;cursor:pointer}.menu.svelte-937ibe .container.svelte-937ibe.svelte-937ibe{width:100%;margin:auto;max-width:1250px;display:flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;margin-bottom:5px}.menu.svelte-937ibe .container .menuButton.svelte-937ibe.svelte-937ibe{letter-spacing:3px;margin-right:5px;margin-left:5px;font-style:normal;font-weight:500;font-size:16px;color:#fff;min-width:24px;min-height:24px;display:flex;align-items:center;cursor:pointer;opacity:0.9;user-select:none}.menu.svelte-937ibe .container .menuButton .svelte-937ibe.svelte-937ibe:hover{opacity:1}.menu.svelte-937ibe .container .menuButton img.svelte-937ibe.svelte-937ibe{margin-left:auto}.menu.svelte-937ibe .container .menuButtonSearch.svelte-937ibe.svelte-937ibe{display:none}.menu.svelte-937ibe .container .items.svelte-937ibe.svelte-937ibe{display:flex;flex-direction:row;flex-wrap:wrap;overflow:hidden;justify-items:center;align-items:center;width:100%;height:40px}.menu.svelte-937ibe .container .items a.svelte-937ibe.svelte-937ibe{margin:auto;display:flex;justify-content:center;align-items:center;font-style:normal;font-weight:400;font-size:16px;color:#312f2f;padding:0 5px 0 5px;transition:all 350ms;flex-shrink:0;flex-basis:fit-content;height:40px}.menu.svelte-937ibe .container .items a .arrowDown.svelte-937ibe.svelte-937ibe{border:solid #5a5b64;border-width:0 2px 2px 0;display:inline-block;padding:3px;transform:rotate(45deg);-webkit-transform:rotate(45deg);margin-left:5px}@media(hover: none){.menu.svelte-937ibe .container .items a .arrowDown.svelte-937ibe.svelte-937ibe{display:none}}.menu.svelte-937ibe .container .items a.svelte-937ibe.svelte-937ibe:hover{color:var(--color)}.menu.svelte-937ibe .container .items a.selected.svelte-937ibe.svelte-937ibe{color:var(--color)}.menu.svelte-937ibe .container .items a.svelte-937ibe.svelte-937ibe:first-child{margin-left:15px}.menu.svelte-937ibe .container form.svelte-937ibe.svelte-937ibe{display:flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;width:calc(100% - 10px);height:40px;margin-left:10px}.menu.svelte-937ibe .container form.svelte-937ibe input.svelte-937ibe{width:calc(100% - 20px);height:90%;outline-width:0;font-size:16px;padding:5px;border:1px solid #ddd;background-color:#eee}.menu.svelte-937ibe .menuButtonSelected.svelte-937ibe.svelte-937ibe{transform:scale(1.2);transition:transform 0.2s ease-in-out}.menuDropdown.svelte-937ibe.svelte-937ibe.svelte-937ibe{position:fixed;width:400px;padding:10px;min-height:300px;background-color:#fff;display:flex;flex-direction:column;flex-wrap:nowrap;overflow-y:scroll;left:var(--left);top:var(--top);height:calc(100% - var(--top));z-index:9999}.menuDropdown.svelte-937ibe ul.main.svelte-937ibe.svelte-937ibe{padding-bottom:250px}.menuDropdown.svelte-937ibe ul.svelte-937ibe.svelte-937ibe{display:flex;flex-direction:column;flex-wrap:wrap;width:calc(100% - 20px);margin:0;padding:10px}.menuDropdown.svelte-937ibe ul a.svelte-937ibe.svelte-937ibe{height:32px;line-height:32px}.menuDropdown.svelte-937ibe ul li.svelte-937ibe.svelte-937ibe{list-style:none;margin:0;padding:0;display:flex;justify-content:center;font-weight:bold;margin-bottom:5px;width:calc(100% - 10px);flex-direction:column;padding:5px;font-size:16px;border-bottom:1px solid #dfdfdf}.menuDropdown.svelte-937ibe ul li ul.svelte-937ibe.svelte-937ibe{opacity:1;transition:opacity 0.5s;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-items:center}.menuDropdown.svelte-937ibe ul li ul li.svelte-937ibe.svelte-937ibe{display:block;width:auto;min-width:calc(50% - 20px);font-weight:normal;border-bottom:none}.menuDropdown.svelte-937ibe ul li ul li.svelte-937ibe.svelte-937ibe:hover{transition:background-color 350ms}.menuDropdown.svelte-937ibe ul li div.svelte-937ibe.svelte-937ibe{width:100%;display:flex;justify-content:space-between;align-items:center}.menuDropdown.svelte-937ibe ul li div.svelte-937ibe a.svelte-937ibe{width:calc(100% - 50px)}.menuDropdown.svelte-937ibe form.svelte-937ibe.svelte-937ibe{width:100%;padding:10px;display:flex;justify-content:center;align-items:center}.menuDropdown.svelte-937ibe form.svelte-937ibe img.svelte-937ibe{margin-left:10px}.menuDropdown.svelte-937ibe form.svelte-937ibe input.svelte-937ibe{width:80%;height:35px;font-size:16px;padding:5px;outline-width:0;padding:5px;border:1px solid #ddd}.menuOverlay.svelte-937ibe.svelte-937ibe.svelte-937ibe{width:100%;height:100%;position:fixed;left:var(--left);top:var(--top);background-color:#111;opacity:0.85;z-index:9998}@media screen and (min-width: 1024px){.menuDropdown.svelte-937ibe form.svelte-937ibe.svelte-937ibe{display:none}}@media screen and (max-width: 1024px){.menu.svelte-937ibe .head .date.svelte-937ibe.svelte-937ibe{visibility:hidden}.menu.svelte-937ibe .head form.svelte-937ibe.svelte-937ibe{visibility:hidden}.menu.svelte-937ibe .container .items.svelte-937ibe.svelte-937ibe{padding-left:16px}.menuDropdown.svelte-937ibe form.svelte-937ibe.svelte-937ibe{display:flex}}@media screen and (min-width: 500px){.fake.svelte-937ibe.svelte-937ibe.svelte-937ibe{height:103px}.menu.svelte-937ibe .headContainer .head .menuButton.svelte-937ibe.svelte-937ibe{display:none}}@media screen and (max-width: 500px){.fake.svelte-937ibe.svelte-937ibe.svelte-937ibe{height:47px}.menu.svelte-937ibe.svelte-937ibe.svelte-937ibe{background-color:#f5f5f5;border-bottom-width:1px !important}.menu.svelte-937ibe .container.svelte-937ibe.svelte-937ibe{display:none}.menu.svelte-937ibe .headContainer.svelte-937ibe.svelte-937ibe{border-bottom:none !important;margin-bottom:0}.menu.svelte-937ibe .headContainer .head a.l.svelte-937ibe.svelte-937ibe{height:25px !important;width:calc(25px * var(--ratio)) !important}.menu.svelte-937ibe .headContainer .head .menuButtonMenu.svelte-937ibe.svelte-937ibe{position:absolute;right:10px;top:5px}.menu.svelte-937ibe .headContainer .head .menuButtonSearch.svelte-937ibe.svelte-937ibe{display:block;position:absolute;left:10px;top:5px}.menu.svelte-937ibe .headContainer .head .notifications.svelte-937ibe.svelte-937ibe{display:flex;position:absolute;right:50px;top:5px}.menuDropdown.svelte-937ibe.svelte-937ibe.svelte-937ibe{width:calc(100% - 20px);overflow-x:hidden;height:calc(100vh - 60px)}}@media screen and (min-width: 500px){body.no-scroll{height:100vh;overflow-y:hidden}}@media screen and (max-width: 500px){body.no-scroll{height:100vh;overflow-y:hidden;position:fixed}body.no-scroll .menu{position:fixed !important;z-index:10000 !important;margin-left:-1px}}
.overall.svelte-1eecks7.svelte-1eecks7{position:relative;padding-left:30px;padding-right:30px;background-color:var(--contextColorFaded);border-bottom:1px solid #DFDFDF;display:flex;justify-content:center;align-items:center}.overall.svelte-1eecks7 .container.svelte-1eecks7{position:relative;display:flex;justify-content:center;align-items:center;flex-direction:row;flex-wrap:nowrap;flex-flow:row wrap;padding:5px;margin:0px auto 5px auto;width:calc(100% - 10px);height:25px;overflow:hidden}.overall.svelte-1eecks7 .container a.svelte-1eecks7{display:flex;justify-content:center;align-items:center;height:100%;white-space:nowrap;color:var(--color);font-size:14px;margin-right:15px;padding:2px 10px 2px 2px;border-right:1px solid #DFDFDF;background-color:var(--backgroundColor);font-weight:var(--fontWeight)}.overall.svelte-1eecks7 .container a.svelte-1eecks7:last-child{border-right:none}.overall.svelte-1eecks7 .container a.svelte-1eecks7:hover{color:#0b4281;transition:all 0.15s ease-in-out}.overall.svelte-1eecks7 svg.svelte-1eecks7{padding:10px}.overall.svelte-1eecks7 svg.feather-chevron-left.svelte-1eecks7{position:absolute;left:5px;top:-2px;cursor:pointer}.overall.svelte-1eecks7 svg.feather-chevron-right.svelte-1eecks7{position:absolute;right:5px;top:-2px;cursor:pointer}.overall.svelte-1eecks7 svg.svelte-1eecks7:hover{transform:scale(1.25);transition:transform 0.2s ease-in-out}@media(max-width: 500px){.container.svelte-1eecks7.svelte-1eecks7{justify-content:flex-start}.container.svelte-1eecks7 a.svelte-1eecks7{font-size:16px}}
h1.svelte-1ej6nv9,h2.svelte-1ej6nv9,h3.svelte-1ej6nv9{width:100%}.block-Title{flex-grow:0 !important}
h1.svelte-1fkr9fj.svelte-1fkr9fj,h2.svelte-1fkr9fj.svelte-1fkr9fj,h3.svelte-1fkr9fj.svelte-1fkr9fj{font-weight:900;color:var(--color);background-color:var(--bgColor);text-align:center;display:flex;justify-content:center;align-items:center;padding:3px 0 10px 0;border-bottom:2px solid var(--borderColor);width:calc(100% - 13px);margin:5px auto 5px auto}h1.svelte-1fkr9fj a.svelte-1fkr9fj,h2.svelte-1fkr9fj a.svelte-1fkr9fj,h3.svelte-1fkr9fj a.svelte-1fkr9fj{color:inherit;display:flex;justify-content:center;align-items:center}h1.svelte-1fkr9fj.svelte-1fkr9fj{font-size:24px}h2.svelte-1fkr9fj.svelte-1fkr9fj{font-size:24px}h3.svelte-1fkr9fj.svelte-1fkr9fj{font-size:22px}.image.svelte-1fkr9fj.svelte-1fkr9fj{aspect-ratio:1;object-fit:contain;width:32px;margin-left:10px}@media only screen and (max-width: 600px){h1.svelte-1fkr9fj.svelte-1fkr9fj{font-size:24px}h2.svelte-1fkr9fj.svelte-1fkr9fj{font-size:22px}h3.svelte-1fkr9fj.svelte-1fkr9fj{font-size:20px}}.blinking.svelte-1fkr9fj.svelte-1fkr9fj{animation:svelte-1fkr9fj-blinking 1s infinite}@keyframes svelte-1fkr9fj-blinking{0%{opacity:0.5}50%{opacity:0.75}99%{opacity:0.85}100%{opacity:1}}
.adminContainerEmpty.svelte-qkrati.svelte-qkrati{padding:40px}.co-1.svelte-qkrati.svelte-qkrati{max-width:calc(100% - 10px)}.co-2.svelte-qkrati.svelte-qkrati{max-width:calc(50% - 10px)}.co-3.svelte-qkrati.svelte-qkrati{max-width:calc(33% - 10px)}.co-4.svelte-qkrati.svelte-qkrati{max-width:calc(25% - 10px)}.container.svelte-qkrati.svelte-qkrati{display:block;width:auto;color:inherit;margin:5px}.container.svelte-qkrati span.svelte-qkrati{font-weight:bold;display:block}
.container.svelte-1h5vdfy:last-child{border:none}.borderRightSpace.svelte-1h5vdfy{width:calc(100% / var(--parentColumns) - 26px) !important;margin-right:5px !important}.borderRight.svelte-1h5vdfy{border-right:1px solid #dfdfdf;width:calc(100% / var(--parentColumns) - 26px) !important;margin-top:5px !important;--sideSpace:26px}.container.svelte-1h5vdfy:hover .title{color:#12384f;transition:color 0.2s ease-in-out}.container.svelte-1h5vdfy{flex-grow:1;padding:5px;margin:0px;width:calc(100% / var(--parentColumns) - 10px);min-width:140px;display:flex;justify-content:space-between;align-items:center;flex-direction:column;font-size:16px;border-bottom:1px solid #dfdfdf;--sideSpace:10px}.container.svelte-1h5vdfy .row{margin-bottom:10px;width:calc(100% - 5px)}.container.svelte-1h5vdfy .title,.container.svelte-1h5vdfy .summary{--maxLines:5;display:-webkit-box;-webkit-box-orient:vertical;white-space:normal;text-overflow:ellipsis;overflow:hidden;line-clamp:var(--maxLines);-webkit-line-clamp:var(--maxLines);line-height:1.25em}.multiColumnParent.svelte-1h5vdfy a.title{--maxLines:5}.multiColumnParent.svelte-1h5vdfy a.summary{--maxLines:2}@media only screen and (max-width: 500px){.row{margin-bottom:15px !important}.blockContainer-breakPoint-600px>div.container{width:calc(100% - 10px) !important;border-right:none !important}div.multiColumnParent.svelte-1h5vdfy{border-right:1px solid #dfdfdf}.container.svelte-1h5vdfy{padding-top:10px}.borderRight.svelte-1h5vdfy{border-right:none}}@media only screen and (max-width: 600px){.container.svelte-1h5vdfy{border-bottom:1px solid #dfdfdf !important;width:calc(100% - 10px)}}
.fullSized.svelte-o4m35i svg.feather.svelte-o4m35i{width:24px;height:24px}.meta.svelte-o4m35i.svelte-o4m35i{margin-bottom:0px !important;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.meta.svelte-o4m35i svg.feather.svelte-o4m35i{width:12px;height:12px;margin-right:5px}.live.svelte-o4m35i.svelte-o4m35i{margin-right:auto;display:flex;justify-content:flex-start;align-items:center;font-size:12px;font-weight:400;color:var(--contextColor)}.live.svelte-o4m35i svg.svelte-o4m35i{margin-right:5px}.live.svelte-o4m35i svg .pulse-disk.svelte-o4m35i{fill:var(--contextColor)}.live.svelte-o4m35i svg .pulse-circle.svelte-o4m35i,.live.svelte-o4m35i svg .pulse-circle-2.svelte-o4m35i{stroke:var(--contextColor)}.live.svelte-o4m35i svg .pulse-circle.svelte-o4m35i,.live.svelte-o4m35i svg .pulse-circle-2.svelte-o4m35i{transform-origin:center;stroke-width:2;fill:none;transform:translate3d(0, 0, 0)}.live.svelte-o4m35i svg .pulse-disk.svelte-o4m35i{r:3}.live.svelte-o4m35i svg .pulse-circle.svelte-o4m35i{r:2;animation:svelte-o4m35i-pulse 3s cubic-bezier(0.39, 0.54, 0.41, 1.5) infinite}.live.svelte-o4m35i svg .pulse-circle-2.svelte-o4m35i{r:8;animation:svelte-o4m35i-pulse-2 3s cubic-bezier(0.39, 0.54, 0.41, 1.5) infinite}@keyframes svelte-o4m35i-pulse{0%{r:2}50%{r:8;opacity:1}99%{opacity:0}100%{opacity:0;r:8}}@keyframes svelte-o4m35i-pulse-2{0%{opacity:1}40%{opacity:0}49.99%{r:8;opacity:0}50%{r:2;opacity:1}100%{r:8;opacity:1}}@media(max-width: 500px){.meta.svelte-o4m35i.svelte-o4m35i{margin-bottom:10px !important}}
.comments-count.svelte-197rml1.svelte-197rml1{--color:var(--contextColor);user-select:none;visibility:hidden;position:relative;top:0px;height:1.5em;width:3em;display:inline-block;text-align:center;line-height:1.5em;font-weight:normal;font-size:11px;padding:2px 3px 2px 4px;color:#fff;margin-left:5px;background-color:var(--color);border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;text-shadow:0px 1px 1px rgba(1, 1, 1, 0.4)}.comments-count.svelte-197rml1.svelte-197rml1:after{--color:var(--contextColor);content:"";position:absolute;bottom:-4px;left:5px;width:0;height:0;border-left:0px solid transparent;border-right:5px solid transparent;border-top:5px solid var(--color)}@media screen and (max-width: 767px){.comments-count.svelte-197rml1.svelte-197rml1{margin-right:auto;padding:2px;width:2em;color:#111;text-shadow:none;--color:#dfdfdf}.comments-count.svelte-197rml1.svelte-197rml1:after{--color:#ccc}}.row.svelte-197rml1.svelte-197rml1{display:flex;flex-direction:row;align-items:center;justify-content:center;margin-bottom:10px}@media only screen and (max-width: 700px){.row.svelte-197rml1 .comments-count.svelte-197rml1{display:none}}.row.svelte-197rml1 .title.svelte-197rml1{position:relative;width:100%;color:#000;position:relative;line-height:1.25em}.row.svelte-197rml1 .opening.svelte-197rml1{font-size:26px;font-weight:900;text-align:center}.row.svelte-197rml1 .large.svelte-197rml1{font-size:24px;font-weight:800;text-align:center}.row.svelte-197rml1 .medium.svelte-197rml1{font-size:20px;font-weight:600}.row.svelte-197rml1 .small.svelte-197rml1{font-size:17px;font-weight:600}.advert.svelte-197rml1.svelte-197rml1{font-size:12px;margin-right:auto;margin-left:0px;margin-bottom:5px;background-color:#f5f0f0;padding:2px}@media only screen and (max-width: 500px){.advert.svelte-197rml1.svelte-197rml1{font-size:16px}.row.svelte-197rml1 .opening.svelte-197rml1{font-size:24px;font-weight:900;text-align:left}.row.svelte-197rml1 .large.svelte-197rml1{font-size:21px;font-weight:900;text-align:left}.row.svelte-197rml1 .medium.svelte-197rml1{font-size:19px;font-weight:600}.row.svelte-197rml1 .small.svelte-197rml1{font-size:18px;font-weight:600}}
a.row.svelte-1mo6hi5{color:#132f54}.opening.svelte-1mo6hi5{text-align:center}.large.svelte-1mo6hi5{text-align:center}.small.svelte-1mo6hi5{font-size:14px}@media only screen and (max-width: 500px){.small.svelte-1mo6hi5{font-size:17px}.opening.svelte-1mo6hi5{text-align:left}.large.svelte-1mo6hi5{text-align:left}}
.row.svelte-7ep0p0.svelte-7ep0p0{background-position:center center;background-size:100px;background-repeat:no-repeat;background-color:#f5f5f5;display:flex;justify-content:center;align-items:center;aspect-ratio:var(--aspectRatio, auto);overflow:hidden}.row.svelte-7ep0p0 span.svelte-7ep0p0{visibility:hidden}
picture.svelte-h45upf.svelte-h45upf,img.svelte-h45upf.svelte-h45upf{object-fit:contain;max-width:100%;height:auto}div.fill.svelte-h45upf.svelte-h45upf{background-size:cover;width:100% !important;height:100% !important}.fill.svelte-h45upf img.svelte-h45upf{width:100%;height:100%;object-fit:fill}picture.fill.svelte-h45upf.svelte-h45upf{object-fit:fill}img.fill.svelte-h45upf.svelte-h45upf{object-fit:fill}div.contain.svelte-h45upf.svelte-h45upf{background-size:contain;width:100% !important;height:100% !important}.contain.svelte-h45upf img.svelte-h45upf{width:100%;height:100%;object-fit:contain}picture.contain.svelte-h45upf.svelte-h45upf{object-fit:contain}img.contain.svelte-h45upf.svelte-h45upf{object-fit:contain}div.cover.svelte-h45upf.svelte-h45upf{background-size:cover;width:100% !important;height:100% !important}.cover.svelte-h45upf img.svelte-h45upf{width:100%;height:100%;object-fit:cover}picture.cover.svelte-h45upf.svelte-h45upf{object-fit:cover}img.cover.svelte-h45upf.svelte-h45upf{object-fit:cover}.image.svelte-h45upf.svelte-h45upf{background-position:center center;background-repeat:no-repeat;background-size:contain;margin:auto}
.comments-count.svelte-itueop.svelte-itueop{--color:var(--contextColor);user-select:none;visibility:hidden;position:relative;top:0px;height:1.5em;width:3em;display:inline-block;text-align:center;line-height:1.5em;font-weight:normal;font-size:11px;padding:2px 3px 2px 4px;color:#fff;margin-left:5px;background-color:var(--color);border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;text-shadow:0px 1px 1px rgba(1, 1, 1, 0.4)}.comments-count.svelte-itueop.svelte-itueop:after{--color:var(--contextColor);content:"";position:absolute;bottom:-4px;left:5px;width:0;height:0;border-left:0px solid transparent;border-right:5px solid transparent;border-top:5px solid var(--color)}@media screen and (max-width: 767px){.comments-count.svelte-itueop.svelte-itueop{margin-right:auto;padding:2px;width:2em;color:#111;text-shadow:none;--color:#dfdfdf}.comments-count.svelte-itueop.svelte-itueop:after{--color:#ccc}}.category.svelte-itueop.svelte-itueop{justify-content:space-between;display:flex}.category.svelte-itueop .source.svelte-itueop{color:#5e5f63;font-size:12px;border-left:4px solid var(--contextColor);padding:2px 2px 2px 3px;text-transform:uppercase}.category.svelte-itueop .date.svelte-itueop{color:#5e5f63;font-size:12px;padding:5px}.category.svelte-itueop .recent.svelte-itueop{color:#ab2020 !important}@media only screen and (min-width: 700px){.comments-count.svelte-itueop.svelte-itueop{display:none}}@media only screen and (max-width: 600px){.category.svelte-itueop .source.svelte-itueop{padding:5px}}
div.svelte-1f3w406{text-align:center;padding:10px;width:100%;background-color:#ddd;font-size:12px}hr.svelte-1f3w406{border-top:1px solid #111;width:calc(100% - 20px);margin:10px auto 10px auto}
.nav.svelte-6rmnnc a.svelte-6rmnnc{margin-right:10px}.pageNum.svelte-6rmnnc.svelte-6rmnnc{width:100%}.nav.svelte-6rmnnc.svelte-6rmnnc{width:calc(100% - 20px);border-top:1px solid #eee;display:flex;justify-content:center;align-items:center;padding:10px;margin-top:15px}
footer.svelte-1wb4m60.svelte-1wb4m60{margin:auto;display:flex;justify-content:center;align-items:center;flex-flow:column;border-top:1px solid #ccc;background-color:#fff;width:100%;padding-top:20px;padding-bottom:100px;color:black}footer.svelte-1wb4m60 ul.network.svelte-1wb4m60{list-style:none;padding:10px 10px 0 10px;border-top:1px solid #eee;border-bottom:1px solid #eee;font-size:14px;display:flex;justify-content:center;align-items:center;flex-wrap:wrap}footer.svelte-1wb4m60 ul.network li.svelte-1wb4m60:first-child{background-color:inherit;font-style:italic}footer.svelte-1wb4m60 ul.network li.svelte-1wb4m60{display:block;margin-right:10px;margin-bottom:10px;padding:2px;background-color:#f4f4f4}footer.svelte-1wb4m60 #ot-sdk-btn.svelte-1wb4m60{border:none;padding:2px;border-radius:5px;cursor:pointer}footer.svelte-1wb4m60 .subcontainer.svelte-1wb4m60{width:calc(100% - 20px);max-width:1000px;padding:10px;display:flex;justify-content:center;align-items:center;margin-bottom:10px;flex-direction:column}footer.svelte-1wb4m60 .legal.svelte-1wb4m60{padding-top:15px;width:calc(100% - 20px);text-align:center;margin-bottom:10px}footer.svelte-1wb4m60 .legal a.svelte-1wb4m60{font-size:0.85em;margin-right:10px}footer.svelte-1wb4m60 .other.svelte-1wb4m60{width:calc(100% - 20px);display:flex;justify-content:center;align-items:center;padding:5px}footer.svelte-1wb4m60 .copyright.svelte-1wb4m60{font-size:0.75em;width:calc(100% - 20px);text-align:center;padding-top:15px;padding-bottom:15px}footer.svelte-1wb4m60 .reperio.svelte-1wb4m60{width:calc(100% - 20px);text-align:center;padding:10px;opacity:0.5}footer.svelte-1wb4m60 .logo img.svelte-1wb4m60{object-fit:contain;max-width:100%;max-height:100%}@media only screen and (max-width: 700px){footer.svelte-1wb4m60 .subcontainer .logo.svelte-1wb4m60{width:100px;height:55px}}</style> </head> <body> <div id=sapper>


<script>
	var ad = document.createElement('div'); ad.id = 'AdSense';
	ad.className = 'AdSense'; ad.style.display = 'block';
	ad.style.position = 'absolute'; ad.style.top = '-1px'; ad.style.height = '1px'; document.body.appendChild(ad); </script>

<div class="_hydratable" data-props="%7B%7D" data-context="%7B%22parentBlockColumnCount%22%3A%7B%22type%22%3A%22store%2Freadable%22%7D%2C%22parentBlockBackgroundColor%22%3A%7B%22type%22%3A%22store%2Freadable%22%7D%7D" data-component="Push"></div>

<main style="--contextColor: #124f73; --contextColorFaded: rgba(18,79,115,0.05)" class="svelte-1ut1w4n"><div class="view-page page-type-category"><div class="container"><div id="b-main" class="block blockContainer flex-column flex-grow0  blockContainer-co-undefined svelte-b4f4kz" style=""><div id="b-12bd7f87-1948-4f9b-a4b8-d3596540e144" class="block blockContainer flex-column flex-grow0  blockContainer-co-0 svelte-b4f4kz" style=""><div id="b-bfb75a51-100f-48e5-987a-06c81571d7f7" class="block blockContainer flex-column flex-grow0 blockContainer-width-full blockContainer-co-0 svelte-b4f4kz" style=""><div id="gid-ads-ab5dcc94-6ccc-48f8-8d29-72adba582667" data-ad-unit="/424366728/Adevarul2022/Adevarul_Branding" class="google-adposition google-ads-billboard" style="z-index: 6;"><script>
    googletag.cmd.push(function() { 
    googletag.defineSlot(
        '/424366728/Adevarul2022/Adevarul_Branding', 
        ["fluid",[300,250],[728,90],[970,250]], 
        'gid-ads-ab5dcc94-6ccc-48f8-8d29-72adba582667').defineSizeMapping([[[980,0],[[728,90],[970,250],[980,200]]],[[414,0],["fluid",[300,250],[300,100]]],[[0,0],["fluid",[300,250],[300,100]]]])
        .addService(googletag.pubads());
        googletag.display('gid-ads-ab5dcc94-6ccc-48f8-8d29-72adba582667');
     });
  </script></div><div class="_hydratable" data-props="%7B%22id%22%3A%222f4ccd6b-c9af-4b01-b1b6-d0abef843d57%22%2C%22indexInContainer%22%3A%5B1%2C4%5D%2C%22type%22%3A%22TopMenu%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22color%22%3A%22%2354B5D5%22%2C%22name%22%3A%22Home%22%2C%22url%22%3A%22%2F%22%7D%2C%7B%22childs%22%3A%5B%7B%22name%22%3A%22Evenimente%22%2C%22url%22%3A%22%2Fstiri-interne%2Fevenimente%22%7D%2C%7B%22name%22%3A%22Societate%22%2C%22url%22%3A%22%2Fstiri-interne%2Fsocietate%22%7D%2C%7B%22name%22%3A%22S%C4%83n%C4%83tate%22%2C%22url%22%3A%22%2Fstiri-interne%2Fsanatate%22%7D%2C%7B%22name%22%3A%22Educa%C8%9Bie%22%2C%22url%22%3A%22%2Fstiri-interne%2Feducatie%22%7D%2C%7B%22name%22%3A%22Meteo%20%E2%9B%85%22%2C%22url%22%3A%22%2Fstiri-interne%2Fmeteo%22%7D%5D%2C%22color%22%3A%22%2313b8eb%22%2C%22name%22%3A%22%C8%98tiri%20interne%22%2C%22url%22%3A%22%2Fstiri-interne%22%7D%2C%7B%22childs%22%3A%5B%7B%22name%22%3A%22Alba%22%2C%22url%22%3A%22%2Fstiri-locale%2Falba-iulia%22%7D%2C%7B%22name%22%3A%22Arad%22%2C%22url%22%3A%22%2Fstiri-locale%2Farad%22%7D%2C%7B%22name%22%3A%22Arge%C8%99%22%2C%22url%22%3A%22%2Fstiri-locale%2Fpitesti%22%7D%2C%7B%22name%22%3A%22Bac%C4%83u%22%2C%22url%22%3A%22%2Fstiri-locale%2Fbacau%22%7D%2C%7B%22name%22%3A%22Bihor%22%2C%22url%22%3A%22%2Fstiri-locale%2Foradea%22%7D%2C%7B%22name%22%3A%22Bistri%C8%9Ba%20N%C4%83s%C4%83ud%22%2C%22url%22%3A%22%2Fstiri-locale%2Fbistrita%22%7D%2C%7B%22name%22%3A%22Boto%C8%99ani%22%2C%22url%22%3A%22%2Fstiri-locale%2Fbotosani%22%7D%2C%7B%22name%22%3A%22Bra%C8%99ov%22%2C%22url%22%3A%22%2Fstiri-locale%2Fbrasov%22%7D%2C%7B%22name%22%3A%22Br%C4%83ila%22%2C%22url%22%3A%22%2Fstiri-locale%2Fbraila%22%7D%2C%7B%22name%22%3A%22Bucure%C8%99ti%22%2C%22url%22%3A%22%2Fstiri-locale%2Fbucuresti%22%7D%2C%7B%22name%22%3A%22Buz%C4%83u%22%2C%22url%22%3A%22%2Fstiri-locale%2Fbuzau%22%7D%2C%7B%22name%22%3A%22Cara%C8%99%20Severin%22%2C%22url%22%3A%22%2Fstiri-locale%2Fresita%22%7D%2C%7B%22name%22%3A%22Cluj%22%2C%22url%22%3A%22%2Fstiri-locale%2Fcluj-napoca%22%7D%2C%7B%22name%22%3A%22Constan%C8%9Ba%22%2C%22url%22%3A%22%2Fstiri-locale%2Fconstanta%22%7D%2C%7B%22name%22%3A%22C%C4%83l%C4%83ra%C8%99i%22%2C%22url%22%3A%22%2Fstiri-locale%2Fcalarasi%22%7D%2C%7B%22name%22%3A%22Dolj%22%2C%22url%22%3A%22%2Fstiri-locale%2Fcraiova%22%7D%2C%7B%22name%22%3A%22D%C3%A2mbovi%C8%9Ba%22%2C%22url%22%3A%22%2Fstiri-locale%2Ftargoviste%22%7D%2C%7B%22name%22%3A%22Gala%C8%9Bi%22%2C%22url%22%3A%22%2Fstiri-locale%2Fgalati%22%7D%2C%7B%22name%22%3A%22Giurgiu%22%2C%22url%22%3A%22%2Fstiri-locale%2Fgiurgiu%22%7D%2C%7B%22name%22%3A%22Gorj%22%2C%22url%22%3A%22%2Fstiri-locale%2Ftargu-jiu%22%7D%2C%7B%22name%22%3A%22Hunedoara%22%2C%22url%22%3A%22%2Fstiri-locale%2Fhunedoara%22%7D%2C%7B%22name%22%3A%22Ialomi%C8%9Ba%22%2C%22url%22%3A%22%2Fstiri-locale%2Fslobozia%22%7D%2C%7B%22name%22%3A%22Ia%C8%99i%22%2C%22url%22%3A%22%2Fstiri-locale%2Fiasi%22%7D%2C%7B%22name%22%3A%22Maramure%C8%99%22%2C%22url%22%3A%22%2Fstiri-locale%2Fbaia-mare%22%7D%2C%7B%22name%22%3A%22Mehedin%C8%9Bi%22%2C%22url%22%3A%22%2Fstiri-locale%2Fturnu-severin%22%7D%2C%7B%22name%22%3A%22Mure%C8%99%22%2C%22url%22%3A%22%2Fstiri-locale%2Ftargu-mures%22%7D%2C%7B%22name%22%3A%22Neam%C8%9B%22%2C%22url%22%3A%22%2Fstiri-locale%2Fpiatra-neamt%22%7D%2C%7B%22name%22%3A%22Olt%22%2C%22url%22%3A%22%2Fstiri-locale%2Fslatina%22%7D%2C%7B%22name%22%3A%22Prahova%22%2C%22url%22%3A%22%2Fstiri-locale%2Fploiesti%22%7D%2C%7B%22name%22%3A%22Satu%20Mare%22%2C%22url%22%3A%22%2Fstiri-locale%2Fsatu-mare%22%7D%2C%7B%22name%22%3A%22Sibiu%22%2C%22url%22%3A%22%2Fstiri-locale%2Fsibiu%22%7D%2C%7B%22name%22%3A%22Suceava%22%2C%22url%22%3A%22%2Fstiri-locale%2Fsuceava%22%7D%2C%7B%22name%22%3A%22S%C4%83laj%22%2C%22url%22%3A%22%2Fstiri-locale%2Fzalau%2F%22%7D%2C%7B%22name%22%3A%22Teleorman%22%2C%22url%22%3A%22%2Fstiri-locale%2Falexandria%22%7D%2C%7B%22name%22%3A%22Timi%C8%99%22%2C%22url%22%3A%22%2Fstiri-locale%2Ftimisoara%22%7D%2C%7B%22name%22%3A%22Tulcea%22%2C%22url%22%3A%22%2Fstiri-locale%2Ftulcea%22%7D%2C%7B%22name%22%3A%22Vaslui%22%2C%22url%22%3A%22%2Fstiri-locale%2Fvaslui%22%7D%2C%7B%22name%22%3A%22Vrancea%22%2C%22url%22%3A%22%2Fstiri-locale%2Ffocsani%22%7D%2C%7B%22name%22%3A%22V%C3%A2lcea%22%2C%22url%22%3A%22%2Fstiri-locale%2Framnicu-valcea%22%7D%2C%7B%22name%22%3A%22Republica%20Moldova%22%2C%22url%22%3A%22%2Fstiri-externe%2Frepublica-moldova%22%7D%5D%2C%22color%22%3A%22%23124f73%22%2C%22name%22%3A%22%C8%98tiri%20locale%22%2C%22url%22%3A%22%2Fstiri-locale%22%7D%2C%7B%22childs%22%3A%5B%7B%22name%22%3A%22Republica%20Moldova%22%2C%22url%22%3A%22%2Fstiri-externe%2Frepublica-moldova%22%7D%2C%7B%22name%22%3A%22Europa%22%2C%22url%22%3A%22%2Fstiri-externe%2Feuropa%22%7D%2C%7B%22name%22%3A%22Rusia%22%2C%22url%22%3A%22%2Fstiri-externe%2Frusia%22%7D%2C%7B%22name%22%3A%22China%22%2C%22url%22%3A%22%2Fstiri-externe%2Fchina%22%7D%2C%7B%22name%22%3A%22S.U.A.%22%2C%22url%22%3A%22%2Fstiri-externe%2Fsua%22%7D%2C%7B%22name%22%3A%22%C3%8En%20lume%22%2C%22url%22%3A%22%2Fstiri-externe%2Fin-lume%22%7D%2C%7B%22name%22%3A%22Lumea%20v%C4%83zut%C4%83%20din%20Bucure%C8%99ti%22%2C%22url%22%3A%22%2Fstiri-externe%2Flumea-vazuta-din-bucuresti%2F%22%7D%5D%2C%22color%22%3A%22%23056794%22%2C%22name%22%3A%22%C8%98tiri%20externe%22%2C%22url%22%3A%22%2Fstiri-externe%22%7D%2C%7B%22color%22%3A%22%23B37EE3%22%2C%22name%22%3A%22Politic%C4%83%22%2C%22url%22%3A%22%2Fpolitica%22%7D%2C%7B%22color%22%3A%22%23778006%22%2C%22name%22%3A%22Economie%22%2C%22url%22%3A%22%2Feconomie%22%7D%2C%7B%22color%22%3A%22%23109128%22%2C%22name%22%3A%22Sport%22%2C%22url%22%3A%22%2Fsport%22%7D%2C%7B%22childs%22%3A%5B%7B%22name%22%3A%22Via%C8%9B%C4%83%20S%C4%83n%C4%83toas%C4%83%22%2C%22url%22%3A%22%2Fstil-de-viata%2Fviata-sanatoasa%22%7D%2C%7B%22name%22%3A%22Via%C8%9B%C4%83%20de%20cuplu%22%2C%22url%22%3A%22%2Fstil-de-viata%2Fviata-de-cuplu%22%7D%2C%7B%22name%22%3A%22Tehnologie%22%2C%22url%22%3A%22%2Fstil-de-viata%2Ftehnologie%22%7D%2C%7B%22name%22%3A%22C%C4%83l%C4%83torii%22%2C%22url%22%3A%22%2Fstil-de-viata%2Fcalatorii%22%7D%2C%7B%22name%22%3A%22Buc%C4%83t%C4%83rie%22%2C%22url%22%3A%22%2Fstil-de-viata%2Fbucatarie%22%7D%2C%7B%22name%22%3A%22Horoscop%22%2C%22url%22%3A%22%2Fstil-de-viata%2Fhoroscop%22%7D%2C%7B%22name%22%3A%22Cultur%C4%83%22%2C%22url%22%3A%22%2Fstil-de-viata%2Fcultura%22%7D%2C%7B%22name%22%3A%22%C8%98tiin%C8%9B%C4%83%22%2C%22url%22%3A%22%2Fstil-de-viata%2Fstiinta%22%7D%2C%7B%22name%22%3A%22Magazin%22%2C%22url%22%3A%22%2Fstil-de-viata%2Fmagazin%22%7D%2C%7B%22name%22%3A%22Auto%22%2C%22url%22%3A%22%2Fstil-de-viata%2Fauto%22%7D%2C%7B%22color%22%3A%22%231fbdeb%22%2C%22name%22%3A%22Oameni%20ferici%C8%9Bi%2C%20medici%20buni%22%2C%22url%22%3A%22%2Fstil-de-viata%2Foameni-fericiti-medici-buni%22%7D%5D%2C%22color%22%3A%22%23E76328%22%2C%22name%22%3A%22Stil%20de%20via%C8%9B%C4%83%22%2C%22url%22%3A%22%2Fstil-de-viata%22%7D%2C%7B%22childs%22%3A%5B%7B%22name%22%3A%22Vedete%22%2C%22url%22%3A%22%2Fshowbiz%2Fvedete%22%7D%2C%7B%22name%22%3A%22Muzic%C4%83%22%2C%22url%22%3A%22%2Fshowbiz%2Fmuzica%22%7D%2C%7B%22name%22%3A%22Filme%22%2C%22url%22%3A%22%2Fshowbiz%2Ffilm%22%7D%2C%7B%22name%22%3A%22TV%22%2C%22url%22%3A%22%2Fshowbiz%2Ftv%22%7D%5D%2C%22color%22%3A%22%23b38a03%22%2C%22name%22%3A%22Showbiz%22%2C%22url%22%3A%22%2Fshowbiz%22%7D%2C%7B%22color%22%3A%22%234f6773%22%2C%22name%22%3A%22Opinii%22%2C%22url%22%3A%22%2Fblogurile-adevarul%22%7D%2C%7B%22color%22%3A%22%234a77c4%22%2C%22hide_in_default_menu%22%3Atrue%2C%22name%22%3A%22Ultimele%20%C8%99tiri%20%E2%8F%B1%EF%B8%8F%22%2C%22url%22%3A%22%2Fultimele-stiri%22%7D%2C%7B%22color%22%3A%22%23c72121%22%2C%22name%22%3A%22Cele%20mai%20citite%20%F0%9F%94%A5%22%2C%22url%22%3A%22%2Fpopulare%22%7D%2C%7B%22childs%22%3A%5B%7B%22color%22%3A%22%23e63131%22%2C%22name%22%3A%22CELE%20MAI-%20Femeile%20de%20palmares%20vin%20la%20Adev%C4%83rul%20Live%22%2C%22url%22%3A%22%2Ftopic%2Fcele-mai-femeile-de-palmares-vin-la-adevarul-live%22%7D%2C%7B%22name%22%3A%22Business%20%26%20Brand%22%2C%22url%22%3A%22%2Ftopic%2Fbusiness-and-brand-culture%22%7D%5D%2C%22color%22%3A%22%231b6dc9%22%2C%22name%22%3A%22Adev%C4%83rul%20Live%22%2C%22url%22%3A%22%2Fadevarul-live%22%7D%2C%7B%22color%22%3A%22%230f0f0f%22%2C%22hide_in_default_menu%22%3Atrue%2C%22name%22%3A%22Abonamente%22%2C%22url%22%3A%22https%3A%2F%2Fabonamente.adevarul.ro%2F%22%7D%2C%7B%22childs%22%3A%5B%7B%22name%22%3A%22Politic%C4%83%20de%20confiden%C8%9Bialitate%22%2C%22url%22%3A%22%2Fpolitica-confidentialitate%22%7D%2C%7B%22name%22%3A%22Termeni%20%C8%99i%20condi%C8%9Bii%22%2C%22url%22%3A%22%2Ftermeni-si-conditii%22%7D%2C%7B%22name%22%3A%22Politic%C4%83%20Cookies%22%2C%22url%22%3A%22%2Fpolitica-cookies%22%7D%2C%7B%22name%22%3A%22Preferin%C8%9Be%20confiden%C8%9Bialitate%22%2C%22url%22%3A%22javascript%3AOptanon.ToggleInfoDisplay()%3B%22%7D%5D%2C%22color%22%3A%22%23050000%22%2C%22hide_in_default_menu%22%3Atrue%2C%22name%22%3A%22Contact%22%2C%22url%22%3A%22mailto%3Acontact%40adevarul.ro%22%7D%2C%7B%22name%22%3A%22Adev%C4%83rul%20de%20weekend%22%2C%22url%22%3A%22https%3A%2F%2Faccount.paydemic.com%2Fserial%2Farchive%2FX4K5JNVPSBEZTO5ESSCVDMX2KM%22%7D%2C%7B%22name%22%3A%22Anun%C8%9Buri%20%C3%AEn%20ziar%22%2C%22url%22%3A%22https%3A%2F%2Fcontent.paydemic.com%2Fprinted%2FN4LE7M6PYZHEDAFMHOCHDANAGI%22%7D%2C%7B%22childs%22%3A%5B%7B%22hide_in_default_menu%22%3Atrue%2C%22name%22%3A%22Actualitate.net%22%2C%22url%22%3A%22https%3A%2F%2Factualitate.net%22%7D%5D%2C%22hide_in_default_menu%22%3Atrue%2C%22name%22%3A%22Parteneri%22%2C%22url%22%3A%22%23%22%7D%5D%7D%2C%22is_mobile%22%3Afalse%7D" data-context="%7B%22parentBlockColumnCount%22%3A%7B%22value%22%3A0%2C%22type%22%3A%22store%2Freadable%22%7D%2C%22parentBlockBackgroundColor%22%3A%7B%22type%22%3A%22store%2Freadable%22%7D%7D" data-component="TopMenu"><div class="fake svelte-937ibe"></div>

		<div class="menu svelte-937ibe" style=""><div class="headContainer svelte-937ibe"><div class="head svelte-937ibe"><img class="menuButton menuButtonSearch svelte-937ibe" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23111' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-search'%3e%3ccircle cx='11' cy='11' r='8'%3e%3c/circle%3e%3cline x1='21' y1='21' x2='16.65' y2='16.65'%3e%3c/line%3e%3c/svg%3e" alt="search" width="24" height="24">

					<div class="date svelte-937ibe">Vineri,

						9

						Februarie

						2024</div>

					<a href="/" title="Adevărul" class="l svelte-937ibe"><img src="/logo.svg" alt="Adevărul" width="320" height="50" class="svelte-937ibe"></a>

					<form action="/search" method="get" class="svelte-937ibe"><input type="search" name="q" placeholder="Caută în adevarul.ro" required class="svelte-937ibe">

						<img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23111' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-search'%3e%3ccircle cx='11' cy='11' r='8'%3e%3c/circle%3e%3cline x1='21' y1='21' x2='16.65' y2='16.65'%3e%3c/line%3e%3c/svg%3e" alt="search" width="24" height="24" class="svelte-937ibe"></form>

					<div class="notifications svelte-937ibe" style="--visibility: hidden"></div>

					<img class="menuButton menuButtonMenu svelte-937ibe" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23111' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-menu'%3e%3cline x1='3' y1='12' x2='21' y2='12'%3e%3c/line%3e%3cline x1='3' y1='6' x2='21' y2='6'%3e%3c/line%3e%3cline x1='3' y1='18' x2='21' y2='18'%3e%3c/line%3e%3c/svg%3e" alt="menu" width="24" height="24"></div></div>

			<div class="container svelte-937ibe" style="--ratio: 6.4;"><div class="items svelte-937ibe"><a href="/" style="--color:rgba(84,181,213,0.95);" class="svelte-937ibe">Home
										</a><a href="/stiri-interne" style="--color:rgba(19,184,235,0.95);" class="svelte-937ibe">Știri interne
										<i class="arrowDown svelte-937ibe"></i>
										</a><a href="/stiri-locale" style="--color:rgba(18,79,115,0.95);" class="svelte-937ibe selected">Știri locale
										<i class="arrowDown svelte-937ibe"></i>
										</a><a href="/stiri-externe" style="--color:rgba(5,103,148,0.95);" class="svelte-937ibe">Știri externe
										<i class="arrowDown svelte-937ibe"></i>
										</a><a href="/politica" style="--color:rgba(179,126,227,0.95);" class="svelte-937ibe">Politică
										</a><a href="/economie" style="--color:rgba(119,128,6,0.95);" class="svelte-937ibe">Economie
										</a><a href="/sport" style="--color:rgba(16,145,40,0.95);" class="svelte-937ibe">Sport
										</a><a href="/stil-de-viata" style="--color:rgba(231,99,40,0.95);" class="svelte-937ibe">Stil de viață
										<i class="arrowDown svelte-937ibe"></i>
										</a><a href="/showbiz" style="--color:rgba(179,138,3,0.95);" class="svelte-937ibe">Showbiz
										<i class="arrowDown svelte-937ibe"></i>
										</a><a href="/blogurile-adevarul" style="--color:rgba(79,103,115,0.95);" class="svelte-937ibe">Opinii
										</a><a href="/populare" style="--color:rgba(199,33,33,0.95);" class="svelte-937ibe">Cele mai citite 🔥
										</a><a href="/adevarul-live" style="--color:rgba(27,109,201,0.95);" class="svelte-937ibe">Adevărul Live
										<i class="arrowDown svelte-937ibe"></i>
										</a><a href="https://account.paydemic.com/serial/archive/X4K5JNVPSBEZTO5ESSCVDMX2KM" style="--color:rgba(11,54,169,0.95);" class="svelte-937ibe">Adevărul de weekend
										</a><a href="https://content.paydemic.com/printed/N4LE7M6PYZHEDAFMHOCHDANAGI" style="--color:rgba(11,54,169,0.95);" class="svelte-937ibe">Anunțuri în ziar
										</a></div>

				<div class="notifications svelte-937ibe" style="--visibility: hidden"></div>

				<div class="menuButton menuButtonSearch svelte-937ibe"><img class="menuButton svelte-937ibe" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23111' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-search'%3e%3ccircle cx='11' cy='11' r='8'%3e%3c/circle%3e%3cline x1='21' y1='21' x2='16.65' y2='16.65'%3e%3c/line%3e%3c/svg%3e" alt="search" width="24" height="24"></div>

				<div class="menuButton svelte-937ibe"><img class="menuButton svelte-937ibe" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23111' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-menu'%3e%3cline x1='3' y1='12' x2='21' y2='12'%3e%3c/line%3e%3cline x1='3' y1='6' x2='21' y2='6'%3e%3c/line%3e%3cline x1='3' y1='18' x2='21' y2='18'%3e%3c/line%3e%3c/svg%3e" alt="menu" width="24" height="24"></div></div></div>

		</div>

<div class="_hydratable" data-props="%7B%22id%22%3A%22ac358e57-b825-43fa-bf41-eb9ff75267ee%22%2C%22indexInContainer%22%3A%5B2%2C4%5D%2C%22type%22%3A%22Menu%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22href%22%3A%22%2Fultimele-stiri%22%2C%22rel%22%3A%22%22%2C%22style%22%3A%7B%22backgroundColor%22%3A%22%23FFFF00%22%2C%22color%22%3A%22%23000000%22%2C%22fontWeight%22%3A%22bold%22%7D%2C%22target%22%3A%22%22%2C%22text%22%3A%22Ultimele%20%C8%99tiri%20%E2%8F%B1%EF%B8%8F%22%7D%2C%7B%22href%22%3A%22https%3A%2F%2Fadevarul.ro%2Ftopic%2Fromania-la-euro-2024%22%2C%22rel%22%3A%22%22%2C%22style%22%3A%7B%22fontWeight%22%3A%22%22%7D%2C%22target%22%3A%22%22%2C%22text%22%3A%22Rom%C3%A2nia%20la%20EURO%202024%22%7D%2C%7B%22href%22%3A%22https%3A%2F%2Fadevarul.ro%2Ftag%2Frazboi%2520in%2520ucraina%22%2C%22rel%22%3A%22%22%2C%22style%22%3A%7B%22fontWeight%22%3A%22%22%7D%2C%22target%22%3A%22%22%2C%22text%22%3A%22R%C4%83zboi%20%C3%AEn%20Ucraina%22%7D%2C%7B%22href%22%3A%22https%3A%2F%2Fadevarul.ro%2Ftag%2Frazboi%2520in%2520israel%22%2C%22rel%22%3A%22%22%2C%22style%22%3A%7B%22fontWeight%22%3A%22%22%7D%2C%22target%22%3A%22%22%2C%22text%22%3A%22R%C4%83zboi%20%C3%AEn%20Israel%22%7D%2C%7B%22href%22%3A%22%2Fistoria-zilei%22%2C%22rel%22%3A%22%22%2C%22style%22%3A%7B%22fontWeight%22%3A%22%22%7D%2C%22target%22%3A%22%22%2C%22text%22%3A%22Istoria%20zilei%22%7D%5D%7D%7D" data-context="%7B%22parentBlockColumnCount%22%3A%7B%22value%22%3A0%2C%22type%22%3A%22store%2Freadable%22%7D%2C%22parentBlockBackgroundColor%22%3A%7B%22type%22%3A%22store%2Freadable%22%7D%7D" data-component="Menu"><div class="overall svelte-1eecks7"><div class="container svelte-1eecks7"><a href="/ultimele-stiri" target="" style="--backgroundColor: #FFFF00; --color: #000000; --fontWeight: bold;" class="svelte-1eecks7">Ultimele știri ⏱️</a><a href="https://adevarul.ro/topic/romania-la-euro-2024" target="" style="--backgroundColor: inherit; --color: #111; --fontWeight: normal;" class="svelte-1eecks7">România la EURO 2024</a><a href="https://adevarul.ro/tag/razboi%20in%20ucraina" target="" style="--backgroundColor: inherit; --color: #111; --fontWeight: normal;" class="svelte-1eecks7">Război în Ucraina</a><a href="https://adevarul.ro/tag/razboi%20in%20israel" target="" style="--backgroundColor: inherit; --color: #111; --fontWeight: normal;" class="svelte-1eecks7">Război în Israel</a><a href="/istoria-zilei" target="" style="--backgroundColor: inherit; --color: #111; --fontWeight: normal;" class="svelte-1eecks7">Istoria zilei</a></div>

		

		</div></div></div><div id="b-75daa57a-8654-4400-931d-59a467b07bc6" class="block blockContainer flex-column flex-grow0 blockContainer-max-site-width blockContainer-co-0 svelte-b4f4kz" style="">

<h1 id="07eb3bb4-5284-4d61-b507-e0829f99e2d6" data-type="Title" class="titleAndHeadings svelte-1fkr9fj" style="--color: #111; --borderColor: #4d4d4d; --bgColor: none; "><a href="/stiri-locale/bacau" class="inside svelte-1fkr9fj">Bacău
                </a></h1><div id="b-489c850e-0c7f-40e3-a26d-3094036072a2" class="block blockContainer flex-row flex-grow0  blockContainer-co-0 svelte-b4f4kz" style=""><div id="b-20033598-48d8-4f06-bafa-ce8b89ccc1c8" class="block blockContainer flex-column flex-grow0 blockContainer-width-70percent blockContainer-breakPoint-1000px blockContainer-co-2 svelte-b4f4kz" style="">
	<div class="container svelte-1h5vdfy" style="--parentColumns:1; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);"><div class="row meta svelte-o4m35i">

    

    
</div>

            
            
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/cine-este-comandorul-ciprian-marin-noul-comandant-2337935.html" class="title titleAndHeadings svelte-197rml1    small">Cine este comandorul Ciprian Marin, noul comandant al Bazei 95 Aeriană din Bacău FOTO</a>

    <a href="https://adevarul.ro/stiri-locale/bacau/cine-este-comandorul-ciprian-marin-noul-comandant-2337935.html#comments" class="comments-count metaFont svelte-197rml1" title="Vezi comentariile" data-id="2337935">0</a></div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/cine-este-comandorul-ciprian-marin-noul-comandant-2337935.html" class="row summary svelte-1mo6hi5   small">Luni, 5 februarie, la Baza 95 Aeriană „Erou căpitan aviator Alexandru Șerbănescu” Bacău a avut loc ceremonia de predare-primire a comenzii către noul comandant al bazei militare
</a>
            
            

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/cine-este-comandorul-ciprian-marin-noul-comandant-2337935.html" style="--aspectRatio: 1.8181818181818181;"><picture loading="lazy" class="cover svelte-h45upf" width="800" height="440" alt="comandorul Ciprian Marin, comandantul Bazei 95 Aeriană (2) jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-a/a8976f2e-9c9b-4cdc-bc55-1e6dadc28e0c/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D800%26h%3D440%26r%3Dcover%26f%3Dwebp 800w" media="(min-width: 800px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-a/a8976f2e-9c9b-4cdc-bc55-1e6dadc28e0c/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D330%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-a/a8976f2e-9c9b-4cdc-bc55-1e6dadc28e0c/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D275%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-a/a8976f2e-9c9b-4cdc-bc55-1e6dadc28e0c/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D800%26h%3D440%26r%3Dcover%26f%3Djpeg 800w" media="(min-width: 800px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-a/a8976f2e-9c9b-4cdc-bc55-1e6dadc28e0c/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D330%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-a/a8976f2e-9c9b-4cdc-bc55-1e6dadc28e0c/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D275%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-a/a8976f2e-9c9b-4cdc-bc55-1e6dadc28e0c/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D275%26r%3Dcover%26f%3Dwebp" alt="comandorul Ciprian Marin, comandantul Bazei 95 Aeriană (2) jpg" width="800" height="440" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    <a href="https://adevarul.ro/stiri-locale/bacau/cine-este-comandorul-ciprian-marin-noul-comandant-2337935.html#comments" class="comments-count metaFont svelte-itueop" title="Vezi comentariile" data-id="2337935">0</a>

    
</div>
            </div></div><div id="b-d87f89c7-8c86-4698-a7cb-032a82226072" class="block blockContainer flex-row flex-grow0 blockContainer-width-30percent blockContainer-breakPoint-1000px blockContainer-fill blockContainer-co-2 svelte-b4f4kz" style="">
	<div class="container svelte-1h5vdfy" style="--parentColumns:1; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);"><div class="row meta svelte-o4m35i">

    

    
</div>

            
            
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/statuia-nimanui-vasile-roaita-inca-trage-sirena-2338118.html" class="title titleAndHeadings svelte-197rml1    small">Statuia nimănui. Vasile Roaită încă „trage sirena“ într-un parc părăsit al Bacăului FOTO</a>

    <a href="https://adevarul.ro/stiri-locale/bacau/statuia-nimanui-vasile-roaita-inca-trage-sirena-2338118.html#comments" class="comments-count metaFont svelte-197rml1" title="Vezi comentariile" data-id="2338118">0</a></div>


            
            
            
            

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/statuia-nimanui-vasile-roaita-inca-trage-sirena-2338118.html" style="--aspectRatio: 1.6666666666666667;"><picture loading="lazy" class="cover svelte-h45upf" width="400" height="240" alt="Statuia lui Vasile Roaită din Parcul CFR FOTO MA (3) jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-6/69b1d187-ddc8-424d-937a-936d304a626d/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D400%26h%3D240%26r%3Dcover%26f%3Dwebp 400w" media="(min-width: 400px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-6/69b1d187-ddc8-424d-937a-936d304a626d/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D300%26h%3D180%26r%3Dcover%26f%3Dwebp 300w" media="(min-width: 300px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-6/69b1d187-ddc8-424d-937a-936d304a626d/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D400%26h%3D240%26r%3Dcover%26f%3Djpeg 400w" media="(min-width: 400px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-6/69b1d187-ddc8-424d-937a-936d304a626d/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D300%26h%3D180%26r%3Dcover%26f%3Djpeg 300w" media="(min-width: 300px)"><img src="https://cdn.adh.reperio.news/image-6/69b1d187-ddc8-424d-937a-936d304a626d/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D300%26h%3D180%26r%3Dcover%26f%3Dwebp" alt="Statuia lui Vasile Roaită din Parcul CFR FOTO MA (3) jpg" width="400" height="240" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/statuia-nimanui-vasile-roaita-inca-trage-sirena-2338118.html" class="row summary svelte-1mo6hi5   small">Se împlinesc 91 de ani de la greva de la Atelierele CFR Grivița din 16 februarie 1933, unde forțele de ordine au ucis șapte persoane în timpul confruntărilor cu muncitorii feroviari nemulțumiți de salarii. 
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    <a href="https://adevarul.ro/stiri-locale/bacau/statuia-nimanui-vasile-roaita-inca-trage-sirena-2338118.html#comments" class="comments-count metaFont svelte-itueop" title="Vezi comentariile" data-id="2338118">0</a>

    
</div>
            </div><div id="gid-ads-095f9cc8-61d6-44aa-abae-ffa2acc0dacf" data-ad-unit="/424366728/Adevarul2022/300x250_Desktop1" class="google-adposition google-ads-smallStandard" style=""><script>
    googletag.cmd.push(function() { 
    googletag.defineSlot(
        '/424366728/Adevarul2022/300x250_Desktop1', 
        ["fluid",[300,250]], 
        'gid-ads-095f9cc8-61d6-44aa-abae-ffa2acc0dacf').defineSizeMapping([[[0,0],["fluid",[300,250]]]])
        .addService(googletag.pubads());
        googletag.display('gid-ads-095f9cc8-61d6-44aa-abae-ffa2acc0dacf');
     });
  </script></div></div></div><hr class="svelte-1f3w406"><div id="b-e76134f0-0548-4ac3-a49a-d33fd854bee9" class="block blockContainer flex-column flex-grow0  blockContainer-co-0 svelte-b4f4kz" style="">

<h2 id="cb4a8c54-c572-4117-b38d-e60c445cba2e" data-type="Title" class="titleAndHeadings svelte-1fkr9fj" style="--color: #111; --borderColor: #4d4d4d; --bgColor: none; "><span class="inside">Ultimele știri din Bacău</span>

            </h2><div id="b-d3739cf7-fa12-475d-bccc-856eb0f20b50" class="block blockContainer flex-row flex-grow0  blockContainer-co-0 svelte-b4f4kz" style=""><div class="pageNum svelte-6rmnnc"></div>


	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/condamnari-in-dosarul-dna-de-abuz-in-serviciu-de-2337483.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="Taxe și Impozite locale Bacău FOTO MA jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-8/808e1348-0394-4f0c-be25-63daeda1844e/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-8/808e1348-0394-4f0c-be25-63daeda1844e/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-8/808e1348-0394-4f0c-be25-63daeda1844e/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-8/808e1348-0394-4f0c-be25-63daeda1844e/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-8/808e1348-0394-4f0c-be25-63daeda1844e/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-8/808e1348-0394-4f0c-be25-63daeda1844e/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-8/808e1348-0394-4f0c-be25-63daeda1844e/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="Taxe și Impozite locale Bacău FOTO MA jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/condamnari-in-dosarul-dna-de-abuz-in-serviciu-de-2337483.html" class="title titleAndHeadings svelte-197rml1    small">Condamnări în dosarul DNA de abuz în serviciu de la Taxe și Impozite Locale Bacău</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/condamnari-in-dosarul-dna-de-abuz-in-serviciu-de-2337483.html" class="row summary svelte-1mo6hi5   small">Zilele trecute, Tribunalul Bacău i-a condamnat pe Tiberiu-George Ciobanu, Dana Mihaela Bălan, Emanuel Mihalachi și  Mircea Oniga la pedepse cu suspendare în dosarul în care au fost acuzați de abuz în serviciu și fals. 
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">05 feb. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/strada-vitala-pentru-platforma-industrala-din-2336998.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="Strada Industriilor Onesti jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-a/a0b4a223-50cb-4c83-899a-1275a36fea35/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-a/a0b4a223-50cb-4c83-899a-1275a36fea35/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-a/a0b4a223-50cb-4c83-899a-1275a36fea35/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-a/a0b4a223-50cb-4c83-899a-1275a36fea35/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-a/a0b4a223-50cb-4c83-899a-1275a36fea35/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-a/a0b4a223-50cb-4c83-899a-1275a36fea35/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-a/a0b4a223-50cb-4c83-899a-1275a36fea35/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="Strada Industriilor Onesti jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/strada-vitala-pentru-platforma-industrala-din-2336998.html" class="title titleAndHeadings svelte-197rml1    small">Stradă vitală pentru platforma industrală din Onești, modernizată printr-o investiție de patru milioane de euro</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/strada-vitala-pentru-platforma-industrala-din-2336998.html" class="row summary svelte-1mo6hi5   small">Infrastructura rutieră care deservește platforma petrochimică de la Onești a fost modernizată recent, ceea ce va reprezenta un impuls pentru agenții economici din zonă. 
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">03 feb. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/chirurug-roman-renumit-acuzat-ca-lua-mita-de-la-2336070.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="Mouhannad Toron FOTO bacau net jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-2/2b1fa753-112a-4d7b-8944-0559ccb904bc/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-2/2b1fa753-112a-4d7b-8944-0559ccb904bc/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-2/2b1fa753-112a-4d7b-8944-0559ccb904bc/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-2/2b1fa753-112a-4d7b-8944-0559ccb904bc/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-2/2b1fa753-112a-4d7b-8944-0559ccb904bc/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-2/2b1fa753-112a-4d7b-8944-0559ccb904bc/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-2/2b1fa753-112a-4d7b-8944-0559ccb904bc/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="Mouhannad Toron FOTO bacau net jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/chirurug-roman-renumit-acuzat-ca-lua-mita-de-la-2336070.html" class="title titleAndHeadings svelte-197rml1    small">Chirurg român renumit, acuzat că lua mită de la săraci. A condus Spitalul din Buhuși</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/chirurug-roman-renumit-acuzat-ca-lua-mita-de-la-2336070.html" class="row summary svelte-1mo6hi5   small">Mouhannad Toron, şeful secţiei de Chirurgie de la Spitalul din Buhuşi și fost director al unității spitalicești va fi judecat pentru 13 fapte de luare de mită. 
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">31 ian. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/noi-destinatii-de-pe-aeroportul-george-enescu-2336025.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="Dan Air FOTO Aeroportul International George Enescu Bacau (4) jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-d/dc3d2aa4-4d42-42e9-858c-76f7c184bae5/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-d/dc3d2aa4-4d42-42e9-858c-76f7c184bae5/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-d/dc3d2aa4-4d42-42e9-858c-76f7c184bae5/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-d/dc3d2aa4-4d42-42e9-858c-76f7c184bae5/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-d/dc3d2aa4-4d42-42e9-858c-76f7c184bae5/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-d/dc3d2aa4-4d42-42e9-858c-76f7c184bae5/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-d/dc3d2aa4-4d42-42e9-858c-76f7c184bae5/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="Dan Air FOTO Aeroportul International George Enescu Bacau (4) jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/noi-destinatii-de-pe-aeroportul-george-enescu-2336025.html" class="title titleAndHeadings svelte-197rml1    small">Noi destinații de pe Aeroportul „George Enescu” din Bacău. Zboruri către Madrid, Bologna și Milano</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/noi-destinatii-de-pe-aeroportul-george-enescu-2336025.html" class="row summary svelte-1mo6hi5   small">Dan Air a anunțat zilele acestea programul de vară al companiei, care în acest an va opera zboruri din Bacău spre 11 destinații de importante din Europa, de două, trei sau chiar patru ori pe săptămână. 
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">31 ian. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/tranzactie-controversata-cu-42-de-hectare-de-2335750.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="Tranzația cu terenuri i a nemulțumit pe săteni jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-3/3a3af9b1-c40a-47f4-b799-ad642d89d3dd/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-3/3a3af9b1-c40a-47f4-b799-ad642d89d3dd/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-3/3a3af9b1-c40a-47f4-b799-ad642d89d3dd/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-3/3a3af9b1-c40a-47f4-b799-ad642d89d3dd/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-3/3a3af9b1-c40a-47f4-b799-ad642d89d3dd/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-3/3a3af9b1-c40a-47f4-b799-ad642d89d3dd/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-3/3a3af9b1-c40a-47f4-b799-ad642d89d3dd/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="Tranzația cu terenuri i a nemulțumit pe săteni jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/tranzactie-controversata-cu-42-de-hectare-de-2335750.html" class="title titleAndHeadings svelte-197rml1    small">Tranzacție controversată, cu 42 de hectare de teren, într-o comună de lângă Bacău</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/tranzactie-controversata-cu-42-de-hectare-de-2335750.html" class="row summary svelte-1mo6hi5   small">Două terenuri, de 24 și 18 hectare, care sunt deja concesionate unor societăți ce extrag agregate minerale, urmează să fie vândute acestora dacă proiectul va avea votul consilierilor locali
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">30 ian. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/proiect-unic-in-tara-inspirat-din-danemarca-2335421.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="Athletic Park BACĂU"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-0/0aa0f05b-2e1b-42b9-ae34-7368e7a4b01a/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-0/0aa0f05b-2e1b-42b9-ae34-7368e7a4b01a/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-0/0aa0f05b-2e1b-42b9-ae34-7368e7a4b01a/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-0/0aa0f05b-2e1b-42b9-ae34-7368e7a4b01a/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-0/0aa0f05b-2e1b-42b9-ae34-7368e7a4b01a/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-0/0aa0f05b-2e1b-42b9-ae34-7368e7a4b01a/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-0/0aa0f05b-2e1b-42b9-ae34-7368e7a4b01a/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="Athletic Park BACĂU" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/proiect-unic-in-tara-inspirat-din-danemarca-2335421.html" class="title titleAndHeadings svelte-197rml1    small">Proiect unic în țară, inspirat din Danemarca, realizat într-un oraș din România. Ce are special Athletic Park FOTO</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/proiect-unic-in-tara-inspirat-din-danemarca-2335421.html" class="row summary svelte-1mo6hi5   small">Pe strada General Stefan Gușe, nr. 2, din municipiul Bacău, vizavi de Penitenciarul Bacău se va construi un parc unic în România, asemănător cu un parc din Odense, Danemarca. 
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">30 ian. 2024</span>
</div>
            </div>
	<div id="gid-ads-ad-cl-position-5" data-ad-unit="/424366728/Adevarul2022/Adevarul_Bilboard1" class="google-adposition google-ads-billboard" style=""><script>
    googletag.cmd.push(function() { 
    googletag.defineSlot(
        '/424366728/Adevarul2022/Adevarul_Bilboard1', 
        ["fluid",[300,250],[728,90],[970,250]], 
        'gid-ads-ad-cl-position-5').defineSizeMapping([[[980,0],[[728,90],[970,250],[980,200]]],[[414,0],["fluid",[300,250],[300,100]]],[[0,0],["fluid",[300,250],[300,100]]]])
        .addService(googletag.pubads());
        googletag.display('gid-ads-ad-cl-position-5');
     });
  </script></div>
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/doi-tineri-au-murit-dupa-ce-masina-in-care-se-2334922.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="accident tren ISU bacau png"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-d/df94018b-993e-4b9e-87b1-5ad2c3f6dd15/index.png?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-d/df94018b-993e-4b9e-87b1-5ad2c3f6dd15/index.png?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-d/df94018b-993e-4b9e-87b1-5ad2c3f6dd15/index.png?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/png" srcset="https://cdn.adh.reperio.news/image-d/df94018b-993e-4b9e-87b1-5ad2c3f6dd15/index.png?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dpng 600w" media="(min-width: 600px)"><source type="image/png" srcset="https://cdn.adh.reperio.news/image-d/df94018b-993e-4b9e-87b1-5ad2c3f6dd15/index.png?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dpng 555w" media="(min-width: 555px)"><source type="image/png" srcset="https://cdn.adh.reperio.news/image-d/df94018b-993e-4b9e-87b1-5ad2c3f6dd15/index.png?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dpng 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-d/df94018b-993e-4b9e-87b1-5ad2c3f6dd15/index.png?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="accident tren ISU bacau png" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/doi-tineri-au-murit-dupa-ce-masina-in-care-se-2334922.html" class="title titleAndHeadings svelte-197rml1    small">Doi tineri au murit după ce mașina în care se aflau a fost spulberată de un tren, în Bacău</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/doi-tineri-au-murit-dupa-ce-masina-in-care-se-2334922.html" class="row summary svelte-1mo6hi5   small">Un autoturism a fost spulberat de un tren la o trece de nivel cu calea ferată, în localitatea Dofteana, din județul Bacău. Doi tineri au rămas încarcerați. În ciuda eforturilor de salvare, ambii au murit.
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">26 ian. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/manifestare-de-proportii-dedicata-unirii-2333957.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="Hora Unirii Miron Costin (4) jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-6/67fbfb5c-bf50-4917-8d8e-b5530d8e62a5/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-6/67fbfb5c-bf50-4917-8d8e-b5530d8e62a5/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-6/67fbfb5c-bf50-4917-8d8e-b5530d8e62a5/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-6/67fbfb5c-bf50-4917-8d8e-b5530d8e62a5/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-6/67fbfb5c-bf50-4917-8d8e-b5530d8e62a5/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-6/67fbfb5c-bf50-4917-8d8e-b5530d8e62a5/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-6/67fbfb5c-bf50-4917-8d8e-b5530d8e62a5/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="Hora Unirii Miron Costin (4) jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/manifestare-de-proportii-dedicata-unirii-2333957.html" class="title titleAndHeadings svelte-197rml1    small">Manifestare de proporții dedicată Unirii Principatelor Române, la Bacău. Sute de copii, prinși în horă FOTO</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/manifestare-de-proportii-dedicata-unirii-2333957.html" class="row summary svelte-1mo6hi5   small">În timp de la Școala ”Miron Costin”, sute de elevi au fost scoși de profesori să danseze ”Hora Unirii”, la un colegiu, zeci de elevi care au întârziat la ore, nu au mai putut intra în curtea liceului
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">23 ian. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/ruta-ecumenica-in-judetul-bacau-care-sunt-2333932.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="Biserica din Borzești jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-5/5952c20a-c2e8-45fe-beed-59f352746ef1/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-5/5952c20a-c2e8-45fe-beed-59f352746ef1/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-5/5952c20a-c2e8-45fe-beed-59f352746ef1/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-5/5952c20a-c2e8-45fe-beed-59f352746ef1/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-5/5952c20a-c2e8-45fe-beed-59f352746ef1/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-5/5952c20a-c2e8-45fe-beed-59f352746ef1/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-5/5952c20a-c2e8-45fe-beed-59f352746ef1/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="Biserica din Borzești jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/ruta-ecumenica-in-judetul-bacau-care-sunt-2333932.html" class="title titleAndHeadings svelte-197rml1    small">Rută ecumenică în județul Bacău. Care sunt mănăstirile și bisericile pe care nu trebuie să le ratezi FOTO</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/ruta-ecumenica-in-judetul-bacau-care-sunt-2333932.html" class="row summary svelte-1mo6hi5   small">După județele Suceava și Neamț, care dețin unele dintre cele mai frumoase mănăstiri din Moldova, și județul Bacău oferă credincioșilor care practică turismul religios o ofertă bogată în acest sens

</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">23 ian. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/mesterul-dorel-loveste-din-nou-la-bacau-se-surpa-2333641.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="Parcare Tipografilor Bacău (2) webp"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-5/5d3351cc-d926-4cd9-b6f4-825b8a9baf1d/index.webp?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-5/5d3351cc-d926-4cd9-b6f4-825b8a9baf1d/index.webp?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-5/5d3351cc-d926-4cd9-b6f4-825b8a9baf1d/index.webp?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-5/5d3351cc-d926-4cd9-b6f4-825b8a9baf1d/index.webp?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="Parcare Tipografilor Bacău (2) webp" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/mesterul-dorel-loveste-din-nou-la-bacau-se-surpa-2333641.html" class="title titleAndHeadings svelte-197rml1    small">Meșterul Dorel lovește din nou la Bacău. Se surpă cea mai scumpă parcare din oraș, proaspăt construită FOTO</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/mesterul-dorel-loveste-din-nou-la-bacau-se-surpa-2333641.html" class="row summary svelte-1mo6hi5   small">Primăria Bacău a realizat, în urmă cu jumătate de an, o parcare cu 96 de locuri, care a costat o sumă exorbitantă, de peste 5 milioane de lei. Construcția, făcută de mântuială, deja se surpă
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">22 ian. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/un-elev-de-la-liceul-tehnologic-anghel-saligny-2332997.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="streang spanzurat 4f543ff2f2 jpeg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-9/9b22ebbb-0c9e-44bf-940f-e3001c476336/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-9/9b22ebbb-0c9e-44bf-940f-e3001c476336/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-9/9b22ebbb-0c9e-44bf-940f-e3001c476336/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-9/9b22ebbb-0c9e-44bf-940f-e3001c476336/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-9/9b22ebbb-0c9e-44bf-940f-e3001c476336/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-9/9b22ebbb-0c9e-44bf-940f-e3001c476336/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-9/9b22ebbb-0c9e-44bf-940f-e3001c476336/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="streang spanzurat 4f543ff2f2 jpeg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/un-elev-de-la-liceul-tehnologic-anghel-saligny-2332997.html" class="title titleAndHeadings svelte-197rml1    small">Un elev de la Liceul Tehnologic „Anghel Saligny“ s-a spânzurat în toaletă. El suferise o decepție sentimentală </a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/un-elev-de-la-liceul-tehnologic-anghel-saligny-2332997.html" class="row summary svelte-1mo6hi5   small">Inspectoratul Școlar Județean Bacău anunță că vineri dimineață, un elev de la Liceul Tehnolog Anghel Saligny s-a spânzurat în toaletă.
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">19 ian. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/sapte-accidente-pe-partia-nemira-in-primele-zile-2332699.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="Accidente pe Pârtia Nemira FOTO Salvamont Bacău (3) jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-4/4af6535b-08e4-4000-b5fe-34ebb054d4db/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-4/4af6535b-08e4-4000-b5fe-34ebb054d4db/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-4/4af6535b-08e4-4000-b5fe-34ebb054d4db/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-4/4af6535b-08e4-4000-b5fe-34ebb054d4db/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-4/4af6535b-08e4-4000-b5fe-34ebb054d4db/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-4/4af6535b-08e4-4000-b5fe-34ebb054d4db/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-4/4af6535b-08e4-4000-b5fe-34ebb054d4db/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="Accidente pe Pârtia Nemira FOTO Salvamont Bacău (3) jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/sapte-accidente-pe-partia-nemira-in-primele-zile-2332699.html" class="title titleAndHeadings svelte-197rml1    small">Șapte accidente pe Pârtia Nemira, în primele zile. Ce recomandă salvamontiștii schiorilor pentru a evita spitalul</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/sapte-accidente-pe-partia-nemira-in-primele-zile-2332699.html" class="row summary svelte-1mo6hi5   small">Pârtia Nemira a fost deschisă duminică, 14 ianuarie, 2024, și doar în primele patru zile au avut loc accidente grave iar în unele cazuri schiorii s-au ales cu membrele sau coloana fracturată. 
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">18 ian. 2024</span>
</div>
            </div>
	<div id="gid-ads-ad-cl-position-11" data-ad-unit="/424366728/Adevarul2022/Adevarul_Bilboard2" class="google-adposition google-ads-billboard" style=""><script>
    googletag.cmd.push(function() { 
    googletag.defineSlot(
        '/424366728/Adevarul2022/Adevarul_Bilboard2', 
        ["fluid",[300,250],[728,90],[970,250]], 
        'gid-ads-ad-cl-position-11').defineSizeMapping([[[980,0],[[728,90],[970,250],[980,200]]],[[414,0],["fluid",[300,250],[300,100]]],[[0,0],["fluid",[300,250],[300,100]]]])
        .addService(googletag.pubads());
        googletag.display('gid-ads-ad-cl-position-11');
     });
  </script></div>
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/campion-european-la-lupte-greco-romane-cercetat-2332455.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="Eusebiu Diaconu (stânga) FOTO Desteptarea jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-2/267aaa5d-6343-4943-9cde-3c13a2fa31c9/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-2/267aaa5d-6343-4943-9cde-3c13a2fa31c9/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-2/267aaa5d-6343-4943-9cde-3c13a2fa31c9/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-2/267aaa5d-6343-4943-9cde-3c13a2fa31c9/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-2/267aaa5d-6343-4943-9cde-3c13a2fa31c9/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-2/267aaa5d-6343-4943-9cde-3c13a2fa31c9/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-2/267aaa5d-6343-4943-9cde-3c13a2fa31c9/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="Eusebiu Diaconu (stânga) FOTO Desteptarea jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/campion-european-la-lupte-greco-romane-cercetat-2332455.html" class="title titleAndHeadings svelte-197rml1    small">Campion european la lupte greco-romane, cercetat de DNA. Cât de influent a ajuns în administrație liderul grupării</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/campion-european-la-lupte-greco-romane-cercetat-2332455.html" class="row summary svelte-1mo6hi5   small">Fostul campion european la lupte greco-romane, Eusebiu Diaconu, apare în fruntea unui dosar instrumentat de DNA Bacău, suspect pentru constituirea unui grup infracțional organizat, dar și alte fapte de corupție
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">17 ian. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/functionari-publici-intr-o-retea-de-fraudare-a-2332388.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="primaria bacau"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-9/96bae016-4f94-48ef-98f2-522237182013/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-9/96bae016-4f94-48ef-98f2-522237182013/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-9/96bae016-4f94-48ef-98f2-522237182013/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-9/96bae016-4f94-48ef-98f2-522237182013/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-9/96bae016-4f94-48ef-98f2-522237182013/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-9/96bae016-4f94-48ef-98f2-522237182013/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-9/96bae016-4f94-48ef-98f2-522237182013/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="primaria bacau" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/functionari-publici-intr-o-retea-de-fraudare-a-2332388.html" class="title titleAndHeadings svelte-197rml1    small">Funcționari publici, într-o rețea de fraudare a statului. DNA a constatat un prejudiciu de peste 1 milion de lei</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/functionari-publici-intr-o-retea-de-fraudare-a-2332388.html" class="row summary svelte-1mo6hi5   small">Procurorii din cadrul Direcției Naționale Anticorupție - Bacău au dispus efectuarea urmăririi penale față de 15 persoane, funcționari publici, dar și persoane fizice, fără calitate specială. 
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">17 ian. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/aeroportul-din-bacau-dotat-cu-sistem-de-aterizare-2332100.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="Sistem ILS categoria a 2 a FOTO Aeroportul Bacău jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-6/6762060d-3f6d-47ac-9710-0e5af65517c2/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-6/6762060d-3f6d-47ac-9710-0e5af65517c2/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-6/6762060d-3f6d-47ac-9710-0e5af65517c2/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-6/6762060d-3f6d-47ac-9710-0e5af65517c2/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-6/6762060d-3f6d-47ac-9710-0e5af65517c2/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-6/6762060d-3f6d-47ac-9710-0e5af65517c2/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-6/6762060d-3f6d-47ac-9710-0e5af65517c2/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="Sistem ILS categoria a 2 a FOTO Aeroportul Bacău jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/aeroportul-din-bacau-dotat-cu-sistem-de-aterizare-2332100.html" class="title titleAndHeadings svelte-197rml1    small">Aeroportul din Bacău, dotat cu sistem de aterizare instrumentală. Ce performanțe are</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/aeroportul-din-bacau-dotat-cu-sistem-de-aterizare-2332100.html" class="row summary svelte-1mo6hi5   small">Pentru creșterea siguranței zborurilor, pe Aeroportul Internațional George Enescu din Bacău este instalat un sistem de aterizare instrumentală (ILS) de ultimă generație, din categoria a doua. 
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">16 ian. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/toxiinfectie-alimentara-la-o-gradinita-din-bacau-2332062.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="gradinita jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-1/1750c6c1-3a05-4248-a8d7-f956523c6d8d/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-1/1750c6c1-3a05-4248-a8d7-f956523c6d8d/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-1/1750c6c1-3a05-4248-a8d7-f956523c6d8d/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-1/1750c6c1-3a05-4248-a8d7-f956523c6d8d/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-1/1750c6c1-3a05-4248-a8d7-f956523c6d8d/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-1/1750c6c1-3a05-4248-a8d7-f956523c6d8d/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-1/1750c6c1-3a05-4248-a8d7-f956523c6d8d/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="gradinita jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/toxiinfectie-alimentara-la-o-gradinita-din-bacau-2332062.html" class="title titleAndHeadings svelte-197rml1    small">Toxiinfecție alimentară la o grădiniță din Bacău. Prefectul a dispus controale în tot județul</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/toxiinfectie-alimentara-la-o-gradinita-din-bacau-2332062.html" class="row summary svelte-1mo6hi5   small">Toate grădinițele și creșele din județul Bacău, dar și firmele de catering care furnizează alimente pentru acestea vor fi verificate, pentru că vineri, 12 ianuarie 2024, mai mulți preșcolari au ajuns la medic cu toxiinfecție alimentară.
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">16 ian. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/perchezitii-dna-in-municipiul-bacau-sunt-vizate-2331971.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="mascati jandarmi jpeg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-a/a3732973-cbc1-4667-af27-7068fe55fe4a/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-a/a3732973-cbc1-4667-af27-7068fe55fe4a/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-a/a3732973-cbc1-4667-af27-7068fe55fe4a/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-a/a3732973-cbc1-4667-af27-7068fe55fe4a/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-a/a3732973-cbc1-4667-af27-7068fe55fe4a/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-a/a3732973-cbc1-4667-af27-7068fe55fe4a/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-a/a3732973-cbc1-4667-af27-7068fe55fe4a/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="mascati jandarmi jpeg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/perchezitii-dna-in-municipiul-bacau-sunt-vizate-2331971.html" class="title titleAndHeadings svelte-197rml1    small">UPDATE Percheziții DNA în municipiul Bacău. Sunt vizate infracțiuni de corupție la instituții din subordinea Primăriei</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/perchezitii-dna-in-municipiul-bacau-sunt-vizate-2331971.html" class="row summary svelte-1mo6hi5   small">Procurorii din cadrul Direcției Naționale Anticorupție Bacău efectuează marți, 16 ianuarie 2024, șase percheziții domiciliare la sediul unor instituții publice, dar și la domiciliul a trei funcționari. 
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">16 ian. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/de-ziua-culturii-nationale-si-a-lui-mihai-2331797.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="capul lui Decebal a ajuns la Starea Civila Bacău jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-7/705b4edb-2992-4648-a20d-11f4b65a2d59/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-7/705b4edb-2992-4648-a20d-11f4b65a2d59/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-7/705b4edb-2992-4648-a20d-11f4b65a2d59/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-7/705b4edb-2992-4648-a20d-11f4b65a2d59/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-7/705b4edb-2992-4648-a20d-11f4b65a2d59/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-7/705b4edb-2992-4648-a20d-11f4b65a2d59/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-7/705b4edb-2992-4648-a20d-11f4b65a2d59/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="capul lui Decebal a ajuns la Starea Civila Bacău jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/de-ziua-culturii-nationale-si-a-lui-mihai-2331797.html" class="title titleAndHeadings svelte-197rml1    small">De Ziua Culturii Naționale și a lui Mihai Eminescu, edilii din Bacău au pus capul lui Decebal la Starea Civilă. „Model de bărbăție și curaj“</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/de-ziua-culturii-nationale-si-a-lui-mihai-2331797.html" class="row summary svelte-1mo6hi5   small">La Bacău, edilii au gândit un mod inedit de a serba Ziua Culturii Naționale, marcând nașterea poetului național Mihai Eminescu prin amplasarea capului lui Decebal la Starea Civilă. 
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">15 ian. 2024</span>
</div>
            </div>
	<div id="gid-ads-ad-cl-position-17" data-ad-unit="/424366728/Adevarul2022/Adevarul_Bilboard3" class="google-adposition google-ads-billboard" style=""><script>
    googletag.cmd.push(function() { 
    googletag.defineSlot(
        '/424366728/Adevarul2022/Adevarul_Bilboard3', 
        ["fluid",[300,250],[728,90],[970,250]], 
        'gid-ads-ad-cl-position-17').defineSizeMapping([[[980,0],[[728,90],[970,250],[980,200]]],[[414,0],["fluid",[300,250],[300,100]]],[[0,0],["fluid",[300,250],[300,100]]]])
        .addService(googletag.pubads());
        googletag.display('gid-ads-ad-cl-position-17');
     });
  </script></div>
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/deszapezire-pe-model-dorel-la-bacau-zapada-2330711.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="Deszăpezire Bacău jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-1/1b122778-0ca8-4d7b-9142-25945e34ff93/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26c%3D0%252C0.031%252C1%252C0.358%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-1/1b122778-0ca8-4d7b-9142-25945e34ff93/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26c%3D0%252C0.031%252C1%252C0.358%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-1/1b122778-0ca8-4d7b-9142-25945e34ff93/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26c%3D0%252C0.031%252C1%252C0.358%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-1/1b122778-0ca8-4d7b-9142-25945e34ff93/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26c%3D0%252C0.031%252C1%252C0.358%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-1/1b122778-0ca8-4d7b-9142-25945e34ff93/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26c%3D0%252C0.031%252C1%252C0.358%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-1/1b122778-0ca8-4d7b-9142-25945e34ff93/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26c%3D0%252C0.031%252C1%252C0.358%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-1/1b122778-0ca8-4d7b-9142-25945e34ff93/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26c%3D0%252C0.031%252C1%252C0.358%26f%3Dwebp" alt="Deszăpezire Bacău jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/deszapezire-pe-model-dorel-la-bacau-zapada-2330711.html" class="title titleAndHeadings svelte-197rml1    small">Deszăpezire pe model Dorel la Bacău. Zăpada curățată de pe pistele de bicicletă a fost aruncată pe trotuare FOTO</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/deszapezire-pe-model-dorel-la-bacau-zapada-2330711.html" class="row summary svelte-1mo6hi5   small">Pe anumite străzi, angajații Primăriei Bacău au curățat doar pista de biciclete, unde rar trece cineva, iar zăpada a fost aruncată pe trotuarul pietonilor, care fac eforturi să nu se dezechilibreze. 
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">11 ian. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/a-fost-sefuita-cutia-milei-la-o-biserica-2330668.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="Biserica Sf Dumitru din Bacău a fost jefuită FOTOeprb ro jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-d/da89796a-0a3b-4704-9e39-06520add4929/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-d/da89796a-0a3b-4704-9e39-06520add4929/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-d/da89796a-0a3b-4704-9e39-06520add4929/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-d/da89796a-0a3b-4704-9e39-06520add4929/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-d/da89796a-0a3b-4704-9e39-06520add4929/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-d/da89796a-0a3b-4704-9e39-06520add4929/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-d/da89796a-0a3b-4704-9e39-06520add4929/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="Biserica Sf Dumitru din Bacău a fost jefuită FOTOeprb ro jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/a-fost-sefuita-cutia-milei-la-o-biserica-2330668.html" class="title titleAndHeadings svelte-197rml1    small">A fost jefuită cutia milei la o biserică importantă din Bacău. Hoții au plecat cu peste 30.000 de lei</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/a-fost-sefuita-cutia-milei-la-o-biserica-2330668.html" class="row summary svelte-1mo6hi5   small">Biserica „Sfântul Dumitru” din Bacău, a doua ca mărime din oraș după Catedrala „Înălțarea Domnului”, a fost jefuită recent de mai mulți tineri, care au pus ochii pe cutia milei. 
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">11 ian. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/coloana-auto-de-protest-a-transportatorilor-si-2330425.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="protest fermieri FOTO Ionut Color jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-3/30d06e7e-eb78-482e-9346-9f8d6698765c/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-3/30d06e7e-eb78-482e-9346-9f8d6698765c/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-3/30d06e7e-eb78-482e-9346-9f8d6698765c/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-3/30d06e7e-eb78-482e-9346-9f8d6698765c/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-3/30d06e7e-eb78-482e-9346-9f8d6698765c/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-3/30d06e7e-eb78-482e-9346-9f8d6698765c/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-3/30d06e7e-eb78-482e-9346-9f8d6698765c/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="protest fermieri FOTO Ionut Color jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/coloana-auto-de-protest-a-transportatorilor-si-2330425.html" class="title titleAndHeadings svelte-197rml1    small">Coloana auto de protest a transportatorilor și fermierilor a traversat Bacăul. Ce revendicări au FOTO </a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/coloana-auto-de-protest-a-transportatorilor-si-2330425.html" class="row summary svelte-1mo6hi5   small">Astăzi, protestatarii nemulțumiți, în coloane de camioane și tractoare, au tranzitat județul Bacău, în drum spre București, încă de la primele ore ale dimineții. 
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">10 ian. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/taxa-de-salubrizare-scade-la-bacau-a-fost-2330397.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="pubele sortare deseuri reciclabile foto adevarul"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-2/27361cd6-da67-442f-bfa0-70133506bf36/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-2/27361cd6-da67-442f-bfa0-70133506bf36/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-2/27361cd6-da67-442f-bfa0-70133506bf36/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-2/27361cd6-da67-442f-bfa0-70133506bf36/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-2/27361cd6-da67-442f-bfa0-70133506bf36/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-2/27361cd6-da67-442f-bfa0-70133506bf36/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-2/27361cd6-da67-442f-bfa0-70133506bf36/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="pubele sortare deseuri reciclabile foto adevarul" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/taxa-de-salubrizare-scade-la-bacau-a-fost-2330397.html" class="title titleAndHeadings svelte-197rml1    small">Taxa de salubrizare scade la Bacău. A fost eliminată taxa unică pe locuință dorită de primar</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/taxa-de-salubrizare-scade-la-bacau-a-fost-2330397.html" class="row summary svelte-1mo6hi5   small">Consiliul Local Bacău a votat astăzi taxa de salubritate pentru 2024, opunându-se propunerii primarului de a impune o taxă unică pe locuință și nu în funcție de numărul de persoane care produc deșeuri. 
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">10 ian. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/masina-implicata-in-accidentul-soldat-cu-moartea-a-2330222.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="accident E85 1 jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-5/507aec83-a575-454a-8826-81b28716f282/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-5/507aec83-a575-454a-8826-81b28716f282/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-5/507aec83-a575-454a-8826-81b28716f282/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-5/507aec83-a575-454a-8826-81b28716f282/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-5/507aec83-a575-454a-8826-81b28716f282/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-5/507aec83-a575-454a-8826-81b28716f282/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-5/507aec83-a575-454a-8826-81b28716f282/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="accident E85 1 jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/masina-implicata-in-accidentul-soldat-cu-moartea-a-2330222.html" class="title titleAndHeadings svelte-197rml1    small">Mașina implicată în accidentul soldat cu moartea a doi copii avea anvelope de vară</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/masina-implicata-in-accidentul-soldat-cu-moartea-a-2330222.html" class="row summary svelte-1mo6hi5   small">Autoturismul implicat în accidentul produs drumul european E85, în localitatea Răcăciuni, soldat cu moartea a doi copii şi rănirea mai multor persoane, avea anvelope de vară, susţin reprezentanţii Inspectoratului de Poliţie Judeţean (IPJ) Bacău, potrivit Agerpres.
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">09 ian. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/doi-copii-morti-intr-un-tragic-accident-in-2330206.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="Accident Bacau IPJ Bacau jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-8/8e6a1312-0e16-45e8-8a35-dc2cd5e866d3/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-8/8e6a1312-0e16-45e8-8a35-dc2cd5e866d3/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-8/8e6a1312-0e16-45e8-8a35-dc2cd5e866d3/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-8/8e6a1312-0e16-45e8-8a35-dc2cd5e866d3/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-8/8e6a1312-0e16-45e8-8a35-dc2cd5e866d3/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-8/8e6a1312-0e16-45e8-8a35-dc2cd5e866d3/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-8/8e6a1312-0e16-45e8-8a35-dc2cd5e866d3/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="Accident Bacau IPJ Bacau jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/doi-copii-morti-intr-un-tragic-accident-in-2330206.html" class="title titleAndHeadings svelte-197rml1    small">Doi copii, morți într-un tragic accident, în județul Bacău. 6 persoane au ajuns la spital FOTO</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/doi-copii-morti-intr-un-tragic-accident-in-2330206.html" class="row summary svelte-1mo6hi5   small">Un accident tragic a avut loc, marți, pe Drumul European 85, în județul Bacău, soldat cu moartea a doi copii și rănirea altor șase persoane. Mașina în care se aflau cei opt pasageri, patru adulți și patru copii, a derapat, după ce conducătorul auto a pierdut controlul volanului.
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">09 ian. 2024</span>
</div>
            </div>
	<div id="gid-ads-ad-cl-position-23" data-ad-unit="/424366728/Adevarul2022/Adevarul_Bilboard4" class="google-adposition google-ads-billboard" style=""><script>
    googletag.cmd.push(function() { 
    googletag.defineSlot(
        '/424366728/Adevarul2022/Adevarul_Bilboard4', 
        ["fluid",[300,250],[728,90],[970,250]], 
        'gid-ads-ad-cl-position-23').defineSizeMapping([[[980,0],[[728,90],[970,250],[980,200]]],[[414,0],["fluid",[300,250],[300,100]]],[[0,0],["fluid",[300,250],[300,100]]]])
        .addService(googletag.pubads());
        googletag.display('gid-ads-ad-cl-position-23');
     });
  </script></div>
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/viscolul-si-gerul-au-facut-prapad-in-judetul-2329967.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="În Bacău se circulă în condiții de iarnă jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-0/05e6d99b-34eb-4129-ab4c-fbc24e61f982/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-0/05e6d99b-34eb-4129-ab4c-fbc24e61f982/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-0/05e6d99b-34eb-4129-ab4c-fbc24e61f982/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-0/05e6d99b-34eb-4129-ab4c-fbc24e61f982/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-0/05e6d99b-34eb-4129-ab4c-fbc24e61f982/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-0/05e6d99b-34eb-4129-ab4c-fbc24e61f982/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-0/05e6d99b-34eb-4129-ab4c-fbc24e61f982/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="În Bacău se circulă în condiții de iarnă jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/viscolul-si-gerul-au-facut-prapad-in-judetul-2329967.html" class="title titleAndHeadings svelte-197rml1    small">14 școli au fost închise în județul Bacău în urma viscolului și a temperaturilor foarte scăzute</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/viscolul-si-gerul-au-facut-prapad-in-judetul-2329967.html" class="row summary svelte-1mo6hi5   small">Chiar dacă s-a intervenit pe drumurile naționale și județene, viscolul a creat probleme autorităților locale din nordul, sudul și estul județului Bacău, unde viscolul a făcut troiene
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">09 ian. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/scandalurile-in-care-a-fost-implicat-ips-ioachim-2329167.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="ioachim bacauanul"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-6/6c47235c-e2ce-44b5-96a4-fb900ba437e1/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-6/6c47235c-e2ce-44b5-96a4-fb900ba437e1/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-6/6c47235c-e2ce-44b5-96a4-fb900ba437e1/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-6/6c47235c-e2ce-44b5-96a4-fb900ba437e1/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-6/6c47235c-e2ce-44b5-96a4-fb900ba437e1/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-6/6c47235c-e2ce-44b5-96a4-fb900ba437e1/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-6/6c47235c-e2ce-44b5-96a4-fb900ba437e1/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="ioachim bacauanul" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/scandalurile-in-care-a-fost-implicat-ips-ioachim-2329167.html" class="title titleAndHeadings svelte-197rml1    small">Scandalurile în care a fost implicat IPS Ioachim Băcăuanul, în nouă ani de la întronizarea ca arhiepiscop</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/scandalurile-in-care-a-fost-implicat-ips-ioachim-2329167.html" class="row summary svelte-1mo6hi5   small">Dacă în alți ani, aniversarea întronizării lui Ioachim Băcăuanul era serbată cu mare fast, cu mulți invitați cu stare, anul acesta, ”Înaltul” a sărbătorit reușita mai modest, la catedrala de la Roman
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">05 ian. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/soarta-celor-mai-mari-lacuri-din-bacau-motivele-2328666.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="Lacul Răcăciuni FOTO Mircea Albu (3) jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-8/82a5cd52-e105-4f49-a110-fa93965e53c2/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-8/82a5cd52-e105-4f49-a110-fa93965e53c2/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-8/82a5cd52-e105-4f49-a110-fa93965e53c2/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-8/82a5cd52-e105-4f49-a110-fa93965e53c2/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-8/82a5cd52-e105-4f49-a110-fa93965e53c2/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-8/82a5cd52-e105-4f49-a110-fa93965e53c2/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-8/82a5cd52-e105-4f49-a110-fa93965e53c2/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="Lacul Răcăciuni FOTO Mircea Albu (3) jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/soarta-celor-mai-mari-lacuri-din-bacau-motivele-2328666.html" class="title titleAndHeadings svelte-197rml1    small">Soarta celor mai mari lacuri din Bacău. Motivele pentru care s-au micșorat tot mai mult în ultimii ani FOTO</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/soarta-celor-mai-mari-lacuri-din-bacau-motivele-2328666.html" class="row summary svelte-1mo6hi5   small">Potrivit geografilor, care au scris despre bazinele hidrografice, în județul Bacău existau 52 de lacuri, naturale sau construite în albia principalelor râuri care traversează județul
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">03 ian. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/dansul-cu-ursii-de-la-bacau-a-ajuns-vedeta-in-2328580.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="Alaiul Datinilor și obiceiurilor Bacău FOTO MA (7) jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-9/9fc1be73-7f2c-4bac-abcc-48ed4e92c968/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26c%3D0%252C0.109%252C1%252C0.89%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-9/9fc1be73-7f2c-4bac-abcc-48ed4e92c968/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26c%3D0%252C0.109%252C1%252C0.89%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-9/9fc1be73-7f2c-4bac-abcc-48ed4e92c968/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26c%3D0%252C0.109%252C1%252C0.89%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-9/9fc1be73-7f2c-4bac-abcc-48ed4e92c968/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26c%3D0%252C0.109%252C1%252C0.89%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-9/9fc1be73-7f2c-4bac-abcc-48ed4e92c968/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26c%3D0%252C0.109%252C1%252C0.89%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-9/9fc1be73-7f2c-4bac-abcc-48ed4e92c968/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26c%3D0%252C0.109%252C1%252C0.89%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-9/9fc1be73-7f2c-4bac-abcc-48ed4e92c968/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26c%3D0%252C0.109%252C1%252C0.89%26f%3Dwebp" alt="Alaiul Datinilor și obiceiurilor Bacău FOTO MA (7) jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/dansul-cu-ursii-de-la-bacau-a-ajuns-vedeta-in-2328580.html" class="title titleAndHeadings svelte-197rml1    small">Dansul cu urșii de la Bacău a ajuns vedetă în presa internațională: „O tradiție de milenii” FOTO</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/dansul-cu-ursii-de-la-bacau-a-ajuns-vedeta-in-2328580.html" class="row summary svelte-1mo6hi5   small">Obiceiul dansului cu urșii, întâlnit mai ales în zona de munte a județului Bacău, a fost promovat recent printr-un amplu reportaj în agenția de presă americană Associated Press.
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">03 ian. 2024</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/rasturnare-de-situatie-taxele-si-impozitele-2327433.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="Taxe și Impozite locale Bacău FOTO MA jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-8/808e1348-0394-4f0c-be25-63daeda1844e/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-8/808e1348-0394-4f0c-be25-63daeda1844e/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-8/808e1348-0394-4f0c-be25-63daeda1844e/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-8/808e1348-0394-4f0c-be25-63daeda1844e/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-8/808e1348-0394-4f0c-be25-63daeda1844e/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-8/808e1348-0394-4f0c-be25-63daeda1844e/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-8/808e1348-0394-4f0c-be25-63daeda1844e/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="Taxe și Impozite locale Bacău FOTO MA jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/rasturnare-de-situatie-taxele-si-impozitele-2327433.html" class="title titleAndHeadings svelte-197rml1    small">Răsturnare de situație: taxele și impozitele locale din municipiul Bacău, pentru 2024, aprobate în ceasul al 12-lea</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/rasturnare-de-situatie-taxele-si-impozitele-2327433.html" class="row summary svelte-1mo6hi5   small">Miercuri, 27 decembrie, după episodul în care primarul Lucian Viziteu a retras proiectul privind nivelul taxelor și impozitelor pe 2024 de pe ordinea de zi, a fost convocată, la ora 17.10 o ședință extraordinară. 
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">28 dec. 2023</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/taxele-si-impozitele-locale-din-bacau-vor-fi-cele-2327278.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="primaria bacău sediu"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-a/a1bc1c2c-3485-4f03-9385-62b9264f9ee3/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-a/a1bc1c2c-3485-4f03-9385-62b9264f9ee3/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-a/a1bc1c2c-3485-4f03-9385-62b9264f9ee3/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-a/a1bc1c2c-3485-4f03-9385-62b9264f9ee3/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-a/a1bc1c2c-3485-4f03-9385-62b9264f9ee3/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-a/a1bc1c2c-3485-4f03-9385-62b9264f9ee3/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-a/a1bc1c2c-3485-4f03-9385-62b9264f9ee3/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="primaria bacău sediu" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/taxele-si-impozitele-locale-din-bacau-vor-fi-cele-2327278.html" class="title titleAndHeadings svelte-197rml1    small">Taxele și impozitele locale din Bacău vor fi cele mai mari din țară. Unele dări se dublează în 2024</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/taxele-si-impozitele-locale-din-bacau-vor-fi-cele-2327278.html" class="row summary svelte-1mo6hi5   small">Update: Miercuri seară, de la ora 17.10, a fost convocată o ședință extraordinară de Consiliu Local Bacău, în care proiectul privind nivelul taxelor și impozitelor locale a fost repus pe ordinea de zi.
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">27 dec. 2023</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/cat-cheltuie-autoritatile-pentru-cele-10-minute-de-2326548.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="caini artificii pexels jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-7/7716ac84-fcf5-44b6-a420-4835ad026bb2/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-7/7716ac84-fcf5-44b6-a420-4835ad026bb2/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-7/7716ac84-fcf5-44b6-a420-4835ad026bb2/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-7/7716ac84-fcf5-44b6-a420-4835ad026bb2/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-7/7716ac84-fcf5-44b6-a420-4835ad026bb2/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-7/7716ac84-fcf5-44b6-a420-4835ad026bb2/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-7/7716ac84-fcf5-44b6-a420-4835ad026bb2/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="caini artificii pexels jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/cat-cheltuie-autoritatile-pentru-cele-10-minute-de-2326548.html" class="title titleAndHeadings svelte-197rml1    small">Cât cheltuie autoritățile pentru cele 10 minute de teroare a animalelor și păsărilor din Bacău, din noaptea de Revelion </a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/cat-cheltuie-autoritatile-pentru-cele-10-minute-de-2326548.html" class="row summary svelte-1mo6hi5   small">Primăria Bacău cheltuie o sumă record pentru artificiile de Revelion, 18.000 de euro, asta deși acestea poluează atmosfera iar animalele pot surzi, pot face epilepsie sau infarct
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">24 dec. 2023</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/aberatie-administrativa-primaria-bacau-vrea-taxa-2326589.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="Gunoi menajer neridicat FOTO Facebook Vergil Chițac jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-2/2045cf17-1e16-42bd-8341-b6f97a6e8cca/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-2/2045cf17-1e16-42bd-8341-b6f97a6e8cca/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-2/2045cf17-1e16-42bd-8341-b6f97a6e8cca/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-2/2045cf17-1e16-42bd-8341-b6f97a6e8cca/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-2/2045cf17-1e16-42bd-8341-b6f97a6e8cca/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-2/2045cf17-1e16-42bd-8341-b6f97a6e8cca/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-2/2045cf17-1e16-42bd-8341-b6f97a6e8cca/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="Gunoi menajer neridicat FOTO Facebook Vergil Chițac jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/aberatie-administrativa-primaria-bacau-vrea-taxa-2326589.html" class="title titleAndHeadings svelte-197rml1    small">Aberație administrativă. Primăria Bacău vrea taxă de salubritate pe locuință, nu pe număr de persoane</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/aberatie-administrativa-primaria-bacau-vrea-taxa-2326589.html" class="row summary svelte-1mo6hi5   small">În proiectul de dezbatere și aprobare a taxei speciale de salubritate pentru 2024 este stabilită o taxă unică pe locuință, de 420 de lei, indiferent câte persoane locuiesc acolo.
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">23 dec. 2023</span>
</div>
            </div>
	
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);">

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/cine-sunt-eroii-revolutiei-din-1989-inmormantati-2326275.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="600" height="300" alt="Familiile Își plâng fii căzuți la Revoluție FOTO MA jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-e/eaca9cd1-efee-4c51-af12-a195f25b92c8/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Dwebp 600w" media="(min-width: 600px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-e/eaca9cd1-efee-4c51-af12-a195f25b92c8/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Dwebp 555w" media="(min-width: 555px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-e/eaca9cd1-efee-4c51-af12-a195f25b92c8/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp 500w" media="(min-width: 500px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-e/eaca9cd1-efee-4c51-af12-a195f25b92c8/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D600%26h%3D300%26r%3Dcover%26f%3Djpeg 600w" media="(min-width: 600px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-e/eaca9cd1-efee-4c51-af12-a195f25b92c8/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D555%26h%3D277%26r%3Dcover%26f%3Djpeg 555w" media="(min-width: 555px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-e/eaca9cd1-efee-4c51-af12-a195f25b92c8/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Djpeg 500w" media="(min-width: 500px)"><img src="https://cdn.adh.reperio.news/image-e/eaca9cd1-efee-4c51-af12-a195f25b92c8/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D500%26h%3D250%26r%3Dcover%26f%3Dwebp" alt="Familiile Își plâng fii căzuți la Revoluție FOTO MA jpg" width="600" height="300" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/cine-sunt-eroii-revolutiei-din-1989-inmormantati-2326275.html" class="title titleAndHeadings svelte-197rml1    small">Cine sunt eroii Revoluției din 1989 înmormântați în Cimitirul Central din Bacău. Povestea specială a lui Ciprian Pintea FOTO</a>

    </div>


            
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/cine-sunt-eroii-revolutiei-din-1989-inmormantati-2326275.html" class="row summary svelte-1mo6hi5   small">În Cimitirul Central din Bacău, de 34 de ani, își dorm somnul de veci patru eroi, care au fost împușcați la evenimentele din decembrie 1989 din București. 
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    

    <span class="date metaFont svelte-itueop">22 dec. 2023</span>
</div>
            </div>
	

<div class="nav svelte-6rmnnc">

	<a href="/stiri-locale/bacau/2.html" title="Bacău - pagina 2" class="svelte-6rmnnc">Pagina 2 →</a>
</div></div></div><hr class="svelte-1f3w406"><div id="b-af052464-ad3a-4831-a60a-2c4083c971ee" class="block blockContainer flex-column flex-grow0  blockContainer-co-0 svelte-b4f4kz" style="">

<h2 id="67138e45-8241-4e03-aa3f-ac41c797c771" data-type="Title" class="titleAndHeadings svelte-1fkr9fj" style="--color: #111; --borderColor: #4d4d4d; --bgColor: none; "><span class="inside">Cele mai citite din Bacău</span>

            </h2><div id="b-0ede288c-e8e3-4a04-9380-848ef41487fd" class="block blockContainer flex-row flex-grow0  blockContainer-co-0 svelte-b4f4kz" style="">
  
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);"><div class="row meta svelte-o4m35i">

    

    
</div>

            
            
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/condamnari-in-dosarul-dna-de-abuz-in-serviciu-de-2337483.html" class="title titleAndHeadings svelte-197rml1    small">Condamnări în dosarul DNA de abuz în serviciu de la Taxe și Impozite Locale Bacău</a>

    <a href="https://adevarul.ro/stiri-locale/bacau/condamnari-in-dosarul-dna-de-abuz-in-serviciu-de-2337483.html#comments" class="comments-count metaFont svelte-197rml1" title="Vezi comentariile" data-id="2337483">0</a></div>


            
            
            
            

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/condamnari-in-dosarul-dna-de-abuz-in-serviciu-de-2337483.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="400" height="200" alt="Taxe și Impozite locale Bacău FOTO MA jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-8/808e1348-0394-4f0c-be25-63daeda1844e/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D400%26h%3D200%26r%3Dcover%26f%3Dwebp 400w" media="(min-width: 400px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-8/808e1348-0394-4f0c-be25-63daeda1844e/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D200%26h%3D100%26r%3Dcover%26f%3Dwebp 200w" media="(min-width: 200px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-8/808e1348-0394-4f0c-be25-63daeda1844e/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D400%26h%3D200%26r%3Dcover%26f%3Djpeg 400w" media="(min-width: 400px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-8/808e1348-0394-4f0c-be25-63daeda1844e/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D200%26h%3D100%26r%3Dcover%26f%3Djpeg 200w" media="(min-width: 200px)"><img src="https://cdn.adh.reperio.news/image-8/808e1348-0394-4f0c-be25-63daeda1844e/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D200%26h%3D100%26r%3Dcover%26f%3Dwebp" alt="Taxe și Impozite locale Bacău FOTO MA jpg" width="400" height="200" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/condamnari-in-dosarul-dna-de-abuz-in-serviciu-de-2337483.html" class="row summary svelte-1mo6hi5   small">Zilele trecute, Tribunalul Bacău i-a condamnat pe Tiberiu-George Ciobanu, Dana Mihaela Bălan, Emanuel Mihalachi și  Mircea Oniga la pedepse cu suspendare în dosarul în care au fost acuzați de abuz în serviciu și fals. 
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    <a href="https://adevarul.ro/stiri-locale/bacau/condamnari-in-dosarul-dna-de-abuz-in-serviciu-de-2337483.html#comments" class="comments-count metaFont svelte-itueop" title="Vezi comentariile" data-id="2337483">0</a>

    
</div>
            </div>
	<div class="container svelte-1h5vdfy multiColumnParent borderRight borderRightSpace" style="--parentColumns:3; --contextColor: rgba(18,79,115,0.7); --contextColorFaded: rgba(18,79,115,0.03);"><div class="row meta svelte-o4m35i">

    

    
</div>

            
            
            
            
            

            <div class="row svelte-197rml1"><a href="https://adevarul.ro/stiri-locale/bacau/strada-vitala-pentru-platforma-industrala-din-2336998.html" class="title titleAndHeadings svelte-197rml1    small">Stradă vitală pentru platforma industrală din Onești, modernizată printr-o investiție de patru milioane de euro</a>

    <a href="https://adevarul.ro/stiri-locale/bacau/strada-vitala-pentru-platforma-industrala-din-2336998.html#comments" class="comments-count metaFont svelte-197rml1" title="Vezi comentariile" data-id="2336998">0</a></div>


            
            
            
            

            
            <a class="row bgEagleAdevarul svelte-7ep0p0" href="https://adevarul.ro/stiri-locale/bacau/strada-vitala-pentru-platforma-industrala-din-2336998.html" style="--aspectRatio: 2;"><picture loading="lazy" class="cover svelte-h45upf" width="400" height="200" alt="Strada Industriilor Onesti jpg"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-a/a0b4a223-50cb-4c83-899a-1275a36fea35/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D400%26h%3D200%26r%3Dcover%26f%3Dwebp 400w" media="(min-width: 400px)"><source type="image/webp" srcset="https://cdn.adh.reperio.news/image-a/a0b4a223-50cb-4c83-899a-1275a36fea35/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D200%26h%3D100%26r%3Dcover%26f%3Dwebp 200w" media="(min-width: 200px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-a/a0b4a223-50cb-4c83-899a-1275a36fea35/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D400%26h%3D200%26r%3Dcover%26f%3Djpeg 400w" media="(min-width: 400px)"><source type="image/jpeg" srcset="https://cdn.adh.reperio.news/image-a/a0b4a223-50cb-4c83-899a-1275a36fea35/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D200%26h%3D100%26r%3Dcover%26f%3Djpeg 200w" media="(min-width: 200px)"><img src="https://cdn.adh.reperio.news/image-a/a0b4a223-50cb-4c83-899a-1275a36fea35/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D200%26h%3D100%26r%3Dcover%26f%3Dwebp" alt="Strada Industriilor Onesti jpg" width="400" height="200" loading="lazy" class="svelte-h45upf"></picture></a>
            
            
            

            
            
            <a href="https://adevarul.ro/stiri-locale/bacau/strada-vitala-pentru-platforma-industrala-din-2336998.html" class="row summary svelte-1mo6hi5   small">Infrastructura rutieră care deservește platforma petrochimică de la Onești a fost modernizată recent, ceea ce va reprezenta un impuls pentru agenții economici din zonă. 
</a>
            
            

            
            
            
            <div class="row category svelte-itueop"><a class="source svelte-itueop" href="/stiri-locale/bacau" title="Mai multe din Bacău">Bacău</a>

    <a href="https://adevarul.ro/stiri-locale/bacau/strada-vitala-pentru-platforma-industrala-din-2336998.html#comments" class="comments-count metaFont svelte-itueop" title="Vezi comentariile" data-id="2336998">0</a>

    
</div>
            </div></div></div></div><div id="b-1fc4448f-f5b5-41da-b26a-e5122bbde39c" class="block blockContainer flex-column flex-grow0  blockContainer-co-0 svelte-b4f4kz" style=""><footer class="svelte-1wb4m60"><div class="subcontainer svelte-1wb4m60"><a href="/" title="Adevărul" class="logo svelte-1wb4m60"><img src="/logo.svg" width="320" height="50" alt="Adevărul" class="svelte-1wb4m60"></a></div>

	<div class="legal svelte-1wb4m60"><a href="/termeni-si-conditii" title="Termeni și condiții" class="svelte-1wb4m60">Termeni și condiții</a>

		<a href="/politica-confidentialitate" title="Politică de confidențialitate" class="svelte-1wb4m60">Politică de confidențialitate
		</a>

		<a href="/politica-cookies" title="Despre cookies" class="svelte-1wb4m60">Politică Cookies</a>
		<a href="mailto:contact@adevarul.ro" title="Informatii de contact" class="svelte-1wb4m60">Contact</a></div>

	<div class="other svelte-1wb4m60">
				<button id="ot-sdk-btn" onclick="Optanon.ToggleInfoDisplay();" class="svelte-1wb4m60">Modifică preferințe pentru confidențialitate
				</button>
				</div>

	<div class="copyright svelte-1wb4m60">© Toate drepturile rezervate Adevarul Holding 2024</div>

	<ul class="network svelte-1wb4m60"><li class="svelte-1wb4m60">Din rețeaua Adevărul Holding:</li>
			<li class="svelte-1wb4m60"><a href="https://adevarul.ro" target="_blank" class="svelte-1wb4m60">Adevarul.ro</a></li>
			<li class="svelte-1wb4m60"><a href="https://click.ro" target="_blank" class="svelte-1wb4m60">Click.ro</a></li>
			<li class="svelte-1wb4m60"><a href="https://clickpoftabuna.ro" target="_blank" class="svelte-1wb4m60">ClickPoftaBuna.ro</a></li>
			<li class="svelte-1wb4m60"><a href="https://clicksanatate.ro" target="_blank" class="svelte-1wb4m60">ClickSanatate.ro</a></li>
			<li class="svelte-1wb4m60"><a href="https://clickpentrufemei.ro" target="_blank" class="svelte-1wb4m60">ClickPentruFemei.ro</a></li>

			<li class="svelte-1wb4m60"><a href="https://dilemaveche.ro" target="_blank" class="svelte-1wb4m60">DilemaVeche.ro</a></li>

			<li class="svelte-1wb4m60"><a href="https://okmagazine.ro" target="_blank" class="svelte-1wb4m60">OkMagazine.ro</a></li>

			<li class="svelte-1wb4m60"><a href="https://historia.ro" target="_blank" class="svelte-1wb4m60">Historia.ro</a></li></ul>

	<div class="reperio svelte-1wb4m60"><a href="https://reperio.news" title="Powered by Reperio - cloud-native SaaS CMS" target="_blank" class="svelte-1wb4m60"><img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='3239.0438247011953' height='1123.5059760956176' viewBox='0 0 3239.0438247011953 1123.5059760956176'%3e %3cg transform='scale(11.952191235059761) translate(10%2c 10)'%3e %3cdefs id='SvgjsDefs7091'%3e%3c/defs%3e%3cg id='SvgjsG7092' featureKey='rootContainer' transform='matrix(1%2c0%2c0%2c1%2c0%2c0)' fill='%23111111'%3e%3crect width='251' height='74' rx='10'%3e%3c/rect%3e%3c/g%3e%3cg id='SvgjsG7093' featureKey='G09qjj-0' transform='matrix(1.9873898162907335%2c0%2c0%2c1.9873898162907335%2c20%2c5.063050918546333)' fill='white'%3e%3cg xmlns='http://www.w3.org/2000/svg'%3e%3cpolygon points='8%2c9 12%2c9 12%2c5 8%2c5 0%2c5 0%2c27 8%2c27 12%2c27 12%2c23 8%2c23 '%3e%3c/polygon%3e%3crect x='11' y='12' width='3' height='8'%3e%3c/rect%3e%3crect x='17' y='10' width='3' height='12'%3e%3c/rect%3e%3crect x='23' y='8' width='3' height='16'%3e%3c/rect%3e%3crect x='29' y='5' width='3' height='22'%3e%3c/rect%3e%3c/g%3e%3c/g%3e%3cg id='SvgjsG7094' featureKey='0yvIkK-0' transform='matrix(1.6981701689106128%2c0%2c0%2c1.6981701689106128%2c102.06408542442145%2c13.992014336012998)' fill='%23fcfcfc'%3e%3cpath d='M4.14 10.58 l0 2.92 l2.8 0 c0.92 0 1.46 -0.54 1.46 -1.46 s-0.54 -1.46 -1.46 -1.46 l-2.8 0 z M8.68 15.48 c0.56 0.76 1.12 1.52 1.7 2.26 c0.56 0.74 1.12 1.5 1.68 2.26 l-3.66 0 c-0.72 -0.96 -1.42 -1.92 -2.12 -2.88 c-0.7 -0.94 -1.42 -1.9 -2.14 -2.86 l0 5.74 l-3 0 l0 -12.24 l5.8 0 c2.28 0 4.22 1.74 4.22 4.04 c0 1.62 -1 3.04 -2.48 3.68 z M13.32 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 1.94 l6.1 0 l0 2.78 l-9.1 0 l0 -12.24 z M24.12 20 l0 -12.24 l5.8 0 c2.28 0 4.22 1.72 4.22 4.02 c0 2.32 -2 4.02 -4.22 4.02 l-2.8 0 l0 4.2 l-3 0 z M29.92 10.54 l-2.8 0 l0 2.48 l2.8 0 c0.7 0 1.22 -0.54 1.22 -1.24 s-0.52 -1.24 -1.22 -1.24 z M35.64 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 1.94 l6.1 0 l0 2.78 l-9.1 0 l0 -12.24 z M49.44 10.58 l0 2.92 l2.8 0 c0.92 0 1.46 -0.54 1.46 -1.46 s-0.54 -1.46 -1.46 -1.46 l-2.8 0 z M53.98 15.48 c0.56 0.76 1.12 1.52 1.7 2.26 c0.56 0.74 1.12 1.5 1.68 2.26 l-3.66 0 c-0.72 -0.96 -1.42 -1.92 -2.12 -2.88 c-0.7 -0.94 -1.42 -1.9 -2.14 -2.86 l0 5.74 l-3 0 l0 -12.24 l5.8 0 c2.28 0 4.22 1.74 4.22 4.04 c0 1.62 -1 3.04 -2.48 3.68 z M58.599999999999994 7.76 l3 0 l0 12.24 l-3 0 l0 -12.24 z M69.74 17.32 c2.18 0 3.3 -1.4 3.3 -3.44 c0 -2.16 -1.2 -3.44 -3.3 -3.44 c-2.2 0 -3.3 1.4 -3.3 3.44 c0 2.12 1.22 3.44 3.3 3.44 z M69.74 20.1 c-3.76 0 -6.3 -2.56 -6.3 -6.22 c0 -3.78 2.66 -6.22 6.3 -6.22 c3.78 0 6.3 2.54 6.3 6.22 c0 3.8 -2.64 6.22 -6.3 6.22 z'%3e%3c/path%3e%3c/g%3e %3c/g%3e %3c/svg%3e" width="100" height="35" alt="Reperio" loading="lazy" class="svelte-1wb4m60"></a></div>
</footer></div></div></div></div></div></main>


	<script type="text/javascript">
cX.callQueue.push(['invoke', function () { console.log(document.getElementById('AdSense').clientHeight);
let isAdBlockDetected = !document.getElementById('AdSense').clientHeight ? 'Yes' : 'No';
console.log('HasAdBlock : ' + isAdBlockDetected);
cX.setEventAttributes({origin: 'brt-adblock', persistedQueryId: 'fcadb0c22bec63a3e94af5a65644fc6b869880e0'});
cX.sendEvent('adBlockerDetection', {adBlockerDetected: isAdBlockDetected}); document.getElementById('status').innerHTML = isAdBlockDetected;
}]);
</script>
	

<script class="optanon-category-C0004" type="text/plain" src="//a.teads.tv/page/99553/tag" async="true"></script>

<div data-ad="adevarul.ro_728x90_sticky_display_bottom_adevarul_bottom_center_leaderboard" data-devices="m:0,t:1,d:1"   class="demand-supply"></div>





<script>  document.addEventListener("DOMContentLoaded", function () {  setTimeout(async () => {  let session = localStorage.getItem('reperio_trv');  if (session) {   session = JSON.parse(session);   if (session.la){     const la = new Date(session.la);     if (isNaN(la.getTime()) || new Date().getTime() - la.getTime() > 1000 * 60 * 10){      session = {};     } else {      session.la = new Date();      localStorage.setItem('reperio_trv', JSON.stringify(session));     }   }  } else {   session = {};  }    const utm = {};    try{  const url = new URL(window.location.href);    for(const [ key, value ] of url.searchParams) {   utm[key] = value;  }  } catch(e){}  const v = {   domain: "adevarul.ro",    path: "/stiri-locale/bacau",    unique_content_identifier: "228",    content_type: "category",    session: session.id,   utm: utm,   referrer: document.referrer,  };    const controller = new AbortController();  const timeout = setTimeout(() => controller.abort(), 2000);  const res = await fetch('https://tracker.adh.reperio.news/track/view', {   method: "POST",   priority: "low",   mode: "cors",      cache: "no-cache",   signal: controller.signal,   headers: {    "Content-Type": "application/json",   },   body: JSON.stringify(v),  });  const j = await res.json();  session = {     id: j.session,     la: new Date(),  };  localStorage.setItem('reperio_trv', JSON.stringify(session));   }, 1000);   });  </script>

</div> 