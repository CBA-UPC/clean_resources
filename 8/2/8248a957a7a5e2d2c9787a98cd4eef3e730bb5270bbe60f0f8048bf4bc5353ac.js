	
	"use strict";
	
	// 2023-07-17 19:55:00
	
	function urlBase64ToUint8Array(base64String)
	{
		var padding = '='.repeat((4 - base64String.length % 4) % 4);
		var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
		
		var rawData = atob(base64);
		var outputArray = new Uint8Array(rawData.length);
		
		for(var i = 0; i < rawData.length; ++i)
			outputArray[i] = rawData.charCodeAt(i);
		
		return outputArray;
	}
	
	function urlObjectToString(object)
	{
		return Object.keys(object)
		.filter(function(key){return object[key];})
		.map(function(key){return key + '=' + encodeURIComponent(object[key]);})
		.join('&');
	}
	
	function getIndexedDBConnection()
	{
		var dbName = 'SW';
		var dbVersion = 1;
		var storeName = 'pushsubscription';
		var keyPath = 'key';
		
		var connection = indexedDB.open(dbName, dbVersion);
		
		connection.onupgradeneeded = function(event)
		{
			var db = event.target.result;
			db.createObjectStore(storeName, {keyPath: keyPath});
		};
		
		return connection;
	}
	
	function syncPushSubscription()
	{
		var subscribeOptions =
		{
			userVisibleOnly: true,
			applicationServerKey: urlBase64ToUint8Array('BDGlEaCHVquh-jkeRViIrVSU2NBflf_POl71MNxeDnMPDJBCb7KmJ2Sgfzh3R91Hb2uIuc3fl5Sd9LqQN5cya8c')
		};
		
		var promise = self.registration.pushManager.subscribe(subscribeOptions).then(function(pushSubscription)
		{
			return new Promise(function(resolve, reject)
			{
				var storeName = 'pushsubscription';
				var connection = getIndexedDBConnection();
				
				connection.onsuccess = function(event)
				{
					var db = event.target.result;
					var readTransaction = db.transaction(storeName, 'readonly');
					var subscriptionStore = readTransaction.objectStore(storeName);
					
					var continueSync = function(oldId)
					{
						var body = JSON.stringify(pushSubscription);
						
						if(oldId)
						{
							body = JSON.parse(body);
							body.oldId = oldId;
							body = JSON.stringify(body);
						}
						
						fetch('/news/subscription/pushsubscription.json',
						{
							method: 'POST',
							headers: {'Content-Type': 'application/json'},
							body: body
						})
						.then(function(response)
						{
							return response.json();
						})
						.then(function(subscriptionInfo)
						{
							var connection = getIndexedDBConnection();
							
							connection.onsuccess = function(event)
							{
								var db = event.target.result;
								var writeTransaction = db.transaction(storeName, 'readwrite');
								var subscriptionStore = writeTransaction.objectStore(storeName);
								var writeIdQuery = subscriptionStore.put({key: 'id', value: subscriptionInfo.data.id});
								var writeUserQuery = subscriptionStore.put({key: 'user', value: subscriptionInfo.data.user});
								
								writeTransaction.oncomplete = function(event)
								{
									db.close();
									resolve(subscriptionInfo.data);
								};
								
								writeTransaction.onerror = function(event)
								{
									var error = writeTransaction.error;
									console.log(error);
									db.close();
									reject(error);
								};
							};
							
							connection.onerror = function(event)
							{
								var error = connection.error;
								console.log(error);
								reject(error);
							};
						});
					};
					
					var readIdQuery = subscriptionStore.get('id');
					
					readIdQuery.onsuccess = function(event)
					{
						continueSync(readIdQuery.result ? readIdQuery.result.value : null);
						db.close();
					};
					
					readIdQuery.onerror = function(event)
					{
						continueSync(null);
						db.close();
					};
				};
				
				connection.onerror = function(event)
				{
					var error = connection.error;
					console.log(error);
					reject(error);
				};
			});
		});
		
		return promise;
	}
	
	function sendAnalyticsEvent(eventAction, eventLabel)
	{
		return new Promise(function(resolve, reject)
		{
			if(doNotTrack())
				resolve();
			else
				self.registration.pushManager.getSubscription().then(function(pushSubscription)
				{
					if(!pushSubscription)
					{
						resolve();
						return;
					}
					
					var trackerIds = {
						'its.1c.ru': 'UA-9034550-2',
						'its.1c.kz': 'UA-54794099-1'
					};
					
					var trackerId = trackerIds[self.location.hostname];
					
					if(trackerId)
					{
						var data =
						{
							// Version Number
							v: 1,
							// Client ID
							cid: pushSubscription.endpoint,
							// Tracking ID
							tid: trackerId,
							// Hit Type
							t: 'event',
							// Event Category
							ec: 'push',
							// Event Action
							ea: eventAction,
							// Event Label
							el: eventLabel
						};
						
						fetch('https://www.google-analytics.com/collect',
						{
							method: 'POST',
							body: urlObjectToString(data)
						})
						.then(function(response)
						{
							resolve();
						});
					}
				});
		});
	}
	
	function showNotification(options)
	{
		var title = options.title;
		delete options.title;
		
		var promise = self.registration.showNotification(title, options);
		
		if('clearAppBadge' in navigator)
			promise.then(function()
			{
				return navigator.clearAppBadge();
			});
		
		promise.then(function()
		{
			return sendAnalyticsEvent('show', options.tag + ':' + options.data.id);
		});
		
		return promise;
	}
	
	function now()
	{
		return (new Date).getTime();
	}
	
	function doNotTrack()
	{
		switch(navigator.doNotTrack)
		{
			case 'yes':
			case '1':
			case 1:
			{
				return true;
			}
			break;
			case 'no':
			case '0':
			case 0:
			{
				return false;
			}
			break;
			default:
			{
				return void 0;
			}
		}
	}
	
	var CACHE_NAME = 'offline';
	var OFFLINE_URL = '/common/page/offline_';
	
	self.addEventListener('install', function(event)
	{
		event.waitUntil((async function()
		{
			var cache = await caches.open(CACHE_NAME);
			await cache.add(new Request(OFFLINE_URL, {cache: 'reload'}));
			await self.skipWaiting();
		})());
	});
	
	self.addEventListener('activate', function(event)
	{
		event.waitUntil((async function()
		{
			if('navigationPreload' in self.registration)
				await self.registration.navigationPreload.enable();
			
			await self.clients.claim();
		})());
	});
	
	self.addEventListener('fetch', function(event)
	{
		if(event.request.mode === 'navigate')
			event.respondWith((async function()
			{
				try
				{
					if('navigationPreload' in self.registration)
					{
						var preloadResponse = await event.preloadResponse;
						
						if(preloadResponse)
							return preloadResponse;
					}
					
					var networkResponse = await fetch(event.request);
					return networkResponse;
				}
				catch(error)
				{
					if(!navigator.userAgentData
					|| navigator.userAgentData.mobile
					|| !self.location.hostname.match(/^its\.1c\./))
					{
						var cache = await caches.open(CACHE_NAME);
						var cachedResponse = await cache.match(OFFLINE_URL);
						return cachedResponse;
					}
				}
			})());
	});
	
	if('Notification' in self
	&& 'pushManager' in self.registration)
	{
		self.addEventListener('push', function(event)
		{
			if(Notification.permission === 'granted'
			&& event.data)
			{
				var options = event.data.json();
				
				if('budget' in navigator
				&& options.data
				&& typeof options.data.ttl === 'number'
				&& typeof options.data.sent === 'number'
				&& options.data.sent + options.data.ttl * 1000 < now())
					var promise = navigator.budget.reserve('silent-push').then(function(reserved)
					{
						if(reserved)
							return Promise.resolve();
						else
							return showNotification(options);
					});
				else
					var promise = showNotification(options);
				
				event.waitUntil(promise);
			}
		});
		
		self.addEventListener('notificationclick', function(event)
		{
			if(event.notification.data
			&& event.notification.data.url)
			{
				event.notification.close();
				
				var promise = clients.openWindow(event.notification.data.url).then(function()
				{
					return sendAnalyticsEvent('click', event.notification.tag + ':' + event.notification.data.id);
				});
				
				event.waitUntil(promise);
			}
		});
		
		self.addEventListener('notificationclose', function(event)
		{
			if(event.notification.data)
			{
				event.notification.close();
				
				var promise = sendAnalyticsEvent('close', event.notification.tag + ':' + event.notification.data.id);
				
				event.waitUntil(promise);
			}
		});
		
		self.addEventListener('pushsubscriptionchange', function(event)
		{
			if(Notification.permission === 'granted')
				event.waitUntil(syncPushSubscription());
		});
		
		self.addEventListener('message', function(event)
		{
			if(typeof event.data === 'string')
				var name = event.data;
			else if(event.data && event.data.name)
				var name = event.data.name;
			else
				var name = undefined;
			
			var promise = null;
			
			switch(name)
			{
				case 'syncPushSubscription':
				{
					if(Notification.permission === 'granted')
						promise = syncPushSubscription();
				}
				break;
			}
			
			if(promise)
				event.waitUntil(promise);
		});
	}
	
 r=arguments[n];if(null!=r)for(var o in r)i.call(r,o)&&(e[o]=r[o])}return e},r.accessDeep=function(e,n){for(var t=n.split("."),r=0;r<t.length-1;r++){var o=t[r];e[o]=e[o]||{},e=e[o]}return{parent:e,name:t[t.length-1]}},r.createPackage=function(e,n,t){var o=r.registerImports({},e,n);return t&&(o.__expand={depends:e,imports:n}),o},r.registerImports=function(e,n,t){for(var o=0;o<n.length;o++)if(t[o].__expand)r.registerImports(e,t[o].__expand.depends,t[o].__expand.imports);else{var i=r.accessDeep(e,n[o]);i.parent[i.name]=t[o]}return e},t.exports}({vow:t.vow});var r=t.env.namespace?t.utils.accessDeep(n,t.env.namespace):null;r&&r.parent&&r.parent[r.name]&&r.parent[r.name].modules&&r.parent[r.name].ready&&console.error("(Yandex Maps JS API): api is already enabled on this page with same namespace."),function(){function e(e){return"undefined"==typeof f[e]?f[e]=n(e):f[e]}function n(e){return r(e)||r(d+i(e))||r(t.env.browser.cssPrefix+i(e))}function r(e){return"undefined"!=typeof o().style[e]?e:null}function o(){return u||(u=document.createElement("div"))}function i(e){return e?e.substr(0,1).toUpperCase()+e.substr(1):e}function s(n){var t=e(n);return t&&t!=n&&(t="-"+d+"-"+n),t}function a(n){return c[n]&&e("transitionProperty")?s(c[n]):null}var u,c={transform:"transform",opacity:"opacity",transitionTimingFunction:"transition-timing-function",userSelect:"user-select",height:"height"},l={},f={},d=t.env.browser.cssPrefix.toLowerCase();t.supports.css={checkProperty:e,checkTransitionProperty:function(e){return"undefined"==typeof l[e]?l[e]=a(e):l[e]},checkTransitionAvailability:a}}(),t.supports.csp={isSupported:"undefined"!=typeof Blob&&"undefined"!=typeof URL,isNonceSupported:t.env.browser.name&&t.env.browser.version?!(t.env.browser.name.search("Safari")!=-1&&parseInt(t.env.browser.version)<10):null},function(){function e(){if(!window.WebGLRenderingContext)return!1;var e={"Samsung Internet":!0,AndroidBrowser:!0},n="Webkit"==t.env.browser.engine&&+t.env.browser.engineVersion<537;return!n&&!e[t.env.browser.name]}function n(){if(!e())return null;var n,t;try{var r=document.createElement("canvas");t=r.getContext(n="webgl",o),t||(t=r.getContext(n="experimental-webgl",o),t||(n=null))}catch(i){n=null}return n?{contextName:n,context:t}:null}function r(e,n){e.width=226,e.height=256,n.fillStyle="#fff",n.fillRect(0,0,150,150),n.globalCompositeOperation="xor",n.fillStyle="#f00",n.fillRect(10,10,100,100),n.fillStyle="#0f0",n.fillRect(50,50,100,100);for(var t=n.getImageData(49,49,2,2),r=[],o=0;o<16;o++)r.push(t.data[o]);return"0x0x0x0x0x0x0x0x0x0x0x0x0x255x0x255"==r.join("x")}var o={failIfMajorPerformanceCaveat:!0,antialias:!1},i={};t.supports.graphics={hasSvg:function(){return"svg"in i||(i.svg=document.implementation&&document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")),i.svg},hasCanvas:function(){if(!("canvas"in i)){var e=document.createElement("canvas"),n="getContext"in e?e.getContext("2d"):null;i.canvas=!!n&&r(e,n)}return i.canvas},hasWebGl:function(){return"webgl"in i||(i.webgl=n()),i.webgl},redetect:function(){i={}},getWebGlContextName:function(){return i.webgl&&i.webgl.contextName}}}(),function(){function e(){var e=!0;"MacOS"==t.env.browser.osFamily&&/^10\.[0-8](\.|$)/.test(t.env.browser.osVersion)&&(e=!1,n("OldMac"));var i=["requestAnimationFrame","Worker","URL","Blob","XMLHttpRequest","Set","Map","WebAssembly"];i.forEach(function(t){window[t]||(e=!1,n(t))}),"function"!=typeof Math.trunc&&(e=!1,n("MathTrunc"));var s=t.supports.graphics.hasWebGl();if(!s||"webgl"!==s.contextName)return n("hasWebGl"),!1;var a=s.context;0==a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS)&&(e=!1,n("MAX_VERTEX_TEXTURE_IMAGE_UNITS")),a.getExtension("OES_vertex_array_object")||(e=!1,n("OES_vertex_array_object")),a.getExtension("OES_standard_derivatives")||(e=!1,n("OES_standard_derivatives"));var u=a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT);if(u&&0!=u.precision||(e=!1,n("highp")),!r()){var c=o();e=!1,t.count("error",{path:["vectorEngine.drawPointsError",t.env.browser.platform,t.env.browser.name,c.vendor,c.renderer].join("."),share:1})}return e}function n(e){var n=o();t.count("error",{path:["vectorEngine.reasonsVectorNotSupported",e,t.env.browser.platform,t.env.browser.name,n.vendor,n.renderer].join("."),share:.1})}function r(){var e=document.createElement("canvas");e.width=1,e.height=1;var n=e.getContext("webgl",{alpha:!1,depth:!1,antialias:!1}),t=n.createShader(n.VERTEX_SHADER);if(!t)return!1;n.shaderSource(t,"#version 100\nattribute vec2 p;\nvoid main() {\n    gl_Position = vec4(p,0,1);\n    gl_PointSize = 1.0;\n}"),n.compileShader(t);var r=n.createShader(n.FRAGMENT_SHADER);if(!r)return!1;n.shaderSource(r,"#version 100\nvoid main() {\n    gl_FragColor = vec4(1, 0, 0, 1);\n}"),n.compileShader(r);var o=n.createProgram();n.attachShader(o,t),n.attachShader(o,r),n.bindAttribLocation(o,0,"p"),n.linkProgram(o);var i=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,i),n.bufferData(n.ARRAY_BUFFER,new Float32Array([0,0]),n.STATIC_DRAW),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,2,n.FLOAT,!1,0,0),n.clearColor(0,1,0,1),n.clear(n.COLOR_BUFFER_BIT),n.useProgram(o),n.drawArrays(n.POINTS,0,1);var s=new Uint8Array(4);return n.readPixels(0,0,1,1,n.RGBA,n.UNSIGNED_BYTE,s),255===s[0]}function o(){var e={},n=t.supports.graphics.hasWebGl();if(!n)return e;var r=n.context,o=r.getExtension("WEBGL_debug_renderer_info");return o&&(e.vendor=r.getParameter(o.UNMASKED_VENDOR_WEBGL).replace(/\W/g,"_"),e.renderer=r.getParameter(o.UNMASKED_RENDERER_WEBGL).replace(/\W/g,"_")),e}var i;t.supports.vector={isSupported:function(){if(void 0===i)try{i=e()}catch(n){i=!1}return i}}}(),t.supports.printPatchNeeded=!t.supports.css.checkProperty("printColorAdjust"),t.logger=function(e){function n(e,n){var r="";return t.env.debug&&(r+="("+e+"): "),r+=n}var r={exports:{}},o=(r.exports,"Yandex Maps JS API");return r.exports={assert:function(e,r){e||t.env.debug&&console.log(n(o,r))},log:function(e){t.env.debug&&console.log(n(o,e))},notice:function(e){t.env.debug&&console.info(n(o,e))},warning:function(e){t.env.debug&&console.warn(n(o,e))},error:function(e){console.error(n(o,e))},exception:function(e,t){throw new Error(n(e,t))}},r.exports}(),function(){var e=t.env.browser;e.documentMode=document.documentMode,e.isIE="MSIE"==e.name||"IEMobile"==e.name,e.isEdge="Edge"==e.engine,e.isChromium=e.base&&"chromium"==e.base.toLocaleLowerCase(),e.isSafari="Safari"==e.name;var n="Edge"==e.engine||"MSIE"==e.name&&e.osVersion>6.1||"IEMobile"==e.name&&e.engineVersion>=6;n?e.eventMapper="pointer":e.eventMapper="touchMouse",e.androi