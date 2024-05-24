!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){var n,o;
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(i){if(void 0===(o="function"==typeof(n=i)?n.call(t,r,t,e):n)||(e.exports=o),!0,e.exports=i(),!!0){var a=window.Cookies,s=window.Cookies=i();s.noConflict=function(){return window.Cookies=a,s}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var r=arguments[e];for(var n in r)t[n]=r[n]}return t}return function t(r){function n(t,o,i){var a;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},n.defaults,i)).expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*i.expires),i.expires=s}i.expires=i.expires?i.expires.toUTCString():"";try{a=JSON.stringify(o),/^[\{\[]/.test(a)&&(o=a)}catch(e){}o=r.write?r.write(o,t):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var d="";for(var c in i)i[c]&&(d+="; "+c,!0!==i[c]&&(d+="="+i[c]));return document.cookie=t+"="+o+d}t||(a={});for(var u=document.cookie?document.cookie.split("; "):[],p=/(%[0-9A-Z]{2})+/g,f=0;f<u.length;f++){var l=u[f].split("="),g=l.slice(1).join("=");this.json||'"'!==g.charAt(0)||(g=g.slice(1,-1));try{var v=l[0].replace(p,decodeURIComponent);if(g=r.read?r.read(g,v):r(g,v)||g.replace(p,decodeURIComponent),this.json)try{g=JSON.parse(g)}catch(e){}if(t===v){a=g;break}t||(a[v]=g)}catch(e){}}return a}}return n.set=n,n.get=function(e){return n.call(n,e)},n.getJSON=function(){return n.apply({json:!0},[].slice.call(arguments))},n.defaults={},n.remove=function(t,r){n(t,"",e(r,{expires:-1}))},n.withConverter=t,n}(function(){})})},function(e,t,r){"use strict";!function(){window.addEventListener("load",function(){!function(r){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var e="string"==typeof this.response?JSON.parse(this.response):this.response,t=e?e.adrId:null;""!==t&&null!==t&&void 0!==t&&r(t)}},o.open("POST","//"+(!0===t?"stg.":"")+"rtg-adroute.focas.jp/post",!0),-1!==navigator.userAgent.indexOf("Trident")?o.responseType="text":o.responseType="json";o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.withCredentials=!0,o.send((i=void 0!==e.get("adr_id")?e.get("adr_id"):"",a=!0===t?"&is_debug=1":"","rtg_mark_id="+n+"&url="+encodeURIComponent(location.href)+"&adr_id="+i+a));var i,a}(function(t){e.set("adr_id",t,{expires:730})})},!1);var e=r(0),t=void 0!==window.adroute_rtg_params&&"boolean"==typeof adroute_rtg_params.is_debug&&adroute_rtg_params.is_debug,n=void 0!==window.adroute_rtg_params&&"number"==typeof adroute_rtg_params.rtg_mark_id?adroute_rtg_params.rtg_mark_id:""}()}]);m30 {
  margin-bottom:30px;
}
.margin_bottom10 {
  margin-bottom:10px;
}
.margin_right10 {
  margin-right:10px;
}
.margin_left10 {
  margin-left:10px;
}
.padding3 {
  padding:3px;
}
.padding_top3 {
  padding-top:3px;
}
.padding_bottom3 {
  padding-bottom:3px;
}
.padding_right3 {
  padding-right:3px;
}
.padding_left3 {
  padding-left:3px;
}
.padding_5 {
  padding:5px;
}
.padding_top5 {
  padding-top:5px;
}
.padding_bottom5 {
  padding-bottom:5px;
}
.padding_right5 {
  padding-right:5px;
}
.padding_left5 {
  padding-left:5px;
}

/* brCramb
-------------------------------------------------------------*/
.brCramb.top{
  width: 970px;
  height: auto;
  margin: 0 auto 10px;
  padding: 3px 10px 2px;
  background: #f7f7f7;
  border-bottom: 1px solid #ddd;
  line-height: 18px;
  text-align: left;
  font-size: 12px;
  font-weight: normal;
  color: #373737;
}
.brCramb.top h1{
  display: inline;
  font-size: 12px;
  font-weight: normal;
}
.brCramb.top a{
  color:#069;
}
.brCramb.top span.brCramb_m:after{
  content: ">";
  padding: 0 3px;
  display: inline;
}

/* layout
-----------------------------------------------*/
.contentsWrapper {
  width: 965px;
  margin: 10px auto 0;
  padding-bottom: 1px;
  background: #fff;
  text-align: center;
}
.contentsWrapper * {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

/* sideNavi #navi_left
-----------------------------------------------*/
#navi_left {
  float: left;
  width: 182px;
  margin: 0;
  padding: 0;
  text-align: left;
}
#navi_left .navBanner {
  margin-bottom: 8px;
}
#navi_left .navBanner a {
  display: block;
}
#navi_left .navBanner a + a {
  margin-top: 6px;
}
#navi_left .btnQuestionnaire {
  margin-bottom: 6px;
}
#navi_left .btnQuestionnaire {
  border: 1px solid #FFB630;
  border-radius: 3px;
}
#navi_left .btnQuestionnaire a {
  display: block;
  width: 180px;
  line-height: 1.3;
  font-size: 14px;
  padding: 7px 0 5px 10px;
  background: #FFFAF2;
  border-top: 1px solid #FFB630;
  border-radius: 3px;
  text-decoration: none;
  font-feature-settings: "palt";
}
#navi_left .btnQuestionnaire a:first-child {
  border-top: none;
}
#navi_left .btnQuestionnaire a:hover{
  background: #fff;
}
#navi_left .btnQuestionnaire a .btn_text {
  font-weight: bold;
}
#navi_left .btnNewRegist {
  margin: 5px auto 8px !important;
  padding: 5px 0;
  background: #FFFBE9;
  border: 1px solid #FFBC58;
  border-radius: 3px;
  text-align: center;
}
#navi_left .btnNewRegist .new_regist_text {
  margin: 5px auto 3px;
  font-size: 10px;
}
#navi_left .btnNewRegist a,
#navi_left .btnNewRegist a:hover {
  display: block;
  text-decoration: none;
}
#navi_left .btnNewRegist .new_regist_btn {
  margin: 5px;
  padding: 10px 0;
  background: #F90;
  border: 1px solid #F90;
  border-radius: 3px;
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
}
#navi_left .naviArea,
#navi_left .navSearchComic,
#navi_left .navSearchTitle {
  margin: 0 auto 8px;
}
#navi_left .naviArea .menu_title,
#navi_left .navSearchComic .menu_title,
#navi_left .navSearchTitle .menu_title {
  font-size: 14px;
  font-weight: bold;
  padding: 0 5px;
  height: 30px;
  line-height: 34px;
  border-bottom: 2px solid #CCC;
  margin-bottom: 5px;
}
#navi_left .naviArea ul,
#navi_left .navSearchComic ul,
#navi_left .navSearchTitle ul {
  margin: 0 5px;
}
#navi_left .naviArea li a,
#navi_left .navSearchComic li a,
#navi_left .navSearchTitle li a {
  display: inline-block;
  position: relative;
  padding-left: 1em;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  color: #333;
  font-feature-settings: "palt";
}
#navi_left .naviArea li a:before,
#navi_left .navSearchComic li a:before,
#navi_left .navSearchTitle li a:before {
  display: block;
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  margin: -4px 2px 0 5px;
  border-style: solid;
  border-width: 3px 0 3px 5px;
  border-color: transparent transparent transparent #777;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
#navi_left .naviArea li a.markCheck:before {
  border-color: transparent transparent transparent #ff8c2f;
}
#navi_left .naviArea li.appeal_icon a,
#navi_left .navSearchTitle li.appeal_icon a {
  padding: 0;
}
#navi_left .naviArea ul li.appeal_icon a:before,
#navi_left .navSearchTitle ul li.appeal_icon a:before {
  content: none;
}
#navi_left .navSearchComic .sub_menu_title {
  padding: 0 5px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  color: #333;
  font-weight: bold;
}
#navi_left .navSearchComic ul + .sub_menu_title {
  height: 30px;
  border-top: 1px solid #E7E7E7;
  padding: 5px 5px 0;
  margin-top: 5px;
}

/* contentsArea
-----------------------------------------------*/
.contentsArea {
  float: right;
  width: 770px;
}

/* contentsArea Common
-----------------------------------------------*/
.contentsArea .pageTitle {
  display: block;
  width: 100%;
  margin: 0 auto;
  text-align: left;
  height: 28px;
  line-height: 28px;
}
.contentsArea .pageTitle .titleTxt {
  display: inline-block;
  height: 22px;
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
  vertical-align: middle;
  padding-left: 1px;
}
.contentsArea .pageTitle .titleSeo {
  display: inline-block;
  height: 22px;
  font-size: 14px;
  line-height: 22px;
  vertical-align: middle;
  padding-left: 15px;
}
.contentsArea .secArea .secTitle {
  display: block;
  position: relative;
  width: 740px;
  margin: 0 auto;
  text-align: left;
  height: 40px;
  line-height: 40px;
}
.contentsArea .secArea .secTitle a {
  display: block;
  text-decoration: none;
}
.contentsArea .secArea .secTitle a:after {
  content: '';
  display: block;
  clear: both;
  position: absolute;
  top: 50%;
  right: 3px;
  width: 6px;
  height: 6px;
  margin-top: -6px;
  border-top: 2px solid #666;
  border-right: 2px solid #666;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.contentsArea .secArea .secTitle .titleTxt {
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  color: #444;
}
.contentsArea .secArea .secTitle .rightLinkMore {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 16px;
  color: #444;
  font-weight: bold;
  padding-right: 15px;
}
.contentsArea .secArea .secTitle .titleSeo {
  display: inline-block;
  height: 22px;
  font-size: 14px;
  line-height: 22px;
  vertical-align: middle;
  padding-left: 15px;
}
.contentsArea .secArea .seoTxt {
  width: 740px;
  margin: 0 auto;
  text-align: left;
  font-size: 11px;
  color: #777;
}
.contentsArea .secArea .seoTxt .title {
  font-size: 11px;
  color: #777;
}
.contentsArea .secArea .secSubTitle {
  display: block;
  position: relative;
  width: 740px;
  margin: 0 auto;
  text-align: left;
  height: 30px;
  line-height: 30px;
}
.contentsArea .secArea .secSubTitle a {
  display: block;
  text-decoration: none;
}
.contentsArea .secArea .secSubTitle a:after {
  content: "";
  display: block;
  clear: both;
  position: absolute;
  top: 50%;
  right: 0;
  width: 6px;
  height: 6px;
  margin-top: -6px;
  border-top: 2px solid #ff8c2f;
  border-right: 2px solid #ff8c2f;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.contentsArea .secArea .secSubTitle .titleTxt {
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  color: #ff8c2f;
}
.contentsArea .secArea .secSubTitle .rightLinkMore {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 16px;
  color: #ff8c2f;
  font-weight: bold;
  padding-right: 15px;
}
/* swiper */
.contentsArea .swiper-wrapper {
  height: auto;
}

/* contentsArea bottomBtns
-----------------------------------------------*/
.contentsArea .secArea .bottomBtns {
  margin: 10px auto 0;
}
.contentsArea .secArea .bottomBtns a {
  display: block;
  position: relative;
  width: 430px;
  margin: 0 auto;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  text-decoration: none;
}
.contentsArea .secArea .bottomBtns a:after {
  content: '';
  display: block;
  clear: both;
  position: absolute;
  top: 50%;
  right: 8px;
  width: 6px;
  height: 6px;
  margin-top: -5px;
  border-top: 2px solid #666;
  border-right: 2px solid #666;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.contentsArea .bottomBtns a:hover {
  background: #fffdf5;
}
.contentsArea .secArea .bottomBtns.cells2 {
  width: 760px;
}
.contentsArea .secArea .bottomBtns.cells2 a {
  width: 360px;
  float: left;
  margin: 0 10px;
}

/* margin
-----------------------------------------------*/
.contentsArea .margin_b5 {
  margin-bottom: 5px !important;
}
.contentsArea .margin_b10 {
  margin-bottom: 10px !important;
}
.contentsArea .margin_b15 {
  margin-bottom: 15px !important;
}
.contentsArea .margin_b20 {
  margin-bottom: 20px !important;
}

.contentsArea .secArea + .asideBannerArea,
.contentsArea .asideBannerArea + .secArea,
.contentsArea .secArea + .margin_t55,
.contentsArea .secArea + script + .margin_t55 {
  margin-top: 55px !important;
}

/* topBanner(MAP)
-----------------------------------------------*/
.contentsArea .topBanner {
  text-align: right;
}
.contentsArea .upperBannerArea a {
  display: block;
}
.contentsArea .upperBannerArea img {
  width: 770px;
  height: 320px;
}

/* sliderBannerArea
-----------------------------------------------*/
.contentsArea .sliderBannerArea {
  width: 744px;
  margin: 0 auto;
}
.contentsArea .sliderBannerArea .swiper-slide,
.contentsArea .sliderBannerArea.cells3 .swiper-slide {
  /*IE用*/
  width: 33.33%;
  padding: 0 2px;
}
.contentsArea .sliderBannerArea.cells4 .swiper-slide {
  width: 25%;
}
.contentsArea .sliderBannerArea.cells2 .swiper-slide {
  width: 50%;
}
.contentsArea .sliderBannerArea .swiper-slide a {
  display: block;
  margin: 0 auto;
}
.contentsArea .sliderBannerArea img {
  width: 100%;
  height: auto;
  border: 1px solid #eee;
}

/* imgBannerAreaWide
-----------------------------------------------*/
.contentsArea .imgBannerAreaWide {
  width: 770px;
  margin: 0 auto;
}
.contentsArea .imgBannerAreaWide a {
  display: block;
  width: 254px;
  float: left;
}
.contentsArea .imgBannerAreaWide a + a {
  margin-left: 4px;
}
.contentsArea .imgBannerAreaWide img {
  width: 100%;
  height: auto;
}

/* imgBannerArea
-----------------------------------------------*/
.contentsArea .imgBannerArea {
  width: 744px;
  margin: 0 auto;
}
.contentsArea .imgBannerArea a {
  display: block;
  margin: 0 auto;
  padding: 0 2px;
}
.contentsArea .imgBannerArea img {
  width: 100%;
  height: auto;
  border: 1px solid #eee;
}
.contentsArea .imgBannerArea.cells4 a {
  width: 25%;
  float: left;
}
.contentsArea .imgBannerArea.column a:nth-child(4n+1) {
  clear: both;
}
.contentsArea .imgBannerArea.cells3 a {
  width: 33.33%;
  float: left;
}
.contentsArea .imgBannerArea.cells2 a {
  width: 50%;
  float: left;
}
.contentsArea .imgBannerArea.column a {
  margin-bottom: 5px;
}
.contentsArea .imgBannerArea.long a {
  display: inline-block;
  padding: 0;
}

/* asideBannerArea
-----------------------------------------------*/
.contentsArea .asideBannerArea {
  margin: 15px 0;
}
.contentsArea .asideBannerArea a {
  display: inline-block;
}

/* imgBannerArea sliderBannerArea 共通
-----------------------------------------------*/
.contentsArea .imgBannerArea .bottom_txt,
.contentsArea .imgBannerArea .small_txt,
.contentsArea .sliderBannerArea .bottom_txt,
.contentsArea .sliderBannerArea .small_txt {
  display: inline-block;
  text-align: left;
  font-size: 12px;
  padding-top: 3px;
}

/* information
-----------------------------------------------*/
.contentsArea .information,
.contentsArea .information + .navigate {
  margin-top: 15px;
}
.contentsArea .information a,
.contentsArea .information a:hover{
  display: table;
  table-layout: fixed;
  width: 740px;
  margin: 0 auto;
  text-align: left;
  padding: 8px 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-decoration: none;
  font-feature-settings: "palt";
}
.contentsArea .information.creca a,
.contentsArea .information.creca a:hover{
  background: #fff8f9;
}
.contentsArea .information span {
  display: table-cell;
  vertical-align: middle;
  font-size: 12px;
}
.contentsArea .information .info_text{
  text-align: left;
  font-weight: bold;
  padding-left: 10px;
  line-height: 1.4;
}
.contentsArea .information .no_read{
  width: 4em;
  text-align: center;
}
.contentsArea .information .info_cnt {
  display: inline-block;
  padding: 0 4px;
  background: #f00;
  -webkit-border-radius: 7px;
  border-radius: 7px;
  line-height: 1.4;
  text-align: center;
  color: #fff;
}

/* navigate
-----------------------------------------------*/
.contentsArea .navigate {
  display: table;
  width: 746px;
  text-align: center;
  margin: 0 auto;
  border-spacing: 3px 0;
}
.contentsArea .navigate a {
  display: table-cell;
  height: 34px;
  min-width: 50px;
  line-height: 34px;
  font-size: 12px;
  background: #f87cce;
  color: #fff;
  text-decoration: none;
  font-feature-settings: "palt";
}
.contentsArea .navigate a:first-child {
  border-radius: 3px 0 0 0;
}
.contentsArea .navigate a:last-child {
  border-radius: 0 3px 0 0;
}
.contentsArea .navigate a:hover {
  opacity: .8;
}

/* .resBox
-----------------------------------------------*/
.contentsArea .resBox,
.contentsArea .resBox.cells5,
.contentsArea .resBox.cells6 {
  width: 752px;
  margin: 0 auto;
}
.contentsArea .resBox.cells4 {
  width: 748px;
}
.contentsArea .resBox.sliderTitleArea {
  width: 746px;
  margin: 0 15px 0 auto;
}
.contentsArea .resBox li,
.contentsArea .resBox.cells6 li {
  width: 16.66%;
  display: block;
  float: left;
  padding: 0 6px;
}
.contentsArea .resBox.cells5 li {
  width: 20%;
}
.contentsArea .resBox.cells5 li:nth-child(5n+1) {
  clear: both;
}
.contentsArea .resBox.cells5 .swiper-slide {
  width: 20%;
  padding: 0 6px;
}
.contentsArea .resBox.cells4 li {
  width: 25%;
  padding: 0 4px;
}
.contentsArea .resBox.column li {
  margin-bottom: 20px;
}
.contentsArea .resBox .rankNum {
  color: #f60;
  font-size: 18px;
  line-height: 22px;
  height: 22px;
  text-align: center;
  margin: 0 auto;
}
.contentsArea .resBox .rankNum a {
  color: #f60;
  text-decoration: none;
}
.contentsArea .resBox .rankNum span {
  font-size: 14px;
}
.contentsArea .resBox .rankNumGenre {
  font-size: 13px;
  line-height: 20px;
  height: 20px;
  text-align: center;
  margin: 0 auto;
  color: #333;
}
.contentsArea .resBox .thumBox,
.contentsArea .resBox.cells6 .thumBox {
  height: 165px;
}
.contentsArea .resBox.cells5 .thumBox {
  height: 195px;
}
.contentsArea .resBox.cells4 .thumBox {
  height: 259px;
}
.contentsArea .resBox .thumBox a,
.contentsArea .resBox .thumBox span,
.contentsArea .resBox.cells6 .thumBox a {
  display: block;
  position: relative;
  height: 162px;
}
.contentsArea .resBox.cells5 .thumBox a {
  display: block;
  height: 192px;
}
.contentsArea .resBox.cells4 .thumBox a {
  display: block;
  height: 255px;
}
.contentsArea .resBox .camMark {
  position: absolute;
  top: 0;
  right: 0;
  background: #fff;
  border: 1px solid #d00;
  color: #d00;
  height: 18px;
  line-height: 18px;
  padding: 0 4px;
  font-size: 11px;
  z-index: 1;
}
.contentsArea .resBox .camMark.new {
  background: #ec1e0d;
  color: #fff;
}
.contentsArea .resBox .thumBox img {
  max-width: 100%;
  max-height: 100%;
  border: 1px solid #eee;
}
.contentsArea .resBox .swiper-slide img.plusMore {
  border: none;
}
.contentsArea .resBox .titleName {
  display: block;
  text-align: center;
  height: 16px;
  overflow: hidden;
}
.contentsArea .resBox .titleName a {
  color: #333;
  font-size: 12px;
  line-height: 17px;
  font-feature-settings: "palt";
}
.contentsArea .resBox .authorName {
  display: block;
  text-align: center;
  height: 16px;
  overflow: hidden;
  color: #767676;
}
.contentsArea .resBox .authorName a {
  color: #767676;
  font-size: 10px;
  line-height: 17px;
  font-feature-settings: "palt";
}
.contentsArea .resBox .reviewNum {
  display: block;
  text-align: center;
  height: 16px;
  font-size: 12px;
  line-height: 17px;
  overflow: hidden;
}
.contentsArea .resBox .reviewNum span {
  color: #f60;
}
.contentsArea .resBox .reviewStar {
  display: block;
  text-align: center;
  font-size: 12px;
  font-feature-settings: "palt";
}
.contentsArea .resBox .reviewStar img {
  height: 13px;
}
.contentsArea .resBox .btnBox {
  margin: 0 auto;
}
.contentsArea .resBox .btnBox a {
  display: block;
  width: 100%;
  height: 28px;
  margin: 4px auto;
  background: #fff;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0.00, #fff), color-stop(1.00, #f6f6f6));
  background: -webkit-linear-gradient(top, #fff 0%, #f6f6f6 100%);
  background: linear-gradient(to bottom, #fff 0%, #f6f6f6 100%);
  border: 1px solid #B3B3B3;
  border-radius: 4px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  line-height: 26px;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  color: #797979;
  text-decoration: none;
  font-feature-settings: "palt";
}
.contentsArea .resBox .btnBox a:hover {
  background: #fff;
}
.contentsArea .resBox .btnBox a.btn01 {
  background: #fbda37;
  border: 1px solid #d8c90f;
  color: #5c4d31;
}
.contentsArea .resBox .btnBox a.btn01:hover {
  background: #fbda37;
  opacity: .7;
}

/* newBooks変則 */
.contentsArea .resBox.colspan.cells5 li:nth-child(5n+1) {
  clear: none;
}
.contentsArea .resBox.colspan.cells5 li:nth-child(5n+4) {
  clear: both;
}
.contentsArea .resBox.cells5 li.wide {
  width: 60%;
  text-align: left;
}
.contentsArea .resBox.cells5 li.wide .thumBox {
  float: left;
  height: 250px;
  width: 170px;
}
.contentsArea .resBox.cells5 li.wide .thumBox a {
  height: 250px;
}
.contentsArea .resBox.cells5 li.wide .infoBox {
  float: left;
  max-width: 250px;
  margin-left: 10px;
}
.contentsArea .resBox.cells5 li.wide .titleName {
  text-align: left;
  height: 22px;
  padding-top: 2px;
}
.contentsArea .resBox.cells5 li.wide .titleName a {
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
}
.contentsArea .resBox.cells5 li.wide .authorName {
  text-align: left;
}
.contentsArea .resBox.cells5 li.wide .introduction {
  margin: 10px auto 3px;
  font-size: 13px;
  line-height: 16px;
  height: 160px;
  overflow: hidden;
}
.contentsArea .resBox.cells5 li.wide .introduction br {
  display: none;
}
.contentsArea .resBox.cells5 li.wide .btnBox {
  width: 140px;
  margin: 0 auto 0 0;
}

/* .bottomLinks
-----------------------------------------------*/
.contentsArea .bottomLinks {
  width: 740px;
  margin: 0 auto;
}
.contentsArea .bottomLinks li {
  float: left;
  border-bottom: 1px solid #ddd;
  border-left: 1px solid #ddd;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  text-align: center;
}
.contentsArea .bottomLinks li a {
  display: block;
  position: relative;
  width: 100%;
  height: 35px;
  line-height: 37px;
  font-size: 13px;
  text-decoration: none;
  font-feature-settings: "palt";
}
.contentsArea .bottomLinks li a:after {
  content: '';
  display: block;
  clear: both;
  position: absolute;
  top: 50%;
  right: 8px;
  width: 6px;
  height: 6px;
  margin-top: -5px;
  border-top: 1px solid #333;
  border-right: 1px solid #333;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.contentsArea .bottomLinks li a.img:after {
  display: none;
}
.contentsArea .bottomLinks li a:hover {
  background: #fffdf5;
}
.contentsArea .bottomLinks li a.img:hover {
  background: transparent;
}
.contentsArea .bottomLinks li a.thumbnail img {
  position: absolute;
  top: 50%;
  left: 8px;
  margin-top: -15px;
}

/* 3列構成 */
.contentsArea .bottomLinks.cells3 li {
  width: 33.33%;
}
.contentsArea .bottomLinks.cells3 li:nth-child(-n+3) {
  border-top: 1px solid #ddd;
}
.contentsArea .bottomLinks.cells3 li:nth-child(3n+3),
.contentsArea .bottomLinks.cells3 li:last-child {
  border-right: 1px solid #ddd;
}

/* ジャンルから探す(書影あり) */
.contentsArea .bottomLinks.cells7 li {
  width: 14.285%;
}
.contentsArea .bottomLinks.cells7 li:nth-child(-n+7) {
  border-top: 1px solid #ddd;
}
.contentsArea .bottomLinks.cells7 li:nth-child(7n+7),
.contentsArea .bottomLinks.cells7 li:last-child {
  border-right: 1px solid #ddd;
}
.contentsArea .bottomLinks.cells7 li a.img {
  width: 100%;
  height: 151px;
  line-height: 1.5;
}
.contentsArea .bottomLinks.cells7 li a.txt {
  padding-right: 15px;
  overflow: hidden;
  font-size: 12px;
}
.contentsArea .bottomLinks.cells7 li .title {
  font-size: 11px;
  line-height: 24px;
  height: 24px;
  overflow: hidden;
}
.contentsArea .bottomLinks.cells7 li figure {
  height: 125px;
}
.contentsArea .bottomLinks.cells7 li img {
  max-width: 90%;
  max-height: 120px;
}

/* ジャンルから探す(書影なし) */
.contentsArea .bottomLinks.cells4 li {
  width: 25%;
}
.contentsArea .bottomLinks.cells4 li:nth-child(-n+4) {
  border-top: 1px solid #ddd;
}
.contentsArea .bottomLinks.cells4 li:nth-child(4n+4),
.contentsArea .bottomLinks.cells4 li:last-child {
  border-right: 1px solid #ddd;
}

/* ジャンルから探す(書影あり+なし混合) */
.contentsArea .bottomLinks + .bottomLinks.cells4 li:nth-child(-n+4) {
  border-top: none;
}

/* コミック誌・雑誌・レーベルから探す */
.contentsArea .blockLinks {
  display: table;
  table-layout: fixed;
  width: 740px;
  margin: 0 auto;
}
.contentsArea .blockLinks a {
  display: table-cell;
  width: 16.666%;
  height: 64px;
  vertical-align: middle;
  text-align: center;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  font-feature-settings: "palt";
}
.contentsArea .blockLinks.first a {
  border-top: 1px solid #ddd;
}
.contentsArea .blockLinks a:first-child {
  border-left: 1px solid #ddd;
}
.contentsArea .blockLinks a.txt:hover {
  background: #fffdf5;
}
.contentsArea .blockLinks img {
  width: 85%;
  padding: 10px 0;
}
.contentsArea .blockLinks .magazineName {
  display: inline-block;
  text-align: left;
  font-size: 11px;
  line-height: 16px;
  padding: 0 8px;
}
.contentsArea .secArea .secGenreTitle {
  width: 740px;
  margin: 0 auto 2px;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  color: #666;
}
.contentsArea .blockLinks + .secGenreTitle,
.contentsArea .bottomLinks + .secGenreTitle {
  margin-top: 10px !important;
}

/* .precedeBooks
-----------------------------------------------*/
.contentsArea .precedeBooks {
  background: #fdcfd2;
  border-top: 2px solid #ff6e78;
  border-bottom: 1px solid #ff6e78;
  padding-top: 5px;
  margin: 55px auto;
}
.contentsArea .precedeBooks img {
  border: none;
}
.contentsArea .secArea.precedeBooks .seoTxt .title {
  color: #555;
}
.contentsArea .precedeBooks .resBox .authorName {
  color: #333;
}
.contentsArea .precedeBooks .resBox .authorName a {
  color: #333;
}
.contentsArea .secArea.precedeBooks .bottomBtns a {
  border: 1px solid #ff6e78;
  color: #e01724;
}
.contentsArea .secArea.precedeBooks .bottomBtns a:after {
  border-top: 2px solid #ff6e78;
  border-right: 2px solid #ff6e78;
}
.contentsArea .secArea.precedeBooks .bottomBtns a:hover {
  background: #fff;
  opacity: .8;
}

/* .tableBlock #staffRecommend #goodReviews 共通
-----------------------------------------------*/
.contentsArea .tableBlock {
  display: table;
  table-layout: fixed;
  width: 770px;
  margin: 0 auto;
}
.contentsArea .tableBlock .tableBlockCell {
  display: table-cell;
  width: 33.33%;
  vertical-align: top;
  text-align: center;
  padding: 6px 15px;
  border-left: 1px solid #ccc;
}
.contentsArea .tableBlock .tableBlockCell:first-child {
  border-left: none;
}
.contentsArea .tableBlock .tableBlockCell .thumBox {
  display: block;
  width: 40%;
  float: left;
}
.contentsArea .tableBlock .tableBlockCell .thumBox a {
  display: block;
  text-align: left;
}
.contentsArea .tableBlock .tableBlockCell .thumBox img {
  max-width: 100%;
  max-height: 100%;
  border: 1px solid #eee;
}
.contentsArea .tableBlock .tableBlockCell .titleInfoBox {
  display: block;
  position: relative;
  width: 60%;
  padding: 2px 0 5px 8px;
  float: right;
  text-align: left;
}
.contentsArea .tableBlock .tableBlockCell .titleInfoBox .titleName a {
  color: #333;
  font-weight: bold;
  font-feature-settings: "palt";
}
.contentsArea .tableBlock .tableBlockCell .titleInfoBox .authorName {
  height: 17px;
  overflow: hidden;
  color: #767676;
  font-size: 12px;
  line-height: 18px;
}
.contentsArea .tableBlock .tableBlockCell .titleInfoBox .authorName a {
  color: #767676;
  font-size: 12px;
  line-height: 18px;
  font-feature-settings: "palt";
}
.contentsArea .tableBlock .tableBlockCell .btnBox {
  width: 130px;
  position: absolute;
  bottom: 5px;
  right: 0;
}
.contentsArea .tableBlock .tableBlockCell .btnBox a {
  display: block;
  width: 100%;
  height: 28px;
  margin: 0 auto;
  background: #fff;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0.00, #fff), color-stop(1.00, #f6f6f6));
  background: -webkit-linear-gradient(top, #fff 0%, #f6f6f6 100%);
  background: linear-gradient(to bottom, #fff 0%, #f6f6f6 100%);
  border: 1px solid #B3B3B3;
  border-radius: 4px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  line-height: 26px;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  color: #797979;
  text-decoration: none;
  font-feature-settings: "palt";
}
.contentsArea .tableBlock .tableBlockCell .btnBox a:hover {
  background: #fff;
}
.contentsArea .tableBlock .tableBlockCell input.readMore {
  display: none;
}
.contentsArea .tableBlock .tableBlockCell label {
  display: block;
}
.contentsArea .tableBlock .tableBlockCell label .open,
.contentsArea .tableBlock .tableBlockCell label .close {
  color: #333;
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-line: underline;
  text-decoration-skip-ink: none;
  text-align: left;
  cursor: pointer;
}
.contentsArea .tableBlock .tableBlockCell label .close {
  display: none;
}
.contentsArea .tableBlock .tableBlockCell label .open:after {
  content: "▼";
  display: inline;
}
.contentsArea .tableBlock .tableBlockCell label .close:after {
  content: "▲";
  display: inline;
}
.contentsArea .tableBlock .tableBlockCell .reviewText {
  display: block;
  font-size: 12px;
  line-height: 18px;
  height: 36px;
  overflow: hidden;
}
.contentsArea .tableBlock .tableBlockCell .reviewText br {
  display: none;
}
.contentsArea .tableBlock .tableBlockCell input.readMore:checked ~ label .reviewText {
  height: auto;
}
.contentsArea .tableBlock .tableBlockCell input.readMore:checked ~ label .open {
  display: none;    
}
.contentsArea .tableBlock .tableBlockCell input.readMore:checked ~ label .close {
  display: block;
}

/* .tableBlock #staffRecommend
-----------------------------------------------*/
.contentsArea .tableBlock.three .tableBlockCell {
  width: 33.33%;
}
.contentsArea .tableBlock.three .tableBlockCell .thumBox a {
  height: 130px;
}
.contentsArea .tableBlock.three .tableBlockCell .titleInfoBox {
  height: 130px;
}
.contentsArea .tableBlock.three .tableBlockCell .titleInfoBox .titleName {
  font-size: 13px;
  line-height: 16px;
  max-height: 64px;
  overflow: hidden;
  margin-bottom: 3px;
}
.contentsArea .tableBlock.three .tableBlockCell .titleInfoBox .titleName a {
  font-size: 13px;
  line-height: 16px;
}
.contentsArea .tableBlock .tableBlockCell .reviewBlock {
  display: block;
  width: 100%;
  float: left;
  text-align: left;
  margin-top: 5px;
}
.contentsArea .tableBlock .tableBlockCell .reviewBlock .reviewTitle {
  display: block;
  font-size: 13px;
  font-weight: bold;
}

/* .tableBlock #goodReviews * nologin
-----------------------------------------------*/
.contentsArea .tableBlock.two .tableBlockCell {
  width: 50%;
}
.contentsArea .tableBlock .tableBlockCell .rankNum {
  color: #f60;
  font-size: 18px;
  line-height: 22px;
  height: 22px;
  text-align: center;
  margin: 0 auto;
}
.contentsArea .tableBlock .tableBlockCell .rankNum span {
  font-size: 14px;
}
.contentsArea .tableBlock.two .tableBlockCell .thumBox a {
  height: 200px;
}
.contentsArea .tableBlock.two .tableBlockCell .titleInfoBox .titleName {
  font-size: 14px;
  line-height: 19px;
  height: 20px;
  overflow: hidden;
  word-break: break-all;
}
.contentsArea .tableBlock.two .tableBlockCell .titleInfoBox .titleName a {
  font-size: 14px;
  line-height: 19px;
}
.contentsArea .tableBlock.two .tableBlockCell .titleInfoBox .reviewStar {
  margin-bottom: 10px;
  font-size: 12px;
}
.contentsArea .tableBlock.two .tableBlockCell .titleInfoBox .reviewStar span {
  margin-left: 2px;
  vertical-align: text-bottom;
}
.contentsArea .tableBlock.two .tableBlockCell .titleInfoBox .reviewTitle {
  margin-top: 10px;
  color: #d00;
  font-size: 12px;
  line-height: 17px;
  height: 16px;
  overflow: hidden;
}
.contentsArea .tableBlock.two .tableBlockCell .reviewText {
  font-size: 13px;
  line-height: 18px;
  height: 54px;
  overflow: hidden;
}
.contentsArea .tableBlock.two .tableBlockCell .reviewText.all {
  height: auto;
}
/*ネタばれ*/
.contentsArea .tableBlock.two .tableBlockCell .attention {
  font-size: 12px;
  font-weight: bold;
  color: #d00;
  margin-bottom: 2px;
}
.contentsArea .tableBlock.two .tableBlockCell .attention + .reviewText {
  height: 0;
}

/* prizeArea
-----------------------------------------------*/
.contentsArea .prizeTopBlock .prizeTitle {
  display: block;
  position: relative;
  width: 740px;
  margin: 0 auto;
  text-align: left;
  height: 34px;
  line-height: 34px;
}
.contentsArea .prizeTopBlock .prizeTitle a {
  display: block;
  text-decoration: none;
}
.contentsArea .prizeTopBlock .prizeTitle a:after {
  content: "";
  display: block;
  clear: both;
  position: absolute;
  top: 50%;
  right: 3px;
  width: 6px;
  height: 6px;
  margin-top: -6px;
  border-top: 2px solid #4671cc;
  border-right: 2px solid #4671cc;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.contentsArea .prizeTopBlock .prizeTitle .titleTxt {
  font-size: 18px;
  color: #4671cc;
}
.contentsArea .prizeTopBlock .prizeTitle .rightLinkMore {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 16px;
  color: #4671cc;
  font-weight: bold;
  padding-right: 15px;
}
.contentsArea .secArea.prizeArea .bottomBtns.cells2 a {
  border: 1px solid #4671cc;
  color: #3964be;
}
.contentsArea .secArea.prizeArea .bottomBtns.cells2 a:after {
  border-top: 2px solid #4671cc;
  border-right: 2px solid #4671cc;
}
.contentsArea .secArea.prizeArea .bottomBtns.cells2 a:hover {
  background: #fafafa;
}

/* #article .smallBannerText
-----------------------------------------------*/
.contentsArea .smallBannerText {
  display: table;
  width: 756px;
  margin: 0 auto;
  table-layout: fixed;
}
.contentsArea .smallBannerText + .smallBannerText {
  border-top: 1px dotted #ccc;
}
.contentsArea .smallBannerText .left_box {
  display: table-cell;
  width: 240px;
  padding: 8px;
  background: #fff;
  vertical-align: top;
}
.contentsArea .smallBannerText.top .left_box {
  padding: 3px 8px 8px;
}
.contentsArea .smallBannerText .left_box a {
  display: block;
}
.contentsArea .smallBannerText .left_box img {
  width: 224px;
  height: auto;
}
.contentsArea .smallBannerText .right_box {
  display: table-cell;
  width: 516px;
  vertical-align: top;
  text-align: left;
  padding: 10px 8px 0px 8px;
}
.contentsArea .smallBannerText.top .right_box {
  padding: 4px 8px 0 8px;
}
.contentsArea .smallBannerText .right_box .txt1 {
  font-size: 14px;
  font-weight: bold;
}
.contentsArea .smallBannerText .right_box .txt1 a {
  display: block;
  color: #555;
  text-decoration: none;
}
.contentsArea .smallBannerText .right_box .txt2 {
  padding: 5px 0;
  line-height: 20px;
  text-align: left;
  font-size: 13px;
  font-weight: normal;
}
.contentsArea .smallBannerText .right_box .txt2 a {
  display: block;
  color: #555;
  text-decoration: none;
}



/* .fix5Area (recent_title & recent_c_m)
   .fix6Area (recommendTitle)
-----------------------------------------------*/
.contentsArea .fix6Area.recommendTitle {
  margin-bottom: 10px;
}
.contentsArea .fix5Area.recent_title,
.contentsArea .fix4Area.recent_sale,
.contentsArea .fix5Area recent_c_m {
  margin-top: 55px;
  margin-bottom: 55px;
}
.contentsArea .fix5Area.c_m_title {
  margin-bottom: 55px;
}
.contentsArea .asideBannerArea + .fix6Area + .fix6Area,
.contentsArea .asideBannerArea + .fix5Area,
.contentsArea .asideBannerArea + .fix5Area + .fix5Area,
.contentsArea .asideBannerArea + .fix4Area,
.contentsArea .asideBannerArea + .fix4Area + .fix5Area{
  margin-top: 55px;
}
.contentsArea .fix6Area .secTitle,
.contentsArea .fix5Area .secTitle,
.contentsArea .fix4Area .secTitle {
  display: block;
  position: relative;
  width: 740px;
  margin: 0 auto;
  text-align: left;
  height: 40px;
  line-height: 40px;
}
.contentsArea .fix6Area .secTitle a {
  display: block;
  text-decoration: none;
}
.contentsArea .fix6Area .secTitle a:after,
.contentsArea .fix5Area .secTitle a:after,
.contentsArea .fix4Area .secTitle a:after {
  content: '';
  display: block;
  clear: both;
  position: absolute;
  top: 50%;
  right: 0;
  width: 6px;
  height: 6px;
  margin-top: -6px;
  border-top: 2px solid #666;
  border-right: 2px solid #666;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.contentsArea .fix6Area .secTitle .titleTxt,
.contentsArea .fix5Area .secTitle .title_name,
.contentsArea .fix4Area .secTitle .title_name{
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  color: #444;
}
.contentsArea .fix5Area .secTitle .right_top_link,
.contentsArea .fix4Area .secTitle .right_top_link{
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 16px;
  color: #444;
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-line: underline;
  text-decoration-skip-ink: none;
  cursor: pointer;
}
.contentsArea .fix6Area .secTitle .rightLinkMore {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 16px;
  color: #444;
  font-weight: bold;
  padding-right: 15px;
}
.contentsArea .fix6Area .seoTxt,
.contentsArea .fix5Area .subTitle,
.contentsArea .fix4Area .subTitle{
  width: 740px;
  margin: 0 auto;
  font-size: 11px;
  color: #777;
  text-align: left;
}
.contentsArea .fix6Area .seoTxt .title {
  font-size: 11px;
  color: #777;
}

/* slick slider */
.contentsArea .slick-slider {
  position: relative;
  display: block;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}
.contentsArea .fix5Area .sliderBlock {
  height: 235px;
  overflow: hidden;
}
.contentsArea .sliderBlock .slick-arrow {
  position: absolute;
  display: block;
  top: 50%;
  margin-top: -30px;
  width: 16px;
  height: 16px;
  border: none;
  border-top: 2px solid #999;
  border-right: 2px solid #999;
  padding: 0;
  color: transparent;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  -webkit-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
.contentsArea .sliderBlock .slick-arrow.slick-disabled {
  cursor: default;
  border-top: 2px solid #E7E7E7;
  border-right: 2px solid #E7E7E7;
}
.contentsArea .sliderBlock .slick-arrow.slick-prev {
  left: 3px;
}
.contentsArea .sliderBlock .slick-arrow.slick-next {
  right: 3px;
  transform: rotate(45deg);
}
.contentsArea .sliderBlock .slick-list {
  position: relative;
  display: block;
  width: 750px;
  overflow: hidden;
  margin: 0 auto;
  padding: 0;
}
.contentsArea .slick-slider .slick-track,
.contentsArea .slick-slider .slick-list {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.contentsArea .slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
}
.contentsArea .slick-track:before,
.contentsArea .slick-track:after {
  display: table;
  content: '';
}
.slick-track:after {
  clear: both;
}
.contentsArea .slick-slide {
  display: none;
  float: left;
  height: 100%;
  min-height: 1px;
}
.contentsArea .slick-initialized .slick-slide {
  display: block;
}
.contentsArea .sliderBlock .slick-slide {
  margin: 5px;
}
.contentsArea .sliderBlock .slick-slide .thum_box {
  position: relative;
  margin: 0 auto;
  background: #FFF;
  vertical-align: top;
  text-align: center;
}
.contentsArea .sliderBlock .cam_mark {
  position: absolute;
  top: 0;
  right: 1px;
  background: #fff;
  border: 1px solid #d00;
  color: #d00;
  height: 18px;
  line-height: 18px;
  padding: 0 4px;
  font-size: 10px;
  z-index: 1;
}
.contentsArea .fixBox .thum_box a {
  display: block;
  height: 190px;
}
.contentsArea .sliderBlock .slick-slide .thum_box img {
  max-width: 100%;
  max-height: 100%;
  border: 1px solid #eee;
}
.contentsArea .sliderBlock .slick-slide .thum_box + .text_box {
  margin: 5px 4px 0;
}
.contentsArea .sliderBlock .slick-slide .title_name {
  height: 13px;
  font-size: 12px;
  line-height: 14px;
  color: #333;
  margin-bottom: 4px;
  word-break: break-word;
  overflow: hidden;
}
.contentsArea .fixBox .title_name a {
  color: #333;
}
.contentsArea .sliderBlock .slick-slide .author_name {
  width: auto;
  height: 13px;
  font-size: 10px;
  line-height: 14px;
  color: #777;
  text-align: center;
  word-break: break-word;
  overflow: hidden;
}
.contentsArea .sliderBlock .slick-slide .author_name a {
  color: #777;
}

/* fix4Area recommendSale */
.contentsArea .fix4Area ul {
  width: 744px;
  margin: 0 auto;
}
.contentsArea .fix4Area li {
  width: 25%;
  float: left;
  text-align: center;
  padding: 5px 2px 0;
}
.contentsArea .fix4Area a {
  display: inline-block;
  width: 100%;
}
.contentsArea .fix4Area img {
  width: 100%;
  height: auto;
  border: 1px solid #eee;
}

/* bottomBtns */
.contentsArea .fix5Area .bottomBtns,
.contentsArea .fix4Area .bottomBtns {
  margin: 10px auto 0;
}
.contentsArea .fix5Area .bottomBtns a,
.contentsArea .fix4Area .bottomBtns a {
  display: block;
  position: relative;
  width: 430px;
  margin: 0 auto;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  text-decoration: none;
}
.contentsArea .fix5Area .bottomBtns a:after,
.contentsArea .fix4Area .bottomBtns a:after {
  content: '';
  display: block;
  clear: both;
  position: absolute;
  top: 50%;
  right: 8px;
  width: 6px;
  height: 6px;
  margin-top: -5px;
  border-top: 2px solid #666;
  border-right: 2px solid #666;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

/* .fix5Area (c_m_title)
-----------------------------------------------*/
.contentsArea .fix5Area.c_m_title .secTitle {
  display: none;
}
.contentsArea .fix5Area .fixBox ul {
  width: 752px;
  margin: 0 auto;
}
.contentsArea .fix5Area.c_m_title .fixBox li {
  width: 20%;
  display: block;
  float: left;
  padding: 5px 6px;
}
.contentsArea .fix5Area.c_m_title .fixBox a {
  position: relative;
  height: 197px;
}
.contentsArea .fix5Area.c_m_title .fixBox .cam_mark {
  position: absolute;
  top: 0;
  right: 0;
  background: #fff;
  border: 1px solid #d00;
  color: #d00;
  height: 18px;
  line-height: 18px;
  padding: 0 4px;
  font-size: 10px;
  z-index: 1;
}
.contentsArea .fix5Area.c_m_title .fixBox img {
  max-width: 100%;
  max-height: 100%;
  border: 1px solid #eee;
}
.contentsArea .fix5Area.c_m_title .fixBox .free_btn {
  margin: 4px auto;
}
.contentsArea .fix5Area.c_m_title .fixBox .free_btn a {
  display: block;
  width: 100%;
  height: 28px;
  margin: 0 auto;
  background: #fff;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0.00, #fff), color-stop(1.00, #f6f6f6));
  background: -webkit-linear-gradient(top, #fff 0%, #f6f6f6 100%);
  background: linear-gradient(to bottom, #fff 0%, #f6f6f6 100%);
  border: 1px solid #B3B3B3;
  border-radius: 4px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  line-height: 26px;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  color: #797979;
  text-decoration: none;
  font-feature-settings: "palt";
}
.contentsArea .fix5Area.c_m_title .fixBox .free_btn a:hover {
  background: #fff;
}
.contentsArea .fix5Area.c_m_title .fixBox .title_name {
  display: block;
  text-align: center;
  height: 16px;
  overflow: hidden;
}
.contentsArea .fix5Area.c_m_title .fixBox .title_name a {
  color: #333;
  font-size: 12px;
  line-height: 17px;
  font-feature-settings: "palt";
}
.contentsArea .fix5Area.c_m_title .fixBox .author_name {
  display: block;
  text-align: center;
  height: 16px;
  overflow: hidden;
  color: #767676;
}
.contentsArea .fix5Area.c_m_title .fixBox .author_name a {
  color: #767676;
  font-size: 10px;
  line-height: 17px;
  font-feature-settings: "palt";
}
.contentsArea .fix5Area.c_m_title .bottomBtns {
  display: none;
}

/* .fix6Area (recommendTitle)
-----------------------------------------------*/
.contentsArea .fix6Area .fixBox ul {
  width: 752px;
  margin: 0 auto;
}
.contentsArea .fix6Area .fixBox ul:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
.contentsArea .fix6Area.recommendTitle .fixBox li {
  width: 16.66%;
  display: block;
  float: left;
  padding: 5px 6px;
}
.contentsArea .fix6Area.recommendTitle .fixBox .genre_name {
  margin-bottom: 3px;
}
.contentsArea .fix6Area.recommendTitle .fixBox .genre_name p {
  font-size: 12px;
}
.contentsArea .fix6Area.recommendTitle .fixBox .genre_name.hq p {
  font-size: 11px;
  letter-spacing: -2px;
}
.contentsArea .fix6Area.recommendTitle .fixBox .thum_box {
  height: 165px;
}
.contentsArea .fix6Area.recommendTitle .fixBox a {
  position: relative;
  height: 162px;
}
.contentsArea .fix6Area.recommendTitle .fixBox .cam_mark {
  position: absolute;
  top: 0;
  right: 0;
  background: #fff;
  border: 1px solid #d00;
  color: #d00;
  height: 18px;
  line-height: 18px;
  padding: 0 4px;
  font-size: 10px;
  z-index: 1;
}
.contentsArea .fix6Area.recommendTitle .fixBox .thum_box img {
  max-width: 100%;
  max-height: 100%;
  border: 1px solid #eee;
}
.contentsArea .fix6Area.recommendTitle .fixBox .title_name {
  display: block;
  text-align: center;
  height: 16px;
  overflow: hidden;
}
.contentsArea .fix6Area.recommendTitle .fixBox .title_name a {
  color: #333;
  font-size: 12px;
  line-height: 17px;
  font-feature-settings: "palt";
}
.contentsArea .fix6Area.recommendTitle .fixBox .author_name {
  display: block;
  text-align: center;
  height: 16px;
  font-size: 10px;
  line-height: 17px;
  overflow: hidden;
  color: #767676;
}
.contentsArea .fix6Area.recommendTitle .fixBox .author_name a {
  color: #767676;
  font-size: 10px;
  line-height: 17px;
  font-feature-settings: "palt";
}

/* .notbuy ★不要かも
-----------------------------------------------*/
#notbuy .think_later_area {
  margin: 55px auto;
}
.contentsArea .notbuy .think_later_area .contents_right_co_title {
  display: block;
  width: 740px;
  margin: 0 auto;
  text-align: left;
  height: 40px;
  line-height: 40px;
}
.contentsArea .notbuy .think_later_area .contents_right_co_title span {
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  color: #444;
}
.contentsArea .notbuy .think_later_area ul {
  width: 752px;
  margin: 0 auto;
}
.contentsArea .notbuy .think_later_area li {
  width: 16.66%;
  display: block;
  float: left;
  padding: 5px 6px;
}
.contentsArea .notbuy .think_later_area li .thum_box3 a,
.contentsArea .notbuy .think_later_area li .thum_box3 span{
  display: block;
  height: 155px;
}
.contentsArea .notbuy .think_later_area li .thum_box3 img {
  max-width: 100%;
  max-height: 100%;
  border: 1px solid #eee;
}
.contentsArea .notbuy .think_later_area li .cover_unit_top_title {
  display: block;
  text-align: center;
  height: 16px;
  overflow: hidden;
  margin-top: 5px;
}
.contentsArea .notbuy .think_later_area li .cover_unit_top_title h5 {
  color: #333;
  font-size: 12px;
  line-height: 17px;
  font-feature-settings: "palt";
  font-weight: normal;
}
.contentsArea .notbuy .think_later_area li .campaign_block span {
  display: block;
  width: 100%;
  height: 20px;
  line-height: 20px;
  margin: 5px auto 0;
  background: #FFF;
  border: 1px solid #F06;
  font-size: 12px;
  font-weight: bold;
  color: #F06;
  text-align: center;
  vertical-align: middle;
  letter-spacing: 0;
}
.free2_m:after {
  content: "無料";
  display:block;
  clear:both;
  letter-spacing: 6px;
  padding-left: 6px;
}
.contentsArea .notbuy .think_later_area li .campaign_block .down_m:after {
  display: inline;
  content: "値下げ";
  clear: both;
  letter-spacing: 2px;
  padding-left: 2px;
}
.point_m:after {
  content:"ポイント還元";
  display:block;
  clear:both;
}

/* .notbuy footer_co_btn_w ★不要かも
-----------------------------------------------*/
.contentsArea .notbuy .footer_co_btn_w {
  margin-top: 5px;
  display: table;
  width: 752px;
  margin: 10px auto 0;
  table-layout: fixed;
}
.contentsArea .notbuy .footer_co_btn_w .footer_co_btn_inner {
  display: table-cell;
  vertical-align: top;
  padding: 0 6px;
}
.contentsArea .notbuy .footer_co_btn_w .footer_co_btn_inner a {
  display: block;
  position: relative;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  text-align: center;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  text-decoration: none;
}
.contentsArea .notbuy .footer_co_btn_w .footer_co_btn_inner a:after {
  display: block;
  content: "";
  clear: both;
  position: absolute;
  top: 50%;
  right: 8px;
  width: 6px;
  height: 6px;
  margin-top: -5px;
  border-top: 2px solid #666;
  border-right: 2px solid #666;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.contentsArea .notbuy .footer_co_btn_w .footer_co_btn_inner a:hover {
  background: #fffdf5;
}
