if('serviceWorker'in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register(superpwa_sw.url).then(function(registration){console.log('SuperPWA service worker ready');if(registration.active)
{registration.update();}
if(typeof firebase!='undefined'&&typeof pushnotification_load_messaging=='function'){const messaging=firebase.messaging();messaging.useServiceWorker(registration);pushnotification_load_messaging();}
subOnlineOfflineIndicator();}).catch(;const snackbarTimeToHide=5000;let isOffline=false,snackbarTimeoutHide=null,goOfflineMsg='You\'re currently offline',backOnlineMsg='You\'re back online <a href="javascript:location.reload()">refresh</a>';function injectSnackbarHtml(){const container=document.createElement('div');container.className='snackbar';const parag=document.createElement('p');parag.id='snackbar-msg';container.appendChild(parag);const button=document.createElement('button');button.type='button';button.className='snackbar-close';button.setAttribute('aria-label','Close ×');button.addEventListener('click',hideSnackbar);button.innerHTML='&times;';container.appendChild(button);document.body.appendChild(container);window.addEventListener('online',runOnlineOfflineIndicator);window.addEventListener('offline',runOnlineOfflineIndicator);window.addEventListener('fetch');container.addEventListener('mouseover',function(){if(snackbarTimeoutHide!==null)
clearTimeout(snackbarTimeoutHide);});container.addEventListener('mouseout',function(){if(snackbarTimeoutHide!==null)
snackbarTimeoutHide=setTimeout(hideSnackbar,snackbarTimeToHide/2);});}
function injectSnackbarCss(){const css=`body.snackbar--show .snackbar {
			-webkit-transform: translateY(0);
			transform: translateY(0); 
		}
		.snackbar {
			box-sizing: border-box;
			background-color: #121213;
			color: #fff;
			padding: 10px 55px 10px 10px;
			position: fixed;
			z-index: 9999999999999999;
			left: 15px;
			bottom: 15px;
			border-radius: 5px 8px 8px 5px;
			max-width: 90%;
			min-height: 48px;
			line-height: 28px;
			font-size: 16px;
			-webkit-transform: translateY(150%);
			transform: translateY(150%);
			will-change: transform;
			-webkit-transition: -webkit-transform 200ms ease-in-out;
			-webkit-transition-delay: 0s;
					transition-delay: 0s;
			-webkit-transition: -webkit-transform 200ms ease-in-out false;
			transition: -webkit-transform 200ms ease-in-out false;
			transition: transform 200ms ease-in-out false;
			transition: transform 200ms ease-in-out false, -webkit-transform 200ms ease-in-out false; 
		}
		.snackbar p {
			margin: 0;
			color: #fff;
			text-align: center; 
		}
		.snackbar .snackbar-close {
			position: absolute;
			top: 0;
			right: 0;
			width: 45px;
			height: 100%;
			padding: 0;
			background: #2a2a2a;
			border: none;
			font-size: 28px;
			font-weight: normal;
			border-radius: 0 5px 5px 0;
			color: #FFF;
			font-family: Arial, Helvetica, sans-serif;
		}
		.snackbar .snackbar-close:hover,
		.snackbar .snackbar-close:focus {
			background: #3f3f3f;
		}
		.snackbar a {
			color: #FFF;
			font-weight: bold;
			text-decoration: underline; 
		}`;const head=document.head||document.getElementsByTagName('head')[0];const style=document.createElement('style');style.type='text/css';if(style.styleSheet){style.styleSheet.cssText=css;}else{style.appendChild(document.createTextNode(css));}
head.appendChild(style);}
function runOnlineOfflineIndicator(){if(navigator.onLine){if(isOffline===true){showSnackbar(backOnlineMsg);}
isOffline=false;}else{showSnackbar(goOfflineMsg);isOffline=true;}}
function showSnackbar(msg){document.getElementById('snackbar-msg').innerHTML=msg;document.body.classList.add('snackbar--show');clearTimeout(snackbarTimeoutHide);snackbarTimeoutHide=setTimeout(hideSnackbar,snackbarTimeToHide);}
var deferredPrompt;window.addEventListener('beforeinstallprompt',function(e){deferredPrompt=e;if(deferredPrompt!=null||deferredPrompt!=undefined){if(superpwa_sw.disable_addtohome==1){deferredPrompt.preventDefault();}
var a2hsBanner=document.getElementsByClassName("superpwa-sticky-banner");if(a2hsBanner.length){deferredPrompt.preventDefault();if(superpwa_sw.enableOnDesktop!=1&&!window.mobileCheck()){return;}
if(typeof super_check_bar_closed_or_not=='function'&&!super_check_bar_closed_or_not()){return;}
for(var i=0;i<a2hsBanner.length;i++){var showbanner=a2hsBanner[i].getAttribute("data-show");a2hsBanner[i].style.display="flex";}}
document.cookie="hidecta=no";}})
window.addEventListener('appinstalled',function(evt){var a2hsBanner=document.getElementsByClassName("superpwa-sticky-banner");if(a2hsBanner.length){for(var i=0;i<a2hsBanner.length;i++){var showbanner=a2hsBanner[i].getAttribute("data-show");document.cookie="hidecta=yes";a2hsBanner[i].style.display="none";}}});var a2hsviaClass=document.getElementsByClassName("superpwa-add-via-class");if(a2hsviaClass!==null){for(var i=0;i<a2hsviaClass.length;i++){a2hsviaClass[i].addEventListener("click",addToHome);}}
function addToHome(){if(!deferredPrompt){return;}
deferredPrompt.prompt();deferredPrompt.userChoice.then(function(choiceResult){if(choiceResult.outcome==="accepted"){var a2hsBanner=document.getElementsByClassName("superpwa-sticky-banner");if(a2hsBanner){for(var i=0;i<a2hsBanner.length;i++){var showbanner=a2hsBanner[i].getAttribute("data-show");a2hsBanner[i].style.display="none";}}
console.log("User accepted the prompt");}else{console.log("User dismissed the prompt");}
deferredPrompt=null;});}});}
window.mobileCheck;window.addEventListener('load',function(){var manifestLink=document.querySelectorAll("link[rel='manifest']");if(manifestLink.length>1){for(var i=0;i<manifestLink.length;i++){var href=manifestLink[i].getAttribute("href");if(href.indexOf("superpwa-manifest.json")==-1){manifestLink[i].remove();}}}
var ua=window.navigator.userAgent;var iOS=ua.match(/iPad/i)||ua.match(/iPhone/i);var webkit=ua.match(/WebKit/i);var iOSSafari=iOS&&webkit&&!ua.match(/CriOS/i);if(iOSSafari&&(window.matchMedia('(display-mode: standalone)').matches)){setTimeout(function(){const anchor_fix=document.querySelectorAll("a[href='#']");if(anchor_fix.length>1){for(var i=0;i<anchor_fix.length;i++){anchor_fix[i].setAttribute("href","javascript:void(0);");}}},600);}});