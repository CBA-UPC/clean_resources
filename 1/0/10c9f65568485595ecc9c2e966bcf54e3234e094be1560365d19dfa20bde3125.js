<!d="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Camsoda</title>
	<style>html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,pel,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{border:0;font-size:100%;font:inherit;vertical-align:baseline;margin:0;padding:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:blone}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:none}table{border-collapse:collapse;border-spacing:0}</style>
	<style>body {position:relative;background-color:#ececec;} .d-none {display:none !important;} #wrap {position:fixed;top:0;bottom:0;left:0;right:0;} #wrap a {display:block;width:100%;height:100%;position:relative;font-family:Source Sans Pro,Segoe UI,Droid Sans,Tahoma,Arial,sans-serif;} #wrap a.flex {display:flex;flex-direction:column;align-items:center;justify-content:center;text-decoration:none;color:#02b4fa;font-size:30px;text-align:center;} #wrap video {width:100%;height:100%;object-fit:contain;position:relative;} .blurb {margin} .slogan {font-size:60%} .pink {color:#f841b5} .loading {position:absolute;top:0;right:0;left:0;bottom:0;display:flex;align-items:center;justify-content:center;} .loader {font-size:10px;margin:50px auto;text-indent:-9999em;width:100px;height:100px;border-radius:50%;background:#ffffff;background:-moz-linear-gradient(left,#ffffff 10%,rgba(255,255,255,0) 42%);background:-webkit-linear-gradient(left,#ffffff 10%,rgba(255,255,255,0) 42%);background:-o-linear-gradient(left,#ffffff 10%,rgba(255,255,255,0) 42%);background:-ms-linear-gradient(left,#ffffff 10%,rgba(255,255,255,0) 42%);background:linear-gradient(to right,#ffffff 10%,rgba(255,255,255,0) 42%);position:relative;-webkit-animation:load3 1.4s infinite linear;animation:load3 1.4s infinite linear;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);}.loader:before{width:50%;height:50%;background:#ffffff;border-radius:100% 0 0 0;position:absolute;top:0;left:0;content:'';}.loader:after{background:#ececec;width:75%;height:75%;border-radius:50%;content:'';margin:auto;position:absolute;top:0;left:0;bottom:0;right:0;}@-webkit-keyframes load3{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes load3{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}</style>
	<style>
	 #wrap a > .watch-now {position:absolute;bottom:10px;left:0;right:0;user-select:none;}
	 #wrap a > .watch-now > span {background-color:#f841b5;border-radius:10px;color:#FFF;padding:6px;font-size:14px;}
	 @media only screen and (min-width: 299px) {
	     #wrap a > .watch-now {bottom:20px;}
	     #wrap a > .watch-now > span {padding:10px;font-size:20px;}
	 }
	 </style>
        <style>
	 #wrap .logo {position:absolute;top:4%;left:4%;right:0;display:flex;align-items:center;justify-content:flex-start;}
	 #wrap .logo img {width:30%;max-width:100%;max-height:100%;}
        </style>
    </head>
    <body>
	<div id="wrap">
	    <div id="loading-loader" class="loading"><div class="loader"></div></div>
	    <a id="wrap-error" target="_blank" class="d-none flex" href="https://www.camsoda.com/chloedee?noterms=1&id=cybermike2&cmp=adxad-900x250-WW">
		CamSoda
		<div class="slogan">World's best free live sex cams</div>
	    </a>
	    <a id="wrap-offline" target="_blank" class="d-none flex" href="https://www.camsoda.com/chloedee?noterms=1&id=cybermike2&cmp=adxad-900x250-WW">
		<div id="wrap-offline-text" class="pink"></div>
		<div class="blurb">
		    CamSoda
		    <div class="slogan">World's best free live sex cams</div>
		</div>
	    </a>
	    <a id="wrap-stream" target="_blank" class="d-none flex" href="https://www.camsoda.com/chloedee?noterms=1&id=cybermike2&cmp=adxad-900x250-WW">
		<div class="loading"><div class="loader"></div></div>
		<video id="video" autoplay muted playsInline loop></video>
                <div class="logo"><img src="https://cachew.camsoda.com/assets/img/camsoda-logo-160x50.png"></div>
		<div class="watch-now">
		    <span>
			Watch Now
		    </span>
		</div>
	    </a>
	</div>
	<script>
	 function hideError() {
	     document.getElementById('wrap-error').classList.add('d-none');
	 }
	 function showError() {
	     hideMedia();
	     document.getElementById('loading-loader').classList.add('d-none');
	     document.getElementById('wrap-error').classList.remove('d-none');
	     setTimeout(function() {
		 window.location.reload(true);
	     }, 20000);
	 }

	 var mediaUrl = 'https://media.camsoda.com/media/vthumbs/chloedee.mp4';
	 var interval;
	 function hideMedia() {
	     document.getElementById('wrap-stream').classList.add('d-none');
	     if (interval) {
		 clearInterval(interval);
		 interval = null;
	     }
	 }
	 var lastLoad = Date.now();
	 var video = document.getElementById('video');
	 var source = document.createElement('source');
	 var isAppended = false;
	 video.addEventListener('error', function(event) {
	     showError();
	 }, true);
	 function showMedia() {
	     if (!mediaUrl.length) {
		 showError();
		 return;
	     }
	     hideError();
	     document.getElementById('wrap-stream').classList.remove('d-none');
	     function setSource() {
		 source.setAttribute('src', mediaUrl+'?cb='+Math.floor(Date.now()/1000));
		 source.setAttribute('type', 'video/mp4');
	     }
	     function videoPlay() {
		 var playPromise = video.play();
		 if (playPromise !== undefined) {
		     playPromise.then(() => {
                         document.getElementById('loading-loader').classList.add('d-none');
                         document.getElementById('logo').classList.remove('d-none');
                     }).catch((error) => {
		     });
		 }
	     }
	     setSource();
	     if (!isAppended) {
		 video.appendChild(source);
		 isAppended = true;
	     }
	     videoPlay();

	     if (interval) {
		 clearInterval(interval);
	     }
	     interval = setInterval(function() {
		 if (60000 < Date.now() - lastLoad) {
		     window.location.reload(true);
		 } else {
		     video.pause();
		     setSource();
		     video.load();
		     videoPlay();
		 }
	     }, 15000);
	 }
	 showMedia();

	 function handleVisibility() {
	     var hidden, visibilityChange;
	     if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
		 hidden = "hidden";
		 visibilityChange = "visibilitychange";
	     } else if (typeof document.msHidden !== "undefined") {
		 hidden = "msHidden";
		 visibilityChange = "msvisibilitychange";
	     } else if (typeof document.webkitHidden !== "undefined") {
		 hidden = "webkitHidden";
		 visibilityChange = "webkitvisibilitychange";
	     }
	     function handleVisibilityChange() {
		 if (!document[hidden]) {
		     showMedia();
		 }
	     }
	     if (typeof document.addEventListener !== "undefined" && hidden !== undefined) {
		 document.addEventListener(visibilityChange, handleVisibilityChange, false);
	     }
	 }

	 handleVisibility();
	</script>
    </body>
</html>
