@charset 'utf-8';

/* Reset */
html, body,
h1, h2, h3, h4, h5, h6,
div, p, blockquote, pre, address,
header,nav,aside,hgroup,footer,article,section,
ul, ol, li, dl, dt, dd,
table, caption, th, td,
form, fieldset, legend,
hr,frame {margin:0;padding:0;}
h1, h2, h3, h4, h5, h6 {font-size:100%;}
ul, ol {list-style:none;}
table {border-collapse:collapse;border-spacing:0;}
caption {text-align:left;}
img, fieldset, abbr, acronym,frameset {border:0;}
address, caption, cite, code, dfn, em, var {font-style:normal;font-weight:normal;}
q:before, q:after {content: '';}
input, select, button {font-size:11px;vertical-align:middle;}
input, button {overflow:visible;}
/* Base */
body {font-family:'돋움',Dotum,'굴림',Gulim,Helvetica,sans-serif;font-size:12px/1.4;color:#898989;letter-spacing:0em;}
hr,table caption, fieldset legend {display:none;}
img {vertical-align:top;}
a {color:#898989;text-decoration:none;}
a:focus, a:hover, a:active {text-decoration:underline;}
label,input.button, input.submit , input.image,button {cursor:pointer;}
textarea, pre {color:#898989;font-size:12px;letter-spacing:-0.05em;font-family:Dotum,돋움;overflow:auto;}
.invisible {position:absolute;width:0;height:0;overflow:hidden;visibility:hidden;font-size:0;}

/* common  */
.trandBox {position:relative; background:#fff;}
.trandBox .trandBoxIn {position:relative;width:auto;padding:5px 0;font-family:'돋움',Dotum,'굴림',Gulim,Helvetica,sans-serif;font-size:12px;letter-spacing:-1px;}
.trandBox .trandBoxIn img {vertical-align:top;}
.trandBox.useb .trandBoxIn {border-color:#aeaeaf;}

.trandBox .a_header {height:21px;margin-bottom:5px;text-align:left;zoom:1;}
.trandBox .a_header .nav {margin-top:6px;border-bottom:1px solid #d7d7d7;}
.trandBox .a_header .nav a {position:absolute;top:3px;right:0;width:53px;}
.trandBox .a_header .nav a img {width:53px;}

.trandBox .a_body ul {width:100%;list-style:none;overflow:hidden;zoom:1;margin:0;}
.trandBox .a_body li {position:relative;float:left;width:150px;height:182px;padding:5px 0;text-align:center;overflow:hidden;}
/* .trandBox .a_body li {position:relative;float:left;width:152px;height:182px;padding:5px;text-align:center;overflow:hidden;} */
.trandBox .a_body li.last {float:right;width:auto;*clear:both;}

.trandBox .trand_item {display:block;position:relative;z-index:100;overflow:hidden;width:152px;height:182px;margin:0 auto;font-family:'돋움',Dotum,'굴림',Gulim,Helvetica,sans-serif;font-size:12px;letter-spacing:-1px;color:#000;text-decoration:none;text-align:left;zoom:1;}
.trandBox .trand_item * {cursor:pointer;}
.trandBox .trand_item .img_area {position:absolute;top:0;left:0;display:block;width:150px;height:150px;overflow:hidden;/* border:1px solid #afafaf; */}
.trandBox .trand_item .img_border {position:absolute;top:0;left:0;width:148px;height:148px;border:1px solid #afafaf;}
.trandBox .trand_item img {display:block;width:150px;}
.trandBox .trand_item span {display:block;height:150px;word-wrap:break-word;overflow:hidden;}
.trandBox .trand_item .txt_area {display:block;height:28px;padding:154px 3px 0 3px;line-height:15px;word-wrap:break-word;overflow:hidden;}

.trandBox.typeh200 .trandBoxIn {padding:2px 0 0;}
.trandBox.typeh200 .a_header {height:11px;margin-bottom:0;}
.trandBox.typeh200 .a_header .nav {margin-top:0px;border-bottom:0;}
.trandBox.typeh200 .a_header .nav a {top:0;}

.trandBox.typeh200 .a_body {margin-top:-3px;}
.trandBox.typeh200 .a_body li {height:179px;}
.trandBox.typeh200 .trand_item{height:179px;}
.trandBox.typeh200 .txt_area {height:26px;line-height:14px;padding-top:152px;}

.trandBox.typePrd1 .a_header {height:43px;}
.trandBox.typePrd1 .a_header .nav {margin-bottom:27px;border-top:1px solid #d7d7d7;border-bottom:0;}
.trandBox.typePrd1 .a_header .nav a {top:31px;}

.trandBox.typePrd1H200 .a_header {height:14px;}
.trandBox.typePrd1H200 .trandBoxIn {padding:2px 0 3px;}
.trandBox.typePrd1H200 .a_header {margin-bottom:2px;}
.trandBox.typePrd1H200 .a_body li {height:179px;}
.trandBox.typePrd1H200 .trand_item{height:179px;}
.trandBox.typePrd1H200 .nav {display:none;}
.trandBox.typePrd1H200 .txt_area {height:26px;line-height:13px;}

#ui-aboutBox {margin-bottom:20px;}

/* svg Btn */
.trandBox .iad {position:absolute;z-index:999;right:6px;top:11px;}
.trandBox.typeHor .iad {right:3px;top:3px;}
.trandBox.typeVer .iad {right:3px;top:3px;}
.trandBox.svgS .iad {right:3px;top:auto; bottom:3px;}

.trandBox .iad p a {display:block;width:16px;height:16px;background:url(http://img.iacstatic.co.kr/adbayimg/templates/thumbnail/images/svn_info.png) 0 0 no-repeat;font-family:'돋움',Dotum,'굴림',Gulim,Helvetica,sans-serif;font-weight:bold;color:#282095;text-indent:-10000px;}
.trandBox .iad p a:hover {width:86px;background:url(http://img.iacstatic.co.kr/adbayimg/templates/thumbnail/images/svn_open.png) 0 0 no-repeat;text-indent:0px;}

.trandBox .svgArea .svg_on, .svgArea.svgHover .svg_off {display:none;}
.trandBox .svgArea.svgHover .svg_on {display:block;}
.trandBox .svgArea.svgHover .svg_on a {text-decoration:none;}
