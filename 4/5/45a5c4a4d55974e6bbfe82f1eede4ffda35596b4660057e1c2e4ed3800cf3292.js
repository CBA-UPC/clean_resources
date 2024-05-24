ps-infobox.horizontal {
  min-height: 43px;
  max-height: 43px;
  text-align: left;
}

.ps-city.horizontal {
  white-space: nowrap;
  min-width: 177px;
  display: inline-block;
  text-align: center;
}

.ps-store.horizontal,
.ps-next-ad.horizontal {
  float: right;
  margin: 2px;
}

.ps-location.horizontal svg {
  margin-right: 2px;
  margin-left: 10px;
  display: inline-block;
}


.ps-picto.vertical {
  margin-left: 100%;
}

.ps-infobox.vertical {
  max-height: 180px;
  min-height: 180px;
  margin-top: 0;
}

.ps-location.vertical svg {
  display: block;
  margin: 15px auto auto;
}

.ps-city.vertical {
  display: block;
  white-space: initial;
  text-align: center;
  padding: 10px 10px 20px;
}

.ps-location.vertical {
  margin-left: 0;
  width: 116px;
  display: block;
}

.ps-actions.vertical {
  display: block;
  width: 116px;
  text-align: center;
}

.ps-store.vertical,
.ps-next-ad.vertical {
  float: none;
  margin: 0;
  display: inline-block;
}

.ps-ad.vertical {
  top: -233px;
}
div[id^="proxistore_"] {
  overflow: hidden;
}

.ps-infobox {
  position: relative;
  z-index: 1;
  width: 0;
  margin: 4px 2px 2px 4px;
  overflow: hidden;
  border-radius: 3px;
  background: #ffffff;
  -webkit-transition-property: width;
  /* Safari */
  -webkit-transition-duration: 1s;
  /* Safari */
  transition-property: width;
  transition-duration: 1s;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  float: right;
  height: 43px;
}

.ps-picto {
  position: relative;
  z-index: 1;
  margin: 4px 4px 4px 2px;
  width: 38px;
  height: 43px;
  text-align: center;
  border-radius: 3px;
  background: #000000;
  opacity: 0.5;
  filter: alpha(opacity=50);
  /* For IE8 and earlier */
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  float: right;
  cursor: pointer;
}

.ps-picto svg {
  width: 23px;
  height: 43px;
  fill: #fff;
  display: inline-block;
}

.ps-picto:hover {
  opacity: 0.8;
  filter: alpha(opacity=80);
  /* For IE8 and earlier */
}

.ps-city {
  text-decoration: none;
  color: #000000;
  max-width: 137px;
  overflow: hidden;
  vertical-align: middle;
  text-overflow: ellipsis;
  font-family: sans-serif;
  font-size: 13px;
}

.ps-store,
.ps-next-ad {
  border: solid 1px #e7e7e7;
  border-radius: 3px;
  width: 34px;
  height: 37px;
  text-align: center;
}

.ps-store svg,
.ps-next-ad svg {
  width: 17px;
  height: 37px;
  display: inline-block;
}

.ps-location svg {
  vertical-align: middle;
  width: 17px;
  height: 43px;
  display: inline-block;
}

.ps-next-ad {
  margin-left: 0;
  cursor: pointer;
}

.ps-ad {
  position: absolute;
  top: 0;
}

.ps-ad-img {
  width: 100%;
  height: 100%;
  z-index: 0 !important;
}
/* TEST */

.pxs-custom-proxistore-local {
  color: #508CD8!important;
}

.pxs-custom-proxistore-local .pxs-link {
  color: #2A4D87!important;
}
.pxs-modal {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 999;
  /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}

/* Modal Content/Box */

.pxs-modal-content {
  margin: 15% auto;
  /* 15% from the top and centered */
  width: 80%;
  /* Could be more or less, depending on screen size */
  position: relative;
}

/* The Close Button */

.pxs-modal-close {
  background-color: #ffdc00;
  border-radius: 50px;
  position: absolute;
  top: 24px;
  right: 20px;
  height: 38px;
  width: 38px;
  font-size: 32px;
  line-height: 40px;
  color: #000;
  cursor: pointer;
}

.pxs-modal-close svg {
  height: 38px;
  width: 38px;
  position: relative;
  top: 0;
  left: 0;
}

.pxs-modal-close:hover,
.pxs-modal-close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.pxs-widget {
  display: block;
  font-family: sans-serif;
  font-size: 13px;
  color: #4f4f4f;
}

.pxs-container {
  position: relative;
  display: inline-block;
  margin-left: 15px;
  padding-left: 40px;
  border-left: 1px solid #e4e4e4;
}

.pxs-dot {
  position: absolute;
  display: inline-block;
  left: 10px;
}

.pxs-desc {
  color: #aaa;
}

a.pxs-reloc:hover,
a.pxs-more:hover {
  color: #333;
}

.pxs-location .pxs-unknown {
  fill: red;
}

.pxs-location .pxs-ip-qualified {
  fill: grey;
}

.pxs-location .pxs-ip-disqualified {
  fill: grey;
}

.pxs-location .pxs-html5 {
  fill: #11bc49;
}

.pxs-location .pxs-manual {
  fill: #11bc49;
}

.pxs-link {
  color: #777;
  cursor: pointer;
  text-decoration: underline;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  outline: inherit;
}

.pxs-link:hover,
.pxs-link:focus {
  color: #4f4f4f;
}

@media all and (max-width: 768px) {
  .pxs-mini .pxs-more,
  .pxs-mini .pxs-country,
  .pxs-mini .pxs-desc,
  .pxs-mini .pxs-reloc,
  .pxs-mini .pxs-link {
    display: none;
  }

  .pxs-mini .pxs-dot {
    margin-bottom: 0;
  }

  .pxs-mini .pxs-more,
  .pxs-mini .pxs-country,
  .pxs-mini .pxs-desc,
  .pxs-mini .pxs-reloc,
  .pxs-mini .pxs-link {
    display: none;
  }

  .pxs-mini .pxs-dot {
    margin-bottom: 0;
    margin-right: 15px;
  }

  .pxs-widget {
    text-align: center;
  }

  .pxs-country {
    display: block;
  }

  .pxs-container {
    border: none;
    padding: 0;
    margin: 0;
  }

  .pxs-location {
    display: block;
  }

  .pxs-desc {
    display: block;
    margin-bottom: 5px;
  }

  .pxs-sep {
    display: none;
  }

  .pxs-dot {
    display: inline-block;
    position: relative;
    top: 5px;
    margin-right: 15px;
    margin-bottom: 5px;
  }

  .pxs-reloc {
    display: block;
  }

  .pxs-more {
    margin-top: 5px;
    display: inline-block;
  }

  .pxs-modal-content {
    width: 95%;
  }
}

/* THEMES */

.pxs-theme-dark {
  color: white;
}

.pxs-theme-dark .pxs-link {
  color: #cacaca;
}

@media only screen
and (min-device-width: 320px)
and (max-device-width: 568px)
and (-webkit-min-device-pixel-ratio: 2)
and (orientation: portrait) {
  #px-toolbar > p {
    font-size: 12px !important;
  }

  #px-toolbar > ul {
    display: flex !important;
    position: relative !important;
  }
}

#px-toolbar {
  width: 300px;
  height: 66px;
  background-color: #343434;
  color: white;
  font-family: Georgia, serif;
  border-radius: 10px;
  display: none;
  position: fixed;
  right: 10px;
  bottom: 50px;
  border: 1px solid #ededed;
  z-index: 9999999;
}

#px-toolbar > p {
  padding-left: 10px;
  margin-top: 10px;
  font-size: 15px;
  position: relative;
  line-height: 20px;
}

#px-toolbar > ul {
  list-style: none;
  font-size: 10px;
  display: none;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  right: 8px;
  height: inherit;
  background-color: #343434;
  padding: 1px 0px;
  margin: 0px;
  height: 100%;
}

#px-toolbar > ul > li:first-child {
  border-bottom: 1px solid whitesmoke;
}

#px-toolbar > ul > li {
  padding: 8px 10px;
  border-radius: 10px;
  font-size: 11px;
  border-left: 1px solid whitesmoke;
  margin: 0 0 0 12px;
  height: 48%;
}

#px-toolbar > ul > li > a {
  color: white;
}

#px-toolbar > ul > li:active {
  background-color: rgb(145, 220, 90);
}

.pxs-slideInRight {
  -webkit-animation-name: pxs-slideInRight;
  animation-name: pxs-slideInRight;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes pxs-slideInRight {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    visibility: visible;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes pxs-slideInRight {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    visibility: visible;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

.pxs-slideOutRight {
  -webkit-animation-name: pxs-slideOutRight;
  animation-name: pxs-slideOutRight;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes pxs-slideOutRight {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    visibility: hidden;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

@keyframes pxs-slideOutRight {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    visibility: hidden;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

.pxs-turn {
  animation: turn .5s 15;
  backface-visibility: visible;
}

@keyframes turn {
  0% {
    -webkit-transform: translateZ(90px) rotateY(180deg);
    transform: translateZ(90px) rotateY(180deg);
  }

  100% {
    -webkit-transform: translateZ(90px) rotateY(360deg);
    transform: translateZ(90px) rotateY(360deg);
  }
}ask-outside {
    fill-opacity: 0;
}

.highcharts-navigator-mask-inside {
    fill: #6685c2;
    /* navigator.maskFill option */
    fill-opacity: 0.25;
    cursor: ew-resize;
}

.highcharts-navigator-outline {
    stroke: #cccccc;
    fill: none;
}

.highcharts-navigator-handle {
    stroke: #cccccc;
    fill: #f2f2f2;
    cursor: ew-resize;
}

.highcharts-navigator-series {
    fill: #335cad;
    stroke: #335cad;
}

.highcharts-navigator-series .highcharts-graph {
    stroke-width: 1px;
}

.highcharts-navigator-series .highcharts-area {
    fill-opacity: 0.05;
}

.highcharts-navigator-xaxis .highcharts-axis-line {
    stroke-width: 0;
}

.highcharts-navigator-xaxis .highcharts-grid-line {
    stroke-width: 1px;
    stroke: #e6e6e6;
}

.highcharts-navigator-xaxis.highcharts-axis-labels {
    fill: #999999;
}

.highcharts-navigator-yaxis .highcharts-grid-line {
    stroke-width: 0;
}

.highcharts-scrollbar-thumb {
    fill: #cccccc;
    stroke: #cccccc;
    stroke-width: 1px;
}

.highcharts-scrollbar-button {
    fill: #e6e6e6;
    stroke: #cccccc;
    stroke-width: 1px;
}

.highcharts-scrollbar-arrow {
    fill: #666666;
}

.highcharts-scrollbar-rifles {
    stroke: #666666;
    stroke-width: 1px;
}

.highcharts-scrollbar-track {
    fill: #f2f2f2;
    stroke: #f2f2f2;
    stroke-width: 1px;
}

.highcharts-button {
    fill: #f7f7f7;
    stroke: #cccccc;
    cursor: default;
    stroke-width: 1px;
    transition: fill 250ms;
}

.highcharts-button text {
    fill: #333333;
}

.highcharts-button-hover {
    transition: fill 0ms;
    fill: #e6e6e6;
    stroke: #333333;
}

.highcharts-button-pressed {
    font-weight: bold;
    fill: #e6ebf5;
    stroke: #335cad;
}

.highcharts-button-disabled text {
    fill: #cccccc;
}

.highcharts-range-selector-buttons .highcharts-button {
    stroke-width: 0;
}

.highcharts-range-label rect {
    fill: none;
}

.highcharts-range-label text {
    fill: #666666;
}

.highcharts-range-input rect {
    fill: none;
}

.highcharts-range-input text {
    fill: #333333;
}

input.highcharts-range-selector {
    position: absolute;
    border: 0;
    width: 1px;
    /* Chrome needs a pixel to see it */
    height: 1px;
    padding: 0;
    text-align: center;
    left: -9em;
    /* #4798 */
}

.highcharts-crosshair-label text {
    fill: #ffffff;
    font-size: 1.1em;
}

.highcharts-crosshair-label .highcharts-label-box {
    fill: inherit;
}

.highcharts-candlestick-series .highcharts-point {
    stroke: #000000;
    stroke-width: 1px;
}

.highcharts-candlestick-series .highcharts-point-up {
    fill: #ffffff;
}

.highcharts-ohlc-series .highcharts-point-hover {
    stroke-width: 3px;
}

.highcharts-flags-series .highcharts-point .highcharts-label-box {
    stroke: #999999;
    fill: #ffffff;
    transition: fill 250ms;
}

.highcharts-flags-series .highcharts-point-hover .highcharts-label-box {
    stroke: #000000;
    fill: #ccd6eb;
}

.highcharts-flags-series .highcharts-point text {
    fill: #000000;
    font-size: 0.9em;
    font-weight: bold;
}

/* Highmaps */
.highcharts-map-series .highcharts-point {
    transition: fill 500ms, fill-opacity 500ms, stroke-width 250ms;
    stroke: #cccccc;
}

.highcharts-map-series .highcharts-point-hover {
    transition: fill 0ms, fill-opacity 0ms;
    fill-opacity: 0.5;
    stroke-width: 2px;
}

.highcharts-mapline-series .highcharts-point {
    fill: none;
}

.highcharts-heatmap-series .highcharts-point {
    stroke-width: 0;
}

.highcharts-map-navigation {
    font-size: 1.3em;
    font-weight: bold;
    text-align: center;
}

.highcharts-coloraxis {
    stroke-width: 0;
}

.highcharts-coloraxis-marker {
    fill: #999999;
}

.highcharts-null-point {
    fill: #f7f7f7;
}

/* 3d charts */
.highcharts-3d-frame {
    fill: transparent;
}

/* Exporting module */
.highcharts-contextbutton {
    fill: #ffffff;
    /* needed to capture hover */
    stroke: none;
    stroke-linecap: round;
}

.highcharts-contextbutton:hover {
    fill: #e6e6e6;
    stroke: #e6e6e6;
}

.highcharts-button-symbol {
    stroke: #666666;
    stroke-width: 3px;
}

.highcharts-menu {
    border: 1px solid #999999;
    background: #ffffff;
    padding: 5px 0;
    box-shadow: 3px 3px 10px #888;
}

.highcharts-menu-item {
    padding: 0.5em 1em;
    background: none;
    color: #333333;
    cursor: pointer;
    transition: background 250ms, color 250ms;
}

.highcharts-menu-item:hover {
    background: #335cad;
    color: #ffffff;
}

/* Drilldown module */
.highcharts-drilldown-point {
    cursor: pointer;
}

.highcharts-drilldown-data-label text,
text.highcharts-drilldown-data-label,
.highcharts-drilldown-axis-label {
    cursor: pointer;
    fill: #003399;
    font-weight: bold;
    text-decoration: underline;
}

/* No-data module */
.highcharts-no-data text {
    font-weight: bold;
    font-size: 12px;
    fill: #666666;
}

/* Drag-panes module */
.highcharts-axis-resizer {
    cursor: ns-resize;
    stroke: black;
    stroke-width: 2px;
}

/* Bullet type series */
.highcharts-bullet-target {
    stroke-width: 0;
}

/* Lineargauge type series */
.highcharts-lineargauge-target {
    stroke-width: 1px;
    stroke: #333333;
}

.highcharts-lineargauge-target-line {
    stroke-width: 1px;
    stroke: #333333;
}