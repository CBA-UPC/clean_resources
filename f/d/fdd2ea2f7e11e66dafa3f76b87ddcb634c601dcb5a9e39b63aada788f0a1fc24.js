#D_VID #video-buttons {
	display: none;
	position: absolute;
	bottom: 0px;
	left: 0px;
	height: 40px;
	width: 500px;
	z-index: 250000;
	background-color: rgba(0, 0, 0, .5);
}

#D_VID #cwc-video-buttons {
	display: none;
	position: absolute;
	bottom: 0px;
	left: 0px;
	height: 40px;
	width: 500px;
	z-index: 250000;
	background-color: rgba(0, 0, 0, .5);
}

#D_VID:hover #cwc-video-buttons {
	display: block;
}

#D_VID:hover #video-buttons {
	display: block;
}

#nonclickable-overlay.docked {
	left: 0px;
	width: 400px;
}

#cwc-nonclickable-overlay.docked {
	left: 0px;
	width: 300px;
}

#nonclickable-overlay.nonlvp {
	left: 0px;
	width: 400px;
	top: 230px;
}

#nonclickable-overlay.large {
	left: 0px;
	width: 640px;
}

#nonclickable-overlay.medium {
	left: 0px;
	width: 480px;
}

#nonclickable-overlay.small {
	left: 0px;
	width: 320px;
}

#cwc-nonclickable-overlay.nonlvp {
	left: 0px;
	width: 300px;
	top: 230px;
}

#D_VID #video-buttons.docked {
	display: block;
	width: 400px;
}

#D_VID #cwc-video-buttons.docked {
	display: block;
	width: 300px;
}

#D_VID #video-buttons.nonlvp {
	width: 400px;
}

#D_VID #video-buttons.large {
	width: 640px;
}
#D_VID #video-buttons.medium {
	width: 480px;
}
#D_VID #video-buttons.small {
	width: 320px;
}
#close-button {
	background-color: transparent;
	display: none;
	height: 24px;
	width: 24px;
	background-image: url(https://atc-edge.studybreakmedia.com/images/close_white_48x48.png);
	background-size: 24px 24px;
	cursor: pointer;
	position: absolute;
	bottom: 8px;
	right: 30px;
}

#close-button.docked {
	display: block;
}

#play-pause-button {
	background-color: transparent;
	height: 24px;
	width: 24px;
	background-size: 24px 24px;
	cursor: pointer;
	position: absolute;
	bottom: 8px;
	left: 30px;
	background-repeat: no-repeat;
}

#mute-unmute-button {
	background-color: transparent;
	height: 20px;
	width: 20px;
	background-size: 20px 20px;
	cursor: pointer;
	position: absolute;
	bottom: 10px;
	left: 75px;
	background-repeat: no-repeat;
}

.mute {
	background-image: url(https://atc-edge.studybreakmedia.com/images/mute.png);
}

.unmute {
	background-image: url(https://atc-edge.studybreakmedia.com/images/unmute.png);
}

.play {
	background-image: url(https://atc-edge.studybreakmedia.com/images/play.svg);
}

.pause {
	background-image: url(https://atc-edge.studybreakmedia.com/images/pause.svg);
}

.rand_docked {
	height: 300px !important;
	width: 400px !important;
}

.cwc_docked {
	height: 225px !important;
	width: 300px !important;
}

.video-wider {
	width: 500px !important;
}

/* overlay allows 30px of non-clickable border between ad controls and video ads */
/* required per google rules to prevent unintentional clicks on ads */
#nonclickable-overlay {
	display: block;
	position: absolute;
	bottom: 0px;
	left: 2px;
	height: 70px;
	width: 500px;
	z-index: 200000;
}
