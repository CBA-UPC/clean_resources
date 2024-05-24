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

</html>touch-icon.png"/><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/><link rel="manifest" href="/manifest.json"/><link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/><meta name="theme-color" content="#ffffff"/><link rel="preconnect" href="https://www.gstatic.com"/><link rel="preconnect" href="https://www.google.com"/><link rel="preconnect" href="https://fonts.google.com"/><link rel="preconnect" href="https://www.google.com"/><link rel="preconnect" href="https://s.go-mpulse.net"/><link rel="preconnect" href="https://www.google-analytics.com"/><style data-styled="llGmbQ isycNz cqNvOT biJoRK iidhCO jHeStj guUzqQ bUAsAb daVhee guIVWT dUpNEB ioPRxs kSZBmM lpgKoo gscDjN hLmUXL cWHojO kwEQpM ekneiw eFdpyl jBcsdL lhfpFo kxqHNe iuMLcW hHbTFR mQEPU bpPmaH ieklHU jhlqAr evKzrL ixhEXv iJBJlQ iNunpm iezjZi iKbgRh Kasah eSNNDp gPzNgo bXxmuj dOizIq eWDGgC ekaHEH ZlMJB gIJaQB lgATHq gpoxcH hmXixn cXrOLJ fBhEjk jPQExa gnXOvi iUvrOZ hnnJqf lmgPIu efJSrQ chscia gJavdS TCFlM laAHZf gPgjCo iTjPWn jJSrrd fdAILa enidQ fmNRow lfPvFc iUatAk dkSxVU bknFuj fpYqzF kHBeax dkSKGD abTRD bkXkzk kuPxuO gZKocn gBqDdu hXklkk jpCSLv UFivh ijgJpn cjEcpf kYXcNj dwmPnI ijFqeX bkIdUB fZMomi ixkIui dPwWhT iCAntx gqFDOM fapJRJ bevuEl iuWTxs eIGOOU jkkgfq fUYyoH gFRGgU dxAEeg jczlwa gJzBcD dlgqcC fTouSS ejOpxC lbCYwJ fBmkQx cgfMZm huZYlh dnKHUO kLXjHJ fTqOAc hdGCQp iqBqcO cFqWWu gOaEEj cvcVIv jjSAZf danWpp hoLmXt dpcHqB egTKSN fjQwaJ jZMOBs gpCFj dIAXTp cUgAGN kbXuja glJGpO joGBum emtLQq beSjKv cnkNdK eADZfD cgbjDy fNQZMI bjYdF dGoEDp hhrmCp dEaOFV ipynXY dEVbai lkSHtP bYFDRD icvnlJ gKxsns jGTVAJ loAdIF gmBlyc kIttBz euYEhD bPoZsL dPQuIs hdRTvp gUxsMW jtRdJe bzjABt mgmzq STNEd UtJXX bRrLxI YzoNs ikeZXe gjdsgA iKBXkc ixKzgr dXUFM lcrhQz hgEmds etUELP iFMoKm hUtFJl eIDjbi iBNwcH cJnDMB cwfpd dCeqdQ dytiWR bZAPoO fYCLFc eREWGL kljJeP cOBfrD dDIFLa loXLJM ctggMH iOPJKU izlbcl bkuEKF dduYeI fjJFIj hhMBte iMCrtw czjipf fOeUuC bUViGu jKLJys kmIyUG boWlMh gHOfvO hOCdYR cUjLtm cRlGxq fQgLiK comAse dtkJjp ituDlm cRyomV cGhEYC eiFAhD jHudZf ikdfKc byBlrw gKLypk bDEqyJ kCvcj ihsSjf gjVdHf iEHPjc eKZcU dAMnLF gfKfTU kUINmH kqBtns HRvm ieUlRu dwSORP dayovC lfrzej DjOkf hCFfPr byNXdD bWFdep dFYhPr bGHJUg iltGzq ktoRGS hjCnEX jVRrJh bMRUmg eYTpLs eTlzLC dDuyJN dUMOMk fijrLF kPScnw brFjeK bjxHBH izWAtq kPtzfB jkbxNx jKhZkL clYYYV ipSstT buOaUA tgMvy kACuKu gafrXv QFVYw fUMzbf beOkvm dMIbNh bApXPb fmnxCz jGVIr hOLecX GFkJi huBMrl fNYFML eJXWRw jsjEV jBEMEX jXryLh hLbMgx eCLuAy jbzfVD bgzAKi jBNjsO dVKOIs euYXNv blIfsT dkpJLI joUFiB dvFVvS dyhiVf dAPDrH jocnDl gEwmfo cHMbcZ jYlopV fVykMl knlNzp ixaYaD hpkZtl clYJIg jbGsoJ BMfEW dyHovh cJNCQY fVvues dYMZSz lcabGr ddBpXw gwwRpJ gFguug dElAgC gvHMjn hHvOwT jmooU gKumxd kNEyYV iVsPvf guWAys kOBPJy hgksUW yddCW kqLMfR gthfqu cHQZvL exwluv ftkwVg eQDXaE ftaQwo jaJgIC kNUMfL dxnkUn czSfIZ fuEwnY bJmkhh cNCZfV" data-styled-version="4.3.1">
/* sc-component-id: sc-1erzbfo-0 */
.fVvues{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:30px;}
/* sc-component-id: sc-1erzbfo-1 */
.dYMZSz{border:2px solid #f3f3f3;border-bottom:2px solid #00bcf1;border-radius:50%;height:15px;width:15px;-webkit-animation:iVXCSc 1s linear infinite;animation:iVXCSc 1s linear infinite;}
/* sc-component-id: sc-1fcsi9p-0 */
.eSNNDp{color:#00bcf1;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;} .eSNNDp:hover{color:#223368;}
/* sc-component-id: sc-1pnccwa-0 */
.fmNRow{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;width:100%;z-index:100;}
/* sc-component-id: sc-1pnccwa-1 */
.lfPvFc{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:50px;height:50px;background:#fff;border:2px solid #00bcf1;border-bottom:2px solid #fff;border-radius:50%;-webkit-animation:iVXCSc 1s linear infinite;animation:iVXCSc 1s linear infinite;}
/* sc-component-id: sc-1pnccwa-3 */
.iUatAk{width:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;left:60%;left:calc(50% + 5px);-webkit-transform:translateX(-20px) translateY(3px);-ms-transform:translateX(-20px) translateY(3px);transform:translateX(-20px) translateY(3px);-webkit-animation:dDfXxM 1.5s linear infinite;animation:dDfXxM 1.5s linear infinite;}
/* sc-component-id: sc-1pnccwa-4 */
.dkSxVU{width:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;left:60%;left:calc(50% + 5px);-webkit-transform:translateX(-20px) translateY(3px);-ms-transform:translateX(-20px) translateY(3px);transform:translateX(-20px) translateY(3px);-webkit-animation:kAdPwj 1.5s 0.2s linear infinite;animation:kAdPwj 1.5s 0.2s linear infinite;}
/* sc-component-id: sc-1ep2vaf-4 */
.gafrXv{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:8px;height:8px;border:2px solid #9b9b9b;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);border-left:0;border-bottom:0;}
/* sc-component-id: sc-1ep2vaf-6 */
.hdGCQp{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;width:20px;height:0;border:1px solid #9b9b9b;} .hdGCQp:after{content:'';position:absolute;bottom:-4px;width:8px;height:8px;border:2px solid #9b9b9b;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);right:0;border-bottom:0;border-left:0;}
/* sc-component-id: sc-17x5qs4-0 */
.ituDlm{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
/* sc-component-id: sc-17x5qs4-1 */
.cRyomV{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
/* sc-component-id: sc-17x5qs4-2 */
.cGhEYC{margin:9px 0px;padding:0px 20px 0px 20px;font-size:12px;color:#9b9b9b;}
/* sc-component-id: sc-17x5qs4-3 */
.eiFAhD{height:11px;border-left:1px solid rgba(151,151,151,0.19);}
/* sc-component-id: sc-17x5qs4-4 */
.jHudZf{margin:9px 0px;padding:0px 20px 0px 20px;font-size:12px;color:#9b9b9b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0px 15px 0px 15px;color:#474b4f;} @media (max-width:800px) and (min-width:601px){.jHudZf{padding:0px 13px 0px 13px;}}.ikdfKc{margin:9px 0px;padding:0px 20px 0px 20px;font-size:12px;color:#9b9b9b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0px 15px 0px 15px;color:#777c84;} @media (max-width:800px) and (min-width:601px){.ikdfKc{padding:0px 13px 0px 13px;}}
/* sc-component-id: sc-17x5qs4-5 */
.gKLypk{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:0;height:0;border-top:0px;-webkit-transform:initial;-ms-transform:initial;transform:initial;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid black;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);border-bottom-color:#00bcf1;margin-left:8px;cursor:pointer;}.bDEqyJ{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:0;height:0;border-top:0px;-webkit-transform:initial;-ms-transform:initial;transform:initial;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid black;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);border-bottom-color:#c6c9cf;margin-left:8px;cursor:pointer;}
/* sc-component-id: sc-17x5qs4-6 */
.byBlrw{cursor:pointer;}
/* sc-component-id: btbnvd-0 */
.ijFqeX{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
/* sc-component-id: btbnvd-1 */
.bkIdUB{width:50px;height:50px;border-radius:4px;} @media (max-width:600px){.bkIdUB{width:40px;height:40px;}}
/* sc-component-id: btbnvd-2 */
.fZMomi{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:15px;}
/* sc-component-id: btbnvd-3 */
.ixkIui{color:#000;font-size:1.4em;}
/* sc-component-id: btbnvd-4 */
.dPwWhT{margin-top:5px;font-size:1.1em;color:#9b9b9b;}
/* sc-component-id: tia75m-1 */
.ipSstT{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
/* sc-component-id: tia75m-2 */
.kACuKu{margin-left:20px;text-align:right;}
/* sc-component-id: sc-1lcrp84-0 */
.iUvrOZ{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 15px;-webkit-flex:initial;-ms-flex:initial;flex:initial;max-width:300px;} .iUvrOZ:first-of-type{padding:0px;} .iUvrOZ:last-of-type{padding:0px;} @media (max-width:600px){.iUvrOZ{padding:0 20px;}}.hnnJqf{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0px;-webkit-flex:initial;-ms-flex:initial;flex:initial;max-width:300px;} .hnnJqf:first-of-type{padding:0px;} .hnnJqf:last-of-type{padding:0px;} @media (max-width:600px){.hnnJqf{padding:0px;}}.lmgPIu{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 15px;-webkit-flex:1;-ms-flex:1;flex:1;max-width:300px;} .lmgPIu:first-of-type{padding:0px;} .lmgPIu:last-of-type{padding:0px;} @media (max-width:600px){.lmgPIu{padding:0 20px;}}
/* sc-component-id: sc-1lcrp84-1 */
.laAHZf{color:#a6aab5;font-size:12px;} @media (max-width:600px){.laAHZf{font-size:1em;}}
/* sc-component-id: sc-1lcrp84-2 */
.efJSrQ{color:#141b2f;font-size:18px;margin:0 0 2px;} @media (max-width:600px){.efJSrQ{font-size:16px;}}.chscia{color:#141b2f;font-size:14px;margin:5px 0 0;} @media (max-width:600px){.chscia{font-size:14px;}}
/* sc-component-id: sc-19wjejv-0 */
.jKhZkL{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:15px 0px;}
/* sc-component-id: sc-19wjejv-1 */
.fUMzbf{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}
/* sc-component-id: sc-19wjejv-2 */
.QFVYw{position:relative;padding-top:15px;padding-right:0px;}
/* sc-component-id: f20xgu-0 */
.fmnxCz{color:#59aa00;} .fmnxCz:before{content:'+';} .fmnxCz:after{content:'%';}
/* sc-component-id: sc-1842aaf-0 */
.dAMnLF{-webkit-flex:1;-ms-flex:1;flex:1;height:10px;border-radius:2px;background-color:#dddfe5;}.gfKfTU{-webkit-flex:1;-ms-flex:1;flex:1;height:4px;border-radius:2px;background-color:#dddfe5;}
/* sc-component-id: sc-1842aaf-1 */
.kUINmH{position:relative;width:0%;height:10px;float:left;border-radius:2px;background-color:#ee9c16;-webkit-transition:width 200ms ease-out;transition:width 200ms ease-out;max-width:100%;} .kUINmH:after{display:none;content:'';height:14px;width:2px;background-color:#ee9c16;position:absolute;top:-2px;right:0px;} .animate-on-scroll .kUINmH{width:84%;max-width:100%;}.kqBtns{position:relative;width:0%;height:10px;float:left;border-radius:2px;background-color:#ee9c16;-webkit-transition:width 200ms ease-out;transition:width 200ms ease-out;max-width:100%;} .kqBtns:after{display:none;content:'';height:14px;width:2px;background-color:#ee9c16;position:absolute;top:-2px;right:0px;} .animate-on-scroll .kqBtns{width:52%;max-width:100%;}.HRvm{position:relative;width:0%;height:10px;float:left;border-radius:2px;background-color:#ee9c16;-webkit-transition:width 200ms ease-out;transition:width 200ms ease-out;max-width:100%;} .HRvm:after{display:none;content:'';height:14px;width:2px;background-color:#ee9c16;position:absolute;top:-2px;right:0px;} .animate-on-scroll .HRvm{width:36%;max-width:100%;}.ieUlRu{position:relative;width:0%;height:10px;float:left;border-radius:2px;background-color:#ee9c16;-webkit-transition:width 200ms ease-out;transition:width 200ms ease-out;max-width:100%;} .ieUlRu:after{display:none;content:'';height:14px;width:2px;background-color:#ee9c16;position:absolute;top:-2px;right:0px;} .animate-on-scroll .ieUlRu{width:32%;max-width:100%;}.dwSORP{position:relative;width:0%;height:10px;float:left;border-radius:2px;background-color:#ee9c16;-webkit-transition:width 200ms ease-out;transition:width 200ms ease-out;max-width:100%;} .dwSORP:after{display:none;content:'';height:14px;width:2px;background-color:#ee9c16;position:absolute;top:-2px;right:0px;} .animate-on-scroll .dwSORP{width:30%;max-width:100%;}.dayovC{position:relative;width:0%;height:10px;float:left;border-radius:2px;background-color:#ee9c16;-webkit-transition:width 200ms ease-out;transition:width 200ms ease-out;max-width:100%;} .dayovC:after{display:none;content:'';height:14px;width:2px;background-color:#ee9c16;position:absolute;top:-2px;right:0px;} .animate-on-scroll .dayovC{width:100%;max-width:100%;}.lfrzej{position:relative;width:0%;height:10px;float:left;border-radius:2px;background-color:#ee9c16;-webkit-transition:width 200ms ease-out;transition:width 200ms ease-out;max-width:100%;} .lfrzej:after{display:none;content:'';height:14px;width:2px;background-color:#ee9c16;position:absolute;top:-2px;right:0px;} .animate-on-scroll .lfrzej{width:11%;max-width:100%;}.DjOkf{position:relative;width:0%;height:10px;float:left;border-radius:2px;background-color:#ee9c16;-webkit-transition:width 200ms ease-out;transition:width 200ms ease-out;max-width:100%;} .DjOkf:after{display:none;content:'';height:14px;width:2px;background-color:#ee9c16;position:absolute;top:-2px;right:0px;} .animate-on-scroll .DjOkf{width:10%;max-width:100%;}.hCFfPr{position:relative;width:0%;height:10px;float:left;border-radius:2px;background-color:#ee9c16;-webkit-transition:width 200ms ease-out;transition:width 200ms ease-out;max-width:100%;} .hCFfPr:after{display:none;content:'';height:14px;width:2px;background-color:#ee9c16;position:absolute;top:-2px;right:0px;} .animate-on-scroll .hCFfPr{width:9%;max-width:100%;}.byNXdD{position:relative;width:0%;height:10px;float:left;border-radius:2px;background-color:#ee9c16;-webkit-transition:width 200ms ease-out;transition:width 200ms ease-out;max-width:100%;} .byNXdD:after{display:none;content:'';height:14px;width:2px;background-color:#ee9c16;position:absolute;top:-2px;right:0px;} .animate-on-scroll .byNXdD{width:8%;max-width:100%;}.bWFdep{position:relative;width:0%;height:4px;float:left;border-radius:2px;background-color:#ee9c16;-webkit-transition:width 200ms ease-out;transition:width 200ms ease-out;max-width:100%;} .bWFdep:after{display:initial;content:'';height:8px;width:2px;background-color:#ee9c16;position:absolute;top:-2px;right:0px;} .animate-on-scroll .bWFdep{width:100%;max-width:100%;}.dFYhPr{position:relative;width:0%;height:4px;float:left;border-radius:2px;background-color:#ee9c16;-webkit-transition:width 200ms ease-out;transition:width 200ms ease-out;max-width:100%;} .dFYhPr:after{display:initial;content:'';height:8px;width:2px;background-color:#ee9c16;position:absolute;top:-2px;right:0px;} .animate-on-scroll .dFYhPr{width:62.69851299842016%;max-width:100%;}.bGHJUg{position:relative;width:0%;height:4px;float:left;border-radius:2px;background-color:#ee9c16;-webkit-transition:width 200ms ease-out;transition:width 200ms ease-out;max-width:100%;} .bGHJUg:after{display:initial;content:'';height:8px;width:2px;background-color:#ee9c16;position:absolute;top:-2px;right:0px;} .animate-on-scroll .bGHJUg{width:61.16723366917367%;max-width:100%;}
/* sc-component-id: sc-1c3hrvg-0 */
.beOkvm{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
/* sc-component-id: sc-1c3hrvg-1 */
.bApXPb{-webkit-flex:1;-ms-flex:1;flex:1;position:relative;background-color:#ecedf1;height:4px;border-radius:4px;margin:0px 7px 0px 5px;}
/* sc-component-id: sc-1c3hrvg-2 */
.dMIbNh{min-width:50px;}
/* sc-component-id: sc-12yzxcu-0 */
.tgMvy{width:100%;}
/* sc-component-id: sc-12yzxcu-1 */
.ZlMJB{font-size:10px;margin:0px 6px 0px 0px;padding:1px 5px;border-radius:4px;color:#86888f;border:1px solid #e8e8e8;white-space:nowrap;}
/* sc-component-id: o8s76u-0 */
.jkbxNx{padding:0px 20px;border-bottom:1px dotted #ebebeb;-webkit-transition:box-shadow 0.25s ease-in-out;transition:box-shadow 0.25s ease-in-out;} @media (max-width:600px){.jkbxNx{padding:0px 15px;}} .jkbxNx .btbnvd-3,.jkbxNx .sc-1ep2vaf-4{-webkit-transition:all 0.25s ease-in-out;transition:all 0.25s ease-in-out;} .jkbxNx:hover{box-shadow:-5px 3px 40px -27px rgba(0,0,0,0.48);} .jkbxNx:hover .btbnvd-3{color:#00bcf1;} .jkbxNx:hover .sc-1ep2vaf-4{border-color:#00bcf1;}
/* sc-component-id: a4ohic-0 */
.buOaUA{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;} @media (max-width:600px){.buOaUA{display:none;}}
/* sc-component-id: pg0np9-0 */
.gFguug{max-width:1220px;padding:0 40px;margin:auto;width:100%;box-sizing:border-box;} @media (max-width:600px){.gFguug{padding:0 10px;}}
/* sc-component-id: sc-147r6x4-1 */
.kxqHNe{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:relative;} @media (max-width:600px){.kxqHNe{width:100%;}}
/* sc-component-id: sc-147r6x4-6 */
.bpPmaH{position:absolute;right:2px;} @media (min-width:601px){.bpPmaH{display:none;}}
/* sc-component-id: sc-147r6x4-7 */
.iuMLcW{width:100%;} @media (max-width:600px){.iuMLcW{display:none;}}
/* sc-component-id: sc-147r6x4-8 */
.mQEPU{width:0;text-align:right;} @media (min-width:601px){.mQEPU{display:none;}}
/* sc-component-id: sc-1q260yn-0 */
.ieklHU{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:3px;cursor:pointer;color:#fff;border:1px solid #00bcf1;background-color:#00bcf1;-webkit-transition:background-color 0.25s ease-in-out;transition:background-color 0.25s ease-in-out;width:75px;height:30px;font-size:12px;margin-left:15px;} .ieklHU:focus{outline:0;} .ieklHU[disabled]{opacity:0.4;cursor:not-allowed;} .ieklHU:hover{background-color:#08addc;} @media (max-width:600px){.ieklHU{width:70px;}} @media (max-width:800px){.ieklHU{display:none;}}
/* sc-component-id: sc-10ti6d2-0 */
.iJBJlQ{font-size:16px;font-weight:600;padding-left:13px;}
/* sc-component-id: sc-10ti6d2-1 */
.dUpNEB{max-width:1220px;padding:0 40px;margin:auto;width:100%;box-sizing:border-box;position:relative;top:0px;} @media (max-width:600px){.dUpNEB{padding:0 10px;}} @media (max-width:600px){.dUpNEB{padding:0 15px;}}
/* sc-component-id: sc-10ti6d2-2 */
.ioPRxs{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}
/* sc-component-id: sc-10ti6d2-3 */
.kSZBmM{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-width:270px;} @media (max-width:1000px){.kSZBmM{min-width:250px;}} @media (max-width:600px){.kSZBmM{min-width:0px;}}
/* sc-component-id: sc-10ti6d2-4 */
.lpgKoo{cursor:pointer;padding:0 20px;margin:0 -20px;} @media (max-width:600px){.lpgKoo{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}
/* sc-component-id: sc-10ti6d2-5 */
.gscDjN{display:none;height:35px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 20px;margin:0 -20px;cursor:pointer;} @media (min-width:601px){.gscDjN{display:none;}}.hLmUXL{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:35px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 20px;margin:0 -20px;cursor:pointer;} @media (min-width:601px){.hLmUXL{display:none;}}
/* sc-component-id: sc-10ti6d2-6 */
.cWHojO{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;width:20px;height:0;border:1px solid #9b9b9b;border-color:#575a60;} .cWHojO:before{content:'';position:absolute;bottom:-4px;width:8px;height:8px;border:2px solid #9b9b9b;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);left:0;border-top:0;border-right:0;} .cWHojO:before{border-color:#575a60;}
/* sc-component-id: sc-10ti6d2-7 */
.kwEQpM{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;cursor:pointer;width:135px;height:50px;margin-left:20px;} @media (max-width:600px){.kwEQpM{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:95px;height:35px;}}
/* sc-component-id: sc-10ti6d2-8 */
.eFdpyl{-webkit-flex:1;-ms-flex:1;flex:1;margin:0px;max-width:600px;min-width:300px;} @media (max-width:600px){.eFdpyl{-webkit-flex:1;-ms-flex:1;flex:1;min-width:50px;float:right;}}
/* sc-component-id: sc-10ti6d2-9 */
.iNunpm{-webkit-flex:1;-ms-flex:1;flex:1;min-width:50px;float:right;}
/* sc-component-id: sc-10ti6d2-10 */
.daVhee{position:relative;}
/* sc-component-id: sc-10ti6d2-11 */
.guIVWT{position:fixed;width:100%;top:0px;padding:15px 0;z-index:1000;box-shadow:0 0 6px 0 rgba(0,0,0,0.06);background:#fff;min-height:50px;} .guIVWT .sc-10ti6d2-6,.guIVWT .sc-10ti6d2-8{visibility:visible;-webkit-flex:1;-ms-flex:1;flex:1;} .guIVWT .sc-10ti6d2-7{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;} @media (max-width:600px){.guIVWT{min-height:auto;top:0px;}}
/* sc-component-id: sc-10ti6d2-12 */
.bUAsAb{padding-top:80px;position:relative;} @media (max-width:600px){.bUAsAb{display:none;padding-top:65px;}}
/* sc-component-id: sc-10ti6d2-13 */
.evKzrL{padding:15px 0;position:fixed;top:0;width:100%;background:white;z-index:1000;} @media (max-width:600px){.evKzrL{top:0px;}}
/* sc-component-id: sc-10ti6d2-14 */
.ixhEXv{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
/* sc-component-id: sc-10ti6d2-15 */
.jhlqAr{display:none;padding-top:65px;} @media (max-width:600px){.jhlqAr{display:block;padding-bottom:0px;}}
/* sc-component-id: sc-10ti6d2-16 */
.ekneiw{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
/* sc-component-id: sc-1isfu94-0 */
.ddBpXw{width:100%;box-sizing:border-box;font-weight:lighter;}
/* sc-component-id: sc-1isfu94-1 */
.gwwRpJ{border-top:9px solid #00bcf1;border-bottom:9px solid #223368;}
/* sc-component-id: sc-1isfu94-2 */
.dElAgC{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-top:40px;padding-bottom:40px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;} @media (max-width:600px){.dElAgC{display:none;}}
/* sc-component-id: sc-1isfu94-3 */
.gvHMjn{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:14px;} @media (max-width:1000px) and (min-width:801px){.gvHMjn{font-size:12px;}}
/* sc-component-id: sc-1isfu94-4 */
.hHvOwT{color:#727682;margin-top:7px;margin-bottom:7px;} .hHvOwT:hover{cursor:pointer;color:#474950;} .hHvOwT a{-webkit-text-decoration:none;text-decoration:none;color:inherit;}
/* sc-component-id: sc-1isfu94-5 */
.jmooU{color:#727682;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:white;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;} @media (min-width:601px){.jmooU{display:none;}}
/* sc-component-id: sc-1isfu94-6 */
.kOBPJy{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}
/* sc-component-id: sc-1isfu94-7 */
.hgksUW{font-weight:400;font-size:1.2em;line-height:31px;padding-left:20px;padding-right:20px;} @media (max-width:500px){.hgksUW{padding-left:12px;padding-right:12px;}} @media (max-width:400px){.hgksUW{padding-left:10px;padding-right:10px;text-align:center;}} @media (max-width:330px){.hgksUW{padding-left:7px;padding-right:7px;text-align:center;}} .hgksUW:hover{cursor:pointer;color:#474950;} .hgksUW a{-webkit-text-decoration:none;text-decoration:none;color:inherit;}
/* sc-component-id: sc-1isfu94-8 */
.eQDXaE{background-color:#fafafa;padding-top:25px;padding-bottom:30px;background-color:#fafafa;} @media (max-width:600px){.eQDXaE{padding-top:22px;}}
/* sc-component-id: sc-1isfu94-9 */
@media (min-width:601px){.ftaQwo{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}}
/* sc-component-id: sc-1isfu94-10 */
@media (min-width:601px){.jaJgIC{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:55%;}} @media (max-width:600px){.jaJgIC{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}}
/* sc-component-id: sc-1isfu94-11 */
@media (min-width:601px){.kNUMfL{padding-right:10%;}} @media (max-width:600px){.kNUMfL{display:block;padding-left:15px;}}
/* sc-component-id: sc-1isfu94-12 */
.dxnkUn{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:100%;} @media (max-width:600px){.dxnkUn{display:block;position:relative;left:0px;text-align:center;margin-top:25px;}}
/* sc-component-id: sc-1isfu94-13 */
.fuEwnY{cursor:pointer;width:28px;height:auto;padding-left:8px;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform 0.25s ease-in-out;-webkit-transition:transform 0.25s ease-in-out;transition:transform 0.25s ease-in-out;} @media (max-width:1000px) and (min-width:801px){.fuEwnY{padding-left:5px;}} @media (max-width:600px){.fuEwnY{width:26px;padding-left:5px;}} .fuEwnY:hover{-webkit-transform:scale(1.08);-ms-transform:scale(1.08);transform:scale(1.08);}
/* sc-component-id: sc-1isfu94-14 */
.bJmkhh{margin-top:25px;font-size:1.2em;color:#727682;line-height:22px;} @media (max-width:600px){.bJmkhh{font-size:11px;line-height:18px;text-align:center;}}
/* sc-component-id: sc-1isfu94-16 */
.gKumxd{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px 15px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;font-size:14px;color:#727682;border-bottom:1px solid #eee;box-sizing:border-box;}
/* sc-component-id: sc-1isfu94-17 */
.kNEyYV{-webkit-flex:1;-ms-flex:1;flex:1;}
/* sc-component-id: sc-1isfu94-18 */
.iVsPvf{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;float:right;}
/* sc-component-id: sc-1isfu94-19 */
.yddCW{border-top:1px solid #efeeee;} @media (max-width:600px){.yddCW{display:none;}} .yddCW .sc-1isfu94-3{font-size:1.2em;line-height:14px;font-weight:300;} .yddCW .pg0np9-0{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}
/* sc-component-id: sc-1isfu94-20 */
.guWAys{padding:10px 0;}
/* sc-component-id: sc-1isfu94-21 */
.kqLMfR{max-width:1220px;padding:0 40px;margin:auto;width:100%;box-sizing:border-box;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-top:40px;padding-bottom:40px;} @media (max-width:600px){.kqLMfR{padding:0 10px;}}
/* sc-component-id: sc-1isfu94-22 */
.gthfqu{padding-bottom:15px;line-height:28px;} .gthfqu:last-child{padding-bottom:0;}
/* sc-component-id: sc-1isfu94-23 */
.exwluv{font-size:14px;color:#727682;} .exwluv:hover{cursor:pointer;color:#474950;}
/* sc-component-id: sc-1isfu94-24 */
.cHQZvL{font-size:1.4em;color:#4a4a4a;font-weight:600;padding-right:8px;}
/* sc-component-id: sc-1isfu94-25 */
.ftkwVg{font-size:1em;position:relative;bottom:1px;padding:0 2px;color:#d4d4d4;}
/* sc-component-id: sc-1isfu94-26 */
.czSfIZ{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-right:20px;} .czSfIZ a{height:30px;} @media (max-width:600px){.czSfIZ{display:none;}}
/* sc-component-id: sc-16as23r-0 */
.iidhCO{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:12px;box-shadow:0 2px 26px 0 rgba(0,0,0,0.2);border-radius:4px;background:#fff;} @media (max-width:600px){.iidhCO{width:inherit;box-shadow:none;width:100vw;}}
/* sc-component-id: sc-16as23r-1 */
.guUzqQ{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:0;height:0;border-top:0px;-webkit-transform:initial;-ms-transform:initial;transform:initial;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid black;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);border-bottom-color:#c6c9cf;z-index:10;position:relative;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #fff;}
/* sc-component-id: sc-16as23r-2 */
.biJoRK{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}
/* sc-component-id: sc-16as23r-3 */
.jHeStj{display:block;} @media (max-width:600px){.jHeStj{display:none;}}
/* sc-component-id: sc-18jzgeh-0 */
.cqNvOT{max-width:500px;position:fixed;visibility:hidden;z-index:1100;top:0px;left:0px;} @media (max-width:600px){.cqNvOT{height:100vh;background:rgba(0,0,0,0.3);top:0;left:0;}}
/* sc-component-id: nau75s-0 */
.llGmbQ{min-height:100vh;min-width:100%;background-color:#f5f7f9;}
/* sc-component-id: nau75s-1 */
.isycNz{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:none;-ms-flex:none;flex:none;height:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);} .isycNz.sidebar-push__left{-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);-webkit-transition:-webkit-transform 300ms ease-in;-webkit-transition:transform 300ms ease-in;transition:transform 300ms ease-in;} .isycNz.sidebar-push__left.sidebar--visible{-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);-webkit-transition:-webkit-transform 300ms ease-out;-webkit-transition:transform 300ms ease-out;transition:transform 300ms ease-out;} .isycNz.sidebar-push__left .sc-104wt3l-1{position:relative;-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);box-shadow:11px 0 18px 0 rgba(0,0,0,0.1);} .isycNz.sidebar-push__right{-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);-webkit-transition:-webkit-transform 300ms ease-in;-webkit-transition:transform 300ms ease-in;transition:transform 300ms ease-in;} .isycNz.sidebar-push__right.sidebar--visible{-webkit-transform:translateX(-0px);-ms-transform:translateX(-0px);transform:translateX(-0px);-webkit-transition:-webkit-transform 300ms ease-out;-webkit-transition:transform 300ms ease-out;transition:transform 300ms ease-out;} .isycNz.sidebar-push__right .sc-104wt3l-1{position:relative;-webkit-transform:translateX(100vw);-ms-transform:translateX(100vw);transform:translateX(100vw);box-shadow:-11px 0 18px 0 rgba(0,0,0,0.1);} @media (min-width:601px){.isycNz.sidebar-push__left--mobile-overlay{-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);-webkit-transition:-webkit-transform 300ms ease-in;-webkit-transition:transform 300ms ease-in;transition:transform 300ms ease-in;}.isycNz.sidebar-push__left--mobile-overlay.sidebar--visible{-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);-webkit-transition:-webkit-transform 300ms ease-out;-webkit-transition:transform 300ms ease-out;transition:transform 300ms ease-out;}.isycNz.sidebar-push__left--mobile-overlay .sc-104wt3l-1{position:relative;-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);box-shadow:11px 0 18px 0 rgba(0,0,0,0.1);}.isycNz.sidebar-push__right--mobile-overlay{-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);-webkit-transition:-webkit-transform 300ms ease-in;-webkit-transition:transform 300ms ease-in;transition:transform 300ms ease-in;}.isycNz.sidebar-push__right--mobile-overlay.sidebar--visible{-webkit-transform:translateX(-0px);-ms-transform:translateX(-0px);transform:translateX(-0px);-webkit-transition:-webkit-transform 300ms ease-out;-webkit-transition:transform 300ms ease-out;transition:transform 300ms ease-out;}.isycNz.sidebar-push__right--mobile-overlay .sc-104wt3l-1{position:relative;-webkit-transform:translateX(100vw);-ms-transform:translateX(100vw);transform:translateX(100vw);box-shadow:-11px 0 18px 0 rgba(0,0,0,0.1);}}
/* sc-component-id: sc-147r6x4-10 */
.jBcsdL{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;max-width:700px;} @media (max-width:600px){.jBcsdL{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:auto;}}
/* sc-component-id: sc-147r6x4-11 */
.hHbTFR{width:100%;height:40px;font-size:1.6em;border-radius:3px;background-color:#fff;border:1px solid #dadadc;box-sizing:border-box;-webkit-transition:width 0.5s;transition:width 0.5s;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:5px 10px 5px 40px;width:95%;} .hHbTFR::-webkit-input-placeholder{color:#bbb;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;font-weight:300;} .hHbTFR::-moz-placeholder{color:#bbb;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;font-weight:300;} .hHbTFR:-ms-input-placeholder{color:#bbb;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;font-weight:300;} .hHbTFR::placeholder{color:#bbb;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;font-weight:300;} .hHbTFR::-webkit-search-decoration,.hHbTFR::-webkit-search-cancel-button,.hHbTFR::-webkit-search-results-button,.hHbTFR::-webkit-search-results-decoration{-webkit-appearance:none;} .hHbTFR:focus{outline:0;} @media (max-width:600px){.hHbTFR{width:0;border:0;padding:0;font-size:1.4em;height:35px;padding:5px 40px;}}
/* sc-component-id: sc-147r6x4-12 */
.lhfpFo{position:absolute;top:10px;left:13px;height:20px;width:15px;z-index:2;} @media (max-width:600px){.lhfpFo{top:12px;left:11px;height:15px;display:none;}}
/* sc-component-id: sc-1fcsi9p-1 */
.boWlMh{color:#00bcf1;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;font-size:14px;font-weight:300;} .boWlMh:hover{color:#223368;}.gHOfvO{color:#00bcf1;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;margin-left:auto;} .gHOfvO:hover{color:#223368;}
/* sc-component-id: sc-126kcut-1 */
.fpYqzF{font-size:1.8em;color:#000;font-weight:600;line-height:1.17;margin:0;} @media (max-width:600px){.fpYqzF{font-size:1.6em;}}
/* sc-component-id: sc-1l4v6b8-0 */
.eWDGgC{display:none;} @media only screen and (min-width:601px){.eWDGgC{display:block;}}
/* sc-component-id: sc-1tp71gf-0 */
.ijgJpn{display:none;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:fixed;width:100%;height:100%;height:100vh;z-index:1020;top:0px;left:0px;background-color:rgba(0,0,0,0.8);}
/* sc-component-id: sc-1tp71gf-1 */
.cjEcpf{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;} @media (max-width:600px){.cjEcpf{width:100%;max-height:85vh;}}
/* sc-component-id: pm7u8-0 */
.iKbgRh{max-width:1220px;padding:0 40px;margin:auto;width:100%;box-sizing:border-box;} @media (max-width:600px){.iKbgRh{padding:0 10px;}} @media (max-width:600px){.iKbgRh{padding:0 15px;}}
/* sc-component-id: pm7u8-1 */
.Kasah{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:25px;} @media (max-width:600px){.Kasah{padding:0;margin:0 0 10px;}}
/* sc-component-id: pm7u8-2 */
.gPzNgo{width:80px;height:80px;border-radius:4px;} @media (max-width:600px){.gPzNgo{width:60px;height:60px;}}
/* sc-component-id: pm7u8-3 */
.bXxmuj{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:20px;}
/* sc-component-id: pm7u8-4 */
.dOizIq{margin:0;font-weight:400;color:#000;font-size:2.4em;} @media (max-width:600px){.dOizIq{font-size:1.8em;padding-right:25px;}}
/* sc-component-id: pm7u8-6 */
.ekaHEH{margin-top:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
/* sc-component-id: pm7u8-11 */
.gIJaQB{display:block;padding-bottom:15px;} @media only screen and (min-width:601px){.gIJaQB{display:none;}}
/* sc-component-id: g7n17d-0 */
.fdAILa{color:#59aa00;} .fdAILa:before{content:'+';}
/* sc-component-id: sdvge3-0 */
.fBhEjk{position:absolute;top:0;right:0;width:120px;height:130px;background-image:url(/static/images/mutual-fund/chart-profit-bg.svg);background-repeat:no-repeat;background-position:top right;background-size:120px;-webkit-transform-origin:top right;-ms-transform-origin:top right;transform-origin:top right;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform 300ms ease-in-out;-webkit-transition:transform 300ms ease-in-out;transition:transform 300ms ease-in-out;} @media (max-width:600px){.fBhEjk{width:86px;height:94px;background-size:86px;}} .fBhEjk.animate-on-scroll{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}
/* sc-component-id: sdvge3-1 */
.jPQExa{position:absolute;width:38px;top:20px;left:74px;opacity:0;-webkit-transition:opacity 100ms 300ms ease-in;transition:opacity 100ms 300ms ease-in;} @media (max-width:600px){.jPQExa{width:24px;top:15px;left:54px;}} .animate-on-scroll .jPQExa{opacity:1;-webkit-animation-name:iteMMc;animation-name:iteMMc;-webkit-animation-duration:600ms;animation-duration:600ms;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-delay:300ms;animation-delay:300ms;}
/* sc-component-id: sc-1a6vifk-0 */
.hmXixn{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:20px;margin-bottom:25px;border-radius:4px;box-shadow:-6px 5px 10px 0 rgba(128,152,213,0.06);background-color:#fff;padding:20px 0 25px;position:relative;overflow:hidden;} @media (max-width:600px){.hmXixn{margin:0 8px 15px;}} @media (max-width:600px){.hmXixn{padding:20px 0 15px;}}
/* sc-component-id: sc-1a6vifk-1 */
.cXrOLJ{padding:0 20px;font-size:1.6em;color:#9b9b9b;}
/* sc-component-id: sc-1a6vifk-2 */
.gnXOvi{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;padding:0 20px;margin-bottom:40px;} @media (max-width:600px){.gnXOvi{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;margin-bottom:20px;}}
/* sc-component-id: sc-1a6vifk-3 */
.gPgjCo{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-left:100px;min-width:320px;} @media (max-width:1000px) and (min-width:801px){.gPgjCo{margin-left:30px;min-width:250px;}} @media (max-width:600px){.gPgjCo{margin-left:0;margin-top:20px;}}
/* sc-component-id: sc-1a6vifk-4 */
.gJavdS{font-size:30px;}
/* sc-component-id: sc-1a6vifk-5 */
.TCFlM{font-size:20px;}
/* sc-component-id: sc-1a6vifk-7 */
.jJSrrd{font-size:14px;} @media (max-width:600px){.jJSrrd{font-size:12px;}}
/* sc-component-id: sc-1a6vifk-8 */
.iTjPWn{font-size:20px;color:#59aa00;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;} @media (max-width:600px){.iTjPWn{font-size:14px;}} .iTjPWn .sc-1a6vifk-7{margin-left:4px;}
/* sc-component-id: sc-1a6vifk-11 */
.enidQ{height:350px;}
/* sc-component-id: sc-1jgs2q-1 */
.gBqDdu{margin:0 10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}
/* sc-component-id: sc-1jgs2q-2 */
.dkSKGD{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:100%;overflow:auto;position:relative;} .dkSKGD::-webkit-scrollbar{display:none;}
/* sc-component-id: sc-1jgs2q-3 */
.bkXkzk{padding:20px 8px 25px 8px;} .bkXkzk:last-child{padding:20px 20px 25px 8px;} .bkXkzk:first-child{padding:20px 8px 25px 20px;}
/* sc-component-id: sc-1jgs2q-4 */
.abTRD{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:visible;}
/* sc-component-id: sc-1jgs2q-6 */
.kHBeax{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}
/* sc-component-id: sc-7k4tyu-0 */
.kYXcNj{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;padding-bottom:20px;max-width:520px;background-color:#fff;border-radius:8px;box-shadow:0 0 44px 0 rgba(0,0,0,0.09);overflow:auto;}
/* sc-component-id: sc-7k4tyu-1 */
.dwmPnI{position:relative;width:100%;padding:15px 25px;border-bottom:1px solid #ecebeb;box-sizing:border-box;}
/* sc-component-id: sc-7k4tyu-2 */
.iCAntx{position:absolute;top:10px;right:10px;width:23px;height:23px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:1.6em;font-weight:600;background-color:#f0f0f0;border-radius:50%;color:#727682;cursor:pointer;}
/* sc-component-id: sc-1xbcxh0-0 */
.bknFuj{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:20px;margin-bottom:25px;border-radius:4px;box-shadow:-6px 5px 10px 0 rgba(128,152,213,0.06);background-color:#fff;padding:20px 0 0;} @media (max-width:600px){.bknFuj{margin:0 8px 15px;}} .bknFuj .sc-126kcut-1{padding-left:20px;}
/* sc-component-id: sc-1xbcxh0-1 */
.kuPxuO{padding:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:230px;border-radius:6px;border:1px solid #e8ebf2;box-shadow:-10px 9px 21px 0 rgba(128,152,213,0.08);box-sizing:border-box;padding:17px 15px 12px;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}
/* sc-component-id: sc-1xbcxh0-2 */
.gZKocn{font-size:3.6em;line-height:27px;color:#141b2f;}
/* sc-component-id: sc-1xbcxh0-3 */
.hXklkk{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:110px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:5px;} .hXklkk img{width:18px;height:18px;}
/* sc-component-id: sc-1xbcxh0-4 */
.jpCSLv{font-size:1.2em;color:#727682;}
/* sc-component-id: sc-1xbcxh0-5 */
.UFivh{color:#141b2f;}
/* sc-component-id: sc-74f8f3-0 */
.cgfMZm{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:20px;margin-bottom:25px;border-radius:4px;box-shadow:-6px 5px 10px 0 rgba(128,152,213,0.06);background-color:#fff;padding:20px 0 0;} @media (max-width:600px){.cgfMZm{margin:0 8px 15px;}} .cgfMZm .sc-126kcut-1{padding-left:20px;}
/* sc-component-id: sc-74f8f3-1 */
.huZYlh{padding:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:230px;border-radius:6px;border:1px solid #e8ebf2;box-shadow:-10px 9px 21px 0 rgba(128,152,213,0.08);box-sizing:border-box;padding-right:25px;position:relative;cursor:pointer;box-shadow:none;-webkit-transition:box-shadow 0.2s ease-in-out;transition:box-shadow 0.2s ease-in-out;} .huZYlh .sc-1ep2vaf-6{position:absolute;top:28px;right:10px;width:14px;} .huZYlh .sc-1ep2vaf-6:after{bottom:-4px;width:6px;height:6px;} .huZYlh:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.15);}
/* sc-component-id: sc-74f8f3-2 */
.dnKHUO{width:50px;height:50px;border-radius:4px;}
/* sc-component-id: sc-74f8f3-3 */
.kLXjHJ{font-size:1.4em;font-weight:600;margin-bottom:5px;color:#141b2f;white-space:nowrap;}
/* sc-component-id: sc-74f8f3-4 */
.fTqOAc{font-size:1.2em;color:#575a60;text-align:left;}
/* sc-component-id: sc-1oz2lru-0 */
.iMCrtw{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:20px;margin-bottom:25px;border-radius:4px;box-shadow:-6px 5px 10px 0 rgba(128,152,213,0.06);background-color:#fff;} @media (max-width:600px){.iMCrtw{margin:0 8px 15px;}} .iMCrtw .sc-126kcut-1{margin-bottom:25px;}
/* sc-component-id: sc-1oz2lru-1 */
.fOeUuC{margin-top:25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:700px;}
/* sc-component-id: sc-1oz2lru-2 */
.bUViGu{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;} @media (max-width:600px){.bUViGu{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}
/* sc-component-id: sc-1oz2lru-3 */
.jKLJys{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;} .jKLJys> div{margin-bottom:20px;min-width:110px;} @media (max-width:600px){.jKLJys{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}}
/* sc-component-id: sc-1oz2lru-5 */
.hOCdYR{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:none;} .hOCdYR> div{margin-bottom:20px;min-width:110px;} @media (max-width:600px){.hOCdYR{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}} @media (max-width:600px){.hOCdYR{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}
/* sc-component-id: sc-1oz2lru-6 */
.cUjLtm{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;display:none;} .cUjLtm> div{min-width:110px;} @media (max-width:600px){.cUjLtm{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}
/* sc-component-id: sc-1oz2lru-7 */
.kmIyUG{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;} @media (max-width:600px){.kmIyUG{display:none;}}
/* sc-component-id: dt0la0-0 */
.ihsSjf{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:15px;}
/* sc-component-id: dt0la0-2 */
.gjVdHf{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:65%;max-width:500px;min-width:325px;margin-right:10px;} @media (max-width:600px){.gjVdHf{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}} @media (max-width:900px) and (min-width:800px){.gjVdHf{min-width:230px;}} @media (max-width:600px){.gjVdHf{width:100%;max-width:400px;min-width:0;margin-right:0;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}}
/* sc-component-id: dt0la0-3 */
.iltGzq{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:1;-ms-flex:1;flex:1;min-width:80px;} @media (max-width:600px){.iltGzq{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}} @media (max-width:600px){.iltGzq{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}}
/* sc-component-id: dt0la0-4 */
.iEHPjc{font-size:1.4em;color:#141b2f;margin-right:10px;max-width:50%;} @media (max-width:600px){.iEHPjc{margin-bottom:15px;max-width:100%;}}
/* sc-component-id: dt0la0-5 */
.eKZcU{float:right;margin-left:auto;width:40%;} @media (max-width:600px){.eKZcU{width:100%;float:left;}}
/* sc-component-id: dt0la0-6 */
.ktoRGS{font-size:1.4em;color:#727682;margin-right:10px;} @media (max-width:600px){.ktoRGS{float:right;margin:10px 0 0 auto;}}
/* sc-component-id: dt0la0-7 */
.hjCnEX{font-size:1.4em;float:right;margin-left:auto;min-width:70px;white-space:nowrap;} @media (max-width:600px){.hjCnEX{min-width:0;}}
/* sc-component-id: sc-4z535r-0 */
.cRlGxq{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:20px;margin-bottom:25px;border-radius:4px;box-shadow:-6px 5px 10px 0 rgba(128,152,213,0.06);background-color:#fff;position:relative;padding:20px 0 10px;} @media (max-width:600px){.cRlGxq{margin:0 8px 15px;}}
/* sc-component-id: sc-4z535r-1 */
.kCvcj{width:100%;padding:0 20px;box-sizing:border-box;overflow-y:auto;max-height:none;}
/* sc-component-id: sc-4z535r-2 */
.fQgLiK{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 20px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;} @media (max-width:600px){.fQgLiK{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}}
/* sc-component-id: sc-4z535r-3 */
.dtkJjp{background-color:#f8fcfd;margin:15px 0;padding:0 20px;}
/* sc-component-id: sc-4z535r-4 */
.comAse{float:right;margin-left:auto;font-size:1.2em;color:#9b9b9b;} @media (max-width:600px){.comAse{margin-top:15px;float:left;margin-left:0;}}
/* sc-component-id: sc-4z535r-5 */
.bMRUmg{margin:10px auto;font-size:1.4em;color:#00bcf1;cursor:pointer;}
/* sc-component-id: sc-4z535r-10 */
.jVRrJh{margin:auto;} @media (max-width:600px){.jVRrJh{display:none;}}
/* sc-component-id: sc-4z535r-11 */
.eYTpLs{margin:auto;} @media (min-width:601px){.eYTpLs{display:none;}}
/* sc-component-id: sc-16rkkd8-0 */
.kPtzfB{width:95px;} .kPtzfB .select__control,.kPtzfB .select__control--is-focused,.kPtzfB .select__control--menu-is-open{min-height:initial;border-radius:4px;height:33px;border-color:#e6e7ec;cursor:pointer;box-shadow:none;} .kPtzfB .select__control:hover,.kPtzfB .select__control--is-focused:hover,.kPtzfB .select__control--menu-is-open:hover{border-color:#e6e7ec;} .kPtzfB .select__dropdown-indicator{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:0;height:0;border-top:0px;-webkit-transform:initial;-ms-transform:initial;transform:initial;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid black;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);border-bottom-color:#c6c9cf;padding:initial;margin-right:10px;border-bottom-color:#adafb6;} .kPtzfB .select__control--menu-is-open .select__dropdown-indicator{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);border-bottom-color:#00bcf1;opacity:1;} .kPtzfB .select__dropdown-indicator svg{display:none;} .kPtzfB .select__indicator-separator{display:none;} .kPtzfB .select__single-value{font-weight:600;} .kPtzfB .select__menu{border-radius:0px;box-shadow:0 8px 10px 0 rgba(20,27,47,0.12) !important;top:100%;margin:0;} .kPtzfB .select__menu-list{margin:0;padding:0;max-height:238px;background-color:#fff;} .kPtzfB .select__value-container{height:27px;} .kPtzfB .select__single-value{font-size:12px;} .kPtzfB .select__option{font-size:12px;border-bottom:1px solid rgba(227,227,227,.6);cursor:pointer;} .kPtzfB .select__option:hover{background-color:#f8f8f8;} .kPtzfB .select__control--menu-is-open .select__option{font-size:12px;border-bottom:1px solid rgba(227,227,227,.6);cursor:pointer;} .kPtzfB .select__control--menu-is-open .select__option:hover{background-color:#f8f8f8;} .kPtzfB .select__option--is-selected{background-color:#00bcf1;} .kPtzfB .select__option--is-selected:hover{background-color:#00bcf1;}
/* sc-component-id: nyp18t-0 */
.eTlzLC{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:20px;margin-bottom:25px;border-radius:4px;box-shadow:-6px 5px 10px 0 rgba(128,152,213,0.06);background-color:#fff;padding:20px 0 0;} @media (max-width:600px){.eTlzLC{margin:0 8px 15px;}}
/* sc-component-id: nyp18t-1 */
.dDuyJN{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 20px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
/* sc-component-id: nyp18t-2 */
.dUMOMk{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:3px;cursor:pointer;color:#00bcf1;border:1px solid #00bcf1;background-color:#fff;width:70px;height:25px;font-size:1.2em;margin-left:auto;} .dUMOMk:focus{outline:0;} .dUMOMk[disabled]{opacity:0.4;cursor:not-allowed;}
/* sc-component-id: nyp18t-3 */
.fijrLF{padding:10px 20px;margin:15px 0 0;background-color:#f6f7fa;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;} @media (max-width:600px){.fijrLF{padding:10px 15px;}}
/* sc-component-id: nyp18t-4 */
.kPScnw{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:1.6em;font-weight:600;} @media (max-width:600px){.kPScnw{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}
/* sc-component-id: nyp18t-5 */
.brFjeK{color:#141b2f;margin-right:10px;} @media (max-width:600px){.brFjeK{margin-bottom:5px;}}
/* sc-component-id: nyp18t-6 */
.bjxHBH{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;float:right;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:auto;} @media (max-width:600px){.bjxHBH{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}
/* sc-component-id: nyp18t-7 */
.izWAtq{font-size:1.2em;color:#727682;margin-right:10px;} @media (max-width:600px){.izWAtq{margin-bottom:5px;}}
/* sc-component-id: c27kjm-1 */
.blIfsT{font-size:18px;font-weight:600;} @media (max-width:600px){.blIfsT{font-size:16px;}}
/* sc-component-id: c27kjm-2 */
.dkpJLI{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:20px;font-size:14px;color:#575a60;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;} @media (max-width:600px){.dkpJLI{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:0px;}}
/* sc-component-id: c27kjm-3 */
.joUFiB{margin-right:9%;} .joUFiB:last-of-type{margin-right:0%;} @media (max-width:1000px){.joUFiB{margin-right:4%;}} @media (max-width:600px){.joUFiB{margin-top:20px;max-width:initial;}}
/* sc-component-id: c27kjm-4 */
.dvFVvS{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}
/* sc-component-id: c27kjm-5 */
.dyhiVf{padding-right:3px;width:1.6rem;height:1.9rem;}
/* sc-component-id: c27kjm-6 */
.dAPDrH{color:#5a5b5d;}
/* sc-component-id: c27kjm-7 */
.jocnDl{margin-top:10px;color:#5a5b5d;font-weight:300;font-size:13px;} .jocnDl a{-webkit-text-decoration:none;text-decoration:none;color:#5a5b5d;display:block;}
/* sc-component-id: c27kjm-8 */
.gEwmfo{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;float:right;margin-left:auto;} @media (min-width:601px){.gEwmfo{min-width:360px;}.gEwmfo .c27kjm-3{width:160px;}.gEwmfo .c27kjm-3:first-of-type{width:200px;}} @media (max-width:600px){.gEwmfo{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:0;}}
/* sc-component-id: sc-6fhb5m-0 */
.eCLuAy{max-width:1220px;padding:0 40px;margin:auto;width:100%;box-sizing:border-box;} @media (max-width:600px){.eCLuAy{padding:0 10px;}} @media (max-width:800px) and (min-width:601px){.eCLuAy{padding-top:25px;}} @media (max-width:600px){.eCLuAy{padding:0 15px;}}
/* sc-component-id: sc-6fhb5m-1 */
.jbzfVD{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:10px;max-width:800px;} @media (max-width:600px){.jbzfVD{padding:25px 0;}}
/* sc-component-id: sc-6fhb5m-2 */
.bgzAKi{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:25px;} @media (max-width:600px){.bgzAKi{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}
/* sc-component-id: sc-6fhb5m-3 */
.dVKOIs{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;float:right;margin-left:auto;min-width:360px;} .dVKOIs .sc-1lcrp84-0{width:160px;} .dVKOIs .sc-1lcrp84-0:first-of-type{width:200px;} @media (max-width:600px){.dVKOIs{margin:20px 0 0;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;min-width:250px;}.dVKOIs> div{margin-right:70px;}}
/* sc-component-id: sc-6fhb5m-4 */
.jBNjsO{color:#00bcf1;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;font-size:12px;font-weight:300;} .jBNjsO:hover{color:#223368;}
/* sc-component-id: sc-17rtuy8-0 */
.egTKSN{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:15px;width:100%;max-width:600px;}
/* sc-component-id: sc-17rtuy8-1 */
.fjQwaJ{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #d4d6db;min-height:122px;}
/* sc-component-id: sc-17rtuy8-2 */
.jZMOBs{width:55px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}
/* sc-component-id: sc-17rtuy8-3 */
.gpCFj{font-size:1.0em;line-height:17px;color:#141b2f;margin-bottom:5px;}
/* sc-component-id: sc-17rtuy8-4 */
.dIAXTp{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:30px;height:50px;border-radius:1px;background-color:#d4d6db;overflow:hidden;-webkit-transition:height 300ms ease-out;transition:height 300ms ease-out;} .animate-on-scroll .dIAXTp{height:64.19515785762778px;}.cUgAGN{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:30px;height:50px;border-radius:1px;background-color:#d4d6db;overflow:hidden;-webkit-transition:height 300ms ease-out;transition:height 300ms ease-out;} .animate-on-scroll .cUgAGN{height:78.26504111283748px;}.kbXuja{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:30px;height:50px;border-radius:1px;background-color:#d4d6db;overflow:hidden;-webkit-transition:height 300ms ease-out;transition:height 300ms ease-out;} .animate-on-scroll .kbXuja{height:95.64683762469318px;}.glJGpO{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:30px;height:50px;border-radius:1px;background-color:#d4d6db;overflow:hidden;-webkit-transition:height 300ms ease-out;transition:height 300ms ease-out;} .animate-on-scroll .glJGpO{height:100px;}
/* sc-component-id: sc-17rtuy8-5 */
.eADZfD{margin:6px;opacity:0;-webkit-transition:opacity 300ms ease-out 400ms;transition:opacity 300ms ease-out 400ms;} .animate-on-scroll .eADZfD{opacity:1;}
/* sc-component-id: sc-17rtuy8-6 */
.joGBum{position:absolute;width:100%;height:0px;background-color:#59aa00;-webkit-transition:height 300ms ease-out;transition:height 300ms ease-out;bottom:50px;} .joGBum .sc-17rtuy8-5{display:none;} .animate-on-scroll .joGBum{height:14.195157857627786px;}.emtLQq{position:absolute;width:100%;height:0px;background-color:#59aa00;-webkit-transition:height 300ms ease-out;transition:height 300ms ease-out;bottom:50px;} .emtLQq .sc-17rtuy8-5{display:none;} .animate-on-scroll .emtLQq{height:28.26504111283747px;}.beSjKv{position:absolute;width:100%;height:0px;background-color:#59aa00;-webkit-transition:height 300ms ease-out;transition:height 300ms ease-out;bottom:50px;} .beSjKv .sc-17rtuy8-5{display:none;} .animate-on-scroll .beSjKv{height:45.64683762469317px;}.cnkNdK{position:absolute;width:100%;height:0px;background-color:#59aa00;-webkit-transition:height 300ms ease-out;transition:height 300ms ease-out;bottom:50px;} .cnkNdK .sc-17rtuy8-5{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;} .animate-on-scroll .cnkNdK{height:50px;}
/* sc-component-id: sc-17rtuy8-7 */
.cgbjDy{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}
/* sc-component-id: sc-17rtuy8-8 */
.fNQZMI{margin-top:5px;font-size:.9em;line-height:1.22;color:#727682;max-width:55px;text-align:center;}
/* sc-component-id: sc-1hmktju-1 */
.gKxsns{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;padding-top:10px;font-size:1.2em;color:#adafb6;cursor:pointer;} .gKxsns:before{content:'.';color:#fff;position:absolute;top:-6px;width:12px;height:12px;border-radius:12px;background-color:#bcbcbc;box-shadow:none;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;} .gKxsns:hover:before{top:-7px;width:14px;height:14px;box-shadow:0 0 4px 0 rgba(0,0,0,0.15);}.jGTVAJ{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;padding-top:10px;font-size:1.2em;color:#00bcf1;cursor:pointer;} .jGTVAJ:before{content:'.';color:#00bcf1;position:absolute;top:-9px;width:18px;height:18px;border-radius:18px;background-color:#00bcf1;box-shadow:0 0 3px 0 rgba(0,0,0,0.24);-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;} .jGTVAJ:hover:before{top:-9px;width:18px;height:18px;box-shadow:0 0 3px 0 rgba(0,0,0,0.24);}
/* sc-component-id: k2k2sx-0 */
.iBNwcH{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:20px;margin-bottom:25px;border-radius:4px;box-shadow:-6px 5px 10px 0 rgba(128,152,213,0.06);background-color:#fff;padding:15px 0 0;} @media (max-width:600px){.iBNwcH{margin:0 8px 15px;}} .iBNwcH .sc-14ip73e-2{height:45px;width:300px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:default;}
/* sc-component-id: k2k2sx-1 */
.cJnDMB{font-size:1.8em;color:#000;font-weight:600;line-height:1.17;margin:0;padding:0 15px;margin-bottom:10px;} @media (max-width:600px){.cJnDMB{font-size:1.6em;}}
/* sc-component-id: k2k2sx-2 */
.cOBfrD{text-transform:capitalize;color:#141b2f;font-size:1em;line-height:1.2;position:absolute;text-align:center;max-width:60px;left:-25px;right:px;bottom:16px;}.dDIFLa{text-transform:capitalize;color:#141b2f;font-size:1em;line-height:1.2;position:absolute;text-align:center;max-width:60px;left:-54px;right:px;bottom:29px;}.loXLJM{text-transform:capitalize;color:#141b2f;font-size:1em;line-height:1.2;position:absolute;text-align:center;max-width:60px;left:-32px;right:px;bottom:44px;}.ctggMH{text-transform:capitalize;color:#141b2f;font-size:1em;line-height:1.2;position:absolute;text-align:center;max-width:60px;left:px;right:-24px;bottom:39px;}.iOPJKU{text-transform:capitalize;color:#141b2f;font-size:1em;line-height:1.2;position:absolute;text-align:center;max-width:60px;left:px;right:-16px;bottom:34px;}.izlbcl{text-transform:capitalize;color:#c02e2e;font-size:1em;line-height:1.2;position:absolute;text-align:center;max-width:60px;left:px;right:-49px;bottom:16px;}
/* sc-component-id: k2k2sx-3 */
.dCeqdQ{position:absolute;left:42px;right:px;bottom:5px;}.dytiWR{position:absolute;left:56px;right:px;bottom:36px;}.bZAPoO{position:absolute;left:94px;right:px;bottom:59px;}.fYCLFc{position:absolute;left:px;right:88px;bottom:59px;}.eREWGL{position:absolute;left:px;right:52px;bottom:37px;}.kljJeP{position:absolute;left:px;right:42px;bottom:5px;}
/* sc-component-id: k2k2sx-4 */
.bkuEKF{position:absolute;bottom:-12px;width:88px;left:50%;-webkit-transform:translateX(-20px);-ms-transform:translateX(-20px);transform:translateX(-20px);}
/* sc-component-id: k2k2sx-5 */
.dduYeI{max-width:100%;-webkit-transform-origin:21px 62px;-ms-transform-origin:21px 62px;transform-origin:21px 62px;-webkit-transform:rotate(-136deg);-ms-transform:rotate(-136deg);transform:rotate(-136deg);-webkit-transition-property:-webkit-transform;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;-webkit-transition-duration:560ms;transition-duration:560ms;} .dduYeI.animate-on-scroll{-webkit-transform:rotate(35deg);-ms-transform:rotate(35deg);transform:rotate(35deg);}
/* sc-component-id: k2k2sx-6 */
.cwfpd{position:relative;width:270px;height:125px;margin:20px auto 0;}
/* sc-component-id: k2k2sx-7 */
.fjJFIj{margin:20px 15px;font-size:1.2em;color:#6f737a;text-align:center;}
/* sc-component-id: k2k2sx-8 */
.hhMBte{color:#c02e2e;}
/* sc-component-id: npwiuf-0 */
.iFMoKm{position:relative;width:15px;height:15px;border:1px solid;border-radius:14px;border-color:#00bcf1;cursor:pointer;} .iFMoKm:after{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;left:3px;top:3px;content:'';width:7px;height:7px;border:1px solid #00bcf1;background-color:#00bcf1;border-radius:7px;}.hUtFJl{position:relative;width:15px;height:15px;border:1px solid;border-radius:14px;border-color:#adafb6;cursor:pointer;} .hUtFJl:after{display:none;position:absolute;left:3px;top:3px;content:'';width:7px;height:7px;border:1px solid #00bcf1;background-color:#00bcf1;border-radius:7px;}
/* sc-component-id: sc-1aizk13-0 */
.cHMbcZ{position:relative;background-color:#ffffff;box-shadow:0 0 30px 0 rgba(0,0,0,0.1);border-radius:10px;padding:16px 15px 15px;margin-top:-2px;} @media (max-width:600px){.cHMbcZ{width:85%;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}}
/* sc-component-id: sc-1aizk13-1 */
.jYlopV{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:100%;}
/* sc-component-id: sc-1aizk13-2 */
.fVykMl{cursor:pointer;width:12px;height:12px;}
/* sc-component-id: sc-1aizk13-3 */
.knlNzp{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 15px 15px 17px;margin-top:5px;-webkit-align-items:unset;-webkit-box-align:unset;-ms-flex-align:unset;align-items:unset;} @media (max-width:600px){.knlNzp{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 0px 15px;}}
/* sc-component-id: sc-1aizk13-4 */
.ixaYaD{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;} @media (max-width:800px){.ixaYaD{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;text-align:center;}} @media (max-width:600px){.ixaYaD{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}
/* sc-component-id: sc-1aizk13-5 */
.hpkZtl{width:309px;font-size:24px;font-weight:bold;line-height:1.33;color:#101010;padding:3px 0 0 0;} @media (max-width:600px){.hpkZtl{font-size:18px;width:95%;}} @media (max-width:800px){.hpkZtl{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;text-align:center;}}
/* sc-component-id: sc-1aizk13-6 */
.clYJIg{font-size:12px;color:#141b2f;margin:12px 0 0 0;} @media (min-width:601px){.clYJIg{width:287px;font-size:14px;margin:12px 0 25px 0;}}
/* sc-component-id: sc-1aizk13-7 */
.BMfEW{width:164px;font-size:14px;font-weight:600;padding:1px 0 0 1px;text-align:left;} @media (max-width:600px){.BMfEW{font-size:12px;width:137px;}} .BMfEW >span{font-weight:900;}
/* sc-component-id: sc-1aizk13-8 */
.dyHovh{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:12px;color:rgba(16,16,16,0.5);margin:16px 0 13px;}
/* sc-component-id: sc-1aizk13-9 */
.cJNCQY{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;} .cJNCQY a{margin-left:0;} .cJNCQY img{height:30px;width:101.5px;} @media (max-width:600px){.cJNCQY{margin:0 auto;}}
/* sc-component-id: sc-1aizk13-10 */
.lcabGr{width:420px;height:348px;margin:-3px 1px 0 0;} @media (max-width:800px){.lcabGr{width:90%;height:auto;margin:0 auto 20px;}}
/* sc-component-id: sc-1aizk13-11 */
.jbGsoJ{width:285px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;border-radius:6px;border:solid 1px #dddfe5;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1.36;margin-top:1px;} .jbGsoJ img{height:72px;margin:8px 9px;} @media (max-width:600px){.jbGsoJ img{height:48px;margin:14px 6px 14px 0;}} @media (max-width:600px){.jbGsoJ{width:274px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}} @media (max-width:800px){.jbGsoJ{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}}
/* sc-component-id: sc-16wsexf-0 */
.cFqWWu{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:20px;margin-bottom:25px;border-radius:4px;box-shadow:-6px 5px 10px 0 rgba(128,152,213,0.06);background-color:#fff;padding:20px 0;} @media (max-width:600px){.cFqWWu{margin:0 8px 15px;}}
/* sc-component-id: sc-16wsexf-1 */
.gOaEEj{font-size:1.8em;color:#000;font-weight:600;line-height:1.17;margin:0;margin-left:15px;} @media (max-width:600px){.gOaEEj{font-size:1.6em;}}
/* sc-component-id: sc-16wsexf-2 */
.cvcVIv{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:15px;padding:0 15px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px dotted #ebebeb;}
/* sc-component-id: sc-16wsexf-3 */
.jjSAZf{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
/* sc-component-id: sc-16wsexf-4 */
.danWpp{font-size:2.2em;color:#141b2f;text-align:center;}
/* sc-component-id: sc-16wsexf-5 */
.hoLmXt{width:155px;color:#141b2f;font-weight:400;font-size:1.2em;padding-bottom:2px;border:none;border-bottom:2px solid #d8dce8;text-align:center;} .hoLmXt:focus{outline:0;border-bottom:2px solid #00bcf1;}
/* sc-component-id: sc-16wsexf-6 */
.dpcHqB{margin-top:10px;font-size:1.4em;font-weight:300;color:#727682;}
/* sc-component-id: sc-16wsexf-7 */
.bjYdF{width:100%;max-width:600px;margin-top:15px;padding:5px 10px 10px;border:1px solid #dddfe5;border-radius:4px;box-sizing:border-box;}
/* sc-component-id: sc-16wsexf-8 */
.dGoEDp{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1.1em;color:#727682;}
/* sc-component-id: sc-16wsexf-9 */
.ipynXY{-webkit-flex:1;-ms-flex:1;flex:1;}
/* sc-component-id: sc-16wsexf-10 */
.dEVbai{float:right;} .dEVbai:before{content:'+';}
/* sc-component-id: sc-16wsexf-11 */
.hhrmCp{-webkit-flex:1;-ms-flex:1;flex:1;font-size:1.4em;color:#141b2f;}
/* sc-component-id: sc-16wsexf-12 */
.dEaOFV{float:right;font-size:1.6em;color:#59aa00;font-weight:600;} .dEaOFV:before{content:'+';} .dEaOFV:before{content:none;}
/* sc-component-id: sc-16wsexf-13 */
.lkSHtP{margin:15px 0 30px;width:100%;max-width:270px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
/* sc-component-id: sc-16wsexf-14 */
.bYFDRD{font-size:1.2em;color:#727682;margin-right:15px;}
/* sc-component-id: sc-16wsexf-15 */
.loAdIF{padding:20px 15px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
/* sc-component-id: sc-16wsexf-16 */
.kIttBz{margin-left:6px;font-size:1.2em;color:#4a4a4a;}
/* sc-component-id: sc-16wsexf-17 */
.gmBlyc{font-size:1.6em;font-weight:600;color:#141b2f;}
/* sc-component-id: sc-1clvynl-0 */
.jtRdJe{position:relative;border-radius:2px;background-color:#dddfe5;background-color:#dddfe5;overflow:hidden;height:10px;width:100px;margin-right:0;-webkit-transition:width 300ms ease-out;transition:width 300ms ease-out;} .jtRdJe.animate-on-scroll{width:102.78422943204606px;}.bzjABt{position:relative;border-radius:2px;background-color:#dddfe5;background-color:#dddfe5;overflow:hidden;height:10px;width:100px;margin-right:0;-webkit-transition:width 300ms ease-out;transition:width 300ms ease-out;} .bzjABt.animate-on-scroll{width:102.32764465730897px;}.mgmzq{position:relative;border-radius:2px;background-color:#dddfe5;background-color:#dddfe5;overflow:hidden;height:10px;width:100px;margin-right:0;-webkit-transition:width 300ms ease-out;transition:width 300ms ease-out;} .mgmzq.animate-on-scroll{width:106.64488331722424px;}.STNEd{position:relative;border-radius:2px;background-color:#dddfe5;background-color:#dddfe5;overflow:hidden;height:10px;width:100px;margin-right:0;-webkit-transition:width 300ms ease-out;transition:width 300ms ease-out;} .STNEd.animate-on-scroll{width:109.20719187139649px;}.UtJXX{position:relative;border-radius:2px;background-color:#dddfe5;background-color:#dddfe5;overflow:hidden;height:10px;width:100px;margin-right:0;-webkit-transition:width 300ms ease-out;transition:width 300ms ease-out;} .UtJXX.animate-on-scroll{width:123.8385820145511px;}.bRrLxI{position:relative;border-radius:2px;background-color:#dddfe5;background-color:#dddfe5;overflow:hidden;height:10px;width:100px;margin-right:0;-webkit-transition:width 300ms ease-out;transition:width 300ms ease-out;} .bRrLxI.animate-on-scroll{width:200px;}
/* sc-component-id: sc-1clvynl-1 */
.YzoNs{position:absolute;border-radius:2px;background-color:#59aa00;height:10px;width:0px;-webkit-transition:width 300ms ease-out;transition:width 300ms ease-out;background-color:#59aa00;left:100px;} .animate-on-scroll .YzoNs{width:2.784229432046048px;}.ikeZXe{position:absolute;border-radius:2px;background-color:#59aa00;height:10px;width:0px;-webkit-transition:width 300ms ease-out;transition:width 300ms ease-out;background-color:#59aa00;left:100px;} .animate-on-scroll .ikeZXe{width:2.3276446573089626px;}.gjdsgA{position:absolute;border-radius:2px;background-color:#59aa00;height:10px;width:0px;-webkit-transition:width 300ms ease-out;transition:width 300ms ease-out;background-color:#59aa00;left:100px;} .animate-on-scroll .gjdsgA{width:6.644883317224234px;}.iKBXkc{position:absolute;border-radius:2px;background-color:#59aa00;height:10px;width:0px;-webkit-transition:width 300ms ease-out;transition:width 300ms ease-out;background-color:#59aa00;left:100px;} .animate-on-scroll .iKBXkc{width:9.20719187139649px;}.ixKzgr{position:absolute;border-radius:2px;background-color:#59aa00;height:10px;width:0px;-webkit-transition:width 300ms ease-out;transition:width 300ms ease-out;background-color:#59aa00;left:100px;} .animate-on-scroll .ixKzgr{width:23.838582014551083px;}.dXUFM{position:absolute;border-radius:2px;background-color:#59aa00;height:10px;width:0px;-webkit-transition:width 300ms ease-out;transition:width 300ms ease-out;background-color:#59aa00;left:100px;} .animate-on-scroll .dXUFM{width:100px;}
/* sc-component-id: bsu6gc-0 */
.euYEhD{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:20px;margin-bottom:25px;border-radius:4px;box-shadow:-6px 5px 10px 0 rgba(128,152,213,0.06);background-color:#fff;padding:20px 15px 25px;} @media (max-width:600px){.euYEhD{margin:0 8px 15px;}}
/* sc-component-id: bsu6gc-1 */
.bPoZsL{margin-top:25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:600px;}
/* sc-component-id: bsu6gc-2 */
.dPQuIs{margin-bottom:20px;}
/* sc-component-id: bsu6gc-3 */
.hdRTvp{font-size:1.2em;color:#141b2f;margin-bottom:5px;}
/* sc-component-id: bsu6gc-4 */
.gUxsMW{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}
/* sc-component-id: bsu6gc-5 */
.lcrhQz{float:right;margin-left:auto;font-size:1.4em;font-weight:600;}
/* sc-component-id: bsu6gc-6 */
.hgEmds{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}
/* sc-component-id: bsu6gc-7 */
.etUELP{margin-right:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}
/* sc-component-id: bsu6gc-8 */
.eIDjbi{margin-left:8px;font-size:1.2em;color:#000;}
/* sc-component-id: sc-1jtkjb3-0 */
.jGVIr{padding:0 10px;margin-bottom:25px;} @media (max-width:600px){.jGVIr{padding:10px 15px 0;margin-bottom:0px;}}
/* sc-component-id: sc-1jtkjb3-1 */
.hOLecX{font-size:18px;font-weight:600;margin:0;} @media (max-width:600px){.hOLecX{font-size:16px;}}
/* sc-component-id: sc-1jtkjb3-2 */
.GFkJi{margin-top:20px;font-size:14px;color:#5a5b5d;font-weight:300;} @media (max-width:600px){.GFkJi{margin-top:10px;}}
/* sc-component-id: tb1oib-0 */
.huBMrl{padding:0 10px;margin-bottom:25px;} @media (max-width:600px){.huBMrl{padding:20px 15px 0;margin-bottom:0px;}}
/* sc-component-id: tb1oib-1 */
.hLbMgx{font-size:18px;font-weight:600;margin:0;} @media (max-width:600px){.hLbMgx{font-size:16px;}}
/* sc-component-id: tb1oib-2 */
.eJXWRw{margin-top:20px;font-size:14px;color:#5a5b5d;font-weight:300;} @media (max-width:600px){.eJXWRw{margin-top:10px;}}
/* sc-component-id: sc-1gjpkzk-0 */
.jsjEV{border-collapse:collapse;}
/* sc-component-id: sc-1gjpkzk-1 */
.jXryLh{text-align:left;padding:10px 5px 12px;font-weight:600;color:#141b2f;}
/* sc-component-id: sc-1gjpkzk-2 */
.jBEMEX{text-align:left;padding:10px 5px 12px;font-weight:600;color:#141b2f;font-weight:400;color:#5a5b5d;width:100px;}
/* sc-component-id: sc-1gjpkzk-3 */
.fNYFML{font-size:16px;margin:0 0 -5px 0;font-weight:600;}
/* sc-component-id: i1cclb-0 */
.fapJRJ{overflow:hidden;background:#fff;border-radius:4px;padding:20px;max-width:100%;height:auto;margin-bottom:25px;box-shadow:-6px 5px 10px 0 rgba(128,152,213,0.06);} @media (max-width:600px){.fapJRJ{padding:10px;}}
/* sc-component-id: i1cclb-1 */
.iuWTxs{width:100%;height:auto;text-align:center;position:relative;}
/* sc-component-id: i1cclb-2 */
.gFRGgU{width:calc(100% - 14px);height:auto;border-radius:6px;}
/* sc-component-id: i1cclb-3 */
.eIGOOU{position:absolute;left:0;top:0;height:100%;width:100%;z-index:1;}
/* sc-component-id: i1cclb-4 */
.fUYyoH{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);cursor:pointer;height:75px;width:75px aspect-ratio:16/9;} @media (max-width:600px){.fUYyoH{height:30px;width:30px;aspect-ratio:16/9;}}
/* sc-component-id: i1cclb-5 */
.jkkgfq{width:calc(100% - 14px);border-radius:6px;aspect-ratio:16/9;}
/* sc-component-id: i1cclb-6 */
.dxAEeg{width:100%;height:auto;position:relative;} .dxAEeg .slick-track{margin-right:0;margin-left:0;} .dxAEeg .slick-slider .slick-track,.dxAEeg .slick-slider .slick-list{max-width:100% !important;height:auto !important;} .dxAEeg .slick-slide,.dxAEeg .slick-slide *{outline:none !important;}
/* sc-component-id: i1cclb-7 */
.jczlwa{padding:15px 0 15px 0;max-width:100%;height:auto;}
/* sc-component-id: i1cclb-10 */
.gJzBcD{border:solid 1px #e8ebf2;border-radius:6px;margin:0 7px 0 7px;}
/* sc-component-id: i1cclb-11 */
.bevuEl{font-size:18px;font-weight:normal;font-stretch:normal;font-style:normal;line-height:normal;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;color:#000000;padding:0 0 15px 0;}
/* sc-component-id: i1cclb-12 */
.dlgqcC{position:relative;overflow:hidden;border-radius:6px 6px 0 0;}
/* sc-component-id: i1cclb-14 */
.lbCYwJ{position:relative;border-radius:0 0 6px 6px;background:#fff;padding:7px 10px 7px 10px;}
/* sc-component-id: i1cclb-15 */
.fBmkQx{font-size:12px;font-weight:normal;font-stretch:normal;font-style:normal;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;color:#223368;overflow:hidden;height:33px;display:-webkit-box;display:-moz-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;-moz-line-clamp:2;-moz-box-orient:vertical;text-overflow:ellipsis;line-height:1.3;}
/* sc-component-id: i1cclb-16 */
.fTouSS{width:100%;height:80px;} @media (max-width:600px){.fTouSS{height:65px;}}
/* sc-component-id: i1cclb-19 */
.ejOpxC{position:absolute;height:28px;width:28px;right:10px;bottom:5px;cursor:pointer;}
/* sc-component-id: bcx0ml-0 */
.iezjZi{padding:30px 0 50px;width:100%;background-color:#f5f7f9;box-sizing:border-box;} @media (max-width:600px){.iezjZi{padding:15px 0 0;}}
/* sc-component-id: bcx0ml-1 */
.lgATHq{max-width:1220px;padding:0 40px;margin:auto;width:100%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;} @media (max-width:600px){.lgATHq{padding:0 10px;}} @media (max-width:800px) and (min-width:601px){.lgATHq{margin:auto;}} @media (max-width:600px){.lgATHq{padding:0;}} @media (min-width:601px){.lgATHq{display:block;}}
/* sc-component-id: bcx0ml-2 */
.gpoxcH{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;} @media (min-width:601px){.gpoxcH{max-width:calc(100% - 325px);}} @media (max-width:800px) and (min-width:601px){.gpoxcH{max-width:none;}}
/* sc-component-id: bcx0ml-3 */
.iqBqcO{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;} @media (min-width:601px){.iqBqcO{position:absolute;top:0;right:40px;width:300px;}} @media (max-width:800px) and (min-width:601px){.iqBqcO{position:initial;width:100%;}}
/* sc-component-id: bcx0ml-8 */
@media (max-width:600px){.gqFDOM{margin:0 8px 15px;}}
/* sc-component-id: sc-1hmktju-2 */
.icvnlJ{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:0;padding:0 5px;border:1px solid #ecedf1;border-radius:1px;max-width:100%;margin:auto;}
/* sc-component-id: btbnvd-5 */
.czjipf{width:50px;height:50px;border-radius:4px;width:40px;height:40px;} @media (max-width:600px){.czjipf{width:40px;height:40px;}}</style><style data-styled="iteMMc iVXCSc dDfXxM kAdPwj" data-styled-version="4.3.1">
/* sc-component-id: sc-keyframes-iteMMc */
@-webkit-keyframes iteMMc{0%{-webkit-transform:translateY(-9px);-ms-transform:translateY(-9px);transform:translateY(-9px);}30%{-webkit-transform:translateY(9px);-ms-transform:translateY(9px);transform:translateY(9px);}60%{-webkit-transform:translateY(-5px);-ms-transform:translateY(-5px);transform:translateY(-5px);}90%{-webkit-transform:translateY(4px);-ms-transform:translateY(4px);transform:translateY(4px);}100%{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}} @keyframes iteMMc{0%{-webkit-transform:translateY(-9px);-ms-transform:translateY(-9px);transform:translateY(-9px);}30%{-webkit-transform:translateY(9px);-ms-transform:translateY(9px);transform:translateY(9px);}60%{-webkit-transform:translateY(-5px);-ms-transform:translateY(-5px);transform:translateY(-5px);}90%{-webkit-transform:translateY(4px);-ms-transform:translateY(4px);transform:translateY(4px);}100%{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}
/* sc-component-id: sc-keyframes-iVXCSc */
@-webkit-keyframes iVXCSc{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}} @keyframes iVXCSc{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}
/* sc-component-id: sc-keyframes-dDfXxM */
@-webkit-keyframes dDfXxM{0%{-webkit-transform:translateX(-20px) translateY(-5px);-ms-transform:translateX(-20px) translateY(-5px);transform:translateX(-20px) translateY(-5px);}50%{-webkit-transform:translateX(-20px) translateY(-5px);-ms-transform:translateX(-20px) translateY(-5px);transform:translateX(-20px) translateY(-5px);}65%{-webkit-transform:translateX(-20px) translateY(-8px);-ms-transform:translateX(-20px) translateY(-8px);transform:translateX(-20px) translateY(-8px);opacity:1;}80%{-webkit-transform:translateX(-20px) translateY(-11px);-ms-transform:translateX(-20px) translateY(-11px);transform:translateX(-20px) translateY(-11px);opacity:0;}99%{-webkit-transform:translateX(-20px) translateY(-11px);-ms-transform:translateX(-20px) translateY(-11px);transform:translateX(-20px) translateY(-11px);opacity:0;}100%{-webkit-transform:translateX(-20px) translateY(-5px);-ms-transform:translateX(-20px) translateY(-5px);transform:translateX(-20px) translateY(-5px);opacity:1;}} @keyframes dDfXxM{0%{-webkit-transform:translateX(-20px) translateY(-5px);-ms-transform:translateX(-20px) translateY(-5px);transform:translateX(-20px) translateY(-5px);}50%{-webkit-transform:translateX(-20px) translateY(-5px);-ms-transform:translateX(-20px) translateY(-5px);transform:translateX(-20px) translateY(-5px);}65%{-webkit-transform:translateX(-20px) translateY(-8px);-ms-transform:translateX(-20px) translateY(-8px);transform:translateX(-20px) translateY(-8px);opacity:1;}80%{-webkit-transform:translateX(-20px) translateY(-11px);-ms-transform:translateX(-20px) translateY(-11px);transform:translateX(-20px) translateY(-11px);opacity:0;}99%{-webkit-transform:translateX(-20px) translateY(-11px);-ms-transform:translateX(-20px) translateY(-11px);transform:translateX(-20px) translateY(-11px);opacity:0;}100%{-webkit-transform:translateX(-20px) translateY(-5px);-ms-transform:translateX(-20px) translateY(-5px);transform:translateX(-20px) translateY(-5px);opacity:1;}}
/* sc-component-id: sc-keyframes-kAdPwj */
@-webkit-keyframes kAdPwj{0%{-webkit-transform:translateX(-20px) translateY(3px);-ms-transform:translateX(-20px) translateY(3px);transform:translateX(-20px) translateY(3px);}50%{-webkit-transform:translateX(-20px) translateY(3px);-ms-transform:translateX(-20px) translateY(3px);transform:translateX(-20px) translateY(3px);}65%{-webkit-transform:translateX(-20px) translateY(0px);-ms-transform:translateX(-20px) translateY(0px);transform:translateX(-20px) translateY(0px);opacity:1;}80%{-webkit-transform:translateX(-20px) translateY(-3px);-ms-transform:translateX(-20px) translateY(-3px);transform:translateX(-20px) translateY(-3px);opacity:0;}89%{-webkit-transform:translateX(-20px) translateY(3px);-ms-transform:translateX(-20px) translateY(3px);transform:translateX(-20px) translateY(3px);}90%{-webkit-transform:translateX(-20px) translateY(3px);-ms-transform:translateX(-20px) translateY(3px);transform:translateX(-20px) translateY(3px);opacity:0;}100%{-webkit-transform:translateX(-20px) translateY(3px);-ms-transform:translateX(-20px) translateY(3px);transform:translateX(-20px) translateY(3px);opactiy:1;}} @keyframes kAdPwj{0%{-webkit-transform:translateX(-20px) translateY(3px);-ms-transform:translateX(-20px) translateY(3px);transform:translateX(-20px) translateY(3px);}50%{-webkit-transform:translateX(-20px) translateY(3px);-ms-transform:translateX(-20px) translateY(3px);transform:translateX(-20px) translateY(3px);}65%{-webkit-transform:translateX(-20px) translateY(0px);-ms-transform:translateX(-20px) translateY(0px);transform:translateX(-20px) translateY(0px);opacity:1;}80%{-webkit-transform:translateX(-20px) translateY(-3px);-ms-transform:translateX(-20px) translateY(-3px);transform:translateX(-20px) translateY(-3px);opacity:0;}89%{-webkit-transform:translateX(-20px) translateY(3px);-ms-transform:translateX(-20px) translateY(3px);transform:translateX(-20px) translateY(3px);}90%{-webkit-transform:translateX(-20px) translateY(3px);-ms-transform:translateX(-20px) translateY(3px);transform:translateX(-20px) translateY(3px);opacity:0;}100%{-webkit-transform:translateX(-20px) translateY(3px);-ms-transform:translateX(-20px) translateY(3px);transform:translateX(-20px) translateY(3px);opactiy:1;}}</style><style>body {
                margin: 0;
                font-size: 10px;
                width:100%;
              }</style></head><body><script>(function(){
      window.pmEnvironment = "production";
      window.pmVersion = "64e859048";
    })()</script><script>(function(){
      try {
        if (typeof (Storage) !== 'undefined' && (window.location.pathname === '/dashboard' || window.location.pathname === '/dashboard/hamburger-menu-modal')) {
          const theme = localStorage.getItem('theme-data');
          let selectedTheme = 'light-new';
          if (theme) {
            const value = JSON.parse(theme).value;
            selectedTheme = value === 'dark' ? 'dark-new' : 'light-new';
          }
          document.documentElement.setAttribute('data-theme', selectedTheme);
        }
      } catch (e) {}
    })()</script><script>(function(){
      window.paytm = window.paytm || {aQ: [], analytics: {}};
      window.paytm.analytics.addEvent = window.paytm.analytics.addEvent || function(event) { window.paytm.aQ.push(event) };
      window.addEventListener('sdk-config-loaded', function(e) {
        window.paytm.analytics.configureAnalyticsSDK('web-money', "production", { xRequester: 'web-money', hmacKey: '8767c78ddd5242b5815751a9f0206e68', realtime: false } )
      });
    })();</script><div id="__next"><div class="nau75s-0 llGmbQ"><div class="  nau75s-1 isycNz"><div><div><div></div><div class="sc-10ti6d2-12 bUAsAb"><div></div><div class="sc-10ti6d2-10 daVhee"><header class="sc-10ti6d2-11 guIVWT"><div class="pg0np9-0 sc-10ti6d2-1 dUpNEB"><div class="sc-10ti6d2-2 ioPRxs"><div class="sc-10ti6d2-3 kSZBmM"><img alt="Open menu" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE4IDE0Ij4KICAgIDxwYXRoIGZpbGw9IiM3Mjc2ODIiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE2LjIgNi4zMThjLjQ0IDAgLjguMzY4LjguODE4IDAgLjQ1LS4zNi44MTktLjguODE5SDEuOGEuODEuODEgMCAwIDEtLjgtLjgxOS44MS44MSAwIDAgMSAuOC0uODE4aDE0LjR6bTAtNWMuNDQgMCAuOC4zNjguOC44MTggMCAuNDUtLjM2LjgxOS0uOC44MTlIMS44YS44MS44MSAwIDAgMS0uOC0uODE5LjgxLjgxIDAgMCAxIC44LS44MThoMTQuNHptMCAxMGMuNDQgMCAuOC4zNjguOC44MTggMCAuNDUtLjM2LjgxOS0uOC44MTlIMS44YS44MS44MSAwIDAgMS0uOC0uODE5LjgxLjgxIDAgMCAxIC44LS44MThoMTQuNHoiLz4KPC9zdmc+Cg==" class="sc-10ti6d2-4 lpgKoo"/><div class="sc-10ti6d2-5 gscDjN"><div class="sc-1ep2vaf-1 sc-1ep2vaf-7 sc-10ti6d2-6 cWHojO"></div></div><a title="Home" href="/mutual-funds"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDMiIGhlaWdodD0iMTE3IiB2aWV3Qm94PSIwIDAgMzAzIDExNyI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0xNTIuMTY1IDIwLjA4aC00LjQzdjguNjk4aDQuNDNjLjQzOS4wMDIuODYtLjE3NCAxLjE2OC0uNDg4LjMwOS0uMzEzLjQ3OS0uNzM4LjQ3Mi0xLjE3OXYtNS4zNjlhMS42NTEgMS42NTEgMCAwIDAtLjQ3NS0xLjE3NCAxLjYzNiAxLjYzNiAwIDAgMC0xLjE2NS0uNDg4eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMEJERjIiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTI5My44NSAxNi41NjRhMTAuNDQ4IDEwLjQ0OCAwIDAgMC05Ljg1LTcuMDNoLS4wOTVhMTAuMzgzIDEwLjM4MyAwIDAgMC03LjUzIDMuMjI5IDEwLjM4MyAxMC4zODMgMCAwIDAtNy41MzUtMy4yM2gtLjA5NWMtMi40OTktLjAwMy00LjkxNS45LTYuODA1IDIuNTQydi0uNzk5YTEuNTQ4IDEuNTQ4IDAgMCAwLTEuNTM1LTEuNDM2aC03Yy0uODUzIDAtMS41NDUuNjk0LTEuNTQ1IDEuNTUyVjQ5LjVjMCAuODU4LjY5IDEuNTU0IDEuNTQ1IDEuNTU3aDdhMS41NDcgMS41NDcgMCAwIDAgMS41MjUtMS4zNDZ2LTI3LjM1YTIuNDg3IDIuNDg3IDAgMCAxIDAtLjI3NyAyLjU1IDIuNTUgMCAwIDEgMi40MS0yLjM1aDEuMjg1Yy41NDYuMDM0IDEuMDcuMjMzIDEuNS41NzIuNjE0LjUwMS45NjMgMS4yNi45NDUgMi4wNTRsLjAzIDI3LjIyYzAgLjg1OC42OTIgMS41NTIgMS41NDUgMS41NTJoN2ExLjU0MyAxLjU0MyAwIDAgMCAxLjUzNS0xLjQ3NlYyMi4zMjVhMi41NyAyLjU3IDAgMCAxIDEuMTQtMi4xOTUgMi43OTIgMi43OTIgMCAwIDEgMS4yOC0uNDMyaDEuMjlhMi41NjIgMi41NjIgMCAwIDEgMi40MiAyLjYyN2wuMDMgMjcuMTg1YzAgLjQxMi4xNjMuODA3LjQ1MyAxLjA5OC4yOS4yOS42ODIuNDU0IDEuMDkyLjQ1NGg3YTEuNTUzIDEuNTUzIDAgMCAwIDEuNTQ1LTEuNTUyVjIwLjI3YTkuODQzIDkuODQzIDAgMCAwLS41OC0zLjcwNnpNMjQ2LjU1NSA5Ljk0aC00VjMuNDM2YTEuNDIgMS40MiAwIDAgMC0uNDA0LTEuMDEyQTEuNDA3IDEuNDA3IDAgMCAwIDI0MS4xNSAyYTEuNTI4IDEuNTI4IDAgMCAwLS4yNjUuMDNjLTQuNDMgMS4yMi0zLjU0IDcuMzgzLTExLjYzIDcuOTFoLS43ODVhMS41NDUgMS41NDUgMCAwIDAtMS41NDUgMS41NDd2Ny4wMzFjLS4wMDEuNDEzLjE2LjgwOS40NSAxLjEuMjkuMjkzLjY4NC40NTcgMS4wOTUuNDU3aDQuMjE1djI5LjczN2MwIC44NDYuNjgyIDEuNTM0IDEuNTI1IDEuNTM2aDYuOTFjLjgzMy0uMDE2IDEuNS0uNyAxLjUtMS41MzZWMjAuMDhoMy45MWMuNDEgMCAuODA0LS4xNjQgMS4wOTQtLjQ1Ni4yOS0uMjkyLjQ1Mi0uNjg4LjQ1MS0xLjF2LTcuMDMyYzAtLjg0Ny0uNjc2LTEuNTM4LTEuNTItMS41NTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzIwMzQ2OCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMjIxLjQyIDkuOTRoLTdjLS40MSAwLS44MDIuMTY0LTEuMDkuNDU1YTEuNTUgMS41NSAwIDAgMC0uNDUgMS4wOTd2MTQuNTFhMS42MzkgMS42MzkgMCAwIDEtMS42MiAxLjYxMWgtMi45M2ExLjYzOSAxLjYzOSAwIDAgMS0xLjYzNS0xLjY0MmwtLjAzLTE0LjQ4NGMwLS44NTctLjY5Mi0xLjU1Mi0xLjU0NS0xLjU1MmgtN2MtLjQxIDAtLjgwMy4xNjQtMS4wOTIuNDU1LS4yOS4yOS0uNDUzLjY4NS0uNDUzIDEuMDk3djE1LjkwNWMwIDYuMDI3IDQuMjkgMTAuMzQ2IDEwLjMwNSAxMC4zNDZoNC42NTVhMS42MzUgMS42MzUgMCAwIDEgMS40MjkgMS42MjVjMCAuODI2LS42MTMgMS41MjItMS40MjkgMS42MjVoLS4xMmwtMTAuMjE1LjAzNWMtLjg1MyAwLTEuNTQ1LjY5NC0xLjU0NSAxLjU1MnY3LjAzYzAgLjg1OC42OTIgMS41NTMgMS41NDUgMS41NTNoMTEuNDJjNiAwIDEwLjMwNS00LjMwNSAxMC4zMDUtMTAuMzQ2di0yOS4zMmMwLS44NDItLjY2Ny0xLjUzLTEuNTA1LTEuNTUyek0xNTQuNDE1IDkuOTRoLTE1LjI3Yy0uMzk4IDAtLjc4LjE1OS0xLjA2LjQ0MWExLjUxIDEuNTEgMCAwIDAtLjQ0IDEuMDY2djM4LjEzOWMtLjAyOC44MTkuNiAxLjUxIDEuNDE1IDEuNTU2aDcuMTE1Yy44NTMgMCAxLjU0NS0uNjk0IDEuNTQ1LTEuNTUxbC4wMy0xMC42NjhoNi42OGM1LjU5NSAwIDkuNS0zLjg5MiA5LjUtOS41NDJ2LTkuODk0Yy0uMDItNS42NC0zLjkzLTkuNTQ3LTkuNTE1LTkuNTQ3em0tLjYxIDEyLjg1N3Y0LjMxNGMwIC40MzctLjE3My44NTUtLjQ4IDEuMTYzLS4zMDguMzA4LS43MjYuNDgtMS4xNi40OGgtNC40M1YyMC4wOGg0LjQzYy45MDYgMCAxLjY0LjczOCAxLjY0IDEuNjQ3djEuMDd6TTE4MS42NzUgOS45OEgxNzJhMS40OTYgMS40OTYgMCAwIDAtMS4wNzkuNDA0IDEuNTEgMS41MSAwIDAgMC0uNDc2IDEuMDUzdjIuNzgyYS4xNzcuMTc3IDAgMCAxIDAgLjAzNXYzLjc1N2MuMDIyLjg4NC43NSAxLjU4NCAxLjYzIDEuNTY3aDkuMjNjLjc1NC4xIDEuMzM1LjcxOSAxLjM5IDEuNDgxdi45MDRhMS41NDkgMS41NDkgMCAwIDEtMS4zNSAxLjQ0MmgtNC41N2MtNi4wOCAwLTEwLjQxIDQuMDU4LTEwLjQxIDkuNzUzdjguMTQ2YzAgNS42NiAzLjcyIDkuNjg4IDkuNzYgOS42ODhoMTIuNjdhNC4wMDcgNC4wMDcgMCAwIDAgNC4xMTUtMy44NTdWMjAuNTE3YzAtNi40NjQtMy4zMTUtMTAuNTM3LTExLjIzNS0xMC41Mzd6bTEuMTE1IDI5LjI5djEuMDk1YTEuNTEzIDEuNTEzIDAgMCAxLS4wOTUuNDg3IDEuNjMgMS42MyAwIDAgMS0xLjU1NSAxLjA1NWgtMi45MDVhMS41ODYgMS41ODYgMCAwIDEtMS4xNC0uNDI5IDEuNiAxLjYgMCAwIDEtLjUwNS0xLjExM3YtNi4wMjdhMS41OTggMS41OTggMCAwIDEgMS42NDUtMS41MzdoMi45MDVhMS42MDMgMS42MDMgMCAwIDEgMS42NSAxLjU0N3Y0LjkyMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMjEzMzY4IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xNTYuNTI1IDEwMS40MDVMMTQzLjMzIDY2Ljc4N2gtLjIxYy4yNDcgMi43NDIuMzcgNi4wMDEuMzcgOS43Nzh2MjQuODQ1aC00LjE3NVY2Mi4zNDdoNi44MUwxNTguNDQgOTQuNTdoLjIxbDEyLjQyNS0zMi4yMjNoNi43NTV2MzkuMDU4aC00LjVWNzYuMjM4YzAtMi44ODIuMTIzLTYuMDE2LjM3LTkuNDAxaC0uMjFsLTEzLjMgMzQuNTY4aC0zLjY2NXpNMjExLjM2IDg2Ljc0YzAgNC43NzEtMS4xOTcgOC40OTgtMy41OSAxMS4xOC0yLjM5MyAyLjY4MS01LjcwMiA0LjAyLTkuOTI1IDQuMDE3YTEzLjEyIDEzLjEyIDAgMCAxLTYuOTQtMS44NDMgMTIuMTYxIDEyLjE2MSAwIDAgMS00LjY4LTUuMjkzIDE4LjQ4NyAxOC40ODcgMCAwIDEtMS42NS04LjA2NmMwLTQuNzc1IDEuMTg4LTguNDkzIDMuNTY1LTExLjE1NCAyLjM3Ny0yLjY2MiA1LjY3NS00LjAwMSA5Ljg5NS00LjAxOCA0LjA3NyAwIDcuMzE3IDEuMzYyIDkuNzIgNC4wODggMi40MDMgMi43MjUgMy42MDUgNi40MjIgMy42MDUgMTEuMDg5em0tMjIuMjEgMGMwIDMuNzQzLjc0NSA2LjU5IDIuMjM1IDguNTM4IDEuNDkgMS45NDggMy42OCAyLjkyOCA2LjU3IDIuOTM4IDIuODkgMCA1LjA4My0uOTc1IDYuNTgtMi45MjMgMS40OTctMS45NDkgMi4yNDctNC44MDMgMi4yNS04LjU2MyAwLTMuNzItLjc1LTYuNTQ3LTIuMjUtOC40ODMtMS41LTEuOTM1LTMuNzEyLTIuOS02LjYzNS0yLjg5Ny0yLjg5IDAtNS4wNzIuOTUyLTYuNTQ1IDIuODU3LTEuNDczIDEuOTA1LTIuMjA4IDQuNzUtMi4yMDUgOC41MzN6TTIzNy40MTUgMTAxLjQwNVY4Mi40NjZjMC0yLjM4NC0uNTQyLTQuMTY1LTEuNjI1LTUuMzQ0LTEuMDgzLTEuMTc4LTIuNzc3LTEuNzY2LTUuMDgtMS43NjItMy4wNSAwLTUuMjgzLjgyNy02LjcgMi40OC0xLjQxNyAxLjY1NS0yLjEyNyA0LjM5LTIuMTMgOC4yMDd2MTUuMzU4aC00LjQxNXYtMjkuMjhoMy41OWwuNzIgNC4wMThIMjIyYTkuMDYzIDkuMDYzIDAgMCAxIDMuODA1LTMuMzU1IDEyLjM2OSAxMi4zNjkgMCAwIDEgNS40NTUtMS4xODVjMy41MSAwIDYuMTUyLjg1IDcuOTI1IDIuNTUxIDEuNzczIDEuNzAxIDIuNjYgNC40MjEgMi42NiA4LjE2MVYxMDEuNGwtNC40My4wMDV6TTI2MS41OCAxMDEuOTQyYy00LjMxIDAtNy43MS0xLjMxNy0xMC4yLTMuOTUyLTIuNDktMi42MzUtMy43MzUtNi4yOTYtMy43MzUtMTAuOTg0IDAtNC43MiAxLjE1Ny04LjQ3IDMuNDctMTEuMjUgMi4zMTMtMi43NzkgNS40Mi00LjE2NiA5LjMyLTQuMTYzIDMuNjY3IDAgNi41NTggMS4yMDUgOC42NzUgMy42MTYgMi4xMTcgMi40MSAzLjE4IDUuNTkxIDMuMTkgOS41NDJ2Mi44MDhoLTIwLjA4Yy4wODcgMy40MzUuOTUgNi4wNDMgMi41OSA3LjgyNCAxLjY0IDEuNzgxIDMuOTUgMi42NzIgNi45MyAyLjY3MmEyMy40MTEgMjMuNDExIDAgMCAwIDkuMzEtMS45NzR2My45NTNhMjIuOTYzIDIyLjk2MyAwIDAgMS00LjQzIDEuNDU2Yy0xLjY2LjMyNC0zLjM0OS40NzUtNS4wNC40NTJ6bS0xLjE5NS0yNi42MThjLTIuMzMzIDAtNC4yLjc2Ny01LjYgMi4zLTEuNCAxLjUzNC0yLjIyIDMuNjUzLTIuNDYgNi4zNTloMTUuMjRjMC0yLjc5Ni0uNjItNC45MzktMS44Ni02LjQyOS0xLjI0LTEuNDktMy4wMTMtMi4yMzMtNS4zMi0yLjIzek0yNzMuNTY1IDcyLjEyNWg0LjczNWw2LjM4NSAxNi43YTYzLjQ4NCA2My40ODQgMCAwIDEgMi42MDUgOC4yNTZoLjIxYy4yMzctLjkxMS43Mi0yLjQ2NiAxLjQ1LTQuNjY2czMuMTM4LTguOTYzIDcuMjI1LTIwLjI5aDQuNzM1bC0xMi41MyAzMy4zMzNjLTEuMjQgMy4yOTQtMi42OSA1LjYzOC00LjM1IDcuMDNhOS4yMDkgOS4yMDkgMCAwIDEtNi4xMDUgMi4wNzUgMTcuNTI2IDE3LjUyNiAwIDAgMS00LS40NTd2LTMuNTVjMS4wNzcuMjIyIDIuMTc1LjMzIDMuMjc1LjMyIDMuMDMgMCA1LjE5Ny0xLjcxIDYuNS01LjEzMmwxLjYyLTQuMTY4LTExLjc1NS0yOS40NXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDBCREYyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yLjg4IDY4LjU3TDU5LjIzIDMuNzgzYTIuMDc2IDIuMDc2IDAgMCAxIDMuMjI1IDBsNTYuNzA1IDY1LjE5M2MxLjQ0IDEuNjUzLjQxNSA0LjQ4LTEuNjE1IDQuNDdMNC41IDczLjA0Yy0yLjA0NS0uMDEtMy4wNTUtMi44MjItMS42Mi00LjQ3eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyMjMzNjkiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIuNjMgOTMuNDc1TDU5LjMzNSAyOC4yN2ExLjk0MiAxLjk0MiAwIDAgMSAzIDBsNTcuMDggNjUuNjM2YzEuMzQ1IDEuNTQxLjM5IDQuMTgzLTEuNSA0LjE3OGwtMTEzLjc5LS40MjdjLTEuODktLjAxLTIuODM1LTIuNjQxLTEuNDk1LTQuMTgzeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTUyLjUgNTcuODM3Yy0uNTAzLjA0Mi0xLS4xNDItMS4zNTUtLjUwMmExLjc0MiAxLjc0MiAwIDAgMS0uNDM1LTEuMTYgMS42NDEgMS42NDEgMCAwIDEgLjQzNS0xLjEzYy4zNTgtLjM1Ny44NTItLjU0IDEuMzU1LS41MDNoMTdjLjQ2Ni0uMDQ5LjkzLjEwNiAxLjI3NC40MjUuMzQ0LjMyLjUzNC43NzMuNTIxIDEuMjQzLjAwNS40MTktLjE1LjgyMy0uNDM1IDEuMTNhMS43MyAxLjczIDAgMCAxLTEuMzYuNTAySDY3Yy0xLjA3IDAtMiAwLTIuNzEtLjA0NXMtMS4xOC0uMDY1LTEuMzM1LS4wOTZ2LjE4NmMuNzE2LjMyOCAxLjM1OC44IDEuODg1IDEuMzg2YTYuMTggNi4xOCAwIDAgMSAxLjM4NSAyLjQ0NmgzLjI2YTEuNjIgMS42MiAwIDAgMSAxLjI3Mi40MjNjLjM0NC4zMTkuNTM0Ljc3LjUyMyAxLjI0LjAwNC40Mi0uMTUyLjgyNi0uNDM1IDEuMTM1LS4zNi4zNTctLjg1Ni41NC0xLjM2LjUwMkg2Ni41YTguNTY1IDguNTY1IDAgMCAxLTEuMTUgMy42MyA4LjYyIDguNjIgMCAwIDEtMi4yMyAyLjQ3MiA5Ljk4NCA5Ljk4NCAwIDAgMS0yLjg5NSAxLjQ4MWMtMS4wMS4zMjgtMi4wNTMuNTQzLTMuMTEuNjQzTDY3LjUxIDgzLjI5Yy40NjQuNDMuNzMyIDEuMDMzLjc0IDEuNjY3YTIuMTIgMi4xMiAwIDAgMS0uNTUgMS40NzcgMS45OTUgMS45OTUgMCAwIDEtMS41LjYwMmMtLjM0IDAtLjY3Ny0uMDU0LTEtLjE2YTIuNjE0IDIuNjE0IDAgMCAxLTEtLjY3M0w1MS45NiA3NC4xNDRhMy4xNzIgMy4xNzIgMCAwIDEtLjczNS0uOTQ0IDIuMjgzIDIuMjgzIDAgMCAxLS4yMy0xLjAwNCAyLjAxNCAyLjAxNCAwIDAgMSAuNTUtMS40NTJjLjM3Mi0uMzg2Ljg5LS41OTYgMS40MjUtLjU3N2guNmMuOTUgMCAxLjg5Ni0uMDg2IDIuODMtLjI1N2E4LjIgOC4yIDAgMCAwIDIuNTMtLjg3MyA2LjUwNyA2LjUwNyAwIDAgMCAxLjkxLTEuNTk3IDUuMDM0IDUuMDM0IDAgMCAwIDEtMi40NTFINTIuNWExLjYxNSAxLjYxNSAwIDAgMS0xLjI3LS40MjQgMS42MyAxLjYzIDAgMCAxLS41Mi0xLjIzOWMtLjAwNS0uNDE5LjE1LS44MjMuNDM1LTEuMTNhMS43NSAxLjc1IDAgMCAxIDEuMzU1LS41MDJoOS4xMWMtLjgtMi41ODYtMy4xNC0zLjg3Ny03LjA0LTMuODc3bC0yLjA3LjAyeiIvPgogICAgPC9nPgo8L3N2Zz4K" alt="Paytm Money logo" class="sc-10ti6d2-7 kwEQpM"/></a></div><div class="sc-10ti6d2-16 ekneiw"><div class="sc-10ti6d2-8 eFdpyl"><div class="sc-147r6x4-0 sc-147r6x4-10 jBcsdL"><img alt="search-placeholder" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgdmlld0JveD0iMCAwIDI1IDI1Ij4KICAgIDxwYXRoIGZpbGw9IiNBREFGQjYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTI0LjY5NCAyMy4yMjRsLTYuMDEtNi4wMWExMC40OTggMTAuNDk4IDAgMCAwIDIuMzg3LTYuNjc4QzIxLjA3MSA0LjcxOSAxNi4zNTIgMCAxMC41MzYgMCA0LjcxNCAwIDAgNC43MiAwIDEwLjUzNlM0LjcxNCAyMS4wNyAxMC41MzYgMjEuMDdhMTAuNDggMTAuNDggMCAwIDAgNi42NzMtMi4zODJsNi4wMSA2LjAwNWExLjA0IDEuMDQgMCAwIDAgMS40NzUgMCAxLjAzNSAxLjAzNSAwIDAgMCAwLTEuNDd6bS0xNC4xNTgtNC4yNWMtNC42NTggMC04LjQ0NC0zLjc4NS04LjQ0NC04LjQzOCAwLTQuNjUzIDMuNzg2LTguNDQ0IDguNDQ0LTguNDQ0IDQuNjUzIDAgOC40NDQgMy43OSA4LjQ0NCA4LjQ0NCAwIDQuNjUzLTMuNzkxIDguNDM4LTguNDQ0IDguNDM4eiIvPgo8L3N2Zz4K" class="sc-147r6x4-4 sc-147r6x4-12 lhfpFo"/><div class="sc-147r6x4-1 kxqHNe"><div class="sc-147r6x4-7 iuMLcW"><form autoComplete="off"><input type="search" placeholder="Search for Mutual Funds" value="" tabindex="0" aria-label="search-mutual-fund" autoComplete="false" class="sc-147r6x4-2 sc-147r6x4-11 hHbTFR"/></form></div><div class="sc-147r6x4-8 mQEPU"><input type="search" placeholder="Search for Mutual Funds" value="" tabindex="0" aria-label="search-mutual-fund" autoComplete="false" class="sc-147r6x4-2 sc-147r6x4-11 hHbTFR"/></div></div><div class="sc-147r6x4-6 bpPmaH"><div><img alt="search" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgdmlld0JveD0iMCAwIDI1IDI1Ij4KICAgIDxwYXRoIGZpbGw9IiM3Mjc2ODIiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTI0LjY5NCAyMy4yMjRsLTYuMDEtNi4wMWExMC40OTggMTAuNDk4IDAgMCAwIDIuMzg3LTYuNjc4QzIxLjA3MSA0LjcxOSAxNi4zNTIgMCAxMC41MzYgMCA0LjcxNCAwIDAgNC43MiAwIDEwLjUzNlM0LjcxNCAyMS4wNyAxMC41MzYgMjEuMDdhMTAuNDggMTAuNDggMCAwIDAgNi42NzMtMi4zODJsNi4wMSA2LjAwNWExLjA0IDEuMDQgMCAwIDAgMS40NzUgMCAxLjAzNSAxLjAzNSAwIDAgMCAwLTEuNDd6bS0xNC4xNTgtNC4yNWMtNC42NTggMC04LjQ0NC0zLjc4NS04LjQ0NC04LjQzOCAwLTQuNjUzIDMuNzg2LTguNDQ0IDguNDQ0LTguNDQ0IDQuNjUzIDAgOC40NDQgMy43OSA4LjQ0NCA4LjQ0NCAwIDQuNjUzLTMuNzkxIDguNDM4LTguNDQ0IDguNDM4eiIvPgo8L3N2Zz4K" width="18"/></div></div></div></div><button class="sc-1i038nv-0 sc-1i038nv-1 sc-128t83i-1 sc-1q260yn-0 ieklHU">Sign In</button></div></div></div></header></div></div><div class="sc-10ti6d2-15 jhlqAr"><div class="sc-10ti6d2-13 evKzrL"><div class="pg0np9-0 sc-10ti6d2-1 dUpNEB"><div class="sc-10ti6d2-14 ixhEXv"><div class="sc-10ti6d2-5 hLmUXL"><div class="sc-1ep2vaf-1 sc-1ep2vaf-7 sc-10ti6d2-6 cWHojO"></div></div><div class="sc-10ti6d2-0 iJBJlQ">Mutual Fund Details</div><div class="sc-10ti6d2-9 iNunpm"><div class="sc-147r6x4-0 sc-147r6x4-10 jBcsdL"><img alt="search-placeholder" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgdmlld0JveD0iMCAwIDI1IDI1Ij4KICAgIDxwYXRoIGZpbGw9IiNBREFGQjYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTI0LjY5NCAyMy4yMjRsLTYuMDEtNi4wMWExMC40OTggMTAuNDk4IDAgMCAwIDIuMzg3LTYuNjc4QzIxLjA3MSA0LjcxOSAxNi4zNTIgMCAxMC41MzYgMCA0LjcxNCAwIDAgNC43MiAwIDEwLjUzNlM0LjcxNCAyMS4wNyAxMC41MzYgMjEuMDdhMTAuNDggMTAuNDggMCAwIDAgNi42NzMtMi4zODJsNi4wMSA2LjAwNWExLjA0IDEuMDQgMCAwIDAgMS40NzUgMCAxLjAzNSAxLjAzNSAwIDAgMCAwLTEuNDd6bS0xNC4xNTgtNC4yNWMtNC42NTggMC04LjQ0NC0zLjc4NS04LjQ0NC04LjQzOCAwLTQuNjUzIDMuNzg2LTguNDQ0IDguNDQ0LTguNDQ0IDQuNjUzIDAgOC40NDQgMy43OSA4LjQ0NCA4LjQ0NCAwIDQuNjUzLTMuNzkxIDguNDM4LTguNDQ0IDguNDM4eiIvPgo8L3N2Zz4K" class="sc-147r6x4-4 sc-147r6x4-12 lhfpFo"/><div class="sc-147r6x4-1 kxqHNe"><div class="sc-147r6x4-7 iuMLcW"><form autoComplete="off"><input type="search" placeholder="Search for Mutual Funds" value="" tabindex="0" aria-label="search-mutual-fund" autoComplete="false" class="sc-147r6x4-2 sc-147r6x4-11 hHbTFR"/></form></div><div class="sc-147r6x4-8 mQEPU"><input type="search" placeholder="Search for Mutual Funds" value="" tabindex="0" aria-label="search-mutual-fund" autoComplete="false" class="sc-147r6x4-2 sc-147r6x4-11 hHbTFR"/></div></div><div class="sc-147r6x4-6 bpPmaH"><div><img alt="search" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgdmlld0JveD0iMCAwIDI1IDI1Ij4KICAgIDxwYXRoIGZpbGw9IiM3Mjc2ODIiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTI0LjY5NCAyMy4yMjRsLTYuMDEtNi4wMWExMC40OTggMTAuNDk4IDAgMCAwIDIuMzg3LTYuNjc4QzIxLjA3MSA0LjcxOSAxNi4zNTIgMCAxMC41MzYgMCA0LjcxNCAwIDAgNC43MiAwIDEwLjUzNlM0LjcxNCAyMS4wNyAxMC41MzYgMjEuMDdhMTAuNDggMTAuNDggMCAwIDAgNi42NzMtMi4zODJsNi4wMSA2LjAwNWExLjA0IDEuMDQgMCAwIDAgMS40NzUgMCAxLjAzNSAxLjAzNSAwIDAgMCAwLTEuNDd6bS0xNC4xNTgtNC4yNWMtNC42NTggMC04LjQ0NC0zLjc4NS04LjQ0NC04LjQzOCAwLTQuNjUzIDMuNzg2LTguNDQ0IDguNDQ0LTguNDQ0IDQuNjUzIDAgOC40NDQgMy43OSA4LjQ0NCA4LjQ0NCAwIDQuNjUzLTMuNzkxIDguNDM4LTguNDQ0IDguNDM4eiIvPgo8L3N2Zz4K" width="18"/></div></div></div></div></div></div></div></div></div><div><div><div class="bcx0ml-0 iezjZi"><div class="pg0np9-0 pm7u8-0 iKbgRh"><div class="pm7u8-1 Kasah"><a rel="" href="/mutual-funds/amc/axis-mutual-fund" target="" class="sc-1fcsi9p-0 eSNNDp"><img alt="Axis Mutual Fund" src="https://static.paytmmoney.com/amc-logo/AXSMF.png" class="pm7u8-2 gPzNgo"/></a><div class="pm7u8-3 bXxmuj"><h1 class="pm7u8-4 dOizIq">Axis ELSS Tax Saver Direct Plan-Growth</h1><div class="sc-1l4v6b8-0 eWDGgC"><div class="pm7u8-6 ekaHEH"><a rel="" href="/mutual-funds/elss-funds" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-12yzxcu-1 ZlMJB">Tax Saver</span></a><a rel="" href="/mutual-funds/search?category_id=39&amp;primary_category_id=4" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-12yzxcu-1 ZlMJB">ELSS</span></a></div></div></div></div><div class="sc-1l4v6b8-1 pm7u8-11 gIJaQB"><div class="pm7u8-6 ekaHEH"><a rel="" href="/mutual-funds/elss-funds" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-12yzxcu-1 ZlMJB">Tax Saver</span></a><a rel="" href="/mutual-funds/search?category_id=39&amp;primary_category_id=4" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-12yzxcu-1 ZlMJB">ELSS</span></a></div></div></div><div class="pg0np9-0 bcx0ml-1 lgATHq"><div class="bcx0ml-2 gpoxcH"><div class="sc-126kcut-0 sc-1a6vifk-0 hmXixn"><div class="sc-1a6vifk-1 cXrOLJ">NAV</div><div class="sdvge3-0 fBhEjk"><img dir="UP" src="/static/images/mutual-fund/chart-arrow-up.svg" alt="returns change indicator" class="sdvge3-1 jPQExa"/></div><div class="sc-1a6vifk-2 gnXOvi"><div class="sc-1lcrp84-0 iUvrOZ"><div class="sc-1lcrp84-2 efJSrQ"><div class="sc-1a6vifk-4 gJavdS">₹<!-- -->88<span class="sc-1a6vifk-5 TCFlM">.<!-- -->0783</span></div></div><div class="sc-1lcrp84-1 laAHZf">as on 02 Feb 2024, 11:32 PM</div></div><div class="sc-1a6vifk-3 gPgjCo"><div class="sc-1lcrp84-0 iUvrOZ"><div class="sc-1lcrp84-2 efJSrQ"><div color="#59aa00" class="sc-1a6vifk-6 sc-1a6vifk-8 iTjPWn">₹<!-- -->0.5509<span class="sc-1a6vifk-7 jJSrrd">(<span value="0.6294029069754141" class="g7n17d-0 fdAILa">0.63%</span>)</span></div></div><div class="sc-1lcrp84-1 laAHZf">Last Change</div></div></div></div><div class="sc-1a6vifk-11 enidQ"><div class="sc-1pnccwa-0 fmNRow" aria-label="loader"><div class="sc-1pnccwa-1 lfPvFc"></div><img alt="loader" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSIyNiIgdmlld0JveD0iMCAwIDQwIDI2Ij4KICAgIDxwYXRoIGZpbGw9IiMwMEJDRjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIuOTMgMjIuMjI5TDE5Ljg2NCAyLjgzMmEuNjI0LjYyNCAwIDAgMSAuOTY3IDBsMTcuMDM5IDE5LjUyYy40MzIuNDk0LjEyNSAxLjM0LS40ODYgMS4zMzdsLTMzLjk3LS4xMjNjLS42MDktLjAwMi0uOTEyLS44NDUtLjQ4Mi0xLjMzNyIvPgo8L3N2Zz4K" class="sc-1pnccwa-2 sc-1pnccwa-3 iUatAk"/><img alt="loader" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDAiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCA0MCAyNiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMjEuMjQ2Vi4xMzdoMzUuNDY3djIxLjEwOXoiLz4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi42NjcgMS44MTMpIj4KICAgICAgICAgICAgPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiMyMjMzNjgiIGQ9Ik0uMTg4IDE5Ljg3MkwxNy4yMjguMzUyYS41ODMuNTgzIDAgMCAxIC45MDQgMEwzNS4yOCAxOS45OTVjLjQwMy40NjIuMTE2IDEuMjUzLS40NTUgMS4yNUwuNjQgMjEuMTIzYy0uNTY5LS4wMDEtLjg1My0uNzktLjQ1LTEuMjUiIG1hc2s9InVybCgjYikiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZFRkVGRSIgZD0iTTE3Ljg0MyAxMS4wMTZjLS4xODQgMC0uMzItLjA1LS40MDctLjE1MmEuNTE0LjUxNCAwIDAgMSAwLS42ODVjLjA4OC0uMDk3LjIyMy0uMTQ2LjQwNy0uMTQ2aDUuMTE0Yy4xODUgMCAuMzIuMDUyLjQwOC4xNTRhLjUxNi41MTYgMCAwIDEgMCAuNjg0Yy0uMDg3LjA5Ny0uMjIzLjE0NS0uNDA4LjE0NWgtLjc0NmMtLjMyMiAwLS41OTQtLjAwNS0uODE2LS4wMTMtLjIyLS4wMS0uMzU0LS4wMi0uNC0uMDI4di4wNTVhMS44MzggMS44MzggMCAwIDEgLjk4MiAxLjE0OGguOThjLjE4NSAwIC4zMi4wNS40MDguMTUyYS41MTguNTE4IDAgMCAxIDAgLjY4NGMtLjA4Ny4wOTYtLjIyMy4xNDUtLjQwOC4xNDVoLS45MTJjLS4wNDYuNDI0LS4xNi43ODctLjM0NSAxLjA4Ni0uMTg0LjMtLjQwOS41NDYtLjY3Ljc0YTIuOTkzIDIuOTkzIDAgMCAxLS44NzEuNDQzIDQuMzgxIDQuMzgxIDAgMCAxLS45MzMuMTkzbDMuMTIzIDMuMDAxYS42OS42OSAwIDAgMSAuMjIxLjQ5OS42My42MyAwIDAgMS0uMTY1LjQ0Mi41OTQuNTk0IDAgMCAxLS40NTcuMTguOTQ2Ljk0NiAwIDAgMS0uMjk3LS4wNDkuNzc3Ljc3NyAwIDAgMS0uMjk2LS4ybC0zLjY3Ny0zLjU5NmEuOTQuOTQgMCAwIDEtLjIyMi0uMjgzLjY4NS42ODUgMCAwIDEtLjA2OC0uMjk4YzAtLjE3NS4wNTUtLjMyLjE2NS0uNDM2YS41Ny41NyAwIDAgMSAuNDI5LS4xNzJoLjE4Yy4yODUgMCAuNTY5LS4wMjYuODUtLjA3Ny4yOC0uMDUuNTM0LS4xMzguNzYtLjI2Mi4yMjUtLjEyNS40MTYtLjI4My41NzQtLjQ3N2ExLjUyIDEuNTIgMCAwIDAgLjMwNC0uNzM0aC0yLjgwN2MtLjE4NCAwLS4zMi0uMDUtLjQwNy0uMTUyYS41MTEuNTExIDAgMCAxIDAtLjY4NGMuMDg4LS4wOTcuMjIzLS4xNDUuNDA3LS4xNDVoMi43MzdjLS4yNC0uNzc1LS45NDQtMS4xNjItMi4xMTUtMS4xNjJoLS42MjJ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=" class="sc-1pnccwa-2 sc-1pnccwa-4 dkSxVU"/></div></div></div><div class="sc-126kcut-0 sc-1xbcxh0-0 bknFuj"><h2 class="sc-126kcut-1 fpYqzF">Scheme Ratings</h2><div class="sc-1jgs2q-6 kHBeax"><div class="sc-1jgs2q-2 dkSKGD"><div class="sc-1jgs2q-4 abTRD"><div class="sc-1jgs2q-3 bkXkzk"><div class="sc-1jgs2q-0 sc-1xbcxh0-1 kuPxuO"><div class="sc-1xbcxh0-2 gZKocn">1</div><div class="sc-1jgs2q-1 gBqDdu"><div class="sc-1xbcxh0-3 hXklkk"><img alt="star" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDEzIDEzIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZBRkFGQSIgZD0iTS0zMy0yODloMzYwdjk2MEgtMzN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0Y1RjdGOSIgZD0iTS0zMy0yNDNoMzYwLjc3NnY5MzYuMzg3SC0zM3oiIG9wYWNpdHk9Ii45Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzIC0xMikiPgogICAgICAgICAgICA8cmVjdCB3aWR0aD0iMjYwLjM1NyIgaGVpZ2h0PSIzNC40OTUiIHg9IjEuMDU3IiB5PSIuNzI5IiBmaWxsPSIjRkZGIiBzdHJva2U9IiNERERGRTUiIHN0cm9rZS1vcGFjaXR5PSIuNzUiIHN0cm9rZS13aWR0aD0iLjgyMSIgcng9IjMuMjg1Ii8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNFRTlDMTYiIGQ9Ik0xOS40MjggMTJhNi40MjggNi40MjggMCAxIDEgMCAxMi44NTYgNi40MjggNi40MjggMCAwIDEgMC0xMi44NTZ6bTAgMi4zMzdhLjMzMi4zMzIgMCAwIDAtLjMxNy4yNTNsLS44MDUgMi41OTNoLTIuNjQxYy0uMTgzIDAtLjMyOC4xNjYtLjMyOC4zNTcgMCAuMTE4LjA1Ny4yMjMuMTQyLjI4NWExMDYwLjIgMTA2MC4yIDAgMCAxIDIuMTM0IDEuNjI0cy0uOCAyLjU2LS44MTUgMi42MDJhLjQwMi40MDIgMCAwIDAtLjAyLjEyYzAgLjE5My4xNDguMzQ3LjMzLjM0Ny4wNyAwIC4xMzUtLjAyMy4xOS0uMDYybDIuMTMtMS42MTggMi4xMyAxLjYxOGMuMDU1LjA0LjEyLjA2Mi4xOS4wNjJhLjM0LjM0IDAgMCAwIC4zMy0uMzQ2LjM5NS4zOTUgMCAwIDAtLjAyLS4xMjFjLS4wMTYtLjA0MS0uODE1LTIuNjAyLS44MTUtMi42MDJzMi4wODEtMS41ODcgMi4xMzQtMS42MjRhLjM1NC4zNTQgMCAwIDAgLjE0MS0uMjg2YzAtLjE5LS4xNDEtLjM1Ni0uMzI0LS4zNTZoLTIuNjQxbC0uODA4LTIuNTkzYS4zMzIuMzMyIDAgMCAwLS4zMTctLjI1M3oiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="/><img alt="star" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE5IDE4Ij4KICAgIDxwYXRoIGZpbGw9IiNFM0UzRTMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuMTQzIDBhOSA5IDAgMSAxIDAgMTggOSA5IDAgMCAxIDAtMTh6bTAgNGMtLjE4NiAwLS4zNC4xMy0uMzg4LjMwOWwtLjk4MyAzLjE3aC0zLjIzYy0uMjIyIDAtLjQuMjAyLS40LjQzNiAwIC4xNDQuMDcuMjcyLjE3NC4zNDguMDY0LjA0NiAyLjYwOCAxLjk4NSAyLjYwOCAxLjk4NXMtLjk3NyAzLjEzLS45OTYgMy4xOGEuNDkyLjQ5MiAwIDAgMC0uMDI1LjE0OGMwIC4yMzUuMTgxLjQyNC40MDQuNDI0YS4zOTYuMzk2IDAgMCAwIC4yMzItLjA3NmwyLjYwNC0xLjk3OCAyLjYwNCAxLjk3OGEuMzk1LjM5NSAwIDAgMCAuMjMxLjA3Ni40MTYuNDE2IDAgMCAwIC40MDQtLjQyNC40ODMuNDgzIDAgMCAwLS4wMjUtLjE0OGMtLjAxOC0uMDUtLjk5NS0zLjE4LS45OTUtMy4xOHMyLjU0My0xLjk0IDIuNjA4LTEuOTg1YS40MzIuNDMyIDAgMCAwIC4xNzMtLjM1YzAtLjIzMi0uMTczLS40MzUtLjM5Ni0uNDM1aC0zLjIzbC0uOTg3LTMuMTdBLjQwNS40MDUgMCAwIDAgOS4xNDMgNHoiLz4KPC9zdmc+Cg=="/><img alt="star" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE5IDE4Ij4KICAgIDxwYXRoIGZpbGw9IiNFM0UzRTMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuMTQzIDBhOSA5IDAgMSAxIDAgMTggOSA5IDAgMCAxIDAtMTh6bTAgNGMtLjE4NiAwLS4zNC4xMy0uMzg4LjMwOWwtLjk4MyAzLjE3aC0zLjIzYy0uMjIyIDAtLjQuMjAyLS40LjQzNiAwIC4xNDQuMDcuMjcyLjE3NC4zNDguMDY0LjA0NiAyLjYwOCAxLjk4NSAyLjYwOCAxLjk4NXMtLjk3NyAzLjEzLS45OTYgMy4xOGEuNDkyLjQ5MiAwIDAgMC0uMDI1LjE0OGMwIC4yMzUuMTgxLjQyNC40MDQuNDI0YS4zOTYuMzk2IDAgMCAwIC4yMzItLjA3NmwyLjYwNC0xLjk3OCAyLjYwNCAxLjk3OGEuMzk1LjM5NSAwIDAgMCAuMjMxLjA3Ni40MTYuNDE2IDAgMCAwIC40MDQtLjQyNC40ODMuNDgzIDAgMCAwLS4wMjUtLjE0OGMtLjAxOC0uMDUtLjk5NS0zLjE4LS45OTUtMy4xOHMyLjU0My0xLjk0IDIuNjA4LTEuOTg1YS40MzIuNDMyIDAgMCAwIC4xNzMtLjM1YzAtLjIzMi0uMTczLS40MzUtLjM5Ni0uNDM1aC0zLjIzbC0uOTg3LTMuMTdBLjQwNS40MDUgMCAwIDAgOS4xNDMgNHoiLz4KPC9zdmc+Cg=="/><img alt="star" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE5IDE4Ij4KICAgIDxwYXRoIGZpbGw9IiNFM0UzRTMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuMTQzIDBhOSA5IDAgMSAxIDAgMTggOSA5IDAgMCAxIDAtMTh6bTAgNGMtLjE4NiAwLS4zNC4xMy0uMzg4LjMwOWwtLjk4MyAzLjE3aC0zLjIzYy0uMjIyIDAtLjQuMjAyLS40LjQzNiAwIC4xNDQuMDcuMjcyLjE3NC4zNDguMDY0LjA0NiAyLjYwOCAxLjk4NSAyLjYwOCAxLjk4NXMtLjk3NyAzLjEzLS45OTYgMy4xOGEuNDkyLjQ5MiAwIDAgMC0uMDI1LjE0OGMwIC4yMzUuMTgxLjQyNC40MDQuNDI0YS4zOTYuMzk2IDAgMCAwIC4yMzItLjA3NmwyLjYwNC0xLjk3OCAyLjYwNCAxLjk3OGEuMzk1LjM5NSAwIDAgMCAuMjMxLjA3Ni40MTYuNDE2IDAgMCAwIC40MDQtLjQyNC40ODMuNDgzIDAgMCAwLS4wMjUtLjE0OGMtLjAxOC0uMDUtLjk5NS0zLjE4LS45OTUtMy4xOHMyLjU0My0xLjk0IDIuNjA4LTEuOTg1YS40MzIuNDMyIDAgMCAwIC4xNzMtLjM1YzAtLjIzMi0uMTczLS40MzUtLjM5Ni0uNDM1aC0zLjIzbC0uOTg3LTMuMTdBLjQwNS40MDUgMCAwIDAgOS4xNDMgNHoiLz4KPC9zdmc+Cg=="/><img alt="star" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE5IDE4Ij4KICAgIDxwYXRoIGZpbGw9IiNFM0UzRTMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuMTQzIDBhOSA5IDAgMSAxIDAgMTggOSA5IDAgMCAxIDAtMTh6bTAgNGMtLjE4NiAwLS4zNC4xMy0uMzg4LjMwOWwtLjk4MyAzLjE3aC0zLjIzYy0uMjIyIDAtLjQuMjAyLS40LjQzNiAwIC4xNDQuMDcuMjcyLjE3NC4zNDguMDY0LjA0NiAyLjYwOCAxLjk4NSAyLjYwOCAxLjk4NXMtLjk3NyAzLjEzLS45OTYgMy4xOGEuNDkyLjQ5MiAwIDAgMC0uMDI1LjE0OGMwIC4yMzUuMTgxLjQyNC40MDQuNDI0YS4zOTYuMzk2IDAgMCAwIC4yMzItLjA3NmwyLjYwNC0xLjk3OCAyLjYwNCAxLjk3OGEuMzk1LjM5NSAwIDAgMCAuMjMxLjA3Ni40MTYuNDE2IDAgMCAwIC40MDQtLjQyNC40ODMuNDgzIDAgMCAwLS4wMjUtLjE0OGMtLjAxOC0uMDUtLjk5NS0zLjE4LS45OTUtMy4xOHMyLjU0My0xLjk0IDIuNjA4LTEuOTg1YS40MzIuNDMyIDAgMCAwIC4xNzMtLjM1YzAtLjIzMi0uMTczLS40MzUtLjM5Ni0uNDM1aC0zLjIzbC0uOTg3LTMuMTdBLjQwNS40MDUgMCAwIDAgOS4xNDMgNHoiLz4KPC9zdmc+Cg=="/></div><div class="sc-1xbcxh0-4 jpCSLv">rated by <span class="sc-1xbcxh0-5 UFivh">Value Research</span></div></div></div></div></div></div></div><div class="sc-1tp71gf-0 ijgJpn"><div class="modal_content sc-1tp71gf-1 cjEcpf"><div class="sc-7k4tyu-0 kYXcNj"><div class="sc-7k4tyu-1 dwmPnI"><div class="btbnvd-0 ijFqeX"><img alt="ELSS" src="/static/images/mutual-fund/medal.svg" class="btbnvd-1 bkIdUB"/><div class="btbnvd-2 fZMomi"><div class="btbnvd-3 ixkIui">ELSS</div><div class="btbnvd-4 dPwWhT">Rankings based on <!-- --> | as on <!-- -->Invalid date</div></div></div><div class="sc-7k4tyu-2 iCAntx">×</div></div></div></div></div></div><div class="bcx0ml-8 gqFDOM"><div class="i1cclb-0 fapJRJ"><div class="i1cclb-11 bevuEl"><b>Videos:</b> <!-- -->for Axis Mutual Fund</div><div class="i1cclb-1 iuWTxs"><div class="i1cclb-3 eIGOOU"><img src="" class="i1cclb-5 jkkgfq"/><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iOTkiIGhlaWdodD0iOTkiIHZpZXdCb3g9IjAgMCA5OSA5OSI+CiAgICA8ZGVmcz4KICAgICAgICA8ZWxsaXBzZSBpZD0iYiIgY3g9IjQzLjYzMyIgY3k9IjQzLjUyIiByeD0iNDMuNjMzIiByeT0iNDMuNTIiLz4KICAgICAgICA8ZmlsdGVyIGlkPSJhIiB3aWR0aD0iMTU1JSIgaGVpZ2h0PSIxNTUuMSUiIHg9Ii0yNy41JSIgeT0iLTI3LjYlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICAgICAgICA8ZmVPZmZzZXQgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIiBzdGREZXZpYXRpb249IjgiLz4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggaW49InNoYWRvd0JsdXJPdXRlcjEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wNTIwODMzMzMzIDAiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi44MzIgNi44OCkiPgogICAgICAgICAgICA8dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgIDwvZz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDBCQ0YxIiBkPSJNNDMuOTE2IDMzLjI1MmwyNS43ODUgMTUuMDFhNC4zNTIgNC4zNTIgMCAwIDEgMCA3LjUyMmwtMjUuNzg1IDE1LjAxYTQuMzUyIDQuMzUyIDAgMCAxLTYuNTQxLTMuNzZWMzcuMDEyYTQuMzUyIDQuMzUyIDAgMCAxIDYuNTQxLTMuNzYxeiIvPgogICAgPC9nPgo8L3N2Zz4K" class="i1cclb-4 fUYyoH"/></div><video poster="" controls="" class="i1cclb-2 gFRGgU"></video></div><div class="i1cclb-6 dxAEeg"><div class="slick-slider slick-initialized"><div class="slick-list"><div class="slick-track" style="width:25%;left:0%"><div data-index="0" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" style="outline:none;width:100%"><div><div tabindex="-1" style="width:100%;display:inline-block" class="i1cclb-7 jczlwa"><div class="i1cclb-10 gJzBcD"><div class="i1cclb-12 dlgqcC"><img src="https://static.paytmmoney.com/video/thumb/Axis_Long_Term_Equity_Fund.jpg" class="i1cclb-16 fTouSS"/><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iOTkiIGhlaWdodD0iOTkiIHZpZXdCb3g9IjAgMCA5OSA5OSI+CiAgICA8ZGVmcz4KICAgICAgICA8ZWxsaXBzZSBpZD0iYiIgY3g9IjQzLjYzMyIgY3k9IjQzLjUyIiByeD0iNDMuNjMzIiByeT0iNDMuNTIiLz4KICAgICAgICA8ZmlsdGVyIGlkPSJhIiB3aWR0aD0iMTU1JSIgaGVpZ2h0PSIxNTUuMSUiIHg9Ii0yNy41JSIgeT0iLTI3LjYlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICAgICAgICA8ZmVPZmZzZXQgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIiBzdGREZXZpYXRpb249IjgiLz4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggaW49InNoYWRvd0JsdXJPdXRlcjEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wNTIwODMzMzMzIDAiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi44MzIgNi44OCkiPgogICAgICAgICAgICA8dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgIDwvZz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDBCQ0YxIiBkPSJNNDMuOTE2IDMzLjI1MmwyNS43ODUgMTUuMDFhNC4zNTIgNC4zNTIgMCAwIDEgMCA3LjUyMmwtMjUuNzg1IDE1LjAxYTQuMzUyIDQuMzUyIDAgMCAxLTYuNTQxLTMuNzZWMzcuMDEyYTQuMzUyIDQuMzUyIDAgMCAxIDYuNTQxLTMuNzYxeiIvPgogICAgPC9nPgo8L3N2Zz4K" class="i1cclb-19 ejOpxC"/></div><div class="i1cclb-14 lbCYwJ"><div class="i1cclb-15 fBmkQx">Axis Long Term Equity Fund</div></div></div></div></div></div></div></div></div></div></div></div><div class="sc-126kcut-0 sc-74f8f3-0 cgfMZm"><h2 class="sc-126kcut-1 fpYqzF">Schemes Managed By</h2><div class="sc-1jgs2q-6 kHBeax"><div class="sc-1jgs2q-2 dkSKGD"><div class="sc-1jgs2q-4 abTRD"><div class="sc-1jgs2q-3 bkXkzk"><a rel="" href="/mutual-funds/fund-manager/shreyash-devalkar/74" target="" class="sc-1fcsi9p-0 eSNNDp"><div class="sc-1jgs2q-0 sc-74f8f3-1 huZYlh"><img alt="Shreyash Devalkar" src="https://static.paytmmoney.com/fundmanager/fbe6dedb-8183-4535-97a6-2afb569d769b/74_Shreyash_Devalkar.jpg" class="sc-74f8f3-2 dnKHUO"/><div class="sc-1jgs2q-1 gBqDdu"><div class="sc-74f8f3-3 kLXjHJ">Shreyash Devalkar</div><div class="sc-74f8f3-4 fTqOAc">Fund Manager</div></div><div class="sc-1ep2vaf-1 sc-1ep2vaf-6 hdGCQp"></div></div></a></div><div class="sc-1jgs2q-3 bkXkzk"><a rel="" href="/mutual-funds/fund-manager/ashish-naik/98" target="" class="sc-1fcsi9p-0 eSNNDp"><div class="sc-1jgs2q-0 sc-74f8f3-1 huZYlh"><img alt="Ashish Naik" src="https://static.paytmmoney.com/fundmanager/4987ae7f-be00-4e4a-a344-e19ece064b98/98_Ashish_Naik.jpg" class="sc-74f8f3-2 dnKHUO"/><div class="sc-1jgs2q-1 gBqDdu"><div class="sc-74f8f3-3 kLXjHJ">Ashish Naik</div><div class="sc-74f8f3-4 fTqOAc">Fund Manager</div></div><div class="sc-1ep2vaf-1 sc-1ep2vaf-6 hdGCQp"></div></div></a></div></div></div></div></div></div><div class="bcx0ml-3 iqBqcO"><div class="sc-126kcut-0 sc-16wsexf-0 cFqWWu"><h2 class="sc-126kcut-1 sc-16wsexf-1 gOaEEj">Investment Performance</h2><div class="sc-16wsexf-2 cvcVIv"><div class="sc-16wsexf-3 jjSAZf"><div class="sc-16wsexf-4 danWpp"><input type="text" aria-label="investment-value" value="₹ 1,00,000" class="sc-16wsexf-5 hoLmXt"/></div><div class="sc-16wsexf-6 dpcHqB">would have given a return of</div></div><div class="sc-17rtuy8-0 egTKSN"><div class="sc-17rtuy8-1 fjQwaJ"><div class="sc-17rtuy8-2 jZMOBs"><div class="sc-17rtuy8-3 gpCFj">₹<!-- -->1,10,871</div><div height="64.19515785762778" class="sc-17rtuy8-4 dIAXTp"><div height="14.195157857627786" color="#59aa00" class="sc-17rtuy8-6 joGBum"><img alt="star" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE4IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE1LjI0IDcuMzE2Yy4zMTYtLjI5Ni40MzYtLjcyLjMwMS0xLjExNC0uMTM1LS4zOTUtLjQ5Ny0uNjc3LS45MzMtLjc0OGwtMy4xODctLjQzN0EuNTUzLjU1MyAwIDAgMSAxMSA0LjczNUw5LjU1NiAyLjAyN2MtLjE5NS0uMzgtLjYtLjYwNy0xLjAzNy0uNjA3LS40NTEgMC0uODQyLjI0LTEuMDM3LjYwN0w2LjA1MyA0LjczNWEuNTIuNTIgMCAwIDEtLjQyLjI4MmwtMy4yMDMuNDM3YTEuMTE1IDEuMTE1IDAgMCAwLS45MzMuNzQ4Yy0uMTM1LjM5NS0uMDMuODMyLjMwMiAxLjExNGwyLjMgMi4xMTVhLjUxMS41MTEgMCAwIDEgLjE2NS40NjZsLS41NTYgMi45NzZjLS4wNzYuNDEuMTA1LjgxOS40NjYgMS4wNzIuMjEuMTQyLjQzNS4yMTIuNjc2LjIxMi4xOCAwIC4zNzYtLjA0Mi41NDItLjEyN2wyLjg1Ni0xLjQxYS41NzcuNTc3IDAgMCAxIC41MjcgMGwyLjg1NiAxLjQxYy4zOTEuMTk4Ljg1Ny4xNyAxLjIxOC0uMDg1YTEuMDUgMS4wNSAwIDAgMCAuNDY2LTEuMDcybC0uNTQyLTIuOTc2YS41MTEuNTExIDAgMCAxIC4xNjctLjQ2NmwyLjMtMi4xMTV6Ii8+Cjwvc3ZnPgo=" class="sc-17rtuy8-5 eADZfD"/></div></div></div><div class="sc-17rtuy8-2 jZMOBs"><div class="sc-17rtuy8-3 gpCFj">₹<!-- -->1,21,647</div><div height="78.26504111283748" class="sc-17rtuy8-4 cUgAGN"><div height="28.26504111283747" color="#59aa00" class="sc-17rtuy8-6 emtLQq"><img alt="star" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE4IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE1LjI0IDcuMzE2Yy4zMTYtLjI5Ni40MzYtLjcyLjMwMS0xLjExNC0uMTM1LS4zOTUtLjQ5Ny0uNjc3LS45MzMtLjc0OGwtMy4xODctLjQzN0EuNTUzLjU1MyAwIDAgMSAxMSA0LjczNUw5LjU1NiAyLjAyN2MtLjE5NS0uMzgtLjYtLjYwNy0xLjAzNy0uNjA3LS40NTEgMC0uODQyLjI0LTEuMDM3LjYwN0w2LjA1MyA0LjczNWEuNTIuNTIgMCAwIDEtLjQyLjI4MmwtMy4yMDMuNDM3YTEuMTE1IDEuMTE1IDAgMCAwLS45MzMuNzQ4Yy0uMTM1LjM5NS0uMDMuODMyLjMwMiAxLjExNGwyLjMgMi4xMTVhLjUxMS41MTEgMCAwIDEgLjE2NS40NjZsLS41NTYgMi45NzZjLS4wNzYuNDEuMTA1LjgxOS40NjYgMS4wNzIuMjEuMTQyLjQzNS4yMTIuNjc2LjIxMi4xOCAwIC4zNzYtLjA0Mi41NDItLjEyN2wyLjg1Ni0xLjQxYS41NzcuNTc3IDAgMCAxIC41MjcgMGwyLjg1NiAxLjQxYy4zOTEuMTk4Ljg1Ny4xNyAxLjIxOC0uMDg1YTEuMDUgMS4wNSAwIDAgMCAuNDY2LTEuMDcybC0uNTQyLTIuOTc2YS41MTEuNTExIDAgMCAxIC4xNjctLjQ2NmwyLjMtMi4xMTV6Ii8+Cjwvc3ZnPgo=" class="sc-17rtuy8-5 eADZfD"/></div></div></div><div class="sc-17rtuy8-2 jZMOBs"><div class="sc-17rtuy8-3 gpCFj">₹<!-- -->1,34,960</div><div height="95.64683762469318" class="sc-17rtuy8-4 kbXuja"><div height="45.64683762469317" color="#59aa00" class="sc-17rtuy8-6 beSjKv"><img alt="star" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE4IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE1LjI0IDcuMzE2Yy4zMTYtLjI5Ni40MzYtLjcyLjMwMS0xLjExNC0uMTM1LS4zOTUtLjQ5Ny0uNjc3LS45MzMtLjc0OGwtMy4xODctLjQzN0EuNTUzLjU1MyAwIDAgMSAxMSA0LjczNUw5LjU1NiAyLjAyN2MtLjE5NS0uMzgtLjYtLjYwNy0xLjAzNy0uNjA3LS40NTEgMC0uODQyLjI0LTEuMDM3LjYwN0w2LjA1MyA0LjczNWEuNTIuNTIgMCAwIDEtLjQyLjI4MmwtMy4yMDMuNDM3YTEuMTE1IDEuMTE1IDAgMCAwLS45MzMuNzQ4Yy0uMTM1LjM5NS0uMDMuODMyLjMwMiAxLjExNGwyLjMgMi4xMTVhLjUxMS41MTEgMCAwIDEgLjE2NS40NjZsLS41NTYgMi45NzZjLS4wNzYuNDEuMTA1LjgxOS40NjYgMS4wNzIuMjEuMTQyLjQzNS4yMTIuNjc2LjIxMi4xOCAwIC4zNzYtLjA0Mi41NDItLjEyN2wyLjg1Ni0xLjQxYS41NzcuNTc3IDAgMCAxIC41MjcgMGwyLjg1NiAxLjQxYy4zOTEuMTk4Ljg1Ny4xNyAxLjIxOC0uMDg1YTEuMDUgMS4wNSAwIDAgMCAuNDY2LTEuMDcybC0uNTQyLTIuOTc2YS41MTEuNTExIDAgMCAxIC4xNjctLjQ2NmwyLjMtMi4xMTV6Ii8+Cjwvc3ZnPgo=" class="sc-17rtuy8-5 eADZfD"/></div></div></div><div class="sc-17rtuy8-2 jZMOBs"><div class="sc-17rtuy8-3 gpCFj">₹<!-- -->1,38,294</div><div height="100" class="sc-17rtuy8-4 glJGpO"><div height="50" color="#59aa00" class="sc-17rtuy8-6 cnkNdK"><img alt="star" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE4IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE1LjI0IDcuMzE2Yy4zMTYtLjI5Ni40MzYtLjcyLjMwMS0xLjExNC0uMTM1LS4zOTUtLjQ5Ny0uNjc3LS45MzMtLjc0OGwtMy4xODctLjQzN0EuNTUzLjU1MyAwIDAgMSAxMSA0LjczNUw5LjU1NiAyLjAyN2MtLjE5NS0uMzgtLjYtLjYwNy0xLjAzNy0uNjA3LS40NTEgMC0uODQyLjI0LTEuMDM3LjYwN0w2LjA1MyA0LjczNWEuNTIuNTIgMCAwIDEtLjQyLjI4MmwtMy4yMDMuNDM3YTEuMTE1IDEuMTE1IDAgMCAwLS45MzMuNzQ4Yy0uMTM1LjM5NS0uMDMuODMyLjMwMiAxLjExNGwyLjMgMi4xMTVhLjUxMS41MTEgMCAwIDEgLjE2NS40NjZsLS41NTYgMi45NzZjLS4wNzYuNDEuMTA1LjgxOS40NjYgMS4wNzIuMjEuMTQyLjQzNS4yMTIuNjc2LjIxMi4xOCAwIC4zNzYtLjA0Mi41NDItLjEyN2wyLjg1Ni0xLjQxYS41NzcuNTc3IDAgMCAxIC41MjcgMGwyLjg1NiAxLjQxYy4zOTEuMTk4Ljg1Ny4xNyAxLjIxOC0uMDg1YTEuMDUgMS4wNSAwIDAgMCAuNDY2LTEuMDcybC0uNTQyLTIuOTc2YS41MTEuNTExIDAgMCAxIC4xNjctLjQ2NmwyLjMtMi4xMTV6Ii8+Cjwvc3ZnPgo=" class="sc-17rtuy8-5 eADZfD"/></div></div></div></div><div class="sc-17rtuy8-7 cgbjDy"><div class="sc-17rtuy8-8 fNQZMI">Bank Account</div><div class="sc-17rtuy8-8 fNQZMI">Fixed Deposit</div><div class="sc-17rtuy8-8 fNQZMI">Regular Mutual Fund</div><div class="sc-17rtuy8-8 fNQZMI">This Fund on Paytm Money</div></div></div><div class="sc-16wsexf-7 bjYdF"><div class="sc-16wsexf-8 dGoEDp"><div class="sc-16wsexf-9 sc-16wsexf-11 hhrmCp">This Mutual Fund</div><div value="38293.99999999999" class="sc-16wsexf-10 sc-16wsexf-12 dEaOFV">₹<!-- -->38,293</div></div><div class="sc-16wsexf-8 dGoEDp"><div class="sc-16wsexf-9 ipynXY">Profit (absolute return)</div><div value="38.294" class="sc-16wsexf-10 dEVbai">38.29<!-- -->%</div></div></div><div class="sc-16wsexf-13 lkSHtP"><span class="sc-16wsexf-14 bYFDRD">in the last</span><div class="sc-1hmktju-0 sc-1hmktju-2 icvnlJ"><div class="sc-1hmktju-1 gKxsns">1m</div><div class="sc-1hmktju-1 gKxsns">3m</div><div class="sc-1hmktju-1 gKxsns">1y</div><div selected="" class="sc-1hmktju-1 jGTVAJ">3y</div><div class="sc-1hmktju-1 gKxsns">5y</div><div class="sc-1hmktju-1 gKxsns">max</div></div></div></div><div class="sc-16wsexf-15 loAdIF"><div><span class="sc-16wsexf-17 gmBlyc">+<!-- -->1<!-- -->% </span><span class="sc-16wsexf-16 kIttBz">Higher Returns</span></div><span class="sc-16wsexf-16 kIttBz">With Direct Plans on Paytm Money</span></div></div><div class="sc-126kcut-0 bsu6gc-0 euYEhD"><h2 class="sc-126kcut-1 fpYqzF">Investment Returns</h2><div class="bsu6gc-1 bPoZsL"><div class="bsu6gc-2 dPQuIs"><div class="bsu6gc-3 hdRTvp">In the last 3 months</div><div class="bsu6gc-4 gUxsMW"><div height="10" width="102.78422943204606" class="sc-1clvynl-0 jtRdJe"><div height="10" class="sc-1clvynl-1 YzoNs"></div></div><div class="bsu6gc-5 lcrhQz"><span value="11.58" class="g7n17d-0 fdAILa">11.58%</span></div></div></div><div class="bsu6gc-2 dPQuIs"><div class="bsu6gc-3 hdRTvp">In the last 6 months</div><div class="bsu6gc-4 gUxsMW"><div height="10" width="102.32764465730897" class="sc-1clvynl-0 bzjABt"><div height="10" class="sc-1clvynl-1 ikeZXe"></div></div><div class="bsu6gc-5 lcrhQz"><span value="9.681" class="g7n17d-0 fdAILa">9.68%</span></div></div></div><div class="bsu6gc-2 dPQuIs"><div class="bsu6gc-3 hdRTvp">In the last 1 year</div><div class="bsu6gc-4 gUxsMW"><div height="10" width="106.64488331722424" class="sc-1clvynl-0 mgmzq"><div height="10" class="sc-1clvynl-1 gjdsgA"></div></div><div class="bsu6gc-5 lcrhQz"><span value="27.637" class="g7n17d-0 fdAILa">27.64%</span></div></div></div><div class="bsu6gc-2 dPQuIs"><div class="bsu6gc-3 hdRTvp">In the last 3 years</div><div class="bsu6gc-4 gUxsMW"><div height="10" width="109.20719187139649" class="sc-1clvynl-0 STNEd"><div height="10" class="sc-1clvynl-1 iKBXkc"></div></div><div class="bsu6gc-5 lcrhQz"><span value="38.294" class="g7n17d-0 fdAILa">38.29%</span></div></div></div><div class="bsu6gc-2 dPQuIs"><div class="bsu6gc-3 hdRTvp">In the last 5 years</div><div class="bsu6gc-4 gUxsMW"><div height="10" width="123.8385820145511" class="sc-1clvynl-0 UtJXX"><div height="10" class="sc-1clvynl-1 ixKzgr"></div></div><div class="bsu6gc-5 lcrhQz"><span value="99.148" class="g7n17d-0 fdAILa">99.15%</span></div></div></div><div class="bsu6gc-2 dPQuIs"><div class="bsu6gc-3 hdRTvp">In the last 10 years</div><div class="bsu6gc-4 gUxsMW"><div height="10" width="200" class="sc-1clvynl-0 bRrLxI"><div height="10" class="sc-1clvynl-1 dXUFM"></div></div><div class="bsu6gc-5 lcrhQz"><span value="415.914" class="g7n17d-0 fdAILa">415.91%</span></div></div></div></div><div class="bsu6gc-6 hgEmds"><div class="bsu6gc-7 etUELP"><div selected="" class="npwiuf-0 iFMoKm"></div><div class="bsu6gc-8 eIDjbi">Absolute Returns</div></div><div class="bsu6gc-7 etUELP"><div class="npwiuf-0 hUtFJl"></div><div class="bsu6gc-8 eIDjbi">CAGR</div></div></div></div><div class="sc-126kcut-0 k2k2sx-0 iBNwcH"><h2 class="sc-126kcut-1 k2k2sx-1 cJnDMB">Scheme Riskometer</h2><div class="k2k2sx-6 cwfpd"><div class="k2k2sx-3 dCeqdQ"><div class="k2k2sx-2 cOBfrD">low</div><img alt="low" src="/static/images/mutual-fund/riskometer/low.svg"/></div><div class="k2k2sx-3 dytiWR"><div class="k2k2sx-2 dDIFLa">low to moderate</div><img alt="low to moderate" src="/static/images/mutual-fund/riskometer/low-moderate.svg"/></div><div class="k2k2sx-3 bZAPoO"><div class="k2k2sx-2 loXLJM">moderate</div><img alt="moderate" src="/static/images/mutual-fund/riskometer/moderate.svg"/></div><div class="k2k2sx-3 fYCLFc"><div class="k2k2sx-2 ctggMH">moderately high</div><img alt="moderately high" src="/static/images/mutual-fund/riskometer/moderately-high.svg"/></div><div class="k2k2sx-3 eREWGL"><div class="k2k2sx-2 iOPJKU">high</div><img alt="high" src="/static/images/mutual-fund/riskometer/high.svg"/></div><div class="k2k2sx-3 kljJeP"><div color="#c02e2e" class="k2k2sx-2 izlbcl">very high</div><img alt="very high" src="/static/images/mutual-fund/riskometer/very-high.svg"/></div><div class="k2k2sx-4 bkuEKF"><img alt="indicator" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODgiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4OCA4MCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYiIgZD0iTTQxLjA3Mi0xMmMuMjQ4IDAgLjQ1NS4xOS40NzUuNDM4bDcuOTE1IDEwMS4zMWEyIDIgMCAwIDEtMS45ODcgMi4xNTZsLTMuNzg4LjAxNGEyIDIgMCAwIDEtMi4wMDctMS45OEw0MC42MzYtMTEuNTU4YS40MzguNDM4IDAgMCAxIC40MzYtLjQ0MnoiLz4KICAgICAgICA8ZmlsdGVyIGlkPSJhIiB3aWR0aD0iMjM1LjklIiBoZWlnaHQ9IjEwOS42JSIgeD0iLTM0JSIgeT0iLTQuNyUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iNCIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIiBzdGREZXZpYXRpb249IjEiLz4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggaW49InNoYWRvd0JsdXJPdXRlcjEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xMiAwIi8+CiAgICAgICAgPC9maWx0ZXI+CiAgICAgICAgPGVsbGlwc2UgaWQ9ImQiIGN4PSIyMS41MzEiIGN5PSI2MS4wMSIgcng9IjExLjUzMSIgcnk9IjExLjQ0NyIvPgogICAgICAgIDxmaWx0ZXIgaWQ9ImMiIHdpZHRoPSIxMzAuNCUiIGhlaWdodD0iMTMwLjYlIiB4PSItMTAuOCUiIHk9Ii0xMC45JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIxIiBkeT0iMSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIiBzdGREZXZpYXRpb249IjEiLz4KICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggaW49InNoYWRvd0JsdXJPdXRlcjEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNCAwIi8+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0icm90YXRlKDUwIDQ1LjcyNSAzOC44NDUpIj4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzIxMzM2OCIgeGxpbms6aHJlZj0iI2IiLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLS42MTIgLS45MTMpIj4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYykiIHhsaW5rOmhyZWY9IiNkIi8+CiAgICAgICAgICAgIDxlbGxpcHNlIGN4PSIyMS41MzEiIGN5PSI2MS4wMSIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjMDBDMUYyIiBzdHJva2UtbGluZWpvaW49InNxdWFyZSIgc3Ryb2tlLXdpZHRoPSI3IiByeD0iOC4wMzEiIHJ5PSI3Ljk0NyIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" class="k2k2sx-5 dduYeI"/></div></div><div class="k2k2sx-7 fjJFIj">Investors understand that their principal will be at<!-- --> <span color="#c02e2e" class="k2k2sx-8 hhMBte">very high</span> risk</div></div></div><div class="bcx0ml-2 gpoxcH"><div class="sc-126kcut-0 sc-1oz2lru-0 iMCrtw"><h2 class="sc-126kcut-1 fpYqzF">Scheme Information</h2><div class="btbnvd-0 ijFqeX"><img alt="Axis ELSS Tax Saver Direct Plan-Growth" src="https://static.paytmmoney.com/amc-logo/AXSMF.png" class="btbnvd-1 btbnvd-5 czjipf"/><div class="btbnvd-2 fZMomi"><div class="btbnvd-3 ixkIui">Axis ELSS Tax Saver Direct Plan-Growth</div><div class="btbnvd-4 dPwWhT">as of <!-- -->31 Oct 2023, 05:30 AM</div></div></div><div class="sc-1oz2lru-1 fOeUuC"><div class="sc-1oz2lru-2 bUViGu"><div class="sc-1oz2lru-3 jKLJys"><div class="sc-1lcrp84-0 iUvrOZ"><div class="sc-1lcrp84-2 efJSrQ">₹<!-- -->31,135.83 Cr</div><div class="sc-1lcrp84-1 laAHZf">Scheme Asset Size</div></div><div class="sc-1lcrp84-0 hnnJqf"><div class="sc-1lcrp84-1 laAHZf">Fund Type</div><div class="sc-1lcrp84-2 chscia">Open-End</div></div><div class="sc-1oz2lru-7 kmIyUG"><div class="sc-1lcrp84-0 iUvrOZ"><div class="sc-1lcrp84-1 laAHZf">Exit Load</div><div class="sc-1lcrp84-2 chscia">No charges on withdrawal</div></div></div></div><div class="sc-1oz2lru-3 jKLJys"><div class="sc-1lcrp84-0 iUvrOZ"><div class="sc-1lcrp84-2 efJSrQ">0.79%</div><div class="sc-1lcrp84-1 laAHZf">Expense Ratio</div></div><div class="sc-1lcrp84-0 iUvrOZ"><div class="sc-1lcrp84-1 laAHZf">Plan</div><div class="sc-1lcrp84-2 chscia">Growth</div></div></div><div class="sc-1oz2lru-3 jKLJys"><div class="sc-1lcrp84-0 iUvrOZ"><div class="sc-1lcrp84-2 efJSrQ">0.18<!-- -->%</div><div class="sc-1lcrp84-1 laAHZf">Cash Holding</div></div><div class="sc-1oz2lru-7 kmIyUG"><div class="sc-1lcrp84-0 iUvrOZ"><div class="sc-1lcrp84-1 laAHZf">Benchmark</div><div class="sc-1lcrp84-2 chscia">NIFTY 500 Total Return Index</div></div></div><div class="sc-1oz2lru-7 kmIyUG"><div class="sc-1lcrp84-0 iUvrOZ"><div class="sc-1lcrp84-1 laAHZf">Scheme Document</div><div class="sc-1lcrp84-2 chscia"><a rel="noopener noreferer" href="http://www.axismf.com" target="_blank" class="sc-1fcsi9p-0 sc-1fcsi9p-1 boWlMh">View</a></div></div></div></div><div class="sc-1oz2lru-3 sc-1oz2lru-5 hOCdYR"><div class="sc-1lcrp84-0 iUvrOZ"><div class="sc-1lcrp84-1 laAHZf">Benchmark</div><div class="sc-1lcrp84-2 chscia">NIFTY 500 Total Return Index</div></div></div></div><div class="sc-1oz2lru-4 sc-1oz2lru-6 cUjLtm"><div class="sc-1lcrp84-0 iUvrOZ"><div class="sc-1lcrp84-1 laAHZf">Exit Load</div><div class="sc-1lcrp84-2 chscia">No charges on withdrawal</div></div><div class="sc-1lcrp84-0 iUvrOZ"><div class="sc-1lcrp84-1 laAHZf">Scheme Document</div><div class="sc-1lcrp84-2 chscia"><a rel="noopener noreferer" href="http://www.axismf.com" target="_blank" class="sc-1fcsi9p-0 sc-1fcsi9p-1 boWlMh">View</a></div></div></div></div></div><div class="sc-126kcut-0 sc-4z535r-0 cRlGxq"><div class="sc-4z535r-2 fQgLiK"><h2 class="sc-126kcut-1 fpYqzF">Sectors<!-- --> Holding in this Mutual Fund</h2><div class="sc-4z535r-4 comAse">as on <!-- -->31 Oct 2023</div></div><div class="sc-4z535r-3 dtkJjp"><div class="sc-17x5qs4-0 ituDlm"><div class="sc-17x5qs4-1 cRyomV"><div class="sc-17x5qs4-2 cGhEYC">Sort By</div> <div class="sc-17x5qs4-3 eiFAhD"></div><div selected="" class="sc-17x5qs4-2 sc-17x5qs4-4 jHudZf"><a class="sc-17x5qs4-6 byBlrw">Value</a><div selected="" class="sc-1ep2vaf-8 sc-17x5qs4-5 gKLypk"></div></div><div class="sc-17x5qs4-3 eiFAhD"></div><div class="sc-17x5qs4-2 sc-17x5qs4-4 ikdfKc"><a class="sc-17x5qs4-6 byBlrw">Sector</a><div class="sc-1ep2vaf-8 sc-17x5qs4-5 bDEqyJ"></div></div></div></div></div><div class="sc-4z535r-1 kCvcj"><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Financial</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 kUINmH"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">25.27<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->7,868.02 Cr</div></div></div><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Services</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 kqBtns"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">15.51<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->4,829.17 Cr</div></div></div><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Technology</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 HRvm"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">10.65<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->3,315.97 Cr</div></div></div><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Automobile</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 ieUlRu"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">9.53<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->2,967.24 Cr</div></div></div><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Healthcare</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 dwSORP"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">9.05<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->2,817.79 Cr</div></div></div><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Others</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 dayovC"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">29.99<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->9,337.63 Cr</div></div></div></div><div class="sc-4z535r-10 jVRrJh"><div class="sc-4z535r-5 bMRUmg">View All</div></div><div class="sc-4z535r-11 eYTpLs"><div class="sc-4z535r-5 bMRUmg">View All</div></div></div><div class="sc-1tp71gf-0 ijgJpn"><div class="modal_content sc-1tp71gf-1 cjEcpf"><div class="sc-126kcut-0 sc-4z535r-0 cRlGxq"><div class="sc-4z535r-2 fQgLiK"><h2 class="sc-126kcut-1 fpYqzF">Sectors<!-- --> Holding in this Mutual Fund</h2><div class="sc-4z535r-4 comAse">as on <!-- -->31 Oct 2023</div></div><div class="sc-4z535r-3 dtkJjp"><div class="sc-17x5qs4-0 ituDlm"><div class="sc-17x5qs4-1 cRyomV"><div class="sc-17x5qs4-2 cGhEYC">Sort By</div> <div class="sc-17x5qs4-3 eiFAhD"></div><div selected="" class="sc-17x5qs4-2 sc-17x5qs4-4 jHudZf"><a class="sc-17x5qs4-6 byBlrw">Value</a><div selected="" class="sc-1ep2vaf-8 sc-17x5qs4-5 gKLypk"></div></div><div class="sc-17x5qs4-3 eiFAhD"></div><div class="sc-17x5qs4-2 sc-17x5qs4-4 ikdfKc"><a class="sc-17x5qs4-6 byBlrw">Sector</a><div class="sc-1ep2vaf-8 sc-17x5qs4-5 bDEqyJ"></div></div></div></div></div><div class="sc-4z535r-1 kCvcj"><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Financial</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 kUINmH"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">25.27<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->7,868.02 Cr</div></div></div><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Services</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 kqBtns"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">15.51<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->4,829.17 Cr</div></div></div><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Technology</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 HRvm"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">10.65<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->3,315.97 Cr</div></div></div><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Automobile</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 ieUlRu"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">9.53<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->2,967.24 Cr</div></div></div><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Healthcare</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 dwSORP"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">9.05<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->2,817.79 Cr</div></div></div><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Others</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 dayovC"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">29.99<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->9,337.63 Cr</div></div></div></div><div class="sc-4z535r-10 jVRrJh"><div class="sc-4z535r-5 bMRUmg">View All</div></div><div class="sc-4z535r-11 eYTpLs"><div class="sc-4z535r-5 bMRUmg">View All</div></div></div></div></div><div class="sc-126kcut-0 sc-4z535r-0 cRlGxq"><div class="sc-4z535r-2 fQgLiK"><h2 class="sc-126kcut-1 fpYqzF">Companies<!-- --> Holding in this Mutual Fund</h2><div class="sc-4z535r-4 comAse">as on <!-- -->31 Oct 2023</div></div><div class="sc-4z535r-3 dtkJjp"><div class="sc-17x5qs4-0 ituDlm"><div class="sc-17x5qs4-1 cRyomV"><div class="sc-17x5qs4-2 cGhEYC">Sort By</div> <div class="sc-17x5qs4-3 eiFAhD"></div><div selected="" class="sc-17x5qs4-2 sc-17x5qs4-4 jHudZf"><a class="sc-17x5qs4-6 byBlrw">Value</a><div selected="" class="sc-1ep2vaf-8 sc-17x5qs4-5 gKLypk"></div></div><div class="sc-17x5qs4-3 eiFAhD"></div><div class="sc-17x5qs4-2 sc-17x5qs4-4 ikdfKc"><a class="sc-17x5qs4-6 byBlrw">Company</a><div class="sc-1ep2vaf-8 sc-17x5qs4-5 bDEqyJ"></div></div></div></div></div><div class="sc-4z535r-1 kCvcj"><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Bajaj Finance Ltd.</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 lfrzej"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">7.48<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->2,328.96 Cr</div></div></div><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Tata Consultancy Services Ltd.</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 DjOkf"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">6.97<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->2,170.17 Cr</div></div></div><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Avenue Supermarts Ltd.</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 DjOkf"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">6.78<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->2,111.01 Cr</div></div></div><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Nestle India Ltd.</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 hCFfPr"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">5.79<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->1,802.76 Cr</div></div></div><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Torrent Power Ltd.</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 byNXdD"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">5.54<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->1,724.92 Cr</div></div></div><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Others</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 dayovC"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">67.44<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->20,998.00 Cr</div></div></div></div><div class="sc-4z535r-10 jVRrJh"><div class="sc-4z535r-5 bMRUmg">View All</div></div><div class="sc-4z535r-11 eYTpLs"><div class="sc-4z535r-5 bMRUmg">View All</div></div></div><div class="sc-1tp71gf-0 ijgJpn"><div class="modal_content sc-1tp71gf-1 cjEcpf"><div class="sc-126kcut-0 sc-4z535r-0 cRlGxq"><div class="sc-4z535r-2 fQgLiK"><h2 class="sc-126kcut-1 fpYqzF">Companies<!-- --> Holding in this Mutual Fund</h2><div class="sc-4z535r-4 comAse">as on <!-- -->31 Oct 2023</div></div><div class="sc-4z535r-3 dtkJjp"><div class="sc-17x5qs4-0 ituDlm"><div class="sc-17x5qs4-1 cRyomV"><div class="sc-17x5qs4-2 cGhEYC">Sort By</div> <div class="sc-17x5qs4-3 eiFAhD"></div><div selected="" class="sc-17x5qs4-2 sc-17x5qs4-4 jHudZf"><a class="sc-17x5qs4-6 byBlrw">Value</a><div selected="" class="sc-1ep2vaf-8 sc-17x5qs4-5 gKLypk"></div></div><div class="sc-17x5qs4-3 eiFAhD"></div><div class="sc-17x5qs4-2 sc-17x5qs4-4 ikdfKc"><a class="sc-17x5qs4-6 byBlrw">Company</a><div class="sc-1ep2vaf-8 sc-17x5qs4-5 bDEqyJ"></div></div></div></div></div><div class="sc-4z535r-1 kCvcj"><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Bajaj Finance Ltd.</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 lfrzej"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">7.48<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->2,328.96 Cr</div></div></div><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Tata Consultancy Services Ltd.</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 DjOkf"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">6.97<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->2,170.17 Cr</div></div></div><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Avenue Supermarts Ltd.</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 DjOkf"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">6.78<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->2,111.01 Cr</div></div></div><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Nestle India Ltd.</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 hCFfPr"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">5.79<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->1,802.76 Cr</div></div></div><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Torrent Power Ltd.</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 byNXdD"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">5.54<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->1,724.92 Cr</div></div></div><div class="dt0la0-0 ihsSjf"><div class="dt0la0-1 dt0la0-2 gjVdHf"><div class="dt0la0-4 iEHPjc">Others</div><div class="dt0la0-5 eKZcU"><div height="10" class="sc-1842aaf-0 dAMnLF"><div color="#ee9c16" height="10" class="sc-1842aaf-1 dayovC"></div></div></div></div><div class="dt0la0-1 dt0la0-3 iltGzq"><div class="dt0la0-6 ktoRGS">67.44<!-- -->%</div><div class="dt0la0-7 hjCnEX">₹<!-- -->20,998.00 Cr</div></div></div></div><div class="sc-4z535r-10 jVRrJh"><div class="sc-4z535r-5 bMRUmg">View All</div></div><div class="sc-4z535r-11 eYTpLs"><div class="sc-4z535r-5 bMRUmg">View All</div></div></div></div></div><div class="sc-126kcut-0 nyp18t-0 eTlzLC"><div class="nyp18t-1 dDuyJN"><h2 class="sc-126kcut-1 fpYqzF">Funds in this Category</h2><a rel="" href="/mutual-funds/search?primary_category_id=4&amp;category_id=39" target="" class="sc-1fcsi9p-0 sc-1fcsi9p-1 gHOfvO"><button class="sc-1i038nv-0 sc-1i038nv-5 nyp18t-2 dUMOMk">View All</button></a></div><div class="nyp18t-3 fijrLF"><div class="nyp18t-4 kPScnw"><div class="nyp18t-5 brFjeK">This fund&#x27;s returns: </div><span value="11.413" class="g7n17d-0 fdAILa">11.41%</span></div><div class="nyp18t-6 bjxHBH"><div class="nyp18t-7 izWAtq">Return Duration</div><div class="css-10nd86i sc-16rkkd8-0 kPtzfB"><div class="css-vj8t7z select__control"><div class="css-1hwfws3 select__value-container select__value-container--has-value"><div class="css-xp4uvy select__single-value">3 Years</div><input id="react-select-23732-input" readonly="" tabindex="0" value="" class="css-14uuagi"/></div><div class="css-1wy0on6 select__indicators"><span class="css-d8oujb select__indicator-separator"></span><div aria-hidden="true" class="css-1ep9fjw select__indicator select__dropdown-indicator"><svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-19bqh2r"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg></div></div></div></div></div></div><a rel="" href="/mutual-funds/scheme/quant-tax-plan-direct-growth/inf966l01986" target="" class="sc-1fcsi9p-0 eSNNDp"><div class="o8s76u-0 jkbxNx"><div class="sc-19wjejv-0 jKhZkL"><div class="tia75m-0 clYYYV"><div class="tia75m-1 ipSstT"><div class="btbnvd-0 ijFqeX"><img alt="Quant ELSS Tax Saver Fund Direct-Growth" src="https://static.paytmmoney.com/amc-logo/ESCMF.png" class="btbnvd-1 bkIdUB"/><div class="btbnvd-2 fZMomi"><div class="btbnvd-3 ixkIui">Quant ELSS Tax Saver Fund Direct-Growth</div><div class="btbnvd-4 dPwWhT"><div class="a4ohic-0 buOaUA"><div class="sc-12yzxcu-0 tgMvy"><span class="sc-12yzxcu-1 ZlMJB">Tax Saver</span><span class="sc-12yzxcu-1 ZlMJB">ELSS</span></div></div></div></div></div><div class="tia75m-2 kACuKu"><div class="sc-1ep2vaf-0 sc-1ep2vaf-4 gafrXv"></div></div></div></div><div class="sc-19wjejv-2 QFVYw"><div class="sc-19wjejv-1 fUMzbf"><div class="sc-1lcrp84-0 iUvrOZ"><div class="sc-1lcrp84-1 laAHZf">Min. Investment</div><div class="sc-1lcrp84-2 chscia">₹<!-- -->500</div></div><div class="sc-1lcrp84-0 lmgPIu"><div class="sc-1lcrp84-1 laAHZf">Category Returns</div><div class="sc-1lcrp84-2 chscia"><div class="sc-1c3hrvg-0 beOkvm"><div class="sc-1c3hrvg-2 dMIbNh">11.04<!-- -->%</div><div class="sc-1c3hrvg-1 bApXPb"><div height="4" class="sc-1842aaf-0 gfKfTU"><div color="#ee9c16" height="4" class="sc-1842aaf-1 bWFdep"></div></div></div><div class="sc-1c3hrvg-2 dMIbNh">36.20<!-- -->%</div></div></div></div><div class="sc-1lcrp84-0 iUvrOZ"><div class="sc-1lcrp84-1 laAHZf">3Y Returns</div><div class="sc-1lcrp84-2 chscia"><div class="f20xgu-0 fmnxCz">36.20</div></div></div></div></div></div></div></a><a rel="" href="/mutual-funds/scheme/sbi-magnum-taxgain-direct-plan-growth/inf200k01um9" target="" class="sc-1fcsi9p-0 eSNNDp"><div class="o8s76u-0 jkbxNx"><div class="sc-19wjejv-0 jKhZkL"><div class="tia75m-0 clYYYV"><div class="tia75m-1 ipSstT"><div class="btbnvd-0 ijFqeX"><img alt="SBI Long Term Equity Fund Direct Plan-Growth" src="https://static.paytmmoney.com/amc-logo/SBIMF.png" class="btbnvd-1 bkIdUB"/><div class="btbnvd-2 fZMomi"><div class="btbnvd-3 ixkIui">SBI Long Term Equity Fund Direct Plan-Growth</div><div class="btbnvd-4 dPwWhT"><div class="a4ohic-0 buOaUA"><div class="sc-12yzxcu-0 tgMvy"><span class="sc-12yzxcu-1 ZlMJB">Tax Saver</span><span class="sc-12yzxcu-1 ZlMJB">ELSS</span></div></div></div></div></div><div class="tia75m-2 kACuKu"><div class="sc-1ep2vaf-0 sc-1ep2vaf-4 gafrXv"></div></div></div></div><div class="sc-19wjejv-2 QFVYw"><div class="sc-19wjejv-1 fUMzbf"><div class="sc-1lcrp84-0 iUvrOZ"><div class="sc-1lcrp84-1 laAHZf">Min. Investment</div><div class="sc-1lcrp84-2 chscia">₹<!-- -->500</div></div><div class="sc-1lcrp84-0 lmgPIu"><div class="sc-1lcrp84-1 laAHZf">Category Returns</div><div class="sc-1lcrp84-2 chscia"><div class="sc-1c3hrvg-0 beOkvm"><div class="sc-1c3hrvg-2 dMIbNh">11.04<!-- -->%</div><div class="sc-1c3hrvg-1 bApXPb"><div height="4" class="sc-1842aaf-0 gfKfTU"><div color="#ee9c16" height="4" class="sc-1842aaf-1 dFYhPr"></div></div></div><div class="sc-1c3hrvg-2 dMIbNh">36.20<!-- -->%</div></div></div></div><div class="sc-1lcrp84-0 iUvrOZ"><div class="sc-1lcrp84-1 laAHZf">3Y Returns</div><div class="sc-1lcrp84-2 chscia"><div class="f20xgu-0 fmnxCz">26.82</div></div></div></div></div></div></div></a><a rel="" href="/mutual-funds/scheme/idfc-tax-advantage-elss-direct-plan-growth/inf194k01y29" target="" class="sc-1fcsi9p-0 eSNNDp"><div class="o8s76u-0 jkbxNx"><div class="sc-19wjejv-0 jKhZkL"><div class="tia75m-0 clYYYV"><div class="tia75m-1 ipSstT"><div class="btbnvd-0 ijFqeX"><img alt="Bandhan ELSS Tax Saver Fund Direct Plan-Growth" src="https://static.paytmmoney.com/amc-logo/IDFMF.png" class="btbnvd-1 bkIdUB"/><div class="btbnvd-2 fZMomi"><div class="btbnvd-3 ixkIui">Bandhan ELSS Tax Saver Fund Direct Plan-Growth</div><div class="btbnvd-4 dPwWhT"><div class="a4ohic-0 buOaUA"><div class="sc-12yzxcu-0 tgMvy"><span class="sc-12yzxcu-1 ZlMJB">Tax Saver</span><span class="sc-12yzxcu-1 ZlMJB">ELSS</span></div></div></div></div></div><div class="tia75m-2 kACuKu"><div class="sc-1ep2vaf-0 sc-1ep2vaf-4 gafrXv"></div></div></div></div><div class="sc-19wjejv-2 QFVYw"><div class="sc-19wjejv-1 fUMzbf"><div class="sc-1lcrp84-0 iUvrOZ"><div class="sc-1lcrp84-1 laAHZf">Min. Investment</div><div class="sc-1lcrp84-2 chscia">₹<!-- -->500</div></div><div class="sc-1lcrp84-0 lmgPIu"><div class="sc-1lcrp84-1 laAHZf">Category Returns</div><div class="sc-1lcrp84-2 chscia"><div class="sc-1c3hrvg-0 beOkvm"><div class="sc-1c3hrvg-2 dMIbNh">11.04<!-- -->%</div><div class="sc-1c3hrvg-1 bApXPb"><div height="4" class="sc-1842aaf-0 gfKfTU"><div color="#ee9c16" height="4" class="sc-1842aaf-1 bGHJUg"></div></div></div><div class="sc-1c3hrvg-2 dMIbNh">36.20<!-- -->%</div></div></div></div><div class="sc-1lcrp84-0 iUvrOZ"><div class="sc-1lcrp84-1 laAHZf">3Y Returns</div><div class="sc-1lcrp84-2 chscia"><div class="f20xgu-0 fmnxCz">26.43</div></div></div></div></div></div></div></a></div><div class="sc-1jtkjb3-0 jGVIr"><h3 class="sc-1jtkjb3-1 hOLecX">About <!-- -->Axis ELSS Tax Saver Direct Plan-Growth</h3><div class="sc-1jtkjb3-2 GFkJi">Axis ELSS Tax Saver Direct Plan-Growth<!-- --> is a <a rel="" href="/mutual-funds/elss-funds" target="" class="sc-1fcsi9p-0 eSNNDp">Tax Saver</a> mutual fund scheme from <a rel="" href="/mutual-funds/amc/axis-mutual-fund" target="" class="sc-1fcsi9p-0 eSNNDp">Axis Mutual Fund</a>. This scheme was launched on <!-- -->Invalid date<!-- --> and is currently managed by its fund managers <a rel="" href="/mutual-funds/fund-manager/shreyash-devalkar/74" target="" class="sc-1fcsi9p-0 eSNNDp">Shreyash Devalkar</a> and <a rel="" href="/mutual-funds/fund-manager/ashish-naik/98" target="" class="sc-1fcsi9p-0 eSNNDp">Ashish Naik</a>. It has an AUM of ₹<!-- -->31,135.83<!-- --> Crores and the latest NAV decalared is ₹<!-- -->88.078<!-- --> as on <!-- -->03 Feb 2024<!-- --> at <!-- -->7:20 am<!-- -->.</div><div class="sc-1jtkjb3-2 GFkJi">Axis ELSS Tax Saver Direct Plan-Growth scheme return performance in last 1 year is 27.64%, in last 3 years is 38.29% and 482.53% since scheme launch. The min. SIP amount to invest in this scheme is ₹500.</div></div><div class="tb1oib-0 huBMrl"><h3 class="sc-1gjpkzk-3 fNYFML">Scheme Details</h3><div class="tb1oib-2 eJXWRw"><table class="sc-1gjpkzk-0 jsjEV"><tbody><tr><td class="sc-1gjpkzk-1 sc-1gjpkzk-2 jBEMEX">AUM:</td><td class="sc-1gjpkzk-1 jXryLh">₹<!-- -->31,135.83 Cr</td></tr><tr><td class="sc-1gjpkzk-1 sc-1gjpkzk-2 jBEMEX">Category:</td><td class="sc-1gjpkzk-1 jXryLh">Equity: ELSS</td></tr><tr><td class="sc-1gjpkzk-1 sc-1gjpkzk-2 jBEMEX">Launch Date:</td><td class="sc-1gjpkzk-1 jXryLh">Invalid date</td></tr><tr><td class="sc-1gjpkzk-1 sc-1gjpkzk-2 jBEMEX">Fund Type:</td><td class="sc-1gjpkzk-1 jXryLh">Open-End</td></tr></tbody></table></div></div><div class="tb1oib-0 huBMrl"><h3 class="tb1oib-1 hLbMgx">About Fund Category</h3><div class="tb1oib-2 eJXWRw">Having a statutory lock-in period of 3 years, ELSS Funds enable long term wealth accumulation along with the benefit of tax saving. Investing in ELSS Funds makes you eligible to claim a tax deduction of up to Rs 1.5 lakh under Section 80C of the Income Tax Act 1961.</div></div></div></div><div class="pg0np9-0 sc-6fhb5m-0 eCLuAy"><div class="sc-6fhb5m-1 jbzfVD"><h2 class="sc-126kcut-1 fpYqzF">AMC Information</h2><div class="sc-6fhb5m-2 bgzAKi"><a rel="" href="/mutual-funds/amc/axis-mutual-fund" target="" class="sc-1fcsi9p-0 eSNNDp"><div class="btbnvd-0 ijFqeX"><img alt="Axis Mutual Fund" src="https://static.paytmmoney.com/amc-logo/AXSMF.png" class="btbnvd-1 btbnvd-5 czjipf"/><div class="btbnvd-2 fZMomi"><div class="btbnvd-3 ixkIui">Axis Mutual Fund</div><div class="btbnvd-4 dPwWhT"><span class="sc-6fhb5m-4 jBNjsO">View AMC Details</span></div></div></div></a><div class="sc-6fhb5m-3 dVKOIs"><div class="sc-1lcrp84-0 iUvrOZ"><div class="sc-1lcrp84-2 efJSrQ">₹<!-- -->2,63,039.84 Cr</div><div class="sc-1lcrp84-1 laAHZf">AUM</div></div><div class="sc-1lcrp84-0 iUvrOZ"><div class="sc-1lcrp84-2 efJSrQ">211</div><div class="sc-1lcrp84-1 laAHZf">Schemes</div></div></div></div><div class="c27kjm-0 euYXNv"><div class="c27kjm-1 blIfsT"></div><div class="c27kjm-2 dkpJLI"><div class="c27kjm-3 joUFiB"><div class="c27kjm-4 dvFVvS"><img src="/static/images/amc/address-icon.svg" alt="Address" class="c27kjm-5 dyhiVf"/><div class="c27kjm-6 dAPDrH">Address</div></div><div class="c27kjm-7 jocnDl"><div>&quot;Axis House&quot; - 1st Floor,C-2 - Wadia International Centre,Pandurang Budhkar Marg , Worli,400025</div></div></div><div class="c27kjm-8 gEwmfo"><div class="c27kjm-3 joUFiB"><div class="c27kjm-4 dvFVvS"><img src="/static/images/amc/phone-icon.svg" alt="Phone Number" class="c27kjm-5 dyhiVf"/><div class="c27kjm-6 dAPDrH">Phone Number</div></div><div class="c27kjm-7 jocnDl"><div>Phone : <!-- -->022-24255161</div><div>Fax : <!-- -->022-43255199</div></div></div><div class="c27kjm-3 joUFiB"><div class="c27kjm-4 dvFVvS"><img src="/static/images/amc/mail-icon.svg" alt="Email / Website" class="c27kjm-5 dyhiVf"/><div class="c27kjm-6 dAPDrH">Email / Website</div></div><div class="c27kjm-7 jocnDl"><a href="http://www.axismf.com" target="_blank" rel="noreferrer noopener">http://www.axismf.com</a></div></div></div></div></div></div></div></div><div class="sc-1tp71gf-0 ijgJpn"><div class="modal_content sc-1tp71gf-1 cjEcpf"><div class="sc-1aizk13-0 cHMbcZ"><div class="sc-1aizk13-1 jYlopV"><img alt="Close modal" src="/static/images/common/close-menu.svg" class="sc-1aizk13-2 fVykMl"/></div><div class="sc-1aizk13-3 knlNzp"><div class="sc-1aizk13-4 ixaYaD"><div class="sc-1aizk13-5 hpkZtl">Start investing in minutes</div><div class="sc-1aizk13-6 clYJIg">Download app to Explore</div><div class="sc-1aizk13-11 jbGsoJ"><img alt="QR code" src="/static/images/common/appdownload_qr_code.png"/><div class="sc-1aizk13-7 BMfEW"><span>Scan this QR code </span>to download the app now!</div></div><div class="sc-1aizk13-8 dyHovh">Or download from</div><div class="sc-1aizk13-9 cJNCQY"><div class="sc-1erzbfo-0 fVvues"><div class="sc-1erzbfo-1 dYMZSz"></div></div></div></div><img alt="Block Investment" src="/static/images/common/blockMFpurchase.webp" class="sc-1aizk13-10 lcabGr"/></div></div></div></div></div></div><footer class="sc-1isfu94-0 ddBpXw"><div class="sc-1isfu94-1 gwwRpJ"></div><div class="pg0np9-0 gFguug"><div class="sc-1isfu94-2 dElAgC"><div class="sc-1isfu94-3 gvHMjn"><div class="sc-1isfu94-4 hHvOwT"><a href="/">Home</a></div><div class="sc-1isfu94-4 hHvOwT"><a rel="" href="/mutual-funds/benefits" target="" class="sc-1fcsi9p-0 eSNNDp">Benefits</a></div><div class="sc-1isfu94-4 hHvOwT"><a href="/about-us">About Us<!-- --> </a></div></div><div class="sc-1isfu94-3 gvHMjn"><div class="sc-1isfu94-4 hHvOwT"><a rel="" href="/mutual-funds/pricing" target="" class="sc-1fcsi9p-0 eSNNDp">Pricing</a></div><div class="sc-1isfu94-4 hHvOwT"><a rel="noreferrer noopener" target="_blank" href="https://www.paytmmoney.com/blog/?utm_source=Social&amp;utm_medium=Blog&amp;utm_campaign=Launch">Blog</a></div><div class="sc-1isfu94-4 hHvOwT"><a href="/care">Customer Support</a></div></div><div class="sc-1isfu94-3 gvHMjn"><div class="sc-1isfu94-4 hHvOwT"><a href="/contact-us">Contact Us</a></div><div class="sc-1isfu94-4 hHvOwT"><a href="/security">Safety and Security</a></div><div class="sc-1isfu94-4 hHvOwT"><a href="https://static.paytmmoney.com/static/docs/investor_grievances_escalation_matrix.pdf">Investor Grievances escalation matrix</a></div></div><div class="sc-1isfu94-3 gvHMjn"><div class="sc-1isfu94-4 hHvOwT"><a href="/policies/terms">Terms and Conditions</a></div><div class="sc-1isfu94-4 hHvOwT"><a href="/policies/privacy">Privacy Policy</a></div><div class="sc-1isfu94-4 hHvOwT"><a href="/policies/disclaimer">Disclaimers</a></div><div class="sc-1isfu94-4 hHvOwT"><a target="_blank" href="https://static.paytmmoney.com/static/docs/reporting_cyber_incidents.pdf">Reporting Cyber Incidents</a></div><div class="sc-1isfu94-4 hHvOwT"><a target="_blank" href="https://static.paytmmoney.com/static/docs/Details_of_Paytm_Money_Client_bank_accounts.pdf">Details of Up Streaming Client Nodal Bank Accounts (USCNBA)</a></div></div></div></div><div class="sc-1isfu94-5 jmooU"><div class="sc-1isfu94-16 gKumxd"><span class="sc-1isfu94-17 kNEyYV">Download App</span><div class="sc-1isfu94-18 iVsPvf"><div class="sc-1erzbfo-0 fVvues"><div class="sc-1erzbfo-1 dYMZSz"></div></div></div></div><div class="sc-1isfu94-20 guWAys"><div class="sc-1isfu94-6 kOBPJy"><div class="sc-1isfu94-7 hgksUW"><a href="/about-us">About Us</a></div><div class="sc-1isfu94-7 hgksUW"><a href="/mutual-funds/pricing">Pricing</a></div><div class="sc-1isfu94-7 hgksUW"><a href="/mutual-funds/benefits">Benefits</a></div><div class="sc-1isfu94-7 hgksUW"><a rel="noreferrer noopener" target="_blank" href="https://www.paytmmoney.com/blog/?utm_source=Social&amp;utm_medium=Blog&amp;utm_campaign=Launch">Blog</a></div></div><div class="sc-1isfu94-6 kOBPJy"><div class="sc-1isfu94-7 hgksUW"><a href="/care">Customer Support</a></div><div class="sc-1isfu94-7 hgksUW"><a href="/contact-us">Contact Us</a></div></div><div class="sc-1isfu94-6 kOBPJy"><div class="sc-1isfu94-7 hgksUW"><a href="/policies/grievance">Grievance Redressal</a></div><div class="sc-1isfu94-7 hgksUW"><a href="/security">Safety and Security</a></div></div><div class="sc-1isfu94-6 kOBPJy"><div class="sc-1isfu94-7 hgksUW"><a href="/policies/terms">Terms and Conditions</a></div><div class="sc-1isfu94-7 hgksUW"><a href="/policies/privacy">Privacy Policy</a></div></div><div class="sc-1isfu94-6 kOBPJy"><div class="sc-1isfu94-7 hgksUW"><a href="/policies/disclaimer">Disclaimers</a></div></div><div class="sc-1isfu94-6 kOBPJy"><div class="sc-1isfu94-7 hgksUW"><a target="_blank" href="https://static.paytmmoney.com/static/docs/Details_of_Paytm_Money_Client_bank_accounts.pdf">Details of Up Streaming Client Nodal Bank Accounts (USCNBA)</a></div></div></div></div><div class="sc-1isfu94-19 yddCW"><div class="pg0np9-0 sc-1isfu94-21 kqLMfR"><div class="sc-1isfu94-22 gthfqu"><span class="sc-1isfu94-24 cHQZvL">Top Mutual Fund Companies:</span><span><a rel="" href="/mutual-funds/amc/sbi-mutual-fund" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">SBI Mutual Fund<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a></span><span><a rel="" href="/mutual-funds/amc/hdfc-mutual-fund" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">HDFC Mutual Fund<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a></span><span><a rel="" href="/mutual-funds/amc/nippon-india-mutual-fund" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">Nippon India Mutual Fund<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a></span><span><a rel="" href="/mutual-funds/amc/lnt-mutual-fund" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">L&amp;T Mutual Fund<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a></span><span><a rel="" href="/mutual-funds/amc/axis-mutual-fund" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">Axis Mutual Fund<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a></span><span><a rel="" href="/mutual-funds/amc/uti-mutual-fund" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">UTI Mutual Fund<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a></span><span><a rel="" href="/mutual-funds/amc/icici-prudential-mutual-fund" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">ICICI Prudential Mutual Fund<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a></span><span><a rel="" href="/mutual-funds/amc/idfc-mutual-fund" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">IDFC Mutual Fund<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a></span><span><a rel="" href="/mutual-funds/amc/tata-mutual-fund" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">Tata Mutual Fund</span></a></span></div><div class="sc-1isfu94-22 gthfqu"><span class="sc-1isfu94-24 cHQZvL">Popular Portfolios:</span><a rel="" href="/mutual-funds/equity-funds" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">Equity Mutual Funds<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a><a rel="" href="/mutual-funds/balanced-funds" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">Balanced Mutual Funds<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a><a rel="" href="/mutual-funds/debt-funds" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">Debt Mutual Funds<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a><a rel="" href="/mutual-funds/elss-funds" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">Tax Saver ELSS Mutual Funds<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a><a rel="" href="/mutual-funds/top-rated-funds" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">Top Rated Mutual Funds<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a><a rel="" href="/mutual-funds/best-return-funds" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">Mutual Funds with Best Returns</span></a></div><div class="sc-1isfu94-22 gthfqu"><span class="sc-1isfu94-24 cHQZvL">Investment Ideas:</span><a rel="" href="/mutual-funds/direct-vs-regular-plans" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">Direct Vs Regular Mutual Funds<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a><a rel="" href="/nps-national-pension-scheme" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">NPS Investment</span></a></div><div class="sc-1isfu94-22 gthfqu"><span class="sc-1isfu94-24 cHQZvL">Top Searched Funds:</span><a rel="" href="/mutual-funds/scheme/axis-long-term-equity-direct-plan-growth/inf846k01ew2" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">Axis Long Term Equity Fund<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a><a rel="" href="/mutual-funds/scheme/sbi-bluechip-direct-plan-growth/inf200k01qx4" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">SBI Bluechip Fund<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a><a rel="" href="/mutual-funds/scheme/mirae-asset-emerging-bluechip-fund-direct-growth/inf769k01bi1" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">Mirae Asset Emerging Bluechip Fund<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a><a rel="" href="/mutual-funds/scheme/nippon-india-small-cap-fund-direct-growth/inf204k01k15" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">Nippon India Small Cap Fund<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a><a rel="" href="/mutual-funds/scheme/hdfc-balanced-advantage-fund-direct-plan-growth/inf179k01wa6" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">HDFC Balanced Fund<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a><a rel="" href="/mutual-funds/scheme/kotak-standard-multicap-fund-direct-growth/inf174k01ls2" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">Kotak Standard Multicap Fund<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a><a rel="" href="/mutual-funds/scheme/lnt-emerging-businesses-fund-direct-growth/inf917k01qa1" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">L&amp;T Emerging Business Fund<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a><a rel="" href="/mutual-funds/scheme/lnt-india-value-fund-direct-growth/inf917k01hd4" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">L&amp;T India Value Fund<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a><a rel="" href="/mutual-funds/scheme/franklin-india-smaller-companies-direct-fund-growth/inf090i01iq4" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">Franklin India Smaller Companies Fund<span class="sc-1isfu94-25 ftkwVg"> | </span></span></a><a rel="" href="/mutual-funds/scheme/hdfc-mid-cap-opportunities-direct-plan-growth/inf179k01xq0" target="" class="sc-1fcsi9p-0 eSNNDp"><span class="sc-1isfu94-23 exwluv">HDFC Midcap Opportunities Fund	</span></a></div></div></div><div class="sc-1isfu94-8 eQDXaE"><div class="pg0np9-0 gFguug"><div class="sc-1isfu94-9 ftaQwo"><div class="sc-1isfu94-10 jaJgIC"><img alt="Paytm Money logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDMiIGhlaWdodD0iMTE3IiB2aWV3Qm94PSIwIDAgMzAzIDExNyI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0xNTIuMTY1IDIwLjA4aC00LjQzdjguNjk4aDQuNDNjLjQzOS4wMDIuODYtLjE3NCAxLjE2OC0uNDg4LjMwOS0uMzEzLjQ3OS0uNzM4LjQ3Mi0xLjE3OXYtNS4zNjlhMS42NTEgMS42NTEgMCAwIDAtLjQ3NS0xLjE3NCAxLjYzNiAxLjYzNiAwIDAgMC0xLjE2NS0uNDg4eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMEJERjIiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTI5My44NSAxNi41NjRhMTAuNDQ4IDEwLjQ0OCAwIDAgMC05Ljg1LTcuMDNoLS4wOTVhMTAuMzgzIDEwLjM4MyAwIDAgMC03LjUzIDMuMjI5IDEwLjM4MyAxMC4zODMgMCAwIDAtNy41MzUtMy4yM2gtLjA5NWMtMi40OTktLjAwMy00LjkxNS45LTYuODA1IDIuNTQydi0uNzk5YTEuNTQ4IDEuNTQ4IDAgMCAwLTEuNTM1LTEuNDM2aC03Yy0uODUzIDAtMS41NDUuNjk0LTEuNTQ1IDEuNTUyVjQ5LjVjMCAuODU4LjY5IDEuNTU0IDEuNTQ1IDEuNTU3aDdhMS41NDcgMS41NDcgMCAwIDAgMS41MjUtMS4zNDZ2LTI3LjM1YTIuNDg3IDIuNDg3IDAgMCAxIDAtLjI3NyAyLjU1IDIuNTUgMCAwIDEgMi40MS0yLjM1aDEuMjg1Yy41NDYuMDM0IDEuMDcuMjMzIDEuNS41NzIuNjE0LjUwMS45NjMgMS4yNi45NDUgMi4wNTRsLjAzIDI3LjIyYzAgLjg1OC42OTIgMS41NTIgMS41NDUgMS41NTJoN2ExLjU0MyAxLjU0MyAwIDAgMCAxLjUzNS0xLjQ3NlYyMi4zMjVhMi41NyAyLjU3IDAgMCAxIDEuMTQtMi4xOTUgMi43OTIgMi43OTIgMCAwIDEgMS4yOC0uNDMyaDEuMjlhMi41NjIgMi41NjIgMCAwIDEgMi40MiAyLjYyN2wuMDMgMjcuMTg1YzAgLjQxMi4xNjMuODA3LjQ1MyAxLjA5OC4yOS4yOS42ODIuNDU0IDEuMDkyLjQ1NGg3YTEuNTUzIDEuNTUzIDAgMCAwIDEuNTQ1LTEuNTUyVjIwLjI3YTkuODQzIDkuODQzIDAgMCAwLS41OC0zLjcwNnpNMjQ2LjU1NSA5Ljk0aC00VjMuNDM2YTEuNDIgMS40MiAwIDAgMC0uNDA0LTEuMDEyQTEuNDA3IDEuNDA3IDAgMCAwIDI0MS4xNSAyYTEuNTI4IDEuNTI4IDAgMCAwLS4yNjUuMDNjLTQuNDMgMS4yMi0zLjU0IDcuMzgzLTExLjYzIDcuOTFoLS43ODVhMS41NDUgMS41NDUgMCAwIDAtMS41NDUgMS41NDd2Ny4wMzFjLS4wMDEuNDEzLjE2LjgwOS40NSAxLjEuMjkuMjkzLjY4NC40NTcgMS4wOTUuNDU3aDQuMjE1djI5LjczN2MwIC44NDYuNjgyIDEuNTM0IDEuNTI1IDEuNTM2aDYuOTFjLjgzMy0uMDE2IDEuNS0uNyAxLjUtMS41MzZWMjAuMDhoMy45MWMuNDEgMCAuODA0LS4xNjQgMS4wOTQtLjQ1Ni4yOS0uMjkyLjQ1Mi0uNjg4LjQ1MS0xLjF2LTcuMDMyYzAtLjg0Ny0uNjc2LTEuNTM4LTEuNTItMS41NTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzIwMzQ2OCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMjIxLjQyIDkuOTRoLTdjLS40MSAwLS44MDIuMTY0LTEuMDkuNDU1YTEuNTUgMS41NSAwIDAgMC0uNDUgMS4wOTd2MTQuNTFhMS42MzkgMS42MzkgMCAwIDEtMS42MiAxLjYxMWgtMi45M2ExLjYzOSAxLjYzOSAwIDAgMS0xLjYzNS0xLjY0MmwtLjAzLTE0LjQ4NGMwLS44NTctLjY5Mi0xLjU1Mi0xLjU0NS0xLjU1MmgtN2MtLjQxIDAtLjgwMy4xNjQtMS4wOTIuNDU1LS4yOS4yOS0uNDUzLjY4NS0uNDUzIDEuMDk3djE1LjkwNWMwIDYuMDI3IDQuMjkgMTAuMzQ2IDEwLjMwNSAxMC4zNDZoNC42NTVhMS42MzUgMS42MzUgMCAwIDEgMS40MjkgMS42MjVjMCAuODI2LS42MTMgMS41MjItMS40MjkgMS42MjVoLS4xMmwtMTAuMjE1LjAzNWMtLjg1MyAwLTEuNTQ1LjY5NC0xLjU0NSAxLjU1MnY3LjAzYzAgLjg1OC42OTIgMS41NTMgMS41NDUgMS41NTNoMTEuNDJjNiAwIDEwLjMwNS00LjMwNSAxMC4zMDUtMTAuMzQ2di0yOS4zMmMwLS44NDItLjY2Ny0xLjUzLTEuNTA1LTEuNTUyek0xNTQuNDE1IDkuOTRoLTE1LjI3Yy0uMzk4IDAtLjc4LjE1OS0xLjA2LjQ0MWExLjUxIDEuNTEgMCAwIDAtLjQ0IDEuMDY2djM4LjEzOWMtLjAyOC44MTkuNiAxLjUxIDEuNDE1IDEuNTU2aDcuMTE1Yy44NTMgMCAxLjU0NS0uNjk0IDEuNTQ1LTEuNTUxbC4wMy0xMC42NjhoNi42OGM1LjU5NSAwIDkuNS0zLjg5MiA5LjUtOS41NDJ2LTkuODk0Yy0uMDItNS42NC0zLjkzLTkuNTQ3LTkuNTE1LTkuNTQ3em0tLjYxIDEyLjg1N3Y0LjMxNGMwIC40MzctLjE3My44NTUtLjQ4IDEuMTYzLS4zMDguMzA4LS43MjYuNDgtMS4xNi40OGgtNC40M1YyMC4wOGg0LjQzYy45MDYgMCAxLjY0LjczOCAxLjY0IDEuNjQ3djEuMDd6TTE4MS42NzUgOS45OEgxNzJhMS40OTYgMS40OTYgMCAwIDAtMS4wNzkuNDA0IDEuNTEgMS41MSAwIDAgMC0uNDc2IDEuMDUzdjIuNzgyYS4xNzcuMTc3IDAgMCAxIDAgLjAzNXYzLjc1N2MuMDIyLjg4NC43NSAxLjU4NCAxLjYzIDEuNTY3aDkuMjNjLjc1NC4xIDEuMzM1LjcxOSAxLjM5IDEuNDgxdi45MDRhMS41NDkgMS41NDkgMCAwIDEtMS4zNSAxLjQ0MmgtNC41N2MtNi4wOCAwLTEwLjQxIDQuMDU4LTEwLjQxIDkuNzUzdjguMTQ2YzAgNS42NiAzLjcyIDkuNjg4IDkuNzYgOS42ODhoMTIuNjdhNC4wMDcgNC4wMDcgMCAwIDAgNC4xMTUtMy44NTdWMjAuNTE3YzAtNi40NjQtMy4zMTUtMTAuNTM3LTExLjIzNS0xMC41Mzd6bTEuMTE1IDI5LjI5djEuMDk1YTEuNTEzIDEuNTEzIDAgMCAxLS4wOTUuNDg3IDEuNjMgMS42MyAwIDAgMS0xLjU1NSAxLjA1NWgtMi45MDVhMS41ODYgMS41ODYgMCAwIDEtMS4xNC0uNDI5IDEuNiAxLjYgMCAwIDEtLjUwNS0xLjExM3YtNi4wMjdhMS41OTggMS41OTggMCAwIDEgMS42NDUtMS41MzdoMi45MDVhMS42MDMgMS42MDMgMCAwIDEgMS42NSAxLjU0N3Y0LjkyMnoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMjEzMzY4IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xNTYuNTI1IDEwMS40MDVMMTQzLjMzIDY2Ljc4N2gtLjIxYy4yNDcgMi43NDIuMzcgNi4wMDEuMzcgOS43Nzh2MjQuODQ1aC00LjE3NVY2Mi4zNDdoNi44MUwxNTguNDQgOTQuNTdoLjIxbDEyLjQyNS0zMi4yMjNoNi43NTV2MzkuMDU4aC00LjVWNzYuMjM4YzAtMi44ODIuMTIzLTYuMDE2LjM3LTkuNDAxaC0uMjFsLTEzLjMgMzQuNTY4aC0zLjY2NXpNMjExLjM2IDg2Ljc0YzAgNC43NzEtMS4xOTcgOC40OTgtMy41OSAxMS4xOC0yLjM5MyAyLjY4MS01LjcwMiA0LjAyLTkuOTI1IDQuMDE3YTEzLjEyIDEzLjEyIDAgMCAxLTYuOTQtMS44NDMgMTIuMTYxIDEyLjE2MSAwIDAgMS00LjY4LTUuMjkzIDE4LjQ4NyAxOC40ODcgMCAwIDEtMS42NS04LjA2NmMwLTQuNzc1IDEuMTg4LTguNDkzIDMuNTY1LTExLjE1NCAyLjM3Ny0yLjY2MiA1LjY3NS00LjAwMSA5Ljg5NS00LjAxOCA0LjA3NyAwIDcuMzE3IDEuMzYyIDkuNzIgNC4wODggMi40MDMgMi43MjUgMy42MDUgNi40MjIgMy42MDUgMTEuMDg5em0tMjIuMjEgMGMwIDMuNzQzLjc0NSA2LjU5IDIuMjM1IDguNTM4IDEuNDkgMS45NDggMy42OCAyLjkyOCA2LjU3IDIuOTM4IDIuODkgMCA1LjA4My0uOTc1IDYuNTgtMi45MjMgMS40OTctMS45NDkgMi4yNDctNC44MDMgMi4yNS04LjU2MyAwLTMuNzItLjc1LTYuNTQ3LTIuMjUtOC40ODMtMS41LTEuOTM1LTMuNzEyLTIuOS02LjYzNS0yLjg5Ny0yLjg5IDAtNS4wNzIuOTUyLTYuNTQ1IDIuODU3LTEuNDczIDEuOTA1LTIuMjA4IDQuNzUtMi4yMDUgOC41MzN6TTIzNy40MTUgMTAxLjQwNVY4Mi40NjZjMC0yLjM4NC0uNTQyLTQuMTY1LTEuNjI1LTUuMzQ0LTEuMDgzLTEuMTc4LTIuNzc3LTEuNzY2LTUuMDgtMS43NjItMy4wNSAwLTUuMjgzLjgyNy02LjcgMi40OC0xLjQxNyAxLjY1NS0yLjEyNyA0LjM5LTIuMTMgOC4yMDd2MTUuMzU4aC00LjQxNXYtMjkuMjhoMy41OWwuNzIgNC4wMThIMjIyYTkuMDYzIDkuMDYzIDAgMCAxIDMuODA1LTMuMzU1IDEyLjM2OSAxMi4zNjkgMCAwIDEgNS40NTUtMS4xODVjMy41MSAwIDYuMTUyLjg1IDcuOTI1IDIuNTUxIDEuNzczIDEuNzAxIDIuNjYgNC40MjEgMi42NiA4LjE2MVYxMDEuNGwtNC40My4wMDV6TTI2MS41OCAxMDEuOTQyYy00LjMxIDAtNy43MS0xLjMxNy0xMC4yLTMuOTUyLTIuNDktMi42MzUtMy43MzUtNi4yOTYtMy43MzUtMTAuOTg0IDAtNC43MiAxLjE1Ny04LjQ3IDMuNDctMTEuMjUgMi4zMTMtMi43NzkgNS40Mi00LjE2NiA5LjMyLTQuMTYzIDMuNjY3IDAgNi41NTggMS4yMDUgOC42NzUgMy42MTYgMi4xMTcgMi40MSAzLjE4IDUuNTkxIDMuMTkgOS41NDJ2Mi44MDhoLTIwLjA4Yy4wODcgMy40MzUuOTUgNi4wNDMgMi41OSA3LjgyNCAxLjY0IDEuNzgxIDMuOTUgMi42NzIgNi45MyAyLjY3MmEyMy40MTEgMjMuNDExIDAgMCAwIDkuMzEtMS45NzR2My45NTNhMjIuOTYzIDIyLjk2MyAwIDAgMS00LjQzIDEuNDU2Yy0xLjY2LjMyNC0zLjM0OS40NzUtNS4wNC40NTJ6bS0xLjE5NS0yNi42MThjLTIuMzMzIDAtNC4yLjc2Ny01LjYgMi4zLTEuNCAxLjUzNC0yLjIyIDMuNjUzLTIuNDYgNi4zNTloMTUuMjRjMC0yLjc5Ni0uNjItNC45MzktMS44Ni02LjQyOS0xLjI0LTEuNDktMy4wMTMtMi4yMzMtNS4zMi0yLjIzek0yNzMuNTY1IDcyLjEyNWg0LjczNWw2LjM4NSAxNi43YTYzLjQ4NCA2My40ODQgMCAwIDEgMi42MDUgOC4yNTZoLjIxYy4yMzctLjkxMS43Mi0yLjQ2NiAxLjQ1LTQuNjY2czMuMTM4LTguOTYzIDcuMjI1LTIwLjI5aDQuNzM1bC0xMi41MyAzMy4zMzNjLTEuMjQgMy4yOTQtMi42OSA1LjYzOC00LjM1IDcuMDNhOS4yMDkgOS4yMDkgMCAwIDEtNi4xMDUgMi4wNzUgMTcuNTI2IDE3LjUyNiAwIDAgMS00LS40NTd2LTMuNTVjMS4wNzcuMjIyIDIuMTc1LjMzIDMuMjc1LjMyIDMuMDMgMCA1LjE5Ny0xLjcxIDYuNS01LjEzMmwxLjYyLTQuMTY4LTExLjc1NS0yOS40NXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDBCREYyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yLjg4IDY4LjU3TDU5LjIzIDMuNzgzYTIuMDc2IDIuMDc2IDAgMCAxIDMuMjI1IDBsNTYuNzA1IDY1LjE5M2MxLjQ0IDEuNjUzLjQxNSA0LjQ4LTEuNjE1IDQuNDdMNC41IDczLjA0Yy0yLjA0NS0uMDEtMy4wNTUtMi44MjItMS42Mi00LjQ3eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyMjMzNjkiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIuNjMgOTMuNDc1TDU5LjMzNSAyOC4yN2ExLjk0MiAxLjk0MiAwIDAgMSAzIDBsNTcuMDggNjUuNjM2YzEuMzQ1IDEuNTQxLjM5IDQuMTgzLTEuNSA0LjE3OGwtMTEzLjc5LS40MjdjLTEuODktLjAxLTIuODM1LTIuNjQxLTEuNDk1LTQuMTgzeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTUyLjUgNTcuODM3Yy0uNTAzLjA0Mi0xLS4xNDItMS4zNTUtLjUwMmExLjc0MiAxLjc0MiAwIDAgMS0uNDM1LTEuMTYgMS42NDEgMS42NDEgMCAwIDEgLjQzNS0xLjEzYy4zNTgtLjM1Ny44NTItLjU0IDEuMzU1LS41MDNoMTdjLjQ2Ni0uMDQ5LjkzLjEwNiAxLjI3NC40MjUuMzQ0LjMyLjUzNC43NzMuNTIxIDEuMjQzLjAwNS40MTktLjE1LjgyMy0uNDM1IDEuMTNhMS43MyAxLjczIDAgMCAxLTEuMzYuNTAySDY3Yy0xLjA3IDAtMiAwLTIuNzEtLjA0NXMtMS4xOC0uMDY1LTEuMzM1LS4wOTZ2LjE4NmMuNzE2LjMyOCAxLjM1OC44IDEuODg1IDEuMzg2YTYuMTggNi4xOCAwIDAgMSAxLjM4NSAyLjQ0NmgzLjI2YTEuNjIgMS42MiAwIDAgMSAxLjI3Mi40MjNjLjM0NC4zMTkuNTM0Ljc3LjUyMyAxLjI0LjAwNC40Mi0uMTUyLjgyNi0uNDM1IDEuMTM1LS4zNi4zNTctLjg1Ni41NC0xLjM2LjUwMkg2Ni41YTguNTY1IDguNTY1IDAgMCAxLTEuMTUgMy42MyA4LjYyIDguNjIgMCAwIDEtMi4yMyAyLjQ3MiA5Ljk4NCA5Ljk4NCAwIDAgMS0yLjg5NSAxLjQ4MWMtMS4wMS4zMjgtMi4wNTMuNTQzLTMuMTEuNjQzTDY3LjUxIDgzLjI5Yy40NjQuNDMuNzMyIDEuMDMzLjc0IDEuNjY3YTIuMTIgMi4xMiAwIDAgMS0uNTUgMS40NzcgMS45OTUgMS45OTUgMCAwIDEtMS41LjYwMmMtLjM0IDAtLjY3Ny0uMDU0LTEtLjE2YTIuNjE0IDIuNjE0IDAgMCAxLTEtLjY3M0w1MS45NiA3NC4xNDRhMy4xNzIgMy4xNzIgMCAwIDEtLjczNS0uOTQ0IDIuMjgzIDIuMjgzIDAgMCAxLS4yMy0xLjAwNCAyLjAxNCAyLjAxNCAwIDAgMSAuNTUtMS40NTJjLjM3Mi0uMzg2Ljg5LS41OTYgMS40MjUtLjU3N2guNmMuOTUgMCAxLjg5Ni0uMDg2IDIuODMtLjI1N2E4LjIgOC4yIDAgMCAwIDIuNTMtLjg3MyA2LjUwNyA2LjUwNyAwIDAgMCAxLjkxLTEuNTk3IDUuMDM0IDUuMDM0IDAgMCAwIDEtMi40NTFINTIuNWExLjYxNSAxLjYxNSAwIDAgMS0xLjI3LS40MjQgMS42MyAxLjYzIDAgMCAxLS41Mi0xLjIzOWMtLjAwNS0uNDE5LjE1LS44MjMuNDM1LTEuMTNhMS43NSAxLjc1IDAgMCAxIDEuMzU1LS41MDJoOS4xMWMtLjgtMi41ODYtMy4xNC0zLjg3Ny03LjA0LTMuODc3bC0yLjA3LjAyeiIvPgogICAgPC9nPgo8L3N2Zz4K" height="40px" width="auto" class="sc-1isfu94-11 kNUMfL"/></div><div class="sc-1isfu94-12 dxnkUn"><div class="sc-1isfu94-26 czSfIZ"><div class="sc-1erzbfo-0 fVvues"><div class="sc-1erzbfo-1 dYMZSz"></div></div></div><a rel="noreferrer noopener" target="_blank" href="https://www.facebook.com/PaytmMoney/?utm_source=Social&amp;utm_medium=FB&amp;utm_campaign=Launch"><img alt="Facebook icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgaGVpZ2h0PSIzNSIgdmlld0JveD0iMCAwIDM1IDM1Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzRENkZBOSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTcuMjcgMUM4LjMgMSAxIDguMzUgMSAxNy4zODVjMCA5LjAzNCA3LjMgMTYuMzg0IDE2LjI3IDE2LjM4NCA4Ljk3MyAwIDE2LjI3Mi03LjM1IDE2LjI3Mi0xNi4zODRDMzMuNTQyIDguMzUgMjYuMjQyIDEgMTcuMjcgMXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjEuNDk3IDguNWgtMy4zMDVjLTMuMzEzLjAxMS0zLjc0NiAyLjM4Ny0zLjc0OCA0LjQ2M2EuMjY2LjI2NiAwIDAgMC0uMDA2LjA2djEuNDU3SDEyLjE3YS4yNTIuMjUyIDAgMCAwLS4yNDkuMjU1djMuNTk1YzAgLjE0LjExMi4yNTUuMjQ5LjI1NWgyLjI2OHY3Ljg4N2MwIC4xNDEuMTExLjI1NS4yNDguMjU1aDMuMzFhLjI1Mi4yNTIgMCAwIDAgLjI0OC0uMjU1di03Ljg4N2gzLjI1MmEuMjUyLjI1MiAwIDAgMCAuMjQ5LS4yNTV2LTMuNTk0YS4yNTIuMjUyIDAgMCAwLS4yNDktLjI1NmgtMy41di0xLjkzMmgzLjVhLjI1Mi4yNTIgMCAwIDAgLjI0OS0uMjU1VjguNzU1YS4yNTIuMjUyIDAgMCAwLS4yNDgtLjI1NXoiLz4KICAgIDwvZz4KPC9zdmc+Cg==" class="sc-1isfu94-13 fuEwnY"/></a><a rel="noreferrer noopener" target="_blank" href="https://twitter.com/paytmmoney?utm_source=Social&amp;utm_medium=Twitter&amp;utm_campaign=Launch"><img alt="Twitter icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgaGVpZ2h0PSIzNSIgdmlld0JveD0iMCAwIDM1IDM1Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzY1QkJGMiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTcuMjcgMUM4LjMgMSAxIDguMzUgMSAxNy4zODVjMCA5LjAzNCA3LjMgMTYuMzg0IDE2LjI3IDE2LjM4NCA4Ljk3MyAwIDE2LjI3Mi03LjM1IDE2LjI3Mi0xNi4zODRDMzMuNTQyIDguMzUgMjYuMjQyIDEgMTcuMjcgMXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjQuMjgzIDEyLjcyYTMuMiAzLjIgMCAwIDAgMS41MDQtMS44MjRzLS45MDQuNjcyLTIuMTM2Ljc1bC0uMDIyLjAxM2EzLjM5OSAzLjM5OSAwIDAgMC0yLjU0My0xLjE0OGMtMS45MDUgMC0zLjQ0OSAxLjU4NS0zLjQ0OSAzLjU0MSAwIC4yOTcuMDM2LjU4NS4xMDMuODZsLS4wMTYtLjAyNXMtMy42OTUuMjE3LTcuMTc4LTMuNjk1YzAgMC0xLjU0IDIuNjg3IDEuMDk3IDQuNzQyLS41NzguMDk5LTEuNTk3LS40MzUtMS41OTctLjQzNXMuMDU3IDIuODI1IDIuNzkgMy41MTdjLS40NDMuMTE4LTEuMjcuMTU3LTEuNTQuMDQgMCAwIC40MDQgMi4xNTIgMy4xOTUgMi41MjgtLjcxMi40MTUtMi4wNCAxLjY4LTUuMDQyIDEuNDQyIDAgMCAyLjE1NiAxLjgxNyA2LjE1OCAxLjU2IDQuMDAzLS4yNTYgNi45MDktMy4wMjIgOC4wODItNS45NDYgMS4xNzQtMi45MjMuODQ4LTQuNTg4Ljg0OC00LjU4OHMuOTgtLjUyOSAxLjY1NS0xLjc5M2MtLjMxMi4wOTYtMS40NjcuMzg2LTEuODk3LjQ5M2ExLjIxNCAxLjIxNCAwIDAgMS0uMDEyLS4wMzF6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=" class="sc-1isfu94-13 fuEwnY"/></a><a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/company/paytmmoney/?utm_source=Social&amp;utm_medium=LinkedIn&amp;utm_campaign=Launch"><img alt="Linkedin icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgaGVpZ2h0PSIzNSIgdmlld0JveD0iMCAwIDM1IDM1Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzI3OTZENyIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTcuMzE2IDEuMDM3Yy04Ljk3MiAwLTE2LjI3IDcuMzUtMTYuMjcgMTYuMzg1IDAgOS4wMzQgNy4yOTggMTYuMzg0IDE2LjI3IDE2LjM4NHMxNi4yNzEtNy4zNSAxNi4yNzEtMTYuMzg0YzAtOS4wMzUtNy4zLTE2LjM4NS0xNi4yNzEtMTYuMzg1eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMC43NTMgMTQuNjQ3aDMuNTg3djkuNjA4aC0zLjU4N3YtOS42MDh6bTEuNzU4LTEuNTMzYy0xLjAwMyAwLTEuODE2LS43NjEtMS44MTYtMS43cy44MTMtMS43IDEuODE2LTEuN2MxLjAwMiAwIDEuODE1Ljc2MSAxLjgxNSAxLjdzLS44MTMgMS43LTEuODE1IDEuN3ptMTAuODQ0IDEuMzE2Yy45OTMgMCAxLjc3LjMwMyAyLjMzLjkwOS41NjIuNjA2Ljg0MyAxLjU0My44NDMgMi44MXY2LjEwNmgtMy42MDV2LTUuMjgzYzAtLjYwNC0uMTA4LTEuMDMtLjMyNi0xLjI4LS4yMTctLjI1LS41MjMtLjM3Ni0uOTE2LS4zNzZhMS4yOSAxLjI5IDAgMCAwLTEuMDU4LjUwN2MtLjI3LjMzOC0uNDA1Ljk0My0uNDA1IDEuODE4djQuNjE0SDE2LjYzdi05LjYwOGgzLjM0djEuNTY1Yy41LS42NCAxLjAwNS0xLjA5NiAxLjUxNi0xLjM3LjUxMS0uMjc1IDEuMTM0LS40MTIgMS44NjgtLjQxMnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==" class="sc-1isfu94-13 fuEwnY"/></a><a rel="noreferrer noopener" target="_blank" href="https://www.paytmmoney.com/blog/?utm_source=Social&amp;utm_medium=Blog&amp;utm_campaign=Launch"><img alt="Medium icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgaGVpZ2h0PSIzNSIgdmlld0JveD0iMCAwIDM1IDM1Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3LjQ0MiAxLjg0MmMtOC42MDIgMC0xNS42IDcuMTQtMTUuNiAxNS45MTZzNi45OTggMTUuOTE2IDE1LjYgMTUuOTE2YzguNjAzIDAgMTUuNjAxLTcuMTQgMTUuNjAxLTE1LjkxNnMtNi45OTktMTUuOTE2LTE1LjYtMTUuOTE2eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMC4yNTMgMTMuNzMxYS42OTYuNjk2IDAgMCAwLS4yMjYtLjU4NmwtMS42NzctMi4wMnYtLjMwM2g1LjIwNGw0LjAyMiA4LjgyOCAzLjUzNi04LjgyOGg0Ljk2di4zMDJsLTEuNDMyIDEuMzc0YS40Mi40MiAwIDAgMC0uMTYuNDAzdjEwLjEwMWEuNDIuNDIgMCAwIDAgLjE2LjQwM2wxLjQgMS4zNzR2LjMwMkgxOXYtLjMwMmwxLjQ1LTEuNDA4Yy4xNDItLjE0Mi4xNDItLjE4NS4xNDItLjQwMnYtOC4xNjVsLTQuMDMxIDEwLjI0M2gtLjU0NGwtNC42OTQtMTAuMjQ0djYuODY2YS45NS45NSAwIDAgMCAuMjYuNzg3bDEuODg2IDIuMjg4di4zMDNIOC4xMjR2LS4zMDNsMS44ODUtMi4yODhhLjkxNC45MTQgMCAwIDAgLjI0NC0uNzg3VjEzLjczdi4wMDF6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=" class="sc-1isfu94-13 fuEwnY"/></a></div></div><div class="sc-1isfu94-14 bJmkhh"><div>© Paytm Money Limited. CIN - U72900DL2017PLC323936. All Rights Reserved.</div><div>Registered with Pension Fund Regulatory and Development Authority (PFRDA) as NPS ePOP (269042019).</div><div>SEBI Reg No. Broking - INZ000240532; Depository Participant - IN - DP - 416 - 2019 , Depository Participant Number: CDSL - 12088800, Trading and clearing member of NSE (90165,M52073) and BSE(6707).</div><div>Registered Office: 136, 1st Floor, Devika Tower, Nehru Place, Delhi - 110019, Tel No: 0120-4770-440<br/>Operations Head office: The Hub, 8/2, Sarjapur Main Road, Ambulipura Village, Varthur Hobli, Bengaluru - 560103</div><div>Investments in securities markets are subject to market risks, read all the related documents carefully before investing.</div><div class="sc-1isfu94-15 cNCZfV"></div></div></div></div></footer></div></div></div><div class="sc-18jzgeh-0 cqNvOT"><div><div class="sc-16as23r-2 biJoRK"><div class="sc-16as23r-0 iidhCO"></div><div class="sc-16as23r-3 jHeStj"><div class="sc-1ep2vaf-8 sc-16as23r-1 guUzqQ"></div></div></div></div></div></div><script>__NEXT_DATA__ = {"props":{"pageProps":{"metaTags":{"image":"https://static.paytmmoney.com/amc-logo/AXSMF.png","description":"Invest in Axis ELSS Tax Saver Direct Plan-Growth - Latest NAV ₹88.0783. Track scheme performance, AUM, historical returns, fund ratings, minimum SIP amount, fund manager etc.","video":"https://paytmmoney.akamaized.net/axis/Axis_Long_Term_Equity_Fund_-_Get_a_dual_benefit_of_building_wealth_saving_tax/Axis_Long_Term_Equity_Fund_-_Get_a_dual_benefit_of_building_wealth_saving_tax.m3u8","url":"/mutual-funds/scheme/axis-long-term-equity-direct-plan-growth/inf846k01ew2","title":"Axis ELSS Tax Saver Direct Plan-Growth - Latest NAV, Returns, Performance 2024","ogTitle":"Axis ELSS Tax Saver Direct Plan-Growth","twitterTitle":"Axis ELSS Tax Saver Direct Plan-Growth","keywords":"Axis ELSS Tax Saver Direct Plan-Growth NAV, Axis ELSS Tax Saver Direct Plan-Growth performance, Axis ELSS Tax Saver Direct Plan-Growth returns, Axis ELSS Tax Saver Direct Plan-Growth AUM, Axis ELSS Tax Saver Direct Plan-Growth return calculator, Axis ELSS Tax Saver Direct Plan-Growth sip return calculator","ldJsons":[{"@context":"https://schema.org/","@type":"Product","name":"Axis ELSS Tax Saver Direct Plan-Growth","description":"Invest in Axis ELSS Tax Saver Direct Plan-Growth - Latest NAV ₹88.0783. Track scheme performance, AUM, historical returns, fund ratings, minimum SIP amount, fund manager etc.","image":["https://static.paytmmoney.com/amc-logo/AXSMF.png"],"brand":{"@type":"Organization","name":"Axis Mutual Fund"},"review":{"@type":"Review","reviewRating":{"@type":"Rating","ratingValue":1,"bestRating":5},"author":{"@type":"Organization","name":"Value Research"}}}]},"initialMfData":{"amcDetails":{"name":"Axis Mutual Fund","amcCode":"AXSMF","image":"https://static.paytmmoney.com/amc-logo/AXSMF.png","amcId":38,"canonicalUrl":"axis-mutual-fund","activeFundsAumSum":263039.8436,"telephone":"022-24255161","fax":"022-43255199","website":"http://www.axismf.com","email":"","activeFundsCount":211,"address":"\"Axis House\" - 1st Floor,C-2 - Wadia International Centre,Pandurang Budhkar Marg , Worli,400025"},"sections":[{"name":"Sectors","list":[{"value":7868.0232302,"name":"Financial","percentage":25.27},{"value":4829.1666126,"name":"Services","percentage":15.51},{"value":3315.965469,"name":"Technology","percentage":10.65},{"value":2967.2442177999997,"name":"Automobile","percentage":9.53},{"value":2817.7922530000005,"name":"Healthcare","percentage":9.05},{"value":9337.634217399996,"name":"Others","percentage":29.99}],"count":14},{"name":"Companies","list":[{"value":25646795250,"name":"Bajaj Finance Ltd.","percentage":7.48},{"value":23916905240,"name":"Tata Consultancy Services Ltd.","percentage":6.97},{"value":23267108090,"name":"Avenue Supermarts Ltd.","percentage":6.78},{"value":19864042960,"name":"Nestle India Ltd.","percentage":5.79},{"value":18996206740,"name":"Torrent Power Ltd.","percentage":5.54},{"value":231340447493.95575,"name":"Others","percentage":67.44}],"count":46}],"information":{"name":"Axis ELSS Tax Saver Direct Plan-Growth","image":"https://static.paytmmoney.com/amc-logo/AXSMF.png","fundType":"Open-End","fundObjective":"","plan":"Growth","category":"Equity: ELSS","assetSize":31135.826,"sidUrl":"http://www.axismf.com","exitLoadClause":"No charges on withdrawal","expenseRatioPercentage":0.79,"cashHoldingPercentage":0.18,"benchmark":"NIFTY 500 Total Return Index","recordTimestamp":1698710400000,"pageDescription":"","minimumInvestment":500,"canonicalUrl":"axis-long-term-equity-direct-plan-growth","isin":"INF846K01EW2"},"managers":[{"canonicalUrl":"shreyash-devalkar","id":74,"name":"Shreyash Devalkar","designation":"Fund Manager","photoUrl":"https://static.paytmmoney.com/fundmanager/fbe6dedb-8183-4535-97a6-2afb569d769b/74_Shreyash_Devalkar.jpg"},{"canonicalUrl":"ashish-naik","id":98,"name":"Ashish Naik","designation":"Fund Manager","photoUrl":"https://static.paytmmoney.com/fundmanager/4987ae7f-be00-4e4a-a344-e19ece064b98/98_Ashish_Naik.jpg"}],"buckets":{"1m":1,"3m":3,"6m":6,"1y":12,"2y":24,"3y":36,"5y":60,"10y":120,"max":134},"returns":{"3m":null,"6m":null,"1y":27.637,"3y":11.413,"5y":14.763,"10y":17.815},"absoluteReturns":{"3m":11.58,"6m":9.681,"1y":27.637,"3y":38.294,"5y":99.148,"10y":415.914},"performance":{"fixedDepositPercentage":6.75,"savingsBankAccountPercentage":3.5,"higherReturnsPercentage":1,"defaultInvestmentValue":100000,"returnsPercentage":{"1m":{"direct":-1.196,"regular":-1.259},"3m":{"direct":11.58,"regular":11.369},"1y":{"direct":27.637,"regular":26.676},"3y":{"direct":38.294,"regular":34.96},"5y":{"direct":99.148,"regular":91.078},"max":{"direct":482.533,"regular":421.387}},"defaultSelectedBucket":"3y"},"ratings":[{"provider":"Value Research","rating":1}],"risk":"VERY_HIGH","assetSize":31135.826,"launchDate":null,"assetDate":1698710400000,"navChart":{"absoluteDayReturn":0.5508999999999986,"absoluteDayReturnPercentage":0.6294029069754141,"navVal":88.0783,"formattedNavRecordTimeStamp":"02 Feb 2024, 11:32 PM","lockInPeriodDays":null,"bucketedCagrReturns":[{"name":"1m","schemeReturns":-1.196},{"name":"3m","schemeReturns":11.58},{"name":"1y","schemeReturns":27.637},{"name":"3y","schemeReturns":11.413},{"name":"5y","schemeReturns":14.763},{"name":"max","schemeReturns":17.226}]},"tags":[{"displayName":"Tax Saver","key":"primary_category_id","value":["4"],"enabled":true},{"displayName":"ELSS","key":"category_id","value":["39"],"enabled":true}],"topPerformingCategoryFunds":[{"name":"1m","selected":false,"schemeReturns":-1.196,"funds":[{"amcImage":"https://static.paytmmoney.com/amc-logo/SBIMF.png","canonicalUrl":"sbi-magnum-taxgain-direct-plan-growth","categoryDisplayName":"ELSS","riskType":{"name":"High","colorId":5},"userRating":null,"aum":15773.93,"isin":"INF200K01UM9","fundName":"SBI Long Term Equity Fund Direct Plan-Growth","minimumInvestment":500,"returns":5.345135875,"categoryReturnsRange":{"min":-1.6195345641,"max":5.345135875}},{"amcImage":"https://static.paytmmoney.com/amc-logo/ESCMF.png","canonicalUrl":"quant-tax-plan-direct-growth","categoryDisplayName":"ELSS","riskType":{"name":"High","colorId":5},"userRating":null,"aum":4956.5346,"isin":"INF966L01986","fundName":"Quant ELSS Tax Saver Fund Direct-Growth","minimumInvestment":500,"returns":5.3404193956,"categoryReturnsRange":{"min":-1.6195345641,"max":5.345135875}},{"amcImage":"https://static.paytmmoney.com/amc-logo/TAUMF.png","canonicalUrl":"taurus-tax-shield-direct-growth","categoryDisplayName":"ELSS","riskType":{"name":"High","colorId":5},"userRating":null,"aum":62.9631,"isin":"INF044D01CG6","fundName":"Taurus ELSS Tax Saver Direct-Growth","minimumInvestment":500,"returns":4.8884870404,"categoryReturnsRange":{"min":-1.6195345641,"max":5.345135875}}]},{"name":"3m","selected":false,"schemeReturns":11.58,"funds":[{"amcImage":"https://static.paytmmoney.com/amc-logo/ESCMF.png","canonicalUrl":"quant-tax-plan-direct-growth","categoryDisplayName":"ELSS","riskType":{"name":"High","colorId":5},"userRating":null,"aum":4956.5346,"isin":"INF966L01986","fundName":"Quant ELSS Tax Saver Fund Direct-Growth","minimumInvestment":500,"returns":27.7263341303,"categoryReturnsRange":{"min":10.1729788008,"max":27.7263341303}},{"amcImage":"https://static.paytmmoney.com/amc-logo/SBIMF.png","canonicalUrl":"sbi-magnum-taxgain-direct-plan-growth","categoryDisplayName":"ELSS","riskType":{"name":"High","colorId":5},"userRating":null,"aum":15773.93,"isin":"INF200K01UM9","fundName":"SBI Long Term Equity Fund Direct Plan-Growth","minimumInvestment":500,"returns":24.2473895339,"categoryReturnsRange":{"min":10.1729788008,"max":27.7263341303}},{"amcImage":"https://static.paytmmoney.com/amc-logo/BOIAX.png","canonicalUrl":"boi-axa-tax-advantage-direct-growth","categoryDisplayName":"ELSS","riskType":{"name":"High","colorId":5},"userRating":null,"aum":860.308,"isin":"INF761K01884","fundName":"Bank of India ELSS Tax Saver Direct-Growth","minimumInvestment":500,"returns":23.9133738602,"categoryReturnsRange":{"min":10.1729788008,"max":27.7263341303}}]},{"name":"1y","selected":false,"schemeReturns":27.637,"funds":[{"amcImage":"https://static.paytmmoney.com/amc-logo/SBIMF.png","canonicalUrl":"sbi-magnum-taxgain-direct-plan-growth","categoryDisplayName":"ELSS","riskType":{"name":"High","colorId":5},"userRating":null,"aum":15773.93,"isin":"INF200K01UM9","fundName":"SBI Long Term Equity Fund Direct Plan-Growth","minimumInvestment":500,"returns":52.5692212428,"categoryReturnsRange":{"min":22.5758143018,"max":52.5692212428}},{"amcImage":"https://static.paytmmoney.com/amc-logo/ESCMF.png","canonicalUrl":"quant-tax-plan-direct-growth","categoryDisplayName":"ELSS","riskType":{"name":"High","colorId":5},"userRating":null,"aum":4956.5346,"isin":"INF966L01986","fundName":"Quant ELSS Tax Saver Fund Direct-Growth","minimumInvestment":500,"returns":52.2725193738,"categoryReturnsRange":{"min":22.5758143018,"max":52.5692212428}},{"amcImage":"https://static.paytmmoney.com/amc-logo/ITIMF.png","canonicalUrl":"iti-long-term-equity-fund-direct-growth","categoryDisplayName":"ELSS","riskType":{"name":"High","colorId":5},"userRating":null,"aum":206.2902,"isin":"INF00XX01390","fundName":"ITI ELSS Tax Saver Fund Direct - Growth","minimumInvestment":500,"returns":48.1186720038,"categoryReturnsRange":{"min":22.5758143018,"max":52.5692212428}}]},{"name":"3y","selected":true,"schemeReturns":11.413,"funds":[{"amcImage":"https://static.paytmmoney.com/amc-logo/ESCMF.png","canonicalUrl":"quant-tax-plan-direct-growth","categoryDisplayName":"ELSS","riskType":{"name":"High","colorId":5},"userRating":null,"aum":4956.5346,"isin":"INF966L01986","fundName":"Quant ELSS Tax Saver Fund Direct-Growth","minimumInvestment":500,"returns":36.2034939796272,"categoryReturnsRange":{"min":11.0436773466369,"max":36.2034939796272}},{"amcImage":"https://static.paytmmoney.com/amc-logo/SBIMF.png","canonicalUrl":"sbi-magnum-taxgain-direct-plan-growth","categoryDisplayName":"ELSS","riskType":{"name":"High","colorId":5},"userRating":null,"aum":15773.93,"isin":"INF200K01UM9","fundName":"SBI Long Term Equity Fund Direct Plan-Growth","minimumInvestment":500,"returns":26.818508248651,"categoryReturnsRange":{"min":11.0436773466369,"max":36.2034939796272}},{"amcImage":"https://static.paytmmoney.com/amc-logo/IDFMF.png","canonicalUrl":"idfc-tax-advantage-elss-direct-plan-growth","categoryDisplayName":"ELSS","riskType":{"name":"High","colorId":5},"userRating":null,"aum":5039.6556,"isin":"INF194K01Y29","fundName":"Bandhan ELSS Tax Saver Fund Direct Plan-Growth","minimumInvestment":500,"returns":26.4332411772737,"categoryReturnsRange":{"min":11.0436773466369,"max":36.2034939796272}}]},{"name":"5y","selected":false,"schemeReturns":14.763,"funds":[{"amcImage":"https://static.paytmmoney.com/amc-logo/ESCMF.png","canonicalUrl":"quant-tax-plan-direct-growth","categoryDisplayName":"ELSS","riskType":{"name":"High","colorId":5},"userRating":null,"aum":4956.5346,"isin":"INF966L01986","fundName":"Quant ELSS Tax Saver Fund Direct-Growth","minimumInvestment":500,"returns":32.9726048059817,"categoryReturnsRange":{"min":11.4389455382877,"max":32.9726048059817}},{"amcImage":"https://static.paytmmoney.com/amc-logo/BOIAX.png","canonicalUrl":"boi-axa-tax-advantage-direct-growth","categoryDisplayName":"ELSS","riskType":{"name":"High","colorId":5},"userRating":null,"aum":860.308,"isin":"INF761K01884","fundName":"Bank of India ELSS Tax Saver Direct-Growth","minimumInvestment":500,"returns":26.1948901393078,"categoryReturnsRange":{"min":11.4389455382877,"max":32.9726048059817}},{"amcImage":"https://static.paytmmoney.com/amc-logo/BOIAX.png","canonicalUrl":"boi-axa-midcap-tax-fund-series-1-direct-growth","categoryDisplayName":"ELSS","riskType":{"name":"High","colorId":5},"userRating":null,"aum":54.1136,"isin":"INF761K01DS3","fundName":"Bank of India Midcap Tax Fund Series 1 Direct - Growth","minimumInvestment":500,"returns":24.3405725442678,"categoryReturnsRange":{"min":16.8202153529888,"max":28.8947564233905}}]},{"name":"max","selected":false,"schemeReturns":17.226,"funds":[{"amcImage":"https://static.paytmmoney.com/amc-logo/SAMMF.png","canonicalUrl":"samco-elss-tax-saver-fund-direct-growth","categoryDisplayName":"ELSS","riskType":{"name":"High","colorId":5},"userRating":null,"aum":66.7748,"isin":"INF0K1H01065","fundName":"Samco ELSS Tax Saver Fund Direct - Growth","minimumInvestment":500,"returns":32.4518110885,"categoryReturnsRange":{"min":11.4879440603,"max":32.4518110885}},{"amcImage":"https://static.paytmmoney.com/amc-logo/ESSEL.png","canonicalUrl":"navi-elss-tax-saver-nifty-50-index-fund-direct-growth","categoryDisplayName":"ELSS","riskType":{"name":"High","colorId":5},"userRating":null,"aum":21.489,"isin":"INF959L01GR6","fundName":"Navi ELSS Tax Saver Nifty 50 Index Fund Direct - Growth","minimumInvestment":500,"returns":28.615,"categoryReturnsRange":{"min":11.4879440603,"max":32.4518110885}},{"amcImage":"https://static.paytmmoney.com/amc-logo/YESMF.png","canonicalUrl":"whiteoak-capital-tax-saver-fund-direct-growth","categoryDisplayName":"ELSS","riskType":{"name":"High","colorId":5},"userRating":null,"aum":96.6647,"isin":"INF03VN01621","fundName":"WhiteOak Capital ELSS Tax Saver Fund Direct - Growth","minimumInvestment":500,"returns":28.544712982,"categoryReturnsRange":{"min":11.4879440603,"max":32.4518110885}}]}],"moneyMarket":{"rank":null,"returnPeriod":null,"label":"ELSS","asOnDate":"","list":[]},"portfolioDetails":{},"investmentDetails":{"lumpsumAllowed":true},"schemeBookmarked":null,"txnRules":{"buyAllowed":true,"sellAllowed":true,"investmentClause":"This fund is not accepting any investments","redemptionClause":"This fund has a lock-in period of 3 years","sipAllowed":true},"mfSchemeVideoResponses":[{"isin":"INF846K01EW2","videoId":24,"videoTitle":"Axis Long Term Equity Fund","videoUrl":"https://paytmmoney.akamaized.net/axis/Axis_Long_Term_Equity_Fund_-_Get_a_dual_benefit_of_building_wealth_saving_tax/Axis_Long_Term_Equity_Fund_-_Get_a_dual_benefit_of_building_wealth_saving_tax.m3u8","description":null,"videoBy":null,"designation":null,"primaryVideo":false,"videoTags":null,"videoThumbnail":"https://static.paytmmoney.com/video/thumb/Axis_Long_Term_Equity_Fund.jpg","priority":1,"id":24}],"eventDetails":null}},"metaTags":{"image":"https://static.paytmmoney.com/amc-logo/AXSMF.png","description":"Invest in Axis ELSS Tax Saver Direct Plan-Growth - Latest NAV ₹88.0783. Track scheme performance, AUM, historical returns, fund ratings, minimum SIP amount, fund manager etc.","video":"https://paytmmoney.akamaized.net/axis/Axis_Long_Term_Equity_Fund_-_Get_a_dual_benefit_of_building_wealth_saving_tax/Axis_Long_Term_Equity_Fund_-_Get_a_dual_benefit_of_building_wealth_saving_tax.m3u8","url":"/mutual-funds/scheme/axis-long-term-equity-direct-plan-growth/inf846k01ew2","title":"Axis ELSS Tax Saver Direct Plan-Growth - Latest NAV, Returns, Performance 2024","ogTitle":"Axis ELSS Tax Saver Direct Plan-Growth","twitterTitle":"Axis ELSS Tax Saver Direct Plan-Growth","keywords":"Axis ELSS Tax Saver Direct Plan-Growth NAV, Axis ELSS Tax Saver Direct Plan-Growth performance, Axis ELSS Tax Saver Direct Plan-Growth returns, Axis ELSS Tax Saver Direct Plan-Growth AUM, Axis ELSS Tax Saver Direct Plan-Growth return calculator, Axis ELSS Tax Saver Direct Plan-Growth sip return calculator","ldJsons":[{"@context":"https://schema.org/","@type":"Product","name":"Axis ELSS Tax Saver Direct Plan-Growth","description":"Invest in Axis ELSS Tax Saver Direct Plan-Growth - Latest NAV ₹88.0783. Track scheme performance, AUM, historical returns, fund ratings, minimum SIP amount, fund manager etc.","image":["https://static.paytmmoney.com/amc-logo/AXSMF.png"],"brand":{"@type":"Organization","name":"Axis Mutual Fund"},"review":{"@type":"Review","reviewRating":{"@type":"Rating","ratingValue":1,"bestRating":5},"author":{"@type":"Organization","name":"Value Research"}}}]},"userDetails":null},"page":"/mutual-fund","query":{"name":"axis-long-term-equity-direct-plan-growth","id":"inf846k01ew2"},"buildId":"5VMEhzQP~Cm4t66s4UPI0"};__NEXT_LOADED_PAGES__=[];__NEXT_REGISTER_PAGE=function(r,f){__NEXT_LOADED_PAGES__.push([r, f])}</script><script async="" id="__NEXT_PAGE__/mutual-fund" src="/_next/static/5VMEhzQP~Cm4t66s4UPI0/pages/mutual-fund.js"></script><script async="" id="__NEXT_PAGE__/_app" src="/_next/static/5VMEhzQP~Cm4t66s4UPI0/pages/_app.js"></script><script async="" id="__NEXT_PAGE__/_error" src="/_next/static/5VMEhzQP~Cm4t66s4UPI0/pages/_error.js"></script><script src="/_next/static/runtime/webpack-165da341e6bddd311305.js" async=""></script><script src="/_next/static/chunks/commons.31a7121bf6e4b1494a42.js" async=""></script><script src="/_next/static/chunks/styles.627c1a784a2b97524b34.js" async=""></script><script src="/_next/static/runtime/main-1dba3705d817f3bc4f3b.js" async=""></script><script type="application/ld+json">{
      "@context": "http://schema.org",
      "@type":"Organization",
      "name":"Paytm Money",
      "description": "Paytm Money offers direct plans of mutual fund investment schemes for FREE. Track the latest NAV, AUM, ratings & returns for top performing mutual funds of 2024 in India.",
      "url":"https://www.paytmmoney.com",
      "logo":"https://static.paytmmoney.com/android-chrome-192x192.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No. 6/B, Summit, 80 Feet Rd, Koramangala 1A Block",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560034",
        "Telephone": ""
      },
      "sameAs":[
        "https://twitter.com/paytmmoney",
        "https://www.facebook.com/PaytmMoney/",
        "https://www.linkedin.com/company/paytmmoney/",
        "https://www.youtube.com/paytmmoney",
        "https://www.instagram.com/paytmmoney/"
      ]
    }</script><script type="application/ld+json">{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://www.paytmmoney.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.paytmmoney.com/mutual-funds/search?searchQuery={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }</script><link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300&amp;family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&amp;family=Roboto:wght@400;700&amp;display=swap" rel="stylesheet"/><script> (function(){

      if ('serviceWorker' in window.navigator)
    {
      window.navigator.serviceWorker
      .register('/service-worker.js')
      .then(function () { console.log('service worker registered.') })
      .catch(function (err) { console.dir(err) })
    }
    })()</script><script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js" async=""></script><script>(function(){
      if (!Object.entries) {
        Object.entries = function( obj ){
          var ownProps = Object.keys( obj ),
              i = ownProps.length,
              resArray = new Array(i); // preallocate the Array
          while (i--)
            resArray[i] = [ownProps[i], obj[ownProps[i]]];
          
          return resArray;
        };
      }
      if (!Object.values) {
        Object.values = function( obj ){
          var ownProps = Object.keys( obj ),
              i = ownProps.length,
              resArray = new Array(i); // preallocate the Array
          while (i--)
            resArray[i] = obj[ownProps[i]];
          
          return resArray;
        };
      }
      if (!Array.prototype.find) {
        Object.defineProperty(Array.prototype, 'find', {
          value: function(predicate) {
          // 1. Let O be ? ToObject(this value).
            if (this == null) {
              throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
              throw new TypeError('predicate must be a function');
            }

            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];

            // 5. Let k be 0.
            var k = 0;

            // 6. Repeat, while k < len
            while (k < len) {
              // a. Let Pk be ! ToString(k).
              // b. Let kValue be ? Get(O, Pk).
              // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
              // d. If testResult is true, return kValue.
              var kValue = o[k];
              if (predicate.call(thisArg, kValue, k, o)) {
                return kValue;
              }
              // e. Increase k by 1.
              k++;
            }

            // 7. Return undefined.
            return undefined;
          },
          configurable: true,
          writable: true
        });
      }
      if (!String.prototype.includes) {
        String.prototype.includes = function(search, start) {
          'use strict';
          if (typeof start !== 'number') {
            start = 0;
          }

          if (start + search.length > this.length) {
            return false;
          } else {
            return this.indexOf(search, start) !== -1;
          }
        };
      }
      if (!Array.prototype.includes) {
        Object.defineProperty(Array.prototype, 'includes', {
          value: function(valueToFind, fromIndex) {

            if (this == null) {
              throw new TypeError('"this" is null or not defined');
            }

            // 1. Let O be ? ToObject(this value).
            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // 3. If len is 0, return false.
            if (len === 0) {
              return false;
            }

            // 4. Let n be ? ToInteger(fromIndex).
            //    (If fromIndex is undefined, this step produces the value 0.)
            var n = fromIndex | 0;

            // 5. If n ≥ 0, then
            //  a. Let k be n.
            // 6. Else n < 0,
            //  a. Let k be len + n.
            //  b. If k < 0, let k be 0.
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

            function sameValueZero(x, y) {
              return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
            }

            // 7. Repeat, while k < len
            while (k < len) {
              // a. Let elementK be the result of ? Get(O, ! ToString(k)).
              // b. If SameValueZero(valueToFind, elementK) is true, return true.
              if (sameValueZero(o[k], valueToFind)) {
                return true;
              }
              // c. Increase k by 1. 
              k++;
            }

            // 8. Return false
            return false;
          }
        });
      }
    }());</script><link rel="preload" as="image" href="/static/images/common/no-internet.svg"/><link rel="prefetch" as="image" href="/static/images/common/no-internet.svg"/><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WKH8QTG"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><script>(function(){
      if (window.BOOMR && window.BOOMR.version) { return; }
      var dom,doc,where,iframe = document.createElement("iframe"),win = window;
      function boomerangSaveLoadTime(e) {
        win.BOOMR_onload=(e && e.timeStamp) || new Date().getTime();
      }
      if (win.addEventListener) {
        win.addEventListener("load", boomerangSaveLoadTime, false);
      } else if (win.attachEvent) {
        win.attachEvent("onload", boomerangSaveLoadTime);
      }
      iframe.src = "javascript:void(0)";
      iframe.title = ""; iframe.role = "presentation";
      (iframe.frameElement || iframe).style.cssText = "width:0;height:0;border:0;display:none;";
      where = document.getElementsByTagName("script")[0];
      where.parentNode.insertBefore(iframe, where);
      try {
       doc = iframe.contentWindow.document;
      } catch(e) {
        dom = document.domain;
        iframe.src="javascript:var d=document.open();d.domain='"+dom+"';void(0);";
        doc = iframe.contentWindow.document;
      }
      doc.open()._l = function() {
        var js = this.createElement("script");
        if (dom) { this.domain = dom; }
        js.id = "boomr-if-as";
        js.src = "https://s.go-mpulse.net/boomerang/" +
        "N5EUN-XCM7D-3THBL-D7K8V-VHWC2";
        BOOMR_lstart=new Date().getTime();
        js.async = true;
        this.body.appendChild(js);
      };
      doc.write('<body onload="document._l();">');
      doc.close();
    })();</script><script src="https://www.google.com/recaptcha/api.js" async=""></script><script async="" src="https://webappsstatic.paytm.com/signalsdk-web/v1/config-2.2.2.min.js"></script><script async="" src="https://www.googletagmanager.com/gtag/js?id=AW-891016632"></script><script>(function(){
      window.dataLayer = window.dataLayer || [];
      window.gtag1 = function(){dataLayer.push(arguments);}
      window.gtag1('js', new Date());
      window.gtag1('config', 'AW-891016632');
      if (window.location.pathname.includes('/open-demat-trading-account')) {
        window.gtag1('config', 'DC-11964164');
      }
    })();</script><script>!function(t,e,n,s,a,c,i,o,p){t.AppsFlyerSdkObject=a,t.AF=t.AF||function(){(t.AF.q=t.AF.q||[]).push([Date.now()].concat(Array.prototype.slice.call(arguments)))},t.AF.id=t.AF.id||i,t.AF.plugins={},o=e.createElement(n),p=e.getElementsByTagName(n)[0],o.async=1,o.src="https://websdk.appsflyer.com?"+(c.length>0?"st="+c.split(",").sort().join(",")+"&":"")+(i.length>0?"af_id="+i:""),p.parentNode.insertBefore(o,p)}(window,document,"script",0,"AF","banners",{banners: {key: "ffbf135d-3ace-44c3-a729-7b30dba66814"}})
      AF('banners', 'showBanner')</script><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WKH8QTG');</script><script><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WKH8QTG"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript></script><script async="">
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1197757197667392');
      fbq('track', 'PageView');</script><script async="">
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1197757197667392&ev=PageView&noscript=1"
          alt=""
        />
      </noscript></script></body></html>