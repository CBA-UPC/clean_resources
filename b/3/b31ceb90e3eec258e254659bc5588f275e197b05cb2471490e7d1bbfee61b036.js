/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in
 *    IE on Windows Phone and in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -ms-text-size-adjust: 100%; /* 2 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers (opinionated).
 */

body {
  margin: 0;
}

/**
 * Add the correct display in IE 9-.
 */

article,
aside,
footer,
header,
nav,
section {
  display: block;
}

/**
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * Add the correct display in IE 9-.
 * 1. Add the correct display in IE.
 */

figcaption,
figure,
main { /* 1 */
  display: block;
}

/**
 * Add the correct margin in IE 8.
 */

figure {
  margin: 1em 40px;
}

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * 1. Remove the gray background on active links in IE 10.
 * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
 */

a {
  background-color: transparent; /* 1 */
  -webkit-text-decoration-skip: objects; /* 2 */
}

/**
 * 1. Remove the bottom border in Chrome 57- and Firefox 39-.
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Prevent the duplicate application of `bolder` by the next rule in Safari 6.
 */

b,
strong {
  font-weight: inherit;
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font style in Android 4.3-.
 */

dfn {
  font-style: italic;
}

/**
 * Add the correct background and color in IE 9-.
 */

mark {
  background-color: #ff0;
  color: #000;
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Add the correct display in IE 9-.
 */

audio,
video {
  display: inline-block;
}

/**
 * Add the correct display in iOS 4-7.
 */

audio:not([controls]) {
  display: none;
  height: 0;
}

/**
 * Remove the border on images inside links in IE 10-.
 */

img {
  border-style: none;
}

/**
 * Hide the overflow in IE.
 */

svg:not(:root) {
  overflow: hidden;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers (opinionated).
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: sans-serif; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`
 *    controls in Android 4.
 * 2. Correct the inability to style clickable types in iOS and Safari.
 */

button,
html [type="button"], /* 1 */
[type="reset"],
[type="submit"] {
  -webkit-appearance: button; /* 2 */
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * 1. Add the correct display in IE 9-.
 * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  display: inline-block; /* 1 */
  vertical-align: baseline; /* 2 */
}

/**
 * Remove the default vertical scrollbar in IE.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10-.
 * 2. Remove the padding in IE 10-.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in IE 9-.
 * 1. Add the correct display in Edge, IE, and Firefox.
 */

details, /* 1 */
menu {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Scripting
   ========================================================================== */

/**
 * Add the correct display in IE 9-.
 */

canvas {
  display: inline-block;
}

/**
 * Add the correct display in IE.
 */

template {
  display: none;
}

/* Hidden
   ========================================================================== */

/**
 * Add the correct display in IE 10-.
 */

[hidden] {
  display: none;
}
nd-size: cover;
  background-position: center center;
  min-height: 575px !important;
  height: 575px !important;
}
.vc-hoverbox-wrapper.cover-hover-box .vc-hoverbox-block.vc-hoverbox-front .vc-hoverbox-block-inner.vc-hoverbox-front-inner h2 {
  font-family: "Open Sans Bold", sans-serif;
  color: white;
  font-size: 48px;
  line-height: 62px;
}
.vc-hoverbox-wrapper.cover-hover-box .vc-hoverbox-block.vc-hoverbox-back {
  background: white;
  height: auto;
}
.vc-hoverbox-wrapper.cover-hover-box .vc-hoverbox-block.vc-hoverbox-back .vc-hoverbox-block-inner.vc-hoverbox-back-inner {
  padding: 0;
}
.vc-hoverbox-wrapper.cover-hover-box .vc-hoverbox-block.vc-hoverbox-back .vc-hoverbox-block-inner.vc-hoverbox-back-inner * {
  backface-visibility: visible;
}
.vc-hoverbox-wrapper.cover-hover-box .vc-hoverbox-block.vc-hoverbox-back .vc-hoverbox-block-inner.vc-hoverbox-back-inner img {
  margin: 0;
}
.vc-hoverbox-wrapper.cover-hover-box .vc-hoverbox-block.vc-hoverbox-back .vc-hoverbox-block-inner.vc-hoverbox-back-inner .content {
  padding: 0 45px;
  text-align: left;
}
.vc-hoverbox-wrapper.cover-hover-box .vc-hoverbox-block.vc-hoverbox-back .vc-hoverbox-block-inner.vc-hoverbox-back-inner h2 {
  font-size: 28px;
  line-height: 36px;
  color: #00629b;
  font-family: "Open Sans Bold", sans-serif;
}
.vc-hoverbox-wrapper.cover-hover-box .vc-hoverbox-block.vc-hoverbox-back .vc-hoverbox-block-inner.vc-hoverbox-back-inner h3 {
  font-size: 22px;
  line-height: 30px;
  color: #e87722;
  font-family: "Open Sans SemiBold", sans-serif;
}
.vc-hoverbox-wrapper.cover-hover-box .vc-hoverbox-block.vc-hoverbox-back .vc-hoverbox-block-inner.vc-hoverbox-back-inner p {
  font-size: 18px;
  line-height: 26px;
  color: #4a4a4a;
}
.vc-hoverbox-wrapper.cover-hover-box .vc-hoverbox-block.vc-hoverbox-back .vc-hoverbox-block-inner.vc-hoverbox-back-inner .explore {
  font-size: 20px;
  line-height: 28px;
  color: #00b5e2;
  text-transform: uppercase;
  font-family: "Open Sans SemiBold", sans-serif;
}

/* =============================================================================
 Slideshow
========================================================================== */
.slideshow-container {
  position: relative;
}
.slideshow-container .buttons {
  display: none;
  position: absolute;
  bottom: 28px;
  left: 30px;
}
.slideshow-container .buttons button {
  background: 0;
  border: 0;
  color: white;
  margin-right: 25px;
  font-size: 16px;
  padding: 0 !important;
}
.slideshow-container .buttons button .fa {
  color: white;
}
.slideshow-container .buttons button.active {
  opacity: 0.5;
}

/* =============================================================================
 Slideshow
========================================================================== */
.slideshow .prev-slide, .slideshow .next-slide {
  font-size: 50px;
  color: white;
  position: absolute;
  top: 45%;
  transform: translate(0, -40%);
  cursor: pointer;
  z-index: 1;
}
.slideshow .prev-slide {
  left: 22px;
}
.slideshow .next-slide {
  right: 26px;
}
.slideshow ul.slick-dots {
  position: absolute;
  bottom: 15px;
  left: 68px;
}
.slideshow ul.slick-dots li {
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 0 20px 0 0;
  padding: 0;
  cursor: pointer;
}
.slideshow ul.slick-dots li button {
  font-size: 0;
  line-height: 0;
  display: block;
  width: 18px;
  height: 18px;
  cursor: pointer;
  color: transparent;
  border: 0;
  outline: none;
  background: transparent;
  border-radius: 50%;
  border: 2px solid white;
}
.slideshow ul.slick-dots li button:before {
  font-family: "slick";
  font-size: 6px;
  line-height: 18px;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  text-align: center;
  color: black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-radius: 50%;
}
.slideshow ul.slick-dots li.slick-active button:before {
  opacity: 1;
  background: white;
  width: 18px;
  height: 18px;
  top: 0;
  left: 0;
}
.slideshow .slide {
  background-size: cover;
  background-position: center center;
}
.slideshow .slide.white {
  color: white;
}
.slideshow .slide.white .content.overlay {
  background-color: white;
  background-color: #00629b;
}
.slideshow .slide.white .content .btn {
  border-color: white;
  color: white;
}
.slideshow .slide.white .content .btn:hover {
  background-color: white;
  color: #00629b;
}
.slideshow .slide .content {
  padding: 0 15px;
  display: table;
  height: 545px;
}
.slideshow .slide .content .inner-content {
  display: table-cell;
  vertical-align: middle;
}
.slideshow .slide .content.overlay {
  background-color: white;
}

/* =============================================================================
 Forms
========================================================================== */
input[type=search]::-webkit-search-decoration,
input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-results-button,
input[type=search]::-webkit-search-results-decoration {
  display: none;
}

input[type=text]::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}

input[type=text]::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}

.custom-control-input:focus ~ .custom-control-label::before {
  box-shadow: none !important;
}

/* =============================================================================
 Tables
========================================================================== */
table.table thead tr.table-primary th {
  background-color: #00629b;
  color: white;
  border-bottom: 1px solid #dee2e6;
}
table.table tbody tr td {
  font-family: "Open Sans Regular", sans-serif;
  font-weight: 400;
}
table.table.table-alt thead tr.table-primary th:first-child {
  background-color: #00b5e2;
}
table.table.table-alt thead tr th:first-child {
  background-color: #e2f9ff;
}
table.table.table-alt tbody tr:first-child {
  background-color: #f2f7fa;
}
table.table.table-alt tbody tr th:first-child {
  background-color: #f2fbfd;
}
table.table.table-alt tbody tr td {
  font-family: "Open Sans Regular", sans-serif;
  font-weight: 400;
}
table.table.table-alt tbody tr td.first-child {
  background-color: #e2f9ff !important;
}
/* =============================================================================
 Modal
========================================================================== */
/* =============================================================================
 CTA Boxes
========================================================================== */
.box-cta a {
  background: transparent !important;
  border: 0 !important;
  position: absolute !important;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  left: 15px !important;
  padding: 0 !important;
  top: 15px !important;
  font-size: 0 !important;
}
.box-cta img {
  margin-bottom: 15px !important;
}
.box-cta .vc_cta3-actions {
  height: 0;
}

.vc_cta3-container {
  margin-bottom: 0 !important;
}

/* =============================================================================
 Carousel Bootstrap
========================================================================== */
.carousel-indicators {
  position: relative !important;
  padding-top: 15px;
  margin: 0 !important;
}
.carousel-indicators li {
  border-radius: 50%;
  width: 10px !important;
  height: 10px !important;
  background-color: #00b5e2 !important;
  opacity: 0.15;
}

#full-width-carousel img {
  width: 100%;
  height: auto;
}

.mce-post-boxes .vc_gitem-zone.vc_gitem-zone-c {
  background-color: white !important;
  border: 1px solid #bababa;
  border-top: 0;
  padding: 20px;
}
.mce-post-boxes .vc_gitem-zone.vc_gitem-zone-c .btn, .mce-post-boxes .vc_gitem-zone.vc_gitem-zone-c .vc_general.vc_btn3.vc_btn3-size-md.vc_btn3-shape-rounded.vc_btn3-style-flat.vc_btn3-color-juicy-pink {
  font-family: "Open Sans Bold", sans-serif;
  font-size: 20px;
  line-height: 45px;
  text-align: center;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border-radius: 50px;
  border: 2px solid;
  border-color: #00629b;
  color: #00629b;
  background-color: white;
}
.mce-post-boxes .vc_gitem-zone.vc_gitem-zone-c .btn:hover, .mce-post-boxes .vc_gitem-zone.vc_gitem-zone-c .btn:focus, .mce-post-boxes .vc_gitem-zone.vc_gitem-zone-c .btn.active, .mce-post-boxes .vc_gitem-zone.vc_gitem-zone-c .btn:active, .mce-post-boxes .vc_gitem-zone.vc_gitem-zone-c .vc_general.vc_btn3.vc_btn3-size-md.vc_btn3-shape-rounded.vc_btn3-style-flat.vc_btn3-color-juicy-pink:hover, .mce-post-boxes .vc_gitem-zone.vc_gitem-zone-c .vc_general.vc_btn3.vc_btn3-size-md.vc_btn3-shape-rounded.vc_btn3-style-flat.vc_btn3-color-juicy-pink:focus, .mce-post-boxes .vc_gitem-zone.vc_gitem-zone-c .vc_general.vc_btn3.vc_btn3-size-md.vc_btn3-shape-rounded.vc_btn3-style-flat.vc_btn3-color-juicy-pink.active, .mce-post-boxes .vc_gitem-zone.vc_gitem-zone-c .vc_general.vc_btn3.vc_btn3-size-md.vc_btn3-shape-rounded.vc_btn3-style-flat.vc_btn3-color-juicy-pink:active {
  background: #00629b;
  color: #fff;
}

/* =============================================================================
 Comments
========================================================================== */
#comments ul {
  list-style-type: none;
  padding: 0 0 0 0;
}
#comments ul ul, #comments ul .comment-text {
  padding: 0 0 0 85px;
}
#comments .comment-body .comment-heading {
  display: flex;
  align-items: baseline;
}
#comments .comment-body .comment-heading .comment-head-pre {
  border-bottom: solid 1px #78be20;
  width: 65px;
  float: left;
  margin-right: 20px;
}
#comments .comment-body .comment-heading .comment-head {
  border-bottom: solid 1px #e87722;
  margin-bottom: 15px;
  width: calc(100% - 85px);
  float: left;
}
#comments .comment-body .comment-heading .comment-head .comment-author {
  float: left;
}
#comments .comment-body .comment-heading .comment-head .comment-author cite {
  font-style: normal;
  font-weight: bold;
}
#comments .comment-body .comment-heading .comment-head .comment-meta {
  float: right;
}
#comments .comment-reply-link {
  border-color: #00629b;
  color: #00629b;
  background-color: white;
  border-radius: 50px;
  border: 2px solid;
  font-family: "Open Sans Bold", sans-serif;
  line-height: 30px;
  text-align: center;
  min-width: 100px;
  padding: 0 15px;
  display: inline-block;
  float: right;
  margin-bottom: 15px;
}
#comments .comment-reply-link:hover, #comments .comment-reply-link:focus, #comments .comment-reply-link:active {
  background: #00629b;
  color: #fff;
}

#respond {
  padding: 0 0 0 85px;
}
#respond #cancel-comment-reply-link {
  margin-left: 15px;
  line-height: 43px;
}
#respond .form-submit {
  text-align: right;
}
#respond #cancel-comment-reply-link, #respond #submit {
  font-size: 16px;
  border-color: #00629b;
  color: #00629b;
  background-color: white;
  border-radius: 50px;
  border: 2px solid;
  font-family: "Open Sans Bold", sans-serif;
  line-height: 30px;
  text-align: center;
  min-width: 100px;
  padding: 0 15px;
  display: inline-block;
}
#respond #cancel-comment-reply-link:hover, #respond #cancel-comment-reply-link:focus, #respond #cancel-comment-reply-link:active, #respond #submit:hover, #respond #submit:focus, #respond #submit:active {
  background: #00629b;
  color: #fff;
}
#respond label {
  display: block;
}
#respond input[type=text], #respond input[type=email], #respond textarea {
  width: 100%;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
#respond input + label {
  display: inline-block;
}
#respond .comment-form-url {
  display: none;
}

/* =============================================================================
 Header
========================================================================== */
header#masthead .breadcrumbs {
  display: none;
}
header#masthead #meta-nav {
  background: #4a4a4a;
}
header#masthead #meta-nav ul {
  display: table-cell;
  vertical-align: middle;
  line-height: 30px;
  position: relative;
}
header#masthead #meta-nav ul li {
  display: inherit;
  position: relative;
}
header#masthead #meta-nav ul li:before {
  content: "";
  background: #fff;
  width: 1px;
  height: 14px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 0 14px;
  top: -1px !important;
}
header#masthead #meta-nav ul li:first-child:before {
  content: none;
}
header#masthead #meta-nav ul li a {
  color: #fff;
  font-size: 14px;
}
header#masthead #meta-nav ul li a:hover {
  color: #00b5e2;
}
header#masthead nav.navbar {
  padding: 15px 0 0 0;
  height: 110px !important;
}
header#masthead nav.navbar .navbar-brand img {
  max-width: 200px;
}
header#masthead nav.navbar .btn {
  min-width: 160px;
}
header#masthead nav.navbar form {
  margin: 0 30px 0 80px;
  top: 22px;
  max-width: 500px;
}
header#masthead nav.navbar .navbar-toggler .line {
  width: 45px;
  height: 3px;
  background-color: #4a4a4a;
  display: block;
  margin: 0 auto;
}
header#masthead nav.navbar .navbar-toggler .line:nth-child(2) {
  margin: 10px 0;
}
header#masthead nav.navbar .menu-toggler {
  position: absolute;
  top: 15px;
  right: 0;
  color: #4a4a4a;
}
header#masthead nav.navbar .menu-toggler[aria-expanded=true] .hamburger {
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: rotate(45deg);
}
header#masthead nav.navbar .menu-toggler[aria-expanded=true] .hamburger:before {
  top: 0;
  transition: top 75ms ease, opacity 75ms ease 0.12s;
  opacity: 0;
}
header#masthead nav.navbar .menu-toggler[aria-expanded=true] .hamburger:after {
  bottom: 0;
  transition: bottom 75ms ease, transform 75ms cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  transform: rotate(-90deg);
}
header#masthead nav.navbar .menu-toggler .hamburger {
  position: absolute;
  top: 12.5px;
  color: #4a4a4a;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  transition-duration: 75ms;
  right: 0;
  position: absolute;
  width: 40px;
  height: 3px !important;
  transition-timing-function: ease;
  transition-duration: 0.15s;
  transition-property: transform;
  border-radius: 0;
  background-color: #4a4a4a;
  padding: 0 !important;
}
header#masthead nav.navbar .menu-toggler .hamburger:before {
  display: block;
  content: "";
  top: -10px;
  transition: top 75ms ease 0.12s, opacity 75ms ease;
  position: absolute;
  width: 40px;
  height: 3px !important;
  transition-timing-function: ease;
  transition-duration: 0.15s;
  transition-property: transform;
  border-radius: 0;
  background-color: #4a4a4a;
  padding: 0 !important;
}
header#masthead nav.navbar .menu-toggler .hamburger:after {
  display: block;
  content: "";
  bottom: -10px;
  transition: bottom 75ms ease 0.12s, transform 75ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
  position: absolute;
  width: 40px;
  height: 3px !important;
  transition-timing-function: ease;
  transition-duration: 0.15s;
  transition-property: transform;
  border-radius: 0;
  background-color: #4a4a4a;
  padding: 0 !important;
}
header#masthead .search-form-control {
  border-radius: 30px;
  border: 2px solid;
  border-color: rgba(74, 74, 74, 0.25);
  font-size: 18px;
  padding: 10px 30px !important;
  width: 100%;
  line-height: 26px;
  font-family: "Open Sans Regular", sans-serif;
  margin-bottom: 45px !important;
}
header#masthead .input-group-text {
  background: transparent;
  border: 0;
  position: absolute;
  right: 30px;
  padding: 0;
  height: 50px;
  vertical-align: middle;
}
header#masthead .input-group-text i {
  color: #00b5e2;
  font-size: 18px;
}

ul.navbar-nav {
  margin: 0 0 30px 0;
  display: flex;
  justify-content: space-between;
}
ul.navbar-nav li:last-child {
  margin-right: 0;
}
ul.navbar-nav li a {
  font-size: 18px;
  line-height: 26px;
  color: #4a4a4a;
  position: relative;
}
ul.navbar-nav li a:before {
  content: "";
  height: 1px;
  width: 100%;
  background: #78be20;
  display: inline-block;
  position: absolute;
  bottom: -2px;
  left: 0;
  transform: scaleX(0);
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -ms-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
}
ul.navbar-nav li a:hover:before {
  transform: scaleX(1);
}
ul.navbar-nav li a.dropdown-toggle:before {
  content: "";
  font-family: "Font Awesome 5 Pro";
  font-weight: 400;
  position: absolute;
  color: #4a4a4a;
  border: 0;
  transition: transform 0.2s ease-in-out;
}
ul.navbar-nav li a.dropdown-toggle[aria-expanded=true]:after {
  transform: rotate(180deg);
}
ul.navbar-nav li.current-menu-item > a:before, ul.navbar-nav li.current-menu-ancestor > a:before {
  transform: scaleX(1);
}
ul.navbar-nav li.current-menu-ancestor .sub-menu a:before {
  transform: scaleX(0);
}

.navbar-collapse.mobile {
  background: #00629b;
  padding-right: 15px;
  padding-left: 15px;
}

.navbar-collapse.mobile a {
  color: #fff !important;
  font-size: 18px;
  padding: 10px 0;
  display: inline-block;
  width: 100%;
  font-family: "Open Sans Regular", sans-serif;
}

.navbar-collapse.mobile #nav a {
  font-size: 20px;
  padding: 15px 0;
  border-bottom: 1px solid #022e48;
  font-family: "Open Sans SemiBold", sans-serif;
}

.navbar-collapse.mobile .current-menu-item {
  background: #00b5e2;
  position: relative;
}
.navbar-collapse.mobile .current-menu-item:after, .navbar-collapse.mobile .current-menu-item:before {
  background: #00b5e2;
  content: "";
  width: 15px;
  height: 100%;
}
.navbar-collapse.mobile .current-menu-item:after {
  right: 15px;
}
.navbar-collapse.mobile .current-menu-item:before {
  left: -15px;
}

/******************************Drop-down menu work on hover**********************************/
@media only screen and (min-width: 767px) {
  .mainmenu .collapse ul li:hover > ul {
    display: block;
    list-style: none;
  }

  .mainmenu .collapse ul ul {
    position: absolute;
    display: none;
    list-style: none;
    z-index: 999999;
    padding: 5px 15px;
    background: #fff;
    min-width: 235px;
    -webkit-box-shadow: 0 20px 50px 10px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0 20px 50px 10px rgba(0, 0, 0, 0.15);
    box-shadow: 0 20px 50px 10px rgba(0, 0, 0, 0.15);
    margin-top: 1px;
  }

  .mainmenu .collapse ul ul li {
    position: relative;
    padding: 0 !important;
  }

  .mainmenu .collapse ul ul li:hover > ul {
    display: block;
  }

  .mainmenu .collapse ul ul ul {
    position: absolute;
    top: 0;
    left: 100%;
    min-width: 250px;
    display: none;
  }

  .mainmenu .collapse ul ul ul li {
    position: relative;
  }

  .mainmenu .collapse ul ul li a {
    font-size: 16px !important;
  }

  .mainmenu .collapse ul ul ul li:hover ul {
    display: block;
  }

  .mainmenu .collapse ul ul ul ul {
    position: absolute;
    top: 0;
    left: -100%;
    min-width: 250px;
    display: none;
    z-index: 1;
  }
}
/* =============================================================================
 Breadcrumbs
========================================================================== */
.page-child header#masthead .breadcrumbs {
  display: block;
  color: #00b5e2;
  font-family: "Open Sans Regular", sans-serif;
  margin-top: -30px;
  position: relative;
  z-index: 9;
}
.page-child header#masthead .breadcrumbs a {
  font-size: 16px;
  line-height: 30px;
  color: #00b5e2;
}
.page-child header#masthead .breadcrumbs .breadcrumb_last {
  font-family: "Open Sans Bold", sans-serif;
}

/* =============================================================================
 Paddings / Spaces
========================================================================== */
.main-section-padding.top {
  padding-top: 120px;
}

.main-section-padding.bottom {
  padding-bottom: 120px;
}

.section-padding.top {
  padding-top: 60px;
}

.section-padding.bottom {
  padding-bottom: 60px;
}

.section-padding.bottom-overlap {
  padding-bottom: 250px;
}

.overlap-white {
  margin-top: -250px !important;
  z-index: 999999999;
  position: relative;
}

.main-slider-padding.full .first {
  padding-top: 100px;
  padding-bottom: 60px;
}
.main-slider-padding.full .first .main-slider-text-padding {
  padding-bottom: 60px;
}

.half .first {
  padding-right: 60px;
}
.half .second {
  height: 100%;
}
.half .second.text {
  height: auto;
}
.half .second.main-slider-img .wpb_wrapper, .half .second.main-slider-img .wpb_single_image, .half .second.main-slider-img .vc_figure, .half .second.main-slider-img .vc_single_image-wrapper, .half .second.main-slider-img img {
  height: 100% !important;
  width: 100%;
  object-fit: cover;
}

.half.organize .first {
  padding-right: 30px;
}

.large-slider-padding {
  position: relative;
}
.large-slider-padding.top {
  padding-top: 80px;
}
.large-slider-padding.top.slider {
  padding-top: 80px;
}
.large-slider-padding.bottom {
  padding-bottom: 80px;
}
.large-slider-padding .second {
  position: absolute;
  width: 50vw;
  right: 0;
}

.reverse .second {
  position: absolute;
  width: 50vw;
  left: 0;
}

.reverse .first {
  left: calc(25vw + 10%);
  padding-right: 0;
  padding-left: 50px;
}

/* =============================================================================
 Footer
========================================================================== */
footer#colophon {
  background: linear-gradient(108deg, #00b5e2, #00629b);
  padding: 60px 0;
  color: #fff;
}
footer#colophon * {
  color: #fff;
}
footer#colophon .main-content {
  padding-bottom: 60px;
}
footer#colophon .main-content h4 {
  font-family: "Open Sans Bold", sans-serif;
  font-size: 22px;
  line-height: 30px;
}
footer#colophon .main-content p {
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 15px;
}
footer#colophon .main-content p:last-child {
  margin-bottom: 0;
}
footer#colophon .main-content a {
  text-decoration: underline;
}
footer#colophon .main-content .link {
  font-family: "Open Sans Bold", sans-serif;
  font-size: 17px;
  line-height: 36px;
  text-decoration: underline;
}
footer#colophon .main-content .social-icons ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: block;
  overflow: auto;
  width: 100%;
}
footer#colophon .main-content .social-icons ul li {
  display: inline-block;
  position: relative;
  float: left;
  line-height: 22px;
  padding: 0 10px;
}
footer#colophon .main-content .social-icons ul li:first-child {
  padding: 0;
}
footer#colophon .main-content .social-icons ul li i {
  font-size: 20px;
}
footer#colophon .copyright i {
  font-size: 20px;
}
footer#colophon .copyright .copyright-menu, footer#colophon .copyright .social-icons {
  padding: 0 15px;
}
footer#colophon .copyright .copyright-menu p, footer#colophon .copyright .social-icons p {
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 0;
  max-width: 95%;
}
footer#colophon .copyright .copyright-menu ul, footer#colophon .copyright .social-icons ul {
  list-style: none;
  padding: 30px 0 15px 0;
  margin: 0;
  border-top: 1px solid #fff;
  display: block;
  overflow: auto;
  width: 100%;
}
footer#colophon .copyright .copyright-menu ul li, footer#colophon .copyright .social-icons ul li {
  display: inline-block;
  position: relative;
  float: left;
  line-height: 22px;
}
footer#colophon .copyright .copyright-menu ul li:after, footer#colophon .copyright .social-icons ul li:after {
  content: "";
  background: #fff;
  width: 2px;
  height: 14px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 0 14px;
}
footer#colophon .copyright .copyright-menu ul li:last-child:after, footer#colophon .copyright .social-icons ul li:last-child:after {
  content: none;
}
footer#colophon .copyright .copyright-menu ul li a, footer#colophon .copyright .social-icons ul li a {
  font-family: "Open Sans Bold", sans-serif;
  font-size: 14px;
  line-height: 22px;
}
footer#colophon .copyright .social-icons ul li {
  padding: 0 10px;
}
footer#colophon .copyright .social-icons ul li:last-child {
  padding: 0;
}
footer#colophon .copyright .social-icons ul li:after {
  content: none;
}

/* =============================================================================
 Forms & Templates
========================================================================== */
article.forms-templates {
  display: flex;
  border-bottom: 1px solid #e6e6e6;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 60px;
  margin: 60px 0;
}
article.forms-templates .custom-730 {
  margin: 0;
}
article.forms-templates .image-icon {
  min-width: 80px;
  text-align: center;
  padding-left: 10px;
}
article.forms-templates .image-icon img {
  max-width: 40px;
  display: block;
  margin: 0 auto 10px auto;
}
article.forms-templates h3 {
  color: #4a4a4a;
}
article.forms-templates p.lg {
  font-family: "Open Sans Regular", sans-serif;
}
article.forms-templates p.lg a {
  pointer-events: none;
  color: initial;
}
article.forms-templates .file-size {
  color: #00b5e2;
  font-size: 14px;
  line-height: 18px;
  display: inline-block;
  text-align: center;
}

.filters-checks {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
}
.filters-checks .checkbox {
  width: 25%;
  display: flex;
  align-items: center;
  padding-bottom: 30px;
}
.filters-checks .checkbox input {
  -webkit-appearance: none !important;
  border: 1px solid #4a4a4a !important;
  padding: 9px !important;
  border-radius: 2px !important;
  display: inline-block !important;
  position: relative !important;
  width: 30px;
  height: 30px;
}
.filters-checks .checkbox input:checked:after {
  content: "";
  position: absolute;
  width: 15px;
  height: 7px;
  background: transparent;
  left: 7px;
  border: 3px solid #00b5e2;
  border-top: none;
  border-right: none;
  transform: rotate(-45deg);
}
.filters-checks .input-group {
  border-top: 1px solid #78be20;
  padding-top: 45px;
}
.filters-checks .search-form-control {
  border-radius: 30px;
  border: 2px solid;
  border-color: rgba(74, 74, 74, 0.25);
  font-size: 18px;
  padding: 10px 30px !important;
  width: 100%;
  line-height: 26px;
  font-family: "Open Sans Regular", sans-serif;
  margin-bottom: 0;
}
.filters-checks .input-group-text {
  background: transparent;
  border: 0;
  position: absolute;
  right: 30px;
  padding: 0;
  height: 50px;
  vertical-align: middle;
}
.filters-checks .input-group-text i {
  color: #00b5e2;
  font-size: 18px;
  cursor: pointer;
}

.label-check {
  padding-left: 10px !important;
}

/* =============================================================================
 Review Buttons
========================================================================== */
.review-wrapper {
  margin-bottom: 0 !important;
}
.review-wrapper.wp-review-thumbs-type .user-review-area {
  padding: 10px 0px;
}
.review-wrapper.wp-review-thumbs-type .wpr-thumbs-button {
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 12px 16px;
  min-width: 97px;
  color: #666;
  border-color: #ebebeb;
  background-color: #ebebeb;
  font-size: 14px;
  line-height: 20px;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.01) 100%);
  background-repeat: repeat-x;
  transition: all 0.2s ease-in-out;
}
.review-wrapper.wp-review-thumbs-type .wpr-thumbs-button:hover, .review-wrapper.wp-review-thumbs-type .wpr-thumbs-button:active, .review-wrapper.wp-review-thumbs-type .wpr-thumbs-button:focus {
  color: #595959;
  border-color: #d7d7d7;
  background-color: #d7d7d7;
}
.review-wrapper.wp-review-thumbs-type .wpr-thumbs-button .wpr-thumbs-rating-value {
  float: right;
  margin-left: 5px;
  line-height: 21px;
  margin-top: 1px;
}
.review-wrapper.wp-review-thumbs-type .wpr-thumbs-button .wpr-thumbs-icon {
  margin: 0;
  padding: 0;
  border-radius: 0 !important;
  border: 0 !important;
  background: transparent;
}
.review-wrapper.wp-review-thumbs-type .wpr-thumbs-button .wpr-thumbs-icon .fa-thumbs-up {
  font-size: 20px;
}
.review-wrapper.wp-review-thumbs-type .wpr-thumbs-button .wpr-thumbs-icon:after {
  content: "  Like";
}

.wp-review-user-rating .review-result-wrapper span {
  padding: 0 0 0 0;
}

.review-result-wrapper .wpr-thumbs-icon.wpr-thumbs-down-icon,
.review-thumbs .wpr-thumbs-button.wpr-thumbs-down-button,
.wp-review-user-feature-rating-thumbs .wpr-thumbs-button.wpr-thumbs-down-button,
.entry-content .review-wrapper h1, .entry-content .review-wrapper h2,
.entry-content .review-wrapper h3, .entry-content .review-wrapper h4,
.entry-content .review-wrapper h5, .entry-content .review-wrapper h6,
.review-total-box, .user-review-title {
  display: none !important;
}

.review-thumbs .wpr-thumbs-button.wpr-thumbs-up-button .wpr-thumbs-icon,
.wp-review-user-feature-rating-thumbs .wpr-thumbs-button.wpr-thumbs-up-button .wpr-thumbs-icon {
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

#review,
.user-review-area.visitors-review-area {
  border: 0 !important;
}

.rating-thumbs-output .wpr-thumbs-button {
  min-width: auto;
}

.review-list .review-thumbs,
.review-list .wp-review-user-feature-rating-thumbs,
.user-review-area .review-thumbs,
.user-review-area .wp-review-user-feature-rating-thumbs {
  float: left;
}

/* =============================================================================
 Webinar Programs
========================================================================== */
#filter_webinars #selectedTags .badge {
  line-height: 45px;
  font-size: 16px;
  padding: 0 20px;
  background-color: #d9f4fa;
  margin: 5px;
  color: #00629b;
}
#filter_webinars #selectedTags .badge i {
  margin-left: 16px;
  cursor: pointer;
}
#filter_webinars .input-group {
  padding-bottom: 60px;
}
#filter_webinars .btn {
  font-family: inherit;
  font-weight: inherit;
  min-width: initial;
}
#filter_webinars .selection:first-child {
  margin-left: -15px;
}
#filter_webinars .selection:last-child {
  margin-right: -15px;
}
#filter_webinars .selection .btn-group {
  display: flex;
  width: 100%;
}
#filter_webinars .selection .btn-group .btn {
  display: flex;
  width: 100%;
  border: solid 2px rgba(74, 74, 74, 0.25);
  border-radius: 0;
  font-family: "Open Sans Regular", sans-serif;
  color: #4a4a4a;
}
#filter_webinars .selection .btn-group .dropdown-toggle:after {
  color: #00b5e2;
  font-size: 18px;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  position: absolute;
  right: 16px;
  content: "";
  border: none;
}
#filter_webinars .selection .btn-group .dropdown-menu {
  border: solid 2px rgba(74, 74, 74, 0.25);
  border-radius: 0;
  border-top: 0;
}
#filter_webinars .selection .btn-group .dropdown-menu.show {
  padding-bottom: 23px;
}
#filter_webinars .selection .btn-group .multiselect-container .checkbox {
  width: 100%;
  display: flex;
  align-items: start;
  padding-bottom: 0px;
}
#filter_webinars .selection .btn-group .multiselect-container .checkbox input {
  min-width: 27px;
  height: 27px;
  width: 27px;
  margin-bottom: 10px;
  margin-right: 24px;
}
#filter_webinars .selection .btn-group .multiselect-container > li > a > label {
  padding: 3px 20px 3px 27px;
  color: #4a4a4a;
}
#filter_webinars .selection .btn-group.show .btn {
  border-bottom: 0;
}
#filter_webinars .selection .btn-group.show .dropdown-toggle:after {
  content: "";
}
#filter_webinars .selection .btn-group.show .dropdown-menu.show {
  right: 0;
}
#filter_webinars .input-group {
  padding-bottom: 60px;
}
#filter_webinars .btn {
  font-family: inherit;
  font-weight: inherit;
  min-width: initial;
}

#response_webinars {
  display: flex;
  flex-wrap: wrap;
}

.webinar-programs {
  padding-bottom: 30px;
}
.webinar-programs .card {
  border-radius: 0;
  border-color: #bababa;
  padding: 40px 20px;
  text-align: center;
  height: 100%;
}
.webinar-programs .card h4 {
  margin-bottom: 15px !important;
}
.webinar-programs .card .custom-separator {
  margin-bottom: 30px;
}

#response .topics {
  margin-top: 15px;
  color: #78BE20;
  font-size: 22px;
  line-height: 30px;
}

#response .lg p {
  font-size: 18px;
  line-height: 26px;
}

#response .roles {
  margin-top: 15px;
  color: #4A4A4A;
  font-size: 14px;
  line-height: 22px;
}

/* =============================================================================
Media Queries
========================================================================== */
@media only screen and (max-width: 1199px) {
  .custom-850 .custom-850-img {
    left: -15px;
  }
}
@media only screen and (max-width: 1700px) {
  .reverse .first {
    padding-left: 180px;
  }
}
@media only screen and (max-width: 1024px) {
  .half .first {
    padding-right: 20px;
    padding-top: 45px !important;
  }

  .reverse .first {
    left: 45vw;
    padding-left: 40px;
  }

  footer#colophon .widget-area {
    padding-bottom: 30px;
  }

  .filters-checks .checkbox {
    width: 33.33%;
  }

  #bcarousel .carousel-item > img {
    width: 100% !important;
    max-width: 100% !important;
  }
}
@media only screen and (max-width: 992px) {
  header#masthead nav.navbar {
    height: auto !important;
  }
  header#masthead nav.navbar form {
    top: 0;
  }
  header#masthead nav.navbar li {
    padding: 5px 10px !important;
    position: relative;
  }
  header#masthead nav.navbar li.menu-item-has-children .sub-menu {
    box-shadow: none;
    transition: all 0.3s ease-in;
  }
  header#masthead nav.navbar li.menu-item-has-children .sub-menu li:after {
    display: none;
  }
  header#masthead nav.navbar li.menu-item-has-children:after {
    display: inline-block;
    content: "+";
    color: #78be20;
    width: 20px;
    height: 20px;
    font-size: 24px;
    vertical-align: middle;
    line-height: 22px;
    text-align: center;
    font-weight: lighter;
    margin-left: 2vw;
    position: absolute;
    top: 5px;
    right: 0;
  }
  header#masthead nav.navbar li.menu-item-has-children.menu-active ul {
    opacity: 1;
    height: auto;
    z-index: 1;
    overflow: auto;
    left: 0;
    position: relative;
    width: 100%;
    display: block;
  }
  header#masthead nav.navbar .navbar-brand img {
    max-width: 120px;
  }
  header#masthead nav.navbar ul.navbar-nav {
    padding: 10px 0;
  }
  header#masthead .extra-logo {
    right: 100px;
    padding: 0;
    position: absolute;
    top: 20px;
  }
  header#masthead .extra-logo img {
    max-height: 30px;
  }
  header#masthead .search-form-control {
    margin-bottom: 30px !important;
  }

  ul.sub-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    opacity: 0;
    height: 0;
    overflow: hidden;
    z-index: -1;
  }

  ul.sub-menu li a {
    font-size: 14px !important;
    line-height: 26px !important;
  }

  div#bcarousel .carousel-item {
    width: 100% !important;
    max-width: 100% !important;
  }

  .carousel img {
    width: 100%;
    height: auto;
  }

  .custom-separator .vc_sep_line {
    width: calc(100% - 55px) !important;
  }
  .custom-separator .vc_sep_line:before {
    width: 35px;
    margin-left: -55px;
  }

  .custom-separator-lg .vc_sep_line:before {
    width: 35px;
    margin-left: -55px;
  }

  .custom-850 {
    max-width: 600px;
  }
  .custom-850.half .wpb_column {
    width: 100%;
  }
  .custom-850.half .wpb_column:first-child {
    margin-left: initial;
  }
  .custom-850.half .vc_column-inner {
    padding-left: 0;
    padding-right: 0;
  }
  .custom-850 .custom-850-img {
    left: 122px;
  }

  .custom-330 {
    max-width: 100%;
  }

  h1, .h1 {
    font-size: 58px;
    line-height: 68px;
  }

  .btn {
    width: 330px;
  }

  .half .main-section-padding {
    width: 50% !important;
  }

  .main-section-padding.top {
    padding-top: 75px;
  }

  .main-section-padding.bottom {
    padding-bottom: 75px;
  }

  .section-padding.top {
    padding-top: 45px;
  }

  .section-padding.bottom {
    padding-bottom: 45px;
  }

  .main-slider-padding.full .first {
    padding-top: 45px;
    width: 100%;
    padding-bottom: 180px;
  }
  .main-slider-padding.full .first .main-slider-text-padding {
    max-width: 50%;
    padding-bottom: 30px;
  }

  .main-slider-padding .vc_col-sm-7 {
    position: absolute;
    right: 30px;
    top: 100px;
  }

  .main-slider-padding.half {
    padding-left: 0px !important;
  }

  .half-md-full .vc_col-sm-6 {
    width: 100%;
  }

  .half .image-phrase.second.main-slider-img .wpb_single_image {
    height: 60% !important;
  }
  .half .image-phrase.second.main-slider-img .text {
    margin-top: 30px;
    padding-right: 30px;
    display: block;
  }
  .half .image-phrase.second.main-slider-img .text h4 {
    text-align: left !important;
  }

  .overlap-white {
    background-image: linear-gradient(103deg, #ffac52, #e87722);
    margin: 0 !important;
    margin-top: -1px !important;
  }

  .section-padding.bottom-overlap {
    padding-bottom: 0;
  }

  #filter_webinars .input-group {
    padding-bottom: 45px;
  }

  .webinar-programs.col-md-4 {
    max-width: 50%;
    flex: 0 0 50%;
  }

  .box-tablet .vc_col-sm-4 {
    width: 50%;
    padding: 15px !important;
  }
  .box-tablet .vc_col-sm-4 .vc_column-inner {
    min-height: 405px;
  }

  footer#colophon .main-content {
    padding-bottom: 0px;
  }
  footer#colophon .copyright .copyright-menu p, footer#colophon .copyright .social-icons p {
    max-width: 100%;
  }
}
@media only screen and (max-width: 767px) {
  h1, .h1 {
    font-size: 54px;
    line-height: 68px;
  }

  h2, .h2 {
    font-size: 38px;
    line-height: 46px;
  }

  .btn {
    max-width: 100%;
    width: 100%;
  }

  .box-padding.top {
    padding-top: 60px;
  }

  .main-slider-padding.full .first {
    width: initial;
    padding-bottom: 0;
  }
  .main-slider-padding.full .first .main-slider-text-padding {
    max-width: initial;
  }

  .main-slider-padding .vc_col-sm-7 {
    position: relative;
    right: initial;
    top: initial;
  }

  .half .main-section-padding {
    width: 100% !important;
  }

  .large-slider-padding {
    padding-left: 0px !important;
    padding-right: 0 !important;
  }
  .large-slider-padding.top {
    padding-top: 0px;
  }
  .large-slider-padding.top.slider {
    padding: 45px 15px 30px 15px !important;
  }
  .large-slider-padding .second {
    position: relative;
    width: 100vw;
  }

  .reverse .second {
    position: relative;
    width: 100vw;
  }

  .reverse .first {
    padding-right: 0px;
    padding-top: 45px;
    left: initial;
  }
  .reverse .first .vc_column-inner {
    padding: 0px;
  }

  .half .first {
    padding-right: 0px;
    padding-top: 45px;
  }

  .half .second.main-slider-img .wpb_wrapper, .half .second.main-slider-img .wpb_single_image, .half .second.main-slider-img .vc_figure, .half .second.main-slider-img .vc_single_image-wrapper, .half .second.main-slider-img img {
    height: initial;
  }

  .half .image-phrase.second.main-slider-img .wpb_single_image {
    height: 100% !important;
  }

  .large-slider-padding.top.slider.mobile-center {
    text-align: center !important;
    padding-top: 0 !important;
  }
  .large-slider-padding.top.slider.mobile-center .vc_separator {
    margin: 0 auto;
  }

  .box-tablet .vc_col-sm-4 {
    width: 100%;
    padding: 15px 0 !important;
  }
  .box-tablet .vc_col-sm-4 .vc_column-inner {
    min-height: auto;
  }

  .text.green h4 {
    text-align: left !important;
  }

  footer#colophon .main-content {
    padding-bottom: 30px;
  }
  footer#colophon .copyright .copyright-menu p, footer#colophon .copyright .social-icons p {
    max-width: 100%;
  }
  footer#colophon .copyright .copyright-menu ul li, footer#colophon .copyright .social-icons ul li {
    display: block;
    float: initial;
    margin-bottom: 15px;
  }
  footer#colophon .copyright .copyright-menu ul li:after, footer#colophon .copyright .social-icons ul li:after {
    content: none;
  }

  article.forms-templates {
    display: block;
  }
  article.forms-templates .image-icon {
    padding-left: 30px;
    text-align: left;
    min-width: auto;
  }
  article.forms-templates .image-icon img {
    margin: 0 0 10px 0;
  }

  .filters-checks {
    display: block;
  }
  .filters-checks .checkbox {
    width: 100%;
  }
  .filters-checks .search-form-control {
    font-size: 14px;
  }

  .webinar-programs {
    padding-left: 0;
    padding-right: 0;
  }
  .webinar-programs.col-md-4 {
    max-width: 100%;
    flex: 0 0 100%;
  }
}
@media only screen and (max-width: 375px) {
  .btn {
    height: auto;
  }
}
@media only screen and (max-width: 414px) {
  .custom-850 .custom-850-img {
    display: none;
  }
}
/* iPad Pro Portrait */
@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
  body.page-id-2 .main-slider-padding .first {
    padding-bottom: 100px;
  }

  .custom-850 .custom-850-img {
    left: 0;
  }
}
@media only screen and (min-width: 768px) and (max-width: 992px) {
  .custom-850 .custom-850-img {
    left: 0;
  }

  .page-id-181 .box-tablet .vc_col-sm-4:nth-child(even) {
    padding-right: 0 !important;
  }
  .page-id-181 .box-tablet .vc_col-sm-4:nth-child(odd) {
    padding-left: 0 !important;
  }
  .page-id-181 .box-tablet .vc_col-sm-4 .vc_column-inner {
    min-height: 405px;
  }

  .page-id-114 .box-tablet .vc_col-sm-4:nth-child(even) {
    padding-left: 0 !important;
  }
  .page-id-114 .box-tablet .vc_col-sm-4:nth-child(odd) {
    padding-right: 0 !important;
  }

  .main-gradient {
    background-image: linear-gradient(113deg, #78be20 -35%, #00b5e2 70%, #00629b 100%);
  }
}

/*# sourceMappingURL=styles.css.map */
mn-count: 2;">
<li>Direct participation</li>
<li>Due process</li>
<li>Broad consensus</li>
<li>Balance</li>
<li>Transparency</li>
<li>Broad openness</li>
<li>Coherence</li>
<li>Development dimension</li>
</ul>

		</div>
	</div>
<h5 style="text-align: left" class="vc_custom_heading h6 mt-5" >Related Link</h5>
	<div class="wpb_text_column wpb_content_element " >
		<div class="wpb_wrapper">
			<ul>
<li><a class="arrow-link" href="http://globalpolicy.ieee.org/wp-content/uploads/2020/08/IEEE20014.pdf" target="_blank" rel="noopener">IEEE Standards Development Principles</a></li>
</ul>

		</div>
	</div>
</div></div></div></div></div></div><div class="vc_tta-panel" id="our-governing-documents" data-vc-content=".vc_tta-panel-body"><div class="vc_tta-panel-heading"><h5 class="vc_tta-panel-title vc_tta-controls-icon-position-right"><a href="#our-governing-documents" data-vc-accordion data-vc-container=".vc_tta-container"><span class="vc_tta-title-text">Our Governing Documents</span><i class="vc_tta-controls-icon vc_tta-controls-icon-chevron"></i></a></h5></div><div class="vc_tta-panel-body"><div class="vc_row wpb_row vc_inner vc_row-fluid bg-white"><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner"><div class="wpb_wrapper">
	<div class="wpb_text_column wpb_content_element " >
		<div class="wpb_wrapper">
			<p>IEEE and the IEEE Standards Association (IEEE SA) governing bodies are responsible for maintaining and overseeing the following governance documents:</p>
<div class="left-par">
<div class="right-par">
<div class="rte">
<div>
<div>
<table class="tblcontent" border="1" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<th>Governance Document</th>
<th>Description</th>
<th>Governing Body</th>
</tr>
<tr>
<td><a href="https://www.ieee.org/about/corporate/governance/index.html" target="_blank" rel="noopener">IEEE Constitution, Bylaws and Policies</a></td>
<td>Govern the operation of IEEE</td>
<td>IEEE Board of Directors</td>
</tr>
<tr>
<td><a href="/about/policies/sa-opman/">IEEE SA Operations Manual</a></td>
<td>Govern the operation of the IEEE SA</td>
<td>IEEE SA Board of Governors</td>
</tr>
<tr>
<td><a href="/about/policies/bylaws/">IEEE SA Standards Board Bylaws</a></td>
<td>Govern the operation of the IEEE SA Standards Board</td>
<td>IEEE SA Board of Governors</td>
</tr>
<tr>
<td><a href="/about/policies/opman/">IEEE SA Standards Board Operations Manual</a></td>
<td>Govern the management of the standards development process</td>
<td>IEEE SA Standards Board</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>

		</div>
	</div>
</div></div></div></div></div></div><div class="vc_tta-panel" id="overseeing-the-process" data-vc-content=".vc_tta-panel-body"><div class="vc_tta-panel-heading"><h5 class="vc_tta-panel-title vc_tta-controls-icon-position-right"><a href="#overseeing-the-process" data-vc-accordion data-vc-container=".vc_tta-container"><span class="vc_tta-title-text">Overseeing the Process</span><i class="vc_tta-controls-icon vc_tta-controls-icon-chevron"></i></a></h5></div><div class="vc_tta-panel-body"><div class="vc_row wpb_row vc_inner vc_row-fluid bg-white"><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner"><div class="wpb_wrapper"><h5 style="text-align: left" class="vc_custom_heading h6" >Governance and Oversight of the IEEE SA</h5>
	<div class="wpb_text_column wpb_content_element " >
		<div class="wpb_wrapper">
			<p><a href="/about/bog/" rel="noopener">IEEE SA Board of Governors</a> (BOG) members are elected by IEEE SA members.</p>
<p>The BOG establishes the guidelines and directs the operation of the IEEE SA, and is beholden to the IEEE Bylaws and maintains the established policies and procedures for the operation of the IEEE SA in the IEEE SA Operations Manual. The IEEE SA President serves as the Chair of the BOG and reports to the IEEE Board of Directors as the representative for the IEEE SA.</p>

		</div>
	</div>
<h5 style="text-align: left" class="vc_custom_heading h6 mt-5" >Governance and Oversight for the IEEE Standards Development Process</h5>
	<div class="wpb_text_column wpb_content_element " >
		<div class="wpb_wrapper">
			<p>The <a href="/about/sasb/" rel="noopener">IEEE SA Standards Board</a> (SASB) reports directly to the <a href="/about/bog/" rel="noopener">IEEE SA BOG</a>, and oversees the IEEE standards development process as set forth by the <a href="/about/policies/sa-opman/" rel="noopener">IEEE SA Operations Manual</a> and <a href="/about/policies/bylaws/" rel="noopener">Bylaws</a>. It also provides guidelines for the development of individual and entity standards. Standards Board members are appointed by the BOG and must be IEEE SA members in good standing.</p>
<p>The following committees have been appointed by IEEE SASB to facilitate the standards development process:</p>
<ul>
<li><a href="/about/sasb/nescom/" rel="noopener">New Standards Committee (NesCom</a>) &#8211; Recommends the approval of new or revised standards project requests to the SASB.</li>
<li><a href="/about/sasb/revcom/" rel="noopener">Standards Review Committee (RevCom)</a> &#8211; Recommends the approval of standards to the SASB.</li>
<li><a href="/about/sasb/procom/" rel="noopener">Procedures Committee (ProCom)</a> &#8211; Recommends to the SASB improvements and changes in procedures to promote efficient discharge of responsibilities by the SASB, its committees, and other IEEE committees engaged in standards activities.</li>
<li><a href="/about/sasb/patcom/" rel="noopener">Patent Committee (PatCom)</a> &#8211; Recommends updates to the IEEE SA patent policy, provides educational material related to the patent policy, and reviews conformity with the patent policy procedures.</li>
<li><a href="/about/sasb/audcom/" rel="noopener">Audit Committee (AudCom)</a> &#8211; Conducts routine reviews and inspections to assure that each standards-developing entity, through its Standards Committee and Working Group policies and procedures (P&amp;P), is adhering to the procedures described in the <a href="/about/policies/bylaws/" rel="noopener">IEEE SA Standards Board Bylaws</a> and the <a href="/about/policies/opman/" rel="noopener">IEEE SA Standards Board Operations Manual</a>.</li>
</ul>
<p><a class="arrow-link" href="/about/policies">View more information about the policies of the IEEE SA BOG and IEEE SA SASB</a></p>

		</div>
	</div>
</div></div></div></div></div></div><div class="vc_tta-panel" id="financial-reporting" data-vc-content=".vc_tta-panel-body"><div class="vc_tta-panel-heading"><h5 class="vc_tta-panel-title vc_tta-controls-icon-position-right"><a href="#financial-reporting" data-vc-accordion data-vc-container=".vc_tta-container"><span class="vc_tta-title-text">Financial Reporting</span><i class="vc_tta-controls-icon vc_tta-controls-icon-chevron"></i></a></h5></div><div class="vc_tta-panel-body"><div class="vc_row wpb_row vc_inner vc_row-fluid bg-white"><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner"><div class="wpb_wrapper"><h5 style="text-align: left" class="vc_custom_heading h6" >Annual Report Deadline</h5>
	<div class="wpb_text_column wpb_content_element " >
		<div class="wpb_wrapper">
			<p>15 February</p>

		</div>
	</div>
<h5 style="text-align: left" class="vc_custom_heading h6 mt-5" >IEEE SA Financial Certification Form</h5>
	<div class="wpb_text_column wpb_content_element " >
		<div class="wpb_wrapper">
			<p>All Standards Committees must submit the <a href="https://live.runmyprocess.com/live/2215365968/appli/422277?P_mode=LIVE&amp;P_version=" target="_blank" rel="noopener">IEEE SA Financial Certification Form</a>. If a Standards Committee and/or its Working Groups do not have a NextGen banking account, the Standards Committee Chair certifies that their groups did not have financial activity for that year.</p>
<p>If the Standards Committee and/or its Working Group(s) has a NextGen banking account, both the Standards Committee Chair and Treasurer and the Working Group Chair and Treasurer must complete the IEEE SA Financial Certification Form.</p>

		</div>
	</div>
<h5 style="text-align: left" class="vc_custom_heading h6 mt-5" >For groups that have a NextGen banking account, the IEEE SA Financial Certification Form requires submission of the following:</h5>
	<div class="wpb_text_column wpb_content_element " >
		<div class="wpb_wrapper">
			<ol>
<li>Certification that all transaction detail has been posted to NextGen Financials Cloud</li>
<li>Principle of Business Conduct/Conflict of Interest (POBC/COI) form</li>
</ol>
<p>Per <a href="/about/policies/opman/sect5/#5.3.7" rel="noopener">subclause 5.3.7 of the IEEE SA Standards Board Operations Manual</a>, all Standards Committees and Working Groups must use the banking services provided by the IEEE Treasury department as their only bank account.</p>
<p>All Standards Committees and Working Groups with a NextGen Banking account may be subject to audit. See <a href="/about/policies/opman/sect5/#5.3.8" rel="noopener">subclause 5.3.8 of the IEEE SA Standards Board Operations Manual</a> for more information.</p>
<p>Questions should be directed to the IEEE Internal Audit Director at <a href="/cdn-cgi/l/email-protection#9ff0efecb2feeafbf6ebdff6fafafab1f0edf8" target="_blank" rel="noopener"><span class="__cf_email__" data-cfemail="533c23207e3226373a27133a3636367d3c2134">[email&#160;protected]</span></a>.</p>

		</div>
	</div>
<h5 style="text-align: left" class="vc_custom_heading h6 mt-5" >Related Links</h5>
	<div class="wpb_text_column wpb_content_element " >
		<div class="wpb_wrapper">
			<ul>
<li><a class="arrow-link" href="https://live.runmyprocess.com/live/2215365968/appli/422277?P_mode=LIVE&amp;P_version=" target="_blank" rel="noopener">IEEE SA Financial Certification Form</a></li>
<li><a class="arrow-link" href="/faqs/banking/" rel="noopener">FAQs: Concentration Banking &amp; Financial Reporting\</a></li>
</ul>

		</div>
	</div>
</div></div></div></div></div></div><div class="vc_tta-panel" id="training-and-development" data-vc-content=".vc_tta-panel-body"><div class="vc_tta-panel-heading"><h5 class="vc_tta-panel-title vc_tta-controls-icon-position-right"><a href="#training-and-development" data-vc-accordion data-vc-container=".vc_tta-container"><span class="vc_tta-title-text">Training and Development</span><i class="vc_tta-controls-icon vc_tta-controls-icon-chevron"></i></a></h5></div><div class="vc_tta-panel-body"><div class="vc_row wpb_row vc_inner vc_row-fluid bg-white"><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner"><div class="wpb_wrapper">
	<div class="wpb_text_column wpb_content_element " >
		<div class="wpb_wrapper">
			<p>A Working Group Chair Fundamentals online course on the IEEE SA standards development process is now available for free. This course not only provides Working Group Chairs with the fundamentals needed to chair a working group but also provides information to Working Group participants or anyone interested in participating in IEEE Standards about the process.</p>
<p><a class="arrow-link" href="/about/training/" rel="noopener">Learn More</a></p>

		</div>
	</div>
</div></div></div></div></div></div></div></div></div></div></div></div></div><div class="right wpb_column vc_column_container vc_col-sm-4" id="inner-sidebar"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="vc_row wpb_row vc_inner vc_row-fluid widget swap-on-mobile mt-5 mt-md-0"><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner"><div class="wpb_wrapper"><div style="text-align: left" class="vc_custom_heading widget-title" >Standards Development Life Cycle</div>
	<div class="wpb_raw_code wpb_content_element wpb_raw_html" >
		<div class="wpb_wrapper">
			<?xml version="1.0" encoding="UTF-8"?>
<svg enable-background="new 0 0 720 720" version="1.1" viewBox="0 0 720 720" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
<style type="text/css">
/*Color and Fill Styles*/
.st0{fill:#5D9CC3;stroke:#D9D9D6;stroke-width:5;stroke-miterlimit:10;}
.st1{fill:none;}
.st2{font-size:1.25rem;font-weight:700}
.st3{fill:#97BDD7;stroke:#D9D9D6;stroke-width:5;stroke-miterlimit:10;}
.st4{fill:#005D94;stroke:#D9D9D6;stroke-width:5;stroke-miterlimit:10;}
.st5{fill:#FFFFFF;font-weight:700}
.st6{font-size:1.5rem;}

/*Sliding Effect upon Hover*/
.hyperdiagram-1:hover {
transform: translate(5px, -10px);
}

.hyperdiagram-2:hover {
transform: translate(10px, 0px);
}

.hyperdiagram-3:hover {
transform: translate(5px, 10px);
}

.hyperdiagram-4:hover {
transform: translate(-5px, 10px);
}

.hyperdiagram-5:hover {
transform: translate(-10px, 0px);
}

.hyperdiagram-6:hover {
transform: translate(-5px, -10px);
}

/*Sliding Effect Transitions*/
.hyperdiagram-1:hover, .hyperdiagram-2:hover, .hyperdiagram-3:hover, .hyperdiagram-4:hover, .hyperdiagram-5:hover, .hyperdiagram-6:hover {
transition:0.3s;
cursor: pointer;
}

/*Color Change Upon Hover*/
.hyperdiagram-1:hover path, .hyperdiagram-2:hover path, .hyperdiagram-3:hover path, .hyperdiagram-4:hover path, .hyperdiagram-5:hover path, .hyperdiagram-6:hover path {
fill:#E4E6EC;
stroke:#262626;
transition:0.3s;
}
</style>

<!--Stage 1: Initiating the Project-->
<a class="hyperdiagram-1" href="https://standards.ieee.org/develop/initiating-project/">	
	<path class="st0" d="m660.29 186.62-300.3 173.38v-346.7c128.32 0 240.35 69.71 300.3 173.32z"/>
	<rect class="st1" x="359.99" y="122.01" width="248.91" height="50.24"/>
	<text transform="translate(445.85 142.73)"><tspan class="st2" x="0" y="0">Stage 1: </tspan><tspan class="st2" x="-64.85" y="24">Initiating the Project</tspan></text>
</a>

<!--Stage 2: Mobilizing the Working Group-->
<a class="hyperdiagram-2" href="https://standards.ieee.org/develop/mobilizing-working-group/">	
	<path class="st3" d="m706.69 360c0 63.16-16.89 122.38-46.4 173.38l-300.3-173.38 300.3-173.38c29.52 51 46.4 110.22 46.4 173.38z"/>
	<rect class="st1" x="501.2" y="326" width="205.45" height="68"/>
	<text transform="translate(565.32 341.2)"><tspan class="st2" x="0" y="0">Stage 2: </tspan><tspan class="st2" x="-32.07" y="24">Mobilizing the </tspan><tspan class="st2" x="-36.74" y="48">Working Group</tspan></text>
</a>	

<!--Stage 3: Drafting the Standard-->
<a class="hyperdiagram-3" href="https://standards.ieee.org/develop/drafting-standard/">	
	<path class="st0" d="m660.29 533.38c-59.95 103.61-171.98 173.32-300.3 173.32v-346.7l300.3 173.38z"/>
	<rect class="st1" x="360" y="549.59" width="259.26" height="40.58"/>
	<text transform="translate(451.03 564.79)"><tspan class="st2" x="0" y="0">Stage 3: </tspan><tspan class="st2" x="-70.58" y="24">Drafting the Standard</tspan></text>
</a>

<!--Stage 4: Balloting the Standard-->
<a class="hyperdiagram-4" href="https://standards.ieee.org/develop/balloting-standard/">
	<path class="st3" d="M359.99,360v346.7c-128.32,0-240.35-69.71-300.29-173.33L359.99,360z"/>
	<rect class="st1" x="92.69" y="549.59" width="267.31" height="40.58"/>
	<text transform="translate(187.74 564.79)"><tspan class="st2" x="0" y="0">Stage 4: </tspan><tspan class="st2" x="-73.78" y="24">Balloting the Standard</tspan></text>
</a>
	
<!--Stage 5: Gaining the Final Approval-->
<a class="hyperdiagram-5" href="https://standards.ieee.org/develop/gaining-final-approval/">
	<path class="st0" d="M359.99,360L59.71,533.37c-29.52-51-46.4-110.21-46.4-173.37s16.89-122.37,46.4-173.37L359.99,360z"/>
	<rect class="st1" x="13.31" y="326" width="205.5" height="68"/>
	<text transform="translate(77.45 341.2)"><tspan class="st2" x="0" y="0">Stage 5: </tspan><tspan class="st2" x="-18.99" y="24">Gaining the </tspan><tspan class="st2" x="-33.27" y="48">Final Approval</tspan></text>
</a>

<!--Stage 6: Maintaining the Standard-->
<a class="hyperdiagram-6" href="https://standards.ieee.org/develop/maintaining-standard/">	
	<path class="st3" d="M359.99,13.3V360L59.71,186.63C119.64,83.01,231.68,13.3,359.99,13.3z"/>
	<rect class="st1" x="88.46" y="123.28" width="271.54" height="47.7"/>
	<text transform="translate(185.63 138.48)"><tspan class="st2" x="0" y="0">Stage 6: </tspan><tspan class="st2" x="-89.48" y="24">Maintaining the Standard</tspan></text>
</a>	

<!--Center: Standards Development Lifecycle-->
	<circle class="st4" cx="360" cy="360" r="141.2"/>
	<rect class="st1" x="218.8" y="215.72" width="282.39" height="288.56"/>
	<text transform="translate(299.2 354.72)"><tspan class="st5 st6" x="0" y="0">Standards </tspan><tspan class="st5 st6" x="-54.25" y="28.8">Development Cycle</tspan></text>
</svg>
		</div>
	</div>
</div></div></div></div></div></div></div></div>
</div></div><!-- .post -->                </div> <!-- /#main-content .col-12 -->
            </div> <!-- /.row -->
        </div> <!-- /.container -->
    </section> <!-- /#content -->
</main>

    <footer>
        <section id="footer-top">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-sm-4">
                        <div id="footer-logo" class="logo">
                            <a class="logo-link" href="https://www.ieee.org/" title="Visit IEEE.org"><img  alt="IEEE logo" data-src="https://standards.ieee.org/wp-content/themes/ieee-sa-theme/img/ieee-logo2x.png" class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="></a>
                        </div> <!-- /#footer-logo .logo -->
                    </div> <!-- /.col-12 .col-sm-4 -->
                    <div class="col-12 col-sm-8">
                        <div id="social-media">
                            <ul class="nav social-media justify-content-sm-end">
                                <li class="nav-item"><a class="nav-link social-icon social-linkedin" href="https://www.linkedin.com/company/ieee-sa-ieee-standards-association/" title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i> <span class="sr-only">LinkedIn</span></a></li>
                                <li class="nav-item"><a class="nav-link social-icon social-facebook" href="https://www.facebook.com/ieeesa/" title="Facebook"><i class="fa-brands fa-facebook-f"></i> <span class="sr-only">Facebook</span></a></li>
                                <li class="nav-item"><a class="nav-link social-icon social-instagram" href="https://www.instagram.com/ieeesa/" title="Instagram"><i class="fa-brands fa-instagram"></i> <span class="sr-only">Instagram</span></a></li>
                                <li class="nav-item"><a class="nav-link social-icon social-youtube" href="https://www.youtube.com/ieeesa" title="YouTube"><i class="fa-brands fa-youtube"></i> <span class="sr-only">YouTube</span></a></li>
                                <li class="nav-item"><a class="nav-link social-icon social-twitter" href="https://twitter.com/ieeesa" title="Twitter"><i class="fa-brands fa-x-twitter"></i> <span class="sr-only">X</span></a></li>
                                <li class="nav-item"><a class="nav-link social-icon social-rss" href="/category/beyond-standards/feed/" title="Beyond Standards RSS Feed"><i class="fa-solid fa-rss"></i> <span class="sr-only">Beyond Standards RSS Feed</span></a></li>
                            </ul> <!-- /.nav .social-media -->
                        </div> <!-- /#social-media -->
                    </div> <!-- /.col-12 .col-sm-8 -->
                </div> <!-- /.row -->
            </div> <!-- /.container -->
        </section> <!-- /#footer-top -->

        <section id="footer-widgets">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-3"><!-- begin column -->
<div class="widget"><!-- begin widget -->
<div class="widget-title">IEEE SA</div>
<div class="menu-footer-menu-ieee-sa-container"><ul id="menu-footer-menu-ieee-sa" class="menu"><li id="menu-item-8437" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8437"><a href="https://standards.ieee.org/about/">About Us</a></li>
<li id="menu-item-8370" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8370"><a href="https://standards.ieee.org/about/membership/">IEEE SA Membership</a></li>
<li id="menu-item-8371" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8371"><a href="https://standards.ieee.org/about/memberorgs/">Entity Program</a></li>
<li id="menu-item-9418" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9418"><a href="https://standards.ieee.org/about/distrib/">Distributor Partner Program</a></li>
<li id="menu-item-8372" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8372"><a href="https://standards.ieee.org/about/training/">Training &#038; Development</a></li>
<li id="menu-item-8438" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8438"><a href="https://standards.ieee.org/about/policies/">Policies &#038; Procedures</a></li>
<li id="menu-item-8439" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8439"><a href="https://standards.ieee.org/about/contact/">Contact Us</a></li>
</ul></div></div>
<!-- end widget -->
</div><!-- end column -->
<div class="col-12 col-sm-6 col-md-3"><!-- begin column -->
<div class="widget"><!-- begin widget -->
<div class="widget-title">Board of Governors</div>
<div class="menu-footer-menu-board-of-governors-container"><ul id="menu-footer-menu-board-of-governors" class="menu"><li id="menu-item-8363" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8363"><a href="https://standards.ieee.org/about/bog/">About Board of Governors</a></li>
<li id="menu-item-8364" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8364"><a href="https://standards.ieee.org/about/bog/arcom/">Awards Committee</a></li>
<li id="menu-item-8365" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8365"><a href="https://standards.ieee.org/about/bog/cag/">Entity Collaborative Activities Governance Board</a></li>
<li id="menu-item-8366" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8366"><a href="https://standards.ieee.org/about/bog/iccom/">Industry Connections Committee</a></li>
<li id="menu-item-8367" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8367"><a href="https://standards.ieee.org/about/bog/rac/">Registration Authority Committee</a></li>
<li id="menu-item-8368" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8368"><a href="https://standards.ieee.org/about/bog/spcc/">Strategic Planning Coordination Committee</a></li>
</ul></div></div>
<!-- end widget -->
</div><!-- end column -->
<div class="col-12 col-sm-6 col-md-3"><!-- begin column -->
<div class="widget"><!-- begin widget -->
<div class="widget-title">Standards Board</div>
<div class="menu-footer-menu-standards-board-container"><ul id="menu-footer-menu-standards-board" class="menu"><li id="menu-item-8378" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8378"><a href="https://standards.ieee.org/about/sasb/">About Standards Board</a></li>
<li id="menu-item-8379" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8379"><a href="https://standards.ieee.org/about/sasb/sba/">Board Approvals</a></li>
<li id="menu-item-8380" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8380"><a href="https://standards.ieee.org/about/sasb/audcom/">Audit Committee</a></li>
<li id="menu-item-8381" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8381"><a href="https://standards.ieee.org/about/sasb/nescom/">New Standards Committee</a></li>
<li id="menu-item-8382" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8382"><a href="https://standards.ieee.org/about/sasb/patcom/">Patent Committee</a></li>
<li id="menu-item-8383" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8383"><a href="https://standards.ieee.org/about/sasb/procom/">Procedures Committee</a></li>
<li id="menu-item-8384" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8384"><a href="https://standards.ieee.org/about/sasb/revcom/">Standards Review Committee</a></li>
</ul></div></div>
<!-- end widget -->
</div><!-- end column -->
<div class="col-12 col-sm-6 col-md-3"><!-- begin column -->
<div class="widget"><!-- begin widget -->
<div class="widget-title">News &#038; Events</div>
<div class="menu-footer-menu-news-events-container"><ul id="menu-footer-menu-news-events" class="menu"><li id="menu-item-8440" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8440"><a href="https://standards.ieee.org/news/">News</a></li>
<li id="menu-item-8376" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8376"><a href="https://standards.ieee.org/news/swire/">IEEE SA Newsletter</a></li>
<li id="menu-item-8441" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8441"><a href="https://standards.ieee.org/events/">Events</a></li>
<li id="menu-item-12798" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12798"><a href="https://standards.ieee.org/beyond-standards/">Beyond Standards Blog</a></li>
</ul></div></div>
<!-- end widget -->
</div><!-- end column -->
                </div> <!-- /.row -->
            </div> <!-- /.container -->
        </section> <!-- /#footer-widgets -->

        <section id="footer-bar">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <ul class="nav footer-bar">
                            <li class="nav-item"><a class="nav-link" href="/" title="Home">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="/sitemap/" title="Sitemap">Sitemap</a></li>
                            <li class="nav-item"><a class="nav-link" href="https://www.ieee.org/about/contact.html" target="_blank" title="Contact &amp; Support">Contact &amp; Support</a></li>
                            <li class="nav-item"><a class="nav-link" href="https://www.ieee.org/accessibility-statement.html" target="_blank" title="Accessibility">Accessibility</a></li>
                            <li class="nav-item"><a class="nav-link" href="https://www.ieee.org/about/corporate/governance/p9-26.html" target="_blank" title="Nondiscrimination Policy">Nondiscrimination Policy</a></li>
                            <li class="nav-item"><a class="nav-link" href="https://secure.ethicspoint.com/domain/media/en/gui/20410/index.html" target="_blank" title="IEEE Ethics Reporting">IEEE Ethics Reporting</a></li>
                            <li class="nav-item"><a class="nav-link" href="https://www.ieee.org/security-privacy.html" target="_blank" title="IEEE Privacy Policy">IEEE Privacy Policy</a></li>
                            <li class="nav-item"><a class="nav-link" href="/ipr/" title="IEEE SA Copyright Policy">IEEE SA Copyright Policy</a></li>
                        </ul> <!-- /.nav .footer -->
                        <div id="copyright">
                            <p>&copy; Copyright <span id="copyright-year">2021</span> IEEE &ndash; All rights reserved. Use of this website signifies your agreement to the <a class="footer-link" href="https://www.ieee.org/about/help/site-terms-conditions.html" target="_blank" title="IEEE Terms and Conditions">IEEE Terms and Conditions</a>.<br>A not-for-profit organization, IEEE is the world&rsquo;s largest technical professional organization dedicated to advancing technology for the benefit of humanity.</p>
                        </div> <!-- /#copyright -->
                    </div> <!-- /.col-12 -->
                </div> <!-- /.row -->
            </div> <!-- /.container -->
        </section> <!-- /#footer-bar -->
    </footer>

    <button class="btn btn-subscribe" type="button" data-bs-toggle="offcanvas" data-bs-target="#newsletter-subscribe" aria-controls="newsletter-subscribe" aria-label="Toggle newsletter subscribe form" role="region">Subscribe</button> <!-- /.btn .btn-subscribe -->

    <div id="newsletter-subscribe" class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" aria-labelledby="newsletter-subscribe-title">
        <div class="offcanvas-header">
            <h5 class="h2 offcanvas-title" id="newsletter-subscribe-title">Subscribe</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div> <!-- /.offcavas-header -->
        <div class="offcanvas-body">
            <p>Sign up for our monthly newsletter to learn about new developments, including resources, insights and more.</p>
            <!-- Marketo Form -->
            <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="//app-ab28.marketo.com/js/forms2/js/forms2.min.js"></script>
<form id="mktoForm_1022" class="marketoForm"></form>
<script>MktoForms2.loadForm("//app-ab28.marketo.com", "211-FYL-955", 1022);</script>

<!--Script to display a confirmation message after submission-->
<script src="//app-ab28.marketo.com/js/forms2/js/forms2.js"></script>
<script>
MktoForms2.whenReady(function (form){
  var subscribeForms = [1022];
  if ( subscribeForms.indexOf(form.getId()) != -1 ) {
	  form.onSuccess(function(values, followUpUrl){
	   form.getFormElem().hide();
	   document.getElementById('confirmform').style.visibility = 'visible';
	   return false;
     });
  }
});
</script>
<div id="confirmform" style="visibility:hidden;"><p><strong>Thank you for signing up for the IEEE SA Newsletter. Check your email for a confirmation message.</strong></p></div>
        </div> <!-- /.offcavas-body -->
    </div> <!-- /#newsletter-subscribe .offcanvas -->


    <div class="screen-darken"></div> <!-- /.screen-darken -->

   <!-- <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <script>
        // offcanvas mobile menu
        function darken_screen(yesno) {
            if( yesno == true ) {
                document.querySelector('.screen-darken').classList.add('active');
            }
            else if(yesno == false) {
                document.querySelector('.screen-darken').classList.remove('active');
            }
        }

        function close_offcanvas() {
            darken_screen(false);
            document.querySelector('#mobile-menu.show').classList.remove('show');
            document.body.classList.remove('offcanvas-active');
        }

        function show_offcanvas(offcanvas_id) {
            darken_screen(true);
            document.getElementById(offcanvas_id).classList.add('show');
            document.body.classList.add('offcanvas-active');
        }


        document.addEventListener('DOMContentLoaded', function() {

            // affix header to top on scroll
            window.addEventListener('scroll', function() {

                if (window.scrollY > 50) {

                    document.getElementById('top-bar').classList.add('d-none');
                    document.getElementById('masthead').classList.add('fixed-top');

                    // add padding top to show content behind navbar
                    mastheadHeight = document.querySelector('#masthead').offsetHeight;

                    document.body.style.paddingTop = mastheadHeight + 'px';

                } else {

                    document.getElementById('top-bar').classList.remove('d-none');
                    document.getElementById('masthead').classList.remove('fixed-top');

                    // remove padding top from body
                    document.body.style.paddingTop = '0';
                }
            });



            // offcanvas mobile menu
            document.querySelectorAll('[data-trigger]').forEach(function(everyelement) {
                let offcanvas_id = everyelement.getAttribute('data-trigger');
                everyelement.addEventListener('click', function (e) {
                    e.preventDefault();
                    show_offcanvas(offcanvas_id);
                });
            });

            document.querySelectorAll('.btn-close').forEach(function(everybutton) {
                everybutton.addEventListener('click', function (e) {
                    close_offcanvas();
                });
            });

            document.querySelector('.screen-darken').addEventListener('click', function(event) {
                close_offcanvas();
            });
        });
        // DOMContentLoaded end



        // display current year
        document.querySelector('#copyright-year').innerText = new Date().getFullYear();
    </script>

    		<script>
		( function ( body ) {
			'use strict';
			body.className = body.className.replace( /\btribe-no-js\b/, 'tribe-js' );
		} )( document.body );
		</script>
		<script> /* <![CDATA[ */var tribe_l10n_datatables = {"aria":{"sort_ascending":": activate to sort column ascending","sort_descending":": activate to sort column descending"},"length_menu":"Show _MENU_ entries","empty_table":"No data available in table","info":"Showing _START_ to _END_ of _TOTAL_ entries","info_empty":"Showing 0 to 0 of 0 entries","info_filtered":"(filtered from _MAX_ total entries)","zero_records":"No matching records found","search":"Search:","all_selected_text":"All items on this page were selected. ","select_all_link":"Select all pages","clear_selection":"Clear Selection.","pagination":{"all":"All","next":"Next","previous":"Previous"},"select":{"rows":{"0":"","_":": Selected %d rows","1":": Selected 1 row"}},"datepicker":{"dayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"dayNamesShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"dayNamesMin":["S","M","T","W","T","F","S"],"monthNames":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthNamesShort":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthNamesMin":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"nextText":"Next","prevText":"Prev","currentText":"Today","closeText":"Done","today":"Today","clear":"Clear"}};/* ]]> */ </script><link rel='stylesheet' id='vc_tta_style-css' href='https://standards.ieee.org/wp-content/plugins/js_composer/assets/css/js_composer_tta.min.css?ver=7.3' type='text/css' media='all' />
<link rel='stylesheet' id='vc_animate-css-css' href='https://standards.ieee.org/wp-content/plugins/js_composer/assets/lib/bower/animate-css/animate.min.css?ver=7.3' type='text/css' media='all' />
<script type="text/javascript" src="https://standards.ieee.org/wp-content/plugins/easy-social-share-buttons3/assets/modules/pinterest-pro.min.js?ver=9.3" id="pinterest-pro-js-js"></script>
<script type="text/javascript" src="https://standards.ieee.org/wp-content/plugins/easy-social-share-buttons3/assets/modules/subscribe-forms.min.js?ver=9.3" id="subscribe-forms-js-js"></script>
<script type="text/javascript" src="https://standards.ieee.org/wp-content/plugins/easy-social-share-buttons3/assets/js/essb-core.min.js?ver=9.3" id="easy-social-share-buttons-core-js"></script>
<script type="text/javascript" id="easy-social-share-buttons-core-js-after">
/* <![CDATA[ */
var essb_settings = {"ajax_url":"https:\/\/standards.ieee.org\/wp-admin\/admin-ajax.php","essb3_nonce":"15a0c69a5b","essb3_plugin_url":"https:\/\/standards.ieee.org\/wp-content\/plugins\/easy-social-share-buttons3","essb3_stats":false,"essb3_ga":false,"essb3_ga_ntg":false,"blog_url":"https:\/\/standards.ieee.org\/","post_id":"2632"};
/* ]]> */
</script>
<script type="text/javascript" src="https://standards.ieee.org/wp-content/plugins/page-links-to/dist/new-tab.js?ver=3.3.6" id="page-links-to-js"></script>
<script type="text/javascript" src="https://standards.ieee.org/wp-content/plugins/wp-smush-pro/app/assets/js/smush-lazy-load.min.js?ver=3.15.3" id="smush-lazy-load-js"></script>
<script type="text/javascript" src="https://standards.ieee.org/wp-content/plugins/js_composer/assets/js/dist/js_composer_front.min.js?ver=7.3" id="wpb_composer_front_js-js"></script>
<script type="text/javascript" src="https://standards.ieee.org/wp-content/plugins/js_composer/assets/lib/vc_accordion/vc-accordion.min.js?ver=7.3" id="vc_accordion_script-js"></script>
<script type="text/javascript" src="https://standards.ieee.org/wp-content/plugins/js_composer/assets/lib/vc-tta-autoplay/vc-tta-autoplay.min.js?ver=7.3" id="vc_tta_autoplay_script-js"></script>
<script type="text/javascript" src="https://standards.ieee.org/wp-content/plugins/js_composer/assets/lib/vc_waypoints/vc-waypoints.min.js?ver=7.3" id="vc_waypoints-js"></script>
        <script type="text/javascript">
            /* <![CDATA[ */
           document.querySelectorAll("ul.nav-menu").forEach(
               ulist => { 
                    if (ulist.querySelectorAll("li").length == 0) {
                        ulist.style.display = "none";

                                            } 
                }
           );
            /* ]]> */
        </script>
        <script></script><script type="text/javascript"></script>
    </body>
</html>

