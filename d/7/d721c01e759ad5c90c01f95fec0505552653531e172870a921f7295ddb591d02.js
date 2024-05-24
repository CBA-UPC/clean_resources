if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
	navigator.serviceWorker.register(superpwa_sw.url)
	.then(function(registration) { console.log('SuperPWA service worker ready'); 
		if(registration.active)
		{
			registration.update(); 
		}
		subOnlineOfflineIndicator();
	})
	.catch(function(error) { console.log('Registration failed with ' + error); });

	/****************** Start : Online/Offline Indicator ******************/

	// Variables & default values
	const snackbarTimeToHide = 5000; // 5s
	let isOffline = false,
		snackbarTimeoutHide = null,
		goOfflineMsg = 'You\'re currently offline',
		backOnlineMsg = 'You\'re back online <a href="javascript:location.reload()">refresh</a>';

	/**
	* Subscribe to online offline indicator
	*/
	function subOnlineOfflineIndicator() {
		injectSnackbarHtml();
		injectSnackbarCss();
		runOnlineOfflineIndicator();
	}

	/**
 	* Inject html of snackbar
 	*/
	function injectSnackbarHtml() {
		const container = document.createElement('div');
		container.className = 'snackbar';

		const parag = document.createElement('p');
		parag.id = 'snackbar-msg';
		container.appendChild(parag);

		const button = document.createElement('button');
		button.type = 'button';
		button.className = 'snackbar-close';
		button.setAttribute('aria-label', 'snackbar-close');
		button.addEventListener('click', hideSnackbar);
		button.innerHTML = '&times;';

		container.appendChild(button);

		document.body.appendChild(container);

		window.addEventListener('online', runOnlineOfflineIndicator);
		window.addEventListener('offline', runOnlineOfflineIndicator);

		window.addEventListener('fetch',() => console.log("fetch"));

		// Clean snackbarTimeToHide varibale when user hover on the snackbar to prevent hide it
		container.addEventListener('mouseover', function () {
			if (snackbarTimeoutHide !== null)
				clearTimeout(snackbarTimeoutHide);
		});

		// Call setTimeout and set snackbarTimeToHide variable to hide snackbar
		container.addEventListener('mouseout', function () {
			if (snackbarTimeoutHide !== null)
				snackbarTimeoutHide = setTimeout(hideSnackbar, snackbarTimeToHide / 2);
		});
	}

	/**
 	* Inject style css of snackbar
 	*/
	function injectSnackbarCss() {
		const css = `body.snackbar--show .snackbar {
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
		}`;
			
		const head = document.head || document.getElementsByTagName('head')[0];
		const style = document.createElement('style');

		style.type = 'text/css';
		if (style.styleSheet) {
			// This is required for IE8 and below.
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}

		head.appendChild(style);
	}

	/**
 	* Show the state of the mode of connectivity to the user :  back onLine | go offLine
 	*/
	function runOnlineOfflineIndicator() {
		if (navigator.onLine) {
			if (isOffline === true) {
				showSnackbar(backOnlineMsg);
			}
			isOffline = false;
		} else {
			showSnackbar(goOfflineMsg);
			isOffline = true;
		}
	}

	/**
 	* Show with the given message in the snackbar
 	* @param {String} msg 
 	*/
	function showSnackbar(msg) {
		document.getElementById('snackbar-msg').innerHTML = msg;
		document.body.classList.add('snackbar--show');

		clearTimeout(snackbarTimeoutHide);
		snackbarTimeoutHide = setTimeout(hideSnackbar, snackbarTimeToHide);
	}

	/**
	* Hide snackbar
	*/
	function hideSnackbar() {
		document.body.classList.remove('snackbar--show');
	}

	/****************** End : Online/Offline Indicator ******************/

	var deferredPrompt;
	window.addEventListener('beforeinstallprompt', function(e){
		deferredPrompt = e;
		if(deferredPrompt != null || deferredPrompt != undefined){
			if(superpwa_sw.disable_addtohome==1){
				deferredPrompt.preventDefault();
			}

			var a2hsBanner = document.getElementsByClassName("superpwa-sticky-banner");
			if(a2hsBanner.length){
				deferredPrompt.preventDefault();
				//Disable on desktop
				if(superpwa_sw.enableOnDesktop!=1 && !window.mobileCheck()){return ;}
				if(typeof super_check_bar_closed_or_not == 'function' && !super_check_bar_closed_or_not()){return ;}
				for (var i = 0; i < a2hsBanner.length; i++) {
					var showbanner = a2hsBanner[i].getAttribute("data-show");
					a2hsBanner[i].style.display="flex";
				}
			}
			document.cookie = "hidecta=no";
		}
	})

window.addEventListener('appinstalled', function(evt){
		var a2hsBanner = document.getElementsByClassName("superpwa-sticky-banner");
		if(a2hsBanner.length){
			for (var i = 0; i < a2hsBanner.length; i++) {
				var showbanner = a2hsBanner[i].getAttribute("data-show");
					    document.cookie = "hidecta=yes";
					a2hsBanner[i].style.display="none";
			    }
			}
	});
	
	var a2hsviaClass = document.getElementsByClassName("superpwa-add-via-class");
    if(a2hsviaClass !== null){
        for (var i = 0; i < a2hsviaClass.length; i++) {
          a2hsviaClass[i].addEventListener("click", addToHome); 
      }
    }

    function addToHome(){
		if(!deferredPrompt){return ;}
		deferredPrompt.prompt(); 
		deferredPrompt.userChoice.then(function(choiceResult) {
			if (choiceResult.outcome === "accepted") {
				var a2hsBanner = document.getElementsByClassName("superpwa-sticky-banner");
				if(a2hsBanner){
					for (var i = 0; i < a2hsBanner.length; i++) {
						var showbanner = a2hsBanner[i].getAttribute("data-show");
						a2hsBanner[i].style.display="none";
					}
				}//a2hsBanner if
				console.log("User accepted the prompt");
			}else{
				console.log("User dismissed the prompt");
			}
			deferredPrompt = null;
		});
	} // function closed addToHome


  });
}
window.mobileCheck = function() {
	  let check = false;
	  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	  return check;
	};

 window.addEventListener('load', function() {
     var manifestLink = document.querySelectorAll("link[rel='manifest']");
	    if(manifestLink.length > 1){
	        for (var i = 0; i < manifestLink.length; i++) {
	        	var href = manifestLink[i].getAttribute("href");
	        	if(href.indexOf("superpwa-manifest.json") == -1){
                     manifestLink[i].remove();
	        	}
	        }
	    }
		// fix for href="#" in Ios safari standalone
		var ua = window.navigator.userAgent;
		var iOS = ua.match(/iPad/i) || ua.match(/iPhone/i);
		var webkit = ua.match(/WebKit/i);
		var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

		if(iOSSafari && (window.matchMedia('(display-mode: standalone)').matches)){
		setTimeout(function(){
			const anchor_fix = document.querySelectorAll("a[href='#']");
			if(anchor_fix.length > 1){
				for (var i = 0; i < anchor_fix.length; i++) {
				 anchor_fix[i].setAttribute("href","javascript:void(0);");
				}
			}
		},600);
	}

 });a?536870912:a};var Va={},Wa={};function Xa(a){return!(!a||"object"!==typeof a||a.I!==Wa)}function M(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var Ya,Za=!Ba;function $a(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=H(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;I(a,d|1);return!0}var N,ab=[];I(ab,55);N=Object.freeze(ab);Object.freeze(new function(){});Object.freeze(new function(){});var O=0,P=0;function bb(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=w(cb(c,a)),b=c.next().value,a=c.next().value,c=b);O=c>>>0;P=a>>>0}function db(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else La()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+eb(c)+eb(a));return c}
function eb(a){a=String(a);return"0000000".slice(a.length)+a}function fb(){var a=O,b=P;b&2147483648?La()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(cb(a,b)),a=b.next().value,b=b.next().value,a="-"+db(a,b)):a=db(a,b);return a}function cb(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]};function gb(a){a=Error(a);a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity="warning";return a};var hb=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function ib(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))};var jb;function kb(a,b){jb=b;a=new a(b);jb=void 0;return a}
function Q(a,b,c){null==a&&(a=jb);jb=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=H(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var f=c.length;if(f){var k=f-1;if(M(c[k])){d|=256;b=k-(+!!(d&512)-1);if(1024<=b)throw Error();d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,f-(+!!(d&512)-1));if(1024<b)throw Error();d=d&-16760833|(b&1023)<<14}}}I(a,d);return a};function lb(a,b){return mb(b)}
function mb(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a){if(Array.isArray(a))return Za||!$a(a,void 0,9999)?a:void 0;if(Ja&&null!=a&&a instanceof Uint8Array){if(Ka){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else{void 0===b&&(b=0);if(!Ia){Ia={};c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");d=
["+/=","+/","-_=","-_.","-_"];for(var f=0;5>f;f++){var k=c.concat(d[f].split(""));Ha[f]=k;for(var m=0;m<k.length;m++){var e=k[m];void 0===Ia[e]&&(Ia[e]=m)}}}b=Ha[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(f=k=0;k<a.length-2;k+=3){var g=a[k],h=a[k+1];e=a[k+2];m=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|e>>6];e=b[e&63];c[f++]=m+g+h+e}m=0;e=d;switch(a.length-k){case 2:m=a[k+1],e=b[(m&15)<<2]||d;case 1:a=a[k],c[f]=b[a>>2]+b[(a&3)<<4|m>>4]+e+d}a=c.join("")}return a}}}return a};function nb(a,b,c){a=F(a);var d=a.length,f=b&256?a[d-1]:void 0;d+=f?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(f){b=a[b]={};for(var k in f)Object.prototype.hasOwnProperty.call(f,k)&&(b[k]=c(f[k]))}return a}function ob(a,b,c,d,f,k){if(null!=a){if(Array.isArray(a))a=f&&0==a.length&&H(a)&1?void 0:k&&H(a)&2?a:pb(a,b,c,void 0!==d,f,k);else if(M(a)){var m={},e;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(m[e]=ob(a[e],b,c,d,f,k));a=m}else a=b(a,d);return a}}
function pb(a,b,c,d,f,k){var m=d||c?H(a):0;d=d?!!(m&32):void 0;a=F(a);for(var e=0;e<a.length;e++)a[e]=ob(a[e],b,c,d,f,k);c&&c(m,a);return a}function qb(a){return a.v===Va?a.toJSON():mb(a)};function rb(a,b,c){c=void 0===c?Ta:c;if(null!=a){if(Ja&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=H(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?(I(a,(d|34)&-12293),a):pb(a,rb,d&4?Ta:c,!0,!1,!0)}a.v===Va&&(c=a.h,d=L(c),a=d&2?a:kb(a.constructor,sb(c,d,!0)));return a}}function sb(a,b,c){var d=c||b&2?Ta:Sa,f=!!(b&32);a=nb(a,b,function(k){return rb(k,f,d)});Oa(a,32|(c?2:0));return a};function tb(a,b,c){var d=a.h,f=L(d);if(f&2)throw Error();ub(d,f,b,c);return a}function ub(a,b,c,d){var f=Ua(b);if(c>=f){var k=b;if(b&256)var m=a[a.length-1];else{if(null==d)return k;m=a[f+(+!!(b&512)-1)]={};k|=256}m[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);k!==b&&I(a,k);return k}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}function vb(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}function wb(a,b,c){null==c&&(c=void 0);return tb(a,b,c)}
function xb(a,b){a=J(a,2,!!(2&b));a=J(a,32,!!(32&b)&&!0);return a=J(a,2048,!1)};function R(a,b,c){this.h=Q(a,b,c)}R.prototype.toJSON=function(){if(Ya)var a=yb(this,this.h,!1);else a=pb(this.h,qb,void 0,void 0,!1,!1),a=yb(this,a,!0);return a};function S(a){Ya=!0;try{return JSON.stringify(a.toJSON(),lb)}finally{Ya=!1}}R.prototype.v=Va;R.prototype.toString=function(){return yb(this,this.h,!1).toString()};
function yb(a,b,c){var d=a.constructor.D,f=L(c?a.h:b),k=Ua(f),m=!1;if(d&&Za){if(!c){b=F(b);var e;if(b.length&&M(e=b[b.length-1]))for(m=0;m<d.length;m++)if(d[m]>=k){Object.assign(b[b.length-1]={},e);break}m=!0}k=b;c=!c;e=L(a.h);a=Ua(e);e=+!!(e&512)-1;for(var g,h,l=0;l<d.length;l++)if(h=d[l],h<a){h+=e;var r=k[h];null==r?k[h]=c?N:Ra():c&&r!==N&&Pa(r)}else g||(r=void 0,k.length&&M(r=k[k.length-1])?g=r:k.push(g={})),r=g[h],null==g[h]?g[h]=c?N:Ra():c&&r!==N&&Pa(r)}g=b.length;if(!g)return b;var p;if(M(k=
b[g-1])){a:{var n=k;c={};a=!1;for(var q in n)if(Object.prototype.hasOwnProperty.call(n,q)){e=n[q];if(Array.isArray(e)){l=e;if(!Na&&$a(e,d,+q)||!Ma&&Xa(e)&&0===e.size)e=null;e!=l&&(a=!0)}null!=e?c[q]=e:a=!0}if(a){for(var u in c){n=c;break a}n=null}}n!=k&&(p=!0);g--}for(f=+!!(f&512)-1;0<g;g--){q=g-1;k=b[q];if(!(null==k||!Na&&$a(k,d,q-f)||!Ma&&Xa(k)&&0===k.size))break;var x=!0}if(!p&&!x)return b;var t;m?t=b:t=Array.prototype.slice.call(b,0,g);b=t;m&&(b.length=g);n&&b.push(n);return b};function V(a){return function(b){if(null==b||""==b)b=new a;else{b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);Oa(b,32);b=kb(a,b)}return b}};function zb(a){this.h=Q(a)}z(zb,R);var Ab=V(zb);function Bb(a){this.h=Q(a)}z(Bb,R);var Cb=V(Bb);Bb.D=[1,2];function Db(a){this.h=Q(a)}z(Db,R);function Eb(a){var b=new Db;if(null!=a){if(!Number.isFinite(a))throw gb("enum");a|=0}return tb(b,1,a)};function W(a){this.h=Q(a)}z(W,R);function Fb(a,b){return wb(a,2,b)}W.prototype.setCmpModeObject=function(a){return wb(this,3,a)};W.prototype.setExperimentsObject=function(a){return wb(this,5,a)};var Gb=V(W);function X(){this.o=this.g=null;this.B=!1}X.prototype.setCmpModeObject=function(a){try{this.g=Ab(a)}catch(b){}};X.prototype.setExperimentsObject=function(a){try{this.o=Cb(a)}catch(b){}};X.prototype.getSerializedReturnMessageForCommand=function(a){if(this.B)return S(Fb(new W,Eb(4)));switch(a){case "loaded":return S(Hb(this));case "prov":return S(Hb(this));default:return this.getSerializedReturnMessageForInvalidCommand()}};
X.prototype.getSerializedReturnMessageForInvalidCommand=function(){return S(Fb(new W,Eb(2)))};X.prototype.setError=function(){this.B=!0};function Hb(a){return Fb((new W).setCmpModeObject(a.g).setExperimentsObject(a.o),Eb(1))}function Ib(a){var b=a.__fcInternalApiManager;if("undefined"!==typeof b)return b;b=new X;return a.__fcInternalApiManager=b};function Y(a){this.h=Q(a)}z(Y,R);var Jb=V(Y);function Z(a){this.h=Q(a)}z(Z,R);var Kb=V(Z);Z.D=[1];function Lb(a,b){this.s=b;this.A=new Map;this.u=new Map;this.m=0;this.C=Ib(a);this.u.set("prov",!0)}
Lb.prototype.push=function(a,b){b=b&&"object"===typeof b&&"function"===typeof b.cb?b:{cb:b};if(!ya(a)){var c=this.C.getSerializedReturnMessageForInvalidCommand();Mb(this,b.cb,c);return this.m}if(!this.u.get(a))return b=b.cb,c=this.A.get(a)||[],c.push(b),this.A.set(a,c),this.m;c=this.C.getSerializedReturnMessageForCommand(a);switch(a){case "prov":if(b.spsp){a=Jb(b.spsp);var d=new Z;this.s.F.has(18)&&(d=(d=this.s.F.get(18))?Kb(d):new Z);var f=d.h,k=L(f);if(k&2)throw Error();var m,e=!!(2&k),g=e?1:2,
h=1===g;g=2===g;m&&(m=!e);a:{if(1>=Ua(k)){if(k&256){e=f[f.length-1][1];break a}}else if(e=1+(+!!(k&512)-1),e<f.length){e=f[e];break a}e=void 0}e=Array.isArray(e)?e:N;var l=H(e),r=!!(4&l);if(!r){var p=l;0===p&&(p=xb(p,k));p=J(p,1,!0);l=e;var n=k,q=!!(2&p);q&&(n=J(n,2,!0));for(var u=!q,x=!0,t=0,aa=0;t<l.length;t++){var y=l[t];var T=Y,ia=n;if(null==y||"object"!==typeof y||y.v!==Va)if(Array.isArray(y)){var U=H(y),K=U;0===K&&(K|=ia&32);K|=ia&2;K!==U&&I(y,K);y=new T(y)}else y=void 0;y instanceof Y&&(q||
(T=!!(H(y.h)&2),u&&(u=!T),x&&(x=T)),l[aa++]=y)}aa<t&&(l.length=aa);p=J(p,4,!0);p=J(p,16,x);p=J(p,8,u);I(l,p);q&&Object.freeze(l);l=p}p=!!(8&l)||h&&!e.length;if(m&&!p){vb(l)&&(e=F(e),l=xb(l,k),k=ub(f,k,1,e));m=e;for(p=0;p<m.length;p++)n=m[p],q=n.h,u=L(q),q=u&2?kb(n.constructor,sb(q,u,!1)):n,n!==q&&(m[p]=q);l=J(l,8,!0);l=J(l,16,!m.length);I(m,l)}vb(l)||(m=l,h&&(l=J(l,!e.length||16&l&&(!r||32&l)?2:2048,!0)),l!==m&&I(e,l),h&&Object.freeze(e));g&&vb(l)&&(e=F(e),l=xb(l,k),I(e,l),ub(f,k,1,e));f=e;a=null!=
a?a:new Y;f.push(a);H(a.h)&2?Qa(f,8):Qa(f,16);S(d)}Mb(this,b.cb,c);break;case "loaded":Mb(this,b.cb,c)}return this.m};Lb.prototype.executeCommandType=function(a){if(!ya(a))return this.m;this.u.set(a,!0);for(var b=this.A.get(a)||[];0<b.length;){var c=b.shift();"function"===typeof c&&this.push(a,c)}return this.m};Lb.prototype.executeAllRemainingCommands=function(){for(var a=w(Object.values(xa)),b=a.next();!b.done;b=a.next())this.executeCommandType(b.value);return this.m};
function Mb(a,b,c){"function"===typeof b&&(b(c),a.m++)}function Nb(a,b){var c=za(a).__fci||[];if(!Array.isArray(c))return c;a=new Lb(a,b);if(0===c.length%2)for(b=0;b<c.length-1;b+=2){var d=c[b],f=c[b+1];"string"!==typeof d||"function"!==typeof f&&"object"!==typeof f||a.push(d,f)}c=!0;c=void 0===c?!1:c;b=za(null);if(!b.hasOwnProperty("__fci")||c)b.__fci=a;return a};function Ob(a){this.g=window;this.s=a;this.o=null}Ob.prototype.load=function(){Nb(this.g,this.s);Pb(this)};function Pb(a){a.g.__fcInternalApiPostMessageReady||(a.o=function(b){Qb(a,b)},a.g.addEventListener("message",a.o),a.g.__fcInternalApiPostMessageReady=!0)}
function Qb(a,b){var c=b.data.__fciCall;if(c&&ya(c.command)&&"number"===typeof c.callId&&("undefined"===typeof c.spsp||"string"===typeof c.spsp)){var d={cb:function(f){try{var k=Gb(f),m=c.callId;if(null==m)var e=m;else{var g=!!g;f=typeof m;if(!("number"===f?Number.isFinite(m):"string"!==f?0:hb.test(m)))throw gb("int64");if("string"===typeof m){var h=m,l=Math.trunc(Number(h));if(Number.isSafeInteger(l))var r=String(l);else{var p=h.indexOf(".");-1!==p&&(h=h.substring(0,p));if(ib(h))var n=h;else{if(16>
h.length)bb(Number(h));else if(La()){var q=BigInt(h);O=Number(q&BigInt(4294967295))>>>0;P=Number(q>>BigInt(32)&BigInt(4294967295))}else{var u=+("-"===h[0]);P=O=0;var x=h.length,t=u;for(q=(x-u)%6+u;q<=x;t=q,q+=6){var aa=Number(h.slice(t,q));P*=1E6;O=1E6*O+aa;4294967296<=O&&(P+=Math.trunc(O/4294967296),P>>>=0,O>>>=0)}if(u){var y=w(cb(O,P)),T=y.next().value,ia=y.next().value;O=T;P=ia}}n=fb()}r=n}}else{if(g){t=m;t=Math.trunc(t);if(Number.isSafeInteger(t))var U=String(t);else{var K=String(t);ib(K)?U=K:
(bb(t),U=fb())}h=U}else{n=m;n=Math.trunc(n);if(Number.isSafeInteger(n))t=n;else{bb(n);u=O;x=P;if(n=x&2147483648)u=~u+1>>>0,x=~x>>>0,0==u&&(x=x+1>>>0);u=4294967296*x+(u>>>0);t=n?-u:u}h=t}r=h}e=r}var ja=tb(k,1,e)}catch(fc){return}ja={__fciReturn:S(ja)};b.source&&"function"===typeof b.source.postMessage&&b.source.postMessage(ja,b.origin);return ja}};c.spsp&&(d.spsp=c.spsp);Nb(a.g,a.s).push(c.command,d)}};var Rb;function Sb(a){this.g=a}Sb.prototype.toString=function(){return this.g+""};function Tb(){var a=Ub;return a instanceof Sb&&a.constructor===Sb?a.g:"type_error:TrustedResourceUrl"}var Vb={};function Wb(a){if(void 0===Rb){var b=null;var c=B.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:wa,createScript:wa,createScriptURL:wa})}catch(d){B.console&&B.console.error(d.message)}Rb=b}else Rb=b}a=(b=Rb)?b.createScriptURL(a):a;return new Sb(a,Vb)};function Xb(){this.g=B.top.document||B.document||document}function Yb(a){a=a.g;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};/*

 SPDX-License-Identifier: Apache-2.0
*/
function Zb(a){var b=ra.apply(1,arguments);if(0===b.length)return Wb(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return Wb(c)};var $b=ha(['javascript:""']),ac=ha(["about:blank"]),Ub=Ga?Zb($b):Zb(ac);function bc(){this.g=new Xb}function cc(a,b){if(!dc(a,b)){var c=Yb(a.g);c.name=b;c.src=Tb().toString();c.style.display="none";c.style.width="0px";c.style.height="0px";c.style.border="none";c.style.zIndex="-1000";c.style.left="-1000px";c.style.top="-1000px";var d=function(){a.g.g.body?a.g.g.body.appendChild(c):B.setTimeout(d,5)};d()}}
function dc(a,b){return Fa(a.g.g.getElementsByTagName("IFRAME"),function(c){return c.name===b})};function ec(){this.F=new Map};(function(a,b){B[a]=function(){var c=ra.apply(0,arguments);B[a]=function(){};b.call.apply(b,[null].concat(c instanceof Array?c:ka(w(c))))}})("__an6na521li18__",function(a){var b=B.btoa(a+"loader_js"),c=B.btoa(Date.now().toString());ua(b,c);a=B.btoa(a+"cached_js");b=B.btoa(Date.now().toString());ua(a,b);a=new ec;(new Ob(a)).load();Ib(window).setError();Nb(window,a).executeAllRemainingCommands();a=new bc;cc(a,"googlefcInactive");cc(a,"googlefcLoaded")});}).call(this);

__an6na521li18__('55451a431a59257a');