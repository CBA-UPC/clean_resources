"use strict";(self.webpackChunkzeffo=self.webpackChunkzeffo||[]).push([[1668],{3461:function(e,t,r){r.d(t,{W:function(){return o}});const n=["click","mousedown","mousemove","keydown","scroll","touchstart"];function o(e,t=n,r=!0){let o=!1;const a=()=>{r&&o||(e(),o=!0)},s=[];return t.forEach((e=>{document.addEventListener(e,a,{capture:!0,once:r,passive:!0}),s.push((()=>{document.removeEventListener(e,a,{capture:!0})}))})),()=>{s.forEach((e=>e()))}}},81668:function(e,t,r){r.r(t),r.d(t,{PIP_IFRAME_OUTBOUND_TARGET:function(){return n.$v},PublisherIframe:function(){return l},isInPIPIframe:function(){return o},restoreSoftPIPPlayer:function(){return v},useFetchSoftPIPPlayerState:function(){return b},usePersistSoftPIPPlayerState:function(){return P}});var n=r(4447);function o(){return"undefined"!=typeof window&&window.frameElement?.getAttribute("id")===n.gb}var a=r(98661),s=r(49421);function i(e,t="",r=n.$v){let o;e&&(o=e?.href)&&(o.startsWith("//")||o.startsWith("http")&&!o.includes(t))&&e.setAttribute("target",r)}function c(e,t,r){const n=e?.getElementsByTagName?.("a");let o=n?.length??0;for(;o--;)i(n?.[o],t,r)}var u=r(35944);const l=({observeDOM:e,onError:t,onLoad:r,onLocationChange:o,outboundTarget:l,src:d,title:f})=>{const p=(0,a.useRef)(null),m=(e=>{const[t,r]=(0,a.useState)(null),o=(0,a.useCallback)((()=>{e.current&&(e.current.hasAttribute("src")?t||r(!0):r(!1))}),[t,e]),s=(0,a.useMemo)((()=>new MutationObserver(o)),[o]);return(0,a.useLayoutEffect)((()=>(e.current&&s.observe(e.current,{attributes:!0}),setTimeout(o,n.j),()=>{s.disconnect()})),[t,o,s,e]),t})(p);(0,a.useLayoutEffect)((()=>{!1===m&&t&&t(new Error("PIP: `src` is not set"))}),[m,t]);const h=(0,a.useMemo)((()=>({background:"white",border:(0,s.L)()?"5px solid red":0,height:"100%",width:"100%",left:0,top:0,position:"fixed",scrollbarWidth:"thin",zIndex:2147483645,overscrollBehavior:"none",overflow:"scroll",display:m?"block":"none"})),[m]);(0,a.useLayoutEffect)((()=>{try{const{contentWindow:e}=p.current||{};if(e){const r=e.history.pushState,n=e.history.replaceState;return e.history.pushState=function(...t){r.apply(e.history,t),r.apply(history,t),o&&o(e.location.href)},e.history.replaceState=function(...t){n.apply(e.history,t),n.apply(history,t),o&&o(e.location.href)},()=>{try{e.history.pushState=r,e.history.replaceState=n}catch(e){e instanceof Error&&t?.(e)}}}}catch(e){e instanceof Error&&t?.(e)}}),[t,o]);const y=(0,a.useCallback)((()=>{try{const e=p.current?.contentWindow?.location;o&&e?.href&&o(e.href)}catch(e){return void(e instanceof Error&&t?.(e))}p.current&&r&&r(p.current);const n=p.current?.contentWindow,a=p.current?.contentDocument;if(function(e){const t=e?.getElementsByTagName("base");t?.length&&Array.from(t).forEach((e=>{e.hasAttribute("target")&&e.removeAttribute("target")}))}(a),c(a,n?.location?.origin,l),e)return function(e,t,r){const n={attributes:!1,childList:!0,subtree:!0,attributeOldValue:!1,characterDataOldValue:!1};if(e){const o=new MutationObserver((e=>{let n=e.length;for(;n--;)if("childList"===e[n].type){let o=e[n].addedNodes.length||0;for(;o--;)"A"===e[n].addedNodes[o].nodeName?i(e[n].addedNodes[o],t,r):c(e[n].addedNodes[o],t,r)}}));return o.observe(e,n),()=>{o.disconnect()}}return()=>{}}(a?.body,n?.location?.origin,l)}),[e,t,r,o,l]),v=(0,a.useCallback)((e=>{t&&t(e)}),[t]);return(0,a.createPortal)((0,u.tZ)("iframe",{style:h,loading:"eager",id:n.gb,name:"fw-iframe",src:d,ref:p,onLoad:y,onError:v,title:f}),document.body,d)};var d=r(3461),f=r(12289),p=r(13270),m=r(72354),h=r(54211),y=r(62011);function v(){const e=(0,f.m)(),t=(0,m.G)();if(e)try{if(e.isSoftPIPStateProcessed||o())(0,p.PN)("Expired player state (TTL 20s)");else{let r={appContextType:h.LV.EMBED_CONTEXT_TYPE,createdAt:0};try{r=JSON.parse(t.getItem(n.z9)||"{}")}catch(e){}e.isSoftPIPStateProcessed=!0;const{createdAt:o,...a}=r;if(!o||o+2e4<(new Date).getTime())return;e.play&&e.play({...a,minimized:!0,widget_id:(0,y.k$)(),show_preroll:!1},{autoplay:!0,muted:!1,pip:!0}),!1===a.muted&&(0,d.W)((()=>{e.player.muted&&(e.player.muted=!1)}),["click","scroll"])}}catch(e){e instanceof Error&&(0,p.H)(e)}}const b=()=>{const[e]=(0,m.Xs)(n.z9,void 0);return e};var E=r(85692);const P=e=>{const{appContext:t,enabled:r=!0,isMinimized:o,params:s,video:i,videoEl:c}=e,u=(0,a.useCallback)((e=>{(0,m.G)().setItem(n.z9,JSON.stringify(e))}),[]),l=(0,a.useCallback)((()=>{(0,m.G)().removeItem(n.z9)}),[]),d=(0,a.useRef)(null),f=(0,a.useCallback)((()=>{null!==d.current&&clearInterval(d.current),l()}),[l]);return(0,a.useEffect)((()=>{if(r&&s.pip&&o&&i){const e=()=>(({appContext:e,params:t,video:r,videoEl:n,isMinimized:o})=>{const a=(0,y.f6)(e,t,r);return{appContextType:e.appContextType,...a.params,username:e.username,createdAt:(new Date).getTime(),start_time:("live_stream"!==r.video_type||r.live_stream_status!==E.Yi.ACTIVE&&r.live_stream_status!==E.Yi.PAUSED)&&n?Math.round(n.currentTime):0,video:r.encoded_id,minimized:o,muted:!n||n.muted,page_url:""}})({appContext:t,params:s,video:i,videoEl:c,isMinimized:o});u(e()),null!==d.current&&clearInterval(d.current),d.current=setInterval((()=>u(e())),1e3)}else f()}),[t,r,o,s,u,f,i,c]),(0,a.useEffect)((()=>{!1===r&&f()}),[r,f]),(0,a.useEffect)((()=>()=>f()),[f]),{clearPersistPlayerState:f}}}}]);r{clear:both}.items-justified-left{justify-content:flex-start}.items-justified-center{justify-content:center}.items-justified-right{justify-content:flex-end}.items-justified-space-between{justify-content:space-between}.screen-reader-text{clip:rect(1px,1px,1px,1px);word-wrap:normal!important;border:0;-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.screen-reader-text:focus{clip:auto!important;background-color:#ddd;-webkit-clip-path:none;clip-path:none;color:#444;display:block;font-size:1em;height:auto;left:5px;line-height:normal;padding:15px 23px 14px;text-decoration:none;top:5px;width:auto;z-index:100000}html :where(.has-border-color){border-style:solid}html :where([style*=border-top-color]){border-top-style:solid}html :where([style*=border-right-color]){border-right-style:solid}html :where([style*=border-bottom-color]){border-bottom-style:solid}html :where([style*=border-left-color]){border-left-style:solid}html :where([style*=border-width]){border-style:solid}html :where([style*=border-top-width]){border-top-style:solid}html :where([style*=border-right-width]){border-right-style:solid}html :where([style*=border-bottom-width]){border-bottom-style:solid}html :where([style*=border-left-width]){border-left-style:solid}html :where(img[class*=wp-image-]){height:auto;max-width:100%}:where(figure){margin:0 0 1em}html :where(.is-position-sticky){--wp-admin--admin-bar--position-offset:var(--wp-admin--admin-bar--height,0px)}@media screen and (max-width:600px){html :where(.is-position-sticky){--wp-admin--admin-bar--position-offset:0px}}
.has-text-align-justify{text-align:justify;}
</style>
<style id='classic-theme-styles-inline-css'>
/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
</style>
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://venturebeat.com/xmlrpc.php?rsd" />
<meta name="generator" content="WordPress 6.3.3" />
	<style>img#wpstats{display:none}</style>
		<meta name="parsely-title" content="Tagged - Synthetic Data" />
<meta name="parsely-link" content="http://venturebeat.com/tag/synthetic-data/" />
<meta name="parsely-type" content="index" />
<meta name="description" content="This is a complete list of VentureBeat articles from Tag: &lt;span&gt;Synthetic Data&lt;/span&gt;, in reverse chronological order."><meta property="fb:pages" content="7419689078"><link rel="shortcut icon" type="image/x-icon" href="https://venturebeat.com/wp-content/themes/vb-news/img/favicon.ico" />		<script type="text/javascript">
			var vbSettings = {"property":"VBNews","infinitePostInjection":{"start":2,"offset":5},"segmentKey":"q55cFWnIHzsfGlvByS48gDWc3hzHzwnt"};
		</script>
					<script type="text/javascript">
				var vb_page_info = {"title":"Synthetic Data Archives | VentureBeat","url":"venturebeat.com\/tag\/synthetic-data\/","page_type":"tag","tag":"https:\/\/venturebeat.com\/tag\/synthetic-data\/","subSiteName":"VentureBeat","is_mobile":false,"is_tablet":false,"ad_load":"normal","dfp_enabled":true,"isDDM":false};
			</script>
			<link rel="preload" href="https://venturebeat.com/wp-content/themes/vb-news/fonts/roboto-v20-latin/roboto-v20-latin-regular.woff2" type="font/woff2" as="font" crossorigin><meta name="robots" content="noindex,follow" />	<link rel="preconnect" href="https://www.googletagmanager.com">
	<link rel="preconnect" href="https://www.google-analytics.com">
	<link rel="preconnect" href="https://connect.facebook.net">
	<link rel="preconnect" href="https://cmp.quantcast.com">
	<link rel="preconnect" href="https://dn0qt3r0xannq.cloudfront.net">
	<link rel="preconnect" href="https://securepubads.g.doubleclick.net">
	<script type="text/javascript">var dfpTargeting = {"env":"production","page_type":"tag","tag_arch":"synthetic-data"}</script>		<script type="text/javascript">
			var buckets = ['A', 'B', 'C', 'D'];
			var session;
			var channel;
			var authors;
			var tags;
			var pubDate;
			var pubTime;
			var pubDateTime;
			var randomInt;
			var pubThirtyDays;
			var story_type;
			var testKV;
			var currentTime = Date.now()/1000;
			var subSiteName;
			var post_ID = dfpTargeting.post_id ? dfpTargeting.post_id : null;

			//return session value from url param or null if session doesn't exist
			function getSessionParam() {
				var currentSearchParams = new URLSearchParams(window.location.search);
				return currentSearchParams.get('session');
			}

			function getTestKeyValue() {
				var searchParams = new URLSearchParams(window.location.search);
				return searchParams.get('test');
			}

			//sees if forced session is valid in buckets array
			function validateSession(forcedSession) {
				var validatedSession = buckets.indexOf(forcedSession) > -1 ? forcedSession : '';
				return setSession(validatedSession);
			}

			//set session based on url param or create one from buckets array
			function setSession(forcedSession) {
				return session = forcedSession || randomSession();
			}

			//return int between provided min and maxes
			function getRandomInt(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}

			//choose random session from buckets array
			function randomSession() {
				return buckets[getRandomInt(0,buckets.length - 1)];
			}

			//store value 