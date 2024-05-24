/* required styles */

.leaflet-pane,
.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-tile-container,
.leaflet-pane > svg,
.leaflet-pane > canvas,
.leaflet-zoom-box,
.leaflet-image-layer,
.leaflet-layer {
	position: absolute;
	left: 0;
	top: 0;
	}
.leaflet-container {
	overflow: hidden;
	}
.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow {
	-webkit-user-select: none;
	   -moz-user-select: none;
	        user-select: none;
	  -webkit-user-drag: none;
	}
/* Safari renders non-retina tile on retina better with this, but Chrome is worse */
.leaflet-safari .leaflet-tile {
	image-rendering: -webkit-optimize-contrast;
	}
/* hack that prevents hw layers "stretching" when loading new tiles */
.leaflet-safari .leaflet-tile-container {
	width: 1600px;
	height: 1600px;
	-webkit-transform-origin: 0 0;
	}
.leaflet-marker-icon,
.leaflet-marker-shadow {
	display: block;
	}
/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */
/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */
.leaflet-container .leaflet-overlay-pane svg,
.leaflet-container .leaflet-marker-pane img,
.leaflet-container .leaflet-shadow-pane img,
.leaflet-container .leaflet-tile-pane img,
.leaflet-container img.leaflet-image-layer,
.leaflet-container .leaflet-tile {
	max-width: none !important;
	max-height: none !important;
	}

.leaflet-container.leaflet-touch-zoom {
	-ms-touch-action: pan-x pan-y;
	touch-action: pan-x pan-y;
	}
.leaflet-container.leaflet-touch-drag {
	-ms-touch-action: pinch-zoom;
	/* Fallback for FF which doesn't support pinch-zoom */
	touch-action: none;
	touch-action: pinch-zoom;
}
.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {
	-ms-touch-action: none;
	touch-action: none;
}
.leaflet-container {
	-webkit-tap-highlight-color: transparent;
}
.leaflet-container a {
	-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);
}
.leaflet-tile {
	filter: inherit;
	visibility: hidden;
	}
.leaflet-tile-loaded {
	visibility: inherit;
	}
.leaflet-zoom-box {
	width: 0;
	height: 0;
	-moz-box-sizing: border-box;
	     box-sizing: border-box;
	z-index: 800;
	}
/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */
.leaflet-overlay-pane svg {
	-moz-user-select: none;
	}

.leaflet-pane         { z-index: 400; }

.leaflet-tile-pane    { z-index: 200; }
.leaflet-overlay-pane { z-index: 400; }
.leaflet-shadow-pane  { z-index: 500; }
.leaflet-marker-pane  { z-index: 600; }
.leaflet-tooltip-pane   { z-index: 650; }
.leaflet-popup-pane   { z-index: 700; }

.leaflet-map-pane canvas { z-index: 100; }
.leaflet-map-pane svg    { z-index: 200; }

.leaflet-vml-shape {
	width: 1px;
	height: 1px;
	}
.lvml {
	behavior: url(#default#VML);
	display: inline-block;
	position: absolute;
	}


/* control positioning */

.leaflet-control {
	position: relative;
	z-index: 800;
	pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */
	pointer-events: auto;
	}
.leaflet-top,
.leaflet-bottom {
	position: absolute;
	z-index: 1000;
	pointer-events: none;
	}
.leaflet-top {
	top: 0;
	}
.leaflet-right {
	right: 0;
	}
.leaflet-bottom {
	bottom: 0;
	}
.leaflet-left {
	left: 0;
	}
.leaflet-control {
	float: left;
	clear: both;
	}
.leaflet-right .leaflet-control {
	float: right;
	}
.leaflet-top .leaflet-control {
	margin-top: 10px;
	}
.leaflet-bottom .leaflet-control {
	margin-bottom: 10px;
	}
.leaflet-left .leaflet-control {
	margin-left: 10px;
	}
.leaflet-right .leaflet-control {
	margin-right: 10px;
	}


/* zoom and fade animations */

.leaflet-fade-anim .leaflet-tile {
	will-change: opacity;
	}
.leaflet-fade-anim .leaflet-popup {
	opacity: 0;
	-webkit-transition: opacity 0.2s linear;
	   -moz-transition: opacity 0.2s linear;
	        transition: opacity 0.2s linear;
	}
.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {
	opacity: 1;
	}
.leaflet-zoom-animated {
	-webkit-transform-origin: 0 0;
	    -ms-transform-origin: 0 0;
	        transform-origin: 0 0;
	}
.leaflet-zoom-anim .leaflet-zoom-animated {
	will-change: transform;
	}
.leaflet-zoom-anim .leaflet-zoom-animated {
	-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);
	   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);
	        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);
	}
.leaflet-zoom-anim .leaflet-tile,
.leaflet-pan-anim .leaflet-tile {
	-webkit-transition: none;
	   -moz-transition: none;
	        transition: none;
	}

.leaflet-zoom-anim .leaflet-zoom-hide {
	visibility: hidden;
	}


/* cursors */

.leaflet-interactive {
	cursor: pointer;
	}
.leaflet-grab {
	cursor: -webkit-grab;
	cursor:    -moz-grab;
	cursor:         grab;
	}
.leaflet-crosshair,
.leaflet-crosshair .leaflet-interactive {
	cursor: crosshair;
	}
.leaflet-popup-pane,
.leaflet-control {
	cursor: auto;
	}
.leaflet-dragging .leaflet-grab,
.leaflet-dragging .leaflet-grab .leaflet-interactive,
.leaflet-dragging .leaflet-marker-draggable {
	cursor: move;
	cursor: -webkit-grabbing;
	cursor:    -moz-grabbing;
	cursor:         grabbing;
	}

/* marker & overlays interactivity */
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-image-layer,
.leaflet-pane > svg path,
.leaflet-tile-container {
	pointer-events: none;
	}

.leaflet-marker-icon.leaflet-interactive,
.leaflet-image-layer.leaflet-interactive,
.leaflet-pane > svg path.leaflet-interactive {
	pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */
	pointer-events: auto;
	}

/* visual tweaks */

.leaflet-container {
	background: #ddd;
	outline: 0;
	}
.leaflet-container a {
	color: #0078A8;
	}
.leaflet-container a.leaflet-active {
	outline: 2px solid orange;
	}
.leaflet-zoom-box {
	border: 2px dotted #38f;
	background: rgba(255,255,255,0.5);
	}


/* general typography */
.leaflet-container {
	font: 12px/1.5 "Helvetica Neue", Arial, Helvetica, sans-serif;
	}


/* general toolbar styles */

.leaflet-bar {
	box-shadow: 0 1px 5px rgba(0,0,0,0.65);
	border-radius: 4px;
	}
.leaflet-bar a,
.leaflet-bar a:hover {
	background-color: #fff;
	border-bottom: 1px solid #ccc;
	width: 26px;
	height: 26px;
	line-height: 26px;
	display: block;
	text-align: center;
	text-decoration: none;
	color: black;
	}
.leaflet-bar a,
.leaflet-control-layers-toggle {
	background-position: 50% 50%;
	background-repeat: no-repeat;
	display: block;
	}
.leaflet-bar a:hover {
	background-color: #f4f4f4;
	}
.leaflet-bar a:first-child {
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	}
.leaflet-bar a:last-child {
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	border-bottom: none;
	}
.leaflet-bar a.leaflet-disabled {
	cursor: default;
	background-color: #f4f4f4;
	color: #bbb;
	}

.leaflet-touch .leaflet-bar a {
	width: 30px;
	height: 30px;
	line-height: 30px;
	}
.leaflet-touch .leaflet-bar a:first-child {
	border-top-left-radius: 2px;
	border-top-right-radius: 2px;
	}
.leaflet-touch .leaflet-bar a:last-child {
	border-bottom-left-radius: 2px;
	border-bottom-right-radius: 2px;
	}

/* zoom control */

.leaflet-control-zoom-in,
.leaflet-control-zoom-out {
	font: bold 18px 'Lucida Console', Monaco, monospace;
	text-indent: 1px;
	}

.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {
	font-size: 22px;
	}


/* layers control */

.leaflet-control-layers {
	box-shadow: 0 1px 5px rgba(0,0,0,0.4);
	background: #fff;
	border-radius: 5px;
	}
.leaflet-control-layers-toggle {
	background-image: url(images/layers.png);
	width: 36px;
	height: 36px;
	}
.leaflet-retina .leaflet-control-layers-toggle {
	background-image: url(images/layers-2x.png);
	background-size: 26px 26px;
	}
.leaflet-touch .leaflet-control-layers-toggle {
	width: 44px;
	height: 44px;
	}
.leaflet-control-layers .leaflet-control-layers-list,
.leaflet-control-layers-expanded .leaflet-control-layers-toggle {
	display: none;
	}
.leaflet-control-layers-expanded .leaflet-control-layers-list {
	display: block;
	position: relative;
	}
.leaflet-control-layers-expanded {
	padding: 6px 10px 6px 6px;
	color: #333;
	background: #fff;
	}
.leaflet-control-layers-scrollbar {
	overflow-y: scroll;
	overflow-x: hidden;
	padding-right: 5px;
	}
.leaflet-control-layers-selector {
	margin-top: 2px;
	position: relative;
	top: 1px;
	}
.leaflet-control-layers label {
	display: block;
	}
.leaflet-control-layers-separator {
	height: 0;
	border-top: 1px solid #ddd;
	margin: 5px -10px 5px -6px;
	}

/* Default icon URLs */
.leaflet-default-icon-path {
	background-image: url(images/marker-icon.png);
	}


/* attribution and scale controls */

.leaflet-container .leaflet-control-attribution {
	background: #fff;
	background: rgba(255, 255, 255, 0.7);
	margin: 0;
	}
.leaflet-control-attribution,
.leaflet-control-scale-line {
	padding: 0 5px;
	color: #333;
	}
.leaflet-control-attribution a {
	text-decoration: none;
	}
.leaflet-control-attribution a:hover {
	text-decoration: underline;
	}
.leaflet-container .leaflet-control-attribution,
.leaflet-container .leaflet-control-scale {
	font-size: 11px;
	}
.leaflet-left .leaflet-control-scale {
	margin-left: 5px;
	}
.leaflet-bottom .leaflet-control-scale {
	margin-bottom: 5px;
	}
.leaflet-control-scale-line {
	border: 2px solid #777;
	border-top: none;
	line-height: 1.1;
	padding: 2px 5px 1px;
	font-size: 11px;
	white-space: nowrap;
	overflow: hidden;
	-moz-box-sizing: border-box;
	     box-sizing: border-box;

	background: #fff;
	background: rgba(255, 255, 255, 0.5);
	}
.leaflet-control-scale-line:not(:first-child) {
	border-top: 2px solid #777;
	border-bottom: none;
	margin-top: -2px;
	}
.leaflet-control-scale-line:not(:first-child):not(:last-child) {
	border-bottom: 2px solid #777;
	}

.leaflet-touch .leaflet-control-attribution,
.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-bar {
	box-shadow: none;
	}
.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-bar {
	border: 2px solid rgba(0,0,0,0.2);
	background-clip: padding-box;
	}


/* popup */

.leaflet-popup {
	position: absolute;
	text-align: center;
	margin-bottom: 20px;
	}
.leaflet-popup-content-wrapper {
	padding: 1px;
	text-align: left;
	border-radius: 12px;
	}
.leaflet-popup-content {
	margin: 13px 19px;
	line-height: 1.4;
	}
.leaflet-popup-content p {
	margin: 18px 0;
	}
.leaflet-popup-tip-container {
	width: 40px;
	height: 20px;
	position: absolute;
	left: 50%;
	margin-left: -20px;
	overflow: hidden;
	pointer-events: none;
	}
.leaflet-popup-tip {
	width: 17px;
	height: 17px;
	padding: 1px;

	margin: -10px auto 0;

	-webkit-transform: rotate(45deg);
	   -moz-transform: rotate(45deg);
	    -ms-transform: rotate(45deg);
	        transform: rotate(45deg);
	}
.leaflet-popup-content-wrapper,
.leaflet-popup-tip {
	background: white;
	color: #333;
	box-shadow: 0 3px 14px rgba(0,0,0,0.4);
	}
.leaflet-container a.leaflet-popup-close-button {
	position: absolute;
	top: 0;
	right: 0;
	padding: 4px 4px 0 0;
	border: none;
	text-align: center;
	width: 18px;
	height: 14px;
	font: 16px/14px Tahoma, Verdana, sans-serif;
	color: #c3c3c3;
	text-decoration: none;
	font-weight: bold;
	background: transparent;
	}
.leaflet-container a.leaflet-popup-close-button:hover {
	color: #999;
	}
.leaflet-popup-scrolled {
	overflow: auto;
	border-bottom: 1px solid #ddd;
	border-top: 1px solid #ddd;
	}

.leaflet-oldie .leaflet-popup-content-wrapper {
	zoom: 1;
	}
.leaflet-oldie .leaflet-popup-tip {
	width: 24px;
	margin: 0 auto;

	-ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";
	filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);
	}
.leaflet-oldie .leaflet-popup-tip-container {
	margin-top: -1px;
	}

.leaflet-oldie .leaflet-control-zoom,
.leaflet-oldie .leaflet-control-layers,
.leaflet-oldie .leaflet-popup-content-wrapper,
.leaflet-oldie .leaflet-popup-tip {
	border: 1px solid #999;
	}


/* div icon */

.leaflet-div-icon {
	background: #fff;
	border: 1px solid #666;
	}


/* Tooltip */
/* Base styles for the element that has a tooltip */
.leaflet-tooltip {
	position: absolute;
	padding: 6px;
	background-color: #fff;
	border: 1px solid #fff;
	border-radius: 3px;
	color: #222;
	white-space: nowrap;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	pointer-events: none;
	box-shadow: 0 1px 3px rgba(0,0,0,0.4);
	}
.leaflet-tooltip.leaflet-clickable {
	cursor: pointer;
	pointer-events: auto;
	}
.leaflet-tooltip-top:before,
.leaflet-tooltip-bottom:before,
.leaflet-tooltip-left:before,
.leaflet-tooltip-right:before {
	position: absolute;
	pointer-events: none;
	border: 6px solid transparent;
	background: transparent;
	content: "";
	}

/* Directions */

.leaflet-tooltip-bottom {
	margin-top: 6px;
}
.leaflet-tooltip-top {
	margin-top: -6px;
}
.leaflet-tooltip-bottom:before,
.leaflet-tooltip-top:before {
	left: 50%;
	margin-left: -6px;
	}
.leaflet-tooltip-top:before {
	bottom: 0;
	margin-bottom: -12px;
	border-top-color: #fff;
	}
.leaflet-tooltip-bottom:before {
	top: 0;
	margin-top: -12px;
	margin-left: -6px;
	border-bottom-color: #fff;
	}
.leaflet-tooltip-left {
	margin-left: -6px;
}
.leaflet-tooltip-right {
	margin-left: 6px;
}
.leaflet-tooltip-left:before,
.leaflet-tooltip-right:before {
	top: 50%;
	margin-top: -6px;
	}
.leaflet-tooltip-left:before {
	right: 0;
	margin-right: -12px;
	border-left-color: #fff;
	}
.leaflet-tooltip-right:before {
	left: 0;
	margin-left: -12px;
	border-right-color: #fff;
	}
enu-container collapse navbar-collapse">
						<ul id="purple-bar" class="navbar-menu menu"><li id="menu-item-3782" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3782"><a href="//uw.edu/studentlife/">Students</a></li>
<li id="menu-item-3783" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3783"><a href="//uw.edu/parents/">Parents</a></li>
<li id="menu-item-3784" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3784"><a href="//uw.edu/facultystaff/">Faculty &amp; Staff</a></li>
<li id="menu-item-3785" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3785"><a href="//uw.edu/alumni/">Alumni</a></li>
</ul>					</div>
					<div id="search-quicklinks">
						<button class="uw-search" aria-owns="uwsearcharea" aria-controls="uwsearcharea" aria-expanded="false" aria-label="open search area" aria-haspopup="true">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="51px" viewBox="0 0 18.776 51.062" enable-background="new 0 0 18.776 51.062" xml:space="preserve" focusable="false">
								<g><path fill="#FFFFFF" d="M3.537,7.591C3.537,3.405,6.94,0,11.128,0c4.188,0,7.595,3.406,7.595,7.591 c0,4.187-3.406,7.593-7.595,7.593C6.94,15.185,3.537,11.778,3.537,7.591z M5.245,7.591c0,3.246,2.643,5.885,5.884,5.885 c3.244,0,5.89-2.64,5.89-5.885c0-3.245-2.646-5.882-5.89-5.882C7.883,1.71,5.245,4.348,5.245,7.591z"/><rect x="2.418" y="11.445" transform="matrix(0.7066 0.7076 -0.7076 0.7066 11.7842 2.0922)" fill="#FFFFFF" width="1.902" height="7.622"/></g><path fill="#FFFFFF" d="M3.501,47.864c0.19,0.194,0.443,0.29,0.694,0.29c0.251,0,0.502-0.096,0.695-0.29l5.691-5.691l5.692,5.691 c0.192,0.194,0.443,0.29,0.695,0.29c0.25,0,0.503-0.096,0.694-0.29c0.385-0.382,0.385-1.003,0-1.388l-5.692-5.691l5.692-5.692 c0.385-0.385,0.385-1.005,0-1.388c-0.383-0.385-1.004-0.385-1.389,0l-5.692,5.691L4.89,33.705c-0.385-0.385-1.006-0.385-1.389,0 c-0.385,0.383-0.385,1.003,0,1.388l5.692,5.692l-5.692,5.691C3.116,46.861,3.116,47.482,3.501,47.864z"/>
							</svg>
						</button>
													<button class="uw-quicklinks" aria-haspopup="true" aria-expanded="false" aria-label="Open quick links">Quick Links
								<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15.63px" height="69.13px" viewBox="0 0 15.63 69.13" enable-background="new 0 0 15.63 69.13" xml:space="preserve" focusable="false"><polygon fill="#FFFFFF" points="12.8,7.776 12.803,7.773 5.424,0 3.766,1.573 9.65,7.776 3.766,13.98 5.424,15.553 12.803,7.78"/><polygon fill="#FFFFFF" points="9.037,61.351 9.036,61.351 14.918,55.15 13.26,53.577 7.459,59.689 1.658,53.577 0,55.15 5.882,61.351 5.882,61.351 5.884,61.353 0,67.557 1.658,69.13 7.459,63.019 13.26,69.13 14.918,67.557 9.034,61.353"/></svg>
							</button>
											</div><!-- search-quicklinks -->
				</div><!-- #site-navigation -->
			</div><!-- .navbar.navbar-expand-lg -->
		</header><!-- #masthead -->

		


	<nav aria-label="main menu" class="navbar navbar-expand-md navbar-light white-bar">
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#white-bar" aria-controls="white-bar" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon">Menu</span>
						  </button><div class="container-fluid"><div id="white-bar" class="collapse navbar-collapse"><ul id="menu-dropdowns" class="navbar-nav classic-menu-nav"><li id="menu-item-3890" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item dropdown top-level-nav">
	<a class="nav-link dropdown-toggle"  href="https://www.washington.edu/about/" data-toggle="dropdown" aria-expanded="false" role="button">About</a>
<ul class="dropdown-menu">
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3891"><a class="nav-link"  href="https://www.washington.edu/about/">About the UW</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3892"><a class="nav-link"  href="https://www.washington.edu/diversity/">Diversity</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3893"><a class="nav-link"  href="https://www.washington.edu/global/">Global Impact</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3894"><a class="nav-link"  href="https://www.washington.edu/innovation/">Innovation</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3895"><a class="nav-link"  href="https://www.washington.edu/leadership/">Leadership</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3896"><a class="nav-link"  href="https://www.washington.edu/maps/">Maps</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3897"><a class="nav-link"  href="https://www.washington.edu/populationhealth/">Population Health</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3898"><a class="nav-link"  href="https://sustainability.uw.edu/">Sustainability</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3899"><a class="nav-link"  href="https://www.washington.edu/visit/">Visit</a>
	</li>

</ul>

</li>
<li id="menu-item-3900" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item dropdown top-level-nav">
	<a class="nav-link dropdown-toggle"  href="https://www.washington.edu/about/academics/" data-toggle="dropdown" aria-expanded="false" role="button">Academics</a>
<ul class="dropdown-menu">
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3901"><a class="nav-link"  href="https://www.washington.edu/about/academics/">Academics at the UW</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3902"><a class="nav-link"  href="https://www.washington.edu/calendar/academic/">Academic calendar</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3903"><a class="nav-link"  href="https://www.washington.edu/about/academics/departments/">Academic departments</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3904"><a class="nav-link"  href="https://www.washington.edu/about/academics/">Colleges and schools</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3905"><a class="nav-link"  href="https://www.washington.edu/students/crscat/">Course descriptions</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3906"><a class="nav-link"  href="https://registrar.washington.edu/registration/">Registration</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3907"><a class="nav-link"  href="https://www.washington.edu/students/">Student guide</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3908"><a class="nav-link"  href="https://www.washington.edu/students/timeschd/">Time schedule</a>
	</li>

</ul>

</li>
<li id="menu-item-3909" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item dropdown top-level-nav">
	<a class="nav-link dropdown-toggle"  href="https://www.washington.edu/admissions/" data-toggle="dropdown" aria-expanded="false" role="button">Apply</a>
<ul class="dropdown-menu">
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3910"><a class="nav-link"  href="https://www.washington.edu/admissions/">Admissions</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3911"><a class="nav-link"  href="https://www.washington.edu/financialaid/">Financial Aid</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3912"><a class="nav-link"  href="https://www.pce.uw.edu/">Continuing education</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3913"><a class="nav-link"  href="http://www.washington.edu/uaa/advising/degree-overview/majors/list-of-undergraduate-majors/">Majors</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3914"><a class="nav-link"  href="https://www.washington.edu/about/housing/">Student housing</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3915"><a class="nav-link"  href="https://admit.washington.edu/apply/transfer/">Transfer students</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3916"><a class="nav-link"  href="https://finance.uw.edu/sfs/tuition/">Tuition and fees</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3917"><a class="nav-link"  href="https://www.washington.edu/admissions/undocumented/">Undocumented students</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3918"><a class="nav-link"  href="https://www.pce.uw.edu/online">UW Online</a>
	</li>

</ul>

</li>
<li id="menu-item-3919" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item dropdown top-level-nav">
	<a class="nav-link dropdown-toggle"  href="https://www.washington.edu/news/" data-toggle="dropdown" aria-expanded="false" role="button">News &#038; Events</a>
<ul class="dropdown-menu">
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3920"><a class="nav-link"  href="https://www.washington.edu/news/">UW News</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3921"><a class="nav-link"  href="https://www.washington.edu/boundless/">Featured stories</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3922"><a class="nav-link"  href="https://arts.washington.edu/">Arts UW</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3923"><a class="nav-link"  href="https://www.washington.edu/calendar/">Calendar</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3924"><a class="nav-link"  href="https://magazine.washington.edu/">UW Magazine</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3925"><a class="nav-link"  href="https://gohuskies.com/">Husky sports</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3926"><a class="nav-link"  href="https://www.washington.edu/newsletter/">Newsletter</a>
	</li>

</ul>

</li>
<li id="menu-item-3927" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item dropdown top-level-nav">
	<a class="nav-link dropdown-toggle"  href="https://www.washington.edu/research/" data-toggle="dropdown" aria-expanded="false" role="button">Research</a>
<ul class="dropdown-menu">
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3928"><a class="nav-link"  href="https://www.washington.edu/research/">Research at the UW</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3929"><a class="nav-link"  href="https://www.washington.edu/research/or/">Office of Research</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3930"><a class="nav-link"  href="https://www.washington.edu/research/myresearch-lifecycle/">Research Lifecycle</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3931"><a class="nav-link"  href="https://www.washington.edu/research/resources/">Resources</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3932"><a class="nav-link"  href="https://www.washington.edu/research/centers-and-institutes/">Centers and Institutes</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3933"><a class="nav-link"  href="https://www.washington.edu/research/or/research-stats-rankings/">Stats and rankings</a>
	</li>

</ul>

</li>
<li id="menu-item-3934" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item dropdown top-level-nav">
	<a class="nav-link dropdown-toggle"  href="https://www.washington.edu/about/" data-toggle="dropdown" aria-expanded="false" role="button">Campuses</a>
<ul class="dropdown-menu">
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3935"><a class="nav-link"  href="https://www.uwb.edu/">Bothell</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3936"><a class="nav-link"  href="https://www.washington.edu/about/">Seattle</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3937"><a class="nav-link"  href="https://www.tacoma.uw.edu/">Tacoma</a>
	</li>

</ul>

</li>
<li id="menu-item-3938" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item dropdown top-level-nav">
	<a class="nav-link dropdown-toggle"  href="https://www.washington.edu/giving/" data-toggle="dropdown" aria-expanded="false" role="button">Give</a>
<ul class="dropdown-menu">
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3939"><a class="nav-link"  href="https://www.washington.edu/giving/make-a-gift/">Give now</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3940"><a class="nav-link"  href="https://www.washington.edu/giving/how-to-give/">Ways to give</a>
	</li>
<li class="nav-item menu-item menu-item-type-custom menu-item-object-custom nav-item-3941"><a class="nav-link"  href="https://myuwgiving.gifts.washington.edu/">My UW Giving</a>
	</li>

</ul>

</li>
</ul></div></div></nav>


<div class="uw-hero-image" style="background-image:url(//www.washington.edu/wp-content/themes/uw_wp_theme/assets/headers/suzzallo.jpg)">
	<div class="container-fluid">
		<a href="https://www.washington.edu/about/" title="About the UW"><div class="uw-site-title">About the UW</div></a>
		<div class="udub-slant-divider gold"><span></span></div>
	</div>
</div>
<div class="container-fluid ">
<nav class='uw-breadcrumbs' aria-label='breadcrumbs'><ul><li><a href="https://www.washington.edu/about/" title="About the UW">About the UW</a><li  class="current" ><span>Colleges and schools</span></li></ul></nav>
</div>
<div class="container-fluid uw-body">
	<div class="row">

		<main id="primary" class="site-main uw-body-copy col-md-12">

		
<article id="post-1582" class="post-1582 page type-page status-publish hentry">
	<header class="entry-header">
		<h1 class="entry-title">Colleges and schools</h1>	</header><!-- .entry-header -->
	
	<div class="entry-content">
		<p><img loading="lazy" decoding="async" style="margin-left: 15px;" class="alignright wp-image-2678 size-half" src="https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/79/2017/04/07150842/28389339163_ed00c57fbd_z-375x250.jpg" alt="back view of man wearing purple W cap" width="375" height="250" srcset="https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/79/2017/04/07150842/28389339163_ed00c57fbd_z-375x250.jpg 375w, https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/79/2017/04/07150842/28389339163_ed00c57fbd_z-300x200.jpg 300w, https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/79/2017/04/07150842/28389339163_ed00c57fbd_z.jpg 640w" sizes="(max-width: 375px) 100vw, 375px" /></p>
<p class="intro">What are you driven to discover? A lifesaving cure? An entirely new art form? A solution for greener technologies? At the UW, you’ll do more than read about change; you’ll be the catalyst making positive change happen. Explore our colleges, schools and programs.</p>
<p class="intro">The UW has thriving campuses in Seattle, Bothell and Tacoma and robust professional and continuing education programs.</p>
<p>		<a href="https://www.washington.edu/admissions/" class="btn btn-lg arrow purple"><span>Apply to the UW</span><span class="arrow-box"><span class="arrow"></span></span></a></p>
<hr />
<div class="box-outer">
<div class="box three box-none">
<div class="tile">
<p><img fetchpriority="high" decoding="async" src="https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/79/2023/07/27103439/arts-sciences-2023.jpg" alt="Four students walking on a path through campus with a tree-lined backgrop." width="375" height="240" class="alignnone size-full wp-image-3966" srcset="https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/79/2023/07/27103439/arts-sciences-2023.jpg 375w, https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/79/2023/07/27103439/arts-sciences-2023-300x192.jpg 300w" sizes="(max-width: 375px) 100vw, 375px" /></p>
<h3>College of Arts &amp; Sciences</h3>
<p>The College of Arts &amp; Sciences provides a cutting-edge liberal arts education with rich opportunities to explore our cultural and natural worlds through its 38 departments, 71 programs and centers, and the <a href="https://jsis.washington.edu/">Jackson School of International Studies</a>.</p>
<p>		<a href="https://artsci.washington.edu/" class="btn btn-lg arrow gold"><span>More</span><span class="arrow-box"><span class="arrow"></span></span></a></p>
</div>
<div class="tile">
<p><img loading="lazy" decoding="async" class="alignnone size-full wp-image-1911" src="https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/79/2012/07/07150948/built-environments.jpg" alt="Interior of a building" width="375" height="240" srcset="https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/79/2012/07/07150948/built-environments.jpg 375w, https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/79/2012/07/07150948/built-environments-300x192.jpg 300w" sizes="(max-width: 375px) 100vw, 375px" /></p>
<h3>College of Built Environments</h3>
<p>At the College of Built Environments, we focus on planning, design, construction and management of our built environments. We prepare graduates to create innovative urban infrastructure for the future.</p>
<p>		<a href="http://be.washington.edu" class="btn btn-lg arrow gold"><span>More</span><span class="arrow-box"><span class="arrow"></span></span></a></p>
</div>
<div class="tile">
<p><img loading="lazy" decoding="async" class="alignnone size-full wp-image-1913" src="https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/79/2012/07/07150946/business.jpg" alt="Photograph of business school student" width="375" height="240" srcset="https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/79/2012/07/07150946/business.jpg 375w, https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/79/2012/07/07150946/business-300x192.jpg 300w" sizes="(max-width: 375px) 100vw, 375px" /></p>
<h3>Michael G. Foster School of Business</h3>
<p>The Michael G. Foster School of Business is<span style="color: #000000;"> a collaborative learning community of faculty, staff, students, alumni and business leaders dedicated to the creation, application and sharing of management knowledge. </span></p>
<p>		<a href="https://foster.uw.edu/" class="btn btn-lg arrow gold"><span>More</span><span class="arrow-box"><span class="arrow"></span></span></a></p>
</div>
</div>
</div>
<div class="box-outer">
<div class="box three box-none">
<div class="tile">
<p><img decoding="async" src="https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/79/2017/05/07150829/Allen-School-Image-3.jpg" alt="Two women and one man looking at computer" /></p>
<h3>Paul G. Allen School of Computer Science &amp; Engineering</h3>
<p>Ranked among the top computer science programs in the nation, the Allen School educates tomorrow’s innovators and engages in research that advances the field of computer science and engineering. As members of the <a href="http://www.engr.washington.edu/">College of Engineering</a>, Allen School students have access to all of its activities and resources.</p>
<p>		<a href="https://cs.washington.edu/" class="btn btn-lg arrow gold"><span>More</span><span class="arrow-box"><span class="arrow"></span></span></a></p>
</div>
<div class="tile">
<p><img loading="lazy" decoding="async" class="alignnone size-full wp-image-1933" src="https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/79/2012/07/07150920/dentistry.jpg" alt="Two surgeons operating on a patient" width="375" height="240" srcset="https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/79/2012/07/07150920/dentistry.jpg 375w, https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/79/2012/07/07150920/dentistry-300x192.jpg 300w" sizes="(max-width: 375px) 100vw, 375px" /></p>
<h3>School of Dentistry</h3>
<p>A global leader in oral health research, the School of Dentistry prepares students to be true 21st-century dentists with evidence-based training grounded in the latest advances of biological and materials science.</p>
<p>		<a href="https://dental.washington.edu/" class="btn btn-lg arrow gold"><span>More</span><span class="arrow-box"><span class="arrow"></span></span></a></p>
</div>
<div class="tile">
<p><img loading="lazy" decoding="async" class="alignnone wp-image-2122 size-full" src="https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/79/2012/07/07150903/education-college.jpg" alt="Students studying a globe" width="375" height="240" srcset="https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/79/2012/07/07150903/education-college.jpg 375w, https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/79/2012/07/07150903/education-college-300x192.jpg 300w" sizes="(max-width: 375px) 100vw, 375px" /></p>
<h3>College of Education</h3>
<p>An effective public education system for a diverse citizenry is the cornerstone of democracy. At the College of Education, we&#8217;re dedicated to making an excellent education a daily reality for every student in every community.</p>
<p>		<a href="https://education.uw.edu/" class="btn btn-lg arrow gold"><span>More</span><span class="arrow-box"><span class="arrow"></span></span></a></p>
</div>
</div>
</div>
<div class="box-outer">
<div class="box three box-none">
<div class="tile">
<p><img loading="lazy" decodi