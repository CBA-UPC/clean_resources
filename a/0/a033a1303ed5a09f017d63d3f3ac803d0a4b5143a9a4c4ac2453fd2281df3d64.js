<!dle>
		[hidden] {
			display: none
		}

		.border, [id=asg-label] {
			border-color: #e5e7eb
		}

		.block {
			display: block
		}

		.flex {
			display: flex
		}

		#backdrop, .hidden {
			display: none
		}

		.h-5 {
			height: 1.25rem
		}

		.w-5 {
			width: 1.25rem
		}

		.flex-grow {
			flex-grow: 1
		}

		.items-center {
			align-items: center
		}

		.rounded-full {
			border-radius: 9999px
		}

		.border {
			border-width: 1px
		}

		.bg-white, .link:hover {
			background-color: #ffffff
		}

		.fill-current {
			fill: currentColor
		}

		.text-gray-100 {
			color: #f3f4f6
		}

		#backdrop {
			padding: .25rem .5rem .5rem;
			-webkit-backdrop-filter: blur(12px);
			backdrop-filter: blur(12px);
		}

		#backdrop, #container, #gray-backdrop {
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0
		}

		#gray-backdrop {
			background-color: #1f2937;
			opacity: .5
		}

		#container {
			display: flex;
			flex-direction: column;
			padding: .25rem .5rem;
			opacity: 1
		}

		#container > :not([hidden]) ~ :not([hidden]) {
			margin-top: .25rem;
			margin-bottom: 0
		}

		@media (max-height: 134px) AND (min-width: 234px) {
			#container {
				height: 100%;
				flex-direction: row-reverse;
				align-items: center
			}

			#container > :not([hidden]) ~ :not([hidden]) {
				--tw-space-y-reverse: 0;
				margin-top: 0px;
				margin-bottom: 0px
			}
		}

		#close-cont {
			display: flex;
			justify-content: flex-end
		}

		@media (max-height: 134px) AND (min-width: 234px) {
			#close-cont {
				margin-left: .25rem;
				flex-shrink: 1
			}
		}

		#links-cont {
			display: flex;
			flex-direction: column;
			align-items: stretch;
			font-size: 9px;
			letter-spacing: -.025em
		}

		#links-cont > :not([hidden]) ~ :not([hidden]) {
			--tw-space-y-reverse: 0;
			margin-top: .25rem;
			margin-bottom: 0
		}

		@media (min-height: 135px) AND (min-width: 180px) {
			#links-cont {
				flex-direction: row;
				justify-content: space-between
			}

			#links-cont > :not([hidden]) ~ :not([hidden]) {
				--tw-space-y-reverse: 0;
				--tw-space-x-reverse: 0;
				margin: 0 0 0 .5rem
			}
		}

		@media (max-height: 134px) AND (min-width: 234px) {
			#links-cont {
				flex-grow: 1;
				flex-direction: row;
				justify-content: space-between
			}

			#links-cont > :not([hidden]) ~ :not([hidden]) {
				margin: 0 0 0 .5rem
			}

			.link {
				border-radius: .25rem;
				padding: .5rem
			}
		}

		#label-container, .link {
			display: flex;
			width: 100%;
			align-items: center
		}

		.link {
			height: 100%;
			justify-content: center;
			background-color: #f3f4f6;
			text-align: center;
			text-transform: uppercase
		}

		#label-container {
			position: fixed;
			justify-content: flex-end;
			padding: .25rem;
			top: 0;
		}

		#asg-label {
			top: .25rem;
			right: .25rem;
			border-radius: 9999px;
			border-width: 1px;
			background-color: #ffffff;
			font-size: 8px;
			text-transform: uppercase;
			transition: all 0.1s ease-in-out;
		}

		#asg-label:hover, .hover\:bg-gray-100:hover {
			background-color: #f3f4f6
		}

		#text-label {
			display: none;
		}

		#logo-circle {
			visibility: hidden;
		}

		@media (min-width: 140px) {
			#asg-label:hover #text-label {
				display: inline-block;
			}

			#asg-label:hover {
				padding-left: .25rem;
				padding-right: .25rem
			}
			#asg-label:hover svg {
				margin-left: .25rem
			}
			#asg-label:hover #logo-circle {
				visibility: visible;
			}
		}

		#overlay {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: #d1d5db
		}

		.hover\:text-white:hover {
			color: #ffffff
		}

		@media (min-height: 135px) AND (min-width: 180px) {
			.link {
				border-radius: .25rem;
				padding: .5rem
			}
		}
	</style>

		</head>
		<body>

			
	<div id="overlay" class="hidden" style="z-index: 2147483647;"></div>
	<div id="label-container" style="z-index: 2147483647;">
		
			<div id="asg-label">
				<a href="#" class="flex items-center">
					<span id="text-label">Ads by adspyglass</span>
					<svg class="small:ml-1" viewBox="0, 0, 60, 60" width="12px" height="12px">
						<path id="logo-circle" d="M29.529,1 C37.406,1 44.539,4.194 49.701,9.356 C54.863,14.518 58.057,21.651 58.057,29.529 C58.057,37.406 54.863,44.539 49.701,49.701 C44.539,54.864 37.406,58.057 29.529,58.057 C21.651,58.057 14.518,54.864 9.356,49.701 C4.194,44.539 1,37.406 1,29.529 C1,21.651 4.194,14.518 9.356,9.356 C14.518,4.194 21.651,1 29.529,1 z M47.081,11.977 C42.59,7.485 36.383,4.707 29.529,4.707 C22.674,4.707 16.468,7.485 11.977,11.977 C7.485,16.468 4.707,22.674 4.707,29.529 C4.707,36.383 7.485,42.59 11.977,47.081 C16.468,51.572 22.674,54.351 29.529,54.351 C36.383,54.351 42.59,51.572 47.081,47.081 C51.572,42.59 54.35,36.383 54.35,29.529 C54.35,22.674 51.572,16.468 47.081,11.977" fill="#141413" />
						<path d="M38.129,14.67 L41.931,14.67 L41.931,41.975 L38.129,41.975 z" fill="#CD0A20" />
						<path d="M32.424,24.863 L36.228,24.863 L36.228,41.975 L32.424,41.975 z" fill="#141413" />
						<path d="M26.721,32.468 L30.523,32.468 L30.523,41.975 L26.721,41.975 z" fill="#141413" />
						<path d="M21.016,21.381 L24.818,21.381 L24.818,41.975 L21.016,41.975 z" fill="#141413" />
						<path d="M15.312,26.764 L19.116,26.764 L19.116,41.975 L15.312,41.975 z" fill="#141413" />
					</svg>
				</a>
			</div>
		
		<a id="asg-remove" href="#" class="bg-white rounded-full hover:bg-gray-100 border">
			<svg xmlns="http://www.w3.org/2000/svg" class="fill-current" width="12px" height="12px" viewBox="0 0 20 20" fill="currentColor">
				<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z" clip-rule="evenodd" />
			</svg>
		</a>
	</div>

	<div id="backdrop" style="z-index: 2147483647;">
		<div id="gray-backdrop"></div>
		
			<div id="container">
				<div id="close-cont">
					<a id="asg-hide-backdrop" href="#" class="asg-ad-label-close text-gray-100 hover:text-white">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z" clip-rule="evenodd" />
						</svg>
					</a>
				</div>
				<div id="links-cont">
					<div class="flex flex-grow">
						<a href="https://www.traforama.com/?utm_source=user-website&utm_medium=pre-land&utm_campaign=banner&utm_term=56337&utm_content=button" target="_blank" rel="noopener" class="link">
							<span>Advertise here</span>
						</a>
					</div>
					<div class="flex flex-grow">
						<a href="https://www.adspyglass.com/?u=42754&utm_source=user-website&utm_medium=pre-land&utm_campaign=banner&utm_term=56337&utm_content=button" target="_blank" rel="noopener" class="link">
							<span>Monetise my traffic</span>
						</a>
					</div>
				</div>
			</div>
		
	</div>
	<script>
		(function() {
			
				document.getElementById('asg-label').addEventListener('click', function(event) {
					event.preventDefault();
					document.getElementById('label-container').style.display = 'none';
					document.getElementById('backdrop').style.display = 'block';
				});
				document.getElementById('asg-hide-backdrop').addEventListener('click', function(event) {
					event.preventDefault();
					document.getElementById('backdrop').style.display = 'none';
					document.getElementById('label-container').style.display = 'flex';
				});
			
			document.getElementById('asg-remove').addEventListener('click', function(event) {
				event.preventDefault();
				document.getElementById('backdrop').style.display = 'none';
				document.getElementById('overlay').style.display = 'block';
				var src = document.location.href.replace(document.location.protocol, '');
				window.parent.postMessage(["asgCloseBanner", src], "*");
			});
		})();
	</script>



			
	<script>
		window.addEventListener('message', function(event) {
			if (window.handled || (window.location.href.indexOf('asgfp') >= 0)) {
				return;
			}

			if (event.data[0] === 'asgfp') {
				window.handled = true;
				var fp = event.data[1];
				var cookieDate = new Date;
				cookieDate.setFullYear(cookieDate.getFullYear() + 1);
				document.cookie = 'asgfp=' + fp + '; expires=' + cookieDate.toUTCString() + '; path=/; SameSite=None; Secure=true';
				if (document.cookie.indexOf('asgfp=' + fp) < 0) {
					var url = window.location.protocol + '//' + window.location.hostname + '/api/is_potential_advert?asgfp=' + fp;
					var handleResponse = function(resp) {
						resp.json().then(function(json) {
							if (json.result === true) {
								var newUrl = new URL(window.location.href);
								newUrl.searchParams.append('asgfp', fp);
								window.location.replace(newUrl);
							}
						})
					};
					// IE11 polyfill
					var testGlobal =
						(typeof globalThis !== 'undefined' && globalThis) ||
						(typeof self !== 'undefined' && self) ||
						(typeof global !== 'undefined' && global)

					if (!testGlobal.fetch) {
						var promiseScript = document.createElement("script");
						promiseScript.type = "text/javascript";
						promiseScript.src =
							"https://cdn.jsdelivr.net/npm/promise-polyfill@8.1.3/dist/polyfill.min.js";

						var fetchScript = document.createElement("script");
						fetchScript.type = "text/javascript";
						fetchScript.src =
							"https://cdn.jsdelivr.net/npm/whatwg-fetch@3.4.0/dist/fetch.umd.min.js";

						document.head.appendChild(promiseScript);
						document.head.appendChild(fetchScript);


						setTimeout(function () {
							window.fetch(url).then(handleResponse).catch(console.error);
						}, 1000);
					} else {
						fetch(url).then(handleResponse).catch(console.error);
					}
				}
			}
		});
	</script>


			

			<script type="text/javascript">var code = "<div style=\"width:300px;height:250px;\">\n\x3Cscript id=\"adn-4794353\" data-sub=\"\" type=\"text/javascript\">\n(function (node) {\nvar adn = document.createElement(\"script\");\nadn.type = \"text/javascript\", adn.async = true, adn.src = \"//a.bestcontentfood.top/warp/4794353?r=\" + Math.floor(Math.random() * 99999);\nnode.appendChild(adn);\n})(document.getElementsByTagName(\"script\")[document.getElementsByTagName(\"script\").length - 1].parentNode);\n\x3C/script>\n</div>\n";
document.write(code);

</script>

			
				
	<script type="text/javascript">
		var bodyElement = document.querySelector('body');
		var trackAsgImp = function(lazy) {
			var trackId = 'btrack-56337';
			if(document.getElementById(trackId)) {
				return;
			}
			lazy ||= false
			var img = document.createElement("img");
			img.src = "//asg.myvideos.club/api/click/14169535960419170045?c=90";
			img.style.height = '0px';
			img.style.width = '0px';
			img.setAttribute('id', trackId);
			if(lazy) {
				img.setAttribute('loading', 'lazy');
			}
			bodyElement.appendChild(img);
		}

		if (!('IntersectionObserver' in window) ||
			!('IntersectionObserverEntry' in window) ||
			!('intersectionRatio' in window.IntersectionObserverEntry.prototype)) {
			trackAsgImp(true)
		} else {
			var options = { threshold: 0.2 };
			var impTracked = false;
			var callback = function([element]) {
				if (element.isIntersecting && !impTracked) {
					impTracked = true;
					if('unobserve' in observer) {
						observer.unobserve(bodyElement);
					}
					trackAsgImp();
				}
			};
			var observer = new window.IntersectionObserver(callback, options);
			observer.observe(bodyElement);
		}
	</script>

			

			
			
				
	<script type="text/javascript">
		var trackAsgClick = function() {
			var img = document.createElement("img");
			img.src = "//asg.myvideos.club/api/click/14169535960419170045";
			img.style.height = '0px';
			img.style.width = '0px';
			bodyElement.appendChild(img);
		}

		window.focus();
		var mouseInFrame = false;

		var mouseOverListener = function() {
			window.focus();
			mouseInFrame = true;
		}

		var mouseOutListener = function() {
			mouseInFrame = false;
		}

		var clickListener = function() {
			if(mouseInFrame) {
				trackAsgClick();
				window.removeEventListener("blur", clickListener, false);
				window.removeEventListener("mouseover", mouseOverListener, false);
				window.removeEventListener("mouseout", mouseOutListener, false);
			}
		}
		window.addEventListener('blur', clickListener, false);
		window.addEventListener("mouseover", mouseOverListener, false);
		window.addEventListener("mouseout", mouseOutListener, false);

	</script>

			
		</body>
	</html>