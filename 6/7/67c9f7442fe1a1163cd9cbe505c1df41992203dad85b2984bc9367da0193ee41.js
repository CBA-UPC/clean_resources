/*
Theme Name: musicdel
Description:  Danial Taherifar
Author: admin
Author URI: https://Musicdel.ir
Version: 1.1
*/
@font-face {
  font-family: yekan;
  font-style: normal;
  font-weight: normal;
  src: url("Fonts/iranyekan.eot");
  src: url("Fonts/iranyekan.eot?#iefix") format("embedded-opentype"),
    url("Fonts/iranyekan.woff2") format("woff2"),
    url("Fonts/iranyekan.woff") format("woff"),
    url("Fonts/iranyekan.ttf") format("truetype");
  font-display: optional;
}

* {
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  direction: rtl;
  color: #444;
  background: #f1f1f1;
  margin: 0px;
  padding: 0px;
  font: 14px/2.2 yekan, tahoma;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
kbd,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: #444444;
  transition: all 0.3s ease-out;
}
a:hover {
  text-decoration: none;
  color: #212142;
  font-weight: bold;
}
ul,
li {
  border: 0;
  padding: 0;
  margin: 0;
  list-style: none;
}
caption,
cite,
code,
dfn,
em,
th,
var {
  border: 0;
  padding: 0;
  margin: 0;
  outline: 0;
}
img {
  border: 0;
  transition: all 0.3s ease-out;
}
h1 {
  font: 20px yekan, tahoma;
  margin: 0;
  padding: 0;
}
h2 {
  font: 18px yekan, tahoma;
}
h3 {
  font: 16px yekan, tahoma;
}
h4 {
  font: 14px yekan, tahoma;
}
.clear {
  clear: both;
}
.input-comment,
.text-box,
select,
input.text_input,
textarea,
input {
  font: 13px yekan, tahoma;
  padding: 8px 5px;
  text-align: right;
  background: #ffffff;
  transition: all 0.3s ease-out;
  margin: 5px 0px;
  border: 3px solid #eee;
}
.input-comment:focus,
.text-box:focus,
input.text_input:focus,
textarea:focus,
input:focus {
  background: #fafafa;
}
.wpcf7-submit,
.submit,
#cancel_reply a,
.thdrpy a {
  background: #066db1;
  font: 15px yekan, tahoma;
  color: #fff;
  cursor: pointer;
  padding: 5px 8px 5px;
  border: 1px solid #066db1;
  border-radius: 3px;
  box-shadow: 0px 3px 4.85px 0.15px rgba(0, 0, 0, 0.16);
}
.wpcf7-submit:hover,
.submit:hover,
#cancel_reply a:hover,
.thdrpy a:hover {
  color: #fff;
  background: #066db1;
  text-shadow: 1px 1px #2a3b4c;
  border: none;
  border: 1px solid #2a3b4c;
}
#cancel_reply a {
  float: left;
}
.warpper {
  direction: rtl;
  margin: 0 auto 0;
  padding: 0 0 8px 0;
  position: relative;
  width: 988px;
  text-align: right;
}
.page-body {
  float: left;
  width: 550px;
  margin-top: 5px;
}
.two-box-warpper {
  float: right;
  width: 720px;
}
.content {
  margin: 5px 0;
}
.top {
  margin: 0 auto;
  width: 988px;
  background-repeat: no-repeat;
  background-position: right 24px top 15px;
  background-size: 56px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
}
#menu-item-53172 {
  background: #00000050;
  border-radius: 10px;
}
#menu-item-53172 a {
  font-size: 16px;
  border-bottom: none;
  padding: 10px;
}
/* #menu-item-53172::before {
    content: url(data:image/svg+xml,%0A%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1080 1080'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:red;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M516.35,439.9c-85.39-32.76-199-4.61-226.93,92.58-33.28,181.58,271.08,142.21,276.62-8,13.45-169-46.7-306,116.12-422.8,257.53-159.6,480,128,355,375.48C986,579.55,822.26,750,546.61,979.54c-5.36,2.81-11.81,1.73-17.23-3.19C483.47,941.66,425.59,898,362.32,887.91-549.59,134.44,583.86-326.25,516.35,439.9Z'/%3E%3C/svg%3E);
	color:red;
    size: 50px;
} */
.meno {
  width: 100%;
  height: 67px;
  background: #07b290;
}
.meno ul {
  font: 14px yekan, tahoma;
  float: right;
  margin: 0;
}
.meno ul li {
  float: right;
}
.meno ul li a {
  padding: 5px 9px;
  color: #000;
  float: right;
  margin-left: 5px;
  border-radius: 3px;
  /*   background: #07b290; */
  font: 14px yekan, tahoma;
}
.meno ul li a:hover {
  background: #8981ae;
  color: #ffffff;
}
.meno span {
  float: left;
  background: #ffffff2e;
  padding: 7px 15px;
  font: 13px yekan, tahoma;
  color: #ffffff;
  margin: 16px 0px 0px;
  border-radius: 3px;
}
.header {
  width: 100%;
  height: 72px;
  background: #f9f9f9;
  box-shadow: 0px 3px 4.85px 0.15px rgba(0, 0, 0, 0.06);
}
.header img {
  float: left;
  margin-top: 14px;
  border: 2px solid #e5e5e5;
}
.banners {
  text-align: center;
  padding-top: 6px;
  margin: 0px 0px 5px;
  background: #ededed;
  width: 100%;
}
.banners img {
  margin: 3px 2em;
}
.postdown ul {
  margin: 10px;
  background: #fafafa;
  border-radius: 20px;
}
.postdown ul li {
  text-align: justify;
  font: 13px yekan, tahoma;
  display: inline-block;
  margin: 8px;
  color: #ab9c61;
}
.postdown ul li a {
  color: #746940;
}
.src {
  float: right;
  background: #fff;
  width: 99.5%;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 1px 3px #006651;
  margin-top: 5px;
}
.src input {
  background: no-repeat;
  width: 100%;
  margin: 0;
  padding: 10px;
  color: #34495e;
  box-shadow: 0 2px 12.48px 0.52px rgba(0, 0, 0, 0.06);
  border: 5px solid #07b290;
  border-radius: inherit;
}
.src button {
  position: absolute;
  left: 0px;
  top: 0px;
  background: #07b290;
  color: #212121;
  font: 13px yekan, tahoma;
  height: 48px;
  padding: 0px 10px;
  transition: all 0.3s ease-out;
  cursor: pointer;
}
.src button:hover {
  color: #fff;
  opacity: 0.7;
}
.titlee {
  color: #07b290;
  margin: 5px 0;
  padding: 0px 0px;
  font-size: 13px;
  border-radius: 5px;
}
.post {
  margin: 0px 0px 10px;
  width: 548px;
  display: inline-block;
  border-radius: 5px;
  padding: 5px;
  background-color: #fff;
  box-shadow: 0 2px 12.48px 0.52px rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e5e5;
}
.post .title {
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  padding: 0px 0px;
}
.post .title .heding {
  text-align: center;
  font: 16px yekan, tahoma;
  box-shadow: 0px 2px darkgreen;
}
.post .title .heding a {
  color: #f1f1f1;
  overflow: hidden;
  text-overflow: ellipsis;
}
.post .title .heding a:hover {
  color: #ffffff;
}
.contents {
  text-align: center;
  width: 100%;
  padding: 0 10px;
}
.contents a {
  color: #444;
}
/*.contents a:hover {*/
/*  color: #f9a400;*/
/*}*/
.post .more a {
  color: #ffffff;
  padding: 11px 13px;
  font: 12px yekan, tahoma;
  text-align: center;
  margin: 5px 10px 10px;
  border-radius: 3px;
  background: #8981ae;
  background: linear-gradient(197deg, #1f1c2c, #8981ae);
  box-shadow: 0px 3px 4.85px 0.15px rgba(0, 0, 0, 0.16);
  display: block;
}
.post .more a:hover {
  opacity: 0.8;
}
.post .contents > ul li:before {
  font-family: FontAwesome;
  font-size: 9px;
  margin-left: 5px;
  color: #34495e;
  display: inline-block;
  text-align: center;
  content: "\f104";
}
/* .post .contents ul li {
  padding: 2px 10px 2px 1px;
  color: #34495e;
  list-style-position: inside;
  transition: all 0.3s ease-out 0s;
} */
/* .post .contents ul li:hover {
  padding: 2px 15px 2px 1px;
} */
.post .contents h2 {
  font-size: 15px;
  margin: 5px 0px;
}
.post .contents h3 {
  font-size: 14px;
  margin: 5px 0px;
}
/* .post .contents img {
  max-width: 90%;
  margin: 5px auto;
  height: auto;
  box-shadow: 0 0 10px rgb(0 0 0 / 50%);
  border-radius: 5px;
} */
.socialfa {
  text-align: center;
}
.socialfa a {
  display: inline-block;
  background: #f2f2f2;
  font-family: yekan, tahoma;
  font-size: 13px;
  color: #777;
  padding: 2px 10px;
  border-radius: 5px;
  margin-top: 5px;
}
.socialfa a:hover {
  color: #fff;
}
.socialfa .blue:hover {
  background: #1e87e9;
}
.socialfa .red:hover {
  background: #d41f1e;
}
.socialfa .green:hover {
  background: #3bb54a;
}
.sidebaar-right {
  float: right;
  width: 163px;
}
.sidebaar-left {
  float: left;
  width: 260px;
  margin-bottom: 5px;
}
.page-body .tags {
  overflow: hidden;
  margin-bottom: 5px;
}
.sidebaar-right .box,
.sidebaar-left .box,
.tags {
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 12.48px 0.52px rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e5e5;
  margin-bottom: 10px;
}
.sidebaar-right .box .title,
.sidebaar-left .box .title,
.tags .title {
  background: #fafafa;
  border-radius: 3px;
}
.sidebaar-right .box .title h4,
.sidebaar-left .box .title h4,
.tags .title p {
  font: 14px/3 yekan, tahoma;
  /*color: #444;*/
  text-indent: 10px;
}
.sidebaar-right .box .content,
.sidebaar-left .box .content,
.tags .content,
.categories {
  width: 100%;
}
.tagsingle {
  border-top: 1px solid #f2f2f2;
  padding-top: 5px;
  margin: 5px 0px 10px;
}
.tagsingle span {
  font: 13px yekan, tahoma;
}
.tagsingle h3 {
  text-align: justify;
}
.tagsingle h3 a {
  padding: 5px;
  color: #999;
  font: 11px/2 yekan, tahoma;
}
.tagsingle h3 a:hover {
  background: #fafafa;
  color: #00ae8e;
  border-radius: 10px;
}
.sidebaar-right .box .content ul li,
.sidebaar-left .box .content ul li,
.tags .content ul li,
.widgetlist {
  padding: 3px 5px;
}
.sidebaar-right .box .content ul li a,
.sidebaar-left .box .content ul li a,
.tags .content ul li a,
.widgetlist {
  font: 12px yekan, tahoma;
  color: #737373;
  line-height: 2.4em;
}
.sidebaar-right .box .content ul li a:hover,
.sidebaar-left .box .content ul li a:hover,
.tags .content ul li a:hover,
.sidebaar-left a:hover {
  color: #212142;
  font-weight: bold;
}
.sidebaar-right .box .content .ads-right,
.sidebaar-left .box .content .ads-left {
  text-align: center;
  clear: both;
}
.sidebaar-right .box .content .ads-right img,
.sidebaar-left .box .content .ads-left img {
  margin-top: 7px;
}
.categories {
  margin-bottom: -5px;
}
.categories ul {
  font: 12px yekan, tahoma;
}
.categories ul li {
  margin: 0px 5px;
}
.categories ul li a {
  display: block;
  padding-bottom: 5px;
  position: relative;
  color: #737373;
  font-size: 12px;
  width: 100%;
  margin: 15px 0px;
  /*   color: #34495e; */
}

.categories > ul > li > a:hover {
  color: #777;
}
.categories > ul > li:last-child li ul li:last-child a {
  border-bottom: 0;
}
.categories li ul li a:before {
  float: right;
  margin: -3px 0px 0px 4px;
  font-size: 15px;
}
.categories > ul > li > ul > li:hover > a:before {
  background-position: -208px -79px;
  transition: all 250ms ease-in-out 0s;
}
.categories > ul > li > ul > li:hover > a,
.categories > ul > li > ul > li > ul > li:hover > a {
  color: #cc462a;
  padding-right: 5px;
}
.categories > ul > li > ul > li:before,
.categories > ul > li > ul > li:after {
  display: table;
  line-height: 0;
  content: "";
}
.categories > ul > li > ul > li:after {
  clear: both;
}
.categories > ul > li > ul > li > ul {
  width: 97%;
  float: left;
}
.categories li ul li {
  margin-top: 4px;
}
.text-ads {
  text-align: center;
  font-family: yekan, tahoma;
}
.text-ads a {
  color: #34495e;
  display: inline-block;
  font-size: 14px;
  margin-top: 2px;
  text-shadow: 1px 1px 0px #fff;
  background: #f7f7f7;
  border-right: 3px solid #e5e5e5;
  padding: 3px 0px;
  width: 48%;
}
.text-ads a:hover {
  color: #f2f2f2;
  background: #e94f2e;
  text-shadow: 1px 1px 0px #da4b2c;
  border-right: 3px solid #da4b2c;
}
.request-box {
  margin: 0px 0px 5px;
  background: #fff;
  border: 1px solid #e5e5e5;
  padding: 5px;
}
.request-box .title {
  background: #e94f2e;
  padding: 0px 5px;
  font: 15px/2 yekan, tahoma;
  color: #f2f2f2;
  border-right: 1px solid #e5e5e5;
  text-shadow: 1px 1px 0px #da4b2c;
  margin-bottom: 5px;
}
.request-box .contact {
  width: 100%;
  margin: 0px;
  clear: both;
}
.request-box .contact .request {
  text-align: center;
}
.request-box .contact .request a {
  background: none repeat scroll 0px 0px #34495e;
  color: #fff;
  font: 13px/2 yekan, tahoma;
  text-shadow: 1px 1px 0px #2b3d4e;
  display: block;
  padding: 2px 0px;
}
.request-box .contact .request a:hover {
  background: none repeat scroll 0px 0px #2b3d4e;
  text-shadow: 1px 1px 0px #1e2a35;
}
.pages {
  float: right;
}
.wp-pagenavi {
  clear: both;
  direction: ltr;
  text-align: right;
  float: left;
  font: 15px yekan, tahoma;
  width: 99.5%;
}
.wp-pagenavi a,
.wp-pagenavi span {
  text-decoration: none;
  margin: 4px;
  direction: rtl;
  text-align: center;
  color: #666;
  float: left;
  padding: 3px 13px;
  height: auto;
  background: #eaeaea;
  line-height: 25px;
}
.wp-pagenavi a:hover,
.wp-pagenavi span.current {
  border-color: #999;
  color: #fff;
  float: left;
  background: #6c6299;
  border-radius: 3px;
  box-shadow: 0px 3px 4.85px 0.15px rgba(0, 0, 0, 0.16);
}
.wp-pagenavi span.current {
  float: left;
}

.textarea-box {
  display: inline-block;
}

.textarea-box label {
  margin: 8px 0;
  width: 100px;
  display: block;
  font: 13px yekan, tahoma;
}
.avatar {
  float: right;
  margin-left: 5px;
}
.vcard,
.commentmetadata {
  font: 14px yekan, tahoma;
}
.text-box {
  width: 296px;
  height: 175px;
  float: left;
}
.comments-rules {
  border-right: 4px solid #eee;
  padding: 5px;
  margin: 10px 0;
  color: #6b6b6b;
  font: 12px yekan, tahoma;
}
.comments-rules h4 {
  color: #6b6b6b;
  font: 14px yekan, tahoma;
}
.editComment,
.editableComment,
.textComment {
  display: inline;
}
.chalt {
  width: 97%;
  background-color: #f5f5f5;
}
#newcomment {
  border: #777 dashed 1px;
  width: 90%;
}
#newcommentsubmit {
  color: red;
}
.adminreplycomment {
  border: #777 dashed 1px;
  width: 99%;
  margin: 4px;
  padding: 4px;
}
.mvccls {
  color: #999;
}
.foter {
  background: #fafafa;
  border-top: 3px solid #f2f2f2;
}
.foter .tagslist h5 {
  font: 15px yekan, tahoma;
  color: #fff;
  background: #00ae8e;
  padding: 3px 7px;
  text-align: right;
  float: right;
  margin-left: 5px;
  border-radius: 0px 5px 5px 0px;
}
.foter .tagslist {
  width: 100%;
  float: right;
  text-align: justify;
  padding: 5px 0px;
  line-height: 31px;
  height: 42px;
}
.foter .tagslist a {
  padding: 5px;
  color: #888;
  font: 11px yekan, tahoma !important;
}
.foter .tagslist a:hover {
  color: #00ae8e;
  background: #f2f2f2;
}
.foter .bottom {
  background: #fafafa;
  padding: 10px 0px;
  float: right;
  width: 100%;
}
.foter .links {
  width: 70%;
  float: right;
}
.foter .links p {
  font: 13px/25px yekan, tahoma;
  text-align: justify;
}
.foter .links a {
  color: #07b290;
}
.foter .links a:hover {
  color: #444;
}
.foter .links ul {
  font: 13px yekan, tahoma;
  float: right;
  color: #7d8e9e;
  text-align: right;
}
.foter .links ul li {
  margin: 5px 0px 5px 7px;
  float: right;
}
.foter .links ul li:after {
  content: " / ";
  margin-right: 5px;
}
.foter .links ul li:last-child:after {
  display: none;
}
.foter .links ul li a {
  color: #dbdbdb;
}
.foter .links ul li a:hover {
  color: #f1f1f1;
}
.entry {
  margin: 0px 0px 10px;
  float: right;
  padding: 5px;
  width: 548px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 2px 12.48px 0.52px rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e5e5;
}
.entry p {
  margin: 5px;
}
.entry .title {
  text-align: center;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  padding: 8px 0px;
}
.entry .title .heding {
  font: 14px yekan, tahoma;
  text-indent: 10px;
}
.entry .buy a {
  display: block;
  color: #333;
  font: 13px yekan, tahoma;
  padding: 5px 14px;
  margin: 5px;
  background: #f2f2f2;
  border-radius: 7px;
}
.entry .buy a:hover {
  background: #d9d9d9;
}
.entry img {
  max-width: 100%;
  height: 100%;
}
.entry .entrycontent {
  text-align: center;
  padding: 10px;
}
.taxonomy-description {
  text-align: center;
  padding: 10px;
}
.entry .entrycontent {
  margin: 5px 0px;
}
.entry .title .head {
  font: 20px yekan, tahoma;
  text-indent: 10px;
}
.entry .entrycontent h1 {
  font-size: 18px;
  margin: 5px 0px;
}
.clear {
  clear: both;
  font-size: 0;
  line-height: 0;
  height: 0;
}
.shortlink {
  border-radius: 3px;
  font: 13px/23px yekan, tahoma;
  color: #777;
  padding: 5px 0px;
  margin: 5px 0px 0px;
  height: 29px;
}
.shortlink textarea {
  float: left;
  font: 11px yekan, tahoma;
  background: #f2f2f2;
  padding: 5px 3px;
  border-radius: 3px 3px 0px 0px;
  direction: ltr;
  text-align: center;
  resize: none;
  height: 25px;
  color: #666;
}
.downloads {
  text-align: center;
  width: 98%;
  margin: 0px auto;
  margin-top: 20px;
}
.downloads audio {
  width: 100%;
  margin: 5px 0px;
}
.downloads textarea {
  width: 97%;
  direction: ltr;
  text-align: left;
  box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.1);
  resize: none;
  color: #8d8d8d;
  padding: 6px 7px;
  margin-bottom: 5px;
  overflow: hidden;
  height: 74px;
}
.downloads2 .blogcode i,.downloads2 .blogcode h3 {
  border-radius: 7px;
  background: #dcdae4;
  color: #262626;
  padding: 2px 7px;
  margin: 0px 0px 10px;
  display: inline-block;
  font-style: normal;
  width: 100%;
}
.downloads .blogcodeh i {
  border-radius: 7px;
  background: #f9e996;
  font: 11px/25px yekan, tahoma;
  color: #262626;
  padding: 2px 7px;
  margin: 0px 0px 10px;
  display: inline-block;
  font-style: normal;
}
.downloads a {
  background: #6c6299;
  display: block;
  margin: 6px;
  border-radius: 4px;
  font: 14px/35px yekan, tahoma;
  color: #fff;
  box-shadow: 0px 3px 4.85px 0.15px rgba(0, 0, 0, 0.16);
  padding: 4px 15px;
}
.downloads .taag a {
  background: linear-gradient(to bottom, #1f1c2c 0%, #563ad0 100%);
}
.downloads a:hover {
  background: #4d4d68;
}
.breads {
  background: #c7c3d6;
  border: 1px solid #1f1c2c;
  color: #2d2d2d;
  margin: 10px 0;
  padding: 6px;
  font-size: 11px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 1024px) {
  .top,
  .warpper,
  .entry,
  .post {
    width: 99%;
    padding: 5px;
  }

  .page-body,
  .foter .links {
    width: 76%;
  }

  .foter .links,
  .foter .tagslist h5 {
    margin-right: 5px;
  }

  .sidebaar-left,
  .sidebaar-right {
    width: 26%;
  }

  .two-box-warpper {
    width: 72%;
  }

  .header {
    float: right;
    height: auto;
    text-align: center;
  }

  .header img {
    float: none;
  }

  .foter .copyright {
    width: 15%;
  }

  .foter .copyright p {
    display: none;
  }

  .text-ads a {
    font-size: 13px;
    width: 47%;
  }
}
@media screen and (max-width: 800px) {
  .two-box-warpper,
  .page-body,
  .sidebaar-left,
  .sidebaar-right {
    width: 100%;
  }
  .meno span {
    display: none;
  }
  .meno ul {
    text-align: center;
    display: inline-block;
    float: none;
  }
  .meno ul li {
    border-left: 0px;
    float: none;
    display: inline-block;
    vertical-align: middle;
  }
  .meno ul li a {
    padding: 3px 5px;
    border-radius: 3px;
    position: initial;
  }
  .meno ul li a:hover {
    border-radius: 3px;
  }
}
@media screen and (max-width: 640px) {
  .meno {
    height: 80px;
  }
  .header img,
  .banners img {
    width: 99%;
    height: 100%;
    margin: 4px 0px;
  }
  .foter .links {
    width: 95%;
  }
  .foter .copyright {
    width: 100%;
    text-align: center;
  }
  .foter .copyright .logo {
    display: inline-block;
    margin: 0px auto;
    float: none;
  }
  .foter .links p {
    text-align: center;
  }
  .foter .links ul {
    text-align: center;
    float: none;
  }
}
@media screen and (max-width: 500px) {
  .ehha {
    width: 69%;
  }
  .entry,
  .post {
    padding: 0px;
    width: 100%;
  }
  .post .contents img,
  .entry img,
  .header img,
  .banners img {
    max-width: 95%;
  }
  .comment {
    padding: 3px;
  }
  #subscribe-reloaded {
    width: 100%;
  }
  .powerpress-mejs-audio,
  .g-item {
    float: right !important;
    width: 96% !important;
    margin: 2px 0px;
  }
  #comment {
    width: 90% !important;
  }
}
@media screen and (max-width: 320px) {
  .ehha {
    width: 55%;
  }
  .text-box {
    width: 90%;
  }
  .warpper {
    width: 100%;
  }
}
blockquote {
  background: #dcdae4;
  box-shadow: 0 0 0 4px #f4f4f4;
  color: #212142;
  border: 1px dashed;
  padding: 10px;
  margin: 20px;
}
/*blockquote a{border: 1px solid #aaa;padding:5px;display:block;margin-bottom:10px;border-radius:2px;box-shadow: 0 0 0 4px #f4f4f4;}*/
/*blockquote a:hover{border:1px solid #da4b2c;color:#e94f2e;box-shadow:0px 0px 0px 2px #da4b2c;}*/

.dmnplnk {
  position: fixed;
  height: 75px;
  top: 46%;
  background: #fff;
  text-decoration: none;
  z-index: 501;
  cursor: pointer;
  transform: translate(0, -50%);
  width: 40px;
  right: 0;
  border-radius: 15px 0 0 15px;
  transition: all 300ms ease-out;
  border: 2px solid RGBA(0, 0, 0, 0.2);
  border-right: 0;
}
.dmnplnk strong {
  transform: rotate(-90deg);
  position: absolute;
  width: 73px;
  top: 2.8em;
  right: -1.3em;
  font: 12px yekan, tahoma;
  color: #6c1939;
}
.dmnplnk.mwpr {
  right: initial;
  left: 0;
  border-radius: 0 15px 15px 0;
  border: 2px solid #e5e5e5;
  border-left: 0;
}
.dmnplnk.mwpr strong {
  top: 2.9em;
  right: -1.2em;
}
.dmnplnk a {
  position: absolute;
  width: 100%;
  height: 100%;
}
.dmnplnk:hover {
  background: #07b290;
  border-color: #07b290;
}
.dmnplnk:hover strong {
  color: #fff;
}
.mobileShow {
  display: none;
}
/* Smartphone Portrait and Landscape */
@media only screen and (min-device-width: 360px) and (max-device-width: 740px) {
  .mobileShow {
    display: inline;
  }
}
.mobileHide {
  display: inline;
}
/* Smartphone Portrait and Landscape */
@media only screen and (min-device-width: 360px) and (max-device-width: 740px) {
  .mobileHide {
    display: none;
  }
}
html {
  overflow-y: scroll;
}
.yektabanner2 a {
  background: none;
}
h2.heding {
  font-size: 14px;
  margin: 10px 0px 0px 0px;
  text-align: center;
}
#mediaad-G7r14 .mediaad-bnr-container-728 {
  overflow: inherit !important;
}
.sticktopads {
  min-height: 50px;
}
body {
  width: 100%;
}
.songsinfo {
  width: 100%;
}
.tablehead {
  background-color: #c7c3d6;
}
.tablefooter {
  text-align: center;
  background-color: #e8e7ef;
}
.tablebody {
  text-align: center;
  width: 100%;
}
.heding {
  margin-top: 10px;
}
h3.heding {
  font-size: 14px !important;
}
/* ul.children {
  margin-right: 25px;
} */
.pyekta {
  min-height: 350px;
}
.yektabanner2 {
  min-height: 250px;
  margin-top: 30px;
}
.telegramchannel {
  background: #006fa7;
  width: 100%;
  color: #fff !important;
  padding: 8px;
  border-radius: 10px;
}
.instapage {
  background: #fd594950;
  background: radial-gradient(
    circle at 30% 180%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 40%,
    #d6249f 60%,
    #285aeb 100%
  );
  width: 100%;
  padding: 8px;
  border-radius: 10px;
  color: white;
}
.socials {
  display: flex;
  justify-content: space-around;
	align-items:baseline;
}
.socials a{
	width:100%;
/* 	margin:0 2px!important; */
}
.artistli {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px;
}
.artistli li {
  border-right: 3px solid #6c6299;
  border-left: 3px solid #6c6299;
  margin: 2px 3px 2px 2px;
  padding-right: 4px;
  background: #ffffff;
  text-align: center;
}
.artitses {
  margin: 60px 2px 10px 2px;
}
.artkhan {
  text-align: center;
  font-size: 18px;
  padding: 2px 0px 10px 0px;
  background: #fff;
}
.downloads a::before {
  position: relative;
  content: "\266B";
  animation: up_down 1s ease-in-out infinite;
  padding-top: 12px;
  margin-left: 12px;
  color: #dbdbdb;
}
@keyframes up\u0640down {
  0% {
    top: -5px;
  }
  50% {
    top: 10px;
  }
  100% {
    top: -5px;
  }
}
@-webkit-keyframes up_down {
  0% {
    top: -5px;
  }
  50% {
    top: 10px;
  }
  100% {
    top: -5px;
  }
}
@-khtml-keyframes up_down {
  0% {
    top: -5px;
  }
  50% {
    top: 10px;
  }
  100% {
    top: -5px;
  }
}

audio {
  width: 100%;
}
.yektazir {
  display: block;
  min-height: 230px;
  margin: 20px;
}
.rpwwt-widget ul li {
  margin: 0;
}
.category-posts-internal a,
.rpwwt-widget ul li a {
  font: 12px yekan, tahoma;
  color: #777;
  line-height: 1.5em;
}
main.post h1 {
  background: #8981ae;
  background: linear-gradient(197deg, #1f1c2c, #8981ae);
  border-radius: 5px;
  margin: -10px 0px 10px 0px;
  padding: 15px 0px;
  font-weight: bolder !important;
  color: #dbdbdb;
}
main.post h1 a {
  color: #dbdbdb;
}
.post h2 {
  background: #c7c3d6;
  padding: 10px;
  border-radius: 5px;
  color: #212142;
}
.post h2 a {
  font-weight: bold;
}
.post h2 a:hover {
  color: magenta;
  padding: 2px 10px;
  border-radius: 5px;
  background: #07b29050;
  overflow: auto;
}
.meno {
  background: #8981ae;
  background: linear-gradient(197deg, #1f1c2c, #8981ae);
  height: auto;
  min-height: 70px;
  top: 0;
  position: sticky;
  z-index: 5;
}
.foter,
.foter .bottom,
.sidebaar-right div.title h4,
.sidebaar-left div.title,
.relatedsongshead,
.sidebaar-left div.title,
.sidebaar-left .box .title,
.post .title .heding {
  background: #8981ae;
  background: linear-gradient(197deg, #1f1c2c, #8981ae);
  box-shadow: 1px 1px #1f1c2c;
  border-radius: 4px;
  color: #dbdbdb;
}
.sidebaar-left div.title {
  text-indent: 10px;
  padding: 7px 0px;
}
.links p a {
  font-weight: bolder;
  color: #b70000 !important;
}
.meno ul li a {
  background: #00000010;
  color: #dbdbdb;
  margin-bottom: 5px;
  margin-right: 7px;
  border-bottom: 2px solid #fff;
  font-weight: bold;
}
.meno ul li a:hover {
  border-top: 2px solid #fff;
}
@media only screen and (max-width: 600px) {
  .meno {
    position: relative;
  }
  .socials {
    display: block;
    margin: 10px 0px;
  }
  .telegramchannel,
  .instapage {
    margin: 5px 0px;
  }
}
.relatedsongshead,
.titlee .heding {
  padding: 10px;
  /* background: rgb(55, 176, 193);*/
  /* background: linear-gradient(*/
  /*   90deg,*/
  /*   rgba(55, 176, 193, 1) 0%,*/
  /*#73e5e4 35%,*/
  /*   rgba(55, 176, 193, 1) 100%*/
  /* );*/
  font-weight: bolder;
}
input:focus::placeholder {
  color: transparent;
}
.src,
.titlee h2.heding,
.sidebaar-right div.title,
.sidebaar-left div.title,
.relatedsongshead {
  box-shadow: 0px 2px gray;
}
body
  > div.warpper
  > div
  > div.two-box-warpper
  > div
  > article
  > div.contents
  > center
  > figure:first-of-type {
  background: #52c7ad10;
  border-radius: 50px;
  padding-top: 20px;
}
figure img:first-of-type {
  min-height: 258px;
  border-radius: 20px !important;
  height: auto;
}
figure img:first-of-type:hover {
  box-shadow: 2px 2px #8981ae50;
  border-radius: 25px;
}
#mep_0 {
  width: 100% !important;
}
.wp-video {
  width: 100% !important;
}
.shortpakhsh {
  display: flex;
  justify-content: space-around;
}
.shortpakhsh a {
  background: #6c6299;
  border-radius: 10px;
  padding: 5px;
  font-weight: bold;
  color: #dbdbdb;
}
.shortpakhsh a:hover {
  background: #4d4d68;
}
* {
  scroll-behavior: smooth !important;
}
/*.foter .links ul li a {*/
/*  color: black;*/
/*}*/
.yekta250 {
  margin: 5px 0px;
  min-height: 250px;
}
.audio {
  margin: 10px 0px;
  padding: 10px 10px 5px 10px;
  /*   border-radius: 40px; */
  box-shadow: 2px 2px graytext;
  background: #00000030;
  background: #8981ae;
  background: linear-gradient(197deg, #1f1c2c, #8981ae);
}
.relatedsongspart {
  background: #8981ae;

  padding-bottom: 20px;
  border-radius: 4px;
  text-align: right;
}
.relatedsongspart ul li a {
  padding: 0px 10px;
}
.sticktopads {
  position: sticky;
  top: 0px;
  z-index: 4;
  text-align: center;
}
@media only screen and (min-width: 600px) {
  .sticktopads {
    display: none;
  }
}
.topads {
  display: flex;
  background: #d9d1d1;
  text-align: center;
  border: 2px whitesmoke solid;
  height: 90px;
  justify-content: center;
  align-items: center;
}
div {
  max-width: 100% !important;
}
video {
  width: 100%;
  max-width: 100%;
}
.wp-video {
  width: 100% !important;
}
.wp-caption {
  max-width: 100% !important;
}
#recom-container {
  background: #dadada;
  border-radius: 10px;
  margin: 5px;
  text-align: right;
}
#recom-container h3 {
  background: white;
}
.shortpakhsh {
  flex-direction: row;
  text-align: center;
}
.shortpakhsh a {
  width: 48%;
  margin: 5px;
}
img {
  max-width: 100% !important;
  height: auto;
}
hr {
  border: 0;
  border-top: 2px solid #1f1c2c;
  margin: 10px;
}
.wp-playlist-light .wp-playlist-caption {
  text-align: left;
  padding: 5px 0px;
  direction: ltr;
  overflow: hidden;
}
.wp-playlist-light {
  background: #fff;
  color: #000;
}
.topads1 {
  text-align: center;
  min-height: 90px;
}
@media only screen and (max-width: 800px) {
  .topads1 {
    min-height: 51px;
  }
  .top {
    flex-direction: column;
    align-items: start;
  }
  .textwidget ul,
  .categories ul {
    display: flex;
    flex-wrap: wrap;
  }
  .textwidget ul li,
  .categories ul li {
    display: flex;
    justify-content: space-around;
    min-width: 30%;
    justify-content: flex-start;
  }
}
table {
  width: 100%;
}
.downloads2 {
  background: #f5f5f5;
}
.wpp-list li {
  background: #dfdcee;
  margin: 2px;
}
h2 {
  text-align: center;
}
/* @media screen and (min-width: 501px) {
  article.post h1 {
    margin: -10px -5px 10px -5px;
  }
} */
.content ul li a::before,
.boxes ul li a::before {
  content: " \203A";
  color: #1f1c2c;
  vertical-align: middle;
  line-height: normal;
  padding: 0px 2px;
}

ol.commentlist {
  overflow: hidden;
}
.post {
  padding-bottom: 20px;
}
.relatedsongspart {
  margin-top: -10px;
}

h2.collapsible {
  background-color: #4d4d68;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  outline: none;
  font-size: 15px;
}

.active,
.collapsible:hover {
  background-color: #64647c;
}

h2.collapsible:after {
  content: "\002B";
  color: white;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2212" !important;
}

.contentc {
  padding: 0 5px;
  max-height: 30px;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: #f1f1f1;
  display: block;
}
.lyricsquo {
  margin: 0;
}
.ads1 {
  text-align: center;
}

#commentform {
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-bottom: 25px;
}
#commentform input,
#commentform textarea {
  width: 100%;
  margin: 0;
  padding: 8px 12px;
  border: none;
  margin-bottom: 15px;
  color: #101828;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
  font-size: 14px;
}
#commentform textarea {
  min-height: 70px;
}
#commentform input:focus,
#commentform textarea:focus {
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f4ebff;
}

.comment-form-wrapper {
  margin-right: 30px;
}
.comment-form-wrapper form {
  display: flex;
  flex-direction: column;
  text-align: right;
  width: 100%;
  margin: 0;
  padding: 8px 0;
  margin-bottom: 15px;
  color: #101828;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
  font-size: 14px;
}
.comment-form-wrapper form input,
.comment-form-wrapper form textarea {
  width: 100%;
  margin: 0 !important;
  padding: 8px 12px;
  color: #101828;
  background: #ffffff;
  margin: 0 12px;
  border: none !important;
  box-shadow: none !important;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
  font-size: 14px;
}
.comment-form-wrapper form textarea {
  min-height: 154px;
  resize: none;
}
.comment-form-divider {
  width: 100%;
  height: 1px;
  background-color: #d0d5dd;
  margin: 10px 0;
}
#commentform label {
  margin-bottom: 6px;
  color: #344054;
  font-size: 14px;
}
#commentform button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  width: 122px;
  font-weight: 500;
  height: 48px;
  background: #6c6299;
  border: 1px solid #6f57ff;
  color: white;
  cursor: pointer;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  font-family: yekan, tahoma;
  align-self: end;
  margin-left: 8px;
}
.comment-list-header {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 18px;
  font-weight: 600;
  color: #242a35;
  margin-bottom: 30px;
}
.comment-list-header svg {
  display: flex;
}
.comment-list-wrapper {
  margin: 0 12px;
  text-align: center;
}
.comment-list .comment {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-right: 23px;
  border-right: 1px solid #d0d0d0;
  text-align: right;
  padding-bottom: 20px;
}
.comment-list .children .comment:last-child {
  padding-bottom: 0;
}

.comment-list .children .comment {
  border-right: 1px solid #d0d0d0;
}

.comment-avatar {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 0;
  right: -12px;
  outline: 4px solid white;
}
.comment-avatar img {
  border-radius: 50%;
  height: auto;
}

.comment-avatar.in-children {
  position: static;
  display: inline-block;
  margin-left: 10px;
}

.comment-list .comment-text {
  margin-bottom: 10px;
}

.comment-list .comment-text,
.comment-list .comment-text p {
  /*   display: flex; */
  align-items: start;
  font-size: 14px;
  color: #5a606c;
  line-height: 24px;
  flex-direction: column;
  gap: 10px;
}
.comment-list .comment-text div {
  align-items: center;
  display: block;
}
.comment-list .comment-text b {
  color: #242a35;
}
.comment-list .comment-text p {
  /*   display: inline-block; */
}
.comment-list .comment-seperator:first-child {
  display: none;
}

.comment-list .comment-seperator {
  margin: 20px 0;
  width: 100%;
  height: 1px;
  background-color: #d0d0d0;
}
.comment-list .comment-info {
  display: flex;
  align-items: center;
}
.comment-list .comment-info div,
.comment-list .comment-info svg {
  display: flex;
  align-items: center;
}
.comment-list .comment-info svg {
  margin-left: 5px;
}
.comment-list .comment-reply {
  position: relative;
  margin: 0 16px;
  cursor: pointer;
}
.comment-list .comment-reply:before,
.comment-list .comment-reply:after {
  display: block;
  content: "";
  top: 0;
  width: 1px;
  height: 10px;
  position: relative;
  background-color: #d0d0d0;
}
.comment-list .comment-reply:before {
  right: -8px;
}
.comment-list .comment-reply:after {
  left: -8px;
}
.comment-like-or-dislike-button {
  cursor: pointer;
}
.comment-list a:before {
  display: none;
}
/*.text-blue {*/
/*  color: blue;*/
/*}*/

.comment-list .children {
  margin-bottom: 10px;
}

.comment-list .comment-dislike-button,
.comment-list .comment-like-button {
  cursor: pointer;
}

.comment-list .comment-like-button {
  margin-left: 10px;
}

.comment-list .comment-dislike-button svg:last-child {
  transform: rotate(180deg);
}

.comment-form-buttons {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
}

.comment-form-cancel {
  background-color: transparent !important;
  color: #cc1818 !important;
  border: none !important;
  box-shadow: none !important;
}

.comment_loadmore {
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  background-color: #6f57ff;
  color: white;
  font-family: yekan;
}

@media screen and (min-width: 768px) {
  .stickyyek,
  .adsstick {
    display: none;
  }
	.tavoos{
		display:table-caption;
	}
}
.adsstick {
  z-index: 2;
}
.stickyyek {
  position: fixed;
  top: 0;
  z-index: 2;
}
#block_2939 iframe {
  max-width: 100%;
}
.rubika,
.eitaa,
.bale {
  padding: 8px;
  background: #ef7c00;
  border-radius: 10px;
  color: #fff;
  margin-top: 10px;
}
.rubika {
  background-image: linear-gradient(95deg, #794387 40%, #af1b74 100%);
}
.bale {
  background: #47cca9;
}

/* کد های مربوط به سرچ گوگل */
.srch {
  min-height: 89px;
  margin-bottom: 15px;
  display: none;
  /*background:#ffffff;*/
}
.srch button {
  height: 57px;
  background: #6c6299;
}

.gsc-control-cse ,.gsc-control-cse .gsc-table-result {
    font-family: yekan,tahoma, sans-serif;
}
.gs-web-image-box {
  width: 100px !important;
}
.gs-bidi-start-align {
  text-align: right !important;
}
.gs-visibleUrl-breadcrumb {
  display: none !important;
}
button#share-btn {
  display: none;
}
@media screen and (max-width: 768px) {
  .srch {
    display: block;
  }
  button#share-btn {
    display: initial;
  }
}
table.gstl_50.gssb_c {
  position: fixed !important;
}
#gsc-i-id1 {
  vertical-align: text-bottom;
}
.gsc-control-cse {
  border-color: transparent !important;
  background-color: transparent !important;
}
/* کد های مربوط به سرچ گوگل */

/* تبلیغات و share */
.snowaads {
  width: 100%;
  height: auto;
}

#share-btn {
  font: 14px/2.2 yekan, tahoma;
  display: inline-block;
  padding: 10px;
  background: linear-gradient(to bottom, #1f1c2c 0%, #563ad0 100%);
  color: #fff;
  text-decoration: none;
  border-radius: 10px;
  font-weight: bold;
  /* 	position: fixed;
    bottom: 0;
    width: 100%;
    right: 0;
		z-index:1; */
}
#share-btn:hover {
  background-color: darkblue;
}

.fa-share {
  margin-right: 5px;
}

.menu-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.menu-logo b {
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: white;
}

.notation {
	background: #8981ae;
    background: linear-gradient(30deg,#1f1c2c,#8981ae);
    /* color: white; */
    padding: 10px;
	text-align:center;
	margin-bottom: 5px;
}
.notation a{
	    color: white;
    font-size: 20px;
	font-weight: 600;
}
.notation a::before{
	content: none;
}

@media screen and (max-width: 500px) {
    .notation a{
        font-size:14px;
    }
    
}
@media screen and (max-width: 350px) {
    .notation a{
        font-size:11px;
    }
    
}
.breads{
			min-height:40px;
}
span.rpwwt-post-title {
    padding-right: 5px;
}
.pyekta{
    min-height: 298px;
}
.yektabanner2 {
	background:none!important
}
#hlink{
	color: #f1f1f1;
    overflow: hidden;
    text-overflow: ellipsis;
	font: 16px yekan,tahoma;
	text-align:center;
	font-weight: bold;
}
.heading{
	text-align:center;
}
#mainmusic {
    margin: 10px 0;
    padding: 10px 10px 10px 10px;
    box-shadow: 2px 2px graytext;
    background: #00000030;
    background: #8981ae;
    background: linear-gradient(197deg,#1f1c2c,#8981ae);
    height: 75px;
    border-radius: 20px;
}
.socialsection{
	text-align:center;
}
mark{
	background:lightgray;
	padding:2px;
	border-radius: 5px;
}
/* For Mobile */
@media screen and (max-width: 540px) {
img.aligncenter {
    min-height: 258px;
		min-width:258px;
}

/* For Tablets */
@media screen and (min-width: 540px) and (max-width: 780px) {
img.aligncenter {
    height: 400px;
		width:400px;
}
	img.aligncenter {
    height: 400px;
		width:400px;
}
	

	
img.gncenter {
    height: 75px;
		width:319px!important;
}
	/* For Mobile */
@media screen and (max-width: 540px) {
	img.gncenter {
				    height: 61px;
		width:258px;
}
	@media screen and (min-width: 540px) and (max-width: 780px) {
	img.gncenter {
		    height: 75px;
		width:319px;
}
