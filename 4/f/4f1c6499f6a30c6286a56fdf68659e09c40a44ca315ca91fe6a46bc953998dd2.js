"use strict";(window.webpackChunkNRBA=window.webpackChunkNRBA||[]).push([[457],{470:(t,e,i)=>{i.d(e,{AG:()=>l,FX:()=>h,n1:()=>o,uR:()=>c});var s=i(9599),n=i(5277),r=i(248),a=Object.prototype.hasOwnProperty;function l(t,e,i){return t||0===t||""===t?e(t)+(i?",":""):"!"}function c(t,e){return e?Math.floor(t).toString(36):void 0===t||0===t?"":Math.floor(t).toString(36)}function h(t){var e=Object.hasOwnProperty("create")?Object.create(null):{},i=0;return function(s){if(void 0===s||""===s)return"";var n=new r.RR({agentIdentifier:t});s=String(s),n.shouldObfuscate()&&(s=n.obfuscateString(s));return a.call(e,s)?c(e[s],!0):(e[s]=i++,function(t){return"'"+t.replace(d,"\\$1")}(s))}}function o(t,e){var i=[];return(0,s.D)(t,(function(t,s){if(!(i.length>=64)){var r,a=5;switch(t=e(t),typeof s){case"object":s?r=e((0,n.P)(s)):a=9;break;case"number":a=6,r=s%1?s:s+".";break;case"boolean":a=s?7:8;break;case"undefined":a=9;break;default:r=e(s)}i.push([a,t+(r?","+r:"")])}})),i}var d=/([,\\;])/g},4457:(t,e,i)=>{i.r(e),i.d(e,{Aggregate:()=>u});var s=i(470),n=(i(9206),i(9599)),r=i(5569),a=i(4539),l=i(6621),c=i(3195),h=i(5970),o=i(8025),d=i(8438);class u extends o.W{constructor(t,e){var i;if(super(t,e),i=this,d.il){this.timings=[],this.timingsSent=[],this.lcpRecorded=!1,this.lcp=null,this.clsSupported=!1,this.cls=0,this.clsSession={value:0,firstEntryTime:0,lastEntryTime:0},this.curSessEndRecorded=!1;try{this.clsSupported=PerformanceObserver.supportedEntryTypes.includes("layout-shift")}catch(t){}var s=(0,h.Mt)(this.agentIdentifier,"page_view_timing.maxLCPTimeSeconds")||60,n=(0,h.Mt)(this.agentIdentifier,"page_view_timing.initialHarvestSeconds")||10,l=(0,h.Mt)(this.agentIdentifier,"page_view_timing.harvestTimeSeconds")||30;this.scheduler=new r.o("events",{onFinished:function(){return i.onHarvestFinished(...arguments)},getPayload:function(){return i.prepareHarvest(...arguments)},onUnload:()=>this.recordLcp()},this),(0,a.X)("timing",(function(){return i.processTiming(...arguments)}),void 0,this.ee),(0,a.X)("lcp",(function(){return i.updateLatestLcp(...arguments)}),void 0,this.ee),(0,a.X)("cls",(function(){return i.updateClsScore(...arguments)}),void 0,this.ee),(0,a.X)("docHidden",(t=>this.endCurrentSession(t)),void 0,this.ee),(0,a.X)("winPagehide",(t=>this.recordPageUnload(t)),void 0,this.ee),setTimeout((()=>{this.recordLcp(),this.lcpRecorded=!0}),1e3*s),this.scheduler.startTimer(l,n)}}recordLcp(){if(!this.lcpRecorded&&null!==this.lcp){var t=this.lcp[0],e=this.lcp[1],i=this.lcp[2],s={size:t.size,eid:t.id};i&&(i["net-type"]&&(s["net-type"]=i["net-type"]),i["net-etype"]&&(s["net-etype"]=i["net-etype"]),i["net-rtt"]&&(s["net-rtt"]=i["net-rtt"]),i["net-dlink"]&&(s["net-dlink"]=i["net-dlink"])),t.url&&(s.elUrl=(0,l.f)(t.url)),t.element&&t.element.tagName&&(s.elTag=t.element.tagName),(e>0||this.clsSupported)&&(s.cls=e),this.addTiming("lcp",Math.floor(t.startTime),s,!1),this.lcpRecorded=!0}}updateLatestLcp(t,e){if(this.lcp&&this.lcp[0].size>=t.size)return;this.lcp=[t,this.cls,e]}updateClsScore(t){(t.startTime-this.clsSession.lastEntryTime>1e3||t.startTime-this.clsSession.firstEntryTime>5e3)&&(this.clsSession={value:0,firstEntryTime:t.startTime,lastEntryTime:t.startTime}),this.clsSession.value+=t.value,this.clsSession.lastEntryTime=Math.max(this.clsSession.lastEntryTime,t.startTime),this.cls<this.clsSession.value&&(this.cls=this.clsSession.value)}endCurrentSession(t){this.curSessEndRecorded||(this.addTiming("pageHide",t,null,!0),this.curSessEndRecorded=!0)}recordPageUnload(t){this.addTiming("unload",t,null,!0),this.endCurrentSession(t)}addTiming(t,e,i,s){this.blocked||(i=i||{},(this.cls>0||this.clsSupported)&&s&&(i.cls=this.cls),this.timings.push({name:t,value:e,attrs:i}),(0,c.p)("pvtAdded",[t,e,i],void 0,void 0,this.ee))}processTiming(t,e,i){var s=this;"fi"===t&&setTimeout((function(){return s.recordLcp(...arguments)}),0),this.addTiming(t,e,i,!0)}onHarvestFinished(t){if(t.retry&&this.timingsSent.length>0){for(var e=0;e<this.timingsSent.length;e++)this.timings.push(this.timingsSent[e]);this.timingsSent=[]}}appendGlobalCustomAttributes(t){var e=t.attrs||{},i=(0,h.C5)(this.agentIdentifier).jsAttributes||{},s=["size","eid","cls","type","fid","elTag","elUrl","net-type","net-etype","net-rtt","net-dlink"];(0,n.D)(i,(function(t,i){s.indexOf(t)<0&&(e[t]=i)}))}prepareHarvest(t){if(0!==this.timings.length){var e=this.getPayload(this.timings);if(t.retry)for(var i=0;i<this.timings.length;i++)this.timingsSent.push(this.timings[i]);return this.timings=[],{body:{e}}}}getPayload(t){for(var e=(0,s.FX)(this.agentIdentifier),i="bel.6;",n=0;n<t.length;n++){var r=t[n];i+="e,",i+=e(r.name)+",",i+=(0,s.AG)(r.value,s.uR,!1)+",",this.appendGlobalCustomAttributes(r);var a=(0,s.n1)(r.attrs,e);a&&a.length>0&&(i+=(0,s.uR)(a.length)+";"+a.join(";")),n+1<t.length&&(i+=";")}return i}}}}]);	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font: normal 18px/1 'social-logos';
	vertical-align: top;
	text-align: center;
}
/* text + icon styles should have relative and top position */
.sd-social-icon-text ul li a.sd-button:before {
	position: relative;
	top: 2px;
}

/* Make it look great in Chrome and Safari */
@media screen and (-webkit-min-device-pixel-ratio:0) {
	.sd-content ul li a.sd-button:before {
		position: relative;
		top: 2px;
	}
}

.sd-social-official ul li a.sd-button:before {
	position: relative;
	top: -2px;
}
/* Make it look great in Chrome and Safari */
@media screen and (-webkit-min-device-pixel-ratio:0) {
	.sd-social-official ul li a.sd-button:before {
		top: 0px;
	}
}

.sd-content ul li {
	margin: 0 8px 12px 0;
	padding: 0;
}
/* Add more pading on touch devices */
.jp-sharing-input-touch .sd-content ul li { padding-left: 10px; }

.sd-content ul li.preview-item.no-icon a.sd-button span {
	margin-left: 0;
}

/* Text only */
.sd-social-text .sd-content ul li a:before,
.sd-content ul li.no-icon a:before {
	display: none;
}
body .sd-social-text .sd-content ul li.share-custom a span,
body .sd-content ul li.share-custom.no-icon a span {
	background-image: none;
	background-position: -500px -500px !important;	/* hack to work around !important inline style */
	background-repeat: no-repeat !important;
	padding-left: 0;
	height: 0;
	line-height: inherit;
}

.sd-social-icon .sd-content ul li a.share-more {
	position: relative;
	top: -4px;
}
@media screen and (-webkit-min-device-pixel-ratio:0) {
	.sd-social-icon .sd-content ul li a.share-more {
		top: 2px;
	}
}
/* Firefox specific hack to make the share more button look better on Firefox. */
@-moz-document url-prefix() {
	.sd-social-icon .sd-content ul li a.share-more {
		top: 2px;
	}
}

.sd-social-icon .sd-content ul li a.share-more span {
	margin-left: 3px;
}


/* Individual icons */
.sd-social-icon .sd-content ul li.share-print a:before,
.sd-social-text .sd-content ul li.share-print a:before,
.sd-content ul li.share-print div.option.option-smart-off a:before,
.sd-social-icon-text .sd-content li.share-print a:before,
.sd-social-official .sd-content li.share-print a:before {
	content: '\f469';
}

.sd-social-icon .sd-content ul li.share-email a:before,
.sd-social-text .sd-content ul li.share-email a:before,
.sd-content ul li.share-email div.option.option-smart-off a:before,
.sd-social-icon-text .sd-content li.share-email a:before,
.sd-social-official .sd-content li.share-email a:before {
	content: '\f410';
}
.sd-social-icon .sd-content ul li.share-linkedin a:before,
.sd-social-text .sd-content ul li.share-linkedin a:before,
.sd-content ul li.share-linkedin div.option.option-smart-off a:before,
.sd-social-icon-text .sd-content li.share-linkedin a:before {
	content: '\f207';
}
.sd-social-icon .sd-content ul li.share-twitter a:before,
.sd-social-text .sd-content ul li.share-twitter a:before,
.sd-content ul li.share-twitter div.option.option-smart-off a:before,
.sd-social-icon-text .sd-content li.share-twitter a:before {
	content: '\f202';
}
.sd-social-icon .sd-content ul li.share-x a:before,
.sd-social-text .sd-content ul li.share-x a:before,
.sd-content ul li.share-x div.option.option-smart-off a:before,
.sd-social-icon-text .sd-content li.share-x a:before,
.sd-social-official .sd-content li.share-x a:before {
	content: '\f10e';
}
.sd-social-icon .sd-content ul li.share-reddit a:before,
.sd-social-text .sd-content ul li.share-reddit a:before,
.sd-content ul li.share-reddit div.option.option-smart-off a:before,
.sd-social-icon-text .sd-content li.share-reddit a:before,
.sd-social-official .sd-content li.share-reddit a:before {
	content: '\f222';
}
.sd-social-icon .sd-content ul li.share-tumblr a:before,
.sd-social-text .sd-content ul li.share-tumblr a:before,
.sd-content ul li.share-tumblr div.option.option-smart-off a:before,
.sd-social-icon-text .sd-content li.share-tumblr a:before {
	content: '\f607';
}

.sd-social-icon .sd-content ul li.share-pocket a:before,
.sd-social-text .sd-content ul li.share-pocket a:before,
.sd-content ul li.share-pocket div.option.option-smart-off a:before,
.sd-social-icon-text .sd-content li.share-pocket a:before {
	content: '\f224';
}
.sd-social-icon .sd-content ul li.share-pinterest a:before,
.sd-social-text .sd-content ul li.share-pinterest a:before,
.sd-content ul li.share-pinterest div.option.option-smart-off a:before,
.sd-social-icon-text .sd-content li.share-pinterest a:before {
	content: '\f210';
}
.sd-social-icon .sd-content ul li.share-facebook a:before,
.sd-social-text .sd-content ul li.share-facebook a:before,
.sd-content ul li.share-facebook div.option.option-smart-off a:before,
.sd-social-icon-text .sd-content li.share-facebook a:before {
	content: '\f203';
}
.sd-social-icon .sd-content ul li.share-press-this a:before,
.sd-social-text .sd-content ul li.share-press-this a:before,
.sd-content ul li.share-press-this div.option.option-smart-off a:before,
.sd-social-icon-text .sd-content li.share-press-this a:before,
.sd-social-official .sd-content li.share-press-this a:before {
	content: '\f205';
}
.sd-social-official .sd-content li.share-press-this a:before {
	color: #2ba1cb;
}
.sd-social-icon .sd-content ul li.share-telegram a:before,
.sd-social-text .sd-content ul li.share-telegram a:before,
.sd-content ul li.share-telegram div.option.option-smart-off a:before,
.sd-social-icon-text .sd-content li.share-telegram a:before,
.sd-social-official .sd-content li.share-telegram a:before {
	content: '\f606';
}
.sd-social-official .sd-content li.share-telegram a:before {
	color: #0088cc;
}
.sd-social-icon .sd-content ul li.share-mastodon a:before,
.sd-social-text .sd-content ul li.share-mastodon a:before,
.sd-content ul li.share-mastodon div.option.option-smart-off a:before,
.sd-social-icon-text .sd-content li.share-mastodon a:before,
.sd-social-official .sd-content li.share-mastodon a:before {
	content: '\f10a';
}
.sd-social-official .sd-content li.share-mastodon a:before {
	color: #563ACC;
}
.sd-social-icon .sd-content ul a.share-more:before,
.sd-social-text .sd-content ul a.share-more:before,
.sd-content ul li.advanced a.share-more:before,
.sd-social-icon-text .sd-content a.share-more:before,
.sd-social-official .sd-content a.share-more:before {
	content: '\f415';
}
.sd-social-official .sd-content a.share-more:before {
	color: #2ba1cb;
}

.sd-social-icon .sd-content ul li.share-jetpack-whatsapp a:before,
.sd-social-text .sd-content ul li.share-jetpack-whatsapp a:before,
.sd-content ul li.share-jetpack-whatsapp div.option.option-smart-off a:before,
.sd-social-icon-text .sd-content li.share-jetpack-whatsapp a:before,
.sd-social-official .sd-content li.share-jetpack-whatsapp a:before {
	content: '\f608';
}
.sd-social-official .sd-content li.share-jetpack-whatsapp a:before {
	color: #43d854;
}
.sd-social-icon .sd-content ul li[class*='share-'].share-jetpack-whatsapp a.sd-button {
	background: #43d854;
	color: #fff !important;
}

.sd-social-icon .sd-content ul li.share-nextdoor a:before,
.sd-social-text .sd-content ul li.share-nextdoor a:before,
.sd-content ul li.share-nextdoor div.option.option-smart-off a:before,
.sd-social-icon-text .sd-content li.share-nextdoor a:before,
.sd-social-official .sd-content li.share-nextdoor a:before {
	content: '\f10c';
}
.sd-social-official .sd-content li.share-nextdoor a:before {
	color: #8ED500;
}
.sd-social-icon .sd-content ul li[class*='share-'].share-nextdoor a.sd-button {
	background: #8ED500;
	color: #fff !important;
}


.sd-social-icon .sd-content ul li.share-deprecated a:before,
.sd-social-icon-text .sd-content li.share-deprecated a:before,
.sd-social-official .sd-content li.share-deprecated a:before,
.sd-content ul li.share-deprecated div.option.option-smart-off a:before {
	width: 1em;
	height: 1em;
	content: "\1F6AB";
}

/* Share count */
.sd-social .sd-button .share-count {
	background: #2ea2cc;
	color: #fff;
	-moz-border-radius: 10px;
	border-radius: 10px;
	display: inline-block;
	text-align: center;
	font-size: 10px;
	padding: 1px 3px;
	line-height: 1;
}

.sd-social-official .sd-content>ul>li>a.sd-button span {
	line-height: 1;
}

.sd-social-official .sd-content ul {
	display: flex;
	flex-wrap: wrap;
}

.sd-social-official .sd-content ul:after {
	content: ".";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}

.sd-social-official .sd-content li.share-press-this a {
	margin: 0 0 5px 0;
}

.sd-social-official .sd-content ul>li {
	display: flex;
	max-height: 18px;
}

.sd-social-official .sd-content ul>li .option-smart-off {
	margin-right: 8px;
}

.sd-social-official .fb-share-button > span {
	vertical-align: top !important;
}

.sd-social-official .sd-content .pocket_button iframe {
	width: 98px;
}


/* Individual official buttons */
.pocket_button iframe, .pinterest_button, .twitter_button, .linkedin_button>span {
	margin: 0 !important;
}

.linkedin_button>span, .pinterest_button a {
	display: block !important;
}

.sd-social-official .sd-content .share-tumblr iframe {
	max-width: 53px;
	width: unset;
}

body .sd-social-official li.share-print ,
body .sd-social-official li.share-email a,
body .sd-social-official li.share-custom a,
body .sd-social-official li a.share-more,
body .sd-social-official li.share-digg a,
body .sd-social-official li.share-press-this a
{
	position: relative;
	top: 0;
}


/* Custom icons */
body .sd-social-icon .sd-content li.share-custom>a {
	padding: 2px 3px 0 3px;
	position: relative;
	top: 4px;
}

body .sd-social-icon .sd-content li.share-custom a span,
body .sd-social-icon-text .sd-content li.share-custom a span,
body .sd-social-text .sd-content li.share-custom a span,
body .sd-social-official .sd-content li.share-custom a span,
body .sd-content ul li.share-custom a.share-icon span
{
	background-size: 16px 16px;
	background-repeat: no-repeat;
	margin-left: 0;
	padding: 0 0 0 19px;
	display: inline-block;
	height: 21px;
	line-height: 16px;
}

body .sd-social-icon .sd-content li.share-custom a span {
	width: 0;
}

body .sd-social-icon .sd-content li.share-custom a span {
	padding-left: 16px !important;
}


/* Overflow Sharing dialog */
.sharing-hidden .inner {
	position: absolute;
	z-index: 2;
	border: 1px solid #ccc;
	padding: 10px;
	background: #fff;
	box-shadow: 0px 5px 20px rgba(0,0,0,.2);
	-webkit-border-radius: 2px;
	-moz-border-radius: 2px;
	border-radius: 2px;
	margin-top: 5px;
	max-width: 400px;
}

.sharing-hidden .inner ul{
	margin: 0 !important;
}

.sd-social-official .sd-content .sharing-hidden ul>li.share-end {
	clear: both;
	margin: 0 !important;
	height: 0 !important;
}

.sharing-hidden .inner:before, .sharing-hidden .inner:after {
	position: absolute;
	z-index: 1;
	top: -8px;
	left: 20px;
	width: 0;
	height: 0;
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-bottom: 8px solid #ccc;
	content: "";
	display: block;
}

.sharing-hidden .inner:after {
	z-index: 2;
	top: -7px;
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-bottom: 8px solid #fff;
}

.sharing-hidden ul {
	margin: 0;
}


/**
 * Special colorful look for "Icon Only" option
 */

.sd-social-icon .sd-content ul li[class*='share-'] a,
.sd-social-icon .sd-content ul li[class*='share-'] a:hover,
.sd-social-icon .sd-content ul li[class*='share-'] div.option a {
	border-radius: 50%;
	-webkit-border-radius: 50%;
	border: 0;
	box-shadow: none;
	padding: 7px;
	position: relative;
	top: -2px;
	line-height: 1;
	width: auto;
	height: auto;
	margin-bottom: 0;
	max-width: 32px;
}

.sd-social-icon .sd-content ul li[class*='share-'] a.sd-button>span,
.sd-social-icon .sd-content ul li[class*='share-'] div.option a span {
	line-height: 1;
}

.sd-social-icon .sd-content ul li[class*='share-'] a:hover,
.sd-social-icon .sd-content ul li[class*='share-'] div.option a:hover {
	border: none;
	opacity: .6;
}



.sd-social-icon .sd-content ul li[class*='share-'] a.sd-button:before {
	top: 0;
}

.sd-social-icon .sd-content ul li[class*='share-'] a.sd-button.share-custom {
	padding: 8px 8px 6px 8px;
	top: 5px;
}

.sd-social-icon .sd-content ul li a.sd-button.share-more {
	margin-left: 10px;
}

.sd-social-icon .sd-content ul li:first-child a.sd-button.share-more {
	margin-left: 0;
}


.sd-social-icon .sd-button span.share-count {
	position: absolute;
	bottom: 0;
	right: 0;
	border-radius: 0;
	background: #555;
	font-size: 9px;
}

/* Special look colors */
.sd-social-icon .sd-content ul li[class*='share-'] a.sd-button {
	background: #e9e9e9;
	margin-top: 2px;
	text-indent: 0;
}

.sd-social-icon .sd-content ul li[class*='share-'].share-tumblr a.sd-button {
	background: #2c4762;
	color: #fff !important;
}

.sd-social-icon .sd-content ul li[class*='share-'].share-facebook a.sd-button {
	background: #0866ff;
	color: #fff !important;
}

.sd-social-icon .sd-content ul li[class*='share-'].share-twitter a.sd-button {
	background: #00acee;
	color: #fff !important;
}

.sd-social-icon .sd-content ul li[class*='share-'].share-x a.sd-button {
	background: #000;
	color: #fff !important;
}

.sd-social-icon .sd-content ul li[class*='share-'].share-pinterest a.sd-button {
	background: #ca1f27;
	color: #fff !important;
}

.sd-social-icon .sd-content ul li[class*='share-'].share-digg a.sd-button {
	color: #555555 !important;
}

.sd-social-icon .sd-content ul li[class*='share-'].share-press-this a.sd-button {
	background: #4f94d4;
	color: #fff !important;
}

.sd-social-icon .sd-content ul li[class*='share-'].share-telegram a.sd-button {
	background: #0088cc;
	color: #fff !important;
}

.sd-social-icon .sd-content ul li[class*='share-'].share-linkedin a.sd-button {
	background: #0077b5;
	color: #fff !important;
}

.sd-social-icon .sd-content ul li[class*='share-'].share-pocket a.sd-button {
	background: #ee4056;
	color: #fff !important;
}

.sd-social-icon .sd-content ul li[class*='share-'].share-reddit a.sd-button {
	background: #cee3f8;
	color: #555555 !important;
}

.sd-social-icon .sd-content ul li[class*='share-'].share-mastodon a.sd-button {
	background: linear-gradient(to top, #563ACC 0%, #6364FF 100%);
	color: #fff !important;
}

/**
 * Screen Reader Text for "Icon Only" option
 */

.sharing-screen-reader-text {
	clip: rect(1px, 1px, 1px, 1px);
	position: absolute !important;
	height: 1px;
	width: 1px;
	overflow: hidden;
}

.sharing-screen-reader-text:hover,
.sharing-screen-reader-text:active,
.sharing-screen-reader-text:focus {
	background-color: #f0f0f1;
	border-radius: 3px;
	box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
	clip: auto !important;
	color: #21759b;
	display: block;
	font-size: 14px;
	font-weight: bold;
	height: auto;
	left: 5px;
	line-height: normal;
	padding: 15px 23px 14px;
	text-decoration: none;
	top: 5px;
	width: auto;
	z-index: 100000; /* Above WP toolbar */
}


#jetpack-source_f_name {
	display: none!important;
	position: absolute !important;
	left: -9000px;
}

.sd-content .share-customize-link {
	margin-top: 8px;
	line-height: 11px;
}

.sd-content .share-customize-link a {
	font-size: 11px;
	font-family: "Open Sans", sans-serif;
}

@media print {
	.sharedaddy.sd-sharing-enabled {
		display: none;
	}
}
