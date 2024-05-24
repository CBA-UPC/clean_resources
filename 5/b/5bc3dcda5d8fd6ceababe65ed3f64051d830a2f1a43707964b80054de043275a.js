(function(){var requirejs,require,define,__extends;(function(n){var i=Object.defineProperty&&function(){var n,t;try{n={};Object.defineProperty(n,"x",{enumerable:!1,value:n});for(t in n)if(n.hasOwnProperty(t))return!1;return n.x===n}catch(i){return!1}}(),t;i||n.definePropertyShamSet||(n.definePropertyShamSet=!0,t=Object.defineProperty,Object.defineProperty=function(n,i,r){n instanceof Element?t(n,i,r):n[i]=r?r.value:!0})})(window);
/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */
(function(n){function r(n,t){return w.call(n,t)}function s(n,t){var o,s,f,e,h,p,c,b,r,l,w,k,u=t&&t.split("/"),a=i.map,y=a&&a["*"]||{};if(n){for(n=n.split("/"),h=n.length-1,i.nodeIdCompat&&v.test(n[h])&&(n[h]=n[h].replace(v,"")),n[0].charAt(0)==="."&&u&&(k=u.slice(0,u.length-1),n=k.concat(n)),r=0;r<n.length;r++)if(w=n[r],w===".")n.splice(r,1),r-=1;else if(w==="..")if(r===0||r===1&&n[2]===".."||n[r-1]==="..")continue;else r>0&&(n.splice(r-1,2),r-=2);n=n.join("/")}if((u||y)&&a){for(o=n.split("/"),r=o.length;r>0;r-=1){if(s=o.slice(0,r).join("/"),u)for(l=u.length;l>0;l-=1)if(f=a[u.slice(0,l).join("/")],f&&(f=f[s],f)){e=f;p=r;break}if(e)break;!c&&y&&y[s]&&(c=y[s],b=r)}!e&&c&&(e=c,p=b);e&&(o.splice(0,p,e),n=o.join("/"))}return n}function y(t,i){return function(){var r=b.call(arguments,0);return typeof r[0]!="string"&&r.length===1&&r.push(null),u.apply(n,r.concat([t,i]))}}function k(n){return function(t){return s(t,n)}}function d(n){return function(i){t[n]=i}}function h(i){if(r(e,i)){var u=e[i];delete e[i];l[i]=!0;o.apply(n,u)}if(!r(t,i)&&!r(l,i))throw new Error("No "+i);return t[i]}function a(n){var i,t=n?n.indexOf("!"):-1;return t>-1&&(i=n.substring(0,t),n=n.substring(t+1,n.length)),[i,n]}function p(n){return n?a(n):[]}function g(n){return function(){return i&&i.config&&i.config[n]||{}}}var o,u,c,f,t={},e={},i={},l={},w=Object.prototype.hasOwnProperty,b=[].slice,v=/\.js$/;c=function(n,t){var r,u=a(n),i=u[0],f=t[1];return n=u[1],i&&(i=s(i,f),r=h(i)),i?n=r&&r.normalize?r.normalize(n,k(f)):s(n,f):(n=s(n,f),u=a(n),i=u[0],n=u[1],i&&(r=h(i))),{f:i?i+"!"+n:n,n:n,pr:i,p:r}};f={require:function(n){return y(n)},exports:function(n){var i=t[n];return typeof i!="undefined"?i:t[n]={}},module:function(n){return{id:n,uri:"",exports:t[n],config:g(n)}}};o=function(i,u,o,s){var b,a,g,k,v,nt,w=[],tt=typeof o,it;if(s=s||i,nt=p(s),tt==="undefined"||tt==="function"){for(u=!u.length&&o.length?["require","exports","module"]:u,v=0;v<u.length;v+=1)if(k=c(u[v],nt),a=k.f,a==="require")w[v]=f.require(i);else if(a==="exports")w[v]=f.exports(i),it=!0;else if(a==="module")b=w[v]=f.module(i);else if(r(t,a)||r(e,a)||r(l,a))w[v]=h(a);else if(k.p)k.p.load(k.n,y(s,!0),d(a),{}),w[v]=t[a];else throw new Error(i+" missing "+a);g=o?o.apply(t[i],w):undefined;i&&(b&&b.exports!==n&&b.exports!==t[i]?t[i]=b.exports:g===n&&it||(t[i]=g))}else i&&(t[i]=o)};requirejs=require=u=function(t,r,e,s,l){if(typeof t=="string")return f[t]?f[t](r):h(c(t,p(r)).f);if(!t.splice){if(i=t,i.deps&&u(i.deps,i.callback),!r)return;r.splice?(t=r,r=e,e=null):t=n}return r=r||function(){},typeof e=="function"&&(e=s,s=l),s?o(n,t,r,e):setTimeout(function(){o(n,t,r,e)},4),u};u.config=function(n){return u(n)};requirejs._defined=t;define=function(n,i,u){if(typeof n!="string")throw new Error("See almond README: incorrect module build, no module name");i.splice||(u=i,i=[]);r(t,n)||r(e,n)||(e[n]=[n,i,u])};define.amd={jQuery:!0}})();define("oneplayer-css-loader",["require","exports"],function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function n(){}return n.loadCss=function(t,i){var r,e,u,o,f,s;if(i&&typeof i=="function"&&(n.cssLoaded?i():n.onLoadedCallbacks.push(i)),!n.cssLoadTriggered){if(n.cssLoadTriggered=!0,t=t||"en-us",n.playerCssHost[0]==="%"&&(n.playerCssHost=n.defaultPlayerCssHost),r=document.createElement("link"),r.setAttribute("rel","stylesheet"),r.setAttribute("type","text/css"),n.url.indexOf("cached")>=0)r.setAttribute("href",n.playerCssHost+"/"+t+n.playerCachedCssRoute);else if(n.url.indexOf("cache")>=0){if(e=n.url.split("?"),e.length>0)for(u="0",o=e[1].split("&"),f=0;f<o.length;f++)s=o[f].split("="),s[0]==="v"&&(u=s[1]);u!=="0"?r.setAttribute("href",n.playerCssHost+"/"+t+n.playerCacheCssRoute+"?v="+u):r.setAttribute("href",n.playerCssHost+"/"+t+n.playerCachedCssRoute)}else r.setAttribute("href",n.playerCssHost+"/"+t+n.playerCssRoute);r.onload=function(){var t,i,r;for(n.cssLoaded=!0,t=0,i=n.onLoadedCallbacks;t<i.length;t++)r=i[t],r&&r()};document.getElementsByTagName("head")[0].appendChild(r)}},n.playerCssHost="https://www.microsoft.com",n.url="https://www.microsoft.com/videoplayer/js/oneplayer.js?_=1705426697862",n.defaultPlayerCssHost="https://www.microsoft.com",n.playerCssRoute="/videoplayer/css/oneplayer.css",n.playerCachedCssRoute="/videoplayer/css/cached/oneplayer.css",n.playerCacheCssRoute="/videoplayer/css/cache/oneplayer.css",n.cssLoadTriggered=!1,n.cssLoaded=!1,n.onLoadedCallbacks=[],n}();t.OnePlayerCssLoader=i});define("oneplayer-inline",["require","exports","video-player","oneplayer-css-loader","htmlExtensions","componentFactory"],function(n,t,i,r,u,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(){function n(){}return n.prototype.render=function(n,t,e){var o=this,s=t&&t.options&&t.options.market;r.OnePlayerCssLoader.loadCss(s,function(){var s=document.getElementById(n),h,r;s&&(o.playerData=t,h={options:{autoload:!1,adsEnabled:!1}},r=document.createElement("div"),u.addClass(r,"c-video-player"),r.setAttribute("data-player-data",JSON.stringify(h)),s.appendChild(r),f.ComponentFactory.create([{component:i.VideoPlayer,elements:[r],callback:function(n){if(!!n&&!!n.length&&n.length===1){o.playerObject=n[0];var i=o.playerObject.shouldReportData();i===!1&&(t.options.reporting.enabled=i);o.playerObject.load(t);o.onPlayerCreated(o.playerObject,e)}}}]))})},n.prototype.onPlayerCreated=function(n,t){var i=this;if(!n.currentPlayer){setTimeout(function(){i.onPlayerCreated(n,t)},50);return}t&&t(n)},n.prototype.updatePlayerSource=function(n){this.playerData=n;this.playerObject.updatePlayerSource(this.playerData)},n}();t.OnePlayerInline=e}),function(n){function t(t){require(["oneplayer-inline"],function(i){i&&i.OnePlayerInline&&(n.player||(n.player=new i.OnePlayerInline),n.updatePlayerSource||(n.updatePlayerSource=r),t())})}function i(i,r,u){require(["oneplayer-inline"],function(f){f&&f.OnePlayerInline&&t(function(){n.player.render(i,r,u)})})}function r(t){require(["oneplayer-inline"],function(i){i&&i.OnePlayerInline&&n.player.updatePlayerSource(t)})}n.render||(n.render=i)}(window.MsOnePlayer||(window.MsOnePlayer={}));define("video-player",["require","exports","player-factory","utility","htmlExtensions","player-options","player-utility","player-constants","video-shim-data-fetcher"],function(n,t,i,r,u,f,e,o,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var h=function(){function n(t,i){var s=this,h,c;(this.videoComponent=t,this.playerData={},this.resizePlayer=function(){var n,t,i,r;s.videoComponent&&s.playerData&&s.playerData.options&&!s.playerData.options.flexSize?(n=s.videoComponent.getBoundingClientRect().width,n&&s.playerData.options.aspectRatio&&(t=n/s.playerData.options.aspectRatio,i=s.videoComponent.closest&&s.videoComponent.closest(".c-dialog.f-lightbox"),i&&(t>window.innerHeight?(t=window.innerHeight,n=t*s.playerData.options.aspectRatio,u.css(s.videoComponent,"width",n+"px")):(u.css(s.videoComponent,"width",""),r=Math.round(window.devicePixelRatio*100)>100,r||(n=s.videoComponent.getBoundingClientRect().width,t=n/s.playerData.options.aspectRatio))),u.css(s.videoComponent,"height",t+"px"))):s.videoComponent.style.removeProperty("height")},t)&&(n.playerInstanceCount++,this.playerId=t.getAttribute("id"),this.playerId||(this.playerId="vid-"+n.playerInstanceCount,this.videoComponent.setAttribute("id",this.playerId)),e.PlayerUtility.createVideoPerfMarker(this.playerId,o.videoPerfMarkers.playerInit),h=typeof i=="object"?i:{},i&&i.options||(c=this.videoComponent.getAttribute(n.playerDataAttribute),!c||(h=r.parseJson(c))),this.playerData.options=new f.PlayerOptions(h.options),this.playerData.metadata=h.metadata,this.playerData.metadata&&this.playerData.options.autoload?this.load():this.resizePlayer(),u.addThrottledEvent(window,u.eventTypes.resize,this.resizePlayer),this.getCurrentTime=function(){var n=s.getPlayPosition();return n&&n.currentTime},this.getDuration=this.getVideoDuration=function(){var n=s.getPlayPosition();return n&&n.endTime-n.startTime})}return n.prototype.updateContainerVisibility=function(n,t){if(!!n){var i=t?"true":"false";n.setAttribute("aria-hidden",i)}},n.prototype.load=function(n){n&&(r.extend(this.playerData.options,n.options),this.playerData.metadata=n.metadata);!this.currentPlayer||this.dispose();this.playerData.options&&this.playerData.options.debug&&this.videoComponent.setAttribute("data-debug","true");this.resizePlayer();!this.playerData.metadata||!this.playerData.metadata.videoId||this.playerData.metadata.videoFiles&&this.playerData.metadata.videoFiles.length||this.playerData.metadata.playerName?this.loadPlayer():this.fetchDataAndLoad()},n.prototype.shouldReportData=function(){return!!this.playerData&&this.playerData.options&&this.playerData.options.reporting&&this.playerData.options.reporting.enabled},n.prototype.updatePlayerSource=function(n){this.currentPlayer.updatePlayerSource(n)},n.prototype.fetchDataAndLoad=function(){var n=this,t;e.PlayerUtility.createVideoPerfMarker(this.playerId,o.videoPerfMarkers.metadataFetchStart);t=new s.VideoShimDataFetcher(this.playerData.options.shimServiceEnv,this.playerData.options.shimServiceUrl);t.getMetadata(this.playerData.metadata.videoId,function(t){e.PlayerUtility.createVideoPerfMarker(n.playerId,o.videoPerfMarkers.metadataFetchEnd);n.playerData.metadata=t;n.loadPlayer()},function(){e.PlayerUtility.createVideoPerfMarker(n.playerId,o.videoPerfMarkers.metadataFetchEnd);n.loadPlayer()})},n.prototype.getCurrentPlayState=function(){if(this.currentPlayer)return this.currentPlayer.getCurrentPlayState()},n.prototype.loadPlayer=function(){e.PlayerUtility.createVideoPerfMarker(this.playerId,o.videoPerfMarkers.playerLoadStart);var r=this.playerData.metadata&&this.playerData.metadata.playerName||n.defaultPlayerName,t=i.PlayerFactory.createPlayer(r,this.videoComponent,this.playerData);this.currentPlayer=t&&t.playerInstance;n.videoPlayerList[this.playerId]=this.currentPlayer},n.prototype.dispose=function(){!this.currentPlayer||(this.currentPlayer.dispose(),this.currentPlayer=null,delete n.videoPlayerList[this.playerId]);u.removeInnerHtml(this.videoComponent)},n.prototype.play=function(){!this.currentPlayer||this.currentPlayer.play()},n.prototype.displayImage=function(n){!this.currentPlayer||this.currentPlayer.displayImage(n)},n.prototype.pause=function(n){!this.currentPlayer||this.currentPlayer.pause(n)},n.prototype.mute=function(n){!this.currentPlayer||(n!==undefined&&!n?this.currentPlayer.unmute():this.currentPlayer.mute())},n.prototype.unmute=function(){!this.currentPlayer||this.currentPlayer.unmute()},n.prototype.seek=function(n){!this.currentPlayer||this.currentPlayer.seek(n)},n.prototype.enterFullScreen=function(){!this.currentPlayer||this.currentPlayer.enterFullScreen()},n.prototype.exitFullScreen=function(){!this.currentPlayer||this.currentPlayer.exitFullScreen()},n.prototype.getPlayPosition=function(){return!this.currentPlayer?{currentTime:0,startTime:0,endTime:0}:this.currentPlayer.getPlayPosition()},n.prototype.isLive=function(){return this.currentPlayer?this.currentPlayer.isLive():!1},n.prototype.addPlayerEventListener=function(n){!this.currentPlayer||this.currentPlayer.addPlayerEventListener(n)},n.prototype.removePlayerEventListener=function(n){!this.currentPlayer||this.currentPlayer.removePlayerEventListener(n)},n.prototype.setAutoPlay=function(){!this.currentPlayer||this.currentPlayer.setAutoPlay()},n.prototype.addPlayerEventsListener=function(n){!this.currentPlayer||this.currentPlayer.addPlayerEventListener(n)},n.prototype.removePlayerEventsListener=function(n){!this.currentPlayer||this.currentPlayer.removePlayerEventListener(n)},n.prototype.getPlayerId=function(){return this.playerId},n.prototype.getPlayer=function(t){for(var i in n.videoPlayerList)if(t===i&&n.videoPlayerList.hasOwnProperty(i))return n.videoPlayerList[i];return console.log("player not found in player list, id = "+t),null},n.prototype.resize=function(){!this.currentPlayer||this.currentPlayer.resize()},n.videoPlayerList={},n.selector=".c-video-player",n.typeName="VideoPlayer",n.corePlayerContainer=".f-core-player",n.externalPlayerContainer=".f-external-player",n.playerDataAttribute="data-player-data",n.defaultPlayerName="coreplayer",n.playerInstanceCount=0,n}();t.VideoPlayer=h;r.getPerfMarkerValue(o.videoPerfMarkers.scriptLoaded)||r.createPerfMarker(o.videoPerfMarkers.scriptLoaded,!0)});require(["video-player","componentFactory"],function(n,t){t.ComponentFactory&&t.ComponentFactory.create&&t.ComponentFactory.create([{component:n.VideoPlayer}])});define("player-factory",["require","exports","core-player"],function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function n(){}return n.createPlayer=function(n,t,r){var u,f;if(!n)f="coreplayer",u=new i.CorePlayer(t,r);else switch(n.toLowerCase()){case"youtube":f="youtube";u=null;break;default:f="coreplayer";u=new i.CorePlayer(t,r)}return{playerInstance:u,playerName:f}},n}();t.PlayerFactory=r});define("ttml-context",["require","exports","ttml-parser","ttml-settings","htmlExtensions","stringExtensions","utility"],function(n,t,i,r,u,f,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function n(){var t=this;this.translateToHtml=function(e,o,s){var c,h,v=t.getTagNameEquivalent(e),l="",y="",a,p,w,b;switch(v){case"ttml:region":y="cue ";case"ttml:rootcontainerregion":case"ttml:body":case"ttml:div":l="div";break;case"ttml:p":l="p";break;case"ttml:span":l="span";break;case"ttml:br":l="br"}return a=i.TtmlParser.getAttributeNS(e,"role",t.settings.ttmlMetaNamespace),a&&(y+=" "+a),p=i.TtmlParser.getAttributeNS(e,"agent",t.settings.ttmlMetaNamespace),p&&(y+=" "+p),a==="x-ruby"?l="ruby":a==="x-rubybase"?l="rb":a==="x-rubytext"&&(l="rt"),f.isNullOrWhiteSpace(l)||(c=n.defaultStyle(t.ownerDocument.createElement(l)),u.addClass(c,f.trim(y)),w=i.TtmlParser.getAttributeNS(e,"title",t.settings.ttmlMetaNamespace),w&&c.setAttribute("title",w),b=i.TtmlParser.getAttributeNS(e,"id",r.xmlNS),b&&t.settings.idPrefix&&c.setAttribute("id",t.settings.idPrefix+b),v==="ttml:region"&&(h=c.appendChild(n.defaultStyle(t.ownerDocument.createElement("div"))),u.css(h,"display","table"),u.css(h,"border-spacing","0"),u.css(h,"cell-spacing","0"),u.css(h,"cell-padding","0"),u.css(h,"width","100%"),u.css(h,"height","100%"),h=h.appendChild(n.defaultStyle(t.ownerDocument.createElement("div"))),u.css(h,"display","table-cell"),o.displayAlign&&(t.translateStyle(v,h,{displayAlign:o.displayAlign}),o.displayAlign=null)),s&&v==="ttml:span"&&(h=c.appendChild(n.defaultStyle(t.ownerDocument.createElement("span"))),u.css(h,"white-space","pre")),u.css(c,"position","static"),u.css(c,"width","100%"),t.translateStyle(v,c,o)),{outerNode:c,innerNode:h?h:c}}}return n.prototype.setOwnerDocument=function(n){this.ownerDocument=n},n.prototype.updateRelatedMediaObjectRegion=function(n){return!this.settings.relatedMediaObjectRegion||n.width!==this.settings.relatedMediaObjectRegion.width||n.height!==this.settings.relatedMediaObjectRegion.height?(this.settings.relatedMediaObjectRegion={width:n.width,height:n.height},!0):!1},n.prototype.hasEvents=function(){return this.events&&!!this.events.length},n.prototype.resetCurrentEvents=function(){this.currentEvents=[]},n.prototype.updateCurrentEvents=function(n){var t=this.getTemporallyActiveEvents(n),r=this.currentEvents?this.currentEvents.length:0,u=t?t.length:0,i;if(r!==u)return this.currentEventsTime=n,this.currentEvents=t,!0;if(this.currentEvents)for(i=0;i<r;i++)if(this.currentEvents[i].time!==t[i].time)return this.currentEventsTime=n,this.currentEvents=t,!0;return!1},n.prototype.getTemporallyActiveEvents=function(n){var t=this;return this.events.filter(function(i){return i.element?t.isTemporallyActive(i.element,n):!0})},n.prototype.isTemporallyActive=function(n,t){return(parseInt(n.getAttribute("data-time-start"),10)||0)<=t&&t<(parseInt(n.getAttribute("data-time-end"),10)||0)},n.prototype.getCues=function(n){var t=[],v,tt,s,y,o,w,h,c,b,l,k,e,d,g,a,nt,ut;for(this.currentEventsTime!==n&&this.updateCurrentEvents(n),v=i.TtmlParser.getAttributeNS(this.root,"space",r.xmlNS)==="preserve",tt=this.layout?this.layout.getElementsByTagNameNS(this.settings.ttmlNamespace,"region"):[],s=0,y=tt;s<y.length;s++){var p=y[s],it=i.TtmlParser.getAttributeNS(p,"id",r.xmlNS),rt=p.getAttribute("data-isanonymous");if((rt||it)&&(o=this.translate(p,this.settings.defaultRegionStyle,v,n,this.translateToHtml),o.outerNode)){for(w=o.innerNode,h=o.outerNode,c=0,b=this.events;c<b.length;c++)l=b[c],l.element&&this.isInRegion(l.element,rt?null:it)&&(k=this.prune(l.element,o.inheritableStyleSet,v,n,this.translateToHtml),e=k.prunedElement,k.hasPreservedContent||!e||f.trim(u.getText(e)).length||(e=null),e&&w.appendChild(e));d=h.getAttribute("data-showBackground")==="always";(d||w.children.length)&&(d&&h.removeAttribute("data-showBackground"),t.push(h))}}if(t.length){for(g=this.translate(this.rootContainerRegion,{overflow:"hidden",padding:"0"},!1,n,this.translateToHtml),a=0,nt=t;a<nt.length;a++)ut=nt[a],g.innerNode.appendChild(ut);t=[];t.push(g.outerNode)}return t},n.prototype.translate=function(n,t,i,r,u){var f,e,o,s;return(this.isTemporallyActive(n,r)&&(o=this.getTagNameEquivalent(n),e=this.getComputedStyleSet(n,t,o,r),e.display!=="none"&&(s=this.getApplicableStyleSet(e,o),f=u(n,s,i))),!f)?{outerNode:null,innerNode:null,inheritableStyleSet:null}:{outerNode:f.outerNode,innerNode:f.innerNode,inheritableStyleSet:this.getInheritableStyleSet(e)}},n.prototype.translateStyle=function(n,t,i){for(var r in i)i[r]&&this.applyStyle(t,n,r,i[r])},n.prototype.prune=function(n,t,f,e,o,s){var y,a,h,g,v,p,b,l,k,d,w,c;if(s===void 0&&(s=!1),a=!1,h=this.translate(n,t,f,e,o),h.outerNode!==null){for(g=this.getTagNameEquivalent(n),y=h.outerNode,v=h.innerNode,p=0,b=u.nodeListToArray(n.childNodes);p<b.length;p++)l=b[p],l.nodeType===Node.COMMENT_NODE||(l.nodeType===Node.TEXT_NODE?(v.appendChild(document.createTextNode(l.data)),f&&g==="ttml:span"&&(a=!0)):(k=f,d=i.TtmlParser.getAttributeNS(l,"space",r.xmlNS),d&&(k=d==="preserve"),w=this.prune(l,h.inheritableStyleSet,k,e,o,!0),a=a||w.hasPreservedContent,w.prunedElement&&v.appendChild(w.prunedElement)));if(!s)for(c=n.parentNode;c!==null&&c.nodeType===Node.ELEMENT_NODE&&c!==this.body;){if(h=this.translate(c,t,f,e,o),h.outerNode)v=h.innerNode,v.appendChild(y),y=h.outerNode;else break;c=c.parentNode}}return{prunedElement:y,hasPreservedContent:a}},n.prototype.getComputedStyleSet=function(n,t,r,f){var o=e.extend({},t),a,s,h,c,l;for(e.extend(o,this.styleSetCache[parseInt(n.getAttribute("data-styleSet"),10)]),a=n.getElementsByTagNameNS(this.settings.ttmlNamespace,"set"),s=0,h=u.nodeListToArray(a);s<h.length;s++)c=h[s],this.isTemporallyActive(c,f)&&i.TtmlParser.applyInlineStyles(this.settings,o,c);return r==="ttml:p"&&o.lineHeight==="normal"&&(l=this.appendSpanFontSizes(n,this.getInheritableStyleSet(o),f,""),l&&(o["computed-lineHeight"]=l)),o},n.prototype.getApplicableStyleSet=function(n,t){var i={},r;n.extent&&this.isStyleApplicable(t,"extent")&&(i.extent=n.extent);n.color&&this.isStyleApplicable(t,"color")&&(i.color=n.color);for(r in n)this.isStyleApplicable(t,r)&&(i[r]=n[r]);return i},n.prototype.isStyleApplicable=function(n,t){switch(t){case"backgroundColor":case"display":case"visibility":return"ttml:body ttml:div ttml:p ttml:region ttml:rootcontainerregion ttml:span ttml:br".indexOf(n)>=0;case"fontFamily":case"fontSize":case"fontStyle":case"fontWeight":return"ttml:p ttml:span ttml:br".indexOf(n)>=0;case"color":case"textDecoration":case"textOutline":case"wrapOption":return"ttml:span ttml:br".indexOf(n)>=0;case"direction":case"unicodeBidi":return"ttml:p ttml:span ttml:br".indexOf(n)>=0;case"displayAlign":case"opacity":case"origin":case"overflow":case"padding":case"showBackground":case"writingMode":case"zIndex":return"ttml:region ttml:rootcontainerregion".indexOf(n)>=0;case"extent":return"ttml:tt ttml:region ttml:rootcontainerregion".indexOf(n)>=0;case"computed-lineHeight":case"lineHeight":case"textAlign":return"ttml:p".indexOf(n)>=0;default:return!1}},n.prototype.getInheritableStyleSet=function(n){var i={};for(var t in n)if(n.hasOwnProperty(t))switch(t){case"backgroundColor":case"computed-lineHeight":case"display":case"displayAlign":case"extent":case"opacity":case"origin":case"overflow":case"padding":case"showBackground":case"unicodeBidi":case"writingMode":case"zIndex":break;default:i[t]=n[t]}return i},n.prototype.appendSpanFontSizes=function(n,t,i,r){for(var f,c,s,h,e=0,o=u.nodeListToArray(n.childNodes);e<o.length;e++)f=o[e],f.nodeType===Node.ELEMENT_NODE&&(c=this.getTagNameEquivalent(f),c==="ttml:span"&&(s=this.getComputedStyleSet(f,t,"ttml:span",i),h=s.fontSize,h&&(r+=(r?",":"")+h),r=this.appendSpanFontSizes(f,this.getInheritableStyleSet(s),i,r)));return r},n.prototype.isInRegion=function(n,t){var e,r,o,f,s,h;if(!t||(e=i.TtmlParser.getAttributeNS(n,"region",this.settings.ttmlNamespace),e===t))return!0;if(!e){for(r=n.parentNode;r!==null&&r.nodeType===Node.ELEMENT_NODE;){if(o=this.getRegionId(r),o)return o===t;r=r.parentNode}for(f=0,s=u.nodeListToArray(n.getElementsByTagName("*"));f<s.length;f++)if(h=s[f],this.getRegionId(h)===t)return!0}return!1},n.prototype.getRegionId=function(n){var t;return n.nodeType===Node.ELEMENT_NODE&&n.namespaceURI===this.settings.ttmlNamespace&&(t=i.TtmlParser.getLocalTagName(n)==="region"?i.TtmlParser.getAttributeNS(n,"id",r.xmlNS):i.TtmlParser.getAttributeNS(n,"region",this.settings.ttmlNamespace)),t},n.prototype.getTagNameEquivalent=function(n){var t=i.TtmlParser.getLocalTagName(n),r=n.namespaceURI;return r===this.settings.ttmlNamespace?"ttml:"+t:r==="http://www.w3.org/1999/xhtml"?t:""},n.prototype.applyStyle=function(t,i,r,o){var s=o,p,h,g,nt,tt,w,b,d,it,l,a,ut;switch(r){case"color":case"backgroundColor":s=n.ttmlToCssColor(o);u.css(t,r,s);return;case"direction":case"display":u.css(t,r,s);return;case"displayAlign":switch(o){case"before":s="top";break;case"center":s="middle";break;case"after":s="bottom"}u.css(t,"vertical-align",s);return;case"extent":p=void 0;l=void 0;o!=="auto"&&(a=o.split(/\s+/),a.length===2&&(p=this.ttmlToCssUnits(a[0],!0),l=this.ttmlToCssUnits(a[1],!1)));p||(p=(this.settings.rootContainerRegionDimensions?this.settings.rootContainerRegionDimensions.width:this.settings.relatedMediaObjectRegion.width).toString()+"px",l=(this.settings.rootContainerRegionDimensions?this.settings.rootContainerRegionDimensions.height:this.settings.relatedMediaObjectRegion.height).toString()+"px");u.css(t,"position","absolute");u.css(t,"width",p);u.css(t,"min-width",p);u.css(t,"max-width",p);u.css(t,"height",l);u.css(t,"min-height",l);u.css(t,"max-height",l);return;case"fontFamily":this.settings.fontMap&&this.settings.fontMap[o]&&(s=this.settings.fontMap[o]);o==="smallCaps"&&u.css(t,"fontVariant","small-caps");u.css(t,r,s);return;case"fontSize":h=o.split(/\s+/);g=h.length>1?h[1]:h[0];s=this.ttmlToCssFontSize(g,!1,.75,i==="ttml:region");u.css(t,r,s);return;case"fontStyle":case"fontWeight":u.css(t,r,s);return;case"lineHeight":nt=o==="normal"?o:this.ttmlToCssFontSize(o,!1);u.css(t,"line-height",nt);return;case"computed-lineHeight":for(tt=o.split(","),w=-1,b=0,d=tt;b<d.length;b++)it=d[b],s=this.ttmlToCssFontSize(it,!1),s&&s.indexOf("px")===s.length-2&&(l=parseFloat(s.substr(0,s.length-2)),!isNaN(l)&&l>w&&(w=l));w>=0&&u.css(t,"line-height",w+"px");return;case"origin":o!=="auto"&&(a=o.split(/\s+/),a.length===2&&(u.css(t,"position","absolute"),u.css(t,"left",this.ttmlToCssUnits(a[0],!0)),u.css(t,"top",this.ttmlToCssUnits(a[1],!1))));return;case"opacity":u.css(t,r,s);return;case"padding":var c=e.getDimensions(t),h=o.split(/\s+/),v=void 0,y=void 0,k=void 0,rt=void 0;switch(h.length){case 1:v=this.ttmlToCssUnits(h[0],!1,c);y=this.ttmlToCssUnits(h[0],!0,c);s=f.format("{0} {1} {0} {1}",v,y);break;case 2:v=this.ttmlToCssUnits(h[0],!1,c);y=this.ttmlToCssUnits(h[1],!0,c);s=f.format("{0} {1} {0} {1}",v,y);break;case 3:v=this.ttmlToCssUnits(h[0],!1,c);y=this.ttmlToCssUnits(h[1],!0,c);k=this.ttmlToCssUnits(h[2],!1,c);s=f.format("{0} {1} {2} {1}",v,y,k);break;case 4:v=this.ttmlToCssUnits(h[0],!1,c);y=this.ttmlToCssUnits(h[1],!0,c);k=this.ttmlToCssUnits(h[2],!1,c);rt=this.ttmlToCssUnits(h[3],!0,c);s=f.format("{0} {1} {2} {3}",v,y,k,rt)}u.css(t,"box-sizing","border-box");u.css(t,"border-style","solid");u.css(t,"border-color","transparent");u.css(t,"border-width",s);return;case"textAlign":switch(o){case"start":s="left";break;case"end":s="right"}u.css(t,"text-align",s);return;case"textDecoration":s=n.ttmlToCssTextDecoration(o);u.css(t,"text-decoration",s);return;case"textOutline":ut=u.css(t,"color");u.css(t,"text-shadow",this.ttmlToCssTextOutline(s,ut));return;case"unicodeBidi":switch(o){case"bidiOverride":s="bidi-override"}u.css(t,"unicode-bidi",s);return;case"visibility":u.css(t,r,s);return;case"writingMode":switch(o){case"lr":case"lrtb":u.css(t,"writing-mode","horizontal-tb");u.css(t,"-webkit-writing-mode","horizontal-tb");u.css(t,"writing-mode","lr-tb");return;case"rl":case"rltb":u.css(t,"writing-mode","horizontal-tb");u.css(t,"-webkit-writing-mode","horizontal-tb");u.css(t,"writing-mode","rl-tb");return;case"tblr":u.css(t,"text-orientation","upright");u.css(t,"writing-mode","vertical-lr");u.css(t,"-webkit-text-orientation","upright");u.css(t,"-webkit-writing-mode","vertical-lr");u.css(t,"writing-mode","tb-lr");return;case"tb":case"tbrl":u.css(t,"text-orientation","upright");u.css(t,"writing-mode","vertical-rl");u.css(t,"-webkit-text-orientation","upright");u.css(t,"-webkit-writing-mode","vertical-rl");u.css(t,"writing-mode","tb-rl");return}return;case"wrapOption":u.css(t,"white-space",o==="noWrap"?"nowrap":o==="pre"?"pre":"normal");return;case"zIndex":u.css(t,r,s);return;default:u.css(t,r,s);return}},n.defaultStyle=function(t){return u.css(t,"background-color",n.TtmlNamedColorMap.transparent),u.css(t,"offset","0"),u.css(t,"margin","0"),u.css(t,"padding","0"),u.css(t,"border","0"),t},n.prototype.ttmlToCssUnits=function(n,t,i){var e=n,r,h;if(n&&(r=n.charAt(n.length-1),r==="c"||r==="%")){var o=this.settings.rootContainerRegionDimensions?this.settings.rootContainerRegionDimensions:this.settings.relatedMediaObjectRegion,s=parseFloat(n.substr(0,n.length-1)),f=t?o.width:o.height,u=void 0;r==="c"?(h=t?this.settings.cellResolution.columns:this.settings.cellResolution.rows,u=s*f/h):r==="%"&&(i&&(f=t?i.width:i.height),u=f*s/100);u=Math.round(u*10)/10;e=u+"px"}return e},n.prototype.ttmlToCssFontSize=function(n,t,i,r){var e,u;if(i===void 0&&(i=1),r===void 0&&(r=!1),e=n,n&&(u=n.charAt(n.length-1),u==="c"||r&&u==="%")){var o=this.settings.rootContainerRegionDimensions?this.settings.rootContainerRegionDimensions:this.settings.relatedMediaObjectRegion,s=parseFloat(n.substr(0,n.length-1)),h=t?o.width:o.height,c=t?this.settings.cellResolution.columns:this.settings.cellResolution.rows,f=s*h/c;u==="%"&&(f/=100);f=Math.floor(f*i*10)/10;e=f+"px"}return e},n.prototype.ttmlToCssTextOutline=function(t,i){var u="none",a,h,v,c,l;if(!f.isNullOrWhiteSpace(t)&&t!=="none"){var r=t.split(/\s+/),s=void 0,e=void 0,o;if(r.length===1?(s=i,e=r[0],o=""):r.length===3?(s=r[0],e=r[1],o=r[2]):r.length===2&&(a=r[0].charAt(0),a>="0"&&a<="9"?(s=i,e=r[0],o=r[1]):(s=r[0],e=r[1],o="")),o=this.ttmlToCssFontSize(o,!1,.75),e=this.ttmlToCssFontSize(e,!1,.75),r=n.lengthRegEx.exec(e),r&&r.length===3){for(h=Math.round(parseFloat(r[1])),v=r[2],u="",c=-h;c<=h;c++)for(l=-h;l<=h;l++)(c!==0||l!==0)&&(u+=f.format("{0}{4} {1}{4} {2} {3}, ",c,l,o,n.ttmlToCssColor(s),v));u&&(u=u.substr(0,u.length-2))}}return u},n.ttmlToCssTextDecoration=function(n){for(var r,e,t,i="",o=n.split(/\s+/),u=0,s=o;u<s.length;u++){t=s[u];switch(t){case"none":case"noUnderline":case"noLineThrough":case"noOverline":i="none"}}for(r=0,e=o;r<e.length;r++){t=e[r];switch(t){case"none":case"noUnderline":case"noLineThrough":case"noOverline":break;case"lineThrough":i+=" line-through";break;default:i+=" "+t}}return f.trim(i)},n.ttmlToCssColor=function(t){var r=t,i;if(t=t.toLowerCase(),t.indexOf("rgba")===0){if(i=n.rgbaRegEx.exec(t),i&&i.length===5){var u=i[1],e=i[2],o=i[3],s=parseInt(i[4],10);r=f.format("rgba({0},{1},{2},{3})",u,e,o,Math.round(s*100/255)/100)}}else if(t.charAt(0)==="#"&&t.length===9){var u=parseInt(t.substr(1,2),16),e=parseInt(t.substr(3,2),16),o=parseInt(t.substr(5,2),16),s=parseInt(t.substr(7,2),16);r=f.format("rgba({0},{1},{2},{3})",u,e,o,Math.round(s*100/255)/100)}else n.TtmlNamedColorMap[t]&&(r=n.TtmlNamedColorMap[t]);return r},n.lengthRegEx=/\s*(\d+\.*\d*)(.*)\s*/,n.rgbaRegEx=/\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)\s*/,n.TtmlNamedColorMap={transparent:"rgba(0,0,0,0)",black:"rgba(0,0,0,1)",silver:"rgba(192,192,192,1)",gray:"rgba(128,128,128,1)",white:"rgba(255,255,255,1)",maroon:"rgba(128,0,0,1)",red:"rgba(255,0,0,1)",purple:"rgba(128,0,128,1)",fuchsia:"rgba(255,0,255,1)",magenta:"rgba(255,0,255,1)",green:"rgba(0,128,0,1)",lime:"rgba(0,255,0,1)",olive:"rgba(128,128,0,1)",yellow:"rgba(255,255,0,1)",navy:"rgba(0,0,128,1)",blue:"rgba(0,0,255,1)",teal:"rgba(0,128,128,1)",aqua:"rgba(0,255,255,1)",cyan:"rgba(0,255,255,1)"},n}();t.TtmlContext=o});define("ttml-parser",["require","exports","ttml-context","ttml-time-parser","ttml-settings","htmlExtensions","stringExtensions"],function(n,t,i,r,u,f,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function n(){}return n.parse=function(t,f){var e,o,s,h;return t=typeof t=="string"?n.parseXml(t):t,e=new i.TtmlContext,e.settings=new u.TtmlSettings(f),e.root=n.verifyRoot(t,e),e.body=n.getFirstElementByTagNameNS(e.root,"body",e.settings.ttmlNamespace),e.events=[],e.styleSetCache=[],e.body&&(n.parseTtAttrs(e),o=n.ensureRegions(e),s=n.getAttributeNS(e.root,"timeBase",e.settings.ttmlParameterNamespace)||"media",e.settings.supportedTimeBase.indexOf(s)!==-1&&(n.processAnonymousSpans(e,e.body),h=new r.TtmlTimeParser(e.settings.mediaFrameRate,e.settings.mediaTickRate),n.applyTiming(e,e.root,{start:n.mediaStart,end:n.mediaEnd},!0,h),n.applyStyling(e,o)),e.events.push({time:n.mediaEnd,element:null}),e.events.sort(function(n,t){return n.time-t.time})),e},n.parseXml=function(n){var i=null,t;return window.DOMParser?(t=new window.DOMParser,i=t.parseFromString(n,"application/xml")):(t=new window.ActiveXObject("Microsoft.XMLDOM"),t.async=!1,t.loadXML(n),i=t),i},n.verifyRoot=function(t,i){var u,r=t.documentElement;return n.getLocalTagName(r)==="tt"&&(r.namespaceURI!=="http://www.w3.org/ns/ttml"&&(i.settings.ttmlNamespace=r.namespaceURI,i.settings.ttmlStyleNamespace=i.settings.ttmlNamespace+"#styling",i.settings.ttmlParameterNamespace=i.settings.ttmlNamespace+"#parameter",i.settings.ttmlMetaNamespace=i.settings.ttmlNamespace+"#metadata"),u=r),u},n.parseTtAttrs=function(t){var h=n.getAttributeNS(t.root,"cellResolution",t.settings.ttmlParameterNamespace),u=n.getAttributeNS(t.root,"extent",t.settings.ttmlStyleNamespace),f=null,r,o,s,i,c,l;h&&(r=e.trim(h).split(/\s+/),r.length===2&&(o=Math.round(parseFloat(r[0])),s=Math.round(parseFloat(r[1])),s>0&&o>0&&(f={rows:s,columns:o})));f&&(t.settings.cellResolution=f);u&&u!=="auto"&&(i=u.split(/\s+/),i.length===2&&i[0].substr(i[0].length-2)==="px"&&i[1].substr(i[1].length-2)==="px"&&(c=parseFloat(i[0].substr(0,i[0].length-2)),l=parseFloat(i[1].substr(0,i[1].length-2)),t.settings.rootContainerRegionDimensions={width:Math.round(c),height:Math.round(l)}))},n.ensureRegions=function(t){var f,i,o,r;return t.rootContainerRegion=t.root.ownerDocument.createElementNS(t.settings.ttmlNamespace,"rootcontainerregion"),t.root.appendChild(t.rootContainerRegion),f=t.settings.rootContainerRegionDimensions?e.format("{0}px {1}px",t.settings.rootContainerRegionDimensions.width,t.settings.rootContainerRegionDimensions.height):"auto",t.rootContainerRegion.setAttributeNS(t.settings.ttmlStyleNamespace,"extent",f),i=n.getFirstElementByTagNameNS(t.root,"head",t.settings.ttmlNamespace),i||(i=t.root.ownerDocument.createElementNS(t.settings.ttmlNamespace,"head"),t.root.appendChild(i)),t.layout=n.getFirstElementByTagNameNS(i,"layout",t.settings.ttmlNamespace),t.layout||(t.layout=t.root.ownerDocument.createElementNS(t.settings.ttmlNamespace,"layout"),t.root.appendChild(t.layout)),o=t.layout.getElementsByTagNameNS(t.settings.ttmlNamespace,"region"),o.length||(r=t.root.ownerDocument.createElementNS(t.settings.ttmlNamespace,"region"),r.setAttributeNS(u.xmlNS,"id","anonymous"),r.setAttribute("data-isanonymous","1"),t.layout.appendChild(r),t.body.setAttributeNS(t.settings.ttmlNamespace,"region","anonymous")),i},n.processAnonymousSpans=function(t,i){var u,a,o,v,s,y,e,h,c,l,p,r;if(n.isTagNS(i,"p",t.settings.ttmlNamespace)){for(u=[],a=void 0,o=0,v=f.nodeListToArray(i.childNodes);o<v.length;o++)r=v[o],r.nodeType===Node.TEXT_NODE&&(a!==Node.TEXT_NODE&&u.push([]),u[u.length-1].push(r)),a=r.nodeType;for(s=0,y=u;s<y.length;s++)for(e=y[s],h=t.root.ownerDocument.createElementNS(t.settings.ttmlNamespace,"span"),h.appendChild(e[0].parentNode.replaceChild(h,e[0])),c=1;c<e.length;c++)h.appendChild(e[c])}for(l=0,p=f.nodeListToArray(i.childNodes);l<p.length;l++)r=p[l],this.processAnonymousSpans(t,r)},n.applyTiming=function(t,i,r,u,e){var b=n.getAttributeNS(i,"begin",t.settings.ttmlNamespace),o=b?e.parse(b):r.start,s=0,d=0,l=0,a=0,v=n.getAttributeNS(i,"dur",t.settings.ttmlNamespace),h=n.getAttributeNS(i,"end",t.settings.ttmlNamespace),k,p,y,w,c;for(v||h?v&&h?(l=e.parse(v),a=e.parse(h),k=Math.min(o+l,r.start+a),s=Math.min(k,r.end)):h?(a=e.parse(h),s=Math.min(r.start+a,r.end)):(l=e.parse(v),s=Math.min(o+l,r.end)):u&&(o<=r.end?(d=Math.max(0,r.end-o),s=r.end):s=0),s<o&&(s=o),o=Math.floor(o),s=Math.floor(s),i.setAttribute("data-time-start",o.toString()),i.setAttribute("data-time-end",s.toString()),o>=0&&t.events.filter(function(n){return n.time===o}).length<=0&&t.events.push({time:o,element:i}),p=o,y=0,w=f.nodeListToArray(i.childNodes);y<w.length;y++)c=w[y],c.nodeType===Node.ELEMENT_NODE&&(n.getAttributeNS(i,"timeContainer",t.settings.ttmlNamespace)!=="seq"?this.applyTiming(t,c,{start:o,end:s},!0,e):(this.applyTiming(t,c,{start:p,end:s},!1,e),p=parseInt(c.getAttribute("data-time-end"),10)))},n.applyStyling=function(t,i){for(var o,u=n.getFirstElementByTagNameNS(i,"styling",t.settings.ttmlNamespace),s=u?f.nodeListToArray(u.getElementsByTagNameNS(t.settings.ttmlNamespace,"style")):[],r=0,e=f.nodeListToArray(t.root.querySelectorAll("*"));r<e.length;r++)o=e[r],this.applyStyle(t,o,s)},n.applyStyle=function(t,i,r){var u={},f,e;this.applyStylesheet(t.settings,u,i,r);n.applyInlineStyles(t.settings,u,i);f=!0;for(e in u)if(u.hasOwnProperty(e)){f=!1;break}f||(i.setAttribute("data-styleSet",t.styleSetCache.length.toString()),t.styleSetCache.push(u))},n.applyStylesheet=function(t,i,r,e){for(var p,s,l,h,a,o,v=n.getAttributeNS(r,"style",t.ttmlNamespace),w=v?v.split(/\s+/):[],c=0,y=w;c<y.length;c++)for(p=y[c],s=0,l=e;s<l.length;s++)o=l[s],n.getAttributeNS(o,"id",u.xmlNS)===p&&(this.applyStylesheet(t,i,o,e),n.applyInlineStyles(t,i,o));if(n.isTagNS(r,"region",t.ttmlNamespace))for(h=0,a=f.nodeListToArray(r.getElementsByTagNameNS(t.ttmlNamespace,"style"));h<a.length;h++)o=a[h],n.applyInlineStyles(t,i,o)},n.applyInlineStyles=function(t,i,r){for(var o,u=0,s=f.nodeListToArray(r.attributes);u<s.length;u++)o=s[u],o.namespaceURI===t.ttmlStyleNamespace&&(i[n.getLocalTagName(o)]=e.trim(o.nodeValue))},n.getLocalTagName=function(n){return n.localName||n.baseName},n.isTagNS=function(n,t,i){return n.namespaceURI===i&&this.getLocalTagName(n)===t},n.getAttributeNS=function(n,t,i){var e=n.getAttributeNS(i,t),u,o,r;if(!e)for(u=0,o=f.nodeListToArray(n.attributes);u<o.length;u++)if(r=o[u],r.localName===t&&r.lookupNamespaceURI(r.prefix)===i){e=r.value;break}return e},n.getFirstElementByTagNameNS=function(n,t,i){if(n){var r=n.getElementsByTagNameNS(i,t);if(r&&r.length)return r[0]}return null},n.mediaStart=-1,n.mediaEnd=99999999,n}();t.TtmlParser=o});define("ttml-settings",["require","exports","utility"],function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.xmlNS="http://www.w3.org/XML/1998/namespace";var r=function(){function n(n){this.ttmlNamespace="http://www.w3.org/ns/ttml";this.ttmlStyleNamespace="http://www.w3.org/ns/ttml#styling";this.ttmlParameterNamespace="http://www.w3.org/ns/ttml#parameter";this.ttmlMetaNamespace="http://www.w3.org/ns/ttml#metadata";this.idPrefix="";this.mediaFrameRate=30;this.mediaFrameRateMultiplier=1;this.mediaSubFrameRate=1;this.mediaTickRate=1e3;this.supportedTimeBase="media";this.cellResolution={rows:15,columns:32};this.defaultRegionStyle={backgroundColor:"transparent",color:"#E8E9EA",direction:"ltr",display:"auto",displayAlign:"before",extent:"auto",fontFamily:"default",fontSize:"1c",fontStyle:"normal",fontWeight:"normal",lineHeight:"normal",opacity:"1",origin:"auto",overflow:"hidden",padding:"0",showBackground:"always",textAlign:"start",textDecoration:"none",textOutline:"none",unicodeBidi:"normal",visibility:"visible",wrapOption:"normal",writingMode:"lrtb"};this.fontMap={};this.fontMap["default"]="Lucida sans typewriter, Lucida console, Consolas";this.fontMap.monospaceSerif="Courier";this.fontMap.proportionalSerif="Times New Roman, Serif";this.fontMap.monospaceSansSerif="Lucida sans typewriter, Lucida console, Consolas";this.fontMap.proportionalSansSerif="Arial, Sans-serif";this.fontMap.casual="Verdana";this.fontMap.cursive="Zapf-Chancery, Segoe script, Cursive";this.fontMap.smallCaps="Arial, Helvetica";this.fontMap.monospace="Lucida sans typewriter, Lucida console, Consolas";this.fontMap.sansSerif="Arial, Sans-serif";this.fontMap.serif="Times New Roman, Serif";n&&i.extend(this,n)}return n}();t.TtmlSettings=r});define("ttml-time-parser",["require","exports"],function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function n(n,t){this.mediaFrameRate=n;this.mediaTickRate=t}return n.prototype.parse=function(t){var i,r;if(!t)return 0;if(i=n.absoluteTimeRegex.exec(t),i&&i.length>3){var f=parseInt(i[1],10)*3600,e=parseInt(i[2],10)*60,o=parseInt(i[3],10),u=0;return i[5]&&(u=parseFloat(i[4])*1e3),i[6]&&(u=Math.round(parseFloat(i[6])*this.getTimeUnitMultiplier("f"))),1e3*(f+e+o)+u}return(r=n.relativeTimeRegex.exec(t),r&&r.length>3)?Math.round(parseFloat(r[1])*this.getTimeUnitMultiplier(r[3])):0},n.prototype.getTimeUnitMultiplier=function(n){switch(n){case"h":return 36e5;case"ms":return 1;case"m":return 6e4;case"s":return 1e3;case"f":return 1e3/this.mediaFrameRate;case"t":return 1e3/this.mediaTickRate;default:return 0}},n.absoluteTimeRegex=/^(\d{1,}):(\d{2}):(\d{2})((\.\d{1,})|:(\d{2,}(\.\d{1,})?))?$/,n.relativeTimeRegex=/^(\d+(\.\d+)?)(ms|[hmsft])$/,n}();t.TtmlTimeParser=i});define("video-closed-captions",["require","exports","ttml-parser","htmlExtensions","utility","player-utility"],function(n,t,i,r,u,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(){function n(n,t){this.element=n;this.errorCallback=t;this.lastPlayPosition=0;this.ccLanguageId=null;this.resetCaptions()}return n.prototype.setCcLanguage=function(n,t){if(this.element&&n!==this.ccLanguageId){if(this.ttmlContext=null,this.resetCaptions(),!t){this.ccLanguageId=null;return}this.ccLanguageId=n;this.loadClosedCaptions(t)}},n.prototype.getCurrentCcLanguage=function(){return this.ccLanguageId},n.prototype.loadClosedCaptions=function(n){var t=this;f.PlayerUtility.ajax(n,function(n){return t.onClosedCaptionsLoaded(n)},function(){t.errorCallback&&t.errorCallback({errorType:"oneplayer.error.loadClosedCaptions.ajax",errorDesc:"Ajax call failed: "+n})})},n.prototype.onClosedCaptionsLoaded=function(t){if(!t){this.errorCallback&&this.errorCallback({errorType:"oneplayer.error.onClosedCaptionsLoaded.ttmlDoc",errorDesc:"No ttmlDocument found"});return}this.element.setAttribute(n.ariaHidden,"false");var r=this.element.id?this.element.id+"-":"",f={idPrefix:r,fontMap:{"default":"Segoe ui, Arial"},relatedMediaObjectRegion:u.getDimensions(this.element)};try{this.ttmlContext=i.TtmlParser.parse(t,f);this.ttmlContext&&(this.ttmlContext.setOwnerDocument(this.element.ownerDocument),this.ttmlContext.hasEvents()?this.updateCaptions(this.lastPlayPosition):this.element.setAttribute(n.ariaHidden,"true"))}catch(e){this.errorCallback&&this.errorCallback({errorType:"oneplayer.error.onClosedCaptionsLoaded.ttmlParser",errorDesc:"TtmlDocument parser error: "+e.message})}},n.prototype.showSampleCaptions=function(){var t=(new DOMParser).parseFromString("<?xml version='1.0' encoding='utf-8'?>\n<tt xml:lang='en-us' xmlns='http://www.w3.org/ns/ttml' xmlns:tts='http://www.w3.org/ns/ttml#styling' \nxmlns:ttm='http://www.w3.org/ns/ttml#metadata'>\n    <head>\n    <metadata>\n        <ttm:title>Media.wvx.aib<\/ttm:title>\n        <ttm:copyright>Copyright (c) 2013 Microsoft Corporation.  All rights reserved.<\/ttm:copyright>\n    <\/metadata>\n    <styling>\n        <style xml:id='Style1' tts:fontFamily='proportionalSansSerif' tts:fontSize='0.8c' tts:textAlign='center' \n        tts:color='white' />\n    <\/styling>\n    <layout>\n        <region style='Style1' xml:id='CaptionArea' tts:origin='0c 12.6c' tts:extent='32c 2.4c' \n        tts:backgroundColor='rgba(0,0,0,160)' tts:displayAlign='center' tts:padding='0.3c 0.5c' />\n    <\/layout>\n    <\/head>\n    <body region='CaptionArea'>\n    <div>\n        <p begin='00:00:01.140' end='99:99:99.999'>EXAMPLE CAPTIONS!<\/p>\n    <\/div>\n    <\/body>\n<\/tt>","text/xml"),n;this.onClosedCaptionsLoaded(t);n=u.getDimensions(this.element);this.ttmlContext.updateRelatedMediaObjectRegion(n);this.element.style.bottom="44px"},n.prototype.updateCaptions=function(t){var e,s,i,o,f;if(this.lastPlayPosition=t,this.ttmlContext&&this.ttmlContext.hasEvents()&&(e=Math.floor(t*1e3),this.element.setAttribute(n.ariaHidden,"false"),s=u.getDimensions(this.element),this.ttmlContext.updateRelatedMediaObjectRegion(s)&&this.resetCaptions(),this.ttmlContext.updateCurrentEvents(e))){for(this.element.setAttribute(n.ariaHidden,"true"),r.removeInnerHtml(this.element),i=0,o=this.ttmlContext.getCues(e);i<o.length;i++)f=o[i],this.applyUserPreferencesOverrides(f),r.css(f,"background-color",""),this.element.appendChild(f);this.element.setAttribute(n.ariaHidden,"false")}},n.prototype.resetCaptions=function(){this.ttmlContext&&this.ttmlContext.resetCurrentEvents();this.element&&(this.element.setAttribute(n.ariaHidden,"true"),r.removeInnerHtml(this.element))},n.prototype.getCcLanguage=function(){return this.ccLanguageId},n.prototype.applyUserPreferencesOverrides=function(t){var u,f,o,e,i;if(n.userPreferences){if(n.userPreferences.text)for(u=0,f=r.selectElements("span, br",t);u<f.length;u++){o=f[u];for(i in n.userPreferences.text)n.userPreferences.text.hasOwnProperty(i)&&r.css(o,i,n.userPreferences.text[i])}if(n.userPreferences.window&&(e=r.selectFirstElement("p",t),e))for(i in n.userPreferences.window)n.userPreferences.window.hasOwnProperty(i)&&r.css(e,i,n.userPreferences.window[i])}},n.ariaHidden="aria-hidden",n.userPreferences={text:{},window:{}},n}();t.VideoClosedCaptions=e});define("video-closed-captions-settings",["require","exports","video-closed-captions","stringExtensions","utility"],function(n,t,i,r,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.closedCaptionsSettingsOptions={font:{pre:"cc_font_name_",map:{casual:"Verdana;font-variant:normal",cursive:"Zapf-Chancery,Segoe script,Cursive;font-variant:normal",monospacedsansserif:"Lucida sans typewriter,Lucida console,Consolas;font-variant:normal",monospacedserif:"Courier;font-variant:normal",proportionalsansserif:"Arial,Sans-serif;font-variant:normal",proportionalserif:"Times New Roman,Serif;font-variant:normal",smallcapitals:"Arial,Helvetica,Sans-serif;font-variant:small-caps"}},percent:{pre:"cc_percent_",map:{"0":"0","50":"0.5","75":"0.75","100":"1"}},text_size:{pre:"cc_text_size_",map:{small:"75%","default":"100%",large:"125%",extralarge:"150%",maximum:"200%"}},color:{pre:"cc_color_",map:{white:"#FFFFFF",black:"#000000",blue:"#0000FF",cyan:"#00FFFF",green:"#00FF00",grey:"#BCBCBC",magenta:"#FF00FF",red:"#FF0000",yellow:"#FFFF00"}},text_edge_style:{pre:"cc_text_edge_style_",map:{none:"none",depressed:"1px 1px 0 #FFF,-1px -1px 0 #000",dropshadow:"1px 1px 0 #000",raised:"1px 1px 0 #000,-1px -1px 0x #FFF",uniform:"1px 1px 0 #000,-1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000"}}};t.closedCaptionsSettingsMap={text_font:{value:"font-family:",option:"font"},text_color:{value:"color:",option:"color"},text_size:{value:"font-size:",option:"text_size"},text_edge_style:{value:"text-shadow:",option:"text_edge_style"},text_opacity:{value:"color:",option:"percent"},text_background_color:{value:"background:",option:"color"},text_background_opacity:{value:"background:",option:"percent"},window_color:{value:"background:",option:"color"},window_opacity:{value:"background:",option:"percent"}};t.closedCaptionsPresetMap={preset1:{text_font:"proportionalsansserif",text_color:"white",text_opacity:"100",text_background_color:"black",text_background_opacity:"100"},preset2:{text_font:"monospacedserif",text_color:"white",text_opacity:"100",text_background_color:"black",text_background_opacity:"100"},preset3:{text_font:"proportionalsansserif",text_color:"yellow",text_opacity:"100",text_background_color:"black",text_background_opacity:"100"},preset4:{text_font:"proportionalsansserif",text_color:"blue",text_opacity:"100",text_background_color:"grey",text_background_opacity:"100"},preset5:{text_font:"casual",text_color:"white",text_opacity:"100",text_background_color:"black",text_background_opacity:"100"}};t.closedCaptionsSettinsDefaults={preset:"preset1",text_font:"proportionalsansserif",text_color:"white",text_opacity:"100",text_size:"default",text_edge_style:"none",text_background_color:"black",text_background_opacity:"100",window_color:"black",window_opacity:"0"};var f=function(){function n(t){this.onErrorCallback=t;n.tempSettings={};n.tempSettings[n.presetKey]="none";this.loadUserPreferences();this.applySettings()}return n.prototype.saveUserPreferences=function(){u.saveToLocalStorage(n.storageKeyName,JSON.stringify(n.userPreferences))},n.prototype.loadUserPreferences=function(){var r=u.getValueFromLocalStorage(n.storageKeyName),t,i;if(r)try{t=JSON.parse(r);for(i in t)t.hasOwnProperty(i)&&this.setPreferences(i,t[i])}catch(f){if(this.onErrorCallback)this.onErrorCallback({errorType:"oneplayer.error.VideoClosedCaptionsSettings.loadUserPreferences",errorDesc:"UserPrefs parsing error: "+f.message})}},n.prototype.reset=function(t){(typeof t=="undefined"||t==null||t)&&(n.userPreferences={},n.currentSettings={},this.saveUserPreferences());n.tempSettings={};n.tempSettings[n.presetKey]="none";this.applySettings()},n.prototype.setSetting=function(i,r,f){if(i&&r){if(typeof f=="undefined"||f==null||f)this.setPreferences(i,r),this.saveUserPreferences(),n.tempSettings={},n.tempSettings[n.presetKey]="none";else{var e=t.closedCaptionsPresetMap[r];e&&(n.tempSettings[i]=r,u.extend(n.tempSettings,e))}this.applySettings()}},n.prototype.getCurrentSettings=function(i){return i===void 0&&(i=n.currentSettings),u.extend({},t.closedCaptionsSettinsDefaults,i)},n.prototype.setPreferences=function(i,r){if(i&&r)if(i===n.presetKey){var f=t.closedCaptionsPresetMap[r];f&&(n.userPreferences={},n.currentSettings={},n.userPreferences[i]=r,n.currentSettings[i]=r,u.extend(n.currentSettings,f))}else this.getOptionValue(i,r)&&(n.userPreferences=u.extend({},n.currentSettings),delete n.userPreferences[n.presetKey],n.currentSettings[n.presetKey]="none",n.userPreferences[i]=r,n.currentSettings[i]=r)},n.prototype.applySettings=function(){var u={},f=n.tempSettings[n.presetKey]==="none"?this.getCurrentSettings():this.getCurrentSettings(n.tempSettings),r,e;for(r in f)f.hasOwnProperty(r)&&(e=this.getOptionValue(r,f[r]),e&&(u[r]=t.closedCaptionsSettingsMap[r].value+e));i.VideoClosedCaptions.userPreferences.text=this.getPrefsCss(u,"text");i.VideoClosedCaptions.userPreferences.window=this.getPrefsCss(u,"window")},n.prototype.getOptionValue=function(n,i){var u=t.closedCaptionsSettingsMap[n],r;if(u)return r=t.closedCaptionsSettingsOptions[u.option],r&&r.map[i]},n.prototype.getPrefsCss=function(n,t){var f={},s,e,o,h,i,u,r,c,l;for(i in n)if(n.hasOwnProperty(i)&&(u=n[i],i.indexOf(t)===0&&i.indexOf("opacity")<0&&u&&u.length>0))for(s=u.split(";"),e=0,o=s;e<o.length;e++)h=o[e],r=h.split(":"),r.length>1&&(f[r[0].trim()]=r[1].trim());for(i in n)n.hasOwnProperty(i)&&(u=n[i],i.indexOf(t)===0&&i.indexOf("opacity")>0&&(r=u.split(":"),r.length>1&&(c=f[r[0].trim()],l=r[1].trim(),f[r[0].trim()]=this.formatAsRgba(c,l))));return f},n.prototype.formatAsRgba=function(n,t){var f=r.format("rgba(0,0,0,{0})",t),e=n?n.indexOf("#"):-1,u,i;if(e>=0&&(u=n.substr(e+1),i=u.length/3,i>0)){var o=parseInt(u.substr(0,i),16),s=parseInt(u.substr(i,i),16),h=parseInt(u.substr(i*2,i),16);f=r.format("rgba({0},{1},{2},{3})",o,s,h,t)}return f},n.userPreferences={},n.currentSettings={},n.tempSettings={},n.storageKeyName="mwf-video-player-cc-settings",n.presetKey="preset",n}();t.VideoClosedCaptionsSettings=f});define("player-constants",["require","exports"],function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.MediaEvents=["abort","canplay","canplaythrough","emptied","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","readystatechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"];t.PlayerEvents={CommonPlayerImpression:"CommonPlayerImpression",PlaybackStatusChanged:"PlaybackStatusChanged",Replay:"Replay",BufferComplete:"BufferComplete",ContentStart:"ContentStart",ContentError:"ContentError",ContentContinue:"ContentContinue",ContentComplete:"ContentComplete",ContentCheckpoint:"ContentCheckpoint",ContentLoaded3PP:"ContentLoaded3PP",Ready:"Ready",Play:"Play",Pause:"Pause",Resume:"Resume",Seek:"Seek",VideoQualityChanged:"VideoQualityChanged",Mute:"Mute",Unmute:"Unmute",Volume:"Volume",InfoPaneOpened:"InfoPaneOpened",VideoTimedout:"VideoTimedout",VideoTimeUpdate:"VideoTimeUpdate",FullScreenEnter:"FullScreenEnter",FullScreenExit:"FullScreenExit",UserInteracted:"VideoUserInteracted",InteractiveOverlayClick:"InteractiveOverlayClick",InteractiveBackButtonClick:"InteractiveBackButtonClick",InteractiveOverlayShow:"InteractiveOverlayShow",InteractiveOverlayHide:"InteractiveOverlayHide",InteractiveOverlayMaximize:"InteractiveOverlayMaximize",InteractiveOverlayMinimize:"InteractiveOverlayMaximize",InviewEnter:"InviewEnter",InviewExit:"InviewExit",TimeRemainingCheckpoint:"TimeRemainingCheckpoint",PlayerError:"PlayerError",VideoShared:"VideoShared",ClosedCaptionsChanged:"ClosedCaptionsChanged",ClosedCaptionSettingsChanged:"ClosedCaptionSettingsChanged",PlaybackRateChanged:"PlaybackRateChanged",MediaDownloaded:"MediaDownloaded",AudioTrackChanged:"AudioTrackChanged",AgeGateSubmitClick:"AgeGateSubmitClick",SourceErrorAttemptRecovery:"SourceErrorAttemptRecovery"};t.PlaybackStatus={Ready:"Ready",Loading:"Loading",Loaded:"Loaded",LoadFailed:"LoadFailed",PlaybackCompleted:"PlaybackCompleted",Playbackerrored:"PlaybackErrored",VideoOpening:"VideoOpening",VideoPlaying:"VideoPlaying",VideoBuffering:"VideoBuffering",VideoPaused:"VideoPaused",VideoPlayCompleted:"VideoPlayCompleted",VideoPlayFailed:"VideoPlayFailed",VideoClosed:"VideoClosed"};t.shareTypes={facebook:"facebook",twitter:"twitter",linkedin:"linkedin",skype:"skype",mail:"mail",copy:"copy"};t.videoPerfMarkers={scriptLoaded:"scriptLoaded",playerInit:"playerInit",metadataFetchStart:"metadataFetchStart",metadataFetchEnd:"metadataFetchEnd",playerLoadStart:"playerLoadStart",playerReady:"playerReady",wrapperLoadStart:"wrapperLoadStart",wrapperReady:"wrapperReady",locLoadStart:"locLoadStart",locReady:"locReady",playTriggered:"playTriggered",ttvs:"ttvs"};t.videoAdsPerfMarkers={adsScriptLoaded:"adsScriptLoaded",adsPlayerInit:"adsPlayerInit",adsFetchStart:"adsFetchStart",adsPlayerLoadStart:"adsPlayerLoadStart",adsPlayerReady:"adsPlayerReady",adsPlayTriggered:"adsPlayTriggered"}});define("video-controls",["require","exports","componentFactory","slider","utility","htmlExtensions","localization-helper","stringExtensions","environment"],function(n,t,i,r,u,f,e,o,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var h=function(){function n(t,o,h,c){var l=this;if(this.videoControls=t,this.localizationHelper=h,this.contextMenu=c,this.closeMenuRequested=!1,this.isEscapeButtonPressed=!1,this.isWindowZoomedIn=!1,this.defaultMenuRight="90px",this.focusedMenuItemIndex=0,this.currentVolume=0,this.tooltipElements=[],this.reactiveControls=[],this.preventKeyUpOnLastButton=!1,this.reactiveWidths=[100,430,540,650,768,926,1084],this.userInteractionCallbacks=[],this.activeMenuButton=null,this.xboxControlsEnabled=!1,this.onControlKeyboardEvent=function(t){var e=u.getKeyCode(t),i,o,r,s;l.triggerUserInteractionCallback();switch(e){case 36:f.stopPropagation(t);f.preventDefault(t);l.videoPlayer.seek(l.toAbsoluteTime(0));break;case 35:f.stopPropagation(t);f.preventDefault(t);l.videoPlayer.seek(l.videoPlayer.getPlayPosition().endTime);break;case 27:l.videoPlayer.isFullScreen()&&f.stopPropagation(t);l.closeMenuRequested||window.parent.postMessage(JSON.stringify({eventName:"escape",playerId:u.getQSPValue("pid",!1)}),"*");l.hideAllMenus();l.hideVolumeContainer();l.closeMenuRequested=!1;break;case 37:case 39:f.stopPropagation(t);f.preventDefault(t);i=l.videoPlayer.getPlayPosition();i?(o=i.currentTime,r=e===37?o-n.seekSteps:o+n.seekSteps,r=Math.min(Math.max(i.startTime,r),i.endTime),l.videoPlayer.seek(r)):l.videoPlayer.seek(0);break;case 38:case 40:f.stopPropagation(t);f.preventDefault(t);l.showVolumeContainer(!0);s=l.videoPlayer.getVolume()*100;e===38?l.setVolume(Math.min((s+n.volumeSteps)/100,1),!0):l.setVolume(Math.max((s-n.volumeSteps)/100,0),!0)}},this.focusTrapHandler=function(n){n=f.getEvent(n);var t=f.getEventTargetOrSrcElement(n),i=u.getKeyCode(n);i===9&&(t===l.focusTrapStart&&n.shiftKey?(n.preventDefault(),l.contextMenu&&l.contextMenu.checkContextMenuIsVisible()?l.contextMenu.setFocusOnFirstElement():l.setFocus(l.fullScreenButton)):t!==l.fullScreenButton||n.shiftKey||(n.preventDefault(),l.contextMenu&&l.contextMenu.checkContextMenuIsVisible()?l.contextMenu.setFocusOnFirstElement():l.setFocus(l.focusTrapStart)))},this.onPlayPauseEvents=function(t){switch(t.type){case"click":l.videoPlayer.setUserInteracted(!0);l.videoPlayer.isPaused()?(l.videoPlayer.setUserIntiatedPause(!1),l.play()):(l.videoPlayer.setUserIntiatedPause(!0),l.pause());break;case"mouseover":case"focus":s.Environment.isChrome&&(l.videoPlayer.isPaused()?l.setAriaLabelForPlayButton():l.playButton.setAttribute(n.ariaLabel,l.locPause));l.showElement(l.playTooltip);break;case"mouseout":case"blur":l.hideElement(l.playTooltip)}},this.onLiveButtonEvents=function(n){switch(n.type){case"click":l.videoPlayer&&l.videoPlayer.seek(l.videoPlayer.getPlayPosition().endTime);break;case"mouseover":case"focus":l.showElement(l.liveTooltip);break;case"mouseout":case"blur":l.hideElement(l.liveTooltip)}},this.onVolumeEvents=function(n){switch(n.type){case"click":f.getEventTargetOrSrcElement(n)===l.volumeButton&&(l.videoPlayer.isMuted()?(l.currentVolume=l.currentVolume===0?100:l.currentVolume,l.setMuted(!1,!0),l.setVolume(Math.min(l.currentVolume/100,1),!1),l.videoPlayer.updateScreenReaderElement(l.locUnmute)):(l.currentVolume=l.videoPlayer.getVolume()*100,l.setMuted(!0,!0),l.setVolume(0,!1),l.videoPlayer.updateScreenReaderElement(l.locMute)));break;case"mouseover":case"focus":l.isEscapeButtonPressed?l.isEscapeButtonPressed=!1:l.showVolumeContainer();break;case"mouseout":case"blur":l.hideVolumeContainer()}},this.onVolumeSliderEvents=function(n){switch(n.type){case"focus":l.showVolumeContainer();break;case"blur":l.hideVolumeContainer();break;case"keydown":var t=u.getKeyCode(n);l.showVolumeContainer(!0);t===27&&(f.stopPropagation(n),l.isEscapeButtonPressed=!0,l.closeMenuRequested=!0,l.hideVolumeContainer(),l.setFocus(l.volumeButton))}},this.onSliderKeyboardEvents=function(n){var t=u.getKeyCode(n);switch(t){case 40:case 38:case 37:case 39:case 34:case 33:case 36:case 35:f.stopPropagation(n);f.preventDefault(n)}l.triggerUserInteractionCallback()},this.onMoreOptionsEvents=function(n){switch(n.type){case"click":l.toggleOptionsDialog(!1);break;case"keyup":case"keydown":var t=u.getKeyCode(f.getEvent(n));(t===32||t===13)&&(f.preventDefault(n),n.type==="keyup"&&l.toggleOptionsDialog(!0));break;case"mouseover":case"focus":l.activeMenu||l.showElement(l.moreOptionsTooltip);break;case"mouseout":case"blur":l.hideElement(l.moreOptionsTooltip)}},this.onFullScreenEvents=function(n){switch(n.type){case"click":!l.videoPlayer||l.videoPlayer.toggleFullScreen();break;case"mouseover":case"focus":l.showElement(l.fullScreenTooltip);break;case"mouseout":case"blur":l.hideElement(l.fullScreenTooltip)}},this.onMenuButtonClick=function(n){var t=f.getEventTargetOrSrcElement(n),r=t.getAttribute("data-menu-id"),i;switch(n.type){case"click":l.toggleMenuById(t,!1,r);break;case"keyup":case"keydown":l.videoControls.getAttribute("aria-hidden")==="true"&&l.videoControls.setAttribute("aria-hidden","false");i=u.getKeyCode(f.getEvent(n));(i===32||i===13)&&(f.preventDefault(n),n.type!=="keyup"||l.preventKeyUpOnLastButton?l.preventKeyUpOnLastButton=!1:l.toggleMenuById(t,!0,r));break;case"mouseover":case"focus":l.activeMenu||l.showElement(f.selectFirstElement("span",t));break;case"mouseout":case"blur":l.hideElement(f.selectFirstElement("span",t))}},this.onMenuEvents=function(n,t){switch(n.type){case"click":l.onMenuItemClick(n,t);break;case"keyup":var i=u.getKeyCode(n);i===32&&f.preventDefault(n);break;case"keydown":l.onMenuKeyPressed(n)}},this.onMenuItemClick=function(n,t){var i,r,o,s,h;if(n=f.getEvent(n),i=f.getEventTargetOrSrcElement(n),r=i.getAttribute("data-next-menu"),f.preventDefault(n),r==="back"){if(o=i.getAttribute("aria-label"),s=l.localizationHelper.getLocalizedValue(e.playerLocKeys.reactive_menu_aria_label).replace("{0}",""),f.hasClass(i,"closed-caption")&&(s=l.localizationHelper.getLocalizedValue(e.playerLocKeys.reactive_menu_aria_label_closedcaption).replace("{0}","")),!!o&&o.indexOf(s)>=0){l.focusOnLastButton();l.preventKeyUpOnLastButton=!0;return}h=l.menuBackStack.pop();h&&l.showMenu(h,t);return}if(r){l.activeMenu&&l.pushToMenuBackStack(l.activeMenu.id);l.showMenu(r,t);return}if(l.activeMenu){var u=i.parentElement,c=u.id||u.parentElement&&u.parentElement.id,a=i.getAttribute("data-info")||u.getAttribute("data-info");if(l.updateMenuSelection(l.activeMenu.id,c),!!l.videoPlayer)l.videoPlayer.onPlayerMenuItemClick({category:l.activeMenu.getAttribute("data-category"),id:c,data:a})}i.getAttribute("data-persist")||l.hideAllMenus()},this.hideAllMenus=function(t){for(var u,e=f.selectElements(n.menuSelector,l.menuContainer),i=0,r=e;i<r.length;i++)u=r[i],l.hideElement(u);l.activeMenu=null;l.clearMenuBackStack();l.updateReactiveControlDisplay();l.optionsButton.setAttribute("aria-expanded","false");!l.activeMenuButton||(l.activeMenuButton.setAttribute("aria-expanded","false"),t&&l.activeMenuButton.focus(),l.activeMenuButton=null);l.menuContainer.setAttribute("aria-hidden","true")},t&&o){if(this.videoPlayer=o,this.videoTitle=this.videoPlayer.getVideoTitle(),this.initializeLocalization(),this.initializeComponents(),!this.playButton||!this.playTooltip||!this.fullScreenButton||!this.fullScreenTooltip||!this.liveButton||!this.liveTooltip||!this.progressSliderElement||!this.volumeButton||!this.volumeContainer||!this.volumeSliderElement||!this.timeElement||!this.timeCurrent||!this.timeDuration||!this.optionsButton||!this.menuContainer||!!this.xboxControlsEnabled)return null;this.focusTrapStart=this.playButton;this.updatePlayPauseState();this.isWindowZoomedIn=Math.round(window.devicePixelRatio*100)>100;f.addEvent(window,f.eventTypes.resize,function(){l.isWindowZoomedIn=Math.round(window.devicePixelRatio*100)>100;l.hideAllMenus()});f.addEvent(window,f.eventTypes.scroll,function(){l.isWindowZoomedIn||l.hideAllMenus()});f.addEvent(this.videoControls,f.eventTypes.keydown,this.onControlKeyboardEvent);f.addEvents(this.playButton,"click mouseover mouseout focus blur",this.onPlayPauseEvents);f.addEvents(this.liveButton,"click mouseover mouseout focus blur",this.onLiveButtonEvents);f.addEvents(this.fullScreenButton,"click mouseover mouseout focus blur",this.onFullScreenEvents);f.addEvents([this.volumeButton,this.volumeContainer],"click mouseover mouseout focus blur",this.onVolumeEvents);f.addEvents(this.optionsButton,"click mouseover mouseout focus blur keydown keyup",this.onMoreOptionsEvents);i.ComponentFactory.create([{component:r.Slider,eventToBind:"DOMContentLoaded",elements:[this.progressSliderElement,this.volumeSliderElement],callback:function(n){!n||!n.length||n.length!==2||(l.progressSlider=n[0],l.volumeSlider=n[1],l.progressSlider.subscribe({onValueChanged:function(n){return l.onProgressChanged(n)}}),l.volumeSlider.subscribe({onValueChanged:function(n){return l.onVolumeChanged(n)}}),f.addEvents(f.selectFirstElement("button",l.volumeSliderElement),"focus blur keydown",l.onVolumeSliderEvents),f.addEvents([l.progressSliderElement,l.volumeSliderElement],"keydown",l.onSliderKeyboardEvents))}}])}}return n.prototype.getSeekSteps=function(){return n.seekSteps},n.prototype.getAriaLabel=function(){return n.ariaLabel},n.prototype.getLocalizationHelper=function(){return this.localizationHelper},n.prototype.getVideoPlayer=function(){return this.videoPlayer},n.prototype.setVideoControls=function(n){this.videoControls=n},n.prototype.getVideoControls=function(){return this.videoControls},n.prototype.setPlayButton=function(n){this.playButton=n},n.prototype.getPlayButton=function(){return this.playButton},n.prototype.setLiveButton=function(n){this.liveButton=n},n.prototype.getLiveButton=function(){return this.liveButton},n.prototype.setTimeElement=function(n){this.timeElement=n},n.prototype.getTimeElement=function(){return this.timeElement},n.prototype.setTimeCurrent=function(n){this.timeCurrent=n},n.prototype.getTimeCurrent=function(){return this.timeCurrent},n.prototype.setTimeDuration=function(n){this.timeDuration=n},n.prototype.getTimeDuration=function(){return this.timeDuration},n.prototype.setProgressSliderElement=function(n){this.progressSliderElement=n},n.prototype.getProgressSliderElement=function(){return this.progressSliderElement},n.prototype.setOptionsButton=function(n){this.optionsButton=n},n.prototype.getOptionsButton=function(){return this.optionsButton},n.prototype.setMenuContainer=function(n){this.menuContainer=n},n.prototype.getMenuContainer=function(){return this.menuContainer},n.prototype.setVolumeButton=function(n){this.volumeButton=n},n.prototype.getVolumeButton=function(){return this.volumeButton},n.prototype.setFullScreenButton=function(n){this.fullScreenButton=n},n.prototype.getFullScreenButton=function(){return this.fullScreenButton},n.prototype.setXboxControlsEnabled=function(n){this.xboxControlsEnabled=n},n.prototype.initializeComponents=function(){var r;if(this.videoControls){var i=this.localizationHelper.getLocalizedValue(e.playerLocKeys.live_caption),u=this.localizationHelper.getLocalizedValue(e.playerLocKeys.live_label),o=this.localizationHelper.getLocalizedValue(e.playerLocKeys.seek),t=this.localizationHelper.getLocalizedValue(e.playerLocKeys.more_caption),s=this.localizationHelper.getLocalizedValue(e.playerLocKeys.volume);this.videoControls.children.length||(r="<button type='button' class='f-play-pause c-glyph glyph-play' aria-label='"+this.locPlay+"' role='button'>\n    <span aria-hidden='true'>"+this.locPlay+"<\/span>\n<\/button>\n<button type='button' class='f-live f-live-current c-glyph glyph-view' aria-label='"+i+"' aria-hidden='true'>\n    <span aria-hidden='true'>"+i+"<\/span>\n    "+u+"\n<\/button>\n<span class='f-time'>\n    <span class='f-current-time'>00:00<\/span>\n    /\n    <span class='f-duration'>00:00<\/span>\n<\/span>\n<div class='c-slider f-progress'>\n    <input type='range' class='f-seek-bar' aria-label='"+o+"' value='0' min='0' tabindex='-1' step="+n.seekSteps+">\n<\/div>\n<button type='button' class='f-options c-glyph glyph-more' aria-label='"+t+"' aria-expanded='false'>\n    <span aria-hidden='true'>"+t+"<\/span>\n<\/button>\n<div class='f-menu-container'><\/div>\n<button type='button' class='f-volume-button c-glyph glyph-volume' aria-label='"+this.locMute+"'><\/button>\n<div class='f-volume-slider' data-show='false' role='presentation'>\n    <div class='c-slider f-vertical' role='presentation'>\n        <input type='range' class='f-volume-bar f-vertical' aria-label='"+s+"' \n            min='0' max='100' step='"+n.volumeSteps+"' value='100' tabindex='-1'>\n    <\/div>\n<\/div>\n<button type='button' class='f-full-screen c-glyph glyph-full-screen' aria-label='"+this.locFullScreen+"'>\n    <span aria-hidden='true'>"+this.locFullScreen+"<\/span>\n<\/button>",this.videoControls.innerHTML=r);this.playButton=f.selectFirstElementT(".f-play-pause",this.videoControls);this.setAriaLabelForPlayButton();this.playTooltip=f.selectFirstElement("span",this.playButton);f.setText(this.playTooltip,this.locPlay);this.tooltipElements.push(this.playTooltip);this.liveButton=f.selectFirstElementT(".f-live",this.videoControls);this.liveTooltip=f.selectFirstElement("span",this.liveButton);this.tooltipElements.push(this.liveTooltip);this.timeElement=f.selectFirstElement(".f-time",this.videoControls);this.timeCurrent=f.selectFirstElement(".f-current-time",this.timeElement);this.timeDuration=f.selectFirstElement(".f-duration",this.timeElement);this.progressSliderElement=f.selectFirstElement(".c-slider.f-progress",this.videoControls);this.optionsButton=f.selectFirstElementT(".f-options",this.videoControls);this.optionsButton.setAttribute(n.ariaLabel,this.localizationHelper.getLocalizedValue(e.playerLocKeys.more_caption));this.moreOptionsTooltip=f.selectFirstElement("span",this.optionsButton);f.setText(this.moreOptionsTooltip,t);this.tooltipElements.push(this.moreOptionsTooltip);this.menuContainer=f.selectFirstElement(".f-menu-container",this.videoControls);this.volumeButton=f.selectFirstElementT(".f-volume-button",this.videoControls);this.volumeButton.setAttribute(n.ariaLabel,this.locMute);this.volumeContainer=f.selectFirstElement(".f-volume-slider",this.videoControls);this.volumeSliderElement=f.selectFirstElement(".c-slider",this.volumeContainer);this.fullScreenButton=f.selectFirstElementT(".f-full-screen",this.videoControls);this.fullScreenButton.setAttribute(n.ariaLabel,this.locFullScreen);this.fullScreenTooltip=f.selectFirstElement("span",this.fullScreenButton);f.setText(this.fullScreenTooltip,this.locFullScreen);this.tooltipElements.push(this.fullScreenTooltip)}},n.prototype.setAriaLabelForPlayButton=function(){this.videoTitle!==""?this.playButton.setAttribute(n.ariaLabel,this.locPlay+" "+this.videoTitle):this.playButton.setAttribute(n.ariaLabel,this.locPlayVideo)},n.prototype.initializeLocalization=function(){this.locPlay=this.localizationHelper.getLocalizedValue(e.playerLocKeys.play);this.locPlayVideo=this.localizationHelper.getLocalizedValue(e.playerLocKeys.play_video);this.locPlaying=this.localizationHelper.getLocalizedValue(e.playerLocKeys.playing);this.locPaused=this.localizationHelper.getLocalizedValue(e.playerLocKeys.paused);this.locPause=this.localizationHelper.getLocalizedValue(e.playerLocKeys.pause);this.locMute=this.localizationHelper.getLocalizedValue(e.playerLocKeys.mute);this.locUnmute=this.localizationHelper.getLocalizedValue(e.playerLocKeys.unmute);this.locFullScreen=this.localizationHelper.getLocalizedValue(e.playerLocKeys.expand);this.locExitFullScreen=this.localizationHelper.getLocalizedValue(e.playerLocKeys.unexpand)},n.prototype.setPlayPosition=function(t){var r,s,h;if(!this.videoPlayer||!t){this.playPosition=undefined;return}var i=t.endTime-t.startTime,e=this.playPosition?this.playPosition.endTime-this.playPosition.startTime:0,o=this.videoPlayer.isLive();o&&(r=Math.abs(t.currentTime-t.endTime),s=r/(t.endTime-t.startTime),r<20||s<.01?f.addClass(this.liveButton,"f-live-current"):f.removeClass(this.liveButton,"f-live-current"));isNaN(i)||isNaN(e)||Math.abs(i-e)>1||!this.playPosition?(this.progressSlider&&this.progressSlider.resetSlider(0,i,t.currentTime-t.startTime,n.seekSteps),this.timeDuration&&f.setText(this.timeDuration,u.toElapsedTimeString(i,!1))):this.progressSlider&&this.progressSlider.setValue(t.currentTime-t.startTime);this.timeCurrent&&(h=o?t.currentTime-t.endTime:t.currentTime,f.setText(this.timeCurrent,u.toElapsedTimeString(h,!1)));this.playPosition=u.extend({},t)},n.prototype.addUserInteractionListener=function(n){n&&this.userInteractionCallbacks.push(n)},n.prototype.triggerUserInteractionCallback=function(){var n,t,i;if(this.userInteractionCallbacks&&this.userInteractionCallbacks.length)for(n=0,t=this.userInteractionCallbacks;n<t.length;n++)i=t[n],i()},n.prototype.setVolume=function(n,t){u.isNumber(n)&&!!this.videoPlayer&&this.videoPlayer.setVolume(n,t)},n.prototype.setMuted=function(n,t){!this.videoPlayer||(n?this.videoPlayer.mute(t):this.videoPlayer.unmute(t))},n.prototype.updateVolumeState=function(){var n,t;this.updateMuteGlyph();!this.videoPlayer||!this.volumeSlider||(n=this.videoPlayer.isMuted()||this.videoPlayer.getVolume()===0,n?this.volumeSlider.setValue(0):(t=this.videoPlayer.getVolume(),this.volumeSlider.setValue(Math.round(t*100))))},n.prototype.updateMuteGlyph=function(){if(!!this.videoPlayer&&!!this.volumeButton){f.removeClasses(this.volumeButton,["glyph-volume","glyph-mute"]);var t=this.videoPlayer.isMuted()||this.videoPlayer.getVolume()===0;f.addClass(this.volumeButton,t?"glyph-mute":"glyph-volume");this.volumeButton.setAttribute(n.ariaLabel,t?this.locUnmute:this.locMute)}},n.prototype.prepareToHide=function(){this.hideAllMenus(!0);this.hideVolumeContainer()},n.prototype.hideControls=function(){var n=this;setTimeout(function(){for(var r,t=0,i=n.tooltipElements;t<i.length;t++)r=i[t],n.hideElement(r)},0)},n.prototype.onProgressChanged=function(n){var t,i,r;return!n||!this.videoPlayer?null:(i=this.videoPlayer.isLive(),i?(r=this.videoPlayer.getPlayPosition(),t=n.value+r.startTime-r.endTime):(t=n.value,this.timeCurrent&&f.setText(this.timeCurrent,u.toElapsedTimeString(t,!1))),this.videoPlayer&&n.userInitiated&&this.videoPlayer.seek(this.toAbsoluteTime(n.value)),u.toElapsedTimeString(t,!i))},n.prototype.toAbsoluteTime=function(n){return this.videoPlayer&&this.videoPlayer.isLive()?n+this.videoPlayer.getPlayPosition().startTime:n},n.prototype.onVolumeChanged=function(n){if(!n)return null;!!this.videoPlayer&&n.value>0&&this.setMuted(!1);!this.videoPlayer||n.value!==0||this.setMuted(!0);var t=Math.round(n.value);return n.userInitiated&&this.setVolume(t/100,!0),t.toString()},n.prototype.play=function(){!this.videoPlayer||(this.videoPlayer.play(),this.videoPlayer.updateScreenReaderElement(this.locPlaying))},n.prototype.pause=function(){!this.videoPlayer||(this.videoPlayer.pause(!0),this.videoPlayer.updateScreenReaderElement(this.locPaused))},n.prototype.updatePlayPauseState=function(){!this.videoPlayer||!this.playButton||(this.videoPlayer.isPlayable()?(this.playButton.removeAttribute("disabled"),this.videoPlayer.isPaused()?(!this.playTooltip||f.setText(this.playTooltip,this.locPlay),f.removeClass(this.playButton,"glyph-pause"),f.addClass(this.playButton,"glyph-play"),this.setAriaLabelForPlayButton()):(!this.playTooltip||f.setText(this.playTooltip,this.locPause),f.removeClass(this.playButton,"glyph-play"),f.addClass(this.playButton,"glyph-pause"),this.playButton.setAttribute(n.ariaLabel,this.locPause),this.prepareToHide())):(!this.playTooltip||f.setText(this.playTooltip,this.locPlay),f.removeClass(this.playButton,"glyph-pause"),f.addClass(this.playButton,"glyph-play"),this.setAriaLabelForPlayButton(),this.playButton.setAttribute("disabled","disabled")))},n.prototype.setLive=function(t){this.liveButton&&this.timeElement&&(this.liveButton.setAttribute(n.ariaHidden,t?"false":"true"),this.timeElement.setAttribute(n.ariaHidden,t?"true":"false"))},n.prototype.updateFullScreenState=function(){var t,n;this.videoPlayer&&this.fullScreenButton&&(t=this.videoPlayer.isFullScreen(),t?(f.removeClass(this.fullScreenButton,"glyph-full-screen"),f.addClass(this.fullScreenButton,"glyph-back-to-window"),this.setFocus(this.fullScreenButton)):(f.removeClass(this.fullScreenButton,"glyph-back-to-window"),f.addClass(this.fullScreenButton,"glyph-full-screen")),n=t?this.locExitFullScreen:this.locFullScreen,this.fullScreenButton.setAttribute("aria-label",n),!this.fullScreenTooltip||(f.setText(this.fullScreenTooltip,n),this.videoPlayer.updateScreenReaderElement(n)))},n.prototype.setFocusOnControlBar=function(){this.setFocus(this.playButton)},n.prototype.setFocusTrap=function(n){n===null&&(n=this.playButton);this.focusTrapStart=n;f.addEvent([n,this.fullScreenButton],f.eventTypes.keydown,this.focusTrapHandler)},n.prototype.removeFocusTrap=function(){f.removeEvents([this.focusTrapStart,this.fullScreenButton],"keydown",this.focusTrapHandler)},n.prototype.showVolumeContainer=function(t){var i=this;if(!!this.volumeContainer){this.volumeContainer.setAttribute("data-show","true");this.onlyOneDialog(this.volumeContainer);clearTimeout(this.volumeAutoHideTimer);t&&document.activeElement!==this.volumeButton&&(this.volumeAutoHideTimer=setTimeout(function(){i.hideVolumeContainer()},n.volumeAutoHideTimeout))}},n.prototype.hideVolumeContainer=function(){this.volumeContainer.setAttribute("data-show","false");clearTimeout(this.volumeAutoHideTimer)},n.prototype.showElement=function(t){t&&t.setAttribute(n.ariaHidden,"false")},n.prototype.hideElement=function(t){t&&t.setAttribute(n.ariaHidden,"true")},n.prototype.toggleMenuById=function(n,t,i){if(this.activeMenu&&this.activeMenu.id===i)this.hideAllMenus();else{n.setAttribute("aria-expanded","true");this.showMenu(i,t,n);var r=f.selectFirstElement("button",this.activeMenu);!r||f.removeClass(r,"glyph-chevron-left")}},n.prototype.resetMenuPosition=function(n,t){var i=f.selectElements(".f-player-menu",this.videoControls),r,u;if(!!i&&i.length>0)for(r=0;r<i.length;r++)u=f.selectFirstElement("button",i[r]),!!u&&u.hasAttribute("data-next-menu")&&f.addClass(u,"glyph-chevron-left");!t||(this.menuRight=f.css(t,"right"));f.css(n,"right",this.menuRight)},n.prototype.createReactiveButton=function(n,t,i,r,u){var s=this.hasReactiveClass(n),e;if(!s){var h="<span aria-hidden='true'>"+r+"<\/span>",c="\n            <button class='f-reactive c-glyph "+n+" "+u+"' aria-label='"+r+"' aria-hidden='true' \n            data-menu-id='"+i+"' aria-expanded='false'>\n                "+h+"\n            <\/button>",o=document.createElement("div");o.innerHTML=c;e=f.selectFirstElementT("button",o);this.videoControls.insertBefore(e,this.optionsButton);f.setText(e.firstElementChild,r);this.tooltipElements.push(e.firstElementChild);f.addEvents(e,"click mouseover mouseout focus blur keydown keyup",this.onMenuButtonClick);this.reactiveControls.push({button:e,priority:t});this.sortReactiveControls()}},n.prototype.sortReactiveControls=function(){this.reactiveControls.sort(function(n,t){return n.priority<t.priority?-1:n.priority>t.priority?1:0})},n.prototype.hasReactiveClass=function(n){for(var t=0;t<this.reactiveControls.length;t++)if(f.hasClass(this.reactiveControls[t].button,n))return!0;return!1},n.prototype.toggleReactiveButtonLabelAndHandlers=function(n,t){var c=n.button.getAttribute("data-menu-id"),h=document.getElementById(c),i,s,u,r;if(!!h&&(i=h.getElementsByTagName("button")[0],!!i&&i.hasAttribute("data-next-menu"))){if(s=this.localizationHelper.getLocalizedValue(e.playerLocKeys.previous_menu_aria_label).replace("{0}",""),u=this.localizationHelper.getLocalizedValue(e.playerLocKeys.reactive_menu_aria_label).replace("{0}",""),f.hasClass(i,"closed-caption")&&(u=this.localizationHelper.getLocalizedValue(e.playerLocKeys.reactive_menu_aria_label_closedcaption).replace("{0}","")),r=i.getAttribute("aria-label"),!r||r.indexOf(s)!==-1&&r.indexOf(u)!==-1)return;r=r.replace(s,"").replace(u,"");t?i.setAttribute("aria-label",o.format(this.localizationHelper.getLocalizedValue(e.playerLocKeys.previous_menu_aria_label),r)):f.hasClass(i,"closed-caption")?i.setAttribute("aria-label",o.format(this.localizationHelper.getLocalizedValue(e.playerLocKeys.reactive_menu_aria_label_closedcaption),r)):i.setAttribute("aria-label",o.format(this.localizationHelper.getLocalizedValue(e.playerLocKeys.reactive_menu_aria_label),r))}},n.prototype.toggleMoreOptionsItemVisibility=function(t,i){var a=t.button.getAttribute("data-menu-id"),r,c,u,s,h,v,l,o,e;if(!!a&&(r=document.getElementById(a+"_item"),!!r&&!!r.parentElement&&!!r.parentElement.parentElement)){for(c=r.parentElement.parentElement,i?(r.setAttribute(n.ariaHidden,"false"),f.addClass(r.firstElementChild,"active")):(r.setAttribute(n.ariaHidden,"true"),f.removeClass(r.firstElementChild,"active")),u=c.querySelectorAll("li"),s=0,h=0;h<u.length;h++)e=u[h].getAttribute(n.ariaHidden),e&&e!=="false"||(s+=40);if(s!==0)for(this.optionsButton.setAttribute(n.ariaHidden,"false"),f.css(c,"height",s+4+"px"),v=s/40,l=1,o=0;o<u.length;o++)e=u[o].getAttribute(n.ariaHidden),e&&e!=="false"||(u[o].firstElementChild.setAttribute("aria-setsize",v.toString()),u[o].firstElementChild.setAttribute("aria-posinset",l.toString()),l++);else this.optionsButton.setAttribute(n.ariaHidden,"true")}},n.prototype.updateReactiveControlDisplay=function(){var h=parseInt(f.css(this.optionsButton,"padding-right"),10),o=u.getDimensions(this.optionsButton).width+h,r,i,s,e,t;if(this.reactiveControls.length>0&&(r=u.getDimensions(this.videoControls).width,r!==0)){for(i=o*3,s=!0,e=this.reactiveControls.length-1;e>=0;e--)t=this.reactiveControls[e],r<this.reactiveWidths[t.priority]?(this.toggleReactiveButtonLabelAndHandlers(t,!0),this.toggleMoreOptionsItemVisibility(t,!0),t.button.setAttribute(n.ariaHidden,"true")):r>this.reactiveWidths[t.priority]&&(this.toggleReactiveButtonLabelAndHandlers(t,!1),this.toggleMoreOptionsItemVisibility(t,!1),this.optionsButton.getAttribute(n.ariaHidden)==="true"&&s&&(i=o*2,s=!1),t.button.setAttribute(n.ariaHidden,"false"),f.css(t.button,"right",2+i+"px"),f.hasClass(t.button,"f-volume-button")&&f.css(this.volumeContainer,"right",2+i+"px"),i+=o);f.css(this.progressSliderElement,"width","calc(100% - "+(i+140)+"px)")}},n.prototype.initializePlayerMenus=function(){var t=f.selectElements(n.menuSelector+" ul",this.menuContainer);t&&t.length&&f.addEvents(t,"click keydown keyup",this.onMenuEvents)},n.prototype.disposeReactiveControls=function(){for(var i,n=0,t=this.reactiveControls;n<t.length;n++)i=t[n],f.removeElement(i.button);this.reactiveControls=[]},n.prototype.disposePlayerMenus=function(){var t=f.selectElements(n.menuSelector+" ul",this.menuContainer);t&&t.length&&f.removeEvents(t,"click keydown keyup",this.onMenuEvents);f.removeInnerHtml(this.menuContainer);this.disposeReactiveControls()},n.prototype.toggleOptionsDialog=function(n){this.activeMenu&&f.css(this.activeMenu,"right")===this.defaultMenuRight?this.hideAllMenus():(this.showMenu(this.optionsButton.getAttribute("data-menu-id"),n,this.optionsButton),this.optionsButton.setAttribute("aria-expanded","true"))},n.prototype.onlyOneDialog=function(t){!this.activeMenu||!this.volumeContainer||this.activeMenu.getAttribute(n.ariaHidden)!=="false"||this.volumeContainer.getAttribute("data-show")!=="true"||(t===this.activeMenu?this.hideVolumeContainer():this.hideAllMenus())},n.prototype.onMenuKeyPressed=function(n){var h=u.getKeyCode(n),o=f.getEventTargetOrSrcElement(n),l=o&&o.parentElement,c,t,s,i,r,e;if(this.activeMenu&&l){c=this.activeMenu.id;this.triggerUserInteractionCallback();switch(h){case 37:case 39:if(f.stopPropagation(n),f.preventDefault(n),o.getAttribute("data-next-menu"))this.onMenuItemClick(n,!0);break;case 13:case 32:f.preventDefault(n);this.onMenuItemClick(n,!0);if(!!this.activeMenu&&(t=this.activeMenu.getElementsByTagName("button"),s=0,!!t&&t.length>0))for(i=0;i<t.length;i++)t[i].getAttribute("data-next-menu")===c?(this.setFocus(t[i]),this.focusedMenuItemIndex=s):f.hasClass(t[i],"active")&&s++;break;case 38:case 40:f.stopPropagation(n);f.preventDefault(n);r=f.selectElements(".active",this.activeMenu);r&&r.length&&(h===38?(this.focusedMenuItemIndex-=1,this.focusedMenuItemIndex<0&&(this.focusedMenuItemIndex=r.length-1)):this.focusedMenuItemIndex=(this.focusedMenuItemIndex+1)%r.length,this.setFocus(r[this.focusedMenuItemIndex]));break;case 33:case 36:f.stopPropagation(n);f.preventDefault(n);this.setFocus(f.selectFirstElement(".active",this.activeMenu));break;case 35:case 34:f.stopPropagation(n);f.preventDefault(n);e=f.selectElements(".active",this.activeMenu);e&&e.length&&this.setFocus(e[e.length-1]);break;case 27:this.activeMenu&&f.stopPropagation(n);this.closeMenuRequested=!0;this.focusOnLastButton();break;case 9:this.focusedMenuItemIndex+=n.shiftKey?-1:1;this.focusOnNextButton(n)}}},n.prototype.focusOnLastButton=function(){var i,t;if(!!this.activeMenu){for(i=0;i<this.reactiveControls.length;i++)if(t=this.reactiveControls[i].button,!this.activeMenuButton||this.activeMenuButton.getAttribute("data-menu-id")!==t.getAttribute("data-menu-id")){if(this.activeMenu.id===t.getAttribute("data-menu-id")){this.hideAllMenus();t.getAttribute(n.ariaHidden)!=="true"?(this.setFocus(t),f.removeClass(t,"x-hidden-focus")):this.setFocus(this.optionsButton);return}}else{this.hideAllMenus();this.setFocus(t);f.removeClass(t,"x-hidden-focus");return}!this.activeMenu||(this.hideAllMenus(),this.setFocus(this.optionsButton))}},n.prototype.focusOnNextButton=function(t){var r,i;if(!!this.activeMenu&&!!this.activeMenuButton)if(r=f.selectElements(".active",this.activeMenu),this.focusedMenuItemIndex>=r.length){for(f.stopPropagation(t),f.preventDefault(t),i=this.activeMenuButton.nextElementSibling;!!i;){if(i.nodeName.toLowerCase()==="button"&&i.getAttribute(n.ariaHidden)!=="true"){this.setFocus(i);break}i=i.nextElementSibling}i||this.setFocus(this.playButton);this.hideAllMenus()}else this.focusedMenuItemIndex<0&&(f.stopPropagation(t),f.preventDefault(t),this.setFocus(this.activeMenuButton),this.hideAllMenus())},n.prototype.calcHeight=function(n){if(!n||!this.videoControls)return 0;var t=f.getClientRect(n).height,r=f.getClientRect(this.videoControls.parentElement),u=f.getClientRect(this.videoControls),i=r.height-u.height-10;return t>i&&(t=i),t},n.prototype.createMenu=function(n){var h,u,c,t,i,a,l;if(this.menuContainer&&n&&n.category&&n.id&&n.items&&n.items.length){var f="",r=n.items.length,s=1;for(n.label&&this.localizationHelper&&!n.hideBackButton&&(h=o.format(this.localizationHelper.getLocalizedValue(e.playerLocKeys.previous_menu_aria_label),n.label),r+=1,f+=n.cssClass==="closed-caption"?"<li role='presentation'>\n    <button class='c-action-trigger c-glyph glyph-chevron-left active closed-caption' data-next-menu='back'\n    aria-label='"+h+"'aria-setsize='"+r+"' aria-posinset='"+s+++"' role='menuitem'>\n    "+n.label+"<\/button>\n<\/li>":"<li role='presentation'>\n    <button class='c-action-trigger c-glyph glyph-chevron-left active' data-next-menu='back' aria-label='"+h+"'\n    aria-setsize='"+r+"' aria-posinset='"+s+++"' role='menuitem'>\n    "+n.label+"<\/button>\n<\/li>"),u=0,c=n.items;u<c.length;u++)t=c[u],t.subMenu&&(t.subMenuId=t.subMenu.id,this.createMenu(t.subMenu)),i="c-action-trigger active",i+=t.subMenuId||t.glyph||t.selectable?" c-glyph":"",i+=t.selectable&&t.selected?" glyph-check-mark":"",i+=t.subMenuId?" glyph-chevron-right":"",i+=t.glyph?" "+t.glyph:"",f+="<li id='"+t.id+"' role='presentation'>\n    <button class='"+i+"' "+(t.data?"data-info='"+t.data+"'":"")+"\n        role="+(t.selectable?"'menuitemradio'":"'menuitem'")+"\n        aria-setsize='"+r+"' aria-posinset='"+s+++"'\n        "+(t.selectable&&t.selected?" aria-checked='true'":"")+" \n        "+(t.selectable?"data-video-selectable='true'":"")+"\n        "+(t.subMenuId?"data-next-menu="+t.subMenuId+" aria-expanded='false' aria-haspopup='true'":"")+"\n        "+(t.persistOnClick?"data-persist='true'":"")+" "+(t.ariaLabel?"aria-label='"+t.ariaLabel+"'":"")+"\n        "+(t.language?"lang="+t.language:"")+">\n            "+(t.image?"<img src='"+t.image+"' alt='"+(t.imageAlt||"")+"' class='c-image'/>":"")+"\n            "+t.label+"\n    <\/button>\n<\/li>";a="<div id='"+n.id+"' class='f-player-menu' aria-hidden='true' data-category='"+n.category+"'>\n    <ul role='menu' class='c-list f-bare'>\n        "+f+"\n    <\/ul>\n<\/div>";l=document.createElement("div");l.innerHTML=a;this.menuContainer.appendChild(l.firstChild)}},n.prototype.showMenu=function(n,t,i){var r,e,u;if(n&&(!i||(this.activeMenuButton=i),this.hideControls(),this.focusedMenuItemIndex=0,this.hideActiveMenu(),this.menuContainer.setAttribute("aria-hidden","false"),r=f.selectFirstElement("#"+n,this.menuContainer),this.resetMenuPosition(r,i),r)){e=f.css(r,"height");this.showElement(r);u=this.calcHeight(r);e==="auto"&&(u+=2);f.css(r,"height",u+"px");f.css(r,"right",this.menuRight);this.activeMenu=r;this.onlyOneDialog(r);t=!0;t&&this.setFocus(f.selectFirstElement("li:not([aria-hidden = true]) button",r))}},n.prototype.setFocusonPlayButton=function(){this.playButton.blur();this.setFocus(this.playButton)},n.prototype.setFocusonOptionsButton=function(){this.setFocus(this.optionsButton)},n.prototype.setFocus=function(n){!n||setTimeout(function(){n.focus()},0)},n.prototype.hideActiveMenu=function(){this.activeMenu&&(this.hideElement(this.activeMenu),this.activeMenu=null)},n.prototype.pushToMenuBackStack=function(n){this.menuBackStack&&n&&this.menuBackStack.push(n)},n.prototype.popFromMenuBackStack=function(){return this.menuBackStack&&this.menuBackStack.length?this.menuBackStack.pop():null},n.prototype.clearMenuBackStack=function(){this.menuBackStack=[]},n.prototype.setupPlayerMenus=function(n){var r,i,u,t,f,e;if(this.videoControls&&n&&n.length){for(this.disposePlayerMenus(),r=[],i=0,u=n;i<u.length;i++)t=u[i],r.push({id:t.id+"_item",label:t.label,subMenu:t}),!t.glyph||!t.priority||this.createReactiveButton(t.glyph,t.priority,t.id,t.label,t.cssClass!==undefined?t.cssClass:"");f=this.videoPlayer.getPlayerId()+"-options-menu";e={id:f,items:r,category:"options"};this.createMenu(e);this.optionsButton.setAttribute("data-menu-id",f);this.initializePlayerMenus();this.updateReactiveControlDisplay()}},n.prototype.updateMenuSelection=function(n,t){var u,s,r,e,o,i;if(n&&this.menuContainer&&(u=f.selectFirstElement("#"+n,this.menuContainer),u))for(s=f.selectElements("li",u),r=0,e=s;r<e.length;r++)o=e[r],i=f.selectFirstElement("button",o),i&&i.getAttribute("data-video-selectable")&&(t&&t===o.id?(f.addClasses(i,["c-glyph","glyph-check-mark"]),i.setAttribute("aria-checked","true")):(f.removeClass(i,"glyph-check-mark"),i.removeAttribute("aria-checked")))},n.prototype.resetSlidersWorkaround=function(){var i=this.videoControls.getBoundingClientRect(),t,r;this.controlsBounds&&this.controlsBounds.height===i.height&&this.controlsBounds.width===i.width||(this.controlsBounds=i,this.progressSlider&&this.videoPlayer&&(t=this.videoPlayer.getPlayPosition(),r=t.endTime-t.startTime,this.progressSlider.resetSlider(0,r,t.currentTime-t.startTime,n.seekSteps)),this.volumeSlider&&this.videoPlayer&&this.volumeSlider.resetSlider(0,100,this.videoPlayer.getVolume()*100,n.volumeSteps))},n.selector=".f-video-controls",n.ariaHidden="aria-hidden",n.ariaLabel="aria-label",n.menuSelector=".f-player-menu",n.seekSteps=5,n.volumeSteps=5,n.volumeAutoHideTimeout=2e3,n}();t.VideoControls=h});define("context-menu",["require","exports","htmlExtensions","utility"],function(n,t,i,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function n(n,t){var u=this;this.contextMenuContainer=n;this.focusedMenuItemIndex=0;this.onContextMenuEvents=function(n,t){switch(n.type){case"click":u.onContextMenuItemClick(n,t);break;case"keyup":var f=r.getKeyCode(n);f===32&&i.preventDefault(n);break;case"keydown":u.onContextMenuKeyPressed(n)}};this.onContextMenuItemClick=function(n){var t;n=i.getEvent(n);t=i.getEventTargetOrSrcElement(n);i.preventDefault(n);var r=t.parentElement,f=r.id||r.parentElement&&r.parentElement.id,e=t.getAttribute("data-info")||r.getAttribute("data-info");if(!!u.videoPlayer)u.videoPlayer.onPlayerContextMenuItemClick({category:t.getAttribute("data-category"),id:f,data:e})};this.videoPlayer=t}return n.prototype.initializeCustomPlayerMenus=function(){this.contextMenuContainer&&(this.menuItems=i.selectElements(n.contextMenuSelector+" ul li",this.contextMenuContainer),this.menuItems&&this.menuItems.length&&i.addEvents(this.menuItems,"click keydown keyup",this.onContextMenuEvents))},n.prototype.calcHeightWidthOfContextMenu=function(){if(this.contextMenuContainer){var t=i.selectFirstElement(n.contextMenuSelector,this.contextMenuContainer);t&&(t.setAttribute("aria-hidden","false"),this.menuHeight=i.getClientRect(t).height,this.menuWidth=i.getClientRect(t).width,t.setAttribute("aria-hidden","true"))}},n.prototype.showMenu=function(t,r){var u=t.offsetX,f=t.offsetY;this.calcHeightWidthOfContextMenu();var o=r.offsetHeight+r.offsetTop,s=r.offsetWidth+r.offsetLeft,h=f+this.menuHeight+2,c=u+this.menuWidth+2,e=i.selectFirstElement(n.contextMenuSelector,this.contextMenuContainer);e&&(h>o&&(f=f-this.menuHeight),c>s&&(u=u-this.menuWidth),i.css(e,"left",u+"px"),i.css(e,"top",f+"px"),e.setAttribute("aria-hidden","false"))},n.prototype.checkContextMenuIsVisible=function(){if(this.contextMenuContainer){var t=i.selectFirstElement(n.contextMenuSelector,this.contextMenuContainer);return t?t.getAttribute("aria-hidden")==="false":!1}return!1},n.prototype.setFocusOnFirstElement=function(){this.contextMenuContainer&&(this.menuItems=i.selectElements(n.contextMenuSelector+" ul li",this.contextMenuContainer),this.menuItems&&this.menuItems.length&&this.setFocus(i.selectFirstElement("button",this.menuItems[0])))},n.prototype.onContextMenuKeyPressed=function(t){var f=r.getKeyCode(t),e=i.getEventTargetOrSrcElement(t),o=e&&e.parentElement,u;switch(f){case 37:case 39:i.stopPropagation(t);i.preventDefault(t);break;case 13:case 32:i.preventDefault(t);this.onContextMenuItemClick(t,!0);break;case 38:case 40:i.stopPropagation(t);i.preventDefault(t);this.menuItems&&this.menuItems.length&&(f===38?(this.focusedMenuItemIndex-=1,this.focusedMenuItemIndex<0&&(this.focusedMenuItemIndex=this.menuItems.length-1)):this.focusedMenuItemIndex=(this.focusedMenuItemIndex+1)%this.menuItems.length,this.setFocus(i.selectFirstElement("button",this.menuItems[this.focusedMenuItemIndex])));break;case 33:case 36:i.stopPropagation(t);i.preventDefault(t);this.menuItems&&this.menuItems.length>0&&this.setFocus(i.selectFirstElement("button",this.menuItems[0]));break;case 35:case 34:i.stopPropagation(t);i.preventDefault(t);this.menuItems&&this.menuItems.length>0&&this.setFocus(i.selectFirstElement("button",this.menuItems[this.menuItems.length-1]));break;case 27:u=i.selectFirstElement(n.contextMenuSelector,this.contextMenuContainer);u&&u.setAttribute("aria-hidden","true");this.videoPlayer.setFocusOnPlayButton()}},n.prototype.setupCustomizeContextMenu=function(t){var h=i.selectFirstElement(n.contextMenuSelector,this.contextMenuContainer),u,c,f,e,r,o,l,s;for(h&&this.contextMenuContainer.removeChild(h),u="",c=1,u="<ul role='menu' class='c-list f-bare'>",f=0,e=t;f<e.length;f++)r=e[f],o="c-action-trigger active",o+=r.glyph?" "+r.glyph:"",u+="<li id='"+r.id+"' role='presentation'>\n                    <button class='"+o+"'  role='menuitem'\n                        aria-setsize='"+t.length+"' \n                        aria-posinset='"+c+++"'\n                        aria-label='"+r.label+"'\n                        data-category='"+r.category+"'>\n                        "+r.label+"\n                    <\/button>\n                <\/li>";u+="<\/ul>";l="<div class='f-player-context-menu' aria-hidden='true'>\n                    "+u+"\n                <\/div>";s=document.createElement("div");s.innerHTML=l;this.contextMenuContainer.appendChild(s.firstChild);this.initializeCustomPlayerMenus()},n.prototype.setFocus=function(n){!n||setTimeout(function(){n.focus()},0)},n.contextMenuSelector=".f-player-context-menu",n}();t.ContextMenu=u});define("player-data-interfaces",["require","exports"],function(n,t){"use strict";var i,r,u,f,e;Object.defineProperty(t,"__esModule",{value:!0}),function(n){n[n.MP4="MP4"]="MP4";n[n.DASH="DASH"]="DASH";n[n.SMOOTH="SMOOTH"]="SMOOTH";n[n.HLS="HLS"]="HLS"}(i=t.MediaTypes||(t.MediaTypes={})),function(n){n[n.VTT="VTT"]="VTT";n[n.TTML="TTML"]="TTML"}(r=t.ClosedCaptionTypes||(t.ClosedCaptionTypes={})),function(n){n[n.HD="HD"]="HD";n[n.HQ="HQ"]="HQ";n[n.SD="SD"]="SD";n[n.LO="LO"]="LO"}(u=t.MediaQuality||(t.MediaQuality={})),function(n){n[n.transcript="transcript"]="transcript";n[n.audio="audio"]="audio";n[n.video="video"]="video";n[n.videoWithCC="videoWithCC"]="videoWithCC"}(f=t.DownloadableMediaTypes||(t.DownloadableMediaTypes={})),function(n){n[n.BufferingFirstByteTimeout=2e3]="BufferingFirstByteTimeout";n[n.MediaErrorAborted=2100]="MediaErrorAborted";n[n.MediaErrorNetwork=2101]="MediaErrorNetwork";n[n.MediaErrorDecode=2102]="MediaErrorDecode";n[n.MediaErrorSourceNotSupported=2103]="MediaErrorSourceNotSupported";n[n.MediaErrorUnknown=2104]="MediaErrorUnknown";n[n.MediaSelectionNoMedia=2200]="MediaSelectionNoMedia";n[n.AmpEncryptError=2405]="AmpEncryptError";n[n.AmpPlayerMismatch=2406]="AmpPlayerMismatch"}(e=t.VideoErrorCodes||(t.VideoErrorCodes={}))});define("player-options",["require","exports","utility","environment","player-constants","player-config"],function(n,t,i,r,u,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(){function n(n){this.autoload=!0;this.autoplay=!1;this.startTime=0;this.mute=!1;this.loop=!1;this.controls=!0;this.lazyLoad=!0;this.trigger=!0;this.theme="light";this.maskLevel="40";this.useHLS=!0;this.useAdaptive=!0;this.debug=!1;this.reporting={enabled:f.PlayerConfig.disableReporting.toLowerCase()!=="true",jsll:!0,aria:!1,wedcs:!1};this.playbackSpeed=!0;this.interactivity=!0;this.share=!0;this.shareOptions=[u.shareTypes.facebook,u.shareTypes.twitter,u.shareTypes.linkedin,u.shareTypes.skype,u.shareTypes.mail,u.shareTypes.copy];this.download=!0;this.playFullScreen=!1;this.hidePosterFrame=!1;this.shimServiceEnv="prod";this.corePlayer="html5";this.autoCaptions=null;this.flexSize=!1;this.aspectRatio=f.PlayerConfig.defaultAspectRatio;this.ageGate=!0;this.jsllPostMessage=!0;this.userMinimumAge=0;this.playPauseTrigger=!1;this.showEndImage=!1;this.showImageForVideoError=!1;this.inviewPlay=!1;this.inviewThreshold=null;this.timeRemainingCheckpoint=null;this.adsEnabled=!1;this.inViewWidthFraction=f.PlayerConfig.defaultInViewWidthFraction;this.inViewHeightFraction=f.PlayerConfig.defaultInViewHeightFraction;this.controlPanelTimeout=null;this.showControlOnLoad=!0;this.useAMPVersion2=!0;i.extend(this,n);r.Environment.isMobile?this.autoplay=!1:n&&n.autoPlay!==undefined&&(this.autoplay=!!n&&!!n.autoPlay);n&&n.autoLoad!==undefined&&(this.autoload=!!n&&!!n.autoLoad);this.autoplay&&(this.playFullScreen=!1,!this.mute&&r.Environment.isSafari&&(this.mute=!0));r.Environment.isIPhone&&(this.trigger=!1);(r.Environment.isOfficeCLView()||r.Environment.isIProduct)&&(this.useAdaptive=!1);n&&n.shareOptions&&(this.shareOptions=n.shareOptions);(!this.aspectRatio||!i.isNumber(this.aspectRatio)||this.aspectRatio<=0)&&(this.aspectRatio=f.PlayerConfig.defaultAspectRatio);(!this.inViewWidthFraction||!i.isNumber(this.inViewWidthFraction)||this.inViewWidthFraction>1)&&(this.inViewWidthFraction=f.PlayerConfig.defaultInViewWidthFraction);(!this.inViewHeightFraction||!i.isNumber(this.inViewHeightFraction)||this.inViewHeightFraction>1)&&(this.inViewHeightFraction=f.PlayerConfig.defaultInViewHeightFraction)}return n}();t.PlayerOptions=e});define("player-config",["require","exports","player-data-interfaces"],function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function n(){}return n.resourcesUrl="{0}/{1}/videoplayer/resources/{2}",n.resourceHost="https://www.microsoft.com",n.disableReporting="False",n.resourceHash="85308159Platform_20231211_85308159",n.defaultResourceHost="https://www.microsoft.com",n.ampUrl="//amp.azure.net/libs/amp/1.8.0/azuremediaplayer.min.js",n.ampVersion2Url="//amp.azure.net/libs/amp/2.3.9/azuremediaplayer.min.js",n.hasPlayerUrl="url(//www.microsoft.com/onerfstatics/marketingsites-eas-prod/sc/76/42277f.js)",n.hlsPlayerUrl="url(//www.microsoft.com/onerfstatics/marketingsites-eas-prod/sc/5b/8d47f5.js)",n.shimServiceProdUrl="//prod-video-cms-rt-microsoft-com.akamaized.net/vhs/api/videos/{0}",n.shimServiceIntUrl="//int-video-cms-rt-microsoft-com.akamaized.net/vhs/api/videos/{0}",n.adSdkUrl="//msadsdk.blob.core.windows.net/core/1/latest.min.js",n.eventCheckpointInterval=2e4,n.firstByteTimeoutVideoMobile=15e3,n.firstByteTimeoutVideoDesktop=1e4,n.defaultVolume=.8,n.checkpoints=[25,50,75,95],n.playbackRates=[2,1.5,1.25,1,.75,.5],n.defaultPlaybackRate=1,n.defaultQualityMobile=i.MediaQuality.SD,n.defaultQualityTV=i.MediaQuality.SD,n.defaultQualityDesktop=i.MediaQuality.HQ,n.defaultAspectRatio=16/9,n.defaultInViewWidthFraction=.5,n.defaultInViewHeightFraction=.5,n}();t.PlayerConfig=r});define("video-shim-data-fetcher",["require","exports","player-data-interfaces","player-utility","player-config","stringExtensions"],function(n,t,i,r,u,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(){function n(n,t){this.serviceEnv=n;this.serviceUrl=t}return n.prototype.getMetadata=function(n,t,i){var u=this,f=this.getServiceUrl(n);r.PlayerUtility.ajax(f,function(r){var f,e;if(r&&r.length){f=null;try{f=JSON.parse(r)}catch(o){i&&i();return}e=u.mapToVideoMetadata(n,f);t&&t(e)}else i&&i()},function(){i&&i()})},n.prototype.getServiceUrl=function(n){return this.serviceUrl||(this.serviceUrl=this.serviceEnv==="prod"?u.PlayerConfig.shimServiceProdUrl:u.PlayerConfig.shimServiceIntUrl),f.format(this.serviceUrl,n)},n.prototype.mapToVideoMetadata=function(n,t){var r,l,u,f,o,a,s,h,v,c,y,e;if(!n||!t)return null;if(r={videoId:n},t.snippet&&(r.title=t.snippet.title,r.description=t.snippet.description,r.interactiveTriggersEnabled=t.snippet.interactiveTriggersEnabled,r.interactiveTriggersUrl=t.snippet.interactiveTriggersUrl,r.minimumAge=t.snippet.minimumAge,t.snippet.thumbnails&&(r.posterframeUrl=this.removeProtocolFromUrl(t.snippet.thumbnails.medium.url))),t.captions){r.ccFiles=[];l="&vtt=true";for(u in t.captions)t.captions.hasOwnProperty(u)&&(t.captions[u].url.indexOf("?")<0&&(l="?vtt=true"),r.ccFiles.push({locale:u,url:this.removeProtocolFromUrl(t.captions[u].url),ccType:i.ClosedCaptionTypes.TTML}),r.ccFiles.push({locale:u,url:this.removeProtocolFromUrl(t.captions[u].url)+l,ccType:i.ClosedCaptionTypes.VTT}))}if(t.streams){r.videoFiles=[];for(f in t.streams)if(t.streams.hasOwnProperty(f)){if(f==="1001")continue;o=t.streams[f];a=this.getMediaTypeAndQuality(f);r.videoFiles.push({height:o.heightPixels,width:o.widthPixels,url:this.removeProtocolFromUrl(o.url),quality:a.quality,mediaType:a.mediaType})}}if(r.downloadableFiles=[],t.transcripts)for(s in t.transcripts)t.transcripts.hasOwnProperty(s)&&r.downloadableFiles.push({locale:s,url:this.removeProtocolFromUrl(t.transcripts[s].url),mediaType:i.DownloadableMediaTypes.transcript});if(r.videoFiles){for(h=void 0,v=0,c=0,y=r.videoFiles;c<y.length;c++)e=y[c],e.mediaType===i.MediaTypes.MP4&&e.width>=v&&(h=e,v=e.width);h&&r.downloadableFiles.push({locale:t.snippet.culture,url:this.removeProtocolFromUrl(h.url),mediaType:i.DownloadableMediaTypes.video})}return r},n.prototype.removeProtocolFromUrl=function(n){return n?n.replace(/(^\w+:|^)\/\//,"//"):n},n.prototype.getMediaTypeAndQuality=function(n){var t=i.MediaTypes.MP4,r=null;switch(n.toLowerCase()){case"h.264_320_180_400kbps":t=i.MediaTypes.MP4;r=i.MediaQuality.LO;break;case"h.264_640_360_1000kbps":t=i.MediaTypes.MP4;r=i.MediaQuality.SD;break;case"h.264_960_540_2250kbps":t=i.MediaTypes.MP4;r=i.MediaQuality.HQ;break;case"h.264_1280_720_3400kbps":t=i.MediaTypes.MP4;r=i.MediaQuality.HD;break;case"apple_http_live_streaming":t=i.MediaTypes.HLS;break;case"smooth_streaming":t=i.MediaTypes.SMOOTH;break;case"mpeg_dash":t=i.MediaTypes.DASH}return{mediaType:t,quality:r}},n.prototype.isUuid=function(n){return/^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/gi.test(n)},n}();t.VideoShimDataFetcher=e});define("age-gate-helper",["require","exports","utility","htmlExtensions","selectMenu","componentFactory","environment","localization-helper"],function(n,t,i,r,u,f,e,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function n(n,t,i,u){var f=this;this.playerContainer=n;this.corePlayer=t;this.localizationHelper=i;this.onCompleteCallback=u;this.ageGateData={};this.contentMinimumAge=0;this.isUserOldEnough=!1;this.didUserClickSubmit=!1;this.ageGateIsDisplayed=!1;this.onAgeGateButtonClick=function(n){var u,v;if(r.preventDefault(n),u=r.getEventTargetOrSrcElement(n),u){var o=r.selectFirstElement(".month-button",f.ageGateDialogue.monthSelectMenu),s=r.selectFirstElement(".day-button",f.ageGateDialogue.daySelectMenu),h=r.selectFirstElement(".year-button",f.ageGateDialogue.yearSelectMenu);if(o&&s&&h){var i=Number(r.getText(o)),c=Number(r.getText(s)),l=Number(r.getText(h));if(i&&c&&l){f.didUserClickSubmit=!0;var t=new Date,a=t.getFullYear()-l,y=t.getMonth()+1<i,p=t.getMonth()+1===i&&t.getDate()<c;(y||p)&&a--;f.addAgeGateVerifiedToUserSession(a+"");f.playerData.options.lazyLoad=!1;f.isUserOldEnoughToViewContent(f.contentMinimumAge)?(f.isUserOldEnough=!0,f.onCompleteCallback&&f.onCompleteCallback()):f.onCompleteCallback&&f.onCompleteCallback();f.ageGateDialogue.container.setAttribute("aria-hidden","true");f.ageGateIsDisplayed=!1;!e.Environment.isIProduct||(v=r.selectFirstElement("video",f.playerContainer),v.style.visibility="",f.playerContainer.style.backgroundColor="")}}}}}return n.prototype.verifyAgeGate=function(){if(this.playerData=this.corePlayer.getPlayerData(),this.contentMinimumAge=this.playerData.metadata.minimumAge?this.playerData.metadata.minimumAge:0,this.contentMinimumAge<=0||!this.playerData.options.ageGate)return this.isUserOldEnough=!0,this.onCompleteCallback&&this.onCompleteCallback(),!1;if(this.addUserAgeFromExternalLogin(),this.isUserAgeAlreadyVerified())this.isUserOldEnoughToViewContent(this.contentMinimumAge)?(this.isUserOldEnough=!0,this.onCompleteCallback&&this.onCompleteCallback()):this.onCompleteCallback&&this.onCompleteCallback();else return this.displayAgeGateDialogue(),!0;return!1},n.prototype.didUserSubmitAge=function(){return this.didUserClickSubmit},n.prototype.resetAgeGateSubmit=function(){this.didUserClickSubmit=!1},n.prototype.doesUserPassAgeGate=function(){return this.isUserOldEnough},n.prototype.addUserAgeFromExternalLogin=function(){var r=i.getCookie(n.xboxDotComAgeGateCookieName),t;Number(r)?i.saveToSessionStorage(n.ageGateSessionStorageKey,r):(t=this.playerData.options.userMinimumAge,t>0&&i.saveToSessionStorage(n.ageGateSessionStorageKey,t+""))},n.prototype.addAgeGateVerifiedToUserSession=function(t){i.saveToSessionStorage(n.ageGateSessionStorageKey,t)},n.prototype.isUserAgeAlreadyVerified=function(){return!!i.getValueFromSessionStorage(n.ageGateSessionStorageKey)},n.prototype.isUserOldEnoughToViewContent=function(t){var r=Number(i.getValueFromSessionStorage(n.ageGateSessionStorageKey));return r>=t?!0:!1},n.prototype.displayAgeGateDialogue=function(){if(this.ageGateIsDisplayed=!0,this.getLocalizedAgeGateStrings(),this.ageGateDialogue||(this.setDefaultSelectMenuContainer(),this.createAgeGateContainer()),this.populateDateDropDowns(),!!e.Environment.isIProduct){var n=r.selectFirstElement("video",this.playerContainer);n.style.visibility="hidden";this.playerContainer.style.backgroundColor="black"}},n.prototype.setDefaultSelectMenuContainer=function(){this.defaultDateSelectMenuContainer='<div class="select-menu-month c-select-menu f-border f-persist">\n        <button href="#" aria-expanded="false" class="month-button" aria-label="'+this.ageGateData.monthLabel+'">\n        '+this.ageGateData.monthLabel+'\n        <\/button>\n        <ul role="menu" class="c-menu f-scroll" aria-hidden="true">\n        <\/ul>\n    <\/div>\n    <div class="select-menu-day c-select-menu f-border f-persist">\n        <button href="#" aria-expanded="false" class="day-button" aria-label="'+this.ageGateData.dayLabel+'">\n        '+this.ageGateData.dayLabel+'\n        <\/button>\n        <ul role="menu" class="c-menu f-scroll" aria-hidden="true">\n        <\/ul>\n    <\/div>\n    <div class="select-menu-year c-select-menu f-border f-persist">\n        <button href="#" aria-expanded="false" class="year-button" aria-label="'+this.ageGateData.yearLabel+'">\n        '+this.ageGateData.yearLabel+'\n        <\/button>\n        <ul role="menu" class="c-menu f-scroll" aria-hidden="true">\n        <\/ul>\n    <\/div>'},n.prototype.getLocalizedAgeGateStrings=function(){this.ageGateData.buttonText=this.localizationHelper.getLocalizedValue(o.playerLocKeys.agegate_submit);this.ageGateData.heading=this.localizationHelper.getLocalizedValue(o.playerLocKeys.agegate_enterdate);this.ageGateData.dropDownAriaLabel=this.localizationHelper.getLocalizedValue(o.playerLocKeys.agegate_enterdate_arialabel);this.ageGateData.monthLabel=this.localizationHelper.getLocalizedValue(o.playerLocKeys.agegate_month);this.ageGateData.dayLabel=this.localizationHelper.getLocalizedValue(o.playerLocKeys.agegate_day);this.ageGateData.yearLabel=this.localizationHelper.getLocalizedValue(o.playerLocKeys.agegate_year);this.ageGateData.monthDayYearOrder=this.localizationHelper.getLocalizedValue(o.playerLocKeys.agegate_dateorder);this.ageGateData.monthAriaLabel=this.ageGateData.dropDownAriaLabel.replace("{0}",this.ageGateData.monthLabel);this.ageGateData.dayAriaLabel=this.ageGateData.dropDownAriaLabel.replace("{0}",this.ageGateData.dayLabel);this.ageGateData.yearAriaLabel=this.ageGateData.dropDownAriaLabel.replace("{0}",this.ageGateData.yearLabel)},n.prototype.setSelectMenuMonthDayYearOrder=function(){var n;try{var t="",i=this.ageGateData.monthDayYearOrder.toLowerCase().split(new RegExp("\\/|\\.|\\. |\\-"),3),r=!0;for(n=0;n<i.length;n++)i[n].indexOf("m")>-1?t+='<div class="select-menu-month c-select-menu f-border f-persist">\n                    <button href="#" aria-expanded="false" class="month-button" aria-label="'+this.ageGateData.monthAriaLabel+'">\n                    '+this.ageGateData.monthLabel+'\n                    <\/button>\n                    <ul role="menu" class="c-menu f-scroll" aria-hidden="true">\n                    <\/ul>\n                <\/div>':i[n].indexOf("d")>-1?t+='<div class="select-menu-day c-select-menu f-border f-persist">\n                    <button href="#" aria-expanded="false" class="day-button" aria-label="'+this.ageGateData.dayAriaLabel+'">\n                    '+this.ageGateData.dayLabel+'\n                    <\/button>\n                    <ul role="menu" class="c-menu f-scroll" aria-hidden="true">\n                    <\/ul>\n                <\/div>':i[n].indexOf("y")>-1?t+='<div class="select-menu-year c-select-menu f-border f-persist">\n                    <button href="#" aria-expanded="false" class="year-button" aria-label="'+this.ageGateData.yearAriaLabel+'">\n                    '+this.ageGateData.yearLabel+'\n                    <\/button>\n                    <ul role="menu" class="c-menu f-scroll" aria-hidden="true">\n                    <\/ul>\n                <\/div>':r=!1;return r?t:this.defaultDateSelectMenuContainer}catch(u){return this.defaultDateSelectMenuContainer}},n.prototype.createAgeGateContainer=function(){var t=this,s=this.setSelectMenuMonthDayYearOrder(),h='\n<div class="theme-dark c-update-dark-theme">\n    <div class="">\n        <h3 aria-hidden="true" class="c-heading-3 c-font-weight-override">'+this.ageGateData.heading+"<\/h3>\n        <fieldset>"+s+('<button name="button" class="c-button" type="submit" disabled>'+this.ageGateData.buttonText+"<\/button>\n        <\/fieldset>\n    <\/div>\n<\/div>\n"),i=document.createElement("div"),e;i.innerHTML=h;r.addClass(i,"f-age-gate-dialogue");e=r.selectFirstElement(".f-video-cc-overlay",this.playerContainer);this.playerContainer.insertBefore(i,e);this.ageGateDialogue={};this.ageGateDialogue.container=document.createElement("div");this.ageGateDialogue.container=r.selectFirstElement(".f-age-gate-dialogue",this.playerContainer);this.ageGateDialogue.button=r.selectFirstElement(".c-button",this.ageGateDialogue.container);r.addEvent(this.ageGateDialogue.button,r.eventTypes.click,this.onAgeGateButtonClick);this.ageGateDialogue.button.setAttribute(n.ariaLabel,this.localizationHelper.getLocalizedValue(o.playerLocKeys.agegate_submit));this.ageGateDialogue.monthSelectMenu=r.selectFirstElement(".select-menu-month",this.ageGateDialogue.container);this.ageGateDialogue.daySelectMenu=r.selectFirstElement(".select-menu-day",this.ageGateDialogue.container);this.ageGateDialogue.yearSelectMenu=r.selectFirstElement(".select-menu-year",this.ageGateDialogue.container);this.ageGateDialogue.monthSelectMenuList=r.selectFirstElement(".c-menu",this.ageGateDialogue.monthSelectMenu);this.ageGateDialogue.daySelectMenuList=r.selectFirstElement(".c-menu",this.ageGateDialogue.daySelectMenu);this.ageGateDialogue.yearSelectMenuList=r.selectFirstElement(".c-menu",this.ageGateDialogue.yearSelectMenu);f.ComponentFactory.create([{component:u.SelectMenu,eventToBind:"DOMContentLoaded",elements:[this.ageGateDialogue.monthSelectMenu,this.ageGateDialogue.daySelectMenu,this.ageGateDialogue.yearSelectMenu],callback:function(n){!n&&!n.length||(t.selectMenuMonth=n[0],t.selectMenuDay=n[1],t.selectMenuYear=n[2],t.selectMenuDay.subscribe({onSelectionChanged:function(n){return t.onMonthDayYearDropDownSelect(n)}}),t.selectMenuMonth.subscribe({onSelectionChanged:function(n){return t.onMonthDayYearDropDownSelect(n)}}),t.selectMenuYear.subscribe({onSelectionChanged:function(n){return t.onMonthDayYearDropDownSelect(n)}}))}}])},n.prototype.populateDateDropDowns=function(){var i,u,t,r;if(!!this.ageGateDialogue.monthSelectMenuList)for(i=void 0,i=1;i<=12;i++)t=this.createListItem("month-",i),r='<a role="menuitem" href="#" aria-selected="false" tabindex="-1">'+(i+"")+"<\/a>",t.innerHTML=r,this.ageGateDialogue.monthSelectMenuList.appendChild(t);if(!!this.ageGateDialogue.daySelectMenuList)for(u=void 0,u=1;u<=31;u++)t=this.createListItem("day-",u),r='<a role="menuitem" href="#" aria-selected="false" tabindex="-1">'+(u+"")+"<\/a>",t.innerHTML=r,this.ageGateDialogue.daySelectMenuList.appendChild(t);if(!!this.ageGateDialogue.yearSelectMenuList)for(var e=(new Date).getFullYear(),o=e-n.numberOfSelectableYears,f=void 0,f=e;f>=o;f--)t=this.createListItem("year-",f),r='<a role="menuitem" href="#" aria-selected="false" tabindex="-1">'+(f+"")+"<\/a>",t.innerHTML=r,this.ageGateDialogue.yearSelectMenuList.appendChild(t)},n.prototype.createListItem=function(n,t){var i=document.createElement("li");return i.id=n+t,r.addClass(i,"c-menu-item"),i.setAttribute("role","presentation"),i},n.prototype.onMonthDayYearDropDownSelect=function(n){var h,f,c;if(n){var e=r.selectFirstElement(".month-button",this.ageGateDialogue.monthSelectMenu),o=r.selectFirstElement(".day-button",this.ageGateDialogue.daySelectMenu),s=r.selectFirstElement(".year-button",this.ageGateDialogue.yearSelectMenu);if(e&&o&&s){var t=Number(r.getText(e)),i=Number(r.getText(o)),u=Number(r.getText(s));for(t&&e.setAttribute("aria-label",t+" "+this.ageGateData.monthLabel),i&&o.setAttribute("aria-label",i+" "+this.ageGateData.dayLabel),u&&s.setAttribute("aria-label",u+" "+this.ageGateData.yearLabel),t&&i&&u&&this.ageGateDialogue.button.removeAttribute("disabled"),i=i?i:1,t=t?t:1,u=u?u:(new Date).getFullYear(),h=new Date(u,t,0).getDate(),f=void 0,f=28;31>=f;f++)c=r.selectFirstElement("#day-"+f),f>h?r.addClass(c,"c-hide-menu-item"):r.removeClass(c,"c-hide-menu-item");i>h&&this.selectMenuDay.setSelectedItem("day-1")}}},n.ageGateSessionStorageKey="UserAge",n.xboxDotComAgeGateCookieName="maturityRatingAge",n.ariaLabel="aria-label",n.numberOfSelectableYears=110,n}();t.AgeGateHelper=s});define("interactive-triggers-helper",["require","exports","player-utility","utility","htmlExtensions","player-constants","video-shim-data-fetcher","localization-helper"],function(n,t,i,r,u,f,e,o){"use strict";var s,h,l,c;Object.defineProperty(t,"__esModule",{value:!0}),function(n){n[n.WebLink=1]="WebLink";n[n.StoreOffer=2]="StoreOffer";n[n.VideoBranch=3]="VideoBranch";n[n.Poll=4]="Poll";n[n.Graphic=5]="Graphic";n[n.CustomHtml=6]="CustomHtml"}(s=t.OverlayType||(t.OverlayType={})),function(n){n.LowerThird="lowerThird";n.UpperThird="upperThird";n.LeftVertical="leftVertical";n.RightVertical="rightVertical";n.Fullscreen="fullScreen";n.Default="default"}(h=t.OverlayTemplate||(t.OverlayTemplate={})),function(n){n.VideoBranch="VideoBranch";n.WebLink="WebLink";n.Telemetry="Telemetry"}(l=t.CustomHtmlPostMessageType||(t.CustomHtmlPostMessageType={}));c=function(){function n(n,t,i,e,o){var h=this;this.playerContainer=n;this.interactivityInfoUrl=t;this.telemetryEventCallback=o;this.streamLinkBackStack=[];this.screenManagerObjects=[];this.minimizedOverlays={};this.onScreenOverlays={};this.interactedTriggers=[];this.isEndSlateOn=!1;this.isStreamLinkBackStackPop=!1;this.isInteractivityJSONReady=!1;this.preRollDefaultDurationMs=5e3;this.onInteractivityInfoSuccess=function(n){try{h.interactivityInfo=JSON.parse(n);h.preloadContent();u.addThrottledEvent(window,u.eventTypes.resize,h.onResized);window.addEventListener("message",h.onCustomHtmlMessageReceived);h.isInteractivityJSONReady=!0}catch(t){h.isInteractivityJSONReady=!0}};this.onCustomHtmlMessageReceived=function(n){var i,r,t;if(!!n&&!!n.data&&!!n.data.type&&(i=n.data.customHtmlOverlayId,!!i&&(r=i.split("-").pop(),t=h.onScreenOverlays[r],!!r&&!!t)))switch(n.data.type){case"VideoBranch":!n.data.streamLink||h.handleClickByOverlayType(t,s.VideoBranch,n.data.streamLink);break;case"WebLink":default:!n.data.webLink||h.handleClickByOverlayType(t,s.WebLink,n.data.webLink)}};this.onInteractivityInfoFailed=function(){h.isInteractivityJSONReady=!0};this.onMinimizeClick=function(n){var t=u.getEventTargetOrSrcElement(n),e,i,r;t&&t.parentElement&&t.parentElement.parentElement&&(e=t.parentElement.id,i=e.split("-").pop(),i&&(r=h.onScreenOverlays[i],h.minimizeOverlay(r),h.telemetryEventCallback&&h.telemetryEventCallback(f.PlayerEvents.InteractiveOverlayMinimize,r)))};this.onMaximizeButtonClick=function(n){var i=u.getEventTargetOrSrcElement(n),e,r,t;i&&i.parentElement&&i.parentElement.parentElement&&(e=i.id,r=e.split("-").pop(),r&&(t=h.minimizedOverlays[r],t&&(h.removeMaximizeButton(t),delete h.minimizedOverlays[r],h.createContainerAndShowOverlay(t.onScreenOverlay.overlay,t.onScreenOverlay.trigger,!0),h.telemetryEventCallback&&h.telemetryEventCallback(f.PlayerEvents.InteractiveOverlayMinimize,t.onScreenOverlay))))};this.onOverlayClick=function(n){var t=u.getEventTargetOrSrcElement(n);if(t&&t.parentElement&&t.parentElement.parentElement){var r=t.parentElement.parentElement.id,f=r.split("-").pop(),i=h.onScreenOverlays[f];i.trigger.triggerWindowId&&h.interactedTriggers.push(i.trigger.triggerWindowId);h.handleClickByOverlayType(i)}};this.onBackButtonClick=function(){h.streamLinkBackStack.length<1||(h.streamLinkBackstackPop(),h.telemetryEventCallback&&h.telemetryEventCallback(f.PlayerEvents.InteractiveBackButtonClick))};this.onResized=function(){var s,n,i,e,o,t,u,f;if(!(Object.keys(h.onScreenOverlays).length<1)&&h.interactivityInfo){for(s=r.getDimensions(h.playerContainer),n=0,i=Object.keys(h.onScreenOverlays);n<i.length;n++)if(e=i[n],o=h.onScreenOverlays[e],r.getDimensions(h.playerContainer).width<r.Viewports.allWidths[1]){h.hideOverlay(o);return}if(h.screenManagerObjects.length>0)for(t=0,u=h.screenManagerObjects;t<u.length;t++)f=u[t],h.corePlayer.screenManagerHelper.updateElementHeight(f,h.getOverlayHeight(f.HtmlObject))}};this.onPlayerEvent=function(n){switch(n.name){case f.PlayerEvents.ContentComplete:h.onContentComplete();break;case f.PlayerEvents.Seek:if(n.data&&n.data.seekTo)h.onSeek(n.data.seekTo);break;case f.PlayerEvents.Resume:h.onPlay()}};this.corePlayer=i;this.localizationHelper=e;this.corePlayer.addPlayerEventListener(this.onPlayerEvent);this.createBackButton();n&&t&&this.requestInteractivityJSON()}return n.prototype.dispose=function(){this.hideAllOverlays();u.removeEvent(window,u.eventTypes.resize,this.onResized)},n.prototype.requestInteractivityJSON=function(){i.PlayerUtility.ajax(this.interactivityInfoUrl,this.onInteractivityInfoSuccess,this.onInteractivityInfoFailed)},n.prototype.createGraphicContainer=function(n){var t="interactive-graphic-overlay-"+n.overlay.overlayId,i;u.selectFirstElement("#"+t,this.playerContainer)||(i="<img aria-hidden='true' alt='' id='"+t+"' class='f-interactive-overlay \n                interactive-fullscreen interactive-graphic'>\n            <img>",this.appendHtmlToPlayerContainer(i,t,n));n.overlayContainer=u.selectFirstElement("#"+t,this.playerContainer)},n.prototype.createCustomHtmlContainer=function(n){var t="interactive-fullscreen",i,r;switch(n.trigger.overlayTemplate){case h.LeftVertical:t="interactive-left";break;case h.RightVertical:t="interactive-right";break;case h.UpperThird:t="interactive-upper";break;case h.LowerThird:t="interactive-lower"}i="custom-html-overlay-"+n.overlay.overlayId;r="<div aria-hidden='true' id='"+i+"' \n        class='f-interactive-overlay "+t+" f-interactive-overlay-customhtml'>\n        <iframe src='"+n.overlay.overlayData.customHtml+"' name='"+i+"' \n        style='height: 100%; width: 100%; border: none;'><\/iframe>\n        <\/div>";this.appendHtmlToPlayerContainer(r,i,n);this.createScreenManagerObject(n)},n.prototype.createBakedInOverlayContainer=function(n){var i="interactive-lower",r="f-overlay-minimize-lowerthird",t,f;switch(n.trigger.overlayTemplate){case h.LeftVertical:i="interactive-left";break;case h.RightVertical:i="interactive-right";break;case h.UpperThird:r="f-overlay-minimize-upperthird";i="interactive-upper"}t="interactive-overlay-"+n.overlay.overlayId;u.selectFirstElement("#"+t,this.playerContainer)||(f="<div aria-hidden='true' id='"+t+"' class='f-interactive-overlay "+i+"'>\n<div class='f-overlay-info'>\n    <h2 class='c-headline'><\/h2>\n    <p class='c-paragraph'><\/p>\n<\/div>\n<div class='f-overlay-link'>\n    <button class='c-action-trigger f-heavyweight'><\/button>\n<\/div>\n<button type='button' class='f-overlay-minimizeMaximize "+r+" c-glyph glyph-chevron-left'>\n<\/button>  \n<\/div>",this.appendHtmlToPlayerContainer(f,t,n));n.overlayContainer=u.selectFirstElement("#"+t,this.playerContainer);n.overlayHeadline=u.selectFirstElement("h2",n.overlayContainer);n.overlayText=u.selectFirstElement("p",n.overlayContainer);n.overlayButton=u.selectFirstElement("button",n.overlayContainer);n.minimizeButton=u.selectFirstElement(".f-overlay-minimizeMaximize",n.overlayContainer);this.createScreenManagerObject(n);u.addEvent(n.overlayButton,u.eventTypes.click,this.onOverlayClick);u.addEvent(n.minimizeButton,u.eventTypes.click,this.onMinimizeClick)},n.prototype.createOverlayContainer=function(n){switch(n.overlay.overlayType){case s.StoreOffer:case s.WebLink:case s.VideoBranch:this.createBakedInOverlayContainer(n);break;case s.Graphic:this.createGraphicContainer(n);break;case s.CustomHtml:this.createCustomHtmlContainer(n)}},n.prototype.appendHtmlToPlayerContainer=function(n,t,i){var r=document.createElement("div"),f;r.innerHTML=n;f=u.selectFirstElement(".f-video-cc-overlay",this.playerContainer);this.playerContainer.insertBefore(r.firstChild,f);i.overlayContainer=u.selectFirstElement("#"+t,this.playerContainer)},n.prototype.createScreenManagerObject=function(n){n.trigger.overlayTemplate===h.LowerThird&&(this.screenManagerObjects.push(this.corePlayer.screenManagerHelper.registerElement({HtmlObject:n.overlayContainer,Height:this.getOverlayHeight(n.overlayContainer),Id:null,IsVisible:!1,Priority:1,Transition:null})),this.screenManagerObjects[this.screenManagerObjects.length-1]==null&&this.screenManagerObjects.pop())},n.prototype.createBackButton=function(){var i,t,r;this.backButtonContainer||(i="<button type='button' aria-hidden='true' class='f-interactive-back-button c-glyph glyph-chevron-left'>\n                <\/button>",t=document.createElement("div"),t.innerHTML=i,r=u.selectFirstElement(".f-video-cc-overlay",this.playerContainer),this.playerContainer.insertBefore(t.firstChild,r),this.backButtonContainer=u.selectFirstElement(".f-interactive-back-button",this.playerContainer),this.backButtonContainer.setAttribute(n.ariaLabel,this.localizationHelper.getLocalizedValue(o.playerLocKeys.close_text)));u.addEvent(this.backButtonContainer,u.eventTypes.click,this.onBackButtonClick)},n.prototype.removeMaximizeButton=function(n){u.removeEvent(n.maximizeButton,u.eventTypes.click,this.onMaximizeButtonClick);u.removeElement(n.maximizeButton)},n.prototype.updateCurrentOverlay=function(n){this.interactivityInfo&&this.updateInteractivity(n)},n.prototype.updateOverlays=function(n){for(var t,r,o,u,h,f,l,a,b=n*1e7,i={},e=0,v=this.interactivityInfo.triggers;e<v.length;e++){if(t=v[e],t.triggerTimeTicks>b)break;t.isOverlayOn!==!0||this.userAlreadyInteractedWithTrigger(t.triggerWindowId)?delete i[t.triggerWindowId]:i[t.triggerWindowId]=t}for(r=0,o=Object.keys(this.minimizedOverlays);r<o.length;r++){var y=o[r],s=this.minimizedOverlays[y],p=i[s.onScreenOverlay.trigger.triggerWindowId]?!0:!1;p?delete i[s.onScreenOverlay.trigger.triggerWindowId]:this.hideOverlay(s.onScreenOverlay)}for(u=0,h=Object.keys(this.onScreenOverlays);u<h.length;u++){var w=h[u],c=this.onScreenOverlays[w],p=i[c.trigger.triggerWindowId]?!0:!1;p?delete i[c.trigger.triggerWindowId]:this.hideOverlay(c)}for(f=0,l=Object.keys(i);f<l.length;f++){var y=l[f],t=i[y],w=t.overlayId;t.zIndex=this.normalizeZIndex(t.zIndex);a=this.getOverlayInfo(w);!a||this.createContainerAndShowOverlay(a,t)}},n.prototype.createContainerAndShowOverlay=function(n,t,i){if(!(r.getDimensions(this.playerContainer).width<r.Viewports.allWidths[1])){var u={overlay:n,overlayContainer:null,trigger:t,hideTimer:null,showTimer:null};this.createOverlayContainer(u);this.setOverlayData(u,t.zIndex);this.showOverlay(u,i)}},n.prototype.showOverlay=function(n,t){if(n.overlayContainer){this.onScreenOverlays[n.overlay.overlayId]=n;switch(n.overlay.overlayType){case s.Graphic:n.trigger.overlayTemplate===h.Default&&(n.trigger.overlayTemplate=h.Fullscreen);break;case s.CustomHtml:case s.WebLink:case s.StoreOffer:case s.VideoBranch:default:n.trigger.overlayTemplate===h.Default&&(n.trigger.overlayTemplate=h.LowerThird);this.isContentStreamLink()||this.corePlayer.resetFocusTrap(this.findInteractivityFocusTrapStart());n.overlayContainer.setAttribute("role","alert")}clearTimeout(n.showTimer);this.displayOverlayContainer(n);var i=null;n&&n.overlay&&(i=n.overlay.overlayData);i&&i.headline&&n.overlayContainer.setAttribute("aria-label",i.headline);t||this.telemetryEventCallback&&this.telemetryEventCallback(f.PlayerEvents.InteractiveOverlayShow,n)}},n.prototype.isContentStreamLink=function(){return this.streamLinkBackStack.length>=1},n.prototype.hideAllOverlays=function(){var n,i,u,t,r,f,e;if(Object.keys(this.minimizedOverlays).length>0)for(n=0,i=Object.keys(this.minimizedOverlays);n<i.length;n++)u=i[n],this.removeMaximizeButton(this.minimizedOverlays[u]);if(!(Object.keys(this.onScreenOverlays).length<1)&&this.interactivityInfo)for(t=0,r=Object.keys(this.onScreenOverlays);t<r.length;t++)f=r[t],e=this.onScreenOverlays[f],this.hideOverlay(e)},n.prototype.hideOverlay=function(n){if(n.overlayContainer){switch(n.overlay.overlayType){case s.Graphic:case s.CustomHtml:n.trigger.overlayTemplate===h.Default&&(n.trigger.overlayTemplate=h.Fullscreen);break;case s.WebLink:case s.StoreOffer:case s.VideoBranch:default:n.trigger.overlayTemplate===h.Default&&(n.trigger.overlayTemplate=h.LowerThird)}this.removeOverlayFromScreen(n);this.telemetryEventCallback&&this.telemetryEventCallback(f.PlayerEvents.InteractiveOverlayHide,n)}},n.prototype.removeOverlayFromScreen=function(n,t){var i=this.minimizedOverlays[n.trigger.triggerWindowId];i?(this.removeMaximizeButton(i),delete this.minimizedOverlays[i.onScreenOverlay.trigger.triggerWindowId]):(this.hideOveralyContainer(n,function(){!t||t()}),delete this.onScreenOverlays[n.overlay.overlayId]);this.isContentStreamLink()||this.corePlayer.resetFocusTrap(this.findInteractivityFocusTrapStart())},n.prototype.displayOverlayContainer=function(n){var t=this,i,r;n.overlayContainer.setAttribute("aria-hidden","false");i="f-interactive-overlay-slidein";r="f-interactive-overlay-slideout";switch(n.trigger.overlayTemplate){case h.LeftVertical:case h.RightVertical:case h.UpperThird:u.addClass(n.overlayContainer,i);u.removeClass(n.overlayContainer,r);break;case h.Fullscreen:break;case h.LowerThird:default:n.showTimer=setTimeout(function(){t.corePlayer.screenManagerHelper.updateElementDisplay(t.getScreenManagerObjectByOverlayId(n.overlay.overlayId),!0)},100)}},n.prototype.hideOveralyContainer=function(n,t){var i=this;switch(n.trigger.overlayTemplate){case h.LeftVertical:case h.RightVertical:case h.UpperThird:u.addClass(n.overlayContainer,"f-interactive-overlay-slideout");u.removeClass(n.overlayContainer,"f-interactive-overlay-slidein");n.hideTimer=setTimeout(function(){n.overlayContainer.setAttribute("aria-hidden","true");n.overlayButton&&u.removeEvent(n.overlayButton,u.eventTypes.click,i.onOverlayClick);u.removeElement(n.overlayContainer);!t()||t()},500);break;case h.Fullscreen:n.overlayContainer.setAttribute("aria-hidden","true");u.removeElement(n.overlayContainer);break;case h.LowerThird:default:this.screenManagerObjects.length>0&&(this.corePlayer.screenManagerHelper.deleteElement(this.deleteScreenManagerObjectByOverlayId(n.overlay.overlayId)),n.hideTimer=setTimeout(function(){n.overlayContainer.setAttribute("aria-hidden","true");n.overlayButton&&u.removeEvent(n.overlayButton,u.eventTypes.click,i.onOverlayClick);u.removeElement(n.overlayContainer);!t()||t()},500))}},n.prototype.setOverlayData=function(n,t){if(n.overlayContainer&&n.overlay)switch(n.overlay.overlayType){case s.Graphic:this.setGraphicOverlay(n,t);break;case s.WebLink:case s.StoreOffer:case s.VideoBranch:default:this.setBakedInOverlayContainerFields(n,t)}},n.prototype.setGraphicOverlay=function(n,t){var r=n.overlay.overlayData,i;!t||u.css(n.overlayContainer,"z-index",t);i=n.overlayContainer;i.src=r.graphicUrl},n.prototype.setBakedInOverlayContainerFields=function(t,i){var r=t.overlay.overlayData;t.overlayHeadline&&u.setText(t.overlayHeadline,r.headline);t.overlayText&&u.setText(t.overlayText,r.bodyText);!i||u.css(t.overlayContainer,"z-index",i);r.imageUrl&&u.css(t.overlayContainer,"background-image","url('"+r.imageUrl+"')");t.overlayButton&&(u.setText(t.overlayButton,r.buttonText),t.overlayButton.setAttribute("aria-label",r.buttonText));t.minimizeButton&&(typeof t.trigger.isMinimizable=="undefined"||t.trigger.isMinimizable?t.minimizeButton.setAttribute(n.ariaLabel,this.localizationHelper.getLocalizedValue(o.playerLocKeys.interactivity_hide)+" "+t.overlay.overlayData.headline):t.minimizeButton.setAttribute("aria-hidden","true"))},n.prototype.getOverlayInfo=function(n){var t,i,r;if(!this.interactivityInfo||!this.interactivityInfo.overlays||!this.interactivityInfo.overlays||!this.interactivityInfo.overlays.length)return null;for(t=0,i=this.interactivityInfo.overlays;t<i.length;t++)if(r=i[t],r.overlayId===n)return r;return null},n.prototype.getScreenManagerObjectByOverlayId=function(n){var t,i,r;if(this.screenManagerObjects.length===0)return null;for(t=0,i=this.screenManagerObjects;t<i.length;t++)if(r=i[t],r.HtmlObject.id.split("-").pop()===n)return r;return null},n.prototype.deleteScreenManagerObjectByOverlayId=function(n){if(this.screenManagerObjects.length===0)return null;var i=this.getScreenManagerObjectByOverlayId(n),t=this.screenManagerObjects.splice(this.screenManagerObjects.indexOf(i),1);return t.length>0?t[0]:null},n.prototype.getOverlayHeight=function(n){var t=n.clientHeight;return t<=0&&!!n.parentElement&&(t=n.parentElement.clientHeight*.2),t},n.prototype.createMaximizeButton=function(t){var f=t.trigger.triggerWindowId,e="f-overlay-maximize-lowerthird",s,r,c,i;return t.trigger.overlayTemplate===h.UpperThird&&(e="f-overlay-maximize-upperthird"),s="<button type='button' id='"+f+"' class='f-overlay-minimizeMaximize "+e+" c-glyph glyph-chevron-left'>\n        <\/button>",r=document.createElement("div"),r.innerHTML=s,c=u.selectFirstElement(".f-video-cc-overlay",this.playerContainer),this.playerContainer.insertBefore(r.firstChild,c),i=u.selectFirstElement("#"+f,this.playerContainer),i.setAttribute(n.ariaLabel,this.localizationHelper.getLocalizedValue(o.playerLocKeys.interactivity_show)+" "+t.overlay.overlayData.headline),u.addEvent(i,u.eventTypes.click,this.onMaximizeButtonClick),i},n.prototype.minimizeOverlay=function(n){var t=this,i;n&&(i={onScreenOverlay:n},this.removeOverlayFromScreen(n,function(){i.maximizeButton=t.createMaximizeButton(n);t.corePlayer.resetFocusTrap(t.findInteractivityFocusTrapStart())}),this.minimizedOverlays[n.trigger.triggerWindowId]=i)},n.prototype.streamLinkBackstackPop=function(){var n;n=this.streamLinkBackStack.pop();!this.isContentStreamLink()&&this.backButtonContainer&&(this.backButtonContainer.setAttribute("aria-hidden","true"),this.corePlayer.resetFocusTrap(this.findInteractivityFocusTrapStart()));this.hideAllOverlays();this.isStreamLinkBackStackPop=!0;this.corePlayer.load(n.corePlayer);this.interactivityInfo=n.interactivityInfo;this.interactedTriggers=n.interactedTriggers;this.minimizedOverlays=n.minimizedOverlays;this.isInteractivityJSONReady=!0;this.corePlayer.getPlayerData().options.startTime=0;this.finalizeBackStackPop(n.paused)},n.prototype.finalizeBackStackPop=function(n){var i=this,t;!n||(t=this.corePlayer,t.playerState==="loading"||t.playerState==="init"?setTimeout(function(){i.finalizeBackStackPop(n)},50):t.pause())},n.prototype.handleClickByOverlayType=function(n,t,i){if(n){t||(t=n.overlay.overlayType);i||(i=n.overlay.overlayData);this.hideOverlay(n);switch(t){case s.VideoBranch:this.navigateToStreamLink(i);break;case s.WebLink:default:window.open(i.linkUrl,"_blank")}this.telemetryEventCallback&&this.telemetryEventCallback(f.PlayerEvents.InteractiveOverlayClick,n)}},n.prototype.setFocusOnInteractivity=function(n){!n||n.tagName==="IMG"||(n.setAttribute("tabindex","1"),setTimeout(function(){n.focus()},0))},n.prototype.findInteractivityFocusTrapStart=function(){var n,i,e,r,t,u,o,f;if(this.streamLinkBackStack.length>0)return this.backButtonContainer;for(n=0,i=Object.keys(this.minimizedOverlays);n<i.length;n++)if(e=i[n],r=this.minimizedOverlays[e].maximizeButton,r)return r;for(t=0,u=Object.keys(this.onScreenOverlays);t<u.length;t++)if(o=u[t],f=this.onScreenOverlays[o],f.overlayButton!==undefined)return f.overlayButton;return null},n.prototype.navigateToStreamLink=function(n){var i=this.corePlayer.getPlayerData(),u,f,e,t;i.options.startTime=this.corePlayer.getPlayPosition().currentTime;i.options.lazyLoad=!1;u={};r.extend(u,this.minimizedOverlays);f=[];r.extend(f,this.interactedTriggers);e={corePlayer:i,interactivityInfo:this.interactivityInfo,minimizedOverlays:u,interactedTriggers:f,paused:this.corePlayer.isPaused()};this.hideAllOverlays();this.clearOutInteractedTriggers();this.minimizedOverlays={};this.interactivityInfo=null;this.streamLinkBackStack.push(e);t={};t.options={};r.extend(t.options,i.options);t.options.startTime=n.startTime?n.startTime:0;this.fetchStreamLinkMetadataAndSwitch(t,n.videoId)},n.prototype.clearOutInteractedTriggers=function(){this.isStreamLinkBackStackPop?this.isStreamLinkBackStackPop=!1:this.interactedTriggers.length=0},n.prototype.fetchStreamLinkMetadataAndSwitch=function(n,t){var i=this,r=new e.VideoShimDataFetcher(n.options.shimServiceEnv,n.options.shimServiceUrl);r.getMetadata(t,function(t){n.metadata=t;i.isInteractivityJSONReady=!1;i.corePlayer.stop();i.corePlayer.load(n);n.metadata.interactiveTriggersEnabled&&n.metadata.interactiveTriggersUrl&&(i.interactivityInfoUrl=n.metadata.interactiveTriggersUrl,i.requestInteractivityJSON());i.backButtonContainer&&(i.backButtonContainer.setAttribute("aria-hidden","false"),i.corePlayer.resetFocusTrap(i.backButtonContainer))},function(){})},n.prototype.userAlreadyInteractedWithTrigger=function(n){for(var r,t=0,i=this.interactedTriggers;t<i.length;t++)if(r=i[t],r===n)return!0;return!1},n.prototype.displayEndSlate=function(){for(var n,i,u,f=this.interactivityInfo.showOnVideoEnd,t=0,r=f;t<r.length;t++)n=r[t],i=this.getOverlayInfo(n.overlayId),!i||(u={overlayId:n.overlayId,overlayTemplate:n.overlayTemplate,zIndex:this.normalizeZIndex(n.zIndex)},this.createContainerAndShowOverlay(i,u),this.isEndSlateOn=!0)},n.prototype.displayPreRoll=function(n){var r,i,u,t,f,e,o;try{if(!this.interactivityInfo||this.interactivityInfo.showOnVideoStart.length<1||this.corePlayer.getPlayerData().options.startTime!==0){n();return}if(r=this.interactivityInfo.showOnVideoStart,r.length<1){n();return}for(i=0,u=r;i<u.length;i++)t=u[i],f=this.getOverlayInfo(t.overlayId),!f||(e={overlayId:t.overlayId,overlayTemplate:t.overlayTemplate,zIndex:this.normalizeZIndex(t.zIndex)},this.createContainerAndShowOverlay(f,e));o=this.interactivityInfo.preRollDurationSecs?this.interactivityInfo.preRollDurationSecs*1e3:this.preRollDefaultDurationMs;setTimeout(function(){n()},o)}catch(s){n()}},n.prototype.normalizeZIndex=function(n){return isNaN(n)?1:Math.max(1,Math.min(50,n))},n.prototype.onSeek=function(n){!this.interactivityInfo||(this.isStreamLinkBackStackPop?this.isStreamLinkBackStackPop=!1:this.clearOutInteractedTriggers(),this.updateInteractivity(n))},n.prototype.updateInteractivity=function(n){n>0&&this.updateOverlays(n)},n.prototype.onPlay=function(){!this.interactivityInfo||this.isEndSlateOn&&(this.hideAllOverlays(),this.isEndSlateOn=!1)},n.prototype.onContentComplete=function(){var n=this.streamLinkBackStack.length>0;n?this.streamLinkBackstackPop():!this.interactivityInfo||this.displayEndSlate()},n.prototype.postIFrameMessage=function(n){for(var u,i,f,t=0,r=Object.keys(this.onScreenOverlays);t<r.length;t++)u=r[t],i=this.onScreenOverlays[u],!i||i.overlay.overlayType===s.CustomHtml&&(f=i.overlayContainer.firstElementChild,f.contentWindow.postMessage(n,"*"))},n.prototype.preloadContent=function(){for(var n,t=[],i=[],r=0,u=this.interactivityInfo.overlays;r<u.length;r++){n=u[r];switch(n.overlayType){case s.WebLink:case s.StoreOffer:case s.VideoBranch:!n.overlayData||!n.overlayData.imageUrl||t.push(n.overlayData.imageUrl);break;case s.Graphic:!n.overlayData||!n.overlayData.graphicUrl||t.push(n.overlayData.graphicUrl);break;case s.CustomHtml:!n.overlayData||!n.overlayData.customHtml||i.push(n.overlayData.customHtml)}}t.length>0&&this.cacheImages(t);i.length>0&&this.cacheIFrames(i)},n.prototype.cacheImages=function(n){for(var r,u,t=0,i=n;t<i.length;t++)r=i[t],u=new Image,u.src=r},n.prototype.cacheIFrames=function(){},n.ariaLabel="aria-label",n}();t.VideoPlayerInteractiveTriggersHelper=c});define("localization-helper",["require","exports","stringExtensions","player-config","player-utility"],function(n,t,i,r,u){"use strict";var f,e,o;Object.defineProperty(t,"__esModule",{value:!0});f={audio_tracks:"Audio Tracks",closecaption_off:"Off",geolocation_error:"We're sorry, this video cannot be played from your current location.",media_err_aborted:"video playback was aborted",media_err_decode:"video is not readable",media_err_network:"video failed to download",media_err_src_not_supported:"video format is not supported",media_err_unknown_error:"unknown error occurred",media_err_amp_encrypt:"The video is encrypted and we do not have the keys to decrypt it.",media_err_amp_player_mismatch:"No compatible source was found for this video.",browserunsupported:"We're sorry, but your browser does not support this video.",browserunsupported_download:"Please download a copy of this video to view on your device:",expand:"Full Screen",mute:"Mute",nullvideoerror:"We're sorry, this video cannot be played.",pause:"Pause",play:"Play",play_pause_button_tooltip:"Play and Pause Button",live_caption:"Skip ahead to live broadcast.",live_label:"LIVE",playbackerror:"We're sorry, an error has occurred when playing video ({0}).",standarderror:"We're sorry, this video can't be played.",time:"Time",more_caption:"More options",data_error:"Sorry, this video cannot be played.",seek:"Seek",unexpand:"Exit Full Screen",unmute:"Unmute",volume:"Volume",quality:"Quality",quality_hd:"HD",quality_hq:"HQ",quality_lo:"LO",quality_sd:"SD",quality_auto:"Auto",closecaption:"Closed captions",close_text:"Close",playbackspeed:"Playback speed",playbackspeed_normal:"Normal",sharing_label:"Share",sharing_facebook:"Facebook",sharing_twitter:"Twitter",sharing_linkedin:"LinkedIn",sharing_skype:"Skype",sharing_mail:"Mail",sharing_copy:"Copy link",loading_value_text:"Loading...",loading_aria_label:"Loading",descriptive_audio:"Audio description",unknown_language:"Unknown",cc_customize:"Customize",cc_text_font:"Font",cc_text_color:"Text color",cc_color_black:"Black",cc_color_blue:"Blue",cc_color_cyan:"Cyan",cc_color_green:"Green",cc_color_grey:"Grey",cc_color_magenta:"Magenta",cc_color_red:"Red",cc_color_white:"White",cc_color_yellow:"Yellow",cc_font_name_casual:"Casual",cc_font_name_cursive:"Cursive",cc_font_name_monospacedsansserif:"Monospaced Sans Serif",cc_font_name_monospacedserif:"Monospaced Serif",cc_font_name_proportionalserif:"Proportional Serif",cc_font_name_proportionalsansserif:"Proportional Sans Serif",cc_font_name_smallcapitals:"Small Capitals",cc_text_size:"Text size",cc_text_size_default:"Default",cc_text_size_extralarge:"Extra Large",cc_text_size_large:"Large",cc_text_size_maximum:"Maximum",cc_text_size_small:"Small",cc_appearance:"Appearance",cc_preset1:"Preset 1 ",cc_preset2:"Preset 2",cc_preset3:"Preset 3",cc_preset4:"Preset 4",cc_preset5:"Preset 5",cc_presettings:"Preset {0}: {1}, {2}",cc_text_background_color:"Background color",cc_text_background_opacity:"Background opacity",cc_text_opacity:"Text opacity",cc_percent_0:"0%",cc_percent_100:"100%",cc_percent_25:"25%",cc_percent_50:"50%",cc_percent_75:"75%",cc_text_edge_color:"Text edge color",cc_text_edge_style:"Text edge style",cc_text_edge_style_depressed:"Depressed",cc_text_edge_style_dropshadow:"Drop shadow",cc_text_edge_style_none:"No edge",cc_text_edge_style_raised:"Raised",cc_text_edge_style_uniform:"Uniform",cc_window_color:"Window color",cc_window_opacity:"Window opacity",cc_reset:"Reset",download_label:"Download",download_transcript:"Transcript",download_audio:"Audio",download_video:"Video",download_videoWithCC:"Video with closed captions",agegate_day:"Day",agegate_month:"Month",agegate_year:"Year",agegate_submit:"Submit",agegate_fail:"This content is not available at this time due to age restrictions.",agegate_enterdate:"Enter your date of birth",agegate_enterdate_arialabel:"Enter your {0} of birth",agegate_verifyyourage:"Content not intended for all audiences. Please verify your age.",agegate_dateorder:"m/d/yyyy",previous_menu_aria_label:"{0} menu - go back to previous menu",reactive_menu_aria_label:"{0} menu - close menu",reactive_menu_aria_label_closedcaption:"Close {0}",interactivity_show:"Show",interactivity_hide:"Hide",play_video:"Play Video",playing:"Video playing",paused:"Video paused"};t.ccCultureLocStrings={"ar-ab":"عربي","ar-xm":"عربي","ar-ma":"عربي","ar-sa":"عربي","eu-es":"Euskara","bg-bg":"Български","ca-es":"Català","zh-cn":"简体中文","zh-hk":"繁體中文","zh-tw":"繁體中文","hr-hr":"Hrvatski","cs-cz":"Čeština","da-dk":"Dansk","nl-be":"Nederlands","nl-nl":"Nederlands","en-ab":"English","en-aa":"English","en-au":"English","en-ca":"English","en-eu":"English","en-hk":"English","en-in":"English","en-id":"English","en-ie":"English","en-jm":"English","en-my":"English","en-nz":"English","en-pk":"English","en-ph":"English","en-sg":"English","en-za":"English","en-tt":"English","en-gb":"English","en-us":"English","et-ee":"Eesti","fi-fi":"Suomi","fr-ab":"Français","fr-be":"Français","fr-ca":"Français","fr-fr":"Français","fr-xf":"Français","fr-ch":"Français","gl-es":"Galego","de-de":"Deutsch","de-at":"Deutsch","de-ch":"Deutsch","el-gr":"Ελληνικά","he-il":"עברית","hi-in":"हिंदी","hu-hu":"Magyar","is-is":"Íslenska","id-id":"Bahasa Indonesia","it-it":"Italiano","ja-jp":"日本語","kk-kz":"Қазақ","ko-kr":"한국어","lv-lv":"Latviešu","lt-lt":"Lietuvių","ms-my":"Bahasa Melayu (Asia Tenggara)‎","nb-no":"Norsk (bokmål)","nn-no":"Norsk (nynorsk)","fa-ir":"فارسی","pl-pl":"Polski","pt-br":"Português (Brasil)‎","pt-pt":"Português (Portugal)‎","ro-ro":"Română","ru-ru":"Русский","sr-latn-rs":"Srpski","sk-sk":"Slovenčina","sl-si":"Slovenski","es-ar":"Español","es-cl":"Español","es-co":"Español","es-cr":"Español","es-do":"Español","es-ec":"Español","es-us":"Español","es-gt":"Español","es-hn":"Español","es-xl":"Español","es-mx":"Español","es-ni":"Español","es-pa":"Español","es-py":"Español","es-pe":"Español","es-pr":"Español","es-es":"Español","es-uy":"Español","es-ve":"Español","sv-se":"Svenska","tl-ph":"Tagalog","th-th":"ไทย","tr-tr":"Türkçe","uk-ua":"Українська","ur-pk":"اردو","vi-vn":"Tiếng Việt","sl-sl":"Slovenian"};t.ccLanguageCodes={"ar-ab":"ar","ar-xm":"ar","ar-ma":"ar","ar-sa":"ar","eu-es":"eu","bg-bg":"bg","ca-es":"ca","zh-cn":"zh","zh-hk":"zh","zh-tw":"zh","hr-hr":"hr","cs-cz":"cs","da-dk":"da","nl-be":"nl","nl-nl":"nl","en-ab":"en","en-aa":"en","en-au":"en","en-ca":"en","en-eu":"en","en-hk":"en","en-in":"en","en-id":"en","en-ie":"en","en-jm":"en","en-my":"en","en-nz":"en","en-pk":"en","en-ph":"en","en-sg":"en","en-za":"en","en-tt":"en","en-gb":"en","en-us":"en","et-ee":"et","fi-fi":"fi","fr-ab":"fr","fr-be":"fr","fr-ca":"fr","fr-fr":"fr","fr-xf":"fr","fr-ch":"fr","gl-es":"gl","de-de":"de","de-at":"de","de-ch":"de","el-gr":"el","he-il":"he","hi-in":"hi","hu-hu":"hu","is-is":"is","id-id":"id","it-it":"it","ja-jp":"ja","kk-kz":"kk","ko-kr":"ko","lv-lv":"lv","lt-lt":"lt","ms-my":"ms‎","nb-no":"nb","nn-no":"nn","fa-ir":"fa","pl-pl":"pl","pt-br":"pt‎","pt-pt":"pt‎","ro-ro":"ro","ru-ru":"ru","sr-latn-rs":"sr","sk-sk":"sk","sl-si":"sl","es-ar":"es","es-cl":"es","es-co":"es","es-cr":"es","es-do":"es","es-ec":"es","es-us":"es","es-gt":"es","es-hn":"es","es-xl":"es","es-mx":"es","es-ni":"es","es-pa":"es","es-py":"es","es-pe":"es","es-pr":"es","es-es":"es","es-uy":"es","es-ve":"es","sv-se":"sv","tl-ph":"tl","th-th":"th","tr-tr":"tr","uk-ua":"uk","ur-pk":"ur","vi-vn":"vi","sl-sl":"sl"};t.playerLocKeys={audio_tracks:"audio_tracks",closecaption_off:"closecaption_off",geolocation_error:"geolocation_error",media_err_aborted:"media_err_aborted",media_err_decode:"media_err_decode",media_err_network:"media_err_network",media_err_src_not_supported:"media_err_src_not_supported",media_err_unknown_error:"media_err_unknown_error",media_err_amp_encrypt:"media_err_amp_encrypt",media_err_amp_player_mismatch:"media_err_amp_player_mismatch",browserunsupported:"browserunsupported",browserunsupported_download:"browserunsupported_download",expand:"expand",mute:"mute",nullvideoerror:"nullvideoerror",pause:"pause",play:"play",play_video:"play_video",playing:"playing",paused:"paused",play_pause_button_tooltip:"play_pause_button_tooltip",live_caption:"live_caption",live_label:"live_label",playbackerror:"playbackerror",standarderror:"standarderror",time:"time",more_caption:"more_caption",data_error:"data_error",seek:"seek",unexpand:"unexpand",unmute:"unmute",volume:"volume",quality:"quality",quality_hd:"quality_hd",quality_hq:"quality_hq",quality_lo:"quality_lo",quality_sd:"quality_sd",quality_auto:"quality_auto",cc_customize:"cc_customize",cc_text_font:"cc_text_font",cc_text_color:"cc_text_color",cc_color_black:"cc_color_black",cc_color_blue:"cc_color_blue",cc_color_cyan:"cc_color_cyan",cc_color_green:"cc_color_green",cc_color_grey:"cc_color_grey",cc_color_magenta:"cc_color_magenta",cc_color_red:"cc_color_red",cc_color_white:"cc_color_white",cc_color_yellow:"cc_color_yellow",cc_font_name_casual:"cc_font_name_casual",cc_font_name_cursive:"cc_font_name_cursive",cc_font_name_monospacedsansserif:"cc_font_name_monospacedsansserif",cc_font_name_proportionalsansserif:"cc_font_name_proportionalsansserif",cc_font_name_monospacedserif:"cc_font_name_monospacedserif",cc_font_name_proportionalserif:"cc_font_name_proportionalserif",cc_font_name_smallcapitals:"cc_font_name_smallcapitals",cc_text_size:"cc_text_size",cc_text_size_default:"cc_text_size_default",cc_text_size_extralarge:"cc_text_size_extralarge",cc_text_size_large:"cc_text_size_large",cc_text_size_maximum:"cc_text_size_maximum",cc_text_size_small:"cc_text_size_small",cc_appearance:"cc_appearance",cc_preset1:"cc_preset1",cc_preset2:"cc_preset2",cc_preset3:"cc_preset3",cc_preset4:"cc_preset4",cc_preset5:"cc_preset5",cc_presettings:"cc_presettings",cc_text_background_color:"cc_text_background_color",cc_text_background_opacity:"cc_text_background_opacity",cc_text_opacity:"cc_text_opacity",cc_percent_0:"cc_percent_0",cc_percent_100:"cc_percent_100",cc_percent_25:"cc_percent_25",cc_percent_50:"cc_percent_50",cc_percent_75:"cc_percent_75",cc_text_edge_color:"cc_text_edge_color",cc_text_edge_style:"cc_text_edge_style",cc_text_edge_style_depressed:"cc_text_edge_style_depressed",cc_text_edge_style_dropshadow:"cc_text_edge_style_dropshadow",cc_text_edge_style_none:"cc_text_edge_style_none",cc_text_edge_style_raised:"cc_text_edge_style_raised",cc_text_edge_style_uniform:"cc_text_edge_style_uniform",cc_window_color:"cc_window_color",cc_window_opacity:"cc_window_opacity",cc_reset:"cc_reset",closecaption:"closecaption",close_text:"close_text",playbackspeed:"playbackspeed",playbackspeed_normal:"playbackspeed_normal",sharing_label:"sharing_label",sharing_facebook:"sharing_facebook",sharing_twitter:"sharing_twitter",sharing_linkedin:"sharing_linkedin",sharing_skype:"sharing_skype",sharing_mail:"sharing_mail",sharing_copy:"sharing_copy",loading_value_text:"loading_value_text",loading_aria_label:"loading_aria_label",descriptive_audio:"descriptive_audio",unknown_language:"unknown_language",download_label:"download_label",download_transcript:"download_transcript",download_audio:"download_audio",download_video:"download_video",download_videoWithCC:"download_videoWithCC",agegate_day:"agegate_day",agegate_month:"agegate_month",agegate_year:"agegate_year",agegate_enterdate:"agegate_enterdate",agegate_enterdate_arialabel:"agegate_enterdate_arialabel",agegate_fail:"agegate_fail",agegate_verifyyourage:"agegate_verifyyourage",agegate_submit:"agegate_submit",agegate_dateorder:"agegate_dateorder",previous_menu_aria_label:"previous_menu_aria_label",reactive_menu_aria_label:"reactive_menu_aria_label",reactive_menu_aria_label_closedcaption:"reactive_menu_aria_label_closedcaption",interactivity_show:"interactivity_show",interactivity_hide:"interactivity_hide"};e={transcript:"download_transcript",audio:"download_audio",video:"download_video",videoWithCC:"download_videoWithCC"};o=function(){function n(n,t,i,r){this.market=n;this.resHost=t;this.resHash=i;this.onErrorCallback=r}return n.prototype.getCorrectResourceHost=function(){return this.resHost||(r.PlayerConfig.resourceHost.indexOf("%playerResourceHost")===-1?r.PlayerConfig.resourceHost:r.PlayerConfig.defaultResourceHost)},n.prototype.getResourceHash=function(){return this.resHash||(r.PlayerConfig.resourceHash.indexOf("%playerResourceHash")===-1?r.PlayerConfig.resourceHash:"latest")},n.prototype.queueRequest=function(t){var f=this,e;if(n.requestQueue[this.market]){n.requestQueue[this.market].push(t);return}n.requestQueue[this.market]=[t];e=i.format(r.PlayerConfig.resourcesUrl,this.getCorrectResourceHost(),this.market,this.getResourceHash());u.PlayerUtility.ajax(e,function(t){if(t&&t.length)try{n.resources[f.market]=JSON.parse(t)}catch(i){if(f.onErrorCallback)f.onErrorCallback({errorType:"oneplayer.error.LocalizationHelper.queueRequest.parse",errorDesc:"Parsing error "+e})}else if(f.onErrorCallback)f.onErrorCallback({errorType:"oneplayer.error.LocalizationHelper.queueRequest.ajaxcall",errorDesc:"No result for file: "+e});f.completeRequest()},this.completeRequest)},n.prototype.completeRequest=function(){var t,i,r;if(n.requestQueue[this.market]){for(t=0,i=n.requestQueue[this.market];t<i.length;t++)r=i[t],this.doCallback(r);n.requestQueue[this.market]=null}},n.prototype.doCallback=function(n){n&&typeof n=="function"&&n()},n.prototype.loadResources=function(t){if(!this.market||n.resources[this.market]){this.doCallback(t);return}this.queueRequest(t)},n.prototype.getLocalizedValue=function(t){return t?n.resources[this.market]&&n.resources[this.market][t]||f[t]||"":""},n.prototype.getLanguageNameFromLocale=function(n){return t.ccCultureLocStrings[n]||this.getLocalizedValue(t.playerLocKeys.unknown_language)},n.prototype.getLanguageCodeFromLocale=function(n){return t.ccLanguageCodes[n]||null},n.prototype.getLocalizedMediaTypeName=function(t){if(!t||!e[t])return"";var i=e[t];return n.resources[this.market]&&n.resources[this.market][i]||f[i]||""},n.resources={},n.requestQueue={},n}();t.LocalizationHelper=o});define("screen-manager-helper",["require","exports"],function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function n(){this.screenElements=[];this.nextScreenElementId=0}return n.prototype.registerElement=function(n){return n.HtmlObject==null||n.Priority==null||n.Height==null?null:(n.Transition==null&&(n.Transition="bottom 0.5s ease-in"),n.Height<=0&&(n.Height=n.HtmlObject.clientHeight),n.Id=this.nextScreenElementId,this.nextScreenElementId++,n.HtmlObject.style.bottom="-"+n.Height+"px",n.HtmlObject.style.transition=n.Transition,this.screenElements.push(n),this.sortScreenElements(),n)},n.prototype.updateElementDisplay=function(n,t){for(var i,r=0,f=!1,u=this.screenElements.length-1;u>=0;u--)i=this.screenElements[u],i.Id===n.Id&&i.IsVisible!==t?(i.IsVisible=t,f=!0,i.IsVisible?(i.HtmlObject.style.bottom=r+"px",r+=i.Height):i.HtmlObject.style.bottom="-"+n.Height+"px"):i.IsVisible&&(f&&(i.HtmlObject.style.bottom=r+"px"),r+=i.Height)},n.prototype.updateElementHeight=function(n,t){for(var i,r=0,f=!1,u=this.screenElements.length-1;u>=0;u--)i=this.screenElements[u],i.Id===n.Id&&i.Height!==t?(i.Height=t,f=!0,i.IsVisible&&(i.HtmlObject.style.bottom=r+"px",r+=i.Height)):i.IsVisible&&(f&&(i.HtmlObject.style.bottom=r+"px"),r+=i.Height)},n.prototype.deleteElement=function(n){var i,t;for(this.updateElementDisplay(n,!1),i=-1,t=0;t<this.screenElements.length;t++)if(this.screenElements[t].Id===n.Id){i=t;break}this.screenElements.splice(i,1)},n.prototype.sortScreenElements=function(){this.screenElements.sort(function(n,t){return n.Priority<t.Priority?-1:n.Priority>t.Priority?1:0})},n}();t.ScreenManagerHelper=i});define("sharing-helper",["require","exports","htmlExtensions","localization-helper","player-constants"],function(n,t,i,r,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var f={"zh-cn":[u.shareTypes.facebook,u.shareTypes.twitter,u.shareTypes.linkedin,u.shareTypes.skype]},e=function(){function n(){}return n.getCurrentPageUrl=function(){return window.location.href.replace("&jsapi=true","")},n.tryCopyTextToClipboard=function(n){var u,t,r;if(window.clipboardData)window.clipboardData.setData("text",n);else{u=0;t=document.createElement("textarea");t.value=n;r=i.selectFirstElement("body");u=r.scrollTop;r.appendChild(t);t.select();try{document.execCommand("copy")}catch(f){}t.remove();r.scrollTop=u}},n.getShareOptionsData=function(t,i,e){var s,h,c,l,o;if(!i||!i.share||!i.shareOptions||!t)return null;for(s=[],h=encodeURIComponent(e||n.getCurrentPageUrl()),c=0,l=i.shareOptions;c<l.length;c++)if(o=l[c],o=o.toLowerCase(),!i.market||!f[i.market]||!(f[i.market].indexOf(o)>=0))switch(o){case u.shareTypes.facebook:s.push({url:"//www.facebook.com/share.php?u="+h,id:o,label:t.getLocalizedValue(r.playerLocKeys.sharing_facebook),image:"data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxzdHlsZT4uc3Qwe2Rpc3BsYXk6bm9uZTt9IC5zdDF7ZGlzcGxheTppbmxpbmU7fSAuc3Qye2ZpbGw6bm9uZTt9IC5zdDN7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxnIGlkPSJSZXN0XzNfIiBjbGFzcz0ic3QwIj48ZyBpZD0iVHdpdHRlcl8zXyIgY2xhc3M9InN0MSI+PHBhdGggY2xhc3M9InN0MiIgZD0iTTAgMGgzMnYzMkgweiIvPjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0yOC40IDguNmMtLjkuNC0xLjkuNy0yLjkuOCAxLS42IDEuOC0xLjYgMi4yLTIuOC0xIC42LTIuMSAxLTMuMiAxLjItLjktMS0yLjItMS42LTMuNy0xLjYtMi44IDAtNSAyLjMtNSA1IDAgLjQgMCAuOC4xIDEuMi00LjItLjItNy45LTIuMi0xMC40LTUuMy0uNC44LS43IDEuNy0uNyAyLjYgMCAxLjggMSAzLjMgMi4zIDQuMi0uOCAwLTIuMi0uMy0yLjItLjZ2LjFjMCAyLjQgMS42IDQuNSAzLjkgNS0uNC4xLS45LjItMS40LjItLjMgMC0uNyAwLTEtLjEuNiAyIDIuNSAzLjUgNC43IDMuNS0xLjUgMS4yLTMuNyAyLTYuMSAyLS40IDAtLjggMC0xLjItLjEgMi4yIDEuNCA0LjkgMi4zIDcuNyAyLjMgOS4zIDAgMTQuNC03LjcgMTQuNC0xNC40di0uN2MxLS42IDEuOC0xLjUgMi41LTIuNXoiLz48L2c+PC9nPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0wIDBoMzJ2MzJIMHoiIGlkPSJGYWNlYm9va183XyIvPjxwYXRoIGlkPSJXaGl0ZV8yXyIgY2xhc3M9InN0MyIgZD0iTTMwLjIgMEgxLjhDLjggMCAwIC44IDAgMS44djI4LjVjMCAxIC44IDEuOCAxLjggMS44aDE1LjNWMTkuNmgtNC4ydi00LjhoNC4ydi0zLjZjMC00LjEgMi41LTYuNCA2LjItNi40IDEuOCAwIDMuMy4yIDMuNy4ydjQuM2gtMi42Yy0yIDAtMi40IDEtMi40IDIuNHYzLjFoNC44bC0uNiA0LjhIMjJWMzJoOC4yYzEgMCAxLjgtLjggMS44LTEuOFYxLjhjMC0xLS44LTEuOC0xLjgtMS44eiIvPjwvc3ZnPg=="});break;case u.shareTypes.twitter:s.push({url:"//twitter.com/share?url="+h+"&text=",id:o,label:t.getLocalizedValue(r.playerLocKeys.sharing_twitter),image:"data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxzdHlsZT4uc3Qwe2ZpbGw6I0ZGRkZGRjt9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzIgNi4xYy0xLjIuNS0yLjUuOS0zLjggMSAxLjMtLjggMi4zLTIuMSAyLjktMy42LTEuMy44LTIuNyAxLjMtNC4yIDEuNkMyNS44IDMuOCAyNC4xIDMgMjIuMSAzYy0zLjYgMC02LjUgMy02LjUgNi41IDAgLjUgMCAxIC4xIDEuNi01LjQtLjMtMTAuMi0yLjktMTMuNS02LjktLjUgMS0uOSAyLjItLjkgMy40IDAgMi4zIDEuMyA0LjMgMyA1LjUtMSAwLTIuOS0uNC0yLjktLjh2LjFjMCAzLjEgMi4xIDUuOSA1LjEgNi41LS41LjEtMS4yLjItMS44LjItLjQgMC0uOSAwLTEuMy0uMS44IDIuNiAzLjMgNC42IDYuMSA0LjYtMiAxLjYtNC44IDIuNi03LjkgMi42LS41IDAtMSAwLTEuNi0uMSAyLjkgMS44IDYuNCAzIDEwIDMgMTIuMSAwIDE4LjctMTAgMTguNy0xOC43di0uOWMxLjMtLjkgMi40LTIuMSAzLjMtMy40eiIvPjwvc3ZnPg=="});break;case u.shareTypes.skype:s.push({url:"//web.skype.com/share?url="+h+"&amp;lang="+i.market,id:o,label:t.getLocalizedValue(r.playerLocKeys.sharing_skype),image:"data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxzdHlsZT4uc3Qwe2Rpc3BsYXk6bm9uZTt9IC5zdDF7ZGlzcGxheTppbmxpbmU7fSAuc3Qye2ZpbGw6bm9uZTt9IC5zdDN7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxnIGlkPSJMYXllcl8xXzFfIiBjbGFzcz0ic3QwIj48ZyBpZD0iUmVzdF8zXyIgY2xhc3M9InN0MSI+PGcgaWQ9IlR3aXR0ZXJfM18iPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0wIDBoMzJ2MzJIMHoiLz48cGF0aCBjbGFzcz0ic3QzIiBkPSJNMjguNCA4LjZjLS45LjQtMS45LjctMi45LjggMS0uNiAxLjgtMS42IDIuMi0yLjgtMSAuNi0yLjEgMS0zLjIgMS4yLS45LTEtMi4yLTEuNi0zLjctMS42LTIuOCAwLTUgMi4zLTUgNSAwIC40IDAgLjguMSAxLjItNC4yLS4yLTcuOS0yLjItMTAuNC01LjMtLjQuOC0uNyAxLjctLjcgMi42IDAgMS44IDEgMy4zIDIuMyA0LjItLjggMC0yLjItLjMtMi4yLS42di4xYzAgMi40IDEuNiA0LjUgMy45IDUtLjQuMS0uOS4yLTEuNC4yLS4zIDAtLjcgMC0xLS4xLjYgMiAyLjUgMy41IDQuNyAzLjUtMS41IDEuMi0zLjcgMi02LjEgMi0uNCAwLS44IDAtMS4yLS4xIDIuMiAxLjQgNC45IDIuMyA3LjcgMi4zIDkuMyAwIDE0LjQtNy43IDE0LjQtMTQuNHYtLjdjMS0uNiAxLjgtMS41IDIuNS0yLjV6Ii8+PC9nPjwvZz48ZyBpZD0iRmFjZWJvb2tfN18iIGNsYXNzPSJzdDEiPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0wIDBoMzJ2MzJIMHoiLz48cGF0aCBpZD0iZl82XyIgY2xhc3M9InN0MyIgZD0iTTE4IDI2di05aDIuNmwuNS00SDE4di0xLjljMC0xLS4yLTIuMSAxLjMtMi4xSDIxVjYuMVMxOS43IDYgMTguNCA2QzE1LjcgNiAxNCA3LjcgMTQgMTAuN1YxM2gtM3Y0aDN2OWg0eiIvPjwvZz48L2c+PHBhdGggY2xhc3M9InN0MyIgZD0iTTMwLjkgMTguNmMuMS0uOC4xLTEuOC4xLTIuNiAwLTguMy02LjctMTUtMTUtMTUtMSAwLTEuOCAwLTIuNi4yQzEyLjIuMyAxMC42IDAgOSAwIDQgMCAwIDQgMCA5YzAgMS42LjUgMy4yIDEuMSA0LjUtLjEuNy0uMSAxLjctLjEgMi41IDAgOC4zIDYuNyAxNSAxNSAxNSAxIDAgMS44IDAgMi42LS4yIDEuMy44IDIuOSAxLjEgNC41IDEuMSA1IDAgOS00IDktOS0uMS0xLjYtLjQtMy4xLTEuMi00LjN6bS0xNC43IDYuNWMtNS4xIDAtNy41LTIuNi03LjUtNC41IDAtMSAuOC0xLjYgMS44LTEuNiAyLjIgMCAxLjYgMy4yIDUuOCAzLjIgMi4xIDAgMy40LTEuMyAzLjQtMi40IDAtLjYtLjUtMS40LTEuOC0xLjhsLTQuOC0xYy0zLjctMS00LjMtMy00LjMtNC44IDAtMy44IDMuNS01LjMgNy01LjMgMy4yIDAgNi45IDEuOCA2LjkgNC4yIDAgMS0uOCAxLjYtMS44IDEuNi0xLjkgMC0xLjYtMi42LTUuMy0yLjYtMS45IDAtMi45LjgtMi45IDIuMXMxLjQgMS42IDIuNyAxLjlsMy40LjhjMy43LjggNC42IDMgNC42IDUuMS4xIDIuNy0yLjQgNS4xLTcuMiA1LjF6Ii8+PC9zdmc+"});break;case u.shareTypes.linkedin:s.push({url:"//www.linkedin.com/shareArticle?mini=true&url="+h+"&title=&summary=&source=",id:o,label:t.getLocalizedValue(r.playerLocKeys.sharing_linkedin),image:"data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxzdHlsZT4uc3Qwe2Rpc3BsYXk6bm9uZTt9IC5zdDF7ZGlzcGxheTppbmxpbmU7fSAuc3Qye2ZpbGw6bm9uZTt9IC5zdDN7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxnIGlkPSJMYXllcl8xXzFfIiBjbGFzcz0ic3QwIj48ZyBpZD0iUmVzdF8zXyIgY2xhc3M9InN0MSI+PGcgaWQ9IlR3aXR0ZXJfM18iPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0wIDBoMzJ2MzJIMHoiLz48cGF0aCBjbGFzcz0ic3QzIiBkPSJNMjguNCA4LjZjLS45LjQtMS45LjctMi45LjggMS0uNiAxLjgtMS42IDIuMi0yLjgtMSAuNi0yLjEgMS0zLjIgMS4yLS45LTEtMi4yLTEuNi0zLjctMS42LTIuOCAwLTUgMi4zLTUgNSAwIC40IDAgLjguMSAxLjItNC4yLS4yLTcuOS0yLjItMTAuNC01LjMtLjQuOC0uNyAxLjctLjcgMi42IDAgMS44IDEgMy4zIDIuMyA0LjItLjggMC0yLjItLjMtMi4yLS42di4xYzAgMi40IDEuNiA0LjUgMy45IDUtLjQuMS0uOS4yLTEuNC4yLS4zIDAtLjcgMC0xLS4xLjYgMiAyLjUgMy41IDQuNyAzLjUtMS41IDEuMi0zLjcgMi02LjEgMi0uNCAwLS44IDAtMS4yLS4xIDIuMiAxLjQgNC45IDIuMyA3LjcgMi4zIDkuMyAwIDE0LjQtNy43IDE0LjQtMTQuNHYtLjdjMS0uNiAxLjgtMS41IDIuNS0yLjV6Ii8+PC9nPjwvZz48ZyBpZD0iRmFjZWJvb2tfN18iIGNsYXNzPSJzdDEiPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0wIDBoMzJ2MzJIMHoiLz48cGF0aCBpZD0iZl82XyIgY2xhc3M9InN0MyIgZD0iTTE4IDI2di05aDIuNmwuNS00SDE4di0xLjljMC0xLS4yLTIuMSAxLjMtMi4xSDIxVjYuMVMxOS43IDYgMTguNCA2QzE1LjcgNiAxNCA3LjcgMTQgMTAuN1YxM2gtM3Y0aDN2OWg0eiIvPjwvZz48L2c+PGcgaWQ9IkxheWVyXzMiIGNsYXNzPSJzdDAiPjxnIGlkPSJTa3lwZV83XyIgY2xhc3M9InN0MSI+PHBhdGggY2xhc3M9InN0MiIgZD0iTTAgMGgzMnYzMkgweiIvPjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0yNS4yIDE3LjZjLjEtLjUuMS0xLjEuMS0xLjYgMC01LjItNC4yLTkuNC05LjQtOS40LS42IDAtMS4xIDAtMS42LjEtLjgtLjUtMS44LS43LTIuOC0uNy0zLjEgMC01LjYgMi41LTUuNiA1LjYgMCAxIC4zIDIgLjcgMi44LS4xLjUtLjEgMS4xLS4xIDEuNiAwIDUuMiA0LjIgOS40IDkuNCA5LjQuNiAwIDEuMSAwIDEuNi0uMS44LjUgMS44LjcgMi44LjcgMy4xIDAgNS42LTIuNSA1LjYtNS42IDAtMS4xLS4yLTItLjctMi44ek0xNiAyMS43Yy0zLjIgMC00LjctMS42LTQuNy0yLjggMC0uNi41LTEgMS4xLTEgMS40IDAgMSAyIDMuNiAyIDEuMyAwIDIuMS0uOCAyLjEtMS41IDAtLjQtLjMtLjktMS4xLTEuMWwtMi45LS43Yy0yLjMtLjYtMi43LTEuOS0yLjctMyAwLTIuNCAyLjItMy4zIDQuNC0zLjMgMiAwIDQuMyAxLjEgNC4zIDIuNiAwIC42LS41IDEtMS4xIDEtMS4yIDAtMS0xLjYtMy4zLTEuNi0xLjIgMC0xLjguNS0xLjggMS4zcy45IDEgMS43IDEuMmwyLjEuNWMyLjMuNSAyLjkgMS45IDIuOSAzLjIgMCAxLjctMS42IDMuMi00LjYgMy4yeiIvPjwvZz48L2c+PHBhdGggY2xhc3M9InN0MyIgZD0iTTI5LjYgMEgyLjRDMS4xIDAgMCAxIDAgMi4zdjI3LjRDMCAzMSAxLjEgMzIgMi40IDMyaDI3LjNjMS4zIDAgMi40LTEgMi40LTIuM1YyLjNDMzIgMSAzMC45IDAgMjkuNiAwek05LjUgMjcuM0g0LjdWMTJoNC43djE1LjN6TTcuMSA5LjljLTEuNSAwLTIuOC0xLjItMi44LTIuOCAwLTEuNSAxLjItMi44IDIuOC0yLjggMS41IDAgMi44IDEuMiAyLjggMi44IDAgMS42LTEuMyAyLjgtMi44IDIuOHptMjAuMiAxNy40aC00Ljd2LTcuNGMwLTEuOCAwLTQtMi41LTRzLTIuOCAxLjktMi44IDMuOXY3LjZoLTQuN1YxMkgxN3YyLjFoLjFjLjYtMS4yIDIuMi0yLjUgNC41LTIuNSA0LjggMCA1LjcgMy4yIDUuNyA3LjN2OC40eiIvPjwvc3ZnPg=="});break;case u.shareTypes.mail:s.push({url:"mailto:?subject=Check out this great video&body="+h,id:o,label:t.getLocalizedValue(r.playerLocKeys.sharing_mail),glyph:"glyph-mail"});break;case u.shareTypes.copy:s.push({url:h,id:o,label:t.getLocalizedValue(r.playerLocKeys.sharing_copy),glyph:"glyph-copy"})}return s},n}();t.SharingHelper=e});define("inview-helper",["require","exports","htmlExtensions","utility","core-player"],function(n,t,i,r,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.DocumentVisibility={msHidden:"msvisibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",hidden:"visibilitychange"};var f=function(){function n(){var i=this,r;this.isAnyPlayerPlaying=!1;this.defaultInViewWidthFraction=.5;this.defaultInViewHeightFraction=.5;this.onDocumentVisibilityChanged=function(){n.isDocumentVisible()?i.triggerInViewPlay(!1):i.isAnyPlayerPlaying&&n.currentPlayer?n.currentPlayer.hasUserInteracted()&&n.currentPlayer.hasUserIntiatedPause()?n.currentPlayer.pause():i.clearCurrentPlayer():i.triggerInViewPlay(!1)};this.onInViewPlayHandler=function(){setTimeout(i.triggerInViewPlay(!1),500)};n.players=[];n.currentPlayer=null;for(r in t.DocumentVisibility)if(r in document){n.hidden=r;n.visibilityChange=t.DocumentVisibility[r];break}this.bindInViewEvents()}return n.Instance=function(){return(this._instance===null||this._instance===undefined)&&(this._instance=new n),this._instance},n.prototype.clearCurrentPlayer=function(){n.currentPlayer&&n.currentPlayer.pause();n.currentPlayer=null;this.isAnyPlayerPlaying=!1},n.prototype.setCurrentPlayer=function(t){t&&n.currentPlayer!==t&&(n.currentPlayer=t,this.isAnyPlayerPlaying=!0)},n.prototype.insertByPosition=function(t){var u=this.getPlayerPosition(t.getPlayerContainer()),i,r;if(!u){n.players.push(t);return}for(i=0;i<n.players.length;){if(n.players[i].getPlayerId()===t.getPlayerId())return;if(r=this.getPlayerPosition(n.players[i].getPlayerContainer()),r&&u.top<r.top)break;i++}n.players.splice(i,0,t)},n.prototype.registerPlayer=function(t){t&&(this.insertByPosition(t),n.currentPlayer||this.triggerInViewPlay(!0))},n.prototype.disposePlayer=function(t){if(t){n.currentPlayer===t&&this.clearCurrentPlayer();var i=n.players.indexOf(t);i>=0&&n.players.splice(i,1);n.players.length===0&&this.dispose()}},n.prototype.dispose=function(){n.players=[];n.currentPlayer=null},n.isDocumentVisible=function(){var n=document[this.hidden];return!n},n.prototype.triggerInViewPlay=function(t){var f,s,e,i,o,r;if(n.isDocumentVisible()&&(f=!1,n.currentPlayer&&this.isAnyPlayerPlaying&&(f=this.isPlayerInView(n.currentPlayer),f||(n.currentPlayer.hasUserInteracted()&&n.currentPlayer.hasUserIntiatedPause()?n.currentPlayer.pause():this.clearCurrentPlayer())),!this.isAnyPlayerPlaying||!n.currentPlayer||!(n.currentPlayer.hasUserInteracted()||f))&&(s=!1,n.players&&n.players.length))for(e=0;e<n.players.length;e++)if(i=n.players[e],n.currentPlayer!==i)if(!t&&i.hasUserInteracted()&&i.hasUserIntiatedPause())i.hasUserInteracted()&&i.hasUserIntiatedPause()&&this.handledUserInteractedPlay(i);else if(i.hasUserInteracted()&&i.hasUserIntiatedPause())this.handledUserInteractedPlay(i);else{if(o=this.isPlayerInView(i),r=i.getCurrentPlayState(),!o&&r===u.PlayerStates.Playing){i.pause();this.clearCurrentPlayer();break}if(o&&(i.isPaused()||r===u.PlayerStates.Paused)&&r!==u.PlayerStates.Ended){i.play();this.setCurrentPlayer(i);s=!0;break}if(o&&r===u.PlayerStates.Playing){this.setCurrentPlayer(i);break}}},n.prototype.handledUserInteractedPlay=function(n){if(n){var t=this.isPlayerInView(n);t||n.getCurrentPlayState()!==u.PlayerStates.Playing||(n.pause(),this.clearCurrentPlayer())}},n.prototype.isPlayerInView=function(n){var i=r.getWindowWidth(),u=r.getWindowHeight(),t,f,e,o,s;return!i||!u||i<=0||u<=0?!1:(t=this.getPlayerPosition(n.getPlayerContainer()),!t||!t.width||!t.height)?!1:(f=this.defaultInViewWidthFraction,e=this.defaultInViewHeightFraction,n.getPlayerData().options&&(n.getPlayerData().options.inViewWidthFraction&&(f=n.getPlayerData().options.inViewWidthFraction),n.getPlayerData().options.inViewHeightFraction&&(e=n.getPlayerData().options.inViewHeightFraction)),o=t.width*Math.abs(f),s=t.height*Math.abs(e),this.isInView(i,u,t,o,s))},n.prototype.isInView=function(n,t,i,r,u){var f=i.bottom<0||i.top>t?0:Math.min(t,i.bottom)-Math.max(i.top,0),e=i.right<0||i.left>n?0:Math.min(n,i.right)-Math.max(0,i.left);return f&&f>=u&&e&&e>=r},n.prototype.listenForInviewThresholdChanges=function(n,t,r){if(n&&t&&!(t<0)&&!(t>1)){this.inviewChange={enter:!0,exit:!1};this.inviewContainer=n;this.inviewThreshold=t;this.inviewCallback=r;var u=this;i.addEvents(window,"scroll",function(){u.checkInviewThreshold()})}},n.prototype.checkInviewThreshold=function(){this.inviewChange.enter===!0?this.inviewVerticalThreshold()&&this.inviewHorizontalThreshold()||(this.inviewChange.enter=!1,this.inviewChange.exit=!0,this.inviewCallback("InviewExit")):this.inviewChange.exit===!0&&this.inviewVerticalThreshold()&&this.inviewHorizontalThreshold()&&(this.inviewChange.enter=!0,this.inviewChange.exit=!1,this.inviewCallback("InviewEnter"))},n.prototype.inviewVerticalThreshold=function(){var t=r.getWindowHeight(),n=this.getPlayerPosition(this.inviewContainer),u=n.top<0?n.top*-1:n.top,f=n.bottom<0?n.bottom*-1:n.bottom,i=this.inviewThreshold*n.height;return!n||!n.height?!1:n.bottom<0||n.top>t?!1:n.top<0&&u<i||n.bottom>t&&f-t<i||n.top>=0&&n.bottom<=t?!0:!1},n.prototype.inviewHorizontalThreshold=function(){var t=r.getWindowWidth(),n=this.getPlayerPosition(this.inviewContainer),u=n.left<0?n.left*-1:n.left,f=n.right<0?n.right*-1:n.right,i=this.inviewThreshold*n.width;return!n||!n.width?!1:n.right<0||n.left>t?!1:n.left<0&&u<i||n.right>=t&&f-t<i||n.left>=0&&n.right<=t?!0:!1},n.prototype.getPlayerPosition=function(n){if(!n||n.childElementCount===0)return null;var i=n.firstElementChild,t=i.getBoundingClientRect();return!t||!t.width||!t.height?null:t},n.prototype.bindInViewEvents=function(){i.addEvents(document,n.visibilityChange,this.onDocumentVisibilityChanged);i.addEvents(window,"scroll",this.onInViewPlayHandler);i.addEvents(window,"resize",this.onInViewPlayHandler)},n.hidden="hidden",n.visibilityChange="visibilitychange",n}();t.InviewManager=f});define("core-player",["require","exports","video-controls","video-closed-captions","video-closed-captions-settings","utility","htmlExtensions","stringExtensions","player-data-interfaces","player-options","html5-video-wrapper","amp-wrapper","has-video-wrapper","hls-video-wrapper","native-video-wrapper","environment","stopwatch","player-utility","player-constants","jsll-reporter","localization-helper","player-config","sharing-helper","player-constants","interactive-triggers-helper","screen-manager-helper","age-gate-helper","inview-helper","video-shim-data-fetcher","context-menu"],function(n,t,i,r,u,f,e,o,s,h,c,l,a,v,y,p,w,b,k,d,g,nt,tt,it,rt,ut,ft,et,ot,st){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PlayerStates={Init:"init",PlayerLoaded:"playerLoaded",Loading:"loading",Ready:"ready",Playing:"playing",Paused:"paused",Buffering:"buffering",Seeking:"seeking",Ended:"ended",Error:"error",Stopped:"stopped"};var ht={AudioTracks:"audio-tracks",ClosedCaption:"close-caption",ClosedCaptionSettings:"cc-settings",PlaybackSpeed:"playback-speed",Quality:"quality",Share:"share",Download:"download"},ct={PlayPause:"play-pause",MuteUnMute:"mute-unMute"},lt=[s.MediaQuality.HD,s.MediaQuality.HQ,s.MediaQuality.SD,s.MediaQuality.LO],at=function(){function n(i,r){var u=this;(this.videoComponent=i,this.videoElementIsFocus=!1,this.canPlay=!1,this.isFallbackVideo=!1,this.playerData={},this.wrapperLoadCalled=!1,this.errorMessageDisplayed=!1,this.isInFullscreen=!1,this.isAudioTracksDoneSwitching=!0,this.videoMetadata=null,this.playerOptions=null,this.isBuffering=!1,this.isWindowClosing=!1,this.isFirstTimePlayed=!0,this.showcontrolFirstTime=!0,this.isVideoMuted=!1,this.commonPlayerImpressionReported=!1,this.areMediaEventsBound=!1,this.areControlsInitialized=!1,this.areControlsVisible=!1,this.seekFrom=null,this.volumeStart=null,this.playerTechnology=null,this.nextCheckpoint=null,this.stopwatchBuffering=new w.Stopwatch,this.stopwatchLoading=new w.Stopwatch,this.stopwatchPlaying=new w.Stopwatch,this.currentVideoStopwatchPlaying=new w.Stopwatch,this.firstByteTimer=null,this.lastVolume=nt.PlayerConfig.defaultVolume,this.currentVideoFile=null,this.reporters=[],this.playOnDataLoad=!1,this.startTimeOnDataLoad=0,this.locReady=!1,this.playerId=null,this.playTriggered=!1,this.playPauseTrigger=!1,this.hasProgressive=!1,this.hasAdaptive=!1,this.useAdaptive=!1,this.hasHLS=!1,this.hasInteractivity=!1,this.isVideoPlayerSupported=!0,this.hasDataError=!1,this.dataErrorShown=!1,this.playerEventCallbacks=[],this.isContentStartReported=!1,this.showEndImage=!1,this.wasUserInteracted=!1,this.wasUserIntiatedPause=!1,this.timeRemainingCheckpointReached=!1,this.inviewManager=null,this.registedInviewManagerAlready=!1,this.showingPosterImage=!1,this.setAutoPlayNeeded=!1,this.playerContainerEventHandler=function(n){switch(n.type){case"contextmenu":if(n.preventDefault(),!window.storeApi)switch(u.playerState){case t.PlayerStates.Ready:case t.PlayerStates.Playing:case t.PlayerStates.Paused:case t.PlayerStates.Ended:case t.PlayerStates.Stopped:u.setupCustomizeContextMenu();u.contextMenu.showMenu(n,u.playerContainer)}}},this.documentEventHandler=function(n){n=e.getEvent(n);switch(n.type){case"click":u.customizedContextMenu&&u.customizedContextMenu.setAttribute("aria-hidden","true")}},this.videoControlsContainerEventHandler=function(n){n=e.getEvent(n);switch(n.type){case"contextmenu":u.customizedContextMenu.setAttribute("aria-hidden","true");n.preventDefault();n.stopPropagation()}},this.playPauseButtonEventHandler=function(n){n=e.getEvent(n);switch(n.type){case"mouseover":case"focus":u.showElement(u.playPauseTooltip);p.Environment.isChrome&&(u.isPaused()?u.setAriaLabelForButton(u.playPauseButton):u.playPauseButton.setAttribute("aria-label",u.locPause.toLowerCase()));break;case"mouseout":case"blur":u.hideElement(u.playPauseTooltip)}},this.triggerPlayEventHandler=function(n){n=e.getEvent(n);switch(n.type){case"mouseover":case"focus":u.showElement(u.triggerTooltip);break;case"mouseout":case"blur":u.hideElement(u.triggerTooltip)}},this.triggerContainerEventHandler=function(n){var t,i;n=e.getEvent(n);t=function(t){u.onVideoPlayerClicked(n);t&&u.videoControls&&u.videoControls.setFocusOnControlBar();u.playerOptions&&u.playerOptions.playFullScreen&&u.enterFullScreen();u.playerOptions&&u.playerOptions.showEndImage&&u.hideImage();u.updateScreenReaderElement(u.locPlaying,!0);u.setFocusOnPlayButton();n.preventDefault&&n.preventDefault();e.removeEvents(u.triggerContainer,"click keyup",u.triggerContainerEventHandler,!0)};switch(n.type){case"click":t(!1);break;case"keyup":i=f.getKeyCode(e.getEvent(n));i===32&&t(!1)}},this.triggerPlayPauseContainerEventHandler=function(n){var t,i;n=e.getEvent(n);t=function(){u.isPlayable()&&(u.setUserInteracted(!0),u.isPaused()?(u.play(),u.setUserIntiatedPause(!1),!u.playPauseButton||(e.removeClass(u.playPauseButton,"glyph-play"),e.addClass(u.playPauseButton,"glyph-pause"),u.updateScreenReaderElement(u.locPlaying),u.playPauseButton.setAttribute("aria-label",u.locPause),e.setText(u.playPauseTooltip,u.locPause))):(u.pause(!0),u.setUserIntiatedPause(!0),!u.playPauseButton||(e.removeClass(u.playPauseButton,"glyph-pause"),e.addClass(u.playPauseButton,"glyph-play"),u.updateScreenReaderElement(u.locPaused),u.setAriaLabelForButton(u.playPauseButton),e.setText(u.playPauseTooltip,u.locPlay))))};switch(n.type){case"click":t();break;case"keydown":i=f.getKeyCode(e.getEvent(n));i===32&&t()}},this.onResourcesLoaded=function(){if(b.PlayerUtility.createVideoPerfMarker(u.playerId,it.videoPerfMarkers.locReady),u.videoMetadata&&u.videoMetadata.geoFenced===!0){u.playerState=t.PlayerStates.Error;u.hideSpinner();u.playerOptions.showImageForVideoError===!0&&u.videoMetadata&&u.videoMetadata.posterframeUrl?(u.hideTrigger(),u.disablePlayPauseTrigger(),u.displayImage(u.videoMetadata.posterframeUrl)):u.displayErrorMessage({title:u.localizationHelper.getLocalizedValue(g.playerLocKeys.geolocation_error)});return}u.locPlay=u.localizationHelper.getLocalizedValue(g.playerLocKeys.play);u.locPlayVideo=u.localizationHelper.getLocalizedValue(g.playerLocKeys.play_video);u.locPause=u.localizationHelper.getLocalizedValue(g.playerLocKeys.pause);u.locMute=u.localizationHelper.getLocalizedValue(g.playerLocKeys.mute);u.locUnmute=u.localizationHelper.getLocalizedValue(g.playerLocKeys.unmute);u.locPlaying=u.localizationHelper.getLocalizedValue(g.playerLocKeys.playing);u.locPaused=u.localizationHelper.getLocalizedValue(g.playerLocKeys.paused);u.setSpinnerProperties();u.setTriggerProperties();u.locReady=!0;u.initializeAgeGating();var n=u.ageGateHelper.verifyAgeGate();n&&(u.hideTrigger(),u.hideSpinner());u.hasDataError&&!u.dataErrorShown&&(u.showDataError(),u.hasDataError=!1)},this.onMediaEvent=function(n){var t,i,r;if(!!n){if(e.customEvent(u.videoComponent,n.type,{bubbles:n.bubbles,cancelable:n.cancelable}),u.playerEventCallbacks&&u.playerEventCallbacks.length)for(t=0,i=u.playerEventCallbacks;t<i.length;t++)r=i[t],r&&r({name:n.type});switch(n.type.toLowerCase()){case"canplay":case"canplaythrough":u.onVideoCanPlay(n);break;case"error":u.onVideoError(n);break;case"play":u.onVideoPlay(n);break;case"pause":u.onVideoPause(n);break;case"seeking":u.onVideoSeeking(n);break;case"seeked":u.onVideoSeeked(n);break;case"waiting":u.onVideoWaiting(n);break;case"loadedmetadata":u.onVideoMetadataLoaded();break;case"loadeddata":u.onVideoLoadedData();break;case"timeupdate":u.onVideoTimeUpdate();break;case"ended":u.onVideoEnded();break;case"playing":u.onVideoPlaying();break;case"volumechange":u.onVideoVolumeChange(n)}}},this.onVideoPlaying=function(){u.updateState(t.PlayerStates.Playing);u.checkReplacedVideoTag();!u.videoControls||!u.videoWrapper||(u.videoControls.setLive(u.isLive()),u.videoControls.setPlayPosition(u.videoWrapper.getPlayPosition()),u.videoControls.resetSlidersWorkaround());u.setNextCheckpoint();u.reportContentStart();p.Environment.isAndroid&&(u.logMessage("re-invoking play for Android only"),u.videoWrapper.play());u.playerOptions&&u.playerOptions.inviewPlay&&(u.registedInviewManagerAlready||(u.inviewManager||(u.inviewManager=et.InviewManager.Instance()),u.inviewManager&&(u.inviewManager.registerPlayer(u),u.registedInviewManagerAlready=!0)))},this.onVideoWrapperLoaded=function(){u.checkReplacedVideoTag();b.PlayerUtility.createVideoPerfMarker(u.playerId,it.videoPerfMarkers.wrapperReady);u.loadVideo();u.showingPosterImage?(u.posterImageUrl?u.videoWrapper.setPosterFrame(u.posterImageUrl):u.videoMetadata&&u.videoMetadata.posterframeUrl?u.videoWrapper.setPosterFrame(u.videoMetadata.posterframeUrl):console.log("no poster image passed in parameter or video metadata"),u.showingPosterImage=!1):u.playerOptions.autoplay&&u.displayPreRollAndPlayContent()},this.onBeforeUnload=function(){u.isWindowClosing=!0},this.onWindowResize=function(){u.closedCaptions&&(u.closedCaptions.resetCaptions(),u.closedCaptions.updateCaptions(u.getPlayPosition().currentTime))},this.onVideoWrapperLoadFailed=function(){u.playerOptions&&u.playerOptions.showImageForVideoError===!0&&u.videoMetadata&&u.videoMetadata.posterframeUrl?(u.hideTrigger(),u.disablePlayPauseTrigger(),u.displayImage(u.videoMetadata.posterframeUrl)):u.displayErrorMessage({title:u.localizationHelper.getLocalizedValue(g.playerLocKeys.standarderror)})},this.onMouseEvent=function(n){if(n=e.getEvent(n),n.type==="mousemove")u.showcontrolFirstTime=!1,!u.playPauseTrigger&&u.videoControls&&u.showControlsBasedOnState(),u.playPauseTrigger&&u.showPlayPauseTrigger(!0);else if(n.type==="mouseout"){u.showcontrolFirstTime=!1;u.playPauseTrigger&&u.showPlayPauseTrigger(!1);for(var t=n.toElement||n.relatedTarget;t&&t.parentNode&&t.parentNode!==window;){if(t.parentNode===u||t===u){e.preventDefault(n);return}t=t.parentNode}}},this.onKeyboardEvent=function(n){var t=f.getKeyCode(n);switch(t){case 9:u.showControlsBasedOnState()}},this.onVideoMetadataLoaded=function(){u.setupPlayerMenus()},this.onVideoLoadedData=function(){u.updateState(t.PlayerStates.Ready);var n=u.getPlayPosition();!u.videoControls||(u.videoControls.setLive(u.isLive()),u.videoControls.setPlayPosition(n));u.startTimeOnDataLoad&&u.startTimeOnDataLoad>n.startTime&&u.startTimeOnDataLoad<n.endTime&&(u.seek(u.startTimeOnDataLoad),u.startTimeOnDataLoad=null);u.playOnDataLoad&&(u.play(),u.playOnDataLoad=!1)},this.onVideoTimeUpdate=function(){var n,i,r,f,e;u.videoWrapper&&(n=u.getPlayPosition(),u.videoControls&&u.videoControls.setPlayPosition(n),n.startTime!==n.endTime)&&(u.closedCaptions&&u.closedCaptions.updateCaptions(n.currentTime),u.interactiveTriggersHelper&&u.interactiveTriggersHelper.updateCurrentOverlay(n.currentTime),u.isPaused()||(u.playerState===t.PlayerStates.Buffering&&u.updateState(t.PlayerStates.Playing),i=n.endTime-n.startTime,u.checkTimeRemainingCheckpoint(i-n.currentTime),r=u.nextCheckpoint&&i>0&&Math.round(n.currentTime*100)/100>=Math.round(i*u.nextCheckpoint/1)/100,f=u.stopwatchPlaying.hasReached(nt.PlayerConfig.eventCheckpointInterval),r?(e=u.nextCheckpoint,u.reportEvent(k.PlayerEvents.ContentCheckpoint,{checkpoint:e,checkpointType:"quartile"}),u.setNextCheckpoint(),u.stopwatchBuffering.reset()):f&&u.reportEvent(k.PlayerEvents.ContentCheckpoint,{checkpointType:"interval"})))},this.onVideoCanPlay=function(){u.canPlay=!0;u.videoControls&&u.videoControls.updatePlayPauseState()},this.onVideoError=function(){var i,r,n,f;if(!u.isWindowClosing&&u.playerState!==t.PlayerStates.Init&&u.playerState!==t.PlayerStates.Error)if(i=u.videoWrapper.getError(),i&&i.errorCode){if(i.errorCode===s.VideoErrorCodes.MediaErrorSourceNotSupported&&(r=u.getFallbackVideoFile(),u.currentVideoFile&&u.currentVideoFile.mediaType!==s.MediaTypes.MP4&&r&&r.mediaType===s.MediaTypes.MP4)){u.reportEvent(k.PlayerEvents.PlayerError,{errorType:k.PlayerEvents.SourceErrorAttemptRecovery,errorDesc:"Playback using media type "+u.currentVideoFile.mediaType+" failed. Attempting to fallback to MP4 source."});u.setVideoSrc(r);u.playerOptions.autoplay&&(u.playOnDataLoad=!0,u.play());u.isFallbackVideo=!0;return}if(u.playerOptions&&u.playerOptions.showImageForVideoError&&u.videoMetadata&&u.videoMetadata.posterframeUrl){u.hideControlPanel();u.videoControls=null;u.stopMedia();u.hideTrigger();u.disablePlayPauseTrigger();u.displayImage(u.videoMetadata.posterframeUrl);return}u.updateState(t.PlayerStates.Error);n=void 0;switch(i.errorCode){case s.VideoErrorCodes.MediaErrorAborted:n=u.localizationHelper.getLocalizedValue(g.playerLocKeys.media_err_aborted);break;case s.VideoErrorCodes.MediaErrorNetwork:n=u.localizationHelper.getLocalizedValue(g.playerLocKeys.media_err_network);break;case s.VideoErrorCodes.MediaErrorDecode:n=u.localizationHelper.getLocalizedValue(g.playerLocKeys.media_err_decode);break;case s.VideoErrorCodes.MediaErrorSourceNotSupported:n=u.localizationHelper.getLocalizedValue(g.playerLocKeys.media_err_src_not_supported);break;case s.VideoErrorCodes.AmpEncryptError:n=u.localizationHelper.getLocalizedValue(g.playerLocKeys.media_err_amp_encrypt);break;case s.VideoErrorCodes.AmpPlayerMismatch:n=u.localizationHelper.getLocalizedValue(g.playerLocKeys.media_err_amp_player_mismatch);break;default:n=u.localizationHelper.getLocalizedValue(g.playerLocKeys.media_err_unknown_error)}n=o.format(u.localizationHelper.getLocalizedValue(g.playerLocKeys.playbackerror),n);f=b.PlayerUtility.formatContentErrorMessage(i.errorCode,n,i.message);u.stopMedia(n,f)}else u.stopMedia()},this.onErrorCallback=function(n,t){u.reportEvent(k.PlayerEvents.PlayerError,{errorType:n,errorDesc:t})},this.onVideoPlay=function(){u.hideTrigger();u.playTriggered?u.reportEvent(k.PlayerEvents.Resume):(u.playTriggered=!0,b.PlayerUtility.createVideoPerfMarker(u.playerId,it.videoPerfMarkers.playTriggered));u.firstByteTimer&&window.clearTimeout(u.firstByteTimer);var n=p.Environment.isMobile?nt.PlayerConfig.firstByteTimeoutVideoMobile:nt.PlayerConfig.firstByteTimeoutVideoDesktop;n>0&&(u.firstByteTimer=setTimeout(function(){if(!u.getBufferedDuration()&&u.playerState===t.PlayerStates.Buffering){if(u.logMessage("Buffering stuck detected"),u.updateState(t.PlayerStates.Error),u.playerOptions&&u.playerOptions.showImageForVideoError&&u.videoMetadata&&u.videoMetadata.posterframeUrl){u.hideControlPanel();u.videoControls=null;u.stopMedia();u.hideTrigger();u.disablePlayPauseTrigger();u.displayImage(u.videoMetadata.posterframeUrl);return}u.stopMedia(u.localizationHelper.getLocalizedValue(g.playerLocKeys.standarderror),b.PlayerUtility.formatContentErrorMessage(s.VideoErrorCodes.BufferingFirstByteTimeout,"Time out waiting for first byte."))}},n))},this.onVideoPause=function(){u.videoWrapper&&u.videoWrapper.isSeeking()||u.playerState===t.PlayerStates.Ended||u.updateState(t.PlayerStates.Paused)},this.onVideoSeeking=function(){u.playerState!==t.PlayerStates.Ended&&u.videoWrapper&&u.videoWrapper.isSeeking()?(u.nextCheckpoint=null,u.seekFrom===null&&(u.seekFrom=u.getPlayPosition().currentTime),u.updateState(t.PlayerStates.Seeking)):u.seekFrom=null},this.onVideoSeeked=function(){var n=u.getPlayPosition().currentTime;u.playerState!==t.PlayerStates.Ended&&u.videoWrapper&&!u.videoWrapper.isSeeking()&&u.seekFrom!==null&&u.seekFrom!==n&&(u.setNextCheckpoint(),u.reportEvent(k.PlayerEvents.Seek,{seekFrom:u.seekFrom,seekTo:n}),u.seekFrom=null,u.updateState(u.isPaused()?t.PlayerStates.Paused:t.PlayerStates.Playing))},this.onVideoWaiting=function(){u.updateState(t.PlayerStates.Buffering)},this.onVideoVolumeChange=function(n){n&&n.target&&(u.videoWrapper.isMuted()?u.isVideoMuted=!0:u.isVideoMuted&&(u.isVideoMuted=!1,p.Environment.isMobile&&u.videoWrapper.unmute()));!u.videoControls||u.videoControls.updateVolumeState()},this.onCcPresetFocus=function(n){var r,i,t;if(u.videoControls&&u.closedCaptions&&u.closedCaptionsSettings){if(u.closedCaptions.getCurrentCcLanguage()||u.closedCaptions.showSampleCaptions(),r=e.getEventTargetOrSrcElement(n),i=r.getAttribute("data-info"),i==="reset")u.closedCaptionsSettings.reset();else{if(t=i.split(":"),!t&&t.length<0)return;u.closedCaptionsSettings.setSetting(t[0],t[1],!1)}u.closedCaptions.resetCaptions();u.closedCaptions.updateCaptions(u.getPlayPosition().currentTime)}},this.onCcPresetBlur=function(){var r,t,i,n;if(u.videoControls&&u.closedCaptions&&u.closedCaptionsSettings){if(u.closedCaptions.getCurrentCcLanguage()||u.closedCaptions.setCcLanguage("off",null),r=e.selectFirstElement("#"+u.ccSettingsMenuId,u.videoControlsContainer),t=e.selectFirstElement(".glyph-check-mark",r),t!=null)if(i=t.getAttribute("data-info"),i==="reset")u.closedCaptionsSettings.reset();else{if(n=i.split(":"),!n&&n.length<0)return;u.closedCaptionsSettings.setSetting(n[0],n[1])}else u.closedCaptionsSettings.reset(!1);u.closedCaptions.resetCaptions();u.closedCaptions.updateCaptions(u.getPlayPosition().currentTime)}},this.onVideoPlayerClicked=function(){u.playerOptions.useAMPVersion2&&u.isFallbackVideo||(u.playerOptions&&u.playerOptions.lazyLoad&&!u.wrapperLoadCalled?(u.playOnDataLoad=!1,u.playerOptions.adsEnabled?(u.playerOptions.adsEnabled=!1,u.playerOptions.autoplay=!1):u.playerOptions.autoplay=!0,u.hasInteractivity?u.loadVideoWrapper(!1):u.loadVideoWrapper(u.playerOptions.autoplay),u.isFirstTimePlayed&&u.displayPreRollAndPlayContent()):u.isFirstTimePlayed?u.displayPreRollAndPlayContent():u.isPaused()?(u.play(),u.setUserInteracted(!0),u.setUserIntiatedPause(!1)):(u.pause(!0),u.setUserInteracted(!0),u.setUserIntiatedPause(!0)),u.hideTrigger(),u.showSpinnerBasedOnState(),u.videoControls&&u.isInFullscreen&&u.videoControls.setFocusOnControlBar())},this.onVideoEnded=function(){u.updateState(t.PlayerStates.Ended);u.reportEvent(k.PlayerEvents.ContentComplete);p.Environment.useNativeControls||u.stop()},this.onFullscreenChanged=function(){var t=n.getElementInFullScreen(),i=u.getFullscreenContainer();t?i!==t||u.isInFullscreen||u.onFullscreenEnter():u.isInFullscreen&&u.onFullscreenExit()},this.onIOSFullscreenEnter=function(){u.play();u.onFullscreenEnter()},this.onIOSFullscreenExit=function(){u.onFullscreenExit()},this.onFullscreenError=function(){u.isInFullscreen=!1},this.onSetAudioCallback=function(){u.isAudioTracksDoneSwitching=!0},i)&&(this.isVideoPlayerSupported=p.Environment.isVideoPlayerSupported(),this.createComponents(r),this.load(r))}return n.prototype.createComponents=function(t){var u,f,s,h,i;this.playPauseTrigger=t&&t.options&&t.options.playPauseTrigger;this.showEndImage=t&&t.options&&t.options.showEndImage;this.playerContainer=e.selectFirstElement(n.playerContainerSelector,this.videoComponent);var r=t&&t.options&&t.options.maskLevel?this.sanitize(t.options.maskLevel):"40",c=t&&t.options&&t.options.theme?this.sanitize(t.options.theme):"light",l=t&&t.options&&t.options.trigger;this.setAutoPlayNeeded=t&&t.options&&t.options.autoplay&&(p.Environment.isChrome||p.Environment.isMobile);u=t&&t.options&&t.options.controls&&this.isVideoPlayerSupported&&!this.playPauseTrigger&&!p.Environment.useNativeControls;this.playerContainer||(f='<div class="f-core-player" tabindex="-1">\n    '+(this.setAutoPlayNeeded?'<video class="f-video-player" preload="metadata" muted autoplay playsinline tabindex="-1"><\/video>':'<video class="f-video-player" preload="metadata" tabindex="-1"><\/video>')+"\n    "+(l?'<div class="f-video-trigger" aria-hidden="true" >\n                        <div class="f-mask-'+r+" theme-"+c+'" >\n                            <button class="c-action-trigger f-play-trigger c-glyph glyph-play" aria-label="Play" role="button">\n                            <\/button>\n                            <span aria-hidden="true" role="presentation">Play<\/span>\n                        <\/div>\n                    <\/div>':"")+'    \n    <div class="f-customize-context-menu-container"><\/div> \n    <div class="f-video-cc-overlay" aria-hidden="true"><\/div>\n    <div class="f-screen-reader" aria-live="polite"><\/div>\n    '+(u?'<div class="f-video-controls" dir="ltr" aria-hidden="true" role="group"><\/div>':"")+'\n    <div aria-hidden="true" class="c-progress f-indeterminate-local f-progress-large" role="progressbar" tabindex="0">\n        <span><\/span>\n        <span><\/span>\n        <span><\/span>\n        <span><\/span>\n        <span><\/span>\n    <\/div>\n    '+(this.playPauseTrigger?'<div role="presentation" class="f-play-pause-trigger">\n            <button type="button" class="f-play-pause c-action-trigger c-glyph glyph-pause f-play-pause-hide" aria-label="pause">\n            <\/button>\n            <span aria-hidden="true" role="presentation">Pause<\/span>\n         <\/div>':"")+"\n<\/div>",this.videoComponent.innerHTML=f,this.playerContainer=e.selectFirstElement(n.playerContainerSelector,this.videoComponent));this.checkReplacedVideoTag();this.spinner=e.selectFirstElement(".c-progress",this.playerContainer);this.triggerContainer=e.selectFirstElement(".f-video-trigger",this.videoComponent);this.triggerPlayPauseContainer=e.selectFirstElement(".f-play-pause-trigger",this.videoComponent);this.screenReaderElement=e.selectFirstElement(".f-screen-reader",this.videoComponent);this.customizedContextMenuContainer=e.selectFirstElement(".f-customize-context-menu-container",this.videoComponent);e.addEvents(this.playerContainer,"contextmenu",this.playerContainerEventHandler,!0);e.addEvents(document,"click",this.documentEventHandler,!0);!this.triggerContainer||(s=e.selectFirstElement("div",this.triggerContainer),h=o.format("background-color: rgba(0,0,0,{0})",Number(r)/100),s.setAttribute("style",h),this.trigger=e.selectFirstElement(".c-action-trigger",this.triggerContainer),this.triggerTooltip=e.selectFirstElement("span",this.triggerContainer),e.addEvents(this.trigger,"mouseover mouseout focus blur",this.triggerPlayEventHandler,!0),t&&t.options&&!t.options.autoplay&&(this.showTrigger(),this.hideControlPanel(),this.hideSpinner()));this.triggerPlayPauseContainer&&t&&t.options&&(this.playPauseButton=e.selectFirstElementT(".f-play-pause",this.triggerPlayPauseContainer),this.playPauseButton.setAttribute("aria-label","pause"),this.playPauseTooltip=e.selectFirstElement("span",this.triggerPlayPauseContainer),e.addEvents(this.playPauseButton,"mouseover mouseout focus blur",this.playPauseButtonEventHandler,!0),e.addEvents(this.triggerPlayPauseContainer,"click keydow",this.triggerPlayPauseContainerEventHandler,!0));p.Environment.isInIframe&&(i=document.getElementsByTagName("body"),i&&i[0].setAttribute("tabindex","-1"))},n.prototype.initializeLocalization=function(){b.PlayerUtility.createVideoPerfMarker(this.playerId,it.videoPerfMarkers.locLoadStart);this.localizationHelper?this.onResourcesLoaded():(this.playerOptions.market||(this.playerOptions.market=this.videoComponent.getAttribute("data-market")),this.localizationHelper=new g.LocalizationHelper(this.playerOptions.market,this.playerOptions.resourceHost,this.playerOptions.resourceHash,this.onErrorCallback),this.localizationHelper.loadResources(this.onResourcesLoaded))},n.prototype.initializeAgeGating=function(){var n=this;this.ageGateHelper=new ft.AgeGateHelper(this.playerContainer,this,this.localizationHelper,function(){n.finishPlayerLoad()})},n.prototype.initializeReporting=function(n){if(n&&n.options&&n.options.reporting&&n.options.reporting.enabled&&this.reporters.length<1&&(n.options.reporting.jsll&&this.reporters.push(new d.JsllReporter(this.videoComponent,n.options.jsllPostMessage)),n&&n.options&&n.options.inviewThreshold&&(this.inviewManager||(this.inviewManager=et.InviewManager.Instance()),this.inviewManager))){var t=this;this.inviewManager.listenForInviewThresholdChanges(this.playerContainer,n.options.inviewThreshold,function(n){t.reportEvent(n)})}},n.prototype.getPlayerId=function(){return this.playerId||this.videoComponent.id},n.prototype.sanitize=function(n){var t={"<":"&lt;",">":"&gt;","(":"%28",")":"%29",'"':"%22"};return n.replace(/[<>()"]/ig,function(n){return t[n]})},n.prototype.getPlayerData=function(){return this.playerData},n.prototype.getPlayerContainer=function(){return this.playerContainer},n.prototype.hasUserInteracted=function(){return this.wasUserInteracted},n.prototype.setUserInteracted=function(n){this.wasUserInteracted=n},n.prototype.hasUserIntiatedPause=function(){return this.wasUserIntiatedPause},n.prototype.setAutoPlay=function(){!!this.videoWrapper&&this.wrapperLoadCalled&&this.videoWrapper.setAutoPlay()},n.prototype.setUserIntiatedPause=function(n){this.wasUserIntiatedPause=n},n.prototype.getCurrentPlayState=function(){return this.playerState},n.prototype.load=function(n){if(n){this.playerData=n;this.currentVideoFile=null;this.playerId=this.videoComponent.getAttribute("id");this.updateState(t.PlayerStates.Init);this.hideErrorMessage();this.videoMetadata=n.metadata;this.playerOptions=n.options||new h.PlayerOptions;this.screenManagerHelper=new ut.ScreenManagerHelper;this.startTimeOnDataLoad=this.playerOptions.startTime;(this.playerOptions.autoplay||this.playerOptions.lazyLoad&&!this.playerOptions.trigger)&&(this.playerOptions.lazyLoad=!1);try{this.initializeLocalization();this.initializeReporting(n)}catch(i){this.reportEvent(k.PlayerEvents.PlayerError,{errorType:"initializeError",errorDesc:"InitializeError with loc, reporting, age-gating : "+i.message})}if(!this.videoMetadata||!this.videoMetadata.videoFiles||!this.videoMetadata.videoFiles.length){this.hasDataError=!0;this.locReady&&this.showDataError();return}}},n.prototype.finishPlayerLoad=function(){var n=this.ageGateHelper.doesUserPassAgeGate(),i=!1;if(this.ageGateHelper.didUserSubmitAge()&&(this.reportEvent(k.PlayerEvents.AgeGateSubmitClick,{ageGatePassed:n}),this.ageGateHelper.resetAgeGateSubmit(),i=!0),!n){this.displayErrorMessage({title:this.localizationHelper.getLocalizedValue(g.playerLocKeys.agegate_fail)});return}try{if(!this.triggerPlayPauseContainer||this.playerData.options.autoplay||!this.playPauseButton||(e.removeClass(this.playPauseButton,"glyph-pause"),e.addClass(this.playPauseButton,"glyph-play"),this.setAriaLabelForButton(this.playPauseButton),e.setText(this.playPauseTooltip,this.locPlay)),this.contextMenu=new st.ContextMenu(this.customizedContextMenuContainer,this),this.initializeVideoControls(),!this.isVideoPlayerSupported){this.displayErrorWithDownloadLink();return}this.analyzeVideoFiles();this.initializeClosedCaptions();this.hasInteractivity=!p.Environment.isMobile&&this.playerOptions.interactivity&&this.videoMetadata.interactiveTriggersEnabled&&!!this.videoMetadata.interactiveTriggersUrl;this.interactiveTriggersHelper||this.initializeInteractiveTriggers()}catch(r){this.reportEvent(k.PlayerEvents.PlayerError,{errorType:"initializeError",errorDesc:"InitializeError with video files, CC, interactiveTrigger: "+r.message})}this.videoTag?(this.videoTag.title=this.videoMetadata.title,this.videoTag.loop=this.playerOptions.loop,this.videoMetadata.posterframeUrl&&!this.playerOptions.hidePosterFrame&&(this.videoTag.poster=this.videoMetadata.posterframeUrl)):this.reportEvent(k.PlayerEvents.PlayerError,{errorType:"videoTagNotAvailable",errorDesc:"VideoTag not available"});this.videoWrapper=this.getVideoWrapper();this.playerTechnology="OnePlayer_"+this.videoWrapper.getWrapperName();this.commonPlayerImpressionReported||(this.reportEvent(k.PlayerEvents.CommonPlayerImpression),this.commonPlayerImpressionReported=!0);p.Environment.isIPhone&&!this.playerOptions.autoplay&&(this.playerOptions.lazyLoad=!0);this.playerOptions.lazyLoad||(i?this.hasInteractivity?this.loadVideoWrapper(!1):this.loadVideoWrapper(!0):this.hasInteractivity?this.loadVideoWrapper(!1):this.loadVideoWrapper(this.playerOptions.autoplay));this.reportEvent(k.PlayerEvents.Ready);this.updateState(t.PlayerStates.PlayerLoaded);this.canPlay=!0},n.prototype.setAriaLabelForButton=function(n,t){this.videoMetadata.title!==""?n.setAttribute("aria-label",this.locPlay.toLowerCase()+" "+this.videoMetadata.title):t?n.setAttribute("aria-label",t.toLowerCase()):n.setAttribute("aria-label",this.locPlayVideo.toLowerCase())},n.prototype.updatePlayerSource=function(n){var t=this,i;n&&(this.playerData.options=new h.PlayerOptions(n.options),this.playerData.metadata=n.metadata,this.isFirstTimePlayed=!0,this.isContentStartReported=!1,this.wrapperLoadCalled=!1,!this.playerData.metadata||!this.playerData.metadata.videoId||this.playerData.metadata.videoFiles&&this.playerData.metadata.videoFiles.length||this.playerData.metadata.playerName?(this.pause(),this.load(this.playerData)):(i=new ot.VideoShimDataFetcher(this.playerData.options.shimServiceEnv,this.playerData.options.shimServiceUrl),i.getMetadata(this.playerData.metadata.videoId,function(n){t.pause();t.playerData.metadata=n;t.load(t.playerData)})))},n.prototype.displayErrorWithDownloadLink=function(){var t=this.getVideoFileforDownload(),n="",i;this.playerOptions.download&&t?(i='<a href="'+t.url+'"><span style="text-decoration:underline">'+this.localizationHelper.getLocalizedValue(g.playerLocKeys.download_video)+"<\/span><\/a>",n=this.localizationHelper.getLocalizedValue(g.playerLocKeys.browserunsupported)+" "+this.localizationHelper.getLocalizedValue(g.playerLocKeys.browserunsupported_download)+" "+i+"."):n=this.localizationHelper.getLocalizedValue(g.playerLocKeys.browserunsupported);this.displayErrorMessage({message:n});this.reportEvent(k.PlayerEvents.ContentError,{errorType:"content:error",errorDesc:"error to play video",errorMessage:"error to play video, browser not supportted"})},n.prototype.showDataError=function(){this.playerOptions&&this.playerOptions.showImageForVideoError===!0&&this.videoMetadata&&this.videoMetadata.posterframeUrl?(this.hideTrigger(),this.disablePlayPauseTrigger(),this.displayImage(this.videoMetadata.posterframeUrl)):this.displayErrorMessage({title:this.localizationHelper.getLocalizedValue(g.playerLocKeys.data_error)});this.dataErrorShown=!0},n.prototype.checkTimeRemainingCheckpoint=function(n){if(!!this.playerData.options.timeRemainingCheckpoint){var t=this.playerData.options.timeRemainingCheckpoint;t>=n&&!this.timeRemainingCheckpointReached?(this.timeRemainingCheckpointReached=!0,this.reportEvent("TimeRemainingCheckpoint")):t<n&&(this.timeRemainingCheckpointReached=!1)}},n.prototype.analyzeVideoFiles=function(){var n,t,i;for(this.hasHLS=!1,this.hasProgressive=!1,this.hasAdaptive=!1,n=0,t=this.videoMetadata.videoFiles;n<t.length;n++){i=t[n];switch(i.mediaType){case s.MediaTypes.DASH:case s.MediaTypes.SMOOTH:this.hasAdaptive=!0;break;case s.MediaTypes.HLS:this.hasHLS=!0;break;case s.MediaTypes.MP4:default:this.hasProgressive=!0}}this.useAdaptive=this.hasAdaptive&&(this.playerOptions&&this.playerOptions.useAdaptive||!this.hasProgressive);this.hasProgressive&&p.Environment.isMobile&&(this.useAdaptive=!1);this.hasProgressive&&this.playerOptions&&this.playerOptions.autoplay&&this.playerOptions.startTime===0&&p.Environment.isChrome&&!this.playerOptions.useAMPVersion2&&(this.useAdaptive=!1)},n.prototype.loadVideoWrapper=function(n){this.videoWrapper&&(p.Environment.isMobile&&!p.Environment.isIPhone&&(n=!1),this.wrapperLoadCalled=!0,b.PlayerUtility.createVideoPerfMarker(this.playerId,it.videoPerfMarkers.wrapperLoadStart),this.videoWrapper.load(this.videoComponent,n,this.onVideoWrapperLoaded,this.onVideoWrapperLoadFailed,this.onSetAudioCallback))},n.prototype.initializeInteractiveTriggers=function(){var n=this;this.hasInteractivity&&(this.interactiveTriggersHelper=new rt.VideoPlayerInteractiveTriggersHelper(this.playerContainer,this.videoMetadata.interactiveTriggersUrl,this,this.localizationHelper,function(t,i){n.reportInteractiveTelemetryEvent(t,i)}))},n.prototype.reportInteractiveTelemetryEvent=function(n,t){switch(n){case k.PlayerEvents.InteractiveOverlayClick:t&&t.overlay.overlayData.pauseVideoOnClick&&this.pause();t.overlay.overlayType===rt.OverlayType.VideoBranch&&(t.overlay.overlayData.linkUrl=t.overlay.overlayData.videoId);this.reportEvent(k.PlayerEvents.InteractiveOverlayClick,{interactiveTriggerAndOverlay:t});t.overlay.overlayType===rt.OverlayType.VideoBranch&&this.currentVideoStopwatchPlaying.reset();break;case k.PlayerEvents.InteractiveOverlayMaximize:this.reportEvent(k.PlayerEvents.InteractiveOverlayMaximize,{interactiveTriggerAndOverlay:t});break;case k.PlayerEvents.InteractiveOverlayMinimize:this.reportEvent(k.PlayerEvents.InteractiveOverlayMinimize,{interactiveTriggerAndOverlay:t});break;case k.PlayerEvents.InteractiveBackButtonClick:this.reportEvent(k.PlayerEvents.InteractiveBackButtonClick)}},n.prototype.initializeVideoControls=function(){var r=this,n,t;p.Environment.useNativeControls||(this.videoControlsContainer=e.selectFirstElement(i.VideoControls.selector,this.videoComponent),e.addEvents(this.videoControlsContainer,"contextmenu",this.videoControlsContainerEventHandler,!0),n=!p.Environment.useNativeControls&&this.playerOptions&&this.playerOptions.controls&&!this.areControlsInitialized,t=n&&!this.playerOptions.trigger&&!this.isTriggerShown(),this.controlsScreenManagerObject={HtmlObject:this.videoControlsContainer,Height:44,Id:null,IsVisible:!1,Priority:5,Transition:null},this.screenManagerHelper.registerElement(this.controlsScreenManagerObject),this.videoControlsContainer&&(n&&(this.areControlsInitialized=!0,this.videoControlsContainer.setAttribute("aria-hidden","false"),this.videoControls=new i.VideoControls(this.videoControlsContainer,this,this.localizationHelper,this.contextMenu),this.videoControls.addUserInteractionListener(function(){r.showControlsBasedOnState()})),t||this.videoControlsContainer.setAttribute("aria-hidden","true"),!this.playerOptions.showControlOnLoad&&this.showcontrolFirstTime&&this.videoControlsContainer.setAttribute("aria-hidden","true")))},n.prototype.getQualityMenu=function(){var n,i,u,t,h,c,f,o,e,r,l;if(!this.videoMetadata.videoFiles||!this.videoMetadata.videoFiles.length)return null;if(n=[],this.hasAdaptive&&this.playerOptions&&this.playerOptions.useAdaptive){if(i=this.videoWrapper.getVideoTracks(),!n.length&&i&&i.length>1)for(u=this.videoWrapper.getCurrentVideoTrack(),n.push({id:this.addIdPrefix("auto"),label:this.localizationHelper.getLocalizedValue(g.playerLocKeys.quality_auto),selected:u.auto,selectable:!0,persistOnClick:!0}),t=0;t<i.length;t++)h=i[t],n.push({id:this.addIdPrefix("video-"+t),label:b.PlayerUtility.toFriendlyBitrateString(h.bitrate),selected:!u.auto&&u.trackIndex===t,selectable:!0,persistOnClick:!0})}else if(!n.length)for(c=this.currentVideoFile&&this.currentVideoFile.quality,f=0,o=lt;f<o.length;f++)e=o[f],r=this.getVideoFileByQuality(e),r&&r.url&&(l={id:this.addIdPrefix(s.MediaQuality[e]),label:this.localizationHelper.getLocalizedValue(g.playerLocKeys["quality_"+s.MediaQuality[e].toLowerCase()]),data:r.url,selected:r.quality===c,selectable:!0,persistOnClick:!0},n.push(l));return{category:ht.Quality,id:this.addIdPrefix(ht.Quality),label:this.localizationHelper.getLocalizedValue(g.playerLocKeys.quality),items:n}},n.prototype.getAudioTracksMenu=function(){var i=this.videoWrapper.getAudioTracks(),f,r,e,n,o,h,t,s,l,a;if(!i||i.length<=1)return null;for(f=0,r=0,e=i;r<e.length;r++)n=e[r],n.isDescriptiveAudio&&f++;for(o=[],h=this.videoWrapper.getCurrentAudioTrack(),t=0;t<i.length;t++){var n=i[t],u=void 0,c=null;n.isDescriptiveAudio?(s=this.localizationHelper.getLocalizedValue(g.playerLocKeys.descriptive_audio),f>1?(l=this.localizationHelper.getLanguageNameFromLocale(n.languageCode),u=s+" - "+l):u=s):(u=this.localizationHelper.getLanguageNameFromLocale(n.languageCode),c=this.localizationHelper.getLanguageCodeFromLocale(n.languageCode.toLowerCase()));a={label:u,language:c,id:this.addIdPrefix("audio-"+t),selected:t===h,selectable:!0,persistOnClick:!0};o.push(a)}return{category:ht.AudioTracks,id:this.addIdPrefix(ht.AudioTracks),label:this.localizationHelper.getLocalizedValue(g.playerLocKeys.audio_tracks),items:o}},n.prototype.getClosedCaptionsSettingsMenu=function(){var f,e,n,i,l,r,t,h;if(this.closedCaptionsSettings){f=this.closedCaptionsSettings.getCurrentSettings();e=[];for(n in u.closedCaptionsSettingsMap)if(u.closedCaptionsSettingsMap.hasOwnProperty(n)){var v=u.closedCaptionsSettingsMap[n],s=u.closedCaptionsSettingsOptions[v.option],c=[];for(i in s.map)s.map.hasOwnProperty(i)&&c.push({id:this.getCCMenuItemId(n,i),label:this.localizationHelper.getLocalizedValue(s.pre+i),selectable:!0,selected:f[n]===i,persistOnClick:!0,data:n+":"+i});e.push({id:this.addIdPrefix(n+"_item"),label:this.localizationHelper.getLocalizedValue("cc_"+n),selectable:!1,subMenu:{id:this.getCCSettingsMenuId(n),category:ht.ClosedCaptionSettings,items:c,label:this.localizationHelper.getLocalizedValue("cc_"+n)}})}l={id:this.addIdPrefix(ht.ClosedCaptionSettings),category:ht.ClosedCaptionSettings,label:this.localizationHelper.getLocalizedValue(g.playerLocKeys.cc_customize),items:e};r=[];for(t in u.closedCaptionsPresetMap)if(u.closedCaptionsPresetMap.hasOwnProperty(t)){var a=u.closedCaptionsPresetMap[t],y=a.text_font,p=a.text_color,w=t.replace("preset",""),b=o.format(this.localizationHelper.getLocalizedValue(g.playerLocKeys.cc_presettings),w,this.localizationHelper.getLocalizedValue("cc_font_name_"+y),this.localizationHelper.getLocalizedValue("cc_color_"+p));r.push({id:this.getCCMenuItemId(u.VideoClosedCaptionsSettings.presetKey,t),label:this.localizationHelper.getLocalizedValue("cc_"+t),data:"preset:"+t,selectable:!0,selected:f[u.VideoClosedCaptionsSettings.presetKey]===t,persistOnClick:!0,ariaLabel:b})}return r.length&&(r.push({id:this.addIdPrefix("cc-customize"),label:this.localizationHelper.getLocalizedValue(g.playerLocKeys.cc_customize),subMenu:l}),r.push({id:this.addIdPrefix("cc-reset"),label:this.localizationHelper.getLocalizedValue(g.playerLocKeys.cc_reset),data:"reset",persistOnClick:!0})),h={id:this.getCCSettingsMenuId(u.VideoClosedCaptionsSettings.presetKey),label:this.localizationHelper.getLocalizedValue(g.playerLocKeys.cc_appearance),category:ht.ClosedCaptionSettings,items:r},this.ccSettingsMenuId=h.id,h}},n.prototype.getCCSettingsMenuId=function(n){return this.addIdPrefix("cc-"+n)},n.prototype.getCCMenuItemId=function(n,t){return this.addIdPrefix("cc-"+n+"-"+t)},n.prototype.getClosedCaptionMenu=function(){var r,c,t,p,w,u,l,e,a,v;if(!this.videoMetadata||!this.videoMetadata.ccFiles||!this.videoMetadata.ccFiles.length||!this.ccOverlay||!this.closedCaptions)return null;var y=f.getValueFromSessionStorage(n.ccLangPrefKey),b=this.playerOptions&&this.playerOptions.autoCaptions,o=null,i=[],h=!1;for(r=0,c=this.videoMetadata.ccFiles;r<c.length;r++)t=c[r],t.ccType&&t.ccType!==s.ClosedCaptionTypes.TTML||(h||(h=t.locale===y),!o&&t.locale.indexOf(b)>-1&&(o=t.locale),p=this.localizationHelper.getLanguageCodeFromLocale(t.locale.toLowerCase()),w={id:this.addIdPrefix(t.locale),label:g.ccCultureLocStrings[t.locale],language:p,data:t.url,selected:!1,selectable:!0,persistOnClick:!0,ariaLabel:g.ccCultureLocStrings[t.locale]+" "+this.localizationHelper.getLocalizedValue(g.playerLocKeys.closecaption)},i.push(w));if(i.push({id:this.addIdPrefix("appearance"),label:this.localizationHelper.getLocalizedValue(g.playerLocKeys.cc_appearance),selected:!1,selectable:!1,subMenu:this.getClosedCaptionsSettingsMenu()}),u=h?y:o,u){for(l=this.addIdPrefix(u),e=0,a=i;e<a.length;e++)v=a[e],v.id===l&&(v.selected=!0);this.setCC(l)}return i.unshift({id:this.addIdPrefix("off"),label:this.localizationHelper.getLocalizedValue(g.playerLocKeys.closecaption_off),selected:!u,selectable:!0,persistOnClick:!0,ariaLabel:this.localizationHelper.getLocalizedValue(g.playerLocKeys.closecaption_off)+" "+this.localizationHelper.getLocalizedValue(g.playerLocKeys.closecaption)}),{category:ht.ClosedCaption,id:this.addIdPrefix(ht.ClosedCaption),label:this.localizationHelper.getLocalizedValue(g.playerLocKeys.closecaption),items:i,hideBackButton:!0,glyph:"glyph-subtitles",cssClass:"closed-caption",priority:3}},n.prototype.getPlaybackRateMenu=function(){var r,u,t,e;if(!this.playerOptions||!this.playerOptions.playbackSpeed||!this.videoWrapper||this.videoWrapper.getWrapperName()==="amp")return null;for(r=f.getValueFromSessionStorage(n.playbackRatePrefKey)||nt.PlayerConfig.defaultPlaybackRate,u=[],t=0,e=nt.PlayerConfig.playbackRates;t<e.length;t++){var i=e[t],o=i===+r,s=i===1?this.localizationHelper.getLocalizedValue(g.playerLocKeys.playbackspeed_normal):i+"x",h={id:this.addIdPrefix("rate"+i),label:s,selected:o,selectable:!0,persistOnClick:!0};u.push(h)}return this.setPlaybackRate(this.addIdPrefix("rate"+r)),{category:ht.PlaybackSpeed,id:this.addIdPrefix(ht.PlaybackSpeed),label:this.localizationHelper.getLocalizedValue(g.playerLocKeys.playbackspeed),items:u}},n.prototype.getShareMenu=function(){var t,r,i,u,n,f;if(!this.playerOptions||!this.playerOptions.share)return null;if(t=tt.SharingHelper.getShareOptionsData(this.localizationHelper,this.playerOptions,this.videoMetadata&&this.videoMetadata.shareUrl),t&&t.length){for(r=[],i=0,u=t;i<u.length;i++)n=u[i],f={id:this.addIdPrefix(n.id),label:n.label,data:n.url,glyph:n.glyph,image:n.image},r.push(f);return{category:ht.Share,id:this.addIdPrefix(ht.Share),label:this.localizationHelper.getLocalizedValue(g.playerLocKeys.sharing_label),items:r}}},n.prototype.getDownloadMenu=function(){var i,u,f,c,t,l,r,e,o,a,n,h;if(!this.playerOptions||!this.playerOptions.download)return null;if(this.videoMetadata&&this.videoMetadata.downloadableFiles&&!(this.videoMetadata.downloadableFiles.length<1)){for(i={},u=0,f=0,c=this.videoMetadata.downloadableFiles;f<c.length;f++)n=c[f],this.playerOptions&&this.playerOptions.download?(t=i[n.locale],t||(t=[],u++,i[n.locale]=t),t.push(n)):n.mediaType===s.DownloadableMediaTypes.transcript&&(t=i[n.locale],t||(t=[],u++,i[n.locale]=t),t.push(n));if(u>0){l=[];for(r in i)if(i.hasOwnProperty(r)){for(e=[],o=0,a=i[r];o<a.length;o++)n=a[o],this.playerOptions&&this.playerOptions.download?(h={id:this.addIdPrefix(n.locale+"-"+n.mediaType),label:this.localizationHelper.getLocalizedMediaTypeName(n.mediaType),selected:!1,selectable:!1,data:n.url},e.push(h)):n.mediaType===s.DownloadableMediaTypes.transcript&&(h={id:this.addIdPrefix(n.locale+"-"+n.mediaType),label:this.localizationHelper.getLocalizedMediaTypeName(n.mediaType),selected:!1,selectable:!1,data:n.url},e.push(h));l.push({id:this.addIdPrefix(ht.Download+r),label:this.localizationHelper.getLanguageNameFromLocale(r),selected:!1,selectable:!1,subMenuId:this.addIdPrefix(ht.Download+r+"menu"),subMenu:{id:this.addIdPrefix(ht.Download+r+"menu"),category:ht.Download,label:this.localizationHelper.getLanguageNameFromLocale(r),items:e}})}return{category:ht.Download,id:this.addIdPrefix(ht.Download),label:this.localizationHelper.getLocalizedValue(g.playerLocKeys.download_label),hideBackButton:!0,items:l,glyph:"glyph-download",priority:2}}}},n.prototype.setupCustomizeContextMenu=function(){var n=[],i=this.getPlayPauseMenu(),t;n.push(i);this.playerData.options.playPauseTrigger||(t=this.getMuteUnMuteMenu(),n.push(t));this.contextMenu.setupCustomizeContextMenu(n);this.customizedContextMenu=e.selectFirstElement(".f-player-context-menu",this.playerContainer)},n.prototype.getMuteUnMuteMenu=function(){var n,t;return this.isMuted()?(n=this.locUnmute,t="glyph-volume"):(n=this.locMute,t="glyph-mute"),{id:"context-menu-"+ct.MuteUnMute,label:n,glyph:t,priority:2,category:ct.MuteUnMute}},n.prototype.getPlayPauseMenu=function(){var n,t;return this.isPaused()?(n=this.locPlay,t="glyph-play"):(n=this.locPause,t="glyph-pause"),{id:"context-menu-"+ct.PlayPause,label:n,glyph:t,priority:1,category:ct.PlayPause}},n.prototype.setupPlayerMenus=function(){var n,i,r,u,f,o,s,c,a,h,l,t;if(this.videoControls&&this.videoMetadata&&(n=[],i=this.getQualityMenu(),i&&i.items.length&&n.push(i),r=this.getAudioTracksMenu(),r&&r.items.length&&n.push(r),u=this.getDownloadMenu(),u&&u.items.length&&n.push(u),f=this.getClosedCaptionMenu(),f&&f.items.length&&n.push(f),o=this.getPlaybackRateMenu(),o&&o.items.length&&n.push(o),s=this.getShareMenu(),s&&s.items.length&&n.push(s),this.videoControls.setupPlayerMenus(n),!!this.ccSettingsMenuId&&(c=e.selectFirstElement("#"+this.ccSettingsMenuId,this.videoControlsContainer),!!c)))for(a=e.selectElementsT("button",c),h=0,l=a;h<l.length;h++)t=l[h],t.innerHTML.toLowerCase().indexOf("preset")>=0?(e.addEvents(t,"mouseover focus",this.onCcPresetFocus),e.addEvents(t,"mouseout blur",this.onCcPresetBlur)):e.addEvents(t,"mouseover focus",this.onCcPresetBlur)},n.prototype.dispose=function(){this.hideErrorMessage();this.unbindEvents();this.stop();this.updateState(t.PlayerStates.Stopped);this.videoTag=null;this.videoWrapper&&this.videoWrapper.dispose();this.interactiveTriggersHelper&&this.interactiveTriggersHelper.dispose();this.inviewManager&&this.registedInviewManagerAlready&&this.inviewManager.disposePlayer(this)},n.prototype.restoreSettings=function(){if(this.playerOptions.mute||f.getValueFromSessionStorage(n.mutePrefKey)==="1")this.isVideoMuted=!0,this.mute(!1);else{var t=parseInt(f.getValueFromSessionStorage(n.volumePrefKey),10);this.lastVolume=f.isNumber(t)?t/10:nt.PlayerConfig.defaultVolume;this.setVolume(this.lastVolume)}!this.videoControls||this.videoControls.updateVolumeState()},n.prototype.checkReplacedVideoTag=function(){var n=this,t=e.selectFirstElementT("video",this.playerContainer);t&&t!==this.videoTag&&(this.videoTag=t,this.videoTag.tabIndex=-1,this.videoTag.style.cursor="pointer",this.videoTag.playsInline=!0,p.Environment.isMobile||this.videoTag.setAttribute("aria-hidden","true"),p.Environment.isIProduct?p.Environment.isIPhone?(this.videoTag.controls=!0,e.addEvents(this.videoTag,e.eventTypes[e.eventTypes.touchstart],function(){n.playerOptions.lazyLoad&&!n.wrapperLoadCalled&&n.loadVideoWrapper(!0)})):e.addEvents(this.videoTag,e.eventTypes[e.eventTypes.touchstart],function(){n.videoTag.controls=!0}):e.addEvents(this.videoTag,e.eventTypes[e.eventTypes.click],this.onVideoPlayerClicked))},n.prototype.loadVideo=function(){var n=this;if(!this.locReady){setTimeout(function(){n.loadVideo()},50);return}if(!this.videoTag)return null;this.checkReplacedVideoTag();this.restoreSettings();this.bindEvents();this.videoMetadata&&this.videoMetadata.posterframeUrl&&!this.playerOptions.hidePosterFrame&&this.videoWrapper.setPosterFrame(this.videoMetadata.posterframeUrl);this.currentVideoFile=this.getVideoFileToPlay();this.currentVideoFile&&this.setVideoSrc(this.currentVideoFile);p.Environment.isMobile&&this.videoMetadata.ccFiles&&this.videoWrapper.addNativeClosedCaption(this.videoMetadata.ccFiles,s.ClosedCaptionTypes.VTT,this.localizationHelper);this.setupPlayerMenus();this.showControlsBasedOnState()},n.prototype.displayPreRollAndPlayContent=function(){var i=this,n,r,u;if(this.playerState===t.PlayerStates.Ended&&(this.reportEvent(k.PlayerEvents.Replay),this.updateState("ready")),!this.hasInteractivity){this.play();return}if(!this.interactiveTriggersHelper.isInteractivityJSONReady){setTimeout(function(){i.displayPreRollAndPlayContent()},50);return}if(n=this.videoWrapper,r="",!n.ampPlayer||!n.ampPlayer.techName||(r=n.ampPlayer.techName.toLowerCase()),r.indexOf("flash")>=0&&(u=e.selectFirstElementT(".f-video-player",this.playerContainer),this.playerState==="loading"||this.playerState==="init"||u.classList.contains("vjs-loading")||u.classList.contains("vjs-waiting"))){setTimeout(function(){i.displayPreRollAndPlayContent()},50);return}this.reportContentStart();this.interactiveTriggersHelper.displayPreRoll(function(){i.play()})},n.prototype.reportContentStart=function(){this.isFirstTimePlayed&&!this.isContentStartReported&&(this.isFirstTimePlayed=!1,this.isContentStartReported=!0,this.reportEvent(k.PlayerEvents.ContentStart))},n.prototype.bindEvents=function(){this.areMediaEventsBound||(this.areMediaEventsBound=!0,this.videoWrapper.bindVideoEvents(this.onMediaEvent),e.addEvents(this.videoComponent,"mousemove mouseout",this.onMouseEvent),e.addEvents(this.videoComponent,"keydown",this.onKeyboardEvent),e.addEvents(window,"onBeforeUnload",this.onBeforeUnload),this.addFullscreenEvents(),e.addEvents(this.ccOverlay,e.eventTypes[e.eventTypes.click],this.onVideoPlayerClicked),this.checkReplacedVideoTag(),e.addThrottledEvent(window,e.eventTypes.resize,this.onWindowResize))},n.prototype.unbindEvents=function(){e.removeEvents(this.videoComponent,"mousemove mouseout",this.onMouseEvent);e.removeEvents(this.videoComponent,"keydown",this.onKeyboardEvent);e.removeEvents(this.ccOverlay,e.eventTypes[e.eventTypes.click],this.onVideoPlayerClicked);e.removeEvents(window,"onBeforeUnload",this.onBeforeUnload);e.removeEvents(window,"resize",this.onWindowResize);this.removeFullscreenEvents()},n.prototype.setVideoSrc=function(n){var i,u,f,r,e,o;if(!!n&&!!n.url&&!!this.videoWrapper){if(this.updateState(t.PlayerStates.Loading),i=[n],u=this.getFallbackVideoFile(),u){for(f=!1,r=0,e=i;r<e.length;r++)if(o=e[r],o.url===u.url){f=!0;break}f||i.push(this.getFallbackVideoFile())}this.videoWrapper.setSource(i);this.setAutoPlayNeeded&&this.videoWrapper.setAutoPlay()}},n.prototype.reportEvent=function(n,t){var i=this.getReport(t),r,f,h,u,o,s;for(this.logMessage("Event reported : "+k.PlayerEvents[n]+" | data : "+JSON.stringify(i)),r=0,f=this.reporters;r<f.length;r++)h=f[r],h.reportEvent(n,i);for(e.customEvent(this.videoComponent,k.PlayerEvents[n],{detail:i}),u=0,o=this.playerEventCallbacks;u<o.length;u++)s=o[u],s&&s({name:k.PlayerEvents[n],data:i})},n.prototype.getVideoWrapper=function(){return this.playerOptions&&this.playerOptions.corePlayer==="nativeplayer"?new y.NativeVideoWrapper:this.playerOptions&&this.playerOptions.corePlayer==="hasplayer"?new a.HasPlayerVideoWrapper:this.playerOptions&&this.playerOptions.corePlayer==="hlsplayer"?new v.HlsPlayerVideoWrapper:this.playerOptions&&this.playerOptions.corePlayer==="amp"||this.useAdaptive?new l.AmpWrapper(this.playerOptions.useAMPVersion2):new c.Html5VideoWrapper},n.prototype.hideControlPanel=function(){!this.controlPanelTimer||(window.clearTimeout(this.controlPanelTimer),this.controlPanelTimer=0);this.areControlsVisible&&(p.Environment.useNativeControls?this.videoTag&&!this.playerOptions.lazyLoad&&this.wrapperLoadCalled&&(this.videoTag.controls=!1):!this.videoControlsContainer||e.hasClass(this.videoControlsContainer,n.hideControlsClass)||(this.screenManagerHelper.updateElementDisplay(this.controlsScreenManagerObject,!1),!this.ccOverlay||this.closedCaptions&&this.videoWrapper&&this.closedCaptions.updateCaptions(this.getPlayPosition().currentTime)),!this.videoControls||(this.videoControls.prepareToHide(),this.videoControls.hideControls()),this.areControlsVisible=!1)},n.prototype.showControlPanel=function(t){var r=this,i;(t===void 0&&(t=!0),this.playerOptions&&!this.playerOptions.controls||this.isTriggerShown())||this.playerOptions&&!this.playerOptions.showControlOnLoad&&this.showcontrolFirstTime||(!this.controlPanelTimer||(window.clearTimeout(this.controlPanelTimer),this.controlPanelTimer=0),this.areControlsVisible||(p.Environment.useNativeControls?this.videoTag&&(this.videoTag.controls=!0):!this.videoControlsContainer||e.hasClass(this.videoControlsContainer,n.showControlsClass)||(this.screenManagerHelper.updateElementDisplay(this.controlsScreenManagerObject,!0),!this.ccOverlay||this.closedCaptions&&this.videoWrapper&&this.closedCaptions.updateCaptions(this.getPlayPosition().currentTime),this.videoControls.resetSlidersWorkaround()),this.areControlsVisible=!0),i=null,i=this.playerOptions.controlPanelTimeout!==null?this.playerOptions.controlPanelTimeout:n.controlPanelTimeout,t&&(this.controlPanelTimer=window.setTimeout(function(){r.hideControlPanel()},i)))},n.prototype.stopMedia=function(n,i){this.logMessage("StopMedia invoked");this.firstByteTimer&&(window.clearTimeout(this.firstByteTimer),this.firstByteTimer=null);this.exitFullScreen();n&&(this.logMessage(i||n),this.updateState(t.PlayerStates.Stopped),this.displayErrorMessage({title:n}),this.reportEvent(k.PlayerEvents.ContentError,{errorType:"content:error",errorDesc:i||n,errorMessage:n}))},n.prototype.setNextCheckpoint=function(){var t=this.getPlayPosition(),n,i,r;if(t.endTime)for(n=0,i=nt.PlayerConfig.checkpoints;n<i.length;n++)if(r=i[n],Math.round(t.currentTime/t.endTime*100)<=r){this.nextCheckpoint=r;return}this.nextCheckpoint=null},n.prototype.getPlayPosition=function(){return this.videoWrapper?this.videoWrapper.getPlayPosition():{currentTime:0,startTime:0,endTime:0}},n.prototype.getBufferedDuration=function(){var n=0;try{n=this.videoWrapper&&this.videoWrapper.getBufferedDuration()}catch(t){this.reportEvent(k.PlayerEvents.PlayerError,{errorType:"getBufferedDuration",errorDesc:"GetBufferedDuration: "+t.message});throw t;}return n},n.prototype.addPlayerEventListener=function(n){this.playerEventCallbacks.indexOf(n)<0&&this.playerEventCallbacks.push(n)},n.prototype.removePlayerEventListener=function(n){var t=this.playerEventCallbacks.indexOf(n);t>=0&&this.playerEventCallbacks.splice(t,1)},n.prototype.stop=function(){if(this.seek(0),!!this.videoControls){this.pause();var n=this.getPlayPosition();this.videoControls.setPlayPosition({startTime:n&&n.startTime,endTime:n&&n.endTime,currentTime:n&&n.startTime})}this.closedCaptions&&this.closedCaptions.updateCaptions(0)},n.prototype.isPaused=function(){return!this.videoWrapper?!1:this.videoWrapper.isPaused()},n.prototype.isLive=function(){return this.videoWrapper&&this.videoWrapper.isLive()},n.prototype.isPlayable=function(){return!this.videoTag?!1:this.canPlay},n.prototype.play=function(){var n=this;if(this.playerState!==t.PlayerStates.Playing&&this.playerState!==t.PlayerStates.Error&&this.playerState!==t.PlayerStates.Stopped&&this.playerState!==t.PlayerStates.Init){if(this.reportEvent(k.PlayerEvents.Play),this.playerState===t.PlayerStates.Ended){!this.showEndImage||p.Environment.isIProduct||!this.endImage||this.endImage.container.setAttribute("aria-hidden","true");this.displayPreRollAndPlayContent();return}this.playerOptions.lazyLoad&&!this.wrapperLoadCalled?(this.playOnDataLoad=!1,this.loadVideoWrapper(!0)):(!this.videoWrapper||(p.Environment.isIProduct||p.Environment.isAndroidModern?this.videoWrapper.play():setTimeout(function(){n.videoWrapper.play()},0)),!this.videoControls||this.videoControls.updatePlayPauseState());this.triggerPlayPauseContainer&&(!this.playPauseButton||(e.removeClass(this.playPauseButton,"glyph-play"),e.addClass(this.playPauseButton,"glyph-pause"),this.playPauseButton.setAttribute("aria-label",this.locPause),e.setText(this.playPauseTooltip,this.locPause)))}},n.prototype.pause=function(n){!this.videoWrapper||this.videoWrapper.pause();this.triggerPlayPauseContainer&&(!this.playPauseButton||(e.removeClass(this.playPauseButton,"glyph-pause"),e.addClass(this.playPauseButton,"glyph-play"),p.Environment.isChrome?this.playPauseButton.setAttribute("aria-label",this.locPlay):this.setAriaLabelForButton(this.playPauseButton),e.setText(this.playPauseTooltip,this.locPlay)));!this.videoControls||this.videoControls.updatePlayPauseState();n&&this.reportEvent(k.PlayerEvents.Pause)},n.prototype.seek=function(t){if(f.isNumber(t)&&!!this.videoWrapper){var i=this.getPlayPosition();t=Math.max(i.startTime,Math.min(t,i.endTime));Math.abs(t-i.currentTime)>=n.positionUpdateThreshold&&(this.setNextCheckpoint(),this.seekFrom=i.currentTime,this.videoWrapper.setCurrentTime(t))}},n.prototype.getVolume=function(){return this.videoWrapper&&this.videoWrapper.getVolume()||0},n.prototype.setVolume=function(t,i){if(f.isNumber(t)&&!!this.videoWrapper){t=Math.round(Math.max(0,Math.min(t,1))*100)/100;var r=this.videoWrapper.getVolume();t!==r&&(this.lastVolume=r,this.videoWrapper.setVolume(t),this.lastVolume=t?t:this.lastVolume,i&&(f.saveToSessionStorage(n.volumePrefKey,Math.ceil(t*10).toString()),this.reportEvent(k.PlayerEvents.Volume)),this.isMuted()&&t>0&&this.unmute(i,!0),!this.videoControls||this.videoControls.updateVolumeState())}},n.prototype.isMuted=function(){return this.videoWrapper&&this.videoWrapper.isMuted()||this.isVideoMuted},n.prototype.mute=function(t){this.lastVolume=this.getVolume();this.setMuted(!0);t&&(f.saveToSessionStorage(n.mutePrefKey,"1"),this.reportEvent(k.PlayerEvents.Mute))},n.prototype.unmute=function(t,i){i||this.setVolume(this.lastVolume||nt.PlayerConfig.defaultVolume,!1);this.setMuted(!1);t&&(f.saveToSessionStorage(n.mutePrefKey,"0"),this.reportEvent(k.PlayerEvents.Unmute))},n.prototype.setMuted=function(n){!this.videoWrapper||n===this.videoWrapper.isMuted()||(n?this.videoWrapper.mute():this.videoWrapper.unmute());!this.videoControls||this.videoControls.updateVolumeState()},n.isNativeFullscreenEnabled=function(){var n=document;return n.fullscreenEnabled||n.mozFullScreenEnabled||n.webkitFullscreenEnabled||n.webkitSupportsFullscreen||n.msFullscreenEnabled},n.getElementInFullScreen=function(){var n=document;return n.fullscreenElement||n.mozFullScreenElement||n.webkitFullscreenElement||n.msFullscreenElement},n.prototype.getFullscreenContainer=function(){return p.Environment.useNativeControls?this.videoTag:this.playerContainer},n.prototype.enterFullScreen=function(){var t,i,r;n.isNativeFullscreenEnabled()&&(t=this.getFullscreenContainer(),i=n.getElementInFullScreen(),!t||i||(r=t.requestFullscreen||t.msRequestFullscreen||t.mozRequestFullScreen||t.webkitRequestFullscreen||t.webkitEnterFullScreen,r.call(t)))},n.prototype.exitFullScreen=function(){var i,r,t,u;n.isNativeFullscreenEnabled()&&(i=this.getFullscreenContainer(),r=n.getElementInFullScreen(),!i||i!==r||(t=document,u=t.cancelFullScreen||t.msExitFullscreen||t.mozCancelFullScreen||t.webkitCancelFullScreen,u.call(t)))},n.prototype.toggleFullScreen=function(){this.isInFullscreen?this.exitFullScreen():this.enterFullScreen()},n.prototype.isFullScreen=function(){return this.isInFullscreen},n.prototype.addFullscreenEvents=function(){e.addEvents(document,"fullscreenchange mozfullscreenchange webkitfullscreenchange MSFullscreenChange",this.onFullscreenChanged,!1);e.addEvents(document,"fullscreenerror mozfullscreenerror webkitfullscreenerror MSFullscreenError",this.onFullscreenError,!1);this.videoTag&&(e.addEvents(this.videoTag,"webkitbeginfullscreen",this.onIOSFullscreenEnter,!1),e.addEvents(this.videoTag,"webkitendfullscreen",this.onIOSFullscreenExit,!1))},n.prototype.removeFullscreenEvents=function(){e.removeEvents(document,"fullscreenchange mozfullscreenchange webkitfullscreenchange MSFullscreenChange",this.onFullscreenChanged,!1);e.removeEvents(document,"fullscreenerror mozfullscreenerror webkitfullscreenerror MSFullscreenError",this.onFullscreenError,!1);this.videoTag&&(e.removeEvents(this.videoTag,"webkitbeginfullscreen",this.onIOSFullscreenEnter,!1),e.removeEvents(this.videoTag,"webkitendfullscreen",this.onIOSFullscreenExit,!1))},n.prototype.onFullscreenEnter=function(){this.isInFullscreen=!0;this.videoControls&&(!this.interactiveTriggersHelper?this.resetFocusTrap():this.resetFocusTrap(this.interactiveTriggersHelper.findInteractivityFocusTrapStart()),this.videoControls.updateFullScreenState());this.reportEvent(k.PlayerEvents.FullScreenEnter)},n.prototype.onFullscreenExit=function(){this.isInFullscreen=!1;this.videoControls&&(this.videoControls.removeFocusTrap(),this.videoControls.updateFullScreenState());this.reportEvent(k.PlayerEvents.FullScreenExit)},n.prototype.resetFocusTrap=function(n){this.isFullScreen()&&(this.videoControls.removeFocusTrap(),n?this.videoControls.setFocusTrap(n):this.hasInteractivity?this.videoControls.setFocusTrap(n):this.videoControls.setFocusTrap(null))},n.prototype.initializeClosedCaptions=function(){this.ccOverlay=e.selectFirstElement(".f-video-cc-overlay",this.videoComponent);this.closedCaptions=new r.VideoClosedCaptions(this.ccOverlay,this.onErrorCallback);this.closedCaptionsSettings=new u.VideoClosedCaptionsSettings(this.onErrorCallback);this.ccScreenManagerObject={HtmlObject:this.ccOverlay,Height:0,Id:null,IsVisible:!1,Priority:0,Transition:null};this.screenManagerHelper.registerElement(this.ccScreenManagerObject)},n.prototype.onPlayerMenuItemClick=function(n){if(n&&n.category)switch(n.category){case ht.ClosedCaption:this.setCC(n.id,!0);break;case ht.ClosedCaptionSettings:this.setCCSettings(n);break;case ht.Quality:this.setQuality(n.id);break;case ht.AudioTracks:this.setAudio(n.id);break;case ht.Share:this.shareVideo(n);break;case ht.PlaybackSpeed:this.setPlaybackRate(n.id,!0);break;case ht.Download:this.downloadMedia(n)}},n.prototype.onPlayerContextMenuItemClick=function(n){if(n&&n.category){switch(n.category){case ct.PlayPause:this.isPaused()?this.play():this.pause(!0);break;case ct.MuteUnMute:this.isMuted()?this.unmute(!0):this.mute(!0)}this.customizedContextMenu.setAttribute("aria-hidden","true")}},n.prototype.setCC=function(t,i){var u,e,o,r,h;if(this.closedCaptions){if(t=this.removeIdPrefix(t),u=null,t&&this.videoMetadata&&this.videoMetadata.ccFiles)for(e=0,o=this.videoMetadata.ccFiles;e<o.length;e++)if(r=o[e],r.locale===t&&(!r.ccType||r.ccType===s.ClosedCaptionTypes.TTML)){u=r;break}h=this.closedCaptions.getCurrentCcLanguage();this.closedCaptions.setCcLanguage(t,u?u.url:null);i&&f.saveToSessionStorage(n.ccLangPrefKey,t);t==="off"?this.screenManagerHelper.updateElementDisplay(this.ccScreenManagerObject,!1):this.screenManagerHelper.updateElementDisplay(this.ccScreenManagerObject,!0);this.reportEvent(k.PlayerEvents.ClosedCaptionsChanged,{startcaptionselection:h,endCaptionSelection:t})}},n.prototype.setCCSettings=function(n){var i,t,r;if(this.videoControls&&this.closedCaptions&&this.closedCaptionsSettings&&n&&n.data){if(n.data==="reset")this.closedCaptionsSettings.reset();else{if(i=n.data.split(":"),!i&&i.length<0)return;this.closedCaptionsSettings.setSetting(i[0],i[1])}if(this.closedCaptions.resetCaptions(),this.closedCaptions.updateCaptions(this.getPlayPosition().currentTime),t=this.closedCaptionsSettings.getCurrentSettings(),t){for(r in t)t.hasOwnProperty(r)&&this.videoControls.updateMenuSelection(this.getCCSettingsMenuId(r),this.getCCMenuItemId(r,t[r]));t[u.VideoClosedCaptionsSettings.presetKey]||this.videoControls.updateMenuSelection(this.getCCSettingsMenuId(u.VideoClosedCaptionsSettings.presetKey))}this.reportEvent(k.PlayerEvents.ClosedCaptionSettingsChanged,{closedCaptionSettings:n.data})}},n.prototype.setPlaybackRate=function(t,i){if(t=this.removeIdPrefix(t),t&&this.videoWrapper){var u="rate",r=u&&o.startsWith(t,u,!1)?t.substring(u.length):t;r&&(this.videoWrapper.setPlaybackRate(+r),i&&f.saveToSessionStorage(n.playbackRatePrefKey,r),this.reportEvent(k.PlayerEvents.PlaybackRateChanged,{playbackRate:r}))}},n.prototype.setQuality=function(t){var u,i,o,h;if(t=this.removeIdPrefix(t),t){var e=s.MediaQuality[t],c=this.currentMediaQuality,r=this.getVideoFileToPlay(e),l=this.videoWrapper.getCurrentVideoTrack();if(r&&r.url)this.currentVideoFile=r,f.saveToSessionStorage(n.qualityPrefKey,t),this.playOnDataLoad=!this.isPaused(),this.startTimeOnDataLoad=this.getPlayPosition().currentTime,this.setVideoSrc(r),this.reportEvent(k.PlayerEvents.VideoQualityChanged,{startRes:c,endRes:e});else{if(u=t.match(/video-(\d+)/),!u||u.length<2)return;i=parseInt(u[1],10);i!==NaN&&i>=0&&(o=l.auto?"auto":this.videoWrapper.getVideoTracks()[this.videoWrapper.getCurrentVideoTrack().trackIndex].bitrate,this.videoWrapper.switchToVideoTrack(i),h=t==="auto"?"auto":this.videoWrapper.getVideoTracks()[i].bitrate,this.reportEvent(k.PlayerEvents.VideoQualityChanged,{startRes:o,endRes:h}))}}},n.prototype.setAudio=function(n){var i,t;if((n=this.removeIdPrefix(n),n)&&(i=n.match(/audio-(\d+)/),i&&!(i.length<2))&&(t=parseInt(i[1],10),t!==NaN&&t>=0&&!!this.isAudioTracksDoneSwitching)){var r=this.videoWrapper.getAudioTracks(),u=this.videoWrapper.getCurrentAudioTrack(),f=!r[u]?null:r[u].title,e=!r[t]?null:r[t].title;this.isAudioTracksDoneSwitching=!1;this.videoWrapper.switchToAudioTrack(t);this.reportEvent(k.PlayerEvents.AudioTrackChanged,{startTrackSelection:f,endTrackSelection:e})}},n.prototype.shareVideo=function(n){var i=this,t;if(n&&n.id&&(t=this.removeIdPrefix(n.id),t&&n.data)){this.reportEvent(k.PlayerEvents.VideoShared,{videoShare:t});switch(t){case it.shareTypes.copy:tt.SharingHelper.tryCopyTextToClipboard(decodeURIComponent(n.data));setTimeout(function(){i.setFocusOnOptionsButton()},100);break;case it.shareTypes.mail:window.location.href=n.data;break;default:window.open(n.data,"_blank")}}},n.prototype.downloadMedia=function(n){if(n&&n.data){window.open(n.data,"_blank");var t=n.id.indexOf("transcript")!==-1?"transcript":"video";this.reportEvent(k.PlayerEvents.MediaDownloaded,{downloadType:t,downloadMedia:n.data.toString()})}},n.prototype.addIdPrefix=function(n){var t=this.videoComponent&&this.videoComponent.id?this.videoComponent.id+"-":null;return t&&!o.startsWith(n,t,!1)?t+n:n},n.prototype.removeIdPrefix=function(n){var t=this.videoComponent&&this.videoComponent.id?this.videoComponent.id+"-":null;return t&&o.startsWith(n,t,!1)?n.substring(t.length):n},n.prototype.setFocusOnVideoContainerEdge=function(){var n=this;p.Environment.isEdgeBrowser&&!this.videoElementIsFocus&&(this.videoElementIsFocus=!0,this.playerContainer.setAttribute("tabindex","0"),setTimeout(function(){return n.playerContainer.focus()},100))},n.prototype.showTrigger=function(){!this.triggerContainer||(this.triggerContainer.setAttribute("aria-hidden","false"),e.addEvents(this.triggerContainer,"click keyup",this.triggerContainerEventHandler,!0),p.Environment.isEdgeBrowser&&this.playerContainer.setAttribute("tabindex","-1"));this.playerOptions&&this.playerOptions.controls&&this.videoControlsContainer&&!p.Environment.useNativeControls&&this.videoControlsContainer.setAttribute("aria-hidden","true")},n.prototype.hideTrigger=function(){!this.triggerContainer||(this.triggerContainer.setAttribute("aria-hidden","true"),this.setFocusOnVideoContainerEdge());this.playerOptions&&this.playerOptions.controls&&this.videoControlsContainer&&!p.Environment.useNativeControls&&this.videoControlsContainer.setAttribute("aria-hidden","false")},n.prototype.showPlayPauseTrigger=function(n){!this.triggerPlayPauseContainer||(n?(e.removeClass(this.playPauseButton,"f-play-pause-hide"),e.addClass(this.playPauseButton,"f-play-pause-show")):(e.addClass(this.playPauseButton,"f-play-pause-hide"),e.removeClass(this.playPauseButton,"f-play-pause-show")))},n.prototype.disablePlayPauseTrigger=function(){!this.triggerPlayPauseContainer||e.removeClass(this.triggerPlayPauseContainer,"f-play-pause-trigger")},n.prototype.isTriggerShown=function(){return this.triggerContainer&&this.triggerContainer.getAttribute("aria-hidden")==="false"},n.prototype.setTriggerProperties=function(){if(this.localizationHelper&&this.trigger){var n=this.localizationHelper.getLocalizedValue(g.playerLocKeys.play),t=this.localizationHelper.getLocalizedValue(g.playerLocKeys.play_video);this.setAriaLabelForButton(this.trigger,t);e.setText(this.triggerTooltip,n)}},n.prototype.displayErrorMessage=function(n){if(n&&(n.title||n.message)){if(this.errorMessageDisplayed=!0,!this.errorMessage){this.errorMessage={};this.errorMessage.container=document.createElement("div");var t=document.createElement("div");this.errorMessage.title=document.createElement("p");this.errorMessage.message=document.createElement("p");this.errorMessage.container.setAttribute("role","status");this.errorMessage.container.setAttribute("class","f-error-message");this.errorMessage.title.setAttribute("class","c-heading");this.errorMessage.message.setAttribute("class","c-paragraph");!n.title||e.setText(this.errorMessage.title,n.title);!n.message||e.setText(this.errorMessage.message,n.message);this.errorMessage.container.appendChild(t);!n.title||t.appendChild(this.errorMessage.title);t.appendChild(this.errorMessage.message);this.playerContainer.appendChild(this.errorMessage.container)}else e.setText(this.errorMessage.title,n.title||""),e.setText(this.errorMessage.message,n.message||""),this.errorMessage.container.setAttribute("aria-hidden","false");this.updateScreenReaderElement(n.title,!0);this.hideTrigger()}},n.prototype.displayImage=function(n){var i,t;n||(n=this.videoMetadata.posterframeUrl);this.endImage?(i=e.selectFirstElement(".f-post-image",this.endImage.container),i.setAttribute("src",n),this.endImage.container.setAttribute("aria-hidden","false")):(this.endImage={},this.endImage.container=document.createElement("div"),this.endImage.container.setAttribute("class","f-end-poster-image"),this.endImage.container.setAttribute("aria-hidden","false"),this.endImage.container.setAttribute("role","none"),t=document.createElement("img"),t.setAttribute("src",n),t.setAttribute("class","f-post-image"),t.setAttribute("height","auto"),t.setAttribute("width","100%"),t.setAttribute("role","none"),this.endImage.container.appendChild(t),this.playerContainer.appendChild(this.endImage.container))},n.prototype.hideImage=function(){!this.endImage||this.endImage.container.setAttribute("aria-hidden","true")},n.prototype.hideErrorMessage=function(){!this.errorMessage||!this.errorMessage.container||(this.errorMessage.container.setAttribute("aria-hidden","true"),this.errorMessageDisplayed=!1)},n.prototype.showPosterImage=function(n){this.wrapperLoadCalled||(this.showingPosterImage=!0,this.posterImageUrl=n,this.loadVideoWrapper(!1))},n.prototype.resize=function(){!this.videoControls||(this.videoControls.resetSlidersWorkaround(),this.videoControls.updateReactiveControlDisplay(),this.onWindowResize())},n.prototype.getDefaultMediaQuality=function(){var i=f.getValueFromSessionStorage(n.qualityPrefKey),t=null;return i&&(t=s.MediaQuality[i]),t||(t=p.Environment.isMobile?nt.PlayerConfig.defaultQualityMobile:p.Environment.isTV?nt.PlayerConfig.defaultQualityTV:nt.PlayerConfig.defaultQualityDesktop),t},n.prototype.getVideoFileforDownload=function(){return this.getVideoFileByQuality(s.MediaQuality.HQ)||this.getVideoFileByType(s.MediaTypes.MP4)},n.prototype.getVideoFileByQuality=function(n){var u=null,t,i,r;if(n&&this.videoMetadata&&this.videoMetadata.videoFiles)for(t=0,i=this.videoMetadata.videoFiles;t<i.length;t++)if(r=i[t],r.quality===n){u=r;break}return u},n.prototype.getVideoFileByType=function(n){var u=null,t,i,r;if(n&&this.videoMetadata&&this.videoMetadata.videoFiles)for(t=0,i=this.videoMetadata.videoFiles;t<i.length;t++)if(r=i[t],r.mediaType===n){u=r;break}return u},n.prototype.getVideoFileToPlay=function(n){var r=n||this.getDefaultMediaQuality(),t,i;return this.currentMediaQuality=r,i=!1,this.hasHLS&&this.playerOptions&&this.playerOptions.useHLS&&this.playerOptions.corePlayer==="hlsplayer"&&(t=this.getVideoFileByType(s.MediaTypes.HLS),t&&t.url&&(i=!0)),i||!this.playerOptions||this.useAdaptive||(t=this.getVideoFileByQuality(r),t&&t.url&&(i=!0)),i||this.currentVideoFile||(this.useAdaptive&&(t=this.getVideoFileByType(s.MediaTypes.DASH)||this.getVideoFileByType(s.MediaTypes.SMOOTH),t&&t.url&&(i=!0)),i||(t=this.getVideoFileByType(s.MediaTypes.MP4))),t},n.prototype.getFallbackVideoFile=function(){return this.getVideoFileByQuality(s.MediaQuality.HQ)||this.getVideoFileByType(s.MediaTypes.MP4)},n.prototype.updateState=function(n){if(n&&n!==this.playerState&&this.playerState!==t.PlayerStates.Error){this.playerState=n;this.logMessage("Player state updated. New state: "+n);var i=null;switch(this.playerState){case t.PlayerStates.Loading:i=k.PlaybackStatus.VideoOpening;this.stopwatchLoading.start();break;case t.PlayerStates.Playing:i=k.PlaybackStatus.VideoPlaying;this.stopwatchPlaying.start();this.currentVideoStopwatchPlaying.start();this.stopwatchBuffering.stop();this.stopwatchLoading.stop();this.isBuffering&&this.stopwatchBuffering.getValue()&&(this.isBuffering=!1,this.reportEvent(k.PlayerEvents.BufferComplete));break;case t.PlayerStates.Paused:i=k.PlaybackStatus.VideoPaused;this.stopwatchPlaying.stop();this.currentVideoStopwatchPlaying.stop();this.stopwatchLoading.stop();break;case t.PlayerStates.Buffering:i=k.PlaybackStatus.VideoPlaying;this.stopwatchBuffering.start();this.isBuffering=!0;break;case t.PlayerStates.Seeking:this.stopwatchLoading.stop();break;case t.PlayerStates.Ended:i=k.PlaybackStatus.VideoPlayCompleted;this.stopwatchPlaying.stop();this.currentVideoStopwatchPlaying.reset();this.showEndImage&&!p.Environment.isIProduct&&(this.displayImage(this.videoMetadata.posterframeUrl),this.showTrigger());this.triggerPlayPauseContainer&&(!this.playPauseButton||(e.removeClass(this.playPauseButton,"glyph-pause"),e.addClass(this.playPauseButton,"glyph-play"),this.setAriaLabelForButton(this.playPauseButton),e.setText(this.playPauseTooltip,this.locPlay)));break;case t.PlayerStates.Error:i=k.PlaybackStatus.VideoPlayFailed;this.stopwatchBuffering.reset();this.stopwatchLoading.stop();this.stopwatchPlaying.reset();this.currentVideoStopwatchPlaying.reset()}!this.videoControls||(this.videoControls.updatePlayPauseState(),this.videoControls.updateVolumeState());this.setPlaybackStatus(i);this.showControlsBasedOnState();this.showSpinnerBasedOnState()}},n.prototype.setPlaybackStatus=function(n){n&&this.playbackStatus!==n&&(this.playbackStatus=n,this.reportEvent(k.PlayerEvents.PlaybackStatusChanged,{status:n}))},n.prototype.setSpinnerProperties=function(){this.localizationHelper&&this.spinner&&(this.spinner.setAttribute("aria-label",this.localizationHelper.getLocalizedValue(g.playerLocKeys.loading_aria_label)),this.spinner.setAttribute("aria-valuetext",this.localizationHelper.getLocalizedValue(g.playerLocKeys.loading_value_text)))},n.prototype.showSpinner=function(){this.spinner&&!this.isTriggerShown()&&this.spinner.setAttribute("aria-hidden","false")},n.prototype.hideSpinner=function(){this.spinner&&this.spinner.setAttribute("aria-hidden","true")},n.prototype.showSpinnerBasedOnState=function(){if(!!this.ageGateHelper&&!!this.ageGateHelper.ageGateIsDisplayed){this.hideSpinner();return}switch(this.playerState){case t.PlayerStates.Ready:case t.PlayerStates.Playing:case t.PlayerStates.Paused:case t.PlayerStates.Ended:case t.PlayerStates.Stopped:case t.PlayerStates.Error:this.hideSpinner();break;case t.PlayerStates.PlayerLoaded:p.Environment.isIPhone?this.hideSpinner():this.showSpinner();break;default:this.showSpinner()}},n.prototype.showControlsBasedOnState=function(){switch(this.playerState){case t.PlayerStates.Loading:case t.PlayerStates.Init:case t.PlayerStates.Error:this.hideControlPanel();break;case t.PlayerStates.Ended:this.showEndImage&&!p.Environment.isIProduct?this.hideControlPanel():this.showControlPanel(!1);break;case t.PlayerStates.Ready:case t.PlayerStates.Paused:case t.PlayerStates.Stopped:this.showControlPanel(!1);break;default:this.showControlPanel(!0)}},n.prototype.updateScreenReaderElement=function(n,t){t===void 0&&(t=!0);!this.screenReaderElement||this.screenReaderElement.innerText===n||p.Environment.isChrome&&!t||(this.screenReaderElement.innerText=n)},n.prototype.setFocusOnPlayButton=function(){this.videoControls&&this.videoControls.setFocusonPlayButton()},n.prototype.setFocusOnOptionsButton=function(){this.videoControls&&this.videoControls.setFocusonOptionsButton()},n.prototype.getVideoTitle=function(){return this.videoMetadata?this.videoMetadata.title:""},n.prototype.getReport=function(n){var t=this.getPlayPosition().endTime;return{playerInstanceId:this.playerId,playerTechnology:this.playerTechnology,playerType:this.videoWrapper&&this.videoWrapper.getPlayerTechName(),playbackStatus:k.PlaybackStatus[this.playbackStatus],totalBufferWaitTime:this.stopwatchBuffering&&this.stopwatchBuffering.getValue(),bufferCount:this.stopwatchBuffering&&this.stopwatchBuffering.getIntervals(),errorType:n&&n.errorType,errorDesc:n&&n.errorDesc,loadTime:this.stopwatchLoading&&this.stopwatchLoading.getFirstValue(),numPlayed:this.stopwatchLoading&&this.stopwatchLoading.getIntervals(),videoDuration:t,videoElapsedTime:this.getPlayPosition().currentTime,seekFrom:n&&n.seekFrom,seekTo:n&&n.seekTo,videoLength:t*1e3,videoSize:f.getDimensions(this.playerContainer),totalTimePlaying:this.stopwatchPlaying&&this.stopwatchPlaying.getTotalValue(),currentVideoTotalTimePlaying:this.currentVideoStopwatchPlaying&&this.currentVideoStopwatchPlaying.getTotalValue(),currentInterval:this.stopwatchPlaying&&this.stopwatchPlaying.getValue(),eventCheckpointInterval:nt.PlayerConfig.eventCheckpointInterval,checkpoint:n&&n.checkpoint,checkpointType:n&&n.checkpointType,currentVideoFile:this.currentVideoFile,videoMetadata:this.videoMetadata,playerOptions:this.playerOptions,interactiveTriggerAndOverlay:n&&n.interactiveTriggerAndOverlay,videoShare:n&&n.videoShare,closedCaptions:n&&n.closedCaptions,closedCaptionSettings:n&&n.closedCaptionSettings,playbackRate:n&&n.playbackRate,downloadMedia:n&&n.downloadMedia,downloadType:n&&n.downloadType,audioTrack:n&&n.audioTrack,ageGatePassed:n&&n.ageGatePassed,live:this.isLive(),lastVolume:n&&n.lastVolume,newVolume:n&&n.newVolume,startRes:n&&n.startRes,endRes:n&&n.endRes,startTrackSelection:n&&n.startTrackSelection,endTrackSelection:n&&n.endTrackSelection,startCaptionSelection:n&&n.startCaptionSelection,endCaptionSelection:n&&n.endCaptionSelection}},n.prototype.logMessage=function(n){this.playerOptions&&this.playerOptions.debug&&n&&b.PlayerUtility.logConsoleMessage(n,"Core-Player : "+this.videoComponent.id)},n.prototype.showElement=function(n){n&&n.setAttribute("aria-hidden","false")},n.prototype.hideElement=function(n){n&&n.setAttribute("aria-hidden","true")},n.playerContainerSelector=".f-core-player",n.showControlsClass="f-slidein",n.hideControlsClass="f-slideout",n.fitControlsClass="f-overlay-slidein",n.volumePrefKey="vidvol",n.mutePrefKey="vidmut",n.qualityPrefKey="vidqlt",n.ccLangPrefKey="vidccpref",n.playbackRatePrefKey="vidrate",n.positionUpdateThreshold=.1,n.controlPanelTimeout=6500,n}();t.CorePlayer=at});define("base-reporter",["require","exports","player-constants","player-utility","utility"],function(n,t,i,r,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var f=[i.videoPerfMarkers.playerInit,i.videoPerfMarkers.playerLoadStart,i.videoPerfMarkers.locLoadStart,i.videoPerfMarkers.locReady,i.videoPerfMarkers.metadataFetchStart,i.videoPerfMarkers.metadataFetchEnd,i.videoPerfMarkers.wrapperLoadStart,i.videoPerfMarkers.wrapperReady,i.videoPerfMarkers.playerReady,i.videoPerfMarkers.playTriggered,i.videoPerfMarkers.ttvs],e=function(){function n(n){if(this.videoComponent=n,this.isDebugMode=!1,!n){console.log("base-reporter: video component is null");return}this.playerId=n.getAttribute("id");this.isDebugMode=n.getAttribute("data-debug")==="true"}return n.prototype.reportEvent=function(n,t){if(n)switch(n){case i.PlayerEvents.CommonPlayerImpression:r.PlayerUtility.createVideoPerfMarker(this.playerId,i.videoPerfMarkers.playerReady);this.onCommonPlayerImpression(t);break;case i.PlayerEvents.Replay:this.onReplay(t);break;case i.PlayerEvents.BufferComplete:this.onBufferComplete(t);break;case i.PlayerEvents.ContentStart:r.PlayerUtility.createVideoPerfMarker(this.playerId,i.videoPerfMarkers.ttvs);this.onContentStart(t);break;case i.PlayerEvents.ContentError:this.onContentError(t);break;case i.PlayerEvents.ContentComplete:this.onContentComplete(t);break;case i.PlayerEvents.ContentCheckpoint:this.onContentCheckpoint(t);break;case i.PlayerEvents.ContentLoaded3PP:this.on3ppVideoLoaded(t);break;case i.PlayerEvents.Pause:this.onPause(t);break;case i.PlayerEvents.Resume:this.onResume(t);break;case i.PlayerEvents.Seek:this.onSeek(t);break;case i.PlayerEvents.VideoQualityChanged:this.onVideoQualityChanged(t);break;case i.PlayerEvents.Mute:this.onMute(t);break;case i.PlayerEvents.Unmute:this.onUnmute(t);break;case i.PlayerEvents.FullScreenEnter:this.onFullScreenEnter(t);break;case i.PlayerEvents.FullScreenExit:this.onFullScreenExit(t);break;case i.PlayerEvents.InteractiveOverlayClick:this.onInteractiveOverlayClick(t);break;case i.PlayerEvents.InteractiveOverlayShow:this.onInteractiveOverlayShow(t);break;case i.PlayerEvents.InteractiveOverlayHide:this.onInteractiveOverlayHide(t);break;case i.PlayerEvents.InteractiveOverlayMaximize:this.onInteractiveOverlayMaximize(t);break;case i.PlayerEvents.InteractiveOverlayMinimize:this.onInteractiveOverlayMinimize(t);break;case i.PlayerEvents.InteractiveBackButtonClick:this.onInteractiveBackButtonClick(t);break;case i.PlayerEvents.PlayerError:this.onPlayerErrors(t);break;case i.PlayerEvents.VideoShared:this.onVideoShared(t);break;case i.PlayerEvents.ClosedCaptionsChanged:this.onClosedCaptionsChanged(t);break;case i.PlayerEvents.ClosedCaptionSettingsChanged:this.onClosedCaptionSettingsChanged(t);break;case i.PlayerEvents.PlaybackRateChanged:this.onPlaybackRateChanged(t);break;case i.PlayerEvents.MediaDownloaded:this.onMediaDownloaded(t);break;case i.PlayerEvents.AudioTrackChanged:this.onAudioTrackChanged(t);break;case i.PlayerEvents.AgeGateSubmitClick:this.onAgeGateSubmitClick(t);break;case i.PlayerEvents.Volume:this.onVolumeChanged(t)}},n.prototype.getPerfMarkers=function(){var t={},h=u.getPerfMarkerValue(i.videoPerfMarkers.scriptLoaded),n,e,o,s;for(h&&(t["p."+i.videoPerfMarkers.scriptLoaded]=h),n=0,e=f;n<e.length;n++)o=e[n],s=r.PlayerUtility.getVideoPerfMarker(this.playerId,o),s&&(t["p."+o]=s);return t},n.prototype.log=function(n,t){t===void 0&&(t="Reporter");this.isDebugMode&&r.PlayerUtility.logConsoleMessage(n,t)},n}();t.BaseReporter=e});__extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}();define("jsll-reporter",["require","exports","base-reporter","utility","environment"],function(n,t,i,r,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var f=function(n){function t(t,i){var f=n.call(this,t)||this,e;return f.postJsllMsg=!1,f.playerIdfromUrl=null,e=r.getQSPValue("postJsllMsg",!1),e&&u.Environment.isInIframe&&i&&(f.postJsllMsg=!0,f.playerIdfromUrl=r.getQSPValue("pid",!1)),f}return __extends(t,n),t.prototype.doPing=function(n,t,i,u){var f=this.getDefaultParams(n,i),e;r.extend(f,u);this.log("jsll - t: "+f.t+" behavior : "+t+" data : "+JSON.stringify(f));e={vidnm:"",vidid:"",vidpct:0,vidpctwtchd:0,vidwt:0,viddur:0,vidtimeseconds:0,sessiontimeseconds:0,live:!1,parentpage:"",containerName:"oneplayer",dlid:"",dltype:"",socchn:"",name:"",id:""};this.populateContentTags(e,n,u);var h={videoObj:f},s={behavior:t,actionType:"O",pageTags:h,contentTags:e},o=window;try{this.postJsllMsg?window.parent.postMessage(JSON.stringify({eventName:"postjsllmessage",playerId:this.playerIdfromUrl,data:s}),"*"):o.awa&&o.awa.ct&&o.awa.ct.captureContentPageAction(s)}catch(c){this.log("jsll logger threw exception : "+c)}},t.prototype.populateContentTags=function(n,t,i){n.vidnm=t.videoMetadata&&t.videoMetadata.title;n.vidid=t.videoMetadata&&t.videoMetadata.videoId;n.live=t.live;var u=t.videoDuration,f=t.videoElapsedTime,e=t.currentVideoTotalTimePlaying/1e3,h=t.totalTimePlaying/1e3,o=0,s=0;u&&r.isNumber(u)&&f&&r.isNumber(f)&&(o=Math.round(f/u*100),o=Math.min(o,100));u&&r.isNumber(u)&&e&&r.isNumber(e)&&(s=Math.round(e/u*100),s=Math.min(s,100));n.viddur=Math.round(u);n.vidwt=Math.round(f);n.vidtimeseconds=Math.round(e);n.sessiontimeseconds=Math.round(h);n.vidpct=o;n.vidpctwtchd=s;n.parentpage=parent!==window?document.referrer:window.location.href;n.name=i&&i.interactiveOverlayAndTrigger&&i.interactiveOverlayAndTrigger.overlay.friendlyName;n.id=i&&i.interactiveOverlayAndTrigger&&i.interactiveOverlayAndTrigger.trigger.triggerId;n.dlid=i&&i.downloadMedia;n.dltype=i&&i.downloadType;n.socchn=i&&i.socchn},t.prototype.getDefaultParams=function(n,t){var i={};return t&&r.extend(i,t),n&&(r.extend(i,{d:n.videoDuration,piid:n.playerInstanceId,plt:n.playerType,ptech:n.playerTechnology,size:n.videoSize?n.videoSize.width+"x"+n.videoSize.height:null,vt:n.playerType,te:n.videoElapsedTime}),n.currentVideoFile&&r.extend(i,{vfc:n.currentVideoFile.formatCode,vfile:n.currentVideoFile.url,vmedia:n.currentVideoFile.mediaType,vQuality:n.currentVideoFile.quality}),n.playerOptions&&r.extend(i,{isAutoplay:n.playerOptions.autoplay,playerOptions:n.playerOptions}),n.videoMetadata&&r.extend(i,{eid:n.videoMetadata.videoId,vtitle:n.videoMetadata.title,vmetadata:n.videoMetadata})),i},t.prototype.onCommonPlayerImpression=function(n){this.log("jsll - OnCommonPlayerImpression()");var i=window.awa?window.awa.behavior.VIDEOPLAYERLOAD:null;this.doPing(n,i,t.usageCounters.commonPlayerImpression,this.getPerfMarkers())},t.prototype.onBufferComplete=function(n){this.log("jsll - OnBufferComplete()");var i=window.awa?window.awa.behavior.VIDEOBUFFERING:null;this.doPing(n,i,t.usageCounters.contentBuffering,{bd:n.totalBufferWaitTime})},t.prototype.onContentStart=function(n){this.log("jsll - OnContentStart()");var i=window.awa?window.awa.behavior.VIDEOSTART:null;this.doPing(n,i,t.usageCounters.contentStart,this.getPerfMarkers())},t.prototype.onContentCheckpoint=function(n){this.log("jsll - OnContentCheckpoint()");var t=window.awa?window.awa.behavior.VIDEOCHECKPOINT:null;this.doPing(n,t,null,{cp:n.checkpoint,checkpointtype:n.checkpointType})},t.prototype.onContentComplete=function(n){this.log("jsll - OnContentComplete()");var i=window.awa?window.awa.behavior.VIDEOCOMPLETE:null;this.doPing(n,i,t.usageCounters.contentComplete)},t.prototype.onContentError=function(n){this.log("jsll - OnContentError()");var i={fi:n.currentVideoFile&&n.currentVideoFile.url,et:n.errorType,etd:n.errorDesc},r=window.awa?window.awa.behavior.VIDEOERROR:null;this.doPing(n,r,t.usageCounters.contentError,i)},t.prototype.onMute=function(n){this.log("jsll - OnMute()");var i=window.awa?window.awa.behavior.VIDEOMUTE:null;this.doPing(n,i,t.usageCounters.mute)},t.prototype.onUnmute=function(n){this.log("jsll - OnMute()");var i=window.awa?window.awa.behavior.VIDEOUNMUTE:null;this.doPing(n,i,t.usageCounters.unmute)},t.prototype.onVolumeChanged=function(n){this.log("jsll - onVolumeChange()");var t=window.awa?window.awa.behavior.VIDEOVOLUMECONTROL:null;this.doPing(n,t,null,{startvol:n.lastVolume,endvol:n.newVolume})},t.prototype.onPause=function(n){this.log("jsll - OnPause()");var i=window.awa?window.awa.behavior.VIDEOPAUSE:null;this.doPing(n,i,t.usageCounters.pause)},t.prototype.onSeek=function(n){if(n.seekFrom!==n.seekTo){this.log("jsll - OnSeek()");var i=window.awa?window.awa.behavior.VIDEOJUMP:null;this.doPing(n,i,t.usageCounters.seek,{te:n.seekFrom,st:n.seekTo,startloc:n.seekFrom,endloc:n.seekTo})}},t.prototype.onVideoQualityChanged=function(n){this.log("jsll - OnVideoQualityChanged()");var i=window.awa?window.awa.behavior.VIDEORESOLUTIONCONTROL:null;this.doPing(n,i,t.usageCounters.videoQuality,{q:n.endRes,startres:n.startRes,endres:n.endRes})},t.prototype.onFullScreenEnter=function(n){this.log("jsll - OnFullScreenEnter()");var i=window.awa?window.awa.behavior.VIDEOFULLSCREEN:null;this.doPing(n,i,t.usageCounters.fullScreenEnter)},t.prototype.onFullScreenExit=function(n){this.log("jsll - OnFullScreenExit()");var i=window.awa?window.awa.behavior.VIDEOUNFULLSCREEN:null;this.doPing(n,i,t.usageCounters.fullScreenExit)},t.prototype.onReplay=function(n){this.log("jsll - OnReplay()");var i=window.awa?window.awa.behavior.VIDEOREPLAY:null;this.doPing(n,i,t.usageCounters.replay)},t.prototype.onResume=function(n){this.log("jsll - OnResume()");var i=window.awa?window.awa.behavior.VIDEOCONTINUE:null;this.doPing(n,i,null,t.usageCounters.resume)},t.prototype.on3ppVideoLoaded=function(n){this.log("jsll - On3ppVideoLoaded()");this.doPing(n,null,t.usageCounters.contentImpression3PP)},t.prototype.onInteractiveOverlayClick=function(n){this.log("jsll - onInteractiveTriggerClick");var i=window.awa?window.awa.behavior.VIDEOLAYERCLICK:null;this.doPing(n,i,t.usageCounters.overlayClick,{interactiveOverlayAndTrigger:n.interactiveTriggerAndOverlay})},t.prototype.onInteractiveBackButtonClick=function(n){this.log("jsll - onInteractiveTriggerClick");var i=window.awa?window.awa.behavior.BACKBUTTON:null;this.doPing(n,i,t.usageCounters.streamLinkBackButtonClick)},t.prototype.onInteractiveOverlayShow=function(n){this.log("jsll - onInteractiveOverlayShow");var i=window.awa?window.awa.behavior.SHOW:null;this.doPing(n,i,t.usageCounters.overlayShow,{interactiveOverlayAndTrigger:n.interactiveTriggerAndOverlay})},t.prototype.onInteractiveOverlayHide=function(n){this.log("jsll - onInteractiveOverlayHide");var i=window.awa?window.awa.behavior.HIDE:null;this.doPing(n,i,t.usageCounters.overlayHide,{interactiveOverlayAndTrigger:n.interactiveTriggerAndOverlay})},t.prototype.onInteractiveOverlayMaximize=function(n){this.log("jsll - onInteractiveOverlayMaximize");var i=window.awa?window.awa.behavior.MAXIMIZE:null;this.doPing(n,i,t.usageCounters.maximizeOverlay,{interactiveOverlayAndTrigger:n.interactiveTriggerAndOverlay})},t.prototype.onInteractiveOverlayMinimize=function(n){this.log("jsll - onInteractiveOverlayMinimize");var i=window.awa?window.awa.behavior.MINIMIZE:null;this.doPing(n,i,t.usageCounters.minimizeOverlay,{interactiveOverlayAndTrigger:n.interactiveTriggerAndOverlay})},t.prototype.onAgeGateSubmitClick=function(n){this.log("jsll - onAgeGateSubmitClick");var i=window.awa?window.awa.behavior.PROCESSCHECKPOINT:null;this.doPing(n,i,t.usageCounters.ageGateSubmitClick,{ageGatePassed:n.ageGatePassed,scn:"OnePlayerAgeGate",isSuccess:n.ageGatePassed})},t.prototype.onPlayerErrors=function(n){this.log("jsll - onPlayerErrors()");var i=window.awa?window.awa.behavior.VIDEOERROR:null;this.doPing(n,i,t.usageCounters.contentError,{et:n.errorType,etd:n.errorDesc})},t.prototype.onVideoShared=function(n){this.log("jsll - onVideoShared");var t=window.awa?window.awa.behavior.SOCIALSHARE:null;this.doPing(n,t,null,{videoShare:n.videoShare,socchn:n.videoShare})},t.prototype.onClosedCaptionsChanged=function(n){this.log("jsll - onClosedCaptionsChanged");var t=window.awa?window.awa.behavior.VIDEOCLOSEDCAPTIONCONTROL:null;this.doPing(n,t,null,{closedCaptions:n.endCaptionSelection,startcaptionselection:n.startCaptionSelection,endcaptionselection:n.endCaptionSelection})},t.prototype.onClosedCaptionSettingsChanged=function(n){this.log("jsll - onClosedCaptionSettingsChanged");var t=window.awa?window.awa.behavior.VIDEOCLOSEDCAPTIONSTYLE:null;this.doPing(n,t,null,{closedCaptionSettings:n.closedCaptionSettings,appsel:n.closedCaptionSettings})},t.prototype.onPlaybackRateChanged=function(n){this.log("jsll - onPlaybackRateChanged");this.doPing(n,null,null,{playbackRate:n.playbackRate})},t.prototype.onMediaDownloaded=function(n){this.log("jsll - onMediaDownloaded");var t=window.awa?window.awa.behavior.DOWNLOAD:null;this.doPing(n,t,null,{downloadMedia:n.downloadMedia,dlnm:"Download",dlid:n.downloadMedia,dltype:n.downloadType})},t.prototype.onAudioTrackChanged=function(n){this.log("jsll - onAudioTrackChanged");var t=window.awa?window.awa.behavior.VIDEOAUDIOTRACKCONTROL:null;this.doPing(n,t,null,{audioTrack:n.audioTrack,starttrackselection:n.startTrackSelection,endtrackselection:n.endTrackSelection})},t.usageCounters={contentBuffering:{t:"2",evt:"ContentPlay"},contentError:{t:"20",evt:"ContentPlay"},contentStart:{t:"21",evt:"ContentPlay"},contentContinue:{t:"22",evt:"ContentPlay"},contentComplete:{t:"23",evt:"ContentPlay"},contentImpression3PP:{t:"41",evt:"ContentPlay"},commonPlayerImpression:{t:"61",evt:"ContentPlay"},cc:{t:"30",evt:"Click_Non-nav"},pause:{t:"31",evt:"Click_Non-nav"},seek:{t:"32",evt:"Click_Non-nav"},mute:{t:"33",evt:"Click_Non-nav"},fullScreenEnter:{t:"34",evt:"Click_Non-nav"},info:{t:"35",evt:"Click_Non-nav"},videoQuality:{t:"36",evt:"Click_Non-nav"},resume:{t:"37",evt:"Click_Non-nav"},fullScreenExit:{t:"38",evt:"Click_Non-nav"},replay:{t:"39",evt:"Click_Non-nav"},unmute:{t:"40",evt:"Click_Non-nav"},facebook:{t:"51",evt:"Click_Non-nav"},twitter:{t:"52",evt:"Click_Non-nav"},email:{t:"53",evt:"Click_Non-nav"},overlayClick:{t:"70",evt:"Click_Non-nav"},streamLinkBackButtonClick:{t:"71",evt:"Click_Non-nav"},overlayShow:{t:"72",evt:"Show_Overlay"},overlayHide:{t:"73",evt:"Hide_Overlay"},minimizeOverlay:{t:"74",evt:"Minimize_Overlay"},maximizeOverlay:{t:"75",evt:"Maximize_Overlay"},ageGateSubmitClick:{t:"80",evt:"Click_Non-nav"}},t}(i.BaseReporter);t.JsllReporter=f});define("reporting-data",["require","exports"],function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})});define("player-utility",["require","exports","stringExtensions","player-data-interfaces","utility","environment"],function(n,t,i,r,u,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(){function n(){}return n.random4CharString=function(){return(1+Math.random()).toString(32).substring(1)},n.loadScript=function(n){var i=document.getElementsByTagName("script")[0],t=document.createElement("script");t.src=n;t.async=!0;t.onload=t.onreadystatechange=function(){t.readyState&&t.readyState!=="loaded"&&t.readyState!=="complete"||(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t))};i.parentNode.insertBefore(t,i)},n.formatContentErrorMessage=function(n,t,u){var f=i.format("[CE{0}]: {1}",r.VideoErrorCodes[n],t);return u&&(f+=i.format("; (Additional: {0})",u)),f},n.logConsoleMessage=function(t,r){r===void 0&&(r="VideoPlayer");var u=i.format("[{0}][{1}] {2}",n.toLogTime(new Date),r,t);typeof console=="object"&&console.log&&console.log(u);f.Environment.isOfficeCLView()&&n.logPanelMessage(u,r)},n.toLogTime=function(n){n||(n=new Date);var t=n.getHours(),i=n.getMinutes(),r=n.getSeconds();return t=t<10?"0"+t:t,i=i<10?"0"+i:i,r=r<10?"0"+r:r,t+":"+i+":"+r},n.toFriendlyBitrateString=function(n){var t,i,r;return n>=1e7?(i=n/1e6,t=Math.round(i).toLocaleString()+" Mbps"):n>=1e6?(i=n/1e6,t=(Math.round(i*100)*.01).toLocaleString()+" Mbps"):n>=1e4?(r=n/1e3,t=Math.round(r).toLocaleString()+" Kbps"):n>=1e3?(r=n/1e3,t=(Math.round(r*100)*.01).toLocaleString()+" Kbps"):t=Math.round(n).toLocaleString()+" bps",t},n.logPanelMessage=function(t){typeof n.debugPanel=="undefined"&&(n.debugPanel=n.createDebugPanel());n.debugPanel.appendChild(document.createTextNode("["+(new Date).toLocaleString()+"]"+t));n.debugPanel.appendChild(document.createElement("BR"));n.debugPanel.scrollTop=n.debugPanel.scrollHeight-n.debugPanel.clientHeight},n.createDebugPanel=function(){var n=document.createElement("div");return n.className="debugPanel",document.body.appendChild(n),n},n.getGUID=function(){var n=(new Date).getTime();return"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/x/g,function(t){var i=Math.floor((n+Math.random()*16)%16),r=t==="x"?i:i%4+4;return r.toString(16)})},n.removeFromPendingAjaxRequests=function(t){for(var r=-1,i=0;i<n.pendingAjaxRequests.length;i++)if(t===n.pendingAjaxRequests[i]){r=i;break}r>=0&&n.pendingAjaxRequests.splice(r,1)},n.ajax=function(t,i,r){if(t){var u=null;window.XDomainRequest?(u=new XDomainRequest,u.onload=function(){i&&i(u.responseText);n.removeFromPendingAjaxRequests(u)},n.pendingAjaxRequests.push(u)):window.XMLHttpRequest&&(u=new XMLHttpRequest,u.onreadystatechange=function(){if(u.readyState===4){var n=null;u.status===200&&(n=u.responseText);i&&i(n)}});u&&(u.ontimeout=u.onerror=function(){n.removeFromPendingAjaxRequests(u);r&&r()},u.open("GET",t,!0),u.send())}},n.createVideoPerfMarker=function(n,t){n&&t&&u.createPerfMarker(n+"_"+t,!0);t==="ttvs"&&u.createPerfMarker(t,!0)},n.getVideoPerfMarker=function(n,t){return n&&t?u.getPerfMarkerValue(n+"_"+t):0},n.sanitize=function(n){var t={"<":"&lt;",">":"&gt;"};return n.replace(/[<>]/ig,function(n){return t[n]})},n.pendingAjaxRequests=[],n}();t.PlayerUtility=e});define("stopwatch",["require","exports","utility"],function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function n(){this.timestamp=null;this.timeValue=null;this.firstValue=null;this.totalValue=null;this.intervals=null}return n.prototype.start=function(){this.timestamp||(this.timestamp=new Date,this.intervals++)},n.prototype.stop=function(){if(this.timestamp){var n=(new Date).valueOf()-this.timestamp.valueOf();this.timeValue+=n;this.totalValue+=n;this.firstValue||(this.firstValue=this.timeValue);this.timestamp=null}},n.prototype.reset=function(){this.timestamp=null;this.timeValue=this.intervals=this.firstValue=this.totalValue=0},n.prototype.isStarted=function(){return!!this.intervals},n.prototype.isStopped=function(){return!this.timestamp},n.prototype.hasReached=function(n){return i.isNumber(n)&&this.getValue()>=n?(this.timestamp&&(this.totalValue+=(new Date).valueOf()-this.timestamp.valueOf(),this.timestamp=new Date),this.timeValue=0,this.intervals=0,!0):!1},n.prototype.getValue=function(){var n=this.timeValue;return this.timestamp&&(n+=(new Date).valueOf()-this.timestamp.valueOf()),n},n.prototype.getTotalValue=function(){var n=this.totalValue;return this.timestamp&&(n+=(new Date).valueOf()-this.timestamp.valueOf()),n},n.prototype.getFirstValue=function(){return this.firstValue},n.prototype.getIntervals=function(){return this.intervals},n}();t.Stopwatch=r});define("environment",["require","exports"],function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function n(){}return n.isOfficeCLView=function(){var t=parent!==window,n=t?document.referrer:window.location.href;return n.match(/client/i)&&n.match(/support.office./i)?!0:!1},n.isVideoPlayerSupported=function(){return n.isHTML5videoSupported()&&n.isES5Supported()},n.isHTML5videoSupported=function(){try{return!!document.createElement("video").canPlayType}catch(n){}return!1},n.isES5Supported=function(){try{var n=!!(String.prototype&&String.prototype.trim),t=!!(Function.prototype&&Function.prototype.bind),i=!!(Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions);return n&&t&&i?!0:!1}catch(r){}return!1},n.userAgent=navigator.userAgent,n.isWindowsPhone=!!n.userAgent.match(/Windows Phone/i),n.isSilk=!!n.userAgent.match(/Silk/i),n.hasSilkVersion=/\bSilk\/(\d+)\.(\d+)/.test(n.userAgent),n.silkMajor=n.hasSilkVersion?Number(RegExp.$1):0,n.silkMinor=n.hasSilkVersion?Number(RegExp.$2):0,n.isSilkModern=n.silkMajor>3||n.silkMajor>=3&&n.silkMinor>=5,n.isAndroid=!n.isWindowsPhone&&(n.isSilk||!!n.userAgent.match(/Android/i)),n.androidVersion=/Android (\d+\.\d+)/i.test(n.userAgent)?Number(RegExp.$1):n.hasSilkVersion?n.isSilkModern?4:1:0,n.isIPhone=!!n.userAgent.match(/iPhone/i)||!!n.userAgent.match(/iPod/i),n.isIPad=!!n.userAgent.match(/iPad/i),n.isIProduct=n.isIPad||n.isIPhone,n.isBlackBerry=!!n.userAgent.match(/BlackBerry/i),n.isHtcWindowsPhone=n.isWindowsPhone&&!!n.userAgent.match(/HTC/i),n.windowsVersion=/Windows NT(\s)*(\d+\.\d+)/.test(n.userAgent)?parseFloat(RegExp.$2):-1,n.ieVersion=/MSIE (\d+\.\d+)/.test(n.userAgent)?Number(RegExp.$1):/Trident.*rv:(\d+\.\d+)/.test(n.userAgent)?Number(RegExp.$1):0,n.isIEMobileModern=/\bIEMobile\/(\d+\.\d+)/.test(n.userAgent)?Number(RegExp.$1)>=10:/Windows Phone (\d+\.\d+)/i.test(n.userAgent)?Number(RegExp.$1)>=10:!1,n.isAndroidModern=n.isAndroid&&(n.androidVersion>=4||n.isSilkModern),n.isMobile=n.isIProduct||n.isAndroid||n.isBlackBerry||n.isWindowsPhone,n.useNativeControls=n.isIProduct||n.isAndroid||n.isWindowsPhone,n.isWebkit=!!n.userAgent.match(/Webkit/i),n.isFirefox=!!n.userAgent.match(/Firefox/i),n.isChrome=!!n.userAgent.match(/Chrome/i)&&navigator.vendor&&navigator.vendor.indexOf("Google")>-1,n.isEdgeBrowser=n.userAgent.indexOf("Edge")>-1,n.isTV=!!n.userAgent.match(/.*SMART\-TV.*Safari\/(535\.20\+|537\.42)/),n.isWindowsRT=/^.*?\bWindows\b.*?\bARM\b.*?$/m.test(n.userAgent),n.isInIframe=parent!==window,n.isSafari=navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&!navigator.userAgent.match("CriOS"),n}();t.Environment=i});define("html5-video-wrapper",["require","exports","player-data-interfaces","htmlExtensions","player-constants","utility"],function(n,t,i,r,u,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(){function n(){var n=this;this.triggerEvents=function(t){if(n.onMediaEventCallback)n.onMediaEventCallback(t)}}return n.prototype.bindVideoEvents=function(n){var t,i,f;if(this.videoTag)for(this.onMediaEventCallback=n,t=0,i=u.MediaEvents;t<i.length;t++)f=i[t],r.addEvents(this.videoTag,f,this.triggerEvents)},n.prototype.unbindVideoEvents=function(){var n,t,i;if(this.videoTag)for(n=0,t=u.MediaEvents;n<t.length;n++)i=t[n],r.removeEvents(this.videoTag,i,this.triggerEvents)},n.prototype.load=function(n,t,i,u){n||(console.log("player container is null"),u&&u());this.videoTag&&this.dispose();this.playerContainer=n;this.videoTag=r.selectFirstElementT("video",this.playerContainer);this.videoTag.autoplay=t;!this.videoTag&&u&&(console.log("video tag not found"),u());i&&setTimeout(i,0)},n.prototype.play=function(){this.videoTag&&this.videoTag.play()},n.prototype.pause=function(){this.videoTag&&this.videoTag.pause()},n.prototype.isPaused=function(){return this.videoTag&&this.videoTag.paused},n.prototype.isLive=function(){return!1},n.prototype.getPlayPosition=function(){return this.videoTag?{currentTime:this.videoTag.currentTime,startTime:0,endTime:this.videoTag.duration}:{currentTime:0,endTime:0,startTime:0}},n.prototype.getVolume=function(){return this.videoTag?this.videoTag.volume:0},n.prototype.setVolume=function(n){this.videoTag&&(this.videoTag.volume=n)},n.prototype.isMuted=function(){return this.videoTag?this.videoTag.muted:!1},n.prototype.mute=function(){this.videoTag&&(this.videoTag.muted=!0,this.videoTag.setAttribute("muted","muted"))},n.prototype.unmute=function(){this.videoTag&&(this.videoTag.muted=!1,this.videoTag.removeAttribute("muted"))},n.prototype.setCurrentTime=function(n){this.videoTag&&(this.videoTag.currentTime=n)},n.prototype.isSeeking=function(){return this.videoTag?this.videoTag.seeking:!1},n.prototype.getBufferedDuration=function(){var n=0;return this.videoTag&&this.videoTag.buffered&&this.videoTag.buffered.length&&(n=this.videoTag.buffered.end(this.videoTag.buffered.length-1)),n},n.prototype.setSource=function(n){if(this.videoTag&&n&&n.length){var t=this.videoTag.getAttribute("src");n[0].url!==t&&(this.videoTag.setAttribute("src",n[0].url),this.videoTag.load&&this.videoTag.load())}},n.prototype.addNativeClosedCaption=function(n,t,i){var f,e,u,r;if(n&&n.length&&this.videoTag){for(this.clearNativeCc(this.videoTag),this.videoTag.setAttribute("crossorigin","anonymous"),f=0,e=n;f<e.length;f++)u=e[f],u.ccType===t&&(r=document.createElement("track"),r.setAttribute("src",u.url),r.setAttribute("kind","captions"),r.setAttribute("srclang",u.locale),r.setAttribute("label",i.getLanguageNameFromLocale(u.locale)),this.videoTag.appendChild(r));this.videoTag.load&&this.videoTag.load()}},n.prototype.clearNativeCc=function(n){var f,t,u,i;if(n)for(f=r.selectElements("track",n),t=0,u=f;t<u.length;t++)i=u[t],i&&i.parentElement===n&&n.removeChild(i)},n.prototype.clearSource=function(){this.videoTag&&(this.videoTag.setAttribute("src",""),this.videoTag.load&&this.videoTag.load())},n.prototype.setPosterFrame=function(n){n&&this.videoTag&&this.videoTag.poster!==n&&(this.videoTag.poster=n)},n.prototype.getError=function(){var n;if(this.videoTag!==null&&this.videoTag.error!==null){switch(this.videoTag.error.code){case this.videoTag.error.MEDIA_ERR_ABORTED:n=i.VideoErrorCodes.MediaErrorAborted;break;case this.videoTag.error.MEDIA_ERR_NETWORK:n=i.VideoErrorCodes.MediaErrorNetwork;break;case this.videoTag.error.MEDIA_ERR_DECODE:n=i.VideoErrorCodes.MediaErrorDecode;break;case this.videoTag.error.MEDIA_ERR_SRC_NOT_SUPPORTED:n=i.VideoErrorCodes.MediaErrorSourceNotSupported;break;default:n=i.VideoErrorCodes.MediaErrorUnknown}return{errorCode:n}}return null},n.prototype.setPlaybackRate=function(n){this.videoTag&&n&&f.isNumber(n)&&(this.videoTag.playbackRate=n)},n.prototype.getPlayerTechName=function(){return"html5"},n.prototype.getWrapperName=function(){return"html5video"},n.prototype.getAudioTracks=function(){return null},n.prototype.switchToAudioTrack=function(){throw new Error("HTML5.switchToAudioTrack is not supported");},n.prototype.getCurrentAudioTrack=function(){return null},n.prototype.getVideoTracks=function(){return null},n.prototype.switchToVideoTrack=function(){throw new Error("HTML5.switchToVideoTrack is not supported");},n.prototype.getCurrentVideoTrack=function(){return null},n.prototype.setAutoPlay=function(){!this.videoTag||(this.videoTag.autoplay=!0,this.videoTag.muted=!0,this.setVolume(0),this.videoTag.setAttribute("playsinline",""),this.videoTag.setAttribute("muted",""))},n.prototype.dispose=function(){this.unbindVideoEvents();this.clearSource()},n.supportedMediaTypes=[i.MediaTypes.HLS,i.MediaTypes.MP4],n}();t.Html5VideoWrapper=e});define("video-wrapper-interface",["require","exports"],function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})});define("amp-wrapper",["require","exports","player-data-interfaces","htmlExtensions","stringExtensions","player-constants","player-utility","utility","player-config"],function(n,t,i,r,u,f,e,o,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var h=function(){function n(t){var i=this;this.ampPlayer=null;this.triggerEvents=function(n){if(i.onMediaEventCallback)i.onMediaEventCallback(n)};this.setupAmpPlayer=function(n){var t=r.selectFirstElementT("video",i.playerContainer);if(t||(t=r.selectFirstElementT(".f-video-player",i.playerContainer)),!t){console.log("could not find video tag");i.onLoadFailedCallback&&i.onLoadFailedCallback();return}i.ampPlayer=window.amp(t,{nativeControlsForTouch:!1,autoplay:n,controls:!1,logo:{enabled:!1}},i.onAmpPlayerInit);i.ampPlayer.options_.autoplay=n;t.hasAttribute("aria-hidden")&&t.removeAttribute("aria-hidden");i.onLoadedCallback&&i.onLoadedCallback()};this.onAmpPlayerInit=function(){var n=r.selectFirstElement(".f-video-player",i.playerContainer),f,s,o,e,h,t;if(n){if(i.useAMPVersion2){var u=r.selectFirstElement("div",n),o=Array.prototype.slice.call(u.children),c=r.selectFirstElementT("video",n);for(f=0,s=o;f<s.length;f++)t=s[f],t&&t.parentElement===u&&!t.contains(c)?u.removeChild(t):(t.hasAttribute("aria-label")&&t.removeAttribute("aria-label"),t.hasAttribute("role")||t.setAttribute("role","none"));u.removeAttribute("aria-label");c.removeAttribute("aria-hidden");setTimeout(function(){var n=document.querySelector(".amp-content-title");u.contains(n)&&u.removeChild(n);u.hasAttribute("title")&&u.removeAttribute("title")},0)}else for(o=r.selectElements("div",n),e=0,h=o;e<h.length;e++)t=h[e],t&&t.parentElement===n&&n.removeChild(t);n.removeAttribute("title");n.removeAttribute("style");n.removeAttribute("tabindex");n.removeAttribute("aria-label");n.removeAttribute("vjs-label");n.removeAttribute("aria-hidden");setTimeout(function(){n.removeAttribute("aria-label")},0);i.videoTag=r.selectFirstElementT("video",n)}};this.useAMPVersion2=t;n.isAmpScriptLoaded()||e.PlayerUtility.loadScript(t?s.PlayerConfig.ampVersion2Url:s.PlayerConfig.ampUrl)}return n.isAmpScriptLoaded=function(){return window&&window.amp},n.prototype.bindVideoEvents=function(n){var t,i,r;if(this.ampPlayer)for(this.onMediaEventCallback=n,t=0,i=f.MediaEvents;t<i.length;t++)r=i[t],this.ampPlayer.addEventListener(r,this.triggerEvents)},n.prototype.unbindVideoEvents=function(){var n,t,i;if(this.ampPlayer)for(n=0,t=f.MediaEvents;n<t.length;n++)i=t[n],this.ampPlayer.removeEventListener(i,this.triggerEvents)},n.prototype.load=function(t,i,r,u,f){var e=this;t||(console.log("player container is null"),u&&u());this.ampPlayer&&this.dispose();this.playerContainer=t;this.onLoadedCallback=r;this.onLoadFailedCallback=u;this.onAudioStreamSelectedCallback=f;n.isAmpScriptLoaded()?this.setupAmpPlayer(i):o.poll(n.isAmpScriptLoaded,n.pollingInterval,n.pollingTimeout,function(){e.setupAmpPlayer(i)},this.onLoadFailedCallback)},n.prototype.removeTitle=function(){var n=r.selectFirstElement(".f-video-player",this.playerContainer);n&&this.useAMPVersion2&&setTimeout(function(){var t=r.selectFirstElement("div",n);t.hasAttribute("title")&&t.removeAttribute("title")},0)},n.prototype.play=function(){this.ampPlayer&&this.ampPlayer.play();this.removeTitle()},n.prototype.pause=function(){this.ampPlayer&&this.ampPlayer.pause();this.removeTitle()},n.prototype.isPaused=function(){return this.ampPlayer&&this.ampPlayer.paused()},n.prototype.isLive=function(){return this.ampPlayer&&this.ampPlayer.isLive()},n.prototype.getPlayPosition=function(){if(!this.ampPlayer)return{currentTime:0,endTime:0,startTime:0};if(this.ampPlayer.isLive()){var n=this.ampPlayer.currentPlayableWindow();return{startTime:n.startInSec,endTime:n.endInSec,currentTime:this.ampPlayer.currentAbsoluteTime()||n.endInSec}}return{currentTime:this.ampPlayer.currentTime(),startTime:0,endTime:this.ampPlayer.duration()}},n.prototype.getVolume=function(){return this.ampPlayer?this.ampPlayer.volume():0},n.prototype.setVolume=function(n){this.ampPlayer&&this.ampPlayer.volume(n)},n.prototype.isMuted=function(){return this.ampPlayer?this.ampPlayer.muted():!1},n.prototype.mute=function(){this.ampPlayer&&this.ampPlayer.muted(!0)},n.prototype.unmute=function(){this.ampPlayer&&this.ampPlayer.muted(!1)},n.prototype.setCurrentTime=function(n){this.ampPlayer&&this.ampPlayer.currentTime(this.ampPlayer.fromPresentationTime(n))},n.prototype.isSeeking=function(){return this.ampPlayer?this.ampPlayer.seeking():!1},n.prototype.getBufferedDuration=function(){var t=0,n;return this.ampPlayer&&this.ampPlayer.buffered&&this.ampPlayer.buffered().length&&(n=this.ampPlayer.buffered(),n.length&&(t=n.end(n.length-1))),t},n.prototype.setSource=function(n){var f,u,e,t,r;if(n&&n.length){for(f=[],u=0,e=n;u<e.length;u++)if(t=e[u],t&&t.url&&this.ampPlayer){r="video/mp4";switch(t.mediaType){case i.MediaTypes.HLS:r="application/vnd.apple.mpegurl";break;case i.MediaTypes.DASH:r="application/dash-xml";break;case i.MediaTypes.SMOOTH:r="application/vnd.ms-sstr+xml"}f.push({src:t.url,type:r})}this.ampPlayer.src(f)}},n.prototype.addNativeClosedCaption=function(n,t,i){var f,e,u,r;if(n&&n.length&&this.videoTag){for(this.clearNativeCc(this.videoTag),this.videoTag.setAttribute("crossorigin","anonymous"),f=0,e=n;f<e.length;f++)u=e[f],u.ccType===t&&(r=document.createElement("track"),r.setAttribute("src",u.url),r.setAttribute("kind","captions"),r.setAttribute("srclang",u.locale),r.setAttribute("label",i.getLanguageNameFromLocale(u.locale)),this.videoTag.appendChild(r));this.videoTag.load&&this.videoTag.load()}},n.prototype.clearNativeCc=function(n){var f,t,u,i;if(n)for(f=r.selectElements("track",n),t=0,u=f;t<u.length;t++)i=u[t],i&&i.parentElement===n&&n.removeChild(i)},n.prototype.clearSource=function(){},n.prototype.setPosterFrame=function(n){n&&this.ampPlayer&&this.ampPlayer.poster()!==n&&this.ampPlayer.poster(n)},n.prototype.getError=function(){var n=this.ampPlayer&&this.ampPlayer.error(),r,t;return n?(t=window,r=n.code&t.amp.errorCode.abortedErrStart?i.VideoErrorCodes.MediaErrorAborted:n.code&t.amp.errorCode.networkErrStart?i.VideoErrorCodes.MediaErrorNetwork:n.code&t.amp.errorCode.decodeErrStart?i.VideoErrorCodes.MediaErrorDecode:n.code&t.amp.errorCode.srcErrStart?i.VideoErrorCodes.MediaErrorSourceNotSupported:n.code&t.amp.errorCode.encryptErrStart?i.VideoErrorCodes.AmpEncryptError:n.code&t.amp.errorCode.srcPlayerMismatchStart?i.VideoErrorCodes.AmpPlayerMismatch:i.VideoErrorCodes.MediaErrorUnknown,{errorCode:r,message:"AMP Error Code: "+n.code}):null},n.prototype.setPlaybackRate=function(){},n.prototype.getPlayerTechName=function(){return this.ampPlayer&&this.ampPlayer.currentTechName()},n.prototype.getWrapperName=function(){return"amp"},n.prototype.getAudioTracks=function(){var i=this.ampPlayer&&this.ampPlayer.currentAudioStreamList&&this.ampPlayer.currentAudioStreamList(),r,f,t,e;if(!i||(r=i.streams,!r))return null;for(!this.onAudioStreamSelectedCallback||i.addEventListener("streamselected",this.onAudioStreamSelectedCallback),f=[],t=0,e=r;t<e.length;t++){var n=e[t],o=n.language&&u.startsWith(n.language,"dau-",!0)||n.title&&u.startsWith(n.title,"dau-",!0),s=o&&n.language?n.language.substring(4):n.language;f.push({isDescriptiveAudio:o,bitrate:n.bitrate,languageCode:s,name:n.name,title:n.title})}return f},n.prototype.switchToAudioTrack=function(n){var t=this.ampPlayer&&this.ampPlayer.currentAudioStreamList&&this.ampPlayer.currentAudioStreamList();t&&t.switchIndex(n)},n.prototype.getCurrentAudioTrack=function(){var n=this.ampPlayer&&this.ampPlayer.currentAudioStreamList&&this.ampPlayer.currentAudioStreamList(),t;return!n||!n.enabledIndices?undefined:(t=n.enabledIndices,t.length>0?t[0]:-1)},n.prototype.getVideoTracks=function(){var i=this.getSelectedAmpVideoStream(),r,n,u,t;if(!i||!i.tracks)return null;for(r=[],n=0,u=i.tracks;n<u.length;n++)t=u[n],r.push({bitrate:t.bitrate,width:t.width,height:t.height});return r},n.prototype.getSelectedAmpVideoStream=function(){if(!this.ampPlayer||!this.ampPlayer.currentVideoStreamList)return null;var n=this.ampPlayer.currentVideoStreamList();return n?!n.streams||n.selectedIndex<0||n.selectedIndex>=n.streams.length?null:n.streams[n.selectedIndex]:null},n.prototype.switchToVideoTrack=function(n){var t=this.getSelectedAmpVideoStream();if(!t||!t.selectTrackByIndex)return null;t.selectTrackByIndex(n)},n.prototype.getCurrentVideoTrack=function(){var i=this.getSelectedAmpVideoStream(),n,r,t;if(!i||!i.tracks||i.tracks.length===0)return null;if(n=i.tracks,r=n.reduce(function(n,t){return t.selectable?n+1:n},0),r===n.length)return{auto:!0,trackIndex:null};if(r===1)for(t=0;t<n.length;t++)if(n[t].selectable)return{auto:!1,trackIndex:t};return null},n.prototype.setAutoPlay=function(){this.useAMPVersion2?(this.ampPlayer.autoplay(!0),this.ampPlayer.muted(!0),this.setVolume(0)):!this.videoTag||(this.videoTag.autoplay=!0,this.videoTag.muted=!0,this.setVolume(0),this.videoTag.setAttribute("playsinline",""),this.videoTag.setAttribute("muted",""))},n.prototype.dispose=function(){this.clearSource();this.unbindVideoEvents();this.ampPlayer&&this.ampPlayer.dispose&&this.ampPlayer.dispose();this.ampPlayer=null},n.pollingInterval=50,n.pollingTimeout=3e4,n}();t.AmpWrapper=h});define("has-video-wrapper",["require","exports","player-data-interfaces","htmlExtensions","player-constants","player-utility","utility","player-config"],function(n,t,i,r,u,f,e,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function n(){var t=this,i;this.hasPlayer=null;this.setupHasPlayer=function(n){if(t.videoTag=r.selectFirstElementT("video",t.playerContainer),t.videoTag||(t.videoTag=r.selectFirstElementT(".f-video-player",t.playerContainer)),!t.videoTag){console.log("could not find video tag");t.onLoadFailedCallback&&t.onLoadFailedCallback();return}t.hasPlayer=new window.MediaPlayer;t.hasPlayer.init(t.videoTag);t.hasPlayer.setAutoPlay(n);t.onLoadedCallback&&t.onLoadedCallback()};this.triggerEvents=function(n){if(t.onMediaEventCallback)t.onMediaEventCallback(n)};n.isHasPlayerScriptLoaded()||(i=o.PlayerConfig.hasPlayerUrl.replace("url(","").replace(")","").trim(),f.PlayerUtility.loadScript(i))}return n.isHasPlayerScriptLoaded=function(){return window&&window.MediaPlayer},n.prototype.bindVideoEvents=function(n){var t,i,f;if(this.videoTag)for(this.onMediaEventCallback=n,t=0,i=u.MediaEvents;t<i.length;t++)f=i[t],r.addEvents(this.videoTag,f,this.triggerEvents)},n.prototype.unbindVideoEvents=function(){var n,t,i;if(this.videoTag)for(n=0,t=u.MediaEvents;n<t.length;n++)i=t[n],r.removeEvents(this.videoTag,i,this.triggerEvents)},n.prototype.load=function(t,i,r,u){var f=this;t||(console.log("player container is null"),u&&u());this.videoTag&&this.dispose();this.playerContainer=t;this.onLoadedCallback=r;this.onLoadFailedCallback=u;n.isHasPlayerScriptLoaded()?this.setupHasPlayer(i):e.poll(n.isHasPlayerScriptLoaded,n.pollingInterval,n.pollingTimeout,function(){f.setupHasPlayer(i)},this.onLoadFailedCallback)},n.prototype.play=function(){this.videoTag&&this.videoTag.play()},n.prototype.pause=function(){this.videoTag&&this.videoTag.pause()},n.prototype.isPaused=function(){return this.videoTag&&(this.videoTag.paused||this.videoTag.ended)},n.prototype.isLive=function(){return!1},n.prototype.getPlayPosition=function(){return this.videoTag?{currentTime:this.videoTag.currentTime,startTime:0,endTime:this.videoTag.duration}:{currentTime:0,endTime:0,startTime:0}},n.prototype.getVolume=function(){return this.videoTag?this.videoTag.volume:0},n.prototype.setVolume=function(n){this.videoTag&&(this.videoTag.volume=n)},n.prototype.isMuted=function(){return this.videoTag?this.videoTag.muted:!1},n.prototype.mute=function(){this.videoTag&&(this.videoTag.muted=!0)},n.prototype.unmute=function(){this.videoTag&&(this.videoTag.muted=!1)},n.prototype.setCurrentTime=function(n){this.videoTag&&(this.videoTag.currentTime=n)},n.prototype.isSeeking=function(){return this.videoTag?this.videoTag.seeking:!1},n.prototype.getBufferedDuration=function(){var n=0;return this.videoTag&&this.videoTag.buffered&&this.videoTag.buffered.length&&(n=this.videoTag.buffered.end(this.videoTag.buffered.length-1)),n},n.prototype.setSource=function(n){if(this.hasPlayer&&n&&n.length&&n[0].url){this.hasPlayer.setInitialQualityFor("video",999);this.hasPlayer.setQualityFor("video",999);var t={url:n[0].url,protocol:n[0].mediaType===i.MediaTypes.HLS?"HLS":null};this.hasPlayer.load(t)}},n.prototype.addNativeClosedCaption=function(n,t,i){var f,e,u,r;if(n&&n.length&&this.videoTag){for(this.clearNativeCc(this.videoTag),this.videoTag.setAttribute("crossorigin","anonymous"),f=0,e=n;f<e.length;f++)u=e[f],u.ccType===t&&(r=document.createElement("track"),r.setAttribute("src",u.url),r.setAttribute("kind","captions"),r.setAttribute("srclang",u.locale),r.setAttribute("label",i.getLanguageNameFromLocale(u.locale)),this.videoTag.appendChild(r));this.videoTag.load&&this.videoTag.load()}},n.prototype.clearNativeCc=function(n){var f,t,u,i;if(n)for(f=r.selectElements("track",n),t=0,u=f;t<u.length;t++)i=u[t],i&&i.parentElement===n&&n.removeChild(i)},n.prototype.clearSource=function(){this.hasPlayer&&this.hasPlayer.reset(1)},n.prototype.setPosterFrame=function(n){n&&this.videoTag&&this.videoTag.poster!==n&&(this.videoTag.poster=n)},n.prototype.getError=function(){var n;if(this.videoTag!==null&&this.videoTag.error!==null){switch(this.videoTag.error.code){case this.videoTag.error.MEDIA_ERR_ABORTED:n=i.VideoErrorCodes.MediaErrorAborted;break;case this.videoTag.error.MEDIA_ERR_NETWORK:n=i.VideoErrorCodes.MediaErrorNetwork;break;case this.videoTag.error.MEDIA_ERR_DECODE:n=i.VideoErrorCodes.MediaErrorDecode;break;case this.videoTag.error.MEDIA_ERR_SRC_NOT_SUPPORTED:n=i.VideoErrorCodes.MediaErrorSourceNotSupported;break;default:n=i.VideoErrorCodes.MediaErrorUnknown}return{errorCode:n}}return null},n.prototype.setPlaybackRate=function(n){this.videoTag&&n&&e.isNumber(n)&&(this.videoTag.playbackRate=n)},n.prototype.getPlayerTechName=function(){return"hasplayer"},n.prototype.getWrapperName=function(){return"hasplayerVideo"},n.prototype.getAudioTracks=function(){return null},n.prototype.switchToAudioTrack=function(){throw new Error("HTML5.switchToAudioTrack is not supported");},n.prototype.getCurrentAudioTrack=function(){return null},n.prototype.getVideoTracks=function(){return null},n.prototype.switchToVideoTrack=function(){throw new Error("HTML5.switchToVideoTrack is not supported");},n.prototype.getCurrentVideoTrack=function(){return null},n.prototype.setAutoPlay=function(){this.hasPlayer.setAutoPlay(!0)},n.prototype.dispose=function(){this.unbindVideoEvents();this.clearSource();this.hasPlayer&&this.hasPlayer.dispose&&this.hasPlayer.dispose();this.hasPlayer=null},n.pollingInterval=50,n.pollingTimeout=3e4,n.supportedMediaTypes=[i.MediaTypes.HLS,i.MediaTypes.MP4],n}();t.HasPlayerVideoWrapper=s});define("hls-video-wrapper",["require","exports","player-data-interfaces","htmlExtensions","player-constants","player-utility","utility","player-config"],function(n,t,i,r,u,f,e,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function n(){var t=this,i;this.hlsPlayer=null;this.setupHlsPlayer=function(){if(t.videoTag=r.selectFirstElementT("video",t.playerContainer),t.videoTag||(t.videoTag=r.selectFirstElementT(".f-video-player",t.playerContainer)),!t.videoTag){console.log("could not find video tag");t.onLoadFailedCallback&&t.onLoadFailedCallback();return}t.hlsPlayer=new window.Hls;t.hlsPlayer.attachMedia(t.videoTag);t.onLoadedCallback&&t.onLoadedCallback()};this.triggerEvents=function(n){if(t.onMediaEventCallback)t.onMediaEventCallback(n)};n.isHlsPlayerScriptLoaded()||(i=o.PlayerConfig.hlsPlayerUrl.replace("url(","").replace(")","").trim(),f.PlayerUtility.loadScript(i))}return n.isHlsPlayerScriptLoaded=function(){return window&&window.Hls},n.prototype.bindVideoEvents=function(n){var t,i,f;if(this.videoTag)for(this.onMediaEventCallback=n,t=0,i=u.MediaEvents;t<i.length;t++)f=i[t],r.addEvents(this.videoTag,f,this.triggerEvents)},n.prototype.unbindVideoEvents=function(){var n,t,i;if(this.videoTag)for(n=0,t=u.MediaEvents;n<t.length;n++)i=t[n],r.removeEvents(this.videoTag,i,this.triggerEvents)},n.prototype.load=function(t,i,r,u){var f=this;t||(console.log("player container is null"),u&&u());this.videoTag&&this.dispose();this.playerContainer=t;this.onLoadedCallback=r;this.onLoadFailedCallback=u;n.isHlsPlayerScriptLoaded()?this.setupHlsPlayer(i):e.poll(n.isHlsPlayerScriptLoaded,n.pollingInterval,n.pollingTimeout,function(){f.setupHlsPlayer(i)},this.onLoadFailedCallback)},n.prototype.play=function(){this.videoTag&&this.videoTag.play()},n.prototype.pause=function(){this.videoTag&&this.videoTag.pause()},n.prototype.isPaused=function(){return this.videoTag&&(this.videoTag.paused||this.videoTag.ended)},n.prototype.isLive=function(){return!1},n.prototype.getPlayPosition=function(){return this.videoTag?{currentTime:this.videoTag.currentTime,startTime:0,endTime:this.videoTag.duration}:{currentTime:0,endTime:0,startTime:0}},n.prototype.getVolume=function(){return this.videoTag?this.videoTag.volume:0},n.prototype.setVolume=function(n){this.videoTag&&(this.videoTag.volume=n)},n.prototype.isMuted=function(){return this.videoTag?this.videoTag.muted:!1},n.prototype.mute=function(){this.videoTag&&(this.videoTag.muted=!0)},n.prototype.unmute=function(){this.videoTag&&(this.videoTag.muted=!1)},n.prototype.setCurrentTime=function(n){this.videoTag&&(this.videoTag.currentTime=n)},n.prototype.isSeeking=function(){return this.videoTag?this.videoTag.seeking:!1},n.prototype.getBufferedDuration=function(){var n=0;return this.videoTag&&this.videoTag.buffered&&this.videoTag.buffered.length&&(n=this.videoTag.buffered.end(this.videoTag.buffered.length-1)),n},n.prototype.setSource=function(n){this.hlsPlayer&&n&&n.length&&n[0].url&&this.hlsPlayer.loadSource(n[0].url)},n.prototype.addNativeClosedCaption=function(n,t,i){var f,e,u,r;if(n&&n.length&&this.videoTag){for(this.clearNativeCc(this.videoTag),this.videoTag.setAttribute("crossorigin","anonymous"),f=0,e=n;f<e.length;f++)u=e[f],u.ccType===t&&(r=document.createElement("track"),r.setAttribute("src",u.url),r.setAttribute("kind","captions"),r.setAttribute("srclang",u.locale),r.setAttribute("label",i.getLanguageNameFromLocale(u.locale)),this.videoTag.appendChild(r));this.videoTag.load&&this.videoTag.load()}},n.prototype.clearNativeCc=function(n){var f,t,u,i;if(n)for(f=r.selectElements("track",n),t=0,u=f;t<u.length;t++)i=u[t],i&&i.parentElement===n&&n.removeChild(i)},n.prototype.clearSource=function(){this.hlsPlayer&&this.hlsPlayer.detachMedia()},n.prototype.setPosterFrame=function(n){n&&this.videoTag&&this.videoTag.poster!==n&&(this.videoTag.poster=n)},n.prototype.getError=function(){var n;if(this.videoTag!==null&&this.videoTag.error!==null){switch(this.videoTag.error.code){case this.videoTag.error.MEDIA_ERR_ABORTED:n=i.VideoErrorCodes.MediaErrorAborted;break;case this.videoTag.error.MEDIA_ERR_NETWORK:n=i.VideoErrorCodes.MediaErrorNetwork;break;case this.videoTag.error.MEDIA_ERR_DECODE:n=i.VideoErrorCodes.MediaErrorDecode;break;case this.videoTag.error.MEDIA_ERR_SRC_NOT_SUPPORTED:n=i.VideoErrorCodes.MediaErrorSourceNotSupported;break;default:n=i.VideoErrorCodes.MediaErrorUnknown}return{errorCode:n}}return null},n.prototype.setPlaybackRate=function(n){this.videoTag&&n&&e.isNumber(n)&&(this.videoTag.playbackRate=n)},n.prototype.getPlayerTechName=function(){return"hlsplayer"},n.prototype.getWrapperName=function(){return"hlsplayerVideo"},n.prototype.getAudioTracks=function(){return null},n.prototype.switchToAudioTrack=function(){throw new Error("HTML5.switchToAudioTrack is not supported");},n.prototype.getCurrentAudioTrack=function(){return null},n.prototype.getVideoTracks=function(){return null},n.prototype.switchToVideoTrack=function(){throw new Error("HTML5.switchToVideoTrack is not supported");},n.prototype.getCurrentVideoTrack=function(){return null},n.prototype.setAutoPlay=function(){this.videoTag.autoplay=!0;this.videoTag.muted=!0;this.setVolume(0);this.videoTag.setAttribute("playsinline","");this.videoTag.setAttribute("muted","")},n.prototype.dispose=function(){this.unbindVideoEvents();this.clearSource();this.hlsPlayer&&this.hlsPlayer.dispose&&this.hlsPlayer.dispose();this.hlsPlayer=null},n.pollingInterval=50,n.pollingTimeout=3e4,n.supportedMediaTypes=[i.MediaTypes.HLS,i.MediaTypes.MP4],n}();t.HlsPlayerVideoWrapper=s});define("native-video-wrapper",["require","exports","htmlExtensions"],function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function n(){var n=this;this.triggerEvents=function(t){var i=null;if(t.state==="MediaOpened"?n.ensureLoadEventRaised():t.state==="MediaEnded"?(i=document.createEvent("CustomEvent"),i.initEvent("ended")):t.state==="MediaFailed"?(i=document.createEvent("CustomEvent"),i.initEvent("error")):i=n.createMediaPlaybackEvent(t.target),i)n.onMediaEventCallback(i)}}return n.prototype.bindVideoEvents=function(n){this.hasStoreApi&&(this.onMediaEventCallback=n,window.storeApi.backgroundVideoPlayer.addEventListener("mediaplayerstatechanged",this.triggerEvents))},n.prototype.unbindVideoEvents=function(){this.hasStoreApi&&window.storeApi.backgroundVideoPlayer.removeEventListener("mediaplayerstatechanged",this.triggerEvents)},n.prototype.load=function(n,t,r,u){var f,o,e;if(n||(console.log("player container is null"),u&&u()),this.hasLoaded&&this.dispose(),this.playerContainer=n,f=i.selectFirstElementT("video",this.playerContainer),!f&&u&&(console.log("video tag not found"),u()),window&&window.storeApi&&window.storeApi.backgroundVideoPlayer?this.hasStoreApi=!0:u&&(console.log("native store host api not found"),this.hasStoreApi=!1,u()),this.autoPlay=t,f&&this.hasStoreApi){for(o=f;o.parentElement;)o.style.background="transparent",o=o.parentElement;e=document.createElement("DIV");e.className=f.className;e.style.position="absolute";e.style.width="100%";e.style.height="100%";f.parentNode.insertBefore(e,f);f.remove()}r&&setTimeout(r,0);this.hasLoaded=!0},n.prototype.play=function(){this.hasStoreApi&&(!this.autoPlay&&this.sourceUri?(window.storeApi.backgroundVideoPlayer.source=this.sourceUri,this.sourceUri=null):window.storeApi.backgroundVideoPlayer.play())},n.prototype.pause=function(){this.hasStoreApi&&window.storeApi.backgroundVideoPlayer.pause()},n.prototype.isPaused=function(){return this.hasStoreApi?!(window.storeApi.backgroundVideoPlayer.mediaPlaybackState==="Opening"||window.storeApi.backgroundVideoPlayer.mediaPlaybackState==="Buffering"||window.storeApi.backgroundVideoPlayer.mediaPlaybackState==="Playing"):!1},n.prototype.isLive=function(){return!1},n.prototype.getPlayPosition=function(){return{currentTime:0,endTime:0,startTime:0}},n.prototype.getVolume=function(){return 0},n.prototype.setVolume=function(){},n.prototype.isMuted=function(){return this.hasStoreApi?window.storeApi.backgroundVideoPlayer.isMuted:!1},n.prototype.mute=function(){this.hasStoreApi&&(window.storeApi.backgroundVideoPlayer.isMuted=!0)},n.prototype.unmute=function(){this.hasStoreApi&&(window.storeApi.backgroundVideoPlayer.isMuted=!1)},n.prototype.setCurrentTime=function(){},n.prototype.isSeeking=function(){return!1},n.prototype.getBufferedDuration=function(){return 0},n.prototype.setSource=function(n){var i,t;if(this.hasStoreApi)if(window.storeApi.backgroundVideoPlayer.source){if(this.ensureLoadEventRaised(),i=this.createMediaPlaybackEvent(window.storeApi.backgroundVideoPlayer),i)this.onMediaEventCallback(i)}else t=n[0].url,t.charAt(0)==="/"&&(t="http:"+t),this.autoPlay?window.storeApi.backgroundVideoPlayer.source=t:this.sourceUri=t},n.prototype.addNativeClosedCaption=function(){},n.prototype.clearSource=function(){this.hasStoreApi&&(window.storeApi.backgroundVideoPlayer.source=null,window.storeApi.backgroundVideoPlayer.posterSource=null)},n.prototype.setPosterFrame=function(n){this.hasStoreApi&&(window.storeApi.backgroundVideoPlayer.posterSource||(n.charAt(0)==="/"&&(n="http:"+n),window.storeApi.backgroundVideoPlayer.posterSource=n))},n.prototype.getError=function(){return null},n.prototype.setPlaybackRate=function(){},n.prototype.getPlayerTechName=function(){return"nativeplayer"},n.prototype.getWrapperName=function(){return"nativeplayer"},n.prototype.getAudioTracks=function(){return null},n.prototype.switchToAudioTrack=function(){throw new Error("HTML5.switchToAudioTrack is not supported");},n.prototype.getCurrentAudioTrack=function(){return null},n.prototype.getVideoTracks=function(){return null},n.prototype.switchToVideoTrack=function(){throw new Error("HTML5.switchToVideoTrack is not supported");},n.prototype.getCurrentVideoTrack=function(){return null},n.prototype.setAutoPlay=function(){},n.prototype.dispose=function(){this.unbindVideoEvents();this.clearSource()},n.prototype.ensureLoadEventRaised=function(){if(!this.hasRaisedLoadedEvent&&this.onMediaEventCallback){var n=document.createEvent("CustomEvent");n.initEvent("loadeddata",!1,!1);this.hasRaisedLoadedEvent=!0;this.onMediaEventCallback(n)}},n.prototype.createMediaPlaybackEvent=function(n){var t=null;switch(n.mediaPlaybackState){case"Paused":t=document.createEvent("CustomEvent");t.initEvent("pause",!1,!1);break;case"Playing":t=document.createEvent("CustomEvent");t.initEvent("playing",!1,!1)}return t},n}();t.NativeVideoWrapper=r});__extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}();define("button",["require","exports","observableComponent","htmlExtensions","utility"],function(n,t,i,r,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var f=function(n){function t(t){var i=n.call(this,t)||this;return i.handleKeydown=function(n){var t=u.getKeyCode(n);switch(t){case 32:r.preventDefault(n);i.emitClickEvent()}},i.update(),i}return __extends(t,n),t.prototype.update=function(){this.element&&this.element.nodeName==="A"&&(this.element.getAttribute("role")||"").toLowerCase()==="button"&&r.addEvent(this.element,r.eventTypes.keydown,this.handleKeydown)},t.prototype.teardown=function(){r.removeEvent(this.element,r.eventTypes.keydown,this.handleKeydown)},t.prototype.emitClickEvent=function(){r.customEvent(this.element,r.eventTypes.click)},t.selector=".c-button",t.typeName="Button",t}(i.ObservableComponent);t.Button=f});require(["button","componentFactory"],function(n,t){t.ComponentFactory&&t.ComponentFactory.create&&t.ComponentFactory.create([{c:n.Button}])});define("htmlExtensions",["require","exports","stringExtensions"],function(n,t,i){"use strict";function e(n,t,i,f){var e,o,s;for(f===void 0&&(f=!1),e=0,o=u(n);e<o.length;e++)s=o[e],y(s,i,f,r[t])}function g(n,t,r,f){var e,s,l,o,h,c;if(f===void 0&&(f=!1),!i.isNullOrWhiteSpace(t))for(e=0,s=u(n);e<s.length;e++)for(l=s[e],o=0,h=t.split(/\s+/);o<h.length;o++)c=h[o],i.isNullOrWhiteSpace(c)||y(l,r,f,c)}function nt(n,t,r,f){var e,s,l,o,h,c;for(f===void 0&&(f=!1),e=0,s=u(n);e<s.length;e++)for(l=s[e],o=0,h=u(t);o<h.length;o++)c=h[o],i.isNullOrWhiteSpace(c)||d(l,r,f,c)}function tt(n){n=v(n);n&&(n.preventDefault?n.preventDefault():n.returnValue=!1)}function it(n,t,i,r){r===void 0&&(r=150);var f,u=0,o=function(n){var t=Date.now();f&&(clearTimeout(f),f=undefined);!!u&&t<u+r?f=setTimeout(function(){u=Date.now();i(n)},r-(t-u)):(u=t,i(n))};return e(n,t,o),o}function rt(n,t,r,f,e){function p(n){var i,t=0;return function(r){var u=Date.now();clearTimeout(i);!!t&&u<t+e?i=setTimeout(function(){t=u;n(r)},e-(u-t)):(t=u,n(r))}}var o,h,a,s,c,l,v;if(f===void 0&&(f=!1),e===void 0&&(e=150),!i.isNullOrWhiteSpace(t))for(o=0,h=u(n);o<h.length;o++)for(a=h[o],s=0,c=t.split(/\s+/);s<c.length;s++)l=c[s],i.isNullOrWhiteSpace(l)||(v=p(r),y(a,v,f,l))}function ut(n,t,i,r){r===void 0&&(r=150);var u,f=function(n){window.clearTimeout(u);u=setTimeout(function(){i(n)},r)};return e(n,t,f),f}function ft(n,t){if(t===void 0&&(t=5e3),document.readyState==="complete"){n.call(null);return}if(!document.attachEvent&&document.readyState==="interactive"){n.call(null);return}var o,i,u,f=function(){clearTimeout(o);i&&c(document,r.DOMContentLoaded,i);u&&c(document,r.onreadystatechange,u);l.requestAnimationFrame.call(window,n)};if(o=setTimeout(function(){f("timedout")},t),document.addEventListener){i=function(){f("domcontentloaded")};e(document,r.DOMContentLoaded,i,!1);return}document.attachEvent&&(u=function(){document.readyState==="complete"&&f("readystatecomplete")},e(document,r.onreadystatechange,u,!1))}function et(n,t){t===void 0&&(t=5e3);var i,u=setTimeout(function(){clearTimeout(u);c(window,r.load,i);n.call(null)},t);i=function(){clearTimeout(u);l.requestAnimationFrame.call(window,n)};document.readyState==="complete"?(clearTimeout(u),n.call(null)):e(window,r.load,i)}function p(n,t){!n||i.isNullOrWhiteSpace(t)||b(n,t)||(n.classList?n.classList.add(t):n.className=i.trim(n.className+" "+t))}function w(n,t){var o,e,s,r,f;if(!!n&&!i.isNullOrWhiteSpace(t))for(o=" "+i.trim(t)+" ",e=0,s=u(n);e<s.length;e++)if(r=s[e],r.classList)r.classList.remove(t);else if(!i.isNullOrWhiteSpace(r.className)){for(f=" "+r.className+" ";f.indexOf(o)>-1;)f=f.replace(o," ");r.className=i.trim(f)}}function ot(n,t){var i,r,u;if(t)for(i=0,r=t;i<r.length;i++)u=r[i],w(n,u)}function st(n,t){var i,r,u;if(t)for(i=0,r=t;i<r.length;i++)u=r[i],p(n,u)}function ht(n,t){var u,f,r;if(n&&t)for(u=0,f=t;u<f.length;u++)r=f[u],i.isNullOrWhiteSpace(r.name)||i.isNullOrWhiteSpace(r.value)||n.setAttribute(r.name,r.value)}function b(n,t){return!n||i.isNullOrWhiteSpace(t)?!1:n.classList?n.classList.contains(t):(" "+n.className+" ").indexOf(" "+i.trim(t)+" ")>-1}function ct(n){return n?n.parentElement.removeChild(n):n}function lt(n,t){return h(n,t)}function at(n,t){var i=h(n,t);return!i||!i.length?null:i[0]}function h(n,t){var r,u;if(i.isNullOrWhiteSpace(n)||n==="#")return[];if(r=t||document,/^[\#.]?[\w-]+$/.test(n)){switch(n[0]){case".":return r.getElementsByClassName?o(r.getElementsByClassName(n.slice(1))):o(r.querySelectorAll(n));case"#":return u=r.querySelector(n),u?[u]:[]}return o(r.getElementsByTagName(n))}return o(r.querySelectorAll(n))}function vt(n,t){var i=h(n,t);return!i||!i.length?null:i[0]}function yt(n,t){var o=t||document,u,f,i,r,e;for(u=n.split(","),i=0,r=u;i<r.length;i++)e=r[i],f+=this.selectElements(e,o);return f}function o(n){var i,t;if(!n)return[];for(i=[],t=0;t<n.length;t++)i.push(n[t]);return i}function pt(n){for(n===void 0&&(n=document.documentElement);n!==null;){var t=n.getAttribute("dir");if(!t)n=n.parentElement;else return t==="rtl"?s.right:s.left}return s.left}function a(n){var i,t,r;if(n){i=n.getBoundingClientRect();t={};for(r in i)t[r]=i[r];return typeof t.width=="undefined"&&(t.width=n.offsetWidth),typeof t.height=="undefined"&&(t.height=n.offsetHeight),t}}function wt(n){if(n)return{width:parseFloat(a(n).width)+parseFloat(f(n,"margin-left"))+parseFloat(f(n,"margin-right")),height:parseFloat(a(n).height)+parseFloat(f(n,"margin-top"))+parseFloat(f(n,"margin-bottom"))}}function f(n,t,r){if(!n)return null;if(!r&&r!=="")return r=n.style[t],i.isNullOrWhiteSpace(r)&&(r=getComputedStyle(n),r=r[t]),r;n.style[t]=r}function c(n,t,i,f){var e,o,s;if(n&&t&&i)for(e=0,o=u(n);e<o.length;e++)s=o[e],d(s,i,f,r[t])}function k(n){return Array.isArray?Array.isArray(n):{}.toString.call(n)==="[object Array]"}function u(n){return k(n)?n:[n]}function bt(n,t){return!!n&&n!==t&&n.contains(t)}function kt(n,t){return!!n&&n.contains(t)}function dt(n){return!n?"":n.textContent||n.innerText||""}function gt(n,t){!n||t===null||(n.textContent?n.textContent=t:n.innerHTML=t)}function ni(n){n&&(n.innerHTML="")}function ti(n){return n=v(n),n.target||n.srcElement}function v(n){return n||window.event}function y(n,t,i,r){i===void 0&&(i=!1);!n||(window.addEventListener?n.addEventListener(r,t,i):n.attachEvent("on"+r,t))}function d(n,t,i,r){i===void 0&&(i=!1);!n||(window.removeEventListener?n.removeEventListener(r,t,i):n.detachEvent("on"+r,t))}function ii(n,t,i){if(i===void 0&&(i={}),!n||!t)return null;var f=typeof t=="string"?t:r[t],u=null;if(i.bubbles=typeof i.bubbles=="undefined"?!0:i.bubbles,i.cancelable=typeof i.cancelable=="undefined"?!0:i.cancelable,window.CustomEvent&&typeof CustomEvent=="function")u=new CustomEvent(f,i),i.changedTouches&&i.changedTouches.length&&(u.changedTouches=i.changedTouches);else if(document.createEvent)u=document.createEvent("CustomEvent"),u.initCustomEvent(f,i.bubbles,i.cancelable,i.detail),i.changedTouches&&i.changedTouches.length&&(u.changedTouches=i.changedTouches);else{u=document.createEventObject();try{n.fireEvent("on"+f,u)}catch(e){return undefined}return u}return n.dispatchEvent(u),u}function ri(n){n.stopPropagation?n.stopPropagation():n.returnValue=!1}function ui(n){return n===void 0&&(n=window),n.scrollY||n.pageYOffset||(n.document.compatMode==="CSS1Compat"?n.document.documentElement.scrollTop:n.document.body.scrollTop)}function fi(n){if(!n)return window.document.documentElement;for(var i=n.ownerDocument.documentElement,t=n.offsetParent;t&&f(t,"position")=="static";)t=t.offsetParent;return t||i}function ei(n,t){if(n&&t){var i=t.clientHeight,r=t.scrollHeight;r>i&&(t.scrollTop=Math.min(n.offsetTop-t.firstElementChild.offsetTop,r-i))}}function oi(n){return typeof n.complete!="undefined"&&typeof n.naturalHeight!="undefined"?n&&n.complete&&n.naturalHeight>0:!0}function si(n){return n&&typeof n.complete!="undefined"&&typeof n.naturalHeight!="undefined"?n&&n.complete&&n.naturalWidth==0&&n.naturalHeight==0:!1}function hi(n){var i=n.touches&&n.touches.length?n.touches:[n],t=n.changedTouches&&n.changedTouches[0]||i[0];return{x:t.clientX,y:t.clientY}}function ci(n,t){for(var i=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector;n;){if(i.call(n,t))break;n=n.parentElement}return n}function li(n,t){t===void 0&&(t=!0);!!n&&(window.PointerEvent||window.navigator.pointerEnabled)&&f(n,"touchAction",t?"pan-y":"pan-x")}var l,s,r;Object.defineProperty(t,"__esModule",{value:!0}),function(n){n.requestAnimationFrame=window.requestAnimationFrame||function(n){typeof n=="function"&&window.setTimeout(n,16.7)}}(l=t.SafeBrowserApis||(t.SafeBrowserApis={})),function(n){n[n.right=0]="right";n[n.left=1]="left"}(s=t.Direction||(t.Direction={})),function(n){n[n.animationend=0]="animationend";n[n.blur=1]="blur";n[n.change=2]="change";n[n.click=3]="click";n[n.DOMContentLoaded=4]="DOMContentLoaded";n[n.DOMNodeInserted=5]="DOMNodeInserted";n[n.DOMNodeRemoved=6]="DOMNodeRemoved";n[n.ended=7]="ended";n[n.error=8]="error";n[n.focus=9]="focus";n[n.focusin=10]="focusin";n[n.focusout=11]="focusout";n[n.input=12]="input";n[n.load=13]="load";n[n.keydown=14]="keydown";n[n.keypress=15]="keypress";n[n.keyup=16]="keyup";n[n.loadedmetadata=17]="loadedmetadata";n[n.mousedown=18]="mousedown";n[n.mousemove=19]="mousemove";n[n.mouseout=20]="mouseout";n[n.mouseover=21]="mouseover";n[n.mouseup=22]="mouseup";n[n.onreadystatechange=23]="onreadystatechange";n[n.resize=24]="resize";n[n.scroll=25]="scroll";n[n.submit=26]="submit";n[n.timeupdate=27]="timeupdate";n[n.touchcancel=28]="touchcancel";n[n.touchend=29]="touchend";n[n.touchmove=30]="touchmove";n[n.touchstart=31]="touchstart";n[n.wheel=32]="wheel"}(r=t.eventTypes||(t.eventTypes={}));t.addEvent=e;t.addEvents=g;t.removeEvents=nt;t.preventDefault=tt;t.addThrottledEvent=it;t.addThrottledEvents=rt;t.addDebouncedEvent=ut;t.documentReady=ft;t.onDeferred=et;t.addClass=p;t.removeClass=w;t.removeClasses=ot;t.addClasses=st;t.addAttribute=ht;t.hasClass=b;t.removeElement=ct;t.selectElements=lt;t.selectFirstElement=at;t.selectElementsT=h;t.selectFirstElementT=vt;t.selectElementsFromSelectors=yt;t.nodeListToArray=o;t.getDirection=pt;t.getClientRect=a;t.getClientRectWithMargin=wt;t.css=f;t.removeEvent=c;t.isArray=k;t.toArray=u;t.isDescendant=bt;t.isDescendantOrSelf=kt;t.getText=dt;t.setText=gt;t.removeInnerHtml=ni;t.getEventTargetOrSrcElement=ti;t.getEvent=v;t.customEvent=ii;t.stopPropagation=ri;t.getScrollY=ui;t.getOffsetParent=fi;t.scrollElementIntoView=ei;t.isImageLoadedSuccessfully=oi;t.isImageLoadFailed=si;t.getCoordinates=hi;t.getParent=ci;t.preventDefaultSwipeAction=li});define("stringExtensions",["require","exports"],function(n,t){"use strict";function r(n){return!n||typeof n!="string"||!i(n)}function i(n){return!n||typeof n!="string"?n:n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function u(n,t,i){return(i===void 0&&(i=!0),!n||!t)?!1:(i&&(n=n.toLocaleLowerCase(),t=t.toLocaleLowerCase()),n.startsWith)?n.startsWith(t):n.indexOf(t)===0}function f(n,t,i){return(i===void 0&&(i=!0),!n||!t)?!1:(i&&(n=n.toLocaleLowerCase(),t=t.toLocaleLowerCase()),n.endsWith)?n.endsWith(t):n.lastIndexOf(t)===n.length-t.length}function e(n,t,i){if(i===void 0&&(i=!0),!n||!t)return 0;var r=0;for(i&&(n=n.toLocaleLowerCase(),t=t.toLocaleLowerCase());n.charCodeAt(r)===t.charCodeAt(r);)r++;return r}function o(n){for(var i=[],t=1;t<arguments.length;t++)i[t-1]=arguments[t];return n.replace(/{(\d+)}/g,function(n,t){if(t>=i.length)return n;var r=i[t];return typeof r!="number"&&!r?"":typeof r=="string"?r:r.toString()})}Object.defineProperty(t,"__esModule",{value:!0});t.isNullOrWhiteSpace=r;t.trim=i;t.startsWith=u;t.endsWith=f;t.getMatchLength=e;t.format=o});define("keycodes",["require","exports"],function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})});define("observableComponent",["require","exports","htmlExtensions"],function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function n(t,i){i===void 0&&(i=null);this.element=t;this.ignoreNextDOMChange=!1;this.observing=!1;n.shouldInitializeAsClass(t,i)&&this.setObserver()}return n.prototype.detach=function(){this.unObserve();this.teardown()},n.prototype.isObserving=function(){return this.observing},n.prototype.unObserve=function(){this.observing=!1;this.modernObserver&&this.modernObserver.disconnect();i.removeEvent(this.element,i.eventTypes.DOMNodeInserted,this.obsoleteNodeInsertedEventHander);i.removeEvent(this.element,i.eventTypes.DOMNodeRemoved,this.obsoleteNodeRemovedEventHandler)},n.prototype.setObserver=function(){this.observing=!0;typeof n.mutationObserver!="undefined"?this.observeModern():"MutationEvent"in window&&this.observeObsolete()},n.prototype.observeModern=function(){var t=this,i=function(n){t.onModernMutations(n)};this.modernObserver=new n.mutationObserver(i);this.modernObserver.observe(this.element,{childList:!0,subtree:!0})},n.prototype.onModernMutations=function(n){var r,u,f,e,i,o,t,s;if(this.ignoreNextDOMChange){this.ignoreNextDOMChange=!1;return}for(r=!1,u=!1,f=0,e=n;f<e.length;f++){for(i=e[f],t=0,o=i.addedNodes.length;t<o;t++)i.addedNodes[t].nodeType===Node.ELEMENT_NODE&&(r=!0,u=!0);for(t=0,s=i.removedNodes.length;t<s;t++)i.removedNodes[t].nodeType===Node.ELEMENT_NODE&&(r=!0,i.removedNodes[t]!==this.element&&(u=!0))}r&&this.teardown();u&&this.update()},n.prototype.observeObsolete=function(){var n=this;this.obsoleteNodeInsertedEventHander=i.addDebouncedEvent(this.element,i.eventTypes.DOMNodeInserted,function(){n.onObsoleteNodeInserted()});this.obsoleteNodeRemovedEventHandler=i.addDebouncedEvent(this.element,i.eventTypes.DOMNodeRemoved,function(t){n.onObsoleteNodeRemoved(t)})},n.prototype.onObsoleteNodeInserted=function(){this.ignoreNextDOMChange||(this.teardown(),this.update())},n.prototype.onObsoleteNodeRemoved=function(n){this.ignoreNextDOMChange||(this.teardown(),i.getEventTargetOrSrcElement(n)!==this.element&&this.update())},n.shouldInitializeAsClass=function(t,i){var r=t?t.getAttribute(n.mwfClassAttribute):null,u=t?t.getAttribute(n.initializeAttribute):null;return u==="false"?!1:!!t&&(!r||!!i&&r===i.mwfClass)},n.mwfClassAttribute="data-mwf-class",n.initializeAttribute="data-js-initialize",n.mutationObserver=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,n}();t.ObservableComponent=r});define("utility",["require","exports","stringExtensions"],function(n,t,i){"use strict";function r(n){return!isNaN(n)&&typeof n=="number"}function e(){return window.innerWidth&&document.documentElement.clientWidth?Math.min(window.innerWidth,document.documentElement.clientWidth):window.innerWidth||document.documentElement.clientWidth}function c(){return window.innerHeight&&document.documentElement.clientHeight?Math.min(window.innerHeight,document.documentElement.clientHeight):window.innerHeight||document.documentElement.clientHeight}function l(n){if(n!=null)return{width:n.clientWidth,height:n.clientHeight}}function a(n){var t;if((n=n||window.event,!n)||(t=n.key||n.keyIdentifier,!t))return t;switch(t){case"Left":return"ArrowLeft";case"Right":return"ArrowRight";case"Up":return"ArrowUp";case"Down":return"ArrowDown";case"Esc":return"Escape";default:return t}}function v(n){return n=n||window.event,n==null?null:n.which||n.keyCode||n.charCode}function y(n,t,i,r,u){var o="",f,e;r&&(f=new Date,f.setTime(f.getTime()+r*864e5),o="; expires="+f.toUTCString());e="";u&&(e=";domain="+u);window.document.cookie=n+"="+encodeURIComponent(t)+o+("; path="+i+";")+e}function p(n){var t,i;if(!!n)for(t=0,i=document.cookie.split("; ");t<i.length;t++){var r=i[t],f=r.indexOf("="),u=o(r.substring(0,f));if(u===n)return o(r.substring(u.length+1))}return null}function o(n){return n=decodeURIComponent(n.replace("/+/g"," ")),n.indexOf('"')===0&&(n=n.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")),n}function w(n){var u;if(!!n&&n.length===6){var t=parseInt(n.substring(0,2),16),i=parseInt(n.substring(2,4),16),r=parseInt(n.substring(4,6),16);if(!isNaN(t)&&!isNaN(i)&&!isNaN(r))return u=(t*299+i*587+r*114)/255e3,u>=.5?2:1}return null}function b(n,t,i){return!i||!r(n)||!r(t)||!r(i.left)||!r(i.right)||!r(i.top)||!r(i.bottom)?!1:n>=i.left&&n<=i.right&&t>=i.top&&t<=i.bottom}function k(n){console&&console.warn?console.warn(n):console&&console.error&&console.error(n)}function d(n,t){if(t||!(s("item").toLowerCase().indexOf("perf_marker_global:true")<0)){
/*!/#IFDEF perf_marker_global || log_define_timing */
if(!i.isNullOrWhiteSpace(n)&&window.performance&&window.performance.mark){var r=n.split(" ").join("_");window.performance.mark(r);window.console&&window.console.timeStamp&&window.console.timeStamp(r);
/*!/#ENDIF*/
}}}function g(n){if(i.isNullOrWhiteSpace(n)||!window.performance||!window.performance.mark)return 0;var r=n.split(" ").join("_"),t=window.performance.getEntriesByName(r);return t&&t.length?Math.round(t[t.length-1].startTime):0}function nt(n,t){var f;if(!r(n))return"00:00";f=n<0;f&&(n*=-1);var u=Math.floor(n/3600),e=n%3600,o=Math.floor(e/60),i="";return i=t?u>0?u+":":"00:":u>0?u+":":"",n=Math.floor(e%60),i+=(o<10?"0":"")+o,i+=":"+(n===0?"00":(n<10?"0":"")+n),f?"-"+i:i}function tt(n){if(!JSON||!JSON.parse)throw new Error("JSON.parse unsupported.");if(!n)throw new Error("Invalid json.");return JSON.parse(n)}function u(){for(var e,t,o,n,f,i,r=[],c=0;c<arguments.length;c++)r[c]=arguments[c];if(!r||!r.length)return null;if(e=typeof r[0]=="boolean"&&r[0],r.length<2)return e?null:r[0];if(e&&r.length<3)return r[1];for(t=e?r[1]:r[0],o=e?2:1;o<r.length;o++)for(n in r[o])if(r[o].hasOwnProperty(n)){if(f=r[o][n],e){var s=Array.isArray?Array.isArray(f):{}.toString.call(f)==="[object Array]",h=!!t[n]&&(Array.isArray?Array.isArray(t[n]):{}.toString.call(t[n])==="[object Array]"),l=!s&&typeof f=="object",a=!h&&!!t[n]&&typeof t[n]=="object";if(s&&h){for(i=0;i<f.length;i++)s=Array.isArray?Array.isArray(f[i]):{}.toString.call(f[i])==="[object Array]",h=!!t[n][i]&&(Array.isArray?Array.isArray(t[n][i]):{}.toString.call(t[n][i])==="[object Array]"),l=!s&&typeof f[i]=="object",a=!h&&!!t[n][i]&&typeof t[n][i]=="object",t[n][i]=s?u(!0,h?t[n][i]:[],f[i]):l?u(!0,a?t[n][i]:{},f[i]):f[i];continue}else if(s){t[n]=u(!0,[],f);continue}else if(l){t[n]=u(!0,a?t[n]:{},f);continue}}t[n]=f}return t}function it(n,t,i,r,u){var f=!i||i<0?-1:Number(new Date)+i;t=t||100,function e(){var i=n();if(i&&r)r();else{if(i)return;if(f===-1||Number(new Date)<f)setTimeout(e,t);else if(u)u();else return}}()}function s(n,t){return t===void 0&&(t=!0),h(location.search,n,t)}function rt(n,t,i){return i===void 0&&(i=!0),h(n,t,i)}function h(n,t,i){if(i===void 0&&(i=!0),!t||!n)return"";var r="[\\?&]"+t.replace(/[\[\]]/g,"\\$&")+"=([^&#]*)",f=i?new RegExp(r,"i"):new RegExp(r),u=f.exec(n);return u===null?"":decodeURIComponent(u[1].replace(/\+/g," "))}function ut(n,t){var i,r;if(!t)return n;if(n.indexOf("//")===-1)throw'To avoid unexpected results in URL parsing, url must begin with "http://", "https://", or "//"';return i=document.createElement("a"),i.href=n,i.search=(i.search?i.search+"&":"?")+t,r=i.href,i=null,r}function f(n,t,i){try{if(!t||i!==undefined&&!i)return null;switch(n){case 1:if(!window.localStorage)return null;if(i===undefined)return localStorage.getItem(t);localStorage.setItem(t,i);break;case 0:if(!window.sessionStorage)return null;if(i===undefined)return sessionStorage.getItem(t);sessionStorage.setItem(t,i)}}catch(r){switch(n){case 1:console.log("Error while fetching or saving local storage. It could be due to cookie is blocked.");break;case 0:console.log("Error while fetching or saving session storage. It could be due to cookie is blocked.")}}}function ft(n,t){f(0,n,t)}function et(n){return f(0,n)}function ot(n,t){f(1,n,t)}function st(n){return f(1,n)}Object.defineProperty(t,"__esModule",{value:!0});t.isNumber=r;t.getWindowWidth=e;t.getWindowHeight=c;t.getDimensions=l;t.getVirtualKey=a;t.getKeyCode=v;t.setCookie=y;t.getCookie=p;t.detectContrast=w;t.pointInRect=b;t.apiDeprecated=k;t.createPerfMarker=d;t.getPerfMarkerValue=g;t.toElapsedTimeString=nt;t.parseJson=tt;t.extend=u;t.poll=it;t.getQSPValue=s;t.getQSPFromUrl=rt;t.addQSP=ut;t.saveToSessionStorage=ft;t.getValueFromSessionStorage=et;t.saveToLocalStorage=ot;t.getValueFromLocalStorage=st;var ht;(function(n){function t(){var t;if(window.matchMedia){for(t=0;t<n.allWidths.length;++t)if(!window.matchMedia("(min-width:"+n.allWidths[t]+"px)").matches)return t}else for(t=0;t<n.allWidths.length;++t)if(!(e()>=n.allWidths[t]))return t;return n.allWidths.length}n.allWidths=[320,540,768,1084,1400,1779];n.vpMin=n.allWidths[0];n.vpMax=2048;n.getViewport=t})(ht=t.Viewports||(t.Viewports={}))});__extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}();define("slider",["require","exports","publisher","htmlExtensions","utility"],function(n,t,i,r,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var f=function(n){function t(t){var i=n.call(this,t)||this;return i.onKeyPressed=function(n){var t,u,f,e;switch(n){case 37:case 39:i.isVerticalSlider||(t=i.primaryDirection===r.Direction.left?i.stepOffset:-i.stepOffset,t=n===37?-t:t,i.updateThumbOffset(i.thumbOffset+t,!0,!0),r.preventDefault(r.getEvent(event)));break;case 38:case 40:i.isVerticalSlider&&(t=n===38?i.stepOffset:-i.stepOffset,i.updateThumbOffset(i.thumbOffset+t,!0,!0),r.preventDefault(r.getEvent(event)));break;case 33:r.preventDefault(r.getEvent(event));t=2*i.stepOffset;i.updateThumbOffset(i.thumbOffset+t,!0,!0);break;case 34:r.preventDefault(r.getEvent(event));t=-(2*i.stepOffset);i.updateThumbOffset(i.thumbOffset+t,!0,!0);break;case 36:r.preventDefault(r.getEvent(event));u=parseInt(i.input.getAttribute("min"),10)||0;i.updateThumbOffset(u,!0,!0);break;case 35:r.preventDefault(r.getEvent(event));f=parseInt(i.input.getAttribute("step"),10);e=i.thumbRange+f;i.updateThumbOffset(e,!0,!0)}},i.onKeyDown=function(n){i.onKeyPressed(u.getKeyCode(r.getEvent(n)))},i.onMouseDown=function(n){if(n=r.getEvent(n),i.setupDimensions(),r.getEventTargetOrSrcElement(n)===i.thumb){r.addEvent(document,r.eventTypes.mousemove,i.onMouseMove);r.addEvent(document,r.eventTypes.mouseup,i.onMouseUp);r.addEvent(document,r.eventTypes.touchmove,i.onMouseMove);r.addEvent(document,r.eventTypes.touchcancel,i.onMouseUp);return}i.moveThumbTo(n.clientX,n.clientY)},i.onMouseMove=function(n){if(n.type==="mousemove"&&(n=r.getEvent(n)),n.type==="touchmove"){var t=r.getEvent(n);n=t.targetTouches[0]}i.moveThumbTo(n.clientX,n.clientY)},i.onMouseUp=function(){r.removeEvent(document,r.eventTypes.mousemove,i.onMouseMove);r.removeEvent(document,r.eventTypes.mouseup,i.onMouseUp);r.removeEvent(document,r.eventTypes.touchmove,i.onMouseMove);r.removeEvent(document,r.eventTypes.touchcancel,i.onMouseUp)},i.onWindowResized=function(){i.setupDimensions()},i.update(),i}return __extends(t,n),t.prototype.update=function(){if(this.element){this.input=r.selectFirstElement("input",this.element);this.primaryDirection=r.getDirection(this.element);this.isVerticalSlider=r.hasClass(this.input,"f-vertical");r.preventDefaultSwipeAction(this.element,!this.isVerticalSlider);r.addClass(this.input,"x-screen-reader");var t=parseInt(this.input.getAttribute("min"),10)||0,i=parseInt(this.input.getAttribute("max"),10)||100,n=parseInt(this.input.getAttribute("value"),10),u=parseInt(this.input.getAttribute("step"),10);this.element.children[this.element.children.length-1]===this.input?(this.mockSlider=document.createElement("div"),this.thumb=document.createElement("button"),this.thumb.setAttribute("role","slider"),this.thumb.setAttribute("aria-valuemin",t.toString()),this.thumb.setAttribute("aria-valuemax",i.toString()),this.thumb.setAttribute("aria-valuenow",n.toString()),this.thumb.setAttribute("aria-valuetext",n.toString()),this.input.hasAttribute("aria-label")&&this.thumb.setAttribute("aria-label",this.input.getAttribute("aria-label")),this.valueTooltip=document.createElement("span"),this.track=document.createElement("span"),this.thumb.appendChild(this.valueTooltip),this.mockSlider.appendChild(this.thumb),this.mockSlider.appendChild(this.track),this.element.appendChild(this.mockSlider),this.ignoreNextDOMChange=!0):(this.mockSlider=this.element.children[this.element.children.length-1],this.thumb=this.mockSlider.firstElementChild,this.valueTooltip=this.thumb.firstElementChild,this.track=this.mockSlider.children[this.mockSlider.children.length-1]);this.halfThumbOffset=this.thumb.clientWidth/2;this.resetSliderInternal(t,i,n,u,!0)&&(r.addEvent(this.element,r.eventTypes.mousedown,this.onMouseDown),r.addEvent(this.element,r.eventTypes.touchstart,this.onMouseDown),r.addEvent(this.thumb,r.eventTypes.keydown,this.onKeyDown),this.resizeListener=r.addDebouncedEvent(window,r.eventTypes.resize,this.onWindowResized))}},t.prototype.teardown=function(){r.removeEvent(this.element,r.eventTypes.mousedown,this.onMouseDown);r.removeEvent(this.element,r.eventTypes.touchstart,this.onMouseDown);r.removeEvent(this.thumb,r.eventTypes.keydown,this.onKeyDown);r.removeEvent(window,r.eventTypes.resize,this.resizeListener);this.input=null;this.mockSlider=null;this.thumb=null;this.valueTooltip=null;this.track=null;this.resizeListener=null},t.prototype.resetSlider=function(n,t,i,r){return this.resetSliderInternal(n,t,i,r,!1)},t.prototype.resetSliderInternal=function(n,t,i,r,f){return!u.isNumber(n)||!u.isNumber(t)?!1:Math.max(n,t)-Math.min(n,t)<=0?!1:(this.min=Math.min(n,t),this.max=Math.max(n,t),this.range=this.max-this.min,this.step=isNaN(r)?this.range/10:r,this.value=Math.min(Math.max(isNaN(i)?isNaN(this.value)?this.min:this.value:i,this.min),this.max),this.setupDimensions(),this.updateThumbOffset(this.thumbOffset,f,!1,this.value),!0)},t.prototype.setValue=function(n){return!u.isNumber(n)||n<this.min||n>this.max?!1:(n!==this.value&&(this.thumbOffset=(n-this.min)*this.thumbRange/this.range+this.halfThumbOffset,this.updateThumbOffset(this.thumbOffset,!1,!1,n)),!0)},t.prototype.setupDimensions=function(){this.dimensions=r.getClientRect(this.mockSlider);this.isVerticalSlider?(this.dimensions.left-=t.hitPadding,this.dimensions.right+=t.hitPadding,this.thumbRange=this.dimensions.height-this.thumb.clientWidth,this.maxThumbOffset=this.dimensions.height):(this.dimensions.top-=t.hitPadding,this.dimensions.bottom+=t.hitPadding,this.thumbRange=this.dimensions.width-this.thumb.clientWidth,this.maxThumbOffset=this.dimensions.width);this.thumbRange=Math.max(this.thumbRange,1);this.thumbOffset=(this.value-this.min)*this.thumbRange/this.range+this.halfThumbOffset;this.stepOffset=this.thumbRange/(this.range/this.step);this.setThumbPosition()},t.prototype.setThumbPosition=function(){var n=Math.max(0,this.thumbOffset-this.halfThumbOffset);r.css(this.thumb,r.Direction[this.primaryDirection],n+"px");r.css(this.track,"width",n+"px")},t.prototype.updateThumbOffset=function(n,t,i,f){var o,s,e;f===void 0&&(f=NaN);u.isNumber(n)||(n=this.thumbOffset);this.thumbOffset=Math.min(Math.max(0,n),this.maxThumbOffset);o=f;isNaN(o)&&(o=Math.max(0,this.thumbOffset-this.halfThumbOffset)*1e3*this.range/this.thumbRange,o=Math.round(o)/1e3+this.min);this.value=Math.min(Math.max(this.min,o),this.max);this.input.setAttribute("value",this.value.toString());o=parseFloat(this.input.getAttribute("value"));isNaN(o)||(this.value=o);s=isNaN(parseFloat(this.input.getAttribute("step")))?this.value%1==0?this.value.toString():(Math.round(this.value*10)/10).toString():this.value.toString();this.thumb.setAttribute("aria-valuenow",s);this.thumb.setAttribute("aria-valuetext",s);this.setThumbPosition();this.valueDescriptor=null;this.initiatePublish({value:this.value,internal:t,userInitiated:i});e=this.valueDescriptor||{};this.valueDescriptor=null;typeof e=="object"?(r.setText(this.valueTooltip,e.tooltipText||s),e.ariaValueText&&this.thumb.setAttribute("aria-valuetext",e.ariaValueText)):typeof e=="string"&&((isNaN(parseFloat(e))||e.match(":"))&&this.thumb.setAttribute("aria-valuetext",e==="00:00:00"?"0 second":e),r.setText(this.valueTooltip,e))},t.prototype.publish=function(n,t){var i=n.onValueChanged(t);!i||this.valueDescriptor||(this.valueDescriptor=i)},t.prototype.moveThumbTo=function(n,t){if(u.pointInRect(n,t,this.dimensions)){var i=this.dimensions.bottom-t;this.isVerticalSlider||(i=this.primaryDirection===r.Direction.left?n-this.dimensions.left:this.dimensions.right-n);this.updateThumbOffset(i,!0,!0)}},t.selector=".c-slider",t.typeName="Slider",t.hitPadding=20,t}(i.Publisher);t.Slider=f});require(["slider","componentFactory"],function(n,t){t.ComponentFactory&&t.ComponentFactory.create&&t.ComponentFactory.create([{component:n.Slider}])});define("componentFactory",["require","exports","htmlExtensions","utility","stringExtensions"],function(n,t,i,r,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function n(){}return n.create=function(t){for(var i,r=0,u=t;r<u.length;r++){if(i=u[r],!i.c&&!i.component)throw"factoryInput should has either component or c to tell the factory what component to create.Eg.ComponentFactory.create([{ c: Carousel] or ComponentFactory.create([component: Carousel]))";n.createComponent(i.component||i.c,i)}},n.createComponent=function(t,r){if(t){var o=r&&r.eventToBind?r.eventToBind:"",f=r&&r.selector?r.selector:t.selector,s=r&&r.context?r.context:null,u=[],e=function(n,f,e){var a,c,l,o,h;for(a=r.elements?r.elements:f?i.selectElementsT(f,s):[document.body],c=0,l=a;c<l.length;c++)o=l[c],o.mwfInstances||(o.mwfInstances={}),o.mwfInstances[n]?u.push(o.mwfInstances[n]):(h=new t(o,e),(!h.isObserving||h.isObserving())&&(o.mwfInstances[n]=h,u.push(h)))};switch(o){case"DOMContentLoaded":if(n.onDomReadyHappened)n.callBindFunction(t,f,e,r,u);else{n.domReadyFunctions.push(function(){return n.callBindFunction(t,f,e,r,u)});break}break;case"load":default:if(n.onDeferredHappened)n.callBindFunction(t,f,e,r,u);else{n.deferredFunctions.push(function(){return n.callBindFunction(t,f,e,r,u)});break}}}},n.callBindFunction=function(t,i,u,f,e){f===void 0&&(f=null);var o=n.getTypeName(t),s=o||i||"",h=f&&f.params?f.params:{};h.mwfClass=o;r.createPerfMarker(s+"_Begin");u(o,i,h);r.createPerfMarker(s+"_End");f&&f.callback&&f.callback(e)},n.getTypeName=function(t){if(t.typeName)return t.typeName;if(t.name)return t.name;var i=n.typeNameRegEx.exec(t.toString());if(i&&i.length>1)return i[1]},n.enumerateComponents=function(n,t){var i,r,u;if(n&&t){i=n.mwfInstances;for(r in i)if(i.hasOwnProperty(r)&&(u=i[r],u&&!t(r,u)))break}},n.detach=function(n,t){var i=n,r;i&&i.mwfInstances&&!u.isNullOrWhiteSpace(t)&&i.mwfInstances.hasOwnProperty(t)&&(r=i.mwfInstances[t],i.mwfInstances[t]=null,r&&r.detach&&r.detach())},n.typeNameRegEx=/function\s+(\S+)\s*\(/,n.onLoadTimeoutMs=6e3,n.onDeferredHappened=!1,n.deferredFunctions=[],n.onDomReadyHappened=!1,n.domReadyFunctions=[],n}();t.ComponentFactory=f,function(){i.onDeferred(function(){var n,t,r,u;if(f.onDeferredHappened=!0,n=f.deferredFunctions,!n||n.length>0)for(t=0,r=n;t<r.length;t++)u=r[t],typeof u=="function"&&i.SafeBrowserApis.requestAnimationFrame.call(window,u);f.deferredFunctions=null},f.onLoadTimeoutMs);i.documentReady(function(){var n,t,r,u;if(f.onDomReadyHappened=!0,n=f.domReadyFunctions,!n||n.length>0)for(t=0,r=n;t<r.length;t++)u=r[t],typeof u=="function"&&i.SafeBrowserApis.requestAnimationFrame.call(window,u);f.domReadyFunctions=null},f.onLoadTimeoutMs)}()});__extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}();define("publisher",["require","exports","observableComponent"],function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(n){function t(t,i){i===void 0&&(i=null);var r=n.call(this,t,i)||this;return r.element=t,r}return __extends(t,n),t.prototype.subscribe=function(n){if(!n)return!1;if(this.subscribers){if(this.subscribers.indexOf(n)!==-1)return!1}else this.subscribers=[];return this.subscribers.push(n),!0},t.prototype.unsubscribe=function(n){if(!n||!this.subscribers||!this.subscribers.length)return!1;var t=this.subscribers.indexOf(n);return t===-1?!1:(this.subscribers.splice(t,1),!0)},t.prototype.hasSubscribers=function(){return!!this.subscribers&&this.subscribers.length>0},t.prototype.initiatePublish=function(n){var t,i,r;if(this.hasSubscribers())for(t=0,i=this.subscribers;t<i.length;t++)r=i[t],this.publish(r,n)},t.prototype.update=function(){},t.prototype.teardown=function(){},t}(i.ObservableComponent);t.Publisher=r});__extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}();define("selectMenu",["require","exports","publisher","htmlExtensions","stringExtensions","viewportCollision","utility"],function(n,t,i,r,u,f,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(n){function t(i){var u=n.call(this,i)||this;return u.onTriggerClick=function(n){n=r.getEvent(n);r.preventDefault(n);u.onTriggerToggled(n)},u.onItemClick=function(n){n=r.getEvent(n);u.onItemSelected(r.getEventTargetOrSrcElement(n),!1,!0)},u.onNonSelectMenuClick=function(n){if(n=r.getEvent(n),!!u.element&&!!u.menu){var t=r.getEventTargetOrSrcElement(n);u.element.contains(t)||t!==u.menu&&t.parentElement!==u.menu&&u.collapse()}},u.onNonSelectMenuTab=function(n){n=r.getEvent(n);var t=e.getKeyCode(n);t===9&&u.collapse()},u.onTriggerKeyPress=function(n){n=r.getEvent(n);var t=e.getKeyCode(n);switch(t){case 13:case 32:r.preventDefault(n);u.onTriggerToggled()}},u.handleMenuKeydownEvent=function(n){n=r.getEvent(n);var t=e.getKeyCode(n);t!==9&&u.isExpanded()&&r.preventDefault(n);u.handleMenuKeydown(r.getEventTargetOrSrcElement(n),t)},u.handleMenuItemBlur=function(n){var i=r.getEventTargetOrSrcElement(n);r.removeEvent(i,r.eventTypes.blur,u.handleMenuItemBlur);r.removeClass(i,t.hiddenFocus)},u.update(),u}return __extends(t,n),t.prototype.update=function(){var u,o,s,f,t,i,e,n,h;if(this.element&&(this.persist=r.hasClass(this.element,"f-persist"),this.trigger=r.selectFirstElementT('[role="button"]',this.element),this.trigger||(this.trigger=r.selectFirstElementT("button",this.element)),this.menu=r.selectFirstElement(".c-menu",this.element),u=r.selectElementsT(".c-menu-item a",this.element),this.items=u.length>0?u:r.selectElementsT(".c-menu-item span",this.element),this.isLtr=r.getDirection(this.menu)===r.Direction.left,o=!!r.selectFirstElement("img",this.menu),o&&(this.ignoreNextDOMChange=!0,s=document.createElement("img"),f=document.createElement("span"),r.setText(f,r.getText(this.trigger)),r.setText(this.trigger,""),this.trigger.appendChild(s),this.trigger.appendChild(f)),!!this.trigger&&!!this.menu&&!!this.items&&!!this.items.length)){for(t=null,i=0,e=this.items;i<e.length;i++)n=e[i],this.itemIsSelected(n)&&t===null?(t=n,n.setAttribute(this.getSelectedAttribute(n),"true")):n.setAttribute(this.getSelectedAttribute(n),"false"),n.setAttribute("tabindex","-1"),this.cleanSelectedAttributes(n),n.hasAttribute("role")||n.setAttribute("role","menuitem");h=this.isExpanded();this.onItemSelected(t,!0,!1);this.selectedItem||this.updateAriaLabel();this.addEventListeners();h&&this.expand()}},t.prototype.teardown=function(){var n,t,i;for(r.removeEvent(this.trigger,r.eventTypes.click,this.onTriggerClick),r.removeEvent(this.trigger,r.eventTypes.keydown,this.onTriggerKeyPress),r.removeEvent(this.menu,r.eventTypes.keydown,this.handleMenuKeydownEvent,!0),n=0,t=this.items;n<t.length;n++)i=t[n],r.removeEvent(i,r.eventTypes.click,this.onItemClick);r.removeEvent(document,r.eventTypes.click,this.onNonSelectMenuClick);r.removeEvent(this.items[this.items.length-1],r.eventTypes.keydown,this.onNonSelectMenuTab);r.removeEvent(this.items,r.eventTypes.blur,this.handleMenuItemBlur);this.persist=!1;this.trigger=null;this.menu=null;this.items=null;this.selectedItem=null},t.prototype.setSelectedItem=function(n){if(!n||!this.element)return!1;var t=r.selectFirstElement('[id="'+n+'"] > a',this.element)||r.selectFirstElement('[id="'+n+'"] > span',this.element);return t?this.onItemSelected(t,!1,!1):!1},t.prototype.updateAriaLabel=function(){var n=this.trigger.getAttribute(t.dataAriaLabelFormat),i,f;n!=null&&(i=this.selectedItem?this.selectedItem.getAttribute(t.ariaLabel)||r.getText(this.selectedItem):r.getText(this.trigger),f=u.format(n,i),this.trigger.setAttribute(t.ariaLabel,f))},t.prototype.isExpanded=function(){return!!this.trigger&&!!this.menu&&this.trigger.getAttribute(t.ariaExpanded)==="true"&&this.menu.getAttribute(t.ariaHidden)==="false"},t.prototype.itemIsSelected=function(n){return n.getAttribute(t.ariaSelected)==="true"||n.getAttribute(t.ariaChecked)==="true"},t.prototype.getSelectedAttribute=function(n){return n.getAttribute("role")==="menuitemradio"?t.ariaChecked:t.ariaSelected},t.prototype.cleanSelectedAttributes=function(n){var i=this.getSelectedAttribute(n)===t.ariaSelected?t.ariaChecked:t.ariaSelected;n.removeAttribute(i)},t.prototype.positionMenu=function(){var i=r.css(this.element,"float"),u=i==="right",o=!u&&i==="left",e=o?!0:u||!this.isLtr?!1:!0,n,t;r.css(this.menu,"top","auto");r.css(this.menu,"bottom","auto");r.css(this.menu,e?"left":"right","0");r.css(this.menu,"height","auto");n=f.getCollisionExtents(this.menu);!n||((n.right<0||n.left<0)&&(n.clientRect.width<=n.viewport.width?e?r.css(this.menu,"left",n.right+"px"):r.css(this.menu,"right",n.left+"px"):(r.css(this.menu,"left",-n.left+"px"),r.css(this.menu,"width",n.viewport.width+"px"))),n.bottom<0&&(t=parseFloat(r.css(this.trigger,"height")),n.clientRect.height<=n.top?r.css(this.menu,"bottom",t+"px"):n.clientRect.height<=n.viewport.height?r.css(this.menu,"top",n.bottom+t+"px"):(r.css(this.menu,"top",-n.top+t+"px"),r.css(this.menu,"height",n.viewport.height+"px"))))},t.prototype.expand=function(n){if(!!this.trigger&&!!this.menu&&(this.trigger.setAttribute(t.ariaExpanded,"true"),this.menu.setAttribute(t.ariaHidden,"false"),this.positionMenu(),!!this.items)){var u=this.items.indexOf(this.selectedItem),f=u===-1?0:u,i=this.items[f];i.focus();n&&n.type==="click"&&(r.addClass(i,t.hiddenFocus),r.addEvent(i,r.eventTypes.blur,this.handleMenuItemBlur))}},t.prototype.collapse=function(){!this.trigger||!this.menu||(this.trigger.setAttribute(t.ariaExpanded,"false"),this.menu.setAttribute(t.ariaHidden,"true"))},t.prototype.addEventListeners=function(){var n,t,i;if(!!this.trigger&&!!this.items){for(r.addEvent(this.trigger,r.eventTypes.click,this.onTriggerClick),r.addEvent(this.trigger,r.eventTypes.keydown,this.onTriggerKeyPress),r.addEvent(this.menu,r.eventTypes.keydown,this.handleMenuKeydownEvent,!0),n=0,t=this.items;n<t.length;n++)i=t[n],r.addEvent(i,r.eventTypes.click,this.onItemClick);r.addEvent(this.items[this.items.length-1],r.eventTypes.keydown,this.onNonSelectMenuTab);r.addEvent(document,r.eventTypes.click,this.onNonSelectMenuClick)}},t.prototype.onTriggerToggled=function(n){this.element.getAttribute("aria-disabled")!=="true"&&(this.isExpanded()?this.collapse():this.expand(n))},t.prototype.onItemSelected=function(n,t,i){var e,u,o,s,h,f;if(!n||n===this.selectedItem)return this.collapse(),!1;for((n.nodeName==="P"||n.nodeName==="IMG")&&(n=n.parentElement),this.persist&&this.trigger&&(e=r.selectFirstElementT("img",this.trigger),this.ignoreNextDOMChange=!0,e?(u=r.selectFirstElementT("img",n),o=u?u.getAttribute("src"):"",e.setAttribute("src",o),s=r.selectFirstElementT("span",this.trigger),r.setText(s,r.getText(n)),r.hasClass(this.trigger,"f-icon")&&!u?r.removeClass(this.trigger,"f-icon"):!r.hasClass(this.trigger,"f-icon")&&u&&r.addClass(this.trigger,"f-icon")):r.setText(this.trigger,r.getText(n))),this.selectedItem&&this.selectedItem.setAttribute(this.getSelectedAttribute(this.selectedItem),"false"),this.selectedItem=n,this.selectedItem.setAttribute(this.getSelectedAttribute(this.selectedItem),"true"),this.updateAriaLabel(),this.collapse(),h=null,f=this.selectedItem;f.parentElement!==this.menu;)f=f.parentElement;return this.initiatePublish({id:f.id,href:this.selectedItem.getAttribute("href"),internal:t,userInitiated:i}),!0},t.prototype.publish=function(n,t){if(!!this.selectedItem)n.onSelectionChanged(t)},t.prototype.handleMenuKeydown=function(n,t){switch(t){case 32:case 13:this.handleMenuEnterKey(n);this.trigger.focus();break;case 27:this.trigger.focus();this.collapse();break;case 38:this.handleMenuArrowKey(!0,n);break;case 40:this.handleMenuArrowKey(!1,n);break;case 9:this.isExpanded()&&this.handleMenuEnterKey(n)}},t.prototype.handleMenuArrowKey=function(n,t){var i=this.items.indexOf(t);i!==-1&&(i+=n?-1:1,i<0?i=this.items.length-1:i>=this.items.length&&(i=0),this.items[i].focus())},t.prototype.handleMenuEnterKey=function(n){this.onItemSelected(n,!1,!0)},t.selector=".c-select-menu",t.typeName="SelectMenu",t.dataAriaLabelFormat="data-aria-label-format",t.ariaExpanded="aria-expanded",t.ariaHidden="aria-hidden",t.ariaSelected="aria-selected",t.ariaLabel="aria-label",t.ariaChecked="aria-checked",t.hiddenFocus="x-hidden-focus",t}(i.Publisher);t.SelectMenu=o});require(["selectMenu","componentFactory"],function(n,t){t.ComponentFactory&&t.ComponentFactory.create&&t.ComponentFactory.create([{component:n.SelectMenu}])});define("viewportCollision",["require","exports","htmlExtensions"],function(n,t,i){"use strict";function r(n,t){var r=i.getClientRect(n),u,f,e,o;return(r.left=Math.round(r.left),r.top=Math.round(r.top),r.right=Math.round(r.right),r.bottom=Math.round(r.bottom),r.width!==0&&(u=!1,f={top:!1,bottom:!1,left:!1,right:!1},t||(e=Math.min(window.innerWidth,document.documentElement.clientWidth),o=Math.min(window.innerHeight,document.documentElement.clientHeight),t={left:0,top:0,right:e,bottom:o,width:e,height:o}),r.left<t.left&&(u=!0,f.left=!0),r.top<t.top&&(u=!0,f.top=!0),r.right>t.right&&(u=!0,f.right=!0),r.bottom>t.bottom&&(u=!0,f.bottom=!0),u))?f:!1}function u(n,t){var r=i.getClientRect(n),u,f;if(r.width===0)return null;t||(u=Math.min(window.innerWidth,document.documentElement.clientWidth),f=Math.min(window.innerHeight,document.documentElement.clientHeight),t={top:0,right:u,bottom:f,left:0,height:f,width:u});var e=Math.round(r.top-t.top),o=Math.round(t.right-r.right),s=Math.round(t.bottom-r.bottom),h=Math.round(r.left-t.left);return e>=0&&o>=0&&s>=0&&h>=0?null:{top:e,right:o,bottom:s,left:h,clientRect:r,viewport:t}}Object.defineProperty(t,"__esModule",{value:!0});t.collidesWith=r;t.getCollisionExtents=u})})();c7d-6c7e, U+6c81-6c83, U+6c85-6c88, U+6c8c, U+6c90, U+6c92-6c96, U+6c99-6c9b, U+6cab, U+6cae, U+6cb3, U+6cb8-6cb9, U+6cbb-6cbf, U+6cc1-6cc2, U+6cc4, U+6cc9-6cca, U+6ccc, U+6cd3, U+6cd7, U+6cdb, U+6ce1-6ce3, U+6ce5, U+6ce8, U+6ceb, U+6cee-6cf0, U+6cf3, U+6d0b-6d0c, U+6d11, U+6d17, U+6d19, U+6d1b, U+6d1e, U+6d25, U+6d27, U+6d29, U+6d32, U+6d35-6d36, U+6d38-6d39, U+6d3b, U+6d3d-6d3e, U+6d41, U+6d59;
}
/* [82] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.82.woff2) format('woff2');
  unicode-range: U+67f0-67f1, U+67f3-67f6, U+67fb, U+67fe, U+6812-6813, U+6816-6817, U+6821-6822, U+682f, U+6838-6839, U+683d, U+6840-6843, U+6848, U+684e, U+6850-6851, U+6853-6854, U+686d, U+6876, U+687f, U+6881, U+6885, U+688f, U+6893-6894, U+6897, U+689d, U+689f, U+68a1-68a2, U+68a7-68a8, U+68ad, U+68af-68b1, U+68b3, U+68b5-68b6, U+68c4-68c5, U+68c9, U+68cb, U+68cd, U+68d2, U+68d5, U+68d7-68d8, U+68da, U+68df-68e0, U+68e7-68e8, U+68ee, U+68f2, U+68f9-68fa, U+6900, U+6905, U+690d-690e, U+6912, U+6927, U+6930, U+693d, U+693f, U+694a, U+6953-6955, U+6957, U+6959-695a, U+695e, U+6960-6963, U+6968, U+696b, U+696d-696f, U+6975, U+6977-6979, U+6995, U+699b-699c, U+69a5, U+69a7, U+69ae, U+69b4, U+69bb, U+69c1, U+69c3, U+69cb-69cd, U+69d0, U+69e8, U+69ea, U+69fb, U+69fd, U+69ff, U+6a02, U+6a0a, U+6a11, U+6a13, U+6a17, U+6a19, U+6a1e-6a1f, U+6a21, U+6a23, U+6a35, U+6a38-6a3a, U+6a3d, U+6a44, U+6a48, U+6a4b, U+6a52-6a53, U+6a58-6a59, U+6a5f, U+6a61, U+6a6b, U+6a80, U+6a84, U+6a89, U+6a8d-6a8e, U+6a97, U+6a9c, U+6aa3, U+6ab3, U+6abb, U+6ac2-6ac3, U+6ad3;
}
/* [83] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.83.woff2) format('woff2');
  unicode-range: U+6607, U+6609-660a, U+660c, U+660f-6611, U+6613-6615, U+661e, U+6620, U+6627-6628, U+662d, U+6630-6631, U+6634, U+6636, U+663a-663b, U+6641, U+6643-6644, U+6649, U+664b, U+664f, U+6659, U+665b, U+665d-665f, U+6664-6669, U+666b, U+666e-666f, U+6673-6674, U+6676-6678, U+6684, U+6687-6689, U+668e, U+6690-6691, U+6696-6698, U+669d, U+66a0, U+66a2, U+66ab, U+66ae, U+66b2-66b4, U+66b9, U+66bb, U+66be, U+66c4, U+66c6-66c7, U+66c9, U+66d6, U+66d9, U+66dc-66dd, U+66e0, U+66e6, U+66f0, U+66f2-66f4, U+66f7, U+66f9-66fa, U+66fc, U+66fe-66ff, U+6703, U+670b, U+670d, U+6714-6715, U+6717, U+671b, U+671d-671f, U+6726-6727, U+672a-672b, U+672d-672e, U+6731, U+6736, U+673a, U+673d, U+6746, U+6749, U+674e-6751, U+6753, U+6756, U+675c, U+675e-675f, U+676d, U+676f-6770, U+6773, U+6775, U+6777, U+677b, U+677e-677f, U+6787, U+6789, U+678b, U+678f-6790, U+6793, U+6795, U+679a, U+679d, U+67af-67b0, U+67b3, U+67b6-67b8, U+67be, U+67c4, U+67cf-67d4, U+67da, U+67dd, U+67e9, U+67ec, U+67ef;
}
/* [84] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.84.woff2) format('woff2');
  unicode-range: U+6392, U+6396, U+6398, U+639b, U+63a0-63a2, U+63a5, U+63a7-63aa, U+63c0, U+63c4, U+63c6, U+63cf, U+63d6, U+63da-63db, U+63e1, U+63ed-63ee, U+63f4, U+63f6-63f7, U+640d, U+640f, U+6414, U+6416-6417, U+641c, U+6422, U+642c-642d, U+643a, U+643e, U+6458, U+6460, U+6469, U+646f, U+6478-647a, U+6488, U+6491-6493, U+649a, U+649e, U+64a4-64a5, U+64ab, U+64ad-64ae, U+64b0, U+64b2, U+64bb, U+64c1, U+64c4-64c5, U+64c7, U+64ca, U+64cd-64ce, U+64d2, U+64d4, U+64d8, U+64da, U+64e1-64e2, U+64e5-64e7, U+64ec, U+64f2, U+64f4, U+64fa, U+64fe, U+6500, U+6504, U+6518, U+651d, U+6523, U+652a-652c, U+652f, U+6536-6539, U+653b, U+653e, U+6548, U+654d-654f, U+6551, U+6556-6557, U+655e, U+6562-6563, U+6566, U+656c-656d, U+6572, U+6574-6575, U+6577-6578, U+657e, U+6582-6583, U+6585, U+658c, U+6590-6591, U+6597, U+6599, U+659b-659c, U+659f, U+65a1, U+65a4-65a5, U+65a7, U+65ab-65ac, U+65af, U+65b7, U+65bc-65bd, U+65c1, U+65c5, U+65cb-65cc, U+65cf, U+65d2, U+65d7, U+65e0, U+65e3, U+65e6, U+65e8-65e9, U+65ec-65ed, U+65f1, U+65f4, U+65fa-65fd, U+65ff, U+6606;
}
/* [85] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.85.woff2) format('woff2');
  unicode-range: U+614c, U+6153, U+6155, U+6158-6159, U+615d, U+615f, U+6162-6164, U+6167-6168, U+616b, U+616e, U+6170, U+6176-6177, U+617d-617e, U+6181-6182, U+618a, U+618e, U+6190-6191, U+6194, U+6198-619a, U+61a4, U+61a7, U+61a9, U+61ab-61ac, U+61ae, U+61b2, U+61b6, U+61ba, U+61be, U+61c3, U+61c7-61cb, U+61e6, U+61f2, U+61f6-61f8, U+61fa, U+61fc, U+61ff-6200, U+6207-6208, U+620a, U+620c-620e, U+6212, U+6216, U+621a, U+621f, U+6221, U+622a, U+622e, U+6230-6231, U+6234, U+6236, U+623e-623f, U+6241, U+6247-6249, U+624d, U+6253, U+6258, U+626e, U+6271, U+6276, U+6279, U+627c, U+627f-6280, U+6284, U+6289-628a, U+6291-6292, U+6295, U+6297-6298, U+629b, U+62ab, U+62b1, U+62b5, U+62b9, U+62bc-62bd, U+62c2, U+62c7-62c9, U+62cc-62cd, U+62cf-62d0, U+62d2-62d4, U+62d6-62d9, U+62db-62dc, U+62ec-62ef, U+62f1, U+62f3, U+62f7, U+62fe-62ff, U+6301, U+6307, U+6309, U+6311, U+632b, U+632f, U+633a-633b, U+633d-633e, U+6349, U+634c, U+634f-6350, U+6355, U+6367-6368, U+636e, U+6372, U+6377, U+637a-637b, U+637f, U+6383, U+6388-6389, U+638c;
}
/* [86] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.86.woff2) format('woff2');
  unicode-range: U+5f11, U+5f13-5f15, U+5f17-5f18, U+5f1b, U+5f1f, U+5f26-5f27, U+5f29, U+5f31, U+5f35, U+5f3a, U+5f3c, U+5f48, U+5f4a, U+5f4c, U+5f4e, U+5f56-5f57, U+5f59, U+5f5b, U+5f62, U+5f66-5f67, U+5f69-5f6d, U+5f70-5f71, U+5f77, U+5f79, U+5f7c, U+5f7f-5f81, U+5f85, U+5f87, U+5f8a-5f8b, U+5f90-5f92, U+5f98-5f99, U+5f9e, U+5fa0-5fa1, U+5fa8-5faa, U+5fae, U+5fb5, U+5fb9, U+5fbd, U+5fc5, U+5fcc-5fcd, U+5fd6-5fd9, U+5fe0, U+5feb, U+5ff5, U+5ffd, U+5fff, U+600f, U+6012, U+6016, U+601c, U+6020-6021, U+6025, U+6028, U+602a, U+602f, U+6041-6043, U+604d, U+6050, U+6052, U+6055, U+6059, U+605d, U+6062-6065, U+6068-606a, U+606c-606d, U+606f-6070, U+6085, U+6089, U+608c-608d, U+6094, U+6096, U+609a-609b, U+609f-60a0, U+60a3-60a4, U+60a7, U+60b0, U+60b2-60b4, U+60b6, U+60b8, U+60bc-60bd, U+60c7, U+60d1, U+60da, U+60dc, U+60df-60e1, U+60f0-60f1, U+60f6, U+60f9-60fb, U+6101, U+6106, U+6108-6109, U+610d-610e, U+6115, U+611a, U+6127, U+6130, U+6134, U+6137, U+613c, U+613e-613f, U+6142, U+6144, U+6147-6148, U+614a-614b;
}
/* [87] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.87.woff2) format('woff2');
  unicode-range: U+5c40, U+5c45-5c46, U+5c48, U+5c4b, U+5c4d-5c4e, U+5c51, U+5c5b, U+5c60, U+5c62, U+5c64-5c65, U+5c6c, U+5c6f, U+5c79, U+5c90-5c91, U+5ca1, U+5ca9, U+5cab-5cac, U+5cb1, U+5cb3, U+5cb5, U+5cb7-5cb8, U+5cba, U+5cbe, U+5cc0, U+5cd9, U+5ce0, U+5ce8, U+5cef-5cf0, U+5cf4, U+5cf6, U+5cfb, U+5cfd, U+5d07, U+5d0d-5d0e, U+5d11, U+5d14, U+5d16-5d17, U+5d19, U+5d27, U+5d29, U+5d4b-5d4c, U+5d50, U+5d69, U+5d6c, U+5d6f, U+5d87, U+5d8b, U+5d9d, U+5da0, U+5da2, U+5daa, U+5db8, U+5dba, U+5dbc-5dbd, U+5dcd, U+5dd2, U+5dd6, U+5de1-5de2, U+5de5-5de8, U+5deb, U+5dee, U+5df1-5df4, U+5df7, U+5dfd-5dfe, U+5e03, U+5e06, U+5e11, U+5e16, U+5e19, U+5e1b, U+5e1d, U+5e25, U+5e2b, U+5e2d, U+5e33, U+5e36, U+5e38, U+5e3d, U+5e3f-5e40, U+5e44-5e45, U+5e47, U+5e4c, U+5e55, U+5e5f, U+5e61-5e63, U+5e72, U+5e77-5e79, U+5e7b-5e7e, U+5e84, U+5e87, U+5e8a, U+5e8f, U+5e95, U+5e97, U+5e9a, U+5e9c, U+5ea0, U+5ea7, U+5eab, U+5ead, U+5eb5-5eb8, U+5ebe, U+5ec2, U+5ec8-5eca, U+5ed0, U+5ed3, U+5ed6, U+5eda-5edb, U+5edf-5ee0, U+5ee2-5ee3, U+5eec, U+5ef3, U+5ef6-5ef7, U+5efa-5efb, U+5f01, U+5f04, U+5f0a;
}
/* [88] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.88.woff2) format('woff2');
  unicode-range: U+59be, U+59c3, U+59c6, U+59c9, U+59cb, U+59d0-59d1, U+59d3-59d4, U+59d9-59da, U+59dc-59dd, U+59e6, U+59e8, U+59ea, U+59ec, U+59ee, U+59f8, U+59fb, U+59ff, U+5a01, U+5a03, U+5a11, U+5a18, U+5a1b-5a1c, U+5a1f-5a20, U+5a25, U+5a29, U+5a36, U+5a3c, U+5a41, U+5a46, U+5a49, U+5a5a, U+5a62, U+5a66, U+5a92, U+5a9a-5a9b, U+5aa4, U+5ac1-5ac2, U+5ac4, U+5ac9, U+5acc, U+5ae1, U+5ae6, U+5ae9, U+5b05, U+5b09, U+5b0b-5b0c, U+5b16, U+5b2a, U+5b40, U+5b43, U+5b51, U+5b54-5b55, U+5b58, U+5b5a, U+5b5c-5b5d, U+5b5f, U+5b63-5b64, U+5b69, U+5b6b, U+5b70-5b71, U+5b75, U+5b7a, U+5b7c, U+5b85, U+5b87-5b88, U+5b8b, U+5b8f, U+5b93, U+5b95-5b99, U+5b9b-5b9c, U+5ba2-5ba6, U+5bac, U+5bae, U+5bb0, U+5bb3-5bb5, U+5bb8-5bb9, U+5bbf-5bc0, U+5bc2-5bc7, U+5bcc, U+5bd0, U+5bd2-5bd4, U+5bd7, U+5bde-5bdf, U+5be1-5be2, U+5be4-5be9, U+5beb-5bec, U+5bee-5bef, U+5bf5-5bf6, U+5bf8, U+5bfa, U+5c01, U+5c04, U+5c07-5c0b, U+5c0d-5c0e, U+5c16, U+5c19, U+5c24, U+5c28, U+5c31, U+5c38-5c3c, U+5c3e-5c3f;
}
/* [89] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.89.woff2) format('woff2');
  unicode-range: U+5703-5704, U+5708, U+570d, U+5712-5713, U+5716, U+5718, U+572d, U+573b, U+5740, U+5742, U+5747, U+574a, U+574d-574e, U+5750-5751, U+5761, U+5764, U+5766, U+576a, U+576e, U+5770, U+5775, U+577c, U+5782, U+5788, U+578b, U+5793, U+57a0, U+57a2-57a3, U+57c3, U+57c7-57c8, U+57cb, U+57df-57e0, U+57f0, U+57f4, U+57f7, U+57f9-57fa, U+57fc, U+5800, U+5802, U+5805-5806, U+5808-580a, U+581e, U+5821, U+5824, U+5827, U+582a, U+582f-5831, U+5835, U+583a, U+584a-584b, U+584f, U+5851, U+5854, U+5857-5858, U+585a, U+585e, U+5861-5862, U+5864, U+5875, U+5879, U+587c, U+587e, U+5883, U+5885, U+5889, U+5893, U+589c, U+589e-589f, U+58a8-58a9, U+58ae, U+58b3, U+58ba-58bb, U+58be, U+58c1, U+58c5, U+58c7, U+58ce, U+58d1, U+58d3, U+58d5, U+58d8-58d9, U+58de-58df, U+58e4, U+58ec, U+58ef, U+58f9-58fb, U+58fd, U+590f, U+5914-5915, U+5919, U+5922, U+592d-592e, U+5931, U+5937, U+593e, U+5944, U+5947-5949, U+594e-5951, U+5954-5955, U+5957, U+595a, U+5960, U+5962, U+5967, U+596a-596e, U+5974, U+5978, U+5982-5984, U+598a, U+5993, U+5996-5997, U+5999, U+59a5, U+59a8, U+59ac, U+59b9, U+59bb;
}
/* [90] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.90.woff2) format('woff2');
  unicode-range: U+539a, U+53a0, U+53a5-53a6, U+53ad, U+53bb, U+53c3, U+53c8-53cb, U+53cd, U+53d4, U+53d6-53d7, U+53db, U+53e1-53e3, U+53e5, U+53e9-53ed, U+53f1, U+53f3, U+53f8, U+5403-5404, U+540a, U+540e-5411, U+541b, U+541d, U+541f-5420, U+5426, U+5429, U+542b, U+5433, U+5438-5439, U+543b-543c, U+543e, U+5442, U+5448, U+544a, U+5451, U+5468, U+546a, U+5471, U+5473, U+5475, U+547b-547d, U+5480, U+5486, U+548e, U+5490, U+54a4, U+54a8, U+54ab-54ac, U+54b3, U+54b8, U+54bd, U+54c0, U+54c4, U+54c8-54c9, U+54e1, U+54e5, U+54e8, U+54ed-54ee, U+54f2, U+54fa, U+5504, U+5506-5507, U+550e, U+5510, U+551c, U+552f, U+5531, U+5535, U+553e, U+5544, U+5546, U+554f, U+5553, U+5556, U+555e, U+5563, U+557c, U+5580, U+5584, U+5586-5587, U+5589-558a, U+5598-559a, U+559c-559d, U+55a7, U+55a9-55ac, U+55ae, U+55c5, U+55c7, U+55d4, U+55da, U+55dc, U+55df, U+55e3-55e4, U+55fd-55fe, U+5606, U+5609, U+5614, U+5617, U+562f, U+5632, U+5634, U+5636, U+5653, U+5668, U+566b, U+5674, U+5686, U+56a5, U+56ac, U+56ae, U+56b4, U+56bc, U+56ca, U+56cd, U+56d1, U+56da-56db, U+56de, U+56e0, U+56f0, U+56f9-56fa;
}
/* [91] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.91.woff2) format('woff2');
  unicode-range: U+516e, U+5175-5178, U+517c, U+5180, U+5186, U+518a, U+518d, U+5192, U+5195, U+5197, U+51a0, U+51a5, U+51aa, U+51ac, U+51b6-51b7, U+51bd, U+51c4, U+51c6, U+51c9, U+51cb-51cd, U+51dc-51de, U+51e1, U+51f0-51f1, U+51f6, U+51f8-51f9, U+51fd, U+5200, U+5203, U+5207-5208, U+520a, U+520e, U+5211, U+5217, U+521d, U+5224-5225, U+522a, U+522e, U+5230, U+5236-523b, U+5243, U+5247, U+524a-524c, U+5254, U+5256, U+525b, U+525d, U+5261, U+5269-526a, U+526f, U+5272, U+5275, U+527d, U+527f, U+5283, U+5287-5289, U+528d, U+5291-5292, U+529f, U+52a3-52a4, U+52a9-52ab, U+52be, U+52c1, U+52c3, U+52c5, U+52c7, U+52c9, U+52cd, U+52d2, U+52d6, U+52d8-52d9, U+52db, U+52dd-52df, U+52e2-52e4, U+52f3, U+52f5, U+52f8, U+52fa-52fb, U+52fe-52ff, U+5305, U+5308, U+530d, U+530f-5310, U+5315, U+5319, U+5320-5321, U+5323, U+532a, U+532f, U+5339, U+533f-5341, U+5343-5344, U+5347-534a, U+534d, U+5351-5354, U+535a, U+535c, U+535e, U+5360, U+5366, U+5368, U+536f-5371, U+5374-5375, U+5377, U+537d, U+537f, U+5384, U+5393, U+5398;
}
/* [92] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.92.woff2) format('woff2');
  unicode-range: U+4f43, U+4f46-4f48, U+4f4d-4f51, U+4f55, U+4f59-4f5a, U+4f69, U+4f6f-4f70, U+4f73, U+4f76, U+4f7a, U+4f7e-4f7f, U+4f81, U+4f83-4f84, U+4f86, U+4f88, U+4f8a-4f8b, U+4f8d, U+4f8f, U+4f91, U+4f96, U+4f98, U+4f9b, U+4f9d, U+4fae-4faf, U+4fb5-4fb6, U+4fbf, U+4fc2-4fc4, U+4fc9-4fca, U+4fce, U+4fd1, U+4fd3-4fd4, U+4fd7, U+4fda, U+4fdf-4fe0, U+4fee-4fef, U+4ff1, U+4ff3, U+4ff5, U+4ff8, U+4ffa, U+5002, U+5006, U+5009, U+500b, U+500d, U+5011-5012, U+5016, U+5019-501a, U+501c, U+501e-501f, U+5021, U+5023-5024, U+5026-5028, U+502a-502d, U+503b, U+5043, U+5047-5049, U+504f, U+5055, U+505a, U+505c, U+5065, U+5074-5076, U+5078, U+5080, U+5085, U+508d, U+5091, U+5098-5099, U+50ac-50ad, U+50b2-50b3, U+50b5, U+50b7, U+50be, U+50c5, U+50c9-50ca, U+50d1, U+50d5-50d6, U+50da, U+50de, U+50e5, U+50e7, U+50ed, U+50f9, U+50fb, U+50ff-5101, U+5104, U+5106, U+5109, U+5112, U+511f, U+5121, U+512a, U+5132, U+5137, U+513a, U+513c, U+5140-5141, U+5143-5148, U+514b-514e, U+5152, U+515c, U+5162, U+5169-516b, U+516d;
}
/* [93] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.93.woff2) format('woff2');
  unicode-range: U+338c-339c, U+339f-33a0, U+33a2-33cb, U+33cf-33d0, U+33d3, U+33d6, U+33d8, U+33db-33dd, U+4e01, U+4e03, U+4e07-4e08, U+4e11, U+4e14-4e15, U+4e18-4e19, U+4e1e, U+4e32, U+4e38-4e39, U+4e42-4e43, U+4e45, U+4e4d-4e4f, U+4e56, U+4e58-4e59, U+4e5d-4e5e, U+4e6b, U+4e6d, U+4e73, U+4e76-4e77, U+4e7e, U+4e82, U+4e86, U+4e88, U+4e8e, U+4e90-4e92, U+4e94-4e95, U+4e98, U+4e9b, U+4e9e, U+4ea1-4ea2, U+4ea4-4ea6, U+4ea8, U+4eab, U+4ead-4eae, U+4eb6, U+4ec0-4ec1, U+4ec4, U+4ec7, U+4ecb, U+4ecd, U+4ed4-4ed5, U+4ed7-4ed9, U+4edd, U+4edf, U+4ee4, U+4ef0, U+4ef2, U+4ef6-4ef7, U+4efb, U+4f01, U+4f09, U+4f0b, U+4f0d-4f11, U+4f2f, U+4f34, U+4f36, U+4f38, U+4f3a, U+4f3c-4f3d;
}
/* [94] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.94.woff2) format('woff2');
  unicode-range: U+3136, U+3138, U+313a-3140, U+3143-3144, U+3150, U+3152, U+3154-3156, U+3158-315b, U+315d-315f, U+3162, U+3164-318c, U+318e, U+3200-321b, U+3231, U+3239, U+3251-325a, U+3260-327b, U+327e-327f, U+328a-3290, U+3294, U+329e, U+32a5, U+3380-3384, U+3388-338b;
}
/* [95] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.95.woff2) format('woff2');
  unicode-range: U+2f7d, U+2f7f-2f8b, U+2f8e-2f90, U+2f92-2f97, U+2f99-2fa0, U+2fa2-2fa3, U+2fa5-2fa9, U+2fac-2fb1, U+2fb3-2fbc, U+2fc1-2fca, U+2fcd-2fd4, U+3003, U+3012-3019, U+301c, U+301e-3020, U+3036, U+3041, U+3043, U+3045, U+3047, U+3049, U+304e, U+3050, U+3052, U+3056, U+305a, U+305c, U+305e, U+3062, U+3065, U+306c, U+3070-307d, U+3080, U+3085, U+3087, U+308e, U+3090-3091, U+30a1, U+30a5, U+30a9, U+30ae, U+30b1-30b2, U+30b4, U+30b6, U+30bc-30be, U+30c2, U+30c5, U+30cc, U+30d2, U+30d4, U+30d8-30dd, U+30e4, U+30e6, U+30e8, U+30ee, U+30f0-30f2, U+30f4-30f6, U+3133, U+3135;
}
/* [96] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.96.woff2) format('woff2');
  unicode-range: U+2541-254b, U+25a4-25a9, U+25b1, U+25b5, U+25b9, U+25bf, U+25c1, U+25c3, U+25c9-25ca, U+25cc, U+25ce, U+25d0-25d1, U+25e6, U+25ef, U+260f, U+261d, U+261f, U+262f, U+2660, U+2664, U+2667-2669, U+266d, U+266f, U+2716, U+271a, U+273d, U+2756, U+2776-277f, U+278a-2793, U+2963, U+2965, U+2ac5-2ac6, U+2acb-2acc, U+2f00, U+2f04, U+2f06, U+2f08, U+2f0a-2f0b, U+2f11-2f12, U+2f14, U+2f17-2f18, U+2f1c-2f1d, U+2f1f-2f20, U+2f23-2f26, U+2f28-2f29, U+2f2b, U+2f2d, U+2f2f-2f32, U+2f38, U+2f3c-2f40, U+2f42-2f4c, U+2f4f-2f52, U+2f54-2f58, U+2f5a-2f66, U+2f69-2f70, U+2f72-2f76, U+2f78, U+2f7a-2f7c;
}
/* [97] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.97.woff2) format('woff2');
  unicode-range: U+2479-2487, U+249c-24d1, U+24d3-24d7, U+24d9-24e9, U+24eb-24f4, U+2500-2501, U+2503, U+250c-2513, U+2515-2516, U+2518-2540;
}
/* [98] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.98.woff2) format('woff2');
  unicode-range: U+215b-215e, U+2162-2169, U+2170-2179, U+2195-2199, U+21b0-21b4, U+21bc, U+21c0, U+21c4-21c5, U+21cd, U+21cf-21d4, U+21e0-21e3, U+21e6-21e9, U+2200, U+2202-2203, U+2206-2209, U+220b-220c, U+220f, U+2211, U+2213, U+221a, U+221d-2220, U+2222, U+2225-2227, U+2229-222c, U+222e, U+2234-2237, U+223d, U+2243, U+2245, U+2248, U+2250-2253, U+225a, U+2260-2262, U+2264-2267, U+226a-226b, U+226e-2273, U+2276-2277, U+2279-227b, U+2280-2287, U+228a-228b, U+2295-2297, U+22a3-22a5, U+22bb-22bc, U+22ce-22cf, U+22da-22db, U+22ee-22ef, U+2306, U+2312, U+2314, U+2467-2478;
}
/* [99] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.99.woff2) format('woff2');
  unicode-range: U+81-82, U+84, U+a2-a5, U+a7-a8, U+aa, U+ac-ad, U+b1-b3, U+b6, U+b8-ba, U+bc-be, U+c0, U+c2, U+c6-cb, U+ce-d0, U+d4, U+d8-d9, U+db-dc, U+de-df, U+e6, U+eb, U+ee-f0, U+f4, U+f7-f9, U+fb, U+fe-ff, U+111, U+126-127, U+132-133, U+138, U+13f-142, U+149-14b, U+152-153, U+166-167, U+2bc, U+2c7, U+2d0, U+2d8-2d9, U+2db-2dd, U+391-394, U+396-3a1, U+3a3-3a9, U+3b2-3b6, U+3b8, U+3bc, U+3be-3c1, U+3c3-3c9, U+2010, U+2015-2016, U+2018-2019, U+201b, U+201f-2021, U+2025, U+2030, U+2033-2036, U+203c, U+203e, U+2042, U+2074, U+207a-207f, U+2081-2084, U+2109, U+2113, U+2116, U+2121, U+2126, U+212b, U+2153-2154;
}
/* [100] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.100.woff2) format('woff2');
  unicode-range: U+e8, U+2da, U+2160, U+2194, U+3054, U+3058, U+306d, U+3086, U+308d, U+30ac, U+30bb, U+30c4, U+30cd-30ce, U+30e2, U+3132, U+3146, U+3149, U+339d, U+4e3b, U+4f0a, U+4fdd, U+4fe1, U+5409, U+540c, U+5834, U+592a-592b, U+5b9a, U+5dde, U+5e0c, U+5e73, U+5f0f, U+60f3, U+653f, U+661f, U+662f, U+667a, U+683c, U+6b4c, U+6c11, U+767c, U+76ee, U+76f4, U+77f3, U+79d1, U+7a7a, U+7b2c, U+7d22, U+8207, U+8a00, U+8a71, U+9280, U+9580, U+958b, U+96c6, U+9762, U+98df, U+9ed1, U+ac2d, U+adc8, U+add3, U+af48, U+b014, U+b134-b135, U+b158, U+b2aa, U+b35f, U+b6a4, U+b9cf, U+bb63, U+bd23, U+be91, U+c29b, U+c3f4, U+c42c, U+c55c, U+c573, U+c58f, U+c78c, U+c7dd, U+c8f5, U+cad1, U+cc48, U+cf10, U+cf20, U+d03c, U+d07d, U+d2a0, U+d30e, U+d38d, U+d3a8, U+d3c8, U+d5e5, U+d5f9, U+d6e4, U+f90a, U+ff02, U+ff1c;
}
/* [101] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.101.woff2) format('woff2');
  unicode-range: U+3b1, U+2466, U+25a1, U+25a3, U+261c, U+3008-3009, U+305b, U+305d, U+3069, U+30a7, U+30ba, U+30cf, U+30ef, U+3151, U+3157, U+4e4b, U+4e5f, U+4e8c, U+4eca, U+4ed6, U+4f5b, U+50cf, U+5149, U+5165, U+5171, U+5229, U+529b, U+5316, U+539f, U+53f2, U+571f, U+5728, U+58eb, U+591c, U+5b78, U+5c11, U+5c55, U+5ddd, U+5e02, U+5fb7, U+60c5, U+610f, U+611f, U+6625, U+66f8, U+6797, U+679c, U+682a, U+6d2a, U+706b, U+7406, U+767b, U+76f8, U+77e5, U+7acb, U+898b, U+8a69, U+8def, U+8fd1, U+901a, U+90e8, U+91cd, U+975e, U+ae14, U+ae6c, U+aec0, U+afc7, U+afc9, U+b01c, U+b028, U+b308, U+b311, U+b314, U+b31c, U+b524, U+b560, U+b764, U+b920, U+b9e3, U+bd48, U+be7d, U+c0db, U+c231, U+c270, U+c2e3, U+c37d, U+c3ed, U+c530, U+c6a5, U+c6dc, U+c7a4, U+c954, U+c974, U+d000, U+d565, U+d667, U+d6c5, U+d79d, U+ff1e;
}
/* [102] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.102.woff2) format('woff2');
  unicode-range: U+131, U+2032, U+2465, U+2642, U+3048, U+3051, U+3083-3084, U+308f, U+30c0, U+30d1, U+30d3, U+30d6, U+30df, U+30e7, U+3153, U+4e16, U+4e8b, U+4ee5, U+5206, U+52a0, U+52d5, U+53e4, U+53ef, U+54c1, U+57ce, U+597d, U+5b8c, U+5ea6, U+5f8c, U+5f97, U+6210, U+6240, U+624b, U+6728, U+6bd4, U+7236, U+7269, U+7279, U+738b, U+7528, U+7530, U+767e, U+798f, U+8005, U+8a18, U+90fd, U+91cc, U+9577, U+9593, U+98a8, U+ac20, U+acf6, U+ad90, U+af5d, U+af80, U+afcd, U+aff0, U+b0a1, U+b0b5, U+b1fd, U+b2fc, U+b380, U+b51b, U+b584, U+b5b3, U+b8fd, U+b93c, U+b9f4, U+bb44, U+bc08, U+bc27, U+bc49, U+be55, U+be64, U+bfb0, U+bfc5, U+c178, U+c21f, U+c314, U+c4f1, U+c58d, U+c664, U+c698, U+c6a7, U+c6c1, U+c9ed, U+cac0, U+cacc, U+cad9, U+ccb5, U+cdcc, U+d0e4, U+d143, U+d320, U+d330, U+d54d, U+ff06, U+ff1f, U+ff5e;
}
/* [103] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.103.woff2) format('woff2');
  unicode-range: U+b4, U+20a9, U+20ac, U+2190, U+24d8, U+2502, U+2514, U+2592, U+25c7-25c8, U+2663, U+3060, U+3064, U+3081, U+3088, U+30a3, U+30a6, U+30aa, U+30b5, U+30c7, U+30ca-30cb, U+30d0, U+30e3, U+30e5, U+339e, U+4e09, U+4eac, U+4f5c, U+5167-5168, U+516c, U+51fa, U+5408, U+540d, U+591a, U+5b57, U+6211, U+65b9, U+660e, U+6642, U+6700, U+6b63, U+6e2f, U+7063, U+7532, U+793e, U+81ea, U+8272, U+82b1, U+897f, U+8eca, U+91ce, U+ac38, U+ad76, U+ae84, U+aecc, U+b07d, U+b0b1, U+b215, U+b2a0, U+b310, U+b3d7, U+b52a, U+b618, U+b775, U+b797, U+bcd5, U+bd59, U+be80, U+bea8, U+bed1, U+bee4-bee5, U+c060, U+c2ef, U+c329, U+c3dc, U+c597, U+c5bd, U+c5e5, U+c69c, U+c9d6, U+ca29, U+ca5c, U+ca84, U+cc39, U+cc3b, U+ce89, U+cee5, U+cf65, U+cf85, U+d058, U+d145, U+d22d, U+d325, U+d37d, U+d3ad, U+d769, U+ff0c;
}
/* [104] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.104.woff2) format('woff2');
  unicode-range: U+2161, U+2228, U+2299, U+2464, U+2517, U+2640, U+3042, U+304a, U+3053, U+3061, U+307f, U+3082, U+308c, U+3092, U+30a8, U+30ab, U+30ad, U+30b0, U+30b3, U+30b7, U+30c1, U+30c6, U+30c9, U+30d5, U+30d7, U+30de, U+30e0-30e1, U+30ec-30ed, U+4e0b, U+4e0d, U+4ee3, U+53f0, U+548c, U+5b89, U+5bb6, U+5c0f, U+611b, U+6771, U+6aa2, U+6bcd, U+6c34, U+6cd5, U+6d77, U+767d, U+795e, U+8ecd, U+9999, U+9ad8, U+ac07, U+ac1a, U+ac40, U+ad0c, U+ad88, U+ada4, U+ae01, U+ae65, U+aebd, U+aec4, U+afe8, U+b139, U+b205, U+b383, U+b38c, U+b42c, U+b461, U+b55c, U+b78f, U+b8fb, U+b9f7, U+bafc, U+bc99, U+bed8, U+bfcd, U+c0bf, U+c0f9, U+c167, U+c204, U+c20f, U+c22f, U+c258, U+c298, U+c2bc, U+c388, U+c501, U+c50c, U+c5b9, U+c5ce, U+c641, U+c648, U+c73d, U+ca50, U+ca61, U+cc4c, U+ceac, U+d0d4, U+d5f7, U+d6d7, U+ff1a;
}
/* [105] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.105.woff2) format('woff2');
  unicode-range: U+2103, U+2463, U+25c6, U+25cb, U+266c, U+3001, U+300a, U+3046, U+304c-304d, U+304f, U+3055, U+3059, U+3063, U+3066-3068, U+306f, U+3089, U+30b8, U+30bf, U+314f, U+4e0a, U+570b, U+5730, U+5916, U+5929, U+5c71, U+5e74, U+5fc3, U+601d, U+6027, U+63d0, U+6709, U+6734, U+751f, U+7684, U+82f1, U+9053, U+91d1, U+97f3, U+ac2f, U+ac4d, U+adc4, U+ade4, U+ae41, U+ae4d-ae4e, U+aed1, U+afb9, U+b0e0, U+b299, U+b365, U+b46c, U+b480, U+b4c8, U+b7b4, U+b819, U+b918, U+baab, U+bab9, U+be8f, U+bed7, U+c0ec, U+c19f, U+c1a5, U+c3d9, U+c464, U+c53d, U+c553, U+c570, U+c5cc, U+c633, U+c6a4, U+c7a3, U+c7a6, U+c886, U+c9d9-c9da, U+c9ec, U+ca0c, U+cc21, U+cd1b, U+cd78, U+cdc4, U+cef8, U+cfe4, U+d0a5, U+d0b5, U+d0ec, U+d15d, U+d188, U+d23c, U+d2ac, U+d729, U+d79b, U+ff01, U+ff08-ff09, U+ff5c;
}
/* [106] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.106.woff2) format('woff2');
  unicode-range: U+2039-203a, U+223c, U+25b3, U+25b7, U+25bd, U+25cf, U+266a, U+3002, U+300b, U+304b, U+3057, U+305f, U+306a-306b, U+307e, U+308a-308b, U+3093, U+30a2, U+30af, U+30b9, U+30c3, U+30c8, U+30e9-30eb, U+33a1, U+4e00, U+524d, U+5357, U+5b50, U+7121, U+884c, U+9751, U+ac94, U+aebe, U+aecd, U+af08, U+af41, U+af49, U+b010, U+b053, U+b109, U+b11b, U+b128, U+b154, U+b291, U+b2e6, U+b301, U+b385, U+b525, U+b5b4, U+b729, U+b72f, U+b738, U+b7ff, U+b837, U+b975, U+ba67, U+bb47, U+bc1f, U+bd90, U+bfd4, U+c27c, U+c324, U+c379, U+c3e0, U+c465, U+c53b, U+c58c, U+c610, U+c653, U+c6cd, U+c813, U+c82f, U+c999, U+c9e0, U+cac4, U+cad3, U+cbd4, U+cc10, U+cc22, U+ccb8, U+ccbc, U+cda5, U+ce84, U+cea3, U+cf67, U+cfe1, U+d241, U+d30d, U+d31c, U+d391, U+d401, U+d479, U+d5c9, U+d5db, U+d649, U+d6d4;
}
/* [107] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.107.woff2) format('woff2');
  unicode-range: U+b0, U+e9, U+2193, U+2462, U+260e, U+261e, U+300e-300f, U+3044, U+30a4, U+30fb-30fc, U+314d, U+5973, U+6545, U+6708, U+7537, U+ac89, U+ac9c, U+acc1, U+ad04, U+ad75, U+ad7d, U+ae45, U+ae61, U+af42, U+b0ab, U+b0af, U+b0b3, U+b12c, U+b194, U+b1a8, U+b220, U+b258, U+b284, U+b2ff, U+b315, U+b371, U+b3d4-b3d5, U+b460, U+b527, U+b534, U+b810, U+b818, U+b98e, U+ba55, U+bbac, U+bc0b, U+bc40, U+bca1, U+bccd, U+bd93, U+be54, U+be5a, U+bf08, U+bf50, U+bf55, U+bfdc, U+c0c0, U+c0d0, U+c0f4, U+c100, U+c11e, U+c170, U+c20d, U+c274, U+c290, U+c308, U+c369, U+c539, U+c587, U+c5ff, U+c6ec, U+c70c, U+c7ad, U+c7c8, U+c83c, U+c881, U+cb48, U+cc60, U+ce69, U+ce6b, U+ce75, U+cf04, U+cf08, U+cf55, U+cf70, U+cffc, U+d0b7, U+d1a8, U+d2c8, U+d384, U+d47c, U+d48b, U+d5dd, U+d5e8, U+d720, U+d759, U+f981;
}
/* [108] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.108.woff2) format('woff2');
  unicode-range: U+e0, U+e2, U+395, U+3b7, U+3ba, U+2460-2461, U+25a0, U+3010-3011, U+306e, U+30f3, U+314a, U+314c, U+5927, U+65b0, U+7e41, U+97d3, U+9ad4, U+ad49, U+ae0b, U+ae0d, U+ae43, U+ae5d, U+aecf, U+af3c, U+af64, U+afd4, U+b080, U+b084, U+b0c5, U+b10c, U+b1e8, U+b2ac, U+b36e, U+b451, U+b515, U+b540, U+b561, U+b6ab, U+b6b1, U+b72c, U+b730, U+b744, U+b800, U+b8ec, U+b8f0, U+b904, U+b968, U+b96d, U+b987, U+b9d9, U+bb36, U+bb49, U+bc2d, U+bc43, U+bcf6, U+bd89, U+be57, U+be61, U+bed4, U+c090, U+c130, U+c148, U+c19c, U+c2f9, U+c36c, U+c37c, U+c384, U+c3df, U+c575, U+c584, U+c660, U+c719, U+c816, U+ca4d, U+ca54, U+cabc, U+cb49, U+cc14, U+cff5, U+d004, U+d038, U+d0b4, U+d0d3, U+d0e0, U+d0ed, U+d131, U+d1b0, U+d31f, U+d33d, U+d3a0, U+d3ab, U+d514, U+d584, U+d6a1, U+d6cc, U+d749, U+d760, U+d799;
}
/* [109] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.109.woff2) format('woff2');
  unicode-range: U+24, U+60, U+3b9, U+3bb, U+3bd, U+2191, U+2606, U+300c-300d, U+3131, U+3134, U+3139, U+3141-3142, U+3148, U+3161, U+3163, U+321c, U+4eba, U+5317, U+ac31, U+ac77, U+ac9f, U+acb9, U+acf0-acf1, U+acfd, U+ad73, U+af3d, U+b00c, U+b04a, U+b057, U+b0c4, U+b188, U+b1cc, U+b214, U+b2db, U+b2ee, U+b304, U+b4ed, U+b518, U+b5bc, U+b625, U+b69c-b69d, U+b7ac, U+b801, U+b86c, U+b959, U+b95c, U+b985, U+ba48, U+bb58, U+bc0c, U+bc38, U+bc85, U+bc9a, U+bf40, U+c068, U+c0bd, U+c0cc, U+c12f, U+c149, U+c1e0, U+c22b, U+c22d, U+c250, U+c2fc, U+c300, U+c313, U+c370, U+c3d8, U+c557, U+c580, U+c5e3, U+c62e, U+c634, U+c6f0, U+c74d, U+c783, U+c78e, U+c796, U+c7bc, U+c92c, U+ca4c, U+cc1c, U+cc54, U+cc59, U+ce04, U+cf30, U+cfc4, U+d140, U+d321, U+d38c, U+d399, U+d54f, U+d587, U+d5d0, U+d6e8, U+d770;
}
/* [110] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.110.woff2) format('woff2');
  unicode-range: U+d7, U+ea, U+fc, U+2192, U+25bc, U+3000, U+3137, U+3145, U+315c, U+7f8e, U+ac13, U+ac71, U+ac90, U+acb8, U+ace7, U+ad7f, U+ae50, U+aef4, U+af34, U+afbc, U+b048, U+b09a, U+b0ad, U+b0bc, U+b113, U+b125, U+b141, U+b20c, U+b2d9, U+b2ed, U+b367, U+b369, U+b374, U+b3cb, U+b4ec, U+b611, U+b760, U+b81b, U+b834, U+b8b0, U+b8e1, U+b989, U+b9d1, U+b9e1, U+b9fa, U+ba4d, U+ba78, U+bb35, U+bb54, U+bbf9, U+bc11, U+bcb3, U+bd05, U+bd95, U+bdd4, U+be10, U+bed0, U+bf51, U+c0d8, U+c232, U+c2b7, U+c2eb, U+c378, U+c500, U+c52c, U+c549, U+c568, U+c598, U+c5c9, U+c61b, U+c639, U+c67c, U+c717, U+c78a, U+c80a, U+c90c-c90d, U+c950, U+c9e7, U+cbe4, U+cca9, U+cce4, U+cdb0, U+ce78, U+ce94, U+ce98, U+cf8c, U+d018, U+d034, U+d0f1, U+d1b1, U+d280, U+d2f8, U+d338, U+d380, U+d3b4, U+d610, U+d69f, U+d6fc, U+d758;
}
/* [111] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.111.woff2) format('woff2');
  unicode-range: U+e7, U+2022, U+203b, U+25c0, U+2605, U+2661, U+3147, U+318d, U+672c, U+8a9e, U+acaa, U+acbc, U+ad1c, U+ae4a, U+ae5c, U+b044, U+b054, U+b0c8-b0c9, U+b2a6, U+b2d0, U+b35c, U+b364, U+b428, U+b454, U+b465, U+b4b7, U+b4e3, U+b51c, U+b5a1, U+b784, U+b790, U+b7ab, U+b7f4, U+b82c, U+b835, U+b8e9, U+b8f8, U+b9d8, U+b9f9, U+ba5c, U+ba64, U+babd, U+bb18, U+bb3b, U+bbff, U+bc0d, U+bc45, U+bc97, U+bcbc, U+be45, U+be75, U+be7c, U+bfcc, U+c0b6, U+c0f7, U+c14b, U+c2b4, U+c30d, U+c4f8, U+c5bb, U+c5d1, U+c5e0, U+c5ee, U+c5fd, U+c606, U+c6c5, U+c6e0, U+c708, U+c81d, U+c820, U+c824, U+c878, U+c918, U+c96c, U+c9e4, U+c9f1, U+cc2e, U+cd09, U+cea1, U+cef5, U+cef7, U+cf64, U+cf69, U+cfe8, U+d035, U+d0ac, U+d230, U+d234, U+d2f4, U+d31d, U+d575, U+d578, U+d608, U+d614, U+d718, U+d751, U+d761, U+d78c, U+d790;
}
/* [112] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.112.woff2) format('woff2');
  unicode-range: U+2665, U+3160, U+4e2d, U+6587, U+65e5, U+ac12, U+ac14, U+ac16, U+ac81, U+ad34, U+ade0, U+ae54, U+aebc, U+af2c, U+afc0, U+afc8, U+b04c, U+b08c, U+b099, U+b0a9, U+b0ac, U+b0ae, U+b0b8, U+b123, U+b179, U+b2e5, U+b2f7, U+b4c0, U+b531, U+b538, U+b545, U+b550, U+b5a8, U+b6f0, U+b728, U+b73b, U+b7ad, U+b7ed, U+b809, U+b864, U+b86d, U+b871, U+b9bf, U+b9f5, U+ba40, U+ba4b, U+ba58, U+ba87, U+baac, U+bbc0, U+bc16, U+bc34, U+bd07, U+bd99, U+be59, U+bfd0, U+c058, U+c0e4, U+c0f5, U+c12d, U+c139, U+c228, U+c529, U+c5c7, U+c635, U+c637, U+c735, U+c77d, U+c787, U+c789, U+c8c4, U+c989, U+c98c, U+c9d0, U+c9d3, U+cc0c, U+cc99, U+cd0c, U+cd2c, U+cd98, U+cda4, U+ce59, U+ce60, U+ce6d, U+cea0, U+d0d0-d0d1, U+d0d5, U+d14d, U+d1a4, U+d29c, U+d2f1, U+d301, U+d39c, U+d3bc, U+d4e8, U+d540, U+d5ec, U+d640, U+d750;
}
/* [113] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.113.woff2) format('woff2');
  unicode-range: U+5e, U+25b2, U+25b6, U+314e, U+ac24, U+ace1, U+ace4, U+ae68, U+af2d, U+b0d0, U+b0e5, U+b150, U+b155, U+b193, U+b2c9, U+b2dd, U+b3c8, U+b3fc, U+b410, U+b458, U+b4dd, U+b5a0, U+b5a4, U+b5bb, U+b7b5, U+b838, U+b840, U+b86f, U+b8f9, U+b960, U+b9e5, U+bab8, U+bb50, U+bc1d, U+bc24-bc25, U+bca8, U+bcbd, U+bd04, U+bd10, U+bd24, U+be48, U+be5b, U+be68, U+c05c, U+c12c, U+c140, U+c15c, U+c168, U+c194, U+c219, U+c27d, U+c2a8, U+c2f1, U+c2f8, U+c368, U+c554-c555, U+c559, U+c564, U+c5d8, U+c5fc, U+c625, U+c65c, U+c6b1, U+c728, U+c794, U+c84c, U+c88c, U+c8e0, U+c8fd, U+c998, U+c9dd, U+cc0d, U+cc30, U+ceec, U+cf13, U+cf1c, U+cf5c, U+d050, U+d07c, U+d0a8, U+d134, U+d138, U+d154, U+d1f4, U+d2bc, U+d329, U+d32c, U+d3d0, U+d3f4, U+d3fc, U+d56b, U+d5cc, U+d600-d601, U+d639, U+d6c8, U+d754, U+d765;
}
/* [114] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.114.woff2) format('woff2');
  unicode-range: U+3c-3d, U+2026, U+24d2, U+314b, U+ac11, U+acf3, U+ad74, U+ad81, U+adf9, U+ae34, U+af43, U+afb8, U+b05d, U+b07c, U+b110, U+b118, U+b17c, U+b180, U+b18d, U+b192, U+b2cc, U+b355, U+b378, U+b4a4, U+b4ef, U+b78d, U+b799, U+b7a9, U+b7fd, U+b807, U+b80c, U+b839, U+b9b4, U+b9db, U+ba3c, U+bab0, U+bba4, U+bc94, U+be4c, U+c154, U+c1c4, U+c26c, U+c2ac, U+c2ed, U+c4f4, U+c55e, U+c561, U+c571, U+c5b5, U+c5c4, U+c654-c655, U+c695, U+c6e8, U+c6f9, U+c724, U+c751, U+c775, U+c7a0, U+c7c1, U+c874, U+c880, U+c9d5, U+c9f8, U+cabd, U+cc29, U+cc2c, U+cca8, U+ccab, U+ccd0, U+ce21, U+ce35, U+ce7c, U+ce90, U+cee8, U+cef4, U+cfe0, U+d070, U+d0b9, U+d0c1, U+d0c4, U+d0c8, U+d15c, U+d1a1, U+d2c0, U+d300, U+d314, U+d3ed, U+d478, U+d480, U+d48d, U+d508, U+d53d, U+d5e4, U+d611, U+d61c, U+d68d, U+d6a8, U+d798;
}
/* [115] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.115.woff2) format('woff2');
  unicode-range: U+23, U+25, U+5f, U+a9, U+ac08, U+ac78, U+aca8, U+acac, U+ace8, U+ad70, U+adc0, U+addc, U+b137, U+b140, U+b208, U+b290, U+b2f5, U+b3c5, U+b3cc, U+b420, U+b429, U+b529, U+b530, U+b77d, U+b79c, U+b7a8, U+b7c9, U+b7f0, U+b7fc, U+b828, U+b860, U+b9ad, U+b9c1, U+b9c9, U+b9dd-b9de, U+b9e8, U+ba38-ba39, U+babb, U+bc00, U+bc8c, U+bca0, U+bca4, U+bcd1, U+bcfc, U+bd09, U+bdf0, U+be60, U+c0ad, U+c0b4, U+c0bc, U+c190, U+c1fc, U+c220, U+c288, U+c2b9, U+c2f6, U+c528, U+c545, U+c558, U+c5bc, U+c5d4, U+c600, U+c644, U+c6c0, U+c6c3, U+c721, U+c798, U+c7a1, U+c811, U+c838, U+c871, U+c904, U+c990, U+c9dc, U+cc38, U+cc44, U+cca0, U+cd1d, U+cd95, U+cda9, U+ce5c, U+cf00, U+cf58, U+d150, U+d22c, U+d305, U+d328, U+d37c, U+d3f0, U+d551, U+d5a5, U+d5c8, U+d5d8, U+d63c, U+d64d, U+d669, U+d734, U+d76c;
}
/* [116] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.116.woff2) format('woff2');
  unicode-range: U+26, U+2b, U+3e, U+40, U+7e, U+ac01, U+ac19, U+ac1d, U+aca0, U+aca9, U+acb0, U+ad8c, U+ae09, U+ae38, U+ae40, U+aed8, U+b09c, U+b0a0, U+b108, U+b204, U+b298, U+b2d8, U+b2eb-b2ec, U+b2f4, U+b313, U+b358, U+b450, U+b4e0, U+b54c, U+b610, U+b780, U+b78c, U+b791, U+b8e8, U+b958, U+b974, U+b984, U+b9b0, U+b9bc-b9bd, U+b9ce, U+ba70, U+bbfc, U+bc0f, U+bc15, U+bc1b, U+bc31, U+bc95, U+bcc0, U+bcc4, U+bd81, U+bd88, U+c0c8, U+c11d, U+c13c, U+c158, U+c18d, U+c1a1, U+c21c, U+c4f0, U+c54a, U+c560, U+c5b8, U+c5c8, U+c5f4, U+c628, U+c62c, U+c678, U+c6cc, U+c808, U+c810, U+c885, U+c88b, U+c900, U+c988, U+c99d, U+c9c8, U+cc3d-cc3e, U+cc45, U+cd08, U+ce20, U+cee4, U+d074, U+d0a4, U+d0dd, U+d2b9, U+d3b8, U+d3c9, U+d488, U+d544, U+d559, U+d56d, U+d588, U+d615, U+d648, U+d655, U+d658, U+d65c;
}
/* [117] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.117.woff2) format('woff2');
  unicode-range: U+d, U+48, U+7c, U+ac10, U+ac15, U+ac74, U+ac80, U+ac83, U+acc4, U+ad11, U+ad50, U+ad6d, U+adfc, U+ae00, U+ae08, U+ae4c, U+b0a8, U+b124, U+b144, U+b178, U+b274, U+b2a5, U+b2e8, U+b2f9, U+b354, U+b370, U+b418, U+b41c, U+b4f1, U+b514, U+b798, U+b808, U+b824-b825, U+b8cc, U+b978, U+b9d0, U+b9e4, U+baa9, U+bb3c, U+bc18, U+bc1c, U+bc30, U+bc84, U+bcf5, U+bcf8, U+bd84, U+be0c, U+be14, U+c0b0, U+c0c9, U+c0dd, U+c124, U+c2dd, U+c2e4, U+c2ec, U+c54c, U+c57c-c57d, U+c591, U+c5c5-c5c6, U+c5ed, U+c608, U+c640, U+c6b8, U+c6d4, U+c784, U+c7ac, U+c800-c801, U+c9c1, U+c9d1, U+cc28, U+cc98, U+cc9c, U+ccad, U+cd5c, U+cd94, U+cd9c, U+cde8, U+ce68, U+cf54, U+d0dc, U+d14c, U+d1a0, U+d1b5, U+d2f0, U+d30c, U+d310, U+d398, U+d45c, U+d50c, U+d53c, U+d560, U+d568, U+d589, U+d604, U+d6c4, U+d788;
}
/* [118] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.118.woff2) format('woff2');
  unicode-range: U+39, U+49, U+4d-4e, U+a0, U+ac04, U+ac1c, U+ac70, U+ac8c, U+acbd, U+acf5, U+acfc, U+ad00, U+ad6c, U+adf8, U+b098, U+b0b4, U+b294, U+b2c8, U+b300, U+b3c4, U+b3d9, U+b4dc, U+b4e4, U+b77c, U+b7ec, U+b85d, U+b97c, U+b9c8, U+b9cc, U+ba54, U+ba74, U+ba85, U+baa8, U+bb34, U+bb38, U+bbf8, U+bc14, U+bc29, U+bc88, U+bcf4, U+bd80, U+be44, U+c0c1, U+c11c, U+c120, U+c131, U+c138, U+c18c, U+c218, U+c2b5, U+c2e0, U+c544, U+c548, U+c5b4, U+c5d0, U+c5ec, U+c5f0, U+c601, U+c624, U+c694, U+c6a9, U+c6b0, U+c6b4, U+c6d0, U+c704, U+c720, U+c73c, U+c740, U+c744, U+c74c, U+c758, U+c77c, U+c785, U+c788, U+c790-c791, U+c7a5, U+c804, U+c815, U+c81c, U+c870, U+c8fc, U+c911, U+c9c4, U+ccb4, U+ce58, U+ce74, U+d06c, U+d0c0, U+d130, U+d2b8, U+d3ec, U+d504, U+d55c, U+d569, U+d574, U+d638, U+d654, U+d68c;
}
/* [119] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.119.woff2) format('woff2');
  unicode-range: U+20-22, U+27-2a, U+2c-38, U+3a-3b, U+3f, U+41-47, U+4a-4c, U+4f-5d, U+61-7b, U+7d, U+a1, U+ab, U+ae, U+b7, U+bb, U+bf, U+2013-2014, U+201c-201d, U+2122, U+ac00, U+ace0, U+ae30, U+b2e4, U+b85c, U+b9ac, U+c0ac, U+c2a4, U+c2dc, U+c774, U+c778, U+c9c0, U+d558;
}
/* cyrillic */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoySLfg8U4h.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoySLzg8U4h.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoySL3g8U4h.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoySLPg8Q.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* [0] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.0.woff2) format('woff2');
  unicode-range: U+f9ca-fa0b, U+ff03-ff05, U+ff07, U+ff0a-ff0b, U+ff0d-ff19, U+ff1b, U+ff1d, U+ff20-ff5b, U+ff5d, U+ffe0-ffe3, U+ffe5-ffe6;
}
/* [1] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.1.woff2) format('woff2');
  unicode-range: U+f92f-f980, U+f982-f9c9;
}
/* [2] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.2.woff2) format('woff2');
  unicode-range: U+d723-d728, U+d72a-d733, U+d735-d748, U+d74a-d74f, U+d752-d753, U+d755-d757, U+d75a-d75f, U+d762-d764, U+d766-d768, U+d76a-d76b, U+d76d-d76f, U+d771-d787, U+d789-d78b, U+d78d-d78f, U+d791-d797, U+d79a, U+d79c, U+d79e-d7a3, U+f900-f909, U+f90b-f92e;
}
/* [3] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.3.woff2) format('woff2');
  unicode-range: U+d679-d68b, U+d68e-d69e, U+d6a0, U+d6a2-d6a7, U+d6a9-d6c3, U+d6c6-d6c7, U+d6c9-d6cb, U+d6cd-d6d3, U+d6d5-d6d6, U+d6d8-d6e3, U+d6e5-d6e7, U+d6e9-d6fb, U+d6fd-d717, U+d719-d71f, U+d721-d722;
}
/* [4] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.4.woff2) format('woff2');
  unicode-range: U+d5bc-d5c7, U+d5ca-d5cb, U+d5cd-d5cf, U+d5d1-d5d7, U+d5d9-d5da, U+d5dc, U+d5de-d5e3, U+d5e6-d5e7, U+d5e9-d5eb, U+d5ed-d5f6, U+d5f8, U+d5fa-d5ff, U+d602-d603, U+d605-d607, U+d609-d60f, U+d612-d613, U+d616-d61b, U+d61d-d637, U+d63a-d63b, U+d63d-d63f, U+d641-d647, U+d64a-d64c, U+d64e-d653, U+d656-d657, U+d659-d65b, U+d65d-d666, U+d668, U+d66a-d678;
}
/* [5] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.5.woff2) format('woff2');
  unicode-range: U+d507, U+d509-d50b, U+d50d-d513, U+d515-d53b, U+d53e-d53f, U+d541-d543, U+d545-d54c, U+d54e, U+d550, U+d552-d557, U+d55a-d55b, U+d55d-d55f, U+d561-d564, U+d566-d567, U+d56a, U+d56c, U+d56e-d573, U+d576-d577, U+d579-d583, U+d585-d586, U+d58a-d5a4, U+d5a6-d5bb;
}
/* [6] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.6.woff2) format('woff2');
  unicode-range: U+d464-d477, U+d47a-d47b, U+d47d-d47f, U+d481-d487, U+d489-d48a, U+d48c, U+d48e-d4e7, U+d4e9-d503, U+d505-d506;
}
/* [7] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.7.woff2) format('woff2');
  unicode-range: U+d3bf-d3c7, U+d3ca-d3cf, U+d3d1-d3eb, U+d3ee-d3ef, U+d3f1-d3f3, U+d3f5-d3fb, U+d3fd-d400, U+d402-d45b, U+d45d-d463;
}
/* [8] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.8.woff2) format('woff2');
  unicode-range: U+d2ff, U+d302-d304, U+d306-d30b, U+d30f, U+d311-d313, U+d315-d31b, U+d31e, U+d322-d324, U+d326-d327, U+d32a-d32b, U+d32d-d32f, U+d331-d337, U+d339-d33c, U+d33e-d37b, U+d37e-d37f, U+d381-d383, U+d385-d38b, U+d38e-d390, U+d392-d397, U+d39a-d39b, U+d39d-d39f, U+d3a1-d3a7, U+d3a9-d3aa, U+d3ac, U+d3ae-d3b3, U+d3b5-d3b7, U+d3b9-d3bb, U+d3bd-d3be;
}
/* [9] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.9.woff2) format('woff2');
  unicode-range: U+d257-d27f, U+d281-d29b, U+d29d-d29f, U+d2a1-d2ab, U+d2ad-d2b7, U+d2ba-d2bb, U+d2bd-d2bf, U+d2c1-d2c7, U+d2c9-d2ef, U+d2f2-d2f3, U+d2f5-d2f7, U+d2f9-d2fe;
}
/* [10] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.10.woff2) format('woff2');
  unicode-range: U+d1b4, U+d1b6-d1f3, U+d1f5-d22b, U+d22e-d22f, U+d231-d233, U+d235-d23b, U+d23d-d240, U+d242-d256;
}
/* [11] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.11.woff2) format('woff2');
  unicode-range: U+d105-d12f, U+d132-d133, U+d135-d137, U+d139-d13f, U+d141-d142, U+d144, U+d146-d14b, U+d14e-d14f, U+d151-d153, U+d155-d15b, U+d15e-d187, U+d189-d19f, U+d1a2-d1a3, U+d1a5-d1a7, U+d1a9-d1af, U+d1b2-d1b3;
}
/* [12] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.12.woff2) format('woff2');
  unicode-range: U+d04b-d04f, U+d051-d057, U+d059-d06b, U+d06d-d06f, U+d071-d073, U+d075-d07b, U+d07e-d0a3, U+d0a6-d0a7, U+d0a9-d0ab, U+d0ad-d0b3, U+d0b6, U+d0b8, U+d0ba-d0bf, U+d0c2-d0c3, U+d0c5-d0c7, U+d0c9-d0cf, U+d0d2, U+d0d6-d0db, U+d0de-d0df, U+d0e1-d0e3, U+d0e5-d0eb, U+d0ee-d0f0, U+d0f2-d104;
}
/* [13] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.13.woff2) format('woff2');
  unicode-range: U+cfa2-cfc3, U+cfc5-cfdf, U+cfe2-cfe3, U+cfe5-cfe7, U+cfe9-cff4, U+cff6-cffb, U+cffd-cfff, U+d001-d003, U+d005-d017, U+d019-d033, U+d036-d037, U+d039-d03b, U+d03d-d04a;
}
/* [14] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.14.woff2) format('woff2');
  unicode-range: U+cef0-cef3, U+cef6, U+cef9-ceff, U+cf01-cf03, U+cf05-cf07, U+cf09-cf0f, U+cf11-cf12, U+cf14-cf1b, U+cf1d-cf1f, U+cf21-cf2f, U+cf31-cf53, U+cf56-cf57, U+cf59-cf5b, U+cf5d-cf63, U+cf66, U+cf68, U+cf6a-cf6f, U+cf71-cf84, U+cf86-cf8b, U+cf8d-cfa1;
}
/* [15] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.15.woff2) format('woff2');
  unicode-range: U+ce3c-ce57, U+ce5a-ce5b, U+ce5d-ce5f, U+ce61-ce67, U+ce6a, U+ce6c, U+ce6e-ce73, U+ce76-ce77, U+ce79-ce7b, U+ce7d-ce83, U+ce85-ce88, U+ce8a-ce8f, U+ce91-ce93, U+ce95-ce97, U+ce99-ce9f, U+cea2, U+cea4-ceab, U+cead-cee3, U+cee6-cee7, U+cee9-ceeb, U+ceed-ceef;
}
/* [16] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.16.woff2) format('woff2');
  unicode-range: U+cd92-cd93, U+cd96-cd97, U+cd99-cd9b, U+cd9d-cda3, U+cda6-cda8, U+cdaa-cdaf, U+cdb1-cdc3, U+cdc5-cdcb, U+cdcd-cde7, U+cde9-ce03, U+ce05-ce1f, U+ce22-ce34, U+ce36-ce3b;
}
/* [17] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.17.woff2) format('woff2');
  unicode-range: U+ccef-cd07, U+cd0a-cd0b, U+cd0d-cd1a, U+cd1c, U+cd1e-cd2b, U+cd2d-cd5b, U+cd5d-cd77, U+cd79-cd91;
}
/* [18] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.18.woff2) format('woff2');
  unicode-range: U+cc3f-cc43, U+cc46-cc47, U+cc49-cc4b, U+cc4d-cc53, U+cc55-cc58, U+cc5a-cc5f, U+cc61-cc97, U+cc9a-cc9b, U+cc9d-cc9f, U+cca1-cca7, U+ccaa, U+ccac, U+ccae-ccb3, U+ccb6-ccb7, U+ccb9-ccbb, U+ccbd-cccf, U+ccd1-cce3, U+cce5-ccee;
}
/* [19] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.19.woff2) format('woff2');
  unicode-range: U+cb91-cbd3, U+cbd5-cbe3, U+cbe5-cc0b, U+cc0e-cc0f, U+cc11-cc13, U+cc15-cc1b, U+cc1d-cc20, U+cc23-cc27, U+cc2a-cc2b, U+cc2d, U+cc2f, U+cc31-cc37, U+cc3a, U+cc3c;
}
/* [20] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.20.woff2) format('woff2');
  unicode-range: U+caf4-cb47, U+cb4a-cb90;
}
/* [21] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.21.woff2) format('woff2');
  unicode-range: U+ca4a-ca4b, U+ca4e-ca4f, U+ca51-ca53, U+ca55-ca5b, U+ca5d-ca60, U+ca62-ca83, U+ca85-cabb, U+cabe-cabf, U+cac1-cac3, U+cac5-cacb, U+cacd-cad0, U+cad2, U+cad4-cad8, U+cada-caf3;
}
/* [22] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.22.woff2) format('woff2');
  unicode-range: U+c996-c997, U+c99a-c99c, U+c99e-c9bf, U+c9c2-c9c3, U+c9c5-c9c7, U+c9c9-c9cf, U+c9d2, U+c9d4, U+c9d7-c9d8, U+c9db, U+c9de-c9df, U+c9e1-c9e3, U+c9e5-c9e6, U+c9e8-c9eb, U+c9ee-c9f0, U+c9f2-c9f7, U+c9f9-ca0b, U+ca0d-ca28, U+ca2a-ca49;
}
/* [23] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.23.woff2) format('woff2');
  unicode-range: U+c8e9-c8f4, U+c8f6-c8fb, U+c8fe-c8ff, U+c901-c903, U+c905-c90b, U+c90e-c910, U+c912-c917, U+c919-c92b, U+c92d-c94f, U+c951-c953, U+c955-c96b, U+c96d-c973, U+c975-c987, U+c98a-c98b, U+c98d-c98f, U+c991-c995;
}
/* [24] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.24.woff2) format('woff2');
  unicode-range: U+c841-c84b, U+c84d-c86f, U+c872-c873, U+c875-c877, U+c879-c87f, U+c882-c884, U+c887-c88a, U+c88d-c8c3, U+c8c5-c8df, U+c8e1-c8e8;
}
/* [25] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.25.woff2) format('woff2');
  unicode-range: U+c779-c77b, U+c77e-c782, U+c786, U+c78b, U+c78d, U+c78f, U+c792-c793, U+c795, U+c797, U+c799-c79f, U+c7a2, U+c7a7-c7ab, U+c7ae-c7bb, U+c7bd-c7c0, U+c7c2-c7c7, U+c7c9-c7dc, U+c7de-c7ff, U+c802-c803, U+c805-c807, U+c809, U+c80b-c80f, U+c812, U+c814, U+c817-c81b, U+c81e-c81f, U+c821-c823, U+c825-c82e, U+c830-c837, U+c839-c83b, U+c83d-c840;
}
/* [26] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.26.woff2) format('woff2');
  unicode-range: U+c6bb-c6bf, U+c6c2, U+c6c4, U+c6c6-c6cb, U+c6ce-c6cf, U+c6d1-c6d3, U+c6d5-c6db, U+c6dd-c6df, U+c6e1-c6e7, U+c6e9-c6eb, U+c6ed-c6ef, U+c6f1-c6f8, U+c6fa-c703, U+c705-c707, U+c709-c70b, U+c70d-c716, U+c718, U+c71a-c71f, U+c722-c723, U+c725-c727, U+c729-c734, U+c736-c73b, U+c73e-c73f, U+c741-c743, U+c745-c74b, U+c74e-c750, U+c752-c757, U+c759-c773, U+c776-c777;
}
/* [27] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.27.woff2) format('woff2');
  unicode-range: U+c5f5-c5fb, U+c5fe, U+c602-c605, U+c607, U+c609-c60f, U+c611-c61a, U+c61c-c623, U+c626-c627, U+c629-c62b, U+c62d, U+c62f-c632, U+c636, U+c638, U+c63a-c63f, U+c642-c643, U+c645-c647, U+c649-c652, U+c656-c65b, U+c65d-c65f, U+c661-c663, U+c665-c677, U+c679-c67b, U+c67d-c693, U+c696-c697, U+c699-c69b, U+c69d-c6a3, U+c6a6, U+c6a8, U+c6aa-c6af, U+c6b2-c6b3, U+c6b5-c6b7, U+c6b9-c6ba;
}
/* [28] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.28.woff2) format('woff2');
  unicode-range: U+c517-c527, U+c52a-c52b, U+c52d-c52f, U+c531-c538, U+c53a, U+c53c, U+c53e-c543, U+c546-c547, U+c54b, U+c54d-c552, U+c556, U+c55a-c55b, U+c55d, U+c55f, U+c562-c563, U+c565-c567, U+c569-c56f, U+c572, U+c574, U+c576-c57b, U+c57e-c57f, U+c581-c583, U+c585-c586, U+c588-c58b, U+c58e, U+c590, U+c592-c596, U+c599-c5b3, U+c5b6-c5b7, U+c5ba, U+c5be-c5c3, U+c5ca-c5cb, U+c5cd, U+c5cf, U+c5d2-c5d3, U+c5d5-c5d7, U+c5d9-c5df, U+c5e1-c5e2, U+c5e4, U+c5e6-c5eb, U+c5ef, U+c5f1-c5f3;
}
/* [29] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.29.woff2) format('woff2');
  unicode-range: U+c475-c4ef, U+c4f2-c4f3, U+c4f5-c4f7, U+c4f9-c4ff, U+c502-c50b, U+c50d-c516;
}
/* [30] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.30.woff2) format('woff2');
  unicode-range: U+c3d0-c3d7, U+c3da-c3db, U+c3dd-c3de, U+c3e1-c3ec, U+c3ee-c3f3, U+c3f5-c42b, U+c42d-c463, U+c466-c474;
}
/* [31] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.31.woff2) format('woff2');
  unicode-range: U+c32b-c367, U+c36a-c36b, U+c36d-c36f, U+c371-c377, U+c37a-c37b, U+c37e-c383, U+c385-c387, U+c389-c3cf;
}
/* [32] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.32.woff2) format('woff2');
  unicode-range: U+c26a-c26b, U+c26d-c26f, U+c271-c273, U+c275-c27b, U+c27e-c287, U+c289-c28f, U+c291-c297, U+c299-c29a, U+c29c-c2a3, U+c2a5-c2a7, U+c2a9-c2ab, U+c2ad-c2b3, U+c2b6, U+c2b8, U+c2ba-c2bb, U+c2bd-c2db, U+c2de-c2df, U+c2e1-c2e2, U+c2e5-c2ea, U+c2ee, U+c2f0, U+c2f2-c2f5, U+c2f7, U+c2fa-c2fb, U+c2fd-c2ff, U+c301-c307, U+c309-c30c, U+c30e-c312, U+c315-c323, U+c325-c328, U+c32a;
}
/* [33] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.33.woff2) format('woff2');
  unicode-range: U+c1bc-c1c3, U+c1c5-c1df, U+c1e1-c1fb, U+c1fd-c203, U+c205-c20c, U+c20e, U+c210-c217, U+c21a-c21b, U+c21d-c21e, U+c221-c227, U+c229-c22a, U+c22c, U+c22e, U+c230, U+c233-c24f, U+c251-c257, U+c259-c269;
}
/* [34] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.34.woff2) format('woff2');
  unicode-range: U+c101-c11b, U+c11f, U+c121-c123, U+c125-c12b, U+c12e, U+c132-c137, U+c13a-c13b, U+c13d-c13f, U+c141-c147, U+c14a, U+c14c-c153, U+c155-c157, U+c159-c15b, U+c15d-c166, U+c169-c16f, U+c171-c177, U+c179-c18b, U+c18e-c18f, U+c191-c193, U+c195-c19b, U+c19d-c19e, U+c1a0, U+c1a2-c1a4, U+c1a6-c1bb;
}
/* [35] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.35.woff2) format('woff2');
  unicode-range: U+c049-c057, U+c059-c05b, U+c05d-c05f, U+c061-c067, U+c069-c08f, U+c091-c0ab, U+c0ae-c0af, U+c0b1-c0b3, U+c0b5, U+c0b7-c0bb, U+c0be, U+c0c2-c0c7, U+c0ca-c0cb, U+c0cd-c0cf, U+c0d1-c0d7, U+c0d9-c0da, U+c0dc, U+c0de-c0e3, U+c0e5-c0eb, U+c0ed-c0f3, U+c0f6, U+c0f8, U+c0fa-c0ff;
}
/* [36] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.36.woff2) format('woff2');
  unicode-range: U+bfa7-bfaf, U+bfb1-bfc4, U+bfc6-bfcb, U+bfce-bfcf, U+bfd1-bfd3, U+bfd5-bfdb, U+bfdd-c048;
}
/* [37] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.37.woff2) format('woff2');
  unicode-range: U+bf07, U+bf09-bf3f, U+bf41-bf4f, U+bf52-bf54, U+bf56-bfa6;
}
/* [38] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.38.woff2) format('woff2');
  unicode-range: U+be56, U+be58, U+be5c-be5f, U+be62-be63, U+be65-be67, U+be69-be74, U+be76-be7b, U+be7e-be7f, U+be81-be8e, U+be90, U+be92-bea7, U+bea9-becf, U+bed2-bed3, U+bed5-bed6, U+bed9-bee3, U+bee6-bf06;
}
/* [39] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.39.woff2) format('woff2');
  unicode-range: U+bdb0-bdd3, U+bdd5-bdef, U+bdf1-be0b, U+be0d-be0f, U+be11-be13, U+be15-be43, U+be46-be47, U+be49-be4b, U+be4d-be53;
}
/* [40] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.40.woff2) format('woff2');
  unicode-range: U+bd03, U+bd06, U+bd08, U+bd0a-bd0f, U+bd11-bd22, U+bd25-bd47, U+bd49-bd58, U+bd5a-bd7f, U+bd82-bd83, U+bd85-bd87, U+bd8a-bd8f, U+bd91-bd92, U+bd94, U+bd96-bd98, U+bd9a-bdaf;
}
/* [41] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.41.woff2) format('woff2');
  unicode-range: U+bc4e-bc83, U+bc86-bc87, U+bc89-bc8b, U+bc8d-bc93, U+bc96, U+bc98, U+bc9b-bc9f, U+bca2-bca3, U+bca5-bca7, U+bca9-bcb2, U+bcb4-bcbb, U+bcbe-bcbf, U+bcc1-bcc3, U+bcc5-bccc, U+bcce-bcd0, U+bcd2-bcd4, U+bcd6-bcf3, U+bcf7, U+bcf9-bcfb, U+bcfd-bd02;
}
/* [42] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.42.woff2) format('woff2');
  unicode-range: U+bb90-bba3, U+bba5-bbab, U+bbad-bbbf, U+bbc1-bbf7, U+bbfa-bbfb, U+bbfd-bbfe, U+bc01-bc07, U+bc09-bc0a, U+bc0e, U+bc10, U+bc12-bc13, U+bc17, U+bc19-bc1a, U+bc1e, U+bc20-bc23, U+bc26, U+bc28, U+bc2a-bc2c, U+bc2e-bc2f, U+bc32-bc33, U+bc35-bc37, U+bc39-bc3f, U+bc41-bc42, U+bc44, U+bc46-bc48, U+bc4a-bc4d;
}
/* [43] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.43.woff2) format('woff2');
  unicode-range: U+bae6-bafb, U+bafd-bb17, U+bb19-bb33, U+bb37, U+bb39-bb3a, U+bb3d-bb43, U+bb45-bb46, U+bb48, U+bb4a-bb4f, U+bb51-bb53, U+bb55-bb57, U+bb59-bb62, U+bb64-bb8f;
}
/* [44] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.44.woff2) format('woff2');
  unicode-range: U+ba30-ba37, U+ba3a-ba3b, U+ba3d-ba3f, U+ba41-ba47, U+ba49-ba4a, U+ba4c, U+ba4e-ba53, U+ba56-ba57, U+ba59-ba5b, U+ba5d-ba63, U+ba65-ba66, U+ba68-ba6f, U+ba71-ba73, U+ba75-ba77, U+ba79-ba84, U+ba86, U+ba88-baa7, U+baaa, U+baad-baaf, U+bab1-bab7, U+baba, U+babc, U+babe-bae5;
}
/* [45] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.45.woff2) format('woff2');
  unicode-range: U+b96e-b973, U+b976-b977, U+b979-b97b, U+b97d-b983, U+b986, U+b988, U+b98a-b98d, U+b98f-b9ab, U+b9ae-b9af, U+b9b1-b9b3, U+b9b5-b9bb, U+b9be, U+b9c0, U+b9c2-b9c7, U+b9ca-b9cb, U+b9cd, U+b9d2-b9d7, U+b9da, U+b9dc, U+b9df-b9e0, U+b9e2, U+b9e6-b9e7, U+b9e9-b9f3, U+b9f6, U+b9f8, U+b9fb-ba2f;
}
/* [46] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.46.woff2) format('woff2');
  unicode-range: U+b8bf-b8cb, U+b8cd-b8e0, U+b8e2-b8e7, U+b8ea-b8eb, U+b8ed-b8ef, U+b8f1-b8f7, U+b8fa, U+b8fc, U+b8fe-b903, U+b905-b917, U+b919-b91f, U+b921-b93b, U+b93d-b957, U+b95a-b95b, U+b95d-b95f, U+b961-b967, U+b969-b96c;
}
/* [47] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.47.woff2) format('woff2');
  unicode-range: U+b80d-b80f, U+b811-b817, U+b81a, U+b81c-b823, U+b826-b827, U+b829-b82b, U+b82d-b833, U+b836, U+b83a-b83f, U+b841-b85b, U+b85e-b85f, U+b861-b863, U+b865-b86b, U+b86e, U+b870, U+b872-b8af, U+b8b1-b8be;
}
/* [48] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.48.woff2) format('woff2');
  unicode-range: U+b74d-b75f, U+b761-b763, U+b765-b774, U+b776-b77b, U+b77e-b77f, U+b781-b783, U+b785-b78b, U+b78e, U+b792-b796, U+b79a-b79b, U+b79d-b7a7, U+b7aa, U+b7ae-b7b3, U+b7b6-b7c8, U+b7ca-b7eb, U+b7ee-b7ef, U+b7f1-b7f3, U+b7f5-b7fb, U+b7fe, U+b802-b806, U+b80a-b80b;
}
/* [49] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.49.woff2) format('woff2');
  unicode-range: U+b6a7-b6aa, U+b6ac-b6b0, U+b6b2-b6ef, U+b6f1-b727, U+b72a-b72b, U+b72d-b72e, U+b731-b737, U+b739-b73a, U+b73c-b743, U+b745-b74c;
}
/* [50] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.50.woff2) format('woff2');
  unicode-range: U+b605-b60f, U+b612-b617, U+b619-b624, U+b626-b69b, U+b69e-b6a3, U+b6a5-b6a6;
}
/* [51] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.51.woff2) format('woff2');
  unicode-range: U+b55f, U+b562-b583, U+b585-b59f, U+b5a2-b5a3, U+b5a5-b5a7, U+b5a9-b5b2, U+b5b5-b5ba, U+b5bd-b604;
}
/* [52] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.52.woff2) format('woff2');
  unicode-range: U+b4a5-b4b6, U+b4b8-b4bf, U+b4c1-b4c7, U+b4c9-b4db, U+b4de-b4df, U+b4e1-b4e2, U+b4e5-b4eb, U+b4ee, U+b4f0, U+b4f2-b513, U+b516-b517, U+b519-b51a, U+b51d-b523, U+b526, U+b528, U+b52b-b52f, U+b532-b533, U+b535-b537, U+b539-b53f, U+b541-b544, U+b546-b54b, U+b54d-b54f, U+b551-b55b, U+b55d-b55e;
}
/* [53] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.53.woff2) format('woff2');
  unicode-range: U+b3f8-b3fb, U+b3fd-b40f, U+b411-b417, U+b419-b41b, U+b41d-b41f, U+b421-b427, U+b42a-b42b, U+b42d-b44f, U+b452-b453, U+b455-b457, U+b459-b45f, U+b462-b464, U+b466-b46b, U+b46d-b47f, U+b481-b4a3;
}
/* [54] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.54.woff2) format('woff2');
  unicode-range: U+b342-b353, U+b356-b357, U+b359-b35b, U+b35d-b35e, U+b360-b363, U+b366, U+b368, U+b36a-b36d, U+b36f, U+b372-b373, U+b375-b377, U+b379-b37f, U+b381-b382, U+b384, U+b386-b38b, U+b38d-b3c3, U+b3c6-b3c7, U+b3c9-b3ca, U+b3cd-b3d3, U+b3d6, U+b3d8, U+b3da-b3f7;
}
/* [55] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.55.woff2) format('woff2');
  unicode-range: U+b27c-b283, U+b285-b28f, U+b292-b293, U+b295-b297, U+b29a-b29f, U+b2a1-b2a4, U+b2a7-b2a9, U+b2ab, U+b2ad-b2c7, U+b2ca-b2cb, U+b2cd-b2cf, U+b2d1-b2d7, U+b2da, U+b2dc, U+b2de-b2e3, U+b2e7, U+b2e9-b2ea, U+b2ef-b2f3, U+b2f6, U+b2f8, U+b2fa-b2fb, U+b2fd-b2fe, U+b302-b303, U+b305-b307, U+b309-b30f, U+b312, U+b316-b31b, U+b31d-b341;
}
/* [56] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.56.woff2) format('woff2');
  unicode-range: U+b1d6-b1e7, U+b1e9-b1fc, U+b1fe-b203, U+b206-b207, U+b209-b20b, U+b20d-b213, U+b216-b21f, U+b221-b257, U+b259-b273, U+b275-b27b;
}
/* [57] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.57.woff2) format('woff2');
  unicode-range: U+b120-b122, U+b126-b127, U+b129-b12b, U+b12d-b133, U+b136, U+b138, U+b13a-b13f, U+b142-b143, U+b145-b14f, U+b151-b153, U+b156-b157, U+b159-b177, U+b17a-b17b, U+b17d-b17f, U+b181-b187, U+b189-b18c, U+b18e-b191, U+b195-b1a7, U+b1a9-b1cb, U+b1cd-b1d5;
}
/* [58] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.58.woff2) format('woff2');
  unicode-range: U+b05f-b07b, U+b07e-b07f, U+b081-b083, U+b085-b08b, U+b08d-b097, U+b09b, U+b09d-b09f, U+b0a2-b0a7, U+b0aa, U+b0b0, U+b0b2, U+b0b6-b0b7, U+b0b9-b0bb, U+b0bd-b0c3, U+b0c6-b0c7, U+b0ca-b0cf, U+b0d1-b0df, U+b0e1-b0e4, U+b0e6-b107, U+b10a-b10b, U+b10d-b10f, U+b111-b112, U+b114-b117, U+b119-b11a, U+b11c-b11f;
}
/* [59] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.59.woff2) format('woff2');
  unicode-range: U+afac-afb7, U+afba-afbb, U+afbd-afbf, U+afc1-afc6, U+afca-afcc, U+afce-afd3, U+afd5-afe7, U+afe9-afef, U+aff1-b00b, U+b00d-b00f, U+b011-b013, U+b015-b01b, U+b01d-b027, U+b029-b043, U+b045-b047, U+b049, U+b04b, U+b04d-b052, U+b055-b056, U+b058-b05c, U+b05e;
}
/* [60] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.60.woff2) format('woff2');
  unicode-range: U+af03-af07, U+af09-af2b, U+af2e-af33, U+af35-af3b, U+af3e-af40, U+af44-af47, U+af4a-af5c, U+af5e-af63, U+af65-af7f, U+af81-afab;
}
/* [61] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.61.woff2) format('woff2');
  unicode-range: U+ae56-ae5b, U+ae5e-ae60, U+ae62-ae64, U+ae66-ae67, U+ae69-ae6b, U+ae6d-ae83, U+ae85-aebb, U+aebf, U+aec1-aec3, U+aec5-aecb, U+aece, U+aed0, U+aed2-aed7, U+aed9-aef3, U+aef5-af02;
}
/* [62] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.62.woff2) format('woff2');
  unicode-range: U+ad9c-ada3, U+ada5-adbf, U+adc1-adc3, U+adc5-adc7, U+adc9-add2, U+add4-addb, U+addd-addf, U+ade1-ade3, U+ade5-adf7, U+adfa-adfb, U+adfd-adff, U+ae02-ae07, U+ae0a, U+ae0c, U+ae0e-ae13, U+ae15-ae2f, U+ae31-ae33, U+ae35-ae37, U+ae39-ae3f, U+ae42, U+ae44, U+ae46-ae49, U+ae4b, U+ae4f, U+ae51-ae53, U+ae55;
}
/* [63] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.63.woff2) format('woff2');
  unicode-range: U+ace2-ace3, U+ace5-ace6, U+ace9-acef, U+acf2, U+acf4, U+acf7-acfb, U+acfe-acff, U+ad01-ad03, U+ad05-ad0b, U+ad0d-ad10, U+ad12-ad1b, U+ad1d-ad33, U+ad35-ad48, U+ad4a-ad4f, U+ad51-ad6b, U+ad6e-ad6f, U+ad71-ad72, U+ad77-ad7c, U+ad7e, U+ad80, U+ad82-ad87, U+ad89-ad8b, U+ad8d-ad8f, U+ad91-ad9b;
}
/* [64] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.64.woff2) format('woff2');
  unicode-range: U+ac25-ac2c, U+ac2e, U+ac30, U+ac32-ac37, U+ac39-ac3f, U+ac41-ac4c, U+ac4e-ac6f, U+ac72-ac73, U+ac75-ac76, U+ac79-ac7f, U+ac82, U+ac84-ac88, U+ac8a-ac8b, U+ac8d-ac8f, U+ac91-ac93, U+ac95-ac9b, U+ac9d-ac9e, U+aca1-aca7, U+acab, U+acad-acaf, U+acb1-acb7, U+acba-acbb, U+acbe-acc0, U+acc2-acc3, U+acc5-acdf;
}
/* [65] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.65.woff2) format('woff2');
  unicode-range: U+99df, U+99ed, U+99f1, U+99ff, U+9a01, U+9a08, U+9a0e-9a0f, U+9a19, U+9a2b, U+9a30, U+9a36-9a37, U+9a40, U+9a43, U+9a45, U+9a4d, U+9a55, U+9a57, U+9a5a-9a5b, U+9a5f, U+9a62, U+9a65, U+9a69-9a6a, U+9aa8, U+9ab8, U+9ad3, U+9ae5, U+9aee, U+9b1a, U+9b27, U+9b2a, U+9b31, U+9b3c, U+9b41-9b45, U+9b4f, U+9b54, U+9b5a, U+9b6f, U+9b8e, U+9b91, U+9b9f, U+9bab, U+9bae, U+9bc9, U+9bd6, U+9be4, U+9be8, U+9c0d, U+9c10, U+9c12, U+9c15, U+9c25, U+9c32, U+9c3b, U+9c47, U+9c49, U+9c57, U+9ce5, U+9ce7, U+9ce9, U+9cf3-9cf4, U+9cf6, U+9d09, U+9d1b, U+9d26, U+9d28, U+9d3b, U+9d51, U+9d5d, U+9d60-9d61, U+9d6c, U+9d72, U+9da9, U+9daf, U+9db4, U+9dc4, U+9dd7, U+9df2, U+9df8-9dfa, U+9e1a, U+9e1e, U+9e75, U+9e79, U+9e7d, U+9e7f, U+9e92-9e93, U+9e97, U+9e9d, U+9e9f, U+9ea5, U+9eb4-9eb5, U+9ebb, U+9ebe, U+9ec3, U+9ecd-9ece, U+9ed4, U+9ed8, U+9edb-9edc, U+9ede, U+9ee8, U+9ef4, U+9f07-9f08, U+9f0e, U+9f13, U+9f20, U+9f3b, U+9f4a-9f4b, U+9f4e, U+9f52, U+9f5f, U+9f61, U+9f67, U+9f6a, U+9f6c, U+9f77, U+9f8d, U+9f90, U+9f95, U+9f9c, U+ac02-ac03, U+ac05-ac06, U+ac09-ac0f, U+ac17-ac18, U+ac1b, U+ac1e-ac1f, U+ac21-ac23;
}
/* [66] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.66.woff2) format('woff2');
  unicode-range: U+96a7-96a8, U+96aa, U+96b1, U+96b7, U+96bb, U+96c0-96c1, U+96c4-96c5, U+96c7, U+96c9, U+96cb-96ce, U+96d5-96d6, U+96d9, U+96db-96dc, U+96e2-96e3, U+96e8-96ea, U+96ef-96f0, U+96f2, U+96f6-96f7, U+96f9, U+96fb, U+9700, U+9706-9707, U+9711, U+9713, U+9716, U+9719, U+971c, U+971e, U+9727, U+9730, U+9732, U+9739, U+973d, U+9742, U+9744, U+9748, U+9756, U+975c, U+9761, U+9769, U+976d, U+9774, U+9777, U+977a, U+978b, U+978d, U+978f, U+97a0, U+97a8, U+97ab, U+97ad, U+97c6, U+97cb, U+97dc, U+97f6, U+97fb, U+97ff-9803, U+9805-9806, U+9808, U+980a, U+980c, U+9810-9813, U+9817-9818, U+982d, U+9830, U+9838-9839, U+983b, U+9846, U+984c-984e, U+9854, U+9858, U+985a, U+985e, U+9865, U+9867, U+986b, U+986f, U+98af, U+98b1, U+98c4, U+98c7, U+98db-98dc, U+98e1-98e2, U+98ed-98ef, U+98f4, U+98fc-98fe, U+9903, U+9909-990a, U+990c, U+9910, U+9913, U+9918, U+991e, U+9920, U+9928, U+9945, U+9949, U+994b-994d, U+9951-9952, U+9954, U+9957, U+9996, U+999d, U+99a5, U+99a8, U+99ac-99ae, U+99b1, U+99b3-99b4, U+99b9, U+99c1, U+99d0-99d2, U+99d5, U+99d9, U+99dd;
}
/* [67] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.67.woff2) format('woff2');
  unicode-range: U+920d, U+9210-9212, U+9217, U+921e, U+9234, U+923a, U+923f-9240, U+9245, U+9249, U+9257, U+925b, U+925e, U+9262, U+9264-9266, U+9283, U+9285, U+9291, U+9293, U+9296, U+9298, U+929c, U+92b3, U+92b6-92b7, U+92b9, U+92cc, U+92cf, U+92d2, U+92e4, U+92ea, U+92f8, U+92fc, U+9304, U+9310, U+9318, U+931a, U+931e-9322, U+9324, U+9326, U+9328, U+932b, U+932e-932f, U+9348, U+934a-934b, U+934d, U+9354, U+935b, U+936e, U+9375, U+937c, U+937e, U+938c, U+9394, U+9396, U+939a, U+93a3, U+93a7, U+93ac-93ad, U+93b0, U+93c3, U+93d1, U+93de, U+93e1, U+93e4, U+93f6, U+9404, U+9418, U+9425, U+942b, U+9435, U+9438, U+9444, U+9451-9452, U+945b, U+947d, U+947f, U+9583, U+9589, U+958f, U+9591-9592, U+9594, U+9598, U+95a3-95a5, U+95a8, U+95ad, U+95b1, U+95bb-95bc, U+95c7, U+95ca, U+95d4-95d6, U+95dc, U+95e1-95e2, U+961c, U+9621, U+962a, U+962e, U+9632, U+963b, U+963f-9640, U+9642, U+9644, U+964b-964d, U+9650, U+965b-965f, U+9662-9664, U+966a, U+9670, U+9673, U+9675-9678, U+967d, U+9685-9686, U+968a-968b, U+968d-968e, U+9694-9695, U+9698-9699, U+969b-969c, U+96a3;
}
/* [68] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.68.woff2) format('woff2');
  unicode-range: U+8fa8, U+8fad, U+8faf-8fb2, U+8fc2, U+8fc5, U+8fce, U+8fd4, U+8fe6, U+8fea-8feb, U+8fed, U+8ff0, U+8ff2, U+8ff7, U+8ff9, U+8ffd, U+9000-9003, U+9005-9006, U+9008, U+900b, U+900d, U+900f-9011, U+9014-9015, U+9017, U+9019, U+901d-9023, U+902e, U+9031-9032, U+9035, U+9038, U+903c, U+903e, U+9041-9042, U+9047, U+904a-904b, U+904d-904e, U+9050-9051, U+9054-9055, U+9059, U+905c-905e, U+9060-9061, U+9063, U+9069, U+906d-906f, U+9072, U+9075, U+9077-9078, U+907a, U+907c-907d, U+907f-9084, U+9087-9088, U+908a, U+908f, U+9091, U+9095, U+9099, U+90a2-90a3, U+90a6, U+90a8, U+90aa, U+90af-90b1, U+90b5, U+90b8, U+90c1, U+90ca, U+90de, U+90e1, U+90ed, U+90f5, U+9102, U+9112, U+9115, U+9119, U+9127, U+912d, U+9132, U+9149-914e, U+9152, U+9162, U+9169-916a, U+916c, U+9175, U+9177-9178, U+9187, U+9189, U+918b, U+918d, U+9192, U+919c, U+91ab-91ac, U+91ae-91af, U+91b1, U+91b4-91b5, U+91c0, U+91c7, U+91c9, U+91cb, U+91cf-91d0, U+91d7-91d8, U+91dc-91dd, U+91e3, U+91e7, U+91ea, U+91f5;
}
/* [69] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.69.woff2) format('woff2');
  unicode-range: U+8c6a-8c6b, U+8c79-8c7a, U+8c82, U+8c8a, U+8c8c, U+8c9d-8c9e, U+8ca0-8ca2, U+8ca7-8cac, U+8caf-8cb0, U+8cb3-8cb4, U+8cb6-8cb8, U+8cbb-8cbd, U+8cbf-8cc4, U+8cc7-8cc8, U+8cca, U+8cd1, U+8cd3, U+8cda, U+8cdc, U+8cde, U+8ce0, U+8ce2-8ce4, U+8ce6, U+8cea, U+8ced, U+8cf4, U+8cfb-8cfd, U+8d04-8d05, U+8d07-8d08, U+8d0a, U+8d0d, U+8d13, U+8d16, U+8d64, U+8d66, U+8d6b, U+8d70, U+8d73-8d74, U+8d77, U+8d85, U+8d8a, U+8d99, U+8da3, U+8da8, U+8db3, U+8dba, U+8dbe, U+8dc6, U+8dcb-8dcc, U+8dcf, U+8ddb, U+8ddd, U+8de1, U+8de3, U+8de8, U+8df3, U+8e0a, U+8e0f-8e10, U+8e1e, U+8e2a, U+8e30, U+8e35, U+8e42, U+8e44, U+8e47-8e4a, U+8e59, U+8e5f-8e60, U+8e74, U+8e76, U+8e81, U+8e87, U+8e8a, U+8e8d, U+8eaa-8eac, U+8ec0, U+8ecb-8ecc, U+8ed2, U+8edf, U+8eeb, U+8ef8, U+8efb, U+8efe, U+8f03, U+8f05, U+8f09, U+8f12-8f15, U+8f1b-8f1f, U+8f26-8f27, U+8f29-8f2a, U+8f2f, U+8f33, U+8f38-8f39, U+8f3b, U+8f3e-8f3f, U+8f44-8f45, U+8f49, U+8f4d-8f4e, U+8f5d, U+8f5f, U+8f62, U+8f9b-8f9c, U+8fa3, U+8fa6;
}
/* [70] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.70.woff2) format('woff2');
  unicode-range: U+8941, U+8944, U+895f, U+8964, U+896a, U+8972, U+8981, U+8983, U+8986-8987, U+898f, U+8993, U+8996, U+89a1, U+89a9-89aa, U+89b2, U+89ba, U+89bd, U+89c0, U+89d2, U+89e3, U+89f4, U+89f8, U+8a02-8a03, U+8a08, U+8a0a, U+8a0c, U+8a0e, U+8a13, U+8a16-8a17, U+8a1b, U+8a1d, U+8a1f, U+8a23, U+8a25, U+8a2a, U+8a2d, U+8a31, U+8a34, U+8a36, U+8a3a-8a3b, U+8a50, U+8a54-8a55, U+8a5b, U+8a5e, U+8a60, U+8a62-8a63, U+8a66, U+8a6d-8a6e, U+8a70, U+8a72-8a73, U+8a75, U+8a79, U+8a85, U+8a87, U+8a8c-8a8d, U+8a93, U+8a95, U+8a98, U+8aa0-8aa1, U+8aa3-8aa6, U+8aa8, U+8aaa, U+8ab0, U+8ab2, U+8ab9, U+8abc, U+8abe-8abf, U+8ac2, U+8ac4, U+8ac7, U+8acb, U+8acd, U+8acf, U+8ad2, U+8ad6, U+8adb-8adc, U+8ae1, U+8ae6-8ae7, U+8aea-8aeb, U+8aed-8aee, U+8af1, U+8af6-8af8, U+8afa, U+8afe, U+8b00-8b02, U+8b04, U+8b0e, U+8b10, U+8b14, U+8b16-8b17, U+8b19-8b1b, U+8b1d, U+8b20, U+8b28, U+8b2b-8b2c, U+8b33, U+8b39, U+8b41, U+8b49, U+8b4e-8b4f, U+8b58, U+8b5a, U+8b5c, U+8b66, U+8b6c, U+8b6f-8b70, U+8b74, U+8b77, U+8b7d, U+8b80, U+8b8a, U+8b90, U+8b92-8b93, U+8b96, U+8b9a, U+8c37, U+8c3f, U+8c41, U+8c46, U+8c48, U+8c4a, U+8c4c, U+8c55, U+8c5a, U+8c61;
}
/* [71] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.71.woff2) format('woff2');
  unicode-range: U+858f, U+8591, U+8594, U+859b, U+85a6, U+85a8-85aa, U+85af-85b0, U+85ba, U+85c1, U+85c9, U+85cd-85cf, U+85d5, U+85dc-85dd, U+85e4-85e5, U+85e9-85ea, U+85f7, U+85fa-85fb, U+85ff, U+8602, U+8606-8607, U+860a, U+8616-8617, U+861a, U+862d, U+863f, U+864e, U+8650, U+8654-8655, U+865b-865c, U+865e-865f, U+8667, U+8679, U+868a, U+868c, U+8693, U+86a3-86a4, U+86a9, U+86c7, U+86cb, U+86d4, U+86d9, U+86db, U+86df, U+86e4, U+86ed, U+86fe, U+8700, U+8702-8703, U+8708, U+8718, U+871a, U+871c, U+874e, U+8755, U+8757, U+875f, U+8766, U+8768, U+8774, U+8776, U+8778, U+8782, U+878d, U+879f, U+87a2, U+87b3, U+87ba, U+87c4, U+87e0, U+87ec, U+87ef, U+87f2, U+87f9, U+87fb, U+87fe, U+8805, U+881f, U+8822-8823, U+8831, U+8836, U+883b, U+8840, U+8846, U+884d, U+8852-8853, U+8857, U+8859, U+885b, U+885d, U+8861-8863, U+8868, U+886b, U+8870, U+8872, U+8877, U+887e-887f, U+8881-8882, U+8888, U+888b, U+888d, U+8892, U+8896-8897, U+889e, U+88ab, U+88b4, U+88c1-88c2, U+88cf, U+88d4-88d5, U+88d9, U+88dc-88dd, U+88df, U+88e1, U+88e8, U+88f3-88f5, U+88f8, U+88fd, U+8907, U+8910, U+8912-8913, U+8918-8919, U+8925, U+892a, U+8936, U+8938, U+893b;
}
/* [72] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.72.woff2) format('woff2');
  unicode-range: U+82a6, U+82a9, U+82ac-82af, U+82b3, U+82b7-82b9, U+82bb-82bd, U+82bf, U+82d1-82d2, U+82d4-82d5, U+82d7, U+82db, U+82de-82df, U+82e1, U+82e5-82e7, U+82fd-82fe, U+8301-8305, U+8309, U+8317, U+8328, U+832b, U+832f, U+8331, U+8334-8336, U+8338-8339, U+8340, U+8347, U+8349-834a, U+834f, U+8351-8352, U+8373, U+8377, U+837b, U+8389-838a, U+838e, U+8396, U+8398, U+839e, U+83a2, U+83a9-83ab, U+83bd, U+83c1, U+83c5, U+83c9-83ca, U+83cc, U+83d3, U+83d6, U+83dc, U+83e9, U+83eb, U+83ef-83f2, U+83f4, U+83f9, U+83fd, U+8403-8404, U+840a, U+840c-840e, U+8429, U+842c, U+8431, U+8438, U+843d, U+8449, U+8457, U+845b, U+8461, U+8463, U+8466, U+846b-846c, U+846f, U+8475, U+847a, U+8490, U+8494, U+8499, U+849c, U+84a1, U+84b2, U+84b8, U+84bb-84bc, U+84bf-84c0, U+84c2, U+84c4, U+84c6, U+84c9, U+84cb, U+84cd, U+84d1, U+84da, U+84ec, U+84ee, U+84f4, U+84fc, U+8511, U+8513-8514, U+8517-8518, U+851a, U+851e, U+8521, U+8523, U+8525, U+852c-852d, U+852f, U+853d, U+853f, U+8541, U+8543, U+8549, U+854e, U+8553, U+8559, U+8563, U+8568-856a, U+856d, U+8584, U+8587;
}
/* [73] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.73.woff2) format('woff2');
  unicode-range: U+8033, U+8036, U+803d, U+803f, U+8043, U+8046, U+804a, U+8056, U+8058, U+805a, U+805e, U+806f-8070, U+8072-8073, U+8077, U+807d-807f, U+8084-8087, U+8089, U+808b-808c, U+8096, U+809b, U+809d, U+80a1-80a2, U+80a5, U+80a9-80aa, U+80af, U+80b1-80b2, U+80b4, U+80ba, U+80c3-80c4, U+80cc, U+80ce, U+80da-80db, U+80de, U+80e1, U+80e4-80e5, U+80f1, U+80f4, U+80f8, U+80fd, U+8102, U+8105-8108, U+810a, U+8118, U+811a-811b, U+8123, U+8129, U+812b, U+812f, U+8139, U+813e, U+814b, U+814e, U+8150-8151, U+8154-8155, U+8165-8166, U+816b, U+8170-8171, U+8178-817a, U+817f-8180, U+8188, U+818a, U+818f, U+819a, U+819c-819d, U+81a0, U+81a3, U+81a8, U+81b3, U+81b5, U+81ba, U+81bd-81c0, U+81c2, U+81c6, U+81cd, U+81d8, U+81df, U+81e3, U+81e5, U+81e7-81e8, U+81ed, U+81f3-81f4, U+81fa-81fc, U+81fe, U+8205, U+8208, U+820a, U+820c-820d, U+8212, U+821b-821c, U+821e-821f, U+8221, U+822a-822c, U+8235-8237, U+8239, U+8240, U+8245, U+8247, U+8259, U+8264, U+8266, U+826e-826f, U+8271, U+8276, U+8278, U+827e, U+828b, U+828d-828e, U+8292, U+8299-829a, U+829d, U+829f, U+82a5;
}
/* [74] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.74.woff2) format('woff2');
  unicode-range: U+7d2f-7d30, U+7d33, U+7d35, U+7d39-7d3a, U+7d42-7d46, U+7d50, U+7d5e, U+7d61-7d62, U+7d66, U+7d68, U+7d6a, U+7d6e, U+7d71-7d73, U+7d76, U+7d79, U+7d7f, U+7d8e-7d8f, U+7d93, U+7d9c, U+7da0, U+7da2, U+7dac-7dad, U+7db1-7db2, U+7db4-7db5, U+7db8, U+7dba-7dbb, U+7dbd-7dbf, U+7dc7, U+7dca-7dcb, U+7dd6, U+7dd8, U+7dda, U+7ddd-7dde, U+7de0-7de1, U+7de3, U+7de8-7de9, U+7dec, U+7def, U+7df4, U+7dfb, U+7e09-7e0a, U+7e15, U+7e1b, U+7e1d-7e1f, U+7e21, U+7e23, U+7e2b, U+7e2e-7e2f, U+7e31, U+7e37, U+7e3d-7e3e, U+7e43, U+7e46-7e47, U+7e52, U+7e54-7e55, U+7e5e, U+7e61, U+7e69-7e6b, U+7e6d, U+7e70, U+7e79, U+7e7c, U+7e82, U+7e8c, U+7e8f, U+7e93, U+7e96, U+7e98, U+7e9b-7e9c, U+7f36, U+7f38, U+7f3a, U+7f4c, U+7f50, U+7f54-7f55, U+7f6a-7f6b, U+7f6e, U+7f70, U+7f72, U+7f75, U+7f77, U+7f79, U+7f85, U+7f88, U+7f8a, U+7f8c, U+7f94, U+7f9a, U+7f9e, U+7fa4, U+7fa8-7fa9, U+7fb2, U+7fb8-7fb9, U+7fbd, U+7fc1, U+7fc5, U+7fca, U+7fcc, U+7fce, U+7fd2, U+7fd4-7fd5, U+7fdf-7fe1, U+7fe9, U+7feb, U+7ff0, U+7ff9, U+7ffc, U+8000-8001, U+8003, U+8006, U+8009, U+800c, U+8010, U+8015, U+8017-8018, U+802d;
}
/* [75] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.75.woff2) format('woff2');
  unicode-range: U+7a49, U+7a4d-7a4e, U+7a57, U+7a61-7a62, U+7a69, U+7a6b, U+7a70, U+7a74, U+7a76, U+7a79, U+7a7d, U+7a7f, U+7a81, U+7a84, U+7a88, U+7a92-7a93, U+7a95, U+7a98, U+7a9f, U+7aa9-7aaa, U+7aae-7aaf, U+7aba, U+7ac4-7ac5, U+7ac7, U+7aca, U+7ad7, U+7ad9, U+7add, U+7adf-7ae0, U+7ae3, U+7ae5, U+7aea, U+7aed, U+7aef, U+7af6, U+7af9-7afa, U+7aff, U+7b0f, U+7b11, U+7b19, U+7b1b, U+7b1e, U+7b20, U+7b26, U+7b2d, U+7b39, U+7b46, U+7b49, U+7b4b-7b4d, U+7b4f-7b52, U+7b54, U+7b56, U+7b60, U+7b6c, U+7b6e, U+7b75, U+7b7d, U+7b87, U+7b8b, U+7b8f, U+7b94-7b95, U+7b97, U+7b9a, U+7b9d, U+7ba1, U+7bad, U+7bb1, U+7bb4, U+7bb8, U+7bc0-7bc1, U+7bc4, U+7bc6-7bc7, U+7bc9, U+7bd2, U+7be0, U+7be4, U+7be9, U+7c07, U+7c12, U+7c1e, U+7c21, U+7c27, U+7c2a-7c2b, U+7c3d-7c3f, U+7c43, U+7c4c-7c4d, U+7c60, U+7c64, U+7c6c, U+7c73, U+7c83, U+7c89, U+7c92, U+7c95, U+7c97-7c98, U+7c9f, U+7ca5, U+7ca7, U+7cae, U+7cb1-7cb3, U+7cb9, U+7cbe, U+7cca, U+7cd6, U+7cde-7ce0, U+7ce7, U+7cfb, U+7cfe, U+7d00, U+7d02, U+7d04-7d08, U+7d0a-7d0b, U+7d0d, U+7d10, U+7d14, U+7d17-7d1b, U+7d20-7d21, U+7d2b-7d2c, U+7d2e;
}
/* [76] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.76.woff2) format('woff2');
  unicode-range: U+7704, U+7708-7709, U+770b, U+771e, U+7720, U+7729, U+7737-7738, U+773a, U+773c, U+7740, U+774d, U+775b, U+7761, U+7763, U+7766, U+776b, U+7779, U+777e-777f, U+778b, U+7791, U+779e, U+77a5, U+77ac-77ad, U+77b0, U+77b3, U+77bb-77bc, U+77bf, U+77d7, U+77db-77dc, U+77e2-77e3, U+77e9, U+77ed-77ef, U+7802, U+7812, U+7825-7827, U+782c, U+7832, U+7834, U+7845, U+784f, U+785d, U+786b-786c, U+786f, U+787c, U+7881, U+7887, U+788c-788e, U+7891, U+7897, U+78a3, U+78a7, U+78a9, U+78ba-78bc, U+78c1, U+78c5, U+78ca-78cb, U+78ce, U+78d0, U+78e8, U+78ec, U+78ef, U+78f5, U+78fb, U+7901, U+790e, U+7916, U+792a-792c, U+793a, U+7940-7941, U+7947-7949, U+7950, U+7956-7957, U+795a-795d, U+7960, U+7965, U+7968, U+796d, U+797a, U+797f, U+7981, U+798d-798e, U+7991, U+79a6-79a7, U+79aa, U+79ae, U+79b1, U+79b3, U+79b9, U+79bd-79c1, U+79c9-79cb, U+79d2, U+79d5, U+79d8, U+79df, U+79e4, U+79e6-79e7, U+79e9, U+79fb, U+7a00, U+7a05, U+7a08, U+7a0b, U+7a0d, U+7a14, U+7a17, U+7a19-7a1a, U+7a1c, U+7a1f-7a20, U+7a2e, U+7a31, U+7a36-7a37, U+7a3b-7a3d, U+7a3f-7a40, U+7a46;
}
/* [77] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.77.woff2) format('woff2');
  unicode-range: U+7482-7483, U+7487, U+7489, U+748b, U+7498, U+749c, U+749e-749f, U+74a1, U+74a3, U+74a5, U+74a7-74a8, U+74aa, U+74b0, U+74b2, U+74b5, U+74b9, U+74bd, U+74bf, U+74c6, U+74ca, U+74cf, U+74d4, U+74d8, U+74da, U+74dc, U+74e0, U+74e2-74e3, U+74e6, U+74ee, U+74f7, U+7501, U+7504, U+7511, U+7515, U+7518, U+751a-751b, U+7523, U+7525-7526, U+752b-752c, U+7531, U+7533, U+7538, U+753a, U+7547, U+754c, U+754f, U+7551, U+7553-7554, U+7559, U+755b-755d, U+7562, U+7565-7566, U+756a, U+756f-7570, U+7575-7576, U+7578, U+757a, U+757f, U+7586-7587, U+758a-758b, U+758e-758f, U+7591, U+759d, U+75a5, U+75ab, U+75b1-75b3, U+75b5, U+75b8-75b9, U+75bc-75be, U+75c2, U+75c5, U+75c7, U+75cd, U+75d2, U+75d4-75d5, U+75d8-75d9, U+75db, U+75e2, U+75f0, U+75f2, U+75f4, U+75fa, U+75fc, U+7600, U+760d, U+7619, U+761f-7622, U+7624, U+7626, U+763b, U+7642, U+764c, U+764e, U+7652, U+7656, U+7661, U+7664, U+7669, U+766c, U+7670, U+7672, U+7678, U+7686-7687, U+768e, U+7690, U+7693, U+76ae, U+76ba, U+76bf, U+76c2-76c3, U+76c6, U+76c8, U+76ca, U+76d2, U+76d6, U+76db-76dc, U+76de-76df, U+76e1, U+76e3-76e4, U+76e7, U+76f2, U+76fc, U+76fe, U+7701;
}
/* [78] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.78.woff2) format('woff2');
  unicode-range: U+7230, U+7232, U+7235, U+723a-723b, U+723d-723e, U+7240, U+7246-7248, U+724c, U+7252, U+7258-7259, U+725b, U+725d, U+725f, U+7261-7262, U+7267, U+7272, U+727d, U+7280-7281, U+72a2, U+72a7, U+72ac, U+72af, U+72c0, U+72c2, U+72c4, U+72ce, U+72d0, U+72d7, U+72d9, U+72e1, U+72e9, U+72f8-72f9, U+72fc-72fd, U+730a, U+7316, U+731b-731d, U+7325, U+7329-732b, U+7336-7337, U+733e-733f, U+7344-7345, U+7350, U+7352, U+7357, U+7368, U+736a, U+7370, U+7372, U+7375, U+7378, U+737a-737b, U+7384, U+7386-7387, U+7389, U+738e, U+7394, U+7396-7398, U+739f, U+73a7, U+73a9, U+73ad, U+73b2-73b3, U+73b9, U+73c0, U+73c2, U+73c9-73ca, U+73cc-73cd, U+73cf, U+73d6, U+73d9, U+73dd-73de, U+73e0, U+73e3-73e6, U+73e9-73ea, U+73ed, U+73f7, U+73f9, U+73fd-73fe, U+7401, U+7403, U+7405, U+7407, U+7409, U+7413, U+741b, U+7420-7422, U+7425-7426, U+7428, U+742a-742c, U+742e-7430, U+7433-7436, U+7438, U+743a, U+743f-7441, U+7443-7444, U+744b, U+7455, U+7457, U+7459-745c, U+745e-7460, U+7462, U+7464-7465, U+7468-746a, U+746f, U+747e;
}
/* [79] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.79.woff2) format('woff2');
  unicode-range: U+6f8d-6f8e, U+6f90, U+6f94, U+6f97, U+6fa3-6fa4, U+6fa7, U+6fae-6faf, U+6fb1, U+6fb3, U+6fb9, U+6fbe, U+6fc0-6fc3, U+6fca, U+6fd5, U+6fda, U+6fdf-6fe1, U+6fe4, U+6fe9, U+6feb-6fec, U+6fef, U+6ff1, U+6ffe, U+7001, U+7005-7006, U+7009, U+700b, U+700f, U+7011, U+7015, U+7018, U+701a-701f, U+7023, U+7027-7028, U+702f, U+7037, U+703e, U+704c, U+7050-7051, U+7058, U+705d, U+7070, U+7078, U+707c-707d, U+7085, U+708a, U+708e, U+7092, U+7098-709a, U+70a1, U+70a4, U+70ab-70ad, U+70af, U+70b3, U+70b7-70b9, U+70c8, U+70cb, U+70cf, U+70d8-70d9, U+70dd, U+70df, U+70f1, U+70f9, U+70fd, U+7104, U+7109, U+710c, U+7119-711a, U+711e, U+7126, U+7130, U+7136, U+7147, U+7149-714a, U+714c, U+714e, U+7150, U+7156, U+7159, U+715c, U+715e, U+7164-7167, U+7169, U+716c, U+716e, U+717d, U+7184, U+7189-718a, U+718f, U+7192, U+7194, U+7199, U+719f, U+71a2, U+71ac, U+71b1, U+71b9-71ba, U+71be, U+71c1, U+71c3, U+71c8-71c9, U+71ce, U+71d0, U+71d2, U+71d4-71d5, U+71df, U+71e5-71e7, U+71ed-71ee, U+71fb-71fc, U+71fe-7200, U+7206, U+7210, U+721b, U+722a, U+722c-722d;
}
/* [80] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.80.woff2) format('woff2');
  unicode-range: U+6d5a, U+6d5c, U+6d63, U+6d66, U+6d69-6d6a, U+6d6c, U+6d6e, U+6d74, U+6d78-6d79, U+6d7f, U+6d85, U+6d87-6d89, U+6d8c-6d8e, U+6d91, U+6d93, U+6d95, U+6daf, U+6db2, U+6db5, U+6dc0, U+6dc3-6dc7, U+6dcb, U+6dcf, U+6dd1, U+6dd8-6dda, U+6dde, U+6de1, U+6de8, U+6dea-6deb, U+6dee, U+6df1, U+6df3, U+6df5, U+6df7-6dfb, U+6e17, U+6e19-6e1b, U+6e1f-6e21, U+6e23-6e26, U+6e2b-6e2d, U+6e32, U+6e34, U+6e36, U+6e38, U+6e3a, U+6e3c-6e3e, U+6e43-6e44, U+6e4a, U+6e4d, U+6e56, U+6e58, U+6e5b-6e5c, U+6e5e-6e5f, U+6e67, U+6e6b, U+6e6e-6e6f, U+6e72-6e73, U+6e7a, U+6e90, U+6e96, U+6e9c-6e9d, U+6e9f, U+6ea2, U+6ea5, U+6eaa-6eab, U+6eaf, U+6eb1, U+6eb6, U+6eba, U+6ec2, U+6ec4-6ec5, U+6ec9, U+6ecb-6ecc, U+6ece, U+6ed1, U+6ed3-6ed4, U+6eef, U+6ef4, U+6ef8, U+6efe-6eff, U+6f01-6f02, U+6f06, U+6f0f, U+6f11, U+6f14-6f15, U+6f20, U+6f22-6f23, U+6f2b-6f2c, U+6f31-6f32, U+6f38, U+6f3f, U+6f41, U+6f51, U+6f54, U+6f57-6f58, U+6f5a-6f5b, U+6f5e-6f5f, U+6f62, U+6f64, U+6f6d-6f6e, U+6f70, U+6f7a, U+6f7c-6f7e, U+6f81, U+6f84, U+6f88;
}
/* [81] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.81.woff2) format('woff2');
  unicode-range: U+6ada-6adb, U+6af6, U+6afb, U+6b04, U+6b0a, U+6b0c, U+6b12, U+6b16, U+6b20-6b21, U+6b23, U+6b32, U+6b3a, U+6b3d-6b3e, U+6b46-6b47, U+6b4e, U+6b50, U+6b5f, U+6b61-6b62, U+6b64-6b66, U+6b6a, U+6b72, U+6b77-6b78, U+6b7b, U+6b7f, U+6b83-6b84, U+6b86, U+6b89-6b8a, U+6b96, U+6b98, U+6b9e, U+6bae-6baf, U+6bb2, U+6bb5, U+6bb7, U+6bba, U+6bbc, U+6bbf, U+6bc1, U+6bc5-6bc6, U+6bcb, U+6bcf, U+6bd2-6bd3, U+6bd6-6bd8, U+6bdb, U+6beb-6bec, U+6c08, U+6c0f, U+6c13, U+6c23, U+6c37-6c38, U+6c3e, U+6c40-6c42, U+6c4e, U+6c50, U+6c55, U+6c57, U+6c5a, U+6c5d-6c60, U+6c68, U+6c6a, U+6c6d, U+6c70, U+6c72, U+6c76, U+6c7a, U+6c7d-6c7e, U+6c81-6c83, U+6c85-6c88, U+6c8c, U+6c90, U+6c92-6c96, U+6c99-6c9b, U+6cab, U+6cae, U+6cb3, U+6cb8-6cb9, U+6cbb-6cbf, U+6cc1-6cc2, U+6cc4, U+6cc9-6cca, U+6ccc, U+6cd3, U+6cd7, U+6cdb, U+6ce1-6ce3, U+6ce5, U+6ce8, U+6ceb, U+6cee-6cf0, U+6cf3, U+6d0b-6d0c, U+6d11, U+6d17, U+6d19, U+6d1b, U+6d1e, U+6d25, U+6d27, U+6d29, U+6d32, U+6d35-6d36, U+6d38-6d39, U+6d3b, U+6d3d-6d3e, U+6d41, U+6d59;
}
/* [82] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.82.woff2) format('woff2');
  unicode-range: U+67f0-67f1, U+67f3-67f6, U+67fb, U+67fe, U+6812-6813, U+6816-6817, U+6821-6822, U+682f, U+6838-6839, U+683d, U+6840-6843, U+6848, U+684e, U+6850-6851, U+6853-6854, U+686d, U+6876, U+687f, U+6881, U+6885, U+688f, U+6893-6894, U+6897, U+689d, U+689f, U+68a1-68a2, U+68a7-68a8, U+68ad, U+68af-68b1, U+68b3, U+68b5-68b6, U+68c4-68c5, U+68c9, U+68cb, U+68cd, U+68d2, U+68d5, U+68d7-68d8, U+68da, U+68df-68e0, U+68e7-68e8, U+68ee, U+68f2, U+68f9-68fa, U+6900, U+6905, U+690d-690e, U+6912, U+6927, U+6930, U+693d, U+693f, U+694a, U+6953-6955, U+6957, U+6959-695a, U+695e, U+6960-6963, U+6968, U+696b, U+696d-696f, U+6975, U+6977-6979, U+6995, U+699b-699c, U+69a5, U+69a7, U+69ae, U+69b4, U+69bb, U+69c1, U+69c3, U+69cb-69cd, U+69d0, U+69e8, U+69ea, U+69fb, U+69fd, U+69ff, U+6a02, U+6a0a, U+6a11, U+6a13, U+6a17, U+6a19, U+6a1e-6a1f, U+6a21, U+6a23, U+6a35, U+6a38-6a3a, U+6a3d, U+6a44, U+6a48, U+6a4b, U+6a52-6a53, U+6a58-6a59, U+6a5f, U+6a61, U+6a6b, U+6a80, U+6a84, U+6a89, U+6a8d-6a8e, U+6a97, U+6a9c, U+6aa3, U+6ab3, U+6abb, U+6ac2-6ac3, U+6ad3;
}
/* [83] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.83.woff2) format('woff2');
  unicode-range: U+6607, U+6609-660a, U+660c, U+660f-6611, U+6613-6615, U+661e, U+6620, U+6627-6628, U+662d, U+6630-6631, U+6634, U+6636, U+663a-663b, U+6641, U+6643-6644, U+6649, U+664b, U+664f, U+6659, U+665b, U+665d-665f, U+6664-6669, U+666b, U+666e-666f, U+6673-6674, U+6676-6678, U+6684, U+6687-6689, U+668e, U+6690-6691, U+6696-6698, U+669d, U+66a0, U+66a2, U+66ab, U+66ae, U+66b2-66b4, U+66b9, U+66bb, U+66be, U+66c4, U+66c6-66c7, U+66c9, U+66d6, U+66d9, U+66dc-66dd, U+66e0, U+66e6, U+66f0, U+66f2-66f4, U+66f7, U+66f9-66fa, U+66fc, U+66fe-66ff, U+6703, U+670b, U+670d, U+6714-6715, U+6717, U+671b, U+671d-671f, U+6726-6727, U+672a-672b, U+672d-672e, U+6731, U+6736, U+673a, U+673d, U+6746, U+6749, U+674e-6751, U+6753, U+6756, U+675c, U+675e-675f, U+676d, U+676f-6770, U+6773, U+6775, U+6777, U+677b, U+677e-677f, U+6787, U+6789, U+678b, U+678f-6790, U+6793, U+6795, U+679a, U+679d, U+67af-67b0, U+67b3, U+67b6-67b8, U+67be, U+67c4, U+67cf-67d4, U+67da, U+67dd, U+67e9, U+67ec, U+67ef;
}
/* [84] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.84.woff2) format('woff2');
  unicode-range: U+6392, U+6396, U+6398, U+639b, U+63a0-63a2, U+63a5, U+63a7-63aa, U+63c0, U+63c4, U+63c6, U+63cf, U+63d6, U+63da-63db, U+63e1, U+63ed-63ee, U+63f4, U+63f6-63f7, U+640d, U+640f, U+6414, U+6416-6417, U+641c, U+6422, U+642c-642d, U+643a, U+643e, U+6458, U+6460, U+6469, U+646f, U+6478-647a, U+6488, U+6491-6493, U+649a, U+649e, U+64a4-64a5, U+64ab, U+64ad-64ae, U+64b0, U+64b2, U+64bb, U+64c1, U+64c4-64c5, U+64c7, U+64ca, U+64cd-64ce, U+64d2, U+64d4, U+64d8, U+64da, U+64e1-64e2, U+64e5-64e7, U+64ec, U+64f2, U+64f4, U+64fa, U+64fe, U+6500, U+6504, U+6518, U+651d, U+6523, U+652a-652c, U+652f, U+6536-6539, U+653b, U+653e, U+6548, U+654d-654f, U+6551, U+6556-6557, U+655e, U+6562-6563, U+6566, U+656c-656d, U+6572, U+6574-6575, U+6577-6578, U+657e, U+6582-6583, U+6585, U+658c, U+6590-6591, U+6597, U+6599, U+659b-659c, U+659f, U+65a1, U+65a4-65a5, U+65a7, U+65ab-65ac, U+65af, U+65b7, U+65bc-65bd, U+65c1, U+65c5, U+65cb-65cc, U+65cf, U+65d2, U+65d7, U+65e0, U+65e3, U+65e6, U+65e8-65e9, U+65ec-65ed, U+65f1, U+65f4, U+65fa-65fd, U+65ff, U+6606;
}
/* [85] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.85.woff2) format('woff2');
  unicode-range: U+614c, U+6153, U+6155, U+6158-6159, U+615d, U+615f, U+6162-6164, U+6167-6168, U+616b, U+616e, U+6170, U+6176-6177, U+617d-617e, U+6181-6182, U+618a, U+618e, U+6190-6191, U+6194, U+6198-619a, U+61a4, U+61a7, U+61a9, U+61ab-61ac, U+61ae, U+61b2, U+61b6, U+61ba, U+61be, U+61c3, U+61c7-61cb, U+61e6, U+61f2, U+61f6-61f8, U+61fa, U+61fc, U+61ff-6200, U+6207-6208, U+620a, U+620c-620e, U+6212, U+6216, U+621a, U+621f, U+6221, U+622a, U+622e, U+6230-6231, U+6234, U+6236, U+623e-623f, U+6241, U+6247-6249, U+624d, U+6253, U+6258, U+626e, U+6271, U+6276, U+6279, U+627c, U+627f-6280, U+6284, U+6289-628a, U+6291-6292, U+6295, U+6297-6298, U+629b, U+62ab, U+62b1, U+62b5, U+62b9, U+62bc-62bd, U+62c2, U+62c7-62c9, U+62cc-62cd, U+62cf-62d0, U+62d2-62d4, U+62d6-62d9, U+62db-62dc, U+62ec-62ef, U+62f1, U+62f3, U+62f7, U+62fe-62ff, U+6301, U+6307, U+6309, U+6311, U+632b, U+632f, U+633a-633b, U+633d-633e, U+6349, U+634c, U+634f-6350, U+6355, U+6367-6368, U+636e, U+6372, U+6377, U+637a-637b, U+637f, U+6383, U+6388-6389, U+638c;
}
/* [86] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.86.woff2) format('woff2');
  unicode-range: U+5f11, U+5f13-5f15, U+5f17-5f18, U+5f1b, U+5f1f, U+5f26-5f27, U+5f29, U+5f31, U+5f35, U+5f3a, U+5f3c, U+5f48, U+5f4a, U+5f4c, U+5f4e, U+5f56-5f57, U+5f59, U+5f5b, U+5f62, U+5f66-5f67, U+5f69-5f6d, U+5f70-5f71, U+5f77, U+5f79, U+5f7c, U+5f7f-5f81, U+5f85, U+5f87, U+5f8a-5f8b, U+5f90-5f92, U+5f98-5f99, U+5f9e, U+5fa0-5fa1, U+5fa8-5faa, U+5fae, U+5fb5, U+5fb9, U+5fbd, U+5fc5, U+5fcc-5fcd, U+5fd6-5fd9, U+5fe0, U+5feb, U+5ff5, U+5ffd, U+5fff, U+600f, U+6012, U+6016, U+601c, U+6020-6021, U+6025, U+6028, U+602a, U+602f, U+6041-6043, U+604d, U+6050, U+6052, U+6055, U+6059, U+605d, U+6062-6065, U+6068-606a, U+606c-606d, U+606f-6070, U+6085, U+6089, U+608c-608d, U+6094, U+6096, U+609a-609b, U+609f-60a0, U+60a3-60a4, U+60a7, U+60b0, U+60b2-60b4, U+60b6, U+60b8, U+60bc-60bd, U+60c7, U+60d1, U+60da, U+60dc, U+60df-60e1, U+60f0-60f1, U+60f6, U+60f9-60fb, U+6101, U+6106, U+6108-6109, U+610d-610e, U+6115, U+611a, U+6127, U+6130, U+6134, U+6137, U+613c, U+613e-613f, U+6142, U+6144, U+6147-6148, U+614a-614b;
}
/* [87] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.87.woff2) format('woff2');
  unicode-range: U+5c40, U+5c45-5c46, U+5c48, U+5c4b, U+5c4d-5c4e, U+5c51, U+5c5b, U+5c60, U+5c62, U+5c64-5c65, U+5c6c, U+5c6f, U+5c79, U+5c90-5c91, U+5ca1, U+5ca9, U+5cab-5cac, U+5cb1, U+5cb3, U+5cb5, U+5cb7-5cb8, U+5cba, U+5cbe, U+5cc0, U+5cd9, U+5ce0, U+5ce8, U+5cef-5cf0, U+5cf4, U+5cf6, U+5cfb, U+5cfd, U+5d07, U+5d0d-5d0e, U+5d11, U+5d14, U+5d16-5d17, U+5d19, U+5d27, U+5d29, U+5d4b-5d4c, U+5d50, U+5d69, U+5d6c, U+5d6f, U+5d87, U+5d8b, U+5d9d, U+5da0, U+5da2, U+5daa, U+5db8, U+5dba, U+5dbc-5dbd, U+5dcd, U+5dd2, U+5dd6, U+5de1-5de2, U+5de5-5de8, U+5deb, U+5dee, U+5df1-5df4, U+5df7, U+5dfd-5dfe, U+5e03, U+5e06, U+5e11, U+5e16, U+5e19, U+5e1b, U+5e1d, U+5e25, U+5e2b, U+5e2d, U+5e33, U+5e36, U+5e38, U+5e3d, U+5e3f-5e40, U+5e44-5e45, U+5e47, U+5e4c, U+5e55, U+5e5f, U+5e61-5e63, U+5e72, U+5e77-5e79, U+5e7b-5e7e, U+5e84, U+5e87, U+5e8a, U+5e8f, U+5e95, U+5e97, U+5e9a, U+5e9c, U+5ea0, U+5ea7, U+5eab, U+5ead, U+5eb5-5eb8, U+5ebe, U+5ec2, U+5ec8-5eca, U+5ed0, U+5ed3, U+5ed6, U+5eda-5edb, U+5edf-5ee0, U+5ee2-5ee3, U+5eec, U+5ef3, U+5ef6-5ef7, U+5efa-5efb, U+5f01, U+5f04, U+5f0a;
}
/* [88] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.88.woff2) format('woff2');
  unicode-range: U+59be, U+59c3, U+59c6, U+59c9, U+59cb, U+59d0-59d1, U+59d3-59d4, U+59d9-59da, U+59dc-59dd, U+59e6, U+59e8, U+59ea, U+59ec, U+59ee, U+59f8, U+59fb, U+59ff, U+5a01, U+5a03, U+5a11, U+5a18, U+5a1b-5a1c, U+5a1f-5a20, U+5a25, U+5a29, U+5a36, U+5a3c, U+5a41, U+5a46, U+5a49, U+5a5a, U+5a62, U+5a66, U+5a92, U+5a9a-5a9b, U+5aa4, U+5ac1-5ac2, U+5ac4, U+5ac9, U+5acc, U+5ae1, U+5ae6, U+5ae9, U+5b05, U+5b09, U+5b0b-5b0c, U+5b16, U+5b2a, U+5b40, U+5b43, U+5b51, U+5b54-5b55, U+5b58, U+5b5a, U+5b5c-5b5d, U+5b5f, U+5b63-5b64, U+5b69, U+5b6b, U+5b70-5b71, U+5b75, U+5b7a, U+5b7c, U+5b85, U+5b87-5b88, U+5b8b, U+5b8f, U+5b93, U+5b95-5b99, U+5b9b-5b9c, U+5ba2-5ba6, U+5bac, U+5bae, U+5bb0, U+5bb3-5bb5, U+5bb8-5bb9, U+5bbf-5bc0, U+5bc2-5bc7, U+5bcc, U+5bd0, U+5bd2-5bd4, U+5bd7, U+5bde-5bdf, U+5be1-5be2, U+5be4-5be9, U+5beb-5bec, U+5bee-5bef, U+5bf5-5bf6, U+5bf8, U+5bfa, U+5c01, U+5c04, U+5c07-5c0b, U+5c0d-5c0e, U+5c16, U+5c19, U+5c24, U+5c28, U+5c31, U+5c38-5c3c, U+5c3e-5c3f;
}
/* [89] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.89.woff2) format('woff2');
  unicode-range: U+5703-5704, U+5708, U+570d, U+5712-5713, U+5716, U+5718, U+572d, U+573b, U+5740, U+5742, U+5747, U+574a, U+574d-574e, U+5750-5751, U+5761, U+5764, U+5766, U+576a, U+576e, U+5770, U+5775, U+577c, U+5782, U+5788, U+578b, U+5793, U+57a0, U+57a2-57a3, U+57c3, U+57c7-57c8, U+57cb, U+57df-57e0, U+57f0, U+57f4, U+57f7, U+57f9-57fa, U+57fc, U+5800, U+5802, U+5805-5806, U+5808-580a, U+581e, U+5821, U+5824, U+5827, U+582a, U+582f-5831, U+5835, U+583a, U+584a-584b, U+584f, U+5851, U+5854, U+5857-5858, U+585a, U+585e, U+5861-5862, U+5864, U+5875, U+5879, U+587c, U+587e, U+5883, U+5885, U+5889, U+5893, U+589c, U+589e-589f, U+58a8-58a9, U+58ae, U+58b3, U+58ba-58bb, U+58be, U+58c1, U+58c5, U+58c7, U+58ce, U+58d1, U+58d3, U+58d5, U+58d8-58d9, U+58de-58df, U+58e4, U+58ec, U+58ef, U+58f9-58fb, U+58fd, U+590f, U+5914-5915, U+5919, U+5922, U+592d-592e, U+5931, U+5937, U+593e, U+5944, U+5947-5949, U+594e-5951, U+5954-5955, U+5957, U+595a, U+5960, U+5962, U+5967, U+596a-596e, U+5974, U+5978, U+5982-5984, U+598a, U+5993, U+5996-5997, U+5999, U+59a5, U+59a8, U+59ac, U+59b9, U+59bb;
}
/* [90] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.90.woff2) format('woff2');
  unicode-range: U+539a, U+53a0, U+53a5-53a6, U+53ad, U+53bb, U+53c3, U+53c8-53cb, U+53cd, U+53d4, U+53d6-53d7, U+53db, U+53e1-53e3, U+53e5, U+53e9-53ed, U+53f1, U+53f3, U+53f8, U+5403-5404, U+540a, U+540e-5411, U+541b, U+541d, U+541f-5420, U+5426, U+5429, U+542b, U+5433, U+5438-5439, U+543b-543c, U+543e, U+5442, U+5448, U+544a, U+5451, U+5468, U+546a, U+5471, U+5473, U+5475, U+547b-547d, U+5480, U+5486, U+548e, U+5490, U+54a4, U+54a8, U+54ab-54ac, U+54b3, U+54b8, U+54bd, U+54c0, U+54c4, U+54c8-54c9, U+54e1, U+54e5, U+54e8, U+54ed-54ee, U+54f2, U+54fa, U+5504, U+5506-5507, U+550e, U+5510, U+551c, U+552f, U+5531, U+5535, U+553e, U+5544, U+5546, U+554f, U+5553, U+5556, U+555e, U+5563, U+557c, U+5580, U+5584, U+5586-5587, U+5589-558a, U+5598-559a, U+559c-559d, U+55a7, U+55a9-55ac, U+55ae, U+55c5, U+55c7, U+55d4, U+55da, U+55dc, U+55df, U+55e3-55e4, U+55fd-55fe, U+5606, U+5609, U+5614, U+5617, U+562f, U+5632, U+5634, U+5636, U+5653, U+5668, U+566b, U+5674, U+5686, U+56a5, U+56ac, U+56ae, U+56b4, U+56bc, U+56ca, U+56cd, U+56d1, U+56da-56db, U+56de, U+56e0, U+56f0, U+56f9-56fa;
}
/* [91] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.91.woff2) format('woff2');
  unicode-range: U+516e, U+5175-5178, U+517c, U+5180, U+5186, U+518a, U+518d, U+5192, U+5195, U+5197, U+51a0, U+51a5, U+51aa, U+51ac, U+51b6-51b7, U+51bd, U+51c4, U+51c6, U+51c9, U+51cb-51cd, U+51dc-51de, U+51e1, U+51f0-51f1, U+51f6, U+51f8-51f9, U+51fd, U+5200, U+5203, U+5207-5208, U+520a, U+520e, U+5211, U+5217, U+521d, U+5224-5225, U+522a, U+522e, U+5230, U+5236-523b, U+5243, U+5247, U+524a-524c, U+5254, U+5256, U+525b, U+525d, U+5261, U+5269-526a, U+526f, U+5272, U+5275, U+527d, U+527f, U+5283, U+5287-5289, U+528d, U+5291-5292, U+529f, U+52a3-52a4, U+52a9-52ab, U+52be, U+52c1, U+52c3, U+52c5, U+52c7, U+52c9, U+52cd, U+52d2, U+52d6, U+52d8-52d9, U+52db, U+52dd-52df, U+52e2-52e4, U+52f3, U+52f5, U+52f8, U+52fa-52fb, U+52fe-52ff, U+5305, U+5308, U+530d, U+530f-5310, U+5315, U+5319, U+5320-5321, U+5323, U+532a, U+532f, U+5339, U+533f-5341, U+5343-5344, U+5347-534a, U+534d, U+5351-5354, U+535a, U+535c, U+535e, U+5360, U+5366, U+5368, U+536f-5371, U+5374-5375, U+5377, U+537d, U+537f, U+5384, U+5393, U+5398;
}
/* [92] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.92.woff2) format('woff2');
  unicode-range: U+4f43, U+4f46-4f48, U+4f4d-4f51, U+4f55, U+4f59-4f5a, U+4f69, U+4f6f-4f70, U+4f73, U+4f76, U+4f7a, U+4f7e-4f7f, U+4f81, U+4f83-4f84, U+4f86, U+4f88, U+4f8a-4f8b, U+4f8d, U+4f8f, U+4f91, U+4f96, U+4f98, U+4f9b, U+4f9d, U+4fae-4faf, U+4fb5-4fb6, U+4fbf, U+4fc2-4fc4, U+4fc9-4fca, U+4fce, U+4fd1, U+4fd3-4fd4, U+4fd7, U+4fda, U+4fdf-4fe0, U+4fee-4fef, U+4ff1, U+4ff3, U+4ff5, U+4ff8, U+4ffa, U+5002, U+5006, U+5009, U+500b, U+500d, U+5011-5012, U+5016, U+5019-501a, U+501c, U+501e-501f, U+5021, U+5023-5024, U+5026-5028, U+502a-502d, U+503b, U+5043, U+5047-5049, U+504f, U+5055, U+505a, U+505c, U+5065, U+5074-5076, U+5078, U+5080, U+5085, U+508d, U+5091, U+5098-5099, U+50ac-50ad, U+50b2-50b3, U+50b5, U+50b7, U+50be, U+50c5, U+50c9-50ca, U+50d1, U+50d5-50d6, U+50da, U+50de, U+50e5, U+50e7, U+50ed, U+50f9, U+50fb, U+50ff-5101, U+5104, U+5106, U+5109, U+5112, U+511f, U+5121, U+512a, U+5132, U+5137, U+513a, U+513c, U+5140-5141, U+5143-5148, U+514b-514e, U+5152, U+515c, U+5162, U+5169-516b, U+516d;
}
/* [93] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.93.woff2) format('woff2');
  unicode-range: U+338c-339c, U+339f-33a0, U+33a2-33cb, U+33cf-33d0, U+33d3, U+33d6, U+33d8, U+33db-33dd, U+4e01, U+4e03, U+4e07-4e08, U+4e11, U+4e14-4e15, U+4e18-4e19, U+4e1e, U+4e32, U+4e38-4e39, U+4e42-4e43, U+4e45, U+4e4d-4e4f, U+4e56, U+4e58-4e59, U+4e5d-4e5e, U+4e6b, U+4e6d, U+4e73, U+4e76-4e77, U+4e7e, U+4e82, U+4e86, U+4e88, U+4e8e, U+4e90-4e92, U+4e94-4e95, U+4e98, U+4e9b, U+4e9e, U+4ea1-4ea2, U+4ea4-4ea6, U+4ea8, U+4eab, U+4ead-4eae, U+4eb6, U+4ec0-4ec1, U+4ec4, U+4ec7, U+4ecb, U+4ecd, U+4ed4-4ed5, U+4ed7-4ed9, U+4edd, U+4edf, U+4ee4, U+4ef0, U+4ef2, U+4ef6-4ef7, U+4efb, U+4f01, U+4f09, U+4f0b, U+4f0d-4f11, U+4f2f, U+4f34, U+4f36, U+4f38, U+4f3a, U+4f3c-4f3d;
}
/* [94] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.94.woff2) format('woff2');
  unicode-range: U+3136, U+3138, U+313a-3140, U+3143-3144, U+3150, U+3152, U+3154-3156, U+3158-315b, U+315d-315f, U+3162, U+3164-318c, U+318e, U+3200-321b, U+3231, U+3239, U+3251-325a, U+3260-327b, U+327e-327f, U+328a-3290, U+3294, U+329e, U+32a5, U+3380-3384, U+3388-338b;
}
/* [95] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.95.woff2) format('woff2');
  unicode-range: U+2f7d, U+2f7f-2f8b, U+2f8e-2f90, U+2f92-2f97, U+2f99-2fa0, U+2fa2-2fa3, U+2fa5-2fa9, U+2fac-2fb1, U+2fb3-2fbc, U+2fc1-2fca, U+2fcd-2fd4, U+3003, U+3012-3019, U+301c, U+301e-3020, U+3036, U+3041, U+3043, U+3045, U+3047, U+3049, U+304e, U+3050, U+3052, U+3056, U+305a, U+305c, U+305e, U+3062, U+3065, U+306c, U+3070-307d, U+3080, U+3085, U+3087, U+308e, U+3090-3091, U+30a1, U+30a5, U+30a9, U+30ae, U+30b1-30b2, U+30b4, U+30b6, U+30bc-30be, U+30c2, U+30c5, U+30cc, U+30d2, U+30d4, U+30d8-30dd, U+30e4, U+30e6, U+30e8, U+30ee, U+30f0-30f2, U+30f4-30f6, U+3133, U+3135;
}
/* [96] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.96.woff2) format('woff2');
  unicode-range: U+2541-254b, U+25a4-25a9, U+25b1, U+25b5, U+25b9, U+25bf, U+25c1, U+25c3, U+25c9-25ca, U+25cc, U+25ce, U+25d0-25d1, U+25e6, U+25ef, U+260f, U+261d, U+261f, U+262f, U+2660, U+2664, U+2667-2669, U+266d, U+266f, U+2716, U+271a, U+273d, U+2756, U+2776-277f, U+278a-2793, U+2963, U+2965, U+2ac5-2ac6, U+2acb-2acc, U+2f00, U+2f04, U+2f06, U+2f08, U+2f0a-2f0b, U+2f11-2f12, U+2f14, U+2f17-2f18, U+2f1c-2f1d, U+2f1f-2f20, U+2f23-2f26, U+2f28-2f29, U+2f2b, U+2f2d, U+2f2f-2f32, U+2f38, U+2f3c-2f40, U+2f42-2f4c, U+2f4f-2f52, U+2f54-2f58, U+2f5a-2f66, U+2f69-2f70, U+2f72-2f76, U+2f78, U+2f7a-2f7c;
}
/* [97] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.97.woff2) format('woff2');
  unicode-range: U+2479-2487, U+249c-24d1, U+24d3-24d7, U+24d9-24e9, U+24eb-24f4, U+2500-2501, U+2503, U+250c-2513, U+2515-2516, U+2518-2540;
}
/* [98] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.98.woff2) format('woff2');
  unicode-range: U+215b-215e, U+2162-2169, U+2170-2179, U+2195-2199, U+21b0-21b4, U+21bc, U+21c0, U+21c4-21c5, U+21cd, U+21cf-21d4, U+21e0-21e3, U+21e6-21e9, U+2200, U+2202-2203, U+2206-2209, U+220b-220c, U+220f, U+2211, U+2213, U+221a, U+221d-2220, U+2222, U+2225-2227, U+2229-222c, U+222e, U+2234-2237, U+223d, U+2243, U+2245, U+2248, U+2250-2253, U+225a, U+2260-2262, U+2264-2267, U+226a-226b, U+226e-2273, U+2276-2277, U+2279-227b, U+2280-2287, U+228a-228b, U+2295-2297, U+22a3-22a5, U+22bb-22bc, U+22ce-22cf, U+22da-22db, U+22ee-22ef, U+2306, U+2312, U+2314, U+2467-2478;
}
/* [99] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.99.woff2) format('woff2');
  unicode-range: U+81-82, U+84, U+a2-a5, U+a7-a8, U+aa, U+ac-ad, U+b1-b3, U+b6, U+b8-ba, U+bc-be, U+c0, U+c2, U+c6-cb, U+ce-d0, U+d4, U+d8-d9, U+db-dc, U+de-df, U+e6, U+eb, U+ee-f0, U+f4, U+f7-f9, U+fb, U+fe-ff, U+111, U+126-127, U+132-133, U+138, U+13f-142, U+149-14b, U+152-153, U+166-167, U+2bc, U+2c7, U+2d0, U+2d8-2d9, U+2db-2dd, U+391-394, U+396-3a1, U+3a3-3a9, U+3b2-3b6, U+3b8, U+3bc, U+3be-3c1, U+3c3-3c9, U+2010, U+2015-2016, U+2018-2019, U+201b, U+201f-2021, U+2025, U+2030, U+2033-2036, U+203c, U+203e, U+2042, U+2074, U+207a-207f, U+2081-2084, U+2109, U+2113, U+2116, U+2121, U+2126, U+212b, U+2153-2154;
}
/* [100] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.100.woff2) format('woff2');
  unicode-range: U+e8, U+2da, U+2160, U+2194, U+3054, U+3058, U+306d, U+3086, U+308d, U+30ac, U+30bb, U+30c4, U+30cd-30ce, U+30e2, U+3132, U+3146, U+3149, U+339d, U+4e3b, U+4f0a, U+4fdd, U+4fe1, U+5409, U+540c, U+5834, U+592a-592b, U+5b9a, U+5dde, U+5e0c, U+5e73, U+5f0f, U+60f3, U+653f, U+661f, U+662f, U+667a, U+683c, U+6b4c, U+6c11, U+767c, U+76ee, U+76f4, U+77f3, U+79d1, U+7a7a, U+7b2c, U+7d22, U+8207, U+8a00, U+8a71, U+9280, U+9580, U+958b, U+96c6, U+9762, U+98df, U+9ed1, U+ac2d, U+adc8, U+add3, U+af48, U+b014, U+b134-b135, U+b158, U+b2aa, U+b35f, U+b6a4, U+b9cf, U+bb63, U+bd23, U+be91, U+c29b, U+c3f4, U+c42c, U+c55c, U+c573, U+c58f, U+c78c, U+c7dd, U+c8f5, U+cad1, U+cc48, U+cf10, U+cf20, U+d03c, U+d07d, U+d2a0, U+d30e, U+d38d, U+d3a8, U+d3c8, U+d5e5, U+d5f9, U+d6e4, U+f90a, U+ff02, U+ff1c;
}
/* [101] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.101.woff2) format('woff2');
  unicode-range: U+3b1, U+2466, U+25a1, U+25a3, U+261c, U+3008-3009, U+305b, U+305d, U+3069, U+30a7, U+30ba, U+30cf, U+30ef, U+3151, U+3157, U+4e4b, U+4e5f, U+4e8c, U+4eca, U+4ed6, U+4f5b, U+50cf, U+5149, U+5165, U+5171, U+5229, U+529b, U+5316, U+539f, U+53f2, U+571f, U+5728, U+58eb, U+591c, U+5b78, U+5c11, U+5c55, U+5ddd, U+5e02, U+5fb7, U+60c5, U+610f, U+611f, U+6625, U+66f8, U+6797, U+679c, U+682a, U+6d2a, U+706b, U+7406, U+767b, U+76f8, U+77e5, U+7acb, U+898b, U+8a69, U+8def, U+8fd1, U+901a, U+90e8, U+91cd, U+975e, U+ae14, U+ae6c, U+aec0, U+afc7, U+afc9, U+b01c, U+b028, U+b308, U+b311, U+b314, U+b31c, U+b524, U+b560, U+b764, U+b920, U+b9e3, U+bd48, U+be7d, U+c0db, U+c231, U+c270, U+c2e3, U+c37d, U+c3ed, U+c530, U+c6a5, U+c6dc, U+c7a4, U+c954, U+c974, U+d000, U+d565, U+d667, U+d6c5, U+d79d, U+ff1e;
}
/* [102] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.102.woff2) format('woff2');
  unicode-range: U+131, U+2032, U+2465, U+2642, U+3048, U+3051, U+3083-3084, U+308f, U+30c0, U+30d1, U+30d3, U+30d6, U+30df, U+30e7, U+3153, U+4e16, U+4e8b, U+4ee5, U+5206, U+52a0, U+52d5, U+53e4, U+53ef, U+54c1, U+57ce, U+597d, U+5b8c, U+5ea6, U+5f8c, U+5f97, U+6210, U+6240, U+624b, U+6728, U+6bd4, U+7236, U+7269, U+7279, U+738b, U+7528, U+7530, U+767e, U+798f, U+8005, U+8a18, U+90fd, U+91cc, U+9577, U+9593, U+98a8, U+ac20, U+acf6, U+ad90, U+af5d, U+af80, U+afcd, U+aff0, U+b0a1, U+b0b5, U+b1fd, U+b2fc, U+b380, U+b51b, U+b584, U+b5b3, U+b8fd, U+b93c, U+b9f4, U+bb44, U+bc08, U+bc27, U+bc49, U+be55, U+be64, U+bfb0, U+bfc5, U+c178, U+c21f, U+c314, U+c4f1, U+c58d, U+c664, U+c698, U+c6a7, U+c6c1, U+c9ed, U+cac0, U+cacc, U+cad9, U+ccb5, U+cdcc, U+d0e4, U+d143, U+d320, U+d330, U+d54d, U+ff06, U+ff1f, U+ff5e;
}
/* [103] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.103.woff2) format('woff2');
  unicode-range: U+b4, U+20a9, U+20ac, U+2190, U+24d8, U+2502, U+2514, U+2592, U+25c7-25c8, U+2663, U+3060, U+3064, U+3081, U+3088, U+30a3, U+30a6, U+30aa, U+30b5, U+30c7, U+30ca-30cb, U+30d0, U+30e3, U+30e5, U+339e, U+4e09, U+4eac, U+4f5c, U+5167-5168, U+516c, U+51fa, U+5408, U+540d, U+591a, U+5b57, U+6211, U+65b9, U+660e, U+6642, U+6700, U+6b63, U+6e2f, U+7063, U+7532, U+793e, U+81ea, U+8272, U+82b1, U+897f, U+8eca, U+91ce, U+ac38, U+ad76, U+ae84, U+aecc, U+b07d, U+b0b1, U+b215, U+b2a0, U+b310, U+b3d7, U+b52a, U+b618, U+b775, U+b797, U+bcd5, U+bd59, U+be80, U+bea8, U+bed1, U+bee4-bee5, U+c060, U+c2ef, U+c329, U+c3dc, U+c597, U+c5bd, U+c5e5, U+c69c, U+c9d6, U+ca29, U+ca5c, U+ca84, U+cc39, U+cc3b, U+ce89, U+cee5, U+cf65, U+cf85, U+d058, U+d145, U+d22d, U+d325, U+d37d, U+d3ad, U+d769, U+ff0c;
}
/* [104] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.104.woff2) format('woff2');
  unicode-range: U+2161, U+2228, U+2299, U+2464, U+2517, U+2640, U+3042, U+304a, U+3053, U+3061, U+307f, U+3082, U+308c, U+3092, U+30a8, U+30ab, U+30ad, U+30b0, U+30b3, U+30b7, U+30c1, U+30c6, U+30c9, U+30d5, U+30d7, U+30de, U+30e0-30e1, U+30ec-30ed, U+4e0b, U+4e0d, U+4ee3, U+53f0, U+548c, U+5b89, U+5bb6, U+5c0f, U+611b, U+6771, U+6aa2, U+6bcd, U+6c34, U+6cd5, U+6d77, U+767d, U+795e, U+8ecd, U+9999, U+9ad8, U+ac07, U+ac1a, U+ac40, U+ad0c, U+ad88, U+ada4, U+ae01, U+ae65, U+aebd, U+aec4, U+afe8, U+b139, U+b205, U+b383, U+b38c, U+b42c, U+b461, U+b55c, U+b78f, U+b8fb, U+b9f7, U+bafc, U+bc99, U+bed8, U+bfcd, U+c0bf, U+c0f9, U+c167, U+c204, U+c20f, U+c22f, U+c258, U+c298, U+c2bc, U+c388, U+c501, U+c50c, U+c5b9, U+c5ce, U+c641, U+c648, U+c73d, U+ca50, U+ca61, U+cc4c, U+ceac, U+d0d4, U+d5f7, U+d6d7, U+ff1a;
}
/* [105] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.105.woff2) format('woff2');
  unicode-range: U+2103, U+2463, U+25c6, U+25cb, U+266c, U+3001, U+300a, U+3046, U+304c-304d, U+304f, U+3055, U+3059, U+3063, U+3066-3068, U+306f, U+3089, U+30b8, U+30bf, U+314f, U+4e0a, U+570b, U+5730, U+5916, U+5929, U+5c71, U+5e74, U+5fc3, U+601d, U+6027, U+63d0, U+6709, U+6734, U+751f, U+7684, U+82f1, U+9053, U+91d1, U+97f3, U+ac2f, U+ac4d, U+adc4, U+ade4, U+ae41, U+ae4d-ae4e, U+aed1, U+afb9, U+b0e0, U+b299, U+b365, U+b46c, U+b480, U+b4c8, U+b7b4, U+b819, U+b918, U+baab, U+bab9, U+be8f, U+bed7, U+c0ec, U+c19f, U+c1a5, U+c3d9, U+c464, U+c53d, U+c553, U+c570, U+c5cc, U+c633, U+c6a4, U+c7a3, U+c7a6, U+c886, U+c9d9-c9da, U+c9ec, U+ca0c, U+cc21, U+cd1b, U+cd78, U+cdc4, U+cef8, U+cfe4, U+d0a5, U+d0b5, U+d0ec, U+d15d, U+d188, U+d23c, U+d2ac, U+d729, U+d79b, U+ff01, U+ff08-ff09, U+ff5c;
}
/* [106] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.106.woff2) format('woff2');
  unicode-range: U+2039-203a, U+223c, U+25b3, U+25b7, U+25bd, U+25cf, U+266a, U+3002, U+300b, U+304b, U+3057, U+305f, U+306a-306b, U+307e, U+308a-308b, U+3093, U+30a2, U+30af, U+30b9, U+30c3, U+30c8, U+30e9-30eb, U+33a1, U+4e00, U+524d, U+5357, U+5b50, U+7121, U+884c, U+9751, U+ac94, U+aebe, U+aecd, U+af08, U+af41, U+af49, U+b010, U+b053, U+b109, U+b11b, U+b128, U+b154, U+b291, U+b2e6, U+b301, U+b385, U+b525, U+b5b4, U+b729, U+b72f, U+b738, U+b7ff, U+b837, U+b975, U+ba67, U+bb47, U+bc1f, U+bd90, U+bfd4, U+c27c, U+c324, U+c379, U+c3e0, U+c465, U+c53b, U+c58c, U+c610, U+c653, U+c6cd, U+c813, U+c82f, U+c999, U+c9e0, U+cac4, U+cad3, U+cbd4, U+cc10, U+cc22, U+ccb8, U+ccbc, U+cda5, U+ce84, U+cea3, U+cf67, U+cfe1, U+d241, U+d30d, U+d31c, U+d391, U+d401, U+d479, U+d5c9, U+d5db, U+d649, U+d6d4;
}
/* [107] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.107.woff2) format('woff2');
  unicode-range: U+b0, U+e9, U+2193, U+2462, U+260e, U+261e, U+300e-300f, U+3044, U+30a4, U+30fb-30fc, U+314d, U+5973, U+6545, U+6708, U+7537, U+ac89, U+ac9c, U+acc1, U+ad04, U+ad75, U+ad7d, U+ae45, U+ae61, U+af42, U+b0ab, U+b0af, U+b0b3, U+b12c, U+b194, U+b1a8, U+b220, U+b258, U+b284, U+b2ff, U+b315, U+b371, U+b3d4-b3d5, U+b460, U+b527, U+b534, U+b810, U+b818, U+b98e, U+ba55, U+bbac, U+bc0b, U+bc40, U+bca1, U+bccd, U+bd93, U+be54, U+be5a, U+bf08, U+bf50, U+bf55, U+bfdc, U+c0c0, U+c0d0, U+c0f4, U+c100, U+c11e, U+c170, U+c20d, U+c274, U+c290, U+c308, U+c369, U+c539, U+c587, U+c5ff, U+c6ec, U+c70c, U+c7ad, U+c7c8, U+c83c, U+c881, U+cb48, U+cc60, U+ce69, U+ce6b, U+ce75, U+cf04, U+cf08, U+cf55, U+cf70, U+cffc, U+d0b7, U+d1a8, U+d2c8, U+d384, U+d47c, U+d48b, U+d5dd, U+d5e8, U+d720, U+d759, U+f981;
}
/* [108] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.108.woff2) format('woff2');
  unicode-range: U+e0, U+e2, U+395, U+3b7, U+3ba, U+2460-2461, U+25a0, U+3010-3011, U+306e, U+30f3, U+314a, U+314c, U+5927, U+65b0, U+7e41, U+97d3, U+9ad4, U+ad49, U+ae0b, U+ae0d, U+ae43, U+ae5d, U+aecf, U+af3c, U+af64, U+afd4, U+b080, U+b084, U+b0c5, U+b10c, U+b1e8, U+b2ac, U+b36e, U+b451, U+b515, U+b540, U+b561, U+b6ab, U+b6b1, U+b72c, U+b730, U+b744, U+b800, U+b8ec, U+b8f0, U+b904, U+b968, U+b96d, U+b987, U+b9d9, U+bb36, U+bb49, U+bc2d, U+bc43, U+bcf6, U+bd89, U+be57, U+be61, U+bed4, U+c090, U+c130, U+c148, U+c19c, U+c2f9, U+c36c, U+c37c, U+c384, U+c3df, U+c575, U+c584, U+c660, U+c719, U+c816, U+ca4d, U+ca54, U+cabc, U+cb49, U+cc14, U+cff5, U+d004, U+d038, U+d0b4, U+d0d3, U+d0e0, U+d0ed, U+d131, U+d1b0, U+d31f, U+d33d, U+d3a0, U+d3ab, U+d514, U+d584, U+d6a1, U+d6cc, U+d749, U+d760, U+d799;
}
/* [109] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.109.woff2) format('woff2');
  unicode-range: U+24, U+60, U+3b9, U+3bb, U+3bd, U+2191, U+2606, U+300c-300d, U+3131, U+3134, U+3139, U+3141-3142, U+3148, U+3161, U+3163, U+321c, U+4eba, U+5317, U+ac31, U+ac77, U+ac9f, U+acb9, U+acf0-acf1, U+acfd, U+ad73, U+af3d, U+b00c, U+b04a, U+b057, U+b0c4, U+b188, U+b1cc, U+b214, U+b2db, U+b2ee, U+b304, U+b4ed, U+b518, U+b5bc, U+b625, U+b69c-b69d, U+b7ac, U+b801, U+b86c, U+b959, U+b95c, U+b985, U+ba48, U+bb58, U+bc0c, U+bc38, U+bc85, U+bc9a, U+bf40, U+c068, U+c0bd, U+c0cc, U+c12f, U+c149, U+c1e0, U+c22b, U+c22d, U+c250, U+c2fc, U+c300, U+c313, U+c370, U+c3d8, U+c557, U+c580, U+c5e3, U+c62e, U+c634, U+c6f0, U+c74d, U+c783, U+c78e, U+c796, U+c7bc, U+c92c, U+ca4c, U+cc1c, U+cc54, U+cc59, U+ce04, U+cf30, U+cfc4, U+d140, U+d321, U+d38c, U+d399, U+d54f, U+d587, U+d5d0, U+d6e8, U+d770;
}
/* [110] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.110.woff2) format('woff2');
  unicode-range: U+d7, U+ea, U+fc, U+2192, U+25bc, U+3000, U+3137, U+3145, U+315c, U+7f8e, U+ac13, U+ac71, U+ac90, U+acb8, U+ace7, U+ad7f, U+ae50, U+aef4, U+af34, U+afbc, U+b048, U+b09a, U+b0ad, U+b0bc, U+b113, U+b125, U+b141, U+b20c, U+b2d9, U+b2ed, U+b367, U+b369, U+b374, U+b3cb, U+b4ec, U+b611, U+b760, U+b81b, U+b834, U+b8b0, U+b8e1, U+b989, U+b9d1, U+b9e1, U+b9fa, U+ba4d, U+ba78, U+bb35, U+bb54, U+bbf9, U+bc11, U+bcb3, U+bd05, U+bd95, U+bdd4, U+be10, U+bed0, U+bf51, U+c0d8, U+c232, U+c2b7, U+c2eb, U+c378, U+c500, U+c52c, U+c549, U+c568, U+c598, U+c5c9, U+c61b, U+c639, U+c67c, U+c717, U+c78a, U+c80a, U+c90c-c90d, U+c950, U+c9e7, U+cbe4, U+cca9, U+cce4, U+cdb0, U+ce78, U+ce94, U+ce98, U+cf8c, U+d018, U+d034, U+d0f1, U+d1b1, U+d280, U+d2f8, U+d338, U+d380, U+d3b4, U+d610, U+d69f, U+d6fc, U+d758;
}
/* [111] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.111.woff2) format('woff2');
  unicode-range: U+e7, U+2022, U+203b, U+25c0, U+2605, U+2661, U+3147, U+318d, U+672c, U+8a9e, U+acaa, U+acbc, U+ad1c, U+ae4a, U+ae5c, U+b044, U+b054, U+b0c8-b0c9, U+b2a6, U+b2d0, U+b35c, U+b364, U+b428, U+b454, U+b465, U+b4b7, U+b4e3, U+b51c, U+b5a1, U+b784, U+b790, U+b7ab, U+b7f4, U+b82c, U+b835, U+b8e9, U+b8f8, U+b9d8, U+b9f9, U+ba5c, U+ba64, U+babd, U+bb18, U+bb3b, U+bbff, U+bc0d, U+bc45, U+bc97, U+bcbc, U+be45, U+be75, U+be7c, U+bfcc, U+c0b6, U+c0f7, U+c14b, U+c2b4, U+c30d, U+c4f8, U+c5bb, U+c5d1, U+c5e0, U+c5ee, U+c5fd, U+c606, U+c6c5, U+c6e0, U+c708, U+c81d, U+c820, U+c824, U+c878, U+c918, U+c96c, U+c9e4, U+c9f1, U+cc2e, U+cd09, U+cea1, U+cef5, U+cef7, U+cf64, U+cf69, U+cfe8, U+d035, U+d0ac, U+d230, U+d234, U+d2f4, U+d31d, U+d575, U+d578, U+d608, U+d614, U+d718, U+d751, U+d761, U+d78c, U+d790;
}
/* [112] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.112.woff2) format('woff2');
  unicode-range: U+2665, U+3160, U+4e2d, U+6587, U+65e5, U+ac12, U+ac14, U+ac16, U+ac81, U+ad34, U+ade0, U+ae54, U+aebc, U+af2c, U+afc0, U+afc8, U+b04c, U+b08c, U+b099, U+b0a9, U+b0ac, U+b0ae, U+b0b8, U+b123, U+b179, U+b2e5, U+b2f7, U+b4c0, U+b531, U+b538, U+b545, U+b550, U+b5a8, U+b6f0, U+b728, U+b73b, U+b7ad, U+b7ed, U+b809, U+b864, U+b86d, U+b871, U+b9bf, U+b9f5, U+ba40, U+ba4b, U+ba58, U+ba87, U+baac, U+bbc0, U+bc16, U+bc34, U+bd07, U+bd99, U+be59, U+bfd0, U+c058, U+c0e4, U+c0f5, U+c12d, U+c139, U+c228, U+c529, U+c5c7, U+c635, U+c637, U+c735, U+c77d, U+c787, U+c789, U+c8c4, U+c989, U+c98c, U+c9d0, U+c9d3, U+cc0c, U+cc99, U+cd0c, U+cd2c, U+cd98, U+cda4, U+ce59, U+ce60, U+ce6d, U+cea0, U+d0d0-d0d1, U+d0d5, U+d14d, U+d1a4, U+d29c, U+d2f1, U+d301, U+d39c, U+d3bc, U+d4e8, U+d540, U+d5ec, U+d640, U+d750;
}
/* [113] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.113.woff2) format('woff2');
  unicode-range: U+5e, U+25b2, U+25b6, U+314e, U+ac24, U+ace1, U+ace4, U+ae68, U+af2d, U+b0d0, U+b0e5, U+b150, U+b155, U+b193, U+b2c9, U+b2dd, U+b3c8, U+b3fc, U+b410, U+b458, U+b4dd, U+b5a0, U+b5a4, U+b5bb, U+b7b5, U+b838, U+b840, U+b86f, U+b8f9, U+b960, U+b9e5, U+bab8, U+bb50, U+bc1d, U+bc24-bc25, U+bca8, U+bcbd, U+bd04, U+bd10, U+bd24, U+be48, U+be5b, U+be68, U+c05c, U+c12c, U+c140, U+c15c, U+c168, U+c194, U+c219, U+c27d, U+c2a8, U+c2f1, U+c2f8, U+c368, U+c554-c555, U+c559, U+c564, U+c5d8, U+c5fc, U+c625, U+c65c, U+c6b1, U+c728, U+c794, U+c84c, U+c88c, U+c8e0, U+c8fd, U+c998, U+c9dd, U+cc0d, U+cc30, U+ceec, U+cf13, U+cf1c, U+cf5c, U+d050, U+d07c, U+d0a8, U+d134, U+d138, U+d154, U+d1f4, U+d2bc, U+d329, U+d32c, U+d3d0, U+d3f4, U+d3fc, U+d56b, U+d5cc, U+d600-d601, U+d639, U+d6c8, U+d754, U+d765;
}
/* [114] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.114.woff2) format('woff2');
  unicode-range: U+3c-3d, U+2026, U+24d2, U+314b, U+ac11, U+acf3, U+ad74, U+ad81, U+adf9, U+ae34, U+af43, U+afb8, U+b05d, U+b07c, U+b110, U+b118, U+b17c, U+b180, U+b18d, U+b192, U+b2cc, U+b355, U+b378, U+b4a4, U+b4ef, U+b78d, U+b799, U+b7a9, U+b7fd, U+b807, U+b80c, U+b839, U+b9b4, U+b9db, U+ba3c, U+bab0, U+bba4, U+bc94, U+be4c, U+c154, U+c1c4, U+c26c, U+c2ac, U+c2ed, U+c4f4, U+c55e, U+c561, U+c571, U+c5b5, U+c5c4, U+c654-c655, U+c695, U+c6e8, U+c6f9, U+c724, U+c751, U+c775, U+c7a0, U+c7c1, U+c874, U+c880, U+c9d5, U+c9f8, U+cabd, U+cc29, U+cc2c, U+cca8, U+ccab, U+ccd0, U+ce21, U+ce35, U+ce7c, U+ce90, U+cee8, U+cef4, U+cfe0, U+d070, U+d0b9, U+d0c1, U+d0c4, U+d0c8, U+d15c, U+d1a1, U+d2c0, U+d300, U+d314, U+d3ed, U+d478, U+d480, U+d48d, U+d508, U+d53d, U+d5e4, U+d611, U+d61c, U+d68d, U+d6a8, U+d798;
}
/* [115] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.115.woff2) format('woff2');
  unicode-range: U+23, U+25, U+5f, U+a9, U+ac08, U+ac78, U+aca8, U+acac, U+ace8, U+ad70, U+adc0, U+addc, U+b137, U+b140, U+b208, U+b290, U+b2f5, U+b3c5, U+b3cc, U+b420, U+b429, U+b529, U+b530, U+b77d, U+b79c, U+b7a8, U+b7c9, U+b7f0, U+b7fc, U+b828, U+b860, U+b9ad, U+b9c1, U+b9c9, U+b9dd-b9de, U+b9e8, U+ba38-ba39, U+babb, U+bc00, U+bc8c, U+bca0, U+bca4, U+bcd1, U+bcfc, U+bd09, U+bdf0, U+be60, U+c0ad, U+c0b4, U+c0bc, U+c190, U+c1fc, U+c220, U+c288, U+c2b9, U+c2f6, U+c528, U+c545, U+c558, U+c5bc, U+c5d4, U+c600, U+c644, U+c6c0, U+c6c3, U+c721, U+c798, U+c7a1, U+c811, U+c838, U+c871, U+c904, U+c990, U+c9dc, U+cc38, U+cc44, U+cca0, U+cd1d, U+cd95, U+cda9, U+ce5c, U+cf00, U+cf58, U+d150, U+d22c, U+d305, U+d328, U+d37c, U+d3f0, U+d551, U+d5a5, U+d5c8, U+d5d8, U+d63c, U+d64d, U+d669, U+d734, U+d76c;
}
/* [116] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.116.woff2) format('woff2');
  unicode-range: U+26, U+2b, U+3e, U+40, U+7e, U+ac01, U+ac19, U+ac1d, U+aca0, U+aca9, U+acb0, U+ad8c, U+ae09, U+ae38, U+ae40, U+aed8, U+b09c, U+b0a0, U+b108, U+b204, U+b298, U+b2d8, U+b2eb-b2ec, U+b2f4, U+b313, U+b358, U+b450, U+b4e0, U+b54c, U+b610, U+b780, U+b78c, U+b791, U+b8e8, U+b958, U+b974, U+b984, U+b9b0, U+b9bc-b9bd, U+b9ce, U+ba70, U+bbfc, U+bc0f, U+bc15, U+bc1b, U+bc31, U+bc95, U+bcc0, U+bcc4, U+bd81, U+bd88, U+c0c8, U+c11d, U+c13c, U+c158, U+c18d, U+c1a1, U+c21c, U+c4f0, U+c54a, U+c560, U+c5b8, U+c5c8, U+c5f4, U+c628, U+c62c, U+c678, U+c6cc, U+c808, U+c810, U+c885, U+c88b, U+c900, U+c988, U+c99d, U+c9c8, U+cc3d-cc3e, U+cc45, U+cd08, U+ce20, U+cee4, U+d074, U+d0a4, U+d0dd, U+d2b9, U+d3b8, U+d3c9, U+d488, U+d544, U+d559, U+d56d, U+d588, U+d615, U+d648, U+d655, U+d658, U+d65c;
}
/* [117] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.117.woff2) format('woff2');
  unicode-range: U+d, U+48, U+7c, U+ac10, U+ac15, U+ac74, U+ac80, U+ac83, U+acc4, U+ad11, U+ad50, U+ad6d, U+adfc, U+ae00, U+ae08, U+ae4c, U+b0a8, U+b124, U+b144, U+b178, U+b274, U+b2a5, U+b2e8, U+b2f9, U+b354, U+b370, U+b418, U+b41c, U+b4f1, U+b514, U+b798, U+b808, U+b824-b825, U+b8cc, U+b978, U+b9d0, U+b9e4, U+baa9, U+bb3c, U+bc18, U+bc1c, U+bc30, U+bc84, U+bcf5, U+bcf8, U+bd84, U+be0c, U+be14, U+c0b0, U+c0c9, U+c0dd, U+c124, U+c2dd, U+c2e4, U+c2ec, U+c54c, U+c57c-c57d, U+c591, U+c5c5-c5c6, U+c5ed, U+c608, U+c640, U+c6b8, U+c6d4, U+c784, U+c7ac, U+c800-c801, U+c9c1, U+c9d1, U+cc28, U+cc98, U+cc9c, U+ccad, U+cd5c, U+cd94, U+cd9c, U+cde8, U+ce68, U+cf54, U+d0dc, U+d14c, U+d1a0, U+d1b5, U+d2f0, U+d30c, U+d310, U+d398, U+d45c, U+d50c, U+d53c, U+d560, U+d568, U+d589, U+d604, U+d6c4, U+d788;
}
/* [118] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.118.woff2) format('woff2');
  unicode-range: U+39, U+49, U+4d-4e, U+a0, U+ac04, U+ac1c, U+ac70, U+ac8c, U+acbd, U+acf5, U+acfc, U+ad00, U+ad6c, U+adf8, U+b098, U+b0b4, U+b294, U+b2c8, U+b300, U+b3c4, U+b3d9, U+b4dc, U+b4e4, U+b77c, U+b7ec, U+b85d, U+b97c, U+b9c8, U+b9cc, U+ba54, U+ba74, U+ba85, U+baa8, U+bb34, U+bb38, U+bbf8, U+bc14, U+bc29, U+bc88, U+bcf4, U+bd80, U+be44, U+c0c1, U+c11c, U+c120, U+c131, U+c138, U+c18c, U+c218, U+c2b5, U+c2e0, U+c544, U+c548, U+c5b4, U+c5d0, U+c5ec, U+c5f0, U+c601, U+c624, U+c694, U+c6a9, U+c6b0, U+c6b4, U+c6d0, U+c704, U+c720, U+c73c, U+c740, U+c744, U+c74c, U+c758, U+c77c, U+c785, U+c788, U+c790-c791, U+c7a5, U+c804, U+c815, U+c81c, U+c870, U+c8fc, U+c911, U+c9c4, U+ccb4, U+ce58, U+ce74, U+d06c, U+d0c0, U+d130, U+d2b8, U+d3ec, U+d504, U+d55c, U+d569, U+d574, U+d638, U+d654, U+d68c;
}
/* [119] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgyeLGC5nwuDo-KBTUm6CryotyJROlrnQ.119.woff2) format('woff2');
  unicode-range: U+20-22, U+27-2a, U+2c-38, U+3a-3b, U+3f, U+41-47, U+4a-4c, U+4f-5d, U+61-7b, U+7d, U+a1, U+ab, U+ae, U+b7, U+bb, U+bf, U+2013-2014, U+201c-201d, U+2122, U+ac00, U+ace0, U+ae30, U+b2e4, U+b85c, U+b9ac, U+c0ac, U+c2a4, U+c2dc, U+c774, U+c778, U+c9c0, U+d558;
}
/* cyrillic */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgySLfg8U4h.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgySLzg8U4h.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgySL3g8U4h.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzztgySLPg8Q.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* [0] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.0.woff2) format('woff2');
  unicode-range: U+f9ca-fa0b, U+ff03-ff05, U+ff07, U+ff0a-ff0b, U+ff0d-ff19, U+ff1b, U+ff1d, U+ff20-ff5b, U+ff5d, U+ffe0-ffe3, U+ffe5-ffe6;
}
/* [1] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.1.woff2) format('woff2');
  unicode-range: U+f92f-f980, U+f982-f9c9;
}
/* [2] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.2.woff2) format('woff2');
  unicode-range: U+d723-d728, U+d72a-d733, U+d735-d748, U+d74a-d74f, U+d752-d753, U+d755-d757, U+d75a-d75f, U+d762-d764, U+d766-d768, U+d76a-d76b, U+d76d-d76f, U+d771-d787, U+d789-d78b, U+d78d-d78f, U+d791-d797, U+d79a, U+d79c, U+d79e-d7a3, U+f900-f909, U+f90b-f92e;
}
/* [3] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.3.woff2) format('woff2');
  unicode-range: U+d679-d68b, U+d68e-d69e, U+d6a0, U+d6a2-d6a7, U+d6a9-d6c3, U+d6c6-d6c7, U+d6c9-d6cb, U+d6cd-d6d3, U+d6d5-d6d6, U+d6d8-d6e3, U+d6e5-d6e7, U+d6e9-d6fb, U+d6fd-d717, U+d719-d71f, U+d721-d722;
}
/* [4] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.4.woff2) format('woff2');
  unicode-range: U+d5bc-d5c7, U+d5ca-d5cb, U+d5cd-d5cf, U+d5d1-d5d7, U+d5d9-d5da, U+d5dc, U+d5de-d5e3, U+d5e6-d5e7, U+d5e9-d5eb, U+d5ed-d5f6, U+d5f8, U+d5fa-d5ff, U+d602-d603, U+d605-d607, U+d609-d60f, U+d612-d613, U+d616-d61b, U+d61d-d637, U+d63a-d63b, U+d63d-d63f, U+d641-d647, U+d64a-d64c, U+d64e-d653, U+d656-d657, U+d659-d65b, U+d65d-d666, U+d668, U+d66a-d678;
}
/* [5] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.5.woff2) format('woff2');
  unicode-range: U+d507, U+d509-d50b, U+d50d-d513, U+d515-d53b, U+d53e-d53f, U+d541-d543, U+d545-d54c, U+d54e, U+d550, U+d552-d557, U+d55a-d55b, U+d55d-d55f, U+d561-d564, U+d566-d567, U+d56a, U+d56c, U+d56e-d573, U+d576-d577, U+d579-d583, U+d585-d586, U+d58a-d5a4, U+d5a6-d5bb;
}
/* [6] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.6.woff2) format('woff2');
  unicode-range: U+d464-d477, U+d47a-d47b, U+d47d-d47f, U+d481-d487, U+d489-d48a, U+d48c, U+d48e-d4e7, U+d4e9-d503, U+d505-d506;
}
/* [7] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.7.woff2) format('woff2');
  unicode-range: U+d3bf-d3c7, U+d3ca-d3cf, U+d3d1-d3eb, U+d3ee-d3ef, U+d3f1-d3f3, U+d3f5-d3fb, U+d3fd-d400, U+d402-d45b, U+d45d-d463;
}
/* [8] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.8.woff2) format('woff2');
  unicode-range: U+d2ff, U+d302-d304, U+d306-d30b, U+d30f, U+d311-d313, U+d315-d31b, U+d31e, U+d322-d324, U+d326-d327, U+d32a-d32b, U+d32d-d32f, U+d331-d337, U+d339-d33c, U+d33e-d37b, U+d37e-d37f, U+d381-d383, U+d385-d38b, U+d38e-d390, U+d392-d397, U+d39a-d39b, U+d39d-d39f, U+d3a1-d3a7, U+d3a9-d3aa, U+d3ac, U+d3ae-d3b3, U+d3b5-d3b7, U+d3b9-d3bb, U+d3bd-d3be;
}
/* [9] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.9.woff2) format('woff2');
  unicode-range: U+d257-d27f, U+d281-d29b, U+d29d-d29f, U+d2a1-d2ab, U+d2ad-d2b7, U+d2ba-d2bb, U+d2bd-d2bf, U+d2c1-d2c7, U+d2c9-d2ef, U+d2f2-d2f3, U+d2f5-d2f7, U+d2f9-d2fe;
}
/* [10] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.10.woff2) format('woff2');
  unicode-range: U+d1b4, U+d1b6-d1f3, U+d1f5-d22b, U+d22e-d22f, U+d231-d233, U+d235-d23b, U+d23d-d240, U+d242-d256;
}
/* [11] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.11.woff2) format('woff2');
  unicode-range: U+d105-d12f, U+d132-d133, U+d135-d137, U+d139-d13f, U+d141-d142, U+d144, U+d146-d14b, U+d14e-d14f, U+d151-d153, U+d155-d15b, U+d15e-d187, U+d189-d19f, U+d1a2-d1a3, U+d1a5-d1a7, U+d1a9-d1af, U+d1b2-d1b3;
}
/* [12] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.12.woff2) format('woff2');
  unicode-range: U+d04b-d04f, U+d051-d057, U+d059-d06b, U+d06d-d06f, U+d071-d073, U+d075-d07b, U+d07e-d0a3, U+d0a6-d0a7, U+d0a9-d0ab, U+d0ad-d0b3, U+d0b6, U+d0b8, U+d0ba-d0bf, U+d0c2-d0c3, U+d0c5-d0c7, U+d0c9-d0cf, U+d0d2, U+d0d6-d0db, U+d0de-d0df, U+d0e1-d0e3, U+d0e5-d0eb, U+d0ee-d0f0, U+d0f2-d104;
}
/* [13] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.13.woff2) format('woff2');
  unicode-range: U+cfa2-cfc3, U+cfc5-cfdf, U+cfe2-cfe3, U+cfe5-cfe7, U+cfe9-cff4, U+cff6-cffb, U+cffd-cfff, U+d001-d003, U+d005-d017, U+d019-d033, U+d036-d037, U+d039-d03b, U+d03d-d04a;
}
/* [14] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.14.woff2) format('woff2');
  unicode-range: U+cef0-cef3, U+cef6, U+cef9-ceff, U+cf01-cf03, U+cf05-cf07, U+cf09-cf0f, U+cf11-cf12, U+cf14-cf1b, U+cf1d-cf1f, U+cf21-cf2f, U+cf31-cf53, U+cf56-cf57, U+cf59-cf5b, U+cf5d-cf63, U+cf66, U+cf68, U+cf6a-cf6f, U+cf71-cf84, U+cf86-cf8b, U+cf8d-cfa1;
}
/* [15] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.15.woff2) format('woff2');
  unicode-range: U+ce3c-ce57, U+ce5a-ce5b, U+ce5d-ce5f, U+ce61-ce67, U+ce6a, U+ce6c, U+ce6e-ce73, U+ce76-ce77, U+ce79-ce7b, U+ce7d-ce83, U+ce85-ce88, U+ce8a-ce8f, U+ce91-ce93, U+ce95-ce97, U+ce99-ce9f, U+cea2, U+cea4-ceab, U+cead-cee3, U+cee6-cee7, U+cee9-ceeb, U+ceed-ceef;
}
/* [16] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.16.woff2) format('woff2');
  unicode-range: U+cd92-cd93, U+cd96-cd97, U+cd99-cd9b, U+cd9d-cda3, U+cda6-cda8, U+cdaa-cdaf, U+cdb1-cdc3, U+cdc5-cdcb, U+cdcd-cde7, U+cde9-ce03, U+ce05-ce1f, U+ce22-ce34, U+ce36-ce3b;
}
/* [17] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.17.woff2) format('woff2');
  unicode-range: U+ccef-cd07, U+cd0a-cd0b, U+cd0d-cd1a, U+cd1c, U+cd1e-cd2b, U+cd2d-cd5b, U+cd5d-cd77, U+cd79-cd91;
}
/* [18] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.18.woff2) format('woff2');
  unicode-range: U+cc3f-cc43, U+cc46-cc47, U+cc49-cc4b, U+cc4d-cc53, U+cc55-cc58, U+cc5a-cc5f, U+cc61-cc97, U+cc9a-cc9b, U+cc9d-cc9f, U+cca1-cca7, U+ccaa, U+ccac, U+ccae-ccb3, U+ccb6-ccb7, U+ccb9-ccbb, U+ccbd-cccf, U+ccd1-cce3, U+cce5-ccee;
}
/* [19] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.19.woff2) format('woff2');
  unicode-range: U+cb91-cbd3, U+cbd5-cbe3, U+cbe5-cc0b, U+cc0e-cc0f, U+cc11-cc13, U+cc15-cc1b, U+cc1d-cc20, U+cc23-cc27, U+cc2a-cc2b, U+cc2d, U+cc2f, U+cc31-cc37, U+cc3a, U+cc3c;
}
/* [20] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.20.woff2) format('woff2');
  unicode-range: U+caf4-cb47, U+cb4a-cb90;
}
/* [21] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.21.woff2) format('woff2');
  unicode-range: U+ca4a-ca4b, U+ca4e-ca4f, U+ca51-ca53, U+ca55-ca5b, U+ca5d-ca60, U+ca62-ca83, U+ca85-cabb, U+cabe-cabf, U+cac1-cac3, U+cac5-cacb, U+cacd-cad0, U+cad2, U+cad4-cad8, U+cada-caf3;
}
/* [22] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.22.woff2) format('woff2');
  unicode-range: U+c996-c997, U+c99a-c99c, U+c99e-c9bf, U+c9c2-c9c3, U+c9c5-c9c7, U+c9c9-c9cf, U+c9d2, U+c9d4, U+c9d7-c9d8, U+c9db, U+c9de-c9df, U+c9e1-c9e3, U+c9e5-c9e6, U+c9e8-c9eb, U+c9ee-c9f0, U+c9f2-c9f7, U+c9f9-ca0b, U+ca0d-ca28, U+ca2a-ca49;
}
/* [23] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.23.woff2) format('woff2');
  unicode-range: U+c8e9-c8f4, U+c8f6-c8fb, U+c8fe-c8ff, U+c901-c903, U+c905-c90b, U+c90e-c910, U+c912-c917, U+c919-c92b, U+c92d-c94f, U+c951-c953, U+c955-c96b, U+c96d-c973, U+c975-c987, U+c98a-c98b, U+c98d-c98f, U+c991-c995;
}
/* [24] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.24.woff2) format('woff2');
  unicode-range: U+c841-c84b, U+c84d-c86f, U+c872-c873, U+c875-c877, U+c879-c87f, U+c882-c884, U+c887-c88a, U+c88d-c8c3, U+c8c5-c8df, U+c8e1-c8e8;
}
/* [25] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.25.woff2) format('woff2');
  unicode-range: U+c779-c77b, U+c77e-c782, U+c786, U+c78b, U+c78d, U+c78f, U+c792-c793, U+c795, U+c797, U+c799-c79f, U+c7a2, U+c7a7-c7ab, U+c7ae-c7bb, U+c7bd-c7c0, U+c7c2-c7c7, U+c7c9-c7dc, U+c7de-c7ff, U+c802-c803, U+c805-c807, U+c809, U+c80b-c80f, U+c812, U+c814, U+c817-c81b, U+c81e-c81f, U+c821-c823, U+c825-c82e, U+c830-c837, U+c839-c83b, U+c83d-c840;
}
/* [26] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.26.woff2) format('woff2');
  unicode-range: U+c6bb-c6bf, U+c6c2, U+c6c4, U+c6c6-c6cb, U+c6ce-c6cf, U+c6d1-c6d3, U+c6d5-c6db, U+c6dd-c6df, U+c6e1-c6e7, U+c6e9-c6eb, U+c6ed-c6ef, U+c6f1-c6f8, U+c6fa-c703, U+c705-c707, U+c709-c70b, U+c70d-c716, U+c718, U+c71a-c71f, U+c722-c723, U+c725-c727, U+c729-c734, U+c736-c73b, U+c73e-c73f, U+c741-c743, U+c745-c74b, U+c74e-c750, U+c752-c757, U+c759-c773, U+c776-c777;
}
/* [27] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.27.woff2) format('woff2');
  unicode-range: U+c5f5-c5fb, U+c5fe, U+c602-c605, U+c607, U+c609-c60f, U+c611-c61a, U+c61c-c623, U+c626-c627, U+c629-c62b, U+c62d, U+c62f-c632, U+c636, U+c638, U+c63a-c63f, U+c642-c643, U+c645-c647, U+c649-c652, U+c656-c65b, U+c65d-c65f, U+c661-c663, U+c665-c677, U+c679-c67b, U+c67d-c693, U+c696-c697, U+c699-c69b, U+c69d-c6a3, U+c6a6, U+c6a8, U+c6aa-c6af, U+c6b2-c6b3, U+c6b5-c6b7, U+c6b9-c6ba;
}
/* [28] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.28.woff2) format('woff2');
  unicode-range: U+c517-c527, U+c52a-c52b, U+c52d-c52f, U+c531-c538, U+c53a, U+c53c, U+c53e-c543, U+c546-c547, U+c54b, U+c54d-c552, U+c556, U+c55a-c55b, U+c55d, U+c55f, U+c562-c563, U+c565-c567, U+c569-c56f, U+c572, U+c574, U+c576-c57b, U+c57e-c57f, U+c581-c583, U+c585-c586, U+c588-c58b, U+c58e, U+c590, U+c592-c596, U+c599-c5b3, U+c5b6-c5b7, U+c5ba, U+c5be-c5c3, U+c5ca-c5cb, U+c5cd, U+c5cf, U+c5d2-c5d3, U+c5d5-c5d7, U+c5d9-c5df, U+c5e1-c5e2, U+c5e4, U+c5e6-c5eb, U+c5ef, U+c5f1-c5f3;
}
/* [29] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.29.woff2) format('woff2');
  unicode-range: U+c475-c4ef, U+c4f2-c4f3, U+c4f5-c4f7, U+c4f9-c4ff, U+c502-c50b, U+c50d-c516;
}
/* [30] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.30.woff2) format('woff2');
  unicode-range: U+c3d0-c3d7, U+c3da-c3db, U+c3dd-c3de, U+c3e1-c3ec, U+c3ee-c3f3, U+c3f5-c42b, U+c42d-c463, U+c466-c474;
}
/* [31] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.31.woff2) format('woff2');
  unicode-range: U+c32b-c367, U+c36a-c36b, U+c36d-c36f, U+c371-c377, U+c37a-c37b, U+c37e-c383, U+c385-c387, U+c389-c3cf;
}
/* [32] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.32.woff2) format('woff2');
  unicode-range: U+c26a-c26b, U+c26d-c26f, U+c271-c273, U+c275-c27b, U+c27e-c287, U+c289-c28f, U+c291-c297, U+c299-c29a, U+c29c-c2a3, U+c2a5-c2a7, U+c2a9-c2ab, U+c2ad-c2b3, U+c2b6, U+c2b8, U+c2ba-c2bb, U+c2bd-c2db, U+c2de-c2df, U+c2e1-c2e2, U+c2e5-c2ea, U+c2ee, U+c2f0, U+c2f2-c2f5, U+c2f7, U+c2fa-c2fb, U+c2fd-c2ff, U+c301-c307, U+c309-c30c, U+c30e-c312, U+c315-c323, U+c325-c328, U+c32a;
}
/* [33] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.33.woff2) format('woff2');
  unicode-range: U+c1bc-c1c3, U+c1c5-c1df, U+c1e1-c1fb, U+c1fd-c203, U+c205-c20c, U+c20e, U+c210-c217, U+c21a-c21b, U+c21d-c21e, U+c221-c227, U+c229-c22a, U+c22c, U+c22e, U+c230, U+c233-c24f, U+c251-c257, U+c259-c269;
}
/* [34] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.34.woff2) format('woff2');
  unicode-range: U+c101-c11b, U+c11f, U+c121-c123, U+c125-c12b, U+c12e, U+c132-c137, U+c13a-c13b, U+c13d-c13f, U+c141-c147, U+c14a, U+c14c-c153, U+c155-c157, U+c159-c15b, U+c15d-c166, U+c169-c16f, U+c171-c177, U+c179-c18b, U+c18e-c18f, U+c191-c193, U+c195-c19b, U+c19d-c19e, U+c1a0, U+c1a2-c1a4, U+c1a6-c1bb;
}
/* [35] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.35.woff2) format('woff2');
  unicode-range: U+c049-c057, U+c059-c05b, U+c05d-c05f, U+c061-c067, U+c069-c08f, U+c091-c0ab, U+c0ae-c0af, U+c0b1-c0b3, U+c0b5, U+c0b7-c0bb, U+c0be, U+c0c2-c0c7, U+c0ca-c0cb, U+c0cd-c0cf, U+c0d1-c0d7, U+c0d9-c0da, U+c0dc, U+c0de-c0e3, U+c0e5-c0eb, U+c0ed-c0f3, U+c0f6, U+c0f8, U+c0fa-c0ff;
}
/* [36] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.36.woff2) format('woff2');
  unicode-range: U+bfa7-bfaf, U+bfb1-bfc4, U+bfc6-bfcb, U+bfce-bfcf, U+bfd1-bfd3, U+bfd5-bfdb, U+bfdd-c048;
}
/* [37] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.37.woff2) format('woff2');
  unicode-range: U+bf07, U+bf09-bf3f, U+bf41-bf4f, U+bf52-bf54, U+bf56-bfa6;
}
/* [38] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.38.woff2) format('woff2');
  unicode-range: U+be56, U+be58, U+be5c-be5f, U+be62-be63, U+be65-be67, U+be69-be74, U+be76-be7b, U+be7e-be7f, U+be81-be8e, U+be90, U+be92-bea7, U+bea9-becf, U+bed2-bed3, U+bed5-bed6, U+bed9-bee3, U+bee6-bf06;
}
/* [39] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.39.woff2) format('woff2');
  unicode-range: U+bdb0-bdd3, U+bdd5-bdef, U+bdf1-be0b, U+be0d-be0f, U+be11-be13, U+be15-be43, U+be46-be47, U+be49-be4b, U+be4d-be53;
}
/* [40] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.40.woff2) format('woff2');
  unicode-range: U+bd03, U+bd06, U+bd08, U+bd0a-bd0f, U+bd11-bd22, U+bd25-bd47, U+bd49-bd58, U+bd5a-bd7f, U+bd82-bd83, U+bd85-bd87, U+bd8a-bd8f, U+bd91-bd92, U+bd94, U+bd96-bd98, U+bd9a-bdaf;
}
/* [41] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.41.woff2) format('woff2');
  unicode-range: U+bc4e-bc83, U+bc86-bc87, U+bc89-bc8b, U+bc8d-bc93, U+bc96, U+bc98, U+bc9b-bc9f, U+bca2-bca3, U+bca5-bca7, U+bca9-bcb2, U+bcb4-bcbb, U+bcbe-bcbf, U+bcc1-bcc3, U+bcc5-bccc, U+bcce-bcd0, U+bcd2-bcd4, U+bcd6-bcf3, U+bcf7, U+bcf9-bcfb, U+bcfd-bd02;
}
/* [42] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.42.woff2) format('woff2');
  unicode-range: U+bb90-bba3, U+bba5-bbab, U+bbad-bbbf, U+bbc1-bbf7, U+bbfa-bbfb, U+bbfd-bbfe, U+bc01-bc07, U+bc09-bc0a, U+bc0e, U+bc10, U+bc12-bc13, U+bc17, U+bc19-bc1a, U+bc1e, U+bc20-bc23, U+bc26, U+bc28, U+bc2a-bc2c, U+bc2e-bc2f, U+bc32-bc33, U+bc35-bc37, U+bc39-bc3f, U+bc41-bc42, U+bc44, U+bc46-bc48, U+bc4a-bc4d;
}
/* [43] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.43.woff2) format('woff2');
  unicode-range: U+bae6-bafb, U+bafd-bb17, U+bb19-bb33, U+bb37, U+bb39-bb3a, U+bb3d-bb43, U+bb45-bb46, U+bb48, U+bb4a-bb4f, U+bb51-bb53, U+bb55-bb57, U+bb59-bb62, U+bb64-bb8f;
}
/* [44] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.44.woff2) format('woff2');
  unicode-range: U+ba30-ba37, U+ba3a-ba3b, U+ba3d-ba3f, U+ba41-ba47, U+ba49-ba4a, U+ba4c, U+ba4e-ba53, U+ba56-ba57, U+ba59-ba5b, U+ba5d-ba63, U+ba65-ba66, U+ba68-ba6f, U+ba71-ba73, U+ba75-ba77, U+ba79-ba84, U+ba86, U+ba88-baa7, U+baaa, U+baad-baaf, U+bab1-bab7, U+baba, U+babc, U+babe-bae5;
}
/* [45] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.45.woff2) format('woff2');
  unicode-range: U+b96e-b973, U+b976-b977, U+b979-b97b, U+b97d-b983, U+b986, U+b988, U+b98a-b98d, U+b98f-b9ab, U+b9ae-b9af, U+b9b1-b9b3, U+b9b5-b9bb, U+b9be, U+b9c0, U+b9c2-b9c7, U+b9ca-b9cb, U+b9cd, U+b9d2-b9d7, U+b9da, U+b9dc, U+b9df-b9e0, U+b9e2, U+b9e6-b9e7, U+b9e9-b9f3, U+b9f6, U+b9f8, U+b9fb-ba2f;
}
/* [46] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.46.woff2) format('woff2');
  unicode-range: U+b8bf-b8cb, U+b8cd-b8e0, U+b8e2-b8e7, U+b8ea-b8eb, U+b8ed-b8ef, U+b8f1-b8f7, U+b8fa, U+b8fc, U+b8fe-b903, U+b905-b917, U+b919-b91f, U+b921-b93b, U+b93d-b957, U+b95a-b95b, U+b95d-b95f, U+b961-b967, U+b969-b96c;
}
/* [47] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.47.woff2) format('woff2');
  unicode-range: U+b80d-b80f, U+b811-b817, U+b81a, U+b81c-b823, U+b826-b827, U+b829-b82b, U+b82d-b833, U+b836, U+b83a-b83f, U+b841-b85b, U+b85e-b85f, U+b861-b863, U+b865-b86b, U+b86e, U+b870, U+b872-b8af, U+b8b1-b8be;
}
/* [48] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.48.woff2) format('woff2');
  unicode-range: U+b74d-b75f, U+b761-b763, U+b765-b774, U+b776-b77b, U+b77e-b77f, U+b781-b783, U+b785-b78b, U+b78e, U+b792-b796, U+b79a-b79b, U+b79d-b7a7, U+b7aa, U+b7ae-b7b3, U+b7b6-b7c8, U+b7ca-b7eb, U+b7ee-b7ef, U+b7f1-b7f3, U+b7f5-b7fb, U+b7fe, U+b802-b806, U+b80a-b80b;
}
/* [49] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.49.woff2) format('woff2');
  unicode-range: U+b6a7-b6aa, U+b6ac-b6b0, U+b6b2-b6ef, U+b6f1-b727, U+b72a-b72b, U+b72d-b72e, U+b731-b737, U+b739-b73a, U+b73c-b743, U+b745-b74c;
}
/* [50] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.50.woff2) format('woff2');
  unicode-range: U+b605-b60f, U+b612-b617, U+b619-b624, U+b626-b69b, U+b69e-b6a3, U+b6a5-b6a6;
}
/* [51] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.51.woff2) format('woff2');
  unicode-range: U+b55f, U+b562-b583, U+b585-b59f, U+b5a2-b5a3, U+b5a5-b5a7, U+b5a9-b5b2, U+b5b5-b5ba, U+b5bd-b604;
}
/* [52] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.52.woff2) format('woff2');
  unicode-range: U+b4a5-b4b6, U+b4b8-b4bf, U+b4c1-b4c7, U+b4c9-b4db, U+b4de-b4df, U+b4e1-b4e2, U+b4e5-b4eb, U+b4ee, U+b4f0, U+b4f2-b513, U+b516-b517, U+b519-b51a, U+b51d-b523, U+b526, U+b528, U+b52b-b52f, U+b532-b533, U+b535-b537, U+b539-b53f, U+b541-b544, U+b546-b54b, U+b54d-b54f, U+b551-b55b, U+b55d-b55e;
}
/* [53] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.53.woff2) format('woff2');
  unicode-range: U+b3f8-b3fb, U+b3fd-b40f, U+b411-b417, U+b419-b41b, U+b41d-b41f, U+b421-b427, U+b42a-b42b, U+b42d-b44f, U+b452-b453, U+b455-b457, U+b459-b45f, U+b462-b464, U+b466-b46b, U+b46d-b47f, U+b481-b4a3;
}
/* [54] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.54.woff2) format('woff2');
  unicode-range: U+b342-b353, U+b356-b357, U+b359-b35b, U+b35d-b35e, U+b360-b363, U+b366, U+b368, U+b36a-b36d, U+b36f, U+b372-b373, U+b375-b377, U+b379-b37f, U+b381-b382, U+b384, U+b386-b38b, U+b38d-b3c3, U+b3c6-b3c7, U+b3c9-b3ca, U+b3cd-b3d3, U+b3d6, U+b3d8, U+b3da-b3f7;
}
/* [55] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.55.woff2) format('woff2');
  unicode-range: U+b27c-b283, U+b285-b28f, U+b292-b293, U+b295-b297, U+b29a-b29f, U+b2a1-b2a4, U+b2a7-b2a9, U+b2ab, U+b2ad-b2c7, U+b2ca-b2cb, U+b2cd-b2cf, U+b2d1-b2d7, U+b2da, U+b2dc, U+b2de-b2e3, U+b2e7, U+b2e9-b2ea, U+b2ef-b2f3, U+b2f6, U+b2f8, U+b2fa-b2fb, U+b2fd-b2fe, U+b302-b303, U+b305-b307, U+b309-b30f, U+b312, U+b316-b31b, U+b31d-b341;
}
/* [56] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.56.woff2) format('woff2');
  unicode-range: U+b1d6-b1e7, U+b1e9-b1fc, U+b1fe-b203, U+b206-b207, U+b209-b20b, U+b20d-b213, U+b216-b21f, U+b221-b257, U+b259-b273, U+b275-b27b;
}
/* [57] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.57.woff2) format('woff2');
  unicode-range: U+b120-b122, U+b126-b127, U+b129-b12b, U+b12d-b133, U+b136, U+b138, U+b13a-b13f, U+b142-b143, U+b145-b14f, U+b151-b153, U+b156-b157, U+b159-b177, U+b17a-b17b, U+b17d-b17f, U+b181-b187, U+b189-b18c, U+b18e-b191, U+b195-b1a7, U+b1a9-b1cb, U+b1cd-b1d5;
}
/* [58] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.58.woff2) format('woff2');
  unicode-range: U+b05f-b07b, U+b07e-b07f, U+b081-b083, U+b085-b08b, U+b08d-b097, U+b09b, U+b09d-b09f, U+b0a2-b0a7, U+b0aa, U+b0b0, U+b0b2, U+b0b6-b0b7, U+b0b9-b0bb, U+b0bd-b0c3, U+b0c6-b0c7, U+b0ca-b0cf, U+b0d1-b0df, U+b0e1-b0e4, U+b0e6-b107, U+b10a-b10b, U+b10d-b10f, U+b111-b112, U+b114-b117, U+b119-b11a, U+b11c-b11f;
}
/* [59] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.59.woff2) format('woff2');
  unicode-range: U+afac-afb7, U+afba-afbb, U+afbd-afbf, U+afc1-afc6, U+afca-afcc, U+afce-afd3, U+afd5-afe7, U+afe9-afef, U+aff1-b00b, U+b00d-b00f, U+b011-b013, U+b015-b01b, U+b01d-b027, U+b029-b043, U+b045-b047, U+b049, U+b04b, U+b04d-b052, U+b055-b056, U+b058-b05c, U+b05e;
}
/* [60] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.60.woff2) format('woff2');
  unicode-range: U+af03-af07, U+af09-af2b, U+af2e-af33, U+af35-af3b, U+af3e-af40, U+af44-af47, U+af4a-af5c, U+af5e-af63, U+af65-af7f, U+af81-afab;
}
/* [61] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.61.woff2) format('woff2');
  unicode-range: U+ae56-ae5b, U+ae5e-ae60, U+ae62-ae64, U+ae66-ae67, U+ae69-ae6b, U+ae6d-ae83, U+ae85-aebb, U+aebf, U+aec1-aec3, U+aec5-aecb, U+aece, U+aed0, U+aed2-aed7, U+aed9-aef3, U+aef5-af02;
}
/* [62] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.62.woff2) format('woff2');
  unicode-range: U+ad9c-ada3, U+ada5-adbf, U+adc1-adc3, U+adc5-adc7, U+adc9-add2, U+add4-addb, U+addd-addf, U+ade1-ade3, U+ade5-adf7, U+adfa-adfb, U+adfd-adff, U+ae02-ae07, U+ae0a, U+ae0c, U+ae0e-ae13, U+ae15-ae2f, U+ae31-ae33, U+ae35-ae37, U+ae39-ae3f, U+ae42, U+ae44, U+ae46-ae49, U+ae4b, U+ae4f, U+ae51-ae53, U+ae55;
}
/* [63] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.63.woff2) format('woff2');
  unicode-range: U+ace2-ace3, U+ace5-ace6, U+ace9-acef, U+acf2, U+acf4, U+acf7-acfb, U+acfe-acff, U+ad01-ad03, U+ad05-ad0b, U+ad0d-ad10, U+ad12-ad1b, U+ad1d-ad33, U+ad35-ad48, U+ad4a-ad4f, U+ad51-ad6b, U+ad6e-ad6f, U+ad71-ad72, U+ad77-ad7c, U+ad7e, U+ad80, U+ad82-ad87, U+ad89-ad8b, U+ad8d-ad8f, U+ad91-ad9b;
}
/* [64] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.64.woff2) format('woff2');
  unicode-range: U+ac25-ac2c, U+ac2e, U+ac30, U+ac32-ac37, U+ac39-ac3f, U+ac41-ac4c, U+ac4e-ac6f, U+ac72-ac73, U+ac75-ac76, U+ac79-ac7f, U+ac82, U+ac84-ac88, U+ac8a-ac8b, U+ac8d-ac8f, U+ac91-ac93, U+ac95-ac9b, U+ac9d-ac9e, U+aca1-aca7, U+acab, U+acad-acaf, U+acb1-acb7, U+acba-acbb, U+acbe-acc0, U+acc2-acc3, U+acc5-acdf;
}
/* [65] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.65.woff2) format('woff2');
  unicode-range: U+99df, U+99ed, U+99f1, U+99ff, U+9a01, U+9a08, U+9a0e-9a0f, U+9a19, U+9a2b, U+9a30, U+9a36-9a37, U+9a40, U+9a43, U+9a45, U+9a4d, U+9a55, U+9a57, U+9a5a-9a5b, U+9a5f, U+9a62, U+9a65, U+9a69-9a6a, U+9aa8, U+9ab8, U+9ad3, U+9ae5, U+9aee, U+9b1a, U+9b27, U+9b2a, U+9b31, U+9b3c, U+9b41-9b45, U+9b4f, U+9b54, U+9b5a, U+9b6f, U+9b8e, U+9b91, U+9b9f, U+9bab, U+9bae, U+9bc9, U+9bd6, U+9be4, U+9be8, U+9c0d, U+9c10, U+9c12, U+9c15, U+9c25, U+9c32, U+9c3b, U+9c47, U+9c49, U+9c57, U+9ce5, U+9ce7, U+9ce9, U+9cf3-9cf4, U+9cf6, U+9d09, U+9d1b, U+9d26, U+9d28, U+9d3b, U+9d51, U+9d5d, U+9d60-9d61, U+9d6c, U+9d72, U+9da9, U+9daf, U+9db4, U+9dc4, U+9dd7, U+9df2, U+9df8-9dfa, U+9e1a, U+9e1e, U+9e75, U+9e79, U+9e7d, U+9e7f, U+9e92-9e93, U+9e97, U+9e9d, U+9e9f, U+9ea5, U+9eb4-9eb5, U+9ebb, U+9ebe, U+9ec3, U+9ecd-9ece, U+9ed4, U+9ed8, U+9edb-9edc, U+9ede, U+9ee8, U+9ef4, U+9f07-9f08, U+9f0e, U+9f13, U+9f20, U+9f3b, U+9f4a-9f4b, U+9f4e, U+9f52, U+9f5f, U+9f61, U+9f67, U+9f6a, U+9f6c, U+9f77, U+9f8d, U+9f90, U+9f95, U+9f9c, U+ac02-ac03, U+ac05-ac06, U+ac09-ac0f, U+ac17-ac18, U+ac1b, U+ac1e-ac1f, U+ac21-ac23;
}
/* [66] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.66.woff2) format('woff2');
  unicode-range: U+96a7-96a8, U+96aa, U+96b1, U+96b7, U+96bb, U+96c0-96c1, U+96c4-96c5, U+96c7, U+96c9, U+96cb-96ce, U+96d5-96d6, U+96d9, U+96db-96dc, U+96e2-96e3, U+96e8-96ea, U+96ef-96f0, U+96f2, U+96f6-96f7, U+96f9, U+96fb, U+9700, U+9706-9707, U+9711, U+9713, U+9716, U+9719, U+971c, U+971e, U+9727, U+9730, U+9732, U+9739, U+973d, U+9742, U+9744, U+9748, U+9756, U+975c, U+9761, U+9769, U+976d, U+9774, U+9777, U+977a, U+978b, U+978d, U+978f, U+97a0, U+97a8, U+97ab, U+97ad, U+97c6, U+97cb, U+97dc, U+97f6, U+97fb, U+97ff-9803, U+9805-9806, U+9808, U+980a, U+980c, U+9810-9813, U+9817-9818, U+982d, U+9830, U+9838-9839, U+983b, U+9846, U+984c-984e, U+9854, U+9858, U+985a, U+985e, U+9865, U+9867, U+986b, U+986f, U+98af, U+98b1, U+98c4, U+98c7, U+98db-98dc, U+98e1-98e2, U+98ed-98ef, U+98f4, U+98fc-98fe, U+9903, U+9909-990a, U+990c, U+9910, U+9913, U+9918, U+991e, U+9920, U+9928, U+9945, U+9949, U+994b-994d, U+9951-9952, U+9954, U+9957, U+9996, U+999d, U+99a5, U+99a8, U+99ac-99ae, U+99b1, U+99b3-99b4, U+99b9, U+99c1, U+99d0-99d2, U+99d5, U+99d9, U+99dd;
}
/* [67] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.67.woff2) format('woff2');
  unicode-range: U+920d, U+9210-9212, U+9217, U+921e, U+9234, U+923a, U+923f-9240, U+9245, U+9249, U+9257, U+925b, U+925e, U+9262, U+9264-9266, U+9283, U+9285, U+9291, U+9293, U+9296, U+9298, U+929c, U+92b3, U+92b6-92b7, U+92b9, U+92cc, U+92cf, U+92d2, U+92e4, U+92ea, U+92f8, U+92fc, U+9304, U+9310, U+9318, U+931a, U+931e-9322, U+9324, U+9326, U+9328, U+932b, U+932e-932f, U+9348, U+934a-934b, U+934d, U+9354, U+935b, U+936e, U+9375, U+937c, U+937e, U+938c, U+9394, U+9396, U+939a, U+93a3, U+93a7, U+93ac-93ad, U+93b0, U+93c3, U+93d1, U+93de, U+93e1, U+93e4, U+93f6, U+9404, U+9418, U+9425, U+942b, U+9435, U+9438, U+9444, U+9451-9452, U+945b, U+947d, U+947f, U+9583, U+9589, U+958f, U+9591-9592, U+9594, U+9598, U+95a3-95a5, U+95a8, U+95ad, U+95b1, U+95bb-95bc, U+95c7, U+95ca, U+95d4-95d6, U+95dc, U+95e1-95e2, U+961c, U+9621, U+962a, U+962e, U+9632, U+963b, U+963f-9640, U+9642, U+9644, U+964b-964d, U+9650, U+965b-965f, U+9662-9664, U+966a, U+9670, U+9673, U+9675-9678, U+967d, U+9685-9686, U+968a-968b, U+968d-968e, U+9694-9695, U+9698-9699, U+969b-969c, U+96a3;
}
/* [68] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.68.woff2) format('woff2');
  unicode-range: U+8fa8, U+8fad, U+8faf-8fb2, U+8fc2, U+8fc5, U+8fce, U+8fd4, U+8fe6, U+8fea-8feb, U+8fed, U+8ff0, U+8ff2, U+8ff7, U+8ff9, U+8ffd, U+9000-9003, U+9005-9006, U+9008, U+900b, U+900d, U+900f-9011, U+9014-9015, U+9017, U+9019, U+901d-9023, U+902e, U+9031-9032, U+9035, U+9038, U+903c, U+903e, U+9041-9042, U+9047, U+904a-904b, U+904d-904e, U+9050-9051, U+9054-9055, U+9059, U+905c-905e, U+9060-9061, U+9063, U+9069, U+906d-906f, U+9072, U+9075, U+9077-9078, U+907a, U+907c-907d, U+907f-9084, U+9087-9088, U+908a, U+908f, U+9091, U+9095, U+9099, U+90a2-90a3, U+90a6, U+90a8, U+90aa, U+90af-90b1, U+90b5, U+90b8, U+90c1, U+90ca, U+90de, U+90e1, U+90ed, U+90f5, U+9102, U+9112, U+9115, U+9119, U+9127, U+912d, U+9132, U+9149-914e, U+9152, U+9162, U+9169-916a, U+916c, U+9175, U+9177-9178, U+9187, U+9189, U+918b, U+918d, U+9192, U+919c, U+91ab-91ac, U+91ae-91af, U+91b1, U+91b4-91b5, U+91c0, U+91c7, U+91c9, U+91cb, U+91cf-91d0, U+91d7-91d8, U+91dc-91dd, U+91e3, U+91e7, U+91ea, U+91f5;
}
/* [69] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.69.woff2) format('woff2');
  unicode-range: U+8c6a-8c6b, U+8c79-8c7a, U+8c82, U+8c8a, U+8c8c, U+8c9d-8c9e, U+8ca0-8ca2, U+8ca7-8cac, U+8caf-8cb0, U+8cb3-8cb4, U+8cb6-8cb8, U+8cbb-8cbd, U+8cbf-8cc4, U+8cc7-8cc8, U+8cca, U+8cd1, U+8cd3, U+8cda, U+8cdc, U+8cde, U+8ce0, U+8ce2-8ce4, U+8ce6, U+8cea, U+8ced, U+8cf4, U+8cfb-8cfd, U+8d04-8d05, U+8d07-8d08, U+8d0a, U+8d0d, U+8d13, U+8d16, U+8d64, U+8d66, U+8d6b, U+8d70, U+8d73-8d74, U+8d77, U+8d85, U+8d8a, U+8d99, U+8da3, U+8da8, U+8db3, U+8dba, U+8dbe, U+8dc6, U+8dcb-8dcc, U+8dcf, U+8ddb, U+8ddd, U+8de1, U+8de3, U+8de8, U+8df3, U+8e0a, U+8e0f-8e10, U+8e1e, U+8e2a, U+8e30, U+8e35, U+8e42, U+8e44, U+8e47-8e4a, U+8e59, U+8e5f-8e60, U+8e74, U+8e76, U+8e81, U+8e87, U+8e8a, U+8e8d, U+8eaa-8eac, U+8ec0, U+8ecb-8ecc, U+8ed2, U+8edf, U+8eeb, U+8ef8, U+8efb, U+8efe, U+8f03, U+8f05, U+8f09, U+8f12-8f15, U+8f1b-8f1f, U+8f26-8f27, U+8f29-8f2a, U+8f2f, U+8f33, U+8f38-8f39, U+8f3b, U+8f3e-8f3f, U+8f44-8f45, U+8f49, U+8f4d-8f4e, U+8f5d, U+8f5f, U+8f62, U+8f9b-8f9c, U+8fa3, U+8fa6;
}
/* [70] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.70.woff2) format('woff2');
  unicode-range: U+8941, U+8944, U+895f, U+8964, U+896a, U+8972, U+8981, U+8983, U+8986-8987, U+898f, U+8993, U+8996, U+89a1, U+89a9-89aa, U+89b2, U+89ba, U+89bd, U+89c0, U+89d2, U+89e3, U+89f4, U+89f8, U+8a02-8a03, U+8a08, U+8a0a, U+8a0c, U+8a0e, U+8a13, U+8a16-8a17, U+8a1b, U+8a1d, U+8a1f, U+8a23, U+8a25, U+8a2a, U+8a2d, U+8a31, U+8a34, U+8a36, U+8a3a-8a3b, U+8a50, U+8a54-8a55, U+8a5b, U+8a5e, U+8a60, U+8a62-8a63, U+8a66, U+8a6d-8a6e, U+8a70, U+8a72-8a73, U+8a75, U+8a79, U+8a85, U+8a87, U+8a8c-8a8d, U+8a93, U+8a95, U+8a98, U+8aa0-8aa1, U+8aa3-8aa6, U+8aa8, U+8aaa, U+8ab0, U+8ab2, U+8ab9, U+8abc, U+8abe-8abf, U+8ac2, U+8ac4, U+8ac7, U+8acb, U+8acd, U+8acf, U+8ad2, U+8ad6, U+8adb-8adc, U+8ae1, U+8ae6-8ae7, U+8aea-8aeb, U+8aed-8aee, U+8af1, U+8af6-8af8, U+8afa, U+8afe, U+8b00-8b02, U+8b04, U+8b0e, U+8b10, U+8b14, U+8b16-8b17, U+8b19-8b1b, U+8b1d, U+8b20, U+8b28, U+8b2b-8b2c, U+8b33, U+8b39, U+8b41, U+8b49, U+8b4e-8b4f, U+8b58, U+8b5a, U+8b5c, U+8b66, U+8b6c, U+8b6f-8b70, U+8b74, U+8b77, U+8b7d, U+8b80, U+8b8a, U+8b90, U+8b92-8b93, U+8b96, U+8b9a, U+8c37, U+8c3f, U+8c41, U+8c46, U+8c48, U+8c4a, U+8c4c, U+8c55, U+8c5a, U+8c61;
}
/* [71] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.71.woff2) format('woff2');
  unicode-range: U+858f, U+8591, U+8594, U+859b, U+85a6, U+85a8-85aa, U+85af-85b0, U+85ba, U+85c1, U+85c9, U+85cd-85cf, U+85d5, U+85dc-85dd, U+85e4-85e5, U+85e9-85ea, U+85f7, U+85fa-85fb, U+85ff, U+8602, U+8606-8607, U+860a, U+8616-8617, U+861a, U+862d, U+863f, U+864e, U+8650, U+8654-8655, U+865b-865c, U+865e-865f, U+8667, U+8679, U+868a, U+868c, U+8693, U+86a3-86a4, U+86a9, U+86c7, U+86cb, U+86d4, U+86d9, U+86db, U+86df, U+86e4, U+86ed, U+86fe, U+8700, U+8702-8703, U+8708, U+8718, U+871a, U+871c, U+874e, U+8755, U+8757, U+875f, U+8766, U+8768, U+8774, U+8776, U+8778, U+8782, U+878d, U+879f, U+87a2, U+87b3, U+87ba, U+87c4, U+87e0, U+87ec, U+87ef, U+87f2, U+87f9, U+87fb, U+87fe, U+8805, U+881f, U+8822-8823, U+8831, U+8836, U+883b, U+8840, U+8846, U+884d, U+8852-8853, U+8857, U+8859, U+885b, U+885d, U+8861-8863, U+8868, U+886b, U+8870, U+8872, U+8877, U+887e-887f, U+8881-8882, U+8888, U+888b, U+888d, U+8892, U+8896-8897, U+889e, U+88ab, U+88b4, U+88c1-88c2, U+88cf, U+88d4-88d5, U+88d9, U+88dc-88dd, U+88df, U+88e1, U+88e8, U+88f3-88f5, U+88f8, U+88fd, U+8907, U+8910, U+8912-8913, U+8918-8919, U+8925, U+892a, U+8936, U+8938, U+893b;
}
/* [72] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.72.woff2) format('woff2');
  unicode-range: U+82a6, U+82a9, U+82ac-82af, U+82b3, U+82b7-82b9, U+82bb-82bd, U+82bf, U+82d1-82d2, U+82d4-82d5, U+82d7, U+82db, U+82de-82df, U+82e1, U+82e5-82e7, U+82fd-82fe, U+8301-8305, U+8309, U+8317, U+8328, U+832b, U+832f, U+8331, U+8334-8336, U+8338-8339, U+8340, U+8347, U+8349-834a, U+834f, U+8351-8352, U+8373, U+8377, U+837b, U+8389-838a, U+838e, U+8396, U+8398, U+839e, U+83a2, U+83a9-83ab, U+83bd, U+83c1, U+83c5, U+83c9-83ca, U+83cc, U+83d3, U+83d6, U+83dc, U+83e9, U+83eb, U+83ef-83f2, U+83f4, U+83f9, U+83fd, U+8403-8404, U+840a, U+840c-840e, U+8429, U+842c, U+8431, U+8438, U+843d, U+8449, U+8457, U+845b, U+8461, U+8463, U+8466, U+846b-846c, U+846f, U+8475, U+847a, U+8490, U+8494, U+8499, U+849c, U+84a1, U+84b2, U+84b8, U+84bb-84bc, U+84bf-84c0, U+84c2, U+84c4, U+84c6, U+84c9, U+84cb, U+84cd, U+84d1, U+84da, U+84ec, U+84ee, U+84f4, U+84fc, U+8511, U+8513-8514, U+8517-8518, U+851a, U+851e, U+8521, U+8523, U+8525, U+852c-852d, U+852f, U+853d, U+853f, U+8541, U+8543, U+8549, U+854e, U+8553, U+8559, U+8563, U+8568-856a, U+856d, U+8584, U+8587;
}
/* [73] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.73.woff2) format('woff2');
  unicode-range: U+8033, U+8036, U+803d, U+803f, U+8043, U+8046, U+804a, U+8056, U+8058, U+805a, U+805e, U+806f-8070, U+8072-8073, U+8077, U+807d-807f, U+8084-8087, U+8089, U+808b-808c, U+8096, U+809b, U+809d, U+80a1-80a2, U+80a5, U+80a9-80aa, U+80af, U+80b1-80b2, U+80b4, U+80ba, U+80c3-80c4, U+80cc, U+80ce, U+80da-80db, U+80de, U+80e1, U+80e4-80e5, U+80f1, U+80f4, U+80f8, U+80fd, U+8102, U+8105-8108, U+810a, U+8118, U+811a-811b, U+8123, U+8129, U+812b, U+812f, U+8139, U+813e, U+814b, U+814e, U+8150-8151, U+8154-8155, U+8165-8166, U+816b, U+8170-8171, U+8178-817a, U+817f-8180, U+8188, U+818a, U+818f, U+819a, U+819c-819d, U+81a0, U+81a3, U+81a8, U+81b3, U+81b5, U+81ba, U+81bd-81c0, U+81c2, U+81c6, U+81cd, U+81d8, U+81df, U+81e3, U+81e5, U+81e7-81e8, U+81ed, U+81f3-81f4, U+81fa-81fc, U+81fe, U+8205, U+8208, U+820a, U+820c-820d, U+8212, U+821b-821c, U+821e-821f, U+8221, U+822a-822c, U+8235-8237, U+8239, U+8240, U+8245, U+8247, U+8259, U+8264, U+8266, U+826e-826f, U+8271, U+8276, U+8278, U+827e, U+828b, U+828d-828e, U+8292, U+8299-829a, U+829d, U+829f, U+82a5;
}
/* [74] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.74.woff2) format('woff2');
  unicode-range: U+7d2f-7d30, U+7d33, U+7d35, U+7d39-7d3a, U+7d42-7d46, U+7d50, U+7d5e, U+7d61-7d62, U+7d66, U+7d68, U+7d6a, U+7d6e, U+7d71-7d73, U+7d76, U+7d79, U+7d7f, U+7d8e-7d8f, U+7d93, U+7d9c, U+7da0, U+7da2, U+7dac-7dad, U+7db1-7db2, U+7db4-7db5, U+7db8, U+7dba-7dbb, U+7dbd-7dbf, U+7dc7, U+7dca-7dcb, U+7dd6, U+7dd8, U+7dda, U+7ddd-7dde, U+7de0-7de1, U+7de3, U+7de8-7de9, U+7dec, U+7def, U+7df4, U+7dfb, U+7e09-7e0a, U+7e15, U+7e1b, U+7e1d-7e1f, U+7e21, U+7e23, U+7e2b, U+7e2e-7e2f, U+7e31, U+7e37, U+7e3d-7e3e, U+7e43, U+7e46-7e47, U+7e52, U+7e54-7e55, U+7e5e, U+7e61, U+7e69-7e6b, U+7e6d, U+7e70, U+7e79, U+7e7c, U+7e82, U+7e8c, U+7e8f, U+7e93, U+7e96, U+7e98, U+7e9b-7e9c, U+7f36, U+7f38, U+7f3a, U+7f4c, U+7f50, U+7f54-7f55, U+7f6a-7f6b, U+7f6e, U+7f70, U+7f72, U+7f75, U+7f77, U+7f79, U+7f85, U+7f88, U+7f8a, U+7f8c, U+7f94, U+7f9a, U+7f9e, U+7fa4, U+7fa8-7fa9, U+7fb2, U+7fb8-7fb9, U+7fbd, U+7fc1, U+7fc5, U+7fca, U+7fcc, U+7fce, U+7fd2, U+7fd4-7fd5, U+7fdf-7fe1, U+7fe9, U+7feb, U+7ff0, U+7ff9, U+7ffc, U+8000-8001, U+8003, U+8006, U+8009, U+800c, U+8010, U+8015, U+8017-8018, U+802d;
}
/* [75] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.75.woff2) format('woff2');
  unicode-range: U+7a49, U+7a4d-7a4e, U+7a57, U+7a61-7a62, U+7a69, U+7a6b, U+7a70, U+7a74, U+7a76, U+7a79, U+7a7d, U+7a7f, U+7a81, U+7a84, U+7a88, U+7a92-7a93, U+7a95, U+7a98, U+7a9f, U+7aa9-7aaa, U+7aae-7aaf, U+7aba, U+7ac4-7ac5, U+7ac7, U+7aca, U+7ad7, U+7ad9, U+7add, U+7adf-7ae0, U+7ae3, U+7ae5, U+7aea, U+7aed, U+7aef, U+7af6, U+7af9-7afa, U+7aff, U+7b0f, U+7b11, U+7b19, U+7b1b, U+7b1e, U+7b20, U+7b26, U+7b2d, U+7b39, U+7b46, U+7b49, U+7b4b-7b4d, U+7b4f-7b52, U+7b54, U+7b56, U+7b60, U+7b6c, U+7b6e, U+7b75, U+7b7d, U+7b87, U+7b8b, U+7b8f, U+7b94-7b95, U+7b97, U+7b9a, U+7b9d, U+7ba1, U+7bad, U+7bb1, U+7bb4, U+7bb8, U+7bc0-7bc1, U+7bc4, U+7bc6-7bc7, U+7bc9, U+7bd2, U+7be0, U+7be4, U+7be9, U+7c07, U+7c12, U+7c1e, U+7c21, U+7c27, U+7c2a-7c2b, U+7c3d-7c3f, U+7c43, U+7c4c-7c4d, U+7c60, U+7c64, U+7c6c, U+7c73, U+7c83, U+7c89, U+7c92, U+7c95, U+7c97-7c98, U+7c9f, U+7ca5, U+7ca7, U+7cae, U+7cb1-7cb3, U+7cb9, U+7cbe, U+7cca, U+7cd6, U+7cde-7ce0, U+7ce7, U+7cfb, U+7cfe, U+7d00, U+7d02, U+7d04-7d08, U+7d0a-7d0b, U+7d0d, U+7d10, U+7d14, U+7d17-7d1b, U+7d20-7d21, U+7d2b-7d2c, U+7d2e;
}
/* [76] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.76.woff2) format('woff2');
  unicode-range: U+7704, U+7708-7709, U+770b, U+771e, U+7720, U+7729, U+7737-7738, U+773a, U+773c, U+7740, U+774d, U+775b, U+7761, U+7763, U+7766, U+776b, U+7779, U+777e-777f, U+778b, U+7791, U+779e, U+77a5, U+77ac-77ad, U+77b0, U+77b3, U+77bb-77bc, U+77bf, U+77d7, U+77db-77dc, U+77e2-77e3, U+77e9, U+77ed-77ef, U+7802, U+7812, U+7825-7827, U+782c, U+7832, U+7834, U+7845, U+784f, U+785d, U+786b-786c, U+786f, U+787c, U+7881, U+7887, U+788c-788e, U+7891, U+7897, U+78a3, U+78a7, U+78a9, U+78ba-78bc, U+78c1, U+78c5, U+78ca-78cb, U+78ce, U+78d0, U+78e8, U+78ec, U+78ef, U+78f5, U+78fb, U+7901, U+790e, U+7916, U+792a-792c, U+793a, U+7940-7941, U+7947-7949, U+7950, U+7956-7957, U+795a-795d, U+7960, U+7965, U+7968, U+796d, U+797a, U+797f, U+7981, U+798d-798e, U+7991, U+79a6-79a7, U+79aa, U+79ae, U+79b1, U+79b3, U+79b9, U+79bd-79c1, U+79c9-79cb, U+79d2, U+79d5, U+79d8, U+79df, U+79e4, U+79e6-79e7, U+79e9, U+79fb, U+7a00, U+7a05, U+7a08, U+7a0b, U+7a0d, U+7a14, U+7a17, U+7a19-7a1a, U+7a1c, U+7a1f-7a20, U+7a2e, U+7a31, U+7a36-7a37, U+7a3b-7a3d, U+7a3f-7a40, U+7a46;
}
/* [77] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.77.woff2) format('woff2');
  unicode-range: U+7482-7483, U+7487, U+7489, U+748b, U+7498, U+749c, U+749e-749f, U+74a1, U+74a3, U+74a5, U+74a7-74a8, U+74aa, U+74b0, U+74b2, U+74b5, U+74b9, U+74bd, U+74bf, U+74c6, U+74ca, U+74cf, U+74d4, U+74d8, U+74da, U+74dc, U+74e0, U+74e2-74e3, U+74e6, U+74ee, U+74f7, U+7501, U+7504, U+7511, U+7515, U+7518, U+751a-751b, U+7523, U+7525-7526, U+752b-752c, U+7531, U+7533, U+7538, U+753a, U+7547, U+754c, U+754f, U+7551, U+7553-7554, U+7559, U+755b-755d, U+7562, U+7565-7566, U+756a, U+756f-7570, U+7575-7576, U+7578, U+757a, U+757f, U+7586-7587, U+758a-758b, U+758e-758f, U+7591, U+759d, U+75a5, U+75ab, U+75b1-75b3, U+75b5, U+75b8-75b9, U+75bc-75be, U+75c2, U+75c5, U+75c7, U+75cd, U+75d2, U+75d4-75d5, U+75d8-75d9, U+75db, U+75e2, U+75f0, U+75f2, U+75f4, U+75fa, U+75fc, U+7600, U+760d, U+7619, U+761f-7622, U+7624, U+7626, U+763b, U+7642, U+764c, U+764e, U+7652, U+7656, U+7661, U+7664, U+7669, U+766c, U+7670, U+7672, U+7678, U+7686-7687, U+768e, U+7690, U+7693, U+76ae, U+76ba, U+76bf, U+76c2-76c3, U+76c6, U+76c8, U+76ca, U+76d2, U+76d6, U+76db-76dc, U+76de-76df, U+76e1, U+76e3-76e4, U+76e7, U+76f2, U+76fc, U+76fe, U+7701;
}
/* [78] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.78.woff2) format('woff2');
  unicode-range: U+7230, U+7232, U+7235, U+723a-723b, U+723d-723e, U+7240, U+7246-7248, U+724c, U+7252, U+7258-7259, U+725b, U+725d, U+725f, U+7261-7262, U+7267, U+7272, U+727d, U+7280-7281, U+72a2, U+72a7, U+72ac, U+72af, U+72c0, U+72c2, U+72c4, U+72ce, U+72d0, U+72d7, U+72d9, U+72e1, U+72e9, U+72f8-72f9, U+72fc-72fd, U+730a, U+7316, U+731b-731d, U+7325, U+7329-732b, U+7336-7337, U+733e-733f, U+7344-7345, U+7350, U+7352, U+7357, U+7368, U+736a, U+7370, U+7372, U+7375, U+7378, U+737a-737b, U+7384, U+7386-7387, U+7389, U+738e, U+7394, U+7396-7398, U+739f, U+73a7, U+73a9, U+73ad, U+73b2-73b3, U+73b9, U+73c0, U+73c2, U+73c9-73ca, U+73cc-73cd, U+73cf, U+73d6, U+73d9, U+73dd-73de, U+73e0, U+73e3-73e6, U+73e9-73ea, U+73ed, U+73f7, U+73f9, U+73fd-73fe, U+7401, U+7403, U+7405, U+7407, U+7409, U+7413, U+741b, U+7420-7422, U+7425-7426, U+7428, U+742a-742c, U+742e-7430, U+7433-7436, U+7438, U+743a, U+743f-7441, U+7443-7444, U+744b, U+7455, U+7457, U+7459-745c, U+745e-7460, U+7462, U+7464-7465, U+7468-746a, U+746f, U+747e;
}
/* [79] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.79.woff2) format('woff2');
  unicode-range: U+6f8d-6f8e, U+6f90, U+6f94, U+6f97, U+6fa3-6fa4, U+6fa7, U+6fae-6faf, U+6fb1, U+6fb3, U+6fb9, U+6fbe, U+6fc0-6fc3, U+6fca, U+6fd5, U+6fda, U+6fdf-6fe1, U+6fe4, U+6fe9, U+6feb-6fec, U+6fef, U+6ff1, U+6ffe, U+7001, U+7005-7006, U+7009, U+700b, U+700f, U+7011, U+7015, U+7018, U+701a-701f, U+7023, U+7027-7028, U+702f, U+7037, U+703e, U+704c, U+7050-7051, U+7058, U+705d, U+7070, U+7078, U+707c-707d, U+7085, U+708a, U+708e, U+7092, U+7098-709a, U+70a1, U+70a4, U+70ab-70ad, U+70af, U+70b3, U+70b7-70b9, U+70c8, U+70cb, U+70cf, U+70d8-70d9, U+70dd, U+70df, U+70f1, U+70f9, U+70fd, U+7104, U+7109, U+710c, U+7119-711a, U+711e, U+7126, U+7130, U+7136, U+7147, U+7149-714a, U+714c, U+714e, U+7150, U+7156, U+7159, U+715c, U+715e, U+7164-7167, U+7169, U+716c, U+716e, U+717d, U+7184, U+7189-718a, U+718f, U+7192, U+7194, U+7199, U+719f, U+71a2, U+71ac, U+71b1, U+71b9-71ba, U+71be, U+71c1, U+71c3, U+71c8-71c9, U+71ce, U+71d0, U+71d2, U+71d4-71d5, U+71df, U+71e5-71e7, U+71ed-71ee, U+71fb-71fc, U+71fe-7200, U+7206, U+7210, U+721b, U+722a, U+722c-722d;
}
/* [80] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.80.woff2) format('woff2');
  unicode-range: U+6d5a, U+6d5c, U+6d63, U+6d66, U+6d69-6d6a, U+6d6c, U+6d6e, U+6d74, U+6d78-6d79, U+6d7f, U+6d85, U+6d87-6d89, U+6d8c-6d8e, U+6d91, U+6d93, U+6d95, U+6daf, U+6db2, U+6db5, U+6dc0, U+6dc3-6dc7, U+6dcb, U+6dcf, U+6dd1, U+6dd8-6dda, U+6dde, U+6de1, U+6de8, U+6dea-6deb, U+6dee, U+6df1, U+6df3, U+6df5, U+6df7-6dfb, U+6e17, U+6e19-6e1b, U+6e1f-6e21, U+6e23-6e26, U+6e2b-6e2d, U+6e32, U+6e34, U+6e36, U+6e38, U+6e3a, U+6e3c-6e3e, U+6e43-6e44, U+6e4a, U+6e4d, U+6e56, U+6e58, U+6e5b-6e5c, U+6e5e-6e5f, U+6e67, U+6e6b, U+6e6e-6e6f, U+6e72-6e73, U+6e7a, U+6e90, U+6e96, U+6e9c-6e9d, U+6e9f, U+6ea2, U+6ea5, U+6eaa-6eab, U+6eaf, U+6eb1, U+6eb6, U+6eba, U+6ec2, U+6ec4-6ec5, U+6ec9, U+6ecb-6ecc, U+6ece, U+6ed1, U+6ed3-6ed4, U+6eef, U+6ef4, U+6ef8, U+6efe-6eff, U+6f01-6f02, U+6f06, U+6f0f, U+6f11, U+6f14-6f15, U+6f20, U+6f22-6f23, U+6f2b-6f2c, U+6f31-6f32, U+6f38, U+6f3f, U+6f41, U+6f51, U+6f54, U+6f57-6f58, U+6f5a-6f5b, U+6f5e-6f5f, U+6f62, U+6f64, U+6f6d-6f6e, U+6f70, U+6f7a, U+6f7c-6f7e, U+6f81, U+6f84, U+6f88;
}
/* [81] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.81.woff2) format('woff2');
  unicode-range: U+6ada-6adb, U+6af6, U+6afb, U+6b04, U+6b0a, U+6b0c, U+6b12, U+6b16, U+6b20-6b21, U+6b23, U+6b32, U+6b3a, U+6b3d-6b3e, U+6b46-6b47, U+6b4e, U+6b50, U+6b5f, U+6b61-6b62, U+6b64-6b66, U+6b6a, U+6b72, U+6b77-6b78, U+6b7b, U+6b7f, U+6b83-6b84, U+6b86, U+6b89-6b8a, U+6b96, U+6b98, U+6b9e, U+6bae-6baf, U+6bb2, U+6bb5, U+6bb7, U+6bba, U+6bbc, U+6bbf, U+6bc1, U+6bc5-6bc6, U+6bcb, U+6bcf, U+6bd2-6bd3, U+6bd6-6bd8, U+6bdb, U+6beb-6bec, U+6c08, U+6c0f, U+6c13, U+6c23, U+6c37-6c38, U+6c3e, U+6c40-6c42, U+6c4e, U+6c50, U+6c55, U+6c57, U+6c5a, U+6c5d-6c60, U+6c68, U+6c6a, U+6c6d, U+6c70, U+6c72, U+6c76, U+6c7a, U+6c7d-6c7e, U+6c81-6c83, U+6c85-6c88, U+6c8c, U+6c90, U+6c92-6c96, U+6c99-6c9b, U+6cab, U+6cae, U+6cb3, U+6cb8-6cb9, U+6cbb-6cbf, U+6cc1-6cc2, U+6cc4, U+6cc9-6cca, U+6ccc, U+6cd3, U+6cd7, U+6cdb, U+6ce1-6ce3, U+6ce5, U+6ce8, U+6ceb, U+6cee-6cf0, U+6cf3, U+6d0b-6d0c, U+6d11, U+6d17, U+6d19, U+6d1b, U+6d1e, U+6d25, U+6d27, U+6d29, U+6d32, U+6d35-6d36, U+6d38-6d39, U+6d3b, U+6d3d-6d3e, U+6d41, U+6d59;
}
/* [82] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.82.woff2) format('woff2');
  unicode-range: U+67f0-67f1, U+67f3-67f6, U+67fb, U+67fe, U+6812-6813, U+6816-6817, U+6821-6822, U+682f, U+6838-6839, U+683d, U+6840-6843, U+6848, U+684e, U+6850-6851, U+6853-6854, U+686d, U+6876, U+687f, U+6881, U+6885, U+688f, U+6893-6894, U+6897, U+689d, U+689f, U+68a1-68a2, U+68a7-68a8, U+68ad, U+68af-68b1, U+68b3, U+68b5-68b6, U+68c4-68c5, U+68c9, U+68cb, U+68cd, U+68d2, U+68d5, U+68d7-68d8, U+68da, U+68df-68e0, U+68e7-68e8, U+68ee, U+68f2, U+68f9-68fa, U+6900, U+6905, U+690d-690e, U+6912, U+6927, U+6930, U+693d, U+693f, U+694a, U+6953-6955, U+6957, U+6959-695a, U+695e, U+6960-6963, U+6968, U+696b, U+696d-696f, U+6975, U+6977-6979, U+6995, U+699b-699c, U+69a5, U+69a7, U+69ae, U+69b4, U+69bb, U+69c1, U+69c3, U+69cb-69cd, U+69d0, U+69e8, U+69ea, U+69fb, U+69fd, U+69ff, U+6a02, U+6a0a, U+6a11, U+6a13, U+6a17, U+6a19, U+6a1e-6a1f, U+6a21, U+6a23, U+6a35, U+6a38-6a3a, U+6a3d, U+6a44, U+6a48, U+6a4b, U+6a52-6a53, U+6a58-6a59, U+6a5f, U+6a61, U+6a6b, U+6a80, U+6a84, U+6a89, U+6a8d-6a8e, U+6a97, U+6a9c, U+6aa3, U+6ab3, U+6abb, U+6ac2-6ac3, U+6ad3;
}
/* [83] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.83.woff2) format('woff2');
  unicode-range: U+6607, U+6609-660a, U+660c, U+660f-6611, U+6613-6615, U+661e, U+6620, U+6627-6628, U+662d, U+6630-6631, U+6634, U+6636, U+663a-663b, U+6641, U+6643-6644, U+6649, U+664b, U+664f, U+6659, U+665b, U+665d-665f, U+6664-6669, U+666b, U+666e-666f, U+6673-6674, U+6676-6678, U+6684, U+6687-6689, U+668e, U+6690-6691, U+6696-6698, U+669d, U+66a0, U+66a2, U+66ab, U+66ae, U+66b2-66b4, U+66b9, U+66bb, U+66be, U+66c4, U+66c6-66c7, U+66c9, U+66d6, U+66d9, U+66dc-66dd, U+66e0, U+66e6, U+66f0, U+66f2-66f4, U+66f7, U+66f9-66fa, U+66fc, U+66fe-66ff, U+6703, U+670b, U+670d, U+6714-6715, U+6717, U+671b, U+671d-671f, U+6726-6727, U+672a-672b, U+672d-672e, U+6731, U+6736, U+673a, U+673d, U+6746, U+6749, U+674e-6751, U+6753, U+6756, U+675c, U+675e-675f, U+676d, U+676f-6770, U+6773, U+6775, U+6777, U+677b, U+677e-677f, U+6787, U+6789, U+678b, U+678f-6790, U+6793, U+6795, U+679a, U+679d, U+67af-67b0, U+67b3, U+67b6-67b8, U+67be, U+67c4, U+67cf-67d4, U+67da, U+67dd, U+67e9, U+67ec, U+67ef;
}
/* [84] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.84.woff2) format('woff2');
  unicode-range: U+6392, U+6396, U+6398, U+639b, U+63a0-63a2, U+63a5, U+63a7-63aa, U+63c0, U+63c4, U+63c6, U+63cf, U+63d6, U+63da-63db, U+63e1, U+63ed-63ee, U+63f4, U+63f6-63f7, U+640d, U+640f, U+6414, U+6416-6417, U+641c, U+6422, U+642c-642d, U+643a, U+643e, U+6458, U+6460, U+6469, U+646f, U+6478-647a, U+6488, U+6491-6493, U+649a, U+649e, U+64a4-64a5, U+64ab, U+64ad-64ae, U+64b0, U+64b2, U+64bb, U+64c1, U+64c4-64c5, U+64c7, U+64ca, U+64cd-64ce, U+64d2, U+64d4, U+64d8, U+64da, U+64e1-64e2, U+64e5-64e7, U+64ec, U+64f2, U+64f4, U+64fa, U+64fe, U+6500, U+6504, U+6518, U+651d, U+6523, U+652a-652c, U+652f, U+6536-6539, U+653b, U+653e, U+6548, U+654d-654f, U+6551, U+6556-6557, U+655e, U+6562-6563, U+6566, U+656c-656d, U+6572, U+6574-6575, U+6577-6578, U+657e, U+6582-6583, U+6585, U+658c, U+6590-6591, U+6597, U+6599, U+659b-659c, U+659f, U+65a1, U+65a4-65a5, U+65a7, U+65ab-65ac, U+65af, U+65b7, U+65bc-65bd, U+65c1, U+65c5, U+65cb-65cc, U+65cf, U+65d2, U+65d7, U+65e0, U+65e3, U+65e6, U+65e8-65e9, U+65ec-65ed, U+65f1, U+65f4, U+65fa-65fd, U+65ff, U+6606;
}
/* [85] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.85.woff2) format('woff2');
  unicode-range: U+614c, U+6153, U+6155, U+6158-6159, U+615d, U+615f, U+6162-6164, U+6167-6168, U+616b, U+616e, U+6170, U+6176-6177, U+617d-617e, U+6181-6182, U+618a, U+618e, U+6190-6191, U+6194, U+6198-619a, U+61a4, U+61a7, U+61a9, U+61ab-61ac, U+61ae, U+61b2, U+61b6, U+61ba, U+61be, U+61c3, U+61c7-61cb, U+61e6, U+61f2, U+61f6-61f8, U+61fa, U+61fc, U+61ff-6200, U+6207-6208, U+620a, U+620c-620e, U+6212, U+6216, U+621a, U+621f, U+6221, U+622a, U+622e, U+6230-6231, U+6234, U+6236, U+623e-623f, U+6241, U+6247-6249, U+624d, U+6253, U+6258, U+626e, U+6271, U+6276, U+6279, U+627c, U+627f-6280, U+6284, U+6289-628a, U+6291-6292, U+6295, U+6297-6298, U+629b, U+62ab, U+62b1, U+62b5, U+62b9, U+62bc-62bd, U+62c2, U+62c7-62c9, U+62cc-62cd, U+62cf-62d0, U+62d2-62d4, U+62d6-62d9, U+62db-62dc, U+62ec-62ef, U+62f1, U+62f3, U+62f7, U+62fe-62ff, U+6301, U+6307, U+6309, U+6311, U+632b, U+632f, U+633a-633b, U+633d-633e, U+6349, U+634c, U+634f-6350, U+6355, U+6367-6368, U+636e, U+6372, U+6377, U+637a-637b, U+637f, U+6383, U+6388-6389, U+638c;
}
/* [86] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.86.woff2) format('woff2');
  unicode-range: U+5f11, U+5f13-5f15, U+5f17-5f18, U+5f1b, U+5f1f, U+5f26-5f27, U+5f29, U+5f31, U+5f35, U+5f3a, U+5f3c, U+5f48, U+5f4a, U+5f4c, U+5f4e, U+5f56-5f57, U+5f59, U+5f5b, U+5f62, U+5f66-5f67, U+5f69-5f6d, U+5f70-5f71, U+5f77, U+5f79, U+5f7c, U+5f7f-5f81, U+5f85, U+5f87, U+5f8a-5f8b, U+5f90-5f92, U+5f98-5f99, U+5f9e, U+5fa0-5fa1, U+5fa8-5faa, U+5fae, U+5fb5, U+5fb9, U+5fbd, U+5fc5, U+5fcc-5fcd, U+5fd6-5fd9, U+5fe0, U+5feb, U+5ff5, U+5ffd, U+5fff, U+600f, U+6012, U+6016, U+601c, U+6020-6021, U+6025, U+6028, U+602a, U+602f, U+6041-6043, U+604d, U+6050, U+6052, U+6055, U+6059, U+605d, U+6062-6065, U+6068-606a, U+606c-606d, U+606f-6070, U+6085, U+6089, U+608c-608d, U+6094, U+6096, U+609a-609b, U+609f-60a0, U+60a3-60a4, U+60a7, U+60b0, U+60b2-60b4, U+60b6, U+60b8, U+60bc-60bd, U+60c7, U+60d1, U+60da, U+60dc, U+60df-60e1, U+60f0-60f1, U+60f6, U+60f9-60fb, U+6101, U+6106, U+6108-6109, U+610d-610e, U+6115, U+611a, U+6127, U+6130, U+6134, U+6137, U+613c, U+613e-613f, U+6142, U+6144, U+6147-6148, U+614a-614b;
}
/* [87] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.87.woff2) format('woff2');
  unicode-range: U+5c40, U+5c45-5c46, U+5c48, U+5c4b, U+5c4d-5c4e, U+5c51, U+5c5b, U+5c60, U+5c62, U+5c64-5c65, U+5c6c, U+5c6f, U+5c79, U+5c90-5c91, U+5ca1, U+5ca9, U+5cab-5cac, U+5cb1, U+5cb3, U+5cb5, U+5cb7-5cb8, U+5cba, U+5cbe, U+5cc0, U+5cd9, U+5ce0, U+5ce8, U+5cef-5cf0, U+5cf4, U+5cf6, U+5cfb, U+5cfd, U+5d07, U+5d0d-5d0e, U+5d11, U+5d14, U+5d16-5d17, U+5d19, U+5d27, U+5d29, U+5d4b-5d4c, U+5d50, U+5d69, U+5d6c, U+5d6f, U+5d87, U+5d8b, U+5d9d, U+5da0, U+5da2, U+5daa, U+5db8, U+5dba, U+5dbc-5dbd, U+5dcd, U+5dd2, U+5dd6, U+5de1-5de2, U+5de5-5de8, U+5deb, U+5dee, U+5df1-5df4, U+5df7, U+5dfd-5dfe, U+5e03, U+5e06, U+5e11, U+5e16, U+5e19, U+5e1b, U+5e1d, U+5e25, U+5e2b, U+5e2d, U+5e33, U+5e36, U+5e38, U+5e3d, U+5e3f-5e40, U+5e44-5e45, U+5e47, U+5e4c, U+5e55, U+5e5f, U+5e61-5e63, U+5e72, U+5e77-5e79, U+5e7b-5e7e, U+5e84, U+5e87, U+5e8a, U+5e8f, U+5e95, U+5e97, U+5e9a, U+5e9c, U+5ea0, U+5ea7, U+5eab, U+5ead, U+5eb5-5eb8, U+5ebe, U+5ec2, U+5ec8-5eca, U+5ed0, U+5ed3, U+5ed6, U+5eda-5edb, U+5edf-5ee0, U+5ee2-5ee3, U+5eec, U+5ef3, U+5ef6-5ef7, U+5efa-5efb, U+5f01, U+5f04, U+5f0a;
}
/* [88] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.88.woff2) format('woff2');
  unicode-range: U+59be, U+59c3, U+59c6, U+59c9, U+59cb, U+59d0-59d1, U+59d3-59d4, U+59d9-59da, U+59dc-59dd, U+59e6, U+59e8, U+59ea, U+59ec, U+59ee, U+59f8, U+59fb, U+59ff, U+5a01, U+5a03, U+5a11, U+5a18, U+5a1b-5a1c, U+5a1f-5a20, U+5a25, U+5a29, U+5a36, U+5a3c, U+5a41, U+5a46, U+5a49, U+5a5a, U+5a62, U+5a66, U+5a92, U+5a9a-5a9b, U+5aa4, U+5ac1-5ac2, U+5ac4, U+5ac9, U+5acc, U+5ae1, U+5ae6, U+5ae9, U+5b05, U+5b09, U+5b0b-5b0c, U+5b16, U+5b2a, U+5b40, U+5b43, U+5b51, U+5b54-5b55, U+5b58, U+5b5a, U+5b5c-5b5d, U+5b5f, U+5b63-5b64, U+5b69, U+5b6b, U+5b70-5b71, U+5b75, U+5b7a, U+5b7c, U+5b85, U+5b87-5b88, U+5b8b, U+5b8f, U+5b93, U+5b95-5b99, U+5b9b-5b9c, U+5ba2-5ba6, U+5bac, U+5bae, U+5bb0, U+5bb3-5bb5, U+5bb8-5bb9, U+5bbf-5bc0, U+5bc2-5bc7, U+5bcc, U+5bd0, U+5bd2-5bd4, U+5bd7, U+5bde-5bdf, U+5be1-5be2, U+5be4-5be9, U+5beb-5bec, U+5bee-5bef, U+5bf5-5bf6, U+5bf8, U+5bfa, U+5c01, U+5c04, U+5c07-5c0b, U+5c0d-5c0e, U+5c16, U+5c19, U+5c24, U+5c28, U+5c31, U+5c38-5c3c, U+5c3e-5c3f;
}
/* [89] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.89.woff2) format('woff2');
  unicode-range: U+5703-5704, U+5708, U+570d, U+5712-5713, U+5716, U+5718, U+572d, U+573b, U+5740, U+5742, U+5747, U+574a, U+574d-574e, U+5750-5751, U+5761, U+5764, U+5766, U+576a, U+576e, U+5770, U+5775, U+577c, U+5782, U+5788, U+578b, U+5793, U+57a0, U+57a2-57a3, U+57c3, U+57c7-57c8, U+57cb, U+57df-57e0, U+57f0, U+57f4, U+57f7, U+57f9-57fa, U+57fc, U+5800, U+5802, U+5805-5806, U+5808-580a, U+581e, U+5821, U+5824, U+5827, U+582a, U+582f-5831, U+5835, U+583a, U+584a-584b, U+584f, U+5851, U+5854, U+5857-5858, U+585a, U+585e, U+5861-5862, U+5864, U+5875, U+5879, U+587c, U+587e, U+5883, U+5885, U+5889, U+5893, U+589c, U+589e-589f, U+58a8-58a9, U+58ae, U+58b3, U+58ba-58bb, U+58be, U+58c1, U+58c5, U+58c7, U+58ce, U+58d1, U+58d3, U+58d5, U+58d8-58d9, U+58de-58df, U+58e4, U+58ec, U+58ef, U+58f9-58fb, U+58fd, U+590f, U+5914-5915, U+5919, U+5922, U+592d-592e, U+5931, U+5937, U+593e, U+5944, U+5947-5949, U+594e-5951, U+5954-5955, U+5957, U+595a, U+5960, U+5962, U+5967, U+596a-596e, U+5974, U+5978, U+5982-5984, U+598a, U+5993, U+5996-5997, U+5999, U+59a5, U+59a8, U+59ac, U+59b9, U+59bb;
}
/* [90] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.90.woff2) format('woff2');
  unicode-range: U+539a, U+53a0, U+53a5-53a6, U+53ad, U+53bb, U+53c3, U+53c8-53cb, U+53cd, U+53d4, U+53d6-53d7, U+53db, U+53e1-53e3, U+53e5, U+53e9-53ed, U+53f1, U+53f3, U+53f8, U+5403-5404, U+540a, U+540e-5411, U+541b, U+541d, U+541f-5420, U+5426, U+5429, U+542b, U+5433, U+5438-5439, U+543b-543c, U+543e, U+5442, U+5448, U+544a, U+5451, U+5468, U+546a, U+5471, U+5473, U+5475, U+547b-547d, U+5480, U+5486, U+548e, U+5490, U+54a4, U+54a8, U+54ab-54ac, U+54b3, U+54b8, U+54bd, U+54c0, U+54c4, U+54c8-54c9, U+54e1, U+54e5, U+54e8, U+54ed-54ee, U+54f2, U+54fa, U+5504, U+5506-5507, U+550e, U+5510, U+551c, U+552f, U+5531, U+5535, U+553e, U+5544, U+5546, U+554f, U+5553, U+5556, U+555e, U+5563, U+557c, U+5580, U+5584, U+5586-5587, U+5589-558a, U+5598-559a, U+559c-559d, U+55a7, U+55a9-55ac, U+55ae, U+55c5, U+55c7, U+55d4, U+55da, U+55dc, U+55df, U+55e3-55e4, U+55fd-55fe, U+5606, U+5609, U+5614, U+5617, U+562f, U+5632, U+5634, U+5636, U+5653, U+5668, U+566b, U+5674, U+5686, U+56a5, U+56ac, U+56ae, U+56b4, U+56bc, U+56ca, U+56cd, U+56d1, U+56da-56db, U+56de, U+56e0, U+56f0, U+56f9-56fa;
}
/* [91] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.91.woff2) format('woff2');
  unicode-range: U+516e, U+5175-5178, U+517c, U+5180, U+5186, U+518a, U+518d, U+5192, U+5195, U+5197, U+51a0, U+51a5, U+51aa, U+51ac, U+51b6-51b7, U+51bd, U+51c4, U+51c6, U+51c9, U+51cb-51cd, U+51dc-51de, U+51e1, U+51f0-51f1, U+51f6, U+51f8-51f9, U+51fd, U+5200, U+5203, U+5207-5208, U+520a, U+520e, U+5211, U+5217, U+521d, U+5224-5225, U+522a, U+522e, U+5230, U+5236-523b, U+5243, U+5247, U+524a-524c, U+5254, U+5256, U+525b, U+525d, U+5261, U+5269-526a, U+526f, U+5272, U+5275, U+527d, U+527f, U+5283, U+5287-5289, U+528d, U+5291-5292, U+529f, U+52a3-52a4, U+52a9-52ab, U+52be, U+52c1, U+52c3, U+52c5, U+52c7, U+52c9, U+52cd, U+52d2, U+52d6, U+52d8-52d9, U+52db, U+52dd-52df, U+52e2-52e4, U+52f3, U+52f5, U+52f8, U+52fa-52fb, U+52fe-52ff, U+5305, U+5308, U+530d, U+530f-5310, U+5315, U+5319, U+5320-5321, U+5323, U+532a, U+532f, U+5339, U+533f-5341, U+5343-5344, U+5347-534a, U+534d, U+5351-5354, U+535a, U+535c, U+535e, U+5360, U+5366, U+5368, U+536f-5371, U+5374-5375, U+5377, U+537d, U+537f, U+5384, U+5393, U+5398;
}
/* [92] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.92.woff2) format('woff2');
  unicode-range: U+4f43, U+4f46-4f48, U+4f4d-4f51, U+4f55, U+4f59-4f5a, U+4f69, U+4f6f-4f70, U+4f73, U+4f76, U+4f7a, U+4f7e-4f7f, U+4f81, U+4f83-4f84, U+4f86, U+4f88, U+4f8a-4f8b, U+4f8d, U+4f8f, U+4f91, U+4f96, U+4f98, U+4f9b, U+4f9d, U+4fae-4faf, U+4fb5-4fb6, U+4fbf, U+4fc2-4fc4, U+4fc9-4fca, U+4fce, U+4fd1, U+4fd3-4fd4, U+4fd7, U+4fda, U+4fdf-4fe0, U+4fee-4fef, U+4ff1, U+4ff3, U+4ff5, U+4ff8, U+4ffa, U+5002, U+5006, U+5009, U+500b, U+500d, U+5011-5012, U+5016, U+5019-501a, U+501c, U+501e-501f, U+5021, U+5023-5024, U+5026-5028, U+502a-502d, U+503b, U+5043, U+5047-5049, U+504f, U+5055, U+505a, U+505c, U+5065, U+5074-5076, U+5078, U+5080, U+5085, U+508d, U+5091, U+5098-5099, U+50ac-50ad, U+50b2-50b3, U+50b5, U+50b7, U+50be, U+50c5, U+50c9-50ca, U+50d1, U+50d5-50d6, U+50da, U+50de, U+50e5, U+50e7, U+50ed, U+50f9, U+50fb, U+50ff-5101, U+5104, U+5106, U+5109, U+5112, U+511f, U+5121, U+512a, U+5132, U+5137, U+513a, U+513c, U+5140-5141, U+5143-5148, U+514b-514e, U+5152, U+515c, U+5162, U+5169-516b, U+516d;
}
/* [93] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.93.woff2) format('woff2');
  unicode-range: U+338c-339c, U+339f-33a0, U+33a2-33cb, U+33cf-33d0, U+33d3, U+33d6, U+33d8, U+33db-33dd, U+4e01, U+4e03, U+4e07-4e08, U+4e11, U+4e14-4e15, U+4e18-4e19, U+4e1e, U+4e32, U+4e38-4e39, U+4e42-4e43, U+4e45, U+4e4d-4e4f, U+4e56, U+4e58-4e59, U+4e5d-4e5e, U+4e6b, U+4e6d, U+4e73, U+4e76-4e77, U+4e7e, U+4e82, U+4e86, U+4e88, U+4e8e, U+4e90-4e92, U+4e94-4e95, U+4e98, U+4e9b, U+4e9e, U+4ea1-4ea2, U+4ea4-4ea6, U+4ea8, U+4eab, U+4ead-4eae, U+4eb6, U+4ec0-4ec1, U+4ec4, U+4ec7, U+4ecb, U+4ecd, U+4ed4-4ed5, U+4ed7-4ed9, U+4edd, U+4edf, U+4ee4, U+4ef0, U+4ef2, U+4ef6-4ef7, U+4efb, U+4f01, U+4f09, U+4f0b, U+4f0d-4f11, U+4f2f, U+4f34, U+4f36, U+4f38, U+4f3a, U+4f3c-4f3d;
}
/* [94] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.94.woff2) format('woff2');
  unicode-range: U+3136, U+3138, U+313a-3140, U+3143-3144, U+3150, U+3152, U+3154-3156, U+3158-315b, U+315d-315f, U+3162, U+3164-318c, U+318e, U+3200-321b, U+3231, U+3239, U+3251-325a, U+3260-327b, U+327e-327f, U+328a-3290, U+3294, U+329e, U+32a5, U+3380-3384, U+3388-338b;
}
/* [95] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.95.woff2) format('woff2');
  unicode-range: U+2f7d, U+2f7f-2f8b, U+2f8e-2f90, U+2f92-2f97, U+2f99-2fa0, U+2fa2-2fa3, U+2fa5-2fa9, U+2fac-2fb1, U+2fb3-2fbc, U+2fc1-2fca, U+2fcd-2fd4, U+3003, U+3012-3019, U+301c, U+301e-3020, U+3036, U+3041, U+3043, U+3045, U+3047, U+3049, U+304e, U+3050, U+3052, U+3056, U+305a, U+305c, U+305e, U+3062, U+3065, U+306c, U+3070-307d, U+3080, U+3085, U+3087, U+308e, U+3090-3091, U+30a1, U+30a5, U+30a9, U+30ae, U+30b1-30b2, U+30b4, U+30b6, U+30bc-30be, U+30c2, U+30c5, U+30cc, U+30d2, U+30d4, U+30d8-30dd, U+30e4, U+30e6, U+30e8, U+30ee, U+30f0-30f2, U+30f4-30f6, U+3133, U+3135;
}
/* [96] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.96.woff2) format('woff2');
  unicode-range: U+2541-254b, U+25a4-25a9, U+25b1, U+25b5, U+25b9, U+25bf, U+25c1, U+25c3, U+25c9-25ca, U+25cc, U+25ce, U+25d0-25d1, U+25e6, U+25ef, U+260f, U+261d, U+261f, U+262f, U+2660, U+2664, U+2667-2669, U+266d, U+266f, U+2716, U+271a, U+273d, U+2756, U+2776-277f, U+278a-2793, U+2963, U+2965, U+2ac5-2ac6, U+2acb-2acc, U+2f00, U+2f04, U+2f06, U+2f08, U+2f0a-2f0b, U+2f11-2f12, U+2f14, U+2f17-2f18, U+2f1c-2f1d, U+2f1f-2f20, U+2f23-2f26, U+2f28-2f29, U+2f2b, U+2f2d, U+2f2f-2f32, U+2f38, U+2f3c-2f40, U+2f42-2f4c, U+2f4f-2f52, U+2f54-2f58, U+2f5a-2f66, U+2f69-2f70, U+2f72-2f76, U+2f78, U+2f7a-2f7c;
}
/* [97] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.97.woff2) format('woff2');
  unicode-range: U+2479-2487, U+249c-24d1, U+24d3-24d7, U+24d9-24e9, U+24eb-24f4, U+2500-2501, U+2503, U+250c-2513, U+2515-2516, U+2518-2540;
}
/* [98] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.98.woff2) format('woff2');
  unicode-range: U+215b-215e, U+2162-2169, U+2170-2179, U+2195-2199, U+21b0-21b4, U+21bc, U+21c0, U+21c4-21c5, U+21cd, U+21cf-21d4, U+21e0-21e3, U+21e6-21e9, U+2200, U+2202-2203, U+2206-2209, U+220b-220c, U+220f, U+2211, U+2213, U+221a, U+221d-2220, U+2222, U+2225-2227, U+2229-222c, U+222e, U+2234-2237, U+223d, U+2243, U+2245, U+2248, U+2250-2253, U+225a, U+2260-2262, U+2264-2267, U+226a-226b, U+226e-2273, U+2276-2277, U+2279-227b, U+2280-2287, U+228a-228b, U+2295-2297, U+22a3-22a5, U+22bb-22bc, U+22ce-22cf, U+22da-22db, U+22ee-22ef, U+2306, U+2312, U+2314, U+2467-2478;
}
/* [99] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.99.woff2) format('woff2');
  unicode-range: U+81-82, U+84, U+a2-a5, U+a7-a8, U+aa, U+ac-ad, U+b1-b3, U+b6, U+b8-ba, U+bc-be, U+c0, U+c2, U+c6-cb, U+ce-d0, U+d4, U+d8-d9, U+db-dc, U+de-df, U+e6, U+eb, U+ee-f0, U+f4, U+f7-f9, U+fb, U+fe-ff, U+111, U+126-127, U+132-133, U+138, U+13f-142, U+149-14b, U+152-153, U+166-167, U+2bc, U+2c7, U+2d0, U+2d8-2d9, U+2db-2dd, U+391-394, U+396-3a1, U+3a3-3a9, U+3b2-3b6, U+3b8, U+3bc, U+3be-3c1, U+3c3-3c9, U+2010, U+2015-2016, U+2018-2019, U+201b, U+201f-2021, U+2025, U+2030, U+2033-2036, U+203c, U+203e, U+2042, U+2074, U+207a-207f, U+2081-2084, U+2109, U+2113, U+2116, U+2121, U+2126, U+212b, U+2153-2154;
}
/* [100] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.100.woff2) format('woff2');
  unicode-range: U+e8, U+2da, U+2160, U+2194, U+3054, U+3058, U+306d, U+3086, U+308d, U+30ac, U+30bb, U+30c4, U+30cd-30ce, U+30e2, U+3132, U+3146, U+3149, U+339d, U+4e3b, U+4f0a, U+4fdd, U+4fe1, U+5409, U+540c, U+5834, U+592a-592b, U+5b9a, U+5dde, U+5e0c, U+5e73, U+5f0f, U+60f3, U+653f, U+661f, U+662f, U+667a, U+683c, U+6b4c, U+6c11, U+767c, U+76ee, U+76f4, U+77f3, U+79d1, U+7a7a, U+7b2c, U+7d22, U+8207, U+8a00, U+8a71, U+9280, U+9580, U+958b, U+96c6, U+9762, U+98df, U+9ed1, U+ac2d, U+adc8, U+add3, U+af48, U+b014, U+b134-b135, U+b158, U+b2aa, U+b35f, U+b6a4, U+b9cf, U+bb63, U+bd23, U+be91, U+c29b, U+c3f4, U+c42c, U+c55c, U+c573, U+c58f, U+c78c, U+c7dd, U+c8f5, U+cad1, U+cc48, U+cf10, U+cf20, U+d03c, U+d07d, U+d2a0, U+d30e, U+d38d, U+d3a8, U+d3c8, U+d5e5, U+d5f9, U+d6e4, U+f90a, U+ff02, U+ff1c;
}
/* [101] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.101.woff2) format('woff2');
  unicode-range: U+3b1, U+2466, U+25a1, U+25a3, U+261c, U+3008-3009, U+305b, U+305d, U+3069, U+30a7, U+30ba, U+30cf, U+30ef, U+3151, U+3157, U+4e4b, U+4e5f, U+4e8c, U+4eca, U+4ed6, U+4f5b, U+50cf, U+5149, U+5165, U+5171, U+5229, U+529b, U+5316, U+539f, U+53f2, U+571f, U+5728, U+58eb, U+591c, U+5b78, U+5c11, U+5c55, U+5ddd, U+5e02, U+5fb7, U+60c5, U+610f, U+611f, U+6625, U+66f8, U+6797, U+679c, U+682a, U+6d2a, U+706b, U+7406, U+767b, U+76f8, U+77e5, U+7acb, U+898b, U+8a69, U+8def, U+8fd1, U+901a, U+90e8, U+91cd, U+975e, U+ae14, U+ae6c, U+aec0, U+afc7, U+afc9, U+b01c, U+b028, U+b308, U+b311, U+b314, U+b31c, U+b524, U+b560, U+b764, U+b920, U+b9e3, U+bd48, U+be7d, U+c0db, U+c231, U+c270, U+c2e3, U+c37d, U+c3ed, U+c530, U+c6a5, U+c6dc, U+c7a4, U+c954, U+c974, U+d000, U+d565, U+d667, U+d6c5, U+d79d, U+ff1e;
}
/* [102] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.102.woff2) format('woff2');
  unicode-range: U+131, U+2032, U+2465, U+2642, U+3048, U+3051, U+3083-3084, U+308f, U+30c0, U+30d1, U+30d3, U+30d6, U+30df, U+30e7, U+3153, U+4e16, U+4e8b, U+4ee5, U+5206, U+52a0, U+52d5, U+53e4, U+53ef, U+54c1, U+57ce, U+597d, U+5b8c, U+5ea6, U+5f8c, U+5f97, U+6210, U+6240, U+624b, U+6728, U+6bd4, U+7236, U+7269, U+7279, U+738b, U+7528, U+7530, U+767e, U+798f, U+8005, U+8a18, U+90fd, U+91cc, U+9577, U+9593, U+98a8, U+ac20, U+acf6, U+ad90, U+af5d, U+af80, U+afcd, U+aff0, U+b0a1, U+b0b5, U+b1fd, U+b2fc, U+b380, U+b51b, U+b584, U+b5b3, U+b8fd, U+b93c, U+b9f4, U+bb44, U+bc08, U+bc27, U+bc49, U+be55, U+be64, U+bfb0, U+bfc5, U+c178, U+c21f, U+c314, U+c4f1, U+c58d, U+c664, U+c698, U+c6a7, U+c6c1, U+c9ed, U+cac0, U+cacc, U+cad9, U+ccb5, U+cdcc, U+d0e4, U+d143, U+d320, U+d330, U+d54d, U+ff06, U+ff1f, U+ff5e;
}
/* [103] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.103.woff2) format('woff2');
  unicode-range: U+b4, U+20a9, U+20ac, U+2190, U+24d8, U+2502, U+2514, U+2592, U+25c7-25c8, U+2663, U+3060, U+3064, U+3081, U+3088, U+30a3, U+30a6, U+30aa, U+30b5, U+30c7, U+30ca-30cb, U+30d0, U+30e3, U+30e5, U+339e, U+4e09, U+4eac, U+4f5c, U+5167-5168, U+516c, U+51fa, U+5408, U+540d, U+591a, U+5b57, U+6211, U+65b9, U+660e, U+6642, U+6700, U+6b63, U+6e2f, U+7063, U+7532, U+793e, U+81ea, U+8272, U+82b1, U+897f, U+8eca, U+91ce, U+ac38, U+ad76, U+ae84, U+aecc, U+b07d, U+b0b1, U+b215, U+b2a0, U+b310, U+b3d7, U+b52a, U+b618, U+b775, U+b797, U+bcd5, U+bd59, U+be80, U+bea8, U+bed1, U+bee4-bee5, U+c060, U+c2ef, U+c329, U+c3dc, U+c597, U+c5bd, U+c5e5, U+c69c, U+c9d6, U+ca29, U+ca5c, U+ca84, U+cc39, U+cc3b, U+ce89, U+cee5, U+cf65, U+cf85, U+d058, U+d145, U+d22d, U+d325, U+d37d, U+d3ad, U+d769, U+ff0c;
}
/* [104] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.104.woff2) format('woff2');
  unicode-range: U+2161, U+2228, U+2299, U+2464, U+2517, U+2640, U+3042, U+304a, U+3053, U+3061, U+307f, U+3082, U+308c, U+3092, U+30a8, U+30ab, U+30ad, U+30b0, U+30b3, U+30b7, U+30c1, U+30c6, U+30c9, U+30d5, U+30d7, U+30de, U+30e0-30e1, U+30ec-30ed, U+4e0b, U+4e0d, U+4ee3, U+53f0, U+548c, U+5b89, U+5bb6, U+5c0f, U+611b, U+6771, U+6aa2, U+6bcd, U+6c34, U+6cd5, U+6d77, U+767d, U+795e, U+8ecd, U+9999, U+9ad8, U+ac07, U+ac1a, U+ac40, U+ad0c, U+ad88, U+ada4, U+ae01, U+ae65, U+aebd, U+aec4, U+afe8, U+b139, U+b205, U+b383, U+b38c, U+b42c, U+b461, U+b55c, U+b78f, U+b8fb, U+b9f7, U+bafc, U+bc99, U+bed8, U+bfcd, U+c0bf, U+c0f9, U+c167, U+c204, U+c20f, U+c22f, U+c258, U+c298, U+c2bc, U+c388, U+c501, U+c50c, U+c5b9, U+c5ce, U+c641, U+c648, U+c73d, U+ca50, U+ca61, U+cc4c, U+ceac, U+d0d4, U+d5f7, U+d6d7, U+ff1a;
}
/* [105] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.105.woff2) format('woff2');
  unicode-range: U+2103, U+2463, U+25c6, U+25cb, U+266c, U+3001, U+300a, U+3046, U+304c-304d, U+304f, U+3055, U+3059, U+3063, U+3066-3068, U+306f, U+3089, U+30b8, U+30bf, U+314f, U+4e0a, U+570b, U+5730, U+5916, U+5929, U+5c71, U+5e74, U+5fc3, U+601d, U+6027, U+63d0, U+6709, U+6734, U+751f, U+7684, U+82f1, U+9053, U+91d1, U+97f3, U+ac2f, U+ac4d, U+adc4, U+ade4, U+ae41, U+ae4d-ae4e, U+aed1, U+afb9, U+b0e0, U+b299, U+b365, U+b46c, U+b480, U+b4c8, U+b7b4, U+b819, U+b918, U+baab, U+bab9, U+be8f, U+bed7, U+c0ec, U+c19f, U+c1a5, U+c3d9, U+c464, U+c53d, U+c553, U+c570, U+c5cc, U+c633, U+c6a4, U+c7a3, U+c7a6, U+c886, U+c9d9-c9da, U+c9ec, U+ca0c, U+cc21, U+cd1b, U+cd78, U+cdc4, U+cef8, U+cfe4, U+d0a5, U+d0b5, U+d0ec, U+d15d, U+d188, U+d23c, U+d2ac, U+d729, U+d79b, U+ff01, U+ff08-ff09, U+ff5c;
}
/* [106] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.106.woff2) format('woff2');
  unicode-range: U+2039-203a, U+223c, U+25b3, U+25b7, U+25bd, U+25cf, U+266a, U+3002, U+300b, U+304b, U+3057, U+305f, U+306a-306b, U+307e, U+308a-308b, U+3093, U+30a2, U+30af, U+30b9, U+30c3, U+30c8, U+30e9-30eb, U+33a1, U+4e00, U+524d, U+5357, U+5b50, U+7121, U+884c, U+9751, U+ac94, U+aebe, U+aecd, U+af08, U+af41, U+af49, U+b010, U+b053, U+b109, U+b11b, U+b128, U+b154, U+b291, U+b2e6, U+b301, U+b385, U+b525, U+b5b4, U+b729, U+b72f, U+b738, U+b7ff, U+b837, U+b975, U+ba67, U+bb47, U+bc1f, U+bd90, U+bfd4, U+c27c, U+c324, U+c379, U+c3e0, U+c465, U+c53b, U+c58c, U+c610, U+c653, U+c6cd, U+c813, U+c82f, U+c999, U+c9e0, U+cac4, U+cad3, U+cbd4, U+cc10, U+cc22, U+ccb8, U+ccbc, U+cda5, U+ce84, U+cea3, U+cf67, U+cfe1, U+d241, U+d30d, U+d31c, U+d391, U+d401, U+d479, U+d5c9, U+d5db, U+d649, U+d6d4;
}
/* [107] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.107.woff2) format('woff2');
  unicode-range: U+b0, U+e9, U+2193, U+2462, U+260e, U+261e, U+300e-300f, U+3044, U+30a4, U+30fb-30fc, U+314d, U+5973, U+6545, U+6708, U+7537, U+ac89, U+ac9c, U+acc1, U+ad04, U+ad75, U+ad7d, U+ae45, U+ae61, U+af42, U+b0ab, U+b0af, U+b0b3, U+b12c, U+b194, U+b1a8, U+b220, U+b258, U+b284, U+b2ff, U+b315, U+b371, U+b3d4-b3d5, U+b460, U+b527, U+b534, U+b810, U+b818, U+b98e, U+ba55, U+bbac, U+bc0b, U+bc40, U+bca1, U+bccd, U+bd93, U+be54, U+be5a, U+bf08, U+bf50, U+bf55, U+bfdc, U+c0c0, U+c0d0, U+c0f4, U+c100, U+c11e, U+c170, U+c20d, U+c274, U+c290, U+c308, U+c369, U+c539, U+c587, U+c5ff, U+c6ec, U+c70c, U+c7ad, U+c7c8, U+c83c, U+c881, U+cb48, U+cc60, U+ce69, U+ce6b, U+ce75, U+cf04, U+cf08, U+cf55, U+cf70, U+cffc, U+d0b7, U+d1a8, U+d2c8, U+d384, U+d47c, U+d48b, U+d5dd, U+d5e8, U+d720, U+d759, U+f981;
}
/* [108] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.108.woff2) format('woff2');
  unicode-range: U+e0, U+e2, U+395, U+3b7, U+3ba, U+2460-2461, U+25a0, U+3010-3011, U+306e, U+30f3, U+314a, U+314c, U+5927, U+65b0, U+7e41, U+97d3, U+9ad4, U+ad49, U+ae0b, U+ae0d, U+ae43, U+ae5d, U+aecf, U+af3c, U+af64, U+afd4, U+b080, U+b084, U+b0c5, U+b10c, U+b1e8, U+b2ac, U+b36e, U+b451, U+b515, U+b540, U+b561, U+b6ab, U+b6b1, U+b72c, U+b730, U+b744, U+b800, U+b8ec, U+b8f0, U+b904, U+b968, U+b96d, U+b987, U+b9d9, U+bb36, U+bb49, U+bc2d, U+bc43, U+bcf6, U+bd89, U+be57, U+be61, U+bed4, U+c090, U+c130, U+c148, U+c19c, U+c2f9, U+c36c, U+c37c, U+c384, U+c3df, U+c575, U+c584, U+c660, U+c719, U+c816, U+ca4d, U+ca54, U+cabc, U+cb49, U+cc14, U+cff5, U+d004, U+d038, U+d0b4, U+d0d3, U+d0e0, U+d0ed, U+d131, U+d1b0, U+d31f, U+d33d, U+d3a0, U+d3ab, U+d514, U+d584, U+d6a1, U+d6cc, U+d749, U+d760, U+d799;
}
/* [109] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.109.woff2) format('woff2');
  unicode-range: U+24, U+60, U+3b9, U+3bb, U+3bd, U+2191, U+2606, U+300c-300d, U+3131, U+3134, U+3139, U+3141-3142, U+3148, U+3161, U+3163, U+321c, U+4eba, U+5317, U+ac31, U+ac77, U+ac9f, U+acb9, U+acf0-acf1, U+acfd, U+ad73, U+af3d, U+b00c, U+b04a, U+b057, U+b0c4, U+b188, U+b1cc, U+b214, U+b2db, U+b2ee, U+b304, U+b4ed, U+b518, U+b5bc, U+b625, U+b69c-b69d, U+b7ac, U+b801, U+b86c, U+b959, U+b95c, U+b985, U+ba48, U+bb58, U+bc0c, U+bc38, U+bc85, U+bc9a, U+bf40, U+c068, U+c0bd, U+c0cc, U+c12f, U+c149, U+c1e0, U+c22b, U+c22d, U+c250, U+c2fc, U+c300, U+c313, U+c370, U+c3d8, U+c557, U+c580, U+c5e3, U+c62e, U+c634, U+c6f0, U+c74d, U+c783, U+c78e, U+c796, U+c7bc, U+c92c, U+ca4c, U+cc1c, U+cc54, U+cc59, U+ce04, U+cf30, U+cfc4, U+d140, U+d321, U+d38c, U+d399, U+d54f, U+d587, U+d5d0, U+d6e8, U+d770;
}
/* [110] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.110.woff2) format('woff2');
  unicode-range: U+d7, U+ea, U+fc, U+2192, U+25bc, U+3000, U+3137, U+3145, U+315c, U+7f8e, U+ac13, U+ac71, U+ac90, U+acb8, U+ace7, U+ad7f, U+ae50, U+aef4, U+af34, U+afbc, U+b048, U+b09a, U+b0ad, U+b0bc, U+b113, U+b125, U+b141, U+b20c, U+b2d9, U+b2ed, U+b367, U+b369, U+b374, U+b3cb, U+b4ec, U+b611, U+b760, U+b81b, U+b834, U+b8b0, U+b8e1, U+b989, U+b9d1, U+b9e1, U+b9fa, U+ba4d, U+ba78, U+bb35, U+bb54, U+bbf9, U+bc11, U+bcb3, U+bd05, U+bd95, U+bdd4, U+be10, U+bed0, U+bf51, U+c0d8, U+c232, U+c2b7, U+c2eb, U+c378, U+c500, U+c52c, U+c549, U+c568, U+c598, U+c5c9, U+c61b, U+c639, U+c67c, U+c717, U+c78a, U+c80a, U+c90c-c90d, U+c950, U+c9e7, U+cbe4, U+cca9, U+cce4, U+cdb0, U+ce78, U+ce94, U+ce98, U+cf8c, U+d018, U+d034, U+d0f1, U+d1b1, U+d280, U+d2f8, U+d338, U+d380, U+d3b4, U+d610, U+d69f, U+d6fc, U+d758;
}
/* [111] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.111.woff2) format('woff2');
  unicode-range: U+e7, U+2022, U+203b, U+25c0, U+2605, U+2661, U+3147, U+318d, U+672c, U+8a9e, U+acaa, U+acbc, U+ad1c, U+ae4a, U+ae5c, U+b044, U+b054, U+b0c8-b0c9, U+b2a6, U+b2d0, U+b35c, U+b364, U+b428, U+b454, U+b465, U+b4b7, U+b4e3, U+b51c, U+b5a1, U+b784, U+b790, U+b7ab, U+b7f4, U+b82c, U+b835, U+b8e9, U+b8f8, U+b9d8, U+b9f9, U+ba5c, U+ba64, U+babd, U+bb18, U+bb3b, U+bbff, U+bc0d, U+bc45, U+bc97, U+bcbc, U+be45, U+be75, U+be7c, U+bfcc, U+c0b6, U+c0f7, U+c14b, U+c2b4, U+c30d, U+c4f8, U+c5bb, U+c5d1, U+c5e0, U+c5ee, U+c5fd, U+c606, U+c6c5, U+c6e0, U+c708, U+c81d, U+c820, U+c824, U+c878, U+c918, U+c96c, U+c9e4, U+c9f1, U+cc2e, U+cd09, U+cea1, U+cef5, U+cef7, U+cf64, U+cf69, U+cfe8, U+d035, U+d0ac, U+d230, U+d234, U+d2f4, U+d31d, U+d575, U+d578, U+d608, U+d614, U+d718, U+d751, U+d761, U+d78c, U+d790;
}
/* [112] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.112.woff2) format('woff2');
  unicode-range: U+2665, U+3160, U+4e2d, U+6587, U+65e5, U+ac12, U+ac14, U+ac16, U+ac81, U+ad34, U+ade0, U+ae54, U+aebc, U+af2c, U+afc0, U+afc8, U+b04c, U+b08c, U+b099, U+b0a9, U+b0ac, U+b0ae, U+b0b8, U+b123, U+b179, U+b2e5, U+b2f7, U+b4c0, U+b531, U+b538, U+b545, U+b550, U+b5a8, U+b6f0, U+b728, U+b73b, U+b7ad, U+b7ed, U+b809, U+b864, U+b86d, U+b871, U+b9bf, U+b9f5, U+ba40, U+ba4b, U+ba58, U+ba87, U+baac, U+bbc0, U+bc16, U+bc34, U+bd07, U+bd99, U+be59, U+bfd0, U+c058, U+c0e4, U+c0f5, U+c12d, U+c139, U+c228, U+c529, U+c5c7, U+c635, U+c637, U+c735, U+c77d, U+c787, U+c789, U+c8c4, U+c989, U+c98c, U+c9d0, U+c9d3, U+cc0c, U+cc99, U+cd0c, U+cd2c, U+cd98, U+cda4, U+ce59, U+ce60, U+ce6d, U+cea0, U+d0d0-d0d1, U+d0d5, U+d14d, U+d1a4, U+d29c, U+d2f1, U+d301, U+d39c, U+d3bc, U+d4e8, U+d540, U+d5ec, U+d640, U+d750;
}
/* [113] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.113.woff2) format('woff2');
  unicode-range: U+5e, U+25b2, U+25b6, U+314e, U+ac24, U+ace1, U+ace4, U+ae68, U+af2d, U+b0d0, U+b0e5, U+b150, U+b155, U+b193, U+b2c9, U+b2dd, U+b3c8, U+b3fc, U+b410, U+b458, U+b4dd, U+b5a0, U+b5a4, U+b5bb, U+b7b5, U+b838, U+b840, U+b86f, U+b8f9, U+b960, U+b9e5, U+bab8, U+bb50, U+bc1d, U+bc24-bc25, U+bca8, U+bcbd, U+bd04, U+bd10, U+bd24, U+be48, U+be5b, U+be68, U+c05c, U+c12c, U+c140, U+c15c, U+c168, U+c194, U+c219, U+c27d, U+c2a8, U+c2f1, U+c2f8, U+c368, U+c554-c555, U+c559, U+c564, U+c5d8, U+c5fc, U+c625, U+c65c, U+c6b1, U+c728, U+c794, U+c84c, U+c88c, U+c8e0, U+c8fd, U+c998, U+c9dd, U+cc0d, U+cc30, U+ceec, U+cf13, U+cf1c, U+cf5c, U+d050, U+d07c, U+d0a8, U+d134, U+d138, U+d154, U+d1f4, U+d2bc, U+d329, U+d32c, U+d3d0, U+d3f4, U+d3fc, U+d56b, U+d5cc, U+d600-d601, U+d639, U+d6c8, U+d754, U+d765;
}
/* [114] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.114.woff2) format('woff2');
  unicode-range: U+3c-3d, U+2026, U+24d2, U+314b, U+ac11, U+acf3, U+ad74, U+ad81, U+adf9, U+ae34, U+af43, U+afb8, U+b05d, U+b07c, U+b110, U+b118, U+b17c, U+b180, U+b18d, U+b192, U+b2cc, U+b355, U+b378, U+b4a4, U+b4ef, U+b78d, U+b799, U+b7a9, U+b7fd, U+b807, U+b80c, U+b839, U+b9b4, U+b9db, U+ba3c, U+bab0, U+bba4, U+bc94, U+be4c, U+c154, U+c1c4, U+c26c, U+c2ac, U+c2ed, U+c4f4, U+c55e, U+c561, U+c571, U+c5b5, U+c5c4, U+c654-c655, U+c695, U+c6e8, U+c6f9, U+c724, U+c751, U+c775, U+c7a0, U+c7c1, U+c874, U+c880, U+c9d5, U+c9f8, U+cabd, U+cc29, U+cc2c, U+cca8, U+ccab, U+ccd0, U+ce21, U+ce35, U+ce7c, U+ce90, U+cee8, U+cef4, U+cfe0, U+d070, U+d0b9, U+d0c1, U+d0c4, U+d0c8, U+d15c, U+d1a1, U+d2c0, U+d300, U+d314, U+d3ed, U+d478, U+d480, U+d48d, U+d508, U+d53d, U+d5e4, U+d611, U+d61c, U+d68d, U+d6a8, U+d798;
}
/* [115] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.115.woff2) format('woff2');
  unicode-range: U+23, U+25, U+5f, U+a9, U+ac08, U+ac78, U+aca8, U+acac, U+ace8, U+ad70, U+adc0, U+addc, U+b137, U+b140, U+b208, U+b290, U+b2f5, U+b3c5, U+b3cc, U+b420, U+b429, U+b529, U+b530, U+b77d, U+b79c, U+b7a8, U+b7c9, U+b7f0, U+b7fc, U+b828, U+b860, U+b9ad, U+b9c1, U+b9c9, U+b9dd-b9de, U+b9e8, U+ba38-ba39, U+babb, U+bc00, U+bc8c, U+bca0, U+bca4, U+bcd1, U+bcfc, U+bd09, U+bdf0, U+be60, U+c0ad, U+c0b4, U+c0bc, U+c190, U+c1fc, U+c220, U+c288, U+c2b9, U+c2f6, U+c528, U+c545, U+c558, U+c5bc, U+c5d4, U+c600, U+c644, U+c6c0, U+c6c3, U+c721, U+c798, U+c7a1, U+c811, U+c838, U+c871, U+c904, U+c990, U+c9dc, U+cc38, U+cc44, U+cca0, U+cd1d, U+cd95, U+cda9, U+ce5c, U+cf00, U+cf58, U+d150, U+d22c, U+d305, U+d328, U+d37c, U+d3f0, U+d551, U+d5a5, U+d5c8, U+d5d8, U+d63c, U+d64d, U+d669, U+d734, U+d76c;
}
/* [116] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.116.woff2) format('woff2');
  unicode-range: U+26, U+2b, U+3e, U+40, U+7e, U+ac01, U+ac19, U+ac1d, U+aca0, U+aca9, U+acb0, U+ad8c, U+ae09, U+ae38, U+ae40, U+aed8, U+b09c, U+b0a0, U+b108, U+b204, U+b298, U+b2d8, U+b2eb-b2ec, U+b2f4, U+b313, U+b358, U+b450, U+b4e0, U+b54c, U+b610, U+b780, U+b78c, U+b791, U+b8e8, U+b958, U+b974, U+b984, U+b9b0, U+b9bc-b9bd, U+b9ce, U+ba70, U+bbfc, U+bc0f, U+bc15, U+bc1b, U+bc31, U+bc95, U+bcc0, U+bcc4, U+bd81, U+bd88, U+c0c8, U+c11d, U+c13c, U+c158, U+c18d, U+c1a1, U+c21c, U+c4f0, U+c54a, U+c560, U+c5b8, U+c5c8, U+c5f4, U+c628, U+c62c, U+c678, U+c6cc, U+c808, U+c810, U+c885, U+c88b, U+c900, U+c988, U+c99d, U+c9c8, U+cc3d-cc3e, U+cc45, U+cd08, U+ce20, U+cee4, U+d074, U+d0a4, U+d0dd, U+d2b9, U+d3b8, U+d3c9, U+d488, U+d544, U+d559, U+d56d, U+d588, U+d615, U+d648, U+d655, U+d658, U+d65c;
}
/* [117] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.117.woff2) format('woff2');
  unicode-range: U+d, U+48, U+7c, U+ac10, U+ac15, U+ac74, U+ac80, U+ac83, U+acc4, U+ad11, U+ad50, U+ad6d, U+adfc, U+ae00, U+ae08, U+ae4c, U+b0a8, U+b124, U+b144, U+b178, U+b274, U+b2a5, U+b2e8, U+b2f9, U+b354, U+b370, U+b418, U+b41c, U+b4f1, U+b514, U+b798, U+b808, U+b824-b825, U+b8cc, U+b978, U+b9d0, U+b9e4, U+baa9, U+bb3c, U+bc18, U+bc1c, U+bc30, U+bc84, U+bcf5, U+bcf8, U+bd84, U+be0c, U+be14, U+c0b0, U+c0c9, U+c0dd, U+c124, U+c2dd, U+c2e4, U+c2ec, U+c54c, U+c57c-c57d, U+c591, U+c5c5-c5c6, U+c5ed, U+c608, U+c640, U+c6b8, U+c6d4, U+c784, U+c7ac, U+c800-c801, U+c9c1, U+c9d1, U+cc28, U+cc98, U+cc9c, U+ccad, U+cd5c, U+cd94, U+cd9c, U+cde8, U+ce68, U+cf54, U+d0dc, U+d14c, U+d1a0, U+d1b5, U+d2f0, U+d30c, U+d310, U+d398, U+d45c, U+d50c, U+d53c, U+d560, U+d568, U+d589, U+d604, U+d6c4, U+d788;
}
/* [118] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.118.woff2) format('woff2');
  unicode-range: U+39, U+49, U+4d-4e, U+a0, U+ac04, U+ac1c, U+ac70, U+ac8c, U+acbd, U+acf5, U+acfc, U+ad00, U+ad6c, U+adf8, U+b098, U+b0b4, U+b294, U+b2c8, U+b300, U+b3c4, U+b3d9, U+b4dc, U+b4e4, U+b77c, U+b7ec, U+b85d, U+b97c, U+b9c8, U+b9cc, U+ba54, U+ba74, U+ba85, U+baa8, U+bb34, U+bb38, U+bbf8, U+bc14, U+bc29, U+bc88, U+bcf4, U+bd80, U+be44, U+c0c1, U+c11c, U+c120, U+c131, U+c138, U+c18c, U+c218, U+c2b5, U+c2e0, U+c544, U+c548, U+c5b4, U+c5d0, U+c5ec, U+c5f0, U+c601, U+c624, U+c694, U+c6a9, U+c6b0, U+c6b4, U+c6d0, U+c704, U+c720, U+c73c, U+c740, U+c744, U+c74c, U+c758, U+c77c, U+c785, U+c788, U+c790-c791, U+c7a5, U+c804, U+c815, U+c81c, U+c870, U+c8fc, U+c911, U+c9c4, U+ccb4, U+ce58, U+ce74, U+d06c, U+d0c0, U+d130, U+d2b8, U+d3ec, U+d504, U+d55c, U+d569, U+d574, U+d638, U+d654, U+d68c;
}
/* [119] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.119.woff2) format('woff2');
  unicode-range: U+20-22, U+27-2a, U+2c-38, U+3a-3b, U+3f, U+41-47, U+4a-4c, U+4f-5d, U+61-7b, U+7d, U+a1, U+ab, U+ae, U+b7, U+bb, U+bf, U+2013-2014, U+201c-201d, U+2122, U+ac00, U+ace0, U+ae30, U+b2e4, U+b85c, U+b9ac, U+c0ac, U+c2a4, U+c2dc, U+c774, U+c778, U+c9c0, U+d558;
}
/* cyrillic */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1SLfg8U4h.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1SLzg8U4h.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1SL3g8U4h.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzjQ1SLPg8Q.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* [0] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.0.woff2) format('woff2');
  unicode-range: U+f9ca-fa0b, U+ff03-ff05, U+ff07, U+ff0a-ff0b, U+ff0d-ff19, U+ff1b, U+ff1d, U+ff20-ff5b, U+ff5d, U+ffe0-ffe3, U+ffe5-ffe6;
}
/* [1] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.1.woff2) format('woff2');
  unicode-range: U+f92f-f980, U+f982-f9c9;
}
/* [2] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.2.woff2) format('woff2');
  unicode-range: U+d723-d728, U+d72a-d733, U+d735-d748, U+d74a-d74f, U+d752-d753, U+d755-d757, U+d75a-d75f, U+d762-d764, U+d766-d768, U+d76a-d76b, U+d76d-d76f, U+d771-d787, U+d789-d78b, U+d78d-d78f, U+d791-d797, U+d79a, U+d79c, U+d79e-d7a3, U+f900-f909, U+f90b-f92e;
}
/* [3] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.3.woff2) format('woff2');
  unicode-range: U+d679-d68b, U+d68e-d69e, U+d6a0, U+d6a2-d6a7, U+d6a9-d6c3, U+d6c6-d6c7, U+d6c9-d6cb, U+d6cd-d6d3, U+d6d5-d6d6, U+d6d8-d6e3, U+d6e5-d6e7, U+d6e9-d6fb, U+d6fd-d717, U+d719-d71f, U+d721-d722;
}
/* [4] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.4.woff2) format('woff2');
  unicode-range: U+d5bc-d5c7, U+d5ca-d5cb, U+d5cd-d5cf, U+d5d1-d5d7, U+d5d9-d5da, U+d5dc, U+d5de-d5e3, U+d5e6-d5e7, U+d5e9-d5eb, U+d5ed-d5f6, U+d5f8, U+d5fa-d5ff, U+d602-d603, U+d605-d607, U+d609-d60f, U+d612-d613, U+d616-d61b, U+d61d-d637, U+d63a-d63b, U+d63d-d63f, U+d641-d647, U+d64a-d64c, U+d64e-d653, U+d656-d657, U+d659-d65b, U+d65d-d666, U+d668, U+d66a-d678;
}
/* [5] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.5.woff2) format('woff2');
  unicode-range: U+d507, U+d509-d50b, U+d50d-d513, U+d515-d53b, U+d53e-d53f, U+d541-d543, U+d545-d54c, U+d54e, U+d550, U+d552-d557, U+d55a-d55b, U+d55d-d55f, U+d561-d564, U+d566-d567, U+d56a, U+d56c, U+d56e-d573, U+d576-d577, U+d579-d583, U+d585-d586, U+d58a-d5a4, U+d5a6-d5bb;
}
/* [6] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.6.woff2) format('woff2');
  unicode-range: U+d464-d477, U+d47a-d47b, U+d47d-d47f, U+d481-d487, U+d489-d48a, U+d48c, U+d48e-d4e7, U+d4e9-d503, U+d505-d506;
}
/* [7] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.7.woff2) format('woff2');
  unicode-range: U+d3bf-d3c7, U+d3ca-d3cf, U+d3d1-d3eb, U+d3ee-d3ef, U+d3f1-d3f3, U+d3f5-d3fb, U+d3fd-d400, U+d402-d45b, U+d45d-d463;
}
/* [8] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.8.woff2) format('woff2');
  unicode-range: U+d2ff, U+d302-d304, U+d306-d30b, U+d30f, U+d311-d313, U+d315-d31b, U+d31e, U+d322-d324, U+d326-d327, U+d32a-d32b, U+d32d-d32f, U+d331-d337, U+d339-d33c, U+d33e-d37b, U+d37e-d37f, U+d381-d383, U+d385-d38b, U+d38e-d390, U+d392-d397, U+d39a-d39b, U+d39d-d39f, U+d3a1-d3a7, U+d3a9-d3aa, U+d3ac, U+d3ae-d3b3, U+d3b5-d3b7, U+d3b9-d3bb, U+d3bd-d3be;
}
/* [9] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.9.woff2) format('woff2');
  unicode-range: U+d257-d27f, U+d281-d29b, U+d29d-d29f, U+d2a1-d2ab, U+d2ad-d2b7, U+d2ba-d2bb, U+d2bd-d2bf, U+d2c1-d2c7, U+d2c9-d2ef, U+d2f2-d2f3, U+d2f5-d2f7, U+d2f9-d2fe;
}
/* [10] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.10.woff2) format('woff2');
  unicode-range: U+d1b4, U+d1b6-d1f3, U+d1f5-d22b, U+d22e-d22f, U+d231-d233, U+d235-d23b, U+d23d-d240, U+d242-d256;
}
/* [11] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.11.woff2) format('woff2');
  unicode-range: U+d105-d12f, U+d132-d133, U+d135-d137, U+d139-d13f, U+d141-d142, U+d144, U+d146-d14b, U+d14e-d14f, U+d151-d153, U+d155-d15b, U+d15e-d187, U+d189-d19f, U+d1a2-d1a3, U+d1a5-d1a7, U+d1a9-d1af, U+d1b2-d1b3;
}
/* [12] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.12.woff2) format('woff2');
  unicode-range: U+d04b-d04f, U+d051-d057, U+d059-d06b, U+d06d-d06f, U+d071-d073, U+d075-d07b, U+d07e-d0a3, U+d0a6-d0a7, U+d0a9-d0ab, U+d0ad-d0b3, U+d0b6, U+d0b8, U+d0ba-d0bf, U+d0c2-d0c3, U+d0c5-d0c7, U+d0c9-d0cf, U+d0d2, U+d0d6-d0db, U+d0de-d0df, U+d0e1-d0e3, U+d0e5-d0eb, U+d0ee-d0f0, U+d0f2-d104;
}
/* [13] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.13.woff2) format('woff2');
  unicode-range: U+cfa2-cfc3, U+cfc5-cfdf, U+cfe2-cfe3, U+cfe5-cfe7, U+cfe9-cff4, U+cff6-cffb, U+cffd-cfff, U+d001-d003, U+d005-d017, U+d019-d033, U+d036-d037, U+d039-d03b, U+d03d-d04a;
}
/* [14] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.14.woff2) format('woff2');
  unicode-range: U+cef0-cef3, U+cef6, U+cef9-ceff, U+cf01-cf03, U+cf05-cf07, U+cf09-cf0f, U+cf11-cf12, U+cf14-cf1b, U+cf1d-cf1f, U+cf21-cf2f, U+cf31-cf53, U+cf56-cf57, U+cf59-cf5b, U+cf5d-cf63, U+cf66, U+cf68, U+cf6a-cf6f, U+cf71-cf84, U+cf86-cf8b, U+cf8d-cfa1;
}
/* [15] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.15.woff2) format('woff2');
  unicode-range: U+ce3c-ce57, U+ce5a-ce5b, U+ce5d-ce5f, U+ce61-ce67, U+ce6a, U+ce6c, U+ce6e-ce73, U+ce76-ce77, U+ce79-ce7b, U+ce7d-ce83, U+ce85-ce88, U+ce8a-ce8f, U+ce91-ce93, U+ce95-ce97, U+ce99-ce9f, U+cea2, U+cea4-ceab, U+cead-cee3, U+cee6-cee7, U+cee9-ceeb, U+ceed-ceef;
}
/* [16] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.16.woff2) format('woff2');
  unicode-range: U+cd92-cd93, U+cd96-cd97, U+cd99-cd9b, U+cd9d-cda3, U+cda6-cda8, U+cdaa-cdaf, U+cdb1-cdc3, U+cdc5-cdcb, U+cdcd-cde7, U+cde9-ce03, U+ce05-ce1f, U+ce22-ce34, U+ce36-ce3b;
}
/* [17] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.17.woff2) format('woff2');
  unicode-range: U+ccef-cd07, U+cd0a-cd0b, U+cd0d-cd1a, U+cd1c, U+cd1e-cd2b, U+cd2d-cd5b, U+cd5d-cd77, U+cd79-cd91;
}
/* [18] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.18.woff2) format('woff2');
  unicode-range: U+cc3f-cc43, U+cc46-cc47, U+cc49-cc4b, U+cc4d-cc53, U+cc55-cc58, U+cc5a-cc5f, U+cc61-cc97, U+cc9a-cc9b, U+cc9d-cc9f, U+cca1-cca7, U+ccaa, U+ccac, U+ccae-ccb3, U+ccb6-ccb7, U+ccb9-ccbb, U+ccbd-cccf, U+ccd1-cce3, U+cce5-ccee;
}
/* [19] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.19.woff2) format('woff2');
  unicode-range: U+cb91-cbd3, U+cbd5-cbe3, U+cbe5-cc0b, U+cc0e-cc0f, U+cc11-cc13, U+cc15-cc1b, U+cc1d-cc20, U+cc23-cc27, U+cc2a-cc2b, U+cc2d, U+cc2f, U+cc31-cc37, U+cc3a, U+cc3c;
}
/* [20] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.20.woff2) format('woff2');
  unicode-range: U+caf4-cb47, U+cb4a-cb90;
}
/* [21] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.21.woff2) format('woff2');
  unicode-range: U+ca4a-ca4b, U+ca4e-ca4f, U+ca51-ca53, U+ca55-ca5b, U+ca5d-ca60, U+ca62-ca83, U+ca85-cabb, U+cabe-cabf, U+cac1-cac3, U+cac5-cacb, U+cacd-cad0, U+cad2, U+cad4-cad8, U+cada-caf3;
}
/* [22] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.22.woff2) format('woff2');
  unicode-range: U+c996-c997, U+c99a-c99c, U+c99e-c9bf, U+c9c2-c9c3, U+c9c5-c9c7, U+c9c9-c9cf, U+c9d2, U+c9d4, U+c9d7-c9d8, U+c9db, U+c9de-c9df, U+c9e1-c9e3, U+c9e5-c9e6, U+c9e8-c9eb, U+c9ee-c9f0, U+c9f2-c9f7, U+c9f9-ca0b, U+ca0d-ca28, U+ca2a-ca49;
}
/* [23] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.23.woff2) format('woff2');
  unicode-range: U+c8e9-c8f4, U+c8f6-c8fb, U+c8fe-c8ff, U+c901-c903, U+c905-c90b, U+c90e-c910, U+c912-c917, U+c919-c92b, U+c92d-c94f, U+c951-c953, U+c955-c96b, U+c96d-c973, U+c975-c987, U+c98a-c98b, U+c98d-c98f, U+c991-c995;
}
/* [24] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.24.woff2) format('woff2');
  unicode-range: U+c841-c84b, U+c84d-c86f, U+c872-c873, U+c875-c877, U+c879-c87f, U+c882-c884, U+c887-c88a, U+c88d-c8c3, U+c8c5-c8df, U+c8e1-c8e8;
}
/* [25] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.25.woff2) format('woff2');
  unicode-range: U+c779-c77b, U+c77e-c782, U+c786, U+c78b, U+c78d, U+c78f, U+c792-c793, U+c795, U+c797, U+c799-c79f, U+c7a2, U+c7a7-c7ab, U+c7ae-c7bb, U+c7bd-c7c0, U+c7c2-c7c7, U+c7c9-c7dc, U+c7de-c7ff, U+c802-c803, U+c805-c807, U+c809, U+c80b-c80f, U+c812, U+c814, U+c817-c81b, U+c81e-c81f, U+c821-c823, U+c825-c82e, U+c830-c837, U+c839-c83b, U+c83d-c840;
}
/* [26] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.26.woff2) format('woff2');
  unicode-range: U+c6bb-c6bf, U+c6c2, U+c6c4, U+c6c6-c6cb, U+c6ce-c6cf, U+c6d1-c6d3, U+c6d5-c6db, U+c6dd-c6df, U+c6e1-c6e7, U+c6e9-c6eb, U+c6ed-c6ef, U+c6f1-c6f8, U+c6fa-c703, U+c705-c707, U+c709-c70b, U+c70d-c716, U+c718, U+c71a-c71f, U+c722-c723, U+c725-c727, U+c729-c734, U+c736-c73b, U+c73e-c73f, U+c741-c743, U+c745-c74b, U+c74e-c750, U+c752-c757, U+c759-c773, U+c776-c777;
}
/* [27] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.27.woff2) format('woff2');
  unicode-range: U+c5f5-c5fb, U+c5fe, U+c602-c605, U+c607, U+c609-c60f, U+c611-c61a, U+c61c-c623, U+c626-c627, U+c629-c62b, U+c62d, U+c62f-c632, U+c636, U+c638, U+c63a-c63f, U+c642-c643, U+c645-c647, U+c649-c652, U+c656-c65b, U+c65d-c65f, U+c661-c663, U+c665-c677, U+c679-c67b, U+c67d-c693, U+c696-c697, U+c699-c69b, U+c69d-c6a3, U+c6a6, U+c6a8, U+c6aa-c6af, U+c6b2-c6b3, U+c6b5-c6b7, U+c6b9-c6ba;
}
/* [28] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.28.woff2) format('woff2');
  unicode-range: U+c517-c527, U+c52a-c52b, U+c52d-c52f, U+c531-c538, U+c53a, U+c53c, U+c53e-c543, U+c546-c547, U+c54b, U+c54d-c552, U+c556, U+c55a-c55b, U+c55d, U+c55f, U+c562-c563, U+c565-c567, U+c569-c56f, U+c572, U+c574, U+c576-c57b, U+c57e-c57f, U+c581-c583, U+c585-c586, U+c588-c58b, U+c58e, U+c590, U+c592-c596, U+c599-c5b3, U+c5b6-c5b7, U+c5ba, U+c5be-c5c3, U+c5ca-c5cb, U+c5cd, U+c5cf, U+c5d2-c5d3, U+c5d5-c5d7, U+c5d9-c5df, U+c5e1-c5e2, U+c5e4, U+c5e6-c5eb, U+c5ef, U+c5f1-c5f3;
}
/* [29] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.29.woff2) format('woff2');
  unicode-range: U+c475-c4ef, U+c4f2-c4f3, U+c4f5-c4f7, U+c4f9-c4ff, U+c502-c50b, U+c50d-c516;
}
/* [30] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.30.woff2) format('woff2');
  unicode-range: U+c3d0-c3d7, U+c3da-c3db, U+c3dd-c3de, U+c3e1-c3ec, U+c3ee-c3f3, U+c3f5-c42b, U+c42d-c463, U+c466-c474;
}
/* [31] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.31.woff2) format('woff2');
  unicode-range: U+c32b-c367, U+c36a-c36b, U+c36d-c36f, U+c371-c377, U+c37a-c37b, U+c37e-c383, U+c385-c387, U+c389-c3cf;
}
/* [32] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.32.woff2) format('woff2');
  unicode-range: U+c26a-c26b, U+c26d-c26f, U+c271-c273, U+c275-c27b, U+c27e-c287, U+c289-c28f, U+c291-c297, U+c299-c29a, U+c29c-c2a3, U+c2a5-c2a7, U+c2a9-c2ab, U+c2ad-c2b3, U+c2b6, U+c2b8, U+c2ba-c2bb, U+c2bd-c2db, U+c2de-c2df, U+c2e1-c2e2, U+c2e5-c2ea, U+c2ee, U+c2f0, U+c2f2-c2f5, U+c2f7, U+c2fa-c2fb, U+c2fd-c2ff, U+c301-c307, U+c309-c30c, U+c30e-c312, U+c315-c323, U+c325-c328, U+c32a;
}
/* [33] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.33.woff2) format('woff2');
  unicode-range: U+c1bc-c1c3, U+c1c5-c1df, U+c1e1-c1fb, U+c1fd-c203, U+c205-c20c, U+c20e, U+c210-c217, U+c21a-c21b, U+c21d-c21e, U+c221-c227, U+c229-c22a, U+c22c, U+c22e, U+c230, U+c233-c24f, U+c251-c257, U+c259-c269;
}
/* [34] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.34.woff2) format('woff2');
  unicode-range: U+c101-c11b, U+c11f, U+c121-c123, U+c125-c12b, U+c12e, U+c132-c137, U+c13a-c13b, U+c13d-c13f, U+c141-c147, U+c14a, U+c14c-c153, U+c155-c157, U+c159-c15b, U+c15d-c166, U+c169-c16f, U+c171-c177, U+c179-c18b, U+c18e-c18f, U+c191-c193, U+c195-c19b, U+c19d-c19e, U+c1a0, U+c1a2-c1a4, U+c1a6-c1bb;
}
/* [35] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.35.woff2) format('woff2');
  unicode-range: U+c049-c057, U+c059-c05b, U+c05d-c05f, U+c061-c067, U+c069-c08f, U+c091-c0ab, U+c0ae-c0af, U+c0b1-c0b3, U+c0b5, U+c0b7-c0bb, U+c0be, U+c0c2-c0c7, U+c0ca-c0cb, U+c0cd-c0cf, U+c0d1-c0d7, U+c0d9-c0da, U+c0dc, U+c0de-c0e3, U+c0e5-c0eb, U+c0ed-c0f3, U+c0f6, U+c0f8, U+c0fa-c0ff;
}
/* [36] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.36.woff2) format('woff2');
  unicode-range: U+bfa7-bfaf, U+bfb1-bfc4, U+bfc6-bfcb, U+bfce-bfcf, U+bfd1-bfd3, U+bfd5-bfdb, U+bfdd-c048;
}
/* [37] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.37.woff2) format('woff2');
  unicode-range: U+bf07, U+bf09-bf3f, U+bf41-bf4f, U+bf52-bf54, U+bf56-bfa6;
}
/* [38] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.38.woff2) format('woff2');
  unicode-range: U+be56, U+be58, U+be5c-be5f, U+be62-be63, U+be65-be67, U+be69-be74, U+be76-be7b, U+be7e-be7f, U+be81-be8e, U+be90, U+be92-bea7, U+bea9-becf, U+bed2-bed3, U+bed5-bed6, U+bed9-bee3, U+bee6-bf06;
}
/* [39] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.39.woff2) format('woff2');
  unicode-range: U+bdb0-bdd3, U+bdd5-bdef, U+bdf1-be0b, U+be0d-be0f, U+be11-be13, U+be15-be43, U+be46-be47, U+be49-be4b, U+be4d-be53;
}
/* [40] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.40.woff2) format('woff2');
  unicode-range: U+bd03, U+bd06, U+bd08, U+bd0a-bd0f, U+bd11-bd22, U+bd25-bd47, U+bd49-bd58, U+bd5a-bd7f, U+bd82-bd83, U+bd85-bd87, U+bd8a-bd8f, U+bd91-bd92, U+bd94, U+bd96-bd98, U+bd9a-bdaf;
}
/* [41] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.41.woff2) format('woff2');
  unicode-range: U+bc4e-bc83, U+bc86-bc87, U+bc89-bc8b, U+bc8d-bc93, U+bc96, U+bc98, U+bc9b-bc9f, U+bca2-bca3, U+bca5-bca7, U+bca9-bcb2, U+bcb4-bcbb, U+bcbe-bcbf, U+bcc1-bcc3, U+bcc5-bccc, U+bcce-bcd0, U+bcd2-bcd4, U+bcd6-bcf3, U+bcf7, U+bcf9-bcfb, U+bcfd-bd02;
}
/* [42] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.42.woff2) format('woff2');
  unicode-range: U+bb90-bba3, U+bba5-bbab, U+bbad-bbbf, U+bbc1-bbf7, U+bbfa-bbfb, U+bbfd-bbfe, U+bc01-bc07, U+bc09-bc0a, U+bc0e, U+bc10, U+bc12-bc13, U+bc17, U+bc19-bc1a, U+bc1e, U+bc20-bc23, U+bc26, U+bc28, U+bc2a-bc2c, U+bc2e-bc2f, U+bc32-bc33, U+bc35-bc37, U+bc39-bc3f, U+bc41-bc42, U+bc44, U+bc46-bc48, U+bc4a-bc4d;
}
/* [43] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.43.woff2) format('woff2');
  unicode-range: U+bae6-bafb, U+bafd-bb17, U+bb19-bb33, U+bb37, U+bb39-bb3a, U+bb3d-bb43, U+bb45-bb46, U+bb48, U+bb4a-bb4f, U+bb51-bb53, U+bb55-bb57, U+bb59-bb62, U+bb64-bb8f;
}
/* [44] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.44.woff2) format('woff2');
  unicode-range: U+ba30-ba37, U+ba3a-ba3b, U+ba3d-ba3f, U+ba41-ba47, U+ba49-ba4a, U+ba4c, U+ba4e-ba53, U+ba56-ba57, U+ba59-ba5b, U+ba5d-ba63, U+ba65-ba66, U+ba68-ba6f, U+ba71-ba73, U+ba75-ba77, U+ba79-ba84, U+ba86, U+ba88-baa7, U+baaa, U+baad-baaf, U+bab1-bab7, U+baba, U+babc, U+babe-bae5;
}
/* [45] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.45.woff2) format('woff2');
  unicode-range: U+b96e-b973, U+b976-b977, U+b979-b97b, U+b97d-b983, U+b986, U+b988, U+b98a-b98d, U+b98f-b9ab, U+b9ae-b9af, U+b9b1-b9b3, U+b9b5-b9bb, U+b9be, U+b9c0, U+b9c2-b9c7, U+b9ca-b9cb, U+b9cd, U+b9d2-b9d7, U+b9da, U+b9dc, U+b9df-b9e0, U+b9e2, U+b9e6-b9e7, U+b9e9-b9f3, U+b9f6, U+b9f8, U+b9fb-ba2f;
}
/* [46] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.46.woff2) format('woff2');
  unicode-range: U+b8bf-b8cb, U+b8cd-b8e0, U+b8e2-b8e7, U+b8ea-b8eb, U+b8ed-b8ef, U+b8f1-b8f7, U+b8fa, U+b8fc, U+b8fe-b903, U+b905-b917, U+b919-b91f, U+b921-b93b, U+b93d-b957, U+b95a-b95b, U+b95d-b95f, U+b961-b967, U+b969-b96c;
}
/* [47] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.47.woff2) format('woff2');
  unicode-range: U+b80d-b80f, U+b811-b817, U+b81a, U+b81c-b823, U+b826-b827, U+b829-b82b, U+b82d-b833, U+b836, U+b83a-b83f, U+b841-b85b, U+b85e-b85f, U+b861-b863, U+b865-b86b, U+b86e, U+b870, U+b872-b8af, U+b8b1-b8be;
}
/* [48] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.48.woff2) format('woff2');
  unicode-range: U+b74d-b75f, U+b761-b763, U+b765-b774, U+b776-b77b, U+b77e-b77f, U+b781-b783, U+b785-b78b, U+b78e, U+b792-b796, U+b79a-b79b, U+b79d-b7a7, U+b7aa, U+b7ae-b7b3, U+b7b6-b7c8, U+b7ca-b7eb, U+b7ee-b7ef, U+b7f1-b7f3, U+b7f5-b7fb, U+b7fe, U+b802-b806, U+b80a-b80b;
}
/* [49] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.49.woff2) format('woff2');
  unicode-range: U+b6a7-b6aa, U+b6ac-b6b0, U+b6b2-b6ef, U+b6f1-b727, U+b72a-b72b, U+b72d-b72e, U+b731-b737, U+b739-b73a, U+b73c-b743, U+b745-b74c;
}
/* [50] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.50.woff2) format('woff2');
  unicode-range: U+b605-b60f, U+b612-b617, U+b619-b624, U+b626-b69b, U+b69e-b6a3, U+b6a5-b6a6;
}
/* [51] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.51.woff2) format('woff2');
  unicode-range: U+b55f, U+b562-b583, U+b585-b59f, U+b5a2-b5a3, U+b5a5-b5a7, U+b5a9-b5b2, U+b5b5-b5ba, U+b5bd-b604;
}
/* [52] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.52.woff2) format('woff2');
  unicode-range: U+b4a5-b4b6, U+b4b8-b4bf, U+b4c1-b4c7, U+b4c9-b4db, U+b4de-b4df, U+b4e1-b4e2, U+b4e5-b4eb, U+b4ee, U+b4f0, U+b4f2-b513, U+b516-b517, U+b519-b51a, U+b51d-b523, U+b526, U+b528, U+b52b-b52f, U+b532-b533, U+b535-b537, U+b539-b53f, U+b541-b544, U+b546-b54b, U+b54d-b54f, U+b551-b55b, U+b55d-b55e;
}
/* [53] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.53.woff2) format('woff2');
  unicode-range: U+b3f8-b3fb, U+b3fd-b40f, U+b411-b417, U+b419-b41b, U+b41d-b41f, U+b421-b427, U+b42a-b42b, U+b42d-b44f, U+b452-b453, U+b455-b457, U+b459-b45f, U+b462-b464, U+b466-b46b, U+b46d-b47f, U+b481-b4a3;
}
/* [54] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.54.woff2) format('woff2');
  unicode-range: U+b342-b353, U+b356-b357, U+b359-b35b, U+b35d-b35e, U+b360-b363, U+b366, U+b368, U+b36a-b36d, U+b36f, U+b372-b373, U+b375-b377, U+b379-b37f, U+b381-b382, U+b384, U+b386-b38b, U+b38d-b3c3, U+b3c6-b3c7, U+b3c9-b3ca, U+b3cd-b3d3, U+b3d6, U+b3d8, U+b3da-b3f7;
}
/* [55] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.55.woff2) format('woff2');
  unicode-range: U+b27c-b283, U+b285-b28f, U+b292-b293, U+b295-b297, U+b29a-b29f, U+b2a1-b2a4, U+b2a7-b2a9, U+b2ab, U+b2ad-b2c7, U+b2ca-b2cb, U+b2cd-b2cf, U+b2d1-b2d7, U+b2da, U+b2dc, U+b2de-b2e3, U+b2e7, U+b2e9-b2ea, U+b2ef-b2f3, U+b2f6, U+b2f8, U+b2fa-b2fb, U+b2fd-b2fe, U+b302-b303, U+b305-b307, U+b309-b30f, U+b312, U+b316-b31b, U+b31d-b341;
}
/* [56] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.56.woff2) format('woff2');
  unicode-range: U+b1d6-b1e7, U+b1e9-b1fc, U+b1fe-b203, U+b206-b207, U+b209-b20b, U+b20d-b213, U+b216-b21f, U+b221-b257, U+b259-b273, U+b275-b27b;
}
/* [57] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.57.woff2) format('woff2');
  unicode-range: U+b120-b122, U+b126-b127, U+b129-b12b, U+b12d-b133, U+b136, U+b138, U+b13a-b13f, U+b142-b143, U+b145-b14f, U+b151-b153, U+b156-b157, U+b159-b177, U+b17a-b17b, U+b17d-b17f, U+b181-b187, U+b189-b18c, U+b18e-b191, U+b195-b1a7, U+b1a9-b1cb, U+b1cd-b1d5;
}
/* [58] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.58.woff2) format('woff2');
  unicode-range: U+b05f-b07b, U+b07e-b07f, U+b081-b083, U+b085-b08b, U+b08d-b097, U+b09b, U+b09d-b09f, U+b0a2-b0a7, U+b0aa, U+b0b0, U+b0b2, U+b0b6-b0b7, U+b0b9-b0bb, U+b0bd-b0c3, U+b0c6-b0c7, U+b0ca-b0cf, U+b0d1-b0df, U+b0e1-b0e4, U+b0e6-b107, U+b10a-b10b, U+b10d-b10f, U+b111-b112, U+b114-b117, U+b119-b11a, U+b11c-b11f;
}
/* [59] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.59.woff2) format('woff2');
  unicode-range: U+afac-afb7, U+afba-afbb, U+afbd-afbf, U+afc1-afc6, U+afca-afcc, U+afce-afd3, U+afd5-afe7, U+afe9-afef, U+aff1-b00b, U+b00d-b00f, U+b011-b013, U+b015-b01b, U+b01d-b027, U+b029-b043, U+b045-b047, U+b049, U+b04b, U+b04d-b052, U+b055-b056, U+b058-b05c, U+b05e;
}
/* [60] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.60.woff2) format('woff2');
  unicode-range: U+af03-af07, U+af09-af2b, U+af2e-af33, U+af35-af3b, U+af3e-af40, U+af44-af47, U+af4a-af5c, U+af5e-af63, U+af65-af7f, U+af81-afab;
}
/* [61] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.61.woff2) format('woff2');
  unicode-range: U+ae56-ae5b, U+ae5e-ae60, U+ae62-ae64, U+ae66-ae67, U+ae69-ae6b, U+ae6d-ae83, U+ae85-aebb, U+aebf, U+aec1-aec3, U+aec5-aecb, U+aece, U+aed0, U+aed2-aed7, U+aed9-aef3, U+aef5-af02;
}
/* [62] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.62.woff2) format('woff2');
  unicode-range: U+ad9c-ada3, U+ada5-adbf, U+adc1-adc3, U+adc5-adc7, U+adc9-add2, U+add4-addb, U+addd-addf, U+ade1-ade3, U+ade5-adf7, U+adfa-adfb, U+adfd-adff, U+ae02-ae07, U+ae0a, U+ae0c, U+ae0e-ae13, U+ae15-ae2f, U+ae31-ae33, U+ae35-ae37, U+ae39-ae3f, U+ae42, U+ae44, U+ae46-ae49, U+ae4b, U+ae4f, U+ae51-ae53, U+ae55;
}
/* [63] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.63.woff2) format('woff2');
  unicode-range: U+ace2-ace3, U+ace5-ace6, U+ace9-acef, U+acf2, U+acf4, U+acf7-acfb, U+acfe-acff, U+ad01-ad03, U+ad05-ad0b, U+ad0d-ad10, U+ad12-ad1b, U+ad1d-ad33, U+ad35-ad48, U+ad4a-ad4f, U+ad51-ad6b, U+ad6e-ad6f, U+ad71-ad72, U+ad77-ad7c, U+ad7e, U+ad80, U+ad82-ad87, U+ad89-ad8b, U+ad8d-ad8f, U+ad91-ad9b;
}
/* [64] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.64.woff2) format('woff2');
  unicode-range: U+ac25-ac2c, U+ac2e, U+ac30, U+ac32-ac37, U+ac39-ac3f, U+ac41-ac4c, U+ac4e-ac6f, U+ac72-ac73, U+ac75-ac76, U+ac79-ac7f, U+ac82, U+ac84-ac88, U+ac8a-ac8b, U+ac8d-ac8f, U+ac91-ac93, U+ac95-ac9b, U+ac9d-ac9e, U+aca1-aca7, U+acab, U+acad-acaf, U+acb1-acb7, U+acba-acbb, U+acbe-acc0, U+acc2-acc3, U+acc5-acdf;
}
/* [65] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.65.woff2) format('woff2');
  unicode-range: U+99df, U+99ed, U+99f1, U+99ff, U+9a01, U+9a08, U+9a0e-9a0f, U+9a19, U+9a2b, U+9a30, U+9a36-9a37, U+9a40, U+9a43, U+9a45, U+9a4d, U+9a55, U+9a57, U+9a5a-9a5b, U+9a5f, U+9a62, U+9a65, U+9a69-9a6a, U+9aa8, U+9ab8, U+9ad3, U+9ae5, U+9aee, U+9b1a, U+9b27, U+9b2a, U+9b31, U+9b3c, U+9b41-9b45, U+9b4f, U+9b54, U+9b5a, U+9b6f, U+9b8e, U+9b91, U+9b9f, U+9bab, U+9bae, U+9bc9, U+9bd6, U+9be4, U+9be8, U+9c0d, U+9c10, U+9c12, U+9c15, U+9c25, U+9c32, U+9c3b, U+9c47, U+9c49, U+9c57, U+9ce5, U+9ce7, U+9ce9, U+9cf3-9cf4, U+9cf6, U+9d09, U+9d1b, U+9d26, U+9d28, U+9d3b, U+9d51, U+9d5d, U+9d60-9d61, U+9d6c, U+9d72, U+9da9, U+9daf, U+9db4, U+9dc4, U+9dd7, U+9df2, U+9df8-9dfa, U+9e1a, U+9e1e, U+9e75, U+9e79, U+9e7d, U+9e7f, U+9e92-9e93, U+9e97, U+9e9d, U+9e9f, U+9ea5, U+9eb4-9eb5, U+9ebb, U+9ebe, U+9ec3, U+9ecd-9ece, U+9ed4, U+9ed8, U+9edb-9edc, U+9ede, U+9ee8, U+9ef4, U+9f07-9f08, U+9f0e, U+9f13, U+9f20, U+9f3b, U+9f4a-9f4b, U+9f4e, U+9f52, U+9f5f, U+9f61, U+9f67, U+9f6a, U+9f6c, U+9f77, U+9f8d, U+9f90, U+9f95, U+9f9c, U+ac02-ac03, U+ac05-ac06, U+ac09-ac0f, U+ac17-ac18, U+ac1b, U+ac1e-ac1f, U+ac21-ac23;
}
/* [66] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.66.woff2) format('woff2');
  unicode-range: U+96a7-96a8, U+96aa, U+96b1, U+96b7, U+96bb, U+96c0-96c1, U+96c4-96c5, U+96c7, U+96c9, U+96cb-96ce, U+96d5-96d6, U+96d9, U+96db-96dc, U+96e2-96e3, U+96e8-96ea, U+96ef-96f0, U+96f2, U+96f6-96f7, U+96f9, U+96fb, U+9700, U+9706-9707, U+9711, U+9713, U+9716, U+9719, U+971c, U+971e, U+9727, U+9730, U+9732, U+9739, U+973d, U+9742, U+9744, U+9748, U+9756, U+975c, U+9761, U+9769, U+976d, U+9774, U+9777, U+977a, U+978b, U+978d, U+978f, U+97a0, U+97a8, U+97ab, U+97ad, U+97c6, U+97cb, U+97dc, U+97f6, U+97fb, U+97ff-9803, U+9805-9806, U+9808, U+980a, U+980c, U+9810-9813, U+9817-9818, U+982d, U+9830, U+9838-9839, U+983b, U+9846, U+984c-984e, U+9854, U+9858, U+985a, U+985e, U+9865, U+9867, U+986b, U+986f, U+98af, U+98b1, U+98c4, U+98c7, U+98db-98dc, U+98e1-98e2, U+98ed-98ef, U+98f4, U+98fc-98fe, U+9903, U+9909-990a, U+990c, U+9910, U+9913, U+9918, U+991e, U+9920, U+9928, U+9945, U+9949, U+994b-994d, U+9951-9952, U+9954, U+9957, U+9996, U+999d, U+99a5, U+99a8, U+99ac-99ae, U+99b1, U+99b3-99b4, U+99b9, U+99c1, U+99d0-99d2, U+99d5, U+99d9, U+99dd;
}
/* [67] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.67.woff2) format('woff2');
  unicode-range: U+920d, U+9210-9212, U+9217, U+921e, U+9234, U+923a, U+923f-9240, U+9245, U+9249, U+9257, U+925b, U+925e, U+9262, U+9264-9266, U+9283, U+9285, U+9291, U+9293, U+9296, U+9298, U+929c, U+92b3, U+92b6-92b7, U+92b9, U+92cc, U+92cf, U+92d2, U+92e4, U+92ea, U+92f8, U+92fc, U+9304, U+9310, U+9318, U+931a, U+931e-9322, U+9324, U+9326, U+9328, U+932b, U+932e-932f, U+9348, U+934a-934b, U+934d, U+9354, U+935b, U+936e, U+9375, U+937c, U+937e, U+938c, U+9394, U+9396, U+939a, U+93a3, U+93a7, U+93ac-93ad, U+93b0, U+93c3, U+93d1, U+93de, U+93e1, U+93e4, U+93f6, U+9404, U+9418, U+9425, U+942b, U+9435, U+9438, U+9444, U+9451-9452, U+945b, U+947d, U+947f, U+9583, U+9589, U+958f, U+9591-9592, U+9594, U+9598, U+95a3-95a5, U+95a8, U+95ad, U+95b1, U+95bb-95bc, U+95c7, U+95ca, U+95d4-95d6, U+95dc, U+95e1-95e2, U+961c, U+9621, U+962a, U+962e, U+9632, U+963b, U+963f-9640, U+9642, U+9644, U+964b-964d, U+9650, U+965b-965f, U+9662-9664, U+966a, U+9670, U+9673, U+9675-9678, U+967d, U+9685-9686, U+968a-968b, U+968d-968e, U+9694-9695, U+9698-9699, U+969b-969c, U+96a3;
}
/* [68] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.68.woff2) format('woff2');
  unicode-range: U+8fa8, U+8fad, U+8faf-8fb2, U+8fc2, U+8fc5, U+8fce, U+8fd4, U+8fe6, U+8fea-8feb, U+8fed, U+8ff0, U+8ff2, U+8ff7, U+8ff9, U+8ffd, U+9000-9003, U+9005-9006, U+9008, U+900b, U+900d, U+900f-9011, U+9014-9015, U+9017, U+9019, U+901d-9023, U+902e, U+9031-9032, U+9035, U+9038, U+903c, U+903e, U+9041-9042, U+9047, U+904a-904b, U+904d-904e, U+9050-9051, U+9054-9055, U+9059, U+905c-905e, U+9060-9061, U+9063, U+9069, U+906d-906f, U+9072, U+9075, U+9077-9078, U+907a, U+907c-907d, U+907f-9084, U+9087-9088, U+908a, U+908f, U+9091, U+9095, U+9099, U+90a2-90a3, U+90a6, U+90a8, U+90aa, U+90af-90b1, U+90b5, U+90b8, U+90c1, U+90ca, U+90de, U+90e1, U+90ed, U+90f5, U+9102, U+9112, U+9115, U+9119, U+9127, U+912d, U+9132, U+9149-914e, U+9152, U+9162, U+9169-916a, U+916c, U+9175, U+9177-9178, U+9187, U+9189, U+918b, U+918d, U+9192, U+919c, U+91ab-91ac, U+91ae-91af, U+91b1, U+91b4-91b5, U+91c0, U+91c7, U+91c9, U+91cb, U+91cf-91d0, U+91d7-91d8, U+91dc-91dd, U+91e3, U+91e7, U+91ea, U+91f5;
}
/* [69] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.69.woff2) format('woff2');
  unicode-range: U+8c6a-8c6b, U+8c79-8c7a, U+8c82, U+8c8a, U+8c8c, U+8c9d-8c9e, U+8ca0-8ca2, U+8ca7-8cac, U+8caf-8cb0, U+8cb3-8cb4, U+8cb6-8cb8, U+8cbb-8cbd, U+8cbf-8cc4, U+8cc7-8cc8, U+8cca, U+8cd1, U+8cd3, U+8cda, U+8cdc, U+8cde, U+8ce0, U+8ce2-8ce4, U+8ce6, U+8cea, U+8ced, U+8cf4, U+8cfb-8cfd, U+8d04-8d05, U+8d07-8d08, U+8d0a, U+8d0d, U+8d13, U+8d16, U+8d64, U+8d66, U+8d6b, U+8d70, U+8d73-8d74, U+8d77, U+8d85, U+8d8a, U+8d99, U+8da3, U+8da8, U+8db3, U+8dba, U+8dbe, U+8dc6, U+8dcb-8dcc, U+8dcf, U+8ddb, U+8ddd, U+8de1, U+8de3, U+8de8, U+8df3, U+8e0a, U+8e0f-8e10, U+8e1e, U+8e2a, U+8e30, U+8e35, U+8e42, U+8e44, U+8e47-8e4a, U+8e59, U+8e5f-8e60, U+8e74, U+8e76, U+8e81, U+8e87, U+8e8a, U+8e8d, U+8eaa-8eac, U+8ec0, U+8ecb-8ecc, U+8ed2, U+8edf, U+8eeb, U+8ef8, U+8efb, U+8efe, U+8f03, U+8f05, U+8f09, U+8f12-8f15, U+8f1b-8f1f, U+8f26-8f27, U+8f29-8f2a, U+8f2f, U+8f33, U+8f38-8f39, U+8f3b, U+8f3e-8f3f, U+8f44-8f45, U+8f49, U+8f4d-8f4e, U+8f5d, U+8f5f, U+8f62, U+8f9b-8f9c, U+8fa3, U+8fa6;
}
/* [70] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.70.woff2) format('woff2');
  unicode-range: U+8941, U+8944, U+895f, U+8964, U+896a, U+8972, U+8981, U+8983, U+8986-8987, U+898f, U+8993, U+8996, U+89a1, U+89a9-89aa, U+89b2, U+89ba, U+89bd, U+89c0, U+89d2, U+89e3, U+89f4, U+89f8, U+8a02-8a03, U+8a08, U+8a0a, U+8a0c, U+8a0e, U+8a13, U+8a16-8a17, U+8a1b, U+8a1d, U+8a1f, U+8a23, U+8a25, U+8a2a, U+8a2d, U+8a31, U+8a34, U+8a36, U+8a3a-8a3b, U+8a50, U+8a54-8a55, U+8a5b, U+8a5e, U+8a60, U+8a62-8a63, U+8a66, U+8a6d-8a6e, U+8a70, U+8a72-8a73, U+8a75, U+8a79, U+8a85, U+8a87, U+8a8c-8a8d, U+8a93, U+8a95, U+8a98, U+8aa0-8aa1, U+8aa3-8aa6, U+8aa8, U+8aaa, U+8ab0, U+8ab2, U+8ab9, U+8abc, U+8abe-8abf, U+8ac2, U+8ac4, U+8ac7, U+8acb, U+8acd, U+8acf, U+8ad2, U+8ad6, U+8adb-8adc, U+8ae1, U+8ae6-8ae7, U+8aea-8aeb, U+8aed-8aee, U+8af1, U+8af6-8af8, U+8afa, U+8afe, U+8b00-8b02, U+8b04, U+8b0e, U+8b10, U+8b14, U+8b16-8b17, U+8b19-8b1b, U+8b1d, U+8b20, U+8b28, U+8b2b-8b2c, U+8b33, U+8b39, U+8b41, U+8b49, U+8b4e-8b4f, U+8b58, U+8b5a, U+8b5c, U+8b66, U+8b6c, U+8b6f-8b70, U+8b74, U+8b77, U+8b7d, U+8b80, U+8b8a, U+8b90, U+8b92-8b93, U+8b96, U+8b9a, U+8c37, U+8c3f, U+8c41, U+8c46, U+8c48, U+8c4a, U+8c4c, U+8c55, U+8c5a, U+8c61;
}
/* [71] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.71.woff2) format('woff2');
  unicode-range: U+858f, U+8591, U+8594, U+859b, U+85a6, U+85a8-85aa, U+85af-85b0, U+85ba, U+85c1, U+85c9, U+85cd-85cf, U+85d5, U+85dc-85dd, U+85e4-85e5, U+85e9-85ea, U+85f7, U+85fa-85fb, U+85ff, U+8602, U+8606-8607, U+860a, U+8616-8617, U+861a, U+862d, U+863f, U+864e, U+8650, U+8654-8655, U+865b-865c, U+865e-865f, U+8667, U+8679, U+868a, U+868c, U+8693, U+86a3-86a4, U+86a9, U+86c7, U+86cb, U+86d4, U+86d9, U+86db, U+86df, U+86e4, U+86ed, U+86fe, U+8700, U+8702-8703, U+8708, U+8718, U+871a, U+871c, U+874e, U+8755, U+8757, U+875f, U+8766, U+8768, U+8774, U+8776, U+8778, U+8782, U+878d, U+879f, U+87a2, U+87b3, U+87ba, U+87c4, U+87e0, U+87ec, U+87ef, U+87f2, U+87f9, U+87fb, U+87fe, U+8805, U+881f, U+8822-8823, U+8831, U+8836, U+883b, U+8840, U+8846, U+884d, U+8852-8853, U+8857, U+8859, U+885b, U+885d, U+8861-8863, U+8868, U+886b, U+8870, U+8872, U+8877, U+887e-887f, U+8881-8882, U+8888, U+888b, U+888d, U+8892, U+8896-8897, U+889e, U+88ab, U+88b4, U+88c1-88c2, U+88cf, U+88d4-88d5, U+88d9, U+88dc-88dd, U+88df, U+88e1, U+88e8, U+88f3-88f5, U+88f8, U+88fd, U+8907, U+8910, U+8912-8913, U+8918-8919, U+8925, U+892a, U+8936, U+8938, U+893b;
}
/* [72] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.72.woff2) format('woff2');
  unicode-range: U+82a6, U+82a9, U+82ac-82af, U+82b3, U+82b7-82b9, U+82bb-82bd, U+82bf, U+82d1-82d2, U+82d4-82d5, U+82d7, U+82db, U+82de-82df, U+82e1, U+82e5-82e7, U+82fd-82fe, U+8301-8305, U+8309, U+8317, U+8328, U+832b, U+832f, U+8331, U+8334-8336, U+8338-8339, U+8340, U+8347, U+8349-834a, U+834f, U+8351-8352, U+8373, U+8377, U+837b, U+8389-838a, U+838e, U+8396, U+8398, U+839e, U+83a2, U+83a9-83ab, U+83bd, U+83c1, U+83c5, U+83c9-83ca, U+83cc, U+83d3, U+83d6, U+83dc, U+83e9, U+83eb, U+83ef-83f2, U+83f4, U+83f9, U+83fd, U+8403-8404, U+840a, U+840c-840e, U+8429, U+842c, U+8431, U+8438, U+843d, U+8449, U+8457, U+845b, U+8461, U+8463, U+8466, U+846b-846c, U+846f, U+8475, U+847a, U+8490, U+8494, U+8499, U+849c, U+84a1, U+84b2, U+84b8, U+84bb-84bc, U+84bf-84c0, U+84c2, U+84c4, U+84c6, U+84c9, U+84cb, U+84cd, U+84d1, U+84da, U+84ec, U+84ee, U+84f4, U+84fc, U+8511, U+8513-8514, U+8517-8518, U+851a, U+851e, U+8521, U+8523, U+8525, U+852c-852d, U+852f, U+853d, U+853f, U+8541, U+8543, U+8549, U+854e, U+8553, U+8559, U+8563, U+8568-856a, U+856d, U+8584, U+8587;
}
/* [73] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.73.woff2) format('woff2');
  unicode-range: U+8033, U+8036, U+803d, U+803f, U+8043, U+8046, U+804a, U+8056, U+8058, U+805a, U+805e, U+806f-8070, U+8072-8073, U+8077, U+807d-807f, U+8084-8087, U+8089, U+808b-808c, U+8096, U+809b, U+809d, U+80a1-80a2, U+80a5, U+80a9-80aa, U+80af, U+80b1-80b2, U+80b4, U+80ba, U+80c3-80c4, U+80cc, U+80ce, U+80da-80db, U+80de, U+80e1, U+80e4-80e5, U+80f1, U+80f4, U+80f8, U+80fd, U+8102, U+8105-8108, U+810a, U+8118, U+811a-811b, U+8123, U+8129, U+812b, U+812f, U+8139, U+813e, U+814b, U+814e, U+8150-8151, U+8154-8155, U+8165-8166, U+816b, U+8170-8171, U+8178-817a, U+817f-8180, U+8188, U+818a, U+818f, U+819a, U+819c-819d, U+81a0, U+81a3, U+81a8, U+81b3, U+81b5, U+81ba, U+81bd-81c0, U+81c2, U+81c6, U+81cd, U+81d8, U+81df, U+81e3, U+81e5, U+81e7-81e8, U+81ed, U+81f3-81f4, U+81fa-81fc, U+81fe, U+8205, U+8208, U+820a, U+820c-820d, U+8212, U+821b-821c, U+821e-821f, U+8221, U+822a-822c, U+8235-8237, U+8239, U+8240, U+8245, U+8247, U+8259, U+8264, U+8266, U+826e-826f, U+8271, U+8276, U+8278, U+827e, U+828b, U+828d-828e, U+8292, U+8299-829a, U+829d, U+829f, U+82a5;
}
/* [74] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.74.woff2) format('woff2');
  unicode-range: U+7d2f-7d30, U+7d33, U+7d35, U+7d39-7d3a, U+7d42-7d46, U+7d50, U+7d5e, U+7d61-7d62, U+7d66, U+7d68, U+7d6a, U+7d6e, U+7d71-7d73, U+7d76, U+7d79, U+7d7f, U+7d8e-7d8f, U+7d93, U+7d9c, U+7da0, U+7da2, U+7dac-7dad, U+7db1-7db2, U+7db4-7db5, U+7db8, U+7dba-7dbb, U+7dbd-7dbf, U+7dc7, U+7dca-7dcb, U+7dd6, U+7dd8, U+7dda, U+7ddd-7dde, U+7de0-7de1, U+7de3, U+7de8-7de9, U+7dec, U+7def, U+7df4, U+7dfb, U+7e09-7e0a, U+7e15, U+7e1b, U+7e1d-7e1f, U+7e21, U+7e23, U+7e2b, U+7e2e-7e2f, U+7e31, U+7e37, U+7e3d-7e3e, U+7e43, U+7e46-7e47, U+7e52, U+7e54-7e55, U+7e5e, U+7e61, U+7e69-7e6b, U+7e6d, U+7e70, U+7e79, U+7e7c, U+7e82, U+7e8c, U+7e8f, U+7e93, U+7e96, U+7e98, U+7e9b-7e9c, U+7f36, U+7f38, U+7f3a, U+7f4c, U+7f50, U+7f54-7f55, U+7f6a-7f6b, U+7f6e, U+7f70, U+7f72, U+7f75, U+7f77, U+7f79, U+7f85, U+7f88, U+7f8a, U+7f8c, U+7f94, U+7f9a, U+7f9e, U+7fa4, U+7fa8-7fa9, U+7fb2, U+7fb8-7fb9, U+7fbd, U+7fc1, U+7fc5, U+7fca, U+7fcc, U+7fce, U+7fd2, U+7fd4-7fd5, U+7fdf-7fe1, U+7fe9, U+7feb, U+7ff0, U+7ff9, U+7ffc, U+8000-8001, U+8003, U+8006, U+8009, U+800c, U+8010, U+8015, U+8017-8018, U+802d;
}
/* [75] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.75.woff2) format('woff2');
  unicode-range: U+7a49, U+7a4d-7a4e, U+7a57, U+7a61-7a62, U+7a69, U+7a6b, U+7a70, U+7a74, U+7a76, U+7a79, U+7a7d, U+7a7f, U+7a81, U+7a84, U+7a88, U+7a92-7a93, U+7a95, U+7a98, U+7a9f, U+7aa9-7aaa, U+7aae-7aaf, U+7aba, U+7ac4-7ac5, U+7ac7, U+7aca, U+7ad7, U+7ad9, U+7add, U+7adf-7ae0, U+7ae3, U+7ae5, U+7aea, U+7aed, U+7aef, U+7af6, U+7af9-7afa, U+7aff, U+7b0f, U+7b11, U+7b19, U+7b1b, U+7b1e, U+7b20, U+7b26, U+7b2d, U+7b39, U+7b46, U+7b49, U+7b4b-7b4d, U+7b4f-7b52, U+7b54, U+7b56, U+7b60, U+7b6c, U+7b6e, U+7b75, U+7b7d, U+7b87, U+7b8b, U+7b8f, U+7b94-7b95, U+7b97, U+7b9a, U+7b9d, U+7ba1, U+7bad, U+7bb1, U+7bb4, U+7bb8, U+7bc0-7bc1, U+7bc4, U+7bc6-7bc7, U+7bc9, U+7bd2, U+7be0, U+7be4, U+7be9, U+7c07, U+7c12, U+7c1e, U+7c21, U+7c27, U+7c2a-7c2b, U+7c3d-7c3f, U+7c43, U+7c4c-7c4d, U+7c60, U+7c64, U+7c6c, U+7c73, U+7c83, U+7c89, U+7c92, U+7c95, U+7c97-7c98, U+7c9f, U+7ca5, U+7ca7, U+7cae, U+7cb1-7cb3, U+7cb9, U+7cbe, U+7cca, U+7cd6, U+7cde-7ce0, U+7ce7, U+7cfb, U+7cfe, U+7d00, U+7d02, U+7d04-7d08, U+7d0a-7d0b, U+7d0d, U+7d10, U+7d14, U+7d17-7d1b, U+7d20-7d21, U+7d2b-7d2c, U+7d2e;
}
/* [76] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.76.woff2) format('woff2');
  unicode-range: U+7704, U+7708-7709, U+770b, U+771e, U+7720, U+7729, U+7737-7738, U+773a, U+773c, U+7740, U+774d, U+775b, U+7761, U+7763, U+7766, U+776b, U+7779, U+777e-777f, U+778b, U+7791, U+779e, U+77a5, U+77ac-77ad, U+77b0, U+77b3, U+77bb-77bc, U+77bf, U+77d7, U+77db-77dc, U+77e2-77e3, U+77e9, U+77ed-77ef, U+7802, U+7812, U+7825-7827, U+782c, U+7832, U+7834, U+7845, U+784f, U+785d, U+786b-786c, U+786f, U+787c, U+7881, U+7887, U+788c-788e, U+7891, U+7897, U+78a3, U+78a7, U+78a9, U+78ba-78bc, U+78c1, U+78c5, U+78ca-78cb, U+78ce, U+78d0, U+78e8, U+78ec, U+78ef, U+78f5, U+78fb, U+7901, U+790e, U+7916, U+792a-792c, U+793a, U+7940-7941, U+7947-7949, U+7950, U+7956-7957, U+795a-795d, U+7960, U+7965, U+7968, U+796d, U+797a, U+797f, U+7981, U+798d-798e, U+7991, U+79a6-79a7, U+79aa, U+79ae, U+79b1, U+79b3, U+79b9, U+79bd-79c1, U+79c9-79cb, U+79d2, U+79d5, U+79d8, U+79df, U+79e4, U+79e6-79e7, U+79e9, U+79fb, U+7a00, U+7a05, U+7a08, U+7a0b, U+7a0d, U+7a14, U+7a17, U+7a19-7a1a, U+7a1c, U+7a1f-7a20, U+7a2e, U+7a31, U+7a36-7a37, U+7a3b-7a3d, U+7a3f-7a40, U+7a46;
}
/* [77] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.77.woff2) format('woff2');
  unicode-range: U+7482-7483, U+7487, U+7489, U+748b, U+7498, U+749c, U+749e-749f, U+74a1, U+74a3, U+74a5, U+74a7-74a8, U+74aa, U+74b0, U+74b2, U+74b5, U+74b9, U+74bd, U+74bf, U+74c6, U+74ca, U+74cf, U+74d4, U+74d8, U+74da, U+74dc, U+74e0, U+74e2-74e3, U+74e6, U+74ee, U+74f7, U+7501, U+7504, U+7511, U+7515, U+7518, U+751a-751b, U+7523, U+7525-7526, U+752b-752c, U+7531, U+7533, U+7538, U+753a, U+7547, U+754c, U+754f, U+7551, U+7553-7554, U+7559, U+755b-755d, U+7562, U+7565-7566, U+756a, U+756f-7570, U+7575-7576, U+7578, U+757a, U+757f, U+7586-7587, U+758a-758b, U+758e-758f, U+7591, U+759d, U+75a5, U+75ab, U+75b1-75b3, U+75b5, U+75b8-75b9, U+75bc-75be, U+75c2, U+75c5, U+75c7, U+75cd, U+75d2, U+75d4-75d5, U+75d8-75d9, U+75db, U+75e2, U+75f0, U+75f2, U+75f4, U+75fa, U+75fc, U+7600, U+760d, U+7619, U+761f-7622, U+7624, U+7626, U+763b, U+7642, U+764c, U+764e, U+7652, U+7656, U+7661, U+7664, U+7669, U+766c, U+7670, U+7672, U+7678, U+7686-7687, U+768e, U+7690, U+7693, U+76ae, U+76ba, U+76bf, U+76c2-76c3, U+76c6, U+76c8, U+76ca, U+76d2, U+76d6, U+76db-76dc, U+76de-76df, U+76e1, U+76e3-76e4, U+76e7, U+76f2, U+76fc, U+76fe, U+7701;
}
/* [78] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.78.woff2) format('woff2');
  unicode-range: U+7230, U+7232, U+7235, U+723a-723b, U+723d-723e, U+7240, U+7246-7248, U+724c, U+7252, U+7258-7259, U+725b, U+725d, U+725f, U+7261-7262, U+7267, U+7272, U+727d, U+7280-7281, U+72a2, U+72a7, U+72ac, U+72af, U+72c0, U+72c2, U+72c4, U+72ce, U+72d0, U+72d7, U+72d9, U+72e1, U+72e9, U+72f8-72f9, U+72fc-72fd, U+730a, U+7316, U+731b-731d, U+7325, U+7329-732b, U+7336-7337, U+733e-733f, U+7344-7345, U+7350, U+7352, U+7357, U+7368, U+736a, U+7370, U+7372, U+7375, U+7378, U+737a-737b, U+7384, U+7386-7387, U+7389, U+738e, U+7394, U+7396-7398, U+739f, U+73a7, U+73a9, U+73ad, U+73b2-73b3, U+73b9, U+73c0, U+73c2, U+73c9-73ca, U+73cc-73cd, U+73cf, U+73d6, U+73d9, U+73dd-73de, U+73e0, U+73e3-73e6, U+73e9-73ea, U+73ed, U+73f7, U+73f9, U+73fd-73fe, U+7401, U+7403, U+7405, U+7407, U+7409, U+7413, U+741b, U+7420-7422, U+7425-7426, U+7428, U+742a-742c, U+742e-7430, U+7433-7436, U+7438, U+743a, U+743f-7441, U+7443-7444, U+744b, U+7455, U+7457, U+7459-745c, U+745e-7460, U+7462, U+7464-7465, U+7468-746a, U+746f, U+747e;
}
/* [79] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.79.woff2) format('woff2');
  unicode-range: U+6f8d-6f8e, U+6f90, U+6f94, U+6f97, U+6fa3-6fa4, U+6fa7, U+6fae-6faf, U+6fb1, U+6fb3, U+6fb9, U+6fbe, U+6fc0-6fc3, U+6fca, U+6fd5, U+6fda, U+6fdf-6fe1, U+6fe4, U+6fe9, U+6feb-6fec, U+6fef, U+6ff1, U+6ffe, U+7001, U+7005-7006, U+7009, U+700b, U+700f, U+7011, U+7015, U+7018, U+701a-701f, U+7023, U+7027-7028, U+702f, U+7037, U+703e, U+704c, U+7050-7051, U+7058, U+705d, U+7070, U+7078, U+707c-707d, U+7085, U+708a, U+708e, U+7092, U+7098-709a, U+70a1, U+70a4, U+70ab-70ad, U+70af, U+70b3, U+70b7-70b9, U+70c8, U+70cb, U+70cf, U+70d8-70d9, U+70dd, U+70df, U+70f1, U+70f9, U+70fd, U+7104, U+7109, U+710c, U+7119-711a, U+711e, U+7126, U+7130, U+7136, U+7147, U+7149-714a, U+714c, U+714e, U+7150, U+7156, U+7159, U+715c, U+715e, U+7164-7167, U+7169, U+716c, U+716e, U+717d, U+7184, U+7189-718a, U+718f, U+7192, U+7194, U+7199, U+719f, U+71a2, U+71ac, U+71b1, U+71b9-71ba, U+71be, U+71c1, U+71c3, U+71c8-71c9, U+71ce, U+71d0, U+71d2, U+71d4-71d5, U+71df, U+71e5-71e7, U+71ed-71ee, U+71fb-71fc, U+71fe-7200, U+7206, U+7210, U+721b, U+722a, U+722c-722d;
}
/* [80] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.80.woff2) format('woff2');
  unicode-range: U+6d5a, U+6d5c, U+6d63, U+6d66, U+6d69-6d6a, U+6d6c, U+6d6e, U+6d74, U+6d78-6d79, U+6d7f, U+6d85, U+6d87-6d89, U+6d8c-6d8e, U+6d91, U+6d93, U+6d95, U+6daf, U+6db2, U+6db5, U+6dc0, U+6dc3-6dc7, U+6dcb, U+6dcf, U+6dd1, U+6dd8-6dda, U+6dde, U+6de1, U+6de8, U+6dea-6deb, U+6dee, U+6df1, U+6df3, U+6df5, U+6df7-6dfb, U+6e17, U+6e19-6e1b, U+6e1f-6e21, U+6e23-6e26, U+6e2b-6e2d, U+6e32, U+6e34, U+6e36, U+6e38, U+6e3a, U+6e3c-6e3e, U+6e43-6e44, U+6e4a, U+6e4d, U+6e56, U+6e58, U+6e5b-6e5c, U+6e5e-6e5f, U+6e67, U+6e6b, U+6e6e-6e6f, U+6e72-6e73, U+6e7a, U+6e90, U+6e96, U+6e9c-6e9d, U+6e9f, U+6ea2, U+6ea5, U+6eaa-6eab, U+6eaf, U+6eb1, U+6eb6, U+6eba, U+6ec2, U+6ec4-6ec5, U+6ec9, U+6ecb-6ecc, U+6ece, U+6ed1, U+6ed3-6ed4, U+6eef, U+6ef4, U+6ef8, U+6efe-6eff, U+6f01-6f02, U+6f06, U+6f0f, U+6f11, U+6f14-6f15, U+6f20, U+6f22-6f23, U+6f2b-6f2c, U+6f31-6f32, U+6f38, U+6f3f, U+6f41, U+6f51, U+6f54, U+6f57-6f58, U+6f5a-6f5b, U+6f5e-6f5f, U+6f62, U+6f64, U+6f6d-6f6e, U+6f70, U+6f7a, U+6f7c-6f7e, U+6f81, U+6f84, U+6f88;
}
/* [81] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.81.woff2) format('woff2');
  unicode-range: U+6ada-6adb, U+6af6, U+6afb, U+6b04, U+6b0a, U+6b0c, U+6b12, U+6b16, U+6b20-6b21, U+6b23, U+6b32, U+6b3a, U+6b3d-6b3e, U+6b46-6b47, U+6b4e, U+6b50, U+6b5f, U+6b61-6b62, U+6b64-6b66, U+6b6a, U+6b72, U+6b77-6b78, U+6b7b, U+6b7f, U+6b83-6b84, U+6b86, U+6b89-6b8a, U+6b96, U+6b98, U+6b9e, U+6bae-6baf, U+6bb2, U+6bb5, U+6bb7, U+6bba, U+6bbc, U+6bbf, U+6bc1, U+6bc5-6bc6, U+6bcb, U+6bcf, U+6bd2-6bd3, U+6bd6-6bd8, U+6bdb, U+6beb-6bec, U+6c08, U+6c0f, U+6c13, U+6c23, U+6c37-6c38, U+6c3e, U+6c40-6c42, U+6c4e, U+6c50, U+6c55, U+6c57, U+6c5a, U+6c5d-6c60, U+6c68, U+6c6a, U+6c6d, U+6c70, U+6c72, U+6c76, U+6c7a, U+6c7d-6c7e, U+6c81-6c83, U+6c85-6c88, U+6c8c, U+6c90, U+6c92-6c96, U+6c99-6c9b, U+6cab, U+6cae, U+6cb3, U+6cb8-6cb9, U+6cbb-6cbf, U+6cc1-6cc2, U+6cc4, U+6cc9-6cca, U+6ccc, U+6cd3, U+6cd7, U+6cdb, U+6ce1-6ce3, U+6ce5, U+6ce8, U+6ceb, U+6cee-6cf0, U+6cf3, U+6d0b-6d0c, U+6d11, U+6d17, U+6d19, U+6d1b, U+6d1e, U+6d25, U+6d27, U+6d29, U+6d32, U+6d35-6d36, U+6d38-6d39, U+6d3b, U+6d3d-6d3e, U+6d41, U+6d59;
}
/* [82] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.82.woff2) format('woff2');
  unicode-range: U+67f0-67f1, U+67f3-67f6, U+67fb, U+67fe, U+6812-6813, U+6816-6817, U+6821-6822, U+682f, U+6838-6839, U+683d, U+6840-6843, U+6848, U+684e, U+6850-6851, U+6853-6854, U+686d, U+6876, U+687f, U+6881, U+6885, U+688f, U+6893-6894, U+6897, U+689d, U+689f, U+68a1-68a2, U+68a7-68a8, U+68ad, U+68af-68b1, U+68b3, U+68b5-68b6, U+68c4-68c5, U+68c9, U+68cb, U+68cd, U+68d2, U+68d5, U+68d7-68d8, U+68da, U+68df-68e0, U+68e7-68e8, U+68ee, U+68f2, U+68f9-68fa, U+6900, U+6905, U+690d-690e, U+6912, U+6927, U+6930, U+693d, U+693f, U+694a, U+6953-6955, U+6957, U+6959-695a, U+695e, U+6960-6963, U+6968, U+696b, U+696d-696f, U+6975, U+6977-6979, U+6995, U+699b-699c, U+69a5, U+69a7, U+69ae, U+69b4, U+69bb, U+69c1, U+69c3, U+69cb-69cd, U+69d0, U+69e8, U+69ea, U+69fb, U+69fd, U+69ff, U+6a02, U+6a0a, U+6a11, U+6a13, U+6a17, U+6a19, U+6a1e-6a1f, U+6a21, U+6a23, U+6a35, U+6a38-6a3a, U+6a3d, U+6a44, U+6a48, U+6a4b, U+6a52-6a53, U+6a58-6a59, U+6a5f, U+6a61, U+6a6b, U+6a80, U+6a84, U+6a89, U+6a8d-6a8e, U+6a97, U+6a9c, U+6aa3, U+6ab3, U+6abb, U+6ac2-6ac3, U+6ad3;
}
/* [83] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.83.woff2) format('woff2');
  unicode-range: U+6607, U+6609-660a, U+660c, U+660f-6611, U+6613-6615, U+661e, U+6620, U+6627-6628, U+662d, U+6630-6631, U+6634, U+6636, U+663a-663b, U+6641, U+6643-6644, U+6649, U+664b, U+664f, U+6659, U+665b, U+665d-665f, U+6664-6669, U+666b, U+666e-666f, U+6673-6674, U+6676-6678, U+6684, U+6687-6689, U+668e, U+6690-6691, U+6696-6698, U+669d, U+66a0, U+66a2, U+66ab, U+66ae, U+66b2-66b4, U+66b9, U+66bb, U+66be, U+66c4, U+66c6-66c7, U+66c9, U+66d6, U+66d9, U+66dc-66dd, U+66e0, U+66e6, U+66f0, U+66f2-66f4, U+66f7, U+66f9-66fa, U+66fc, U+66fe-66ff, U+6703, U+670b, U+670d, U+6714-6715, U+6717, U+671b, U+671d-671f, U+6726-6727, U+672a-672b, U+672d-672e, U+6731, U+6736, U+673a, U+673d, U+6746, U+6749, U+674e-6751, U+6753, U+6756, U+675c, U+675e-675f, U+676d, U+676f-6770, U+6773, U+6775, U+6777, U+677b, U+677e-677f, U+6787, U+6789, U+678b, U+678f-6790, U+6793, U+6795, U+679a, U+679d, U+67af-67b0, U+67b3, U+67b6-67b8, U+67be, U+67c4, U+67cf-67d4, U+67da, U+67dd, U+67e9, U+67ec, U+67ef;
}
/* [84] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.84.woff2) format('woff2');
  unicode-range: U+6392, U+6396, U+6398, U+639b, U+63a0-63a2, U+63a5, U+63a7-63aa, U+63c0, U+63c4, U+63c6, U+63cf, U+63d6, U+63da-63db, U+63e1, U+63ed-63ee, U+63f4, U+63f6-63f7, U+640d, U+640f, U+6414, U+6416-6417, U+641c, U+6422, U+642c-642d, U+643a, U+643e, U+6458, U+6460, U+6469, U+646f, U+6478-647a, U+6488, U+6491-6493, U+649a, U+649e, U+64a4-64a5, U+64ab, U+64ad-64ae, U+64b0, U+64b2, U+64bb, U+64c1, U+64c4-64c5, U+64c7, U+64ca, U+64cd-64ce, U+64d2, U+64d4, U+64d8, U+64da, U+64e1-64e2, U+64e5-64e7, U+64ec, U+64f2, U+64f4, U+64fa, U+64fe, U+6500, U+6504, U+6518, U+651d, U+6523, U+652a-652c, U+652f, U+6536-6539, U+653b, U+653e, U+6548, U+654d-654f, U+6551, U+6556-6557, U+655e, U+6562-6563, U+6566, U+656c-656d, U+6572, U+6574-6575, U+6577-6578, U+657e, U+6582-6583, U+6585, U+658c, U+6590-6591, U+6597, U+6599, U+659b-659c, U+659f, U+65a1, U+65a4-65a5, U+65a7, U+65ab-65ac, U+65af, U+65b7, U+65bc-65bd, U+65c1, U+65c5, U+65cb-65cc, U+65cf, U+65d2, U+65d7, U+65e0, U+65e3, U+65e6, U+65e8-65e9, U+65ec-65ed, U+65f1, U+65f4, U+65fa-65fd, U+65ff, U+6606;
}
/* [85] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.85.woff2) format('woff2');
  unicode-range: U+614c, U+6153, U+6155, U+6158-6159, U+615d, U+615f, U+6162-6164, U+6167-6168, U+616b, U+616e, U+6170, U+6176-6177, U+617d-617e, U+6181-6182, U+618a, U+618e, U+6190-6191, U+6194, U+6198-619a, U+61a4, U+61a7, U+61a9, U+61ab-61ac, U+61ae, U+61b2, U+61b6, U+61ba, U+61be, U+61c3, U+61c7-61cb, U+61e6, U+61f2, U+61f6-61f8, U+61fa, U+61fc, U+61ff-6200, U+6207-6208, U+620a, U+620c-620e, U+6212, U+6216, U+621a, U+621f, U+6221, U+622a, U+622e, U+6230-6231, U+6234, U+6236, U+623e-623f, U+6241, U+6247-6249, U+624d, U+6253, U+6258, U+626e, U+6271, U+6276, U+6279, U+627c, U+627f-6280, U+6284, U+6289-628a, U+6291-6292, U+6295, U+6297-6298, U+629b, U+62ab, U+62b1, U+62b5, U+62b9, U+62bc-62bd, U+62c2, U+62c7-62c9, U+62cc-62cd, U+62cf-62d0, U+62d2-62d4, U+62d6-62d9, U+62db-62dc, U+62ec-62ef, U+62f1, U+62f3, U+62f7, U+62fe-62ff, U+6301, U+6307, U+6309, U+6311, U+632b, U+632f, U+633a-633b, U+633d-633e, U+6349, U+634c, U+634f-6350, U+6355, U+6367-6368, U+636e, U+6372, U+6377, U+637a-637b, U+637f, U+6383, U+6388-6389, U+638c;
}
/* [86] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.86.woff2) format('woff2');
  unicode-range: U+5f11, U+5f13-5f15, U+5f17-5f18, U+5f1b, U+5f1f, U+5f26-5f27, U+5f29, U+5f31, U+5f35, U+5f3a, U+5f3c, U+5f48, U+5f4a, U+5f4c, U+5f4e, U+5f56-5f57, U+5f59, U+5f5b, U+5f62, U+5f66-5f67, U+5f69-5f6d, U+5f70-5f71, U+5f77, U+5f79, U+5f7c, U+5f7f-5f81, U+5f85, U+5f87, U+5f8a-5f8b, U+5f90-5f92, U+5f98-5f99, U+5f9e, U+5fa0-5fa1, U+5fa8-5faa, U+5fae, U+5fb5, U+5fb9, U+5fbd, U+5fc5, U+5fcc-5fcd, U+5fd6-5fd9, U+5fe0, U+5feb, U+5ff5, U+5ffd, U+5fff, U+600f, U+6012, U+6016, U+601c, U+6020-6021, U+6025, U+6028, U+602a, U+602f, U+6041-6043, U+604d, U+6050, U+6052, U+6055, U+6059, U+605d, U+6062-6065, U+6068-606a, U+606c-606d, U+606f-6070, U+6085, U+6089, U+608c-608d, U+6094, U+6096, U+609a-609b, U+609f-60a0, U+60a3-60a4, U+60a7, U+60b0, U+60b2-60b4, U+60b6, U+60b8, U+60bc-60bd, U+60c7, U+60d1, U+60da, U+60dc, U+60df-60e1, U+60f0-60f1, U+60f6, U+60f9-60fb, U+6101, U+6106, U+6108-6109, U+610d-610e, U+6115, U+611a, U+6127, U+6130, U+6134, U+6137, U+613c, U+613e-613f, U+6142, U+6144, U+6147-6148, U+614a-614b;
}
/* [87] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.87.woff2) format('woff2');
  unicode-range: U+5c40, U+5c45-5c46, U+5c48, U+5c4b, U+5c4d-5c4e, U+5c51, U+5c5b, U+5c60, U+5c62, U+5c64-5c65, U+5c6c, U+5c6f, U+5c79, U+5c90-5c91, U+5ca1, U+5ca9, U+5cab-5cac, U+5cb1, U+5cb3, U+5cb5, U+5cb7-5cb8, U+5cba, U+5cbe, U+5cc0, U+5cd9, U+5ce0, U+5ce8, U+5cef-5cf0, U+5cf4, U+5cf6, U+5cfb, U+5cfd, U+5d07, U+5d0d-5d0e, U+5d11, U+5d14, U+5d16-5d17, U+5d19, U+5d27, U+5d29, U+5d4b-5d4c, U+5d50, U+5d69, U+5d6c, U+5d6f, U+5d87, U+5d8b, U+5d9d, U+5da0, U+5da2, U+5daa, U+5db8, U+5dba, U+5dbc-5dbd, U+5dcd, U+5dd2, U+5dd6, U+5de1-5de2, U+5de5-5de8, U+5deb, U+5dee, U+5df1-5df4, U+5df7, U+5dfd-5dfe, U+5e03, U+5e06, U+5e11, U+5e16, U+5e19, U+5e1b, U+5e1d, U+5e25, U+5e2b, U+5e2d, U+5e33, U+5e36, U+5e38, U+5e3d, U+5e3f-5e40, U+5e44-5e45, U+5e47, U+5e4c, U+5e55, U+5e5f, U+5e61-5e63, U+5e72, U+5e77-5e79, U+5e7b-5e7e, U+5e84, U+5e87, U+5e8a, U+5e8f, U+5e95, U+5e97, U+5e9a, U+5e9c, U+5ea0, U+5ea7, U+5eab, U+5ead, U+5eb5-5eb8, U+5ebe, U+5ec2, U+5ec8-5eca, U+5ed0, U+5ed3, U+5ed6, U+5eda-5edb, U+5edf-5ee0, U+5ee2-5ee3, U+5eec, U+5ef3, U+5ef6-5ef7, U+5efa-5efb, U+5f01, U+5f04, U+5f0a;
}
/* [88] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.88.woff2) format('woff2');
  unicode-range: U+59be, U+59c3, U+59c6, U+59c9, U+59cb, U+59d0-59d1, U+59d3-59d4, U+59d9-59da, U+59dc-59dd, U+59e6, U+59e8, U+59ea, U+59ec, U+59ee, U+59f8, U+59fb, U+59ff, U+5a01, U+5a03, U+5a11, U+5a18, U+5a1b-5a1c, U+5a1f-5a20, U+5a25, U+5a29, U+5a36, U+5a3c, U+5a41, U+5a46, U+5a49, U+5a5a, U+5a62, U+5a66, U+5a92, U+5a9a-5a9b, U+5aa4, U+5ac1-5ac2, U+5ac4, U+5ac9, U+5acc, U+5ae1, U+5ae6, U+5ae9, U+5b05, U+5b09, U+5b0b-5b0c, U+5b16, U+5b2a, U+5b40, U+5b43, U+5b51, U+5b54-5b55, U+5b58, U+5b5a, U+5b5c-5b5d, U+5b5f, U+5b63-5b64, U+5b69, U+5b6b, U+5b70-5b71, U+5b75, U+5b7a, U+5b7c, U+5b85, U+5b87-5b88, U+5b8b, U+5b8f, U+5b93, U+5b95-5b99, U+5b9b-5b9c, U+5ba2-5ba6, U+5bac, U+5bae, U+5bb0, U+5bb3-5bb5, U+5bb8-5bb9, U+5bbf-5bc0, U+5bc2-5bc7, U+5bcc, U+5bd0, U+5bd2-5bd4, U+5bd7, U+5bde-5bdf, U+5be1-5be2, U+5be4-5be9, U+5beb-5bec, U+5bee-5bef, U+5bf5-5bf6, U+5bf8, U+5bfa, U+5c01, U+5c04, U+5c07-5c0b, U+5c0d-5c0e, U+5c16, U+5c19, U+5c24, U+5c28, U+5c31, U+5c38-5c3c, U+5c3e-5c3f;
}
/* [89] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.89.woff2) format('woff2');
  unicode-range: U+5703-5704, U+5708, U+570d, U+5712-5713, U+5716, U+5718, U+572d, U+573b, U+5740, U+5742, U+5747, U+574a, U+574d-574e, U+5750-5751, U+5761, U+5764, U+5766, U+576a, U+576e, U+5770, U+5775, U+577c, U+5782, U+5788, U+578b, U+5793, U+57a0, U+57a2-57a3, U+57c3, U+57c7-57c8, U+57cb, U+57df-57e0, U+57f0, U+57f4, U+57f7, U+57f9-57fa, U+57fc, U+5800, U+5802, U+5805-5806, U+5808-580a, U+581e, U+5821, U+5824, U+5827, U+582a, U+582f-5831, U+5835, U+583a, U+584a-584b, U+584f, U+5851, U+5854, U+5857-5858, U+585a, U+585e, U+5861-5862, U+5864, U+5875, U+5879, U+587c, U+587e, U+5883, U+5885, U+5889, U+5893, U+589c, U+589e-589f, U+58a8-58a9, U+58ae, U+58b3, U+58ba-58bb, U+58be, U+58c1, U+58c5, U+58c7, U+58ce, U+58d1, U+58d3, U+58d5, U+58d8-58d9, U+58de-58df, U+58e4, U+58ec, U+58ef, U+58f9-58fb, U+58fd, U+590f, U+5914-5915, U+5919, U+5922, U+592d-592e, U+5931, U+5937, U+593e, U+5944, U+5947-5949, U+594e-5951, U+5954-5955, U+5957, U+595a, U+5960, U+5962, U+5967, U+596a-596e, U+5974, U+5978, U+5982-5984, U+598a, U+5993, U+5996-5997, U+5999, U+59a5, U+59a8, U+59ac, U+59b9, U+59bb;
}
/* [90] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.90.woff2) format('woff2');
  unicode-range: U+539a, U+53a0, U+53a5-53a6, U+53ad, U+53bb, U+53c3, U+53c8-53cb, U+53cd, U+53d4, U+53d6-53d7, U+53db, U+53e1-53e3, U+53e5, U+53e9-53ed, U+53f1, U+53f3, U+53f8, U+5403-5404, U+540a, U+540e-5411, U+541b, U+541d, U+541f-5420, U+5426, U+5429, U+542b, U+5433, U+5438-5439, U+543b-543c, U+543e, U+5442, U+5448, U+544a, U+5451, U+5468, U+546a, U+5471, U+5473, U+5475, U+547b-547d, U+5480, U+5486, U+548e, U+5490, U+54a4, U+54a8, U+54ab-54ac, U+54b3, U+54b8, U+54bd, U+54c0, U+54c4, U+54c8-54c9, U+54e1, U+54e5, U+54e8, U+54ed-54ee, U+54f2, U+54fa, U+5504, U+5506-5507, U+550e, U+5510, U+551c, U+552f, U+5531, U+5535, U+553e, U+5544, U+5546, U+554f, U+5553, U+5556, U+555e, U+5563, U+557c, U+5580, U+5584, U+5586-5587, U+5589-558a, U+5598-559a, U+559c-559d, U+55a7, U+55a9-55ac, U+55ae, U+55c5, U+55c7, U+55d4, U+55da, U+55dc, U+55df, U+55e3-55e4, U+55fd-55fe, U+5606, U+5609, U+5614, U+5617, U+562f, U+5632, U+5634, U+5636, U+5653, U+5668, U+566b, U+5674, U+5686, U+56a5, U+56ac, U+56ae, U+56b4, U+56bc, U+56ca, U+56cd, U+56d1, U+56da-56db, U+56de, U+56e0, U+56f0, U+56f9-56fa;
}
/* [91] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.91.woff2) format('woff2');
  unicode-range: U+516e, U+5175-5178, U+517c, U+5180, U+5186, U+518a, U+518d, U+5192, U+5195, U+5197, U+51a0, U+51a5, U+51aa, U+51ac, U+51b6-51b7, U+51bd, U+51c4, U+51c6, U+51c9, U+51cb-51cd, U+51dc-51de, U+51e1, U+51f0-51f1, U+51f6, U+51f8-51f9, U+51fd, U+5200, U+5203, U+5207-5208, U+520a, U+520e, U+5211, U+5217, U+521d, U+5224-5225, U+522a, U+522e, U+5230, U+5236-523b, U+5243, U+5247, U+524a-524c, U+5254, U+5256, U+525b, U+525d, U+5261, U+5269-526a, U+526f, U+5272, U+5275, U+527d, U+527f, U+5283, U+5287-5289, U+528d, U+5291-5292, U+529f, U+52a3-52a4, U+52a9-52ab, U+52be, U+52c1, U+52c3, U+52c5, U+52c7, U+52c9, U+52cd, U+52d2, U+52d6, U+52d8-52d9, U+52db, U+52dd-52df, U+52e2-52e4, U+52f3, U+52f5, U+52f8, U+52fa-52fb, U+52fe-52ff, U+5305, U+5308, U+530d, U+530f-5310, U+5315, U+5319, U+5320-5321, U+5323, U+532a, U+532f, U+5339, U+533f-5341, U+5343-5344, U+5347-534a, U+534d, U+5351-5354, U+535a, U+535c, U+535e, U+5360, U+5366, U+5368, U+536f-5371, U+5374-5375, U+5377, U+537d, U+537f, U+5384, U+5393, U+5398;
}
/* [92] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.92.woff2) format('woff2');
  unicode-range: U+4f43, U+4f46-4f48, U+4f4d-4f51, U+4f55, U+4f59-4f5a, U+4f69, U+4f6f-4f70, U+4f73, U+4f76, U+4f7a, U+4f7e-4f7f, U+4f81, U+4f83-4f84, U+4f86, U+4f88, U+4f8a-4f8b, U+4f8d, U+4f8f, U+4f91, U+4f96, U+4f98, U+4f9b, U+4f9d, U+4fae-4faf, U+4fb5-4fb6, U+4fbf, U+4fc2-4fc4, U+4fc9-4fca, U+4fce, U+4fd1, U+4fd3-4fd4, U+4fd7, U+4fda, U+4fdf-4fe0, U+4fee-4fef, U+4ff1, U+4ff3, U+4ff5, U+4ff8, U+4ffa, U+5002, U+5006, U+5009, U+500b, U+500d, U+5011-5012, U+5016, U+5019-501a, U+501c, U+501e-501f, U+5021, U+5023-5024, U+5026-5028, U+502a-502d, U+503b, U+5043, U+5047-5049, U+504f, U+5055, U+505a, U+505c, U+5065, U+5074-5076, U+5078, U+5080, U+5085, U+508d, U+5091, U+5098-5099, U+50ac-50ad, U+50b2-50b3, U+50b5, U+50b7, U+50be, U+50c5, U+50c9-50ca, U+50d1, U+50d5-50d6, U+50da, U+50de, U+50e5, U+50e7, U+50ed, U+50f9, U+50fb, U+50ff-5101, U+5104, U+5106, U+5109, U+5112, U+511f, U+5121, U+512a, U+5132, U+5137, U+513a, U+513c, U+5140-5141, U+5143-5148, U+514b-514e, U+5152, U+515c, U+5162, U+5169-516b, U+516d;
}
/* [93] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.93.woff2) format('woff2');
  unicode-range: U+338c-339c, U+339f-33a0, U+33a2-33cb, U+33cf-33d0, U+33d3, U+33d6, U+33d8, U+33db-33dd, U+4e01, U+4e03, U+4e07-4e08, U+4e11, U+4e14-4e15, U+4e18-4e19, U+4e1e, U+4e32, U+4e38-4e39, U+4e42-4e43, U+4e45, U+4e4d-4e4f, U+4e56, U+4e58-4e59, U+4e5d-4e5e, U+4e6b, U+4e6d, U+4e73, U+4e76-4e77, U+4e7e, U+4e82, U+4e86, U+4e88, U+4e8e, U+4e90-4e92, U+4e94-4e95, U+4e98, U+4e9b, U+4e9e, U+4ea1-4ea2, U+4ea4-4ea6, U+4ea8, U+4eab, U+4ead-4eae, U+4eb6, U+4ec0-4ec1, U+4ec4, U+4ec7, U+4ecb, U+4ecd, U+4ed4-4ed5, U+4ed7-4ed9, U+4edd, U+4edf, U+4ee4, U+4ef0, U+4ef2, U+4ef6-4ef7, U+4efb, U+4f01, U+4f09, U+4f0b, U+4f0d-4f11, U+4f2f, U+4f34, U+4f36, U+4f38, U+4f3a, U+4f3c-4f3d;
}
/* [94] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.94.woff2) format('woff2');
  unicode-range: U+3136, U+3138, U+313a-3140, U+3143-3144, U+3150, U+3152, U+3154-3156, U+3158-315b, U+315d-315f, U+3162, U+3164-318c, U+318e, U+3200-321b, U+3231, U+3239, U+3251-325a, U+3260-327b, U+327e-327f, U+328a-3290, U+3294, U+329e, U+32a5, U+3380-3384, U+3388-338b;
}
/* [95] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.95.woff2) format('woff2');
  unicode-range: U+2f7d, U+2f7f-2f8b, U+2f8e-2f90, U+2f92-2f97, U+2f99-2fa0, U+2fa2-2fa3, U+2fa5-2fa9, U+2fac-2fb1, U+2fb3-2fbc, U+2fc1-2fca, U+2fcd-2fd4, U+3003, U+3012-3019, U+301c, U+301e-3020, U+3036, U+3041, U+3043, U+3045, U+3047, U+3049, U+304e, U+3050, U+3052, U+3056, U+305a, U+305c, U+305e, U+3062, U+3065, U+306c, U+3070-307d, U+3080, U+3085, U+3087, U+308e, U+3090-3091, U+30a1, U+30a5, U+30a9, U+30ae, U+30b1-30b2, U+30b4, U+30b6, U+30bc-30be, U+30c2, U+30c5, U+30cc, U+30d2, U+30d4, U+30d8-30dd, U+30e4, U+30e6, U+30e8, U+30ee, U+30f0-30f2, U+30f4-30f6, U+3133, U+3135;
}
/* [96] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.96.woff2) format('woff2');
  unicode-range: U+2541-254b, U+25a4-25a9, U+25b1, U+25b5, U+25b9, U+25bf, U+25c1, U+25c3, U+25c9-25ca, U+25cc, U+25ce, U+25d0-25d1, U+25e6, U+25ef, U+260f, U+261d, U+261f, U+262f, U+2660, U+2664, U+2667-2669, U+266d, U+266f, U+2716, U+271a, U+273d, U+2756, U+2776-277f, U+278a-2793, U+2963, U+2965, U+2ac5-2ac6, U+2acb-2acc, U+2f00, U+2f04, U+2f06, U+2f08, U+2f0a-2f0b, U+2f11-2f12, U+2f14, U+2f17-2f18, U+2f1c-2f1d, U+2f1f-2f20, U+2f23-2f26, U+2f28-2f29, U+2f2b, U+2f2d, U+2f2f-2f32, U+2f38, U+2f3c-2f40, U+2f42-2f4c, U+2f4f-2f52, U+2f54-2f58, U+2f5a-2f66, U+2f69-2f70, U+2f72-2f76, U+2f78, U+2f7a-2f7c;
}
/* [97] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.97.woff2) format('woff2');
  unicode-range: U+2479-2487, U+249c-24d1, U+24d3-24d7, U+24d9-24e9, U+24eb-24f4, U+2500-2501, U+2503, U+250c-2513, U+2515-2516, U+2518-2540;
}
/* [98] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.98.woff2) format('woff2');
  unicode-range: U+215b-215e, U+2162-2169, U+2170-2179, U+2195-2199, U+21b0-21b4, U+21bc, U+21c0, U+21c4-21c5, U+21cd, U+21cf-21d4, U+21e0-21e3, U+21e6-21e9, U+2200, U+2202-2203, U+2206-2209, U+220b-220c, U+220f, U+2211, U+2213, U+221a, U+221d-2220, U+2222, U+2225-2227, U+2229-222c, U+222e, U+2234-2237, U+223d, U+2243, U+2245, U+2248, U+2250-2253, U+225a, U+2260-2262, U+2264-2267, U+226a-226b, U+226e-2273, U+2276-2277, U+2279-227b, U+2280-2287, U+228a-228b, U+2295-2297, U+22a3-22a5, U+22bb-22bc, U+22ce-22cf, U+22da-22db, U+22ee-22ef, U+2306, U+2312, U+2314, U+2467-2478;
}
/* [99] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.99.woff2) format('woff2');
  unicode-range: U+81-82, U+84, U+a2-a5, U+a7-a8, U+aa, U+ac-ad, U+b1-b3, U+b6, U+b8-ba, U+bc-be, U+c0, U+c2, U+c6-cb, U+ce-d0, U+d4, U+d8-d9, U+db-dc, U+de-df, U+e6, U+eb, U+ee-f0, U+f4, U+f7-f9, U+fb, U+fe-ff, U+111, U+126-127, U+132-133, U+138, U+13f-142, U+149-14b, U+152-153, U+166-167, U+2bc, U+2c7, U+2d0, U+2d8-2d9, U+2db-2dd, U+391-394, U+396-3a1, U+3a3-3a9, U+3b2-3b6, U+3b8, U+3bc, U+3be-3c1, U+3c3-3c9, U+2010, U+2015-2016, U+2018-2019, U+201b, U+201f-2021, U+2025, U+2030, U+2033-2036, U+203c, U+203e, U+2042, U+2074, U+207a-207f, U+2081-2084, U+2109, U+2113, U+2116, U+2121, U+2126, U+212b, U+2153-2154;
}
/* [100] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.100.woff2) format('woff2');
  unicode-range: U+e8, U+2da, U+2160, U+2194, U+3054, U+3058, U+306d, U+3086, U+308d, U+30ac, U+30bb, U+30c4, U+30cd-30ce, U+30e2, U+3132, U+3146, U+3149, U+339d, U+4e3b, U+4f0a, U+4fdd, U+4fe1, U+5409, U+540c, U+5834, U+592a-592b, U+5b9a, U+5dde, U+5e0c, U+5e73, U+5f0f, U+60f3, U+653f, U+661f, U+662f, U+667a, U+683c, U+6b4c, U+6c11, U+767c, U+76ee, U+76f4, U+77f3, U+79d1, U+7a7a, U+7b2c, U+7d22, U+8207, U+8a00, U+8a71, U+9280, U+9580, U+958b, U+96c6, U+9762, U+98df, U+9ed1, U+ac2d, U+adc8, U+add3, U+af48, U+b014, U+b134-b135, U+b158, U+b2aa, U+b35f, U+b6a4, U+b9cf, U+bb63, U+bd23, U+be91, U+c29b, U+c3f4, U+c42c, U+c55c, U+c573, U+c58f, U+c78c, U+c7dd, U+c8f5, U+cad1, U+cc48, U+cf10, U+cf20, U+d03c, U+d07d, U+d2a0, U+d30e, U+d38d, U+d3a8, U+d3c8, U+d5e5, U+d5f9, U+d6e4, U+f90a, U+ff02, U+ff1c;
}
/* [101] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.101.woff2) format('woff2');
  unicode-range: U+3b1, U+2466, U+25a1, U+25a3, U+261c, U+3008-3009, U+305b, U+305d, U+3069, U+30a7, U+30ba, U+30cf, U+30ef, U+3151, U+3157, U+4e4b, U+4e5f, U+4e8c, U+4eca, U+4ed6, U+4f5b, U+50cf, U+5149, U+5165, U+5171, U+5229, U+529b, U+5316, U+539f, U+53f2, U+571f, U+5728, U+58eb, U+591c, U+5b78, U+5c11, U+5c55, U+5ddd, U+5e02, U+5fb7, U+60c5, U+610f, U+611f, U+6625, U+66f8, U+6797, U+679c, U+682a, U+6d2a, U+706b, U+7406, U+767b, U+76f8, U+77e5, U+7acb, U+898b, U+8a69, U+8def, U+8fd1, U+901a, U+90e8, U+91cd, U+975e, U+ae14, U+ae6c, U+aec0, U+afc7, U+afc9, U+b01c, U+b028, U+b308, U+b311, U+b314, U+b31c, U+b524, U+b560, U+b764, U+b920, U+b9e3, U+bd48, U+be7d, U+c0db, U+c231, U+c270, U+c2e3, U+c37d, U+c3ed, U+c530, U+c6a5, U+c6dc, U+c7a4, U+c954, U+c974, U+d000, U+d565, U+d667, U+d6c5, U+d79d, U+ff1e;
}
/* [102] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.102.woff2) format('woff2');
  unicode-range: U+131, U+2032, U+2465, U+2642, U+3048, U+3051, U+3083-3084, U+308f, U+30c0, U+30d1, U+30d3, U+30d6, U+30df, U+30e7, U+3153, U+4e16, U+4e8b, U+4ee5, U+5206, U+52a0, U+52d5, U+53e4, U+53ef, U+54c1, U+57ce, U+597d, U+5b8c, U+5ea6, U+5f8c, U+5f97, U+6210, U+6240, U+624b, U+6728, U+6bd4, U+7236, U+7269, U+7279, U+738b, U+7528, U+7530, U+767e, U+798f, U+8005, U+8a18, U+90fd, U+91cc, U+9577, U+9593, U+98a8, U+ac20, U+acf6, U+ad90, U+af5d, U+af80, U+afcd, U+aff0, U+b0a1, U+b0b5, U+b1fd, U+b2fc, U+b380, U+b51b, U+b584, U+b5b3, U+b8fd, U+b93c, U+b9f4, U+bb44, U+bc08, U+bc27, U+bc49, U+be55, U+be64, U+bfb0, U+bfc5, U+c178, U+c21f, U+c314, U+c4f1, U+c58d, U+c664, U+c698, U+c6a7, U+c6c1, U+c9ed, U+cac0, U+cacc, U+cad9, U+ccb5, U+cdcc, U+d0e4, U+d143, U+d320, U+d330, U+d54d, U+ff06, U+ff1f, U+ff5e;
}
/* [103] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.103.woff2) format('woff2');
  unicode-range: U+b4, U+20a9, U+20ac, U+2190, U+24d8, U+2502, U+2514, U+2592, U+25c7-25c8, U+2663, U+3060, U+3064, U+3081, U+3088, U+30a3, U+30a6, U+30aa, U+30b5, U+30c7, U+30ca-30cb, U+30d0, U+30e3, U+30e5, U+339e, U+4e09, U+4eac, U+4f5c, U+5167-5168, U+516c, U+51fa, U+5408, U+540d, U+591a, U+5b57, U+6211, U+65b9, U+660e, U+6642, U+6700, U+6b63, U+6e2f, U+7063, U+7532, U+793e, U+81ea, U+8272, U+82b1, U+897f, U+8eca, U+91ce, U+ac38, U+ad76, U+ae84, U+aecc, U+b07d, U+b0b1, U+b215, U+b2a0, U+b310, U+b3d7, U+b52a, U+b618, U+b775, U+b797, U+bcd5, U+bd59, U+be80, U+bea8, U+bed1, U+bee4-bee5, U+c060, U+c2ef, U+c329, U+c3dc, U+c597, U+c5bd, U+c5e5, U+c69c, U+c9d6, U+ca29, U+ca5c, U+ca84, U+cc39, U+cc3b, U+ce89, U+cee5, U+cf65, U+cf85, U+d058, U+d145, U+d22d, U+d325, U+d37d, U+d3ad, U+d769, U+ff0c;
}
/* [104] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.104.woff2) format('woff2');
  unicode-range: U+2161, U+2228, U+2299, U+2464, U+2517, U+2640, U+3042, U+304a, U+3053, U+3061, U+307f, U+3082, U+308c, U+3092, U+30a8, U+30ab, U+30ad, U+30b0, U+30b3, U+30b7, U+30c1, U+30c6, U+30c9, U+30d5, U+30d7, U+30de, U+30e0-30e1, U+30ec-30ed, U+4e0b, U+4e0d, U+4ee3, U+53f0, U+548c, U+5b89, U+5bb6, U+5c0f, U+611b, U+6771, U+6aa2, U+6bcd, U+6c34, U+6cd5, U+6d77, U+767d, U+795e, U+8ecd, U+9999, U+9ad8, U+ac07, U+ac1a, U+ac40, U+ad0c, U+ad88, U+ada4, U+ae01, U+ae65, U+aebd, U+aec4, U+afe8, U+b139, U+b205, U+b383, U+b38c, U+b42c, U+b461, U+b55c, U+b78f, U+b8fb, U+b9f7, U+bafc, U+bc99, U+bed8, U+bfcd, U+c0bf, U+c0f9, U+c167, U+c204, U+c20f, U+c22f, U+c258, U+c298, U+c2bc, U+c388, U+c501, U+c50c, U+c5b9, U+c5ce, U+c641, U+c648, U+c73d, U+ca50, U+ca61, U+cc4c, U+ceac, U+d0d4, U+d5f7, U+d6d7, U+ff1a;
}
/* [105] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.105.woff2) format('woff2');
  unicode-range: U+2103, U+2463, U+25c6, U+25cb, U+266c, U+3001, U+300a, U+3046, U+304c-304d, U+304f, U+3055, U+3059, U+3063, U+3066-3068, U+306f, U+3089, U+30b8, U+30bf, U+314f, U+4e0a, U+570b, U+5730, U+5916, U+5929, U+5c71, U+5e74, U+5fc3, U+601d, U+6027, U+63d0, U+6709, U+6734, U+751f, U+7684, U+82f1, U+9053, U+91d1, U+97f3, U+ac2f, U+ac4d, U+adc4, U+ade4, U+ae41, U+ae4d-ae4e, U+aed1, U+afb9, U+b0e0, U+b299, U+b365, U+b46c, U+b480, U+b4c8, U+b7b4, U+b819, U+b918, U+baab, U+bab9, U+be8f, U+bed7, U+c0ec, U+c19f, U+c1a5, U+c3d9, U+c464, U+c53d, U+c553, U+c570, U+c5cc, U+c633, U+c6a4, U+c7a3, U+c7a6, U+c886, U+c9d9-c9da, U+c9ec, U+ca0c, U+cc21, U+cd1b, U+cd78, U+cdc4, U+cef8, U+cfe4, U+d0a5, U+d0b5, U+d0ec, U+d15d, U+d188, U+d23c, U+d2ac, U+d729, U+d79b, U+ff01, U+ff08-ff09, U+ff5c;
}
/* [106] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.106.woff2) format('woff2');
  unicode-range: U+2039-203a, U+223c, U+25b3, U+25b7, U+25bd, U+25cf, U+266a, U+3002, U+300b, U+304b, U+3057, U+305f, U+306a-306b, U+307e, U+308a-308b, U+3093, U+30a2, U+30af, U+30b9, U+30c3, U+30c8, U+30e9-30eb, U+33a1, U+4e00, U+524d, U+5357, U+5b50, U+7121, U+884c, U+9751, U+ac94, U+aebe, U+aecd, U+af08, U+af41, U+af49, U+b010, U+b053, U+b109, U+b11b, U+b128, U+b154, U+b291, U+b2e6, U+b301, U+b385, U+b525, U+b5b4, U+b729, U+b72f, U+b738, U+b7ff, U+b837, U+b975, U+ba67, U+bb47, U+bc1f, U+bd90, U+bfd4, U+c27c, U+c324, U+c379, U+c3e0, U+c465, U+c53b, U+c58c, U+c610, U+c653, U+c6cd, U+c813, U+c82f, U+c999, U+c9e0, U+cac4, U+cad3, U+cbd4, U+cc10, U+cc22, U+ccb8, U+ccbc, U+cda5, U+ce84, U+cea3, U+cf67, U+cfe1, U+d241, U+d30d, U+d31c, U+d391, U+d401, U+d479, U+d5c9, U+d5db, U+d649, U+d6d4;
}
/* [107] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.107.woff2) format('woff2');
  unicode-range: U+b0, U+e9, U+2193, U+2462, U+260e, U+261e, U+300e-300f, U+3044, U+30a4, U+30fb-30fc, U+314d, U+5973, U+6545, U+6708, U+7537, U+ac89, U+ac9c, U+acc1, U+ad04, U+ad75, U+ad7d, U+ae45, U+ae61, U+af42, U+b0ab, U+b0af, U+b0b3, U+b12c, U+b194, U+b1a8, U+b220, U+b258, U+b284, U+b2ff, U+b315, U+b371, U+b3d4-b3d5, U+b460, U+b527, U+b534, U+b810, U+b818, U+b98e, U+ba55, U+bbac, U+bc0b, U+bc40, U+bca1, U+bccd, U+bd93, U+be54, U+be5a, U+bf08, U+bf50, U+bf55, U+bfdc, U+c0c0, U+c0d0, U+c0f4, U+c100, U+c11e, U+c170, U+c20d, U+c274, U+c290, U+c308, U+c369, U+c539, U+c587, U+c5ff, U+c6ec, U+c70c, U+c7ad, U+c7c8, U+c83c, U+c881, U+cb48, U+cc60, U+ce69, U+ce6b, U+ce75, U+cf04, U+cf08, U+cf55, U+cf70, U+cffc, U+d0b7, U+d1a8, U+d2c8, U+d384, U+d47c, U+d48b, U+d5dd, U+d5e8, U+d720, U+d759, U+f981;
}
/* [108] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.108.woff2) format('woff2');
  unicode-range: U+e0, U+e2, U+395, U+3b7, U+3ba, U+2460-2461, U+25a0, U+3010-3011, U+306e, U+30f3, U+314a, U+314c, U+5927, U+65b0, U+7e41, U+97d3, U+9ad4, U+ad49, U+ae0b, U+ae0d, U+ae43, U+ae5d, U+aecf, U+af3c, U+af64, U+afd4, U+b080, U+b084, U+b0c5, U+b10c, U+b1e8, U+b2ac, U+b36e, U+b451, U+b515, U+b540, U+b561, U+b6ab, U+b6b1, U+b72c, U+b730, U+b744, U+b800, U+b8ec, U+b8f0, U+b904, U+b968, U+b96d, U+b987, U+b9d9, U+bb36, U+bb49, U+bc2d, U+bc43, U+bcf6, U+bd89, U+be57, U+be61, U+bed4, U+c090, U+c130, U+c148, U+c19c, U+c2f9, U+c36c, U+c37c, U+c384, U+c3df, U+c575, U+c584, U+c660, U+c719, U+c816, U+ca4d, U+ca54, U+cabc, U+cb49, U+cc14, U+cff5, U+d004, U+d038, U+d0b4, U+d0d3, U+d0e0, U+d0ed, U+d131, U+d1b0, U+d31f, U+d33d, U+d3a0, U+d3ab, U+d514, U+d584, U+d6a1, U+d6cc, U+d749, U+d760, U+d799;
}
/* [109] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.109.woff2) format('woff2');
  unicode-range: U+24, U+60, U+3b9, U+3bb, U+3bd, U+2191, U+2606, U+300c-300d, U+3131, U+3134, U+3139, U+3141-3142, U+3148, U+3161, U+3163, U+321c, U+4eba, U+5317, U+ac31, U+ac77, U+ac9f, U+acb9, U+acf0-acf1, U+acfd, U+ad73, U+af3d, U+b00c, U+b04a, U+b057, U+b0c4, U+b188, U+b1cc, U+b214, U+b2db, U+b2ee, U+b304, U+b4ed, U+b518, U+b5bc, U+b625, U+b69c-b69d, U+b7ac, U+b801, U+b86c, U+b959, U+b95c, U+b985, U+ba48, U+bb58, U+bc0c, U+bc38, U+bc85, U+bc9a, U+bf40, U+c068, U+c0bd, U+c0cc, U+c12f, U+c149, U+c1e0, U+c22b, U+c22d, U+c250, U+c2fc, U+c300, U+c313, U+c370, U+c3d8, U+c557, U+c580, U+c5e3, U+c62e, U+c634, U+c6f0, U+c74d, U+c783, U+c78e, U+c796, U+c7bc, U+c92c, U+ca4c, U+cc1c, U+cc54, U+cc59, U+ce04, U+cf30, U+cfc4, U+d140, U+d321, U+d38c, U+d399, U+d54f, U+d587, U+d5d0, U+d6e8, U+d770;
}
/* [110] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.110.woff2) format('woff2');
  unicode-range: U+d7, U+ea, U+fc, U+2192, U+25bc, U+3000, U+3137, U+3145, U+315c, U+7f8e, U+ac13, U+ac71, U+ac90, U+acb8, U+ace7, U+ad7f, U+ae50, U+aef4, U+af34, U+afbc, U+b048, U+b09a, U+b0ad, U+b0bc, U+b113, U+b125, U+b141, U+b20c, U+b2d9, U+b2ed, U+b367, U+b369, U+b374, U+b3cb, U+b4ec, U+b611, U+b760, U+b81b, U+b834, U+b8b0, U+b8e1, U+b989, U+b9d1, U+b9e1, U+b9fa, U+ba4d, U+ba78, U+bb35, U+bb54, U+bbf9, U+bc11, U+bcb3, U+bd05, U+bd95, U+bdd4, U+be10, U+bed0, U+bf51, U+c0d8, U+c232, U+c2b7, U+c2eb, U+c378, U+c500, U+c52c, U+c549, U+c568, U+c598, U+c5c9, U+c61b, U+c639, U+c67c, U+c717, U+c78a, U+c80a, U+c90c-c90d, U+c950, U+c9e7, U+cbe4, U+cca9, U+cce4, U+cdb0, U+ce78, U+ce94, U+ce98, U+cf8c, U+d018, U+d034, U+d0f1, U+d1b1, U+d280, U+d2f8, U+d338, U+d380, U+d3b4, U+d610, U+d69f, U+d6fc, U+d758;
}
/* [111] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.111.woff2) format('woff2');
  unicode-range: U+e7, U+2022, U+203b, U+25c0, U+2605, U+2661, U+3147, U+318d, U+672c, U+8a9e, U+acaa, U+acbc, U+ad1c, U+ae4a, U+ae5c, U+b044, U+b054, U+b0c8-b0c9, U+b2a6, U+b2d0, U+b35c, U+b364, U+b428, U+b454, U+b465, U+b4b7, U+b4e3, U+b51c, U+b5a1, U+b784, U+b790, U+b7ab, U+b7f4, U+b82c, U+b835, U+b8e9, U+b8f8, U+b9d8, U+b9f9, U+ba5c, U+ba64, U+babd, U+bb18, U+bb3b, U+bbff, U+bc0d, U+bc45, U+bc97, U+bcbc, U+be45, U+be75, U+be7c, U+bfcc, U+c0b6, U+c0f7, U+c14b, U+c2b4, U+c30d, U+c4f8, U+c5bb, U+c5d1, U+c5e0, U+c5ee, U+c5fd, U+c606, U+c6c5, U+c6e0, U+c708, U+c81d, U+c820, U+c824, U+c878, U+c918, U+c96c, U+c9e4, U+c9f1, U+cc2e, U+cd09, U+cea1, U+cef5, U+cef7, U+cf64, U+cf69, U+cfe8, U+d035, U+d0ac, U+d230, U+d234, U+d2f4, U+d31d, U+d575, U+d578, U+d608, U+d614, U+d718, U+d751, U+d761, U+d78c, U+d790;
}
/* [112] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.112.woff2) format('woff2');
  unicode-range: U+2665, U+3160, U+4e2d, U+6587, U+65e5, U+ac12, U+ac14, U+ac16, U+ac81, U+ad34, U+ade0, U+ae54, U+aebc, U+af2c, U+afc0, U+afc8, U+b04c, U+b08c, U+b099, U+b0a9, U+b0ac, U+b0ae, U+b0b8, U+b123, U+b179, U+b2e5, U+b2f7, U+b4c0, U+b531, U+b538, U+b545, U+b550, U+b5a8, U+b6f0, U+b728, U+b73b, U+b7ad, U+b7ed, U+b809, U+b864, U+b86d, U+b871, U+b9bf, U+b9f5, U+ba40, U+ba4b, U+ba58, U+ba87, U+baac, U+bbc0, U+bc16, U+bc34, U+bd07, U+bd99, U+be59, U+bfd0, U+c058, U+c0e4, U+c0f5, U+c12d, U+c139, U+c228, U+c529, U+c5c7, U+c635, U+c637, U+c735, U+c77d, U+c787, U+c789, U+c8c4, U+c989, U+c98c, U+c9d0, U+c9d3, U+cc0c, U+cc99, U+cd0c, U+cd2c, U+cd98, U+cda4, U+ce59, U+ce60, U+ce6d, U+cea0, U+d0d0-d0d1, U+d0d5, U+d14d, U+d1a4, U+d29c, U+d2f1, U+d301, U+d39c, U+d3bc, U+d4e8, U+d540, U+d5ec, U+d640, U+d750;
}
/* [113] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.113.woff2) format('woff2');
  unicode-range: U+5e, U+25b2, U+25b6, U+314e, U+ac24, U+ace1, U+ace4, U+ae68, U+af2d, U+b0d0, U+b0e5, U+b150, U+b155, U+b193, U+b2c9, U+b2dd, U+b3c8, U+b3fc, U+b410, U+b458, U+b4dd, U+b5a0, U+b5a4, U+b5bb, U+b7b5, U+b838, U+b840, U+b86f, U+b8f9, U+b960, U+b9e5, U+bab8, U+bb50, U+bc1d, U+bc24-bc25, U+bca8, U+bcbd, U+bd04, U+bd10, U+bd24, U+be48, U+be5b, U+be68, U+c05c, U+c12c, U+c140, U+c15c, U+c168, U+c194, U+c219, U+c27d, U+c2a8, U+c2f1, U+c2f8, U+c368, U+c554-c555, U+c559, U+c564, U+c5d8, U+c5fc, U+c625, U+c65c, U+c6b1, U+c728, U+c794, U+c84c, U+c88c, U+c8e0, U+c8fd, U+c998, U+c9dd, U+cc0d, U+cc30, U+ceec, U+cf13, U+cf1c, U+cf5c, U+d050, U+d07c, U+d0a8, U+d134, U+d138, U+d154, U+d1f4, U+d2bc, U+d329, U+d32c, U+d3d0, U+d3f4, U+d3fc, U+d56b, U+d5cc, U+d600-d601, U+d639, U+d6c8, U+d754, U+d765;
}
/* [114] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.114.woff2) format('woff2');
  unicode-range: U+3c-3d, U+2026, U+24d2, U+314b, U+ac11, U+acf3, U+ad74, U+ad81, U+adf9, U+ae34, U+af43, U+afb8, U+b05d, U+b07c, U+b110, U+b118, U+b17c, U+b180, U+b18d, U+b192, U+b2cc, U+b355, U+b378, U+b4a4, U+b4ef, U+b78d, U+b799, U+b7a9, U+b7fd, U+b807, U+b80c, U+b839, U+b9b4, U+b9db, U+ba3c, U+bab0, U+bba4, U+bc94, U+be4c, U+c154, U+c1c4, U+c26c, U+c2ac, U+c2ed, U+c4f4, U+c55e, U+c561, U+c571, U+c5b5, U+c5c4, U+c654-c655, U+c695, U+c6e8, U+c6f9, U+c724, U+c751, U+c775, U+c7a0, U+c7c1, U+c874, U+c880, U+c9d5, U+c9f8, U+cabd, U+cc29, U+cc2c, U+cca8, U+ccab, U+ccd0, U+ce21, U+ce35, U+ce7c, U+ce90, U+cee8, U+cef4, U+cfe0, U+d070, U+d0b9, U+d0c1, U+d0c4, U+d0c8, U+d15c, U+d1a1, U+d2c0, U+d300, U+d314, U+d3ed, U+d478, U+d480, U+d48d, U+d508, U+d53d, U+d5e4, U+d611, U+d61c, U+d68d, U+d6a8, U+d798;
}
/* [115] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.115.woff2) format('woff2');
  unicode-range: U+23, U+25, U+5f, U+a9, U+ac08, U+ac78, U+aca8, U+acac, U+ace8, U+ad70, U+adc0, U+addc, U+b137, U+b140, U+b208, U+b290, U+b2f5, U+b3c5, U+b3cc, U+b420, U+b429, U+b529, U+b530, U+b77d, U+b79c, U+b7a8, U+b7c9, U+b7f0, U+b7fc, U+b828, U+b860, U+b9ad, U+b9c1, U+b9c9, U+b9dd-b9de, U+b9e8, U+ba38-ba39, U+babb, U+bc00, U+bc8c, U+bca0, U+bca4, U+bcd1, U+bcfc, U+bd09, U+bdf0, U+be60, U+c0ad, U+c0b4, U+c0bc, U+c190, U+c1fc, U+c220, U+c288, U+c2b9, U+c2f6, U+c528, U+c545, U+c558, U+c5bc, U+c5d4, U+c600, U+c644, U+c6c0, U+c6c3, U+c721, U+c798, U+c7a1, U+c811, U+c838, U+c871, U+c904, U+c990, U+c9dc, U+cc38, U+cc44, U+cca0, U+cd1d, U+cd95, U+cda9, U+ce5c, U+cf00, U+cf58, U+d150, U+d22c, U+d305, U+d328, U+d37c, U+d3f0, U+d551, U+d5a5, U+d5c8, U+d5d8, U+d63c, U+d64d, U+d669, U+d734, U+d76c;
}
/* [116] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.116.woff2) format('woff2');
  unicode-range: U+26, U+2b, U+3e, U+40, U+7e, U+ac01, U+ac19, U+ac1d, U+aca0, U+aca9, U+acb0, U+ad8c, U+ae09, U+ae38, U+ae40, U+aed8, U+b09c, U+b0a0, U+b108, U+b204, U+b298, U+b2d8, U+b2eb-b2ec, U+b2f4, U+b313, U+b358, U+b450, U+b4e0, U+b54c, U+b610, U+b780, U+b78c, U+b791, U+b8e8, U+b958, U+b974, U+b984, U+b9b0, U+b9bc-b9bd, U+b9ce, U+ba70, U+bbfc, U+bc0f, U+bc15, U+bc1b, U+bc31, U+bc95, U+bcc0, U+bcc4, U+bd81, U+bd88, U+c0c8, U+c11d, U+c13c, U+c158, U+c18d, U+c1a1, U+c21c, U+c4f0, U+c54a, U+c560, U+c5b8, U+c5c8, U+c5f4, U+c628, U+c62c, U+c678, U+c6cc, U+c808, U+c810, U+c885, U+c88b, U+c900, U+c988, U+c99d, U+c9c8, U+cc3d-cc3e, U+cc45, U+cd08, U+ce20, U+cee4, U+d074, U+d0a4, U+d0dd, U+d2b9, U+d3b8, U+d3c9, U+d488, U+d544, U+d559, U+d56d, U+d588, U+d615, U+d648, U+d655, U+d658, U+d65c;
}
/* [117] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.117.woff2) format('woff2');
  unicode-range: U+d, U+48, U+7c, U+ac10, U+ac15, U+ac74, U+ac80, U+ac83, U+acc4, U+ad11, U+ad50, U+ad6d, U+adfc, U+ae00, U+ae08, U+ae4c, U+b0a8, U+b124, U+b144, U+b178, U+b274, U+b2a5, U+b2e8, U+b2f9, U+b354, U+b370, U+b418, U+b41c, U+b4f1, U+b514, U+b798, U+b808, U+b824-b825, U+b8cc, U+b978, U+b9d0, U+b9e4, U+baa9, U+bb3c, U+bc18, U+bc1c, U+bc30, U+bc84, U+bcf5, U+bcf8, U+bd84, U+be0c, U+be14, U+c0b0, U+c0c9, U+c0dd, U+c124, U+c2dd, U+c2e4, U+c2ec, U+c54c, U+c57c-c57d, U+c591, U+c5c5-c5c6, U+c5ed, U+c608, U+c640, U+c6b8, U+c6d4, U+c784, U+c7ac, U+c800-c801, U+c9c1, U+c9d1, U+cc28, U+cc98, U+cc9c, U+ccad, U+cd5c, U+cd94, U+cd9c, U+cde8, U+ce68, U+cf54, U+d0dc, U+d14c, U+d1a0, U+d1b5, U+d2f0, U+d30c, U+d310, U+d398, U+d45c, U+d50c, U+d53c, U+d560, U+d568, U+d589, U+d604, U+d6c4, U+d788;
}
/* [118] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.118.woff2) format('woff2');
  unicode-range: U+39, U+49, U+4d-4e, U+a0, U+ac04, U+ac1c, U+ac70, U+ac8c, U+acbd, U+acf5, U+acfc, U+ad00, U+ad6c, U+adf8, U+b098, U+b0b4, U+b294, U+b2c8, U+b300, U+b3c4, U+b3d9, U+b4dc, U+b4e4, U+b77c, U+b7ec, U+b85d, U+b97c, U+b9c8, U+b9cc, U+ba54, U+ba74, U+ba85, U+baa8, U+bb34, U+bb38, U+bbf8, U+bc14, U+bc29, U+bc88, U+bcf4, U+bd80, U+be44, U+c0c1, U+c11c, U+c120, U+c131, U+c138, U+c18c, U+c218, U+c2b5, U+c2e0, U+c544, U+c548, U+c5b4, U+c5d0, U+c5ec, U+c5f0, U+c601, U+c624, U+c694, U+c6a9, U+c6b0, U+c6b4, U+c6d0, U+c704, U+c720, U+c73c, U+c740, U+c744, U+c74c, U+c758, U+c77c, U+c785, U+c788, U+c790-c791, U+c7a5, U+c804, U+c815, U+c81c, U+c870, U+c8fc, U+c911, U+c9c4, U+ccb4, U+ce58, U+ce74, U+d06c, U+d0c0, U+d130, U+d2b8, U+d3ec, U+d504, U+d55c, U+d569, U+d574, U+d638, U+d654, U+d68c;
}
/* [119] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01eLGC5nwuDo-KBTUm6CryotyJROlrnQ.119.woff2) format('woff2');
  unicode-range: U+20-22, U+27-2a, U+2c-38, U+3a-3b, U+3f, U+41-47, U+4a-4c, U+4f-5d, U+61-7b, U+7d, U+a1, U+ab, U+ae, U+b7, U+bb, U+bf, U+2013-2014, U+201c-201d, U+2122, U+ac00, U+ace0, U+ae30, U+b2e4, U+b85c, U+b9ac, U+c0ac, U+c2a4, U+c2dc, U+c774, U+c778, U+c9c0, U+d558;
}
/* cyrillic */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01SLfg8U4h.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01SLzg8U4h.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01SL3g8U4h.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzg01SLPg8Q.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* [0] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.0.woff2) format('woff2');
  unicode-range: U+f9ca-fa0b, U+ff03-ff05, U+ff07, U+ff0a-ff0b, U+ff0d-ff19, U+ff1b, U+ff1d, U+ff20-ff5b, U+ff5d, U+ffe0-ffe3, U+ffe5-ffe6;
}
/* [1] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.1.woff2) format('woff2');
  unicode-range: U+f92f-f980, U+f982-f9c9;
}
/* [2] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.2.woff2) format('woff2');
  unicode-range: U+d723-d728, U+d72a-d733, U+d735-d748, U+d74a-d74f, U+d752-d753, U+d755-d757, U+d75a-d75f, U+d762-d764, U+d766-d768, U+d76a-d76b, U+d76d-d76f, U+d771-d787, U+d789-d78b, U+d78d-d78f, U+d791-d797, U+d79a, U+d79c, U+d79e-d7a3, U+f900-f909, U+f90b-f92e;
}
/* [3] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.3.woff2) format('woff2');
  unicode-range: U+d679-d68b, U+d68e-d69e, U+d6a0, U+d6a2-d6a7, U+d6a9-d6c3, U+d6c6-d6c7, U+d6c9-d6cb, U+d6cd-d6d3, U+d6d5-d6d6, U+d6d8-d6e3, U+d6e5-d6e7, U+d6e9-d6fb, U+d6fd-d717, U+d719-d71f, U+d721-d722;
}
/* [4] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.4.woff2) format('woff2');
  unicode-range: U+d5bc-d5c7, U+d5ca-d5cb, U+d5cd-d5cf, U+d5d1-d5d7, U+d5d9-d5da, U+d5dc, U+d5de-d5e3, U+d5e6-d5e7, U+d5e9-d5eb, U+d5ed-d5f6, U+d5f8, U+d5fa-d5ff, U+d602-d603, U+d605-d607, U+d609-d60f, U+d612-d613, U+d616-d61b, U+d61d-d637, U+d63a-d63b, U+d63d-d63f, U+d641-d647, U+d64a-d64c, U+d64e-d653, U+d656-d657, U+d659-d65b, U+d65d-d666, U+d668, U+d66a-d678;
}
/* [5] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.5.woff2) format('woff2');
  unicode-range: U+d507, U+d509-d50b, U+d50d-d513, U+d515-d53b, U+d53e-d53f, U+d541-d543, U+d545-d54c, U+d54e, U+d550, U+d552-d557, U+d55a-d55b, U+d55d-d55f, U+d561-d564, U+d566-d567, U+d56a, U+d56c, U+d56e-d573, U+d576-d577, U+d579-d583, U+d585-d586, U+d58a-d5a4, U+d5a6-d5bb;
}
/* [6] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.6.woff2) format('woff2');
  unicode-range: U+d464-d477, U+d47a-d47b, U+d47d-d47f, U+d481-d487, U+d489-d48a, U+d48c, U+d48e-d4e7, U+d4e9-d503, U+d505-d506;
}
/* [7] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.7.woff2) format('woff2');
  unicode-range: U+d3bf-d3c7, U+d3ca-d3cf, U+d3d1-d3eb, U+d3ee-d3ef, U+d3f1-d3f3, U+d3f5-d3fb, U+d3fd-d400, U+d402-d45b, U+d45d-d463;
}
/* [8] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.8.woff2) format('woff2');
  unicode-range: U+d2ff, U+d302-d304, U+d306-d30b, U+d30f, U+d311-d313, U+d315-d31b, U+d31e, U+d322-d324, U+d326-d327, U+d32a-d32b, U+d32d-d32f, U+d331-d337, U+d339-d33c, U+d33e-d37b, U+d37e-d37f, U+d381-d383, U+d385-d38b, U+d38e-d390, U+d392-d397, U+d39a-d39b, U+d39d-d39f, U+d3a1-d3a7, U+d3a9-d3aa, U+d3ac, U+d3ae-d3b3, U+d3b5-d3b7, U+d3b9-d3bb, U+d3bd-d3be;
}
/* [9] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.9.woff2) format('woff2');
  unicode-range: U+d257-d27f, U+d281-d29b, U+d29d-d29f, U+d2a1-d2ab, U+d2ad-d2b7, U+d2ba-d2bb, U+d2bd-d2bf, U+d2c1-d2c7, U+d2c9-d2ef, U+d2f2-d2f3, U+d2f5-d2f7, U+d2f9-d2fe;
}
/* [10] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.10.woff2) format('woff2');
  unicode-range: U+d1b4, U+d1b6-d1f3, U+d1f5-d22b, U+d22e-d22f, U+d231-d233, U+d235-d23b, U+d23d-d240, U+d242-d256;
}
/* [11] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.11.woff2) format('woff2');
  unicode-range: U+d105-d12f, U+d132-d133, U+d135-d137, U+d139-d13f, U+d141-d142, U+d144, U+d146-d14b, U+d14e-d14f, U+d151-d153, U+d155-d15b, U+d15e-d187, U+d189-d19f, U+d1a2-d1a3, U+d1a5-d1a7, U+d1a9-d1af, U+d1b2-d1b3;
}
/* [12] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.12.woff2) format('woff2');
  unicode-range: U+d04b-d04f, U+d051-d057, U+d059-d06b, U+d06d-d06f, U+d071-d073, U+d075-d07b, U+d07e-d0a3, U+d0a6-d0a7, U+d0a9-d0ab, U+d0ad-d0b3, U+d0b6, U+d0b8, U+d0ba-d0bf, U+d0c2-d0c3, U+d0c5-d0c7, U+d0c9-d0cf, U+d0d2, U+d0d6-d0db, U+d0de-d0df, U+d0e1-d0e3, U+d0e5-d0eb, U+d0ee-d0f0, U+d0f2-d104;
}
/* [13] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.13.woff2) format('woff2');
  unicode-range: U+cfa2-cfc3, U+cfc5-cfdf, U+cfe2-cfe3, U+cfe5-cfe7, U+cfe9-cff4, U+cff6-cffb, U+cffd-cfff, U+d001-d003, U+d005-d017, U+d019-d033, U+d036-d037, U+d039-d03b, U+d03d-d04a;
}
/* [14] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.14.woff2) format('woff2');
  unicode-range: U+cef0-cef3, U+cef6, U+cef9-ceff, U+cf01-cf03, U+cf05-cf07, U+cf09-cf0f, U+cf11-cf12, U+cf14-cf1b, U+cf1d-cf1f, U+cf21-cf2f, U+cf31-cf53, U+cf56-cf57, U+cf59-cf5b, U+cf5d-cf63, U+cf66, U+cf68, U+cf6a-cf6f, U+cf71-cf84, U+cf86-cf8b, U+cf8d-cfa1;
}
/* [15] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.15.woff2) format('woff2');
  unicode-range: U+ce3c-ce57, U+ce5a-ce5b, U+ce5d-ce5f, U+ce61-ce67, U+ce6a, U+ce6c, U+ce6e-ce73, U+ce76-ce77, U+ce79-ce7b, U+ce7d-ce83, U+ce85-ce88, U+ce8a-ce8f, U+ce91-ce93, U+ce95-ce97, U+ce99-ce9f, U+cea2, U+cea4-ceab, U+cead-cee3, U+cee6-cee7, U+cee9-ceeb, U+ceed-ceef;
}
/* [16] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.16.woff2) format('woff2');
  unicode-range: U+cd92-cd93, U+cd96-cd97, U+cd99-cd9b, U+cd9d-cda3, U+cda6-cda8, U+cdaa-cdaf, U+cdb1-cdc3, U+cdc5-cdcb, U+cdcd-cde7, U+cde9-ce03, U+ce05-ce1f, U+ce22-ce34, U+ce36-ce3b;
}
/* [17] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.17.woff2) format('woff2');
  unicode-range: U+ccef-cd07, U+cd0a-cd0b, U+cd0d-cd1a, U+cd1c, U+cd1e-cd2b, U+cd2d-cd5b, U+cd5d-cd77, U+cd79-cd91;
}
/* [18] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.18.woff2) format('woff2');
  unicode-range: U+cc3f-cc43, U+cc46-cc47, U+cc49-cc4b, U+cc4d-cc53, U+cc55-cc58, U+cc5a-cc5f, U+cc61-cc97, U+cc9a-cc9b, U+cc9d-cc9f, U+cca1-cca7, U+ccaa, U+ccac, U+ccae-ccb3, U+ccb6-ccb7, U+ccb9-ccbb, U+ccbd-cccf, U+ccd1-cce3, U+cce5-ccee;
}
/* [19] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.19.woff2) format('woff2');
  unicode-range: U+cb91-cbd3, U+cbd5-cbe3, U+cbe5-cc0b, U+cc0e-cc0f, U+cc11-cc13, U+cc15-cc1b, U+cc1d-cc20, U+cc23-cc27, U+cc2a-cc2b, U+cc2d, U+cc2f, U+cc31-cc37, U+cc3a, U+cc3c;
}
/* [20] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.20.woff2) format('woff2');
  unicode-range: U+caf4-cb47, U+cb4a-cb90;
}
/* [21] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.21.woff2) format('woff2');
  unicode-range: U+ca4a-ca4b, U+ca4e-ca4f, U+ca51-ca53, U+ca55-ca5b, U+ca5d-ca60, U+ca62-ca83, U+ca85-cabb, U+cabe-cabf, U+cac1-cac3, U+cac5-cacb, U+cacd-cad0, U+cad2, U+cad4-cad8, U+cada-caf3;
}
/* [22] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.22.woff2) format('woff2');
  unicode-range: U+c996-c997, U+c99a-c99c, U+c99e-c9bf, U+c9c2-c9c3, U+c9c5-c9c7, U+c9c9-c9cf, U+c9d2, U+c9d4, U+c9d7-c9d8, U+c9db, U+c9de-c9df, U+c9e1-c9e3, U+c9e5-c9e6, U+c9e8-c9eb, U+c9ee-c9f0, U+c9f2-c9f7, U+c9f9-ca0b, U+ca0d-ca28, U+ca2a-ca49;
}
/* [23] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.23.woff2) format('woff2');
  unicode-range: U+c8e9-c8f4, U+c8f6-c8fb, U+c8fe-c8ff, U+c901-c903, U+c905-c90b, U+c90e-c910, U+c912-c917, U+c919-c92b, U+c92d-c94f, U+c951-c953, U+c955-c96b, U+c96d-c973, U+c975-c987, U+c98a-c98b, U+c98d-c98f, U+c991-c995;
}
/* [24] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.24.woff2) format('woff2');
  unicode-range: U+c841-c84b, U+c84d-c86f, U+c872-c873, U+c875-c877, U+c879-c87f, U+c882-c884, U+c887-c88a, U+c88d-c8c3, U+c8c5-c8df, U+c8e1-c8e8;
}
/* [25] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.25.woff2) format('woff2');
  unicode-range: U+c779-c77b, U+c77e-c782, U+c786, U+c78b, U+c78d, U+c78f, U+c792-c793, U+c795, U+c797, U+c799-c79f, U+c7a2, U+c7a7-c7ab, U+c7ae-c7bb, U+c7bd-c7c0, U+c7c2-c7c7, U+c7c9-c7dc, U+c7de-c7ff, U+c802-c803, U+c805-c807, U+c809, U+c80b-c80f, U+c812, U+c814, U+c817-c81b, U+c81e-c81f, U+c821-c823, U+c825-c82e, U+c830-c837, U+c839-c83b, U+c83d-c840;
}
/* [26] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.26.woff2) format('woff2');
  unicode-range: U+c6bb-c6bf, U+c6c2, U+c6c4, U+c6c6-c6cb, U+c6ce-c6cf, U+c6d1-c6d3, U+c6d5-c6db, U+c6dd-c6df, U+c6e1-c6e7, U+c6e9-c6eb, U+c6ed-c6ef, U+c6f1-c6f8, U+c6fa-c703, U+c705-c707, U+c709-c70b, U+c70d-c716, U+c718, U+c71a-c71f, U+c722-c723, U+c725-c727, U+c729-c734, U+c736-c73b, U+c73e-c73f, U+c741-c743, U+c745-c74b, U+c74e-c750, U+c752-c757, U+c759-c773, U+c776-c777;
}
/* [27] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.27.woff2) format('woff2');
  unicode-range: U+c5f5-c5fb, U+c5fe, U+c602-c605, U+c607, U+c609-c60f, U+c611-c61a, U+c61c-c623, U+c626-c627, U+c629-c62b, U+c62d, U+c62f-c632, U+c636, U+c638, U+c63a-c63f, U+c642-c643, U+c645-c647, U+c649-c652, U+c656-c65b, U+c65d-c65f, U+c661-c663, U+c665-c677, U+c679-c67b, U+c67d-c693, U+c696-c697, U+c699-c69b, U+c69d-c6a3, U+c6a6, U+c6a8, U+c6aa-c6af, U+c6b2-c6b3, U+c6b5-c6b7, U+c6b9-c6ba;
}
/* [28] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.28.woff2) format('woff2');
  unicode-range: U+c517-c527, U+c52a-c52b, U+c52d-c52f, U+c531-c538, U+c53a, U+c53c, U+c53e-c543, U+c546-c547, U+c54b, U+c54d-c552, U+c556, U+c55a-c55b, U+c55d, U+c55f, U+c562-c563, U+c565-c567, U+c569-c56f, U+c572, U+c574, U+c576-c57b, U+c57e-c57f, U+c581-c583, U+c585-c586, U+c588-c58b, U+c58e, U+c590, U+c592-c596, U+c599-c5b3, U+c5b6-c5b7, U+c5ba, U+c5be-c5c3, U+c5ca-c5cb, U+c5cd, U+c5cf, U+c5d2-c5d3, U+c5d5-c5d7, U+c5d9-c5df, U+c5e1-c5e2, U+c5e4, U+c5e6-c5eb, U+c5ef, U+c5f1-c5f3;
}
/* [29] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.29.woff2) format('woff2');
  unicode-range: U+c475-c4ef, U+c4f2-c4f3, U+c4f5-c4f7, U+c4f9-c4ff, U+c502-c50b, U+c50d-c516;
}
/* [30] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.30.woff2) format('woff2');
  unicode-range: U+c3d0-c3d7, U+c3da-c3db, U+c3dd-c3de, U+c3e1-c3ec, U+c3ee-c3f3, U+c3f5-c42b, U+c42d-c463, U+c466-c474;
}
/* [31] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.31.woff2) format('woff2');
  unicode-range: U+c32b-c367, U+c36a-c36b, U+c36d-c36f, U+c371-c377, U+c37a-c37b, U+c37e-c383, U+c385-c387, U+c389-c3cf;
}
/* [32] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.32.woff2) format('woff2');
  unicode-range: U+c26a-c26b, U+c26d-c26f, U+c271-c273, U+c275-c27b, U+c27e-c287, U+c289-c28f, U+c291-c297, U+c299-c29a, U+c29c-c2a3, U+c2a5-c2a7, U+c2a9-c2ab, U+c2ad-c2b3, U+c2b6, U+c2b8, U+c2ba-c2bb, U+c2bd-c2db, U+c2de-c2df, U+c2e1-c2e2, U+c2e5-c2ea, U+c2ee, U+c2f0, U+c2f2-c2f5, U+c2f7, U+c2fa-c2fb, U+c2fd-c2ff, U+c301-c307, U+c309-c30c, U+c30e-c312, U+c315-c323, U+c325-c328, U+c32a;
}
/* [33] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.33.woff2) format('woff2');
  unicode-range: U+c1bc-c1c3, U+c1c5-c1df, U+c1e1-c1fb, U+c1fd-c203, U+c205-c20c, U+c20e, U+c210-c217, U+c21a-c21b, U+c21d-c21e, U+c221-c227, U+c229-c22a, U+c22c, U+c22e, U+c230, U+c233-c24f, U+c251-c257, U+c259-c269;
}
/* [34] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.34.woff2) format('woff2');
  unicode-range: U+c101-c11b, U+c11f, U+c121-c123, U+c125-c12b, U+c12e, U+c132-c137, U+c13a-c13b, U+c13d-c13f, U+c141-c147, U+c14a, U+c14c-c153, U+c155-c157, U+c159-c15b, U+c15d-c166, U+c169-c16f, U+c171-c177, U+c179-c18b, U+c18e-c18f, U+c191-c193, U+c195-c19b, U+c19d-c19e, U+c1a0, U+c1a2-c1a4, U+c1a6-c1bb;
}
/* [35] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.35.woff2) format('woff2');
  unicode-range: U+c049-c057, U+c059-c05b, U+c05d-c05f, U+c061-c067, U+c069-c08f, U+c091-c0ab, U+c0ae-c0af, U+c0b1-c0b3, U+c0b5, U+c0b7-c0bb, U+c0be, U+c0c2-c0c7, U+c0ca-c0cb, U+c0cd-c0cf, U+c0d1-c0d7, U+c0d9-c0da, U+c0dc, U+c0de-c0e3, U+c0e5-c0eb, U+c0ed-c0f3, U+c0f6, U+c0f8, U+c0fa-c0ff;
}
/* [36] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.36.woff2) format('woff2');
  unicode-range: U+bfa7-bfaf, U+bfb1-bfc4, U+bfc6-bfcb, U+bfce-bfcf, U+bfd1-bfd3, U+bfd5-bfdb, U+bfdd-c048;
}
/* [37] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.37.woff2) format('woff2');
  unicode-range: U+bf07, U+bf09-bf3f, U+bf41-bf4f, U+bf52-bf54, U+bf56-bfa6;
}
/* [38] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.38.woff2) format('woff2');
  unicode-range: U+be56, U+be58, U+be5c-be5f, U+be62-be63, U+be65-be67, U+be69-be74, U+be76-be7b, U+be7e-be7f, U+be81-be8e, U+be90, U+be92-bea7, U+bea9-becf, U+bed2-bed3, U+bed5-bed6, U+bed9-bee3, U+bee6-bf06;
}
/* [39] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.39.woff2) format('woff2');
  unicode-range: U+bdb0-bdd3, U+bdd5-bdef, U+bdf1-be0b, U+be0d-be0f, U+be11-be13, U+be15-be43, U+be46-be47, U+be49-be4b, U+be4d-be53;
}
/* [40] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.40.woff2) format('woff2');
  unicode-range: U+bd03, U+bd06, U+bd08, U+bd0a-bd0f, U+bd11-bd22, U+bd25-bd47, U+bd49-bd58, U+bd5a-bd7f, U+bd82-bd83, U+bd85-bd87, U+bd8a-bd8f, U+bd91-bd92, U+bd94, U+bd96-bd98, U+bd9a-bdaf;
}
/* [41] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.41.woff2) format('woff2');
  unicode-range: U+bc4e-bc83, U+bc86-bc87, U+bc89-bc8b, U+bc8d-bc93, U+bc96, U+bc98, U+bc9b-bc9f, U+bca2-bca3, U+bca5-bca7, U+bca9-bcb2, U+bcb4-bcbb, U+bcbe-bcbf, U+bcc1-bcc3, U+bcc5-bccc, U+bcce-bcd0, U+bcd2-bcd4, U+bcd6-bcf3, U+bcf7, U+bcf9-bcfb, U+bcfd-bd02;
}
/* [42] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.42.woff2) format('woff2');
  unicode-range: U+bb90-bba3, U+bba5-bbab, U+bbad-bbbf, U+bbc1-bbf7, U+bbfa-bbfb, U+bbfd-bbfe, U+bc01-bc07, U+bc09-bc0a, U+bc0e, U+bc10, U+bc12-bc13, U+bc17, U+bc19-bc1a, U+bc1e, U+bc20-bc23, U+bc26, U+bc28, U+bc2a-bc2c, U+bc2e-bc2f, U+bc32-bc33, U+bc35-bc37, U+bc39-bc3f, U+bc41-bc42, U+bc44, U+bc46-bc48, U+bc4a-bc4d;
}
/* [43] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.43.woff2) format('woff2');
  unicode-range: U+bae6-bafb, U+bafd-bb17, U+bb19-bb33, U+bb37, U+bb39-bb3a, U+bb3d-bb43, U+bb45-bb46, U+bb48, U+bb4a-bb4f, U+bb51-bb53, U+bb55-bb57, U+bb59-bb62, U+bb64-bb8f;
}
/* [44] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.44.woff2) format('woff2');
  unicode-range: U+ba30-ba37, U+ba3a-ba3b, U+ba3d-ba3f, U+ba41-ba47, U+ba49-ba4a, U+ba4c, U+ba4e-ba53, U+ba56-ba57, U+ba59-ba5b, U+ba5d-ba63, U+ba65-ba66, U+ba68-ba6f, U+ba71-ba73, U+ba75-ba77, U+ba79-ba84, U+ba86, U+ba88-baa7, U+baaa, U+baad-baaf, U+bab1-bab7, U+baba, U+babc, U+babe-bae5;
}
/* [45] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.45.woff2) format('woff2');
  unicode-range: U+b96e-b973, U+b976-b977, U+b979-b97b, U+b97d-b983, U+b986, U+b988, U+b98a-b98d, U+b98f-b9ab, U+b9ae-b9af, U+b9b1-b9b3, U+b9b5-b9bb, U+b9be, U+b9c0, U+b9c2-b9c7, U+b9ca-b9cb, U+b9cd, U+b9d2-b9d7, U+b9da, U+b9dc, U+b9df-b9e0, U+b9e2, U+b9e6-b9e7, U+b9e9-b9f3, U+b9f6, U+b9f8, U+b9fb-ba2f;
}
/* [46] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.46.woff2) format('woff2');
  unicode-range: U+b8bf-b8cb, U+b8cd-b8e0, U+b8e2-b8e7, U+b8ea-b8eb, U+b8ed-b8ef, U+b8f1-b8f7, U+b8fa, U+b8fc, U+b8fe-b903, U+b905-b917, U+b919-b91f, U+b921-b93b, U+b93d-b957, U+b95a-b95b, U+b95d-b95f, U+b961-b967, U+b969-b96c;
}
/* [47] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.47.woff2) format('woff2');
  unicode-range: U+b80d-b80f, U+b811-b817, U+b81a, U+b81c-b823, U+b826-b827, U+b829-b82b, U+b82d-b833, U+b836, U+b83a-b83f, U+b841-b85b, U+b85e-b85f, U+b861-b863, U+b865-b86b, U+b86e, U+b870, U+b872-b8af, U+b8b1-b8be;
}
/* [48] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.48.woff2) format('woff2');
  unicode-range: U+b74d-b75f, U+b761-b763, U+b765-b774, U+b776-b77b, U+b77e-b77f, U+b781-b783, U+b785-b78b, U+b78e, U+b792-b796, U+b79a-b79b, U+b79d-b7a7, U+b7aa, U+b7ae-b7b3, U+b7b6-b7c8, U+b7ca-b7eb, U+b7ee-b7ef, U+b7f1-b7f3, U+b7f5-b7fb, U+b7fe, U+b802-b806, U+b80a-b80b;
}
/* [49] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.49.woff2) format('woff2');
  unicode-range: U+b6a7-b6aa, U+b6ac-b6b0, U+b6b2-b6ef, U+b6f1-b727, U+b72a-b72b, U+b72d-b72e, U+b731-b737, U+b739-b73a, U+b73c-b743, U+b745-b74c;
}
/* [50] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.50.woff2) format('woff2');
  unicode-range: U+b605-b60f, U+b612-b617, U+b619-b624, U+b626-b69b, U+b69e-b6a3, U+b6a5-b6a6;
}
/* [51] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.51.woff2) format('woff2');
  unicode-range: U+b55f, U+b562-b583, U+b585-b59f, U+b5a2-b5a3, U+b5a5-b5a7, U+b5a9-b5b2, U+b5b5-b5ba, U+b5bd-b604;
}
/* [52] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.52.woff2) format('woff2');
  unicode-range: U+b4a5-b4b6, U+b4b8-b4bf, U+b4c1-b4c7, U+b4c9-b4db, U+b4de-b4df, U+b4e1-b4e2, U+b4e5-b4eb, U+b4ee, U+b4f0, U+b4f2-b513, U+b516-b517, U+b519-b51a, U+b51d-b523, U+b526, U+b528, U+b52b-b52f, U+b532-b533, U+b535-b537, U+b539-b53f, U+b541-b544, U+b546-b54b, U+b54d-b54f, U+b551-b55b, U+b55d-b55e;
}
/* [53] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.53.woff2) format('woff2');
  unicode-range: U+b3f8-b3fb, U+b3fd-b40f, U+b411-b417, U+b419-b41b, U+b41d-b41f, U+b421-b427, U+b42a-b42b, U+b42d-b44f, U+b452-b453, U+b455-b457, U+b459-b45f, U+b462-b464, U+b466-b46b, U+b46d-b47f, U+b481-b4a3;
}
/* [54] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.54.woff2) format('woff2');
  unicode-range: U+b342-b353, U+b356-b357, U+b359-b35b, U+b35d-b35e, U+b360-b363, U+b366, U+b368, U+b36a-b36d, U+b36f, U+b372-b373, U+b375-b377, U+b379-b37f, U+b381-b382, U+b384, U+b386-b38b, U+b38d-b3c3, U+b3c6-b3c7, U+b3c9-b3ca, U+b3cd-b3d3, U+b3d6, U+b3d8, U+b3da-b3f7;
}
/* [55] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.55.woff2) format('woff2');
  unicode-range: U+b27c-b283, U+b285-b28f, U+b292-b293, U+b295-b297, U+b29a-b29f, U+b2a1-b2a4, U+b2a7-b2a9, U+b2ab, U+b2ad-b2c7, U+b2ca-b2cb, U+b2cd-b2cf, U+b2d1-b2d7, U+b2da, U+b2dc, U+b2de-b2e3, U+b2e7, U+b2e9-b2ea, U+b2ef-b2f3, U+b2f6, U+b2f8, U+b2fa-b2fb, U+b2fd-b2fe, U+b302-b303, U+b305-b307, U+b309-b30f, U+b312, U+b316-b31b, U+b31d-b341;
}
/* [56] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.56.woff2) format('woff2');
  unicode-range: U+b1d6-b1e7, U+b1e9-b1fc, U+b1fe-b203, U+b206-b207, U+b209-b20b, U+b20d-b213, U+b216-b21f, U+b221-b257, U+b259-b273, U+b275-b27b;
}
/* [57] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.57.woff2) format('woff2');
  unicode-range: U+b120-b122, U+b126-b127, U+b129-b12b, U+b12d-b133, U+b136, U+b138, U+b13a-b13f, U+b142-b143, U+b145-b14f, U+b151-b153, U+b156-b157, U+b159-b177, U+b17a-b17b, U+b17d-b17f, U+b181-b187, U+b189-b18c, U+b18e-b191, U+b195-b1a7, U+b1a9-b1cb, U+b1cd-b1d5;
}
/* [58] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.58.woff2) format('woff2');
  unicode-range: U+b05f-b07b, U+b07e-b07f, U+b081-b083, U+b085-b08b, U+b08d-b097, U+b09b, U+b09d-b09f, U+b0a2-b0a7, U+b0aa, U+b0b0, U+b0b2, U+b0b6-b0b7, U+b0b9-b0bb, U+b0bd-b0c3, U+b0c6-b0c7, U+b0ca-b0cf, U+b0d1-b0df, U+b0e1-b0e4, U+b0e6-b107, U+b10a-b10b, U+b10d-b10f, U+b111-b112, U+b114-b117, U+b119-b11a, U+b11c-b11f;
}
/* [59] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.59.woff2) format('woff2');
  unicode-range: U+afac-afb7, U+afba-afbb, U+afbd-afbf, U+afc1-afc6, U+afca-afcc, U+afce-afd3, U+afd5-afe7, U+afe9-afef, U+aff1-b00b, U+b00d-b00f, U+b011-b013, U+b015-b01b, U+b01d-b027, U+b029-b043, U+b045-b047, U+b049, U+b04b, U+b04d-b052, U+b055-b056, U+b058-b05c, U+b05e;
}
/* [60] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.60.woff2) format('woff2');
  unicode-range: U+af03-af07, U+af09-af2b, U+af2e-af33, U+af35-af3b, U+af3e-af40, U+af44-af47, U+af4a-af5c, U+af5e-af63, U+af65-af7f, U+af81-afab;
}
/* [61] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.61.woff2) format('woff2');
  unicode-range: U+ae56-ae5b, U+ae5e-ae60, U+ae62-ae64, U+ae66-ae67, U+ae69-ae6b, U+ae6d-ae83, U+ae85-aebb, U+aebf, U+aec1-aec3, U+aec5-aecb, U+aece, U+aed0, U+aed2-aed7, U+aed9-aef3, U+aef5-af02;
}
/* [62] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.62.woff2) format('woff2');
  unicode-range: U+ad9c-ada3, U+ada5-adbf, U+adc1-adc3, U+adc5-adc7, U+adc9-add2, U+add4-addb, U+addd-addf, U+ade1-ade3, U+ade5-adf7, U+adfa-adfb, U+adfd-adff, U+ae02-ae07, U+ae0a, U+ae0c, U+ae0e-ae13, U+ae15-ae2f, U+ae31-ae33, U+ae35-ae37, U+ae39-ae3f, U+ae42, U+ae44, U+ae46-ae49, U+ae4b, U+ae4f, U+ae51-ae53, U+ae55;
}
/* [63] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.63.woff2) format('woff2');
  unicode-range: U+ace2-ace3, U+ace5-ace6, U+ace9-acef, U+acf2, U+acf4, U+acf7-acfb, U+acfe-acff, U+ad01-ad03, U+ad05-ad0b, U+ad0d-ad10, U+ad12-ad1b, U+ad1d-ad33, U+ad35-ad48, U+ad4a-ad4f, U+ad51-ad6b, U+ad6e-ad6f, U+ad71-ad72, U+ad77-ad7c, U+ad7e, U+ad80, U+ad82-ad87, U+ad89-ad8b, U+ad8d-ad8f, U+ad91-ad9b;
}
/* [64] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.64.woff2) format('woff2');
  unicode-range: U+ac25-ac2c, U+ac2e, U+ac30, U+ac32-ac37, U+ac39-ac3f, U+ac41-ac4c, U+ac4e-ac6f, U+ac72-ac73, U+ac75-ac76, U+ac79-ac7f, U+ac82, U+ac84-ac88, U+ac8a-ac8b, U+ac8d-ac8f, U+ac91-ac93, U+ac95-ac9b, U+ac9d-ac9e, U+aca1-aca7, U+acab, U+acad-acaf, U+acb1-acb7, U+acba-acbb, U+acbe-acc0, U+acc2-acc3, U+acc5-acdf;
}
/* [65] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.65.woff2) format('woff2');
  unicode-range: U+99df, U+99ed, U+99f1, U+99ff, U+9a01, U+9a08, U+9a0e-9a0f, U+9a19, U+9a2b, U+9a30, U+9a36-9a37, U+9a40, U+9a43, U+9a45, U+9a4d, U+9a55, U+9a57, U+9a5a-9a5b, U+9a5f, U+9a62, U+9a65, U+9a69-9a6a, U+9aa8, U+9ab8, U+9ad3, U+9ae5, U+9aee, U+9b1a, U+9b27, U+9b2a, U+9b31, U+9b3c, U+9b41-9b45, U+9b4f, U+9b54, U+9b5a, U+9b6f, U+9b8e, U+9b91, U+9b9f, U+9bab, U+9bae, U+9bc9, U+9bd6, U+9be4, U+9be8, U+9c0d, U+9c10, U+9c12, U+9c15, U+9c25, U+9c32, U+9c3b, U+9c47, U+9c49, U+9c57, U+9ce5, U+9ce7, U+9ce9, U+9cf3-9cf4, U+9cf6, U+9d09, U+9d1b, U+9d26, U+9d28, U+9d3b, U+9d51, U+9d5d, U+9d60-9d61, U+9d6c, U+9d72, U+9da9, U+9daf, U+9db4, U+9dc4, U+9dd7, U+9df2, U+9df8-9dfa, U+9e1a, U+9e1e, U+9e75, U+9e79, U+9e7d, U+9e7f, U+9e92-9e93, U+9e97, U+9e9d, U+9e9f, U+9ea5, U+9eb4-9eb5, U+9ebb, U+9ebe, U+9ec3, U+9ecd-9ece, U+9ed4, U+9ed8, U+9edb-9edc, U+9ede, U+9ee8, U+9ef4, U+9f07-9f08, U+9f0e, U+9f13, U+9f20, U+9f3b, U+9f4a-9f4b, U+9f4e, U+9f52, U+9f5f, U+9f61, U+9f67, U+9f6a, U+9f6c, U+9f77, U+9f8d, U+9f90, U+9f95, U+9f9c, U+ac02-ac03, U+ac05-ac06, U+ac09-ac0f, U+ac17-ac18, U+ac1b, U+ac1e-ac1f, U+ac21-ac23;
}
/* [66] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.66.woff2) format('woff2');
  unicode-range: U+96a7-96a8, U+96aa, U+96b1, U+96b7, U+96bb, U+96c0-96c1, U+96c4-96c5, U+96c7, U+96c9, U+96cb-96ce, U+96d5-96d6, U+96d9, U+96db-96dc, U+96e2-96e3, U+96e8-96ea, U+96ef-96f0, U+96f2, U+96f6-96f7, U+96f9, U+96fb, U+9700, U+9706-9707, U+9711, U+9713, U+9716, U+9719, U+971c, U+971e, U+9727, U+9730, U+9732, U+9739, U+973d, U+9742, U+9744, U+9748, U+9756, U+975c, U+9761, U+9769, U+976d, U+9774, U+9777, U+977a, U+978b, U+978d, U+978f, U+97a0, U+97a8, U+97ab, U+97ad, U+97c6, U+97cb, U+97dc, U+97f6, U+97fb, U+97ff-9803, U+9805-9806, U+9808, U+980a, U+980c, U+9810-9813, U+9817-9818, U+982d, U+9830, U+9838-9839, U+983b, U+9846, U+984c-984e, U+9854, U+9858, U+985a, U+985e, U+9865, U+9867, U+986b, U+986f, U+98af, U+98b1, U+98c4, U+98c7, U+98db-98dc, U+98e1-98e2, U+98ed-98ef, U+98f4, U+98fc-98fe, U+9903, U+9909-990a, U+990c, U+9910, U+9913, U+9918, U+991e, U+9920, U+9928, U+9945, U+9949, U+994b-994d, U+9951-9952, U+9954, U+9957, U+9996, U+999d, U+99a5, U+99a8, U+99ac-99ae, U+99b1, U+99b3-99b4, U+99b9, U+99c1, U+99d0-99d2, U+99d5, U+99d9, U+99dd;
}
/* [67] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.67.woff2) format('woff2');
  unicode-range: U+920d, U+9210-9212, U+9217, U+921e, U+9234, U+923a, U+923f-9240, U+9245, U+9249, U+9257, U+925b, U+925e, U+9262, U+9264-9266, U+9283, U+9285, U+9291, U+9293, U+9296, U+9298, U+929c, U+92b3, U+92b6-92b7, U+92b9, U+92cc, U+92cf, U+92d2, U+92e4, U+92ea, U+92f8, U+92fc, U+9304, U+9310, U+9318, U+931a, U+931e-9322, U+9324, U+9326, U+9328, U+932b, U+932e-932f, U+9348, U+934a-934b, U+934d, U+9354, U+935b, U+936e, U+9375, U+937c, U+937e, U+938c, U+9394, U+9396, U+939a, U+93a3, U+93a7, U+93ac-93ad, U+93b0, U+93c3, U+93d1, U+93de, U+93e1, U+93e4, U+93f6, U+9404, U+9418, U+9425, U+942b, U+9435, U+9438, U+9444, U+9451-9452, U+945b, U+947d, U+947f, U+9583, U+9589, U+958f, U+9591-9592, U+9594, U+9598, U+95a3-95a5, U+95a8, U+95ad, U+95b1, U+95bb-95bc, U+95c7, U+95ca, U+95d4-95d6, U+95dc, U+95e1-95e2, U+961c, U+9621, U+962a, U+962e, U+9632, U+963b, U+963f-9640, U+9642, U+9644, U+964b-964d, U+9650, U+965b-965f, U+9662-9664, U+966a, U+9670, U+9673, U+9675-9678, U+967d, U+9685-9686, U+968a-968b, U+968d-968e, U+9694-9695, U+9698-9699, U+969b-969c, U+96a3;
}
/* [68] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.68.woff2) format('woff2');
  unicode-range: U+8fa8, U+8fad, U+8faf-8fb2, U+8fc2, U+8fc5, U+8fce, U+8fd4, U+8fe6, U+8fea-8feb, U+8fed, U+8ff0, U+8ff2, U+8ff7, U+8ff9, U+8ffd, U+9000-9003, U+9005-9006, U+9008, U+900b, U+900d, U+900f-9011, U+9014-9015, U+9017, U+9019, U+901d-9023, U+902e, U+9031-9032, U+9035, U+9038, U+903c, U+903e, U+9041-9042, U+9047, U+904a-904b, U+904d-904e, U+9050-9051, U+9054-9055, U+9059, U+905c-905e, U+9060-9061, U+9063, U+9069, U+906d-906f, U+9072, U+9075, U+9077-9078, U+907a, U+907c-907d, U+907f-9084, U+9087-9088, U+908a, U+908f, U+9091, U+9095, U+9099, U+90a2-90a3, U+90a6, U+90a8, U+90aa, U+90af-90b1, U+90b5, U+90b8, U+90c1, U+90ca, U+90de, U+90e1, U+90ed, U+90f5, U+9102, U+9112, U+9115, U+9119, U+9127, U+912d, U+9132, U+9149-914e, U+9152, U+9162, U+9169-916a, U+916c, U+9175, U+9177-9178, U+9187, U+9189, U+918b, U+918d, U+9192, U+919c, U+91ab-91ac, U+91ae-91af, U+91b1, U+91b4-91b5, U+91c0, U+91c7, U+91c9, U+91cb, U+91cf-91d0, U+91d7-91d8, U+91dc-91dd, U+91e3, U+91e7, U+91ea, U+91f5;
}
/* [69] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.69.woff2) format('woff2');
  unicode-range: U+8c6a-8c6b, U+8c79-8c7a, U+8c82, U+8c8a, U+8c8c, U+8c9d-8c9e, U+8ca0-8ca2, U+8ca7-8cac, U+8caf-8cb0, U+8cb3-8cb4, U+8cb6-8cb8, U+8cbb-8cbd, U+8cbf-8cc4, U+8cc7-8cc8, U+8cca, U+8cd1, U+8cd3, U+8cda, U+8cdc, U+8cde, U+8ce0, U+8ce2-8ce4, U+8ce6, U+8cea, U+8ced, U+8cf4, U+8cfb-8cfd, U+8d04-8d05, U+8d07-8d08, U+8d0a, U+8d0d, U+8d13, U+8d16, U+8d64, U+8d66, U+8d6b, U+8d70, U+8d73-8d74, U+8d77, U+8d85, U+8d8a, U+8d99, U+8da3, U+8da8, U+8db3, U+8dba, U+8dbe, U+8dc6, U+8dcb-8dcc, U+8dcf, U+8ddb, U+8ddd, U+8de1, U+8de3, U+8de8, U+8df3, U+8e0a, U+8e0f-8e10, U+8e1e, U+8e2a, U+8e30, U+8e35, U+8e42, U+8e44, U+8e47-8e4a, U+8e59, U+8e5f-8e60, U+8e74, U+8e76, U+8e81, U+8e87, U+8e8a, U+8e8d, U+8eaa-8eac, U+8ec0, U+8ecb-8ecc, U+8ed2, U+8edf, U+8eeb, U+8ef8, U+8efb, U+8efe, U+8f03, U+8f05, U+8f09, U+8f12-8f15, U+8f1b-8f1f, U+8f26-8f27, U+8f29-8f2a, U+8f2f, U+8f33, U+8f38-8f39, U+8f3b, U+8f3e-8f3f, U+8f44-8f45, U+8f49, U+8f4d-8f4e, U+8f5d, U+8f5f, U+8f62, U+8f9b-8f9c, U+8fa3, U+8fa6;
}
/* [70] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.70.woff2) format('woff2');
  unicode-range: U+8941, U+8944, U+895f, U+8964, U+896a, U+8972, U+8981, U+8983, U+8986-8987, U+898f, U+8993, U+8996, U+89a1, U+89a9-89aa, U+89b2, U+89ba, U+89bd, U+89c0, U+89d2, U+89e3, U+89f4, U+89f8, U+8a02-8a03, U+8a08, U+8a0a, U+8a0c, U+8a0e, U+8a13, U+8a16-8a17, U+8a1b, U+8a1d, U+8a1f, U+8a23, U+8a25, U+8a2a, U+8a2d, U+8a31, U+8a34, U+8a36, U+8a3a-8a3b, U+8a50, U+8a54-8a55, U+8a5b, U+8a5e, U+8a60, U+8a62-8a63, U+8a66, U+8a6d-8a6e, U+8a70, U+8a72-8a73, U+8a75, U+8a79, U+8a85, U+8a87, U+8a8c-8a8d, U+8a93, U+8a95, U+8a98, U+8aa0-8aa1, U+8aa3-8aa6, U+8aa8, U+8aaa, U+8ab0, U+8ab2, U+8ab9, U+8abc, U+8abe-8abf, U+8ac2, U+8ac4, U+8ac7, U+8acb, U+8acd, U+8acf, U+8ad2, U+8ad6, U+8adb-8adc, U+8ae1, U+8ae6-8ae7, U+8aea-8aeb, U+8aed-8aee, U+8af1, U+8af6-8af8, U+8afa, U+8afe, U+8b00-8b02, U+8b04, U+8b0e, U+8b10, U+8b14, U+8b16-8b17, U+8b19-8b1b, U+8b1d, U+8b20, U+8b28, U+8b2b-8b2c, U+8b33, U+8b39, U+8b41, U+8b49, U+8b4e-8b4f, U+8b58, U+8b5a, U+8b5c, U+8b66, U+8b6c, U+8b6f-8b70, U+8b74, U+8b77, U+8b7d, U+8b80, U+8b8a, U+8b90, U+8b92-8b93, U+8b96, U+8b9a, U+8c37, U+8c3f, U+8c41, U+8c46, U+8c48, U+8c4a, U+8c4c, U+8c55, U+8c5a, U+8c61;
}
/* [71] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.71.woff2) format('woff2');
  unicode-range: U+858f, U+8591, U+8594, U+859b, U+85a6, U+85a8-85aa, U+85af-85b0, U+85ba, U+85c1, U+85c9, U+85cd-85cf, U+85d5, U+85dc-85dd, U+85e4-85e5, U+85e9-85ea, U+85f7, U+85fa-85fb, U+85ff, U+8602, U+8606-8607, U+860a, U+8616-8617, U+861a, U+862d, U+863f, U+864e, U+8650, U+8654-8655, U+865b-865c, U+865e-865f, U+8667, U+8679, U+868a, U+868c, U+8693, U+86a3-86a4, U+86a9, U+86c7, U+86cb, U+86d4, U+86d9, U+86db, U+86df, U+86e4, U+86ed, U+86fe, U+8700, U+8702-8703, U+8708, U+8718, U+871a, U+871c, U+874e, U+8755, U+8757, U+875f, U+8766, U+8768, U+8774, U+8776, U+8778, U+8782, U+878d, U+879f, U+87a2, U+87b3, U+87ba, U+87c4, U+87e0, U+87ec, U+87ef, U+87f2, U+87f9, U+87fb, U+87fe, U+8805, U+881f, U+8822-8823, U+8831, U+8836, U+883b, U+8840, U+8846, U+884d, U+8852-8853, U+8857, U+8859, U+885b, U+885d, U+8861-8863, U+8868, U+886b, U+8870, U+8872, U+8877, U+887e-887f, U+8881-8882, U+8888, U+888b, U+888d, U+8892, U+8896-8897, U+889e, U+88ab, U+88b4, U+88c1-88c2, U+88cf, U+88d4-88d5, U+88d9, U+88dc-88dd, U+88df, U+88e1, U+88e8, U+88f3-88f5, U+88f8, U+88fd, U+8907, U+8910, U+8912-8913, U+8918-8919, U+8925, U+892a, U+8936, U+8938, U+893b;
}
/* [72] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.72.woff2) format('woff2');
  unicode-range: U+82a6, U+82a9, U+82ac-82af, U+82b3, U+82b7-82b9, U+82bb-82bd, U+82bf, U+82d1-82d2, U+82d4-82d5, U+82d7, U+82db, U+82de-82df, U+82e1, U+82e5-82e7, U+82fd-82fe, U+8301-8305, U+8309, U+8317, U+8328, U+832b, U+832f, U+8331, U+8334-8336, U+8338-8339, U+8340, U+8347, U+8349-834a, U+834f, U+8351-8352, U+8373, U+8377, U+837b, U+8389-838a, U+838e, U+8396, U+8398, U+839e, U+83a2, U+83a9-83ab, U+83bd, U+83c1, U+83c5, U+83c9-83ca, U+83cc, U+83d3, U+83d6, U+83dc, U+83e9, U+83eb, U+83ef-83f2, U+83f4, U+83f9, U+83fd, U+8403-8404, U+840a, U+840c-840e, U+8429, U+842c, U+8431, U+8438, U+843d, U+8449, U+8457, U+845b, U+8461, U+8463, U+8466, U+846b-846c, U+846f, U+8475, U+847a, U+8490, U+8494, U+8499, U+849c, U+84a1, U+84b2, U+84b8, U+84bb-84bc, U+84bf-84c0, U+84c2, U+84c4, U+84c6, U+84c9, U+84cb, U+84cd, U+84d1, U+84da, U+84ec, U+84ee, U+84f4, U+84fc, U+8511, U+8513-8514, U+8517-8518, U+851a, U+851e, U+8521, U+8523, U+8525, U+852c-852d, U+852f, U+853d, U+853f, U+8541, U+8543, U+8549, U+854e, U+8553, U+8559, U+8563, U+8568-856a, U+856d, U+8584, U+8587;
}
/* [73] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.73.woff2) format('woff2');
  unicode-range: U+8033, U+8036, U+803d, U+803f, U+8043, U+8046, U+804a, U+8056, U+8058, U+805a, U+805e, U+806f-8070, U+8072-8073, U+8077, U+807d-807f, U+8084-8087, U+8089, U+808b-808c, U+8096, U+809b, U+809d, U+80a1-80a2, U+80a5, U+80a9-80aa, U+80af, U+80b1-80b2, U+80b4, U+80ba, U+80c3-80c4, U+80cc, U+80ce, U+80da-80db, U+80de, U+80e1, U+80e4-80e5, U+80f1, U+80f4, U+80f8, U+80fd, U+8102, U+8105-8108, U+810a, U+8118, U+811a-811b, U+8123, U+8129, U+812b, U+812f, U+8139, U+813e, U+814b, U+814e, U+8150-8151, U+8154-8155, U+8165-8166, U+816b, U+8170-8171, U+8178-817a, U+817f-8180, U+8188, U+818a, U+818f, U+819a, U+819c-819d, U+81a0, U+81a3, U+81a8, U+81b3, U+81b5, U+81ba, U+81bd-81c0, U+81c2, U+81c6, U+81cd, U+81d8, U+81df, U+81e3, U+81e5, U+81e7-81e8, U+81ed, U+81f3-81f4, U+81fa-81fc, U+81fe, U+8205, U+8208, U+820a, U+820c-820d, U+8212, U+821b-821c, U+821e-821f, U+8221, U+822a-822c, U+8235-8237, U+8239, U+8240, U+8245, U+8247, U+8259, U+8264, U+8266, U+826e-826f, U+8271, U+8276, U+8278, U+827e, U+828b, U+828d-828e, U+8292, U+8299-829a, U+829d, U+829f, U+82a5;
}
/* [74] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.74.woff2) format('woff2');
  unicode-range: U+7d2f-7d30, U+7d33, U+7d35, U+7d39-7d3a, U+7d42-7d46, U+7d50, U+7d5e, U+7d61-7d62, U+7d66, U+7d68, U+7d6a, U+7d6e, U+7d71-7d73, U+7d76, U+7d79, U+7d7f, U+7d8e-7d8f, U+7d93, U+7d9c, U+7da0, U+7da2, U+7dac-7dad, U+7db1-7db2, U+7db4-7db5, U+7db8, U+7dba-7dbb, U+7dbd-7dbf, U+7dc7, U+7dca-7dcb, U+7dd6, U+7dd8, U+7dda, U+7ddd-7dde, U+7de0-7de1, U+7de3, U+7de8-7de9, U+7dec, U+7def, U+7df4, U+7dfb, U+7e09-7e0a, U+7e15, U+7e1b, U+7e1d-7e1f, U+7e21, U+7e23, U+7e2b, U+7e2e-7e2f, U+7e31, U+7e37, U+7e3d-7e3e, U+7e43, U+7e46-7e47, U+7e52, U+7e54-7e55, U+7e5e, U+7e61, U+7e69-7e6b, U+7e6d, U+7e70, U+7e79, U+7e7c, U+7e82, U+7e8c, U+7e8f, U+7e93, U+7e96, U+7e98, U+7e9b-7e9c, U+7f36, U+7f38, U+7f3a, U+7f4c, U+7f50, U+7f54-7f55, U+7f6a-7f6b, U+7f6e, U+7f70, U+7f72, U+7f75, U+7f77, U+7f79, U+7f85, U+7f88, U+7f8a, U+7f8c, U+7f94, U+7f9a, U+7f9e, U+7fa4, U+7fa8-7fa9, U+7fb2, U+7fb8-7fb9, U+7fbd, U+7fc1, U+7fc5, U+7fca, U+7fcc, U+7fce, U+7fd2, U+7fd4-7fd5, U+7fdf-7fe1, U+7fe9, U+7feb, U+7ff0, U+7ff9, U+7ffc, U+8000-8001, U+8003, U+8006, U+8009, U+800c, U+8010, U+8015, U+8017-8018, U+802d;
}
/* [75] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.75.woff2) format('woff2');
  unicode-range: U+7a49, U+7a4d-7a4e, U+7a57, U+7a61-7a62, U+7a69, U+7a6b, U+7a70, U+7a74, U+7a76, U+7a79, U+7a7d, U+7a7f, U+7a81, U+7a84, U+7a88, U+7a92-7a93, U+7a95, U+7a98, U+7a9f, U+7aa9-7aaa, U+7aae-7aaf, U+7aba, U+7ac4-7ac5, U+7ac7, U+7aca, U+7ad7, U+7ad9, U+7add, U+7adf-7ae0, U+7ae3, U+7ae5, U+7aea, U+7aed, U+7aef, U+7af6, U+7af9-7afa, U+7aff, U+7b0f, U+7b11, U+7b19, U+7b1b, U+7b1e, U+7b20, U+7b26, U+7b2d, U+7b39, U+7b46, U+7b49, U+7b4b-7b4d, U+7b4f-7b52, U+7b54, U+7b56, U+7b60, U+7b6c, U+7b6e, U+7b75, U+7b7d, U+7b87, U+7b8b, U+7b8f, U+7b94-7b95, U+7b97, U+7b9a, U+7b9d, U+7ba1, U+7bad, U+7bb1, U+7bb4, U+7bb8, U+7bc0-7bc1, U+7bc4, U+7bc6-7bc7, U+7bc9, U+7bd2, U+7be0, U+7be4, U+7be9, U+7c07, U+7c12, U+7c1e, U+7c21, U+7c27, U+7c2a-7c2b, U+7c3d-7c3f, U+7c43, U+7c4c-7c4d, U+7c60, U+7c64, U+7c6c, U+7c73, U+7c83, U+7c89, U+7c92, U+7c95, U+7c97-7c98, U+7c9f, U+7ca5, U+7ca7, U+7cae, U+7cb1-7cb3, U+7cb9, U+7cbe, U+7cca, U+7cd6, U+7cde-7ce0, U+7ce7, U+7cfb, U+7cfe, U+7d00, U+7d02, U+7d04-7d08, U+7d0a-7d0b, U+7d0d, U+7d10, U+7d14, U+7d17-7d1b, U+7d20-7d21, U+7d2b-7d2c, U+7d2e;
}
/* [76] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.76.woff2) format('woff2');
  unicode-range: U+7704, U+7708-7709, U+770b, U+771e, U+7720, U+7729, U+7737-7738, U+773a, U+773c, U+7740, U+774d, U+775b, U+7761, U+7763, U+7766, U+776b, U+7779, U+777e-777f, U+778b, U+7791, U+779e, U+77a5, U+77ac-77ad, U+77b0, U+77b3, U+77bb-77bc, U+77bf, U+77d7, U+77db-77dc, U+77e2-77e3, U+77e9, U+77ed-77ef, U+7802, U+7812, U+7825-7827, U+782c, U+7832, U+7834, U+7845, U+784f, U+785d, U+786b-786c, U+786f, U+787c, U+7881, U+7887, U+788c-788e, U+7891, U+7897, U+78a3, U+78a7, U+78a9, U+78ba-78bc, U+78c1, U+78c5, U+78ca-78cb, U+78ce, U+78d0, U+78e8, U+78ec, U+78ef, U+78f5, U+78fb, U+7901, U+790e, U+7916, U+792a-792c, U+793a, U+7940-7941, U+7947-7949, U+7950, U+7956-7957, U+795a-795d, U+7960, U+7965, U+7968, U+796d, U+797a, U+797f, U+7981, U+798d-798e, U+7991, U+79a6-79a7, U+79aa, U+79ae, U+79b1, U+79b3, U+79b9, U+79bd-79c1, U+79c9-79cb, U+79d2, U+79d5, U+79d8, U+79df, U+79e4, U+79e6-79e7, U+79e9, U+79fb, U+7a00, U+7a05, U+7a08, U+7a0b, U+7a0d, U+7a14, U+7a17, U+7a19-7a1a, U+7a1c, U+7a1f-7a20, U+7a2e, U+7a31, U+7a36-7a37, U+7a3b-7a3d, U+7a3f-7a40, U+7a46;
}
/* [77] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.77.woff2) format('woff2');
  unicode-range: U+7482-7483, U+7487, U+7489, U+748b, U+7498, U+749c, U+749e-749f, U+74a1, U+74a3, U+74a5, U+74a7-74a8, U+74aa, U+74b0, U+74b2, U+74b5, U+74b9, U+74bd, U+74bf, U+74c6, U+74ca, U+74cf, U+74d4, U+74d8, U+74da, U+74dc, U+74e0, U+74e2-74e3, U+74e6, U+74ee, U+74f7, U+7501, U+7504, U+7511, U+7515, U+7518, U+751a-751b, U+7523, U+7525-7526, U+752b-752c, U+7531, U+7533, U+7538, U+753a, U+7547, U+754c, U+754f, U+7551, U+7553-7554, U+7559, U+755b-755d, U+7562, U+7565-7566, U+756a, U+756f-7570, U+7575-7576, U+7578, U+757a, U+757f, U+7586-7587, U+758a-758b, U+758e-758f, U+7591, U+759d, U+75a5, U+75ab, U+75b1-75b3, U+75b5, U+75b8-75b9, U+75bc-75be, U+75c2, U+75c5, U+75c7, U+75cd, U+75d2, U+75d4-75d5, U+75d8-75d9, U+75db, U+75e2, U+75f0, U+75f2, U+75f4, U+75fa, U+75fc, U+7600, U+760d, U+7619, U+761f-7622, U+7624, U+7626, U+763b, U+7642, U+764c, U+764e, U+7652, U+7656, U+7661, U+7664, U+7669, U+766c, U+7670, U+7672, U+7678, U+7686-7687, U+768e, U+7690, U+7693, U+76ae, U+76ba, U+76bf, U+76c2-76c3, U+76c6, U+76c8, U+76ca, U+76d2, U+76d6, U+76db-76dc, U+76de-76df, U+76e1, U+76e3-76e4, U+76e7, U+76f2, U+76fc, U+76fe, U+7701;
}
/* [78] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.78.woff2) format('woff2');
  unicode-range: U+7230, U+7232, U+7235, U+723a-723b, U+723d-723e, U+7240, U+7246-7248, U+724c, U+7252, U+7258-7259, U+725b, U+725d, U+725f, U+7261-7262, U+7267, U+7272, U+727d, U+7280-7281, U+72a2, U+72a7, U+72ac, U+72af, U+72c0, U+72c2, U+72c4, U+72ce, U+72d0, U+72d7, U+72d9, U+72e1, U+72e9, U+72f8-72f9, U+72fc-72fd, U+730a, U+7316, U+731b-731d, U+7325, U+7329-732b, U+7336-7337, U+733e-733f, U+7344-7345, U+7350, U+7352, U+7357, U+7368, U+736a, U+7370, U+7372, U+7375, U+7378, U+737a-737b, U+7384, U+7386-7387, U+7389, U+738e, U+7394, U+7396-7398, U+739f, U+73a7, U+73a9, U+73ad, U+73b2-73b3, U+73b9, U+73c0, U+73c2, U+73c9-73ca, U+73cc-73cd, U+73cf, U+73d6, U+73d9, U+73dd-73de, U+73e0, U+73e3-73e6, U+73e9-73ea, U+73ed, U+73f7, U+73f9, U+73fd-73fe, U+7401, U+7403, U+7405, U+7407, U+7409, U+7413, U+741b, U+7420-7422, U+7425-7426, U+7428, U+742a-742c, U+742e-7430, U+7433-7436, U+7438, U+743a, U+743f-7441, U+7443-7444, U+744b, U+7455, U+7457, U+7459-745c, U+745e-7460, U+7462, U+7464-7465, U+7468-746a, U+746f, U+747e;
}
/* [79] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.79.woff2) format('woff2');
  unicode-range: U+6f8d-6f8e, U+6f90, U+6f94, U+6f97, U+6fa3-6fa4, U+6fa7, U+6fae-6faf, U+6fb1, U+6fb3, U+6fb9, U+6fbe, U+6fc0-6fc3, U+6fca, U+6fd5, U+6fda, U+6fdf-6fe1, U+6fe4, U+6fe9, U+6feb-6fec, U+6fef, U+6ff1, U+6ffe, U+7001, U+7005-7006, U+7009, U+700b, U+700f, U+7011, U+7015, U+7018, U+701a-701f, U+7023, U+7027-7028, U+702f, U+7037, U+703e, U+704c, U+7050-7051, U+7058, U+705d, U+7070, U+7078, U+707c-707d, U+7085, U+708a, U+708e, U+7092, U+7098-709a, U+70a1, U+70a4, U+70ab-70ad, U+70af, U+70b3, U+70b7-70b9, U+70c8, U+70cb, U+70cf, U+70d8-70d9, U+70dd, U+70df, U+70f1, U+70f9, U+70fd, U+7104, U+7109, U+710c, U+7119-711a, U+711e, U+7126, U+7130, U+7136, U+7147, U+7149-714a, U+714c, U+714e, U+7150, U+7156, U+7159, U+715c, U+715e, U+7164-7167, U+7169, U+716c, U+716e, U+717d, U+7184, U+7189-718a, U+718f, U+7192, U+7194, U+7199, U+719f, U+71a2, U+71ac, U+71b1, U+71b9-71ba, U+71be, U+71c1, U+71c3, U+71c8-71c9, U+71ce, U+71d0, U+71d2, U+71d4-71d5, U+71df, U+71e5-71e7, U+71ed-71ee, U+71fb-71fc, U+71fe-7200, U+7206, U+7210, U+721b, U+722a, U+722c-722d;
}
/* [80] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.80.woff2) format('woff2');
  unicode-range: U+6d5a, U+6d5c, U+6d63, U+6d66, U+6d69-6d6a, U+6d6c, U+6d6e, U+6d74, U+6d78-6d79, U+6d7f, U+6d85, U+6d87-6d89, U+6d8c-6d8e, U+6d91, U+6d93, U+6d95, U+6daf, U+6db2, U+6db5, U+6dc0, U+6dc3-6dc7, U+6dcb, U+6dcf, U+6dd1, U+6dd8-6dda, U+6dde, U+6de1, U+6de8, U+6dea-6deb, U+6dee, U+6df1, U+6df3, U+6df5, U+6df7-6dfb, U+6e17, U+6e19-6e1b, U+6e1f-6e21, U+6e23-6e26, U+6e2b-6e2d, U+6e32, U+6e34, U+6e36, U+6e38, U+6e3a, U+6e3c-6e3e, U+6e43-6e44, U+6e4a, U+6e4d, U+6e56, U+6e58, U+6e5b-6e5c, U+6e5e-6e5f, U+6e67, U+6e6b, U+6e6e-6e6f, U+6e72-6e73, U+6e7a, U+6e90, U+6e96, U+6e9c-6e9d, U+6e9f, U+6ea2, U+6ea5, U+6eaa-6eab, U+6eaf, U+6eb1, U+6eb6, U+6eba, U+6ec2, U+6ec4-6ec5, U+6ec9, U+6ecb-6ecc, U+6ece, U+6ed1, U+6ed3-6ed4, U+6eef, U+6ef4, U+6ef8, U+6efe-6eff, U+6f01-6f02, U+6f06, U+6f0f, U+6f11, U+6f14-6f15, U+6f20, U+6f22-6f23, U+6f2b-6f2c, U+6f31-6f32, U+6f38, U+6f3f, U+6f41, U+6f51, U+6f54, U+6f57-6f58, U+6f5a-6f5b, U+6f5e-6f5f, U+6f62, U+6f64, U+6f6d-6f6e, U+6f70, U+6f7a, U+6f7c-6f7e, U+6f81, U+6f84, U+6f88;
}
/* [81] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.81.woff2) format('woff2');
  unicode-range: U+6ada-6adb, U+6af6, U+6afb, U+6b04, U+6b0a, U+6b0c, U+6b12, U+6b16, U+6b20-6b21, U+6b23, U+6b32, U+6b3a, U+6b3d-6b3e, U+6b46-6b47, U+6b4e, U+6b50, U+6b5f, U+6b61-6b62, U+6b64-6b66, U+6b6a, U+6b72, U+6b77-6b78, U+6b7b, U+6b7f, U+6b83-6b84, U+6b86, U+6b89-6b8a, U+6b96, U+6b98, U+6b9e, U+6bae-6baf, U+6bb2, U+6bb5, U+6bb7, U+6bba, U+6bbc, U+6bbf, U+6bc1, U+6bc5-6bc6, U+6bcb, U+6bcf, U+6bd2-6bd3, U+6bd6-6bd8, U+6bdb, U+6beb-6bec, U+6c08, U+6c0f, U+6c13, U+6c23, U+6c37-6c38, U+6c3e, U+6c40-6c42, U+6c4e, U+6c50, U+6c55, U+6c57, U+6c5a, U+6c5d-6c60, U+6c68, U+6c6a, U+6c6d, U+6c70, U+6c72, U+6c76, U+6c7a, U+6c7d-6c7e, U+6c81-6c83, U+6c85-6c88, U+6c8c, U+6c90, U+6c92-6c96, U+6c99-6c9b, U+6cab, U+6cae, U+6cb3, U+6cb8-6cb9, U+6cbb-6cbf, U+6cc1-6cc2, U+6cc4, U+6cc9-6cca, U+6ccc, U+6cd3, U+6cd7, U+6cdb, U+6ce1-6ce3, U+6ce5, U+6ce8, U+6ceb, U+6cee-6cf0, U+6cf3, U+6d0b-6d0c, U+6d11, U+6d17, U+6d19, U+6d1b, U+6d1e, U+6d25, U+6d27, U+6d29, U+6d32, U+6d35-6d36, U+6d38-6d39, U+6d3b, U+6d3d-6d3e, U+6d41, U+6d59;
}
/* [82] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.82.woff2) format('woff2');
  unicode-range: U+67f0-67f1, U+67f3-67f6, U+67fb, U+67fe, U+6812-6813, U+6816-6817, U+6821-6822, U+682f, U+6838-6839, U+683d, U+6840-6843, U+6848, U+684e, U+6850-6851, U+6853-6854, U+686d, U+6876, U+687f, U+6881, U+6885, U+688f, U+6893-6894, U+6897, U+689d, U+689f, U+68a1-68a2, U+68a7-68a8, U+68ad, U+68af-68b1, U+68b3, U+68b5-68b6, U+68c4-68c5, U+68c9, U+68cb, U+68cd, U+68d2, U+68d5, U+68d7-68d8, U+68da, U+68df-68e0, U+68e7-68e8, U+68ee, U+68f2, U+68f9-68fa, U+6900, U+6905, U+690d-690e, U+6912, U+6927, U+6930, U+693d, U+693f, U+694a, U+6953-6955, U+6957, U+6959-695a, U+695e, U+6960-6963, U+6968, U+696b, U+696d-696f, U+6975, U+6977-6979, U+6995, U+699b-699c, U+69a5, U+69a7, U+69ae, U+69b4, U+69bb, U+69c1, U+69c3, U+69cb-69cd, U+69d0, U+69e8, U+69ea, U+69fb, U+69fd, U+69ff, U+6a02, U+6a0a, U+6a11, U+6a13, U+6a17, U+6a19, U+6a1e-6a1f, U+6a21, U+6a23, U+6a35, U+6a38-6a3a, U+6a3d, U+6a44, U+6a48, U+6a4b, U+6a52-6a53, U+6a58-6a59, U+6a5f, U+6a61, U+6a6b, U+6a80, U+6a84, U+6a89, U+6a8d-6a8e, U+6a97, U+6a9c, U+6aa3, U+6ab3, U+6abb, U+6ac2-6ac3, U+6ad3;
}
/* [83] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.83.woff2) format('woff2');
  unicode-range: U+6607, U+6609-660a, U+660c, U+660f-6611, U+6613-6615, U+661e, U+6620, U+6627-6628, U+662d, U+6630-6631, U+6634, U+6636, U+663a-663b, U+6641, U+6643-6644, U+6649, U+664b, U+664f, U+6659, U+665b, U+665d-665f, U+6664-6669, U+666b, U+666e-666f, U+6673-6674, U+6676-6678, U+6684, U+6687-6689, U+668e, U+6690-6691, U+6696-6698, U+669d, U+66a0, U+66a2, U+66ab, U+66ae, U+66b2-66b4, U+66b9, U+66bb, U+66be, U+66c4, U+66c6-66c7, U+66c9, U+66d6, U+66d9, U+66dc-66dd, U+66e0, U+66e6, U+66f0, U+66f2-66f4, U+66f7, U+66f9-66fa, U+66fc, U+66fe-66ff, U+6703, U+670b, U+670d, U+6714-6715, U+6717, U+671b, U+671d-671f, U+6726-6727, U+672a-672b, U+672d-672e, U+6731, U+6736, U+673a, U+673d, U+6746, U+6749, U+674e-6751, U+6753, U+6756, U+675c, U+675e-675f, U+676d, U+676f-6770, U+6773, U+6775, U+6777, U+677b, U+677e-677f, U+6787, U+6789, U+678b, U+678f-6790, U+6793, U+6795, U+679a, U+679d, U+67af-67b0, U+67b3, U+67b6-67b8, U+67be, U+67c4, U+67cf-67d4, U+67da, U+67dd, U+67e9, U+67ec, U+67ef;
}
/* [84] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.84.woff2) format('woff2');
  unicode-range: U+6392, U+6396, U+6398, U+639b, U+63a0-63a2, U+63a5, U+63a7-63aa, U+63c0, U+63c4, U+63c6, U+63cf, U+63d6, U+63da-63db, U+63e1, U+63ed-63ee, U+63f4, U+63f6-63f7, U+640d, U+640f, U+6414, U+6416-6417, U+641c, U+6422, U+642c-642d, U+643a, U+643e, U+6458, U+6460, U+6469, U+646f, U+6478-647a, U+6488, U+6491-6493, U+649a, U+649e, U+64a4-64a5, U+64ab, U+64ad-64ae, U+64b0, U+64b2, U+64bb, U+64c1, U+64c4-64c5, U+64c7, U+64ca, U+64cd-64ce, U+64d2, U+64d4, U+64d8, U+64da, U+64e1-64e2, U+64e5-64e7, U+64ec, U+64f2, U+64f4, U+64fa, U+64fe, U+6500, U+6504, U+6518, U+651d, U+6523, U+652a-652c, U+652f, U+6536-6539, U+653b, U+653e, U+6548, U+654d-654f, U+6551, U+6556-6557, U+655e, U+6562-6563, U+6566, U+656c-656d, U+6572, U+6574-6575, U+6577-6578, U+657e, U+6582-6583, U+6585, U+658c, U+6590-6591, U+6597, U+6599, U+659b-659c, U+659f, U+65a1, U+65a4-65a5, U+65a7, U+65ab-65ac, U+65af, U+65b7, U+65bc-65bd, U+65c1, U+65c5, U+65cb-65cc, U+65cf, U+65d2, U+65d7, U+65e0, U+65e3, U+65e6, U+65e8-65e9, U+65ec-65ed, U+65f1, U+65f4, U+65fa-65fd, U+65ff, U+6606;
}
/* [85] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.85.woff2) format('woff2');
  unicode-range: U+614c, U+6153, U+6155, U+6158-6159, U+615d, U+615f, U+6162-6164, U+6167-6168, U+616b, U+616e, U+6170, U+6176-6177, U+617d-617e, U+6181-6182, U+618a, U+618e, U+6190-6191, U+6194, U+6198-619a, U+61a4, U+61a7, U+61a9, U+61ab-61ac, U+61ae, U+61b2, U+61b6, U+61ba, U+61be, U+61c3, U+61c7-61cb, U+61e6, U+61f2, U+61f6-61f8, U+61fa, U+61fc, U+61ff-6200, U+6207-6208, U+620a, U+620c-620e, U+6212, U+6216, U+621a, U+621f, U+6221, U+622a, U+622e, U+6230-6231, U+6234, U+6236, U+623e-623f, U+6241, U+6247-6249, U+624d, U+6253, U+6258, U+626e, U+6271, U+6276, U+6279, U+627c, U+627f-6280, U+6284, U+6289-628a, U+6291-6292, U+6295, U+6297-6298, U+629b, U+62ab, U+62b1, U+62b5, U+62b9, U+62bc-62bd, U+62c2, U+62c7-62c9, U+62cc-62cd, U+62cf-62d0, U+62d2-62d4, U+62d6-62d9, U+62db-62dc, U+62ec-62ef, U+62f1, U+62f3, U+62f7, U+62fe-62ff, U+6301, U+6307, U+6309, U+6311, U+632b, U+632f, U+633a-633b, U+633d-633e, U+6349, U+634c, U+634f-6350, U+6355, U+6367-6368, U+636e, U+6372, U+6377, U+637a-637b, U+637f, U+6383, U+6388-6389, U+638c;
}
/* [86] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.86.woff2) format('woff2');
  unicode-range: U+5f11, U+5f13-5f15, U+5f17-5f18, U+5f1b, U+5f1f, U+5f26-5f27, U+5f29, U+5f31, U+5f35, U+5f3a, U+5f3c, U+5f48, U+5f4a, U+5f4c, U+5f4e, U+5f56-5f57, U+5f59, U+5f5b, U+5f62, U+5f66-5f67, U+5f69-5f6d, U+5f70-5f71, U+5f77, U+5f79, U+5f7c, U+5f7f-5f81, U+5f85, U+5f87, U+5f8a-5f8b, U+5f90-5f92, U+5f98-5f99, U+5f9e, U+5fa0-5fa1, U+5fa8-5faa, U+5fae, U+5fb5, U+5fb9, U+5fbd, U+5fc5, U+5fcc-5fcd, U+5fd6-5fd9, U+5fe0, U+5feb, U+5ff5, U+5ffd, U+5fff, U+600f, U+6012, U+6016, U+601c, U+6020-6021, U+6025, U+6028, U+602a, U+602f, U+6041-6043, U+604d, U+6050, U+6052, U+6055, U+6059, U+605d, U+6062-6065, U+6068-606a, U+606c-606d, U+606f-6070, U+6085, U+6089, U+608c-608d, U+6094, U+6096, U+609a-609b, U+609f-60a0, U+60a3-60a4, U+60a7, U+60b0, U+60b2-60b4, U+60b6, U+60b8, U+60bc-60bd, U+60c7, U+60d1, U+60da, U+60dc, U+60df-60e1, U+60f0-60f1, U+60f6, U+60f9-60fb, U+6101, U+6106, U+6108-6109, U+610d-610e, U+6115, U+611a, U+6127, U+6130, U+6134, U+6137, U+613c, U+613e-613f, U+6142, U+6144, U+6147-6148, U+614a-614b;
}
/* [87] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.87.woff2) format('woff2');
  unicode-range: U+5c40, U+5c45-5c46, U+5c48, U+5c4b, U+5c4d-5c4e, U+5c51, U+5c5b, U+5c60, U+5c62, U+5c64-5c65, U+5c6c, U+5c6f, U+5c79, U+5c90-5c91, U+5ca1, U+5ca9, U+5cab-5cac, U+5cb1, U+5cb3, U+5cb5, U+5cb7-5cb8, U+5cba, U+5cbe, U+5cc0, U+5cd9, U+5ce0, U+5ce8, U+5cef-5cf0, U+5cf4, U+5cf6, U+5cfb, U+5cfd, U+5d07, U+5d0d-5d0e, U+5d11, U+5d14, U+5d16-5d17, U+5d19, U+5d27, U+5d29, U+5d4b-5d4c, U+5d50, U+5d69, U+5d6c, U+5d6f, U+5d87, U+5d8b, U+5d9d, U+5da0, U+5da2, U+5daa, U+5db8, U+5dba, U+5dbc-5dbd, U+5dcd, U+5dd2, U+5dd6, U+5de1-5de2, U+5de5-5de8, U+5deb, U+5dee, U+5df1-5df4, U+5df7, U+5dfd-5dfe, U+5e03, U+5e06, U+5e11, U+5e16, U+5e19, U+5e1b, U+5e1d, U+5e25, U+5e2b, U+5e2d, U+5e33, U+5e36, U+5e38, U+5e3d, U+5e3f-5e40, U+5e44-5e45, U+5e47, U+5e4c, U+5e55, U+5e5f, U+5e61-5e63, U+5e72, U+5e77-5e79, U+5e7b-5e7e, U+5e84, U+5e87, U+5e8a, U+5e8f, U+5e95, U+5e97, U+5e9a, U+5e9c, U+5ea0, U+5ea7, U+5eab, U+5ead, U+5eb5-5eb8, U+5ebe, U+5ec2, U+5ec8-5eca, U+5ed0, U+5ed3, U+5ed6, U+5eda-5edb, U+5edf-5ee0, U+5ee2-5ee3, U+5eec, U+5ef3, U+5ef6-5ef7, U+5efa-5efb, U+5f01, U+5f04, U+5f0a;
}
/* [88] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.88.woff2) format('woff2');
  unicode-range: U+59be, U+59c3, U+59c6, U+59c9, U+59cb, U+59d0-59d1, U+59d3-59d4, U+59d9-59da, U+59dc-59dd, U+59e6, U+59e8, U+59ea, U+59ec, U+59ee, U+59f8, U+59fb, U+59ff, U+5a01, U+5a03, U+5a11, U+5a18, U+5a1b-5a1c, U+5a1f-5a20, U+5a25, U+5a29, U+5a36, U+5a3c, U+5a41, U+5a46, U+5a49, U+5a5a, U+5a62, U+5a66, U+5a92, U+5a9a-5a9b, U+5aa4, U+5ac1-5ac2, U+5ac4, U+5ac9, U+5acc, U+5ae1, U+5ae6, U+5ae9, U+5b05, U+5b09, U+5b0b-5b0c, U+5b16, U+5b2a, U+5b40, U+5b43, U+5b51, U+5b54-5b55, U+5b58, U+5b5a, U+5b5c-5b5d, U+5b5f, U+5b63-5b64, U+5b69, U+5b6b, U+5b70-5b71, U+5b75, U+5b7a, U+5b7c, U+5b85, U+5b87-5b88, U+5b8b, U+5b8f, U+5b93, U+5b95-5b99, U+5b9b-5b9c, U+5ba2-5ba6, U+5bac, U+5bae, U+5bb0, U+5bb3-5bb5, U+5bb8-5bb9, U+5bbf-5bc0, U+5bc2-5bc7, U+5bcc, U+5bd0, U+5bd2-5bd4, U+5bd7, U+5bde-5bdf, U+5be1-5be2, U+5be4-5be9, U+5beb-5bec, U+5bee-5bef, U+5bf5-5bf6, U+5bf8, U+5bfa, U+5c01, U+5c04, U+5c07-5c0b, U+5c0d-5c0e, U+5c16, U+5c19, U+5c24, U+5c28, U+5c31, U+5c38-5c3c, U+5c3e-5c3f;
}
/* [89] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.89.woff2) format('woff2');
  unicode-range: U+5703-5704, U+5708, U+570d, U+5712-5713, U+5716, U+5718, U+572d, U+573b, U+5740, U+5742, U+5747, U+574a, U+574d-574e, U+5750-5751, U+5761, U+5764, U+5766, U+576a, U+576e, U+5770, U+5775, U+577c, U+5782, U+5788, U+578b, U+5793, U+57a0, U+57a2-57a3, U+57c3, U+57c7-57c8, U+57cb, U+57df-57e0, U+57f0, U+57f4, U+57f7, U+57f9-57fa, U+57fc, U+5800, U+5802, U+5805-5806, U+5808-580a, U+581e, U+5821, U+5824, U+5827, U+582a, U+582f-5831, U+5835, U+583a, U+584a-584b, U+584f, U+5851, U+5854, U+5857-5858, U+585a, U+585e, U+5861-5862, U+5864, U+5875, U+5879, U+587c, U+587e, U+5883, U+5885, U+5889, U+5893, U+589c, U+589e-589f, U+58a8-58a9, U+58ae, U+58b3, U+58ba-58bb, U+58be, U+58c1, U+58c5, U+58c7, U+58ce, U+58d1, U+58d3, U+58d5, U+58d8-58d9, U+58de-58df, U+58e4, U+58ec, U+58ef, U+58f9-58fb, U+58fd, U+590f, U+5914-5915, U+5919, U+5922, U+592d-592e, U+5931, U+5937, U+593e, U+5944, U+5947-5949, U+594e-5951, U+5954-5955, U+5957, U+595a, U+5960, U+5962, U+5967, U+596a-596e, U+5974, U+5978, U+5982-5984, U+598a, U+5993, U+5996-5997, U+5999, U+59a5, U+59a8, U+59ac, U+59b9, U+59bb;
}
/* [90] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.90.woff2) format('woff2');
  unicode-range: U+539a, U+53a0, U+53a5-53a6, U+53ad, U+53bb, U+53c3, U+53c8-53cb, U+53cd, U+53d4, U+53d6-53d7, U+53db, U+53e1-53e3, U+53e5, U+53e9-53ed, U+53f1, U+53f3, U+53f8, U+5403-5404, U+540a, U+540e-5411, U+541b, U+541d, U+541f-5420, U+5426, U+5429, U+542b, U+5433, U+5438-5439, U+543b-543c, U+543e, U+5442, U+5448, U+544a, U+5451, U+5468, U+546a, U+5471, U+5473, U+5475, U+547b-547d, U+5480, U+5486, U+548e, U+5490, U+54a4, U+54a8, U+54ab-54ac, U+54b3, U+54b8, U+54bd, U+54c0, U+54c4, U+54c8-54c9, U+54e1, U+54e5, U+54e8, U+54ed-54ee, U+54f2, U+54fa, U+5504, U+5506-5507, U+550e, U+5510, U+551c, U+552f, U+5531, U+5535, U+553e, U+5544, U+5546, U+554f, U+5553, U+5556, U+555e, U+5563, U+557c, U+5580, U+5584, U+5586-5587, U+5589-558a, U+5598-559a, U+559c-559d, U+55a7, U+55a9-55ac, U+55ae, U+55c5, U+55c7, U+55d4, U+55da, U+55dc, U+55df, U+55e3-55e4, U+55fd-55fe, U+5606, U+5609, U+5614, U+5617, U+562f, U+5632, U+5634, U+5636, U+5653, U+5668, U+566b, U+5674, U+5686, U+56a5, U+56ac, U+56ae, U+56b4, U+56bc, U+56ca, U+56cd, U+56d1, U+56da-56db, U+56de, U+56e0, U+56f0, U+56f9-56fa;
}
/* [91] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.91.woff2) format('woff2');
  unicode-range: U+516e, U+5175-5178, U+517c, U+5180, U+5186, U+518a, U+518d, U+5192, U+5195, U+5197, U+51a0, U+51a5, U+51aa, U+51ac, U+51b6-51b7, U+51bd, U+51c4, U+51c6, U+51c9, U+51cb-51cd, U+51dc-51de, U+51e1, U+51f0-51f1, U+51f6, U+51f8-51f9, U+51fd, U+5200, U+5203, U+5207-5208, U+520a, U+520e, U+5211, U+5217, U+521d, U+5224-5225, U+522a, U+522e, U+5230, U+5236-523b, U+5243, U+5247, U+524a-524c, U+5254, U+5256, U+525b, U+525d, U+5261, U+5269-526a, U+526f, U+5272, U+5275, U+527d, U+527f, U+5283, U+5287-5289, U+528d, U+5291-5292, U+529f, U+52a3-52a4, U+52a9-52ab, U+52be, U+52c1, U+52c3, U+52c5, U+52c7, U+52c9, U+52cd, U+52d2, U+52d6, U+52d8-52d9, U+52db, U+52dd-52df, U+52e2-52e4, U+52f3, U+52f5, U+52f8, U+52fa-52fb, U+52fe-52ff, U+5305, U+5308, U+530d, U+530f-5310, U+5315, U+5319, U+5320-5321, U+5323, U+532a, U+532f, U+5339, U+533f-5341, U+5343-5344, U+5347-534a, U+534d, U+5351-5354, U+535a, U+535c, U+535e, U+5360, U+5366, U+5368, U+536f-5371, U+5374-5375, U+5377, U+537d, U+537f, U+5384, U+5393, U+5398;
}
/* [92] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.92.woff2) format('woff2');
  unicode-range: U+4f43, U+4f46-4f48, U+4f4d-4f51, U+4f55, U+4f59-4f5a, U+4f69, U+4f6f-4f70, U+4f73, U+4f76, U+4f7a, U+4f7e-4f7f, U+4f81, U+4f83-4f84, U+4f86, U+4f88, U+4f8a-4f8b, U+4f8d, U+4f8f, U+4f91, U+4f96, U+4f98, U+4f9b, U+4f9d, U+4fae-4faf, U+4fb5-4fb6, U+4fbf, U+4fc2-4fc4, U+4fc9-4fca, U+4fce, U+4fd1, U+4fd3-4fd4, U+4fd7, U+4fda, U+4fdf-4fe0, U+4fee-4fef, U+4ff1, U+4ff3, U+4ff5, U+4ff8, U+4ffa, U+5002, U+5006, U+5009, U+500b, U+500d, U+5011-5012, U+5016, U+5019-501a, U+501c, U+501e-501f, U+5021, U+5023-5024, U+5026-5028, U+502a-502d, U+503b, U+5043, U+5047-5049, U+504f, U+5055, U+505a, U+505c, U+5065, U+5074-5076, U+5078, U+5080, U+5085, U+508d, U+5091, U+5098-5099, U+50ac-50ad, U+50b2-50b3, U+50b5, U+50b7, U+50be, U+50c5, U+50c9-50ca, U+50d1, U+50d5-50d6, U+50da, U+50de, U+50e5, U+50e7, U+50ed, U+50f9, U+50fb, U+50ff-5101, U+5104, U+5106, U+5109, U+5112, U+511f, U+5121, U+512a, U+5132, U+5137, U+513a, U+513c, U+5140-5141, U+5143-5148, U+514b-514e, U+5152, U+515c, U+5162, U+5169-516b, U+516d;
}
/* [93] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.93.woff2) format('woff2');
  unicode-range: U+338c-339c, U+339f-33a0, U+33a2-33cb, U+33cf-33d0, U+33d3, U+33d6, U+33d8, U+33db-33dd, U+4e01, U+4e03, U+4e07-4e08, U+4e11, U+4e14-4e15, U+4e18-4e19, U+4e1e, U+4e32, U+4e38-4e39, U+4e42-4e43, U+4e45, U+4e4d-4e4f, U+4e56, U+4e58-4e59, U+4e5d-4e5e, U+4e6b, U+4e6d, U+4e73, U+4e76-4e77, U+4e7e, U+4e82, U+4e86, U+4e88, U+4e8e, U+4e90-4e92, U+4e94-4e95, U+4e98, U+4e9b, U+4e9e, U+4ea1-4ea2, U+4ea4-4ea6, U+4ea8, U+4eab, U+4ead-4eae, U+4eb6, U+4ec0-4ec1, U+4ec4, U+4ec7, U+4ecb, U+4ecd, U+4ed4-4ed5, U+4ed7-4ed9, U+4edd, U+4edf, U+4ee4, U+4ef0, U+4ef2, U+4ef6-4ef7, U+4efb, U+4f01, U+4f09, U+4f0b, U+4f0d-4f11, U+4f2f, U+4f34, U+4f36, U+4f38, U+4f3a, U+4f3c-4f3d;
}
/* [94] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.94.woff2) format('woff2');
  unicode-range: U+3136, U+3138, U+313a-3140, U+3143-3144, U+3150, U+3152, U+3154-3156, U+3158-315b, U+315d-315f, U+3162, U+3164-318c, U+318e, U+3200-321b, U+3231, U+3239, U+3251-325a, U+3260-327b, U+327e-327f, U+328a-3290, U+3294, U+329e, U+32a5, U+3380-3384, U+3388-338b;
}
/* [95] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.95.woff2) format('woff2');
  unicode-range: U+2f7d, U+2f7f-2f8b, U+2f8e-2f90, U+2f92-2f97, U+2f99-2fa0, U+2fa2-2fa3, U+2fa5-2fa9, U+2fac-2fb1, U+2fb3-2fbc, U+2fc1-2fca, U+2fcd-2fd4, U+3003, U+3012-3019, U+301c, U+301e-3020, U+3036, U+3041, U+3043, U+3045, U+3047, U+3049, U+304e, U+3050, U+3052, U+3056, U+305a, U+305c, U+305e, U+3062, U+3065, U+306c, U+3070-307d, U+3080, U+3085, U+3087, U+308e, U+3090-3091, U+30a1, U+30a5, U+30a9, U+30ae, U+30b1-30b2, U+30b4, U+30b6, U+30bc-30be, U+30c2, U+30c5, U+30cc, U+30d2, U+30d4, U+30d8-30dd, U+30e4, U+30e6, U+30e8, U+30ee, U+30f0-30f2, U+30f4-30f6, U+3133, U+3135;
}
/* [96] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.96.woff2) format('woff2');
  unicode-range: U+2541-254b, U+25a4-25a9, U+25b1, U+25b5, U+25b9, U+25bf, U+25c1, U+25c3, U+25c9-25ca, U+25cc, U+25ce, U+25d0-25d1, U+25e6, U+25ef, U+260f, U+261d, U+261f, U+262f, U+2660, U+2664, U+2667-2669, U+266d, U+266f, U+2716, U+271a, U+273d, U+2756, U+2776-277f, U+278a-2793, U+2963, U+2965, U+2ac5-2ac6, U+2acb-2acc, U+2f00, U+2f04, U+2f06, U+2f08, U+2f0a-2f0b, U+2f11-2f12, U+2f14, U+2f17-2f18, U+2f1c-2f1d, U+2f1f-2f20, U+2f23-2f26, U+2f28-2f29, U+2f2b, U+2f2d, U+2f2f-2f32, U+2f38, U+2f3c-2f40, U+2f42-2f4c, U+2f4f-2f52, U+2f54-2f58, U+2f5a-2f66, U+2f69-2f70, U+2f72-2f76, U+2f78, U+2f7a-2f7c;
}
/* [97] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.97.woff2) format('woff2');
  unicode-range: U+2479-2487, U+249c-24d1, U+24d3-24d7, U+24d9-24e9, U+24eb-24f4, U+2500-2501, U+2503, U+250c-2513, U+2515-2516, U+2518-2540;
}
/* [98] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.98.woff2) format('woff2');
  unicode-range: U+215b-215e, U+2162-2169, U+2170-2179, U+2195-2199, U+21b0-21b4, U+21bc, U+21c0, U+21c4-21c5, U+21cd, U+21cf-21d4, U+21e0-21e3, U+21e6-21e9, U+2200, U+2202-2203, U+2206-2209, U+220b-220c, U+220f, U+2211, U+2213, U+221a, U+221d-2220, U+2222, U+2225-2227, U+2229-222c, U+222e, U+2234-2237, U+223d, U+2243, U+2245, U+2248, U+2250-2253, U+225a, U+2260-2262, U+2264-2267, U+226a-226b, U+226e-2273, U+2276-2277, U+2279-227b, U+2280-2287, U+228a-228b, U+2295-2297, U+22a3-22a5, U+22bb-22bc, U+22ce-22cf, U+22da-22db, U+22ee-22ef, U+2306, U+2312, U+2314, U+2467-2478;
}
/* [99] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.99.woff2) format('woff2');
  unicode-range: U+81-82, U+84, U+a2-a5, U+a7-a8, U+aa, U+ac-ad, U+b1-b3, U+b6, U+b8-ba, U+bc-be, U+c0, U+c2, U+c6-cb, U+ce-d0, U+d4, U+d8-d9, U+db-dc, U+de-df, U+e6, U+eb, U+ee-f0, U+f4, U+f7-f9, U+fb, U+fe-ff, U+111, U+126-127, U+132-133, U+138, U+13f-142, U+149-14b, U+152-153, U+166-167, U+2bc, U+2c7, U+2d0, U+2d8-2d9, U+2db-2dd, U+391-394, U+396-3a1, U+3a3-3a9, U+3b2-3b6, U+3b8, U+3bc, U+3be-3c1, U+3c3-3c9, U+2010, U+2015-2016, U+2018-2019, U+201b, U+201f-2021, U+2025, U+2030, U+2033-2036, U+203c, U+203e, U+2042, U+2074, U+207a-207f, U+2081-2084, U+2109, U+2113, U+2116, U+2121, U+2126, U+212b, U+2153-2154;
}
/* [100] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.100.woff2) format('woff2');
  unicode-range: U+e8, U+2da, U+2160, U+2194, U+3054, U+3058, U+306d, U+3086, U+308d, U+30ac, U+30bb, U+30c4, U+30cd-30ce, U+30e2, U+3132, U+3146, U+3149, U+339d, U+4e3b, U+4f0a, U+4fdd, U+4fe1, U+5409, U+540c, U+5834, U+592a-592b, U+5b9a, U+5dde, U+5e0c, U+5e73, U+5f0f, U+60f3, U+653f, U+661f, U+662f, U+667a, U+683c, U+6b4c, U+6c11, U+767c, U+76ee, U+76f4, U+77f3, U+79d1, U+7a7a, U+7b2c, U+7d22, U+8207, U+8a00, U+8a71, U+9280, U+9580, U+958b, U+96c6, U+9762, U+98df, U+9ed1, U+ac2d, U+adc8, U+add3, U+af48, U+b014, U+b134-b135, U+b158, U+b2aa, U+b35f, U+b6a4, U+b9cf, U+bb63, U+bd23, U+be91, U+c29b, U+c3f4, U+c42c, U+c55c, U+c573, U+c58f, U+c78c, U+c7dd, U+c8f5, U+cad1, U+cc48, U+cf10, U+cf20, U+d03c, U+d07d, U+d2a0, U+d30e, U+d38d, U+d3a8, U+d3c8, U+d5e5, U+d5f9, U+d6e4, U+f90a, U+ff02, U+ff1c;
}
/* [101] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.101.woff2) format('woff2');
  unicode-range: U+3b1, U+2466, U+25a1, U+25a3, U+261c, U+3008-3009, U+305b, U+305d, U+3069, U+30a7, U+30ba, U+30cf, U+30ef, U+3151, U+3157, U+4e4b, U+4e5f, U+4e8c, U+4eca, U+4ed6, U+4f5b, U+50cf, U+5149, U+5165, U+5171, U+5229, U+529b, U+5316, U+539f, U+53f2, U+571f, U+5728, U+58eb, U+591c, U+5b78, U+5c11, U+5c55, U+5ddd, U+5e02, U+5fb7, U+60c5, U+610f, U+611f, U+6625, U+66f8, U+6797, U+679c, U+682a, U+6d2a, U+706b, U+7406, U+767b, U+76f8, U+77e5, U+7acb, U+898b, U+8a69, U+8def, U+8fd1, U+901a, U+90e8, U+91cd, U+975e, U+ae14, U+ae6c, U+aec0, U+afc7, U+afc9, U+b01c, U+b028, U+b308, U+b311, U+b314, U+b31c, U+b524, U+b560, U+b764, U+b920, U+b9e3, U+bd48, U+be7d, U+c0db, U+c231, U+c270, U+c2e3, U+c37d, U+c3ed, U+c530, U+c6a5, U+c6dc, U+c7a4, U+c954, U+c974, U+d000, U+d565, U+d667, U+d6c5, U+d79d, U+ff1e;
}
/* [102] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.102.woff2) format('woff2');
  unicode-range: U+131, U+2032, U+2465, U+2642, U+3048, U+3051, U+3083-3084, U+308f, U+30c0, U+30d1, U+30d3, U+30d6, U+30df, U+30e7, U+3153, U+4e16, U+4e8b, U+4ee5, U+5206, U+52a0, U+52d5, U+53e4, U+53ef, U+54c1, U+57ce, U+597d, U+5b8c, U+5ea6, U+5f8c, U+5f97, U+6210, U+6240, U+624b, U+6728, U+6bd4, U+7236, U+7269, U+7279, U+738b, U+7528, U+7530, U+767e, U+798f, U+8005, U+8a18, U+90fd, U+91cc, U+9577, U+9593, U+98a8, U+ac20, U+acf6, U+ad90, U+af5d, U+af80, U+afcd, U+aff0, U+b0a1, U+b0b5, U+b1fd, U+b2fc, U+b380, U+b51b, U+b584, U+b5b3, U+b8fd, U+b93c, U+b9f4, U+bb44, U+bc08, U+bc27, U+bc49, U+be55, U+be64, U+bfb0, U+bfc5, U+c178, U+c21f, U+c314, U+c4f1, U+c58d, U+c664, U+c698, U+c6a7, U+c6c1, U+c9ed, U+cac0, U+cacc, U+cad9, U+ccb5, U+cdcc, U+d0e4, U+d143, U+d320, U+d330, U+d54d, U+ff06, U+ff1f, U+ff5e;
}
/* [103] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.103.woff2) format('woff2');
  unicode-range: U+b4, U+20a9, U+20ac, U+2190, U+24d8, U+2502, U+2514, U+2592, U+25c7-25c8, U+2663, U+3060, U+3064, U+3081, U+3088, U+30a3, U+30a6, U+30aa, U+30b5, U+30c7, U+30ca-30cb, U+30d0, U+30e3, U+30e5, U+339e, U+4e09, U+4eac, U+4f5c, U+5167-5168, U+516c, U+51fa, U+5408, U+540d, U+591a, U+5b57, U+6211, U+65b9, U+660e, U+6642, U+6700, U+6b63, U+6e2f, U+7063, U+7532, U+793e, U+81ea, U+8272, U+82b1, U+897f, U+8eca, U+91ce, U+ac38, U+ad76, U+ae84, U+aecc, U+b07d, U+b0b1, U+b215, U+b2a0, U+b310, U+b3d7, U+b52a, U+b618, U+b775, U+b797, U+bcd5, U+bd59, U+be80, U+bea8, U+bed1, U+bee4-bee5, U+c060, U+c2ef, U+c329, U+c3dc, U+c597, U+c5bd, U+c5e5, U+c69c, U+c9d6, U+ca29, U+ca5c, U+ca84, U+cc39, U+cc3b, U+ce89, U+cee5, U+cf65, U+cf85, U+d058, U+d145, U+d22d, U+d325, U+d37d, U+d3ad, U+d769, U+ff0c;
}
/* [104] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.104.woff2) format('woff2');
  unicode-range: U+2161, U+2228, U+2299, U+2464, U+2517, U+2640, U+3042, U+304a, U+3053, U+3061, U+307f, U+3082, U+308c, U+3092, U+30a8, U+30ab, U+30ad, U+30b0, U+30b3, U+30b7, U+30c1, U+30c6, U+30c9, U+30d5, U+30d7, U+30de, U+30e0-30e1, U+30ec-30ed, U+4e0b, U+4e0d, U+4ee3, U+53f0, U+548c, U+5b89, U+5bb6, U+5c0f, U+611b, U+6771, U+6aa2, U+6bcd, U+6c34, U+6cd5, U+6d77, U+767d, U+795e, U+8ecd, U+9999, U+9ad8, U+ac07, U+ac1a, U+ac40, U+ad0c, U+ad88, U+ada4, U+ae01, U+ae65, U+aebd, U+aec4, U+afe8, U+b139, U+b205, U+b383, U+b38c, U+b42c, U+b461, U+b55c, U+b78f, U+b8fb, U+b9f7, U+bafc, U+bc99, U+bed8, U+bfcd, U+c0bf, U+c0f9, U+c167, U+c204, U+c20f, U+c22f, U+c258, U+c298, U+c2bc, U+c388, U+c501, U+c50c, U+c5b9, U+c5ce, U+c641, U+c648, U+c73d, U+ca50, U+ca61, U+cc4c, U+ceac, U+d0d4, U+d5f7, U+d6d7, U+ff1a;
}
/* [105] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.105.woff2) format('woff2');
  unicode-range: U+2103, U+2463, U+25c6, U+25cb, U+266c, U+3001, U+300a, U+3046, U+304c-304d, U+304f, U+3055, U+3059, U+3063, U+3066-3068, U+306f, U+3089, U+30b8, U+30bf, U+314f, U+4e0a, U+570b, U+5730, U+5916, U+5929, U+5c71, U+5e74, U+5fc3, U+601d, U+6027, U+63d0, U+6709, U+6734, U+751f, U+7684, U+82f1, U+9053, U+91d1, U+97f3, U+ac2f, U+ac4d, U+adc4, U+ade4, U+ae41, U+ae4d-ae4e, U+aed1, U+afb9, U+b0e0, U+b299, U+b365, U+b46c, U+b480, U+b4c8, U+b7b4, U+b819, U+b918, U+baab, U+bab9, U+be8f, U+bed7, U+c0ec, U+c19f, U+c1a5, U+c3d9, U+c464, U+c53d, U+c553, U+c570, U+c5cc, U+c633, U+c6a4, U+c7a3, U+c7a6, U+c886, U+c9d9-c9da, U+c9ec, U+ca0c, U+cc21, U+cd1b, U+cd78, U+cdc4, U+cef8, U+cfe4, U+d0a5, U+d0b5, U+d0ec, U+d15d, U+d188, U+d23c, U+d2ac, U+d729, U+d79b, U+ff01, U+ff08-ff09, U+ff5c;
}
/* [106] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.106.woff2) format('woff2');
  unicode-range: U+2039-203a, U+223c, U+25b3, U+25b7, U+25bd, U+25cf, U+266a, U+3002, U+300b, U+304b, U+3057, U+305f, U+306a-306b, U+307e, U+308a-308b, U+3093, U+30a2, U+30af, U+30b9, U+30c3, U+30c8, U+30e9-30eb, U+33a1, U+4e00, U+524d, U+5357, U+5b50, U+7121, U+884c, U+9751, U+ac94, U+aebe, U+aecd, U+af08, U+af41, U+af49, U+b010, U+b053, U+b109, U+b11b, U+b128, U+b154, U+b291, U+b2e6, U+b301, U+b385, U+b525, U+b5b4, U+b729, U+b72f, U+b738, U+b7ff, U+b837, U+b975, U+ba67, U+bb47, U+bc1f, U+bd90, U+bfd4, U+c27c, U+c324, U+c379, U+c3e0, U+c465, U+c53b, U+c58c, U+c610, U+c653, U+c6cd, U+c813, U+c82f, U+c999, U+c9e0, U+cac4, U+cad3, U+cbd4, U+cc10, U+cc22, U+ccb8, U+ccbc, U+cda5, U+ce84, U+cea3, U+cf67, U+cfe1, U+d241, U+d30d, U+d31c, U+d391, U+d401, U+d479, U+d5c9, U+d5db, U+d649, U+d6d4;
}
/* [107] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.107.woff2) format('woff2');
  unicode-range: U+b0, U+e9, U+2193, U+2462, U+260e, U+261e, U+300e-300f, U+3044, U+30a4, U+30fb-30fc, U+314d, U+5973, U+6545, U+6708, U+7537, U+ac89, U+ac9c, U+acc1, U+ad04, U+ad75, U+ad7d, U+ae45, U+ae61, U+af42, U+b0ab, U+b0af, U+b0b3, U+b12c, U+b194, U+b1a8, U+b220, U+b258, U+b284, U+b2ff, U+b315, U+b371, U+b3d4-b3d5, U+b460, U+b527, U+b534, U+b810, U+b818, U+b98e, U+ba55, U+bbac, U+bc0b, U+bc40, U+bca1, U+bccd, U+bd93, U+be54, U+be5a, U+bf08, U+bf50, U+bf55, U+bfdc, U+c0c0, U+c0d0, U+c0f4, U+c100, U+c11e, U+c170, U+c20d, U+c274, U+c290, U+c308, U+c369, U+c539, U+c587, U+c5ff, U+c6ec, U+c70c, U+c7ad, U+c7c8, U+c83c, U+c881, U+cb48, U+cc60, U+ce69, U+ce6b, U+ce75, U+cf04, U+cf08, U+cf55, U+cf70, U+cffc, U+d0b7, U+d1a8, U+d2c8, U+d384, U+d47c, U+d48b, U+d5dd, U+d5e8, U+d720, U+d759, U+f981;
}
/* [108] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.108.woff2) format('woff2');
  unicode-range: U+e0, U+e2, U+395, U+3b7, U+3ba, U+2460-2461, U+25a0, U+3010-3011, U+306e, U+30f3, U+314a, U+314c, U+5927, U+65b0, U+7e41, U+97d3, U+9ad4, U+ad49, U+ae0b, U+ae0d, U+ae43, U+ae5d, U+aecf, U+af3c, U+af64, U+afd4, U+b080, U+b084, U+b0c5, U+b10c, U+b1e8, U+b2ac, U+b36e, U+b451, U+b515, U+b540, U+b561, U+b6ab, U+b6b1, U+b72c, U+b730, U+b744, U+b800, U+b8ec, U+b8f0, U+b904, U+b968, U+b96d, U+b987, U+b9d9, U+bb36, U+bb49, U+bc2d, U+bc43, U+bcf6, U+bd89, U+be57, U+be61, U+bed4, U+c090, U+c130, U+c148, U+c19c, U+c2f9, U+c36c, U+c37c, U+c384, U+c3df, U+c575, U+c584, U+c660, U+c719, U+c816, U+ca4d, U+ca54, U+cabc, U+cb49, U+cc14, U+cff5, U+d004, U+d038, U+d0b4, U+d0d3, U+d0e0, U+d0ed, U+d131, U+d1b0, U+d31f, U+d33d, U+d3a0, U+d3ab, U+d514, U+d584, U+d6a1, U+d6cc, U+d749, U+d760, U+d799;
}
/* [109] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.109.woff2) format('woff2');
  unicode-range: U+24, U+60, U+3b9, U+3bb, U+3bd, U+2191, U+2606, U+300c-300d, U+3131, U+3134, U+3139, U+3141-3142, U+3148, U+3161, U+3163, U+321c, U+4eba, U+5317, U+ac31, U+ac77, U+ac9f, U+acb9, U+acf0-acf1, U+acfd, U+ad73, U+af3d, U+b00c, U+b04a, U+b057, U+b0c4, U+b188, U+b1cc, U+b214, U+b2db, U+b2ee, U+b304, U+b4ed, U+b518, U+b5bc, U+b625, U+b69c-b69d, U+b7ac, U+b801, U+b86c, U+b959, U+b95c, U+b985, U+ba48, U+bb58, U+bc0c, U+bc38, U+bc85, U+bc9a, U+bf40, U+c068, U+c0bd, U+c0cc, U+c12f, U+c149, U+c1e0, U+c22b, U+c22d, U+c250, U+c2fc, U+c300, U+c313, U+c370, U+c3d8, U+c557, U+c580, U+c5e3, U+c62e, U+c634, U+c6f0, U+c74d, U+c783, U+c78e, U+c796, U+c7bc, U+c92c, U+ca4c, U+cc1c, U+cc54, U+cc59, U+ce04, U+cf30, U+cfc4, U+d140, U+d321, U+d38c, U+d399, U+d54f, U+d587, U+d5d0, U+d6e8, U+d770;
}
/* [110] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.110.woff2) format('woff2');
  unicode-range: U+d7, U+ea, U+fc, U+2192, U+25bc, U+3000, U+3137, U+3145, U+315c, U+7f8e, U+ac13, U+ac71, U+ac90, U+acb8, U+ace7, U+ad7f, U+ae50, U+aef4, U+af34, U+afbc, U+b048, U+b09a, U+b0ad, U+b0bc, U+b113, U+b125, U+b141, U+b20c, U+b2d9, U+b2ed, U+b367, U+b369, U+b374, U+b3cb, U+b4ec, U+b611, U+b760, U+b81b, U+b834, U+b8b0, U+b8e1, U+b989, U+b9d1, U+b9e1, U+b9fa, U+ba4d, U+ba78, U+bb35, U+bb54, U+bbf9, U+bc11, U+bcb3, U+bd05, U+bd95, U+bdd4, U+be10, U+bed0, U+bf51, U+c0d8, U+c232, U+c2b7, U+c2eb, U+c378, U+c500, U+c52c, U+c549, U+c568, U+c598, U+c5c9, U+c61b, U+c639, U+c67c, U+c717, U+c78a, U+c80a, U+c90c-c90d, U+c950, U+c9e7, U+cbe4, U+cca9, U+cce4, U+cdb0, U+ce78, U+ce94, U+ce98, U+cf8c, U+d018, U+d034, U+d0f1, U+d1b1, U+d280, U+d2f8, U+d338, U+d380, U+d3b4, U+d610, U+d69f, U+d6fc, U+d758;
}
/* [111] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.111.woff2) format('woff2');
  unicode-range: U+e7, U+2022, U+203b, U+25c0, U+2605, U+2661, U+3147, U+318d, U+672c, U+8a9e, U+acaa, U+acbc, U+ad1c, U+ae4a, U+ae5c, U+b044, U+b054, U+b0c8-b0c9, U+b2a6, U+b2d0, U+b35c, U+b364, U+b428, U+b454, U+b465, U+b4b7, U+b4e3, U+b51c, U+b5a1, U+b784, U+b790, U+b7ab, U+b7f4, U+b82c, U+b835, U+b8e9, U+b8f8, U+b9d8, U+b9f9, U+ba5c, U+ba64, U+babd, U+bb18, U+bb3b, U+bbff, U+bc0d, U+bc45, U+bc97, U+bcbc, U+be45, U+be75, U+be7c, U+bfcc, U+c0b6, U+c0f7, U+c14b, U+c2b4, U+c30d, U+c4f8, U+c5bb, U+c5d1, U+c5e0, U+c5ee, U+c5fd, U+c606, U+c6c5, U+c6e0, U+c708, U+c81d, U+c820, U+c824, U+c878, U+c918, U+c96c, U+c9e4, U+c9f1, U+cc2e, U+cd09, U+cea1, U+cef5, U+cef7, U+cf64, U+cf69, U+cfe8, U+d035, U+d0ac, U+d230, U+d234, U+d2f4, U+d31d, U+d575, U+d578, U+d608, U+d614, U+d718, U+d751, U+d761, U+d78c, U+d790;
}
/* [112] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.112.woff2) format('woff2');
  unicode-range: U+2665, U+3160, U+4e2d, U+6587, U+65e5, U+ac12, U+ac14, U+ac16, U+ac81, U+ad34, U+ade0, U+ae54, U+aebc, U+af2c, U+afc0, U+afc8, U+b04c, U+b08c, U+b099, U+b0a9, U+b0ac, U+b0ae, U+b0b8, U+b123, U+b179, U+b2e5, U+b2f7, U+b4c0, U+b531, U+b538, U+b545, U+b550, U+b5a8, U+b6f0, U+b728, U+b73b, U+b7ad, U+b7ed, U+b809, U+b864, U+b86d, U+b871, U+b9bf, U+b9f5, U+ba40, U+ba4b, U+ba58, U+ba87, U+baac, U+bbc0, U+bc16, U+bc34, U+bd07, U+bd99, U+be59, U+bfd0, U+c058, U+c0e4, U+c0f5, U+c12d, U+c139, U+c228, U+c529, U+c5c7, U+c635, U+c637, U+c735, U+c77d, U+c787, U+c789, U+c8c4, U+c989, U+c98c, U+c9d0, U+c9d3, U+cc0c, U+cc99, U+cd0c, U+cd2c, U+cd98, U+cda4, U+ce59, U+ce60, U+ce6d, U+cea0, U+d0d0-d0d1, U+d0d5, U+d14d, U+d1a4, U+d29c, U+d2f1, U+d301, U+d39c, U+d3bc, U+d4e8, U+d540, U+d5ec, U+d640, U+d750;
}
/* [113] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.113.woff2) format('woff2');
  unicode-range: U+5e, U+25b2, U+25b6, U+314e, U+ac24, U+ace1, U+ace4, U+ae68, U+af2d, U+b0d0, U+b0e5, U+b150, U+b155, U+b193, U+b2c9, U+b2dd, U+b3c8, U+b3fc, U+b410, U+b458, U+b4dd, U+b5a0, U+b5a4, U+b5bb, U+b7b5, U+b838, U+b840, U+b86f, U+b8f9, U+b960, U+b9e5, U+bab8, U+bb50, U+bc1d, U+bc24-bc25, U+bca8, U+bcbd, U+bd04, U+bd10, U+bd24, U+be48, U+be5b, U+be68, U+c05c, U+c12c, U+c140, U+c15c, U+c168, U+c194, U+c219, U+c27d, U+c2a8, U+c2f1, U+c2f8, U+c368, U+c554-c555, U+c559, U+c564, U+c5d8, U+c5fc, U+c625, U+c65c, U+c6b1, U+c728, U+c794, U+c84c, U+c88c, U+c8e0, U+c8fd, U+c998, U+c9dd, U+cc0d, U+cc30, U+ceec, U+cf13, U+cf1c, U+cf5c, U+d050, U+d07c, U+d0a8, U+d134, U+d138, U+d154, U+d1f4, U+d2bc, U+d329, U+d32c, U+d3d0, U+d3f4, U+d3fc, U+d56b, U+d5cc, U+d600-d601, U+d639, U+d6c8, U+d754, U+d765;
}
/* [114] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.114.woff2) format('woff2');
  unicode-range: U+3c-3d, U+2026, U+24d2, U+314b, U+ac11, U+acf3, U+ad74, U+ad81, U+adf9, U+ae34, U+af43, U+afb8, U+b05d, U+b07c, U+b110, U+b118, U+b17c, U+b180, U+b18d, U+b192, U+b2cc, U+b355, U+b378, U+b4a4, U+b4ef, U+b78d, U+b799, U+b7a9, U+b7fd, U+b807, U+b80c, U+b839, U+b9b4, U+b9db, U+ba3c, U+bab0, U+bba4, U+bc94, U+be4c, U+c154, U+c1c4, U+c26c, U+c2ac, U+c2ed, U+c4f4, U+c55e, U+c561, U+c571, U+c5b5, U+c5c4, U+c654-c655, U+c695, U+c6e8, U+c6f9, U+c724, U+c751, U+c775, U+c7a0, U+c7c1, U+c874, U+c880, U+c9d5, U+c9f8, U+cabd, U+cc29, U+cc2c, U+cca8, U+ccab, U+ccd0, U+ce21, U+ce35, U+ce7c, U+ce90, U+cee8, U+cef4, U+cfe0, U+d070, U+d0b9, U+d0c1, U+d0c4, U+d0c8, U+d15c, U+d1a1, U+d2c0, U+d300, U+d314, U+d3ed, U+d478, U+d480, U+d48d, U+d508, U+d53d, U+d5e4, U+d611, U+d61c, U+d68d, U+d6a8, U+d798;
}
/* [115] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.115.woff2) format('woff2');
  unicode-range: U+23, U+25, U+5f, U+a9, U+ac08, U+ac78, U+aca8, U+acac, U+ace8, U+ad70, U+adc0, U+addc, U+b137, U+b140, U+b208, U+b290, U+b2f5, U+b3c5, U+b3cc, U+b420, U+b429, U+b529, U+b530, U+b77d, U+b79c, U+b7a8, U+b7c9, U+b7f0, U+b7fc, U+b828, U+b860, U+b9ad, U+b9c1, U+b9c9, U+b9dd-b9de, U+b9e8, U+ba38-ba39, U+babb, U+bc00, U+bc8c, U+bca0, U+bca4, U+bcd1, U+bcfc, U+bd09, U+bdf0, U+be60, U+c0ad, U+c0b4, U+c0bc, U+c190, U+c1fc, U+c220, U+c288, U+c2b9, U+c2f6, U+c528, U+c545, U+c558, U+c5bc, U+c5d4, U+c600, U+c644, U+c6c0, U+c6c3, U+c721, U+c798, U+c7a1, U+c811, U+c838, U+c871, U+c904, U+c990, U+c9dc, U+cc38, U+cc44, U+cca0, U+cd1d, U+cd95, U+cda9, U+ce5c, U+cf00, U+cf58, U+d150, U+d22c, U+d305, U+d328, U+d37c, U+d3f0, U+d551, U+d5a5, U+d5c8, U+d5d8, U+d63c, U+d64d, U+d669, U+d734, U+d76c;
}
/* [116] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.116.woff2) format('woff2');
  unicode-range: U+26, U+2b, U+3e, U+40, U+7e, U+ac01, U+ac19, U+ac1d, U+aca0, U+aca9, U+acb0, U+ad8c, U+ae09, U+ae38, U+ae40, U+aed8, U+b09c, U+b0a0, U+b108, U+b204, U+b298, U+b2d8, U+b2eb-b2ec, U+b2f4, U+b313, U+b358, U+b450, U+b4e0, U+b54c, U+b610, U+b780, U+b78c, U+b791, U+b8e8, U+b958, U+b974, U+b984, U+b9b0, U+b9bc-b9bd, U+b9ce, U+ba70, U+bbfc, U+bc0f, U+bc15, U+bc1b, U+bc31, U+bc95, U+bcc0, U+bcc4, U+bd81, U+bd88, U+c0c8, U+c11d, U+c13c, U+c158, U+c18d, U+c1a1, U+c21c, U+c4f0, U+c54a, U+c560, U+c5b8, U+c5c8, U+c5f4, U+c628, U+c62c, U+c678, U+c6cc, U+c808, U+c810, U+c885, U+c88b, U+c900, U+c988, U+c99d, U+c9c8, U+cc3d-cc3e, U+cc45, U+cd08, U+ce20, U+cee4, U+d074, U+d0a4, U+d0dd, U+d2b9, U+d3b8, U+d3c9, U+d488, U+d544, U+d559, U+d56d, U+d588, U+d615, U+d648, U+d655, U+d658, U+d65c;
}
/* [117] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.117.woff2) format('woff2');
  unicode-range: U+d, U+48, U+7c, U+ac10, U+ac15, U+ac74, U+ac80, U+ac83, U+acc4, U+ad11, U+ad50, U+ad6d, U+adfc, U+ae00, U+ae08, U+ae4c, U+b0a8, U+b124, U+b144, U+b178, U+b274, U+b2a5, U+b2e8, U+b2f9, U+b354, U+b370, U+b418, U+b41c, U+b4f1, U+b514, U+b798, U+b808, U+b824-b825, U+b8cc, U+b978, U+b9d0, U+b9e4, U+baa9, U+bb3c, U+bc18, U+bc1c, U+bc30, U+bc84, U+bcf5, U+bcf8, U+bd84, U+be0c, U+be14, U+c0b0, U+c0c9, U+c0dd, U+c124, U+c2dd, U+c2e4, U+c2ec, U+c54c, U+c57c-c57d, U+c591, U+c5c5-c5c6, U+c5ed, U+c608, U+c640, U+c6b8, U+c6d4, U+c784, U+c7ac, U+c800-c801, U+c9c1, U+c9d1, U+cc28, U+cc98, U+cc9c, U+ccad, U+cd5c, U+cd94, U+cd9c, U+cde8, U+ce68, U+cf54, U+d0dc, U+d14c, U+d1a0, U+d1b5, U+d2f0, U+d30c, U+d310, U+d398, U+d45c, U+d50c, U+d53c, U+d560, U+d568, U+d589, U+d604, U+d6c4, U+d788;
}
/* [118] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.118.woff2) format('woff2');
  unicode-range: U+39, U+49, U+4d-4e, U+a0, U+ac04, U+ac1c, U+ac70, U+ac8c, U+acbd, U+acf5, U+acfc, U+ad00, U+ad6c, U+adf8, U+b098, U+b0b4, U+b294, U+b2c8, U+b300, U+b3c4, U+b3d9, U+b4dc, U+b4e4, U+b77c, U+b7ec, U+b85d, U+b97c, U+b9c8, U+b9cc, U+ba54, U+ba74, U+ba85, U+baa8, U+bb34, U+bb38, U+bbf8, U+bc14, U+bc29, U+bc88, U+bcf4, U+bd80, U+be44, U+c0c1, U+c11c, U+c120, U+c131, U+c138, U+c18c, U+c218, U+c2b5, U+c2e0, U+c544, U+c548, U+c5b4, U+c5d0, U+c5ec, U+c5f0, U+c601, U+c624, U+c694, U+c6a9, U+c6b0, U+c6b4, U+c6d0, U+c704, U+c720, U+c73c, U+c740, U+c744, U+c74c, U+c758, U+c77c, U+c785, U+c788, U+c790-c791, U+c7a5, U+c804, U+c815, U+c81c, U+c870, U+c8fc, U+c911, U+c9c4, U+ccb4, U+ce58, U+ce74, U+d06c, U+d0c0, U+d130, U+d2b8, U+d3ec, U+d504, U+d55c, U+d569, U+d574, U+d638, U+d654, U+d68c;
}
/* [119] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.119.woff2) format('woff2');
  unicode-range: U+20-22, U+27-2a, U+2c-38, U+3a-3b, U+3f, U+41-47, U+4a-4c, U+4f-5d, U+61-7b, U+7d, U+a1, U+ab, U+ae, U+b7, U+bb, U+bf, U+2013-2014, U+201c-201d, U+2122, U+ac00, U+ace0, U+ae30, U+b2e4, U+b85c, U+b9ac, U+c0ac, U+c2a4, U+c2dc, U+c774, U+c778, U+c9c0, U+d558;
}
/* cyrillic */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1SLfg8U4h.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1SLzg8U4h.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1SL3g8U4h.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzmo1SLPg8Q.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* [0] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.0.woff2) format('woff2');
  unicode-range: U+f9ca-fa0b, U+ff03-ff05, U+ff07, U+ff0a-ff0b, U+ff0d-ff19, U+ff1b, U+ff1d, U+ff20-ff5b, U+ff5d, U+ffe0-ffe3, U+ffe5-ffe6;
}
/* [1] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.1.woff2) format('woff2');
  unicode-range: U+f92f-f980, U+f982-f9c9;
}
/* [2] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.2.woff2) format('woff2');
  unicode-range: U+d723-d728, U+d72a-d733, U+d735-d748, U+d74a-d74f, U+d752-d753, U+d755-d757, U+d75a-d75f, U+d762-d764, U+d766-d768, U+d76a-d76b, U+d76d-d76f, U+d771-d787, U+d789-d78b, U+d78d-d78f, U+d791-d797, U+d79a, U+d79c, U+d79e-d7a3, U+f900-f909, U+f90b-f92e;
}
/* [3] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.3.woff2) format('woff2');
  unicode-range: U+d679-d68b, U+d68e-d69e, U+d6a0, U+d6a2-d6a7, U+d6a9-d6c3, U+d6c6-d6c7, U+d6c9-d6cb, U+d6cd-d6d3, U+d6d5-d6d6, U+d6d8-d6e3, U+d6e5-d6e7, U+d6e9-d6fb, U+d6fd-d717, U+d719-d71f, U+d721-d722;
}
/* [4] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.4.woff2) format('woff2');
  unicode-range: U+d5bc-d5c7, U+d5ca-d5cb, U+d5cd-d5cf, U+d5d1-d5d7, U+d5d9-d5da, U+d5dc, U+d5de-d5e3, U+d5e6-d5e7, U+d5e9-d5eb, U+d5ed-d5f6, U+d5f8, U+d5fa-d5ff, U+d602-d603, U+d605-d607, U+d609-d60f, U+d612-d613, U+d616-d61b, U+d61d-d637, U+d63a-d63b, U+d63d-d63f, U+d641-d647, U+d64a-d64c, U+d64e-d653, U+d656-d657, U+d659-d65b, U+d65d-d666, U+d668, U+d66a-d678;
}
/* [5] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.5.woff2) format('woff2');
  unicode-range: U+d507, U+d509-d50b, U+d50d-d513, U+d515-d53b, U+d53e-d53f, U+d541-d543, U+d545-d54c, U+d54e, U+d550, U+d552-d557, U+d55a-d55b, U+d55d-d55f, U+d561-d564, U+d566-d567, U+d56a, U+d56c, U+d56e-d573, U+d576-d577, U+d579-d583, U+d585-d586, U+d58a-d5a4, U+d5a6-d5bb;
}
/* [6] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.6.woff2) format('woff2');
  unicode-range: U+d464-d477, U+d47a-d47b, U+d47d-d47f, U+d481-d487, U+d489-d48a, U+d48c, U+d48e-d4e7, U+d4e9-d503, U+d505-d506;
}
/* [7] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.7.woff2) format('woff2');
  unicode-range: U+d3bf-d3c7, U+d3ca-d3cf, U+d3d1-d3eb, U+d3ee-d3ef, U+d3f1-d3f3, U+d3f5-d3fb, U+d3fd-d400, U+d402-d45b, U+d45d-d463;
}
/* [8] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.8.woff2) format('woff2');
  unicode-range: U+d2ff, U+d302-d304, U+d306-d30b, U+d30f, U+d311-d313, U+d315-d31b, U+d31e, U+d322-d324, U+d326-d327, U+d32a-d32b, U+d32d-d32f, U+d331-d337, U+d339-d33c, U+d33e-d37b, U+d37e-d37f, U+d381-d383, U+d385-d38b, U+d38e-d390, U+d392-d397, U+d39a-d39b, U+d39d-d39f, U+d3a1-d3a7, U+d3a9-d3aa, U+d3ac, U+d3ae-d3b3, U+d3b5-d3b7, U+d3b9-d3bb, U+d3bd-d3be;
}
/* [9] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.9.woff2) format('woff2');
  unicode-range: U+d257-d27f, U+d281-d29b, U+d29d-d29f, U+d2a1-d2ab, U+d2ad-d2b7, U+d2ba-d2bb, U+d2bd-d2bf, U+d2c1-d2c7, U+d2c9-d2ef, U+d2f2-d2f3, U+d2f5-d2f7, U+d2f9-d2fe;
}
/* [10] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.10.woff2) format('woff2');
  unicode-range: U+d1b4, U+d1b6-d1f3, U+d1f5-d22b, U+d22e-d22f, U+d231-d233, U+d235-d23b, U+d23d-d240, U+d242-d256;
}
/* [11] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.11.woff2) format('woff2');
  unicode-range: U+d105-d12f, U+d132-d133, U+d135-d137, U+d139-d13f, U+d141-d142, U+d144, U+d146-d14b, U+d14e-d14f, U+d151-d153, U+d155-d15b, U+d15e-d187, U+d189-d19f, U+d1a2-d1a3, U+d1a5-d1a7, U+d1a9-d1af, U+d1b2-d1b3;
}
/* [12] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.12.woff2) format('woff2');
  unicode-range: U+d04b-d04f, U+d051-d057, U+d059-d06b, U+d06d-d06f, U+d071-d073, U+d075-d07b, U+d07e-d0a3, U+d0a6-d0a7, U+d0a9-d0ab, U+d0ad-d0b3, U+d0b6, U+d0b8, U+d0ba-d0bf, U+d0c2-d0c3, U+d0c5-d0c7, U+d0c9-d0cf, U+d0d2, U+d0d6-d0db, U+d0de-d0df, U+d0e1-d0e3, U+d0e5-d0eb, U+d0ee-d0f0, U+d0f2-d104;
}
/* [13] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.13.woff2) format('woff2');
  unicode-range: U+cfa2-cfc3, U+cfc5-cfdf, U+cfe2-cfe3, U+cfe5-cfe7, U+cfe9-cff4, U+cff6-cffb, U+cffd-cfff, U+d001-d003, U+d005-d017, U+d019-d033, U+d036-d037, U+d039-d03b, U+d03d-d04a;
}
/* [14] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.14.woff2) format('woff2');
  unicode-range: U+cef0-cef3, U+cef6, U+cef9-ceff, U+cf01-cf03, U+cf05-cf07, U+cf09-cf0f, U+cf11-cf12, U+cf14-cf1b, U+cf1d-cf1f, U+cf21-cf2f, U+cf31-cf53, U+cf56-cf57, U+cf59-cf5b, U+cf5d-cf63, U+cf66, U+cf68, U+cf6a-cf6f, U+cf71-cf84, U+cf86-cf8b, U+cf8d-cfa1;
}
/* [15] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.15.woff2) format('woff2');
  unicode-range: U+ce3c-ce57, U+ce5a-ce5b, U+ce5d-ce5f, U+ce61-ce67, U+ce6a, U+ce6c, U+ce6e-ce73, U+ce76-ce77, U+ce79-ce7b, U+ce7d-ce83, U+ce85-ce88, U+ce8a-ce8f, U+ce91-ce93, U+ce95-ce97, U+ce99-ce9f, U+cea2, U+cea4-ceab, U+cead-cee3, U+cee6-cee7, U+cee9-ceeb, U+ceed-ceef;
}
/* [16] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.16.woff2) format('woff2');
  unicode-range: U+cd92-cd93, U+cd96-cd97, U+cd99-cd9b, U+cd9d-cda3, U+cda6-cda8, U+cdaa-cdaf, U+cdb1-cdc3, U+cdc5-cdcb, U+cdcd-cde7, U+cde9-ce03, U+ce05-ce1f, U+ce22-ce34, U+ce36-ce3b;
}
/* [17] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.17.woff2) format('woff2');
  unicode-range: U+ccef-cd07, U+cd0a-cd0b, U+cd0d-cd1a, U+cd1c, U+cd1e-cd2b, U+cd2d-cd5b, U+cd5d-cd77, U+cd79-cd91;
}
/* [18] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.18.woff2) format('woff2');
  unicode-range: U+cc3f-cc43, U+cc46-cc47, U+cc49-cc4b, U+cc4d-cc53, U+cc55-cc58, U+cc5a-cc5f, U+cc61-cc97, U+cc9a-cc9b, U+cc9d-cc9f, U+cca1-cca7, U+ccaa, U+ccac, U+ccae-ccb3, U+ccb6-ccb7, U+ccb9-ccbb, U+ccbd-cccf, U+ccd1-cce3, U+cce5-ccee;
}
/* [19] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.19.woff2) format('woff2');
  unicode-range: U+cb91-cbd3, U+cbd5-cbe3, U+cbe5-cc0b, U+cc0e-cc0f, U+cc11-cc13, U+cc15-cc1b, U+cc1d-cc20, U+cc23-cc27, U+cc2a-cc2b, U+cc2d, U+cc2f, U+cc31-cc37, U+cc3a, U+cc3c;
}
/* [20] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.20.woff2) format('woff2');
  unicode-range: U+caf4-cb47, U+cb4a-cb90;
}
/* [21] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.21.woff2) format('woff2');
  unicode-range: U+ca4a-ca4b, U+ca4e-ca4f, U+ca51-ca53, U+ca55-ca5b, U+ca5d-ca60, U+ca62-ca83, U+ca85-cabb, U+cabe-cabf, U+cac1-cac3, U+cac5-cacb, U+cacd-cad0, U+cad2, U+cad4-cad8, U+cada-caf3;
}
/* [22] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.22.woff2) format('woff2');
  unicode-range: U+c996-c997, U+c99a-c99c, U+c99e-c9bf, U+c9c2-c9c3, U+c9c5-c9c7, U+c9c9-c9cf, U+c9d2, U+c9d4, U+c9d7-c9d8, U+c9db, U+c9de-c9df, U+c9e1-c9e3, U+c9e5-c9e6, U+c9e8-c9eb, U+c9ee-c9f0, U+c9f2-c9f7, U+c9f9-ca0b, U+ca0d-ca28, U+ca2a-ca49;
}
/* [23] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.23.woff2) format('woff2');
  unicode-range: U+c8e9-c8f4, U+c8f6-c8fb, U+c8fe-c8ff, U+c901-c903, U+c905-c90b, U+c90e-c910, U+c912-c917, U+c919-c92b, U+c92d-c94f, U+c951-c953, U+c955-c96b, U+c96d-c973, U+c975-c987, U+c98a-c98b, U+c98d-c98f, U+c991-c995;
}
/* [24] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.24.woff2) format('woff2');
  unicode-range: U+c841-c84b, U+c84d-c86f, U+c872-c873, U+c875-c877, U+c879-c87f, U+c882-c884, U+c887-c88a, U+c88d-c8c3, U+c8c5-c8df, U+c8e1-c8e8;
}
/* [25] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.25.woff2) format('woff2');
  unicode-range: U+c779-c77b, U+c77e-c782, U+c786, U+c78b, U+c78d, U+c78f, U+c792-c793, U+c795, U+c797, U+c799-c79f, U+c7a2, U+c7a7-c7ab, U+c7ae-c7bb, U+c7bd-c7c0, U+c7c2-c7c7, U+c7c9-c7dc, U+c7de-c7ff, U+c802-c803, U+c805-c807, U+c809, U+c80b-c80f, U+c812, U+c814, U+c817-c81b, U+c81e-c81f, U+c821-c823, U+c825-c82e, U+c830-c837, U+c839-c83b, U+c83d-c840;
}
/* [26] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.26.woff2) format('woff2');
  unicode-range: U+c6bb-c6bf, U+c6c2, U+c6c4, U+c6c6-c6cb, U+c6ce-c6cf, U+c6d1-c6d3, U+c6d5-c6db, U+c6dd-c6df, U+c6e1-c6e7, U+c6e9-c6eb, U+c6ed-c6ef, U+c6f1-c6f8, U+c6fa-c703, U+c705-c707, U+c709-c70b, U+c70d-c716, U+c718, U+c71a-c71f, U+c722-c723, U+c725-c727, U+c729-c734, U+c736-c73b, U+c73e-c73f, U+c741-c743, U+c745-c74b, U+c74e-c750, U+c752-c757, U+c759-c773, U+c776-c777;
}
/* [27] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.27.woff2) format('woff2');
  unicode-range: U+c5f5-c5fb, U+c5fe, U+c602-c605, U+c607, U+c609-c60f, U+c611-c61a, U+c61c-c623, U+c626-c627, U+c629-c62b, U+c62d, U+c62f-c632, U+c636, U+c638, U+c63a-c63f, U+c642-c643, U+c645-c647, U+c649-c652, U+c656-c65b, U+c65d-c65f, U+c661-c663, U+c665-c677, U+c679-c67b, U+c67d-c693, U+c696-c697, U+c699-c69b, U+c69d-c6a3, U+c6a6, U+c6a8, U+c6aa-c6af, U+c6b2-c6b3, U+c6b5-c6b7, U+c6b9-c6ba;
}
/* [28] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.28.woff2) format('woff2');
  unicode-range: U+c517-c527, U+c52a-c52b, U+c52d-c52f, U+c531-c538, U+c53a, U+c53c, U+c53e-c543, U+c546-c547, U+c54b, U+c54d-c552, U+c556, U+c55a-c55b, U+c55d, U+c55f, U+c562-c563, U+c565-c567, U+c569-c56f, U+c572, U+c574, U+c576-c57b, U+c57e-c57f, U+c581-c583, U+c585-c586, U+c588-c58b, U+c58e, U+c590, U+c592-c596, U+c599-c5b3, U+c5b6-c5b7, U+c5ba, U+c5be-c5c3, U+c5ca-c5cb, U+c5cd, U+c5cf, U+c5d2-c5d3, U+c5d5-c5d7, U+c5d9-c5df, U+c5e1-c5e2, U+c5e4, U+c5e6-c5eb, U+c5ef, U+c5f1-c5f3;
}
/* [29] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.29.woff2) format('woff2');
  unicode-range: U+c475-c4ef, U+c4f2-c4f3, U+c4f5-c4f7, U+c4f9-c4ff, U+c502-c50b, U+c50d-c516;
}
/* [30] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.30.woff2) format('woff2');
  unicode-range: U+c3d0-c3d7, U+c3da-c3db, U+c3dd-c3de, U+c3e1-c3ec, U+c3ee-c3f3, U+c3f5-c42b, U+c42d-c463, U+c466-c474;
}
/* [31] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.31.woff2) format('woff2');
  unicode-range: U+c32b-c367, U+c36a-c36b, U+c36d-c36f, U+c371-c377, U+c37a-c37b, U+c37e-c383, U+c385-c387, U+c389-c3cf;
}
/* [32] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.32.woff2) format('woff2');
  unicode-range: U+c26a-c26b, U+c26d-c26f, U+c271-c273, U+c275-c27b, U+c27e-c287, U+c289-c28f, U+c291-c297, U+c299-c29a, U+c29c-c2a3, U+c2a5-c2a7, U+c2a9-c2ab, U+c2ad-c2b3, U+c2b6, U+c2b8, U+c2ba-c2bb, U+c2bd-c2db, U+c2de-c2df, U+c2e1-c2e2, U+c2e5-c2ea, U+c2ee, U+c2f0, U+c2f2-c2f5, U+c2f7, U+c2fa-c2fb, U+c2fd-c2ff, U+c301-c307, U+c309-c30c, U+c30e-c312, U+c315-c323, U+c325-c328, U+c32a;
}
/* [33] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.33.woff2) format('woff2');
  unicode-range: U+c1bc-c1c3, U+c1c5-c1df, U+c1e1-c1fb, U+c1fd-c203, U+c205-c20c, U+c20e, U+c210-c217, U+c21a-c21b, U+c21d-c21e, U+c221-c227, U+c229-c22a, U+c22c, U+c22e, U+c230, U+c233-c24f, U+c251-c257, U+c259-c269;
}
/* [34] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.34.woff2) format('woff2');
  unicode-range: U+c101-c11b, U+c11f, U+c121-c123, U+c125-c12b, U+c12e, U+c132-c137, U+c13a-c13b, U+c13d-c13f, U+c141-c147, U+c14a, U+c14c-c153, U+c155-c157, U+c159-c15b, U+c15d-c166, U+c169-c16f, U+c171-c177, U+c179-c18b, U+c18e-c18f, U+c191-c193, U+c195-c19b, U+c19d-c19e, U+c1a0, U+c1a2-c1a4, U+c1a6-c1bb;
}
/* [35] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.35.woff2) format('woff2');
  unicode-range: U+c049-c057, U+c059-c05b, U+c05d-c05f, U+c061-c067, U+c069-c08f, U+c091-c0ab, U+c0ae-c0af, U+c0b1-c0b3, U+c0b5, U+c0b7-c0bb, U+c0be, U+c0c2-c0c7, U+c0ca-c0cb, U+c0cd-c0cf, U+c0d1-c0d7, U+c0d9-c0da, U+c0dc, U+c0de-c0e3, U+c0e5-c0eb, U+c0ed-c0f3, U+c0f6, U+c0f8, U+c0fa-c0ff;
}
/* [36] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.36.woff2) format('woff2');
  unicode-range: U+bfa7-bfaf, U+bfb1-bfc4, U+bfc6-bfcb, U+bfce-bfcf, U+bfd1-bfd3, U+bfd5-bfdb, U+bfdd-c048;
}
/* [37] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.37.woff2) format('woff2');
  unicode-range: U+bf07, U+bf09-bf3f, U+bf41-bf4f, U+bf52-bf54, U+bf56-bfa6;
}
/* [38] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.38.woff2) format('woff2');
  unicode-range: U+be56, U+be58, U+be5c-be5f, U+be62-be63, U+be65-be67, U+be69-be74, U+be76-be7b, U+be7e-be7f, U+be81-be8e, U+be90, U+be92-bea7, U+bea9-becf, U+bed2-bed3, U+bed5-bed6, U+bed9-bee3, U+bee6-bf06;
}
/* [39] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.39.woff2) format('woff2');
  unicode-range: U+bdb0-bdd3, U+bdd5-bdef, U+bdf1-be0b, U+be0d-be0f, U+be11-be13, U+be15-be43, U+be46-be47, U+be49-be4b, U+be4d-be53;
}
/* [40] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.40.woff2) format('woff2');
  unicode-range: U+bd03, U+bd06, U+bd08, U+bd0a-bd0f, U+bd11-bd22, U+bd25-bd47, U+bd49-bd58, U+bd5a-bd7f, U+bd82-bd83, U+bd85-bd87, U+bd8a-bd8f, U+bd91-bd92, U+bd94, U+bd96-bd98, U+bd9a-bdaf;
}
/* [41] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.41.woff2) format('woff2');
  unicode-range: U+bc4e-bc83, U+bc86-bc87, U+bc89-bc8b, U+bc8d-bc93, U+bc96, U+bc98, U+bc9b-bc9f, U+bca2-bca3, U+bca5-bca7, U+bca9-bcb2, U+bcb4-bcbb, U+bcbe-bcbf, U+bcc1-bcc3, U+bcc5-bccc, U+bcce-bcd0, U+bcd2-bcd4, U+bcd6-bcf3, U+bcf7, U+bcf9-bcfb, U+bcfd-bd02;
}
/* [42] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.42.woff2) format('woff2');
  unicode-range: U+bb90-bba3, U+bba5-bbab, U+bbad-bbbf, U+bbc1-bbf7, U+bbfa-bbfb, U+bbfd-bbfe, U+bc01-bc07, U+bc09-bc0a, U+bc0e, U+bc10, U+bc12-bc13, U+bc17, U+bc19-bc1a, U+bc1e, U+bc20-bc23, U+bc26, U+bc28, U+bc2a-bc2c, U+bc2e-bc2f, U+bc32-bc33, U+bc35-bc37, U+bc39-bc3f, U+bc41-bc42, U+bc44, U+bc46-bc48, U+bc4a-bc4d;
}
/* [43] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.43.woff2) format('woff2');
  unicode-range: U+bae6-bafb, U+bafd-bb17, U+bb19-bb33, U+bb37, U+bb39-bb3a, U+bb3d-bb43, U+bb45-bb46, U+bb48, U+bb4a-bb4f, U+bb51-bb53, U+bb55-bb57, U+bb59-bb62, U+bb64-bb8f;
}
/* [44] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.44.woff2) format('woff2');
  unicode-range: U+ba30-ba37, U+ba3a-ba3b, U+ba3d-ba3f, U+ba41-ba47, U+ba49-ba4a, U+ba4c, U+ba4e-ba53, U+ba56-ba57, U+ba59-ba5b, U+ba5d-ba63, U+ba65-ba66, U+ba68-ba6f, U+ba71-ba73, U+ba75-ba77, U+ba79-ba84, U+ba86, U+ba88-baa7, U+baaa, U+baad-baaf, U+bab1-bab7, U+baba, U+babc, U+babe-bae5;
}
/* [45] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.45.woff2) format('woff2');
  unicode-range: U+b96e-b973, U+b976-b977, U+b979-b97b, U+b97d-b983, U+b986, U+b988, U+b98a-b98d, U+b98f-b9ab, U+b9ae-b9af, U+b9b1-b9b3, U+b9b5-b9bb, U+b9be, U+b9c0, U+b9c2-b9c7, U+b9ca-b9cb, U+b9cd, U+b9d2-b9d7, U+b9da, U+b9dc, U+b9df-b9e0, U+b9e2, U+b9e6-b9e7, U+b9e9-b9f3, U+b9f6, U+b9f8, U+b9fb-ba2f;
}
/* [46] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.46.woff2) format('woff2');
  unicode-range: U+b8bf-b8cb, U+b8cd-b8e0, U+b8e2-b8e7, U+b8ea-b8eb, U+b8ed-b8ef, U+b8f1-b8f7, U+b8fa, U+b8fc, U+b8fe-b903, U+b905-b917, U+b919-b91f, U+b921-b93b, U+b93d-b957, U+b95a-b95b, U+b95d-b95f, U+b961-b967, U+b969-b96c;
}
/* [47] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.47.woff2) format('woff2');
  unicode-range: U+b80d-b80f, U+b811-b817, U+b81a, U+b81c-b823, U+b826-b827, U+b829-b82b, U+b82d-b833, U+b836, U+b83a-b83f, U+b841-b85b, U+b85e-b85f, U+b861-b863, U+b865-b86b, U+b86e, U+b870, U+b872-b8af, U+b8b1-b8be;
}
/* [48] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.48.woff2) format('woff2');
  unicode-range: U+b74d-b75f, U+b761-b763, U+b765-b774, U+b776-b77b, U+b77e-b77f, U+b781-b783, U+b785-b78b, U+b78e, U+b792-b796, U+b79a-b79b, U+b79d-b7a7, U+b7aa, U+b7ae-b7b3, U+b7b6-b7c8, U+b7ca-b7eb, U+b7ee-b7ef, U+b7f1-b7f3, U+b7f5-b7fb, U+b7fe, U+b802-b806, U+b80a-b80b;
}
/* [49] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.49.woff2) format('woff2');
  unicode-range: U+b6a7-b6aa, U+b6ac-b6b0, U+b6b2-b6ef, U+b6f1-b727, U+b72a-b72b, U+b72d-b72e, U+b731-b737, U+b739-b73a, U+b73c-b743, U+b745-b74c;
}
/* [50] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.50.woff2) format('woff2');
  unicode-range: U+b605-b60f, U+b612-b617, U+b619-b624, U+b626-b69b, U+b69e-b6a3, U+b6a5-b6a6;
}
/* [51] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.51.woff2) format('woff2');
  unicode-range: U+b55f, U+b562-b583, U+b585-b59f, U+b5a2-b5a3, U+b5a5-b5a7, U+b5a9-b5b2, U+b5b5-b5ba, U+b5bd-b604;
}
/* [52] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.52.woff2) format('woff2');
  unicode-range: U+b4a5-b4b6, U+b4b8-b4bf, U+b4c1-b4c7, U+b4c9-b4db, U+b4de-b4df, U+b4e1-b4e2, U+b4e5-b4eb, U+b4ee, U+b4f0, U+b4f2-b513, U+b516-b517, U+b519-b51a, U+b51d-b523, U+b526, U+b528, U+b52b-b52f, U+b532-b533, U+b535-b537, U+b539-b53f, U+b541-b544, U+b546-b54b, U+b54d-b54f, U+b551-b55b, U+b55d-b55e;
}
/* [53] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.53.woff2) format('woff2');
  unicode-range: U+b3f8-b3fb, U+b3fd-b40f, U+b411-b417, U+b419-b41b, U+b41d-b41f, U+b421-b427, U+b42a-b42b, U+b42d-b44f, U+b452-b453, U+b455-b457, U+b459-b45f, U+b462-b464, U+b466-b46b, U+b46d-b47f, U+b481-b4a3;
}
/* [54] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.54.woff2) format('woff2');
  unicode-range: U+b342-b353, U+b356-b357, U+b359-b35b, U+b35d-b35e, U+b360-b363, U+b366, U+b368, U+b36a-b36d, U+b36f, U+b372-b373, U+b375-b377, U+b379-b37f, U+b381-b382, U+b384, U+b386-b38b, U+b38d-b3c3, U+b3c6-b3c7, U+b3c9-b3ca, U+b3cd-b3d3, U+b3d6, U+b3d8, U+b3da-b3f7;
}
/* [55] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.55.woff2) format('woff2');
  unicode-range: U+b27c-b283, U+b285-b28f, U+b292-b293, U+b295-b297, U+b29a-b29f, U+b2a1-b2a4, U+b2a7-b2a9, U+b2ab, U+b2ad-b2c7, U+b2ca-b2cb, U+b2cd-b2cf, U+b2d1-b2d7, U+b2da, U+b2dc, U+b2de-b2e3, U+b2e7, U+b2e9-b2ea, U+b2ef-b2f3, U+b2f6, U+b2f8, U+b2fa-b2fb, U+b2fd-b2fe, U+b302-b303, U+b305-b307, U+b309-b30f, U+b312, U+b316-b31b, U+b31d-b341;
}
/* [56] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.56.woff2) format('woff2');
  unicode-range: U+b1d6-b1e7, U+b1e9-b1fc, U+b1fe-b203, U+b206-b207, U+b209-b20b, U+b20d-b213, U+b216-b21f, U+b221-b257, U+b259-b273, U+b275-b27b;
}
/* [57] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.57.woff2) format('woff2');
  unicode-range: U+b120-b122, U+b126-b127, U+b129-b12b, U+b12d-b133, U+b136, U+b138, U+b13a-b13f, U+b142-b143, U+b145-b14f, U+b151-b153, U+b156-b157, U+b159-b177, U+b17a-b17b, U+b17d-b17f, U+b181-b187, U+b189-b18c, U+b18e-b191, U+b195-b1a7, U+b1a9-b1cb, U+b1cd-b1d5;
}
/* [58] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.58.woff2) format('woff2');
  unicode-range: U+b05f-b07b, U+b07e-b07f, U+b081-b083, U+b085-b08b, U+b08d-b097, U+b09b, U+b09d-b09f, U+b0a2-b0a7, U+b0aa, U+b0b0, U+b0b2, U+b0b6-b0b7, U+b0b9-b0bb, U+b0bd-b0c3, U+b0c6-b0c7, U+b0ca-b0cf, U+b0d1-b0df, U+b0e1-b0e4, U+b0e6-b107, U+b10a-b10b, U+b10d-b10f, U+b111-b112, U+b114-b117, U+b119-b11a, U+b11c-b11f;
}
/* [59] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.59.woff2) format('woff2');
  unicode-range: U+afac-afb7, U+afba-afbb, U+afbd-afbf, U+afc1-afc6, U+afca-afcc, U+afce-afd3, U+afd5-afe7, U+afe9-afef, U+aff1-b00b, U+b00d-b00f, U+b011-b013, U+b015-b01b, U+b01d-b027, U+b029-b043, U+b045-b047, U+b049, U+b04b, U+b04d-b052, U+b055-b056, U+b058-b05c, U+b05e;
}
/* [60] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.60.woff2) format('woff2');
  unicode-range: U+af03-af07, U+af09-af2b, U+af2e-af33, U+af35-af3b, U+af3e-af40, U+af44-af47, U+af4a-af5c, U+af5e-af63, U+af65-af7f, U+af81-afab;
}
/* [61] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.61.woff2) format('woff2');
  unicode-range: U+ae56-ae5b, U+ae5e-ae60, U+ae62-ae64, U+ae66-ae67, U+ae69-ae6b, U+ae6d-ae83, U+ae85-aebb, U+aebf, U+aec1-aec3, U+aec5-aecb, U+aece, U+aed0, U+aed2-aed7, U+aed9-aef3, U+aef5-af02;
}
/* [62] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.62.woff2) format('woff2');
  unicode-range: U+ad9c-ada3, U+ada5-adbf, U+adc1-adc3, U+adc5-adc7, U+adc9-add2, U+add4-addb, U+addd-addf, U+ade1-ade3, U+ade5-adf7, U+adfa-adfb, U+adfd-adff, U+ae02-ae07, U+ae0a, U+ae0c, U+ae0e-ae13, U+ae15-ae2f, U+ae31-ae33, U+ae35-ae37, U+ae39-ae3f, U+ae42, U+ae44, U+ae46-ae49, U+ae4b, U+ae4f, U+ae51-ae53, U+ae55;
}
/* [63] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.63.woff2) format('woff2');
  unicode-range: U+ace2-ace3, U+ace5-ace6, U+ace9-acef, U+acf2, U+acf4, U+acf7-acfb, U+acfe-acff, U+ad01-ad03, U+ad05-ad0b, U+ad0d-ad10, U+ad12-ad1b, U+ad1d-ad33, U+ad35-ad48, U+ad4a-ad4f, U+ad51-ad6b, U+ad6e-ad6f, U+ad71-ad72, U+ad77-ad7c, U+ad7e, U+ad80, U+ad82-ad87, U+ad89-ad8b, U+ad8d-ad8f, U+ad91-ad9b;
}
/* [64] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.64.woff2) format('woff2');
  unicode-range: U+ac25-ac2c, U+ac2e, U+ac30, U+ac32-ac37, U+ac39-ac3f, U+ac41-ac4c, U+ac4e-ac6f, U+ac72-ac73, U+ac75-ac76, U+ac79-ac7f, U+ac82, U+ac84-ac88, U+ac8a-ac8b, U+ac8d-ac8f, U+ac91-ac93, U+ac95-ac9b, U+ac9d-ac9e, U+aca1-aca7, U+acab, U+acad-acaf, U+acb1-acb7, U+acba-acbb, U+acbe-acc0, U+acc2-acc3, U+acc5-acdf;
}
/* [65] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.65.woff2) format('woff2');
  unicode-range: U+99df, U+99ed, U+99f1, U+99ff, U+9a01, U+9a08, U+9a0e-9a0f, U+9a19, U+9a2b, U+9a30, U+9a36-9a37, U+9a40, U+9a43, U+9a45, U+9a4d, U+9a55, U+9a57, U+9a5a-9a5b, U+9a5f, U+9a62, U+9a65, U+9a69-9a6a, U+9aa8, U+9ab8, U+9ad3, U+9ae5, U+9aee, U+9b1a, U+9b27, U+9b2a, U+9b31, U+9b3c, U+9b41-9b45, U+9b4f, U+9b54, U+9b5a, U+9b6f, U+9b8e, U+9b91, U+9b9f, U+9bab, U+9bae, U+9bc9, U+9bd6, U+9be4, U+9be8, U+9c0d, U+9c10, U+9c12, U+9c15, U+9c25, U+9c32, U+9c3b, U+9c47, U+9c49, U+9c57, U+9ce5, U+9ce7, U+9ce9, U+9cf3-9cf4, U+9cf6, U+9d09, U+9d1b, U+9d26, U+9d28, U+9d3b, U+9d51, U+9d5d, U+9d60-9d61, U+9d6c, U+9d72, U+9da9, U+9daf, U+9db4, U+9dc4, U+9dd7, U+9df2, U+9df8-9dfa, U+9e1a, U+9e1e, U+9e75, U+9e79, U+9e7d, U+9e7f, U+9e92-9e93, U+9e97, U+9e9d, U+9e9f, U+9ea5, U+9eb4-9eb5, U+9ebb, U+9ebe, U+9ec3, U+9ecd-9ece, U+9ed4, U+9ed8, U+9edb-9edc, U+9ede, U+9ee8, U+9ef4, U+9f07-9f08, U+9f0e, U+9f13, U+9f20, U+9f3b, U+9f4a-9f4b, U+9f4e, U+9f52, U+9f5f, U+9f61, U+9f67, U+9f6a, U+9f6c, U+9f77, U+9f8d, U+9f90, U+9f95, U+9f9c, U+ac02-ac03, U+ac05-ac06, U+ac09-ac0f, U+ac17-ac18, U+ac1b, U+ac1e-ac1f, U+ac21-ac23;
}
/* [66] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.66.woff2) format('woff2');
  unicode-range: U+96a7-96a8, U+96aa, U+96b1, U+96b7, U+96bb, U+96c0-96c1, U+96c4-96c5, U+96c7, U+96c9, U+96cb-96ce, U+96d5-96d6, U+96d9, U+96db-96dc, U+96e2-96e3, U+96e8-96ea, U+96ef-96f0, U+96f2, U+96f6-96f7, U+96f9, U+96fb, U+9700, U+9706-9707, U+9711, U+9713, U+9716, U+9719, U+971c, U+971e, U+9727, U+9730, U+9732, U+9739, U+973d, U+9742, U+9744, U+9748, U+9756, U+975c, U+9761, U+9769, U+976d, U+9774, U+9777, U+977a, U+978b, U+978d, U+978f, U+97a0, U+97a8, U+97ab, U+97ad, U+97c6, U+97cb, U+97dc, U+97f6, U+97fb, U+97ff-9803, U+9805-9806, U+9808, U+980a, U+980c, U+9810-9813, U+9817-9818, U+982d, U+9830, U+9838-9839, U+983b, U+9846, U+984c-984e, U+9854, U+9858, U+985a, U+985e, U+9865, U+9867, U+986b, U+986f, U+98af, U+98b1, U+98c4, U+98c7, U+98db-98dc, U+98e1-98e2, U+98ed-98ef, U+98f4, U+98fc-98fe, U+9903, U+9909-990a, U+990c, U+9910, U+9913, U+9918, U+991e, U+9920, U+9928, U+9945, U+9949, U+994b-994d, U+9951-9952, U+9954, U+9957, U+9996, U+999d, U+99a5, U+99a8, U+99ac-99ae, U+99b1, U+99b3-99b4, U+99b9, U+99c1, U+99d0-99d2, U+99d5, U+99d9, U+99dd;
}
/* [67] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.67.woff2) format('woff2');
  unicode-range: U+920d, U+9210-9212, U+9217, U+921e, U+9234, U+923a, U+923f-9240, U+9245, U+9249, U+9257, U+925b, U+925e, U+9262, U+9264-9266, U+9283, U+9285, U+9291, U+9293, U+9296, U+9298, U+929c, U+92b3, U+92b6-92b7, U+92b9, U+92cc, U+92cf, U+92d2, U+92e4, U+92ea, U+92f8, U+92fc, U+9304, U+9310, U+9318, U+931a, U+931e-9322, U+9324, U+9326, U+9328, U+932b, U+932e-932f, U+9348, U+934a-934b, U+934d, U+9354, U+935b, U+936e, U+9375, U+937c, U+937e, U+938c, U+9394, U+9396, U+939a, U+93a3, U+93a7, U+93ac-93ad, U+93b0, U+93c3, U+93d1, U+93de, U+93e1, U+93e4, U+93f6, U+9404, U+9418, U+9425, U+942b, U+9435, U+9438, U+9444, U+9451-9452, U+945b, U+947d, U+947f, U+9583, U+9589, U+958f, U+9591-9592, U+9594, U+9598, U+95a3-95a5, U+95a8, U+95ad, U+95b1, U+95bb-95bc, U+95c7, U+95ca, U+95d4-95d6, U+95dc, U+95e1-95e2, U+961c, U+9621, U+962a, U+962e, U+9632, U+963b, U+963f-9640, U+9642, U+9644, U+964b-964d, U+9650, U+965b-965f, U+9662-9664, U+966a, U+9670, U+9673, U+9675-9678, U+967d, U+9685-9686, U+968a-968b, U+968d-968e, U+9694-9695, U+9698-9699, U+969b-969c, U+96a3;
}
/* [68] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.68.woff2) format('woff2');
  unicode-range: U+8fa8, U+8fad, U+8faf-8fb2, U+8fc2, U+8fc5, U+8fce, U+8fd4, U+8fe6, U+8fea-8feb, U+8fed, U+8ff0, U+8ff2, U+8ff7, U+8ff9, U+8ffd, U+9000-9003, U+9005-9006, U+9008, U+900b, U+900d, U+900f-9011, U+9014-9015, U+9017, U+9019, U+901d-9023, U+902e, U+9031-9032, U+9035, U+9038, U+903c, U+903e, U+9041-9042, U+9047, U+904a-904b, U+904d-904e, U+9050-9051, U+9054-9055, U+9059, U+905c-905e, U+9060-9061, U+9063, U+9069, U+906d-906f, U+9072, U+9075, U+9077-9078, U+907a, U+907c-907d, U+907f-9084, U+9087-9088, U+908a, U+908f, U+9091, U+9095, U+9099, U+90a2-90a3, U+90a6, U+90a8, U+90aa, U+90af-90b1, U+90b5, U+90b8, U+90c1, U+90ca, U+90de, U+90e1, U+90ed, U+90f5, U+9102, U+9112, U+9115, U+9119, U+9127, U+912d, U+9132, U+9149-914e, U+9152, U+9162, U+9169-916a, U+916c, U+9175, U+9177-9178, U+9187, U+9189, U+918b, U+918d, U+9192, U+919c, U+91ab-91ac, U+91ae-91af, U+91b1, U+91b4-91b5, U+91c0, U+91c7, U+91c9, U+91cb, U+91cf-91d0, U+91d7-91d8, U+91dc-91dd, U+91e3, U+91e7, U+91ea, U+91f5;
}
/* [69] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.69.woff2) format('woff2');
  unicode-range: U+8c6a-8c6b, U+8c79-8c7a, U+8c82, U+8c8a, U+8c8c, U+8c9d-8c9e, U+8ca0-8ca2, U+8ca7-8cac, U+8caf-8cb0, U+8cb3-8cb4, U+8cb6-8cb8, U+8cbb-8cbd, U+8cbf-8cc4, U+8cc7-8cc8, U+8cca, U+8cd1, U+8cd3, U+8cda, U+8cdc, U+8cde, U+8ce0, U+8ce2-8ce4, U+8ce6, U+8cea, U+8ced, U+8cf4, U+8cfb-8cfd, U+8d04-8d05, U+8d07-8d08, U+8d0a, U+8d0d, U+8d13, U+8d16, U+8d64, U+8d66, U+8d6b, U+8d70, U+8d73-8d74, U+8d77, U+8d85, U+8d8a, U+8d99, U+8da3, U+8da8, U+8db3, U+8dba, U+8dbe, U+8dc6, U+8dcb-8dcc, U+8dcf, U+8ddb, U+8ddd, U+8de1, U+8de3, U+8de8, U+8df3, U+8e0a, U+8e0f-8e10, U+8e1e, U+8e2a, U+8e30, U+8e35, U+8e42, U+8e44, U+8e47-8e4a, U+8e59, U+8e5f-8e60, U+8e74, U+8e76, U+8e81, U+8e87, U+8e8a, U+8e8d, U+8eaa-8eac, U+8ec0, U+8ecb-8ecc, U+8ed2, U+8edf, U+8eeb, U+8ef8, U+8efb, U+8efe, U+8f03, U+8f05, U+8f09, U+8f12-8f15, U+8f1b-8f1f, U+8f26-8f27, U+8f29-8f2a, U+8f2f, U+8f33, U+8f38-8f39, U+8f3b, U+8f3e-8f3f, U+8f44-8f45, U+8f49, U+8f4d-8f4e, U+8f5d, U+8f5f, U+8f62, U+8f9b-8f9c, U+8fa3, U+8fa6;
}
/* [70] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.70.woff2) format('woff2');
  unicode-range: U+8941, U+8944, U+895f, U+8964, U+896a, U+8972, U+8981, U+8983, U+8986-8987, U+898f, U+8993, U+8996, U+89a1, U+89a9-89aa, U+89b2, U+89ba, U+89bd, U+89c0, U+89d2, U+89e3, U+89f4, U+89f8, U+8a02-8a03, U+8a08, U+8a0a, U+8a0c, U+8a0e, U+8a13, U+8a16-8a17, U+8a1b, U+8a1d, U+8a1f, U+8a23, U+8a25, U+8a2a, U+8a2d, U+8a31, U+8a34, U+8a36, U+8a3a-8a3b, U+8a50, U+8a54-8a55, U+8a5b, U+8a5e, U+8a60, U+8a62-8a63, U+8a66, U+8a6d-8a6e, U+8a70, U+8a72-8a73, U+8a75, U+8a79, U+8a85, U+8a87, U+8a8c-8a8d, U+8a93, U+8a95, U+8a98, U+8aa0-8aa1, U+8aa3-8aa6, U+8aa8, U+8aaa, U+8ab0, U+8ab2, U+8ab9, U+8abc, U+8abe-8abf, U+8ac2, U+8ac4, U+8ac7, U+8acb, U+8acd, U+8acf, U+8ad2, U+8ad6, U+8adb-8adc, U+8ae1, U+8ae6-8ae7, U+8aea-8aeb, U+8aed-8aee, U+8af1, U+8af6-8af8, U+8afa, U+8afe, U+8b00-8b02, U+8b04, U+8b0e, U+8b10, U+8b14, U+8b16-8b17, U+8b19-8b1b, U+8b1d, U+8b20, U+8b28, U+8b2b-8b2c, U+8b33, U+8b39, U+8b41, U+8b49, U+8b4e-8b4f, U+8b58, U+8b5a, U+8b5c, U+8b66, U+8b6c, U+8b6f-8b70, U+8b74, U+8b77, U+8b7d, U+8b80, U+8b8a, U+8b90, U+8b92-8b93, U+8b96, U+8b9a, U+8c37, U+8c3f, U+8c41, U+8c46, U+8c48, U+8c4a, U+8c4c, U+8c55, U+8c5a, U+8c61;
}
/* [71] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.71.woff2) format('woff2');
  unicode-range: U+858f, U+8591, U+8594, U+859b, U+85a6, U+85a8-85aa, U+85af-85b0, U+85ba, U+85c1, U+85c9, U+85cd-85cf, U+85d5, U+85dc-85dd, U+85e4-85e5, U+85e9-85ea, U+85f7, U+85fa-85fb, U+85ff, U+8602, U+8606-8607, U+860a, U+8616-8617, U+861a, U+862d, U+863f, U+864e, U+8650, U+8654-8655, U+865b-865c, U+865e-865f, U+8667, U+8679, U+868a, U+868c, U+8693, U+86a3-86a4, U+86a9, U+86c7, U+86cb, U+86d4, U+86d9, U+86db, U+86df, U+86e4, U+86ed, U+86fe, U+8700, U+8702-8703, U+8708, U+8718, U+871a, U+871c, U+874e, U+8755, U+8757, U+875f, U+8766, U+8768, U+8774, U+8776, U+8778, U+8782, U+878d, U+879f, U+87a2, U+87b3, U+87ba, U+87c4, U+87e0, U+87ec, U+87ef, U+87f2, U+87f9, U+87fb, U+87fe, U+8805, U+881f, U+8822-8823, U+8831, U+8836, U+883b, U+8840, U+8846, U+884d, U+8852-8853, U+8857, U+8859, U+885b, U+885d, U+8861-8863, U+8868, U+886b, U+8870, U+8872, U+8877, U+887e-887f, U+8881-8882, U+8888, U+888b, U+888d, U+8892, U+8896-8897, U+889e, U+88ab, U+88b4, U+88c1-88c2, U+88cf, U+88d4-88d5, U+88d9, U+88dc-88dd, U+88df, U+88e1, U+88e8, U+88f3-88f5, U+88f8, U+88fd, U+8907, U+8910, U+8912-8913, U+8918-8919, U+8925, U+892a, U+8936, U+8938, U+893b;
}
/* [72] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.72.woff2) format('woff2');
  unicode-range: U+82a6, U+82a9, U+82ac-82af, U+82b3, U+82b7-82b9, U+82bb-82bd, U+82bf, U+82d1-82d2, U+82d4-82d5, U+82d7, U+82db, U+82de-82df, U+82e1, U+82e5-82e7, U+82fd-82fe, U+8301-8305, U+8309, U+8317, U+8328, U+832b, U+832f, U+8331, U+8334-8336, U+8338-8339, U+8340, U+8347, U+8349-834a, U+834f, U+8351-8352, U+8373, U+8377, U+837b, U+8389-838a, U+838e, U+8396, U+8398, U+839e, U+83a2, U+83a9-83ab, U+83bd, U+83c1, U+83c5, U+83c9-83ca, U+83cc, U+83d3, U+83d6, U+83dc, U+83e9, U+83eb, U+83ef-83f2, U+83f4, U+83f9, U+83fd, U+8403-8404, U+840a, U+840c-840e, U+8429, U+842c, U+8431, U+8438, U+843d, U+8449, U+8457, U+845b, U+8461, U+8463, U+8466, U+846b-846c, U+846f, U+8475, U+847a, U+8490, U+8494, U+8499, U+849c, U+84a1, U+84b2, U+84b8, U+84bb-84bc, U+84bf-84c0, U+84c2, U+84c4, U+84c6, U+84c9, U+84cb, U+84cd, U+84d1, U+84da, U+84ec, U+84ee, U+84f4, U+84fc, U+8511, U+8513-8514, U+8517-8518, U+851a, U+851e, U+8521, U+8523, U+8525, U+852c-852d, U+852f, U+853d, U+853f, U+8541, U+8543, U+8549, U+854e, U+8553, U+8559, U+8563, U+8568-856a, U+856d, U+8584, U+8587;
}
/* [73] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.73.woff2) format('woff2');
  unicode-range: U+8033, U+8036, U+803d, U+803f, U+8043, U+8046, U+804a, U+8056, U+8058, U+805a, U+805e, U+806f-8070, U+8072-8073, U+8077, U+807d-807f, U+8084-8087, U+8089, U+808b-808c, U+8096, U+809b, U+809d, U+80a1-80a2, U+80a5, U+80a9-80aa, U+80af, U+80b1-80b2, U+80b4, U+80ba, U+80c3-80c4, U+80cc, U+80ce, U+80da-80db, U+80de, U+80e1, U+80e4-80e5, U+80f1, U+80f4, U+80f8, U+80fd, U+8102, U+8105-8108, U+810a, U+8118, U+811a-811b, U+8123, U+8129, U+812b, U+812f, U+8139, U+813e, U+814b, U+814e, U+8150-8151, U+8154-8155, U+8165-8166, U+816b, U+8170-8171, U+8178-817a, U+817f-8180, U+8188, U+818a, U+818f, U+819a, U+819c-819d, U+81a0, U+81a3, U+81a8, U+81b3, U+81b5, U+81ba, U+81bd-81c0, U+81c2, U+81c6, U+81cd, U+81d8, U+81df, U+81e3, U+81e5, U+81e7-81e8, U+81ed, U+81f3-81f4, U+81fa-81fc, U+81fe, U+8205, U+8208, U+820a, U+820c-820d, U+8212, U+821b-821c, U+821e-821f, U+8221, U+822a-822c, U+8235-8237, U+8239, U+8240, U+8245, U+8247, U+8259, U+8264, U+8266, U+826e-826f, U+8271, U+8276, U+8278, U+827e, U+828b, U+828d-828e, U+8292, U+8299-829a, U+829d, U+829f, U+82a5;
}
/* [74] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.74.woff2) format('woff2');
  unicode-range: U+7d2f-7d30, U+7d33, U+7d35, U+7d39-7d3a, U+7d42-7d46, U+7d50, U+7d5e, U+7d61-7d62, U+7d66, U+7d68, U+7d6a, U+7d6e, U+7d71-7d73, U+7d76, U+7d79, U+7d7f, U+7d8e-7d8f, U+7d93, U+7d9c, U+7da0, U+7da2, U+7dac-7dad, U+7db1-7db2, U+7db4-7db5, U+7db8, U+7dba-7dbb, U+7dbd-7dbf, U+7dc7, U+7dca-7dcb, U+7dd6, U+7dd8, U+7dda, U+7ddd-7dde, U+7de0-7de1, U+7de3, U+7de8-7de9, U+7dec, U+7def, U+7df4, U+7dfb, U+7e09-7e0a, U+7e15, U+7e1b, U+7e1d-7e1f, U+7e21, U+7e23, U+7e2b, U+7e2e-7e2f, U+7e31, U+7e37, U+7e3d-7e3e, U+7e43, U+7e46-7e47, U+7e52, U+7e54-7e55, U+7e5e, U+7e61, U+7e69-7e6b, U+7e6d, U+7e70, U+7e79, U+7e7c, U+7e82, U+7e8c, U+7e8f, U+7e93, U+7e96, U+7e98, U+7e9b-7e9c, U+7f36, U+7f38, U+7f3a, U+7f4c, U+7f50, U+7f54-7f55, U+7f6a-7f6b, U+7f6e, U+7f70, U+7f72, U+7f75, U+7f77, U+7f79, U+7f85, U+7f88, U+7f8a, U+7f8c, U+7f94, U+7f9a, U+7f9e, U+7fa4, U+7fa8-7fa9, U+7fb2, U+7fb8-7fb9, U+7fbd, U+7fc1, U+7fc5, U+7fca, U+7fcc, U+7fce, U+7fd2, U+7fd4-7fd5, U+7fdf-7fe1, U+7fe9, U+7feb, U+7ff0, U+7ff9, U+7ffc, U+8000-8001, U+8003, U+8006, U+8009, U+800c, U+8010, U+8015, U+8017-8018, U+802d;
}
/* [75] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.75.woff2) format('woff2');
  unicode-range: U+7a49, U+7a4d-7a4e, U+7a57, U+7a61-7a62, U+7a69, U+7a6b, U+7a70, U+7a74, U+7a76, U+7a79, U+7a7d, U+7a7f, U+7a81, U+7a84, U+7a88, U+7a92-7a93, U+7a95, U+7a98, U+7a9f, U+7aa9-7aaa, U+7aae-7aaf, U+7aba, U+7ac4-7ac5, U+7ac7, U+7aca, U+7ad7, U+7ad9, U+7add, U+7adf-7ae0, U+7ae3, U+7ae5, U+7aea, U+7aed, U+7aef, U+7af6, U+7af9-7afa, U+7aff, U+7b0f, U+7b11, U+7b19, U+7b1b, U+7b1e, U+7b20, U+7b26, U+7b2d, U+7b39, U+7b46, U+7b49, U+7b4b-7b4d, U+7b4f-7b52, U+7b54, U+7b56, U+7b60, U+7b6c, U+7b6e, U+7b75, U+7b7d, U+7b87, U+7b8b, U+7b8f, U+7b94-7b95, U+7b97, U+7b9a, U+7b9d, U+7ba1, U+7bad, U+7bb1, U+7bb4, U+7bb8, U+7bc0-7bc1, U+7bc4, U+7bc6-7bc7, U+7bc9, U+7bd2, U+7be0, U+7be4, U+7be9, U+7c07, U+7c12, U+7c1e, U+7c21, U+7c27, U+7c2a-7c2b, U+7c3d-7c3f, U+7c43, U+7c4c-7c4d, U+7c60, U+7c64, U+7c6c, U+7c73, U+7c83, U+7c89, U+7c92, U+7c95, U+7c97-7c98, U+7c9f, U+7ca5, U+7ca7, U+7cae, U+7cb1-7cb3, U+7cb9, U+7cbe, U+7cca, U+7cd6, U+7cde-7ce0, U+7ce7, U+7cfb, U+7cfe, U+7d00, U+7d02, U+7d04-7d08, U+7d0a-7d0b, U+7d0d, U+7d10, U+7d14, U+7d17-7d1b, U+7d20-7d21, U+7d2b-7d2c, U+7d2e;
}
/* [76] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.76.woff2) format('woff2');
  unicode-range: U+7704, U+7708-7709, U+770b, U+771e, U+7720, U+7729, U+7737-7738, U+773a, U+773c, U+7740, U+774d, U+775b, U+7761, U+7763, U+7766, U+776b, U+7779, U+777e-777f, U+778b, U+7791, U+779e, U+77a5, U+77ac-77ad, U+77b0, U+77b3, U+77bb-77bc, U+77bf, U+77d7, U+77db-77dc, U+77e2-77e3, U+77e9, U+77ed-77ef, U+7802, U+7812, U+7825-7827, U+782c, U+7832, U+7834, U+7845, U+784f, U+785d, U+786b-786c, U+786f, U+787c, U+7881, U+7887, U+788c-788e, U+7891, U+7897, U+78a3, U+78a7, U+78a9, U+78ba-78bc, U+78c1, U+78c5, U+78ca-78cb, U+78ce, U+78d0, U+78e8, U+78ec, U+78ef, U+78f5, U+78fb, U+7901, U+790e, U+7916, U+792a-792c, U+793a, U+7940-7941, U+7947-7949, U+7950, U+7956-7957, U+795a-795d, U+7960, U+7965, U+7968, U+796d, U+797a, U+797f, U+7981, U+798d-798e, U+7991, U+79a6-79a7, U+79aa, U+79ae, U+79b1, U+79b3, U+79b9, U+79bd-79c1, U+79c9-79cb, U+79d2, U+79d5, U+79d8, U+79df, U+79e4, U+79e6-79e7, U+79e9, U+79fb, U+7a00, U+7a05, U+7a08, U+7a0b, U+7a0d, U+7a14, U+7a17, U+7a19-7a1a, U+7a1c, U+7a1f-7a20, U+7a2e, U+7a31, U+7a36-7a37, U+7a3b-7a3d, U+7a3f-7a40, U+7a46;
}
/* [77] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.77.woff2) format('woff2');
  unicode-range: U+7482-7483, U+7487, U+7489, U+748b, U+7498, U+749c, U+749e-749f, U+74a1, U+74a3, U+74a5, U+74a7-74a8, U+74aa, U+74b0, U+74b2, U+74b5, U+74b9, U+74bd, U+74bf, U+74c6, U+74ca, U+74cf, U+74d4, U+74d8, U+74da, U+74dc, U+74e0, U+74e2-74e3, U+74e6, U+74ee, U+74f7, U+7501, U+7504, U+7511, U+7515, U+7518, U+751a-751b, U+7523, U+7525-7526, U+752b-752c, U+7531, U+7533, U+7538, U+753a, U+7547, U+754c, U+754f, U+7551, U+7553-7554, U+7559, U+755b-755d, U+7562, U+7565-7566, U+756a, U+756f-7570, U+7575-7576, U+7578, U+757a, U+757f, U+7586-7587, U+758a-758b, U+758e-758f, U+7591, U+759d, U+75a5, U+75ab, U+75b1-75b3, U+75b5, U+75b8-75b9, U+75bc-75be, U+75c2, U+75c5, U+75c7, U+75cd, U+75d2, U+75d4-75d5, U+75d8-75d9, U+75db, U+75e2, U+75f0, U+75f2, U+75f4, U+75fa, U+75fc, U+7600, U+760d, U+7619, U+761f-7622, U+7624, U+7626, U+763b, U+7642, U+764c, U+764e, U+7652, U+7656, U+7661, U+7664, U+7669, U+766c, U+7670, U+7672, U+7678, U+7686-7687, U+768e, U+7690, U+7693, U+76ae, U+76ba, U+76bf, U+76c2-76c3, U+76c6, U+76c8, U+76ca, U+76d2, U+76d6, U+76db-76dc, U+76de-76df, U+76e1, U+76e3-76e4, U+76e7, U+76f2, U+76fc, U+76fe, U+7701;
}
/* [78] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.78.woff2) format('woff2');
  unicode-range: U+7230, U+7232, U+7235, U+723a-723b, U+723d-723e, U+7240, U+7246-7248, U+724c, U+7252, U+7258-7259, U+725b, U+725d, U+725f, U+7261-7262, U+7267, U+7272, U+727d, U+7280-7281, U+72a2, U+72a7, U+72ac, U+72af, U+72c0, U+72c2, U+72c4, U+72ce, U+72d0, U+72d7, U+72d9, U+72e1, U+72e9, U+72f8-72f9, U+72fc-72fd, U+730a, U+7316, U+731b-731d, U+7325, U+7329-732b, U+7336-7337, U+733e-733f, U+7344-7345, U+7350, U+7352, U+7357, U+7368, U+736a, U+7370, U+7372, U+7375, U+7378, U+737a-737b, U+7384, U+7386-7387, U+7389, U+738e, U+7394, U+7396-7398, U+739f, U+73a7, U+73a9, U+73ad, U+73b2-73b3, U+73b9, U+73c0, U+73c2, U+73c9-73ca, U+73cc-73cd, U+73cf, U+73d6, U+73d9, U+73dd-73de, U+73e0, U+73e3-73e6, U+73e9-73ea, U+73ed, U+73f7, U+73f9, U+73fd-73fe, U+7401, U+7403, U+7405, U+7407, U+7409, U+7413, U+741b, U+7420-7422, U+7425-7426, U+7428, U+742a-742c, U+742e-7430, U+7433-7436, U+7438, U+743a, U+743f-7441, U+7443-7444, U+744b, U+7455, U+7457, U+7459-745c, U+745e-7460, U+7462, U+7464-7465, U+7468-746a, U+746f, U+747e;
}
/* [79] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.79.woff2) format('woff2');
  unicode-range: U+6f8d-6f8e, U+6f90, U+6f94, U+6f97, U+6fa3-6fa4, U+6fa7, U+6fae-6faf, U+6fb1, U+6fb3, U+6fb9, U+6fbe, U+6fc0-6fc3, U+6fca, U+6fd5, U+6fda, U+6fdf-6fe1, U+6fe4, U+6fe9, U+6feb-6fec, U+6fef, U+6ff1, U+6ffe, U+7001, U+7005-7006, U+7009, U+700b, U+700f, U+7011, U+7015, U+7018, U+701a-701f, U+7023, U+7027-7028, U+702f, U+7037, U+703e, U+704c, U+7050-7051, U+7058, U+705d, U+7070, U+7078, U+707c-707d, U+7085, U+708a, U+708e, U+7092, U+7098-709a, U+70a1, U+70a4, U+70ab-70ad, U+70af, U+70b3, U+70b7-70b9, U+70c8, U+70cb, U+70cf, U+70d8-70d9, U+70dd, U+70df, U+70f1, U+70f9, U+70fd, U+7104, U+7109, U+710c, U+7119-711a, U+711e, U+7126, U+7130, U+7136, U+7147, U+7149-714a, U+714c, U+714e, U+7150, U+7156, U+7159, U+715c, U+715e, U+7164-7167, U+7169, U+716c, U+716e, U+717d, U+7184, U+7189-718a, U+718f, U+7192, U+7194, U+7199, U+719f, U+71a2, U+71ac, U+71b1, U+71b9-71ba, U+71be, U+71c1, U+71c3, U+71c8-71c9, U+71ce, U+71d0, U+71d2, U+71d4-71d5, U+71df, U+71e5-71e7, U+71ed-71ee, U+71fb-71fc, U+71fe-7200, U+7206, U+7210, U+721b, U+722a, U+722c-722d;
}
/* [80] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.80.woff2) format('woff2');
  unicode-range: U+6d5a, U+6d5c, U+6d63, U+6d66, U+6d69-6d6a, U+6d6c, U+6d6e, U+6d74, U+6d78-6d79, U+6d7f, U+6d85, U+6d87-6d89, U+6d8c-6d8e, U+6d91, U+6d93, U+6d95, U+6daf, U+6db2, U+6db5, U+6dc0, U+6dc3-6dc7, U+6dcb, U+6dcf, U+6dd1, U+6dd8-6dda, U+6dde, U+6de1, U+6de8, U+6dea-6deb, U+6dee, U+6df1, U+6df3, U+6df5, U+6df7-6dfb, U+6e17, U+6e19-6e1b, U+6e1f-6e21, U+6e23-6e26, U+6e2b-6e2d, U+6e32, U+6e34, U+6e36, U+6e38, U+6e3a, U+6e3c-6e3e, U+6e43-6e44, U+6e4a, U+6e4d, U+6e56, U+6e58, U+6e5b-6e5c, U+6e5e-6e5f, U+6e67, U+6e6b, U+6e6e-6e6f, U+6e72-6e73, U+6e7a, U+6e90, U+6e96, U+6e9c-6e9d, U+6e9f, U+6ea2, U+6ea5, U+6eaa-6eab, U+6eaf, U+6eb1, U+6eb6, U+6eba, U+6ec2, U+6ec4-6ec5, U+6ec9, U+6ecb-6ecc, U+6ece, U+6ed1, U+6ed3-6ed4, U+6eef, U+6ef4, U+6ef8, U+6efe-6eff, U+6f01-6f02, U+6f06, U+6f0f, U+6f11, U+6f14-6f15, U+6f20, U+6f22-6f23, U+6f2b-6f2c, U+6f31-6f32, U+6f38, U+6f3f, U+6f41, U+6f51, U+6f54, U+6f57-6f58, U+6f5a-6f5b, U+6f5e-6f5f, U+6f62, U+6f64, U+6f6d-6f6e, U+6f70, U+6f7a, U+6f7c-6f7e, U+6f81, U+6f84, U+6f88;
}
/* [81] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.81.woff2) format('woff2');
  unicode-range: U+6ada-6adb, U+6af6, U+6afb, U+6b04, U+6b0a, U+6b0c, U+6b12, U+6b16, U+6b20-6b21, U+6b23, U+6b32, U+6b3a, U+6b3d-6b3e, U+6b46-6b47, U+6b4e, U+6b50, U+6b5f, U+6b61-6b62, U+6b64-6b66, U+6b6a, U+6b72, U+6b77-6b78, U+6b7b, U+6b7f, U+6b83-6b84, U+6b86, U+6b89-6b8a, U+6b96, U+6b98, U+6b9e, U+6bae-6baf, U+6bb2, U+6bb5, U+6bb7, U+6bba, U+6bbc, U+6bbf, U+6bc1, U+6bc5-6bc6, U+6bcb, U+6bcf, U+6bd2-6bd3, U+6bd6-6bd8, U+6bdb, U+6beb-6bec, U+6c08, U+6c0f, U+6c13, U+6c23, U+6c37-6c38, U+6c3e, U+6c40-6c42, U+6c4e, U+6c50, U+6c55, U+6c57, U+6c5a, U+6c5d-6c60, U+6c68, U+6c6a, U+6c6d, U+6c70, U+6c72, U+6c76, U+6c7a, U+6c7d-6c7e, U+6c81-6c83, U+6c85-6c88, U+6c8c, U+6c90, U+6c92-6c96, U+6c99-6c9b, U+6cab, U+6cae, U+6cb3, U+6cb8-6cb9, U+6cbb-6cbf, U+6cc1-6cc2, U+6cc4, U+6cc9-6cca, U+6ccc, U+6cd3, U+6cd7, U+6cdb, U+6ce1-6ce3, U+6ce5, U+6ce8, U+6ceb, U+6cee-6cf0, U+6cf3, U+6d0b-6d0c, U+6d11, U+6d17, U+6d19, U+6d1b, U+6d1e, U+6d25, U+6d27, U+6d29, U+6d32, U+6d35-6d36, U+6d38-6d39, U+6d3b, U+6d3d-6d3e, U+6d41, U+6d59;
}
/* [82] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.82.woff2) format('woff2');
  unicode-range: U+67f0-67f1, U+67f3-67f6, U+67fb, U+67fe, U+6812-6813, U+6816-6817, U+6821-6822, U+682f, U+6838-6839, U+683d, U+6840-6843, U+6848, U+684e, U+6850-6851, U+6853-6854, U+686d, U+6876, U+687f, U+6881, U+6885, U+688f, U+6893-6894, U+6897, U+689d, U+689f, U+68a1-68a2, U+68a7-68a8, U+68ad, U+68af-68b1, U+68b3, U+68b5-68b6, U+68c4-68c5, U+68c9, U+68cb, U+68cd, U+68d2, U+68d5, U+68d7-68d8, U+68da, U+68df-68e0, U+68e7-68e8, U+68ee, U+68f2, U+68f9-68fa, U+6900, U+6905, U+690d-690e, U+6912, U+6927, U+6930, U+693d, U+693f, U+694a, U+6953-6955, U+6957, U+6959-695a, U+695e, U+6960-6963, U+6968, U+696b, U+696d-696f, U+6975, U+6977-6979, U+6995, U+699b-699c, U+69a5, U+69a7, U+69ae, U+69b4, U+69bb, U+69c1, U+69c3, U+69cb-69cd, U+69d0, U+69e8, U+69ea, U+69fb, U+69fd, U+69ff, U+6a02, U+6a0a, U+6a11, U+6a13, U+6a17, U+6a19, U+6a1e-6a1f, U+6a21, U+6a23, U+6a35, U+6a38-6a3a, U+6a3d, U+6a44, U+6a48, U+6a4b, U+6a52-6a53, U+6a58-6a59, U+6a5f, U+6a61, U+6a6b, U+6a80, U+6a84, U+6a89, U+6a8d-6a8e, U+6a97, U+6a9c, U+6aa3, U+6ab3, U+6abb, U+6ac2-6ac3, U+6ad3;
}
/* [83] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.83.woff2) format('woff2');
  unicode-range: U+6607, U+6609-660a, U+660c, U+660f-6611, U+6613-6615, U+661e, U+6620, U+6627-6628, U+662d, U+6630-6631, U+6634, U+6636, U+663a-663b, U+6641, U+6643-6644, U+6649, U+664b, U+664f, U+6659, U+665b, U+665d-665f, U+6664-6669, U+666b, U+666e-666f, U+6673-6674, U+6676-6678, U+6684, U+6687-6689, U+668e, U+6690-6691, U+6696-6698, U+669d, U+66a0, U+66a2, U+66ab, U+66ae, U+66b2-66b4, U+66b9, U+66bb, U+66be, U+66c4, U+66c6-66c7, U+66c9, U+66d6, U+66d9, U+66dc-66dd, U+66e0, U+66e6, U+66f0, U+66f2-66f4, U+66f7, U+66f9-66fa, U+66fc, U+66fe-66ff, U+6703, U+670b, U+670d, U+6714-6715, U+6717, U+671b, U+671d-671f, U+6726-6727, U+672a-672b, U+672d-672e, U+6731, U+6736, U+673a, U+673d, U+6746, U+6749, U+674e-6751, U+6753, U+6756, U+675c, U+675e-675f, U+676d, U+676f-6770, U+6773, U+6775, U+6777, U+677b, U+677e-677f, U+6787, U+6789, U+678b, U+678f-6790, U+6793, U+6795, U+679a, U+679d, U+67af-67b0, U+67b3, U+67b6-67b8, U+67be, U+67c4, U+67cf-67d4, U+67da, U+67dd, U+67e9, U+67ec, U+67ef;
}
/* [84] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.84.woff2) format('woff2');
  unicode-range: U+6392, U+6396, U+6398, U+639b, U+63a0-63a2, U+63a5, U+63a7-63aa, U+63c0, U+63c4, U+63c6, U+63cf, U+63d6, U+63da-63db, U+63e1, U+63ed-63ee, U+63f4, U+63f6-63f7, U+640d, U+640f, U+6414, U+6416-6417, U+641c, U+6422, U+642c-642d, U+643a, U+643e, U+6458, U+6460, U+6469, U+646f, U+6478-647a, U+6488, U+6491-6493, U+649a, U+649e, U+64a4-64a5, U+64ab, U+64ad-64ae, U+64b0, U+64b2, U+64bb, U+64c1, U+64c4-64c5, U+64c7, U+64ca, U+64cd-64ce, U+64d2, U+64d4, U+64d8, U+64da, U+64e1-64e2, U+64e5-64e7, U+64ec, U+64f2, U+64f4, U+64fa, U+64fe, U+6500, U+6504, U+6518, U+651d, U+6523, U+652a-652c, U+652f, U+6536-6539, U+653b, U+653e, U+6548, U+654d-654f, U+6551, U+6556-6557, U+655e, U+6562-6563, U+6566, U+656c-656d, U+6572, U+6574-6575, U+6577-6578, U+657e, U+6582-6583, U+6585, U+658c, U+6590-6591, U+6597, U+6599, U+659b-659c, U+659f, U+65a1, U+65a4-65a5, U+65a7, U+65ab-65ac, U+65af, U+65b7, U+65bc-65bd, U+65c1, U+65c5, U+65cb-65cc, U+65cf, U+65d2, U+65d7, U+65e0, U+65e3, U+65e6, U+65e8-65e9, U+65ec-65ed, U+65f1, U+65f4, U+65fa-65fd, U+65ff, U+6606;
}
/* [85] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.85.woff2) format('woff2');
  unicode-range: U+614c, U+6153, U+6155, U+6158-6159, U+615d, U+615f, U+6162-6164, U+6167-6168, U+616b, U+616e, U+6170, U+6176-6177, U+617d-617e, U+6181-6182, U+618a, U+618e, U+6190-6191, U+6194, U+6198-619a, U+61a4, U+61a7, U+61a9, U+61ab-61ac, U+61ae, U+61b2, U+61b6, U+61ba, U+61be, U+61c3, U+61c7-61cb, U+61e6, U+61f2, U+61f6-61f8, U+61fa, U+61fc, U+61ff-6200, U+6207-6208, U+620a, U+620c-620e, U+6212, U+6216, U+621a, U+621f, U+6221, U+622a, U+622e, U+6230-6231, U+6234, U+6236, U+623e-623f, U+6241, U+6247-6249, U+624d, U+6253, U+6258, U+626e, U+6271, U+6276, U+6279, U+627c, U+627f-6280, U+6284, U+6289-628a, U+6291-6292, U+6295, U+6297-6298, U+629b, U+62ab, U+62b1, U+62b5, U+62b9, U+62bc-62bd, U+62c2, U+62c7-62c9, U+62cc-62cd, U+62cf-62d0, U+62d2-62d4, U+62d6-62d9, U+62db-62dc, U+62ec-62ef, U+62f1, U+62f3, U+62f7, U+62fe-62ff, U+6301, U+6307, U+6309, U+6311, U+632b, U+632f, U+633a-633b, U+633d-633e, U+6349, U+634c, U+634f-6350, U+6355, U+6367-6368, U+636e, U+6372, U+6377, U+637a-637b, U+637f, U+6383, U+6388-6389, U+638c;
}
/* [86] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.86.woff2) format('woff2');
  unicode-range: U+5f11, U+5f13-5f15, U+5f17-5f18, U+5f1b, U+5f1f, U+5f26-5f27, U+5f29, U+5f31, U+5f35, U+5f3a, U+5f3c, U+5f48, U+5f4a, U+5f4c, U+5f4e, U+5f56-5f57, U+5f59, U+5f5b, U+5f62, U+5f66-5f67, U+5f69-5f6d, U+5f70-5f71, U+5f77, U+5f79, U+5f7c, U+5f7f-5f81, U+5f85, U+5f87, U+5f8a-5f8b, U+5f90-5f92, U+5f98-5f99, U+5f9e, U+5fa0-5fa1, U+5fa8-5faa, U+5fae, U+5fb5, U+5fb9, U+5fbd, U+5fc5, U+5fcc-5fcd, U+5fd6-5fd9, U+5fe0, U+5feb, U+5ff5, U+5ffd, U+5fff, U+600f, U+6012, U+6016, U+601c, U+6020-6021, U+6025, U+6028, U+602a, U+602f, U+6041-6043, U+604d, U+6050, U+6052, U+6055, U+6059, U+605d, U+6062-6065, U+6068-606a, U+606c-606d, U+606f-6070, U+6085, U+6089, U+608c-608d, U+6094, U+6096, U+609a-609b, U+609f-60a0, U+60a3-60a4, U+60a7, U+60b0, U+60b2-60b4, U+60b6, U+60b8, U+60bc-60bd, U+60c7, U+60d1, U+60da, U+60dc, U+60df-60e1, U+60f0-60f1, U+60f6, U+60f9-60fb, U+6101, U+6106, U+6108-6109, U+610d-610e, U+6115, U+611a, U+6127, U+6130, U+6134, U+6137, U+613c, U+613e-613f, U+6142, U+6144, U+6147-6148, U+614a-614b;
}
/* [87] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.87.woff2) format('woff2');
  unicode-range: U+5c40, U+5c45-5c46, U+5c48, U+5c4b, U+5c4d-5c4e, U+5c51, U+5c5b, U+5c60, U+5c62, U+5c64-5c65, U+5c6c, U+5c6f, U+5c79, U+5c90-5c91, U+5ca1, U+5ca9, U+5cab-5cac, U+5cb1, U+5cb3, U+5cb5, U+5cb7-5cb8, U+5cba, U+5cbe, U+5cc0, U+5cd9, U+5ce0, U+5ce8, U+5cef-5cf0, U+5cf4, U+5cf6, U+5cfb, U+5cfd, U+5d07, U+5d0d-5d0e, U+5d11, U+5d14, U+5d16-5d17, U+5d19, U+5d27, U+5d29, U+5d4b-5d4c, U+5d50, U+5d69, U+5d6c, U+5d6f, U+5d87, U+5d8b, U+5d9d, U+5da0, U+5da2, U+5daa, U+5db8, U+5dba, U+5dbc-5dbd, U+5dcd, U+5dd2, U+5dd6, U+5de1-5de2, U+5de5-5de8, U+5deb, U+5dee, U+5df1-5df4, U+5df7, U+5dfd-5dfe, U+5e03, U+5e06, U+5e11, U+5e16, U+5e19, U+5e1b, U+5e1d, U+5e25, U+5e2b, U+5e2d, U+5e33, U+5e36, U+5e38, U+5e3d, U+5e3f-5e40, U+5e44-5e45, U+5e47, U+5e4c, U+5e55, U+5e5f, U+5e61-5e63, U+5e72, U+5e77-5e79, U+5e7b-5e7e, U+5e84, U+5e87, U+5e8a, U+5e8f, U+5e95, U+5e97, U+5e9a, U+5e9c, U+5ea0, U+5ea7, U+5eab, U+5ead, U+5eb5-5eb8, U+5ebe, U+5ec2, U+5ec8-5eca, U+5ed0, U+5ed3, U+5ed6, U+5eda-5edb, U+5edf-5ee0, U+5ee2-5ee3, U+5eec, U+5ef3, U+5ef6-5ef7, U+5efa-5efb, U+5f01, U+5f04, U+5f0a;
}
/* [88] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.88.woff2) format('woff2');
  unicode-range: U+59be, U+59c3, U+59c6, U+59c9, U+59cb, U+59d0-59d1, U+59d3-59d4, U+59d9-59da, U+59dc-59dd, U+59e6, U+59e8, U+59ea, U+59ec, U+59ee, U+59f8, U+59fb, U+59ff, U+5a01, U+5a03, U+5a11, U+5a18, U+5a1b-5a1c, U+5a1f-5a20, U+5a25, U+5a29, U+5a36, U+5a3c, U+5a41, U+5a46, U+5a49, U+5a5a, U+5a62, U+5a66, U+5a92, U+5a9a-5a9b, U+5aa4, U+5ac1-5ac2, U+5ac4, U+5ac9, U+5acc, U+5ae1, U+5ae6, U+5ae9, U+5b05, U+5b09, U+5b0b-5b0c, U+5b16, U+5b2a, U+5b40, U+5b43, U+5b51, U+5b54-5b55, U+5b58, U+5b5a, U+5b5c-5b5d, U+5b5f, U+5b63-5b64, U+5b69, U+5b6b, U+5b70-5b71, U+5b75, U+5b7a, U+5b7c, U+5b85, U+5b87-5b88, U+5b8b, U+5b8f, U+5b93, U+5b95-5b99, U+5b9b-5b9c, U+5ba2-5ba6, U+5bac, U+5bae, U+5bb0, U+5bb3-5bb5, U+5bb8-5bb9, U+5bbf-5bc0, U+5bc2-5bc7, U+5bcc, U+5bd0, U+5bd2-5bd4, U+5bd7, U+5bde-5bdf, U+5be1-5be2, U+5be4-5be9, U+5beb-5bec, U+5bee-5bef, U+5bf5-5bf6, U+5bf8, U+5bfa, U+5c01, U+5c04, U+5c07-5c0b, U+5c0d-5c0e, U+5c16, U+5c19, U+5c24, U+5c28, U+5c31, U+5c38-5c3c, U+5c3e-5c3f;
}
/* [89] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.89.woff2) format('woff2');
  unicode-range: U+5703-5704, U+5708, U+570d, U+5712-5713, U+5716, U+5718, U+572d, U+573b, U+5740, U+5742, U+5747, U+574a, U+574d-574e, U+5750-5751, U+5761, U+5764, U+5766, U+576a, U+576e, U+5770, U+5775, U+577c, U+5782, U+5788, U+578b, U+5793, U+57a0, U+57a2-57a3, U+57c3, U+57c7-57c8, U+57cb, U+57df-57e0, U+57f0, U+57f4, U+57f7, U+57f9-57fa, U+57fc, U+5800, U+5802, U+5805-5806, U+5808-580a, U+581e, U+5821, U+5824, U+5827, U+582a, U+582f-5831, U+5835, U+583a, U+584a-584b, U+584f, U+5851, U+5854, U+5857-5858, U+585a, U+585e, U+5861-5862, U+5864, U+5875, U+5879, U+587c, U+587e, U+5883, U+5885, U+5889, U+5893, U+589c, U+589e-589f, U+58a8-58a9, U+58ae, U+58b3, U+58ba-58bb, U+58be, U+58c1, U+58c5, U+58c7, U+58ce, U+58d1, U+58d3, U+58d5, U+58d8-58d9, U+58de-58df, U+58e4, U+58ec, U+58ef, U+58f9-58fb, U+58fd, U+590f, U+5914-5915, U+5919, U+5922, U+592d-592e, U+5931, U+5937, U+593e, U+5944, U+5947-5949, U+594e-5951, U+5954-5955, U+5957, U+595a, U+5960, U+5962, U+5967, U+596a-596e, U+5974, U+5978, U+5982-5984, U+598a, U+5993, U+5996-5997, U+5999, U+59a5, U+59a8, U+59ac, U+59b9, U+59bb;
}
/* [90] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.90.woff2) format('woff2');
  unicode-range: U+539a, U+53a0, U+53a5-53a6, U+53ad, U+53bb, U+53c3, U+53c8-53cb, U+53cd, U+53d4, U+53d6-53d7, U+53db, U+53e1-53e3, U+53e5, U+53e9-53ed, U+53f1, U+53f3, U+53f8, U+5403-5404, U+540a, U+540e-5411, U+541b, U+541d, U+541f-5420, U+5426, U+5429, U+542b, U+5433, U+5438-5439, U+543b-543c, U+543e, U+5442, U+5448, U+544a, U+5451, U+5468, U+546a, U+5471, U+5473, U+5475, U+547b-547d, U+5480, U+5486, U+548e, U+5490, U+54a4, U+54a8, U+54ab-54ac, U+54b3, U+54b8, U+54bd, U+54c0, U+54c4, U+54c8-54c9, U+54e1, U+54e5, U+54e8, U+54ed-54ee, U+54f2, U+54fa, U+5504, U+5506-5507, U+550e, U+5510, U+551c, U+552f, U+5531, U+5535, U+553e, U+5544, U+5546, U+554f, U+5553, U+5556, U+555e, U+5563, U+557c, U+5580, U+5584, U+5586-5587, U+5589-558a, U+5598-559a, U+559c-559d, U+55a7, U+55a9-55ac, U+55ae, U+55c5, U+55c7, U+55d4, U+55da, U+55dc, U+55df, U+55e3-55e4, U+55fd-55fe, U+5606, U+5609, U+5614, U+5617, U+562f, U+5632, U+5634, U+5636, U+5653, U+5668, U+566b, U+5674, U+5686, U+56a5, U+56ac, U+56ae, U+56b4, U+56bc, U+56ca, U+56cd, U+56d1, U+56da-56db, U+56de, U+56e0, U+56f0, U+56f9-56fa;
}
/* [91] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.91.woff2) format('woff2');
  unicode-range: U+516e, U+5175-5178, U+517c, U+5180, U+5186, U+518a, U+518d, U+5192, U+5195, U+5197, U+51a0, U+51a5, U+51aa, U+51ac, U+51b6-51b7, U+51bd, U+51c4, U+51c6, U+51c9, U+51cb-51cd, U+51dc-51de, U+51e1, U+51f0-51f1, U+51f6, U+51f8-51f9, U+51fd, U+5200, U+5203, U+5207-5208, U+520a, U+520e, U+5211, U+5217, U+521d, U+5224-5225, U+522a, U+522e, U+5230, U+5236-523b, U+5243, U+5247, U+524a-524c, U+5254, U+5256, U+525b, U+525d, U+5261, U+5269-526a, U+526f, U+5272, U+5275, U+527d, U+527f, U+5283, U+5287-5289, U+528d, U+5291-5292, U+529f, U+52a3-52a4, U+52a9-52ab, U+52be, U+52c1, U+52c3, U+52c5, U+52c7, U+52c9, U+52cd, U+52d2, U+52d6, U+52d8-52d9, U+52db, U+52dd-52df, U+52e2-52e4, U+52f3, U+52f5, U+52f8, U+52fa-52fb, U+52fe-52ff, U+5305, U+5308, U+530d, U+530f-5310, U+5315, U+5319, U+5320-5321, U+5323, U+532a, U+532f, U+5339, U+533f-5341, U+5343-5344, U+5347-534a, U+534d, U+5351-5354, U+535a, U+535c, U+535e, U+5360, U+5366, U+5368, U+536f-5371, U+5374-5375, U+5377, U+537d, U+537f, U+5384, U+5393, U+5398;
}
/* [92] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.92.woff2) format('woff2');
  unicode-range: U+4f43, U+4f46-4f48, U+4f4d-4f51, U+4f55, U+4f59-4f5a, U+4f69, U+4f6f-4f70, U+4f73, U+4f76, U+4f7a, U+4f7e-4f7f, U+4f81, U+4f83-4f84, U+4f86, U+4f88, U+4f8a-4f8b, U+4f8d, U+4f8f, U+4f91, U+4f96, U+4f98, U+4f9b, U+4f9d, U+4fae-4faf, U+4fb5-4fb6, U+4fbf, U+4fc2-4fc4, U+4fc9-4fca, U+4fce, U+4fd1, U+4fd3-4fd4, U+4fd7, U+4fda, U+4fdf-4fe0, U+4fee-4fef, U+4ff1, U+4ff3, U+4ff5, U+4ff8, U+4ffa, U+5002, U+5006, U+5009, U+500b, U+500d, U+5011-5012, U+5016, U+5019-501a, U+501c, U+501e-501f, U+5021, U+5023-5024, U+5026-5028, U+502a-502d, U+503b, U+5043, U+5047-5049, U+504f, U+5055, U+505a, U+505c, U+5065, U+5074-5076, U+5078, U+5080, U+5085, U+508d, U+5091, U+5098-5099, U+50ac-50ad, U+50b2-50b3, U+50b5, U+50b7, U+50be, U+50c5, U+50c9-50ca, U+50d1, U+50d5-50d6, U+50da, U+50de, U+50e5, U+50e7, U+50ed, U+50f9, U+50fb, U+50ff-5101, U+5104, U+5106, U+5109, U+5112, U+511f, U+5121, U+512a, U+5132, U+5137, U+513a, U+513c, U+5140-5141, U+5143-5148, U+514b-514e, U+5152, U+515c, U+5162, U+5169-516b, U+516d;
}
/* [93] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.93.woff2) format('woff2');
  unicode-range: U+338c-339c, U+339f-33a0, U+33a2-33cb, U+33cf-33d0, U+33d3, U+33d6, U+33d8, U+33db-33dd, U+4e01, U+4e03, U+4e07-4e08, U+4e11, U+4e14-4e15, U+4e18-4e19, U+4e1e, U+4e32, U+4e38-4e39, U+4e42-4e43, U+4e45, U+4e4d-4e4f, U+4e56, U+4e58-4e59, U+4e5d-4e5e, U+4e6b, U+4e6d, U+4e73, U+4e76-4e77, U+4e7e, U+4e82, U+4e86, U+4e88, U+4e8e, U+4e90-4e92, U+4e94-4e95, U+4e98, U+4e9b, U+4e9e, U+4ea1-4ea2, U+4ea4-4ea6, U+4ea8, U+4eab, U+4ead-4eae, U+4eb6, U+4ec0-4ec1, U+4ec4, U+4ec7, U+4ecb, U+4ecd, U+4ed4-4ed5, U+4ed7-4ed9, U+4edd, U+4edf, U+4ee4, U+4ef0, U+4ef2, U+4ef6-4ef7, U+4efb, U+4f01, U+4f09, U+4f0b, U+4f0d-4f11, U+4f2f, U+4f34, U+4f36, U+4f38, U+4f3a, U+4f3c-4f3d;
}
/* [94] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.94.woff2) format('woff2');
  unicode-range: U+3136, U+3138, U+313a-3140, U+3143-3144, U+3150, U+3152, U+3154-3156, U+3158-315b, U+315d-315f, U+3162, U+3164-318c, U+318e, U+3200-321b, U+3231, U+3239, U+3251-325a, U+3260-327b, U+327e-327f, U+328a-3290, U+3294, U+329e, U+32a5, U+3380-3384, U+3388-338b;
}
/* [95] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.95.woff2) format('woff2');
  unicode-range: U+2f7d, U+2f7f-2f8b, U+2f8e-2f90, U+2f92-2f97, U+2f99-2fa0, U+2fa2-2fa3, U+2fa5-2fa9, U+2fac-2fb1, U+2fb3-2fbc, U+2fc1-2fca, U+2fcd-2fd4, U+3003, U+3012-3019, U+301c, U+301e-3020, U+3036, U+3041, U+3043, U+3045, U+3047, U+3049, U+304e, U+3050, U+3052, U+3056, U+305a, U+305c, U+305e, U+3062, U+3065, U+306c, U+3070-307d, U+3080, U+3085, U+3087, U+308e, U+3090-3091, U+30a1, U+30a5, U+30a9, U+30ae, U+30b1-30b2, U+30b4, U+30b6, U+30bc-30be, U+30c2, U+30c5, U+30cc, U+30d2, U+30d4, U+30d8-30dd, U+30e4, U+30e6, U+30e8, U+30ee, U+30f0-30f2, U+30f4-30f6, U+3133, U+3135;
}
/* [96] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.96.woff2) format('woff2');
  unicode-range: U+2541-254b, U+25a4-25a9, U+25b1, U+25b5, U+25b9, U+25bf, U+25c1, U+25c3, U+25c9-25ca, U+25cc, U+25ce, U+25d0-25d1, U+25e6, U+25ef, U+260f, U+261d, U+261f, U+262f, U+2660, U+2664, U+2667-2669, U+266d, U+266f, U+2716, U+271a, U+273d, U+2756, U+2776-277f, U+278a-2793, U+2963, U+2965, U+2ac5-2ac6, U+2acb-2acc, U+2f00, U+2f04, U+2f06, U+2f08, U+2f0a-2f0b, U+2f11-2f12, U+2f14, U+2f17-2f18, U+2f1c-2f1d, U+2f1f-2f20, U+2f23-2f26, U+2f28-2f29, U+2f2b, U+2f2d, U+2f2f-2f32, U+2f38, U+2f3c-2f40, U+2f42-2f4c, U+2f4f-2f52, U+2f54-2f58, U+2f5a-2f66, U+2f69-2f70, U+2f72-2f76, U+2f78, U+2f7a-2f7c;
}
/* [97] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.97.woff2) format('woff2');
  unicode-range: U+2479-2487, U+249c-24d1, U+24d3-24d7, U+24d9-24e9, U+24eb-24f4, U+2500-2501, U+2503, U+250c-2513, U+2515-2516, U+2518-2540;
}
/* [98] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.98.woff2) format('woff2');
  unicode-range: U+215b-215e, U+2162-2169, U+2170-2179, U+2195-2199, U+21b0-21b4, U+21bc, U+21c0, U+21c4-21c5, U+21cd, U+21cf-21d4, U+21e0-21e3, U+21e6-21e9, U+2200, U+2202-2203, U+2206-2209, U+220b-220c, U+220f, U+2211, U+2213, U+221a, U+221d-2220, U+2222, U+2225-2227, U+2229-222c, U+222e, U+2234-2237, U+223d, U+2243, U+2245, U+2248, U+2250-2253, U+225a, U+2260-2262, U+2264-2267, U+226a-226b, U+226e-2273, U+2276-2277, U+2279-227b, U+2280-2287, U+228a-228b, U+2295-2297, U+22a3-22a5, U+22bb-22bc, U+22ce-22cf, U+22da-22db, U+22ee-22ef, U+2306, U+2312, U+2314, U+2467-2478;
}
/* [99] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.99.woff2) format('woff2');
  unicode-range: U+81-82, U+84, U+a2-a5, U+a7-a8, U+aa, U+ac-ad, U+b1-b3, U+b6, U+b8-ba, U+bc-be, U+c0, U+c2, U+c6-cb, U+ce-d0, U+d4, U+d8-d9, U+db-dc, U+de-df, U+e6, U+eb, U+ee-f0, U+f4, U+f7-f9, U+fb, U+fe-ff, U+111, U+126-127, U+132-133, U+138, U+13f-142, U+149-14b, U+152-153, U+166-167, U+2bc, U+2c7, U+2d0, U+2d8-2d9, U+2db-2dd, U+391-394, U+396-3a1, U+3a3-3a9, U+3b2-3b6, U+3b8, U+3bc, U+3be-3c1, U+3c3-3c9, U+2010, U+2015-2016, U+2018-2019, U+201b, U+201f-2021, U+2025, U+2030, U+2033-2036, U+203c, U+203e, U+2042, U+2074, U+207a-207f, U+2081-2084, U+2109, U+2113, U+2116, U+2121, U+2126, U+212b, U+2153-2154;
}
/* [100] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.100.woff2) format('woff2');
  unicode-range: U+e8, U+2da, U+2160, U+2194, U+3054, U+3058, U+306d, U+3086, U+308d, U+30ac, U+30bb, U+30c4, U+30cd-30ce, U+30e2, U+3132, U+3146, U+3149, U+339d, U+4e3b, U+4f0a, U+4fdd, U+4fe1, U+5409, U+540c, U+5834, U+592a-592b, U+5b9a, U+5dde, U+5e0c, U+5e73, U+5f0f, U+60f3, U+653f, U+661f, U+662f, U+667a, U+683c, U+6b4c, U+6c11, U+767c, U+76ee, U+76f4, U+77f3, U+79d1, U+7a7a, U+7b2c, U+7d22, U+8207, U+8a00, U+8a71, U+9280, U+9580, U+958b, U+96c6, U+9762, U+98df, U+9ed1, U+ac2d, U+adc8, U+add3, U+af48, U+b014, U+b134-b135, U+b158, U+b2aa, U+b35f, U+b6a4, U+b9cf, U+bb63, U+bd23, U+be91, U+c29b, U+c3f4, U+c42c, U+c55c, U+c573, U+c58f, U+c78c, U+c7dd, U+c8f5, U+cad1, U+cc48, U+cf10, U+cf20, U+d03c, U+d07d, U+d2a0, U+d30e, U+d38d, U+d3a8, U+d3c8, U+d5e5, U+d5f9, U+d6e4, U+f90a, U+ff02, U+ff1c;
}
/* [101] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.101.woff2) format('woff2');
  unicode-range: U+3b1, U+2466, U+25a1, U+25a3, U+261c, U+3008-3009, U+305b, U+305d, U+3069, U+30a7, U+30ba, U+30cf, U+30ef, U+3151, U+3157, U+4e4b, U+4e5f, U+4e8c, U+4eca, U+4ed6, U+4f5b, U+50cf, U+5149, U+5165, U+5171, U+5229, U+529b, U+5316, U+539f, U+53f2, U+571f, U+5728, U+58eb, U+591c, U+5b78, U+5c11, U+5c55, U+5ddd, U+5e02, U+5fb7, U+60c5, U+610f, U+611f, U+6625, U+66f8, U+6797, U+679c, U+682a, U+6d2a, U+706b, U+7406, U+767b, U+76f8, U+77e5, U+7acb, U+898b, U+8a69, U+8def, U+8fd1, U+901a, U+90e8, U+91cd, U+975e, U+ae14, U+ae6c, U+aec0, U+afc7, U+afc9, U+b01c, U+b028, U+b308, U+b311, U+b314, U+b31c, U+b524, U+b560, U+b764, U+b920, U+b9e3, U+bd48, U+be7d, U+c0db, U+c231, U+c270, U+c2e3, U+c37d, U+c3ed, U+c530, U+c6a5, U+c6dc, U+c7a4, U+c954, U+c974, U+d000, U+d565, U+d667, U+d6c5, U+d79d, U+ff1e;
}
/* [102] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.102.woff2) format('woff2');
  unicode-range: U+131, U+2032, U+2465, U+2642, U+3048, U+3051, U+3083-3084, U+308f, U+30c0, U+30d1, U+30d3, U+30d6, U+30df, U+30e7, U+3153, U+4e16, U+4e8b, U+4ee5, U+5206, U+52a0, U+52d5, U+53e4, U+53ef, U+54c1, U+57ce, U+597d, U+5b8c, U+5ea6, U+5f8c, U+5f97, U+6210, U+6240, U+624b, U+6728, U+6bd4, U+7236, U+7269, U+7279, U+738b, U+7528, U+7530, U+767e, U+798f, U+8005, U+8a18, U+90fd, U+91cc, U+9577, U+9593, U+98a8, U+ac20, U+acf6, U+ad90, U+af5d, U+af80, U+afcd, U+aff0, U+b0a1, U+b0b5, U+b1fd, U+b2fc, U+b380, U+b51b, U+b584, U+b5b3, U+b8fd, U+b93c, U+b9f4, U+bb44, U+bc08, U+bc27, U+bc49, U+be55, U+be64, U+bfb0, U+bfc5, U+c178, U+c21f, U+c314, U+c4f1, U+c58d, U+c664, U+c698, U+c6a7, U+c6c1, U+c9ed, U+cac0, U+cacc, U+cad9, U+ccb5, U+cdcc, U+d0e4, U+d143, U+d320, U+d330, U+d54d, U+ff06, U+ff1f, U+ff5e;
}
/* [103] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.103.woff2) format('woff2');
  unicode-range: U+b4, U+20a9, U+20ac, U+2190, U+24d8, U+2502, U+2514, U+2592, U+25c7-25c8, U+2663, U+3060, U+3064, U+3081, U+3088, U+30a3, U+30a6, U+30aa, U+30b5, U+30c7, U+30ca-30cb, U+30d0, U+30e3, U+30e5, U+339e, U+4e09, U+4eac, U+4f5c, U+5167-5168, U+516c, U+51fa, U+5408, U+540d, U+591a, U+5b57, U+6211, U+65b9, U+660e, U+6642, U+6700, U+6b63, U+6e2f, U+7063, U+7532, U+793e, U+81ea, U+8272, U+82b1, U+897f, U+8eca, U+91ce, U+ac38, U+ad76, U+ae84, U+aecc, U+b07d, U+b0b1, U+b215, U+b2a0, U+b310, U+b3d7, U+b52a, U+b618, U+b775, U+b797, U+bcd5, U+bd59, U+be80, U+bea8, U+bed1, U+bee4-bee5, U+c060, U+c2ef, U+c329, U+c3dc, U+c597, U+c5bd, U+c5e5, U+c69c, U+c9d6, U+ca29, U+ca5c, U+ca84, U+cc39, U+cc3b, U+ce89, U+cee5, U+cf65, U+cf85, U+d058, U+d145, U+d22d, U+d325, U+d37d, U+d3ad, U+d769, U+ff0c;
}
/* [104] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.104.woff2) format('woff2');
  unicode-range: U+2161, U+2228, U+2299, U+2464, U+2517, U+2640, U+3042, U+304a, U+3053, U+3061, U+307f, U+3082, U+308c, U+3092, U+30a8, U+30ab, U+30ad, U+30b0, U+30b3, U+30b7, U+30c1, U+30c6, U+30c9, U+30d5, U+30d7, U+30de, U+30e0-30e1, U+30ec-30ed, U+4e0b, U+4e0d, U+4ee3, U+53f0, U+548c, U+5b89, U+5bb6, U+5c0f, U+611b, U+6771, U+6aa2, U+6bcd, U+6c34, U+6cd5, U+6d77, U+767d, U+795e, U+8ecd, U+9999, U+9ad8, U+ac07, U+ac1a, U+ac40, U+ad0c, U+ad88, U+ada4, U+ae01, U+ae65, U+aebd, U+aec4, U+afe8, U+b139, U+b205, U+b383, U+b38c, U+b42c, U+b461, U+b55c, U+b78f, U+b8fb, U+b9f7, U+bafc, U+bc99, U+bed8, U+bfcd, U+c0bf, U+c0f9, U+c167, U+c204, U+c20f, U+c22f, U+c258, U+c298, U+c2bc, U+c388, U+c501, U+c50c, U+c5b9, U+c5ce, U+c641, U+c648, U+c73d, U+ca50, U+ca61, U+cc4c, U+ceac, U+d0d4, U+d5f7, U+d6d7, U+ff1a;
}
/* [105] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.105.woff2) format('woff2');
  unicode-range: U+2103, U+2463, U+25c6, U+25cb, U+266c, U+3001, U+300a, U+3046, U+304c-304d, U+304f, U+3055, U+3059, U+3063, U+3066-3068, U+306f, U+3089, U+30b8, U+30bf, U+314f, U+4e0a, U+570b, U+5730, U+5916, U+5929, U+5c71, U+5e74, U+5fc3, U+601d, U+6027, U+63d0, U+6709, U+6734, U+751f, U+7684, U+82f1, U+9053, U+91d1, U+97f3, U+ac2f, U+ac4d, U+adc4, U+ade4, U+ae41, U+ae4d-ae4e, U+aed1, U+afb9, U+b0e0, U+b299, U+b365, U+b46c, U+b480, U+b4c8, U+b7b4, U+b819, U+b918, U+baab, U+bab9, U+be8f, U+bed7, U+c0ec, U+c19f, U+c1a5, U+c3d9, U+c464, U+c53d, U+c553, U+c570, U+c5cc, U+c633, U+c6a4, U+c7a3, U+c7a6, U+c886, U+c9d9-c9da, U+c9ec, U+ca0c, U+cc21, U+cd1b, U+cd78, U+cdc4, U+cef8, U+cfe4, U+d0a5, U+d0b5, U+d0ec, U+d15d, U+d188, U+d23c, U+d2ac, U+d729, U+d79b, U+ff01, U+ff08-ff09, U+ff5c;
}
/* [106] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.106.woff2) format('woff2');
  unicode-range: U+2039-203a, U+223c, U+25b3, U+25b7, U+25bd, U+25cf, U+266a, U+3002, U+300b, U+304b, U+3057, U+305f, U+306a-306b, U+307e, U+308a-308b, U+3093, U+30a2, U+30af, U+30b9, U+30c3, U+30c8, U+30e9-30eb, U+33a1, U+4e00, U+524d, U+5357, U+5b50, U+7121, U+884c, U+9751, U+ac94, U+aebe, U+aecd, U+af08, U+af41, U+af49, U+b010, U+b053, U+b109, U+b11b, U+b128, U+b154, U+b291, U+b2e6, U+b301, U+b385, U+b525, U+b5b4, U+b729, U+b72f, U+b738, U+b7ff, U+b837, U+b975, U+ba67, U+bb47, U+bc1f, U+bd90, U+bfd4, U+c27c, U+c324, U+c379, U+c3e0, U+c465, U+c53b, U+c58c, U+c610, U+c653, U+c6cd, U+c813, U+c82f, U+c999, U+c9e0, U+cac4, U+cad3, U+cbd4, U+cc10, U+cc22, U+ccb8, U+ccbc, U+cda5, U+ce84, U+cea3, U+cf67, U+cfe1, U+d241, U+d30d, U+d31c, U+d391, U+d401, U+d479, U+d5c9, U+d5db, U+d649, U+d6d4;
}
/* [107] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.107.woff2) format('woff2');
  unicode-range: U+b0, U+e9, U+2193, U+2462, U+260e, U+261e, U+300e-300f, U+3044, U+30a4, U+30fb-30fc, U+314d, U+5973, U+6545, U+6708, U+7537, U+ac89, U+ac9c, U+acc1, U+ad04, U+ad75, U+ad7d, U+ae45, U+ae61, U+af42, U+b0ab, U+b0af, U+b0b3, U+b12c, U+b194, U+b1a8, U+b220, U+b258, U+b284, U+b2ff, U+b315, U+b371, U+b3d4-b3d5, U+b460, U+b527, U+b534, U+b810, U+b818, U+b98e, U+ba55, U+bbac, U+bc0b, U+bc40, U+bca1, U+bccd, U+bd93, U+be54, U+be5a, U+bf08, U+bf50, U+bf55, U+bfdc, U+c0c0, U+c0d0, U+c0f4, U+c100, U+c11e, U+c170, U+c20d, U+c274, U+c290, U+c308, U+c369, U+c539, U+c587, U+c5ff, U+c6ec, U+c70c, U+c7ad, U+c7c8, U+c83c, U+c881, U+cb48, U+cc60, U+ce69, U+ce6b, U+ce75, U+cf04, U+cf08, U+cf55, U+cf70, U+cffc, U+d0b7, U+d1a8, U+d2c8, U+d384, U+d47c, U+d48b, U+d5dd, U+d5e8, U+d720, U+d759, U+f981;
}
/* [108] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.108.woff2) format('woff2');
  unicode-range: U+e0, U+e2, U+395, U+3b7, U+3ba, U+2460-2461, U+25a0, U+3010-3011, U+306e, U+30f3, U+314a, U+314c, U+5927, U+65b0, U+7e41, U+97d3, U+9ad4, U+ad49, U+ae0b, U+ae0d, U+ae43, U+ae5d, U+aecf, U+af3c, U+af64, U+afd4, U+b080, U+b084, U+b0c5, U+b10c, U+b1e8, U+b2ac, U+b36e, U+b451, U+b515, U+b540, U+b561, U+b6ab, U+b6b1, U+b72c, U+b730, U+b744, U+b800, U+b8ec, U+b8f0, U+b904, U+b968, U+b96d, U+b987, U+b9d9, U+bb36, U+bb49, U+bc2d, U+bc43, U+bcf6, U+bd89, U+be57, U+be61, U+bed4, U+c090, U+c130, U+c148, U+c19c, U+c2f9, U+c36c, U+c37c, U+c384, U+c3df, U+c575, U+c584, U+c660, U+c719, U+c816, U+ca4d, U+ca54, U+cabc, U+cb49, U+cc14, U+cff5, U+d004, U+d038, U+d0b4, U+d0d3, U+d0e0, U+d0ed, U+d131, U+d1b0, U+d31f, U+d33d, U+d3a0, U+d3ab, U+d514, U+d584, U+d6a1, U+d6cc, U+d749, U+d760, U+d799;
}
/* [109] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.109.woff2) format('woff2');
  unicode-range: U+24, U+60, U+3b9, U+3bb, U+3bd, U+2191, U+2606, U+300c-300d, U+3131, U+3134, U+3139, U+3141-3142, U+3148, U+3161, U+3163, U+321c, U+4eba, U+5317, U+ac31, U+ac77, U+ac9f, U+acb9, U+acf0-acf1, U+acfd, U+ad73, U+af3d, U+b00c, U+b04a, U+b057, U+b0c4, U+b188, U+b1cc, U+b214, U+b2db, U+b2ee, U+b304, U+b4ed, U+b518, U+b5bc, U+b625, U+b69c-b69d, U+b7ac, U+b801, U+b86c, U+b959, U+b95c, U+b985, U+ba48, U+bb58, U+bc0c, U+bc38, U+bc85, U+bc9a, U+bf40, U+c068, U+c0bd, U+c0cc, U+c12f, U+c149, U+c1e0, U+c22b, U+c22d, U+c250, U+c2fc, U+c300, U+c313, U+c370, U+c3d8, U+c557, U+c580, U+c5e3, U+c62e, U+c634, U+c6f0, U+c74d, U+c783, U+c78e, U+c796, U+c7bc, U+c92c, U+ca4c, U+cc1c, U+cc54, U+cc59, U+ce04, U+cf30, U+cfc4, U+d140, U+d321, U+d38c, U+d399, U+d54f, U+d587, U+d5d0, U+d6e8, U+d770;
}
/* [110] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.110.woff2) format('woff2');
  unicode-range: U+d7, U+ea, U+fc, U+2192, U+25bc, U+3000, U+3137, U+3145, U+315c, U+7f8e, U+ac13, U+ac71, U+ac90, U+acb8, U+ace7, U+ad7f, U+ae50, U+aef4, U+af34, U+afbc, U+b048, U+b09a, U+b0ad, U+b0bc, U+b113, U+b125, U+b141, U+b20c, U+b2d9, U+b2ed, U+b367, U+b369, U+b374, U+b3cb, U+b4ec, U+b611, U+b760, U+b81b, U+b834, U+b8b0, U+b8e1, U+b989, U+b9d1, U+b9e1, U+b9fa, U+ba4d, U+ba78, U+bb35, U+bb54, U+bbf9, U+bc11, U+bcb3, U+bd05, U+bd95, U+bdd4, U+be10, U+bed0, U+bf51, U+c0d8, U+c232, U+c2b7, U+c2eb, U+c378, U+c500, U+c52c, U+c549, U+c568, U+c598, U+c5c9, U+c61b, U+c639, U+c67c, U+c717, U+c78a, U+c80a, U+c90c-c90d, U+c950, U+c9e7, U+cbe4, U+cca9, U+cce4, U+cdb0, U+ce78, U+ce94, U+ce98, U+cf8c, U+d018, U+d034, U+d0f1, U+d1b1, U+d280, U+d2f8, U+d338, U+d380, U+d3b4, U+d610, U+d69f, U+d6fc, U+d758;
}
/* [111] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.111.woff2) format('woff2');
  unicode-range: U+e7, U+2022, U+203b, U+25c0, U+2605, U+2661, U+3147, U+318d, U+672c, U+8a9e, U+acaa, U+acbc, U+ad1c, U+ae4a, U+ae5c, U+b044, U+b054, U+b0c8-b0c9, U+b2a6, U+b2d0, U+b35c, U+b364, U+b428, U+b454, U+b465, U+b4b7, U+b4e3, U+b51c, U+b5a1, U+b784, U+b790, U+b7ab, U+b7f4, U+b82c, U+b835, U+b8e9, U+b8f8, U+b9d8, U+b9f9, U+ba5c, U+ba64, U+babd, U+bb18, U+bb3b, U+bbff, U+bc0d, U+bc45, U+bc97, U+bcbc, U+be45, U+be75, U+be7c, U+bfcc, U+c0b6, U+c0f7, U+c14b, U+c2b4, U+c30d, U+c4f8, U+c5bb, U+c5d1, U+c5e0, U+c5ee, U+c5fd, U+c606, U+c6c5, U+c6e0, U+c708, U+c81d, U+c820, U+c824, U+c878, U+c918, U+c96c, U+c9e4, U+c9f1, U+cc2e, U+cd09, U+cea1, U+cef5, U+cef7, U+cf64, U+cf69, U+cfe8, U+d035, U+d0ac, U+d230, U+d234, U+d2f4, U+d31d, U+d575, U+d578, U+d608, U+d614, U+d718, U+d751, U+d761, U+d78c, U+d790;
}
/* [112] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.112.woff2) format('woff2');
  unicode-range: U+2665, U+3160, U+4e2d, U+6587, U+65e5, U+ac12, U+ac14, U+ac16, U+ac81, U+ad34, U+ade0, U+ae54, U+aebc, U+af2c, U+afc0, U+afc8, U+b04c, U+b08c, U+b099, U+b0a9, U+b0ac, U+b0ae, U+b0b8, U+b123, U+b179, U+b2e5, U+b2f7, U+b4c0, U+b531, U+b538, U+b545, U+b550, U+b5a8, U+b6f0, U+b728, U+b73b, U+b7ad, U+b7ed, U+b809, U+b864, U+b86d, U+b871, U+b9bf, U+b9f5, U+ba40, U+ba4b, U+ba58, U+ba87, U+baac, U+bbc0, U+bc16, U+bc34, U+bd07, U+bd99, U+be59, U+bfd0, U+c058, U+c0e4, U+c0f5, U+c12d, U+c139, U+c228, U+c529, U+c5c7, U+c635, U+c637, U+c735, U+c77d, U+c787, U+c789, U+c8c4, U+c989, U+c98c, U+c9d0, U+c9d3, U+cc0c, U+cc99, U+cd0c, U+cd2c, U+cd98, U+cda4, U+ce59, U+ce60, U+ce6d, U+cea0, U+d0d0-d0d1, U+d0d5, U+d14d, U+d1a4, U+d29c, U+d2f1, U+d301, U+d39c, U+d3bc, U+d4e8, U+d540, U+d5ec, U+d640, U+d750;
}
/* [113] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.113.woff2) format('woff2');
  unicode-range: U+5e, U+25b2, U+25b6, U+314e, U+ac24, U+ace1, U+ace4, U+ae68, U+af2d, U+b0d0, U+b0e5, U+b150, U+b155, U+b193, U+b2c9, U+b2dd, U+b3c8, U+b3fc, U+b410, U+b458, U+b4dd, U+b5a0, U+b5a4, U+b5bb, U+b7b5, U+b838, U+b840, U+b86f, U+b8f9, U+b960, U+b9e5, U+bab8, U+bb50, U+bc1d, U+bc24-bc25, U+bca8, U+bcbd, U+bd04, U+bd10, U+bd24, U+be48, U+be5b, U+be68, U+c05c, U+c12c, U+c140, U+c15c, U+c168, U+c194, U+c219, U+c27d, U+c2a8, U+c2f1, U+c2f8, U+c368, U+c554-c555, U+c559, U+c564, U+c5d8, U+c5fc, U+c625, U+c65c, U+c6b1, U+c728, U+c794, U+c84c, U+c88c, U+c8e0, U+c8fd, U+c998, U+c9dd, U+cc0d, U+cc30, U+ceec, U+cf13, U+cf1c, U+cf5c, U+d050, U+d07c, U+d0a8, U+d134, U+d138, U+d154, U+d1f4, U+d2bc, U+d329, U+d32c, U+d3d0, U+d3f4, U+d3fc, U+d56b, U+d5cc, U+d600-d601, U+d639, U+d6c8, U+d754, U+d765;
}
/* [114] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.114.woff2) format('woff2');
  unicode-range: U+3c-3d, U+2026, U+24d2, U+314b, U+ac11, U+acf3, U+ad74, U+ad81, U+adf9, U+ae34, U+af43, U+afb8, U+b05d, U+b07c, U+b110, U+b118, U+b17c, U+b180, U+b18d, U+b192, U+b2cc, U+b355, U+b378, U+b4a4, U+b4ef, U+b78d, U+b799, U+b7a9, U+b7fd, U+b807, U+b80c, U+b839, U+b9b4, U+b9db, U+ba3c, U+bab0, U+bba4, U+bc94, U+be4c, U+c154, U+c1c4, U+c26c, U+c2ac, U+c2ed, U+c4f4, U+c55e, U+c561, U+c571, U+c5b5, U+c5c4, U+c654-c655, U+c695, U+c6e8, U+c6f9, U+c724, U+c751, U+c775, U+c7a0, U+c7c1, U+c874, U+c880, U+c9d5, U+c9f8, U+cabd, U+cc29, U+cc2c, U+cca8, U+ccab, U+ccd0, U+ce21, U+ce35, U+ce7c, U+ce90, U+cee8, U+cef4, U+cfe0, U+d070, U+d0b9, U+d0c1, U+d0c4, U+d0c8, U+d15c, U+d1a1, U+d2c0, U+d300, U+d314, U+d3ed, U+d478, U+d480, U+d48d, U+d508, U+d53d, U+d5e4, U+d611, U+d61c, U+d68d, U+d6a8, U+d798;
}
/* [115] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.115.woff2) format('woff2');
  unicode-range: U+23, U+25, U+5f, U+a9, U+ac08, U+ac78, U+aca8, U+acac, U+ace8, U+ad70, U+adc0, U+addc, U+b137, U+b140, U+b208, U+b290, U+b2f5, U+b3c5, U+b3cc, U+b420, U+b429, U+b529, U+b530, U+b77d, U+b79c, U+b7a8, U+b7c9, U+b7f0, U+b7fc, U+b828, U+b860, U+b9ad, U+b9c1, U+b9c9, U+b9dd-b9de, U+b9e8, U+ba38-ba39, U+babb, U+bc00, U+bc8c, U+bca0, U+bca4, U+bcd1, U+bcfc, U+bd09, U+bdf0, U+be60, U+c0ad, U+c0b4, U+c0bc, U+c190, U+c1fc, U+c220, U+c288, U+c2b9, U+c2f6, U+c528, U+c545, U+c558, U+c5bc, U+c5d4, U+c600, U+c644, U+c6c0, U+c6c3, U+c721, U+c798, U+c7a1, U+c811, U+c838, U+c871, U+c904, U+c990, U+c9dc, U+cc38, U+cc44, U+cca0, U+cd1d, U+cd95, U+cda9, U+ce5c, U+cf00, U+cf58, U+d150, U+d22c, U+d305, U+d328, U+d37c, U+d3f0, U+d551, U+d5a5, U+d5c8, U+d5d8, U+d63c, U+d64d, U+d669, U+d734, U+d76c;
}
/* [116] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.116.woff2) format('woff2');
  unicode-range: U+26, U+2b, U+3e, U+40, U+7e, U+ac01, U+ac19, U+ac1d, U+aca0, U+aca9, U+acb0, U+ad8c, U+ae09, U+ae38, U+ae40, U+aed8, U+b09c, U+b0a0, U+b108, U+b204, U+b298, U+b2d8, U+b2eb-b2ec, U+b2f4, U+b313, U+b358, U+b450, U+b4e0, U+b54c, U+b610, U+b780, U+b78c, U+b791, U+b8e8, U+b958, U+b974, U+b984, U+b9b0, U+b9bc-b9bd, U+b9ce, U+ba70, U+bbfc, U+bc0f, U+bc15, U+bc1b, U+bc31, U+bc95, U+bcc0, U+bcc4, U+bd81, U+bd88, U+c0c8, U+c11d, U+c13c, U+c158, U+c18d, U+c1a1, U+c21c, U+c4f0, U+c54a, U+c560, U+c5b8, U+c5c8, U+c5f4, U+c628, U+c62c, U+c678, U+c6cc, U+c808, U+c810, U+c885, U+c88b, U+c900, U+c988, U+c99d, U+c9c8, U+cc3d-cc3e, U+cc45, U+cd08, U+ce20, U+cee4, U+d074, U+d0a4, U+d0dd, U+d2b9, U+d3b8, U+d3c9, U+d488, U+d544, U+d559, U+d56d, U+d588, U+d615, U+d648, U+d655, U+d658, U+d65c;
}
/* [117] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.117.woff2) format('woff2');
  unicode-range: U+d, U+48, U+7c, U+ac10, U+ac15, U+ac74, U+ac80, U+ac83, U+acc4, U+ad11, U+ad50, U+ad6d, U+adfc, U+ae00, U+ae08, U+ae4c, U+b0a8, U+b124, U+b144, U+b178, U+b274, U+b2a5, U+b2e8, U+b2f9, U+b354, U+b370, U+b418, U+b41c, U+b4f1, U+b514, U+b798, U+b808, U+b824-b825, U+b8cc, U+b978, U+b9d0, U+b9e4, U+baa9, U+bb3c, U+bc18, U+bc1c, U+bc30, U+bc84, U+bcf5, U+bcf8, U+bd84, U+be0c, U+be14, U+c0b0, U+c0c9, U+c0dd, U+c124, U+c2dd, U+c2e4, U+c2ec, U+c54c, U+c57c-c57d, U+c591, U+c5c5-c5c6, U+c5ed, U+c608, U+c640, U+c6b8, U+c6d4, U+c784, U+c7ac, U+c800-c801, U+c9c1, U+c9d1, U+cc28, U+cc98, U+cc9c, U+ccad, U+cd5c, U+cd94, U+cd9c, U+cde8, U+ce68, U+cf54, U+d0dc, U+d14c, U+d1a0, U+d1b5, U+d2f0, U+d30c, U+d310, U+d398, U+d45c, U+d50c, U+d53c, U+d560, U+d568, U+d589, U+d604, U+d6c4, U+d788;
}
/* [118] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.118.woff2) format('woff2');
  unicode-range: U+39, U+49, U+4d-4e, U+a0, U+ac04, U+ac1c, U+ac70, U+ac8c, U+acbd, U+acf5, U+acfc, U+ad00, U+ad6c, U+adf8, U+b098, U+b0b4, U+b294, U+b2c8, U+b300, U+b3c4, U+b3d9, U+b4dc, U+b4e4, U+b77c, U+b7ec, U+b85d, U+b97c, U+b9c8, U+b9cc, U+ba54, U+ba74, U+ba85, U+baa8, U+bb34, U+bb38, U+bbf8, U+bc14, U+bc29, U+bc88, U+bcf4, U+bd80, U+be44, U+c0c1, U+c11c, U+c120, U+c131, U+c138, U+c18c, U+c218, U+c2b5, U+c2e0, U+c544, U+c548, U+c5b4, U+c5d0, U+c5ec, U+c5f0, U+c601, U+c624, U+c694, U+c6a9, U+c6b0, U+c6b4, U+c6d0, U+c704, U+c720, U+c73c, U+c740, U+c744, U+c74c, U+c758, U+c77c, U+c785, U+c788, U+c790-c791, U+c7a5, U+c804, U+c815, U+c81c, U+c870, U+c8fc, U+c911, U+c9c4, U+ccb4, U+ce58, U+ce74, U+d06c, U+d0c0, U+d130, U+d2b8, U+d3ec, U+d504, U+d55c, U+d569, U+d574, U+d638, U+d654, U+d68c;
}
/* [119] */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1eLGC5nwuDo-KBTUm6CryotyJROlrnQ.119.woff2) format('woff2');
  unicode-range: U+20-22, U+27-2a, U+2c-38, U+3a-3b, U+3f, U+41-47, U+4a-4c, U+4f-5d, U+61-7b, U+7d, U+a1, U+ab, U+ae, U+b7, U+bb, U+bf, U+2013-2014, U+201c-201d, U+2122, U+ac00, U+ace0, U+ae30, U+b2e4, U+b85c, U+b9ac, U+c0ac, U+c2a4, U+c2dc, U+c774, U+c778, U+c9c0, U+d558;
}
/* cyrillic */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1SLfg8U4h.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1SLzg8U4h.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1SL3g8U4h.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzkM1SLPg8Q.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
