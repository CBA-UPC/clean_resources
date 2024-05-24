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
/*****************
 * Above the Feed *
 *****************/
._cm-above-the-feed-container {
  border-radius: 16px 16px 0 0;
}
._cm-above-the-feed-title-wrapper {
  z-index: 1000;
}
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
