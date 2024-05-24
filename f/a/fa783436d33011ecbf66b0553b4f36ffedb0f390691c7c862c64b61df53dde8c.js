/* Adform Default Styles used for default templates design */
/* If you want to modify or add something, the please follow documentation: */
/* http://support.adform.com/documentation/build-html5-banners/adform-html5-api-components/adform-styles-library/ */
/* If you want to remove default styling, please follow the comments in index.html */
@font-face {
  font-family: 'Source Sans Pro';
  src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url('//s1.adform.net/Banners/Scripts/assets/fonts/SourceSansPro-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Source Sans Pro';
  src: local('Source Sans Pro Semibold'), local('SourceSansPro-Semibold'), url('//s1.adform.net/Banners/Scripts/assets/fonts/SourceSansPro-Semibold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: 'adform';
  src: url('//s1.adform.net/Banners/Scripts/assets/fonts/adform.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
html,
body {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
img {
  border: none;
}
ol,
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.adf-Banner {
  position: absolute;
  overflow: hidden;
  cursor: pointer;
  font-family: 'Source Sans Pro', sans-serif;
  color: #fff;
}
.adf-Border {
  border: 1px solid #003C5A;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.u-sizeFull {
  width: 100%;
  height: 100%;
}
.u-hCentered {
  position: absolute;
  left: 50%;
  -webkit-transform: translate(-50%);
  -moz-transform: translate(-50%);
  -ms-transform: translate(-50%);
  -o-transform: translate(-50%);
  transform: translate(-50%);
}
.u-vCentered {
  position: absolute;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  -moz-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  -o-transform: translate(0, -50%);
  transform: translate(0, -50%);
}
.u-centered {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.adf-Logo {
  background: url('//s1.adform.net/Banners/Scripts/assets/images/logo-white.svg') no-repeat 50% 50% / 100%;
  position: absolute;
  top: 15px;
  left: 15px;
  height: 28px;
  width: 94px;
  cursor: pointer;
}
.adf-ClickArea {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.adf-Background {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #0A82BE;
}
.adf-Teal {
  background-color: #37A5AF;
}
.adf-Ice {
  background-color: #AAD2E6;
}
.adf-Button {
  position: absolute;
  cursor: pointer;
  font-size: 14px;
  line-height: 14px;
  padding: 7px;
  color: #fff;
  display: block;
  z-index: 20000;
  background-color: #005F8C;
}
.adf-Button:hover {
  background-color: #5AAAD2;
}
.adf-Close {
  background-color: #fff;
  color: #005F8C;
  top: 15px;
  right: 15px;
}
.adf-Close::after {
  font-family: 'adform';
  content: "\2716";
  padding-left: 5px;
  line-height: 14px;
  vertical-align: middle;
}
.adf-Round {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
}
.adf-Round::after {
  padding: 0 1px;
}
.adf-Controls {
  height: 29px;
  width: 29px;
  line-height: 29px;
  text-align: center;
  color: #005F8C;
  background-color: #fff;
  position: absolute;
  z-index: 9999;
  cursor: pointer;
}
.adf-Controls:hover {
  background-color: #5AAAD2;
  color: #005F8C;
}
.adf-Controls--left,
.adf-Controls--previous {
  left: 0;
}
.adf-Controls--left::after,
.adf-Controls--previous::after {
  font-family: 'adform';
  content: "\2190";
  vertical-align: middle;
}
.adf-Controls--right,
.adf-Controls--next {
  right: 0;
}
.adf-Controls--right::after,
.adf-Controls--next::after {
  font-family: 'adform';
  content: "\2192";
  vertical-align: middle;
}
.adf-Controls--up {
  top: 0;
}
.adf-Controls--up::after {
  font-family: 'adform';
  content: "\2191";
  vertical-align: middle;
}
.adf-Controls--down {
  bottom: 0;
}
.adf-Controls--down::after {
  font-family: 'adform';
  content: "\2193";
  vertical-align: middle;
}
.adf-Controls--previous.u-vControls {
  top: 0;
  left: 50%;
}
.adf-Controls--previous.u-vControls::after {
  font-family: 'adform';
  content: "\2191";
  vertical-align: middle;
}
.adf-Controls--next.u-vControls {
  bottom: 0;
  left: 50%;
}
.adf-Controls--next.u-vControls::after {
  font-family: 'adform';
  content: "\2193";
  vertical-align: middle;
}
.adf-Collapsed {
  position: absolute;
}
.adf-Expanded {
  position: absolute;
  display: none;
}
.adf-Info {
  font-size: 14px;
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: #fff;
  line-height: 14px;
}
.adf-Info-title {
  font-size: 18px;
  margin-bottom: 10px;
}
.adf-PanelTitle {
  font-weight: 600;
  color: #005F8C;
  position: absolute;
}
.adf-Video {
  background-color: #000;
}
.adform-video-container,
.adform-video-container video,
.adform-video-container .adform-video-poster {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000 no-repeat 50% 50%;
}
.adform-video-container-ios {
  position: static;
}
