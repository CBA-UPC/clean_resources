.mejs-container {
	position: relative;
	min-width:150px;
	background: none;
	font-family: sans-serif;
	text-align: left;
	vertical-align: top;
}

.me-plugin {
	position: absolute;
}

.mejs-embed, .mejs-embed body {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	background: #000;
	overflow: hidden;
}

.mejs-container-fullscreen {
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
	z-index: 1000;
}
.mejs-container-fullscreen .mejs-mediaelement,
.mejs-container-fullscreen video {
	width: 100%;
	height: 100%;
}

/* Start: LAYERS */
.mejs-background {
	position: absolute;
	top: 0;
	left: 0;
}
.mejs-mediaelement {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.mejs-poster {
	position: absolute;
	top: 0;
	left: 0;
	overflow:hidden;
}
.mejs-poster img {
	border: 0;
	padding: 0;
	border: 0;
	display: block;
	width: auto;
	height: 100%;
}
.mejs-overlay {
	position: absolute;
	top: 0;
	left: 0;
}
.mejs-overlay-play {
	cursor: pointer;
}
.mejs-overlay-button {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 100px;
	height: 100px;
	margin: -50px 0 0 -50px;
	background: url(bigplay.png) no-repeat;
}
.mejs-overlay:hover .mejs-overlay-button{
	background-position: 0 -100px ;
}
.mejs-overlay-loading {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 80px;
	height: 80px;
	margin: -40px 0 0 -40px;
}
.mejs-overlay-loading span {
	display:block;
	width: 80px;
	height: 80px;
	background: #3A3C3D url(loading.gif) 50% 50% no-repeat;
	-moz-border-radius: 40px;
	-webkit-border-radius: 40px;
	border-radius: 40px;	
}

/* End: LAYERS */

/* Start: CONTROL BAR */
.mejs-container .mejs-controls {
	position: absolute;
	margin: 0;
	padding: 0;
	bottom: 0;
	left: 0;
	height: 30px;
	width: 100%;
	background: #3a3c3d url(background.png);
	background: -webkit-linear-gradient(#4a4c4d, #2b2d2d); 
	background: -moz-linear-gradient(#4a4c4d, #2b2d2d);
	background: -o-linear-gradient(#4a4c4d, #2b2d2d); 
	background: -ms-linear-gradient(#4a4c4d, #2b2d2d); 	
	background: linear-gradient(#4a4c4d, #2b2d2d); 	
	list-style: none;
}

.mejs-audio .mejs-controls{
	border-radius:0px;
}

.mejs-container .mejs-controls  div {
	list-style-type: none;
	display: block;
	float: left;
	margin: 0;
	padding: 0;
	width: 32px;
	height: 30px;
	font-size: 11px;
	line-height: 11px;
	font-family: sans-serif;
	background: url(sep.png) left no-repeat;
	border: 0;
}

.mejs-controls .mejs-button button {
	cursor: pointer;
	display: block;
	font-size: 0;
	line-height: 0;
	text-decoration: none;
	margin: 7px 7px 0 9px;
	padding: 0;
	position: absolute;
	height: 16px;
	width: 16px;
	border: 0;
	background: transparent url(controls.png) no-repeat;
}

/* :focus for accessibility */
.mejs-controls .mejs-button button:focus {
	outline: solid 1px yellow;
}

/* End: CONTROL BAR */

/* Start: Time (current / duration) */
.mejs-container .mejs-controls .mejs-time {
	color: #fff;
	display: block;
	height: 17px;
	width: auto;
	padding: 8px 8px 5px 10px;
	overflow: hidden;
	text-align: center;
	box-sizing: content-box;
	-moz-box-sizing: content-box;
	-webkit-box-sizing: content-box;
}
.mejs-container .mejs-controls .mejs-time span {
	font-size: 11px;
	color: #fff;
	line-height: 12px;
	display: block;
	float: left;
	width: auto;
}
/* End: Time (current / duration) */


/* Start: Play/pause */
.mejs-container .mejs-controls .mejs-playpause-button {
	cursor: pointer;
	background: none;
	width: 30px;
}
.mejs-controls .mejs-playpause-button button {
	margin:7px 8px;
}
.mejs-controls .mejs-play button {
	background-position:0 0;
}
.mejs-controls .mejs-play:hover button {
	background-position:0 -32px;
}
.mejs-controls .mejs-pause button {
	background-position:0 -16px;
}
.mejs-controls .mejs-pause:hover button {
	background-position:0 -48px;
}
/* End: Play/pause */


/* Stop */
.mejs-controls .mejs-stop button {
	background-position: -112px 0;
}
.mejs-controls .mejs-stop:hover button {
	background-position: -112px -32px;
}
/* End: Play/pause */

/* Start: Progress bar */
.mejs-controls div.mejs-time-rail {
	width: 200px;
}
.mejs-controls .mejs-time-rail span {
	display: block;
	position: absolute;
	width: 180px;
	height: 5px;
	cursor: pointer;
}
.mejs-controls .mejs-time-rail .mejs-time-total {
	padding: 1px;
	margin: 11px 8px 0 10px;
	background: #262929;
	border-bottom: #3d3f40 1px solid;
	box-shadow: inset 1px 1px rgba(0, 0, 0, .4);
}
.mejs-controls .mejs-time-rail .mejs-time-buffering {
	width:100%;
	background:#464849;
	background-image: -webkit-linear-gradient(-45deg, #464849 25%, #262929 25%, #262929 50%, #464849 50%, #464849 75%, #262929 75%, #262929);
	background-image: -moz-linear-gradient(-45deg, #464849 25%, #262929 25%, #262929 50%, #464849 50%, #464849 75%, #262929 75%, #262929);
	background-image: -o-linear-gradient(-45deg, #464849 25%, #262929 25%, #262929 50%, #464849 50%, #464849 75%, #262929 75%, #262929);
	background-image: -ms-linear-gradient(-45deg, #464849 25%, #262929 25%, #262929 50%, #464849 50%, #464849 75%, #262929 75%, #262929);
	background-image: linear-gradient(-45deg, #464849 25%, #262929 25%, #262929 50%, #464849 50%, #464849 75%, #262929 75%, #262929);
	-moz-background-size: 6px 6px;
	background-size: 6px 5px;
	-webkit-background-size: 6px 5px;
	-webkit-animation: buffering-stripes 2s linear infinite;
	-moz-animation: buffering-stripes 2s linear infinite;
	-ms-animation: buffering-stripes 2s linear infinite;
	-o-animation: buffering-stripes 2s linear infinite;
	animation: buffering-stripes 2s linear infinite;
	z-index: 1;
}

@-webkit-keyframes buffering-stripes { from {background-position: 0 0;} to {background-position: 30px 0;} }
@-moz-keyframes buffering-stripes { from {background-position: 0 0;} to {background-position: 30px 0;} }
@-ms-keyframes buffering-stripes { from {background-position: 0 0;} to {background-position: 30px 0;} }
@-o-keyframes buffering-stripes { from {background-position: 0 0;} to {background-position: 30px 0;} }
@keyframes buffering-stripes { from {background-position: 0 0;} to {background-position: 30px 0;} }

.mejs-controls .mejs-time-rail .mejs-time-loaded {
	background: #464849;
	width: 0;
}
.mejs-controls .mejs-time-rail .mejs-time-current {
	width: 0;
	background: #feea36;
	background-image: -webkit-linear-gradient(-45deg, #feea36 25%, #fdd500 25%, #fdd500 50%, #feea36 50%, #feea36 75%, #fdd500 75%, #fdd500);
	background-image: -moz-linear-gradient(-45deg, #feea36 25%, #fdd500 25%, #fdd500 50%, #feea36 50%, #feea36 75%, #fdd500 75%, #fdd500);
	background-image: -o-linear-gradient(-45deg, #feea36 25%, #fdd500 25%, #fdd500 50%, #feea36 50%, #feea36 75%, #fdd500 75%, #fdd500);
	background-image: -ms-linear-gradient(-45deg, #feea36 25%, #fdd500 25%, #fdd500 50%, #feea36 50%, #feea36 75%, #fdd500 75%, #fdd500);
	background-image: linear-gradient(-45deg, #feea36 25%, #fdd500 25%, #fdd500 50%, #feea36 50%, #feea36 75%, #fdd500 75%, #fdd500);
	-moz-background-size: 6px 6px;
	background-size: 6px 6px;
	-webkit-background-size: 6px 5px;
	z-index: 1;
}

.mejs-controls .mejs-time-rail .mejs-time-handle {
	display: none;
	position: absolute;
	margin: 0;
	width: 5px;
	background: transparent;
	cursor: pointer;
	top: 1px;
	z-index: 1;
	text-align: center;
}

.mejs-controls .mejs-time-rail .mejs-time-float {
	position: absolute;
	display: none;
	background: #C2C8CF;
	background: -webkit-linear-gradient(#E3E6E9, #C2C8CF);
	background: -moz-linear-gradient(#E3E6E9, #C2C8CF);
	background: -o-linear-gradient(#E3E6E9, #C2C8CF);
	background: -ms-linear-gradient(#E3E6E9, #C2C8CF);
	background: linear-gradient(#E3E6E9, #C2C8CF);
	width: 36px;
	height: 17px;
	-moz-border-radius: 4px;
	-webkit-border-radius: 4px;
	border-radius: 4px;	
	box-shadow:0 1px 1px rgba(0, 0, 0, .4);
	top: -26px;
	margin-left: -18px;
	text-align: center;
	color: #111;
}

.mejs-controls .mejs-time-rail .mejs-time-float-current {
	margin: 3px;
	width: 30px;
	display: block;
	text-align: center;
	left: 0;
}
.mejs-controls .mejs-time-rail .mejs-time-float-corner {
	position: absolute;
	display: block;
	width: 0;
	height: 0;
	line-height: 0;
	border: solid 4px #C2C8CF;
	border-color: #C2C8CF transparent transparent transparent;
	-webkit-border-radius: 0;
	-moz-border-radius: 0;
	border-radius: 0;
	top: 17px;
	left: 13px;

}




/*
.mejs-controls .mejs-time-rail:hover .mejs-time-handle {
	visibility:visible;
}
*/
/* End: Progress bar */

/* Start: Fullscreen */
.mejs-controls .mejs-fullscreen-button button {
	background-position:-32px 0;
}
.mejs-controls .mejs-unfullscreen button {
	background-position:-32px -16px;
}
/* End: Fullscreen */


/* Start: Mute/Volume */
.mejs-controls .mejs-volume-button {
}

.mejs-controls .mejs-mute button {
	background-position:-16px -16px;
}

.mejs-controls .mejs-mute button:hover {
	background-position:-16px -48px;
}

.mejs-controls .mejs-unmute button {
	background-position:-16px 0;
}

.mejs-controls .mejs-unmute button:hover {
	background-position:-16px -32px;
}

.mejs-controls .mejs-volume-button {
	position: relative;
}

.mejs-controls .mejs-volume-button .mejs-volume-slider {
	display: none;
	height: 68px;
	width: 31px;
	background: #3A3C3D;
	-webkit-border-radius: 0;
	-moz-border-radius: 0;
	border-radius: 0;
	top: -68px;
	left: 1px;
	z-index: 1;
	position: absolute;
	margin: 0;
}
.mejs-controls .mejs-volume-button:hover {
	-webkit-border-radius: 0 0 4px 4px;
	-moz-border-radius: 0 0 4px 4px;
	border-radius: 0 0 4px 4px;
}
/*
.mejs-controls .mejs-volume-button:hover .mejs-volume-slider {
	display: block;
}
*/

.mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-total {
	position: absolute;
	left: 13px;
	top: 8px;
	width: 5px;
	height: 50px;
	background: #262929;
	border-bottom: #3d3f40 1px solid;
	box-shadow: inset 1px 1px rgba(0, 0, 0, .4);
	margin: 0;
	padding: 1px;
}

.mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-current {
	position: absolute;
	left: 13px;
	top: 8px;
	width: 5px;
	height: 50px;
	background: #feea36;
	background-image: -webkit-linear-gradient(-45deg, #feea36 25%, #fdd500 25%, #fdd500 50%, #feea36 50%, #feea36 75%, #fdd500 75%, #fdd500);
	background-image: -moz-linear-gradient(-45deg, #feea36 25%, #fdd500 25%, #fdd500 50%, #feea36 50%, #feea36 75%, #fdd500 75%, #fdd500);
	background-image: -o-linear-gradient(-45deg, #feea36 25%, #fdd500 25%, #fdd500 50%, #feea36 50%, #feea36 75%, #fdd500 75%, #fdd500);
	background-image: -ms-linear-gradient(-45deg, #feea36 25%, #fdd500 25%, #fdd500 50%, #feea36 50%, #feea36 75%, #fdd500 75%, #fdd500);
	background-image: linear-gradient(-45deg, #feea36 25%, #fdd500 25%, #fdd500 50%, #feea36 50%, #feea36 75%, #fdd500 75%, #fdd500);
	-moz-background-size: 6px 6px;
	background-size: 6px 6px;
	-webkit-background-size: 6px 5px;
	background-position: bottom;
	margin: 1px;
}

.mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-handle {
	position: absolute;
	left: 14px;
	top: 16px;
	width: 5px;
	height: 5px;
	background: transparent;
	margin: 0;
}


/* horizontal version */

.mejs-controls div.mejs-horizontal-volume-slider {
	height: 26px;
	width: 62px;
	position: relative;
	background:none;
}

.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-total {
	position: absolute;
	left: 0;
	top: 11px;
	width: 50px;
	height: 5px;
	margin: 0;
	padding: 1px;
	font-size: 1px;
	background: #262929;
	border-bottom: #3d3f40 1px solid;
	box-shadow: inset 1px 1px rgba(0, 0, 0, .4);

}

.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current {
	position: absolute;
	left: 0;
	top: 11px;
	width: 50px;
	height: 5px;
	margin: 1px;
	padding: 0;
	font-size: 1px;

	background: #feea36;
	background-image: -webkit-linear-gradient(-45deg, #feea36 25%, #fdd500 25%, #fdd500 50%, #feea36 50%, #feea36 75%, #fdd500 75%, #fdd500);
	background-image: -moz-linear-gradient(-45deg, #feea36 25%, #fdd500 25%, #fdd500 50%, #feea36 50%, #feea36 75%, #fdd500 75%, #fdd500);
	background-image: -o-linear-gradient(-45deg, #feea36 25%, #fdd500 25%, #fdd500 50%, #feea36 50%, #feea36 75%, #fdd500 75%, #fdd500);
	background-image: -ms-linear-gradient(-45deg, #feea36 25%, #fdd500 25%, #fdd500 50%, #feea36 50%, #feea36 75%, #fdd500 75%, #fdd500);
	background-image: linear-gradient(-45deg, #feea36 25%, #fdd500 25%, #fdd500 50%, #feea36 50%, #feea36 75%, #fdd500 75%, #fdd500);
	-moz-background-size: 6px 6px;
	background-size: 6px 6px;
	-webkit-background-size: 6px 5px;

}


.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-handle {
	display: none;
}

/* End: Mute/Volume */




/* Start: TRACK (Captions and Chapters) */
.mejs-controls .mejs-captions-button {
	position: relative;
}

.mejs-controls .mejs-captions-button button {
	background-position:-48px 0;
}
.mejs-controls .mejs-captions-button:hover button {
	background-position:-48px -32px;
}
.mejs-controls .mejs-captions-button .mejs-captions-selector {
	visibility: hidden;
	position: absolute;
	bottom: 30px;
	right: -10px;
	width: 130px;
	height: 100px;
	background: #3A3C3D; 	
	border: solid 1px transparent;
	padding: 10px;
	overflow: hidden;
	-webkit-border-radius: 0;
	-moz-border-radius: 0;
	border-radius: 0;
}
/*
.mejs-controls .mejs-captions-button:hover  .mejs-captions-selector {
	visibility: visible;
}
*/

.mejs-controls .mejs-captions-button .mejs-captions-selector ul {
	margin: 0;
	padding: 0;
	display: block;
	list-style-type: none !important;
	overflow: hidden;
}
.mejs-controls .mejs-captions-button .mejs-captions-selector ul li{
	margin: 0 0 6px 0;
	padding: 0;
	list-style-type: none !important;
	display:block;
	color: #fff;
	overflow: hidden;
}
.mejs-controls .mejs-captions-button .mejs-captions-selector ul li input{
	clear: both;
	float: left;
	margin: 3px 3px 0 5px;
}
.mejs-controls .mejs-captions-button .mejs-captions-selector ul li label{
	width: 100px;
	float: left;
	padding: 4px 0 0 0;
	line-height: 15px;
	font-family: sans-serif;
	font-size: 10px;
}

.mejs-controls .mejs-captions-button .mejs-captions-translations {
	font-size: 10px;
	margin: 0 0 5px 0;
}


.mejs-chapters {
	position: absolute;
	top: 0;
	left: 0;
	-xborder-right: solid 1px #fff;
	width: 10000px;
	z-index: 1;
}
.mejs-chapters .mejs-chapter {
	position: absolute;
	float: left;
	background: #3A3C3D;
	background: rgba(58, 60, 61, 0.7);
	background: -webkit-linear-gradient(top, rgba(74, 76, 77, 0.7), rgba(0, 0, 0, 0.7));
	background: -moz-linear-gradient(top, rgba(74, 76, 77, 0.7), rgba(0, 0, 0, 0.7));
	background: -o-linear-gradient(top, rgba(74, 76, 77, 0.7), rgba(0, 0, 0, 0.7));
	background: -ms-linear-gradient(top, rgba(74, 76, 77, 0.7), rgba(0, 0, 0, 0.7));
	background: linear-gradient(top, rgba(74, 76, 77, 0.7), rgba(0, 0, 0, 0.7));	
	overflow: hidden;
	border: 0;
}
.mejs-chapters .mejs-chapter .mejs-chapter-block {
	font-size: 11px;
	color: #fff;
	padding: 5px;
	display: block;
	border-right: solid 1px #313335;
	border-right: solid 1px rgba(49, 51, 53, .7);
	border-bottom: solid 1px #313335;
	border-bottom: solid 1px rgba(49, 51, 53, .7);
	cursor: pointer;
}
.mejs-chapters .mejs-chapter .mejs-chapter-block-last {
	border-right: none;
}

.mejs-chapters .mejs-chapter .mejs-chapter-block:hover {
	background: #333;
	background: rgba(102,102,102, 0.7);
	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(102,102,102,0.7)), to(rgba(50,50,50,0.6)));
	background: -webkit-linear-gradient(top, rgba(102,102,102,0.7), rgba(50,50,50,0.6));
	background: -moz-linear-gradient(top, rgba(102,102,102,0.7), rgba(50,50,50,0.6));
	background: -o-linear-gradient(top, rgba(102,102,102,0.7), rgba(50,50,50,0.6));
	background: -ms-linear-gradient(top, rgba(102,102,102,0.7), rgba(50,50,50,0.6));
	background: linear-gradient(rgba(102,102,102,0.7), rgba(50,50,50,0.6));	
}
.mejs-chapters .mejs-chapter .mejs-chapter-block .ch-title{
	font-size: 12px;
	font-weight: bold;
	display: block;
	white-space:nowrap;
	text-overflow: ellipsis;
	margin: 0 0 3px 0;
	line-height: 12px;
}
.mejs-chapters .mejs-chapter .mejs-chapter-block .ch-timespan{
	font-size: 12px;
	line-height: 12px;
	margin: 3px 0 4px 0;
	display: block;
	white-space:nowrap;
	text-overflow: ellipsis;
}


.mejs-captions-layer {
	position: absolute;
	bottom: 0;
	left: 0;
	text-align:center;
	/*font-weight: bold;*/
	line-height: 22px;
	font-size: 12px;
	color: #fff;
}
.mejs-captions-layer  a {
	color: #fff;
	text-decoration: underline;
}
.mejs-captions-layer[lang=ar] {
	font-size: 20px;
	font-weight: normal;
}

.mejs-captions-position {
	position: absolute;
	width: 100%;
	bottom: 15px;
	left: 0;
}

.mejs-captions-position-hover {
	bottom: 45px;
}

.mejs-captions-text {
	padding: 5px 7px;
	background: #3a3c3d;
	background: rgba(58, 60, 61, 0.8);
	-moz-border-radius: 4px;
	-webkit-border-radius: 4px;
	border-radius: 4px;	

}
/* End: TRACK (Captions and Chapters) */



.mejs-clear {
	clear: both;
}

/* Start: ERROR */
.me-cannotplay {
}
.me-cannotplay a {
	color: #fff;
	font-weight: bold;
}
.me-cannotplay span {
	padding: 15px;
	display: block;
}
/* End: ERROR */


/* Start: Loop */
.mejs-controls .mejs-loop-off button{
	background-position: -64px -16px;
}
.mejs-controls .mejs-loop-off:hover button{
	background-position: -64px -48px;
}
.mejs-controls .mejs-loop-on button {
	background-position: -64px 0;
}
.mejs-controls .mejs-loop-on::hover button {
	background-position: -64px -32px;
}
/* End: Loop */

/* Start: backlight */
.mejs-controls .mejs-backlight-off button{
	background-position: -80px -16px;
}
.mejs-controls .mejs-backlight-off:hover button{
	background-position: -80px -48px;
}
.mejs-controls .mejs-backlight-on button {
	background-position: -80px 0;
}
.mejs-controls .mejs-backlight-on:hover button {
	background-position: -80px -32px;
}
/* End: backlight */


/* Start: picture controls */
.mejs-controls .mejs-picturecontrols-button{
	background-position: -96px 0;
}
.mejs-controls .mejs-picturecontrols-button:hover{
	background-position: -96px -32px;
}
/* End: picture controls */


/* context menu */
.mejs-contextmenu {
	position: absolute;
	width: 150px;
	padding: 10px;
	-moz-border-radius: 4px;
	-webkit-border-radius: 4px;
	border-radius: 4px;	
	top: 0;
	left: 0;
	background: #fff;
	border: solid 1px #999;
	z-index: 1001; /* make sure it shows on fullscreen */
}
.mejs-contextmenu .mejs-contextmenu-separator {
	height: 1px;
	font-size: 0;
	margin: 5px 6px;
	background: #333;	
}

.mejs-contextmenu .mejs-contextmenu-item {
	font-family: sans-serif;
	font-size: 12px;
	padding: 4px 6px;
	cursor: pointer;
	color: #333;	
}
.mejs-contextmenu .mejs-contextmenu-item:hover {
	background: #2C7C91;
	color: #fff;
}


/* Start: SourceChooser */
.mejs-controls .mejs-sourcechooser-button {
	position: relative;
}

.mejs-controls .mejs-sourcechooser-button button {
	background-position: -128px 0;
}
.mejs-controls .mejs-sourcechooser-button button {
	background-position: -128px -32px;
}
.mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector {
	visibility: hidden;
	position: absolute;
	bottom: 26px;
	right: -10px;
	width: 130px;
	height: 100px;
	background: #3A3C3D;
	border: solid 1px transparent;
	padding: 10px;
	overflow: hidden;
	-webkit-border-radius: 0;
	-moz-border-radius: 0;
	border-radius: 0;
}

.mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul {
	margin: 0;
	padding: 0;
	display: block;
	list-style-type: none !important;
	overflow: hidden;
}
.mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul li{
	margin: 0 0 6px 0;
	padding: 0;
	list-style-type: none !important;
	display:block;
	color: #fff;
	overflow: hidden;
}
.mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul li input{
	clear: both;
	float: left;
	margin: 3px 3px 0 5px;
}
.mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul li label{
	width: 100px;
	float: left;
	padding: 4px 0 0 0;
	line-height: 15px;
	font-family: sans-serif;
	font-size: 10px;
}
/* End: SourceChooser */
ption p:last-child{margin-bottom:0}.c-lightbox[data-type=iframe] .c-lightbox__toolbar .fancybox-button--fsenter{display:none}.c-lightbox[data-type=inline][data-group] .c-lightbox__close{display:none}.c-lightbox[data-type=inline][data-group] .c-lightbox__toolbar{opacity:1;visibility:visible}.c-lightbox[data-type=inline][data-group] .c-lightbox__toolbar .fancybox-button:not(.fancybox-button--close){display:none}.c-lightbox__toolbar{display:flex;padding:3px 3px}.c-lightbox__toolbar .c-lightbox__button{font-size:20px;box-sizing:content-box;margin:0 0;padding:.5em;width:1em;height:1em}.c-lightbox__toolbar .c-lightbox__button:first-child{margin-left:0}.c-lightbox__toolbar .c-lightbox__button:last-child{margin-right:0}.c-lightbox .c-lightbox__button{background:0 0;transition:opacity .35s}.c-lightbox .c-lightbox__button div{padding:.4em;background:0 0}.c-lightbox .c-lightbox__button svg{fill:rgba(255,255,255,.75)}.c-lightbox .c-lightbox__button--arrow_left,.c-lightbox .c-lightbox__button--arrow_right,.c-lightbox .c-lightbox__button.fancybox-close-small{outline:0;background:0 0!important}.c-lightbox .c-lightbox__button--arrow_left,.c-lightbox .c-lightbox__button--arrow_right{width:auto;height:auto;top:50%;transform:translateY(-50%)}.c-lightbox .c-lightbox__button--arrow_left div,.c-lightbox .c-lightbox__button--arrow_right div{box-sizing:content-box;font-size:22px;width:1em;height:1em;border-radius:0;background-color:transparent}.c-lightbox .c-lightbox__button--arrow_left svg,.c-lightbox .c-lightbox__button--arrow_right svg{fill:rgba(255,255,255,.75)}.c-lightbox .c-lightbox__button--arrow_left{padding-left:6px}.c-lightbox .c-lightbox__button--arrow_right{padding-right:6px}.c-lightbox .c-lightbox__button.c-lightbox__close svg{fill:currentColor}.c-lightbox .c-lightbox__button svg path{fill:inherit}.c-lightbox .c-lightbox__button:hover{opacity:.75}.c-lightbox[data-type=video] .fancybox-button--fsenter{display:none}.fancybox-button--fsenter span:nth-child(2),.fancybox-button--play span:nth-child(2){display:none}.fancybox-button--fsexit span:nth-child(1),.fancybox-button--pause span:nth-child(1){display:none}.c-lightbox__button--slideshow{display:inline-block}.c-lightbox__button--thumbs{display:inline-block}@media (hover:none) and (pointer:coarse){.c-lightbox__nav{display:block}}.c-lightbox__nav-dots{position:absolute;z-index:999999;bottom:10px;display:flex;flex-wrap:wrap;justify-content:center;margin:0;padding:0;width:100%;list-style:none;line-height:1}.fancybox-show-thumbs .c-lightbox__nav-dots{display:none}.c-lightbox__nav-dots button{padding:6px;background:0 0;border:none;box-shadow:none;outline:0}.c-lightbox__nav-dots button span{box-sizing:content-box;display:block;width:9px;height:9px;border:0 solid transparent;border-radius:9px;background:rgba(255,255,255,.25);transition:.35s}.c-lightbox__nav-dots button.is-active span{border:0 solid transparent;background:rgba(255,255,255,.75)}@media (hover:hover){.c-lightbox__nav-dots button:hover span{border:0 solid transparent;background:rgba(255,255,255,.75)}}.c-lightbox.fancybox-can-pan .c-lightbox__caption,.c-lightbox.fancybox-can-pan .c-lightbox__nav-dots,.c-lightbox.fancybox-can-pan .c-lightbox__toolbar{opacity:0;transition:opacity .5s;pointer-events:none}