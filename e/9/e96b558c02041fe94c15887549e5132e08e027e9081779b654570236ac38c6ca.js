(function(){function f(a){this.foundVideoPlayers=[];this.SearchForNewVideoPlayersInterval=5E3;this.newVideoFoundCallback=a;this.init=function(){this.trackVideos()};this.trackVideos=function(){function b(b){b.contentWindow&&e.searchForVideosInWindow(b.contentWindow)}this.searchForVideosInWindow(window);for(var c=window.document.getElementsByTagName("iframe"),e=this,a=0;a<c.length;a++)b(c[a]);e=this;setTimeout(function(){e.trackVideos()},this.SearchForNewVideoPlayersInterval)};this.searchForVideosInWindow=
function(b){try{b.jwplayer}catch(c){return}this.searchForFlowPlayerPlayersInWindow(b);this.searchForJWPlayerPlayersInWindow(b);this.searchForVideoJSPlayersInWindow(b)};this.searchForFlowPlayerPlayersInWindow=function(b){if(b.flowplayer){var c=[],a=0;if("undefined"!=typeof b.flowplayer.instances)for(b.flowplayer.instances.forEach(function(b){c.push(b)}),a=0;a<c.length;a++)0>this.foundVideoPlayers.indexOf(c[a])&&(this.foundVideoPlayers.push(c[a]),this.newVideoFoundCallback("flowPlayer",c[a]))}};this.searchForJWPlayerPlayersInWindow=
function(b){if(b.jwplayer){var c=[];for(a=0;b.jwplayer(a).id;)c.push(b.jwplayer(a)),a++;for(var a=0;a<c.length;a++){b=!0;for(var d=0;d<this.foundVideoPlayers.length;d++)this.foundVideoPlayers[d].id&&this.foundVideoPlayers[d].id==c[a].id&&(b=!1);b&&(this.foundVideoPlayers.push(c[a]),this.newVideoFoundCallback("jwPlayer",c[a]))}}};this.searchForVideoJSPlayersInWindow=function(a){if(a.videojs&&"object"==typeof a.videojs.players)for(videoId in a.videojs.players){var b=a.videojs.players[videoId];0>this.foundVideoPlayers.indexOf(b)&&
(this.foundVideoPlayers.push(b),this.newVideoFoundCallback("videojs",b))}}}var g=new function(){this.SettingsObject=window.DotMetricsSettings;this._sentVideoUrls=[];this.Start=function(){var a=this;(new f(function(b,c){switch(b){case "flowPlayer":a.trackFP(c);break;case "jwPlayer":a.trackJW(c);break;case "videojs":a.trackVideoJS(c)}})).init()};this.sendData=function(a){if(!(0<=this._sentVideoUrls.indexOf(a))){var b=this.SettingsObject.SiteSectionId,c=window.location.hostname,e=encodeURIComponent(window.location),
d=this.SettingsObject.PVID,f=(new Date).getTimezoneOffset();b=this.SettingsObject.NCSHitUrl+"?videoUrl="+a+"&id="+b+"&dom="+c+"&url="+e+"&pvid="+d+"&tzOffset="+f;(new Image).src=b;this._sentVideoUrls.push(a)}};this.trackFP=function(a){var b=this;a.on("playing",function(c){b.sendData(a.currentSrc)})};this.trackJW=function(a){var b=this;a.on("play",function(c){c=a.getPlaylistItem();"undefined"!=typeof c&&b.sendData(c.file)})};this.trackVideoJS=function(a){var b=this;a.on("play",function(){b.sendData(a.currentSrc())})}};
top.location==self.location&&setTimeout(function(){g.Start()},100)})(window);
a11y-nav-menu-list .an-link:hover,.a11y-nav-menu-list .an-link:focus {
	color:#fff;
	text-decoration:underline;
}

.a11y-nav-menu-list ul .an-link {
	padding-left:18px;
}

@media (max-width: 750px) {
	/* Reveal Menu, hide submenis */
	.an-menu-control {
		display:block;
	}
	
	.an-links-container {
		display:none;
	}
	
	.an-links-container a {
		width:30%;
	}
}

/* Sub navigation in the sidebar */
#a11y-subnav {
	display:block;
	margin:0;
	padding:0;
	list-style:none;
	list-style-position:inside;
}

.a11y-subnav-item {
	border:1px solid #CECECE;
	display:block;
	min-height:40px;
	padding:8px;
	box-sizing:border-box;
	margin:0;
	margin-top: -1px;

}

.a11y-subnav-group {
	padding:0;
}

.a11y-subnav-group .a11y-subnav-item {
	padding-left:20px;
}

#a11y-subnav a {
	color:#404040;
	text-decoration:none;
	outline:none;
}

#a11y-subnav a:hover,#a11y-subnav a:focus {
	color:#009;
	text-decoration:underline;
	outline:none;
}

.a11y-subnav-control:after { 
	content:" ";
	float: right;
	background: url('/accessibility/forproducts/assets/images/down.svg');
	display: block;
	height: 1rem;
	width: 1rem;
	background-size: contain;
	transform: rotate(0);
	transition: 0.2s ease;
}

.a11y-subnav-control[aria-expanded=true] {
	background: #EDEDED;
}

.a11y-subnav-control[aria-expanded=true]:after { 
	transform: rotate(180deg);
	
}

@media (prefers-reduced-motion) {
  .a11y-subnav-control {
    animation: none;
  }
}
