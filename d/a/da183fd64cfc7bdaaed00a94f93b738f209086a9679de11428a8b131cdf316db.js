<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=3.0,user-scalable=yes"
		name="viewport">
	<title>Paytm Insider</title>
	<link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet' />
	<link rel="stylesheet" type="text/css"
		href="https://insider.in/assets/fonts/typography/530455/89FC5FFA2B1B85284.css" />
	<script>
		function readCookie () {
			var allcookies=document.cookie;
			let cookieMap={};
			cookiearray=allcookies.split(';');
			for (var i=0;i<cookiearray.length;i++) {
				name=cookiearray[i].split('=')[0];
				value=cookiearray[i].split('=')[1];
				cookieMap[name.trim()]=value;
			}
			return cookieMap;
		}
		let allcookies=readCookie();
		let selectedCity=allcookies.cachedCity;
		console.log("selectedCity",selectedCity);
		setTimeout(function () {
			if (allcookies&&allcookies.cachedCity&&allcookies.cachedCity.length) {
				window.location.replace(`https://insider.in/${allcookies.cachedCity}`);
			}
			else {
				window.location.replace("https://insider.in/online");
			}
		},300);
	</script>
	<style media="screen" type="text/css">
		html,
		body,
		div,
		span,
		applet,
		object,
		iframe,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		p,
		blockquote,
		pre,
		a,
		abbr,
		acronym,
		address,
		big,
		cite,
		code,
		del,
		dfn,
		em,
		img,
		ins,
		kbd,
		q,
		s,
		samp,
		small,
		strike,
		strong,
		sub,
		sup,
		tt,
		var,
		b,
		u,
		i,
		center,
		dl,
		dt,
		dd,
		ol,
		ul,
		li,
		fieldset,
		form,
		label,
		legend,
		table,
		caption,
		tbody,
		tfoot,
		thead,
		tr,
		th,
		td,
		article,
		aside,
		canvas,
		details,
		embed,
		figure,
		figcaption,
		footer,
		header,
		hgroup,
		menu,
		nav,
		output,
		ruby,
		section,
		summary,
		time,
		mark,
		audio,
		video {
			margin: 0;
			padding: 0;
			border: 0;
			font-size: 100%;
			font: inherit;
			vertical-align: baseline;
		}

		/* HTML5 display-role reset for older browsers */
		article,
		aside,
		details,
		figcaption,
		figure,
		footer,
		header,
		hgroup,
		menu,
		nav,
		section {
			display: block;
		}

		body {
			line-height: 1;
		}

		ol,
		ul {
			list-style: none;
		}

		blockquote,
		q {
			quotes: none;
		}

		blockquote:before,
		blockquote:after,
		q:before,
		q:after {
			content: '';
			content: none;
		}

		table {
			border-collapse: collapse;
			border-spacing: 0;
		}

		::-webkit-scrollbar {
			display: none;
		}

		body {
			color: ba;
			font-family: Inter;
			text-align: center;
			font-weight: 300;
			padding: 4vh;
			background-color: #FFF;
		}

		.omlLogo {
			width: 60%;
			margin: 0 auto 40px;
			display: block;
		}

		.omlLogo-image {
			width: 100%;
		}

		.errorText {
			font-size: 5vw;
			font-weight: 400;
			line-height: 1.3;
		}

		.introText {
			font-size: 1em;
			margin: 30px 0 0;
			line-height: 1.6;
		}

		.pageWrapper {
			/* border: 1px solid #d7d7d7; */
			border-radius: 2px;
			position: relative;
			width: 100%;
			height: 92vh;
			overflow: hidden;
			background-color: #FFF;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.errorWrapper {
			height: 100%;
			display: flex;
			flex-direction: column;
			width: 300px;
			position: absolute;
			text-align: center;
			justify-content: center;
			gap: 30px;
		}

		.buyButton {
			display: inline-block;
			margin: 20px 0;
			background-color: #3695d8;
			text-transform: uppercase;
			font-weight: 400;
			padding: 14px 20px;
			color: #fff;
			text-decoration: none;
			border-radius: 2px;
			letter-spacing: 0.5px;
		}

		.logo {
			width: 95%;
			opacity: 0.04;
			position: absolute;
			bottom: 0;
			right: 0;
			z-index: -1;
			transform: translate(10%, 30%);
		}

		.innerDiv {

			font: Inter;
			font-weight: 400;
			font-size: 20px;
			line-height: 20px;
		}

		.mainBlock {
			width: 295px;
			color: #FFF;
			font-family: Inter;
			font-size: 24px;
			font-style: normal;
			font-weight: 400;
			line-height: 133%;
			text-align: center;
			display: flex;
			flex-direction: column;
			gap: 14px;
		}


		@media screen and (min-width: 34em) {
			.omlLogo {
				width: 40%;
			}

			.introText {
				font-size: 1em;
			}

			.errorText {
				font-size: 3.5vw;
			}
		}

		@media screen and (min-width: 48em) {
			.omlLogo {
				width: 30%;
			}

			.introText {
				font-size: 1.1em;
			}

			.errorText {
				font-size: 3.5vw;
			}

			.logo {
				width: 60%;
			}
		}

		@media screen and (min-width: 64em) {
			.omlLogo {
				width: 18%;
			}

			.errorText {
				font-size: 2vw;
			}

			.introText {
				font-size: 1.2em;
			}
		}
	</style>
</head>

<body>
	<div class="pageWrapper">
		<div class="errorWrapper">
			<img src="https://media.insider.in/image/upload/c_crop,g_custom/v1702662873/s5famhfrltmygj70d5il.gif" />
			<div>
				loading the Paytm insider experience...
			</div>
		</div>
	</div>
</body>

</html>eal");b&&"classList"in b&&(b.classList.remove("hidden"),c.addEventListener("click",function(){c.classList.add("hidden");a.getElementById("cf-footer-ip").classList.remove("hidden")}))}var a=document;document.addEventListener&&a.addEventListener("DOMContentLoaded",d)})();</script>
</div><!-- /.error-footer -->


    </div><!-- /#cf-error-details -->
  </div><!-- /#cf-wrapper -->

  <script>
  window._cf_translation = {};
  
  
</script>

</body>
</html>
