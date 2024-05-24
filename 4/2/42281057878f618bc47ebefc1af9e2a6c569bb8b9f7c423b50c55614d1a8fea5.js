/*! normalize.css v3.0.2 | MIT License | git.io/normalize */

html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
}

body {
    margin: 0
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
    display: block
}

audio,
canvas,
progress,
video {
    display: inline-block;
    vertical-align: baseline
}

audio:not([controls]) {
    display: none;
    height: 0
}

[hidden],
template {
    display: none
}

a {
    background-color: transparent
}

a:active,
a:hover {
    outline: 0
}

abbr[title] {
    border-bottom: 1px dotted
}

b,
strong {
    font-weight: bold
}

dfn {
    font-style: italic
}

h1 {
    font-size: 2em;
    margin: 0.67em 0
}

mark {
    background: #ff0;
    color: #000
}

small {
    font-size: 80%
}

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline
}

sup {
    top: -0.5em
}

sub {
    bottom: -0.25em
}

img {
    border: 0
}

svg:not(:root) {
    overflow: hidden
}

figure {
    margin: 1em 40px
}

hr {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 0
}

pre {
    overflow: auto
}

code,
kbd,
pre,
samp {
    font-family: monospace, monospace;
    font-size: 1em
}

button,
input,
optgroup,
select,
textarea {
    color: inherit;
    font: inherit;
    margin: 0
}

button {
    overflow: visible
}

button,
select {
    text-transform: none
}

button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer
}

button[disabled],
html input[disabled] {
    cursor: default
}

button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0
}

input {
    line-height: normal
}

input[type="checkbox"],
input[type="radio"] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    height: auto
}

input[type="search"] {
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
    box-sizing: content-box
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none
}

fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em
}

legend {
    border: 0;
    padding: 0
}

textarea {
    overflow: auto
}

optgroup {
    font-weight: bold
}

table {
    border-collapse: collapse;
    border-spacing: 0
}

td,
th {
    padding: 0
}

@font-face {
    font-family: 'icomoon';
    src: url("/fonts/icomoon.eot?ig5skd");
    src: url("/fonts/icomoon.eot?#iefixig5skd") format("embedded-opentype"), url("/fonts/icomoon.ttf?ig5skd") format("truetype"), url("/fonts/icomoon.woff?ig5skd") format("woff"), url("/fonts/icomoon.svg?ig5skd#icomoon") format("svg");
    font-weight: normal;
    font-style: normal
}

[class^="icon-"],
[class*=" icon-"] {
    font-family: 'icomoon';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

.icon-twitter:before {
    content: "\f099"
}

.icon-linkedin:before {
    content: "\f0e1"
}

.icon-facebook-official:before {
    content: "\f230"
}

.icon-globe:before {
    content: "\e900"
}

.ir,
.flex-control-nav a,
#menu-toggle {
    display: block;
    border: 0;
    text-indent: -9999px;
    overflow: hidden;
    background-color: transparent;
    background-repeat: no-repeat;
    text-align: left;
    direction: ltr
}

.lt-ie8 .ir,
.lt-ie8 .flex-control-nav a,
.flex-control-nav .lt-ie8 a,
.lt-ie8 #menu-toggle {
    line-height: 0
}

.ir br,
.flex-control-nav a br,
#menu-toggle br {
    display: none
}

.ir.roll,
.flex-control-nav a.roll,
.roll#menu-toggle {
    height: 0;
    line-height: 0;
    background-size: 100% auto
}

.ir.roll:hover,
.flex-control-nav a.roll:hover,
.roll#menu-toggle:hover,
.ir.roll:focus,
.flex-control-nav a.roll:focus,
.roll#menu-toggle:focus {
    background-position: 0 100%
}

.hidden {
    display: none !important;
    visibility: hidden
}

.visuallyhidden,
#footer-social span,
#tweets h1 span {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px
}

.visuallyhidden.focusable:active,
#footer-social span.focusable:active,
#tweets h1 span.focusable:active,
.visuallyhidden.focusable:focus,
#footer-social span.focusable:focus,
#tweets h1 span.focusable:focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    width: auto
}

.invisible {
    visibility: hidden
}

.clearfix:after,
.pagination:after,
.columns:after,
.grid-row:after,
#masthead:after,
#footer .container:after,
#footer #masthead:after,
#footer-nav:after,
#footer-social:after,
.page-content:after,
.documents article:after,
.in-page-nav>ul:after {
    content: " ";
    display: table
}

.clearfix:after,
.pagination:after,
.columns:after,
.grid-row:after,
#masthead:after,
#footer .container:after,
#footer #masthead:after,
#footer-nav:after,
#footer-social:after,
.page-content:after,
.documents article:after,
.in-page-nav>ul:after {
    clear: both
}

.lt-ie8 .clearfix,
.lt-ie8 .pagination,
.lt-ie8 .columns,
.lt-ie8 .grid-row,
.lt-ie8 #masthead,
.lt-ie8 #footer .container,
#footer .lt-ie8 .container,
.lt-ie8 #footer-nav,
.lt-ie8 #footer-social,
.lt-ie8 .page-content,
.lt-ie8 .documents article,
.documents .lt-ie8 article,
.lt-ie8 .in-page-nav>ul {
    zoom: 1
}

.flex-container a:hover,
.flex-slider a:hover,
.flex-container a:focus,
.flex-slider a:focus {
    outline: none
}

.slides,
.slides>li,
.flex-control-nav,
.flex-direction-nav {
    margin: 0;
    padding: 0;
    list-style: none
}

.flex-pauseplay span {
    text-transform: capitalize
}

.flexslider {
    margin: 0;
    padding: 0
}

.flexslider .slides>li {
    display: none;
    -webkit-backface-visibility: hidden
}

.flexslider .slides:after {
    content: "\0020";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0
}

html[xmlns] .flexslider .slides {
    display: block
}

* html .flexslider .slides {
    height: 1%
}

.flexslider .slides>li:first-child {
    display: block
}

.flex-control-nav {
    background: #d0d0d1;
    padding: 16px;
    text-align: center
}

.flex-control-nav li {
    display: inline-block;
    vertical-align: top;
    margin: 0 6px;
    height: 16px
}

.flex-control-nav a {
    width: 16px;
    height: 16px;
    border: 2px solid #fff;
    border-radius: 8px;
    cursor: pointer;
    -webkit-transition: background-color 0.2s linear;
    -o-transition: background-color 0.2s linear;
    transition: background-color 0.2s linear
}

.flex-control-nav a:hover,
.flex-control-nav a:focus,
.flex-control-nav a.flex-active {
    background-color: #fff
}

html {
    box-sizing: border-box;
    -webkit-box-sizing: border-box
}

*,
*:before,
*:after {
    box-sizing: inherit;
    -webkit-box-sizing: inherit
}

html,
body,
button,
input,
select,
textarea {
    color: #616366;
    font-family: "proxima-nova", Arial, sans-serif;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

body {
    background: #fff
}

::-moz-selection {
    background: #5cc8d9;
    text-shadow: none;
    color: #000
}

::selection {
    background: #5cc8d9;
    text-shadow: none;
    color: #000
}

hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 4px solid #dfe0e0;
    padding: 0
}

img {
    max-width: 100%;
    height: auto;
    vertical-align: middle
}

a {
    color: #009ade;
    text-decoration: none;
    -webkit-transition: color 0.25s linear;
    -o-transition: color 0.25s linear;
    transition: color 0.25s linear
}

ul {
    padding-left: 1.2em
}

nav *,
.ir,
.flex-control-nav a,
#menu-toggle {
    margin: 0;
    padding: 0
}

nav li {
    list-style: none
}

.container,
#masthead {
    margin: 0 auto;
    max-width: 1230px;
    padding-left: 30px;
    padding-right: 30px
}

@media screen and (max-width: 37.4375em) {
    .container,
    #masthead {
        max-width: 1200px;
        padding-left: 15px;
        padding-right: 15px
    }
}

.narrow-container {
    margin: 0 auto;
    max-width: 1030px;
    padding-left: 30px;
    padding-right: 30px
}

@media screen and (max-width: 37.4375em) {
    .narrow-container {
        max-width: 1000px;
        padding-left: 15px;
        padding-right: 15px
    }
}

.blue-intro {
    display: inline-block;
    color: #fff;
    background: rgba(0, 154, 222, 0.7)
}

.blue-intro.blue {
    background-color: rgba(0, 154, 222, 0.7)
}

.blue-intro.lt-blue {
    background-color: rgba(92, 200, 217, 0.7)
}

.blue-intro.dk-blue {
    background-color: rgba(8, 78, 142, 0.7)
}

.blue-intro.orange {
    background-color: rgba(246, 183, 61, 0.7)
}

.blue-intro.green {
    background-color: rgba(119, 194, 88, 0.7)
}

.blue-intro.beige {
    background-color: rgba(231, 232, 232, 0.7)
}

.blue-intro.brown-gray {
    background-color: rgba(127, 119, 111, 0.7)
}

.blue-intro.red {
    background-color: rgba(208, 47, 119, 0.7)
}

.blue-intro.red-orange {
    background-color: rgba(240, 80, 63, 0.7)
}

.blue-intro.gray {
    background-color: rgba(231, 232, 232, 0.7)
}

.blue-intro.grass {
    background-color: rgba(119, 194, 88, 0.7)
}

.blue-intro.mustard {
    background-color: rgba(246, 183, 61, 0.7)
}

.blue-intro.berry {
    background-color: rgba(208, 47, 119, 0.7)
}

.blue-intro.peach {
    background-color: rgba(240, 80, 63, 0.7)
}

.blue-intro.aqua {
    background-color: rgba(92, 200, 217, 0.7)
}

.blue-intro.cobalt {
    background-color: rgba(8, 78, 142, 0.7)
}

.overview {
    margin: 0 auto;
    max-width: 830px;
    padding-left: 30px;
    padding-right: 30px;
    text-align: center
}

@media screen and (max-width: 37.4375em) {
    .overview {
        max-width: 800px;
        padding-left: 15px;
        padding-right: 15px
    }
}

.overview p,
.overview ul {
    margin: 0 0 1em;
    font-size: 21px;
    line-height: 1.7142857143;
    font-weight: 300
}

.centered {
    text-align: center
}

.button {
    font-size: 15px;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-weight: 600;
    display: inline-block;
    vertical-align: top;
    line-height: 1;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 5px;
    border-bottom-width: 2px;
    border-bottom-color: #009ade;
    border-bottom-style: solid;
    color: #616366
}

.button:hover,
.button:focus {
    color: #009ade
}

.shadow-top,
.shadow-only {
    position: relative
}

.shadow-top:before,
.shadow-only:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 8000;
    width: 100%;
    height: 8px;
    background: rgba(0, 0, 0, 0.18)
}

.shadow-only {
    height: 8px
}

.content-w-bg {
    position: relative
}

.content-w-bg:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 8000;
    width: 100%;
    height: 8px;
    background: rgba(0, 0, 0, 0.18)
}

.content-w-bg .content {
    position: relative;
    z-index: 1
}

.content-w-bg .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #dfe0e0;
    background-repeat: no-repeat;
    background-size: cover
}

.content-w-bg .bg.top-left {
    background-position: 0 0
}

.content-w-bg .bg.top-center {
    background-position: 50% 0
}

.content-w-bg .bg.top-right {
    background-position: 100% 0
}

.content-w-bg .bg.center-left {
    background-position: 0 50%
}

.content-w-bg .bg.center-center {
    background-position: 50% 50%
}

.content-w-bg .bg.center-right {
    background-position: 100% 50%
}

.content-w-bg .bg.bottom-left {
    background-position: 0 100%
}

.content-w-bg .bg.bottom-center {
    background-position: 100% 100%
}

.content-w-bg .bg.bottom-right {
    background-position: 100% 100%
}

.bg-only-top {
    position: relative;
    min-height: 525px
}

.bg-only-top:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 8000;
    width: 100%;
    height: 8px;
    background: rgba(0, 0, 0, 0.18)
}

.bg-only-top .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #dfe0e0;
    background-repeat: no-repeat;
    background-size: cover
}

.bg-only-top .bg.top-left {
    background-position: 0 0
}

.bg-only-top .bg.top-center {
    background-position: 50% 0
}

.bg-only-top .bg.top-right {
    background-position: 100% 0
}

.bg-only-top .bg.center-left {
    background-position: 0 50%
}

.bg-only-top .bg.center-center {
    background-position: 50% 50%
}

.bg-only-top .bg.center-right {
    background-position: 100% 50%
}

.bg-only-top .bg.bottom-left {
    background-position: 0 100%
}

.bg-only-top .bg.bottom-center {
    background-position: 100% 100%
}

.bg-only-top .bg.bottom-right {
    background-position: 100% 100%
}

@media screen and (max-width: 73.0625em) {
    .bg-only-top {
        min-height: 450px
    }
}

@media screen and (max-width: 62.4375em) {
    .bg-only-top {
        min-height: 0;
        height: 0;
        padding-bottom: 50%
    }
}

#video-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%
}

.large-cta {
    position: relative;
    padding: 65px 0 30px;
    text-align: center;
    background: #009ade;
    color: #fff
}

.large-cta:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 8000;
    width: 100%;
    height: 8px;
    background: rgba(0, 0, 0, 0.18)
}

.large-cta h3 {
    margin: -10px 0 30px;
    font-size: 36px;
    line-height: 1.1666666667;
    font-weight: 300
}

.large-cta a {
    font-size: 20px;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-weight: 600;
    display: inline-block;
    vertical-align: top;
    line-height: 1;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 5px;
    border-bottom-width: 2px;
    border-bottom-color: #009ade;
    border-bottom-style: solid;
    margin: 0 20px 25px;
    padding-bottom: 8px;
    color: #fff;
    border-bottom: 3px solid #80cdef
}

.large-cta a:hover,
.large-cta a:focus {
    color: #d9f0fa
}

@media screen and (max-width: 37.4375em) {
    .large-cta {
        padding: 30px 0 10px;
        word-break: break-word
    }
    .large-cta h3 {
        margin: 0 0 20px;
        font-size: 26px
    }
    .large-cta a {
        font-size: 16px
    }
}

.reveal-modal {
    position: absolute;
    z-index: 9999;
    visibility: hidden;
    top: 70px;
    left: 50%;
    padding: 8px;
    width: 90%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.18)
}

.reveal-modal .inner {
    padding: 45px 70px;
    background-color: #fff
}

.reveal-modal-bg {
    position: fixed;
    height: 100%;
    width: 100%;
    background: rgba(97, 99, 102, 0.8);
    z-index: 9998;
    display: none;
    top: 0;
    left: 0
}

.reveal-modal .close-reveal-modal {
    position: absolute;
    right: 20px;
    top: 10px;
    font-size: 40px;
    line-height: 1;
    color: #5cc8d9;
    cursor: pointer;
    -webkit-transition: color 0.25s linear;
    -o-transition: color 0.25s linear;
    transition: color 0.25s linear
}

.reveal-modal .close-reveal-modal:hover,
.reveal-modal .close-reveal-modal:focus {
    color: #009ade
}

@media screen and (max-width: 47.9375em) {
    .reveal-modal {
        top: 45px
    }
    .reveal-modal .inner {
        padding: 40px 30px 30px
    }
}

@media screen and (max-width: 37.4375em) {
    .reveal-modal {
        top: 30px
    }
    .reveal-modal .inner {
        padding: 40px 20px 20px
    }
}

.pagination {
    padding: 45px 0;
    background: #009ade
}

.pagination .prev,
.pagination .next {
    font-size: 18px;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-weight: 600;
    display: inline-block;
    vertical-align: top;
    line-height: 1;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 5px;
    border-bottom-width: 2px;
    border-bottom-color: #009ade;
    border-bottom-style: solid;
    padding-bottom: 8px;
    color: #fff;
    border-bottom: 3px solid #80cdef
}

.pagination .prev:hover,
.pagination .prev:focus,
.pagination .next:hover,
.pagination .next:focus {
    color: #d9f0fa
}

.pagination .prev {
    float: left
}

.pagination .next {
    float: right
}

@media screen and (max-width: 37.4375em) {
    .pagination {
        text-align: center;
        padding: 30px 0
    }
    .pagination .prev,
    .pagination .next {
        float: none;
        margin: 15px
    }
}

.lang-zh-CN .hide-cn,
.lang-zh-CN .hide-all,
.lang-zh-TW .hide-hk,
.lang-zh-TW .hide-all,
.lang-ja-JP .hide-jp,
.lang-ja-JP .hide-all,
.lang-ko-KR .hide-kr,
.lang-ko-KR .hide-all,
.lang-de-DE .hide-de,
.lang-de-DE .hide-all,
.lang-id-ID .hide-id,
.lang-id-ID .hide-all,
.lang-en .hide-en {
    display: none
}

.columns-4 .column {
    float: left;
    width: 25%
}

.columns-4 .column-1 {
    padding-left: 0;
    padding-right: 24px
}

.columns-4 .column-2 {
    padding-left: 8px;
    padding-right: 16px
}

.columns-4 .column-3 {
    padding-left: 16px;
    padding-right: 8px
}

.columns-4 .column-4 {
    padding-left: 24px;
    padding-right: 0
}

@media screen and (min-width: 48em) {
    .columns-4.divider-lines {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        padding-bottom: 16px
    }
    .columns-4.divider-lines .column {
        float: none;
        padding: 8px 0 0
    }
    .columns-4.divider-lines .column:not(.column-1) {
        border-left: 2px solid #dfe0e0
    }
    .columns-4.divider-lines .column-1 {
        padding-right: 16px
    }
    .columns-4.divider-lines .column-2,
    .columns-4.divider-lines .column-3 {
        padding-left: 16px;
        padding-right: 16px
    }
    .columns-4.divider-lines .column-4 {
        padding-left: 16px
    }
    .columns-4.divider-lines .column-1,
    .columns-4.divider-lines .column-4 {
        width: calc(25% - 8px)
    }
    .columns-4.divider-lines .column-2,
    .columns-4.divider-lines .column-3 {
        width: calc(25% + 8px)
    }
}

@media screen and (max-width: 47.9375em) {
    .columns-4 .column {
        float: none;
        width: auto;
        padding-left: 0;
        padding-right: 0
    }
    .columns-4 .column img {
        max-width: 50%
    }
    .columns-4.divider-lines {
        padding-left: 16px;
        padding-right: 16px
    }
    .columns-4.divider-lines .column:not(.column-1) {
        padding: 24px 0 8px;
        border-top: 2px solid #dfe0e0
    }
    .columns-4.divider-lines .column-1 {
        padding-bottom: 8px
    }
}

.columns-3 .column {
    float: left;
    width: 33.3333333333%
}

.columns-3 .column-1 {
    padding-left: 0;
    padding-right: 20px
}

.columns-3 .column-2 {
    padding-left: 15px;
    padding-right: 15px
}

.columns-3 .column-3 {
    padding-left: 20px;
    padding-right: 0
}

@media screen and (max-width: 47.9375em) {
    .columns-3 .column {
        float: none;
        width: auto;
        padding-left: 0;
        padding-right: 0
    }
}

.columns-2 .column {
    float: left;
    width: 50%
}

.columns-2 .column-1 {
    padding-left: 0;
    padding-right: 15px
}

.columns-2 .column-2 {
    padding-left: 15px;
    padding-right: 0
}

@media screen and (max-width: 37.4375em) {
    .columns-2 .column {
        float: none;
        width: auto;
        padding-left: 0;
        padding-right: 0
    }
}

.inline-grid {
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    max-width: 1230px;
    text-align: center
}

.inline-grid.left {
    text-align: left
}

.inline-grid .grid-item {
    display: inline-block;
    vertical-align: top;
    margin: 0 0 30px;
    padding: 0 15px
}

.inline-grid .grid-break {
    display: none;
    width: 100%;
    height: 1px;
    clear: both
}

.inline-grid-4 .grid-item {
    width: 25%
}

.inline-grid-4 .break-4-0 {
    display: block
}

.inline-grid-5 .grid-item {
    width: 20%
}

.inline-grid-5 .break-5-0 {
    display: block
}

@media screen and (max-width: 62.4375em) {
    .inline-grid-4 .grid-item,
    .inline-grid-5 .grid-item {
        width: 33.3333333333%
    }
    .inline-grid-4 .grid-break,
    .inline-grid-5 .grid-break {
        display: none
    }
    .inline-grid-4 .break-3-0,
    .inline-grid-5 .break-3-0 {
        display: block
    }
}

@media screen and (max-width: 47.9375em) {
    .inline-grid-4 .grid-item,
    .inline-grid-5 .grid-item {
        width: 50%
    }
    .inline-grid-4 .grid-break,
    .inline-grid-5 .grid-break {
        display: none
    }
    .inline-grid-4 .break-2-0,
    .inline-grid-5 .break-2-0 {
        display: block
    }
}

@media screen and (max-width: 37.4375em) {
    .inline-grid {
        padding-left: 0;
        padding-right: 0
    }
    .inline-grid-4 .grid-item,
    .inline-grid-5 .grid-item {
        width: 100%
    }
    .inline-grid-4 .grid-break,
    .inline-grid-5 .grid-break {
        display: block
    }
}

.grid-row {
    position: relative
}

.grid-row:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 8000;
    width: 100%;
    height: 8px;
    background: rgba(0, 0, 0, 0.18)
}

.grid-text {
    min-height: 370px;
    width: 50%
}

.grid-text.left {
    float: left
}

.grid-text.right {
    float: right
}

.grid-text .content {
    width: 100%;
    max-width: 645px;
    padding: 43px 30px 30px
}

.grid-text.left .content {
    float: right
}

.grid-text.right .content {
    padding-left: 30px
}

.grid-image {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    background: #dfe0e0
}

.grid-image.left {
    left: 0
}

.grid-image.right {
    right: 0
}

.grid-image .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #dfe0e0;
    background-repeat: no-repeat;
    background-size: cover
}

.grid-image .bg.top-left {
    background-position: 0 0
}

.grid-image .bg.top-center {
    background-position: 50% 0
}

.grid-image .bg.top-right {
    background-position: 100% 0
}

.grid-image .bg.center-left {
    background-position: 0 50%
}

.grid-image .bg.center-center {
    background-position: 50% 50%
}

.grid-image .bg.center-right {
    background-position: 100% 50%
}

.grid-image .bg.bottom-left {
    background-position: 0 100%
}

.grid-image .bg.bottom-center {
    background-position: 100% 100%
}

.grid-image .bg.bottom-right {
    background-position: 100% 100%
}

.grid-image .illustration {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%
}

.grid-image .illustration.blue {
    background-color: #009ade
}

.grid-image .illustration.lt-blue {
    background-color: #5cc8d9
}

.grid-image .illustration.dk-blue {
    background-color: #084e8e
}

.grid-image .illustration.orange {
    background-color: #f6b73d
}

.grid-image .illustration.green {
    background-color: #77c258
}

.grid-image .illustration.beige {
    background-color: #e7e8e8
}

.grid-image .illustration.brown-gray {
    background-color: #7f776f
}

.grid-image .illustration.red {
    background-color: #d02f77
}

.grid-image .illustration.red-orange {
    background-color: #f0503f
}

.grid-image .illustration.gray {
    background-color: #e7e8e8
}

.grid-image .illustration.grass {
    background-color: #77c258
}

.grid-image .illustration.mustard {
    background-color: #f6b73d
}

.grid-image .illustration.berry {
    background-color: #d02f77
}

.grid-image .illustration.peach {
    background-color: #f0503f
}

.grid-image .illustration.aqua {
    background-color: #5cc8d9
}

.grid-image .illustration.cobalt {
    background-color: #084e8e
}

.grid-image .illustration img {
    max-height: 100%;
    width: auto
}

.grid-image .illustration .inner {
    position: absolute;
    top: 0;
    width: 100%;
    max-width: 645px;
    padding: 50px 0 40px;
    height: 100%;
    text-align: center
}

.grid-image.left .illustration .inner {
    right: 0;
    padding-right: 40px;
    padding-left: 30px
}

.grid-image.right .illustration .inner {
    left: 0;
    padding-left: 40px;
    padding-right: 30px
}

.grid-image .logo {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%
}

.grid-image .logo.blue {
    background-color: #009ade
}

.grid-image .logo.lt-blue {
    background-color: #5cc8d9
}

.grid-image .logo.dk-blue {
    background-color: #084e8e
}

.grid-image .logo.orange {
    background-color: #f6b73d
}

.grid-image .logo.green {
    background-color: #77c258
}

.grid-image .logo.beige {
    background-color: #e7e8e8
}

.grid-image .logo.brown-gray {
    background-color: #7f776f
}

.grid-image .logo.red {
    background-color: #d02f77
}

.grid-image .logo.red-orange {
    background-color: #f0503f
}

.grid-image .logo.gray {
    background-color: #e7e8e8
}

.grid-image .logo.grass {
    background-color: #77c258
}

.grid-image .logo.mustard {
    background-color: #f6b73d
}

.grid-image .logo.berry {
    background-color: #d02f77
}

.grid-image .logo.peach {
    background-color: #f0503f
}

.grid-image .logo.aqua {
    background-color: #5cc8d9
}

.grid-image .logo.cobalt {
    background-color: #084e8e
}

.grid-image .logo img {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    max-height: 60%;
    max-width: 55%;
    width: auto
}

.grid-image .logo .inner {
    position: absolute;
    top: 0;
    width: 100%;
    max-width: 645px;
    padding: 0;
    height: 100%;
    text-align: center
}

.grid-image.left .logo .inner {
    right: 0
}

.grid-image.right .logo .inner {
    left: 0
}

@media screen and (max-width: 62.4375em) {
    .grid-text {
        min-height: 250px
    }
    .grid-image.left .illustration .inner,
    .grid-image.right .illustration .inner {
        padding-left: 30px;
        padding-right: 30px
    }
}

@media screen and (max-width: 47.9375em) {
    .grid-text.left,
    .grid-text.right {
        min-height: 0;
        width: 100%;
        float: none
    }
    .grid-text.left .content,
    .grid-text.right .content {
        float: none;
        width: 100%;
        max-width: none;
        padding: 30px 30px 20px
    }
    .grid-image {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 50%
    }
    .grid-image .illustration .inner {
        padding: 30px
    }
}

@media screen and (max-width: 37.4375em) {
    .grid-text.left .content,
    .grid-text.right .content {
        padding-left: 15px;
        padding-right: 15px
    }
}

#menu-toggle {
    display: none
}

#masthead {
    position: relative
}

#masthead .inner {
    position: relative
}

#logo {
    float: left;
    padding-top: 24px
}

#nav {
    clear: both;
    padding-top: 5px
}

.top-nav {
    height: 53px
}

.top-nav>li {
    position: relative;
    float: left;
    height: 100%;
    font-size: 14px;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-weight: 600
}

.top-nav>li>a {
    display: inline-block;
    padding: 15px 17px;
    color: #818285
}

.top-nav>li:hover>a,
.top-nav>li:focus>a {
    color: #009ade
}

.dropdown {
    position: relative;
    position: absolute;
    z-index: 9000;
    left: 0;
    top: -999em;
    padding: 19px 0 15px;
    min-width: 200px;
    background: #efeff0
}

.dropdown:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 8000;
    width: 100%;
    height: 8px;
    background: rgba(0, 0, 0, 0.18)
}

.top-nav>li:hover .dropdown,
.top-nav>li:focus .dropdown {
    top: 100%
}

.dropdown a {
    display: block;
    padding: 5px 19px;
    white-space: nowrap;
    font-size: 15px;
    line-height: 1.2;
    font-weight: 400;
    text-transform: none;
    letter-spacing: normal;
    color: #616366
}

.dropdown a:hover,
.dropdown a:focus {
    color: #009ade
}

.groups .dropdown {
    padding-bottom: 22px
}

.groups .dropdown a {
    padding-left: 30px
}

.dropdown .header,
.dropdown .subhead {
    padding: 5px 19px;
    white-space: nowrap
}

.dropdown .header {
    margin-top: 15px;
    color: #009ade
}

.dropdown .header:first-child {
    margin-top: 7px
}

.dropdown .subhead {
    margin-top: 7px;
    padding-left: 30px
}

.dropdown .header>a,
.dropdown .subhead>a {
    padding: 0;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    text-transform: inherit;
    letter-spacing: inherit;
    color: inherit
}

.dropdown .header>a:hover,
.dropdown .header>a:focus {
    color: #232525
}

.dropdown .subhead>a:hover,
.dropdown .subhead>a:focus {
    color: #009ade
}

#main-nav {
    float: left;
    margin-left: -15px
}

#cta-nav {
    float: right
}

#cta-nav>li {
    padding-left: 19px
}

#cta-nav>li>a {
    display: inline-block;
    vertical-align: top;
    line-height: 1;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 5px;
    border-bottom-width: 2px;
    border-bottom-color: #009ade;
    border-bottom-style: solid
}

#language {
    position: absolute;
    right: 30px;
    top: 25px
}

#language .selected {
    position: relative;
    padding: 3px 22px 0;
    height: 28px;
    color: #a0a1a3;
    font-size: 13px;
    cursor: pointer
}

#language .selected i {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 18px
}

#language .selector {
    position: absolute;
    z-index: 9000;
    right: 0;
    top: -999em;
    padding: 10px 0 13px;
    min-width: 180px;
    background: #efeff0;
    font-size: 14px;
    line-height: 1.4285714286;
    text-align: right;
    border-top: 8px solid rgba(0, 0, 0, 0.18)
}

#language .selector ul {
    margin: 0;
    padding: 0;
    list-style: none
}

#language .selector a {
    display: block;
    padding: 5px 22px;
    white-space: nowrap;
    color: #616366
}

#language .selector a:hover,
#language .selector a:focus {
    color: #009ade
}

#language:hover .selected,
#language:focus .selected {
    color: #818285
}

#language:hover .selector,
#language:focus .selector {
    top: 100%
}

@media screen and (max-width: 62.4375em) {
    #masthead {
        height: 72px
    }
    #logo {
        padding-top: 23px
    }
    #menu-toggle {
        display: block;
        position: absolute;
        right: 30px;
        top: 24px;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        width: 27px;
        height: 14px;
        border: 4px solid #009ade;
        border-width: 4px 0;
        cursor: pointer
    }
    #menu-toggle:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 5px;
        width: 100%;
        height: 4px;
        background: #009ade
    }
    #language {
        right: 80px;
        top: 26px
    }
    #language .selected {
        height: 46px
    }
    #language .selector {
        display: none;
        top: 100%;
        min-width: 150px
    }
    #nav {
        position: relative;
        display: none;
        position: absolute;
        z-index: 9000;
        left: 0;
        top: 100%;
        padding: 19px 0 16px;
        width: 100%;
        height: auto;
        background: #efeff0
    }
    #nav:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 8000;
        width: 100%;
        height: 8px;
        background: rgba(0, 0, 0, 0.18)
    }
    .top-nav {
        padding-top: 0;
        height: auto
    }
    .top-nav>li {
        float: none;
        height: auto
    }
    .top-nav>li>a {
        display: block;
        padding: 12px 30px
    }
    .dropdown {
        position: static;
        margin-bottom: 15px;
        padding: 12px 0 15px;
        background: #dfe0e0
    }
    .dropdown:before {
        display: none
    }
    .dropdown a {
        display: block;
        padding: 8px 30px 8px 45px;
        white-space: normal
    }
    .dropdown .header,
    .dropdown .subhead {
        white-space: normal
    }
    #main-nav {
        float: none;
        margin-left: 0
    }
    #cta-nav {
        float: none;
        padding-bottom: 12px
    }
    #cta-nav>li {
        padding-left: 30px
    }
}

@media screen and (max-width: 37.4375em) {
    #masthead {
        height: 62px
    }
    #logo {
        padding-top: 18px
    }
    #menu-toggle {
        right: 15px;
        top: 19px
    }
    #language {
        right: 57px;
        top: 21px
    }
    #language .selected {
        height: 41px
    }
    #language .selected span {
        display: none
    }
    .top-nav>li>a {
        padding-left: 15px;
        padding-right: 15px
    }
    .dropdown a {
        padding-left: 30px;
        padding-right: 15px
    }
    #cta-nav>li {
        padding-left: 15px
    }
}

@media screen and (min-width: 62.5em) {
    #nav,
    #language .selector {
        display: block !important
    }
}

.page-content h1 {
    margin: 0 0 30px;
    font-size: 48px;
    line-height: 1.25;
    font-weight: 300;
    color: #009ade
}

@media screen and (max-width: 62.4375em) {
    .page-content h1 {
        margin: 0 0 25px;
        font-size: 42px
    }
}

@media screen and (max-width: 47.9375em) {
    .page-content h1 {
        margin: 0 0 20px;
        font-size: 36px
    }
}

.page-content h2 {
    margin: 0;
    font-size: 16px;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1.5;
    color: #009ade
}

.page-content h3 {
    margin: 0 0 1em;
    font-size: 16px;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1.5
}

.page-content p,
.page-content ul,
.page-content ol {
    margin: 0 0 16px;
    font-size: 15px;
    line-height: 1.6
}

.page-content ul.checkmark {
    padding-left: 0
}

.page-content ul.checkmark li {
    position: relative;
    padding-left: 18px;
    list-style: none
}

.page-content ul.checkmark li::before {
    content: "\2714";
    position: absolute;
    left: 0;
    color: #009ade
}

.page-content a:not(.button) {
    color: #009ade
}

.page-content a:not(.button):hover,
.page-content a:not(.button):focus {
    color: #5cc8d9
}

.page-content .button {
    margin-top: 4px;
    font-size: 17px;
    color: #818285
}

.page-content .button:hover,
.page-content .button:focus {
    color: #009ade
}

.page-content hr {
    clear: both;
    margin: 30px 0
}

.page-content .columns+hr {
    margin-top: 14px
}

.page-content figcaption {
    display: block;
    padding: 0;
    font-size: 14px;
    line-height: 1.2857142857;
    font-style: italic;
    color: #009ade
}

.page-content .return-link {
    margin-bottom: 30px
}

.page-content .return-link a {
    color: #818285
}

.page-content .return-link a:hover,
.page-content .return-link a:focus {
    color: #009ade
}

.page-content .rich-text img {
    height: auto !important
}

.page-content .rich-text img[style*='float'] {
    margin-bottom: 16px !important;
    max-width: 45%
}

.page-content .rich-text img[style*='float:right'],
.page-content .rich-text img[style*='float: right'] {
    margin-left: 27px !important
}

.page-content .rich-text img[style*='float:left'],
.page-content .rich-text img[style*='float: left'] {
    margin-right: 30px !important
}

.page-content .rich-text .fluid-width-video-wrapper {
    float: right;
    margin: 0 0 16px 27px;
    width: 45%;
    padding-top: 25.3125% !important
}

.page-content .rich-text .fluid-width-video-wrapper iframe {
    width: 100% !important;
    height: 100% !important
}

.page-content .large-paragraph p {
    margin: 0 0 25px;
    font-size: 26px;
    line-height: 1.5;
    font-weight: 300
}

.page-content .columns-4 h2,
.page-content .columns-4 h3 {
    margin-bottom: 1em;
    font-size: 18px;
    text-transform: none;
    letter-spacing: normal
}

.page-content .columns-4 img {
    max-width: 80%
}

.page-content blockquote {
    margin: 10px 0 30px;
    padding: 25px 30px 10px;
    background: #e7e8e8
}

.page-content blockquote .quote p {
    position: relative;
    font-size: 16px
}

.page-content blockquote .quote p:first-child::before {
    content: "â€œ";
    position: absolute;
    right: 100%;
    -webkit-transform: scale(2);
    -ms-transform: scale(2);
    transform: scale(2);
    -webkit-transform-origin: 50% 40%;
    -ms-transform-origin: 50% 40%;
    transform-origin: 50% 40%;
    padding-right: 5px;
    font-weight: 700;
    color: #fff
}

.page-content blockquote .quote p:last-child::after {
    content: "â€";
    position: absolute;
    -webkit-transform: scale(2);
    -ms-transform: scale(2);
    transform: scale(2);
    -webkit-transform-origin: 50% 40%;
    -ms-transform-origin: 50% 40%;
    transform-origin: 50% 40%;
    padding-left: 5px;
    font-weight: 700;
    color: #fff
}

.page-content blockquote footer {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 1.6;
    font-weight: 500;
    font-style: italic;
    color: #009ade
}

.page-content blockquote .quote-image {
    margin-bottom: 16px
}

.page-content .large-figure {
    padding: 0;
    margin: 30px 0
}

.page-content .large-figure>img {
    display: block;
    margin: 0 auto
}

.page-content .large-figure figcaption {
    margin: 16px 0 0;
    text-align: center
}

.page-content .columns+.large-figure {
    margin-top: 14px
}

.page-content .sidebar-text {
    float: right;
    margin: 0 0 30px 45px;
    padding: 25px 25px 13px;
    width: 280px;
    background: #009ade;
    color: #fff
}

.page-content .sidebar-text a {
    color: #fff;
    font-weight: 700
}

.page-content .sidebar-text a:hover,
.page-content .sidebar-text a:focus {
    color: #d9f0fa
}

@media screen and (max-width: 68.6875em) {
    .page-content .sidebar-text {
        float: none;
        margin-left: 0;
        width: auto
    }
}

.page-content .embed-code {
    margin: 30px 0
}

.page-content .embed-code iframe {
    max-width: 100%
}

.page-content .columns+.embed-code {
    margin-top: 14px
}

@media screen and (min-width: 68.75em) {
    .page-content .sidebar-text ~ .embed-code {
        overflow: hidden
    }
    .page-content .sidebar-text ~ .embed-code form {
        float: left
    }
}

.page-content table {
    margin: 30px 0;
    border-bottom: 4px solid #dfe0e0
}

.page-content table thead th {
    font-size: 15px;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-weight: 600;
    padding: 12px 15px;
    background: #009ade;
    color: #fff;
    text-align: left;
    vertical-align: bottom
}

.page-content table tbody td,
.page-content table tbody th {
    padding: 12px 15px;
    text-align: left;
    vertical-align: top;
    font-size: 15px;
    line-height: 1.6
}

.page-content table tbody tr:nth-child(even) {
    background: #f2f3f3
}

@media screen and (max-width: 37.4375em) {
    .page-content .rich-text img[style*='float'],
    .page-content .rich-text img[align='right'],
    .page-content .rich-text img[align='left'] {
        display: block;
        float: none !important;
        max-width: 100%
    }
    .page-content .rich-text img[style*='float:right'],
    .page-content .rich-text img[style*='float: right'],
    .page-content .rich-text img[align='right'] {
        margin-left: 0 !important
    }
    .page-content .rich-text img[style*='float:left'],
    .page-content .rich-text img[style*='float: left'],
    .page-content .rich-text img[align='left'] {
        margin-right: 0 !important
    }
    .page-content .rich-text .fluid-width-video-wrapper {
        float: none;
        margin-left: 0;
        width: 100%;
        padding-top: 56.25% !important
    }
}

.with-sidebar .page-content {
    float: left;
    padding-right: 45px;
    width: 75%
}

@media screen and (max-width: 62.4375em) {
    .with-sidebar .page-content {
        float: none;
        padding-right: 0;
        padding-bottom: 15px;
        width: auto
    }
}

@media screen and (max-width: 37.4375em) {
    .with-sidebar .page-content .rich-text .fluid-width-video-wrapper {
        width: 100%;
        padding-top: 56.25% !important
    }
}

.no-sidebar .page-content {
    padding: 0 200px 0 100px
}

@media screen and (max-width: 73.0625em) {
    .no-sidebar .page-content {
        padding: 0 100px
    }
}

@media screen and (max-width: 62.4375em) {
    .no-sidebar .page-content {
        padding: 0
    }
}

.no-sidebar .page-content .rich-text img[style*='float'] {
    max-width: 55%
}

.no-sidebar .page-content .rich-text img[style*='float:right'],
.no-sidebar .page-content .rich-text img[style*='float: right'] {
    margin-right: -130px !important
}

.no-sidebar .page-content .rich-text img[style*='float:left'],
.no-sidebar .page-content .rich-text img[style*='float: left'] {
    margin-left: -70px !important
}

.no-sidebar .page-content .rich-text .fluid-width-video-wrapper {
    margin-right: -130px;
    width: 55%;
    padding-top: 30.9375% !important
}

.no-sidebar .page-content .large-figure {
    margin-left: -70px;
    margin-right: -130px
}

@media screen and (max-width: 73.0625em) {
    .no-sidebar .page-content .rich-text img[style*='float'] {
        max-width: 50%
    }
    .no-sidebar .page-content .rich-text img[style*='float:right'],
    .no-sidebar .page-content .rich-text img[style*='float: right'] {
        margin-right: -70px !important
    }
    .no-sidebar .page-content .rich-text .fluid-width-video-wrapper {
        margin-right: -70px;
        width: 50%;
        padding-top: 28.125% !important
    }
    .no-sidebar .page-content .large-figure {
        margin-right: -70px
    }
}

@media screen and (max-width: 62.4375em) {
    .no-sidebar .page-content .rich-text img[style*='float'] {
        max-width: 45%
    }
    .no-sidebar .page-content .rich-text img[style*='float:right'],
    .no-sidebar .page-content .rich-text img[style*='float: right'] {
        margin-right: 0 !important
    }
    .no-sidebar .page-content .rich-text img[style*='float:left'],
    .no-sidebar .page-content .rich-text img[style*='float: left'] {
        margin-left: 0 !important
    }
    .no-sidebar .page-content .rich-text .fluid-width-video-wrapper {
        margin-right: 0;
        width: 45%;
        padding-top: 25.3125% !important
    }
    .no-sidebar .page-content .large-figure {
        margin-left: 0;
        margin-right: 0
    }
}

@media screen and (max-width: 37.4375em) {
    .no-sidebar .page-content .rich-text .fluid-width-video-wrapper {
        width: 100%;
        padding-top: 56.25% !important
    }
}

.negative-top {
    position: relative;
    z-index: 8001;
    margin-top: -200px;
    min-height: 200px;
    padding-top: 65px;
    padding-bottom: 65px;
    background: #fff
}

.positive-top {
    padding-top: 35px;
    padding-bottom: 65px
}

@media screen and (max-width: 73.0625em) {
    .negative-top {
        margin-top: -150px;
        min-height: 150px
    }
}

@media screen and (max-width: 62.4375em) {
    .negative-top {
        margin-top: 0;
        padding-top: 30px;
        padding-bottom: 30px;
        min-height: 0
    }
    .positive-top {
        padding-top: 30px;
        padding-bottom: 30px
    }
}

@media screen and (max-width: 47.9375em) {
    .negative-top {
        margin-top: 0;
        padding-top: 20px;
        padding-bottom: 20px
    }
    .positive-top {
        padding-top: 20px;
        padding-bottom: 20px
    }
}

.image-slider {
    position: relative
}

.image-slider:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 8000;
    width: 100%;
    height: 8px;
    background: rgba(0, 0, 0, 0.18)
}

.image-slider .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #dfe0e0;
    background-repeat: no-repeat;
    background-size: cover;
    position: static;
    height: 500px
}

.image-slider .bg.top-left {
    background-position: 0 0
}

.image-slider .bg.top-center {
    background-position: 50% 0
}

.image-slider .bg.top-right {
    background-position: 100% 0
}

.image-slider .bg.center-left {
    background-position: 0 50%
}

.image-slider .bg.center-center {
    background-position: 50% 50%
}

.image-slider .bg.center-right {
    background-position: 100% 50%
}

.image-slider .bg.bottom-left {
    background-position: 0 100%
}

.image-slider .bg.bottom-center {
    background-position: 100% 100%
}

.image-slider .bg.bottom-right {
    background-position: 100% 100%
}

@media screen and (max-width: 62.4375em) {
    .image-slider .bg {
        height: 370px
    }
}

@media screen and (max-width: 47.9375em) {
    .image-slider .bg {
        height: 300px
    }
}

@media screen and (max-width: 37.4375em) {
    .image-slider .bg {
        height: 0;
        padding-bottom: 50%
    }
}

.image-slider .flex-control-nav {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: none
}

.sidebars {
    float: right;
    margin: 0 0 16px;
    padding: 0 13px 13px;
    width: 25%;
    background: #dfe0e0
}

.sidebar {
    padding: 20px 0;
    border-top: 2px solid #fff
}

.sidebar:first-child {
    border-top: none
}

.sidebar .header {
    font-size: 14px;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 12px;
    line-height: 1.8461538462;
    color: #232525
}

.sidebar .header img {
    position: relative;
    top: 2px;
    display: inline-block;
    vertical-align: baseline;
    margin-right: 4px
}

.sidebar .inner {
    padding: 0 12px
}

.sidebar .inner div,
.sidebar .inner p,
.sidebar .inner ul {
    font-size: 14px;
    line-height: 1.4285714286
}

.sidebar .inner .title {
    font-weight: 700
}

.sidebar .inner .link a {
    font-size: 14px;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-weight: 600
}

.sidebar .inner .link a:hover,
.sidebar .inner .link a:focus {
    color: #0077ab
}

@media screen and (max-width: 62.4375em) {
    .sidebars {
        float: none;
        width: auto
    }
}


.documents-template .negative-top {
    padding-bottom: 30px
}

.documents-template .positive-top {
    padding-bottom: 0
}

@media screen and (max-width: 47.9375em) {
    .documents-template .negative-top {
        padding-bottom: 20px
    }
}

.document {
    padding: 0 200px 0 100px
}

@media screen and (max-width: 73.0625em) {
    .document {
        padding: 0 100px
    }
}

@media screen and (max-width: 62.4375em) {
    .document {
        padding: 0
    }
}

.documents article {
    position: relative;
    padding: 50px 0 35px
}

.documents article:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 8000;
    width: 100%;
    height: 8px;
    background: rgba(0, 0, 0, 0.18)
}

.documents article:first-of-type {
    padding-top: 0
}

.documents article:first-of-type:before {
    display: none
}

.documents article h2 {
    margin: 0 0 25px;
    font-size: 35px;
    line-height: 1.2;
    font-weight: 300;
    color: #009ade
}

@media screen and (max-width: 47.9375em) {
    .documents article h2 {
        margin-bottom: 20px;
        font-size: 30px
    }
}

@media screen and (max-width: 37.4375em) {
    .documents article h2 {
        margin-bottom: 18px;
        font-size: 26px
    }
}

.documents article h2 a:hover,
.documents article h2 a:focus {
    color: #616366
}

.documents article h3 {
    font-size: 15px;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-weight: 600;
    margin: -12px 0 16px;
    line-height: 1.5
}

.documents article h4 {
    margin: 0 0 8px;
    font-size: 15px;
    line-height: 1.6;
    font-weight: 700
}

.documents article p,
.documents article ul {
    margin: 0 0 1em;
    font-size: 15px;
    line-height: 1.6
}

.documents article .image {
    float: left;
    margin-bottom: 15px
}

.documents article .image a {
    position: relative;
    display: inline-block
}

.documents article .image a.doc {
    border-bottom: 5px solid #d1d1d1
}

.documents article .image img:not(.corner) {
    max-width: 140px
}

.documents article .image .cover {
    border: 1px solid #d1d1d1
}

.documents article .image .corner {
    position: absolute;
    right: 0;
    top: 0
}

.documents article .text {
    margin-left: 200px
}

@media screen and (max-width: 37.4375em) {
    .documents article .image {
        float: none;
        margin-bottom: 20px
    }
    .documents article .image img:not(.corner) {
        max-width: 100px
    }
    .documents article .text {
        margin-left: 0
    }
}

.news-template .negative-top {
    padding-bottom: 30px
}

.news-template .positive-top {
    padding-bottom: 0
}

@media screen and (max-width: 47.9375em) {
    .news-template .negative-top {
        padding-bottom: 20px
    }
}

.news-template .sidebar-text {
    float: right;
    padding: 25px 25px 13px;
    width: 325px;
    background: #009ade;
    color: #fff;
    border: 1px solid #fff;
    border-width: 0 0 30px 45px
}

.news-template .sidebar-text p {
    margin: 0 0 16px;
    font-size: 15px;
    line-height: 1.6
}

.news-template .sidebar-text a {
    color: #fff;
    font-weight: 700
}

.news-template .sidebar-text a:hover,
.news-template .sidebar-text a:focus {
    color: #d9f0fa
}

@media screen and (max-width: 62.4375em) {
    .news-template .sidebar-text {
        float: none;
        margin: 0 0 30px;
        border: none;
        width: auto
    }
}

#news {
    padding-bottom: 35px
}

#news article {
    padding: 30px 0;
    border-top: 4px solid #dfe0e0
}

#news article:first-child {
    padding-top: 0;
    border: none
}

#news h2 {
    margin: 0 0 25px;
    font-size: 30px;
    line-height: 1.2;
    font-weight: 300;
    color: #009ade;
    margin: 0 !important
}

@media screen and (max-width: 47.9375em) {
    #news h2 {
        margin-bottom: 20px;
        font-size: 26px
    }
}

@media screen and (max-width: 37.4375em) {
    #news h2 {
        margin-bottom: 18px;
        font-size: 22px
    }
}

#news h2 a:hover,
#news h2 a:focus {
    color: #5cc8d9
}

#news .date {
    font-size: 15px;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 10px;
    color: #232525
}

#news .author {
    font-size: 16px;
    margin-bottom: 10px
}

.news-post-template .author {
    font-size: 16px;
    margin-bottom: 10px
}

.appearances-template .negative-top {
    padding-bottom: 30px
}

.appearances-template .positive-top {
    padding-bottom: 0
}

@media screen and (max-width: 47.9375em) {
    .appearances-template .negative-top {
        padding-bottom: 20px
    }
}

#appearances {
    padding-bottom: 35px
}

#appearances article {
    padding: 45px 0 30px;
    border-top: 4px solid #dfe0e0
}

#appearances article:first-child {
    padding-top: 0;
    border: none
}

#appearances article>h2 {
    margin: 0 0 25px;
    font-size: 35px;
    line-height: 1.2;
    font-weight: 300;
    color: #009ade;
    margin: 0 0 15px !important;
    color: #232525
}

@media screen and (max-width: 47.9375em) {
    #appearances article>h2 {
        margin-bottom: 20px;
        font-size: 30px
    }
}

@media screen and (max-width: 37.4375em) {
    #appearances article>h2 {
        margin-bottom: 18px;
        font-size: 26px
    }
}

#appearances .date {
    font-size: 15px;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 10px;
    color: #009ade
}

#appearances .large-figure,
#appearances .embed-code {
    margin-top: 10px
}

@media screen and (max-width: 37.4375em) {
    #appearances article {
        padding: 30px 0 10px
    }
    #appearances article:first-child {
        padding-top: 0
    }
}

#offices {
    position: relative;
    padding: 60px 0 12px;
    background: #e7e8e8
}

#offices:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 8000;
    width: 100%;
    height: 8px;
    background: rgba(0, 0, 0, 0.18)
}

#offices .grid-item {
    margin-bottom: 45px
}

#offices .grid-item h2 {
    font-size: 15px;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0;
    color: #009ade
}

#offices .grid-item p {
    margin: 12px 0 0;
    font-size: 14px;
    line-height: 1.4285714286
}

#offices .grid-item .phone {
    font-weight: 700
}

#offices .grid-item .map-link {
    margin-top: 15px
}

#offices .grid-item .map-link .button {
    font-size: 13px
}

@media screen and (max-width: 37.4375em) {
    #offices {
        padding-top: 40px
    }
    #offices .grid-item {
        margin-bottom: 30px
    }
}

.partners {
    position: relative;
    padding: 45px 0 20px;
    text-align: center
}

.partners:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 8000;
    width: 100%;
    height: 8px;
    background: rgba(0, 0, 0, 0.18)
}

.partners:nth-child(odd) {
    background: #e7e8e8
}

.partners .inline-grid {
    margin-bottom: 45px;
    border-bottom: 2px solid rgba(97, 99, 102, 0.2)
}

.partners .inline-grid:last-of-type {
    margin-bottom: 0;
    border: none
}

.partners .grid-item {
    margin-bottom: 40px
}

.partners h1 {
    margin: 0 0 40px;
    font-weight: 300;
    font-size: 35px;
    line-height: 1.2571428571;
    color: #232525
}

.partners h2 {
    margin: 0 0 30px;
    font-weight: 500;
    font-size: 22px;
    line-height: 1.25
}

.partners h3 {
    font-size: 16px;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0 0 8px;
    line-height: 1.2;
    color: #009ade
}

.partners h3 a:hover,
.partners h3 a:focus {
    color: #232525
}

.partners h4 {
    margin: 0 0 8px;
    font-size: 15px;
    line-height: 1.3333333333;
    font-weight: 400;
    font-style: italic
}

@media screen and (max-width: 47.9375em) {
    .partners {
        padding-top: 30px
    }
    .partners h1 {
        margin-bottom: 30px
    }
}

@media screen and (max-width: 37.4375em) {
    .partners {
        padding-top: 25px
    }
    .partners h1 {
        margin-bottom: 25px;
        font-size: 30px
    }
    .partners .grid-item {
        margin-bottom: 30px
    }
}

#programmatic {
    padding: 45px 0 12px;
    text-align: center
}

#programmatic .grid-item {
    margin-bottom: 55px
}

#programmatic .summary {
    display: block
}

#programmatic .summary .headshot {
    position: relative;
    max-width: 405px;
    margin: 0 auto 18px
}

#programmatic .summary .more {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 154, 222, 0.7);
    opacity: 0;
    -webkit-transition: opacity 0.25s linear;
    -o-transition: opacity 0.25s linear;
    transition: opacity 0.25s linear
}

#programmatic .summary .more span {
    font-size: 20px;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-weight: 600;
    display: inline-block;
    vertical-align: top;
    line-height: 1;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 5px;
    border-bottom-width: 2px;
    border-bottom-color: #009ade;
    border-bottom-style: solid;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    margin-top: -15px;
    color: #fff;
    border-bottom-width: 3px;
    border-color: #5cc8d9
}

#programmatic .summary h2 {
    margin: 0 0 8px;
    font-size: 26px;
    font-weight: 300;
    line-height: 1.2;
    color: #616366;
    -webkit-transition: color 0.25s linear;
    -o-transition: color 0.25s linear;
    transition: color 0.25s linear
}

#programmatic .summary h3 {
    font-size: 16px;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 8px;
    color: #009ade
}

#programmatic .summary:hover h2,
#programmatic .summary:focus h2 {
    color: #009ade
}

#programmatic .summary:hover .more,
#programmatic .summary:focus .more {
    opacity: 1
}

#programmatic .headshot-placeholder {
    height: 0;
    padding-bottom: 100%;
    background: #dfe0e0
}

@media screen and (max-width: 62.4375em) {
    #programmatic .grid-item {
        margin-bottom: 40px
    }
    #programmatic .summary h2 {
        font-size: 23px
    }
    #programmatic .summary h3 {
        font-size: 14px
    }
}

@media screen and (max-width: 47.9375em) {
    #programmatic {
        padding-top: 30px
    }
    #programmatic h1 {
        margin-bottom: 30px
    }
}

@media screen and (max-width: 37.4375em) {
    #programmatic {
        padding-top: 25px
    }
    #programmatic h1 {
        margin-bottom: 25px;
        font-size: 30px
    }
    #programmatic .grid-item {
        margin-bottom: 30px
    }
}

.sharing-bar {
    margin-top: 30px
}

.sharing-bar+hr {
    margin-top: 15px
}

.sharing-bar .sharing-header,
.sharing-bar .a2a_kit {
    display: inline-block;
    vertical-align: middle
}

.sharing-bar .sharing-header {
    font-size: 15px;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-weight: 600;
    margin-right: 2px;
    color: #a0a1a3
}

.sharing-bar .a2a_kit a {
    margin-right: 4px
}

.sharing-bar .a2a_kit a .a2a_svg {
    border-radius: 2px !important;
    background-color: #818285 !important;
    opacity: 1 !important;
    -webkit-transition: background-color 0.25s linear;
    -o-transition: background-color 0.25s linear;
    transition: background-color 0.25s linear
}

.sharing-bar .a2a_kit a:hover .a2a_svg {
    background-color: #009ade !important
}

#bg-investors {
    background-image: url("//thetradedesk.com/assets/general/_640x640_crop_top-center/IR-crop.jpg")
}

@media all and (min-width: 480px) {
    #bg-investors {
        background-image: url("//thetradedesk.com/assets/general/_1280xAUTO_fit_center-center_75/IR-crop.jpg")
    }
}

@media all and (min-width: 1024px) {
    #bg-investors {
        background-image: url("//thetradedesk.com/assets/general/_1900xAUTO_fit_center-center_75/IR-crop.jpg")
    }
}

#in-page-menu-toggle {
    display: none
}

.in-page-nav {
    position: relative;
    position: absolute;
    left: 0;
    bottom: 100%;
    width: 100%;
    background: #009ade
}

.in-page-nav:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 8000;
    width: 100%;
    height: 8px;
    background: rgba(0, 0, 0, 0.18)
}

.in-page-nav::before {
    top: 100%
}

.in-page-nav>ul {
    padding: 0 12px
}

.in-page-nav>ul>li {
    position: relative;
    float: left;
    font-size: 13px;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-weight: 600
}

.in-page-nav>ul>li>a {
    display: inline-block;
    padding: 19px 12px;
    color: #fff;
    -webkit-transition: background-color 0.25s linear;
    -o-transition: background-color 0.25s linear;
    transition: background-color 0.25s linear
}

.in-page-nav li ul {
    position: relative;
    position: absolute;
    z-index: 9000;
    left: 0;
    top: -999em;
    padding: 19px 0 15px;
    min-width: 200px;
    background: #efeff0
}

.in-page-nav li ul:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 8000;
    width: 100%;
    height: 8px;
    background: rgba(0, 0, 0, 0.18)
}

.in-page-nav>ul>li:hover>a,
.in-page-nav>ul>li:focus>a {
    background-color: rgba(0, 0, 0, 0.1)
}

.in-page-nav>ul>li:hover ul,
.in-page-nav>ul>li:focus ul {
    top: 100%
}

.in-page-nav li ul a {
    display: block;
    padding: 5px 19px;
    white-space: nowrap;
    font-size: 15px;
    line-height: 1.2;
    font-weight: 400;
    text-transform: none;
    letter-spacing: normal;
    color: #616366
}

.in-page-nav li ul a:hover,
.in-page-nav li ul a:focus {
    color: #009ade
}

@media screen and (max-width: 62.4375em) {
    #in-page-menu-toggle {
        display: block;
        position: relative;
        padding: 19px 12px 19px 65px;
        font-size: 13px;
        letter-spacing: .08em;
        text-transform: uppercase;
        font-weight: 600;
        cursor: pointer;
        color: #fff
    }
    #in-page-menu-toggle span {
        display: block;
        position: absolute;
        left: 30px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        width: 25px;
        height: 11px;
        border: 3px solid #fff;
        border-width: 3px 0;
        cursor: pointer
    }
    #in-page-menu-toggle span:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 4px;
        width: 100%;
        height: 3px;
        background: #fff
    }
    .in-page-nav {
        left: -30px;
        width: calc(100% + 60px)
    }
    .in-page-nav>ul {
        position: relative;
        display: none;
        position: absolute;
        z-index: 9000;
        left: 0;
        top: 100%;
        padding: 19px 0 16px;
        width: 100%;
        height: auto;
        background: #efeff0
    }
    .in-page-nav>ul:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 8000;
        width: 100%;
        height: 8px;
        background: rgba(0, 0, 0, 0.18)
    }
    .in-page-nav ul>li {
        float: none
    }
    .in-page-nav ul>li>a {
        display: block;
        padding: 12px 30px;
        color: #818285;
        background: none !important
    }
    .in-page-nav li ul {
        position: static;
        margin-bottom: 15px;
        padding: 12px 0 15px;
        background: #dfe0e0
    }
    .in-page-nav li ul:before {
        display: none
    }
    .in-page-nav li ul a {
        display: block;
        padding: 8px 30px 8px 45px
    }
}

@media screen and (max-width: 37.4375em) {
    #in-page-menu-toggle {
        padding-left: 50px
    }
    #in-page-menu-toggle span {
        left: 15px
    }
    .in-page-nav {
        left: -15px;
        width: calc(100% + 30px)
    }
    .in-page-nav ul>li>a {
        padding-left: 15px;
        padding-right: 15px
    }
    .in-page-nav li ul a {
        padding-left: 30px;
        padding-right: 15px
    }
}

@media screen and (min-width: 62.5em) {
    .in-page-nav ul {
        display: block !important
    }
}

.investor-template #language {
    display: none
}

.investor-template .page-content h2 {
    margin: 0 0 25px;
    font-size: 30px;
    line-height: 1.2;
    font-weight: 300;
    color: #009ade;
    margin: 25px 0 20px;
    text-transform: none;
    letter-spacing: normal
}

@media screen and (max-width: 47.9375em) {
    .investor-template .page-content h2 {
        margin-bottom: 20px;
        font-size: 26px
    }
}

@media screen and (max-width: 37.4375em) {
    .investor-template .page-content h2 {
        margin-bottom: 18px;
        font-size: 22px
    }
}

.investor-template .page-content h3 {
    margin: 1.25em 0 .8em;
    color: #009ade
}

.investor-template .page-content h4 {
    margin: 1.25em 0 .4em;
    font-size: 16px;
    line-height: 1.6;
    font-weight: 700
}

.investor-template .page-content .button {
    color: #616366
}

.investor-template .page-content .button:hover,
.investor-template .page-content .button:focus {
    color: #5cc8d9
}

.investor-template .page-content label {
    font-size: 14px;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-weight: 600;
    color: #009ade;
    text-align: left
}

.investor-template .page-content input[type=text],
.investor-template .page-content input[type=password],
.investor-template .page-content input[type=color],
.investor-template .page-content input[type=date],
.investor-template .page-content input[type=datetime],
.investor-template .page-content input[type=email],
.investor-template .page-content input[type=month],
.investor-template .page-content input[type=number],
.investor-template .page-content input[type=range],
.investor-template .page-content input[type=search],
.investor-template .page-content input[type=tel],
.investor-template .page-content input[type=time],
.investor-template .page-content input[type=url],
.investor-template .page-content input[type=week],
.investor-template .page-content select {
    padding: 0;
    height: 36px;
    font-size: 16px;
    font-weight: 300;
    background: #e7e8e8;
    border: none;
    color: #232525;
    text-indent: 10px
}

.investor-template .page-content select {
    text-indent: 0
}

.investor-template .page-content textarea {
    padding: 6px 10px 0;
    font-size: 16px;
    font-weight: 300;
    background: #e7e8e8;
    border: none;
    color: #232525
}

.investor-template .page-content button,
.investor-template .page-content input[type=submit] {
    margin-top: 10px;
    font-family: inherit;
    font-size: 18px;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    padding: 12px 15px 10px;
    border-radius: 0;
    border-bottom: 4px solid #084e8e;
    background: #009ade;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    -webkit-transition: background 0.2s linear;
    -o-transition: background 0.2s linear;
    transition: background 0.2s linear;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #fff;
    text-shadow: none
}

.investor-template .page-content button:hover,
.investor-template .page-content button:focus,
.investor-template .page-content input[type=submit]:hover,
.investor-template .page-content input[type=submit]:focus {
    background: #084e8e
}

@media screen and (max-width: 62.4375em) {
    .investor-template .negative-top {
        padding-top: 42px
    }
}

@media screen and (max-width: 47.9375em) {
    .investor-template .negative-top {
        padding-top: 32px
    }
}