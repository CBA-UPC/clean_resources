/* Removes default CSS rules from operating system & browsers */

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

:focus {
	outline: none;
}
::-moz-focus-inner {
	border: 0;
}

/* ADD YOUR CSS BELOW THIS LINE */

#logo {
	opacity: 0;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 9;
}

.frame{
	opacity: 0
}

#video-container-0 {
    position: absolute;
    width: 728px;
	height: 90px;
    top: 0;
    left: 0;
    background-color: none;
    border: none;
    visibility: hidden;
    z-index: 1;
}

#vid{
	position:absolute;
	top: 0px;
	left: 0px;
	width: 728px;
	height: 90px;
	z-index: 1;
}

#frm1{
	position:absolute;
	top: 0px;
	left: 0px;
	width: 728px;
	height: 90px;
	z-index: 1;
}

#frm2{
	position:absolute;
	top: 0px;
	left: 0px;
	width: 728px;
	height: 90px;
	z-index: 2;
}

#frm3{
	position:absolute;
	top: 0px;
	left: 0px;
	width: 728px;
	height: 90px;
	z-index: 3;
}

#frm4{
	position:absolute;
	top: 0px;
	left: 0px;
	width: 728px;
	height: 90px;
	z-index: 4;
}

#frm5{
	position:absolute;
	top: 0px;
	left: 0px;
	width: 728px;
	height: 90px;
	z-index: 5;
}

.copy{
	opacity:0;
}

.img{
	position: absolute;
	height: auto;
	width: 728px;
}

#addImg{
	position: absolute;
	opacity: 0;
	width: 728px;
	height: 90px;
	top:0px;
	left:0px;
	z-index: 6;
}

#terms{
	opacity:0;
	position: absolute;
	top: 90px;
	left: 0px;
	width: 708px;
	height: auto;
	color: #000;
	background: #fff;
	border-top: 0px solid transparent;
	box-shadow: 0px 0px 0px 0px transparent;
    font-family: 'Font1', Arial, sans-serif;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    font-kerning: normal;
	text-rendering: optimizeLegibility;
    letter-spacing: normal;
	font-size:10px;
	text-align: left;
	line-height: 1em;
	padding: 10px;
	z-index: 2000;
	display: table-cell;
  	vertical-align: middle;
}

#termsClick{
	opacity:0;
	position: absolute;
	bottom:0px;
	width:auto;
	padding:5px;
	left: 0px;
	height:auto;
	color: #000;
    font-family: 'Font1', Arial, sans-serif;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    font-kerning: normal;
	text-rendering: optimizeLegibility;
    letter-spacing: normal;
	font-size:10px;
	text-align: left;
	line-height: 1em;
	z-index: 2010;
	cursor: pointer;
}

 .cta {
	opacity: 0;
	position: absolute;
	line-height: 1em;
	text-align: center;
	transform: translate(-50%, -50%);
	width: auto;
	z-index: 8;
  }

#exit {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	cursor: pointer;
	z-index: 1000;
}