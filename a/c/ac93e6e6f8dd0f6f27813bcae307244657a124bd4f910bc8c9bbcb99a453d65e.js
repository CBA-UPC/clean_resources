/*!
 * (c) 2024 Agnoplay
 *
 * Version: 3.5.1
 * Created: 2024-01-11T10:00
 *
 */
"use strict";(self.webpackChunkagnoplay=self.webpackChunkagnoplay||[]).push([[299],{6867:(e,t,n)=>{n.r(t);n(4338);"undefined"!=typeof window&&(window.AGNO.initMoatTracking=function(e,t,n,o){if(!1===t.hasOwnProperty("partnerCode"))return!1;var d=document.createElement("script");n=n||e&&(void 0!==e.O?e.O.parentNode:document.body)||document.body;var i=[],a={vidIntType:"4",vidIntVersion:"1.0",adsManager:e,ids:t,imaSDK:!0,events:[],dispatchEvent:clientCallback:o},r={complete:"AdVideoComplete",firstquartile:"AdVideoFirstQuartile",impression:"AdImpression",loaded:"AdLoaded",midpoint:"AdVideoMidpoint",pause:"AdPaused",skip:"AdSkipped",start:"AdVideoStart",thirdquartile:"AdVideoThirdQuartile",volumeChange:"AdVolumeChange"};if(google&&google.ima&&e){var p,s="_moatApi".concat(Math.floor(1e8*Math.random()));for(p in google.ima.AdEvent.Type)o=function(t){if(a.sendEvent){for(t=i.length-1;t>=0;t--)e.removeEventListener(i[t].type,i[t].func);a.sendEvent(a.events)}else a.events.push({type:r[t.type]||t.type,adVolume:e.getVolume()})},e.addEventListener(google.ima.AdEvent.Type[p],o),i.push({type:google.ima.AdEvent.Type[p],func:o})}var u,c;s=void 0!==s?s:"";try{c=(u=n.ownerDocument).defaultView||u.parentWindow}catch(e){u=document,c=window}return c[s]=a,d.type="text/javascript",n&&n.appendChild(d),d.src="https://z.moatads.com/".concat(t.partnerCode,"/moatvideo.js#").concat(s),a})}}]);