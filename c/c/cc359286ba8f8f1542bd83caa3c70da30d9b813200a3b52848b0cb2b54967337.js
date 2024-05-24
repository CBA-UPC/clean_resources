var cacheName	= 'cnn-indonesia';
var filesToCache = [
	'assets/js/cnn-indonesia.js',
    'assets/mobile/js/cnn-indonesia.js'
];

self.addEventListener('install', function(e) {
	console.log('[ServiceWorker] Install');
	// e.waitUntil(
	// 	caches.open(keyAsset).then(function(cache) {
	// 		console.log('[ServiceWorker] Caching app shell');
	// 		return cache.addAll(filesToCache);
	// 	})
	// );
});

self.addEventListener('activate', function(e) {
	console.log('[ServiceWorker] Activate');
	e.waitUntil(
		caches.keys().then(function(keyList) {
			return Promise.all(keyList.map(function(key) {
				if (key !== cacheName) {
					console.log('[ServiceWorker] Removing old cache', key);
					return caches.delete(key);
				}
			}));
		})
	);
	/*
	 * Fixes a corner case in which the app wasn't returning the latest data.
	 * You can reproduce the corner case by commenting out the line below and
	 * then doing the following steps: 1) load app for first time so that the
	 * initial New York City data is shown 2) press the refresh button on the
	 * app 3) go offline 4) reload the app. You expect to see the newer NYC
	 * data, but you actually see the initial data. This happens because the
	 * service worker is not yet activated. The code below essentially lets
	 * you activate the service worker faster.
	 */
	return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
	var bUrl	= `www.cnnindonesia.com`,
		dataUrl = `${bUrl}/api`;

	if (
		e.request.url.indexOf(bUrl) > -1 &&
		e.request.url.indexOf(dataUrl) < 0 &&
		e.request.url.indexOf(`${bUrl}/css/`) < 0 &&
		e.request.url.indexOf(`${bUrl}/fonts/`) < 0 &&
		e.request.url.indexOf(`${bUrl}/images/`) < 0 &&
		e.request.url.indexOf(`${bUrl}/js/`) < 0 &&
		e.request.url.indexOf(`${bUrl}/mobile/`) < 0 &&
		e.request.url.indexOf(`${bUrl}/scss/`) < 0
	) {
		return false
	}

	if (e.request.url.indexOf(dataUrl) > -1) {
		/*
		 * When the request URL contains dataUrl, the app is asking for fresh
		 * weather data. In this case, the service worker always goes to the
		 * network and then caches the response. This is called the "Cache then
		 * network" strategy:
		 * https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
		 */
		e.respondWith(
			caches.open(cacheName).then(function(cache) {
				return fetch(e.request)
					.then(function(response){
						return new Promise(resolve => {
							response.clone().json()
								.then(body => {
									resolve({response:response, body:body})
								})
								.catch(err => {
									resolve({response:response, body:null})
								})
						})
					})
					.then(result => {
						const {response, body} = result
						if (!body) {
							return response
						}
						cache.put(body.payload||e.request.url, response.clone());
						return response;
					})
			})
		);
	} else {
		e.respondWith(
			caches.match(e.request)
				.then(function(response) {
					return response || fetch(e.request)
				})
		)
	}
});
: 1.5; font-size: 14px; }

body.theme-dark { background-color: #000; color: #fff; }

body.theme-light { background-color: #fff; }

* { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }

*:before, *:after { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }

.clearfix:before, .clearfix:after { content: " "; display: table; }

.clearfix:after { clear: both; }

a { text-decoration: none; color: #004C95; }

a:hover { color: #ff7c00; }

hr { border-style: solid none none; border-color: #d4d4d4; margin: 15px 0; }

p { margin-top: 0; margin-bottom: 20px; }

h1, h2, h3, h4, h5, h6 { font-weight: normal; line-height: normal; margin: 0; }

h1 { font-size: 36px; }

h2 { font-size: 30px; }

h3 { font-size: 24px; }

h4 { font-size: 18px; }

h5 { font-size: 14px; }

h6 { font-size: 12px; }

header, footer, table { display: table; width: 100%; }

table th { border: 1px solid #A1A1A1; padding: 10px; text-align: left; }

table td { border: 1px solid #A1A1A1; padding: 5px 10px; }

article { position: relative; }

.ratiobox_content iframe { width: 100%; height: 100%; position: absolute; left: 0; right: 0; top: 0; bottom: 0; }

ol, ul { padding: 0 0 0 25px; margin-top: 14px; margin-bottom: 14px; margin-bottom: 14px; }

ol ol, ol ul, ul ol, ul ul { margin-top: 7px; margin-bottom: 0; }

ol li, ul li { padding: 5px 0; }

img { vertical-align: middle; }

.full_width img { width: 100%; }

/*--------------------------------------------------------------------------------*/
/*GRID 12 COLUMN*/
/*--------------------------------------------------------------------------------*/
.container { padding-left: 10px; padding-right: 10px; margin-right: auto; margin-left: auto; width: 1100px; }

@media (min-width: 1024px) and (max-width: 1280px) { .container { width: 1000px; } }

.container_full { padding-left: 10px; padding-right: 10px; margin-right: auto; margin-left: auto; }

.grid_row { display: flex; flex-wrap: wrap; margin-left: -10px; margin-right: -10px; }

.no_gap { margin-right: 0; margin-left: 0; }

.no_gap > .col, .no_gap > [class*="col_"] { padding-right: 0; padding-left: 0; }

.col_1, .col_2, .col_3, .col_4, .col_5, .col_6, .col_7, .col_8, .col_9, .col_10, .col_11, .col_12, .col, .col_auto, .column-1, .column-2, .column-3, .column-4, .column-5, .column-6, .column-7, .column-8, .column-9, .column-10, .column-11, .column-12, .column, .column-auto { position: relative; width: 100%; padding-left: 10px; padding-right: 10px; }

.col { -ms-flex-preferred-size: 0; flex-basis: 0; -ms-flex-positive: 1; flex-grow: 1; max-width: 100%; }

.col_auto { -ms-flex: 0 0 auto; flex: 0 0 auto; width: auto; max-width: 100%; }

.col_1 { -ms-flex: 0.08333; flex: 0 0 8.33333%; max-width: 8.33333%; }

.col_2 { -ms-flex: 0.16667; flex: 0 0 16.66667%; max-width: 16.66667%; }

.col_3 { -ms-flex: 0.25; flex: 0 0 25%; max-width: 25%; }

.col_4 { -ms-flex: 0.33333; flex: 0 0 33.33333%; max-width: 33.33333%; }

.col_5 { -ms-flex: 0.41667; flex: 0 0 41.66667%; max-width: 41.66667%; }

.col_6 { -ms-flex: 0.5; flex: 0 0 50%; max-width: 50%; }

.col_7 { -ms-flex: 0.58333; flex: 0 0 58.33333%; max-width: 58.33333%; }

.col_8 { -ms-flex: 0.66667; flex: 0 0 66.66667%; max-width: 66.66667%; }

.col_9 { -ms-flex: 0.75; flex: 0 0 75%; max-width: 75%; }

.col_10 { -ms-flex: 0.83333; flex: 0 0 83.33333%; max-width: 83.33333%; }

.col_11 { -ms-flex: 0.91667; flex: 0 0 91.66667%; max-width: 91.66667%; }

.col_12 { -ms-flex: 1; flex: 0 0 100%; max-width: 100%; }

/*--------------------------------------------------------------------------------*/
/*TABLE*/
/*--------------------------------------------------------------------------------*/
.table { width: 100%; border: none; background: #eeeeee; }

.table th { background: #d4d4d4; border-color: #bbbbbb; }

.table tr:nth-child(2n) { background: white; }

.table td { border-color: #d4d4d4; }

/*--------------------------------------------------------------------------------*/
/*FORMS*/
/*--------------------------------------------------------------------------------*/
input:focus, select:focus, textarea:focus, button:focus { outline: none; }

textarea, .styled-select select, input[type="text"], input[type="button"], input[type="submit"] { -webkit-appearance: none; -moz-appearance: none; -ms-appearance: none; -o-appearance: none; -webkit-border-radius: 0px; -moz-border-radius: 0px; -o-border-radius: 0px; border-radius: 0px; }

input[type="text"], textarea { font-size: 14px; display: inline-block; border: 1px solid #ccc; padding: 5px 10px; margin: 0 0 10px; background: #f7f7f7; }

textarea { resize: none; }

button { cursor: pointer; }

label { margin-top: 5px; margin-bottom: 5px; line-height: 1.5; }

.form .grid_row { margin: 0 0 5px; }

.form label { display: inline-block; }

.form .text { font-size: 14px; display: block; border: 1px solid #ccc; padding: 7px 10px; margin: 0 0 10px; background: #f7f7f7; }

.form .text.half { width: 50%; }

.form .text.full { width: 100%; }

.form .text:hover, .form .text:focus { border-color: #adadad; }

.checkbox label { padding-left: 20px; cursor: pointer; }

.checkbox [type="checkbox"], .checkbox [type="radio"] { margin-left: -20px; margin-right: 4px; position: absolute; }

/*--------------------------------------------------------------------------------*/
/*SELECTBOX*/
/*--------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------*/
/*BUTTONS*/
/*--------------------------------------------------------------------------------*/
.btn { font-size: 14px; line-height: 1.35; display: inline-block; padding: 12px 24px; text-align: center; cursor: pointer; vertical-align: top; color: #fff; background: #214099; }

.btn:hover { color: #fff; }

.btn_small { font-size: 10px; padding: 5px 10px; }

.btn_large { font-size: 18px; padding: 5px 20px; }

.btn_blue { background: blue; color: #fff; border: 1px solid #0000cc; }

.btn_red { background: red; color: #fff; border: 1px solid #cc0000; }

.btn_orange { background: orange; color: #fff; border: 1px solid #cc8400; }

.btn_green { background: green; color: #fff; border: 1px solid #004d00; }

.btn_grey { background: grey; color: #fff; border: 1px solid #676767; }

/*--------------------------------------------------------------------------------*/
/*CONTAINER*/
/*--------------------------------------------------------------------------------*/
#content { position: relative; margin: 0 0 10px; }

.box { position: relative; }

.box .title_box { position: relative; color: #fff; padding: 10px 15px; margin: 0 0 15px; font-size: 18px; -webkit-border-radius: 5px; -moz-border-radius: 5px; -o-border-radius: 5px; border-radius: 5px; }

.box .title_box a { color: #fff; height: 100%; }

.box .title_box--inline { display: inline-block; }

.title_page { padding: 0 0 10px; color: #214099; font-size: 22px; font-weight: bold; }

.box_text { font-size: 13px; display: block; }

.grid_row .box_text { margin: 10px 0 0; }

.box_text.text_inside { position: absolute; left: 0; right: 0; bottom: 0; padding: 10px 15px; margin: 0; z-index: 2; color: #fff; background: #000; /* The Fallback */ background: rgba(0, 0, 0, 0.5); }

.box_text p { color: #212121; margin: 0; }

.theme-dark .box_text p { color: #fff; }

.box_text--bg { position: relative; padding: 15px 18px; margin: -5px 0 0; color: #4a4a4a; background: #f6f6f6; -webkit-border-radius: 0 0 5px 5px; -moz-border-radius: 0 0 5px 5px; -o-border-radius: 0 0 5px 5px; border-radius: 0 0 5px 5px; }

.box_text--bg .title { color: #4a4a4a; }

.box_text--bg p { color: #4a4a4a !important; margin: 5px 0 0; }

.text_inside { position: relative; background: #214099; }

.text_inside a { display: block; position: relative; color: #fff !important; }

.text_inside a:hover { opacity: 0.85; filter: alpha(opacity=85); }

.text_inside .date { color: #fff; }

.grid_row.gap .text_inside { left: 5px; right: 5px; left: 10px; right: 10px; }

.box_img { width: 140px; float: left; overflow: hidden; }

.box_img--rounded { -webkit-border-radius: 5px; -moz-border-radius: 5px; -o-border-radius: 5px; border-radius: 5px; }

/*--------------------------------------------------------------------------------*/
/*RESPONSIVE BOX*/
/*--------------------------------------------------------------------------------*/
.ratiobox.ratio_16_9:after { padding-top: 56.25%; }

.ratiobox.ratio_4_3:after { padding-top: 75%; }

.ratiobox.ratio_3_4:after { padding-top: 133%; }

.ratiobox.ratio_9_16:after { padding-top: 178%; }

.ratiobox { display: block; position: relative; }

.ratiobox:after { content: ""; display: block; padding-top: 100%; overflow: hidden; }

.ratiobox > .ratiobox_content { position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden; background-color: #eee; }

.ratiobox > .ratiobox_content img { height: 100%; max-width: 100%; }

/*--------------------------------------------------------------------------------*/
/*LIST*/
/*--------------------------------------------------------------------------------*/
.list > article, .list > a { position: relative; padding-top: 0; padding-bottom: 10px; margin: 0 0 10px; }

.list > article:last-child, .list > a:last-child { margin: 0; }

.list > article .title { font-size: 12px; }

.list a { display: block; color: #555; }

.theme-dark .list a { color: #fff; }

.list a:hover { color: #000; }

.theme-dark .list a:hover { color: #ccc; }

.list.media_rows > article > a, .list.media_rows > a { -moz-box-align: center; -moz-box-direction: normal; -moz-box-orient: horizontal; -moz-box-pack: justify; align-items: normal; display: -webkit-box; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-box-flex: 1; flex-flow: row nowrap; justify-content: space-between; }

.list.media_rows.middle > article > a, .list.media_rows.middle > a { align-items: center; }

.list.media_rows .box_img { width: 100px; display: table; }

.list.media_rows > article > a .box_text, .list.media_rows > a .box_text { margin: 0 0 0 15px; width: 100%; -ms-flex: 1 0 0px; flex: 1; }

.list--feed.media_rows .box_img { width: 220px; }

.list--feed.media_rows > article > a .box_text, .list--feed.media_rows > a .box_text { margin: 0 0 0 25px; }

.list--feed > article .title { font-size: 20px; margin: 3px 0 10px; }

.cols .no_gap article { margin: 0; }

.cols article { margin: 0 0 20px; }

.cols article .title { font-size: 16px; }

.cols article .title--small { font-size: 12px; }

.cols article a { color: #555; }

.theme-dark .cols article a { color: #fff; }

.cols article a:hover { color: #000; }

.theme-dark .cols article a:hover { color: #ccc; }

.cols article a:hover .ratiobox_content { -webkit-transform: scale(1.2); -moz-transform: scale(1.2); -ms-transform: scale(1.2); -o-transform: scale(1.2); transform: scale(1.2); }

.cols.list--feed article { margin: 0 0 30px; }

.cols > article, .cols > a { display: block; }

.cols .box_img { float: none; width: 100%; }

/*--------------------------------------------------------------------------------*/
/*HELPER*/
/*--------------------------------------------------------------------------------*/
.pd0 { padding: 0px !important; }

.pr0 { padding-right: 0px !important; }

.pl0 { padding-left: 0px !important; }

.pt0 { padding-top: 0px !important; }

.pb0 { padding-bottom: 0px !important; }

.mb0 { margin-bottom: 0px !important; }

.mr0 { margin-right: 0px !important; }

.ml0 { margin-left: 0px !important; }

.mt0 { margin-top: 0px !important; }

.m0 { margin: 0px !important; }

.pd5 { padding: 5px !important; }

.pr5 { padding-right: 5px !important; }

.pl5 { padding-left: 5px !important; }

.pt5 { padding-top: 5px !important; }

.pb5 { padding-bottom: 5px !important; }

.mb5 { margin-bottom: 5px !important; }

.mr5 { margin-right: 5px !important; }

.ml5 { margin-left: 5px !important; }

.mt5 { margin-top: 5px !important; }

.m5 { margin: 5px !important; }

.pd10 { padding: 10px !important; }

.pr10 { padding-right: 10px !important; }

.pl10 { padding-left: 10px !important; }

.pt10 { padding-top: 10px !important; }

.pb10 { padding-bottom: 10px !important; }

.mb10 { margin-bottom: 10px !important; }

.mr10 { margin-right: 10px !important; }

.ml10 { margin-left: 10px !important; }

.mt10 { margin-top: 10px !important; }

.m10 { margin: 10px !important; }

.pd15 { padding: 15px !important; }

.pr15 { padding-right: 15px !important; }

.pl15 { padding-left: 15px !important; }

.pt15 { padding-top: 15px !important; }

.pb15 { padding-bottom: 15px !important; }

.mb15 { margin-bottom: 15px !important; }

.mr15 { margin-right: 15px !important; }

.ml15 { margin-left: 15px !important; }

.mt15 { margin-top: 15px !important; }

.m15 { margin: 15px !important; }

.pd20 { padding: 20px !important; }

.pr20 { padding-right: 20px !important; }

.pl20 { padding-left: 20px !important; }

.pt20 { padding-top: 20px !important; }

.pb20 { padding-bottom: 20px !important; }

.mb20 { margin-bottom: 20px !important; }

.mr20 { margin-right: 20px !important; }

.ml20 { margin-left: 20px !important; }

.mt20 { margin-top: 20px !important; }

.m20 { margin: 20px !important; }

.f10 { font-size: 10px; }

.f11 { font-size: 11px; }

.f12 { font-size: 12px; }

.f13 { font-size: 13px; }

.f14 { font-size: 14px; }

.f15 { font-size: 15px; }

.f16 { font-size: 16px; }

.f18 { font-size: 18px; }

.f20 { font-size: 20px; }

.f22 { font-size: 22px; }

.f24 { font-size: 24px; }

.f26 { font-size: 26px; }

.fl { float: left !important; }

.fr { float: right !important; }

.text_center { text-align: center; }

.text_right { text-align: right; }

.text_justify { text-align: justify; }

.text_nowrap { white-space: nowrap; }

.bold, strong { font-weight: bold; }

.block { display: block; }

.relative { position: relative; }

.paging { margin: 10px 0 20px; position: relative; font-size: 16px; }

.paging a { color: #555; display: inline-block; text-align: center; min-width: 33px; height: 33px; padding: 5px 10px; -webkit-border-radius: 20px; -moz-border-radius: 20px; -o-border-radius: 20px; border-radius: 20px; }

.theme-dark .paging a { color: #fff; }

.paging a.selected, .paging a:hover { color: #fff; }

.paging a.selected .icon, .paging a:hover .icon { color: #fff; }

.paging a .icon { font-size: 12px; }

.theme-dark .paging a .icon { color: #fff !important; }

.icon_inside { text-align: center; z-index: 2; font-size: 40px; }

.hide { display: none !important; }

.show { display: block !important; }

/*--------------------------------------------------------------------------------*/
/*CARET*/
/*--------------------------------------------------------------------------------*/
.caret { position: relative; margin: 0 0 0 20px; float: right; }

.caret:before { content: ''; position: absolute; top: 6px; left: 4px; border-top: 6px solid #214099; border-left: 6px solid transparent; border-right: 6px solid transparent; }

.caret:after { content: ''; position: absolute; left: 6px; top: 6px; border-top: 4px solid #eee; border-left: 4px solid transparent; border-right: 4px solid transparent; }

/*--------------------------------------------------------------------------------*/
/*EXTENDS UTILITIES*/
/*--------------------------------------------------------------------------------*/
.circle, .nav__item--new a:after, .nav__item--live a:after { -webkit-border-radius: 50%; -moz-border-radius: 50%; -o-border-radius: 50%; border-radius: 50%; }

.icon_inside { position: absolute; top: 50%; left: 50%; -webkit-transform: translate3d(-50%, -50%, 0); -moz-transform: translate3d(-50%, -50%, 0); -ms-transform: translate3d(-50%, -50%, 0); -o-transform: translate3d(-50%, -50%, 0); transform: translate3d(-50%, -50%, 0); }

.btn:hover, .box .title_box a:hover, .text_inside .date, .icon_inside, .navbar-nav__item a:hover, .navbar-nav__item--active a, .dropdown-aktif .dropdown { opacity: 0.75; filter: alpha(opacity=75); }

.paging a .icon { color: #214099; }

.box .title_box, .paging a.selected, .paging a:hover { background: #214099; }

body { font-family: montserrat-light, Helvetica, Arial; }

.logo-main__tagline, .tabs-menu, li.native-ads-d .ads_native_d .an_desk .an_sub, li.native-ads-d .ads_native_d .an_desk .an_label, .ads_native_d .an_desk .an_sub, .ads_native_d .an_desk .an_label { font-family: montserrat-semibold, Helvetica, Arial; }

.btn, .box .title_box, .list > article .title, .cols article .title, li.native-ads-d .ads_native_d .an_desk h2, .ads_native_d .an_desk h2 { font-family: montserrat-bold, Helvetica, Arial Black; }

a, .btn, .cols article .ratiobox_content, .sticky, .caret:before, .caret:after { -webkit-transition: all 0.3s ease-in-out 0s; -moz-transition: all 0.3s ease-in-out 0s; -ms-transition: all 0.3s ease-in-out 0s; -o-transition: all 0.3s ease-in-out 0s; transition: all 0.3s ease-in-out 0s; }

@font-face { font-family: "montserrat-light"; font-weight: normal; font-style: normal; src: url("../fonts/montserrat-light.eot"); src: url("../fonts/montserrat-light.eot?#iefix") format("embedded-opentype"), url("../fonts/montserrat-light.woff2") format("woff2"), url("../fonts/montserrat-light.woff") format("woff"), url("../fonts/montserrat-light.ttf") format("truetype"), url("../fonts/montserrat-light.svg#montserrat-light") format("svg"); }

@font-face { font-family: "montserrat-regular"; font-weight: normal; font-style: normal; src: url("../fonts/montserrat-regular.eot"); src: url("../fonts/montserrat-regular.eot?#iefix") format("embedded-opentype"), url("../fonts/montserrat-regular.woff2") format("woff2"), url("../fonts/montserrat-regular.woff") format("woff"), url("../fonts/montserrat-regular.ttf") format("truetype"), url("../fonts/montserrat-regular.svg#montserrat-regular") format("svg"); }

@font-face { font-family: "montserrat-semibold"; font-weight: normal; font-style: normal; src: url("../fonts/montserrat-semibold.eot"); src: url("../fonts/montserrat-semibold.eot?#iefix") format("embedded-opentype"), url("../fonts/montserrat-semibold.woff2") format("woff2"), url("../fonts/montserrat-semibold.woff") format("woff"), url("../fonts/montserrat-semibold.ttf") format("truetype"), url("../fonts/montserrat-semibold.svg#montserrat-semibold") format("svg"); }

@font-face { font-family: "montserrat-bold"; font-weight: normal; font-style: normal; src: url("../fonts/montserrat-bold.eot"); src: url("../fonts/montserrat-bold.eot?#iefix") format("embedded-opentype"), url("../fonts/montserrat-bold.woff2") format("woff2"), url("../fonts/montserrat-bold.woff") format("woff"), url("../fonts/montserrat-bold.ttf") format("truetype"), url("../fonts/montserrat-bold.svg#montserrat-bold") format("svg"); }

@font-face { font-family: "fonticons"; src: url("../fonts/fonticons.eot"); src: url("../fonts/fonticons.eot?#iefix") format("embedded-opentype"), url("../fonts/fonticons.woff") format("woff"), url("../fonts/fonticons.ttf") format("truetype"), url("../fonts/fonticons.svg#fonticons") format("svg"); font-weight: normal; font-style: normal; }

[data-icon]:before { font-family: "fonticons" !important; content: attr(data-icon); font-style: normal !important; font-weight: normal !important; font-variant: normal !important; text-transform: none !important; speak: none; line-height: 1; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

[class^="ico-"]:before, [class*=" ico-"]:before { font-family: "fonticons" !important; font-style: normal !important; font-weight: normal !important; font-variant: normal !important; text-transform: none !important; speak: none; line-height: 1; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

.ico-facebook:before { content: "\61"; }

.ico-twitter:before { content: "\62"; }

.ico-google:before { content: "\63"; }

.ico-instagram:before { content: "\64"; }

.ico-chevron-down:before { content: "\65"; }

.ico-chevron-left:before { content: "\66"; }

.ico-chevron-right:before { content: "\67"; }

.ico-chevron-up:before { content: "\68"; }

.ico-play:before { content: "\69"; }

.ico-camera:before { content: "\6a"; }

/*--------------------------------------------------------------------------------*/
/*GRID 12 COLUMNS*/
/*--------------------------------------------------------------------------------*/
.grid-row { display: flex; flex-wrap: wrap; margin-left: -13px; margin-right: -13px; }

.no-gutter { margin-right: 0; margin-left: 0; }

.no-gutter > .column, .no-gutter > [class*="column-"] { padding-right: 0; padding-left: 0; }

.col_1, .col_2, .col_3, .col_4, .col_5, .col_6, .col_7, .col_8, .col_9, .col_10, .col_11, .col_12, .col, .col_auto, .column-1, .column-2, .column-3, .column-4, .column-5, .column-6, .column-7, .column-8, .column-9, .column-10, .column-11, .column-12, .column, .column-auto { position: relative; width: 100%; padding-left: 13px; padding-right: 13px; }

.column { -ms-flex-preferred-size: 0; flex-basis: 0; -ms-flex-positive: 1; flex-grow: 1; max-width: 100%; }

.column-auto { -ms-flex: 0 0 auto; flex: 0 0 auto; width: auto; max-width: 100%; }

.column-1 { -ms-flex: 0.08333; flex: 0 0 8.33333%; max-width: 8.33333%; }

.column-2 { -ms-flex: 0.16667; flex: 0 0 16.66667%; max-width: 16.66667%; }

.column-3 { -ms-flex: 0.25; flex: 0 0 25%; max-width: 25%; }

.column-4 { -ms-flex: 0.33333; flex: 0 0 33.33333%; max-width: 33.33333%; }

.column-5 { -ms-flex: 0.41667; flex: 0 0 41.66667%; max-width: 41.66667%; }

.column-6 { -ms-flex: 0.5; flex: 0 0 50%; max-width: 50%; }

.column-7 { -ms-flex: 0.58333; flex: 0 0 58.33333%; max-width: 58.33333%; }

.column-8 { -ms-flex: 0.66667; flex: 0 0 66.66667%; max-width: 66.66667%; }

.column-9 { -ms-flex: 0.75; flex: 0 0 75%; max-width: 75%; }

.column-10 { -ms-flex: 0.83333; flex: 0 0 83.33333%; max-width: 83.33333%; }

.column-11 { -ms-flex: 0.91667; flex: 0 0 91.66667%; max-width: 91.66667%; }

.column-12 { -ms-flex: 1; flex: 0 0 100%; max-width: 100%; }

@font-face { font-family: "detiknetwork-FF"; font-weight: normal; font-style: normal; src: url("../fonts/icons/detiknetwork.eot"); src: url("../fonts/icons/detiknetwork.eot?#iefix") format("embedded-opentype"), url("../fonts/icons/detiknetwork.woff2") format("woff2"), url("../fonts/icons/detiknetwork.woff") format("woff"), url("../fonts/icons/detiknetwork.ttf") format("truetype"), url("../fonts/icons/detiknetwork.svg#detiknetwork") format("svg"); font-display: fallback; }

.icon { line-height: 0; display: inline-block; vertical-align: middle; }

.btn .icon { margin-top: -1px; }

.icon--xxl { font-size: 256px; }

.icon--xl { font-size: 128px; }

.icon--lg { font-size: 64px; }

.icon--md { font-size: 32px; }

.icon--sm { font-size: 24px; }

.icon--xs { font-size: 16px; }

[data-icon]:before { font-family: "detiknetwork-FF" !important; content: attr(data-icon); font-style: normal !important; font-weight: normal !important; font-variant: normal !important; text-transform: none !important; speak: none; line-height: 1; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; vertical-align: middle; }

[class^="icon-"]:before, [class*=" icon-"]:before { font-family: "detiknetwork-FF" !important; font-style: normal !important; font-weight: normal !important; font-variant: normal !important; text-transform: none !important; speak: none; line-height: 1; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; vertical-align: middle; }

.icon-home:before { content: "\63"; }

.icon-home-bg:before { content: "\64"; }

.icon-chevron-right:before { content: "\65"; }

.icon-chevron-right-bg:before { content: "\66"; }

.icon-chevron-left:before { content: "\67"; }

.icon-chevron-left-bg:before { content: "\68"; }

.icon-arrow-right:before { content: "\69"; }

.icon-arrow-left:before { content: "\6a"; }

.icon-chevron-up:before { content: "\6b"; }

.icon-chevron-up-bg:before { content: "\6c"; }

.icon-chevron-down:before { content: "\6d"; }

.icon-chevron-down-bg:before { content: "\6e"; }

.icon-arrow-up:before { content: "\6f"; }

.icon-arrow-down:before { content: "\70"; }

.icon-search:before { content: "\71"; }

.icon-search-bg:before { content: "\72"; }

.icon-user:before { content: "\73"; }

.icon-user-bg:before { content: "\74"; }

.icon-live-tv:before { content: "\75"; }

.icon-live-tv-bg:before { content: "\76"; }

.icon-tv:before { content: "\77"; }

.icon-tv-bg:before { content: "\78"; }

.icon-menu:before { content: "\79"; }

.icon-menu-bg:before { content: "\7a"; }

.icon-lock:before { content: "\41"; }

.icon-lock-bg:before { content: "\42"; }

.icon-open-lock:before { content: "\43"; }

.icon-open-lock-bg:before { content: "\44"; }

.icon-doc:before { content: "\45"; }

.icon-doc-bg:before { content: "\46"; }

.icon-calendar:before { content: "\47"; }

.icon-calendar-bg:before { content: "\48"; }

.icon-check:before { content: "\49"; }

.icon-check-bg:before { content: "\4a"; }

.icon-trash:before { content: "\4b"; }

.icon-trash-bg:before { content: "\4c"; }

.icon-pencil:before { content: "\4d"; }

.icon-pencil-bg:before { content: "\4e"; }

.icon-close:before { content: "\4f"; }

.icon-close-bg:before { content: "\50"; }

.icon-card:before { content: "\51"; }

.icon-card-bg:before { content: "\52"; }

.icon-network:before { content: "\53"; }

.icon-network-bg:before { content: "\54"; }

.icon-email:before { content: "\55"; }

.icon-email-bg:before { content: "\56"; }

.icon-info:before { content: "\57"; }

.icon-info-bg:before { content: "\58"; }

.icon-warning:before { content: "\59"; }

.icon-warning-bg:before { content: "\5a"; }

.icon-video:before { content: "\30"; }

.icon-video-bg:before { content: "\31"; }

.icon-image:before { content: "\32"; }

.icon-image-bg:before { content: "\33"; }

.icon-file-text:before { content: "\34"; }

.icon-file-text-bg:before { content: "\35"; }

.icon-graphic:before { content: "\36"; }

.icon-graphic-bg:before { content: "\37"; }

.icon-folder:before { content: "\38"; }

.icon-folder-bg:before { content: "\39"; }

.icon-notification:before { content: "\21"; }

.icon-notification-bg:before { content: "\22"; }

.icon-download:before { content: "\23"; }

.icon-download-bg:before { content: "\24"; }

.icon-upload:before { content: "\25"; }

.icon-upload-bg:before { content: "\26"; }

.icon-filter:before { content: "\27"; }

.icon-filter-bg:before { content: "\28"; }

.icon-sent-mail:before { content: "\29"; }

.icon-sent-mail-bg:before { content: "\2a"; }

.icon-play:before { content: "\2b"; }

.icon-play-bg:before { content: "\2c"; }

.icon-comment:before { content: "\2d"; }

.icon-comment-bg:before { content: "\2e"; }

.icon-plus:before { content: "\2f"; }

.icon-plus-bg:before { content: "\3a"; }

.icon-favorite:before { content: "\3b"; }

.icon-favorite-bg:before { content: "\3c"; }

.icon-share:before { content: "\3d"; }

.icon-share-bg:before { content: "\3e"; }

.icon-setting:before { content: "\3f"; }

.icon-setting-bg:before { content: "\40"; }

.icon-crown:before { content: "\5b"; }

.icon-crown-bg:before { content: "\5d"; }

.icon-zoom:before { content: "\5e"; }

.icon-zoom-bg:before { content: "\5f"; }

.icon-quote-right:before { content: "\60"; }

.icon-quote-left:before { content: "\7b"; }

.icon-camera:before { content: "\7c"; }

.icon-camera-bg:before { content: "\7d"; }

.icon-link:before { content: "\7e"; }

.icon-link-bg:before { content: "\5c"; }

.icon-love:before { content: "\e000"; }

.icon-love-bg:before { content: "\e001"; }

.icon-sign-out:before { content: "\e002"; }

.icon-sign-out-bg:before { content: "\e003"; }

.icon-sign-in:before { content: "\e004"; }

.icon-sign-in-bg:before { content: "\e005"; }

.icon-facebook:before { content: "\61"; }

.icon-twitter:before { content: "\62"; }

.icon-instagram:before { content: "\e006"; }

.icon-linkedin:before { content: "\e007"; }

.icon-youtube:before { content: "\e008"; }

.icon-refresh:before { content: "\e009"; }

/*--------------------------------------------------------------------------------*/
/*EXTENDS*/
/*--------------------------------------------------------------------------------*/
.footer-nav .nav__item { font-weight: 400; }

.sitemap-nav .nav__item { font-weight: 300; }

.nav, .navbar-main, .footer-nav--title { font-weight: 600; }

.icon { font-family: "Helvetica", Helvetica-FF, Arial, Tahoma, sans-serif; }

.nav, .navbar-main, .footer-title, .footer-nav--title, .live-streaming .media-partner { font-family: "Montserrat", Montserrat-FF, Arial, Tahoma, sans-serif; }

.banner-header { display: -webkit-box; display: -ms-flexbox; display: -webkit-flex; display: flex; }

.nav, .static-nav .nav__item a, .nav--center, .nav--right, .navbar-first, .navbar-nav { display: -webkit-box; display: -ms-flexbox; display: -webkit-flex; display: flex; flex-flow: wrap; }

.top-wrap--streaming, .logo-top, .navbar-main { justify-content: space-between; display: -webkit-box; display: -ms-flexbox; display: -webkit-flex; display: flex; flex-flow: wrap; align-items: center; }

.icon-item { text-align: center !important; }

.btn, .detail-body__tag .nav__item, .navbar-first, .navbar-second, .navbar--bg, .dropdown-menu__content { border-radius: 4px; }

.circle, .nav__item--new a:after, .nav__item--live a:after { border-radius: 50%; }

.btn:hover, .box .title_box a:hover, .text_inside .date, .icon_inside, .navbar-nav__item a:hover, .navbar-nav__item--active a, .dropdown-aktif .dropdown { opacity: 0.8; filter: alpha(opacity=80); }

.footer-nav--title { color: #000000; }

.navbar-nav__item a { color: #FFFFFF; }

.dropdown-aktif .dropdown, .dropdown-menu { background: #000000; }

.nav__item--new a:after, .nav__item--live a:after { background: #FF0000; }

@media (min-width: 1024px) and (max-width: 1280px) { .navbar-first .nav__item a { padding: 12px 8px; } }

.nav__item--new a:after, .nav__item--live a:after { content: ""; width: 5px; height: 5px; position: absolute; top: 12px; right: 0; margin-left: 4px; overflow: hidden; }

.nav--column .nav__item--new a:after, .nav__item--new .nav--column a:after, .nav--column .nav__item--live a:after, .nav__item--live .nav--column a:after { top: 4px; }

.navbar-first .nav, .navbar-second .nav { margin-left: 8px; }

.nav { position: relative; list-style: none; margin: 0; padding: 0; font-size: 14px; }

.nav a { display: block; }

.nav__item { position: relative; padding: 0; }

.nav__item a { padding: 12px 10px; }

.navbar-first .nav__item a { color: #FFFFFF; }

.navbar-first .nav__item a:hover { color: #fcc43f; }

.navbar-second .nav__item a { padding: 12px 8px; }

.nav--column .nav__item a { padding: 4px 0; }

.footer-nav .nav__item a { font-size: 12px; color: #333333; }

.static-nav .nav__item a { padding: 12px 0; font-size: 14px; }

.static-nav .nav__item a:hover { color: var(--kuler-3); }

.sitemap-nav .nav__item a { padding: 4px 0; font-size: 14px; color: #333333; }

.sitemap-nav .nav__item a:hover { color: var(--kuler-3); }

.nav__item--active a { color: var(--kuler-1); }

.navbar-first .nav__item--active a { color: #fcc43f; }

.static-nav .nav__item--active a { color: var(--kuler-3); }

.nav__item--new { position: relative; }

.nav__item--new a { color: #75b72e; }

.nav__item--live { position: relative; }

.nav__item--live a { color: var(--kuler-1); }

.nav--column .nav__item { display: inline-block; width: 100%; vertical-align: top; }

.detail-body__tag .nav__item { background: #f0f0f0; margin-right: 8px; margin-bottom: 8px; padding: 8px; }

.static-nav .nav__item { border-bottom: 1px solid #e6e6e6; }

.static-nav .nav__item a { justify-content: space-between; }

.nav--center { justify-content: center; }

.nav--right { justify-content: flex-end; }

.nav--column { flex-direction: column; width: 100%; }

.nav--column-2 { display: inherit; -webkit-column-count: 2; -moz-column-count: 2; column-count: 2; }

.nav--column-3 { display: inherit; -webkit-column-count: 3; -moz-column-count: 3; column-count: 3; }

.nav--column-4 { display: inherit; -webkit-column-count: 4; -moz-column-count: 4; column-count: 4; }

.navbar { position: relative; }

.navbar-first { margin-top: 16px; background: #21409A; /* Old browsers */ background: -moz-linear-gradient(right, #21409a 50%, #007cbd 100%); /* FF3.6+ */ background: -webkit-linear-gradient(right, #21409a 50%, #007cbd 100%); /* Chrome10-25,Safari5.1-6 */ background: linear-gradient(to right, #21409a 50%, #007cbd 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */ filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$start_color', endColorstr='$end_color',GradientType=1 ); /* IE6-9 */ }

.navbar-second, .navbar--bg { background: #f0f0f0; }

.icon-item { position: relative; display: inline-flex; align-items: center; justify-content: center; margin: 5px 2px; cursor: pointer; width: 30px; height: 30px; font-size: 18px; border-radius: 50%; }

.icon-item__fb, .icon-item__fb:hover { color: #FFFFFF; background: #3C5A99; }

.icon-item__tw, .icon-item__tw:hover { color: #FFFFFF; background: #1DA1F2; }

.icon-item__ig, .icon-item__ig:hover { color: #FFFFFF; background: #5851DB; /* Old browsers */ background: -moz-radial-gradient(left bottom, ellipse cover, #ffdc80 15%, #e1306c 55%, #5851db 100%); /* FF3.6+ */ background: -webkit-radial-gradient(left bottom, ellipse cover, #ffdc80 15%, #e1306c 55%, #5851db 100%); /* Chrome10-25,Safari5.1-6 */ background: radial-gradient(ellipse at left bottom, #ffdc80 15%, #e1306c 55%, #5851db 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */ filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$top_color', endColorstr='$bottom_color',GradientType=1 ); /* IE6-9 */ }

.icon-item__in, .icon-item__in:hover { color: #FFFFFF; background: #0077B5; }

.icon-item__yt, .icon-item__yt:hover { color: #FFFFFF; background: #FF0000; }

.detail__top-follow .icon-item { color: #666666; margin: 0; }

.icon-logo { position: absolute; z-index: 1; top: 8px; right: 8px; }

.icon-logo img { display: block; max-height: 26px; max-width: 75px; }

.header-main { margin: 0 0 40px; position: relative; }

.header-main:before, .header-main:after { position: absolute; content: ""; top: 0; left: 0; right: 0; bottom: 0%; }

.theme-dark .header-main:before, .theme-light .header-main:before, .theme-dark .header-main:after, .theme-light .header-main:after { bottom: -50%; }

.header-main:before { background-color: #21409A; background-image: url("https://akcdn.detik.net.id/community/media/tagsite/2020/02/13/tgs_783a27c51265bcaf3acfdf09afcae2f6.jpg?w=1024&q=90"); background-repeat: no-repeat; background-position: center top; background-size: cover; background-attachment: fixed; }

.header-main:after { top: -25%; background: #000000; /* Old browsers */ background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.9) 0%, rgba(255, 255, 255, 0) 100%); /* FF3.6+ */ background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.9) 0%, rgba(255, 255, 255, 0) 100%); /* Chrome10-25,Safari5.1-6 */ background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(255, 255, 255, 0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */ filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$start_color', endColorstr='$end_color',GradientType=1 ); /* IE6-9 */ }

.theme-dark .header-main:after { background: #000000; /* Old browsers */ background: -moz-linear-gradient(top, black 0%, rgba(255, 255, 255, 0) 100%); /* FF3.6+ */ background: -webkit-linear-gradient(top, black 0%, rgba(255, 255, 255, 0) 100%); /* Chrome10-25,Safari5.1-6 */ background: linear-gradient(to top, black 0%, rgba(255, 255, 255, 0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */ filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$start_color', endColorstr='$end_color',GradientType=1 ); /* IE6-9 */ }

.theme-light .header-main:after { background: #ffffff; /* Old browsers */ background: -moz-linear-gradient(top, white 0%, rgba(255, 255, 255, 0) 100%); /* FF3.6+ */ background: -webkit-linear-gradient(top, white 0%, rgba(255, 255, 255, 0) 100%); /* Chrome10-25,Safari5.1-6 */ background: linear-gradient(to top, white 0%, rgba(255, 255, 255, 0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */ filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$start_color', endColorstr='$end_color',GradientType=1 ); /* IE6-9 */ }

.logo-main { width: 400px; position: relative; display: inline-block; margin: 50px 0; z-index: 1; color: #fff; }

.logo-main--streaming { width: 960px; margin-left: auto; margin-right: auto; display: block; text-align: center; }

.theme-light .logo-main { color: #000; }

.logo-main__img img { max-width: 275px; max-height: 200px; margin: 0 0 10px; }

.logo-main__tagline { line-height: 1.25; -webkit-text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75); -moz-text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75); -o-text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75); -ms-text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75); text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75); }

.logo-main__tagline h1 { font-size: 30px; }

.theme-light .logo-main__tagline { -webkit-text-shadow: 2px 2px 0 rgba(255, 255, 255, 0.75); -moz-text-shadow: 2px 2px 0 rgba(255, 255, 255, 0.75); -o-text-shadow: 2px 2px 0 rgba(255, 255, 255, 0.75); -ms-text-shadow: 2px 2px 0 rgba(255, 255, 255, 0.75); text-shadow: 2px 2px 0 rgba(255, 255, 255, 0.75); }

.logo-main__intro { margin: 15px 0 0; font-size: 16px; }

.head-video-only .logo-main { display: none; }

.logo-top { position: relative; margin: 20px 0 0; z-index: 2; }

.top-wrap--streaming .logo-top { margin: 40px 0 16px; }

.logo-top--portrait, .logo-top--center { justify-content: center; }

.logo-top .logo { max-width: 335px; max-height: 250px; }

.top-wrap--streaming .logo-top .logo { max-width: 400px; }

@media (min-width: 1024px) and (max-width: 1280px) { .logo-top .logo { max-width: 235px; max-height: 70px; } }

.logo-top.logo-top--portrait .logo { margin-bottom: 10px; }

@media (min-width: 1024px) and (max-width: 1280px) { .logo-top.logo-top--portrait .logo { max-width: 400px; max-height: 250px; } }

.player-header, .banner-header { width: 460px; float: right; margin: 50px 0; position: relative; z-index: 2; }

.banner-header { height: 250px; justify-content: center; background: #000; /* The Fallback */ background: rgba(0, 0, 0, 0.5); }

.l_content { position: relative; float: left; width: 720px; width: 650px; }

.r_content { position: relative; float: right; width: 300px; }

.lqd { background-size: cover; background-position: center top; background-repeat: no-repeat; }

.tabs-menu { font-size: 18px; margin: 0 0 25px; }

.tabs-menu__item { position: relative; display: inline-block; padding: 5px 15px; margin: 0 20px 0 0; color: #626262; border-bottom: 4px solid transparent; }

.theme-dark .tabs-menu__item { color: #fff; }

.tabs-menu__item:hover { color: #626262; border-bottom: 4px solid #214099; }

.theme-dark .tabs-menu__item:hover { color: #fff; }

.tabs-menu__item--active { border-bottom: 4px solid #214099; }

.sub_title { color: #ff7c00; font-size: 13px; font-family: montserrat-semibold, Helvetica, Arial; }

.date { color: #A6A6A6; font-size: 11px; display: inline-block; margin-bottom: 4px; }

li.native-ads-d { list-style: none; }

li.native-ads-d .ads_native_d { overflow: hidden; margin-bottom: 10px; padding-bottom: 10px; }

li.native-ads-d .ads_native_d .an_box_img { position: relative; }

li.native-ads-d .ads_native_d .an_box_img:before { display: block; content: ""; width: 100%; padding-top: 75%; }

li.native-ads-d .ads_native_d .an_box_img .img_con { position: absolute; top: 0; left: 0; right: 0; bottom: 0; }

li.native-ads-d .ads_native_d .an_desk { margin: 10px 0 0; }

li.native-ads-d .ads_native_d .an_desk h2 { margin: 3px 0 10px; }

li.native-ads-d .ads_native_d .an_desk .an_sub { font-size: 13px; color: #ff7c00; }

li.native-ads-d .ads_native_d .an_desk .an_label { font-size: 13px; color: #ff7c00; }

li.native-ads-d .ads_native_d .an_desk .an_text { font-size: 13px; margin: 0 0 5px; }

.ads_native_d { overflow: hidden; margin-bottom: 10px; padding-bottom: 10px; }

.ads_native_d .an_box_img { position: relative; }

.ads_native_d .an_box_img:before { display: block; content: ""; width: 100%; padding-top: 75%; }

.ads_native_d .an_box_img .img_con { position: absolute; top: 0; left: 0; right: 0; bottom: 0; }

.ads_native_d .an_desk { margin: 10px 0 0; }

.ads_native_d .an_desk h2 { margin: 3px 0 10px; }

.ads_native_d .an_desk .an_sub { font-size: 13px; color: #ff7c00; }

.ads_native_d .an_desk .an_label { font-size: 13px; color: #ff7c00; }

.ads_native_d .an_desk .an_text { font-size: 13px; margin: 0 0 5px; }

.an_4_3 .ads_native_d .an_box_img:before { padding-top: 75%; }

.an_text_hide .ads_native_d .an_text { font-size: 13px; display: none; }

.an_box_img .img_con { display: flex; align-items: center; justify-content: center; flex-direction: column; width: 100%; text-align: center; background-color: rgba(33, 33, 33, 0.1); overflow: hidden; -webkit-border-radius: 5px; -moz-border-radius: 5px; -o-border-radius: 5px; border-radius: 5px; }

.an_box_img .img_con img { width: unset; height: unset; max-height: -moz-available; max-height: -webkit-fill-available; max-height: fill-available; }

.lqd_img { width: 150%; height: 150%; background-size: cover; filter: blur(10px); -webkit-filter: blur(10px); position: absolute; top: -25%; left: -25%; z-index: 0; }

.list.media_rows .ads_native_d, .list.media_rows .adsmart_list_artikel { display: -webkit-box; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-box-flex: 1; }

.list.media_rows .ads_native_d .an_desk, .list.media_rows .adsmart_list_artikel .an_desk { margin: 0 0 0 25px; padding: 0; width: 100%; -ms-flex: 1 0 0px; flex: 1; }

.list.media_rows .ads_native_d .an_desk h2, .list.media_rows .adsmart_list_artikel .an_desk h2 { font-size: 20px; }

.list.media_rows .ads_native_d .an_box_img, .list.media_rows .adsmart_list_artikel .an_box_img { width: 220px; display: table; -webkit-border-radius: 5px; -moz-border-radius: 5px; -o-border-radius: 5px; border-radius: 5px; }

.cols .ads_native_d .an_box_img .img_con img { height: inherit; }

.cols .ads_native_d .an_desk h2 { font-size: 16px; }

.navbar-main { position: relative; z-index: 10; margin-top: 20px; background: #000000; /* The Fallback */ background: rgba(0, 0, 0, 0.3); border-radius: 8px; }

.top-wrap--streaming .navbar-main { margin: 28px 0 16px; }

.navbar-nav { position: relative; list-style: none; margin: 0; padding: 0; font-size: 16px; }

.navbar-nav__item { padding: 0; }

.navbar-nav__item a { display: block; padding: 12px 16px; }

.footer { position: relative; background: #f0f0f0; }

.footer__logo { margin: 12px 0 8px; display: inline-block; }

.footer__logo img { width: 189px; }

.footer-title { font-size: 12px; }

.footer-title__copyright { color: #666666; margin-top: 40px; }

.footer-title__connect { color: #333333; margin-bottom: 4px; }

.footer-title__partof { color: #666666; padding: 4px 0; }

.footer-title__partof img { width: 80px; vertical-align: bottom; margin: 0 0 5px 3px; }

.footer__social { margin-top: 40px; margin-bottom: 4px; }

.footer__grid { padding: 32px 0 52px; }

.footer-nav { padding-top: 24px; padding-bottom: 12px; padding-left: 24px; }

.footer-nav--title { font-size: 14px; margin-bottom: 8px; }

.footer__border { height: 4px; background: #21409A; /* Old browsers */ background: -moz-linear-gradient(right, #21409a 0%, #007cbd 100%); /* FF3.6+ */ background: -webkit-linear-gradient(right, #21409a 0%, #007cbd 100%); /* Chrome10-25,Safari5.1-6 */ background: linear-gradient(to right, #21409a 0%, #007cbd 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */ filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$start_color', endColorstr='$end_color',GradientType=1 ); /* IE6-9 */ }

.dropdown { position: relative; -webkit-transition: all 0.25s ease-in-out 0s; -moz-transition: all 0.25s ease-in-out 0s; -ms-transition: all 0.25s ease-in-out 0s; -o-transition: all 0.25s ease-in-out 0s; transition: all 0.25s ease-in-out 0s; }

.dropdown--lainnya { border-top-right-radius: 8px; }

.dropdown a:focus, .dropdown:focus { outline: none; }

.dropdown-wrap { display: inline-block; position: relative; }

.dropdown-menu { text-align: left; padding-top: 12px; display: block; min-width: 180px; position: absolute; top: 100%; left: 0; max-height: 0; visibility: hidden; overflow: hidden; z-index: 3; opacity: 0; filter: alpha(opacity=0); -webkit-transition: all 0.25s ease-in-out 0s; -moz-transition: all 0.25s ease-in-out 0s; -ms-transition: all 0.25s ease-in-out 0s; -o-transition: all 0.25s ease-in-out 0s; transition: all 0.25s ease-in-out 0s; border-bottom-right-radius: 8px; border-bottom-left-radius: 8px; }

.dropdown-menu li { padding: 0; }

.dropdown-menu .navbar-nav__item a { padding: 8px 24px; }

.dropdown-menu .navbar-nav__item:last-child { margin-bottom: 12px; }

.dropdown-menu__content { min-width: 200px; position: relative; margin: 8px; background: #FFFFFF; box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15); }

.dropdown-menu__content:after { content: ""; position: absolute; left: 28px; width: 0; height: 0; top: 0; border: 6px solid black; border-color: transparent transparent #FFFFFF #FFFFFF; transform-origin: 0 0; transform: rotate(135deg); box-shadow: -2px 2px 4px 0 rgba(0, 0, 0, 0.05); }

.dropdown-menu--right .dropdown-menu__content:after { left: auto; right: 2px; }

.dropdown-menu--right { left: auto; right: 0; border-top-right-radius: 0; }

.dropdown-menu--top { top: unset; bottom: 100%; margin-top: 0; margin-bottom: 4px; }

.dropdown-menu--top .dropdown-menu__content:after { transform: rotate(-45deg); top: 100%; right: 12px; }

.dropdown-aktif .dropdown-menu { max-height: 500px; visibility: visible; opacity: 1; filter: alpha(opacity=100); }

.dropdown-aktif .dropdown .icon-chevron-down, .dropdown-aktif .dropdown .icon-chevron-up { -webkit-transform: rotate(180deg); -moz-transform: rotate(180deg); -ms-transform: rotate(180deg); -o-transform: rotate(180deg); transform: rotate(180deg); }

.dropdown > .icon { -webkit-transition: all 0.25s ease-in-out 0s; -moz-transition: all 0.25s ease-in-out 0s; -ms-transition: all 0.25s ease-in-out 0s; -o-transition: all 0.25s ease-in-out 0s; transition: all 0.25s ease-in-out 0s; }

.live-streaming { margin-bottom: 32px; position: relative; z-index: 2; clear: both; }

.live-streaming .media-partner { text-align: center; margin-left: -10px; margin-right: -10px; color: #FFFFFF; }

.komentar { border: 1px solid #cccccc; height: 611px; overflow: auto !important; -webkit-overflow-scrolling: touch !important; padding: 5px; background: #fff; /* The Fallback */ background: rgba(255, 255, 255, 0.8); }

@media (min-width: 1024px) and (max-width: 1280px) { .komentar { height: 543px; } }

.bottom_banner { margin: 0 auto; width: auto; position: absolute; bottom: 0; z-index: 4; padding: 0px; left: 50%; transform: translateX(-50%); -webkit-transform: translateX(-50%); -o-transform: translateX(-50%); }

.bottom_banner img { display: block; }

.bottom_banner_bar { width: 100%; min-height: 50px; position: fixed; bottom: 0; z-index: 5; }

.bottom_banner .close_tbot { float: right; margin-right: 0; margin-top: -65px; cursor: pointer; }

.theme-1 .tabs-menu__item--active, .theme-1 .tabs-menu__item:hover { border-color: #927f3c; }

.theme-1 .paging a.selected, .theme-1 .paging a:hover { color: #fff; background: #927f3c; }

.theme-1 .paging a.selected .icon, .theme-1 .paging a:hover .icon { color: #fff; }

.theme-1 .paging a .icon { color: #fff; }

.theme-1 .btn { background: #927f3c; }

.theme-1 .title_box--theme { background: #927f3c; color: #fff; }

.theme-2 .tabs-menu__item--active, .theme-2 .tabs-menu__item:hover { border-color: #42b549; }

.theme-2 .paging a.selected, .theme-2 .paging a:hover { color: #fff; background: #42b549; }

.theme-2 .paging a.selected .icon, .theme-2 .paging a:hover .icon { color: #fff; }

.theme-2 .paging a .icon { color: #fff; }

.theme-2 .btn { background: #42b549; }

.theme-2 .title_box--theme { background: #42b549; color: #fff; }

.theme-3 .tabs-menu__item--active, .theme-3 .tabs-menu__item:hover { border-color: #f43059; }

.theme-3 .paging a.selected, .theme-3 .paging a:hover { color: #fff; background: #f43059; }

.theme-3 .paging a.selected .icon, .theme-3 .paging a:hover .icon { color: #fff; }

.theme-3 .paging a .icon { color: #fff; }

.theme-3 .btn { background: #f43059; }

.theme-3 .title_box--theme { background: #f43059; color: #fff; }

.theme-4 .tabs-menu__item--active, .theme-4 .tabs-menu__item:hover { border-color: #ff5c26; }

.theme-4 .paging a.selected, .theme-4 .paging a:hover { color: #fff; background: #ff5c26; }

.theme-4 .paging a.selected .icon, .theme-4 .paging a:hover .icon { color: #fff; }

.theme-4 .paging a .icon { color: #fff; }

.theme-4 .btn { background: #ff5c26; }

.theme-4 .title_box--theme { background: #ff5c26; color: #fff; }

.pdb-counter:after { padding-top: calc(56.25% + 38px) !important; }
