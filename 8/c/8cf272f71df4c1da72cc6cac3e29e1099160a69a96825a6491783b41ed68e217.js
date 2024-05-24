/*-----------------------------------------------------------------------------

	-	Revolution Slider 4.1 Captions -

		Screen Stylesheet

version:   	1.4.5
date:      	27/11/13
author:		themepunch
email:     	info@themepunch.com
website:   	http://www.themepunch.com
-----------------------------------------------------------------------------*/


@font-face {
  font-family: 'revicons';
  src: url('../font/revicons.eot?5510888');
  src: url('../font/revicons.eot?5510888#iefix') format('embedded-opentype'),
       url('../font/revicons.woff?5510888') format('woff'),
       url('../font/revicons.ttf?5510888') format('truetype'),
       url('../font/revicons.svg?5510888#revicons') format('svg');
  font-weight: normal;
  font-style: normal;
}
/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */
/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */
/*
@media screen and (-webkit-min-device-pixel-ratio:0) {
  @font-face {
    font-family: 'revicons';
    src: url('../font/revicons.svg?5510888#revicons') format('svg');
  }
}
*/

 [class^="revicon-"]:before, [class*=" revicon-"]:before {
  font-family: "revicons";
  font-style: normal;
  font-weight: normal;
  speak: none;

  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: .2em;
  text-align: center;
  /* opacity: .8; */

  /* For safety - reset parent styles, that can break glyph codes*/
  font-variant: normal;
  text-transform: none;

  /* fix buttons height, for twitter bootstrap */
  line-height: 1em;

  /* Animation center compensation - margins should be symmetric */
  /* remove if not needed */
  margin-left: .2em;

  /* you can be more comfortable with increased icons size */
  /* font-size: 120%; */

  /* Uncomment for 3D effect */
  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
}

.revicon-search-1:before { content: '\e802'; } /* '' */
.revicon-pencil-1:before { content: '\e831'; } /* '' */
.revicon-picture-1:before { content: '\e803'; } /* '' */
.revicon-cancel:before { content: '\e80a'; } /* '' */
.revicon-info-circled:before { content: '\e80f'; } /* '' */
.revicon-trash:before { content: '\e801'; } /* '' */
.revicon-left-dir:before { content: '\e817'; } /* '' */
.revicon-right-dir:before { content: '\e818'; } /* '' */
.revicon-down-open:before { content: '\e83b'; } /* '' */
.revicon-left-open:before { content: '\e819'; } /* '' */
.revicon-right-open:before { content: '\e81a'; } /* '' */
.revicon-angle-left:before { content: '\e820'; } /* '' */
.revicon-angle-right:before { content: '\e81d'; } /* '' */
.revicon-left-big:before { content: '\e81f'; } /* '' */
.revicon-right-big:before { content: '\e81e'; } /* '' */
.revicon-magic:before { content: '\e807'; } /* '' */
.revicon-picture:before { content: '\e800'; } /* '' */
.revicon-export:before { content: '\e80b'; } /* '' */
.revicon-cog:before { content: '\e832'; } /* '' */
.revicon-login:before { content: '\e833'; } /* '' */
.revicon-logout:before { content: '\e834'; } /* '' */
.revicon-video:before { content: '\e805'; } /* '' */
.revicon-arrow-combo:before { content: '\e827'; } /* '' */
.revicon-left-open-1:before { content: '\e82a'; } /* '' */
.revicon-right-open-1:before { content: '\e82b'; } /* '' */
.revicon-left-open-mini:before { content: '\e822'; } /* '' */
.revicon-right-open-mini:before { content: '\e823'; } /* '' */
.revicon-left-open-big:before { content: '\e824'; } /* '' */
.revicon-right-open-big:before { content: '\e825'; } /* '' */
.revicon-left:before { content: '\e836'; } /* '' */
.revicon-right:before { content: '\e826'; } /* '' */
.revicon-ccw:before { content: '\e808'; } /* '' */
.revicon-arrows-ccw:before { content: '\e806'; } /* '' */
.revicon-palette:before { content: '\e829'; } /* '' */
.revicon-list-add:before { content: '\e80c'; } /* '' */
.revicon-doc:before { content: '\e809'; } /* '' */
.revicon-left-open-outline:before { content: '\e82e'; } /* '' */
.revicon-left-open-2:before { content: '\e82c'; } /* '' */
.revicon-right-open-outline:before { content: '\e82f'; } /* '' */
.revicon-right-open-2:before { content: '\e82d'; } /* '' */
.revicon-equalizer:before { content: '\e83a'; } /* '' */
.revicon-layers-alt:before { content: '\e804'; } /* '' */
.revicon-popup:before { content: '\e828'; } /* '' */


/*********************************
	-	SPECIAL TP CAPTIONS -
**********************************/

.tp-static-layers				{	position:absolute; z-index:505; top:0px;left:0px}


.tp-caption .frontcorner		{
										width: 0;
										height: 0;
										border-left: 40px solid transparent;
										border-right: 0px solid transparent;
										border-top: 40px solid #00A8FF;
										position: absolute;left:-40px;top:0px;
									}

.tp-caption .backcorner		{
										width: 0;
										height: 0;
										border-left: 0px solid transparent;
										border-right: 40px solid transparent;
										border-bottom: 40px solid #00A8FF;
										position: absolute;right:0px;top:0px;
									}

.tp-caption .frontcornertop		{
										width: 0;
										height: 0;
										border-left: 40px solid transparent;
										border-right: 0px solid transparent;
										border-bottom: 40px solid #00A8FF;
										position: absolute;left:-40px;top:0px;
									}

.tp-caption .backcornertop		{
										width: 0;
										height: 0;
										border-left: 0px solid transparent;
										border-right: 40px solid transparent;
										border-top: 40px solid #00A8FF;
										position: absolute;right:0px;top:0px;
									}
									
.tp-layer-inner-rotation			{	position: relative !important;}		


/***********************************************
	-	SPECIAL ALTERNATIVE IMAGE SETTINGS	-
***********************************************/

img.tp-slider-alternative-image	{	width:100%; height:auto;}


							

/******************************
	-	WRAPPER STYLES		-
******************************/



.rev_slider_wrapper{
	position:relative;
}

.rev_slider_wrapper >ul	{
	visibility:hidden;
}

.rev_slider{
	position:relative;
	overflow:visible;
}


.rev_slider img{
	max-width:none !important;
	-moz-transition: none 0;
	-webkit-transition: none 0;
	-o-transition: none 0;
	transition: none 0;
	margin:0px;
	padding:0px;
	border-width:0px;
	border:none;

}

.rev_slider .no-slides-text{
	font-weight:bold;
	text-align:center;
	padding-top:80px;
}

.rev_slider >ul{
	margin:0px;
	padding:0px;
	list-style: none !important;
	list-style-type: none;
	background-position:0px 0px;
}

.rev_slider >ul >li,
.rev_slider >ul >li:before{

	list-style:none !important;
	position:absolute;
	visibility:hidden;
	margin:0px !important;
	padding:0px !important;
	overflow-x: visible;
	overflow-y: visible;
	list-style-type: none !important;
	background-image:none;
	background-position:0px 0px;
	text-indent: 0em;
}

.tp-revslider-slidesli,
.tp-revslider-mainul	{	padding:0 !important; margin:0 !important; list-style:none !important;}

.tp-simpleresponsive >ul,
.tp-simpleresponsive >ul >li,
.tp-simpleresponsive >ul >li:before {
	list-style:none;
	padding:0 !important;
	margin:0 !important;
	list-style:none !important;
	overflow-x: visible;
	overflow-y: visible;
	background-image:none
}


.tp-simpleresponsive >ul li{
	list-style:none;
	position:absolute;
	visibility:hidden;
}


.rev_slider .tp-caption,
.rev_slider .caption { position:absolute;  visibility:hidden; white-space: nowrap}

.tp-simpleresponsive img	{	max-width:none}

/* ADDED FOR SLIDELINK MANAGEMENT */
.tp-caption { z-index:1}



.tp_inner_padding	{	box-sizing:border-box;
						-webkit-box-sizing:border-box;
						-moz-box-sizing:border-box;
						max-height:none !important;	}


.tp-hide-revslider,.tp-caption.tp-hidden-caption	{	visibility:hidden !important; display:none !important}

.rev_slider embed,
.rev_slider iframe,
.rev_slider object,
.rev_slider video {max-width: none !important}

/******************************
	-	WRAPPER STYLES END	-
******************************/

/******************************
	-	IE8 HACKS	-
*******************************/
.noFilterClass {
	filter:none !important;
}
/******************************
	-	IE8 HACKS ENDS	-
*******************************/

/********************************
	-	FULLSCREEN VIDEO	-
*********************************/

.tp-caption.coverscreenvideo	{	width:100%;height:100%;top:0px;left:0px;position:absolute;}
.caption.fullscreenvideo {	left:0px; top:0px; position:absolute;width:100%;height:100%}
.caption.fullscreenvideo iframe,
.caption.fullscreenvideo video	{ width:100% !important; height:100% !important; display: none}

.tp-caption.fullscreenvideo	{	left:0px; top:0px; position:absolute;width:100%;height:100%}


.tp-caption.fullscreenvideo iframe,
.tp-caption.fullscreenvideo iframe video	{ width:100% !important; height:100% !important; display: none}


.fullcoveredvideo video,
.fullscreenvideo video					{	background: #000}

.fullcoveredvideo .tp-poster		{	background-position: center center;background-size: cover;width:100%;height:100%;top:0px;left:0px}

.html5vid.videoisplaying .tp-poster	{	display: none}

.tp-video-play-button		{	background:#000;
								background:rgba(0,0,0,0.3);
								padding:5px;
								border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;
								position: absolute;
								top: 50%;
								left: 50%;
								font-size: 40px;
								color: #FFF;
								z-index: 3;
								margin-top: -27px;
								margin-left: -28px;
								text-align: center;
								cursor: pointer;
								
							}
.tp-caption:hover .tp-video-play-button	{	opacity: 1;}
.html5vid .tp-revstop							{	width:15px;height:20px; border-left:5px solid #fff; border-right:5px solid #fff; position: relative;margin:10px 20px; box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;}
.html5vid .tp-revstop							{	display:none}
.html5vid.videoisplaying .revicon-right-dir		{	display:none}
.html5vid.videoisplaying .tp-revstop			{	display:block}

.html5vid.videoisplaying .tp-video-play-button	{	display:none}
.html5vid:hover .tp-video-play-button 			{ display:block}

.fullcoveredvideo .tp-video-play-button	{	display:none !important}

.tp-video-controls {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 5px;
	opacity: 0;
	-webkit-transition: opacity .3s;
	-moz-transition: opacity .3s;
	-o-transition: opacity .3s;
	-ms-transition: opacity .3s;
	transition: opacity .3s;
	background-image: linear-gradient(bottom, rgb(0,0,0) 13%, rgb(50,50,50) 100%);
	background-image: -o-linear-gradient(bottom, rgb(0,0,0) 13%, rgb(50,50,50) 100%);
	background-image: -moz-linear-gradient(bottom, rgb(0,0,0) 13%, rgb(50,50,50) 100%);
	background-image: -webkit-linear-gradient(bottom, rgb(0,0,0) 13%, rgb(50,50,50) 100%);
	background-image: -ms-linear-gradient(bottom, rgb(0,0,0) 13%, rgb(50,50,50) 100%);

	background-image: -webkit-gradient(
		linear,
		left bottom,
		left top,
		color-stop(0.13, rgb(0,0,0)),
		color-stop(1, rgb(50,50,50))
	);
	
	display:table;max-width:100%; overflow:hidden;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;
}

.tp-caption:hover .tp-video-controls {
	opacity: .9;
}

.tp-video-button {
	background: rgba(0,0,0,.5);
	border: 0;
	color: #EEE;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	-o-border-radius: 3px;
	border-radius: 3px;
	cursor:pointer;
	line-height:12px;
	font-size:12px;
	color:#fff;
	padding:0px;
	margin:0px;
	outline: none;
	}
.tp-video-button:hover {
	cursor: pointer;
}


.tp-video-button-wrap,
.tp-video-seek-bar-wrap,
.tp-video-vol-bar-wrap 	{ padding:0px 5px;display:table-cell; }

.tp-video-seek-bar-wrap	{	width:80%}
.tp-video-vol-bar-wrap	{	width:20%}

.tp-volume-bar,
.tp-seek-bar		{	width:100%; cursor: pointer;  outline:none; line-height:12px;margin:0; padding:0;}


/********************************
	-	FULLSCREEN VIDEO ENDS	-
*********************************/



/********************************
	-	DOTTED OVERLAYS	-
*********************************/
.tp-dottedoverlay						{	background-repeat:repeat;width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:3}
.tp-dottedoverlay.twoxtwo				{	background:url(../assets/gridtile.png)}
.tp-dottedoverlay.twoxtwowhite			{	background:url(../assets/gridtile_white.png)}
.tp-dottedoverlay.threexthree			{	background:url(../assets/gridtile_3x3.png)}
.tp-dottedoverlay.threexthreewhite		{	background:url(../assets/gridtile_3x3_white.png)}

/********************************
	-	DOTTED OVERLAYS ENDS	-
*********************************/



/**********************************************
	-	FULLSCREEN AND FULLWIDHT CONTAINERS	-
**********************************************/

.fullscreen-container {
		width:100%;
		position:relative;
		padding:0;
}



.fullwidthbanner-container{
	width:100%;
	position:relative;
	padding:0;
	overflow:hidden;
}

.fullwidthbanner-container .fullwidthabanner{
	width:100%;
	position:relative;
}


/****************************************************************

	-	SET THE ANIMATION EVEN MORE SMOOTHER ON ANDROID   -

******************************************************************/

.tp-simpleresponsive .slotholder *,
.tp-simpleresponsive img			{ 	/*-webkit-transform: translateZ(0);
										  -webkit-backface-visibility: hidden;
										  -webkit-perspective: 1000;*/
									}


/************************************************
	  - SOME CAPTION MODIFICATION AT START  -
*************************************************/
.tp-simpleresponsive .caption,
.tp-simpleresponsive .tp-caption {
	/*-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";		-moz-opacity: 0;	-khtml-opacity: 0;	opacity: 0; */
	position:absolute;
	-webkit-font-smoothing: antialiased !important;
}


/******************************
	-	SHADOWS		-
******************************/
.tp-bannershadow  {
		position:absolute;

		margin-left:auto;
		margin-right:auto;
		-moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
	}

.tp-bannershadow.tp-shadow1 {	background:url(../assets/shadow1.png) no-repeat; background-size:100% 100%; width:890px; height:30px; bottom:-30px}
.tp-bannershadow.tp-shadow2 {	background:url(../assets/shadow2.png) no-repeat; background-size:100% 100%; width:890px; height:60px;bottom:-60px}
.tp-bannershadow.tp-shadow3 {	background:url(../assets/shadow3.png) no-repeat; background-size:100% 100%; width:890px; height:60px;bottom:-60px}


/******************************
	-	BUTTONS	-
*******************************/

.tp-button{
			padding:6px 13px 5px;
			border-radius: 3px;
			-moz-border-radius: 3px;
			-webkit-border-radius: 3px;
			height:30px;
			cursor:pointer;
			color:#fff !important; text-shadow:0px 1px 1px rgba(0, 0, 0, 0.6) !important; font-size:15px; line-height:45px !important;
			background:url(../images/gradient/g30.png) repeat-x top; font-family: arial, sans-serif; font-weight: bold; letter-spacing: -1px;
			text-decoration:none;
		}

.tp-button.big			{	color:#fff; text-shadow:0px 1px 1px rgba(0, 0, 0, 0.6); font-weight:bold; padding:9px 20px; font-size:19px;  line-height:57px !important; background:url(../images/gradient/g40.png) repeat-x top}


.purchase:hover,
.tp-button:hover,
.tp-button.big:hover		{	background-position:bottom, 15px 11px}


	/*@media only screen and (min-width: 480px) and (max-width: 767px) {
		.tp-button	{	padding:4px 8px 3px; line-height:25px !important; font-size:11px !important;font-weight:normal;	}
		a.tp-button { -webkit-transition: none; -moz-transition: none; -o-transition: none; -ms-transition: none;	 }
	}

    @media only screen and (min-width: 0px) and (max-width: 479px) {
		.tp-button	{	padding:2px 5px 2px; line-height:20px !important; font-size:10px !important}
		a.tp-button { -webkit-transition: none; -moz-transition: none; -o-transition: none; -ms-transition: none;	 }
	}*/


/*	BUTTON COLORS	*/

.tp-button.green, .tp-button:hover.green,
.purchase.green, .purchase:hover.green			{ background-color:#21a117; -webkit-box-shadow:  0px 3px 0px 0px #104d0b;        -moz-box-shadow:   0px 3px 0px 0px #104d0b;        box-shadow:   0px 3px 0px 0px #104d0b;  }


.tp-button.blue, .tp-button:hover.blue,
.purchase.blue, .purchase:hover.blue			{ background-color:#1d78cb; -webkit-box-shadow:  0px 3px 0px 0px #0f3e68;        -moz-box-shadow:   0px 3px 0px 0px #0f3e68;        box-shadow:   0px 3px 0px 0px #0f3e68}


.tp-button.red, .tp-button:hover.red,
.purchase.red, .purchase:hover.red				{ background-color:#cb1d1d; -webkit-box-shadow:  0px 3px 0px 0px #7c1212;        -moz-box-shadow:   0px 3px 0px 0px #7c1212;        box-shadow:   0px 3px 0px 0px #7c1212}

.tp-button.orange, .tp-button:hover.orange,
.purchase.orange, .purchase:hover.orange		{ background-color:#ff7700; -webkit-box-shadow:  0px 3px 0px 0px #a34c00;        -moz-box-shadow:   0px 3px 0px 0px #a34c00;        box-shadow:   0px 3px 0px 0px #a34c00}

.tp-button.darkgrey,.tp-button.grey,
.tp-button:hover.darkgrey,.tp-button:hover.grey,
.purchase.darkgrey, .purchase:hover.darkgrey	{ background-color:#555; -webkit-box-shadow:  0px 3px 0px 0px #222;        -moz-box-shadow:   0px 3px 0px 0px #222;        box-shadow:   0px 3px 0px 0px #222}

.tp-button.lightgrey, .tp-button:hover.lightgrey,
.purchase.lightgrey, .purchase:hover.lightgrey	{ background-color:#888; -webkit-box-shadow:  0px 3px 0px 0px #555;        -moz-box-shadow:   0px 3px 0px 0px #555;        box-shadow:   0px 3px 0px 0px #555}



/************************
	-	NAVIGATION	-
*************************/

/** BULLETS **/

.tpclear								{	clear:both}


.tp-bullets								{	z-index:1000; position:absolute;
												-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
												-moz-opacity: 1;
												-khtml-opacity: 1;
												opacity: 1;
												-webkit-transition: opacity 0.2s ease-out; -moz-transition: opacity 0.2s ease-out; -o-transition: opacity 0.2s ease-out; -ms-transition: opacity 0.2s ease-out;
												-webkit-transform: translateZ(5px);
										}
.tp-bullets.hidebullets					{
												-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
												-moz-opacity: 0;
												-khtml-opacity: 0;
												opacity: 0;
										}


.tp-bullets.simplebullets.navbar						{ 	border:1px solid #666; border-bottom:1px solid #444; background:url(../assets/boxed_bgtile.png); height:40px; padding:0px 10px; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px }

.tp-bullets.simplebullets.navbar-old					{ 	 background:url(../assets/navigdots_bgtile.png); height:35px; padding:0px 10px; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px }


.tp-bullets.simplebullets.round .bullet					{	cursor:pointer; position:relative;	background:url(../assets/bullet.png) no-repeat top left;	width:20px;	height:20px;  margin-right:0px; float:left; margin-top:0px; margin-left:3px}
.tp-bullets.simplebullets.round .bullet.last			{	margin-right:3px}

.tp-bullets.simplebullets.round-old .bullet				{	cursor:pointer; position:relative;	background:url(../assets/bullets.png) no-repeat bottom left;	width:23px;	height:23px;  margin-right:0px; float:left; margin-top:0px}
.tp-bullets.simplebullets.round-old .bullet.last		{	margin-right:0px}


/**	SQUARE BULLETS **/
.tp-bullets.simplebullets.square .bullet				{	cursor:pointer; position:relative;	background:url(../assets/bullets2.png) no-repeat bottom left;	width:19px;	height:19px;  margin-right:0px; float:left; margin-top:0px}
.tp-bullets.simplebullets.square .bullet.last			{	margin-right:0px}


/**	SQUARE BULLETS **/
.tp-bullets.simplebullets.square-old .bullet			{	cursor:pointer; position:relative;	background:url(../assets/bullets2.png) no-repeat bottom left;	width:19px;	height:19px;  margin-right:0px; float:left; margin-top:0px}
.tp-bullets.simplebullets.square-old .bullet.last		{	margin-right:0px}


/** navbar NAVIGATION VERSION **/
.tp-bullets.simplebullets.navbar .bullet				{	cursor:pointer; position:relative;	background:url(../assets/bullet_boxed.png) no-repeat top left;	width:18px;	height:19px;   margin-right:5px; float:left; margin-top:10px}

.tp-bullets.simplebullets.navbar .bullet.first			{	margin-left:0px !important}
.tp-bullets.simplebullets.navbar .bullet.last			{	margin-right:0px !important}



/** navbar NAVIGATION VERSION **/
.tp-bullets.simplebullets.navbar-old .bullet			{	cursor:pointer; position:relative;	background:url(../assets/navigdots.png) no-repeat bottom left;	width:15px;	height:15px;  margin-left:5px !important; margin-right:5px !important;float:left; margin-top:10px}
.tp-bullets.simplebullets.navbar-old .bullet.first		{	margin-left:0px !important}
.tp-bullets.simplebullets.navbar-old .bullet.last		{	margin-right:0px !important}


.tp-bullets.simplebullets .bullet:hover,
.tp-bullets.simplebullets .bullet.selected				{	background-position:top left; }

.tp-bullets.simplebullets.round .bullet:hover,
.tp-bullets.simplebullets.round .bullet.selected,
.tp-bullets.simplebullets.navbar .bullet:hover,
.tp-bullets.simplebullets.navbar .bullet.selected		{	background-position:bottom left; }



/*************************************
	-	TP ARROWS 	-
**************************************/
.tparrows												{	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
															-moz-opacity: 1;
															-khtml-opacity: 1;
															opacity: 1;
															-webkit-transition: opacity 0.2s ease-out; -moz-transition: opacity 0.2s ease-out; -o-transition: opacity 0.2s ease-out; -ms-transition: opacity 0.2s ease-out;
															-webkit-transform: translateZ(1000px);
															-webkit-transform-style: preserve-3d;

														}


.tparrows .tp-arr-imgholder								{ display: none}
.tparrows .tp-arr-titleholder							{ display: none}

.tparrows.hidearrows									{
															-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
															-moz-opacity: 0;
															-khtml-opacity: 0;
															opacity: 0;
														}
.tp-leftarrow											{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/large_left.png) no-repeat top left;	width:40px;	height:40px;   }
.tp-rightarrow											{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/large_right.png) no-repeat top left;	width:40px;	height:40px;   }


.tp-leftarrow.round										{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/small_left.png) no-repeat top left;	width:19px;	height:14px;  margin-right:0px; float:left; margin-top:0px;	}
.tp-rightarrow.round									{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/small_right.png) no-repeat top left;	width:19px;	height:14px;  margin-right:0px; float:left;	margin-top:0px}


.tp-leftarrow.round-old									{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/arrow_left.png) no-repeat top left;	width:26px;	height:26px;  margin-right:0px; float:left; margin-top:0px;	}
.tp-rightarrow.round-old								{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/arrow_right.png) no-repeat top left;	width:26px;	height:26px;  margin-right:0px; float:left;	margin-top:0px}


.tp-leftarrow.navbar									{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/small_left_boxed.png) no-repeat top left;	width:20px;	height:15px;   float:left;	margin-right:6px; margin-top:12px}
.tp-rightarrow.navbar									{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/small_right_boxed.png) no-repeat top left;	width:20px;	height:15px;   float:left;	margin-left:6px; margin-top:12px}


.tp-leftarrow.navbar-old								{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/arrowleft.png) no-repeat top left;		width:9px;	height:16px;   float:left;	margin-right:6px; margin-top:10px}
.tp-rightarrow.navbar-old								{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/arrowright.png) no-repeat top left;	width:9px;	height:16px;   float:left;	margin-left:6px; margin-top:10px}

.tp-leftarrow.navbar-old.thumbswitharrow				{	margin-right:10px; }
.tp-rightarrow.navbar-old.thumbswitharrow				{	margin-left:0px; }

.tp-leftarrow.square									{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/arrow_left2.png) no-repeat top left;	width:12px;	height:17px;   float:left;	margin-right:0px; margin-top:0px}
.tp-rightarrow.square									{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/arrow_right2.png) no-repeat top left;	width:12px;	height:17px;   float:left;	margin-left:0px; margin-top:0px}


.tp-leftarrow.square-old								{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/arrow_left2.png) no-repeat top left;	width:12px;	height:17px;   float:left;	margin-right:0px; margin-top:0px}
.tp-rightarrow.square-old								{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/arrow_right2.png) no-repeat top left;	width:12px;	height:17px;   float:left;	margin-left:0px; margin-top:0px}


.tp-leftarrow.default									{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/large_left.png) no-repeat 0 0;	width:40px;	height:40px;

														}
.tp-rightarrow.default									{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/large_right.png) no-repeat 0 0;	width:40px;	height:40px;

														}




.tp-leftarrow:hover,
.tp-rightarrow:hover 									{	background-position:bottom left; }






/****************************************************************************************************
	-	TP THUMBS 	-
*****************************************************************************************************

 - tp-thumbs & tp-mask Width is the width of the basic Thumb Container (500px basic settings)

 - .bullet width & height is the dimension of a simple Thumbnail (basic 100px x 50px)

 *****************************************************************************************************/


.tp-bullets.tp-thumbs						{	z-index:1000; position:absolute; padding:3px;background-color:#fff;
												width:500px;height:50px; 			/* THE DIMENSIONS OF THE THUMB CONTAINER */
												margin-top:-50px;
												vertical-align: top;
											}
.tp-bullets.tp-thumbs img					{	vertical-align: top}


.fullwidthbanner-container .tp-thumbs		{  padding:3px}

.tp-bullets.tp-thumbs .tp-mask				{	width:500px; height:50px;  			/* THE DIMENSIONS OF THE THUMB CONTAINER */
												overflow:hidden; position:relative}


.tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer	{	width:5000px; position:absolute}

.tp-bullets.tp-thumbs .bullet				{   width:100px; height:50px; 			/* THE DIMENSION OF A SINGLE THUMB */
												cursor:pointer; overflow:hidden;background:none;margin:0;float:left;
												-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
												/*filter: alpha(opacity=50);	*/
												-moz-opacity: 0.5;
												-khtml-opacity: 0.5;
												opacity: 0.5;

												-webkit-transition: all 0.2s ease-out; -moz-transition: all 0.2s ease-out; -o-transition: all 0.2s ease-out; -ms-transition: all 0.2s ease-out;
											}


.tp-bullets.tp-thumbs .bullet:hover,
.tp-bullets.tp-thumbs .bullet.selected		{ 	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
												-moz-opacity: 1;
												-khtml-opacity: 1;
												opacity: 1;
											}
.tp-thumbs img								{	width:100%; }




/************************************
		-	TP BANNER TIMER		-
*************************************/
.tp-bannertimer								{	visibility: hidden; width:100%; height:5px; /*background:url(../assets/timer.png);*/ background: #fff; background: rgba(0,0,0,0.15); position:absolute; z-index:200; top:0px}
.tp-bannertimer.tp-bottom					{	top:auto; bottom:0px !important;height:5px}





/*****************************************
	-	NAVIGATION FANCY EXAMPLES	-
*****************************************/

/* NAVIGATION PREVIEW 1 */
.tparrows.preview1 							{	width:100px;height:100px;-webkit-transform-style: preserve-3d; -webkit-perspective: 1000; -moz-perspective: 1000; -webkit-backface-visibility: hidden; -moz-backface-visibility: hidden;background: transparent}
.tparrows.preview1:after					{	position:absolute; left:0px;top:0px; font-family: "revicons"; color:#fff; font-size:30px; width:100px;height:100px;text-align: center; background:#fff;background:rgba(0,0,0,0.15);z-index:2;line-height:100px; -webkit-transition: background 0.3s, color 0.3s; -moz-transition: background 0.3s, color 0.3s; transition: background 0.3s, color 0.3s}
.tp-rightarrow.preview1:after				{	content: '\e825';  }
.tp-leftarrow.preview1:after				{	content: '\e824';  }

.tparrows.preview1:hover:after 				{	background:rgba(255,255,255,1); color:#aaa; }

.tparrows.preview1 .tp-arr-imgholder 		{	background-size:cover; background-position:center center; display:block;width:100%;height:100%;position:absolute;top:0px;
												-webkit-transition: -webkit-transform 0.3s;
												transition: transform 0.3s;
												-webkit-backface-visibility: hidden;
												backface-visibility: hidden;
											}
.tparrows.preview1 .tp-arr-iwrapper			{	  -webkit-transition: all 0.3s;transition: all 0.3s;
												-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter: alpha(opacity=0);-moz-opacity: 0.0;-khtml-opacity: 0.0;opacity: 0.0}
.tparrows.preview1:hover .tp-arr-iwrapper	{	  -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";filter: alpha(opacity=100);-moz-opacity: 1;-khtml-opacity: 1;opacity: 1}


.tp-rightarrow.preview1 .tp-arr-imgholder	{	right:100%;
												-webkit-transform: rotateY(-90deg);
												transform: rotateY(-90deg);
												-webkit-transform-origin: 100% 50%;
												transform-origin: 100% 50%;
												  -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter: alpha(opacity=0);-moz-opacity: 0.0;-khtml-opacity: 0.0;opacity: 0.0;



											}
.tp-leftarrow.preview1 .tp-arr-imgholder	{	left:100%;
												-webkit-transform: rotateY(90deg);
												transform: rotateY(90deg);
												-webkit-transform-origin: 0% 50%;
												transform-origin: 0% 50%;
												  -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter: alpha(opacity=0);-moz-opacity: 0.0;-khtml-opacity: 0.0;opacity: 0.0;



											}


.tparrows.preview1:hover .tp-arr-imgholder	{	-webkit-transform: rotateY(0deg);
												transform: rotateY(0deg);
												  -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";filter: alpha(opacity=100);-moz-opacity: 1;-khtml-opacity: 1;opacity: 1;

											}


	@media only screen and (min-width: 768px) and (max-width: 979px) {
		.tparrows.preview1,
		.tparrows.preview1:after	{	width:80px; height:80px;line-height:80px; font-size:24px}

	}

    @media only screen and (min-width: 480px) and (max-width: 767px) {
		.tparrows.preview1,
		.tparrows.preview1:after	{	width:60px; height:60px;line-height:60px;font-size:20px}

	}



    @media only screen and (min-width: 0px) and (max-width: 479px) {
		.tparrows.preview1,
		.tparrows.preview1:after	{	width:40px; height:40px;line-height:40px; font-size:12px}
    }

/* PREVIEW 1 BULLETS */

.tp-bullets.preview1 						{ 	height: 21px; }
.tp-bullets.preview1 .bullet 				{	cursor: pointer;
											    position: relative !important;
											    background: rgba(0, 0, 0, 0.15) !important;
											    /*-webkit-border-radius: 10px;
											    border-radius: 10px;*/
											    -webkit-box-shadow: none;
											    -moz-box-shadow: none;
											    box-shadow: none;
											    width: 5px !important;
											    height: 5px !important;
											    border: 8px solid rgba(0, 0, 0, 0) !important;
											    display: inline-block;
											    margin-right: 5px !important;
											    margin-bottom: 0px !important;
											    -webkit-transition: background-color 0.2s, border-color 0.2s;
											    -moz-transition: background-color 0.2s, border-color 0.2s;
											    -o-transition: background-color 0.2s, border-color 0.2s;
											    -ms-transition: background-color 0.2s, border-color 0.2s;
											    transition: background-color 0.2s, border-color 0.2s;
											    float:none !important;
											    box-sizing:content-box;
												-moz-box-sizing:content-box;
												-webkit-box-sizing:content-box;
}
.tp-bullets.preview1 .bullet.last 			{	margin-right: 0px; }
.tp-bullets.preview1 .bullet:hover,
.tp-bullets.preview1 .bullet.selected 		{	-webkit-box-shadow: none;
											    -moz-box-shadow: none;
											    box-shadow: none;
												background: #aaa !important;
												width: 5px !important;
											    height: 5px !important;
											    border: 8px solid rgba(255, 255, 255, 1) !important;
}




/* NAVIGATION PREVIEW 2 */
.tparrows.preview2 							{	min-width:60px; min-height:60px; background:#fff; ;

												border-radius:30px;-moz-border-radius:30px;-webkit-border-radius:30px;
												overflow:hidden;
												-webkit-transition: -webkit-transform 1.3s;
												-webkit-transition: width 0.3s, background-color 0.3s, opacity 0.3s;
												transition: width 0.3s, background-color 0.3s, opacity 0.3s;
												backface-visibility: hidden;
}
.tparrows.preview2:after					{	position:absolute; top:50%; font-family: "revicons"; color:#aaa; font-size:25px; margin-top: -12px; -webkit-transition: color 0.3s; -moz-transition: color 0.3s; transition: color 0.3s }
.tp-rightarrow.preview2:after				{	content: '\e81e';  right:18px; }
.tp-leftarrow.preview2:after				{	content: '\e81f';  left:18px; }


.tparrows.preview2 .tp-arr-titleholder 		{	background-size:cover; background-position:center center; display:block; visibility:hidden;position:relative;top:0px;
												-webkit-transition: -webkit-transform 0.3s;
												transition: transform 0.3s;
												-webkit-backface-visibility: hidden;
												backface-visibility: hidden;
												white-space: nowrap;
												color: #000;
												text-transform: uppercase;
												font-weight: 400;
												font-size: 14px;
												line-height: 60px;
												padding:0px 10px;
											}

.tp-rightarrow.preview2 .tp-arr-titleholder	{	 right:50px;
												-webkit-transform: translateX(-100%);
												transform: translateX(-100%);
											}
.tp-leftarrow.preview2 .tp-arr-titleholder	{	left:50px;
												-webkit-transform: translateX(100%);
												transform: translateX(100%);
											}

.tparrows.preview2.hovered					{	width:300px}
.tparrows.preview2:hover					{	background:#fff}
.tparrows.preview2:hover:after				{	color:#000}
.tparrows.preview2:hover .tp-arr-titleholder{	-webkit-transform: translateX(0px);
													transform: translateX(0px);
													visibility: visible;
													position: absolute;
											}

/* PREVIEW 2 BULLETS */

.tp-bullets.preview2 						{ 	height: 17px; }
.tp-bullets.preview2 .bullet 				{	cursor: pointer;
											    position: relative !important;
											    background: rgba(0, 0, 0, 0.5) !important;
											    -webkit-border-radius: 10px;
											    border-radius: 10px;
											    -webkit-box-shadow: none;
											    -moz-box-shadow: none;
											    box-shadow: none;
											    width: 6px !important;
											    height: 6px !important;
											    border: 5px solid rgba(0, 0, 0, 0) !important;
											    display: inline-block;
											    margin-right: 2px !important;
											    margin-bottom: 0px !important;
											    -webkit-transition: background-color 0.2s, border-color 0.2s;
											    -moz-transition: background-color 0.2s, border-color 0.2s;
											    -o-transition: background-color 0.2s, border-color 0.2s;
											    -ms-transition: background-color 0.2s, border-color 0.2s;
											    transition: background-color 0.2s, border-color 0.2s;
											    float:none !important;
											    box-sizing:content-box;
												-moz-box-sizing:content-box;
												-webkit-box-sizing:content-box;
}
.tp-bullets.preview2 .bullet.last 			{	margin-right: 0px; }
.tp-bullets.preview2 .bullet:hover,
.tp-bullets.preview2 .bullet.selected 		{	-webkit-box-shadow: none;
											    -moz-box-shadow: none;
											    box-shadow: none;
												background: rgba(255, 255, 255, 1) !important;
												width: 6px !important;
											    height: 6px !important;
											    border: 5px solid rgba(0, 0, 0, 1) !important;
}

.tp-arr-titleholder.alwayshidden			{	display:none !important}


	@media only screen and (min-width: 768px) and (max-width: 979px) {
		.tparrows.preview2 {	min-width:40px; min-height:40px; width:40px;height:40px;
								border-radius:20px;-moz-border-radius:20px;-webkit-border-radius:20px;
							}
		.tparrows.preview2:after					{	position:absolute; top:50%; font-family: "revicons"; font-size:20px; margin-top: -12px}
		.tp-rightarrow.preview2:after				{	content: '\e81e';  right:11px}
		.tp-leftarrow.preview2:after				{	content: '\e81f';  left:11px}
		.tparrows.preview2 .tp-arr-titleholder		{	font-size:12px; line-height:40px; letter-spacing: 0px}
		.tp-rightarrow.preview2 .tp-arr-titleholder	{	right:35px}
		.tp-leftarrow.preview2 .tp-arr-titleholder	{	left:35px}

	}

    @media only screen and (min-width: 480px) and (max-width: 767px) {
   		 .tparrows.preview2 						{	min-width:30px; min-height:30px; width:30px;height:30px;
														border-radius:15px;-moz-border-radius:15px;-webkit-border-radius:15px;
													}
		.tparrows.preview2:after					{	position:absolute; top:50%; font-family: "revicons"; font-size:14px; margin-top: -12px}
		.tp-rightarrow.preview2:after				{	content: '\e81e';  right:8px}
		.tp-leftarrow.preview2:after				{	content: '\e81f';  left:8px}
		.tparrows.preview2 .tp-arr-titleholder		{	font-size:10px; line-height:30px; letter-spacing: 0px}
		.tp-rightarrow.preview2 .tp-arr-titleholder	{	right:25px}
		.tp-leftarrow.preview2 .tp-arr-titleholder	{	left:25px}
		.tparrows.preview2 .tp-arr-titleholder		{	display:none;visibility:none}


	}

    @media only screen and (min-width: 0px) and (max-width: 479px) {
		.tparrows.preview2 							{	min-width:30px; min-height:30px; width:30px;height:30px;
														border-radius:15px;-moz-border-radius:15px;-webkit-border-radius:15px;
													}
		.tparrows.preview2:after					{	position:absolute; top:50%; font-family: "revicons"; font-size:14px; margin-top: -12px}
		.tp-rightarrow.preview2:after				{	content: '\e81e';  right:8px}
		.tp-leftarrow.preview2:after				{	content: '\e81f';  left:8px}
		.tparrows.preview2 .tp-arr-titleholder		{	display:none;visibility:none}
		.tparrows.preview2:hover					{	width:30px !important; height:30px !important}
    }



/* NAVIGATION PREVIEW 3 */
.tparrows.preview3 							{	width:70px; height:70px; background:#fff; background:rgba(255,255,255,1); -webkit-transform-style: flat; }
.tparrows.preview3:after					{	position:absolute;  line-height: 70px;text-align: center; font-family: "revicons"; color:#aaa; font-size:30px; top:0px;left:0px;;background:#fff; z-index:100; width:70px;height:70px; -webkit-transition: color 0.3s; -moz-transition: color 0.3s; transition: color 0.3s}
.tparrows.preview3:hover:after					{	color:#000; }
.tp-rightarrow.preview3:after				{	content: '\e825';  }
.tp-leftarrow.preview3:after				{	content: '\e824';  }


.tparrows.preview3 .tp-arr-iwrapper			{
												  -webkit-transform: scale(0,1);
												  transform: scale(0,1);
												  -webkit-transform-origin: 100% 50%;
												  transform-origin: 100% 50%;
												  -webkit-transition: -webkit-transform 0.2s;
												  transition: transform 0.2s;
												  z-index:0;position: absolute; background: #000; background: rgba(0,0,0,0.75);
												  display: table;min-height:90px;top:-10px}

.tp-leftarrow.preview3 .tp-arr-iwrapper		{	 -webkit-transform: scale(0,1);
												  transform: scale(0,1);
												  -webkit-transform-origin: 0% 50%;
												  transform-origin: 0% 50%;
											}

.tparrows.preview3 .tp-arr-imgholder 		{	display:block;background-size:cover; background-position:center center; display:table-cell;min-width:90px;height:90px;
												position:relative;top:0px; }

.tp-rightarrow.preview3 .tp-arr-iwrapper	{	right:0px;padding-right:70px}
.tp-leftarrow.preview3 .tp-arr-iwrapper		{	left:0px; direction: rtl;padding-left:70px}
.tparrows.preview3 .tp-arr-titleholder		{	display:table-cell; padding:30px;font-size:16px; color:#fff;white-space: nowrap; position: relative; clear:right;vertical-align: middle}

.tparrows.preview3:hover .tp-arr-iwrapper	{
												-webkit-transform: scale(1,1);
												  transform: scale(1,1);

											}

/* PREVIEW 3 BULLETS */
.tp-bullets.preview3 						{ 	height: 17px; }
.tp-bullets.preview3 .bullet 				{	cursor: pointer;
											    position: relative !important;
											    background: rgba(0, 0, 0, 0.5) !important;
											    -webkit-border-radius: 10px;
											    border-radius: 10px;
											    -webkit-box-shadow: none;
											    -moz-box-shadow: none;
											    box-shadow: none;
											    width: 6px !important;
											    height: 6px !important;
											    border: 5px solid rgba(0, 0, 0, 0) !important;
											    display: inline-block;
											    margin-right: 2px !important;
											    margin-bottom: 0px !important;
											    -webkit-transition: background-color 0.2s, border-color 0.2s;
											    -moz-transition: background-color 0.2s, border-color 0.2s;
											    -o-transition: background-color 0.2s, border-color 0.2s;
											    -ms-transition: background-color 0.2s, border-color 0.2s;
											    transition: background-color 0.2s, border-color 0.2s;
											    float:none !important;
											    box-sizing:content-box;
												-moz-box-sizing:content-box;
												-webkit-box-sizing:content-box;
}
.tp-bullets.preview3 .bullet.last 			{	margin-right: 0px; }
.tp-bullets.preview3 .bullet:hover,
.tp-bullets.preview3 .bullet.selected 		{	-webkit-box-shadow: none;
											    -moz-box-shadow: none;
											    box-shadow: none;
												background: rgba(255, 255, 255, 1) !important;
												width: 6px !important;
											    height: 6px !important;
											    border: 5px solid rgba(0, 0, 0, 1) !important;
}


	@media only screen and (min-width: 768px) and (max-width: 979px) {
		.tparrows.preview3:after,
		.tparrows.preview3 							{	width:50px; height:50px; line-height:50px;font-size:20px}
		.tparrows.preview3 .tp-arr-iwrapper			{	min-height:70px}
		.tparrows.preview3 .tp-arr-imgholder 		{	min-width:70px;height:70px}
		.tp-rightarrow.preview3 .tp-arr-iwrapper	{	padding-right:50px}
		.tp-leftarrow.preview3 .tp-arr-iwrapper		{	padding-left:50px}
		.tparrows.preview3 .tp-arr-titleholder		{	padding:10px;font-size:16px; }



	}

    @media only screen  and (max-width: 767px) {

		.tparrows.preview3:after,
		.tparrows.preview3 							{	width:50px; height:50px; line-height:50px;font-size:20px}
		.tparrows.preview3 .tp-arr-iwrapper			{	min-height:70px}
	}





/* NAVIGATION PREVIEW 4 */
.tparrows.preview4 							{	width:30px; height:110px;  background:transparent;-webkit-transform-style: preserve-3d; -webkit-perspective: 1000; -moz-perspective: 1000}
.tparrows.preview4:after					{	position:absolute;  line-height: 110px;text-align: center; font-family: "revicons"; color:#fff; font-size:20px; top:0px;left:0px;z-index:0; width:30px;height:110px; background: #000; background: rgba(0,0,0,0.25);
												-webkit-transition: all 0.2s ease-in-out;
											    -moz-transition: all 0.2s ease-in-out;
											    -o-transition: all 0.2s ease-in-out;
											    transition: all 0.2s ease-in-out;
												   -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";filter: alpha(opacity=100);-moz-opacity: 1;-khtml-opacity: 1;opacity: 1;

											}

.tp-rightarrow.preview4:after				{	content: '\e825';  }
.tp-leftarrow.preview4:after				{	content: '\e824';  }


.tparrows.preview4 .tp-arr-allwrapper		{	visibility:hidden;width:180px;position: absolute;z-index: 1;min-height:120px;top:0px;left:-150px; overflow: hidden;-webkit-perspective: 1000px;-webkit-transform-style: flat}

.tp-leftarrow.preview4 .tp-arr-allwrapper	{	left:0px}
.tparrows.preview4 .tp-arr-iwrapper			{	position: relative}

.tparrows.preview4 .tp-arr-imgholder 		{	display:block;background-size:cover; background-position:center center;width:180px;height:110px;
												position:relative;top:0px;

												-webkit-backface-visibility: hidden;
												backface-visibility: hidden;



											}


.tparrows.preview4 .tp-arr-imgholder2 		{	display:block;background-size:cover; background-position:center center; width:180px;height:110px;
												position:absolute;top:0px; left:180px;
												-webkit-backface-visibility: hidden;
												backface-visibility: hidden;

											}

.tp-leftarrow.preview4 .tp-arr-imgholder2 	{	left:-180px}




.tparrows.preview4 .tp-arr-titleholder		{	display:block; font-size:12px; line-height:25px; padding:0px 10px;text-align:left;color:#fff; position: relative;
												background: #000;
												color: #FFF;
												text-transform: uppercase;
												white-space: nowrap;
												letter-spacing: 1px;
												font-weight: 700;
												font-size: 11px;
												line-height: 2.75;
												-webkit-transition: all 0.3s;
												transition: all 0.3s;
												-webkit-transform: rotateX(-90deg);
												transform: rotateX(-90deg);
												-webkit-transform-origin: 50% 0;
												transform-origin: 50% 0;
												-webkit-backface-visibility: hidden;
												backface-visibility: hidden;
												  -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter: alpha(opacity=0);-moz-opacity: 0.0;-khtml-opacity: 0.0;opacity: 0.0;


}



.tparrows.preview4:after				{	transform-origin: 100% 100%; -webkit-transform-origin: 100% 100%}
.tp-leftarrow.preview4:after			{	transform-origin: 0% 0%; -webkit-transform-origin: 0% 0%}




@media only screen and (min-width: 768px)  {
		.tparrows.preview4:hover:after				{	-webkit-transform: rotateY(-90deg); transform:rotateY(-90deg)}
		.tp-leftarrow.preview4:hover:after			{	-webkit-transform: rotateY(90deg); transform:rotateY(90deg)}


		.tparrows.preview4:hover .tp-arr-titleholder	{	-webkit-transition-delay: 0.4s;
															transition-delay: 0.4s;
															-webkit-transform: rotateX(0deg);
															transform: rotateX(0deg);
															-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";filter: alpha(opacity=100);-moz-opacity: 1;-khtml-opacity: 1;opacity: 1;

														}
}

/* PREVIEW 4 BULLETS */

.tp-bullets.preview4 						{ 	height: 17px; }
.tp-bullets.preview4 .bullet 				{	cursor: pointer;
											    position: relative !important;
											    background: rgba(0, 0, 0, 0.5) !important;
											    -webkit-border-radius: 10px;
											    border-radius: 10px;
											    -webkit-box-shadow: none;
											    -moz-box-shadow: none;
											    box-shadow: none;
											    width: 6px !important;
											    height: 6px !important;
											    border: 5px solid rgba(0, 0, 0, 0) !important;
											    display: inline-block;
											    margin-right: 2px !important;
											    margin-bottom: 0px !important;
											    -webkit-transition: background-color 0.2s, border-color 0.2s;
											    -moz-transition: background-color 0.2s, border-color 0.2s;
											    -o-transition: background-color 0.2s, border-color 0.2s;
											    -ms-transition: background-color 0.2s, border-color 0.2s;
											    transition: background-color 0.2s, border-color 0.2s;
											    float:none !important;
											    box-sizing:content-box;
												-moz-box-sizing:content-box;
												-webkit-box-sizing:content-box;
}
.tp-bullets.preview4 .bullet.last 			{	margin-right: 0px; }
.tp-bullets.preview4 .bullet:hover,
.tp-bullets.preview4 .bullet.selected 		{	-webkit-box-shadow: none;
											    -moz-box-shadow: none;
											    box-shadow: none;
												background: rgba(255, 255, 255, 1) !important;
												width: 6px !important;
											    height: 6px !important;
											    border: 5px solid rgba(0, 0, 0, 1) !important;
}


    @media only screen  and (max-width: 767px) {
   		 .tparrows.preview4 						{	width:20px; height:80px}
   		 .tparrows.preview4:after					{	width:20px; height:80px; line-height:80px; font-size:14px}

   		 .tparrows.preview1 .tp-arr-allwrapper,
   		 .tparrows.preview2 .tp-arr-allwrapper,
   		 .tparrows.preview3 .tp-arr-allwrapper,
   		 .tparrows.preview4 .tp-arr-allwrapper		{	display: none !important}
    }


/***************************************
	-	RESPONSIVE SETTINGS 	-
****************************************/




/*********************************************

	-	BASIC SETTINGS FOR THE BANNER	-

***********************************************/

 .tp-simpleresponsive img {
		-moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
}

.tp-caption img {
background: transparent;
-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)";
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF);
zoom: 1;
}



/*  CAPTION SLIDELINK   **/
.caption.slidelink a div,
.tp-caption.slidelink a div {	width:3000px; height:1500px;  background:url(../assets/coloredbg.png) repeat}

.tp-caption.slidelink a span	{	background:url(../assets/coloredbg.png) repeat}






/******************************
	-	LOADER FORMS	-
********************************/

.tp-loader 	{
				top:50%; left:50%;
				z-index:10000;
				position:absolute;


			}

.tp-loader.spinner0 {
  width: 40px;
  height: 40px;
  background:url(../assets/loader.gif) no-repeat center center;
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  margin-top:-20px;
  margin-left:-20px;
  -webkit-animation: tp-rotateplane 1.2s infinite ease-in-out;
  animation: tp-rotateplane 1.2s infinite ease-in-out;
  border-radius: 3px;
	-moz-border-radius: 3px;
	-webkit-border-radius: 3px;
}


.tp-loader.spinner1 {
  width: 40px;
  height: 40px;
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  margin-top:-20px;
  margin-left:-20px;
  -webkit-animation: tp-rotateplane 1.2s infinite ease-in-out;
  animation: tp-rotateplane 1.2s infinite ease-in-out;
  border-radius: 3px;
	-moz-border-radius: 3px;
	-webkit-border-radius: 3px;
}



.tp-loader.spinner5 	{	background:url(../assets/loader.gif) no-repeat 10px 10px;
							background-color:#fff;
							margin:-22px -22px;
							width:44px;height:44px;
							border-radius: 3px;
							-moz-border-radius: 3px;
							-webkit-border-radius: 3px;
						}


@-webkit-keyframes tp-rotateplane {
  0% { -webkit-transform: perspective(120px) }
  50% { -webkit-transform: perspective(120px) rotateY(180deg) }
  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
}

@keyframes tp-rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
  } 50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
  } 100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}


.tp-loader.spinner2 {
  width: 40px;
  height: 40px;
  margin-top:-20px;margin-left:-20px;
  background-color: #ff0000;
   box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  border-radius: 100%;
  -webkit-animation: tp-scaleout 1.0s infinite ease-in-out;
  animation: tp-scaleout 1.0s infinite ease-in-out;
}

@-webkit-keyframes tp-scaleout {
  0% { -webkit-transform: scale(0.0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}

@keyframes tp-scaleout {
  0% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 100% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}




.tp-loader.spinner3 {
  margin: -9px 0px 0px -35px;
  width: 70px;
  text-align: center;

}

.tp-loader.spinner3 .bounce1,
.tp-loader.spinner3 .bounce2,
.tp-loader.spinner3 .bounce3 {
  width: 18px;
  height: 18px;
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: tp-bouncedelay 1.4s infinite ease-in-out;
  animation: tp-bouncedelay 1.4s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.tp-loader.spinner3 .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.tp-loader.spinner3 .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes tp-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0.0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes tp-bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 40% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}




.tp-loader.spinner4 {
  margin: -20px 0px 0px -20px;
  width: 40px;
  height: 40px;
  text-align: center;
  -webkit-animation: tp-rotate 2.0s infinite linear;
  animation: tp-rotate 2.0s infinite linear;
}

.tp-loader.spinner4 .dot1,
.tp-loader.spinner4 .dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #fff;
  border-radius: 100%;
  -webkit-animation: tp-bounce 2.0s infinite ease-in-out;
  animation: tp-bounce 2.0s infinite ease-in-out;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
}

.tp-loader.spinner4 .dot2 {
  top: auto;
  bottom: 0px;
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes tp-rotate { 100% { -webkit-transform: rotate(360deg) }}
@keyframes tp-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}

@-webkit-keyframes tp-bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}

@keyframes tp-bounce {
  0%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}Simulated){e.stopImmediatePropagation()}this.stopPropagation()}};w.each({altKey:true,bubbles:true,cancelable:true,changedTouches:true,ctrlKey:true,detail:true,eventPhase:true,metaKey:true,pageX:true,pageY:true,shiftKey:true,view:true,char:true,code:true,charCode:true,key:true,keyCode:true,button:true,buttons:true,clientX:true,clientY:true,offsetX:true,offsetY:true,pointerId:true,pointerType:true,screenX:true,screenY:true,targetTouches:true,toElement:true,touches:true,which:function(e){var t=e.button;if(e.which==null&&Te.test(e.type)){return e.charCode!=null?e.charCode:e.keyCode}if(!e.which&&t!==undefined&&Ce.test(e.type)){if(t&1){return 1}if(t&2){return 3}if(t&4){return 2}return 0}return e.which}},w.event.addProp);w.each({focus:"focusin",blur:"focusout"},function(e,t){w.event.special[e]={setup:function(){$e(this,e,_e);return false},trigger:function(){$e(this,e);return true},delegateType:t}});w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;if(!i||i!==r&&!w.contains(r,i)){e.type=o.origType;n=o.handler.apply(this,arguments);e.type=t}return n}}});w.fn.extend({on:function(e,t,n,r){return Pe(this,e,t,n,r)},one:function(e,t,n,r){return Pe(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj){r=e.handleObj;w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler);return this}if(typeof e==="object"){for(i in e){this.off(i,t,e[i])}return this}if(t===false||typeof t==="function"){n=t;t=undefined}if(n===false){n=Ae}return this.each(function(){w.event.remove(this,e,n,t)})}});var Le=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function De(e,t){if(_(e,"table")&&_(t.nodeType!==11?t:t.firstChild,"tr")){return w(e).children("tbody")[0]||e}return e}function Me(e){e.type=(e.getAttribute("type")!==null)+"/"+e.type;return e}function Oe(e){if((e.type||"").slice(0,5)==="true/"){e.type=e.type.slice(5)}else{e.removeAttribute("type")}return e}function Ne(e,t){var n,r,i,o,a,s,l;if(t.nodeType!==1){return}if(Z.hasData(e)){o=Z.get(e);l=o.events;if(l){Z.remove(t,"handle events");for(i in l){for(n=0,r=l[i].length;n<r;n++){w.event.add(t,i,l[i][n])}}}}if(Q.hasData(e)){a=Q.access(e);s=w.extend({},a);Q.set(t,s)}}function Ie(e,t){var n=t.nodeName.toLowerCase();if(n==="input"&&he.test(e.type)){t.checked=e.checked}else if(n==="input"||n==="textarea"){t.defaultValue=e.defaultValue}}function Fe(e,t,n,r){t=o(t);var i,a,s,l,u,c,f=0,d=e.length,g=d-1,m=t[0],y=h(m);if(y||d>1&&typeof m==="string"&&!p.checkClone&&je.test(m)){return e.each(function(i){var o=e.eq(i);if(y){t[0]=m.call(this,i,o.html())}Fe(o,t,n,r)})}if(d){i=we(t,e[0].ownerDocument,false,e,r);a=i.firstChild;if(i.childNodes.length===1){i=a}if(a||r){s=w.map(ve(i,"script"),Me);l=s.length;for(;f<d;f++){u=i;if(f!==g){u=w.clone(u,true,true);if(l){w.merge(s,ve(u,"script"))}}n.call(e[f],u,f)}if(l){c=s[s.length-1].ownerDocument;w.map(s,Oe);for(f=0;f<l;f++){u=s[f];if(me.test(u.type||"")&&!Z.access(u,"globalEval")&&w.contains(c,u)){if(u.src&&(u.type||"").toLowerCase()!=="module"){if(w._evalUrl&&!u.noModule){w._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},c)}}else{v(u.textContent.replace(qe,""),u,c)}}}}}}return e}function He(e,t,n){var r,i=t?w.filter(t,e):e,o=0;for(;(r=i[o])!=null;o++){if(!n&&r.nodeType===1){w.cleanData(ve(r))}if(r.parentNode){if(n&&se(r)){be(ve(r,"script"))}r.parentNode.removeChild(r)}}return e}w.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(true),l=se(e);if(!p.noCloneChecked&&(e.nodeType===1||e.nodeType===11)&&!w.isXMLDoc(e)){a=ve(s);o=ve(e);for(r=0,i=o.length;r<i;r++){Ie(o[r],a[r])}}if(t){if(n){o=o||ve(e);a=a||ve(s);for(r=0,i=o.length;r<i;r++){Ne(o[r],a[r])}}else{Ne(e,s)}}a=ve(s,"script");if(a.length>0){be(a,!l&&ve(e,"script"))}return s},cleanData:function(e){var t,n,r,i=w.event.special,o=0;for(;(n=e[o])!==undefined;o++){if(G(n)){if(t=n[Z.expando]){if(t.events){for(r in t.events){if(i[r]){w.event.remove(n,r)}else{w.removeEvent(n,r,t.handle)}}}n[Z.expando]=undefined}if(n[Q.expando]){n[Q.expando]=undefined}}}}});w.fn.extend({detach:function(e){return He(this,e,true)},remove:function(e){return He(this,e)},text:function(e){return W(this,function(e){return e===undefined?w.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=e}})},null,e,arguments.length)},append:function(){return Fe(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=De(this,e);t.appendChild(e)}})},prepend:function(){return Fe(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=De(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Fe(this,arguments,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this)}})},after:function(){return Fe(this,arguments,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this.nextSibling)}})},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){if(e.nodeType===1){w.cleanData(ve(e,false));e.textContent=""}}return this},clone:function(e,t){e=e==null?false:e;t=t==null?e:t;return this.map(function(){return w.clone(this,e,t)})},html:function(e){return W(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&t.nodeType===1){return t.innerHTML}if(typeof e==="string"&&!Le.test(e)&&!ye[(ge.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++){t=this[n]||{};if(t.nodeType===1){w.cleanData(ve(t,false));t.innerHTML=e}}t=0}catch(e){}}if(t){this.empty().append(e)}},null,e,arguments.length)},replaceWith:function(){var e=[];return Fe(this,arguments,function(t){var n=this.parentNode;if(w.inArray(this,e)<0){w.cleanData(ve(this));if(n){n.replaceChild(t,this)}}},e)}});w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){var n,r=[],i=w(e),o=i.length-1,s=0;for(;s<=o;s++){n=s===o?this:this.clone(true);w(i[s])[t](n);a.apply(r,n.get())}return this.pushStack(r)}});var Re=new RegExp("^("+re+")(?!px)[a-z%]+$","i");var Be=function(t){var n=t.ownerDocument.defaultView;if(!n||!n.opener){n=e}return n.getComputedStyle(t)};var ze=function(e,t,n){var r,i,o={};for(i in t){o[i]=e.style[i];e.style[i]=t[i]}r=n.call(e);for(i in t){e.style[i]=o[i]}return r};var We=new RegExp(oe.join("|"),"i");(function(){function t(){if(!c){return}u.style.cssText="position:absolute;left:-11111px;width:60px;"+"margin-top:1px;padding:0;border:0";c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;"+"margin:auto;border:1px;padding:1px;"+"width:60%;top:1%";ae.appendChild(u).appendChild(c);var t=e.getComputedStyle(c);r=t.top!=="1%";l=n(t.marginLeft)===12;c.style.right="60%";a=n(t.right)===36;i=n(t.width)===36;c.style.position="absolute";o=n(c.offsetWidth/3)===12;ae.removeChild(u);c=null}function n(e){return Math.round(parseFloat(e))}var r,i,o,a,s,l,u=m.createElement("div"),c=m.createElement("div");if(!c.style){return}c.style.backgroundClip="content-box";c.cloneNode(true).style.backgroundClip="";p.clearCloneStyle=c.style.backgroundClip==="content-box";w.extend(p,{boxSizingReliable:function(){t();return i},pixelBoxStyles:function(){t();return a},pixelPosition:function(){t();return r},reliableMarginLeft:function(){t();return l},scrollboxSize:function(){t();return o},reliableTrDimensions:function(){var t,n,r,i;if(s==null){t=m.createElement("table");n=m.createElement("tr");r=m.createElement("div");t.style.cssText="position:absolute;left:-11111px";n.style.height="1px";r.style.height="9px";ae.appendChild(t).appendChild(n).appendChild(r);i=e.getComputedStyle(n);s=parseInt(i.height)>3;ae.removeChild(t)}return s}})})();function Xe(e,t,n){var r,i,o,a,s=e.style;n=n||Be(e);if(n){a=n.getPropertyValue(t)||n[t];if(a===""&&!se(e)){a=w.style(e,t)}if(!p.pixelBoxStyles()&&Re.test(a)&&We.test(t)){r=s.width;i=s.minWidth;o=s.maxWidth;s.minWidth=s.maxWidth=s.width=a;a=n.width;s.width=r;s.minWidth=i;s.maxWidth=o}}return a!==undefined?a+"":a}function Ue(e,t){return{get:function(){if(e()){delete this.get;return}return(this.get=t).apply(this,arguments)}}}var Ye=["Webkit","Moz","ms"],Ve=m.createElement("div").style,Ge={};function Ke(e){var t=e[0].toUpperCase()+e.slice(1),n=Ye.length;while(n--){e=Ye[n]+t;if(e in Ve){return e}}}function Ze(e){var t=w.cssProps[e]||Ge[e];if(t){return t}if(e in Ve){return e}return Ge[e]=Ke(e)||e}var Qe=/^(none|table(?!-c[ea]).+)/,Je=/^--/,et={position:"absolute",visibility:"hidden",display:"block"},tt={letterSpacing:"0",fontWeight:"400"};function nt(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function rt(e,t,n,r,i,o){var a=t==="width"?1:0,s=0,l=0;if(n===(r?"border":"content")){return 0}for(;a<4;a+=2){if(n==="margin"){l+=w.css(e,n+oe[a],true,i)}if(!r){l+=w.css(e,"padding"+oe[a],true,i);if(n!=="padding"){l+=w.css(e,"border"+oe[a]+"Width",true,i)}else{s+=w.css(e,"border"+oe[a]+"Width",true,i)}}else{if(n==="content"){l-=w.css(e,"padding"+oe[a],true,i)}if(n!=="margin"){l-=w.css(e,"border"+oe[a]+"Width",true,i)}}}if(!r&&o>=0){l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-l-s-.5))||0}return l}function it(e,t,n){var r=Be(e),i=!p.boxSizingReliable()||n,o=i&&w.css(e,"boxSizing",false,r)==="border-box",a=o,s=Xe(e,t,r),l="offset"+t[0].toUpperCase()+t.slice(1);if(Re.test(s)){if(!n){return s}s="auto"}if((!p.boxSizingReliable()&&o||!p.reliableTrDimensions()&&_(e,"tr")||s==="auto"||!parseFloat(s)&&w.css(e,"display",false,r)==="inline")&&e.getClientRects().length){o=w.css(e,"boxSizing",false,r)==="border-box";a=l in e;if(a){s=e[l]}}s=parseFloat(s)||0;return s+rt(e,t,n||(o?"border":"content"),a,r,s)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Xe(e,"opacity");return n===""?"1":n}}}},cssNumber:{animationIterationCount:true,columnCount:true,fillOpacity:true,flexGrow:true,flexShrink:true,fontWeight:true,gridArea:true,gridColumn:true,gridColumnEnd:true,gridColumnStart:true,gridRow:true,gridRowEnd:true,gridRowStart:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{},style:function(e,t,n,r){if(!e||e.nodeType===3||e.nodeType===8||!e.style){return}var i,o,a,s=V(t),l=Je.test(t),u=e.style;if(!l){t=Ze(s)}a=w.cssHooks[t]||w.cssHooks[s];if(n!==undefined){o=typeof n;if(o==="string"&&(i=ie.exec(n))&&i[1]){n=ce(e,t,i);o="number"}if(n==null||n!==n){return}if(o==="number"&&!l){n+=i&&i[3]||(w.cssNumber[s]?"":"px")}if(!p.clearCloneStyle&&n===""&&t.indexOf("background")===0){u[t]="inherit"}if(!a||!("set"in a)||(n=a.set(e,n,r))!==undefined){if(l){u.setProperty(t,n)}else{u[t]=n}}}else{if(a&&"get"in a&&(i=a.get(e,false,r))!==undefined){return i}return u[t]}},css:function(e,t,n,r){var i,o,a,s=V(t),l=Je.test(t);if(!l){t=Ze(s)}a=w.cssHooks[t]||w.cssHooks[s];if(a&&"get"in a){i=a.get(e,true,n)}if(i===undefined){i=Xe(e,t,r)}if(i==="normal"&&t in tt){i=tt[t]}if(n===""||n){o=parseFloat(i);return n===true||isFinite(o)?o||0:i}return i}});w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n){return Qe.test(w.css(e,"display"))&&(!e.getClientRects().length||!e.getBoundingClientRect().width)?ze(e,et,function(){return it(e,t,r)}):it(e,t,r)}},set:function(e,n,r){var i,o=Be(e),a=!p.scrollboxSize()&&o.position==="absolute",s=a||r,l=s&&w.css(e,"boxSizing",false,o)==="border-box",u=r?rt(e,t,r,l,o):0;if(l&&a){u-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-rt(e,t,"border",false,o)-.5)}if(u&&(i=ie.exec(n))&&(i[3]||"px")!=="px"){e.style[t]=n;n=w.css(e,t)}return nt(e,n,u)}}});w.cssHooks.marginLeft=Ue(p.reliableMarginLeft,function(e,t){if(t){return(parseFloat(Xe(e,"marginLeft"))||e.getBoundingClientRect().left-ze(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}});w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){var r=0,i={},o=typeof n==="string"?n.split(" "):[n];for(;r<4;r++){i[e+oe[r]+t]=o[r]||o[r-2]||o[0]}return i}};if(e!=="margin"){w.cssHooks[e+t].set=nt}});w.fn.extend({css:function(e,t){return W(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){r=Be(e);i=t.length;for(;a<i;a++){o[t[a]]=w.css(e,t[a],false,r)}return o}return n!==undefined?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function ot(e,t,n,r,i){return new ot.prototype.init(e,t,n,r,i)}w.Tween=ot;ot.prototype={constructor:ot,init:function(e,t,n,r,i,o){this.elem=e;this.prop=n;this.easing=i||w.easing._default;this.options=t;this.start=this.now=this.cur();this.end=r;this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=ot.propHooks[this.prop];return e&&e.get?e.get(this):ot.propHooks._default.get(this)},run:function(e){var t,n=ot.propHooks[this.prop];if(this.options.duration){this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration)}else{this.pos=t=e}this.now=(this.end-this.start)*t+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this)}if(n&&n.set){n.set(this)}else{ot.propHooks._default.set(this)}return this}};ot.prototype.init.prototype=ot.prototype;ot.propHooks={_default:{get:function(e){var t;if(e.elem.nodeType!==1||e.elem[e.prop]!=null&&e.elem.style[e.prop]==null){return e.elem[e.prop]}t=w.css(e.elem,e.prop,"");return!t||t==="auto"?0:t},set:function(e){if(w.fx.step[e.prop]){w.fx.step[e.prop](e)}else if(e.elem.nodeType===1&&(w.cssHooks[e.prop]||e.elem.style[Ze(e.prop)]!=null)){w.style(e.elem,e.prop,e.now+e.unit)}else{e.elem[e.prop]=e.now}}}};ot.propHooks.scrollTop=ot.propHooks.scrollLeft={set:function(e){if(e.elem.nodeType&&e.elem.parentNode){e.elem[e.prop]=e.now}}};w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"};w.fx=ot.prototype.init;w.fx.step={};var at,st,lt=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function ct(){if(st){if(m.hidden===false&&e.requestAnimationFrame){e.requestAnimationFrame(ct)}else{e.setTimeout(ct,w.fx.interval)}w.fx.tick()}}function ft(){e.setTimeout(function(){at=undefined});return at=Date.now()}function dt(e,t){var n,r=0,i={height:e};t=t?1:0;for(;r<4;r+=2-t){n=oe[r];i["margin"+n]=i["padding"+n]=e}if(t){i.opacity=i.width=e}return i}function pt(e,t,n){var r,i=(mt.tweeners[t]||[]).concat(mt.tweeners["*"]),o=0,a=i.length;for(;o<a;o++){if(r=i[o].call(n,t,e)){return r}}}function ht(e,t,n){var r,i,o,a,s,l,u,c,f="width"in t||"height"in t,d=this,p={},h=e.style,g=e.nodeType&&ue(e),m=Z.get(e,"fxshow");if(!n.queue){a=w._queueHooks(e,"fx");if(a.unqueued==null){a.unqueued=0;s=a.empty.fire;a.empty.fire=function(){if(!a.unqueued){s()}}}a.unqueued++;d.always(function(){d.always(function(){a.unqueued--;if(!w.queue(e,"fx").length){a.empty.fire()}})})}for(r in t){i=t[r];if(lt.test(i)){delete t[r];o=o||i==="toggle";if(i===(g?"hide":"show")){if(i==="show"&&m&&m[r]!==undefined){g=true}else{continue}}p[r]=m&&m[r]||w.style(e,r)}}l=!w.isEmptyObject(t);if(!l&&w.isEmptyObject(p)){return}if(f&&e.nodeType===1){n.overflow=[h.overflow,h.overflowX,h.overflowY];u=m&&m.display;if(u==null){u=Z.get(e,"display")}c=w.css(e,"display");if(c==="none"){if(u){c=u}else{pe([e],true);u=e.style.display||u;c=w.css(e,"display");pe([e])}}if(c==="inline"||c==="inline-block"&&u!=null){if(w.css(e,"float")==="none"){if(!l){d.done(function(){h.display=u});if(u==null){c=h.display;u=c==="none"?"":c}}h.display="inline-block"}}}if(n.overflow){h.overflow="hidden";d.always(function(){h.overflow=n.overflow[0];h.overflowX=n.overflow[1];h.overflowY=n.overflow[2]})}l=false;for(r in p){if(!l){if(m){if("hidden"in m){g=m.hidden}}else{m=Z.access(e,"fxshow",{display:u})}if(o){m.hidden=!g}if(g){pe([e],true)}d.done(function(){if(!g){pe([e])}Z.remove(e,"fxshow");for(r in p){w.style(e,r,p[r])}})}l=pt(g?m[r]:0,r,d);if(!(r in m)){m[r]=l.start;if(g){l.end=l.start;l.start=0}}}}function gt(e,t){var n,r,i,o,a;for(n in e){r=V(n);i=t[r];o=e[n];if(Array.isArray(o)){i=o[1];o=e[n]=o[0]}if(n!==r){e[r]=o;delete e[n]}a=w.cssHooks[r];if(a&&"expand"in a){o=a.expand(o);delete e[r];for(n in o){if(!(n in e)){e[n]=o[n];t[n]=i}}}else{t[r]=i}}}function mt(e,t,n){var r,i,o=0,a=mt.prefilters.length,s=w.Deferred().always(function(){delete l.elem}),l=function(){if(i){return false}var t=at||ft(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;a<l;a++){u.tweens[a].run(o)}s.notifyWith(e,[u,o,n]);if(o<1&&l){return n}if(!l){s.notifyWith(e,[u,1,0])}s.resolveWith(e,[u]);return false},u=s.promise({elem:e,props:w.extend({},t),opts:w.extend(true,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:at||ft(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);u.tweens.push(r);return r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i){return this}i=true;for(;n<r;n++){u.tweens[n].run(1)}if(t){s.notifyWith(e,[u,1,0]);s.resolveWith(e,[u,t])}else{s.rejectWith(e,[u,t])}return this}}),c=u.props;gt(c,u.opts.specialEasing);for(;o<a;o++){r=mt.prefilters[o].call(u,e,c,u.opts);if(r){if(h(r.stop)){w._queueHooks(u.elem,u.opts.queue).stop=r.stop.bind(r)}return r}}w.map(c,pt,u);if(h(u.opts.start)){u.opts.start.call(e,u)}u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always);w.fx.timer(w.extend(l,{elem:e,anim:u,queue:u.opts.queue}));return u}w.Animation=w.extend(mt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);ce(n.elem,e,ie.exec(t),n);return n}]},tweener:function(e,t){if(h(e)){t=e;e=["*"]}else{e=e.match(O)}var n,r=0,i=e.length;for(;r<i;r++){n=e[r];mt.tweeners[n]=mt.tweeners[n]||[];mt.tweeners[n].unshift(t)}},prefilters:[ht],prefilter:function(e,t){if(t){mt.prefilters.unshift(e)}else{mt.prefilters.push(e)}}});w.speed=function(e,t,n){var r=e&&typeof e==="object"?w.extend({},e):{complete:n||!n&&t||h(e)&&e,duration:e,easing:n&&t||t&&!h(t)&&t};if(w.fx.off){r.duration=0}else{if(typeof r.duration!=="number"){if(r.duration in w.fx.speeds){r.duration=w.fx.speeds[r.duration]}else{r.duration=w.fx.speeds._default}}}if(r.queue==null||r.queue===true){r.queue="fx"}r.old=r.complete;r.complete=function(){if(h(r.old)){r.old.call(this)}if(r.queue){w.dequeue(this,r.queue)}};return r};w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ue).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=mt(this,w.extend({},e),o);if(i||Z.get(this,"finish")){t.stop(true)}};a.finish=a;return i||o.queue===false?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop;t(n)};if(typeof e!=="string"){n=t;t=e;e=undefined}if(t){this.queue(e||"fx",[])}return this.each(function(){var t=true,i=e!=null&&e+"queueHooks",o=w.timers,a=Z.get(this);if(i){if(a[i]&&a[i].stop){r(a[i])}}else{for(i in a){if(a[i]&&a[i].stop&&ut.test(i)){r(a[i])}}}for(i=o.length;i--;){if(o[i].elem===this&&(e==null||o[i].queue===e)){o[i].anim.stop(n);t=false;o.splice(i,1)}}if(t||!n){w.dequeue(this,e)}})},finish:function(e){if(e!==false){e=e||"fx"}return this.each(function(){var t,n=Z.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;n.finish=true;w.queue(this,e,[]);if(i&&i.stop){i.stop.call(this,true)}for(t=o.length;t--;){if(o[t].elem===this&&o[t].queue===e){o[t].anim.stop(true);o.splice(t,1)}}for(t=0;t<a;t++){if(r[t]&&r[t].finish){r[t].finish.call(this)}}delete n.finish})}});w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return e==null||typeof e==="boolean"?n.apply(this,arguments):this.animate(dt(t,true),e,r,i)}});w.each({slideDown:dt("show"),slideUp:dt("hide"),slideToggle:dt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}});w.timers=[];w.fx.tick=function(){var e,t=0,n=w.timers;at=Date.now();for(;t<n.length;t++){e=n[t];if(!e()&&n[t]===e){n.splice(t--,1)}}if(!n.length){w.fx.stop()}at=undefined};w.fx.timer=function(e){w.timers.push(e);w.fx.start()};w.fx.interval=13;w.fx.start=function(){if(st){return}st=true;ct()};w.fx.stop=function(){st=null};w.fx.speeds={slow:600,fast:200,_default:400};w.fn.delay=function(t,n){t=w.fx?w.fx.speeds[t]||t:t;n=n||"fx";return this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})};(function(){var e=m.createElement("input"),t=m.createElement("select"),n=t.appendChild(m.createElement("option"));e.type="checkbox";p.checkOn=e.value!=="";p.optSelected=n.selected;e=m.createElement("input");e.value="t";e.type="radio";p.radioValue=e.value==="t"})();var yt,vt=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return W(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}});w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(o===3||o===8||o===2){return}if(typeof e.getAttribute==="undefined"){return w.prop(e,t,n)}if(o!==1||!w.isXMLDoc(e)){i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?yt:undefined)}if(n!==undefined){if(n===null){w.removeAttr(e,t);return}if(i&&"set"in i&&(r=i.set(e,n,t))!==undefined){return r}e.setAttribute(t,n+"");return n}if(i&&"get"in i&&(r=i.get(e,t))!==null){return r}r=w.find.attr(e,t);return r==null?undefined:r},attrHooks:{type:{set:function(e,t){if(!p.radioValue&&t==="radio"&&_(e,"input")){var n=e.value;e.setAttribute("type",t);if(n){e.value=n}return t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(O);if(i&&e.nodeType===1){while(n=i[r++]){e.removeAttribute(n)}}}});yt={set:function(e,t,n){if(t===false){w.removeAttr(e,n)}else{e.setAttribute(n,n)}return n}};w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=vt[t]||w.find.attr;vt[t]=function(e,t,r){var i,o,a=t.toLowerCase();if(!r){o=vt[a];vt[a]=i;i=n(e,t,r)!=null?a:null;vt[a]=o}return i}});var bt=/^(?:input|select|textarea|button)$/i,xt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return W(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}});w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(o===3||o===8||o===2){return}if(o!==1||!w.isXMLDoc(e)){t=w.propFix[t]||t;i=w.propHooks[t]}if(n!==undefined){if(i&&"set"in i&&(r=i.set(e,n,t))!==undefined){return r}return e[t]=n}if(i&&"get"in i&&(r=i.get(e,t))!==null){return r}return e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");if(t){return parseInt(t,10)}if(bt.test(e.nodeName)||xt.test(e.nodeName)&&e.href){return 0}return-1}}},propFix:{for:"htmlFor",class:"className"}});if(!p.optSelected){w.propHooks.selected={get:function(e){var t=e.parentNode;if(t&&t.parentNode){t.parentNode.selectedIndex}return null},set:function(e){var t=e.parentNode;if(t){t.selectedIndex;if(t.parentNode){t.parentNode.selectedIndex}}}}}w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function wt(e){var t=e.match(O)||[];return t.join(" ")}function Tt(e){return e.getAttribute&&e.getAttribute("class")||""}function Ct(e){if(Array.isArray(e)){return e}if(typeof e==="string"){return e.match(O)||[]}return[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,l=0;if(h(e)){return this.each(function(t){w(this).addClass(e.call(this,t,Tt(this)))})}t=Ct(e);if(t.length){while(n=this[l++]){i=Tt(n);r=n.nodeType===1&&" "+wt(i)+" ";if(r){a=0;while(o=t[a++]){if(r.indexOf(" "+o+" ")<0){r+=o+" "}}s=wt(r);if(i!==s){n.setAttribute("class",s)}}}}return this},removeClass:function(e){var t,n,r,i,o,a,s,l=0;if(h(e)){return this.each(function(t){w(this).removeClass(e.call(this,t,Tt(this)))})}if(!arguments.length){return this.attr("class","")}t=Ct(e);if(t.length){while(n=this[l++]){i=Tt(n);r=n.nodeType===1&&" "+wt(i)+" ";if(r){a=0;while(o=t[a++]){while(r.indexOf(" "+o+" ")>-1){r=r.replace(" "+o+" "," ")}}s=wt(r);if(i!==s){n.setAttribute("class",s)}}}}return this},toggleClass:function(e,t){var n=typeof e,r=n==="string"||Array.isArray(e);if(typeof t==="boolean"&&r){return t?this.addClass(e):this.removeClass(e)}if(h(e)){return this.each(function(n){w(this).toggleClass(e.call(this,n,Tt(this),t),t)})}return this.each(function(){var t,i,o,a;if(r){i=0;o=w(this);a=Ct(e);while(t=a[i++]){if(o.hasClass(t)){o.removeClass(t)}else{o.addClass(t)}}}else if(e===undefined||n==="boolean"){t=Tt(this);if(t){Z.set(this,"__className__",t)}if(this.setAttribute){this.setAttribute("class",t||e===false?"":Z.get(this,"__className__")||"")}}})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++]){if(n.nodeType===1&&(" "+wt(Tt(n))+" ").indexOf(t)>-1){return true}}return false}});var St=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];if(!arguments.length){if(i){t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()];if(t&&"get"in t&&(n=t.get(i,"value"))!==undefined){return n}n=i.value;if(typeof n==="string"){return n.replace(St,"")}return n==null?"":n}return}r=h(e);return this.each(function(n){var i;if(this.nodeType!==1){return}if(r){i=e.call(this,n,w(this).val())}else{i=e}if(i==null){i=""}else if(typeof i==="number"){i+=""}else if(Array.isArray(i)){i=w.map(i,function(e){return e==null?"":e+""})}t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()];if(!t||!("set"in t)||t.set(this,i,"value")===undefined){this.value=i}})}});w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return t!=null?t:wt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a=e.type==="select-one",s=a?null:[],l=a?o+1:i.length;if(o<0){r=l}else{r=a?o:0}for(;r<l;r++){n=i[r];if((n.selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!_(n.parentNode,"optgroup"))){t=w(n).val();if(a){return t}s.push(t)}}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--){r=i[a];if(r.selected=w.inArray(w.valHooks.option.get(r),o)>-1){n=true}}if(!n){e.selectedIndex=-1}return o}}}});w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t)){return e.checked=w.inArray(w(e).val(),t)>-1}}};if(!p.checkOn){w.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value}}});p.focusin="onfocusin"in e;var Et=/^(?:focusinfocus|focusoutblur)$/,At=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,r,i){var o,a,s,l,u,f,d,p,y=[r||m],v=c.call(t,"type")?t.type:t,b=c.call(t,"namespace")?t.namespace.split("."):[];a=p=s=r=r||m;if(r.nodeType===3||r.nodeType===8){return}if(Et.test(v+w.event.triggered)){return}if(v.indexOf(".")>-1){b=v.split(".");v=b.shift();b.sort()}u=v.indexOf(":")<0&&"on"+v;t=t[w.expando]?t:new w.Event(v,typeof t==="object"&&t);t.isTrigger=i?2:3;t.namespace=b.join(".");t.rnamespace=t.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;t.result=undefined;if(!t.target){t.target=r}n=n==null?[t]:w.makeArray(n,[t]);d=w.event.special[v]||{};if(!i&&d.trigger&&d.trigger.apply(r,n)===false){return}if(!i&&!d.noBubble&&!g(r)){l=d.delegateType||v;if(!Et.test(l+v)){a=a.parentNode}for(;a;a=a.parentNode){y.push(a);s=a}if(s===(r.ownerDocument||m)){y.push(s.defaultView||s.parentWindow||e)}}o=0;while((a=y[o++])&&!t.isPropagationStopped()){p=a;t.type=o>1?l:d.bindType||v;f=(Z.get(a,"events")||Object.create(null))[t.type]&&Z.get(a,"handle");if(f){f.apply(a,n)}f=u&&a[u];if(f&&f.apply&&G(a)){t.result=f.apply(a,n);if(t.result===false){t.preventDefault()}}}t.type=v;if(!i&&!t.isDefaultPrevented()){if((!d._default||d._default.apply(y.pop(),n)===false)&&G(r)){if(u&&h(r[v])&&!g(r)){s=r[u];if(s){r[u]=null}w.event.triggered=v;if(t.isPropagationStopped()){p.addEventListener(v,At)}r[v]();if(t.isPropagationStopped()){p.removeEventListener(v,At)}w.event.triggered=undefined;if(s){r[u]=s}}}}return t.result},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:true});w.event.trigger(r,null,t)}});w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n){return w.event.trigger(e,t,n,true)}}});if(!p.focusin){w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this.document||this,i=Z.access(r,t);if(!i){r.addEventListener(e,n,true)}Z.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,i=Z.access(r,t)-1;if(!i){r.removeEventListener(e,n,true);Z.remove(r,t)}else{Z.access(r,t,i)}}}})}var _t=e.location;var kt={guid:Date.now()};var Pt=/\?/;w.parseXML=function(t){var n;if(!t||typeof t!=="string"){return null}try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=undefined}if(!n||n.getElementsByTagName("parsererror").length){w.error("Invalid XML: "+t)}return n};var $t=/\[\]$/,Lt=/\r?\n/g,jt=/^(?:submit|button|image|reset|file)$/i,qt=/^(?:input|select|textarea|keygen)/i;function Dt(e,t,n,r){var i;if(Array.isArray(t)){w.each(t,function(t,i){if(n||$t.test(e)){r(e,i)}else{Dt(e+"["+(typeof i==="object"&&i!=null?t:"")+"]",i,n,r)}})}else if(!n&&b(t)==="object"){for(i in t){Dt(e+"["+i+"]",t[i],n,r)}}else{r(e,t)}}w.param=function(e,t){var n,r=[],i=function(e,t){var n=h(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(n==null?"":n)};if(e==null){return""}if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e)){w.each(e,function(){i(this.name,this.value)})}else{for(n in e){Dt(n,e[n],t,i)}}return r.join("&")};w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&qt.test(this.nodeName)&&!jt.test(e)&&(this.checked||!he.test(e))}).map(function(e,t){var n=w(this).val();if(n==null){return null}if(Array.isArray(n)){return w.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}})}return{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Mt=/%20/g,Ot=/#.*$/,Nt=/([?&])_=[^&]*/,It=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ht=/^(?:GET|HEAD)$/,Rt=/^\/\//,Bt={},zt={},Wt="*/".concat("*"),Xt=m.createElement("a");Xt.href=_t.href;function Ut(e){return function(t,n){if(typeof t!=="string"){n=t;t="*"}var r,i=0,o=t.toLowerCase().match(O)||[];if(h(n)){while(r=o[i++]){if(r[0]==="+"){r=r.slice(1)||"*";(e[r]=e[r]||[]).unshift(n)}else{(e[r]=e[r]||[]).push(n)}}}}}function Yt(e,t,n,r){var i={},o=e===zt;function a(s){var l;i[s]=true;w.each(e[s]||[],function(e,s){var u=s(t,n,r);if(typeof u==="string"&&!o&&!i[u]){t.dataTypes.unshift(u);a(u);return false}else if(o){return!(l=u)}});return l}return a(t.dataTypes[0])||!i["*"]&&a("*")}function Vt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t){if(t[n]!==undefined){(i[n]?e:r||(r={}))[n]=t[n]}}if(r){w.extend(true,e,r)}return e}function Gt(e,t,n){var r,i,o,a,s=e.contents,l=e.dataTypes;while(l[0]==="*"){l.shift();if(r===undefined){r=e.mimeType||t.getResponseHeader("Content-Type")}}if(r){for(i in s){if(s[i]&&s[i].test(r)){l.unshift(i);break}}}if(l[0]in n){o=l[0]}else{for(i in n){if(!l[0]||e.converters[i+" "+l[0]]){o=i;break}if(!a){a=i}}o=o||a}if(o){if(o!==l[0]){l.unshift(o)}return n[o]}}function Kt(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1]){for(a in e.converters){u[a.toLowerCase()]=e.converters[a]}}o=c.shift();while(o){if(e.responseFields[o]){n[e.responseFields[o]]=t}if(!l&&r&&e.dataFilter){t=e.dataFilter(t,e.dataType)}l=o;o=c.shift();if(o){if(o==="*"){o=l}else if(l!=="*"&&l!==o){a=u[l+" "+o]||u["* "+o];if(!a){for(i in u){s=i.split(" ");if(s[1]===o){a=u[l+" "+s[0]]||u["* "+s[0]];if(a){if(a===true){a=u[i]}else if(u[i]!==true){o=s[0];c.unshift(s[1])}break}}}}if(a!==true){if(a&&e.throws){t=a(t)}else{try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+o}}}}}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:_t.href,type:"GET",isLocal:Ft.test(_t.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Wt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(e,t){return t?Vt(Vt(e,w.ajaxSettings),t):Vt(w.ajaxSettings,e)},ajaxPrefilter:Ut(Bt),ajaxTransport:Ut(zt),ajax:function(t,n){if(typeof t==="object"){n=t;t=undefined}n=n||{};var r,i,o,a,s,l,u,c,f,d,p=w.ajaxSetup({},n),h=p.context||p,g=p.context&&(h.nodeType||h.jquery)?w(h):w.event,y=w.Deferred(),v=w.Callbacks("once memory"),b=p.statusCode||{},x={},T={},C="canceled",S={readyState:0,getResponseHeader:function(e){var t;if(u){if(!a){a={};while(t=It.exec(o)){a[t[1].toLowerCase()+" "]=(a[t[1].toLowerCase()+" "]||[]).concat(t[2])}}t=a[e.toLowerCase()+" "]}return t==null?null:t.join(", ")},getAllResponseHeaders:function(){return u?o:null},setRequestHeader:function(e,t){if(u==null){e=T[e.toLowerCase()]=T[e.toLowerCase()]||e;x[e]=t}return this},overrideMimeType:function(e){if(u==null){p.mimeType=e}return this},statusCode:function(e){var t;if(e){if(u){S.always(e[S.status])}else{for(t in e){b[t]=[b[t],e[t]]}}}return this},abort:function(e){var t=e||C;if(r){r.abort(t)}E(0,t);return this}};y.promise(S);p.url=((t||p.url||_t.href)+"").replace(Rt,_t.protocol+"//");p.type=n.method||n.type||p.method||p.type;p.dataTypes=(p.dataType||"*").toLowerCase().match(O)||[""];if(p.crossDomain==null){l=m.createElement("a");try{l.href=p.url;l.href=l.href;p.crossDomain=Xt.protocol+"//"+Xt.host!==l.protocol+"//"+l.host}catch(e){p.crossDomain=true}}if(p.data&&p.processData&&typeof p.data!=="string"){p.data=w.param(p.data,p.traditional)}Yt(Bt,p,n,S);if(u){return S}c=w.event&&p.global;if(c&&w.active++===0){w.event.trigger("ajaxStart")}p.type=p.type.toUpperCase();p.hasContent=!Ht.test(p.type);i=p.url.replace(Ot,"");if(!p.hasContent){d=p.url.slice(i.length);if(p.data&&(p.processData||typeof p.data==="string")){i+=(Pt.test(i)?"&":"?")+p.data;delete p.data}if(p.cache===false){i=i.replace(Nt,"$1");d=(Pt.test(i)?"&":"?")+"_="+kt.guid+++d}p.url=i+d}else if(p.data&&p.processData&&(p.contentType||"").indexOf("application/x-www-form-urlencoded")===0){p.data=p.data.replace(Mt,"+")}if(p.ifModified){if(w.lastModified[i]){S.setRequestHeader("If-Modified-Since",w.lastModified[i])}if(w.etag[i]){S.setRequestHeader("If-None-Match",w.etag[i])}}if(p.data&&p.hasContent&&p.contentType!==false||n.contentType){S.setRequestHeader("Content-Type",p.contentType)}S.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+(p.dataTypes[0]!=="*"?", "+Wt+"; q=0.01":""):p.accepts["*"]);for(f in p.headers){S.setRequestHeader(f,p.headers[f])}if(p.beforeSend&&(p.beforeSend.call(h,S,p)===false||u)){return S.abort()}C="abort";v.add(p.complete);S.done(p.success);S.fail(p.error);r=Yt(zt,p,n,S);if(!r){E(-1,"No Transport")}else{S.readyState=1;if(c){g.trigger("ajaxSend",[S,p])}if(u){return S}if(p.async&&p.timeout>0){s=e.setTimeout(function(){S.abort("timeout")},p.timeout)}try{u=false;r.send(x,E)}catch(e){if(u){throw e}E(-1,e)}}function E(t,n,a,l){var f,d,m,x,T,C=n;if(u){return}u=true;if(s){e.clearTimeout(s)}r=undefined;o=l||"";S.readyState=t>0?4:0;f=t>=200&&t<300||t===304;if(a){x=Gt(p,S,a)}if(!f&&w.inArray("script",p.dataTypes)>-1){p.converters["text script"]=function(){}}x=Kt(p,x,S,f);if(f){if(p.ifModified){T=S.getResponseHeader("Last-Modified");if(T){w.lastModified[i]=T}T=S.getResponseHeader("etag");if(T){w.etag[i]=T}}if(t===204||p.type==="HEAD"){C="nocontent"}else if(t===304){C="notmodified"}else{C=x.state;d=x.data;m=x.error;f=!m}}else{m=C;if(t||!C){C="error";if(t<0){t=0}}}S.status=t;S.statusText=(n||C)+"";if(f){y.resolveWith(h,[d,C,S])}else{y.rejectWith(h,[S,C,m])}S.statusCode(b);b=undefined;if(c){g.trigger(f?"ajaxSuccess":"ajaxError",[S,p,f?d:m])}v.fireWith(h,[S,C]);if(c){g.trigger("ajaxComplete",[S,p]);if(!--w.active){w.event.trigger("ajaxStop")}}}return S},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,undefined,t,"script")}});w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){if(h(n)){i=i||r;r=n;n=undefined}return w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}});w.ajaxPrefilter(function(e){var t;for(t in e.headers){if(t.toLowerCase()==="content-type"){e.contentType=e.headers[t]||""}}});w._evalUrl=function(e,t,n){return w.ajax({url:e,type:"GET",dataType:"script",cache:true,async:false,global:false,converters:{"text script":function(){}},dataFilter:function(e){w.globalEval(e,t,n)}})};w.fn.extend({wrapAll:function(e){var t;if(this[0]){if(h(e)){e=e.call(this[0])}t=w(e,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){t.insertBefore(this[0])}t.map(function(){var e=this;while(e.firstElementChild){e=e.firstElementChild}return e}).append(this)}return this},wrapInner:function(e){if(h(e)){return this.each(function(t){w(this).wrapInner(e.call(this,t))})}return this.each(function(){var t=w(this),n=t.contents();if(n.length){n.wrapAll(e)}else{t.append(e)}})},wrap:function(e){var t=h(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)});return this}});w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)};w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)};w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Zt={0:200,1223:204},Qt=w.ajaxSettings.xhr();p.cors=!!Qt&&"withCredentials"in Qt;p.ajax=Qt=!!Qt;w.ajaxTransport(function(t){var n,r;if(p.cors||Qt&&!t.crossDomain){return{send:function(i,o){var a,s=t.xhr();s.open(t.type,t.url,t.async,t.username,t.password);if(t.xhrFields){for(a in t.xhrFields){s[a]=t.xhrFields[a]}}if(t.mimeType&&s.overrideMimeType){s.overrideMimeType(t.mimeType)}if(!t.crossDomain&&!i["X-Requested-With"]){i["X-Requested-With"]="XMLHttpRequest"}for(a in i){s.setRequestHeader(a,i[a])}n=function(e){return function(){if(n){n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null;if(e==="abort"){s.abort()}else if(e==="error"){if(typeof s.status!=="number"){o(0,"error")}else{o(s.status,s.statusText)}}else{o(Zt[s.status]||s.status,s.statusText,(s.responseType||"text")!=="text"||typeof s.responseText!=="string"?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders())}}}};s.onload=n();r=s.onerror=s.ontimeout=n("error");if(s.onabort!==undefined){s.onabort=r}else{s.onreadystatechange=function(){if(s.readyState===4){e.setTimeout(function(){if(n){r()}})}}}n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n){throw e}}},abort:function(){if(n){n()}}}}});w.ajaxPrefilter(function(e){if(e.crossDomain){e.contents.script=false}});w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){w.globalEval(e);return e}}});w.ajaxPrefilter("script",function(e){if(e.cache===undefined){e.cache=false}if(e.crossDomain){e.type="GET"}});w.ajaxTransport("script",function(e){if(e.crossDomain||e.scriptAttrs){var t,n;return{send:function(r,i){t=w("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove();n=null;if(e){i(e.type==="error"?404:200,e.type)}});m.head.appendChild(t[0])},abort:function(){if(n){n()}}}}});var Jt=[],en=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Jt.pop()||w.expando+"_"+kt.guid++;this[e]=true;return e}});w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=t.jsonp!==false&&(en.test(t.url)?"url":typeof t.data==="string"&&(t.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&en.test(t.data)&&"data");if(s||t.dataTypes[0]==="jsonp"){i=t.jsonpCallback=h(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback;if(s){t[s]=t[s].replace(en,"$1"+i)}else if(t.jsonp!==false){t.url+=(Pt.test(t.url)?"&":"?")+t.jsonp+"="+i}t.converters["script json"]=function(){if(!a){w.error(i+" was not called")}return a[0]};t.dataTypes[0]="json";o=e[i];e[i]=function(){a=arguments};r.always(function(){if(o===undefined){w(e).removeProp(i)}else{e[i]=o}if(t[i]){t.jsonpCallback=n.jsonpCallback;Jt.push(i)}if(a&&h(o)){o(a[0])}a=o=undefined});return"script"}});p.createHTMLDocument=function(){var e=m.implementation.createHTMLDocument("").body;e.innerHTML="<form></form><form></form>";return e.childNodes.length===2}();w.parseHTML=function(e,t,n){if(typeof e!=="string"){return[]}if(typeof t==="boolean"){n=t;t=false}var r,i,o;if(!t){if(p.createHTMLDocument){t=m.implementation.createHTMLDocument("");r=t.createElement("base");r.href=m.location.href;t.head.appendChild(r)}else{t=m}}i=k.exec(e);o=!n&&[];if(i){return[t.createElement(i[1])]}i=we([e],t,o);if(o&&o.length){w(o).remove()}return w.merge([],i.childNodes)};w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");if(s>-1){r=wt(e.slice(s));e=e.slice(0,s)}if(h(t)){n=t;t=undefined}else if(t&&typeof t==="object"){i="POST"}if(a.length>0){w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments;a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})})}return this};w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length};w.offset={setOffset:function(e,t,n){var r,i,o,a,s,l,u,c=w.css(e,"position"),f=w(e),d={};if(c==="static"){e.style.position="relative"}s=f.offset();o=w.css(e,"top");l=w.css(e,"left");u=(c==="absolute"||c==="fixed")&&(o+l).indexOf("auto")>-1;if(u){r=f.position();a=r.top;i=r.left}else{a=parseFloat(o)||0;i=parseFloat(l)||0}if(h(t)){t=t.call(e,n,w.extend({},s))}if(t.top!=null){d.top=t.top-s.top+a}if(t.left!=null){d.left=t.left-s.left+i}if("using"in t){t.using.call(e,d)}else{if(typeof d.top==="number"){d.top+="px"}if(typeof d.left==="number"){d.left+="px"}f.css(d)}}};w.fn.extend({offset:function(e){if(arguments.length){return e===undefined?this:this.each(function(t){w.offset.setOffset(this,e,t)})}var t,n,r=this[0];if(!r){return}if(!r.getClientRects().length){return{top:0,left:0}}t=r.getBoundingClientRect();n=r.ownerDocument.defaultView;return{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}},position:function(){if(!this[0]){return}var e,t,n,r=this[0],i={top:0,left:0};if(w.css(r,"position")==="fixed"){t=r.getBoundingClientRect()}else{t=this.offset();n=r.ownerDocument;e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&w.css(e,"position")==="static"){e=e.parentNode}if(e&&e!==r&&e.nodeType===1){i=w(e).offset();i.top+=w.css(e,"borderTopWidth",true);i.left+=w.css(e,"borderLeftWidth",true)}}return{top:t.top-i.top-w.css(r,"marginTop",true),left:t.left-i.left-w.css(r,"marginLeft",true)}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&w.css(e,"position")==="static"){e=e.offsetParent}return e||ae})}});w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return W(this,function(e,r,i){var o;if(g(e)){o=e}else if(e.nodeType===9){o=e.defaultView}if(i===undefined){return o?o[t]:e[r]}if(o){o.scrollTo(!n?i:o.pageXOffset,n?i:o.pageYOffset)}else{e[r]=i}},e,r,arguments.length)}});w.each(["top","left"],function(e,t){w.cssHooks[t]=Ue(p.pixelPosition,function(e,n){if(n){n=Xe(e,t);return Re.test(n)?w(e).position()[t]+"px":n}})});w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||typeof i!=="boolean"),s=n||(i===true||o===true?"margin":"border");return W(this,function(t,n,i){var o;if(g(t)){return r.indexOf("outer")===0?t["inner"+e]:t.document.documentElement["client"+e]}if(t.nodeType===9){o=t.documentElement;return Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])}return i===undefined?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:undefined,a)}})});w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}});w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}});w.each(("blur focus focusin focusout resize scroll click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup contextmenu").split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}});var tn=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.proxy=function(e,t){var n,r,o;if(typeof t==="string"){n=e[t];t=e;e=n}if(!h(e)){return undefined}r=i.call(arguments,2);o=function(){return e.apply(t||this,r.concat(i.call(arguments)))};o.guid=e.guid=e.guid||w.guid++;return o};w.holdReady=function(e){if(e){w.readyWait++}else{w.ready(true)}};w.isArray=Array.isArray;w.parseJSON=JSON.parse;w.nodeName=_;w.isFunction=h;w.isWindow=g;w.camelCase=V;w.type=b;w.now=Date.now;w.isNumeric=function(e){var t=w.type(e);return(t==="number"||t==="string")&&!isNaN(e-parseFloat(e))};w.trim=function(e){return e==null?"":(e+"").replace(tn,"")};if(typeof define==="function"&&define.amd){define("jquery",[],function(){return w})}var nn=e.jQuery,rn=e.$;w.noConflict=function(t){if(e.$===w){e.$=rn}if(t&&e.jQuery===w){e.jQuery=nn}return w};if(typeof t==="undefined"){e.jQuery=e.$=w}return w})},{}],11:[function(e,t,n){window.MutationObserver||(window.MutationObserver=function(e){function t(e){this.i=[];this.m=e}function n(e){(function n(){var r=e.takeRecords();r.length&&e.m(r,e);e.h=setTimeout(n,t._period)})()}function r(t){var n={type:null,target:null,addedNodes:[],removedNodes:[],previousSibling:null,nextSibling:null,attributeName:null,attributeNamespace:null,oldValue:null},r;for(r in t)n[r]!==e&&t[r]!==e&&(n[r]=t[r]);return n}function i(e,t){var n=u(e,t);return function(i){var o=i.length;t.a&&3===e.nodeType&&e.nodeValue!==n.a&&i.push(new r({type:"characterData",target:e,oldValue:n.a}));t.b&&n.b&&s(i,e,n.b,t.f);if(t.c||t.g)var a=l(i,e,n,t);if(a||i.length!==o)n=u(e,t)}}function o(e,t){return t.value}function a(e,t){return"style"!==t.name?t.value:e.style.cssText}function s(t,n,i,o){for(var a={},s=n.attributes,l,u,c=s.length;c--;)l=s[c],u=l.name,o&&o[u]===e||(g(n,l)!==i[u]&&t.push(r({type:"attributes",target:n,attributeName:u,oldValue:i[u],attributeNamespace:l.namespaceURI})),a[u]=!0);for(u in i)a[u]||t.push(r({target:n,type:"attributes",attributeName:u,oldValue:i[u]}))}function l(t,n,i,o){function a(e,n,i,a,u){var c=e.length-1;u=-~((c-u)/2);for(var f,d,p;p=e.pop();)f=i[p.j],d=a[p.l],o.c&&u&&Math.abs(p.j-p.l)>=c&&(t.push(r({type:"childList",target:n,addedNodes:[f],removedNodes:[f],nextSibling:f.nextSibling,previousSibling:f.previousSibling})),u--),o.b&&d.b&&s(t,f,d.b,o.f),o.a&&3===f.nodeType&&f.nodeValue!==d.a&&t.push(r({type:"characterData",target:f,oldValue:d.a})),o.g&&l(f,d)}function l(n,i){for(var f=n.childNodes,d=i.c,h=f.length,g=d?d.length:0,m,y,v,b,x,w=0,T=0,C=0;T<h||C<g;)b=f[T],x=(v=d[C])&&v.node,b===x?(o.b&&v.b&&s(t,b,v.b,o.f),o.a&&v.a!==e&&b.nodeValue!==v.a&&t.push(r({type:"characterData",target:b,oldValue:v.a})),y&&a(y,n,f,d,w),o.g&&(b.childNodes.length||v.c&&v.c.length)&&l(b,v),T++,C++):(u=!0,m||(m={},y=[]),b&&(m[v=c(b)]||(m[v]=!0,-1===(v=p(d,b,C,"node"))?o.c&&(t.push(r({type:"childList",target:n,addedNodes:[b],nextSibling:b.nextSibling,previousSibling:b.previousSibling})),w++):y.push({j:T,l:v})),T++),x&&x!==f[T]&&(m[v=c(x)]||(m[v]=!0,-1===(v=p(f,x,T))?o.c&&(t.push(r({type:"childList",target:i.node,removedNodes:[x],nextSibling:d[C+1],previousSibling:d[C-1]})),w--):y.push({j:v,l:C})),C++));y&&a(y,n,f,d,w)}var u;l(n,i);return u}function u(e,t){var n=!0;return function e(r){var i={node:r};!t.a||3!==r.nodeType&&8!==r.nodeType?(t.b&&n&&1===r.nodeType&&(i.b=d(r.attributes,function(e,n){if(!t.f||t.f[n.name])e[n.name]=g(r,n);return e},{})),n&&(t.c||t.a||t.b&&t.g)&&(i.c=f(r.childNodes,e)),n=t.g):i.a=r.nodeValue;return i}(e)}function c(e){try{return e.id||(e.mo_id=e.mo_id||m++)}catch(t){try{return e.nodeValue}catch(e){return m++}}}function f(e,t){for(var n=[],r=0;r<e.length;r++)n[r]=t(e[r],r,e);return n}function d(e,t,n){for(var r=0;r<e.length;r++)n=t(n,e[r],r,e);return n}function p(e,t,n,r){for(;n<e.length;n++)if((r?e[n][r]:e[n])===t)return n;return-1}t._period=30;t.prototype={observe:function(e,t){for(var r={b:!!(t.attributes||t.attributeFilter||t.attributeOldValue),c:!!t.childList,g:!!t.subtree,a:!(!t.characterData&&!t.characterDataOldValue)},o=this.i,a=0;a<o.length;a++)o[a].s===e&&o.splice(a,1);t.attributeFilter&&(r.f=d(t.attributeFilter,function(e,t){e[t]=!0;return e},{}));o.push({s:e,o:i(e,r)});this.h||n(this)},takeRecords:function(){for(var e=[],t=this.i,n=0;n<t.length;n++)t[n].o(e);return e},disconnect:function(){this.i=[];clearTimeout(this.h);this.h=null}};var h=document.createElement("i");h.style.top=0;var g=(h="null"!=h.attributes.style.value)?o:a,m=1;return t}(void 0))},{}],12:[function(e,t,n){t.exports=function(e,t,n){var r=(2<<Math.log(t.length-1)/Math.LN2)-1;var i=-~(1.6*r*n/t.length);var o="";while(true){var a=e(i);var s=i;while(s--){o+=t[a[s]&r]||"";if(o.length===+n)return o}}}},{}],13:[function(e,t,n){var r=t.exports={};var i;var o;function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){i=setTimeout}else{i=a}}catch(e){i=a}try{if(typeof clearTimeout==="function"){o=clearTimeout}else{o=s}}catch(e){o=s}})();function l(e){if(i===setTimeout){return setTimeout(e,0)}if((i===a||!i)&&setTimeout){i=setTimeout;return setTimeout(e,0)}try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}function u(e){if(o===clearTimeout){return clearTimeout(e)}if((o===s||!o)&&clearTimeout){o=clearTimeout;return clearTimeout(e)}try{return o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}var c=[];var f=false;var d;var p=-1;function h(){if(!f||!d){return}f=false;if(d.length){c=d.concat(c)}else{p=-1}if(c.length){g()}}function g(){if(f){return}var e=l(h);f=true;var t=c.length;while(t){d=c;c=[];while(++p<t){if(d){d[p].run()}}p=-1;t=c.length}d=null;f=false;u(e)}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1){for(var n=1;n<arguments.length;n++){t[n-1]=arguments[n]}}c.push(new m(e,t));if(c.length===1&&!f){l(g)}};function m(e,t){this.fun=e;this.array=t}m.prototype.run=function(){this.fun.apply(null,this.array)};r.title="browser";r.browser=true;r.env={};r.argv=[];r.version="";r.versions={};function y(){}r.on=y;r.addListener=y;r.once=y;r.off=y;r.removeListener=y;r.removeAllListeners=y;r.emit=y;r.prependListener=y;r.prependOnceListener=y;r.listeners=function(e){return[]};r.binding=function(e){throw new Error("process.binding is not supported")};r.cwd=function(){return"/"};r.chdir=function(e){throw new Error("process.chdir is not supported")};r.umask=function(){return 0}},{}],14:[function(e,t,n){(function(e){"use strict";function n(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})}function r(e){var t=this;return new t(function(t,n){if(!(e&&typeof e.length!=="undefined")){return n(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"))}var r=Array.prototype.slice.call(e);if(r.length===0)return t([]);var i=r.length;function o(e,n){if(n&&(typeof n==="object"||typeof n==="function")){var a=n.then;if(typeof a==="function"){a.call(n,function(t){o(e,t)},function(n){r[e]={status:"rejected",reason:n};if(--i===0){t(r)}});return}}r[e]={status:"fulfilled",value:n};if(--i===0){t(r)}}for(var a=0;a<r.length;a++){o(a,r[a])}})}var i=setTimeout;function o(e){return Boolean(e&&typeof e.length!=="undefined")}function a(){}function s(e,t){return function(){e.apply(t,arguments)}}function l(e){if(!(this instanceof l))throw new TypeError("Promises must be constructed via new");if(typeof e!=="function")throw new TypeError("not a function");this._state=0;this._handled=false;this._value=undefined;this._deferreds=[];h(e,this)}function u(e,t){while(e._state===3){e=e._value}if(e._state===0){e._deferreds.push(t);return}e._handled=true;l._immediateFn(function(){var n=e._state===1?t.onFulfilled:t.onRejected;if(n===null){(e._state===1?c:f)(t.promise,e._value);return}var r;try{r=n(e._value)}catch(e){f(t.promise,e);return}c(t.promise,r)})}function c(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&(typeof t==="object"||typeof t==="function")){var n=t.then;if(t instanceof l){e._state=3;e._value=t;d(e);return}else if(typeof n==="function"){h(s(n,t),e);return}}e._state=1;e._value=t;d(e)}catch(t){f(e,t)}}function f(e,t){e._state=2;e._value=t;d(e)}function d(e){if(e._state===2&&e._deferreds.length===0){l._immediateFn(function(){if(!e._handled){l._unhandledRejectionFn(e._value)}})}for(var t=0,n=e._deferreds.length;t<n;t++){u(e,e._deferreds[t])}e._deferreds=null}function p(e,t,n){this.onFulfilled=typeof e==="function"?e:null;this.onRejected=typeof t==="function"?t:null;this.promise=n}function h(e,t){var n=false;try{e(function(e){if(n)return;n=true;c(t,e)},function(e){if(n)return;n=true;f(t,e)})}catch(e){if(n)return;n=true;f(t,e)}}l.prototype["catch"]=function(e){return this.then(null,e)};l.prototype.then=function(e,t){var n=new this.constructor(a);u(this,new p(e,t,n));return n};l.prototype["finally"]=n;l.all=function(e){return new l(function(t,n){if(!o(e)){return n(new TypeError("Promise.all accepts an array"))}var r=Array.prototype.slice.call(e);if(r.length===0)return t([]);var i=r.length;function a(e,o){try{if(o&&(typeof o==="object"||typeof o==="function")){var s=o.then;if(typeof s==="function"){s.call(o,function(t){a(e,t)},n);return}}r[e]=o;if(--i===0){t(r)}}catch(e){n(e)}}for(var s=0;s<r.length;s++){a(s,r[s])}})};l.allSettled=r;l.resolve=function(e){if(e&&typeof e==="object"&&e.constructor===l){return e}return new l(function(t){t(e)})};l.reject=function(e){return new l(function(t,n){n(e)})};l.race=function(e){return new l(function(t,n){if(!o(e)){return n(new TypeError("Promise.race accepts an array"))}for(var r=0,i=e.length;r<i;r++){l.resolve(e[r]).then(t,n)}})};l._immediateFn=typeof e==="function"&&function(t){e(t)}||function(e){i(e,0)};l._unhandledRejectionFn=function e(t){if(typeof console!=="undefined"&&console){console.warn("Possible Unhandled Promise Rejection:",t)}};t.exports=l}).call(this,e("timers").setImmediate)},{timers:25}],15:[function(e,t,n){"use strict";t.exports=e("./lib/index")},{"./lib/index":19}],16:[function(e,t,n){"use strict";var r=e("./random/random-from-seed");var i="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";var o;var a;var s;function l(){s=false}function u(e){if(!e){if(o!==i){o=i;l()}return}if(e===o){return}if(e.length!==i.length){throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. You submitted "+e.length+" characters: "+e)}var t=e.split("").filter(function(e,t,n){return t!==n.lastIndexOf(e)});if(t.length){throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. These characters were not unique: "+t.join(", "))}o=e;l()}function c(e){u(e);return o}function f(e){r.seed(e);if(a!==e){l();a=e}}function d(){if(!o){u(i)}var e=o.split("");var t=[];var n=r.nextValue();var a;while(e.length>0){n=r.nextValue();a=Math.floor(n*e.length);t.push(e.splice(a,1)[0])}return t.join("")}function p(){if(s){return s}s=d();return s}function h(e){var t=p();return t[e]}function g(){return o||i}t.exports={get:g,characters:c,seed:f,lookup:h,shuffled:p}},{"./random/random-from-seed":22}],17:[function(e,t,n){"use strict";var r=e("./generate");var i=e("./alphabet");var o=1567752802062;var a=7;var s;var l;function u(e){var t="";var n=Math.floor((Date.now()-o)*.001);if(n===l){s++}else{s=0;l=n}t=t+r(a);t=t+r(e);if(s>0){t=t+r(s)}t=t+r(n);return t}t.exports=u},{"./alphabet":16,"./generate":18}],18:[function(e,t,n){"use strict";var r=e("./alphabet");var i=e("./random/random-byte");var o=e("nanoid/format");function a(e){var t=0;var n;var a="";while(!n){a=a+o(i,r.get(),1);n=e<Math.pow(16,t+1);t++}return a}t.exports=a},{"./alphabet":16,"./random/random-byte":21,"nanoid/format":12}],19:[function(e,t,n){"use strict";var r=e("./alphabet");var i=e("./build");var o=e("./is-valid");var a=e("./util/cluster-worker-id")||0;function s(e){r.seed(e);return t.exports}function l(e){a=e;return t.exports}function u(e){if(e!==undefined){r.characters(e)}return r.shuffled()}function c(){return i(a)}t.exports=c;t.exports.generate=c;t.exports.seed=s;t.exports.worker=l;t.exports.characters=u;t.exports.isValid=o},{"./alphabet":16,"./build":17,"./is-valid":20,"./util/cluster-worker-id":23}],20:[function(e,t,n){"use strict";var r=e("./alphabet");function i(e){if(!e||typeof e!=="string"||e.length<6){return false}var t=new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]");return!t.test(e)}t.exports=i},{"./alphabet":16}],21:[function(e,t,n){"use strict";var r=typeof window==="object"&&(window.crypto||window.msCrypto);var i;if(!r||!r.getRandomValues){i=function(e){var t=[];for(var n=0;n<e;n++){t.push(Math.floor(Math.random()*256))}return t}}else{i=function(e){return r.getRandomValues(new Uint8Array(e))}}t.exports=i},{}],22:[function(e,t,n){"use strict";var r=1;function i(){r=(r*9301+49297)%233280;return r/233280}function o(e){r=e}t.exports={nextValue:i,seed:o}},{}],23:[function(e,t,n){"use strict";t.exports=0},{}],24:[function(e,t,n){(function(e,r){typeof n==="object"&&typeof t!=="undefined"?r(n):typeof define==="function"&&define.amd?define(["exports"],r):(e=e||self,r(e.throttleDebounce={}))})(this,function(e){"use strict";function t(e,t,n,r){var i;var o=false;var a=0;function s(){if(i){clearTimeout(i)}}function l(){s();o=true}if(typeof t!=="boolean"){r=n;n=t;t=undefined}function u(){for(var l=arguments.length,u=new Array(l),c=0;c<l;c++){u[c]=arguments[c]}var f=this;var d=Date.now()-a;if(o){return}function p(){a=Date.now();n.apply(f,u)}function h(){i=undefined}if(r&&!i){p()}s();if(r===undefined&&d>e){p()}else if(t!==true){i=setTimeout(r?h:p,r===undefined?e-d:e)}}u.cancel=l;return u}function n(e,n,r){return r===undefined?t(e,n,false):t(e,r,n!==false)}e.debounce=n;e.throttle=t;Object.defineProperty(e,"__esModule",{value:true})})},{}],25:[function(e,t,n){(function(t,r){var i=e("process/browser.js").nextTick;var o=Function.prototype.apply;var a=Array.prototype.slice;var s={};var l=0;n.setTimeout=function(){return new u(o.call(setTimeout,window,arguments),clearTimeout)};n.setInterval=function(){return new u(o.call(setInterval,window,arguments),clearInterval)};n.clearTimeout=n.clearInterval=function(e){e.close()};function u(e,t){this._id=e;this._clearFn=t}u.prototype.unref=u.prototype.ref=function(){};u.prototype.close=function(){this._clearFn.call(window,this._id)};n.enroll=function(e,t){clearTimeout(e._idleTimeoutId);e._idleTimeout=t};n.unenroll=function(e){clearTimeout(e._idleTimeoutId);e._idleTimeout=-1};n._unrefActive=n.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;if(t>=0){e._idleTimeoutId=setTimeout(function t(){if(e._onTimeout)e._onTimeout()},t)}};n.setImmediate=typeof t==="function"?t:function(e){var t=l++;var r=arguments.length<2?false:a.call(arguments,1);s[t]=true;i(function i(){if(s[t]){if(r){e.apply(null,r)}else{e.call(null)}n.clearImmediate(t)}});return t};n.clearImmediate=typeof r==="function"?r:function(e){delete s[e]}}).call(this,e("timers").setImmediate,e("timers").clearImmediate)},{"process/browser.js":13,timers:25}],26:[function(e,t,n){(function(e,r){typeof n==="object"&&typeof t!=="undefined"?r(n):typeof define==="function"&&define.amd?define(["exports"],r):r(e.WHATWGFetch={})})(this,function(e){"use strict";var t=typeof globalThis!=="undefined"&&globalThis||typeof self!=="undefined"&&self||typeof t!=="undefined"&&t;var n={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{new Blob;return true}catch(e){return false}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};function r(e){return e&&DataView.prototype.isPrototypeOf(e)}if(n.arrayBuffer){var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"];var o=ArrayBuffer.isView||function(e){return e&&i.indexOf(Object.prototype.toString.call(e))>-1}}function a(e){if(typeof e!=="string"){e=String(e)}if(/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||e===""){throw new TypeError("Invalid character in header field name")}return e.toLowerCase()}function s(e){if(typeof e!=="string"){e=String(e)}return e}function l(e){var t={next:function(){var t=e.shift();return{done:t===undefined,value:t}}};if(n.iterable){t[Symbol.iterator]=function(){return t}}return t}function u(e){this.map={};if(e instanceof u){e.forEach(function(e,t){this.append(t,e)},this)}else if(Array.isArray(e)){e.forEach(function(e){this.append(e[0],e[1])},this)}else if(e){Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}}u.prototype.append=function(e,t){e=a(e);t=s(t);var n=this.map[e];this.map[e]=n?n+", "+t:t};u.prototype["delete"]=function(e){delete this.map[a(e)]};u.prototype.get=function(e){e=a(e);return this.has(e)?this.map[e]:null};u.prototype.has=function(e){return this.map.hasOwnProperty(a(e))};u.prototype.set=function(e,t){this.map[a(e)]=s(t)};u.prototype.forEach=function(e,t){for(var n in this.map){if(this.map.hasOwnProperty(n)){e.call(t,this.map[n],n,this)}}};u.prototype.keys=function(){var e=[];this.forEach(function(t,n){e.push(n)});return l(e)};u.prototype.values=function(){var e=[];this.forEach(function(t){e.push(t)});return l(e)};u.prototype.entries=function(){var e=[];this.forEach(function(t,n){e.push([n,t])});return l(e)};if(n.iterable){u.prototype[Symbol.iterator]=u.prototype.entries}function c(e){if(e.bodyUsed){return Promise.reject(new TypeError("Already read"))}e.bodyUsed=true}function f(e){return new Promise(function(t,n){e.onload=function(){t(e.result)};e.onerror=function(){n(e.error)}})}function d(e){var t=new FileReader;var n=f(t);t.readAsArrayBuffer(e);return n}function p(e){var t=new FileReader;var n=f(t);t.readAsText(e);return n}function h(e){var t=new Uint8Array(e);var n=new Array(t.length);for(var r=0;r<t.length;r++){n[r]=String.fromCharCode(t[r])}return n.join("")}function g(e){if(e.slice){return e.slice(0)}else{var t=new Uint8Array(e.byteLength);t.set(new Uint8Array(e));return t.buffer}}function m(){this.bodyUsed=false;this._initBody=function(e){this.bodyUsed=this.bodyUsed;this._bodyInit=e;if(!e){this._bodyText=""}else if(typeof e==="string"){this._bodyText=e}else if(n.blob&&Blob.prototype.isPrototypeOf(e)){this._bodyBlob=e}else if(n.formData&&FormData.prototype.isPrototypeOf(e)){this._bodyFormData=e}else if(n.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)){this._bodyText=e.toString()}else if(n.arrayBuffer&&n.blob&&r(e)){this._bodyArrayBuffer=g(e.buffer);this._bodyInit=new Blob([this._bodyArrayBuffer])}else if(n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||o(e))){this._bodyArrayBuffer=g(e)}else{this._bodyText=e=Object.prototype.toString.call(e)}if(!this.headers.get("content-type")){if(typeof e==="string"){this.headers.set("content-type","text/plain;charset=UTF-8")}else if(this._bodyBlob&&this._bodyBlob.type){this.headers.set("content-type",this._bodyBlob.type)}else if(n.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)){this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8")}}};if(n.blob){this.blob=function(){var e=c(this);if(e){return e}if(this._bodyBlob){return Promise.resolve(this._bodyBlob)}else if(this._bodyArrayBuffer){return Promise.resolve(new Blob([this._bodyArrayBuffer]))}else if(this._bodyFormData){throw new Error("could not read FormData body as blob")}else{return Promise.resolve(new Blob([this._bodyText]))}};this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=c(this);if(e){return e}if(ArrayBuffer.isView(this._bodyArrayBuffer)){return Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength))}else{return Promise.resolve(this._bodyArrayBuffer)}}else{return this.blob().then(d)}}}this.text=function(){var e=c(this);if(e){return e}if(this._bodyBlob){return p(this._bodyBlob)}else if(this._bodyArrayBuffer){return Promise.resolve(h(this._bodyArrayBuffer))}else if(this._bodyFormData){throw new Error("could not read FormData body as text")}else{return Promise.resolve(this._bodyText)}};if(n.formData){this.formData=function(){return this.text().then(x)}}this.json=function(){return this.text().then(JSON.parse)};return this}var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(e){var t=e.toUpperCase();return y.indexOf(t)>-1?t:e}function b(e,t){if(!(this instanceof b)){throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')}t=t||{};var n=t.body;if(e instanceof b){if(e.bodyUsed){throw new TypeError("Already read")}this.url=e.url;this.credentials=e.credentials;if(!t.headers){this.headers=new u(e.headers)}this.method=e.method;this.mode=e.mode;this.signal=e.signal;if(!n&&e._bodyInit!=null){n=e._bodyInit;e.bodyUsed=true}}else{this.url=String(e)}this.credentials=t.credentials||this.credentials||"same-origin";if(t.headers||!this.headers){this.headers=new u(t.headers)}this.method=v(t.method||this.method||"GET");this.mode=t.mode||this.mode||null;this.signal=t.signal||this.signal;this.referrer=null;if((this.method==="GET"||this.method==="HEAD")&&n){throw new TypeError("Body not allowed for GET or HEAD requests")}this._initBody(n);if(this.method==="GET"||this.method==="HEAD"){if(t.cache==="no-store"||t.cache==="no-cache"){var r=/([?&])_=[^&]*/;if(r.test(this.url)){this.url=this.url.replace(r,"$1_="+(new Date).getTime())}else{var i=/\?/;this.url+=(i.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})};function x(e){var t=new FormData;e.trim().split("&").forEach(function(e){if(e){var n=e.split("=");var r=n.shift().replace(/\+/g," ");var i=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(i))}});return t}function w(e){var t=new u;var n=e.replace(/\r?\n[\t ]+/g," ");n.split("\r").map(function(e){return e.indexOf("\n")===0?e.substr(1,e.length):e}).forEach(function(e){var n=e.split(":");var r=n.shift().trim();if(r){var i=n.join(":").trim();t.append(r,i)}});return t}m.call(b.prototype);function T(e,t){if(!(this instanceof T)){throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')}if(!t){t={}}this.type="default";this.status=t.status===undefined?200:t.status;this.ok=this.status>=200&&this.status<300;this.statusText="statusText"in t?t.statusText:"";this.headers=new u(t.headers);this.url=t.url||"";this._initBody(e)}m.call(T.prototype);T.prototype.clone=function(){return new T(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})};T.error=function(){var e=new T(null,{status:0,statusText:""});e.type="error";return e};var C=[301,302,303,307,308];T.redirect=function(e,t){if(C.indexOf(t)===-1){throw new RangeError("Invalid status code")}return new T(null,{status:t,headers:{location:e}})};e.DOMException=t.DOMException;try{new e.DOMException}catch(t){e.DOMException=function(e,t){this.message=e;this.name=t;var n=Error(e);this.stack=n.stack};e.DOMException.prototype=Object.create(Error.prototype);e.DOMException.prototype.constructor=e.DOMException}function S(r,i){return new Promise(function(o,a){var l=new b(r,i);if(l.signal&&l.signal.aborted){return a(new e.DOMException("Aborted","AbortError"))}var c=new XMLHttpRequest;function f(){c.abort()}c.onload=function(){var e={status:c.status,statusText:c.statusText,headers:w(c.getAllResponseHeaders()||"")};e.url="responseURL"in c?c.responseURL:e.headers.get("X-Request-URL");var t="response"in c?c.response:c.responseText;setTimeout(function(){o(new T(t,e))},0)};c.onerror=function(){setTimeout(function(){a(new TypeError("Network request failed"))},0)};c.ontimeout=function(){setTimeout(function(){a(new TypeError("Network request failed"))},0)};c.onabort=function(){setTimeout(function(){a(new e.DOMException("Aborted","AbortError"))},0)};function d(e){try{return e===""&&t.location.href?t.location.href:e}catch(t){return e}}c.open(l.method,d(l.url),true);if(l.credentials==="include"){c.withCredentials=true}else if(l.credentials==="omit"){c.withCredentials=false}if("responseType"in c){if(n.blob){c.responseType="blob"}else if(n.arrayBuffer&&l.headers.get("Content-Type")&&l.headers.get("Content-Type").indexOf("application/octet-stream")!==-1){c.responseType="arraybuffer"}}if(i&&typeof i.headers==="object"&&!(i.headers instanceof u)){Object.getOwnPropertyNames(i.headers).forEach(function(e){c.setRequestHeader(e,s(i.headers[e]))})}else{l.headers.forEach(function(e,t){c.setRequestHeader(t,e)})}if(l.signal){l.signal.addEventListener("abort",f);c.onreadystatechange=function(){if(c.readyState===4){l.signal.removeEventListener("abort",f)}}}c.send(typeof l._bodyInit==="undefined"?null:l._bodyInit)})}S.polyfill=true;if(!t.fetch){t.fetch=S;t.Headers=u;t.Request=b;t.Response=T}e.Headers=u;e.Request=b;e.Response=T;e.fetch=S;Object.defineProperty(e,"__esModule",{value:true})})},{}],27:[function(e,t,n){"use strict";var r=c(e("@ryanmorr/ready"));var i=c(e("./utils/ajax-loaded"));var o=c(e("./utils/dom-loaded"));var a=c(e("./utils/is-backend"));var s=c(e("./polyfills"));var l=c(e("./modules/lightbox"));var u=c(e("./modules/remove-duplicate-alerts"));function c(e){return e&&e.__esModule?e:{default:e}}
/*!
 * Squarespace Lightbox Plugin
 * Version: 1.0.0
 * Author: Dmitry Kiselyov <dmitrykiselyov@ukr.net> @_dmitrykiselyov
 * License: Commercial License
 */function f(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};e=Object.assign({preloadContent:false,replaceGalleryLightbox:true},e);if((0,a.default)()){e.preloadContent=false}s.default.init();(0,i.default)(()=>l.default.init(e));(0,o.default)(()=>l.default.init(e));(0,r.default)(".sqs-announcement-bar-text a, .sqs-popup-overlay-content .actions a",()=>l.default.init(e));(0,u.default)()}window.pluginLightbox=f},{"./modules/lightbox":34,"./modules/remove-duplicate-alerts":35,"./polyfills":39,"./utils/ajax-loaded":40,"./utils/dom-loaded":42,"./utils/is-backend":45,"@ryanmorr/ready":1}],28:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=void 0;var r=i(e("jquery"));function i(e){return e&&e.__esModule?e:{default:e}}!function(e,t,n,r){"use strict";function i(e,t){var r,i,o,a=[],s=0;e&&e.isDefaultPrevented()||(e.preventDefault(),t=t||{},e&&e.data&&(t=h(e.data.options,t)),r=t.$target||n(e.currentTarget).trigger("blur"),(o=n.fancybox.getInstance())&&o.$trigger&&o.$trigger.is(r)||(t.selector?a=n(t.selector):(i=r.attr("data-fancybox")||"",i?(a=e.data?e.data.items:[],a=a.length?a.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]')):a=[r]),s=n(a).index(r),s<0&&(s=0),o=n.fancybox.open(a,t,s),o.$trigger=r))}if(e.console=e.console||{info:function e(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var o={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function e(t,n){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function e(t,n){return"image"===t.type&&"toggleControls"},clickSlide:function e(t,n){return"image"===t.type?"toggleControls":"close"},dblclickContent:function e(t,n){return"image"===t.type&&"zoom"},dblclickSlide:function e(t,n){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},a=n(e),s=n(t),l=0,u=function e(t){return t&&t.hasOwnProperty&&t instanceof n},c=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||function(t){return e.setTimeout(t,1e3/60)}}(),f=function(){return e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.mozCancelAnimationFrame||e.oCancelAnimationFrame||function(t){e.clearTimeout(t)}}(),d=function(){var e,n=t.createElement("fakeelement"),r={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in r){if(void 0!==n.style[e])return r[e]}return"transitionend"}(),p=function e(t){return t&&t.length&&t[0].offsetHeight},h=function e(t,r){var i=n.extend(!0,{},t,r);return n.each(r,function(e,t){n.isArray(t)&&(i[e]=t)}),i},g=function e(r){var i,o;return!(!r||r.ownerDocument!==t)&&(n(".fancybox-container").css("pointer-events","none"),i={x:r.getBoundingClientRect().left+r.offsetWidth/2,y:r.getBoundingClientRect().top+r.offsetHeight/2},o=t.elementFromPoint(i.x,i.y)===r,n(".fancybox-container").css("pointer-events",""),o)},m=function e(t,r,i){var o=this;o.opts=h({index:i},n.fancybox.defaults),n.isPlainObject(r)&&(o.opts=h(o.opts,r)),n.fancybox.isMobile&&(o.opts=h(o.opts,o.opts.mobile)),o.id=o.opts.id||++l,o.currIndex=parseInt(o.opts.index,10)||0,o.prevIndex=null,o.prevPos=null,o.currPos=0,o.firstRun=!0,o.group=[],o.slides={},o.addContent(t),o.group.length&&o.init()};n.extend(m.prototype,{init:function r(){var i,o,a=this,s=a.group[a.currIndex],l=s.opts;l.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&!1!==l.hideScrollbar&&!n.fancybox.isMobile&&t.body.scrollHeight>e.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(e.innerWidth-t.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),o="",n.each(l.buttons,function(e,t){o+=l.btnTpl[t]||""}),i=n(a.translate(a,l.baseTpl.replace("{{buttons}}",o).replace("{{arrows}}",l.btnTpl.arrowLeft+l.btnTpl.arrowRight))).attr("id","fancybox-container-"+a.id).addClass(l.baseClass).data("FancyBox",a).appendTo(l.parentEl),a.$refs={container:i},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(e){a.$refs[e]=i.find(".fancybox-"+e)}),a.trigger("onInit"),a.activate(),a.jumpTo(a.currIndex)},translate:function e(t,n){var r=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return n.replace(/\{\{(\w+)\}\}/g,function(e,t){return void 0===r[t]?e:r[t]})},addContent:function e(t){var r,i=this,o=n.makeArray(t);n.each(o,function(e,t){var r,o,a,s,l,u={},c={};n.isPlainObject(t)?(u=t,c=t.opts||t):"object"===n.type(t)&&n(t).length?(r=n(t),c=r.data()||{},c=n.extend(!0,{},c,c.options),c.$orig=r,u.src=i.opts.src||c.src||r.attr("href"),u.type||u.src||(u.type="inline",u.src=t)):u={type:"html",src:t+""},u.opts=n.extend(!0,{},i.opts,c),n.isArray(c.buttons)&&(u.opts.buttons=c.buttons),n.fancybox.isMobile&&u.opts.mobile&&(u.opts=h(u.opts,u.opts.mobile)),o=u.type||u.opts.type,s=u.src||"",!o&&s&&((a=s.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(o="video",u.opts.video.format||(u.opts.video.format="video/"+("ogv"===a[1]?"ogg":a[1]))):s.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?o="image":s.match(/\.(pdf)((\?|#).*)?$/i)?(o="iframe",u=n.extend(!0,u,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===s.charAt(0)&&(o="inline")),o?u.type=o:i.trigger("objectNeedsType",u),u.contentType||(u.contentType=n.inArray(u.type,["html","inline","ajax"])>-1?"html":u.type),u.index=i.group.length,"auto"==u.opts.smallBtn&&(u.opts.smallBtn=n.inArray(u.type,["html","inline","ajax"])>-1),"auto"===u.opts.toolbar&&(u.opts.toolbar=!u.opts.smallBtn),u.$thumb=u.opts.$thumb||null,u.opts.$trigger&&u.index===i.opts.index&&(u.$thumb=u.opts.$trigger.find("img:first"),u.$thumb.length&&(u.opts.$orig=u.opts.$trigger)),u.$thumb&&u.$thumb.length||!u.opts.$orig||(u.$thumb=u.opts.$orig.find("img:first")),u.$thumb&&!u.$thumb.length&&(u.$thumb=null),u.thumb=u.opts.thumb||(u.$thumb?u.$thumb[0].src:null),"function"===n.type(u.opts.caption)&&(u.opts.caption=u.opts.caption.apply(t,[i,u])),"function"===n.type(i.opts.caption)&&(u.opts.caption=i.opts.caption.apply(t,[i,u])),u.opts.caption instanceof n||(u.opts.caption=void 0===u.opts.caption?"":u.opts.caption+""),"ajax"===u.type&&(l=s.split(/\s+/,2),l.length>1&&(u.src=l.shift(),u.opts.filter=l.shift())),u.opts.modal&&(u.opts=n.extend(!0,u.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),i.group.push(u)}),Object.keys(i.slides).length&&(i.updateControls(),(r=i.Thumbs)&&r.isActive&&(r.create(),r.focus()))},addEvents:function t(){var r=this;r.removeEvents(),r.$refs.container.on("click.fb-close","[data-fancybox-close]",function(e){e.stopPropagation(),e.preventDefault(),r.close(e)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(e){e.stopPropagation(),e.preventDefault(),r.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(e){e.stopPropagation(),e.preventDefault(),r.next()}).on("click.fb","[data-fancybox-zoom]",function(e){r[r.isScaledDown()?"scaleToActual":"scaleToFit"]()}),a.on("orientationchange.fb resize.fb",function(e){e&&e.originalEvent&&"resize"===e.originalEvent.type?(r.requestId&&f(r.requestId),r.requestId=c(function(){r.update(e)})):(r.current&&"iframe"===r.current.type&&r.$refs.stage.hide(),setTimeout(function(){r.$refs.stage.show(),r.update(e)},n.fancybox.isMobile?600:250))}),s.on("keydown.fb",function(e){var t=n.fancybox?n.fancybox.getInstance():null,i=t.current,o=e.keyCode||e.which;if(9==o)return void(i.opts.trapFocus&&r.focus(e));if(!(!i.opts.keyboard||e.ctrlKey||e.altKey||e.shiftKey||n(e.target).is("input,textarea,video,audio,select")))return 8===o||27===o?(e.preventDefault(),void r.close(e)):37===o||38===o?(e.preventDefault(),void r.previous()):39===o||40===o?(e.preventDefault(),void r.next()):void r.trigger("afterKeydown",e,o)}),r.group[r.currIndex].opts.idleTime&&(r.idleSecondsCounter=0,s.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(e){r.idleSecondsCounter=0,r.isIdle&&r.showControls(),r.isIdle=!1}),r.idleInterval=e.setInterval(function(){++r.idleSecondsCounter>=r.group[r.currIndex].opts.idleTime&&!r.isDragging&&(r.isIdle=!0,r.idleSecondsCounter=0,r.hideControls())},1e3))},removeEvents:function t(){var n=this;a.off("orientationchange.fb resize.fb"),s.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),n.idleInterval&&(e.clearInterval(n.idleInterval),n.idleInterval=null)},previous:function e(t){return this.jumpTo(this.currPos-1,t)},next:function e(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function e(t,r){var i,o,a,s,l,u,c,f,d,h=this,g=h.group.length;if(!(h.isDragging||h.isClosing||h.isAnimating&&h.firstRun)){if(t=parseInt(t,10),!(a=h.current?h.current.opts.loop:h.opts.loop)&&(t<0||t>=g))return!1;if(i=h.firstRun=!Object.keys(h.slides).length,l=h.current,h.prevIndex=h.currIndex,h.prevPos=h.currPos,s=h.createSlide(t),g>1&&((a||s.index<g-1)&&h.createSlide(t+1),(a||s.index>0)&&h.createSlide(t-1)),h.current=s,h.currIndex=s.index,h.currPos=s.pos,h.trigger("beforeShow",i),h.updateControls(),s.forcedDuration=void 0,n.isNumeric(r)?s.forcedDuration=r:r=s.opts[i?"animationDuration":"transitionDuration"],r=parseInt(r,10),o=h.isMoved(s),s.$slide.addClass("fancybox-slide--current"),i)return s.opts.animationEffect&&r&&h.$refs.container.css("transition-duration",r+"ms"),h.$refs.container.addClass("fancybox-is-open").trigger("focus"),h.loadSlide(s),void h.preload("image");u=n.fancybox.getTranslate(l.$slide),c=n.fancybox.getTranslate(h.$refs.stage),n.each(h.slides,function(e,t){n.fancybox.stop(t.$slide,!0)}),l.pos!==s.pos&&(l.isComplete=!1),l.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),o?(d=u.left-(l.pos*u.width+l.pos*l.opts.gutter),n.each(h.slides,function(e,t){t.$slide.removeClass("fancybox-animated").removeClass(function(e,t){return(t.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var i=t.pos*u.width+t.pos*t.opts.gutter;n.fancybox.setTranslate(t.$slide,{top:0,left:i-c.left+d}),t.pos!==s.pos&&t.$slide.addClass("fancybox-slide--"+(t.pos>s.pos?"next":"previous")),p(t.$slide),n.fancybox.animate(t.$slide,{top:0,left:(t.pos-s.pos)*u.width+(t.pos-s.pos)*t.opts.gutter},r,function(){t.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),t.pos===h.currPos&&h.complete()})})):r&&s.opts.transitionEffect&&(f="fancybox-animated fancybox-fx-"+s.opts.transitionEffect,l.$slide.addClass("fancybox-slide--"+(l.pos>s.pos?"next":"previous")),n.fancybox.animate(l.$slide,f,r,function(){l.$slide.removeClass(f).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),s.isLoaded?h.revealContent(s):h.loadSlide(s),h.preload("image")}},createSlide:function e(t){var r,i,o=this;return i=t%o.group.length,i=i<0?o.group.length+i:i,!o.slides[t]&&o.group[i]&&(r=n('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage),o.slides[t]=n.extend(!0,{},o.group[i],{pos:t,$slide:r,isLoaded:!1}),o.updateSlide(o.slides[t])),o.slides[t]},scaleToActual:function e(t,r,i){var o,a,s,l,u,c=this,f=c.current,d=f.$content,p=n.fancybox.getTranslate(f.$slide).width,h=n.fancybox.getTranslate(f.$slide).height,g=f.width,m=f.height;c.isAnimating||c.isMoved()||!d||"image"!=f.type||!f.isLoaded||f.hasError||(c.isAnimating=!0,n.fancybox.stop(d),t=void 0===t?.5*p:t,r=void 0===r?.5*h:r,o=n.fancybox.getTranslate(d),o.top-=n.fancybox.getTranslate(f.$slide).top,o.left-=n.fancybox.getTranslate(f.$slide).left,l=g/o.width,u=m/o.height,a=.5*p-.5*g,s=.5*h-.5*m,g>p&&(a=o.left*l-(t*l-t),a>0&&(a=0),a<p-g&&(a=p-g)),m>h&&(s=o.top*u-(r*u-r),s>0&&(s=0),s<h-m&&(s=h-m)),c.updateCursor(g,m),n.fancybox.animate(d,{top:s,left:a,scaleX:l,scaleY:u},i||366,function(){c.isAnimating=!1}),c.SlideShow&&c.SlideShow.isActive&&c.SlideShow.stop())},scaleToFit:function e(t){var r,i=this,o=i.current,a=o.$content;i.isAnimating||i.isMoved()||!a||"image"!=o.type||!o.isLoaded||o.hasError||(i.isAnimating=!0,n.fancybox.stop(a),r=i.getFitPos(o),i.updateCursor(r.width,r.height),n.fancybox.animate(a,{top:r.top,left:r.left,scaleX:r.width/a.width(),scaleY:r.height/a.height()},t||366,function(){i.isAnimating=!1}))},getFitPos:function e(t){var r,i,o,a,s=this,l=t.$content,u=t.$slide,c=t.width||t.opts.width,f=t.height||t.opts.height,d={};return!!(t.isLoaded&&l&&l.length)&&(r=n.fancybox.getTranslate(s.$refs.stage).width,i=n.fancybox.getTranslate(s.$refs.stage).height,r-=parseFloat(u.css("paddingLeft"))+parseFloat(u.css("paddingRight"))+parseFloat(l.css("marginLeft"))+parseFloat(l.css("marginRight")),i-=parseFloat(u.css("paddingTop"))+parseFloat(u.css("paddingBottom"))+parseFloat(l.css("marginTop"))+parseFloat(l.css("marginBottom")),c&&f||(c=r,f=i),o=Math.min(1,r/c,i/f),c*=o,f*=o,c>r-.5&&(c=r),f>i-.5&&(f=i),"image"===t.type?(d.top=Math.floor(.5*(i-f))+parseFloat(u.css("paddingTop")),d.left=Math.floor(.5*(r-c))+parseFloat(u.css("paddingLeft"))):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?c/f:t.opts.ratio||16/9,f>c/a?f=c/a:c>f*a&&(c=f*a)),d.width=c,d.height=f,d)},update:function e(t){var r=this;n.each(r.slides,function(e,n){r.updateSlide(n,t)})},updateSlide:function e(t,r){var i=this,o=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height,l=t.$slide;i.adjustCaption(t),o&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(o),n.fancybox.setTranslate(o,i.getFitPos(t)),t.pos===i.currPos&&(i.isAnimating=!1,i.updateCursor())),i.adjustLayout(t),l.length&&(l.trigger("refresh"),t.pos===i.currPos&&i.$refs.toolbar.add(i.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",l.get(0).scrollHeight>l.get(0).clientHeight)),i.trigger("onUpdate",t,r)},centerSlide:function e(t){var r=this,i=r.current,o=i.$slide;!r.isClosing&&i&&(o.siblings().css({transform:"",opacity:""}),o.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(o,{top:0,left:0,opacity:1},void 0===t?0:t,function(){o.css({transform:"",opacity:""}),i.isComplete||r.complete()},!1))},isMoved:function e(t){var r,i,o=t||this.current;return!!o&&(i=n.fancybox.getTranslate(this.$refs.stage),r=n.fancybox.getTranslate(o.$slide),!o.$slide.hasClass("fancybox-animated")&&(Math.abs(r.top-i.top)>.5||Math.abs(r.left-i.left)>.5))},updateCursor:function e(t,r){var i,o,a=this,s=a.current,l=a.$refs.container;s&&!a.isClosing&&a.Guestures&&(l.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),i=a.canPan(t,r),o=!!i||a.isZoomable(),l.toggleClass("fancybox-is-zoomable",o),n("[data-fancybox-zoom]").prop("disabled",!o),i?l.addClass("fancybox-can-pan"):o&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?l.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||a.group.length>1)&&"video"!==s.contentType&&l.addClass("fancybox-can-swipe"))},isZoomable:function e(){var t,n=this,r=n.current;if(r&&!n.isClosing&&"image"===r.type&&!r.hasError){if(!r.isLoaded)return!0;if((t=n.getFitPos(r))&&(r.width>t.width||r.height>t.height))return!0}return!1},isScaledDown:function e(t,r){var i=this,o=!1,a=i.current,s=a.$content;return void 0!==t&&void 0!==r?o=t<a.width&&r<a.height:s&&(o=n.fancybox.getTranslate(s),o=o.width<a.width&&o.height<a.height),o},canPan:function e(t,r){var i=this,o=i.current,a=null,s=!1;return"image"===o.type&&(o.isComplete||t&&r)&&!o.hasError&&(s=i.getFitPos(o),void 0!==t&&void 0!==r?a={width:t,height:r}:o.isComplete&&(a=n.fancybox.getTranslate(o.$content)),a&&s&&(s=Math.abs(a.width-s.width)>1.5||Math.abs(a.height-s.height)>1.5)),s},loadSlide:function e(t){var r,i,o,a=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,!1===a.trigger("beforeLoad",t))return t.isLoading=!1,!1;switch(r=t.type,i=t.$slide,i.off("refresh").trigger("onReset").addClass(t.opts.slideClass),r){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),o=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function e(n,r){"success"===r&&a.setContent(t,n)},error:function e(n,r){n&&"abort"!==r&&a.setError(t)}})),i.one("onReset",function(){o.abort()});break;default:a.setError(t)}return!0}},setImage:function e(r){var i,o=this;setTimeout(function(){var e=r.$image;o.isClosing||!r.isLoading||e&&e.length&&e[0].complete||r.hasError||o.showLoading(r)},50),o.checkSrcset(r),r.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(r.$slide.addClass("fancybox-slide--image")),!1!==r.opts.preload&&r.opts.width&&r.opts.height&&r.thumb&&(r.width=r.opts.width,r.height=r.opts.height,i=t.createElement("img"),i.onerror=function(){n(this).remove(),r.$ghost=null},i.onload=function(){o.afterLoad(r)},r.$ghost=n(i).addClass("fancybox-image").appendTo(r.$content).attr("src",r.thumb)),o.setBigImage(r)},checkSrcset:function t(n){var r,i,o,a,s=n.opts.srcset||n.opts.image.srcset;if(s){o=e.devicePixelRatio||1,a=e.innerWidth*o,i=s.split(",").map(function(e){var t={};return e.trim().split(/\s+/).forEach(function(e,n){var r=parseInt(e.substring(0,e.length-1),10);if(0===n)return t.url=e;r&&(t.value=r,t.postfix=e[e.length-1])}),t}),i.sort(function(e,t){return e.value-t.value});for(var l=0;l<i.length;l++){var u=i[l];if("w"===u.postfix&&u.value>=a||"x"===u.postfix&&u.value>=o){r=u;break}}!r&&i.length&&(r=i[i.length-1]),r&&(n.src=r.url,n.width&&n.height&&"w"==r.postfix&&(n.height=n.width/n.height*r.value,n.width=r.value),n.opts.srcset=s)}},setBigImage:function e(r){var i=this,o=t.createElement("img"),s=n(o);r.$image=s.one("error",function(){i.setError(r)}).one("load",function(){var e;r.$ghost||(i.resolveImageSlideSize(r,this.naturalWidth,this.naturalHeight),i.afterLoad(r)),i.isClosing||(r.opts.srcset&&(e=r.opts.sizes,e&&"auto"!==e||(e=(r.width/r.height>1&&a.width()/a.height()>1?"100":Math.round(r.width/r.height*100))+"vw"),s.attr("sizes",e).attr("srcset",r.opts.srcset)),r.$ghost&&setTimeout(function(){r.$ghost&&!i.isClosing&&r.$ghost.hide()},Math.min(300,Math.max(1e3,r.height/1600))),i.hideLoading(r))}).addClass("fancybox-image").attr("src",r.src).appendTo(r.$content),(o.complete||"complete"==o.readyState)&&s.naturalWidth&&s.naturalHeight?s.trigger("load"):o.error&&s.trigger("error")},resolveImageSlideSize:function e(t,n,r){var i=parseInt(t.opts.width,10),o=parseInt(t.opts.height,10);t.width=n,t.height=r,i>0&&(t.width=i,t.height=Math.floor(i*r/n)),o>0&&(t.width=Math.floor(o*n/r),t.height=o)},setIframe:function e(t){var r,i=this,o=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content'+(o.preload?" fancybox-is-hidden":"")+'"></div>').css(o.css).appendTo(a),a.addClass("fancybox-slide--"+t.contentType),t.$iframe=r=n(o.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(o.attr).appendTo(t.$content),o.preload?(i.showLoading(t),r.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),i.afterLoad(t)}),a.on("refresh.fb",function(){var e,n,i=t.$content,s=o.css.width,l=o.css.height;if(1===r[0].isReady){try{e=r.contents(),n=e.find("body")}catch(e){}n&&n.length&&n.children().length&&(a.css("overflow","visible"),i.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===s&&(s=Math.ceil(Math.max(n[0].clientWidth,n.outerWidth(!0)))),i.css("width",s||"").css("max-width",""),void 0===l&&(l=Math.ceil(Math.max(n[0].clientHeight,n.outerHeight(!0)))),i.css("height",l||""),a.css("overflow","auto")),i.removeClass("fancybox-is-hidden")}})):i.afterLoad(t),r.attr("src",t.src),a.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(e){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function e(t,r){var i=this;i.isClosing||(i.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),u(r)&&r.parent().length?((r.hasClass("fancybox-content")||r.parent().hasClass("fancybox-content"))&&r.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(r),r.css("display","inline-block")):t.hasError||("string"===n.type(r)&&(r=n("<div>").append(n.trim(r)).contents()),t.opts.filter&&(r=n("<div>").html(r).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(r.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(r).appendTo(t.$slide),n(r).is("video,audio")&&(n(r).addClass("fancybox-video"),n(r).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(r).attr("width"),t.opts.height=t.opts.height||n(r).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),i.afterLoad(t))},setError:function e(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function e(t){var r=this;(t=t||r.current)&&!t.$spinner&&(t.$spinner=n(r.translate(r,r.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function e(t){var n=this;(t=t||n.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function e(t){var r=this;r.isClosing||(t.isLoading=!1,t.isLoaded=!0,r.trigger("afterLoad",t),r.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(r.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(e){return 2==e.button&&e.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),r.adjustCaption(t),r.adjustLayout(t),t.pos===r.currPos&&r.updateCursor(),r.revealContent(t))},adjustCaption:function e(t){var n,r=this,i=t||r.current,o=i.opts.caption,a=i.opts.preventCaptionOverlap,s=r.$refs.caption,l=!1;s.toggleClass("fancybox-caption--separate",a),a&&o&&o.length&&(i.pos!==r.currPos?(n=s.clone().appendTo(s.parent()),n.children().eq(0).empty().html(o),l=n.outerHeight(!0),n.empty().remove()):r.$caption&&(l=r.$caption.outerHeight(!0)),i.$slide.css("padding-bottom",l||""))},adjustLayout:function e(t){var n,r,i,o,a=this,s=t||a.current;s.isLoaded&&!0!==s.opts.disableLayoutFix&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(i=s.$slide[0].style["padding-bottom"],o=s.$slide.css("padding-bottom"),parseFloat(o)>0&&(n=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(n-s.$slide[0].scrollHeight)<1&&(r=o),s.$slide.css("padding-bottom",i))),s.$content.css("margin-bottom",r))},revealContent:function e(t){var r,i,o,a,s=this,l=t.$slide,u=!1,c=!1,f=s.isMoved(t),d=t.isRevealed;return t.isRevealed=!0,r=t.opts[s.firstRun?"animationEffect":"transitionEffect"],o=t.opts[s.firstRun?"animationDuration":"transitionDuration"],o=parseInt(void 0===t.forcedDuration?o:t.forcedDuration,10),!f&&t.pos===s.currPos&&o||(r=!1),"zoom"===r&&(t.pos===s.currPos&&o&&"image"===t.type&&!t.hasError&&(c=s.getThumbPos(t))?u=s.getFitPos(t):r="fade"),"zoom"===r?(s.isAnimating=!0,u.scaleX=u.width/c.width,u.scaleY=u.height/c.height,a=t.opts.zoomOpacity,"auto"==a&&(a=Math.abs(t.width/t.height-c.width/c.height)>.1),a&&(c.opacity=.1,u.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),c),p(t.$content),void n.fancybox.animate(t.$content,u,o,function(){s.isAnimating=!1,s.complete()})):(s.updateSlide(t),r?(n.fancybox.stop(l),i="fancybox-slide--"+(t.pos>=s.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+r,l.addClass(i).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(l),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(l,"fancybox-slide--current",o,function(){l.removeClass(i).css({transform:"",opacity:""}),t.pos===s.currPos&&s.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),d||!f||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===s.currPos&&s.complete())))},getThumbPos:function e(t){var r,i,o,a,s,l=!1,u=t.$thumb;return!(!u||!g(u[0]))&&(r=n.fancybox.getTranslate(u),i=parseFloat(u.css("border-top-width")||0),o=parseFloat(u.css("border-right-width")||0),a=parseFloat(u.css("border-bottom-width")||0),s=parseFloat(u.css("border-left-width")||0),l={top:r.top+i,left:r.left+s,width:r.width-o-s,height:r.height-i-a,scaleX:1,scaleY:1},r.width>0&&r.height>0&&l)},complete:function e(){var t,r=this,i=r.current,o={};!r.isMoved()&&i.isLoaded&&(i.isComplete||(i.isComplete=!0,i.$slide.siblings().trigger("onReset"),r.preload("inline"),p(i.$slide),i.$slide.addClass("fancybox-slide--complete"),n.each(r.slides,function(e,t){t.pos>=r.currPos-1&&t.pos<=r.currPos+1?o[t.pos]=t:t&&(n.fancybox.stop(t.$slide),t.$slide.off().remove())}),r.slides=o),r.isAnimating=!1,r.updateCursor(),r.trigger("afterShow"),i.opts.video.autoStart&&i.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),r.next()}),i.opts.autoFocus&&"html"===i.contentType&&(t=i.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):r.focus(null,!0)),i.$slide.scrollTop(0).scrollLeft(0))},preload:function e(t){var n,r,i=this;i.group.length<2||(r=i.slides[i.currPos+1],n=i.slides[i.currPos-1],n&&n.type===t&&i.loadSlide(n),r&&r.type===t&&i.loadSlide(r))},focus:function e(r,i){var o,a,s=this,l=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(o=!r&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(i?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),o=o.filter(l).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),o.length?(a=o.index(t.activeElement),r&&r.shiftKey?(a<0||0==a)&&(r.preventDefault(),o.eq(o.length-1).trigger("focus")):(a<0||a==o.length-1)&&(r&&r.preventDefault(),o.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function e(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function e(t,r){var i,o,a,s,l,u,f,d=this,h=d.current,g=function e(){d.cleanUp(t)};return!d.isClosing&&(d.isClosing=!0,!1===d.trigger("beforeClose",t)?(d.isClosing=!1,c(function(){d.update()}),!1):(d.removeEvents(),a=h.$content,i=h.opts.animationEffect,o=n.isNumeric(r)?r:i?h.opts.animationDuration:0,h.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?n.fancybox.stop(h.$slide):i=!1,h.$slide.siblings().trigger("onReset").remove(),o&&d.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",o+"ms"),d.hideLoading(h),d.hideControls(!0),d.updateCursor(),"zoom"!==i||a&&o&&"image"===h.type&&!d.isMoved()&&!h.hasError&&(f=d.getThumbPos(h))||(i="fade"),"zoom"===i?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),u={top:s.top,left:s.left,scaleX:s.width/f.width,scaleY:s.height/f.height,width:f.width,height:f.height},l=h.opts.zoomOpacity,"auto"==l&&(l=Math.abs(h.width/h.height-f.width/f.height)>.1),l&&(f.opacity=0),n.fancybox.setTranslate(a,u),p(a),n.fancybox.animate(a,f,o,g),!0):(i&&o?n.fancybox.animate(h.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+i,o,g):!0===t?setTimeout(g,o):g(),!0)))},cleanUp:function t(r){var i,o,a,s=this,l=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",r),s.current.opts.backFocus&&(l&&l.length&&l.is(":visible")||(l=s.$trigger),l&&l.length&&(o=e.scrollX,a=e.scrollY,l.trigger("focus"),n("html, body").scrollTop(a).scrollLeft(o))),s.current=null,i=n.fancybox.getInstance(),i?i.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function e(t,r){var i,o=Array.prototype.slice.call(arguments,1),a=this,l=r&&r.opts?r:a.current;if(l?o.unshift(l):l=a,o.unshift(a),n.isFunction(l.opts[t])&&(i=l.opts[t].apply(l,o)),!1===i)return i;"afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",o):s.trigger(t+".fb",o)},updateControls:function e(){var r=this,i=r.current,o=i.index,a=r.$refs.container,s=r.$refs.caption,l=i.opts.caption;i.$slide.trigger("refresh"),l&&l.length?(r.$caption=s,s.children().eq(0).html(l)):r.$caption=null,r.hasHiddenControls||r.isIdle||r.showControls(),a.find("[data-fancybox-count]").html(r.group.length),a.find("[data-fancybox-index]").html(o+1),a.find("[data-fancybox-prev]").prop("disabled",!i.opts.loop&&o<=0),a.find("[data-fancybox-next]").prop("disabled",!i.opts.loop&&o>=r.group.length-1),"image"===i.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",i.opts.image.src||i.src).show():i.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(t.activeElement).is(":hidden,[disabled]")&&r.$refs.container.trigger("focus")},hideControls:function e(t){var n=this,r=["infobar","toolbar","nav"];!t&&n.current.opts.preventCaptionOverlap||r.push("caption"),this.$refs.container.removeClass(r.map(function(e){return"fancybox-show-"+e}).join(" ")),this.hasHiddenControls=!0},showControls:function e(){var t=this,n=t.current?t.current.opts:t.opts,r=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,r.toggleClass("fancybox-show-toolbar",!(!n.toolbar||!n.buttons)).toggleClass("fancybox-show-infobar",!!(n.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(n.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!n.modal)},toggleControls:function e(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.7",defaults:o,getInstance:function e(t){var r=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),i=Array.prototype.slice.call(arguments,1);return r instanceof m&&("string"===n.type(t)?r[t].apply(r,i):"function"===n.type(t)&&t.apply(r,i),r)},open:function e(t,n,r){return new m(t,n,r)},close:function e(t){var n=this.getInstance();n&&(n.close(),!0===t&&this.close(t))},destroy:function e(){this.close(!0),s.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=t.createElement("div");return e.getComputedStyle&&e.getComputedStyle(n)&&e.getComputedStyle(n).getPropertyValue("transform")&&!(t.documentMode&&t.documentMode<11)}(),getTranslate:function e(t){var n;return!(!t||!t.length)&&(n=t[0].getBoundingClientRect(),{top:n.top||0,left:n.left||0,width:n.width,height:n.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function e(t,n){var r="",i={};if(t&&n)return void 0===n.left&&void 0===n.top||(r=(void 0===n.left?t.position().left:n.left)+"px, "+(void 0===n.top?t.position().top:n.top)+"px",r=this.use3d?"translate3d("+r+", 0px)":"translate("+r+")"),void 0!==n.scaleX&&void 0!==n.scaleY?r+=" scale("+n.scaleX+", "+n.scaleY+")":void 0!==n.scaleX&&(r+=" scaleX("+n.scaleX+")"),r.length&&(i.transform=r),void 0!==n.opacity&&(i.opacity=n.opacity),void 0!==n.width&&(i.width=n.width),void 0!==n.height&&(i.height=n.height),t.css(i)},animate:function e(t,r,i,o,a){var s,l=this;n.isFunction(i)&&(o=i,i=null),l.stop(t),s=l.getTranslate(t),t.on(d,function(e){(!e||!e.originalEvent||t.is(e.originalEvent.target)&&"z-index"!=e.originalEvent.propertyName)&&(l.stop(t),n.isNumeric(i)&&t.css("transition-duration",""),n.isPlainObject(r)?void 0!==r.scaleX&&void 0!==r.scaleY&&l.setTranslate(t,{top:r.top,left:r.left,width:s.width*r.scaleX,height:s.height*r.scaleY,scaleX:1,scaleY:1}):!0!==a&&t.removeClass(r),n.isFunction(o)&&o(e))}),n.isNumeric(i)&&t.css("transition-duration",i+"ms"),n.isPlainObject(r)?(void 0!==r.scaleX&&void 0!==r.scaleY&&(delete r.width,delete r.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,r)):t.addClass(r),t.data("timer",setTimeout(function(){t.trigger(d)},i+33))},stop:function e(t,n){t&&t.length&&(clearTimeout(t.data("timer")),n&&t.trigger(d),t.off(d).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(e){var t;return e=e||{},t=e.selector||!1,t?n("body").off("click.fb-start",t).on("click.fb-start",t,{options:e},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:e},i),this},s.on("click.fb-start","[data-fancybox]",i),s.on("click.fb-start","[data-fancybox-trigger]",function(e){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var e=null;s.on("mousedown mouseup focus blur",".fancybox-button",function(t){switch(t.type){case"mousedown":e=n(this);break;case"mouseup":e=null;break;case"focusin":n(".fancybox-button").removeClass("fancybox-focus"),n(this).is(e)||n(this).is("[disabled]")||n(this).addClass("fancybox-focus");break;case"focusout":n(".fancybox-button").removeClass("fancybox-focus")}})}()}}(window,document,r.default),function(e){"use strict";var t={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function e(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function e(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function t(n,r,i){if(n)return i=i||"","object"===e.type(i)&&(i=e.param(i,!0)),e.each(r,function(e,t){n=n.replace("$"+e,t||"")}),i.length&&(n+=(n.indexOf("?")>0?"&":"?")+i),n};e(document).on("objectNeedsType.fb",function(r,i,o){var a,s,l,u,c,f,d,p=o.src||"",h=!1;a=e.extend(!0,{},t,o.opts.media),e.each(a,function(t,r){if(l=p.match(r.matcher)){if(h=r.type,d=t,f={},r.paramPlace&&l[r.paramPlace]){c=l[r.paramPlace],"?"==c[0]&&(c=c.substring(1)),c=c.split("&");for(var i=0;i<c.length;++i){var a=c[i].split("=",2);2==a.length&&(f[a[0]]=decodeURIComponent(a[1].replace(/\+/g," ")))}}return u=e.extend(!0,{},r.params,o.opts[t],f),p="function"===e.type(r.url)?r.url.call(this,l,u,o):n(r.url,l,u),s="function"===e.type(r.thumb)?r.thumb.call(this,l,u,o):n(r.thumb,l),"youtube"===t?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(e,t,n,r){return"&start="+((n?60*parseInt(n,10):0)+parseInt(r,10))}):"vimeo"===t&&(p=p.replace("&%23","#")),!1}}),h?(o.opts.thumb||o.opts.$thumb&&o.opts.$thumb.length||(o.opts.thumb=s),"iframe"===h&&(o.opts=e.extend(!0,o.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),e.extend(o,{type:h,src:p,origSrc:o.src,contentSource:d,contentType:"image"===h?"image":"gmap_place"==d||"gmap_search"==d?"map":"video"})):p&&(o.type=o.opts.defaultType)});var r={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function e(t){var n,r=this;if(this[t].loaded)return void setTimeout(function(){r.done(t)});this[t].loading||(this[t].loading=!0,n=document.createElement("script"),n.type="text/javascript",n.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){r[t].loaded=!0,r.done(t)}:n.onload=function(){r[t].loaded=!0,r.done(t)},document.body.appendChild(n))},done:function t(n){var r,i,o;"youtube"===n&&delete window.onYouTubeIframeAPIReady,(r=e.fancybox.getInstance())&&(i=r.current.$content.find("iframe"),"youtube"===n&&void 0!==YT&&YT?o=new YT.Player(i.attr("id"),{events:{onStateChange:function e(t){0==t.data&&r.next()}}}):"vimeo"===n&&void 0!==Vimeo&&Vimeo&&(o=new Vimeo.Player(i),o.on("ended",function(){r.next()})))}};e(document).on({"afterShow.fb":function e(t,n,i){n.group.length>1&&("youtube"===i.contentSource||"vimeo"===i.contentSource)&&r.load(i.contentSource)}})}(r.default),function(e,t,n){"use strict";var r=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||function(t){return e.setTimeout(t,1e3/60)}}(),i=function(){return e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.mozCancelAnimationFrame||e.oCancelAnimationFrame||function(t){e.clearTimeout(t)}}(),o=function t(n){var r=[];n=n.originalEvent||n||e.e,n=n.touches&&n.touches.length?n.touches:n.changedTouches&&n.changedTouches.length?n.changedTouches:[n];for(var i in n){n[i].pageX?r.push({x:n[i].pageX,y:n[i].pageY}):n[i].clientX&&r.push({x:n[i].clientX,y:n[i].clientY})}return r},a=function e(t,n,r){return n&&t?"x"===r?t.x-n.x:"y"===r?t.y-n.y:Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2)):0},s=function e(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var r=0,i=t[0].attributes,o=i.length;r<o;r++){if("data-fancybox-"===i[r].nodeName.substr(0,14))return!0}return!1},l=function t(n){var r=e.getComputedStyle(n)["overflow-y"],i=e.getComputedStyle(n)["overflow-x"],o=("scroll"===r||"auto"===r)&&n.scrollHeight>n.clientHeight,a=("scroll"===i||"auto"===i)&&n.scrollWidth>n.clientWidth;return o||a},u=function e(t){for(var n=!1;;){if(n=l(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return n},c=function e(t){var r=this;r.instance=t,r.$bg=t.$refs.bg,r.$stage=t.$refs.stage,r.$container=t.$refs.container,r.destroy(),r.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(r,"ontouchstart"))};c.prototype.destroy=function(){var e=this;e.$container.off(".fb.touch"),n(t).off(".fb.touch"),e.requestId&&(i(e.requestId),e.requestId=null),e.tapped&&(clearTimeout(e.tapped),e.tapped=null)},c.prototype.ontouchstart=function(r){var i=this,l=n(r.target),c=i.instance,f=c.current,d=f.$slide,p=f.$content,h="touchstart"==r.type;if(h&&i.$container.off("mousedown.fb.touch"),(!r.originalEvent||2!=r.originalEvent.button)&&d.length&&l.length&&!s(l)&&!s(l.parent())&&(l.is("img")||!(r.originalEvent.clientX>l[0].clientWidth+l.offset().left))){if(!f||c.isAnimating||f.$slide.hasClass("fancybox-animated"))return r.stopPropagation(),void r.preventDefault();i.realPoints=i.startPoints=o(r),i.startPoints.length&&(f.touch&&r.stopPropagation(),i.startEvent=r,i.canTap=!0,i.$target=l,i.$content=p,i.opts=f.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.canPan=c.canPan(),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(d[0].clientWidth),i.canvasHeight=Math.round(d[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=n.fancybox.getTranslate(d),i.stagePos=n.fancybox.getTranslate(c.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(t).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&t.addEventListener("scroll",i.onscroll,!0),((i.opts||i.canPan)&&(l.is(i.$stage)||i.$stage.find(l).length)||(l.is(".fancybox-image")&&r.preventDefault(),n.fancybox.isMobile&&l.parents(".fancybox-caption").length))&&(i.isScrollable=u(l)||u(l.parent()),n.fancybox.isMobile&&i.isScrollable||r.preventDefault(),(1===i.startPoints.length||f.hasError)&&(i.canPan?(n.fancybox.stop(i.$content),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-is-grabbing")),2===i.startPoints.length&&"image"===f.type&&(f.isLoaded||f.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(e).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(e).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=a(i.startPoints[0],i.startPoints[1]))))}},c.prototype.onscroll=function(e){var n=this;n.isScrolling=!0,t.removeEventListener("scroll",n.onscroll,!0)},c.prototype.ontouchmove=function(e){var t=this;return void 0!==e.originalEvent.buttons&&0===e.originalEvent.buttons?void t.ontouchend(e):t.isScrolling?void(t.canTap=!1):(t.newPoints=o(e),void((t.opts||t.canPan)&&t.newPoints.length&&t.newPoints.length&&(t.isSwiping&&!0===t.isSwiping||e.preventDefault(),t.distanceX=a(t.newPoints[0],t.startPoints[0],"x"),t.distanceY=a(t.newPoints[0],t.startPoints[0],"y"),t.distance=a(t.newPoints[0],t.startPoints[0]),t.distance>0&&(t.isSwiping?t.onSwipe(e):t.isPanning?t.onPan():t.isZooming&&t.onZoom()))))},c.prototype.onSwipe=function(t){var o,a=this,s=a.instance,l=a.isSwiping,u=a.sliderStartPos.left||0;if(!0!==l)"x"==l&&(a.distanceX>0&&(a.instance.group.length<2||0===a.instance.current.index&&!a.instance.current.opts.loop)?u+=Math.pow(a.distanceX,.8):a.distanceX<0&&(a.instance.group.length<2||a.instance.current.index===a.instance.group.length-1&&!a.instance.current.opts.loop)?u-=Math.pow(-a.distanceX,.8):u+=a.distanceX),a.sliderLastPos={top:"x"==l?0:a.sliderStartPos.top+a.distanceY,left:u},a.requestId&&(i(a.requestId),a.requestId=null),a.requestId=r(function(){a.sliderLastPos&&(n.each(a.instance.slides,function(e,t){var r=t.pos-a.instance.currPos;n.fancybox.setTranslate(t.$slide,{top:a.sliderLastPos.top,left:a.sliderLastPos.left+r*a.canvasWidth+r*t.opts.gutter})}),a.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(a.distance)>10){if(a.canTap=!1,s.group.length<2&&a.opts.vertical?a.isSwiping="y":s.isDragging||!1===a.opts.vertical||"auto"===a.opts.vertical&&n(e).width()>800?a.isSwiping="x":(o=Math.abs(180*Math.atan2(a.distanceY,a.distanceX)/Math.PI),a.isSwiping=o>45&&o<135?"y":"x"),"y"===a.isSwiping&&n.fancybox.isMobile&&a.isScrollable)return void(a.isScrolling=!0);s.isDragging=a.isSwiping,a.startPoints=a.newPoints,n.each(s.slides,function(e,t){var r,i;n.fancybox.stop(t.$slide),r=n.fancybox.getTranslate(t.$slide),i=n.fancybox.getTranslate(s.$refs.stage),t.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(e,t){return(t.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),t.pos===s.current.pos&&(a.sliderStartPos.top=r.top-i.top,a.sliderStartPos.left=r.left-i.left),n.fancybox.setTranslate(t.$slide,{top:r.top-i.top,left:r.left-i.left})}),s.SlideShow&&s.SlideShow.isActive&&s.SlideShow.stop()}},c.prototype.onPan=function(){var e=this;if(a(e.newPoints[0],e.realPoints[0])<(n.fancybox.isMobile?10:5))return void(e.startPoints=e.newPoints);e.canTap=!1,e.contentLastPos=e.limitMovement(),e.requestId&&i(e.requestId),e.requestId=r(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},c.prototype.limitMovement=function(){var e,t,n,r,i,o,a=this,s=a.canvasWidth,l=a.canvasHeight,u=a.distanceX,c=a.distanceY,f=a.contentStartPos,d=f.left,p=f.top,h=f.width,g=f.height;return i=h>s?d+u:d,o=p+c,e=Math.max(0,.5*s-.5*h),t=Math.max(0,.5*l-.5*g),n=Math.min(s-h,.5*s-.5*h),r=Math.min(l-g,.5*l-.5*g),u>0&&i>e&&(i=e-1+Math.pow(-e+d+u,.8)||0),u<0&&i<n&&(i=n+1-Math.pow(n-d-u,.8)||0),c>0&&o>t&&(o=t-1+Math.pow(-t+p+c,.8)||0),c<0&&o<r&&(o=r+1-Math.pow(r-p-c,.8)||0),{top:o,left:i}},c.prototype.limitPosition=function(e,t,n,r){var i=this,o=i.canvasWidth,a=i.canvasHeight;return n>o?(e=e>0?0:e,e=e<o-n?o-n:e):e=Math.max(0,o/2-n/2),r>a?(t=t>0?0:t,t=t<a-r?a-r:t):t=Math.max(0,a/2-r/2),{top:t,left:e}},c.prototype.onZoom=function(){var t=this,o=t.contentStartPos,s=o.width,l=o.height,u=o.left,c=o.top,f=a(t.newPoints[0],t.newPoints[1]),d=f/t.startDistanceBetweenFingers,p=Math.floor(s*d),h=Math.floor(l*d),g=(s-p)*t.percentageOfImageAtPinchPointX,m=(l-h)*t.percentageOfImageAtPinchPointY,y=(t.newPoints[0].x+t.newPoints[1].x)/2-n(e).scrollLeft(),v=(t.newPoints[0].y+t.newPoints[1].y)/2-n(e).scrollTop(),b=y-t.centerPointStartX,x=v-t.centerPointStartY,w=u+(g+b),T=c+(m+x),C={top:T,left:w,scaleX:d,scaleY:d};t.canTap=!1,t.newWidth=p,t.newHeight=h,t.contentLastPos=C,t.requestId&&i(t.requestId),t.requestId=r(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})},c.prototype.ontouchend=function(e){var r=this,a=r.isSwiping,s=r.isPanning,l=r.isZooming,u=r.isScrolling;if(r.endPoints=o(e),r.dMs=Math.max((new Date).getTime()-r.startTime,1),r.$container.removeClass("fancybox-is-grabbing"),n(t).off(".fb.touch"),t.removeEventListener("scroll",r.onscroll,!0),r.requestId&&(i(r.requestId),r.requestId=null),r.isSwiping=!1,r.isPanning=!1,r.isZooming=!1,r.isScrolling=!1,r.instance.isDragging=!1,r.canTap)return r.onTap(e);r.speed=100,r.velocityX=r.distanceX/r.dMs*.5,r.velocityY=r.distanceY/r.dMs*.5,s?r.endPanning():l?r.endZooming():r.endSwiping(a,u)},c.prototype.endSwiping=function(e,t){var r=this,i=!1,o=r.instance.group.length,a=Math.abs(r.distanceX),s="x"==e&&o>1&&(r.dMs>130&&a>10||a>50);r.sliderLastPos=null,"y"==e&&!t&&Math.abs(r.distanceY)>50?(n.fancybox.animate(r.instance.current.$slide,{top:r.sliderStartPos.top+r.distanceY+150*r.velocityY,opacity:0},200),i=r.instance.close(!0,250)):s&&r.distanceX>0?i=r.instance.previous(300):s&&r.distanceX<0&&(i=r.instance.next(300)),!1!==i||"x"!=e&&"y"!=e||r.instance.centerSlide(200),r.$container.removeClass("fancybox-is-sliding")},c.prototype.endPanning=function(){var e,t,r,i=this;i.contentLastPos&&(!1===i.opts.momentum||i.dMs>350?(e=i.contentLastPos.left,t=i.contentLastPos.top):(e=i.contentLastPos.left+500*i.velocityX,t=i.contentLastPos.top+500*i.velocityY),r=i.limitPosition(e,t,i.contentStartPos.width,i.contentStartPos.height),r.width=i.contentStartPos.width,r.height=i.contentStartPos.height,n.fancybox.animate(i.$content,r,366))},c.prototype.endZooming=function(){var e,t,r,i,o=this,a=o.instance.current,s=o.newWidth,l=o.newHeight;o.contentLastPos&&(e=o.contentLastPos.left,t=o.contentLastPos.top,i={top:t,left:e,width:s,height:l,scaleX:1,scaleY:1},n.fancybox.setTranslate(o.$content,i),s<o.canvasWidth&&l<o.canvasHeight?o.instance.scaleToFit(150):s>a.width||l>a.height?o.instance.scaleToActual(o.centerPointStartX,o.centerPointStartY,150):(r=o.limitPosition(e,t,s,l),n.fancybox.animate(o.$content,r,150)))},c.prototype.onTap=function(t){var r,i=this,a=n(t.target),s=i.instance,l=s.current,u=t&&o(t)||i.startPoints,c=u[0]?u[0].x-n(e).scrollLeft()-i.stagePos.left:0,f=u[0]?u[0].y-n(e).scrollTop()-i.stagePos.top:0,d=function e(r){var o=l.opts[r];if(n.isFunction(o)&&(o=o.apply(s,[l,t])),o)switch(o){case"close":s.close(i.startEvent);break;case"toggleControls":s.toggleControls();break;case"next":s.next();break;case"nextOrClose":s.group.length>1?s.next():s.close(i.startEvent);break;case"zoom":"image"==l.type&&(l.isLoaded||l.$ghost)&&(s.canPan()?s.scaleToFit():s.isScaledDown()?s.scaleToActual(c,f):s.group.length<2&&s.close(i.startEvent))}};if((!t.originalEvent||2!=t.originalEvent.button)&&(a.is("img")||!(c>a[0].clientWidth+a.offset().left))){if(a.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))r="Outside";else if(a.is(".fancybox-slide"))r="Slide";else{if(!s.current.$content||!s.current.$content.find(a).addBack().filter(a).length)return;r="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(c-i.tapX)>50||Math.abs(f-i.tapY)>50)return this;d("dblclick"+r)}else i.tapX=c,i.tapY=f,l.opts["dblclick"+r]&&l.opts["dblclick"+r]!==l.opts["click"+r]?i.tapped=setTimeout(function(){i.tapped=null,s.isAnimating||d("click"+r)},500):d("click"+r);return this}},n(t).on("onActivate.fb",function(e,t){t&&!t.Guestures&&(t.Guestures=new c(t))}).on("beforeClose.fb",function(e,t){t&&t.Guestures&&t.Guestures.destroy()})}(window,document,r.default),function(e,t){"use strict";t.extend(!0,t.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function e(t){this.instance=t,this.init()};t.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function e(){var n=this,r=n.instance,i=r.group[r.currIndex].opts.slideShow;n.$button=r.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){n.toggle()}),r.group.length<2||!i?n.$button.hide():i.progress&&(n.$progress=t('<div class="fancybox-progress"></div>').appendTo(r.$refs.inner))},set:function e(n){var r=this,i=r.instance,o=i.current;o&&(!0===n||o.opts.loop||i.currIndex<i.group.length-1)?r.isActive&&"video"!==o.contentType&&(r.$progress&&t.fancybox.animate(r.$progress.show(),{scaleX:1},o.opts.slideShow.speed),r.timer=setTimeout(function(){i.current.opts.loop||i.current.index!=i.group.length-1?i.next():i.jumpTo(0)},o.opts.slideShow.speed)):(r.stop(),i.idleSecondsCounter=0,i.showControls())},clear:function e(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function e(){var t=this,n=t.instance.current;n&&(t.$button.attr("title",(n.opts.i18n[n.opts.lang]||n.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,n.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function e(){var t=this,n=t.instance.current;t.clear(),t.$button.attr("title",(n.opts.i18n[n.opts.lang]||n.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function e(){var t=this;t.isActive?t.stop():t.start()}}),t(e).on({"onInit.fb":function e(t,r){r&&!r.SlideShow&&(r.SlideShow=new n(r))},"beforeShow.fb":function e(t,n,r,i){var o=n&&n.SlideShow;i?o&&r.opts.slideShow.autoStart&&o.start():o&&o.isActive&&o.clear()},"afterShow.fb":function e(t,n,r){var i=n&&n.SlideShow;i&&i.isActive&&i.set()},"afterKeydown.fb":function n(r,i,o,a,s){var l=i&&i.SlideShow;!l||!o.opts.slideShow||80!==s&&32!==s||t(e.activeElement).is("button,a,input")||(a.preventDefault(),l.toggle())},"beforeClose.fb onDeactivate.fb":function e(t,n){var r=n&&n.SlideShow;r&&r.stop()}}),t(e).on("visibilitychange",function(){var n=t.fancybox.getInstance(),r=n&&n.SlideShow;r&&r.isActive&&(e.hidden?r.clear():r.set())})}(document,r.default),function(e,t){"use strict";var n=function(){for(var t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},r=0;r<t.length;r++){var i=t[r];if(i&&i[1]in e){for(var o=0;o<i.length;o++){n[t[0][o]]=i[o]}return n}}return!1}();if(n){var r={request:function t(r){r=r||e.documentElement,r[n.requestFullscreen](r.ALLOW_KEYBOARD_INPUT)},exit:function t(){e[n.exitFullscreen]()},toggle:function t(n){n=n||e.documentElement,this.isFullscreen()?this.exit():this.request(n)},isFullscreen:function t(){return Boolean(e[n.fullscreenElement])},enabled:function t(){return Boolean(e[n.fullscreenEnabled])}};t.extend(!0,t.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),t(e).on(n.fullscreenchange,function(){var e=r.isFullscreen(),n=t.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.isAnimating=!1,n.update(!0,!0,0),n.isComplete||n.complete()),n.trigger("onFullscreenChange",e),n.$refs.container.toggleClass("fancybox-is-fullscreen",e),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!e).toggleClass("fancybox-button--fsexit",e))})}t(e).on({"onInit.fb":function e(t,i){var o;if(!n)return void i.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();i&&i.group[i.currIndex].opts.fullScreen?(o=i.$refs.container,o.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(e){e.stopPropagation(),e.preventDefault(),r.toggle()}),i.opts.fullScreen&&!0===i.opts.fullScreen.autoStart&&r.request(),i.FullScreen=r):i&&i.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function e(t,n,r,i,o){n&&n.FullScreen&&70===o&&(i.preventDefault(),n.FullScreen.toggle())},"beforeClose.fb":function e(t,n){n&&n.FullScreen&&n.$refs.container.hasClass("fancybox-is-fullscreen")&&r.exit()}})}(document,r.default),function(e,t){"use strict";var n="fancybox-thumbs";t.fancybox.defaults=t.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},t.fancybox.defaults);var r=function e(t){this.init(t)};t.extend(r.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function e(t){var n=this,r=t.group,i=0;n.instance=t,n.opts=r[t.currIndex].opts.thumbs,t.Thumbs=n,n.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var o=0,a=r.length;o<a&&(r[o].thumb&&i++,!(i>1));o++){}i>1&&n.opts?(n.$button.removeAttr("style").on("click",function(){n.toggle()}),n.isActive=!0):n.$button.hide()},create:function e(){var r,i=this,o=i.instance,a=i.opts.parentEl,s=[];i.$grid||(i.$grid=t('<div class="'+n+" "+n+"-"+i.opts.axis+'"></div>').appendTo(o.$refs.container.find(a).addBack().filter(a)),i.$grid.on("click","a",function(){o.jumpTo(t(this).attr("data-index"))})),i.$list||(i.$list=t('<div class="'+n+'__list">').appendTo(i.$grid)),t.each(o.group,function(e,t){r=t.thumb,r||"image"!==t.type||(r=t.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(r&&r.length?' style="background-image:url('+r+')"':'class="fancybox-thumbs-missing"')+"></a>")}),i.$list[0].innerHTML=s.join(""),"x"===i.opts.axis&&i.$list.width(parseInt(i.$grid.css("padding-right"),10)+o.group.length*i.$list.children().eq(0).outerWidth(!0))},focus:function e(t){var n,r,i=this,o=i.$list,a=i.$grid;i.instance.current&&(n=o.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+i.instance.current.index+'"]').addClass("fancybox-thumbs-active"),r=n.position(),"y"===i.opts.axis&&(r.top<0||r.top>o.height()-n.outerHeight())?o.stop().animate({scrollTop:o.scrollTop()+r.top},t):"x"===i.opts.axis&&(r.left<a.scrollLeft()||r.left>a.scrollLeft()+(a.width()-n.outerWidth()))&&o.parent().stop().animate({scrollLeft:r.left},t))},update:function e(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function e(){this.isVisible=!1,this.update()},show:function e(){this.isVisible=!0,this.update()},toggle:function e(){this.isVisible=!this.isVisible,this.update()}}),t(e).on({"onInit.fb":function e(t,n){var i;n&&!n.Thumbs&&(i=new r(n),i.isActive&&!0===i.opts.autoStart&&i.show())},"beforeShow.fb":function e(t,n,r,i){var o=n&&n.Thumbs;o&&o.isVisible&&o.focus(i?0:250)},"afterKeydown.fb":function e(t,n,r,i,o){var a=n&&n.Thumbs;a&&a.isActive&&71===o&&(i.preventDefault(),a.toggle())},"beforeClose.fb":function e(t,n){var r=n&&n.Thumbs;r&&r.isVisible&&!1!==r.opts.hideOnClose&&r.$grid.hide()}})}(document,r.default),function(e,t){"use strict";function n(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(e).replace(/[&<>"'`=\/]/g,function(e){return t[e]})}t.extend(!0,t.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function e(t,n){return!t.currentHash&&"inline"!==n.type&&"html"!==n.type&&(n.origSrc||n.src)||window.location},tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),t(e).on("click","[data-fancybox-share]",function(){var e,r,i=t.fancybox.getInstance(),o=i.current||null;o&&("function"===t.type(o.opts.share.url)&&(e=o.opts.share.url.apply(o,[i,o])),r=o.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===o.type?encodeURIComponent(o.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(e)).replace(/\{\{url_raw\}\}/g,n(e)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),t.fancybox.open({src:i.translate(i,r),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function e(t,n){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),n.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,r.default),function(e,t,n){"use strict";function r(){var t=e.location.hash.substr(1),n=t.split("-"),r=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:t,index:r<1?1:r,gallery:i}}function i(e){""!==e.gallery&&n("[data-fancybox='"+n.escapeSelector(e.gallery)+"']").eq(e.index-1).focus().trigger("click.fb-start")}function o(e){var t,n;return!!e&&(t=e.current?e.current.opts:e.opts,""!==(n=t.hash||(t.$orig?t.$orig.data("fancybox")||t.$orig.data("fancybox-trigger"):""))&&n)}n.escapeSelector||(n.escapeSelector=function(e){return(e+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e})}),n(function(){!1!==n.fancybox.defaults.hash&&(n(t).on({"onInit.fb":function e(t,n){var i,a;!1!==n.group[n.currIndex].opts.hash&&(i=r(),(a=o(n))&&i.gallery&&a==i.gallery&&(n.currIndex=i.index-1))},"beforeShow.fb":function n(r,i,a,s){var l;a&&!1!==a.opts.hash&&(l=o(i))&&(i.currentHash=l+(i.group.length>1?"-"+(a.index+1):""),e.location.hash!=="#"+i.currentHash&&(s&&!i.origHash&&(i.origHash=e.location.hash),i.hashTimer&&clearTimeout(i.hashTimer),i.hashTimer=setTimeout(function(){"replaceState"in e.history?(e.history[s?"pushState":"replaceState"]({},t.title,e.location.pathname+e.location.search+"#"+i.currentHash),s&&(i.hasCreatedHistory=!0)):e.location.hash=i.currentHash,i.hashTimer=null},300)))},"beforeClose.fb":function n(r,i,o){o&&!1!==o.opts.hash&&(clearTimeout(i.hashTimer),i.currentHash&&i.hasCreatedHistory?e.history.back():i.currentHash&&("replaceState"in e.history?e.history.replaceState({},t.title,e.location.pathname+e.location.search+(i.origHash||"")):e.location.hash=i.origHash),i.currentHash=null)}}),n(e).on("hashchange.fb",function(){var e=r(),t=null;n.each(n(".fancybox-container").get().reverse(),function(e,r){var i=n(r).data("FancyBox");if(i&&i.currentHash)return t=i,!1}),t?t.currentHash===e.gallery+"-"+e.index||1===e.index&&t.currentHash==e.gallery||(t.currentHash=null,t.close()):""!==e.gallery&&i(e)}),setTimeout(function(){n.fancybox.getInstance()||i(r())},50))})}(window,document,r.default),function(e,t){"use strict";var n=(new Date).getTime();t(e).on({"onInit.fb":function e(t,r,i){r.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(e){var t=r.current,i=(new Date).getTime();r.group.length<2||!1===t.opts.wheel||"auto"===t.opts.wheel&&"image"!==t.type||(e.preventDefault(),e.stopPropagation(),t.$slide.hasClass("fancybox-animated")||(e=e.originalEvent||e,i-n<250||(n=i,r[(-e.deltaY||-e.deltaX||e.wheelDelta||-e.detail)<0?"next":"previous"]())))})}})}(document,r.default);var o=r.default;n.default=o},{jquery:10}],29:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=o;var r=i(e("get-scrollbar-width"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=(0,r.default)();if(!e){[...document.querySelectorAll("*[data-original-style]")].forEach(e=>{var t=e.getAttribute("data-original-style");e.removeAttribute("data-original-style");if(t){e.setAttribute("style",t)}else{e.removeAttribute("style")}});return null}var i=[...document.querySelectorAll("div:not(.".concat(t,"):not(.c-lightbox__loading):not(.shopify-buy-cart-wrapper):not(.shopify-buy-frame), nav, header, footer, iframe"))];i.filter(e=>{if(e.style.display==="none"){return}var t=getComputedStyle(e);if(t.display==="none"||t.position!=="fixed"){return}var r=e.getBoundingClientRect();var i=Math.round(r.left);var o=Math.round(document.documentElement.clientWidth-r.right);var a=e.getAttribute("style");e.setAttribute("data-original-style",a||"");e.style.transition="none";if(i===0&&(o===0||o===n)){e.style.right="auto";e.style.width="calc(100% - ".concat(n,"px)")}else if(i===o||i===o+1||e.style.marginLeft===-n/2+"px"){e.style.marginLeft=-n/2+"px"}else if(i>o){if(t.right.match(/\d+/)[0]){e.style.right="calc(".concat(t.right," + ").concat(n,"px)")}else if(t.transform==="none"){e.style.transform="translateX(-".concat(n,"px)")}}})}},{"get-scrollbar-width":9}],30:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=void 0;function r(e){var t=Y;var n=t.config.win;var r=t.config.win.document;var i=function n(){var r={body:t.one(e),gallery:t.one(e+" .sqs-system-gallery"),slideWrapper:t.one(e+" .sqs-system-gallery").one(".gallery-wrapper"),slidesAndControls:t.one(e+" .sqs-system-gallery").one(".slides-controls"),circles:t.one(e+" .sqs-system-gallery").one(".circles")},i={show:"show",ready:"sqs-system-gallery-ready",interaction:"sqs-system-gallery-interaction",mouseenterleft:"sqs-system-gallery-hover-slides-left",mouseenterright:"sqs-system-gallery-hover-slides-right",init:"sqs-system-gallery-init",circlesNav:"gallery-navigation-circles",crop:"gallery-auto-crop",iframe:"sqs-system-gallery-video-iframe"},o=null,a=null,s=window.innerWidth;var l=[];var n=[];function u(e,n){var r=t.Squarespace.Template.getTweakValue(e);n?r=parseFloat(r):"string"===typeof r&&(r=r.toLowerCase());"true"===r?r=true:"false"===r&&(r=false);return r}function c(){var e=r.gallery.one(".slide.sqs-active-slide");return e&&"video"===e.getAttribute("data-type")&&e.one("iframe")}function f(){return"grid"!==u("gallery-design")}function d(e){var t=0;var n=e&&e.match(/(\d+):(\d+)/);n&&3===n.length&&(t=n[1]/n[2]);return t}function p(){var e=r.gallery.one(".slide.sqs-active-slide"),t=e&&e.getAttribute("data-slide-id")||null,n=r.gallery.one('.slide-meta[data-slide-id="'+t+'"]');if(n)if(r.body.hasClass(i.crop))n.setStyles({top:null,bottom:null,left:null,width:null});else{if(r.body.hasClass(i.circlesNav)){n.setStyle("top",(parseFloat(e._node.clientHeight)-parseFloat(e.one("img")._node.clientHeight))/2);n.setStyle("bottom",null)}else{n.setStyle("top",null);n.setStyle("bottom",(parseFloat(e._node.clientHeight)-parseFloat(e.one("img")._node.clientHeight))/2)}n.setStyles({left:e.one("img").getComputedStyle("left"),width:e.one("img")._node.clientWidth})}}function h(e,t,n){var r,o,a;if(t){r=t.one(".title");o=t.one(".description");if(r&&r._node.innerHTML||o&&o._node.innerHTML)if(n)a=true;else{t.addClass(i.show);p()}}return a}function g(e){var t=r.gallery.one(".slide.sqs-active-slide"),n=t&&t.one("img"),o=t&&t.getAttribute("data-slide-id")||null,a;r.gallery.all(".slide-meta").removeClass(i.show);e&&Modernizr&&!Modernizr.touch&&r.gallery.addClass(i.interaction);if(c()){r.gallery.addClass(i.iframe);r.gallery.removeClass(i.mouseenterleft);r.gallery.removeClass(i.mouseenterright)}else{r.gallery.removeClass(i.iframe);e&&"Gallery:currentIndexChange"===e.type&&(-1===e.direction?r.gallery.addClass(i.mouseenterleft):r.gallery.addClass(i.mouseenterright))}if(o){h(t,r.gallery.one('.slide-meta[data-slide-id="'+o+'"]'));if(n&&r.body.hasClass(i.circlesNav)){var s=function e(){a=Math.max(0,(parseFloat(t._node.clientHeight)-parseFloat(n._node.clientHeight))/2);r.circles.setStyle("bottom",a)};n.get("complete")?s():l.push(n.on("load",s))}}}function m(){var n=u("gallery-loop"),s=u("gallery-auto-crop"),c=u("gallery-autoplay"),h=u("gallery-transitions"),m=1e3*u("galleryAutoplaySpeed",true),y=u("gallery-navigation"),v=u("gallery-aspect-ratio"),b=v.split(" ")[0],x=!f(),w=0;b=parseInt(v.split(":")[1],10)/parseInt(v.split(":")[0],10);v=r.gallery._node.clientWidth*b;r.gallery.removeClass(i.init);r.gallery.removeClass(i.ready);r.gallery.removeClass(i.interaction);r.gallery.removeClass(i.mouseenterleft);r.gallery.removeClass(i.mouseenterright);r.gallery.all(".slide-meta").removeClass(i.show);if(o){w=o.get("currentIndex");r.gallery.all(".sqs-disabled").removeClass("sqs-disabled");r.gallery.all(".sqs-active-slide").removeClass("sqs-active-slide");r.gallery.all(".slide, img").setStyles({visibility:null,left:null,top:null,overflow:null,width:null,height:null});o.destroy()}if(a){r.gallery.all(".thumbnail img[data-src]").each(function(e){e.setStyles({height:null,width:null,top:null,left:null})});a.destroy()}r.gallery.one(".slides-controls").setStyle("height",x?null:v);r.slideWrapper.setStyle("minHeight",x?null:v);o=new t.SQS.Gallery.Gallery2({container:Y.one(e+" .slides"),slides:".slide",currentIndex:w,elements:{next:e+" .next-slide, "+e+" .simple .next",previous:e+" .previous-slide, "+e+" .simple .previous",controls:e+" .dots, "+e+" .numbers, "+e+" .circles",currentIndex:e+" .current-index",totalSlides:e+" .total-slides"},loop:n,autoplay:!x&&c,autoplayOptions:{randomize:false,timeout:m,pauseOnMouseover:[".thumbnail-wrapper"]},lazyLoad:true,loaderOptions:{mode:x?"auto"===u("aspect-ratio")?"none":"fill":s?"fill":"fit"},design:x?"autocolumns":"stacked",designOptions:{transition:h,lightbox:x,clickBehavior:"auto",gutter:u("gridSpacing",true),columnWidth:u("gridSize",true),aspectRatio:d(u("aspect-ratio"))},historyHash:true});r.gallery.all(".arrow").each(function(e){e.setStyle("top",r.slideWrapper._node.clientHeight/2)});if(!x&&"thumbnails"===y){a=new t.SQS.Gallery.Gallery2({container:Y.one(e+" .thumbnail-wrapper"),currentIndex:w,loaderOptions:{mode:"fill",load:true},lazyLoad:true,design:"strip"});o.addChild(a)}var T=o.after("currentIndexChange",g);g();var C=o.after("image-loaded",p);p();r.gallery.addClass(i.ready);l.push(T,C)}function y(e){if("function"===typeof e){window.throttleTimeout&&clearTimeout(window.throttleTimeout);window.throttleTimeout=setTimeout(e,750)}}function v(e,t){var n=e._event.offsetX||e._event.layerX;r.gallery.addClass(i.interaction);if(e._event.target&&("img"===e._event.target.localName||"sqs-video-opaque"===e._event.target.className||e.target.hasClass("slide")))if(t){r.gallery.removeClass(i.mouseenterleft);r.gallery.removeClass(i.mouseenterright)}else if(n<=e._currentTarget.clientWidth/2){r.gallery.removeClass(i.mouseenterright);r.gallery.addClass(i.mouseenterleft)}else{r.gallery.removeClass(i.mouseenterleft);r.gallery.addClass(i.mouseenterright)}}function b(e){var t=e.keyCode;(37===t||39===t&&f())&&r.gallery.addClass(i.interaction)}function x(){var e=new t.Squarespace.ResizeEmitter({timeout:100});e.on("resize:end",function(){if(window.innerWidth!==s){s=window.innerWidth;y(m)}});n.push(e);Modernizr&&!Modernizr.touch&&l.push(t.on("mousemove",function(e){f()&&v(e,false)},r.gallery.one(".slides-controls")),t.on("mouseleave",function(e){if(f()){v(e,true);r.gallery.removeClass(i.iframe)}},r.gallery.one(".slides-controls")),t.on("mouseenter",function(e){f()&&c()&&r.gallery.addClass(i.iframe)},r.gallery.one(".slides-controls")));l.push(t.on("keydown",b))}function w(e,n){l.push(t.Global.on("tweak:change",function(t){if(t.getName()===e&&"function"===typeof n){var r=t.getValue();"true"===r?r=true:"false"===r&&(r=false);n(r)}}))}function T(){w("gallery-loop",m);w("gallery-transitions",m);w("gallery-auto-crop",m);w("gallery-navigation",function(e){"Thumbnails"!==e||r.gallery.one(".thumbnail-wrapper img[src]")||m();p()});w("gallery-autoplay",function(e){o.set("autoplay",e)});w("gallery-aspect-ratio",function(){m()});w("galleryAutoplaySpeed",function(){y(m)});w("galleryInfoBackground",function(){g()});w("gallery-design",m);w("aspect-ratio",m);w("gridSpacing",m);w("gridSize",m);t.Global&&l.push(t.Global.on(["tweak:reset","tweak:close"],function(e){t.later(500,this,m)},this))}function C(){m();x();t.Lang.isValue(Static.SQUARESPACE_CONTEXT.authenticatedAccount)&&T()}function S(){l=l.filter(function(e){e.detach();return false});n=n.filter(function(e){"function"===typeof e.destroy&&e.destroy();return false});if(o){o.get("container")&&o.get("container").hide();"function"===typeof o.destroy&&o.destroy()}if(a){a.get("container")&&a.get("container").hide();"function"===typeof a.destroy&&a.destroy()}}return{init:C,destroy:S}};var o=new i;o.init();n.Squarespace.onDestroy(t,function(){if(o){o.destroy&&"function"===typeof o.destroy&&o.destroy();o=null}})}var i=r;n.default=i},{}],31:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=o;var r=i(e("./get-page-content"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n="";if(e==="page"){n=new Promise(function(e){(0,r.default)(t).then(t=>e(t))})}return n?n:Promise.resolve("")}},{"./get-page-content":32}],32:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=a;var r=o(e("../utils/fetch-data"));var i=o(e("../utils/remove-attributes"));function o(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.split(">").length>1?e.split(">")[0]:e.split("_")[0];var n=e.replace(t,"").replace(/(>|_)/,"");function o(e,t){var n=e.querySelector("body");if(n){var r=[...n.classList];var i=r.findIndex(e=>e.match(t));return i?r[i]:""}return""}function a(e){var t=(new DOMParser).parseFromString(e,"text/html");var r=document.createElement("div");var a=t.querySelector('[data-content-field="main-content"]')||t.querySelector("#page")||t.querySelector("body");var s=t.querySelector("#sectionThemesStyles");var l=[...t.querySelectorAll("[data-lightbox-code-injection]")];var u=a.querySelector(".sqs-layout");var c=a.querySelector(".system-page");if(n){var f=a.querySelector(n)||a.querySelector("#"+n)||a.querySelector("."+n);if(f){r.appendChild(f)}else{r.innerHTML='<span class="error-label">Error:</span> The '.concat(n," element not found.")}}else{r.appendChild(a.firstElementChild)}if(s){s.removeAttribute("id");s.className="section-themes-styles";r.appendChild(s)}l.forEach(e=>r.appendChild(e));if(u){(0,i.default)(u,["class"])}if(c){c.classList.remove("system-page")}var d=(o(t,/^collection-type-/)||"none").replace("collection-type-","");var p=new RegExp("^(tweak-|)".concat(d));var h="collection-type-".concat(d);h+=" ".concat(t.querySelector(".view-list")?"view-list":""," ");h+=" ".concat(t.querySelector(".view-item")?"view-item":""," ");h+=document.body.className.split(" ").filter(e=>e.match(p)).join(" ");h=h.replace(/\s+/g," ");r.className=h;return r}function s(){return(0,r.default)({url:t,format:"html",htmlTarget:"html"}).then(e=>{try{return a(e)}catch(e){console.error("Lightbox Fetch Data:",e);return'<span class="error-label">Error:</span> Page '.concat(t," not found. Please, check the page URL slug!")}})}return s()}},{"../utils/fetch-data":44,"../utils/remove-attributes":48}],33:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=void 0;function r(e){var t={"сloseInside":e.iconCloseInside?decodeURI(e.iconCloseInside):'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path></svg>',close:e.iconClose?decodeURI(e.iconClose):'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>',slideShowPlay:e.iconSlideshowPlay?decodeURI(e.iconSlideshowPlay):'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z"/></svg>',slideShowPause:e.iconSlideshowPause?decodeURI(e.iconSlideshowPause):'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 24h-6v-24h6v24zm10 0h-6v-24h6v24zm-11-23h-4v22h4v-22zm10 0h-4v22h4v-22z"/></svg>',thumbs:e.iconThumbs?decodeURI(e.iconThumbs):'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M23.99 0H13v11h11l-.01-11zM14 1v9h9l-.01-9H14zM10.99 0H0v11h11l-.01-11zM1 1v9h9l-.01-9H1zM23.99 13H13v11h11l-.01-11zM14 14v9h9l-.01-9H14zM10.99 13H0v11h11l-.01-11zM1 14v9h9l-.01-9H1z"/></svg>',arrowLeft:e.iconArrowLeft?decodeURI(e.iconArrowLeft):'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg>',arrowRight:e.iconArrowRight?decodeURI(e.iconArrowRight):'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/></svg>'};var n={closeExisting:true,loop:true,preventCaptionOverlap:true,buttons:["slideShow","thumbs","close"],idleTime:+e.autohideControls||false,protect:true,slideClass:"c-lightbox__slide",baseClass:"c-lightbox",animationDuration:350,transitionDuration:350,thumbs:{autoStart:false,hideOnClose:true,parentEl:".fancybox-container",axis:"x"},baseTpl:'<div class="fancybox-container c-lightbox" role="dialog" tabindex="-1">'+'<div class="fancybox-bg c-lightbox__overlay"></div>'+'<div class="fancybox-inner c-lightbox__inner">'+'<div class="fancybox-infobar c-lightbox__infobar"><span data-fancybox-index></span>/<span data-fancybox-count></span></div>'+'<div class="fancybox-toolbar c-lightbox__toolbar compensate-for-scrollbar">{{buttons}}</div>'+'<div class="fancybox-navigation c-lightbox__nav">{{arrows}}</div>'+'<div class="fancybox-stage c-lightbox__stage"></div>'+'<div class="fancybox-caption c-lightbox__caption"><div class="fancybox-caption__body c-lightbox__caption-inner"></div></div>'+'<ul class="c-lightbox__nav-dots"></ul>'+"</div>"+"</div>",spinnerTpl:'<div class="c-lightbox__loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{close:'<button data-fancybox-close class="fancybox-button fancybox-button--close c-lightbox__button c-lightbox__button--close">'.concat(t.close,"</button>"),slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play c-lightbox__button c-lightbox__button--slideshow">\n          '.concat(t.slideShowPlay,"\n          ").concat(t.slideShowPause,"\n        </button>"),thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs c-lightbox__button c-lightbox__button--thumbs">'.concat(t.thumbs,"</button>"),arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left c-lightbox__button c-lightbox__button--arrow_left"><div>'.concat(t.arrowLeft,"</div></button>"),arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right c-lightbox__button c-lightbox__button--arrow_right"><div>'.concat(t.arrowRight,"</div></button>"),smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small c-lightbox__close">'.concat(t.сloseInside,"</button>")},parentEl:document.querySelector("#siteWrapper")?"#siteWrapper":"body",hideScrollbar:true,autoFocus:false,backFocus:false,trapFocus:true,touch:"ontouchstart"in document.documentElement?{vertical:true,momentum:true}:false,hash:false,clickSlide:e.clickOutside||"close",media:{loom:{matcher:/^.+loom.com\/share\/([a-z0-9]*)(.*)?/,params:{autoplay:1},paramPlace:2,type:"iframe",url:"https://www.loom.com/embed/$1"},wistia:{matcher:/^.+support.wistia.com\/medias\/([a-z0-9]*)(.*)?/,params:{autoPlay:1,videoFoam:1},paramPlace:2,type:"iframe",url:"https://fast.wistia.net/embed/iframe/$1"}},mobile:{preventCaptionOverlap:true}};function r(){n=Object.assign(n,e);if(e.displayThumbsOnOpen){n.thumbs.autoStart=true}}r(e);return n}var i=r;n.default=i},{}],34:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=void 0;var r=e("throttle-debounce");var i=w(e("get-scrollbar-width"));var o=w(e("./fancybox"));var a=w(e("./lightbox-config"));var s=w(e("../utils/sqs-esc"));var l=w(e("./fixed-elements-position"));var u=w(e("./gallery-page-70"));var c=w(e("./sort-links"));var f=w(e("./get-link-data"));var d=w(e("@squarespace/core/Lifecycle"));var p=w(e("../utils/reinit-site-lifecycle-71"));var h=w(e("../utils/execute-js-from-html"));var g=w(e("../utils/remove-attributes"));var m=w(e("../utils/sqs-load-images"));var y=w(e("../utils/refresh-images"));var v=w(e("./replace-gallery-lightbox"));var b=w(e("./replace-block-image-lightbox"));var x=w(e("../utils/is-backend"));function w(e){return e&&e.__esModule?e:{default:e}}var T=[];function C(e,t){var n=[...e.querySelectorAll('iframe[src*="autoplay"], iframe[data-src*="autoplay"]')];n.forEach(e=>{if(!e.getAttribute("data-src")){e.setAttribute("data-src",e.getAttribute("src"))}if(t==="open"){e.setAttribute("src",e.getAttribute("data-src"))}else{e.removeAttribute("src");var n=e.cloneNode();e.parentNode.insertBefore(n,e);e.parentNode.removeChild(e)}})}function S(e,t){if(t.classList.contains("collection-type-gallery")){setTimeout(function(){if(!t.querySelector(".slides[style]")){(0,u.default)('[id="'.concat(e,'"]'))}},500);var n=Y.one(t).one(".slides").getData("gallery");var r=t.querySelector(".slides");var i=[...r.querySelectorAll(".slides .slide")];var o=[...r.querySelectorAll(".slides .slide .slide-meta")];r.style.display="";if(n){n.refresh()}r.removeAttribute("data-collection-full-url");i.forEach(e=>(0,g.default)(e,["id","class","style"]));o.forEach(e=>{e.removeAttribute("style");if(!e.firstElementChild){e.innerHTML=""}});setTimeout(function(){window.dispatchEvent(new Event("resize"))},1e3)}}function E(e){var t=e.firstElementChild;var n=t&&t.getAttribute?t.getAttribute("src"):"";if(n)n=n.replace(/\?format=[0-9]+w/,"");var r=document.querySelector('.sqs-gallery-thumbnails img[src^="'.concat(n,'"]'));if(r){r.click()}}function A(){var e=[...document.querySelectorAll('.c-lightbox[class*="is-open"] .sqs-add-to-cart-button')];e.forEach(e=>{var t=e.cloneNode(true);e.parentNode.appendChild(t);e.parentNode.removeChild(e)})}function _(){if(window.Y&&Y.Squarespace.Commerce&&Y.Squarespace.Commerce.destroyCommerce){Y.Squarespace.Commerce.destroyCommerce();A();Y.Squarespace.Commerce.initializeCommerce()}}function k(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1e3;setTimeout(function(){d.default.init();_();(0,p.default)();(0,y.default)()},e)}function P(e,t,n){if(t.contentLoaded){return Promise.resolve(t)}var r=n.parentNode.parentNode;var i=document.createElement("div");i.className="c-lightbox__loading";var o=t.sourceType==="page"?(0,f.default)(t.sourceType,t.target):t.content;r.classList.add("is-loading");r.appendChild(i);return o.then(o=>{t.contentLoaded=true;if(o&&typeof o==="object"){n.appendChild(o)}else if(o){n.innerHTML=o}if(e.codeInjection){n.innerHTML=n.innerHTML+decodeURI(e.codeInjection)}if(t.sourceType==="page"&&typeof o==="object"){S("lightbox__".concat(t.id,"__content"),o);(0,m.default)(o,"img:not([src])");setTimeout(()=>{(0,h.default)(n)},150);if(!e.preloadContent){k(0)}else{C(n,"close")}}setTimeout(()=>{r.removeChild(i);r.classList.remove("is-loading");r.classList.add("is-loaded")},250)})}function $(e,t,n){var r="lightbox__"+t.id+"__content";var i=t.link;var o=t.sourceType==="page"||t.sourceType==="element"?"#"+r:t.target;i.classList.add("lightbox-link");i.classList.add("not-initialized");i.setAttribute("href","#l-"+t.id);i.setAttribute("rel","nofollow");i.setAttribute("data-id",t.id);i.setAttribute("data-src",o);i.setAttribute("data-source-type",t.sourceType);if(t.type==="inline"||t.type==="iframe"){i.setAttribute("data-type",t.type)}if(t.group){i.setAttribute("data-fancybox",t.group)}if(t.sourceType!=="image"&&t.sourceType!=="embed-video"){i.setAttribute("data-touch",false)}if(t.sourceType!=="iframe"||t.sourceType!=="image"){var a=document.createElement("div");var s=document.createElement("div");var l=document.createElement("div");a.setAttribute("id",r);a.setAttribute("data-type",t.type);a.className="c-lightbox__content";if(t.group){a.setAttribute("data-group",t.group)}s.className="c-lightbox__content-wrapper";l.className="c-lightbox__content-inner";n.appendChild(a);a.appendChild(s);s.appendChild(l);t.contentContainer=l;if(e.preloadContent||t.sourceType!=="page"){P(e,t,t.contentContainer)}}if(t.duplicateLinks){t.duplicateLinks.forEach(e=>{e.classList.add("lightbox-link");e.setAttribute("data-source-type",t.sourceType);e.setAttribute("href","#l-"+t.id);e.setAttribute("rel","nofollow");e.addEventListener("click",e=>{e.preventDefault();t.link.click()})})}}function L(e){function t(e){return(e.getAttribute("href")||"").match(/^(http|\/|#close-lightbox)/)&&!e.getAttribute("target")}e.$refs.container[0].addEventListener("click",n=>{if(t(n.target)||t(n.target.parentNode)||t(n.target.parentNode.parentNode)){e.close()}})}function j(e){var t=e.$refs.container[0].querySelector(".c-lightbox__nav-dots");e.group.forEach((n,r)=>{var i=document.createElement("li");var o=document.createElement("button");o.innerHTML="<span></span>";i.appendChild(o);t.appendChild(i);o.setAttribute("aria-label","Slide "+(r+1));o.addEventListener("click",()=>{e.jumpTo(r)})})}function q(e){var t=[...e.$refs.container[0].querySelectorAll(".c-lightbox__nav-dots button")];t.forEach((t,n)=>{t.classList.remove("is-active");if(e.currIndex===n){t.classList.add("is-active")}})}function D(e){var t=e.parentNode.parentNode;var n=(0,i.default)();var r=t.querySelector(".c-lightbox__close");var o=r?window.getComputedStyle(r):"";function a(e){if(r&&n&&o.right==="0px"){if(e){r.style.transform="translateX(-".concat(n,"px)")}else{r.style.transform=""}}}if(t.getAttribute("data-type")!=="inline"||!t.getAttribute("data-group")){return null}t.style.height="100%";if(e.offsetHeight>t.offsetHeight){t.classList.add("is-overflow");a(true)}else{t.classList.remove("is-overflow");a(false)}t.style.height=""}function M(e,t){t.onInit=function(e){if(e.group.length>1){j(e)}};t.beforeShow=function(t,n){var r=n.opts.$orig[0].getAttribute("data-id");var i=T.filter(e=>e.id===r)[0];var o=t.$refs.container[0];o.setAttribute("id","lightbox_"+(i.group?i.group:i.id));o.setAttribute("data-type",i.type);if(i.group){o.setAttribute("data-group",i.group)}if(t.group.length>1){q(t)}if(!e.preloadContent){P(e,i,i.contentContainer).then(()=>{D(i.contentContainer);setTimeout(()=>D(i.contentContainer),500);if(t.current.$content[0].querySelector(".sqs-gallery")){window.dispatchEvent(new Event("resize"));setTimeout(()=>window.dispatchEvent(new Event("resize")),100)}})}D(i.contentContainer);s.default.disable();(0,l.default)(true,"c-lightbox");(0,y.default)();L(t);document.body.classList.add("lightbox-is-open")};t.afterShow=function(e){C(e.current.$content[0],"open")};t.beforeClose=function(e){C(e.current.$content[0],"close");E(e.current.$content[0])};t.afterClose=function(){(0,l.default)();s.default.enable();document.body.classList.remove("lightbox-is-open")};return t}function O(){var e=[];var t=[...document.querySelectorAll('a[href^="http"]:not([target="_blank"])')];t.forEach(t=>{if(t.getAttribute("href").match(/(youtu.be|youtube.com|vimeo.com|loom.com|wistia.com\/medias\/)/)){e.push(t)}});return e}function N(e){var t=O();if(e.replaceGalleryLightbox==="true"&&!(0,x.default)()){[...document.querySelectorAll(".sqs-block-gallery[data-block-json*='lightbox\":true'],.gallery [data-props*=lightboxEnabled]")].forEach(t=>{(0,v.default)(t,{hideCaption:e.hideCaption==="true"})})}if(e.replaceBlockImageLightbox==="true"&&!(0,x.default)()){[...document.querySelectorAll(".sqs-block-image .lightbox")].forEach(t=>{(0,b.default)(t,{hideCaption:e.hideCaption==="true"})})}if(e.videoLinksPrefix==="false"){t.forEach(e=>{e.setAttribute("href","#lightbox>"+e.getAttribute("href"))})}if(e.attachCrossIconToVideo==="true"){t.forEach(e=>e.setAttribute("data-small-btn","true"))}var n=document.querySelector("#lightbox-items-content");if(!n){n=document.createElement("div");n.setAttribute("id","lightbox-items-content");document.body.appendChild(n)}var i=(0,c.default)([...document.querySelectorAll('[href*="#lightbox"]')]);var s=[];var l=[];var u=[];i.forEach(t=>{T.push(t);if(t.sourceType!=="page"){t.content=(0,f.default)(t.sourceType,t.target);s.push(t)}else{if(e.preloadContent){t.content=(0,f.default)(t.sourceType,t.target)}l.push(t)}});l.forEach(e=>u.push(e.content));Promise.all(u).then(()=>{if(e.preloadContent){k()}});s.forEach(t=>$(e,t,n));l.forEach(t=>$(e,t,n));var d=(0,a.default)(e);d=M(e,d);(0,o.default)(".lightbox-link.not-initialized").fancybox(d).each((e,t)=>{t.classList.remove("not-initialized")});window.addEventListener("resize",(0,r.debounce)(100,()=>{[...document.querySelectorAll(".c-lightbox__content-inner")].forEach(e=>{D(e)})}))}var I={init:N};n.default=I},{"../utils/execute-js-from-html":43,"../utils/is-backend":45,"../utils/refresh-images":46,"../utils/reinit-site-lifecycle-71":47,"../utils/remove-attributes":48,"../utils/sqs-esc":49,"../utils/sqs-load-images":50,"./fancybox":28,"./fixed-elements-position":29,"./gallery-page-70":30,"./get-link-data":31,"./lightbox-config":33,"./replace-block-image-lightbox":36,"./replace-gallery-lightbox":37,"./sort-links":38,"@squarespace/core/Lifecycle":3,"get-scrollbar-width":9,"throttle-debounce":24}],35:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=o;var r=i(e("@ryanmorr/ready"));function i(e){return e&&e.__esModule?e:{default:e}}function o(){function e(){var e=[...document.querySelectorAll(".sqs-widgets-confirmation.alert")];var t=[];if(e.length>1){var n=e[1].querySelector(".message").textContent;for(var r=1;r<e.length;r++){var i=e[r].querySelector(".message").textContent;if(i===n){t.push(e[r])}}}t.forEach(e=>e.parentNode.removeChild(e));if(t.length){var o=e[0].querySelector(".confirmation-button");o.addEventListener("click",function(){var e=[...document.querySelectorAll(".sqs-widgets-confirmation-overlay")];e.forEach(e=>e.parentNode.removeChild(e))})}}(0,r.default)(".sqs-widgets-confirmation.alert ~ .sqs-widgets-confirmation.alert",e)}},{"@ryanmorr/ready":1}],36:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=r;function r(e,t){if(!e){return null}var n=e.querySelector("img[data-src]");var r=document.createElement("a");r.setAttribute("href","#lightbox>"+(n.getAttribute("src")||n.getAttribute("data-src")+"?format=2500w"));r.setAttribute("data-title",e.getAttribute("data-title")||"");r.setAttribute("data-description",e.getAttribute("data-description")||"");n.parentNode.appendChild(r);n.parentNode.classList.add("lightbox-link-wrapper");r.appendChild(n.cloneNode());r.addEventListener("click",e=>e.stopPropagation());var i=r.getAttribute("data-title")||n.getAttribute("alt").split(" _TD_ ")[0];var o=r.getAttribute("data-description")||n.getAttribute("alt").split(" _TD_ ")[1]||"";var a=(i.match(/(\.jpg|\.jpeg|\.png|\.gif)$/i)||o.indexOf(i)!==-1?"":"<h3>".concat(i,"</h3>"))+"".concat(o?o:"");if(!t.hideCaption&&(i||o)){r.setAttribute("data-caption",a)}}},{}],37:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=r;function r(e,t){function n(e){var t=e.querySelector(".sqs-video-wrapper");var n=t?t.getAttribute("data-html"):"";var r=document.createElement("div");r.innerHTML=n;var i=r.querySelector("iframe");return i?i.getAttribute("src"):false}function r(){history.pushState("",document.title,window.location.pathname+window.location.search)}var i=e.getAttribute("data-section-id")||e.getAttribute("id");var o=[...e.querySelectorAll('.margin-wrapper .video-lightbox-wrapper, .margin-wrapper a, a[class*="lightbox-link"], figure.has-clickthrough a')];if(!o.length){o=[...e.querySelectorAll(".slide, .image-wrapper")]}o.forEach(e=>{e.style.poinerEvent="none";var o=e.querySelector("img");var a=o.cloneNode();var s=o.getAttribute("alt");if(!o){return null}var l=e.getAttribute("data-title")||(s?s.split(" _TD_ ")[0]:"");var u=e.getAttribute("data-description")||(s?s.split(" _TD_ ")[1]:false)||"";var c=l.match(/(\.jpg|\.jpeg|\.png|\.gif)$/i)?"":"<h3>".concat(l,"</h3>").concat(u?u:"");var f=o.getAttribute("data-src");var d=e.getAttribute("href")||n(e)||"";var p=d.match(/(youtu.be|youtube.com|vimeo.com|loom.com|wistia.com\/medias)/)?d:"";var h="#lightbox>"+(p?p:f+"?format=2500w");var g=document.createElement("a");g.setAttribute("data-fancybox",i);if(!t.hideCaption&&(l||u)){g.setAttribute("data-caption",c)}g.setAttribute("href",h);g.className=e.className;e.appendChild(g);e.classList.add("lightbox-link-wrapper");g.addEventListener("click",e=>e.stopPropagation());setTimeout(function(){if(o.style.top&&o.style.top==="0px"||!o.style.top){g.appendChild(a);a.setAttribute("src",f);var e=new MutationObserver(function(){a.setAttribute("style",o.getAttribute("style"))});e.observe(o,{attributes:true})}},100);var m=e.querySelector(".sqs-video-overlay");if(m){var y=m.cloneNode(true);g.appendChild(y);y.style.opacity="1";g.className="sqs-video-wrapper image-slide-anchor content-fill";g.style.cursor="pointer";o.className="thumb-image loaded"}g.addEventListener("click",()=>setTimeout(r,10))})}},{}],38:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=void 0;function r(e){return e.replace(/^\//,"").replace(/https:\/\//,"").replace(/\.|\#/,"").replace(/[^a-zA-Z0-9-_]/g,"-")}function i(e){if(e.match(/^#lightbox(>|_)http/)||e.match(/^#lightbox(>|_)(\#|\.)/)){return e.replace(/#lightbox(>|_)/,"")}e=e.replace(/#lightbox(>|_|-)/,"").split("/").filter(e=>e);if(e[0].indexOf("http")!==-1){e.shift();e.shift()}e="/"+e.join("/");return e.split("?").shift()}function o(e){var t=e.split("?");if(t[1]){var n=t[1].split("&").filter(e=>e.indexOf("group")!==-1)[0];return n&&n.split("=")?n.split("=")[1]:false}}function a(e){var t=[];e.forEach(e=>{if(e.getAttribute("target")==="_blank"){return null}var n=e.getAttribute("href");var a=i(n);var s=o(n)||e.getAttribute("data-fancybox");var l=r(a);var u=t.filter(e=>e.id===l)[0];if(u){if(u.duplicateLinks){u.duplicateLinks.push(e)}else{u.duplicateLinks=[e]}return null}var c="page";var f="inline";if(a.match(/^http/)&&a.match(/(youtu.be|youtube.com|vimeo.com|loom.com|wistia.com\/medias\/)/)){c="embed-video";f="video"}else if(a.match(/^http.*(\.jpg|\.jpeg|\.png|\.gif)(\?format=[0-9]{1,}w)?$/i)){c="image";f=c}else if(a.match(/^http/)){c="iframe";f=c}t.push({sourceType:c,type:f,group:s,id:l,target:a,link:e})});return t}var s=a;n.default=s},{}],39:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=void 0;var r=o(e("array-from"));var i=o(e("promise-polyfill"));e("es6-object-assign/auto");e("mutationobserver-shim");e("whatwg-fetch");function o(e){return e&&e.__esModule?e:{default:e}}var a={init(){if(!Array.from){Array.from=r.default}if(!window.Promise){window.Promise=i.default}}};var s=a;n.default=s},{"array-from":5,"es6-object-assign/auto":7,"mutationobserver-shim":11,"promise-polyfill":14,"whatwg-fetch":26}],40:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=void 0;var r=o(e("./dom-loaded"));var i=o(e("@squarespace/core/Tweak"));function o(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=document.querySelector("body[data-ajax-loader]");if(t){var n=new MutationObserver(function(n){if(n[0].attributeName==="data-ajax-loader"&&t.getAttribute("data-ajax-loader")==="loaded"){e()}});n.observe(t,{attributes:true})}else{window.addEventListener("mercury:load",e)}}function s(e){if(i.default.getValue("tweak-site-ajax-loading-enable")){(0,r.default)(()=>setTimeout(()=>a(e),100))}}var l=s;n.default=l},{"./dom-loaded":42,"@squarespace/core/Tweak":4}],41:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=r;function r(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:[];var r=function r(i){var o=e.attributes[i].name;var a=e.attributes[i].value;if(!n.filter(e=>e===o).length){t.setAttribute(o,a)}};for(var i=e.attributes.length-1;i>=0;i--){r(i)}}},{}],42:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=r;function r(e){if(document.readyState==="interactive"||document.readyState==="complete"){e()}else{document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",t);e()})}}},{}],43:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=void 0;var r=o(e("shortid"));var i=o(e("../utils/copy-attributes"));function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return e.textContent.replace(/document\.write\s{0,}\(/g,"document.querySelector('script[data-dynamic-id=\"".concat(t,"\"]').insertAdjacentHTML('beforebegin',"))}function s(e){if(!e.length){if(document.readyState!=="loading"){document.dispatchEvent(new Event("DOMContentLoaded"))}return false}function t(){s(e)}var n=e.shift();var o=document.createElement("script");(0,i.default)(n,o);if(n.src){o.onload=t;o.onerror=t;o.src=n.src}else{o.textContent=n.textContent;if(n.textContent.indexOf("document.write")!==-1){var l=r.default.generate();o.setAttribute("data-dynamic-id",l);o.textContent=a(o,l)}}n.parentNode.insertBefore(o,n);n.parentNode.removeChild(n);if(!o.src){t()}}function l(e){var t=[];e.querySelectorAll("script").forEach(function(e){var n=e.getAttribute("type");if(!n||n==="text/javascript"){t.push(e)}});if(t.length){s(t)}}function u(e){l(e)}var c=u;n.default=c},{"../utils/copy-attributes":41,shortid:15}],44:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=void 0;function r(e){var t=localStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}}function i(e,t){t=typeof t==="object"?JSON.stringify(t):t;localStorage.setItem(e,t)}function o(e){var t=r(e.storageKeyExpires);return t&&t<=Date.now()}function a(e){var t={collection:e.collection};var n=e.item;var r=e.items;if(n){delete n.body;t.item=n}if(r){r=r.map(function(e){delete e.body;return e});t.items=r}return t}function s(e,t){if(!t){throw new Error("Data is empty!")}var n=r(e.storageKey);function s(t){var n=e.localCacheExpires*60*1e3+Date.now();i(e.storageKeyExpires,n);i(e.storageKey,t)}if(e.format==="json"&&e.reduceData){t=a(t)}if(n&&o(e)){s(t)}else if(!n){s(t)}return Promise.resolve(t)}function l(e,t){if(t.status!==200){throw new Error("Fetch Error: ".concat(t.statusText||t.status))}else{return t}}function u(e,t){var n=e.split("?")[0];var r="?format="+t+(e.split("?")[1]?"&"+e.split("?")[1]:"");if(n.indexOf("http")===-1&&n.indexOf("/")!==0){n="/"+n}return n+r}function c(e){var t=e.url;if(e.format){t=u(e.url,e.format)}return t}function f(e,t){var n=new DOMParser;var r=n.parseFromString(e,"text/html");var i=r.querySelector(t);return i.innerHTML?i.innerHTML:"Empty"}function d(e){return fetch(c(e),e.fetch).then(t=>l(e,t)).then(t=>e.format==="json"?t.json():t.text()).then(t=>{return e.format==="html"?f(t,e.htmlTarget):t}).catch(console.error)}function p(e){if(!e.localCache){return d(e)}var t=r(e.storageKey);if(t){if(o(e)){d(e).then(t=>s(e,t))}return Promise.resolve(t)}return d(e).then(t=>s(e,t))}function h(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};e=Object.assign({url:null,format:"json",fetch:{cache:"no-store",credentials:"same-origin"},reduceData:false,localCache:false,localCacheExpires:5},e);if(!e.url){console.error("Fetch Data: Need to set URL!");return null}e.storageKey=e.storageKey||e.url+"_"+e.format;e.storageKeyExpires=e.storageKey+"_expires";return p(e)}var g=h;n.default=g},{}],45:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=void 0;function r(){return window.parent.Static&&window.parent.Static.IN_BACKEND===true}var i=r;n.default=i},{}],46:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=r;function r(){setTimeout(function(){if(window.Y){Y.all("img").each(function(e){if(e.refresh){e.refresh()}})}else{window.dispatchEvent(new Event("resize"))}},10)}},{}],47:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=r;function r(){var e=document.querySelector('script[src$="site-bundle.js"]');if(e){var t=[...document.querySelectorAll("body, #header, #page [data-controller][data-props]")];var n=document.createElement("script");var r=e.parentNode;n.src=e.getAttribute("src");r.removeChild(e);i(t);setTimeout(()=>{r.appendChild(n);setTimeout(()=>o(t),100)},100)}function i(e){e.forEach(e=>{e.setAttribute("data-freeze-controller",e.getAttribute("data-controller"));e.removeAttribute("data-controller")})}function o(e){e.forEach(e=>{e.setAttribute("data-controller",e.getAttribute("data-freeze-controller"));e.removeAttribute("data-freeze-controller")})}}},{}],48:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=void 0;function r(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];var n=function n(r){var i=e.attributes[r].name;if(!t.filter(e=>e===i).length){e.removeAttribute(i)}};for(var r=e.attributes.length-1;r>=0;r--){n(r)}}var i=r;n.default=i},{}],49:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=void 0;function r(){return Y&&Y.Squarespace&&Y.Squarespace.EscManager}var i={disable:()=>r()?Y.Squarespace.EscManager.disable():"",enable:()=>r()?Y.Squarespace.EscManager.enable():""};var o=i;n.default=o},{}],50:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:true});n.default=void 0;var r=i(e("@squarespace/core/ImageLoader"));function i(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"body";var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"img[data-src]";var n=null;if(typeof e==="string"){n=[...document.querySelectorAll(e+" "+t)]}else{n=[...e.querySelectorAll(t)]}n.forEach(e=>{r.default.load(e,{load:true});e.classList.add("loaded")})}var a=o;n.default=a},{"@squarespace/core/ImageLoader":2}]},{},[27]);