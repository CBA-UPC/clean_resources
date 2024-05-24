/* FIX FOR WORDPRESS's CRAZY <p> TAG ANOMALY */
.rs-p-wp-fix { display: none !important; margin: 0 !important; height: 0px !important; }

/* NEW Z-INDEX FIX*/
.wp-block-themepunch-revslider { position: relative }

/* FIX FOR QUICK LOADING OF SLIDER SCRIPTS AND WP-ROCKET READDING IMG TAG INTO DOM*/
/*rs-sbg-px rs-sbg-wrap img { display:none !important}*/

/* MODAL BASICS */
rs-modal { position: fixed !important; z-index: 9999999 !important; pointer-events: none !important;}
rs-modal.rs-modal-auto { top: auto;bottom: auto;left: auto; right:auto; }
rs-modal.rs-modal-fullwidth,
rs-modal.rs-modal-fullscreen { top: 0px; left: 0px; width: 100%; height: 100%; }
rs-modal rs-fullwidth-wrap { position: absolute; top: 0px; left: 0px; height: 100%;}
rs-module-wrap.rs-modal { display:none; max-height: 100% !important; overflow: auto !important;  pointer-events: auto !important;}
rs-module-wrap.hideallscrollbars.rs-modal { overflow: hidden !important; max-width: 100% !important}
rs-modal-cover { width: 100%; height: 100%; z-index: 0; background: transparent; position: absolute;top: 0px;left: 0px; cursor: pointer; pointer-events: auto}
body>rs-modal-cover { position: fixed; z-index: 9999995 !important; }

rs-sbg-px { pointer-events: none }

.rs-forceuntouchable,
.rs-forceuntouchable * { pointer-events: none !important; }

.rs-forcehidden * { visibility: hidden !important; }

/*rs-modal rs-fullwidth-wrap rs-module-wrap { transform: translateY(-50%) !important; top: 50% !important; }*/

.rs_splitted_lines { display: block; white-space: nowrap !important}

.rs-go-fullscreen {
	position:fixed !important;
	width:100% !important;
	height:100% !important;
	top:0px !important;
	left:0px !important;
	z-index:9999999 !important;
	background:#ffffff;
}
.rtl {	direction: rtl;}
@font-face {
  font-family: 'revicons';
  src: url('../fonts/revicons/revicons.eot?5510888');
  src: url('../fonts/revicons/revicons.eot?5510888#iefix') format('embedded-opentype'),
	   url('../fonts/revicons/revicons.woff?5510888') format('woff'),
	   url('../fonts/revicons/revicons.ttf?5510888') format('truetype'),
	   url('../fonts/revicons/revicons.svg?5510888#revicons') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

 [class^="revicon-"]:before, [class*=" revicon-"]:before {
  font-family: "revicons";
  font-style: normal;
  font-weight: normal;
  speak: never;
  speak-as: spell-out;
  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: .2em;
  text-align: center;

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


rs-module i[class^="fa-"],
rs-module i[class*=" fa-"],
.rb-modal-wrapper i[class^="fa-"],
.rb-modal-wrapper i[class*=" fa-"],
#waitaminute i[class^="fa-"],
#waitaminute i[class*=" fa-"],
#objectlibrary i[class^="fa-"],
#objectlibrary i[class*=" fa-"],
#rs_overview i[class^="fa-"],
#rs_overview i[class*=" fa-"],
#rs_overview_menu i[class^="fa-"],
#rs_overview_menu i[class*=" fa-"],
#builderView i[class^="fa-"],
#builderView i[class*=" fa-"]
{
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

rs-module [class^="fa-"]:before,
rs-module [class*=" fa-"]:before,
.rb-modal-wrapper [class^="fa-"]:before,
.rb-modal-wrapper [class*=" fa-"]:before,
#rs_overview [class^="fa-"]:before,
#rs_overview [class*=" fa-"]:before,
#objectlibrary [class^="fa-"]:before,
#objectlibrary [class*=" fa-"]:before,
#waitaminute [class^="fa-"]:before,
#waitaminute [class*=" fa-"]:before,
#rs_overview_menu [class^="fa-"]:before,
#rs_overview_menu [class*=" fa-"]:before,
#builderView [class^="fa-"]:before,
#builderView [class*=" fa-"]:before
{
	font-family: FontAwesome;
	font-style: normal;
	font-weight: 400;
	speak: never;
  	speak-as: spell-out;
	display: inline-block;
	text-decoration: inherit;
	width: auto;
	margin-right: 0;
	text-align: center;
	font-variant: normal;
	text-transform: none;
	line-height: inherit;
	margin-left: 0;
}

rs-module .sr-only,
#objectlibrary .sr-only,
#waitaminute .sr-only,
#rs_overview .sr-only,
#rs_overview_menu .sr-only,
.rb-modal-wrapper .sr-only,
#builderView .sr-only
{
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
rs-module .sr-only-focusable:active,
rs-module .sr-only-focusable:focus,
#waitaminute .sr-only-focusable:active,
#waitaminute .sr-only-focusable:focus,
#objectlibrary .sr-only-focusable:active,
#objectlibrary .sr-only-focusable:focus,
#rs_overview .sr-only-focusable:active,
#rs_overview .sr-only-focusable:focus,
#rs_overview_menu .sr-only-focusable:active,
#rs_overview_menu .sr-only-focusable:focus,
.rb-modal-wrapper .sr-only-focusable:active,
.rb-modal-wrapper .sr-only-focusable:focus,
#builderView .sr-only-focusable:active,
#builderView .sr-only-focusable:focus

{
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  clip: auto;
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




/******************************
	-	BASIC STYLES		-
******************************/

.tp-fullwidth-forcer { z-index: 0; pointer-events: none}
rs-module-wrap { visibility: hidden }
rs-module-wrap,
rs-module-wrap * { box-sizing: border-box; -webkit-tap-highlight-color: rgba(0,0,0,0);}

rs-module-wrap {position:relative;z-index: 1;width:100%; display: block;}

.rs-fixedscrollon rs-module-wrap { position: fixed !important; top: 0px !important; z-index: 1000; left: 0 !important;}
.rs-stickyscrollon rs-module-wrap {  position: sticky !important; top:0px; z-index: 1000; }
.rs-stickyscrollon { overflow: visible !important; }

rs-fw-forcer { display:block;width:100%;pointer-events: none;}
rs-module { position:relative;overflow:hidden;display: block; }

rs-module.disableVerticalScroll { -ms-touch-action: pan-x; touch-action: pan-x; }


rs-pzimg-wrap,
rs-sbg-effectwrap,
rs-sbg { display: block; pointer-events: none  }

rs-sbg-effectwrap {
	position:absolute;top:0px;left:0px;width:100%;height:100%
}

rs-carousel-wrap rs-column rs-layer img { width: 0px; height: 0px; }

rs-sbg-px,
rs-sbg-wrap {position:absolute; top:0px; left:0px; z-index:0;width:100%;height:100%;display: block;}

a.rs-layer,
a.rs-layer:-webkit-any-link { text-decoration: none }

a[x-apple-data-detectors] { color: inherit !important;   text-decoration: none !important;   font-size: inherit !important;   font-family: inherit !important;   font-weight: inherit !important;   line-height: inherit !important; }

.entry-content rs-module a, rs-module a { box-shadow: none; }

.rs-ov-hidden 		{ 	overflow:hidden !important;}


.rs-forceoverflow,
.rs-forceoverflow rs-module-wrap,
.rs-forceoverflow rs-module,
.rs-forceoverflow rs-slides,
.rs-forceoverflow rs-slide { overflow:visible !important}

.rs-parallax-hidden-of rs-slide { overflow:hidden !important}

.tp-simpleresponsive img,
rs-module img{
	max-width:none !important;
	transition: none;
	margin:0px;
	padding:0px;
	border:none;
}



rs-module .no-slides-text{font-weight:bold;text-align:center;padding-top:80px;}


rs-slides, rs-slide, rs-slide:before {	 position:absolute;text-indent: 0em;top:0px;left:0px;}
rs-slide,rs-slide:before {  display:block; visibility:hidden; }

.rs-layer .rs-untoggled-content { display:block;}
.rs-layer .rs-toggled-content { display:none;}

.rs-tc-active.rs-layer > .rs-toggled-content { display:block;}
.rs-tc-active.rs-layer > .rs-untoggled-content { display:none;}

.rs-layer-video { overflow: hidden }

.rs_html5vidbasicstyles { position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden; }

rs-module rs-layer,
rs-module .rs-layer {
	opacity: 0;
	position:relative;
	visibility: hidden;
	/*white-space: nowrap; Fix for Mobile Padding issues on long texts */
	display: block;
	-webkit-font-smoothing: antialiased !important;
	-webkit-tap-highlight-color:rgba(0, 0, 0, 0);
	-moz-osx-font-smoothing: grayscale;
	z-index:1;
	font-display: swap;
}

rs-layer-wrap,
rs-mask,
rs-module-wrap,
rs-module .rs-layer,
rs-module img {
	user-select: none;	
}

rs-module rs-mask-wrap .rs-layer,
rs-module rs-mask-wrap *:last-child,
.wpb_text_column rs-module rs-mask-wrap .rs-layer,
.wpb_text_column rs-module rs-mask-wrap *:last-child{
	margin-bottom:0;

}

.rs-svg svg {	width:100%; height:100%;position: relative;vertical-align: top}


rs-layer:not(.rs-wtbindex),
.rs-layer:not(.rs-wtbindex),
rs-alyer *:not(.rs-wtbindex),
.rs-layer *:not(.rs-wtbindex) { outline: none !important; }


/* CAROUSEL FUNCTIONS */
rs-carousel-wrap {
	cursor:url(openhand.cur), move;
}
rs-carousel-wrap.dragged {
	cursor:url(closedhand.cur), move;
}

rs-carousel-wrap.noswipe {
	cursor: default;
}

rs-carousel-wrap { position: absolute; overflow: hidden;  width:100%;height:100%;top:0px;left:0px;}
rs-carousel-space { clear:both;display:block;width:100%;height:0px;position:relative;}

/* ADDED FOR SLIDELINK MANAGEMENT */
.tp_inner_padding {
	box-sizing:border-box;
	max-height:none !important;
}


.rs-layer.rs-selectable {
	user-select: text;	
}



rs-px-mask {
	overflow: hidden;
	display: block;
	width: 100%;
	height: 100%;
	position: relative;
}

rs-module embed,
rs-module iframe,
rs-module object,
rs-module audio,
rs-module video {
	max-width: none !important;
	border: none;
}

rs-bg-elem 	{	position:absolute; top:0px;left:0px; width:100%;height:100%;z-index:0; display: block; pointer-events: none; }

.tp-blockmask,
.tp-blockmask_in,
.tp-blockmask_out { position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background: #fff; z-index: 1000; transform: scaleX(0) scaleY(0);}

/***********************************************************
	- 	ZONES / GOUP / ROW / COLUMN LAYERS AND HELPERS 	-
***********************************************************/
rs-zone			{	position:absolute; width:100%;left:0px; box-sizing: border-box;min-height:50px; font-size:0px;pointer-events: none}
rs-row-wrap,
rs-column,
rs-cbg-mask-wrap {	display:block; visibility: hidden}

rs-layer-wrap,
rs-parallax-wrap,
rs-loop-wrap,
rs-mask-wrap { display: block; }

rs-column-wrap>rs-mask-wrap,
rs-column-wrap>rs-loop-wrap { z-index: 1 }

rs-layer-wrap,
rs-mask-wrap,
rs-cbg-mask-wrap
 { transform-style:flat;}


/* ANY SAFARI NEEDS IN CAROUSEL SOME HELP TO AVOID FLICKERING, LOVELY....*/
@media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0) 
 	{ 
		 rs-carousel-wrap rs-layer-wrap, rs-carousel-wrap rs-loop-wrap {backface-visibility: hidden;transform-style: preserve-3d;}
	}

.safarifix rs-layer-wrap {
	perspective: 1000000;
}

@-moz-document url-prefix() {
 	rs-layer-wrap,
	rs-mask-wrap,
	rs-cbg-mask-wrap { perspective: none; }
}


rs-mask-wrap { overflow: hidden }
rs-fullwidth-wrap { position:relative;width:100%;height:auto;display: block; overflow:visible;max-width:none !important;}

.rev_row_zone_top 				{	top:0px;}
.rev_row_zone_bottom 			{	bottom:0px;}
.rev_row_zone_middle			{ top: 0px;}

rs-column-wrap .rs-parallax-wrap  { vertical-align: top }

.rs-layer img,
rs-layer img { vertical-align: top }

rs-row,
rs-row.rs-layer 	{
	display:table;
	position:relative;
	width:100% !important;
	table-layout: fixed;
	box-sizing: border-box;
	vertical-align: top;
	height:auto;
	font-size:0px;
}

.rs-layer.rs-waction.iospermaccwait.permanenthidden { display:none !important; visibility:hidden !important; pointer-events: none !important;}

rs-column-wrap {
	display: table-cell;
	position: relative;
	vertical-align: top;
	height: auto;
	box-sizing: border-box;
	font-size:0px;
}

rs-column {
	box-sizing: border-box;
	display: block;
	position: relative;
	width:100% !important;
	height:auto !important;
	white-space: normal !important;
}

rs-cbg-mask-wrap {
	position: absolute;
	z-index: 0;
	box-sizing: border-box;
}

rs-column-wrap rs-cbg-mask-wrap { top: 0px; left: 0px; bottom: 0px; right: 0px; }
rs-column-bg {
	position: absolute;
	z-index: 0;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
}

.rs-pelock * { pointer-events: none !important;}

rs-column .rs-parallax-wrap,
rs-column rs-loop-wrap,
rs-column rs-mask-wrap 			{	text-align: inherit; }
rs-column rs-mask-wrap 			{	display: inline-block;}


rs-column .rs-parallax-wrap rs-loop-wrap,
rs-column .rs-parallax-wrap rs-mask-wrap,
rs-column .rs-parallax-wrap { position: relative; left:auto; top:auto; line-height: 0px;}

rs-column .rs-parallax-wrap rs-loop-wrap,
rs-column .rs-parallax-wrap rs-mask-wrap,
rs-column .rs-parallax-wrap,
rs-column .rev_layer_in_column { vertical-align: top; }

.rev_break_columns { display: block !important }
.rev_break_columns rs-column-wrap.rs-parallax-wrap  { display:block !important; width:100% !important; }


.rev_break_columns rs-column-wrap.rs-parallax-wrap.rs-layer-hidden,
.tp-forcenotvisible,
.tp-hide-revslider,
rs-row-wrap.rs-layer-hidden,
rs-column-wrap.rs-layer-hidden,
.rs-layer.rs-layer-hidden,
.rs-layer-audio.rs-layer-hidden,
.rs-parallax-wrap.rs-layer-hidden {
	visibility:hidden !important;
	display:none !important
}

/*rs-column .rs-parallax-wrap,
rs-column rs-loop-wrap,
rs-column rs-mask-wrap,
rs-column rs-layer { vertical-align: inherit }*/



/*********************************
	-	SPECIAL TP CAPTIONS -
**********************************/

a.rs-layer.rs-nointeraction >.div,
rs-layer.rs-nointeraction:not(a),
.rs-layer.rs-nointeraction:not(a) {
	pointer-events: none !important
}

rs-static-layers	{position:absolute; z-index:101; top:0px;left:0px; display: block; width: 100%;height: 100%; pointer-events: none; overflow: hidden}

/* new static layers position option */
rs-static-layers.rs-stl-back {
	z-index:0;
}

.rs-stl-visible{
	overflow: visible !important;
}

.rs-layer rs-fcr 	{ width: 0; height: 0; border-left: 40px solid transparent; border-right: 0px solid transparent; border-bottom-width: 0 !important; border-top: 40px solid #00A8FF; position: absolute; right: 100%; top: 0px; }
.rs-layer rs-fcrt 	{ width: 0; height: 0; border-left: 40px solid transparent; border-right: 0px solid transparent; border-top-width: 0 !important; border-bottom: 40px solid #00A8FF; position: absolute; right: 100%; top: 0px; }
.rs-layer rs-bcr 	{ width: 0; height: 0; border-left: 0px solid transparent; border-right: 40px solid transparent; border-bottom: 40px solid #00A8FF; border-top-width: 0 !important; position: absolute; left: 100%; top: 0px; }
.rs-layer rs-bcrt 	{ width: 0; height: 0; border-left: 0px solid transparent; border-right: 40px solid transparent; border-top: 40px solid #00A8FF; border-bottom-width: 0 !important; position: absolute; left: 100%; top: 0px; }


.tp-layer-inner-rotation {
	position: relative !important;
}


/***********************************************
	-	SPECIAL ALTERNATIVE IMAGE SETTINGS	-
***********************************************/

img.tp-slider-alternative-image	{
	width:100%; height:auto;
}


/******************************
	-	IE8 HACKS	-
*******************************/
.noFilterClass {
	filter:none !important;
}


/********************************
	-	FULLSCREEN VIDEO	-
*********************************/

rs-bgvideo 			{	position: absolute;top:0px;left:0px; width:100%;height:100%;z-index: 0; display: block}

.rs-layer.rs-fsv	{	top:0px;left:0px;  position:absolute;width:100%;height:100%}

.rs-layer.rs-fsv audio,
.rs-layer.rs-fsv video,
.rs-layer.rs-fsv iframe,
.rs-layer.rs-fsv iframe audio,
.rs-layer.rs-fsv iframe video	{ width:100%; height:100% ; /*display: none*/}


.rs-fsv video				{	background: #000}

.fullcoveredvideo rs-poster		{	background-position: center center;background-size: cover;width:100%;height:100%;top:0px;left:0px}


.videoisplaying .html5vid rs-poster	{	display: none}

.tp-video-play-button					{
	background:#000;
	background:rgba(0,0,0,0.3);
	border-radius:5px;
	position: absolute;
	top: 50%;
	left: 50%;
	color: #FFF;
	z-index: 3;
	margin-top: -25px;
	margin-left: -25px;
	line-height: 50px !important;
	text-align: center;
	cursor: pointer;
	width: 50px;
	height:50px;
	box-sizing: border-box;

	display: inline-block;
	vertical-align: top;
	z-index: 4;
	opacity: 0;
	transition:opacity 300ms ease-out !important;
}

.rs-ISM .tp-video-play-button{
	opacity: 1;
	transition: none !important;
	z-index: 6;
}

.rs-audio .tp-video-play-button { display:none !important;}
.rs-layer .html5vid					{	width:100% !important; height:100% !important;}
.tp-video-play-button i 				{	width:50px;height:50px; display:inline-block; text-align: center !important; vertical-align: top; line-height: 50px !important; font-size: 30px !important;}
.rs-layer:hover .tp-video-play-button	{	opacity: 1; display:block; z-index: 6;}
.rs-layer .tp-revstop					{	display:none;width: 15px; border-right: 5px solid #fff !important; border-left:5px solid #fff !important; transform: translateX(50%) translateY(50%);height: 20px;margin-left: 11px !important;margin-top: 5px !important;}
.videoisplaying .revicon-right-dir		{	display:none}
.videoisplaying .tp-revstop				{	display:block}

.videoisplaying  .tp-video-play-button			{	display:none}


.fullcoveredvideo .tp-video-play-button			{	display:none !important}


.rs-fsv .rs-fsv audio 		{	object-fit:contain !important;}
.rs-fsv .rs-fsv video 		{	object-fit:contain !important;}

.rs-layer-video .html5vid.hidefullscreen video::-webkit-media-controls-fullscreen-button  { display: none; }


@supports not (-ms-high-contrast:none) {
   /* Non-IE styles here */
	.rs-fsv .fullcoveredvideo audio 		{	object-fit:cover !important;}
	.rs-fsv .fullcoveredvideo video 		{	object-fit:cover !important;}
}

.rs-fullvideo-cover					{	width:100%;height:100%;top:0px;left:0px;position: absolute; background:transparent;z-index:5;}


.rs-nolc .tp-video-play-button,
rs-bgvideo video::-webkit-media-controls-start-playback-button,
rs-bgvideo video::-webkit-media-controls,
rs-bgvideo audio::-webkit-media-controls { display:none !important;}


.rs-audio .tp-video-controls {	opacity: 1 !important; visibility: visible !important}



rs-module h1.rs-layer,
rs-module h2.rs-layer,
rs-module h3.rs-layer,
rs-module h4.rs-layer,
rs-module h5.rs-layer,
rs-module h6.rs-layer,
rs-module div.rs-layer,
rs-module span.rs-layer,
rs-module p.rs-layer 	{	margin:0; padding:0; margin-block-start: 0; margin-block-end: 0; margin-inline-start: 0; margin-inline-end: 0;}

rs-module h1.rs-layer:before,
rs-module h2.rs-layer:before,
rs-module h3.rs-layer:before,
rs-module h4.rs-layer:before,
rs-module h5.rs-layer:before,
rs-module h6.rs-layer:before { content: none; }


/********************************
	-	DOTTED OVERLAYS	-
*********************************/
rs-dotted						{	background-repeat:repeat;width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:3;display:block;pointer-events: none}
rs-sbg-wrap rs-dotted 			{ z-index: 31 }
rs-dotted.twoxtwo				{	background:url(../assets/gridtile.png)}
rs-dotted.twoxtwowhite			{	background:url(../assets/gridtile_white.png)}
rs-dotted.threexthree			{	background:url(../assets/gridtile_3x3.png)}
rs-dotted.threexthreewhite		{	background:url(../assets/gridtile_3x3_white.png)}


/******************************
	-	SHADOWS		-
******************************/

.tp-shadowcover	{	width:100%;height:100%;top:0px;left:0px;background: #fff;position: absolute; z-index: -1;}
.tp-shadow1 	{	box-shadow: 0 10px 6px -6px rgba(0,0,0,0.8);}

.tp-shadow2:before, .tp-shadow2:after,
.tp-shadow3:before, .tp-shadow4:after
{
  z-index: -2;
  position: absolute;
  content: "";
  bottom: 10px;
  left: 10px;
  width: 50%;
  top: 85%;
  max-width:300px;
  background: transparent;
  box-shadow: 0 15px 10px rgba(0,0,0,0.8);

  transform: rotate(-3deg);
}

.tp-shadow2:after,
.tp-shadow4:after
{
  transform: rotate(3deg);
  right: 10px;
  left: auto;
}

.tp-shadow5
{
  	position:relative;
	box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
.tp-shadow5:before, .tp-shadow5:after
{
	content:"";
	position:absolute;
	z-index:-2;
	box-shadow:0 0 25px 0px  rgba(0,0,0,0.6);
	top:30%;
	bottom:0;
	left:20px;
	right:20px;
	border-radius:100px / 20px;
}



/* TP BUTTONS DESKTOP SIZE */

.rev-btn,
.rev-btn:visited						{ 	outline:none !important; box-shadow:none; text-decoration: none !important;  box-sizing:border-box;  cursor: pointer;}

.rev-btn.rev-uppercase,
.rev-btn.rev-uppercase:visited			{ 	text-transform: uppercase;  }

.rev-btn  i								{ 	font-size: inherit; font-weight: normal; position: relative; top: 0px; transition: opacity 0.2s ease-out, margin 0.2s ease-out;  margin-left:0px; line-height: inherit}

.rev-btn.rev-hiddenicon i				{ 	font-size: inherit; font-weight: normal; position: relative; top: 0px; transition: opacity 0.2s ease-out, margin 0.2s ease-out; opacity: 0; margin-left:0px !important; width:0px !important;  }
.rev-btn.rev-hiddenicon:hover i			{   opacity: 1 !important; margin-left:10px !important; width:auto !important;}


/* BURGER BUTTON */
.rev-burger {
  position: relative;
  box-sizing: border-box;
  padding: 22px 14px 22px 14px;
  border-radius: 50%;
  border: 1px solid rgba(51,51,51,0.25);
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
}

.rev-burger span {
  display: block;
  width: 30px;
  height: 3px;
  background: #333;
  transition: .7s;
  pointer-events: none;
  transform-style: flat !important;
}
.rev-burger span:nth-child(2) {
  margin: 3px 0;
}

.quick_style_example_wrap .rev-burger:hover :first-child,
#dialog_addbutton .rev-burger:hover :first-child,
.open .rev-burger :first-child,
.open.rev-burger :first-child {
  transform: translateY(6px) rotate(-45deg);

}
.quick_style_example_wrap .rev-burger:hover :nth-child(2),
#dialog_addbutton .rev-burger:hover :nth-child(2),
.open .rev-burger :nth-child(2),
.open.rev-burger :nth-child(2) {
  transform: rotate(-45deg);

  opacity: 0;
}
.quick_style_example_wrap .rev-burger:hover :last-child,
#dialog_addbutton .rev-burger:hover :last-child,
.open .rev-burger :last-child,
.open.rev-burger :last-child {
  transform: translateY(-6px) rotate(-135deg);

}

.rev-burger.revb-white {
  border: 2px solid rgba(255,255,255,0.2);
}

.rev-b-span-light span,
.rev-burger.revb-white span {
  background: #fff;
}
.rev-burger.revb-whitenoborder {
  border: 0;
}
.rev-burger.revb-whitenoborder span {
  background: #fff;
}
.rev-burger.revb-darknoborder {
  border: 0;
}

.rev-b-span-dark span,
.rev-burger.revb-darknoborder span {
  background: #333;
}

.rev-burger.revb-whitefull {
  background: #fff;
  border:none;
}

.rev-burger.revb-whitefull span {
	background:#333;
}

.rev-burger.revb-darkfull {
  background: #333;
  border:none;
}

.rev-burger.revb-darkfull span {
	background:#fff;
}


/* SCROLL DOWN BUTTON */

@keyframes rev-ani-mouse {
	0% {opacity: 1;top: 29%;}
	15% {opacity: 1;top: 70%;}
	50% {opacity: 0;top: 70%;}
	100% {opacity: 0;top: 29%;}
}
.rev-scroll-btn {
	display: inline-block;
	position: relative;
	left: 0;
	right: 0;
	text-align: center;
	cursor: pointer;
	width:35px;
	height:55px;
	box-sizing: border-box;
	border: 3px solid white;
	border-radius: 23px;
}
.rev-scroll-btn > * {
	display: inline-block;
	line-height: 18px;
	font-size: 13px;
	font-weight: normal;
	color: #7f8c8d;
	color: #ffffff;
	font-family: "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
	letter-spacing: 2px;
}
.rev-scroll-btn > *:hover,
.rev-scroll-btn > *:focus,
.rev-scroll-btn > *.active {
	color: #ffffff;
}
.rev-scroll-btn > *:hover,
.rev-scroll-btn > *:focus,
.rev-scroll-btn > *:active,
.rev-scroll-btn > *.active {
	opacity: 0.8;
}

.rev-scroll-btn.revs-fullwhite  {
	background:#fff;
}

.rev-scroll-btn.revs-fullwhite span {
	background: #333;
}

.rev-scroll-btn.revs-fulldark  {
	background:#333;
	border:none;
}

.rev-scroll-btn.revs-fulldark  span {
	background: #fff;
}

.rev-scroll-btn span {
	position: absolute;
	display: block;
	top: 29%;
	left: 50%;
	width: 8px;
	height: 8px;
	margin: -4px 0 0 -4px;
	border-radius: 50%;
	animation: rev-ani-mouse 2.5s linear infinite;
	background: #fff;
}

.rev-scroll-btn.rev-b-span-dark {
	border-color:#333;
}
.rev-scroll-btn.rev-b-span-dark span,
.rev-scroll-btn.revs-dark span {
	background: #333;
}

.rev-control-btn {
	position: relative;
	display: inline-block;
	z-index: 5;
	color: #FFF;
	font-size: 20px;
	line-height: 60px;
	font-weight: 400;
	font-style: normal;
	font-family: Raleway;
	text-decoration: none;
	text-align: center;
	background-color: #000;
	border-radius: 50px;
	text-shadow: none;
	background-color: rgba(0, 0, 0, 0.50);
	width:60px;
	height:60px;
	box-sizing: border-box;
	cursor: pointer;
}

.rev-cbutton-dark-sr	{
	border-radius: 3px;
}

.rev-cbutton-light	{
	color: #333;
	background-color: rgba(255,255,255, 0.75);
}

.rev-cbutton-light-sr	{
	color: #333;
	border-radius: 3px;
	background-color: rgba(255,255,255, 0.75);
}


.rev-sbutton {
	line-height: 37px;
	width:37px;
	height:37px;
}

.rev-sbutton-blue	{
	background-color: #3B5998
}
.rev-sbutton-lightblue	{
	background-color: #00A0D1;
}
.rev-sbutton-red	{
	background-color: #DD4B39;
}




/************************************
-	TP BANNER TIMER		-
*************************************/
rs-progress						{	visibility: hidden; position:absolute; z-index:200;width:100%;height:100%;}
rs-progress-bar,
.rs-progress-bar				{ 	display:block;z-index: 20;box-sizing: border-box;background-clip: content-box;position: absolute;line-height:0px;width:100%;height:100%;}
rs-progress-bgs 				{ 	display:block;z-index: 15;box-sizing: border-box; width: 100%; position: absolute; height: 100%; top: 0px; left: 0px; }
rs-progress-bg					{	display:block;background-clip: content-box; position: absolute;width:100%;height:100%;}
rs-progress-gap					{	display:block;background-clip: content-box; position: absolute;width:100%;height:100%;}
rs-progress-vis 				{ 	display:block;width: 100%;height: 100%; position: absolute;top: 0px;left: 0px }

/*********************************************
-	BASIC SETTINGS FOR THE BANNER	-
***********************************************/
.rs-layer img {
	background: transparent;
	-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)";
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF);
	/*zoom:1;*/
}

/*rs-carousel-wrap rs-layer.rs-layer img {   transform: translateZ(-0.0001px)}*/


.rs-layer.slidelink { cursor:pointer;width:100%;height:100%; }
.rs-layer.slidelink a {	width:100%;height:100%;display:block}
.rs-layer.slidelink a div {	width:3000px; height:1500px;  background:url(../assets/coloredbg.png) repeat}
.rs-layer.slidelink a span{	background:url(../assets/coloredbg.png) repeat; width:100%;height:100%;display:block}
/*.tp-shape {	width:100%;height:100%;}*/



/*********************************************
-	WOOCOMMERCE STYLES	-
***********************************************/

.rs-layer .rs-starring				{	display: inline-block}


.rs-layer .rs-starring .star-rating {
	float: none;
	display: inline-block;
	vertical-align: top;
	color: #FFC321 !important;
}


.rs-layer .rs-starring .star-rating,
.rs-layer .rs-starring-page .star-rating {
	position: relative;
	height: 1em;
	width: 5.4em;
	font-family: star;
	font-size: 1em !important;
}

.rs-layer  .rs-starring .star-rating:before,
.rs-layer  .rs-starring-page .star-rating:before {
	content: "\73\73\73\73\73";
	color: #E0DADF;
	float: left;
	top: 0;
	left: 0;
	position: absolute;
}

.rs-layer .rs-starring .star-rating span {
	overflow: hidden;
	float: left;
	top: 0;
	left: 0;
	position: absolute;
	padding-top: 1.5em;
	font-size: 1em !important;
}

.rs-layer .rs-starring .star-rating span:before,
.rs-layer .rs-starring .star-rating span:before {
	content: "\53\53\53\53\53";
	top: 0;
	position: absolute;
	left: 0;
}




/******************************
	-	LOADER FORMS	-
********************************/

rs-loader 	{
	top:50%; left:50%;
	z-index:10000;
	position:absolute;
}

rs-loader.off {
	display: none !important;
}

rs-loader.spinner0 {
	width: 40px;
	height: 40px;
	background-color: #fff;
	background-image:url(../assets/loader.gif);
	background-repeat:no-repeat;
	background-position: center center;
	box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
	margin-top:-20px;
	margin-left:-20px;
	animation: tp-rotateplane 1.2s infinite ease-in-out;
	border-radius: 3px;
}


rs-loader.spinner1 {
	width: 40px;
	height: 40px;
	background-color: #fff;
	box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
	margin-top:-20px;
	margin-left:-20px;
	animation: tp-rotateplane 1.2s infinite ease-in-out;
	border-radius: 3px;
}



rs-loader.spinner5 	{
	background-image:url(../assets/loader.gif);
	background-repeat:no-repeat;
	background-position:10px 10px;
	background-color:#fff;
	margin:-22px -22px;
	width:44px;height:44px;
	border-radius: 3px;
}


@keyframes tp-rotateplane {
  0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg);}
  50% { transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);}
  100% { transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);}
}


rs-loader.spinner2 {
	width: 40px;
	height: 40px;
	margin-top:-20px;margin-left:-20px;
	background-color: #ff0000;
	box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
	border-radius: 100%;
	animation: tp-scaleout 1.0s infinite ease-in-out;
}


@keyframes tp-scaleout {
  0% {transform: scale(0.0);}
  100% {transform: scale(1.0);opacity: 0;}
}


rs-loader.spinner3 {
  margin: -9px 0px 0px -35px;
  width: 70px;
  text-align: center;
}

rs-loader.spinner3 .bounce1,
rs-loader.spinner3 .bounce2,
rs-loader.spinner3 .bounce3 {
  width: 18px;
  height: 18px;
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  border-radius: 100%;
  display: inline-block;
  animation: tp-bouncedelay 1.4s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  animation-fill-mode: both;
}

rs-loader.spinner3 .bounce1 {
  animation-delay: -0.32s;
}

rs-loader.spinner3 .bounce2 {
  animation-delay: -0.16s;
}

@keyframes tp-bouncedelay {
  0%, 80%, 100% {transform: scale(0.0);}
  40% {transform: scale(1.0);}
}




rs-loader.spinner4 {
  margin: -20px 0px 0px -20px;
  width: 40px;
  height: 40px;
  text-align: center;
  animation: tp-rotate 2.0s infinite linear;
}

rs-loader.spinner4 .dot1,
rs-loader.spinner4 .dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #fff;
  border-radius: 100%;
  animation: tp-bounce 2.0s infinite ease-in-out;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
}

rs-loader.spinner4 .dot2 {
  top: auto;
  bottom: 0px;
  animation-delay: -1.0s;
}


@keyframes tp-rotate { 100% { transform: rotate(360deg);}}

@keyframes tp-bounce {
  0%, 100% {transform: scale(0.0);}
  50% { transform: scale(1.0);}
}



rs-layer iframe { visibility:hidden;}
rs-layer.rs-ii-o iframe { visibility: visible; }

rs-layer input[type="text"],
rs-layer input[type="email"],
rs-layer input[type="url"],
rs-layer input[type="password"],
rs-layer input[type="search"],
rs-layer input[type="number"],
rs-layer input[type="tel"],
rs-layer input[type="range"],
rs-layer input[type="date"],
rs-layer input[type="month"],
rs-layer input[type="week"],
rs-layer input[type="time"],
rs-layer input[type="datetime"],
rs-layer input[type="datetime-local"] { display: inline-block }

rs-layer input::placeholder { vertical-align: middle; line-height: inherit !important}

a.rs-layer { transition: none }


/***********************************************
	-  STANDARD NAVIGATION SETTINGS
***********************************************/

rs-thumbs-wrap,
rs-tabs-wrap,
rs-thumbs,
rs-thumb,
rs-tab,
rs-bullet,
rs-bullets,
rs-navmask,
rs-tabs,
rs-arrow 					{	display:block; pointer-events: all;}

/*rs-layer {	font-size:20px; line-height: 25px; padding:0px; margin:0px; border-radius:0px; max-width: none;min-width:none; max-height: none; min-height: none}*/

.tp-thumbs.navbar,
.tp-bullets.navbar,
.tp-tabs.navbar					{	border:none; min-height: 0; margin:0; border-radius: 0; }

.tp-tabs,
.tp-thumbs,
.tp-bullets						{	position:absolute; display:block; z-index:1000; top:0px; left:0px;}

.tp-tab,
.tp-thumb 						{	cursor: pointer; position:absolute;opacity:0.5;  box-sizing: border-box;}

.tp-arr-imgholder,
rs-poster,
.tp-thumb-image,
.tp-tab-image					{	background-position: center center; background-size:cover;width:100%;height:100%; display:block; position:absolute;top:0px;left:0px;}

rs-poster 						 { cursor:pointer; z-index:3; }

.tp-tab.rs-touchhover,
.tp-tab.selected,
.tp-thumb.rs-touchhover,
.tp-thumb.selected				{	opacity:1;}

.tp-tab-mask,
.tp-thumb-mask 					{	box-sizing:border-box !important; }

.tp-tabs,
.tp-thumbs						{	box-sizing:content-box !important; }

.tp-bullet 						{	width:15px;height:15px; position:absolute; background:#fff; background:rgba(255,255,255,0.3); cursor: pointer;}
.tp-bullet.selected,
.tp-bullet.rs-touchhover				{	background:#fff;}




.tparrows						{	cursor:pointer; background:#000; background:rgba(0,0,0,0.5); width:40px;height:40px;position:absolute; display:block; z-index:1000; }
.tparrows.rs-touchhover 				{	background:#000;}
.tparrows:before				{	font-family: "revicons"; font-size:15px; color:#fff; display:block; line-height: 40px; text-align: center;}
.tparrows.tp-leftarrow:before	{	content: '\e824'; }
.tparrows.tp-rightarrow:before	{	content: '\e825'; }

/*.tp-thumb-mask {max-width: 100% !important}*/

/************************
 - FIXES FOR PE-7 ICONS -
**************************/

.rs-layer [class^="pe-7s-"]:before,
.rs-layer [class*=" pe-7s-"]:before,
.rs-layer [class^="pe-7s-"],
.rs-layer [class*=" pe-7s-"] {
	width: auto;
	margin: 0;
	line-height: inherit;
	box-sizing: inherit;
}


/***************************
	- KEN BURNS FIXES -
***************************/

rs-pzimg-wrap { display: block; }
body.rtl .rs-pzimg {left: 0 !important}


/*******************************
	- CUBE & CANVAS SETTINGS -
********************************/
.rs_fake_cube {transform-style:preserve-3d}
.rs_fake_cube,
.rs_fake_cube_wall { position:absolute; -webkit-backface-visibility:hidden; backface-visibility:hidden; left:0px; top:0px; z-index: 0 }

.rs-builder-mode rs-sbg-wrap canvas,
rs-sbg canvas { overflow: hidden; z-index: 5; -webkit-backface-visibility:hidden; backface-visibility:hidden;}


/***************************
	- 3D SHADOW MODE -
***************************/

.dddwrappershadow { box-shadow:0 45px 100px rgba(0, 0, 0, 0.4);}

.dddwrapper { transform-style: flat;perspective: 10000px; }

/*******************
	- DEBUG MODE -
*******************/

.rs_error_message_box { background: #111;width:800px;margin: 40px auto;padding: 40px 20px;text-align: center;font-family: "Open Sans",sans-serif}
.rs_error_message_oops {margin: 0px 0px 20px;line-height: 60px;font-size: 34px;color: #FFF;}
.rs_error_message_content {margin: 0px 0px 20px;line-height: 25px;font-size: 17px;color: #FFF;}
.rs_error_message_button {color: #fff !important;background: #333;display: inline-block;padding: 10px 15px;text-align: right;border-radius: 5px;cursor: pointer;text-decoration: none !important}
.rs_error_message_button:hover {  background:#5e35b1}



.hglayerinfo				   {position: fixed;bottom: 0px;left: 0px;color: #FFF;font-size: 12px;line-height: 20px;font-weight: 600;background: rgba(0, 0, 0, 0.75);padding: 5px 10px;z-index: 2000;white-space: normal;}
.hginfo 					   {position:absolute;top:-2px;left:-2px;color:#e74c3c;font-size:12px;font-weight:600; background:#000;padding:2px 5px;}
.indebugmode .rs-layer:hover {border:1px dashed #c0392b !important;}
.helpgrid 					   {border:2px dashed #c0392b;position:absolute;top:0px;left:0px;z-index:0 }
#revsliderlogloglog				{padding:15px;color:#fff;position:fixed; top:0px;left:0px;width:200px;height:150px;background:rgba(0,0,0,0.7); z-index:100000; font-size:10px; overflow:scroll;}



/**
INSTAGRAM FILTERS BY UNA
https://una.im/CSSgram/
**/
.aden{filter:hue-rotate(-20deg) contrast(.9) saturate(.85) brightness(1.2)}.aden::after{background:linear-gradient(to right,rgba(66,10,14,.2),transparent);mix-blend-mode:darken}.perpetua::after,.reyes::after{mix-blend-mode:soft-light;opacity:.5}.inkwell{filter:sepia(.3) contrast(1.1) brightness(1.1) grayscale(1)}.perpetua::after{background:linear-gradient(to bottom,#005b9a,#e6c13d)}.reyes{filter:sepia(.22) brightness(1.1) contrast(.85) saturate(.75)}.reyes::after{background:#efcdad}.gingham{filter:brightness(1.05) hue-rotate(-10deg)}.gingham::after{background:linear-gradient(to right,rgba(66,10,14,.2),transparent);mix-blend-mode:darken}.toaster{filter:contrast(1.5) brightness(.9)}.toaster::after{background:radial-gradient(circle,#804e0f,#3b003b);mix-blend-mode:screen}.walden{filter:brightness(1.1) hue-rotate(-10deg) sepia(.3) saturate(1.6)}.walden::after{background:#04c;mix-blend-mode:screen;opacity:.3}.hudson{filter:brightness(1.2) contrast(.9) saturate(1.1)}.hudson::after{background:radial-gradient(circle,#a6b1ff 50%,#342134);mix-blend-mode:multiply;opacity:.5}.earlybird{filter:contrast(.9) sepia(.2)}.earlybird::after{background:radial-gradient(circle,#d0ba8e 20%,#360309 85%,#1d0210 100%);mix-blend-mode:overlay}.mayfair{filter:contrast(1.1) saturate(1.1)}.mayfair::after{background:radial-gradient(circle at 40% 40%,rgba(255,255,255,.8),rgba(255,200,200,.6),#111 60%);mix-blend-mode:overlay;opacity:.4}.lofi{filter:saturate(1.1) contrast(1.5)}.lofi::after{background:radial-gradient(circle,transparent 70%,#222 150%);mix-blend-mode:multiply}._1977{filter:contrast(1.1) brightness(1.1) saturate(1.3)}._1977:after{background:rgba(243,106,188,.3);mix-blend-mode:screen}.brooklyn{filter:contrast(.9) brightness(1.1)}.brooklyn::after{background:radial-gradient(circle,rgba(168,223,193,.4) 70%,#c4b7c8);mix-blend-mode:overlay}.xpro2{filter:sepia(.3)}.xpro2::after{background:radial-gradient(circle,#e6e7e0 40%,rgba(43,42,161,.6) 110%);mix-blend-mode:color-burn}.nashville{filter:sepia(.2) contrast(1.2) brightness(1.05) saturate(1.2)}.nashville::after{background:rgba(0,70,150,.4);mix-blend-mode:lighten}.nashville::before{background:rgba(247,176,153,.56);mix-blend-mode:darken}.lark{filter:contrast(.9)}.lark::after{background:rgba(242,242,242,.8);mix-blend-mode:darken}.lark::before{background:#22253f;mix-blend-mode:color-dodge}.moon{filter:grayscale(1) contrast(1.1) brightness(1.1)}.moon::before{background:#a0a0a0;mix-blend-mode:soft-light}.moon::after{background:#383838;mix-blend-mode:lighten}.clarendon{filter:contrast(1.2) saturate(1.35)}.clarendon:before{background:rgba(127,187,227,.2);mix-blend-mode:overlay}.willow{filter:grayscale(.5) contrast(.95) brightness(.9)}.willow::before{background-image:radial-gradient(circle,40%, #d4a9af 55%,#000 150%);mix-blend-mode:overlay}.rise{filter:brightness(1.05) sepia(.2) contrast(.9) saturate(.9)}.rise::after{background:radial-gradient(circle,rgba(232,197,152,.8),transparent 90%);mix-blend-mode:overlay;opacity:.6}.rise::before{background:radial-gradient(circle,rgba(236,205,169,.15) 55%,rgba(50,30,7,.4));mix-blend-mode:multiply}._1977:after,._1977:before,rs-pzimg-wrap.aden:after,.aden:before,.brooklyn:after,.brooklyn:before,.clarendon:after,.clarendon:before,.earlybird:after,.earlybird:before,.gingham:after,.gingham:before,.hudson:after,.hudson:before,.inkwell:after,.inkwell:before,.lark:after,.lark:before,.lofi:after,.lofi:before,.mayfair:after,.mayfair:before,.moon:after,.moon:before,.nashville:after,.nashville:before,.perpetua:after,.perpetua:before,.reyes:after,.reyes:before,.rise:after,.rise:before,.slumber:after,.slumber:before,.toaster:after,.toaster:before,.walden:after,.walden:before,.willow:after,.willow:before,.xpro2:after,.xpro2:before{content:'';display:block;height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none}._1977,.aden,.brooklyn,.clarendon,.earlybird,.gingham,.hudson,.inkwell,.lark,.lofi,.mayfair,.moon,.nashville,.perpetua,.reyes,.rise,.slumber,.toaster,.walden,.willow,.xpro2{position:absolute;}._1977:before,.aden:before,.brooklyn:before,.clarendon:before,.earlybird:before,.gingham:before,.hudson:before,.inkwell:before,.lark:before,.lofi:before,.mayfair:before,.moon:before,.nashville:before,.perpetua:before,.reyes:before,.rise:before,.slumber:before,.toaster:before,.walden:before,.willow:before,.xpro2:before{z-index:30}._1977:after,.aden:after,.brooklyn:after,.clarendon:after,.earlybird:after,.gingham:after,.hudson:after,.inkwell:after,.lark:after,.lofi:after,.mayfair:after,.moon:after,.nashville:after,.perpetua:after,.reyes:after,.rise:after,.slumber:after,.toaster:after,.walden:after,.willow:after,.xpro2:after{z-index:40}.slumber{filter:saturate(.66) brightness(1.05)}.slumber::after{background:rgba(125,105,24,.5);mix-blend-mode:soft-light}.slumber::before{background:rgba(69,41,12,.4);mix-blend-mode:lighten}
.willow::after{background-color:#d8cdcb;mix-blend-mode:color}
/* SAFARI BUG FIX ON COLOR BLEND MODE */
@media not all and (min-resolution:.001dpcm) {
	 @supports (-webkit-appearance:none) {
	 .willow{filter:grayscale(1) contrast(.95) brightness(.9)}
	.willow::after{background-color:transparent;}
}}
rs-pzimg-wrap.perpetua:before,rs-pzimg-wrap.perpetua:after,rs-pzimg-wrap.nashville:before,rs-pzimg-wrap.nashville:after,rs-pzimg-wrap.xpro2:before,rs-pzimg-wrap.xpro2:after,rs-pzimg-wrap._1977:after,rs-pzimg-wrap._1977:before,rs-pzimg-wrap.aden:after,rs-pzimg-wrap.aden:before,rs-pzimg-wrap.brooklyn:after,rs-pzimg-wrap.brooklyn:before,rs-pzimg-wrap.clarendon:after,rs-pzimg-wrap.clarendon:before,rs-pzimg-wrap.earlybird:after,rs-pzimg-wrap.earlybird:before,rs-pzimg-wrap.gingham:after,rs-pzimg-wrap.gingham:before,rs-pzimg-wrap.hudson:after,rs-pzimg-wrap.hudson:before,rs-pzimg-wrap.inkwell:after,rs-pzimg-wrap.inkwell:before,rs-pzimg-wrap.lark:after,rs-pzimg-wrap.lark:before,rs-pzimg-wrap.lofi:after,rs-pzimg-wrap.lofi:before,rs-pzimg-wrap.mayfair:after,rs-pzimg-wrap.mayfair:before,rs-pzimg-wrap.moon:after,rs-pzimg-wrap.moon:before,rs-pzimg-wrap.reyes:after,rs-pzimg-wrap.reyes:before,rs-pzimg-wrap.rise:after,rs-pzimg-wrap.rise:before,rs-pzimg-wrap.slumber:after,rs-pzimg-wrap.slumber:before,rs-pzimg-wrap.toaster:after,rs-pzimg-wrap.toaster:before,rs-pzimg-wrap.walden:after,rs-pzimg-wrap.walden:before,rs-pzimg-wrap.willow:after,rs-pzimg-wrap.willow:before,rs-pzimg-wrap:before,rs-pzimg-wrap:after {height:500%;width:500%}



/**
new spinners
**/
rs-loader.spinner6{width:40px;height:40px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}rs-loader.spinner6 .rs-spinner-inner{width:100%;height:100%;display:inline-block;-webkit-animation:rs-revealer-6 1.4s linear infinite;animation:rs-revealer-6 1.4s linear infinite}rs-loader.spinner6 .rs-spinner-inner span{position:absolute;vertical-align:top;border-radius:100%;display:inline-block;width:8px;height:8px;margin-left:16px;transform-origin:center 20px;-webkit-transform-origin:center 20px}rs-loader.spinner6 .rs-spinner-inner span:nth-child(2){transform:rotate(36deg);-webkit-transform:rotate(36deg);opacity:.1}rs-loader.spinner6 .rs-spinner-inner span:nth-child(3){transform:rotate(72deg);-webkit-transform:rotate(72deg);opacity:.2}rs-loader.spinner6 .rs-spinner-inner span:nth-child(4){transform:rotate(108deg);-webkit-transform:rotate(108deg);opacity:.3}rs-loader.spinner6 .rs-spinner-inner span:nth-child(5){transform:rotate(144deg);-webkit-transform:rotate(144deg);opacity:.4}rs-loader.spinner6 .rs-spinner-inner span:nth-child(6){transform:rotate(180deg);-webkit-transform:rotate(180deg);opacity:.5}rs-loader.spinner6 .rs-spinner-inner span:nth-child(7){transform:rotate(216deg);-webkit-transform:rotate(216deg);opacity:.6}rs-loader.spinner6 .rs-spinner-inner span:nth-child(8){transform:rotate(252deg);-webkit-transform:rotate(252deg);opacity:.7}rs-loader.spinner6 .rs-spinner-inner span:nth-child(9){transform:rotate(288deg);-webkit-transform:rotate(288deg);opacity:.8}rs-loader.spinner6 .rs-spinner-inner span:nth-child(10){transform:rotate(324deg);-webkit-transform:rotate(324deg);opacity:.9}@keyframes rs-revealer-6{from{transform:rotate(0)}to{transform:rotate(360deg)}}@-webkit-keyframes rs-revealer-6{from{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}rs-loader.spinner7{width:35px;height:35px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}rs-loader.spinner7 .rs-spinner-inner{width:100%;height:100%;display:inline-block;padding:0;border-radius:100%;border:2px solid;-webkit-animation:rs-revealer-7 .8s linear infinite;animation:rs-revealer-7 .8s linear infinite}@keyframes rs-revealer-7{from{transform:rotate(0)}to{transform:rotate(360deg)}}@-webkit-keyframes rs-revealer-7{from{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}rs-loader.spinner8{width:50px;height:50px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}rs-loader.spinner8 .rs-spinner-inner{width:100%;height:100%;display:inline-block;padding:0;text-align:left}rs-loader.spinner8 .rs-spinner-inner span{position:absolute;display:inline-block;width:100%;height:100%;border-radius:100%;-webkit-animation:rs-revealer-8 1.6s linear infinite;animation:rs-revealer-8 1.6s linear infinite}rs-loader.spinner8 .rs-spinner-inner span:last-child{animation-delay:-.8s;-webkit-animation-delay:-.8s}@keyframes rs-revealer-8{0%{transform:scale(0,0);opacity:.5}100%{transform:scale(1,1);opacity:0}}@-webkit-keyframes rs-revealer-8{0%{-webkit-transform:scale(0,0);opacity:.5}100%{-webkit-transform:scale(1,1);opacity:0}}rs-loader.spinner9{width:40px;height:40px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}rs-loader.spinner9 .rs-spinner-inner span{display:block;width:100%;height:100%;border-radius:50%;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:rs-revealer-9 2s infinite ease-in-out;animation:rs-revealer-9 2s infinite ease-in-out}rs-loader.spinner9 .rs-spinner-inner span:last-child{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes rs-revealer-9{0%,100%{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes rs-revealer-9{0%,100%{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}rs-loader.spinner10{width:54px;height:40px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}rs-loader.spinner10 .rs-spinner-inner{width:100%;height:100%;text-align:center;font-size:10px}rs-loader.spinner10 .rs-spinner-inner span{display:block;height:100%;width:6px;display:inline-block;-webkit-animation:rs-revealer-10 1.2s infinite ease-in-out;animation:rs-revealer-10 1.2s infinite ease-in-out}rs-loader.spinner10 .rs-spinner-inner span:nth-child(2){-webkit-animation-delay:-1.1s;animation-delay:-1.1s}rs-loader.spinner10 .rs-spinner-inner span:nth-child(3){-webkit-animation-delay:-1s;animation-delay:-1s}rs-loader.spinner10 .rs-spinner-inner span:nth-child(4){-webkit-animation-delay:-.9s;animation-delay:-.9s}rs-loader.spinner10 .rs-spinner-inner span:nth-child(5){-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes rs-revealer-10{0%,100%,40%{-webkit-transform:scaleY(.4)}20%{-webkit-transform:scaleY(1)}}@keyframes rs-revealer-10{0%,100%,40%{transform:scaleY(.4);-webkit-transform:scaleY(.4)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}rs-loader.spinner11{width:40px;height:40px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}rs-loader.spinner11 .rs-spinner-inner{width:100%;height:100%}rs-loader.spinner11 .rs-spinner-inner span{display:block;width:33%;height:33%;background-color:#333;float:left;-webkit-animation:rs-revealer-11 1.3s infinite ease-in-out;animation:rs-revealer-11 1.3s infinite ease-in-out}rs-loader.spinner11 .rs-spinner-inner span:nth-child(1){-webkit-animation-delay:.2s;animation-delay:.2s}rs-loader.spinner11 .rs-spinner-inner span:nth-child(2){-webkit-animation-delay:.3s;animation-delay:.3s}rs-loader.spinner11 .rs-spinner-inner span:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}rs-loader.spinner11 .rs-spinner-inner span:nth-child(4){-webkit-animation-delay:.1s;animation-delay:.1s}rs-loader.spinner11 .rs-spinner-inner span:nth-child(5){-webkit-animation-delay:.2s;animation-delay:.2s}rs-loader.spinner11 .rs-spinner-inner span:nth-child(6){-webkit-animation-delay:.3s;animation-delay:.3s}rs-loader.spinner11 .rs-spinner-inner span:nth-child(7){-webkit-animation-delay:0s;animation-delay:0s}rs-loader.spinner11 .rs-spinner-inner span:nth-child(8){-webkit-animation-delay:.1s;animation-delay:.1s}rs-loader.spinner11 .rs-spinner-inner span:nth-child(9){-webkit-animation-delay:.2s;animation-delay:.2s}@-webkit-keyframes rs-revealer-11{0%,100%,70%{-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1)}35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}}@keyframes rs-revealer-11{0%,100%,70%{-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1)}35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}}rs-loader.spinner12{width:35px;height:35px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}rs-loader.spinner12 .rs-spinner-inner{width:100%;height:100%;-webkit-animation:rs-revealer-12 1s infinite linear;animation:rs-revealer-12 1s infinite linear}@-webkit-keyframes rs-revealer-12{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes rs-revealer-12{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}rs-loader.spinner13{width:40px;height:40px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}rs-loader.spinner13 .rs-spinner-inner{width:100%;height:100%}rs-loader.spinner13 .rs-spinner-inner span{display:block;width:40%;height:40%;position:absolute;border-radius:50%;-webkit-animation:rs-revealer-13 2s ease infinite;animation:rs-revealer-13 2s ease infinite}rs-loader.spinner13 .rs-spinner-inner span:nth-child(1){animation-delay:-1.5s;-webkit-animation-delay:-1.5s}rs-loader.spinner13 .rs-spinner-inner span:nth-child(2){animation-delay:-1s;-webkit-animation-delay:-1s}rs-loader.spinner13 .rs-spinner-inner span:nth-child(3){animation-delay:-.5s;-webkit-animation-delay:-.5s}@keyframes rs-revealer-13{0%,100%{transform:translate(0)}25%{transform:translate(160%)}50%{transform:translate(160%,160%)}75%{transform:translate(0,160%)}}@-webkit-keyframes rs-revealer-13{0%,100%{-webkit-transform:translate(0)}25%{-webkit-transform:translate(160%)}50%{-webkit-transform:translate(160%,160%)}75%{-webkit-transform:translate(0,160%)}}rs-loader.spinner14{width:40px;height:40px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}rs-loader.spinner14 .rs-spinner-inner{width:100%;height:100%;animation:rs-revealer-14 1s infinite linear}rs-loader.spinner14 .rs-spinner-inner span{display:block;position:absolute;top:50%;left:50%;width:16px;height:16px;border-radius:50%;margin:-8px}rs-loader.spinner14 .rs-spinner-inner span:nth-child(1){-webkit-animation:rs-revealer-14-1 2s infinite;animation:rs-revealer-14-1 2s infinite}rs-loader.spinner14 .rs-spinner-inner span:nth-child(2){-webkit-animation:rs-revealer-14-2 2s infinite;animation:rs-revealer-14-2 2s infinite}rs-loader.spinner14 .rs-spinner-inner span:nth-child(3){-webkit-animation:rs-revealer-14-3 2s infinite;animation:rs-revealer-14-3 2s infinite}rs-loader.spinner14 .rs-spinner-inner span:nth-child(4){-webkit-animation:rs-revealer-14-4 2s infinite;animation:rs-revealer-14-4 2s infinite}@-webkit-keyframes rs-revealer-14-1{0%{-webkit-transform:rotate3d(0,0,1,0deg) translate3d(0,0,0)}20%{-webkit-transform:rotate3d(0,0,1,0deg) translate3d(80%,80%,0)}80%{-webkit-transform:rotate3d(0,0,1,360deg) translate3d(80%,80%,0)}100%{-webkit-transform:rotate3d(0,0,1,360deg) translate3d(0,0,0)}}@-webkit-keyframes rs-revealer-14-2{0%{-webkit-transform:rotate3d(0,0,1,0deg) translate3d(0,0,0)}20%{-webkit-transform:rotate3d(0,0,1,0deg) translate3d(80%,-80%,0)}80%{-webkit-transform:rotate3d(0,0,1,360deg) translate3d(80%,-80%,0)}100%{-webkit-transform:rotate3d(0,0,1,360deg) translate3d(0,0,0)}}@-webkit-keyframes rs-revealer-14-3{0%{-webkit-transform:rotate3d(0,0,1,0deg) translate3d(0,0,0)}20%{-webkit-transform:rotate3d(0,0,1,0deg) translate3d(-80%,-80%,0)}80%{-webkit-transform:rotate3d(0,0,1,360deg) translate3d(-80%,-80%,0)}100%{-webkit-transform:rotate3d(0,0,1,360deg) translate3d(0,0,0)}}@-webkit-keyframes rs-revealer-14-4{0%{-webkit-transform:rotate3d(0,0,1,0deg) translate3d(0,0,0)}20%{-webkit-transform:rotate3d(0,0,1,0deg) translate3d(-80%,80%,0)}80%{-webkit-transform:rotate3d(0,0,1,360deg) translate3d(-80%,80%,0)}100%{-webkit-transform:rotate3d(0,0,1,360deg) translate3d(0,0,0)}}@keyframes rs-revealer-14-1{0%{transform:rotate3d(0,0,1,0deg) translate3d(0,0,0)}20%{transform:rotate3d(0,0,1,0deg) translate3d(80%,80%,0)}80%{transform:rotate3d(0,0,1,360deg) translate3d(80%,80%,0)}100%{transform:rotate3d(0,0,1,360deg) translate3d(0,0,0)}}@keyframes rs-revealer-14-2{0%{transform:rotate3d(0,0,1,0deg) translate3d(0,0,0)}20%{transform:rotate3d(0,0,1,0deg) translate3d(80%,-80%,0)}80%{transform:rotate3d(0,0,1,360deg) translate3d(80%,-80%,0)}100%{transform:rotate3d(0,0,1,360deg) translate3d(0,0,0)}}@keyframes rs-revealer-14-3{0%{transform:rotate3d(0,0,1,0deg) translate3d(0,0,0)}20%{transform:rotate3d(0,0,1,0deg) translate3d(-80%,-80%,0)}80%{transform:rotate3d(0,0,1,360deg) translate3d(-80%,-80%,0)}100%{transform:rotate3d(0,0,1,360deg) translate3d(0,0,0)}}@keyframes rs-revealer-14-4{0%{transform:rotate3d(0,0,1,0deg) translate3d(0,0,0)}20%{transform:rotate3d(0,0,1,0deg) translate3d(-80%,80%,0)}80%{transform:rotate3d(0,0,1,360deg) translate3d(-80%,80%,0)}100%{transform:rotate3d(0,0,1,360deg) translate3d(0,0,0)}}rs-loader.spinner15{width:40px;height:40px;margin-top:-4px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}rs-loader.spinner15 .rs-spinner-inner{width:100%;height:100%}rs-loader.spinner15 .rs-spinner-inner span{display:block;width:20px;height:20px;position:absolute;top:0;left:0;-webkit-animation:rs-revealer-15 1.8s infinite ease-in-out;animation:rs-revealer-15 1.8s infinite ease-in-out}rs-loader.spinner15 .rs-spinner-inner:last-child{-webkit-animation-delay:-.9s;animation-delay:-.9s}@-webkit-keyframes rs-revealer-15{25%{-webkit-transform:translateX(30px) rotate(-90deg) scale(.5)}50%{-webkit-transform:translateX(30px) translateY(30px) rotate(-180deg)}75%{-webkit-transform:translateX(0) translateY(30px) rotate(-270deg) scale(.5)}100%{-webkit-transform:rotate(-360deg)}}@keyframes rs-revealer-15{25%{transform:translateX(30px) rotate(-90deg) scale(.5);-webkit-transform:translateX(30px) rotate(-90deg) scale(.5)}50%{transform:translateX(30px) translateY(30px) rotate(-179deg);-webkit-transform:translateX(30px) translateY(30px) rotate(-179deg)}50.1%{transform:translateX(30px) translateY(30px) rotate(-180deg);-webkit-transform:translateX(30px) translateY(30px) rotate(-180deg)}75%{transform:translateX(0) translateY(30px) rotate(-270deg) scale(.5);-webkit-transform:translateX(0) translateY(30px) rotate(-270deg) scale(.5)}100%{transform:rotate(-360deg);-webkit-transform:rotate(-360deg)}}



/* NEW CANVAS ANIMATIONS ON SLIDE BG'S */
.bgcanvas { display: none; position: absolute; overflow: hidden; }


/* way the hell off screen */
.RSscrollbar-measure {
	width: 100px;
	height: 100px;
	overflow: scroll;
	position: absolute;
	top: -9999px;
}

/*  AVADA SCROLL FIX */
.avada-has-rev-slider-styles .rev_slider_wrapper {
	transform:none;
}

/* rs-carousel-wrap{
	transform: scale(0.3);
	overflow: visible !important;
	border: solid 5px red;
} */