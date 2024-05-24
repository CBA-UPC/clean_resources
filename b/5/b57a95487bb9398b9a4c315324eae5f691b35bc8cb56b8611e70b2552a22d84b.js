/*
Theme Name: Alphonso
Theme URI: http://www.alphonso.tv/
Description: Custom template for the <a href="http://www.alphonso.tv/" > Alphonso</a >  site.
Version: 1.1
Author: Myrrh Larsen
Author URI: http://theinsomniacsociety.com/
Edited by: Diana Thompson, likethegoddess.com, 2019
*/

/* COLORS
Alphonso Red: #c00; 
Alphonso Yellow: #f90;
Alphonso Orange: #f60; 
Alphonso Gray: #414650; 
Light Gray: #999; 
Black: #000; 
*/

/* basic reset -ml */
html,body { margin:0; padding:0; height:100%; }
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td { margin:0; padding:0; }
table { border-collapse:collapse; border-spacing:0; }
fieldset,img { border:0; }
address,caption,cite,code,dfn,em,strong,th,var { font-style:normal; font-weight:normal; }
ol,ul { list-style:none; }
sub,sup { vertical-align:baseline; }
a { color:inherit; }
a img,:link img,:visited img { border:0; }
a:hover img { text-decoration:none!important; }
font { color: inherit !important; font: inherit !important; color: inherit !important; }
caption,th { text-align:left; }
h1,h2,h3,h4,h5,h6 { font-size:100%; font-weight:normal; }
area { outline:none; }
input,textarea,#submit { -webkit-appearance:none; -webkit-border-radius:0; -moz-appearance:none; -moz-border-radius:0; }

*, *:before, *:after {
  -moz-box-sizing:border-box;
  -webkit-box-sizing:border-box;
  box-sizing:border-box;
}

/* globals */
h1,h2 { letter-spacing: 1px; }
.clear        { clear:both; height:0; font-size: 1px; line-height: 0px; }
.left         { float:left; }
.right        { float:right; }
img.left      { margin-right:1em; margin-bottom:1.8em; }
img.right     { margin-left:1em; margin-bottom:1.8em; }
.hide{ /* Hide stuff without resorting to display:none; */
	visibility:hidden;
	width:0!important;
	height:0!important;
	line-height:0!important;
	padding:0!important;
	margin:0!important;
}
img.contain { width:100%;height:auto; }
.accessible-text {
    position: absolute !important;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0 !important;
    border: 0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden
}
.disableClick { pointer-events:none; }

.container-fluid:before, .container-fluid:after, .row:before, .row:after {
    display: table;
    content: " "
}

.container:after, .container-fluid:after, .row:after {
  clear: both
}
.container {
	margin-right: auto;
	margin-left: auto;
	padding-left: 12px;
	padding-right: 12px
}
#main .container .container {
	width: 100%; 
}

.centered { text-align:center; }
.centered.narrow { padding-left:10.4166667%; padding-right:10.4166667%; }

@media (min-width:768px) {
    .container {
        width: 744px
    }
}

@media (min-width:878px) {
    .container {
        width: 854px
    }
}

@media (min-width:992px) {
    .container {
        width: 964px
    }
}

@media (min-width:1136px) {
	.container-fluid,
    .container {
        width: 1112px
    }
}

@media (min-width:1200px) {
	.container-fluid,
    .container {
        width: 1164px
    }
}

@media (min-width:1600px) {
	.container-fluid,
    .container {
        width: 1552px
    }
}

.container-fluid {
    margin-right: auto;
    margin-left: auto;
    padding-left: 8px;
    padding-right: 8px
}

html { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }

/* site-specific styles: alphonso */
/*c00*/

body { font:300 16px/19px Montserrat, sans-serif; background-color:#fff; color:#404040; line-height:1.4em; }
body > div { font-size:1.0em; }
body > div, body > section { line-height:1.6em; }

a { color:#c00; text-decoration:none; }
a:hover { color:#f61922; }

hr { width: 80%; border:none; margin: 2em 10% /* 2.0em -4.1333% */; height:1px; color:#AEAFB0; background-color:#AEAFB0; }

hr.orange { margin-left:auto; margin-right:auto; width:4.0em; background-color:#FE621D; }
hr.gradient {
	margin:0 10% 1em /* 0 0 1.0em */;
	height:15px;
	background: rgba(255,149,0,1);
	background: -moz-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
	background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,149,0,1)), color-stop(33%, rgba(254,96,29,1)), color-stop(100%, rgba(199,0,0,1)));
	background: -webkit-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
	background: -o-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
	background: -ms-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
	background: linear-gradient(to right, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff9500', endColorstr='#c70000', GradientType=1 );
}

.identity, .red { color:#c00; }
.ltorange { color:#f90; }
.orange { color:#FE621D; }
.gray { color:#999; }
.dark { color:#434751; }
.white { color:#fff; }
.black { color:#000; }
.bg--red { background-color:#c00; }
.bg--ltorange { background-color:#f90; }
.bg--orange { background-color:#FE621D; }
.bg--gray { background-color:#999; }
.bg--dark { background-color:#434751; color:#fff; }
.bg--gradient {
background: rgba(255,149,0,1);
background: -moz-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,149,0,1)), color-stop(33%, rgba(254,96,29,1)), color-stop(100%, rgba(199,0,0,1)));
background: -webkit-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
background: -o-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
background: -ms-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
background: linear-gradient(to right, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff9500', endColorstr='#c70000', GradientType=1 );
}
section.hero {
	padding:1.825em 0.9528em;
}
section.hero.bg--red { padding-top:0.4167em; padding-bottom:0.4167em; }
section.hero.bg--flames { padding-top:2.0em; padding-bottom:2.0em; }
section.hero.bg--flames .container { max-width:52em; }
section.hero.bg--flames h1 { margin-bottom:0.25em; }
section.hero.bg--careers { padding-bottom:0.4167em; }

section.hero img.logo {
	width:3.0em;
	height:auto;
}

.bg--location-attr-banner {
	background:rgba(62,69,79,1) url('./images/bg-walkin-insights.png')no-repeat scroll center right;
	background-size:cover;
	color:#fff;
}
.bg--location-attr-banner.banner:after { background:transparent; }

.bg--local-banner {
	background:rgba(62,69,79,1) url('./images/bg-local-banner.png')no-repeat scroll center right;
	background-size:cover;
	color:#fff;
}
.bg--local-banner.banner:after { background:transparent; }

.bg--grayworld {
	background:rgba(62,69,79,1) url('./images/bg-grayworld.png') no-repeat scroll center right;
	background-size:cover;
	color:#fff;
}
.bg--grayworld.banner:after { background:transparent; }
.bg--redworld {
	position:relative;
	color:#fff;
	background:rgba(199,0,0,1);
}
.bg--gradientworld {
	/*padding:0!important;*/
	position:relative;
	color:#fff;
background: rgba(255,149,0,1);
background: -moz-linear-gradient(45deg, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 32%, rgba(199,0,0,1) 100%);
background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(255,149,0,1)), color-stop(32%, rgba(254,96,29,1)), color-stop(100%, rgba(199,0,0,1)));
background: -webkit-linear-gradient(45deg, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 32%, rgba(199,0,0,1) 100%);
background: -o-linear-gradient(45deg, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 32%, rgba(199,0,0,1) 100%);
background: -ms-linear-gradient(45deg, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 32%, rgba(199,0,0,1) 100%);
background: linear-gradient(45deg, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 32%, rgba(199,0,0,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff9500', endColorstr='#c70000', GradientType=1 );
}
.bg--redworld:after,
.bg--gradientworld:after {
	/*padding:1.825em 0.9528em;*/
	content:"";
	position:absolute;
	top:0; left:0; right:0; bottom:0;
	background:transparent url('./images/bg-gradientworld.png') no-repeat scroll bottom center;
	background-size:cover;
}
.bg--redworld div[class*='col-'],
.bg--gradientworld div[class*='col-'] { z-index:10; }
.bg--flames {
	background:rgba(197,18,6,1) url('./images/bg-flames.jpg') no-repeat scroll bottom center;
	background-size:cover;
	color:#fff;
}
.bg--careers {
	background:rgba(114,0,1,1) url('./images/bg-careers.jpg') no-repeat scroll bottom center;
	background-size:cover;
	color:#fff;
}
.bg--careers h5 {
	max-width:91.6667%;
}

.bg--legal {

}


h1 {
	font-size:2.3333em;
	font-weight:700;
	line-height:1.2em;
}
h2 {
	font-size:1.8667em;
	font-weight:500;
	line-height:1.2em;
	margin-bottom:0.5em;
}
.home h2 {
	font-size:1.4667em;
	font-weight:400;
	line-height:1.2em;
}
/*div[class*='col-'] > header > h2 { margin-top:0; }*/
h3 {
	font-size:1.3333em;
	font-weight:500;
	line-height:1.2em;
	margin:0.5em 0;
}
td[class*='col-'] h3 { line-height:1.0em; margin-bottom:0.25em; }
h3 em { font-style:oblique; }
h4 {
	font-size:1.3333em;
	font-weight:200;
	line-height:1.2em;
	text-transform:uppercase;
	color:#4D4D4D;
}
h4 strong {
	font-weight:600;
	color:#404040;
}
h5 {
	font-size:0.8667em;
	font-weight:400;
	text-transform:uppercase;
	color:#4D4D4D;
}
h6 {
	font-size:11px;
	font-weight:400;
	line-height:1.2em;
	color:#4D4D4D
}
h1 a, h2 a, h3 a { color:inherit; }
h2.quote:before,
h3.quote:before,
h4.quote:before { content:"“"; }
h2.quote:after,
h3.quote:after,
h4.quote:after { content:"”"; }

.legal h1, .legal h2, .legal h3 { font-weight:300; line-height:1.8em; }
.legal p { font-weight:200; }
.legal p strong { font-weight:400!important; }
.legal pre.important { margin-bottom:1.0em; }

/*section h1 { margin-top:0.15em; margin-bottom:0.35em; }
section h3 { margin-top:0.15em; margin-bottom:0.15em; }
section img { max-width:100%; height:auto; }
section p, section ul { margin-top:0.15em; margin-bottom:1.0em; }
section p.italics { font-style:oblique; }
section p.padded { padding:1.875em 0; }
section ul { list-style: disc outside none; padding-left:1.25em; }
section ul li { margin-bottom:0.55em; }
section ul.indent { margin:1.0em 2.4rem; }
section a.indent { margin-left: 2.4rem; }
section .recent-post-date,
section a.link,
section ul.links li a { font-size:0.68em; text-transform:uppercase; letter-spacing:0.1047em; white-space:nowrap; }*/


/* banner area styles */
.banner { border-width:1px 0; border-style:solid; border-color:rgba(0,0,0,0.08); }
section.hero:first-child { border-width:1px 0 0; border-style:solid; border-color:rgba(0,0,0,0.08); } 
.home .banner:after { content:""; display:block; height:1px; background-color:rgba(0,0,0,0.16); margin:0; }
.banner.whitebg { background-color:#fff; }
#hero + .banner { border-top-width:0; }
.page-id-55 .banner { display:none; } /* suppress CTA banner on contact page */
#master > .banner.bg--red:last-child { display: none; }
/* end banner area styles */

.banner h1 { font-weight:500; line-height:1.0em; margin:0 0 0.25em; }
.banner h2 { font-weight:500; line-height:1.0em; }
.banner h3 { font-weight:300; line-height:1.4em; margin:0.75em 0; max-width:80%; }
.banner.hero h2 { font-weight:600; line-height:1.2em; margin:0; }
.hero.bg--red h2 { margin-top:0.75em; margin-bottom:0.5em; }
.banner.hero h5 { line-height:1.8em; margin:0.75em auto; }
.hero ul { margin:0.5em 0; }
.hero.bg--red p,
.hero.bg--red li { line-height:1.2em; }
.hero ul li { margin:0.75em 0; }
.banner td[class*='col-'] p { font-weight:300; }

.banner div.anim { margin-top:1.5em; }
.banner .anim.revealed > img,
.anim > img,
.anim.revealed > img { display:none; }
.banner .anim.revealed .anim_wrapper { margin:0 auto; }
.anim .anim_wrapper { height:50px; overflow:hidden; }
/*.anim.revealed .anim_wrapper { width:36px; height:50px; overflow:hidden; }*/
.anim3.revealed .anim_wrapper { width:24px; }
.anim4.revealed .anim_wrapper { width:36px; }
.anim5.revealed .anim_wrapper { width:44px; }
.anim6.revealed .anim_wrapper { width:52px; }
.anim7.revealed .anim_wrapper { width:60px; }
.anim8.revealed .anim_wrapper { width:72px; }
.anim .anim_wrapper canvas { width:240px; height:120px; }

.banner h4.quote {
	text-transform:none;
	max-width:72%;
	margin:0 auto;
	font-weight:300;
	font-size:1.375rem;
	line-height:1.4em;
}
.banner .citation {
	max-width:67%;
	font-size:.875rem;
	text-align:center;
	margin:1.0em auto;
}
.banner .citation h5,
.banner .citation h6 {
	margin:0;
	line-height:1.0em;
}
.banner .citation .company {
	font-size:1.9286em;
	font-weight:200;
	margin:0.25em 0;
}
.banner .citation .person {
	font-size:1.0em;
	font-weight:200;
	margin-bottom:0.5em;
	white-space:nowrap;
}
.banner .citation .title {
	display:none;
	font-size:1.0em;
	font-weight:200;
}
@media screen and (min-width: 512px) {
	.banner .citation .title { display:block; }
}
@media screen and (min-width: 960px) {
  .banner .citation .company {
	font-size:1.5em;
  }
  .banner .citation .person {
	font-size:1.1667em;
  }
  .banner .citation .title {
	font-size:1.1667em;
  }
}

header { position:relative; width:100%; }
header.alignleft { text-align:left; }
header.aligncenter { text-align:center; }
header.alignright { text-align:right; }

/* cta link styles */
a.cta {
	display:block;
	font-size:0.8em;
	font-weight:400;
	line-height:1.4em;
	letter-spacing:0.0954em;
	text-transform:uppercase;
}
a.cta:after {
	content:" > ";
	margin-left:0.35em;
}

/* button styles */
.wpcf7-submit,
input[type="submit"],
.button {
	display:inline-block;
	width:auto!important;
	font-size:0.8em;
	font-weight:normal;
	line-height:1.4em;
	letter-spacing:0.0954em;
	padding:6px 36px!important;
	margin-top:0.5em;
	color:#FFF;
	border:1px solid #c00;
	background-color:rgba(204,0,0,0.85);
	text-transform:uppercase;
		-webkit-transition: 0.3s;
		transition: 0.3s;
}
.wpcf7-submit:hover, .wpcf7-submit:active,
input[type="submit"]:hover,
input[type="submit"]:active,
.button:hover,
.button:active {
	/*background-color:rgba(153,51,51,1);*/
	background-color:rgba(255,102,0,1);
	border-color:rgb(204,82,0);
	text-decoration:none;
	color:#fff;
}

.section-red .button,
.bg--home1 .button,
.bg--home4 .button,
.bg--red .button {
	background-color:#fff;
	color:#CC0500;
}
.section-red .button:hover,
.bg--home1 .button:hover,
.bg--home4 .button:hover,
.bg--red .button:hover,
.section-red .button:active,
.bg--home1 .button:active,
.bg--home4 .button:active,
.bg--red .button:active {
	background-color:#CC0500;
	color:#fff;
	border-color:#fff;
}

.black.carousel-caption .button:hover,
.black.carousel-caption .button:active {
	background-color:#fff;
	color:#cc0500;
	border-color:#fff;
}

.bg--home1 .button,
.bg--home4 .button { border-width:0; }
.white .button {
	background-color:#fff;
	color:#CC0500;
}
.white .button:active,
.white .button:active {
	background-color:#CC0500;
	color:#fff;
	border-color:#fff;
}
/* end button styles */

/* video link styles */

.video-wrapper { position:relative; }
.video-wrapper:after {
	content: "";
	pointer-events: none;
	position:absolute;
	top:0; left:0;
	bottom:0; right:0;
    background-image: url("./images/icon-video-play.svg"), linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.4) 100%);
    background-size: 45px 45px, auto auto;
    background-repeat: no-repeat, repeat;
    background-position: center, center
}
.video-wrapper:hover:after {
    background-image: url("./images/icon-video-play.svg"), linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%);
}

.image-wrapper {
	display:block!important;
}

.wp-video { max-width:100%; }

.embed-wrapper {
	padding-bottom: 56.25%;
	padding-top: 0px;
	height: 0;
	overflow: hidden;
}
.embed-wrapper iframe,  
.embed-wrapper object,  
.embed-wrapper embed {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.row img, 
.row iframe, 
.row object, 
.row embed {
	max-width: 100%;
	max-height: 100%; 
}


/* end video link styles */


/* side ("hamburger") menu */

.sidemenu {
    height: 100%;
    right: -50%;
    width: 50%;
    overflow-y: auto;
    position: fixed;
    bottom:0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 6002;
    margin-top:42px;
}

.sidemenu a {
    text-decoration: none
}

.sidemenu.open {
    display: block
}

.sidemenu.closed {
    display: none
}

.sidemenu__overlay {
    background: rgba(0, 0, 0, 0.4);
    bottom: 0;
    opacity: 1;
    left: 0;
    position: fixed;
    right: 0;
    top: 42px;
    -webkit-transition: all .4s ease;
    transition: all .4s ease;
    visibility: visible;
    z-index: 6000;
}

.sidemenu__overlay.closed {
    opacity: 0;
    visibility: hidden
}

.sidemenu__menu {
    background-color:rgba(255,255,255,1);
}

.sidemenu__menu__header {
	cursor: pointer;
	display: block;
	padding: 0;
	position:relative;
	height:4.8em;
	background-color:#CC0500;
}

.sidemenu__menu__stripe {
	display:block;
	height:0.2em;
background: rgba(181,4,0,1);
background: -moz-linear-gradient(right, rgba(255,136,0,1) 0%, rgba(255,102,0,1) 49%, rgba(183,4,0,1) 88%, rgba(181,4,0,1) 100%);
background: -webkit-gradient(right top, left top, color-stop(0%, rgba(255,136,0,1)), color-stop(49%, rgba(255,102,0,1)), color-stop(88%, rgba(183,4,0,1)), color-stop(100%, rgba(181,4,0,1)));
background: -webkit-linear-gradient(right, rgba(255,136,0,1) 0%, rgba(255,102,0,1) 49%, rgba(183,4,0,1) 88%, rgba(181,4,0,1) 100%);
background: -o-linear-gradient(right, rgba(255,136,0,1) 0%, rgba(255,102,0,1) 49%, rgba(183,4,0,1) 88%, rgba(181,4,0,1) 100%);
background: -ms-linear-gradient(right, rgba(255,136,0,1) 0%, rgba(255,102,0,1) 49%, rgba(183,4,0,1) 88%, rgba(181,4,0,1) 100%);
background: linear-gradient(to left, rgba(255,136,0,1) 0%, rgba(255,102,0,1) 49%, rgba(183,4,0,1) 88%, rgba(181,4,0,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b50400', endColorstr='#ff8800', GradientType=1 );
}

.sidemenu__menu__header a.close-animation {
    -webkit-animation: rotate-close-x .5s ease;
    animation: rotate-close-x .5s ease
}

.sidemenu__menu__header .icon-logo {
	position:absolute;
	top:0; left:0; bottom:0; right:0;
	margin:0 auto;
	display:inline-block;
	width:100%;
	height:100%;
	text-align:center;
	color:#fff;
	font-size:1.0em;
	line-height:4.8em;
}

.sidemenu__menu__header .icon-close { 
	position:absolute;
	top:10px; right:20px;
	margin:0 auto;
	display:inline-block;
	width:2.0em;
	height:2.0em;
	text-align:center;
	color:#fff;
	font-size:0.7857em;
	line-height:2.0em;
	text-transform:uppercase;
	font-weight:700;
}
.icon-close:after{content:"";display:inline-block;width:12px;height:12px;background:transparent url('./images/icon-menu-close.svg') no-repeat scroll center center;background-size:cover; }

.icon-logo:after{content:"";display:inline-block;width:2.8em;height:100%;background:transparent url('./images/logo-white.svg') no-repeat scroll center center;background-size:contain; }

.sidemenu__menu__footer {
	background-color:rgba(255,255,255,1);
	height:2.4em;
}

.sidemenu__menu__section--title {
}

.sidemenu__menu__section .menu-hamburger-container {
	/*padding-bottom:4.5em;*/
	padding-bottom:16.5em;
	background: rgba(255,255,255,1);
	background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.75) 100%);
	background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0.75) 100%);
	background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0.75) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff', endColorstr='#bffff',GradientType=0 );
	background-attachment:fixed;
}

/* stupid chrome hack */
@media all and (-webkit-min-device-pixel-ratio:0) and (min-resolution: .001dpcm) {
	.sidemenu__menu__section .menu-hamburger-container {
		background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0.75) 100%);
	}
}

.sidemenu__menu__section .menu a {
	display:block;
	/*font-size: 0.7059em;
	line-height: 1.0589em;*/
	text-decoration: none;
	letter-spacing: 0.0714em;
	font-weight:normal;
	color:#aaa;
}

.sidemenu__menu__section .menu {
	font-size:0.9333em;
	padding:0.8em 1.6em;
}
.sidemenu__menu__section .menu > li {
	border-bottom:1px solid #c0c0c0;
}
.sidemenu__menu__section .menu > li:last-child {
	border-bottom-width:0;
}

.sidemenu__menu ul.menu > li > a {
	color:#aaa;
	text-transform:uppercase;
}
.sidemenu__menu ul.menu > li.menu-item-has-children > a:after {
	content:"";
	display:block;
	position:absolute;
	top:0.8125em; right:0;
	width:14px; height:14px;
	background:transparent url('./images/icon-menu-primary.svg') no-repeat scroll 0 -14px;
	background-size:14px 28px;
}
.sidemenu__menu ul.menu > li > a:hover:after {
	background-position:0 -14px;
}

.sidemenu__menu__section--title__container {
    height: 2em;
    padding: .5em 1.25em
}

.sidemenu__menu ul.menu > li,
.sidemenu__menu__section--primary--link {
    position: relative;
}

.sidemenu__menu ul.menu > li a,
.sidemenu__menu__section--primary--link a {
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	display: block;
	text-decoration: none;
	position:relative;
	-webkit-transition: none;
	transition: none;
}

.sidemenu__menu ul.menu > li > a:hover,
.sidemenu__menu__section--primary--link > a:hover,
.sidemenu__menu ul.menu > li > a:active,
.sidemenu__menu__section--primary--link > a:active {
	color: #B41E2D;
	background-color: transparent; 
}

.sidemenu__menu__section--primary--link:last-child {
    border: 0
}

.sidemenu__menu__section--primary--link.active:before {
    background: #05D0E1;
    color:#fff;
    content: "";
    height: 100%;
    position: absolute;
    width: 6px
}

.sidemenu__menu ul.menu > li > a,
.sidemenu__menu__section--primary--link__title {
	color:#414141;
	font-size:1.0em;
    line-height: 1.25em;
    font-weight: 400;
    letter-spacing:0.05em;
    margin: 0;
    padding: 0.75em 1.0em
}
.sidemenu__menu ul.menu > li > a:hover {
	color:#B41E2D;
}
.sidemenu__menu ul.menu > li ul li a {
	color:#909295;
}
.sidemenu__menu ul.menu > li li,
.sidemenu__menu__subsection--link a p {
	font-size:0.9091em;
	line-height:1.125em;
	font-weight:normal;
	margin:0;
    padding: 0.5em 1.25em
}

.sidemenu__menu ul.menu > li ul { padding:0.5em 0; margin-bottom:0.75em; }

.sidemenu__menu ul.menu > li ul li > a,
.sidemenu__menu__subsection--secondary {
	/*font-size:0.85em;*/
    padding:0 1.25em;
}

.sidemenu__menu__subsection {
	overflow:hidden;
	height:auto;
	padding-left:1.25em;
}
.sidemenu__menu__section--primary--link a.open + .sidemenu__menu__subsection {
	display:block;
	box-sizing:content-box;
	padding-top:0.5em; padding-bottom:0.5em;
	/*height:auto;*/
}

.sidemenu__menu__subsection--secondary { display:none; }
.sidemenu__menu__subsection--link a.open + .sidemenu__menu__subsection--secondary { display:block; }

.sidemenu__menu__subsection--link a > p {
	padding-left:1.0em;
}
.sidemenu__menu ul.menu > li ul li > a:hover {	color: #B41E2D; }

.sidemenu__menu ul.children li > ul.children > li > a { padding-left:56px; }
.sidemenu__menu ul.children li a + ul.children { overflow:hidden; }
.sidemenu__menu ul.children li a.open + ul.children { overflow:visible; }



.lt-ie9 .sidemenu {
    right: -23.75em;
    width: 23.75em;
}

.lt-ie9 .sidemenu__menu__close {
	cursor: pointer;
	display: block;
	padding: 4em 1em 0 0;
	position:relative;
}

.lt-ie9 .sidemenu__menu__close a {
    color: #fff;
    position: absolute
}

.lt-ie9 .sidemenu__menu__search {
    height: 6em;
}

.lt-ie9 .sidemenu__menu__search__inner {
    display: none
}

@media only screen and (min-width:48em) {
    .sidemenu {
        right: -17.2840em;
        width: 17.2840em;
    }
}

@media only screen and (min-width:75em) {
    .sidemenu {
        right: -23.0543em;
        width: 23.0543em;
    }
}

/* end side ("hamburger") menu styles */

#loginBar {
	display:none;
	background-color:rgba(255,255,255,0.94);
	position:fixed;
	top:0;
	left:0; right:0;
	padding-left:3.5%;
	padding-right:3.5%;
	height:42px;
	overflow:hidden;
	color:#c00;
	z-index:1000;
	border-bottom:1px solid #E0E0DE;
}
body.admin-bar #loginBar { top:32px; }
@media screen and (max-width:782px) {
	body.admin-bar #loginBar { top:46px; }
}
@media screen and (max-width:600px) {
	body.admin-bar #loginBar { top:0px; }
}
#loginBar.scrolled { display:block; }
#loginBar .container-fluid {
}
#loginBar .left {
	font-size:1.0em;
	width:7.6em;
	height:42px;
	line-height:42px;
	padding:0;
}
/*#loginBar .site-logo { display:none; }
#loginBar.scrolled .site-logo { display:block; }*/
#loginBar .right {
	font-size:0.6667em;
	height:42px;
	line-height:42px;
	/*border-left:1px solid #E0E0DE;*/
}
#loginBar .search {
	width:12.9%;
	border-left:1px solid #E0E0DE;
	background:transparent url('./images/icon-search.svg') no-repeat center left 8px;
	background-size:24px 24px;
	cursor:pointer;
}
#loginBar .button-menu { border:0!important; display:inline-block; background-color:transparent; font-size:20px; width:1.0em; height:1.0em; background-image:url('./images/icon-menu.svg'); background-repeat:no-repeat; background-attachment:scroll; background-position:0 0; background-size:1.0em 1.0em; margin:11px; color:#828082;
}
#loginBar .button-menu:hover { opacity:0.76; }
#loginBar .button-menu:focus {outline:0;}

a.expand { color:inherit!important; padding-right:1.2em; background:transparent url('./images/icon-expand.svg') no-repeat center right; background-size:0.8em 0.4em; }
a.expand:hover { text-decoration:underline; }

#loginBar a.expand { background-image:url('./images/icon-expand-insights.svg'); }

a.insights { text-transform:uppercase; letter-spacing: 1px }
a.insights.national, 
a.insights.local { 
	margin-right:30px; 
	height:42px;
	line-height:42px;
	padding:0 1.6em;
}
/*a.insights:after { content:" > "; margin-left:0.35em; }*/

#finial a.contact {
	display: inline-block; 
	line-height: 25px; 
	padding: 0 15px;   
	border: 2px solid #c00; 
	border-radius: 4px; 
}

#topHeader {
	/*margin-top:42px;*/
	height:4.8em;
	color:#4D4D4D;
}

#topHeader .container .row { position:relative; height:100%;  }

.header__section {
	display:inline-block;
}

#topHeader ul li {
	display:inline;
	margin-right:5px;
}
@media screen and (min-width:1140px) {
	#topHeader ul li {
		margin-right:10px;
	}
}
#topHeader .header__section--left {
	position:absolute;
	top:0; left:1.0em; bottom:0;
	display:flex;
	align-items:center;
	height:4.8em;
	width:9.6em;
}
#topHeader .header__section--center {
}
#topHeader .header__section--right {
	position:absolute;
	top:0; right:1.0em; bottom:0;
	display:flex;
	align-items:center;
	height:4.8em;
}
@media screen and (min-width:768px) {
	#topHeader .header__section--left { left:0; }
	#topHeader .header__section--right { right:0; }
}
@media screen and (min-width:992px) {
	#topHeader .button-menu {
		display: none!important; 
	}
}

.site-logo { 
	margin:0;
	width:100%;
	max-width:100%;
	min-height:36px;
	height:100%;
}
.site-logo a {
	display:block;
	background:transparent url('./images/logo.svg') no-repeat scroll center left;
	width:100%;
	height:100%;
	background-size:contain;
	text-indent:-999em; overflow:hidden;
}

#topHeader .button-menu { border:0!important; display:inline-block; background-color:transparent; font-size:26px; width:1.0em; height:1.0em; background-image:url('./images/icon-menu.svg'); background-repeat:no-repeat; background-attachment:scroll; background-position:0 0; background-size:1.0em 1.0em; margin:0.15em 0.15em; color:#828082;
}
#topHeader .button-menu:hover { opacity:0.76; }
#topHeader .button-menu:focus {outline:0;}


#nav {
	display:none;
	position:relative;
	margin:2.0em 16% 0 20%;
	height:2.4em;
	padding:0;
	overflow:visible;
	text-align:center;
}
	.menu-primary-container {
		float: left; 
		width: 65%; 
		margin-top: .125em; 
	}
	.menu-secondary-container {
		float: right; 	
		width: 30%; 
	}
	#nav ul.menu {
		list-style-type:none;
		margin:0; 
		padding:0;
		display:flex;
		flex:1 1 auto;
		flex-wrap:nowrap;
		letter-spacing: 2px; 
	}

	#nav ul#menu-secondary.menu {
		margin-left: 10%; 
	}

	#nav li { display:inline-block; flex:1 1 auto; }

	#nav ul.menu > li {
		display:inline-block;
		float:none;
		padding:8px 8px;
		font-size:0.6667em;
		font-weight:400;
		white-space:nowrap;
	}
	#nav ul.menu > li > a {
		text-transform:uppercase;
		display:block;
		color:#4d4d4d;
		line-height:2.4em;
	}
	#nav ul.menu > li:hover {
		height:auto;
		overflow:visible;
		z-index:99;
	}
	#nav ul.menu > li.current_page_item > a,
	#nav ul.menu > li:hover > a {
		/*border-bottom:2px solid #4c4d4c;
		margin-bottom:-2px;*/
	}

	#nav a {
		margin:0 auto;
		color:inherit;
		line-height:1.0589em;
		text-decoration: none;
	}

	/* Get Started button */ 
/*	#menu-item-4476 > a { on webtest */
#menu-item-6362 > a { 
	font-weight: 500; 
		color: #fff!important; 
		background-color: #c00; 
		border: 2px solid #c00; 
		border-radius: 4px; 
	}
	#menu-item-6362 > a:hover,
	#menu-item-6362 > a:focus {
		background-color: #414650; 
		border-color: #414650; 
	} 
	/* Log In button */ 
/*	#menu-item-4477 > a { on webtest */ 
	#menu-item-4831 > a {
		font-weight: 500; 
		color: #c00!important; 
		border: 2px solid #c00; 
		border-radius: 4px; 
	}
	#nav ul.menu > li#menu-item-4831.menu-item-has-children > a::after {
		display: none; 
	}
	#menu-item-4831 > a:hover, 
	#menu-item-4831 > a:hover {
		color: #c00; 
		border-color: #c00; 
	}
	#nav ul.menu > li#menu-item-4831.menu-item-has-children ul a {
		font-size: .875em; 
	}

	#nav ul.menu > li.menu-item-has-children { position:relative; }
	#nav ul.menu > li.menu-item-has-children > a:after {
		content:"";
		display:inline-block;
		width:1.2em;
		height:1.0em;
		background:transparent url('./images/icon-expand-menu.svg') no-repeat center right; background-size:0.8em 0.4em;
	}

	#nav ul.menu > li.menu-item-has-children:hover:after,
	#nav ul.menu > li.menu-item-has-children:hover > a {
		opacity:0.5;
	}

	#nav ul.menu > li.menu-item-has-children > ul {
		display:none;
		position:absolute;
		box-shadow: 1px 1px 5px #949594;
		margin-top:.9375em;
		top:.9375em; 
		font-size:1.3333em;
		background-color:#fff;
		width: 120%;
		min-height:2.5em;
		color:#444;
		/*padding-left:28%; padding-right:28%;*/
		padding-top:0.4em;
		padding-bottom:0.4em;
		align-items:center;
		justify-content:center;
	}

	#nav ul#menu-primary.menu > li.menu-item-has-children > ul {
		width:160%;
		left: 1.5em;
	}
	#nav ul#menu-secondary.menu > li.menu-item-has-children > ul {
		right:0;
		width:100%;
	}
	#nav ul.menu > li.menu-item-has-children:hover > ul {
		display:block;
	}
	#nav ul.menu > li.menu-item-has-children > ul li {
		display:block;
		white-space:normal;
		max-width:100%;
		margin:0 -1px;
		font-size:0.75em;
		text-align:left;
	}
	#nav ul.menu > li.menu-item-has-children > ul li:last-child > a {
		border-bottom-width:0;
	}
	#nav ul.menu > li.menu-item-has-children > ul li > a {
		display:block;
		font-size:1.0769em;
		line-height:1.8em;
		padding:0.5em 16px;
		border-bottom:1px solid #E0E0DE;
	}
	#nav ul#menu-secondary.menu > li.menu-item-has-children > ul li > a {
		padding:0.5em 8px;
		font-size:.8125em;
		line-height: 1.3; 
		text-align: center; 
		text-transform: uppercase; 
	}

	#nav ul#menu-primary.menu > li.menu-item-has-children > ul li > a:hover {
		color:#aaa;
	}
	#nav ul#menu-secondary.menu > li.menu-item-has-children > ul li > a:hover {
		color:#c00;
	}

@media screen and (min-width:992px) {
	#nav { 
		display:block; 
		margin: 1.625em 0 0 22%; 
	}
	#nav ul.menu > li { 
		padding:0 20px;
	}
	#nav ul#menu-secondary.menu > li { 
		padding:0; 
	}
}

#alphonsoMap {
	position:relative;
	width:100%;
	background:transparent url('./images/alphonso-locations-map.png') no-repeat scroll top center;
	background-size:contain;
}
#alphonsoMap .location {
	display:inline-block; 
	width:96%; 
	margin:2%;
	padding:0.5em 0;
	background:rgba(198,0,0,1);
/*background: rgba(255,149,0,1);
background: -moz-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,149,0,1)), color-stop(33%, rgba(254,96,29,1)), color-stop(100%, rgba(199,0,0,1)));
background: -webkit-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
background: -o-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
background: -ms-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
background: linear-gradient(to right, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff9500', endColorstr='#c70000', GradientType=1 );*/
}

@media screen and (min-width:768px) {
	#alphonsoMap .location {
		width:88%; 
		margin:2% 6%;
	}
}

#alphonsoMap .location a {
	display:block;
	font-weight:normal;
	font-size:0.75em;
	line-height:1.5em;
	color:#fff;
}
#alphonsoMap .location_metadata {
	display:block;
	/*height:33%;*/
	white-space:nowrap;
}
#alphonsoMap .location_name {
	text-transform:uppercase;
}


@media screen and (min-width:878px) {
	#alphonsoMap {
		background-image:url('./images/alphonso-locations-bg.png');
		padding-bottom:53.84%;
	}
	#alphonsoMap .location {
		position:absolute;
		text-align:center;
		width:auto;
		margin:0;
		padding:0;
		background:transparent none no-repeat scroll top left;
	}

	#alphonsoMap .location a {
		font-size:0.68em;
		line-height:1.5em;
		padding:0.75em 0.0625em;
	}

	#alphonsoMap #alphonsoLocationSF {
		left:0.4152%; right:71.0727%;
		top:41.6452%; bottom:42.0308%;
	}
	#alphonsoMap #alphonsoLocationNY {
		left:13.3564%; right:58.1315%;
		top:19.4087%; bottom:64.6530%;
	}
	#alphonsoMap #alphonsoLocationNJ {
		/*left:10.7958%; right:60.7612%;
		top:4.6272%; bottom:79.4344%;*/
		left:7.7509%; right:63.8062%;
		top:0.1542%; bottom:82.7763%;
	}
	#alphonsoMap #alphonsoLocationBLR {
		left:45.8131%; right:7.3356%;
		top:54.7558%; bottom:29.1774%;
	}
}
@media screen and (min-width:960px) {
	#alphonsoMap .location a {
		font-size:0.5em;
		line-height:1.5em;
	}
}
@media screen and (min-width:992px) {
	#alphonsoMap .location a {
		font-size:0.68em;
		line-height:1.5em;
		padding-top:0.5em;
	}
}
@media screen and (min-width:1140px) {
	#alphonsoMap .location a {
		font-size:0.72em;
		padding-top:0.75em;
	}
}


#hero { }

.page .career--list { margin:0.75em 0; list-style:none outside none; padding:0; }
.page .career--list li { font-weight:normal; font-size:0.86em; line-height:1.2em; margin-bottom:0.5em; }

.page span.secondaryList {
	display:inline-block;
	margin:0.5em 0;
	padding-left:2.5em;
}



.press-release h4 { margin-bottom:1.0em; }
.press-release .date { margin:1.0em 0; }


.news--list,
.events--list {
	margin-left:-1.5%;
	margin-right:-1.5%;
}
.news--list div[class*='col-'],
.events--list div[class*='col-'] {
/* 	flex-grow:1; flex-basis:47%; */
	border:1px solid #E8E6EB;
	position:relative;
	margin:0 1.5% 1.0em;
	padding: 0 0 9px;
}
.post-event { 
	height:10em;
	overflow: hidden; 
}

/* .news--list > div:nth-child(2n+1),
.events--list > div:nth-child(2n+1) { clear:left; } */ 
/* .news--list div.col-xs-6,
.events--list div.col-xs-6 { width:47%; } */
.news--list .headline,
.events--list .headline { 
	font-size:0.913em; 
}
.news--list .news--image,
.events--list .events--image {
	height: 4.375em; 
	background:transparent none no-repeat scroll center center;
	background-size: contain; 
	margin: 0 0 9px; 
}
@media screen and (min-width:768px) {
	.news--list .news--image img { 
		height: 4.375em; 
	}
	.post-event { 
		height:12em; 
	}
}
@media screen and (min-width:960px) {
	.news--list .news--image, 
	.post-event .events--image { 
		height: 4.625em;
	}
}
@media screen and (min-width:992px) {
	.post-event { 
		height: 13.5em; 	
	}
}

.news--list h6.date,
.events--list h6.date { font-size:.75em; padding: 0 9px; }

.news--list .box h3 { height:6.0em; overflow: hidden; }

.events--list p { margin:0 0 0.25em!important; font-size:0.75em; line-height: 1.2; }
.events--list .date,
.events--list .location, 
.events--list .event-url { font-size:0.75em; font-weight:300; padding: 0 9px 9px; }

.events--list .date, 
.events--list .location { 
	color:#434751; }
.events--list .event-url { 
	 color:#c00; }
.events--list .event-url { margin-top: 1.25em; font-weight:500; }

.news--list h3, 
.events--list h3 { font-size: 1rem; line-height: 1.2em; margin:0; padding: 0 9px; }
.news--list h3 > a,
.events--list h3 > a { color:#c00; }
.news--list h3 > a:hover,
.events--list h3 > a:hover { color:#f61922; }

@media screen and (min-width:992px) {
	.news--list .col-md-3,
	.events--list .col-md-3 { 
		width: 22%
	}
}

.news--list > div,
.events--list > div { 
	width: 47%
}
@media screen and (min-width:768px) {
	.news--list .col-sm-4,
	.events--list .col-sm-4 { 
		width: 30%
	}
}
@media screen and (min-width:992px) {
	.news--list .col-md-3,
	.events--list .col-md-3 { 
		width: 22%
	}
}

p.spaced { margin:1.6em 0; }
.padded { padding:3.75em 1.875em; }
.underline { border-bottom:1px solid #B6B5B1; }
.page.underline + .page { padding-top:1.0em; }
.leftline { border-left:1px solid #B6B5B1; }

h1.underline { padding-top:0.5em; padding-bottom:0.5em; padding-left:1.0em; margin-left:-1.0em; }
h2.underline { padding-top:0; padding-bottom:0.25em; margin-bottom:0.5em; padding-left:0.65em; margin-left:-0.65em; }

.section-gray,
.bg--gray { background-color:#e5e5e5; }
.section-red,
.bg--red { background-color:#CC0500; color:#fff; }
.bg--home4 { background-color:rgba(204,5,0,0.6); color:#fff; }

section.blog { padding-bottom:2.4em; }

section.page { overflow:hidden; }

section.page .row { width:100%; position:relative; display:inline-block; }


/*body.home #main,
#main.home { background-color:#e6e6e6; }*/
section.gray { background-color:#e6e6e6; }
section#news:before {
	content:"";
	display:block;
	width:100%;
	height:2.0em;
background: rgba(255,149,0,1);
background: -moz-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,149,0,1)), color-stop(33%, rgba(254,96,29,1)), color-stop(100%, rgba(199,0,0,1)));
background: -webkit-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
background: -o-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
background: -ms-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
background: linear-gradient(to right, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff9500', endColorstr='#c70000', GradientType=1 );
	border-top:1px solid #e0e0e0;
}
#news > .container,
#main > .container { padding-top:1.6667em; }
section.subpage { margin-top:2.3333em; }
section.subpage + section { margin-top:1.3333em; }
section > .container { position:relative; }
.subpage > .container { padding:1.6667em 0; }

body.nohero #master { padding-top:92px; }

#master section th,
#master section td { display:block; }

section.page table { width:76%; margin-left:12%; margin-right:12%; }
section.hero table { width:96%; margin-left:2%; margin-right:2%; }
section.page td.sidebar { margin-top:2.5em; }
/*section.page { font-size:0.73333em; line-height:1.3333em; }*/

td[class*='col-'] { overflow:hidden; position:relative; }
td[class*='col-'] > img { margin-top:0.8em; }

.embed-vimeo { margin-bottom:-0.5em; }
.embed-vimeo iframe { max-width:100%!important; min-height:380px; height:auto!important; height:380px; }

td cite {
	font-weight:300;
	font-size:0.8em;
	line-height:1.2em;
	padding:0.5em 1.0em;
}



@media screen and (min-width:768px) {
	section.page table { width:100%; margin:0; }
	#master section th,
	#master section td { display:table-cell; }
	section.page td.sidebar { margin-top:0; }
	td[class*='col-'] > .video-wrapper img { display:block; margin-top:1.6em; margin-bottom:0; }
	td[class*='col-'] > img { margin-top:1.6em; margin-bottom:0; }
}

#sitemap { list-style-type:square; font-weight:200; }
#sitemap li a { color:inherit; }
#sitemap li a:hover { color:#c00; }

#sitemap li ul { margin-top:1.0em; margin-left:1.0em; list-style-type:square; }
/*#sitemap .page-item-44 { margin-top:2.0em; }*/

/* Resources */ 
.resource section.page .row {
  display: table!important;
}
.resource section.page ul li {
	display: table-cell!important; 
}
.resource-boxes { padding-left:0!important; list-style:none outside none!important; }
.resource-boxes section.page .row { margin-bottom:36px!important; font-size:1.0em!important; }
.resource-boxes li .inner { position:relative; height: 23em; margin:0 1.5%; padding:0 0 2.6em; border:1px solid #E8E6EB; display:block; overflow:hidden }

.resource-boxes li.featured-case-study { 
	position:relative; 
	width: 50%; 
	margin:0 1.5%; 
	padding:0 0 2.6em; 
	border:1px solid #E8E6EB; 
	display:block; 
	overflow:hidden; 
}
@media screen and (min-width:768px) {
	.resource-boxes li.featured-case-study { 
		width: 33.333333333333333%
	}
}
@media screen and (min-width:960px) {
	.resource-boxes li.featured-case-study { 
		width: 20%
	}
}
.resource-boxes li.featured-case-study:after {
  content: "";
  display: block;
	padding-bottom: 100%;
} 

.resource-boxes li p { width:100%; margin:0; vertical-align:top; }
.resource-boxes li p:last-child { display:table-row; }
.resource-boxes li h3 { text-transform:none; color:#404040; font-size:.75em; text-shadow:none; letter-spacing:0; line-height:1.2em; margin:15px 15px 0; }
.webinar-boxes li h3 { color:#404040; font-size:.875em; font-weight:600; }
.resource-boxes li h6 { color:#807F83; text-transform:uppercase; font-size:0.7647em; letter-spacing:0.055em; margin:0 15px; }
.resource-boxes li h6.webinar_date { margin-top:1.0em; font-weight:300; }
.resource-boxes li h6.more { margin-top: 15px; }
.resource-boxes li p span { display:inline-block; padding:15px; font-size: 0.75rem; line-height: 1.4; }
.webinar-boxes li p span { font-weight:400; padding-top:0; padding-bottom:0; }
.webinar-boxes .presented { font-weight:100; letter-spacing:0.033em; }
.webinar-boxes .presented label { display:block; margin-top:1.0em; text-transform:uppercase; font-size:0.7647em; font-weight:400; letter-spacing:0.055em; }

.resource-boxes li .image { text-align: center; }

.resource-boxes li.tv-tentpole .image, 
.resource-boxes li.datasheets .image { text-align:center; margin-top: .5em /* 1.0em */; padding: 0 /* .5em 1em 1em; */; display: flex; }

.resource-boxes li.tv-tentpole .image img, 
.resource-boxes li.datasheets .image img { margin:0 auto; align-self: center; }

.resource-boxes li footer {
	position:absolute; left:0; bottom:0; width:100%; display:inline-block; height:2.4em;
	background:rgba(65,70,80,1);
	-webkit-transition: 0.3s;
	transition: 0.3s;
}
.resource-boxes li:hover footer { background-color:rgba(204,0,0,1); }
.resource-boxes li footer span { color:#fff; font-size:0.625rem; font-weight:500; margin:0 1.1em; letter-spacing:0.055em; line-height:3.75em; }
.webinar-boxes li footer span { margin-left:0.75em; }
.resource-boxes li footer .right { margin-right:1.1em; }
.resource-boxes li footer a { color:inherit; }

a.cta.resource-more { font-weight:normal; font-size:0.8421em; margin:0 4px; }

@media screen and (min-width:512px) {
}
@media screen and (min-width:768px) {
	.resource-boxes li .inner { height: 20em; line-height: 1.4}
	.resource-boxes li.tv-tentpole .inner { height:20em; }
	.resource-boxes li.tv-ad-insights .inner { height:20em; }
	.resource-boxes li.case-study .inner { height:20em; }
	.resource-boxes li.featured-case-study .inner { height:auto; }
	.resource-boxes li.video .inner { height: 20em}
	.resource-boxes li.featured-video .inner { height: 20em}
	.resource-boxes li.datasheet .inner { height: 20em; }
}
@media screen and (min-width:960px) {
	.resource-boxes li .inner { height: 20em; flex-direction: column; }
	.resource-boxes li.tv-tentpole .inner { height: 17em; margin-top: .5em }
	.resource-boxes li.tv-ad-insights .inner { height: 18em; }
	.resource-boxes li.case-study .inner { height: 20em; }
	.resource-boxes li.featured-case-study .inner { height:auto; }
	.resource-boxes li.video .inner { height: 17em; }
	.resource-boxes li.featured-video .inner { height: 17em; }
	.resource-boxes li.datasheet .inner { height: 15em; margin-top: .5em }

	.resource-boxes li.tv-tentpole .image, 
	.resource-boxes li.datasheets .image { text-align:center; margin-top:.5em; display: flex; }
	
	.resource-boxes li .image img { display: block!important; width: 100%!important; max-width:none!important; height: auto!important; max-height:none!important; margin:0 auto; }
	.resource-boxes li.tv-tentpole .image img, 
	.resource-boxes li.datasheets .image img { margin:0 auto; align-self: center; }

	.resource-boxes li footer span { line-height:4.5em; }
}

.page .personnel {
	padding-left:0;
	list-style:none outside none;
}
.personnel li {
	padding:0.65em 1.13em;
	text-align:left;
	line-height:1.4em;
}
.personnel li.col-xs-4 {
	text-align:center;
}
.personnel .personnel__image {
	width:100%;
	padding-bottom:100%;
	margin:0 auto 1.0em;
	background:transparent none no-repeat scroll center center;
	background-size:cover;
	border:2px solid #a29f9b;
}
.personnel .personnel__name {
	font-weight:400;
	color:#000;
}
.personnel .personnel__jobtitle,
.personnel .personnel__company,
.personnel .personnel__linkedin_url {
	font-weight:400;
	letter-spacing:0.0833em;
	font-size:0.8em;
}

.personnel .col-fifth:nth-child(3n+1),
.personnel .col-xs-4:nth-child(3n+1) { clear:left; }

@media screen and (min-width:768px) {
	.personnel .col-fifth:nth-child(3n+1) { clear:none; }
	.personnel .col-fifth:nth-child(5n+1) { clear:left; }
}

.partner_types.row { 
	margin-top:1.5em; 
}
.partner_types .col-xs-4 {
	width: 100%; 
	margin:1.0em 1.6667%;
	font-weight:200;
}
@media screen and (min-width:768px) {
	.partner_types .col-xs-4 {
		width:30%;
		border-right:1px solid #cfcfd4;
	}
}

.partner_types div:last-child { border-right-width:0; }
.partner_types h3 { font-weight:300; }


.partner_logos.row {
	list-style:none outside none;
	padding-left:0;
	margin:1.0em auto;
	/*width:auto!important;*/
}
.partner_logos > li {
	background:transparent none no-repeat scroll center center;
	background-size:contain;
	width:calc(100% * (1/3) - 30px - 1px);
	margin:1px 15px 20px;
	height:80px;
}

@media screen and (min-width:768px) {
	.partner_logos > li {
		width:calc(100% * (1/4) - 60px - 1px);
		margin-left:30px; margin-right:30px;
	}
	.partner_logos > li.col-fifth {
		width:calc(100% * (1/5) - 40px - 1px);
		margin:1px 20px 18px;
		height:80px;
	}
	section.page ul.partner_logos > li { margin-bottom:30px; }
}
@media screen and (min-width:960px) {
	.partner_logos.row { max-width:80%; }
}
@media screen and (min-width:1600px) {
	.partner_logos > li {
		width:calc(100% * (1/5) - 60px - 1px);
		margin-left:30px; margin-right:30px;
	}
	section.page ul.partner_logos > li { margin-bottom:60px; }
}

#grid h1 { margin-top:0.25em; }
#grid h1+h3 { font-weight:300; line-height:1.4em; }

#markets { overflow:visible; }
#markets h1 { margin-top:0.25em; }
#markets h1+h3 { font-weight:300; line-height:1.4em; }
#markets .row { position:relative; }
#markets .row > div[class*='col-'] {
	position:static;
	overflow:visible;
	border-collapse:collapse;
	border:1px solid #e0e0e0;
	height:7.5em;
}
#markets .row > div h3 {
	position:relative;
	margin:0;
	text-align:center;
	float:left;
	top:50%;
	left:50%;
	transform:translate(-50%, -50%);
	font-size:1.0em;
	line-height:1.3333em;
}
#markets .row > div ul {
	display:none;
	list-style:none outside none;
	position:absolute;
	left:12%; right:12%; top:20%;
	background-color:#fff;
	flex-wrap:wrap;
	padding:1.5em 1.0em 1.0em;
	z-index:10;
	border:2px solid #e0e0e0;
	text-align:center;
	align-items:center;
}
#markets .row > div+div+div+div+div+div+div ul {
	top:60%;
}
#markets .row > div ul header {
	text-align:left;
	position:relative;
	color:#404040;
	font-size:1.3333em;
	padding:0.75em 1.0em;
	border-bottom:2px solid #e0e0e0;
	margin-bottom:1.0em;
}
#markets .row > div ul:after {
	content:"";
	cursor:pointer;
	display:block; height:1.5em;
	border-bottom:2px solid #e0e0e0;
	position:absolute;
	top:0; left:0; right:0;
background: rgba(255,149,0,1);
background: -moz-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,149,0,1)), color-stop(33%, rgba(254,96,29,1)), color-stop(100%, rgba(199,0,0,1)));
background: -webkit-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
background: -o-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
background: -ms-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
background: linear-gradient(to right, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff9500', endColorstr='#c70000', GradientType=1 );
}
#markets .row > div ul > header:before {
	content:"";
	position:absolute;
	top:-1.1em; right:-0.55em;
	width:1.0em; height:1.0em;
	background:transparent url('./images/icon-close.svg') no-repeat scroll center center;
	z-index:10;
}
#markets .row > div ul li {
	/*flex:1 1 0;
	flex-grow:1;*/
	background:transparent none no-repeat scroll center center;
	background-size:contain;
	width:calc(100% * (1/4) - 20px - 1px);
	margin:1px 10px 5px;
	height:80px;
}
@media screen and (min-width:768px) {
	#markets .row > div ul li {
		width:calc(100% * (1/5) - 30px - 1px);
		margin:1px 15px 20px;
	}
}

#markets .row > div:hover {
	cursor:pointer;
background: rgba(255,149,0,1);
background: -moz-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,149,0,1)), color-stop(33%, rgba(254,96,29,1)), color-stop(100%, rgba(199,0,0,1)));
background: -webkit-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
background: -o-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
background: -ms-linear-gradient(left, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
background: linear-gradient(to right, rgba(255,149,0,1) 0%, rgba(254,96,29,1) 33%, rgba(199,0,0,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff9500', endColorstr='#c70000', GradientType=1 );
}
#markets .row > div ul.open {
	display:flex;
}





div.wpcf7-mail-sent-ok { border-color:#336600; }
.wpcf7-form label {
	display:block;
	font-size:0.8571em;
	margin:0.5em 0 0;
	font-weight:normal;
}
.wpcf7-form .required { color:#B41E2D; }
.wpcf7-form-control-wrap input {
	display:block;
	width:100%;
	font-size:0.8em;
	font-weight:normal;
	line-height:1.4em;
	padding:6px 10px;
	margin-right:2.0em;
	margin-bottom:0.5em;
	border:1px solid #e0e0e0;
}
.wpcf7-form-control-wrap textarea {
	display:block;
	width:100%;
	font-size:0.8em;
	font-weight:normal;
	line-height:1.4em;
	padding:6px 10px;
	margin-bottom:0.5em;
	border:1px solid #e0e0e0;
}
.wpcf7 .contact-submit { padding-left:8px; padding-right:8px; }
.wpcf7 .contact-submit .wpcf7-submit {
	float:right;
	margin-top:1.0em;
}

.wpcf7-form-control-wrap input[type="checkbox"] {
	position:absolute; top:60px; left:16px;
	width:1.0em;
	padding:10px;
	display:inline-block;
}
.wpcf7-form-control-wrap input[type="checkbox"]:checked {
	background:transparent url('./images/icon-checkbox@2x.png') no-repeat scroll center center;
	background-size:20px 20px;
}
.wpcf7-form-control-wrap select {
	-webkit-appearance:none;
	background:transparent url('./images/icon-select@2x.png') no-repeat scroll center right;
	display:block;
	width:100%;
	font-size:0.8em;
	font-weight:normal;
	line-height:1.4em;
	padding:8px 16px;
	margin-right:2.0em;
	border:0.1625em solid #bdbebf;
	border-radius:0;
}
.wpcf7-form-control-wrap ::-webkit-input-placeholder { font-size:0.86em; font-weight:200; text-transform:uppercase; letter-spacing:0.1em; color:#999; }
.wpcf7-form-control-wrap :-moz-placeholder { font-size:0.86em; font-weight:200; text-transform:uppercase; letter-spacing:0.1em; color:#999; opacity:1; }
.wpcf7-form-control-wrap ::-moz-placeholder { font-size:0.86em; font-weight:200; text-transform:uppercase; letter-spacing:0.1em; color:#999; opacity:1; }
.wpcf7-form-control-wrap :-ms-input-placeholder { font-size:0.86em; font-weight:200; text-transform:uppercase; letter-spacing:0.1em; color:#999; }




/* Original social sharing  
.sharing--social { display:inline-block; vertical-align:bottom; line-height:1.2em; }
.sharing--social li {
	display:inline-block; width:18px; height:15px; margin-left:7px;
	background:transparent url('./images/social-share.png') no-repeat scroll 0 0;
	background-size:90px 15px;
}
.sharing--social li a { display:block; text-indent:-999em; overflow:hidden; }
.sharing--social .facebook { background-position:0 0; }
.sharing--social .twitter { background-position:-18px 0; }
.sharing--social .linkedin { background-position:-36px 0; }
.sharing--social .gplus { background-position:-54px 0; }
.sharing--social .email { background-position:-72px 0; }*/


footer#footer {
	background-color:#000;
	color:#fff;
	font-size:0.6em;
	font-weight:300;
	line-height:1.8em;
}

#footer ul { list-style:none outside none; padding:0; }

@media (min-width: 768px) {
	#footer ul.menu > li, 
	.widget_insoc_social_links {
		margin-bottom: 20px; 
	}
} 

#footer .container { padding:38px 3.5% 16px; }

#footer .row { clear:both; }
#footer .row:last-child { margin-top:2.5em; }

#footer .menu {
	/* margin:0 0 0.5em; */ 
	padding:0;
	list-style-type:none;
	line-height:16px;
}
#footer .menu li {
	display:block;
	margin:0; 
	padding:0;
	font-weight:100;
	letter-spacing:0.0909em;
	text-transform:none;
}
#footer #menu-footer-cloud .menu li {
	font-size:0.9333em!important;
}
#footer .menu li a { color:inherit; }
#footer .menu li a:hover { color:#bdbdbd; }
#footer .menu li:last-child a:after { content:""; }

#footer .menu > li,
#footer h3 {
	font-size:1.3333em;
	line-height:1.8em;
	font-weight:300;
	text-transform:uppercase;
	margin:0 0 0.5em;
}
@media (max-width: 768px) {
	#footer .col-footer:first-of-type .menu > li {
		padding-top: 5px; 
		padding-right: 2%; 
		border-top: 1px solid #444;
	}
}
@media (min-width: 769px) {
	#footer .col-footer:first-of-type {
		width: 100%; 
	}
	#footer .col-footer:first-of-type .menu > li {
		width: auto; 
		padding-right: 3%;
		float: left; 
	}
}
@media (min-width: 1200px) {
	#footer .col-footer:first-of-type {
		width: 80%; 
	}
	#footer .col-footer:first-of-type .menu > li {
		padding-right: 4%;
	}
}

#footer .subfooter { text-align:center; margin-top:1.25em; font-size:0.8182em; font-weight:200; position:relative; min-height:32px; }
#footer .subfooter .menu { margin:0; }
#footer .subfooter > .menu { display:inline-block; position:absolute; bottom:0; }
#footer .subfooter .menu.theleft { text-align:left; left:0; width:50%; }
#footer .subfooter .menu.theright { text-align:right; right:0; width:50%; }
#footer .subfooter .menu li { display:inline-block; margin-left:0.8em; letter-spacing:0.0556em; text-transform: none; }
#footer .subfooter .menu li:first-child { margin-left:0; }
#footer .subfooter .menu li a:hover { color:#c00; }

#footer .social {
	display:block;
	text-align:left;
	line-height:1.2em;
	white-space:nowrap;
	margin-bottom:1.75em;
}
@media screen and (max-width:768px) {
	#footer .widget h3 {
		padding-top: 1.75em!important; 
	}
}
@media (min-width: 768px) {
	#footer .container {
		padding: 38px 16px 16px; 
	}
}

#footer .social li {
	display:inline-block; width:22px; height:22px;
	background:transparent url('./images/social-footer.png') no-repeat scroll 0 0;
	background-size:110px 22px;
	margin-left:2px;
	opacity:0.8;
}
#footer .social li:hover {
	opacity:1.0;
}

#footer .social li a { display:block; height:100%; text-indent:999em; overflow:hidden; }
#footer .social .facebook { background-position:0 0; margin-left:-5px; }
#footer .social .twitter { background-position:-22px 0; }
#footer .social .youtube { background-position:-44px 0; }
#footer .social .linkedin { background-position:-66px /* -88px 0 */; }
#footer .social .gplus { background-position:-110px 0; }

@media screen and (min-width:768px) {
	#footer .social li { width:30px; height:30px; background-size:150px 30px; }
	#footer .social .twitter { background-position:-30px 0; }
	#footer .social .youtube { background-position:-60px 0; }
	#footer .social .linkedin { background-position:-90px 0; }
	#footer .social .gplus { background-position:-120px 0; }
}
@media screen and (min-width:1200px) {
	footer#footer { font-size:0.625em; }
	#footer .subfooter .menu.theleft { width:30%; }
	#footer .subfooter .menu.theright { width:70%; }
}
@media screen and (min-width:1600px) {
	footer#footer { font-size:0.7143em; }
	#footer .subfooter .menu { padding: 0 16px!important; }
}

@media screen and (max-width:768px) {
	.resources-wrapper.row { display:block!important; margin:0 auto; max-width:62.5%; }
	.box-resources { margin-bottom:1.8em; }
}
.box-resources { font-weight:200; display:inline-block; }
.box-resources p { font-size:1.0667em; margin:0.5em 0; }
.box-resources h4 { font-weight:normal; font-size:0.8667em; }
.box-resources .widget_media_image + .widget_text { margin-top:0.85em; }




/* Alignment */
.alignleft {
	display: inline;
	float: left;
	margin-right: 1.625em;
}
.alignright {
	display: inline;
	float: right;
	margin-left: 1.625em;
}
.aligncenter {
	clear: both;
	display: block;
	margin-left: auto;
	margin-right: auto;
}

img.screenshot,
.image--screenshot {
	-webkit-box-shadow: 0px 0px 0.4em 0px rgba(128,128,128,0.75);
	-moz-box-shadow: 0px 0px 0.4em 0px rgba(128,128,128,0.75);
	box-shadow: 0px 0px 0.4em 0px rgba(128,128,128,0.75);
}


/*.post { padding:0; }
.widecontent { width:906px; }
.blogcontent { width:747px; }
.homecontent { width:620px; }
.post td { padding:5px; }
.widget strong,
.post strong { font-weight:bold; }
.widget em,
.post em { font-style:italic; }
.post ul { list-style:disc outside none; margin-left:1.12em; }
.post p img,
.thumbs img,
.wp-post-image { padding:5px; background-color:#f0f0e1; border:1px solid #bca178; margin-bottom:10px; }*/

.post .embed {
	padding:10px 12px;
	border:1px solid #cfd0d1;
}

.blogcontent article.row.underline { padding-bottom:0.5em; }

.blog-social-share > * { float: left; margin-right:12px; }
.blog-social-share > span {display: inline-block; margin-right: 12px; }
.blog-social-share .tweetbutton { margin-top:9px; height: 24px; }
.blog-social-share .IN-widget { margin-top:10px!important; }
.blog-social-share .fb_iframe_widget {margin-top: 0; margin-left: 12px;}
blog-social-share #___plusone_0 { margin-top:9px!important; }

/* .blogcontent #the_content { margin-top:1.0em; } */ 
.blogcontent #the_content .embed-wrapper,
.blogcontent #the_content p { margin-bottom:1.0em; }
.blogcontent #the_content ul { list-style:disc outside none; margin-left:1.12em; margin-bottom:1.0em; }
.blogcontent #the_content ol { list-style:decimal outside none; margin-left:1.12em; margin-bottom:1.0em; }

.blogcontent .pagination { border:1px solid rgba(0,0,0,0.16); padding:0.5em 1.0em; }
.blogcontent .pagination > h2 { display:none; }
.blogcontent .pagination .nav-links > a,
.blogcontent .pagination .nav-links > span { margin:0 0.5em; }
.blogcontent .pagination .nav-links > a.next,
.blogcontent .pagination .nav-links > a.prev { 
	font-size:0.8em;
	letter-spacing:0.0954em;
	text-transform:uppercase;
}

.postmeta { 
}
.postmeta a { text-decoration:none; }
.post .add-comment { display:block; margin-bottom:45px; }
.post .navigation { margin-top:60px; }
.post img.aligncenter { display:block; margin:10px auto; }

section.blog img { width:100%; height:auto; }
section.page img { max-width:100%; height:auto; }
section.page ul { list-style: disc outside none; padding-left:1.25em; }
section.page ul li { margin-bottom:0.75em; }

.blog a.more {
	font-weight: 500; 
}

.bulletPoint { color:#c00; margin-left:0.25em; margin-right:0.75em; }

section.page .breadcrumbs,
section.blog .breadcrumbs {
	font-size:0.7333em;
	border-top:1px solid #e0e0e0;
	padding:1.0em 0;
}
.breadcrumbs .link__toplevel a { color:inherit; }

.breadcrumbs .category { margin-left:0.8em; padding-left:0; }
.breadcrumbs ul { list-style:none outside none; display:inline; }
.breadcrumbs ul li { margin-right:1.0em; display:inline; }

#news .sidebar {
	background-color: rgba(229,229,229,0.3333);
	padding:1.0em 2.0em;
}
.sidebar.blog-sidebar {
	background-color: rgba(229,229,229,0.3333);
	padding:1.0em 1.0em 1.0em 1.5em;
}
.sidebar .widget {
	font-weight:200;
	font-size:1.0667em;
	line-height:1.4em;
	margin-bottom:2.4em;
}
.sidebar .widget h3 {
	font-weight:500;
	padding:0 0.25em 0.5em;
	margin:0.5em -0.25em;
	/*border-bottom:1px solid #e0e0e0;*/
}
.sidebar .widget ul {
	list-style:none outside none;
	padding-left:0.17em;
	/*font-size:0.8947em;*/
	font-size:0.75em;
}
.sidebar .widget ul li {
	margin-bottom:1.25em;
}
.sidebar .widget ul li a {
	display:block;
	font-weight:normal;
	line-height:1.3333em;
	margin:0.5em 0 0.5em;
}
.sidebar .widget a.more {
	font-size:0.8em;
	margin-top:1.0em;
	color:#4d4d4d;
}
.sidebar .widget a.more:hover {
	color:#c00;
}
.sidebar .widget .recent-post-date {
	color:#656568;
	font-weight:400;
}
.blog .sidebar #subscribe-email input {
	display:block;
	width:100%;
	padding:6px 6px;
	border:1px solid #e0e0e0;
}
#subscribe-submit input[type="submit"] {
	width:100%;
	font-size:0.72em;
	font-weight:normal;
	line-height:1.4em;
	letter-spacing:0.0954em;
	padding-top:5px; padding-bottom:5px;
	margin-top:0.5em;
	color:#FFF;
	border:1px solid #c00;
	background-color:rgba(204,0,0,0.85);
	text-transform:uppercase;
		-webkit-transition: 0.3s;
		transition: 0.3s;
}
#subscribe-submit input[type="submit"]:hover,
#subscribe-submit input[type="submit"]:active {
	background-color:rgba(153,51,51,1);
	text-decoration:none;
	color:#fff;
}

.sidebar .mktoForm { width:auto!important; }
.sidebar .mktoFormCol { float:none!important; }
.sidebar .mktoForm .mktoFieldWrap { width:80%; }
.sidebar .mktoFieldWrap label { width:auto!important; margin-top:0.25em; margin-bottom:0.25em; }
.sidebar .mktoFieldWrap input,
.sidebar .mktoFieldWrap select,
.sidebar .mktoFieldWrap textarea { width:100%!important; }

.sidebar .recent-post-date,
.insoc-recent-post .recent-post-date {
	display:block;
	font-size:0.8667em;
	line-height:1.0em;
}


section.blog article, section.blog article > div {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
	flex:1 1 auto;
}

section.blog article {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
	flex:1 1 auto;
	flex-direction: column;  
}

section.blog article .col-xs-6 {
	width: 100%
}

@media screen and (min-width:992px) {
	section.blog article {
		flex-direction: row;  
	}
	section.blog article .col-xs-6 {
		width: 50%
	}
} 

section.blog .inner {
	max-width:100%;
	margin-bottom: 20px; 
}

section.blog article > div:last-child {
	display:flex;
	align-items:center;
}
section.blog article > div:last-child .inner {
	display:inline-block;
}

.blog h3 { font-size:1.25rem; }
.single .blog h3 { font-size:1.5rem; }

@media screen and (min-width:992px) {
	.single .blog h3 { font-size:1.75rem; }
}

section.blog .excerpt {
	font-size: .875rem;
	line-height: 1.4;  
	font-weight:200; 
}
article .inner .postmeta {
	align-items:stretch;
	position:relative;
	padding: 0 0 0.75em;
}
.postmeta .avatar {
	position:absolute;
	top:0.5em; left:0; bottom:0.5em;
	padding:4px;
	height:2.0em;
	width:2.0em;
	/*margin-right:1.0em;*/
}
.postmeta .avatar > img {
	position:absolute;top:0;left:0;
	border-radius:1.0em;
}
.postmeta h6 {
	line-height:1.4em;
}

section .addtoany_header {
	display:inline;
	text-transform:uppercase;
	font-size:0.9em;
	color:#336600;
	margin-right:1.0em;
}

/* Social sharing plugin */ 
.heateor_sss_sharing_container {
	margin-bottom: 0; 
}
.blogcontent #the_content ul {
	float: right!important; 
	margin-right: .5em!important; 
}
ul.heateor_sss_follow_ul li.heateorSssSharingRound, 
ul.heateor_sss_sharing_ul li.heateorSssSharingRound {
	margin-right: .1em!important; 
}
div.heateor_sss_horizontal_sharing li.heateor_sss_facebook_like {
	width: 52px!important;
	margin-left: .25em!important;  
}
.heateorSssSharingRound:last-of-type {
	display: none; 
}

.page p,
.post p { margin-bottom:1em; }
article em,
.page p em,
.post p em { font-style:italic; }
article strong,
.page p strong,
.page td strong,
.page .respReq,
.post p strong { font-weight:bold; }

.page ul.respReq { list-style:none outside none; margin-bottom:1.0em; }
.page .respReq li {
	position:relative;
	display:inline-block;
	width:100%;
	font-weight:300;
	list-style-type:none;
	margin-bottom:0.25em;
}
.page .respReq li:before {
	content: "● ";
	position:absolute;
	left:-1.0em;
	color:#c00;
}

.page td p { font-size:0.9333em; line-height:1.6em; }

/* Media Activation page */ 
.page-id-3802 .col-sm-4 {
	padding-left: 1em; 
	padding-right: 1em; 
}

#content ol.commentlist { list-style-type:none; }

#miniform { white-space:nowrap; }
#miniform input {
	display:inline-block;
	border:1px solid #c00;
	height:2.86em;
	padding-left:8px;
	padding-right:8px;
}
#miniform input.email { width:60%; }
#miniform #submit {
	font-size:0.62em;
	max-width:40%;
	background-color:#c00;
	color:#fff;
	text-transform:uppercase;
}
#miniform #submit:hover {
	background-color:#fff;
	color:#c00;
}

#comments, #respond {padding:1.0em 0 1.5em 0;clear:both;}
#respond .comment-notes { margin:0 0 1.0em; font-size:0.75em; }
#email-notes { display:block; }
#commentform label { float:left; clear:both; width:8.5em; text-align:right; padding-right:1.25em; font-weight:200; }
#commentform > p {
	position:relative;
	display:inline-block;
	width:100%;
	font-size:1.0em;
	height:auto;
}
#commentform input[type="text"],
#commentform input[type="email"],
#commentform textarea {
	float:left;
	width:calc(100% - 10em);
	font-size:1.0em;
	padding:6px 2px;
	border-width:0;
}
#commentform .comment-form-comment { height:5.5em; }
#commentform textarea { height:5.0em; }
#commentform .form-submit,
#commentform .comment-subscription-form { clear:both; text-align:right; }
#commentform .comment-subscription-form label { float:none; width:auto; padding:0; }

.commentlist {margin:10px 0px;padding-left:20px;line-height:130%;}
.commentlist li{padding:10px 10px 10px 10px;margin-bottom:15px;}
.commentlist .alt {background:#f2f2f2;margin-top:10px;}
.commentlist cite, .commentlist cite a, .commentlist cite a:visited {font-weight:bold;font-style:normal;color:#c00;}
.commentlist small {margin-bottom:5px;display:block;font-size:87%;}
#commentform {margin-top:10px;font-size:110%;}
#commentform p {padding:6px 0px;margin:0px;color:#222;}
#commentform label{color:#222;font-size:90%;margin:0px 0 0 10px;}

#featured table thead:after,
.clearfix:after {content:".";display:block;height:0;clear:both;visibility:hidden;}
.clearfix {display:inline-block;}
* html .clearfix {height:1%;}
.clearfix {display:block;}

/*  Grid styles
----------------------------------*/
.row {
    margin-left: -8px;
    margin-right: -8px
}
.row:after { clear:both; }
.row :last-child:after { clear:left; }

.col-footer, .col-fifth,
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2,
.col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4,
.col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5,
.col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7,
.col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9,
.col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10,
.col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12,
.col-md-12, .col-lg-12 {
    position: relative;
    min-height: 1px;
    padding-left: 8px;
    padding-right: 8px
}

.col-footer, .col-fifth,
.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6,
.col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {
    float: left
}

.col-footer {
	/*width:14.2857%*/
	padding-right:1.0em;
	width:25%
}

@media screen and (min-width:992px) {
	.col-footer {
    	font-size:75%;
    	width: 11.25%
    }
    .col-footer:last-child {
        width: 20%
    }
} 

.col-fifth {
	width:33.33333333%
}

.col-xs-12 {
    width: 100%
}

.col-xs-11 {
    width: 91.66666667%
}

.col-xs-10 {
    width: 83.33333333%
}

.col-xs-9 {
    width: 75%
}

.col-xs-8 {
    width: 66.66666667%
}

.col-xs-7 {
    width: 58.33333333%
}

.col-xs-6 {
    width: 50%
}

.col-xs-5 {
    width: 41.66666667%
}

.col-xs-4 {
    width: 33.33333333%
}

.col-xs-3 {
    width: 25%
}

.col-xs-2 {
    width: 16.66666667%
}

.col-xs-1 {
    width: 8.33333333%
}

.col-xs-pull-12 {
    right: 100%
}

.col-xs-pull-11 {
    right: 91.66666667%
}

.col-xs-pull-10 {
    right: 83.33333333%
}

.col-xs-pull-9 {
    right: 75%
}

.col-xs-pull-8 {
    right: 66.66666667%
}

.col-xs-pull-7 {
    right: 58.33333333%
}

.col-xs-pull-6 {
    right: 50%
}

.col-xs-pull-5 {
    right: 41.66666667%
}

.col-xs-pull-4 {
    right: 33.33333333%
}

.col-xs-pull-3 {
    right: 25%
}

.col-xs-pull-2 {
    right: 16.66666667%
}

.col-xs-pull-1 {
    right: 8.33333333%
}

.col-xs-pull-0 {
    right: auto
}

.col-xs-push-12 {
    left: 100%
}

.col-xs-push-11 {
    left: 91.66666667%
}

.col-xs-push-10 {
    left: 83.33333333%
}

.col-xs-push-9 {
    left: 75%
}

.col-xs-push-8 {
    left: 66.66666667%
}

.col-xs-push-7 {
    left: 58.33333333%
}

.col-xs-push-6 {
    left: 50%
}

.col-xs-push-5 {
    left: 41.66666667%
}

.col-xs-push-4 {
    left: 33.33333333%
}

.col-xs-push-3 {
    left: 25%
}

.col-xs-push-2 {
    left: 16.66666667%
}

.col-xs-push-1 {
    left: 8.33333333%
}

.col-xs-push-0 {
    left: auto
}

.col-xs-offset-12 {
    margin-left: 100%
}

.col-xs-offset-11 {
    margin-left: 91.66666667%
}

.col-xs-offset-10 {
    margin-left: 83.33333333%
}

.col-xs-offset-9 {
    margin-left: 75%
}

.col-xs-offset-8 {
    margin-left: 66.66666667%
}

.col-xs-offset-7 {
    margin-left: 58.33333333%
}

.col-xs-offset-6 {
    margin-left: 50%
}

.col-xs-offset-5 {
    margin-left: 41.66666667%
}

.col-xs-offset-4 {
    margin-left: 33.33333333%
}

.col-xs-offset-3 {
    margin-left: 25%
}

.col-xs-offset-2 {
    margin-left: 16.66666667%
}

.col-xs-offset-1 {
    margin-left: 8.33333333%
}

.col-xs-offset-0 {
    margin-left: 0
}

@media (min-width:768px) {
    .panel-left {
      padding: 0 10% 0 0;
    }
    .panel-mid {
      padding: 0 5%;
    }
    .panel-right {
      padding: 0 2% 0 8%;
    }
    
    .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6,
    .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {
        float: left
    }
    
	.col-fifth {
		width:20%
	}

    .col-sm-12 {
        width: 100%
    }

    .col-sm-11 {
        width: 91.66666667%
    }

    .col-sm-10 {
        width: 83.33333333%
    }

    .col-sm-9 {
        width: 75%
    }

    .col-sm-8 {
        width: 66.66666667%
    }

    .col-sm-7 {
        width: 58.33333333%
    }

    .col-sm-6 {
        width: 50%
    }

    .col-sm-5 {
        width: 41.66666667%
    }

    .col-sm-4 {
        width: 33.33333333%
    }

    .col-sm-3 {
        width: 25%
    }

    .col-sm-2 {
        width: 16.66666667%
    }

    .col-sm-1 {
        width: 8.33333333%
    }

    .col-sm-pull-12 {
        right: 100%
    }

    .col-sm-pull-11 {
        right: 91.66666667%
    }

    .col-sm-pull-10 {
        right: 83.33333333%
    }

    .col-sm-pull-9 {
        right: 75%
    }

    .col-sm-pull-8 {
        right: 66.66666667%
    }

    .col-sm-pull-7 {
        right: 58.33333333%
    }

    .col-sm-pull-6 {
        right: 50%
    }

    .col-sm-pull-5 {
        right: 41.66666667%
    }

    .col-sm-pull-4 {
        right: 33.33333333%
    }

    .col-sm-pull-3 {
        right: 25%
    }

    .col-sm-pull-2 {
        right: 16.66666667%
    }

    .col-sm-pull-1 {
        right: 8.33333333%
    }

    .col-sm-pull-0 {
        right: auto
    }

    .col-sm-push-12 {
        left: 100%
    }

    .col-sm-push-11 {
        left: 91.66666667%
    }

    .col-sm-push-10 {
        left: 83.33333333%
    }

    .col-sm-push-9 {
        left: 75%
    }

    .col-sm-push-8 {
        left: 66.66666667%
    }

    .col-sm-push-7 {
        left: 58.33333333%
    }

    .col-sm-push-6 {
        left: 50%
    }

    .col-sm-push-5 {
        left: 41.66666667%
    }

    .col-sm-push-4 {
        left: 33.33333333%
    }

    .col-sm-push-3 {
        left: 25%
    }

    .col-sm-push-2 {
        left: 16.66666667%
    }

    .col-sm-push-1 {
        left: 8.33333333%
    }

    .col-sm-push-0 {
        left: auto
    }

    .col-sm-offset-12 {
        margin-left: 100%
    }

    .col-sm-offset-11 {
        margin-left: 91.66666667%
    }

    .col-sm-offset-10 {
        margin-left: 83.33333333%
    }

    .col-sm-offset-9 {
        margin-left: 75%
    }

    .col-sm-offset-8 {
        margin-left: 66.66666667%
    }

    .col-sm-offset-7 {
        margin-left: 58.33333333%
    }

    .col-sm-offset-6 {
        margin-left: 50%
    }

    .col-sm-offset-5 {
        margin-left: 41.66666667%
    }

    .col-sm-offset-4 {
        margin-left: 33.33333333%
    }

    .col-sm-offset-3 {
        margin-left: 25%
    }

    .col-sm-offset-2 {
        margin-left: 16.66666667%
    }

    .col-sm-offset-1 {
        margin-left: 8.33333333%
    }

    .col-sm-offset-0 {
        margin-left: 0
    }
}

@media (min-width:992px) {
    .panel-left {
      padding: 0 10% 0 0;
    }
    .panel-mid {
      padding: 0 5%;
    }
    .panel-right {
      padding: 0 2% 0 8%;
    }

    .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6,
    .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
        float: left
    }
    
    .col-md-12 {
        width: 100%
    }

    .col-md-11 {
        width: 91.66666667%
    }

    .col-md-10 {
        width: 83.33333333%
    }

    .col-md-9 {
        width: 75%
    }

    .col-md-8 {
        width: 66.66666667%
    }

    .col-md-7 {
        width: 58.33333333%
    }

    .col-md-6 {
        width: 50%
    }

    .col-md-5 {
        width: 41.66666667%
    }

    .col-md-4 {
        width: 33.33333333%
    }

    .col-md-3 {
        width: 25%
    }

    .col-md-2 {
        width: 16.66666667%
    }

    .col-md-1 {
        width: 8.33333333%
    }

    .col-md-pull-12 {
        right: 100%
    }

    .col-md-pull-11 {
        right: 91.66666667%
    }

    .col-md-pull-10 {
        right: 83.33333333%
    }

    .col-md-pull-9 {
        right: 75%
    }

    .col-md-pull-8 {
        right: 66.66666667%
    }

    .col-md-pull-7 {
        right: 58.33333333%
    }

    .col-md-pull-6 {
        right: 50%
    }

    .col-md-pull-5 {
        right: 41.66666667%
    }

    .col-md-pull-4 {
        right: 33.33333333%
    }

    .col-md-pull-3 {
        right: 25%
    }

    .col-md-pull-2 {
        right: 16.66666667%
    }

    .col-md-pull-1 {
        right: 8.33333333%
    }

    .col-md-pull-0 {
        right: auto
    }

    .col-md-push-12 {
        left: 100%
    }

    .col-md-push-11 {
        left: 91.66666667%
    }

    .col-md-push-10 {
        left: 83.33333333%
    }

    .col-md-push-9 {
        left: 75%
    }

    .col-md-push-8 {
        left: 66.66666667%
    }

    .col-md-push-7 {
        left: 58.33333333%
    }

    .col-md-push-6 {
        left: 50%
    }

    .col-md-push-5 {
        left: 41.66666667%
    }

    .col-md-push-4 {
        left: 33.33333333%
    }

    .col-md-push-3 {
        left: 25%
    }

    .col-md-push-2 {
        left: 16.66666667%
    }

    .col-md-push-1 {
        left: 8.33333333%
    }

    .col-md-push-0 {
        left: auto
    }

    .col-md-offset-12 {
        margin-left: 100%
    }

    .col-md-offset-11 {
        margin-left: 91.66666667%
    }

    .col-md-offset-10 {
        margin-left: 83.33333333%
    }

    .col-md-offset-9 {
        margin-left: 75%
    }

    .col-md-offset-8 {
        margin-left: 66.66666667%
    }

    .col-md-offset-7 {
        margin-left: 58.33333333%
    }

    .col-md-offset-6 {
        margin-left: 50%
    }

    .col-md-offset-5 {
        margin-left: 41.66666667%
    }

    .col-md-offset-4 {
        margin-left: 33.33333333%
    }

    .col-md-offset-3 {
        margin-left: 25%
    }

    .col-md-offset-2 {
        margin-left: 16.66666667%
    }

    .col-md-offset-1 {
        margin-left: 8.33333333%
    }

    .col-md-offset-0 {
        margin-left: 0
    }
}

@media (min-width:1200px) {
    .panel-left {
      padding: 0 10% 0 0;
    }
    .panel-mid {
      padding: 0 5%;
    }
    .panel-right {
      padding: 0 2% 0 8%;
    }

    .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6,
    .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {
        float: left
    }

    .col-lg-12 {
        width: 100%
    }

    .col-lg-11 {
        width: 91.66666667%
    }

    .col-lg-10 {
        width: 83.33333333%
    }

    .col-lg-9 {
        width: 75%
    }

    .col-lg-8 {
        width: 66.66666667%
    }

    .col-lg-7 {
        width: 58.33333333%
    }

    .col-lg-6 {
        width: 50%
    }

    .col-lg-5 {
        width: 41.66666667%
    }

    .col-lg-4 {
        width: 33.33333333%
    }

    .col-lg-3 {
        width: 25%
    }

    .col-lg-2 {
        width: 16.66666667%
    }

    .col-lg-1 {
        width: 8.33333333%
    }

    .col-lg-pull-12 {
        right: 100%
    }

    .col-lg-pull-11 {
        right: 91.66666667%
    }

    .col-lg-pull-10 {
        right: 83.33333333%
    }

    .col-lg-pull-9 {
        right: 75%
    }

    .col-lg-pull-8 {
        right: 66.66666667%
    }

    .col-lg-pull-7 {
        right: 58.33333333%
    }

    .col-lg-pull-6 {
        right: 50%
    }

    .col-lg-pull-5 {
        right: 41.66666667%
    }

    .col-lg-pull-4 {
        right: 33.33333333%
    }

    .col-lg-pull-3 {
        right: 25%
    }

    .col-lg-pull-2 {
        right: 16.66666667%
    }

    .col-lg-pull-1 {
        right: 8.33333333%
    }

    .col-lg-pull-0 {
        right: auto
    }

    .col-lg-push-12 {
        left: 100%
    }

    .col-lg-push-11 {
        left: 91.66666667%
    }

    .col-lg-push-10 {
        left: 83.33333333%
    }

    .col-lg-push-9 {
        left: 75%
    }

    .col-lg-push-8 {
        left: 66.66666667%
    }

    .col-lg-push-7 {
        left: 58.33333333%
    }

    .col-lg-push-6 {
        left: 50%
    }

    .col-lg-push-5 {
        left: 41.66666667%
    }

    .col-lg-push-4 {
        left: 33.33333333%
    }

    .col-lg-push-3 {
        left: 25%
    }

    .col-lg-push-2 {
        left: 16.66666667%
    }

    .col-lg-push-1 {
        left: 8.33333333%
    }

    .col-lg-push-0 {
        left: auto
    }

    .col-lg-offset-12 {
        margin-left: 100%
    }

    .col-lg-offset-11 {
        margin-left: 91.66666667%
    }

    .col-lg-offset-10 {
        margin-left: 83.33333333%
    }

    .col-lg-offset-9 {
        margin-left: 75%
    }

    .col-lg-offset-8 {
        margin-left: 66.66666667%
    }

    .col-lg-offset-7 {
        margin-left: 58.33333333%
    }

    .col-lg-offset-6 {
        margin-left: 50%
    }

    .col-lg-offset-5 {
        margin-left: 41.66666667%
    }

    .col-lg-offset-4 {
        margin-left: 33.33333333%
    }

    .col-lg-offset-3 {
        margin-left: 25%
    }

    .col-lg-offset-2 {
        margin-left: 16.66666667%
    }

    .col-lg-offset-1 {
        margin-left: 8.33333333%
    }

    .col-lg-offset-0 {
        margin-left: 0
    }
}


/* 	Flexbox for equal height within containers
----------------------------------*/
.equal, .equal > div[class*='col-'] {  
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex:1 1 auto;
}

.box {
	background-color:#fff;
}
.box header {
	padding:1.0em 2.0em; height:6.6em;
	overflow:hidden;
	background: #ff8d00; /* Old browsers */
	background: -moz-linear-gradient(30deg,  #ff8d00 0%, #fe621d 54%, #c00000 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(30deg,  #ff8d00 0%,#fe621d 54%,#c00000 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(30deg,  #ff8d00 0%,#fe621d 54%,#c00000 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff8d00', endColorstr='#c00000',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
.box header h3 {
	font-weight:600;
	margin:0;
	line-height:1.2em;
	max-width:95%;
}
.box .inner {
	padding:1.0em 2.0em 1.0em;
	height:16.5em;
	background:transparent url('./images/icon-8.svg') no-repeat scroll bottom 1.0em right 1.0em;
	background-size:2.8260em 1.4130em;
}
.box .inner p {
	margin:0 0 1.0em;
}
.box .inner .button {
	padding:6px 18px!important;
}

.content-wrapper { margin:1.8em 0; }
.hero .content-wrapper { margin:0; }
.content__body > h1 { margin-bottom:0.25em; }

@media screen and (max-width:767px) {
	.content__image.col-sm-4 { text-align:center; }
	.content__image.col-sm-4 > img { max-height:18.5em; width:auto; margin:0 auto; }
}
@media screen and (min-width:768px) {
	.box .inner { height:18.5em; }
	.box header h3 { font-size:1.0em; }

	.page .container tr,
	.content-wrapper {
		display:flex!important;
		flex:1;
	}
	tr td,
	.content-area {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
	}

	.content-area.move-last + .content-area {
		-ms-flex-order: -1;
		order: -1;
	}
	.content__body,
	.content-area.content__body {
		align-self:center;
		align-items:center;
	}

	.content__image.col-sm-4 { display:flex!important; align-items: center; }
}
@media screen and (min-width:880px) {
	.box header h3 { font-size:1.3333em; }
}
@media screen and (min-width:960px) {
	.box header h3 { font-size:1.0em; }
}
@media screen and (min-width:992px) {
	.box header h3 { font-size:1.3333em; }
}
@media screen and (max-width: 768px) {
	td[class*='col-'] {
		width:100%;
		margin-bottom:1.0em;
	}
}

/*  Bootstrap Carousel styles
----------------------------------*/

.flexslider {
  position: relative;
  padding:0;
}
.flexslider .chrome-fix { position:absolute; width:100%; height:100%; }
.flexslider .slides {
	padding-left:0!important;
	list-style:none outside none!important;
}
.slides {
  position: relative;
  width: 100%;
  margin:0;
  overflow: hidden;
}
.slides > li {
  position: relative;
  display: none;
  /*padding-top:92px;
  min-height:460px;*/
  height:302px;
  background-color:transparent;
  background-repeat:no-repeat;
  background-attachment:scroll;
  background-position:center center;
  background-size:cover;
  -webkit-transition: .6s ease-in-out left;
       -o-transition: .6s ease-in-out left;
          transition: .6s ease-in-out left;
}
.slides li canvas {
	display: none; 
/*	position:absolute; bottom:0.85em; right:0.85em;
	width:5.0em; height:2.5em;
	z-index:300; */ 
}
/*.slides > li:after {
	content:"";
	position:absolute; bottom:0.85em; right:0.85em;
	width:5.0em; height:2.5em;
	background:transparent url('./images/icon-8.svg') no-repeat scroll bottom right;
	background-size:5.0em 2.5em;
	z-index:300;
}*/
.slides > li > img,
.slides > li > a > img {
  position:relative;
  width:auto;
  height:100%;
  line-height:1;
/*  display:none; */ 
}
@media screen and (min-width: 640px) {
	.slides > li { height:424px; }
}
@media screen and (min-width: 960px) {
	.slides > li { height:auto; }
	.slides > li > img,
	.slides > li > a > img { width:100%; height:auto; }
}

.slides > .flex-active-slide > img,
.slides > .flex-active-slide > a > img,
.slides > .active,
.slides > .next,
.slides > .prev {
  display: block;
}
.flex-control-nav {
	display:block;
  z-index: 15;
  text-align:center;
  margin:0 0 0; padding:5px 0;
  text-align: center;
  list-style: none;
}
.flex-control-nav li {
  position:relative;
  display: inline-block;
  cursor:pointer;
  width:10px;
  height:10px;
  margin: 1px 0.25em;
}
.flex-control-nav li > a {
	display:block;
	position:absolute;
	top:0; bottom:0;
	width:100%;
	height:100%;
	overflow:hidden;
	text-indent:-999em;
	background-color: rgba(168, 170, 170, 1);
	border-radius:10px;
}
.flex-control-nav li > a.flex-active {
	background-color: rgba(255,134,0,1);
}
.carousel-caption {
  position:absolute;
  top:10px;
  left:0;
  display:inline-block;
  margin:0 3.5%;
  width:67%;
  z-index: 10;
  padding:3.5% 2.5%;
  text-align: left;
}
.carousel-caption.black {
  background-color:rgba(255,255,255,0.6);
}
.carousel-caption.bg--red {
  top:0;
  left:0;
  bottom:0;
  margin:0;
  width:50.75%;
  padding-top:30px;
}
.carousel-caption.bg--home1 {
  padding:7% 6%;
}
.carousel-caption.bg--home4 {
  top:10%;
  left:0;
  right:0;
  margin:0;
  padding:40px 7%;
  height:65%;
  width:100%;
  background-color:transparent;
}

.carousel-caption h1 {
	font-size:1.25em;
	line-height:1.0em;
	margin-bottom:0.5em;
}
.carousel-caption h1 br { display:none; }
.carousel-caption h4 {
	font-size:1.9286em;
	line-height:1.1em;
	margin-bottom:0.5em;
	font-weight:600;
	letter-spacing:0;
	color:inherit;
	text-transform:none;
	text-align:left;
}

.hero h5,
.carousel-caption h5 {
	margin:0 auto;
	font-size:0.75em;
	line-height:1.4em;
	margin-bottom:1.6em;
	text-transform:none;
	color:inherit;
}
.carousel-caption h1+h5 {
	margin:1.0em 0 1.0em;
	line-height:1.6em;
}
.slide-82 .carousel-caption h1+h5 {
	margin:0 0 1.0em;
}
.carousel-caption h6 {
	color:#fff;
}
.carousel-caption strong,
.carousel-caption ul.features {
	max-width:32.0em;
	font-size:1.25em;
	letter-spacing:0.04762em;
	line-height:1.2em;
	font-weight:600;
	margin:0 auto;
}
.page .carousel-caption strong {
	display:inline-block;
	max-width:30.0em;
	font-weight:600;
}
.carousel-caption ul.features > li {
	display:inline-block;
	margin:0 0.5em;
}
.carousel-caption h3 + a.cta {
	display:inline-block;
	margin-top:1.62em;
}

.slide-1313 { font-size:0.9333em; }
.slide-600 { font-size:0.8667em; }

@media screen and (min-width: 512px) {
  .carousel-caption { top:25px; width:50%; }
  .carousel-caption.bg--red { padding-top:30px; }
  .carousel-caption.bg--home1 { padding:3.5% 5%; }
  .carousel-caption h1 { font-size:1.65em; line-height:1.0em; }
  .carousel-caption h1 br { display:block; }
  .carousel-caption h5 { font-size:0.8667em; }
  .slide-886 { font-size:0.8667em; }
  .slide-1313 { font-size:0.75em; }
}
@media screen and (min-width: 640px) {
  .carousel-caption.bg--red { padding-top:60px; }
  .carousel-caption.bg--home4 { top:15%; }
  .carousel-caption.bg--home4 * { max-width:65%; }
  .slide-886 { font-size:1.1333em; }
  .slide-1313 { font-size:1.0em; }
  .slide-600 { font-size:1.0em; }
}
@media screen and (min-width: 768px) {
  .carousel-caption { top:40px; width:42.1875%; }
  .carousel-caption.bg--home1 { padding:3.5% 2.5%; }
  .carousel-caption h1 { font-size:2.0em; line-height:1.0em; }
  .carousel-caption h1+h5 { margin:1.5em 0 1.5em; }
  .hero h5,.carousel-caption h5 { font-size:1.0em; }

  .carousel-control .glyphicon-chevron-left,
  .carousel-control .glyphicon-chevron-right,
  .carousel-control .icon-prev,
  .carousel-control .icon-next {
    width: 30px;
    height: 30px;
    margin-top: -10px;
    font-size: 30px;
  }
  .carousel-control .glyphicon-chevron-left,
  .carousel-control .icon-prev {
    margin-left: -10px;
  }
  .carousel-control .glyphicon-chevron-right,
  .carousel-control .icon-next {
    margin-right: -10px;
  }
  .carousel-caption {
    padding-bottom: 30px;
  }
  .carousel-indicators {
    bottom: 20px;
  }
  .slide-886 { font-size:1.0em; }
  .slide-1313 { font-size:0.8667em; }
  .slide-600 { font-size:0.9333em; }
}
@media screen and (min-width: 960px) {
  .carousel-caption.bg--home1 { padding:1.75% 2.5%; }

  .carousel-inner > .item {
	background-position:top 25% center;
  }
  .carousel-caption h1 {
	margin-bottom:0.25em;
  }
  .carousel-caption h2 {
	font-size:3.8676em;
  }
  .carousel-caption h3 {
	font-size:2.9333em;
  }
  .carousel-caption h4 {
	/*font-size:2.2778em;*/
  }
  .carousel-caption h5 {
	font-size:1.0em;
	margin-bottom:1.0em;
  }
  .slide-1313 { font-size:0.8em; }
}
@media screen and (min-width: 1136px) {
  .carousel-caption.bg--red { padding-top:75px; }
  .carousel-caption.bg--home1 { padding:3.5% 2.5%; }
  .carousel-caption.bg--home4 h1 { max-width:80%; }

  .carousel-caption h1 {
	font-size:2.8323em;
  }
  .carousel-caption h2 {
	font-size:4.214em;
  }
  .carousel-caption h3 {
	font-size:3.1333em;
  }
  .slide-886 { font-size:0.9333em; }
}
@media screen and (min-width: 1200px) {
  .slide-886 { font-size:1.0em; }
  .slide-1313 { font-size:0.9333em; }
}
@media screen and (min-width: 1600px) {
  .flexslider .slides > li { font-size:1.3333em; }
  .flexslider .slides .slide-1313 { font-size:1.053em; }
}

/* quick fix */ 
ul.flex-direction-nav {
	display: none!important; 
}

/* 	Responsive design styles
----------------------------------*/

@media screen and (min-width:960px) {
	body { font-size:110%; }
}
@media screen and (min-width:1140px) {
	body { font-size:115%; }
}
@media screen and (min-width:1280px) {
	body { font-size:120%; }
}


/* --- Desktop --- */
@media screen and (max-width: 1140px) {
	.container {
		max-width: 960px;
	}
}

.mobile--break { display:none; }

/* --- Tablet or mobile --- */
@media screen and (max-width: 768px) {
	.container { width: 100%; }
	.container {
		-webkit-transition: 0.3s;
		transition: 0.3s;
	}
	.hero td[class*='col-'] {
		width:100%!important;
	}
	.hero.bg--local-banner {
		background-position:center right 67%;
	}
        .hero.bg--location-attr-banner {
                background-position:center right 67%;
        }
	.hero.bg--grayworld {
		background-position:center right 67%;
	}
	
	.mobile--break { display:inline; }
	
	#footer {
		-webkit-transition: 0.3s;
		transition: 0.3s;
	}
	
	#footer .col-footer {
		float:none;
		display:block;
		width:100%;
		border-bottom:1px solid #444;
		margin:0.5em 0;
		font-size:1.25em;
	}
	#footer .col-footer:last-child {
		width:50%;
		margin:0 auto;
		border-bottom-width:0;
		padding-left:0.25em;
	}
	#footer .col-footer .menu > li > a {
		display:block;
		width:50%;
		margin:0 auto;
		background:transparent url('./images/caret-down-white.svg') no-repeat scroll center right;
	}
	#footer .col-footer .menu > li > a:hover {
		background-image:url('./images/caret-down-light.svg');
	}
	#footer .col-footer .menu .sub-menu {
		display:block;
		width:46%;
		margin:0.35em auto;
	}
	#footer .subfooter .left,
	#footer .subfooter .right {
		float:none;
		display:block;
	}
}

#cookie-law-info-bar {
	font-size: 14px; 
	line-height: 1.4;
	text-align: left;  
}
@media (min-width:768px) {
	#cookie-law-info-bar {
		font-size: 16px; 
		text-align: center;  
	}
}
#cookie-law-info-bar span {
	display: block; 
	margin: 0 auto; 
	max-width: 1000px; 
}
/* 	Small tweaks for better printing experience
----------------------------------*/
@media print {
	#content {
		width: 100%;
		margin: 30px auto 15px;
	}
	#sidebar,
	.page-header,
	.comments-link,
	.post-edit-link,
	.edit-link,
	.bottom-nav,
	#scroll-top,
	.site-navigation,
	.more-link,
	.share-post,
	#respond,
	.reply-link,
	.comment-edit-link {
		display: none;
	}
	.cat-links > a,
	.tag-links > a {
		color: #343534;
		background: #fff;
		box-shadow: 0 0 0;
		border: 0;
	}
	.cat-links:before {
		content: 'Post Categories : ';
	}
	.tag-links:before {
		content: 'Post tags : ';
	}
	.cat-links > a:after,
	.tag-links > a:after {
		content: ' ,';
	}
}

/* Sassy Social */ 
.heateor_sss_sharing_container {
	margin-right: 8px;
} 

@media (min-width: 1141px) {
	.single .heateor_sss_sharing_container {
		margin-top: -45px; 
	}
}

/* Smart Slider, Marketo Email Form */ 
#n2-ss-4 .wpcf7-form-control-wrap input {
	width: 150px; 
	font-size: .625rem;
	line-height: 1.6em;
	margin-bottom: .25em; 
	padding: 2px 5px; 
}
#n2-ss-4 .wpcf7-submit {
	font-size: .5rem;
	padding: 4px 12px !important;
}
#n2-ss-4 .wpcf7-not-valid-tip {
	height: 12px; 
	line-height: 12px; 
}
#n2-ss-4 .wpcf7-response-output {
	margin: 1em 0; 
	background-color: #fff; 
	line-height: 1.2;
}

@media screen and (min-width: 768px) {
	#n2-ss-4 .wpcf7-form-control-wrap input {
		width: 350px; 
		font-size: .875rem;
		line-height: 1.8em;
		margin-top: 1em;
		margin-bottom: .5em; 
		padding: 4px 10px; 
	}
	#n2-ss-4 .wpcf7-submit {
		font-size: .75rem;
		padding: 6px 18px !important;
	}
	#n2-ss-4 .wpcf7-not-valid-tip {
		height: 12px; 
		line-height: 12px; 
	}
}	

/* @media screen and (max-width: 767px) {
	div#n2-ss-4 .n2-ss-slider-1,
	div#n2-ss-4 .n2-ss-slide-active {
		height: 200px!important;  
	}
	div#n2-ss-4 .n2-ss-slide-active {
		margin: 20px 0 !important; 
	}
	.n2-ss-layers-container.n2-ow {
		margin: 0!important; 
	}
}

@media screen and (max-width: 1199px) {
	height: 200px
} */


/* Chat Bot structural */ 
/* Other css in Social Intents account */ 
#siWidget-chat,
.si-body {
  max-height: 450px !important; 
}
.si-body #main {
	height: 340px !important; 
}
#chatContent.sic-blocks {
  max-height: 320px !important; 
  overflow: auto; 
}
#form-chat {
  height: 340px !important;
}
