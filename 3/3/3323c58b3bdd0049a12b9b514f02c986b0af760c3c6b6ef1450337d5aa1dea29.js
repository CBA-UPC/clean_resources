html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

ul,li {
  list-style: none;
}
button,
input,
select {
  margin: 0;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
img,
video {
  height: auto;
  width: 100%;
  border: none;
}
iframe {
  border: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th {
  padding: 0;
}
body { 
  font-family: 'PingFang SC',Helvetica,'Microsoft YaHei',Arial;
}
a {
  text-decoration: none;
  color: inherit;
}
a:hover {
  text-decoration: underline;
}
.container {margin-right:auto;margin-left:auto;}
.container:before,.container:after {content:" ";display:table}
.main {width:1170px;margin:0 auto;}
.container:after {clear:both}
.row {margin-left:-15px;margin-right:-15px}
.row:before,.row:after {content:" ";display:table}
.row:after {clear:both}
.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12 {position:relative;min-height:1px;padding-left:15px;padding-right:15px;float:left}
.col-1 {width:8.33333%}
.col-2 {width:16.66667%}
.col-3 {width:25%}
.col-4 {width:33.33333%}
.col-5 {width:41.66667%}
.col-6 {width:50%}
.col-7 {width:58.33333%}
.col-8 {width:66.66667%}
.col-9 {width:75%}
.col-10 {width:83.33333%}
.col-11 {width:91.66667%}
.col-12 {width:100%}
.col-offset-0 {margin-left:0%}
.col-offset-1 {margin-left:8.33333%}
.col-offset-2 {margin-left:16.66667%}
.col-offset-3 {margin-left:25%}
.col-offset-4 {margin-left:33.33333%}
.col-offset-5 {margin-left:41.66667%}
.col-offset-6 {margin-left:50%}
.col-offset-7 {margin-left:58.33333%}
.col-offset-8 {margin-left:66.66667%}
.col-offset-9 {margin-left:75%}
.col-offset-10 {margin-left:83.33333%}
.col-offset-11 {margin-left:91.66667%}
.col-offset-12 {margin-left:100%}

/*  */
@media screen and (max-width: 1170px){
  .main {
    width: 800px;
  }
  .xs-hide {
    display: none;
  }
}

@font-face {
  font-family: "iconfont"; /* Project id 3513204 */
  src: url('//rs2.huanqiucdn.cn/huanqiu/csr/fonts/iconfont.woff2?t=1657854871003') format('woff2'),
       url('//rs2.huanqiucdn.cn/huanqiu/csr/fonts/iconfont.woff?t=1657854871003') format('woff'),
       url('//rs2.huanqiucdn.cn/huanqiu/csr/fonts/iconfont.ttf?t=1657854871003') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-video:before {
  content: "\e62d";
}

.icon-arrow-next:before {
  content: "\e62c";
}

.icon-arrow-pre:before {
  content: "\e634";
}

.icon-arrow-right-blod:before {
  content: "\e61f";
}

.icon-arrow-left-blod:before {
  content: "\e621";
}

.icon-arrow-right-md:before {
  content: "\e62e";
}

.icon-arrow-left-md:before {
  content: "\e63c";
}

.icon-pages:before {
  content: "\e69c";
}

.icon-pptx:before {
  content: "\e63a";
}

.icon-docx:before {
  content: "\e63b";
}

.icon-keynote:before {
  content: "\e76b";
}

.icon-numbers:before {
  content: "\e76c";
}

.icon-xlsx:before {
  content: "\e6cd";
}

.icon-weixin:before {
  content: "\e629";
}

.icon-weibo:before {
  content: "\e635";
}

.icon-comment2:before {
  content: "\e61a";
}

.icon-warning:before {
  content: "\e62b";
}

.icon-comment:before {
  content: "\e632";
}

.icon-logo:before {
  content: "\e63e";
}

.icon-pdf:before {
  content: "\e68c";
}

.icon-side-more:before {
  content: "\e68e";
}

.icon-top:before {
  content: "\e7f6";
}

.icon-search:before {
  content: "\e618";
}

.icon-menu:before {
  content: "\e61c";
}

.icon-close:before {
  content: "\e61e";
}

.icon-comment3:before {
  content: "\e68f";
}


.gray {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%); 
  -o-filter: grayscale(100%);
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
  -webkit-filter: grayscale(1);filter: gray;
}