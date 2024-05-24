<!DO="UTF-8">
<title></title>
<style>
		html, body {
			margin: 0;
			padding: 0;
			height: 100vh;
		}
	</style>
</head>
<body>
<div class="creative"></div>
<script>

		function BroadSignPlay(){
				// document.getElementsByClassName('bf_animated')[0].contentWindow.postMessage({type: "restartBanner"}, '*'); 
		};

		(() => {
			const queries = (function () {
				var q = window.location.search.substring(1);
				var v = q.split('&');
				var params = {};
				for (var i = 0; i < v.length; i++) {
					var p = v[i].split('=');
					params[p[0]] = p[1];
				}
				return params;
			})();

			const adId = queries.a;
			if (!adId) {
				console.log('No ID assigned to query parameter "a".')
				return;
			}

			// Optional, custom styling
			const backgroundColor = decodeURIComponent(queries.background || 'ffffff').replace('#', '').toLowerCase();
			document.body.style.backgroundColor = backgroundColor === 'transparent' ? backgroundColor : `#${backgroundColor}`;

			if(queries["min-width"]){
				document.body.style.minWidth = queries["min-width"] + 'px';
			}
			
			// Load creative
			const protocol = window.location.protocol.indexOf('file:') === 0 ? 'https:' : window.location.protocol;
			const domain = window.location.hostname || 'c.bannerflow.net';
			const relativePath = window.location.href.indexOf('a') !== -1 rc = `${protocol}//${domain}/${relativePath}${adId}${window.location.search}&container=.creative`;
			tag.addEventListener('render', (e) => {
			  window.parent.postMessage("creativeLoaded", "*");
		  	});
		  	tag.addEventListener('play', (e) => {
			  window.parent.postMessage("creativePlayed", "*");
		  	});
			document.head.appendChild(tag);
		})();
	</script>
</body>
</html>