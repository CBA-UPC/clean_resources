/* Subscription expired - 2024-02-01T23:25:47 */uby/Gems/2.0.0/gems/toolkit-1.3.8/stylesheets/toolkit/_box-sizing.scss */
*, *:after, *:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  *behavior: url('../behaviors/box-sizing/boxsizing.php');
}

/* line 4, ../../../../../../../../../Library/Ruby/Gems/2.0.0/gems/toolkit-1.3.8/stylesheets/toolkit/_fluid-media.scss */
img, video {
  max-width: 100%;
  height: auto;
}

/* line 9, ../scss/partials/global/_extendables.scss */
.insured-type,
.section-head--hcr-region {
  background-color: #627e3f;
  margin-bottom: 4px;
  font-family: 'Gotham Book';
  font-size: 24px;
  font-size: 1.5rem;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  position: relative;
}
/* line 17, ../scss/partials/global/_extendables.scss */
.insured-type a,
.section-head--hcr-region a {
  color: white;
  padding: 30px 15% 30px 10%;
  margin-left: 75px;
  display: block;
  line-height: 1em;
  text-decoration: none;
}
@media (min-width: 59.375em) {
  /* line 28, ../scss/partials/global/_extendables.scss */
  .insured-type a:hover,
  .section-head--hcr-region a:hover {
    text-decoration: underline;
  }
}
/* line 34, ../scss/partials/global/_extendables.scss */
.insured-type .icon,
.section-head--hcr-region .icon {
  position: absolute;
  left: 10%;
  top: 50%;
}
/* line 40, ../scss/partials/global/_extendables.scss */
.insured-type .plus-white,
.section-head--hcr-region .plus-white {
  right: 5%;
  left: auto;
  margin-top: -10px;
}
/* line 46, ../scss/partials/global/_extendables.scss */
.insured-type .insured-type-1 .insured-icon,
.section-head--hcr-region .insured-type-1 .insured-icon {
  margin-top: -25px;
}
/* line 50, ../scss/partials/global/_extendables.scss */
.insured-type .insured-type-2 .insured-icon,
.section-head--hcr-region .insured-type-2 .insured-icon {
  margin-top: -27px;
  margin-left: 6px;
}
/* line 55, ../scss/partials/global/_extendables.scss */
.insured-type .insured-type-3 .insured-icon,
.section-head--hcr-region .insured-type-3 .insured-icon {
  margin-top: -23px;
  margin-left: 17px;
}
/* line 60, ../scss/partials/global/_extendables.scss */
.insured-type .insured-type-4 .insured-icon,
.section-head--hcr-region .insured-type-4 .insured-icon {
  margin-top: -27px;
  margin-left: 6px;
}

/* line 68, ../scss/partials/global/_extendables.scss */
.section-head--hcr-region a {
  margin-left: 0;
}

/*! normalize.css v1.0.2 | MIT License | git.io/normalize */
/* ==========================================================================
   HTML5 display definitions
   ========================================================================== */
/*
 * Corrects `block` display not defined in IE 6/7/8/9 and Firefox 3.
 */
/* line 21, ../scss/partials/global/_normalize.scss */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
nav,
section,
summary {
  display: block;
}

/*
 * Corrects `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.
 */
/* line 31, ../scss/partials/global/_normalize.scss */
audio,
canvas,
video {
  display: inline-block;
  *display: inline;
  *zoom: 1;
}

/*
 * Prevents modern browsers from displaying `audio` without controls.
 * Remove excess height in iOS 5 devices.
 */
/* line 42, ../scss/partials/global/_normalize.scss */
audio:not([controls]) {
  display: none;
  height: 0;
}

/*
 * Addresses styling for `hidden` attribute not present in IE 7/8/9, Firefox 3,
 * and Safari 4.
 * Known issue: no IE 6 support.
 */
/* line 53, ../scss/partials/global/_normalize.scss */
[hidden] {
  display: none;
}

/* ==========================================================================
   Base
   ========================================================================== */
/*
 * 1. Corrects text resizing oddly in IE 6/7 when body `font-size` is set using
 *    `em` units.
 * 2. Prevents iOS text size adjust after orientation change, without disabling
 *    user zoom.
 */
/* line 68, ../scss/partials/global/_normalize.scss */
html {
  font-size: 100%;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -ms-text-size-adjust: 100%;
  /* 2 */
}

/*
 * Addresses `font-family` inconsistency between `textarea` and other form
 * elements.
 */
/* line 83, ../scss/partials/global/_normalize.scss */
html,
button,
input,
select,
textarea {
  font-family: sans-serif;
}

/*
 * Addresses margins handled incorrectly in IE 6/7.
 */
/* line 91, ../scss/partials/global/_normalize.scss */
body {
  margin: 0;
}

/* ==========================================================================
   Links
   ========================================================================== */
/*
 * Addresses `outline` inconsistency between Chrome and other browsers.
 */
/* line 103, ../scss/partials/global/_normalize.scss */
a:focus {
  outline: thin dotted;
}

/*
 * Improves readability when focused and also mouse hovered in all browsers.
 */
/* line 112, ../scss/partials/global/_normalize.scss */
a:active,
a:hover {
  outline: 0;
}

/* ==========================================================================
   Typography
   ========================================================================== */
/*
 * Addresses font sizes and margins set differently in IE 6/7.
 * Addresses font sizes within `section` and `article` in Firefox 4+, Safari 5,
 * and Chrome.
 */
/* line 126, ../scss/partials/global/_normalize.scss */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* line 131, ../scss/partials/global/_normalize.scss */
h2 {
  font-size: 1.5em;
  margin: 0.83em 0;
}

/* line 136, ../scss/partials/global/_normalize.scss */
h3 {
  font-size: 1.17em;
  margin: 1em 0;
}

/* line 141, ../scss/partials/global/_normalize.scss */
h4 {
  font-size: 1em;
  margin: 1.33em 0;
}

/* line 146, ../scss/partials/global/_normalize.scss */
h5 {
  font-size: 0.83em;
  margin: 1.67em 0;
}

/* line 151, ../scss/partials/global/_normalize.scss */
h6 {
  font-size: 0.67em;
  margin: 2.33em 0;
}

/*
 * Addresses styling not present in IE 7/8/9, Safari 5, and Chrome.
 */
/* line 160, ../scss/partials/global/_normalize.scss */
abbr[title] {
  border-bottom: 1px dotted;
}

/*
 * Addresses style set to `bolder` in Firefox 3+, Safari 4/5, and Chrome.
 */
/* line 169, ../scss/partials/global/_normalize.scss */
b,
strong {
  font-weight: bold;
}

/* line 173, ../scss/partials/global/_normalize.scss */
blockquote {
  margin: 1em 40px;
}

/*
 * Addresses styling not present in Safari 5 and Chrome.
 */
/* line 181, ../scss/partials/global/_normalize.scss */
dfn {
  font-style: italic;
}

/*
 * Addresses styling not present in IE 6/7/8/9.
 */
/* line 189, ../scss/partials/global/_normalize.scss */
mark {
  background: #ff0;
  color: #000;
}

/*
 * Addresses margins set differently in IE 6/7.
 */
/* line 199, ../scss/partials/global/_normalize.scss */
p,
pre {
  margin: 1em 0;
}

/*
 * Corrects font family set oddly in IE 6, Safari 4/5, and Chrome.
 */
/* line 210, ../scss/partials/global/_normalize.scss */
code,
kbd,
pre,
samp {
  font-family: monospace, serif;
  _font-family: 'courier new', monospace;
  font-size: 1em;
}

/*
 * Improves readability of pre-formatted text in all browsers.
 */
/* line 220, ../scss/partials/global/_normalize.scss */
pre {
  white-space: pre;
  white-space: pre-wrap;
  word-wrap: break-word;
}

/*
 * Addresses CSS quotes not supported in IE 6/7.
 */
/* line 230, ../scss/partials/global/_normalize.scss */
q {
  quotes: none;
}

/*
 * Addresses `quotes` property not supported in Safari 4.
 */
/* line 239, ../scss/partials/global/_normalize.scss */
q:before,
q:after {
  content: '';
  content: none;
}

/*
 * Addresses inconsistent and variable font size in all browsers.
 */
/* line 248, ../scss/partials/global/_normalize.scss */
small {
  font-size: 80%;
}

/*
 * Prevents `sub` and `sup` affecting `line-height` in all browsers.
 */
/* line 257, ../scss/partials/global/_normalize.scss */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

/* line 264, ../scss/partials/global/_normalize.scss */
sup {
  top: -0.5em;
}

/* line 268, ../scss/partials/global/_normalize.scss */
sub {
  bottom: -0.25em;
}

/* ==========================================================================
   Lists
   ========================================================================== */
/*
 * Addresses margins set differently in IE 6/7.
 */
/* line 283, ../scss/partials/global/_normalize.scss */
dl,
menu,
ol,
ul {
  margin: 1em 0;
}

/* line 287, ../scss/partials/global/_normalize.scss */
dd {
  margin: 0 0 0 40px;
}

/*
 * Addresses paddings set differently in IE 6/7.
 */
/* line 297, ../scss/partials/global/_normalize.scss */
menu,
ol,
ul {
  padding: 0 0 0 40px;
}

/*
 * Corrects list images handled incorrectly in IE 7.
 */
/* line 306, ../scss/partials/global/_normalize.scss */
nav ul,
nav ol {
  list-style: none;
  list-style-image: none;
}

/* ==========================================================================
   Embedded content
   ========================================================================== */
/*
 * 1. Removes border when inside `a` element in IE 6/7/8/9 and Firefox 3.
 * 2. Improves image quality when scaled in IE 7.
 */
/* line 320, ../scss/partials/global/_normalize.scss */
img {
  border: 0;
  /* 1 */
  -ms-interpolation-mode: bicubic;
  /* 2 */
}

/*
 * Corrects overflow displayed oddly in IE 9.
 */
/* line 329, ../scss/partials/global/_normalize.scss */
svg:not(:root) {
  overflow: hidden;
}

/* ==========================================================================
   Figures
   ========================================================================== */
/*
 * Addresses margin not present in IE 6/7/8/9, Safari 5, and Opera 11.
 */
/* line 341, ../scss/partials/global/_normalize.scss */
figure {
  margin: 0;
}

/* ==========================================================================
   Forms
   ========================================================================== */
/*
 * Corrects margin displayed oddly in IE 6/7.
 */
/* line 353, ../scss/partials/global/_normalize.scss */
form {
  margin: 0;
}

/*
 * Define consistent border, margin, and padding.
 */
/* line 361, ../scss/partials/global/_normalize.scss */
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

/*
 * 1. Corrects color not being inherited in IE 6/7/8/9.
 * 2. Corrects text not wrapping in Firefox 3.
 * 3. Corrects alignment displayed oddly in IE 6/7.
 */
/* line 373, ../scss/partials/global/_normalize.scss */
legend {
  border: 0;
  /* 1 */
  padding: 0;
  white-space: normal;
  /* 2 */
  *margin-left: -7px;
  /* 3 */
}

/*
 * 1. Corrects font size not being inherited in all browsers.
 * 2. Addresses margins set differently in IE 6/7, Firefox 3+, Safari 5,
 *    and Chrome.
 * 3. Improves appearance and consistency in all browsers.
 */
/* line 390, ../scss/partials/global/_normalize.scss */
button,
input,
select,
textarea {
  font-size: 100%;
  /* 1 */
  margin: 0;
  /* 2 */
  vertical-align: baseline;
  /* 3 */
  *vertical-align: middle;
  /* 3 */
}

/*
 * Addresses Firefox 3+ setting `line-height` on `input` using `!important` in
 * the UA stylesheet.
 */
/* line 403, ../scss/partials/global/_normalize.scss */
button,
input {
  line-height: normal;
}

/*
 * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`
 *    and `video` controls.
 * 2. Corrects inability to style clickable `input` types in iOS.
 * 3. Improves usability and consistency of cursor style between image-type
 *    `input` and others.
 * 4. Removes inner spacing in IE 7 without affecting normal text inputs.
 *    Known issue: inner spacing remains in IE 6.
 */
/* line 420, ../scss/partials/global/_normalize.scss */
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  /* 2 */
  cursor: pointer;
  /* 3 */
  *overflow: visible;
  /* 4 */
}

/*
 * Re-set default cursor for disabled elements.
 */
/* line 431, ../scss/partials/global/_normalize.scss */
button[disabled],
input[disabled] {
  cursor: default;
}

/*
 * 1. Addresses box sizing set to content-box in IE 8/9.
 * 2. Removes excess padding in IE 8/9.
 * 3. Removes excess padding in IE 7.
 *    Known issue: excess padding remains in IE 6.
 */
/* line 443, ../scss/partials/global/_normalize.scss */
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  /* 1 */
  padding: 0;
  /* 2 */
  *height: 13px;
  /* 3 */
  *width: 13px;
  /* 3 */
}

/*
 * 1. Addresses `appearance` set to `searchfield` in Safari 5 and Chrome.
 * 2. Addresses `box-sizing` set to `border-box` in Safari 5 and Chrome
 *    (include `-moz` to future-proof).
 */
/* line 456, ../scss/partials/global/_normalize.scss */
input[type="search"] {
  -webkit-appearance: textfield;
  /* 1 */
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  /* 2 */
  box-sizing: content-box;
}

/*
 * Removes inner padding and search cancel button in Safari 5 and Chrome
 * on OS X.
 */
/* line 469, ../scss/partials/global/_normalize.scss */
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
 * Removes inner padding and border in Firefox 3+.
 */
/* line 478, ../scss/partials/global/_normalize.scss */
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

/*
 * 1. Removes default vertical scrollbar in IE 6/7/8/9.
 * 2. Improves readability and alignment in all browsers.
 */
/* line 488, ../scss/partials/global/_normalize.scss */
textarea {
  overflow: auto;
  /* 1 */
  vertical-align: top;
  /* 2 */
}

/* ==========================================================================
   Tables
   ========================================================================== */
/*
 * Remove most spacing between table cells.
 */
/* line 501, ../scss/partials/global/_normalize.scss */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/*
 * Image replacement
 */
/* line 5, ../scss/partials/global/_helper-classes.scss */
.ir {
  background-color: transparent;
  border: 0;
  overflow: hidden;
  /* IE 6/7 fallback */
  *text-indent: -9999px;
}

/* line 13, ../scss/partials/global/_helper-classes.scss */
.ir:before {
  content: "";
  display: block;
  width: 0;
  height: 100%;
}

/*
 * Hide from both screenreaders and browsers: h5bp.com/u
 */
/* line 24, ../scss/partials/global/_helper-classes.scss */
.hidden {
  display: none !important;
  visibility: hidden;
}

/*
 * Hide only visually, but have it available for screenreaders: h5bp.com/v
 */
/* line 33, ../scss/partials/global/_helper-classes.scss */
.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

/*
 * Extends the .visuallyhidden class to allow the element to be focusable
 * when navigated to via the keyboard: h5bp.com/p
 */
/* line 50, ../scss/partials/global/_helper-classes.scss */
.visuallyhidden.focusable:active,
.visuallyhidden.focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

/*
 * Hide visually and from screenreaders, but maintain layout
 */
/* line 63, ../scss/partials/global/_helper-classes.scss */
.invisible {
  visibility: hidden;
}

/*
 * Clearfix: contain floats
 *
 * For modern browsers
 * 1. The space content is one way to avoid an Opera bug when the
 *    `contenteditable` attribute is included anywhere else in the document.
 *    Otherwise it causes space to appear at the top and bottom of elements
 *    that receive the `clearfix` class.
 * 2. The use of `table` rather than `block` is only necessary if using
 *    `:before` to contain the top-margins of child elements.
 */
/* line 80, ../scss/partials/global/_helper-classes.scss */
.clearfix:before,
.clearfix:after {
  content: " ";
  /* 1 */
  display: table;
  /* 2 */
}

/* line 85, ../scss/partials/global/_helper-classes.scss */
.clearfix:after {
  clear: both;
}

/*
 * For IE 6/7 only
 * Include this rule to trigger hasLayout and contain floats.
 */
/* line 94, ../scss/partials/global/_helper-classes.scss */
.clearfix {
  *zoom: 1;
}

@media (min-width: 30.0625em) {
  /* line 12, ../scss/partials/global/_spanish.scss */
  body.es #hero h2 {
    font-size: 34.8px;
    font-size: 2.175rem;
  }
}
@media (min-width: 59.375em) {
  /* line 18, ../scss/partials/global/_spanish.scss */
  body.es header .kp-network ul li {
    margin-right: 20px;
  }
}
@media (min-width: 30.0625em) {
  /* line 25, ../scss/partials/global/_spanish.scss */
  body.es header .nav-main .nav-main-wrap li a {
    font-size: 14.4px;
    font-size: 0.9rem;
  }
}
@media (min-width: 59.375em) {
  /* line 25, ../scss/partials/global/_spanish.scss */
  body.es header .nav-main .nav-main-wrap li a {
    font-size: 16px;
    font-size: 1rem;
  }
}
@media (min-width: 59.375em) {
  /* line 24, ../scss/partials/global/_spanish.scss */
  body.es header .nav-main .nav-main-wrap li {
    margin-right: 25px;
  }
}
@media (max-width: 30em) {
  /* line 40, ../scss/partials/global/_spanish.scss */
  body.es header .page-titles .title-1 {
    margin-right: 10px;
  }
}
@media (max-width: 30em) {
  /* line 46, ../scss/partials/global/_spanish.scss */
  body.es header .page-titles h1 {
    font-size: 13.6px;
    font-size: 0.85rem;
    max-width: 80px;
  }
}
@media (max-width: 30em), (orientation: landscape) {
  /* line 46, ../scss/partials/global/_spanish.scss */
  body.es header .page-titles h1 {
    max-width: 100%;
    font-size: 16px;
    font-size: 1rem;
  }
}
@media (min-width: 30.0625em) {
  /* line 46, ../scss/partials/global/_spanish.scss */
  body.es header .page-titles h1 {
    font-size: 19.2px;
    font-size: 1.2rem;
  }
}
/* line 63, ../scss/partials/global/_spanish.scss */
body.es header .kp-network ul .net-1 {
  display: none;
}
@media (max-width: 30em), (orientation: landscape) {
  /* line 63, ../scss/partials/global/_spanish.scss */
  body.es header .kp-network ul .net-1 {
    display: block;
  }
}
@media (min-width: 30.0625em) {
  /* line 63, ../scss/partials/global/_spanish.scss */
  body.es header .kp-network ul .net-1 {
    display: block;
  }
}
@media (min-width: 59.375em) {
  /* line 75, ../scss/partials/global/_spanish.scss */
  body.es header .nav-main .nav-main-wrap li.nav-4, body.es header .kp-network ul .net-5 {
    margin-right: 0;
  }
}

/* line 23, ../scss/partials/styleguide/_style-guide.scss */
.icon {
  display: inline-block;
}

/* line 27, ../scss/partials/styleguide/_style-guide.scss */
.ext-link {
  height: 16px;
  width: 17px;
  background-image: url('../img/sprites-sf71e29baeb.png');
  background-position: 0 -736px;
  background-repeat: no-repeat;
}
@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-device-pixel-ratio: 1.5) {
  /* line 45, ../scss/partials/global/_retina-sprites.scss */
  .ext-link {
    background-image: url('../img/sprites-retina-sb5b0787b26.png');
    background-position: 0 -650px;
    -webkit-background-size: 164px auto;
    -moz-background-size: 164px auto;
    -o-background-size: 164px auto;
    background-size: 164px auto;
  }
}

/* line 31, ../scss/partials/styleguide/_style-guide.scss */
.icon.member {
  height: 17px;
  width: 16px;
  background-image: url('../img/sprites-sf71e29baeb.png');
  background-position: 0 -600px;
  background-repeat: no-repeat;
}
@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-device-pixel-ratio: 1.5) {
  /* line 45, ../scss/partials/global/_retina-sprites.scss */
  .icon.member {
    background-image: url('../img/sprites-retina-sb5b0787b26.png');
    background-position: 0 -539px;
    -webkit-background-size: 164px auto;
    -moz-background-size: 164px auto;
    -o-background-size: 164px auto;
    background-size: 164px auto;
  }
}

/* line 35, ../scss/partials/styleguide/_style-guide.scss */
.icon.shop {
  height: 17px;
  width: 17px;
  background-image: url('../img/sprites-sf71e29baeb.png');
  background-position: 0 -762px;
  background-repeat: no-repeat;
}
@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-device-pixel-ratio: 1.5) {
  /* line 45, ../scss/partials/global/_retina-sprites.scss */
  .icon.shop {
    background-image: url('../img/sprites-retina-sb5b0787b26.png');
    background-position: 0 -671px;
    -webkit-background-size: 164px auto;
    -moz-background-size: 164px auto;
    -o-background-size: 164px auto;
    background-size: 164px auto;
  }
}

/* line 40, ../scss/partials/styleguide/_style-guide.scss */
.icon.employer {
  height: 55px;
  width: 45px;
  background-image: url('../img/sprites-sf71e29baeb.png');
  background-position: 0 -163px;
  background-repeat: no-repeat;
}
@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-device-pixel-ratio: 1.5) {
  /* line 45, ../scss/partials/global/_retina-sprites.scss */
  .icon.employer {
    background-image: url('../img/sprites-retina-sb5b0787b26.png');
    background-position: 0 -138px;
    -webkit-background-size: 164px auto;
    -moz-background-size: 164px auto;
    -o-background-size: 164px auto;
    background-size: 164px auto;
  }
}

/* line 44, ../scss/partials/styleguide/_style-guide.scss */
.icon.employer-on, body.guide-to-reform .not-selected .insured-type-1 span.insured-icon {
  height: 55px;
  width: 45px;
  background-image: url('../img/sprites-sf71e29baeb.png');
  background-position: 0 -98px;
  background-repeat: no-repeat;
}
@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-device-pixel-ratio: 1.5) {
  /* line 45, ../scss/partials/global/_retina-sprites.scss */
  .icon.employer-on, body.guide-to-reform .not-selected .insured-type-1 span.insured-icon {
    background-image: url('../img/sprites-retina-sb5b0787b26.png');
    background-position: 0 -78px;
    -webkit-background-size: 164px auto;
    -moz-background-size: 164px auto;
    -o-background-size: 164px auto;
    background-size: 164px auto;
  }
}

/* line 48, ../scss/partials/styleguide/_style-guide.scss */
.icon.my-own {
  height: 55px;
  width: 39px;
  background-image: url('../img/sprites-sf71e29baeb.png');
  background-position: 0 -535px;
  background-repeat: no-repeat;
}
@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-device-pixel-ratio: 1.5) {
  /* line 45, ../scss/partials/global/_retina-sprites.scss */
  .icon.my-own {
    background-image: url('../img/sprites-retina-sb5b0787b26.png');
    background-position: 0 -479px;
    -webkit-background-size: 164px auto;
    -moz-background-size: 164px auto;
    -o-background-size: 164px auto;
    background-size: 164px auto;
  }
}

/* line 52, ../scss/partials/styleguide/_style-guide.scss */
.icon.my-own-on, body.guide-to-reform .not-selected .insured-type-2 span.insured-icon {
  height: 55px;
  width: 39px;
  background-image: url('../img/sprites-sf71e29baeb.png');
  background-position: 0 -470px;
  background-repeat: no-repeat;
}
@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-device-pixel-ratio: 1.5) {
  /* line 45, ../scss/partials/global/_retina-sprites.scss */
  .icon.my-own-on, body.guide-to-reform .not-selected .insured-type-2 span.insured-icon {
    background-image: url('../img/sprites-retina-sb5b0787b26.png');
    background-position: 0 -419px;
    -webkit-background-size: 164px auto;
    -moz-background-size: 164px auto;
    -o-background-size: 164px auto;
    background-size: 164px auto;
  }
}

/* line 56, ../scss/partials/styleguide/_style-guide.scss */
.icon.not-insured {
  height: 45px;
  width: 28px;
  background-image: url('../img/sprites-sf71e29baeb.png');
  background-position: 0 -415px;
  background-repeat: no-repeat;
}
@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-device-pixel-ratio: 1.5) {
  /* line 45, ../scss/partials/global/_retina-sprites.scss */
  .icon.not-insured {
    background-image: url('../img/sprites-retina-sb5b0787b26.png');
    background-position: 0 -369px;
    -webkit-background-size: 164px auto;
    -moz-background-size: 164px auto;
    -o-background-size: 164px auto;
    background-size: 164px auto;
  }
}

/* line 60, ../scss/partials/styleguide/_style-guide.scss */
.icon.not-insured-on, body.guide-to-reform .not-selected .insured-type-3 span.insured-icon {
  height: 45px;
  width: 28px;
  background-image: url('../img/sprites-sf71e29baeb.png');
  background-position: 0 -360px;
  background-repeat: no-repeat;
}
@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-device-pixel-ratio: 1.5) {
  /* line 45, ../scss/partials/global/_retina-sprites.scss */
  .icon.not-insured-on, body.guide-to-reform .not-selected .insured-type-3 span.insured-icon {
    background-image: url('../img/sprites-retina-sb5b0787b26.png');
    background-position: 0 -319px;
    -webkit-background-size: 164px auto;
    -moz-background-size: 164px auto;
    -o-background-size: 164px auto;
    background-size: 164px auto;
  }
}

/* line 64, ../scss/partials/styleguide/_style-guide.scss */
.icon.medicare {
  height: 56px;
  width: 47px;
  background-image: url('../img/sprites-sf71e29baeb.png');
  background-position: 0 -294px;
  background-repeat: no-repeat;
}
@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-device-pixel-ratio: 1.5) {
  /* line 45, ../scss/partials/global/_retina-sprites.scss */
  .icon.medicare {
    background-image: url('../img/sprites-retina-sb5b0787b26.png');
    background-position: 0 -258.5px;
    -webkit-background-size: 164px auto;
    -moz-background-size: 164px auto;
    -o-background-size: 164px auto;
    background-size: 164px auto;
  }
}

/* line 68, ../scss/partials/styleguide/_style-guide.scss */
.icon.medicare-on, body.guide-to-reform .not-selected .insured-type-4 span.insured-icon {
  height: 56px;
  width: 47px;
  background-image: url('../img/sprites-sf71e29baeb.png');
  background-position: 0 -228px;
  background-repeat: no-repeat;
}
@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-device-pixel-ratio: 1.5) {
  /* line 45, ../scss/partials/global/_retina-sprites.scss */
  .icon.medicare-on, body.guide-to-reform .not-selected .insured-type-4 span.insured-icon {
    background-image: url('../img/sprites-retina-sb5b0787b26.png');
    background-position: 0 -198px;
    -webkit-background-size: 164px auto;
    -moz-background-size: 164px auto;
    -o-background-size: 164px auto;
    background-size: 164px auto;
  }
}

/* line 73, ../scss/partials/styleguide/_style-guide.scss */
.icon.chevron {
  height: 12px;
  width: 8px;
  background-image: url('../img/sprites-sf71e29baeb.png');
  background-position: 0 0;
  background-repeat: no-repeat;
}
@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-device-pixel-ratio: 1.5) {
  /* line 45, ../scss/partials/global/_retina-sprites.scss */
  .icon.chevron {
    background-image: url('../img/sprites-retina-sb5b0787b26.png');
    background-position: 0 0;
    -webkit-background-size: 164px auto;
    -moz-background-size: 164px auto;
    -o-background-size: 164px auto;
    background-size: 164px auto;
  }
}

/* line 77, ../scss/partials/styleguide/_style-guide.scss */
.icon.chevron-white-right {
  height: 12px;
  width: 7px;
  background-image: url('../img/sprites-sf71e29baeb.png');
  background-position: 0 -22px;
  background-repeat: no-repeat;
}
@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-device-pixel-ratio: 1.5) {
  /* line 45, ../scss/partials/global/_retina-sprites.scss */
  .icon.chevron-white-right {
    background-image: url('../img/sprites-retina-sb5b0787b26.png');
    background-position: 0 -17px;
    -webkit-background-size: 164px auto;
    -moz-background-size: 164px auto;
    -o-background-size: 164px auto;
    background-size: 164px auto;
  }
}

/* line 82, ../scss/partials/styleguide/_style-guide.scs