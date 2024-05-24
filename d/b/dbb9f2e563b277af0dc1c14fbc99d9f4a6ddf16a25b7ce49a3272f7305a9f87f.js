importScripts('/analytics.js');

self.analytics.trackingId = 'UA-492553-2';

var cacheName = 'mbs';
var filesToCache = [
];

var dataCacheName = 'mSite-v1';
//ServiceWorkerRegistration.update();
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  self.skipWaiting();
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});

self.addEventListener('fetch', function(event) {
  // Do something interesting with the fetch here
});


self.addEventListener('push', function(event) {
	console.log('Push message received', event);

	//check permission
	if(self.Notification.permission=='granted'){
		  if(event.data ) {
			var obj = event.data.json();
		    fireNotification(obj, event);
		  }
		  else{
			  //readNotificationData(event);
		  }
	}
	else {
		//We need to ask permission
		self.Notification.requestPermission(function(permission) {
			if(permission=='granted') {
				  if(event.data ) {
					  var obj = event.data.json();
					  fireNotification(obj, event);
				  }
				  else{
					  //readNotificationData(event);
				  }
			}          
		});
	}
});

//received notification clicked . Will read payload and hit the url mentioned in it.
self.addEventListener('notificationclick', function(event) {
	  console.log('On notification click: ', event.notification.tag);
	  event.notification.close();
	  var url = event.notification.data.url;
	  if(!url){
	    return;
	  }
	  
	  if (event.action === 'ctaText') {  
		  clients.openWindow(url); 
	  }  
	  else if (event.action === 'downLoadApp') {  
	    clients.openWindow(event.notification.data.appdwnldurl);  
	  }

	  if(event.notification.data.gaUrl){
		  self.analytics.trackEvent('open', 'webnotification_open', event.notification.data.gaUrl);
	  }

	  event.waitUntil(clients.matchAll({
	      type: "window"
	  }).then(function(clientList) {
	      for (var i = 0; i < clientList.length; i++) {
	        var client = clientList[i];
	        if (client.url == url && 'focus' in client)
	          return client.focus();
	      }
	      if (clients.openWindow) {
	        return clients.openWindow(url);
	      }
	    })
	  );
});


function readNotificationData(event)
{
	event.waitUntil( 
			self.registration.pushManager.getSubscription().then( function(pushSubscription) {
				if(pushSubscription)
				{
					//can access sub id . but for now pushing static notification. In future get user activity corresponding to sub id.
					const endPoint = pushSubscription.endpoint.slice(pushSubscription.endpoint.lastIndexOf('/')+1);
					console.log("*********  subscription id in service worker: " +endPoint);
					return  self.registration.showNotification("2 bhk property", {  
						actions: [  
							   {action: 'like', title: 'Like'},  
							   {action: 'downLoadApp', title: 'downLoadApp'}], 
						body: "Property  notification",  
						icon: "/image/fav1.png",  
						tag: "Property for you" ,
						data:{
							url:"/mbs/property-for-sale/2-BHK-Flat-real-estate-Noida",
							cta: "exp"
						}
					})  ;

				}
			})
	); 
}

function mobileCheck(){
	var check = false;
	  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	  return check;
}

function fireNotification(obj,event)
{
	 var title = obj.title;
	  var body = obj.body;
	  var icon = 'https://cdn.staticmb.com/notification/fav1.png';
	  var tag = 'mobile push';	  
	  var actionArr= [];
	  if(obj.cta && obj.cta!= undefined){
		  var ctaText= obj.cta;
		  var ctaObj= {action: 'ctaText', title: ctaText};
		  actionArr.push(ctaObj);
	  }
	  var isMob= mobileCheck();
	  if(isMob && obj.appdwnldurl && obj.appdwnldurl!= undefined){
		  var appdwnldurlObj= {action: 'downLoadApp', title: 'View in App'};
		  actionArr.push(appdwnldurlObj);
	  }
	  var imageUrl='';
	  if(obj.imageUrl && obj.imageUrl!= undefined){
		  imageUrl= obj.imageUrl;
	  }
	   
	  var data = {};
	  data['url'] = obj.url;
	  
	  if(isMob && obj.appdwnldurl && obj.appdwnldurl!= undefined){
		  data['appdwnldurl'] = obj.appdwnldurl; 
	  }
	  data['gaUrl'] = obj.gaUrl;
	  
	event.waitUntil( 
			self.registration.showNotification(title, {
				actions: actionArr,
			    body: body,  
			    icon: icon, 
			    image: imageUrl,
			    tag: tag,
			    requireInteraction: true,
			    data: data
			})  
		); 
}
n(n){return l[n].cancel()})))},c.forEach((function(r){return D(n[r],t,r,l[r])}))}function W(n,t,r){var c=void 0,u=Object.keys(n),i={};u.forEach((function(t){var f=function(i,f){if(!c)if(f)r.cancel(),r(i,!0);else if(!Object(o.d)(i)&&i!==d&&i!==g){var l;r.cancel(),c=!0;var s=((l={})[t]=i,l);r(e.n.array(n)?[].slice.call(a({},s,{length:u.length})):s)}};f.cancel=e.r,i[t]=f})),r.cancel=function(){c||(c=!0,u.forEach((function(n){return i[n].cancel()})))},u.forEach((function(r){c||D(n[r],t,r,i[r])}))}function Y(n,t){var r=n.selector,e=n.args;try{t(r.apply(void 0,[f()].concat(e)))}catch(n){t(n,!0)}}function $(n,r){var e=n.pattern,c=n.buffer,u=y(e);u.pattern=e,r(Object(o.c)(t,c||i.a.fixed(),u))}function nn(n,t){t(!!R.isCancelled)}function tn(n,t){n.flush(t)}function rn(n,t){t(N[n])}function en(n,t){e.s.assign(N,n),t()}function on(n,t,r,o){var c,u;return r._deferredEnd=null,(c={})[e.e]=!0,c.id=n,c.name=t,"done",(u={}).done=u.done||{},u.done.get=function(){if(r._deferredEnd)return r._deferredEnd.promise;var n=Object(e.i)();return r._deferredEnd=n,r._isRunning||(r._error?n.reject(r._error):n.resolve(r._result)),n.promise},c.cont=o,c.joiners=[],c.cancel=I,c.isRunning=function(){return r._isRunning},c.isCancelled=function(){return r._isCancelled},c.isAborted=function(){return r._isAborted},c.result=function(){return r._result},c.error=function(){return r._error},c.setContext=function(n){Object(e.g)(n,e.n.object,Object(e.h)("task",n)),e.s.assign(N,n)},l(c,u),c}}var w="runSaga(storeInterface, saga, ...args): saga argument must be a Generator function!";function k(n,t){for(var r=arguments.length,o=Array(r>2?r-2:0),c=2;c<r;c++)o[c-2]=arguments[c];var u=void 0;e.n.iterator(n)?(u=n,n=t):(Object(e.g)(t,e.n.func,w),u=t.apply(void 0,o),Object(e.g)(u,e.n.iterator,w));var i=n,a=i.subscribe,f=i.dispatch,l=i.getState,s=i.context,d=i.sagaMonitor,g=i.logger,v=i.onError,h=Object(e.v)();d&&(d.effectTriggered=d.effectTriggered||e.r,d.effectResolved=d.effectResolved||e.r,d.effectRejected=d.effectRejected||e.r,d.effectCancelled=d.effectCancelled||e.r,d.actionDispatched=d.actionDispatched||e.r,d.effectTriggered({effectId:h,root:!0,parentEffectId:0,effect:{root:!0,saga:t,args:o}}));var b=E(u,a,Object(e.x)(f),l,s,{sagaMonitor:d,logger:g,onError:v},h,t.name);return d&&d.effectResolved(h,b),b}function C(n,t){var r={};for(var e in n)t.indexOf(e)>=0||Object.prototype.hasOwnProperty.call(n,e)&&(r[e]=n[e]);return r}r("q09E"),r("oZtI"),t.a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.context,r=void 0===t?{}:t,c=C(n,["context"]),u=c.sagaMonitor,i=c.logger,a=c.onError;if(e.n.func(c))throw new Error("Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead");if(i&&!e.n.func(i))throw new Error("`options.logger` passed to the Saga middleware is not a function!");if(a&&!e.n.func(a))throw new Error("`options.onError` passed to the Saga middleware is not a function!");if(c.emitter&&!e.n.func(c.emitter))throw new Error("`options.emitter` passed to the Saga middleware is not a function!");function f(n){var t=n.getState,l=n.dispatch,s=Object(o.b)();return s.emit=(c.emitter||e.l)(s.emit),f.run=k.bind(null,{context:r,subscribe:s.subscribe,dispatch:l,getState:t,sagaMonitor:u,logger:i,onError:a}),function(n){return function(t){u&&u.actionDispatched&&u.actionDispatched(t);var r=n(t);return s.emit(t),r}}}return f.run=function(){throw new Error("Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware")},f.setContext=function(n){Object(e.g)(n,e.n.object,Object(e.h)("sagaMiddleware",n)),e.s.assign(r,n)},f}},"92lH":function(n,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return a})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return d})),r.d(t,"e",(function(){return g}));var e=r("Ev6p"),o=r("mbVZ"),c=r("udQi"),u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n},i={type:"@@redux-saga/CHANNEL_END"},a=function(n){return n&&"@@redux-saga/CHANNEL_END"===n.type};function f(){var n=[];return{subscribe:function(t){return n.push(t),function(){return Object(e.t)(n,t)}},emit:function(t){for(var r=n.slice(),e=0,o=r.length;e<o;e++)r[e](t)}}}var l="invalid buffer passed to channel factory function";function s(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.a.fixed(),t=!1,r=[];function c(){if(t&&r.length)throw Object(e.m)("Cannot have a closed channel with pending takers");if(r.length&&!n.isEmpty())throw Object(e.m)("Cannot have pending takers with non empty buffer")}function u(o){if(c(),Object(e.g)(o,e.n.notUndef,"Saga was provided with an undefined action"),!t){if(!r.length)return n.put(o);for(var u=0;u<r.length;u++){var i=r[u];if(!i[e.b]||i[e.b](o))return r.splice(u,1),i(o)}}}function a(o){c(),Object(e.g)(o,e.n.func,"channel.take's callback must be a function"),t&&n.isEmpty()?o(i):n.isEmpty()?(r.push(o),o.cancel=function(){return Object(e.t)(r,o)}):o(n.take())}function f(r){c(),Object(e.g)(r,e.n.func,"channel.flush' callback must be a function"),t&&n.isEmpty()?r(i):r(n.flush())}function s(){if(c(),!t&&(t=!0,r.length)){var n=r;r=[];for(var e=0,o=n.length;e<o;e++)n[e](i)}}return Object(e.g)(n,e.n.buffer,l),{take:a,put:u,flush:f,close:s,get __takers__(){return r},get __closed__(){return t}}}function d(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.a.none(),r=arguments[2];arguments.length>2&&Object(e.g)(r,e.n.func,"Invalid match function passed to eventChannel");var c=s(t),u=function(){c.__closed__||(i&&i(),c.close())},i=n((function(n){a(n)?u():r&&!r(n)||c.put(n)}));if(c.__closed__&&i(),!e.n.func(i))throw new Error("in eventChannel: subscribe should return a function to unsubscribe");return{take:c.take,flush:c.flush,close:u}}function g(n){var t=d((function(t){return n((function(n){n[e.c]?t(n):Object(c.a)((function(){return t(n)}))}))}));return u({},t,{take:function(n,r){arguments.length>1&&(Object(e.g)(r,e.n.func,"channel.take's matcher argument must be a function"),n[e.b]=r),t.take(n)}})}},Ev6p:function(n,t,r){"use strict";r.d(t,"u",(function(){return c})),r.d(t,"e",(function(){return u})),r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return f})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return s})),r.d(t,"o",(function(){return g})),r.d(t,"r",(function(){return v})),r.d(t,"l",(function(){return h})),r.d(t,"g",(function(){return b})),r.d(t,"n",(function(){return m})),r.d(t,"s",(function(){return j})),r.d(t,"t",(function(){return O})),r.d(t,"f",(function(){return E})),r.d(t,"i",(function(){return w})),r.d(t,"j",(function(){return k})),r.d(t,"v",(function(){return _})),r.d(t,"q",(function(){return x})),r.d(t,"p",(function(){return T})),r.d(t,"k",(function(){return q})),r.d(t,"w",(function(){return N})),r.d(t,"m",(function(){return L})),r.d(t,"h",(function(){return R})),r.d(t,"x",(function(){return P}));var e=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},c=function(n){return"@@redux-saga/"+n},u=c("TASK"),i=c("HELPER"),a=c("MATCH"),f=c("CANCEL_PROMISE"),l=c("SAGA_ACTION"),s=c("SELF_CANCELLATION"),d=function(n){return function(){return n}},g=d(!0),v=function(){},h=function(n){return n};function b(n,t,r){if(!t(n))throw T("error","uncaught at check",r),new Error(r)}var p=Object.prototype.hasOwnProperty;function y(n,t){return m.notUndef(n)&&p.call(n,t)}var m={undef:function(n){return null==n},notUndef:function(n){return null!=n},func:function(n){return"function"==typeof n},number:function(n){return"number"==typeof n},string:function(n){return"string"==typeof n},array:Array.isArray,object:function(n){return n&&!m.array(n)&&"object"===(void 0===n?"undefined":o(n))},promise:function(n){return n&&m.func(n.then)},iterator:function(n){return n&&m.func(n.next)&&m.func(n.throw)},iterable:function(n){return n&&m.func(Symbol)?m.func(n[Symbol.iterator]):m.array(n)},task:function(n){return n&&n[u]},observable:function(n){return n&&m.func(n.subscribe)},buffer:function(n){return n&&m.func(n.isEmpty)&&m.func(n.take)&&m.func(n.put)},pattern:function(n){return n&&(m.string(n)||"symbol"===(void 0===n?"undefined":o(n))||m.func(n)||m.array(n))},channel:function(n){return n&&m.func(n.take)&&m.func(n.close)},helper:function(n){return n&&n[i]},stringableFunc:function(n){return m.func(n)&&y(n,"toString")}},j={assign:function(n,t){for(var r in t)y(t,r)&&(n[r]=t[r])}};function O(n,t){var r=n.indexOf(t);r>=0&&n.splice(r,1)}var E={from:function(n){var t=Array(n.length);for(var r in n)y(n,r)&&(t[r]=n[r]);return t}};function w(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e({},n),r=new Promise((function(n,r){t.resolve=n,t.reject=r}));return t.promise=r,t}function k(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=void 0,e=new Promise((function(e){r=setTimeout((function(){return e(t)}),n)}));return e[f]=function(){return clearTimeout(r)},e}function C(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){return++n}}var _=C(),A=function(n){throw n},S=function(n){return{value:n,done:!0}};function x(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:A,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",e=arguments[3],o={name:r,next:n,throw:t,return:S};return e&&(o[i]=!0),"undefined"!=typeof Symbol&&(o[Symbol.iterator]=function(){return o}),o}function T(n,t){}function q(n,t){return function(){return n.apply(void 0,arguments)}}var N=function(n,t){return n+" has been deprecated in favor of "+t+", please update your code"},L=function(n){return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: "+n+"\n")},R=function(n,t){return(n?n+".":"")+"setContext(props): argument "+t+" is not a plain object"},P=function(n){return function(t){return n(Object.defineProperty(t,l,{value:!0}))}}},mbVZ:function(n,t,r){"use strict";r.d(t,"a",(function(){return u}));var e=r("Ev6p"),o={isEmpty:e.o,put:e.r,take:e.r};function c(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments[1],r=new Array(n),e=0,o=0,c=0,u=function(t){r[o]=t,o=(o+1)%n,e++},i=function(){if(0!=e){var t=r[c];return r[c]=null,e--,c=(c+1)%n,t}},a=function(){for(var n=[];e;)n.push(i());return n};return{isEmpty:function(){return 0==e},put:function(i){if(e<n)u(i);else{var f=void 0;switch(t){case 1:throw new Error("Channel's Buffer overflow!");case 3:r[o]=i,c=o=(o+1)%n;break;case 4:f=2*n,r=a(),e=r.length,o=r.length,c=0,r.length=f,n=f,u(i)}}},take:i,flush:a}}var u={none:function(){return o},fixed:function(n){return c(n,1)},dropping:function(n){return c(n,2)},sliding:function(n){return c(n,3)},expanding:function(n){return c(n,4)}}},oZtI:function(n,t,r){"use strict";r.d(t,"e",(function(){return e.i})),r.d(t,"c",(function(){return e.g})),r.d(t,"a",(function(){return e.b})),r.d(t,"b",(function(){return e.d})),r.d(t,"d",(function(){return e.h})),r.d(t,"f",(function(){return c})),r.d(t,"g",(function(){return u}));var e=r("tw9P"),o=r("q09E");function c(n,t){for(var r=arguments.length,c=Array(r>2?r-2:0),u=2;u<r;u++)c[u-2]=arguments[u];return e.f.apply(void 0,[o.a,n,t].concat(c))}function u(n,t){for(var r=arguments.length,c=Array(r>2?r-2:0),u=2;u<r;u++)c[u-2]=arguments[u];return e.f.apply(void 0,[o.b,n,t].concat(c))}},q09E:function(n,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return g}));var e=r("Ev6p"),o={done:!0,value:void 0},c={};function u(n){return e.n.channel(n)?"channel":Array.isArray(n)?String(n.map((function(n){return String(n)}))):String(n)}function i(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"iterator",u=void 0,i=t;function a(t,r){if(i===c)return o;if(r)throw i=c,r;u&&u(t);var e=n[i](),a=e[0],f=e[1],l=e[2];return u=l,(i=a)===c?o:f}return Object(e.q)(a,(function(n){return a(null,n)}),r,!0)}var a=r("tw9P"),f=r("92lH");function l(n,t){for(var r=arguments.length,e=Array(r>2?r-2:0),o=2;o<r;o++)e[o-2]=arguments[o];var l={done:!1,value:Object(a.i)(n)},s=function(n){return{done:!1,value:a.f.apply(void 0,[t].concat(e,[n]))}},d=void 0,g=function(n){return d=n};return i({q1:function(){return["q2",l,g]},q2:function(){return d===f.a?[c]:["q1",s(d)]}},"q1","takeEvery("+u(n)+", "+t.name+")")}function s(n,t){for(var r=arguments.length,e=Array(r>2?r-2:0),o=2;o<r;o++)e[o-2]=arguments[o];var l={done:!1,value:Object(a.i)(n)},s=function(n){return{done:!1,value:a.f.apply(void 0,[t].concat(e,[n]))}},d=function(n){return{done:!1,value:Object(a.e)(n)}},g=void 0,v=void 0,h=function(n){return g=n},b=function(n){return v=n};return i({q1:function(){return["q2",l,b]},q2:function(){return v===f.a?[c]:g?["q3",d(g)]:["q1",s(v),h]},q3:function(){return["q1",s(v),h]}},"q1","takeLatest("+u(n)+", "+t.name+")")}var d=r("mbVZ");function g(n,t,r){for(var o=arguments.length,l=Array(o>3?o-3:0),s=3;s<o;s++)l[s-3]=arguments[s];var g=void 0,v=void 0,h={done:!1,value:Object(a.a)(t,d.a.sliding(1))},b=function(){return{done:!1,value:Object(a.i)(v)}},p=function(n){return{done:!1,value:a.f.apply(void 0,[r].concat(l,[n]))}},y={done:!1,value:Object(a.d)(e.j,n)},m=function(n){return g=n},j=function(n){return v=n};return i({q1:function(){return["q2",h,j]},q2:function(){return["q3",b(),m]},q3:function(){return g===f.a?[c]:["q4",p(g)]},q4:function(){return["q2",y]}},"q1","throttle("+u(t)+", "+r.name+")")}},tw9P:function(n,t,r){"use strict";r.d(t,"i",(function(){return a})),r.d(t,"g",(function(){return f})),r.d(t,"b",(function(){return l})),r.d(t,"d",(function(){return d})),r.d(t,"f",(function(){return g})),r.d(t,"e",(function(){return v})),r.d(t,"h",(function(){return h})),r.d(t,"a",(function(){return b})),r.d(t,"c",(function(){return y}));var e=r("Ev6p"),o=Object(e.u)("IO"),c="TAKE",u="\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)",i=function(n,t){var r;return(r={})[o]=!0,r[n]=t,r};function a(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"*";if(arguments.length&&Object(e.g)(arguments[0],e.n.notUndef,"take(patternOrChannel): patternOrChannel is undefined"),e.n.pattern(n))return i(c,{pattern:n});if(e.n.channel(n))return i(c,{channel:n});throw new Error("take(patternOrChannel): argument "+String(n)+" is not valid channel or a valid pattern")}a.maybe=function(){var n=a.apply(void 0,arguments);return n[c].maybe=!0,n};a.maybe;function f(n,t){return arguments.length>1?(Object(e.g)(n,e.n.notUndef,"put(channel, action): argument channel is undefined"),Object(e.g)(n,e.n.channel,"put(channel, action): argument "+n+" is not a valid channel"),Object(e.g)(t,e.n.notUndef,"put(channel, action): argument action is undefined")):(Object(e.g)(n,e.n.notUndef,"put(action): argument action is undefined"),t=n,n=null),i("PUT",{channel:n,action:t})}function l(n){return i("ALL",n)}function s(n,t,r){Object(e.g)(t,e.n.notUndef,n+": argument fn is undefined");var o=null;if(e.n.array(t)){var c=t;o=c[0],t=c[1]}else if(t.fn){var u=t;o=u.context,t=u.fn}return o&&e.n.string(t)&&e.n.func(o[t])&&(t=o[t]),Object(e.g)(t,e.n.func,n+": argument "+t+" is not a function"),{context:o,fn:t,args:r}}function d(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];return i("CALL",s("call",n,r))}function g(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];return i("FORK",s("fork",n,r))}function v(){for(var n=arguments.length,t=Array(n),r=0;r<n;r++)t[r]=arguments[r];if(t.length>1)return l(t.map((function(n){return v(n)})));var o=t[0];return 1===t.length&&(Object(e.g)(o,e.n.notUndef,"cancel(task): argument task is undefined"),Object(e.g)(o,e.n.task,"cancel(task): argument "+o+" is not a valid Task object "+u)),i("CANCEL",o||e.d)}function h(n){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return 0===arguments.length?n=e.l:(Object(e.g)(n,e.n.notUndef,"select(selector,[...]): argument selector is undefined"),Object(e.g)(n,e.n.func,"select(selector,[...]): argument "+n+" is not a function")),i("SELECT",{selector:n,args:r})}function b(n,t){return Object(e.g)(n,e.n.notUndef,"actionChannel(pattern,...): argument pattern is undefined"),arguments.length>1&&(Object(e.g)(t,e.n.notUndef,"actionChannel(pattern, buffer): argument buffer is undefined"),Object(e.g)(t,e.n.buffer,"actionChannel(pattern, buffer): argument "+t+" is not a valid buffer")),i("ACTION_CHANNEL",{pattern:n,buffer:t})}f.resolve=function(){var n=f.apply(void 0,arguments);return n.PUT.resolve=!0,n},f.sync=Object(e.k)(f.resolve,Object(e.w)("put.sync","put.resolve"));var p=function(n){return function(t){return t&&t[o]&&t[n]}},y={take:p(c),put:p("PUT"),all:p("ALL"),race:p("RACE"),call:p("CALL"),cps:p("CPS"),fork:p("FORK"),join:p("JOIN"),cancel:p("CANCEL"),select:p("SELECT"),actionChannel:p("ACTION_CHANNEL"),cancelled:p("CANCELLED"),flush:p("FLUSH"),getContext:p("GET_CONTEXT"),setContext:p("SET_CONTEXT")}},udQi:function(n,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"c",(function(){return i})),r.d(t,"b",(function(){return f}));var e=[],o=0;function c(n){try{i(),n()}finally{a()}}function u(n){e.push(n),o||(i(),f())}function i(){o++}function a(){o--}function f(){a();for(var n=void 0;!o&&void 0!==(n=e.shift());)c(n)}}}]);