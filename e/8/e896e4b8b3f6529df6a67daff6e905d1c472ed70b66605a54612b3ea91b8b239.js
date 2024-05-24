/*-----------------------------------------------------------------------------
- esg Portfolio -

Screen Stylesheet

author:		themepunch
email:     	info@themepunch.com
website:   	http://www.themepunch.com
-----------------------------------------------------------------------------*/

/****************************************
			COMMON STYLES
*****************************************/
.esg-line-height-0 {
	line-height: 0;
}

.esg-text-left {
	text-align: left;
}
.esg-text-right {
	text-align: right;
}
.esg-text-center {
	text-align: center;
}

.esg-font-normal {
	font-style: normal;
}
.esg-font-italic {
	font-style: italic;
}

.esg-display-none {
	display: none;
}
.esg-display-block {
	display: block;
}
.esg-display-inline-block {
	display: inline-block;
}
.esg-display-inline {
	display: inline;
}
.esg-display-none-i {
	display: none !important;
}
.esg-display-block-i {
	display: block !important;
}
.esg-display-inline-block-i {
	display: inline-block !important;
}
.esg-display-inline-i {
	display: inline !important;
}

.esg-hidden {
	visibility: hidden;
}
.esg-visible {
	visibility: visible;
}

.esg-p-absolute {
	position: absolute;
}
.esg-p-relative {
	position: relative;
}

.esg-margin-0 {
	margin: 0;
}
.esg-margin-t-0 {
	margin-top: 0;
}
.esg-margin-b-0 {
	margin-bottom: 0;
}
.esg-margin-l-0 {
	margin-left: 0;
}
.esg-margin-r-0 {
	margin-right: 0;
}

.esg-margin-5 {
	margin: 5px;
}
.esg-margin-t-5 {
	margin-top: 5px;
}
.esg-margin-b-5 {
	margin-bottom: 5px;
}
.esg-margin-l-5 {
	margin-left: 5px;
}
.esg-margin-r-5 {
	margin-right: 5px;
}

.esg-margin-10 {
	margin: 10px;
}
.esg-margin-t-10 {
	margin-top: 10px;
}
.esg-margin-b-10 {
	margin-bottom: 10px;
}
.esg-margin-l-10 {
	margin-left: 10px;
}
.esg-margin-r-10 {
	margin-right: 10px;
}

.esg-margin-15 {
	margin: 15px;
}
.esg-margin-t-15 {
	margin-top: 15px;
}
.esg-margin-b-15 {
	margin-bottom: 15px;
}
.esg-margin-l-15 {
	margin-left: 15px;
}
.esg-margin-r-15 {
	margin-right: 15px;
}

.esg-padding-0 {
	padding: 0;
}
.esg-padding-t-0 {
	padding-top: 0;
}
.esg-padding-b-0 {
	padding-bottom: 0;
}
.esg-padding-l-0 {
	padding-left: 0;
}
.esg-padding-r-0 {
	padding-right: 0;
}

.esg-padding-15 {
	padding: 15px;
}
.esg-padding-t-15 {
	padding-top: 15px;
}
.esg-padding-b-15 {
	padding-bottom: 15px;
}
.esg-padding-l-15 {
	padding-left: 15px;
}
.esg-padding-r-15 {
	padding-right: 15px;
}

.esg-f-left {
	float: left !important;
}
.esg-f-right {
	float: right !important;
}
.esg-f-none {
	float: none !important;
}

.esg-color-black {
	color: #000000;
}
.esg-color-green {
	color: green;
}
.esg-color-red {
	color: red;
}

.esg-w100-hauto {
	width: 100%;
	height: auto;
}

.esg-fullscreen-forcer {
	position: relative;
	left: 0px;
	top: 0px;
	width: 100%;
	height: auto;
}

.esg-iframe {
	position: absolute;
	top: 0px;
	left: 0px;
	display:none;
}

.esg-clearfix:before,
.esg-clearfix:after {
	content: " ";
	display: table;
}
.esg-clearfix:after {
	clear: both;
}

/****************************************
		BASIC SETTINGS FOR PORTFOLIO
*****************************************/
.esg-starring {
	line-height: 25px;
	display: inline-block
}

.esg-starring .star-rating {
	float: none;
}

.esg-starring .star-rating {
	color: #FFC321 !important;
}

.esg-starring .star-rating, .esg-starring-page .star-rating {
	float: right;
	overflow: hidden;
	position: relative;
	height: 1em;
	line-height: 1em;
	font-size: 1em;
	width: 5.4em;
	font-family: star;
}

.esg-starring .star-rating:before, .esg-starring-page .star-rating:before {
	content: "\73\73\73\73\73";
	color: #E0DADF;
	float: left;
	top: 0;
	left: 0;
	position: absolute;
}

.esg-starring star-rating span,
.esg-starring .star-rating span {
	overflow: hidden;
	float: left;
	top: 0;
	left: 0;
	position: absolute;
	padding-top: 1.5em;
}

.esg-starring .star-rating span:before,
.esg-starring .star-rating span:before {
	content: "\53\53\53\53\53";
	top: 0;
	position: absolute;
	left: 0;
}

.esg-starring .star-rating {
	color: #FFC321 !important;
}

.lazyloadcover {
	position: absolute;
	top: 0px;
	left: 0px;
	z-index: 10;
	width: 100%;
	height: 100%;
}

.esg-lazyblur {
	background-repeat: no-repeat;
	filter: blur(25px);
	-webkit-filter: blur(25px);
	-moz-filter: blur(25px);
	background-size: cover;
	background-position: center center;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	overflow: hidden;
}

.esg-media-poster {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0px;
	left: 0px;
	background-size: cover;
	background-position: center center;
	z-index: 10;
	opacity: 0;
}

.esg-video-active .esg-media-poster {
	z-index: 0
}

.esg-vimeo-frame {
	background: black
}

/* 2.2 */
.esg-grid .no-filter-message {
	/* no need to edit below */
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	text-align: center;
	pointer-events: none;
	visibility: hidden;
	opacity: 0;
	transition: all 0.2s ease;
}
.esg-grid .esg-loadmore-wrapper + .no-filter-message {
	position: relative;
	display: block;
	text-align: center;
}

/* fades the message in and out */
.esg-grid.show-message .no-filter-message {
	transition-duration: 1s;
	visibility: visible;
	opacity: 1;

}

/* 2.1.6 */
.esg-hover-image {
	display: none
}

.esg-media-poster .esg-hover-image {
	display: block;
	width: inherit;
	height: inherit;
	background-size: inherit;
	background-position: inherit;
	visibility: hidden;
	opacity: 0
}

.esg-starring .star-rating, .esg-starring-page .star-rating {
	line-height: 1em;
	font-size: 1em;
	font-family: star;
}

.esg-grid {
	width: 100%;
	max-width: 100%;
	font-family: 'Open Sans', sans-serif;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	-webkit-transform: translateZ(0px);
	transform: translateZ(0px)
}

@-moz-document url-prefix() {
	.esg-grid {
		transform: none !important
	}
}

.esg-grid .mainul,
.esg-grid .mainul > li {
	list-style: none;
	margin: 0;
	padding: 0;
	transform-style: flat !important;
}


.esg-grid * {
	-webkit-font-smoothing: antialiased;
	font-smoothing: antialiased;
}

/* 2.2.5 */
.esg-grid ul,
.esg-grid li {
	list-style: none;
	margin: 0;
	padding: 0;
	transform-style: flat !important;

}

.esg-overflowtrick {
	position: relative;
	width: 100%;
	height: auto;
	overflow: hidden;
	padding: 0px;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;

	z-index: 1;
}

.esg-overflowtrick + .esg-filters:not(.esg-navbutton-solo-left):not(.esg-navbutton-solo-right) {
	z-index: 0 !important;
}

.esg-container {
	position: relative;
	width: 100%;
	height: auto;

}

.esg-container > ul,
.esg-overflowtrick > ul {
	width: 100%;
	max-width: 100%;
	height: 0px;
	position: relative;
	overflow: visible;
}

.esg-grid li {
	border: 0px solid transparent;
	outline: 0px solid transparent;
	visibility: hidden;
	display: none;
}

.esg-grid a {
	border: none;
	text-decoration: none
}

.esg-grid a:hover,
.esg-grid a:focus {
	text-decoration: none;
	border: none;
}

.esg-clear {
	clear: both;
	height: 5px !important;
	background: none !important;
}
.esg-clear-no-height,
.eg-clearfix {
	clear: both;
	height: 0px !important;
	background: none !important;
}
.esg-line-break {
	height: 5px;
	visibility: hidden;
}


.esg-divide-5 {
	width: 100%;
	height: 5px
}

.esg-divide-15 {
	width: 100%;
	height: 15px
}

.esg-divide-20 {
	width: 100%;
	height: 20px
}

.esg-divide-22 {
	width: 100%;
	height: 22px
}

.esg-divide-30 {
	width: 100%;
	height: 30px
}

.esg-click-to-play-video {
	cursor: pointer
}

.esg-entry-media iframe {
	-webkit-transform-style: flat;
	-webkit-transform: translateZ(1000px);
	border: 0;
}


/******************************
	-	THE ESG ITEMS	-
********************************/

.esg-container .tp-esg-item {
	position: absolute;
	top: 0px;
	left: 0px;
}


.esg-container .tp-esg-item {
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
}

.esg-container .tp-esg-item .blackoverlay {
	width: 100%;
	height: 100%;
	position: absolute;
	background: #000;
	top: 0px;
	left: 0px;
}


.tp-esg-item {
	z-index: 5
}

.tp-esg-item.itemonotherpage {
	z-index: 0;
	display: none;
}


/******************************
	-	ESG ITEM POSITIONS	-
********************************/

.esg-entry-cover {
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0px;
	left: 0px;
	overflow: hidden;
	border: 0px solid transparent;
	outline: 0px solid transparent;
}

.eec {
	display: block;
	width: auto;
	height: auto;
	position: absolute !important;
	font-size: 20px;
	text-align: center
}
.esg-entry-cover > .eec {
	z-index: 2;
	pointer-events: none;
}
.esg-entry-cover > .eec > * {
	pointer-events: all;
}

/* 2.2.6 */
/* CONTAINERS */
.esg-tc {
	top: 0px;
	left: 0px;
	width: 100%;
}

.esg-lc {
	top: 0px;
	left: 0px;
	height: 100%;
}

.esg-cc {
	top: 0px;
	left: 0px;
	width: 100%;
	vertical-align: middle;
}

.esg-rc {
	top: 0px;
	right: 0px;
	height: 100%;
}

.esg-bc {
	bottom: 0px;
	left: 0px;
	width: 100%;
}


/* TOP CONTAINERS */

.esg-tc .ess-tb-cell {
	text-align: center;
	vertical-align: top;
}


/* CENTER CONTAINERS */
.esg-lc .ess-tb-cell {
	text-align: left;
	vertical-align: middle;
}

.esg-cc .ess-tb-cell {
}

.esg-rc .ess-tb-cell {
	text-align: right;
	vertical-align: middle;
}

/* RIGHT CONTAINERS */
.esg-blc .ess-tb-cell {
	text-align: left;
	vertical-align: bottom;
}

.esg-bc .ess-tb-cell {
	text-align: center;
	vertical-align: bottom;
}

.esg-brc .ess-tb-cell {
	text-align: right;
	vertical-align: bottom;
}

.esg-bc .leftalign {
	text-align: left;
}


/******************************
	-	ESG MEDIA	-
********************************/

.esg-entry-media {
	position: relative;
	border: 0px solid transparent;
	outline: 0px solid transparent;
	overflow: hidden;
}

.esg-entry-media {
	width: 100%;
}

.esg-entry-media img {
	width: 100%;
	height: auto;
	max-width: none !important;
	min-width: none !important
}

.esg-layout-masonry .esg-entry-media img {
	line-height: 0px;
	vertical-align: bottom;
	display: inline-block;
}

.esg-layout-even .esg-entry-media img {
	display: none
}

.esg-media-cover-wrapper {
	position: relative;
	width: 100%;
	backface-visibility: hidden
}

.esg-layout-even .esg-media-cover-wrapper {
	height: 100%;
}

.esg-entry-media-wrapper {
	z-index: 0;
}
.esg-entry-media-wrapper-even {
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
}
.esg-entry-media-wrapper-not-even {
	overflow: hidden;
	position: relative;
}
.esg-entry-media-wrapper .esg-video-frame {
	background: #000;
}
.esg-entry-media-wrapper-item-layout {
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden;
}

/**********************************
	-	ESG COVER CONTAINER	-
**********************************/

.esg-entry-cover .esg-overlay {
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	border: 0px solid transparent;
	outline: 0px solid transparent;
}

/******************************
	-	ESG CONTNER PART	-
********************************/
.esg-layout-even .esg-entry-content {
	display: none;
}

.esg-entry-content {
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-webkit-backface-visibility: hidden;
}

/******************************
	-	NAVIGATION SKINS	-
********************************/

.navigationbuttons,
.esg-pagination,
.esg-filters {
	position: relative;
	z-index: 50;
	-webkit-backface-visibility: hidden;
}

.esg-grid .esg-pagination {
	z-index: 100;
	-webkit-backface-visibility: hidden;
}


/* 2.3.7 */
.esg-nav-by-shortcode .esg-sortbutton-order.eg-icon-down-open.tp-asc,
.esg-nav-by-shortcode .esg-sortbutton-order .tp-desc,
.esg-sortbutton-order.eg-icon-down-open.tp-asc,
.esg-sortbutton-order .tp-desc {
	text-align: center
}

/* 2.3.7 */
.esg-nav-by-shortcode {
	position: relative;
	display: inline-block;
	vertical-align: top;
	text-align: center
}

.esg-nav-by-shortcode .esg-navbutton-solo-right,
.esg-nav-by-shortcode .esg-navbutton-solo-left {
	position: relative;
	left: auto;
	right: auto;
	top: auto;
	bottom: auto
}

.esg-nav-by-shortcode .esg-filter-wrapper {
	visibility: visible;
}

/******************************
	-	FILTER BUTTONS 	-
	-	NAVIGATION BUTTONS	-
********************************/

.esg-singlefilters .esg-filter-checked {
	display: none;
	-webkit-backface-visibility: hidden;
}

.esg-filter-wrapper {
	display: inline-block;
}

.esg-sortbutton-wrapper {
	display: inline-block;
}

.esg-cartbutton-wrapper {
	display: inline-block
}

/* DROP DOWN STYLE FOR ESSENTIAL GRID */
.esg-filter-wrapper.dropdownstyle {
	min-width: 100px;
	cursor: pointer;
	position: relative;
	z-index: 1500;
	-webkit-backface-visibility: hidden;
	-webkit-transform: translateZ(1px);
	transform: translateZ(1px)
}
.esg-filter-wrapper.dropdownstyle.esg-skin-preview {
	z-index: 1570;
	visibility: visible;
}

.esg-filter-wrapper.dropdownstyle .esg-filterbutton {
	display: block;
	margin-right: 0px;
	margin-bottom: 5px;
}

.esg-filter-wrapper.dropdownstyle .esg-filter-checked {
	margin-right: 5px;
	margin-left: 0px;
}

.esg-dropdown-wrapper {
	display: none;
	position: absolute;
	padding: 20px;
	top: 100%;
	backface-visibility: hidden;
	transform: translateZ(10px);
}

.esg-selected-filterbutton {
	color: #999;
	margin-right: 5px;
	cursor: pointer;
	padding: 0px 15px 0px 10px;
	line-height: 20px;
	font-size: 12px;
	font-weight: 600;
	font-family: "Open Sans", sans-serif;
	display: inline-block;
	background: rgba(0, 0, 0, 0);
	margin-bottom: 5px;
	width: 100%;
}

.esg-selected-filterbutton.hovered {
	color: #444;
}

.esg-selected-filterbutton .eg-icon-down-open {
	display: inline-block;
	vertical-align: top;
	width: 29px;
	line-height: inherit;
	font-size: 9px;
	font-weight: 700;
	color: #999;
	background: rgba(0, 0, 0, 0);
	text-align: center;
}

/** SAME SETTINGS FOR ALL SKIN **/
.esg-sortbutton-order.tp-desc {
	transform: scaleY(-1);
	filter: FlipV;
	-ms-filter: "FlipV";
}

.esg-sorting-select {
	cursor: pointer;
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
	filter: alpha(opacity=0);
	-moz-opacity: 0.0;
	-khtml-opacity: 0.0;
	opacity: 0.0;
	-webkit-appearance: menulist-button;
}

.esg-filters.esg-navbutton-solo-left {
	position: absolute;
	left: 0px;
	top: 50%;
	z-index: 800
}

.esg-filters.esg-navbutton-solo-right {
	position: absolute;
	right: 0px;
	top: 50%;
	z-index: 800;
}

.esg-navigationbutton.esg-right,
.esg-navigationbutton.esg-left {
	margin-left: 0px !important;
	margin-right: 0px !important;
	-webkit-transform-style: flat;
	-webkit-transform: translateZ(5000px)
}

/*************************************************
	-	LET / RIGHT WIDGET AREA CONTAINERS	-
**************************************************/

.eg-leftright-container {
	float: left;
	width: 310px;
	margin-right: 20px;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	position: relative;
}

.eg-leftright-container.dark {
	background: #1e1e1e
}

.eg-leftright-container .pagination {
	position: absolute;
	bottom: 0px;
}

.eg-leftright-container .esg-filters {
	padding: 30px;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
}

.eg-leftright-container .esg-filterbutton {
	display: block;
	margin: 0px 0px 5px 0px
}

.eg-leftright-container .esg-filter-wrapper {
	display: block;
	margin-right: 0px;
}

/***********************************
	-	AJAX TARGET CONTAINER	-
************************************/
.eg-ajaxtarget-container {
	position: relative;
	width: 100%;
	height: auto;
}
.eg-ajaxanimwrapper {
	position: relative;
	overflow: hidden;
}

/******************************
	-	LOADER FORMS	-
********************************/
.tp-esg-item .add_to_cart_button.loading:before {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background: url(../images/ajax-loader.gif) center no-repeat rgba(255, 255, 255, 0.65);
}

.esg-loader {
	top: 50%;
	left: 50%;
	z-index: 10000;
	position: absolute;
}

.infinityscollavailable.esg-loader {
	position: relative;
	top: auto;
	left: 50%;
	margin-top: 25px !important;
	margin-bottom: 25px !important;
}

.esg-loader.spinner0 {
	width: 40px;
	height: 40px;
	background: url(../images/loader.gif) no-repeat center center;
	background-color: #fff;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
	-webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);

	margin-left: -20px;
	-webkit-animation: esg-rotateplane 1.2s infinite ease-in-out;
	animation: esg-rotateplane 1.2s infinite ease-in-out;
	border-radius: 3px;
	-moz-border-radius: 3px;
	-webkit-border-radius: 3px;
}

.esg-loader.spinner1 {
	width: 40px;
	height: 40px;
	background-color: #fff;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
	-webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);

	margin-left: -20px;
	-webkit-animation: esg-rotateplane 1.2s infinite ease-in-out;
	animation: esg-rotateplane 1.2s infinite ease-in-out;
	border-radius: 3px;
	-moz-border-radius: 3px;
	-webkit-border-radius: 3px;
}

.esg-loader.spinner5 {
	background: url(../images/loader.gif) no-repeat 10px 10px;
	background-color: #fff;
	margin: -22px -22px;
	width: 44px;
	height: 44px;
	border-radius: 3px;
	-moz-border-radius: 3px;
	-webkit-border-radius: 3px;
}

@-webkit-keyframes esg-rotateplane {
	0% {
		-webkit-transform: perspective(120px)
	}
	50% {
		-webkit-transform: perspective(120px) rotateY(180deg)
	}
	100% {
		-webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg)
	}
}

@keyframes esg-rotateplane {
	0% {
		transform: perspective(120px) rotateX(0deg) rotateY(0deg);
		-webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
	}
	50% {
		transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
		-webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
	}
	100% {
		transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
		-webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
	}
}

.esg-loader.spinner2 {
	width: 40px;
	height: 40px;
	margin-left: -20px;
	background-color: #ff0000;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
	-webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
	border-radius: 100%;
	-webkit-animation: esg-scaleout 1.0s infinite ease-in-out;
	animation: esg-scaleout 1.0s infinite ease-in-out;
}

@-webkit-keyframes esg-scaleout {
	0% {
		-webkit-transform: scale(0.0)
	}
	100% {
		-webkit-transform: scale(1.0);
		opacity: 0;
	}
}

@keyframes esg-scaleout {
	0% {
		transform: scale(0.0);
		-webkit-transform: scale(0.0);
	}
	100% {
		transform: scale(1.0);
		-webkit-transform: scale(1.0);
		opacity: 0;
	}
}

.esg-loader.spinner3 {
	margin: -9px 0px 0px -35px;
	width: 70px;
	text-align: center;
}

.eg-search-wrapper .esg-loader.spinner3 {
	margin-top: -30px !important
}

.simple-light .eg-search-wrapper .esg-loader.spinner3,
.simple-dark .eg-search-wrapper .esg-loader.spinner3 {
	margin-top: -25px !important
}

.text-light .eg-search-wrapper .esg-loader.spinner3,
.text-dark .eg-search-wrapper .esg-loader.spinner3 {
	margin-top: -22px !important
}

.esg-loader.spinner3 .bounce1,
.esg-loader.spinner3 .bounce2,
.esg-loader.spinner3 .bounce3 {
	width: 18px;
	height: 18px;
	background-color: #fff;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
	-webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
	border-radius: 100%;
	display: inline-block;
	-webkit-animation: esg-bouncedelay 1.4s infinite ease-in-out;
	animation: esg-bouncedelay 1.4s infinite ease-in-out;
	/* Prevent first frame from flickering when animation starts */
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both;
}

.esg-loader.spinner3 .bounce1 {
	-webkit-animation-delay: -0.32s;
	animation-delay: -0.32s;
}

.esg-loader.spinner3 .bounce2 {
	-webkit-animation-delay: -0.16s;
	animation-delay: -0.16s;
}

@-webkit-keyframes esg-bouncedelay {
	0%, 80%, 100% {
		-webkit-transform: scale(0.0)
	}
	40% {
		-webkit-transform: scale(1.0)
	}
}

@keyframes esg-bouncedelay {
	0%, 80%, 100% {
		transform: scale(0.0);
		-webkit-transform: scale(0.0);
	}
	40% {
		transform: scale(1.0);
		-webkit-transform: scale(1.0);
	}
}

.esg-loader.spinner4 {
	margin: 0px 0px 0px -20px;
	width: 40px;
	height: 40px;
	text-align: center;
	-webkit-animation: esg-rotate 2.0s infinite linear;
	animation: esg-rotate 2.0s infinite linear;
}

.esg-loader.spinner4 .dot1,
.esg-loader.spinner4 .dot2 {
	width: 60%;
	height: 60%;
	display: inline-block;
	position: absolute;
	top: 0;
	background-color: #fff;
	border-radius: 100%;
	-webkit-animation: esg-bounce 2.0s infinite ease-in-out;
	animation: esg-bounce 2.0s infinite ease-in-out;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
	-webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
}

.esg-loader.spinner4 .dot2 {
	top: auto;
	bottom: 0px;
	-webkit-animation-delay: -1.0s;
	animation-delay: -1.0s;
}

@-webkit-keyframes esg-rotate {
	100% {
		-webkit-transform: rotate(360deg)
	}
}

@keyframes esg-rotate {
	100% {
		transform: rotate(360deg);
		-webkit-transform: rotate(360deg)
	}
}

@-webkit-keyframes esg-bounce {
	0%, 100% {
		-webkit-transform: scale(0.0)
	}
	50% {
		-webkit-transform: scale(1.0)
	}
}

@keyframes esg-bounce {
	0%, 100% {
		transform: scale(0.0);
		-webkit-transform: scale(0.0);
	}
	50% {
		transform: scale(1.0);
		-webkit-transform: scale(1.0);
	}
}

/****************************
* Font Icons
****************************/

[class^="eg-icon-"]:before,
[class*=" eg-icon-"]:before {
	font-family: "eg-font";
	font-style: normal;
	font-weight: normal;
	speak: none;

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

[class^="fa-icon-"]:before, [class*=" fa-icon-"]:before {
	font-family: FontAwesome;
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
}

.esg-grid [class^="pe-7s-"]:before,
.esg-grid [class*=" pe-7s-"]:before {
	font-family: 'Pe-icon-7-stroke';
	display: inline-block;
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
}


/* GENERAL STYLE MODS ADDED IN 1.1.0 */
.esg-filter-wrapper .esg-filterbutton:last-child,
.esg-cartbutton a,
.esg-selected-filterbutton {
	margin-right: 0 !important;
}

.esg-singlefilters .esg-filter-checked {
	display: none !important
}

/*****************************************
	-	AJAX LOADED CONTENT STYLING	-
*****************************************/
.eg-ajaxclicklistener {
	cursor: pointer
}

.eg-ajax-video-container {
	position: relative;
	padding-bottom: 56.25%;
	padding-top: 30px;
	height: 0;
	overflow: hidden;
}

.eg-ajax-video-container.widevideo {
	padding-bottom: 50%;
}

.eg-ajax-video-container iframe,
.eg-ajax-video-container object,
.eg-ajax-video-container embed {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.forcenotvisible {
	visibility: hidden !important
}

.forcenotdisplay {
	display: none !important
}

/******************************
	-	SEARCH FUNCTION	-
********************************/
input.eg-search-input[type="text"],
.eg-search-input {
	display: inline-block
}

.eg-search-submit,
.eg-search-clean {
	display: inline-block;
	width: auto;
	-moz-user-select: -moz-none;
	-khtml-user-select: none;
	-webkit-user-select: none;
	text-align: center;
	vertical-align: top
}

.eg-search-submit,
.eg-search-clean {
	cursor: pointer
}

.eg-search-wrapper {
	vertical-align: top;
	line-height: 40px;
}

input.eg-search-input[type="text"] {
	font-family: "Open Sans", sans-serif;
	outline: none !important;
	margin: 0px 0px 5px !important;
	padding: 8px 15px;
	vertical-align: top;
	box-sizing: border-box
}

/*****************************************
	-	AJAX NAVIGATION BUTTON STYLING	-
*****************************************/
.eg-ajax-closer-wrapper {
	display: block;
	z-index: 51000;
	position: relative
}

.eg-ajax-navbt {
	cursor: pointer;
	display: inline-block;
	margin-right: 5px;
}

.eg-acp-inner.eg-acp-tr .eg-ajax-closer.eg-ajax-navbt,
.eg-acp-inner.eg-acp-br .eg-ajax-closer.eg-ajax-navbt {
	margin-right: 0px
}


.eg-ajax-closer-wrapper.eg-acp-tl,
.eg-ajax-closer-wrapper.eg-acp-bl {
	text-align: left;
}

.eg-ajax-closer-wrapper.eg-acp-tr,
.eg-ajax-closer-wrapper.eg-acp-br {
	text-align: right;
}

.eg-ajax-closer-wrapper.eg-acp-t,
.eg-ajax-closer-wrapper.eg-acp-b {
	text-align: center;
}

.eg-ajax-closer-wrapper.eg-acp-t,
.eg-ajax-closer-wrapper.eg-acp-tr,
.eg-ajax-closer-wrapper.eg-acp-tl {
	margin-bottom: 5px;
}

.eg-ajax-closer-wrapper.eg-acp-bl,
.eg-ajax-closer-wrapper.eg-acp-br,
.eg-ajax-closer-wrapper.eg-acp-b {
	margin-top: 5px;
}

.eg-acp-inner {
	display: block;
	position: absolute;
	z-index: 50;
	margin: 5px;
}

.eg-acp-inner.eg-acp-tr,
.eg-acp-inner.eg-acp-tl,
.eg-acp-inner.eg-acp-t {
	top: 0px;
}

.eg-acp-inner.eg-acp-br,
.eg-acp-inner.eg-acp-bl,
.eg-acp-inner.eg-acp-b {
	bottom: 0px;
}

.eg-acp-inner.eg-acp-tl,
.eg-acp-inner.eg-acp-bl {
	left: 0px;
}

.eg-acp-inner.eg-acp-tr,
.eg-acp-inner.eg-acp-br {
	right: 0px;
}

.eg-acp-inner.eg-acp-t,
.eg-acp-inner.eg-acp-b {
	left: 50%;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
	-moz-transform: translateX(-50%);
}

.eg-ajax-navbt {
	line-height: 21px;
	background: #000;
	background: rgba(0, 0, 0, 0.75);
	color: #fff;
	border-radius: 2px;
	-moz-border-radius: 2px;
	-webkit-border-radius: 2px;
	text-transform: uppercase;
	padding: 1px 1px 0px 0px;
	font-size: 11px;
	font-weight: 400;
}

.eg-ajax-closer.eg-ajax-navbt {
	padding: 1px 5px 1px 3px;
	vertical-align: top;
}

.eg-acp-light .eg-ajax-navbt {
	background: #e5e5e5;
	color: #000;
}

.eg-ajax-closer.eg-ajax-navbt i {
	font-size: 13px;
}

.eg-ajax-navbt i {
	font-size: 16px;
}

.eg-ajax-closer-wrapper.eg-acp-type1 {
	margin: 0;
}

.eg-acp-type1 .eg-ajax-navbt {
	border-radius: 0px;
	-moz-border-radius: 0px;
	-webkit-border-radius: 0px;
	padding: 10px;
	margin: 0px;
}

.eg-acp-type1 .eg-ajax-navbt i {
	font-size: 20px;
}

.eg-acp-type1 .eg-ajax-navbt {
	width: 40px;
	height: 40px;
	text-align: center;
	vertical-align: medium !important;
	line-height: 40px;
	padding: 0px;
}

.eg-acp-type1 .eg-ajax-closer.eg-ajax-navbt {
	vertical-align: top;
	font-size: 24px;
	font-weight: 300;
	font-family: sans-serif;
	height: auto;
	line-height: 28px;
	padding: 8px 0px 4px;
}

span.eg-el-amount:before {
	content: "("
}

span.eg-el-amount:after {
	content: ")"
}

span.eg-el-amount {
	margin-left: 10px;
}
.esg-dropdown-wrapper span.eg-el-amount {
	margin-left: 5px;
}


/****************************************
	-	2.1.6 SPLIT CONTENT FEATURE  -
*****************************************/
.esg-split-content .esg-entry-media-wrapper, .esg-split-content .esg-entry-cover {
	width: 50% !important
}

.esg-split-content .esg-media-cover-wrapper:after {
	content: "";
	display: table;
	clear: both
}

.esg-split-right .esg-entry-media-wrapper, .esg-split-right .esg-entry-cover {
	float: right
}

.esg-split-left .esg-entry-media-wrapper, .esg-split-left .esg-entry-cover {
	float: left
}

.esg-split-content .esg-entry-media {
	height: 100% !important
}

.esg-split-content .esg-entry-cover {
	position: relative !important
}

.esg-split-content .esg-entry-content {
	clear: both
}

/*
2.1.6
Blur and Grayscale filters
*/
.grayscale {
	-webkit-filter: grayscale(100%);
	filter: grayscale(100%)
}

/* 2.1.6.2 */
/* 2.2.5 */
.esg-revealed .esg-itm-anime:not(.esg-anime-blur) .esg-overflowtrick {
	overflow: visible !important
}

.esg-revealed .esg-itm-anime .tp-esg-item {
	-webkit-mask-image: none !important
}

.esg-revealed .esg-itm-anime .tp-esg-item:hover {
	z-index: 9999 !important;
	transform: none !important
}

.esg-revealed .esg-anime-item:before {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	content: "";
}

/* 2.2 */
.eg-invisiblebutton {
	box-shadow: none !important;
	height: inherit !important;
	display: block !important;
}
.esg-media-cover-wrapper > .eg-invisiblebutton {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
}
.esg-entry-cover > .eg-invisiblebutton {
	position: relative;
	z-index: 1;
}

.esg-lb-dummy {
	max-width: none !important;
	box-shadow: none !important;
	position: absolute;
	display: none
}

/* post content layout */
@media screen and (max-width: 736px) {
	.eg-lightbox-post-content-inner > div {
		width: 100% !important;
		float: none !important;
	}

	.eg-lightbox-post-content-inner .esg-post-featured-img {
		padding: 30px 0 !important;
	}
}

.esgbox-stage .esgbox-slide > *:not(.esgbox-share) {
	margin: 0;
	padding: 0
}

.esgbox-stage .esgbox-slide > .esgbox-loading {
	margin-top: -30px;
	margin-left: -30px
}

.esgbox-toolbar .esgbox-button {
	transition: background 0.2s ease-out
}

.esgbox-toolbar .esgbox-button:focus,
.esgbox-toolbar .esgbox-button:active,
.esgbox-toolbar .esgbox-button:visited {
	background: rgba(30, 30, 30, .6)
}

.esgbox-toolbar .esgbox-button:hover {
	background: #000
}

.esgbox-navigation .esgbox-button:before {
	transition: background 0.2s ease-out
}

.esgbox-navigation .esgbox-button:focus:before,
.esgbox-navigation .esgbox-button:active:before,
.esgbox-navigation .esgbox-button:visited:before,
.esgbox-navigation .esgbox-button[disabled]:hover:before,
.esgbox-toolbar .esgbox-button[disabled]:hover {
	background: rgba(0, 0, 0, .6)
}

.esgbox-navigation .esgbox-button:hover:before {
	background: rgba(0, 0, 0, .6)
}

.esgbox-hidearrows .esgbox-navigation .esgbox-button--arrow_left,
.esgbox-hidearrows .esgbox-navigation .esgbox-button--arrow_right {
	display: none !important
}

.esgbox-single .esgbox-button--arrow_left,
.esgbox-single .esgbox-button--arrow_right {
	display: none !important
}

.esgbox-slide--video iframe {
	width: 100% !important;
	height: 100% !important;
	max-width: 100%;
	max-height: 100%;
}

.esg-four-by-three .esgbox-slide--video iframe {
	width: 800px;
	height: 600px;
}

.esgbox-container .esgbox-button--arrow_right:hover,
.esgbox-container .esgbox-button--arrow_right:focus,
.esgbox-container .esgbox-button--arrow_left:hover,
.esgbox-container .esgbox-button--arrow_left:focus {
	background: rgba(0, 0, 0, .6)
}

/* 2.2.5 */
.esg-filter-wrapper {
	visibility: hidden
}

#eg-elements-container-grid-wrap.eg-startheight {
	height: 351px;
}

.esg-mobile-filter-button {
	display: none
}
.esg-filter-wrapper.dropdownstyle .esg-mobile-filter-button {
	display: inline-block;
}

.esg-mobile-filter-wrap {
	visibility: visible
}

.esg-mobile-filter-wrap .esg-dropdown-wrapper {
	display: none !important;
	visibility: hidden !important
}

/* 2.2.3 */
.eg-esgblankskin-wrapper * {
	visibility: hidden !important
}

/* 2.2.6 */
.eg-item-in-focus {
	z-index: 999 !important
}

/* 2.2.6 */
.esg-cover-overflow {
	overflow: hidden
}

/* collapses */
.esg-transition[data-transition^='esg-collapse'] {
	overflow: hidden
}

.esg-transition[data-transition^='esg-collapse']:before,
.esg-transition[data-transition^='esg-collapse']:after {
	position: absolute;
	content: ""
}

.esg-transition[data-transition^='esg-collapsevertical']:before,
.esg-transition[data-transition^='esg-collapsevertical']:after {
	width: 100%;
	height: 0%;
	left: 0
}

.esg-transition[data-transition^='esg-collapsevertical']:before {
	top: 0
}

.esg-transition[data-transition^='esg-collapsevertical']:after {
	bottom: 0
}

.esg-transition[data-transition='esg-collapseverticalout']:before,
.esg-transition[data-transition='esg-collapseverticalout']:after {
	height: 50%
}

.esg-transition[data-transition^='esg-collapsehorizontal']:before,
.esg-transition[data-transition^='esg-collapsehorizontal']:after {
	width: 0%;
	height: 100%;
	top: 0
}

.esg-transition[data-transition^='esg-collapsehorizontal']:before {
	left: 0
}

.esg-transition[data-transition^='esg-collapsehorizontal']:after {
	right: 0
}

.esg-transition[data-transition='esg-collapsehorizontalout']:before {
	width: 50%
}

.esg-transition[data-transition='esg-collapsehorizontalout']:after {
	width: 50%
}

.esg-hovered .esg-transition[data-transition="esg-collapsevertical"]:before,
.esg-hovered .esg-transition[data-transition="esg-collapsevertical"]:after {
	height: 50%
}

.esg-hovered .esg-transition[data-transition="esg-collapseverticalout"]:before,
.esg-hovered .esg-transition[data-transition="esg-collapseverticalout"]:after {
	height: 0
}

.esg-hovered .esg-transition[data-transition="esg-collapsehorizontal"]:before,
.esg-hovered .esg-transition[data-transition="esg-collapsehorizontal"]:after {
	width: 50%
}

.esg-hovered .esg-transition[data-transition="esg-collapsehorizontalout"]:before,
.esg-hovered .esg-transition[data-transition="esg-collapsehorizontalout"]:after {
	width: 0
}

/* lines */
.esg-transition[data-transition^="esg-line"]:after {
	content: "";
	position: absolute;
	width: 70%;
	height: 70%;
	top: 15%;
	left: 15%;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-position: center center;
}

.esg-transition[data-transition="esg-linediagonal"]:after,
.esg-transition[data-transition="esg-linehorizontal"]:after,
.esg-transition[data-transition="esg-linevertical"]:after {
	transform: scale(0)
}

.esg-hovered .esg-transition[data-transition^="esg-line"]:after {
	transform: scale(1)
}

.esg-hovered .esg-transition[data-transition="esg-linediagonalout"]:after,
.esg-hovered .esg-transition[data-transition="esg-linehorizontalout"]:after,
.esg-hovered .esg-transition[data-transition="esg-lineverticalout"]:after {
	transform: scale(0)
}

/* spiral */
.esg-transition[data-transition^="esg-spiral"]:after {
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	padding-bottom: 100%;
	background-size: contain;
	background-repeat: no-repeat;
	transform-origin: center;
	transform: translate(-50%, -50%) rotate(0deg) scale(0);
}

.esg-transition[data-transition="esg-spiralzoomout"]:after {
	transform: translate(-50%, -50%) rotate(-300deg) scale(3)
}

.esg-hovered .esg-transition[data-transition="esg-spiralzoom"]:after {
	transform: translate(-50%, -50%) rotate(-300deg) scale(3)
}

.esg-hovered .esg-transition[data-transition="esg-spiralzoomout"]:after {
	transform: translate(-50%, -50%) rotate(0deg) scale(0)
}

/* circle */
.esg-transition[data-transition^="esg-circlezoom"]:before,
.esg-transition[data-transition^="esg-circlezoom"]:after {
	content: "";
	position: absolute;
	width: 150%;
	height: 150%;
	padding-bottom: 150%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) scale(0, 0);
	border-radius: 50%;
	box-sizing: border-box;
}

.esg-transition[data-transition="esg-circlezoomout"]:before,
.esg-transition[data-transition="esg-circlezoomout"]:after {
	transform: translate(-50%, -50%) scale(1, 1)
}

.esg-hovered .esg-transition[data-transition="esg-circlezoom"]:before,
.esg-hovered .esg-transition[data-transition="esg-circlezoom"]:after {
	transform: translate(-50%, -50%) scale(1, 1)
}

.esg-hovered .esg-transition[data-transition="esg-circlezoomout"]:before,
.esg-hovered .esg-transition[data-transition="esg-circlezoomout"]:after {
	transform: translate(-50%, -50%) scale(0, 0)
}

.esg-transition[data-transition^="esg-line"]:before,
.esg-transition[data-transition^="esg-spiral"]:before {
	content: "";
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0%;
	left: 0%;
	opacity: 0;
}

.esg-transition[data-transition="esg-linediagonalout"]:before,
.esg-transition[data-transition="esg-linehorizontalout"]:before,
.esg-transition[data-transition="esg-lineverticalout"]:before,
.esg-transition[data-transition="esg-spiralzoomout"]:before {
	opacity: 1
}

.esg-hovered .esg-transition[data-transition^="esg-line"]:before,
.esg-hovered .esg-transition[data-transition="esg-spiralzoom"]:before {
	opacity: 1
}

.esg-hovered .esg-transition[data-transition="esg-linediagonalout"]:before,
.esg-hovered .esg-transition[data-transition="esg-linehorizontalout"]:before,
.esg-hovered .esg-transition[data-transition="esg-lineverticalout"]:before,
.esg-hovered .esg-transition[data-transition="esg-spiralzoomout"]:before {
	opacity: 0
}

/* new blend modes */
.esg-overlay.esg-cover-blend-multiply {
	mix-blend-mode: multiply
}

.esg-overlay.esg-cover-blend-screen {
	mix-blend-mode: screen
}

.esg-overlay.esg-cover-blend-overlay {
	mix-blend-mode: overlay
}

.esg-overlay.esg-cover-blend-darken {
	mix-blend-mode: darken
}

.esg-overlay.esg-cover-blend-lighten {
	mix-blend-mode: lighten
}

.esg-overlay.esg-cover-blend-color-dodge {
	mix-blend-mode: color-dodge
}

.esg-overlay.esg-cover-blend-color-burn {
	mix-blend-mode: color-burn
}

.esg-overlay.esg-cover-blend-hard-light {
	mix-blend-mode: hard-light
}

.esg-overlay.esg-cover-blend-soft-light {
	mix-blend-mode: soft-light
}

.esg-overlay.esg-cover-blend-difference {
	mix-blend-mode: difference
}

.esg-overlay.esg-cover-blend-exclusion {
	mix-blend-mode: exclusion
}

.esg-overlay.esg-cover-blend-hue {
	mix-blend-mode: hue
}

.esg-overlay.esg-cover-blend-saturation {
	mix-blend-mode: saturation
}

.esg-overlay.esg-cover-blend-color {
	mix-blend-mode: color
}

.esg-overlay.esg-cover-blend-luminosity {
	mix-blend-mode: luminosity
}

/* No Filters and Search in Streams */
.source_type_stream .esg-filter-wrapper {
	display: none !important;
}

/* PE7 Font for Backend Popup */
[class*=" pe-7s-"]:before {
	font-family: 'Pe-icon-7-stroke'
}


/****************************************
			GLOBAL SEARCH STYLES
*****************************************/

/* LIGHT */
#esg_search_wrapper {
	height: auto;
	left: 0;
	opacity: 0;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 20000;
}
#esg_search_wrapper .esg-filter-wrapper, #esg_search_wrapper .esg-pagination {
	margin-left: 0 !important;
}
#esg_big_search_wrapper {
	padding-top: 0;
	position: relative;
}
#esg_big_search_wrapper .bigsearchfield {
	-moz-border-bottom-colors: none !important;
	-moz-border-left-colors: none !important;
	-moz-border-right-colors: none !important;
	-moz-border-top-colors: none !important;
	background: none repeat scroll 0 0 rgba(255, 255, 255, 0) !important;
	border:none !important;
	border-bottom:2px solid #333 !important;
	color: #333 !important;
	font-size: 40px !important;
	font-weight: 700;
	line-height: 40px !important;
	padding: 0 !important;
	position: relative;
	width: 100%;
	z-index: 10;
	height:50px !important;
	border-radius:0 !important;
	-webkit-border-radius:0 !important;
	-moz-border-radius:0 !important;
}

#esg_big_search_wrapper::-ms-clear { display: none; }
#esg_big_search_wrapper .bigsearchfield::-ms-clear { display: none; }

#esg_big_search_fake_txt {
	background: none repeat scroll 0 0 rgba(255, 255,255, 0) !important;
	border: medium none !important;
	color: #333 !important;
	font-size: 40px !important;
	font-weight: 700;
	line-height: 40px !important;
	padding: 0 !important;
	position: absolute !important;
	top: 7px !important;
	width: 100%;
	z-index: 5;
	height:50px !important;
}
.esg_big_search_close {
	color: #333;
	cursor: pointer;
	font-size: 40px;
	font-weight: 400;
	position: absolute;
	right: 30px;
	top: 50px;
	z-index: 20;
}
.esg_searchresult_title {
	color: #333;
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 1px;
	margin-top: 30px;
	text-transform: uppercase;
}
#esg_search_bg {
	background: none repeat scroll 0 0 rgba(255, 255, 255, 0.85);
	height: 100%;
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 19999;
}
.esg_searchcontainer {
	box-sizing: border-box;
	padding: 40px;
	position: relative;
	width: 100%;
}
.esg_searchresult {
	color: #333;
	font-size: 17px;
	font-weight: 600;
	line-height: 26px;
}

/* DARK */
#esg_big_search_wrapper.dark .bigsearchfield {
	background: none repeat scroll 0 0 rgba(0, 0, 0, 0) !important;
	border-bottom:2px solid #fff !important;
	color: #fff !important;
}

.dark #esg_big_search_fake_txt {
	background: none repeat scroll 0 0 rgba(0, 0, 0, 0) !important;
	color: #fff !important;
}
.dark .esg_big_search_close {
	color: #fff;
}
.dark .esg_searchresult_title {
	color: #fff;
}
#esg_search_bg.dark {
	background: none repeat scroll 0 0 rgba(0, 0, 0, 0.85);
}
.dark .esg_searchresult {
	color: #fff;
}
