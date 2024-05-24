/**/
cXJsonpCB21({"httpStatus":200,"response":{}})ms":[{"templateName":"Subscriber CTA - Marketing","subscribe_cta_copy":"SUBSCRIBE NOW","subscribe_msg_mobile":"ACCESS ALL ARTICLES","subscribe_cta_mobile":"SUBSCRIBE NOW","templateDescription":"Subscriber CTA - Marketing","offerProductId":"8nf7ko4vexsn","subscribe_msg_copy":"ACCESS ALL ARTICLES","campaign":"183","testId":"100","click_url":"https://api.cxense.com/public/widget/click/zYa7XX0IQfch_b9Vg199hQR4_dy3zTBIDeTXPqd9-eVOkHO7JhbmXZ6HICXeYu3w3Nlr3lsxSFyPJTIKEMC-jI-n6k45n3YfJd1Nk05jB4Bp1fEpx6H1D6sF5-LWJglbVT20AJ7oq5ZE8FTZwagj1VJBtxjrt7JhpaX6D8mbBmG6FPPOwye4l8ht5mcVcuOlFyvJ0_zAtrQ2lt_qe1__zkG4FBuDIrL00s7XkuYTYq-z3cy2wzlgnaqDkNHtFJxKodxJfWxGViiDluLMec6UGKdauryIJCMGF9YGEZROFKktDkGGMxP0qwBiLFzGa6282J9kNorVJzAB3X88S8z6s1M2vXPSjy-MhrDx8dx8k4e7tNx8YcYEdTxWJQEdE9JLTuDxbnO0JJ749DWYnn99CG3xbl5So7UskF45FSNU6hk14RygDLSh_9falQIHzn9ei6rG1NdimsSnhE7pQi3xH7fCSssxTFJdfb64oSljEdlNH-VDWPtaOJTadkrmkX3z9-p8pWKdW7cKtFrRLmZ1el3NP3uUsg2S90GesZh2ym3as4R8bAkMUlZv9a4D0MS7PXE0f9YUxGKIM364TyiCMLwLwTdrKC7g9FQkzIuGWNtVjfRLmj8XhvoWJ-V8Goe2imSypvJoWTKBGjxoRCnr2k70R2-fnFmu6e3SO5gfquqrWkvChl35kLwJ7wZp4A6Yh7Sw_eojoQ0","url":"https://www.bizjournals.com/marketredirect/subscribe?iana=csnav&csrc=6310&cpncd=cx0124jan"}],"template":"<!--%\n\t// get market value from the meta tag in head\n\tvar meta = document.querySelector('meta[name=\"market\"]');\n\tvar market = meta ? meta.content : 'bizjournals';\n    var wid = \"6fe160d6915313f82bf0efa26dc5fbc799d1ad75\";\n\n\t// set device variable checks\n\tvar device = this.cX.CCE.customViewportDetection.device || 'desktop';\n\tvar orientation = this.cX.CCE.customViewportDetection.orientation;\n\n\tvar items = data.response.items;\n\t\n\tfor (var i = 0; i < items.length; i++) {\n        var item = items[i];\n\n        var separator = item.click_url.indexOf('?') > -1 ? '&' : '?'; // Add or append 'r' as a url param\n        item.click_url = item.click_url + separator + 'redirectmarket=' + market; // Set the updated URL as the required field\n        item.url = item.url + '&redirectmarket=' + market;\n\n if (window.cxense && (! ('flatNav' in window.cxense) || !window.cxense.flatNav)) {    %-->\n\t<a data-campaign=\"{{item.campaign}}\" data-widget=\"{{wid}}\" tmp:id=\"{{cX.CCE.clickTracker(item)}}\" tmp:href=\"{{item.url}}\" class=\"banner-item__content cx_cta-button-subscribe cx-adobeClickTracking\" tmp:style=\"background-color: {{item['subscribe_btn_color']}}\">\n          <!--% if (device === 'mobile') { %-->\n              <span class=\"banner-item__meta\">{{ item['subscribe_msg_mobile'] || item['subscribe_msg_copy'] }}</span>\n              <h3 class=\"banner-item__title\">{{ item['subscribe_cta_mobile']  || item['subscribe_cta_copy'] }}</h3>\n          <!--% } else { %-->\n              <span class=\"banner-item__meta\">{{ item['subscribe_msg_copy'] }}</span>\n              <h3 class=\"banner-item__title\">{{ item['subscribe_cta_copy'] }}</h3>\n          <!--% } %-->\n\t</a>\n<!--%\t} else {\t%-->\n\t<!--% if (device === 'mobile') { %-->\n        <div class=\"text-uppercase mr-sm-4\">{{ item['subscribe_msg_mobile'] || item['subscribe_msg_copy'] }}</div>\n        <div class=\"font-weight-bold\">&nbsp;&mdash;&nbsp;</div>\n        <span class=\"font-weight-bold\" style=\"text-decoration: underline;\">{{ item['subscribe_cta_mobile'] || item['subscribe_cta_copy'] }}</span>\n        <a data-campaign=\"{{item.campaign}}\"  data-widget=\"{{wid}}\" tmp:id=\"{{cX.CCE.clickTracker(item)}}\" tmp:href=\"{{ item.url }}\" class=\"stretched-link cx-adobeClickTracking\"></a>\n\t<!--% } else { %-->\n        <div class=\"text-uppercase mr-sm-4\">{{ item['subscribe_msg_copy'] }}</div>\n        <a \n           data-campaign=\"{{item.campaign}}\" \n           data-widget=\"{{wid}}\"\n           tmp:id=\"{{cX.CCE.clickTracker(item)}}\" \n           tmp:href=\"{{item.url}}\" \n           tmp:style=\"background-color: {{item['subscribe_btn_color']}};\" \n           class=\"d-sm-inline-block btn btn--primary btn--small px-5 cx-adobeClickTracking\">{{ item['subscribe_cta_copy'] }}\n\t\t</a>\n\t<!--% }\n\t}\n} \n%-->","style":"#cce-empty-element {margin: 20px auto;width: 100%;text-align: center;}\n\n.cx_cta-button-subscribe {\n  border: none;\n}","head":"// Lightweight viewport detection to mimic our application\nvar parentHtml = document.querySelector('html');\nfunction classes () {\n    var elClasses = [];\n    if (parentHtml && parentHtml.classList) {\n        elClasses = [].slice.call(parentHtml.classList);\n\n        if (elClasses) {\n            elClasses = elClasses.filter(function (c) {return c.includes('viewport') === true;});\n        }\n    }\n\n    return elClasses;\n}\n\nfunction getOrientation () {\n    return (classes().indexOf('viewport--portrait') !== -1) ? 'portrait' : 'landscape';\n}\n\nfunction isTablet () {\n    return classes().indexOf('viewport--md') !== -1 && classes().indexOf('viewport--lg') === -1;\n}\n\nfunction isDesktop () {\n    return (\n        (classes().indexOf('viewport--xl') && classes().indexOf('viewport--xl') ) !== -1 || classes().indexOf('viewport--lg') !== -1\n    );\n}\n\nfunction isMobile () {\n    return classes().indexOf('viewport--xs') !== -1 && classes().indexOf('viewport--md') === -1;\n}\n\nfunction getDevice () {\n    if (isDesktop()) {\n        return 'desktop';\n    }\n    if (isTablet()) {\n        return 'tablet';\n    }\n    if (isMobile()) {\n        return 'mobile';\n    }\n}\n\ncX.CCE.customViewportDetection = {\n    device: getDevice(),\n    orientation: getOrientation()\n};","prnd":"ls13xsyuct1dh3hm"}})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");
			vertical-align: middle;
			height: 40px;
		}

		.powered-by .logo {
			height: 30px;
			width: auto;
		}
		
		.powered-by .text {
			padding-right: 15px;
			line-height: 30px;
		}
		
		.hide-small-viewport {
			display: none;
			visibility: hidden;
		}
		
		@media (min-width: 768px) {
			.hide-small-viewport {
				display: inline;
				visibility: visible;
			}
		}


		.captcha {
			width: 100%;
			min-height: 78px;
		}
		
		@media (max-width: 767px) {
			.captcha .form_container {
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-pack: center;
					-ms-flex-pack: center;
						justify-content: center;
			}
		}
		
		.captcha .form_container {
			width: -webkit-fit-content;
			width: -moz-fit-content;
			width: fit-content;
			margin: 0px auto 40px;
		}

		.hide {
			display: none
		}
		
		.show {
			display: block !important
		}
		
		.highlighted {
			color: #285ae6;
		}
		
		.error-description a {
		  color: #285ae6;
		  text-decoration: none;
		}
		
		.error-description a:hover {
			text-decoration: underline;
		}
	</style>
	<script type="text/javascript">
		var RecaptchaOptions = {theme : 'custom', custom_theme_widget: 'recaptcha_widget'};
		var onCaptchaFinished = function(response) {
			var xhr;
			if (window.XMLHttpRequest) {
				xhr = new XMLHttpRequest;
			} else {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
			var msg = "g-recaptcha-response=" + response;
			xhr.open("POST", "/_Incapsula_Resource?SWCGHOEL=v2&cts=WjFTufDVSCHXwVS65hp4u29fvNVaipqk4%2f7U60238bU9ZtegUYWTB620nGF7tJp%2b", true);
			xhr.withCredentials = true;
			
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.onreadystatechange = function(){
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
				       window.parent.location.reload(true);
				    } else {
				       window.parent.location.reload(true); 
				    }
                }
			}
			xhr.send(msg);
		};
	</script>
	<script src='https://www.google.com/recaptcha/api.js'></script>
</head>
<body>


<div class="container">
	<div class="container-inner">
		<div class="main">
			<div class="main-inner">
				<div class="error-headline">
					<div class="headline-inner">
						<h1>www.bizjournals.com -</h1>
						<p>Additional security check is required</p>
					</div>
				</div>
				<div class="error-content">
					<div class="captcha">
						<div class="form_container">
							<div class="g-recaptcha" data-sitekey="6Ld38BkUAAAAAPATwit3FXvga1PI6iVTb6zgXw62" data-callback="onCaptchaFinished" ></div>
						</div>
					</div>
					<div class="error-description">
						<h2>Why am I seeing this page?</h2>
						<p>The website you are visiting is protected and accelerated by Incapsula. Your computer may have been infected by malware and therefore flagged by the Incapsula network. Incapsula displays this page for you to verify that an actual human is the source of the traffic to this site, and not malicious software.</p>
		
						<h2>What should I do?</h2>
						<p>Just click the <b>I'm not a robot</b> checkbox to pass the security check. Incapsula will remember you and will not show this page again. We recommend you run a
							virus and malware scan on your computer to remove any infection.</p>
					</div>
				</div>
			</div>

			<div class="powered-by">
				<span class="text">Powered by</span>
				<a href="https://www.imperva.com/why-am-i-seeing-this-page/?src=23&amp;utm_source=blockingpages" target="_blank" class="copyrights">Imperva</a>
			</div>

		</div>
	</div>
</div>

<script type="text/javascript">document.onkeydown = function(e){if(e.keyCode == 13){ document.getElementById("captcha-form").submit(); }};</script>
</body>
</html>
