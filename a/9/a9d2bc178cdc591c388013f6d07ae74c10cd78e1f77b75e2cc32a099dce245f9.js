@import url(//fonts.googleapis.com/css?family=Roboto:700,400);
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-family: sans-serif;
}
body {
  font: 14px 'Roboto', sans-serif;
  line-height: 20px;
  color: #666666;
  background: #fff;
  margin: 0px;
  width: 100%;
  min-width: 1024px;
}
a {
  background: transparent;
}
a:active,
a:hover {
  outline: 0;
}
b,
strong {
  font-weight: bold;
}
img {
  border: 0;
  display: -moz-inline-stack;
	display: inline-block;
	vertical-align: top;
	zoom: 1;
	*display: inline;
}
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
button {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
a {
  color: #666;
  text-decoration: none;
}
a:hover {
  color: #2c73a9;
  text-decoration: none;
}
a:focus {
  outline: none;
}
p {
  margin: 0 0 21px;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 0px;
  padding: 0px; 
  list-style: none;
}
ul ul,
ol ul,
ul ol,
ol ol {
  margin-bottom: 0;
}
.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.clearfix {
    *display: inline-block;
    _width: 100%;
}
#wrapper{
	width: 960px;
	margin: 0 auto;
	padding:10px;
}
.header {
	height: 90px;
	position: relative;
}
.logo{
	display: block;
	width: 220px;
	height: 90px;
	cursor: pointer;
	position: absolute;
    top: 25px;
	left: 15px;
	overflow: hidden;
	background: url("img/logo.jpg") no-repeat scroll 0 0 transparent;
}
.disclamer{
	background: url("img/disclamer.png") no-repeat scroll 35px 30px #6da92c;
	width: 700px;
	float: right;
	height: 90px;
	color: #fff;
}
.disclamer .text{
	padding-left: 80px;
	padding-right: 50px;
	padding-top: 0px;
	height: 90px;
	display: table-cell;
	vertical-align: middle;
	line-height: 20px;
}
.main-container{
	position: relative;
}
.main-news{
	margin: 32px 0px 20px;
	border-bottom:1px solid #dbe5ec;
	position:relative;
}
.main-news > a{
	display: block;
	position: relative;
	height: 208px;
	overflow: hidden;
	margin-left: 52px;
	margin-right: 51px;
	margin:0 0 30px;
}
.main-news .arrow{
	width: 64px;
	height: 49px;
	position: absolute;
	right: 40px;
	top: 60px;
	background: url("img/bg_arrow.jpg") no-repeat scroll 0 0 transparent;
}
.main-news .photo{
	position: absolute;
	top: 0px;
	left: 0px;
}
.main-news .name-news{
    color: #222 !important;
    font-family: "Open Sans",sans-serif;
    font-size: 44px;
    font-weight: bold;
    line-height: 52px;
    margin: 6px 120px 19px 236px;
    max-height: 100px;
    overflow: hidden;
    padding: 0;
}
.main-news .desc{
	color: #666666;
	margin-left: 240px;
	margin-right: 290px;
}
.main-news .btn{
	position: absolute;
	bottom: 0px;
	right: 0px;
	text-align: right;
	white-space: nowrap;
}
.btn .price {
	display: -moz-inline-stack;
	display: inline-block;
	vertical-align: top;
	zoom: 1;
	*display: inline;
	width: 100px;
	text-align: center;
	text-transform: uppercase;
	color: #fff;
	font-weight: bold;
	height: 50px;
	line-height: 50px;
	margin-left: 10px;
	background: #222222; /* Old browsers */
}
.btn .buy {
	display: -moz-inline-stack;
	display: inline-block;
	vertical-align: top;
	zoom: 1;
	*display: inline;
	width: 140px;
	text-align: center;
	text-transform: uppercase;
	color: #fff;
	font-weight: bold;
	height: 50px;
	line-height: 50px;
	margin-left: 8px;
	background: #6da92c; /* Old browsers */
	
	-webkit-transition: all 0.5s ease-in 0s;
	 -moz-transition: all 0.5s ease-in 0s;
	 -ms-transition: all 0.5s ease-in 0s;
	 -o-transition: all 0.5s ease-in 0s;
	   transition: all 0.5s ease-in 0s;
 }
.btn:hover .buy {
  font-size:24px;
  font-weight:700px;
}
.news-container{
	overflow: hidden;
}
.line-news{
    position: relative;
	font-size: 0px;
	line-height: 0px;
	letter-spacing: -1px;
}
.line-news .l-item {
	font-size: 14px;
	line-height: 16px;
	letter-spacing: normal;
	display: -moz-inline-stack;
	display: inline-block;
	vertical-align: top;
	zoom: 1;
	*display: inline;
	width: 164px;
	padding: 0px 5px 7px;
	margin: 0px 12px 0px;
	text-align:center;
}
.line-news .l-item a {
	display: block;
	overflow: hidden;
}
.line-news .l-item  .photo{
	width: 120px;
	margin: 0px auto 8px;
	position: relative;
	height: 120px;
	overflow: hidden;
}
.line-news .l-item .name-news{
	font-weight: bold;
	margin-bottom: 8px;
	text-align: center;
	color: #222;
	padding-top: 5px;
	overflow: hidden;
}
.line-news .l-item .desc{
	color: #666666;
	font-size: 12px;
	text-align: center;
	line-height: 15px;
	overflow: hidden;
	margin-bottom: 5px;
}
.line-news .price{
	font-size: 11px;
	color: #fff;
	position: absolute;
	right: 0px;
	bottom: 0px;
	line-height: 18px;
	background: #222;
	width:100%;
	text-align:center;
}
.line-news .site-news {
	color:#adadad;
	font-size:10px;
	margin-top:10px;
}
.line-news .l-item:hover .name-news, .line-news .l-item:hover .desc {
	color:#2c73a9 !important;
}
.line-news .l-item:hover .price{
	background:#2c73a9;
}
