var isSharedEmbed=true;var playerDef="videojs";var ezVideoIframe=true;function renderEzoicVideoContent(){var isMobile={Android:function(){return navigator.userAgent.match(/Android/i);},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i);},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera:function(){return navigator.userAgent.match(/Opera Mini/i);},Windows:any:};var isOnMSEdge=navigator.userAgent.match(/Edg\/\d+(\.\d+)*|Edge\/\d+(\.\d+)*/i);var renderMethod="dash";if(isMobile.iOS()){renderMethod="hls";}
if(/apple/i.test(navigator.vendor)){renderMethod="hls";}
if(typeof videoObject==="undefined"){console.error("Failed to find videoObject");return;}
videoObject.IsFloating=false;videoObject.videoObjectsCount=1;videoObject.videoObjectsIndex=1;ezVideoPlayer.Init(videoObject).then(()=>{let player=videojs.getPlayer("ez-video-"+videoObject.PlayerId);player.ready(function(){if(videoObject.HasNextVideo===true){setupListeners(player);}});});}
(function(){"use strict"
loadDeps();if(typeof vectx==="undefined"){return;}
window.onload=function(){if(vectx["is_magic_player"]){setupMagicPlayerListeners();}else{setupRegularPlayerListeners()}
if(vectx.is_magic_player){window.parent.postMessage({name:"magicinitialized-"+vectx.containerId},"*");}else{window.parent.postMessage({name:"initialized"},"*");}};function setupRegularPlayerListeners(){document.getElementById("ez-video-ez-stuck-close-"+videoObject.PlayerId).addEventListener("click",function(){window.parent.postMessage({name:"unfloat"},"*");if(stuckBar){stuckBar.classList.remove("ez-stuck-bar-visible");}
if(typeof vectx!=="undefined"){vectx["player_currently_floating"]=false;}
totalPause();});let stuckBar=document.getElementById("ez-video-ez-stuck-bar-"+videoObject.PlayerId);window.addEventListener("message",(event)=>{if(event.data==="float"){if(stuckBar){stuckBar.classList.add("ez-stuck-bar-visible");}
if(typeof vectx!=="undefined"){vectx["player_currently_floating"]=true;}}else if(event.data==="unfloat"){if(stuckBar){stuckBar.classList.remove("ez-stuck-bar-visible");}
if(typeof vectx!=="undefined"){vectx["player_currently_floating"]=false;}}});}
function setupMagicPlayerListeners(){document.getElementById("ez-video-ez-stuck-close-"+magicAutoPlayVideoObject.PlayerId).addEventListener("click",function(){window.parent.postMessage({name:"unfloat"},"*");vectx["player_currently_floating"]=false;if(stuckBar){stuckBar.classList.remove("ez-stuck-bar-visible");configurePlayersForInContent();}
if(typeof ezVideoAdConductor!=="undefined"){let vac=ezVideoAdConductor.getVideoAdConductor();vac.dispatchEvent("autoPlayNotFloating",{});}
totalPause();});let stuckBar=document.getElementById("ez-video-ez-stuck-bar-"+magicAutoPlayVideoObject.PlayerId);window.addEventListener("message",(event)=>{if(event.data==="float"){vectx["player_currently_floating"]=true;if(stuckBar){stuckBar.classList.add("ez-stuck-bar-visible");configurePlayersForFloating();}
if(typeof ezVideoAdConductor!=="undefined"){let vac=ezVideoAdConductor.getVideoAdConductor();vac.dispatchEvent("autoPlayFloating",{});}}else if(event.data==="unfloat"){vectx["player_currently_floating"]=false;if(stuckBar){stuckBar.classList.remove("ez-stuck-bar-visible");configurePlayersForInContent();}
if(typeof ezVideoAdConductor!=="undefined"){let vac=ezVideoAdConductor.getVideoAdConductor();vac.dispatchEvent("autoPlayNotFloating",{});}}});}
function totalPause(){videojs.getAllPlayers().forEach(;}
function configurePlayersForFloating(){let width="width",height="height",padding="padding",zIndex="z-index";let playlistSidebar=document.getElementsByClassName("vjs-playlist-sidebar");for(let i=0;i<playlistSidebar.length;i++){playlistSidebar[i].style.setProperty(width,"100%","important");playlistSidebar[i].style.setProperty(height,"100%","important");playlistSidebar[i].style.zIndex="9999";playlistSidebar[i].classList.add("open");}
let ctpPlaylist=document.getElementById("ez-video-playlist-ez-4998");if(ctpPlaylist){ctpPlaylist.style.setProperty(width,"100%","important");ctpPlaylist.style.setProperty(height,"100%","important");ctpPlaylist.style.setProperty(padding,"0","important");}
let playlistItemList=document.getElementsByClassName("vjs-playlist-item-list");for(let i=0;i<playlistItemList.length;i++){playlistItemList[i].style.width="100%";playlistItemList[i].style.setProperty(height,"100%","important");;}
let playlistItem=document.getElementsByClassName("vjs-playlist-item");for(let i=0;i<playlistItem.length;i++){playlistItem[i].style.width="100%";playlistItem[i].style.height="100%";}
let magicAutoplayContainer=document.getElementById("magic-autoplay-container");if(magicAutoplayContainer){magicAutoplayContainer.style.setProperty(height,"100%","important");}
let magicAutoplayWrapper=document.getElementById("ez-video-wrap-ez-4999");if(magicAutoplayWrapper){magicAutoplayWrapper.style.setProperty(height,"100%","important");}
let magicAutoplayPlayerContainer=document.getElementById("ez-video-container-ez-4999");if(magicAutoplayPlayerContainer){magicAutoplayPlayerContainer.style.setProperty(width,"100%","important");}
let magicAutoplayAdContainer=document.getElementById("ez-video-ad-container-ez-4999");if(magicAutoplayAdContainer){magicAutoplayAdContainer.style.setProperty(zIndex,"99999","important");}
let stuckBar=document.getElementsByClassName("ez-video-ez-stuck-bar");for(let i=0;i<stuckBar.length;i++){stuckBar[i].style.setProperty(zIndex,"999999","important");}}
function configurePlayersForInContent(){let width="width",height="height",padding="padding",zIndex="z-index";let playlistSidebar=document.getElementsByClassName("vjs-playlist-sidebar");for(let i=0;i<playlistSidebar.length;i++){playlistSidebar[i].style.removeProperty(width);playlistSidebar[i].style.removeProperty(height);playlistSidebar[i].style.zIndex="100";}
let ctpPlaylist=document.getElementById("ez-video-playlist-ez-4998");if(ctpPlaylist){ctpPlaylist.style.removeProperty(width);ctpPlaylist.style.removeProperty(height);ctpPlaylist.style.removeProperty(padding);}
let playlistItemList=document.getElementsByClassName("vjs-playlist-item-list");for(let i=0;i<playlistItemList.length;i++){playlistItemList[i].style.removeProperty(width);playlistItemList[i].style.removeProperty(height);}
let playlistItem=document.getElementsByClassName("vjs-playlist-item");for(let i=0;i<playlistItem.length;i++){playlistItem[i].style.removeProperty(width);playlistItem[i].style.removeProperty(height);}
let magicAutoplayContainer=document.getElementById("magic-autoplay-container");if(magicAutoplayContainer){magicAutoplayContainer.style.removeProperty(height);}
let magicAutoplayWrapper=document.getElementById("ez-video-wrap-ez-4999");if(magicAutoplayWrapper){magicAutoplayWrapper.style.removeProperty(height);}
let magicAutoplayPlayerContainer=document.getElementById("ez-video-container-ez-4999");if(magicAutoplayPlayerContainer){magicAutoplayPlayerContainer.style.removeProperty(width);}
let magicAutoplayAdContainer=document.getElementById("ez-video-ad-container-ez-4999");if(magicAutoplayAdContainer){magicAutoplayAdContainer.style.setProperty(zIndex,"9999","important");}}})();