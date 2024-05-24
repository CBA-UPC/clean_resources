._cm-div {
  height: 0px;
  transition: height 1s;
  height: auto !important;
}
#_cm-css-reset._cm-floating-component-modal-wrapper {
  position: absolute;
}
#_cm-video-unit,
#_cm-video-unit div {
  margin: auto;
  padding: 0px 0px 0px 0px;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  line-height: 1;
  font-family: arial;
}
#_cm-video-unit._cm-inline {
  width: 100% !important;
  height: 0;
  overflow: hidden !important;
  /* Set our transitions up. */
  -webkit-transition: max-height 1s;
  -moz-transition: max-height 1s;
  transition: height 1s;
  float: none !important;
  clear: both !important;
  margin: 0px 0px 0px 0px !important;
  padding: 0px 0px 0px 0px !important;
}
#_cm-video-unit._cm-feed-manager {
  width: 100% !important;
  height: 0;
  overflow: hidden !important;
  position: relative;
  /* Set our transitions up. */
  -webkit-transition: max-height 1s;
  -moz-transition: max-height 1s;
  float: none !important;
  clear: both !important;
  margin: 0px 0px 0px 0px !important;
  padding: 0px 0px 0px 0px !important;
}
#_cm-video-unit._cm-feed-manager ._cm-feed-manager-video-placeHolder {
  width: 100%;
}
#_cm-video-unit._cm-inline-no-transition {
  -webkit-transition: max-height 0s;
  -moz-transition: max-height 0s;
  transition: height 0s;
}
#_cm-video-unit._cm-inline ._cm-inline-video {
  position: relative;
  float: none;
  clear: both;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  /*background-color: black;*/
  height: 100%;
  width: auto;
}
#_cm-video-unit._cm-inline ._cm-ad-title {
  text-align: center;
  font-family: arial;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 0 !important;
  background-color: white;
  color: #ababab;
  border: none;
  float: none;
  width: 100%;
}
#_cm-video-unit._cm-inline ._cm-os-player {
  background: black;
  width: 100%;
  float: none;
  clear: both;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2147483647;
}
.mid-article-as-feed {
  height: 100% !important;
}
.mid-article-as-feed + .tbl-feed-card {
  position: absolute;
  top: 0;
  z-index: -1;
  opacity: 0;
}
[data-placement-name='Reco Reel On Demand Outstream'] .reco-reel-above-feed-hide,
[data-placement-name='Reco Reel On Demand Instream'] .reco-reel-above-feed-hide,
[data-placement-name='Reco Reel Instream'] .reco-reel-above-feed-hide {
  visibility: hidden;
  position: fixed;
  overflow: hidden;
  z-index: -1;
}
[data-parent-placement-name='Below Article Thumbnails -March 2017'].reco-reel-above-feed-style,
[data-parent-placement-name='Mobile Article Thumbnails'].reco-reel-above-feed-style,
[data-parent-placement-name='Below Article Thumbnails 2nd'].reco-reel-above-feed-style,
[data-parent-placement-name='Below Article Thumbnails'].reco-reel-above-feed-style {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-basis: 100%;
}
[data-parent-placement-name='Below Article Thumbnails -March 2017'].reco-reel-above-feed-style [data-placement-name='Reco Reel On Demand Outstream'],
[data-parent-placement-name='Mobile Article Thumbnails'].reco-reel-above-feed-style [data-placement-name='Reco Reel On Demand Outstream'],
[data-parent-placement-name='Below Article Thumbnails 2nd'].reco-reel-above-feed-style [data-placement-name='Reco Reel On Demand Outstream'],
[data-parent-placement-name='Below Article Thumbnails'].reco-reel-above-feed-style [data-placement-name='Reco Reel On Demand Outstream'],
[data-parent-placement-name='Below Article Thumbnails -March 2017'].reco-reel-above-feed-style [data-placement-name='Reco Reel On Demand Instream'],
[data-parent-placement-name='Mobile Article Thumbnails'].reco-reel-above-feed-style [data-placement-name='Reco Reel On Demand Instream'],
[data-parent-placement-name='Below Article Thumbnails 2nd'].reco-reel-above-feed-style [data-placement-name='Reco Reel On Demand Instream'],
[data-parent-placement-name='Below Article Thumbnails'].reco-reel-above-feed-style [data-placement-name='Reco Reel On Demand Instream'],
[data-parent-placement-name='Below Article Thumbnails -March 2017'].reco-reel-above-feed-style [data-placement-name='Reco Reel Instream'],
[data-parent-placement-name='Mobile Article Thumbnails'].reco-reel-above-feed-style [data-placement-name='Reco Reel Instream'],
[data-parent-placement-name='Below Article Thumbnails 2nd'].reco-reel-above-feed-style [data-placement-name='Reco Reel Instream'],
[data-parent-placement-name='Below Article Thumbnails'].reco-reel-above-feed-style [data-placement-name='Reco Reel Instream'] {
  order: -1;
}
/* +--------------+ */
/* | CLOSE BUTTON | */
/* +--------------+ */
#_cm-css-reset #_cm-close-area._cm-close-area {
  height: 27px !important;
  width: 30px !important;
  background: rgba(255, 255, 255, 0) !important;
  position: absolute !important;
  z-index: 2147483647 !important;
  cursor: pointer !important;
  padding-left: 6px !important;
  box-sizing: border-box !important;
  top: 12px !important;
  right: 10px !important;
  pointer-events: auto;
}
#_cm-css-reset #_cm-close-area._cm-close-area svg {
  width: 16px !important;
  height: 16px !important;
  box-sizing: content-box !important;
  -webkit-box-sizing: content-box !important;
  border: 1px solid #e3e6f2 !important;
  border-radius: 15% !important;
  padding: 2px !important;
}
#_cm-css-reset #_cm-close-area._cm-close-area svg:active {
  opacity: 0.3 !important;
  background-color: black !important;
}
@media screen and (max-width: 700px) {
  #_cm-css-reset #_cm-close-area._cm-close-area {
    height: 40px !important;
    width: 40px !important;
    top: 3px !important;
    right: 3px !important;
  }
  #_cm-css-reset #_cm-close-area._cm-close-area svg {
    margin: 10px 10px 0 0 !important;
  }
}
/* +-----------------------+ */
/* | UNCOVER CLOSE BUTTON  | */
/* +-----------------------+ */
#_cm-css-reset #_cm-close-area._cm-uncover-close-area {
  cursor: pointer;
  position: fixed;
  z-index: 2147483647;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c7c7c7;
  transition: right 1s,
        left 1s;
}
._cm-os-player._cm-detach-pre {
  background: black;
  width: 300px;
  height: 250px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2147483647;
  overflow: hidden;
}
._cm-os-player._cm-detach-post {
  width: 300px !important;
  height: 168.75px !important;
  top: auto !important;
  left: auto !important;
  right: 0 !important;
  bottom: 0 !important;
}
._cm-os-player._cm-detach-post._cm-slideOut {
  transition: 1s;
  right: -300px !important;
}
._cm-os-interstitial {
  overflow: hidden !important;
  float: none !important;
  clear: both !important;
  margin: 0px 0px 0px 0px !important;
  padding: 0px 0px 0px 0px !important;
  z-index: 2147483647 !important;
  top: 0 !important;
  right: 0 !important;
  position: fixed !important;
  background-color: rgba(0, 0, 0, 0.6) !important;
  width: 100% !important;
  height: 0px !important;
}
._cm-os-interstitial ._cm-video-ad-place-holder {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  bottom: 0 !important;
  right: 0 !important;
  margin: auto !important;
  background-color: black;
}
._cm-os-interstitial._cm-detach-post {
  width: 300px !important;
  height: 168.75px !important;
  position: fixed !important;
  top: auto !important;
  left: auto !important;
  right: 1px !important;
  bottom: 1px !important;
  transition: none !important;
}
._cm-os-interstitial._cm-detach-post ._cm-video-ad-place-holder {
  width: 300px !important;
  height: 168.75px !important;
}
._cm-os-interstitial._cm-detach-post ._cm-video-ad-place-holder ._cm-video-ad {
  width: 300px !important;
  height: 168.75px !important;
}
._cm-os-interstitial._cm-detach-post ._cm-video-ad-place-holder ._cm-video-ad ._cm-close {
  right: 3px !important;
  top: 3px !important;
}
._cm-os-slider {
  margin: 0px 0px 0px 0px !important;
  padding: 0px 0px 0px 0px !important;
  z-index: 2147483647 !important;
  transition: right 1s,
        left 1s !important;
  position: fixed !important;
  overflow: hidden !important;
  background-color: black;
}
._cm-os-slider-unit {
  margin: 0px 0px 0px 0px !important;
  padding: 0px 0px 0px 0px !important;
  z-index: 2147483647 !important;
  position: fixed !important;
  overflow: hidden !important;
}
._cm-os-slider._cm-slider-top,
._cm-os-slider-unit._cm-slider-top {
  top: 0 !important;
  bottom: auto !important;
}
._cm-os-slider._cm-slider-middle,
._cm-os-slider-unit._cm-slider-middle {
  top: 0 !important;
  bottom: 0 !important;
  margin: auto !important;
}
._cm-os-slider._cm-slider-bottom,
._cm-os-slider-unit._cm-slider-bottom {
  top: auto !important;
  bottom: 0 !important;
}
._cm-os-slider._cm-slider-left,
._cm-os-slider-unit._cm-slider-left {
  left: 0 !important;
  right: auto !important;
}
._cm-os-slider._cm-slider-right,
._cm-os-slider-unit._cm-slider-right {
  left: auto !important;
  right: 0 !important;
}
._cm-os-slider._cm-slider-left ._cm-close,
._cm-os-slider-unit._cm-slider-left._cm-close {
  right: auto !important;
  left: 3px !important;
}
._cm-os-300X250 {
  overflow: hidden !important;
  width: 300px !important;
  height: 250px !important;
}
._cm-os-300X600 {
  overflow: hidden !important;
  width: 300px !important;
  height: 600px !important;
  margin: 0px auto 0px auto;
}
/* +------------+ */
/* | videoView  | */
/* +------------+ */
#_cm-css-reset._cm-video {
  height: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
#_cm-css-reset._cm-video-with-slider {
  background: transparent;
}
/* +------------+ */
/* | EXPANDABLE | */
/* +------------+ */
._cm-expandable {
  overflow: hidden !important;
  /* Set our transitions up. */
  -webkit-transition: height 1s;
  -moz-transition: height 1s;
  transition: height 1s;
  float: none !important;
  clear: both !important;
  margin: 0px auto 0px auto !important;
  padding: 0px 0px 0px 0px !important;
  background-color: black;
  margin-top: 0px;
  position: relative;
}
._cm_max_height_transition {
  /* Set our transitions up. */
  -webkit-transition: max-height 1s;
  -moz-transition: max-height 1s;
  transition: max-height 1s;
}
._cm-expandable ._cm-expandable-video {
  position: relative;
  float: none;
  clear: both;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  margin-top: 0px;
}
._cm-expandable ._cm-expandable-video ._cm-video-ad {
  margin-top: 0px;
}
._cm-expandable ._cm-ad-title {
  text-align: center;
  font-family: arial;
  font-size: 8px;
  font-weight: bold;
  padding: 2px 0 !important;
  background-color: white;
  color: #ababab;
  border: none;
  float: none;
  width: 100%;
}
._cm-expandable ._cm-os-player {
  background: black;
  width: 100%;
  float: none;
  clear: both;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2147483647;
}
/* +----------+ */
/* | PLAYLIST | */
/* +----------+ */
#_cm-css-reset ._cm-playlist {
  background: #000;
}
#_cm-css-reset ._cm-playlist-list {
  font-family: arial;
  background: #000;
  position: static !important;
}
#_cm-css-reset ._cm-playlist-list,
#_cm-css-reset ._cm-playlist-item {
  margin: 0;
  list-style-type: none;
  padding: 0;
}
#_cm-css-reset ._cm-playlist-list.unclickable ._cm-playlist-item {
  cursor: default;
}
#_cm-css-reset ._cm-playlist-item {
  background: #222222;
  width: 100%;
  height: 74px;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
  text-align: left;
}
#_cm-css-reset ._cm-playlist-list ._cm-playlist-item.active {
  background: #3a3a3a;
}
#_cm-css-reset ._cm-playlist-list:not(.unclickable) ._cm-playlist-item:hover {
  background: #525252;
}
#_cm-css-reset ._cm-playlist-img {
  height: 50px;
  width: 50px;
  position: absolute;
  top: 12px;
  left: 11px;
}
#_cm-css-reset ._cm-playlist-list ._cm-playlist-item.active ._cm-playlist-img {
  border: 2px solid red;
  top: 10px;
  left: 9px;
}
#_cm-css-reset ._cm-playlist-index {
  /*font-family: arial;*/
  font-size: 9px;
  color: #cacaca;
  position: absolute;
  top: 33px;
  left: 2px;
}
#_cm-css-reset ._cm-playlist-list ._cm-playlist-item.active ._cm-playlist-index {
  color: red;
  left: -50000px;
}
#_cm-css-reset ._cm-playlist-list ._cm-playlist-item.active ._cm-playlist-index::before {
  content: '>';
  position: absolute;
  top: -1px;
  left: 50002px;
  font-size: 10px;
  font-weight: bold;
}
#_cm-css-reset ._cm-playlist-text {
  font-size: 13px;
  /*font-family: arial;*/
  color: #cacaca;
  position: absolute;
  left: 80px;
  right: 10px;
  top: 14px;
  height: 46px;
  overflow: hidden;
  text-align: left;
}
._cm-d2d-fallback {
  height: 100%;
  z-index: 1000;
  background-color: white;
  position: relative;
}
._cm-d2d-fallback._cm-d2d-slider {
  display: block;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2147483646;
}
/* +--------+ */
/* | OPTOUT | */
/* +--------+ */
#_cm-css-reset #_cm-opt-out-view._cm-opt-out-view {
  position: absolute;
  top: 7px;
  left: 5px;
  height: 35px !important;
  width: 22px !important;
  z-index: 2147483647 !important;
  cursor: pointer !important;
  border-radius: 10% !important;
}
#_cm-css-reset #_cm-opt-out-view._cm-opt-out-view ._cm-opt-button:after {
  position: absolute;
  top: 0;
  left: 4px;
  content: '\2807';
  color: #e3e6f2;
  /* Opt out size */
  font-size: 25px;
}
#_cm-css-reset #_cm-opt-out-view._cm-opt-out-view ._cm-opt-button:hover:after {
  color: white;
}
#_cm-css-reset #_cm-opt-out-view._cm-opt-out-view ._cm-opt-dialog {
  position: absolute;
  top: 6px;
  left: 25px;
  width: 170px;
  height: auto;
  background-color: #feffff;
  padding-bottom: 8px;
}
/* Fix css reset from player */
#_cm-css-reset #_cm-opt-out-view._cm-opt-out-view ._cm-opt-dialog * {
  position: static !important;
}
#_cm-css-reset #_cm-opt-out-view._cm-opt-out-view ._cm-opt-out ._cm-opt-dialog ._cm-opt-message {
  margin: 6px 3px 3px 11px;
  font-weight: normal;
  font-family: Arial;
  font-size: 12px;
  color: #7c7c7c;
}
#_cm-css-reset #_cm-opt-out-view._cm-opt-out-view ._cm-opt-out ._cm-opt-dialog textarea {
  width: 140px;
  height: 40px;
  min-height: 40px;
  resize: none;
  border-radius: 3px;
  border: solid #c7c7c7 1px;
  margin: 5px 10px 3px 10px;
  word-wrap: break-word;
  background-color: #f4f4f5;
  font-size: 11px;
  padding-top: 7px;
  padding-left: 3px;
  line-height: normal;
}
#_cm-css-reset #_cm-opt-out-view._cm-opt-out-view ._cm-opt-out ._cm-opt-dialog button {
  width: 49px;
  height: 21px;
  margin-left: 10px;
  margin-top: 3px;
  font-size: 11px;
  color: #7c7c7c;
  /* CSS reset */
  margin-bottom: 0;
  padding: 0;
  -moz-box-shadow: inset 0px 1px 0px 0px #ffffff;
  -webkit-box-shadow: inset 0px 1px 0px 0px #ffffff;
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ffffff), color-stop(1, #f6f6f6));
  background: -moz-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
  background: -webkit-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
  background: -o-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
  background: -ms-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f6f6f6', GradientType=0);
  background-color: #ffffff;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  /*padding: 3px 10px;*/
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
  /*margin: 5px 5px 0px 0px;*/
}
#_cm-css-reset #_cm-opt-out-view._cm-opt-out-view ._cm-opt-out ._cm-opt-dialog button:hover {
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #f6f6f6), color-stop(1, #ffffff));
  background: -moz-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
  background: -webkit-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
  background: -o-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
  background: -ms-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
  background: linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f6f6f6', endColorstr='#ffffff', GradientType=0);
  background-color: #f6f6f6;
}
/**--------------------------------------
    Ad choice text, logo in video views
 --------------------------------------*/
#_cm-css-reset ._cm-ad-choice {
  z-index: 2147483647 !important;
  position: absolute;
  top: 10px;
  left: 13px;
  pointer-events: auto;
}
@media screen and (max-width: 700px) {
  #_cm-css-reset ._cm-ad-choice {
    top: 9px;
    left: 10px;
  }
}
#_cm-css-reset ._cm-ad-choice-text {
  vertical-align: middle !important;
  display: inline-block;
  color: white;
  text-decoration: none;
  font-size: 13px !important;
  font-weight: bold;
  font-family: Arial, Helvetica, 'sans-serif';
}
#_cm-css-reset ._cm-ad-choice-text:hover {
  text-decoration: underline;
}
#_cm-css-reset ._cm-ad-choice-logo {
  display: inline-block;
  margin-top: 2px;
  width: 12px;
  height: 14px;
  background-size: contain !important;
  vertical-align: middle !important;
  text-decoration: none;
}
/**--------------------------------------
    Ad choice text, logo in titles
 --------------------------------------*/
._cm-ad-title,
#_cm-video-unit ._cm-ad-title,
._cm-native-ad-bottom ._cm-ad-choice {
  text-align: right !important;
  direction: ltr !important;
}
#_cm-video-unit ._cm-ad-title ._cm-ad-choice,
._cm-ad-title ._cm-ad-choice,
._cm-native-ad-bottom ._cm-ad-choice {
  z-index: auto;
  position: relative;
  top: auto;
  left: auto;
  right: auto;
  bottom: auto;
  padding: 3px;
  text-align: inherit;
}
#_cm-video-unit ._cm-ad-title ._cm-ad-choice ._cm-ad-choice-text,
._cm-ad-title ._cm-ad-choice ._cm-ad-choice-text,
._cm-native-ad-bottom ._cm-ad-choice ._cm-ad-choice-text {
  vertical-align: middle !important;
  display: inline-block;
  color: black;
  text-decoration: none;
  font-size: 11px !important;
  font-weight: normal;
  font-family: Arial, Helvetica, 'sans-serif';
}
#_cm-video-unit ._cm-ad-title ._cm-ad-choice ._cm-ad-choice-text:hover,
._cm-ad-title ._cm-ad-choice ._cm-ad-choice-text:hover,
._cm-native-ad-bottom ._cm-ad-choice ._cm-ad-choice-text:hover {
  text-decoration: underline;
}
#_cm-video-unit ._cm-ad-title ._cm-ad-choice ._cm-ad-choice-logo,
._cm-ad-title ._cm-ad-choice ._cm-ad-choice-logo,
._cm-native-ad-bottom ._cm-ad-choice ._cm-ad-choice-logo {
  display: inline-block;
  margin-top: 2px;
  width: 12px;
  height: 14px;
  background-size: contain !important;
  vertical-align: middle !important;
  text-decoration: none;
}
/* +------------+ */
/* | BRAND LOGO | */
/* +------------+ */
._cm-brand-logo {
  position: absolute;
  z-index: 2147483647;
  top: 0;
  right: 0;
  left: auto;
  bottom: auto;
}
._cm-brand-logo img {
  width: 80px;
  height: 25px;
  border-color: red;
  border-width: 1px;
  border-style: solid;
}
._cm-brand-logo a:hover {
  text-decoration: none;
}
/*************
 * Css Reset *
 *************/
#_cm-css-reset,
#_cm-css-reset div,
#_cm-css-reset ._cm-div {
  margin-top: 0;
}
.none-transition {
  transition: none !important;
  -webkit-transition: none !important;
  -moz-transition: none !important;
}
/****************
 * Coffee Break *
 ****************/
._cm-background-dim {
  width: 100%;
  height: 0;
  position: fixed;
  left: 0;
  top: 0;
  opacity: 0;
  background: #000000;
  z-index: 2147483647;
}
._cm-cf-player-container {
  position: fixed;
  width: 100%;
  height: 0;
  overflow: hidden;
  margin: auto;
  z-index: 2147483647;
}
._cm-title {
  height: auto;
  text-align: center;
  font-size: 24px;
  color: white;
  opacity: 0;
}
._cm-cb-controls {
  background: #000;
  position: fixed;
  bottom: 0;
  left: 0;
  opacity: 0;
  display: none;
  z-index: 2147483647;
}
._cm-cb-resume {
  color: #fff;
  font-size: 18px;
  padding: 1px 20px 1px 3px !important;
  cursor: pointer;
}
._cm-cb-resume:hover {
  text-decoration: underline;
}
._cm-cb-close {
  position: absolute;
  border-radius: 100px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.65);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  width: 16px;
  height: 16px;
  top: 4px;
  right: 2px;
}
._cm-cb-close:hover {
  background-color: rgba(255, 255, 255, 0.8);
}
/********************
 * Coffee Break End *
 ********************/
/*********
 * Timer *
 ********/
#_cm-css-reset ._cm-timer {
  position: absolute;
  right: 5px !important;
  top: 8px !important;
  margin-top: 0px;
  z-index: 999;
  width: 24px;
  /* @circle-size */
  height: 24px;
  /* @circle-size */
  border-radius: 50%;
}
._cm-timer-circle ._cm-timer-mask,
._cm-timer-circle ._cm-timer-fill {
  width: 24px;
  /* @circle-size */
  height: 24px;
  /* @circle-size */
  position: absolute;
  border-radius: 50%;
}
._cm-timer-circle ._cm-timer-mask {
  clip: rect(0px, 24px, 24px, 12px);
  /* rect(0px, @circle-size, @circle-size, @circle-size/2) */
}
._cm-timer-circle ._cm-timer-mask ._cm-timer-fill {
  clip: rect(0px, 12px, 24px, 0px);
  /* rect(0px, @circle-size/2, @circle-size, 0px) */
  background-color: #e3e6f2;
  /* @circle-color */
}
#_cm-css-reset ._cm-timer-inset {
  text-align: center;
  line-height: 19px;
  /* @inner-size */
  width: 20px;
  /* @inner-size */
  height: 20px;
  /* @inner-size */
  position: absolute;
  margin-left: 2px;
  /* (@circle-size - @inner-size) / 2 */
  margin-top: 2px;
  /* (@circle-size - @inner-size) / 2 */
  background-color: #424242;
  /* @inset-color */
  border-radius: 50%;
  /* Css Reset */
  font-size: 20px;
  font-family: arial;
}
@media screen and (max-width: 700px) {
  #_cm-css-reset ._cm-timer {
    width: 34px;
    /* @circle-size */
    height: 34px;
    /* @circle-size */
    right: 4px !important;
    top: 4px !important;
  }
  ._cm-timer-circle ._cm-timer-mask,
  ._cm-timer-circle ._cm-timer-fill {
    width: 34px;
    /* @circle-size */
    height: 34px;
    /* @circle-size */
  }
  ._cm-timer-circle ._cm-timer-mask {
    clip: rect(0px, 34px, 34px, 17px);
    /* rect(0px, @circle-size, @circle-size, @circle-size/2) */
  }
  ._cm-timer-circle ._cm-timer-mask ._cm-timer-fill {
    clip: rect(0px, 17px, 34px, 0px);
    /* rect(0px, @circle-size/2, @circle-size, 0px) */
    background-color: #e3e6f2;
    /* @circle-color */
  }
  #_cm-css-reset ._cm-timer-inset {
    line-height: 29px;
    /* @inner-size */
    width: 30px;
    /* @inner-size */
    height: 30px;
    /* @inner-size */
    /* Css Reset */
    font-size: 20px;
    font-family: arial;
  }
}
._cm-timer-inset > span {
  color: #e3e6f2;
  vertical-align: middle;
  font-size: 75%;
  font-weight: bold;
}
/*************
 * Timer End *
 *************/
/**************
 * Single Inline *
 **************/
#_cm-css-reset._cm-single-inline {
  z-index: 0;
  width: 100%;
  height: auto;
  overflow: hidden !important;
  -webkit-transition: height 1s;
  -moz-transition: height 1s;
  transition: height 1s;
  float: none !important;
  clear: both !important;
  margin: 0px auto 0px auto !important;
  padding: 0px 0px 0px 0px !important;
  background-color: black;
  position: relative;
}
#_cm-css-reset._cm-single-inline #_cm-close-area {
  top: 13px !important;
}
@media screen and (max-width: 700px) {
  #_cm-css-reset._cm-single-inline #_cm-close-area {
    top: 0 !important;
  }
}
#_cm-css-reset._cm-single-inline ._cm-opt-out-view {
  top: 7px !important;
}
#_cm-css-reset._cm-single-inline ._cm-content-video {
  position: relative;
}
._cm-single-inline ._cm-inline-video {
  position: relative;
}
.inlineSlideTop {
  -webkit-transition: height 1s;
  -moz-transition: height 1s;
  transition: height 1s;
}
/******************
 * Single Inline End *
 ******************/
/*****************
 * Detach Button *
 *****************/
._cm-detach {
  position: absolute !important;
  right: 3px !important;
  top: 3px !important;
  z-index: 2147483647 !important;
  border-radius: 100px !important;
  cursor: pointer !important;
  background-color: rgba(255, 255, 255, 0.65) !important;
  background-position: 50% 50% !important;
  background-repeat: no-repeat !important;
  background-size: 24px 24px;
  width: 24px !important;
  height: 24px !important;
  border: none !important;
  float: none !important;
  padding: 0px 0px 0px 0px !important;
}
/*********************
 * Detach Button End *
 *********************/
/**********
 * SR Css *
 **********/
#_cm-css-reset .vast-skip-button.enabled.visible {
  display: none !important;
}
/**************
 * SR Css End *
 **************/
#_cm-css-reset ._cm-video-ad {
  overflow: hidden;
}
/*****************
 * Click Through *
 *****************/
._cm-click-through {
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1500;
  position: absolute;
}
/*********************
 * Click Through End *
 *********************/
/**********
 * Repeat *
 **********/
#_cm-css-reset ._cm-repeat-buttons-wrapper ._cm-repeat-button-hover,
#_cm-css-reset ._cm-learn-more-buttons-wrapper ._cm-learn-more-button-hover {
  display: none;
}
#_cm-css-reset ._cm-repeat-buttons-wrapper:hover ._cm-repeat-button,
#_cm-css-reset ._cm-repeat-buttons-wrapper:active ._cm-repeat-button,
#_cm-css-reset ._cm-learn-more-buttons-wrapper:hover ._cm-learn-more-button {
  display: none;
}
#_cm-css-reset ._cm-repeat-buttons-wrapper:hover ._cm-repeat-button-hover,
#_cm-css-reset ._cm-repeat-buttons-wrapper:active ._cm-repeat-button-hover,
#_cm-css-reset ._cm-learn-more-buttons-wrapper:hover ._cm-learn-more-button-hover {
  display: block;
  width: 100%;
  margin-bottom: 0;
}
._cm-inline-repeat {
  position: absolute;
  bottom: 0;
}
._cm-widget-repeat {
  height: inherit !important;
}
#_cm-css-reset ._cm-repeat-div {
  height: 100%;
  width: 100%;
  z-index: 100000;
  display: flex;
  align-items: center;
  position: absolute;
}
#_cm-css-reset ._cm-repeat-div {
  background-size: 100% 100%;
  cursor: pointer;
  pointer-events: all;
}
#_cm-css-reset ._cm-repeat-view-wrapper {
  z-index: 2147483647;
  padding: 0;
  margin: auto;
  display: block;
  width: 23%;
  line-height: 0;
}
#_cm-css-reset ._cm-repeat-view-wrapper._cm-repeat-view-wrapper-detached {
  width: 30%;
}
#_cm-css-reset #_cm-css-reset._cm-repeat-div ._cm-repeat-buttons-wrapper {
  margin-bottom: 10px;
}
#_cm-css-reset #_cm-css-reset._cm-repeat-div ._cm-repeat-button,
#_cm-css-reset #_cm-css-reset._cm-repeat-div ._cm-learn-more-button {
  border: 0;
  width: 100%;
  color: transparent;
  margin-bottom: 0;
}
#_cm-css-reset #_cm-css-reset._cm-repeat-div ._cm-repeat-icon::before {
  /* Fix css reset from page */
  box-sizing: content-box;
  width: 65px;
  height: 65px;
  border: 5px solid #cacaca;
  background: transparent;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  content: '';
  position: absolute;
  /* left: 1px; */
  /* margin-top: -6px; */
  /* margin: -8px 0 0; */
  /* background: #c55500; */
  /* top: 50%; */
}
#_cm-css-reset #_cm-css-reset._cm-repeat-div ._cm-repeat-icon::after {
  left: 0px;
  border: 10px solid #000;
  /* border-width: 8px 8px 8px 8px;*/
  border-left-color: #cacaca;
  margin: 1px 50px 0;
  background: transparent;
  /* margin: -8px 0 0; */
  /* background: #c55500; */
  content: '';
  position: absolute;
  /* top: 50%; */
  /* left: 0; */
  cursor: pointer;
  -ms-transform: rotate(30deg);
  /* IE 9 */
  -webkit-transform: rotate(30deg);
  /* Chrome, Safari, Opera */
  transform: rotate(30deg);
}
#_cm-css-reset #_cm-css-reset._cm-repeat-div:hover ._cm-repeat-icon::before {
  border-color: #e4e4e4;
}
#_cm-css-reset #_cm-css-reset._cm-repeat-div:hover ._cm-repeat-icon::after {
  border-left-color: #e4e4e4;
}
#_cm-css-reset #_cm-css-reset._cm-repeat-div._cm-spin,
#_cm-css-reset ._cm-repeat-image._cm-spin {
  cursor: auto;
  /* should be created during build...
  -webkit-animation-name: spin;
  -webkit-animation-duration: 4000ms;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: spin;
  -moz-animation-duration: 4000ms;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -ms-animation-name: spin;
  -ms-animation-duration: 4000ms;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;
  */
  animation-name: spin;
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@-ms-keyframes spin {
  from {
    -ms-transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
  }
}
@-moz-keyframes spin {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
/* For image option */
#_cm-css-reset ._cm-repeat-image {
  width: 80px;
  height: 80px;
  /* Center inside container */
  margin: auto !important;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
}
/**************
 * Repeat End *
 **************/
/***********
 * Loading *
 **********/
#_cm-css-reset._cm-loading {
  opacity: 1;
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: black;
  z-index: 2147483647;
  top: 0;
  left: 0;
  overflow: hidden;
  pointer-events: auto;
}
#_cm-css-reset ._cm-loading-div {
  position: absolute;
  z-index: 2147483647;
  /* overflow: hidden; */
  padding: 0;
  margin: auto;
  display: block;
  top: 0;
  left: 0;
  width: 11em;
  right: 0;
  height: 11em;
  bottom: 0;
}
#_cm-css-reset ._cm-loading-div ._cm-loading-icon {
  /*font-size: 10px;*/
  margin: auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #ffffff;
  background: -moz-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -webkit-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
#_cm-css-reset ._cm-loading-div ._cm-loading-icon:before {
  width: 50%;
  height: 50%;
  background: #ffffff;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}
#_cm-css-reset ._cm-loading-div ._cm-loading-icon:after {
  background: #000000;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
#_cm-css-reset ._cm-loading-div ._cm_loader_img {
  width: 80px;
  height: 80px;
}
/*  Not Needed anymore */
#_cm-css-reset ._cm-loading-div ._cm-loading-repeat::before {
  /* Center compared to parent (100x100) */
  left: 17px;
  top: 17px;
  width: 65px;
  height: 65px;
  border: 5px solid #cacaca;
  background: transparent;
  border-radius: 50%;
  content: '';
  position: absolute;
}
#_cm-css-reset ._cm-loading-div ._cm-loading-repeat::after {
  /* Center compared to parent (100x100) */
  left: 16px;
  top: 18px;
  border: 10px solid #000;
  border-left-color: #cacaca;
  margin: 1px 50px 0;
  background: transparent;
  content: '';
  position: absolute;
  cursor: pointer;
  transform: rotate(30deg);
}
/*  Not Needed anymore end */
/**************
 * Loading End *
 **************/
/**************
* Custom Unit *
***************/
._cm-custom {
  overflow: hidden !important;
  /* Set our transitions up. */
  -webkit-transition: height 1s;
  -moz-transition: height 1s;
  transition: height 1s;
  float: none !important;
  clear: both !important;
  margin: 0px auto 0px auto !important;
  padding: 0px 0px 0px 0px !important;
  margin-top: 0px;
  position: relative;
  /* For testing */
  /*background-color: black;*/
}
._cm-custom ._cm-custom-video {
  position: relative;
  float: none;
  clear: both;
  margin: 0px auto;
  padding: 0px 0px 0px 0px;
  margin-top: 0px;
}
._cm-custom ._cm-custom-video ._cm-video-ad {
  margin-top: 0px;
}
._cm-custom ._cm-ad-title {
  text-align: center;
  font-family: arial;
  font-size: 8px;
  font-weight: bold;
  padding: 2px 0 !important;
  background-color: white;
  color: #ababab;
  border: none;
  float: none;
  width: 100%;
}
#_cm-css-reset._cm-poster > img {
  height: 100% !important;
  width: 100% !important;
  z-index: 150;
  position: absolute;
  top: 0;
  left: 0;
}
#_cm-css-reset ._cm-custom-video ._cm-video-ad video {
  margin: auto;
  top: 0;
  bottom: 0;
  position: absolute;
  right: 0;
  left: 0;
}
._cm-click-blocker-container {
  height: 100%;
  width: 100%;
}
._cm-click-blocker-container ._cm-click-blocker {
  position: absolute;
  top: 0px;
  cursor: default;
}
._cm-click-blocker-container ._cm-click-blocker-bottom {
  bottom: 0px;
  top: auto;
}
._cm-click-blocker-container ._cm-click-blocker-left {
  left: 0px;
}
._cm-click-blocker-container ._cm-click-blocker-right {
  right: 0px;
}
/******************
* Custom Unit End *
*******************/
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
/* Zoom in */
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scaleX(0.3) scaleY(0.3) scaleZ(0.3);
  }
  50% {
    opacity: 1;
  }
}
.zoomIn {
  animation-name: zoomIn;
}
@keyframes zoomOut {
  50% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scaleX(0.3) scaleY(0.3) scaleZ(0.3);
  }
}
.zoomOut {
  animation-name: zoomOut;
}
/* Fade in */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fadeIn {
  animation-name: fadeIn;
}
.widget-detached {
  visibility: hidden !important;
  pointer-events: none;
}
.widget-detached-figure {
  pointer-events: none;
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.fadeOut {
  animation-name: fadeOut;
}
/* SlideIn Left */
@keyframes slideInLeft {
  from {
    transform: translateX(50%) scaleX(0);
    visibility: visible;
  }
  to {
    transform: translateX(0) scaleX(1);
  }
}
.slideInLeft {
  animation-name: slideInLeft;
}
@keyframes slideOutLeft {
  from {
    transform: translateX(0) scaleX(1);
  }
  to {
    transform: translateX(50%) scaleX(0);
    visibility: visible;
  }
}
.slideOutLeft {
  animation-name: slideOutLeft;
}
/* SlideIn Top */
@keyframes slideInTop {
  from {
    transform: translateY(-50%) scaleY(0);
    visibility: visible;
  }
  to {
    transform: translateY(0) scaleY(1);
  }
}
.slideInTop {
  animation-name: slideInTop;
}
@keyframes slideOutTop {
  from {
    transform: translateY(0) scaleY(1);
  }
  to {
    transform: translateY(-50%) scaleY(0);
    visibility: visible;
  }
}
.slideOutTop {
  animation-name: slideOutTop;
}
/* Flip */
@keyframes flip {
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
.flip {
  animation-name: flip;
}
@keyframes flipOut {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(180deg);
  }
}
.flipOut {
  animation-name: flipOut;
}
/* Integrated Widget */
._cm-widget-item {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: black;
}
._cm-widget-item._cm-fit-to-size ._cm-center-box #_cm-css-reset._cm-branding-title {
  background-color: white;
}
._cm-widget-item._cm-fit-to-size {
  background-color: white;
  width: 100%;
  height: 100%;
  display: block;
}
._cm-widget-item #_cm-css-reset._cm-branding-title {
  height: auto;
}
._cm-ad-feed-manager ._cm-ad {
  display: none;
  height: 0px;
  position: absolute;
  overflow: hidden;
}
body ._cm-ad {
  display: block !important;
  visibility: hidden !important;
  height: 0px;
  position: absolute;
  overflow: hidden;
  inset: unset;
}
#_cm-css-reset {
  height: inherit;
  width: inherit;
  direction: ltr;
  text-align: left;
  inset: unset;
}
._cm-ad-active {
  display: block !important;
  inset: unset;
}
._cm-ad-loader {
  display: block;
}
#_cm-video-unit._cm-feed-manager._cm-wide-feed {
  margin: 6px auto 28px auto !important;
}
#_cm-video-unit._cm-feed-manager._cm-wide-feed-title-below {
  margin: 21px auto 7px auto !important;
}
#_cm-css-reset ._cm-disc-text .text.opt-out-hidden {
  pointer-events: none;
  color: white;
  display: inline;
  position: absolute;
  top: 10px;
  left: 13px;
  font-size: 13px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
  position: absolute !important;
  z-index: 2147483647 !important;
}
@media screen and (max-width: 700px) {
  #_cm-css-reset ._cm-disc-text .text.opt-out-hidden {
    white-space: nowrap;
    font-size: 11px;
    left: 10px;
    top: 4px;
  }
}
._cm-single-inline-msn ._cm-inline-video {
  margin-left: auto;
  margin-right: auto;
}
#_cm-css-reset._cm-single-inline._cm-single-inline-msn {
  background-color: #f2f2f2 !important;
}
#_cm-css-reset._cm-single-inline._cm-container-msn {
  background-color: transparent !important;
  pointer-events: none;
}
#_cm-css-reset._cm-video-msn {
  background: #f2f2f2;
  outline-color: #f2f2f2;
  outline-style: solid;
  outline-width: 0.2rem;
}
#_cm-css-reset._cm-video-msn .vpaid-player-container-ie-fix {
  border: 1px transparent solid !important;
}
#_cm-css-reset._cm-video-reco-reel .vpaid-player-container-ie-fix {
  border: 1px transparent solid !important;
}
._cm-reco-reel-unit-container {
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}
._cm-reco-reel-unit-container ._cm-single-inline {
  pointer-events: all;
}
._cm-reco-reel-unit-container ._cm-ad-feed-msn {
  pointer-events: all;
}
._cm-ad-feed-msn ._cm-ad {
  visibility: hidden !important;
  height: 0px;
  position: absolute;
  overflow: hidden;
}
._cm-stories-unit-container {
  background: transparent;
  transform: translateZ(0);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
#_cm-css-reset._cm-stories-unit-container {
  background: transparent;
  transform: translateZ(0);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
}
#_cm-css-reset._cm-instream-vidreel-unit-container {
  position: absolute;
  z-index: 9;
  bottom: 0;
  left: 0;
  visibility: visible;
}
#_cm-css-reset._cm-instream-vidreel-unit-container._hide {
  z-index: -1;
  visibility: hidden;
}
._cm-video-ad._cm-center-video.vpaid-player-container {
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%);
  pointer-events: auto;
}
/****************************************
* Floating View
****************************************/
#_cm-css-reset._cm-floating-view {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 100000;
  pointer-events: none;
}
/****************************************
* Floating View End
****************************************/
/****************************************
* Native Ad View
****************************************/
._cm-native-ad-bottom {
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  flex: 100%;
  background-color: white;
}
._cm-native-ad-bottom div {
  flex: inherit;
}
._cm-native-ad-bottom ._cm-native-ad-title {
  flex: 1 1 auto;
  color: #000000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  line-height: 27px;
  font-weight: bold;
  text-align: left;
}
._cm-native-ad-bottom ._cm-native-ad-title-floating {
  background-color: #fff !important;
  font-size: 10px !important;
  line-height: 18px !important;
  padding-right: 3px !important;
  padding-left: 3px !important;
}
._cm-native-ad-bottom ._cm-native-ad-description {
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: normal;
  text-align: left;
}
._cm-native-ad-bottom ._cm-native-ad-branding {
  color: #999999;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11px;
  line-height: 27px;
  font-weight: bold;
  text-align: left;
}
._cm-native-ad-bottom ._cm-native-ad-cta-wrapper {
  flex: 0 0 auto;
  padding: 5px;
}
._cm-native-ad-bottom ._cm-native-ad-cta-wrapper ._cm-native-ad-cta-button {
  border-radius: 5px;
  font-weight: bolder;
  transition: background 0.12s ease;
  padding: 3px 12px;
  color: black;
  text-transform: uppercase;
  font-size: 12px;
  box-shadow: 1px 1px 2px #cacaca;
  font-family: sans-serif;
  text-shadow: 0px 0px 3px white;
  background: linear-gradient(#f6f6f6, #e4e4e4);
}
._cm-native-ad-bottom ._cm-native-ad-icon {
  flex: 0 0 auto;
}
._cm-native-ad-bottom ._cm-native-ad-icon ._cm-native-ad-icon-img {
  max-height: 16px;
  max-width: 16px;
  margin-right: 5px;
  vertical-align: middle;
}
._cm-native-ad-bottom ._cm-native-ad-icon-rtl {
  flex: 0 0 auto;
}
._cm-native-ad-bottom ._cm-native-ad-icon-rtl ._cm-native-ad-icon-img {
  max-height: 16px;
  max-width: 16px;
  margin-left: 5px;
  vertical-align: middle;
}
._cm-native-ad-bottom ._cm-native-ad-branding {
  flex: 1 1 auto;
}
._cm-native-ad-bottom-floating {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 999 !important;
}
._cm-native-ad-bottom-floating.hide {
  display: none;
}
._cm-native-ad ._cm-msn-native-ad-top {
  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.95) 0, transparent 100%);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0, transparent 100%);
}
._cm-native-ad ._cm-msn-native-ad-top ._cm-native-ad-title {
  font-family: 'Segoe UI Semilight', 'Segoe WP Semilight', 'Segoe WP', 'Segoe UI', Arial, Sans-Serif;
  font-size: 2.8rem;
  line-height: 1.214;
  padding-left: 1.8rem;
  max-height: 2.8rem;
  overflow: hidden;
  padding-right: 1.8rem;
  padding-bottom: 2em;
  padding-top: 4rem;
  color: white;
  white-space: nowrap;
  text-overflow: ellipsis;
}
._cm-native-ad-top {
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  flex: 100%;
  background-color: transparent;
}
._cm-native-ad-top ._cm-native-ad-title {
  flex: 1 1 auto;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.25rem;
  line-height: 1.6875rem;
  font-weight: bold;
  text-align: left;
  max-width: 340px;
  padding: 1.55rem 0.6rem !important;
  text-overflow: ellipsis !important;
  display: block;
  overflow: hidden;
  white-space: nowrap;
}
._cm-native-ad._cm-native-ad-detached ._cm-msn-native-ad-top ._cm-native-ad-title {
  font-size: 1.8rem;
  max-height: 1.8rem;
}
._cm-amp-helper-container {
  position: absolute;
  top: 0;
  left: 100px;
}
._cm-amp-helper-observer {
  width: 1px;
  height: 1px;
  visibility: hidden;
  pointer-events: none !important;
  border: none !important;
}
._cm-os-slider .cmNativeAdSlider ._cm-native-ad-title {
  margin-bottom: 2px !important;
  margin-left: 2px !important;
  font-size: 10px !important;
  line-height: 18px !important;
}
._cm-os-slider .cmNativeAdSlider ._cm-native-ad-description {
  display: none !important;
}
._cm-os-slider .cmNativeAdSlider ._cm-native-ad-icon {
  display: none !important;
}
._cm-os-slider .cmNativeAdSlider ._cm-native-ad-branding {
  display: none !important;
}
.cmNativeAdSlider {
  position: absolute;
  right: 0px;
  bottom: 0px;
  background-color: white;
  width: 100%;
  height: auto;
}
._cm_native_ad_background_color {
  background-color: #ffffff;
}
._cm-native-ad-inline {
  background-color: white !important;
}
._cm-native-ad-inline ._cm-native-ad-title {
  font-weight: bold !important;
}
._cm-native-ad-widget {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
._cm-native-ad-widget ._cm-native-ad-icon-img {
  margin-bottom: initial;
}
/****************************************
* Native Ad View End
****************************************/
.vpaid-player-container-ie-fix video {
  border: 1px transparent solid !important;
}
#_cm-css-reset._cm-volume-area {
  background: rgba(255, 255, 255, 0) !important;
  position: absolute !important;
  z-index: 2147483646 !important;
  cursor: pointer !important;
  right: 5px !important;
  overflow: hidden !important;
  box-sizing: border-box !important;
  padding: 5px !important;
  width: auto !important;
  height: auto !important;
  pointer-events: auto !important;
}
#_cm-css-reset._cm-volume-area ._cm-volume-border {
  box-sizing: border-box !important;
  padding: 0 0 22px 5px !important;
  height: 24px !important;
  width: 92px !important;
  border: 1px solid #fffefd !important;
  border-radius: 10% !important;
  z-index: 2 !important;
  font-size: 14px !important;
  line-height: 18.5px !important;
  vertical-align: middle !important;
  white-space: nowrap !important;
  overflow: hidden !important;
}
#_cm-css-reset._cm-volume-area ._cm-volume-border ._cm-volume-mute {
  display: inline !important;
  height: 14px !important;
  width: 19px !important;
  z-index: 1 !important;
  vertical-align: middle !important;
}
#_cm-css-reset._cm-volume-area ._cm-volume-border ._cm-volume-unmute {
  display: none !important;
  height: 14px !important;
  width: 19px !important;
  z-index: 1 !important;
  vertical-align: middle !important;
}
#_cm-css-reset._cm-volume-area ._cm-volume-border ._cm-volume-text {
  display: inline !important;
  color: #fffefd !important;
  font-family: 'Geneva', sans-serif !important;
  font-size: 14px !important;
  width: 53px !important;
  height: 15px !important;
  margin-left: 5px !important;
  vertical-align: middle !important;
}
#_cm-css-reset._cm-volume-area ._cm-volume-border:active {
  opacity: 0.3 !important;
  background-color: black !important;
}
._cm-volume-area-top {
  top: 7px !important;
}
._cm-volume-area-bottom {
  bottom: 7px !important;
}
#_cm-css-reset #_cm-skip-ad-area._cm-skip-ad-area {
  background: rgba(255, 255, 255, 0) !important;
  position: absolute !important;
  z-index: 2147483647 !important;
  cursor: pointer !important;
  padding-left: 6px !important;
  box-sizing: border-box !important;
  top: 12px !important;
  right: 10px !important;
  bottom: auto !important;
  pointer-events: auto;
  width: auto !important;
  height: auto !important;
}
#_cm-css-reset #_cm-skip-ad-area._cm-skip-ad-area ._cm-skip-ad-border {
  box-sizing: border-box !important;
  padding: 0 0 22px 5px !important;
  height: 24px !important;
  width: 92px !important;
  border: 1px solid #fffefd !important;
  z-index: 2 !important;
  font-size: 14px !important;
  line-height: 20px !important;
  vertical-align: middle !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  background: rgba(0, 0, 0, 0.45) !important;
  border-radius: 5px !important;
}
#_cm-css-reset #_cm-skip-ad-area._cm-skip-ad-area ._cm-skip-ad-border ._cm-skip-ad-text {
  display: inline !important;
  color: #fffefd !important;
  font-family: 'Geneva', sans-serif !important;
  font-size: 14px !important;
  width: 53px !important;
  height: 15px !important;
  margin-left: 5px !important;
  vertical-align: middle !important;
  margin-right: 5px !important;
  padding-right: 18px;
}
#_cm-css-reset #_cm-skip-ad-area._cm-skip-ad-area ._cm-skip-ad-border ._cm-skip-ad-icon {
  display: inline;
  position: absolute;
  width: 14px;
  height: 12px;
  right: 5px;
}
._cm-skip-ad-vid-reel {
  position: absolute;
  bottom: 50px;
  right: 0;
  height: auto;
  padding: 10px;
  background-color: #ffffff10;
  border: 1px solid #ffffff50;
  color: white;
  width: 90px;
  font-size: 15px;
  border-radius: 3px 0 0 3px;
  font-family: 'Roboto Condensed', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-right: 0;
  opacity: 1;
  transition: opacity 1s 2s;
  text-align: center;
  box-sizing: border-box;
  -webkit--webkit-transition: opacity 1s 2s;
  -moz--webkit-transition: opacity 1s 2s;
  -ms--webkit-transition: opacity 1s 2s;
  -o--webkit-transition: opacity 1s 2s;
  z-index: 999;
}
._cm-skip-ad-vid-reel:hover {
  cursor: pointer;
}
#_cm-css-reset._cm-ad-loading-progress {
  background: #e3e3e3;
  position: absolute !important;
  z-index: 30000 !important;
  cursor: pointer !important;
  overflow: hidden !important;
  padding: 0 !important;
  display: none;
  font-family: 'Segoe UI Semilight', 'Segoe WP Semilight', 'Segoe WP', 'Segoe UI', Arial, Sans-Serif !important;
  font-size: 14px;
  flex-direction: row;
  align-items: center;
  pointer-events: auto !important;
}
#_cm-css-reset._cm-ad-loading-progress ._cm-ad-loading-progress-container {
  text-align: center;
  color: #333333;
  width: 63%;
  margin: auto;
  display: none;
}
#_cm-css-reset._cm-ad-loading-progress ._cm-ad-loading-progress-container ._cm-ad-loading-progress_percent_span {
  color: #ababab;
}
#_cm-css-reset._cm-ad-loading-progress ._cm-ad-loading-progress-container ._cm-ad-loading-progress-bar {
  width: 100%;
  background-color: #c0c0c0;
  height: 4px;
}
#_cm-css-reset._cm-ad-loading-progress ._cm-ad-loading-progress-container ._cm-ad-loading-progress-bar ._cm-ad-loading-progress-bar-loaded {
  margin: 0px;
  width: 0%;
  background-color: #434343;
  height: 4px;
}
#_cm-css-reset._cm-ad-loading-progress.topLeftPosition {
  top: 0px;
  left: 0px;
}
.cm_video_content_wrapper {
  width: 100%;
  height: 100%;
  background-color: black;
}
.cm_video_content_video_element {
  width: 100%;
  height: 100%;
  frameborder: 0;
  border: 0;
  padding: 0;
  scrolling: no;
  marginwidth: 0;
  marginheight: 0;
}
._cm-content-video {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99990;
}
._cm-os-slider ._cm-content-video {
  z-index: 2147483647;
}
#_cm-css-reset ._cm-progress-bar {
  width: 100%;
  height: 5px;
  bottom: 0%;
  cursor: default;
  position: absolute !important;
}
#_cm-css-reset .cm_video_controls_progressbar_area .cm_video_controls_progressbar,
#_cm-css-reset .cm_video_controls_progressbar_area .cm_video_controls_progressbar_bg {
  height: 100%;
  position: absolute !important;
  display: block;
  margin: 0;
  padding: 0;
  background-color: transparent;
}
#_cm-css-reset .video_controls.show {
  display: block;
  margin: 0;
  padding: 0;
}
#_cm-css-reset .video_controls.show * {
  position: absolute !important;
  display: block;
  margin: 0;
  padding: 0;
  background-color: transparent;
}
#_cm-css-reset .video_controls {
  width: 100%;
  height: 100%;
  z-index: 1000;
  left: 0;
  bottom: -32px;
  -webkit-transition: bottom 0.35s ease-in-out;
  -moz-transition: bottom 0.35s ease-in-out;
  -o-transition: bottom 0.35s ease-in-out;
  transition: bottom 0.35s ease-in-out;
}
#_cm-css-reset .video_controls .control {
  z-index: 100;
}
#_cm-css-reset .video_controls .interactive {
  pointer-events: all;
  cursor: pointer;
}
#_cm-css-reset .video_controls.hide,
#_cm-css-reset .video_controls .hide {
  display: none;
}
#_cm-css-reset .video_controls.show,
#_cm-css-reset .video_controls .show {
  display: block;
}
#_cm-css-reset .video_controls .cm_video_controls_progressbar_area {
  width: 100%;
  height: 5px;
  bottom: 0%;
  cursor: default;
}
#_cm-css-reset .video_controls .cm_video_controls_progressbar_area .cm_video_controls_progressbar {
  height: 100%;
}
#_cm-css-reset .video_controls .cm_video_controls_progressbar_area .cm_video_controls_progressbar_bg {
  width: 100%;
  height: 100%;
}
#_cm-css-reset .video_controls .white_bg {
  background: rgba(255, 255, 255, 0.3);
}
#_cm-css-reset .video_controls .blue_bg {
  background: #154b91;
  -webkit-transition: width 0.5s ease;
  -moz-transition: width 0.5s ease;
  -o-transition: width 0.5s ease;
  transition: width 0.5s ease;
  width: 0%;
}
#_cm-css-reset .video_controls .blue_bg.init_bg {
  -webkit-transition: none;
  -moz-transition: none;
  -o-transition: none;
  transition: none;
}
#_cm-css-reset .video_controls {
  width: 100%;
  height: 27px;
}
#_cm-css-reset .video_controls .cm_video_controls_main_area .play_pause {
  top: 3px;
  left: 5px;
  width: 20px;
  height: 20px;
}
#_cm-css-reset .video_controls .cm_video_controls_main_area .play_pause .pause {
  width: 40px;
  height: 27px;
  top: -7px;
  left: -8px;
  background-size: 36px;
}
#_cm-css-reset .video_controls .cm_video_controls_main_area .play_pause .play {
  border-top: 5px solid transparent;
  border-left: 10px solid #fff;
  border-bottom: 5px solid transparent;
  left: 6px;
  top: 5px;
  z-index: 102;
}
#_cm-css-reset .video_controls .cm_video_controls_main_area .title {
  top: 7px;
  left: 30px;
  width: 140px;
  text-align: left;
}
#_cm-css-reset .video_controls .cm_video_controls_main_area .timer {
  top: 6px;
  right: 110px;
}
#_cm-css-reset .video_controls .text {
  color: white;
  font-size: 13px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  top: 10px;
  left: 28px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
}
#_cm-css-reset .video_controls .text.opt-out-hidden {
  left: 13px;
}
#_cm-css-reset .video_controls {
  width: 100%;
  height: 100%;
  right: 0px;
  bottom: 0;
}
#_cm-css-reset .video_controls .video_controls_main_area .cm_video_controls_mute {
  width: 35px;
  height: 27px;
  right: 8px;
  bottom: 5px;
  background-size: 44px;
  box-sizing: content-box;
  background-position-y: center;
}
#_cm-css-reset .video_controls .video_controls_main_area .cm_video_controls_volume {
  width: 35px;
  height: 27px;
  box-sizing: content-box;
  background-size: 44px;
  background-position-y: center;
}
#_cm-css-reset .video_controls .video_controls_main_area .cm_video_controls_mute .display_mute {
  display: none;
}
#_cm-css-reset .video_controls .video_controls_main_area .cm_video_controls_mute .display_unmute {
  display: none;
}
#_cm-css-reset .video_controls .video_controls_main_area .video-controls-scroller-area {
  width: 80px;
  height: 100%;
  right: 5px;
  top: 0%;
}
#_cm-css-reset .playerSaveButton {
  position: absolute;
  border: 1px solid #fff;
  border-radius: 9px;
  width: 50px;
  height: 24px;
  top: 20%;
  left: 0;
  font-size: 14px;
  color: #fff;
  text-align: center;
  line-height: 24px;
  cursor: pointer;
}
#_cm-css-reset .video_controls_mobile {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1001;
}
#_cm-css-reset .video_controls .video_controls_main_area {
  pointer-events: none;
}
#_cm-css-reset .video_controls .video_controls_main_area .cm_video_controls_playpause.hide {
  display: none;
}
#_cm-css-reset .video_controls .video_controls_main_area .cm_video_controls_playpause.show {
  display: block;
}
#_cm-css-reset .video_controls .video_controls_main_area .cm_video_controls_playpause {
  bottom: 28px;
  left: 5px;
}
#_cm-css-reset .video_controls .video_controls_main_area .cm_video_controls_playpause .pause {
  width: 40px;
  height: 27px;
  top: -10px;
  left: -8px;
  background-size: 40px;
}
#_cm-css-reset .video_controls .video_controls_main_area .cm_video_controls_playpause .play {
  border-top: 6px solid transparent;
  border-left: 10px solid #fff;
  border-bottom: 6px solid transparent;
  left: 7px;
  top: 3px;
  z-index: 102;
}
#_cm-css-reset ._cm-background-loading {
  position: absolute;
  z-index: 1000000000000000;
  padding: 0;
  margin: auto;
  display: block;
  top: 0;
  left: 0;
  width: 80px;
  right: 0;
  height: 80px;
  bottom: 0;
  background-size: contain;
}
._cm-components-wrapper {
  position: relative;
  z-index: 100000001;
}
#_cm-css-reset #_cm-content-carousel-area._cm-content-carousel-area {
  background-color: #fffefd !important;
  position: absolute !important;
  z-index: 2147483647 !important;
  padding-left: 0px !important;
  box-sizing: border-box !important;
  bottom: 0px !important;
  left: 0px !important;
  bottom: auto !important;
  pointer-events: auto !important;
  width: 100% !important;
  height: 70px !important;
  cursor: pointer !important;
  overflow: hidden;
}
#_cm-css-reset #_cm-content-carousel-area._cm-content-carousel-area ._cm-content-carousel-arrows {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  background-color: transparent;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
}
#_cm-css-reset #_cm-content-carousel-area._cm-content-carousel-area ._cm-content-carousel-arrows ._cm-content-carousel-arrow {
  pointer-events: auto;
  cursor: pointer;
  padding: 4px;
}
#_cm-css-reset #_cm-content-carousel-area._cm-content-carousel-area ._cm-content-carousel-blocker {
  background-color: black;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: none;
}
#_cm-css-reset #_cm-content-carousel-area._cm-content-carousel-area ._cm-content-carousel-items-container-wrapper::-webkit-scrollbar {
  display: none;
}
#_cm-css-reset #_cm-content-carousel-area._cm-content-carousel-area ._cm-content-carousel-items-container-wrapper {
  overflow-x: auto;
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
  position: absolute !important;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-x: scroll;
}
#_cm-css-reset #_cm-content-carousel-area._cm-content-carousel-area ._cm-content-carousel-items-container-wrapper ._cm-content-carousel-items-container {
  border: 1px solid #fffefd !important;
  z-index: 2 !important;
  font-size: 14px !important;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 70px !important;
  min-width: fit-content;
}
#_cm-css-reset #_cm-content-carousel-area._cm-content-carousel-area ._cm-content-carousel-items-container-wrapper ._cm-content-carousel-items-container ._cm-content-carousel-item:hover ._cm-content-carousel-item-play-icon {
  display: block;
}
#_cm-css-reset #_cm-content-carousel-area._cm-content-carousel-area ._cm-content-carousel-items-container-wrapper ._cm-content-carousel-items-container ._cm-content-carousel-item {
  position: relative;
  width: 120px;
  height: 70px;
  margin: 0 2px;
  font-size: 14px;
  color: white;
  line-height: 12px;
  font-size: 10px;
}
#_cm-css-reset #_cm-content-carousel-area._cm-content-carousel-area ._cm-content-carousel-items-container-wrapper ._cm-content-carousel-items-container ._cm-content-carousel-item _cm-content-carousel-item-image {
  background-position: center;
  /* Center the image */
  background-repeat: no-repeat;
  /* Do not repeat the image */
  background-size: cover;
}
#_cm-css-reset #_cm-content-carousel-area._cm-content-carousel-area ._cm-content-carousel-items-container-wrapper ._cm-content-carousel-items-container ._cm-content-carousel-item ._cm-content-carousel-item-play-icon {
  position: absolute;
  bottom: 0;
  left: 0;
  display: none;
  padding: 4px;
}
#_cm-css-reset #_cm-content-carousel-area._cm-content-carousel-area ._cm-content-carousel-items-container-wrapper ._cm-content-carousel-items-container ._cm-content-carousel-item ._cm-content-carousel-item-description {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 12px;
  padding: 5px 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#_cm-css-reset #_cm-content-carousel-area._cm-content-carousel-area ._cm-content-carousel-items-container-wrapper ._cm-content-carousel-items-container ._cm-content-carousel-item ._cm-content-carousel-item-playing-now {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 25px;
  padding-top: 20px;
  text-align: center;
}
#_cm-css-reset #_cm-content-carousel-area._cm-content-carousel-area ._cm-content-carousel-items-container-wrapper ._cm-content-carousel-items-container ._cm-content-carousel-item.false ._cm-content-carousel-item-description {
  display: block;
}
#_cm-css-reset #_cm-content-carousel-area._cm-content-carousel-area ._cm-content-carousel-items-container-wrapper ._cm-content-carousel-items-container ._cm-content-carousel-item.false ._cm-content-carousel-item-playing-now {
  display: none !important;
}
#_cm-css-reset #_cm-content-carousel-area._cm-content-carousel-area ._cm-content-carousel-items-container-wrapper ._cm-content-carousel-items-container ._cm-content-carousel-item.true ._cm-content-carousel-item-description {
  display: none;
}
#_cm-css-reset #_cm-content-carousel-area._cm-content-carousel-area ._cm-content-carousel-items-container-wrapper ._cm-content-carousel-items-container ._cm-content-carousel-item.true ._cm-content-carousel-item-play-icon {
  display: none !important;
}
#_cm-css-reset #_cm-content-carousel-area._cm-content-carousel-area ._cm-content-carousel-items-container-wrapper ._cm-content-carousel-items-container ._cm-content-carousel-item.true ._cm-content-carousel-item-playing-now {
  display: block !important;
}
#_cm-css-reset #_cm-content-carousel-area._cm-content-carousel-area ._cm-content-carousel-items-container-wrapper ._cm-content-carousel-items-container ._cm-content-carousel-item:first-child {
  margin-left: 0;
}
#_cm-css-reset #_cm-content-carousel-area._cm-content-carousel-area ._cm-content-carousel-items-container-wrapper ._cm-content-carousel-items-container ._cm-content-carousel-item:last-child {
  margin-right: 0;
}

n new F(a.top,a.right,a.bottom,a.left)};l=F.prototype;l.contains=function(a){return this&&a?a instanceof F?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
l.expand=function(a,b,c,d){Qa(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=Number(b),this.bottom+=Number(c),this.left-=Number(d));return this};l.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
l.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};l.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};var Gi=function(a,b,c){b instanceof Og?(a.left+=b.x,a.right+=b.x,a.top+=b.y,a.bottom+=b.y):(a.left+=b,a.right+=b,"number"===typeof c&&(a.top+=c,a.bottom+=c));return a};var Hi=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d},Ii=function(a){return new F(a.top,a.left+a.width,a.top+a.height,a.left)};l=Hi.prototype;l.contains=function(a){return a instanceof Og?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};l.getSize=function(){return new D(this.width,this.height)};
l.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};l.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};l.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ji(a){var b=Ia.apply(1,arguments);if(0===b.length)return Eg(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return Eg(c)};function Ki(a){for(var b=Ia.apply(1,arguments),c=a[0],d=0;d<a.length-1;d++)c+=String(b[d])+a[d+1];if(/[<>]/.test(c))throw Error("Forbidden characters in style string: "+c);return new Jg(c,Ig)};function Li(a){a=void 0===a?w:a;var b=a.context||a.AMP_CONTEXT_DATA;if(!b)try{b=a.parent.context||a.parent.AMP_CONTEXT_DATA}catch(e){}var c,d;return(null==(c=b)?0:c.pageViewId)&&(null==(d=b)?0:d.canonicalUrl)?b:null};var Mi=function(){this.S={}},Ni=function(){var a=Li(window);if(a){if(a){var b=a.pageViewId;a=a.clientId;"string"===typeof a&&(b+=a.replace(/\D/g,"").substr(0,6))}else b=null;return+b}b=Vh(window);a=b.google_global_correlator;a||(b.google_global_correlator=a=1+Math.floor(Math.random()*Math.pow(2,43)));return a},Pi=function(a,b){var c=Oi[7]||"google_ps_7";a=a.S;var d=a[c];return void 0===d?(a[c]=b(),a[c]):d},Qi=function(a){var b=Ni();return Pi(a,function(){return b})},Si=function(){if(Ri)var a=Ri;else{a=
((a=void 0===a?Li():a)?Ih(a.master)?a.master:null:null)||window;var b=a.google_persistent_state_async;a=null!=b&&"object"==typeof b&&null!=b.S&&"object"==typeof b.S?Ri=b:a.google_persistent_state_async=Ri=new Mi}return Qi(a)},Ri=null,Ti={},Oi=(Ti[8]="google_prev_ad_formats_by_region",Ti[9]="google_prev_ad_slotnames_by_region",Ti);var Ui=fa(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),Vi=function(){var a=void 0===a?"jserror":a;var b=void 0===b?.01:b;var c=void 0===c?Ji(Ui):c;this.h=a;this.j=!1;this.g=null;this.o=!1;this.B=Math.random();this.l=b;this.A=this.Sa;this.I=c};l=Vi.prototype;l.Hd=function(a){this.h=a};l.Sc=function(a){this.g=a};l.Id=function(a){this.j=a};l.Jd=function(a){this.o=a};
l.Sa=function(a,b,c,d,e){c=void 0===c?this.l:c;e=void 0===e?this.h:e;if((this.o?this.B:Math.random())>c)return this.j;Vf(b)||(b=new Uf(b,{context:a,id:e}));if(d||this.g)b.meta={},this.g&&this.g(b.meta),d&&d(b.meta);w.google_js_errors=w.google_js_errors||[];w.google_js_errors.push(b);w.error_rep_loaded||(b=w.document,a=Uh("SCRIPT",b),Gh(a,this.I),(b=b.getElementsByTagName("script")[0])&&b.parentNode&&b.parentNode.insertBefore(a,b),w.error_rep_loaded=!0);return this.j};
l.tb=function(a,b,c){try{return b()}catch(d){if(!this.A(a,d,this.l,c,this.h))throw d;}};l.zd=function(a,b,c,d){var e=this;return function(){var f=Ia.apply(0,arguments);return e.tb(a,function(){return b.apply(c,f)},d)}};var Wi=function(a){return a.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0},Xi=function(a){var b;a.visibilityState?b="visibilitychange":a.mozVisibilityState?b="mozvisibilitychange":a.webkitVisibilityState&&(b="webkitvisibilitychange");return b};var Yi=function(a){a=a._google_rum_ns_=a._google_rum_ns_||{};return a.pq=a.pq||[]};function Zi(a){a=null===a?"null":void 0===a?"undefined":a;var b=Bg();a=b?b.createHTML(a):a;return new Mg(a,Lg)};function $i(a,b,c){Oh(b,function(d,e){var f=c&&c[e];!d&&0!==d||f||(a+="&"+encodeURIComponent(e)+"="+encodeURIComponent(String(d)),c&&(c[e]=!0))});return a}
var fj=function(a,b,c,d,e,f,g,h){f=void 0===f?Infinity:f;g=void 0===g?!1:g;li.call(this,a,h);var k=this;this.H=b;this.domain=c;this.path=d;this.V=e;this.K=0;this.l={};this.G={};this.aa=[];this.report={};this.h=0;this.F=[];this.J=f;this.H=b;this.domain=c;this.path=d;this.V=e;a=this.g.navigator;this.Z=!("csi.gstatic.com"!==this.domain||!a||!a.sendBeacon);this.g.performance&&this.g.performance.now||aj(this,"dat",1);a&&a.deviceMemory&&aj(this,"dmc",a.deviceMemory);this.g===this.g.top&&aj(this,"top",1);
this.X=!g;this.N=function(){k.g.setTimeout(function(){bj(k)},1100)};this.U=function(){aj(k,"uet",2);for(var n=t(k.aa),q=n.next();!q.done;q=n.next()){q=q.value;try{q()}catch(v){}}n=k.g;var r=void 0===r?{}:r;"function"===typeof window.CustomEvent?q=new CustomEvent("rum_blp",r):(q=document.createEvent("CustomEvent"),q.initCustomEvent("rum_blp",!!r.bubbles,!!r.cancelable,r.detail));n.dispatchEvent(q);bj(k);null!=k.l.uet&&(k.o-=3+k.l.uet.length+2,delete k.l.uet)};this.ha=ag(function(){bj(k)});this.ba=
function(){var n=k.g.document;(null!=n.hidden?n.hidden:null!=n.mozHidden?n.mozHidden:null!=n.webkitHidden&&n.webkitHidden)&&k.ha()};this.D=this.g.setTimeout(function(){bj(k)},5E3);this.o=b.length+c.length+d.length+e.length+3;Mb(this.A,function(n){cj(k,n)});b=Yi(this.g);var m=function(){var n=Ia.apply(0,arguments)[0],q=n[0];n=n[1];var r=q.length+n.length+2;8E3<k.o+k.h+r&&bj(k);k.F.push([q,n]);k.h+=r;dj(k);return 0};Mb(b,function(n){return m(n)});b.length=0;b.push=m;aj(this,"puid",(this.K+1).toString(36)+
"~"+Date.now().toString(36));ej(this)};u(fj,li);
var ej=function(a){"complete"===a.g.document.readyState?a.g.setTimeout(function(){bj(a)},0):dg(a.g,"load",a.N);var b=Xi(a.g.document);"undefined"!==typeof b&&dg(a.g,b,a.ba);dg(a.g,"pagehide",a.U)},aj=function(a,b,c){c=String(c);a.o=null!=a.l[b]?a.o+(c.length-a.l[b].length):a.o+(b.length+c.length+2);a.l[b]=c},ij=function(a,b,c,d,e){e=void 0===e?"":e;var f=gj(a,b,c,d,e);8E3<a.o+a.h+f&&(bj(a),f=b.length+c.length+2);hj(a,b,c,d,e);a.h+=f;dj(a)},gj=function(a,b,c,d,e){return null==a.report[b]?b.length+
c.length+2:d?c.length+(void 0===e?"":e).length:c.length-a.report[b].length},hj=function(a,b,c,d,e){a.report[b]=d&&null!=a.report[b]?a.report[b]+(""+(void 0===e?"":e)+c):c},dj=function(a){6E3<=a.o+a.h&&bj(a)},bj=function(a){if(a.j&&a.X){try{a.h&&(a.sendBeacon(a.report),a.K===a.J&&a.B())}catch(b){(new Vi).Sa(358,b)}a.report={};a.h=0;a.A.length=0;a.g.clearTimeout(a.D);a.D=0}},jj=function(a,b){var c=a.H+"//"+a.domain+a.path+a.V,d={};c=$i(c,a.l,d);c=$i(c,b,d);b=a.g;b.google_timing_params&&(c=$i(c,b.google_timing_params,
d),b.google_timing_params=void 0);Mb(a.F,function(e){var f=t(e);e=f.next().value;f=f.next().value;var g={};c=$i(c,(g[e]=f,g))});a.F.length=0;return c};fj.prototype.sendBeacon=function(a){this.K++;a=jj(this,a);var b=!1;try{b=!!(this.Z&&this.g.navigator&&this.g.navigator.sendBeacon(a,null))}catch(c){this.Z=!1}b||Bi(this.g,a);aj(this,"puid",(this.K+1).toString(36)+"~"+Date.now().toString(36))};
var cj=function(a,b){var c="met."+b.type,d="number"===typeof b.value?Math.round(b.value).toString(36):b.value,e=Math.round(b.duration);b=""+b.label+(null!=b.slotId?"_"+b.slotId:"")+("."+d)+(0<e?"_"+e.toString(36):"")+(null!=b.taskId?"__"+Math.round(b.taskId).toString(36):"");ij(a,c,b,!0,"~")};fj.prototype.I=function(a){this.j&&this.K<this.J&&(li.prototype.I.call(this,a),cj(this,a))};
fj.prototype.B=function(){li.prototype.B.call(this);this.g.clearTimeout(this.D);this.h=this.D=0;this.report={};wg(this.G);wg(this.l);eg(this.g,"load",this.N);eg(this.g,"pagehide",this.U)};var G=function(){this.g=new fj(1,"https:","csi.gstatic.com","/csi?v=2&s=","ima",void 0,!0);var a=Si();null!=a&&aj(this.g,"c",a);a=parseInt(this.g.l.c,10)/2;null!=a&&aj(this.g,"slotId",a)},I=function(a,b,c){if(null!=c){a=a.g;var d=b+"="+c;a.G[d]||(ij(a,b,c,!1),1E3>d.length&&(a.G[d]=!0))}},kj=function(a,b){for(var c in b)b[c]="object"===typeof b[c]?encodeURIComponent(JSON.stringify(b[c])):encodeURIComponent(String(b[c]));a=a.g;var d=!1;c=0;for(var e=t(Object.keys(b)),f=e.next();!f.done;f=e.next())f=
f.value,null!=a.report[f]&&(d=!0),c+=gj(a,f,b[f],!1);(8E3<a.o+a.h+c||d)&&bj(a);d=t(Object.keys(b));for(f=d.next();!f.done;f=d.next())e=f.value,hj(a,e,b[e],!1);a.h+=c;dj(a)},J=function(a){var b=G.g().g;b.j&&b.I(new hi(a,4,di()-0,0))};
G.prototype.recordClick=function(a,b,c,d){for(var e=!1,f="notag";void 0!=d&&d!=document.documentElement;){var g=void 0,h=void 0;if((null==(g=d)?0:g.getAttribute("data-ck-navigates"))||(null==(h=d)?0:h.getAttribute("data-ck-tag"))){g=f=void 0;e=null!=(g=null==(f=d)?void 0:f.getAttribute("data-ck-navigates"))?g:!1;h=g=void 0;f=null!=(h=null==(g=d)?void 0:g.getAttribute("data-ck-tag"))?h:"notag";break}g=void 0;d=null!=(g=d.parentElement)?g:void 0}d=this.g;d.j&&d.I(new hi(a+"_"+b+"x"+c+"|"+e+"|"+f,4,
di(),0))};G.g=function(){return C(G)};var lj=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))},mj=function(a){try{return w.JSON.parse(a)}catch(b){}a=String(a);if(lj(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},oj=function(){this.g=nj},pj=function(a,b,c){if(null==
b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],pj(a,a.g?a.g.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),qj(d,c),c.push(":"),pj(a,a.g?a.g.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":qj(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},rj={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},sj=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g,qj=function(a,b){b.push('"',a.replace(sj,function(c){var d=rj[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),
rj[c]=d);return d}),'"')};var tj=function(){this.j=null;this.g="missing-id";this.h=!1},vj=function(a){var b=null;try{b=document.getElementsByClassName("lima-exp-data")}catch(c){return uj("missing-element",a.g),null}if(1<b.length)return uj("multiple-elements",a.g),null;b=b[0];return b?b.innerHTML:(uj("missing-element",a.g),null)},xj=function(){var a=wj,b=vj(a);if(null!==b)if(lj(b)){var c=JSON.parse(b);b=c.experimentIds;var d=c.binaryIdentifier;c=c.adEventId;var e="string"===typeof d;if("string"==typeof c){var f=G.g();null!=
c&&aj(f.g,"qqid",c)}e&&(a.g=d);"string"!==typeof b?uj("missing-flags",a.g):(e||uj("missing-binary-id",a.g),a.j=b)}else uj("invalid-json",a.g)};tj.prototype.reset=function(){this.j=null;this.g="missing-id"};var zj=function(a,b,c,d,e){this.id=a;this.C=b;this.o=c;this.g=!1;this.j=d;this.h=e;this.o&&yj(this)},K=function(a){return a.g||a.o},yj=function(a){if(a.j&&a.h){var b=a.h;(a=a.j)&&Object.assign(b.g,a)}},Aj=function(){this.g=[]},Bj=function(){this.g=new Map;this.h=!1;this.l=new Aj;this.A=new zj(0,0,!1);this.j=[this.l];this.o=new Ei},L=function(a){var b=Cj;if(b.h||b.g.has(a.id)||null==a.C&&null==a.control||0==a.rf)return b.A;var c=b.l;if(null!=a.control)for(var d=t(b.j),e=d.next();!e.done;e=d.next()){if(e=
e.value,e.g.includes(a.control)){c=e;break}}else null!=a.P&&(c=a.P);d=0;null!=a.control?d=a.control.C:null!=a.C&&(d=a.C);a=new zj(a.id,d,!!a.li,a.flags,b.o);c.g.push(a);b.j.includes(c)||b.j.push(c);b.g.set(a.id,a);return a},Dj=function(){var a=Cj;return[].concat(ha(a.g.keys())).filter(function(b){return K(this.g.get(b))},a)},Ej=function(a){var b=Cj;b.h||(a.g(b.j,b.g),b.h=!0)};
Bj.prototype.reset=function(){for(var a=t(this.g),b=a.next();!b.done;b=a.next())b=t(b.value),b.next(),b.next().value.g=!1;this.h=!1;this.o.reset()};var Cj=new Bj,Gj=function(){return Fj.g.filter(function(a){return K(a)}).map(function(a){return a.id})};var Hj=function(){};Hj.prototype.g=function(a){a=t(a);for(var b=a.next();!b.done;b=a.next()){var c=0,d=Math.floor(1E3*Math.random());b=t(b.value.g);for(var e=b.next();!e.done;e=b.next())if(e=e.value,c+=e.C,d<c){e.g=!0;yj(e);break}}};var Ij=function(a){this.M=A(a)};u(Ij,B);Ij.ga=[2,8];var Jj=[3,4,5];var Kj=function(a){this.M=A(a)};u(Kj,B);Kj.ga=[4];var Lj=function(a){this.M=A(a)};u(Lj,B);Lj.ga=[5];var Mj=[1,2,3,6,7];var Nj=function(a){this.M=A(a)};u(Nj,B);Nj.prototype.getId=function(){return ef(this,1)};Nj.ga=[2];var Oj=function(a){this.M=A(a)};u(Oj,B);Oj.ga=[2];var Pj=function(a){this.M=A(a)};u(Pj,B);Pj.ga=[2];var Qj=function(a){this.M=A(a)};u(Qj,B);Qj.ga=[1,4,2,3];var Rj=function(a){this.g=a||{cookie:""}};l=Rj.prototype;
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.ui;d=c.fg||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.qe}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.g.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ob(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{qe:0,path:b,domain:c});return d};l.wc=function(){return Sj(this).keys};l.zb=function(){return Sj(this).values};l.isEmpty=function(){return!this.g.cookie};l.clear=function(){for(var a=Sj(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
var Sj=function(a){a=(a.g.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=ob(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};function Tj(a){return"null"!==a.origin}function Uj(a,b,c){b=df(b,5)&&Tj(c)?c.document.cookie:null;return null===b?null:(new Rj({cookie:b})).get(a)||""};function Vj(a,b){switch(b){case 1:return kf(a,1,Mj);case 2:return kf(a,2,Mj);case 3:return kf(a,3,Mj);case 6:return kf(a,6,Mj);default:return null}}function Wj(a,b){if(!a)return null;switch(b){case 1:return df(a,1);case 7:return hf(a,3);case 2:var c=void 0===c?0:c;a=a.M;b=Dd(a);var d=Ie(a,b,2),e=Yd(d);null!=e&&e!==d&&Ke(a,b,2,e);return cf(e,c);case 3:return hf(a,3);case 6:return Me(a,4,re);default:return null}};var ck={},dk=(ck[47]=Ic,ck);function ek(){var a=fk,b=Xe(new Qj(gk),Pj,2);1==b.length&&16==jf(b[0],1)&&Xe(b[0],Oj,2).forEach(function(c){var d=ff(c),e=Ve(c,Ij,3),f=a[jf(c,4)];Xe(c,Nj,2).forEach(function(g){var h=d||ef(g,4),k=g.getId(),m=e||Ve(g,Ij,3);m=m?kf(m,3,Jj):null;m=dk[m];g=Xe(g,Lj,2);g=hk(g);L({id:k,C:h,P:f,rf:m,flags:g})})})}function hk(a){if(a.length){var b={};a.forEach(function(c){var d=c.M;d=Te(d,Dd(d),Mj);var e=Ve(c,Kj,4);e&&(c=Vj(c,d),d=Wj(e,d),b[c]=d)});return b}};var ik=function(a){this.h=a};ik.prototype.g=function(a,b){a=t(this.h);for(var c=a.next();!c.done;c=a.next())if(c=b.get(c.value))c.g=!0,yj(c)};var jk=function(a,b){this.h=a;this.j=b};u(jk,ik);jk.prototype.g=function(a,b){ik.prototype.g.call(this,a,b);var c=[];a=[];for(var d=t(this.h),e=d.next();!e.done;e=d.next())e=e.value,b.get(e)?c.push(e):a.push(e);b=c.map(String).join(",")||"0";a=a.map(String).join(",")||"0";I(G.g(),"sei",b);I(G.g(),"nsei",a);I(G.g(),"bi",this.j)};var kk=function(){tj.apply(this,arguments)};u(kk,tj);var uj=function(a,b){var c=G.g();I(c,"eee",a);I(c,"bi",b)};kk.g=function(){return C(kk)};function lk(){return mk.split(",").map(function(a){return parseInt(a,10)}).filter(function(a){return!isNaN(a)})};var Fj=new Aj,nk=new Aj,ok=new Aj,pk=new Aj,qk=new Aj,rk=new Aj,sk=new Aj,tk=new Aj,uk=new Aj,vk=new Aj,wk=new Aj,xk=new Aj,yk=new Aj,zk=new Aj,Ak=new Aj,Bk=new Aj,Ck=new Aj,Dk=new Aj,Ek=new Aj,Fk=new Aj;L({id:457864198,C:0});L({id:457864188,C:0});L({id:45786216,C:10});L({id:318475490,C:0});L({id:324123032,C:0});L({id:418572103,C:0});L({id:420706097,C:10});L({id:420706098,C:10});L({id:21062100,C:0});L({id:420706105,C:0});L({id:420706106,C:0});L({id:21064018,C:0});L({id:21064020,C:0});
L({id:21064022,C:0});L({id:21064024,C:0});L({id:21064075,C:0});L({id:21064201,C:0});L({id:420706142,C:0});L({id:21064347,C:0});L({id:44745813,C:0});L({id:44746068,C:0});L({id:21064565,C:0});L({id:21064567,C:0});L({id:418572006,C:10});var Gk=L({id:44768716,C:10,P:wk}),Hk=L({id:44768717,C:10,P:wk}),Ik=L({id:44787137,C:0,P:wk}),Jk=L({id:44744588,C:10}),Kk=L({id:44747319,C:10});L({id:44740339,C:10});var Lk=L({id:44740340,C:10});L({id:44749839,C:0});var Mk=L({id:44749840,C:0});L({id:44749841,C:0});
var Nk=L({id:44749842,C:0});L({id:44749843,C:1});var Ok=L({id:44749844,C:1});L({id:44749845,C:1});var Pk=L({id:44749846,C:1});L({id:44714743,C:0});L({id:44719216,C:0});L({id:44730895,C:10});L({id:44730896,C:10});L({id:44736292,C:10});L({id:44736293,C:10});L({id:44772138,C:0,P:qk});L({id:44772139,P:qk,C:1E3});L({id:31061774,C:10});var Qk=L({id:31061775,C:10});L({id:44715336,C:10});L({id:75259410,C:0});L({id:75259412,C:0});L({id:75259413,C:0});L({id:44773378,C:10,P:ok});var Rk=L({id:44773379,C:10,P:ok});
L({id:44724516,C:0});L({id:44726389,C:10});L({id:44752711,C:50});L({id:44752052,C:50});L({id:44752657,C:50});L({id:44781407,P:pk,C:0});L({id:44781408,P:pk,C:0});L({id:44781409,P:pk,C:1E3});L({id:44777647,P:rk,C:0});L({id:44777648,P:rk,C:0});L({id:44777649,P:rk,C:1E3});L({id:44727953,C:0});L({id:44782089,P:sk,C:10});L({id:44782090,P:sk,C:10});L({id:44733246,C:10});L({id:44750823,C:10,P:uk});L({id:44750824,C:10,P:uk});L({id:44794282,C:10,P:uk});L({id:44797013,C:10,P:uk});L({id:44797014,C:10,P:uk});
L({id:44750822,C:10,P:uk});L({id:44737473,C:0,P:nk});L({id:44771450,C:0,P:nk});L({id:44751889,C:10});L({id:44751890,C:10});L({id:44752995,C:10});L({id:44752996,C:10});L({id:44762627,C:0});L({id:44762628,C:0});L({id:44801479,C:10,P:vk});L({id:44801480,C:10,P:vk});L({id:44752538,C:0});L({id:44754608,C:10});L({id:44754609,C:10});L({id:44770822,C:10});L({id:44770823,C:10});L({id:44770824,C:10});L({id:44770825,C:10});L({id:75259414,C:0});L({id:44731964,C:50,P:Fj});L({id:44731965,C:50,P:Fj});
L({id:44767584,C:0});var Sk,Tk=(null==(Sk=window.document.featurePolicy)?0:Sk.allowedFeatures().includes("attribution-reporting"))?300:0;L({id:44776494,C:Tk,P:yk});L({id:44776495,C:Tk,P:yk});var Uk,Vk=(null==(Uk=window.document.featurePolicy)||Uk.allowedFeatures().includes("attribution-reporting"),0);L({id:44769484,C:Vk,P:zk});L({id:44769485,C:Vk,P:zk});L({id:44776384,C:0});L({id:44804616,C:50,P:Bk});var Wk=L({id:44804617,C:50,P:Bk}),Xk=L({id:44804618,C:50,P:Bk});L({id:44804613,C:50,P:Ck});
var Yk=L({id:44804614,C:50,P:Ck}),Zk=L({id:44804615,C:50,P:Ck});L({id:44803783,C:50});var $k=L({id:44803784,C:50}),al=L({id:44803785,C:50});L({id:44787954,C:0});L({id:44789282,C:0});L({id:44792636,C:0});L({id:44794298,C:0});L({id:44803996,C:0});L({id:44805453,C:0});L({id:44804917,C:0});L({id:44809796,C:0});L({id:75259415,C:0});var bl=L({id:75259416,C:0}),cl=L({id:75259420,C:0}),dl=L({id:75259421,C:0});L({id:44785452,C:10});L({id:44785453,C:10});L({id:45401791,C:0});L({id:44795414,C:1,P:Ak});
var el=L({id:44795415,C:1,P:Ak}),fl=L({id:44795416,C:1,P:Ak}),gl=L({id:44795417,C:1,P:Ak});L({id:44805102,C:5,P:Dk});var hl=L({id:44805103,C:5,P:Dk}),il=L({id:44805104,C:5,P:Dk}),jl=L({id:44805105,C:5,P:Dk}),kl=L({id:44805106,C:5,P:Dk});L({id:44806631,C:50,P:Ek});L({id:44806632,C:50,P:Ek});L({id:44802172,C:10});var ll=L({id:44802173,C:10}),ml=L({id:44804291,C:1E3,P:Fk});L({id:44805638,C:10});L({id:44805639,C:10});L({id:44805640,C:10});L({id:44806074,C:50});L({id:44806075,C:50});L({id:44806732,C:10});
L({id:44806733,C:10});var nl=(window.navigator||{}).cookieDeprecationLabel?50:0;L({id:95320460,C:nl});var ol=L({id:95320461,C:nl}),pl=L({id:95320462,C:nl});L({id:44807614,C:10});L({id:44807615,C:10});L({id:44808024,C:10});var ql=L({id:44808025,C:10}),rl=L({id:44808026,C:10});L({id:44809192,C:5});L({id:44809193,C:5});var sl=L({id:44809548,C:1E3,P:xk});L({id:31079198,C:0});var tl=L({id:31079199,C:0}),ul={},fk=(ul[32]=Fj,ul[35]=tk,ul);fk=void 0===fk?{}:fk;
if(!/^\{+IMA_EXPERIMENT_STATE_JSPB\}+$/.test("{{IMA_EXPERIMENT_STATE_JSPB}}"))try{var gk=JSON.parse("{{IMA_EXPERIMENT_STATE_JSPB}}");gk instanceof Array&&ek()}catch(a){I(G.g(),"espe",a.message)}if("undefined"===typeof window.v8_flag_map){var wj=kk.g();wj.h||(xj(),wj.h=!0);var mk=wj.j,vl;wj.h||(xj(),wj.h=!0);vl=wj.g;if(null!=mk){var wl=new jk(lk(),vl);Ej(wl)}};Cj.reset();Ej(new Hj);var xl=function(a){var b={};Mb(a,function(c){var d=c.g,e=b[d];b.hasOwnProperty(d)?null!==e&&(c.h(e)||(b[d]=null)):b[d]=c});Yb(a,function(c){return null===b[c.g]})};var yl={NONE:0,Ng:1},zl={Lg:0,Hh:1,Gh:2,Ih:3},Al={Ge:"a",Mg:"d",kf:"v"};var Bl=function(){this.Y=0;this.g=!1;this.h=-1;this.rb=!1;this.sa=0};Bl.prototype.isVisible=function(){return this.rb?.3<=this.Y:.5<=this.Y};var Cl={Kg:0,Qg:1},Dl={668123728:0,668123729:1},El={44731964:0,44731965:1},Fl={NONE:0,rh:1,Vg:2},Gl={480596784:0,480596785:1,21063355:2};var Hl=function(){this.g=null;this.o=!1;this.j=null},Il=function(a){a.o=!0;return a},Jl=function(a,b){a.j&&Mb(b,function(c){c=a.j[c];void 0!==c&&a.h(c)})};Hl.prototype.getValue=function(){return this.g};var Kl=function(a){Hl.call(this);this.l=a};u(Kl,Hl);Kl.prototype.h=function(a){null===this.g&&sg(this.l,a)&&(this.g=a)};var Ll=function(){Hl.call(this)};u(Ll,Hl);Ll.prototype.h=function(a){null===this.g&&"number"===typeof a&&(this.g=a)};var Ml=function(){Hl.call(this)};u(Ml,Hl);
Ml.prototype.h=function(a){null===this.g&&"string"===typeof a&&(this.g=a)};var Nl=function(){this.g={};this.j=!0;this.h={}};Nl.prototype.reset=function(){this.g={};this.j=!0;this.h={}};
var Ol=function(a,b,c){a.g[b]||(a.g[b]=new Kl(c));return a.g[b]},Pl=function(a){a.g.queryid||(a.g.queryid=new Ml)},Ql=function(a,b,c){(a=a.g[b])&&a.h(c)},Rl=function(a,b){if(rg(a.h,b))return a.h[b];if(a=a.g[b])return a.getValue()},Sl=function(a){var b={},c=lg(a.g,function(d){return d.o});kg(c,function(d,e){d=void 0!==a.h[e]?String(a.h[e]):d.o&&null!==d.g?String(d.g):"";0<d.length&&(b[e]=d)},a);return b},Tl=function(a){a=Sl(a);var b=[];kg(a,function(c,d){d in Object.prototype||"undefined"!=typeof c&&
b.push([d,":",c].join(""))});return b},Ul=function(){var a=N().R,b=Gj();a.j&&Mb(og(a.g),function(c){return Jl(c,b)})};var Vl=function(a){Ol(a,"od",yl);Il(Ol(a,"opac",Cl));Il(Ol(a,"sbeos",Cl));Il(Ol(a,"prf",Cl));Il(Ol(a,"mwt",Cl));Ol(a,"iogeo",Cl)};var Wl=document,O=window;var Xl=!jc&&!Fb();var Yl=function(){this.g=this.ib=null};var Zl=function(){};Zl.prototype.now=function(){return 0};Zl.prototype.h=function(){return 0};Zl.prototype.j=function(){return 0};Zl.prototype.g=function(){return 0};var am=function(){if(!$l())throw Error();};u(am,Zl);var $l=function(){return!(!O||!O.performance)};am.prototype.now=function(){return $l()&&O.performance.now?O.performance.now():Zl.prototype.now.call(this)};am.prototype.h=function(){return $l()&&O.performance.memory?O.performance.memory.totalJSHeapSize||0:Zl.prototype.h.call(this)};am.prototype.j=function(){return $l()&&O.performance.memory?O.performance.memory.usedJSHeapSize||0:Zl.prototype.j.call(this)};
am.prototype.g=function(){return $l()&&O.performance.memory?O.performance.memory.jsHeapSizeLimit||0:Zl.prototype.g.call(this)};var bm=function(){};bm.prototype.isVisible=function(){return 1===Wi(Wl)};var cm=function(a,b){this.g=a;this.depth=b},em=function(){var a=Xh(),b=Math.max(a.length-1,0),c=ai(a);a=c.g;var d=c.h,e=c.j,f=[];c=function(h,k){return null==h?k:h};e&&f.push(new cm([e.url,e.md?2:0],c(e.depth,1)));d&&d!=e&&f.push(new cm([d.url,2],0));a.url&&a!=e&&f.push(new cm([a.url,0],c(a.depth,b)));var g=Pb(f,function(h,k){return f.slice(0,f.length-k)});!a.url||(e||d)&&a!=e||(d=Qh(a.url))&&g.push([new cm([d,1],c(a.depth,b))]);g.push([]);return Pb(g,function(h){return dm(b,h)})};
function dm(a,b){var c=Qb(b,function(e,f){return Math.max(e,f.depth)},-1),d=dc(c+2);d[0]=a;Mb(b,function(e){return d[e.depth+1]=e.g});return d}function fm(){var a=void 0===a?em():a;return a.map(function(b){return pi(b)})};var gm=function(){this.h=new bm;this.g=$l()?new am:new Zl},im=function(){hm();var a=O.document;return!!(a&&a.body&&a.body.getBoundingClientRect&&"function"===typeof O.setInterval&&"function"===typeof O.clearInterval&&"function"===typeof O.setTimeout&&"function"===typeof O.clearTimeout)};gm.prototype.setTimeout=function(a,b){return O.setTimeout(a,b)};gm.prototype.clearTimeout=function(a){O.clearTimeout(a)};var jm=function(){hm();return fm()};var km=function(){},hm=function(){var a=C(km);if(!a.g){if(!O)throw Error("Context has not been set and window is undefined.");a.g=C(gm)}return a.g};var lm=function(a){this.M=A(a)};u(lm,B);lm.prototype.g=Rf([0,Ff,If,-2,Lf]);var mm=function(a){this.j=a;this.g=-1;this.h=this.o=0},nm=function(a,b){return function(){var c=Ia.apply(0,arguments);if(-1<a.g)return b.apply(null,ha(c));try{return a.g=a.j.g.now(),b.apply(null,ha(c))}finally{a.o+=a.j.g.now()-a.g,a.g=-1,a.h+=1}}};var om=function(a,b){this.h=a;this.j=b;this.g=new mm(a)};var pm=function(){this.g={}},rm=function(){var a=N().flags,b=qm;a=a.g[b.key];if("proto"===b.valueType){try{var c=JSON.parse(a);if(Array.isArray(c))return c}catch(d){}return b.defaultValue}return typeof a===typeof b.defaultValue?a:b.defaultValue};var sm={Ch:1,Zh:2,wh:3};var tm=function(){this.j=void 0;this.h=this.A=0;this.l=-1;this.R=new Nl;Il(Ol(this.R,"mv",Fl)).j=void 0===Gl?null:Gl;Ol(this.R,"omid",Cl);Il(Ol(this.R,"epoh",Cl));Il(Ol(this.R,"epph",Cl));Il(Ol(this.R,"umt",Cl)).j=void 0===Dl?null:Dl;Il(Ol(this.R,"phel",Cl));Il(Ol(this.R,"phell",Cl));Il(Ol(this.R,"oseid",sm));var a=this.R;a.g.sloi||(a.g.sloi=new Ll);Il(a.g.sloi);Ol(this.R,"mm",Al);Il(Ol(this.R,"ovms",zl));Il(Ol(this.R,"xdi",Cl));Il(Ol(this.R,"amp",Cl));Il(Ol(this.R,"prf",Cl));Il(Ol(this.R,"gtx",Cl));
Il(Ol(this.R,"mvp_lv",Cl));Il(Ol(this.R,"ssmol",Cl)).j=void 0===El?null:El;Il(Ol(this.R,"fmd",Cl));Ol(this.R,"gen204simple",Cl);this.g=new om(hm(),this.R);this.o=!1;this.flags=new pm};tm.prototype.yd=function(a){if("string"===typeof a&&0!=a.length){var b=this.R;if(b.j){a=a.split("&");for(var c=a.length-1;0<=c;c--){var d=a[c].split("="),e=decodeURIComponent(d[0]);1<d.length?(d=decodeURIComponent(d[1]),d=/^[0-9]+$/g.exec(d)?parseInt(d,10):d):d=1;(e=b.g[e])&&e.h(d)}}}};var N=function(){return C(tm)};var um=function(a,b,c,d,e){if((d?a.j:Math.random())<(e||a.g))try{if(c instanceof ni)var f=c;else f=new ni,Oh(c,function(h,k){var m=f,n=m.o++;ri(m,n,oi(k,h))});var g=ui(f,a.h,"/pagead/gen_204?id="+b+"&");g&&(hm(),Bi(O,g))}catch(h){}};var xm=function(){var a=vm;this.A=wm;this.l="jserror";this.j=!0;this.h=null;this.B=this.Sa;this.g=void 0===a?null:a;this.o=!1};l=xm.prototype;l.Sc=function(a){this.h=a};l.Hd=function(a){this.l=a};l.Id=function(a){this.j=a};l.Jd=function(a){this.o=a};l.tb=function(a,b,c){var d=this;return nm(N().g.g,function(){try{if(d.g&&d.g.j){var e=d.g.start(a.toString(),3);var f=b();d.g.end(e)}else f=b()}catch(h){var g=d.j;try{mi(e),g=d.B(a,new ym(zm(h)),void 0,c)}catch(k){d.Sa(217,k)}if(!g)throw h;}return f})()};
l.zd=function(a,b,c,d){var e=this;return nm(N().g.g,function(){var f=Ia.apply(0,arguments);return e.tb(a,function(){return b.apply(c,f)},d)})};
l.Sa=function(a,b,c,d,e){e=e||this.l;try{var f=new ni;si(f,1,"context",a);Vf(b)||(b=new ym(zm(b)));b.msg&&si(f,2,"msg",b.msg.substring(0,512));var g=b.meta||{};if(this.h)try{this.h(g)}catch(k){}if(d)try{d(g)}catch(k){}ri(f,3,[g]);var h=ai();h.h&&si(f,4,"top",h.h.url||"");ri(f,5,[{url:h.g.url||""},{url:h.g.url?vh(h.g.url):""}]);um(this.A,e,f,this.o,c)}catch(k){try{um(this.A,e,{context:"ecmserr",rctx:a,msg:zm(k),url:h&&h.g.url},this.o,c)}catch(m){}}return this.j};
var zm=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b},ym=function(a){Uf.call(this,Error(a),{message:a})};u(ym,Uf);var wm,Am,vm=new li(1,window),Bm=function(){O&&"undefined"!=typeof O.google_measure_js_timing&&(O.google_measure_js_timing||vm.B())};wm=new function(){var a="https:";O&&O.location&&"http:"===O.location.protocol&&(a="http:");this.h=a;this.g=.01;this.j=Math.random()};Am=new xm;O&&O.document&&("complete"==O.document.readyState?Bm():vm.j&&dg(O,"load",function(){Bm()}));
var Cm=function(a){Am.Sc(function(b){Mb(a,function(c){c(b)})})},Dm=function(a,b){return Am.tb(a,b)},Em=function(a,b,c,d){return Am.zd(a,b,c,d)},Fm=function(a,b,c,d){Am.Sa(a,b,c,d)};var Gm=Date.now(),Hm=-1,Im=-1,Jm,Km=-1,Lm=!1,Mm=function(){return Date.now()-Gm},Nm=function(){var a=N().j,b=0<=Im?Mm()-Im:-1,c=Lm?Mm()-Hm:-1,d=0<=Km?Mm()-Km:-1;if(947190542==a)return 100;if(79463069==a)return 200;a=[2E3,4E3];var e=[250,500,1E3];Fm(637,Error(),.001);var f=b;-1!=c&&c<b&&(f=c);for(b=0;b<a.length;++b)if(f<a[b]){var g=e[b];break}void 0===g&&(g=e[a.length]);return-1!=d&&1500<d&&4E3>d?500:g};var Om=function(a,b,c){var d=new F(0,0,0,0);this.time=a;this.volume=null;this.j=b;this.g=d;this.h=c};var Pm=function(a,b,c,d,e,f,g){this.j=a;this.h=b;this.l=c;this.g=d;this.o=e;this.B=f;this.A=g};Pm.prototype.getTimestamp=function(){return this.B};var Qm={currentTime:1,duration:2,isVpaid:4,volume:8,isYouTube:16,isPlaying:32},ug={Xd:"start",FIRST_QUARTILE:"firstquartile",MIDPOINT:"midpoint",THIRD_QUARTILE:"thirdquartile",COMPLETE:"complete",ERROR:"error",Ue:"metric",Wd:"pause",df:"resume",SKIPPED:"skip",VIEWABLE_IMPRESSION:"viewable_impression",Ve:"mute",jf:"unmute",FULLSCREEN:"fullscreen",Qe:"exitfullscreen",Le:"bufferstart",Ke:"bufferfinish",Rd:"fully_viewable_audible_half_duration_impression",Vd:"measurable_impression",Fe:"abandon",Qd:"engagedview",
IMPRESSION:"impression",Ne:"creativeview",LOADED:"loaded",Eh:"progress",Eg:"close",Fg:"collapse",We:"overlay_resize",Xe:"overlay_unmeasurable_impression",Ye:"overlay_unviewable_impression",af:"overlay_viewable_immediate_impression",Ze:"overlay_viewable_end_of_session_impression",Oe:"custom_metric_viewable",He:"audio_audible",Je:"audio_measurable",Ie:"audio_impression"},Rm="start firstquartile midpoint thirdquartile resume loaded".split(" "),Sm=["start","firstquartile","midpoint","thirdquartile"],
Tm=["abandon"],Um={Uh:-1,Xd:0,FIRST_QUARTILE:1,MIDPOINT:2,THIRD_QUARTILE:3,COMPLETE:4,Ue:5,Wd:6,df:7,SKIPPED:8,VIEWABLE_IMPRESSION:9,Ve:10,jf:11,FULLSCREEN:12,Qe:13,Rd:14,Vd:15,Fe:16,Qd:17,IMPRESSION:18,Ne:19,LOADED:20,Oe:21,Le:22,Ke:23,Ie:27,Je:28,He:29};var ng={yg:"addEventListener",Wg:"getMaxSize",Xg:"getScreenSize",Yg:"getState",Zg:"getVersion",Fh:"removeEventListener",sh:"isViewable"},Vm=function(a){var b=a!==a.top,c=a.top===Vh(a),d=-1,e=0;if(b&&c&&a.top.mraid){d=3;var f=a.top.mraid}else d=(f=a.mraid)?b?c?2:1:0:-1;f&&(f.IS_GMA_SDK||(e=2),mg(function(g){return"function"===typeof f[g]})||(e=1));return{Ba:f,rc:e,kg:d}};var Wm=function(){var a=window.document;return a&&"function"===typeof a.elementFromPoint};function Xm(a,b,c){try{a&&(b=b.top);var d=b;a&&null!==d&&d!=d.top&&(d=d.top);try{var e=(void 0===c?0:c)?(new D(d.innerWidth,d.innerHeight)).round():eh(d||window).round()}catch(n){e=new D(-12245933,-12245933)}a=e;var f=a.height,g=a.width;if(-12245933===g)return new F(g,g,g,g);var h=fh($g(b.document).g),k=h.x,m=h.y;return new F(m,k+g,m+f,k)}catch(n){return new F(-12245933,-12245933,-12245933,-12245933)}};var Zm=function(a,b){if("string"===typeof b)(b=Ym(a,b))&&(a.style[b]=void 0);else for(var c in b){var d=a,e=b[c],f=Ym(d,c);f&&(d.style[f]=e)}},$m={},Ym=function(a,b){var c=$m[b];if(!c){var d=Ug(b);c=d;void 0===a.style[d]&&(d=(mc?"Webkit":lc?"Moz":jc?"ms":null)+Wg(d),void 0!==a.style[d]&&(c=d));$m[b]=c}return c},an=function(a,b){var c=a.style[Ug(b)];return"undefined"!==typeof c?c:a.style[Ym(a,b)]||""},bn=function(a,b){var c=Zg(a);return c.defaultView&&c.defaultView.getComputedStyle&&(a=c.defaultView.getComputedStyle(a,
null))?a[b]||a.getPropertyValue(b)||"":""},cn=function(a){try{return a.getBoundingClientRect()}catch(b){return{left:0,top:0,right:0,bottom:0}}},dn=function(a){var b=Zg(a),c=new Og(0,0);var d=b?Zg(b):document;d=!jc||9<=Number(Hc)||dh($g(d).g)?d.documentElement:d.body;if(a==d)return c;a=cn(a);b=fh($g(b).g);c.x=a.left+b.x;c.y=a.top+b.y;return c},en=function(a,b){var c=new Og(0,0),d=E(Zg(a));if(!fc(d,"parent"))return c;do{if(d==b)var e=dn(a);else e=cn(a),e=new Og(e.left,e.top);c.x+=e.x;c.y+=e.y}while(d&&
d!=b&&d!=d.parent&&(a=d.frameElement)&&(d=d.parent));return c},fn=function(){var a="100%";"number"==typeof a&&(a=Math.round(a)+"px");return a},hn=function(a){var b=gn;if("none"!=(bn(a,"display")||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a},gn=function(a){var b=a.offsetWidth,c=a.offsetHeight,
d=mc&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=cn(a),new D(a.right-a.left,a.bottom-a.top)):new D(b,c)},mn=function(a){var b=Zg(a),c=jc&&a.currentStyle;if(c&&dh($g(b).g)&&"auto"!=c.width&&"auto"!=c.height&&!c.boxSizing)return b=jn(a,c.width,"width","pixelWidth"),a=jn(a,c.height,"height","pixelHeight"),new D(b,a);c=new D(a.offsetWidth,a.offsetHeight);if(jc){b=kn(a,"paddingLeft");var d=kn(a,"paddingRight"),e=kn(a,"paddingTop"),f=kn(a,"paddingBottom");b=new F(e,d,f,b)}else b=bn(a,"paddingLeft"),
d=bn(a,"paddingRight"),e=bn(a,"paddingTop"),f=bn(a,"paddingBottom"),b=new F(parseFloat(e),parseFloat(d),parseFloat(f),parseFloat(b));!jc||9<=Number(Hc)?(d=bn(a,"borderLeftWidth"),e=bn(a,"borderRightWidth"),f=bn(a,"borderTopWidth"),a=bn(a,"borderBottomWidth"),a=new F(parseFloat(f),parseFloat(e),parseFloat(a),parseFloat(d))):(d=ln(a,"borderLeft"),e=ln(a,"borderRight"),f=ln(a,"borderTop"),a=ln(a,"borderBottom"),a=new F(f,e,a,d));return new D(c.width-a.left-b.left-b.right-a.right,c.height-a.top-b.top-
b.bottom-a.bottom)},jn=function(a,b,c,d){if(/^\d+px?$/.test(b))return parseInt(b,10);var e=a.style[c],f=a.runtimeStyle[c];a.runtimeStyle[c]=a.currentStyle[c];a.style[c]=b;b=a.style[d];a.style[c]=e;a.runtimeStyle[c]=f;return+b},kn=function(a,b){return(b=a.currentStyle?a.currentStyle[b]:null)?jn(a,b,"left","pixelLeft"):0},nn={thin:2,medium:4,thick:6},ln=function(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;b=a.currentStyle?a.currentStyle[b+"Width"]:null;return b in nn?nn[b]:
jn(a,b,"left","pixelLeft")};var on=function(a,b){b=Math.pow(10,b);return Math.floor(a*b)/b};function pn(a,b,c,d){if(!a)return{value:d,done:!1};d=b(d,a);var e=c(d,a);return!e&&fc(a,"parentElement")?pn(kh(a),b,c,d):{done:e,value:d}}var qn=function(a,b,c,d){if(!a)return d;d=pn(a,b,c,d);if(!d.done)try{var e=Zg(a),f=e&&E(e);return qn(f&&f.frameElement,b,c,d.value)}catch(g){}return d.value};
function rn(a){var b=!jc||Cc();return qn(a,function(c,d){c=fc(d,"style")&&d.style&&an(d,"visibility");return{hidden:"hidden"===c,visible:b&&"visible"===c}},function(c){return c.hidden||c.visible},{hidden:!1,visible:!1}).hidden}
var sn=function(a){return qn(a,function(b,c){return!(!fc(c,"style")||!c.style||"none"!==an(c,"display"))},function(b){return b},!1)?!0:rn(a)},tn=function(a){return new F(a.top,a.right,a.bottom,a.left)},un=function(a){var b=a.top||0,c=a.left||0;return new F(b,c+(a.width||0),b+(a.height||0),c)},vn=function(a){return null!=a&&0<=a&&1>=a};function wn(){var a=vb();return a?Rb("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"),function(b){return qb(a,b)})||qb(a,"OMI/")&&!qb(a,"XiaoMi/")?!0:qb(a,"Presto")&&qb(a,"Linux")&&!qb(a,"X11")&&!qb(a,"Android")&&!qb(a,"Mobi"):!1}
function xn(){var a=vb();return qb(a,"AppleTV")||qb(a,"Apple TV")||qb(a,"CFNetwork")||qb(a,"tvOS")}function yn(){var a;(a=qb(vb(),"CrKey")||qb(vb(),"PlayStation")||qb(vb(),"Roku")||wn()||qb(vb(),"Xbox")||xn())||(a=vb(),a=qb(a,"sdk_google_atv_x86")||qb(a,"Android TV"));return a};var An=function(){this.j=!Ih(O.top);this.B=oh()||th();var a=Xh();a=0<a.length&&null!=a[a.length-1]&&null!=a[a.length-1].url?((a=a[a.length-1].url.match(uh)[3]||null)?decodeURI(a):a)||"":"";this.domain=a;this.g=new F(0,0,0,0);this.l=new D(0,0);this.o=new D(0,0);this.I=new F(0,0,0,0);this.A=0;this.K=!1;this.h=!(!O||!Vm(O).Ba);zn(this)},Bn=function(a,b){b&&b.screen&&(a.l=new D(b.screen.width,b.screen.height))},Cn=function(a,b){var c=a.g?new D(a.g.getWidth(),a.g.getHeight()):new D(0,0);b=void 0===b?O:
b;null!==b&&b!=b.top&&(b=b.top);var d=0,e=0;try{var f=b.document,g=f.body,h=f.documentElement;if("CSS1Compat"==f.compatMode&&h.scrollHeight)d=h.scrollHeight!=c.height?h.scrollHeight:h.offsetHeight,e=h.scrollWidth!=c.width?h.scrollWidth:h.offsetWidth;else{var k=h.scrollHeight,m=h.scrollWidth,n=h.offsetHeight,q=h.offsetWidth;h.clientHeight!=n&&(k=g.scrollHeight,m=g.scrollWidth,n=g.offsetHeight,q=g.offsetWidth);k>c.height?k>n?(d=k,e=m):(d=n,e=q):k<n?(d=k,e=m):(d=n,e=q)}var r=new D(e,d)}catch(v){r=new D(-12245933,
-12245933)}a.o=r},zn=function(a){O&&O.document&&(a.I=Xm(!1,O,a.B),a.g=Xm(!0,O,a.B),Cn(a,O),Bn(a,O))},En=function(){var a=Dn();if(0<a.A||a.K)return!0;a=hm().h.isVisible();var b=0===Wi(Wl);return a||b},Dn=function(){return C(An)};var Fn=function(a){this.j=a;this.h=0;this.g=null};Fn.prototype.cancel=function(){hm().clearTimeout(this.g);this.g=null};var Gn=function(a){var b=hm(),c=N().g.g;a.g=b.setTimeout(nm(c,Em(143,function(){a.h++;a.j.sample()})),Nm())};var Hn=function(a,b,c){this.j=a;this.ma=void 0===c?"na":c;this.l=[];this.ua=!1;this.o=new Om(-1,!0,this);this.g=this;this.K=b;this.G=this.D=!1;this.X="uk";this.N=!1;this.B=!0};Hn.prototype.F=function(){return!1};Hn.prototype.initialize=function(){return this.ua=!0};Hn.prototype.yb=function(){return this.g.X};Hn.prototype.Ob=function(){return this.g.G};var Jn=function(a,b,c){if(!a.G||(void 0===c?0:c))a.G=!0,a.X=b,a.K=0,a.g!=a||In(a)};Hn.prototype.getName=function(){return this.g.ma};
Hn.prototype.ab=function(){return this.g.Z()};Hn.prototype.Z=function(){return{}};Hn.prototype.Oa=function(){return this.g.K};var Kn=function(a,b){Vb(a.l,b)||(a.l.push(b),b.Ab(a.g),b.bb(a.o),b.Ka()&&(a.D=!0))};Hn.prototype.U=function(){var a=Dn();a.g=Xm(!0,this.j,a.B)};Hn.prototype.V=function(){Bn(Dn(),this.j)};Hn.prototype.aa=function(){return this.o.g};var Ln=function(a){a=a.g;a.V();a.U();var b=Dn();b.I=Xm(!1,a.j,b.B);Cn(Dn(),a.j);a.o.g=a.aa()};Hn.prototype.sample=function(){};
Hn.prototype.isActive=function(){return this.g.B};var Mn=function(a){a.D=a.l.length?Rb(a.l,function(b){return b.Ka()}):!1},Nn=function(a){var b=$b(a.l);Mb(b,function(c){c.bb(a.o)})},In=function(a){var b=$b(a.l);Mb(b,function(c){c.Ab(a.g)});a.g!=a||Nn(a)};l=Hn.prototype;l.Ab=function(a){var b=this.g;this.g=a.Oa()>=this.K?a:this;b!==this.g?(this.B=this.g.B,In(this)):this.B!==this.g.B&&(this.B=this.g.B,In(this))};
l.bb=function(a){if(a.h===this.g){var b=this.o,c=this.D;if(c=a&&(void 0===c||!c||b.volume==a.volume)&&b.j==a.j)b=b.g,c=a.g,c=b==c?!0:b&&c?b.top==c.top&&b.right==c.right&&b.bottom==c.bottom&&b.left==c.left:!1;this.o=a;!c&&Nn(this)}};l.Ka=function(){return this.D};l.W=function(){this.N=!0};l.ya=function(){return this.N};var On=function(a,b,c,d){this.j=a;this.g=new F(0,0,0,0);this.l=new F(0,0,0,0);this.h=b;this.R=c;this.G=d;this.F=!1;this.timestamp=-1;this.I=new Pm(b.o,this.g,new F(0,0,0,0),0,0,Mm(),0)};l=On.prototype;l.Xc=function(){return!0};l.Xb=function(){};l.W=function(){if(!this.ya()){var a=this.h;Wb(a.l,this);a.D&&this.Ka()&&Mn(a);this.Xb();this.F=!0}};l.ya=function(){return this.F};l.ab=function(){return this.h.ab()};l.Oa=function(){return this.h.Oa()};l.yb=function(){return this.h.yb()};l.Ob=function(){return this.h.Ob()};
l.Ab=function(){};l.bb=function(){this.Ya()};l.Ka=function(){return this.G};var Pn=function(a){this.l=!1;this.g=a;this.o=function(){}};l=Pn.prototype;l.Oa=function(){return this.g.Oa()};l.yb=function(){return this.g.yb()};l.Ob=function(){return this.g.Ob()};l.create=function(a,b,c){var d=null;this.g&&(d=this.Yb(a,b,c),Kn(this.g,d));return d};l.Sd=function(){return this.Gb()};l.Gb=function(){return!1};l.init=function(a){return this.g.initialize()?(Kn(this.g,this),this.o=a,!0):!1};l.Ab=function(a){0==a.Oa()&&this.o(a.yb(),this)};l.bb=function(){};l.Ka=function(){return!1};
l.W=function(){this.l=!0};l.ya=function(){return this.l};l.ab=function(){return{}};var Qn=function(a,b,c){this.j=void 0===c?0:c;this.h=a;this.g=null==b?"":b},Rn=function(a){switch(Math.trunc(a.j)){case -16:return-16;case -8:return-8;case 0:return 0;case 8:return 8;case 16:return 16;default:return 16}},Sn=function(a,b){return a.j<b.j?!0:a.j>b.j?!1:a.h<b.h?!0:a.h>b.h?!1:typeof a.g<typeof b.g?!0:typeof a.g>typeof b.g?!1:a.g<b.g};var Tn=function(){this.j=0;this.g=[];this.h=!1};Tn.prototype.add=function(a,b,c){++this.j;a=new Qn(a,b,c);this.g.push(new Qn(a.h,a.g,a.j+this.j/4096));this.h=!0;return this};
var Un=function(a,b){Mb(b.g,function(c){a.add(c.h,c.g,Rn(c))})},Vn=function(a,b){var c=void 0===c?0:c;var d=void 0===d?!0:d;Oh(b,function(e,f){d&&void 0===e||a.add(f,e,c)});return a},Xn=function(a){var b=Wn;a.h&&(bc(a.g,function(c,d){return Sn(d,c)?1:Sn(c,d)?-1:0}),a.h=!1);return Qb(a.g,function(c,d){d=b(d);return""+c+(""!=c&&""!=d?"&":"")+d},"")};var Wn=function(a){var b=a.h;a=a.g;return""===a?b:"boolean"===typeof a?a?b:"":Array.isArray(a)?0===a.length?b:b+"="+a.join():b+"="+(Vb(["mtos","tos","p"],b)?a:encodeURIComponent(a))};var Yn=function(a){var b=void 0===b?!0:b;this.g=new Tn;void 0!==a&&Un(this.g,a);b&&this.g.add("v","unreleased",-16)};Yn.prototype.toString=function(){var a="//pagead2.googlesyndication.com//pagead/gen_204",b=Xn(this.g);0<b.length&&(a+="?"+b);return a};var Zn=function(a){var b=[],c=[];kg(a,function(d,e){if(!(e in Object.prototype)&&"undefined"!=typeof d)switch(Array.isArray(d)&&(d=d.join(",")),d=[e,"=",d].join(""),e){case "adk":case "r":case "tt":case "error":case "mtos":case "tos":case "p":case "bs":b.unshift(d);break;case "req":case "url":case "referrer":case "iframe_loc":c.push(d);break;default:b.push(d)}});return b.concat(c)},$n=function(a){a=a.toString();hm();Bi(O,a)};var ao=function(){this.g=0};function bo(a){a&&"function"==typeof a.W&&a.W()};var P=function(){this.K=this.K;this.I=this.I};P.prototype.K=!1;P.prototype.ya=function(){return this.K};P.prototype.W=function(){this.K||(this.K=!0,this.L())};var eo=function(a,b){co(a,ab(bo,b))},co=function(a,b){a.K?b():(a.I||(a.I=[]),a.I.push(b))};P.prototype.L=function(){if(this.I)for(;this.I.length;)this.I.shift()()};var fo=function(a,b,c){Mb(a.j,function(d){var e=a.g;if(!d.g&&(d.j(b,c),d.o())){d.g=!0;var f=d.h(),g=new Tn;g.add("id","av-js");g.add("type","verif");g.add("vtype",d.l);d=C(ao);g.add("i",d.g++);g.add("adk",e);Vn(g,f);e=new Yn(g);$n(e)}})};var go=function(){this.h=this.j=this.o=this.g=0},ho=function(a,b,c,d){b&&(a.g+=c,a.h+=c,a.o+=c,a.j=Math.max(a.j,a.o));if(void 0===d?!b:d)a.o=0};var io=[1,.75,.5,.3,0],jo=function(a){this.h=a=void 0===a?io:a;this.g=Pb(this.h,function(){return new go})},lo=function(a,b){return ko(a,function(c){return c.g},void 0===b?!0:b)},no=function(a,b){return mo(a,b,function(c){return c.g})},oo=function(a,b){return ko(a,function(c){return c.j},void 0===b?!0:b)},po=function(a,b){return mo(a,b,function(c){return c.j})},qo=function(a,b){return mo(a,b,function(c){return c.h})},ro=function(a){Mb(a.g,function(b){b.h=0})},so=function(a,b,c,d,e,f,g){g=void 0===
g?!0:g;c=f?Math.min(b,c):c;for(f=0;f<a.h.length;f++){var h=a.h[f],k=0<c&&c>=h;h=!(0<b&&b>=h)||d;ho(a.g[f],g&&k,e,!g||h)}},ko=function(a,b,c){a=Pb(a.g,function(d){return b(d)});return c?a:to(a)},mo=function(a,b,c){var d=Ub(a.h,function(e){return b<=e});return-1==d?0:c(a.g[d])},to=function(a){return Pb(a,function(b,c,d){return 0<c?d[c]-d[c-1]:d[c]})};var uo=function(){this.h=new jo;this.X=new go;this.G=this.B=-1;this.ha=1E3;this.ba=new jo([1,.9,.8,.7,.6,.5,.4,.3,.2,.1,0]);this.N=this.H=-1},vo=function(a,b){return oo(a.h,void 0===b?!0:b)};
uo.prototype.K=function(a,b,c,d){this.B=-1!=this.B?Math.min(this.B,b.Y):b.Y;this.G=Math.max(this.G,b.Y);this.H=-1!=this.H?Math.min(this.H,b.sa):b.sa;this.N=Math.max(this.N,b.sa);so(this.ba,b.sa,c.sa,b.g,a,d);so(this.h,b.Y,c.Y,b.g,a,d);c=d||c.rb!=b.rb?c.isVisible()&&b.isVisible():c.isVisible();b=!b.isVisible()||b.g;ho(this.X,c,a,b)};uo.prototype.Ra=function(){return this.X.j>=this.ha};if(Wl&&Wl.URL){var wo=Wl.URL,xo;if(xo=!!wo){var yo;a:{if(wo){var zo=RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");try{var Ao=zo.exec(decodeURIComponent(wo));if(Ao){yo=Ao[1]&&1<Ao[1].length?Ao[1].substring(1):"true";break a}}catch(a){}}yo=""}xo=0<yo.length}Am.Id(!xo)}var Bo=function(a,b,c,d){var e=void 0===e?!1:e;c=Em(d,c);dg(a,b,c,{capture:e})};var Co=new F(0,0,0,0);function Do(a,b){b=Eo(b);return 0===b?0:Eo(a)/b}function Eo(a){return Math.max(a.bottom-a.top,0)*Math.max(a.right-a.left,0)}function Fo(a,b){if(!a||!b)return!1;for(var c=0;null!==a&&100>c++;){if(a===b)return!0;try{if(a=kh(a)||a){var d=Zg(a),e=d&&E(d),f=e&&e.frameElement;f&&(a=f)}}catch(g){break}}return!1}
function Go(a,b,c){if(!a||!b)return!1;b=Gi(Fi(a),-b.left,-b.top);a=(b.left+b.right)/2;b=(b.top+b.bottom)/2;Ih(window.top)&&window.top&&window.top.document&&(window=window.top);if(!Wm())return!1;a=window.document.elementFromPoint(a,b);if(!a)return!1;b=(b=(b=Zg(c))&&b.defaultView&&b.defaultView.frameElement)&&Fo(b,a);var d=a===c;a=!d&&a&&nh(a,function(e){return e===c});return!(b||d||a)}
function Ho(a,b,c,d){return Dn().j?!1:0>=a.getWidth()||0>=a.getHeight()?!0:c&&d?Dm(208,function(){return Go(a,b,c)}):!1};var Io=new F(0,0,0,0),Ko=function(a,b,c){P.call(this);this.position=Fi(Io);this.Jc=this.xc();this.nd=-2;this.og=Date.now();this.Be=-1;this.Bc=b;this.Ac=null;this.Kb=!1;this.Oc=null;this.opacity=-1;this.dg=c;this.pg=!1;this.od=function(){};this.Ce=function(){};this.ta=new Yl;this.ta.ib=a;this.ta.g=a;this.Pa=!1;this.nb={rd:null,qd:null};this.xe=!0;this.Wb=null;this.Bb=this.Qf=!1;N().A++;this.pa=this.hd();this.Ae=-1;this.ca=null;this.ke=this.Of=!1;this.R=new Nl;Vl(this.R);Jo(this);1==this.dg?Ql(this.R,
"od",1):Ql(this.R,"od",0)};u(Ko,P);Ko.prototype.L=function(){this.ta.g&&(this.nb.rd&&(eg(this.ta.g,"mouseover",this.nb.rd),this.nb.rd=null),this.nb.qd&&(eg(this.ta.g,"mouseout",this.nb.qd),this.nb.qd=null));this.Wb&&this.Wb.W();this.ca&&this.ca.W();delete this.Jc;delete this.od;delete this.Ce;delete this.ta.ib;delete this.ta.g;delete this.nb;delete this.Wb;delete this.ca;delete this.R;P.prototype.L.call(this)};Ko.prototype.pb=function(){return this.ca?this.ca.g:this.position};Ko.prototype.yd=function(a){N().yd(a)};
var Jo=function(a){a=a.ta.ib;var b;if(b=a&&a.getAttribute)b=/-[a-z]/.test("googleAvInapp")?!1:Xl&&a.dataset?"googleAvInapp"in a.dataset:a.hasAttribute?a.hasAttribute("data-"+Vg()):!!a.getAttribute("data-"+Vg());b&&(Dn().h=!0)};Ko.prototype.Ka=function(){return!1};Ko.prototype.xc=function(){return new uo};Ko.prototype.oa=function(){return this.Jc};
var Lo=function(a,b){b!=a.Bb&&(a.Bb=b,a=Dn(),b?a.A++:0<a.A&&a.A--)},Mo=function(a,b){if(a.ca){if(b.getName()===a.ca.getName())return;a.ca.W();a.ca=null}b=b.create(a.ta.g,a.R,a.Ka());if(b=null!=b&&b.Xc()?b:null)a.ca=b},No=function(a,b,c){if(!a.Ac||-1==a.Bc||-1===b.getTimestamp()||-1===a.Ac.getTimestamp())return 0;a=b.getTimestamp()-a.Ac.getTimestamp();return a>c?0:a};Ko.prototype.he=function(a){return No(this,a,1E4)};
var Oo=function(a,b,c){if(a.ca){a.ca.Ya();var d=a.ca.I,e=d.j,f=e.g;if(null!=d.l){var g=d.h;a.Oc=new Og(g.left-f.left,g.top-f.top)}f=a.Uc()?Math.max(d.g,d.o):d.g;g={};null!==e.volume&&(g.volume=e.volume);e=a.he(d);a.Ac=d;a.Md(f,b,c,!1,g,e,d.A)}},Po=function(a){if(a.Kb&&a.Wb){var b=1==Rl(a.R,"od"),c=Dn().g,d=a.Wb,e=a.ca?a.ca.getName():"ns",f=a.Oc,g=new D(c.getWidth(),c.getHeight());c=a.Uc();a={mg:e,Oc:f,xg:g,Uc:c,Y:a.pa.Y,sg:b};if(b=d.h){b.Ya();e=b.I;f=e.j.g;var h=g=null;null!=e.l&&f&&(g=e.h,g=new Og(g.left-
f.left,g.top-f.top),h=new D(f.right-f.left,f.bottom-f.top));e=c?Math.max(e.g,e.o):e.g;c={mg:b.getName(),Oc:g,xg:h,Uc:c,sg:!1,Y:e}}else c=null;c&&fo(d,a,c)}};l=Ko.prototype;l.Md=function(a,b,c,d,e,f,g){this.Pa||(this.Kb&&(a=this.Zc(a,c,e,g),d=d&&this.pa.Y>=(this.rb()?.3:.5),this.Nd(f,a,d),this.Bc=b,0<a.Y&&-1===this.Ae&&(this.Ae=b),-1==this.Be&&this.Ra()&&(this.Be=b),-2==this.nd&&(this.nd=Eo(this.pb())?a.Y:-1),this.pa=a),this.od(this))};l.Nd=function(a,b,c){this.oa().K(a,b,this.pa,c)};l.hd=function(){return new Bl};
l.Zc=function(a,b,c,d){c=this.hd();c.g=b;b=hm().h;b=0===Wi(Wl)?-1:b.isVisible()?0:1;c.h=b;c.Y=this.dd(a);c.rb=this.rb();c.sa=d;return c};l.dd=function(a){return 0===this.opacity&&1===Rl(this.R,"opac")?0:a};l.rb=function(){return!1};l.Uc=function(){return this.Of||this.Qf};l.wa=function(){return 0};l.Ra=function(){return this.Jc.Ra()};l.je=function(){var a=this.Kb;a=(this.ke||this.ya())&&!a;var b=2!==N().h||this.pg;return this.Pa||b&&a?2:this.Ra()?4:3};l.vc=function(){return 0};
var Qo=function(a,b,c){b&&(a.od=b);c&&(a.Ce=c)};var Ro=function(){};Ro.prototype.next=function(){return So};var So={done:!0,value:void 0};Ro.prototype.xb=function(){return this};var To=function(){this.o=this.g=this.j=this.h=this.l=0},Uo=function(a){var b={};b=(b.ptlt=Date.now()-a.l,b);var c=a.h;c&&(b.pnk=c);(c=a.j)&&(b.pnc=c);(c=a.o)&&(b.pnmm=c);(a=a.g)&&(b.pns=a);return b};var Vo=function(){Bl.call(this);this.fullscreen=!1;this.volume=void 0;this.paused=!1;this.mediaTime=-1};u(Vo,Bl);var Wo=function(a){return vn(a.volume)&&0<a.volume};var Yo=function(a,b,c,d){c=void 0===c?!0:c;d=void 0===d?function(){return!0}:d;return function(e){var f=e[a];if(Array.isArray(f)&&d(e))return Xo(f,b,c)}},Zo=function(a,b){return function(c){return b(c)?c[a]:void 0}},$o=function(a){return function(b){for(var c=0;c<a.length;c++)if(a[c]===b.e||void 0===a[c]&&!b.hasOwnProperty("e"))return!0;return!1}},Xo=function(a,b,c){return void 0===c||c?Ob(a,function(d,e){return Vb(b,e)}):Pb(b,function(d,e,f){return a.slice(0<e?f[e-1]+1:0,d+1).reduce(function(g,h){return g+
h},0)})};var ap=$o([void 0,1,2,3,4,8,16]),bp=$o([void 0,4,8,16]),cp={sv:"sv",v:"v",cb:"cb",e:"e",nas:"nas",msg:"msg","if":"if",sdk:"sdk",p:"p",p0:Zo("p0",bp),p1:Zo("p1",bp),p2:Zo("p2",bp),p3:Zo("p3",bp),cp:"cp",tos:"tos",mtos:"mtos",amtos:"amtos",mtos1:Yo("mtos1",[0,2,4],!1,bp),mtos2:Yo("mtos2",[0,2,4],!1,bp),mtos3:Yo("mtos3",[0,2,4],!1,bp),mcvt:"mcvt",ps:"ps",scs:"scs",bs:"bs",vht:"vht",mut:"mut",a:"a",a0:Zo("a0",bp),a1:Zo("a1",bp),a2:Zo("a2",bp),a3:Zo("a3",bp),ft:"ft",dft:"dft",at:"at",dat:"dat",as:"as",
vpt:"vpt",gmm:"gmm",std:"std",efpf:"efpf",swf:"swf",nio:"nio",px:"px",nnut:"nnut",vmer:"vmer",vmmk:"vmmk",vmiec:"vmiec",nmt:"nmt",tcm:"tcm",bt:"bt",pst:"pst",vpaid:"vpaid",dur:"dur",vmtime:"vmtime",dtos:"dtos",dtoss:"dtoss",dvs:"dvs",dfvs:"dfvs",dvpt:"dvpt",fmf:"fmf",vds:"vds",is:"is",i0:"i0",i1:"i1",i2:"i2",i3:"i3",ic:"ic",cs:"cs",c:"c",c0:Zo("c0",bp),c1:Zo("c1",bp),c2:Zo("c2",bp),c3:Zo("c3",bp),mc:"mc",nc:"nc",mv:"mv",nv:"nv",qmt:Zo("qmtos",ap),qnc:Zo("qnc",ap),qmv:Zo("qmv",ap),qnv:Zo("qnv",ap),
raf:"raf",rafc:"rafc",lte:"lte",ces:"ces",tth:"tth",femt:"femt",femvt:"femvt",emc:"emc",emuc:"emuc",emb:"emb",avms:"avms",nvat:"nvat",qi:"qi",psm:"psm",psv:"psv",psfv:"psfv",psa:"psa",pnk:"pnk",pnc:"pnc",pnmm:"pnmm",pns:"pns",ptlt:"ptlt",pngs:"pings",veid:"veid",ssb:"ssb",ss0:Zo("ss0",bp),ss1:Zo("ss1",bp),ss2:Zo("ss2",bp),ss3:Zo("ss3",bp),dc_rfl:"urlsigs",obd:"obd",omidp:"omidp",omidr:"omidr",omidv:"omidv",omida:"omida",omids:"omids",omidpv:"omidpv",omidam:"omidam",omidct:"omidct",omidia:"omidia",
omiddc:"omiddc",omidlat:"omidlat",omiddit:"omiddit",nopd:"nopd"},dp=Object.assign({},cp,{avid:function(a){return function(){return a}}("audio"),avas:"avas",vs:"vs"}),ep={atos:"atos",avt:Yo("atos",[2]),davs:"davs",dafvs:"dafvs",dav:"dav",ss:function(a,b){return function(c){return void 0===c[a]&&void 0!==b?b:c[a]}}("ss",0),t:"t"};var fp=function(){this.h=this.g=""};var qp=function(){},rp=function(a,b){var c={};if(void 0!==a)if(null!=b)for(var d in b){var e=b[d];d in Object.prototype||null!=e&&(c[d]="function"===typeof e?e(a):a[e])}else zg(c,a);return Xn(Vn(new Tn,c))};var sp=function(){var a={};this.h=(a.vs=[1,0],a.vw=[0,1],a.am=[2,2],a.a=[4,4],a.f=[8,8],a.bm=[16,16],a.b=[32,32],a.avw=[0,64],a.avs=[64,0],a.pv=[256,256],a.gdr=[0,512],a.p=[0,1024],a.r=[0,2048],a.m=[0,4096],a.um=[0,8192],a.ef=[0,16384],a.s=[0,32768],a.pmx=[0,16777216],a.mut=[33554432,33554432],a.umutb=[67108864,67108864],a.tvoff=[134217728,134217728],a);this.g={};for(var b in this.h)0<this.h[b][1]&&(this.g[b]=0);this.j=0};
sp.prototype.reportEvent=function(a){var b=this.h[a],c=b[1];this.j+=b[0];0<c&&0==this.g[a]&&(this.g[a]=1)};var tp=function(a){var b=pg(a.h),c=0,d;for(d in a.g)Vb(b,d)&&1==a.g[d]&&(c+=a.h[d][1],a.g[d]=2);return c},up=function(a){var b=0,c;for(c in a.g){var d=a.g[c];if(1==d||2==d)b+=a.h[c][1]}return b};var vp=function(){this.g=this.h=0};vp.prototype.getValue=function(){return this.h};var wp=function(a,b,c){32<=b||(a.g&1<<b&&!c?a.h&=~(1<<b):a.g&1<<b||!c||(a.h|=1<<b),a.g|=1<<b)};var xp=function(){uo.call(this);this.j=new go;this.V=this.D=this.J=0;this.I=-1;this.ma=new go;this.l=new go;this.g=new jo;this.A=this.o=-1;this.F=new go;this.ha=2E3;this.U=new vp;this.aa=new vp;this.Z=new vp};u(xp,uo);var yp=function(a,b,c){var d=a.V;Lm||c||-1==a.I||(d+=b-a.I);return d};
xp.prototype.K=function(a,b,c,d){if(!b.paused){uo.prototype.K.call(this,a,b,c,d);var e=Wo(b)&&Wo(c),f=.5<=(d?Math.min(b.Y,c.Y):c.Y);vn(b.volume)&&(this.o=-1!=this.o?Math.min(this.o,b.volume):b.volume,this.A=Math.max(this.A,b.volume));f&&(this.J+=a,this.D+=e?a:0);so(this.g,b.Y,c.Y,b.g,a,d,e);ho(this.j,!0,a);ho(this.l,e,a);ho(this.F,c.fullscreen,a);ho(this.ma,e&&!f,a);a=Math.floor(b.mediaTime/1E3);wp(this.U,a,b.isVisible());wp(this.aa,a,1<=b.Y);wp(this.Z,a,Wo(b))}};var zp=function(){this.j=!1};zp.prototype.h=function(a){this.j||(this.g(a)?(a=this.K.report(this.o,a),this.l|=a,a=0==a):a=!1,this.j=a)};var Ap=function(a,b){this.j=!1;this.o=a;this.K=b;this.l=0};u(Ap,zp);Ap.prototype.g=function(){return!0};Ap.prototype.A=function(){return!1};Ap.prototype.getId=function(){var a=this,b=tg(function(c){return c==a.o});return Um[b].toString()};Ap.prototype.toString=function(){var a="";this.A()&&(a+="c");this.j&&(a+="s");0<this.l&&(a+=":"+this.l);return this.getId()+a};var Bp=function(a,b){Ap.call(this,a,b);this.B=[]};u(Bp,Ap);Bp.prototype.h=function(a,b){b=void 0===b?null:b;null!=b&&this.B.push(b);Ap.prototype.h.call(this,a)};var Cp=function(){};var Dp=function(){};u(Dp,Cp);Dp.prototype.h=function(){return null};Dp.prototype.j=function(){return[]};var Ep=function(a,b,c,d){On.call(this,a,b,c,d)};u(Ep,On);l=Ep.prototype;l.bd=function(){if(this.j){var a=this.j,b=this.h.g.j;try{try{var c=tn(a.getBoundingClientRect())}catch(m){c=new F(0,0,0,0)}var d=c.right-c.left,e=c.bottom-c.top,f=en(a,b),g=f.x,h=f.y;var k=new F(Math.round(h),Math.round(g+d),Math.round(h+e),Math.round(g))}catch(m){k=Fi(Co)}this.g=k}};l.ae=function(){this.l=this.h.o.g};l.me=function(a){var b=1==Rl(this.R,"od");return Ho(a,this.l,this.j,b)};l.be=function(){this.timestamp=Mm()};
l.Ya=function(){this.be();this.bd();if(this.j&&"number"===typeof this.j.videoWidth&&"number"===typeof this.j.videoHeight){var a=this.j;var b=new D(a.videoWidth,a.videoHeight);a=this.g;var c=a.getWidth(),d=a.getHeight(),e=b.width;b=b.height;0>=e||0>=b||0>=c||0>=d||(e/=b,a=Fi(a),e>c/d?(c/=e,d=(d-c)/2,0<d&&(d=a.top+d,a.top=Math.round(d),a.bottom=Math.round(d+c))):(d*=e,c=Math.round((c-d)/2),0<c&&(c=a.left+c,a.left=Math.round(c),a.right=Math.round(c+d))));this.g=a}this.ae();a=this.g;c=this.l;a=a.left<=
c.right&&c.left<=a.right&&a.top<=c.bottom&&c.top<=a.bottom?new F(Math.max(a.top,c.top),Math.min(a.right,c.right),Math.min(a.bottom,c.bottom),Math.max(a.left,c.left)):new F(0,0,0,0);c=a.top>=a.bottom||a.left>=a.right?new F(0,0,0,0):a;a=this.h.o;b=e=d=0;0<(this.g.bottom-this.g.top)*(this.g.right-this.g.left)&&(this.me(c)?c=new F(0,0,0,0):(d=Dn().l,b=new F(0,d.height,d.width,0),d=Do(c,this.g),e=Do(c,Dn().g),b=Do(c,b)));c=c.top>=c.bottom||c.left>=c.right?new F(0,0,0,0):Gi(c,-this.g.left,-this.g.top);
En()||(e=d=0);this.I=new Pm(a,this.g,c,d,e,this.timestamp,b)};l.getName=function(){return this.h.getName()};var Fp=new F(0,0,0,0),Gp=function(a,b,c){On.call(this,null,a,b,c);this.B=a.isActive();this.A=0};u(Gp,Ep);l=Gp.prototype;l.Xc=function(){this.o();return!0};l.bb=function(){Ep.prototype.Ya.call(this)};l.be=function(){};l.bd=function(){};l.Ya=function(){this.o();Ep.prototype.Ya.call(this)};l.Ab=function(a){a=a.isActive();a!==this.B&&(a?this.o():(Dn().g=new F(0,0,0,0),this.g=new F(0,0,0,0),this.l=new F(0,0,0,0),this.timestamp=-1));this.B=a};function Hp(a){return[a.top,a.left,a.bottom,a.right]}
var Ip={},Jp=(Ip.firstquartile=0,Ip.midpoint=1,Ip.thirdquartile=2,Ip.complete=3,Ip),Kp=function(a,b,c,d,e,f){f=void 0===f?new Dp:f;Ko.call(this,b,c,d);this.xd=e;this.gd=0;this.ia={};this.fa=new sp;this.De={};this.la="";this.playerId=null;this.Ma=!1;this.g=[];this.Ta=f.h();this.A=f.j();this.l=null;this.j=-1;this.X=this.F=void 0;this.H=this.G=0;this.U=-1;this.ba=this.ha=!1;this.N=this.D=this.h=this.Fb=this.Fa=0;new jo;this.V=this.Z=0;this.aa=-1;this.ka=0;this.B=Yf;this.J=[this.xc()];this.Wa=2;this.wb=
{};this.wb.pause="p";this.wb.resume="r";this.wb.skip="s";this.wb.mute="m";this.wb.unmute="um";this.wb.exitfullscreen="ef";this.o=null;this.ma=this.Ea=!1};u(Kp,Ko);Kp.prototype.Ka=function(){return!0};var Lp=function(a){a.ke=!0;0!=a.ka&&(a.ka=3)},Mp=function(a){return void 0===a?a:Number(a)?on(a,3):0};l=Kp.prototype;l.he=function(a){return No(this,a,Math.max(1E4,this.j/3))};
l.Md=function(a,b,c,d,e,f,g){var h=this,k=this.B(this)||{};zg(k,e);this.j=k.duration||this.j;this.F=k.isVpaid||this.F;this.X=k.isYouTube||this.X;hm();this.ma=!1;e=Np(this,b);1===Op(this)&&(f=e);Ko.prototype.Md.call(this,a,b,c,d,k,f,g);this.Ta&&this.Ta.j&&Mb(this.A,function(m){m.h(h)})};
l.Nd=function(a,b,c){Ko.prototype.Nd.call(this,a,b,c);Pp(this).K(a,b,this.pa,c);this.ba=Wo(this.pa)&&Wo(b);-1==this.U&&this.ha&&(this.U=this.oa().j.g);this.fa.j=0;a=this.Ra();b.isVisible()&&this.fa.reportEvent("vs");a&&this.fa.reportEvent("vw");vn(b.volume)&&this.fa.reportEvent("am");Wo(b)?this.fa.reportEvent("a"):this.fa.reportEvent("mut");this.Bb&&this.fa.reportEvent("f");-1!=b.h&&(this.fa.reportEvent("bm"),1==b.h&&(this.fa.reportEvent("b"),Wo(b)&&this.fa.reportEvent("umutb")));Wo(b)&&b.isVisible()&&
this.fa.reportEvent("avs");this.ba&&a&&this.fa.reportEvent("avw");0<b.Y&&this.fa.reportEvent("pv");Qp(this,this.oa().j.g,!0)&&this.fa.reportEvent("gdr");2E3<=po(this.oa().h,1)&&this.fa.reportEvent("pmx");this.ma&&this.fa.reportEvent("tvoff")};l.xc=function(){return new xp};l.oa=function(){return this.Jc};var Pp=function(a,b){return a.J[null!=b&&b<a.J.length?b:a.J.length-1]};Kp.prototype.hd=function(){return new Vo};
Kp.prototype.Zc=function(a,b,c,d){a=Ko.prototype.Zc.call(this,a,b,c,void 0===d?-1:d);a.fullscreen=this.Bb;a.paused=2==this.ka;a.volume=c.volume;vn(a.volume)||(this.Fa++,b=this.pa,vn(b.volume)&&(a.volume=b.volume));c=c.currentTime;a.mediaTime=void 0!==c&&0<=c?c:-1;return a};
var Op=function(a){var b=!!Rl(N().R,"umt");return a.F||!b&&!a.X?0:1},Np=function(a,b){2==a.ka?b=0:-1==a.Bc?b=0:(b-=a.Bc,b=b>Math.max(1E4,a.j/3)?0:b);var c=a.B(a)||{};c=void 0!==c.currentTime?c.currentTime:a.G;var d=c-a.G,e=0;0<=d?(a.H+=b,a.V+=Math.max(b-d,0),e=Math.min(d,a.H)):a.Z+=Math.abs(d);0!=d&&(a.H=0);-1==a.aa&&0<d&&(a.aa=0<=Km?Mm()-Km:-1);a.G=c;return e};Kp.prototype.dd=function(a){return Dn(),this.Bb?1:Ko.prototype.dd.call(this,a)};Kp.prototype.wa=function(){return 1};
Kp.prototype.getDuration=function(){return this.j};
var Rp=function(a,b){Rb(a.A,function(c){return c.o==b.o})||a.A.push(b)},Sp=function(a){var b=no(a.oa().g,1);return Qp(a,b)},Qp=function(a,b,c){return 15E3<=b?!0:a.ha?(void 0===c?0:c)?!0:0<a.j?b>=a.j/2:0<a.U?b>=a.U:!1:!1},Tp=function(a){var b={},c=Dn();b.insideIframe=c.j;b.unmeasurable=a.Pa;b.position=a.pb();b.exposure=a.pa.Y;b.documentSize=c.o;b.viewportSize=new D(c.g.getWidth(),c.g.getHeight());null!=a.o&&(b.presenceData=a.o);b.screenShare=a.pa.sa;return b},Up=function(a){var b=on(a.pa.Y,2),c=a.fa.j,
d=a.pa,e=Pp(a),f=Mp(e.o),g=Mp(e.A),h=Mp(d.volume),k=on(e.B,2),m=on(e.G,2),n=on(d.Y,2),q=on(e.H,2),r=on(e.N,2);d=on(d.sa,2);a=Fi(a.pb());a.round();e=vo(e,!1);return{wg:b,Pb:c,Kc:f,Gc:g,Hb:h,Lc:k,Hc:m,Y:n,Mc:q,Ic:r,sa:d,position:a,Nc:e}},Wp=function(a,b){Vp(a.g,b,function(){return{wg:0,Pb:void 0,Kc:-1,Gc:-1,Hb:-1,Lc:-1,Hc:-1,Y:-1,Mc:-1,Ic:-1,sa:-1,position:void 0,Nc:[]}});a.g[b]=Up(a)},Vp=function(a,b,c){for(var d=a.length;d<b+1;)a.push(c()),d++},Zp=function(a,b,c){var d=a.De[b];if(null!=d)return d;
d=Xp(a,b);var e=tg(function(f){return f==b});a=Yp(a,d,d,c,Jp[ug[e]]);"fully_viewable_audible_half_duration_impression"==b&&(a.std="csm");return a},$p=function(a,b,c){var d=[b];if(a!=b||c!=b)d.unshift(a),d.push(c);return d},Yp=function(a,b,c,d,e){if(a.Pa)return{"if":0,vs:0};var f=Fi(a.pb());f.round();var g=Dn(),h=N(),k=a.oa(),m=a.ca?a.ca.getName():"ns",n={};n["if"]=g.j?1:void 0;n.sdk=a.l?a.l:void 0;n.t=a.og;n.p=[f.top,f.left,f.bottom,f.right];n.tos=lo(k.h,!1);n.mtos=vo(k);n.mcvt=k.X.j;n.ps=void 0;
n.vht=yp(k,Mm(),2==a.ka);n.mut=k.ma.j;n.a=Mp(a.pa.volume);n.mv=Mp(k.A);n.fs=a.Bb?1:0;n.ft=k.F.g;n.at=k.l.g;n.as=0<k.o?1:0;n.atos=lo(k.g);n.ssb=lo(k.ba,!1);n.amtos=oo(k.g,!1);n.uac=a.Fa;n.vpt=k.j.g;"nio"==m&&(n.nio=1,n.avms="nio");n.gmm="4";n.gdr=Qp(a,k.j.g,!0)?1:0;n.efpf=a.Wa;if("gsv"==m||"nis"==m)f=a.ca,0<f.A&&(n.nnut=f.A);n.tcm=Op(a);n.nmt=a.Z;n.bt=a.V;n.pst=a.aa;n.vpaid=a.F;n.dur=a.j;n.vmtime=a.G;n.is=a.fa.j;1<=a.g.length&&(n.i0=a.g[0].Pb,n.a0=[a.g[0].Hb],n.c0=[a.g[0].Y],n.ss0=[a.g[0].sa],f=a.g[0].position,
n.p0=f?Hp(f):void 0);2<=a.g.length&&(n.i1=a.g[1].Pb,n.a1=$p(a.g[1].Kc,a.g[1].Hb,a.g[1].Gc),n.c1=$p(a.g[1].Lc,a.g[1].Y,a.g[1].Hc),n.ss1=$p(a.g[1].Mc,a.g[1].sa,a.g[1].Ic),f=a.g[1].position,n.p1=f?Hp(f):void 0,n.mtos1=a.g[1].Nc);3<=a.g.length&&(n.i2=a.g[2].Pb,n.a2=$p(a.g[2].Kc,a.g[2].Hb,a.g[2].Gc),n.c2=$p(a.g[2].Lc,a.g[2].Y,a.g[2].Hc),n.ss2=$p(a.g[2].Mc,a.g[2].sa,a.g[2].Ic),f=a.g[2].position,n.p2=f?Hp(f):void 0,n.mtos2=a.g[2].Nc);4<=a.g.length&&(n.i3=a.g[3].Pb,n.a3=$p(a.g[3].Kc,a.g[3].Hb,a.g[3].Gc),
n.c3=$p(a.g[3].Lc,a.g[3].Y,a.g[3].Hc),n.ss3=$p(a.g[3].Mc,a.g[3].sa,a.g[3].Ic),f=a.g[3].position,n.p3=f?Hp(f):void 0,n.mtos3=a.g[3].Nc);n.cs=up(a.fa);b&&(n.ic=tp(a.fa),n.dvpt=k.j.h,n.dvs=qo(k.h,.5),n.dfvs=qo(k.h,1),n.davs=qo(k.g,.5),n.dafvs=qo(k.g,1),c&&(k.j.h=0,ro(k.h),ro(k.g)),a.Ra()&&(n.dtos=k.J,n.dav=k.D,n.dtoss=a.gd+1,c&&(k.J=0,k.D=0,a.gd++)),n.dat=k.l.h,n.dft=k.F.h,c&&(k.l.h=0,k.F.h=0));n.ps=[g.o.width,g.o.height];n.bs=[g.g.getWidth(),g.g.getHeight()];n.scs=[g.l.width,g.l.height];n.dom=g.domain;
a.Fb&&(n.vds=a.Fb);if(0<a.A.length||a.Ta)b=$b(a.A),a.Ta&&b.push(a.Ta),n.pings=Pb(b,function(q){return q.toString()});b=Pb(Ob(a.A,function(q){return q.A()}),function(q){return q.getId()});ac(b);n.ces=b;a.h&&(n.vmer=a.h);a.D&&(n.vmmk=a.D);a.N&&(n.vmiec=a.N);n.avms=a.ca?a.ca.getName():"ns";a.ca&&zg(n,a.ca.ab());d?(n.c=on(a.pa.Y,2),n.ss=on(a.pa.sa,2)):n.tth=Mm()-Jm;n.mc=on(k.G,2);n.nc=on(k.B,2);n.mv=Mp(k.A);n.nv=Mp(k.o);n.lte=on(a.nd,2);d=Pp(a,e);vo(k);n.qmtos=vo(d);n.qnc=on(d.B,2);n.qmv=Mp(d.A);n.qnv=
Mp(d.o);n.qas=0<d.o?1:0;n.qi=a.la;n.avms||(n.avms="geo");n.psm=k.U.g;n.psv=k.U.getValue();n.psfv=k.aa.getValue();n.psa=k.Z.getValue();h=Tl(h.R);h.length&&(n.veid=h);a.o&&zg(n,Uo(a.o));n.avas=a.vc();n.vs=a.je();return n},Xp=function(a,b){if(Vb(Tm,b))return!0;var c=a.ia[b];return void 0!==c?(a.ia[b]=!0,!c):!1};Kp.prototype.je=function(){return this.Pa?2:Sp(this)?5:this.Ra()?4:3};Kp.prototype.vc=function(){return this.Ea?2E3<=this.oa().l.j?4:3:2};var aq=Date.now(),dq=function(){this.g={};var a=E();bq(this,a,document);var b=cq();try{if("1"==b){for(var c=a.parent;c!=a.top;c=c.parent)bq(this,c,c.document);bq(this,a.top,a.top.document)}}catch(d){}},cq=function(){var a=document.documentElement;try{if(!Ih(E().top))return"2";var b=[],c=E(a.ownerDocument);for(a=c;a!=c.top;a=a.parent)if(a.frameElement)b.push(a.frameElement);else break;return b&&0!=b.length?"1":"0"}catch(d){return"2"}},bq=function(a,b,c){Bo(c,"mousedown",function(){return eq(a)},301);
Bo(b,"scroll",function(){return fq(a)},302);Bo(c,"touchmove",function(){return gq(a)},303);Bo(c,"mousemove",function(){return hq(a)},304);Bo(c,"keydown",function(){return iq(a)},305)},eq=function(a){kg(a.g,function(b){1E5<b.j||++b.j})},fq=function(a){kg(a.g,function(b){1E5<b.g||++b.g})},gq=function(a){kg(a.g,function(b){1E5<b.g||++b.g})},iq=function(a){kg(a.g,function(b){1E5<b.h||++b.h})},hq=function(a){kg(a.g,function(b){1E5<b.o||++b.o})};var jq=function(){this.g=[];this.h=[]},kq=function(a,b){return Sb(a.g,function(c){return c.la==b})},lq=function(a,b){return b?Sb(a.g,function(c){return c.ta.ib==b}):null},mq=function(a,b){return Sb(a.h,function(c){return 2==c.wa()&&c.la==b})},oq=function(){var a=nq;return 0==a.g.length?a.h:0==a.h.length?a.g:Zb(a.h,a.g)};jq.prototype.reset=function(){this.g=[];this.h=[]};
var pq=function(a,b){a=1==b.wa()?a.g:a.h;var c=Tb(a,function(d){return d==b});return-1!=c?(a.splice(c,1),b.ca&&b.ca.Xb(),b.W(),!0):!1},qq=function(a){var b=nq;if(pq(b,a)){switch(a.wa()){case 0:var c=function(){return null};case 2:c=function(){return mq(b,a.la)};break;case 1:c=function(){return kq(b,a.la)}}for(var d=c();d;d=c())pq(b,d)}},rq=function(a){var b=nq;a=Ob(a,function(c){return!lq(b,c.ta.ib)});b.g.push.apply(b.g,ha(a))},sq=function(a){var b=[];Mb(a,function(c){Rb(nq.g,function(d){return d.ta.ib===
c.ta.ib&&d.la===c.la})||(nq.g.push(c),b.push(c))})},nq=C(jq);var tq=function(){this.g=this.h=null},uq=function(a,b){if(null==a.h)return!1;var c=function(d,e){b(d,e)};a.g=Sb(a.h,function(d){return null!=d&&d.Sd()});a.g&&(a.g.init(c)?Ln(a.g.g):b(a.g.g.yb(),a.g));return null!=a.g};var wq=function(a){a=vq(a);Pn.call(this,a.length?a[a.length-1]:new Hn(O,0));this.j=a;this.h=null};u(wq,Pn);l=wq.prototype;l.getName=function(){return(this.h?this.h:this.g).getName()};l.ab=function(){return(this.h?this.h:this.g).ab()};l.Oa=function(){return(this.h?this.h:this.g).Oa()};l.init=function(a){var b=!1;Mb(this.j,function(c){c.initialize()&&(b=!0)});b&&(this.o=a,Kn(this.g,this));return b};l.W=function(){Mb(this.j,function(a){a.W()});Pn.prototype.W.call(this)};
l.Sd=function(){return Rb(this.j,function(a){return a.F()})};l.Gb=function(){return Rb(this.j,function(a){return a.F()})};l.Yb=function(a,b,c){return new Ep(a,this.g,b,c)};l.bb=function(a){this.h=a.h};var vq=function(a){if(!a.length)return[];a=Ob(a,function(c){return null!=c&&c.F()});for(var b=1;b<a.length;b++)Kn(a[b-1],a[b]);return a};var xq={threshold:[0,.3,.5,.75,1]},yq=function(a,b,c,d){On.call(this,a,b,c,d);this.D=this.K=this.A=this.B=this.o=null};u(yq,Ep);yq.prototype.Xc=function(){var a=this;this.D||(this.D=Mm());if(Dm(298,function(){return zq(a)}))return!0;Jn(this.h,"msf");return!1};yq.prototype.Xb=function(){if(this.o&&this.j)try{this.o.unobserve(this.j),this.B?(this.B.unobserve(this.j),this.B=null):this.A&&(this.A.disconnect(),this.A=null)}catch(a){}};
var Aq=function(a){return a.o&&a.o.takeRecords?a.o.takeRecords():[]},zq=function(a){if(!a.j)return!1;var b=a.j,c=a.h.g.j,d=N().g.g;a.o=new c.IntersectionObserver(nm(d,function(e){return Bq(a,e)}),xq);d=nm(d,function(){a.o.unobserve(b);a.o.observe(b);Bq(a,Aq(a))});c.ResizeObserver?(a.B=new c.ResizeObserver(d),a.B.observe(b)):c.MutationObserver&&(a.A=new w.MutationObserver(d),a.A.observe(b,{attributes:!0,childList:!0,characterData:!0,subtree:!0}));a.o.observe(b);Bq(a,Aq(a));return!0},Bq=function(a,
b){try{if(b.length){a.K||(a.K=Mm());var c=Cq(b),d=en(a.j,a.h.g.j),e=d.x,f=d.y;a.g=new F(Math.round(f),Math.round(e)+c.boundingClientRect.width,Math.round(f)+c.boundingClientRect.height,Math.round(e));var g=tn(c.intersectionRect);a.l=Gi(g,a.g.left-g.left,a.g.top-g.top)}}catch(h){a.Xb(),Fm(299,h)}},Cq=function(a){return Qb(a,function(b,c){return b.time>c.time?b:c},a[0])};l=yq.prototype;l.Ya=function(){var a=Aq(this);0<a.length&&Bq(this,a);Ep.prototype.Ya.call(this)};l.bd=function(){};l.me=function(){return!1};
l.ae=function(){};l.ab=function(){var a={};return Object.assign(this.h.ab(),(a.niot_obs=this.D,a.niot_cbk=this.K,a))};l.getName=function(){return"nio"};var Dq=function(a){a=void 0===a?O:a;Pn.call(this,new Hn(a,2))};u(Dq,Pn);Dq.prototype.getName=function(){return"nio"};Dq.prototype.Gb=function(){return!Dn().h&&null!=this.g.g.j.IntersectionObserver};Dq.prototype.Yb=function(a,b,c){return new yq(a,this.g,b,c)};var Fq=function(){var a=Eq();Hn.call(this,O.top,a,"geo")};u(Fq,Hn);Fq.prototype.aa=function(){return Dn().g};Fq.prototype.F=function(){var a=Eq();this.K!==a&&(this.g!=this&&a>this.g.K&&(this.g=this,In(this)),this.K=a);return 2==a};var Eq=function(){N();var a=Dn();return a.j||a.h?0:2};var Gq=function(){};var Hq=function(){this.done=!1;this.g={lf:0,Yd:0,wi:0,ee:0,ld:-1,tf:0,sf:0,uf:0,lg:0};this.l=null;this.A=!1;this.j=null;this.B=0;this.h=new Fn(this)},Kq=function(){var a=Iq;a.A||(a.A=!0,Jq(a,function(){return a.o.apply(a,ha(Ia.apply(0,arguments)))}),a.o())};Hq.prototype.sample=function(){Lq(this,oq(),!1)};
var Mq=function(){C(Gq);var a=C(tq);null!=a.g&&a.g.g?Ln(a.g.g):zn(Dn())},Lq=function(a,b,c){if(!a.done&&(a.h.cancel(),0!=b.length)){a.j=null;try{Mq();var d=Mm();N().l=d;if(null!=C(tq).g)for(var e=0;e<b.length;e++)Oo(b[e],d,c);for(d=0;d<b.length;d++)Po(b[d]);++a.g.ee}finally{c?Mb(b,function(f){f.pa.Y=0}):Gn(a.h)}}},Jq=function(a,b){if(!a.l){b=Em(142,b);hm();var c=Xi(Wl);c&&dg(Wl,c,b,{capture:!1})&&(a.l=b)}};
Hq.prototype.o=function(){var a=En(),b=Mm();a?(Lm||(Hm=b,Mb(nq.g,function(c){var d=c.oa();d.V=yp(d,b,1!=c.ka)})),Lm=!0):(this.B=Nq(this,b),Lm=!1,Jm=b,Mb(nq.g,function(c){c.Kb&&(c.oa().I=b)}));Lq(this,oq(),!a)};
var Oq=function(){var a=C(tq);if(null!=a.g){var b=a.g;Mb(oq(),function(c){return Mo(c,b)})}},Nq=function(a,b){a=a.B;Lm&&(a+=b-Hm);return a},Pq=function(a){a=void 0===a?function(){return{}}:a;Am.Hd("av-js");wm.g=.01;Cm([function(b){var c=N(),d={};d=(d.bin=c.h,d.type="error",d);c=Sl(c.R);if(!Iq.j){var e=Iq,f=O.document,g=0<=Im?Mm()-Im:-1,h=Mm();-1==e.g.ld&&(g=h);var k=Dn(),m=N(),n=Sl(m.R),q=oq();try{if(0<q.length){var r=k.g;r&&(n.bs=[r.getWidth(),r.getHeight()]);var v=k.o;v&&(n.ps=[v.width,v.height]);
O.screen&&(n.scs=[O.screen.width,O.screen.height])}else n.url=encodeURIComponent(O.location.href.substring(0,512)),f.referrer&&(n.referrer=encodeURIComponent(f.referrer.substring(0,512)));n.tt=g;n.pt=Im;n.bin=m.h;void 0!==O.google_osd_load_pub_page_exp&&(n.olpp=O.google_osd_load_pub_page_exp);n.deb=[1,e.g.lf,e.g.Yd,e.g.ee,e.g.ld,0,e.h.h,e.g.tf,e.g.sf,e.g.uf,e.g.lg,-1].join(";");n.tvt=Nq(e,h);k.h&&(n.inapp=1);if(null!==O&&O!=O.top){0<q.length&&(n.iframe_loc=encodeURIComponent(O.location.href.substring(0,
512)));var x=k.I;n.is=[x.getWidth(),x.getHeight()]}}catch(S){n.error=1}Iq.j=n}v=Iq.j;r={};for(var H in v)r[H]=v[H];H=N().g;if(1==Rl(H.j,"prf")){v=new lm;x=H.g;e=0;-1<x.g&&(e=x.j.g.now()-x.g);x=x.o+e;if(null!=x&&"number"!==typeof x)throw Error("Value of float/double field must be a number, found "+typeof x+": "+x);v=Se(v,1,x,0);x=H.g;v=Se(v,5,ge(-1<x.g?x.h+1:x.h),0);v=Se(v,2,je(H.h.g.j()),"0");v=Se(v,3,je(H.h.g.h()),"0");H=Se(v,4,je(H.h.g.g()),"0");v={};H=(v.pf=Oc(H.g()),v)}else H={};zg(r,H);zg(b,
d,c,r,a())}])},Iq=C(Hq);var Qq=null,Rq="",Sq=!1,Tq=function(){var a=Qq||O;if(!a)return"";var b=[];if(!a.location||!a.location.href)return"";b.push("url="+encodeURIComponent(a.location.href.substring(0,512)));a.document&&a.document.referrer&&b.push("referrer="+encodeURIComponent(a.document.referrer.substring(0,512)));return b.join("&")};function Uq(){var a="av.default_js_unreleased_RCxx".match(/_(\d{8})_RC\d+$/)||"av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_\d+$/)||"av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+\.\d+$/)||"av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_RC\d+$/),b;if(2==(null==(b=a)?void 0:b.length))return a[1];a="av.default_js_unreleased_RCxx".match(/.*_(\d{2})\.(\d{4})\.\d+_RC\d+$/);var c;return 3==(null==(c=a)?void 0:c.length)?"20"+a[1]+a[2]:null}
var Vq=function(){return"ima_html5_sdk".includes("ima_html5_sdk")?{Ha:"ima",Ia:null}:"ima_html5_sdk".includes("ima_native_sdk")?{Ha:"nima",Ia:null}:"ima_html5_sdk".includes("admob-native-video-javascript")?{Ha:"an",Ia:null}:"av.default_js_unreleased_RCxx".includes("cast_js_sdk")?{Ha:"cast",Ia:Uq()}:"av.default_js_unreleased_RCxx".includes("youtube.player.web")?{Ha:"yw",Ia:Uq()}:"av.default_js_unreleased_RCxx".includes("outstream_web_client")?{Ha:"out",Ia:Uq()}:"av.default_js_unreleased_RCxx".includes("drx_rewarded_web")?
{Ha:"r",Ia:Uq()}:"av.default_js_unreleased_RCxx".includes("gam_native_web_video")?{Ha:"n",Ia:Uq()}:"av.default_js_unreleased_RCxx".includes("admob_interstitial_video")?{Ha:"int",Ia:Uq()}:{Ha:"j",Ia:null}},Wq=Vq().Ha,Xq=Vq().Ia;var Zq=function(a,b){var c={sv:"960"};null!==Xq&&(c.v=Xq);c.cb=Wq;c.nas=nq.g.length;c.msg=a;void 0!==b&&(a=Yq(b))&&(c.e=Um[a]);return c},$q=function(a){return 0==a.lastIndexOf("custom_metric_viewable",0)},Yq=function(a){var b=$q(a)?"custom_metric_viewable":a.toLowerCase();return tg(function(c){return c==b})};var ar={Rg:"visible",Ag:"audible",Oh:"time",Qh:"timetype"},br={visible:function(a){return/^(100|[0-9]{1,2})$/.test(a)},audible:function(a){return"0"==a||"1"==a},timetype:function(a){return"mtos"==a||"tos"==a},time:function(a){return/^(100|[0-9]{1,2})%$/.test(a)||/^([0-9])+ms$/.test(a)}},cr=function(){this.g=void 0;this.h=!1;this.j=0;this.o=-1;this.l="tos"},dr=function(a){try{var b=a.split(",");return b.length>pg(ar).length?null:Qb(b,function(c,d){d=d.toLowerCase().split("=");if(2!=d.length||void 0===
br[d[0]]||!br[d[0]](d[1]))throw Error("Entry ("+d[0]+", "+d[1]+") is invalid.");c[d[0]]=d[1];return c},{})}catch(c){return null}},er=function(a,b){if(void 0==a.g)return 0;switch(a.l){case "mtos":return a.h?po(b.g,a.g):po(b.h,a.g);case "tos":return a.h?no(b.g,a.g):no(b.h,a.g)}return 0};var fr=function(a,b,c,d){Ap.call(this,b,d);this.B=a;this.I=c};u(fr,Ap);fr.prototype.getId=function(){return this.B};fr.prototype.A=function(){return!0};fr.prototype.g=function(a){var b=a.oa(),c=a.getDuration();return Rb(this.I,function(d){if(void 0!=d.g)var e=er(d,b);else b:{switch(d.l){case "mtos":e=d.h?b.l.j:b.j.g;break b;case "tos":e=d.h?b.l.g:b.j.g;break b}e=0}0==e?d=!1:(d=-1!=d.j?d.j:void 0!==c&&0<c?d.o*c:-1,d=-1!=d&&e>=d);return d})};var gr=function(){};u(gr,qp);gr.prototype.g=function(a){var b=new fp;b.g=rp(a,cp);b.h=rp(a,ep);return b};var hr=function(a){Ap.call(this,"fully_viewable_audible_half_duration_impression",a)};u(hr,Ap);hr.prototype.g=function(a){return Sp(a)};var ir=function(a){this.g=a};u(ir,Cp);var jr=function(a,b){Ap.call(this,a,b)};u(jr,Ap);jr.prototype.g=function(a){return a.oa().Ra()};var kr=function(a){Bp.call(this,"measurable_impression",a)};u(kr,Bp);kr.prototype.g=function(a){var b=Vb(this.B,Rl(N().R,"ovms"));return!a.Pa&&(0!=a.ka||b)};var lr=function(){ir.apply(this,arguments)};u(lr,ir);lr.prototype.h=function(){return new kr(this.g)};lr.prototype.j=function(){return[new jr("viewable_impression",this.g),new hr(this.g)]};var mr=function(a,b,c){Gp.call(this,a,b,c)};u(mr,Gp);mr.prototype.o=function(){var a=Ma("ima.admob.getViewability"),b=Rl(this.R,"queryid");"function"===typeof a&&b&&a(b)};mr.prototype.getName=function(){return"gsv"};var nr=function(a){a=void 0===a?O:a;Pn.call(this,new Hn(a,2))};u(nr,Pn);nr.prototype.getName=function(){return"gsv"};nr.prototype.Gb=function(){var a=Dn();N();return a.h&&!1};nr.prototype.Yb=function(a,b,c){return new mr(this.g,b,c)};var or=function(a,b,c){Gp.call(this,a,b,c)};u(or,Gp);or.prototype.o=function(){var a=this,b=Ma("ima.bridge.getNativeViewability"),c=Rl(this.R,"queryid");"function"===typeof b&&c&&b(c,function(d){vg(d)&&a.A++;var e=d.opt_nativeViewVisibleBounds||{},f=d.opt_nativeViewHidden;a.g=un(d.opt_nativeViewBounds||{});var g=a.h.o;g.g=f?Fi(Fp):un(e);a.timestamp=d.opt_nativeTime||-1;Dn().g=g.g;d=d.opt_nativeVolume;void 0!==d&&(g.volume=d)})};or.prototype.getName=function(){return"nis"};var pr=function(a){a=void 0===a?O:a;Pn.call(this,new Hn(a,2))};u(pr,Pn);pr.prototype.getName=function(){return"nis"};pr.prototype.Gb=function(){var a=Dn();N();return a.h&&!1};pr.prototype.Yb=function(a,b,c){return new or(this.g,b,c)};var qr=function(){Hn.call(this,O,2,"mraid");this.ha=0;this.H=this.J=!1;this.I=null;this.h=Vm(this.j);this.o.g=new F(0,0,0,0);this.ba=!1};u(qr,Hn);qr.prototype.F=function(){return null!=this.h.Ba};qr.prototype.Z=function(){var a={};this.ha&&(a.mraid=this.ha);this.J&&(a.mlc=1);a.mtop=this.h.kg;this.I&&(a.mse=this.I);this.ba&&(a.msc=1);a.mcp=this.h.rc;return a};
qr.prototype.A=function(a){var b=Ia.apply(1,arguments);try{return this.h.Ba[a].apply(this.h.Ba,b)}catch(c){Fm(538,c,.01,function(d){d.method=a})}};var rr=function(a,b,c){a.A("addEventListener",b,c)};
qr.prototype.initialize=function(){var a=this;if(this.ua)return!this.Ob();this.ua=!0;if(2===this.h.rc)return this.I="ng",Jn(this,"w"),!1;if(1===this.h.rc)return this.I="mm",Jn(this,"w"),!1;Dn().K=!0;this.j.document.readyState&&"complete"==this.j.document.readyState?sr(this):Bo(this.j,"load",function(){hm().setTimeout(Em(292,function(){return sr(a)}),100)},292);return!0};
var sr=function(a){N().o=!!a.A("isViewable");rr(a,"viewableChange",tr);"loading"===a.A("getState")?rr(a,"ready",ur):vr(a)},vr=function(a){"string"===typeof a.h.Ba.AFMA_LIDAR?(a.J=!0,wr(a)):(a.h.rc=3,a.I="nc",Jn(a,"w"))},wr=function(a){a.H=!1;var b=1==Rl(N().R,"rmmt"),c=!!a.A("isViewable");(b?!c:1)&&hm().setTimeout(Em(524,function(){a.H||(xr(a),Fm(540,Error()),a.I="mt",Jn(a,"w"))}),500);yr(a);rr(a,a.h.Ba.AFMA_LIDAR,zr)},yr=function(a){var b=1==Rl(N().R,"sneio"),c=void 0!==a.h.Ba.AFMA_LIDAR_EXP_1,d=
void 0!==a.h.Ba.AFMA_LIDAR_EXP_2;(b=b&&d)&&(a.h.Ba.AFMA_LIDAR_EXP_2=!0);c&&(a.h.Ba.AFMA_LIDAR_EXP_1=!b)},xr=function(a){a.A("removeEventListener",a.h.Ba.AFMA_LIDAR,zr);a.J=!1};qr.prototype.U=function(){var a=Dn(),b=Ar(this,"getMaxSize");a.g=new F(0,b.width,b.height,0)};qr.prototype.V=function(){Dn().l=Ar(this,"getScreenSize")};
var Ar=function(a,b){if("loading"===a.A("getState"))return new D(-1,-1);b=a.A(b);if(!b)return new D(-1,-1);a=parseInt(b.width,10);b=parseInt(b.height,10);return isNaN(a)||isNaN(b)?new D(-1,-1):new D(a,b)};qr.prototype.W=function(){xr(this);Hn.prototype.W.call(this)};
var ur=function(){try{var a=C(qr);a.A("removeEventListener","ready",ur);vr(a)}catch(b){Fm(541,b)}},zr=function(a,b){try{var c=C(qr);c.H=!0;var d=a?new F(a.y,a.x+a.width,a.y+a.height,a.x):new F(0,0,0,0);var e=Mm(),f=En();var g=new Om(e,f,c);g.g=d;g.volume=b;c.bb(g)}catch(h){Fm(542,h)}},tr=function(a){var b=N(),c=C(qr);a&&!b.o&&(b.o=!0,c.ba=!0,c.I&&Jn(c,"w",!0))};var qm=new function(a,b){this.key=a;this.defaultValue=void 0===b?!1:b;this.valueType="boolean"}("45378663");var Cr=function(){this.j=this.ua=!1;this.g=this.h=null;var a={};this.J=(a.start=this.Lf,a.firstquartile=this.Gf,a.midpoint=this.If,a.thirdquartile=this.Mf,a.complete=this.Df,a.error=this.Ef,a.pause=this.wd,a.resume=this.we,a.skip=this.Kf,a.viewable_impression=this.Ja,a.mute=this.Eb,a.unmute=this.Eb,a.fullscreen=this.Hf,a.exitfullscreen=this.Ff,a.fully_viewable_audible_half_duration_impression=this.Ja,a.measurable_impression=this.Ja,a.abandon=this.wd,a.engagedview=this.Ja,a.impression=this.Ja,a.creativeview=
this.Ja,a.progress=this.Eb,a.custom_metric_viewable=this.Ja,a.bufferstart=this.wd,a.bufferfinish=this.we,a.audio_measurable=this.Ja,a.audio_audible=this.Ja,a);a={};this.U=(a.overlay_resize=this.Jf,a.abandon=this.kd,a.close=this.kd,a.collapse=this.kd,a.overlay_unmeasurable_impression=function(b){return Zp(b,"overlay_unmeasurable_impression",En())},a.overlay_viewable_immediate_impression=function(b){return Zp(b,"overlay_viewable_immediate_impression",En())},a.overlay_unviewable_impression=function(b){return Zp(b,
"overlay_unviewable_impression",En())},a.overlay_viewable_end_of_session_impression=function(b){return Zp(b,"overlay_viewable_end_of_session_impression",En())},a);N().h=3;Br(this)};Cr.prototype.l=function(a){Lo(a,!1);qq(a)};Cr.prototype.I=function(){};var Dr=function(a,b,c,d){a=a.A(null,d,!0,b);a.l=c;rq([a]);return a};
Cr.prototype.A=function(a,b,c,d){var e=this;a=new Kp(O,a,c?b:-1,7,this.ed(),this.de());a.la=d;Pl(a.R);Ql(a.R,"queryid",a.la);a.yd("");Qo(a,function(){return e.H.apply(e,ha(Ia.apply(0,arguments)))},function(){return e.N.apply(e,ha(Ia.apply(0,arguments)))});(d=C(tq).g)&&Mo(a,d);a.ta.ib&&C(Gq);return a};
var Er=function(a,b,c){xl(b);var d=a.g;Mb(b,function(e){var f=Pb(e.j,function(g){var h=dr(g);if(null==h)g=null;else if(g=new cr,null!=h.visible&&(g.g=h.visible/100),null!=h.audible&&(g.h=1==h.audible),null!=h.time){var k="mtos"==h.timetype?"mtos":"tos",m=lb(h.time,"%")?"%":"ms";h=parseInt(h.time,10);"%"==m&&(h/=100);"ms"==m?(g.j=h,g.o=-1):(g.j=-1,g.o=h);g.l=void 0===k?"tos":k}return g});Rb(f,function(g){return null==g})||Rp(c,new fr(e.id,e.g,f,d))})},Fr=function(){var a=[],b=N();a.push(C(Fq));Rl(b.R,
"mvp_lv")&&a.push(C(qr));b=[new nr,new pr];b.push(new wq(a));b.push(new Dq(O));return b},Hr=function(a){if(!a.ua){a.ua=!0;try{var b=Mm(),c=N(),d=Dn();Im=b;c.j=79463069;"o"!==a.h&&(Qq=Vh(O));if(im()){Iq.g.Yd=0;Iq.g.ld=Mm()-b;var e=Fr(),f=C(tq);f.h=e;uq(f,function(){Gr()})?Iq.done||(Oq(),Kn(f.g.g,a),Kq()):d.j?Gr():Kq()}else Sq=!0}catch(g){throw nq.reset(),g;}}},Ir=function(a){Iq.h.cancel();Rq=a;Iq.done=!0},Jr=function(a){if(a.h)return a.h;var b=C(tq).g;if(b)switch(b.getName()){case "nis":a.h="n";break;
case "gsv":a.h="m"}a.h||(a.h="h");return a.h},Kr=function(a,b,c){if(null==a.g)return b.Fb|=4,!1;a=a.g.report(c,b);b.Fb|=a;return 0==a};Cr.prototype.Ab=function(a){switch(a.Oa()){case 0:if(a=C(tq).g)a=a.g,Wb(a.l,this),a.D&&this.Ka()&&Mn(a);Gr();break;case 2:Kq()}};Cr.prototype.bb=function(){};Cr.prototype.Ka=function(){return!1};var Gr=function(){var a=[new Dq(O)],b=C(tq);b.h=a;uq(b,function(){Ir("i")})?Iq.done||(Oq(),Kq()):Ir("i")};
Cr.prototype.N=function(a,b){a.Pa=!0;switch(a.wa()){case 1:Lr(a,b);break;case 2:this.Cd(a)}this.Gd(a)};var Lr=function(a,b){if(!a.Ma){var c=Zp(a,"start",En());c=a.xd.g(c).g;var d={id:"lidarv"};d.r=b;d.sv="960";null!==Xq&&(d.v=Xq);wh(c,function(e,f){return d[e]="mtos"==e||"tos"==e?f:encodeURIComponent(f)});b=Tq();wh(b,function(e,f){return d[e]=encodeURIComponent(f)});b="//pagead2.googlesyndication.com/pagead/gen_204?"+Xn(Vn(new Tn,d));$n(b);a.Ma=!0}};l=Cr.prototype;
l.Lf=function(a){var b=a.B(a);b&&(b=b.volume,a.Ea=vn(b)&&0<b);Wp(a,0);return Zp(a,"start",En())};l.Eb=function(a,b,c){Lq(Iq,[a],!En());return this.Ja(a,b,c)};l.Ja=function(a,b,c){return Zp(a,c,En())};l.Gf=function(a){return Mr(a,"firstquartile",1)};l.If=function(a){a.ha=!0;return Mr(a,"midpoint",2)};l.Mf=function(a){return Mr(a,"thirdquartile",3)};l.Df=function(a){var b=Mr(a,"complete",4);Lp(a);return b};l.Ef=function(a){a.ka=3;return Zp(a,"error",En())};
var Mr=function(a,b,c){Lq(Iq,[a],!En());Wp(a,c);4!=c&&Vp(a.J,c,a.xc);return Zp(a,b,En())};l=Cr.prototype;l.we=function(a,b,c){b=En();2!=a.ka||b||(a.oa().I=Mm());Lq(Iq,[a],!b);2==a.ka&&(a.ka=1);return Zp(a,c,b)};l.Kf=function(a,b){b=this.Eb(a,b||{},"skip");Lp(a);return b};l.Hf=function(a,b){Lo(a,!0);return this.Eb(a,b||{},"fullscreen")};l.Ff=function(a,b){Lo(a,!1);return this.Eb(a,b||{},"exitfullscreen")};
l.wd=function(a,b,c){b=a.oa();b.V=yp(b,Mm(),1!=a.ka);Lq(Iq,[a],!En());1==a.ka&&(a.ka=2);return Zp(a,c,En())};l.Jf=function(a){Lq(Iq,[a],!En());return a.h()};l.kd=function(a){Lq(Iq,[a],!En());this.ue(a);Lp(a);return a.h()};
var Br=function(a){Pq(function(){var b=Nr();null!=a.h&&(b.sdk=a.h);var c=C(tq);null!=c.g&&(b.avms=c.g.getName());return b})},Or=function(a,b,c,d){var e=lq(nq,c);null!==e&&e.la!==b&&(a.l(e),e=null);e||(b=a.A(c,Mm(),!1,b),0==nq.h.length&&(N().j=79463069),sq([b]),e=b,e.l=Jr(a),d&&(e.playerId=d));return e};Cr.prototype.H=function(){};var Qr=function(a,b){b.D=0;for(var c in Qm)null==a[c]&&(b.D|=Qm[c]);Pr(a,"currentTime");Pr(a,"duration")};l=Cr.prototype;l.Cd=function(){};l.ue=function(){};l.Td=function(){};
l.Gd=function(){};l.fd=function(){};l.de=function(){this.g||(this.g=this.fd());return null==this.g||this.j?new Dp:new lr(this.g)};l.ed=function(){return new gr};var Pr=function(a,b){var c=a[b];void 0!==c&&0<c&&(a[b]=Math.floor(1E3*c))},Nr=function(){var a=Dn(),b={},c={},d={};return Object.assign({},(b.sv="960",b),null!==Xq&&(c.v=Xq,c),(d["if"]=a.j?"1":"0",d.nas=String(nq.g.length),d))};var Rr=function(a){Ap.call(this,"audio_audible",a)};u(Rr,Ap);Rr.prototype.g=function(a){return 4==a.vc()};var Sr=function(a){Bp.call(this,"audio_measurable",a)};u(Sr,Bp);Sr.prototype.g=function(a){a=a.vc();return 3==a||4==a};var Tr=function(){ir.apply(this,arguments)};u(Tr,ir);Tr.prototype.h=function(){return new Sr(this.g)};Tr.prototype.j=function(){return[new Rr(this.g)]};var Ur=function(){};u(Ur,qp);Ur.prototype.g=function(a){a&&(28===a.e&&(a=Object.assign({},a,{avas:3})),4===a.vs||5===a.vs)&&(a=Object.assign({},a,{vs:3}));var b=new fp;b.g=rp(a,dp);b.h=rp(a,ep);return b};var Vr=function(a){this.h=a};Vr.prototype.report=function(a,b){var c=this.g(b);if("function"===typeof c){var d={};var e={};d=Object.assign({},null!==Xq&&(d.v=Xq,d),(e.sv="960",e.cb=Wq,e.e=Wr(a),e));e=Zp(b,a,En());zg(d,e);b.De[a]=e;d=2==b.wa()?Zn(d).join("&"):b.xd.g(d).g;try{return c(b.la,d,a),0}catch(f){return 2}}else return 1};var Wr=function(a){var b=$q(a)?"custom_metric_viewable":a;a=tg(function(c){return c==b});return Um[a]};Vr.prototype.g=function(){return Ma(this.h)};var Xr=function(a,b){this.h=a;this.j=b};u(Xr,Vr);Xr.prototype.g=function(a){if(!a.playerId)return Vr.prototype.g.call(this,a);if(this.j[a.playerId])return function(){};Fm(393,Error());return null};var Yr=function(){Cr.call(this);this.D=void 0;this.F=null;this.K=!1;this.o={};this.G=0;this.B="ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED"};u(Yr,Cr);Yr.prototype.I=function(a,b){var c=this,d=C(tq);if(null!=d.g)switch(d.g.getName()){case "nis":var e=Zr(this,a,b);break;case "gsv":e=$r(this,a,b);break;case "exc":e=as(this,a)}e||(b.opt_overlayAdElement?e=void 0:b.opt_adElement&&(e=Or(this,a,b.opt_adElement,b.opt_osdId)));e&&1==e.wa()&&(e.B==Yf&&(e.B=function(f){return c.Td(f)}),bs(this,e,b));return e};
var bs=function(a,b,c){c=c.opt_configurable_tracking_events;null!=a.g&&Array.isArray(c)&&Er(a,c,b)};
Yr.prototype.Td=function(a){a.h=0;a.N=0;if("h"==a.l||"n"==a.l){var b;N();if(a.playerId&&cs(this)){var c=this.o[a.playerId];c?b=function(e){return ds(c,e)}:null!==c&&Fm(379,Error())}else b=Ma("ima.common.getVideoMetadata");if("function"===typeof b)try{var d=b(a.la)}catch(e){a.h|=4}else a.h|=2}else if("b"==a.l)if(b=Ma("ytads.bulleit.getVideoMetadata"),"function"===typeof b)try{d=b(a.la)}catch(e){a.h|=4}else a.h|=2;else if("ml"==a.l)if(b=Ma("ima.common.getVideoMetadata"),"function"===typeof b)try{d=
b(a.la)}catch(e){a.h|=4}else a.h|=2;else a.h|=1;a.h||(void 0===d?a.h|=8:null===d?a.h|=16:vg(d)?a.h|=32:null!=d.errorCode&&(a.N=d.errorCode,a.h|=64));null==d&&(d={});Qr(d,a);vn(d.volume)&&vn(this.D)&&(d.volume*=this.D);return d};var $r=function(a,b,c){var d=kq(nq,b);d||(d=c.opt_nativeTime||-1,d=Dr(a,b,Jr(a),d),c.opt_osdId&&(d.playerId=c.opt_osdId));return d},Zr=function(a,b,c){var d=kq(nq,b);d||(d=Dr(a,b,"n",c.opt_nativeTime||-1));return d},as=function(a,b){var c=kq(nq,b);c||(c=Dr(a,b,"h",-1));return c};
Yr.prototype.fd=function(){if(cs(this))return new Xr("ima.common.triggerExternalActivityEvent",this.o);var a=es(this);return null!=a?new Vr(a):null};var es=function(a){N();switch(Jr(a)){case "b":return"ytads.bulleit.triggerExternalActivityEvent";case "n":return"ima.bridge.triggerExternalActivityEvent";case "h":case "m":case "ml":return"ima.common.triggerExternalActivityEvent"}return null};Yr.prototype.Cd=function(a){!a.g&&a.Pa&&Kr(this,a,"overlay_unmeasurable_impression")&&(a.g=!0)};
Yr.prototype.ue=function(a){a.xe&&(a.Ra()?Kr(this,a,"overlay_viewable_end_of_session_impression"):Kr(this,a,"overlay_unviewable_impression"),a.xe=!1)};
var fs=function(a,b,c,d){c=void 0===c?{}:c;var e={};zg(e,{opt_adElement:void 0,opt_fullscreen:void 0},c);var f=a.I(b,c);c=f?f.xd:a.ed();if(e.opt_bounds)return c.g(Zq("ol",d));if(void 0!==d)if(void 0!==Yq(d))if(Sq)a=Zq("ue",d);else if(Hr(a),"i"==Rq)a=Zq("i",d),a["if"]=0;else if(b=a.I(b,e)){b:{"i"==Rq&&(b.Pa=!0,a.Gd(b));f=e.opt_fullscreen;void 0!==f&&Lo(b,!!f);var g;if(f=!Dn().h&&!yn())hm(),f=0===Wi(Wl);if(g=f){switch(b.wa()){case 1:Lr(b,"pv");break;case 2:a.Cd(b)}Ir("pv")}f=d.toLowerCase();if(g=!g)c:{if(Rl(N().R,
"ssmol")&&(g=a.j,"loaded"===f))break c;g=Vb(Rm,f)}if(g&&0==b.ka){"i"!=Rq&&(Iq.done=!1);g=void 0!==e?e.opt_nativeTime:void 0;Km=g="number"===typeof g?g:Mm();b.Kb=!0;var h=En();b.ka=1;b.ia={};b.ia.start=!1;b.ia.firstquartile=!1;b.ia.midpoint=!1;b.ia.thirdquartile=!1;b.ia.complete=!1;b.ia.resume=!1;b.ia.pause=!1;b.ia.skip=!1;b.ia.mute=!1;b.ia.unmute=!1;b.ia.viewable_impression=!1;b.ia.measurable_impression=!1;b.ia.fully_viewable_audible_half_duration_impression=!1;b.ia.fullscreen=!1;b.ia.exitfullscreen=
!1;b.gd=0;h||(b.oa().I=g);Lq(Iq,[b],!h)}(g=b.wb[f])&&b.fa.reportEvent(g);Rl(N().R,"fmd")||Vb(Sm,f)&&b.Ta&&b.Ta.h(b,null);switch(b.wa()){case 1:var k=$q(f)?a.J.custom_metric_viewable:a.J[f];break;case 2:k=a.U[f]}if(k&&(d=k.call(a,b,e,d),Rl(N().R,"fmd")&&Vb(Sm,f)&&b.Ta&&b.Ta.h(b,null),void 0!==d)){e=Zq(void 0,f);zg(e,d);d=e;break b}d=void 0}3==b.ka&&a.l(b);a=d}else a=Zq("nf",d);else a=void 0;else Sq?a=Zq("ue"):f?(a=Zq(),zg(a,Yp(f,!0,!1,!1))):a=Zq("nf");return"string"===typeof a?c.g():c.g(a)};
Yr.prototype.H=function(a){this.j&&1==a.wa()&&gs(this,a)};Yr.prototype.Gd=function(a){this.j&&1==a.wa()&&gs(this,a)};var gs=function(a,b){var c;if(b.playerId&&cs(a)){var d=a.o[b.playerId];d?c=function(f,g){hs(d,f,g)}:null!==d&&Fm(379,Error())}else c=Ma("ima.common.triggerViewabilityMeasurementUpdate");if("function"===typeof c){var e=Tp(b);e.nativeVolume=a.D;c(b.la,e)}},is=function(a,b,c){a.o[b]=c},cs=function(a){return(N(),"h"!=Jr(a)&&"m"!=Jr(a))?!1:0!=a.G};
Yr.prototype.A=function(a,b,c,d){if(rm()){var e=Rl(N().R,"mm"),f={};(e=(f[Al.Ge]="ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO",f[Al.kf]="ACTIVE_VIEW_TRAFFIC_TYPE_VIDEO",f)[e])&&e&&(this.B=e);"ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED"===this.B&&Fm(1044,Error())}a=Cr.prototype.A.call(this,a,b,c,d);this.K&&(b=this.F,null==a.o&&(a.o=new To),b.g[a.la]=a.o,a.o.l=aq);return a};Yr.prototype.l=function(a){a&&1==a.wa()&&this.K&&delete this.F.g[a.la];return Cr.prototype.l.call(this,a)};
Yr.prototype.de=function(){this.g||(this.g=this.fd());return null==this.g||this.j?new Dp:"ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO"===this.B?new Tr(this.g):new lr(this.g)};Yr.prototype.ed=function(){return"ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO"===this.B?new Ur:new gr};var js=function(a){var b={};return b.viewability=a.g,b.googleViewability=a.h,b},ks=function(a,b,c){c=void 0===c?{}:c;a=fs(C(Yr),b,c,a);return js(a)},ls=Em(193,ks,void 0,Nr);y("Goog_AdSense_Lidar_sendVastEvent",ls);
var ms=Em(194,function(a,b){b=void 0===b?{}:b;a=fs(C(Yr),a,b);return js(a)});y("Goog_AdSense_Lidar_getViewability",ms);var ns=Em(195,function(){return jm()});y("Goog_AdSense_Lidar_getUrlSignalsArray",ns);var os=Em(196,function(){return JSON.stringify(jm())});y("Goog_AdSense_Lidar_getUrlSignalsList",os);w.console&&"function"===typeof w.console.log&&Za(w.console.log,w.console);var ps=function(a){for(var b=[],c=a=E(a.ownerDocument);c!=a.top;c=c.parent)if(c.frameElement)b.push(c.frameElement);else break;return b};var qs=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.h=!1};qs.prototype.stopPropagation=function(){this.h=!0};qs.prototype.preventDefault=function(){this.defaultPrevented=!0};var rs=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{var c=function(){};w.addEventListener("test",c,b);w.removeEventListener("test",c,b)}catch(d){}return a}();var ts=function(a,b){qs.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.g=null;a&&this.init(a,b)};bb(ts,qs);var us={2:"touch",3:"pen",4:"mouse"};
ts.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;(b=a.relatedTarget)?lc&&(fc(b,"nodeName")||(b=null)):"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?
a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:us[a.pointerType]||"";this.state=a.state;this.g=a;a.defaultPrevented&&ts.Da.preventDefault.call(this)};
ts.prototype.stopPropagation=function(){ts.Da.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};ts.prototype.preventDefault=function(){ts.Da.preventDefault.call(this);var a=this.g;a.preventDefault?a.preventDefault():a.returnValue=!1};var vs="closure_listenable_"+(1E6*Math.random()|0),ws=function(a){return!(!a||!a[vs])};var xs=0;var ys=function(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.yc=e;this.key=++xs;this.Ub=this.hc=!1},zs=function(a){a.Ub=!0;a.listener=null;a.proxy=null;a.src=null;a.yc=null};var As=function(a){this.src=a;this.g={};this.h=0};As.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.g[f];a||(a=this.g[f]=[],this.h++);var g=Bs(a,b,d,e);-1<g?(b=a[g],c||(b.hc=!1)):(b=new ys(b,this.src,f,!!d,e),b.hc=c,a.push(b));return b};As.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.g))return!1;var e=this.g[a];b=Bs(e,b,c,d);return-1<b?(zs(e[b]),Xb(e,b),0==e.length&&(delete this.g[a],this.h--),!0):!1};
var Cs=function(a,b){var c=b.type;c in a.g&&Wb(a.g[c],b)&&(zs(b),0==a.g[c].length&&(delete a.g[c],a.h--))};As.prototype.Mb=function(a,b,c,d){a=this.g[a.toString()];var e=-1;a&&(e=Bs(a,b,c,d));return-1<e?a[e]:null};var Bs=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ub&&f.listener==b&&f.capture==!!c&&f.yc==d)return e}return-1};var Ds="closure_lm_"+(1E6*Math.random()|0),Es={},Fs=0,Hs=function(a,b,c,d,e){if(d&&d.once)return Gs(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)Hs(a,b[f],c,d,e);return null}c=Is(c);return ws(a)?a.O(b,c,Qa(d)?!!d.capture:!!d,e):Js(a,b,c,!1,d,e)},Js=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Ks(a);h||(a[Ds]=h=new As(a));c=h.add(b,c,d,g,f);if(c.proxy)return c;d=Ls();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)rs||(e=g),void 0===
e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ms(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Fs++;return c},Ls=function(){var a=Ns,b=function(c){return a.call(b.src,b.listener,c)};return b},Gs=function(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)Gs(a,b[f],c,d,e);return null}c=Is(c);return ws(a)?a.Qb(b,c,Qa(d)?!!d.capture:!!d,e):Js(a,b,c,!0,d,e)},Os=
function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Os(a,b[f],c,d,e);else d=Qa(d)?!!d.capture:!!d,c=Is(c),ws(a)?a.vb(b,c,d,e):a&&(a=Ks(a))&&(b=a.Mb(b,c,d,e))&&Ps(b)},Ps=function(a){if("number"!==typeof a&&a&&!a.Ub){var b=a.src;if(ws(b))Cs(b.o,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ms(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Fs--;(c=Ks(b))?(Cs(c,a),0==c.h&&(c.src=null,b[Ds]=null)):zs(a)}}},
Ms=function(a){return a in Es?Es[a]:Es[a]="on"+a},Ns=function(a,b){if(a.Ub)a=!0;else{b=new ts(b,this);var c=a.listener,d=a.yc||a.src;a.hc&&Ps(a);a=c.call(d,b)}return a},Ks=function(a){a=a[Ds];return a instanceof As?a:null},Qs="__closure_events_fn_"+(1E9*Math.random()>>>0),Is=function(a){if("function"===typeof a)return a;a[Qs]||(a[Qs]=function(b){return a.handleEvent(b)});return a[Qs]};var Q=function(){P.call(this);this.o=new As(this);this.ac=this;this.ha=null};bb(Q,P);Q.prototype[vs]=!0;l=Q.prototype;l.addEventListener=function(a,b,c,d){Hs(this,a,b,c,d)};l.removeEventListener=function(a,b,c,d){Os(this,a,b,c,d)};
l.dispatchEvent=function(a){var b,c=this.ha;if(c)for(b=[];c;c=c.ha)b.push(c);c=this.ac;var d=a.type||a;if("string"===typeof a)a=new qs(a,c);else if(a instanceof qs)a.target=a.target||c;else{var e=a;a=new qs(d,c);zg(a,e)}e=!0;if(b)for(var f=b.length-1;!a.h&&0<=f;f--){var g=a.currentTarget=b[f];e=Rs(g,d,!0,a)&&e}a.h||(g=a.currentTarget=c,e=Rs(g,d,!0,a)&&e,a.h||(e=Rs(g,d,!1,a)&&e));if(b)for(f=0;!a.h&&f<b.length;f++)g=a.currentTarget=b[f],e=Rs(g,d,!1,a)&&e;return e};
l.L=function(){Q.Da.L.call(this);if(this.o){var a=this.o,b=0,c;for(c in a.g){for(var d=a.g[c],e=0;e<d.length;e++)++b,zs(d[e]);delete a.g[c];a.h--}}this.ha=null};l.O=function(a,b,c,d){return this.o.add(String(a),b,!1,c,d)};l.Qb=function(a,b,c,d){return this.o.add(String(a),b,!0,c,d)};l.vb=function(a,b,c,d){this.o.remove(String(a),b,c,d)};
var Rs=function(a,b,c,d){b=a.o.g[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ub&&g.capture==c){var h=g.listener,k=g.yc||g.src;g.hc&&Cs(a.o,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented};Q.prototype.Mb=function(a,b,c,d){return this.o.Mb(String(a),b,c,d)};var Ss=function(a,b){this.j=a;this.o=b;this.h=0;this.g=null};Ss.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.j();return a};var Ts=function(a,b){a.o(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)};var Us,Vs=function(){var a=w.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!z("Presto")&&(a=function(){var e=gh(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Za(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},
this);f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&!Bb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ce;c.ce=null;e()}};return function(e){d.next={ce:e};d=d.next;b.port2.postMessage(0)}}return function(e){w.setTimeout(e,0)}};var Ws=function(){this.h=this.g=null};Ws.prototype.add=function(a,b){var c=Xs.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};Ws.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};var Xs=new Ss(function(){return new Ys},function(a){return a.reset()}),Ys=function(){this.next=this.g=this.h=null};Ys.prototype.set=function(a,b){this.h=a;this.g=b;this.next=null};Ys.prototype.reset=function(){this.next=this.g=this.h=null};var Zs,$s=!1,at=new Ws,ct=function(a,b){Zs||bt();$s||(Zs(),$s=!0);at.add(a,b)},bt=function(){if(w.Promise&&w.Promise.resolve){var a=w.Promise.resolve(void 0);Zs=function(){a.then(dt)}}else Zs=function(){var b=dt;"function"!==typeof w.setImmediate||w.Window&&w.Window.prototype&&(zb()||!z("Edge"))&&w.Window.prototype.setImmediate==w.setImmediate?(Us||(Us=Vs()),Us(b)):w.setImmediate(b)}},dt=function(){for(var a;a=at.remove();){try{a.h.call(a.g)}catch(b){kb(b)}Ts(Xs,a)}$s=!1};var et=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var gt=function(a){this.g=0;this.B=void 0;this.o=this.h=this.j=null;this.l=this.A=!1;if(a!=Yf)try{var b=this;a.call(void 0,function(c){ft(b,2,c)},function(c){ft(b,3,c)})}catch(c){ft(this,3,c)}},ht=function(){this.next=this.context=this.h=this.j=this.g=null;this.o=!1};ht.prototype.reset=function(){this.context=this.h=this.j=this.g=null;this.o=!1};var it=new Ss(function(){return new ht},function(a){a.reset()}),jt=function(a,b,c){var d=it.get();d.j=a;d.h=b;d.context=c;return d};
gt.prototype.then=function(a,b,c){return kt(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};gt.prototype.$goog_Thenable=!0;gt.prototype.I=function(a,b){return kt(this,null,a,b)};gt.prototype.catch=gt.prototype.I;gt.prototype.cancel=function(a){if(0==this.g){var b=new lt(a);ct(function(){mt(this,b)},this)}};
var mt=function(a,b){if(0==a.g)if(a.j){var c=a.j;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.o||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?mt(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):nt(c),ot(c,e,3,b)))}a.j=null}else ft(a,3,b)},qt=function(a,b){a.h||2!=a.g&&3!=a.g||pt(a);a.o?a.o.next=b:a.h=b;a.o=b},kt=function(a,b,c,d){var e=jt(null,null,null);e.g=new gt(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;e.h=c?function(h){try{var k=c.call(d,
h);void 0===k&&h instanceof lt?g(h):f(k)}catch(m){g(m)}}:g});e.g.j=a;qt(a,e);return e.g};gt.prototype.D=function(a){this.g=0;ft(this,2,a)};gt.prototype.F=function(a){this.g=0;ft(this,3,a)};
var ft=function(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.D,f=a.F;if(d instanceof gt){qt(d,jt(e||Yf,f||null,a));var g=!0}else if(et(d))d.then(e,f,a),g=!0;else{if(Qa(d))try{var h=d.then;if("function"===typeof h){rt(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.B=c,a.g=b,a.j=null,pt(a),3!=b||c instanceof lt||tt(a,c))}},rt=function(a,b,c,d,e){var f=!1,g=function(k){f||(f=!0,c.call(e,k))},h=function(k){f||(f=!0,d.call(e,
k))};try{b.call(a,g,h)}catch(k){h(k)}},pt=function(a){a.A||(a.A=!0,ct(a.K,a))},nt=function(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.o=null);return b};gt.prototype.K=function(){for(var a;a=nt(this);)ot(this,a,this.g,this.B);this.A=!1};
var ot=function(a,b,c,d){if(3==c&&b.h&&!b.o)for(;a&&a.l;a=a.j)a.l=!1;if(b.g)b.g.j=null,ut(b,c,d);else try{b.o?b.j.call(b.context):ut(b,c,d)}catch(e){vt.call(null,e)}Ts(it,b)},ut=function(a,b,c){2==b?a.j.call(a.context,c):a.h&&a.h.call(a.context,c)},tt=function(a,b){a.l=!0;ct(function(){a.l&&vt.call(null,b)})},vt=kb,lt=function(a){db.call(this,a)};bb(lt,db);lt.prototype.name="cancel";var wt=function(a,b){Q.call(this);this.h=a||1;this.g=b||w;this.j=Za(this.ng,this);this.l=Date.now()};bb(wt,Q);l=wt.prototype;l.enabled=!1;l.La=null;l.ng=function(){if(this.enabled){var a=Date.now()-this.l;0<a&&a<.8*this.h?this.La=this.g.setTimeout(this.j,this.h-a):(this.La&&(this.g.clearTimeout(this.La),this.La=null),this.dispatchEvent("tick"),this.enabled&&(this.stop(),this.start()))}};l.start=function(){this.enabled=!0;this.La||(this.La=this.g.setTimeout(this.j,this.h),this.l=Date.now())};
l.stop=function(){this.enabled=!1;this.La&&(this.g.clearTimeout(this.La),this.La=null)};l.L=function(){wt.Da.L.call(this);this.stop();delete this.g};
var xt=function(a,b,c){if("function"===typeof a)c&&(a=Za(a,c));else if(a&&"function"==typeof a.handleEvent)a=Za(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:w.setTimeout(a,b||0)},yt=function(a){var b=null;return(new gt(function(c,d){b=xt(function(){c("0")},a);-1==b&&d(Error("Failed to schedule timer."))})).I(function(c){w.clearTimeout(b);throw c;})};var zt=function(){return Math.round(Date.now()/1E3)};var At=function(){this.g={};return this};At.prototype.remove=function(a){var b=this.g;a in b&&delete b[a]};At.prototype.set=function(a,b){this.g[a]=b};var Bt=function(a,b){a.g.eb=xg(a.g,"eb",0)|b};At.prototype.get=function(a){return xg(this.g,a,null)};var Ct=null,Dt=function(){this.g={};this.h=0},Et=function(){Ct||(Ct=new Dt);return Ct},Ft=function(a,b){a.g[b.getName()]=b},Gt=function(a,b){this.o=a;this.j=!0;this.g=b};Gt.prototype.getName=function(){return this.o};Gt.prototype.getValue=function(){return this.g};Gt.prototype.h=function(){return String(this.g)};var Ht=function(a,b){Gt.call(this,String(a),b);this.l=a;this.g=!!b};u(Ht,Gt);Ht.prototype.h=function(){return this.g?"1":"0"};var It=function(a,b){Gt.call(this,a,b)};u(It,Gt);
It.prototype.h=function(){return this.g?Math.round(this.g.top)+"."+Math.round(this.g.left)+"."+(Math.round(this.g.top)+Math.round(this.g.height))+"."+(Math.round(this.g.left)+Math.round(this.g.width)):""};var Jt=function(a){if(a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)){a=a.split(".");var b=Number(a[0]),c=Number(a[1]);return new It("",new Hi(c,b,Number(a[3])-c,Number(a[2])-b))}return new It("",new Hi(0,0,0,0))};var Kt=function(a){var b=new Hi(-Number.MAX_VALUE/2,-Number.MAX_VALUE/2,Number.MAX_VALUE,Number.MAX_VALUE),c=new Hi(0,0,0,0);if(!a||0==a.length)return c;for(var d=0;d<a.length;d++){a:{var e=b;var f=a[d],g=Math.max(e.left,f.left),h=Math.min(e.left+e.width,f.left+f.width);if(g<=h){var k=Math.max(e.top,f.top);f=Math.min(e.top+e.height,f.top+f.height);if(k<=f){e.left=g;e.top=k;e.width=h-g;e.height=f-k;e=!0;break a}}e=!1}if(!e)return c}return b},Lt=function(a,b){var c=a.getBoundingClientRect();a=en(a,
b);return new Hi(Math.round(a.x),Math.round(a.y),Math.round(c.right-c.left),Math.round(c.bottom-c.top))},Mt=function(a,b,c){if(b&&c){a:{var d=Math.max(b.left,c.left);var e=Math.min(b.left+b.width,c.left+c.width);if(d<=e){var f=Math.max(b.top,c.top),g=Math.min(b.top+b.height,c.top+c.height);if(f<=g){d=new Hi(d,f,e-d,g-f);break a}}d=null}e=d?d.height*d.width:0;f=d?b.height*b.width:0;d=d&&f?Math.round(e/f*100):0;Ft(a,new Gt("vp",d));d&&0<d?(e=Ii(b),f=Ii(c),e=e.top>=f.top&&e.top<f.bottom):e=!1;Ft(a,new Ht(512,
e));d&&0<d?(e=Ii(b),f=Ii(c),e=e.bottom<=f.bottom&&e.bottom>f.top):e=!1;Ft(a,new Ht(1024,e));d&&0<d?(e=Ii(b),f=Ii(c),e=e.left>=f.left&&e.left<f.right):e=!1;Ft(a,new Ht(2048,e));d&&0<d?(b=Ii(b),c=Ii(c),c=b.right<=c.right&&b.right>c.left):c=!1;Ft(a,new Ht(4096,c))}};var Nt=function(a,b){var c=0;qg(E(),"ima","video","client","tagged")&&(c=1);var d=null;a&&(d=a());if(d){a=Et();a.g={};var e=new Ht(32,!0);e.j=!1;Ft(a,e);e=E().document;e=e.visibilityState||e.webkitVisibilityState||e.mozVisibilityState||e.msVisibilityState||"";Ft(a,new Ht(64,"hidden"!=e.toLowerCase().substring(e.length-6)?!0:!1));try{var f=E().top;try{var g=!!f.location.href||""===f.location.href}catch(n){g=!1}if(g){var h=ps(d);var k=h&&0!=h.length?"1":"0"}else k="2"}catch(n){k="2"}Ft(a,new Ht(256,
"2"==k));Ft(a,new Ht(128,"1"==k));h=g=E().top;"2"==k&&(h=E());f=Lt(d,h);Ft(a,new It("er",f));try{var m=h.document&&!h.document.body?null:eh(h||window)}catch(n){m=null}m?(h=fh($g(h.document).g),Ft(a,new Ht(16384,!!h)),m=h?new Hi(h.x,h.y,m.width,m.height):null):m=null;Ft(a,new It("vi",m));if(m&&"1"==k){k=ps(d);d=[];for(h=0;h<k.length;h++)(e=Lt(k[h],g))&&d.push(e);d.push(m);m=Kt(d)}Mt(a,f,m);a.h&&Ft(a,new Gt("ts",zt()-a.h));a.h=zt()}else a=Et(),a.g={},a.h=zt(),Ft(a,new Ht(32,!1));this.j=a;this.g=new At;
this.g.set("ve",4);c&&Bt(this.g,1);qg(E(),"ima","video","client","crossdomainTag")&&Bt(this.g,4);qg(E(),"ima","video","client","sdkTag")&&Bt(this.g,8);qg(E(),"ima","video","client","jsTag")&&Bt(this.g,2);b&&xg(b,"fullscreen",!1)&&Bt(this.g,16);this.h=b=null;if(c&&(c=qg(E(),"ima","video","client"),c.getEData)){this.h=c.getEData();if(c=qg(E(),"ima","video","client","getLastSnapshotFromTop"))if(a=c())this.h.extendWithDataFromTopIframe(a.tagstamp,a.playstamp,a.lactstamp),c=this.j,b=a.er,a=a.vi,b&&a&&
(b=Jt(b).getValue(),a=Jt(a).getValue(),k=null,xg(c.g,"er",null)&&(k=xg(c.g,"er",null).getValue(),k.top+=b.top,k.left+=b.left,Ft(c,new It("er",k))),xg(c.g,"vi",null)&&(m=xg(c.g,"vi",null).getValue(),m.top+=b.top,m.left+=b.left,d=[],d.push(m),d.push(b),d.push(a),b=Kt(d),Mt(c,k,b),Ft(c,new It("vi",a))));a:{if(this.h){if(this.h.getTagLoadTimestamp){b=this.h.getTagLoadTimestamp();break a}if(this.h.getTimeSinceTagLoadSeconds){b=this.h.getTimeSinceTagLoadSeconds();break a}}b=null}}c=this.g;a=window.performance&&
window.performance.timing&&window.performance.timing.domLoading&&0<window.performance.timing.domLoading?Math.round(window.performance.timing.domLoading/1E3):null;c.set.call(c,"td",zt()-(null!=a?a:null!=b?b:zt()))};var Ot=new wt(200),Pt=function(a,b){try{var c=new Nt(a,b);a=[];var d=Number(c.g.get("eb"));c.g.remove("eb");var e,f=c.g;b=[];for(var g in f.g)b.push(g+f.g[g]);(e=b.join("_"))&&a.push(e);if(c.h){var h=c.h.serialize();h&&a.push(h)}var k,m=c.j;e=d;f=[];e||(e=0);for(var n in m.g){var q=m.g[n];if(q instanceof Ht)q.getValue()&&(e|=q.l);else{var r=m.g[n],v=r.j?r.h():"";v&&f.push(n+v)}}f.push("eb"+String(e));(k=f.join("_"))&&a.push(k);c.g.set("eb",d);return a.join("_")}catch(x){return"tle;"+Qg(x.name,12)+
";"+Qg(x.message,40)}},Qt=function(a,b){Hs(Ot,"tick",function(){var c=Pt(b);a(c)});Ot.start();Ot.dispatchEvent("tick")};var Rt=function(a){this.M=A(a)};u(Rt,B);Rt.prototype.getId=function(){return hf(this,1)};var St=[0,Nf];var Tt=function(a){this.M=A(a)};u(Tt,B);Tt.prototype.getWidth=function(){return ef(this,1)};Tt.prototype.getHeight=function(){return ef(this,2)};var Ut=[0,Kf,-1];var Vt=function(a){this.M=A(a)};u(Vt,B);var Wt=[0,Hf,Mf];var Xt=function(a){this.M=A(a)};u(Xt,B);Xt.prototype.getAdId=function(){return hf(this,1)};Xt.prototype.getSize=function(){return Ve(this,Tt,7)};Xt.prototype.Nb=function(){return Ve(this,Vt,9)};Xt.ga=[4];var Yt=[0,Nf,Hf,Nf,Of,Qf,St,Ut,Hf,Wt];var Zt=function(a){this.M=A(a)};u(Zt,B);var $t=function(a,b){return Le(a,1,de(b))},au=function(a,b){return lf(a,4,b)},bu=function(a,b){return Le(a,2,ge(b))},cu=[0,Qf,Kf,Nf,Mf];var du=function(a){this.M=A(a)};u(du,B);var eu=function(a,b){return mf(a,1,b)},fu=function(a,b){$e(a,3,Xt,b);return a},gu=function(a,b){return Le(a,4,de(b))};du.ga=[10,3];var hu=[0,Nf,Hf,Pf,Yt,Qf,cu,Mf,Qf,2,Of];var iu=function(a){this.M=A(a)};u(iu,B);var ju=[0,Qf,Mf];var ku=function(a){this.M=A(a)};u(ku,B);var lu=function(a,b){return $e(a,2,du,b)},mu=function(a,b){Ye(a,5,b)};ku.ga=[2];var nu=[0,Qf,Pf,hu,Qf,Nf,cu,Nf,Mf,Kf,ju];var ou=function(a){this.M=A(a)};u(ou,B);var pu=function(a){var b=new ku;b=Le(b,1,de(1));return $e(a,1,ku,b)};ou.ga=[1];ou.prototype.g=Rf([0,Pf,nu]);var qu=function(a){this.M=A(a)};u(qu,B);qu.ga=[6,4];var ru=function(a){this.M=A(a)};u(ru,B);var tu=Tf(ru);ru.ga=[4,5,6];var uu=function(a){this.M=A(a)};u(uu,B);var vu=function(a){var b=new uu;return Le(b,1,de(a))},wu=[0,Qf];var xu=function(a){this.M=A(a)};u(xu,B);var yu=function(a){var b=new xu;return mf(b,1,a)},zu=function(a){var b=window.Date.now();b=Number.isFinite(b)?Math.round(b):0;return Le(a,3,je(b))};xu.prototype.getError=function(){return Ve(this,uu,10)};xu.prototype.jb=function(a){return Ye(this,10,a)};var Au=Tf(xu),Bu=[0,Nf,-1,Hf,Kf,-2,Hf,Gf,Mf,wu,Mf];var Cu=[0,1,[0,Jf,-2],-1,Nf,-1,Mf,[0,3,Qf,Nf],Hf];var Du=function(a){this.M=A(a)};u(Du,B);Du.ga=[1,2];Du.prototype.g=Rf([0,Pf,Cu,Pf,Bu]);var Eu=function(){};var Fu=function(){this.g=Math.random()},Gu=function(){var a=wi,b=window.google_srt;0<=b&&1>=b&&(a.g=b)},zi=function(a,b,c,d,e){if(((void 0===d?0:d)?a.g:Math.random())<(e||.01))try{if(c instanceof ni)var f=c;else f=new ni,Oh(c,function(h,k){var m=f,n=m.o++;ri(m,n,oi(k,h))});var g=ui(f,"https:","/pagead/gen_204?id="+b+"&");g&&Bi(w,g)}catch(h){}};var wi,Hu,vi=new li(1,window);(function(a){wi=null!=a?a:new Fu;"number"!==typeof window.google_srt&&(window.google_srt=Math.random());Gu();Hu=new xi;Hu.Sc(function(){});Hu.Jd(!0);"complete"==window.document.readyState?window.google_measure_js_timing||vi.B():vi.j&&dg(window,"load",function(){window.google_measure_js_timing||vi.B()})})();var Iu=(new Date).getTime();[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce(function(a,b){return a+b});[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce(function(a,b){return a+b});[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce(function(a,b){return a+b});[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce(function(a,b){return a+b});var Ju=function(a){this.M=A(a)};u(Ju,B);Ju.ga=[3];var Ku=function(a){this.M=A(a)};u(Ku,B);var Lu=function(a,b){return Re(a,1,b,ce)},Mu=function(a,b){return Re(a,2,b,ce)},Nu=function(a,b){return Re(a,3,b,fe)},Ou=function(a,b){Re(a,4,b,fe)};Ku.ga=[1,2,3,4];var Pu=function(a){this.M=A(a)};u(Pu,B);var Qu=function(a){this.M=A(a)};u(Qu,B);Qu.prototype.getVersion=function(){return ef(this,1)};
var Ru=function(a,b){return Se(a,1,ge(b),0)},Su=function(a,b){return Ye(a,2,b)},Tu=function(a,b){return Ye(a,3,b)},Uu=function(a,b){return Se(a,4,ge(b),0)},Vu=function(a,b){return Se(a,5,ge(b),0)},Wu=function(a,b){return Se(a,6,ge(b),0)},Xu=function(a,b){return Se(a,7,qe(b),"")},Yu=function(a,b){return Se(a,8,ge(b),0)},Zu=function(a,b){return Se(a,9,ge(b),0)},$u=function(a,b){return Se(a,10,null==b?b:Zd(b),!1)},av=function(a,b){return Se(a,11,null==b?b:Zd(b),!1)},bv=function(a,b){return Re(a,12,b,
ce)},cv=function(a,b){return Re(a,13,b,ce)},dv=function(a,b){return Re(a,14,b,ce)},ev=function(a,b){return Se(a,15,null==b?b:Zd(b),!1)},fv=function(a,b){return Se(a,16,qe(b),"")},gv=function(a,b){return Re(a,17,b,fe)},hv=function(a,b){return Re(a,18,b,fe)},iv=function(a,b){return Ze(a,19,b)};Qu.ga=[12,13,14,17,18,19];var jv=function(a){this.M=A(a)};u(jv,B);var kv="a".charCodeAt(),lv=og({mh:0,lh:1,ih:2,bh:3,jh:4,eh:5,kh:6,gh:7,hh:8,ah:9,fh:10,nh:11}),mv=og({ph:0,qh:1,oh:2});var nv=function(a){if(/[^01]/.test(a))throw Error("Input bitstring "+a+" is malformed!");this.h=a;this.g=0},pv=function(a){a=ov(a,36);var b=new Pu;b=Se(b,1,je(Math.floor(a/10)),"0");return Se(b,2,ge(a%10*1E8),0)},qv=function(a){return String.fromCharCode(kv+ov(a,6))+String.fromCharCode(kv+ov(a,6))},uv=function(a){var b=ov(a,16);return!0===!!ov(a,1)?(a=rv(a),a.forEach(function(c){if(c>b)throw Error("ID "+c+" is past MaxVendorId "+b+"!");}),a):tv(a,b)},vv=function(a){for(var b=[],c=ov(a,12);c--;){var d=
ov(a,6),e=ov(a,2),f=rv(a),g=b,h=g.push,k=new Ju;d=Se(k,1,de(d),0);e=Se(d,2,de(e),0);f=Re(e,3,f,fe);h.call(g,f)}return b},rv=function(a){for(var b=ov(a,12),c=[];b--;){var d=!0===!!ov(a,1),e=ov(a,16);if(d)for(d=ov(a,16);e<=d;e++)c.push(e);else c.push(e)}c.sort(function(f,g){return f-g});return c},tv=function(a,b,c){for(var d=[],e=0;e<b;e++)if(ov(a,1)){var f=e+1;if(c&&-1===c.indexOf(f))throw Error("ID: "+f+" is outside of allowed values!");d.push(f)}return d},ov=function(a,b){if(a.g+b>a.h.length)throw Error("Requested length "+
b+" is past end of string.");var c=a.h.substring(a.g,a.g+b);a.g+=b;return parseInt(c,2)};nv.prototype.skip=function(a){this.g+=a};var wv=function(a){try{var b=Qc(a).map(function(f){return f.toString(2).padStart(8,"0")}).join(""),c=new nv(b);if(3!==ov(c,3))return null;var d=Mu(Lu(new Ku,tv(c,24,lv)),tv(c,24,lv)),e=ov(c,6);0!==e&&Ou(Nu(d,tv(c,e)),tv(c,e));return d}catch(f){return null}};var xv=function(a){try{var b=Qc(a).map(function(d){return d.toString(2).padStart(8,"0")}).join(""),c=new nv(b);return iv(hv(gv(fv(ev(dv(cv(bv(av($u(Zu(Yu(Xu(Wu(Vu(Uu(Tu(Su(Ru(new Qu,ov(c,6)),pv(c)),pv(c)),ov(c,12)),ov(c,12)),ov(c,6)),qv(c)),ov(c,12)),ov(c,6)),!!ov(c,1)),!!ov(c,1)),tv(c,12,mv)),tv(c,24,lv)),tv(c,24,lv)),!!ov(c,1)),qv(c)),uv(c)),uv(c)),vv(c))}catch(d){return null}};var zv=function(a){if(!a)return null;var b=a.split(".");if(4<b.length)return null;a=xv(b[0]);if(!a)return null;var c=new jv;a=Ye(c,1,a);b.shift();b=t(b);for(c=b.next();!c.done;c=b.next())switch(c=c.value,yv(c)){case 1:case 2:break;case 3:c=wv(c);if(!c)return null;Ye(a,2,c);break;default:return null}return a},yv=function(a){try{var b=Qc(a).map(function(c){return c.toString(2).padStart(8,"0")}).join("");return ov(new nv(b),3)}catch(c){return-1}};var Av=function(a,b){var c={};if(Array.isArray(b)&&0!==b.length){b=t(b);for(var d=b.next();!d.done;d=b.next())d=d.value,c[d]=-1!==a.indexOf(d)}else for(a=t(a),d=a.next();!d.done;d=a.next())c[d.value]=!0;delete c[0];return c};var ig=new function(a,b){this.g=a;this.defaultValue=void 0===b?0:b}(494575051),Bv=new Xf(489560439),Cv=new Xf(505762507),Dv=new Wf(471855283),Ev=new Wf(465118388);var Fv=function(a){this.M=A(a)};u(Fv,B);var Gv=function(a){var b=new Fv,c=b.M,d=zd(c);Wd(Dd(b.M));var e=d&2;b=Ie(c,d,1,!1);Array.isArray(b)||(b=Ud);var f=!!(d&32),g=zd(b);0===g&&f&&!e?(g|=33,Ad(b,g)):g&1||(g|=1,Ad(b,g));if(e)g&2||xd(b,34),Object.freeze(b);else if(2&g||2048&g)b=vd(b),e=1,f&&(e|=32),Ad(b,e),Ke(c,d,1,b,!1);c=b;d=zd(c);d=!!(4&d)&&!!(4096&d);if(Array.isArray(a))for(b=0;b<a.length;b++)c.push(ce(a[b],d));else for(a=t(a),b=a.next();!b.done;b=a.next())c.push(ce(b.value,d))};Fv.ga=[1];var Hv=/^((market|itms|intent|itms-appss):\/\/)/i;var Iv="ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");var Jv=function(a){var b=a.Xa,c=a.height,d=a.width,e=void 0===a.Ca?!1:a.Ca;this.lb=a.lb;this.Xa=b;this.height=c;this.width=d;this.Ca=e};Jv.prototype.getHeight=function(){return this.height};Jv.prototype.getWidth=function(){return this.width};var Kv=function(a){var b=a.vg,c=a.nf,d=a.ug,e=a.mf;Jv.call(this,{lb:a.lb,Xa:a.Xa,height:a.height,width:a.width,Ca:void 0===a.Ca?!1:a.Ca});this.o=b;this.h=c;this.j=d;this.g=e};u(Kv,Jv);var Lv=function(a){var b=a.Sf;Jv.call(this,{lb:a.lb,Xa:a.Xa,height:a.height,width:a.width,Ca:void 0===a.Ca?!1:a.Ca});this.g=b};u(Lv,Jv);Lv.prototype.getMediaUrl=function(){return this.g};function Mv(a){return new (Function.prototype.bind.apply(a,[null].concat(ha(Ia.apply(1,arguments)))))};var Nv=function(a,b,c,d){P.call(this);this.F=b;this.D=c;this.B=d;this.l=new Map;this.G=0;this.o=new Map;this.A=new Map;this.j=void 0;this.h=a};u(Nv,P);Nv.prototype.L=function(){delete this.g;this.l.clear();this.o.clear();this.A.clear();this.j&&(eg(this.h,"message",this.j),delete this.j);delete this.h;delete this.B;P.prototype.L.call(this)};
var Ov=function(a){if(a.g)return a.g;a.D&&a.D(a.h)?a.g=a.h:a.g=Th(a.h,a.F);var b;return null!=(b=a.g)?b:null},Qv=function(a,b,c){if(Ov(a))if(a.g===a.h)(b=a.l.get(b))&&b(a.g,c);else{var d=a.o.get(b);if(d&&d.Rb){Pv(a);var e=++a.G;a.A.set(e,{Cb:d.Cb,vf:d.Fc(c),cg:"addEventListener"===b});a.g.postMessage(d.Rb(c,e),"*")}}},Pv=function(a){a.j||(a.j=function(b){try{var c=a.B?a.B(b):void 0;if(c){var d=c.se,e=a.A.get(d);if(e){e.cg||a.A.delete(d);var f;null==(f=e.Cb)||f.call(e,e.vf,c.payload)}}}catch(g){}},
dg(a.h,"message",a.j))};var Rv=function(a,b){b=b.listener;(a=(0,a.__gpp)("addEventListener",b))&&b(a,!0)},Sv=function(a,b){(0,a.__gpp)("removeEventListener",b.listener,b.listenerId)},Tv=function(a,b){(0,a.__gpp)("getSection",function(c){b.callback({sc:null!=c?c:void 0,uc:c?void 0:4})},b.apiPrefix)},Uv={Fc:function(a){return a.listener},Rb:function(a,b){a={};return a.__gppCall={callId:b,command:"addEventListener",version:"1.1"},a},Cb:function(a,b){b=b.__gppReturn;a(b.returnValue,b.success)}},Vv={Fc:function(a){return a.listener},
Rb:function(a,b){var c={};return c.__gppCall={callId:b,command:"removeEventListener",version:"1.1",parameter:a.listenerId},c},Cb:function(a,b){b=b.__gppReturn;var c=b.returnValue.data;null==a||a(c,b.success)}},Wv={Fc:function(a){return a.callback},Rb:function(a,b){var c={};return c.__gppCall={callId:b,command:"getSection",version:"1.1",parameter:a.apiPrefix},c},Cb:function(a,b){b=b.__gppReturn;var c;a({sc:null!=(c=b.returnValue)?c:void 0,uc:b.success?void 0:2})}};
function Xv(a){var b={};"string"===typeof a.data?b=JSON.parse(a.data):b=a.data;return{payload:b,se:b.__gppReturn.callId}}
var Yv=function(a,b){var c=void 0===b?{}:b;b=c.gppApiDetectionMode;c=c.timeoutMs;P.call(this);this.caller=new Nv(a,b&&1!==b&&3!==b?"__gppLocator_non_existent":"__gppLocator",b&&1!==b&&2!==b?void 0:function(d){return"function"===typeof d.__gpp},Xv);this.caller.l.set("addEventListener",Rv);this.caller.o.set("addEventListener",Uv);this.caller.l.set("removeEventListener",Sv);this.caller.o.set("removeEventListener",Vv);this.caller.l.set("getDataWithCallback",Tv);this.caller.o.set("getDataWithCallback",
Wv);this.timeoutMs=null!=c?c:500};u(Yv,P);Yv.prototype.L=function(){this.caller.W();P.prototype.L.call(this)};
Yv.prototype.addEventListener=function(a){var b=this,c=$f(function(){a(Zv,!0)}),d=-1===this.timeoutMs?void 0:setTimeout(function(){c()},this.timeoutMs);Qv(this.caller,"addEventListener",{listener:function(e,f){clearTimeout(d);try{var g;if(void 0===(null==(g=e.pingData)?void 0:g.gppVersion)||"1"===e.pingData.gppVersion||"1.0"===e.pingData.gppVersion){b.removeEventListener(e.listenerId);var h={eventName:"signalStatus",data:"ready",pingData:{internalErrorState:1,gppString:"GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
applicableSections:[-1]}}}else Array.isArray(e.pingData.applicableSections)&&0!==e.pingData.applicableSections.length?h=e:(b.removeEventListener(e.listenerId),h={eventName:"signalStatus",data:"ready",pingData:{internalErrorState:2,gppString:"GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",applicableSections:[-1]}});a(h,f)}catch(k){if(null==e?0:e.listenerId)try{b.removeEventListener(e.listenerId)}catch(m){a($v,!0);return}a(aw,!0)}}})};
Yv.prototype.removeEventListener=function(a){Qv(this.caller,"removeEventListener",{listenerId:a})};
var aw={eventName:"signalStatus",data:"ready",pingData:{internalErrorState:2,gppString:"GPP_ERROR_STRING_UNAVAILABLE",applicableSections:[-1]},listenerId:-1},Zv={eventName:"signalStatus",data:"ready",pingData:{gppString:"GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",internalErrorState:2,applicableSections:[-1]},listenerId:-1},$v={eventName:"signalStatus",data:"ready",pingData:{gppString:"GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",internalErrorState:2,applicableSections:[-1]},listenerId:-1};var bw=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},cw=function(a,b){b=void 0===b?{}:b;P.call(this);this.h=a;this.g=null;this.A={};this.B=0;var c;this.o=null!=(c=b.timeoutMs)?c:500;var d;this.l=null!=(d=b.gi)?d:!1;this.j=
null};u(cw,P);cw.prototype.L=function(){this.A={};this.j&&(eg(this.h,"message",this.j),delete this.j);delete this.A;delete this.h;delete this.g;P.prototype.L.call(this)};
var ew=function(a){return"function"===typeof a.h.__tcfapi||null!=dw(a)},hw=function(a,b){var c={internalErrorState:0,internalBlockOnErrors:a.l},d=$f(function(){return b(c)}),e=0;-1!==a.o&&(e=setTimeout(function(){e=0;c.tcString="tcunavailable";c.internalErrorState=1;d()},a.o));fw(a,"addEventListener",function(f){f&&(c=f,c.internalErrorState=bw(c),c.internalBlockOnErrors=a.l,gw(c)?(0!=c.internalErrorState&&(c.tcString="tcunavailable"),fw(a,"removeEventListener",null,c.listenerId),(f=e)&&clearTimeout(f),
d()):("error"===c.cmpStatus||0!==c.internalErrorState)&&(f=e)&&clearTimeout(f))})};
cw.prototype.addEventListener=function(a){var b=this,c={internalBlockOnErrors:this.l},d=$f(function(){return a(c)}),e=0;-1!==this.o&&(e=setTimeout(function(){c.tcString="tcunavailable";c.internalErrorState=1;d()},this.o));var f=function(g,h){clearTimeout(e);g?(c=g,c.internalErrorState=bw(c),c.internalBlockOnErrors=b.l,h&&0===c.internalErrorState||(c.tcString="tcunavailable",h||(c.internalErrorState=3))):(c.tcString="tcunavailable",c.internalErrorState=3);a(c)};try{fw(this,"addEventListener",f)}catch(g){c.tcString=
"tcunavailable",c.internalErrorState=3,e&&(clearTimeout(e),e=0),d()}};cw.prototype.removeEventListener=function(a){a&&a.listenerId&&fw(this,"removeEventListener",null,a.listenerId)};
var fw=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.h.__tcfapi)a=a.h.__tcfapi,a(b,2,c,d);else if(dw(a)){iw(a);var e=++a.B;a.A[e]=c;a.g&&(c={},a.g.postMessage((c.__tcfapiCall={command:b,version:2,callId:e,parameter:d},c),"*"))}else c({},!1)},dw=function(a){if(a.g)return a.g;a.g=Th(a.h,"__tcfapiLocator");return a.g},iw=function(a){a.j||(a.j=function(b){try{var c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.A[c.callId](c.returnValue,c.success)}catch(d){}},dg(a.h,
"message",a.j))},gw=function(a){if(!1===a.gdprApplies)return!0;void 0===a.internalErrorState&&(a.internalErrorState=bw(a));return"error"===a.cmpStatus||0!==a.internalErrorState?a.internalBlockOnErrors?(Di({e:String(a.internalErrorState)},"tcfe"),!1):!0:"loaded"!==a.cmpStatus||"tcloaded"!==a.eventStatus&&"useractioncomplete"!==a.eventStatus?!1:!0};Gv([1,8,10,11,12,2,3,4,5]);Gv([1,6,7,8,9,10,11,12,2,3,4,5,13,14]);Gv([1,6,7,8,9,10,11,12,2,3,4,5,13,14]);new Fv;var R=function(a,b){this.h=this.A=this.o="";this.I=null;this.K=this.j="";this.l=!1;var c;a instanceof R?(this.l=void 0!==b?b:a.l,jw(this,a.o),this.A=a.A,this.h=a.h,kw(this,a.I),this.j=a.j,lw(this,mw(a.g)),this.K=a.D()):a&&(c=String(a).match(uh))?(this.l=!!b,jw(this,c[1]||"",!0),this.A=nw(c[2]||""),this.h=nw(c[3]||"",!0),kw(this,c[4]),this.j=nw(c[5]||"",!0),lw(this,c[6]||"",!0),this.K=nw(c[7]||"")):(this.l=!!b,this.g=new ow(null,this.l))};
R.prototype.toString=function(){var a=[],b=this.o;b&&a.push(pw(b,qw,!0),":");var c=this.h;if(c||"file"==b)a.push("//"),(b=this.A)&&a.push(pw(b,qw,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.I,null!=c&&a.push(":",String(c));if(c=this.j)this.h&&"/"!=c.charAt(0)&&a.push("/"),a.push(pw(c,"/"==c.charAt(0)?rw:tw,!0));(c=this.g.toString())&&a.push("?",c);(c=this.D())&&a.push("#",pw(c,uw));return a.join("")};
R.prototype.resolve=function(a){var b=this.F(),c=!!a.o;c?jw(b,a.o):c=!!a.A;c?b.A=a.A:c=!!a.h;c?b.h=a.h:c=null!=a.I;var d=a.j;if(c)kw(b,a.I);else if(c=!!a.j){if("/"!=d.charAt(0))if(this.h&&!this.j)d="/"+d;else{var e=b.j.lastIndexOf("/");-1!=e&&(d=b.j.slice(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(pb(e,"./")||pb(e,"/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var h=e[g++];"."==h?d&&g==e.length&&f.push(""):".."==h?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),d&&
g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?b.j=d:c=""!==a.g.toString();c?lw(b,mw(a.g)):c=!!a.K;c&&(b.K=a.D());return b};R.prototype.F=function(){return new R(this)};var jw=function(a,b,c){a.o=c?nw(b,!0):b;a.o&&(a.o=a.o.replace(/:$/,""))},kw=function(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.I=b}else a.I=null},lw=function(a,b,c){b instanceof ow?(a.g=b,vw(a.g,a.l)):(c||(b=pw(b,ww)),a.g=new ow(b,a.l))},xw=function(a,b,c){a.g.set(b,c);return a};
R.prototype.D=function(){return this.K};
var yw=function(a){return a instanceof R?a.F():new R(a,void 0)},nw=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},pw=function(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,zw),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},zw=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},qw=/[#\/\?@]/g,tw=/[#\?:]/g,rw=/[#\?]/g,ww=/[#\?@]/g,uw=/#/g,ow=function(a,b){this.h=this.g=null;this.j=a||null;this.o=!!b},Aw=function(a){a.g||
(a.g=new Map,a.h=0,a.j&&wh(a.j,function(b,c){a.add(Pg(b),c)}))};ow.prototype.add=function(a,b){Aw(this);this.j=null;a=Bw(this,a);var c=this.g.get(a);c||this.g.set(a,c=[]);c.push(b);this.h+=1;return this};ow.prototype.remove=function(a){Aw(this);a=Bw(this,a);return this.g.has(a)?(this.j=null,this.h-=this.g.get(a).length,this.g.delete(a)):!1};ow.prototype.clear=function(){this.g=this.j=null;this.h=0};ow.prototype.isEmpty=function(){Aw(this);return 0==this.h};var Cw=function(a,b){Aw(a);b=Bw(a,b);return a.g.has(b)};
l=ow.prototype;l.forEach=function(a,b){Aw(this);this.g.forEach(function(c,d){c.forEach(function(e){a.call(b,e,d,this)},this)},this)};l.wc=function(){Aw(this);for(var a=Array.from(this.g.values()),b=Array.from(this.g.keys()),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};l.zb=function(a){Aw(this);var b=[];if("string"===typeof a)Cw(this,a)&&(b=b.concat(this.g.get(Bw(this,a))));else{a=Array.from(this.g.values());for(var c=0;c<a.length;c++)b=b.concat(a[c])}return b};
l.set=function(a,b){Aw(this);this.j=null;a=Bw(this,a);Cw(this,a)&&(this.h-=this.g.get(a).length);this.g.set(a,[b]);this.h+=1;return this};l.get=function(a,b){if(!a)return b;a=this.zb(a);return 0<a.length?String(a[0]):b};
l.toString=function(){if(this.j)return this.j;if(!this.g)return"";for(var a=[],b=Array.from(this.g.keys()),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.zb(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.j=a.join("&")};
var mw=function(a){var b=new ow;b.j=a.j;a.g&&(b.g=new Map(a.g),b.h=a.h);return b},Bw=function(a,b){b=String(b);a.o&&(b=b.toLowerCase());return b},vw=function(a,b){b&&!a.o&&(Aw(a),a.j=null,a.g.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),this.remove(e),0<c.length&&(this.j=null,this.g.set(Bw(this,e),$b(c)),this.h+=c.length))},a));a.o=b};var Dw,Ew,Fw,Gw=function(){return w.navigator?w.navigator.userAgent:""},Hw=pb(Gw(),"(iPad")||pb(Gw(),"(Macintosh")||pb(Gw(),"(iPod")||pb(Gw(),"(iPhone");var Iw="ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),Jw=["c.googlesyndication.com"];
function Kw(a,b){b=void 0===b?window.location.protocol:b;var c=!1;null==a||!a.startsWith("http")||(null==a?0:a.startsWith("https"))?c=!1:Lw(a,Jw)?c=!1:b.includes("https")&&Lw(a,Iw)&&(c=!0);return c?(a=new R(a),I(G.g(),"htp","1"),jw(a,"https"),a.toString()):a}function Mw(a){if(!a)return!1;try{var b="string"===typeof a?new R(a):a;return"gcache"==b.o&&!!b.g.get("url")}catch(c){return!1}}
function Nw(a){try{var b="string"===typeof a?new R(a):a;if(Mw(b)){var c=b.g.get("url");return"undefined"===typeof c?null:c}}catch(d){}return null}function Lw(a,b){return(new RegExp("^https?://([a-z0-9-]{1,63}\\.)*("+b.join("|").replace(/\./g,"\\.")+")(:[0-9]+)?([/?#]|$)","i")).test(a)}function Ow(a){a=new R(a);var b=a.h;if("http"!=a.o&&"https"!=a.o)a=!1;else if(-1==b.indexOf(".")||b.match(/^[\.0-9]*$/))a=!1;else a:{try{Pg(a.toString())}catch(c){a=!1;break a}a=!0}return a};var Pw=-1;function Qw(a,b){b=null!=b?b:"";jc&&(b="");if(!nb(Sg(a))){var c=a instanceof Fg||!Hv.test(a)?a:new Fg(a,Gg);if(c instanceof Fg)var d=c;else{d=void 0===d?Ch:d;a:if(d=void 0===d?Ch:d,!(a instanceof Fg)){for(c=0;c<d.length;++c){var e=d[c];if(e instanceof Ah&&e.Rf(a)){a=new Fg(a,Gg);break a}}a=void 0}d=a||Hg}a=window;if(d instanceof Fg)var f=d instanceof Fg&&d.constructor===Fg?d.g:"type_error:SafeUrl";else{b:if(Eh){try{f=new URL(d)}catch(g){f="https:";break b}f=f.protocol}else c:{f=document.createElement("a");
try{f.href=d}catch(g){f=void 0;break c}f=f.protocol;f=":"===f||""===f?"https:":f}f="javascript:"!==f?d:void 0}void 0!==f&&a.open(f,"_blank",b)}};var Rw=/OS (\S+) like/,Sw=/Android ([\d\.]+)/;function Tw(a,b){a=(a=a.exec(vb()))?a[1]:"";a=a.replace(/_/g,".");return 0<=sb(a,b)}var Uw=function(){return tc||qc&&"ontouchstart"in document.documentElement},Vw=function(a){return vc&&Tw(Rw,a)},Ww=function(a){return(a=void 0===a?null:a)&&"function"===typeof a.getAttribute?a.getAttribute("playsinline")?!0:!1:!1};var Xw=function(a){Q.call(this);this.h=a;this.l=this.A=!1;this.B=this.D=0;this.g=new wt(1E3);eo(this,this.g);Hs(this.g,"tick",this.F,!1,this);Hs(this.h,"pause",this.j,!1,this);Hs(this.h,"playing",this.j,!1,this);Hs(this.h,"ended",this.j,!1,this);Hs(this.h,"timeupdate",this.j,!1,this)};u(Xw,Q);var Yw=function(a){var b;return null!=(b=a.h.currentTime)?b:a.h.getCurrentTime()};
Xw.prototype.j=function(a){switch(a.type){case "playing":Zw(this);break;case "pause":case "ended":this.g.enabled&&this.g.stop();break;case "timeupdate":!this.A&&0<Yw(this)&&(this.A=!0,Zw(this))}};var Zw=function(a){!a.g.enabled&&a.A&&(a.D=1E3*Yw(a),a.B=Date.now(),a.l=!1,a.g.start())};Xw.prototype.F=function(){var a=Date.now(),b=a-this.B,c=1E3*Yw(this);c-this.D<.5*b?this.l||(this.l=!0,this.dispatchEvent("playbackStalled")):this.l=!1;this.D=c;this.B=a};var $w="://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(" "),ax=/\bocr\b/;function bx(a){if(nb(Sg(a))||jc&&2048<a.length)return!1;try{if((new R(a)).D().match(ax))return!0}catch(b){}return null!=$w.find(function(b){return null!=a.match(b)})};var cx=new Map,dx=function(){this.h=this.g=null};function ex(a,b,c,d){var e=hn(a);b.width<=e.width&&b.height<=e.height?(fx(d),c(e)):(e=setTimeout(function(){return ex(a,b,c,d)},200),d.h=e)}
function gx(a,b){b=void 0===b?new D(1,1):b;var c=new dx,d=new Promise(function(e){var f=hn(a);if(b.width<=f.width&&b.height<=f.height)return e(f);"ResizeObserver"in window?(f=new ResizeObserver(function(g){window.requestAnimationFrame(function(){for(var h=new D(0,0),k=t(g),m=k.next();!m.done;m=k.next())if(m=m.value,m.contentBoxSize?(m=Array.isArray(m.contentBoxSize)?m.contentBoxSize[0]:m.contentBoxSize,h.width=Math.floor(m.inlineSize),h.height=Math.floor(m.blockSize)):(h.width=Math.floor(m.contentRect.width),
h.height=Math.floor(m.contentRect.height)),b.width<=h.width&&b.height<=h.height)return fx(c),e(h)})}),c.g=f,f.observe(a)):ex(a,b,e,c)});cx.set(d,c);return d}function fx(a){a.h&&window.clearTimeout(a.h);a.g&&(a.g.disconnect(),a.g=null)};function hx(a,b){return nb(b)?!1:(new RegExp(a)).test(b)}function ix(a){var b={};a.split(",").forEach(function(c){var d=c.split("=");2==d.length&&(c=ob(d[0]),d=ob(d[1]),0<c.length&&(b[c]=d))});return b}
function jx(a){var b="af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu".split(" ");if(!a)return null;
a=a.toLowerCase().replace("-","_");if(b.includes(a))return a;a=(a=a.match(/^\w{2,3}([-_]|$)/))?a[0].replace(/[_-]/g,""):"";return b.includes(a)?a:null};var kx=function(){this.g=Date.now()};kx.prototype.reset=function(){this.g=Date.now()};var lx=function(a){a=a.g+5E3-Date.now();return 0<a?a:0};var mx=function(a,b){this.url=a;this.g=void 0===b?null:b};var nx=function(a){switch(a){case 0:return"No Error";case 1:return"Access denied to content document";case 2:return"File not found";case 3:return"Firefox silently errored";case 4:return"Application custom error";case 5:return"An exception occurred";case 6:return"Http response at 400 or 500 level";case 7:return"Request was aborted";case 8:return"Request timed out";case 9:return"The resource is not available offline";default:return"Unrecognized error code"}};var ox=function(a,b){var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.errorCode=a;this.g=b};u(ox,Error);var px=function(){if(!jc)return!1;try{return new ActiveXObject("MSXML2.DOMDocument"),!0}catch(a){return!1}},qx=jc&&px();var rx=function(a){P.call(this);this.o=a;this.h={}};bb(rx,P);var sx=[];rx.prototype.O=function(a,b,c,d){return tx(this,a,b,c,d)};var tx=function(a,b,c,d,e,f){Array.isArray(c)||(c&&(sx[0]=c.toString()),c=sx);for(var g=0;g<c.length;g++){var h=Hs(b,c[g],d||a.handleEvent,e||!1,f||a.o||a);if(!h)break;a.h[h.key]=h}return a};rx.prototype.Qb=function(a,b,c,d){return ux(this,a,b,c,d)};
var ux=function(a,b,c,d,e,f){if(Array.isArray(c))for(var g=0;g<c.length;g++)ux(a,b,c[g],d,e,f);else{b=Gs(b,c,d||a.handleEvent,e,f||a.o||a);if(!b)return a;a.h[b.key]=b}return a};rx.prototype.vb=function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)this.vb(a,b[f],c,d,e);else c=c||this.handleEvent,d=Qa(d)?!!d.capture:!!d,e=e||this.o||this,c=Is(c),d=!!d,b=ws(a)?a.Mb(b,c,d,e):a?(a=Ks(a))?a.Mb(b,c,d,e):null:null,b&&(Ps(b),delete this.h[b.key])};
var vx=function(a){kg(a.h,function(b,c){this.h.hasOwnProperty(c)&&Ps(b)},a);a.h={}};rx.prototype.L=function(){rx.Da.L.call(this);vx(this)};rx.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};var wx=function(){};wx.prototype.g=null;var yx=function(a){var b;(b=a.g)||(b={},xx(a)&&(b[0]=!0,b[1]=!0),b=a.g=b);return b};var zx,Ax=function(){};bb(Ax,wx);var Bx=function(a){return(a=xx(a))?new ActiveXObject(a):new XMLHttpRequest},xx=function(a){if(!a.h&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.h=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.h};zx=new Ax;var Cx=function(a){Q.call(this);this.headers=new Map;this.G=a||null;this.h=!1;this.F=this.g=null;this.N="";this.l=0;this.j=this.J=this.A=this.H=!1;this.D=0;this.B=null;this.Z="";this.U=this.V=!1};bb(Cx,Q);
var Dx=/^https?$/i,Ex=["POST","PUT"],Ix=function(a,b,c,d){if(a.g)throw Error("[goog.net.XhrIo] Object is active with another request="+a.N+"; newUri="+b);c=c?c.toUpperCase():"GET";a.N=b;a.l=0;a.H=!1;a.h=!0;a.g=a.G?Bx(a.G):Bx(zx);a.F=a.G?yx(a.G):yx(zx);a.g.onreadystatechange=Za(a.X,a);try{a.J=!0,a.g.open(c,String(b),!0),a.J=!1}catch(g){Fx(a);return}b=d||"";d=new Map(a.headers);var e=Array.from(d.keys()).find(function(g){return"content-type"==g.toLowerCase()}),f=w.FormData&&b instanceof w.FormData;
!Vb(Ex,c)||e||f||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");c=t(d);for(d=c.next();!d.done;d=c.next())e=t(d.value),d=e.next().value,e=e.next().value,a.g.setRequestHeader(d,e);a.Z&&(a.g.responseType=a.Z);"withCredentials"in a.g&&a.g.withCredentials!==a.V&&(a.g.withCredentials=a.V);try{Gx(a),0<a.D&&(a.U=Hx(a.g),a.U?(a.g.timeout=a.D,a.g.ontimeout=Za(a.aa,a)):a.B=xt(a.aa,a.D,a)),a.A=!0,a.g.send(b),a.A=!1}catch(g){Fx(a)}},Hx=function(a){return jc&&"number"===typeof a.timeout&&
void 0!==a.ontimeout};Cx.prototype.aa=function(){"undefined"!=typeof La&&this.g&&(this.l=8,this.dispatchEvent("timeout"),this.abort(8))};var Fx=function(a){a.h=!1;a.g&&(a.j=!0,a.g.abort(),a.j=!1);a.l=5;Jx(a);Kx(a)},Jx=function(a){a.H||(a.H=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};Cx.prototype.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.l=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Kx(this))};
Cx.prototype.L=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Kx(this,!0));Cx.Da.L.call(this)};Cx.prototype.X=function(){this.ya()||(this.J||this.A||this.j?Lx(this):this.ba())};Cx.prototype.ba=function(){Lx(this)};
var Lx=function(a){if(a.h&&"undefined"!=typeof La&&(!a.F[1]||4!=Mx(a)||2!=Nx(a)))if(a.A&&4==Mx(a))xt(a.X,0,a);else if(a.dispatchEvent("readystatechange"),4==Mx(a)){a.h=!1;try{var b=Nx(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.N).match(uh)[1]||null;!f&&w.self&&w.self.location&&(f=w.self.location.protocol.slice(0,-1));e=!Dx.test(f?f.toLowerCase():"")}d=e}d?(a.dispatchEvent("complete"),
a.dispatchEvent("success")):(a.l=6,Jx(a))}finally{Kx(a)}}},Kx=function(a,b){if(a.g){Gx(a);var c=a.g,d=a.F[0]?function(){}:null;a.g=null;a.F=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},Gx=function(a){a.g&&a.U&&(a.g.ontimeout=null);a.B&&(w.clearTimeout(a.B),a.B=null)};Cx.prototype.isActive=function(){return!!this.g};
var Mx=function(a){return a.g?a.g.readyState:0},Nx=function(a){try{return 2<Mx(a)?a.g.status:-1}catch(b){return-1}},Ox=function(a){if(a.g){a:{a=a.g.responseText;if(w.JSON)try{var b=w.JSON.parse(a);break a}catch(c){}b=mj(a)}return b}};var Px=function(){};Px.prototype.get=function(a){return yy({url:a.url,timeout:a.timeout,withCredentials:void 0===a.withCredentials?!0:a.withCredentials,method:"GET",headers:void 0===a.headers?{}:a.headers})};
var yy=function(a){var b=a.url,c=a.timeout,d=a.withCredentials,e=a.method,f=void 0===a.content?void 0:a.content,g=void 0===a.headers?{}:a.headers;return zy({url:b,timeout:c,withCredentials:d,method:e,content:f,headers:g}).then(function(h){return Promise.resolve(h)},function(h){return h instanceof Error&&6==h.message&&d?zy({url:b,timeout:c,withCredentials:!d,method:e,content:f,headers:g}):Promise.reject(h)})},zy=function(a){var b=a.url,c=a.timeout,d=a.withCredentials,e=a.method,f=void 0===a.content?
void 0:a.content;a=void 0===a.headers?{}:a.headers;var g=new Cx;g.V=d;g.D=Math.max(0,lx(c));for(var h in a)g.headers.set(h,a[h]);var k=new rx;return new Promise(function(m,n){k.Qb(g,"success",function(){a:{if(xn())try{Ox(g);var q="application/json";break a}catch(x){q="application/xml";break a}g.g&&4==Mx(g)?(q=g.g.getResponseHeader("Content-Type"),q=null===q?void 0:q):q=void 0;q=q||""}if(-1!=q.indexOf("application/json"))m(Ox(g)||{});else{try{var r=g.g?g.g.responseXML:null}catch(x){r=null}if(null==
r){try{var v=g.g?g.g.responseText:""}catch(x){v=""}r=v;if("undefined"!=typeof DOMParser)v=new DOMParser,r=Zi(r),r=v.parseFromString(Ng(r),"application/xml");else if(qx){v=new ActiveXObject("MSXML2.DOMDocument");v.resolveExternals=!1;v.validateOnParse=!1;try{v.setProperty("ProhibitDTD",!0),v.setProperty("MaxXMLSize",2048),v.setProperty("MaxElementDepth",256)}catch(x){}v.loadXML(r);r=v}else throw Error("Your browser does not support loading xml documents");}m(r)}k.W();g.W()});k.Qb(g,["error","timeout"],
function(){n(new ox(g.l,Nx(g)));k.W();g.W()});Ix(g,Kw(b),e,f)})};y("google.javascript.ads.imalib.common.UrlLoader",Px);var Ay=["A9AxgGSwmnfgzzkyJHILUr3H8nJ/3D+57oAsL4DBt4USlng4jZ0weq+fZtHC/Qwwn6gd4QSa5DzT3OBif+kXVA0AAAB4eyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9","As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ=="];
function By(){var a=void 0===a?document:a;var b;return!(null==(b=a.featurePolicy)||!b.features().includes("attribution-reporting"))};var Fy=function(a,b,c,d,e){c=void 0===c?!1:c;e=void 0===e?null:e;try{if(b=(void 0===d?0:d)?Kw(b,"https"):Kw(b),c=c||bx(b),a.h||null!=e)Cy(a,b,c,e);else{var f=By()?e:null;xn()?Dy(b):Ey(a,b,c,f)}}catch(g){}},Gy=function(a,b){var c={keepalive:!0,method:"get",redirect:"follow"};a&&(c.referrerPolicy="no-referrer");b?"setAttributionReporting"in XMLHttpRequest.prototype?c.attributionReporting={eventSourceEligible:!0,triggerEligible:!1}:c.headers={"Attribution-Reporting-Eligible":"event-source"}:c.mode="no-cors";
return c},Cy=function(a,b,c,d){d=void 0===d?null:d;I(G.g(),"faa","1");var e=By();fetch(b,Gy(c,""===d&&e)).then(function(){I(G.g(),"fas","1")}).catch(function(){I(G.g(),"faf","1");a.h=!1;var f=d;f=By()?f:null;xn()?Dy(b):Ey(a,b,c,f)});e&&d&&fetch(d,Gy(c,!0))},Ey=function(a,b,c,d){var e=new Image,f=(a.j++).toString();a.g.set(f,e);e.onload=e.onerror=function(){a.g.delete(f)};c&&(e.referrerPolicy="no-referrer");null!=d&&(e.attributionSrc=d);e.src=b},Dy=function(a){(new Px).get({url:a,timeout:new kx})};var Hy={AUTOPLAY_DISALLOWED:"autoplayDisallowed",Bg:"beginFullscreen",Cg:"canPlay",Dg:"canPlayThrough",CLICK:"click",DURATION_CHANGE:"durationChange",Og:"end",Pg:"endFullscreen",ERROR:"error",Tg:"focusSkipButton",Te:"loadStart",LOADED:"loaded",th:"mediaLoadTimeout",uh:"mediaPlaybackTimeout",Wd:"pause",Ah:"play",Bh:"playing",Jh:"seeked",Kh:"seeking",Lh:"skip",ff:"skipShown",Mh:"stalled",Xd:"start",Rh:"timeUpdate",Ph:"timedMetadata",ai:"volumeChange",bi:"waiting",ci:"windowFocusChanged",Ug:"fullyLoaded"};var Iy=function(){Q.apply(this,arguments)};u(Iy,Q);Iy.prototype.B=function(){return!1};Iy.prototype.F=function(){return-1};Iy.prototype.G=function(){};var Jy={},Ky=(Jy[18]=-1,Jy[22]=-1,Jy[43]=350,Jy[44]=350,Jy[45]=350,Jy[59]=-1,Jy[133]=350,Jy[134]=350,Jy[135]=350,Jy[136]=350,Jy[139]=50,Jy[140]=50,Jy[141]=50,Jy[160]=350,Jy[242]=150,Jy[243]=150,Jy[244]=150,Jy[245]=150,Jy[247]=150,Jy[249]=50,Jy[250]=50,Jy[251]=50,Jy[278]=150,Jy[342]=-1,Jy[343]=-1,Jy[344]=-1,Jy[345]=-1,Jy[346]=-1,Jy[347]=-1,Jy[396]=-1,Jy[398]=-1,Jy),Ly={},My=(Ly[18]=!1,Ly[22]=!1,Ly[43]=!0,Ly[44]=!0,Ly[45]=!0,Ly[59]=!1,Ly[133]=!0,Ly[134]=!0,Ly[135]=!0,Ly[136]=!0,Ly[139]=!0,Ly[140]=!0,
Ly[141]=!0,Ly[160]=!0,Ly[242]=!0,Ly[243]=!0,Ly[244]=!0,Ly[245]=!0,Ly[247]=!0,Ly[249]=!0,Ly[250]=!0,Ly[251]=!0,Ly[278]=!0,Ly[342]=!1,Ly[343]=!1,Ly[344]=!1,Ly[345]=!1,Ly[346]=!1,Ly[347]=!1,Ly[396]=!0,Ly[398]=!0,Ly),Ny={},Oy=(Ny[18]="video/mp4",Ny[22]="video/mp4",Ny[43]="video/webm",Ny[44]="video/webm",Ny[45]="video/webm",Ny[59]="video/mp4",Ny[133]="video/mp4",Ny[134]="video/mp4",Ny[135]="video/mp4",Ny[136]="video/mp4",Ny[139]="audio/mp4",Ny[140]="audio/mp4",Ny[141]="audio/mp4",Ny[160]="video/mp4",Ny[242]=
"video/webm",Ny[243]="video/webm",Ny[244]="video/webm",Ny[245]="video/webm",Ny[247]="video/webm",Ny[249]="audio/webm",Ny[250]="audio/webm",Ny[251]="audio/webm",Ny[278]="video/webm",Ny[342]="video/mp4",Ny[343]="video/mp4",Ny[344]="video/mp4",Ny[345]="video/mp4",Ny[346]="video/mp4",Ny[347]="video/mp4",Ny[396]="video/mp4",Ny[398]="video/mp4",Ny),Py={},Qy=(Py[18]="avc1.42001E, mp4a.40.2",Py[22]="avc1.64001F, mp4a.40.2",Py[43]="vp8, vorbis",Py[44]="vp8, vorbis",Py[45]="vp8, vorbis",Py[59]="avc1.4D001F, mp4a.40.2",
Py[133]="avc1.4D401E",Py[134]="avc1.4D401E",Py[135]="avc1.4D401E",Py[136]="avc1.4D401E",Py[139]="mp4a.40.2",Py[140]="mp4a.40.2",Py[141]="mp4a.40.2",Py[160]="avc1.4D401E",Py[242]="vp9",Py[243]="vp9",Py[244]="vp9",Py[245]="vp9",Py[247]="vp9",Py[249]="opus",Py[250]="opus",Py[251]="opus",Py[278]="vp9",Py[342]="avc1.42E01E, mp4a.40.2",Py[343]="avc1.42E01E, mp4a.40.2",Py[344]="avc1.42E01E, mp4a.40.2",Py[345]="avc1.42E01E, mp4a.40.2",Py[346]="avc1.42E01E, mp4a.40.2",Py[347]="avc1.4D001F, mp4a.40.2",Py[396]=
"av01.0.05M.08",Py[398]="av01.0.05M.08",Py);var Ry=RegExp("/itag/(\\d+)/");function Sy(a){var b=Number(yh(a,"itag"));return b?b:(a=a.match(Ry))&&2===a.length?Number(a[1]):null}function Ty(a){var b=Oy[a];a=Qy[a];b?(b=Sg(b).toLowerCase(),b=a?b+'; codecs="'+Sg(a)+'"':b):b="";return b}function Uy(a,b){if("function"===typeof CustomEvent)return new CustomEvent(a,{detail:b});var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!1,!0,b);return c};var Vy=function(a,b){Iy.call(this);var c=this;this.h=b;this.A=this.j=this.g=0;this.l=null;this.uri=new R(a);this.state=0;var d;this.D=null==(d=this.h)?void 0:d.initialize();co(this,function(){bo(c.h)})};u(Vy,Iy);Vy.prototype.F=function(){return this.g};Vy.prototype.B=function(){return 3===this.state};Vy.prototype.G=function(a){1===this.state?(this.g+=a,this.state=2):0===this.state&&(this.g+=a,this.state=1,Wy(this))};
var Wy=function(a){Ha(function(b){if(1==b.g)return 2===a.state&&(a.state=1),xa(b,Xy(a),4);var c=3<a.A;if(c){null===a.l&&(a.l=400);var d=Uy("media_source_error",{code:0<a.j?MediaError.MEDIA_ERR_NETWORK:MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,message:'Response code "'+a.l+'" with '+a.g+" bytes requested and "+a.j+" bytes loaded"});a.dispatchEvent(d)}a.j<a.g&&3!==a.state&&!c?b.g=1:(3!==a.state&&(a.state=0),b.g=0)})},Xy=function(a){var b;return Ha(function(c){switch(c.g){case 1:b=a.j+"-"+(a.g-1);xw(a.uri,
"range",b);if(!a.h){c.g=2;break}return xa(c,a.D,3);case 3:return c.return(Yy(a));case 2:return c.j=4,xa(c,Zy(a),6);case 6:ya(c);break;case 4:za(c),a.A++,c.g=0}})},Yy=function(a){var b;return Ha(function(c){switch(c.g){case 1:return a.h?xa(c,a.h.Nb(a.uri),2):c.return(Promise.reject());case 2:if(b=c.h)return b.va&&(a.state=3),$y(a,b.video),c.return();c.j=3;return xa(c,Zy(a),5);case 5:ya(c);break;case 3:za(c),a.A++,c.g=0}})},Zy=function(a){var b,c,d,e,f,g,h;return Ha(function(k){if(1==k.g)return b=0,
c=a.g-a.j,xa(k,fetch(a.uri.toString()),2);d=k.h;if(400<=d.status)return I(G.g(),"lvlfes",d.status.toString()),a.l=d.status,k.return(Promise.reject());f=null==(e=d.body)?void 0:e.getReader();if(!f)return J("lvlmr"),a.l=d.status,k.return(Promise.reject());g=[];h=function(){var m,n,q,r,v,x;return Ha(function(H){if(1==H.g)return xa(H,f.read(),2);m=H.h;n=m.done;q=m.value;if(n)return r=b<c,az(a,g,r),H.return();g.push(q);b+=null==(v=q)?void 0:v.length;$y(a,null==(x=q)?void 0:x.buffer);return xa(H,h(),0)})};
return xa(k,h(),0)})},az=function(a,b,c){c&&(a.state=3,$y(a,new ArrayBuffer(0)));var d=new Uint8Array(b.reduce(function(g,h){return g+h.length},0)),e=0;b=t(b);for(var f=b.next();!f.done;f=b.next())f=f.value,d.set(f,e),e+=f.length;a.h&&0<d.buffer.byteLength&&a.h.dc(d.buffer,a.uri,0,c)},$y=function(a,b){null!==b&&(b=b.slice(0),a.j+=b.byteLength,a.dispatchEvent({type:"progress",cd:b}))};Vy.prototype.L=function(){var a;(null==(a=this.h)?0:a.Qa())&&this.h.close();Iy.prototype.L.call(this)};var cz=function(a){this.uri=a;this.g=bz(a)},bz=function(a){return new Map(a.j.split("/").reduce(function(b,c,d,e){d%2&&b.set(e[d-1],c);return b},new Map))};cz.prototype.getId=function(){return dz(this,"id")};var ez=function(a){a=a.uri.g.get("range");if(!a)return null;a=a.split("-")[0];return!a||isNaN(Number(a))?null:Number(a)},dz=function(a,b){var c=a.uri.g.get(b);return c?c:(a=a.g.get(b))?a:null};var fz=function(){};var gz=["doubleclick.net"];
function hz(){if(Jb()||z("iPad")||z("iPod"))return!1;if(Ib()){if(void 0===Fw){a:{if(void 0===Dw){if(Hw){var a=pb(Gw(),"Safari");var b=(new R(window.location.href)).g.zb("js");b:{if((b=b.length?b[0]:"")&&0==b.lastIndexOf("afma-",0)){var c=b.lastIndexOf("v");if(-1<c&&(b=b.substr(c+1).match(/^(\d+\.\d+\.\d+|^\d+\.\d+|^\d+)(-.*)?$/))){b=b[1];break b}}b="0.0.0"}if(!a||"0.0.0"!==b){a=Dw=!0;break a}}Dw=!1}a=Dw}a||(void 0===Ew&&(Ew=pb(Gw(),"afma-sdk-a")?!0:!1),a=Ew);Fw=a}return Fw?!0:oh()?!1:iz()}a=Kb()||
(Hb()?"Linux"===wb.platform:z("Linux"))||(Hb()?"Windows"===wb.platform:z("Windows"))||(Hb()?"Chrome OS"===wb.platform:z("CrOS"));return(K(Lk)||K(Jk)||K(Kk))&&a&&Gb()?iz():!1}function iz(){var a=!1,b=(new R(window.location.href)).h;gz.forEach(function(c){b.includes(c)&&(a=!0)});return a};var jz,mz=function(a,b,c){if("number"===typeof a)var d={name:kz(a)};else d=a,a=lz(a.name);this.code=a;this.g=d;b="Error "+b+": "+this.getName();c&&(b+=", "+c);db.call(this,b)};bb(mz,db);mz.prototype.getName=function(){return this.g.name||""};
var nz={hf:1,yh:2,NOT_FOUND_ERR:3,Me:4,Pe:5,zh:6,gf:7,ABORT_ERR:8,cf:9,Th:10,TIMEOUT_ERR:11,bf:12,INVALID_ACCESS_ERR:13,INVALID_STATE_ERR:14},oz=(w.g||w.h||nz).hf,pz=(w.g||w.h||nz).NOT_FOUND_ERR,qz=(w.g||w.h||nz).Me,rz=(w.g||w.h||nz).Pe,sz=(w.g||w.h||nz).gf,tz=(w.g||w.h||nz).ABORT_ERR,uz=(w.g||w.h||nz).cf,vz=(w.g||w.h||nz).TIMEOUT_ERR,wz=(w.g||w.h||nz).bf,xz=(w.DOMException||nz).INVALID_ACCESS_ERR,yz=(w.DOMException||nz).INVALID_STATE_ERR,lz=function(a){switch(a){case "UnknownError":return oz;case "NotFoundError":return pz;
case "ConstraintError":return qz;case "DataError":return rz;case "TransactionInactiveError":return sz;case "AbortError":return tz;case "ReadOnlyError":return uz;case "TimeoutError":return vz;case "QuotaExceededError":return wz;case "InvalidAccessError":return xz;case "InvalidStateError":return yz;default:return oz}},kz=function(a){switch(a){case oz:return"UnknownError";case pz:return"NotFoundError";case qz:return"ConstraintError";case rz:return"DataError";case sz:return"TransactionInactiveError";
case tz:return"AbortError";case uz:return"ReadOnlyError";case vz:return"TimeoutError";case wz:return"QuotaExceededError";case xz:return"InvalidAccessError";case yz:return"InvalidStateError";default:return"UnknownError"}},zz=function(a,b){return"error"in a?new mz(a.error,b):new mz({name:"UnknownError"},b)},Az=function(a,b){return"name"in a?new mz(a,b+": "+a.message):new mz({name:"UnknownError"},b)};var Bz=function(a){this.g=a},Cz=w.IDBKeyRange||w.webkitIDBKeyRange;function Dz(){};/*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
var Ez=function(a,b){this.l=[];this.G=a;this.F=b||null;this.o=this.j=!1;this.h=void 0;this.K=this.H=this.B=!1;this.A=0;this.g=null;this.I=0};bb(Ez,Dz);Ez.prototype.cancel=function(a){if(this.j)this.h instanceof Ez&&this.h.cancel();else{if(this.g){var b=this.g;delete this.g;a?b.cancel(a):(b.I--,0>=b.I&&b.cancel())}this.G?this.G.call(this.F,this):this.K=!0;this.j||Fz(this,new Gz(this))}};Ez.prototype.D=function(a,b){this.B=!1;Hz(this,a,b)};
var Hz=function(a,b,c){a.j=!0;a.h=c;a.o=!b;Iz(a)},Kz=function(a){if(a.j){if(!a.K)throw new Jz(a);a.K=!1}};Ez.prototype.callback=function(a){Kz(this);Hz(this,!0,a)};var Fz=function(a,b){Kz(a);Hz(a,!1,b)};Ez.prototype.Yc=function(a){return Lz(this,a,null)};var Lz=function(a,b,c,d){a.l.push([b,c,d]);a.j&&Iz(a);return a};Ez.prototype.then=function(a,b,c){var d,e,f=new gt(function(g,h){e=g;d=h});Lz(this,e,function(g){g instanceof Gz?f.cancel():d(g);return Mz},this);return f.then(a,b,c)};
Ez.prototype.$goog_Thenable=!0;
var Nz=function(a){return Rb(a.l,function(b){return"function"===typeof b[1]})},Mz={},Iz=function(a){if(a.A&&a.j&&Nz(a)){var b=a.A,c=Oz[b];c&&(w.clearTimeout(c.g),delete Oz[b]);a.A=0}a.g&&(a.g.I--,delete a.g);b=a.h;for(var d=c=!1;a.l.length&&!a.B;){var e=a.l.shift(),f=e[0],g=e[1];e=e[2];if(f=a.o?g:f)try{var h=f.call(e||a.F,b);h===Mz&&(h=void 0);void 0!==h&&(a.o=a.o&&(h==b||h instanceof Error),a.h=b=h);if(et(b)||"function"===typeof w.Promise&&b instanceof w.Promise)d=!0,a.B=!0}catch(k){b=k,a.o=!0,Nz(a)||
(c=!0)}}a.h=b;d&&(h=Za(a.D,a,!0),d=Za(a.D,a,!1),b instanceof Ez?(Lz(b,h,d),b.H=!0):b.then(h,d));c&&(b=new Pz(b),Oz[b.g]=b,a.A=b.g)},Jz=function(){db.call(this)};bb(Jz,db);Jz.prototype.message="Deferred has already fired";Jz.prototype.name="AlreadyCalledError";var Gz=function(){db.call(this)};bb(Gz,db);Gz.prototype.message="Deferred was canceled";Gz.prototype.name="CanceledError";var Pz=function(a){this.g=w.setTimeout(Za(this.j,this),0);this.h=a};
Pz.prototype.j=function(){delete Oz[this.g];throw this.h;};var Oz={};var Qz=function(){Q.call(this)};bb(Qz,Q);Qz.prototype.g=null;Qz.prototype.next=function(a){if(a)this.g["continue"](a);else this.g["continue"]()};Qz.prototype.remove=function(){var a=new Ez;try{var b=this.g["delete"]()}catch(c){return Fz(a,Az(c,"deleting via cursor")),a}b.onsuccess=function(){a.callback()};b.onerror=function(c){Fz(a,zz(c.target,"deleting via cursor"))};return a};Qz.prototype.getValue=function(){return this.g.value};
var Rz=function(a,b){var c=new Qz;try{var d=a.openCursor(b?b.g:null)}catch(e){throw c.W(),Az(e,a.name);}d.onsuccess=function(e){c.g=e.target.result||null;c.g?c.dispatchEvent("n"):c.dispatchEvent("c")};d.onerror=function(){c.dispatchEvent("e")};return c};var Sz=function(a){this.g=a};Sz.prototype.getName=function(){return this.g.name};var Tz=function(a,b,c){var d=new Ez;try{var e=a.g.get(c)}catch(f){return b+=" with key "+zh(c),Fz(d,Az(f,b)),d}e.onsuccess=function(f){d.callback(f.target.result)};e.onerror=function(f){b+=" with key "+zh(c);Fz(d,zz(f.target,b))};return d};Sz.prototype.get=function(a){return Tz(this,"getting from index "+this.getName(),a)};var Uz=function(a,b){return Rz(a.g,b)};var Vz=function(a){this.g=a};Vz.prototype.getName=function(){return this.g.name};var Wz=function(a,b,c,d,e){var f=new Ez;try{var g=e?a.g[b](d,e):a.g[b](d)}catch(h){return c+=zh(d),e&&(c+=", with key "+zh(e)),Fz(f,Az(h,c)),f}g.onsuccess=function(h){f.callback(h.target.result)};g.onerror=function(h){c+=zh(d);e&&(c+=", with key "+zh(e));Fz(f,zz(h.target,c))};return f},Xz=function(a,b){return Wz(a,"put","putting into "+a.getName()+" with value",b)};
Vz.prototype.add=function(a,b){return Wz(this,"add","adding into "+this.getName()+" with value ",a,b)};Vz.prototype.remove=function(a){var b=new Ez;try{var c=this.g["delete"](a instanceof Bz?a.g:a)}catch(e){return c="removing from "+this.getName()+" with key "+zh(a),Fz(b,Az(e,c)),b}c.onsuccess=function(){b.callback()};var d=this;c.onerror=function(e){var f="removing from "+d.getName()+" with key "+zh(a);Fz(b,zz(e.target,f))};return b};
Vz.prototype.get=function(a){var b=new Ez;try{var c=this.g.get(a)}catch(e){return c="getting from "+this.getName()+" with key "+zh(a),Fz(b,Az(e,c)),b}c.onsuccess=function(e){b.callback(e.target.result)};var d=this;c.onerror=function(e){var f="getting from "+d.getName()+" with key "+zh(a);Fz(b,zz(e.target,f))};return b};
Vz.prototype.clear=function(){var a="clearing store "+this.getName(),b=new Ez;try{var c=this.g.clear()}catch(d){return Fz(b,Az(d,a)),b}c.onsuccess=function(){b.callback()};c.onerror=function(d){Fz(b,zz(d.target,a))};return b};var Yz=function(a){try{return new Sz(a.g.index("timestamp"))}catch(b){throw Az(b,"getting index timestamp");}};var Zz=function(a,b){Q.call(this);this.g=a;this.j=b;this.h=new rx(this);this.h.O(this.g,"complete",Za(this.dispatchEvent,this,"complete"));this.h.O(this.g,"abort",Za(this.dispatchEvent,this,"abort"));this.h.O(this.g,"error",this.Re)};bb(Zz,Q);l=Zz.prototype;l.Re=function(a){a.target instanceof mz?this.dispatchEvent({type:"error",target:a.target}):this.dispatchEvent({type:"error",target:zz(a.target,"in transaction")})};
l.objectStore=function(a){try{return new Vz(this.g.objectStore(a))}catch(b){throw Az(b,"getting object store "+a);}};l.commit=function(a){if(this.g.commit||!a)try{this.g.commit()}catch(b){throw Az(b,"cannot commit the transaction");}};l.wait=function(){var a=new Ez;Gs(this,"complete",Za(a.callback,a));var b=Gs(this,"abort",function(){Ps(c);Fz(a,new mz(tz,"waiting for transaction to complete"))});var c=Gs(this,"error",function(e){Ps(b);Fz(a,e.target)});var d=this.j;return a.Yc(function(){return d})};
l.abort=function(){this.g.abort()};l.L=function(){Zz.Da.L.call(this);this.h.W()};var $z=function(a){Q.call(this);this.g=a;this.h=new rx(this);this.h.O(this.g,"abort",Za(this.dispatchEvent,this,"abort"));this.h.O(this.g,"error",this.Se);this.h.O(this.g,"versionchange",this.wf);this.h.O(this.g,"close",Za(this.dispatchEvent,this,"close"))};bb($z,Q);l=$z.prototype;l.td=!0;l.Se=function(a){a=(a=a.target)&&a.error;this.dispatchEvent({type:"error",errorCode:a&&a.severity})};l.wf=function(a){this.dispatchEvent(new aA(a.oldVersion,a.newVersion))};
l.close=function(){this.td&&(this.g.close(),this.td=!1)};l.Qa=function(){return this.td};l.getName=function(){return this.g.name};l.getVersion=function(){return Number(this.g.version)};var bA=function(a){var b=["MediaSourceVideoChunk"];try{var c=a.g.transaction(b,"readwrite");return new Zz(c,a)}catch(d){throw Az(d,"creating transaction");}};$z.prototype.L=function(){$z.Da.L.call(this);this.h.W()};var aA=function(a,b){qs.call(this,"versionchange");this.oldVersion=a;this.newVersion=b};bb(aA,qs);var cA=function(a){var b=new Ez;void 0==jz&&(jz=w.indexedDB||w.mozIndexedDB||w.webkitIndexedDB||w.moz_indexedDB);var c=jz.open("IndexedDbVideoChunkPersistentStorage",6);c.onsuccess=function(d){d=new $z(d.target.result);b.callback(d)};c.onerror=function(d){Fz(b,zz(d.target,"opening database IndexedDbVideoChunkPersistentStorage"))};c.onupgradeneeded=function(d){if(a){var e=new $z(d.target.result);a(new aA(d.oldVersion,d.newVersion),e,new Zz(d.target.transaction,e))}};c.onblocked=function(){};return b};var dA=function(){Q.apply(this,arguments);this.g=null};u(dA,Q);dA.prototype.initialize=function(){var a=this;return Promise.resolve(cA(this.h)).then(function(b){a.g=b},function(b){I(G.g(),"codf",b.message)})};dA.prototype.Qa=function(){return null!==this.g&&this.g.Qa()};dA.prototype.close=function(){var a=this;return(new Promise(function(b){eA(a,b)})).then(function(){return fA()}).then(function(){a.g.close()})};
var fA=function(){var a;return(null==(a=navigator.storage)?0:a.estimate)?navigator.storage.estimate().then(function(b){I(G.g(),"csue",String(b.usage))}):Promise.resolve(void 0)};dA.prototype.Nb=function(a){return(a=gA(a,0))?hA(this,iA(a),a.Cc):Promise.resolve(null)};dA.prototype.dc=function(a,b,c,d){(b=gA(b,c))?(c=b.Kd,jA(this,{hi:iA(b),Kd:c,tc:c+a.byteLength-1,Cc:b.Cc,timestamp:new Date(Date.now()),va:d,sb:b.sb,video:a})):Promise.resolve(void 0)};
dA.prototype.h=function(a,b){if(b.g.objectStoreNames.contains("MediaSourceVideoChunk"))try{b.g.deleteObjectStore("MediaSourceVideoChunk")}catch(d){throw Az(d,"deleting object store MediaSourceVideoChunk");}a={keyPath:"cacheId"};try{var c=new Vz(b.g.createObjectStore("MediaSourceVideoChunk",a))}catch(d){throw Az(d,"creating object store MediaSourceVideoChunk");}b={unique:!1};try{c.g.createIndex("timestamp","timestamp",b)}catch(d){throw Az(d,"creating new index timestamp with key path timestamp");}};
var eA=function(a,b){var c=new Date(Date.now());c.setDate(c.getDate()-30);c=new Bz(Cz.upperBound(c,void 0));var d=Uz(Yz(bA(a.g).objectStore("MediaSourceVideoChunk")),c),e=d.O("n",function(){d.remove();d.next()});Gs(d,"c",function(){Ps(e);b()})},gA=function(a,b){var c=new cz(a);a=c.getId();var d=dz(c,"itag"),e=dz(c,"source"),f=dz(c,"lmt");c=ez(c);var g=[];a?d?e?f?null===c&&g.push("startIndex"):g.push("lmt"):g.push("source"):g.push("itag"):g.push("videoId");return 0<g.length?(I(G.g(),"civp",g.join("-")),
null):{tg:a,sb:d,source:e,Cc:f,Kd:c+b}},iA=function(a){for(var b=[a.tg,a.source,a.Kd].join(),c=0,d=0;d<b.length;d++)c=Math.imul(31,c)+b.charCodeAt(d)|0;return c.toString()+","+a.sb},hA=function(a,b,c){var d=bA(a.g).objectStore("MediaSourceVideoChunk");return Promise.resolve(d.get(b)).then(function(e){if(!e)return I(G.g(),"cenf","1"),null;if(e.Cc!==c)return I(G.g(),"cdl","1"),d.remove(b).then(null,function(f){I(G.g(),"crdlvf",f.message)}),null;I(G.g(),"cefml","1");return{sb:e.sb,tc:e.tc,va:e.va,video:e.video}},
function(e){I(G.g(),"cgvf",e.message);return null})},jA=function(a,b){a=bA(a.g).objectStore("MediaSourceVideoChunk");Promise.resolve(Xz(a,b)).then(function(){I(G.g(),"cavs","1")},function(c){I(G.g(),"cavf",c.message)})};var kA=function(a){Iy.call(this);var b=this;this.D=this.h=this.g=0;this.l=this.H=null;this.uri=new R(a);this.state=0;this.j=(this.A=hz())?Mv(dA):null;co(this,function(){bo(b.j)});this.H=this.A?this.j.initialize():null};u(kA,Iy);kA.prototype.F=function(){return this.g};kA.prototype.B=function(){return 3===this.state};kA.prototype.G=function(a){1===this.state?(this.g+=a,this.state=2):0===this.state&&(this.g+=a,this.state=1,lA(this))};
var lA=function(a){Ha(function(b){if(1==b.g)return 2===a.state&&(a.state=1),xa(b,mA(a),4);var c=3<a.D;if(c&&null!==a.l){var d=Uy("media_source_error",{code:0<a.h?MediaError.MEDIA_ERR_NETWORK:MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,message:'Response code "'+a.l+'" with '+a.g+" bytes requested and "+a.h+" bytes loaded"});a.dispatchEvent(d)}a.h<a.g&&3!==a.state&&!c?b.g=1:(3!==a.state&&(a.state=0),b.g=0)})},mA=function(a){var b;return Ha(function(c){switch(c.g){case 1:b=a.h+"-"+(a.g-1);xw(a.uri,"range",
b);if(!a.A){c.g=2;break}return xa(c,a.H,3);case 3:return c.return(nA(a));case 2:return c.j=4,xa(c,oA(a),6);case 6:ya(c);break;case 4:za(c),a.D++,c.g=0}})},nA=function(a){var b;return Ha(function(c){switch(c.g){case 1:return xa(c,a.j.Nb(a.uri),2);case 2:if(b=c.h){b.va&&(a.state=3);pA(a,b.video,0);c.g=0;break}c.j=4;return xa(c,oA(a),6);case 6:ya(c);break;case 4:za(c),a.D++,c.g=0}})},oA=function(a){return new Promise(function(b,c){var d=new XMLHttpRequest,e=0,f=a.g-a.h;d.addEventListener("load",function(){J("lvlcl");
if(400<=d.status)return I(G.g(),"lvlxes",d.status.toString()),a.l=d.status,c();var g=d.response;g.byteLength<f&&(a.state=3);var h=pA(a,g,e);e+=h;a.A&&0<g.byteLength&&a.j.dc(g,a.uri,0,g.byteLength<f);b()});d.addEventListener("timeout",function(){J("lvlct");a.l=d.status;c()});d.addEventListener("error",function(){J("lvlce");a.l=d.status;c()});d.addEventListener("progress",function(){if(400<=d.status)a.l=d.status;else{var g=pA(a,d.response,e);e+=g}});d.responseType="arraybuffer";d.open("get",a.uri.toString());
d.send(null)})},pA=function(a,b,c){if(null===b)return 0;b=b.slice(c);a.h+=b.byteLength;a.dispatchEvent({type:"progress",cd:b});return b.byteLength};kA.prototype.L=function(){this.A&&this.j.Qa()&&this.j.close();Iy.prototype.L.call(this)};var qA={ti:2E5,ri:7E4,Ga:3E5,pi:5E3,zi:5E3,si:6E3};function rA(){return!!window.MediaSource}function sA(a){return[43,44,45].includes(a)&&Ic?!1:My[a]?(a=Ty(a),!!a&&rA()&&MediaSource.isTypeSupported(a)):!1};var tA=function(){};tA.prototype.Tf=function(a,b,c){return 0===c?1E6:5E3>b-a?3E5:0};var vA=function(a,b){var c=this;this.g=a;this.index=b;this.h=[];this.g||J("msms_sbf"+this.index);this.g.addEventListener("updateend",function(){uA(c)});this.g.addEventListener("error",function(){J("msms_sbe"+c.index)})},uA=function(a){if(0<a.h.length&&!a.g.updating){var b=a.h.shift();a.g.appendBuffer(b)}};var wA=function(){this.g=this.cache=null};l=wA.prototype;l.initialize=function(){var a=this;return window.caches.open("CACHE_VIDEO_CHUNK_PERSISTENT_STORAGE").then(function(b){a.cache=b},function(b){I(G.g(),"codf",b.message)})};l.Qa=function(){return null!==this.cache};l.close=function(){return Promise.resolve()};
l.Nb=function(a){var b=this;a=xA(this,a);return this.Qa()&&a?this.cache.match(a).then(function(c){if(!c)return I(G.g(),"cenf","1"),Promise.resolve(null);I(G.g(),"cef","1");return c.arrayBuffer().then(function(d){var e=ez(b.g),f;(f=b.g.uri.g.get("range"))?(f=f.split("-")[1],f=!f||isNaN(Number(f))?null:Number(f)):f=null;e=e+d.byteLength-1;f=f>e;return{sb:dz(b.g,"itag"),tc:e,va:f,video:d}})},function(c){I(G.g(),"cgvf",c.message);return Promise.resolve(null)}):(I(G.g(),"cgvf","1"),Promise.resolve(null))};
l.dc=function(a,b){b=xA(this,b);a=new Response(a);this.Qa()&&b?this.cache.put(b,a).then(function(){I(G.g(),"cavs","1")},function(c){I(G.g(),"cavf",c.message)}):(I(G.g(),"cavf","1"),Promise.resolve())};var xA=function(a,b){a.g=new cz(b);b=a.g.getId();var c=dz(a.g,"itag"),d=dz(a.g,"source"),e=dz(a.g,"lmt");a=dz(a.g,"range");if(b&&c&&d&&a)return new Request("http://url/videoplayback?id="+b+"&itag="+c+"&source="+d+"&lmt="+e+"&range="+a);I(G.g(),"civp","1");return null};var AA=function(a){Q.call(this);var b=this;this.j=a;this.g=[];this.A=null;this.B=0;this.J=!1;this.F=0;this.D=[];if(K(bl)){var c=null;hz()&&(K(dl)?c=Mv(wA):c=Mv(dA));this.l=this.j.map(function(d){return Mv(Vy,d.url,c)})}else this.l=this.j.map(function(d){return Mv(kA,d.url)});this.h=Mv(MediaSource);this.G=function(){yA(b)};this.h.addEventListener("sourceopen",this.G);this.H=zA(this)};u(AA,Q);
var zA=function(a){for(var b=[],c=0;c<a.j.length;++c)b.push(new tA);return b},yA=function(a){J("msms_oso");for(var b={xa:0};b.xa<a.j.length;b={Bd:void 0,Dc:void 0,kb:void 0,xa:b.xa,Ec:void 0},++b.xa){var c=a.j[b.xa];I(G.g(),"msms_mime"+b.xa,c.mimeType);I(G.g(),"msms_cs"+b.xa,c.Ga.toString());K(cl)?(b.Bd=new vA(a.h.addSourceBuffer(c.mimeType),b.xa),b.Dc=a.l[b.xa],b.Dc.O("progress",function(d){return function(e){var f=d.Bd,g=d.Dc;e=e.cd;0!==e.byteLength&&(f.h.push(e),uA(f));g.B()&&(a.B++,a.B===a.g.length&&
BA(a))}}(b)),b.Dc.O("media_source_error",function(d){a.dispatchEvent(d)}),a.g.push(b.Bd.g)):(b.kb=a.h.addSourceBuffer(c.mimeType),b.kb?(b.Ec=a.l[b.xa],K(bl)&&b.kb.addEventListener("updateend",function(d){return function(){if(0<a.D.length&&!d.kb.updating){var e=a.D.shift();d.kb.appendBuffer(e)}}}(b)),b.kb.addEventListener("error",function(d){return function(){J("msms_sbe"+d.xa)}}(b)),b.Ec.O("progress",function(d){return function(e){var f=d.kb,g=d.Ec;e=e.cd;0!==e.byteLength&&(K(bl)?f.updating?a.D.push(e):
f.appendBuffer(e):f.appendBuffer(e));g.B()&&(a.B++,a.B===a.g.length&&BA(a))}}(b)),b.Ec.O("media_source_error",function(d){a.dispatchEvent(d)}),a.g.push(b.kb)):J("msms_sbf"+b.xa))}I(G.g(),"msms_ns",a.g.length.toString());a.J=!0;CA(a)},BA=function(a){Promise.all(a.g.map(function(b){return new Promise(function(c){b.updating?b.addEventListener("updateend",function(){c()}):c()})})).then(function(){a.h.endOfStream()})},CA=function(a){if(a.J)for(var b=0;b<a.j.length;++b){var c=a.l[b],d=a.g[b];d=0===d.buffered.length?
0:1E3*d.buffered.end(0);d=a.H[b].Tf(a.F,d,c.F());0!==d&&c.G(d)}},DA=function(a){a.A=Dh(a.h