/*! instant.page v5.1.0 - (C) 2019-2020 Alexandre Dieulot - https://instant.page/license */
let t,e;const n=new Set,o=document.createElement("link"),i=o.relList&&o.relList.supports&&o.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype,s="instantAllowQueryString"in document.body.dataset,a="instantAllowExternalLinks"in document.body.dataset,r="instantWhitelist"in document.body.dataset,c="instantMousedownShortcut"in document.body.dataset,d=1111;let l=65,u=!1,f=!1,m=!1;if("instantIntensity"in document.body.dataset){const t=document.body.dataset.instantIntensity;if("mousedown"==t.substr(0,"mousedown".length))u=!0,"mousedown-only"==t&&(f=!0);else if("viewport"==t.substr(0,"viewport".length))navigator.connection&&(navigator.connection.saveData||navigator.connection.effectiveType&&navigator.connection.effectiveType.includes("2g"))||("viewport"==t?document.documentElement.clientWidth*document.documentElement.clientHeight<45e4&&(m=!0):"viewport-all"==t&&(m=!0));else{const e=parseInt(t);isNaN(e)||(l=e)}}if(i){const n={capture:!0,passive:!0};if(f||document.addEventListener("touchstart",function(t){e=performance.now();const n=t.target.closest("a");if(!h(n))return;v(n.href)},n),u?c||document.addEventListener("mousedown",function(t){const e=t.target.closest("a");if(!h(e))return;v(e.href)},n):document.addEventListener("mouseover",function(n){if(performance.now()-e<d)return;const o=n.target.closest("a");if(!h(o))return;o.addEventListener("mouseout",p,{passive:!0}),t=setTimeout(()=>{v(o.href),t=void 0},l)},n),c&&document.addEventListener("mousedown",function(t){if(performance.now()-e<d)return;const n=t.target.closest("a");if(t.which>1||t.metaKey||t.ctrlKey)return;if(!n)return;n.addEventListener("click",function(t){1337!=t.detail&&t.preventDefault()},{capture:!0,passive:!1,once:!0});const o=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1,detail:1337});n.dispatchEvent(o)},n),m){let t;(t=window.requestIdleCallback?t=>{requestIdleCallback(t,{timeout:1500})}:t=>{t()})(()=>{const t=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){const n=e.target;t.unobserve(n),v(n.href)}})});document.querySelectorAll("a").forEach(e=>{h(e)&&t.observe(e)})})}}function p(e){e.relatedTarget&&e.target.closest("a")==e.relatedTarget.closest("a")||t&&(clearTimeout(t),t=void 0)}function h(t){if(t&&t.href&&(!r||"instant"in t.dataset)&&(a||t.origin==location.origin||"instant"in t.dataset)&&["http:","https:"].includes(t.protocol)&&("http:"!=t.protocol||"https:"!=location.protocol)&&(s||!t.search||"instant"in t.dataset)&&!(t.hash&&t.pathname+t.search==location.pathname+location.search||"noInstant"in t.dataset))return!0}function v(t){if(n.has(t))return;const e=document.createElement("link");e.rel="prefetch",e.href=t,document.head.appendChild(e),n.add(t)}AOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYADQBvAAEAAAAAAAoAGgDSAAMAAQQJAAEAGgANAAMAAQQJAAIADgCdAAMAAQQJAAMAGgBVAAMAAQQJAAQAGgC4AAMAAQQJAAUAFgAyAAMAAQQJAAYAGgB8AAMAAQQJAAoANADsd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==") format("truetype");
  font-weight: normal;
  font-style: normal;
}

[class^="w-icon-"], [class*=" w-icon-"] {
  speak: none;
  font-variant: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  font-family: webflow-icons !important;
}

.w-icon-slider-right:before {
  content: "";
}

.w-icon-slider-left:before {
  content: "";
}

.w-icon-nav-menu:before {
  content: "";
}

.w-icon-arrow-down:before, .w-icon-dropdown-toggle:before {
  content: "";
}

.w-icon-file-upload-remove:before {
  content: "";
}

.w-icon-file-upload-icon:before {
  content: "";
}

* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  min-height: 100%;
  color: #333;
  background-color: #fff;
  margin: 0;
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
}

img {
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
}

html.w-mod-touch * {
  background-attachment: scroll !important;
}

.w-block {
  display: block;
}

.w-inline-block {
  max-width: 100%;
  display: inline-block;
}

.w-clearfix:before, .w-clearfix:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-clearfix:after {
  clear: both;
}

.w-hidden {
  display: none;
}

.w-button {
  color: #fff;
  line-height: inherit;
  cursor: pointer;
  background-color: #3898ec;
  border: 0;
  border-radius: 0;
  padding: 9px 15px;
  text-decoration: none;
  display: inline-block;
}

input.w-button {
  -webkit-appearance: button;
}

html[data-w-dynpage] [data-w-cloak] {
  color: rgba(0, 0, 0, 0) !important;
}

.w-code-block {
  margin: unset;
}

.w-webflow-badge, .w-webflow-badge * {
  z-index: auto;
  visibility: visible;
  box-sizing: border-box;
  width: auto;
  height: auto;
  max-height: none;
  max-width: none;
  min-height: 0;
  min-width: 0;
  float: none;
  clear: none;
  box-shadow: none;
  opacity: 1;
  direction: ltr;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  font-size: inherit;
  line-height: inherit;
  font-style: inherit;
  font-variant: inherit;
  text-align: inherit;
  letter-spacing: inherit;
  -webkit-text-decoration: inherit;
  text-decoration: inherit;
  text-indent: 0;
  text-transform: inherit;
  text-shadow: none;
  font-smoothing: auto;
  vertical-align: baseline;
  cursor: inherit;
  white-space: inherit;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  background: none;
  border: 0 rgba(0, 0, 0, 0);
  border-radius: 0;
  margin: 0;
  padding: 0;
  list-style-type: disc;
  transition: none;
  display: block;
  position: static;
  top: auto;
  bottom: auto;
  left: auto;
  right: auto;
  overflow: visible;
  transform: none;
}

.w-webflow-badge {
  white-space: nowrap;
  cursor: pointer;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 0, 0, .1);
  visibility: visible !important;
  z-index: 2147483647 !important;
  color: #aaadb0 !important;
  opacity: 1 !important;
  width: auto !important;
  height: auto !important;
  background-color: #fff !important;
  border-radius: 3px !important;
  margin: 0 !important;
  padding: 6px !important;
  font-size: 12px !important;
  line-height: 14px !important;
  text-decoration: none !important;
  display: inline-block !important;
  position: fixed !important;
  top: auto !important;
  bottom: 12px !important;
  left: auto !important;
  right: 12px !important;
  overflow: visible !important;
  transform: none !important;
}

.w-webflow-badge > img {
  visibility: visible !important;
  opacity: 1 !important;
  vertical-align: middle !important;
  display: inline-block !important;
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: 10px;
  font-weight: bold;
}

h1 {
  margin-top: 20px;
  font-size: 38px;
  line-height: 44px;
}

h2 {
  margin-top: 20px;
  font-size: 32px;
  line-height: 36px;
}

h3 {
  margin-top: 20px;
  font-size: 24px;
  line-height: 30px;
}

h4 {
  margin-top: 10px;
  font-size: 18px;
  line-height: 24px;
}

h5 {
  margin-top: 10px;
  font-size: 14px;
  line-height: 20px;
}

h6 {
  margin-top: 10px;
  font-size: 12px;
  line-height: 18px;
}

p {
  margin-top: 0;
  margin-bottom: 10px;
}

blockquote {
  border-left: 5px solid #e2e2e2;
  margin: 0 0 10px;
  padding: 10px 20px;
  font-size: 18px;
  line-height: 22px;
}

figure {
  margin: 0 0 10px;
}

figcaption {
  text-align: center;
  margin-top: 5px;
}

ul, ol {
  margin-top: 0;
  margin-bottom: 10px;
  padding-left: 40px;
}

.w-list-unstyled {
  padding-left: 0;
  list-style: none;
}

.w-embed:before, .w-embed:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-embed:after {
  clear: both;
}

.w-video {
  width: 100%;
  padding: 0;
  position: relative;
}

.w-video iframe, .w-video object, .w-video embed {
  width: 100%;
  height: 100%;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

button, [type="button"], [type="reset"] {
  cursor: pointer;
  -webkit-appearance: button;
  border: 0;
}

.w-form {
  margin: 0 0 15px;
}

.w-form-done {
  text-align: center;
  background-color: #ddd;
  padding: 20px;
  display: none;
}

.w-form-fail {
  background-color: #ffdede;
  margin-top: 10px;
  padding: 10px;
  display: none;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
  display: block;
}

.w-input, .w-select {
  width: 100%;
  height: 38px;
  color: #333;
  vertical-align: middle;
  background-color: #fff;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 1.42857;
  display: block;
}

.w-input:-moz-placeholder, .w-select:-moz-placeholder {
  color: #999;
}

.w-input::-moz-placeholder, .w-select::-moz-placeholder {
  color: #999;
  opacity: 1;
}

.w-input::-webkit-input-placeholder, .w-select::-webkit-input-placeholder {
  color: #999;
}

.w-input:focus, .w-select:focus {
  border-color: #3898ec;
  outline: 0;
}

.w-input[disabled], .w-select[disabled], .w-input[readonly], .w-select[readonly], fieldset[disabled] .w-input, fieldset[disabled] .w-select {
  cursor: not-allowed;
}

.w-input[disabled]:not(.w-input-disabled), .w-select[disabled]:not(.w-input-disabled), .w-input[readonly], .w-select[readonly], fieldset[disabled]:not(.w-input-disabled) .w-input, fieldset[disabled]:not(.w-input-disabled) .w-select {
  background-color: #eee;
}

textarea.w-input, textarea.w-select {
  height: auto;
}

.w-select {
  background-color: #f3f3f3;
}

.w-select[multiple] {
  height: auto;
}

.w-form-label {
  cursor: pointer;
  margin-bottom: 0;
  font-weight: normal;
  display: inline-block;
}

.w-radio {
  margin-bottom: 5px;
  padding-left: 20px;
  display: block;
}

.w-radio:before, .w-radio:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-radio:after {
  clear: both;
}

.w-radio-input {
  float: left;
  margin: 3px 0 0 -20px;
  line-height: normal;
}

.w-file-upload {
  margin-bottom: 10px;
  display: block;
}

.w-file-upload-input {
  width: .1px;
  height: .1px;
  opacity: 0;
  z-index: -100;
  position: absolute;
  overflow: hidden;
}

.w-file-upload-default, .w-file-upload-uploading, .w-file-upload-success {
  color: #333;
  display: inline-block;
}

.w-file-upload-error {
  margin-top: 10px;
  display: block;
}

.w-file-upload-default.w-hidden, .w-file-upload-uploading.w-hidden, .w-file-upload-error.w-hidden, .w-file-upload-success.w-hidden {
  display: none;
}

.w-file-upload-uploading-btn {
  cursor: pointer;
  background-color: #fafafa;
  border: 1px solid #ccc;
  margin: 0;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: normal;
  display: flex;
}

.w-file-upload-file {
  background-color: #fafafa;
  border: 1px solid #ccc;
  flex-grow: 1;
  justify-content: space-between;
  margin: 0;
  padding: 8px 9px 8px 11px;
  display: flex;
}

.w-file-upload-file-name {
  font-size: 14px;
  font-weight: normal;
  display: block;
}

.w-file-remove-link {
  width: auto;
  height: auto;
  cursor: pointer;
  margin-top: 3px;
  margin-left: 10px;
  padding: 3px;
  display: block;
}

.w-icon-file-upload-remove {
  margin: auto;
  font-size: 10px;
}

.w-file-upload-error-msg {
  color: #ea384c;
  padding: 2px 0;
  display: inline-block;
}

.w-file-upload-info {
  padding: 0 12px;
  line-height: 38px;
  display: inline-block;
}

.w-file-upload-label {
  cursor: pointer;
  background-color: #fafafa;
  border: 1px solid #ccc;
  margin: 0;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: normal;
  display: inline-block;
}

.w-icon-file-upload-icon, .w-icon-file-upload-uploading {
  width: 20px;
  margin-right: 8px;
  display: inline-block;
}

.w-icon-file-upload-uploading {
  height: 20px;
}

.w-container {
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
}

.w-container:before, .w-container:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-container:after {
  clear: both;
}

.w-container .w-row {
  margin-left: -10px;
  margin-right: -10px;
}

.w-row:before, .w-row:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-row:after {
  clear: both;
}

.w-row .w-row {
  margin-left: 0;
  margin-right: 0;
}

.w-col {
  float: left;
  width: 100%;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
}

.w-col .w-col {
  padding-left: 0;
  padding-right: 0;
}

.w-col-1 {
  width: 8.33333%;
}

.w-col-2 {
  width: 16.6667%;
}

.w-col-3 {
  width: 25%;
}

.w-col-4 {
  width: 33.3333%;
}

.w-col-5 {
  width: 41.6667%;
}

.w-col-6 {
  width: 50%;
}

.w-col-7 {
  width: 58.3333%;
}

.w-col-8 {
  width: 66.6667%;
}

.w-col-9 {
  width: 75%;
}

.w-col-10 {
  width: 83.3333%;
}

.w-col-11 {
  width: 91.6667%;
}

.w-col-12 {
  width: 100%;
}

.w-hidden-main {
  display: none !important;
}

@media screen and (max-width: 991px) {
  .w-container {
    max-width: 728px;
  }

  .w-hidden-main {
    display: inherit !important;
  }

  .w-hidden-medium {
    display: none !important;
  }

  .w-col-medium-1 {
    width: 8.33333%;
  }

  .w-col-medium-2 {
    width: 16.6667%;
  }

  .w-col-medium-3 {
    width: 25%;
  }

  .w-col-medium-4 {
    width: 33.3333%;
  }

  .w-col-medium-5 {
    width: 41.6667%;
  }

  .w-col-medium-6 {
    width: 50%;
  }

  .w-col-medium-7 {
    width: 58.3333%;
  }

  .w-col-medium-8 {
    width: 66.6667%;
  }

  .w-col-medium-9 {
    width: 75%;
  }

  .w-col-medium-10 {
    width: 83.3333%;
  }

  .w-col-medium-11 {
    width: 91.6667%;
  }

  .w-col-medium-12 {
    width: 100%;
  }

  .w-col-stack {
    width: 100%;
    left: auto;
    right: auto;
  }
}

@media screen and (max-width: 767px) {
  .w-hidden-main, .w-hidden-medium {
    display: inherit !important;
  }

  .w-hidden-small {
    display: none !important;
  }

  .w-row, .w-container .w-row {
    margin-left: 0;
    margin-right: 0;
  }

  .w-col {
    width: 100%;
    left: auto;
    right: auto;
  }

  .w-col-small-1 {
    width: 8.33333%;
  }

  .w-col-small-2 {
    width: 16.6667%;
  }

  .w-col-small-3 {
    width: 25%;
  }

  .w-col-small-4 {
    width: 33.3333%;
  }

  .w-col-small-5 {
    width: 41.6667%;
  }

  .w-col-small-6 {
    width: 50%;
  }

  .w-col-small-7 {
    width: 58.3333%;
  }

  .w-col-small-8 {
    width: 66.6667%;
  }

  .w-col-small-9 {
    width: 75%;
  }

  .w-col-small-10 {
    width: 83.3333%;
  }

  .w-col-small-11 {
    width: 91.6667%;
  }

  .w-col-small-12 {
    width: 100%;
  }
}

@media screen and (max-width: 479px) {
  .w-container {
    max-width: none;
  }

  .w-hidden-main, .w-hidden-medium, .w-hidden-small {
    display: inherit !important;
  }

  .w-hidden-tiny {
    display: none !important;
  }

  .w-col {
    width: 100%;
  }

  .w-col-tiny-1 {
    width: 8.33333%;
  }

  .w-col-tiny-2 {
    width: 16.6667%;
  }

  .w-col-tiny-3 {
    width: 25%;
  }

  .w-col-tiny-4 {
    width: 33.3333%;
  }

  .w-col-tiny-5 {
    width: 41.6667%;
  }

  .w-col-tiny-6 {
    width: 50%;
  }

  .w-col-tiny-7 {
    width: 58.3333%;
  }

  .w-col-tiny-8 {
    width: 66.6667%;
  }

  .w-col-tiny-9 {
    width: 75%;
  }

  .w-col-tiny-10 {
    width: 83.3333%;
  }

  .w-col-tiny-11 {
    width: 91.6667%;
  }

  .w-col-tiny-12 {
    width: 100%;
  }
}

.w-widget {
  position: relative;
}

.w-widget-map {
  width: 100%;
  height: 400px;
}

.w-widget-map label {
  width: auto;
  display: inline;
}

.w-widget-map img {
  max-width: inherit;
}

.w-widget-map .gm-style-iw {
  text-align: center;
}

.w-widget-map .gm-style-iw > button {
  display: none !important;
}

.w-widget-twitter {
  overflow: hidden;
}

.w-widget-twitter-count-shim {
  vertical-align: top;
  width: 28px;
  height: 20px;
  text-align: center;
  background: #fff;
  border: 1px solid #758696;
  border-radius: 3px;
  display: inline-block;
  position: relative;
}

.w-widget-twitter-count-shim * {
  pointer-events: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.w-widget-twitter-count-shim .w-widget-twitter-count-inner {
  text-align: center;
  color: #999;
  font-family: serif;
  font-size: 15px;
  line-height: 12px;
  position: relative;
}

.w-widget-twitter-count-shim .w-widget-twitter-count-clear {
  display: block;
  position: relative;
}

.w-widget-twitter-count-shim.w--large {
  width: 36px;
  height: 28px;
}

.w-widget-twitter-count-shim.w--large .w-widget-twitter-count-inner {
  font-size: 18px;
  line-height: 18px;
}

.w-widget-twitter-count-shim:not(.w--vertical) {
  margin-left: 5px;
  margin-right: 8px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large {
  margin-left: 6px;
}

.w-widget-twitter-count-shim:not(.w--vertical):before, .w-widget-twitter-count-shim:not(.w--vertical):after {
  content: " ";
  height: 0;
  width: 0;
  pointer-events: none;
  border: solid rgba(0, 0, 0, 0);
  position: absolute;
  top: 50%;
  left: 0;
}

.w-widget-twitter-count-shim:not(.w--vertical):before {
  border-width: 4px;
  border-color: rgba(117, 134, 150, 0) #5d6c7b rgba(117, 134, 150, 0) rgba(117, 134, 150, 0);
  margin-top: -4px;
  margin-left: -9px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large:before {
  border-width: 5px;
  margin-top: -5px;
  margin-left: -10px;
}

.w-widget-twitter-count-shim:not(.w--vertical):after {
  border-width: 4px;
  border-color: rgba(255, 255, 255, 0) #fff rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
  margin-top: -4px;
  margin-left: -8px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large:after {
  border-width: 5px;
  margin-top: -5px;
  margin-left: -9px;
}

.w-widget-twitter-count-shim.w--vertical {
  width: 61px;
  height: 33px;
  margin-bottom: 8px;
}

.w-widget-twitter-count-shim.w--vertical:before, .w-widget-twitter-count-shim.w--vertical:after {
  content: " ";
  height: 0;
  width: 0;
  pointer-events: none;
  border: solid rgba(0, 0, 0, 0);
  position: absolute;
  top: 100%;
  left: 50%;
}

.w-widget-twitter-count-shim.w--vertical:before {
  border-width: 5px;
  border-color: #5d6c7b rgba(117, 134, 150, 0) rgba(117, 134, 150, 0);
  margin-left: -5px;
}

.w-widget-twitter-count-shim.w--vertical:after {
  border-width: 4px;
  border-color: #fff rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
  margin-left: -4px;
}

.w-widget-twitter-count-shim.w--vertical .w-widget-twitter-count-inner {
  font-size: 18px;
  line-height: 22px;
}

.w-widget-twitter-count-shim.w--vertical.w--large {
  width: 76px;
}

.w-background-video {
  height: 500px;
  color: #fff;
  position: relative;
  overflow: hidden;
}

.w-background-video > video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -100;
  background-position: 50%;
  background-size: cover;
  margin: auto;
  position: absolute;
  top: -100%;
  bottom: -100%;
  left: -100%;
  right: -100%;
}

.w-background-video > video::-webkit-media-controls-start-playback-button {
  -webkit-appearance: none;
  display: none !important;
}

.w-background-video--control {
  background-color: rgba(0, 0, 0, 0);
  padding: 0;
  position: absolute;
  bottom: 1em;
  right: 1em;
}

.w-background-video--control > [hidden] {
  display: none !important;
}

.w-slider {
  height: 300px;
  text-align: center;
  clear: both;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
  background: #ddd;
  position: relative;
}

.w-slider-mask {
  z-index: 1;
  height: 100%;
  white-space: nowrap;
  display: block;
  position: relative;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-slide {
  vertical-align: top;
  width: 100%;
  height: 100%;
  white-space: normal;
  text-align: left;
  display: inline-block;
  position: relative;
}

.w-slider-nav {
  z-index: 2;
  height: 40px;
  text-align: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
  margin: auto;
  padding-top: 10px;
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  right: 0;
}

.w-slider-nav.w-round > div {
  border-radius: 100%;
}

.w-slider-nav.w-num > div {
  width: auto;
  height: auto;
  font-size: inherit;
  line-height: inherit;
  padding: .2em .5em;
}

.w-slider-nav.w-shadow > div {
  box-shadow: 0 0 3px rgba(51, 51, 51, .4);
}

.w-slider-nav-invert {
  color: #fff;
}

.w-slider-nav-invert > div {
  background-color: rgba(34, 34, 34, .4);
}

.w-slider-nav-invert > div.w-active {
  background-color: #222;
}

.w-slider-dot {
  width: 1em;
  height: 1em;
  cursor: pointer;
  background-color: rgba(255, 255, 255, .4);
  margin: 0 3px .5em;
  transition: background-color .1s, color .1s;
  display: inline-block;
  position: relative;
}

.w-slider-dot.w-active {
  background-color: #fff;
}

.w-slider-dot:focus {
  outline: none;
  box-shadow: 0 0 0 2px #fff;
}

.w-slider-dot:focus.w-active {
  box-shadow: none;
}

.w-slider-arrow-left, .w-slider-arrow-right {
  width: 80px;
  cursor: pointer;
  color: #fff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: auto;
  font-size: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-slider-arrow-left [class^="w-icon-"], .w-slider-arrow-right [class^="w-icon-"], .w-slider-arrow-left [class*=" w-icon-"], .w-slider-arrow-right [class*=" w-icon-"] {
  position: absolute;
}

.w-slider-arrow-left:focus, .w-slider-arrow-right:focus {
  outline: 0;
}

.w-slider-arrow-left {
  z-index: 3;
  right: auto;
}

.w-slider-arrow-right {
  z-index: 4;
  left: auto;
}

.w-icon-slider-left, .w-icon-slider-right {
  width: 1em;
  height: 1em;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.w-slider-aria-label {
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  border: 0;
  margin: -1px;
  padding: 0;
  position: absolute;
  overflow: hidden;
}

.w-slider-force-show {
  display: block !important;
}

.w-dropdown {
  text-align: left;
  z-index: 900;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  position: relative;
}

.w-dropdown-btn, .w-dropdown-toggle, .w-dropdown-link {
  vertical-align: top;
  color: #222;
  text-align: left;
  white-space: nowrap;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-decoration: none;
  position: relative;
}

.w-dropdown-toggle {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  padding-right: 40px;
  display: inline-block;
}

.w-dropdown-toggle:focus {
  outline: 0;
}

.w-icon-dropdown-toggle {
  width: 1em;
  height: 1em;
  margin: auto 20px auto auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
}

.w-dropdown-list {
  min-width: 100%;
  background: #ddd;
  display: none;
  position: absolute;
}

.w-dropdown-list.w--open {
  display: block;
}

.w-dropdown-link {
  color: #222;
  padding: 10px 20px;
  display: block;
}

.w-dropdown-link.w--current {
  color: #0082f3;
}

.w-dropdown-link:focus {
  outline: 0;
}

@media screen and (max-width: 767px) {
  .w-nav-brand {
    padding-left: 10px;
  }
}

.w-lightbox-backdrop {
  cursor: auto;
  letter-spacing: normal;
  text-indent: 0;
  text-shadow: none;
  text-transform: none;
  visibility: visible;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  color: #fff;
  text-align: center;
  z-index: 2000;
  opacity: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: rgba(0, 0, 0, .9);
  outline: 0;
  font-family: Helvetica Neue, Helvetica, Ubuntu, Segoe UI, Verdana, sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  list-style: disc;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  -webkit-transform: translate(0);
}

.w-lightbox-backdrop, .w-lightbox-container {
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow: auto;
}

.w-lightbox-content {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.w-lightbox-view {
  width: 100vw;
  height: 100vh;
  opacity: 0;
  position: absolute;
}

.w-lightbox-view:before {
  content: "";
  height: 100vh;
}

.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {
  height: 86vh;
}

.w-lightbox-frame, .w-lightbox-view:before {
  vertical-align: middle;
  display: inline-block;
}

.w-lightbox-figure {
  margin: 0;
  position: relative;
}

.w-lightbox-group .w-lightbox-figure {
  cursor: pointer;
}

.w-lightbox-img {
  width: auto;
  height: auto;
  max-width: none;
}

.w-lightbox-image {
  float: none;
  max-width: 100vw;
  max-height: 100vh;
  display: block;
}

.w-lightbox-group .w-lightbox-image {
  max-height: 86vh;
}

.w-lightbox-caption {
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: rgba(0, 0, 0, .4);
  padding: .5em 1em;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-lightbox-embed {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.w-lightbox-control {
  width: 4em;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 24px;
  transition: all .3s;
  position: absolute;
  top: 0;
}

.w-lightbox-left {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==");
  display: none;
  bottom: 0;
  left: 0;
}

.w-lightbox-right {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+");
  display: none;
  bottom: 0;
  right: 0;
}

.w-lightbox-close {
  height: 2.6em;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=");
  background-size: 18px;
  right: 0;
}

.w-lightbox-strip {
  white-space: nowrap;
  padding: 0 1vh;
  line-height: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: auto;
  overflow-y: hidden;
}

.w-lightbox-item {
  width: 10vh;
  box-sizing: content-box;
  cursor: pointer;
  padding: 2vh 1vh;
  display: inline-block;
  -webkit-transform: translate3d(0, 0, 0);
}

.w-lightbox-active {
  opacity: .3;
}

.w-lightbox-thumbnail {
  height: 10vh;
  background: #222;
  position: relative;
  overflow: hidden;
}

.w-lightbox-thumbnail-image {
  position: absolute;
  top: 0;
  left: 0;
}

.w-lightbox-thumbnail .w-lightbox-tall {
  width: 100%;
  top: 50%;
  transform: translate(0, -50%);
}

.w-lightbox-thumbnail .w-lightbox-wide {
  height: 100%;
  left: 50%;
  transform: translate(-50%);
}

.w-lightbox-spinner {
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border: 5px solid rgba(0, 0, 0, .4);
  border-radius: 50%;
  margin-top: -20px;
  margin-left: -20px;
  animation: .8s linear infinite spin;
  position: absolute;
  top: 50%;
  left: 50%;
}

.w-lightbox-spinner:after {
  content: "";
  border: 3px solid rgba(0, 0, 0, 0);
  border-bottom-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: -4px;
  bottom: -4px;
  left: -4px;
  right: -4px;
}

.w-lightbox-hide {
  display: none;
}

.w-lightbox-noscroll {
  overflow: hidden;
}

@media (min-width: 768px) {
  .w-lightbox-content {
    height: 96vh;
    margin-top: 2vh;
  }

  .w-lightbox-view, .w-lightbox-view:before {
    height: 96vh;
  }

  .w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {
    height: 84vh;
  }

  .w-lightbox-image {
    max-width: 96vw;
    max-height: 96vh;
  }

  .w-lightbox-group .w-lightbox-image {
    max-width: 82.3vw;
    max-height: 84vh;
  }

  .w-lightbox-left, .w-lightbox-right {
    opacity: .5;
    display: block;
  }

  .w-lightbox-close {
    opacity: .8;
  }

  .w-lightbox-control:hover {
    opacity: 1;
  }
}

.w-lightbox-inactive, .w-lightbox-inactive:hover {
  opacity: 0;
}

.w-richtext:before, .w-richtext:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-richtext:after {
  clear: both;
}

.w-richtext[contenteditable="true"]:before, .w-richtext[contenteditable="true"]:after {
  white-space: initial;
}

.w-richtext ol, .w-richtext ul {
  overflow: hidden;
}

.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-video div:after, .w-richtext .w-richtext-figure-selected[data-rt-type="video"] div:after, .w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div, .w-richtext .w-richtext-figure-selected[data-rt-type="image"] div {
  outline: 2px solid #2895f7;
}

.w-richtext figure.w-richtext-figure-type-video > div:after, .w-richtext figure[data-rt-type="video"] > div:after {
  content: "";
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.w-richtext figure {
  max-width: 60%;
  position: relative;
}

.w-richtext figure > div:before {
  cursor: default !important;
}

.w-richtext figure img {
  width: 100%;
}

.w-richtext figure figcaption.w-richtext-figcaption-placeholder {
  opacity: .6;
}

.w-richtext figure div {
  color: rgba(0, 0, 0, 0);
  font-size: 0;
}

.w-richtext figure.w-richtext-figure-type-image, .w-richtext figure[data-rt-type="image"] {
  display: table;
}

.w-richtext figure.w-richtext-figure-type-image > div, .w-richtext figure[data-rt-type="image"] > div {
  display: inline-block;
}

.w-richtext figure.w-richtext-figure-type-image > figcaption, .w-richtext figure[data-rt-type="image"] > figcaption {
  caption-side: bottom;
  display: table-caption;
}

.w-richtext figure.w-richtext-figure-type-video, .w-richtext figure[data-rt-type="video"] {
  width: 60%;
  height: 0;
}

.w-richtext figure.w-richtext-figure-type-video iframe, .w-richtext figure[data-rt-type="video"] iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.w-richtext figure.w-richtext-figure-type-video > div, .w-richtext figure[data-rt-type="video"] > div {
  width: 100%;
}

.w-richtext figure.w-richtext-align-center {
  clear: both;
  margin-left: auto;
  margin-right: auto;
}

.w-richtext figure.w-richtext-align-center.w-richtext-figure-type-image > div, .w-richtext figure.w-richtext-align-center[data-rt-type="image"] > div {
  max-width: 100%;
}

.w-richtext figure.w-richtext-align-normal {
  clear: both;
}

.w-richtext figure.w-richtext-align-fullwidth {
  width: 100%;
  max-width: 100%;
  text-align: center;
  clear: both;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.w-richtext figure.w-richtext-align-fullwidth > div {
  padding-bottom: inherit;
  display: inline-block;
}

.w-richtext figure.w-richtext-align-fullwidth > figcaption {
  display: block;
}

.w-richtext figure.w-richtext-align-floatleft {
  float: left;
  clear: none;
  margin-right: 15px;
}

.w-richtext figure.w-richtext-align-floatright {
  float: right;
  clear: none;
  margin-left: 15px;
}

.w-nav {
  z-index: 1000;
  background: #ddd;
  position: relative;
}

.w-nav:before, .w-nav:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-nav:after {
  clear: both;
}

.w-nav-brand {
  float: left;
  color: #333;
  text-decoration: none;
  position: relative;
}

.w-nav-link {
  vertical-align: top;
  color: #222;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.w-nav-link.w--current {
  color: #0082f3;
}

.w-nav-menu {
  float: right;
  position: relative;
}

[data-nav-menu-open] {
  text-align: center;
  min-width: 200px;
  background: #c8c8c8;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  overflow: visible;
  display: block !important;
}

.w--nav-link-open {
  display: block;
  position: relative;
}

.w-nav-overlay {
  width: 100%;
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-nav-overlay [data-nav-menu-open] {
  top: 0;
}

.w-nav[data-animation="over-left"] .w-nav-overlay {
  width: auto;
}

.w-nav[data-animation="over-left"] .w-nav-overlay, .w-nav[data-animation="over-left"] [data-nav-menu-open] {
  z-index: 1;
  top: 0;
  right: auto;
}

.w-nav[data-animation="over-right"] .w-nav-overlay {
  width: auto;
}

.w-nav[data-animation="over-right"] .w-nav-overlay, .w-nav[data-animation="over-right"] [data-nav-menu-open] {
  z-index: 1;
  top: 0;
  left: auto;
}

.w-nav-button {
  float: right;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 18px;
  font-size: 24px;
  display: none;
  position: relative;
}

.w-nav-button:focus {
  outline: 0;
}

.w-nav-button.w--open {
  color: #fff;
  background-color: #c8c8c8;
}

.w-nav[data-collapse="all"] .w-nav-menu {
  display: none;
}

.w-nav[data-collapse="all"] .w-nav-button, .w--nav-dropdown-open, .w--nav-dropdown-toggle-open {
  display: block;
}

.w--nav-dropdown-list-open {
  position: static;
}

@media screen and (max-width: 991px) {
  .w-nav[data-collapse="medium"] .w-nav-menu {
    display: none;
  }

  .w-nav[data-collapse="medium"] .w-nav-button {
    display: block;
  }
}

@media screen and (max-width: 767px) {
  .w-nav[data-collapse="small"] .w-nav-menu {
    display: none;
  }

  .w-nav[data-collapse="small"] .w-nav-button {
    display: block;
  }

  .w-nav-brand {
    padding-left: 10px;
  }
}

@media screen and (max-width: 479px) {
  .w-nav[data-collapse="tiny"] .w-nav-menu {
    display: none;
  }

  .w-nav[data-collapse="tiny"] .w-nav-button {
    display: block;
  }
}

.w-tabs {
  position: relative;
}

.w-tabs:before, .w-tabs:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-tabs:after {
  clear: both;
}

.w-tab-menu {
  position: relative;
}

.w-tab-link {
  vertical-align: top;
  text-align: left;
  cursor: pointer;
  color: #222;
  background-color: #ddd;
  padding: 9px 30px;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.w-tab-link.w--current {
  background-color: #c8c8c8;
}

.w-tab-link:focus {
  outline: 0;
}

.w-tab-content {
  display: block;
  position: relative;
  overflow: hidden;
}

.w-tab-pane {
  display: none;
  position: relative;
}

.w--tab-active {
  display: block;
}

@media screen and (max-width: 479px) {
  .w-tab-link {
    display: block;
  }
}

.w-ix-emptyfix:after {
  content: "";
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

.w-dyn-empty {
  background-color: #ddd;
  padding: 10px;
}

.w-dyn-hide, .w-dyn-bind-empty, .w-condition-invisible {
  display: none !important;
}

.wf-layout-layout {
  display: grid;
}

:root {
  --dark-blue: #0e1c28;
  --light-sea-green: #00bdb0;
  --seashell: #fbf2ef;
  --royal-blue: #365fff;
  --green: #3de0c8;
  --white-smoke-2: #e8edec;
  --light-blue: #caebff;
  --dark-grey: #95a9ac;
  --dark-cyan: #00948a;
  --dark-slate-grey: #01423e;
  --365fff: black;
  --white-smoke: #e7ecec;
  --orange-red: #f74b1c;
}

body {
  color: #333;
  font-family: TT Interphases, sans-serif;
  font-size: 14px;
  line-height: 20px;
}

h1 {
  color: var(--dark-blue);
  margin-top: 20px;
  margin-bottom: 40px;
  font-family: TT Interphases, sans-serif;
  font-size: 70px;
  font-weight: 300;
  line-height: 85px;
}

h2 {
  color: var(--dark-blue);
  margin-top: 15px;
  margin-bottom: 0;
  font-family: TT Interphases, sans-serif;
  font-size: 42px;
  font-weight: 300;
  line-height: 62px;
}

h3 {
  color: var(--dark-blue);
  margin-bottom: 10px;
  font-family: TT Interphases, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 38px;
}

h4 {
  color: #365fff;
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: TT Interphases, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
}

h5 {
  color: #365fff;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: TT Interphases, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}

p {
  color: var(--dark-blue);
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: TT Interphases, sans-serif;
  font-size: 17px;
  font-weight: 300;
  line-height: 32px;
}

a {
  color: var(--light-sea-green);
  border-bottom: 1px #365fff;
  font-family: TT Interphases, sans-serif;
  font-weight: 400;
  text-decoration: none;
}

ul {
  margin-top: 0;
  margin-bottom: 10px;
  padding-left: 20px;
}

li {
  color: var(--dark-blue);
  font-family: TT Interphases, sans-serif;
  font-size: 17px;
  font-weight: 300;
  line-height: 30px;
}

img {
  width: auto;
  border-radius: 6px;
  display: inline-block;
  position: relative;
}

strong {
  width: 400px;
  max-width: 0;
  font-weight: 700;
}

blockquote {
  border-left: 5px solid var(--seashell);
  color: var(--dark-blue);
  margin-top: 10px;
  margin-bottom: 30px;
  padding: 0 20px;
  font-family: TT Interphases, sans-serif;
  font-size: 17px;
  font-weight: 600;
  line-height: 32px;
}

figcaption {
  color: var(--royal-blue);
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  font-family: TT Interphases, sans-serif;
  font-style: italic;
  line-height: 20px;
}

.mobile-menu-link---light {
  float: left;
  clear: none;
  color: #fff;
  margin-top: 4px;
  margin-right: 0;
  padding: 20px;
  font-family: TT Interphases, sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  display: inline-block;
}

.mobile-menu-link---light.only-in-mobile {
  display: none;
}

.dropdown-toggle {
  cursor: pointer;
  padding: 0 15px 0 0;
}

.icon {
  color: var(--green);
  cursor: pointer;
  margin-top: 6px;
  margin-bottom: 0;
  margin-right: 0;
  padding-left: 0;
  font-size: 10px;
}

.dropdown-menu-link {
  float: right;
  color: #fff;
  cursor: pointer;
  margin-top: 4px;
  margin-right: 0;
  padding: 20px;
}

.button-white {
  width: auto;
  height: auto;
  float: none;
  clear: left;
  color: var(--dark-blue);
  text-align: right;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 20px;
  font-family: TT Interphases, sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color .2s cubic-bezier(.55, .085, .68, .53), opacity .2s;
  display: inline-block;
}

.button-white:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, .25);
}

.button-white.contact {
  float: right;
  margin-top: 14px;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 22px;
  padding-right: 22px;
  transition: background-color .2s cubic-bezier(.55, .085, .68, .53), border-width .2s cubic-bezier(.55, .085, .68, .53), color .2s cubic-bezier(.55, .085, .68, .53);
}

.button-white.centered {
  width: auto;
  text-align: center;
  margin: 0 auto;
  font-family: TT Interphases, sans-serif;
  display: inline-block;
}

.button-white.centered.margin-top {
  margin-top: 50px;
}

.button-white.float-right {
  float: right;
  margin-top: 10px;
  margin-right: 0;
}

.contact {
  float: left;
  font-family: TT Interphases, sans-serif;
  font-weight: 400;
  text-decoration: none;
}

.arrow-right {
  width: auto;
  height: 20px;
  float: left;
  margin-left: 6px;
  margin-right: 0;
}

.logo-dark {
  width: 200px;
  opacity: 0;
  margin-top: -15px;
  margin-left: -16px;
  padding-top: 15px;
  padding-bottom: 10px;
  position: absolute;
}

.logo-dark.nav-2 {
  opacity: 1;
}

.h2 {
  color: #fff;
  margin-top: 15px;
  font-family: TT Interphases, sans-serif;
  font-size: 44px;
  line-height: 56px;
}

.h2.dark {
  color: var(--dark-blue);
  font-size: 38px;
  line-height: 48px;
}

.h2.dark.centered {
  max-width: none;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-left: 100px;
  padding-right: 100px;
  font-weight: 600;
}

.h2.dark.centered.margin {
  margin-bottom: 30px;
  padding-left: 40px;
}

.h2.dark.margin {
  padding-right: 40px;
}

.subtitles-blue {
  color: #365fff;
  font-family: TT Interphases, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
}

.subtitles-blue.centered {
  text-align: center;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
}

.paragraph {
  margin-top: 15px;
  font-family: TT Interphases, sans-serif;
  font-size: 17px;
  font-weight: 300;
  line-height: 32px;
}

.paragraph.dark {
  color: var(--dark-blue);
  margin-top: 25px;
  font-size: 17px;
  font-weight: 400;
  line-height: 32px;
}

.paragraph.testimonial {
  color: var(--dark-blue);
  margin-top: 25px;
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
}

.paragraph.green {
  color: var(--green);
  font-size: 16px;
  line-height: 26px;
}

.button-outline {
  width: auto;
  height: auto;
  float: left;
  border: 2px solid var(--green);
  color: var(--green);
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25px;
  margin-top: 20px;
  margin-right: 30px;
  padding: 10px 26px;
  font-family: TT Interphases, sans-serif;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  transition: border-color .2s cubic-bezier(.55, .085, .68, .53), border-color .2s cubic-bezier(.55, .085, .68, .53), color .2s cubic-bezier(.55, .085, .68, .53);
}

.button-outline:hover {
  color: #365fff;
  border-color: #365fff;
}

.button-outline.float-right {
  float: right;
  margin-right: 0;
}

.section-1 {
  height: auto;
  max-width: 1600px;
  margin-top: -50px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0;
  padding-right: 0;
  position: relative;
}

.section-1.fix {
  margin-top: 0;
}

.carousel {
  z-index: -10;
  width: 68%;
  height: 640px;
  float: left;
  background-image: none;
  background-size: auto;
  margin-left: -90px;
  padding-top: 40px;
  position: relative;
}

.section-1-container {
  max-width: 1400px;
  padding-right: 80px;
}

.slider {
  height: 570px;
  background-color: rgba(221, 221, 221, 0);
  margin-left: 40px;
}

.dropdown-link-light {
  color: #fff;
  cursor: pointer;
  font-family: TT Interphases, sans-serif;
  font-weight: 400;
}

.user {
  width: 400px;
  float: none;
  border-radius: 6px;
  margin-top: 100px;
}

.user.girl-2 {
  float: right;
  margin-right: 60px;
}

.carousel-slide {
  padding-top: 0;
  padding-left: 100px;
  padding-right: 0;
}

.phone {
  width: 250px;
  height: 500px;
  float: none;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 0;
  margin-right: 100px;
  padding: 0;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: auto;
  right: 0%;
  box-shadow: 0 0 30px rgba(0, 0, 0, .15);
}

.right-arrow, .left-arrow {
  display: none;
}

.text-block---right {
  width: 37%;
  height: auto;
  float: right;
  margin-top: 120px;
  padding: 0;
  position: relative;
}

.text-block---right.fix-margin {
  margin-top: 90px;
}

.slide-nav {
  display: none;
}

.mask {
  padding-top: 30px;
}

.ipad {
  width: 340px;
  height: 460px;
  float: none;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 20px;
  margin-right: 50px;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: auto;
  right: 0%;
  box-shadow: 0 0 30px rgba(0, 0, 0, .14);
}

.html-embed-2 {
  width: 250px;
  height: 500px;
  position: static;
}

.container-6 {
  width: 100%;
  height: 65px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 100px;
  padding-right: 100px;
}

.navbar-calibrate-dark {
  width: 100%;
  background-color: rgba(14, 28, 40, 0);
  border-bottom: 1px solid rgba(14, 28, 40, 0);
  margin-left: auto;
  margin-right: auto;
  position: fixed;
}

.language {
  float: right;
  cursor: default;
  margin-top: 4px;
  margin-right: 0;
  padding: 20px;
}

.nav-menu {
  float: right;
  display: block;
}

.mobile-menu-contact {
  float: left;
  clear: none;
  color: var(--dark-blue);
  margin-right: 0;
  padding: 20px;
  font-family: TT Interphases, sans-serif;
  font-weight: 600;
  text-decoration: none;
  display: none;
}

.dropdown-toggle-3, .dropdown-toggle-4, .dropdown-toggle-5 {
  display: none;
}

.container-block---beige {
  height: auto;
  max-width: 1200px;
  background-color: var(--seashell);
  border-radius: 6px;
  margin-top: 0;
  padding: 60px 80px 80px;
}

._3-column-container {
  height: 360px;
  text-align: center;
  background-color: #fff;
  border-radius: 6px;
  padding: 30px;
  transition: box-shadow .2s cubic-bezier(.55, .085, .68, .53);
}

._3-column-container:hover {
  box-shadow: 0 0 30px rgba(0, 0, 0, .1);
}

.h3 {
  color: var(--dark-blue);
  margin-top: 20px;
  font-family: TT Interphases, sans-serif;
  font-weight: 600;
  line-height: 32px;
}

.h3.padding {
  padding-left: 50px;
  padding-right: 50px;
}

.section-6-arrow-buttons {
  height: 30px;
  margin-top: -60px;
  margin-left: 30px;
  margin-right: 30px;
  padding: 0;
  position: static;
  top: auto;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

._2-column {
  max-width: 1200px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}

.icons {
  width: 70px;
  margin-top: 0;
  margin-bottom: -15px;
}

.icons.margin-right {
  margin-right: 20px;
}

.icons.margin-right.pmp {
  box-shadow: 8px 8px #01423e;
}

.icons.pmp {
  border-radius: 15px;
}

.text-block---left {
  width: 33%;
  height: auto;
  float: left;
  margin-top: 100px;
  padding: 0;
}

.container-dsp {
  width: 60%;
  height: 630px;
  float: right;
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760a511464f5b_Circle-Logo.svg");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  padding-top: 100px;
}

.container-dsp.pmp {
  width: 54%;
  height: 530px;
  padding-top: 60px;
}

.dsp---left {
  width: 48.5%;
  height: 80px;
  float: left;
  clear: left;
  border: 5px solid var(--seashell);
  cursor: pointer;
  background-color: #fff;
  border-radius: 6px;
  margin-top: 20px;
  padding: 16px;
  transition: background-color .3s cubic-bezier(.55, .085, .68, .53);
}

.dsp---left:hover {
  background-color: var(--seashell);
  box-shadow: none;
}

.dsp---right {
  width: 48.5%;
  height: 80px;
  float: right;
  clear: none;
  border: 5px solid var(--seashell);
  cursor: pointer;
  background-color: #fff;
  border-radius: 6px;
  margin-top: 20px;
  padding: 16px;
  transition: background-color .3s cubic-bezier(.55, .085, .68, .53);
}

.dsp---right:hover {
  background-color: var(--seashell);
}

.image-2 {
  width: 150px;
  border-radius: 0;
  margin-left: auto;
  margin-right: auto;
  display: block;
  overflow: visible;
}

.button-arrow {
  width: 30px;
  height: 30px;
  float: right;
  background-color: var(--seashell);
  color: #365fff;
  text-align: center;
  border-radius: 20px;
  margin-top: 3px;
  padding: 3px 0 7px;
  text-decoration: none;
  transition: background-color .2s cubic-bezier(.55, .085, .68, .53), opacity .2s;
}

.button-arrow-carousel {
  width: auto;
  height: 20px;
  margin-top: -13px;
  margin-left: 0;
}

.text-block-4 {
  float: left;
  color: var(--dark-blue);
  padding-top: 9px;
  font-family: TT Interphases, sans-serif;
  font-size: 20px;
  font-weight: 600;
}

.slider-2 {
  width: 100%;
  height: auto;
  max-width: 1400px;
  background-color: rgba(255, 255, 255, 0);
  margin-left: auto;
  margin-right: auto;
  padding: 0;
}

.div-block-3 {
  height: 480px;
  background-color: #fff;
  border-radius: 6px;
  padding: 30px;
  box-shadow: 0 0 30px rgba(0, 0, 0, .1);
}

.case-studies-carousel-slides {
  padding: 20px 80px 60px;
}

.image-3 {
  width: 240px;
  margin-bottom: -20px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.image-4 {
  width: 80px;
  float: left;
  border-radius: 6px;
}

.section-4-authors {
  height: 100px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 0 20px 20px;
  position: absolute;
  top: auto;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.text-block-5 {
  width: auto;
  float: left;
  color: #365fff;
  margin-top: 15px;
  margin-left: 0;
  font-family: TT Interphases, sans-serif;
  font-size: 16px;
  line-height: 24px;
}

.carousel-arrow {
  width: 30px;
  height: 30px;
  float: none;
  background-color: var(--seashell);
  color: #365fff;
  text-align: center;
  border-radius: 20px;
  margin-top: 280px;
  margin-bottom: 280px;
  margin-right: 0;
  padding: 0 0 20px;
  text-decoration: none;
  transition: background-color .2s cubic-bezier(.55, .085, .68, .53), opacity .2s;
}

.slide-5 {
  padding: 30px 80px 40px;
}

.button-arrow-icon {
  width: auto;
  height: 20px;
  margin-left: 0;
}

.section-5 {
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.clients-container {
  z-index: -100;
  height: 715px;
  max-width: 1400px;
  background-color: var(--dark-blue);
  border-radius: 6px;
  margin-top: 0;
  padding: 0 0 80px;
  position: static;
}

.pattern {
  z-index: 2;
  height: 670px;
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e1926377603ea8464fbf_BG-Pattern-Medium.svg");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: auto 660px;
  background-attachment: scroll;
  margin-top: 24px;
  margin-left: 0;
  position: absolute;
  top: 0%;
  bottom: auto;
  left: 0%;
  right: 0%;
}

.div-block-5 {
  z-index: -2;
  width: 100%;
  height: auto;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 41px 80px 30px;
  position: absolute;
  top: 0%;
  bottom: auto;
  left: 0%;
  right: 0%;
}

.section-5-column {
  height: 590px;
  text-align: center;
  background-color: #fff;
  border-radius: 6px;
  padding: 35px 30px 30px;
  transition: box-shadow .2s cubic-bezier(.55, .085, .68, .53);
}

.section-5-column:hover {
  box-shadow: 0 0 30px rgba(0, 0, 0, .1);
}

.image-6 {
  width: 100%;
  height: 115px;
  opacity: 1;
  margin-top: 10px;
}

.resources-div {
  border-radius: 6px;
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
}

.collection-item {
  width: 100%;
  height: 170px;
  float: none;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-family: TT Interphases, sans-serif;
  position: static;
}

.white-bg {
  width: 100%;
  height: 670px;
  max-width: 100%;
  margin-bottom: 100px;
  padding-left: 50px;
  padding-right: 50px;
  position: relative;
}

.columns-2 {
  width: 100%;
}

.title {
  clear: none;
  color: var(--dark-blue);
  margin-top: 15px;
  font-family: TT Interphases, sans-serif;
  font-size: 17px;
  font-weight: 600;
  line-height: 27px;
}

.author {
  font-size: 14px;
  line-height: 20px;
}

.meta {
  clear: left;
  color: var(--dark-blue);
  margin-top: 10px;
  font-family: TT Interphases, sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
}

.meta.scam {
  background-color: #fff;
  border-left: 3px solid #ec2c2c;
  border-radius: 0 6px 6px 0;
  padding: 10px 10px 12px 15px;
}

.dash {
  margin-left: 6px;
  margin-right: 6px;
  font-size: 14px;
  line-height: 20px;
}

.info {
  margin-left: 4px;
  font-family: TT Interphases, sans-serif;
  font-weight: 600;
}

.image-9 {
  width: 16px;
  margin-left: 4px;
  position: static;
}

.author-photo {
  width: 60px;
  border-radius: 6px;
  margin-top: -37px;
  margin-left: 0;
  position: static;
  top: auto;
  bottom: 0%;
  left: 0%;
  right: auto;
}

.time-level {
  width: auto;
  float: left;
  color: var(--green);
  margin: 20px auto 5px 0;
  font-family: TT Interphases, sans-serif;
  font-size: 14px;
  line-height: 24px;
  display: flex;
}

.icon---small {
  width: 16px;
  position: static;
}

.link-block-2 {
  width: 200px;
  height: auto;
}

.collection-list-wrapper {
  height: 510px;
  background-color: #fff;
  border-radius: 6px;
}

.blog---info {
  margin-left: 30px;
  margin-right: 30px;
  position: static;
}

.bg-image {
  height: 180px;
  background-color: rgba(255, 255, 255, .1);
  background-image: url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg");
  background-position: 50%;
  background-size: cover;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding: 10px;
}

.category {
  float: right;
  background-color: var(--green);
  color: var(--dark-blue);
  border-radius: 20px;
  padding: 3px 15px;
  font-size: 12px;
  font-weight: 600;
  position: relative;
  top: 0%;
  bottom: auto;
  left: auto;
  right: 0%;
}

.white {
  clear: none;
  color: #fff;
  font-weight: 600;
  position: static;
}

.no-padding {
  margin-top: 0;
  margin-bottom: 0;
}

.utility-page-wrap {
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  max-width: 100%;
  background-color: var(--dark-blue);
  background-image: linear-gradient(rgba(14, 28, 40, .9), rgba(14, 28, 40, .9)), url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e19263776075d1464fa8_BG-Pattern2-Large.png");
  background-position: 0 0, 0 0;
  background-size: auto, cover;
  justify-content: center;
  align-items: center;
  display: flex;
}

.utility-page-content {
  width: 500px;
  text-align: center;
  flex-direction: column;
  display: flex;
}

.utility-page-form {
  flex-direction: column;
  align-items: stretch;
  display: block;
}

.section-5-buttons {
  height: 40px;
  margin-bottom: 45px;
  margin-left: 30px;
  margin-right: 30px;
  padding: 0;
  position: absolute;
  top: auto;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.centered {
  width: auto;
  text-align: center;
  margin: 20px auto 30px;
}

.centered.light {
  margin-bottom: 0;
}

.centered.no-padding {
  margin-top: 0;
  margin-bottom: 10px;
}

.centered.no-bottom-padding {
  margin-bottom: 20px;
}

.logo-light {
  width: 200px;
  margin-top: -15px;
  margin-left: -16px;
  padding-top: 15px;
  padding-bottom: 10px;
  position: absolute;
}

.navbar-light {
  width: 100%;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
}

.dropdown-link-dark {
  color: var(--dark-blue);
  font-family: TT Interphases, sans-serif;
  font-weight: 400;
}

.time-level-2 {
  width: auto;
  color: #3de0c8;
  flex-direction: row;
  margin: 10px auto 5px 0;
  font-family: TT Interphases, sans-serif;
  font-size: 14px;
  line-height: 24px;
  display: flex;
}

.by-blog {
  clear: none;
  margin-right: 4px;
}

.blog-info-2 {
  width: auto;
  float: none;
  color: var(--light-sea-green);
  align-items: center;
  margin: 10px auto 0 0;
  font-family: TT Interphases, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  display: flex;
}

.case-studies-slider {
  width: 100%;
  height: auto;
  max-width: 1400px;
  background-color: rgba(255, 255, 255, 0);
  margin-left: auto;
  margin-right: auto;
  padding: 0 0 42px;
}

.container-block---beige-carousel {
  max-width: 1400px;
  background-color: var(--seashell);
  border-radius: 6px;
  margin-top: 0;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-right: 0;
}

.link---no-shadow {
  width: 100%;
  height: 510px;
  border-radius: 6px;
}

.columns-3 {
  padding-top: 25px;
  padding-left: 10px;
  padding-right: 10px;
}

.case-studies-carousel---column-1 {
  position: static;
}

.newsletter-footer {
  height: auto;
  background-color: var(--green);
  padding: 60px 80px;
}

.text-field-dark {
  border-style: none none solid;
  border-width: 1px;
  border-color: black black var(--green);
  color: var(--green);
  background-color: rgba(0, 0, 0, 0);
  padding-left: 0;
  padding-right: 0;
  font-family: TT Interphases, sans-serif;
}

.text-field-dark::-ms-input-placeholder {
  color: rgba(61, 224, 200, .25);
}

.text-field-dark::placeholder {
  color: rgba(61, 224, 200, .25);
}

.form-2 {
  margin-top: 15px;
}

.div-block-24 {
  height: 40px;
  text-align: center;
}

.carousel-arrow-white {
  width: 30px;
  height: 30px;
  float: none;
  color: #365fff;
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 280px;
  margin-bottom: 280px;
  margin-right: 0;
  padding: 10px 7px;
  text-decoration: none;
}

.cropped {
  width: 700px;
  height: auto;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.success-message {
  border: 1px solid var(--green);
  color: var(--green);
  background-color: rgba(0, 0, 0, 0);
  border-radius: 6px;
  margin-top: 30px;
  padding-top: 45px;
  padding-bottom: 45px;
  font-family: TT Interphases, sans-serif;
  font-size: 16px;
  font-weight: 400;
}

.error-message {
  float: left;
  color: #ff7c68;
  background-color: rgba(0, 0, 0, 0);
  margin-top: -10px;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  font-family: TT Interphases, sans-serif;
}

.contact-us {
  background-color: var(--seashell);
  padding: 50px 80px 40px;
}

.contact-us.grey-bg {
  background-color: var(--white-smoke-2);
}

.contact-form---input {
  border-style: none none solid;
  border-width: 0 0 1px;
  border-color: black black var(--light-sea-green);
  color: #fff;
  background-color: rgba(0, 0, 0, 0);
  padding-left: 0;
  font-family: TT Interphases, sans-serif;
}

.contact-form---input:active, .contact-form---input:focus {
  border-bottom-color: #365fff;
}

.contact-form---input::-ms-input-placeholder {
  color: rgba(0, 189, 176, .5);
}

.contact-form---input::placeholder {
  color: rgba(0, 189, 176, .5);
}

.contact-form---textarea {
  min-height: 185px;
  border: 1px solid var(--dark-blue);
  color: var(--dark-blue);
  background-color: rgba(0, 0, 0, 0);
  border-radius: 6px;
  padding: 20px;
  font-family: TT Interphases, sans-serif;
  display: block;
}

.contact-form---textarea:active, .contact-form---textarea:focus {
  border-color: #365fff;
}

.contact-form---textarea::-ms-input-placeholder {
  color: rgba(14, 28, 40, .42);
}

.contact-form---textarea::placeholder {
  color: rgba(14, 28, 40, .42);
}

.contact-form---select {
  border-style: none none solid;
  border-width: 0 0 1px;
  border-color: black black var(--light-sea-green);
  color: rgba(0, 189, 176, .5);
  text-align: left;
  background-color: rgba(0, 0, 0, 0);
  padding-left: 0;
  font-family: TT Interphases, sans-serif;
}

.contact-form---select:active, .contact-form---select:focus {
  border-bottom-color: #365fff;
}

.contact-form---select::-ms-input-placeholder {
  color: rgba(14, 28, 40, .42);
}

.contact-form---select::placeholder {
  color: rgba(14, 28, 40, .42);
}

.column-15 {
  padding-left: 0;
  padding-right: 20px;
}

.column-16 {
  padding-left: 20px;
  padding-right: 0;
}

.success-message-2 {
  border: 1px solid var(--dark-blue);
  color: var(--dark-blue);
  background-color: rgba(0, 0, 0, 0);
  border-radius: 6px;
  padding-top: 40px;
  padding-bottom: 40px;
  font-family: TT Interphases, sans-serif;
  font-size: 16px;
}

.image-22 {
  width: 320px;
  margin-left: -20px;
}

.footer-text {
  color: #fff;
  margin-bottom: 15px;
  font-family: TT Interphases, sans-serif;
  font-size: 18px;
  font-weight: 600;
}

.footer-text.green {
  color: var(--green);
}

.link {
  width: 100%;
  display: block;
}

.link.white {
  color: #fff;
  margin-top: 6px;
  font-size: 16px;
  font-weight: 300;
}

.column-18 {
  border-radius: 6px;
  margin-top: -20px;
  padding-top: 20px;
}

.linkedin {
  width: 30px;
  height: 10px;
  font-size: 26px;
}

.column-19 {
  text-align: right;
  padding-left: 0;
  padding-right: 0;
}

.columns-6 {
  align-items: center;
  margin-bottom: 30px;
  display: flex;
}

.facebook, .twitter {
  width: 30px;
  height: 10px;
  margin-left: 15px;
  font-size: 26px;
}

.div-block-37 {
  width: 100%;
  height: 180px;
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e19263776075d1464fa8_BG-Pattern2-Large.png");
  background-position: 0 0;
  background-size: 100%;
  justify-content: center;
  align-items: center;
  margin-top: -45px;
  display: block;
  position: static;
  bottom: 0;
}

.columns-7 {
  position: static;
}

.container-11 {
  max-width: 1400px;
  padding: 60px 80px;
  position: relative;
}

.footer---dark {
  z-index: -10;
  background-color: #0a242a;
  background-image: linear-gradient(#0a242a 31%, rgba(0, 0, 0, 0)), url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b9d14900b53111626c377b_leaves.svg");
  background-position: 0 0, 50% -20%;
  background-repeat: repeat, no-repeat;
  background-size: auto, cover;
  padding-top: 50px;
  display: block;
  position: static;
}

.div-block-39 {
  margin-top: 40px;
}

.nav-drop-list {
  background-color: var(--dark-blue);
}

.nav-drop-list.w--open {
  width: 300px;
  background-color: #fff;
  border: 1px #000;
  border-top: 1px solid rgba(14, 28, 40, .3);
  border-radius: 6px;
  margin-top: 20px;
  margin-left: -20px;
}

.nav-drop-list.language.w--open {
  width: 50px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  margin-top: 20px;
  padding: 0;
}

.nav-dropdown {
  color: var(--dark-blue);
  cursor: pointer;
  border-bottom: 1px solid rgba(14, 28, 40, .19);
  padding: 15px 20px;
  font-size: 14px;
  font-weight: 400;
  transition: background-color .15s cubic-bezier(.55, .085, .68, .53);
}

.nav-dropdown:hover {
  background-color: var(--green);
}

.nav-dropdown.top {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.nav-dropdown.bottom {
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
}

.accordion {
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  overflow: hidden;
}

.accordion-list {
  position: static;
}

.accordion-list.w--open {
  float: right;
  background-color: rgba(0, 0, 0, 0);
  display: block;
  position: static;
}

.accordion-content {
  width: 100%;
  float: none;
  clear: none;
}

.light {
  color: #fff;
  margin-top: 10px;
}

.light.centered {
  width: auto;
}

.light.margin-top {
  margin-top: 30px;
}

.button-outline-dark {
  width: auto;
  height: auto;
  float: left;
  border: 2px solid var(--green);
  color: var(--green);
  background-color: rgba(0, 0, 0, 0);
  border-radius: 20px;
  margin-top: 30px;
  margin-right: 40px;
  padding: 6px 22px 7px;
  font-family: TT Interphases, sans-serif;
  font-weight: 600;
  text-decoration: none;
  transition: border-color .2s cubic-bezier(.55, .085, .68, .53), border-color .2s cubic-bezier(.55, .085, .68, .53), color .2s cubic-bezier(.55, .085, .68, .53);
}

.button-outline-dark:hover {
  color: #365fff;
  border-color: #365fff;
}

.button-outline-dark.float-right {
  float: right;
  border-color: var(--dark-blue);
  color: var(--dark-blue);
  margin-right: 0;
}

.button-outline-dark.float-right:hover {
  border-color: var(--royal-blue);
  color: var(--royal-blue);
}

.text-field-light {
  border-style: none none solid;
  border-width: 1px;
  border-color: black black var(--dark-blue);
  color: var(--dark-blue);
  background-color: rgba(0, 0, 0, 0);
  padding-left: 0;
  padding-right: 0;
  font-family: TT Interphases, sans-serif;
}

.text-field-light::-ms-input-placeholder {
  color: rgba(14, 28, 40, .59);
}

.text-field-light::placeholder {
  color: rgba(14, 28, 40, .59);
}

.button-column-3 {
  text-align: center;
  margin-top: 30px;
}

.container-size {
  max-width: 1400px;
  padding-left: 60px;
  padding-right: 60px;
}

.columns-19 {
  align-items: center;
  display: block;
}

.phone-2 {
  width: 250px;
  height: 500px;
  float: none;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 0;
  margin-left: 140px;
  padding: 0;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: auto;
  box-shadow: 0 0 30px rgba(0, 0, 0, .15);
}

.testimonial-logos {
  width: 160px;
  object-fit: fill;
  border-radius: 0;
  display: inline-block;
  overflow: visible;
}

.testimonial-1 {
  width: 100px;
  height: 100px;
  float: left;
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760db6246515f_1536157735811.jpg");
  background-position: 50%;
  background-size: cover;
  border-radius: 6px;
}

.div-block-65 {
  border-top: 6px solid var(--seashell);
  padding-top: 20px;
}

.div-block-66 {
  width: auto;
  height: 100px;
  float: right;
  color: var(--royal-blue);
  align-items: center;
  display: flex;
}

.text-block-26 {
  font-family: TT Interphases, sans-serif;
  font-size: 15px;
  line-height: 25px;
}

.home-testimonials {
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px;
}

.usps-container {
  height: auto;
  max-width: 1600px;
  text-align: left;
  background-color: #fff;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;
}

.home---case-studies {
  height: auto;
  max-width: 100%;
  background-color: var(--dark-blue);
  text-align: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 80px 50px;
}

.large-quotes {
  height: 250px;
  margin-top: 25px;
  font-size: 17px;
  line-height: 32px;
}

.testimonial-2 {
  width: 100px;
  height: 100px;
  float: left;
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e1926377607de2465184_1522089072867.jpeg");
  background-position: 50%;
  background-size: cover;
  border-radius: 6px;
}

.testimonial-3 {
  width: 100px;
  height: 100px;
  float: left;
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760a73c46519c_Patrick.png");
  background-position: 50%;
  background-size: cover;
  border-radius: 6px;
}

.subtitles-green {
  color: var(--green);
  font-family: TT Interphases, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
}

.testimonial {
  font-size: 15px;
  line-height: 25px;
}

.accordion-toggle---inventory {
  border-bottom: 1px solid rgba(14, 28, 40, .19);
  padding: 10px 0;
  display: flex;
}

.accordion-toggle---inventory.w--open {
  padding-top: 10px;
}

.icon---inventory {
  color: var(--green);
  margin-top: 16px;
  margin-bottom: 0;
  margin-right: 0;
  padding-left: 0;
  font-size: 10px;
}

.read-more-inventory {
  width: auto;
  color: var(--dark-blue);
  cursor: pointer;
  margin-left: 22px;
  margin-right: 10px;
  font-family: TT Interphases, sans-serif;
  font-size: 16px;
  font-weight: 300;
}

.margin-left {
  margin-left: 30px;
}

.demand-logos-columns {
  margin-top: 15px;
  margin-bottom: 20px;
}

.demand-logos-columns.first {
  margin-top: 40px;
}

.in {
  background-color: #fff;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 25px 15px;
  display: flex;
}

.dsp-container {
  height: auto;
  max-width: 1600px;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 100px 20px;
  position: static;
}

.world {
  width: 10px;
  height: 20px;
  color: var(--green);
  cursor: none;
  margin-right: 5px;
}

.testimonials-column {
  padding-left: 30px;
  padding-right: 30px;
}

.testimonials-column.hide-mobile {
  display: block;
}

.testimonial-arrow {
  width: 30px;
  height: 30px;
  float: none;
  background-color: var(--seashell);
  color: #365fff;
  text-align: center;
  border-radius: 20px;
  margin-top: 200px;
  margin-bottom: 200px;
  margin-right: 0;
  padding: 0 0 20px;
  text-decoration: none;
  transition: background-color .2s cubic-bezier(.55, .085, .68, .53), opacity .2s;
}

.testimonial-arrow.fix {
  padding-top: 8px;
  padding-bottom: 8px;
}

.testimonial-4 {
  width: 100px;
  height: 100px;
  float: left;
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760301d4651d0_Craig.png");
  background-position: 50%;
  background-size: cover;
  border-radius: 6px;
}

.newsletter-column-1 {
  padding-right: 50px;
}

.newsletter-column-2 {
  margin-top: 30px;
}

.text-field {
  width: 340px;
  height: auto;
  float: left;
  border: 1px solid var(--green);
  color: var(--green);
  background-color: rgba(0, 0, 0, 0);
  border-radius: 100px;
  padding: 12px 30px;
  font-family: TT Interphases, sans-serif;
  font-size: 17px;
}

.text-field::-ms-input-placeholder {
  color: var(--green);
  background-color: rgba(0, 0, 0, 0);
}

.text-field::placeholder {
  color: var(--green);
  background-color: rgba(0, 0, 0, 0);
}

.submit-button-3 {
  float: right;
  background-color: var(--green);
  color: var(--dark-blue);
  border-radius: 100px;
  padding: 15px 40px;
  font-family: TT Interphases, sans-serif;
  font-size: 17px;
  font-weight: 600;
  transition: background-color .2s;
}

.submit-button-3:hover {
  background-color: var(--royal-blue);
  color: #fff;
}

.wide-nav-arrow-right {
  padding-top: 90px;
  padding-left: 44px;
}

.wg-element-wrapper {
  align-items: center;
  display: flex;
  position: relative;
}

.wg-element-wrapper.sw5 {
  float: none;
  display: block;
  position: static;
}

.wg-dropdown-1 {
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  flex-direction: column;
  align-items: stretch;
  font-weight: 700;
}

.wg-dd-1-togle {
  z-index: 1;
  width: 100%;
  background-color: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  flex-direction: column;
  margin-top: 0;
  padding: 10px 0;
  font-family: TT Interphases, sans-serif;
  font-weight: 400;
}

.wg-dd-1-togle:hover {
  background-color: var(--green);
  font-weight: 600;
}

.wg-dd-1-list {
  background-color: #fff;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  overflow: hidden;
  box-shadow: 0 -13px 50px 3px rgba(17, 23, 156, .07);
}

.wg-dd-1-list.w--open {
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
}

.wg-dropdown-1-link {
  color: var(--dark-blue);
  text-align: center;
  background-color: #fff;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 10px 15px;
  font-size: 14px;
  text-decoration: none;
  transition: background-color .1s;
}

.wg-dropdown-1-link:hover {
  background-color: var(--green);
  color: var(--dark-blue);
  font-weight: 600;
}

.text-block-29 {
  color: var(--dark-blue);
  text-align: center;
}

.instagram {
  width: 30px;
  height: 10px;
  margin-left: 15px;
  font-size: 26px;
}

.testimonial-quote {
  width: 72%;
  height: 100px;
  float: right;
  color: var(--royal-blue);
  align-items: center;
  display: flex;
}

.testimonial-5 {
  width: 100px;
  height: 100px;
  float: left;
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760f3b94651e7_vero.png");
  background-position: 50%;
  background-size: cover;
  border-radius: 6px;
}

.password-logo {
  width: 70px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
}

.columns-24 {
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.html-play-video {
  border-radius: 30px;
  margin-top: 40px;
}

.html-play-video.green-pmp {
  margin-top: 40px;
  display: none;
}

.dynamic-captions-header {
  width: 900px;
  height: auto;
  max-width: 1200px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.green {
  border: 0px solid var(--green);
  color: var(--light-sea-green);
}

.mobile-menu-link---contact {
  float: right;
  clear: none;
  color: #fff;
  margin-right: 0;
  padding: 20px;
  font-family: TT Interphases, sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  display: inline-block;
}

.mobile-menu-link---dark-contact {
  float: right;
  clear: none;
  color: var(--dark-blue);
  cursor: pointer;
  margin-top: 4px;
  margin-right: 0;
  padding: 20px;
  font-family: TT Interphases, sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  display: inline-block;
}

.section-19 {
  height: auto;
  background-color: rgba(14, 28, 40, .5);
  margin-top: -91px;
  position: relative;
}

.column-2-left-margin {
  padding-left: 50px;
}

.testimonials-calibrate {
  max-width: 1600px;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 50px;
}

.sharethrough-btn-right {
  width: auto;
  float: right;
  background-color: var(--green);
  border-radius: 20px;
  margin-top: 10px;
  padding: 10px 25px;
}

.calibrate-logo-btn {
  width: auto;
  height: auto;
  margin-top: 20px;
}

.calibrate-logo-green {
  width: 160px;
  margin-top: 0;
  margin-left: -16px;
  padding-top: 0;
  padding-bottom: 10px;
  position: absolute;
}

.sectio-contact-calibrate {
  background-color: #e7ecec;
  padding: 50px 80px 40px;
}

.testimonial-6 {
  width: 100px;
  height: 100px;
  float: left;
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760033446527d_thumb_square_f48d949d1df02d2a26a4a5927de0c645.jpeg");
  background-position: 50%;
  background-size: cover;
  border-radius: 6px;
}

.testimonial-7 {
  width: 100px;
  height: 100px;
  float: left;
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760800b46527e_JonathanM.jpg");
  background-position: 50%;
  background-size: cover;
  border-radius: 6px;
}

.testimonial-8 {
  width: 100px;
  height: 100px;
  float: left;
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760554b465275_MiaH.jpg");
  background-position: 50%;
  background-size: cover;
  border-radius: 6px;
}

.testimonial-quote-g2 {
  width: 72%;
  height: 100px;
  float: right;
  color: var(--royal-blue);
  align-items: center;
  display: flex;
}

.g2-link-block {
  width: 40px;
  height: 48px;
  clear: none;
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e19263776041f446528d_G2-Logo.png");
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: scroll;
  flex-wrap: nowrap;
  order: 0;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  justify-content: space-between;
  align-self: flex-end;
  align-items: flex-start;
  margin-bottom: 60px;
  margin-left: 0;
  margin-right: 30px;
  display: block;
  position: absolute;
  top: auto;
  bottom: 0%;
  left: auto;
  right: 0%;
}

.dropdown-menu-link-calibrate {
  float: right;
  color: #fff;
  cursor: pointer;
  margin-top: 0;
  margin-right: 0;
  padding: 20px;
}

.str-button-right {
  color: var(--dark-blue);
  font-size: 13px;
}

.text-span-4 {
  font-weight: 600;
}

.gallery-menu {
  width: 25%;
  height: auto;
  max-height: 100%;
  min-height: 100%;
  float: left;
  background-color: var(--dark-blue);
  object-fit: fill;
  border-bottom: 1px solid rgba(255, 255, 255, .3);
  border-right: 1px solid rgba(255, 255, 255, .3);
  display: block;
  position: fixed;
  overflow: scroll;
}

.gallery-dropdown-link {
  color: #fff;
  object-fit: contain;
  display: inline-block;
  position: static;
}

.gallery-title {
  float: none;
  color: #fff;
  object-fit: contain;
  margin: 40px 0 30px 10%;
  padding-right: 40px;
  font-size: 40px;
  font-weight: 600;
  line-height: 45px;
  display: block;
  overflow: visible;
}

.gallery-icon {
  float: left;
  object-fit: contain;
  border-radius: 0;
  margin-right: 20px;
  display: inline-block;
  position: static;
}

.navbar-creative-gallery {
  z-index: 100;
  width: 100%;
  max-width: 1400px;
  background-color: #0e1c28;
  border-bottom: 0 solid rgba(255, 255, 255, .3);
  margin-left: auto;
  margin-right: auto;
  padding-left: 100px;
  padding-right: 100px;
  position: relative;
}

.gallery-menu-categories {
  width: 100%;
  background-color: rgba(255, 255, 255, .15);
  padding: 16px 0 16px 10%;
}

.collection-item-gallery-native, .collection-item-gallery-display {
  background-color: rgba(255, 255, 255, .08);
  border-bottom: 1px solid rgba(255, 255, 255, .05);
}

.creative-name {
  color: #fff;
  margin-top: 0;
  font-size: 15px;
}

.collection-item-gallery-video {
  background-color: rgba(255, 255, 255, .08);
  border-bottom: 1px solid rgba(255, 255, 255, .05);
}

.link-block-19 {
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 26%;
}

.link-block-19:focus {
  background-color: var(--royal-blue);
}

.button-full {
  border-style: none;
}

.hero {
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b22ef714b7066f735b976f_tree-line.svg"), linear-gradient(to bottom, transparent 65%, var(--light-blue)), url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e1926377608e3746541f_cloud.svg"), linear-gradient(to bottom, #fff, var(--light-blue) 50%);
  background-position: 50% 100%, 0 0, 50% 30%, 0 0;
  background-repeat: no-repeat, repeat, no-repeat, repeat;
  background-size: contain, auto, 90%, auto;
  background-attachment: scroll, scroll, fixed, scroll;
  margin-left: auto;
  margin-right: auto;
  padding: 60px 100px 100px;
}

.hero.header {
  padding-top: 140px;
}

.hero.header.pmp {
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760ed2346544e_Phone-in-Hand-2.png");
  background-position: 16% 120%;
  background-repeat: no-repeat;
  background-size: 36%;
  padding-top: 180px;
  padding-bottom: 180px;
}

.hero.research {
  background-image: linear-gradient(to bottom, transparent 74%, var(--white-smoke-2)), linear-gradient(to bottom, #fff, transparent), url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e1926377609371465420_cloud2.svg");
  background-position: 0 0, 0 0, 50% 30%;
  background-repeat: repeat, repeat, no-repeat;
  background-size: auto, auto, 90%;
  background-attachment: scroll, scroll, fixed;
  padding-bottom: 0;
  overflow: hidden;
}

.co2-icons {
  width: 100px;
  clear: none;
  position: static;
}

.co2-icons.margin-top {
  margin-top: 15px;
}

.co2-icons.white {
  filter: brightness(200%);
}

.lp-percentage {
  z-index: 1;
  float: left;
  clear: none;
  color: var(--green);
  text-align: left;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 600;
  line-height: 60px;
  display: inline;
  position: relative;
}

.landing-page-section-dark {
  border: 1px none var(--dark-blue);
  background-color: var(--dark-blue);
  margin-left: auto;
  margin-right: auto;
  padding: 50px 60px 70px;
  position: relative;
}

.landing-page-section-dark.header {
  padding-top: 120px;
  padding-bottom: 80px;
}

.landing-page-section-dark.header.green-pmp {
  background-image: linear-gradient(to top, rgba(14, 28, 40, .55) 55%, transparent), url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e1926377609371465420_cloud2.svg"), linear-gradient(to top, var(--dark-blue) 32%, #00bdb0);
  background-position: 0 0, 50% 100%, 0 0;
  background-repeat: repeat, no-repeat, repeat;
  background-size: auto, contain, auto;
  background-attachment: scroll, fixed, scroll;
  padding-top: 140px;
}

.pmp-dates {
  color: var(--royal-blue);
  display: block;
}

.icon-pmp {
  width: 40px;
  float: left;
  margin-top: 8px;
}

.season-pmp {
  float: left;
  margin-top: 16px;
  margin-left: 4px;
  font-family: TT Interphases, sans-serif;
  font-weight: 600;
}

.contact-us-form {
  background-color: var(--seashell);
  padding: 50px 80px 60px;
}

.text-field-10 {
  display: none;
}

.thin {
  font-weight: 300;
}

.underline {
  border-bottom: 1px solid var(--light-sea-green);
  color: var(--light-sea-green);
  font-weight: 300;
}

.underline.light {
  color: #fff;
  border-bottom-color: #fff;
}

.nav-column {
  height: 100%;
  padding-left: 0;
  padding-right: 0;
}

.nav-column.border-beige {
  border-right: 1px solid #fbf2ef;
}

.nav-column.beige-nav {
  background-color: #fbf2ef;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding-top: 20px;
}

.nav-title {
  margin-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
}

.dropdown-link-light-2 {
  color: #fff;
  cursor: pointer;
  font-weight: 400;
}

.icon-11 {
  color: #3de0c8;
  cursor: pointer;
  margin-top: 6px;
  margin-bottom: 0;
  margin-right: 0;
  padding-left: 0;
  font-size: 10px;
}

.wide-nav-paragraph {
  color: #0e1c28;
  margin-top: 15px;
  margin-bottom: 0;
  margin-right: 5px;
  font-size: 14px;
  font-weight: 300;
  line-height: 28px;
}

.wide-nav-paragraph.no-padding {
  margin-top: 0;
}

.subtitles-blue-2 {
  color: #365fff;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
}

.subtitles-blue-2.centered {
  text-align: left;
  margin: 24px auto 0;
  font-size: 14px;
}

.contact-2 {
  float: left;
  font-weight: 600;
  text-decoration: none;
}

.wide-nav-link {
  color: #0e1c28;
  cursor: pointer;
  border-bottom: 1px solid #fbf2ef;
  padding: 15px 14px;
  font-size: 14px;
  font-weight: 400;
  transition: background-color .15s cubic-bezier(.55, .085, .68, .53);
}

.wide-nav-link:hover {
  background-color: #fbf2ef;
}

.wide-nav-link.top {
  border-bottom-color: #fbf2ef;
}

.wide-nav-link.top:hover {
  background-color: #fbf2ef;
}

.wide-nav-link.top.w--current {
  color: var(--royal-blue);
}

.wide-nav-link.bottom {
  border-bottom-style: none;
  border-bottom-width: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.advertiser-drop-list {
  background-color: #0e1c28;
}

.advertiser-drop-list.w--open {
  width: 1210px;
  background-color: #fff;
  border: 1px #000;
  border-top: 1px solid rgba(14, 28, 40, .3);
  border-radius: 6px;
  margin-top: 20px;
  margin-left: -390px;
  padding-left: 10px;
  padding-right: 10px;
}

.mobile-menu-link---contact-2 {
  float: right;
  clear: none;
  color: #fff;
  margin-right: 0;
  padding: 20px;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  display: none;
}

.mobile-menu-contact-2 {
  float: left;
  clear: none;
  color: #0e1c28;
  margin-right: 0;
  padding: 20px;
  font-weight: 600;
  text-decoration: none;
  display: none;
}

.dropdown-toggle-11 {
  display: none;
}

.wide-nav-columns {
  height: 380px;
  border-radius: 6px;
}

.nav-collection {
  padding-left: 15px;
  padding-right: 15px;
  display: block;
}

.nav-collection.right {
  padding-left: 0;
  padding-right: 40px;
}

.dark-text {
  color: var(--dark-blue);
  margin-top: 10px;
  padding-right: 10px;
}

.nav-collection-image {
  height: 170px;
  background-image: url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg");
  background-position: 50%;
  background-size: cover;
  border-radius: 6px;
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 20px;
}

.left-arrow-8 {
  display: none;
}

.wide-nav-slider {
  background-color: rgba(0, 0, 0, 0);
}

.wide-nav-arrow {
  width: 30px;
  height: 30px;
  float: none;
  background-color: var(--seashell);
  color: #365fff;
  text-align: center;
  border-radius: 20px;
  margin-right: 0;
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
  text-decoration: none;
  transition: background-color .2s cubic-bezier(.55, .085, .68, .53), opacity .2s;
}

.wide-nav-arrow-icon {
  width: auto;
  height: 20px;
  color: var(--dark-blue);
  margin-top: -5px;
  margin-left: 0;
}

.company-drop-list {
  background-color: #0e1c28;
}

.company-drop-list.w--open {
  width: 1210px;
  background-color: #fff;
  border: 1px #000;
  border-top: 1px solid rgba(14, 28, 40, .3);
  border-radius: 6px;
  margin-top: 20px;
  margin-left: -635px;
  padding-left: 10px;
  padding-right: 10px;
}

.div-block-141 {
  width: 75%;
  float: right;
}

.resources-drop-list {
  background-color: #0e1c28;
}

.resources-drop-list.w--open {
  width: 1210px;
  background-color: #fff;
  border: 1px #000;
  border-top: 1px solid rgba(14, 28, 40, .3);
  border-radius: 6px;
  margin-top: 20px;
  margin-left: -748px;
  padding-left: 10px;
  padding-right: 10px;
}

.wide-nav-time-level {
  width: auto;
  float: left;
  color: #3de0c8;
  margin-left: 0;
  margin-right: auto;
  font-family: TT Interphases, sans-serif;
  font-size: 14px;
  line-height: 24px;
  display: flex;
}

.wide-nav-author {
  width: 50px;
  float: left;
  border-radius: 6px;
  margin-top: -68px;
  margin-left: 15px;
  position: static;
  top: auto;
  bottom: 0%;
  left: 0%;
  right: auto;
}

.publisher-drop-list {
  background-color: #0e1c28;
}

.publisher-drop-list.w--open {
  width: 1210px;
  background-color: #fff;
  border: 1px #000;
  border-top: 1px solid rgba(14, 28, 40, .3);
  border-radius: 6px;
  margin-top: 20px;
  margin-left: -515px;
  padding-left: 10px;
  padding-right: 10px;
}

.contact-form---textarea-small {
  min-height: 230px;
  border: 1px solid var(--light-sea-green);
  color: #fff;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 6px;
  padding: 20px;
  font-family: TT Interphases, sans-serif;
  display: block;
}

.contact-form---textarea-small:active, .contact-form---textarea-small:focus {
  border-color: #365fff;
}

.contact-form---textarea-small::-ms-input-placeholder {
  color: rgba(0, 189, 176, .5);
}

.contact-form---textarea-small::placeholder {
  color: rgba(0, 189, 176, .5);
}

.column-centered {
  text-align: center;
}

.nav-link {
  border-bottom-style: solid;
  border-bottom-color: var(--dark-grey);
  color: var(--dark-grey);
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px 0 5px;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  display: inline-block;
}

.nav-link.w--current {
  border-bottom-color: var(--light-sea-green);
  color: var(--light-sea-green);
}

.qr-code-image {
  height: 200px;
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e1926377603c13465436_phone.png");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 6px;
  margin-bottom: -23px;
}

.nav-featured-product {
  padding-left: 20px;
  padding-right: 20px;
  display: block;
}

.nav-collection-pmps {
  padding-left: 20px;
  padding-right: 20px;
  display: none;
}

.recap-submit-contact-form, .recap-submit-podcast-form {
  margin-top: 12px;
}

.column-1-padding {
  padding-right: 20px;
}

.column-centered {
  text-align: center;
}

.large-text {
  width: 100%;
  color: #fff;
  margin-top: 5px;
  font-family: TT Interphases, sans-serif;
  font-size: 120px;
  font-weight: 300;
  line-height: 100px;
}

.large-text.green {
  color: var(--light-sea-green);
}

.column-div-centered {
  border: 1px none var(--dark-blue);
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
  margin: 30px 20px;
  padding: 20px 30px;
}

.column-div-centered.no-drop-shadow {
  box-shadow: none;
  padding-left: 40px;
  padding-right: 40px;
}

.column-div-centered.no-drop-shadow.margin-below {
  margin-bottom: 10px;
  margin-left: 0;
}

.column-div-centered.no-drop-shadow.margin-below.grey {
  background-color: var(--white-smoke-2);
}

.landing-page-section-grey {
  background-color: var(--white-smoke-2);
  margin-left: auto;
  margin-right: auto;
  padding: 60px 60px 80px;
}

.landing-page-section-grey.clouds {
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e1926377608e3746541f_cloud.svg");
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: fixed;
}

.green-pmp-column {
  margin-top: 0;
  margin-bottom: 20px;
}

.landing-page-section-dark-green {
  background-color: #00bdb0;
  margin-left: auto;
  margin-right: auto;
  padding: 60px 60px 80px;
}

.column-quote {
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
}

.row-quote {
  max-width: 1100px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}

.number-container {
  height: auto;
  border-bottom: 1px solid var(--green);
  text-align: left;
  background-color: rgba(0, 0, 0, 0);
  margin-right: 0;
  padding: 20px 20px 10px;
  transition: box-shadow .2s cubic-bezier(.55, .085, .68, .53);
}

.number-container.last {
  border-bottom-style: none;
}

.number-text {
  float: left;
  margin-top: 16px;
  margin-bottom: 0;
  margin-left: 24px;
  line-height: 28px;
}

.large-video-block {
  max-width: 1200px;
  text-align: center;
  margin-bottom: 60px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 60px;
  padding-right: 60px;
  position: relative;
}

.text-block---pmp {
  width: 33%;
  height: auto;
  float: left;
  margin-top: 60px;
  padding: 0;
}

.text-block---pmp.pmp {
  width: 40%;
  text-align: left;
  margin-top: 30px;
}

.container-size-small {
  max-width: 1200px;
}

.large-icon {
  width: 100px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.div-block-197 {
  z-index: 3;
  width: 500px;
  height: 100%;
  margin-left: 100px;
  position: absolute;
  top: -38px;
  bottom: 0%;
  left: 0%;
  right: auto;
}

.publisher-lp-logos {
  max-width: 1400px;
  text-align: center;
  padding: 10px 60px;
}

.grey {
  color: var(--dark-grey);
}

.image-102 {
  background-color: #fff;
  margin-top: 20px;
  padding: 20px 100px 40px;
}

.column-center-horizontally {
  max-width: 1400px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}

.image-103 {
  filter: brightness(500%);
  margin-top: 20px;
  margin-bottom: 20px;
}

.stats {
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 30px;
  padding: 30px 20px;
}

.section-top {
  text-align: center;
}

.section-bottom {
  text-align: center;
  justify-content: center;
  align-items: flex-end;
  margin-top: 10px;
  display: flex;
}

.logo-link {
  width: 200px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

.green-span {
  border-bottom: 3px solid var(--light-sea-green);
  color: var(--light-sea-green);
  font-weight: 300;
}

.green-span.thin {
  border-bottom-width: 2px;
}

.heading {
  font-weight: 300;
}

.navbar {
  background-color: #fff;
}

.button-nav {
  background-color: var(--light-sea-green);
  color: #fff;
  border-radius: 100px;
  margin-left: 10px;
  padding: 5px 20px;
}

.nav-button {
  background-color: var(--light-sea-green);
  color: #fff;
  border-bottom: 0 rgba(0, 0, 0, 0);
  border-radius: 100px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 5px 20px;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  display: inline-block;
}

.div-block-198 {
  background-color: var(--light-sea-green);
  color: #fff;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  padding: 0 20px;
  line-height: 14px;
  display: flex;
}

.div-block-198:hover {
  background-color: rgba(0, 189, 176, .8);
}

.nav-button-icon {
  width: 25px;
  float: left;
  clear: left;
  margin-top: 4px;
  margin-bottom: 4px;
}

.nav-button-text {
  float: right;
  margin-left: 6px;
}

.stats-block {
  border: 1px solid var(--light-blue);
  background-color: #fff;
  border-radius: 30px;
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;
  padding-top: 0;
  padding-bottom: 0;
}

.div-block-200 {
  background-color: var(--white-smoke-2);
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e1926377608e3746541f_cloud.svg");
  background-position: 0 0;
  background-size: cover;
  border-radius: 20px;
  padding: 60px 30px 40px;
}

.column-border-right {
  height: 180px;
  border-right: 1px solid var(--light-sea-green);
  padding-top: 10px;
}

.column-border-left {
  height: 180px;
  border-left: 1px solid var(--light-sea-green);
  border-radius: 3px;
}

.text-block-padding-centered {
  text-align: center;
  margin-top: 20px;
  padding-left: 80px;
  padding-right: 80px;
}

.text-block-padding-centered.margin-top {
  margin-top: 80px;
  margin-bottom: 50px;
}

.column-full-height {
  height: 180px;
  padding-top: 10px;
}

.column-full-height.padding-top {
  padding-top: 30px;
}

.div-left {
  width: 65%;
  height: 322px;
  float: left;
  border: 1px none var(--light-sea-green);
  background-color: #fff;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}

.div-right {
  width: 35%;
  height: 322px;
  float: right;
  background-color: var(--light-sea-green);
  text-align: center;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}

.column-stats {
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 20px;
  display: flex;
}

.column-stats.right-border {
  border-right: 1px solid var(--light-blue);
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.column-stats.right-border.top-border, .column-stats.top-border {
  border-top: 1px solid var(--light-blue);
}

.div-block-201 {
  width: 80px;
  height: 80px;
  background-color: #caebff;
  border-radius: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-left: -40px;
  display: flex;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.equals {
  width: 80px;
  height: 80px;
  background-color: var(--light-blue);
  color: var(--light-sea-green);
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  margin-left: -40px;
  font-size: 30px;
  font-weight: 300;
  line-height: 30px;
  display: flex;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: auto;
}

.equals.box-2 {
  margin-top: 80px;
}

.equals.box-3 {
  width: 40px;
  height: 40px;
  background-color: var(--light-sea-green);
  color: var(--white-smoke-2);
  margin-top: 134px;
  margin-left: 0;
  font-size: 20px;
}

.section-blue {
  background-color: var(--light-blue);
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding: 60px 100px;
}

.section-blue.header {
  padding-top: 140px;
}

.section-blue.header.pmp {
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760ed2346544e_Phone-in-Hand-2.png");
  background-position: 16% 120%;
  background-repeat: no-repeat;
  background-size: 36%;
  padding-top: 180px;
  padding-bottom: 180px;
}

.text-block-padding-align-left {
  text-align: left;
  margin-top: 100px;
  margin-bottom: 160px;
  padding-top: 10px;
  padding-left: 100px;
  padding-right: 100px;
}

.text-block-padding-align-left.no-bottom-padding {
  margin-bottom: 0;
}

.button-green {
  width: auto;
  height: auto;
  float: none;
  clear: left;
  background-color: var(--light-sea-green);
  color: #fff;
  text-align: right;
  border-radius: 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 20px;
  font-family: TT Interphases, sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color .2s cubic-bezier(.55, .085, .68, .53), opacity .2s;
  display: inline-block;
}

.button-green:hover {
  color: var(--light-sea-green);
  background-color: #fff;
}

.button-green.contact {
  float: right;
  margin-top: 14px;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 22px;
  padding-right: 22px;
  transition: background-color .2s cubic-bezier(.55, .085, .68, .53), border-width .2s cubic-bezier(.55, .085, .68, .53), color .2s cubic-bezier(.55, .085, .68, .53);
}

.button-green.centered {
  width: auto;
  text-align: center;
  margin: 0 auto;
  font-family: TT Interphases, sans-serif;
  display: inline-block;
}

.button-green.centered.margin-top {
  margin-top: 50px;
}

.button-green.float-right {
  float: right;
  margin-top: 10px;
  margin-right: 0;
}

.section-green {
  background-color: var(--light-sea-green);
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b9d0d6f707a084948b4ea4_leaves-floor.svg");
  background-position: 50% 100%;
  background-size: auto;
  margin-left: auto;
  margin-right: auto;
  padding: 60px 100px;
}

.section-green.header {
  padding-top: 140px;
}

.section-green.header.pmp {
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760ed2346544e_Phone-in-Hand-2.png");
  background-position: 16% 120%;
  background-repeat: no-repeat;
  background-size: 36%;
  padding-top: 180px;
  padding-bottom: 180px;
}

.section-green.leaves {
  background-image: linear-gradient(to bottom, var(--light-sea-green) 25%, transparent), url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b9d0d6f707a084948b4ea4_leaves-floor.svg");
  background-position: 0 0, 50% 100%;
  background-repeat: repeat, no-repeat;
  background-size: auto, 90%;
  background-attachment: scroll, scroll;
}

.section-green.no-bottom {
  background-image: none;
}

.section-green.no-bottom.gradient {
  background-image: linear-gradient(to bottom, transparent, var(--dark-cyan) 53%, var(--dark-slate-grey));
}

.medium-text {
  width: 100%;
  color: #fff;
  text-align: center;
  margin-top: 0;
  font-family: TT Interphases, sans-serif;
  font-size: 70px;
  font-weight: 300;
  line-height: 80px;
}

.medium-text.green, .medium-text.dark-green {
  color: var(--light-sea-green);
}

.container-full {
  background-color: #fff;
  border-radius: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 30px 30px 25px;
}

.container-full.box-1 {
  margin-top: -10px;
}

.container-full.grey {
  background-color: var(--white-smoke-2);
  padding-bottom: 30px;
  padding-left: 40px;
  padding-right: 40px;
}

.container-border {
  height: 360px;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 30px;
  padding: 30px;
}

.container-border.dark-green {
  border-color: var(--light-sea-green);
}

.container-border.quotes {
  height: auto;
  text-align: left;
}

.container-border.dark {
  border-width: 2px;
  border-color: var(--light-sea-green);
}

.container-border.green {
  border-color: var(--light-sea-green);
}

.section-white {
  text-align: center;
  background-color: #fff;
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e1926377608e3746541f_cloud.svg");
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: auto;
  margin-right: auto;
  padding: 80px 100px;
}

.section-white.header {
  padding-top: 140px;
}

.section-white.header.pmp {
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760ed2346544e_Phone-in-Hand-2.png");
  background-position: 16% 120%;
  background-repeat: no-repeat;
  background-size: 36%;
  padding-top: 180px;
  padding-bottom: 180px;
}

.section-white.grey-gradient {
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e1926377608e3746541f_cloud.svg");
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: contain;
}

.heading-2 {
  font-size: 20px;
  font-weight: 300;
}

.button-full-2 {
  width: auto;
  height: auto;
  float: none;
  clear: left;
  color: #0e1c28;
  text-align: right;
  background-color: #3de0c8;
  border-radius: 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 26px;
  font-family: TT Interphases, sans-serif;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color .2s cubic-bezier(.55, .085, .68, .53), opacity .2s;
  display: inline-block;
}

.button-full-2:hover {
  color: #fff;
  background-color: #365fff;
}

.button-full-2.centered {
  width: auto;
  text-align: center;
  margin: 0 auto;
  font-family: TT Interphases, sans-serif;
  display: inline-block;
}

.button-full-2.centered.margin-top {
  margin-top: 20px;
}

.container-13 {
  max-width: 1400px;
  text-align: center;
  padding: 10px 60px;
}

.demand {
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 50px;
}

.contact-3 {
  float: left;
  font-family: TT Interphases, sans-serif;
  font-weight: 600;
  text-decoration: none;
}

.meta-2 {
  clear: left;
  color: #0e1c28;
  margin-top: 10px;
  font-family: TT Interphases, sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
}

.meta-2.margin-left.light {
  color: #fff;
}

.div-block-202 {
  border-top: 1px solid #01423e;
  margin-top: 30px;
  margin-bottom: 20px;
  padding-top: 20px;
}

.green-2 {
  color: #3de0c8;
  border: 0 solid #3de0c8;
}

.landing-page-section {
  margin-left: auto;
  margin-right: auto;
  padding: 60px;
}

.dsp---right-2 {
  width: 48.5%;
  height: 78px;
  float: right;
  clear: none;
  border-width: 1px;
  border-color: var(--green);
  text-align: left;
  cursor: pointer;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 20px;
  padding: 20px 16px 18px 24px;
  transition: background-color .3s cubic-bezier(.55, .085, .68, .53);
}

.icon---inventory-2 {
  color: #3de0c8;
  margin-top: 16px;
  margin-bottom: 0;
  margin-right: 0;
  padding-left: 0;
  font-size: 10px;
}

.accordion-toggle---inventory-2 {
  border-bottom: 1px solid var(--light-sea-green);
  padding: 10px 0;
  display: flex;
}

.text-block-30 {
  float: left;
  color: #0e1c28;
  padding-top: 8px;
  font-family: TT Interphases, sans-serif;
  font-size: 18px;
  font-weight: 600;
}

.button-arrow-2 {
  width: 30px;
  height: 30px;
  float: right;
  color: #365fff;
  text-align: center;
  background-color: #fbf2ef;
  border-radius: 20px;
  margin-top: 3px;
  padding: 3px 0 7px;
  text-decoration: none;
  transition: background-color .2s cubic-bezier(.55, .085, .68, .53), opacity .2s;
}

.button-arrow-2.dsps {
  background-color: var(--green);
  margin-top: 2px;
}

.icon---small-2 {
  width: 16px;
  margin-top: 5px;
  margin-bottom: 5px;
  position: static;
}

.read-more-inventory-2 {
  width: auto;
  color: #fff;
  cursor: pointer;
  margin-left: 22px;
  margin-right: 10px;
  font-family: TT Interphases, sans-serif;
  font-size: 16px;
  font-weight: 300;
}

.dsp---left-2 {
  width: 48.5%;
  height: 78px;
  float: left;
  clear: left;
  text-align: left;
  cursor: pointer;
  background-color: #fff;
  border-style: solid;
  border-width: 1px;
  border-radius: 20px;
  margin-top: 20px;
  padding: 20px 16px 18px 24px;
  transition: background-color .3s cubic-bezier(.55, .085, .68, .53);
}

.dsp---left-2:hover {
  box-shadow: none;
}

.centered-2 {
  width: auto;
  text-align: center;
  margin: 10px auto 30px;
}

.centered-2.no-padding {
  margin-top: 0;
  margin-bottom: 10px;
}

.image-104 {
  width: 150px;
  float: left;
  border-radius: 0;
  display: block;
  position: static;
  overflow: visible;
}

.main-container {
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.main-container.margin-bottom-80 {
  margin-bottom: 80px;
}

.main-container.margin-bottom-80.margin-top {
  margin-top: 50px;
  display: block;
}

.main-container.margin-bottom-40 {
  margin-bottom: 40px;
}

.main-container.margin-bottom-40.margin-top {
  margin-top: 50px;
}

.main-container.center-all {
  text-align: center;
}

.section-dark-green {
  background-color: var(--dark-cyan);
  margin-top: -3px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 70px;
  padding-left: 100px;
  padding-right: 100px;
}

.section-dark-green.header {
  padding-top: 140px;
}

.section-dark-green.header.pmp {
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760ed2346544e_Phone-in-Hand-2.png");
  background-position: 16% 120%;
  background-repeat: no-repeat;
  background-size: 36%;
  padding-top: 180px;
  padding-bottom: 180px;
}

.section-dark-green.gradient-dark {
  background-image: linear-gradient(to bottom, transparent, var(--dark-blue));
}

.section-dark-green.gradient {
  background-image: linear-gradient(to bottom, transparent, var(--dark-slate-grey));
}

.section-dark-green.gradient.research {
  padding-top: 80px;
}

.section-dark-green.gradient.no-padding-top {
  margin-top: 0;
  padding-top: 0;
}

.section-dark-green.research {
  padding-bottom: 0;
}

.container-full-copy {
  background-color: #fff;
  border-radius: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 30px;
}

.section-very-dark-green {
  text-align: center;
  background-color: #01423e;
  background-image: linear-gradient(rgba(0, 0, 0, 0) 61%, #0a242a);
  margin-left: auto;
  margin-right: auto;
  padding: 80px 100px;
}

.section-very-dark-green.header {
  padding-top: 140px;
}

.section-very-dark-green.header.pmp {
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760ed2346544e_Phone-in-Hand-2.png");
  background-position: 16% 120%;
  background-repeat: no-repeat;
  background-size: 36%;
  padding-top: 180px;
  padding-bottom: 180px;
}

.section-very-dark-green.grey-gradient {
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e1926377608e3746541f_cloud.svg");
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: contain;
}

.quote-images {
  box-shadow: 8px 8px #01423e;
}

.div-block-203 {
  margin-top: 30px;
}

.footer-logo {
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.column-steps-left {
  border-right: 3px solid var(--dark-slate-grey);
  padding: 0 30px;
  right: -1.5px;
}

.column-steps-left.box-1 {
  margin-top: 8px;
}

.column-steps-left.last {
  padding-bottom: 100px;
}

.steps-text {
  background-color: var(--light-sea-green);
  color: #fff;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  display: inline-block;
}

.hide-column {
  display: none;
}

.column-steps-right {
  border-left: 3px solid var(--dark-slate-grey);
  margin-top: 0;
  padding: 0 30px 30px;
  left: -1.5px;
}

.hero-green {
  background-image: linear-gradient(to bottom, #fff, rgba(255, 255, 255, 0) 42%), url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b9d14900b53111626c377b_leaves.svg"), linear-gradient(to bottom, #fff, var(--light-sea-green) 50%, var(--dark-cyan));
  background-position: 0 0, 50%, 0 0;
  background-size: auto, auto, auto;
  background-attachment: scroll, fixed, scroll;
  margin-left: auto;
  margin-right: auto;
  padding: 60px 100px 0;
}

.hero-green.header {
  padding-top: 140px;
}

.hero-green.header.pmp {
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760ed2346544e_Phone-in-Hand-2.png");
  background-position: 16% 120%;
  background-repeat: no-repeat;
  background-size: 36%;
  padding-top: 180px;
  padding-bottom: 180px;
}

.column-steps {
  margin-top: -26px;
}

.in-grey {
  background-color: var(--white-smoke-2);
  border-radius: 20px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 25px 15px;
}

.column-steps-2 {
  margin-bottom: -270px;
}

.circle-steps {
  z-index: 1;
  width: 14px;
  height: 14px;
  background-color: var(--dark-slate-grey);
  border-radius: 100px;
  display: inline-block;
  position: -webkit-sticky;
  position: sticky;
  top: 40%;
  bottom: 0%;
  left: 49.45%;
  right: 0%;
}

.container-steps {
  text-align: left;
  background-color: #fff;
  border-radius: 30px;
  margin-top: -100px;
  margin-bottom: 0;
  padding: 30px 30px 20px;
}

.container-steps.box-1 {
  margin-top: 0;
}

.image-105 {
  height: 400px;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: auto;
  right: -20%;
}

.computer {
  min-width: 850px;
  margin-top: -20px;
  margin-left: -100px;
  position: absolute;
}

.div-block-204 {
  z-index: 2;
  width: 300px;
  height: 400px;
  flex-direction: column;
  justify-content: center;
  margin-left: 130px;
  display: flex;
  position: relative;
}

.left-div {
  text-align: center;
  margin-left: 40px;
  margin-right: -20px;
  padding: 10px 20px;
}

.right-div {
  border-left: 1px solid var(--light-sea-green);
  text-align: center;
  margin-left: 20px;
  padding: 10px 20px;
}

.margin-bottom {
  margin-bottom: 20px;
}

.margin-bottom.margin-top {
  margin-top: 20px;
}

.section-grey {
  background-color: var(--white-smoke-2);
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding: 60px 100px;
}

.section-grey.header {
  padding-top: 140px;
}

.section-grey.header.pmp {
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760ed2346544e_Phone-in-Hand-2.png");
  background-position: 16% 120%;
  background-repeat: no-repeat;
  background-size: 36%;
  padding-top: 180px;
  padding-bottom: 180px;
}

.section-grey.leaves {
  background-image: linear-gradient(to bottom, var(--light-sea-green) 25%, transparent), url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b9d14900b53111626c377b_leaves.svg"), url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b9d0d6f707a084948b4ea4_leaves-floor.svg");
  background-position: 0 0, 50% 100%, 50% 100%;
  background-repeat: repeat, no-repeat, no-repeat;
  background-size: auto, 80%, 90%;
  background-attachment: scroll, fixed, scroll;
}

.green-icon-img {
  width: 500px;
  min-width: 500px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  left: -35px;
}

.get-the-green-icon {
  background-image: linear-gradient(#fff 56%, rgba(0, 0, 0, 0)), linear-gradient(rgba(0, 0, 0, 0) 74%, rgba(0, 189, 176, .46)), linear-gradient(rgba(255, 255, 255, .85), rgba(255, 255, 255, .85)), url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b9d14900b53111626c377b_leaves.svg");
  background-position: 0 0, 0 0, 0 0, 50%;
  background-size: auto, auto, auto, auto;
  background-attachment: scroll, scroll, scroll, fixed;
  margin-left: auto;
  margin-right: auto;
  padding: 60px 100px 0;
}

.get-the-green-icon.header {
  padding-top: 140px;
}

.get-the-green-icon.header.pmp {
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760ed2346544e_Phone-in-Hand-2.png");
  background-position: 16% 120%;
  background-repeat: no-repeat;
  background-size: 36%;
  padding-top: 180px;
  padding-bottom: 180px;
}

.get-the-green-icon.research {
  background-image: linear-gradient(to bottom, transparent 74%, var(--white-smoke-2)), linear-gradient(to bottom, #fff, transparent), url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e1926377609371465420_cloud2.svg");
  background-position: 0 0, 0 0, 50% 30%;
  background-repeat: repeat, repeat, no-repeat;
  background-size: auto, auto, 90%;
  background-attachment: scroll, scroll, fixed;
  padding-bottom: 0;
  overflow: hidden;
}

.white-span {
  border-bottom: 3px solid #fff;
}

.white-span.thin {
  border-bottom-width: 2px;
}

.numbers {
  float: left;
}

.numbers.full-width {
  width: 100%;
  text-align: center;
}

.counter {
  width: 100%;
  float: left;
  text-align: center;
}

.counter.padding-bottom {
  padding-bottom: 20px;
}

.numbers-margin-left {
  margin-left: 10px;
}

.numbers-centered {
  width: auto;
  display: inline-block;
}

.numbers-float-left {
  width: auto;
  float: left;
  text-align: center;
  display: inline-block;
}

.numbers-float-right {
  width: auto;
  float: right;
  text-align: center;
  display: inline-block;
}

._100-link-block {
  width: 100%;
}

.button-green-on-white {
  width: auto;
  height: auto;
  float: none;
  clear: left;
  background-color: var(--light-sea-green);
  color: #fff;
  text-align: right;
  border-radius: 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 20px;
  font-family: TT Interphases, sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color .2s cubic-bezier(.55, .085, .68, .53), opacity .2s;
  display: inline-block;
}

.button-green-on-white:hover {
  color: #fff;
  background-color: rgba(0, 189, 176, .8);
}

.button-green-on-white.contact {
  float: right;
  margin-top: 14px;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 22px;
  padding-right: 22px;
  transition: background-color .2s cubic-bezier(.55, .085, .68, .53), border-width .2s cubic-bezier(.55, .085, .68, .53), color .2s cubic-bezier(.55, .085, .68, .53);
}

.button-green-on-white.centered {
  width: auto;
  text-align: center;
  margin: 0 auto;
  font-family: TT Interphases, sans-serif;
  display: inline-block;
}

.button-green-on-white.centered.margin-top {
  margin-top: 50px;
}

.button-green-on-white.float-right {
  float: right;
  margin-top: 10px;
  margin-right: 0;
}

.drop-shadow {
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  box-shadow: 0 9px 30px -7px rgba(0, 0, 0, .28);
}

.news-div {
  border-top: 1px solid var(--light-sea-green);
  border-radius: 0;
  flex-direction: column;
  align-items: center;
  padding: 10px 40px 20px;
}

.news-div:hover {
  background-color: rgba(232, 237, 236, .39);
}

.in-the-news {
  margin-left: auto;
  margin-right: auto;
  padding: 60px 100px;
  transition: background-color .3s cubic-bezier(.755, .05, .855, .06);
}

.in-the-news.header {
  padding-top: 140px;
}

.in-the-news.header.pmp {
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760ed2346544e_Phone-in-Hand-2.png");
  background-position: 16% 120%;
  background-repeat: no-repeat;
  background-size: 36%;
  padding-top: 180px;
  padding-bottom: 180px;
}

.in-the-news.research {
  background-image: linear-gradient(to bottom, transparent 74%, var(--white-smoke-2)), linear-gradient(to bottom, #fff, transparent), url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e1926377609371465420_cloud2.svg");
  background-position: 0 0, 0 0, 50% 30%;
  background-repeat: repeat, repeat, no-repeat;
  background-size: auto, auto, 90%;
  background-attachment: scroll, scroll, fixed;
  padding-bottom: 0;
  overflow: hidden;
}

.news-column {
  align-items: center;
  display: flex;
}

.news-logo {
  padding-right: 30px;
}

.main-container---laptop-tablet {
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.main-container---laptop-tablet.margin-bottom-80 {
  margin-bottom: 80px;
}

.main-container---laptop-tablet.margin-bottom-80.margin-top {
  margin-top: 50px;
  display: none;
}

.main-container---laptop-tablet.margin-bottom-40 {
  margin-bottom: 40px;
}

.main-container---laptop-tablet.margin-bottom-40.margin-top {
  margin-top: 50px;
}

.main-container---laptop-tablet.center-all {
  text-align: center;
}

.number-block-laptop {
  z-index: 2;
  width: 300px;
  height: 400px;
  flex-direction: column;
  justify-content: center;
  margin-left: 130px;
  display: flex;
  position: relative;
}

.column-1-padding-2 {
  padding-right: 20px;
}

.number-container-2 {
  height: auto;
  text-align: left;
  background-color: rgba(0, 0, 0, 0);
  border-bottom: 1px solid #3de0c8;
  align-items: center;
  margin-left: 0;
  margin-right: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: box-shadow .2s cubic-bezier(.55, .085, .68, .53);
  display: flex;
}

.number-container-2.last {
  border-bottom-style: none;
}

.landing-page-section-2 {
  margin-left: auto;
  margin-right: auto;
  padding: 80px 60px;
}

.landing-page-section-2.header {
  padding-top: 140px;
}

.landing-page-section-2.header.pmp {
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760ed2346544e_Phone-in-Hand-2.png"), linear-gradient(to top, var(--white-smoke-2), transparent);
  background-position: 13% 120%, 0 0;
  background-repeat: no-repeat, repeat;
  background-size: 40%, auto;
  padding-top: 100px;
  padding-bottom: 180px;
}

.lp-icon {
  width: 65px;
  float: left;
  clear: none;
  margin-left: -15px;
  margin-right: 8px;
  position: static;
}

.lp-icon.margin-top {
  margin-top: 15px;
}

.container-size-small-2 {
  max-width: 1200px;
  padding-left: 60px;
  padding-right: 60px;
}

.left-align-column {
  text-align: left;
  margin-top: 60px;
  margin-bottom: 20px;
}

.hero-light-green {
  background-image: linear-gradient(#fff, rgba(255, 255, 255, .6)), url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b9d14900b53111626c377b_leaves.svg"), linear-gradient(#fff, #8ed6d1);
  background-position: 0 0, 50%, 0 0;
  background-size: auto, auto, auto;
  background-attachment: scroll, fixed, scroll;
  margin-left: auto;
  margin-right: auto;
  padding: 60px 100px;
}

.hero-light-green.header {
  padding-top: 140px;
}

.hero-light-green.header.pmp {
  background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760ed2346544e_Phone-in-Hand-2.png");
  background-position: 16% 120%;
  background-repeat: no-repeat;
  background-size: 36%;
  padding-top: 180px;
  padding-bottom: 180px;
}

.margin-top {
  margin-top: 30px;
}

@media screen and (min-width: 1280px) {
  p {
    font-weight: 300;
  }

  a {
    border-bottom-style: none;
    border-bottom-width: 0;
  }

  .dropdown-toggle, .dropdown-menu-link {
    cursor: default;
  }

  .h2 {
    font-size: 42px;
  }

  .button-outline.float-right {
    float: left;
  }

  .dropdown-link-light {
    cursor: default;
  }

  .user.girl-2 {
    margin-right: 100px;
  }

  .phone {
    margin-right: 160px;
  }

  .section-6-arrow-buttons {
    margin-top: -70px;
  }

  ._2-column {
    max-width: 1400px;
  }

  .dsp---left, .dsp---right {
    padding: 0;
  }

  .image-2 {
    display: inline-block;
  }

  .button-arrow {
    justify-content: flex-start;
    align-items: baseline;
    display: block;
  }

  .button-arrow.dsps {
    margin-top: 20px;
    margin-right: 20px;
  }

  .text-block-4 {
    color: var(--dark-blue);
  }

  .case-studies-carousel-slides {
    padding-bottom: 50px;
  }

  .clients-container {
    max-width: 100%;
  }

  .author-photo {
    background-image: url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg");
    background-position: 0 0;
    background-size: auto;
  }

  .collection-list-wrapper {
    height: 480px;
  }

  .white {
    font-weight: 300;
  }

  .utility-page-content {
    width: 500px;
  }

  .utility-page-form {
    display: block;
  }

  .section-5-buttons {
    height: auto;
    margin-bottom: 30px;
  }

  .container-block---beige-carousel {
    margin-bottom: 50px;
  }

  .link---no-shadow {
    height: 490px;
  }

  .carousel-arrow-white {
    padding: 7px;
  }

  .html-embed-5 {
    width: 100%;
    height: 100%;
  }

  .link-block-8 {
    width: 320px;
    padding: 16px;
    position: absolute;
  }

  .link.white {
    border-bottom-style: none;
  }

  .div-block-39 {
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
  }

  .accordion {
    padding-left: 0;
    padding-right: 0;
  }

  .button-outline-dark.float-right.podcast-submit {
    margin-top: 15px;
    position: static;
  }

  .container-size {
    padding-left: 0;
    padding-right: 0;
  }

  .phone-2 {
    margin-right: 135px;
  }

  .div-block-65 {
    height: 140px;
    border-top: 6px solid var(--seashell);
    margin-top: 20px;
    padding-top: 30px;
  }

  .div-block-66 {
    height: 100px;
    float: right;
    color: var(--royal-blue);
    align-items: center;
    display: flex;
  }

  .text-block-26 {
    font-family: TT Interphases, sans-serif;
    font-size: 15px;
    line-height: 25px;
  }

  .columns-21 {
    margin-top: 10px;
  }

  .home-testimonials {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .usps-container {
    margin-bottom: 0;
  }

  .home---case-studies {
    margin-top: 0;
  }

  .large-quotes {
    height: 280px;
  }

  .testimonial-2 {
    width: 100px;
    height: 100px;
    float: left;
    background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e1926377607de2465184_1522089072867.jpeg");
    background-position: 50%;
    background-size: cover;
    border-radius: 6px;
  }

  .testimonial-3 {
    width: 100px;
    height: 100px;
    float: left;
    background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760a73c46519c_Patrick.png");
    background-position: 50%;
    background-size: cover;
    border-radius: 6px;
  }

  .subtitles-green {
    color: var(--green);
  }

  .testimonial {
    font-size: 15px;
  }

  .read-more-inventory {
    font-size: 17px;
  }

  .testimonials-column {
    padding-left: 50px;
    padding-right: 50px;
  }

  .testimonial-4 {
    width: 100px;
    height: 100px;
    float: left;
    background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760301d4651d0_Craig.png");
    background-position: 50%;
    background-size: cover;
    border-radius: 6px;
  }

  .text-field {
    border: 1px solid var(--green);
    background-color: rgba(0, 0, 0, 0);
    border-radius: 100px;
  }

  .text-field::-ms-input-placeholder {
    color: var(--green);
  }

  .text-field::placeholder {
    color: var(--green);
  }

  .submit-button-3 {
    background-color: var(--green);
    border-radius: 100px;
  }

  .padding {
    margin-bottom: 40px;
  }

  .testimonial-quote {
    height: 100px;
    float: right;
    color: var(--royal-blue);
    align-items: center;
    display: flex;
  }

  .testimonial-5 {
    width: 100px;
    height: 100px;
    float: left;
    border-radius: 6px;
  }

  .mobile-menu-link---dark-contact {
    margin-top: 4px;
  }

  .column-2-left-margin {
    padding-right: 0;
  }

  .testimonial-6, .testimonial-7, .testimonial-8 {
    width: 100px;
    height: 100px;
    float: left;
    border-radius: 6px;
  }

  .testimonial-quote-g2 {
    height: 100px;
    float: right;
    color: var(--royal-blue);
    align-items: center;
    display: flex;
  }

  .g2-link-block {
    margin-right: 50px;
  }

  .dropdown-menu-link-calibrate {
    cursor: default;
  }

  .navbar-creative-gallery {
    border-bottom-width: 0;
  }

  .gallery-menu-categories {
    padding-left: 16%;
  }

  .hero {
    padding-left: 100px;
    padding-right: 100px;
  }

  .hero.header.pmp {
    background-size: auto 85%;
  }

  .text-field-10 {
    display: none;
  }

  .dropdown-link-light-2 {
    cursor: default;
  }

  .advertiser-drop-list.w--open {
    margin-left: -455px;
  }

  .company-drop-list.w--open {
    margin-left: -700px;
  }

  .resources-drop-list.w--open {
    margin-left: -815px;
  }

  .wide-nav-author {
    background-image: url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg");
    background-position: 0 0;
    background-size: auto;
  }

  .publisher-drop-list.w--open {
    margin-left: -580px;
  }

  .recap-submit-contact-form {
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .recap-element-footer {
    margin-top: 20px;
  }

  .recap-submit-podcast-form {
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 15px;
    padding-top: 10px;
    display: flex;
  }

  .landing-page-section-grey, .landing-page-section-dark-green {
    padding-left: 100px;
    padding-right: 100px;
  }

  .row-quote {
    max-width: 1200px;
  }

  .container-size-small {
    padding-left: 20px;
    padding-right: 20px;
  }

  .margin-top {
    margin-top: 20px;
  }

  .column-stats {
    padding-top: 20px;
  }

  .section-blue {
    padding-left: 100px;
    padding-right: 100px;
  }

  .section-blue.header.pmp {
    background-size: auto 85%;
  }

  .section-green {
    padding-left: 100px;
    padding-right: 100px;
  }

  .section-green.header.pmp {
    background-size: auto 85%;
  }

  .section-white {
    padding-left: 100px;
    padding-right: 100px;
  }

  .section-white.header.pmp {
    background-size: auto 85%;
  }

  .div-block-202 {
    height: 140px;
    border-top: 6px solid #fbf2ef;
    margin-top: 20px;
    padding-top: 30px;
  }

  .landing-page-section {
    padding-left: 100px;
    padding-right: 100px;
  }

  .dsp---right-2 {
    padding: 0;
  }

  .text-block-30 {
    color: #0e1c28;
  }

  .button-arrow-2 {
    justify-content: flex-start;
    align-items: baseline;
    display: block;
  }

  .button-arrow-2.dsps {
    margin-top: 20px;
    margin-right: 20px;
  }

  .read-more-inventory-2 {
    font-size: 17px;
  }

  .dsp---left-2 {
    padding: 0;
  }

  .image-104 {
    display: inline-block;
  }

  .section-dark-green {
    padding-left: 100px;
    padding-right: 100px;
  }

  .section-dark-green.header.pmp {
    background-size: auto 85%;
  }

  .section-very-dark-green {
    padding-left: 100px;
    padding-right: 100px;
  }

  .section-very-dark-green.header.pmp {
    background-size: auto 85%;
  }

  .hero-green {
    padding-left: 100px;
    padding-right: 100px;
  }

  .hero-green.header.pmp {
    background-size: auto 85%;
  }

  .section-grey {
    padding-left: 100px;
    padding-right: 100px;
  }

  .section-grey.header.pmp {
    background-size: auto 85%;
  }

  .get-the-green-icon {
    padding-left: 100px;
    padding-right: 100px;
  }

  .get-the-green-icon.header.pmp {
    background-size: auto 85%;
  }

  .in-the-news {
    padding-left: 100px;
    padding-right: 100px;
  }

  .in-the-news.header.pmp {
    background-size: auto 85%;
  }

  .landing-page-section-2 {
    padding-left: 100px;
    padding-right: 100px;
  }

  .landing-page-section-2.header.pmp {
    background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760ed2346544e_Phone-in-Hand-2.png"), linear-gradient(to bottom, transparent, var(--white-smoke-2));
    background-position: 13% 120%, 0 0;
    background-repeat: no-repeat, repeat;
    background-size: auto 85%, auto;
  }

  .container-size-small-2 {
    padding-left: 20px;
    padding-right: 20px;
  }

  .hero-light-green {
    padding-left: 100px;
    padding-right: 100px;
  }

  .hero-light-green.header.pmp {
    background-size: auto 85%;
  }
}

@media screen and (min-width: 1440px) {
  .hero {
    padding-bottom: 250px;
  }

  .hero.header.pmp {
    background-position: 27% 120%;
  }

  .row-quote {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .div-block-197 {
    left: 10%;
  }

  .text-block-padding-centered {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .section-blue.header.pmp, .section-green.header.pmp, .section-white.header.pmp {
    background-position: 27% 120%;
  }

  .main-container {
    text-align: center;
  }

  .section-dark-green.header.pmp, .section-very-dark-green.header.pmp, .hero-green.header.pmp, .section-grey.header.pmp, .get-the-green-icon.header.pmp {
    background-position: 27% 120%;
  }

  .in-the-news {
    padding-bottom: 250px;
  }

  .in-the-news.header.pmp {
    background-position: 27% 120%;
  }

  .news-column, .center-on-tablet {
    text-align: left;
  }

  .main-container---laptop-tablet {
    text-align: center;
  }

  .landing-page-section-2.header.pmp, .hero-light-green.header.pmp {
    background-position: 27% 120%;
  }
}

@media screen and (max-width: 991px) {
  h1 {
    font-size: 50px;
    line-height: 65px;
  }

  h2 {
    font-size: 40px;
    line-height: 56px;
  }

  p, li {
    font-size: 16px;
    line-height: 28px;
  }

  .mobile-menu-link---light {
    width: 100%;
    float: none;
    color: var(--dark-blue);
    text-align: left;
    border-bottom: .5px solid rgba(14, 28, 40, .1);
    font-size: 17px;
    font-weight: 600;
  }

  .mobile-menu-link---light.only-in-mobile {
    display: inline-block;
  }

  .dropdown-menu-link {
    padding-left: 10px;
    padding-right: 10px;
    display: none;
  }

  .button-white {
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  .button-white.contact {
    margin-left: 10px;
    margin-right: 10px;
    display: none;
  }

  .button-white.float-right {
    float: none;
    clear: none;
    margin-top: 25px;
    margin-bottom: 10px;
  }

  .h2.dark {
    font-size: 34px;
    line-height: 44px;
  }

  .h2.dark.centered {
    padding-left: 80px;
    padding-right: 80px;
  }

  .h2.dark.centered.margin {
    padding-left: 0;
    padding-right: 0;
  }

  .paragraph {
    font-size: 16px;
    line-height: 28px;
  }

  .section-1 {
    height: auto;
    padding-right: 0;
  }

  .carousel {
    width: 100%;
    height: auto;
    float: none;
    clear: none;
    background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e192637760cfa5464f55_Print.svg");
    background-size: cover;
    margin-left: 0%;
    padding-top: 40px;
  }

  .section-1-container {
    max-width: 100%;
    clear: none;
    padding-right: 0;
  }

  .slider {
    height: 590px;
    margin-left: 0;
  }

  .user, .user.girl-1, .user.girl-2 {
    width: 500px;
    margin-top: 70px;
  }

  .carousel-slide {
    padding-left: 60px;
  }

  .phone {
    margin-right: 60px;
  }

  .text-block---right {
    width: 100%;
    float: none;
    margin-top: 0;
    padding: 40px 80px;
  }

  .container-6 {
    width: auto;
    max-width: 100%;
    margin-left: 20px;
    margin-right: 20px;
    padding-left: 0;
    padding-right: 0;
  }

  .navbar-calibrate-dark {
    padding-left: 40px;
    padding-right: 40px;
  }

  .language {
    padding-left: 10px;
    padding-right: 10px;
  }

  .nav-menu {
    background-color: #fff;
  }

  .mobile-menu-dropdown {
    width: 100%;
    color: var(--green);
  }

  .mobile-menu-dropdown-link {
    font-family: TT Interphases, sans-serif;
    font-size: 17px;
    font-weight: 600;
  }

  .icon-2 {
    color: var(--green);
    font-size: 10px;
  }

  .mobile-menu-contact {
    width: 100%;
    float: none;
    background-color: var(--green);
    color: var(--dark-blue);
    text-align: left;
    border-bottom: .5px solid rgba(255, 255, 255, .16);
    font-size: 17px;
    font-weight: 600;
    display: block;
  }

  .menu-button {
    margin-top: 4px;
  }

  .menu-button.w--open {
    background-color: rgba(0, 0, 0, 0);
  }

  .dropdown-toggle-3 {
    color: var(--dark-blue);
    border-bottom: 1px solid rgba(14, 28, 40, .1);
    display: block;
  }

  .dropdown-toggle-4, .dropdown-toggle-5 {
    display: block;
  }

  .icon-3 {
    color: var(--green);
  }

  .container-block---beige {
    height: auto;
    padding-bottom: 40px;
    padding-left: 60px;
    padding-right: 60px;
  }

  ._3-column-container {
    height: auto;
    margin-bottom: 30px;
    padding-bottom: 40px;
  }

  ._3-column-container.no-padding {
    margin-bottom: 0;
  }

  .section-6-arrow-buttons {
    height: auto;
    margin-top: -55px;
    position: static;
  }

  ._2-column---1 {
    padding-left: 0;
    padding-right: 0;
  }

  .text-block---left {
    width: 100%;
    float: none;
    margin-top: 0;
    padding: 40px 80px;
  }

  .container-dsp {
    width: 100%;
    height: auto;
    margin-top: -85px;
    padding: 80px 60px;
  }

  .container-dsp.pmp {
    width: 100%;
    margin-top: 0;
    padding-left: 0;
    padding-right: 0;
  }

  .image-2 {
    width: 150px;
    margin-left: auto;
    margin-right: auto;
  }

  .slider-2 {
    height: auto;
  }

  .case-studies-carousel-slides {
    padding-top: 10px;
    padding-bottom: 0;
  }

  .section-4-authors {
    height: auto;
    margin-top: 30px;
    position: static;
  }

  .clients-container {
    height: 100%;
    padding-bottom: 60px;
    padding-left: 80px;
    padding-right: 80px;
  }

  .pattern {
    height: 1370px;
    background-size: cover;
  }

  .div-block-5 {
    padding-left: 60px;
    padding-right: 60px;
  }

  .section-5-column {
    height: auto;
    margin-bottom: 30px;
    padding-bottom: 40px;
    padding-left: 50px;
    padding-right: 50px;
  }

  .image-6 {
    height: 200px;
  }

  .resources-div {
    margin-bottom: 30px;
  }

  .collection-item {
    height: auto;
  }

  .white-bg {
    height: 1410px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .collection-list-wrapper {
    height: auto;
    margin-bottom: 20px;
  }

  .section-5-buttons {
    height: auto;
    margin-top: 30px;
    margin-bottom: 0;
    position: static;
  }

  .time-level-2 {
    margin-bottom: 20px;
  }

  .case-studies-slider {
    height: auto;
  }

  .container-block---beige-carousel {
    height: auto;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .link---no-shadow {
    height: 400px;
  }

  .columns-3 {
    padding-top: 0;
  }

  .newsletter-footer {
    padding: 60px 60px 50px;
  }

  .case-studies-carousel---column-2 {
    margin-left: auto;
    margin-right: auto;
    display: none;
  }

  .case-studies-carousel---column-3 {
    display: none;
  }

  .div-block-24 {
    text-align: center;
  }

  .cropped {
    width: auto;
  }

  .contact-form---textarea {
    margin-top: 30px;
  }

  .column-15 {
    padding-right: 0;
  }

  .column-16 {
    margin-top: 0;
    padding-left: 0;
  }

  .footer-column {
    margin-bottom: 40px;
  }

  .div-block-37 {
    background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e19263776075d1464fa8_BG-Pattern2-Large.png");
    background-size: 1000px;
  }

  .container-11 {
    padding-left: 60px;
    padding-right: 60px;
  }

  .footer---dark {
    display: block;
  }

  .container-size {
    padding-left: 40px;
    padding-right: 40px;
  }

  .phone-2 {
    margin-left: 60px;
  }

  .div-block-65 {
    margin-top: 40px;
  }

  .home-testimonials {
    padding-bottom: 10px;
  }

  .usps-container {
    height: auto;
    margin-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .home---case-studies {
    margin-top: 50px;
  }

  .large-quotes {
    height: auto;
    margin-bottom: 30px;
  }

  .demand-logos-columns {
    margin-bottom: 0;
  }

  .in {
    margin-bottom: 20px;
  }

  .dsp-container {
    padding: 40px 0;
  }

  .testimonials-column {
    margin-bottom: 40px;
  }

  .testimonials-column.hide-mobile {
    display: none;
  }

  .newsletter-column-1 {
    position: relative;
  }

  .html-play-video {
    margin-top: 40px;
  }

  .dynamic-captions-header {
    width: auto;
  }

  .mobile-menu-link---contact {
    width: 100%;
    float: none;
    color: var(--dark-blue);
    text-align: left;
    border-bottom: .5px solid rgba(14, 28, 40, .1);
    font-size: 17px;
    font-weight: 600;
  }

  .mobile-menu-link---dark-contact {
    width: 100%;
    float: none;
    color: var(--green);
    text-align: left;
    border-bottom: .5px solid rgba(255, 255, 255, .16);
    font-size: 20px;
    font-weight: 400;
  }

  .section-19 {
    background-color: #0e1c28;
    margin-top: 0;
  }

  .column-2-left-margin {
    margin-top: 20px;
    padding-left: 0;
    padding-right: 0;
  }

  .sharethrough-btn-right {
    display: none;
  }

  .dropdown-menu-link-calibrate {
    padding-left: 10px;
    padding-right: 10px;
    display: none;
  }

  .gallery-menu {
    display: none;
  }

  .navbar-creative-gallery {
    width: auto;
    max-width: 100%;
    margin-left: 20px;
    margin-right: 20px;
    padding-left: 0;
    padding-right: 0;
  }

  .hero {
    padding: 40px 40px 60px;
  }

  .hero.header.pmp {
    background-position: -8% 100%;
    background-size: 50%;
    padding-top: 120px;
    padding-bottom: 80px;
  }

  .hero.research {
    padding-left: 60px;
    padding-right: 60px;
  }

  .landing-page-section-dark {
    padding: 60px 80px;
  }

  .pmp-dates {
    font-size: 12px;
  }

  .icon-9 {
    color: #3de0c8;
    font-size: 10px;
  }

  .mobile-menu-dropdown-link-2 {
    font-size: 17px;
    font-weight: 600;
  }

  .mobile-menu-dropdown-2 {
    width: 100%;
    color: #3de0c8;
  }

  .wide-nav-paragraph {
    font-size: 16px;
    line-height: 28px;
  }

  .mobile-menu-link---contact-2 {
    width: 100%;
    float: none;
    color: #0e1c28;
    text-align: left;
    border-bottom: .5px solid rgba(14, 28, 40, .1);
    font-size: 17px;
    font-weight: 600;
    display: block;
  }

  .mobile-menu-contact-2 {
    width: 100%;
    float: none;
    color: #0e1c28;
    text-align: left;
    background-color: #3de0c8;
    border-bottom: .5px solid rgba(255, 255, 255, .16);
    font-size: 17px;
    font-weight: 600;
    display: block;
  }

  .dropdown-toggle-11 {
    color: #0e1c28;
    border-bottom: 1px solid rgba(14, 28, 40, .1);
    display: block;
  }

  .contact-form---textarea-small {
    margin-top: 30px;
  }

  .nav-link {
    width: 100%;
    float: none;
    color: #0e1c28;
    text-align: left;
    border-bottom: .5px solid rgba(14, 28, 40, .1);
    font-size: 17px;
    font-weight: 600;
    display: none;
  }

  .column-div-centered {
    margin-bottom: 30px;
  }

  .landing-page-section-grey {
    padding: 40px 80px;
  }

  .landing-page-section-dark-green {
    padding: 60px 80px;
  }

  .column-quote {
    margin-bottom: 10px;
    padding-left: 0;
    padding-right: 0;
  }

  .number-container {
    height: auto;
    margin-bottom: 0;
    margin-right: 0;
    padding-bottom: 20px;
  }

  .large-video-block {
    padding-left: 0;
    padding-right: 0;
  }

  .text-block---pmp {
    width: 100%;
    float: none;
    margin-top: 0;
    padding: 40px 80px;
  }

  .text-block---pmp.pmp {
    width: 100%;
    margin-top: 20px;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
  }

  .container-size-small {
    text-align: center;
    padding-left: 0;
    padding-right: 0;
  }

  .div-block-197 {
    display: none;
  }

  .publisher-lp-logos {
    text-align: center;
    padding-left: 0;
    padding-right: 0;
  }

  .image-102 {
    margin-bottom: 30px;
  }

  .nav-button {
    width: 100%;
    float: none;
    color: #0e1c28;
    text-align: left;
    border-bottom: .5px solid rgba(14, 28, 40, .1);
    font-size: 17px;
    font-weight: 600;
    display: none;
  }

  .stats-block {
    margin-top: 40px;
  }

  .text-block-padding-centered {
    padding-left: 40px;
    padding-right: 40px;
  }

  .div-left {
    width: 100%;
    height: auto;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .div-right {
    width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 30px;
  }

  .equals {
    margin-top: -40px;
    margin-left: auto;
    margin-right: auto;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
  }

  .equals.box-2 {
    margin-top: -30px;
  }

  .section-blue {
    padding: 60px 80px;
  }

  .section-blue.header.pmp {
    background-position: -8% 100%;
    background-size: 50%;
    padding-top: 120px;
    padding-bottom: 80px;
  }

  .text-block-padding-align-left {
    padding-left: 40px;
    padding-right: 40px;
  }

  .button-green {
    margin-bottom: 20px;
    margin-right: 0;
  }

  .button-green.contact {
    margin-left: 10px;
    margin-right: 10px;
    display: none;
  }

  .button-green.float-right {
    float: none;
    clear: none;
    margin-top: 25px;
    margin-bottom: 10px;
  }

  .section-green {
    padding: 60px 80px;
  }

  .section-green.header.pmp {
    background-position: -8% 100%;
    background-size: 50%;
    padding-top: 120px;
    padding-bottom: 80px;
  }

  .container-border {
    height: auto;
    margin-bottom: 30px;
    padding-top: 20px;
    padding-bottom: 10px;
  }

  .section-white {
    padding: 60px 80px;
  }

  .section-white.header.pmp {
    background-position: -8% 100%;
    background-size: 50%;
    padding-top: 120px;
    padding-bottom: 80px;
  }

  .button-full-2 {
    margin-bottom: 20px;
    margin-right: 0;
  }

  .div-block-202 {
    margin-top: 40px;
  }

  .landing-page-section {
    padding: 60px 80px;
  }

  .image-104 {
    width: 150px;
    margin-left: auto;
    margin-right: auto;
  }

  .main-container.margin-bottom-80.margin-top {
    display: none;
  }

  .section-dark-green {
    padding: 60px 80px;
  }

  .section-dark-green.header.pmp {
    background-position: -8% 100%;
    background-size: 50%;
    padding-top: 120px;
    padding-bottom: 80px;
  }

  .section-very-dark-green {
    padding: 60px 80px;
  }

  .section-very-dark-green.header.pmp {
    background-position: -8% 100%;
    background-size: 50%;
    padding-top: 120px;
    padding-bottom: 80px;
  }

  .column-steps-left.box-1 {
    border-right: 0 rgba(0, 0, 0, 0);
  }

  .column-steps-left.last {
    border-right: 0 rgba(0, 0, 0, 0);
    padding-bottom: 0;
  }

  .column-steps-right {
    border-left: 0 rgba(0, 0, 0, 0);
  }

  .hero-green {
    padding: 40px 40px 60px;
  }

  .hero-green.header.pmp {
    background-position: -8% 100%;
    background-size: 50%;
    padding-top: 120px;
    padding-bottom: 80px;
  }

  .circle-steps {
    display: none;
  }

  .container-steps {
    margin-top: 0;
    margin-bottom: 20px;
  }

  .section-grey {
    padding: 60px 80px;
  }

  .section-grey.header.pmp {
    background-position: -8% 100%;
    background-size: 50%;
    padding-top: 120px;
    padding-bottom: 80px;
  }

  .green-icon-img {
    margin-top: 40px;
  }

  .get-the-green-icon {
    padding: 40px 40px 60px;
  }

  .get-the-green-icon.header.pmp {
    background-position: -8% 100%;
    background-size: 50%;
    padding-top: 120px;
    padding-bottom: 80px;
  }

  .button-green-on-white {
    margin-bottom: 20px;
    margin-right: 0;
  }

  .button-green-on-white.contact {
    margin-left: 10px;
    margin-right: 10px;
    display: none;
  }

  .button-green-on-white.float-right {
    float: none;
    clear: none;
    margin-top: 25px;
    margin-bottom: 10px;
  }

  .in-the-news {
    padding: 40px 40px 60px;
  }

  .in-the-news.header.pmp {
    background-position: -8% 100%;
    background-size: 50%;
    padding-top: 120px;
    padding-bottom: 80px;
  }

  .center-on-tablet {
    text-align: center;
  }

  .main-container---laptop-tablet.margin-bottom-80.margin-top {
    display: block;
  }

  .laptop-bg {
    text-align: center;
    background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62c5aeeec3ca9d652b18e82c_computer.png");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    justify-content: center;
    display: flex;
    left: -34px;
  }

  .number-block-laptop {
    margin-left: 50px;
  }

  .column-1-padding-2 {
    position: static;
  }

  .number-container-2 {
    height: auto;
    margin-bottom: 0;
    margin-right: 0;
    padding-bottom: 20px;
  }

  .landing-page-section-2 {
    padding: 80px 40px;
  }

  .landing-page-section-2.header.pmp {
    background-position: -8% 100%;
    background-size: 50%;
    padding-top: 120px;
    padding-bottom: 80px;
  }

  .container-size-small-2 {
    padding-left: 0;
    padding-right: 0;
  }

  .hero-light-green {
    padding: 40px 40px 60px;
  }

  .hero-light-green.header.pmp {
    background-position: -8% 100%;
    background-size: 50%;
    padding-top: 120px;
    padding-bottom: 80px;
  }
}

@media screen and (max-width: 767px) {
  h1 {
    font-size: 40px;
    line-height: 56px;
  }

  h2 {
    font-size: 35px;
    line-height: 46px;
  }

  .button-white.float-right {
    float: none;
  }

  .h2.dark.centered {
    padding-left: 0;
    padding-right: 0;
  }

  .subtitles-blue.centered {
    margin-bottom: 10px;
  }

  .carousel {
    background-position: 50%;
    background-size: cover;
  }

  .user {
    width: 300px;
    margin-top: 120px;
  }

  .user.girl-1 {
    width: 350px;
    margin-top: 120px;
  }

  .user.girl-2 {
    width: 350px;
    margin-top: 120px;
    margin-right: 20px;
  }

  .carousel-slide {
    padding-left: 20px;
  }

  .phone {
    margin-right: 20px;
  }

  .text-block---right {
    padding-top: 0;
  }

  .ipad {
    margin-right: 20px;
  }

  .navbar-calibrate-dark {
    padding-left: 20px;
    padding-right: 20px;
  }

  .container-block---beige {
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 40px;
  }

  ._2-column {
    margin-top: 0;
  }

  .container-dsp {
    background-size: contain;
  }

  .container-dsp.pmp {
    height: auto;
    padding-top: 0;
    padding-bottom: 30px;
  }

  .dsp---left {
    width: 100%;
    height: 72px;
    padding: 16px 10px;
  }

  .dsp---right {
    width: 100%;
    height: 72px;
  }

  .image-2 {
    width: 150px;
  }

  .clients-container {
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 40px;
  }

  .pattern {
    height: 1250px;
  }

  .div-block-5 {
    padding-left: 40px;
    padding-right: 40px;
  }

  .image-6 {
    height: 100px;
  }

  .white-bg {
    height: 1310px;
  }

  .info {
    font-size: 14px;
  }

  .container-block---beige-carousel {
    padding-bottom: 40px;
  }

  .link---no-shadow {
    height: 450px;
  }

  .columns-3, .case-studies-carousel---column-1 {
    padding-left: 0;
    padding-right: 0;
  }

  .left-arrow-3, .right-arrow-4 {
    display: none;
  }

  .contact-us {
    padding-bottom: 40px;
  }

  .column-15 {
    padding-right: 0;
  }

  .column-16 {
    margin-top: 0;
    padding-left: 0;
  }

  .div-block-37 {
    background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e19263776075d1464fa8_BG-Pattern2-Large.png");
    background-size: 1000px;
  }

  .container-11 {
    padding-left: 40px;
    padding-right: 40px;
  }

  .container-size {
    padding-left: 0;
    padding-right: 0;
  }

  .phone-2 {
    margin-left: 20px;
    margin-right: 20px;
  }

  .home-testimonials {
    padding-left: 0;
    padding-right: 0;
  }

  .usps-container {
    padding-left: 20px;
    padding-right: 20px;
  }

  .margin-left {
    margin-left: 0;
  }

  .dsp-container {
    padding-top: 20px;
    padding-bottom: 0;
  }

  .testimonials-column {
    padding-left: 0;
    padding-right: 0;
  }

  .left-arrow-4, .wide-nav-arrow-right {
    display: block;
  }

  .html-play-video {
    margin-top: 10px;
  }

  .testimonials-calibrate {
    margin-left: 0;
    margin-right: 0;
  }

  .g2-link-block {
    margin-right: 0;
  }

  .hero {
    padding: 40px;
  }

  .hero.header.pmp {
    background-position: 50% 100%;
    padding-top: 80px;
    padding-bottom: 300px;
  }

  .co2-icons {
    margin-left: 0;
  }

  .landing-page-section-dark {
    padding: 40px;
  }

  .landing-page-section-dark.header.green-pmp {
    padding-top: 80px;
    padding-bottom: 40px;
  }

  .contact-us-form {
    padding-bottom: 40px;
  }

  .subtitles-blue-2.centered {
    margin-bottom: 10px;
  }

  .column-1-padding {
    padding-right: 10px;
  }

  .landing-page-section-grey, .landing-page-section-dark-green {
    padding: 40px;
  }

  .number-container {
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
  }

  .number-text {
    width: 55%;
  }

  .number-text.light {
    width: 100%;
    margin-left: 0;
    padding-left: 25px;
  }

  .container-size-small, .publisher-lp-logos {
    padding-left: 0;
    padding-right: 0;
  }

  .column-center-horizontally {
    display: block;
  }

  .text-block-padding-centered {
    padding-left: 0;
    padding-right: 0;
  }

  .div-right {
    height: auto;
    padding-top: 60px;
    padding-bottom: 40px;
  }

  .column-stats.right-border {
    border-bottom: 1px solid var(--light-blue);
    border-right-style: none;
  }

  .column-stats.top-border {
    border-top-style: none;
  }

  .equals {
    margin-top: -26px;
    margin-left: auto;
    margin-right: auto;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
  }

  .section-blue {
    padding: 40px;
  }

  .section-blue.header.pmp {
    background-position: 50% 100%;
    padding-top: 80px;
    padding-bottom: 300px;
  }

  .text-block-padding-align-left {
    margin-top: 60px;
    padding-left: 0;
    padding-right: 0;
  }

  .button-green.float-right {
    float: none;
  }

  .section-green {
    padding: 40px;
  }

  .section-green.header.pmp {
    background-position: 50% 100%;
    padding-top: 80px;
    padding-bottom: 300px;
  }

  .medium-text.green {
    font-size: 60px;
    line-height: 60px;
  }

  .container-full {
    padding-bottom: 20px;
  }

  .section-white {
    padding: 40px;
  }

  .section-white.header.pmp {
    background-position: 50% 100%;
    padding-top: 80px;
    padding-bottom: 300px;
  }

  .container-13 {
    padding-left: 0;
    padding-right: 0;
  }

  .landing-page-section {
    padding: 40px;
  }

  .dsp---right-2 {
    width: 100%;
    height: 72px;
  }

  .dsp---left-2 {
    width: 100%;
    height: 72px;
    padding: 16px 10px;
  }

  .image-104 {
    width: 150px;
  }

  .section-dark-green {
    padding: 40px;
  }

  .section-dark-green.header.pmp {
    background-position: 50% 100%;
    padding-top: 80px;
    padding-bottom: 300px;
  }

  .container-full-copy {
    padding-bottom: 20px;
  }

  .section-very-dark-green {
    padding: 40px;
  }

  .section-very-dark-green.header.pmp {
    background-position: 50% 100%;
    padding-top: 80px;
    padding-bottom: 300px;
  }

  .quote-images {
    width: 80px;
  }

  .hero-green {
    padding: 40px;
  }

  .hero-green.header.pmp {
    background-position: 50% 100%;
    padding-top: 80px;
    padding-bottom: 300px;
  }

  .container-steps {
    padding-bottom: 20px;
  }

  .section-grey {
    padding: 40px;
  }

  .section-grey.header.pmp {
    background-position: 50% 100%;
    padding-top: 80px;
    padding-bottom: 300px;
  }

  .get-the-green-icon {
    padding: 40px;
  }

  .get-the-green-icon.header.pmp {
    background-position: 50% 100%;
    padding-top: 80px;
    padding-bottom: 300px;
  }

  .button-green-on-white.float-right {
    float: none;
  }

  .news-div {
    padding: 20px 30px;
  }

  .in-the-news {
    padding: 40px;
  }

  .in-the-news.header.pmp {
    background-position: 50% 100%;
    padding-top: 80px;
    padding-bottom: 300px;
  }

  .news-column {
    display: block;
  }

  .news-logo {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding-right: 0;
    display: block;
    position: static;
  }

  .laptop-bg {
    display: none;
  }

  .column-1-padding-2 {
    padding-right: 10px;
  }

  .number-container-2 {
    margin-left: 0;
    margin-right: 0;
  }

  .landing-page-section-2 {
    padding: 60px 40px 40px;
  }

  .landing-page-section-2.header.pmp {
    background-position: 50% 100%;
    padding-top: 80px;
    padding-bottom: 300px;
  }

  .lp-icon {
    margin-left: 0;
  }

  .container-size-small-2 {
    padding-left: 0;
    padding-right: 0;
  }

  .hero-light-green {
    padding: 40px;
  }

  .hero-light-green.header.pmp {
    background-position: 50% 100%;
    padding-top: 80px;
    padding-bottom: 300px;
  }
}

@media screen and (max-width: 479px) {
  h1 {
    font-size: 30px;
    line-height: 40px;
  }

  h2 {
    font-size: 28px;
    line-height: 36px;
  }

  h3 {
    font-size: 20px;
    line-height: 28px;
  }

  .mobile-menu-link---light {
    border-bottom-width: 1px;
    border-bottom-color: rgba(54, 95, 255, .5);
  }

  .dropdown-toggle {
    padding-right: 0;
  }

  .button-white {
    margin-left: auto;
    margin-right: auto;
    font-size: 14px;
  }

  .button-white.centered {
    padding-top: 10px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 12px;
  }

  .button-white.centered.margin-top {
    margin-top: 30px;
  }

  .logo-dark {
    width: 180px;
    float: left;
  }

  .logo-dark.nav-2 {
    padding-left: 15px;
  }

  .h2.dark {
    font-size: 28px;
    line-height: 36px;
  }

  .h2.dark.centered {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
  }

  .subtitles-blue {
    font-size: 16px;
    line-height: 18px;
  }

  .subtitles-blue.centered {
    margin-bottom: 10px;
    padding-top: 0;
  }

  .paragraph {
    display: block;
  }

  .carousel {
    background-position: 50%;
    margin-left: 0;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .slider {
    height: 680px;
  }

  .user {
    width: 350px;
    float: left;
    margin-top: 20px;
    margin-left: 0;
    margin-right: 0;
  }

  .user.girl-1 {
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  .user.girl-2 {
    float: none;
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
    position: relative;
  }

  .carousel-slide {
    padding-left: 20px;
    padding-right: 20px;
  }

  .phone {
    width: 210px;
    height: 420px;
    float: right;
    margin-top: -40px;
    margin-right: 35px;
    position: relative;
  }

  .text-block---right {
    padding: 0 40px 20px;
  }

  .text-block---right.fix-margin {
    margin-top: 50px;
  }

  .ipad {
    width: 260px;
    height: 352px;
    float: right;
    margin-top: -40px;
    margin-left: auto;
    margin-right: 10px;
    position: static;
  }

  .html-embed-2 {
    width: 210px;
    height: 420px;
  }

  .container-6 {
    margin-left: 10px;
    margin-right: 15px;
  }

  .navbar-calibrate-dark {
    padding-left: 15px;
    padding-right: 15px;
  }

  .language {
    padding-left: 0;
    padding-right: 0;
  }

  .menu-button {
    padding-left: 10px;
    padding-right: 10px;
  }

  .menu-button.w--open {
    background-color: rgba(0, 0, 0, 0);
  }

  .dropdown-toggle-3 {
    border-bottom: 1px solid rgba(54, 95, 255, .5);
  }

  .icon-3 {
    margin-top: 4px;
    font-size: 20px;
  }

  .container-block---beige {
    border-radius: 0;
    padding: 50px 30px;
  }

  ._3-column-container {
    margin-bottom: 20px;
  }

  ._3-column-container.no-padding {
    margin-bottom: 0;
  }

  .h3 {
    font-size: 20px;
    line-height: 28px;
  }

  .h3.padding {
    padding-left: 0;
    padding-right: 0;
  }

  .section-6-arrow-buttons {
    margin-top: 0;
    display: none;
  }

  .icons.pmp {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  ._2-column---1, ._2-column---2, ._3-column---3 {
    padding-left: 0;
    padding-right: 0;
  }

  .text-block---left {
    padding-left: 40px;
    padding-right: 40px;
  }

  .container-dsp {
    padding: 60px 20px 40px;
  }

  .slider-2 {
    padding-bottom: 0;
  }

  .case-studies-carousel-slides {
    padding-top: 10px;
    padding-left: 0;
    padding-right: 0;
  }

  .clients-container {
    border-radius: 0;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .pattern {
    height: 1280px;
  }

  .div-block-5 {
    padding-bottom: 0;
    padding-left: 10px;
    padding-right: 10px;
  }

  .section-5-column {
    padding-left: 20px;
    padding-right: 20px;
  }

  .image-6 {
    height: auto;
  }

  .resources-div {
    margin-bottom: 10px;
  }

  .white-bg {
    height: 1350px;
    padding-left: 0;
    padding-right: 0;
  }

  .author {
    font-size: 12px;
  }

  .dash {
    margin-left: 2px;
    margin-right: 2px;
    font-size: 12px;
  }

  .info {
    font-size: 12px;
  }

  .link-block-2, .link-block-2.w--current {
    width: auto;
  }

  .collection-list-wrapper {
    height: auto;
    margin-bottom: 0;
  }

  .blog---info {
    margin-left: 20px;
    margin-right: 20px;
  }

  .white {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .utility-page-form {
    padding-left: 30px;
    padding-right: 30px;
  }

  .logo-light {
    width: 180px;
    float: left;
  }

  .by-blog {
    font-size: 12px;
  }

  .blog-info-2 {
    margin-top: 20px;
  }

  .container-block---beige-carousel {
    border-radius: 0;
    padding: 50px 20px;
  }

  .columns-3 {
    padding-top: 15px;
  }

  .newsletter-footer {
    padding: 40px 20px 20px;
  }

  .left-arrow-3, .right-arrow-4 {
    display: none;
  }

  .cropped.centered {
    padding-left: 0;
    padding-right: 0;
  }

  .contact-us {
    padding: 60px 40px 30px;
  }

  .image-22 {
    width: 100%;
  }

  .link.white {
    text-align: left;
  }

  .column-19 {
    clear: none;
  }

  .div-block-37 {
    background-image: url("https://assets-global.website-files.com/62b1e192637760e36a464f30/62b1e19263776075d1464fa8_BG-Pattern2-Large.png");
    background-size: 800px;
  }

  .container-11 {
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .light.centered {
    text-align: center;
    padding-left: 0;
    padding-right: 0;
  }

  .container-size {
    padding-left: 0;
    padding-right: 0;
  }

  .phone-2 {
    width: 210px;
    height: 420px;
    float: right;
    margin-top: -40px;
    margin-left: auto;
    margin-right: 35px;
    position: relative;
  }

  .testimonial-1 {
    float: none;
    margin-left: auto;
    margin-right: auto;
  }

  .div-block-65 {
    text-align: center;
  }

  .div-block-66 {
    width: 100%;
    text-align: center;
  }

  .text-block-26 {
    width: 1005px;
  }

  .home-testimonials {
    padding-left: 20px;
    padding-right: 20px;
  }

  .usps-container {
    margin-bottom: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }

  .home---case-studies {
    margin-top: 20px;
    padding: 40px 20px;
  }

  .testimonial-3 {
    float: none;
    margin-left: auto;
    margin-right: auto;
  }

  .subtitles-green {
    text-align: left;
    font-size: 16px;
    line-height: 24px;
  }

  .in {
    padding-left: 10px;
    padding-right: 10px;
  }

  .dsp-container {
    padding-top: 0;
  }

  .world {
    height: 10px;
    margin-top: 1px;
    margin-right: 20px;
    font-size: 14px;
  }

  .testimonials-column {
    margin-bottom: 0;
    padding-left: 20px;
    padding-right: 20px;
  }

  .newsletter-column-1 {
    padding-left: 0;
    padding-right: 0;
  }

  .text-field {
    width: 80%;
    float: none;
    margin-left: auto;
    margin-right: auto;
  }

  .submit-button-3 {
    float: none;
    margin-top: 20px;
  }

  .left-arrow-4, .wide-nav-arrow-right {
    display: none;
  }

  .dropdown-link-mobile-menu {
    background-color: var(--dark-blue);
    color: #fff;
    padding-top: 15px;
    padding-bottom: 15px;
    font-family: TT Interphases, sans-serif;
  }

  .dropdown-link-mobile-menu.top {
    border-bottom: 1px solid rgba(255, 255, 255, .05);
    padding-top: 25px;
  }

  .dropdown-link-mobile-menu.bottom {
    border-top: 1px solid rgba(255, 255, 255, .05);
    padding-bottom: 25px;
  }

  .dropdown-link-mobile-menu.mid {
    border-bottom: 1px solid rgba(255, 255, 255, .05);
  }

  .testimonial-quote {
    width: 100%;
    text-align: center;
  }

  .testimonial-5 {
    float: none;
    margin-left: auto;
    margin-right: auto;
  }

  .html-play-video {
    margin-right: 0;
  }

  .dynamic-captions-header {
    text-align: center;
  }

  .mobile-menu-link---contact {
    border-bottom-width: 1px;
    border-bottom-color: rgba(54, 95, 255, .5);
  }

  .column-2-left-margin {
    padding-left: 10px;
    padding-right: 10px;
  }

  .calibrate-logo-green {
    width: 160px;
    float: left;
    margin-left: 0;
    padding-top: 2px;
  }

  .testimonial-6, .testimonial-7, .testimonial-8 {
    float: none;
    margin-left: auto;
    margin-right: auto;
  }

  .testimonial-quote-g2 {
    width: 100%;
    text-align: center;
  }

  .g2-link-block {
    margin-bottom: 153px;
    margin-right: 20px;
  }

  .navbar-creative-gallery {
    margin-left: 10px;
    margin-right: 15px;
  }

  .hero {
    padding: 40px 25px 50px;
  }

  .hero.header.pmp {
    background-position: 35% 100%;
    background-size: 80%;
  }

  .hero.research {
    padding-left: 40px;
    padding-right: 40px;
  }

  .lp-percentage {
    font-size: 40px;
  }

  .landing-page-section-dark {
    padding: 50px 25px;
  }

  .season-pmp {
    font-size: 12px;
  }

  .contact-us-form {
    padding: 50px 40px 30px;
  }

  .subtitles-blue-2 {
    font-size: 16px;
    line-height: 18px;
  }

  .subtitles-blue-2.centered {
    margin-bottom: 10px;
    padding-top: 0;
  }

  .mobile-menu-link---contact-2 {
    border-bottom-width: 1px;
    border-bottom-color: rgba(54, 95, 255, .5);
  }

  .dropdown-toggle-11 {
    border-bottom: 1px solid rgba(54, 95, 255, .5);
  }

  .dropdown-link-mobile-menu-2 {
    color: #fff;
    background-color: #0e1c28;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .dropdown-link-mobile-menu-2.mid {
    border-bottom: 1px solid rgba(255, 255, 255, .05);
  }

  .dropdown-link-mobile-menu-2.bottom {
    border-top: 1px solid rgba(255, 255, 255, .05);
    padding-bottom: 15px;
  }

  .dropdown-link-mobile-menu-2.top {
    border-bottom: 1px solid rgba(255, 255, 255, .05);
    padding-top: 15px;
  }

  .column-centered {
    text-align: center;
    position: static;
  }

  .nav-link {
    border-bottom-width: 1px;
    border-bottom-color: rgba(54, 95, 255, .5);
  }

  .large-text {
    font-size: 40px;
  }

  .column-div-centered.no-drop-shadow {
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
  }

  .column-div-centered.no-drop-shadow.margin-below {
    padding-left: 20px;
    padding-right: 20px;
  }

  .column-div-centered.no-drop-shadow.margin-below.grey {
    margin-right: 0;
  }

  .landing-page-section-grey, .landing-page-section-dark-green {
    padding: 50px 25px;
  }

  .number-container {
    text-align: center;
    margin-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }

  .number-container.last {
    padding-bottom: 0;
  }

  .number-text {
    width: 100%;
    margin-left: 0;
  }

  .number-text.light {
    margin-top: 0;
    padding-left: 0;
  }

  .text-block---pmp {
    padding-left: 40px;
    padding-right: 40px;
  }

  .container-size-small {
    padding-left: 0;
    padding-right: 0;
  }

  .image-102 {
    margin-bottom: 10px;
  }

  .nav-button {
    border-bottom-width: 1px;
    border-bottom-color: rgba(54, 95, 255, .5);
  }

  .equals {
    margin-left: auto;
    margin-right: auto;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
  }

  .section-blue {
    padding: 50px 25px;
  }

  .section-blue.header.pmp {
    background-position: 35% 100%;
    background-size: 80%;
  }

  .button-green {
    margin-right: 0;
    font-size: 14px;
  }

  .button-green.centered {
    padding-top: 10px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 12px;
  }

  .button-green.centered.margin-top {
    margin-top: 30px;
  }

  .section-green {
    padding: 50px 25px;
  }

  .section-green.header.pmp {
    background-position: 35% 100%;
    background-size: 80%;
  }

  .medium-text {
    font-size: 40px;
  }

  .medium-text.green {
    font-size: 40px;
    line-height: 50px;
  }

  .container-full {
    padding-left: 20px;
    padding-right: 20px;
  }

  .section-white {
    padding: 50px 25px;
  }

  .section-white.header.pmp {
    background-position: 35% 100%;
    background-size: 80%;
  }

  .button-full-2 {
    margin-right: 0;
    font-size: 14px;
  }

  .button-full-2.centered {
    padding-top: 10px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 12px;
  }

  .demand {
    padding-left: 40px;
    padding-right: 40px;
  }

  .div-block-202, .green-2 {
    text-align: center;
  }

  .landing-page-section, .section-dark-green {
    padding: 50px 25px;
  }

  .section-dark-green.header.pmp {
    background-position: 35% 100%;
    background-size: 80%;
  }

  .container-full-copy {
    padding-left: 20px;
    padding-right: 20px;
  }

  .section-very-dark-green {
    padding: 50px 25px;
  }

  .section-very-dark-green.header.pmp {
    background-position: 35% 100%;
    background-size: 80%;
  }

  .column-steps-left {
    padding-left: 0;
    padding-right: 0;
  }

  .column-steps-right {
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }

  .hero-green {
    padding: 40px 25px 50px;
  }

  .hero-green.header.pmp {
    background-position: 35% 100%;
    background-size: 80%;
  }

  .container-steps {
    padding-left: 20px;
    padding-right: 20px;
  }

  .section-grey {
    padding: 50px 25px;
  }

  .section-grey.header.pmp {
    background-position: 35% 100%;
    background-size: 80%;
  }

  .green-icon-img {
    width: 300px;
    min-width: 300px;
    left: -22px;
  }

  .get-the-green-icon {
    padding: 40px 25px 50px;
  }

  .get-the-green-icon.header.pmp {
    background-position: 35% 100%;
    background-size: 80%;
  }

  .button-green-on-white {
    margin-right: 0;
    font-size: 14px;
  }

  .button-green-on-white.centered {
    padding-top: 10px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 12px;
  }

  .button-green-on-white.centered.margin-top {
    margin-top: 30px;
  }

  .news-div {
    padding: 30px 20px;
  }

  .in-the-news {
    padding: 40px 25px 50px;
  }

  .in-the-news.header.pmp {
    background-position: 35% 100%;
    background-size: 80%;
  }

  .news-logo {
    width: 70%;
  }

  .number-container-2 {
    margin-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }

  .number-container-2.last {
    padding-bottom: 0;
  }

  .landing-page-section-2 {
    padding: 50px 25px;
  }

  .landing-page-section-2.header.pmp {
    background-position: 35% 100%;
    background-size: 80%;
  }

  .container-size-small-2 {
    padding-left: 0;
    padding-right: 0;
  }

  .hero-light-green {
    padding: 40px 25px 50px;
  }

  .hero-light-green.header.pmp {
    background-position: 35% 100%;
    background-size: 80%;
  }
}

@font-face {
  font-family: 'TT Interphases';
  src: url('https://assets.website-files.com/62b1e192637760e36a464f30/62b1e1926377601c26464f62_font.woff2') format('woff2'), url('https://assets.website-files.com/62b1e192637760e36a464f30/62b1e1926377601d31464f5c_font.woff') format('woff');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'TT Interphases';
  src: url('https://assets.website-files.com/62b1e192637760e36a464f30/62b1e1926377605203464f60_font.woff2') format('woff2'), url('https://assets.website-files.com/62b1e192637760e36a464f30/62b1e19263776022a2464f61_font.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'TT Interphases';
  src: url('https://assets.website-files.com/62b1e192637760e36a464f30/62b1e1926377608d2a464f68_font.woff2') format('woff2'), url('https://assets.website-files.com/62b1e192637760e36a464f30/62b1e1926377606dad464f5e_font.woff') format('woff');
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'TT Interphases';
  src: url('https://assets.website-files.com/62b1e192637760e36a464f30/62b1e192637760879d464f79_font.woff2') format('woff2'), url('https://assets.website-files.com/62b1e192637760e36a464f30/62b1e19263776068fe464f69_font.woff') format('woff');
  font-weight: 600;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'TT Interphases';
  src: url('https://assets.website-files.com/62b1e192637760e36a464f30/62b1e19263776051d3464f5f_font.woff2') format('woff2'), url('https://assets.website-files.com/62b1e192637760e36a464f30/62b1e19263776082a9464f73_font.woff') format('woff');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'TT Interphases';
  src: url('https://assets.website-files.com/62b1e192637760e36a464f30/62b1e19263776023e3464f67_font.woff2') format('woff2'), url('https://assets.website-files.com/62b1e192637760e36a464f30/62b1e192637760fb75464f6f_font.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}