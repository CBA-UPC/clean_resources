(()=>{"use strict";var e,t,n={},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={id:e,exports:{}};return n[e](a,a.exports,o),a.exports}o.m=n,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce((t,n)=>(o.f[n](e,t),t),[])),o.u=e=>e+".a8c-analytics.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="a8c-analytics:",o.l=(n,r,a,i)=>{if(e[n])e[n].push(r);else{var c,d;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var u=l[s];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){c=u;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",t+a),c.src=n),e[n]=[r];var w=(t,r)=>{c.onerror=c.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach(e=>e(r)),t)return t(r)},p=setTimeout(w.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=w.bind(null,c.onerror),c.onload=w.bind(null,c.onload),d&&document.head.appendChild(c)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((n,o)=>r=e[t]=[n,o]);n.push(r[2]=a);var i=o.p+o.u(t),c=new Error;o.l(i,n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}},"chunk-"+t,t)}};var t=(t,n)=>{var r,a,[i,c,d]=n,l=0;if(i.some(t=>0!==e[t])){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);d&&d(o)}for(t&&t(n);l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0},n=self.webpackChunka8c_analytics=self.webpackChunka8c_analytics||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.nc=void 0,function(){const e=async function(){window._stq=window._stq||[],window._tkq=window._tkq||[],window._cbq=window._cbq||[],window.a8cAnalytics=window.a8cAnalytics||{},window.a8cAnalyticsConfig=window.a8cAnalyticsConfig||{},window.a8cAnalytics.kit=(await o.e(132).then(o.bind(o,132))).kitIndex,window.a8cAnalytics.cb=(await o.e(5).then(o.bind(o,5))).cookieBannerIndex,window.a8cAnalytics.dnsd=(await o.e(153).then(o.bind(o,153))).doNotSellDialogIndex,window.a8cAnalytics.cb.load()};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()}()})();ve;
	left: 25%;
	top: 30%;
	border-radius: .25em;
	overflow: hidden;
}

#ccpa-modal .components-modal__header {
	background-color: #1aa8e7;
	color: #e9ecf5;
	display: flex;
	flex-direction: row;
	padding: 15px;
	align-items: center;
	justify-content: space-between;
}

#ccpa-modal .ccpa-settings__intro-txt {
	padding: 15px;
	text-align: justify;
}

#ccpa-modal .components-modal__footer {
	padding: 15px;
}

#ccpa-modal .components-modal__footer-bottom {
	margin-top: 20px;
}

#ccpa-modal .components-modal__footer-bottom button {
	padding: 10px;
	padding-right: 10px;
	padding-left: 10px;
	border-radius: 18px;
	border: none;
	color: white;
	padding-left: 20px;
	padding-right: 20px;
	font-size: 16px;
	text-shadow: 0px -1px 1px #505050;
	background: rgb(111,156,2);
	background: linear-gradient(0deg, rgba(111,156,2,1) 0%, rgba(136,177,40,1) 50%, rgba(168,201,89,1) 100%);
	cursor: pointer;
}

#ccpa-modal .components-modal__footer-bottom button:hover {
	background: rgb(229,135,0);
	background: linear-gradient(0deg, rgba(229,135,0,1) 0%, rgba(242,158,39,1) 50%, rgba(254,186,88,1) 97%, rgba(255,217,161,1) 98%, rgba(255,217,161,1) 99%, rgba(254,186,88,1) 100%);	
}
</style>
<div class="components-modal__screen-overlay">
<div role="dialog" aria-labelledby="dialog_label" aria-modal="true" class="components-modal__frame">
<div class="components-modal__content ccpa-settings">
<div class="components-modal__header">
	<div class="components-modal__header-heading-container">
		<h1 class="components-modal__header-heading">Do Not Sell Or Share My Personal Information</h1>
	</div>
	<button type="button" aria-label="Close dialog" class="components-button components-icon-button ccpa-close-dialog">
		<svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-no-alt" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
			<path d="M14.95 6.46L11.41 10l3.54 3.54-1.41 1.41L10 11.42l-3.53 3.53-1.42-1.42L8.58 10 5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z"></path>
		</svg>
	</button>
</div>
<div class="ccpa-settings__intro-txt">
We take your privacy and trust in us seriously. We are committed to protecting the privacy and security of the information that you share with us. You can read more about our privacy practices in our Privacy Policy.<br />
Certain U.S. residents have the right to opt out of the sale or sharing of their personal information.<br />
This opt-out is managed through cookies, so if you delete cookies, your browser is set to delete cookies automatically after a certain length of time, or if you visit sites in a different browser, you'll need to make this selection again.<br />
After you opt-out you may still see ads, but they may just not be personalized.
</div>
<div class="components-modal__footer">
	<div role="form" class="ccpa-setting">
		<label>
			<input id="ccpa-opt-out" class="components-form-toggle__input opt-out" type="checkbox" value="false" autofocus />
			<span class="ccpa-setting__header">Do Not Sell Or Share My Personal Information</span>
		</label>
	</div>
	<div class="components-modal__footer-bottom g-is-style-white">
		<button class="g-button components-button is-button is-primary ccpa-close-dialog">Close</button>
	</div>
</div>
</div>
</div>
</div>
`;
		var closeDialogFunction = function() {
			if ( document.body === divElement.parentElement ) {
				document.body.removeChild( divElement );
			}
			return false;
		};

		var closeDialogs = divElement.getElementsByClassName( 'ccpa-close-dialog' );
		for ( var i = 0; i < closeDialogs.length; ++i ) {
			closeDialogs[i].onclick = closeDialogFunction;
		}

		var frame = divElement.getElementsByClassName( 'components-modal__screen-overlay' )[0];
		divElement.onclick = function( event ) {
			var frameRect = frame.getBoundingClientRect();
			const clickX = event.x;
			const clickY = event.y;

			if (
				clickX < frameRect.x ||
				clickX > ( frameRect.x + frameRect.width ) ||
				clickY < frameRect.y ||
				clickY > ( frameRect.y + frameRect.height )
			) {
				closeDialogFunction();
			}
		};

		return divElement;
	};
} )();