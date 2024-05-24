/*! 
 * Master Slider WordPress Main CSS File
 * @date Feb 2021
 */



/**
 *  Master Slider
 * 	Main css file
 */

.master-slider{
	position: relative;
	visibility: hidden;
	-moz-transform: translate3d(0 , 0 , 0);
}



.ms-ie img{border:none;}
.ms-ie8 * {opacity:inherit;-webkit-filter:inherit;filter:inherit;}
.ms-ie7   {zoom:1;}

.ms-moz .ms-slide-bgcont>img { -webkit-transform: translateX(0px); -ms-transform: translateX(0px); transform: translateX(0px); }

.master-slider a,
.master-slider a:hover {
	-webkit-transition: none;
	transition: none;
}

.wpb_row .master-slider-parent *,
.master-slider-parent * {
	 box-sizing: content-box;
}

.master-slider-parent {
	margin-left: auto;
	margin-right: auto;
}

.ms-layout-partialview .ms-view {
	overflow: visible;
	background-color:transparent;
}

.ms-layout-partialview .ms-container { overflow: hidden; }

.master-slider.before-init{}

.master-slider img, .ms-slide-bgvideocont video {max-width:none;}
.master-slider.ms-fullheight{height: 100%;}
.ms-slide-auto-height { display: table; }
.ms-loading-container{
	position:absolute;
	width:100%;
	top:0;
}

.ms-loading-container .ms-loading,
.ms-slide .ms-slide-loading {
	width: 36px;
	height: 36px;
	background: url(common/loading-2.gif) no-repeat center white;
	border-radius: 60px;
	box-shadow: 0px 0px 3px rgba(0,0,0,0.2);
	position: absolute;
	left: 50%;
	top: 50%;
	margin: -18px;
	opacity: 0.9;
}


/* grab cursor */
.ms-def-cursor{cursor:auto !important;}
.ms-grab-cursor{cursor: url(common/grab.png), move;}
.ms-grabbing-cursor{cursor: url(common/grabbing.png), move;}
.ms-ie .ms-grab-cursor{cursor: move;}
.ms-ie .ms-grabbing-cursor {cursor: move;}

.ms-view {
	margin:0px auto;
	overflow:hidden;

	position:relative;
	-webkit-perspective: 2000px;
	-ms-perspective: 2000px;
	perspective: 2000px;
}

.ms-view .ms-slide-container{position:relative;}

.ms-slide {
	position:absolute;
	height:100%;
	-webkit-transform: translateZ(0px);
	-ms-transform: translateZ(0px);
	transform: translateZ(0px);
}

.ms-wk .ms-slide {
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
}

.ms-slide.selected {}

.ms-slide .ms-slide-bgcont,
.ms-slide .ms-slide-bgvideocont{
	position: absolute;
	overflow:hidden;
	width: 100%;
}

.ms-slide .ms-slide-link {
	display: block;
	width: 100%;
	height: 100%;
	position: absolute;
	top:0;
	z-index: 110;
}

.ms-ie .ms-slide-link {
	background: url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBR‌​AA7") 0 0 repeat;
}


.ms-slide .ms-slide-bgvideocont{
	z-index: 105;
	height: 100%;
}

.ms-wk .ms-slide .ms-slide-bgvideocont,
.ms-wk .ms-slide-bgvideocont>video{
	-webkit-transform: translateZ(0.3px);
	transform: translateZ(0.3px);
}

.ms-slide .ms-slide-bgvideo{
	position: absolute;
	top: 0px;
}


.ms-inner-controls-cont, .ms-container {position: relative; margin:0 auto;}
.ms-slide .ms-slide-bgcont img , .ms-container , .ms-inner-controls-cont{
	-webkit-user-select:none;
	-moz-user-select:none;
	-ms-user-select:none;
	user-select:none;
}

.ms-slide .ms-layer,
.ms-fixed-layers .ms-layer,
.ms-overlay-layers .ms-layer {
    position:absolute;
    pointer-events: auto;
}

.ms-layer-mask {
    position: absolute;
    overflow: hidden;
}

.ms-layer-mask .ms-layer{
    position: relative;
}

.ms-slide .ms-slide-layers,
.ms-overlay-layers .ms-slide-layers,
.ms-fixed-layers {
    position: absolute;
    overflow:hidden;
    width:100%;
    height: 100%;
    z-index: 109;
    top:0px;
    pointer-events: none;
}

/* ------------------------------------------------------------------------------ */
/* Overlayer layers */
.ms-overlay-layers {
    position: absolute;
    top: 0;
    z-index: 120;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.ms-slide .ms-slide-video{
	position:absolute;
	top:0;
	z-index: 111;
	background:black;
	padding:0;
	margin: 0;
	border: none;

}


.ms-slide .ms-pattern{
	background-attachment: scroll;
	width: 100%;
	height: 100%;
	z-index: 108;
	position: absolute;
	top: 0;
}

.ms-wk .ms-pattern{
	-webkit-transform: translateZ(0.4px);
	transform: translateZ(0.4px);
}

.ms-parallax-layer {
	width: 100%;
	position: absolute;
	top: 0;
}

.ms-scroll-parallax-cont{
	position: absolute;
	top:0;
	width: 100%;
	height: 100%;
	z-index: 109;
}

.ms-wk .ms-scroll-parallax-cont{
	-webkit-transform: translateZ(0.4px);
	transform: translateZ(0.4px);
}

.ms-scroll-parallax .ms-sl-selected .ms-scroll-parallax-cont,
.ms-scroll-parallax .ms-sl-selected .ms-slide-bgcont{
}

.ms-scroll-parallax .ms-slide-bgcont{
}

/*-----------------------------------------------------------*/
.ms-action-layer{cursor: pointer;}
.ms-btn-container{position: absolute;}
.ms-btn {
	text-decoration: none;
	display: inline-block;
	color:black;
	position: relative;
	padding: 8px 15px;
	cursor: pointer;
	white-space: nowrap;
}

.ms-default-btn{
	background: #0074A2;
	border-radius: 5px;
	color: #FFF;
}
.ms-default-btn:hover{background-color: #0098D5;}
.ms-default-btn:active{top:1px;}

.ms-layer.video-box{background:black;}
.ms-layer.video-box iframe{
	padding:0;
	margin: 0;
	border: none;
	position: absolute;
	z-index: 110;
}

.ms-btn-s{
    padding: 14px 17px;
    font-size: 80%;
    line-height: 0;
}

.ms-btn-m{
    padding: 12px 40px;
}

.ms-btn-n{
    padding: 8px 25px;
    font-size: 95%;
}

.ms-btn-l{
    padding: 17px 50px;
    font-size: 120%;
}

.ms-btn-box{}
.ms-btn-round{border-radius: 5px;}
.ms-btn-circle{border-radius: 100px;}
.ms-btn-outline-box{}
.ms-btn-outline-round{border-radius: 5px;}
.ms-btn-outline-circle{border-radius: 100px;}
/*-----------------------------------------------------------*/
.ms-slide .ms-slide-vpbtn , .ms-slide .ms-video-btn{
	position:absolute;
	cursor: pointer;
	z-index: 110;
}

.ms-slide .ms-slide-vcbtn{
	position:absolute;
	cursor: pointer;
	z-index: 113;
}

.ms-slide-vcbtn-mobile{
	position: relative;
	bottom: 0;
	left:0;
	width:100%;
	height: 28px;
	background-color: black;
	color: white;
	text-align: center;
	cursor: pointer;
	z-index: 113;
}

.ms-slide-vcbtn-mobile .ms-vcbtn-txt {
    text-transform: uppercase;
    font-family: sans-serif;
    font-size: 0.75em;
    display: inline-block;
    background: url(common/video-close-btn.png) no-repeat 0px 3px;
    padding-left: 15px;
    height: 15px;
    color: #DBDBDB;
    margin-top: 7px;
}

.ms-wk .ms-slide .ms-slide-vcbtn,
.ms-wk .ms-slide .ms-slide-layers,
.ms-wk .ms-slide .ms-slide-vpbtn,
.ms-wk .ms-slide .ms-slide-video,
.ms-wk .ms-slide-link {
	-webkit-transform: translateZ(0.44px);
	transform: translateZ(0.44px);
}

.ms-video-img{
	position:absolute;
	width:100%;
	height:100%;
	top:0;
	left:0;
}

.ms-mask-frame{
	overflow:hidden;
	position:absolute;
	float:left;
}

/* controls */

.ms-thumb-list{
	overflow:hidden;
	position:absolute;
}

.ms-thumb-list.ms-dir-h {width: 100%;}
.ms-thumb-list.ms-dir-v {height: 100%; top: 0;}
.ms-thumbs-cont{position: relative;}
.ms-thumb-frame img{width:100%;	height:auto;}
.ms-thumb-frame{
	cursor: pointer;
	float: left;
	overflow: hidden;
	opacity: 0.5;
	-webkit-transition: opacity 300ms;
	transition: opacity 300ms;
}
.ms-thumb-frame-selected{ opacity: 1; }

.ms-tabs .ms-thumb-frame {
	background-color: #F6f6f6;
	text-shadow: 0 1px 1px white;
	color: #222;
	border: solid 1px white;
	border-width: 0 1px 1px 0;
	overflow: visible;
	position: relative;
	opacity: 1;
	-webkit-transition: all 300ms ease-out;
    transition: all 300ms ease-out;
}

.ms-tabs.ms-has-thumb .ms-tab-thumb{ width:auto; }
.ms-tabs.ms-dir-h .ms-thumb-frame {margin-top: 12px;}
.ms-tabs.ms-dir-v .ms-thumb-frame {margin-left: 12px;}
.ms-tabs.ms-dir-v.ms-align-left .ms-thumb-frame {margin-left: 0px;}
.ms-tabs.ms-dir-h.ms-align-top {z-index: 140;}
.ms-tabs.ms-dir-h.ms-align-top  .ms-thumb-frame{margin-top: -12px;}
.ms-tabs .ms-thumb{padding: 20px 20px;}
.ms-tabs .ms-thumb-frame-selected {	opacity: 1; background: #EDEDED;}
.ms-tabs .ms-thumb-frame .ms-thumb-ol {
    position: absolute;
    opacity: 0;
    -webkit-transition: all 300ms ease-out;
    transition: all 300ms ease-out;
}

.ms-tabs.ms-dir-h .ms-thumb-frame .ms-thumb-ol {
	top: 0px;
    left: 50%;
    margin-left: -12px;
	border-bottom: solid 12px #F6f6f6;
    border-left: solid 12px transparent;
    border-right: solid 12px transparent;
}

.ms-tabs.ms-dir-h.ms-align-bottom .ms-thumb-frame-selected .ms-thumb-ol{
	opacity: 1;
	top:-12px;
	border-bottom-color: #EDEDED;
}

.ms-tabs.ms-dir-h.ms-align-top .ms-thumb-frame .ms-thumb-ol {
	bottom: 0px;
	top:auto;
	border-bottom:0px;
	border-top: solid 12px #F6f6f6;
}

.ms-tabs.ms-dir-h.ms-align-top .ms-thumb-frame-selected .ms-thumb-ol{
	opacity: 1;
	bottom:-12px;
	border-top-color: #EDEDED;
}

.ms-tabs.ms-dir-v .ms-thumb-frame .ms-thumb-ol {
	top: 50%;
    left: 0;
    margin-top: -12px;
    border-right: solid 12px #EDEDED;
    border-top: solid 12px transparent;
    border-bottom: solid 12px transparent;
}

.ms-tabs.ms-dir-v.ms-align-right .ms-thumb-frame-selected .ms-thumb-ol{
	opacity: 1;
	left:-12px;
	border-right-color:#EDEDED;
}

.ms-tabs.ms-dir-v.ms-align-left .ms-thumb-frame .ms-thumb-ol {
    left: auto;
    right: 0;
    border-right: 0;
    border-left: solid 12px #EDEDED;
}

.ms-tabs.ms-dir-v.ms-align-left .ms-thumb-frame-selected .ms-thumb-ol{
	opacity: 1;
	right:-12px;
	border-left-color:#EDEDED;
}

.ms-thumb-alt {
	text-align: center;
	margin: 5px;
	font-size: 14px;
	font-weight: 600;
}

/* horizontal thumblist arrows*/
.ms-thumb-list.ms-dir-h .ms-thumblist-fwd, .ms-thumb-list.ms-dir-h .ms-thumblist-bwd {
    height: 100%;
    width: 20px;
    position: absolute;
    left: 0;
    cursor: pointer;
    background: rgba(128, 128, 128, 0.5);
    text-align: center;
    color: white;
}

.ms-thumb-list.ms-dir-h .ms-thumblist-bwd {
    right: 0;
    left: auto;
}

.ms-thumb-list.ms-dir-h .ms-thumblist-fwd:after, .ms-thumb-list.ms-dir-h .ms-thumblist-bwd:after {
  content: close-quote;
  top: 43%;
  position: relative;
  border: solid rgba(0, 0, 0, 0);
  border-width: 5px 5px 5px 0px;
  display: block;
  border-right-color: #FFF;
  width: 6px;
  height: 1px;
}

.ms-thumb-list.ms-dir-h .ms-thumblist-bwd:after {
  border-width: 5px 0px 5px 5px;
  border-left-color: #FFF;
  left: 7px;
}

/* vertical thumblist arrows */
.ms-thumb-list.ms-dir-v .ms-thumblist-fwd, .ms-thumb-list.ms-dir-v .ms-thumblist-bwd {
    width: 100%;
    height: 20px;
    position: absolute;
    top: 0;
    cursor: pointer;
    background: rgba(128, 128, 128, 0.5);
    text-align: center;
    color: white;
}

.ms-thumb-list.ms-dir-v .ms-thumblist-bwd {
    bottom: 0;
    top: auto;
}

.ms-thumb-list.ms-dir-v .ms-thumblist-fwd:after, .ms-thumb-list.ms-dir-v .ms-thumblist-bwd:after {
  content: close-quote;
  left: 43%;
  position: relative;
  border: solid rgba(0, 0, 0, 0);
  border-width: 0px 5px 5px 5px;
  display: block;
  border-bottom-color: #FFF;
  height: 1px;
  top: 5px;
  width: 0;
}

.ms-thumb-list.ms-dir-v .ms-thumblist-bwd:after {
  border-width: 5px 5px 0px 5px;
  border-top-color: #FFF;
  top: 7px;
}

/* Thumb in tab styles */
.ms-tabs.ms-dir-v.ms-has-thumb .ms-thumbs-cont{ top:0 !important; }
.ms-tabs.ms-has-thumb .ms-thumb-frame{ height: auto !important; }
.ms-tabs.ms-has-thumb .ms-thumb{ padding:0; }
.ms-tabs.ms-has-thumb .ms-tab-context{ padding:20px; }
.ms-tabs.ms-align-left  .ms-tab-thumb{ float:left;  margin-right:20px; }
.ms-tabs.ms-align-right .ms-tab-thumb{ float:right; margin-left: 20px; }

.ms-bullet{cursor:pointer;float: left;}
.ms-bullets.ms-dir-h {
	position: absolute;
	bottom: 20px;
	right: 50%;
	width: 100px;
}

.ms-bullets.ms-dir-v {
	position: absolute;
	top:50%;
}

.ms-bullets.ms-dir-v .ms-bullet{
	float: none;
}
.ms-bullets.ms-dir-h .ms-bullets-count {
	position: relative;
	right: -50%;
}

.ms-sbar {position: absolute;}
.ms-sbar.ms-dir-h {
	left: 10px;
	right: 10px;
	top: 5px
}

.ms-sbar.ms-dir-v {
	top: 10px;
	bottom: 10px;
	right: 5px
}

.ms-sbar .ms-bar {
	height: 4px;
	background: #333;
	border-radius: 4px;
}

.ms-sbar.ms-dir-v .ms-bar {	width: 4px;}

.ms-sbar .ms-bar{
	position:relative;
	-webkit-transition: opacity 300ms;
	transition: opacity 300ms;
}

.ms-timerbar {
	width: 100%;
	bottom: 0px;
	position: absolute;
}

.ms-ctimer {
	position: absolute;
	top: 30px;
	left: 30px;
	cursor: pointer;
}

.ms-ctimer-bullet {}

.ms-time-bar{
	-webkit-transition: width 120ms linear;
	transition: width 120ms linear;
}

.ms-ie7 .ms-tooltip-arrow{
	height:0px;
}

.ms-slide-info {position: absolute;}
.ms-slide-info.ms-dir-v {top:0;}
.ms-slide-info.ms-dir-h {width:100%;}

@-webkit-keyframes ms-point-anim{
	0% 		{-webkit-transform: scale(0.5);transform: scale(0.5);  opacity: 1; }
	100% 	{-webkit-transform: scale(1.5);transform: scale(1.5);  opacity: 0; }
}

@keyframes ms-point-anim{
	0% 		{-webkit-transform: scale(0.5);transform: scale(0.5);  opacity: 1; }
	100% 	{-webkit-transform: scale(1.5);transform: scale(1.5);  opacity: 0; }
}
/* In Android browser, using css animations over slider causes some crashes */
.ms-android .ms-tooltip-point .ms-point-border{
	animation:none;
	-moz-animation:none;
	-webkit-animation:none;
	-o-animation:none;
}
.ms-pattern.ms-patt-1  {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABRJREFUeNpiYICA/wzoDGTwHyDAADXxAv4Eq8S5AAAAAElFTkSuQmCC);}
.ms-pattern.ms-patt-2  {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhJREFUeNpiYECA/wxogLAANoBdF0CAAQD+agT8l3ocpQAAAABJRU5ErkJggg==);}
.ms-pattern.ms-patt-3  {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACxJREFUeNqU0EENAAAMwkD8m+4s7PhCCmHbGijxE0jS1HOOhxJSUhf9eAIMAI/CEe94Ny14AAAAAElFTkSuQmCC);}
.ms-pattern.ms-patt-4  {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhJREFUeNpiYGBg+M+ABfxHo3Fz/gMEGACtlgX7j8MuyAAAAABJRU5ErkJggg==);}
.ms-pattern.ms-patt-5  {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABNJREFUeNpiYECA/3CCAV0UIMAANfEC/mOKn1cAAAAASUVORK5CYII=);}
.ms-pattern.ms-patt-6  {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABRJREFUeNpiYGBg+M+AClD4AAEGACn3Af/97SgJAAAAAElFTkSuQmCC);}
.ms-pattern.ms-patt-7  {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpiYMAE/+EEAy5Z0iUAAgwA/moE/KMl2lgAAAAASUVORK5CYII=);}
.ms-pattern.ms-patt-8  {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAYAAAA4GpVBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABRJREFUeNpiYGBg+M+ACdDFAAIMADP0Af/w5VDVAAAAAElFTkSuQmCC);}
.ms-pattern.ms-patt-9  {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJJREFUeNpiYGBg+M9AGQAIMABABAEA80yJjQAAAABJRU5ErkJggg==);}
.ms-pattern.ms-patt-10 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpiYGBg+A/FcMDEQH0AEGAAxksCAb3vCDgAAAAASUVORK5CYII=);}
.ms-pattern.ms-patt-11 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABxJREFUeNpiZGBg+M+AChhBBBMDDkC6BOkAIMAAlXQBCO9f4icAAAAASUVORK5CYII=);}
.ms-pattern.ms-patt-12 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiYGBg+M8AATAaDnAKYEgQBgABBgB6/AT8h9ybfgAAAABJRU5ErkJggg==);}
.ms-pattern.ms-patt-13 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB1JREFUeNpiYGBg+M+ABJig9H90AbggI7oWgAADAI5xBAIRYsxUAAAAAElFTkSuQmCC);}
.ms-pattern.ms-patt-14 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABdJREFUeNpiYGBg+M+AA9BSgkQBgAADAJIyB/kDCjAnAAAAAElFTkSuQmCC);}
.ms-pattern.ms-patt-15 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB9JREFUeNpiYGBg+M9ABPhPjPh/YjT9J2AipiRAgAEAhjsH+Utd9Z4AAAAASUVORK5CYII=);}
/* white patterns */
.ms-pattern.ms-patt-16 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFAQMAAABCXz8WAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAABJJREFUCNdjaGBwZFBiEGHgAAAHPwEAP8TPrwAAAABJRU5ErkJggg==);}
.ms-pattern.ms-patt-17 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAIAQMAAAALP6d4AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAABZJREFUCNdjaGBwYFBgEGDgAGIFBgcADegBabpJ4LsAAAAASUVORK5CYII=);}
.ms-pattern.ms-patt-18 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAEAQMAAACTPww9AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAABBJREFUCNdjaGA4wPCA4QMACtgDEQ8Bqx8AAAAASUVORK5CYII=);}
.ms-pattern.ms-patt-19 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFAQMAAAC3obSmAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAA9JREFUCNdjWMDgAMRAAAAKigGBlYsMggAAAABJRU5ErkJggg==);}
.ms-pattern.ms-patt-20 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGAQMAAADaAn0LAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAA1JREFUCNdj+ACFQAAAHgwDwds/+0oAAAAASUVORK5CYII=);}
.ms-pattern.ms-patt-21 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFAQMAAAC3obSmAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAA1JREFUCNdjOACEYAAADAoBgRrgDF0AAAAASUVORK5CYII=);}
.ms-pattern.ms-patt-22 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAEAQMAAACTPww9AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjaGAAAwADiACBhux1cwAAAABJRU5ErkJggg==);}
.ms-pattern.ms-patt-23 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAIAQMAAAAC1AcCAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAA5JREFUCNdjaGAAAxgNAAsQAQHPxScOAAAAAElFTkSuQmCC);}
.ms-pattern.ms-patt-24 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABAQMAAADZzn0AAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAApJREFUCNdj6AAAAIoAiVWdWYwAAAAASUVORK5CYII=);}
.ms-pattern.ms-patt-25 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFAQMAAAC3obSmAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAABJJREFUCNdj4GBoYHBgUGAQAAAFggD5HRIFwAAAAABJRU5ErkJggg==);}
.ms-pattern.ms-patt-26 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADAQMAAABs5if8AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAA5JREFUCNdjUGBoYHAAAAJmAOF0EZC+AAAAAElFTkSuQmCC);}
.ms-pattern.ms-patt-27 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAEAQMAAACTPww9AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAABBJREFUCNdjaGAIYFBgCAAABcgBQeTzXGUAAAAASUVORK5CYII=);}
.ms-pattern.ms-patt-28 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAACBJREFUCNdjaGBgcHBgUGhgEGRg4GJgYAGRQDZQBCgOAC/KAvtspwwJAAAAAElFTkSuQmCC);}
.ms-pattern.ms-patt-29 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFAQMAAAC3obSmAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAABJJREFUCNdjUGBwYGhg4GAQAAAFkgD5MUFnfgAAAABJRU5ErkJggg==);}
.ms-pattern.ms-patt-30 {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADAQMAAABs5if8AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAA5JREFUCNdjcGBoYFAAAALmAOHcBT11AAAAAElFTkSuQmCC);}



/**
 *  Master Slider
 *  Default Skin
 */

.ms-skin-default .ms-slide .ms-slide-vpbtn,
.ms-skin-default .ms-video-btn{
	width: 50px;
	height: 51px;
	background: url(skins/light-skin-1.png) no-repeat -14px -150px;
	top: 50%;
	left: 50%;
	margin: -25px 0 0 -25px;
}

.ms-skin-default .ms-slide .ms-slide-vcbtn {
	width: 30px;
	height: 30px;
	background: url(skins/light-skin-1.png) no-repeat -24px -28px;
	top: 18px;
	right: 30px;
}

/* controls */

.ms-skin-default .ms-nav-next,
.ms-skin-default .ms-nav-prev {
	width: 30px;
	background: url(skins/light-skin-1.png);
	background-position: -89px -26px;
	height: 40px;
	cursor: pointer;
	top: 50%;
	left: 30px;
	margin-top: -20px;
	position: absolute;
	z-index: 110;
}
.ms-skin-default .ms-nav-next {
	right: 30px;
	left: auto;
	background-position: -89px -103px;
}



.ms-skin-default .ms-bullet {
	width: 10px;
	height: 10px;
	background: url(skins/light-skin-1.png) no-repeat;
	margin: 4px;
	background-position: -34px -117px;
}

.ms-skin-default .ms-bullet-selected {
	background-position: -34px -84px;
}

.ms-skin-default .ms-tooltip{
	position: absolute;
	z-index: 210;
	cursor: auto;
}

.ms-skin-default .ms-tooltip-top .ms-tooltip-arrow,
.ms-skin-default .ms-tooltip-bottom .ms-tooltip-arrow{
	border-left: solid 10px transparent;
	border-right: solid 10px transparent;
	position: absolute;
	left: 50%;
	margin-left: -10px;
}

.ms-skin-default .ms-tooltip-top .ms-tooltip-arrow{
	border-top: solid 10px;
	border-top-color: silver;
	border-top-color: rgba(240, 240, 240, 0.88);
	bottom: -10px;
}

.ms-skin-default .ms-tooltip-bottom .ms-tooltip-arrow {
	border-bottom: solid 10px;
	border-bottom-color: silver;
	border-bottom-color: rgba(240, 240, 240, 0.88);
	top: -10px;
}

.ms-skin-default .ms-tooltip-right .ms-tooltip-arrow,
.ms-skin-default .ms-tooltip-left .ms-tooltip-arrow{
	border-top: solid 10px transparent;
	border-bottom: solid 10px transparent;
	position: absolute;
	top: 50%;
	margin-top: -10px;
}

.ms-skin-default .ms-tooltip-right .ms-tooltip-arrow{
	border-right: solid 10px;
	border-right-color: silver;
	border-right-color: rgba(240, 240, 240, 0.88);
	left: -10px;
}

.ms-skin-default .ms-tooltip-left .ms-tooltip-arrow {
	border-left: solid 10px;
	border-left-color: silver;
	border-left-color: rgba(240, 240, 240, 0.88);
	right: -10px;
}

.ms-skin-default .ms-tooltip-point {cursor: pointer;}
.ms-skin-default .ms-tooltip-point .ms-point-center {
	width: 12px;
	height: 12px;
	border-radius: 15px;
	border: solid 2px #BBB;
	background: white;
	margin: -8px 0 0 -8px;
	position: absolute;
	z-index: 105;
}

.ms-skin-default .ms-tooltip-point .ms-point-border {
	width: 22px;
	height: 22px;
	background: black;
	background:rgba(0, 0, 0, 0.36);
	margin: -11px 0 0 -11px;
	position: absolute;
	border-radius: 15px;

	animation: ms-point-anim 1.5s infinite ;
	-moz-animation: ms-point-anim 1.5s infinite;
	-webkit-animation: ms-point-anim 1.5s infinite;
	-o-animation: ms-point-anim 1.5s infinite;
}

.ms-skin-default .ms-tooltip {
	max-width:200px;
}

.ms-skin-default .ms-tooltip-cont {
	padding: 10px;
	background: silver;
	background: rgba(240, 240, 240, 0.88);
	text-shadow: 0 1px 0px white;
	margin-left: -1px;
}

/* retina */
@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (   min--moz-device-pixel-ratio: 2),
only screen and (        min-device-pixel-ratio: 2),
only screen and (                -webkit-min-device-pixel-ratio: 2),
only screen and (                min-resolution: 192dpi),
only screen and (                min-resolution: 2dppx) {

	.ms-skin-default .ms-slide .ms-slide-vpbtn,
	.ms-skin-default .ms-video-btn,
	.ms-skin-default .ms-slide .ms-slide-vcbtn,
	.ms-skin-default .ms-nav-next,
	.ms-skin-default .ms-nav-prev,
	.ms-skin-default .ms-bullet{
		background-image:url(skins/light-skin-1-retina.png);
		background-size: 152px 225px;
	}

}



/**
 *  Master Slider
 *  Black 1
 */

.ms-skin-black-1 .ms-slide .ms-slide-vpbtn,
.ms-skin-black-1 .ms-video-btn{
	width: 54px;
	height: 54px;
	background: url(skins/black-skin-1.png) no-repeat -14px -150px;
	top: 50%;
	left: 50%;
	margin: -27px 0 0 -27px;
}

.ms-skin-black-1 .ms-slide .ms-slide-vcbtn {
	width: 27px;
	height: 26px;
	background: url(skins/black-skin-1.png) no-repeat -24px -29px;
	top: 30px;
	right: 30px;
}

/* controls */

.ms-skin-black-1 .ms-nav-next,
.ms-skin-black-1 .ms-nav-prev {
	width: 53px;
	background: url(skins/black-skin-1.png);
	background-position: -79px -19px;
	height: 61px;
	cursor: pointer;
	top: 50%;
	left: 30px;
	margin-top: -26px;
	position: absolute;
	z-index: 110;
}
.ms-skin-black-1 .ms-nav-next {
	right: 30px;
	left: auto;
	background-position: -79px -97px;
}

.ms-skin-black-1 .ms-bullets.ms-dir-h {
	position: absolute;
	bottom: 20px;
	right: 50%;
	width: 100px;
}

.ms-skin-black-1 .ms-bullets.ms-dir-h .ms-bullets-count {
	position: relative;
	right: -50%;
}

.ms-skin-black-1 .ms-bullet {
	width: 9px;
	height: 9px;
	background: white;
	margin: 4px;
	border: solid 1px rgb(58, 58, 58);
}

.ms-skin-black-1 .ms-bullet-selected {
    background-color: black;
}

.ms-skin-black-1 .ms-tooltip{
	position: absolute;
	z-index: 210;
	cursor: auto;
}

.ms-skin-black-1 .ms-tooltip-top .ms-tooltip-arrow,
.ms-skin-black-1 .ms-tooltip-bottom .ms-tooltip-arrow{
	border-left: solid 10px transparent;
	border-right: solid 10px transparent;
	position: absolute;
	left: 50%;
	margin-left: -10px;
}

.ms-skin-black-1 .ms-tooltip-top .ms-tooltip-arrow{
	border-top: solid 10px;
	border-top-color: white;
	border-top-color: rgba(0, 0, 0, 0.8);
	bottom: -10px;
}

.ms-skin-black-1 .ms-tooltip-bottom .ms-tooltip-arrow {
	border-bottom: solid 10px;
	border-bottom-color: white;
	border-bottom-color: rgba(0, 0, 0, 0.8);
	top: -10px;
}

.ms-skin-black-1 .ms-tooltip-right .ms-tooltip-arrow,
.ms-skin-black-1 .ms-tooltip-left .ms-tooltip-arrow{
	border-top: solid 10px transparent;
	border-bottom: solid 10px transparent;
	position: absolute;
	top: 50%;
	margin-top: -10px;
}

.ms-skin-black-1 .ms-tooltip-right .ms-tooltip-arrow{
	border-right: solid 10px;
	border-right-color: white;
	border-right-color: rgba(0, 0, 0, 0.8);
	left: -10px;
}

.ms-skin-black-1 .ms-tooltip-left .ms-tooltip-arrow {
	border-left: solid 10px;
	border-left-color: black;
	border-left-color: rgba(0, 0, 0, 0.8);
	right: -10px;
}

.ms-skin-black-1 .ms-tooltip-point {cursor: pointer;}
.ms-skin-black-1 .ms-tooltip-point .ms-point-center {
	width: 12px;
	height: 12px;
	border-radius: 15px;
	border: solid 2px #444444;
	background: black;
	margin: -8px 0 0 -8px;
	position: absolute;
	z-index: 105;
}

.ms-skin-black-1 .ms-tooltip-point .ms-point-border {
	width: 22px;
	height: 22px;
	background: white;
	background: rgba(255, 255, 255, 0.9);
	margin: -11px 0 0 -11px;
	position: absolute;
	border-radius: 15px;

	animation: ms-point-anim 1.5s infinite ;
	-moz-animation: ms-point-anim 1.5s infinite;
	-webkit-animation: ms-point-anim 1.5s infinite;
	-o-animation: ms-point-anim 1.5s infinite;
}

.ms-skin-black-1  .ms-tooltip {
	max-width:200px;
}

.ms-skin-black-1 .ms-tooltip-cont {
	padding: 10px;
	background: black;
	background: rgba(0, 0, 0, 0.8);
	text-shadow: 0 1px 0px black;
	color: white;
	box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04);
}

/* retina */
@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (   min--moz-device-pixel-ratio: 2),
only screen and (        min-device-pixel-ratio: 2),
only screen and (                -webkit-min-device-pixel-ratio: 2),
only screen and (                min-resolution: 192dpi),
only screen and (                min-resolution: 2dppx) {

	.ms-skin-black-1 .ms-slide .ms-slide-vpbtn,
	.ms-skin-black-1 .ms-video-btn,
	.ms-skin-black-1 .ms-slide .ms-slide-vcbtn,
	.ms-skin-black-1 .ms-nav-next,
	.ms-skin-black-1 .ms-nav-prev{
		background-image:url(skins/black-skin-1-retina.png);
		background-size: 152px 225px;
	}

}



/**
 *  Master Slider
 *  Black 2 Skin
 */

.ms-skin-black-2 .ms-slide .ms-slide-vpbtn,
.ms-skin-black-2 .ms-video-btn{
	width: 45px;
	height: 45px;
	background: url(skins/black-skin-2.png) black no-repeat -16px -103px;
	border: solid 3px rgb(255, 255, 255);
	border-color: rgba(255, 255, 255, 0.4);
	-webkit-background-clip: padding-box;
	top: 50%;
	left: 50%;
	margin: -23px 0 0 -23px;
}

.ms-skin-black-2 .ms-slide .ms-slide-vpbtn:hover,
.ms-skin-black-2 .ms-video-btn:hover{
	background-color: #3D3D3D;
}

.ms-skin-black-2 .ms-slide .ms-slide-vcbtn {
	width: 25px;
	height: 25px;
	background: url(skins/black-skin-2.png) black no-repeat -27px -36px;
	border: solid 2px white;
	border-color: rgba(255, 255, 255, 0.4);
	top: 15px;
	right: 15px;
}

.ms-skin-black-2.round-skin .ms-slide .ms-slide-vcbtn{
	border-radius: 50px;
}


/* controls */

.ms-skin-black-2 .ms-nav-next,
.ms-skin-black-2 .ms-nav-prev {
	position: absolute;
	cursor: pointer;
	z-index: 110;
	width: 45px;
	height: 45px;
	background: url(skins/black-skin-2.png) black;
	background-clip: padding-box;
	background-position: -88px -26px;
	border: solid 3px rgb(255, 255, 255);
	border-color: rgba(255, 255, 255, 0.4);
	top: 50%;
	left: 30px;
	margin-top: -22px;
}

.ms-skin-black-2.round-skin .ms-nav-next,
.ms-skin-black-2.round-skin .ms-nav-prev,
.ms-skin-black-2.round-skin .ms-slide .ms-slide-vpbtn,
.ms-skin-black-2.round-skin .ms-video-btn{
	border-radius: 90px;
}

.ms-skin-black-2 .ms-nav-next:hover,
.ms-skin-black-2 .ms-nav-prev:hover{
	background-color: #3d3d3d;
}

.ms-skin-black-2 .ms-nav-next {
	right: 30px;
	left: auto;
	background-position: -86px -103px;
}

.ms-skin-black-2 .ms-bullets.ms-dir-h {
	position: absolute;
	bottom: 20px;
	right: 50%;
	width: 100px;
}

.ms-skin-black-2 .ms-bullets.ms-dir-h .ms-bullets-count {
	position: relative;
	right: -50%;
}

.ms-skin-black-2 .ms-bullet {
	width: 8px;
	height: 8px;
	background: white;
	-webkit-background-clip: padding-box;
	-moz-background-clip: padding-box;
	-ms-background-clip: padding-box;
	border: solid 3px white;
	border-color: rgba(0, 0, 0, 0.44);
	margin: 4px;
	background-position: -34px -117px;
}

.ms-skin-black-2.round-skin .ms-bullet{
	border-radius: 15px;
}


.ms-skin-black-2 .ms-bullet-selected {
	background-color: black;
	border-color: white;
	border-color: rgba(255, 255, 255, 0.44);
}

.ms-skin-black-2 .ms-tooltip{
	position: absolute;
	z-index: 210;
	cursor: auto;
}

.ms-skin-black-2 .ms-tooltip-top .ms-tooltip-arrow,
.ms-skin-black-2 .ms-tooltip-bottom .ms-tooltip-arrow{
	border-left: solid 10px transparent;
	border-right: solid 10px transparent;
	position: absolute;
	left: 50%;
	margin-left: -10px;
}

.ms-skin-black-2 .ms-tooltip-top .ms-tooltip-arrow{
	border-top: solid 10px;
	border-top-color: silver;
	border-top-color: rgba(240, 240, 240, 0.88);
	bottom: -10px;
}

.ms-skin-black-2 .ms-tooltip-bottom .ms-tooltip-arrow {
	border-bottom: solid 10px;
	border-bottom-color: silver;
	border-bottom-color: rgba(240, 240, 240, 0.88);
	top: -10px;
}

.ms-skin-black-2 .ms-tooltip-right .ms-tooltip-arrow,
.ms-skin-black-2 .ms-tooltip-left .ms-tooltip-arrow{
	border-top: solid 10px transparent;
	border-bottom: solid 10px transparent;
	position: absolute;
	top: 50%;
	margin-top: -10px;
}

.ms-skin-black-2 .ms-tooltip-right .ms-tooltip-arrow{
	border-right: solid 10px;
	border-right-color: silver;
	border-right-color: rgba(240, 240, 240, 0.88);
	left: -10px;
}

.ms-skin-black-2 .ms-tooltip-left .ms-tooltip-arrow {
	border-left: solid 10px;
	border-left-color: silver;
	border-left-color: rgba(240, 240, 240, 0.88);
	right: -10px;
}

.ms-skin-black-2 .ms-tooltip-point {cursor: pointer;}
.ms-skin-black-2 .ms-tooltip-point .ms-point-center {
	width: 12px;
	height: 12px;
	border-radius: 15px;
	border: solid 2px #BBB;
	background: white;
	margin: -8px 0 0 -8px;
	position: absolute;
	z-index: 105;
}

.ms-skin-black-2 .ms-tooltip-point .ms-point-border {
	width: 22px;
	height: 22px;
	background: black;
	background:rgba(0, 0, 0, 0.36);
	margin: -11px 0 0 -11px;
	position: absolute;
	border-radius: 15px;

	animation: ms-point-anim 1.5s infinite ;
	-moz-animation: ms-point-anim 1.5s infinite;
	-webkit-animation: ms-point-anim 1.5s infinite;
	-o-animation: ms-point-anim 1.5s infinite;
}

.ms-ie7.ms-skin-black-2 .ms-tooltip-point .ms-point-border,
.ms-ie8.ms-skin-black-2 .ms-tooltip-point .ms-point-border{
	display: none;
}

.ms-skin-black-2  .ms-tooltip {
	max-width:200px;
}

.ms-skin-black-2 .ms-tooltip-cont {
	padding: 10px;
	background: silver;
	background: rgba(240, 240, 240, 0.88);
	text-shadow: 0 1px 0px white;
	box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04);
}

/* retina */
@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (   min--moz-device-pixel-ratio: 2),
only screen and (        min-device-pixel-ratio: 2),
only screen and (                -webkit-min-device-pixel-ratio: 2),
only screen and (                min-resolution: 192dpi),
only screen and (                min-resolution: 2dppx) {

	.ms-skin-black-2 .ms-slide .ms-slide-vpbtn,
	.ms-skin-black-2 .ms-video-btn,
	.ms-skin-black-2 .ms-slide .ms-slide-vcbtn,
	.ms-skin-black-2 .ms-nav-next,
	.ms-skin-black-2 .ms-nav-prev{
		background-image:url(skins/black-skin-2-retina.png);
		background-size: 152px 225px;
	}

}



/**
 *  Master Slider
 *  Light 2
 */

.ms-skin-light-2 .ms-slide .ms-slide-vpbtn,
.ms-skin-light-2 .ms-video-btn{
	width: 54px;
	height: 54px;
	background: url(skins/light-skin-2.png) no-repeat -14px -150px;
	top: 50%;
	left: 50%;
	margin: -27px 0 0 -27px;
}

.ms-skin-light-2 .ms-slide .ms-slide-vcbtn {
	width: 27px;
	height: 26px;
	background: url(skins/light-skin-2.png) no-repeat -24px -29px;
	top: 30px;
	right: 30px;
}

/* controls */

.ms-skin-light-2 .ms-nav-next,
.ms-skin-light-2 .ms-nav-prev {
	width: 53px;
	background: url(skins/light-skin-2.png);
	background-position: -79px -19px;
	height: 61px;
	cursor: pointer;
	top: 50%;
	left: 30px;
	margin-top: -26px;
	position: absolute;
	z-index: 110;
}
.ms-skin-light-2 .ms-nav-next {
	right: 30px;
	left: auto;
	background-position: -79px -97px;
}

.ms-skin-light-2 .ms-bullets.ms-dir-h {
	position: absolute;
	bottom: 20px;
	right: 50%;
	width: 100px;
}

.ms-skin-light-2 .ms-bullets.ms-dir-h .ms-bullets-count {
	position: relative;
	right: -50%;
}

.ms-skin-light-2 .ms-bullet {
	width: 9px;
	height: 9px;
	background: black;
	margin: 4px;
	border: solid 1px rgb(58, 58, 58);
}

.ms-skin-light-2 .ms-bullet-selected {
    background-color: white;
}

.ms-skin-light-2 .ms-tooltip{
	position: absolute;
	z-index: 210;
	cursor: auto;
}

.ms-skin-light-2 .ms-tooltip-top .ms-tooltip-arrow,
.ms-skin-light-2 .ms-tooltip-bottom .ms-tooltip-arrow{
	border-left: solid 10px transparent;
	border-right: solid 10px transparent;
	position: absolute;
	left: 50%;
	margin-left: -10px;
}

.ms-skin-light-2 .ms-tooltip-top .ms-tooltip-arrow{
	border-top: solid 10px;
	border-top-color: silver;
	border-top-color: rgba(240, 240, 240, 0.88);
	bottom: -10px;
}

.ms-skin-light-2 .ms-tooltip-bottom .ms-tooltip-arrow {
	border-bottom: solid 10px;
	border-bottom-color: silver;
	border-bottom-color: rgba(240, 240, 240, 0.88);
	top: -10px;
}

.ms-skin-light-2 .ms-tooltip-right .ms-tooltip-arrow,
.ms-skin-light-2 .ms-tooltip-left .ms-tooltip-arrow{
	border-top: solid 10px transparent;
	border-bottom: solid 10px transparent;
	position: absolute;
	top: 50%;
	margin-top: -10px;
}

.ms-skin-light-2 .ms-tooltip-right .ms-tooltip-arrow{
	border-right: solid 10px;
	border-right-color: silver;
	border-right-color: rgba(240, 240, 240, 0.88);
	left: -10px;
}

.ms-skin-light-2 .ms-tooltip-left .ms-tooltip-arrow {
	border-left: solid 10px;
	border-left-color: silver;
	border-left-color: rgba(240, 240, 240, 0.88);
	right: -10px;
}

.ms-skin-light-2 .ms-tooltip-point {cursor: pointer;}
.ms-skin-light-2 .ms-tooltip-point .ms-point-center {
	width: 12px;
	height: 12px;
	border-radius: 15px;
	border: solid 2px #BBB;
	background: white;
	margin: -8px 0 0 -8px;
	position: absolute;
	z-index: 105;
}

.ms-skin-light-2 .ms-tooltip-point .ms-point-border {
	width: 22px;
	height: 22px;
	background: black;
	background:rgba(0, 0, 0, 0.36);
	margin: -11px 0 0 -11px;
	position: absolute;
	border-radius: 15px;

	animation: ms-point-anim 1.5s infinite ;
	-moz-animation: ms-point-anim 1.5s infinite;
	-webkit-animation: ms-point-anim 1.5s infinite;
	-o-animation: ms-point-anim 1.5s infinite;
}

.ms-skin-light-2  .ms-tooltip {
	max-width:200px;
}

.ms-skin-light-2 .ms-tooltip-cont {
	padding: 10px;
	background: silver;
	background: rgba(240, 240, 240, 0.88);
	text-shadow: 0 1px 0px white;
	box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04);
}

/* retina */
@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (   min--moz-device-pixel-ratio: 2),
only screen and (        min-device-pixel-ratio: 2),
only screen and (                -webkit-min-device-pixel-ratio: 2),
only screen and (                min-resolution: 192dpi),
only screen and (                min-resolution: 2dppx) {

	.ms-skin-light-2 .ms-slide .ms-slide-vpbtn,
	.ms-skin-light-2 .ms-video-btn,
	.ms-skin-light-2 .ms-slide .ms-slide-vcbtn,
	.ms-skin-light-2 .ms-nav-next,
	.ms-skin-light-2 .ms-nav-prev{
		background-image:url(skins/light-skin-2-retina.png);
		background-size: 152px 225px;
	}

}



/**
 *  Master Slider
 *  Light 3
 */

.ms-skin-light-3 .ms-slide .ms-slide-vpbtn,
.ms-skin-light-3 .ms-video-btn{
	width: 50px;
	height: 50px;
	background: url(skins/light-skin-3.png) no-repeat -15px -149px;
	top: 50%;
	left: 50%;
	margin: -25px 0 0 -25px;
}

.ms-skin-light-3 .ms-slide .ms-slide-vcbtn {
	width: 31px;
	height: 29px;
	background: url(skins/light-skin-3.png) no-repeat -26px -28px;
	top: 30px;
	right: 30px;
}

/* controls */

.ms-skin-light-3 .ms-nav-next,
.ms-skin-light-3 .ms-nav-prev {
	width: 50px;
	background: url(skins/light-skin-3.png);
	background-position: -82px -22px;
	height: 50px;
	cursor: pointer;
	top: 50%;
	left: 30px;
	margin-top: -25px;
	position: absolute;
	z-index: 110;
}
.ms-skin-light-3 .ms-nav-next {
	right: 30px;
	left: auto;
	background-position: -81px -99px;
}

.ms-skin-light-3 .ms-bullets.ms-dir-h {
	position: absolute;
	bottom: 20px;
	right: 50%;
	width: 100px;
}

.ms-skin-light-3 .ms-bullets.ms-dir-h .ms-bullets-count {
	position: relative;
	right: -50%;
}

.ms-skin-light-3 .ms-bullet {
	width: 16px;
	height: 16px;
	background: url(skins/light-skin-3.png) no-repeat;
	background-position: -31px -114px;
	margin: 4px;
}

.ms-skin-light-3 .ms-bullet-selected {
    background-position: -31px -81px;
}

.ms-skin-light-3 .ms-tooltip{
	position: absolute;
	z-index: 210;
	cursor: auto;
}

.ms-skin-light-3 .ms-tooltip-top .ms-tooltip-arrow,
.ms-skin-light-3 .ms-tooltip-bottom .ms-tooltip-arrow{
	border-left: solid 10px transparent;
	border-right: solid 10px transparent;
	position: absolute;
	left: 50%;
	margin-left: -10px;
}

.ms-skin-light-3 .ms-tooltip-top .ms-tooltip-arrow{
	border-top: solid 10px;
	border-top-color: silver;
	border-top-color: rgba(240, 240, 240, 0.88);
	bottom: -10px;
}

.ms-skin-light-3 .ms-tooltip-bottom .ms-tooltip-arrow {
	border-bottom: solid 10px;
	border-bottom-color: silver;
	border-bottom-color: rgba(240, 240, 240, 0.88);
	top: -10px;
}

.ms-skin-light-3 .ms-tooltip-right .ms-tooltip-arrow,
.ms-skin-light-3 .ms-tooltip-left .ms-tooltip-arrow{
	border-top: solid 10px transparent;
	border-bottom: solid 10px transparent;
	position: absolute;
	top: 50%;
	margin-top: -10px;
}

.ms-skin-light-3 .ms-tooltip-right .ms-tooltip-arrow{
	border-right: solid 10px;
	border-right-color: silver;
	border-right-color: rgba(240, 240, 240, 0.88);
	left: -10px;
}

.ms-skin-light-3 .ms-tooltip-left .ms-tooltip-arrow {
	border-left: solid 10px;
	border-left-color: silver;
	border-left-color: rgba(240, 240, 240, 0.88);
	right: -10px;
}

.ms-skin-light-3 .ms-tooltip-point {cursor: pointer;}
.ms-skin-light-3 .ms-tooltip-point .ms-point-center {
	width: 12px;
	height: 12px;
	border-radius: 15px;
	border: solid 2px #BBB;
	background: white;
	margin: -8px 0 0 -8px;
	position: absolute;
	z-index: 105;
}

.ms-skin-light-3 .ms-tooltip-point .ms-point-border {
	width: 22px;
	height: 22px;
	background: black;
	background:rgba(0, 0, 0, 0.36);
	margin: -11px 0 0 -11px;
	position: absolute;
	border-radius: 15px;

	animation: ms-point-anim 1.5s infinite ;
	-moz-animation: ms-point-anim 1.5s infinite;
	-webkit-animation: ms-point-anim 1.5s infinite;
	-o-animation: ms-point-anim 1.5s infinite;
}

.ms-skin-light-3  .ms-tooltip {
	max-width:200px;
}

.ms-skin-light-3 .ms-tooltip-cont {
	padding: 10px;
	background: silver;
	background: rgba(240, 240, 240, 0.88);
	text-shadow: 0 1px 0px white;
	box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04);
}

/* retina */
@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (   min--moz-device-pixel-ratio: 2),
only screen and (        min-device-pixel-ratio: 2),
only screen and (                -webkit-min-device-pixel-ratio: 2),
only screen and (                min-resolution: 192dpi),
only screen and (                min-resolution: 2dppx) {

	.ms-skin-light-3 .ms-slide .ms-slide-vpbtn,
	.ms-skin-light-3 .ms-video-btn,
	.ms-skin-light-3 .ms-slide .ms-slide-vcbtn,
	.ms-skin-light-3 .ms-nav-next,
	.ms-skin-light-3 .ms-nav-prev,
	.ms-skin-light-3 .ms-bullet{
		background-image:url(skins/light-skin-3-retina.png);
		background-size: 152px 225px;
	}

}



/**
 *  Master Slider
 *  Light 4
 */

.ms-skin-light-4 .ms-slide .ms-slide-vpbtn,
.ms-skin-light-4 .ms-video-btn{
	width: 54px;
	height: 54px;
	background: url(skins/light-skin-4.png) no-repeat -14px -150px;
	top: 50%;
	left: 50%;
	margin: -27px 0 0 -27px;
}

.ms-skin-light-4 .ms-slide .ms-slide-vcbtn {
	width: 27px;
	height: 26px;
	background: url(skins/light-skin-4.png) no-repeat -24px -29px;
	top: 30px;
	right: 30px;
}

/* controls */

.ms-skin-light-4 .ms-nav-next,
.ms-skin-light-4 .ms-nav-prev {
	width: 54px;
	background: url(skins/light-skin-4.png);
	background-position: -77px -5px;
	height: 68px;
	cursor: pointer;
	top: 50%;
	left: -27px;
	margin-top: -40px;
	position: absolute;
	z-index: 110;
}
.ms-skin-light-4 .ms-nav-next {
	right: -27px;
	left: auto;
	background-position: -79px -83px;
}

.ms-skin-light-4 .ms-thumb-frame-selected {
	opacity: 0.6;
}

.ms-skin-light-4 .ms-thumb-list.ms-dir-h {
	bottom: -60px;
	width: 100%;
	height: 60px;
}

.ms-skin-light-4 .ms-thumb-list.ms-dir-v {
	height: 100%;
	width: 60px;
	right: -60px;
	top: 0;
}

.ms-skin-light-4 .ms-thumb-frame {
	cursor: pointer;
	float: left;
	width: 60px;
	height: 60px;
	margin: 1px 0 0 1px;
	overflow: hidden;
}

.ms-skin-light-4 .ms-bullets.ms-dir-h {
	position: absolute;
	bottom: 20px;
	right: 50%;
	width: 100px;
}

.ms-skin-light-4 .ms-bullets.ms-dir-h .ms-bullets-count {
	position: relative;
	right: -50%;
}

.ms-skin-light-4 .ms-bullet {
	width: 9px;
	height: 9px;
	background: #b9b9b9;
	margin: 4px;
	border: solid 1px rgb(163, 163, 163);
}

.ms-skin-light-4 .ms-bullet-selected {
    background-color: white;
}

.ms-skin-light-4 .ms-tooltip{
	position: absolute;
	z-index: 210;
	cursor: auto;
}

.ms-skin-light-4 .ms-tooltip-top .ms-tooltip-arrow,
.ms-skin-light-4 .ms-tooltip-bottom .ms-tooltip-arrow{
	border-left: solid 10px transparent;
	border-right: solid 10px transparent;
	position: absolute;
	left: 50%;
	margin-left: -10px;
}

.ms-skin-light-4 .ms-tooltip-top .ms-tooltip-arrow{
	border-top: solid 10px;
	border-top-color: silver;
	border-top-color: rgba(240, 240, 240, 0.88);
	bottom: -10px;
}

.ms-skin-light-4 .ms-tooltip-bottom .ms-tooltip-arrow {
	border-bottom: solid 10px;
	border-bottom-color: silver;
	border-bottom-color: rgba(240, 240, 240, 0.88);
	top: -10px;
}

.ms-skin-light-4 .ms-tooltip-right .ms-tooltip-arrow,
.ms-skin-light-4 .ms-tooltip-left .ms-tooltip-arrow{
	border-top: solid 10px transparent;
	border-bottom: solid 10px transparent;
	position: absolute;
	top: 50%;
	margin-top: -10px;
}

.ms-skin-light-4 .ms-tooltip-right .ms-tooltip-arrow{
	border-right: solid 10px;
	border-right-color: silver;
	border-right-color: rgba(240, 240, 240, 0.88);
	left: -10px;
}

.ms-skin-light-4 .ms-tooltip-left .ms-tooltip-arrow {
	border-left: solid 10px;
	border-left-color: white;
	border-left-color: rgba(240, 240, 240, 0.88);
	right: -10px;
}

.ms-skin-light-4 .ms-tooltip-point {cursor: pointer;}
.ms-skin-light-4 .ms-tooltip-point .ms-point-center {
	width: 12px;
	height: 12px;
	border-radius: 15px;
	border: solid 2px #E0E0E0;
	background: #4b8aac;
	margin: -8px 0 0 -8px;
	position: absolute;
	z-index: 105;
}

.ms-skin-light-4 .ms-tooltip-point .ms-point-border {
	width: 22px;
	height: 22px;
	background: white;
	margin: -11px 0 0 -11px;
	position: absolute;
	border-radius: 15px;

	animation: ms-point-anim 1.5s infinite ;
	-moz-animation: ms-point-anim 1.5s infinite;
	-webkit-animation: ms-point-anim 1.5s infinite;
	-o-animation: ms-point-anim 1.5s infinite;
}


.ms-skin-light-4  .ms-tooltip {
	max-width:200px;
}

.ms-skin-light-4 .ms-tooltip-cont {
	padding: 10px;
	background: silver;
	background: rgba(240, 240, 240, 0.88);
	text-shadow: 0 1px 0px white;
	box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04);
}

/* retina */
@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (   min--moz-device-pixel-ratio: 2),
only screen and (        min-device-pixel-ratio: 2),
only screen and (                -webkit-min-device-pixel-ratio: 2),
only screen and (                min-resolution: 192dpi),
only screen and (                min-resolution: 2dppx) {

	.ms-skin-light-4 .ms-slide .ms-slide-vpbtn,
	.ms-skin-light-4 .ms-video-btn,
	.ms-skin-light-4 .ms-slide .ms-slide-vcbtn,
	.ms-skin-light-4 .ms-nav-next,
	.ms-skin-light-4 .ms-nav-prev{
		background-image:url(skins/light-skin-4-retina.png);
		background-size: 152px 225px;
	}

}



/**
 *  Master Slider
 *  Light 5
 */

.ms-skin-light-5 .ms-slide .ms-slide-vpbtn,
.ms-skin-light-5 .ms-video-btn{
	width: 32px;
	height: 32px;
	background: url(skins/light-skin-5.png) black no-repeat -24px -160px;
	top: 50%;
	left: 50%;
	margin: -18px 0 0 -18px;
}

.ms-skin-light-5 .ms-slide .ms-slide-vpbtn:hover,
.ms-skin-light-5 .ms-video-btn:hover{
	background-color:#646464;
}

.ms-skin-light-5 .ms-slide .ms-slide-vcbtn {
	width: 30px;
	height: 30px;
	background: url(skins/light-skin-5.png) white no-repeat -24px -28px;
	top: 18px;
	right: 30px;
}

/* controls */

.ms-skin-light-5 .ms-nav-next,
.ms-skin-light-5 .ms-nav-prev {
	width: 32px;
	background: url(skins/light-skin-5.png) white;
	background-position: -94px -32px;
	height: 32px;
	cursor: pointer;
	bottom: 40px;
	left: 40px;
	margin-top: -20px;
	position: absolute;
	z-index: 110;
}

.ms-skin-light-5 .ms-nav-next:hover,
.ms-skin-light-5 .ms-nav-prev:hover{
	background-color:#E0E0E0;
}

.ms-skin-light-5 .ms-nav-next {
	left: 73px;
	background-position: -93px -110px;
}

.ms-skin-light-5 .ms-bullets.ms-dir-h {
	position: absolute;
	bottom: 20px;
	right: 50%;
	width: 100px;
}

.ms-skin-light-5 .ms-bullets.ms-dir-h .ms-bullets-count {
	position: relative;
	right: -50%;
}

.ms-skin-light-5 .ms-bullet {
	width: 10px;
	height: 10px;
	background: url(skins/light-skin-5.png) no-repeat;
	margin: 4px;
	background-position: -34px -117px;
}

.ms-skin-light-5 .ms-bullet-selected {
	background-position: -34px -84px;
}

.ms-skin-light-5 .ms-tooltip{
	position: absolute;
	z-index: 210;
	cursor: auto;
}

.ms-skin-light-5 .ms-tooltip-top .ms-tooltip-arrow,
.ms-skin-light-5 .ms-tooltip-bottom .ms-tooltip-arrow{
	border-left: solid 10px transparent;
	border-right: solid 10px transparent;
	position: absolute;
	left: 50%;
	margin-left: -10px;
}

.ms-skin-light-5 .ms-tooltip-top .ms-tooltip-arrow{
	border-top: solid 10px;
	border-top-color: silver;
	border-top-color: rgba(240, 240, 240, 0.88);
	bottom: -10px;
}

.ms-skin-light-5 .ms-tooltip-bottom .ms-tooltip-arrow {
	border-bottom: solid 10px;
	border-bottom-color: silver;
	border-bottom-color: rgba(240, 240, 240, 0.88);
	top: -10px;
}

.ms-skin-light-5 .ms-tooltip-right .ms-tooltip-arrow,
.ms-skin-light-5 .ms-tooltip-left .ms-tooltip-arrow{
	border-top: solid 10px transparent;
	border-bottom: solid 10px transparent;
	position: absolute;
	top: 50%;
	margin-top: -10px;
}

.ms-skin-light-5 .ms-tooltip-right .ms-tooltip-arrow{
	border-right: solid 10px;
	border-right-color: silver;
	border-right-color: rgba(240, 240, 240, 0.88);
	left: -10px;
}

.ms-skin-light-5 .ms-tooltip-left .ms-tooltip-arrow {
	border-left: solid 10px;
	border-left-color: silver;
	border-left-color: rgba(240, 240, 240, 0.88);
	right: -10px;
}

.ms-skin-light-5 .ms-tooltip-point {cursor: pointer;}
.ms-skin-light-5 .ms-tooltip-point .ms-point-center {
	width: 12px;
	height: 12px;
	border-radius: 15px;
	border: solid 2px #BBB;
	background: white;
	margin: -8px 0 0 -8px;
	position: absolute;
	z-index: 105;
}

.ms-skin-light-5 .ms-tooltip-point .ms-point-border {
	width: 22px;
	height: 22px;
	background: black;
	background:rgba(0, 0, 0, 0.36);
	margin: -11px 0 0 -11px;
	position: absolute;
	border-radius: 15px;

	animation: ms-point-anim 1.5s infinite ;
	-moz-animation: ms-point-anim 1.5s infinite;
	-webkit-animation: ms-point-anim 1.5s infinite;
	-o-animation: ms-point-anim 1.5s infinite;
}

/* In Android browser, using css animations over slider causes some crashes */
.ms-android.ms-skin-light-5 .ms-tooltip-point .ms-point-border{
	animation:none;
	-moz-animation:none;
	-webkit-animation:none;
	-o-animation:none;
}

.ms-ie7.ms-skin-light-5 .ms-tooltip-point .ms-point-border,
.ms-ie8.ms-skin-light-5 .ms-tooltip-point .ms-point-border{
	display: none;
}

.ms-skin-light-5  .ms-tooltip {
	max-width:200px;
}

.ms-skin-light-5 .ms-tooltip-cont {
	padding: 10px;
	background: silver;
	background: rgba(240, 240, 240, 0.88);
	text-shadow: 0 1px 0px white;
	box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04);
}

/* retina */
@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (   min--moz-device-pixel-ratio: 2),
only screen and (        min-device-pixel-ratio: 2),
only screen and (                -webkit-min-device-pixel-ratio: 2),
only screen and (                min-resolution: 192dpi),
only screen and (                min-resolution: 2dppx) {

	.ms-skin-light-5 .ms-slide .ms-slide-vpbtn,
	.ms-skin-light-5 .ms-video-btn,
	.ms-skin-light-5 .ms-slide .ms-slide-vcbtn,
	.ms-skin-light-5 .ms-nav-next,
	.ms-skin-light-5 .ms-nav-prev{
		background-image:url(skins/light-skin-5-retina.png);
		background-size: 152px 225px;
	}

}



/**
 *  Master Slider
 *  Light-6 Skin
 */

.ms-skin-light-6 .ms-slide .ms-slide-vpbtn,
.ms-skin-light-6 .ms-video-btn{
	width: 45px;
	height: 45px;
	background: url(skins/light-skin-6.png) white no-repeat -16px -103px;
	border: solid 3px rgb(112, 112, 112);  border-color: rgba(0, 0, 0, 0.27);
	-webkit-background-clip: padding-box;
	top: 50%;
	left: 50%;
	margin: -23px 0 0 -23px;
}

.ms-skin-light-6 .ms-slide .ms-slide-vpbtn:hover,
.ms-skin-light-6 .ms-video-btn:hover{
	background-color:#E0E0E0;
}

.ms-skin-light-6 .ms-slide .ms-slide-vcbtn {
	width: 25px;
	height: 25px;
	background: url(skins/light-skin-6.png) white no-repeat -27px -36px;
	top: 15px;
	right: 15px;
}

.ms-skin-light-6.round-skin .ms-slide .ms-slide-vcbtn{
	border-radius: 30px;
}


/* controls */

.ms-skin-light-6 .ms-nav-next,
.ms-skin-light-6 .ms-nav-prev {
	position: absolute;
	cursor: pointer;
	z-index: 110;
	width: 45px;
	height: 45px;
	background: url(skins/light-skin-6.png) white;
	background-clip: padding-box;
	background-position: -88px -26px;
	border: solid 3px rgb(112, 112, 112);
	border-color: rgba(0, 0, 0, 0.27);
	top: 50%;
	left: 30px;
	margin-top: -22px;
}

.ms-skin-light-6.round-skin .ms-nav-next,
.ms-skin-light-6.round-skin .ms-nav-prev,
.ms-skin-light-6.round-skin .ms-slide .ms-slide-vpbtn,
.ms-skin-light-6.round-skin .ms-video-btn{
	border-radius: 90px;
}

.ms-skin-light-6 .ms-nav-next:hover,
.ms-skin-light-6 .ms-nav-prev:hover{
	background-color:#E0E0E0;
}

.ms-skin-light-6 .ms-nav-next {
	right: 30px;
	left: auto;
	background-position: -86px -103px;
}


.ms-skin-light-6 .ms-bullets.ms-dir-h {
	position: absolute;
	bottom: 20px;
	right: 50%;
	width: 100px;
}

.ms-skin-light-6 .ms-bullets.ms-dir-h .ms-bullets-count {
	position: relative;
	right: -50%;
}

.ms-skin-light-6 .ms-bullet {
	width: 8px;
	height: 8px;
	background: black;
	-webkit-background-clip: padding-box;
	border: solid 3px white;
	border-color: rgba(255, 255, 255, 0.44);
	margin: 4px;
	background-position: -34px -117px;
}

.ms-skin-light-6.round-skin .ms-bullet{
	border-radius: 15px;
}

.ms-skin-light-6 .ms-bullet-selected {
	background-color: white;
	border-color: black;
	border-color: rgba(0, 0, 0, 0.44);
}

.ms-skin-light-6 .ms-tooltip{
	position: absolute;
	z-index: 210;
	cursor: auto;
}

.ms-skin-light-6 .ms-tooltip-top .ms-tooltip-arrow,
.ms-skin-light-6 .ms-tooltip-bottom .ms-tooltip-arrow{
	border-left: solid 10px transparent;
	border-right: solid 10px transparent;
	position: absolute;
	left: 50%;
	margin-left: -10px;
}

.ms-skin-light-6 .ms-tooltip-top .ms-tooltip-arrow{
	border-top: solid 10px;
	border-top-color: silver;
	border-top-color: rgba(240, 240, 240, 0.88);
	bottom: -10px;
}

.ms-skin-light-6 .ms-tooltip-bottom .ms-tooltip-arrow {
	border-bottom: solid 10px;
	border-bottom-color: silver;
	border-bottom-color: rgba(240, 240, 240, 0.88);
	top: -10px;
}

.ms-skin-light-6 .ms-tooltip-right .ms-tooltip-arrow,
.ms-skin-light-6 .ms-tooltip-left .ms-tooltip-arrow{
	border-top: solid 10px transparent;
	border-bottom: solid 10px transparent;
	position: absolute;
	top: 50%;
	margin-top: -10px;
}

.ms-skin-light-6 .ms-tooltip-right .ms-tooltip-arrow{
	border-right: solid 10px;
	border-right-color: silver;
	border-right-color: rgba(240, 240, 240, 0.88);
	left: -10px;
}

.ms-skin-light-6 .ms-tooltip-left .ms-tooltip-arrow {
	border-left: solid 10px;
	border-left-color: silver;
	border-left-color: rgba(240, 240, 240, 0.88);
	right: -10px;
}

.ms-skin-light-6 .ms-tooltip-point {cursor: pointer;}
.ms-skin-light-6 .ms-tooltip-point .ms-point-center {
	width: 12px;
	height: 12px;
	border-radius: 15px;
	border: solid 2px #BBB;
	background: white;
	margin: -8px 0 0 -8px;
	position: absolute;
	z-index: 105;
}

.ms-skin-light-6 .ms-tooltip-point .ms-point-border {
	width: 22px;
	height: 22px;
	background: black;
	background:rgba(0, 0, 0, 0.36);
	margin: -11px 0 0 -11px;
	position: absolute;
	border-radius: 15px;

	animation: ms-point-anim 1.5s infinite ;
	-moz-animation: ms-point-anim 1.5s infinite;
	-webkit-animation: ms-point-anim 1.5s infinite;
	-o-animation: ms-point-anim 1.5s infinite;
}

.ms-ie7.ms-skin-light-6 .ms-tooltip-point .ms-point-border,
.ms-ie8.ms-skin-light-6 .ms-tooltip-point .ms-point-border{
	display: none;
}

.ms-skin-light-6  .ms-tooltip {
	max-width:200px;
}

.ms-skin-light-6 .ms-tooltip-cont {
	padding: 10px;
	background: silver;
	background: rgba(240, 240, 240, 0.88);
	text-shadow: 0 1px 0px white;
	box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04);
}

/* retina */
@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (   min--moz-device-pixel-ratio: 2),
only screen and (        min-device-pixel-ratio: 2),
only screen and (                -webkit-min-device-pixel-ratio: 2),
only screen and (                min-resolution: 192dpi),
only screen and (                min-resolution: 2dppx) {

	.ms-skin-light-6 .ms-slide .ms-slide-vpbtn,
	.ms-skin-light-6 .ms-video-btn,
	.ms-skin-light-6 .ms-slide .ms-slide-vcbtn,
	.ms-skin-light-6 .ms-nav-next,
	.ms-skin-light-6 .ms-nav-prev{
		background-image:url(skins/light-skin-6-retina.png);
		background-size: 152px 225px;
	}

}



/**
 *  Master Slider
 *  Metro Skin
 */

.ms-skin-metro .ms-slide .ms-slide-vpbtn,
.ms-skin-metro .ms-video-btn{
	width: 47px;
	height: 46px;
	background: url(skins/metro-skin.png) no-repeat -16px -152px;
	top: 50%;
	left: 50%;
	margin: -22px 0 0 -24px;
}

.ms-skin-metro .ms-slide .ms-slide-vcbtn {
	width: 47px;
	height: 47px;
	background: url(skins/metro-skin.png) no-repeat -16px -19px;
	top: 15px;
	right: 15px;
}

/* controls */

.ms-skin-metro .ms-nav-next,
.ms-skin-metro .ms-nav-prev {
	width: 47px;
	background: url(skins/metro-skin.png);
	background-position: -83px -23px;
	height: 47px;
	cursor: pointer;
	top: 50%;
	left: 30px;
	margin-top: -24px;
	position: absolute;
	z-index: 110;
}
.ms-skin-metro .ms-nav-next {
	right: 30px;
	left: auto;
	background-position: -81px -100px;
}

.ms-skin-metro .ms-bullets.ms-dir-h {
	position: absolute;
	bottom: 20px;
	right: 50%;
	width: 100px;
}

.ms-skin-metro .ms-bullets.ms-dir-h .ms-bullets-count {
	position: relative;
	right: -50%;
}

.ms-skin-metro .ms-bullet {
	width: 16px;
	height: 16px;
	background: url(skins/metro-skin.png) no-repeat;
	background-position: -31px -114px;
	margin: 4px;
}

.ms-skin-metro .ms-bullet-selected {
    background-position: -31px -81px;
}

.ms-skin-metro .ms-tooltip{
	position: absolute;
	z-index: 210;
	cursor: auto;
}

.ms-skin-metro .ms-tooltip-top .ms-tooltip-arrow,
.ms-skin-metro .ms-tooltip-bottom .ms-tooltip-arrow{
	border-left: solid 10px transparent;
	border-right: solid 10px transparent;
	position: absolute;
	left: 50%;
	margin-left: -10px;
}

.ms-skin-metro .ms-tooltip-top .ms-tooltip-arrow{
	border-top: solid 10px;
	border-top-color: silver;
	border-top-color: rgba(240, 240, 240, 0.88);
	bottom: -10px;
}

.ms-skin-metro .ms-tooltip-bottom .ms-tooltip-arrow {
	border-bottom: solid 10px;
	border-bottom-color: silver;
	border-bottom-color: rgba(240, 240, 240, 0.88);
	top: -10px;
}

.ms-skin-metro .ms-tooltip-right .ms-tooltip-arrow,
.ms-skin-metro .ms-tooltip-left .ms-tooltip-arrow{
	border-top: solid 10px transparent;
	border-bottom: solid 10px transparent;
	position: absolute;
	top: 50%;
	margin-top: -10px;
}

.ms-skin-metro .ms-tooltip-right .ms-tooltip-arrow{
	border-right: solid 10px;
	border-right-color: silver;
	border-right-color: rgba(240, 240, 240, 0.88);
	left: -10px;
}

.ms-skin-metro .ms-tooltip-left .ms-tooltip-arrow {
	border-left: solid 10px;
	border-left-color: silver;
	border-left-color: rgba(240, 240, 240, 0.88);
	right: -10px;
}

.ms-skin-metro .ms-tooltip-point {cursor: pointer;}
.ms-skin-metro .ms-tooltip-point .ms-point-center {
	width: 12px;
	height: 12px;
	border-radius: 15px;
	border: solid 2px #BBB;
	background: white;
	margin: -8px 0 0 -8px;
	position: absolute;
	z-index: 105;
}

.ms-skin-metro .ms-tooltip-point .ms-point-border {
	width: 22px;
	height: 22px;
	background: black;
	background:rgba(0, 0, 0, 0.36);
	margin: -11px 0 0 -11px;
	position: absolute;
	border-radius: 15px;

	animation: ms-point-anim 1.5s infinite ;
	-moz-animation: ms-point-anim 1.5s infinite;
	-webkit-animation: ms-point-anim 1.5s infinite;
	-o-animation: ms-point-anim 1.5s infinite;
}

.ms-skin-metro .ms-tooltip {
	max-width:200px;
}

.ms-skin-metro .ms-tooltip-cont {
	padding: 10px;
	background: silver;
	background: rgba(240, 240, 240, 0.88);
	text-shadow: 0 1px 0px white;
	box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04);
}

/* retina */
@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (   min--moz-device-pixel-ratio: 2),
only screen and (        min-device-pixel-ratio: 2),
only screen and (                -webkit-min-device-pixel-ratio: 2),
only screen and (                min-resolution: 192dpi),
only screen and (                min-resolution: 2dppx) {

	.ms-skin-metro .ms-slide .ms-slide-vpbtn,
	.ms-skin-metro .ms-video-btn,
	.ms-skin-metro .ms-slide .ms-slide-vcbtn,
	.ms-skin-metro .ms-nav-next,
	.ms-skin-metro .ms-nav-prev,
	.ms-skin-metro .ms-bullet{
		background-image:url(skins/metro-skin-retina.png);
		background-size: 152px 225px;
	}

}



/**
 *  Master Slider
 *  minimal Skin
 */

.ms-skin-minimal .ms-slide .ms-slide-vpbtn,
.ms-skin-minimal .ms-video-btn{
    width: 55px;
    height: 55px;
    background: url(skins/minimal.svg) no-repeat 24px 18px white;
    border: solid 1px #3d3d3d;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    margin: -27px 0 0 -27px;
    -webkit-transition: background-color 300ms;
            transition: background-color 300ms;
}
.ms-skin-minimal .ms-slide .ms-slide-vcbtn:hover,
.ms-skin-minimal .ms-slide .ms-slide-vpbtn:hover,
.ms-skin-minimal .ms-video-btn:hover {
    background-color: #f1f1f1;
}

.ms-skin-minimal .ms-slide .ms-slide-vcbtn {
    width: 31px;
    height: 31px;
    background: url(skins/minimal.svg) no-repeat -289px 6px white;
    border-radius: 50%;
    border: solid 1px #3d3d3d;
    top: 18px;
    right: 30px;
    -webkit-transition: background-color 300ms;
            transition: background-color 300ms;
}

/* controls */

.ms-skin-minimal .ms-nav-next,
.ms-skin-minimal .ms-nav-prev {
    background: url(skins/minimal.svg) no-repeat white;
    background-position: -178px 17px;
    border: solid 1px #3d3d3d;
    border-radius: 50%;
    height: 55px;
    width: 55px;
    cursor: pointer;
    top: 50%;
    left: 30px;
    margin-top: -27px;
    position: absolute;
    z-index: 110;
    -webkit-transition: background-color 300ms;
            transition: background-color 300ms;
}

.ms-skin-minimal .ms-nav-next:hover,
.ms-skin-minimal .ms-nav-prev:hover{
    background-color: #f1f1f1;
}

.ms-skin-minimal .ms-nav-next {
    right: 30px;
    left: auto;
    background-position: -75px 17px;
}

.ms-skin-minimal .ms-bullet {
    width: 8px;
    height: 8px;
    background: white;
    border: solid 1px #3d3d3d;
    border-radius: 50%;
    margin: 4px;
    background-position: -34px -117px;
}

.ms-skin-minimal .ms-bullet-selected {
    background: #3d3d3d;
}


.ms-skin-minimal .ms-time-bar {
    height: 3px;
    background: #FFFFFF;
    border-top: solid 1px rgba(0, 0, 0, 0.41);
}


.ms-skin-minimal .ms-tooltip{
    position: absolute;
    z-index: 210;
    cursor: auto;
}

.ms-skin-minimal .ms-tooltip-top .ms-tooltip-arrow,
.ms-skin-minimal .ms-tooltip-bottom .ms-tooltip-arrow{
    border-left: solid 10px transparent;
    border-right: solid 10px transparent;
    position: absolute;
    left: 50%;
    margin-left: -10px;
}

.ms-skin-minimal .ms-tooltip-top .ms-tooltip-arrow{
    border-top: solid 10px;
    border-top-color: silver;
    border-top-color: rgba(240, 240, 240, 0.88);
    bottom: -10px;
}

.ms-skin-minimal .ms-tooltip-bottom .ms-tooltip-arrow {
    border-bottom: solid 10px;
    border-bottom-color: silver;
    border-bottom-color: rgba(240, 240, 240, 0.88);
    top: -10px;
}

.ms-skin-minimal .ms-tooltip-right .ms-tooltip-arrow,
.ms-skin-minimal .ms-tooltip-left .ms-tooltip-arrow{
    border-top: solid 10px transparent;
    border-bottom: solid 10px transparent;
    position: absolute;
    top: 50%;
    margin-top: -10px;
}

.ms-skin-minimal .ms-tooltip-right .ms-tooltip-arrow{
    border-right: solid 10px;
    border-right-color: silver;
    border-right-color: rgba(240, 240, 240, 0.88);
    left: -10px;
}

.ms-skin-minimal .ms-tooltip-left .ms-tooltip-arrow {
    border-left: solid 10px;
    border-left-color: silver;
    border-left-color: rgba(240, 240, 240, 0.88);
    right: -10px;
}

.ms-skin-minimal .ms-tooltip-point {cursor: pointer;}
.ms-skin-minimal .ms-tooltip-point .ms-point-center {
    width: 12px;
    height: 12px;
    border-radius: 15px;
    border: solid 2px #BBB;
    background: white;
    margin: -8px 0 0 -8px;
    position: absolute;
    z-index: 105;
}

.ms-skin-minimal .ms-tooltip-point .ms-point-border {
    width: 22px;
    height: 22px;
    background: black;
    background:rgba(0, 0, 0, 0.36);
    margin: -11px 0 0 -11px;
    position: absolute;
    border-radius: 15px;

    animation: ms-point-anim 1.5s infinite ;
    -moz-animation: ms-point-anim 1.5s infinite;
    -webkit-animation: ms-point-anim 1.5s infinite;
    -o-animation: ms-point-anim 1.5s infinite;
}

.ms-skin-minimal .ms-tooltip {
    max-width:200px;
}

.ms-skin-minimal .ms-tooltip-cont {
    padding: 10px;
    background: silver;
    background: rgba(240, 240, 240, 0.88);
    text-shadow: 0 1px 0px white;
    margin-left: -1px;
}



/**
 *  Master Slider
 *  Contrast
 */

.ms-skin-contrast .ms-slide .ms-slide-vpbtn,
.ms-skin-contrast .ms-video-btn{
	width: 60px;
	height: 60px;
	background: url(skins/contrast-skin.png) no-repeat -10px -144px;
	top: 50%;
	left: 50%;
	margin: -30px 0 0 -30px;
}

.ms-skin-contrast .ms-slide .ms-slide-vcbtn {
	width: 24px;
	height: 24px;
	background: url(skins/contrast-skin.png) no-repeat -27px -30px;
	top: 30px;
	right: 30px;
}

/* controls */

.ms-skin-contrast .ms-nav-next,
.ms-skin-contrast .ms-nav-prev {
	width: 60px;
	background: url(skins/contrast-skin.png);
	background-position: -76px -17px;
	height: 60px;
	cursor: pointer;
	top: 50%;
	left: 30px;
	margin-top: -30px;
	position: absolute;
	z-index: 110;
}
.ms-skin-contrast .ms-nav-next {
	right: 30px;
	left: auto;
	background-position: -77px -91px;
}

.ms-skin-contrast .ms-bullets.ms-dir-h {
	position: absolute;
	bottom: 20px;
	right: 50%;
	width: 100px;
}

.ms-skin-contrast .ms-bullets.ms-dir-h .ms-bullets-count {
	position: relative;
	right: -50%;
}

.ms-skin-contrast .ms-bullet {
	width: 16px;
	height: 16px;
	background: url(skins/contrast-skin.png) no-repeat;
	background-position: -31px -114px;
	margin: 4px;
}

.ms-skin-contrast .ms-bullet-selected {
    background-position: -31px -81px;
}

.ms-skin-contrast .ms-tooltip{
	position: absolute;
	z-index: 210;
	cursor: auto;
}

.ms-skin-contrast .ms-tooltip-top .ms-tooltip-arrow,
.ms-skin-contrast .ms-tooltip-bottom .ms-tooltip-arrow{
	border-left: solid 10px transparent;
	border-right: solid 10px transparent;
	position: absolute;
	left: 50%;
	margin-left: -10px;
}

.ms-skin-contrast .ms-tooltip-top .ms-tooltip-arrow{
	border-top: solid 10px;
	border-top-color: #fc3116;
	border-top-color: rgba(252, 49, 22, 0.8);
	bottom: -10px;
}

.ms-skin-contrast .ms-tooltip-bottom .ms-tooltip-arrow {
	border-bottom: solid 10px;
	border-bottom-color: #fc3116;
	border-bottom-color: rgba(252, 49, 22, 0.8);
	top: -10px;
}

.ms-skin-contrast .ms-tooltip-right .ms-tooltip-arrow,
.ms-skin-contrast .ms-tooltip-left .ms-tooltip-arrow{
	border-top: solid 10px transparent;
	border-bottom: solid 10px transparent;
	position: absolute;
	top: 50%;
	margin-top: -10px;
}

.ms-skin-contrast .ms-tooltip-right .ms-tooltip-arrow{
	border-right: solid 10px;
	border-right-color: #fc3116;
	border-right-color: rgba(252, 49, 22, 0.8);
	left: -10px;
}

.ms-skin-contrast .ms-tooltip-left .ms-tooltip-arrow {
	border-left: solid 10px;
	border-left-color: #fc3116;
	border-left-color: rgba(252, 49, 22, 0.8);
	right: -10px;
}

.ms-skin-contrast .ms-tooltip-point {cursor: pointer;}
.ms-skin-contrast .ms-tooltip-point .ms-point-center {
	width: 12px;
	height: 12px;
	border-radius: 15px;
	border: solid 2px #636363;
	background: black;
	margin: -8px 0 0 -8px;
	position: absolute;
	z-index: 105;
}

.ms-skin-contrast .ms-tooltip-point .ms-point-border {
	width: 22px;
	height: 22px;
	background: white;
	background: rgba(255, 255, 255, 0.99);
	margin: -11px 0 0 -11px;
	position: absolute;
	border-radius: 15px;

	animation: ms-point-anim 1.5s infinite ;
	-moz-animation: ms-point-anim 1.5s infinite;
	-webkit-animation: ms-point-anim 1.5s infinite;
	-o-animation: ms-point-anim 1.5s infinite;
}

.ms-skin-contrast  .ms-tooltip {
	max-width:200px;
}

.ms-skin-contrast .ms-tooltip-cont {
	padding: 10px;
	background: #fc3116;
	background: rgba(252, 49, 22, 0.8);
	text-shadow: 0 1px 0px rgba(0, 0, 0, 0.4);
	color: white;
	box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04);
}

/* retina */
@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (   min--moz-device-pixel-ratio: 2),
only screen and (        min-device-pixel-ratio: 2),
only screen and (                -webkit-min-device-pixel-ratio: 2),
only screen and (                min-resolution: 192dpi),
only screen and (                min-resolution: 2dppx) {

	.ms-skin-contrast .ms-slide .ms-slide-vpbtn,
	.ms-skin-contrast .ms-video-btn,
	.ms-skin-contrast .ms-slide .ms-slide-vcbtn,
	.ms-skin-contrast .ms-nav-next,
	.ms-skin-contrast .ms-nav-prev,
	.ms-skin-contrast .ms-bullet{
		background-image:url(skins/contrast-skin-retina.png);
		background-size: 152px 225px;
	}

}



.ms-caro3d-template .ms-container {
	padding: 10px 0 50px 0;
}

/* reflect */
.ms-caro3d-template .ms-slide{
	-webkit-box-reflect: below 1px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(90%, transparent), to(rgba(255,255,255,0.5)));
}

.ms-caro3d-template .ms-slide-bgcont{
	border-radius: 8px;
}


.ms-dis-slider-cont {
    position: relative;
    padding: 3.2% 8.5% 24%;
    max-width: 508px;
}
.ms-display-cont .ms-view{
	background-color: #17171a;
}
.ms-display-cont{
   max-width: 614px;
	position: relative;
	margin: 0 auto;
}

.ms-display-bg {
    max-width: 100%;
    position: absolute;
}

.ms-display-template .ms-nav-prev,
.ms-display-template .ms-nav-next {
    background: url(templates/device-skin.png) no-repeat -11px -9px;
    width: 35px;
    height: 40px;
    left: -80px;
    margin-top: -17px;
    position: absolute;
    top:50%;
    cursor: pointer;
}
.ms-display-template .ms-nav-next {
	background-position: -59px -9px;
	right: -80px;
	left:auto;
}

.ms-display-template .ms-bullets.ms-dir-h {
	position: absolute;
	bottom: -50%;
	right: 50%;
	width: 100px;
}

.ms-display-template .ms-bullets.ms-dir-h .ms-bullets-count {
	position: relative;
	right: -50%;
}

.ms-display-template .ms-bullet {
	width: 10px;
	height: 10px;
	background: url(templates/device-skin.png) no-repeat -112px -25px;
	margin: 4px;
}

.ms-display-template .ms-bullet-selected {
    background-position: -143px -25px;
}


.ms-gallery-template .ms-gallery-botcont {
	height: 55px;
	background: black;
	color: white;
	font-weight: 300;
	font-family: "Lato", sans-serif;
	font-size: 18px;
	position: relative;
}
.ms-gallery-template .ms-gal-playbtn {
	width: 55px;
	height: 100%;
	float: left;
	cursor: pointer;
	background: url(templates/gallery-btns.png) no-repeat 6px 6px;
}
.ms-gallery-template .ms-gal-playbtn.btn-pause {
	background: url(templates/gallery-btns.png) no-repeat -55px 7px;
}

.ms-gallery-template .ms-gal-thumbtoggle {
	position: absolute;
	right: 0;
	z-index: 110;
	width: 55px;
	height: 100%;
	cursor: pointer;
	background: url(templates/gallery-btns.png) no-repeat -53px -41px;
}
.ms-gallery-template .ms-gal-thumbtoggle.btn-hide {
	background: url(templates/gallery-btns.png) no-repeat 4px -41px;
}

.ms-gallery-template .ms-slide-num {
	float: left;
	padding: 17px 9px;
	color: #727272;
}
.ms-gallery-template .ms-slide-info {
	float: left;
	padding: 18px 4px;
	position: relative;
	width: auto;
}

.ms-gallery-template .ms-bullets.ms-dir-h {
	position: absolute;
	bottom: 18px;
	right: 105px;
	width: 100px;
}

.ms-gallery-template .ms-bullet {
	width: 8px;
	height: 8px;
	background: #1e1e1e;
	margin: 4px;
	border-radius: 15px;
}

.ms-gallery-template .ms-bullet-selected {
	background-color: white;
}

.ms-gallery-template .ms-timerbar {
	width: 100%;
	top: -4px;
	height: 4px;
	position: absolute;
	background: rgba(0, 0, 0, 0.32);
}

.ms-gallery-template .ms-time-bar {
	height: 4px;
	background: rgba(255, 255, 255, 0.7);
}

.ms-gallery-template .ms-thumb-list.ms-dir-h {
	width: 100%;
	background: black;
	background: rgba(0, 0, 0, 0.95);
	padding-top: 1px;
}

.ms-gallery-template .ms-thumb-frame {
	cursor: pointer;
	float: left;
	width: 175px;
	overflow: hidden;
	opacity: 0.5;
	-webkit-transition: opacity 400ms;
	transition: opacity 400ms;
}

.ms-gallery-template .ms-thumb-frame-selected {
	opacity: 1;
}

.ms-gallery-template .ms-gal-thumbcont {
	overflow: hidden;
	width: 100%;
	height: 115px;
	position: absolute;
	top: -115px;
	left: 0;
	-webkit-transition: all 300ms ease-out;
	transition: all 300ms ease-out;
}

.ms-gallery-template .ms-gal-thumbcont.hide-thumbs {
	height: 0;
	top: 0;
}

@media (max-width: 570px) {
	.ms-gallery-template .ms-slide-info {
		display: none;
	}
}


.ms-laptop-template .ms-laptop-cont .ms-view{
	background-color: #17171a;
}
.ms-laptop-template .ms-laptop-cont{
   max-width: 645px;
	position: relative;
	margin: 0 auto;
}
.ms-laptop-template .ms-lt-slider-cont {
    position: relative;
    padding: 5% 11.9% 20%;
    max-width: 492px;
}
.ms-laptop-template .ms-laptop-bg {
    max-width: 100%;
    position: absolute;
}

.ms-laptop-template .ms-nav-prev,
.ms-laptop-template .ms-nav-next {
    background: url(templates/device-skin.png) no-repeat -11px -9px;
    width: 35px;
    height: 40px;
    left: -80px;
    margin-top: -17px;
    position: absolute;
    top:50%;
    cursor: pointer;
}
.ms-laptop-template .ms-nav-next {
	background-position: -59px -9px;
	right: -80px;
	left:auto;
}

.ms-laptop-template .ms-bullets.ms-dir-h {
	position: absolute;
	bottom: -40%;
	right: 50%;
	width: 100px;
}

.ms-laptop-template .ms-bullets.ms-dir-h .ms-bullets-count {
	position: relative;
	right: -50%;
}

.ms-laptop-template .ms-bullet {
	width: 10px;
	height: 10px;
	background: url(templates/device-skin.png) no-repeat -112px -25px;
	margin: 4px;
}

.ms-laptop-template .ms-bullet-selected {
    background-position: -143px -25px;
}


.ms-tablet-template .ms-tablet-cont .ms-view{
	background-color: #17171a;
}
.ms-tablet-template .ms-tablet-cont{
   	max-width: 500px;
	position: relative;
	margin: 0 auto;
}

.ms-tablet-template.ms-tablet-land .ms-tablet-cont {
    max-width: 842px;
}

.ms-tablet-template.ms-tablet-land .ms-lt-slider-cont {
    padding: 4.1% 12.1% 10%;
    max-width: 632px;
}

.ms-tablet-template .ms-lt-slider-cont {
    position: relative;
    padding: 11.1% 11% 22%;
    max-width: 400px;
}
.ms-tablet-template .ms-tablet-bg {
    max-width: 100%;
    position: absolute;
}

.ms-tablet-template .ms-nav-prev,
.ms-tablet-template .ms-nav-next {
    background: url(templates/device-skin.png) no-repeat -11px -9px;
    width: 35px;
    height: 40px;
    left: -120px;
    margin-top: -17px;
    position: absolute;
    top:50%;
    cursor: pointer;
}
.ms-tablet-template .ms-nav-next {
	background-position: -59px -9px;
	right: -120px;
	left:auto;
}

.ms-tablet-template .ms-bullets.ms-dir-h {
	position: absolute;
	bottom: -18%;
	right: 50%;
	width: 100px;
}

.ms-tablet-template .ms-bullets.ms-dir-h .ms-bullets-count {
	position: relative;
	right: -50%;
}

.ms-tablet-template .ms-bullet {
	width: 10px;
	height: 10px;
	background: url(templates/device-skin.png) no-repeat -112px -25px;
	margin: 4px;
}

.ms-tablet-template .ms-bullet-selected {
    background-position: -143px -25px;
}


.ms-phone-template .ms-phone-cont .ms-view{
	background-color: #17171a;
}
.ms-phone-template .ms-phone-cont{
    max-width: 386px;
	position: relative;
	margin: 0 auto;
}

.ms-phone-template.ms-phone-land .ms-phone-cont {
    max-width: 666px;
}

.ms-phone-template.ms-phone-land .ms-lt-slider-cont {
	position: relative;
	padding: 4.6% 16.1% 10% 15.5%;
    max-width: 455px;
}

.ms-phone-template .ms-lt-slider-cont {
    position: relative;
    padding: 26.2% 16.5% 33% 16.8%;
    max-width: 258px;
}
.ms-phone-template .ms-phone-bg {
    max-width: 100%;
    position: absolute;
}

.ms-phone-template .ms-nav-prev,
.ms-phone-template .ms-nav-next {
    background: url(templates/device-skin.png) no-repeat -11px -9px;
    width: 35px;
    height: 40px;
    left: -120px;
    margin-top: -17px;
    position: absolute;
    top:50%;
    cursor: pointer;
}
.ms-phone-template .ms-nav-next {
	background-position: -59px -9px;
	right: -120px;
	left:auto;
}

.ms-phone-template .ms-bullets.ms-dir-h {
	position: absolute;
	bottom: -30%;
	right: 50%;
	width: 100px;
}

.ms-phone-template .ms-bullets.ms-dir-h .ms-bullets-count {
	position: relative;
	right: -50%;
}

.ms-phone-template .ms-bullet {
	width: 10px;
	height: 10px;
	background: url(templates/device-skin.png) no-repeat -112px -25px;
	margin: 4px;
}

.ms-phone-template .ms-bullet-selected {
    background-position: -143px -25px;
}

.ms-phone-template.ms-phone-land .ms-bullets.ms-dir-h {
    bottom: -21%;
}

.ms-phone-template.ms-phone-land .ms-nav-next {
    right: -150px;
}

.ms-phone-template.ms-phone-land .ms-nav-prev {
    left: -150px;
}


.ms-partialview-template .ms-slide-info {
	text-align: center;
	margin-top: 20px;
	width: 100%;
}

.ms-partialview-template .ms-slide-info h3 {
	margin: 5px;
	font-weight: 300;
	font-size: 23pt;
	color: #222;
}

.ms-partialview-template .ms-slide-info h4 {
	margin: 5px;
	font-weight: 300;
	font-size: 14pt;
	color: #7A7A7A;
}

.ms-partialview-template .ms-slide-info p {
	font-size: 10pt;
	margin: 6px;
}


/* .ms-showcase2-template {max-width: 540px; margin: 0 auto;}
.ms-showcase2-vertical {max-width: 677px;} */
.ms-showcase2-template .ms-view{background: transparent;}


.ms-staff-carousel{
	margin: 25px auto;
	position: relative;
}

.ms-staff-carousel .ms-view{
	overflow:visible;
	background-color: transparent;
}

.ms-staff-carousel .ms-nav-prev,
.ms-staff-carousel .ms-nav-next {
    background: url(templates/staff-arrows.png) white no-repeat -7px -57px;
    width: 35px;
    height: 40px;
    left: -35px;
    margin-top: -17px;
    box-shadow: 0px 1px 0px 0px rgb(190, 190, 190);
    position: absolute;
    top:50%;
    cursor: pointer;
}

.ms-staff-carousel .ms-nav-next {
	background-position: -6px -7px;
	right:-35px;
	left:auto;
}

.ms-staff-carousel .ms-staff-info{
	text-align: center;
	margin:0 auto;
	max-width: 600px;
	margin-top:30px;
	min-height:300px;
	color:#222222;
}
	.ms-staff-carousel .ms-staff-info h3{
		font-weight: 300;
		font-size: 22pt;
		margin:0px;
	}

	.ms-staff-carousel .ms-staff-info h4{
		font-weight: 300;
		color:#787878;
		font-size: 15pt;
		margin:3px;
	}

.ms-staff-carousel.ms-round .ms-slide-bgcont {
	border-radius: 5000px;
	border: solid 8px rgb(230, 230, 230);
	margin: 0 -8px;
}

.ms-staff-carousel.ms-round .ms-view{
	padding-bottom: 8%;
}

.ms-staff-carousel.ms-round .ms-nav-prev,
.ms-staff-carousel.ms-round .ms-nav-next {
    background-color:transparent;
    box-shadow : none;
    left:-45px;
 }

.ms-staff-carousel.ms-round .ms-nav-next {
    left:auto;
    right:-45px
}



.ms-tabs-template .ms-thumb-frame h3 {
	font-weight: 400;
	font-size: 13pt;
	margin:0;
}

.ms-tabs-template .ms-thumb-frame p {
	font-size:10pt;
	margin: 4px 0;
}

.ms-tabs-template .ms-thumb-frame-selected h3{
	color:#4b8aac;
}


.ms-vertical-template .ms-nav-prev,
.ms-vertical-template .ms-nav-next {
    top: 10px;
    left: 50%;
    background: url(templates/vertical-arrows.png) no-repeat;
    background-position: -11px -6px;
    width: 40px;
    height: 30px;
    margin-left: -20px;
    margin-top: 0;
}

.ms-vertical-template .ms-nav-next{
	top:auto;
	bottom:10px;
	background-position: -11px -53px;
}

.ms-vertical-template .ms-thumblist-fwd,
.ms-vertical-template .ms-thumblist-bwd {
    width: 100%;
	position: absolute;
	top: 0;
	height: 15px;
	cursor: pointer;
	background: url(templates/vertical-arrows.png) no-repeat;
	
    background-position: 50% -106px;
}
.ms-vertical-template .ms-thumblist-bwd {
    top: auto;
    bottom: 0;
    background-position: 50% -145px;
}