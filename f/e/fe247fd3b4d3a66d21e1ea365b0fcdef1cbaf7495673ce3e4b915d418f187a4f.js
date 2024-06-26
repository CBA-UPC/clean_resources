<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <!--[if lte IE 8]><script src="//static.javhd.com/h5/files/js/videojs-ie8.min.js"></script><![endif]-->
    <link href="//static.javhd.com/h5/files/css/style.css" rel="stylesheet">
    <style>
       .container:hover .play {display:block !important;}
    </style>
    <script src/mobile_video_player.min.js"></script>
    <script src="//static.javhd.com/h5/files/js/video.js"></script>
	<script>
        // Minified version of isMobile included in the HTML since it's small
        !function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/IEMobile/i,h=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,i=/BlackBerry/i,j=/BB10/i,k=/Opera Mini/i,l=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,m=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),n=function(a,b){return a.test(b)},o=function(a){var o=a||navigator.userAgent,p=o.split("[FBAN");return"undefined"!=typeof p[1]&&(o=p[0]),this.apple={phone:n(b,o),ipod:n(c,o),tablet:!n(b,o)&&n(d,o),device:n(b,o)||n(c,o)||n(d,o)},this.android={phone:n(e,o,o)},this.windows={phone:n(g,o),tablet:n(h,o),device:n(g,o)||n(h,o)},this.other={blackberry:n(i,o),blackberry10:n(j,o),opera:n(k,o),firefox:n(l,o),device:n(i,o)||n(j,o)||n(k,o)||n(l,o)},this.seven_inch=n(m,o),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0},p=function(){var a=new o;return a.Class=o,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=o:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=p():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=p()):a.isMobile=p()}(this);
    </script>
    <script>
        // Options
	    matches = location.search.match(/[\?\&]targetUrl\=([^^\&]+)/i);
	    if (matches) {
	    	targetUrl = decodeURIComponent(matches[1]);
    	} else {
	    	targetUrl = "http://javhd.com/";
    	}

function go(cms_id) {
	var url = targetUrl;
	try {
		var delim = url.indexOf('?') !== -1 ? '&' : '?';
		if (!Date.now) {
		  Date.now = function now() {
		    return new Date().getTime();
		  };
		}
		var uts = Date.now();
		if (uts) {
			url += delim + 'uts=' + uts + '&cms_id=' + cms_id;
		}	
	} catch (err) {}

	window.open(url);
}
    </script>
</head>
<body>
    <div class="container" onclick="go(18983);">
        <img src="//static.javhd.com/h5/files/overlay/18-overlay-preview.png" class="overlay-preview"  style="position: absolute; z-index: 1; left:0px; top: 0px;">
        <img src="//static.javhd.com/h5/files/overlay/18-overlay.png" class="overlay"  style="position: absolute; z-index: 99999; left:0px; top: 0px;">
        <img class="play" src="//static.javhd.com/h5/files/button/20-button.png" style="position: absolute; z-index: 99998; left: 0px; top: 0px; display: none;">
        <div class="video-container" id="video-container"></div>
    </div>
	<script type="text/javascript">
		(function () {//maybe redirect on mobile template?
			if (isMobile.any) {
				document.getElementById('video-container').innerHTML = '<canvas width="300" height="250" id="video-1"></canvas>';
				var canvas = document.getElementById('video-1');
				
				var player = new JVmpeg('//static.javhd.com/h5/files/video/1475-18983-300x250.mpg', {
					canvas: canvas,
					autoplay: true,
					//fallback: '//static.javhd.com/sb/schoolgirlshd_11404_300x250.gif',
					loop: true
				});
				canvas.addEventListener('click', function () {
					if (player.playing) {
						player.play();
					} else {
						player.play();
					}
				}, false);
			} else {
				document.getElementById('video-container').innerHTML = '<video id="video-1" class="video-js" loop muted preload="auto" width="300" height="250" ><source src="//static.javhd.com/h5/files/video/1475-18983-300x250.mp4" type="video/mp4" /></video>';
				
				videojs.options.flash.swf = "//static.javhd.com/h5/files/video-js.swf";
		
				var players = document.querySelectorAll('.video-js');
				for (var i = 0, n = players.length; i < n; ++i) {
					
					videojs(players[i].id, {}, function () {
						this.play();
					});
				}
			}
		})();
	</script>
</body>
</html>