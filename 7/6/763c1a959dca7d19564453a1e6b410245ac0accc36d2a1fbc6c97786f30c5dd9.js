"use strict";

const OFFLINE_DATA_FILE = "offline.js";
const CACHE_NAME_PREFIX = "c2offline";
const BROADCASTCHANNEL_NAME = "offline";
const CONSOLE_PREFIX = "[SW] ";
const LAZYLOAD_KEYNAME = "";

// Create a BroadcastChannel if supported.
const broadcastChannel = (typeof BroadcastChannel === "undefined" ? null : new BroadcastChannel(BROADCASTCHANNEL_NAME));

//////////////////////////////////////
// Utility methods
function PostBroadcastMessage(o)
{
	if (!broadcastChannel)
		return;		// not supported
	
	// Impose artificial (and arbitrary!) delay of 3 seconds to make sure client is listening by the time the message is sent.
	// Note we could remove the delay on some messages, but then we create a race condition where sometimes messages can arrive
	// in the wrong order (e.g. "update ready" arrives before "started downloading update"). So to keep the consistent ordering,
	// delay all messages by the same amount.
	setTimeout(() => broadcastChannel.postMessage(o), 3000);
};

function Broadcast(type)
{
	PostBroadcastMessage({
		"type": type
	});
};

function BroadcastDownloadingUpdate(version)
{
	PostBroadcastMessage({
		"type": "downloading-update",
		"version": version
	});
}

function BroadcastUpdateReady(version)
{
	PostBroadcastMessage({
		"type": "update-ready",
		"version": version
	});
}

function IsUrlInLazyLoadList(url, lazyLoadList)
{
	if (!lazyLoadList)
		return false;		// presumably lazy load list failed to load
	
	try {
		for (const lazyLoadRegex of lazyLoadList)
		{
			if (new RegExp(lazyLoadRegex).test(url))
				return true;
		}
	}
	catch (err)
	{
		console.error(CONSOLE_PREFIX + "Error matching in lazy-load list: ", err);
	}
	
	return false;
};

function WriteLazyLoadListToStorage(lazyLoadList)
{
	if (typeof localforage === "undefined")
		return Promise.resolve();		// bypass if localforage not imported
	else
		return localforage.setItem(LAZYLOAD_KEYNAME, lazyLoadList)
};

function ReadLazyLoadListFromStorage()
{
	if (typeof localforage === "undefined")
		return Promise.resolve([]);		// bypass if localforage not imported
	else
		return localforage.getItem(LAZYLOAD_KEYNAME);
};

function GetCacheBaseName()
{
	// Include the scope to avoid name collisions with any other SWs on the same origin.
	// e.g. "c2offline-https://example.com/foo/" (won't collide with anything under bar/)
	return CACHE_NAME_PREFIX + "-" + self.registration.scope;
};

function GetCacheVersionName(version)
{
	// Append the version number to the cache name.
	// e.g. "c2offline-https://example.com/foo/-v2"
	return GetCacheBaseName() + "-v" + version;
};

// Return caches.keys() filtered down to just caches we're interested in (with the right base name).
// This filters out caches from unrelated scopes.
async function GetAvailableCacheNames()
{
	const cacheNames = await caches.keys();
	const cacheBaseName = GetCacheBaseName();
	return cacheNames.filter(n => n.startsWith(cacheBaseName));
};

// Identify if an update is pending, which is the case when we have 2 or more available caches.
// One must be an update that is waiting, since the next navigate that does an upgrade will
// delete all the old caches leaving just one currently-in-use cache.
async function IsUpdatePending()
{
	const availableCacheNames = await GetAvailableCacheNames();
	return (availableCacheNames.length >= 2);
};

// Automatically deduce the main page URL (e.g. index.html or main.aspx) from the available browser windows.
// This prevents having to hard-code an index page in the file list, implicitly caching it like AppCache did.
async function GetMainPageUrl()
{
	const allClients = await clients.matchAll({
		includeUncontrolled: true,
		type: "window"
	});
	
	for (const c of allClients)
	{
		// Parse off the scope from the full client URL, e.g. https://example.com/index.html -> index.html
		let url = c.url;
		if (url.startsWith(self.registration.scope))
			url = url.substring(self.registration.scope.length);
		
		if (url && url !== "/")		// ./ is also implicitly cached so don't bother returning that
		{
			// If the URL is solely a search string, prefix it with / to ensure it caches correctly.
			// e.g. https://example.com/?foo=bar needs to cache as /?foo=bar, not just ?foo=bar.
			if (url.startsWith("?"))
				url = "/" + url;
			
			return url;
		}
	}
	
	return "";		// no main page URL could be identified
};

// Hack to fetch optionally bypassing HTTP cache until fetch cache options are supported in Chrome (crbug.com/453190)
function fetchWithBypass(request, bypassCache)
{
	if (typeof request === "string")
		request = new Request(request);
	
	if (bypassCache)
	{
		// bypass enabled: add a random search parameter to avoid getting a stale HTTP cache result
		const url = new URL(request.url);
		url.search += Math.floor(Math.random() * 1000000);

		return fetch(url, {
			headers: request.headers,
			mode: request.mode,
			credentials: request.credentials,
			redirect: request.redirect,
			cache: "no-store"
		});
	}
	else
	{
		// bypass disabled: perform normal fetch which is allowed to return from HTTP cache
		return fetch(request);
	}
};

// Effectively a cache.addAll() that only creates the cache on all requests being successful (as a weak attempt at making it atomic)
// and can optionally cache-bypass with fetchWithBypass in every request
async function CreateCacheFromFileList(cacheName, fileList, bypassCache)
{
	// Kick off all requests and wait for them all to complete
	const responses = await Promise.all(fileList.map(url => fetchWithBypass(url, bypassCache)));
	
	// Check if any request failed. If so don't move on to opening the cache.
	// This makes sure we only open a cache if all requests succeeded.
	let allOk = true;
	
	for (const response of responses)
	{
		if (!response.ok)
		{
			allOk = false;
			console.error(CONSOLE_PREFIX + "Error fetching '" + response.url + "' (" + response.status + " " + response.statusText + ")");
		}
	}
	
	if (!allOk)
		throw new Error("not all resources were fetched successfully");
	
	// Can now assume all responses are OK. Open a cache and write all responses there.
	// TODO: ideally we can do this transactionally to ensure a complete cache is written as one atomic operation.
	// This needs either new transactional features in the spec, or at the very least a way to rename a cache
	// (so we can write to a temporary name that won't be returned by GetAvailableCacheNames() and then rename it when ready).
	const cache = await caches.open(cacheName);
	
	try {
		return await Promise.all(responses.map(
			(response, i) => cache.put(fileList[i], response)
		));
	}
	catch (err)
	{
		// Not sure why cache.put() would fail (maybe if storage quota exceeded?) but in case it does,
		// clean up the cache to try to avoid leaving behind an incomplete cache.
		console.error(CONSOLE_PREFIX + "Error writing cache entries: ", err);
		caches.delete(cacheName);
		throw err;
	}
};

async function UpdateCheck(isFirst)
{
	try {
		// Always bypass cache when requesting offline.js to make sure we find out about new versions.
		const response = await fetchWithBypass(OFFLINE_DATA_FILE, true);
		
		if (!response.ok)
			throw new Error(OFFLINE_DATA_FILE + " responded with " + response.status + " " + response.statusText);
			
		const data = await response.json();
		
		const version = data.version;
		const fileList = data.fileList;
		const lazyLoadList = data.lazyLoad;
		const currentCacheName = GetCacheVersionName(version);
		
		const cacheExists = await caches.has(currentCacheName);

		// Don't recache if there is already a cache that exists for this version. Assume it is complete.
		if (cacheExists)
		{
			// Log whether we are up-to-date or pending an update.
			const isUpdatePending = await IsUpdatePending();
			if (isUpdatePending)
			{
				console.log(CONSOLE_PREFIX + "Update pending");
				Broadcast("update-pending");
			}
			else
			{
				console.log(CONSOLE_PREFIX + "Up to date");
				Broadcast("up-to-date");
			}
			return;
		}
		
		// Implicitly add the main page URL to the file list, e.g. "index.html", so we don't have to assume a specific name.
		const mainPageUrl = await GetMainPageUrl();
		
		// Prepend the main page URL to the file list if we found one and it is not already in the list.
		// Also make sure we request the base / which should serve the main page.
		fileList.unshift("./");
		
		if (mainPageUrl && fileList.indexOf(mainPageUrl) === -1)
			fileList.unshift(mainPageUrl);
		
		console.log(CONSOLE_PREFIX + "Caching " + fileList.length + " files for offline use");
		
		if (isFirst)
			Broadcast("downloading");
		else
			BroadcastDownloadingUpdate(version);
		
		// Note we don't bypass the cache on the first update check. This is because SW installation and the following
		// update check caching will race with the normal page load requests. For any normal loading fetches that have already
		// completed or are in-flight, it is pointless and wasteful to cache-bust the request for offline caching, since that
		// forces a second network request to be issued when a response from the browser HTTP cache would be fine.
		if (lazyLoadList)
			await WriteLazyLoadListToStorage(lazyLoadList);							// dump lazy load list to local storage#
		
		await CreateCacheFromFileList(currentCacheName, fileList, !isFirst);
		const isUpdatePending = await IsUpdatePending();
		
		if (isUpdatePending)
		{
			console.log(CONSOLE_PREFIX + "All resources saved, update ready");
			BroadcastUpdateReady(version);
		}
		else
		{
			console.log(CONSOLE_PREFIX + "All resources saved, offline support ready");
			Broadcast("offline-ready");
		}
	}
	catch (err)
	{
		// Update check fetches fail when we're offline, but in case there's any other kind of problem with it, log a warning.
		console.warn(CONSOLE_PREFIX + "Update check failed: ", err);
	}
};

self.addEventListener("install", event =>
{
	// On install kick off an update check to cache files on first use.
	// If it fails we can still complete the install event and leave the SW running, we'll just
	// retry on the next navigate.
	event.waitUntil(
		UpdateCheck(true)		// first update
		.catch(() => null)
	);
});

async function GetCacheNameToUse(availableCacheNames, doUpdateCheck)
{
	// Prefer the oldest cache available. This avoids mixed-version responses by ensuring that if a new cache
	// is created and filled due to an update check while the page is running, we keep returning resources
	// from the original (oldest) cache only.
	if (availableCacheNames.length === 1 || !doUpdateCheck)
		return availableCacheNames[0];
	
	// We are making a navigate request with more than one cache available. Check if we can expire any old ones.
	const allClients = await clients.matchAll();
	
	// If there are other clients open, don't expire anything yet. We don't want to delete any caches they
	// might be using, which could cause mixed-version responses.
	if (allClients.length > 1)
		return availableCacheNames[0];
	
	// Identify newest cache to use. Delete all the others.
	const latestCacheName = availableCacheNames[availableCacheNames.length - 1];
	console.log(CONSOLE_PREFIX + "Updating to new version");
	
	await Promise.all(
		availableCacheNames.slice(0, -1)
		.map(c => caches.delete(c))
	);
	
	return latestCacheName;
};

async function HandleFetch(event, doUpdateCheck)
{
	const availableCacheNames = await GetAvailableCacheNames();
	
	// No caches available: go to network
	if (!availableCacheNames.length)
		return fetch(event.request);
	
	const useCacheName = await GetCacheNameToUse(availableCacheNames, doUpdateCheck);
	const cache = await caches.open(useCacheName);
	const cachedResponse = await cache.match(event.request);
	
	if (cachedResponse)
		return cachedResponse;		// use cached response
	
	// We need to check if this request is to be lazy-cached. Send the request and load the lazy-load list
	// from storage simultaneously.
	const result = await Promise.all([fetch(event.request), ReadLazyLoadListFromStorage()]);
	const fetchResponse = result[0];
	const lazyLoadList = result[1];
	
	if (IsUrlInLazyLoadList(event.request.url, lazyLoadList))
	{
		// Handle failure writing to the cache. This can happen if the storage quota is exceeded, which is particularly
		// likely in Safari 11.1, which appears to have very tight storage limits. Make sure even in the event of an error
		// we continue to return the response from the fetch.
		try {
			// Note clone response since we also respond with it
			await cache.put(event.request, fetchResponse.clone());
		}
		catch (err)
		{
			console.warn(CONSOLE_PREFIX + "Error caching '" + event.request.url + "': ", err);
		}
	}
		
	return fetchResponse;
};

self.addEventListener("fetch", event =>
{
	/** NOTE (iain)
	 *  This check is to prevent a bug with XMLHttpRequest where if its
	 *  proxied with "FetchEvent.prototype.respondWith" no upload progress
	 *  events are triggered. By returning we allow the default action to
	 *  occur instead. Currently all cross-origin requests fall back to default.
	 */
	if (new URL(event.request.url).origin !== location.origin)
		return;
		
	// Check for an update on navigate requests
	const doUpdateCheck = (event.request.mode === "navigate");
	
	const responsePromise = HandleFetch(event, doUpdateCheck);

	if (doUpdateCheck)
	{
		// allow the main request to complete, then check for updates
		event.waitUntil(
			responsePromise
			.then(() => UpdateCheck(false))		 // not first check
		);
	}

	event.respondWith(responsePromise);
});oki.com","iso_lang":"nl","paths":{"prefix":"\u002Fnl"}},"69":{"id":69,"lang":"ja","languageName":"日本語","domain":"poki.com","domain_title":"Poki.com","iso_lang":"ja","paths":{"prefix":"\u002Fjp"}},"70":{"id":70,"lang":"he","languageName":"עִברִית","domain":"poki.com","domain_title":"Poki.com","iso_lang":"he","paths":{"prefix":"\u002Fil"}},"71":{"id":71,"lang":"pt","languageName":"Português","domain":"poki.com","domain_title":"Poki.com","iso_lang":"pt-br","paths":{"prefix":"\u002Fbr"}},"72":{"id":72,"lang":"de","languageName":"Deutsch","domain":"poki.com","domain_title":"Poki.com","iso_lang":"de","paths":{"prefix":"\u002Fde"}},"73":{"id":73,"lang":"zh","languageName":"简体中文","domain":"poki.com","domain_title":"Poki.com","iso_lang":"zh","paths":{"prefix":"\u002Fzh"}},"74":{"id":74,"lang":"id","languageName":"Bahasa Indonesia","domain":"poki.com","domain_title":"Poki.com","iso_lang":"id","paths":{"prefix":"\u002Fid"}}},"localisations":{"status":"fulfilled","endpointName":"getLocalisations","requestId":"azSlg4LuVv-Es-Qb6ePEJ","originalArgs":{"site":{"id":3,"lang":"en","languageName":"English","domain":"poki.com","domain_title":"Poki.com","iso_lang":"en","paths":{"prefix":"\u002Fen"}},"geo":"ES"},"startedTimeStamp":1705600530841,"data":{"about":"About","about_title":"About Poki","advertisement":"Advertisement","allow":"Allow","breadcrumb_games":"games","by":"by","check_the_other_games":"This game is not yet available on mobile web. Check out our other games below.","closefeedbackpopup":"Close feedback popup","closesearch":"Close search","cookie_statement":"Cookie Statement","developers":"Developers","dont_ask_again":"Don't ask again","enter_fullscreen":"Full screen","enteryourtext":"Tell us more... and please only share info on the game itself","exit_fullscreen":"Exit full screen","flash_needed":"%game_title flash version no longer works on web.","flash_play_now":"Play now","get_the_app":"Get the app","got_it_play":"Got it, play now!","got_you_covered":"But we’ve got you covered.","help":"Help","home_description":"\u003Cp\u003EPoki has the best free online games selection and offers the most fun experience to play alone or with friends. We offer instant play to all our games without downloads, login, popups or other distractions. Our games are playable on desktop, tablet and mobile so you can enjoy them at home or on the road. Every month over 50 million gamers from all over the world play their favorite games on Poki.\u003C\u002Fp\u003E  \u003Ch3\u003EOur game selection\u003C\u002Fh3\u003E \u003Cp\u003EGame developers release fun \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fnew\"\u003ENew Games\u003C\u002Fa\u003E on our platform on a daily basis. Our most \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fpopular-games\"\u003EPopular Games\u003C\u002Fa\u003E include hits like \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fg\u002Fsubway-surfers\"\u003ESubway Surfers\u003C\u002Fa\u003E, \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fg\u002Ftemple-run-2\"\u003ETemple Run 2\u003C\u002Fa\u003E, \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fg\u002Fstickman-hook\"\u003EStickman Hook\u003C\u002Fa\u003E and \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fg\u002Frodeo-stampede-savannah\"\u003ERodeo Stampede\u003C\u002Fa\u003E. These games are only playable on Poki. We also have online classics like \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fg\u002Fmoto-x3m\"\u003EMoto X3M\u003C\u002Fa\u003E, \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fg\u002Fvenge-io\"\u003EVenge.io\u003C\u002Fa\u003E, \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fg\u002Fdinosaur-game\"\u003EDino Game\u003C\u002Fa\u003E, \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fg\u002Fsmash-karts\"\u003ESmash Karts\u003C\u002Fa\u003E, \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fg\u002F2048\"\u003E2048\u003C\u002Fa\u003E, \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fg\u002Fpenalty-shooters-2\"\u003EPenalty Shooters 2\u003C\u002Fa\u003E and \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fg\u002Fbad-ice-cream\"\u003EBad Ice-Cream\u003C\u002Fa\u003E to play for free. In total we offer more than 1000 game titles.\u003C\u002Fp\u003E  \u003Ch3\u003EStart playing\u003C\u002Fh3\u003E \u003Cp\u003EUnsure what game to play? Start your game discovery on our homepage or pick a game from any of these popular categories:\u003C\u002Fp\u003E \u003Cul\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fpuzzle\"\u003EBrain Games\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fio\"\u003E.io Games\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Ftwo-player\"\u003E2 Player Games\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fcar\"\u003ECar Games\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fshooting\"\u003EShooting Games\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fnew-puzzle\"\u003EPuzzle Games\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E  \u003Ch3\u003EWhat is Poki?\u003C\u002Fh3\u003E \u003Cp\u003EPoki is based in Amsterdam and has a team of 40 people working on our gaming platform. Our goal is to create the ultimate online playground. Free and open to all. Read more about the platform we are building on our \u003Ca href=\"https:\u002F\u002Fabout.poki.com\u002F\"\u003Ecompany\u003C\u002Fa\u003E page. If you are a game developer looking to achieve success for your game on web, discover what we offer and get in touch via \u003Ca href=\"https:\u002F\u002Fdevelopers.poki.com\u002F\"\u003EPoki for Developers\u003C\u002Fa\u003E.\u003C\u002Fp\u003E  \u003Cp\u003E¿Buscas \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fes\" target=\"_blank\"\u003Ejuegos\u003C\u002Fa\u003E de Poki en español?\u003C\u002Fp\u003E  \u003Cp\u003EVous cherchez des \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Ffr\" target=\"_blank\"\u003Ejeux\u003C\u002Fa\u003E Poki en français?\u003C\u002Fp\u003E ","home_meta_description":"Discover the world of free online games with Poki! Play instantly, no downloads, and enjoy games compatible with all devices.","home_meta_title":"Poki - Free Online Games - Play Now!","home_title":"Free Online Games","hosted_third_party":"Please note that this game is hosted on a third-party website.","jobs":"Jobs","loading":"Loading...","try_desktop":"This game is not available on mobile web. Play it on your 💻 or download the app.","more_from":"More from","nav_contact":"Contact","nav_privacy_policy":"Privacy Policy","nav_terms_of_use":"Terms of Use","new":"New","not_found_description":"Sorry, the page you requested does not exist on this site.","not_found_title":"404 not found","play_now":"Play now","something_else":"Play something else?","play_surprise":"Play a surprise game","playingad":"Playing Ad","popular_week":"Popular this week","preparing":"Preparing...","privacy":"Privacy","privacy_statement":"Privacy Statement","privacy_updated_title":"We have updated the Privacy and Cookie Statements. ","privacy_updated_text":"To further inform you on cookies and usage of your data check the Privacy Statement and Cookie Statement in the footer of our website.","privacy_updated_link":"Check out our privacy policy page","recently_played":"Recently played","refer_information":"You should refer to their information regarding cookies and privacy as published on their own website if you click through to this game.","search":"What are you playing today?","search_broken":"Whoops!\u003Cbr \u002F\u003ELooks like something broke. Sorry! Try again in a bit.","search_result":"result:","search_results":"results:","search_short":"Search","search_zero_results":"Hmm, nothing’s coming up for that.\u003Cbr \u002F\u003ETry searching for something else?","see_details":"See Details","send":"Send","similar_game":"Here’s a similar game:","thumbs_down":"Thumbs down","thumbs_up":"Thumbs up","mobile_page_doesnt_exist_yet":"%title is not yet available on mobile and tablets.","update":"Update","votes":"votes","wellbeback":"We’ll be back after this short break","whatdoyoulike":"What do you like about %title","whatdontyoulike":"What don't you like about %title","what_mean_privacy":"What does this mean for my privacy?","migration_message":"You can still play all your favorite games here!","migration_title":"migration title","select_language":"Select your language","thank_you":"Thank you","clear":"clear","jump_to":"jump to","category_schema":"What are the best free %CATEGORY_NAME% online?","category_schema_mobile":"What are the most popular %CATEGORY_NAME% for the mobile phone or tablet?","rotate_device":"Rotate your device to play like a pro","you_might":"You might also like","desktop_only":"Desktop only","got_it":"Got it","game_is_not_available":"%game_title is no longer available.","i_like_it":"Like","i_dont_like_it":"Dislike","fullscreen":"Fullscreen","minimize":"Minimize","remove_vote":"Remove","cookie_consent_body":"We use cookies and other similar technologies to improve your experience on our services, personalize advertising and recommend content of interest to you. By using our services, you consent to such monitoring. We also inform you that we have updated our \u003Ca\u003EPrivacy Policy\u003C\u002Fa\u003E.\n","proceed":"Proceed","help_understand":"Help us understand the bug you found... and please only share info on the bug itself","what_bug":"What bug did you find in %title","auto_redirect_title":"Looks like you speak [language]","auto_redirect_message":"We've updated to match your language settings. Want to go back to [language]?","auto_redirect_button":"Switch back to [language]","categories":"Categories","report_bug":"Report a bug","unavailable_on_ipad":"%game_title doesn't work on iPads","game_meta_title_1":"\u003Cgame_upper\u003E - Play Online for Free! | \u003Csitename\u003E","game_meta_title_2":"\u003Cgame_upper\u003E - Play Online for Free! | \u003Csitename\u003E","game_meta_title_3":"\u003Cgame_upper\u003E - Play Online for Free! | \u003Csitename\u003E","game_meta_title_4":"\u003Cgame_upper\u003E - Play Online for Free! | \u003Csitename\u003E","game_meta_title_5":"\u003Cgame_upper\u003E - Play Online for Free! | \u003Csitename\u003E","game_meta_title_6":"\u003Cgame_upper\u003E - Play for Free! | \u003Csitename\u003E","game_meta_title_7":"\u003Cgame_upper\u003E - Play Now! | \u003Csitename\u003E","game_meta_title_8":"\u003Cgame_upper\u003E - Play! | \u003Csitename\u003E","attach_screenshot":"Attach screenshot of game","tap_to_continue":"Tap to continue"},"fulfilledTimeStamp":1705600530845,"isUninitialized":false,"isLoading":false,"isSuccess":true,"isError":false}},"privacy":{"privacyCenterViewed":false,"personalizedAds":true,"pokiAnalytics":true,"bingRemarketingEnabled":true,"googleRemarketingEnabled":true,"enableCMP":true,"sendDeviceCapabilities":true},"api":{"queries":{"getLocalisations({\"geo\":\"ES\",\"site\":{\"domain\":\"poki.com\",\"domain_title\":\"Poki.com\",\"id\":3,\"iso_lang\":\"en\",\"lang\":\"en\",\"languageName\":\"English\",\"paths\":{\"prefix\":\"\u002Fen\"}}})":{"status":"fulfilled","endpointName":"getLocalisations","requestId":"azSlg4LuVv-Es-Qb6ePEJ","originalArgs":{"site":{"id":3,"lang":"en","languageName":"English","domain":"poki.com","domain_title":"Poki.com","iso_lang":"en","paths":{"prefix":"\u002Fen"}},"geo":"ES"},"startedTimeStamp":1705600530841,"data":{"about":"About","about_title":"About Poki","advertisement":"Advertisement","allow":"Allow","breadcrumb_games":"games","by":"by","check_the_other_games":"This game is not yet available on mobile web. Check out our other games below.","closefeedbackpopup":"Close feedback popup","closesearch":"Close search","cookie_statement":"Cookie Statement","developers":"Developers","dont_ask_again":"Don't ask again","enter_fullscreen":"Full screen","enteryourtext":"Tell us more... and please only share info on the game itself","exit_fullscreen":"Exit full screen","flash_needed":"%game_title flash version no longer works on web.","flash_play_now":"Play now","get_the_app":"Get the app","got_it_play":"Got it, play now!","got_you_covered":"But we’ve got you covered.","help":"Help","home_description":"\u003Cp\u003EPoki has the best free online games selection and offers the most fun experience to play alone or with friends. We offer instant play to all our games without downloads, login, popups or other distractions. Our games are playable on desktop, tablet and mobile so you can enjoy them at home or on the road. Every month over 50 million gamers from all over the world play their favorite games on Poki.\u003C\u002Fp\u003E  \u003Ch3\u003EOur game selection\u003C\u002Fh3\u003E \u003Cp\u003EGame developers release fun \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fnew\"\u003ENew Games\u003C\u002Fa\u003E on our platform on a daily basis. Our most \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fpopular-games\"\u003EPopular Games\u003C\u002Fa\u003E include hits like \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fg\u002Fsubway-surfers\"\u003ESubway Surfers\u003C\u002Fa\u003E, \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fg\u002Ftemple-run-2\"\u003ETemple Run 2\u003C\u002Fa\u003E, \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fg\u002Fstickman-hook\"\u003EStickman Hook\u003C\u002Fa\u003E and \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fg\u002Frodeo-stampede-savannah\"\u003ERodeo Stampede\u003C\u002Fa\u003E. These games are only playable on Poki. We also have online classics like \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fg\u002Fmoto-x3m\"\u003EMoto X3M\u003C\u002Fa\u003E, \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fg\u002Fvenge-io\"\u003EVenge.io\u003C\u002Fa\u003E, \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fg\u002Fdinosaur-game\"\u003EDino Game\u003C\u002Fa\u003E, \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fg\u002Fsmash-karts\"\u003ESmash Karts\u003C\u002Fa\u003E, \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fg\u002F2048\"\u003E2048\u003C\u002Fa\u003E, \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fg\u002Fpenalty-shooters-2\"\u003EPenalty Shooters 2\u003C\u002Fa\u003E and \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fg\u002Fbad-ice-cream\"\u003EBad Ice-Cream\u003C\u002Fa\u003E to play for free. In total we offer more than 1000 game titles.\u003C\u002Fp\u003E  \u003Ch3\u003EStart playing\u003C\u002Fh3\u003E \u003Cp\u003EUnsure what game to play? Start your game discovery on our homepage or pick a game from any of these popular categories:\u003C\u002Fp\u003E \u003Cul\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fpuzzle\"\u003EBrain Games\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fio\"\u003E.io Games\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Ftwo-player\"\u003E2 Player Games\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fcar\"\u003ECar Games\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fshooting\"\u003EShooting Games\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fen\u002Fnew-puzzle\"\u003EPuzzle Games\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E  \u003Ch3\u003EWhat is Poki?\u003C\u002Fh3\u003E \u003Cp\u003EPoki is based in Amsterdam and has a team of 40 people working on our gaming platform. Our goal is to create the ultimate online playground. Free and open to all. Read more about the platform we are building on our \u003Ca href=\"https:\u002F\u002Fabout.poki.com\u002F\"\u003Ecompany\u003C\u002Fa\u003E page. If you are a game developer looking to achieve success for your game on web, discover what we offer and get in touch via \u003Ca href=\"https:\u002F\u002Fdevelopers.poki.com\u002F\"\u003EPoki for Developers\u003C\u002Fa\u003E.\u003C\u002Fp\u003E  \u003Cp\u003E¿Buscas \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Fes\" target=\"_blank\"\u003Ejuegos\u003C\u002Fa\u003E de Poki en español?\u003C\u002Fp\u003E  \u003Cp\u003EVous cherchez des \u003Ca href=\"https:\u002F\u002Fpoki.com\u002Ffr\" target=\"_blank\"\u003Ejeux\u003C\u002Fa\u003E Poki en français?\u003C\u002Fp\u003E ","home_meta_description":"Discover the world of free online games with Poki! Play instantly, no downloads, and enjoy games compatible with all devices.","home_meta_title":"Poki - Free Online Games - Play Now!","home_title":"Free Online Games","hosted_third_party":"Please note that this game is hosted on a third-party website.","jobs":"Jobs","loading":"Loading...","try_desktop":"This game is not available on mobile web. Play it on your 💻 or download the app.","more_from":"More from","nav_contact":"Contact","nav_privacy_policy":"Privacy Policy","nav_terms_of_use":"Terms of Use","new":"New","not_found_description":"Sorry, the page you requested does not exist on this site.","not_found_title":"404 not found","play_now":"Play now","something_else":"Play something else?","play_surprise":"Play a surprise game","playingad":"Playing Ad","popular_week":"Popular this week","preparing":"Preparing...","privacy":"Privacy","privacy_statement":"Privacy Statement","privacy_updated_title":"We have updated the Privacy and Cookie Statements. ","privacy_updated_text":"To further inform you on cookies and usage of your data check the Privacy Statement and Cookie Statement in the footer of our website.","privacy_updated_link":"Check out our privacy policy page","recently_played":"Recently played","refer_information":"You should refer to their information regarding cookies and privacy as published on their own website if you click through to this game.","search":"What are you playing today?","search_broken":"Whoops!\u003Cbr \u002F\u003ELooks like something broke. Sorry! Try again in a bit.","search_result":"result:","search_results":"results:","search_short":"Search","search_zero_results":"Hmm, nothing’s coming up for that.\u003Cbr \u002F\u003ETry searching for something else?","see_details":"See Details","send":"Send","similar_game":"Here’s a similar game:","thumbs_down":"Thumbs down","thumbs_up":"Thumbs up","mobile_page_doesnt_exist_yet":"%title is not yet available on mobile and tablets.","update":"Update","votes":"votes","wellbeback":"We’ll be back after this short break","whatdoyoulike":"What do you like about %title","whatdontyoulike":"What don't you like about %title","what_mean_privacy":"What does this mean for my privacy?","migration_message":"You can still play all your favorite games here!","migration_title":"migration title","select_language":"Select your language","thank_you":"Thank you","clear":"clear","jump_to":"jump to","category_schema":"What are the best free %CATEGORY_NAME% online?","category_schema_mobile":"What are the most popular %CATEGORY_NAME% for the mobile phone or tablet?","rotate_device":"Rotate your device to play like a pro","you_might":"You might also like","desktop_only":"Desktop only","got_it":"Got it","game_is_not_available":"%game_title is no longer available.","i_like_it":"Like","i_dont_like_it":"Dislike","fullscreen":"Fullscreen","minimize":"Minimize","remove_vote":"Remove","cookie_consent_body":"We use cookies and other similar technologies to improve your experience on our services, personalize advertising and recommend content of interest to you. By using our services, you consent to such monitoring. We also inform you that we have updated our \u003Ca\u003EPrivacy Policy\u003C\u002Fa\u003E.\n","proceed":"Proceed","help_understand":"Help us understand the bug you found... and please only share info on the bug itself","what_bug":"What bug did you find in %title","auto_redirect_title":"Looks like you speak [language]","auto_redirect_message":"We've updated to match your language settings. Want to go back to [language]?","auto_redirect_button":"Switch back to [language]","categories":"Categories","report_bug":"Report a bug","unavailable_on_ipad":"%game_title doesn't work on iPads","game_meta_title_1":"\u003Cgame_upper\u003E - Play Online for Free! | \u003Csitename\u003E","game_meta_title_2":"\u003Cgame_upper\u003E - Play Online for Free! | \u003Csitename\u003E","game_meta_title_3":"\u003Cgame_upper\u003E - Play Online for Free! | \u003Csitename\u003E","game_meta_title_4":"\u003Cgame_upper\u003E - Play Online for Free! | \u003Csitename\u003E","game_meta_title_5":"\u003Cgame_upper\u003E - Play Online for Free! | \u003Csitename\u003E","game_meta_title_6":"\u003Cgame_upper\u003E - Play for Free! | \u003Csitename\u003E","game_meta_title_7":"\u003Cgame_upper\u003E - Play Now! | \u003Csitename\u003E","game_meta_title_8":"\u003Cgame_upper\u003E - Play! | \u003Csitename\u003E","attach_screenshot":"Attach screenshot of game","tap_to_continue":"Tap to continue"},"fulfilledTimeStamp":1705600530845},"getImvitaConfigs({})":{"status":"fulfilled","endpointName":"getImvitaConfigs","requestId":"GVUb2yStlVhxa2PybgGLJ","originalArgs":{},"startedTimeStamp":1705600530842,"data":{"138449635944":{"background":{"imageLeft":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2023\u002FNintendo+6-9+%26+10-12\u002Fleft_10-12.png","imageRight":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2023\u002FNintendo+6-9+%26+10-12\u002Fright_10-12.png","color":"#610000"},"replacements":{"desktop_gp_300x250":{"link":"https:\u002F\u002Fad.doubleclick.net\u002Fddm\u002Ftrackclk\u002FN1072492.2154908TOTALLYKIDZ\u002FB30617033.376594977;dc_trk_aid=567529385;dc_trk_cid=199426525;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=1;tfua=;ltd=;dc_tdv=1","image":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2023\u002FNintendo+6-9+%26+10-12\u002F300x250_10-12.png"},"desktop_gp_728x90_imvita":{"link":"https:\u002F\u002Fad.doubleclick.net\u002Fddm\u002Ftrackclk\u002FN1072492.2154908TOTALLYKIDZ\u002FB30617033.376592478;dc_trk_aid=567628012;dc_trk_cid=199426522;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=1;tfua=;ltd=;dc_tdv=1","image":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2023\u002FNintendo+6-9+%26+10-12\u002F728x90_10-12.jpg"},"desktop_gp_728x90":{"link":"https:\u002F\u002Fad.doubleclick.net\u002Fddm\u002Ftrackclk\u002FN1072492.2154908TOTALLYKIDZ\u002FB30617033.376592478;dc_trk_aid=567628012;dc_trk_cid=199426522;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=1;tfua=;ltd=;dc_tdv=1","image":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2023\u002FNintendo+6-9+%26+10-12\u002F728x90_10-12.jpg"}}},"138449663219":{"background":{"imageLeft":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2023\u002FNintendo+6-9+%26+10-12\u002Fleft_6-9_new.png","imageRight":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2023\u002FNintendo+6-9+%26+10-12\u002Fright_6-9_new.png","color":"#610000"},"replacements":{"desktop_gp_300x250":{"link":"https:\u002F\u002Fad.doubleclick.net\u002Fddm\u002Ftrackclk\u002FN1072492.2154908TOTALLYKIDZ\u002FB30617033.376123964;dc_trk_aid=567586938;dc_trk_cid=199426528;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=1;tfua=;ltd=;dc_tdv=1","image":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2023\u002FNintendo+6-9+%26+10-12\u002F300x250_6-9_new.png"},"desktop_gp_728x90_imvita":{"link":"https:\u002F\u002Fad.doubleclick.net\u002Fddm\u002Ftrackclk\u002FN1072492.2154908TOTALLYKIDZ\u002FB30617033.376592481;dc_trk_aid=567585759;dc_trk_cid=200063772;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=1;tfua=;ltd=;dc_tdv=1","image":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2023\u002FNintendo+6-9+%26+10-12\u002F728x90_6-9_new.jpg"},"desktop_gp_728x90":{"link":"https:\u002F\u002Fad.doubleclick.net\u002Fddm\u002Ftrackclk\u002FN1072492.2154908TOTALLYKIDZ\u002FB30617033.376592481;dc_trk_aid=567585759;dc_trk_cid=200063772;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=1;tfua=;ltd=;dc_tdv=1","image":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2023\u002FNintendo+6-9+%26+10-12\u002F728x90_6-9_new.jpg"}}},"138452880486":{"background":{"imageLeft":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2023\u002FNintendo+6-9+%26+10-12\u002Fleft_6-9_new.png","imageRight":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2023\u002FNintendo+6-9+%26+10-12\u002Fright_6-9_new.png","color":"#610000"},"replacements":{"desktop_gp_300x250":{"link":"https:\u002F\u002Fad.doubleclick.net\u002Fddm\u002Ftrackclk\u002FN1072492.2154908TOTALLYKIDZ\u002FB30617033.376123964;dc_trk_aid=567586938;dc_trk_cid=199426528;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=1;tfua=;ltd=;dc_tdv=1","image":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2023\u002FNintendo+6-9+%26+10-12\u002F300x250_6-9_new.png"},"desktop_gp_728x90_imvita":{"link":"https:\u002F\u002Fad.doubleclick.net\u002Fddm\u002Ftrackclk\u002FN1072492.2154908TOTALLYKIDZ\u002FB30617033.376592481;dc_trk_aid=567585759;dc_trk_cid=200063772;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=1;tfua=;ltd=;dc_tdv=1","image":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2023\u002FNintendo+6-9+%26+10-12\u002F728x90_6-9_new.jpg"},"desktop_gp_728x90":{"link":"https:\u002F\u002Fad.doubleclick.net\u002Fddm\u002Ftrackclk\u002FN1072492.2154908TOTALLYKIDZ\u002FB30617033.376592481;dc_trk_aid=567585759;dc_trk_cid=200063772;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=1;tfua=;ltd=;dc_tdv=1","image":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2023\u002FNintendo+6-9+%26+10-12\u002F728x90_6-9_new.jpg"}}},"138453523390":{"background":{"imageLeft":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2023\u002FNintendo+6-9+%26+10-12\u002Fleft_10-12.png","imageRight":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2023\u002FNintendo+6-9+%26+10-12\u002Fright_10-12.png","color":"#610000"},"replacements":{"desktop_gp_300x250":{"link":"https:\u002F\u002Fad.doubleclick.net\u002Fddm\u002Ftrackclk\u002FN1072492.2154908TOTALLYKIDZ\u002FB30617033.376594977;dc_trk_aid=567529385;dc_trk_cid=199426525;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=1;tfua=;ltd=;dc_tdv=1","image":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2023\u002FNintendo+6-9+%26+10-12\u002F300x250_10-12.png"},"desktop_gp_728x90_imvita":{"link":"https:\u002F\u002Fad.doubleclick.net\u002Fddm\u002Ftrackclk\u002FN1072492.2154908TOTALLYKIDZ\u002FB30617033.376592478;dc_trk_aid=567628012;dc_trk_cid=199426522;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=1;tfua=;ltd=;dc_tdv=1","image":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2023\u002FNintendo+6-9+%26+10-12\u002F728x90_10-12.jpg"},"desktop_gp_728x90":{"link":"https:\u002F\u002Fad.doubleclick.net\u002Fddm\u002Ftrackclk\u002FN1072492.2154908TOTALLYKIDZ\u002FB30617033.376592478;dc_trk_aid=567628012;dc_trk_cid=199426522;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=1;tfua=;ltd=;dc_tdv=1","image":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2023\u002FNintendo+6-9+%26+10-12\u002F728x90_10-12.jpg"}}},"138458951202":{"background":{"imageLeft":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2024\u002Fweet-bix\u002Fleft.png","imageRight":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2024\u002Fweet-bix\u002Fright.png","color":"#003CA6"},"replacements":{"desktop_gp_300x250":{"link":"https:\u002F\u002Fad.doubleclick.net\u002Fddm\u002Ftrackclk\u002FN1892313.3385316TRADINGDESKPR\u002FB31249845.384505284;dc_trk_aid=575147606;dc_trk_cid=207089338;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1","image":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2024\u002Fweet-bix\u002F300x250.png"},"desktop_gp_728x90_imvita":{"link":"https:\u002F\u002Fad.doubleclick.net\u002Fddm\u002Ftrackclk\u002FN1892313.3385316TRADINGDESKPR\u002FB31249845.384342844;dc_trk_aid=575148290;dc_trk_cid=207089350;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1","image":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2024\u002Fweet-bix\u002Fmarnus_728x90.jpg"},"desktop_gp_728x90":{"link":"https:\u002F\u002Fad.doubleclick.net\u002Fddm\u002Ftrackclk\u002FN1892313.3385316TRADINGDESKPR\u002FB31249845.384342844;dc_trk_aid=575148290;dc_trk_cid=207089350;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1","image":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2024\u002Fweet-bix\u002Fmarnus_728x90.jpg"}}},"138458951274":{"background":{"imageLeft":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2024\u002Fweet-bix\u002Fleft.png","imageRight":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2024\u002Fweet-bix\u002Fright.png","color":"#003CA6"},"replacements":{"desktop_gp_300x250":{"link":"https:\u002F\u002Fad.doubleclick.net\u002Fddm\u002Ftrackclk\u002FN1892313.3385316TRADINGDESKPR\u002FB31249845.384346246;dc_trk_aid=575146052;dc_trk_cid=207093394;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1","image":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2024\u002Fweet-bix\u002F300x250.png"},"desktop_gp_728x90_imvita":{"link":"https:\u002F\u002Fad.doubleclick.net\u002Fddm\u002Ftrackclk\u002FN1892313.3385316TRADINGDESKPR\u002FB31249845.384342841;dc_trk_aid=575315482;dc_trk_cid=207229025;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1","image":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2024\u002Fweet-bix\u002Fellyse_728x90.jpg"},"desktop_gp_728x90":{"link":"https:\u002F\u002Fad.doubleclick.net\u002Fddm\u002Ftrackclk\u002FN1892313.3385316TRADINGDESKPR\u002FB31249845.384342841;dc_trk_aid=575315482;dc_trk_cid=207229025;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1","image":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2024\u002Fweet-bix\u002Fellyse_728x90.jpg"}}},"138459105578":{"background":{"imageLeft":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2024\u002Fweet-bix\u002Fleft.png","imageRight":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2024\u002Fweet-bix\u002Fright.png","color":"#003CA6"},"replacements":{"desktop_gp_300x250":{"link":"https:\u002F\u002Fad.doubleclick.net\u002Fddm\u002Ftrackclk\u002FN1892313.3385316TRADINGDESKPR\u002FB31249845.384508332;dc_trk_aid=575236821;dc_trk_cid=207089341;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1","image":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2024\u002Fweet-bix\u002F300x250.png"},"desktop_gp_728x90_imvita":{"link":"https:\u002F\u002Fad.doubleclick.net\u002Fddm\u002Ftrackclk\u002FN1892313.3385316TRADINGDESKPR\u002FB31249845.384346249;dc_trk_aid=575238768;dc_trk_cid=207093388;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1","image":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2024\u002Fweet-bix\u002Falex_728x90.jpg"},"desktop_gp_728x90":{"link":"https:\u002F\u002Fad.doubleclick.net\u002Fddm\u002Ftrackclk\u002FN1892313.3385316TRADINGDESKPR\u002FB31249845.384346249;dc_trk_aid=575238768;dc_trk_cid=207093388;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1","image":"https:\u002F\u002Fads.poki.com\u002Fimmersive_video_takeover\u002F2024\u002Fweet-bix\u002Falex_728x90.jpg"}}}},"fulfilledTimeStamp":1705600530846},"getHomepage({\"device\":\"desktop\",\"geo\":\"ES\",\"site\":{\"domain\":\"poki.com\",\"domain_title\":\"Poki.com\",\"id\":3,\"iso_lang\":\"en\",\"lang\":\"en\",\"languageName\":\"English\",\"paths\":{\"prefix\":\"\u002Fen\"}}})":{"status":"fulfilled","endpointName":"getHomepage","requestId":"iJbgfuW2HGToEaXXN5s1c","originalArgs":{"site":{"id":3,"lang":"en","languageName":"English","domain":"poki.com","domain_title":"Poki.com","iso_lang":"en","paths":{"prefix":"\u002Fen"}},"device":"desktop","geo":"ES"},"startedTimeStamp":1705600530842,"data":{"games":[{"id":30687,"developer":"Yohoho Games","mobile":true,"title":"Red Ball 4","type":"game","image":{"path":"9b739087f9938fb143a2519252addbb8.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fred-ball-4","slug":"red-ball-4","animatedThumbnail":"1eb8cb70-df6c-4174-b695-7a7f28b45d6e\u002Fthumbnail"},{"id":29160,"developer":"SYBO","mobile":true,"title":"Subway Surfers","type":"game","image":{"path":"277c3d71bbad68a929fa006f24f9fe46.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fsubway-surfers","slug":"subway-surfers","animatedThumbnail":"98ff132c-eeb6-428c-9385-45d00e7bf957\u002Fthumbnail"},{"id":29724,"developer":"New Star Games","mobile":true,"title":"Retro Bowl","type":"game","image":{"path":"ee9ca3764ef4289a48a1ebf457ef605441ed1f35a0f2eb12707a70d609e53686.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fretro-bowl","slug":"retro-bowl","animatedThumbnail":"be86cc01-e4d5-4bcf-a44b-59b8086bb0f2\u002Fthumbnail"},{"id":30677,"developer":"yeqwep","mobile":true,"title":"Watermelon Drop","type":"game","image":{"path":"02018885c1521dd2830683a0ecc86440.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fwatermelon-drop","slug":"watermelon-drop","animatedThumbnail":"c5ec3309-255a-480c-bfe0-f7762d9ec496\u002Fthumbnail"},{"id":30628,"developer":"Superplus Games","mobile":true,"title":"Hills of Steel","type":"game","image":{"path":"e8a5f2eda2e5340e8ded263692835caa.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fhills-of-steel","slug":"hills-of-steel","animatedThumbnail":"a2ba371f-4a57-48d2-85f8-2dfa34af1b57\u002Fthumbnail"},{"id":30475,"developer":"TinyDobbins","mobile":true,"title":"Monkey Mart","type":"game","image":{"path":"b3668d7deb043d0f43b5813b0365be8f.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fmonkey-mart","slug":"monkey-mart","animatedThumbnail":"825d84cd-e5e6-48f0-af1f-f30aaa7b1580\u002Fthumbnail"},{"id":30590,"developer":"Vectaria","mobile":true,"title":"Vectaria.io","type":"game","image":{"path":"260f3251a55c78a27fd15b9e4d675f88.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fvectaria-io","slug":"vectaria-io","animatedThumbnail":"eda19fa5-c0ec-4a61-b325-2a927d715fac\u002Fthumbnail"},{"id":30370,"developer":"Martin Magni","mobile":true,"title":"Drive Mad","type":"game","image":{"path":"f8a2160e52333ee0d44ec19e8ca65139.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fdrive-mad","slug":"drive-mad","animatedThumbnail":"e30a865b-3fba-465d-8327-cadb668e9dd4\u002Fthumbnail"},{"id":29145,"developer":"Madbox","mobile":true,"title":"Stickman Hook","type":"game","image":{"path":"99e090d154caf30f3625df7e456d5984.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fstickman-hook","slug":"stickman-hook","animatedThumbnail":"c5bfe826-608c-4fa4-8ab2-82c07fe27c0d\u002Fthumbnail"},{"id":30620,"developer":"emolingo games","mobile":true,"title":"Rainbow Obby","type":"game","image":{"path":"fd770762bcef1177ee819e34fda941f1.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Frainbow-obby","slug":"rainbow-obby","animatedThumbnail":"5fdc83f7-46b3-4a68-8778-7d00afa282c5\u002Fthumbnail"},{"id":30036,"developer":"Pelican Party Studios","mobile":true,"title":"Narrow.One","type":"game","image":{"path":"265cce894cd9adb132e77cae0562e3aa.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fnarrow-one","slug":"narrow-one","animatedThumbnail":"260e7856-59b1-47bd-90a3-63de8c65bb6b\u002Fthumbnail"},{"id":25273,"developer":"Madpuffers","mobile":true,"title":"Moto X3M","type":"game","image":{"path":"2c6d5a46cdbceada277c870ce1c389ee.jpg","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fmoto-x3m","slug":"moto-x3m","animatedThumbnail":"f4fe71f2-e527-474f-a0d7-2ebbf910f128\u002Fthumbnail"},{"id":30413,"developer":"No Pressure Studios","mobile":true,"title":"Crazy Cars","type":"game","image":{"path":"2bc8004fcbb4387908a636e2a9d9ab4a.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fcrazy-cars","slug":"crazy-cars","animatedThumbnail":"d21f42ba-2871-430d-b7d1-0bf1cd727d64\u002Fthumbnail"},{"id":30668,"developer":"Unept","mobile":true,"title":"Level Devil","type":"game","image":{"path":"1284e32cbe8ef8c83babeb72308100e0.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Flevel-devil","slug":"level-devil","animatedThumbnail":"268cdc3b-ae4a-4694-8dab-415f534e95e8\u002Fthumbnail"},{"id":29704,"developer":"Tall Team","mobile":false,"title":"Smash Karts","type":"game","image":{"path":"9c9e529b14731be871b07b89660bbc2a.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fsmash-karts","slug":"smash-karts","animatedThumbnail":"955f0bb1-0222-485d-8fa9-88343588b0c3\u002Fthumbnail"},{"id":30375,"developer":"Prealpha","mobile":true,"title":"Make It Meme","type":"game","image":{"path":"70e565ff687043e10e150e23d0ae5ea2.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fmake-it-meme","slug":"make-it-meme","animatedThumbnail":"fe4a1c31-3a70-46b8-bed2-ece46deb2e89\u002Fthumbnail"},{"id":30686,"developer":"No Pressure Studios","mobile":true,"title":"Crazy Bikes","type":"game","image":{"path":"3dffba10e1aa5980e65408012b38db6d.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fcrazy-bikes","slug":"crazy-bikes","animatedThumbnail":"84fe6ea4-e1f9-46a2-9147-077d4d1a0f3a\u002Fthumbnail"},{"id":29885,"developer":"Imangi Studios","mobile":true,"title":"Temple Run 2","type":"game","image":{"path":"f4b3ac7fe25cad9bc028b33f7a407f28.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Ftemple-run-2","slug":"temple-run-2","animatedThumbnail":"0e7e3ddd-4bfa-4713-82f6-1d27bda826c8\u002Fthumbnail"},{"id":29040,"developer":"Deer Cat Games","mobile":true,"title":"Tunnel Rush","type":"game","image":{"path":"2094926076b7aa8264cace220ce5decc.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Ftunnel-rush","slug":"tunnel-rush","animatedThumbnail":"74714d4a-ca2a-4e79-8e11-4be28c5670d9\u002Fthumbnail"},{"id":30169,"developer":"Skullcap Studios","mobile":false,"title":"Blockpost","type":"game","image":{"path":"70c2a0deacc4cf2cb86add488199c56e.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fblockpost","slug":"blockpost","animatedThumbnail":"23639d6f-dacf-4204-bba6-c9dbf7fbae80\u002Fthumbnail"},{"id":30564,"developer":"JetGames","mobile":false,"title":"Tag","type":"game","image":{"path":"32d2b1401c7a86c61fae5afeed977b37.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Ftag","slug":"tag","animatedThumbnail":"6c430da8-91f5-4fb3-9b40-77d349535dd9\u002Fthumbnail"},{"id":30219,"developer":"LAK Games","mobile":true,"title":"Bubble Shooter","type":"game","image":{"path":"2d5e417ea0fc1ef06d746b2cef691c07.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fbubble-shooter-lak","slug":"bubble-shooter-lak","animatedThumbnail":"1dc67bde-42e1-4479-8b7e-b5cfefa0a04f\u002Fthumbnail"},{"id":30665,"developer":"PEGASUS","mobile":true,"title":"Stickman Dragon Fight","type":"game","image":{"path":"c7d21e8c3962488f12ef86e2521b6697.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fstickman-dragon-fight","slug":"stickman-dragon-fight","animatedThumbnail":"30db7ef1-cff5-4ebf-98bc-5afee99b6f7b\u002Fthumbnail"},{"id":27908,"developer":"Colin Lane Games AB","mobile":true,"title":"Temple of Boom","type":"game","image":{"path":"d710fe8830d731072485a582881605ea.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Ftemple-of-boom","slug":"temple-of-boom","animatedThumbnail":"f184a9c2-4b10-4d6b-a00c-2fb9abc675ec\u002Fthumbnail"},{"id":29538,"developer":"Terminarch Games","mobile":true,"title":"Sushi Party","type":"game","image":{"path":"e327f46027899af3e9573ef51450bb54.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fsushi-party-io","slug":"sushi-party-io","animatedThumbnail":"ff8cf01c-b2b7-43ef-ac7c-2e8f355db89f\u002Fthumbnail"},{"id":30672,"developer":"Gametornado","mobile":true,"title":"Flip Bros","type":"game","image":{"path":"6ad0d4d2e71f77da3bd821348dd89e97.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fflip-bros","slug":"flip-bros","animatedThumbnail":"237bc8ed-c6ee-4822-989a-c48805a12c0e\u002Fthumbnail"},{"id":30692,"developer":"ARF Games","mobile":true,"title":"Cozy Room Design","type":"game","image":{"path":"7840ca4c8b4bf0843ee1cecfc06696f6.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fcozy-room-design","slug":"cozy-room-design","animatedThumbnail":"d2e290a1-2d6c-499d-8e9b-9d01e07930eb\u002Fthumbnail"},{"id":30540,"developer":"Robert Alvarez","mobile":true,"title":"Jumping Shell","type":"game","image":{"path":"320ad62140bd930a7384682fac5d81d9.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fjumping-shell","slug":"jumping-shell","animatedThumbnail":"d935f6f4-8cc7-4214-ab51-c9333ae2c644\u002Fthumbnail"},{"id":29174,"developer":"Codethislab","mobile":true,"title":"Master Chess","type":"game","image":{"path":"505695b9-1b21-47fd-a8e1-93345afb57de.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fmaster-chess","slug":"master-chess","animatedThumbnail":"0a9f852d-bdeb-436c-9d28-3fdf8c835e88\u002Fthumbnail"},{"id":30694,"developer":"Martin Magni","mobile":true,"title":"Dino Bros","type":"game","image":{"path":"e4010015d91786185e3d91d195957a9f.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fdino-bros","slug":"dino-bros","isNew":true,"animatedThumbnail":"8f4facae-8f5b-476c-9c2c-5c16e36087cd\u002Fthumbnail"},{"id":30653,"developer":"Benri Games","mobile":true,"title":"Mermaid Dress Up","type":"game","image":{"path":"89fbba5cc53657fbe097c640ef989086.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fmermaid-dress-up","slug":"mermaid-dress-up","isNew":true,"animatedThumbnail":"94a8b6fb-c14b-492a-bf1f-e33096086da9\u002Fthumbnail"},{"id":30633,"developer":"Elanra Studios","mobile":true,"title":"SimplyUp.io","type":"game","image":{"path":"4c0179296d2ea99007c0c6fe2cf2d78b.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fsimplyupio","slug":"simplyupio","animatedThumbnail":"5c613173-cf76-4ef8-b99f-50519aa0048d\u002Fthumbnail"},{"id":30133,"developer":"Nicky Case","mobile":true,"title":"We Become What We Behold","type":"game","image":{"path":"a0929e5428c5af2666c9eeb3a0441d4c.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fwe-become-what-we-behold","slug":"we-become-what-we-behold","animatedThumbnail":"899cd46e-90ca-4709-b542-86bd82c631cf\u002Fthumbnail"},{"id":30697,"developer":"bergice","mobile":true,"title":"Lurkers.io","type":"game","image":{"path":"84ed40b8ade4e9f5bbf1fa7b3acef3a3.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Flurkers-io","slug":"lurkers-io","isNew":true,"animatedThumbnail":"45cea3e0-e5ae-42e0-bd2f-44865abcb21a\u002Fthumbnail"},{"id":29767,"developer":"Unico Studio","mobile":true,"title":"Brain Test: Tricky Puzzles","type":"game","image":{"path":"e689238d6dcbb672b749ab65960c0d65.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fbrain-test-tricky-puzzles","slug":"brain-test-tricky-puzzles","animatedThumbnail":"85b868d1-4e00-4a44-af97-5dfa0f7f7026\u002Fthumbnail"},{"id":29489,"developer":"NadGames","mobile":false,"title":"Combat Online","type":"game","image":{"path":"bec6ef1112da9b3a4e67af09b69960df.jpg","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fcombat-online","slug":"combat-online","animatedThumbnail":"6f22ad22-9e9d-4cfc-b378-b8f177b7e0ff\u002Fthumbnail"},{"id":30655,"developer":"yeqwep","mobile":true,"title":"Cats Drop","type":"game","image":{"path":"4da40961e0b541399dde8bfcb92f766f.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fcats-drop","slug":"cats-drop","animatedThumbnail":"79180b32-052d-499c-8ae1-1d354fde4133\u002Fthumbnail"},{"id":29286,"developer":"EXODRAGON","mobile":true,"title":"YoHoHo.io","type":"game","image":{"path":"9b373b5219cd66a82389d81d7cda8e23.jpeg","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fyohoho-io","slug":"yohoho-io","animatedThumbnail":"945e232e-deb6-4583-9797-99e6ea721269\u002Fthumbnail"},{"id":30661,"developer":"Project GD","mobile":true,"title":"Silly Sky","type":"game","image":{"path":"09548c6fe491ccfaf3657b8ef296fe56.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fsilly-sky","slug":"silly-sky"},{"id":30409,"developer":"Radical Play","mobile":true,"title":"Soccer Skills World Cup","type":"game","image":{"path":"1a9642e779cab413962255ea953d1155.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fsoccer-skills-world-cup","slug":"soccer-skills-world-cup","animatedThumbnail":"95d7ce97-35ca-4421-b759-79fb88510ea4\u002Fthumbnail"},{"id":29969,"developer":"TinyDobbins","mobile":true,"title":"Stick Merge","type":"game","image":{"path":"3b3f4aeacf600fd3910f1c3d513c0636.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fstick-merge","slug":"stick-merge","animatedThumbnail":"d4c0cee1-1277-47c7-b155-80f938e3802a\u002Fthumbnail"},{"id":29316,"developer":"Madpuffers","mobile":true,"title":"Basketball Stars","type":"game","image":{"path":"bc02c9cdfc5b424ddf343b01edf791ce.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fbasketball-stars","slug":"basketball-stars","animatedThumbnail":"470d0dc8-446b-44f4-a946-6f2cc0d30f8c\u002Fthumbnail"},{"id":30555,"developer":"Gametornado","mobile":true,"title":"Dreadhead Parkour","type":"game","image":{"path":"19a3ea265e3b62b11facec762dd1c4f2.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fdreadhead-parkour","slug":"dreadhead-parkour","animatedThumbnail":"8b517d56-9b39-4fe1-89f5-e85f1ee17618\u002Fthumbnail"},{"id":21311,"developer":"Splapp-me-do","mobile":true,"title":"The Impossible Quiz","type":"game","image":{"path":"3cd96c99-46c1-4ff0-b04a-82381ea07349.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fthe-impossible-quiz","slug":"the-impossible-quiz","animatedThumbnail":"a098c5b5-1b39-4dd7-9e38-0a9ceb487d29\u002Fthumbnail"},{"id":30642,"developer":"New Star Games","mobile":true,"title":"Retro Bowl College","type":"game","image":{"path":"d98547374c4129bf441b754d495e41aa.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fretro-bowl-college","slug":"retro-bowl-college","animatedThumbnail":"63e4d4be-021b-4241-91a0-d33e6fe5bc74\u002Fthumbnail"},{"id":30618,"developer":"Devortel","mobile":true,"title":"Vortelli's Pizza Delivery","type":"game","image":{"path":"df8a21c437d18f2aca99790135790c9e.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fvortellis-pizza-delivery","slug":"vortellis-pizza-delivery","animatedThumbnail":"4647529e-b92e-4ae7-b433-29e14f3e6fbc\u002Fthumbnail"},{"id":30396,"developer":"OnRush Studio","mobile":true,"title":"Tribals.io","type":"game","image":{"path":"0e49f86ec1509ef756fadeefa0ce917c.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Ftribals-io","slug":"tribals-io","animatedThumbnail":"2836d557-a8ce-416a-88bd-4e8f020030fe\u002Fthumbnail"},{"id":30624,"developer":"JetGames","mobile":true,"title":"Tag 2","type":"game","image":{"path":"0e1aa55382d86a9dadaadfdd23c175f6.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Ftag-2","slug":"tag-2","animatedThumbnail":"1d8af83a-c1e3-4b5b-810d-d8d6cd17615c\u002Fthumbnail"},{"id":30515,"developer":"VNStart Studio","mobile":true,"title":"Water Color Sort","type":"game","image":{"path":"bea9b33040f3776e709fbe8c6e23c623.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fwater-color-sort","slug":"water-color-sort","animatedThumbnail":"c3f96137-2c7a-481e-8db6-8ee5111a98b9\u002Fthumbnail"},{"id":30323,"developer":"Potato Jam","mobile":true,"title":"Numbers","type":"game","image":{"path":"ddd68cd4387aad588bd48ca45c2f2290.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fnumbers","slug":"numbers"},{"id":29202,"developer":"PecPoc Games","mobile":true,"title":"Match Arena","type":"game","image":{"path":"128be1b22e48ca511601be58ab856c76.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fmatch-arena","slug":"match-arena","animatedThumbnail":"edd6d52a-2321-4272-b8bb-6b0a067e66d3\u002Fthumbnail"},{"id":29100,"developer":"Pixel Voices","mobile":true,"title":"EvoWorld io (FlyOrDie io)","type":"game","image":{"path":"4617d96c-ae80-40a7-91d8-b5670a994084.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fflyordie-io","slug":"flyordie-io","animatedThumbnail":"9cb72126-3790-4c43-8412-63a20acad889\u002Fthumbnail"},{"id":30589,"developer":"Lampogolovii","mobile":true,"title":"Day of Meat: Castle","type":"game","image":{"path":"40a1153ffa533ab936eaab0a0264b8cc.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fday-of-meat-castle","slug":"day-of-meat-castle"},{"id":27256,"developer":"Poki Studios","mobile":true,"title":"1010! Deluxe","type":"game","image":{"path":"65c7d262-29a3-4552-912d-58c9fcb05aa8.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002F1010-deluxe","slug":"1010-deluxe","animatedThumbnail":"369e6904-a8c4-4e9f-a1eb-bd7233fa3869\u002Fthumbnail"},{"id":30168,"developer":"TapLabGames","mobile":true,"title":"Sweet World","type":"game","image":{"path":"9f92075d9b3287fc20559277effeb719.jpeg","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fsweet-world","slug":"sweet-world","animatedThumbnail":"0a2a79c1-59c7-4451-bd6f-46ad914c3f0e\u002Fthumbnail"},{"id":30355,"developer":"Martin Magni","mobile":true,"title":"Speed King","type":"game","image":{"path":"db08f4c65420b03480f731e25502dbac.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fspeed-king","slug":"speed-king","animatedThumbnail":"cddd8671-642a-476d-968a-ecff01e6257d\u002Fthumbnail"},{"id":30683,"developer":"Neki","mobile":true,"title":"IZOWAVE - Build and Defend","type":"game","image":{"path":"e438562f3f6098237f7f93d0f7ddeb71.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fizowave-build-and-defend","slug":"izowave-build-and-defend","animatedThumbnail":"172323d6-5430-44a5-9cf4-6d503f89687f\u002Fthumbnail"},{"id":29782,"developer":"OnRush Studio","mobile":true,"title":"Venge.io","type":"game","image":{"path":"41e1eb2b214fcebb66ddcb924e936f96.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fvenge-io","slug":"venge-io","animatedThumbnail":"cef67ef6-a741-4157-8f91-7e4d6020316d\u002Fthumbnail"},{"id":29179,"developer":"Madpuffers","mobile":true,"title":"Moto X3M 5 Pool Party","type":"game","image":{"path":"0235b530eec4f17ad60137f6b245a988.jpeg","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fmoto-x3m-5-pool-party","slug":"moto-x3m-5-pool-party","animatedThumbnail":"7507f2e5-e281-40c2-8562-2bb803c6c74c\u002Fthumbnail"},{"id":30678,"developer":"Furkan Karapinar","mobile":true,"title":"Parkmania","type":"game","image":{"path":"49d01cdc4d61a117dfb4b94b921f77d0.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fparkmania","slug":"parkmania","animatedThumbnail":"6a5957fc-3701-4f3d-a4fd-4a6e91493fdf\u002Fthumbnail"},{"id":30675,"developer":"EasyCats","mobile":true,"title":"War Master","type":"game","image":{"path":"6746e02703266d01195d9fa62252698f.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fwar-master","slug":"war-master","animatedThumbnail":"1053e57d-d26c-4cb0-83ee-e93a5266148e\u002Fthumbnail"},{"id":30313,"developer":"Flipline Studios","mobile":true,"title":"Papa's Freezeria","type":"game","image":{"path":"fe7c19da32800855dfb8f039adfe353b.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fpapas-freezeria","slug":"papas-freezeria","animatedThumbnail":"3a49467e-e2d9-4776-9f09-0ddfb066cf96\u002Fthumbnail"},{"id":29584,"developer":"CrioDev","mobile":false,"title":"Snake.is MLG Edition","type":"game","image":{"path":"30ed4c9b54023bb0d62d89a374d7ac8e.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fsnake-is-mlg-edition","slug":"snake-is-mlg-edition","animatedThumbnail":"096aef65-af07-4d58-8571-b5714dc99a98\u002Fthumbnail"},{"id":30681,"developer":"Steelpan Interactive","mobile":true,"title":"Zeepkist: Crash 2D","type":"game","image":{"path":"adaf9444d645f92e567cc721f411df36.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fzeepkist-crash-2d","slug":"zeepkist-crash-2d","animatedThumbnail":"a270d120-632b-46b5-b647-795be475e5d3\u002Fthumbnail"},{"id":30109,"developer":"MarketJS","mobile":true,"title":"8 Ball Pool With Buddies","type":"game","image":{"path":"6124290d23525a5f4abdd51ec1cbe3fe.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002F8-ball-pool-with-buddies","slug":"8-ball-pool-with-buddies","animatedThumbnail":"3313eb47-e45f-49f5-98cb-fa5965d19da3\u002Fthumbnail"},{"id":30669,"developer":"Potato Jam","mobile":true,"title":"Market Sort","type":"game","image":{"path":"17ff2eb73fc761b0cfb4d1277ac51601.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fmarket-sort","slug":"market-sort","animatedThumbnail":"582f809b-5422-45b1-9086-16e8e4a6f93b\u002Fthumbnail"},{"id":30508,"developer":"Shoom Games","mobile":true,"title":"War of Sticks","type":"game","image":{"path":"3b580a021580bf9266fba837a8837039.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fwar-of-sticks","slug":"war-of-sticks","animatedThumbnail":"bcc5f189-a13c-4624-8290-6096bbb8b4ca\u002Fthumbnail"},{"id":30630,"developer":"Unico Studio","mobile":true,"title":"Who is? 2 Brain Puzzle & Chats","type":"game","image":{"path":"a9fb14a849dbb884862c7704e9f01b67.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fwho-is-2-brain-puzzle-chats","slug":"who-is-2-brain-puzzle-chats","animatedThumbnail":"98775137-a110-466c-b4cb-94d82d91b06d\u002Fthumbnail"},{"id":30414,"developer":"Wix Games","mobile":false,"title":"Word vs Word","type":"game","image":{"path":"bbecb86da4b530d0f741849cff646891.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fword-vs-word","slug":"word-vs-word"},{"id":30005,"developer":"Ravalmatic","mobile":true,"title":"Pool Club","type":"game","image":{"path":"fe7b5c8267b63ee56134841474fe0aea.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fpool-club","slug":"pool-club","animatedThumbnail":"0364d150-e416-4f87-9428-1990301a78c3\u002Fthumbnail"},{"id":30578,"developer":"Calastrovsk","mobile":true,"title":"SPECTRUM","type":"game","image":{"path":"6cb069adc75fea6063429b590388701e.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fspectrum","slug":"spectrum"},{"id":29703,"developer":"Potato Jam","mobile":true,"title":"Solitaire Klondike 2.0","type":"game","image":{"path":"c110f8d8e6636aeef627d8ab226f3366.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fsolitaire-klondike-2","slug":"solitaire-klondike-2","animatedThumbnail":"484aca6b-f1e0-443a-afeb-9197de3fc579\u002Fthumbnail"},{"id":30685,"developer":"7Spot Games","mobile":true,"title":"Olly the Paw","type":"game","image":{"path":"c0685a94fced8e38cb03a820a5e35474.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Folly-the-paw","slug":"olly-the-paw","animatedThumbnail":"91666de4-678f-48f6-8677-baaa0b26a86c\u002Fthumbnail"},{"id":7973,"developer":"PuffballsUnited","mobile":true,"title":"Stealing the Diamond","type":"game","image":{"path":"df942cb27fd6d1be99cbc496550825cb50a0a4c057476ce5cc350141b0ac7ada.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fstealing-the-diamond","slug":"stealing-the-diamond","animatedThumbnail":"9abf37ca-7c3d-490e-9539-a4844e7df09a\u002Fthumbnail"},{"id":27703,"developer":"10x10games","mobile":true,"title":"Penalty Shooters 2","type":"game","image":{"path":"7b6f54cf-e1b2-4e69-a84e-1c1f49e54c53.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fpenalty-shooters-2","slug":"penalty-shooters-2","animatedThumbnail":"7a8e22ea-c779-487a-a9cd-28b2650aeeeb\u002Fthumbnail"},{"id":30310,"developer":"Amazing Hedgehog","mobile":true,"title":"Amazing Spider Solitaire","type":"game","image":{"path":"12eadccf9d65bfd8fd1526ae103ed33e.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Famazing-spider-solitaire","slug":"amazing-spider-solitaire"},{"id":30182,"developer":"TapLabGames","mobile":true,"title":"Jigsaw Surprise","type":"game","image":{"path":"b2068cacadb0c98595210cc250477682.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fjigsaw-surprise","slug":"jigsaw-surprise"},{"id":28388,"developer":"Serius Games","mobile":true,"title":"G-Switch 3","type":"game","image":{"path":"7f53593c-4090-4cc5-a934-6a5e599d8eaa.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fg-switch-3","slug":"g-switch-3","animatedThumbnail":"579f8147-8685-4733-b05f-4bba6215d539\u002Fthumbnail"},{"id":29390,"developer":"Playtouch","mobile":true,"title":"Mahjong Linker Kyodai Game","type":"game","image":{"path":"c8f467b7f05ce3646938733e935d139b.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fmahjong-linker-kyodai-game","slug":"mahjong-linker-kyodai-game"},{"id":30663,"developer":"Neutronized","mobile":false,"title":"Double Panda","type":"game","image":{"path":"74f6d3900c2756899ee4902660514df0.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fdouble-panda","slug":"double-panda","animatedThumbnail":"645837fa-f7da-48ee-b746-92b121f2f228\u002Fthumbnail"},{"id":27153,"developer":"Colin Lane Games AB","mobile":true,"title":"Wrassling","type":"game","image":{"path":"f1b3c828-7af9-4e13-9f5c-b2e88f335bdf.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fwrassling","slug":"wrassling","animatedThumbnail":"db2b3ab7-419a-4f21-84ea-56506c426a57\u002Fthumbnail"},{"id":29759,"developer":"Code This Lab","mobile":true,"title":"Spider Solitaire","type":"game","image":{"path":"cb77f2ff2b8d301391606f883f1552cda6a0fe93a1cd47f9ef7125a19fde954c.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fspider-solitaire-ctl","slug":"spider-solitaire-ctl"},{"id":29915,"developer":"Docski","mobile":false,"title":"Repuls.io","type":"game","image":{"path":"692b407fab55e4a205cc12b0cfc971a6.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Frepuls-io","slug":"repuls-io","animatedThumbnail":"77dec273-af37-4a97-a9d1-1349755832a2\u002Fthumbnail"},{"id":30350,"developer":"TinyDobbins","mobile":true,"title":"Stick Defenders","type":"game","image":{"path":"7db1b3c920544b27bdec9f67d0c2d92c.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fstick-defenders","slug":"stick-defenders","animatedThumbnail":"e33489af-ee90-4e1b-b0a7-14cf61b824f4\u002Fthumbnail"},{"id":30255,"developer":"Indiesoft","mobile":true,"title":"Fish Eat Fish","type":"game","image":{"path":"2ac0e37aaff9325c6e2dd60bef91354a.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Ffish-eat-fish","slug":"fish-eat-fish","animatedThumbnail":"428f72d0-38fd-4b31-b90c-0aaf9ffd6dd6\u002Fthumbnail"},{"id":29355,"developer":"Codethislab","mobile":true,"title":"Ultimate Sudoku","type":"game","image":{"path":"bc07d0e7d1b5b448e0a932537b4ebf80.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fultimate-sudoku","slug":"ultimate-sudoku"},{"id":29931,"developer":"Madpuffers","mobile":true,"title":"Tennis Masters","type":"game","image":{"path":"0cf85634812c42993399de175cd5bd00.jpeg","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Ftennis-masters","slug":"tennis-masters","animatedThumbnail":"9a021320-b000-40c7-9774-a3afa50526c9\u002Fthumbnail"},{"id":30679,"developer":"OnRush Studio","mobile":true,"title":"Jungle Friends","type":"game","image":{"path":"ca9e8dd710a104aeab127be9df506579.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fjungle-friends","slug":"jungle-friends","animatedThumbnail":"135e203f-ec32-4fc1-ad5d-4e2f7c9c2374\u002Fthumbnail"},{"id":20477,"developer":"Gabriele Cirulli","mobile":true,"title":"2048","type":"game","image":{"path":"cb8c967c-4a78-4ffa-8506-cbac69746f4f.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002F2048","slug":"2048","animatedThumbnail":"4997b0f3-1952-439c-918e-31393a22e235\u002Fthumbnail"},{"id":29653,"developer":"No Pressure Studios","mobile":false,"title":"Rocket Soccer Derby","type":"game","image":{"path":"e521bbbf13a6480b60d75421e7edc8d8d0e1edadaccd7d43438864b62a74088a.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Frocket-soccer-derby","slug":"rocket-soccer-derby","animatedThumbnail":"3341fa26-ce88-49a8-8971-e88a5fe110b1\u002Fthumbnail"},{"id":29547,"developer":"Rujo Games","mobile":true,"title":"A Small World Cup","type":"game","image":{"path":"7646b2845cf9112ef42a3cd769eeac6e.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fa-small-world-cup","slug":"a-small-world-cup","animatedThumbnail":"b7335057-bfc1-4c98-a263-e41896001f82\u002Fthumbnail"},{"id":30660,"developer":"Ember Whirl","mobile":true,"title":"Idle Zoo Safari Rescue","type":"game","image":{"path":"12458c8bf56615e8a6fd226cfd02cef8.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fidle-zoo-safari-rescue","slug":"idle-zoo-safari-rescue","animatedThumbnail":"7c4c0632-3851-4af3-b567-80ca4fb2b1ab\u002Fthumbnail"},{"id":29907,"developer":"Unico Studio","mobile":true,"title":"Word City Uncrossed","type":"game","image":{"path":"06140fc170bb8a3282537aaf1242bed6.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fword-city-uncrossed","slug":"word-city-uncrossed"},{"id":30671,"developer":"ironfoxgames","mobile":true,"title":"Up Together","type":"game","image":{"path":"99bc181bf0c00de82a28d228fbc9123c.jfif","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fup-together","slug":"up-together","animatedThumbnail":"60fd4f61-628e-4f07-9731-9991e83d7249\u002Fthumbnail"},{"id":29692,"developer":"MarketJS","mobile":true,"title":"Ludo Hero","type":"game","image":{"path":"aa1108c9f1d4e6d6b564824e6c4a2ca8460e48ae9d3f0b98bdbb8b816ff8c352.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fludo-hero","slug":"ludo-hero","animatedThumbnail":"73322bc0-0c90-498e-8245-acf11968f9f1\u002Fthumbnail"},{"id":30634,"developer":"Potato Jam","mobile":true,"title":"King of Mahjong","type":"game","image":{"path":"7482e96dbd68d7c1a4bbad5e79a84cf4.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fking-of-mahjong","slug":"king-of-mahjong","animatedThumbnail":"42499486-9673-4e3b-ba1e-ffd21743046c\u002Fthumbnail"},{"id":30026,"developer":"Ravalmatic","mobile":true,"title":"Refuge Solitaire","type":"game","image":{"path":"624213c87b280705e0f1f15a69515a02.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Frefuge-solitaire","slug":"refuge-solitaire"},{"id":16752,"developer":"Martijn Kunst","mobile":true,"title":"Raft Wars 2","type":"game","image":{"path":"8ce3d09339bcb18c63bf9f1780795944.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fraft-wars-2","slug":"raft-wars-2","animatedThumbnail":"aa677eab-b07f-4a4c-ad79-589ef2c0700d\u002Fthumbnail"},{"id":30674,"developer":"Blumgi","mobile":true,"title":"Blumgi Dragon","type":"game","image":{"path":"8f330ccd95d2be6425074df1d9d28e2a.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fblumgi-dragon","slug":"blumgi-dragon","animatedThumbnail":"3df245d2-8932-409e-b960-8cc952c1f146\u002Fthumbnail"},{"id":29814,"developer":"DrMop Games","mobile":true,"title":"Australian Patience","type":"game","image":{"path":"28918fa351d761482886b1f6b64ae0bf.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Faustralian-patience","slug":"australian-patience"},{"id":29600,"developer":"FRVR Games","mobile":true,"title":"Gold Digger FRVR","type":"game","image":{"path":"ada621ee3a066ab12be8484017fd6297.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fgold-digger-frvr","slug":"gold-digger-frvr","animatedThumbnail":"43050f4b-01de-4568-99b5-ee0ce20ce85d\u002Fthumbnail"},{"id":28684,"developer":"NadGames","mobile":true,"title":"Combat Reloaded","type":"game","image":{"path":"1c8089f7-7254-4cbf-b8bc-7581cd5412e4.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fcombat-reloaded","slug":"combat-reloaded","animatedThumbnail":"949aa08e-357c-4817-9ff4-d4e2641a9abe\u002Fthumbnail"},{"id":30196,"developer":"Radical Play","mobile":true,"title":"Soccer Skills Champions League","type":"game","image":{"path":"0424ffff7a2f9d29299dae909c3ad5bf.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fsoccer-skills-champions-league","slug":"soccer-skills-champions-league","animatedThumbnail":"2e525d9e-c01e-4158-be3e-bf983ce86d45\u002Fthumbnail"},{"id":30020,"developer":"BoneCracker Games","mobile":false,"title":"City Car Driving: Stunt Master","type":"game","image":{"path":"030bec0d229cfea9036a83695b8bd9b4.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fcity-car-driving-stunt-master","slug":"city-car-driving-stunt-master","animatedThumbnail":"3ec8df24-1c15-4dc8-84f8-e86fb06d50e0\u002Fthumbnail"},{"id":30528,"developer":"7Spot Games","mobile":true,"title":"Cow Bay","type":"game","image":{"path":"bcb80cf03b9d0ab698ac72f0b8b6f3d0.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fcow-bay","slug":"cow-bay","animatedThumbnail":"41c5c391-4a82-405d-9e5d-e944abafc55b\u002Fthumbnail"},{"id":30573,"developer":"Punyrobot","mobile":true,"title":"Super Liquid Soccer","type":"game","image":{"path":"6ed4fe5c596152a83c39b738e8ac379d.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fsuper-liquid-soccer","slug":"super-liquid-soccer","animatedThumbnail":"c7cddd9e-36e2-45f1-988e-8fa746cdb935\u002Fthumbnail"},{"id":29664,"developer":"Colin Lane Games AB","mobile":true,"title":"Big Shot Boxing","type":"game","image":{"path":"cd1782b250f70b01d6c054fc6e6ae258683dfc3eb657604d9986495403e4d671.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fbig-shot-boxing","slug":"big-shot-boxing","animatedThumbnail":"0ba6a48b-c2ba-4c15-8e83-c8b524874911\u002Fthumbnail"},{"id":30643,"developer":"Mea coda","mobile":true,"title":"Shady Bears","type":"game","image":{"path":"623fc333ec7c123ac6ec5e130ded5c05.jfif","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fshady-bears","slug":"shady-bears","animatedThumbnail":"34779ffb-ca90-480a-a2b9-caa066446710\u002Fthumbnail"},{"id":29870,"developer":"Madpuffers","mobile":true,"title":"Basketball Legends 2020","type":"game","image":{"path":"a1d3004c30bfd422125e43a558629ad4.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fbasketball-legends-2020","slug":"basketball-legends-2020","animatedThumbnail":"d73171ad-dcae-40b4-8623-2a8311e105eb\u002Fthumbnail"},{"id":29513,"developer":"NadGames","mobile":true,"title":"Combat Reloaded 2","type":"game","image":{"path":"84ad3def86043b739c7720b3098ae15b.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fcombat-reloaded-2","slug":"combat-reloaded-2","animatedThumbnail":"6637eee6-1fca-446c-9ea2-73a6fb507a5d\u002Fthumbnail"},{"id":30551,"developer":"Adventure Islands","mobile":true,"title":"Poor Bunny","type":"game","image":{"path":"933a57c941d34e458e97bcb8cc0e7250.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fpoor-bunny","slug":"poor-bunny","animatedThumbnail":"823072fc-5a22-4559-8dc9-c0de9c390bfe\u002Fthumbnail"},{"id":30400,"developer":"Skullcap Studios","mobile":false,"title":"Blockpost Legacy","type":"game","image":{"path":"d012d72ef238513d8ddd5cc77e6b612a.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fblockpost-legacy","slug":"blockpost-legacy","animatedThumbnail":"dec5f8c7-8e5b-4d8e-b944-822f3e35bdd5\u002Fthumbnail"},{"id":30572,"developer":"Potato Jam","mobile":true,"title":"1010 Color Match","type":"game","image":{"path":"dd44a203a7d758226e290304fdbcd82d.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002F1010-color-match","slug":"1010-color-match","animatedThumbnail":"26c1add0-59cf-44d2-b538-88cbf7f92ca2\u002Fthumbnail"},{"id":29935,"developer":"Potato Jam","mobile":true,"title":"Onet Master","type":"game","image":{"path":"db6315053336a87ed71553a3a18120d4.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fonet-master","slug":"onet-master","animatedThumbnail":"29ecd9d6-4066-450f-a38c-4f2df6f6f425\u002Fthumbnail"},{"id":29260,"developer":"Rens Rongen","mobile":true,"title":"Ninja.io","type":"game","image":{"path":"cfaf0b218ff6733dc3105227a9b18874.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fninja-io","slug":"ninja-io","animatedThumbnail":"2e7a2328-440d-4c6c-aafa-741ef34c2f4f\u002Fthumbnail"},{"id":28356,"developer":"SnoutUp Games","mobile":true,"title":"Iron Snout","type":"game","image":{"path":"a61f335f-b148-4a6b-999f-7d3214b14d9e.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Firon-snout","slug":"iron-snout","animatedThumbnail":"6d81caa3-e159-4a45-b5f1-a6726fc1e3a0\u002Fthumbnail"},{"id":30473,"developer":"ARF Games","mobile":true,"title":"Stick Fighter","type":"game","image":{"path":"b584ae5c620cdc9761f9dcd28f82dc21.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fstick-fighter","slug":"stick-fighter","animatedThumbnail":"a2f8dd3b-8d82-4c01-8176-e0225fea427e\u002Fthumbnail"},{"id":30592,"developer":"Kodiqi","mobile":true,"title":"Idle Breakout","type":"game","image":{"path":"59a42104cf89164d41ed231574452322.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fidle-breakout","slug":"idle-breakout"},{"id":5075,"developer":"Martijn Kunst","mobile":true,"title":"Raft Wars","type":"game","image":{"path":"d2a3bbd1bb8aea542835f4f8a353d388.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fraft-wars","slug":"raft-wars","animatedThumbnail":"5898a238-a08e-405d-8115-5a4627f51054\u002Fthumbnail"},{"id":29640,"developer":"Dreamon Studios AB","mobile":false,"title":"Gladihoppers","type":"game","image":{"path":"c4158282ee354873ed29da8852457eb5.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fgladihoppers","slug":"gladihoppers"},{"id":28558,"developer":"SnoutUp Games","mobile":true,"title":"Bacon May Die","type":"game","image":{"path":"0b3b5b2de68b3a604693bf23b3994aa7.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fbacon-may-die","slug":"bacon-may-die","animatedThumbnail":"81e3ca44-07a6-4e15-9c51-cd0bcdacf899\u002Fthumbnail"},{"id":30060,"developer":"Madpuffers","mobile":true,"title":"Football Legends","type":"game","image":{"path":"7336e7ac04f8c0a88fac674d112ad77c.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Ffootball-legends","slug":"football-legends","animatedThumbnail":"6f6d3c79-fa7d-42a2-9106-30ffcdad48b8\u002Fthumbnail"},{"id":29181,"developer":"Full Hp Ltd","mobile":false,"title":"Mad GunZ","type":"game","image":{"path":"8baf1c301861bcda640b27906979ee08.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fmad-gunz","slug":"mad-gunz","animatedThumbnail":"48906bed-b348-489a-842d-ea00e2e4eba8\u002Fthumbnail"},{"id":30179,"developer":"Bennett Foddy","mobile":true,"title":"Little Master Cricket","type":"game","image":{"path":"e59cb3dd8207039fa03a8745c4917e18.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Flittle-master-cricket","slug":"little-master-cricket"},{"id":30613,"developer":"igamebank","mobile":true,"title":"2 Minute Football","type":"game","image":{"path":"ab597c51ee8e9848ff1a6070214f851c.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002F2-minute-football","slug":"2-minute-football","animatedThumbnail":"8e14ea4a-56be-4962-b3c4-c25a87ce0e48\u002Fthumbnail"},{"id":30249,"developer":"MarketJS","mobile":true,"title":"Idle Mining Empire","type":"game","image":{"path":"5c4239ad22ce9b302ca8158adbcd9c02.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fidle-mining-empire","slug":"idle-mining-empire","animatedThumbnail":"8f837e27-d3eb-4a32-bce1-5c0144e8db05\u002Fthumbnail"},{"id":30421,"developer":"EasyCats","mobile":true,"title":"Merge Arena","type":"game","image":{"path":"28b1a724027f7fd76a8fcced2c89a51e.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fmerge-arena","slug":"merge-arena","animatedThumbnail":"87296c5f-7d45-4bd3-bda6-47feff584fad\u002Fthumbnail"},{"id":29103,"developer":"Neweichgames","mobile":true,"title":"Getaway Shootout","type":"game","image":{"path":"934bde36-a4a1-43d0-8b35-30f15feddbb4.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fgetaway-shootout","slug":"getaway-shootout","animatedThumbnail":"2aeaa6ee-7c86-4da6-9dc3-7d2d70ff418b\u002Fthumbnail"},{"id":29353,"developer":"Freak X Apps","mobile":true,"title":"Cricket World Cup","type":"game","image":{"path":"a9d84b22bc87dc97bcd8ca7a60893404.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fcricket-world-cup","slug":"cricket-world-cup"},{"id":30229,"developer":"Thomas K. Young","mobile":true,"title":"Dadish","type":"game","image":{"path":"6bb56bc01338e59c549454759281f4bf.jpeg","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fdadish","slug":"dadish"},{"id":30419,"developer":"7Spot Games","mobile":true,"title":"Lands of Blight","type":"game","image":{"path":"7c3c1d84708ed1b08bd1b76887eb2e0e.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Flands-of-blight","slug":"lands-of-blight","animatedThumbnail":"3832a49f-acd3-4fe5-9489-ad5fa62364dd\u002Fthumbnail"},{"id":30038,"developer":"Unico Studio","mobile":true,"title":"Who Is?","type":"game","image":{"path":"373740bfb89dd3e6c1fb96674148e806.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fwho-is","slug":"who-is","animatedThumbnail":"6f34788b-b4a3-4d8f-8791-642989c39c40\u002Fthumbnail"},{"id":29879,"developer":"BuyHTML5","mobile":true,"title":"11-11","type":"game","image":{"path":"80999752271d174282f4b9ac62a739bc.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002F11-11","slug":"11-11","animatedThumbnail":"8df2d2ae-46e0-480c-af0a-d10a0abe1316\u002Fthumbnail"},{"id":30210,"developer":"Blumgi","mobile":true,"title":"Blumgi Rocket","type":"game","image":{"path":"672fb98802b00740e3c885cb2b31fc51.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fblumgi-rocket","slug":"blumgi-rocket","animatedThumbnail":"52d3706e-8da4-4004-9554-65029a91087d\u002Fthumbnail"},{"id":30644,"developer":"Martin Magni","mobile":true,"title":"Odd Bot Out","type":"game","image":{"path":"fb59034a96e02ccaa8b9466d1dbd4246.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fodd-bot-out","slug":"odd-bot-out","animatedThumbnail":"70f410db-d606-4d7f-ba67-646e7dc158f5\u002Fthumbnail"},{"id":29861,"developer":"Neweichgames","mobile":false,"title":"House of Hazards","type":"game","image":{"path":"0609b0ba2889859b21cf47ca205818fe.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fhouse-of-hazards","slug":"house-of-hazards","animatedThumbnail":"22c65194-5ea2-4d22-83c3-8a3831d20ea5\u002Fthumbnail"},{"id":30043,"developer":"LAK Games","mobile":true,"title":"Like a King","type":"game","image":{"path":"f0cd739414e134d667d7025aafaedb35.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Flike-a-king","slug":"like-a-king","animatedThumbnail":"032768b5-7b46-414e-a64e-df35c0f55ffd\u002Fthumbnail"},{"id":30282,"developer":"Tobspr","mobile":true,"title":"Kiwi Clicker","type":"game","image":{"path":"71a5cb85e5a0664a3841d216caf12949.jpeg","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fkiwi-clicker","slug":"kiwi-clicker","animatedThumbnail":"747bd8eb-d313-4b49-9a25-2a244a63d287\u002Fthumbnail"},{"id":30066,"developer":"InfinityGames.io","mobile":true,"title":"Wood Blocks 3D","type":"game","image":{"path":"1e3f3fcfb827a63040bb48aecbaa3962.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fwood-blocks-3d","slug":"wood-blocks-3d","animatedThumbnail":"ef2b19cd-33ee-4ebc-a3f1-4a39801ff265\u002Fthumbnail"},{"id":30261,"developer":"AYN-Games","mobile":false,"title":"Cyber Cars Punk Racing","type":"game","image":{"path":"bf6889df631afa4a1711cc62b4e4b1f7.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fcyber-cars-punk-racing","slug":"cyber-cars-punk-racing","animatedThumbnail":"b37fda04-6563-4384-b1c1-eed261c5716c\u002Fthumbnail"},{"id":29883,"developer":"BuyHTML5","mobile":true,"title":"Tiny Fishing","type":"game","image":{"path":"c8cb366d52fc2a67fb313c344efdbc9e.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Ftiny-fishing","slug":"tiny-fishing","animatedThumbnail":"6f619c98-0b1b-4866-ab09-7b937f68fad7\u002Fthumbnail"},{"id":30471,"developer":"Deer Cat Games","mobile":true,"title":"Super Tunnel Rush","type":"game","image":{"path":"58fe1e7371ce50318e3c31024b561209.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fsuper-tunnel-rush","slug":"super-tunnel-rush","animatedThumbnail":"bdad9612-7cfc-4e59-8df3-2f833ce55e91\u002Fthumbnail"},{"id":30317,"developer":"AYN-Games","mobile":false,"title":"Real Cars in City","type":"game","image":{"path":"3b3de7b6dde15c0c7cc84f50a0aed593.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Freal-cars-in-city","slug":"real-cars-in-city","animatedThumbnail":"b1a0fb8c-ae0b-4fbe-a7aa-02c6cd6d6943\u002Fthumbnail"},{"id":29001,"developer":"Trebuchet Entertainment LLC","mobile":false,"title":"Warbrokers.io","type":"game","image":{"path":"6828b797-8a4a-4640-937e-117834b1f50d.jpg","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fwarbrokers-io","slug":"warbrokers-io"},{"id":30646,"developer":"Art Industries","mobile":true,"title":"Stickman Crazy Box","type":"game","image":{"path":"7d0eef3020f2cc401d3861fd8d45f2d3.png","x":0.5,"y":0.5},"url":"\u002Fen\u002Fg\u002Fstickman-crazy-box","slug":"stickman-crazy-box","animatedThumbnail":"f4c329fb-cfed-44d8-91fd-25068d0d08e7\u002Fthumbnail"}],"alternates":[{"href":"https:\u002F\u002Fpoki.com\u002F","hrefLang":"en","lang":"en"},{"href":"https:\u002F\u002Fpoki.com\u002Fru","hrefLang":"ru","lang":"ru"},{"href":"https:\u002F\u002Fpoki.com\u002Fua","hrefLang":"ru-ua","lang":"ru"},{"href":"https:\u002F\u002Fpoki.com\u002Far","hrefLang":"ar","lang":"ar"},{"href":"https:\u002F\u002Fpoki.com\u002Fth","hrefLang":"th","lang":"th"},{"href":"https:\u002F\u002Fpoki.com\u002Fkr","hrefLang":"ko","lang":"ko"},{"href":"https:\u002F\u002Fpoki.com\u002Fes","hrefLang":"es","lang":"es"},{"href":"https:\u002F\u002Fpoki.com\u002Ffr","hrefLang":"fr","lang":"fr"},{"href":"https:\u002F\u002Fpoki.com\u002Ftr","hrefLang":"tr","lang":"tr"},{"href":"https:\u002F\u002Fpoki.com\u002Fgr","hrefLang":"el","lang":"el"},{"href":"https:\u002F\u002Fpoki.com\u002Fno","hrefLang":"no","lang":"no"},{"href":"https:\u002F\u002Fpoki.com\u002Fro","hrefLang":"ro","lang":"ro"},{"href":"https:\u002F\u002Fpoki.com\u002Fbg","hrefLang":"bg","lang":"bg"},{"href":"https:\u002F\u002Fpoki.com\u002Fhu","hrefLang":"hu","lang":"hu"},{"href":"https:\u002F\u002Fpoki.com\u002Fsk","hrefLang":"sk","lang":"sk"},{"href":"https:\u002F\u002Fpoki.com\u002Fse","hrefLang":"sv","lang":"se"},{"href":"https:\u002F\u002Fpoki.com\u002Fit","hrefLang":"it","lang":"it"},{"href":"https:\u002F\u002Fpoki.com\u002Fdk","hrefLang":"da","lang":"da"},{"href":"https:\u002F\u002Fpoki.com\u002Ffi","hrefLang":"fi","lang":"fi"},{"href":"https:\u002F\u002Fpoki.com\u002Fpl","hrefLang":"pl","lang":"pl"},{"href":"https:\u002F\u002Fpoki.com\u002Fcz","hrefLang":"cs","lang":"cz"},{"href":"https:\u002F\u002Fpoki.com\u002Fnl","hrefLang":"nl","lang":"nl"},{"href":"https:\u002F\u002Fpoki.com\u002Fjp","hrefLang":"ja","lang":"ja"},{"href":"https:\u002F\u002Fpoki.com\u002Fil","hrefLang":"he","lang":"he"},{"href":"https:\u002F\u002Fpoki.com\u002Fbr","hrefLang":"pt-br","lang":"pt"},{"href":"https:\u002F\u002Fpoki.com\u002Fde","hrefLang":"de","lang":"de"},{"href":"https:\u002F\u002Fpoki.com\u002Fzh","hrefLang":"zh","lang":"zh"},{"href":"https:\u002F\u002Fpoki.com\u002Fid","hrefLang":"id","lang":"id"},{"href":"https:\u002F\u002Fpoki.com\u002F","hrefLang":"x-default"}]},"fulfilledTimeStamp":1705600530850},"getCategory({\"device\":\"desktop\",\"geo\":\"ES\",\"site\":{\"domain\":\"poki.com\",\"domain_title\":\"Poki.com\",\"id\":3,\"iso_lang\":\"en\",\"lang\":\"en\",\"languageName\":\"English\",\"paths\":{\"prefix\":\"\u002Fen\"}},\"slug\":\"\"})":{"status":"rejected","endpointName":"getCategory","requestId":"yxl4HE75yEyT_jbRWKAxq","originalArgs":{"slug":"","site":{"id":3,"lang":"en","languageName":"English","domain":"poki.com","domain_title":"Poki.com","iso_lang":"en","paths":{"prefix":"\u002Fen"}},"device":"desktop","geo":"ES"},"startedTimeStamp":1705600530842,"error":{"status":"PARSING_ERROR","originalStatus":404,"data":"404 page not found\n","error":"SyntaxError: Unexpected token p in JSON at position 4"}}},"mutations":{},"provided":{},"subscriptions":{"getLocalisations({\"geo\":\"ES\",\"site\":{\"domain\":\"poki.com\",\"domain_title\":\"Poki.com\",\"id\":3,\"iso_lang\":\"en\",\"lang\":\"en\",\"languageName\":\"English\",\"paths\":{\"prefix\":\"\u002Fen\"}}})":{"azSlg4LuVv-Es-Qb6ePEJ":{}},"getImvitaConfigs({})":{"GVUb2yStlVhxa2PybgGLJ":{}},"getHomepage({\"device\":\"desktop\",\"geo\":\"ES\",\"site\":{\"domain\":\"poki.com\",\"domain_title\":\"Poki.com\",\"id\":3,\"iso_lang\":\"en\",\"lang\":\"en\",\"languageName\":\"English\",\"paths\":{\"prefix\":\"\u002Fen\"}}})":{"iJbgfuW2HGToEaXXN5s1c":{}},"getCategory({\"device\":\"desktop\",\"geo\":\"ES\",\"site\":{\"domain\":\"poki.com\",\"domain_title\":\"Poki.com\",\"id\":3,\"iso_lang\":\"en\",\"lang\":\"en\",\"languageName\":\"English\",\"paths\":{\"prefix\":\"\u002Fen\"}},\"slug\":\"\"})":{"yxl4HE75yEyT_jbRWKAxq":{}}},"config":{"online":true,"focused":true,"middlewareRegistered":true,"refetchOnFocus":false,"refetchOnReconnect":false,"refetchOnMountOrArgChange":false,"keepUnusedDataFor":60,"reducerPath":"api"}}};
		</script>
		<link rel="icon" type="image/x-icon" href="https://a.poki.com/img/favicon.ico">
		
		<title data-react-helmet="true">404 not found</title>
		<meta data-react-helmet="true" name="description" content="Sorry, the page you requested does not exist on this site."/>
	</head>
	<body class="desktopVersion">
		<div id="app-root"><div style="display: contents;"><nav id="nav" class="qoMYGbBhf9dsbaBGBphh DJT17TB5hYo14sdLEAwk"><div class="AzvNggSudjN8b9d1tUDT"><a href="/" title="Poki" aria-label="Poki" class="C9JUSu6VaKM5y0Kq4sg2 yggcq_ZJewqJonP5DRa1"><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#pokiIcon"></use></svg></a></div><div class="NuKVRCDKjJRkfpgoOKXi"><a href="/" title="Online Games on Poki" class="Ms6HEJ826qeso4NBVCoW rVxGHuZn23EnCuxFdknm"><svg xmlns="http://www.w3.org/2000/svg" class="aprWdaSScyiJf4Jvmsx9"><use xlink:href="#homeIcon"></use></svg></a><button type="button" title="What are you playing today?" class="buttonReset Ms6HEJ826qeso4NBVCoW dh2x0Msr5tQ9qK1KUc6A">What are you playing today?<svg xmlns="http://www.w3.org/2000/svg" class="B_5ykBA46kDOxiz_R9wm"><use xlink:href="#searchIcon"></use></svg></button></div></nav></div><svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
	<symbol id="arrowIcon" viewBox="6 0 14 24">
		<path d="M9 19.91a2 2 0 0 1-1.403-3.424L12.15 12 7.597 7.514a2 2 0 1 1 2.806-2.85l6 5.91a2 2 0 0 1 0 2.85l-6 5.911A1.993 1.993 0 0 1 9 19.911z"></path>
	</symbol>
	<symbol id="closeIcon" viewBox="0 0 16 16">
		<path d="M4.2 1.3c-.8-.8-2.1-.7-2.8 0-.7.8-.7 2 0 2.8L5.3 8l-3.9 3.9c-.8.8-.8 2 0 2.8s2 .8 2.8 0l3.9-3.9 3.7 3.7c.8.8 2 .8 2.8 0s.8-2 0-2.8L10.9 8l3.7-3.7c.8-.8.8-2 0-2.8s-2-.8-2.8 0L8.1 5.1 4.2 1.3z"></path>
	</symbol>
	<symbol id="closeWideIcon" viewBox="0 0 36 36">
		<rect x="8" y="24.971" width="24" height="4" rx="2" transform="rotate(-45 8 24.97)" fill="currentColor"></rect>
		<rect x="10.828" y="8" width="24" height="4" rx="2" transform="rotate(45 10.828 8)" fill="currentColor"></rect>
	</symbol>
	<symbol id="favIcon" viewBox="0 0 36 36">
		<g fill="none">
			<path d="M18.0837 0C12.3552 0 7.6096 1.9567 4.3607 5.657 1.5489 8.86 0 13.224 0 17.945c0 4.8601 1.578 9.3005 4.444 12.5035C7.694 34.081 12.4103 36 18.0837 36c5.551 0 10.2023-1.914 13.4495-5.5361C34.4134 27.2512 36 22.8445 36 18.0556c0-4.8365-1.5852-9.2762-4.4637-12.5017C28.2945 1.921 23.6426 0 18.0837 0z" fill="#002b50"></path>
			<path d="M18.0002 30.2865c-6.7867 0-12.3074-5.5782-12.3074-12.4339 0-6.5792 5.636-12.1375 12.3074-12.1375 6.6715 0 12.3076 5.5583 12.3076 12.1375 0 6.8557-5.5216 12.4339-12.3076 12.4339" fill="#fff"></path>
			<path d="M17.9182 18.8012c-5.4178 0-8.1573.939-9.2878 1.2275.9465 4.3075 4.7498 7.5394 9.2878 7.5394 4.5374 0 8.3411-3.2319 9.2878-7.5394-1.1304-.2884-3.8702-1.2275-9.2878-1.2275" fill="#009cff"></path>
		</g>
	</symbol>
	<symbol id="fireIcon" viewBox="0 0 24 24">
		<path d="M10.9828 20.0414c-.7856.6508-1.2665 1.5768-1.3389 2.5696-.0774 1.0614-1.2047 1.7069-2.1592 1.2363-3.3837-1.6679-5.5127-5.0707-5.4843-8.759-.0344-3.5216 2.3036-6.8544 5.5934-9.672 1.2717-.9823 2.0509-2.4393 2.1479-4.007C9.8114.2816 11.0557-.367 12.02.2215c1.6728 1.0207 2.7725 2.5369 3.3761 4.3736.5424 1.6504.6382 3.352.4845 4.8893-.024.241-.0494.4224-.069.5348-.1422.8161-.919 1.3625-1.7352 1.2203-.8161-.1422-1.3625-.9191-1.2203-1.7352.0075-.0431.0229-.1528.0394-.3184.1156-1.1565.042-2.463-.3494-3.6541-.131-.3989-.2933-.768-.4892-1.106-.562 1.3001-1.4444 2.4485-2.57 3.3164-2.6095 2.237-4.5099 4.946-4.4867 7.343-.0148 1.9297.8207 3.7436 2.2458 5.017.4234-.912 1.0586-1.7369 1.8806-2.4166.607-.4545.9976-1.1222 1.0886-1.8526.129-1.0362 1.2507-1.6268 2.178-1.1468 2.1897 1.1334 3.8037 3.0503 4.5453 5.3023 1.2283-1.0917 1.9863-2.6305 2.0567-4.2888.0779-2.548-.8015-5.0377-2.4761-7.0039-.5372-.6306-.4614-1.5773.1693-2.1145.6307-.5372 1.5774-.4614 2.1145.1693 2.156 2.5313 3.2916 5.7465 3.1902 9.0585-.1474 3.4788-2.2822 6.5725-5.509 7.9895-.9614.4222-2.0479-.2486-2.1012-1.2972-.0804-1.5807-.7809-3.0497-1.9231-4.1271-.378.651-.8805 1.2214-1.4771 1.6671z"></path>
	</symbol>
	<symbol id="closeFullscreenIcon" viewBox="0 0 24 24">
		<path d="M5.25 15.5a1.25 1.25 0 1 1 0-2.5h4.5a1.25 1.25 0 1 1 0 2.5h-4.5zM14.25 15.5a1.25 1.25 0 1 1 0-2.5h4.5a1.25 1.25 0 1 1 0 2.5h-4.5zM5.25 11a1.25 1.25 0 1 1 0-2.5h4.5a1.25 1.25 0 1 1 0 2.5h-4.5zM14.25 11a1.25 1.25 0 1 1 0-2.5h4.5a1.25 1.25 0 1 1 0 2.5h-4.5z" fill="#fff"/><path d="M14.25 20c-.69 0-1.25-.56-1.25-1.25v-4.5a1.25 1.25 0 1 1 2.5 0v4.5c0 .69-.56 1.25-1.25 1.25zM14.25 11c-.69 0-1.25-.56-1.25-1.25v-4.5a1.25 1.25 0 1 1 2.5 0v4.5c0 .69-.56 1.25-1.25 1.25zM9.75 11c-.69 0-1.25-.56-1.25-1.25v-4.5a1.25 1.25 0 1 1 2.5 0v4.5c0 .69-.56 1.25-1.25 1.25zM9.75 20c-.69 0-1.25-.56-1.25-1.25v-4.5a1.25 1.25 0 1 1 2.5 0v4.5c0 .69-.56 1.25-1.25 1.25z" fill="#fff"/>
	</symbol>
	<symbol id="enterFullscreenIcon" viewBox="0 0 24 24">
		<path d="M5.25 20a1.25 1.25 0 1 1 0-2.5h4.5a1.25 1.25 0 1 1 0 2.5h-4.5zM14.25 20a1.25 1.25 0 1 1 0-2.5h4.5a1.25 1.25 0 1 1 0 2.5h-4.5zM5.25 6.5a1.25 1.25 0 1 1 0-2.5h4.5a1.25 1.25 0 1 1 0 2.5h-4.5zM14.25 6.5a1.25 1.25 0 1 1 0-2.5h4.5a1.25 1.25 0 1 1 0 2.5h-4.5z" fill="#009CFF"/><path d="M5.25 11C4.56 11 4 10.44 4 9.75v-4.5a1.25 1.25 0 1 1 2.5 0v4.5c0 .69-.56 1.25-1.25 1.25zM18.75 11c-.69 0-1.25-.56-1.25-1.25v-4.5a1.25 1.25 0 1 1 2.5 0v4.5c0 .69-.56 1.25-1.25 1.25zM5.25 20C4.56 20 4 19.44 4 18.75v-4.5a1.25 1.25 0 1 1 2.5 0v4.5c0 .69-.56 1.25-1.25 1.25zM18.75 20c-.69 0-1.25-.56-1.25-1.25v-4.5a1.25 1.25 0 1 1 2.5 0v4.5c0 .69-.56 1.25-1.25 1.25z" fill="#009CFF"/>
	</symbol>
	<symbol id="homeIcon" viewBox="0 0 20 17">
		<path d="M6 7.6061V14h8V7.6409L9.9826 3.6235zm-3 3l-.4394.4394c-.586.586-1.535.586-2.121 0s-.586-1.536 0-2.121l8.469-8.47c.005-.005.006-.011.011-.016.293-.293.678-.439 1.063-.438.385-.001.77.145 1.064.438.004.005.005.011.01.016l8.469 8.47c.586.585.586 1.535 0 2.121-.585.586-1.535.586-2.121 0L17 10.6409V15.5c0 .8284-.6716 1.5-1.5 1.5h-11c-.8284 0-1.5-.6716-1.5-1.5zM9 10h2v4H9z"></path>
	</symbol>
	<symbol id="playIcon" viewBox="0 0 37 37">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9827 22.8299L23.2833 18.1768L15.9827 13.5236V22.8299ZM12.9827 10.3035V26.05C12.9827 26.9768 14.2278 27.5059 15.1003 26.9498L27.4533 19.0766C28.1591 18.6267 28.1591 17.7269 27.4533 17.277L15.1003 9.40375C14.2278 8.84764 12.9827 9.3767 12.9827 10.3035Z"/>
	</symbol>
	<symbol id="kidsIcon" viewBox="0 0 1628 709">
		<g fill="none">
			<path d="M1627.735 189.112c2.0763 0-8.695 42.2868-9.7463 45.3772-5.1748 15.1598-13.9985 26.8349-24.4857 38.878-13.4187 15.414-36.3317 22.3395-56.0673 27.4775a1.1639 1.1639 0 0 1-.3163.0438c-5.8776.0234-14.019 1.3641-19.759 0-10.3788-2.474-21.598-12.1395-30.9841-17.4148-11.5883-6.5166-32.592-13.5036-41.9516-23.3063-1.4028-1.4693-3.2185-7.7055-4.4046-9.5808-.7087-1.1246-4.3987-3.6103-5.6257-5.2373-2.1057-2.7953-4.797-8.0881-5.986-11.1318-6.5248-16.7634-6.9407-51.3096-2.3516-68.482 3.4264-12.8346 17.1555-21.7406 25.9001-32.5511 8.5602-10.5798 15.375-21.2179 29.069-26.4815 4.8028-1.8431 10.9557-3.622 15.8054-4.9422 7.5176-2.0476 6.7474-1.3203 14.0746-1.1012 11.2193.3359 13.445 2.2725 23.6716-1.183 7.9832-2.699 7.7636-2.9736 16.9212-2.9765.12 0 .246.0117.3631.038 7.2365 1.5422 15.9402 10.0773 22.2424 14.336 7.7139 5.2169 13.0878 10.9712 19.9318 17.7595 8.9204 8.8505 21.314 15.446 25.8475 28.2954 1.1421 3.2364-.1113 32.1831 7.8514 32.1831m-110.2425 218.1505c10.2298-34.363 64.1803 15.084 36.8746 39.7225-27.3145 24.6503-43.5343-17.3424-36.8746-39.7225M786.3452 22.7927c7.4408-12.4639 26.0238-.2252 38.3413 6.5214 6.5198 3.5736 13.6624 10.8875 21.837 10.6126 6.6339-.2222 14.0337-7.7175 19.9132-10.5337 7.6455-3.6642 16.3844-4.796 24.1176-7.9222 10.2943-4.1643 20.3255-10.3085 32.605-10.8349 8.692-.3772 18.1795 2.7753 23.8894 3.9947 6.3795 1.3628 12.3818-2.4974 19.9893-1.6318 7.0198.8013 10.4668 7.1239 12.8584 7.9076 5.8006 1.895 8.6336 1.512 14.522 2.7519 15.5452 3.2753 25.5851-11.3028 36.7916-17.8067 13.835-8.0334 33.5932-7.8316 43.7881 6.188 4.4499 6.1208 5.2568 10.6946 11.7854 15.6602 5.137 3.907 12.8701 6.8636 18.5187 10.5951 4.3417 2.8689 6.2508 6.8402 11.6246 8.2527 8.4407 2.2196 19.9892-.62 28.8217-.12 10.5691.5996 20.2641 4.0094 21.995 15.5725 2.3184 15.476 1.4062 26.7817 20.533 31.3496 22.1703 5.2932 23.3866-8.4515 39.5575-19.3127 24.2286-16.2743 64.2072-10.8028 84.708 6.109 11.2797 9.3055 14.3145 14.0109 21.0506 26.846 7.2625 13.8413 10.1365 30.5864 7.856 46.349-1.3888 9.589-6.9672 22.7606-12.6684 30.8583-8.7096 12.3702-30.1432 16.6018-33.906 32.9726-2.8418 12.3615 11.9199 32.2153 18.583 42.0062 4.2949 6.3167 4.862 6.6413 10.4083 7.308 5.6573.6756 17.7293-3.7753 21.229 3.9334 3.8709 8.5246-13.452 12.9141-17.9164 15.0958-3.8242 1.8686-4.2102.3743-6.745 1.8891-2.988 1.784-5.058 4.8107-5.9819 8.165-3.1692 11.4987-14.2997 7.0916-15.8727 17.7774-.6812 4.6352 5.3913 13.9436 6.0871 17.6926 2.7103 14.6045-21.1207 38.2863-3.9966 40.4095 2.4295.3012 4.8504-.7136 6.3648-2.6378 2.8068-3.5766 6.8912-9.0745 7.435-9.4079 7.4992-8.0391 16.7615-9.5218 22.1177-10.9635 12.5572-3.3777 17.0363-5.84 32.1606-5.8489 16.1095 4.0065 25.8542 8.3521 38.008 20.4709 7.7828 7.7526 20.9365 21.5324 24.1905 33.7125.8011 2.9887 1.9501 5.8371 3.3067 8.6153 2.7775 5.6821 1.6198 13.543.7573 20.8422.1403 12.3469-6.8766 28.9838-13.6361 39.1841-12.6128 19.0262-32.1606 23.3952-52.6264 29.244-17.5422-2.9244-35.4878.8832-50.3957-8.162-6.017-3.6467-14.8815-13.0399-19.8109-17.9821-8.733-8.9487-8.733-35.2683-16.9778-8.8697-2.9267 9.3727.187 21.082 4.827 28.627 3.9586 6.4453 10.1773 8.1386 4.4118 16.4263-6.0345 8.665-17.7176 3.7784-25.9857 7.0274-11.9287 4.6936-14.329 13.5458-16.2645 24.5065-1.7396 9.8347 1.2776 15.9643-3.6985 24.4129-4.251 7.2145-15.1213 15.6456-21.9657 20.6521-6.128 4.4831-14.8932 8.282-19.1355 14.742-3.4032 5.182-3.0757 12.066-6.2801 17.523-3.8768 6.6091-10.2388 8.7235-15.8406 12.6948-8.2418 5.846-14.6535 11.8117-22.1118 18.684-6.5783 6.0653-15.209 9.4488-24.1526 9.4956-14.8962.0702-28.2429.3597-43.3671 5.2288-18.6795 6.0155-28.9036 29.478-46.4194 33.7798-8.8705 2.322-18.3988-8.4954-26.743-11.1332-13.8583-4.3808-21.7055-.2895-30.6958 10.2383-3.3798 3.9568-5.8533 13.1657-8.084 14.8326-5.175 3.8602-24.5912-3.3309-29.4737-5.8634-12.2561-6.346-35.8708-24.9042-51.0944-20.1024-8.932 2.8162-5.8474 15.6105-14.908 18.0787-10.4258 2.8425-18.045-7.6444-23.0445-13.6424-6.6981-8.0333-31.9617-24.1321-43.864-18.7659-5.789 2.6086-7.5637 12.7241-14.4782 15.8006-8.1278 3.6204-16.4516.7282-19.9162-7.8345-3.4704-8.5831 4.4382-17.5025.4006-25.1148-8.4407-14.9086-19.2905-9.4692-25.6232-9.6125-7.2332-.1667-26.6728.5527-30.0175-15.5636-11.227-54.081-49.2817-24.8253-52.2054-54.0694-3.2512-32.534 0-40.9416-32.1606-61.4124-35.3153-22.4828 2.9237-49.7149-26.3132-90.6566-5.5112-7.7204-17.5422-14.274-17.5422-23.3952 0-8.7732 17.5422-23.3952 11.6948-40.9416-1.9618-5.8956-17.5421-17.5465-16.4575-29.3406.7163-7.8286 10.5721-19.8128 15.209-26.15 7.7859-10.639 9.8149-26.3694-1.605-37.8652-2.1957-2.2108-3.9938-6.7232-4.1868-9.8348-1.4209-22.6348 10.2534-25.4569 31.7747-23.5122 9.4581.8569 15.0716-7.3402 17.1445-14.312 2.181-7.3373 0-17.9207 0-25.6646-.7981-11.8847-3.2453-23.2987 7.2362-29.0071 8.0576-4.3925 18.6502-1.0528 26.591-7.1677 9.5224-7.3344 7.0635-17.2336 10.8877-26.8548 4.0464-10.1857 11.572-13.3675 21.0477-16.9704 16.3872-6.2319 37.5752-11.3554 50.5769-23.7812 8.5693-8.1883 23.3661-30.3495 16.6153-38.1869-6.4058-7.4338-2.3653-18.8858 0-22.8483" fill="#D901FF"></path>
			<g fill="#FFF">
				<path d="M914.5672 244.5705c-.7178-3.1076-1.7917-5.3886-3.2274-6.8226-1.4386-1.437-3.5922-2.7513-6.4607-3.9517-2.8714-1.1945-6.341-1.7962-10.406-1.7962h-17.9433c-4.0708 0-7.5346.6017-10.406 1.7962-2.8685 1.2004-5.025 2.5147-6.4578 3.9517-1.4357 1.434-2.5124 3.715-3.2303 6.8226-.7178 3.1135-1.138 5.6281-1.2577 7.544-.1226 1.919-.178 4.79-.178 8.619v197.533c0 3.832.0554 6.7088.178 8.619.1196 1.9217.5399 4.4335 1.2577 7.544.7179 3.1134 1.7946 5.3886 3.2303 6.8256 1.4328 1.434 3.5893 2.7541 6.4578 3.9487 2.8714 1.2033 6.3352 1.7962 10.406 1.7962h17.9434c4.0649 0 7.5345-.5929 10.406-1.7962 2.8684-1.1946 5.022-2.5147 6.4606-3.9487 1.4357-1.437 2.5096-3.7122 3.2274-6.8256.7179-3.1105 1.1322-5.6223 1.2577-7.544.1167-1.9102.1751-4.787.1751-8.619v-197.533c0-3.829-.0584-6.7-.175-8.619-.1256-1.9159-.54-4.4305-1.2578-7.544M885.5 213c16.8172 0 30.5-14.528 30.5-32.384C916 163.4785 902.0317 149 885.5 149c-16.5347 0-30.5 14.4785-30.5 31.616C855 198.472 868.6798 213 885.5 213M1028.1884 420.0422C1024.9826 430.6807 1017.0783 436 1004.4841 436c-4.7537 0-7.1276-5.9725-7.1276-17.9321 0-14.3452-.0608-35.739-.1739-64.19-.1246-28.4483-.1826-49.3667-.1826-62.7582 0-4.0623.4754-6.932 1.426-8.6088.948-1.6681 2.9682-2.5109 6.058-2.5109 5.2261 0 9.6261 1.1403 13.1914 3.4091 3.5652 2.2747 6.3507 5.261 8.3768 8.9646 2.0145 3.7095 3.5623 9.1455 4.6319 16.3166 1.0695 7.174 1.7217 14.1672 1.9594 20.9796.2348 6.8153.3565 15.9578.3565 27.4333 0 31.3208-1.6029 52.3033-4.8116 62.939m63.845-138.478c-3.588-11.493-8.608-20.591-15.069-27.2968-6.4552-6.703-15.1244-12.0888-26.0017-16.1631-10.886-4.0686-24.0969-6.1043-39.6384-6.1043h-53.803c-4.0721 0-7.5345.5987-10.4019 1.7962-2.8703 1.2004-5.023 2.5118-6.4581 3.9488-1.4352 1.437-2.5115 3.7151-3.2262 6.8257-.7175 3.1134-1.1376 5.6281-1.2572 7.5412-.1196 1.9189-.1779 4.7929-.1779 8.619V458.269c0 3.832.0583 6.706.178 8.619.1195 1.9218.5396 4.4307 1.2571 7.5442.7147 3.1105 1.791 5.3886 3.2262 6.8256 1.4351 1.434 3.5878 2.7542 6.4581 3.9459 2.8674 1.2033 6.3298 1.7962 10.4018 1.7962h53.8031c11.4782 0 21.7575-1.1332 30.8467-3.4085 9.0892-2.2752 16.7404-5.2105 22.9622-8.803 6.2131-3.5895 11.5307-8.5576 15.9586-14.9042 4.4221-6.3409 7.9458-12.7518 10.5827-19.2153 2.6282-6.4635 4.6613-14.4194 6.0964-23.8854 1.4352-9.4543 2.3307-18.4325 2.6895-26.9347.3587-8.4933.5396-18.6135.5396-30.3489 0-16.9984-.6009-31.3653-1.794-43.0978-1.1988-11.7295-3.5878-23.345-7.1727-34.838M1235.4099 367.9526c-7.066-13.547-20.646-28.5974-40.7517-45.1457-6.9462-5.754-11.5537-10.487-13.8224-14.208-2.2832-3.715-3.4132-8.454-3.4132-14.208 0-9.589 5.1447-14.3894 15.44-14.3894 3.8249 0 9.2732.664 16.3333 1.9775 7.0572 1.3222 11.3113 1.9804 12.7508 1.9804h2.8701c9.0923 0 13.6443-3.598 13.6443-10.7913v-27.6993c0-5.0373-4.4878-8.8694-13.4632-11.511-8.9784-2.6385-21.1307-3.9578-36.448-3.9578-7.1797 0-13.5245.3598-19.0254 1.0794-5.5096.7196-11.9128 2.5801-19.2123 5.5756-7.3024 3.0013-13.4048 7.0148-18.31 12.0491-4.9112 5.0373-9.0982 12.5348-12.5669 22.4836-3.4716 9.9547-5.206 21.644-5.206 35.074 0 9.5919 2.0935 18.587 6.2805 26.9767 4.187 8.3985 8.9784 15.5303 14.3654 21.4042 5.3841 5.8798 14.8998 15.5302 28.544 28.9572 6.9404 6.7193 12.0822 12.4704 15.44 17.2678 3.349 4.8004 5.3227 8.2727 5.9213 10.4286.5956 2.1618.9022 4.9203.9022 8.2756 0 5.2771-2.5782 9.7733-7.7229 13.4913-5.1476 3.721-10.4762 5.5726-15.9771 5.5726-7.6616 0-15.3202-.898-22.9789-2.697-7.6645-1.7991-12.5668-2.6972-14.7216-2.6972-8.8587 0-13.2822 2.8785-13.2822 8.6354v27.6964c0 6.7164 5.022 11.6338 15.0779 14.7463 10.0528 3.1154 22.497 4.6804 37.3413 4.6804 12.926 0 24.4154-1.3222 34.4654-3.9608 16.7567-4.5488 29.563-13.544 38.4217-26.9768 6.4644-9.8318 9.6937-25.0578 9.6937-45.6839 0-16.0655-3.5359-30.8732-10.5901-44.426M792.716 346.1657c-.0528-.2366-.0557-.4877.0527-.7068l34.9487-70.166c3.0542-5.8559 5.47-10.6224 7.2006-14.2002 4.079-8.1399 6.12-14.4836 6.12-19.0369 0-3.1075-1.139-5.444-3.4201-7.0037-2.284-1.5538-4.6794-2.4504-7.2006-2.6929-2.5213-.2365-6.4246-.3592-11.7043-.3592h-20.8843c-3.1215 0-5.8214.4206-8.1025 1.2559-2.284.8411-4.1405 1.7962-5.5813 2.874-1.4377 1.0776-2.9429 3.1163-4.5007 6.107-1.5637 2.9937-2.8228 5.5084-3.7804 7.5412-.9604 2.0357-2.4011 5.628-4.3191 10.7743-1.9268 5.152-6.9664 18.4965-10.085 28.5524-3.1215 10.0558-6.363 18.441-9.7218 25.141-3.3645 6.7059-6.6032 10.0559-9.7218 10.0559-.9634 0-1.5022-2.6316-1.6222-7.9004-.123-5.263-.1787-23.8239-.1787-55.6678 0-3.829-.0615-6.7-.1786-8.6218-.126-1.913-.5417-4.4277-1.262-7.5412-.7204-3.1105-1.801-5.3886-3.2417-6.8256-1.4407-1.434-3.5988-2.7483-6.4802-3.9487-2.8814-1.1945-6.3631-1.7962-10.4422-1.7962h-18.0058c-4.085 0-7.5608.6017-10.4422 1.7962-2.8785 1.2004-5.0424 2.5147-6.4802 3.9487-1.4407 1.437-2.5212 3.7151-3.2416 6.8256-.7203 3.1135-1.142 5.6281-1.2591 7.5412-.123 1.9218-.1816 4.7928-.1816 8.6218v197.533c0 3.832.0586 6.7088.1816 8.619.117 1.9217.5388 4.4335 1.2591 7.544.7204 3.1105 1.8009 5.3886 3.2416 6.8256 1.4378 1.434 3.6017 2.7541 6.4802 3.9458C693.044 486.407 696.5198 487 700.6047 487h18.0058c4.0791 0 7.5608-.5929 10.4422-1.7991 2.8814-1.1917 5.0395-2.5118 6.4802-3.9458 1.4407-1.437 2.5213-3.7151 3.2416-6.8256.7204-3.1105 1.1362-5.6223 1.2621-7.544.1171-1.9102.1786-4.787.1786-8.619V404.395c0-2.1583-.123-5.2104-.3601-9.1592-.243-3.9516-.3602-6.6445-.3602-8.0814 0-5.266.9575-7.9004 2.8814-7.9004 1.918 0 3.7804 1.139 5.5812 3.4113 1.801 2.2752 3.719 6.0487 5.7629 11.3117 2.035 5.2718 3.959 10.5962 5.7598 15.9848 1.801 5.3857 4.1962 12.9298 7.2006 22.6264 2.9986 9.6966 5.8185 18.3768 8.4627 26.0377 4.322 12.6932 8.1025 20.5965 11.344 23.704 3.2387 3.1164 10.2607 4.6702 21.063 4.6702h18.7262C838.757 487 845 483.4076 845 476.2228c-.7145-11.633-51.9649-129.3328-52.284-130.057"></path>
			</g>
			<path d="M542.0015 326C562.9519 326 580 308.7474 580 287.5435 580 267.1915 562.5987 250 542.0015 250 521.4013 250 504 267.1916 504 287.5435 504 308.7474 521.0452 326 542.0015 326" fill="#002B50"></path>
			<path d="M255.5 463c-47.1482 0-85.5-39.2787-85.5-87.5472C170 329.1387 209.1428 290 255.5 290c46.3397 0 85.5 39.1387 85.5 85.4528C341 423.7213 302.6452 463 255.5 463zM85.785 402.9706c-4.03 0-26.5077.0294-29.785.0294v-53c7.953 0 24.2004.05 28.9686.05 7.51 0 20.0314 5.1348 20.0314 25.4453 0 13.0194-5.3212 27.4753-19.215 27.4753zm418.1-63.6899v110.384l-33.9785-73.8017c15.3584-19.2203 21.6187-46.3298 22.3172-65.8336l.0146-15.9624h-60.2296v15.3868c-.8388 19.6265-7.2218 28.7896-24.7722 34.4873V240l-61.2525.0643v44.2845c-22.3026-22.7968-53.1188-34.797-89.5231-34.797-39.85 0-72.87 13.803-95.4678 39.887-6.801 7.857-12.5176 16.725-17.1149 26.3205-14.8002-15.1998-35.4106-21.6923-59.873-21.6923H0V513h56.0035v-52.2467h28.0017c24.3835 0 44.9939-8.1375 59.8555-23.5243 4.723 9.9345 10.6413 19.0655 17.7082 27.0803 22.6124 25.6164 55.4277 39.1419 94.892 39.1419 38.6284 0 70.976-13.4934 93.5739-39.0338 1.5694-1.7736 3.06-3.6203 4.5037-5.4815h52.698v-54.3476l8.0752-1.8641 25.9705 56.2117H578V339.2807h-74.115z" fill="#002B50"></path>
			<path d="M256 382c-37.9142 0-57.0864 6.6429-65 8.6819C197.623 421.1414 224.2434 444 256 444s58.377-22.8586 65-53.3181c-7.9106-2.039-27.0828-8.6819-65-8.6819" fill="#D901FF"></path>
		</g>
	</symbol>
	<symbol id="pokiIcon" viewBox="0 0 578.88 273.16">
		<path fill="#002b50" d="M541 85.8c21 0 38-17.4 38-38.7 0-20.4-17.4-37.7-38-37.7S503.5 26.6 503.5 47c0 21.4 17 38.8 37.7 38.8z"></path>
		<path fill="#002b50" d="M504 99.3v110.5L470 136c15.4-19.3 21.7-46.4 22.4-66V54h-60.2v15.5c-1 19.6-7.3 28.8-24.8 34.5V0H346v44.4C324 21.6 293 9.6 256.7 9.6c-40 0-73 13.8-95.6 40a118 118 0 0 0-17 26.2C129 60.6 108.4 54 84 54H0v219.2h56V221h28c24.4 0 45-8.3 60-23.7a116.3 116.3 0 0 0 17.6 27c22.7 25.8 55.5 39.3 95 39.3 38.6 0 71-13.5 93.6-39l4.5-5.6h52.7v-54.3l8-2 26 56.4h136.8V99.4h-74zm-418 64H56v-53h29.2c7.6 0 20.3 5.2 20.3 25.5 0 13-5.4 27.3-19.4 27.3zm170 60c-47.3 0-85.7-39.4-85.7-87.8C170.3 89 209.5 50 256 50s85.6 39 85.6 85.5c0 48.4-38.4 87.8-85.6 87.8z"></path>
		<path fill="#009cff" d="M256 142c-38 0-57 6.5-65 8.6 6.7 30.5 33.2 53.3 65 53.3s58.3-23 65-53.4c-8-2-27.2-8.7-65-8.7z"></path>
	</symbol>
	<symbol id="searchIcon" viewBox="0 0 16 16">
		<path d="M12.6162 11.179l2.2383 2.2384c.5858.5858.5858 1.5356 0 2.1213-.5858.5858-1.5355.5858-2.1213 0l-2.3882-2.3881C9.3512 13.6922 8.2115 14 7 14c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7c0 1.5665-.5145 3.0127-                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          command = new G.StrokeStyle(thickness, caps, joints, miterLimit, ignoreScale);

		// ignoreScale lives on Stroke, not StrokeStyle, so we do a little trickery:
		if (this._stroke) { this._stroke.ignoreScale = ignoreScale; }
		this._strokeIgnoreScale = ignoreScale;
		return this;
	};
	
	/**
	 * Sets or clears the stroke dash pattern.
	 *
	 * 	myGraphics.setStrokeDash([20, 10], 0);
	 *
	 * A tiny API method `sd` also exists.
	 * @method setStrokeDash
	 * @param {Array} [segments] An array specifying the dash pattern, alternating between line and gap.
	 * For example, `[20,10]` would create a pattern of 20 pixel lines with 10 pixel gaps between them.
	 * Passing null or an empty array will clear the existing stroke dash.
	 * @param {Number} [offset=0] The offset of the dash pattern. For example, you could increment this value to create a "marching ants" effect.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.setStrokeDash = function(segments, offset) {
		this._updateInstructions(true);
		this._strokeDash = this.command = new G.StrokeDash(segments, offset);
		return this;
	};

	/**
	 * Begins a stroke with the specified color. This ends the current sub-path. A tiny API method "s" also exists.
	 * @method beginStroke
	 * @param {String} color A CSS compatible color value (ex. "#FF0000", "red", or "rgba(255,0,0,0.5)"). Setting to
	 * null will result in no stroke.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.beginStroke = function(color) {
		return this._setStroke(color ? new G.Stroke(color) : null);
	};

	/**
	 * Begins a linear gradient stroke defined by the line (x0, y0) to (x1, y1). This ends the current sub-path. For
	 * example, the following code defines a black to white vertical gradient ranging from 20px to 120px, and draws a
	 * square to display it:
	 *
	 *      myGraphics.setStrokeStyle(10).
	 *          beginLinearGradientStroke(["#000","#FFF"], [0, 1], 0, 20, 0, 120).drawRect(20, 20, 120, 120);
	 *
	 * A tiny API method "ls" also exists.
	 * @method beginLinearGradientStroke
	 * @param {Array} colors An array of CSS compatible color values. For example, ["#F00","#00F"] would define
	 * a gradient drawing from red to blue.
	 * @param {Array} ratios An array of gradient positions which correspond to the colors. For example, [0.1,
	 * 0.9] would draw the first color to 10% then interpolating to the second color at 90%.
	 * @param {Number} x0 The position of the first point defining the line that defines the gradient direction and size.
	 * @param {Number} y0 The position of the first point defining the line that defines the gradient direction and size.
	 * @param {Number} x1 The position of the second point defining the line that defines the gradient direction and size.
	 * @param {Number} y1 The position of the second point defining the line that defines the gradient direction and size.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.beginLinearGradientStroke = function(colors, ratios, x0, y0, x1, y1) {
		return this._setStroke(new G.Stroke().linearGradient(colors, ratios, x0, y0, x1, y1));
	};

	/**
	 * Begins a radial gradient stroke. This ends the current sub-path. For example, the following code defines a red to
	 * blue radial gradient centered at (100, 100), with a radius of 50, and draws a rectangle to display it:
	 *
	 *      myGraphics.setStrokeStyle(10)
	 *          .beginRadialGradientStroke(["#F00","#00F"], [0, 1], 100, 100, 0, 100, 100, 50)
	 *          .drawRect(50, 90, 150, 110);
	 *
	 * A tiny API method "rs" also exists.
	 * @method beginRadialGradientStroke
	 * @param {Array} colors An array of CSS compatible color values. For example, ["#F00","#00F"] would define
	 * a gradient drawing from red to blue.
	 * @param {Array} ratios An array of gradient positions which correspond to the colors. For example, [0.1,
	 * 0.9] would draw the first color to 10% then interpolating to the second color at 90%, then draw the second color
	 * to 100%.
	 * @param {Number} x0 Center position of the inner circle that defines the gradient.
	 * @param {Number} y0 Center position of the inner circle that defines the gradient.
	 * @param {Number} r0 Radius of the inner circle that defines the gradient.
	 * @param {Number} x1 Center position of the outer circle that defines the gradient.
	 * @param {Number} y1 Center position of the outer circle that defines the gradient.
	 * @param {Number} r1 Radius of the outer circle that defines the gradient.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.beginRadialGradientStroke = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
		return this._setStroke(new G.Stroke().radialGradient(colors, ratios, x0, y0, r0, x1, y1, r1));
	};

	/**
	 * Begins a pattern fill using the specified image. This ends the current sub-path. Note that unlike bitmap fills,
	 * strokes do not currently support a matrix parameter due to limitations in the canvas API. A tiny API method "bs"
	 * also exists.
	 * @method beginBitmapStroke
	 * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement} image The Image, Canvas, or Video object to use
	 * as the pattern. Must be loaded prior to creating a bitmap fill, or the fill will be empty.
	 * @param {String} [repetition=repeat] Optional. Indicates whether to repeat the image in the fill area. One of
	 * "repeat", "repeat-x", "repeat-y", or "no-repeat". Defaults to "repeat".
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.beginBitmapStroke = function(image, repetition) {
		// NOTE: matrix is not supported for stroke because transforms on strokes also affect the drawn stroke width.
		return this._setStroke(new G.Stroke().bitmap(image, repetition));
	};

	/**
	 * Ends the current sub-path, and begins a new one with no stroke. Functionally identical to <code>beginStroke(null)</code>.
	 * A tiny API method "es" also exists.
	 * @method endStroke
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.endStroke = function() {
		return this.beginStroke();
	};

	/**
	 * Maps the familiar ActionScript <code>curveTo()</code> method to the functionally similar {{#crossLink "Graphics/quadraticCurveTo"}}{{/crossLink}}
	 * method.
	 * @method quadraticCurveTo
	 * @param {Number} cpx
	 * @param {Number} cpy
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.curveTo = p.quadraticCurveTo;

	/**
	 *
	 * Maps the familiar ActionScript <code>drawRect()</code> method to the functionally similar {{#crossLink "Graphics/rect"}}{{/crossLink}}
	 * method.
	 * @method drawRect
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} w Width of the rectangle
	 * @param {Number} h Height of the rectangle
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.drawRect = p.rect;

	/**
	 * Draws a rounded rectangle with all corners with the specified radius.
	 * @method drawRoundRect
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} w
	 * @param {Number} h
	 * @param {Number} radius Corner radius.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.drawRoundRect = function(x, y, w, h, radius) {
		return this.drawRoundRectComplex(x, y, w, h, radius, radius, radius, radius);
	};

	/**
	 * Draws a rounded rectangle with different corner radii. Supports positive and negative corner radii. A tiny API
	 * method "rc" also exists.
	 * @method drawRoundRectComplex
	 * @param {Number} x The horizontal coordinate to draw the round rect.
	 * @param {Number} y The vertical coordinate to draw the round rect.
	 * @param {Number} w The width of the round rect.
	 * @param {Number} h The height of the round rect.
	 * @param {Number} radiusTL Top left corner radius.
	 * @param {Number} radiusTR Top right corner radius.
	 * @param {Number} radiusBR Bottom right corner radius.
	 * @param {Number} radiusBL Bottom left corner radius.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.drawRoundRectComplex = function(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL) {
		return this.append(new G.RoundRect(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL));
	};

	/**
	 * Draws a circle with the specified radius at (x, y).
	 *
	 *      var g = new createjs.Graphics();
	 *	    g.setStrokeStyle(1);
	 *	    g.beginStroke(createjs.Graphics.getRGB(0,0,0));
	 *	    g.beginFill(createjs.Graphics.getRGB(255,0,0));
	 *	    g.drawCircle(0,0,3);
	 *
	 *	    var s = new createjs.Shape(g);
	 *		s.x = 100;
	 *		s.y = 100;
	 *
	 *	    stage.addChild(s);
	 *	    stage.update();
	 *
	 * A tiny API method "dc" also exists.
	 * @method drawCircle
	 * @param {Number} x x coordinate center point of circle.
	 * @param {Number} y y coordinate center point of circle.
	 * @param {Number} radius Radius of circle.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.drawCircle = function(x, y, radius) {
		return this.append(new G.Circle(x, y, radius));
	};

	/**
	 * Draws an ellipse (oval) with a specified width (w) and height (h). Similar to {{#crossLink "Graphics/drawCircle"}}{{/crossLink}},
	 * except the width and height can be different. A tiny API method "de" also exists.
	 * @method drawEllipse
	 * @param {Number} x The left coordinate point of the ellipse. Note that this is different from {{#crossLink "Graphics/drawCircle"}}{{/crossLink}}
	 * which draws from center.
	 * @param {Number} y The top coordinate point of the ellipse. Note that this is different from {{#crossLink "Graphics/drawCircle"}}{{/crossLink}}
	 * which draws from the center.
	 * @param {Number} w The height (horizontal diameter) of the ellipse. The horizontal radius will be half of this
	 * number.
	 * @param {Number} h The width (vertical diameter) of the ellipse. The vertical radius will be half of this number.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.drawEllipse = function(x, y, w, h) {
		return this.append(new G.Ellipse(x, y, w, h));
	};

	/**
	 * Draws a star if pointSize is greater than 0, or a regular polygon if pointSize is 0 with the specified number of
	 * points. For example, the following code will draw a familiar 5 pointed star shape centered at 100, 100 and with a
	 * radius of 50:
	 *
	 *      myGraphics.beginFill("#FF0").drawPolyStar(100, 100, 50, 5, 0.6, -90);
	 *      // Note: -90 makes the first point vertical
	 *
	 * A tiny API method "dp" also exists.
	 *
	 * @method drawPolyStar
	 * @param {Number} x Position of the center of the shape.
	 * @param {Number} y Position of the center of the shape.
	 * @param {Number} radius The outer radius of the shape.
	 * @param {Number} sides The number of points on the star or sides on the polygon.
	 * @param {Number} pointSize The depth or "pointy-ness" of the star points. A pointSize of 0 will draw a regular
	 * polygon (no points), a pointSize of 1 will draw nothing because the points are infinitely pointy.
	 * @param {Number} angle The angle of the first point / corner. For example a value of 0 will draw the first point
	 * directly to the right of the center.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.drawPolyStar = function(x, y, radius, sides, pointSize, angle) {
		return this.append(new G.PolyStar(x, y, radius, sides, pointSize, angle));
	};

	// TODO: deprecated.
	/**
	 * Removed in favour of using custom command objects with {{#crossLink "Graphics/append"}}{{/crossLink}}.
	 * @method inject
	 * @deprecated
	 **/

	/**
	 * Appends a graphics command object to the graphics queue. Command objects expose an "exec" method
	 * that accepts two parameters: the Context2D to operate on, and an arbitrary data object passed into
	 * {{#crossLink "Graphics/draw"}}{{/crossLink}}. The latter will usually be the Shape instance that called draw.
	 *
	 * This method is used internally by Graphics methods, such as drawCircle, but can also be used directly to insert
	 * built-in or custom graphics commands. For example:
	 *
	 * 		// attach data to our shape, so we can access it during the draw:
	 * 		myShape.color = "red";
	 *
	 * 		// append a Circle command object:
	 * 		myShape.graphics.append(new createjs.Graphics.Circle(50, 50, 30));
	 *
	 * 		// append a custom command object with an exec method that sets the fill style
	 * 		// based on the shape's data, and then fills the circle.
	 * 		myShape.graphics.append({exec:function(ctx, shape) {
	 * 			ctx.fillStyle = shape.color;
	 * 			ctx.fill();
	 * 		}});
	 *
	 * @method append
	 * @param {Object} command A graphics command object exposing an "exec" method.
	 * @param {boolean} clean The clean param is primarily for internal use. A value of true indicates that a command does not generate a path that should be stroked or filled.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.append = function(command, clean) {
		this._activeInstructions.push(command);
		this.command = command;
		if (!clean) { this._dirty = true; }
		return this;
	};

	/**
	 * Decodes a compact encoded path string into a series of draw instructions.
	 * This format is not intended to be human readable, and is meant for use by authoring tools.
	 * The format uses a base64 character set, with each character representing 6 bits, to define a series of draw
	 * commands.
	 *
	 * Each command is comprised of a single "header" character followed by a variable number of alternating x and y
	 * position values. Reading the header bits from left to right (most to least significant): bits 1 to 3 specify the
	 * type of operation (0-moveTo, 1-lineTo, 2-quadraticCurveTo, 3-bezierCurveTo, 4-closePath, 5-7 unused). Bit 4
	 * indicates whether position values use 12 bits (2 characters) or 18 bits (3 characters), with a one indicating the
	 * latter. Bits 5 and 6 are currently unused.
	 *
	 * Following the header is a series of 0 (closePath), 2 (moveTo, lineTo), 4 (quadraticCurveTo), or 6 (bezierCurveTo)
	 * parameters. These parameters are alternating x/y positions represented by 2 or 3 characters (as indicated by the
	 * 4th bit in the command char). These characters consist of a 1 bit sign (1 is negative, 0 is positive), followed
	 * by an 11 (2 char) or 17 (3 char) bit integer value. All position values are in tenths of a pixel. Except in the
	 * case of move operations which are absolute, this value is a delta from the previous x or y position (as
	 * appropriate).
	 *
	 * For example, the string "A3cAAMAu4AAA" represents a line starting at -150,0 and ending at 150,0.
	 * <br />A - bits 000000. First 3 bits (000) indicate a moveTo operation. 4th bit (0) indicates 2 chars per
	 * parameter.
	 * <br />n0 - 110111011100. Absolute x position of -150.0px. First bit indicates a negative value, remaining bits
	 * indicate 1500 tenths of a pixel.
	 * <br />AA - 000000000000. Absolute y position of 0.
	 * <br />I - 001100. First 3 bits (001) indicate a lineTo operation. 4th bit (1) indicates 3 chars per parameter.
	 * <br />Au4 - 000000101110111000. An x delta of 300.0px, which is added to the previous x value of -150.0px to
	 * provide an absolute position of +150.0px.
	 * <br />AAA - 000000000000000000. A y delta value of 0.
	 *
	 * A tiny API method "p" also exists.
	 * @method decodePath
	 * @param {String} str The path string to decode.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.decodePath = function(str) {
		var instructions = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath];
		var paramCount = [2, 2, 4, 6, 0];
		var i=0, l=str.length;
		var params = [];
		var x=0, y=0;
		var base64 = Graphics.BASE_64;

		while (i<l) {
			var c = str.charAt(i);
			var n = base64[c];
			var fi = n>>3; // highest order bits 1-3 code for operation.
			var f = instructions[fi];
			// check that we have a valid instruction & that the unused bits are empty:
			if (!f || (n&3)) { throw("bad path data (@"+i+"): "+c); }
			var pl = paramCount[fi];
			if (!fi) { x=y=0; } // move operations reset the position.
			params.length = 0;
			i++;
			var charCount = (n>>2&1)+2;  // 4th header bit indicates number size for this operation.
			for (var p=0; p<pl; p++) {
				var num = base64[str.charAt(i)];
				var sign = (num>>5) ? -1 : 1;
				num = ((num&31)<<6)|(base64[str.charAt(i+1)]);
				if (charCount == 3) { num = (num<<6)|(base64[str.charAt(i+2)]); }
				num = sign*num/10;
				if (p%2) { x = (num += x); }
				else { y = (num += y); }
				params[p] = num;
				i += charCount;
			}
			f.apply(this,params);
		}
		return this;
	};

	/**
	 * Stores all graphics commands so they won't be executed in future draws. Calling store() a second time adds to
	 * the existing store. This also affects `drawAsPath()`.
	 *
	 * This is useful in cases where you are creating vector graphics in an iterative manner (ex. generative art), so
	 * that only new graphics need to be drawn (which can provide huge performance benefits), but you wish to retain all
	 * of the vector instructions for later use (ex. scaling, modifying, or exporting).
	 *
	 * Note that calling store() will force the active path (if any) to be ended in a manner similar to changing
	 * the fill or stroke.
	 *
	 * For example, consider a application where the user draws lines with the mouse. As each line segment (or collection of
	 * segments) are added to a Shape, it can be rasterized using {{#crossLink "DisplayObject/updateCache"}}{{/crossLink}},
	 * and then stored, so that it can be redrawn at a different scale when the application is resized, or exported to SVG.
	 *
	 * 	// set up cache:
	 * 	myShape.cache(0,0,500,500,scale);
	 *
	 * 	// when the user drags, draw a new line:
	 * 	myShape.graphics.moveTo(oldX,oldY).lineTo(newX,newY);
	 * 	// then draw it into the existing cache:
	 * 	myShape.updateCache("source-over");
	 * 	// store the new line, so it isn't redrawn next time:
	 * 	myShape.store();
	 *
	 * 	// then, when the window resizes, we can re-render at a different scale:
	 * 	// first, unstore all our lines:
	 * 	myShape.unstore();
	 * 	// then cache using the new scale:
	 * 	myShape.cache(0,0,500,500,newScale);
	 * 	// finally, store the existing commands again:
	 * 	myShape.store();
	 *
	 * @method store
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.store = function() {
		this._updateInstructions(true);
		this._storeIndex = this._instructions.length;
		return this;
	};

	/**
	 * Unstores any graphics commands that were previously stored using {{#crossLink "Graphics/store"}}{{/crossLink}}
	 * so that they will be executed in subsequent draw calls.
	 *
	 * @method unstore
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.unstore = function() {
		this._storeIndex = 0;
		return this;
	};

	/**
	 * Returns a clone of this Graphics instance. Note that the individual command objects are not cloned.
	 * @method clone
	 * @return {Graphics} A clone of the current Graphics instance.
	 **/
	p.clone = function() {
		var o = new Graphics();
		o.command = this.command;
		o._stroke = this._stroke;
		o._strokeStyle = this._strokeStyle;
		o._strokeDash = this._strokeDash;
		o._strokeIgnoreScale = this._strokeIgnoreScale;
		o._fill = this._fill;
		o._instructions = this._instructions.slice();
		o._commitIndex = this._commitIndex;
		o._activeInstructions = this._activeInstructions.slice();
		o._dirty = this._dirty;
		o._storeIndex = this._storeIndex;
		return o;
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Graphics]";
	};


// tiny API:
	/**
	 * Shortcut to moveTo.
	 * @method mt
	 * @param {Number} x The x coordinate the drawing point should move to.
	 * @param {Number} y The y coordinate the drawing point should move to.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls).
	 * @chainable
	 * @protected
	 **/
	p.mt = p.moveTo;

	/**
	 * Shortcut to lineTo.
	 * @method lt
	 * @param {Number} x The x coordinate the drawing point should draw to.
	 * @param {Number} y The y coordinate the drawing point should draw to.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.lt = p.lineTo;

	/**
	 * Shortcut to arcTo.
	 * @method at
	 * @param {Number} x1
	 * @param {Number} y1
	 * @param {Number} x2
	 * @param {Number} y2
	 * @param {Number} radius
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.at = p.arcTo;

	/**
	 * Shortcut to bezierCurveTo.
	 * @method bt
	 * @param {Number} cp1x
	 * @param {Number} cp1y
	 * @param {Number} cp2x
	 * @param {Number} cp2y
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.bt = p.bezierCurveTo;

	/**
	 * Shortcut to quadraticCurveTo / curveTo.
	 * @method qt
	 * @param {Number} cpx
	 * @param {Number} cpy
	 * @param {Number} x
	 * @param {Number} y
	 * @protected
	 * @chainable
	 **/
	p.qt = p.quadraticCurveTo;

	/**
	 * Shortcut to arc.
	 * @method a
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} radius
	 * @param {Number} startAngle Measured in radians.
	 * @param {Number} endAngle Measured in radians.
	 * @param {Boolean} anticlockwise
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @protected
	 * @chainable
	 **/
	p.a = p.arc;

	/**
	 * Shortcut to rect.
	 * @method r
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} w Width of the rectangle
	 * @param {Number} h Height of the rectangle
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.r = p.rect;

	/**
	 * Shortcut to closePath.
	 * @method cp
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.cp = p.closePath;

	/**
	 * Shortcut to clear.
	 * @method c
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.c = p.clear;

	/**
	 * Shortcut to beginFill.
	 * @method f
	 * @param {String} color A CSS compatible color value (ex. "red", "#FF0000", or "rgba(255,0,0,0.5)"). Setting to
	 * null will result in no fill.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.f = p.beginFill;

	/**
	 * Shortcut to beginLinearGradientFill.
	 * @method lf
	 * @param {Array} colors An array of CSS compatible color values. For example, ["#F00","#00F"] would define a gradient
	 * drawing from red to blue.
	 * @param {Array} ratios An array of gradient positions which correspond to the colors. For example, [0.1, 0.9] would draw
	 * the first color to 10% then interpolating to the second color at 90%.
	 * @param {Number} x0 The position of the first point defining the line that defines the gradient direction and size.
	 * @param {Number} y0 The position of the first point defining the line that defines the gradient direction and size.
	 * @param {Number} x1 The position of the second point defining the line that defines the gradient direction and size.
	 * @param {Number} y1 The position of the second point defining the line that defines the gradient direction and size.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.lf = p.beginLinearGradientFill;

	/**
	 * Shortcut to beginRadialGradientFill.
	 * @method rf
	 * @param {Array} colors An array of CSS compatible color values. For example, ["#F00","#00F"] would define
	 * a gradient drawing from red to blue.
	 * @param {Array} ratios An array of gradient positions which correspond to the colors. For example, [0.1,
	 * 0.9] would draw the first color to 10% then interpolating to the second color at 90%.
	 * @param {Number} x0 Center position of the inner circle that defines the gradient.
	 * @param {Number} y0 Center position of the inner circle that defines the gradient.
	 * @param {Number} r0 Radius of the inner circle that defines the gradient.
	 * @param {Number} x1 Center position of the outer circle that defines the gradient.
	 * @param {Number} y1 Center position of the outer circle that defines the gradient.
	 * @param {Number} r1 Radius of the outer circle that defines the gradient.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.rf = p.beginRadialGradientFill;

	/**
	 * Shortcut to beginBitmapFill.
	 * @method bf
	 * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement} image The Image, Canvas, or Video object to use
	 * as the pattern.
	 * @param {String} repetition Optional. Indicates whether to repeat the image in the fill area. One of "repeat",
	 * "repeat-x", "repeat-y", or "no-repeat". Defaults to "repeat". Note that Firefox does not support "repeat-x" or
	 * "repeat-y" (latest tests were in FF 20.0), and will default to "repeat".
	 * @param {Matrix2D} matrix Optional. Specifies a transformation matrix for the bitmap fill. This transformation
	 * will be applied relative to the parent transform.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.bf = p.beginBitmapFill;

	/**
	 * Shortcut to endFill.
	 * @method ef
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.ef = p.endFill;

	/**
	 * Shortcut to setStrokeStyle.
	 * @method ss
	 * @param {Number} thickness The width of the stroke.
	 * @param {String | Number} [caps=0] Indicates the type of caps to use at the end of lines. One of butt,
	 * round, or square. Defaults to "butt". Also accepts the values 0 (butt), 1 (round), and 2 (square) for use with
	 * the tiny API.
	 * @param {String | Number} [joints=0] Specifies the type of joints that should be used where two lines meet.
	 * One of bevel, round, or miter. Defaults to "miter". Also accepts the values 0 (miter), 1 (round), and 2 (bevel)
	 * for use with the tiny API.
	 * @param {Number} [miterLimit=10] If joints is set to "miter", then you can specify a miter limit ratio which
	 * controls at what point a mitered joint will be clipped.
	 * @param {Boolean} [ignoreScale=false] If true, the stroke will be drawn at the specified thickness regardless
	 * of active transformations.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.ss = p.setStrokeStyle;
	
	/**
	 * Shortcut to setStrokeDash.
	 * @method sd
	 * @param {Array} [segments] An array specifying the dash pattern, alternating between line and gap.
	 * For example, [20,10] would create a pattern of 20 pixel lines with 10 pixel gaps between them.
	 * Passing null or an empty array will clear any existing dash.
	 * @param {Number} [offset=0] The offset of the dash pattern. For example, you could increment this value to create a "marching ants" effect.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.sd = p.setStrokeDash;

	/**
	 * Shortcut to beginStroke.
	 * @method s
	 * @param {String} color A CSS compatible color value (ex. "#FF0000", "red", or "rgba(255,0,0,0.5)"). Setting to
	 * null will result in no stroke.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.s = p.beginStroke;

	/**
	 * Shortcut to beginLinearGradientStroke.
	 * @method ls
	 * @param {Array} colors An array of CSS compatible color values. For example, ["#F00","#00F"] would define
	 * a gradient drawing from red to blue.
	 * @param {Array} ratios An array of gradient positions which correspond to the colors. For example, [0.1,
	 * 0.9] would draw the first color to 10% then interpolating to the second color at 90%.
	 * @param {Number} x0 The position of the first point defining the line that defines the gradient direction and size.
	 * @param {Number} y0 The position of the first point defining the line that defines the gradient direction and size.
	 * @param {Number} x1 The position of the second point defining the line that defines the gradient direction and size.
	 * @param {Number} y1 The position of the second point defining the line that defines the gradient direction and size.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.ls = p.beginLinearGradientStroke;

	/**
	 * Shortcut to beginRadialGradientStroke.
	 * @method rs
	 * @param {Array} colors An array of CSS compatible color values. For example, ["#F00","#00F"] would define
	 * a gradient drawing from red to blue.
	 * @param {Array} ratios An array of gradient positions which correspond to the colors. For example, [0.1,
	 * 0.9] would draw the first color to 10% then interpolating to the second color at 90%, then draw the second color
	 * to 100%.
	 * @param {Number} x0 Center position of the inner circle that defines the gradient.
	 * @param {Number} y0 Center position of the inner circle that defines the gradient.
	 * @param {Number} r0 Radius of the inner circle that defines the gradient.
	 * @param {Number} x1 Center position of the outer circle that defines the gradient.
	 * @param {Number} y1 Center position of the outer circle that defines the gradient.
	 * @param {Number} r1 Radius of the outer circle that defines the gradient.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.rs = p.beginRadialGradientStroke;

	/**
	 * Shortcut to beginBitmapStroke.
	 * @method bs
	 * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement} image The Image, Canvas, or Video object to use
	 * as the pattern.
	 * @param {String} [repetition=repeat] Optional. Indicates whether to repeat the image in the fill area. One of
	 * "repeat", "repeat-x", "repeat-y", or "no-repeat". Defaults to "repeat".
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.bs = p.beginBitmapStroke;

	/**
	 * Shortcut to endStroke.
	 * @method es
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.es = p.endStroke;

	/**
	 * Shortcut to drawRect.
	 * @method dr
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} w Width of the rectangle
	 * @param {Number} h Height of the rectangle
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.dr = p.drawRect;

	/**
	 * Shortcut to drawRoundRect.
	 * @method rr
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} w
	 * @param {Number} h
	 * @param {Number} radius Corner radius.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.rr = p.drawRoundRect;

	/**
	 * Shortcut to drawRoundRectComplex.
	 * @method rc
	 * @param {Number} x The horizontal coordinate to draw the round rect.
	 * @param {Number} y The vertical coordinate to draw the round rect.
	 * @param {Number} w The width of the round rect.
	 * @param {Number} h The height of the round rect.
	 * @param {Number} radiusTL Top left corner radius.
	 * @param {Number} radiusTR Top right corner radius.
	 * @param {Number} radiusBR Bottom right corner radius.
	 * @param {Number} radiusBL Bottom left corner radius.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.rc = p.drawRoundRectComplex;

	/**
	 * Shortcut to drawCircle.
	 * @method dc
	 * @param {Number} x x coordinate center point of circle.
	 * @param {Number} y y coordinate center point of circle.
	 * @param {Number} radius Radius of circle.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.dc = p.drawCircle;

	/**
	 * Shortcut to drawEllipse.
	 * @method de
	 * @param {Number} x The left coordinate point of the ellipse. Note that this is different from {{#crossLink "Graphics/drawCircle"}}{{/crossLink}}
	 * which draws from center.
	 * @param {Number} y The top coordinate point of the ellipse. Note that this is different from {{#crossLink "Graphics/drawCircle"}}{{/crossLink}}
	 * which draws from the center.
	 * @param {Number} w The height (horizontal diameter) of the ellipse. The horizontal radius will be half of this
	 * number.
	 * @param {Number} h The width (vertical diameter) of the ellipse. The vertical radius will be half of this number.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.de = p.drawEllipse;

	/**
	 * Shortcut to drawPolyStar.
	 * @method dp
	 * @param {Number} x Position of the center of the shape.
	 * @param {Number} y Position of the center of the shape.
	 * @param {Number} radius The outer radius of the shape.
	 * @param {Number} sides The number of points on the star or sides on the polygon.
	 * @param {Number} pointSize The depth or "pointy-ness" of the star points. A pointSize of 0 will draw a regular
	 * polygon (no points), a pointSize of 1 will draw nothing because the points are infinitely pointy.
	 * @param {Number} angle The angle of the first point / corner. For example a value of 0 will draw the first point
	 * directly to the right of the center.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.dp = p.drawPolyStar;

	/**
	 * Shortcut to decodePath.
	 * @method p
	 * @param {String} str The path string to decode.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.p = p.decodePath;


// private methods:
	/**
	 * @method _updateInstructions
	 * @param commit
	 * @protected
	 **/
	p._updateInstructions = function(commit) {
		var instr = this._instructions, active = this._activeInstructions, commitIndex = this._commitIndex;

		if (this._dirty && active.length) {
			instr.length = commitIndex; // remove old, uncommitted commands
			instr.push(Graphics.beginCmd);

			var l = active.length, ll = instr.length;
			instr.length = ll+l;
			for (var i=0; i<l; i++) { instr[i+ll] = active[i]; }

			if (this._fill) { instr.push(this._fill); }
			if (this._stroke) {
				// doesn't need to be re-applied if it hasn't changed.
				if (this._strokeDash !== this._oldStrokeDash) {
					this._oldStrokeDash = this._strokeDash;
					instr.push(this._strokeDash);
				}
				if (this._strokeStyle !== this._oldStrokeStyle) {
					this._oldStrokeStyle = this._strokeStyle;
					instr.push(this._strokeStyle);
				}
				instr.push(this._stroke);
			}

			this._dirty = false;
		}

		if (commit) {
			active.length = 0;
			this._commitIndex = instr.length;
		}
	};

	/**
	 * @method _setFill
	 * @param fill
	 * @protected
	 **/
	p._setFill = function(fill) {
		this._updateInstructions(true);
		this.command = this._fill = fill;
		return this;
	};

	/**
	 * @method _setStroke
	 * @param stroke
	 * @protected
	 **/
	p._setStroke = function(stroke) {
		this._updateInstructions(true);
		if (this.command = this._stroke = stroke) {
			stroke.ignoreScale = this._strokeIgnoreScale;
		}
		return this;
	};

// Command Objects:
	/**
	 * @namespace Graphics
	 */
	/**
	 * Graphics command object. See {{#crossLink "Graphics/lineTo"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information. See {{#crossLink "Graphics"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class LineTo
	 * @constructor
	 * @param {Number} x
	 * @param {Number} y
	 **/
	/**
	 * @property x
	 * @type Number
	 */
	/**
	 * @property y
	 * @type Number
	 */
	/**
	 * Execute the Graphics command in the provided Canvas context.
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
	 */
	(G.LineTo = function(x, y) {
		this.x = x; this.y = y;
	}).prototype.exec = function(ctx) { ctx.lineTo(this.x,this.y); };

	/**
	 * Graphics command object. See {{#crossLink "Graphics/moveTo"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class MoveTo
	 * @constructor
	 * @param {Number} x
	 * @param {Number} y
	 **/
	/**
	 * @property x
	 * @type Number
	 */
	/**
	 * @property y
	 * @type Number
	 */
	/**
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx
	 */
	(G.MoveTo = function(x, y) {
		this.x = x; this.y = y;
	}).prototype.exec = function(ctx) { ctx.moveTo(this.x, this.y); };


	/**
	 * Graphics command object. See {{#crossLink "Graphics/arcTo"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class ArcTo
	 * @constructor
	 * @param {Number} x1
	 * @param {Number} y1
	 * @param {Number} x2
	 * @param {Number} y2
	 * @param {Number} radius
	 **/
	/**
	 * @property x1
	 * @type Number
	 */
	/**
	 * @property y1
	 * @type Number
	 */
	/**
	 * @property x2
	 * @type Number
	 */
	/**
	 * @property y2
	 * @type Number
	 */
	/**
	 * @property radius
	 * @type Number
	 */
	/**
	 * Execute the Graphics command in the provided Canvas context.
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
	 */
	(G.ArcTo = function(x1, y1, x2, y2, radius) {
		this.x1 = x1; this.y1 = y1;
		this.x2 = x2; this.y2 = y2;
		this.radius = radius;
	}).prototype.exec = function(ctx) { ctx.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius); };

	/**
	 * Graphics command object. See {{#crossLink "Graphics/arc"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class Arc
	 * @constructor
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} radius
	 * @param {Number} startAngle
	 * @param {Number} endAngle
	 * @param {Number} anticlockwise
	 **/
	/**
	 * @property x
	 * @type Number
	 */
	/**
	 * @property y
	 * @type Number
	 */
	/**
	 * @property radius
	 * @type Number
	 */
	/**
	 * @property startAngle
	 * @type Number
	 */
	/**
	 * @property endAngle
	 * @type Number
	 */
	/**
	 * @property anticlockwise
	 * @type Number
	 */
	/**
	 * Execute the Graphics command in the provided Canvas context.
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
	 */
	(G.Arc = function(x, y, radius, startAngle, endAngle, anticlockwise) {
		this.x = x; this.y = y;
		this.radius = radius;
		this.startAngle = startAngle; this.endAngle = endAngle;
		this.anticlockwise = !!anticlockwise;
	}).prototype.exec = function(ctx) { ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise); };

	/**
	 * Graphics command object. See {{#crossLink "Graphics/quadraticCurveTo"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class QuadraticCurveTo
	 * @constructor
	 * @param {Number} cpx
	 * @param {Number} cpy
	 * @param {Number} x
	 * @param {Number} y
	 **/
	/**
	 * @property cpx
	 * @type Number
	 */
	/**
	 * @property cpy
	 * @type Number
	 */
	/**
	 * @property x
	 * @type Number
	 */
	/**
	 * @property y
	 * @type Number
	 */
	/**
	 * Execute the Graphics command in the provided Canvas context.
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
	 */
	(G.QuadraticCurveTo = function(cpx, cpy, x, y) {
		this.cpx = cpx; this.cpy = cpy;
		this.x = x; this.y = y;
	}).prototype.exec = function(ctx) { ctx.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y); };

	/**
	 * Graphics command object. See {{#crossLink "Graphics/bezierCurveTo"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class BezierCurveTo
	 * @constructor
	 * @param {Number} cp1x
	 * @param {Number} cp1y
	 * @param {Number} cp2x
	 * @param {Number} cp2y
	 * @param {Number} x
	 * @param {Number} y
	 **/
	/**
	 * @property cp1x
	 * @type Number
	 */
	/**
	 * @property cp1y
	 * @type Number
	 */
	/**
	 * @property cp2x
	 * @type Number
	 */
	/**
	 * @property cp2y
	 * @type Number
	 */
	/**
	 * @property x
	 * @type Number
	 */
	/**
	 * @property y
	 * @type Number
	 */
	/**
	 * Execute the Graphics command in the provided Canvas context.
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
	 */
	(G.BezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
		this.cp1x = cp1x; this.cp1y = cp1y;
		this.cp2x = cp2x; this.cp2y = cp2y;
		this.x = x; this.y = y;
	}).prototype.exec = function(ctx) { ctx.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y); };

	/**
	 * Graphics command object. See {{#crossLink "Graphics/rect"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class Rect
	 * @constructor
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} w
	 * @param {Number} h
	 **/
	/**
	 * @property x
	 * @type Number
	 */
	/**
	 * @property y
	 * @type Number
	 */
	/**
	 * @property w
	 * @type Number
	 */
	/**
	 * @property h
	 * @type Number
	 */
	/**
	 * Execute the Graphics command in the provided Canvas context.
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
	 */
	(G.Rect = function(x, y, w, h) {
		this.x = x; this.y = y;
		this.w = w; this.h = h;
	}).prototype.exec = function(ctx) { ctx.rect(this.x, this.y, this.w, this.h); };

	/**
	 * Graphics command object. See {{#crossLink "Graphics/closePath"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class ClosePath
	 * @constructor
	 **/
	/**
	 * Execute the Graphics command in the provided Canvas context.
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
	 */
	(G.ClosePath = function() {
	}).prototype.exec = function(ctx) { ctx.closePath(); };

	/**
	 * Graphics command object to begin a new path. See {{#crossLink "Graphics"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class BeginPath
	 * @constructor
	 **/
	/**
	 * Execute the Graphics command in the provided Canvas context.
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
	 */
	(G.BeginPath = function() {
	}).prototype.exec = function(ctx) { ctx.beginPath(); };

	/**
	 * Graphics command object. See {{#crossLink "Graphics/beginFill"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class Fill
	 * @constructor
	 * @param {Object} style A valid Context2D fillStyle.
	 * @param {Matrix2D} matrix
	 **/
	/**
	 * A valid Context2D fillStyle.
	 * @property style
	 * @type Object
	 */
	/**
	 * @property matrix
	 * @type Matrix2D
	 */
	/**
	 * Execute the Graphics command in the provided Canvas context.
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
	 */
	p = (G.Fill = function(style, matrix) {
		this.style = style;
		this.matrix = matrix;
	}).prototype;
	p.exec = function(ctx) {
		if (!this.style) { return; }
		ctx.fillStyle = this.style;
		var mtx = this.matrix;
		if (mtx) { ctx.save(); ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty); }
		ctx.fill();
		if (mtx) { ctx.restore(); }
	};
	/**
	 * Creates a linear gradient style and assigns it to {{#crossLink "Fill/style:property"}}{{/crossLink}}.
	 * See {{#crossLink "Graphics/beginLinearGradientFill"}}{{/crossLink}} for more information.
	 * @method linearGradient
	 * @param {Array} colors
	 *
	 * @param {Array} ratios
	 * @param {Number} x0
	 * @param {Number} y0
	 * @param {Number} x1
	 * @param {Number} y1
	 * @return {Fill} Returns this Fill object for chaining or assignment.
	 */
	p.linearGradient = function(colors, ratios, x0, y0, x1, y1) {
		var o = this.style =  Graphics._ctx.createLinearGradient(x0, y0, x1, y1);
		for (var i=0, l=colors.length; i<l; i++) { o.addColorStop(ratios[i], colors[i]); }
		o.props = {colors:colors, ratios:ratios, x0:x0, y0:y0, x1:x1, y1:y1, type:"linear"};
		return this;
	};
	/**
	 * Creates a radial gradient style and assigns it to {{#crossLink "Fill/style:property"}}{{/crossLink}}.
	 * See {{#crossLink "Graphics/beginRadialGradientFill"}}{{/crossLink}} for more information.
	 * @method radialGradient
	 * @param {Array} colors
	 * @param {Array} ratios
	 * @param {Number} x0
	 * @param {Number} y0
	 * @param {Number} r0
	 * @param {Number} x1
	 * @param {Number} y1
	 * @param {Number} r1
	 * @return {Fill} Returns this Fill object for chaining or assignment.
	 */
	p.radialGradient = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
		var o = this.style =  Graphics._ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
		for (var i=0, l=colors.length; i<l; i++) { o.addColorStop(ratios[i], colors[i]); }
		o.props = {colors:colors, ratios:ratios, x0:x0, y0:y0, r0:r0, x1:x1, y1:y1, r1:r1, type:"radial"};
		return this;
	};
	/**
	 * Creates a bitmap fill style and assigns it to the {{#crossLink "Fill/style:property"}}{{/crossLink}}.
	 * See {{#crossLink "Graphics/beginBitmapFill"}}{{/crossLink}} for more information.
	 * @method bitmap
	 * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement} image  Must be loaded prior to creating a bitmap fill, or the fill will be empty.
	 * @param {String} [repetition] One of: repeat, repeat-x, repeat-y, or no-repeat.
	 * @return {Fill} Returns this Fill object for chaining or assignment.
	 */
	p.bitmap = function(image, repetition) {
		if (image.naturalWidth || image.getContext || image.readyState >= 2) {
			var o = this.style = Graphics._ctx.createPattern(image, repetition || "");
			o.props = {image: image, repetition: repetition, type: "bitmap"};
		}
		return this;
	};
	p.path = false;

	/**
	 * Graphics command object. See {{#crossLink "Graphics/beginStroke"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class Stroke
	 * @constructor
	 * @param {Object} style A valid Context2D fillStyle.
	 * @param {Boolean} ignoreScale
	 **/
	/**
	 * A valid Context2D strokeStyle.
	 * @property style
	 * @type Object
	 */
	/**
	 * @property ignoreScale
	 * @type Boolean
	 */
	/**
	 * Execute the Graphics command in the provided Canvas context.
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
	 */
	p = (G.Stroke = function(style, ignoreScale) {
		this.style = style;
		this.ignoreScale = ignoreScale;
	}).prototype;
	p.exec = function(ctx) {
		if (!this.style) { return; }
		ctx.strokeStyle = this.style;
		if (this.ignoreScale) { ctx.save(); ctx.setTransform(1,0,0,1,0,0); }
		ctx.stroke();
		if (this.ignoreScale) { ctx.restore(); }
	};
	/**
	 * Creates a linear gradient style and assigns it to {{#crossLink "Stroke/style:property"}}{{/crossLink}}.
	 * See {{#crossLink "Graphics/beginLinearGradientStroke"}}{{/crossLink}} for more information.
	 * @method linearGradient
	 * @param {Array} colors
	 * @param {Array} ratios
	 * @param {Number} x0
	 * @param {Number} y0
	 * @param {Number} x1
	 * @param {Number} y1
	 * @return {Fill} Returns this Stroke object for chaining or assignment.
	 */
	p.linearGradient = G.Fill.prototype.linearGradient;
	/**
	 * Creates a radial gradient style and assigns it to {{#crossLink "Stroke/style:property"}}{{/crossLink}}.
	 * See {{#crossLink "Graphics/beginRadialGradientStroke"}}{{/crossLink}} for more information.
	 * @method radialGradient
	 * @param {Array} colors
	 * @param {Array} ratios
	 * @param {Number} x0
	 * @param {Number} y0
	 * @param {Number} r0
	 * @param {Number} x1
	 * @param {Number} y1
	 * @param {Number} r1
	 * @return {Fill} Returns this Stroke object for chaining or assignment.
	 */
	p.radialGradient = G.Fill.prototype.radialGradient;
	/**
	 * Creates a bitmap fill style and assigns it to {{#crossLink "Stroke/style:property"}}{{/crossLink}}.
	 * See {{#crossLink "Graphics/beginBitmapStroke"}}{{/crossLink}} for more information.
	 * @method bitmap
	 * @param {HTMLImageElement} image
	 * @param {String} [repetition] One of: repeat, repeat-x, repeat-y, or no-repeat.
	 * @return {Fill} Returns this Stroke object for chaining or assignment.
	 */
	p.bitmap = G.Fill.prototype.bitmap;
	p.path = false;

	/**
	 * Graphics command object. See {{#crossLink "Graphics/setStrokeStyle"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class StrokeStyle
	 * @constructor
	 * @param {Number} width
	 * @param {String} [caps=butt]
	 * @param {String} [joints=miter]
	 * @param {Number} [miterLimit=10]
	 * @param {Boolean} [ignoreScale=false]
	 **/
	/**
	 * @property width
	 * @type Number
	 */
	/**
	 * One of: butt, round, square
	 * @property caps
	 * @type String
	 */
	/**
	 * One of: round, bevel, miter
	 * @property joints
	 * @type String
	 */
	/**
	 * @property miterLimit
	 * @type Number
	 */
	/**
	 * Execute the Graphics command in the provided Canvas context.
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
	 */
	p = (G.StrokeStyle = function(width, caps, joints, miterLimit, ignoreScale) {
		this.width = width;
		this.caps = caps;
		this.joints = joints;
		this.miterLimit = miterLimit;
		this.ignoreScale = ignoreScale;
	}).prototype;
	p.exec = function(ctx) {
		ctx.lineWidth = (this.width == null ? "1" : this.width);
		ctx.lineCap = (this.caps == null ? "butt" : (isNaN(this.caps) ? this.caps : Graphics.STROKE_CAPS_MAP[this.caps]));
		ctx.lineJoin = (this.joints == null ? "miter" : (isNaN(this.joints) ? this.joints : Graphics.STROKE_JOINTS_MAP[this.joints]));
		ctx.miterLimit = (this.miterLimit == null ? "10" : this.miterLimit);
		ctx.ignoreScale = (this.ignoreScale == null ? false : this.ignoreScale);
	};
	p.path = false;
	
	/**
	 * Graphics command object. See {{#crossLink "Graphics/setStrokeDash"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class StrokeDash
	 * @constructor
	 * @param {Array} [segments]
	 * @param {Number} [offset=0]
	 **/
	/**
	 * @property segments
	 * @type Array
	 */
	/**
	 * @property offset
	 * @type Number
	 */
	/**
	 * Execute the Graphics command in the provided Canvas context.
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
	 */
	(G.StrokeDash = function(segments, offset) {
		this.segments = segments;
		this.offset = offset||0;
	}).prototype.exec = function(ctx) {
		if (ctx.setLineDash) { // feature detection.
			ctx.setLineDash(this.segments|| G.StrokeDash.EMPTY_SEGMENTS); // instead of [] to reduce churn.
			ctx.lineDashOffset = this.offset||0;
		}
	};
	/**
	 * The default value for segments (ie. no dash).
	 * @property EMPTY_SEGMENTS
	 * @static
	 * @final
	 * @readonly
	 * @protected
	 * @type {Array}
	 **/
	G.StrokeDash.EMPTY_SEGMENTS = [];

	/**
	 * Graphics command object. See {{#crossLink "Graphics/drawRoundRectComplex"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class RoundRect
	 * @constructor
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} w
	 * @param {Number} h
	 * @param {Number} radiusTL
	 * @param {Number} radiusTR
	 * @param {Number} radiusBR
	 * @param {Number} radiusBL
	 **/
	/**
	 * @property x
	 * @type Number
	 */
	/**
	 * @property y
	 * @type Number
	 */
	/**
	 * @property w
	 * @type Number
	 */
	/**
	 * @property h
	 * @type Number
	 */
	/**
	 * @property radiusTL
	 * @type Number
	 */
	/**
	 * @property radiusTR
	 * @type Number
	 */
	/**
	 * @property radiusBR
	 * @type Number
	 */
	/**
	 * @property radiusBL
	 * @type Number
	 */
	/**
	 * Execute the Graphics command in the provided Canvas context.
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
	 */
	(G.RoundRect = function(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL) {
		this.x = x; this.y = y;
		this.w = w; this.h = h;
		this.radiusTL = radiusTL; this.radiusTR = radiusTR;
		this.radiusBR = radiusBR; this.radiusBL = radiusBL;
	}).prototype.exec = function(ctx) {
		var max = (w<h?w:h)/2;
		var mTL=0, mTR=0, mBR=0, mBL=0;
		var x = this.x, y = this.y, w = this.w, h = this.h;
		var rTL = this.radiusTL, rTR = this.radiusTR, rBR = this.radiusBR, rBL = this.radiusBL;

		if (rTL < 0) { rTL *= (mTL=-1); }
		if (rTL > max) { rTL = max; }
		if (rTR < 0) { rTR *= (mTR=-1); }
		if (rTR > max) { rTR = max; }
		if (rBR < 0) { rBR *= (mBR=-1); }
		if (rBR > max) { rBR = max; }
		if (rBL < 0) { rBL *= (mBL=-1); }
		if (rBL > max) { rBL = max; }

		ctx.moveTo(x+w-rTR, y);
		ctx.arcTo(x+w+rTR*mTR, y-rTR*mTR, x+w, y+rTR, rTR);
		ctx.lineTo(x+w, y+h-rBR);
		ctx.arcTo(x+w+rBR*mBR, y+h+rBR*mBR, x+w-rBR, y+h, rBR);
		ctx.lineTo(x+rBL, y+h);
		ctx.arcTo(x-rBL*mBL, y+h+rBL*mBL, x, y+h-rBL, rBL);
		ctx.lineTo(x, y+rTL);
		ctx.arcTo(x-rTL*mTL, y-rTL*mTL, x+rTL, y, rTL);
		ctx.closePath();
	};

	/**
	 * Graphics command object. See {{#crossLink "Graphics/drawCircle"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class Circle
	 * @constructor
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} radius
	 **/
	/**
	 * @property x
	 * @type Number
	 */
	/**
	 * @property y
	 * @type Number
	 */
	/**
	 * @property radius
	 * @type Number
	 */
	/**
	 * Execute the Graphics command in the provided Canvas context.
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
	 */
	(G.Circle = function(x, y, radius) {
		this.x = x; this.y = y;
		this.radius = radius;
	}).prototype.exec = function(ctx) { ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2); };

	/**
	 * Graphics command object. See {{#crossLink "Graphics/drawEllipse"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class Ellipse
	 * @constructor
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} w
	 * @param {Number} h
	 **/
	/**
	 * @property x
	 * @type Number
	 */
	/**
	 * @property y
	 * @type Number
	 */
	/**
	 * @property w
	 * @type Number
	 */
	/**
	 * @property h
	 * @type Number
	 */
	/**
	 * Execute the Graphics command in the provided Canvas context.
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
	 */
	(G.Ellipse = function(x, y, w, h) {
		this.x = x; this.y = y;
		this.w = w; this.h = h;
	}).prototype.exec = function(ctx) {
		var x = this.x, y = this.y;
		var w = this.w, h = this.h;

		var k = 0.5522848;
		var ox = (w / 2) * k;
		var oy = (h / 2) * k;
		var xe = x + w;
		var ye = y + h;
		var xm = x + w / 2;
		var ym = y + h / 2;

		ctx.moveTo(x, ym);
		ctx.bezierCurveTo(x, ym-oy, xm-ox, y, xm, y);
		ctx.bezierCurveTo(xm+ox, y, xe, ym-oy, xe, ym);
		ctx.bezierCurveTo(xe, ym+oy, xm+ox, ye, xm, ye);
		ctx.bezierCurveTo(xm-ox, ye, x, ym+oy, x, ym);
	};

	/**
	 * Graphics command object. See {{#crossLink "Graphics/drawPolyStar"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class PolyStar
	 * @constructor
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} radius
	 * @param {Number} sides
	 * @param {Number} pointSize
	 * @param {Number} angle
	 **/
	/**
	 * @property x
	 * @type Number
	 */
	/**
	 * @property y
	 * @type Number
	 */
	/**
	 * @property radius
	 * @type Number
	 */
	/**
	 * @property sides
	 * @type Number
	 */
	/**
	 * @property pointSize
	 * @type Number
	 */
	/**
	 * @property angle
	 * @type Number
	 */
	/**
	 * Execute the Graphics command in the provided Canvas context.
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx The canvas rendering context
	 */
	(G.PolyStar = function(x, y, radius, sides, pointSize, angle) {
		this.x = x; this.y = y;
		this.radius = radius;
		this.sides = sides;
		this.pointSize = pointSize;
		this.angle = angle;
	}).prototype.exec = function(ctx) {
		var x = this.x, y = this.y;
		var radius = this.radius;
		var angle = (this.angle||0)/180*Math.PI;
		var sides = this.sides;
		var ps = 1-(this.pointSize||0);
		var a = Math.PI/sides;

		ctx.moveTo(x+Math.cos(angle)*radius, y+Math.sin(angle)*radius);
		for (var i=0; i<sides; i++) {
			angle += a;
			if (ps != 1) {
				ctx.lineTo(x+Math.cos(angle)*radius*ps, y+Math.sin(angle)*radius*ps);
			}
			angle += a;
			ctx.lineTo(x+Math.cos(angle)*radius, y+Math.sin(angle)*radius);
		}
		ctx.closePath();
	};

	// docced above.
	Graphics.beginCmd = new G.BeginPath(); // so we don't have to instantiate multiple instances.


	createjs.Graphics = Graphics;
}());

//##############################################################################
// DisplayObject.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * DisplayObject is an abstract class that should not be constructed directly. Instead construct subclasses such as
	 * {{#crossLink "Container"}}{{/crossLink}}, {{#crossLink "Bitmap"}}{{/crossLink}}, and {{#crossLink "Shape"}}{{/crossLink}}.
	 * DisplayObject is the base class for all display classes in the EaselJS library. It defines the core properties and
	 * methods that are shared between all display objects, such as transformation properties (x, y, scaleX, scaleY, etc),
	 * caching, and mouse handlers.
	 * @class DisplayObject
	 * @extends EventDispatcher
	 * @constructor
	 **/
	function DisplayObject() {
		this.EventDispatcher_constructor();
		
		
	// public properties:
		/**
		 * The alpha (transparency) for this display object. 0 is fully transparent, 1 is fully opaque.
		 * @property alpha
		 * @type {Number}
		 * @default 1
		 **/
		this.alpha = 1;
	
		/**
		 * If a cache is active, this returns the canvas that holds the cached version of this display object. See {{#crossLink "cache"}}{{/crossLink}}
		 * for more information.
		 * @property cacheCanvas
		 * @type {HTMLCanvasElement | Object}
		 * @default null
		 * @readonly
		 **/
		this.cacheCanvas = null;
	
		/**
		 * Returns an ID number that uniquely identifies the current cache for this display object. This can be used to
		 * determine if the cache has changed since a previous check.
		 * @property cacheID
		 * @type {Number}
		 * @default 0
		 */
		this.cacheID = 0;
	
		/**
		 * Unique ID for this display object. Makes display objects easier for some uses.
		 * @property id
		 * @type {Number}
		 * @default -1
		 **/
		this.id = createjs.UID.get();
	
		/**
		 * Indicates whether to include this object when running mouse interactions. Setting this to `false` for children
		 * of a {{#crossLink "Container"}}{{/crossLink}} will cause events on the Container to not fire when that child is
		 * clicked. Setting this property to `false` does not prevent the {{#crossLink "Container/getObjectsUnderPoint"}}{{/crossLink}}
		 * method from returning the child.
		 *
		 * <strong>Note:</strong> In EaselJS 0.7.0, the mouseEnabled property will not work properly with nested Containers. Please
		 * check out the latest NEXT version in <a href="https://github.com/CreateJS/EaselJS/tree/master/lib">GitHub</a> for an updated version with this issue resolved. The fix will be
		 * provided in the next release of EaselJS.
		 * @property mouseEnabled
		 * @type {Boolean}
		 * @default true
		 **/
		this.mouseEnabled = true;
		
		/**
		 * If false, the tick will not run on this display object (or its children). This can provide some performance benefits.
		 * In addition to preventing the "tick" event from being dispatched, it will also prevent tick related updates
		 * on some display objects (ex. Sprite & MovieClip frame advancing, DOMElement visibility handling).
		 * @property tickEnabled
		 * @type Boolean
		 * @default true
		 **/
		this.tickEnabled = true;
	
		/**
		 * An optional name for this display object. Included in {{#crossLink "DisplayObject/toString"}}{{/crossLink}} . Useful for
		 * debugging.
		 * @property name
		 * @type {String}
		 * @default null
		 **/
		this.name = null;
	
		/**
		 * A reference to the {{#crossLink "Container"}}{{/crossLink}} or {{#crossLink "Stage"}}{{/crossLink}} object that
		 * contains this display object, or null if it has not been added
		 * to one.
		 * @property parent
		 * @final
		 * @type {Container}
		 * @default null
		 * @readonly
		 **/
		this.parent = null;
	
		/**
		 * The left offset for this display object's registration point. For example, to make a 100x100px Bitmap rotate
		 * around its center, you would set regX and {{#crossLink "DisplayObject/regY:property"}}{{/crossLink}} to 50.
		 * @property regX
		 * @type {Number}
		 * @default 0
		 **/
		this.regX = 0;
	
		/**
		 * The y offset for this display object's registration point. For example, to make a 100x100px Bitmap rotate around
		 * its center, you would set {{#crossLink "DisplayObject/regX:property"}}{{/crossLink}} and regY to 50.
		 * @property regY
		 * @type {Number}
		 * @default 0
		 **/
		this.regY = 0;
	
		/**
		 * The rotation in degrees for this display object.
		 * @property rotation
		 * @type {Number}
		 * @default 0
		 **/
		this.rotation = 0;
	
		/**
		 * The factor to stretch this display object horizontally. For example, setting scaleX to 2 will stretch the display
		 * object to twice its nominal width. To horizontally flip an object, set the scale to a negative number.
		 * @property scaleX
		 * @type {Number}
		 * @default 1
		 **/
		this.scaleX = 1;
	
		/**
		 * The factor to stretch this display object vertically. For example, setting scaleY to 0.5 will stretch the display
		 * object to half its nominal height. To vertically flip an object, set the scale to a negative number.
		 * @property scaleY
		 * @type {Number}
		 * @default 1
		 **/
		this.scaleY = 1;
	
		/**
		 * The factor to skew this display object horizontally.
		 * @property skewX
		 * @type {Number}
		 * @default 0
		 **/
		this.skewX = 0;
	
		/**
		 * The factor to skew this display object vertically.
		 * @property skewY
		 * @type {Number}
		 * @default 0
		 **/
		this.skewY = 0;
	
		/**
		 * A shadow object that defines the shadow to render on this display object. Set to `null` to remove a shadow. If
		 * null, this property is inherited from the parent container.
		 * @property shadow
		 * @type {Shadow}
		 * @default null
		 **/
		this.shadow = null;
	
		/**
		 * Indicates whether this display object should be rendered to the canvas and included when running the Stage
		 * {{#crossLink "Stage/getObjectsUnderPoint"}}{{/crossLink}} method.
		 * @property visible
		 * @type {Boolean}
		 * @default true
		 **/
		this.visible = true;
	
		/**
		 * The x (horizontal) position of the display object, relative to its parent.
		 * @property x
		 * @type {Number}
		 * @default 0
		 **/
		this.x = 0;
	
		/** The y (vertical) position of the display object, relative to its parent.
		 * @property y
		 * @type {Number}
		 * @default 0
		 **/
		this.y = 0;
		
		/**
		 * If set, defines the transformation for this display object, overriding all other transformation properties
		 * (x, y, rotation, scale, skew).
		 * @property transformMatrix
		 * @type {Matrix2D}
		 * @default null
		 **/
		this.transformMatrix = null;
		
		/**
		 * The composite operation indicates how the pixels of this display object will be composited with the elements
		 * behind it. If `null`, this property is inherited from the parent container. For more information, read the
		 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#compositing">
		 * whatwg spec on compositing</a>.
		 * @property compositeOperation
		 * @type {String}
		 * @default null
		 **/
		this.compositeOperation = null;
	
		/**
		 * Indicates whether the display object should be drawn to a whole pixel when
		 * {{#crossLink "Stage/snapToPixelEnabled"}}{{/crossLink}} is true. To enable/disable snapping on whole
		 * categories of display objects, set this value on the prototype (Ex. Text.prototype.snapToPixel = true).
		 * @property snapToPixel
		 * @type {Boolean}
		 * @default true
		 **/
		this.snapToPixel = true;
	
		/**
		 * An array of Filter objects to apply to this display object. Filters are only applied / updated when {{#crossLink "cache"}}{{/crossLink}}
		 * or {{#crossLink "updateCache"}}{{/crossLink}} is called on the display object, and only apply to the area that is
		 * cached.
		 * @property filters
		 * @type {Array}
		 * @default null
		 **/
		this.filters = null;
		
		/**
		 * A Shape instance that defines a vector mask (clipping path) for this display object.  The shape's transformation
		 * will be applied relative to the display object's parent coordinates (as if it were a child of the parent).
		 * @property mask
		 * @type {Shape}
		 * @default null
		 */
		this.mask = null;
		
		/**
		 * A display object that will be tested when checking mouse interactions or testing {{#crossLink "Container/getObjectsUnderPoint"}}{{/crossLink}}.
		 * The hit area will have its transformation applied relative to this display object's coordinate space (as though
		 * the hit test object were a child of this display object and relative to its regX/Y). The hitArea will be tested
		 * using only its own `alpha` value regardless of the alpha value on the target display object, or the target's
		 * ancestors (parents).
		 * 
		 * If set on a {{#crossLink "Container"}}{{/crossLink}}, children of the Container will not receive mouse events.
		 * This is similar to setting {{#crossLink "mouseChildren"}}{{/crossLink}} to false.
		 *
		 * Note that hitArea is NOT currently used by the `hitTest()` method, nor is it supported for {{#crossLink "Stage"}}{{/crossLink}}.
		 * @property hitArea
		 * @type {DisplayObject}
		 * @default null
		 */
		this.hitArea = null;
		
		/**
		 * A CSS cursor (ex. "pointer", "help", "text", etc) that will be displayed when the user hovers over this display
		 * object. You must enable mouseover events using the {{#crossLink "Stage/enableMouseOver"}}{{/crossLink}} method to
		 * use this property. Setting a non-null cursor on a Container will override the cursor set on its descendants.
		 * @property cursor
		 * @type {String}
		 * @default null
		 */
		this.cursor = null;
	
	
	// private properties:
		/**
		 * @property _cacheOffsetX
		 * @protected
		 * @type {Number}
		 * @default 0
		 **/
		this._cacheOffsetX = 0;
	
		/**
		 * @property _cacheOffsetY
		 * @protected
		 * @type {Number}
		 * @default 0
		 **/
		this._cacheOffsetY = 0;
		
		/**
		 * @property _filterOffsetX
		 * @protected
		 * @type {Number}
		 * @default 0
		 **/
		this._filterOffsetX = 0;
		
		/**
		 * @property _filterOffsetY
		 * @protected
		 * @type {Number}
		 * @default 0
		 **/
		this._filterOffsetY = 0;
		
		/**
		 * @property _cacheScale
		 * @protected
		 * @type {Number}
		 * @default 1
		 **/
		this._cacheScale = 1;
	
		/**
		* @property _cacheDataURLID
		* @protected
		* @type {Number}
		* @default 0
		*/
		this._cacheDataURLID = 0;
		
		/**
		* @property _cacheDataURL
		* @protected
		* @type {String}
		* @default null
		*/
		this._cacheDataURL = null;
	
		/**
		 * @property _props
		 * @protected
		 * @type {DisplayObject}
		 * @default null
		 **/
		this._props = new createjs.DisplayProps();
	
		/**
		 * @property _rectangle
		 * @protected
		 * @type {Rectangle}
		 * @default null
		 **/
		this._rectangle = new createjs.Rectangle();
	
		/**
		 * @property _bounds
		 * @protected
		 * @type {Rectangle}
		 * @default null
		 **/
		this._bounds = null;
	}
	var p = createjs.extend(DisplayObject, createjs.EventDispatcher);

	// TODO: deprecated
	// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.
	
// static properties:
	/**
	 * Listing of mouse event names. Used in _hasMouseEventListener.
	 * @property _MOUSE_EVENTS
	 * @protected
	 * @static
	 * @type {Array}
	 **/
	DisplayObject._MOUSE_EVENTS = ["click","dblclick","mousedown","mouseout","mouseover","pressmove","pressup","rollout","rollover"];

	/**
	 * Suppresses errors generated when using features like hitTest, mouse events, and {{#crossLink "getObjectsUnderPoint"}}{{/crossLink}}
	 * with cross domain content.
	 * @property suppressCrossDomainErrors
	 * @static
	 * @type {Boolean}
	 * @default false
	 **/
	DisplayObject.suppressCrossDomainErrors = false;
	
	/**
	 * @property _snapToPixelEnabled
	 * @protected
	 * @static
	 * @type {Boolean}
	 * @default false
	 **/
	DisplayObject._snapToPixelEnabled = false; // stage.snapToPixelEnabled is temporarily copied here during a draw to provide global access.

	/**
	 * @property _hitTestCanvas
	 * @type {HTMLCanvasElement | Object}
	 * @static
	 * @protected
	 **/
	/**
	 * @property _hitTestContext
	 * @type {CanvasRenderingContext2D}
	 * @static
	 * @protected
	 **/
	var canvas = createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"); // prevent errors on load in browsers without canvas.
	if (canvas.getContext) {
		DisplayObject._hitTestCanvas = canvas;
		DisplayObject._hitTestContext = canvas.getContext("2d");
		canvas.width = canvas.height = 1;
	}

	/**
	 * @property _nextCacheID
	 * @type {Number}
	 * @static
	 * @protected
	 **/
	DisplayObject._nextCacheID = 1;


// events:
	/**
	 * Dispatched when the user presses their left mouse button over the display object. See the 
	 * {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
	 * @event mousedown
	 * @since 0.6.0
	 */
	 
	/**
	 * Dispatched when the user presses their left mouse button and then releases it while over the display object.
	 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
	 * @event click
	 * @since 0.6.0
	 */
	 
	/**
	 * Dispatched when the user double clicks their left mouse button over this display object.
	 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
	 * @event dblclick
	 * @since 0.6.0
	 */
	 
	/**
	 * Dispatched when the user's mouse enters this display object. This event must be enabled using 
	 * {{#crossLink "Stage/enableMouseOver"}}{{/crossLink}}. See also {{#crossLink "DisplayObject/rollover:event"}}{{/crossLink}}.
	 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
	 * @event mouseover
	 * @since 0.6.0
	 */

	/**
	 * Dispatched when the user's mouse leaves this display object. This event must be enabled using 
	 * {{#crossLink "Stage/enableMouseOver"}}{{/crossLink}}. See also {{#crossLink "DisplayObject/rollout:event"}}{{/crossLink}}.
	 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
	 * @event mouseout
	 * @since 0.6.0
	 */
	 
	/**
	 * This event is similar to {{#crossLink "DisplayObject/mouseover:event"}}{{/crossLink}}, with the following
	 * differences: it does not bubble, and it considers {{#crossLink "Container"}}{{/crossLink}} instances as an
	 * aggregate of their content.
	 * 
	 * For example, myContainer contains two overlapping children: shapeA and shapeB. The user moves their mouse over
	 * shapeA and then directly on to shapeB. With a listener for {{#crossLink "mouseover:event"}}{{/crossLink}} on
	 * myContainer, two events would be received, each targeting a child element:<OL>
	 * <LI>when the mouse enters shapeA (target=shapeA)</LI>
	 * <LI>when the mouse enters shapeB (target=shapeB)</LI>
	 * </OL>
	 * However, with a listener for "rollover" instead, only a single event is received when the mouse first enters
	 * the aggregate myContainer content (target=myContainer).
	 * 
	 * This event must be enabled using {{#crossLink "Stage/enableMouseOver"}}{{/crossLink}}.
	 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
	 * @event rollover
	 * @since 0.7.0
	 */
	 
	/**
	 * This event is similar to {{#crossLink "DisplayObject/mouseout:event"}}{{/crossLink}}, with the following
	 * differences: it does not bubble, and it considers {{#crossLink "Container"}}{{/crossLink}} instances as an
	 * aggregate of their content.
	 * 
	 * For example, myContainer contains two overlapping children: shapeA and shapeB. The user moves their mouse over
	 * shapeA, then directly on to shapeB, then off both. With a listener for {{#crossLink "mouseout:event"}}{{/crossLink}}
	 * on myContainer, two events would be received, each targeting a child element:<OL>
	 * <LI>when the mouse leaves shapeA (target=shapeA)</LI>
	 * <LI>when the mouse leaves shapeB (target=shapeB)</LI>
	 * </OL>
	 * However, with a listener for "rollout" instead, only a single event is received when the mouse leaves
	 * the aggregate myContainer content (target=myContainer).
	 * 
	 * This event must be enabled using {{#crossLink "Stage/enableMouseOver"}}{{/crossLink}}.
	 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
	 * @event rollout
	 * @since 0.7.0
	 */
	 
	/**
	 * After a {{#crossLink "DisplayObject/mousedown:event"}}{{/crossLink}} occurs on a display object, a pressmove
	 * event will be generated on that object whenever the mouse moves until the mouse press is released. This can be
	 * useful for dragging and similar operations.
	 * @event pressmove
	 * @since 0.7.0
	 */
	 
	/**
	 * After a {{#crossLink "DisplayObject/mousedown:event"}}{{/crossLink}} occurs on a display object, a pressup event
	 * will be generated on that object when that mouse press is released. This can be useful for dragging and similar
	 * operations.
	 * @event pressup
	 * @since 0.7.0
	 */
	 
	/**
	 * Dispatched when the display object is added to a parent container.
	 * @event added
	 */
	 
	/**
	 * Dispatched when the display object is removed from its parent container.
	 * @event removed
	 */
	 
	/**
	 * Dispatched on each display object on a stage whenever the stage updates. This occurs immediately before the
	 * rendering (draw) pass. When {{#crossLink "Stage/update"}}{{/crossLink}} is called, first all display objects on
	 * the stage dispatch the tick event, then all of the display objects are drawn to stage. Children will have their
	 * {{#crossLink "tick:event"}}{{/crossLink}} event dispatched in order of their depth prior to the event being
	 * dispatched on their parent.
	 * @event tick
	 * @param {Object} target The object that dispatched the event.
	 * @param {String} type The event type.
	 * @param {Array} params An array containing any arguments that were passed to the Stage.update() method. For
	 *      example if you called stage.update("hello"), then the params would be ["hello"].
	 * @since 0.6.0
	 */
	
	
// getter / setters:
	/**
	 * Use the {{#crossLink "DisplayObject/stage:property"}}{{/crossLink}} property instead.
	 * @method getStage
	 * @return {Stage}
	 * @deprecated
	 **/
	p.getStage = function() {
		// uses dynamic access to avoid circular dependencies;
		var o = this, _Stage = createjs["Stage"];
		while (o.parent) { o = o.parent; }
		if (o instanceof _Stage) { return o; }
		return null;
	};

	/**
	 * Returns the Stage instance that this display object will be rendered on, or null if it has not been added to one.
	 * @property stage
	 * @type {Stage}
	 * @readonly
	 **/
	try {
		Object.defineProperties(p, {
			stage: { get: p.getStage }
		});
	} catch (e) {}


// public methods:
	/**
	 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
	 * This does not account for whether it would be visible within the boundaries of the stage.
	 *
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method isVisible
	 * @return {Boolean} Boolean indicating whether the display object would be visible if drawn to a canvas
	 **/
	p.isVisible = function() {
		return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0);
	};

	/**
	 * Draws the display object into the specified context ignoring its visible, alpha, shadow, and transform.
	 * Returns <code>true</code> if the draw was handled (useful for overriding functionality).
	 *
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method draw
	 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
	 * @param {Boolean} [ignoreCache=false] Indicates whether the draw operation should ignore any current cache. For example,
	 * used for drawing the cache (to prevent it from simply drawing an existing cache back into itself).
	 * @return {Boolean}
	 **/
	p.draw = function(ctx, ignoreCache) {
		var cacheCanvas = this.cacheCanvas;
		if (ignoreCache || !cacheCanvas) { return false; }
		var scale = this._cacheScale;
		ctx.drawImage(cacheCanvas, this._cacheOffsetX+this._filterOffsetX, this._cacheOffsetY+this._filterOffsetY, cacheCanvas.width/scale, cacheCanvas.height/scale);
		return true;
	};
	
	/**
	 * Applies this display object's transformation, alpha, globalCompositeOperation, clipping path (mask), and shadow
	 * to the specified context. This is typically called prior to {{#crossLink "DisplayObject/draw"}}{{/crossLink}}.
	 * @method updateContext
	 * @param {CanvasRenderingContext2D} ctx The canvas 2D to update.
	 **/
	p.updateContext = function(ctx) {
		var o=this, mask=o.mask, mtx= o._props.matrix;
		
		if (mask && mask.graphics && !mask.graphics.isEmpty()) {
			mask.getMatrix(mtx);
			ctx.transform(mtx.a,  mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
			
			mask.graphics.drawAsPath(ctx);
			ctx.clip();
			
			mtx.invert();
			ctx.transform(mtx.a,  mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
		}
		
		this.getMatrix(mtx);
		var tx = mtx.tx, ty = mtx.ty;
		if (DisplayObject._snapToPixelEnabled && o.snapToPixel) {
			tx = tx + (tx < 0 ? -0.5 : 0.5) | 0;
			ty = ty + (ty < 0 ? -0.5 : 0.5) | 0;
		}
		ctx.transform(mtx.a,  mtx.b, mtx.c, mtx.d, tx, ty);
		ctx.globalAlpha *= o.alpha;
		if (o.compositeOperation) { ctx.globalCompositeOperation = o.compositeOperation; }
		if (o.shadow) { this._applyShadow(ctx, o.shadow); }
	};

	/**
	 * Draws the display object into a new canvas, which is then used for subsequent draws. For complex content
	 * that does not change frequently (ex. a Container with many children that do not move, or a complex vector Shape),
	 * this can provide for much faster rendering because the content does not need to be re-rendered each tick. The
	 * cached display object can be moved, rotated, faded, etc freely, however if its content changes, you must
	 * manually update the cache by calling <code>updateCache()</code> or <code>cache()</code> again. You must specify
	 * the cache area via the x, y, w, and h parameters. This defines the rectangle that will be rendered and cached
	 * using this display object's coordinates.
	 *
	 * <h4>Example</h4>
	 * For example if you defined a Shape that drew a circle at 0, 0 with a radius of 25:
	 *
	 *      var shape = new createjs.Shape();
	 *      shape.graphics.beginFill("#ff0000").drawCircle(0, 0, 25);
	 *      myShape.cache(-25, -25, 50, 50);
	 *
	 * Note that filters need to be defined <em>before</em> the cache is applied. Check out the {{#crossLink "Filter"}}{{/crossLink}}
	 * class for more information. Some filters (ex. BlurFilter) will not work as expected in conjunction with the scale param.
	 * 
	 * Usually, the resulting cacheCanvas will have the dimensions width*scale by height*scale, however some filters (ex. BlurFilter)
	 * will add padding to the canvas dimensions.
	 *
	 * @method cache
	 * @param {Number} x The x coordinate origin for the cache region.
	 * @param {Number} y The y coordinate origin for the cache region.
	 * @param {Number} width The width of the cache region.
	 * @param {Number} height The height of the cache region.
	 * @param {Number} [scale=1] The scale at which the cache will be created. For example, if you cache a vector shape using
	 * 	myShape.cache(0,0,100,100,2) then the resulting cacheCanvas will be 200x200 px. This lets you scale and rotate
	 * 	cached elements with greater fidelity. Default is 1.
	 **/
	p.cache = function(x, y, width, height, scale) {
		// draw to canvas.
		scale = scale||1;
		if (!this.cacheCanvas) { this.cacheCanvas = createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"); }
		this._cacheWidth = width;
		this._cacheHeight = height;
		this._cacheOffsetX = x;
		this._cacheOffsetY = y;
		this._cacheScale = scale;
		this.updateCache();
	};

	/**
	 * Redraws the display object to its cache. Calling updateCache without an active cache will throw an error.
	 * If compositeOperation is null the current cache will be cleared prior to drawing. Otherwise the display object
	 * will be drawn over the existing cache using the specified compositeOperation.
	 *
	 * <h4>Example</h4>
	 * Clear the current graphics of a cached shape, draw some new instructions, and then update the cache. The new line
	 * will be drawn on top of the old one.
	 *
	 *      // Not shown: Creating the shape, and caching it.
	 *      shapeInstance.clear();
	 *      shapeInstance.setStrokeStyle(3).beginStroke("#ff0000").moveTo(100, 100).lineTo(200,200);
	 *      shapeInstance.updateCache();
	 *
	 * @method updateCache
	 * @param {String} compositeOperation The compositeOperation to use, or null to clear the cache and redraw it.
	 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#compositing">
	 * whatwg spec on compositing</a>.
	 **/
	p.updateCache = function(compositeOperation) {
		var cacheCanvas = this.cacheCanvas;
		if (!cacheCanvas) { throw "cache() must be called before updateCache()"; }
		var scale = this._cacheScale, offX = this._cacheOffsetX*scale, offY = this._cacheOffsetY*scale;
		var w = this._cacheWidth, h = this._cacheHeight, ctx = cacheCanvas.getContext("2d");
		
		var fBounds = this._getFilterBounds();
		offX += (this._filterOffsetX = fBounds.x);
		offY += (this._filterOffsetY = fBounds.y);
		
		w = Math.ceil(w*scale) + fBounds.width;
		h = Math.ceil(h*scale) + fBounds.height;
		if (w != cacheCanvas.width || h != cacheCanvas.height) {
			// TODO: it would be nice to preserve the content if there is a compositeOperation.
			cacheCanvas.width = w;
			cacheCanvas.height = h;
		} else if (!compositeOperation) {
			ctx.clearRect(0, 0, w+1, h+1);
		}
		
		ctx.save();
		ctx.globalCompositeOperation = compositeOperation;
		ctx.setTransform(scale, 0, 0, scale, -offX, -offY);
		this.draw(ctx, true);
		// TODO: filters and cache scale don't play well together at present.
		this._applyFilters();
		ctx.restore();
		this.cacheID = DisplayObject._nextCacheID++;
	};

	/**
	 * Clears the current cache. See {{#crossLink "DisplayObject/cache"}}{{/crossLink}} for more information.
	 * @method uncache
	 **/
	p.uncache = function() {
		this._cacheDataURL = this.cacheCanvas = null;
		this.cacheID = this._cacheOffsetX = this._cacheOffsetY = this._filterOffsetX = this._filterOffsetY = 0;
		this._cacheScale = 1;
	};
	
	/**
	 * Returns a data URL for the cache, or null if this display object is not cached.
	 * Uses cacheID to ensure a new data URL is not generated if the cache has not changed.
	 * @method getCacheDataURL
	 * @return {String} The image data url for the cache.
	 **/
	p.getCacheDataURL = function() {
		if (!this.cacheCanvas) { return null; }
		if (this.cacheID != this._cacheDataURLID) { this._cacheDataURL = this.cacheCanvas.toDataURL(); }
		return this._cacheDataURL;
	};

	/**
	 * Transforms the specified x and y position from the coordinate space of the display object
	 * to the global (stage) coordinate space. For example, this could be used to position an HTML label
	 * over a specific point on a nested display object. Returns a Point instance with x and y properties
	 * correlating to the transformed coordinates on the stage.
	 *
	 * <h4>Example</h4>
	 *
	 *      displayObject.x = 300;
	 *      displayObject.y = 200;
	 *      stage.addChild(displayObject);
	 *      var point = displayObject.localToGlobal(100, 100);
	 *      // Results in x=400, y=300
	 *
	 * @method localToGlobal
	 * @param {Number} x The x position in the source display object to transform.
	 * @param {Number} y The y position in the source display object to transform.
	 * @param {Point | Object} [pt] An object to copy the result into. If omitted a new Point object with x/y properties will be returned. 
	 * @return {Point} A Point instance with x and y properties correlating to the transformed coordinates
	 * on the stage.
	 **/
	p.localToGlobal = function(x, y, pt) {
		return this.getConcatenatedMatrix(this._props.matrix).transformPoint(x,y, pt||new createjs.Point());
	};

	/**
	 * Transforms the specified x and y position from the global (stage) coordinate space to the
	 * coordinate space of the display object. For example, this could be used to determine
	 * the current mouse position within the display object. Returns a Point instance with x and y properties
	 * correlating to the transformed position in the display object's coordinate space.
	 *
	 * <h4>Example</h4>
	 *
	 *      displayObject.x = 300;
	 *      displayObject.y = 200;
	 *      stage.addChild(displayObject);
	 *      var point = displayObject.globalToLocal(100, 100);
	 *      // Results in x=-200, y=-100
	 *
	 * @method globalToLocal
	 * @param {Number} x The x position on the stage to transform.
	 * @param {Number} y The y position on the stage to transform.
	 * @param {Point | Object} [pt] An object to copy the result into. If omitted a new Point object with x/y properties will be returned. 
	 * @return {Point} A Point instance with x and y properties correlating to the transformed position in the
	 * display object's coordinate space.
	 **/
	p.globalToLocal = function(x, y, pt) {
		return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(x,y, pt||new createjs.Point());
	};

	/**
	 * Transforms the specified x and y position from the coordinate space of this display object to the coordinate
	 * space of the target display object. Returns a Point instance with x and y properties correlating to the
	 * transformed position in the target's coordinate space. Effectively the same as using the following code with
	 * {{#crossLink "DisplayObject/localToGlobal"}}{{/crossLink}} and {{#crossLink "DisplayObject/globalToLocal"}}{{/crossLink}}.
	 *
	 *      var pt = this.localToGlobal(x, y);
	 *      pt = target.globalToLocal(pt.x, pt.y);
	 *
	 * @method localToLocal
	 * @param {Number} x The x position in the source display object to transform.
	 * @param {Number} y The y position on the source display object to transform.
	 * @param {DisplayObject} target The target display object to which the coordinates will be transformed.
	 * @param {Point | Object} [pt] An object to copy the result into. If omitted a new Point object with x/y properties will be returned. 
	 * @return {Point} Returns a Point instance with x and y properties correlating to the transformed position
	 * in the target's coordinate space.
	 **/
	p.localToLocal = function(x, y, target, pt) {
		pt = this.localToGlobal(x, y, pt);
		return target.globalToLocal(pt.x, pt.y, pt);
	};

	/**
	 * Shortcut method to quickly set the transform properties on the display object. All parameters are optional.
	 * Omitted parameters will have the default value set.
	 *
	 * <h4>Example</h4>
	 *
	 *      displayObject.setTransform(100, 100, 2, 2);
	 *
	 * @method setTransform
	 * @param {Number} [x=0] The horizontal translation (x position) in pixels
	 * @param {Number} [y=0] The vertical translation (y position) in pixels
	 * @param {Number} [scaleX=1] The horizontal scale, as a percentage of 1
	 * @param {Number} [scaleY=1] the vertical scale, as a percentage of 1
	 * @param {Number} [rotation=0] The rotation, in degrees
	 * @param {Number} [skewX=0] The horizontal skew factor
	 * @param {Number} [skewY=0] The vertical skew factor
	 * @param {Number} [regX=0] The horizontal registration point in pixels
	 * @param {Number} [regY=0] The vertical registration point in pixels
	 * @return {DisplayObject} Returns this instance. Useful for chaining commands.
	 * @chainable
	*/
	p.setTransform = function(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
		this.x = x || 0;
		this.y = y || 0;
		this.scaleX = scaleX == null ? 1 : scaleX;
		this.scaleY = scaleY == null ? 1 : scaleY;
		this.rotation = rotation || 0;
		this.skewX = skewX || 0;
		this.skewY = skewY || 0;
		this.regX = regX || 0;
		this.regY = regY || 0;
		return this;
	};
	
	/**
	 * Returns a matrix based on this object's current transform.
	 * @method getMatrix
	 * @param {Matrix2D} matrix Optional. A Matrix2D object to populate with the calculated values. If null, a new
	 * Matrix object is returned.
	 * @return {Matrix2D} A matrix representing this display object's transform.
	 **/
	p.getMatrix = function(matrix) {
		var o = this, mtx = matrix&&matrix.identity() || new createjs.Matrix2D();
		return o.transformMatrix ?  mtx.copy(o.transformMatrix) : mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.regX, o.regY);
	};
	
	/**
	 * Generates a Matrix2D object representing the combined transform of the display object and all of its
	 * parent Containers up to the highest level ancestor (usually the {{#crossLink "Stage"}}{{/crossLink}}). This can
	 * be used to transform positions between coordinate spaces, such as with {{#crossLink "DisplayObject/localToGlobal"}}{{/crossLink}}
	 * and {{#crossLink "DisplayObject/globalToLocal"}}{{/crossLink}}.
	 * @method getConcatenatedMatrix
	 * @param {Matrix2D} [matrix] A {{#crossLink "Matrix2D"}}{{/crossLink}} object to populate with the calculated values.
	 * If null, a new Matrix2D object is returned.
	 * @return {Matrix2D} The combined matrix.
	 **/
	p.getConcatenatedMatrix = function(matrix) {
		var o = this, mtx = this.getMatrix(matrix);
		while (o = o.parent) {
			mtx.prependMatrix(o.getMatrix(o._props.matrix));
		}
		return mtx;
	};
	
	/**
	 * Generates a DisplayProps object representing the combined display properties of the  object and all of its
	 * parent Containers up to the highest level ancestor (usually the {{#crossLink "Stage"}}{{/crossLink}}).
	 * @method getConcatenatedDisplayProps
	 * @param {DisplayProps} [props] A {{#crossLink "DisplayProps"}}{{/crossLink}} object to populate with the calculated values.
	 * If null, a new DisplayProps object is returned.
	 * @return {DisplayProps} The combined display properties.
	 **/
	p.getConcatenatedDisplayProps = function(props) {
		props = props ? props.identity() : new createjs.DisplayProps();
		var o = this, mtx = o.getMatrix(props.matrix); 
		do {
			props.prepend(o.visible, o.alpha, o.shadow, o.compositeOperation);
			
			// we do this to avoid problems with the matrix being used for both operations when o._props.matrix is passed in as the props param.
			// this could be simplified (ie. just done as part of the prepend above) if we switched to using a pool.
			if (o != this) { mtx.prependMatrix(o.getMatrix(o._props.matrix)); }
		} while (o = o.parent);
		return props;
	};

	/**
	 * Tests whether the display object intersects the specified point in <em>local</em> coordinates (ie. draws a pixel
	 * with alpha > 0 at the specified position). This ignores the alpha, shadow, hitArea, mask, and compositeOperation
	 * of the display object.
	 *
	 * <h4>Example</h4>
	 *
	 * 		var myShape = new createjs.Shape();
	 * 		myShape.graphics.beginFill("red").drawRect(100, 100, 20, 50);
	 *
	 * 		console.log(myShape.hitTest(10,10); // false
	 * 		console.log(myShape.hitTest(110, 25); // true
	 *
	 * Note that to use Stage coordinates (such as {{#crossLink "Stage/mouseX:property"}}{{/crossLink}}), they must
	 * first be converted to local coordinates:
	 *
	 *      stage.addEventListener("stagemousedown", handleMouseDown);
	 *      function handleMouseDown(event) {
	 *      	var p = myShape.globalToLocal(stage.mouseX, stage.mouseY);
	 *          var hit = myShape.hitTest(p.x, p.y);
	 *      }
	 *
	 * Shape-to-shape collision is not currently supported by EaselJS.
	 *
	 * @method hitTest
	 * @param {Number} x The x position to check in the display object's local coordinates.
	 * @param {Number} y The y position to check in the display object's local coordinates.
	 * @return {Boolean} A Boolean indicating whether a visible portion of the DisplayObject intersect the specified
	 * local Point.
	*/
	p.hitTest = function(x, y) {
		var ctx = DisplayObject._hitTestContext;
		ctx.setTransform(1, 0, 0, 1, -x, -y);
		this.draw(ctx);

		var hit = this._testHit(ctx);
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, 2, 2);
		return hit;
	};
	
	/**
	 * Provides a chainable shortcut method for setting a number of properties on the instance.
	 *
	 * <h4>Example</h4>
	 *
	 *      var myGraphics = new createjs.Graphics().beginFill("#ff0000").drawCircle(0, 0, 25);
	 *      var shape = stage.addChild(new createjs.Shape()).set({graphics:myGraphics, x:100, y:100, alpha:0.5});
	 *
	 * @method set
	 * @param {Object} props A generic object containing properties to copy to the DisplayObject instance.
	 * @return {DisplayObject} Returns the instance the method is called on (useful for chaining calls.)
	 * @chainable
	*/
	p.set = function(props) {
		for (var n in props) { this[n] = props[n]; }
		return this;
	};
	
	/**
	 * Returns a rectangle representing this object's bounds in its local coordinate system (ie. with no transformation).
	 * Objects that have been cached will return the bounds of the cache.
	 * 
	 * Not all display objects can calculate their own bounds (ex. Shape). For these objects, you can use 
	 * {{#crossLink "DisplayObject/setBounds"}}{{/crossLink}} so that they are included when calculating Container
	 * bounds.
	 * 
	 * <table>
	 * 	<tr><td><b>All</b></td><td>
	 * 		All display objects support setting bounds manually using setBounds(). Likewise, display objects that
	 * 		have been cached using cache() will return the bounds of their cache. Manual and cache bounds will override
	 * 		the automatic calculations listed below.
	 * 	</td></tr>
	 * 	<tr><td><b>Bitmap</b></td><td>
	 * 		Returns the width and height of the sourceRect (if specified) or image, extending from (x=0,y=0).
	 * 	</td></tr>
	 * 	<tr><td><b>Sprite</b></td><td>
	 * 		Returns the bounds of the current frame. May have non-zero x/y if a frame registration point was specified
	 * 		in the spritesheet data. See also {{#crossLink "SpriteSheet/getFrameBounds"}}{{/crossLink}}
	 * 	</td></tr>
	 * 	<tr><td><b>Container</b></td><td>
	 * 		Returns the aggregate (combined) bounds of all children that return a non-null value from getBounds().
	 * 	</td></tr>
	 * 	<tr><td><b>Shape</b></td><td>
	 * 		Does not currently support automatic bounds calculations. Use setBounds() to manually define bounds.
	 * 	</td></tr>
	 * 	<tr><td><b>Text</b></td><td>
	 * 		Returns approximate bounds. Horizontal values (x/width) are quite accurate, but vertical values (y/height) are
	 * 		not, especially when using textBaseline values other than "top".
	 * 	</td></tr>
	 * 	<tr><td><b>BitmapText</b></td><td>
	 * 		Returns approximate bounds. Values will be more accurate if spritesheet frame registration points are close
	 * 		to (x=0,y=0).
	 * 	</td></tr>
	* </table>
	 * 
	 * Bounds can be expensive to calculate for some objects (ex. text, or containers with many children), and
	 * are recalculated each time you call getBounds(). You can prevent recalculation on static objects by setting the
	 * bounds explicitly:
	 * 
	 * 	var bounds = obj.getBounds();
	 * 	obj.setBounds(bounds.x, bounds.y, bounds.width, bounds.height);
	 * 	// getBounds will now use the set values, instead of recalculating
	 * 
	 * To reduce memory impact, the returned Rectangle instance may be reused internally; clone the instance or copy its
	 * values if you need to retain it.
	 * 
	 * 	var myBounds = obj.getBounds().clone();
	 * 	// OR:
	 * 	myRect.copy(obj.getBounds());
	 * 
	 * @method getBounds
	 * @return {Rectangle} A Rectangle instance representing the bounds, or null if bounds are not available for this
	 * object.
	 **/
	p.getBounds = function() {
		if (this._bounds) { return this._rectangle.copy(this._bounds); }
		var cacheCanvas = this.cacheCanvas;
		if (cacheCanvas) {
			var scale = this._cacheScale;
			return this._rectangle.setValues(this._cacheOffsetX, this._cacheOffsetY, cacheCanvas.width/scale, cacheCanvas.height/scale);
		}
		return null;
	};
	
	/**
	 * Returns a rectangle representing this object's bounds in its parent's coordinate system (ie. with transformations applied).
	 * Objects that have been cached will return the transformed bounds of the cache.
	 * 
	 * Not all display objects can calculate their own bounds (ex. Shape). For these objects, you can use 
	 * {{#crossLink "DisplayObject/setBounds"}}{{/crossLink}} so that they are included when calculating Container
	 * bounds.
	 * 
	 * To reduce memory impact, the returned Rectangle instance may be reused internally; clone the instance or copy its
	 * values if you need to retain it.
	 * 
	 * Container instances calculate aggregate bounds for all children that return bounds via getBounds.
	 * @method getTransformedBounds
	 * @return {Rectangle} A Rectangle instance representing the bounds, or null if bounds are not available for this object.
	 **/
	p.getTransformedBounds = function() {
		return this._getBounds();
	};
	
	/**
	 * Allows you to manually specify the bounds of an object that either cannot calculate their own bounds (ex. Shape &
	 * Text) for future reference, or so the object can be included in Container bounds. Manually set bounds will always
	 * override calculated bounds.
	 * 
	 * The bounds should be specified in the object's local (untransformed) coordinates. For example, a Shape instance
	 * with a 25px radius circle centered at 0,0 would have bounds of (-25, -25, 50, 50).
	 * @method setBounds
	 * @param {Number} x The x origin of the bounds. Pass null to remove the manual bounds.
	 * @param {Number} y The y origin of the bounds.
	 * @param {Number} width The width of the bounds.
	 * @param {Number} height The height of the bounds.
	 **/
	p.setBounds = function(x, y, width, height) {
		if (x == null) { this._bounds = x; }
		this._bounds = (this._bounds || new createjs.Rectangle()).setValues(x, y, width, height);
	};

	/**
	 * Returns a clone of this DisplayObject. Some properties that are specific to this instance's current context are
	 * reverted to their defaults (for example .parent). Caches are not maintained across clones, and some elements
	 * are copied by reference (masks, individual filter instances, hit area)
	 * @method clone
	 * @return {DisplayObject} A clone of the current DisplayObject instance.
	 **/
	p.clone = function() {
		return this._cloneProps(new DisplayObject());
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[DisplayObject (name="+  this.name +")]";
	};


// private methods:
	// separated so it can be used more easily in subclasses:
	/**
	 * @method _cloneProps
	 * @param {DisplayObject} o The DisplayObject instance which will have properties from the current DisplayObject
	 * instance copied into.
	 * @return {DisplayObject} o
	 * @protected
	 **/
	p._cloneProps = function(o) {
		o.alpha = this.alpha;
		o.mouseEnabled = this.mouseEnabled;
		o.tickEnabled = this.tickEnabled;
		o.name = this.name;
		o.regX = this.regX;
		o.regY = this.regY;
		o.rotation = this.rotation;
		o.scaleX = this.scaleX;
		o.scaleY = this.scaleY;
		o.shadow = this.shadow;
		o.skewX = this.skewX;
		o.skewY = this.skewY;
		o.visible = this.visible;
		o.x  = this.x;
		o.y = this.y;
		o.compositeOperation = this.compositeOperation;
		o.snapToPixel = this.snapToPixel;
		o.filters = this.filters==null?null:this.filters.slice(0);
		o.mask = this.mask;
		o.hitArea = this.hitArea;
		o.cursor = this.cursor;
		o._bounds = this._bounds;
		return o;
	};

	/**
	 * @method _applyShadow
	 * @protected
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {Shadow} shadow
	 **/
	p._applyShadow = function(ctx, shadow) {
		shadow = shadow || Shadow.identity;
		ctx.shadowColor = shadow.color;
		ctx.shadowOffsetX = shadow.offsetX;
		ctx.shadowOffsetY = shadow.offsetY;
		ctx.shadowBlur = shadow.blur;
	};
	
	
	/**
	 * @method _tick
	 * @param {Object} evtObj An event object that will be dispatched to all tick listeners. This object is reused between dispatchers to reduce construction & GC costs.
	 * @protected
	 **/
	p._tick = function(evtObj) {
		// because tick can be really performance sensitive, check for listeners before calling dispatchEvent.
		var ls = this._listeners;
		if (ls && ls["tick"]) {
			// reset & reuse the event object to avoid construction / GC costs:
			evtObj.target = null;
			evtObj.propagationStopped = evtObj.immediatePropagationStopped = false;
			this.dispatchEvent(evtObj);
		}
	};

	/**
	 * @method _testHit
	 * @protected
	 * @param {CanvasRenderingContext2D} ctx
	 * @return {Boolean}
	 **/
	p._testHit = function(ctx) {
		try {
			var hit = ctx.getImageData(0, 0, 1, 1).data[3] > 1;
		} catch (e) {
			if (!DisplayObject.suppressCrossDomainErrors) {
				throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images.";
			}
		}
		return hit;
	};

	/**
	 * @method _applyFilters
	 * @protected
	 **/
	p._applyFilters = function() {
		if (!this.filters || this.filters.length == 0 || !this.cacheCanvas) { return; }
		var l = this.filters.length;
		var ctx = this.cacheCanvas.getContext("2d");
		var w = this.cacheCanvas.width;
		var h = this.cacheCanvas.height;
		for (var i=0; i<l; i++) {
			this.filters[i].applyFilter(ctx, 0, 0, w, h);
		}
	};
	
	/**
	 * @method _getFilterBounds
	 * @return {Rectangle}
	 * @protected
	 **/
	p._getFilterBounds = function(rect) {
		var l, filters = this.filters, bounds = this._rectangle.setValues(0,0,0,0);
		if (!filters || !(l=filters.length)) { return bounds; }
		
		for (var i=0; i<l; i++) {
			var f = this.filters[i];
			f.getBounds&&f.getBounds(bounds);
		}
		return bounds;
	};
	
	/**
	 * @method _getBounds
	 * @param {Matrix2D} matrix
	 * @param {Boolean} ignoreTransform If true, does not apply this object's transform.
	 * @return {Rectangle}
	 * @protected
	 **/
	p._getBounds = function(matrix, ignoreTransform){
		return this._transformBounds(this.getBounds(), matrix, ignoreTransform);
	};
	
	/**
	 * @method _transformBounds
	 * @param {Rectangle} bounds
	 * @param {Matrix2D} matrix
	 * @param {Boolean} ignoreTransform
	 * @return {Rectangle}
	 * @protected
	 **/
	p._transformBounds = function(bounds, matrix, ignoreTransform) {
		if (!bounds) { return bounds; }
		var x = bounds.x, y = bounds.y, width = bounds.width, height = bounds.height, mtx = this._props.matrix;
		mtx = ignoreTransform ? mtx.identity() : this.getMatrix(mtx);
		
		if (x || y) { mtx.appendTransform(0,0,1,1,0,0,0,-x,-y); } // TODO: simplify this.
		if (matrix) { mtx.prependMatrix(matrix); }
		
		var x_a = width*mtx.a, x_b = width*mtx.b;
		var y_c = height*mtx.c, y_d = height*mtx.d;
		var tx = mtx.tx, ty = mtx.ty;
		
		var minX = tx, maxX = tx, minY = ty, maxY = ty;

		if ((x = x_a + tx) < minX) { minX = x; } else if (x > maxX) { maxX = x; }
		if ((x = x_a + y_c + tx) < minX) { minX = x; } else if (x > maxX) { maxX = x; }
		if ((x = y_c + tx) < minX) { minX = x; } else if (x > maxX) { maxX = x; }
		
		if ((y = x_b + ty) < minY) { minY = y; } else if (y > maxY) { maxY = y; }
		if ((y = x_b + y_d + ty) < minY) { minY = y; } else if (y > maxY) { maxY = y; }
		if ((y = y_d + ty) < minY) { minY = y; } else if (y > maxY) { maxY = y; }
		
		return bounds.setValues(minX, minY, maxX-minX, maxY-minY);
	};
	
	/**
	 * Indicates whether the display object has any mouse event listeners or a cursor.
	 * @method _isMouseOpaque
	 * @return {Boolean}
	 * @protected
	 **/
	p._hasMouseEventListener = function() {
		var evts = DisplayObject._MOUSE_EVENTS;
		for (var i= 0, l=evts.length; i<l; i++) {
			if (this.hasEventListener(evts[i])) { return true; }
		}
		return !!this.cursor;
	};

	createjs.DisplayObject = createjs.promote(DisplayObject, "EventDispatcher");
}());

//##############################################################################
// Container.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";
	

// constructor:
/**
 * A Container is a nestable display list that allows you to work with compound display elements. For  example you could
 * group arm, leg, torso and head {{#crossLink "Bitmap"}}{{/crossLink}} instances together into a Person Container, and
 * transform them as a group, while still being able to move the individual parts relative to each other. Children of
 * containers have their <code>transform</code> and <code>alpha</code> properties concatenated with their parent
 * Container.
 *
 * For example, a {{#crossLink "Shape"}}{{/crossLink}} with x=100 and alpha=0.5, placed in a Container with <code>x=50</code>
 * and <code>alpha=0.7</code> will be rendered to the canvas at <code>x=150</code> and <code>alpha=0.35</code>.
 * Containers have some overhead, so you generally shouldn't create a Container to hold a single child.
 *
 * <h4>Example</h4>
 *
 *      var container = new createjs.Container();
 *      container.addChild(bitmapInstance, shapeInstance);
 *      container.x = 100;
 *
 * @class Container
 * @extends DisplayObject
 * @constructor
 **/
	function Container() {
		this.DisplayObject_constructor();
		
	// public properties:
		/**
		 * The array of children in the display list. You should usually use the child management methods such as
		 * {{#crossLink "Container/addChild"}}{{/crossLink}}, {{#crossLink "Container/removeChild"}}{{/crossLink}},
		 * {{#crossLink "Container/swapChildren"}}{{/crossLink}}, etc, rather than accessing this directly, but it is
		 * included for advanced uses.
		 * @property children
		 * @type Array
		 * @default null
		 **/
		this.children = [];
		
		/**
		 * Indicates whether the children of this container are independently enabled for mouse/pointer interaction.
		 * If false, the children will be aggregated under the container - for example, a click on a child shape would
		 * trigger a click event on the container.
		 * @property mouseChildren
		 * @type Boolean
		 * @default true
		 **/
		this.mouseChildren = true;
		
		/**
		 * If false, the tick will not be propagated to children of this Container. This can provide some performance benefits.
		 * In addition to preventing the "tick" event from being dispatched, it will also prevent tick related updates
		 * on some display objects (ex. Sprite & MovieClip frame advancing, DOMElement visibility handling).
		 * @property tickChildren
		 * @type Boolean
		 * @default true
		 **/
		this.tickChildren = true;
	}
	var p = createjs.extend(Container, createjs.DisplayObject);
	
	
// getter / setters:
	/**
	 * Use the {{#crossLink "Container/numChildren:property"}}{{/crossLink}} property instead.
	 * @method getNumChildren
	 * @return {Number}
	 * @deprecated
	 **/
	p.getNumChildren = function() {
		return this.children.length;
	};

	/**
	 * Returns the number of children in the container.
	 * @property numChildren
	 * @type {Number}
	 * @readonly
	 **/
	try {
		Object.defineProperties(p, {
			numChildren: { get: p.getNumChildren }
		});
	} catch (e) {}
	

// public methods:
	/**
	 * Constructor alias for backwards compatibility. This method will be removed in future versions.
	 * Subclasses should be updated to use {{#crossLink "Utility Methods/extends"}}{{/crossLink}}.
	 * @method initialize
	 * @deprecated in favour of `createjs.promote()`
	 **/
	p.initialize = Container; // TODO: deprecated.
	
	/**
	 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
	 * This does not account for whether it would be visible within the boundaries of the stage.
	 *
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method isVisible
	 * @return {Boolean} Boolean indicating whether the display object would be visible if drawn to a canvas
	 **/
	p.isVisible = function() {
		var hasContent = this.cacheCanvas || this.children.length;
		return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
	};

	/**
	 * Draws the display object into the specified context ignoring its visible, alpha, shadow, and transform.
	 * Returns true if the draw was handled (useful for overriding functionality).
	 *
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method draw
	 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
	 * @param {Boolean} [ignoreCache=false] Indicates whether the draw operation should ignore any current cache.
	 * For example, used for drawing the cache (to prevent it from simply drawing an existing cache back
	 * into itself).
	 **/
	p.draw = function(ctx, ignoreCache) {
		if (this.DisplayObject_draw(ctx, ignoreCache)) { return true; }
		
		// this ensures we don't have issues with display list changes that occur during a draw:
		var list = this.children.slice();
		for (var i=0,l=list.length; i<l; i++) {
			var child = list[i];
			if (!child.isVisible()) { continue; }
			
			// draw the child:
			ctx.save();
			child.updateContext(ctx);
			child.draw(ctx);
			ctx.restore();
		}
		return true;
	};
	
	/**
	 * Adds a child to the top of the display list.
	 *
	 * <h4>Example</h4>
	 *
	 * 		container.addChild(bitmapInstance);
	 *
	 * You can also add multiple children at once:
	 *
	 * 		container.addChild(bitmapInstance, shapeInstance, textInstance);
	 *
	 * @method addChild
	 * @param {DisplayObject} child The display object to add.
	 * @return {DisplayObject} The child that was added, or the last child if multiple children were added.
	 **/
	p.addChild = function(child) {
		if (child == null) { return child; }
		var l = arguments.length;
		if (l > 1) {
			for (var i=0; i<l; i++) { this.addChild(arguments[i]); }
			return arguments[l-1];
		}
		if (child.parent) { child.parent.removeChild(child); }
		child.parent = this;
		this.children.push(child);
		child.dispatchEvent("added");
		return child;
	};

	/**
	 * Adds a child to the display list at the specified index, bumping children at equal or greater indexes up one, and
	 * setting its parent to this Container.
	 *
	 * <h4>Example</h4>
	 *
	 *      addChildAt(child1, index);
	 *
	 * You can also add multiple children, such as:
	 *
	 *      addChildAt(child1, child2, ..., index);
	 *
	 * The index must be between 0 and numChildren. For example, to add myShape under otherShape in the display list,
	 * you could use:
	 *
	 *      container.addChildAt(myShape, container.getChildIndex(otherShape));
	 *
	 * This would also bump otherShape's index up by one. Fails silently if the index is out of range.
	 *
	 * @method addChildAt
	 * @param {DisplayObject} child The display object to add.
	 * @param {Number} index The index to add the child at.
	 * @return {DisplayObject} Returns the last child that was added, or the last child if multiple children were added.
	 **/
	p.addChildAt = function(child, index) {
		var l = arguments.length;
		var indx = arguments[l-1]; // can't use the same name as the index param or it replaces arguments[1]
		if (indx < 0 || indx > this.children.length) { return arguments[l-2]; }
		if (l > 2) {
			for (var i=0; i<l-1; i++) { this.addChildAt(arguments[i], indx+i); }
			return arguments[l-2];
		}
		if (child.parent) { child.parent.removeChild(child); }
		child.parent = this;
		this.children.splice(index, 0, child);
		child.dispatchEvent("added");
		return child;
	};

	/**
	 * Removes the specified child from the display list. Note that it is faster to use removeChildAt() if the index is
	 * already known.
	 *
	 * <h4>Example</h4>
	 *
	 *      container.removeChild(child);
	 *
	 * You can also remove multiple children:
	 *
	 *      removeChild(child1, child2, ...);
	 *
	 * Returns true if the child (or children) was removed, or false if it was not in the display list.
	 * @method removeChild
	 * @param {DisplayObject} child The child to remove.
	 * @return {Boolean} true if the child (or children) was removed, or false if it was not in the display list.
	 **/
	p.removeChild = function(child) {
		var l = arguments.length;
		if (l > 1) {
			var good = true;
			for (var i=0; i<l; i++) { good = good && this.removeChild(arguments[i]); }
			return good;
		}
		return this.removeChildAt(createjs.indexOf(this.children, child));
	};

	/**
	 * Removes the child at the specified index from the display list, and sets its parent to null.
	 *
	 * <h4>Example</h4>
	 *
	 *      container.removeChildAt(2);
	 *
	 * You can also remove multiple children:
	 *
	 *      container.removeChild(2, 7, ...)
	 *
	 * Returns true if the child (or children) was removed, or false if any index was out of range.
	 * @method removeChildAt
	 * @param {Number} index The index of the child to remove.
	 * @return {Boolean} true if the child (or children) was removed, or false if any index was out of range.
	 **/
	p.removeChildAt = function(index) {
		var l = arguments.length;
		if (l > 1) {
			var a = [];
			for (var i=0; i<l; i++) { a[i] = arguments[i]; }
			a.sort(function(a, b) { return b-a; });
			var good = true;
			for (var i=0; i<l; i++) { good = good && this.removeChildAt(a[i]); }
			return good;
		}
		if (index < 0 || index > this.children.length-1) { return false; }
		var child = this.children[index];
		if (child) { child.parent = null; }
		this.children.splice(index, 1);
		child.dispatchEvent("removed");
		return true;
	};

	/**
	 * Removes all children from the display list.
	 *
	 * <h4>Example</h4>
	 *
	 * 	container.removeAllChildren();
	 *
	 * @method removeAllChildren
	 **/
	p.removeAllChildren = function() {
		var kids = this.children;
		while (kids.length) { this.removeChildAt(0); }
	};

	/**
	 * Returns the child at the specified index.
	 *
	 * <h4>Example</h4>
	 *
	 *      container.getChildAt(2);
	 *
	 * @method getChildAt
	 * @param {Number} index The index of the child to return.
	 * @return {DisplayObject} The child at the specified index. Returns null if there is no child at the index.
	 **/
	p.getChildAt = function(index) {
		return this.children[index];
	};
	
	/**
	 * Returns the child with the specified name.
	 * @method getChildByName
	 * @param {String} name The name of the child to return.
	 * @return {DisplayObject} The child with the specified name.
	 **/
	p.getChildByName = function(name) {
		var kids = this.children;
		for (var i=0,l=kids.length;i<l;i++) {
			if(kids[i].name == name) { return kids[i]; }
		}
		return null;
	};

	/**
	 * Performs an array sort operation on the child list.
	 *
	 * <h4>Example: Display children with a higher y in front.</h4>
	 * 
	 *      var sortFunction = function(obj1, obj2, options) {
	 *          if (obj1.y > obj2.y) { return 1; }
	 *          if (obj1.y < obj2.y) { return -1; }
	 *          return 0;
	 *      }
	 *      container.sortChildren(sortFunction);
	 *
	 * @method sortChildren
	 * @param {Function} sortFunction the function to use to sort the child list. See JavaScript's <code>Array.sort</code>
	 * documentation for details.
	 **/
	p.sortChildren = function(sortFunction) {
		this.children.sort(sortFunction);
	};

	/**
	 * Returns the index of the specified child in the display list, or -1 if it is not in the display list.
	 *
	 * <h4>Example</h4>
	 *
	 *      var index = container.getChildIndex(child);
	 *
	 * @method getChildIndex
	 * @param {DisplayObject} child The child to return the index of.
	 * @return {Number} The index of the specified child. -1 if the child is not found.
	 **/
	p.getChildIndex = function(child) {
		return createjs.indexOf(this.children, child);
	};
	
	/**
	 * Swaps the children at the specified indexes. Fails silently if either index is out of range.
	 * @method swapChildrenAt
	 * @param {Number} index1
	 * @param {Number} index2
	 **/
	p.swapChildrenAt = function(index1, index2) {
		var kids = this.children;
		var o1 = kids[index1];
		var o2 = kids[index2];
		if (!o1 || !o2) { return; }
		kids[index1] = o2;
		kids[index2] = o1;
	};
	
	/**
	 * Swaps the specified children's depth in the display list. Fails silently if either child is not a child of this
	 * Container.
	 * @method swapChildren
	 * @param {DisplayObject} child1
	 * @param {DisplayObject} child2
	 **/
	p.swapChildren = function(child1, child2) {
		var kids = this.children;
		var index1,index2;
		for (var i=0,l=kids.length;i<l;i++) {
			if (kids[i] == child1) { index1 = i; }
			if (kids[i] == child2) { index2 = i; }
			if (index1 != null && index2 != null) { break; }
		}
		if (i==l) { return; } // TODO: throw error?
		kids[index1] = child2;
		kids[index2] = child1;
	};
	
	/**
	 * Changes the depth of the specified child. Fails silently if the child is not a child of this container, or the index is out of range.
	 * @param {DisplayObject} child
	 * @param {Number} index  
	 * @method setChildIndex
	 **/
	p.setChildIndex = function(child, index) {
		var kids = this.children, l=kids.length;
		if (child.parent != this || index < 0 || index >= l) { return; }
		for (var i=0;i<l;i++) {
			if (kids[i] == child) { break; }
		}
		if (i==l || i == index) { return; }
		kids.splice(i,1);
		kids.splice(index,0,child);
	};

	/**
	 * Returns true if the specified display object either is this container or is a descendent (child, grandchild, etc)
	 * of this container.
	 * @method contains
	 * @param {DisplayObject} child The DisplayObject to be checked.
	 * @return {Boolean} true if the specified display object either is this container or is a descendent.
	 **/
	p.contains = function(child) {
		while (child) {
			if (child == this) { return true; }
			child = child.parent;
		}
		return false;
	};

	/**
	 * Tests whether the display object intersects the specified local point (ie. draws a pixel with alpha > 0 at the
	 * specified position). This ignores the alpha, shadow and compositeOperation of the display object, and all
	 * transform properties including regX/Y.
	 * @method hitTest
	 * @param {Number} x The x position to check in the display object's local coordinates.
	 * @param {Number} y The y position to check in the display object's local coordinates.
	 * @return {Boolean} A Boolean indicating whether there is a visible section of a DisplayObject that overlaps the specified
	 * coordinates.
	 **/
	p.hitTest = function(x, y) {
		// TODO: optimize to use the fast cache check where possible.
		return (this.getObjectUnderPoint(x, y) != null);
	};

	/**
	 * Returns an array of all display objects under the specified coordinates that are in this container's display
	 * list. This routine ignores any display objects with {{#crossLink "DisplayObject/mouseEnabled:property"}}{{/crossLink}}
	 * set to `false`. The array will be sorted in order of visual depth, with the top-most display object at index 0.
	 * This uses shape based hit detection, and can be an expensive operation to run, so it is best to use it carefully.
	 * For example, if testing for objects under the mouse, test on tick (instead of on {{#crossLink "DisplayObject/mousemove:event"}}{{/crossLink}}),
	 * and only if the mouse's position has changed.
	 * 
	 * <ul>
	 *     <li>By default (mode=0) this method evaluates all display objects.</li>
	 *     <li>By setting the `mode` parameter to `1`, the {{#crossLink "DisplayObject/mouseEnabled:property"}}{{/crossLink}}
	 * 		and {{#crossLink "mouseChildren:property"}}{{/crossLink}} properties will be respected.</li>
	 * 	   <li>Setting the `mode` to `2` additionally excludes display objects that do not have active mouse event
	 * 	   	listeners or a {{#crossLink "DisplayObject:cursor:property"}}{{/crossLink}} property. That is, only objects
	 * 	   	that would normally intercept mouse interaction will be included. This can significantly improve performance
	 * 	   	in some cases by reducing the number of display objects that need to be tested.</li>
	 * </li>
	 * 
	 * This method accounts for both {{#crossLink "DisplayObject/hitArea:property"}}{{/crossLink}} and {{#crossLink "DisplayObject/mask:property"}}{{/crossLink}}.
	 * @method getObjectsUnderPoint
	 * @param {Number} x The x position in the container to test.
	 * @param {Number} y The y position in the container to test.
	 * @param {Number} [mode=0] The mode to use to determine which display objects to include. 0-all, 1-respect mouseEnabled/mouseChildren, 2-only mouse opaque objects.
	 * @return {Array} An Array of DisplayObjects under the specified coordinates.
	 **/
	p.getObjectsUnderPoint = function(x, y, mode) {
		var arr = [];
		var pt = this.localToGlobal(x, y);
		this._getObjectsUnderPoint(pt.x, pt.y, arr, mode>0, mode==1);
		return arr;
	};

	/**
	 * Similar to {{#crossLink "Container/getObjectsUnderPoint"}}{{/crossLink}}, but returns only the top-most display
	 * object. This runs significantly faster than <code>getObjectsUnderPoint()</code>, but is still potentially an expensive
	 * operation. See {{#crossLink "Container/getObjectsUnderPoint"}}{{/crossLink}} for more information.
	 * @method getObjectUnderPoint
	 * @param {Number} x The x position in the container to test.
	 * @param {Number} y The y position in the container to test.
	 * @param {Number} mode The mode to use to determine which display objects to include.  0-all, 1-respect mouseEnabled/mouseChildren, 2-only mouse opaque objects.
	 * @return {DisplayObject} The top-most display object under the specified coordinates.
	 **/
	p.getObjectUnderPoint = function(x, y, mode) {
		var pt = this.localToGlobal(x, y);
		return this._getObjectsUnderPoint(pt.x, pt.y, null, mode>0, mode==1);
	};
	
	/**
	 * Docced in superclass.
	 */
	p.getBounds = function() {
		return this._getBounds(null, true);
	};
	
	
	/**
	 * Docced in superclass.
	 */
	p.getTransformedBounds = function() {
		return this._getBounds();
	};

	/**
	 * Returns a clone of this Container. Some properties that are specific to this instance's current context are
	 * reverted to their defaults (for example .parent).
	 * @method clone
	 * @param {Boolean} [recursive=false] If true, all of the descendants of this container will be cloned recursively. If false, the
	 * properties of the container will be cloned, but the new instance will not have any children.
	 * @return {Container} A clone of the current Container instance.
	 **/
	p.clone = function(recursive) {
		var o = this._cloneProps(new Container());
		if (recursive) { this._cloneChildren(o); }
		return o;
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Container (name="+  this.name +")]";
	};


// private methods:
	/**
	 * @method _tick
	 * @param {Object} evtObj An event object that will be dispatched to all tick listeners. This object is reused between dispatchers to reduce construction & GC costs.
	 * @protected
	 **/
	p._tick = function(evtObj) {
		if (this.tickChildren) {
			for (var i=this.children.length-1; i>=0; i--) {
				var child = this.children[i];
				if (child.tickEnabled && child._tick) { child._tick(evtObj); }
			}
		}
		this.DisplayObject__tick(evtObj);
	};
	
	/**
	 * Recursively clones all children of this container, and adds them to the target container.
	 * @method cloneChildren
	 * @protected
	 * @param {Container} o The target container.
	 **/
	p._cloneChildren = function(o) {
		if (o.children.length) { o.removeAllChildren(); }
		var arr = o.children;
		for (var i=0, l=this.children.length; i<l; i++) {
			var clone = this.children[i].clone(true);
			clone.parent = o;
			arr.push(clone);
		}
	};

	/**
	 * @method _getObjectsUnderPoint
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Array} arr
	 * @param {Boolean} mouse If true, it will respect mouse interaction properties like mouseEnabled, mouseChildren, and active listeners.
	 * @param {Boolean} activeListener If true, there is an active mouse event listener on a parent object.
	 * @param {Number} currentDepth Indicates the current depth of the search.
	 * @return {DisplayObject}
	 * @protected
	 **/
	p._getObjectsUnderPoint = function(x, y, arr, mouse, activeListener, currentDepth) {
		currentDepth = currentDepth || 0;
		if (!currentDepth && !this._testMask(this, x, y)) { return null; }
		var mtx, ctx = createjs.DisplayObject._hitTestContext;
		activeListener = activeListener || (mouse&&this._hasMouseEventListener());

		// draw children one at a time, and check if we get a hit:
		var children = this.children, l = children.length;
		for (var i=l-1; i>=0; i--) {
			var child = children[i];
			var hitArea = child.hitArea;
			if (!child.visible || (!hitArea && !child.isVisible()) || (mouse && !child.mouseEnabled)) { continue; }
			if (!hitArea && !this._testMask(child, x, y)) { continue; }
			
			// if a child container has a hitArea then we only need to check its hitArea, so we can treat it as a normal DO:
			if (!hitArea && child instanceof Container) {
				var result = child._getObjectsUnderPoint(x, y, arr, mouse, activeListener, currentDepth+1);
				if (!arr && result) { return (mouse && !this.mouseChildren) ? this : result; }
			} else {
				if (mouse && !activeListener && !child._hasMouseEventListener()) { continue; }
				
				// TODO: can we pass displayProps forward, to avoid having to calculate this backwards every time? It's kind of a mixed bag. When we're only hunting for DOs with event listeners, it may not make sense.
				var props = child.getConcatenatedDisplayProps(child._props);
				mtx = props.matrix;
				
				if (hitArea) {
					mtx.appendMatrix(hitArea.getMatrix(hitArea._props.matrix));
					props.alpha = hitArea.alpha;
				}
				
				ctx.globalAlpha = props.alpha;
				ctx.setTransform(mtx.a,  mtx.b, mtx.c, mtx.d, mtx.tx-x, mtx.ty-y);
				(hitArea||child).draw(ctx);
				if (!this._testHit(ctx)) { continue; }
				ctx.setTransform(1, 0, 0, 1, 0, 0);
				ctx.clearRect(0, 0, 2, 2);
				if (arr) { arr.push(child); }
				else { return (mouse && !this.mouseChildren) ? this : child; }
			}
		}
		return null;
	};
	
	/**
	 * @method _testMask
	 * @param {DisplayObject} target
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Boolean} Indicates whether the x/y is within the masked region.
	 * @protected
	 **/
	p._testMask = function(target, x, y) {
		var mask = target.mask;
		if (!mask || !mask.graphics || mask.graphics.isEmpty()) { return true; }
		
		var mtx = this._props.matrix, parent = target.parent;
		mtx = parent ? parent.getConcatenatedMatrix(mtx) : mtx.identity();
		mtx = mask.getMatrix(mask._props.matrix).prependMatrix(mtx);
		
		var ctx = createjs.DisplayObject._hitTestContext;
		ctx.setTransform(mtx.a,  mtx.b, mtx.c, mtx.d, mtx.tx-x, mtx.ty-y);
		
		// draw the mask as a solid fill:
		mask.graphics.drawAsPath(ctx);
		ctx.fillStyle = "#000";
		ctx.fill();
		
		if (!this._testHit(ctx)) { return false; }
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, 2, 2);
		
		return true;
	};
	
	/**
	 * @method _getBounds
	 * @param {Matrix2D} matrix
	 * @param {Boolean} ignoreTransform If true, does not apply this object's transform.
	 * @return {Rectangle}
	 * @protected
	 **/
	p._getBounds = function(matrix, ignoreTransform) {
		var bounds = this.DisplayObject_getBounds();
		if (bounds) { return this._transformBounds(bounds, matrix, ignoreTransform); }
		
		var mtx = this._props.matrix;
		mtx = ignoreTransform ? mtx.identity() : this.getMatrix(mtx);
		if (matrix) { mtx.prependMatrix(matrix); }
		
		var l = this.children.length, rect=null;
		for (var i=0; i<l; i++) {
			var child = this.children[i];
			if (!child.visible || !(bounds = child._getBounds(mtx))) { continue; }
			if (rect) { rect.extend(bounds.x, bounds.y, bounds.width, bounds.height); }
			else { rect = bounds.clone(); }
		}
		return rect;
	};


	createjs.Container = createjs.promote(Container, "DisplayObject");
}());

//##############################################################################
// Stage.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * A stage is the root level {{#crossLink "Container"}}{{/crossLink}} for a display list. Each time its {{#crossLink "Stage/tick"}}{{/crossLink}}
	 * method is called, it will render its display list to its target canvas.
	 *
	 * <h4>Example</h4>
	 * This example creates a stage, adds a child to it, then uses {{#crossLink "Ticker"}}{{/crossLink}} to update the child
	 * and redraw the stage using {{#crossLink "Stage/update"}}{{/crossLink}}.
	 *
	 *      var stage = new createjs.Stage("canvasElementId");
	 *      var image = new createjs.Bitmap("imagePath.png");
	 *      stage.addChild(image);
	 *      createjs.Ticker.addEventListener("tick", handleTick);
	 *      function handleTick(event) {
	 *          image.x += 10;
	 *          stage.update();
	 *      }
	 *
	 * @class Stage
	 * @extends Container
	 * @constructor
	 * @param {HTMLCanvasElement | String | Object} canvas A canvas object that the Stage will render to, or the string id
	 * of a canvas object in the current document.
	 **/
	function Stage(canvas) {
		this.Container_constructor();
	
	
	// public properties:
		/**
		 * Indicates whether the stage should automatically clear the canvas before each render. You can set this to <code>false</code>
		 * to manually control clearing (for generative art, or when pointing multiple stages at the same canvas for
		 * example).
		 *
		 * <h4>Example</h4>
		 *
		 *      var stage = new createjs.Stage("canvasId");
		 *      stage.autoClear = false;
		 *
		 * @property autoClear
		 * @type Boolean
		 * @default true
		 **/
		this.autoClear = true;
	
		/**
		 * The canvas the stage will render to. Multiple stages can share a single canvas, but you must disable autoClear for all but the
		 * first stage that will be ticked (or they will clear each other's render).
		 *
		 * When changing the canvas property you must disable the events on the old canvas, and enable events on the
		 * new canvas or mouse events will not work as expected. For example:
		 *
		 *      myStage.enableDOMEvents(false);
		 *      myStage.canvas = anotherCanvas;
		 *      myStage.enableDOMEvents(true);
		 *
		 * @property canvas
		 * @type HTMLCanvasElement | Object
		 **/
		this.canvas = (typeof canvas == "string") ? document.getElementById(canvas) : canvas;
	
		/**
		 * The current mouse X position on the canvas. If the mouse leaves the canvas, this will indicate the most recent
		 * position over the canvas, and mouseInBounds will be set to false.
		 * @property mouseX
		 * @type Number
		 * @readonly
		 **/
		this.mouseX = 0;
	
		/**
		 * The current mouse Y position on the canvas. If the mouse leaves the canvas, this will indicate the most recent
		 * position over the canvas, and mouseInBounds will be set to false.
		 * @property mouseY
		 * @type Number
		 * @readonly
		 **/
		this.mouseY = 0;
	
		/**
		 * Specifies the area of the stage to affect when calling update. This can be use to selectively
		 * re-draw specific regions of the canvas. If null, the whole canvas area is drawn.
		 * @property drawRect
		 * @type {Rectangle}
		 */
		this.drawRect = null;
	
		/**
		 * Indicates whether display objects should be rendered on whole pixels. You can set the
		 * {{#crossLink "DisplayObject/snapToPixel"}}{{/crossLink}} property of
		 * display objects to false to enable/disable this behaviour on a per instance basis.
		 * @property snapToPixelEnabled
		 * @type Boolean
		 * @default false
		 **/
		this.snapToPixelEnabled = false;
	
		/**
		 * Indicates whether the mouse is currently within the bounds of the canvas.
		 * @property mouseInBounds
		 * @type Boolean
		 * @default false
		 **/
		this.mouseInBounds = false;
	
		/**
		 * If true, tick callbacks will be called on all display objects on the stage prior to rendering to the canvas.
		 * @property tickOnUpdate
		 * @type Boolean
		 * @default true
		 **/
		this.tickOnUpdate = true;
	
		/**
		 * If true, mouse move events will continue to be called when the mouse leaves the target canvas. See
		 * {{#crossLink "Stage/mouseInBounds:property"}}{{/crossLink}}, and {{#crossLink "MouseEvent"}}{{/crossLink}}
		 * x/y/rawX/rawY.
		 * @property mouseMoveOutside
		 * @type Boolean
		 * @default false
		 **/
		this.mouseMoveOutside = false;
		
		
		/**
		 * Prevents selection of other elements in the html page if the user clicks and drags, or double clicks on the canvas.
		 * This works by calling `preventDefault()` on any mousedown events (or touch equivalent) originating on the canvas.
		 * @property preventSelection
		 * @type Boolean
		 * @default true
		 **/
		this.preventSelection = true;
	
		/**
		 * The hitArea property is not supported for Stage.
		 * @property hitArea
		 * @type {DisplayObject}
		 * @default null
		 */
		 
		 
	// private properties:
		/**
		 * Holds objects with data for each active pointer id. Each object has the following properties:
		 * x, y, event, target, overTarget, overX, overY, inBounds, posEvtObj (native event that last updated position)
		 * @property _pointerData
		 * @type {Object}
		 * @private
		 */
		this._pointerData = {};
	
		/**
		 * Number of active pointers.
		 * @property _pointerCount
		 * @type {Object}
		 * @private
		 */
		this._pointerCount = 0;
	
		/**
		 * The ID of the primary pointer.
		 * @property _primaryPointerID
		 * @type {Object}
		 * @private
		 */
		this._primaryPointerID = null;
	
		/**
		 * @property _mouseOverIntervalID
		 * @protected
		 * @type Number
		 **/
		this._mouseOverIntervalID = null;
		
		/**
		 * @property _nextStage
		 * @protected
		 * @type Stage
		 **/
		this._nextStage = null;
		
		/**
		 * @property _prevStage
		 * @protected
		 * @type Stage
		 **/
		this._prevStage = null;
		
		
	// initialize:
		this.enableDOMEvents(true);
	}
	var p = createjs.extend(Stage, createjs.Container);

	/**
	 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
	 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
	 * for details.
	 *
	 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
	 *
	 * @method initialize
	 * @protected
	 * @deprecated
	 */
	// p.initialize = function() {}; // searchable for devs wondering where it is.


// events:
	/**
	 * Dispatched when the user moves the mouse over the canvas.
	 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
	 * @event stagemousemove
	 * @since 0.6.0
	 */

	/**
	 * Dispatched when the user presses their left mouse button on the canvas. See the {{#crossLink "MouseEvent"}}{{/crossLink}}
	 * class for a listing of event properties.
	 * @event stagemousedown
	 * @since 0.6.0
	 */

	/**
	 * Dispatched when the user the user presses somewhere on the stage, then releases the mouse button anywhere that the page can detect it (this varies slightly between browsers).
	 * You can use {{#crossLink "Stage/mouseInBounds:property"}}{{/crossLink}} to check whether the mouse is currently within the stage bounds.
	 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
	 * @event stagemouseup
	 * @since 0.6.0
	 */

	/**
	 * Dispatched when the mouse moves from within the canvas area (mouseInBounds == true) to outside it (mouseInBounds == false).
	 * This is currently only dispatched for mouse input (not touch). See the {{#crossLink "MouseEvent"}}{{/crossLink}}
	 * class for a listing of event properties.
	 * @event mouseleave
	 * @since 0.7.0
	 */

	/**
	 * Dispatched when the mouse moves into the canvas area (mouseInBounds == false) from outside it (mouseInBounds == true).
	 * This is currently only dispatched for mouse input (not touch). See the {{#crossLink "MouseEvent"}}{{/crossLink}}
	 * class for a listing of event properties.
	 * @event mouseenter
	 * @since 0.7.0
	 */
	 
	/**
	 * Dispatched each update immediately before the tick event is propagated through the display list.
	 * You can call preventDefault on the event object to cancel propagating the tick event.
	 * @event tickstart
	 * @since 0.7.0
	 */
	 
	/**
	 * Dispatched each update immediately after the tick event is propagated through the display list. Does not fire if
	 * tickOnUpdate is false. Precedes the "drawstart" event.
	 * @event tickend
	 * @since 0.7.0
	 */
	 
	/**
	 * Dispatched each update immediately before the canvas is cleared and the display list is drawn to it.
	 * You can call preventDefault on the event object to cancel the draw.
	 * @event drawstart
	 * @since 0.7.0
	 */
	 
	/**
	 * Dispatched each update immediately after the display list is drawn to the canvas and the canvas context is restored.
	 * @event drawend
	 * @since 0.7.0
	 */

	 
// getter / setters:
	/**
	 * Specifies a target stage that will have mouse / touch interactions relayed to it after this stage handles them.
	 * This can be useful in cases where you have multiple layered canvases and want user interactions
	 * events to pass through. For example, this would relay mouse events from topStage to bottomStage:
	 *
	 *      topStage.nextStage = bottomStage;
	 *
	 * To disable relaying, set nextStage to null.
	 * 
	 * MouseOver, MouseOut, RollOver, and RollOut interactions are also passed through using the mouse over settings
	 * of the top-most stage, but are only processed if the target stage has mouse over interactions enabled.
	 * Considerations when using roll over in relay targets:<OL>
	 * <LI> The top-most (first) stage must have mouse over interactions enabled (via enableMouseOver)</LI>
	 * <LI> All stages that wish to participate in mouse over interaction must enable them via enableMouseOver</LI>
	 * <LI> All relay targets will share the frequency value of the top-most stage</LI>
	 * </OL>
	 * To illustrate, in this example the targetStage would process mouse over interactions at 10hz (despite passing
	 * 30 as it's desired frequency):
	 * 	topStage.nextStage = targetStage;
	 * 	topStage.enableMouseOver(10);
	 * 	targetStage.enableMouseOver(30);
	 * 
	 * If the target stage's canvas is completely covered by this stage's canvas, you may also want to disable its
	 * DOM events using:
	 * 
	 *	targetStage.enableDOMEvents(false);
	 * 
	 * @property nextStage
	 * @type {Stage}
	 **/
	p._get_nextStage = function() {
		return this._nextStage;
	};
	p._set_nextStage = function(value) {
		if (this._nextStage) { this._nextStage._prevStage = null; }
		if (value) { value._prevStage = this; }
		this._nextStage = value;
	};
	
	try {
		Object.defineProperties(p, {
			nextStage: { get: p._get_nextStage, set: p._set_nextStage }
		});
	} catch (e) {} // TODO: use Log


// public methods:
	/**
	 * Each time the update method is called, the stage will call {{#crossLink "Stage/tick"}}{{/crossLink}}
	 * unless {{#crossLink "Stage/tickOnUpdate:property"}}{{/crossLink}} is set to false,
	 * and then render the display list to the canvas.
	 *
	 * @method update
	 * @param {Object} [props] Props object to pass to `tick()`. Should usually be a {{#crossLink "Ticker"}}{{/crossLink}} event object, or similar object with a delta property.
	 **/
	p.update = function(props) {
		if (!this.canvas) { return; }
		if (this.tickOnUpdate) { this.tick(props); }
		if (this.dispatchEvent("drawstart", false, true) === false) { return; }
		createjs.DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled;
		var r = this.drawRect, ctx = this.canvas.getContext("2d");
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		if (this.autoClear) {
			if (r) { ctx.clearRect(r.x, r.y, r.width, r.height); }
			else { ctx.clearRect(0, 0, this.canvas.width+1, this.canvas.height+1); }
		}
		ctx.save();
		if (this.drawRect) {
			ctx.beginPath();
			ctx.rect(r.x, r.y, r.width, r.height);
			ctx.clip();
		}
		this.updateContext(ctx);
		this.draw(ctx, false);
		ctx.restore();
		this.dispatchEvent("drawend");
	};
	
	/**
	 * Propagates a tick event through the display list. This is automatically called by {{#crossLink "Stage/update"}}{{/crossLink}}
	 * unless {{#crossLink "Stage/tickOnUpdate:property"}}{{/crossLink}} is set to false.
	 *
	 * If a props object is passed to `tick()`, then all of its properties will be copied to the event object that is
	 * propagated to listeners.
	 *
	 * Some time-based features in EaselJS (for example {{#crossLink "Sprite/framerate"}}{{/crossLink}} require that
	 * a {{#crossLink "Ticker/tick:event"}}{{/crossLink}} event object (or equivalent object with a delta property) be
	 * passed as the `props` parameter to `tick()`. For example:
	 *
	 * 	Ticker.on("tick", handleTick);
	 * 	function handleTick(evtObj) {
	 * 		// clone the event object from Ticker, and add some custom data to it:
	 * 		var evt = evtObj.clone().set({greeting:"hello", name:"world"});
	 * 		
	 * 		// pass it to stage.update():
	 * 		myStage.update(evt); // subsequently calls tick() with the same param
	 * 	}
	 * 	
	 * 	// ...
	 * 	myDisplayObject.on("tick", handleDisplayObjectTick);
	 * 	function handleDisplayObjectTick(evt) {
	 * 		console.log(evt.delta); // the delta property from the Ticker tick event object
	 * 		console.log(evt.greeting, evt.name); // custom data: "hello world"
	 * 	}
	 * 
	 * @method tick
	 * @param {Object} [props] An object with properties that should be copied to the event object. Should usually be a Ticker event object, or similar object with a delta property.
	 **/
	p.tick = function(props) {
		if (!this.tickEnabled || this.dispatchEvent("tickstart", false, true) === false) { return; }
		var evtObj = new createjs.Event("tick");
		if (props) {
			for (var n in props) {
				if (props.hasOwnProperty(n)) { evtObj[n] = props[n]; }
			}
		}
		this._tick(evtObj);
		this.dispatchEvent("tickend");
	};

	/**
	 * Default event handler that calls the Stage {{#crossLink "Stage/update"}}{{/crossLink}} method when a {{#crossLink "DisplayObject/tick:event"}}{{/crossLink}}
	 * event is received. This allows you to register a Stage instance as a event listener on {{#crossLink "Ticker"}}{{/crossLink}}
	 * directly, using:
	 *
	 *      Ticker.addEventListener("tick", myStage");
	 *
	 * Note that if you subscribe to ticks using this pattern, then the tick event object will be passed through to
	 * display object tick handlers, instead of <code>delta</code> and <code>paused</code> parameters.
	 * @property handleEvent
	 * @type Function
	 **/
	p.handleEvent = function(evt) {
		if (evt.type == "tick") { this.update(evt); }
	};

	/**
	 * Clears the target canvas. Useful if {{#crossLink "Stage/autoClear:property"}}{{/crossLink}} is set to `false`.
	 * @method clear
	 **/
	p.clear = function() {
		if (!this.canvas) { return; }
		var ctx = this.canvas.getContext("2d");
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, this.canvas.width+1, this.canvas.height+1);
	};

	/**
	 * Returns a data url that contains a Base64-encoded image of the contents of the stage. The returned data url can
	 * be specified as the src value of an image element.
	 * @method toDataURL
	 * @param {String} [backgroundColor] The background color to be used for the generated image. Any valid CSS color
	 * value is allowed. The default value is a transparent background.
	 * @param {String} [mimeType="image/png"] The MIME type of the image format to be create. The default is "image/png". If an unknown MIME type
	 * is passed in, or if the browser does not support the specified MIME type, the default value will be used.
	 * @return {String} a Base64 encoded image.
	 **/
	p.toDataURL = function(backgroundColor, mimeType) {
		var data, ctx = this.canvas.getContext('2d'), w = this.canvas.width, h = this.canvas.height;

		if (backgroundColor) {
			data = ctx.getImageData(0, 0, w, h);
			var compositeOperation = ctx.globalCompositeOperation;
			ctx.globalCompositeOperation = "destination-over";
			
			ctx.fillStyle = backgroundColor;
			ctx.fillRect(0, 0, w, h);
		}

		var dataURL = this.canvas.toDataURL(mimeType||"image/png");

		if(backgroundColor) {
			ctx.putImageData(data, 0, 0);
			ctx.globalCompositeOperation = compositeOperation;
		}

		return dataURL;
	};

	/**
	 * Enables or disables (by passing a frequency of 0) mouse over ({{#crossLink "DisplayObject/mouseover:event"}}{{/crossLink}}
	 * and {{#crossLink "DisplayObject/mouseout:event"}}{{/crossLink}}) and roll over events ({{#crossLink "DisplayObject/rollover:event"}}{{/crossLink}}
	 * and {{#crossLink "DisplayObject/rollout:event"}}{{/crossLink}}) for this stage's display list. These events can
	 * be expensive to generate, so they are disabled by default. The frequency of the events can be controlled
	 * independently of mouse move events via the optional `frequency` parameter.
	 *
	 * <h4>Example</h4>
	 *
	 *      var stage = new createjs.Stage("canvasId");
	 *      stage.enableMouseOver(10); // 10 updates per second
	 *
	 * @method enableMouseOver
	 * @param {Number} [frequency=20] Optional param specifying the maximum number of times per second to broadcast
	 * mouse over/out events. Set to 0 to disable mouse over events completely. Maximum is 50. A lower frequency is less
	 * responsive, but uses less CPU.
	 **/
	p.enableMouseOver = function(frequency) {
		if (this._mouseOverIntervalID) {
			clearInterval(this._mouseOverIntervalID);
			this._mouseOverIntervalID = null;
			if (frequency == 0) {
				this._testMouseOver(true);
			}
		}
		if (frequency == null) { frequency = 20; }
		else if (frequency <= 0) { return; }
		var o = this;
		this._mouseOverIntervalID = setInterval(function(){ o._testMouseOver(); }, 1000/Math.min(50,frequency));
	};

	/**
	 * Enables or disables the event listeners that stage adds to DOM elements (window, document and canvas). It is good
	 * practice to disable events when disposing of a Stage instance, otherwise the stage will continue to receive
	 * events from the page.
	 *
	 * When changing the canvas property you must disable the events on the old canvas, and enable events on the
	 * new canvas or mouse events will not work as expected. For example:
	 *
	 *      myStage.enableDOMEvents(false);
	 *      myStage.canvas = anotherCanvas;
	 *      myStage.enableDOMEvents(true);
	 *
	 * @method enableDOMEvents
	 * @param {Boolean} [enable=true] Indicates whether to enable or disable the events. Default is true.
	 **/
	p.enableDOMEvents = function(enable) {
		if (enable == null) { enable = true; }
		var n, o, ls = this._eventListeners;
		if (!enable && ls) {
			for (n in ls) {
				o = ls[n];
				o.t.removeEventListener(n, o.f, false);
			}
			this._eventListeners = null;
		} else if (enable && !ls && this.canvas) {
			var t = window.addEventListener ? window : document;
			var _this = this;
			ls = this._eventListeners = {};
			ls["mouseup"] = {t:t, f:function(e) { _this._handleMouseUp(e)} };
			ls["mousemove"] = {t:t, f:function(e) { _this._handleMouseMove(e)} };
			ls["dblclick"] = {t:this.canvas, f:function(e) { _this._handleDoubleClick(e)} };
			ls["mousedown"] = {t:this.canvas, f:function(e) { _this._handleMouseDown(e)} };

			for (n in ls) {
				o = ls[n];
				o.t.addEventListener(n, o.f, false);
			}
		}
	};

	/**
	 * Stage instances cannot be cloned.
	 * @method clone
	 **/
	p.clone = function() {
		throw("Stage cannot be cloned.");
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Stage (name="+  this.name +")]";
	};


// private methods:
	/**
	 * @method _getElementRect
	 * @protected
	 * @param {HTMLElement} e
	 **/
	p._getElementRect = function(e) {
		var bounds;
		try { bounds = e.getBoundingClientRect(); } // this can fail on disconnected DOM elements in IE9
		catch (err) { bounds = {top: e.offsetTop, left: e.offsetLeft, width:e.offsetWidth, height:e.offsetHeight}; }

		var offX = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0);
		var offY = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop  || document.body.clientTop  || 0);

		var styles = window.getComputedStyle ? getComputedStyle(e,null) : e.currentStyle; // IE <9 compatibility.
		var padL = parseInt(styles.paddingLeft)+parseInt(styles.borderLeftWidth);
		var padT = parseInt(styles.paddingTop)+parseInt(styles.borderTopWidth);
		var padR = parseInt(styles.paddingRight)+parseInt(styles.borderRightWidth);
		var padB = parseInt(styles.paddingBottom)+parseInt(styles.borderBottomWidth);

		// note: in some browsers bounds properties are read only.
		return {
			left: bounds.left+offX+padL,
			right: bounds.right+offX-padR,
			top: bounds.top+offY+padT,
			bottom: bounds.bottom+offY-padB
		}
	};

	/**
	 * @method _getPointerData
	 * @protected
	 * @param {Number} id
	 **/
	p._getPointerData = function(id) {
		var data = this._pointerData[id];
		if (!data) { data = this._pointerData[id] = {x:0,y:0}; }
		return data;
	};

	/**
	 * @method _handleMouseMove
	 * @protected
	 * @param {MouseEvent} e
	 **/
	p._handleMouseMove = function(e) {
		if(!e){ e = window.event; }
		this._handlePointerMove(-1, e, e.pageX, e.pageY);
	};

	/**
	 * @method _handlePointerMove
	 * @protected
	 * @param {Number} id
	 * @param {Event} e
	 * @param {Number} pageX
	 * @param {Number} pageY
	 * @param {Stage} owner Indicates that the event has already been captured & handled by the indicated stage.
	 **/
	p._handlePointerMove = function(id, e, pageX, pageY, owner) {
		if (this._prevStage && owner === undefined) { return; } // redundant listener.
		if (!this.canvas) { return; }
		var nextStage=this._nextStage, o=this._getPointerData(id);

		var inBounds = o.inBounds;
		this._updatePointerPosition(id, e, pageX, pageY);
		if (inBounds || o.inBounds || this.mouseMoveOutside) {
			if (id === -1 && o.inBounds == !inBounds) {
				this._dispatchMouseEvent(this, (inBounds ? "mouseleave" : "mouseenter"), false, id, o, e);
			}
			
			this._dispatchMouseEvent(this, "stagemousemove", false, id, o, e);
			this._dispatchMouseEvent(o.target, "pressmove", true, id, o, e);
		}
		
		nextStage&&nextStage._handlePointerMove(id, e, pageX, pageY, null);
	};

	/**
	 * @method _updatePointerPosition
	 * @protected
	 * @param {Number} id
	 * @param {Event} e
	 * @param {Number} pageX
	 * @param {Number} pageY
	 **/
	p._updatePointerPosition = function(id, e, pageX, pageY) {
		var rect = this._getElementRect(this.canvas);
		pageX -= rect.left;
		pageY -= rect.top;

		var w = this.canvas.width;
		var h = this.canvas.height;
		pageX /= (rect.right-rect.left)/w;
		pageY /= (rect.bottom-rect.top)/h;
		var o = this._getPointerData(id);
		if (o.inBounds = (pageX >= 0 && pageY >= 0 && pageX <= w-1 && pageY <= h-1)) {
			o.x = pageX;
			o.y = pageY;
		} else if (this.mouseMoveOutside) {
			o.x = pageX < 0 ? 0 : (pageX > w-1 ? w-1 : pageX);
			o.y = pageY < 0 ? 0 : (pageY > h-1 ? h-1 : pageY);
		}

		o.posEvtObj = e;
		o.rawX = pageX;
		o.rawY = pageY;

		if (id === this._primaryPointerID || id === -1) {
			this.mouseX = o.x;
			this.mouseY = o.y;
			this.mouseInBounds = o.inBounds;
		}
	};

	/**
	 * @method _handleMouseUp
	 * @protected
	 * @param {MouseEvent} e
	 **/
	p._handleMouseUp = function(e) {
		this._handlePointerUp(-1, e, false);
	};

	/**
	 * @method _handlePointerUp
	 * @protected
	 * @param {Number} id
	 * @param {Event} e
	 * @param {Boolean} clear
	 * @param {Stage} owner Indicates that the event has already been captured & handled by the indicated stage.
	 **/
	p._handlePointerUp = function(id, e, clear, owner) {
		var nextStage = this._nextStage, o = this._getPointerData(id);
		if (this._prevStage && owner === undefined) { return; } // redundant listener.
		
		var target=null, oTarget = o.target;
		if (!owner && (oTarget || nextStage)) { target = this._getObjectsUnderPoint(o.x, o.y, null, true); }
		
		if (o.down) { this._dispatchMouseEvent(this, "stagemouseup", false, id, o, e, target); o.down = false; }
		
		if (target == oTarget) { this._dispatchMouseEvent(oTarget, "click", true, id, o, e); }
		this._dispatchMouseEvent(oTarget, "pressup", true, id, o, e);
		
		if (clear) {
			if (id==this._primaryPointerID) { this._primaryPointerID = null; }
			delete(this._pointerData[id]);
		} else { o.target = null; }
		
		nextStage&&nextStage._handlePointerUp(id, e, clear, owner || target && this);
	};

	/**
	 * @method _handleMouseDown
	 * @protected
	 * @param {MouseEvent} e
	 **/
	p._handleMouseDown = function(e) {
		this._handlePointerDown(-1, e, e.pageX, e.pageY);
	};

	/**
	 * @method _handlePointerDown
	 * @protected
	 * @param {Number} id
	 * @param {Event} e
	 * @param {Number} pageX
	 * @param {Number} pageY
	 * @param {Stage} owner Indicates that the event has already been captured & handled by the indicated stage.
	 **/
	p._handlePointerDown = function(id, e, pageX, pageY, owner) {
		if (this.preventSelection) { e.preventDefault(); }
		if (this._primaryPointerID == null || id === -1) { this._primaryPointerID = id; } // mouse always takes over.
		
		if (pageY != null) { this._updatePointerPosition(id, e, pageX, pageY); }
		var target = null, nextStage = this._nextStage, o = this._getPointerData(id);
		if (!owner) { target = o.target = this._getObjectsUnderPoint(o.x, o.y, null, true); }

		if (o.inBounds) { this._dispatchMouseEvent(this, "stagemousedown", false, id, o, e, target); o.down = true; }
		this._dispatchMouseEvent(target, "mousedown", true, id, o, e);
		
		nextStage&&nextStage._handlePointerDown(id, e, pageX, pageY, owner || target && this);
	};

	/**
	 * @method _testMouseOver
	 * @param {Boolean} clear If true, clears the mouseover / rollover (ie. no target)
	 * @param {Stage} owner Indicates that the event has already been captured & handled by the indicated stage.
	 * @param {Stage} eventTarget The stage that the cursor is actively over.
	 * @protected
	 **/
	p._testMouseOver = function(clear, owner, eventTarget) {
		if (this._prevStage && owner === undefined) { return; } // redundant listener.
		
		var nextStage = this._nextStage;
		if (!this._mouseOverIntervalID) {
			// not enabled for mouseover, but should still relay the event.
			nextStage&&nextStage._testMouseOver(clear, owner, eventTarget);
			return;
		}
		var o = this._getPointerData(-1);
		// only update if the mouse position has changed. This provides a lot of optimization, but has some trade-offs.
		if (!o || (!clear && this.mouseX == this._mouseOverX && this.mouseY == this._mouseOverY && this.mouseInBounds)) { return; }
		
		var e = o.posEvtObj;
		var isEventTarget = eventTarget || e&&(e.target == this.canvas);
		var target=null, common = -1, cursor="", t, i, l;
		
		if (!owner && (clear || this.mouseInBounds && isEventTarget)) {
			target = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, true);
			this._mouseOverX = this.mouseX;
			this._mouseOverY = this.mouseY;
		}

		var oldList = this._mouseOverTarget||[];
		var oldTarget = oldList[oldList.length-1];
		var list = this._mouseOverTarget = [];

		// generate ancestor list and check for cursor:
		t = target;
		while (t) {
			list.unshift(t);
			if (!cursor) { cursor = t.cursor; }
			t = t.parent;
		}
		this.canvas.style.cursor = cursor;
		if (!owner && eventTarget) { eventTarget.canvas.style.cursor = cursor; }

		// find common ancestor:
		for (i=0,l=list.length; i<l; i++) {
			if (list[i] != oldList[i]) { break; }
			common = i;
		}

		if (oldTarget != target) {
			this._dispatchMouseEvent(oldTarget, "mouseout", true, -1, o, e, target);
		}

		for (i=oldList.length-1; i>common; i--) {
			this._dispatchMouseEvent(oldList[i], "rollout", false, -1, o, e, target);
		}

		for (i=list.length-1; i>common; i--) {
			this._dispatchMouseEvent(list[i], "rollover", false, -1, o, e, oldTarget);
		}

		if (oldTarget != target) {
			this._dispatchMouseEvent(target, "mouseover", true, -1, o, e, oldTarget);
		}
		
		nextStage&&nextStage._testMouseOver(clear, owner || target && this, eventTarget || isEventTarget && this);
	};

	/**
	 * @method _handleDoubleClick
	 * @protected
	 * @param {MouseEvent} e
	 * @param {Stage} owner Indicates that the event has already been captured & handled by the indicated stage.
	 **/
	p._handleDoubleClick = function(e, owner) {
		var target=null, nextStage=this._nextStage, o=this._getPointerData(-1);
		if (!owner) {
			target = this._getObjectsUnderPoint(o.x, o.y, null, true);
			this._dispatchMouseEvent(target, "dblclick", true, -1, o, e);
		}
		nextStage&&nextStage._handleDoubleClick(e, owner || target && this);
	};

	/**
	 * @method _dispatchMouseEvent
	 * @protected
	 * @param {DisplayObject} target
	 * @param {String} type
	 * @param {Boolean} bubbles
	 * @param {Number} pointerId
	 * @param {Object} o
	 * @param {MouseEvent} [nativeEvent]
	 * @param {DisplayObject} [relatedTarget]
	 **/
	p._dispatchMouseEvent = function(target, type, bubbles, pointerId, o, nativeEvent, relatedTarget) {
		// TODO: might be worth either reusing MouseEvent instances, or adding a willTrigger method to avoid GC.
		if (!target || (!bubbles && !target.hasEventListener(type))) { return; }
		/*
		// TODO: account for stage transformations?
		this._mtx = this.getConcatenatedMatrix(this._mtx).invert();
		var pt = this._mtx.transformPoint(o.x, o.y);
		var evt = new createjs.MouseEvent(type, bubbles, false, pt.x, pt.y, nativeEvent, pointerId, pointerId==this._primaryPointerID || pointerId==-1, o.rawX, o.rawY);
		*/
		var evt = new createjs.MouseEvent(type, bubbles, false, o.x, o.y, nativeEvent, pointerId, pointerId === this._primaryPointerID || pointerId === -1, o.rawX, o.rawY, relatedTarget);
		target.dispatchEvent(evt);
	};


	createjs.Stage = createjs.promote(Stage, "Container");
}());

//##############################################################################
// Bitmap.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	
	/**
	 * A Bitmap represents an Image, Canvas, or Video in the display list. A Bitmap can be instantiated using an existing
	 * HTML element, or a string.
	 *
	 * <h4>Example</h4>
	 *
	 *      var bitmap = new createjs.Bitmap("imagePath.jpg");
	 *
	 * <strong>Notes:</strong>
	 * <ol>
	 *     <li>When a string path or image tag that is not yet loaded is used, the stage may need to be redrawn before it
	 *      will be displayed.</li>
	 *     <li>Bitmaps with an SVG source currently will not respect an alpha value other than 0 or 1. To get around this,
	 *     the Bitmap can be cached.</li>
	 *     <li>Bitmaps with an SVG source will taint the canvas with cross-origin data, which prevents interactivity. This
	 *     happens in all browsers except recent Firefox builds.</li>
	 *     <li>Images loaded cross-origin will throw cross-origin security errors when interacted with using a mouse, using
	 *     methods such as `getObjectUnderPoint`, or using filters, or caching. You can get around this by setting
	 *     `crossOrigin` flags on your images before passing them to EaselJS, eg: `img.crossOrigin="Anonymous";`</li>
	 * </ol>
	 *
	 * @class Bitmap
	 * @extends DisplayObject
	 * @constructor
	 * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | String} imageOrUri The source object or URI to an image to
	 * display. This can be either an Image, Canvas, or Video object, or a string URI to an image file to load and use.
	 * If it is a URI, a new Image object will be constructed and assigned to the .image property.
	 **/
	function Bitmap(imageOrUri) {
		this.DisplayObject_constructor();
		
		
	// public properties:
		/**
		 * The image to render. This can be an Image, a Canvas, or a Video. Not all browsers (especially
		 * mobile browsers) support drawing video to a canvas.
		 * @property image
		 * @type HTMLImageElement | HTMLCanvasElement | HTMLVideoElement
		 **/
		if (typeof imageOrUri == "string") {
			this.image = document.createElement("img");
			this.image.src = imageOrUri;
		} else {
			this.image = imageOrUri;
		}
	
		/**
		 * Specifies an area of the source image to draw. If omitted, the whole image will be drawn.
		 * Note that video sources must have a width / height set to work correctly with `sourceRect`.
		 * @property sourceRect
		 * @type Rectangle
		 * @default null
		 */
		this.sourceRect = null;
	}
	var p = createjs.extend(Bitmap, createjs.DisplayObject);
	
	
// public methods:
	/**
	 * Constructor alias for backwards compatibility. This method will be removed in future versions.
	 * Subclasses should be updated to use {{#crossLink "Utility Methods/extends"}}{{/crossLink}}.
	 * @method initialize
	 * @deprecated in favour of `createjs.promote()`
	 **/
	p.initialize = Bitmap; // TODO: deprecated.

	/**
	 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
	 * This does not account for whether it would be visible within the boundaries of the stage.
	 *
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method isVisible
	 * @return {Boolean} Boolean indicating whether the display object would be visible if drawn to a canvas
	 **/
	p.isVisible = function() {
		var image = this.image;
		var hasContent = this.cacheCanvas || (image && (image.naturalWidth || image.getContext || image.readyState >= 2));
		return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
	};

	/**
	 * Draws the display object into the specified context ignoring its visible, alpha, shadow, and transform.
	 * Returns true if the draw was handled (useful for overriding functionality).
	 *
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method draw
	 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
	 * @param {Boolean} [ignoreCache=false] Indicates whether the draw operation should ignore any current cache.
	 * For example, used for drawing the cache (to prevent it from simply drawing an existing cache back
	 * into itself).
	 * @return {Boolean}
	 **/
	p.draw = function(ctx, ignoreCache) {
		if (this.DisplayObject_draw(ctx, ignoreCache) || !this.image) { return true; }
		var img = this.image, rect = this.sourceRect;
		if (rect) {
			// some browsers choke on out of bound values, so we'll fix them:
			var x1 = rect.x, y1 = rect.y, x2 = x1 + rect.width, y2 = y1 + rect.height, x = 0, y = 0, w = img.width, h = img.height;
			if (x1 < 0) { x -= x1; x1 = 0; }
			if (x2 > w) { x2 = w; }
			if (y1 < 0) { y -= y1; y1 = 0; }
			if (y2 > h) { y2 = h; }
			ctx.drawImage(img, x1, y1, x2-x1, y2-y1, x, y, x2-x1, y2-y1);
		} else {
			ctx.drawImage(img, 0, 0);
		}
		return true;
	};
	
	//Note, the doc sections below document using the specified APIs (from DisplayObject)  from
	//Bitmap. This is why they have no method implementations.
	
	/**
	 * Because the content of a Bitmap is already in a simple format, cache is unnecessary for Bitmap instances.
	 * You should <b>not</b> cache Bitmap instances as it can degrade performance.
	 *
	 * <strong>However: If you want to use a filter on a Bitmap, you <em>MUST</em> cache it, or it will not work.</strong>
	 * To see the API for caching, please visit the DisplayObject {{#crossLink "DisplayObject/cache"}}{{/crossLink}}
	 * method.
	 * @method cache
	 **/
	
	/**
	 * Because the content of a Bitmap is already in a simple format, cache is unnecessary for Bitmap instances.
	 * You should <b>not</b> cache Bitmap instances as it can degrade performance.
	 *
	 * <strong>However: If you want to use a filter on a Bitmap, you <em>MUST</em> cache it, or it will not work.</strong>
	 * To see the API for caching, please visit the DisplayObject {{#crossLink "DisplayObject/cache"}}{{/crossLink}}
	 * method.
	 * @method updateCache
	 **/
	
	/**
	 * Because the content of a Bitmap is already in a simple format, cache is unnecessary for Bitmap instances.
	 * You should <b>not</b> cache Bitmap instances as it can degrade performance.
	 *
	 * <strong>However: If you want to use a filter on a Bitmap, you <em>MUST</em> cache it, or it will not work.</strong>
	 * To see the API for caching, please visit the DisplayObject {{#crossLink "DisplayObject/cache"}}{{/crossLink}}
	 * method.
	 * @method uncache
	 **/

	/**
	 * Docced in superclass.
	 */
	p.getBounds = function() {
		var rect = this.DisplayObject_getBounds();
		if (rect) { return rect; }
		var image = this.image, o = this.sourceRect || image;
		var hasContent = (image && (image.naturalWidth || image.getContext || image.readyState >= 2));
		return hasContent ? this._rectangle.setValues(0, 0, o.width, o.height) : null;
	};
	
	/**
	 * Returns a clone of the Bitmap instance.
	 * @method clone
	 * @return {Bitmap} a clone of the Bitmap instance.
	 **/
	p.clone = function() {
		var o = new Bitmap(this.image);
		if (this.sourceRect) { o.sourceRect = this.sourceRect.clone(); }
		this._cloneProps(o);
		return o;
	};
	
	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Bitmap (name="+  this.name +")]";
	};

	
	createjs.Bitmap = createjs.promote(Bitmap, "DisplayObject");
}());

//##############################################################################
// Sprite.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * Displays a frame or sequence of frames (ie. an animation) from a SpriteSheet instance. A sprite sheet is a series of
	 * images (usually animation frames) combined into a single image. For example, an animation consisting of 8 100x100
	 * images could be combined into a 400x200 sprite sheet (4 frames across by 2 high). You can display individual frames,
	 * play frames as an animation, and even sequence animations together.
	 *
	 * See the {{#crossLink "SpriteSheet"}}{{/crossLink}} class for more information on setting up frames and animations.
	 *
	 * <h4>Example</h4>
	 *
	 *      var instance = new createjs.Sprite(spriteSheet);
	 *      instance.gotoAndStop("frameName");
	 *
	 * Until {{#crossLink "Sprite/gotoAndStop"}}{{/crossLink}} or {{#crossLink "Sprite/gotoAndPlay"}}{{/crossLink}} is called,
	 * only the first defined frame defined in the sprite sheet will be displayed.
	 *
	 * @class Sprite
	 * @extends DisplayObject
	 * @constructor
	 * @param {SpriteSheet} spriteSheet The SpriteSheet instance to play back. This includes the source image(s), frame
	 * dimensions, and frame data. See {{#crossLink "SpriteSheet"}}{{/crossLink}} for more information.
	 * @param {String|Number} [frameOrAnimation] The frame number or animation to play initially.
	 **/
	function Sprite(spriteSheet, frameOrAnimation) {
		this.DisplayObject_constructor();
		
		
	// public properties:
		/**
		 * The frame index that will be drawn when draw is called. Note that with some {{#crossLink "SpriteSheet"}}{{/crossLink}}
		 * definitions, this will advance non-sequentially. This will always be an integer value.
		 * @property currentFrame
		 * @type {Number}
		 * @default 0
		 * @readonly
		 **/
		this.currentFrame = 0;
	
		/**
		 * Returns the name of the currently playing animation.
		 * @property currentAnimation
		 * @type {String}
		 * @final
		 * @readonly
		 **/
		this.currentAnimation = null;
	
		/**
		 * Prevents the animation from advancing each tick automatically. For example, you could create a sprite
		 * sheet of icons, set paused to true, and display the appropriate icon by setting <code>currentFrame</code>.
		 * @property paused
		 * @type {Boolean}
		 * @default false
		 **/
		this.paused = true;
	
		/**
		 * The SpriteSheet instance to play back. This includes the source image, frame dimensions, and frame
		 * data. See {{#crossLink "SpriteSheet"}}{{/crossLink}} for more information.
		 * @property spriteSheet
		 * @type {SpriteSheet}
		 * @readonly
		 **/
		this.spriteSheet = spriteSheet;
	
		/**
		 * Specifies the current frame index within the currently playing animation. When playing normally, this will increase
		 * from 0 to n-1, where n is the number of frames in the current animation.
		 *
		 * This could be a non-integer value if
		 * using time-based playback (see {{#crossLink "Sprite/framerate"}}{{/crossLink}}, or if the animation's speed is
		 * not an integer.
		 * @property currentAnimationFrame
		 * @type {Number}
		 * @default 0
		 **/
		this.currentAnimationFrame = 0;
	
		/**
		 * By default Sprite instances advance one frame per tick. Specifying a framerate for the Sprite (or its related
		 * SpriteSheet) will cause it to advance based on elapsed time between ticks as appropriate to maintain the target
		 * framerate.
		 *
		 * For example, if a Sprite with a framerate of 10 is placed on a Stage being updated at 40fps, then the Sprite will
		 * advance roughly one frame every 4 ticks. This will not be exact, because the time between each tick will
		 * vary slightly between frames.
		 *
		 * This feature is dependent on the tick event object (or an object with an appropriate "delta" property) being
		 * passed into {{#crossLink "Stage/update"}}{{/crossLink}}.
		 * @property framerate
		 * @type {Number}
		 * @default 0
		 **/
		this.framerate = 0;
	
	
	// private properties:
		/**
		 * Current animation object.
		 * @property _animation
		 * @protected
		 * @type {Object}
		 * @default null
		 **/
		this._animation = null;
	
		/**
		 * Current frame index.
		 * @property _currentFrame
		 * @protected
		 * @type {Number}
		 * @default null
		 **/
		this._currentFrame = null;
		
		/**
		 * Skips the next auto advance. Used by gotoAndPlay to avoid immediately jumping to the next frame
		 * @property _skipAdvance
		 * @protected
		 * @type {Boolean}
		 * @default false
		 **/
		this._skipAdvance = false;
		
		
		if (frameOrAnimation != null) { this.gotoAndPlay(frameOrAnimation); }
	}
	var p = createjs.extend(Sprite, createjs.DisplayObject);

	/**
	 * Constructor alias for backwards compatibility. This method will be removed in future versions.
	 * Subclasses should be updated to use {{#crossLink "Utility Methods/extends"}}{{/crossLink}}.
	 * @method initialize
	 * @deprecated in favour of `createjs.promote()`
	 **/
	p.initialize = Sprite; // TODO: Deprecated. This is for backwards support of FlashCC spritesheet export.


// events:
	/**
	 * Dispatched when an animation reaches its ends.
	 * @event animationend
	 * @param {Object} target The object that dispatched the event.
	 * @param {String} type The event type.
	 * @param {String} name The name of the animation that just ended.
	 * @param {String} next The name of the next animation that will be played, or null. This will be the same as name if the animation is looping.
	 * @since 0.6.0
	 */
	 
	/**
	 * Dispatched any time the current frame changes. For example, this could be due to automatic advancement on a tick,
	 * or calling gotoAndPlay() or gotoAndStop().
	 * @event change
	 * @param {Object} target The object that dispatched the event.
	 * @param {String} type The event type.
	 */


// public methods:
	/**
	 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
	 * This does not account for whether it would be visible within the boundaries of the stage.
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method isVisible
	 * @return {Boolean} Boolean indicating whether the display object would be visible if drawn to a canvas
	 **/
	p.isVisible = function() {
		var hasContent = this.cacheCanvas || this.spriteSheet.complete;
		return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
	};

	/**
	 * Draws the display object into the specified context ignoring its visible, alpha, shadow, and transform.
	 * Returns true if the draw was handled (useful for overriding functionality).
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method draw
	 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
	 * @param {Boolean} ignoreCache Indicates whether the draw operation should ignore any current cache.
	 * For example, used for drawing the cache (to prevent it from simply drawing an existing cache back
	 * into itself).
	 **/
	p.draw = function(ctx, ignoreCache) {
		if (this.DisplayObject_draw(ctx, ignoreCache)) { return true; }
		this._normalizeFrame();
		var o = this.spriteSheet.getFrame(this._currentFrame|0);
		if (!o) { return false; }
		var rect = o.rect;
		if (rect.width && rect.height) { ctx.drawImage(o.image, rect.x, rect.y, rect.width, rect.height, -o.regX, -o.regY, rect.width, rect.height); }
		return true;
	};

	//Note, the doc sections below document using the specified APIs (from DisplayObject)  from
	//Bitmap. This is why they have no method implementations.

	/**
	 * Because the content of a Sprite is already in a raster format, cache is unnecessary for Sprite instances.
	 * You should not cache Sprite instances as it can degrade performance.
	 * @method cache
	 **/

	/**
	 * Because the content of a Sprite is already in a raster format, cache is unnecessary for Sprite instances.
	 * You should not cache Sprite instances as it can degrade performance.
	 * @method updateCache
	 **/

	/**
	 * Because the content of a Sprite is already in a raster format, cache is unnecessary for Sprite instances.
	 * You should not cache Sprite instances as it can degrade performance.
	 * @method uncache
	 **/

	/**
	 * Play (unpause) the current animation. The Sprite will be paused if either {{#crossLink "Sprite/stop"}}{{/crossLink}}
	 * or {{#crossLink "Sprite/gotoAndStop"}}{{/crossLink}} is called. Single frame animations will remain
	 * unchanged.
	 * @method play
	 **/
	p.play = function() {
		this.paused = false;
	};

	/**
	 * Stop playing a running animation. The Sprite will be playing if {{#crossLink "Sprite/gotoAndPlay"}}{{/crossLink}}
	 * is called. Note that calling {{#crossLink "Sprite/gotoAndPlay"}}{{/crossLink}} or {{#crossLink "Sprite/play"}}{{/crossLink}}
	 * will resume playback.
	 * @method stop
	 **/
	p.stop = function() {
		this.paused = true;
	};

	/**
	 * Sets paused to false and plays the specified animation name, named frame, or frame number.
	 * @method gotoAndPlay
	 * @param {String|Number} frameOrAnimation The frame number or animation name that the playhead should move to
	 * and begin playing.
	 **/
	p.gotoAndPlay = function(frameOrAnimation) {
		this.paused = false;
		this._skipAdvance = true;
		this._goto(frameOrAnimation);
	};

	/**
	 * Sets paused to true and seeks to the specified animation name, named frame, or frame number.
	 * @method gotoAndStop
	 * @param {String|Number} frameOrAnimation The frame number or animation name that the playhead should move to
	 * and stop.
	 **/
	p.gotoAndStop = function(frameOrAnimation) {
		this.paused = true;
		this._goto(frameOrAnimation);
	};

	/**
	 * Advances the playhead. This occurs automatically each tick by default.
	 * @param [time] {Number} The amount of time in ms to advance by. Only applicable if framerate is set on the Sprite
	 * or its SpriteSheet.
	 * @method advance
	*/
	p.advance = function(time) {
		var fps = this.framerate || this.spriteSheet.framerate;
		var t = (fps && time != null) ? time/(1000/fps) : 1;
		this._normalizeFrame(t);
	};
	
	/**
	 * Returns a {{#crossLink "Rectangle"}}{{/crossLink}} instance defining the bounds of the current frame relative to
	 * the origin. For example, a 90 x 70 frame with <code>regX=50</code> and <code>regY=40</code> would return a
	 * rectangle with [x=-50, y=-40, width=90, height=70]. This ignores transformations on the display object.
	 *
	 * Also see the SpriteSheet {{#crossLink "SpriteSheet/getFrameBounds"}}{{/crossLink}} method.
	 * @method getBounds
	 * @return {Rectangle} A Rectangle instance. Returns null if the frame does not exist, or the image is not fully
	 * loaded.
	 **/
	p.getBounds = function() {
		// TODO: should this normalizeFrame?
		return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle);
	};

	/**
	 * Returns a clone of the Sprite instance. Note that the same SpriteSheet is shared between cloned
	 * instances.
	 * @method clone
	 * @return {Sprite} a clone of the Sprite instance.
	 **/
	p.clone = function() {
		return this._cloneProps(new Sprite(this.spriteSheet));
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Sprite (name="+  this.name +")]";
	};

// private methods:
	/**
	 * @method _cloneProps
	 * @param {Sprite} o
	 * @return {Sprite} o
	 * @protected
	 **/
	p._cloneProps = function(o) {
		this.DisplayObject__cloneProps(o);
		o.currentFrame = this.currentFrame;
		o.currentAnimation = this.currentAnimation;
		o.paused = this.paused;
		o.currentAnimationFrame = this.currentAnimationFrame;
		o.framerate = this.framerate;
		
		o._animation = this._animation;
		o._currentFrame = this._currentFrame;
		o._skipAdvance = this._skipAdvance;
		return o;
	};
	
	/**
	 * Advances the <code>currentFrame</code> if paused is not true. This is called automatically when the {{#crossLink "Stage"}}{{/crossLink}}
	 * ticks.
	 * @param {Object} evtObj An event object that will be dispatched to all tick listeners. This object is reused between dispatchers to reduce construction & GC costs.
	 * @protected
	 * @method _tick
	 **/
	p._tick = function(evtObj) {
		if (!this.paused) {
			if (!this._skipAdvance) { this.advance(evtObj&&evtObj.delta); }
			this._skipAdvance = false;
		}
		this.DisplayObject__tick(evtObj);
	};


	/**
	 * Normalizes the current frame, advancing animations and dispatching callbacks as appropriate.
	 * @protected
	 * @method _normalizeFrame
	 **/
	p._normalizeFrame = function(frameDelta) {
		frameDelta = frameDelta || 0;
		var animation = this._animation;
		var paused = this.paused;
		var frame = this._currentFrame;
		var l;
		
		if (animation) {
			var speed = animation.speed || 1;
			var animFrame = this.currentAnimationFrame;
			l = animation.frames.length;
			if (animFrame + frameDelta * speed >= l) {
				var next = animation.next;
				if (this._dispatchAnimationEnd(animation, frame, paused, next, l - 1)) {
					// something changed in the event stack, so we shouldn't make any more changes here.
					return;
				} else if (next) {
					// sequence. Automatically calls _normalizeFrame again with the remaining frames.
					return this._goto(next, frameDelta - (l - animFrame) / speed);
				} else {
					// end.
					this.paused = true;
					animFrame = animation.frames.length - 1;
				}
			} else {
				animFrame += frameDelta * speed;
			}
			this.currentAnimationFrame = animFrame;
			this._currentFrame = animation.frames[animFrame | 0]
		} else {
			frame = (this._currentFrame += frameDelta);
			l = this.spriteSheet.getNumFrames();
			if (frame >= l && l > 0) {
				if (!this._dispatchAnimationEnd(animation, frame, paused, l - 1)) {
					// looped.
					if ((this._currentFrame -= l) >= l) { return this._normalizeFrame(); }
				}
			}
		}
		frame = this._currentFrame | 0;
		if (this.currentFrame != frame) {
			this.currentFrame = frame;
			this.dispatchEvent("change");
		}
	};

	/**
	 * Dispatches the "animationend" event. Returns true if a handler changed the animation (ex. calling {{#crossLink "Sprite/stop"}}{{/crossLink}},
	 * {{#crossLink "Sprite/gotoAndPlay"}}{{/crossLink}}, etc.)
	 * @property _dispatchAnimationEnd
	 * @private
	 * @type {Function}
	 **/
	p._dispatchAnimationEnd = function(animation, frame, paused, next, end) {
		var name = animation ? animation.name : null;
		if (this.hasEventListener("animationend")) {
			var evt = new createjs.Event("animationend");
			evt.name = name;
			evt.next = next;
			this.dispatchEvent(evt);
		}
		// did the animation get changed in the event stack?:
		var changed = (this._animation != animation || this._currentFrame != frame);
		// if the animation hasn't changed, but the sprite was paused, then we want to stick to the last frame:
		if (!changed && !paused && this.paused) { this.currentAnimationFrame = end; changed = true; }
		return changed;
	};

	/**
	 * Moves the playhead to the specified frame number or animation.
	 * @method _goto
	 * @param {String|Number} frameOrAnimation The frame number or animation that the playhead should move to.
	 * @param {Boolean} [frame] The frame of the animation to go to. Defaults to 0.
	 * @protected
	 **/
	p._goto = function(frameOrAnimation, frame) {
		this.currentAnimationFrame = 0;
		if (isNaN(frameOrAnimation)) {
			var data = this.spriteSheet.getAnimation(frameOrAnimation);
			if (data) {
				this._animation = data;
				this.currentAnimation = frameOrAnimation;
				this._normalizeFrame(frame);
			}
		} else {
			this.currentAnimation = this._animation = null;
			this._currentFrame = frameOrAnimation;
			this._normalizeFrame();
		}
	};


	createjs.Sprite = createjs.promote(Sprite, "DisplayObject");
}());

//##############################################################################
// Shape.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * A Shape allows you to display vector art in the display list. It composites a {{#crossLink "Graphics"}}{{/crossLink}}
	 * instance which exposes all of the vector drawing methods. The Graphics instance can be shared between multiple Shape
	 * instances to display the same vector graphics with different positions or transforms.
	 *
	 * If the vector art will not
	 * change between draws, you may want to use the {{#crossLink "DisplayObject/cache"}}{{/crossLink}} method to reduce the
	 * rendering cost.
	 *
	 * <h4>Example</h4>
	 *
	 *      var graphics = new createjs.Graphics().beginFill("#ff0000").drawRect(0, 0, 100, 100);
	 *      var shape = new createjs.Shape(graphics);
	 *
	 *      //Alternatively use can also use the graphics property of the Shape class to renderer the same as above.
	 *      var shape = new createjs.Shape();
	 *      shape.graphics.beginFill("#ff0000").drawRect(0, 0, 100, 100);
	 *
	 * @class Shape
	 * @extends DisplayObject
	 * @constructor
	 * @param {Graphics} graphics Optional. The graphics instance to display. If null, a new Graphics instance will be created.
	 **/
	function Shape(graphics) {
		this.DisplayObject_constructor();
		
		
	// public properties:
		/**
		 * The graphics instance to display.
		 * @property graphics
		 * @type Graphics
		 **/
		this.graphics = graphics ? graphics : new createjs.Graphics();
	}
	var p = createjs.extend(Shape, createjs.DisplayObject);

	// TODO: deprecated
	// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.


// public methods:
	/**
	 * Returns true or false indicating whether the Shape would be visible if drawn to a canvas.
	 * This does not account for whether it would be visible within the boundaries of the stage.
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method isVisible
	 * @return {Boolean} Boolean indicating whether the Shape would be visible if drawn to a canvas
	 **/
	p.isVisible = function() {
		var hasContent = this.cacheCanvas || (this.graphics && !this.graphics.isEmpty());
		return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
	};

	/**
	 * Draws the Shape into the specified context ignoring its visible, alpha, shadow, and transform. Returns true if
	 * the draw was handled (useful for overriding functionality).
	 *
	 * <i>NOTE: This method is mainly for internal use, though it may be useful for advanced uses.</i>
	 * @method draw
	 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
	 * @param {Boolean} [ignoreCache=false] Indicates whether the draw operation should ignore any current cache. For example,
	 * used for drawing the cache (to prevent it from simply drawing an existing cache back into itself).
	 * @return {Boolean}
	 **/
	p.draw = function(ctx, ignoreCache) {
		if (this.DisplayObject_draw(ctx, ignoreCache)) { return true; }
		this.graphics.draw(ctx, this);
		return true;
	};

	/**
	 * Returns a clone of this Shape. Some properties that are specific to this instance's current context are reverted to
	 * their defaults (for example .parent).
	 * @method clone
	 * @param {Boolean} recursive If true, this Shape's {{#crossLink "Graphics"}}{{/crossLink}} instance will also be
	 * cloned. If false, the Graphics instance will be shared with the new Shape.
	 **/
	p.clone = function(recursive) {
		var g = (recursive && this.graphics) ? this.graphics.clone() : this.graphics;
		return  this._cloneProps(new Shape(g));
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Shape (name="+  this.name +")]";
	};


	createjs.Shape = createjs.promote(Shape, "DisplayObject");
}());

//##############################################################################
// Text.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * Display one or more lines of dynamic text (not user editable) in the display list. Line wrapping support (using the
	 * lineWidth) is very basic, wrapping on spaces and tabs only. Note that as an alternative to Text, you can position HTML
	 * text above or below the canvas relative to items in the display list using the {{#crossLink "DisplayObject/localToGlobal"}}{{/crossLink}}
	 * method, or using {{#crossLink "DOMElement"}}{{/crossLink}}.
	 *
	 * <b>Please note that Text does not support HTML text, and can only display one font style at a time.</b> To use
	 * multiple font styles, you will need to create multiple text instances, and position them manually.
	 *
	 * <h4>Example</h4>
	 *
	 *      var text = new createjs.Text("Hello World", "20px Arial", "#ff7700");
	 *      text.x = 100;
	 *      text.textBaseline = "alphabetic";
	 *
	 * CreateJS Text supports web fonts (the same rules as Canvas). The font must be loaded and supported by the browser
	 * before it can be displayed.
	 *
	 * <strong>Note:</strong> Text can be expensive to generate, so cache instances where possible. Be aware that not all
	 * browsers will render Text exactly the same.
	 * @class Text
	 * @extends DisplayObject
	 * @constructor
	 * @param {String} [text] The text to display.
	 * @param {String} [font] The font style to use. Any valid value for the CSS font attribute is acceptable (ex. "bold
	 * 36px Arial").
	 * @param {String} [color] The color to draw the text in. Any valid value for the CSS color attribute is acceptable (ex.
	 * "#F00", "red", or "#FF0000").
	 **/
	function Text(text, font, color) {
		this.DisplayObject_constructor();
		
		
	// public properties:
		/**
		 * The text to display.
		 * @property text
		 * @type String
		 **/
		this.text = text;
	
		/**
		 * The font style to use. Any valid value for the CSS font attribute is acceptable (ex. "bold 36px Arial").
		 * @property font
		 * @type String
		 **/
		this.font = font;
	
		/**
		 * The color to draw the text in. Any valid value for the CSS color attribute is acceptable (ex. "#F00"). Default is "#000".
		 * It will also accept valid canvas fillStyle values.
		 * @property color
		 * @type String
		 **/
		this.color = color;
	
		/**
		 * The horizontal text alignment. Any of "start", "end", "left", "right", and "center". For detailed
		 * information view the
		 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#text-styles">
		 * whatwg spec</a>. Default is "left".
		 * @property textAlign
		 * @type String
		 **/
		this.textAlign = "left";
	
		/**
		 * The vertical alignment point on the font. Any of "top", "hanging", "middle", "alphabetic", "ideographic", or
		 * "bottom". For detailed information view the <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#text-styles">
		 * whatwg spec</a>. Default is "top".
		 * @property textBaseline
		 * @type String
		*/
		this.textBaseline = "top";
	
		/**
		 * The maximum width to draw the text. If maxWidth is specified (not null), the text will be condensed or
		 * shrunk to make it fit in this width. For detailed information view the
		 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#text-styles">
		 * whatwg spec</a>.
		 * @property maxWidth
		 * @type Number
		*/
		this.maxWidth = null;
	
		/**
		 * If greater than 0, the text will be drawn as a stroke (outline) of the specified width.
		 * @property outline
		 * @type Number
		 **/
		this.outline = 0;
	
		/**
		 * Indicates the line height (vertical distance between baselines) for multi-line text. If null or 0,
		 * the value of getMeasuredLineHeight is used.
		 * @property lineHeight
		 * @type Number
		 **/
		this.lineHeight = 0;
	
		/**
		 * Indicates the maximum width for a line of text before it is wrapped to multiple lines. If null,
		 * the text will not be wrapped.
		 * @property lineWidth
		 * @type Number
		 **/
		this.lineWidth = null;
	}
	var p = createjs.extend(Text, createjs.DisplayObject);

	// TODO: deprecated
	// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.

	
// static properties:
	/**
	 * @property _workingContext
	 * @type CanvasRenderingContext2D
	 * @private
	 **/
	var canvas = (createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"));
	if (canvas.getContext) { Text._workingContext = canvas.getContext("2d"); canvas.width = canvas.height = 1; }
	
	
// constants:
	/**
	 * Lookup table for the ratio to offset bounds x calculations based on the textAlign property.
	 * @property H_OFFSETS
	 * @type Object
	 * @protected
	 * @static
	 **/
	Text.H_OFFSETS = {start: 0, left: 0, center: -0.5, end: -1, right: -1};
	
	/**
	 * Lookup table for the ratio to offset bounds y calculations based on the textBaseline property.
	 * @property H_OFFSETS
	 * @type Object
	 * @protected
	 * @static
	 **/
	Text.V_OFFSETS = {top: 0, hanging: -0.01, middle: -0.4, alphabetic: -0.8, ideographic: -0.85, bottom: -1};


// public methods:
	/**
	 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
	 * This does not account for whether it would be visible within the boundaries of the stage.
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method isVisible
	 * @return {Boolean} Whether the display object would be visible if drawn to a canvas
	 **/
	p.isVisible = function() {
		var hasContent = this.cacheCanvas || (this.text != null && this.text !== "");
		return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
	};

	/**
	 * Draws the Text into the specified context ignoring its visible, alpha, shadow, and transform.
	 * Returns true if the draw was handled (useful for overriding functionality).
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method draw
	 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
	 * @param {Boolean} ignoreCache Indicates whether the draw operation should ignore any current cache.
	 * For example, used for drawing the cache (to prevent it from simply drawing an existing cache back
	 * into itself).
	 **/
	p.draw = function(ctx, ignoreCache) {
		if (this.DisplayObject_draw(ctx, ignoreCache)) { return true; }

		var col = this.color || "#000";
		if (this.outline) { ctx.strokeStyle = col; ctx.lineWidth = this.outline*1; }
		else { ctx.fillStyle = col; }
		
		this._drawText(this._prepContext(ctx));
		return true;
	};

	/**
	 * Returns the measured, untransformed width of the text without wrapping. Use getBounds for a more robust value.
	 * @method getMeasuredWidth
	 * @return {Number} The measured, untransformed width of the text.
	 **/
	p.getMeasuredWidth = function() {
		return this._getMeasuredWidth(this.text);
	};

	/**
	 * Returns an approximate line height of the text, ignoring the lineHeight property. This is based on the measured
	 * width of a "M" character multiplied by 1.2, which provides an approximate line height for most fonts.
	 * @method getMeasuredLineHeight
	 * @return {Number} an approximate line height of the text, ignoring the lineHeight property. This is
	 * based on the measured width of a "M" character multiplied by 1.2, which approximates em for most fonts.
	 **/
	p.getMeasuredLineHeight = function() {
		return this._getMeasuredWidth("M")*1.2;
	};

	/**
	 * Returns the approximate height of multi-line text by multiplying the number of lines against either the
	 * <code>lineHeight</code> (if specified) or {{#crossLink "Text/getMeasuredLineHeight"}}{{/crossLink}}. Note that
	 * this operation requires the text flowing logic to run, which has an associated CPU cost.
	 * @method getMeasuredHeight
	 * @return {Number} The approximate height of the untransformed multi-line text.
	 **/
	p.getMeasuredHeight = function() {
		return this._drawText(null,{}).height;
	};

	/**
	 * Docced in superclass.
	 */
	p.getBounds = function() {
		var rect = this.DisplayObject_getBounds();
		if (rect) { return rect; }
		if (this.text == null || this.text === "") { return null; }
		var o = this._drawText(null, {});
		var w = (this.maxWidth && this.maxWidth < o.width) ? this.maxWidth : o.width;
		var x = w * Text.H_OFFSETS[this.textAlign||"left"];
		var lineHeight = this.lineHeight||this.getMeasuredLineHeight();
		var y = lineHeight * Text.V_OFFSETS[this.textBaseline||"top"];
		return this._rectangle.setValues(x, y, w, o.height);
	};
	
	/**
	 * Returns an object with width, height, and lines properties. The width and height are the visual width and height
	 * of the drawn text. The lines property contains an array of strings, one for
	 * each line of text that will be drawn, accounting for line breaks and wrapping. These strings have trailing
	 * whitespace removed.
	 * @method getMetrics
	 * @return {Object} An object with width, height, and lines properties.
	 **/
	p.getMetrics = function() {
		var o = {lines:[]};
		o.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
		o.vOffset = o.lineHeight * Text.V_OFFSETS[this.textBaseline||"top"];
		return this._drawText(null, o, o.lines);
	};

	/**
	 * Returns a clone of the Text instance.
	 * @method clone
	 * @return {Text} a clone of the Text instance.
	 **/
	p.clone = function() {
		return this._cloneProps(new Text(this.text, this.font, this.color));
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Text (text="+  (this.text.length > 20 ? this.text.substr(0, 17)+"..." : this.text) +")]";
	};


// private methods:
	/**
	 * @method _cloneProps
	 * @param {Text} o
	 * @protected
	 * @return {Text} o
	 **/
	p._cloneProps = function(o) {
		this.DisplayObject__cloneProps(o);
		o.textAlign = this.textAlign;
		o.textBaseline = this.textBaseline;
		o.maxWidth = this.maxWidth;
		o.outline = this.outline;
		o.lineHeight = this.lineHeight;
		o.lineWidth = this.lineWidth;
		return o;
	};

	/**
	 * @method _getWorkingContext
	 * @param {CanvasRenderingContext2D} ctx
	 * @return {CanvasRenderingContext2D}
	 * @protected
	 **/
	p._prepContext = function(ctx) {
		ctx.font = this.font||"10px sans-serif";
		ctx.textAlign = this.textAlign||"left";
		ctx.textBaseline = this.textBaseline||"top";
		return ctx;
	};

	/**
	 * Draws multiline text.
	 * @method _drawText
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {Object} o
	 * @param {Array} lines
	 * @return {Object}
	 * @protected
	 **/
	p._drawText = function(ctx, o, lines) {
		var paint = !!ctx;
		if (!paint) {
			ctx = Text._workingContext;
			ctx.save();
			this._prepContext(ctx);
		}
		var lineHeight = this.lineHeight||this.getMeasuredLineHeight();
		
		var maxW = 0, count = 0;
		var hardLines = String(this.text).split(/(?:\r\n|\r|\n)/);
		for (var i=0, l=hardLines.length; i<l; i++) {
			var str = hardLines[i];
			var w = null;
			
			if (this.lineWidth != null && (w = ctx.measureText(str).width) > this.lineWidth) {
				// text wrapping:
				var words = str.split(/(\s)/);
				str = words[0];
				w = ctx.measureText(str).width;
				
				for (var j=1, jl=words.length; j<jl; j+=2) {
					// Line needs to wrap:
					var wordW = ctx.measureText(words[j] + words[j+1]).width;
					if (w + wordW > this.lineWidth) {
						if (paint) { this._drawTextLine(ctx, str, count*lineHeight); }
						if (lines) { lines.push(str); }
						if (w > maxW) { maxW = w; }
						str = words[j+1];
						w = ctx.measureText(str).width;
						count++;
					} else {
						str += words[j] + words[j+1];
						w += wordW;
					}
				}
			}
			
			if (paint) { this._drawTextLine(ctx, str, count*lineHeight); }
			if (lines) { lines.push(str); }
			if (o && w == null) { w = ctx.measureText(str).width; }
			if (w > maxW) { maxW = w; }
			count++;
		}
		
		if (o) {
			o.width = maxW;
			o.height = count*lineHeight;
		}
		if (!paint) { ctx.restore(); }
		return o;
	};

	/**
	 * @method _drawTextLine
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {String} text
	 * @param {Number} y
	 * @protected
	 **/
	p._drawTextLine = function(ctx, text, y) {
		// Chrome 17 will fail to draw the text if the last param is included but null, so we feed it a large value instead:
		if (this.outline) { ctx.strokeText(text, 0, y, this.maxWidth||0xFFFF); }
		else { ctx.fillText(text, 0, y, this.maxWidth||0xFFFF); }
	};
	
	
	/**
	 * @method _getMeasuredWidth
	 * @param {String} text
	 * @protected
	 **/
	p._getMeasuredWidth = function(text) {
		var ctx = Text._workingContext;
		ctx.save();
		var w = this._prepContext(ctx).measureText(text).width;
		ctx.restore();
		return w;
	};


	createjs.Text = createjs.promote(Text, "DisplayObject");
}());

//##############################################################################
// BitmapText.js
//##############################################################################

this.createjs = this.createjs || {};

(function () {
	"use strict";


// constructor:
	/**
	 * Displays text using bitmap glyphs defined in a sprite sheet. Multi-line text is supported
	 * using new line characters, but automatic wrapping is not supported. See the 
	 * {{#crossLink "BitmapText/spriteSheet:property"}}{{/crossLink}}
	 * property for more information on defining glyphs.
	 * 
	 * <strong>Important:</strong> BitmapText extends Container, but is not designed to be used as one.
	 * As such, methods like addChild and removeChild are disabled.
	 * @class BitmapText
	 * @extends DisplayObject
	 * @param {String} [text=""] The text to display.
	 * @param {SpriteSheet} [spriteSheet=null] The spritesheet that defines the character glyphs.
	 * @constructor
	 **/
	function BitmapText(text, spriteSheet) {
		this.Container_constructor();
		
		
	// public properties:
		/**
		 * The text to display.
		 * @property text
		 * @type String
		 * @default ""
		 **/
		this.text = text||"";
		
		/**
		 * A SpriteSheet instance that defines the glyphs for this bitmap text. Each glyph/character
		 * should have a single frame animation defined in the sprite sheet named the same as
		 * corresponding character. For example, the following animation definition:
		 *
		 * 		"A": {frames: [0]}
		 *
		 * would indicate that the frame at index 0 of the spritesheet should be drawn for the "A" character. The short form
		 * is also acceptable:
		 * 
		 * 		"A": 0
		 *
		 * Note that if a character in the text is not found in the sprite sheet, it will also
		 * try to use the alternate case (upper or lower).
		 *
		 * See SpriteSheet for more information on defining sprite sheet data.
		 * @property spriteSheet
		 * @type SpriteSheet
		 * @default null
		 **/
		this.spriteSheet = spriteSheet;
	
		/**
		 * The height of each line of text. If 0, then it will use a line height calculated
		 * by checking for the height of the "1", "T", or "L" character (in that order). If
		 * those characters are not defined, it will use the height of the first frame of the
		 * sprite sheet.
		 * @property lineHeight
		 * @type Number
		 * @default 0
		 **/
		this.lineHeight = 0;
	
		/**
		 * This spacing (in pixels) will be added after each character in the output.
		 * @property letterSpacing
		 * @type Number
		 * @default 0
		 **/
		this.letterSpacing = 0;
	
		/**
		 * If a space character is not defined in the sprite sheet, then empty pixels equal to
		 * spaceWidth will be inserted instead. If 0, then it will use a value calculated
		 * by checking for the width of the "1", "l", "E", or "A" character (in that order). If
		 * those characters are not defined, it will use the width of the first frame of the
		 * sprite sheet.
		 * @property spaceWidth
		 * @type Number
		 * @default 0
		 **/
		this.spaceWidth = 0;
		
		
	// private properties:
	 	/**
		 * @property _oldProps
		 * @type Object
		 * @protected
		 **/
		this._oldProps = {text:0,spriteSheet:0,lineHeight:0,letterSpacing:0,spaceWidth:0};
	}
	var p = createjs.extend(BitmapText, createjs.Container);

	/**
	 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
	 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
	 * for details.
	 *
	 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
	 *
	 * @method initialize
	 * @protected
	 * @deprecated
	 */
	// p.initialize = function() {}; // searchable for devs wondering where it is.

// static properties:
	/**
	 * BitmapText uses Sprite instances to draw text. To reduce the creation and destruction of instances (and thus garbage collection), it maintains
	 * an internal object pool of sprite instances to reuse. Increasing this value can cause more sprites to be
	 * retained, slightly increasing memory use, but reducing instantiation.
	 * @property maxPoolSize
	 * @type Number
	 * @static
	 * @default 100
	 **/
	BitmapText.maxPoolSize = 100;
	
	/**
	 * Sprite object pool.
	 * @type {Array}
	 * @static
	 * @private
	 */
	BitmapText._spritePool = [];

	
// public methods:
	/**
	 * Docced in superclass.
	 **/
	p.draw = function(ctx, ignoreCache) {
		if (this.DisplayObject_draw(ctx, ignoreCache)) { return; }
		this._updateText();
		this.Container_draw(ctx, ignoreCache);
	};
	
	/**
	 * Docced in superclass.
	 **/
	p.getBounds = function() {
		this._updateText();
		return this.Container_getBounds();
	};
	
	/**
	 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
	 * This does not account for whether it would be visible within the boundaries of the stage.
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method isVisible
	 * @return {Boolean} Boolean indicating whether the display object would be visible if drawn to a canvas
	 **/
	p.isVisible = function() {
		var hasContent = this.cacheCanvas || (this.spriteSheet && this.spriteSheet.complete && this.text);
		return !!(this.visible && this.alpha > 0 && this.scaleX !== 0 && this.scaleY !== 0 && hasContent);
	};
	
	p.clone = function() {
		return this._cloneProps(new BitmapText(this.text, this.spriteSheet));
	};
	
	/**
	 * <strong>Disabled in BitmapText.</strong>
	 * @method addChild
	 **/
	/**
	 * <strong>Disabled in BitmapText.</strong>
	 * @method addChildAt
	 **/
	/**
	 * <strong>Disabled in BitmapText.</strong>
	 * @method removeChild
	 **/
	/**
	 * <strong>Disabled in BitmapText.</strong>
	 * @method removeChildAt
	 **/
	/**
	 * <strong>Disabled in BitmapText.</strong>
	 * @method removeAllChildren
	 **/
	p.addChild = p.addChildAt = p.removeChild = p.removeChildAt = p.removeAllChildren = function() {};


// private methods:
 	/**
	 * @method _cloneProps
	 * @param {BitmapText} o
	 * @return {BitmapText} o
	 * @protected
	 **/
	p._cloneProps = function(o) {
		this.Container__cloneProps(o);
		o.lineHeight = this.lineHeight;
		o.letterSpacing = this.letterSpacing;
		o.spaceWidth = this.spaceWidth;
		return o;
	};
	
	/**
	 * @method _getFrameIndex
	 * @param {String} character
	 * @param {SpriteSheet} spriteSheet
	 * @return {Number}
	 * @protected
	 **/
	p._getFrameIndex = function(character, spriteSheet) {
		var c, o = spriteSheet.getAnimation(character);
		if (!o) {
			(character != (c = character.toUpperCase())) || (character != (c = character.toLowerCase())) || (c=null);
			if (c) { o = spriteSheet.getAnimation(c); }
		}
		return o && o.frames[0];
	};
	
	/**
	 * @method _getFrame
	 * @param {String} character
	 * @param {SpriteSheet} spriteSheet
	 * @return {Object}
	 * @protected
	 **/
	p._getFrame = function(character, spriteSheet) {
		var index = this._getFrameIndex(character, spriteSheet);
		return index == null ? index : spriteSheet.getFrame(index);
	};
	
	/**
	 * @method _getLineHeight
	 * @param {SpriteSheet} ss
	 * @return {Number}
	 * @protected
	 **/
	p._getLineHeight = function(ss) {
		var frame = this._getFrame("1",ss) || this._getFrame("T",ss) || this._getFrame("L",ss) || ss.getFrame(0);
		return frame ? frame.rect.height : 1;
	};
	/**
	 * @method _getSpaceWidth
	 * @param {SpriteSheet} ss
	 * @return {Number}
	 * @protected
	 **/
	p._getSpaceWidth = function(ss) {
		var frame = this._getFrame("1",ss) || this._getFrame("l",ss) || this._getFrame("e",ss) || this._getFrame("a",ss) || ss.getFrame(0);
		return frame ? frame.rect.width : 1;
	};
	
	/**
	 * @method _drawText
	 * @protected
	 **/
	p._updateText = function() {
		var x=0, y=0, o=this._oldProps, change=false, spaceW=this.spaceWidth, lineH=this.lineHeight, ss=this.spriteSheet;
		var pool=BitmapText._spritePool, kids=this.children, childIndex=0, numKids=kids.length, sprite;
		
		for (var n in o) {
			if (o[n] != this[n]) {
				o[n] = this[n];
				change = true;
			}
		}
		if (!change) { return; }
		
		var hasSpace = !!this._getFrame(" ", ss);
		if (!hasSpace && !spaceW) { spaceW = this._getSpaceWidth(ss); }
		if (!lineH) { lineH = this._getLineHeight(ss); }
		
		for(var i=0, l=this.text.length; i<l; i++) {
			var character = this.text.charAt(i);
			if (character == " " && !hasSpace) {
				x += spaceW;
				continue;
			} else if (character=="\n" || character=="\r") {
				if (character=="\r" && this.text.charAt(i+1) == "\n") { i++; } // crlf
				x = 0;
				y += lineH;
				continue;
			}

			var index = this._getFrameIndex(character, ss);
			if (index == null) { continue; }
			
			if (childIndex < numKids) {
				sprite = kids[childIndex];
			} else {
				kids.push(sprite = pool.length ? pool.pop() : new createjs.Sprite());
				sprite.parent = this;
				numKids++;
			}
			sprite.spriteSheet = ss;
			sprite.gotoAndStop(index);
			sprite.x = x;
			sprite.y = y;
			childIndex++;
			
			x += sprite.getBounds().width + this.letterSpacing;
		}
		while (numKids > childIndex) {
			 // faster than removeChild.
			pool.push(sprite = kids.pop());
			sprite.parent = null;
			numKids--;
		}
		if (pool.length > BitmapText.maxPoolSize) { pool.length = BitmapText.maxPoolSize; }
	};


	createjs.BitmapText = createjs.promote(BitmapText, "Container");
}());

//##############################################################################
// MovieClip.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * The MovieClip class associates a TweenJS Timeline with an EaselJS {{#crossLink "Container"}}{{/crossLink}}. It allows
	 * you to create objects which encapsulate timeline animations, state changes, and synched actions. Due to the
	 * complexities inherent in correctly setting up a MovieClip, it is largely intended for tool output and is not included
	 * in the main EaselJS library.
	 *
	 * Currently MovieClip only works properly if it is tick based (as opposed to time based) though some concessions have
	 * been made to support time-based timelines in the future.
	 *
	 * <h4>Example</h4>
	 * This example animates two shapes back and forth. The grey shape starts on the left, but we jump to a mid-point in
	 * the animation using {{#crossLink "MovieClip/gotoAndPlay"}}{{/crossLink}}.
	 *
	 *      var stage = new createjs.Stage("canvas");
	 *      createjs.Ticker.addEventListener("tick", stage);
	 *
	 *      var mc = new createjs.MovieClip(null, 0, true, {start:20});
	 *      stage.addChild(mc);
	 *
	 *      var child1 = new createjs.Shape(
	 *          new createjs.Graphics().beginFill("#999999")
	 *              .drawCircle(30,30,30));
	 *      var child2 = new createjs.Shape(
	 *          new createjs.Graphics().beginFill("#5a9cfb")
	 *              .drawCircle(30,30,30));
	 *
	 *      mc.timeline.addTween(
	 *          createjs.Tween.get(child1)
	 *              .to({x:0}).to({x:60}, 50).to({x:0}, 50));
	 *      mc.timeline.addTween(
	 *          createjs.Tween.get(child2)
	 *              .to({x:60}).to({x:0}, 50).to({x:60}, 50));
	 *
	 *      mc.gotoAndPlay("start");
	 *
	 * It is recommended to use <code>tween.to()</code> to animate and set properties (use no duration to have it set
	 * immediately), and the <code>tween.wait()</code> method to create delays between animations. Note that using the
	 * <code>tween.set()</code> method to affect properties will likely not provide the desired result.
	 *
	 * @class MovieClip
	 * @main MovieClip
	 * @extends Container
	 * @constructor
	 * @param {String} [mode=independent] Initial value for the mode property. One of {{#crossLink "MovieClip/INDEPENDENT:property"}}{{/crossLink}},
	 * {{#crossLink "MovieClip/SINGLE_FRAME:property"}}{{/crossLink}}, or {{#crossLink "MovieClip/SYNCHED:property"}}{{/crossLink}}.
	 * The default is {{#crossLink "MovieClip/INDEPENDENT:property"}}{{/crossLink}}.
	 * @param {Number} [startPosition=0] Initial value for the {{#crossLink "MovieClip/startPosition:property"}}{{/crossLink}}
	 * property.
	 * @param {Boolean} [loop=true] Initial value for the {{#crossLink "MovieClip/loop:property"}}{{/crossLink}}
	 * property. The default is `true`.
	 * @param {Object} [labels=null] A hash of labels to pass to the {{#crossLink "MovieClip/timeline:property"}}{{/crossLink}}
	 * instance associated with this MovieClip. Labels only need to be passed if they need to be used.
	 **/
	function MovieClip(mode, startPosition, loop, labels) {
		this.Container_constructor();
		!MovieClip.inited&&MovieClip.init(); // static init
		
		
	// public properties:
		/**
		 * Controls how this MovieClip advances its time. Must be one of 0 (INDEPENDENT), 1 (SINGLE_FRAME), or 2 (SYNCHED).
		 * See each constant for a description of the behaviour.
		 * @property mode
		 * @type String
		 * @default null
		 **/
		this.mode = mode||MovieClip.INDEPENDENT;
	
		/**
		 * Specifies what the first frame to play in this movieclip, or the only frame to display if mode is SINGLE_FRAME.
		 * @property startPosition
		 * @type Number
		 * @default 0
		 */
		this.startPosition = startPosition || 0;
	
		/**
		 * Indicates whether this MovieClip should loop when it reaches the end of its timeline.
		 * @property loop
		 * @type Boolean
		 * @default true
		 */
		this.loop = loop;
	
		/**
		 * The current frame of the movieclip.
		 * @property currentFrame
		 * @type Number
		 * @default 0
		 * @readonly
		 */
		this.currentFrame = 0;
	
		/**
		 * The TweenJS Timeline that is associated with this MovieClip. This is created automatically when the MovieClip
		 * instance is initialized. Animations are created by adding <a href="http://tweenjs.com">TweenJS</a> Tween
		 * instances to the timeline.
		 *
		 * <h4>Example</h4>
		 *
		 *      var tween = createjs.Tween.get(target).to({x:0}).to({x:100}, 30);
		 *      var mc = new createjs.MovieClip();
		 *      mc.timeline.addTween(tween);
		 *
		 * Elements can be added and removed from the timeline by toggling an "_off" property
		 * using the <code>tweenInstance.to()</code> method. Note that using <code>Tween.set</code> is not recommended to
		 * create MovieClip animations. The following example will toggle the target off on frame 0, and then back on for
		 * frame 1. You can use the "visible" property to achieve the same effect.
		 *
		 *      var tween = createjs.Tween.get(target).to({_off:false})
		 *          .wait(1).to({_off:true})
		 *          .wait(1).to({_off:false});
		 *
		 * @property timeline
		 * @type Timeline
		 * @default null
		 */
		this.timeline = new createjs.Timeline(null, labels, {paused:true, position:startPosition, useTicks:true});
	
		/**
		 * If true, the MovieClip's position will not advance when ticked.
		 * @property paused
		 * @type Boolean
		 * @default false
		 */
		this.paused = false;
	
		/**
		 * If true, actions in this MovieClip's tweens will be run when the playhead advances.
		 * @property actionsEnabled
		 * @type Boolean
		 * @default true
		 */
		this.actionsEnabled = true;
	
		/**
		 * If true, the MovieClip will automatically be reset to its first frame whenever the timeline adds
		 * it back onto the display list. This only applies to MovieClip instances with mode=INDEPENDENT.
		 * <br><br>
		 * For example, if you had a character animation with a "body" child MovieClip instance
		 * with different costumes on each frame, you could set body.autoReset = false, so that
		 * you can manually change the frame it is on, without worrying that it will be reset
		 * automatically.
		 * @property autoReset
		 * @type Boolean
		 * @default true
		 */
		this.autoReset = true;
		
		/**
		 * An array of bounds for each frame in the MovieClip. This is mainly intended for tool output.
		 * @property frameBounds
		 * @type Array
		 * @default null
		 */
		this.frameBounds = this.frameBounds||null; // TODO: Deprecated. This is for backwards support of FlashCC
		
		/**
		 * By default MovieClip instances advance one frame per tick. Specifying a framerate for the MovieClip
		 * will cause it to advance based on elapsed time between ticks as appropriate to maintain the target
		 * framerate.
		 *
		 * For example, if a MovieClip with a framerate of 10 is placed on a Stage being updated at 40fps, then the MovieClip will
		 * advance roughly one frame every 4 ticks. This will not be exact, because the time between each tick will
		 * vary slightly between frames.
		 *
		 * This feature is dependent on the tick event object (or an object with an appropriate "delta" property) being
		 * passed into {{#crossLink "Stage/update"}}{{/crossLink}}.
		 * @property framerate
		 * @type {Number}
		 * @default null
		 **/
		this.framerate = null;
		
		
	// private properties:
		/**
		 * @property _synchOffset
		 * @type Number
		 * @default 0
		 * @private
		 */
		this._synchOffset = 0;
	
		/**
		 * @property _prevPos
		 * @type Number
		 * @default -1
		 * @private
		 */
		this._prevPos = -1; // TODO: evaluate using a ._reset Boolean prop instead of -1.
	
		/**
		 * @property _prevPosition
		 * @type Number
		 * @default 0
		 * @private
		 */
		this._prevPosition = 0;
	
		/**
		 * The time remaining from the previous tick, only applicable when .framerate is set.
		 * @property _t
		 * @type Number
		 * @private
		 */
		this._t = 0;
	
		/**
		 * List of display objects that are actively being managed by the MovieClip.
		 * @property _managed
		 * @type Object
		 * @private
		 */
		this._managed = {};
	}
	var p = createjs.extend(MovieClip, createjs.Container);


// constants:
	/**
	 * The MovieClip will advance independently of its parent, even if its parent is paused.
	 * This is the default mode.
	 * @property INDEPENDENT
	 * @static
	 * @type String
	 * @default "independent"
	 * @readonly
	 **/
	MovieClip.INDEPENDENT = "independent";

	/**
	 * The MovieClip will only display a single frame (as determined by the startPosition property).
	 * @property SINGLE_FRAME
	 * @static
	 * @type String
	 * @default "single"
	 * @readonly
	 **/
	MovieClip.SINGLE_FRAME = "single";

	/**
	 * The MovieClip will be advanced only when its parent advances and will be synched to the position of
	 * the parent MovieClip.
	 * @property SYNCHED
	 * @static
	 * @type String
	 * @default "synched"
	 * @readonly
	 **/
	MovieClip.SYNCHED = "synched";
	
	
// static properties:
	MovieClip.inited = false;
	
	
// static methods:
	MovieClip.init = function() {
		if (MovieClip.inited) { return; }
		// plugins introduce some overhead to Tween, so we only install this if an MC is instantiated.
		MovieClipPlugin.install();
		MovieClip.inited = true;
	};
	
	
// getter / setters:
	/**
	 * Use the {{#crossLink "MovieClip/labels:property"}}{{/crossLink}} property instead.
	 * @method getLabels
	 * @return {Array}
	 * @deprecated
	 **/
	p.getLabels = function() {
		return this.timeline.getLabels();
	};
	
	/**
	 * Use the {{#crossLink "MovieClip/currentLabel:property"}}{{/crossLink}} property instead.
	 * @method getCurrentLabel
	 * @return {String}
	 * @deprecated
	 **/
	p.getCurrentLabel = function() {
		this._updateTimeline();
		return this.timeline.getCurrentLabel();
	};
	
	/**
	 * Use the {{#crossLink "MovieClip/duration:property"}}{{/crossLink}} property instead.
	 * @method getDuration
	 * @return {Number}
	 * @protected
	 **/
	p.getDuration = function() {
		return this.timeline.duration;
	};

	/**
	 * Returns an array of objects with label and position (aka frame) properties, sorted by position.
	 * Shortcut to TweenJS: Timeline.getLabels();
	 * @property labels
	 * @type {Array}
	 * @readonly
	 **/
	
	/**
	 * Returns the name of the label on or immediately before the current frame. See TweenJS: Timeline.getCurrentLabel()
	 * for more information.
	 * @property currentLabel
	 * @type {String}
	 * @readonly
	 **/
	
	/**
	 * Returns the duration of this MovieClip in seconds or ticks. Identical to {{#crossLink "MovieClip/duration:property"}}{{/crossLink}}
	 * and provided for Flash API compatibility.
	 * @property totalFrames
	 * @type {Number}
	 * @readonly
	 **/
	
	/**
	 * Returns the duration of this MovieClip in seconds or ticks.
	 * @property duration
	 * @type {Number}
	 * @readonly
	 **/
	try {
		Object.defineProperties(p, {
			labels: { get: p.getLabels },
			currentLabel: { get: p.getCurrentLabel },
			totalFrames: { get: p.getDuration },
			duration: { get: p.getDuration }
		});
	} catch (e) {}


// public methods:
	/**
	 * Constructor alias for backwards compatibility. This method will be removed in future versions.
	 * Subclasses should be updated to use {{#crossLink "Utility Methods/extends"}}{{/crossLink}}.
	 * @method initialize
	 * @deprecated in favour of `createjs.promote()`
	 **/
	p.initialize = MovieClip; // TODO: Deprecated. This is for backwards support of FlashCC

	/**
	 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
	 * This does not account for whether it would be visible within the boundaries of the stage.
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method isVisible
	 * @return {Boolean} Boolean indicating whether the display object would be visible if drawn to a canvas
	 **/
	p.isVisible = function() {
		// children are placed in draw, so we can't determine if we have content.
		return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0);
	};

	/**
	 * Draws the display object into the specified context ignoring its visible, alpha, shadow, and transform.
	 * Returns true if the draw was handled (useful for overriding functionality).
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method draw
	 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
	 * @param {Boolean} ignoreCache Indicates whether the draw operation should ignore any current cache.
	 * For example, used for drawing the cache (to prevent it from simply drawing an existing cache back
	 * into itself).
	 **/
	p.draw = function(ctx, ignoreCache) {
		// draw to cache first:
		if (this.DisplayObject_draw(ctx, ignoreCache)) { return true; }
		this._updateTimeline();
		this.Container_draw(ctx, ignoreCache);
		return true;
	};
	
	/**
	 * Sets paused to false.
	 * @method play
	 **/
	p.play = function() {
		this.paused = false;
	};
	
	/**
	 * Sets paused to true.
	 * @method stop
	 **/
	p.stop = function() {
		this.paused = true;
	};
	
	/**
	 * Advances this movie clip to the specified position or label and sets paused to false.
	 * @method gotoAndPlay
	 * @param {String|Number} positionOrLabel The animation name or frame number to go to.
	 **/
	p.gotoAndPlay = function(positionOrLabel) {
		this.paused = false;
		this._goto(positionOrLabel);
	};
	
	/**
	 * Advances this movie clip to the specified position or label and sets paused to true.
	 * @method gotoAndStop
	 * @param {String|Number} positionOrLabel The animation or frame name to go to.
	 **/
	p.gotoAndStop = function(positionOrLabel) {
		this.paused = true;
		this._goto(positionOrLabel);
	};
	
	/**
	 * Advances the playhead. This occurs automatically each tick by default.
	 * @param [time] {Number} The amount of time in ms to advance by. Only applicable if framerate is set.
	 * @method advance
	*/
	p.advance = function(time) {
		// TODO: should we worry at all about clips who change their own modes via frame scripts?
		var independent = MovieClip.INDEPENDENT;
		if (this.mode != independent) { return; }
		
		var o=this, fps = o.framerate;
		while ((o = o.parent) && fps == null) {
			if (o.mode == independent) { fps = o._framerate; }
		}
		this._framerate = fps;
		
		var t = (fps != null && fps != -1 && time != null) ? time/(1000/fps) + this._t : 1;
		var frames = t|0;
		this._t = t-frames; // leftover time
		
		while (!this.paused && frames--) {
			this._prevPosition = (this._prevPos < 0) ? 0 : this._prevPosition+1;
			this._updateTimeline();
		}
	};
	
	/**
	 * MovieClip instances cannot be cloned.
	 * @method clone
	 **/
	p.clone = function() {
		// TODO: add support for this? Need to clone the Timeline & retarget tweens - pretty complex.
		throw("MovieClip cannot be cloned.")
	};
	
	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[MovieClip (name="+  this.name +")]";
	};


// private methods:
	/**
	 * @method _tick
	 * @param {Object} evtObj An event object that will be dispatched to all tick listeners. This object is reused between dispatchers to reduce construction & GC costs.
	 * function.
	 * @protected
	 **/
	p._tick = function(evtObj) {
		this.advance(evtObj&&evtObj.delta);
		this.Container__tick(evtObj);
	};
	
	/**
	 * @method _goto
	 * @param {String|Number} positionOrLabel The animation name or frame number to go to.
	 * @protected
	 **/
	p._goto = function(positionOrLabel) {
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos == null) { return; }
		// prevent _updateTimeline from overwriting the new position because of a reset:
		if (this._prevPos == -1) { this._prevPos = NaN; }
		this._prevPosition = pos;
		this._t = 0;
		this._updateTimeline();
	};
	
	/**
	 * @method _reset
	 * @private
	 **/
	p._reset = function() {
		this._prevPos = -1;
		this._t = this.currentFrame = 0;
		this.paused = false;
	};
	
	/**
	 * @method _updateTimeline
	 * @protected
	 **/
	p._updateTimeline = function() {
		var tl = this.timeline;
		var synched = this.mode != MovieClip.INDEPENDENT;
		tl.loop = (this.loop==null) ? true : this.loop;
		
		var pos = synched ? this.startPosition + (this.mode==MovieClip.SINGLE_FRAME?0:this._synchOffset) : (this._prevPos < 0 ? 0 : this._prevPosition);
		var mode = synched || !this.actionsEnabled ? createjs.Tween.NONE : null;
		
		// pre-assign currentFrame so it is available to frame scripts:
		this.currentFrame = tl._calcPosition(pos);
		
		// update timeline position, ignoring actions if this is a graphic.
		tl.setPosition(pos, mode);

		this._prevPosition = tl._prevPosition;
		if (this._prevPos == tl._prevPos) { return; }
		this.currentFrame = this._prevPos = tl._prevPos;

		for (var n in this._managed) { this._managed[n] = 1; }

		var tweens = tl._tweens;
		for (var i=0, l=tweens.length; i<l; i++) {
			var tween = tweens[i];
			var target = tween._target;
			if (target == this || tween.passive) { continue; } // TODO: this assumes actions tween has this as the target. Valid?
			var offset = tween._stepPosition;

			if (target instanceof createjs.DisplayObject) {
				// motion tween.
				this._addManagedChild(target, offset);
			} else {
				// state tween.
				this._setState(target.state, offset);
			}
		}

		var kids = this.children;
		for (i=kids.length-1; i>=0; i--) {
			var id = kids[i].id;
			if (this._managed[id] == 1) {
				this.removeChildAt(i);
				delete(this._managed[id]);
			}
		}
	};

	/**
	 * @method _setState
	 * @param {Array} state
	 * @param {Number} offset
	 * @protected
	 **/
	p._setState = function(state, offset) {
		if (!state) { return; }
		for (var i=state.length-1;i>=0;i--) {
			var o = state[i];
			var target = o.t;
			var props = o.p;
			for (var n in props) { target[n] = props[n]; }
			this._addManagedChild(target, offset);
		}
	};

	/**
	 * Adds a child to the timeline, and sets it up as a managed child.
	 * @method _addManagedChild
	 * @param {MovieClip} child The child MovieClip to manage
	 * @param {Number} offset
	 * @private
	 **/
	p._addManagedChild = function(child, offset) {
		if (child._off) { return; }
		this.addChildAt(child,0);

		if (child instanceof MovieClip) {
			child._synchOffset = offset;
			// TODO: this does not precisely match Flash. Flash loses track of the clip if it is renamed or removed from the timeline, which causes it to reset.
			if (child.mode == MovieClip.INDEPENDENT && child.autoReset && !this._managed[child.id]) { child._reset(); }
		}
		this._managed[child.id] = 2;
	};
	
	/**
	 * @method _getBounds
	 * @param {Matrix2D} matrix
	 * @param {Boolean} ignoreTransform
	 * @return {Rectangle}
	 * @protected
	 **/
	p._getBounds = function(matrix, ignoreTransform) {
		var bounds = this.DisplayObject_getBounds();
		if (!bounds) {
			this._updateTimeline();
			if (this.frameBounds) { bounds = this._rectangle.copy(this.frameBounds[this.currentFrame]); }
		}
		if (bounds) { return this._transformBounds(bounds, matrix, ignoreTransform); }
		return this.Container__getBounds(matrix, ignoreTransform);
	};


	createjs.MovieClip = createjs.promote(MovieClip, "Container");



// MovieClipPlugin for TweenJS:
	/**
	 * This plugin works with <a href="http://tweenjs.com" target="_blank">TweenJS</a> to prevent the startPosition
	 * property from tweening.
	 * @private
	 * @class MovieClipPlugin
	 * @constructor
	 **/
	function MovieClipPlugin() {
		throw("MovieClipPlugin cannot be instantiated.")
	}
	
	/**
	 * @method priority
	 * @private
	 **/
	MovieClipPlugin.priority = 100; // very high priority, should run first

	/**
	 * @method install
	 * @private
	 **/
	MovieClipPlugin.install = function() {
		createjs.Tween.installPlugin(MovieClipPlugin, ["startPosition"]);
	};
	
	/**
	 * @method init
	 * @param {Tween} tween
	 * @param {String} prop
	 * @param {String|Number|Boolean} value
	 * @private
	 **/
	MovieClipPlugin.init = function(tween, prop, value) {
		return value;
	};
	
	/**
	 * @method step
	 * @private
	 **/
	MovieClipPlugin.step = function() {
		// unused.
	};

	/**
	 * @method tween
	 * @param {Tween} tween
	 * @param {String} prop
	 * @param {String | Number | Boolean} value
	 * @param {Array} startValues
	 * @param {Array} endValues
	 * @param {Number} ratio
	 * @param {Object} wait
	 * @param {Object} end
	 * @return {*}
	 */
	MovieClipPlugin.tween = function(tween, prop, value, startValues, endValues, ratio, wait, end) {
		if (!(tween.target instanceof MovieClip)) { return value; }
		return (ratio == 1 ? endValues[prop] : startValues[prop]);
	};

}());

//##############################################################################
// SpriteSheetUtils.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";
	
	
// constructor:
	/**
	 * The SpriteSheetUtils class is a collection of static methods for working with {{#crossLink "SpriteSheet"}}{{/crossLink}}s.
	 * A sprite sheet is a series of images (usually animation frames) combined into a single image on a regular grid. For
	 * example, an animation consisting of 8 100x100 images could be combined into a 400x200 sprite sheet (4 frames across
	 * by 2 high). The SpriteSheetUtils class uses a static interface and should not be instantiated.
	 * @class SpriteSheetUtils
	 * @static
	 **/
	function SpriteSheetUtils() {
		throw "SpriteSheetUtils cannot be instantiated";
	}


// private static properties:
	/**
	 * @property _workingCanvas
	 * @static
	 * @type HTMLCanvasElement | Object
	 * @protected
	*/
	/**
	 * @property _workingContext
	 * @static
	 * @type CanvasRenderingContext2D
	 * @protected
	*/
	var canvas = (createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"));
	if (canvas.getContext) {
		SpriteSheetUtils._workingCanvas = canvas;
		SpriteSheetUtils._workingContext = canvas.getContext("2d");
		canvas.width = canvas.height = 1;
	}


// public static methods:
	/**
	 * <b>This is an experimental method, and may be buggy. Please report issues.</b><br/><br/>
	 * Extends the existing sprite sheet by flipping the original frames horizontally, vertically, or both,
	 * and adding appropriate animation & frame data. The flipped animations will have a suffix added to their names
	 * (_h, _v, _hv as appropriate). Make sure the sprite sheet images are fully loaded before using this method.
	 * <br/><br/>
	 * For example:<br/>
	 * SpriteSheetUtils.addFlippedFrames(mySpriteSheet, true, true);
	 * The above would add frames that are flipped horizontally AND frames that are flipped vertically.
	 * <br/><br/>
	 * Note that you can also flip any display object by setting its scaleX or scaleY to a negative value. On some
	 * browsers (especially those without hardware accelerated canvas) this can result in slightly degraded performance,
	 * which is why addFlippedFrames is available.
	 * @method addFlippedFrames
	 * @static
	 * @param {SpriteSheet} spriteSheet
	 * @param {Boolean} horizontal If true, horizontally flipped frames will be added.
	 * @param {Boolean} vertical If true, vertically flipped frames will be added.
	 * @param {Boolean} both If true, frames that are flipped both horizontally and vertically will be added.
	 * @deprecated Modern browsers perform better when flipping via a transform (ex. scaleX=-1) rendering this obsolete.
	 **/
	SpriteSheetUtils.addFlippedFrames = function(spriteSheet, horizontal, vertical, both) {
		if (!horizontal && !vertical && !both) { return; }

		var count = 0;
		if (horizontal) { SpriteSheetUtils._flip(spriteSheet,++count,true,false); }
		if (vertical) { SpriteSheetUtils._flip(spriteSheet,++count,false,true); }
		if (both) { SpriteSheetUtils._flip(spriteSheet,++count,true,true); }
	};

	/**
	 * Returns a single frame of the specified sprite sheet as a new PNG image. An example of when this may be useful is
	 * to use a spritesheet frame as the source for a bitmap fill.
	 *
	 * <strong>WARNING:</strong> In almost all cases it is better to display a single frame using a {{#crossLink "Sprite"}}{{/crossLink}}
	 * with a {{#crossLink "Sprite/gotoAndStop"}}{{/crossLink}} call than it is to slice out a frame using this
	 * method and display it with a Bitmap instance. You can also crop an image using the {{#crossLink "Bitmap/sourceRect"}}{{/crossLink}}
	 * property of {{#crossLink "Bitmap"}}{{/crossLink}}.
	 *
	 * The extractFrame method may cause cross-domain warnings since it accesses pixels directly on the canvas.
	 * @method extractFrame
	 * @static
	 * @param {SpriteSheet} spriteSheet The SpriteSheet instance to extract a frame from.
	 * @param {Number|String} frameOrAnimation The frame number or animation name to extract. If an animation
	 * name is specified, only the first frame of the animation will be extracted.
	 * @return {HTMLImageElement} a single frame of the specified sprite sheet as a new PNG image.
	*/
	SpriteSheetUtils.extractFrame = function(spriteSheet, frameOrAnimation) {
		if (isNaN(frameOrAnimation)) {
			frameOrAnimation = spriteSheet.getAnimation(frameOrAnimation).frames[0];
		}
		var data = spriteSheet.getFrame(frameOrAnimation);
		if (!data) { return null; }
		var r = data.rect;
		var canvas = SpriteSheetUtils._workingCanvas;
		canvas.width = r.width;
		canvas.height = r.height;
		SpriteSheetUtils._workingContext.drawImage(data.image, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height);
		var img = document.createElement("img");
		img.src = canvas.toDataURL("image/png");
		return img;
	};

	/**
	 * Merges the rgb channels of one image with the alpha channel of another. This can be used to combine a compressed
	 * JPEG image containing color data with a PNG32 monochromatic image containing alpha data. With certain types of
	 * images (those with detail that lend itself to JPEG compression) this can provide significant file size savings
	 * versus a single RGBA PNG32. This method is very fast (generally on the order of 1-2 ms to run).
	 * @method mergeAlpha
	 * @static
	 * @param {HTMLImageElement} rbgImage The image (or canvas) containing the RGB channels to use.
	 * @param {HTMLImageElement} alphaImage The image (or canvas) containing the alpha channel to use.
	 * @param {HTMLCanvasElement} canvas Optional. If specified, this canvas will be used and returned. If not, a new canvas will be created.
	 * @return {HTMLCanvasElement} A canvas with the combined image data. This can be used as a source for Bitmap or SpriteSheet.
	 * @deprecated Tools such as ImageAlpha generally provide better results. This will be moved to sandbox in the future.
	*/
	SpriteSheetUtils.mergeAlpha = function(rgbImage, alphaImage, canvas) {
		if (!canvas) { canvas = createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"); }
		canvas.width = Math.max(alphaImage.width, rgbImage.width);
		canvas.height = Math.max(alphaImage.height, rgbImage.height);
		var ctx = canvas.getContext("2d");
		ctx.save();
		ctx.drawImage(rgbImage,0,0);
		ctx.globalCompositeOperation = "destination-in";
		ctx.drawImage(alphaImage,0,0);
		ctx.restore();
		return canvas;
	};


// private static methods:
	SpriteSheetUtils._flip = function(spriteSheet, count, h, v) {
		var imgs = spriteSheet._images;
		var canvas = SpriteSheetUtils._workingCanvas;
		var ctx = SpriteSheetUtils._workingContext;
		var il = imgs.length/count;
		for (var i=0;i<il;i++) {
			var src = imgs[i];
			src.__tmp = i; // a bit hacky, but faster than doing indexOf below.
			ctx.setTransform(1,0,0,1,0,0);
			ctx.clearRect(0,0,canvas.width+1,canvas.height+1);
			canvas.width = src.width;
			canvas.height = src.height;
			ctx.setTransform(h?-1:1, 0, 0, v?-1:1, h?src.width:0, v?src.height:0);
			ctx.drawImage(src,0,0);
			var img = document.createElement("img");
			img.src = canvas.toDataURL("image/png");
			// work around a strange bug in Safari:
			img.width = src.width;
			img.height = src.height;
			imgs.push(img);
		}

		var frames = spriteSheet._frames;
		var fl = frames.length/count;
		for (i=0;i<fl;i++) {
			src = frames[i];
			var rect = src.rect.clone();
			img = imgs[src.image.__tmp+il*count];

			var frame = {image:img,rect:rect,regX:src.regX,regY:src.regY};
			if (h) {
				rect.x = img.width-rect.x-rect.width; // update rect
				frame.regX = rect.width-src.regX; // update registration point
			}
			if (v) {
				rect.y = img.height-rect.y-rect.height;  // update rect
				frame.regY = rect.height-src.regY; // update registration point
			}
			frames.push(frame);
		}

		var sfx = "_"+(h?"h":"")+(v?"v":"");
		var names = spriteSheet._animations;
		var data = spriteSheet._data;
		var al = names.length/count;
		for (i=0;i<al;i++) {
			var name = names[i];
			src = data[name];
			var anim = {name:name+sfx,speed:src.speed,next:src.next,frames:[]};
			if (src.next) { anim.next += sfx; }
			frames = src.frames;
			for (var j=0,l=frames.length;j<l;j++) {
				anim.frames.push(frames[j]+fl*count);
			}
			data[anim.name] = anim;
			names.push(anim.name);
		}
	};


	createjs.SpriteSheetUtils = SpriteSheetUtils;
}());

//##############################################################################
// SpriteSheetBuilder.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * The SpriteSheetBuilder allows you to generate {{#crossLink "SpriteSheet"}}{{/crossLink}} instances at run time
	 * from any display object. This can allow you to maintain your assets as vector graphics (for low file size), and
	 * render them at run time as SpriteSheets for better performance.
	 *
	 * SpriteSheets can be built either synchronously, or asynchronously, so that large SpriteSheets can be generated
	 * without locking the UI.
	 *
	 * Note that the "images" used in the generated SpriteSheet are actually canvas elements, and that they will be
	 * sized to the nearest power of 2 up to the value of {{#crossLink "SpriteSheetBuilder/maxWidth:property"}}{{/crossLink}}
	 * or {{#crossLink "SpriteSheetBuilder/maxHeight:property"}}{{/crossLink}}.
	 * @class SpriteSheetBuilder
	 * @param {Number} [framerate=0] The {{#crossLink "SpriteSheet/framerate:property"}}{{/crossLink}} of
	 * {{#crossLink "SpriteSheet"}}{{/crossLink}} instances that are created.
	 * @extends EventDispatcher
	 * @constructor
	 **/
	function SpriteSheetBuilder(framerate) {
		this.EventDispatcher_constructor();
		
	// public properties:
		/**
		 * The maximum width for the images (not individual frames) in the generated SpriteSheet. It is recommended to
		 * use a power of 2 for this value (ex. 1024, 2048, 4096). If the frames cannot all fit within the max
		 * dimensions, then additional images will be created as needed.
		 * @property maxWidth
		 * @type Number
		 * @default 2048
		*/
		this.maxWidth = 2048;
	
		/**
		 * The maximum height for the images (not individual frames) in the generated SpriteSheet. It is recommended to
		 * use a power of 2 for this value (ex. 1024, 2048, 4096). If the frames cannot all fit within the max
		 * dimensions, then additional images will be created as needed.
		 * @property maxHeight
		 * @type Number
		 * @default 2048
		 **/
		this.maxHeight = 2048;
	
		/**
		 * The SpriteSheet that was generated. This will be null before a build is completed successfully.
		 * @property spriteSheet
		 * @type SpriteSheet
		 **/
		this.spriteSheet = null;
	
		/**
		 * The scale to apply when drawing all frames to the SpriteSheet. This is multiplied against any scale specified
		 * in the addFrame call. This can be used, for example, to generate a SpriteSheet at run time that is tailored
		 * to the a specific device resolution (ex. tablet vs mobile).
		 * @property scale
		 * @type Number
		 * @default 1
		 **/
		this.scale = 1;
	
		/**
		* The padding to use between frames. This is helpful to preserve antialiasing on drawn vector content.
		* @property padding
		* @type Number
		* @default 1
		**/
		this.padding = 1;
	
		/**
		 * A number from 0.01 to 0.99 that indicates what percentage of time the builder can use. This can be
		 * thought of as the number of seconds per second the builder will use. For example, with a timeSlice value of 0.3,
		 * the builder will run 20 times per second, using approximately 15ms per build (30% of available time, or 0.3s per second).
		 * Defaults to 0.3.
		 * @property timeSlice
		 * @type Number
		 * @default 0.3
		 **/
		this.timeSlice = 0.3;
	
		/**
		 * A value between 0 and 1 that indicates the progress of a build, or -1 if a build has not
		 * been initiated.
		 * @property progress
		 * @type Number
		 * @default -1
		 * @readonly
		 */
		this.progress = -1;

		/**
		 * A {{#crossLink "SpriteSheet/framerate:property"}}{{/crossLink}} value that will be passed to new {{#crossLink "SpriteSheet"}}{{/crossLink}} instances that are
		 * created. If no framerate is specified (or it is 0), then SpriteSheets will use the {{#crossLink "Ticker"}}{{/crossLink}}
		 * framerate.
		 * @property framerate
		 * @type Number
		 * @default 0
		 */
		this.framerate = framerate || 0;
	
	
	// private properties:
		/**
		 * @property _frames
		 * @protected
		 * @type Array
		 **/
		this._frames = [];
	
		/**
		 * @property _animations
		 * @protected
		 * @type Array
		 **/
		this._animations = {};
	
		/**
		 * @property _data
		 * @protected
		 * @type Array
		 **/
		this._data = null;
	
		/**
		 * @property _nextFrameIndex
		 * @protected
		 * @type Number
		 **/
		this._nextFrameIndex = 0;
	
		/**
		 * @property _index
		 * @protected
		 * @type Number
		 **/
		this._index = 0;
	
		/**
		 * @property _timerID
		 * @protected
		 * @type Number
		 **/
		this._timerID = null;
	
		/**
		 * @property _scale
		 * @protected
		 * @type Number
		 **/
		this._scale = 1;
	}
	var p = createjs.extend(SpriteSheetBuilder, createjs.EventDispatcher);

	/**
	 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
	 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
	 * for details.
	 *
	 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
	 *
	 * @method initialize
	 * @protected
	 * @deprecated
	 */
	// p.initialize = function() {}; // searchable for devs wondering where it is.


// constants:
	SpriteSheetBuilder.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions";
	SpriteSheetBuilder.ERR_RUNNING = "a build is already running";

// events:
	/**
	 * Dispatched when a build completes.
	 * @event complete
	 * @param {Object} target The object that dispatched the event.
	 * @param {String} type The event type.
	 * @since 0.6.0
	 */

	/**
	 * Dispatched when an asynchronous build has progress.
	 * @event progress
	 * @param {Object} target The object that dispatched the event.
	 * @param {String} type The event type.
	 * @param {Number} progress The current progress value (0-1).
	 * @since 0.6.0
	 */


// public methods:
	/**
	 * Adds a frame to the {{#crossLink "SpriteSheet"}}{{/crossLink}}. Note that the frame will not be drawn until you
	 * call {{#crossLink "SpriteSheetBuilder/build"}}{{/crossLink}} method. The optional setup params allow you to have
	 * a function run immediately before the draw occurs. For example, this allows you to add a single source multiple
	 * times, but manipulate it or its children to change it to generate different frames.
	 *
	 * Note that the source's transformations (x, y, scale, rotate, alpha) will be ignored, except for regX/Y. To apply
	 * transforms to a source object and have them captured in the SpriteSheet, simply place it into a {{#crossLink "Container"}}{{/crossLink}}
	 * and pass in the Container as the source.
	 * @method addFrame
	 * @param {DisplayObject} source The source {{#crossLink "DisplayObject"}}{{/crossLink}}  to draw as the frame.
	 * @param {Rectangle} [sourceRect] A {{#crossLink "Rectangle"}}{{/crossLink}} defining the portion of the
	 * source to draw to the frame. If not specified, it will look for a `getBounds` method, bounds property, or
	 * `nominalBounds` property on the source to use. If one is not found, the frame will be skipped.
	 * @param {Number} [scale=1] Optional. The scale to draw this frame at. Default is 1.
	 * @param {Function} [setupFunction] A function to call immediately before drawing this frame. It will be called with two parameters: the source, and setupData.
	 * @param {Object} [setupData] Arbitrary setup data to pass to setupFunction as the second parameter.
	 * @return {Number} The index of the frame that was just added, or null if a sourceRect could not be determined.
	 **/
	p.addFrame = function(source, sourceRect, scale, setupFunction, setupData) {
		if (this._data) { throw SpriteSheetBuilder.ERR_RUNNING; }
		var rect = sourceRect||source.bounds||source.nominalBounds;
		if (!rect&&source.getBounds) { rect = source.getBounds(); }
		if (!rect) { return null; }
		scale = scale||1;
		return this._frames.push({source:source, sourceRect:rect, scale:scale, funct:setupFunction, data:setupData, index:this._frames.length, height:rect.height*scale})-1;
	};

	/**
	 * Adds an animation that will be included in the created {{#crossLink "SpriteSheet"}}{{/crossLink}}.
	 * @method addAnimation
	 * @param {String} name The name for the animation.
	 * @param {Array} frames An array of frame indexes that comprise the animation. Ex. [3,6,5] would describe an animation
	 * that played frame indexes 3, 6, and 5 in that order.
	 * @param {String} [next] Specifies the name of the animation to continue to after this animation ends. You can
	 * also pass false to have the animation stop when it ends. By default it will loop to the start of the same animation.
	 * @param {Number} [speed] Specifies a frame advance speed for this animation. For example, a value of 0.5 would
	 * cause the animation to advance every second tick. Note that earlier versions used `frequency` instead, which had
	 * the opposite effect.
	 **/
	p.addAnimation = function(name, frames, next, speed) {
		if (this._data) { throw SpriteSheetBuilder.ERR_RUNNING; }
		this._animations[name] = {frames:frames, next:next, speed:speed};
	};

	/**
	 * This will take a {{#crossLink "MovieClip"}}{{/crossLink}} instance, and add its frames and labels to this
	 * builder. Labels will be added as an animation running from the label index to the next label. For example, if
	 * there is a label named "foo" at frame 0 and a label named "bar" at frame 10, in a MovieClip with 15 frames, it
	 * will add an animation named "foo" that runs from frame index 0 to 9, and an animation named "bar" that runs from
	 * frame index 10 to 14.
	 *
	 * Note that this will iterate through the full MovieClip with {{#crossLink "MovieClip/actionsEnabled:property"}}{{/crossLink}}
	 * set to `false`, ending on the last frame.
	 * @method addMovieClip
	 * @param {MovieClip} source The source MovieClip instance to add to the SpriteSheet.
	 * @param {Rectangle} [sourceRect] A {{#crossLink "Rectangle"}}{{/crossLink}} defining the portion of the source to
	 * draw to the frame. If not specified, it will look for a {{#crossLink "DisplayObject/getBounds"}}{{/crossLink}}
	 * method, `frameBounds` Array, `bounds` property, or `nominalBounds` property on the source to use. If one is not
	 * found, the MovieClip will be skipped.
	 * @param {Number} [scale=1] The scale to draw the movie clip at.
	 * @param {Function} [setupFunction] A function to call immediately before drawing each frame. It will be called
	 * with three parameters: the source, setupData, and the frame index.
	 * @param {Object} [setupData] Arbitrary setup data to pass to setupFunction as the second parameter.
	 * @param {Function} [labelFunction] This method will be called for each MovieClip label that is added with four
	 * parameters: the label name, the source MovieClip instance, the starting frame index (in the movieclip timeline)
	 * and the end index. It must return a new name for the label/animation, or `false` to exclude the label.
	 **/
	p.addMovieClip = function(source, sourceRect, scale, setupFunction, setupData, labelFunction) {
		if (this._data) { throw SpriteSheetBuilder.ERR_RUNNING; }
		var rects = source.frameBounds;
		var rect = sourceRect||source.bounds||source.nominalBounds;
		if (!rect&&source.getBounds) { rect = source.getBounds(); }
		if (!rect && !rects) { return; }

		var i, l, baseFrameIndex = this._frames.length;
		var duration = source.timeline.duration;
		for (i=0; i<duration; i++) {
			var r = (rects&&rects[i]) ? rects[i] : rect;
			this.addFrame(source, r, scale, this._setupMovieClipFrame, {i:i, f:setupFunction, d:setupData});
		}
		var labels = source.timeline._labels;
		var lbls = [];
		for (var n in labels) {
			lbls.push({index:labels[n], label:n});
		}
		if (lbls.length) {
			lbls.sort(function(a,b){ return a.index-b.index; });
			for (i=0,l=lbls.length; i<l; i++) {
				var label = lbls[i].label;
				var start = baseFrameIndex+lbls[i].index;
				var end = baseFrameIndex+((i == l-1) ? duration : lbls[i+1].index);
				var frames = [];
				for (var j=start; j<end; j++) { frames.push(j); }
				if (labelFunction) {
					label = labelFunction(label, source, start, end);
					if (!label) { continue; }
				}
				this.addAnimation(label, frames, true); // for now, this loops all animations.
			}
		}
	};

	/**
	 * Builds a {{#crossLink "SpriteSheet"}}{{/crossLink}} instance based on the current frames.
	 * @method build
	 * @return {SpriteSheet} The created SpriteSheet instance, or null if a build is already running or an error
	 * occurred.
	 **/
	p.build = function() {
		if (this._data) { throw SpriteSheetBuilder.ERR_RUNNING; }
		this._startBuild();
		while (this._drawNext()) {}
		this._endBuild();
		return this.spriteSheet;
	};

	/**
	 * Asynchronously builds a {{#crossLink "SpriteSheet"}}{{/crossLink}} instance based on the current frames. It will
	 * run 20 times per second, using an amount of time defined by `timeSlice`. When it is complete it will call the
	 * specified callback.
	 * @method buildAsync
	 * @param {Number} [timeSlice] Sets the timeSlice property on this instance.
	 **/
	p.buildAsync = function(timeSlice) {
		if (this._data) { throw SpriteSheetBuilder.ERR_RUNNING; }
		this.timeSlice = timeSlice;
		this._startBuild();
		var _this = this;
		this._timerID = setTimeout(function() { _this._run(); }, 50-Math.max(0.01, Math.min(0.99, this.timeSlice||0.3))*50);
	};

	/**
	 * Stops the current asynchronous build.
	 * @method stopAsync
	 **/
	p.stopAsync = function() {
		clearTimeout(this._timerID);
		this._data = null;
	};

	/**
	 * SpriteSheetBuilder instances cannot be cloned.
	 * @method clone
	 **/
	p.clone = function() {
		throw("SpriteSheetBuilder cannot be cloned.");
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[SpriteSheetBuilder]";
	};


// private methods:
	/**
	 * @method _startBuild
	 * @protected
	 **/
	p._startBuild = function() {
		var pad = this.padding||0;
		this.progress = 0;
		this.spriteSheet = null;
		this._index = 0;
		this._scale = this.scale;
		var dataFrames = [];
		this._data = {
			images: [],
			frames: dataFrames,
			framerate: this.framerate,
			animations: this._animations // TODO: should we "clone" _animations in case someone adds more animations after a build?
		};

		var frames = this._frames.slice();
		frames.sort(function(a,b) { return (a.height<=b.height) ? -1 : 1; });

		if (frames[frames.length-1].height+pad*2 > this.maxHeight) { throw SpriteSheetBuilder.ERR_DIMENSIONS; }
		var y=0, x=0;
		var img = 0;
		while (frames.length) {
			var o = this._fillRow(frames, y, img, dataFrames, pad);
			if (o.w > x) { x = o.w; }
			y += o.h;
			if (!o.h || !frames.length) {
				var canvas = createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");
				canvas.width = this._getSize(x,this.maxWidth);
				canvas.height = this._getSize(y,this.maxHeight);
				this._data.images[img] = canvas;
				if (!o.h) {
					x=y=0;
					img++;
				}
			}
		}
	};
	
	/**
	 * @method _setupMovieClipFrame
	 * @protected
	 * @return {Number} The width & height of the row.
	 **/
	p._setupMovieClipFrame = function(source, data) {
		var ae = source.actionsEnabled;
		source.actionsEnabled = false;
		source.gotoAndStop(data.i);
		source.actionsEnabled = ae;
		data.f&&data.f(source, data.d, data.i);
	};

	/**
	 * @method _getSize
	 * @protected
	 * @return {Number} The width & height of the row.
	 **/
	p._getSize = function(size,max) {
		var pow = 4;
		while (Math.pow(2,++pow) < size){}
		return Math.min(max,Math.pow(2,pow));
	};

	/**
	 * @method _fillRow
	 * @param {Array} frames
	 * @param {Number} y
	 * @param {HTMLImageElement} img
	 * @param {Object} dataFrames
	 * @param {Number} pad
	 * @protected
	 * @return {Number} The width & height of the row.
	 **/
	p._fillRow = function(frames, y, img, dataFrames, pad) {
		var w = this.maxWidth;
		var maxH = this.maxHeight;
		y += pad;
		var h = maxH-y;
		var x = pad;
		var height = 0;
		for (var i=frames.length-1; i>=0; i--) {
			var frame = frames[i];
			var sc = this._scale*frame.scale;
			var rect = frame.sourceRect;
			var source = frame.source;
			var rx = Math.floor(sc*rect.x-pad);
			var ry = Math.floor(sc*rect.y-pad);
			var rh = Math.ceil(sc*rect.height+pad*2);
			var rw = Math.ceil(sc*rect.width+pad*2);
			if (rw > w) { throw SpriteSheetBuilder.ERR_DIMENSIONS; }
			if (rh > h || x+rw > w) { continue; }
			frame.img = img;
			frame.rect = new createjs.Rectangle(x,y,rw,rh);
			height = height || rh;
			frames.splice(i,1);
			dataFrames[frame.index] = [x,y,rw,rh,img,Math.round(-rx+sc*source.regX-pad),Math.round(-ry+sc*source.regY-pad)];
			x += rw;
		}
		return {w:x, h:height};
	};

	/**
	 * @method _endBuild
	 * @protected
	 **/
	p._endBuild = function() {
		this.spriteSheet = new createjs.SpriteSheet(this._data);
		this._data = null;
		this.progress = 1;
		this.dispatchEvent("complete");
	};

	/**
	 * @method _run
	 * @protected
	 **/
	p._run = function() {
		var ts = Math.max(0.01, Math.min(0.99, this.timeSlice||0.3))*50;
		var t = (new Date()).getTime()+ts;
		var complete = false;
		while (t > (new Date()).getTime()) {
			if (!this._drawNext()) { complete = true; break; }
		}
		if (complete) {
			this._endBuild();
		} else {
			var _this = this;
			this._timerID = setTimeout(function() { _this._run(); }, 50-ts);
		}
		var p = this.progress = this._index/this._frames.length;
		if (this.hasEventListener("progress")) {
			var evt = new createjs.Event("progress");
			evt.progress = p;
			this.dispatchEvent(evt);
		}
	};

	/**
	 * @method _drawNext
	 * @protected
	 * @return Boolean Returns false if this is the last draw.
	 **/
	p._drawNext = function() {
		var frame = this._frames[this._index];
		var sc = frame.scale*this._scale;
		var rect = frame.rect;
		var sourceRect = frame.sourceRect;
		var canvas = this._data.images[frame.img];
		var ctx = canvas.getContext("2d");
		frame.funct&&frame.funct(frame.source, frame.data);
		ctx.save();
		ctx.beginPath();
		ctx.rect(rect.x, rect.y, rect.width, rect.height);
		ctx.clip();
		ctx.translate(Math.ceil(rect.x-sourceRect.x*sc), Math.ceil(rect.y-sourceRect.y*sc));
		ctx.scale(sc,sc);
		frame.source.draw(ctx); // display object will draw itself.
		ctx.restore();
		return (++this._index) < this._frames.length;
	};


	createjs.SpriteSheetBuilder = createjs.promote(SpriteSheetBuilder, "EventDispatcher");
}());

//##############################################################################
// DOMElement.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * <b>This class is still experimental, and more advanced use is likely to be buggy. Please report bugs.</b>
	 *
	 * A DOMElement allows you to associate a HTMLElement with the display list. It will be transformed
	 * within the DOM as though it is child of the {{#crossLink "Container"}}{{/crossLink}} it is added to. However, it is
	 * not rendered to canvas, and as such will retain whatever z-index it has relative to the canvas (ie. it will be
	 * drawn in front of or behind the canvas).
	 *
	 * The position of a DOMElement is relative to their parent node in the DOM. It is recommended that
	 * the DOM Object be added to a div that also contains the canvas so that they share the same position
	 * on the page.
	 *
	 * DOMElement is useful for positioning HTML elements over top of canvas content, and for elements
	 * that you want to display outside the bounds of the canvas. For example, a tooltip with rich HTML
	 * content.
	 *
	 * <h4>Mouse Interaction</h4>
	 *
	 * DOMElement instances are not full EaselJS display objects, and do not participate in EaselJS mouse
	 * events or support methods like hitTest. To get mouse events from a DOMElement, you must instead add handlers to
	 * the htmlElement (note, this does not support EventDispatcher)
	 *
	 *      var domElement = new createjs.DOMElement(htmlElement);
	 *      domElement.htmlElement.onclick = function() {
	 *          console.log("clicked");
	 *      }
	 *
	 * @class DOMElement
	 * @extends DisplayObject
	 * @constructor
	 * @param {HTMLElement} htmlElement A reference or id for the DOM element to manage.
	 */
	function DOMElement(htmlElement) {
		this.DisplayObject_constructor();
		
		if (typeof(htmlElement)=="string") { htmlElement = document.getElementById(htmlElement); }
		this.mouseEnabled = false;
		
		var style = htmlElement.style;
		style.position = "absolute";
		style.transformOrigin = style.WebkitTransformOrigin = style.msTransformOrigin = style.MozTransformOrigin = style.OTransformOrigin = "0% 0%";
		
		
	// public properties:
		/**
		 * The DOM object to manage.
		 * @property htmlElement
		 * @type HTMLElement
		 */
		this.htmlElement = htmlElement;
	
	
	// private properties:
		/**
		 * @property _oldMtx
		 * @type Matrix2D
		 * @protected
		 */
		this._oldProps = null;
	}
	var p = createjs.extend(DOMElement, createjs.DisplayObject);

	// TODO: deprecated
	// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.


// public methods:
	/**
	 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
	 * This does not account for whether it would be visible within the boundaries of the stage.
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method isVisible
	 * @return {Boolean} Boolean indicating whether the display object would be visible if drawn to a canvas
	 */
	p.isVisible = function() {
		return this.htmlElement != null;
	};

	/**
	 * Draws the display object into the specified context ignoring its visible, alpha, shadow, and transform.
	 * Returns true if the draw was handled (useful for overriding functionality).
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method draw
	 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
	 * @param {Boolean} ignoreCache Indicates whether the draw operation should ignore any current cache.
	 * For example, used for drawing the cache (to prevent it from simply drawing an existing cache back
	 * into itself).
	 * @return {Boolean}
	 */
	p.draw = function(ctx, ignoreCache) {
		// this relies on the _tick method because draw isn't called if the parent is not visible.
		// the actual update happens in _handleDrawEnd
		return true;
	};

	/**
	 * Not applicable to DOMElement.
	 * @method cache
	 */
	p.cache = function() {};

	/**
	 * Not applicable to DOMElement.
	 * @method uncache
	 */
	p.uncache = function() {};

	/**
	 * Not applicable to DOMElement.
	 * @method updateCache
	 */
	p.updateCache = function() {};

	/**
	 * Not applicable to DOMElement.
	 * @method hitTest
	 */
	p.hitTest = function() {};

	/**
	 * Not applicable to DOMElement.
	 * @method localToGlobal
	 */
	p.localToGlobal = function() {};

	/**
	 * Not applicable to DOMElement.
	 * @method globalToLocal
	 */
	p.globalToLocal = function() {};

	/**
	 * Not applicable to DOMElement.
	 * @method localToLocal
	 */
	p.localToLocal = function() {};

	/**
	 * DOMElement cannot be cloned. Throws an error.
	 * @method clone
	 */
	p.clone = function() {
		throw("DOMElement cannot be cloned.")
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 */
	p.toString = function() {
		return "[DOMElement (name="+  this.name +")]";
	};

	/**
     * Interaction events should be added to `htmlElement`, and not the DOMElement instance, since DOMElement instances
	 * are not full EaselJS display objects and do not participate in EaselJS mouse events.
	 * @event click
	 */

     /**
     * Interaction events should be added to `htmlElement`, and not the DOMElement instance, since DOMElement instances
 	 * are not full EaselJS display objects and do not participate in EaselJS mouse events.
	 * @event dblClick
	 */

     /**
      * Interaction events should be added to `htmlElement`, and not the DOMElement instance, since DOMElement instances
 	  * are not full EaselJS display objects and do not participate in EaselJS mouse events.
	  * @event mousedown
	  */

     /**
      * The HTMLElement can listen for the mouseover event, not the DOMElement instance.
      * Since DOMElement instances are not full EaselJS display objects and do not participate in EaselJS mouse events.
      * @event mouseover
	  */

     /**
      * Not applicable to DOMElement.
	  * @event tick
	  */


// private methods:
	/**
	 * @method _tick
	 * @param {Object} evtObj An event object that will be dispatched to all tick listeners. This object is reused between dispatchers to reduce construction & GC costs.
	 * function.
	 * @protected
	 */
	p._tick = function(evtObj) {
		var stage = this.getStage();
		stage&&stage.on("drawend", this._handleDrawEnd, this, true);
		this.DisplayObject__tick(evtObj);
	};
	
	/**
	 * @method _handleDrawEnd
	 * @param {Event} evt
	 * @protected
	 */
	p._handleDrawEnd = function(evt) {
		var o = this.htmlElement;
		if (!o) { return; }
		var style = o.style;
		
		var props = this.getConcatenatedDisplayProps(this._props), mtx = props.matrix;
		
		var visibility = props.visible ? "visible" : "hidden";
		if (visibility != style.visibility) { style.visibility = visibility; }
		if (!props.visible) { return; }
		
		var oldProps = this._oldProps, oldMtx = oldProps&&oldProps.matrix;
		var n = 10000; // precision
		
		if (!oldMtx || !oldMtx.equals(mtx)) {
			var str = "matrix(" + (mtx.a*n|0)/n +","+ (mtx.b*n|0)/n +","+ (mtx.c*n|0)/n +","+ (mtx.d*n|0)/n +","+ (mtx.tx+0.5|0);
			style.transform = style.WebkitTransform = style.OTransform = style.msTransform = str +","+ (mtx.ty+0.5|0) +")";
			style.MozTransform = str +"px,"+ (mtx.ty+0.5|0) +"px)";
			if (!oldProps) { oldProps = this._oldProps = new createjs.DisplayProps(true, NaN); }
			oldProps.matrix.copy(mtx);
		}
		
		if (oldProps.alpha != props.alpha) {
			style.opacity = ""+(props.alpha*n|0)/n;
			oldProps.alpha = props.alpha;
		}
	};


	createjs.DOMElement = createjs.promote(DOMElement, "DisplayObject");
}());

//##############################################################################
// Filter.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * Base class that all filters should inherit from. Filters need to be applied to objects that have been cached using
	 * the {{#crossLink "DisplayObject/cache"}}{{/crossLink}} method. If an object changes, please cache it again, or use
	 * {{#crossLink "DisplayObject/updateCache"}}{{/crossLink}}. Note that the filters must be applied before caching.
	 *
	 * <h4>Example</h4>
	 *
	 *      myInstance.filters = [
	 *          new createjs.ColorFilter(0, 0, 0, 1, 255, 0, 0),
	 *          new createjs.BlurFilter(5, 5, 10)
	 *      ];
	 *      myInstance.cache(0,0, 100, 100);
	 *
	 * Note that each filter can implement a {{#crossLink "Filter/getBounds"}}{{/crossLink}} method, which returns the
	 * margins that need to be applied in order to fully display the filter. For example, the {{#crossLink "BlurFilter"}}{{/crossLink}}
	 * will cause an object to feather outwards, resulting in a margin around the shape.
	 *
	 * <h4>EaselJS Filters</h4>
	 * EaselJS comes with a number of pre-built filters:
	 * <ul><li>{{#crossLink "AlphaMapFilter"}}{{/crossLink}} : Map a greyscale image to the alpha channel of a display object</li>
	 *      <li>{{#crossLink "AlphaMaskFilter"}}{{/crossLink}}: Map an image's alpha channel to the alpha channel of a display object</li>
	 *      <li>{{#crossLink "BlurFilter"}}{{/crossLink}}: Apply vertical and horizontal blur to a display object</li>
	 *      <li>{{#crossLink "ColorFilter"}}{{/crossLink}}: Color transform a display object</li>
	 *      <li>{{#crossLink "ColorMatrixFilter"}}{{/crossLink}}: Transform an image using a {{#crossLink "ColorMatrix"}}{{/crossLink}}</li>
	 * </ul>
	 *
	 * @class Filter
	 * @constructor
	 **/
	function Filter() {}
	var p = Filter.prototype;

	/**
	 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
	 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
	 * for details.
	 *
	 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
	 *
	 * @method initialize
	 * @protected
	 * @deprecated
	 */
	// p.initialize = function() {}; // searchable for devs wondering where it is.


// public methods:
	/**
	 * Provides padding values for this filter. That is, how much the filter will extend the visual bounds of an object it is applied to.
	 * @method getBounds
	 * @param {Rectangle} [rect] If specified, the provided Rectangle instance will be expanded by the padding amounts and returned.
	 * @return {Rectangle} If a `rect` param was provided, it is returned. If not, either a new rectangle with the padding values, or null if no padding is required for this filter.
	 **/
	p.getBounds = function(rect) {
		return rect;
	};

	/**
	 * Applies the filter to the specified context.
	 * @method applyFilter
	 * @param {CanvasRenderingContext2D} ctx The 2D context to use as the source.
	 * @param {Number} x The x position to use for the source rect.
	 * @param {Number} y The y position to use for the source rect.
	 * @param {Number} width The width to use for the source rect.
	 * @param {Number} height The height to use for the source rect.
	 * @param {CanvasRenderingContext2D} [targetCtx] The 2D context to draw the result to. Defaults to the context passed to ctx.
	 * @param {Number} [targetX] The x position to draw the result to. Defaults to the value passed to x.
	 * @param {Number} [targetY] The y position to draw the result to. Defaults to the value passed to y.
	 * @return {Boolean} If the filter was applied successfully.
	 **/
	p.applyFilter = function(ctx, x, y, width, height, targetCtx, targetX, targetY) {
		// this is the default behaviour because most filters access pixel data. It is overridden when not needed.
		targetCtx = targetCtx || ctx;
		if (targetX == null) { targetX = x; }
		if (targetY == null) { targetY = y; }
		try {
			var imageData = ctx.getImageData(x, y, width, height);
		} catch (e) {
			return false;
		}
		if (this._applyFilter(imageData)) {
			targetCtx.putImageData(imageData, targetX, targetY);
			return true;
		}
		return false;
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Filter]";
	};

	/**
	 * Returns a clone of this Filter instance.
	 * @method clone
	 * @return {Filter} A clone of the current Filter instance.
	 **/
	p.clone = function() {
		return new Filter();
	};
	
// private methods:
	/**
	 * @method _applyFilter
	 * @param {ImageData} imageData Target ImageData instance.
	 * @return {Boolean}
	 **/
	p._applyFilter = function(imageData) { return true; };


	createjs.Filter = Filter;
}());

//##############################################################################
// BlurFilter.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * Applies a box blur to DisplayObjects. Note that this filter is fairly CPU intensive, particularly if the quality is
	 * set higher than 1.
	 *
	 * <h4>Example</h4>
	 * This example creates a red circle, and then applies a 5 pixel blur to it. It uses the {{#crossLink "Filter/getBounds"}}{{/crossLink}}
	 * method to account for the spread that the blur causes.
	 *
	 *      var shape = new createjs.Shape().set({x:100,y:100});
	 *      shape.graphics.beginFill("#ff0000").drawCircle(0,0,50);
	 *
	 *      var blurFilter = new createjs.BlurFilter(5, 5, 1);
	 *      shape.filters = [blurFilter];
	 *      var bounds = blurFilter.getBounds();
	 *
	 *      shape.cache(-50+bounds.x, -50+bounds.y, 100+bounds.width, 100+bounds.height);
	 *
	 * See {{#crossLink "Filter"}}{{/crossLink}} for an more information on applying filters.
	 * @class BlurFilter
	 * @extends Filter
	 * @constructor
	 * @param {Number} [blurX=0] The horizontal blur radius in pixels.
	 * @param {Number} [blurY=0] The vertical blur radius in pixels.
	 * @param {Number} [quality=1] The number of blur iterations.
	 **/
	function BlurFilter( blurX, blurY, quality) {
		if ( isNaN(blurX) || blurX < 0 ) blurX = 0;
		if ( isNaN(blurY) || blurY < 0 ) blurY = 0;
		if ( isNaN(quality) || quality < 1  ) quality = 1;


		// public properties:
		/**
		 * Horizontal blur radius in pixels
		 * @property blurX
		 * @default 0
		 * @type Number
		 **/
		this.blurX = blurX | 0;

		/**
		 * Vertical blur radius in pixels
		 * @property blurY
		 * @default 0
		 * @type Number
		 **/
		this.blurY = blurY | 0;

		/**
		 * Number of blur iterations. For example, a value of 1 will produce a rough blur. A value of 2 will produce a
		 * smoother blur, but take twice as long to run.
		 * @property quality
		 * @default 1
		 * @type Number
		 **/
		this.quality = quality | 0;
	}
	var p = createjs.extend(BlurFilter, createjs.Filter);

	// TODO: deprecated
	// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.


// constants:
	/**
	 * Array of multiply values for blur calculations.
	 * @property MUL_TABLE
	 * @type Array
	 * @protected
	 * @static
	 **/
	BlurFilter.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1];

	/**
	 * Array of shift values for blur calculations.
	 * @property SHG_TABLE
	 * @type Array
	 * @protected
	 * @static
	 **/
	BlurFilter.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9];

// public methods:
	/** docced in super class **/
	p.getBounds = function (rect) {
		var x = this.blurX|0, y = this.blurY| 0;
		if (x <= 0 && y <= 0) { return rect; }
		var q = Math.pow(this.quality, 0.2);
		return (rect || new createjs.Rectangle()).pad(x*q+1,y*q+1,x*q+1,y*q+1);
	};

	/** docced in super class **/
	p.clone = function() {
		return new BlurFilter(this.blurX, this.blurY, this.quality);
	};

	/** docced in super class **/
	p.toString = function() {
		return "[BlurFilter]";
	};


// private methods:

	/** docced in super class **/
	p._applyFilter = function (imageData) {

		var radiusX = this.blurX >> 1;
		if (isNaN(radiusX) || radiusX < 0) return false;
		var radiusY = this.blurY >> 1;
		if (isNaN(radiusY) || radiusY < 0) return false;
		if (radiusX == 0 && radiusY == 0) return false;

		var iterations = this.quality;
		if (isNaN(iterations) || iterations < 1) iterations = 1;
		iterations |= 0;
		if (iterations > 3) iterations = 3;
		if (iterations < 1) iterations = 1;

		var px = imageData.data;
		var x=0, y=0, i=0, p=0, yp=0, yi=0, yw=0, r=0, g=0, b=0, a=0, pr=0, pg=0, pb=0, pa=0;

		var divx = (radiusX + radiusX + 1) | 0;
		var divy = (radiusY + radiusY + 1) | 0;
		var w = imageData.width | 0;
		var h = imageData.height | 0;

		var w1 = (w - 1) | 0;
		var h1 = (h - 1) | 0;
		var rxp1 = (radiusX + 1) | 0;
		var ryp1 = (radiusY + 1) | 0;

		var ssx = {r:0,b:0,g:0,a:0};
		var sx = ssx;
		for ( i = 1; i < divx; i++ )
		{
			sx = sx.n = {r:0,b:0,g:0,a:0};
		}
		sx.n = ssx;

		var ssy = {r:0,b:0,g:0,a:0};
		var sy = ssy;
		for ( i = 1; i < divy; i++ )
		{
			sy = sy.n = {r:0,b:0,g:0,a:0};
		}
		sy.n = ssy;

		var si = null;


		var mtx = BlurFilter.MUL_TABLE[radiusX] | 0;
		var stx = BlurFilter.SHG_TABLE[radiusX] | 0;
		var mty = BlurFilter.MUL_TABLE[radiusY] | 0;
		var sty = BlurFilter.SHG_TABLE[radiusY] | 0;

		while (iterations-- > 0) {

			yw = yi = 0;
			var ms = mtx;
			var ss = stx;
			for (y = h; --y > -1;) {
				r = rxp1 * (pr = px[(yi) | 0]);
				g = rxp1 * (pg = px[(yi + 1) | 0]);
				b = rxp1 * (pb = px[(yi + 2) | 0]);
				a = rxp1 * (pa = px[(yi + 3) | 0]);

				sx = ssx;

				for( i = rxp1; --i > -1; )
				{
					sx.r = pr;
					sx.g = pg;
					sx.b = pb;
					sx.a = pa;
					sx = sx.n;
				}

				for( i = 1; i < rxp1; i++ )
				{
					p = (yi + ((w1 < i ? w1 : i) << 2)) | 0;
					r += ( sx.r = px[p]);
					g += ( sx.g = px[p+1]);
					b += ( sx.b = px[p+2]);
					a += ( sx.a = px[p+3]);

					sx = sx.n;
				}

				si = ssx;
				for ( x = 0; x < w; x++ )
				{
					px[yi++] = (r * ms) >>> ss;
					px[yi++] = (g * ms) >>> ss;
					px[yi++] = (b * ms) >>> ss;
					px[yi++] = (a * ms) >>> ss;

					p = ((yw + ((p = x + radiusX + 1) < w1 ? p : w1)) << 2);

					r -= si.r - ( si.r = px[p]);
					g -= si.g - ( si.g = px[p+1]);
					b -= si.b - ( si.b = px[p+2]);
					a -= si.a - ( si.a = px[p+3]);

					si = si.n;

				}
				yw += w;
			}

			ms = mty;
			ss = sty;
			for (x = 0; x < w; x++) {
				yi = (x << 2) | 0;

				r = (ryp1 * (pr = px[yi])) | 0;
				g = (ryp1 * (pg = px[(yi + 1) | 0])) | 0;
				b = (ryp1 * (pb = px[(yi + 2) | 0])) | 0;
				a = (ryp1 * (pa = px[(yi + 3) | 0])) | 0;

				sy = ssy;
				for( i = 0; i < ryp1; i++ )
				{
					sy.r = pr;
					sy.g = pg;
					sy.b = pb;
					sy.a = pa;
					sy = sy.n;
				}

				yp = w;

				for( i = 1; i <= radiusY; i++ )
				{
					yi = ( yp + x ) << 2;

					r += ( sy.r = px[yi]);
					g += ( sy.g = px[yi+1]);
					b += ( sy.b = px[yi+2]);
					a += ( sy.a = px[yi+3]);

					sy = sy.n;

					if( i < h1 )
					{
						yp += w;
					}
				}

				yi = x;
				si = ssy;
				if ( iterations > 0 )
				{
					for ( y = 0; y < h; y++ )
					{
						p = yi << 2;
						px[p+3] = pa =(a * ms) >>> ss;
						if ( pa > 0 )
						{
							px[p]   = ((r * ms) >>> ss );
							px[p+1] = ((g * ms) >>> ss );
							px[p+2] = ((b * ms) >>> ss );
						} else {
							px[p] = px[p+1] = px[p+2] = 0
						}

						p = ( x + (( ( p = y + ryp1) < h1 ? p : h1 ) * w )) << 2;

						r -= si.r - ( si.r = px[p]);
						g -= si.g - ( si.g = px[p+1]);
						b -= si.b - ( si.b = px[p+2]);
						a -= si.a - ( si.a = px[p+3]);

						si = si.n;

						yi += w;
					}
				} else {
					for ( y = 0; y < h; y++ )
					{
						p = yi << 2;
						px[p+3] = pa =(a * ms) >>> ss;
						if ( pa > 0 )
						{
							pa = 255 / pa;
							px[p]   = ((r * ms) >>> ss ) * pa;
							px[p+1] = ((g * ms) >>> ss ) * pa;
							px[p+2] = ((b * ms) >>> ss ) * pa;
						} else {
							px[p] = px[p+1] = px[p+2] = 0
						}

						p = ( x + (( ( p = y + ryp1) < h1 ? p : h1 ) * w )) << 2;

						r -= si.r - ( si.r = px[p]);
						g -= si.g - ( si.g = px[p+1]);
						b -= si.b - ( si.b = px[p+2]);
						a -= si.a - ( si.a = px[p+3]);

						si = si.n;

						yi += w;
					}
				}
			}

		}
		return true;
	};

	createjs.BlurFilter = createjs.promote(BlurFilter, "Filter");
}());

//##############################################################################
// AlphaMapFilter.js
//##############################################################################

this.createjs = this.createjs || {};

(function () {
	"use strict";
	
	
// constructor:
	/**
	 * Applies a greyscale alpha map image (or canvas) to the target, such that the alpha channel of the result will
	 * be copied from the red channel of the map, and the RGB channels will be copied from the target.
	 *
	 * Generally, it is recommended that you use {{#crossLink "AlphaMaskFilter"}}{{/crossLink}}, because it has much
	 * better performance.
	 *
	 * <h4>Example</h4>
	 * This example draws a red->blue box, caches it, and then uses the cache canvas as an alpha map on a 100x100 image.
	 *
	 *       var box = new createjs.Shape();
	 *       box.graphics.beginLinearGradientFill(["#ff0000", "#0000ff"], [0, 1], 0, 0, 0, 100)
	 *       box.graphics.drawRect(0, 0, 100, 100);
	 *       box.cache(0, 0, 100, 100);
	 *
	 *       var bmp = new createjs.Bitmap("path/to/image.jpg");
	 *       bmp.filters = [
	 *           new createjs.AlphaMapFilter(box.cacheCanvas)
	 *       ];
	 *       bmp.cache(0, 0, 100, 100);
	 *       stage.addChild(bmp);
	 *
	 * See {{#crossLink "Filter"}}{{/crossLink}} for more information on applying filters.
	 * @class AlphaMapFilter
	 * @extends Filter
	 * @constructor
	 * @param {HTMLImageElement|HTMLCanvasElement} alphaMap The greyscale image (or canvas) to use as the alpha value for the
	 * result. This should be exactly the same dimensions as the target.
	 **/
	function AlphaMapFilter(alphaMap) {
	
	
	// public properties:
		/**
		 * The greyscale image (or canvas) to use as the alpha value for the result. This should be exactly the same
		 * dimensions as the target.
		 * @property alphaMap
		 * @type HTMLImageElement|HTMLCanvasElement
		 **/
		this.alphaMap = alphaMap;
		
		
	// private properties:
		/**
		 * @property _alphaMap
		 * @protected
		 * @type HTMLImageElement|HTMLCanvasElement
		 **/
		this._alphaMap = null;
		
		/**
		 * @property _mapData
		 * @protected
		 * @type Uint8ClampedArray
		 **/
		this._mapData = null;
	}
	var p = createjs.extend(AlphaMapFilter, createjs.Filter);

	// TODO: deprecated
	// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.


// public methods:
	/** docced in super class **/
	p.clone = function () {
		var o = new AlphaMapFilter(this.alphaMap);
		o._alphaMap = this._alphaMap;
		o._mapData = this._mapData;
		return o;
	};

	/** docced in super class **/
	p.toString = function () {
		return "[AlphaMapFilter]";
	};


// private methods:
	/** docced in super class **/
	p._applyFilter = function (imageData) {
		if (!this.alphaMap) { return true; }
		if (!this._prepAlphaMap()) { return false; }
		
		// TODO: update to support scenarios where the target has different dimensions.
		var data = imageData.data;
		var map = this._mapData;
		for(var i=0, l=data.length; i<l; i += 4) { data[i + 3] = map[i] || 0; }
		
		return true;
	};

	/**
	 * @method _prepAlphaMap
	 * @protected
	 **/
	p._prepAlphaMap = function () {
		if (!this.alphaMap) { return false; }
		if (this.alphaMap == this._alphaMap && this._mapData) { return true; }

		this._mapData = null;
		var map = this._alphaMap = this.alphaMap;
		var canvas = map;
		var ctx;
		if (map instanceof HTMLCanvasElement) {
			ctx = canvas.getContext("2d");
		} else {
			canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
			canvas.width = map.width;
			canvas.height = map.height;
			ctx = canvas.getContext("2d");
			ctx.drawImage(map, 0, 0);
		}

		try {
			var imgData = ctx.getImageData(0, 0, map.width, map.height);
		} catch (e) {
			//if (!this.suppressCrossDomainErrors) throw new Error("unable to access local image data: " + e);
			return false;
		}
		
		this._mapData = imgData.data;
		return true;
	};


	createjs.AlphaMapFilter = createjs.promote(AlphaMapFilter, "Filter");
}());

//##############################################################################
// AlphaMaskFilter.js
//##############################################################################

this.createjs = this.createjs || {};

(function () {
	"use strict";


// constructor:
	/**
	 * Applies the alpha from the mask image (or canvas) to the target, such that the alpha channel of the result will
	 * be derived from the mask, and the RGB channels will be copied from the target. This can be used, for example, to
	 * apply an alpha mask to a display object. This can also be used to combine a JPG compressed RGB image with a PNG32
	 * alpha mask, which can result in a much smaller file size than a single PNG32 containing ARGB.
	 *
	 * <b>IMPORTANT NOTE: This filter currently does not support the targetCtx, or targetX/Y parameters correctly.</b>
	 *
	 * <h4>Example</h4>
	 * This example draws a gradient box, then caches it and uses the "cacheCanvas" as the alpha mask on a 100x100 image.
	 *
	 *      var box = new createjs.Shape();
	 *      box.graphics.beginLinearGradientFill(["#000000", "rgba(0, 0, 0, 0)"], [0, 1], 0, 0, 100, 100)
	 *      box.graphics.drawRect(0, 0, 100, 100);
	 *      box.cache(0, 0, 100, 100);
	 *
	 *      var bmp = new createjs.Bitmap("path/to/image.jpg");
	 *      bmp.filters = [
	 *          new createjs.AlphaMaskFilter(box.cacheCanvas)
	 *      ];
	 *      bmp.cache(0, 0, 100, 100);
	 *
	 * See {{#crossLink "Filter"}}{{/crossLink}} for more information on applying filters.
	 * @class AlphaMaskFilter
	 * @extends Filter
	 * @constructor
	 * @param {HTMLImageElement|HTMLCanvasElement} mask
	 **/
	function AlphaMaskFilter(mask) {
	
	
	// public properties:
		/**
		 * The image (or canvas) to use as the mask.
		 * @property mask
		 * @type HTMLImageElement|HTMLCanvasElement
		 **/
		this.mask = mask;
	}
	var p = createjs.extend(AlphaMaskFilter, createjs.Filter);

	// TODO: deprecated
	// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.
	

// public methods:
	/**
	 * Applies the filter to the specified context.
	 *
	 * <strong>IMPORTANT NOTE: This filter currently does not support the targetCtx, or targetX/Y parameters
	 * correctly.</strong>
	 * @method applyFilter
	 * @param {CanvasRenderingContext2D} ctx The 2D context to use as the source.
	 * @param {Number} x The x position to use for the source rect.
	 * @param {Number} y The y position to use for the source rect.
	 * @param {Number} width The width to use for the source rect.
	 * @param {Number} height The height to use for the source rect.
	 * @param {CanvasRenderingContext2D} [targetCtx] NOT SUPPORTED IN THIS FILTER. The 2D context to draw the result to. Defaults to the context passed to ctx.
	 * @param {Number} [targetX] NOT SUPPORTED IN THIS FILTER. The x position to draw the result to. Defaults to the value passed to x.
	 * @param {Number} [targetY] NOT SUPPORTED IN THIS FILTER. The y position to draw the result to. Defaults to the value passed to y.
	 * @return {Boolean} If the filter was applied successfully.
	 **/
	p.applyFilter = function (ctx, x, y, width, height, targetCtx, targetX, targetY) {
		if (!this.mask) { return true; }
		targetCtx = targetCtx || ctx;
		if (targetX == null) { targetX = x; }
		if (targetY == null) { targetY = y; }

		targetCtx.save();
		if (ctx != targetCtx) {
			// TODO: support targetCtx and targetX/Y
			// clearRect, then draw the ctx in?
			return false;
		}

		targetCtx.globalCompositeOperation = "destination-in";
		targetCtx.drawImage(this.mask, targetX, targetY);
		targetCtx.restore();
		return true;
	};

	/** docced in super class **/
	p.clone = function () {
		return new AlphaMaskFilter(this.mask);
	};

	/** docced in super class **/
	p.toString = function () {
		return "[AlphaMaskFilter]";
	};


	createjs.AlphaMaskFilter = createjs.promote(AlphaMaskFilter, "Filter");
}());

//##############################################################################
// ColorFilter.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * Applies a color transform to DisplayObjects.
	 *
	 * <h4>Example</h4>
	 * This example draws a red circle, and then transforms it to Blue. This is accomplished by multiplying all the channels
	 * to 0 (except alpha, which is set to 1), and then adding 255 to the blue channel.
	 *
	 *      var shape = new createjs.Shape().set({x:100,y:100});
	 *      shape.graphics.beginFill("#ff0000").drawCircle(0,0,50);
	 *
	 *      shape.filters = [
	 *          new createjs.ColorFilter(0,0,0,1, 0,0,255,0)
	 *      ];
	 *      shape.cache(-50, -50, 100, 100);
	 *
	 * See {{#crossLink "Filter"}}{{/crossLink}} for an more information on applying filters.
	 * @class ColorFilter
	 * @param {Number} [redMultiplier=1] The amount to multiply against the red channel. This is a range between 0 and 1.
	 * @param {Number} [greenMultiplier=1] The amount to multiply against the green channel. This is a range between 0 and 1.
	 * @param {Number} [blueMultiplier=1] The amount to multiply against the blue channel. This is a range between 0 and 1.
	 * @param {Number} [alphaMultiplier=1] The amount to multiply against the alpha channel. This is a range between 0 and 1.
	 * @param {Number} [redOffset=0] The amount to add to the red channel after it has been multiplied. This is a range
	 * between -255 and 255.
	 * @param {Number} [greenOffset=0] The amount to add to the green channel after it has been multiplied. This is a range
	  * between -255 and 255.
	 * @param {Number} [blueOffset=0] The amount to add to the blue channel after it has been multiplied. This is a range
	  * between -255 and 255.
	 * @param {Number} [alphaOffset=0] The amount to add to the alpha channel after it has been multiplied. This is a range
	  * between -255 and 255.
	 * @constructor
	 * @extends Filter
	 **/
	function ColorFilter(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset) {
		
	
	// public properties:
		/**
		 * Red channel multiplier.
		 * @property redMultiplier
		 * @type Number
		 **/
		this.redMultiplier = redMultiplier != null ? redMultiplier : 1;
	
		/**
		 * Green channel multiplier.
		 * @property greenMultiplier
		 * @type Number
		 **/
		this.greenMultiplier = greenMultiplier != null ? greenMultiplier : 1;
	
		/**
		 * Blue channel multiplier.
		 * @property blueMultiplier
		 * @type Number
		 **/
		this.blueMultiplier = blueMultiplier != null ? blueMultiplier : 1;
	
		/**
		 * Alpha channel multiplier.
		 * @property alphaMultiplier
		 * @type Number
		 **/
		this.alphaMultiplier = alphaMultiplier != null ? alphaMultiplier : 1;
	
		/**
		 * Red channel offset (added to value).
		 * @property redOffset
		 * @type Number
		 **/
		this.redOffset = redOffset || 0;
	
		/**
		 * Green channel offset (added to value).
		 * @property greenOffset
		 * @type Number
		 **/
		this.greenOffset = greenOffset || 0;
	
		/**
		 * Blue channel offset (added to value).
		 * @property blueOffset
		 * @type Number
		 **/
		this.blueOffset = blueOffset || 0;
	
		/**
		 * Alpha channel offset (added to value).
		 * @property alphaOffset
		 * @type Number
		 **/
		this.alphaOffset = alphaOffset || 0;
	}
	var p = createjs.extend(ColorFilter, createjs.Filter);

	// TODO: deprecated
	// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.


// public methods:
	/** docced in super class **/
	p.toString = function() {
		return "[ColorFilter]";
	};

	/** docced in super class **/
	p.clone = function() {
		return new ColorFilter(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset);
	};
	

// private methods:
	/** docced in super class **/
	p._applyFilter = function(imageData) {
		var data = imageData.data;
		var l = data.length;
		for (var i=0; i<l; i+=4) {
			data[i] = data[i]*this.redMultiplier+this.redOffset;
			data[i+1] = data[i+1]*this.greenMultiplier+this.greenOffset;
			data[i+2] = data[i+2]*this.blueMultiplier+this.blueOffset;
			data[i+3] = data[i+3]*this.alphaMultiplier+this.alphaOffset;
		}
		return true;
	};


	createjs.ColorFilter = createjs.promote(ColorFilter, "Filter");
}());

//##############################################################################
// ColorMatrix.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * Provides helper functions for assembling a matrix for use with the {{#crossLink "ColorMatrixFilter"}}{{/crossLink}}.
	 * Most methods return the instance to facilitate chained calls.
	 *
	 * <h4>Example</h4>
	 *
	 *      myColorMatrix.adjustHue(20).adjustBrightness(50);
	 *
	 * See {{#crossLink "Filter"}}{{/crossLink}} for an example of how to apply filters, or {{#crossLink "ColorMatrixFilter"}}{{/crossLink}}
	 * for an example of how to use ColorMatrix to change a DisplayObject's color.
	 * @class ColorMatrix
	 * @param {Number} brightness
	 * @param {Number} contrast
	 * @param {Number} saturation
	 * @param {Number} hue
	 * @constructor
	 **/
	function ColorMatrix(brightness, contrast, saturation, hue) {
		this.setColor(brightness, contrast, saturation, hue);
	}
	var p = ColorMatrix.prototype;

	/**
	 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
	 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
	 * for details.
	 *
	 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
	 *
	 * @method initialize
	 * @protected
	 * @deprecated
	 */
	// p.initialize = function() {}; // searchable for devs wondering where it is.


// constants:
	/**
	 * Array of delta values for contrast calculations.
	 * @property DELTA_INDEX
	 * @type Array
	 * @protected
	 * @static
	 **/
	ColorMatrix.DELTA_INDEX = [
		0,    0.01, 0.02, 0.04, 0.05, 0.06, 0.07, 0.08, 0.1,  0.11,
		0.12, 0.14, 0.15, 0.16, 0.17, 0.18, 0.20, 0.21, 0.22, 0.24,
		0.25, 0.27, 0.28, 0.30, 0.32, 0.34, 0.36, 0.38, 0.40, 0.42,
		0.44, 0.46, 0.48, 0.5,  0.53, 0.56, 0.59, 0.62, 0.65, 0.68,
		0.71, 0.74, 0.77, 0.80, 0.83, 0.86, 0.89, 0.92, 0.95, 0.98,
		1.0,  1.06, 1.12, 1.18, 1.24, 1.30, 1.36, 1.42, 1.48, 1.54,
		1.60, 1.66, 1.72, 1.78, 1.84, 1.90, 1.96, 2.0,  2.12, 2.25,
		2.37, 2.50, 2.62, 2.75, 2.87, 3.0,  3.2,  3.4,  3.6,  3.8,
		4.0,  4.3,  4.7,  4.9,  5.0,  5.5,  6.0,  6.5,  6.8,  7.0,
		7.3,  7.5,  7.8,  8.0,  8.4,  8.7,  9.0,  9.4,  9.6,  9.8,
		10.0
	];

	/**
	 * Identity matrix values.
	 * @property IDENTITY_MATRIX
	 * @type Array
	 * @protected
	 * @static
	 **/
	ColorMatrix.IDENTITY_MATRIX = [
		1,0,0,0,0,
		0,1,0,0,0,
		0,0,1,0,0,
		0,0,0,1,0,
		0,0,0,0,1
	];

	/**
	 * The constant length of a color matrix.
	 * @property LENGTH
	 * @type Number
	 * @protected
	 * @static
	 **/
	ColorMatrix.LENGTH = ColorMatrix.IDENTITY_MATRIX.length;


// public methods:
	/**
	 * Resets the instance with the specified values.
	 * @method setColor
	 * @param {Number} brightness
	 * @param {Number} contrast
	 * @param {Number} saturation
	 * @param {Number} hue
	 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
	 * @chainable
	 */
	p.setColor = function(brightness,contrast,saturation,hue) {
		return this.reset().adjustColor(brightness,contrast,saturation,hue);
	};

	/**
	 * Resets the matrix to identity values.
	 * @method reset
	 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
	 * @chainable
	 */
	p.reset = function() {
		return this.copy(ColorMatrix.IDENTITY_MATRIX);
	};

	/**
	 * Shortcut method to adjust brightness, contrast, saturation and hue.
	 * Equivalent to calling adjustHue(hue), adjustContrast(contrast),
	 * adjustBrightness(brightness), adjustSaturation(saturation), in that order.
	 * @method adjustColor
	 * @param {Number} brightness
	 * @param {Number} contrast
	 * @param {Number} saturation
	 * @param {Number} hue
	 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.adjustColor = function(brightness,contrast,saturation,hue) {
		this.adjustHue(hue);
		this.adjustContrast(contrast);
		this.adjustBrightness(brightness);
		return this.adjustSaturation(saturation);
	};

	/**
	 * Adjusts the brightness of pixel color by adding the specified value to the red, green and blue channels.
	 * Positive values will make the image brighter, negative values will make it darker.
	 * @method adjustBrightness
	 * @param {Number} value A value between -255 & 255 that will be added to the RGB channels.
	 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.adjustBrightness = function(value) {
		if (value == 0 || isNaN(value)) { return this; }
		value = this._cleanValue(value,255);
		this._multiplyMatrix([
			1,0,0,0,value,
			0,1,0,0,value,
			0,0,1,0,value,
			0,0,0,1,0,
			0,0,0,0,1
		]);
		return this;
	};

	/**
	 * Adjusts the contrast of pixel color.
	 * Positive values will increase contrast, negative values will decrease contrast.
	 * @method adjustContrast
	 * @param {Number} value A value between -100 & 100.
	 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.adjustContrast = function(value) {
		if (value == 0 || isNaN(value)) { return this; }
		value = this._cleanValue(value,100);
		var x;
		if (value<0) {
			x = 127+value/100*127;
		} else {
			x = value%1;
			if (x == 0) {
				x = ColorMatrix.DELTA_INDEX[value];
			} else {
				x = ColorMatrix.DELTA_INDEX[(value<<0)]*(1-x)+ColorMatrix.DELTA_INDEX[(value<<0)+1]*x; // use linear interpolation for more granularity.
			}
			x = x*127+127;
		}
		this._multiplyMatrix([
			x/127,0,0,0,0.5*(127-x),
			0,x/127,0,0,0.5*(127-x),
			0,0,x/127,0,0.5*(127-x),
			0,0,0,1,0,
			0,0,0,0,1
		]);
		return this;
	};

	/**
	 * Adjusts the color saturation of the pixel.
	 * Positive values will increase saturation, negative values will decrease saturation (trend towards greyscale).
	 * @method adjustSaturation
	 * @param {Number} value A value between -100 & 100.
	 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.adjustSaturation = function(value) {
		if (value == 0 || isNaN(value)) { return this; }
		value = this._cleanValue(value,100);
		var x = 1+((value > 0) ? 3*value/100 : value/100);
		var lumR = 0.3086;
		var lumG = 0.6094;
		var lumB = 0.0820;
		this._multiplyMatrix([
			lumR*(1-x)+x,lumG*(1-x),lumB*(1-x),0,0,
			lumR*(1-x),lumG*(1-x)+x,lumB*(1-x),0,0,
			lumR*(1-x),lumG*(1-x),lumB*(1-x)+x,0,0,
			0,0,0,1,0,
			0,0,0,0,1
		]);
		return this;
	};


	/**
	 * Adjusts the hue of the pixel color.
	 * @method adjustHue
	 * @param {Number} value A value between -180 & 180.
	 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.adjustHue = function(value) {
		if (value == 0 || isNaN(value)) { return this; }
		value = this._cleanValue(value,180)/180*Math.PI;
		var cosVal = Math.cos(value);
		var sinVal = Math.sin(value);
		var lumR = 0.213;
		var lumG = 0.715;
		var lumB = 0.072;
		this._multiplyMatrix([
			lumR+cosVal*(1-lumR)+sinVal*(-lumR),lumG+cosVal*(-lumG)+sinVal*(-lumG),lumB+cosVal*(-lumB)+sinVal*(1-lumB),0,0,
			lumR+cosVal*(-lumR)+sinVal*(0.143),lumG+cosVal*(1-lumG)+sinVal*(0.140),lumB+cosVal*(-lumB)+sinVal*(-0.283),0,0,
			lumR+cosVal*(-lumR)+sinVal*(-(1-lumR)),lumG+cosVal*(-lumG)+sinVal*(lumG),lumB+cosVal*(1-lumB)+sinVal*(lumB),0,0,
			0,0,0,1,0,
			0,0,0,0,1
		]);
		return this;
	};

	/**
	 * Concatenates (multiplies) the specified matrix with this one.
	 * @method concat
	 * @param {Array} matrix An array or ColorMatrix instance.
	 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.concat = function(matrix) {
		matrix = this._fixMatrix(matrix);
		if (matrix.length != ColorMatrix.LENGTH) { return this; }
		this._multiplyMatrix(matrix);
		return this;
	};

	/**
	 * Returns a clone of this ColorMatrix.
	 * @method clone
	 * @return {ColorMatrix} A clone of this ColorMatrix.
	 **/
	p.clone = function() {
		return (new ColorMatrix()).copy(this);
	};

	/**
	 * Return a length 25 (5x5) array instance containing this matrix's values.
	 * @method toArray
	 * @return {Array} An array holding this matrix's values.
	 **/
	p.toArray = function() {
		var arr = [];
		for (var i= 0, l=ColorMatrix.LENGTH; i<l; i++) {
			arr[i] = this[i];
		}
		return arr;
	};

	/**
	 * Copy the specified matrix's values to this matrix.
	 * @method copy
	 * @param {Array} matrix An array or ColorMatrix instance.
	 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.copy = function(matrix) {
		var l = ColorMatrix.LENGTH;
		for (var i=0;i<l;i++) {
			this[i] = matrix[i];
		}
		return this;
	};
	
	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[ColorMatrix]";
	};


// private methods:
	/**
	 * @method _multiplyMatrix
	 * @param {Array} matrix
	 * @protected
	 **/
	p._multiplyMatrix = function(matrix) {
		var i, j, k, col = [];

		for (i=0;i<5;i++) {
			for (j=0;j<5;j++) {
				col[j] = this[j+i*5];
			}
			for (j=0;j<5;j++) {
				var val=0;
				for (k=0;k<5;k++) {
					val += matrix[j+k*5]*col[k];
				}
				this[j+i*5] = val;
			}
		}
	};

	/**
	 * Make sure values are within the specified range, hue has a limit of 180, brightness is 255, others are 100.
	 * @method _cleanValue
	 * @param {Number} value The raw number
	 * @param {Number} limit The maximum that the number can be. The minimum is the limit * -1.
	 * @protected
	 **/
	p._cleanValue = function(value, limit) {
		return Math.min(limit,Math.max(-limit,value));
	};

	/**
	 * Makes sure matrixes are 5x5 (25 long).
	 * @method _fixMatrix
	 * @param {Array} matrix
	 * @protected
	 **/
	p._fixMatrix = function(matrix) {
		if (matrix instanceof ColorMatrix) { matrix = matrix.toArray(); }
		if (matrix.length < ColorMatrix.LENGTH) {
			matrix = matrix.slice(0,matrix.length).concat(ColorMatrix.IDENTITY_MATRIX.slice(matrix.length,ColorMatrix.LENGTH));
		} else if (matrix.length > ColorMatrix.LENGTH) {
			matrix = matrix.slice(0,ColorMatrix.LENGTH);
		}
		return matrix;
	};


	createjs.ColorMatrix = ColorMatrix;
}());

//##############################################################################
// ColorMatrixFilter.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * Allows you to carry out complex color operations such as modifying saturation, brightness, or inverting. See the
	 * {{#crossLink "ColorMatrix"}}{{/crossLink}} for more information on changing colors. For an easier color transform,
	 * consider the {{#crossLink "ColorFilter"}}{{/crossLink}}.
	 *
	 * <h4>Example</h4>
	 * This example creates a red circle, inverts its hue, and then saturates it to brighten it up.
	 *
	 *      var shape = new createjs.Shape().set({x:100,y:100});
	 *      shape.graphics.beginFill("#ff0000").drawCircle(0,0,50);
	 *
	 *      var matrix = new createjs.ColorMatrix().adjustHue(180).adjustSaturation(100);
	 *      shape.filters = [
	 *          new createjs.ColorMatrixFilter(matrix)
	 *      ];
	 *
	 *      shape.cache(-50, -50, 100, 100);
	 *
	 * See {{#crossLink "Filter"}}{{/crossLink}} for an more information on applying filters.
	 * @class ColorMatrixFilter
	 * @constructor
	 * @extends Filter
	 * @param {Array | ColorMatrix} matrix A 4x5 matrix describing the color operation to perform. See also the {{#crossLink "ColorMatrix"}}{{/crossLink}}
	 * class.
	 **/
	function ColorMatrixFilter(matrix) {
	
		
	// public properties:
		/**
		 * A 4x5 matrix describing the color operation to perform. See also the {{#crossLink "ColorMatrix"}}{{/crossLink}}
		 * @property matrix
		 * @type Array | ColorMatrix
		 **/
		this.matrix = matrix;
	}
	var p = createjs.extend(ColorMatrixFilter, createjs.Filter);

	// TODO: deprecated
	// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.
	

// public methods:
	/** docced in super class **/
	p.toString = function() {
		return "[ColorMatrixFilter]";
	};

	/** docced in super class **/
	p.clone = function() {
		return new ColorMatrixFilter(this.matrix);
	};

// private methods:
	/** docced in super class **/
	p._applyFilter = function(imageData) { 
		var data = imageData.data;
		var l = data.length;
		var r,g,b,a;
		var mtx = this.matrix;
		var m0 =  mtx[0],  m1 =  mtx[1],  m2 =  mtx[2],  m3 =  mtx[3],  m4 =  mtx[4];
		var m5 =  mtx[5],  m6 =  mtx[6],  m7 =  mtx[7],  m8 =  mtx[8],  m9 =  mtx[9];
		var m10 = mtx[10], m11 = mtx[11], m12 = mtx[12], m13 = mtx[13], m14 = mtx[14];
		var m15 = mtx[15], m16 = mtx[16], m17 = mtx[17], m18 = mtx[18], m19 = mtx[19];

		for (var i=0; i<l; i+=4) {
			r = data[i];
			g = data[i+1];
			b = data[i+2];
			a = data[i+3];
			data[i] = r*m0+g*m1+b*m2+a*m3+m4; // red
			data[i+1] = r*m5+g*m6+b*m7+a*m8+m9; // green
			data[i+2] = r*m10+g*m11+b*m12+a*m13+m14; // blue
			data[i+3] = r*m15+g*m16+b*m17+a*m18+m19; // alpha
		}
		return true;
	};


	createjs.ColorMatrixFilter = createjs.promote(ColorMatrixFilter, "Filter");
}());

//##############################################################################
// Touch.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
 * Global utility for working with multi-touch enabled devices in EaselJS. Currently supports W3C Touch API (iOS and
 * modern Android browser) and the Pointer API (IE), including ms-prefixed events in IE10, and unprefixed in IE11.
 *
 * Ensure that you {{#crossLink "Touch/disable"}}{{/crossLink}} touch when cleaning up your application. You do not have
 * to check if touch is supported to enable it, as it will fail gracefully if it is not supported.
 *
 * <h4>Example</h4>
 *
 *      var stage = new createjs.Stage("canvasId");
 *      createjs.Touch.enable(stage);
 *
 * <strong>Note:</strong> It is important to disable Touch on a stage that you are no longer using:
 *
 *      createjs.Touch.disable(stage);
 *
 * @class Touch
 * @static
 **/
	function Touch() {
		throw "Touch cannot be instantiated";
	}


// public static methods:
	/**
	 * Returns `true` if touch is supported in the current browser.
	 * @method isSupported
	 * @return {Boolean} Indicates whether touch is supported in the current browser.
	 * @static
	 **/
	Touch.isSupported = function() {
		return	!!(('ontouchstart' in window) // iOS & Android
			|| (window.navigator['msPointerEnabled'] && window.navigator['msMaxTouchPoints'] > 0) // IE10
			|| (window.navigator['pointerEnabled'] && window.navigator['maxTouchPoints'] > 0)); // IE11+
	};

	/**
	 * Enables touch interaction for the specified EaselJS {{#crossLink "Stage"}}{{/crossLink}}. Currently supports iOS
	 * (and compatible browsers, such as modern Android browsers), and IE10/11. Supports both single touch and
	 * multi-touch modes. Extends the EaselJS {{#crossLink "MouseEvent"}}{{/crossLink}} model, but without support for
	 * double click or over/out events. See the MouseEvent {{#crossLink "MouseEvent/pointerId:property"}}{{/crossLink}}
	 * for more information.
	 * @method enable
	 * @param {Stage} stage The {{#crossLink "Stage"}}{{/crossLink}} to enable touch on.
	 * @param {Boolean} [singleTouch=false] If `true`, only a single touch will be active at a time.
	 * @param {Boolean} [allowDefault=false] If `true`, then default gesture actions (ex. scrolling, zooming) will be
	 * allowed when the user is interacting with the target canvas.
	 * @return {Boolean} Returns `true` if touch was successfully enabled on the target stage.
	 * @static
	 **/
	Touch.enable = function(stage, singleTouch, allowDefault) {
		if (!stage || !stage.canvas || !Touch.isSupported()) { return false; }
		if (stage.__touch) { return true; }

		// inject required properties on stage:
		stage.__touch = {pointers:{}, multitouch:!singleTouch, preventDefault:!allowDefault, count:0};

		// note that in the future we may need to disable the standard mouse event model before adding
		// these to prevent duplicate calls. It doesn't seem to be an issue with iOS devices though.
		if ('ontouchstart' in window) { Touch._IOS_enable(stage); }
		else if (window.navigator['msPointerEnabled'] || window.navigator["pointerEnabled"]) { Touch._IE_enable(stage); }
		return true;
	};

	/**
	 * Removes all listeners that were set up when calling `Touch.enable()` on a stage.
	 * @method disable
	 * @param {Stage} stage The {{#crossLink "Stage"}}{{/crossLink}} to disable touch on.
	 * @static
	 **/
	Touch.disable = function(stage) {
		if (!stage) { return; }
		if ('ontouchstart' in window) { Touch._IOS_disable(stage); }
		else if (window.navigator['msPointerEnabled'] || window.navigator["pointerEnabled"]) { Touch._IE_disable(stage); }
		
		delete stage.__touch;
	};


// Private static methods:
	/**
	 * @method _IOS_enable
	 * @protected
	 * @param {Stage} stage
	 * @static
	 **/
	Touch._IOS_enable = function(stage) {
		var canvas = stage.canvas;
		var f = stage.__touch.f = function(e) { Touch._IOS_handleEvent(stage,e); };
		canvas.addEventListener("touchstart", f, false);
		canvas.addEventListener("touchmove", f, false);
		canvas.addEventListener("touchend", f, false);
		canvas.addEventListener("touchcancel", f, false);
	};

	/**
	 * @method _IOS_disable
	 * @protected
	 * @param {Stage} stage
	 * @static
	 **/
	Touch._IOS_disable = function(stage) {
		var canvas = stage.canvas;
		if (!canvas) { return; }
		var f = stage.__touch.f;
		canvas.removeEventListener("touchstart", f, false);
		canvas.removeEventListener("touchmove", f, false);
		canvas.removeEventListener("touchend", f, false);
		canvas.removeEventListener("touchcancel", f, false);
	};

	/**
	 * @method _IOS_handleEvent
	 * @param {Stage} stage
	 * @param {Object} e The event to handle
	 * @protected
	 * @static
	 **/
	Touch._IOS_handleEvent = function(stage, e) {
		if (!stage) { return; }
		if (stage.__touch.preventDefault) { e.preventDefault&&e.preventDefault(); }
		var touches = e.changedTouches;
		var type = e.type;
		for (var i= 0,l=touches.length; i<l; i++) {
			var touch = touches[i];
			var id = touch.identifier;
			if (touch.target != stage.canvas) { continue; }

			if (type == "touchstart") {
				this._handleStart(stage, id, e, touch.pageX, touch.pageY);
			} else if (type == "touchmove") {
				this._handleMove(stage, id, e, touch.pageX, touch.pageY);
			} else if (type == "touchend" || type == "touchcancel") {
				this._handleEnd(stage, id, e);
			}
		}
	};

	/**
	 * @method _IE_enable
	 * @protected
	 * @param {Stage} stage
	 * @static
	 **/
	Touch._IE_enable = function(stage) {
		var canvas = stage.canvas;
		var f = stage.__touch.f = function(e) { Touch._IE_handleEvent(stage,e); };

		if (window.navigator["pointerEnabled"] === undefined) {
			canvas.addEventListener("MSPointerDown", f, false);
			window.addEventListener("MSPointerMove", f, false);
			window.addEventListener("MSPointerUp", f, false);
			window.addEventListener("MSPointerCancel", f, false);
			if (stage.__touch.preventDefault) { canvas.style.msTouchAction = "none"; }
		} else {
			canvas.addEventListener("pointerdown", f, false);
			window.addEventListener("pointermove", f, false);
			window.addEventListener("pointerup", f, false);
			window.addEventListener("pointercancel", f, false);
			if (stage.__touch.preventDefault) { canvas.style.touchAction = "none"; }

		}
		stage.__touch.activeIDs = {};
	};

	/**
	 * @method _IE_disable
	 * @protected
	 * @param {Stage} stage
	 * @static
	 **/
	Touch._IE_disable = function(stage) {
		var f = stage.__touch.f;

		if (window.navigator["pointerEnabled"] === undefined) {
			window.removeEventListener("MSPointerMove", f, false);
			window.removeEventListener("MSPointerUp", f, false);
			window.removeEventListener("MSPointerCancel", f, false);
			if (stage.canvas) {
				stage.canvas.removeEventListener("MSPointerDown", f, false);
			}
		} else {
			window.removeEventListener("pointermove", f, false);
			window.removeEventListener("pointerup", f, false);
			window.removeEventListener("pointercancel", f, false);
			if (stage.canvas) {
				stage.canvas.removeEventListener("pointerdown", f, false);
			}
		}
	};

	/**
	 * @method _IE_handleEvent
	 * @param {Stage} stage
	 * @param {Object} e The event to handle.
	 * @protected
	 * @static
	 **/
	Touch._IE_handleEvent = function(stage, e) {
		if (!stage) { return; }
		if (stage.__touch.preventDefault) { e.preventDefault && e.preventDefault(); }
		var type = e.type;
		var id = e.pointerId;
		var ids = stage.__touch.activeIDs;

		if (type == "MSPointerDown" || type == "pointerdown") {
			if (e.srcElement != stage.canvas) { return; }
			ids[id] = true;
			this._handleStart(stage, id, e, e.pageX, e.pageY);
		} else if (ids[id]) { // it's an id we're watching
			if (type == "MSPointerMove" || type == "pointermove") {
				this._handleMove(stage, id, e, e.pageX, e.pageY);
			} else if (type == "MSPointerUp" || type == "MSPointerCancel"
					|| type == "pointerup" || type == "pointercancel") {
				delete(ids[id]);
				this._handleEnd(stage, id, e);
			}
		}
	};

	/**
	 * @method _handleStart
	 * @param {Stage} stage
	 * @param {String|Number} id
	 * @param {Object} e
	 * @param {Number} x
	 * @param {Number} y
	 * @protected
	 **/
	Touch._handleStart = function(stage, id, e, x, y) {
		var props = stage.__touch;
		if (!props.multitouch && props.count) { return; }
		var ids = props.pointers;
		if (ids[id]) { return; }
		ids[id] = true;
		props.count++;
		stage._handlePointerDown(id, e, x, y);
	};

	/**
	 * @method _handleMove
	 * @param {Stage} stage
	 * @param {String|Number} id
	 * @param {Object} e
	 * @param {Number} x
	 * @param {Number} y
	 * @protected
	 **/
	Touch._handleMove = function(stage, id, e, x, y) {
		if (!stage.__touch.pointers[id]) { return; }
		stage._handlePointerMove(id, e, x, y);
	};

	/**
	 * @method _handleEnd
	 * @param {Stage} stage
	 * @param {String|Number} id
	 * @param {Object} e
	 * @protected
	 **/
	Touch._handleEnd = function(stage, id, e) {
		// TODO: cancel should be handled differently for proper UI (ex. an up would trigger a click, a cancel would more closely resemble an out).
		var props = stage.__touch;
		var ids = props.pointers;
		if (!ids[id]) { return; }
		props.count--;
		stage._handlePointerUp(id, e, true);
		delete(ids[id]);
	};


	createjs.Touch = Touch;
}());

//##############################################################################
// version.js
//##############################################################################

this.createjs = this.createjs || {};

(function() {
	"use strict";

	/**
	 * Static class holding library specific information such as the version and buildDate of
	 * the library.
	 * @class EaselJS
	 **/
	var s = createjs.EaselJS = createjs.EaselJS || {};

	/**
	 * The version string for this release.
	 * @property version
	 * @type String
	 * @static
	 **/
	s.version = /*=version*/"0.8.2"; // injected by build process

	/**
	 * The build date for this release in UTC format.
	 * @property buildDate
	 * @type String
	 * @static
	 **/
	s.buildDate = /*=date*/"Thu, 26 Nov 2015 20:44:34 GMT"; // injected by build process

})();