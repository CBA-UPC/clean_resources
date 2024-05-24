/* cyrillic-ext */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  src: url(https://static.criteo.net/design/googlefont/nunito/nunito-700-cyrillic-ext.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  src: url(https://static.criteo.net/design/googlefont/nunito/nunito-700-cyrillic.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  src: url(https://static.criteo.net/design/googlefont/nunito/nunito-700-vietnamese.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  src: url(https://static.criteo.net/design/googlefont/nunito/nunito-700-latin-ext.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  src: url(https://static.criteo.net/design/googlefont/nunito/nunito-700-latin.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
l';
}

/* rendering.css */

body {
    /* Font varient */
    font-variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    /* Smoothing */
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
}

/*gwd page content */
.gwd-page-content {
    transform-style: flat !important;
}

/* Grouping content
========================================================================== */

/**
* Add the correct height in Firefox.
*/

hr {
    height: 0;
}

/* Text-level semantics
========================================================================== */

/**
* Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr[title] {
    text-decoration: underline dotted;
}

/**
* Add the correct font weight in Chrome, Edge, and Safari.
*/

b,
strong {
    font-weight: bolder;
}

/**
* 1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
* 2. Correct the odd 'em' font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
    font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace; /* 1 */
    font-size: 1em; /* 2 */
}

/**
* Add the correct font size in all browsers.
*/

small {
    font-size: 80%;
}

/**
* Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
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

/* Forms
========================================================================== */

/**
* 1. Change the font styles in all browsers.
* 2. Remove the margin in Firefox and Safari.
*/

button,
input,
optgroup,
select,
textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
}

/**
* Remove the inheritance of text transform in Edge and Firefox.
* 1. Remove the inheritance of text transform in Firefox.
*/

button,
select { /* 1 */
    text-transform: none;
}

/**
* Correct the inability to style clickable types in iOS and Safari.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
    -webkit-appearance: button;
}

/**
* Remove the inner border and padding in Firefox.
*/

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
}

/**
* Restore the focus styles unset by the previous rule.
*/

button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
}

/**
* Correct the padding in Firefox.
*/

fieldset {
    padding: 0.35em 0.75em 0.625em;
}

/**
* Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
*/

legend {
    padding: 0;
}

/**
* Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
    vertical-align: baseline;
}

/**
* Correct the cursor style of increment and decrement buttons in Safari.
*/

[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
    height: auto;
}

/**
* 1. Correct the odd appearance in Chrome and Safari.
* 2. Correct the outline style in Safari.
*/

[type='search'] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
}

/**
* Remove the inner padding in Chrome and Safari on macOS.
*/

[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
}

/**
* 1. Correct the inability to style clickable types in iOS and Safari.
* 2. Change font properties to 'inherit' in Safari.
*/

::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
}

/* Interactive
========================================================================== */

/*
* Add the correct display in Chrome and Safari.
*/

summary {
    display: list-item;
}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','_ifr_': 'false','_isfl_': 'false'});var gsodar = document.createElement('script');gsodar.type = 'text/javascript';gsodar.async = true;gsodar.src = '//tpc.googlesyndication.com/sodar/Q12zgMmT.js';var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(gsodar, s);})();