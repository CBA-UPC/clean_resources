﻿var endp="";const MAXAGEm = 1; const HASHm = Math.floor(Date.now() / (MAXAGEm * 1));
var cdnurl="https://cdn2.bildirt.com";
case 1:return endp=t.endpoint,i=o.sent(),s={swScope:e.scope,vapidKey:n,fcmSenderId:this.messagingSenderId,fcmToken:i,fcmPushSet:r.fcmPushSet,createTime:Date.now(),endpoint:t.endpoint,auth:t.getKey("auth"),p256dh:t.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(s)];case 2:return o.sent(),[4,this.vapidDetailsModel.saveVapidDetails(e.scope,n)];case 3:return o.sent(),[2,i];case 4:return a=o.sent(),[4,this.deleteToken(r.fcmToken)];case 5:throw o.sent(),a;case 6:return[2]}})})},e.prototype.getNewToken=function(e,t,n){return i(this,void 0,void 0,function(){var r,i;return o(this,function(o){switch(o.label){case 0:return[4,this.iidModel.getToken(this.messagingSenderId,t,n)];
case 1:return endp=t.endpoint,r=o.sent(),i={swScope:e.scope,vapidKey:n,fcmSenderId:this.messagingSenderId,fcmToken:r.token,fcmPushSet:r.pushSet,createTime:Date.now(),endpoint:t.endpoint,auth:t.getKey("auth"),p256dh:t.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(i)];case 2:return o.sent(),[4,this.vapidDetailsModel.saveVapidDetails(e.scope,n)];case 3:return o.sent(),[2,r.token]}})})},e.prototype.deleteToke},e.prototype.deleteTokenFromD},e.prototype.getPushSubscriptio},e.prototype.requestPermissio},e.prototype.useServiceWorker=function(e){throw v.create(E.AVAILABLE_IN_WINDOW)},e.prototype.usePublicVapidKey=function(e){throw v.create(E.AVAILABLE_IN_WINDOW)},e.prototype.onMessage=function(e,t,n){throw v.create(E.AVAILABLE_IN_WINDOW)},e.prototype.onTokenRefres},e.prototype.setBackgroundMessageHandle},e.prototype.delet},e.prototype.getNotificationPermission},e.prototype.getTokenDetailsModel=function(){return this.tokenDetailsModel},e.prototype.getVapidDetailsModel=function(){return this.vapidDetailsModel},e.prototype.getIidMode},e}();var R=function(e}return n(t,e),t.prototype.onPush=function(e){e.waitUntil(this.onPush_(e))},t.prototype.onSubChange=function(e){e.waitUntil(this.onSubChange_(e))},t.prototype.onNotificationClic},t.prototype.onPush_=function(e){return i(this,void 0,void 0,function(){var t,n,r,i,s,a;return o(this,function(o){switch(o.label){	case 0:if(!e.data)return[2];try{t=e.data.json();console.log("dd",t);if(!t.notification.image) {t.notification.image= t.data['gcm.notification.image']; }}catch(e){return[2]}return[4,this.hasVisibleClients_()];case 1:return o.sent()?[2,this.sendMessageToWindowClients_(t)]:(n=this.getNotificationData_(t))?(r=n.title||"",[4,this.getSWRegistration_()]):[3,3];case 2:return i=o.sent(),s=n.actions,a=Notification.maxActions,s&&a&&s.length>a&&console.warn("This browser only supports "+a+" actions.The remaining actions will not be displayed."),[2,i.showNotification(r,n)];case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(t)]:[3,5];case 4:return o.sent(),[2];case 5:return[2]}})})},t.prototype.onSubChange},t.prototype.onNotificationClick},t.prototype.getNotificationData},t.prototype.setBackgroundMessageHandle},t.prototype.getWindowClient},t.prototype.attemptToMessageClient},t.prototype.hasVisibleClients},t.prototype.sendMessageToWindowClients},t.prototype.getSWRegistration},t.prototype.getPublicVapidKey},t}(Bvar K,M=function(e}return n(t,e),t.prototype.getToke},t.prototype.requestPermissio},t.prototype.useServiceWorke},t.prototype.usePublicVapidKe},t.prototype.onMessage=function(e,t,n){return"function"==typeof e?this.onMessageInternal(e,t,n):this.onMessageInternal(e)},t.prototype.onTokenRefres},t.prototype.waitForRegistrationToActivate},t.prototype.getSWRegistration_=function(){var e=this;return this.registrationToUse?this.waitForRegistrationToActivate_(this.registrationToUse):(this.registrationToUse=null,navigator.serviceWorker.register("/BildirtSDK-sw.js?ver="+HASHm,{scope:"/bildirt-bildirim-sistemi"}).catc}).the}))},t.prototype.getPublicVapidKey},t.prototype.setupSWMessageListener},t}(B}K={isSupported:F},e.INTERNAL.registerService("messaging},K);var fcmT=ht+sc+ds+ds+ls+ds+fd+"/firebase"; }).apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-messaging - be sure to load firebase-app.js first.")}});/*# sourceMappingURL=BildirtSDK-sw.js.map*/
if (("Notification" in window)) {
	if (Notification.permission === "granted") {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register("/BildirtSDK-sw.js?ver="+HASHm,{scope:"/bildirt-bildirim-sistemi"});
			navigator.serviceWorker.ready.the});		
		}
	} else {
		setTokenSentToServer(false);
	}
	var Biref = document.referrer;var ekus = "";if(Biref.match(/quick/gi)){ekus="&ekus=yes";}
	fetch(cdnurl+'/Config-sw.js?uygulamaid='+uygulamaid+ekus).then(function(response) {response.json().then(function (post) {
	if (post.segmentCode != null) {eval(post.segmentCode);}
var config = { apiKey: post.apiKey, authDomain: post.authDomain, databaseURL: post.databaseURL, projectId: post.projectId, storageBucket: post.storageBucket, messagingSenderId:post.messagingSenderId };
firebase.initializeApp(config);
const messaging = firebase.messaging();


if (!BildirtgetCookie("Bildirt_sorma") && post.kod != null && Notification.permission === "default")  {
	/*window.addEventListener('DOMContentLoaded', function() { console.log(post.kod);*/
		var BildirtKutu=document.createElement('div');BildirtKutu.innerHTML=post.kod;document.body.appendChild(BildirtKutu);
	document.getElementById("BildirtEvet").onclick =function() {document.getElementById("BildirtModal").remove();BildirtsetCookie("Bildirt_sorma", "1", 1);izinsor();},document.getElementById("BildirtHayir").onclick =function() {document.getElementById("BildirtModal").remove();BildirtsetCookie("Bildirt_sorma", "1", 3);}

		/*})*/
}

if (!BildirtgetCookie("Bildirt_sorma") && post.kod == null  && Notification.permission === "default")  {izinsor()}
function izinsor() {messaging.requestPermission().then(function() {if (isTokenSentToServer()) {} else {messaging.getToken().then(function(currentToken) {if (currentToken) {saveToken(currentToken);setTokenSentToServer(true);} else {setTokenSentToServer(false);}}).catch(function(err) {if(window.navigator && navigator.serviceWorker) {navigator.serviceWorker.getRegistrations().then(function(registrations) {for(let registration of registrations) {registration.unregister();}});}if(window.navigator && navigator.serviceWorker) {navigator.serviceWorker.getRegistrations().the});}messaging.getToken().then(function(currentToken) {if (currentToken) {saveToken(currentToken);setTokenSentToServer(true);}});/*alert(err);*/});}}).catcr);});}
if(!window.localStorage.getItem('Bildirt_token_id') && Notification.permission === "granted") {
	messaging.getToken().then(function(currentToken) {
		fetch(cdnurl+'/get_token.js?ver=1&token='+currentToken).then(function(res){ 
			res.json().then(function (post) {
				if(post.t_id) {
					window.localStorage.setItem('Bildirt_token_id', post.t_id);
				}
			});
		});
	});	
}
if (post.segment != null && Notification.permission === "granted" && window.localStorage.getItem('Bildirt_token_id')) {
	if (typeof BildS === 'undefined') {
       var BildS='';
	}
	var s_data = {'title':document.title,'url':window.location.pathname,'token_id':window.localStorage.getItem('Bildirt_token_id'),'target_segment':BildS,'user_segments':window.localStorage.getItem('Bildirt_user_segments')};
	fetch(cdnurl+'/segment.js?uygulamaid='+uygulamaid,{method: "POST",body: JSON.stringify(s_data)}).then(function(res){ 
		res.json().then(function (post) {
			if(post.user_segments) {
				window.localStorage.setItem('Bildirt_user_segments', post.user_segments);
			}
		});
	});
}

});});}
function getRegToken(argument) {messaging.getToken().then(function(currentToken) {if (currentToken) {saveToken(currentToken);setTokenSentToServer(true);} else {setTokenSentToServer(false);}}).ce);});}
function setTokenSentToServer(sent) {window.localStorage.setItem('sentToServers', sent ? 1 : 0);}function setSormaDurum(sent) {window.sessionStorage.setItem('setSormaDurum', sent ? 1 : 0);}
function isTokenSentToServer() {return window.localStorage.getItem('sentToServers') == 1;}
function saveToken(currentToken) {
	var ip = new XMLHttpRequest();
	var url2 = cdnurl+"/ip.js";
	var params2 = "token=cc";
	var dil = navigator.language || navigator.userLanguage;
	var xhr = new XMLHttpRequest();var url = cdnurl+"/izle.js";ip.open('POST', url2, true);ip.setRequestHeader("Content-type", "application/x-www-form-urlencoded");ip.onreadystatechange = function() {if (ip.readyState === XMLHttpRequest.DONE) {if (ip.status === 200) {var userbilgi = JSON.parse(ip.response);var sonuc = userbilgi.ip;var params = "endpoint="+endp+"&token="+currentToken+"&uygulamaid="+uygulamaid+"&"+userbilgi.cikti;xhr.open('POST', url, true);xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");xhr.onreadystatechange = function() {if (xhr.readyState === XMLHttpRequest.DONE) {if (xhr.status === 200) {var response = JSON.parse(xhr.response);
if (response.result) {
		window.localStorage.setItem('Bildirt_token_id', response.result.tid);
		console.log(currentToken);
		console.log(response.result);
}}}};xhr.send(params);console.log(sonuc);}}};ip.send(params2);}
console.log(isTokenSentToServer(/"";}