/**
 * WARNING: DO NOT USE ES2015+ OR COMMONJS. This file is served as-is and isn't
 * transpiled by Babel or bundled by Webpack.
 */

// eslint-disable-next-line strict
'use strict';

const queuedMessages = [];

/**
 *  We want to make sure that if the service worker gets updated that we
 *  immediately claim it, to ensure we're not running stale versions of the worker
 *	See: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting
 */

self.addEventListener( 'install', function ( event ) {
	event.waitUntil( self.skipWaiting() );
} );

self.addEventListener( 'activate', function ( event ) {
	event.waitUntil( self.clients.claim() );
} );

self.addEventListener( 'push', function ( event ) {
	if ( typeof event.data !== 'object' && typeof event.data.json !== 'function' ) {
		return;
	}

	const notification = event.data.json();

	event.waitUntil(
		self.registration
			.showNotification( notification.msg, {
				tag: 'note_' + notification.note_id,
				icon: notification.icon,
				timestamp: notification.note_timestamp,
				data: notification,
			} )
			.then( function () {
				if ( notification.note_opened_pixel ) {
					fetch( notification.note_opened_pixel, { mode: 'no-cors' } ).catch( function () {
						// eslint-disable-next-line no-console
						console.log( 'Could not load the pixel %s', notification.note_opened_pixel );
					} );
				}
			} )
	);
} );

self.addEventListener( 'notificationclick', function ( event ) {
	const notification = event.notification;
	notification.close();

	event.waitUntil(
		self.clients.matchAll().then( function ( clientList ) {
			if ( clientList.length > 0 ) {
				clientList[ 0 ].postMessage( { action: 'openPanel' } );
				clientList[ 0 ].postMessage( { action: 'trackClick', notification: notification.data } );
				try {
					clientList[ 0 ].focus();
				} catch ( err ) {
					// Client didn't need focus
				}
			} else {
				queuedMessages.push( { action: 'openPanel' } );
				queuedMessages.push( { action: 'trackClick', notification: notification.data } );
				self.clients.openWindow( '/' );
			}
		} )
	);
} );

self.addEventListener( 'message', function ( event ) {
	if ( ! ( 'action' in event.data ) ) {
		return;
	}

	switch ( event.data.action ) {
		case 'sendQueuedMessages':
			self.clients.matchAll().then( function ( clientList ) {
				let queuedMessage;

				if ( clientList.length > 0 ) {
					queuedMessage = queuedMessages.shift();
					while ( queuedMessage ) {
						clientList[ 0 ].postMessage( queuedMessage );
						queuedMessage = queuedMessages.shift();
					}
				}
			} );
			break;
	}
} );

// eslint-disable-next-line no-unused-vars
self.addEventListener( 'fetch', function ( event ) {
	// this listener is required for "Add to Home Screen" support
} );
e5c14f39c",(()=>{if(!s.miniCssF)throw new Error("MiniCSSWithRTLPlugin was loaded before MiniCSSExtractPlugin");var e;s.miniCssF=(e=s.miniCssF,t=>{var r="rtl"===document.dir,a=e(t);return r?a.replace(/\.css(?:$|\?)/,".rtl$&"):a})})(),s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="jetpack-search:",s.l=(r,a,n,o)=>{if(e[r])e[r].push(a);else{var i,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var p=l[d];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+n){i=p;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",t+n),i.src=r),e[r]=[a];var u=(t,a)=>{i.onerror=i.onload=null,clearTimeout(h);var n=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach(e=>e(a)),t)return t(a)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),c&&document.head.appendChild(i)}},r={613:0},s.f.wpI18n=(e,t)=>{r[e]?t.push(r[e]):0===r[e]&&t.push(r[e]=(e=>{var t=s(5417);return t&&t.downloadI18n?t.downloadI18n("build/instant-search/"+s.u(e),"jetpack-search-pkg","plugin"):Promise.reject(new Error("I18n loader is not available. Check that WordPress is exporting wp.jpI18nLoader."))})(e).then(()=>{r[e]=!1},t=>{r[e]=0,console.error("Failed to fetch i18n data: ",t)}))},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),a=e=>new Promise((t,r)=>{var a=s.miniCssF(e),n=s.p+a;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var n=(i=r[a]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===t))return i}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var i;if((n=(i=o[a]).getAttribute("data-href"))===e||n===t)return i}})(a,n))return t();((e,t,r,a)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,n.parentNode.removeChild(n),a(c)}},n.href=t,document.head.appendChild(n)})(e,n,t,r)}),n={942:0},s.f.miniCss=(e,t)=>{n[e]?t.push(n[e]):0!==n[e]&&({613:1})[e]&&t.push(n[e]=a(e).then(()=>{n[e]=0},t=>{throw delete n[e],t}))},(()=>{var e={942:0};s.f.j=(t,r)=>{var a=s.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var n=new Promise((r,n)=>a=e[t]=[r,n]);r.push(a[2]=n);var o=s.p+s.u(t),i=new Error;s.l(o,r=>{if(s.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}},"chunk-"+t,t)}};var t=(t,r)=>{var a,n,[o,i,c]=r,l=0;if(o.some(t=>0!==e[t])){for(a in i)s.o(i,a)&&(s.m[a]=i[a]);if(c)c(s)}for(t&&t(r);l<o.length;l++)n=o[l],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=globalThis.webpackChunkjetpack_search=globalThis.webpackChunkjetpack_search||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";s(554);var e=s(9755),t=s(4184);function r(){Promise.all([s.e(303),s.e(613)]).then(s.bind(s,1559)).then(e=>e.initialize())}window[e.W1]&&(0,t.vJ)(),"loading"!==document.readyState?r():document.addEventListener("DOMContentLoaded",r)})()})();