@charset"UTF-8";
.clear,
.clearfix:after,
.slick-track:after {
    clear: both
}
.photo-album__slider {
    display: none;
}
.photo-album__slider .slick-initialized {
    display: block;
}
.flickity-enabled.is-draggable,
.slick-slider {
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -ms-user-select: none
}
.slick-list,
.slick-slider,
.slick-track {
    position: relative;
    display: block
}
.slick-loading .slick-slide,
.slick-loading .slick-track {
    visibility: hidden
}
.slick-next,
.slick-next:focus,
.slick-next:hover,
.slick-prev,
.slick-prev:focus,
.slick-prev:hover {
    color: transparent;
    background: 0 0;
    outline: 0
}
.slick-dots li button:before,
.slick-next:before,
.slick-prev:before {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}
.flickity-page-dots,
.slick-dots {
    bottom: -25px;
    text-align: center;
    list-style: none
}
.slick-dots,
ul {
    list-style: none
}
.remodal,
.remodal-wrapper:after,
input,
select {
    vertical-align: middle
}
.remodal,
body {
    -webkit-text-size-adjust: 100%
}
#menu,
*,
.remodal,
.slick-slider,
label,
select {
    box-sizing: border-box
}
.slick-slider {
    -webkit-touch-callout: none;
    -moz-user-select: none;
    user-select: none;
    touch-action: pan-y
}
.slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0
}
.slick-list:focus {
    outline: 0
}
.slick-list.dragging {
    cursor: pointer;
    cursor: hand
}
.slick-slider .slick-list,
.slick-slider .slick-track {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}
.slick-track {
    left: 0;
    top: 0;
    margin-left: auto;
    margin-right: auto
}
.slick-track:after,
.slick-track:before {
    content: "";
    display: table
}
.slick-slide {
    float: left;
    height: 100%;
    min-height: 1px;
    display: none
}
[dir=rtl] .slick-slide {
    float: right
}
.slick-slide img {
    display: block
}
.slick-slide.slick-loading img {
    display: none
}
.slick-slide.dragging img {
    pointer-events: none
}
.slick-initialized .slick-slide {
    display: block
}
.slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent
}
.slick-arrow.slick-hidden {
    display: none
}
.slick-dots,
.slick-next,
.slick-prev {
    position: absolute;
    display: block;
    padding: 0
}
.slick-slide:hover {
    cursor: -webkit-grab;
    cursor: grab
}
.slick-slide:active {
    cursor: -webkit-grabbing;
    cursor: grabbing
}
.slick-slide a,
.slick-slide:focus {
    outline: 0
}
@font-face {
    font-family: slick;
    src: url('fonts/slick.eot');
    src: url('fonts/slick.eot?#iefix') format("embedded-opentype"), url(fonts/slick.woff) format("woff"), url(fonts/slick.ttf) format("truetype"), url(fonts/slick.svg#slick) format("svg");
    font-weight: 400;
    font-style: normal
}
.slick-next,
.slick-prev {
    height: 20px;
    width: 20px;
    line-height: 0;
    font-size: 0;
    cursor: pointer;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    border: none
}
.slick-next:focus:before,
.slick-next:hover:before,
.slick-prev:focus:before,
.slick-prev:hover:before {
    opacity: 1
}
.slick-next.slick-disabled:before,
.slick-prev.slick-disabled:before {
    opacity: .25
}
.slick-next:before,
.slick-prev:before {
    font-size: 20px;
    line-height: 1;
    color: #fff;
    opacity: .75
}
.slick-prev {
    left: -25px
}
[dir=rtl] .slick-prev {
    left: auto;
    right: -25px
}
.slick-prev:before {
    content: "←"
}
.slick-next:before,
[dir=rtl] .slick-prev:before {
    content: "→"
}
.slick-next {
    right: -25px
}
[dir=rtl] .slick-next {
    left: -25px;
    right: auto
}
[dir=rtl] .slick-next:before {
    content: "←"
}
.slick-dotted.slick-slider {
    margin-bottom: 30px
}
.slick-dots {
    margin: 0;
    width: 100%
}
.slick-dots li {
    position: relative;
    display: inline-block;
    height: 20px;
    width: 20px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer
}
.slick-dots li button {
    border: 0;
    background: 0 0;
    display: block;
    height: 20px;
    width: 20px;
    outline: 0;
    line-height: 0;
    font-size: 0;
    color: transparent;
    padding: 5px;
    cursor: pointer
}
.slick-dots li button:focus,
.slick-dots li button:hover {
    outline: 0
}
.slick-dots li button:focus:before,
.slick-dots li button:hover:before {
    opacity: 1
}
.slick-dots li button:before {
    position: absolute;
    top: 0;
    left: 0;
    content: "•";
    width: 20px;
    height: 20px;
    font-size: 6px;
    line-height: 20px;
    text-align: center;
    color: #000;
    opacity: .25
}
.slick-dots li.slick-active button:before {
    color: #000;
    opacity: .75
}

/*! Flickity v2.1.1
  https://flickity.metafizzy.co
  ---------------------------------------------- */.flickity-enabled {
    position: relative
}
.flickity-enabled:focus {
    outline: 0
}
.flickity-viewport {
    overflow: hidden;
    position: relative;
    height: 100%
}
.flickity-slider {
    position: absolute;
    width: 100%;
    height: 100%
}
.flickity-enabled.is-draggable {
    tap-highlight-color: transparent;
    -moz-user-select: none;
    user-select: none
}
.Opta,
a {
    -webkit-tap-highlight-color: transparent
}
.flickity-enabled.is-draggable .flickity-viewport {
    cursor: move;
    cursor: -webkit-grab;
    cursor: grab
}
.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
    cursor: -webkit-grabbing;
    cursor: grabbing
}
.flickity-button {
    position: absolute;
    background: rgba(255, 255, 255, .75);
    border: none;
    color: #333
}
.flickity-button:hover {
    background: #fff;
    cursor: pointer
}
.flickity-button:focus {
    outline: 0;
    box-shadow: 0 0 0 5px #19f
}
.flickity-button:active {
    opacity: .6
}
.flickity-button:disabled {
    opacity: .3;
    cursor: auto;
    pointer-events: none
}
.flickity-button-icon {
    fill: #333
}
.flickity-prev-next-button {
    top: 50%;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}
.flickity-prev-next-button.previous {
    left: 10px
}
.flickity-prev-next-button.next {
    right: 10px
}
.flickity-rtl .flickity-prev-next-button.previous {
    left: auto;
    right: 10px
}
.flickity-rtl .flickity-prev-next-button.next {
    right: auto;
    left: 10px
}
.flickity-prev-next-button .flickity-button-icon {
    position: absolute;
    left: 20%;
    top: 20%;
    width: 60%;
    height: 60%
}
.flickity-page-dots {
    position: absolute;
    width: 100%;
    padding: 0;
    margin: 0;
    line-height: 1
}
.flickity-rtl .flickity-page-dots {
    direction: rtl
}
.flickity-page-dots .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 8px;
    background: #333;
    border-radius: 50%;
    opacity: .25;
    cursor: pointer
}
.flickity-page-dots .dot.is-selected {
    opacity: 1
}
html.remodal-is-locked {
    overflow: hidden;
    touch-action: none
}
.remodal,
[data-remodal-id] {
    display: none
}
.remodal-overlay {
    position: fixed;
    z-index: 7;
    top: -5000px;
    right: -5000px;
    bottom: -5000px;
    left: -5000px;
    display: none;
    background: rgba(43, 46, 56, .9)
}
.remodal-wrapper {
    position: fixed;
    z-index: 8;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: none;
    overflow: auto;
    text-align: center;
    -webkit-overflow-scrolling: touch;
    padding: 10px 10px 0
}
.remodal-wrapper:after {
    display: inline-block;
    height: 100%;
    margin-left: -0.05em;
    content: ""
}
.remodal-overlay,
.remodal-wrapper {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}
.remodal {
    position: relative;
    outline: 0;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    color: #2b2e38;
    background: #fff
}
.remodal-is-initialized {
    display: inline-block
}
.remodal-bg.remodal-is-opened,
.remodal-bg.remodal-is-opening {
    -webkit-filter:blur(3px);
    filter:blur(3px)
}
.remodal-overlay.remodal-is-closing,
.remodal-overlay.remodal-is-opening {
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards
}
.remodal-overlay.remodal-is-opening {
    -webkit-animation-name: remodal-overlay-opening-keyframes;
    animation-name: remodal-overlay-opening-keyframes
}
.remodal-overlay.remodal-is-closing {
    -webkit-animation-name: remodal-overlay-closing-keyframes;
    animation-name: remodal-overlay-closing-keyframes
}
@media (min-width:769px) {
    .remodal {
        padding: 30px
    }
}
.remodal.remodal-is-closing,
.remodal.remodal-is-opening {
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards
}
.remodal.remodal-is-opening {
    -webkit-animation-name: remodal-opening-keyframes;
    animation-name: remodal-opening-keyframes
}
.remodal.remodal-is-closing {
    -webkit-animation-name: remodal-closing-keyframes;
    animation-name: remodal-closing-keyframes
}
.remodal-close {
    position: absolute;
    right: 0;
    bottom: 110%;
    display: block;
    overflow: visible;
    width: 17px;
    height: 17px;
    margin: 0;
    padding: 0;
    cursor: pointer;
    transition: color 0.2s;
    text-decoration: none;
    color: #fff;
    border: 0;
    outline: 0;
    background: 0 0
}
@media (min-width:769px) {
    .remodal-close {
        width: 34px;
        height: 34px;
        bottom: 108%;
        transition: 0.2s ease
    }
    .remodal-close:focus,
    .remodal-close:hover {
        opacity: .7
    }
}
.remodal-close:before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 17px;
    height: 17px;
    background: url('/assets/images/live/modalclose.png') no-repeat;
    content: '';
    text-align: center
}
.Opta .has_match_link,
.container,
sub,
sup {
    position: relative
}
@media (max-width:768px) {
    .remodal-close:before {
        background-size: 17px 17px
    }
}
@media (min-width:769px) {
    .remodal-close:before {
        width: 34px;
        height: 34px
    }
}
.remodal-cancel,
.remodal-confirm {
    font: inherit;
    display: inline-block;
    overflow: visible;
    min-width: 110px;
    margin: 0;
    padding: 12px 0;
    cursor: pointer;
    transition: background 0.2s;
    text-align: center;
    vertical-align: middle;
    text-decoration: none;
    border: 0;
    outline: 0
}
.clearfix:after,
article,
aside,
details,
figure,
footer,
header,
hr,
nav,
section,
summary {
    display: block
}
a,
hr {
    padding: 0
}
.remodal-confirm {
    color: #fff;
    background: #81c784
}
.remodal-confirm:focus,
.remodal-confirm:hover {
    background: #66bb6a
}
.remodal-cancel {
    color: #fff;
    background: #e57373
}
.remodal-cancel:focus,
.remodal-cancel:hover {
    background: #ef5350
}
.remodal-cancel::-moz-focus-inner,
.remodal-close::-moz-focus-inner,
.remodal-confirm::-moz-focus-inner {
    padding: 0;
    border: 0
}
@-webkit-keyframes remodal-opening-keyframes {
    from {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
        opacity: 0
    }
    to {
        -webkit-transform: none;
        transform: none;
        opacity: 1;
        -webkit-filter:blur(0);
        filter:blur(0)
    }
}
@keyframes remodal-opening-keyframes {
    from {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
        opacity: 0
    }
    to {
        -webkit-transform: none;
        transform: none;
        opacity: 1;
        -webkit-filter:blur(0);
        filter:blur(0)
    }
}
@-webkit-keyframes remodal-closing-keyframes {
    from {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1
    }
    to {
        -webkit-transform: scale(0.95);
        transform: scale(0.95);
        opacity: 0;
        -webkit-filter:blur(0);
        filter:blur(0)
    }
}
@keyframes remodal-closing-keyframes {
    from {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1
    }
    to {
        -webkit-transform: scale(0.95);
        transform: scale(0.95);
        opacity: 0;
        -webkit-filter:blur(0);
        filter:blur(0)
    }
}
@-webkit-keyframes remodal-overlay-opening-keyframes {
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
}
@keyframes remodal-overlay-opening-keyframes {
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
}
@-webkit-keyframes remodal-overlay-closing-keyframes {
    from {
        opacity: 1
    }
    to {
        opacity: 0
    }
}
@keyframes remodal-overlay-closing-keyframes {
    from {
        opacity: 1
    }
    to {
        opacity: 0
    }
}
.Opta .has_match_link:hover,
.hasLinkJs:hover {
    opacity: .7
}
@media only screen and (min-width:641px) {
    .remodal {
        max-width: 850px
    }
}
.lt-ie9 .remodal-overlay {
    background: #2b2e38
}
.text-hide,
label option[selected],
label:focus,
select option[selected],
select:focus {
    background-color: transparent
}
.lt-ie9 .remodal {
    width: 700px
}
abbr,
address,
article,
aside,
audio,
b,
blockquote,
body,
body div,
caption,
cite,
code,
dd,
del,
details,
dfn,
dl,
dt,
em,
fieldset,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
p,
pre,
q,
samp,
section,
small,
span,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
ul,
var,
video {
    margin: 0;
    padding: 0;
    font-size: 100%;
    font-style: normal;
    vertical-align: baseline;
    border: 0;
    background: 0 0
}
input[type=checkbox],
th {
    vertical-align: bottom
}
embed,
img,
object {
    max-width: 100%
}
html {
    overflow-y: scroll
}
blockquote,
q {
    quotes: none
}
blockquote:after,
blockquote:before,
q:after,
q:before {
    content: '';
    content: none
}
a {
    margin: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: 0 0
}
del {
    text-decoration: line-through
}
abbr[title],
dfn[title] {
    cursor: help;
    border-bottom: 1px dotted #000
}
th {
    font-weight: 700
}
td {
    font-weight: 400;
    vertical-align: top
}
hr {
    height: 1px;
    margin: 1em 0;
    border: 0;
    border-top: 1px solid #ccc
}
pre {
    white-space: pre;
    white-space: pre-wrap;
    white-space: pre-line;
    word-wrap: break-word
}
input[type=radio] {
    vertical-align: text-bottom
}
.ie7 input[type=checkbox] {
    vertical-align: baseline
}
.ie6 input {
    vertical-align: text-bottom
}
input,
select,
textarea {
    font: 99% sans-serif
}
table {
    border-spacing: 0;
    border-collapse: separate;
    font: 100%;
    font-size: inherit
}
small {
    font-size: 85%
}
strong {
    font-weight: 700
}
td,
td img {
    vertical-align: top
}
sub,
sup {
    font-size: 75%;
    line-height: 0
}
sup {
    top: -0.5em
}
sub {
    bottom: -0.25em
}
code,
kbd,
pre,
samp {
    font-family: monospace, sans-serif
}
.clickable,
button,
input[type=button],
input[type=file],
input[type=submit],
label {
    cursor: pointer
}
button,
input,
select,
textarea {
    margin: 0
}
button,
input[type=button] {
    overflow: visible;
    width: auto
}
#dfp_banner iframe a,
.l-header {
    width: 100%
}
.ie7 img {
    -ms-interpolation-mode: bicubic
}
.clearfix:after,
.clearfix:before {
    content: "\0020";
    display: block;
    overflow: hidden;
    height: 0
}
.clearfix:after,
.l-header .header-nav__item a::after,
.md-button a span::after {
    content: ''
}
.clearfix {
    zoom: 1
}
.hide {
    display: none !important
}
.show {
    display: block !important
}
.center-block {
    display: block;
    margin-right: auto;
    margin-left: auto
}
.bold {
    font-weight: 700 !important
}
.regular {
    font-weight: 400 !important
}
.text-left {
    text-align: left !important
}
.text-center {
    text-align: center !important
}
.text-right {
    text-align: right !important
}
.text-justify {
    text-align: justify !important;
    text-justify: inter-ideograph !important
}
.text-hide {
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    border: 0
}
#index .commentaly__live-label i,
#japan .player-profile__position,
#live .live__label span,
.l-live__label i {
    font-style: italic
}
.float-left {
    float: left !important
}
.float-right {
    float: right !important
}
.float-none {
    float: none !important
}
.valign-top {
    vertical-align: top !important
}
.valign-middle {
    vertical-align: middle !important
}
.valign-baseline {
    vertical-align: baseline !important
}
.valign-bottom {
    vertical-align: bottom !important
}
.visible {
    overflow: visible !important
}
.hidden {
    overflow: hidden !important
}
.scroll {
    overflow: scroll !important
}
.auto {
    overflow: auto !important
}
.invisible {
    visibility: hidden !important
}
.no-select {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}
:after,
:before {
    box-sizing: inherit
}
body {
    font-family: Helvetica, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
    color: #333;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}
@media (max-width:768px) {
    .pc-only {
        display: none !important
    }
    .common-sp-padding {
        padding: 0 16% 0 5.33333%
    }
}
.common-inner-wrap {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 100px
}
@media (max-width:768px) {
    .common-inner-wrap {
        padding: 0
    }
}
.container {
    max-width: 1000px;
    padding: 0 8px;
    margin-right: auto;
    margin-left: auto
}
@media (min-width:769px) {
    .sp-only {
        display: none !important
    }
    .container {
        padding: 0 15px
    }
}
a {
    text-decoration: none;
    color: inherit;
    outline: 0
}
img {
    max-width: 100%;
    height: auto;
    vertical-align: bottom
}
button,
input,
select,
textarea {
    padding: 0;
    border: none;
    border-radius: 0;
    outline: 0;
    background: 0 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}
label,
select {
    margin: 0;
    padding: 0;
    font-size: inherit;
    cursor: pointer;
    vertical-align: middle;
    color: inherit;
    border: 0;
    border-radius: 0;
    background: 0 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}
label:focus,
select:focus {
    outline: 0
}
select::-ms-expand {
    display: none
}
input::-ms-clear {
    visibility: hidden
}
input::-ms-reveal {
    visibility: hidden
}
.admin-bar #header {
    top: 32px
}
@media screen and (max-width:782px) {
    .admin-bar #header {
        top: 0
    }
}
.no-relation {
    padding: 20px 8px;
    font-size: 10px
}
@media (min-width:769px) {
    .no-relation {
        padding: 0;
        font-size: 16px
    }
}
.Opta h2 {
    background-color: #e60012
}
.Opta > .Opta_W {
    margin-top: 0
}
.Opta__wrapper {
    max-width: 635px;
    margin: 0 auto
}
.Opta__wrapper .md-button,
.Opta__wrapper .md-more-text-link {
    margin-top: 20px
}
.Opta .has_match_link:after,
.hasLinkJs td:last-of-type:after {
    content: ">";
    right: 10px;
    margin: auto;
    top: 0;
    bottom: 0
}
.Opta__hline {
    font-size: 16px;
    padding-left: 10px
}
.Opta .has_match_link:after {
    position: absolute;
    height: 1em;
    line-height: 1
}
.Opta .has_match_link a {
    display: block;
    color: inherit;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    font-size: 14px
}
.Opta .has_match_link a span {
    font-size: 14px
}
.Opta abbr[title],
.Opta dfn[title] {
    cursor: default;
    border: none
}
.Opta-Live span.Opta-Live {
    width: 24%;
    max-width: 60px;
}
@media (min-width:769px) {
    .Opta-Live span.Opta-Live {
        width: 7%;
    }
}
.Opta .Opta-Dropdown>.Opta-Nav ul {
    border:0 ;
}
.daylive_pc { display: block; }
.daylive_sp { display: none; }
@media only screen and (max-width: 416px) {
  .daylive_pc { display: none; }
  .daylive_sp { display: block; }
}
#japan .players .players-slide .button:hover,
#live .live .live-main .timeline__more:hover,
#live .live .tabs .tab:hover,
.hasLinkJs,
.l-header .page-share__icon:hover,
.md-scroll-y-articles .button:hover,
.md-scroll-y-articles_sp .button:hover {
    cursor: pointer
}
.hasLinkJs {
    transition: opacity 0.2s
}
.hasLinkJs td:last-of-type {
    position: relative
}
.hasLinkJs td:last-of-type:after {
    position: absolute;
    height: 1em;
    line-height: 1;
    font-weight: 700
}
#dfp_banner iframe {
    max-width: 100%
}
.widget .description-text {
    color: #000;
    font-size: 11px;
    margin-top: 20px;
    margin-bottom: 5px;
    text-align: right
}
.widget .widget-inner {
    background: #fff
}
.l-header {
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9
}
.l-header .page-title-wrapper {
    height: 56px;
    background: #e60012;
    position: relative
}
@media (min-width:769px) {
    .widget .description-text {
        font-size: 12px
    }
    .l-header .page-title-wrapper {
        height: 96px
    }
}
.l-header .page-title {
    width: 60%;
    height: 36px;
    background: url('/sports/rugby/2019/assets/images/common/header/page_title_pc.png') no-repeat;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    z-index: 1
}
@media (max-width:768px) {
    .l-header .page-title {
        background: url('/sports/rugby/2019/assets/images/common/header/page_title.png') center no-repeat;
        background-size: contain
    }
}
@media (min-width:769px) {
    .l-header .page-title {
        width: 490px;
        height: 26px;
        background-size: contain
    }
}
.l-header .page-title a {
    display: block;
    height: 100%
}
.l-header .page-logo {
    position: absolute;
    top: 23px;
    left: 8px;
    z-index: 1
}
.l-header .page-logo a {
    display: block;
    width: 50px;
    height: 11px;
    background: url('/sports/rugby/2019/assets/images/common/header/logo_yomiuri.png') no-repeat
}
@media (max-width:768px) {
    .l-header .page-logo a {
        background-size: 50px 11px
    }
}
@media (min-width:769px) {
    .l-header .page-logo {
        top: 38%;
        left: 15px
    }
    .l-header .page-logo a {
        width: 101px;
        height: 22px;
        background-image: url('/sports/rugby/2019/assets/images/common/header/logo_yomiuri_pc.png');
        transition: 0.2s ease
    }
    .l-header .page-logo a:hover {
        opacity: .7
    }
}
.l-header .page-share {
    position: absolute;
    top: 5px;
    right: 8px;
    z-index: 1;
    display: -webkit-box;
    display: flex
}
.l-header .page-share__icon {
    width: 24px;
    height: 20px;
    background: url('/sports/rugby/2019/assets/images/common/header/share_image.png') no-repeat;
    background-size: contain
}
.l-header .header-nav {
    border-bottom: solid 1px #e60012;
    overflow: hidden
}
@media (max-width:768px) {
    .l-header .page-share__icon {
        background-size: 24px 20px
    }
    .l-header .header-nav {
        background-size: cover
    }
}
.l-header .header-nav__list {
    margin-right: auto;
    margin-left: auto;
    padding: 5px;
    text-align: center
}
@media (min-width:769px) {
    .l-header .page-share {
        top: 10px;
        right: 15px
    }
    .l-header .page-share__icon {
        width: 47px;
        height: 40px;
        background-image: url('/sports/rugby/2019/assets/images/common/header/share_image_pc.png');
        transition: 0.2s ease
    }
    .l-header .page-share__icon:hover {
        opacity: .7
    }
    .l-header .header-nav {
        height: 50px;
        box-shadow: 0 4px 4px -5px rgba(0, 0, 0, .4) inset
    }
    .l-header .header-nav__list {
        display: -webkit-box;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        max-width: 900px;
        padding: 0
    }
}
.l-header .header-nav__item {
    line-height: 25px;
    margin: 0 20px;
    display: inline-block
}
.l-header .header-nav__item a {
    display: inline-block;
    font-size: 12px;
    color: #e60012;
    position: relative;
    z-index: 1;
    padding: 0 11px
}
.l-header .header-nav__item a::after {
    display: block;
    width: calc(100% + 10px);
    height: 4px;
    background-color: #e60012;
    border-radius: 3px;
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: -5px;
    z-index: -1
}
@media (max-width:374px) {
    .l-header .header-nav__item a::after {
        width: calc(100% + 4px);
        left: -2px
    }
}
@media (min-width:769px) {
    .l-header .header-nav__item {
        line-height: 48px;
        margin: 0 19px;
    }
    .l-header .header-nav__item a {
        font-size: 13px;
        font-weight: 400;
        padding: 2px 0 0
    }
    .l-header .header-nav__item a::after {
        /* width: calc(100% + 30px);
        border-radius: 5px; */
        transition: 0.2s ease;
        /* bottom: -7px;
        left: -15px */
    }
    .l-header .header-nav__item a:hover {
        /* color: #fff;
        border-bottom: 3px solid red; */
    }
    .l-header .header-nav__item a:hover::after,
    .l-header .header-nav__item a.current::after{
        opacity: 1;
    }
}
.l-header .header-nav__item span {
    display: inline-block;
    font-size: 8px;
    color: #fff;
    position: relative;
    z-index: 1;
    opacity: .5
}
@media (min-width:769px) {
    .l-header .header-nav__item span {
        font-size: 18px;
        padding-top: 2px
    }
}
.l-header .header-nav__item.is-current a:after {
    opacity: .4
}
.page-title-wrapper {
    position: relative;
    z-index: 3
}
#menu,
.share-button-wrap {
    position: absolute;
    right: 20px
}
.share-button-wrap {
    z-index: 2;
    transition: top 0.5s
}
.share-button-wrap .container {
    text-align: center;
    padding: 8px 0
}
@media (min-width:769px) {
    .share-button-wrap .container {
        padding: 33px 0
    }
}
.share-button-wrap ul {
    display: inline-block;
    vertical-align: middle;
    color: #fff
}
.share-button-wrap ul li {
    display: inline-block;
    vertical-align: middle;
    padding: 0 2px
}
#menu,
.share-button-wrap ul li a {
    display: block
}
.share-button-wrap ul li a span {
    display: block;
    width: 22px;
    height: 22px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover
}
.share-button-wrap ul li a span.icon-facebook {
    background-image: url('/sports/rugby/2019/assets/images/common/icons/ico_fb.png')
}
.share-button-wrap ul li a span.icon-twitter {
    background-image: url('/sports/rugby/2019/assets/images/common/icons/ico_tw.png')
}
.share-button-wrap ul li a span.icon-line {
    background-image: url('/sports/rugby/2019/assets/images/common/icons/ico_ln.png')
}
@media (min-width:769px) {
    .share-button-wrap ul li {
        padding: 0 4px
    }
    .share-button-wrap ul li a span {
        width: 30px;
        height: 30px;
        transition: 0.2s ease
    }
    .share-button-wrap ul li a span:hover {
        opacity: .7
    }
}
#menu {
    width: 30px;
    height: 30px;
    padding: 6px 0 0 8px;
    top: 13px;
    z-index: 9997;
    transition: all 0.4s
}
.menu-trigger,
.menu-trigger span {
    display: inline-block;
    transition: all 0.4s;
    box-sizing: border-box
}
.menu-trigger {
    position: relative;
    width: 25px;
    height: 19px
}
.menu-trigger span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #fff;
    border-radius: 2px
}
.menu-trigger span:nth-of-type(1) {
    top: 0
}
.menu-trigger.active {
    z-index: 9999;
    position: fixed
}
.menu-trigger.active span:nth-of-type(1) {
    -webkit-transform: translateY(7px) rotate(-45deg);
    transform: translateY(7px) rotate(-45deg)
}
.menu-trigger span:nth-of-type(2) {
    top: 8px
}
.menu-trigger.active span:nth-of-type(2) {
    opacity: 0
}
.menu-trigger span:nth-of-type(3) {
    bottom: 0
}
.menu-trigger.active span:nth-of-type(3) {
    -webkit-transform: translateY(-9px) rotate(45deg);
    transform: translateY(-9px) rotate(45deg)
}
.g-nav.on {
    right: 0;
    box-shadow: -4px 0 3px rgba(150, 150, 150, .1)
}
.g-nav {
    position: fixed;
    right: -100%;
    top: 0;
    transition: 0.2s all;
    background: #e60012;
    height: 110%;
    width: 100%;
    padding: 50px 20px 0 25px;
    z-index: 3;
    line-height: 120%
}
.g-nav__list {
    text-align: center
}
.g-nav__item {
    margin-top: 1em
}
.g-nav__item a {
    display: block;
    color: #fff;
    font-size: 16px;
    line-height: 1.4
}
.g-nav .item-anchor {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 3px;
    border-bottom: solid 1px #fff
}
.g-nav__sns {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin-top: 20px
}
.g-nav__sns li:nth-child(2) {
    margin-left: 0.4em;
    margin-right: 0.4em
}
.g-nav__sns li a {
    display: block
}
.g-nav__sns span {
    display: block;
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover
}
.g-nav__sns span.icon-facebook {
    background-image: url('/sports/rugby/2019/assets/images/common/icons/ico_fb.png')
}
.g-nav__sns span.icon-twitter {
    background-image: url('/sports/rugby/2019/assets/images/common/icons/ico_tw.png')
}
.g-nav__sns span.icon-line {
    background-image: url('/sports/rugby/2019/assets/images/common/icons/ico_ln.png')
}
@media (min-width:769px) {
    .g-nav__sns span {
        width: 32px;
        height: 32px;
        transition: 0.2s ease
    }
    .g-nav__sns span:hover {
        opacity: .7
    }
    .l-ad-jumbotron {
        padding: 24px 0;
        border-bottom: 1px solid #e5e5e5
    }
}
.l-main {
    padding-bottom: 40px;
    font-size: 0
}
@media (min-width:769px) {
    .l-main {
        padding-bottom: 110px
    }
    .l-column-wrapper {
        display: -webkit-box;
        display: flex;
        max-width: 1000px;
        padding: 65px 15px 0;
        margin-right: auto;
        margin-left: auto
    }
    .l-side-column {
        -webkit-box-ordinal-group: 3;
        order: 2;
        width: 300px
    }
    .l-main-column {
        -webkit-box-ordinal-group: 2;
        order: 1;
        -webkit-box-flex: 1;
        flex: 1;
        padding-right: 60px
    }
}
.l-live > a,
.l-live > span {
    display: block;
    background-color: #000;
    padding: 15px 0;
    position: relative
}
.l-live__title {
    font-weight: 700;
    font-size: 13px;
    color: #fff;
    text-align: center
}
@media (min-width:769px) {
    .l-live > a,
    .l-live > span {
        padding: 30px 0;
        transition: 0.2s ease
    }
    .l-live > a:hover,
    .l-live > span:hover {
        opacity: .9
    }
    .l-live > span:hover {
        opacity: 1
    }
    .l-live__title {
        font-size: 26px
    }
}
.l-live__title span {
    display: block;
    font-weight: 400;
    font-size: 9px
}
@media (min-width:769px) {
    .l-live__title span {
        font-size: 19px
    }
}
#index .commentaly__live-label,
.l-live__label {
    width: 34px;
    font-size: 7px;
    color: red;
    text-align: center;
    border: 1px solid red;
    padding: 2px 0;
    position: absolute;
    top: 17px;
    right: 8px;
    z-index: 1
}
@media (min-width:769px) {
    #index .commentaly__live-label,
    .l-live__label {
        width: 64px;
        font-size: 14px;
        padding: 6px 0;
        top: 35px;
        right: 25px
    }
}
.l-live__link-text {
    width: 72px;
    height: 9px;
    background: url('/assets/images/common/modules/live_link_text.png') no-repeat;
    position: absolute;
    right: 8px;
    bottom: 8px;
    z-index: 1
}
@media (max-width:768px) {
    .l-live__link-text {
        background-size: 72px 9px
    }
}
@media (min-width:769px) {
    .l-live__link-text {
        width: 144px;
        height: 17px;
        background-image: url('/assets/images/common/modules/live_link_text_pc.png');
        right: 25px;
        bottom: 15px
    }
}
.l-footer {
    background-color: #e60012;
    padding: 13px 0 12px
}
.l-footer .footer-logo {
    width: 75px;
    height: 16px;
    background: url('/sports/rugby/2019/assets/images/common/footer/logo_footer.png') no-repeat;
    margin-bottom: 10px;
    background-size: contain
}
.l-footer .copyright {
    text-align: center;
    line-height: 1
}
.l-footer .copyright small {
    font-family: "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
    font-size: 12px;
    color: #fff
}
@media (min-width:769px) {
    .l-footer .footer-logo {
        width: 101px;
        height: 22px
    }
    .l-footer .copyright small {
        font-size: 12px
    }
}
#floating-wrap {
    text-align: center;
    position: fixed;
    width: 100%;
    bottom: 0;
    overflow: hidden;
    z-index: 100
}
#floating-wrap #dfp_overlay {
    margin-bottom: 20px
}
.md-side-header {
    font-weight: 100;
    font-size: 16px;
    line-height: 1;
    margin-bottom: 8px
}
@media (max-width:768px) {
    .md-side-header {
        padding: 0 8px
    }
}
@media (min-width:769px) {
    .md-side-header {
        font-size: 22px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 15px;
        margin-bottom: 20px
    }
}
.md-button {
    text-align: center
}
.md-button a {
    display: block;
    font-size: 14px;
    border-radius: 3px;
    padding: 12px 0
}
@media (min-width:769px) {
    .md-button a {
        font-size: 16px;
        padding: 18px 0;
        transition: 0.2s ease
    }
}
.md-button a span {
    display: inline-block;
    padding-right: 12px;
    position: relative
}
.md-button a span::after {
    display: block;
    width: 6px;
    height: 6px;
    border-width: 2px 2px 0 0;
    border-style: solid;
    border-color: inherit;
    margin-top: -3px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 1
}
.md-button--color_white a {
    color: #666;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(102, 102, 102, .4)
}
.md-button--color_navy a {
    color: #fff;
    background-color: #e60012
}
.md-button--color_navy-inverted a {
    color: #e60012;
    background-color: #fff;
    border: 1px solid #e60012
}
.md-button--color_transparent a {
    color: #fff;
    background-color: transparent;
    border: 1px solid #fff
}
@media (min-width:769px) {
    .md-button a span {
        padding-right: 20px
    }
    .md-button a span::after {
        width: 8px;
        height: 8px;
        margin-top: -4px
    }
    .md-button a:hover {
        opacity: .7
    }
    .md-button--back a {
        border-width: 2px
    }
}
.md-button--back a span {
    padding-left: 12px;
    padding-right: 0
}
@media (min-width:769px) {
    .md-button--back a span {
        padding-left: 26px
    }
}
.md-button--back a span::after {
    border-width: 0 0 2px 2px;
    right: auto;
    left: 0
}
.md-more-text-link {
    border: 1px solid #dcdcdc;
    height: 43px
}
.md-more-text-link a {
    font-weight: 700;
    font-size: 14px;
    color: #e60012;
    display: block;
    height: 43px;
    position: relative;
    transition: 0.2s ease;
    margin: -1px
}
.md-more-text-link a span {
    line-height: 43px;
    padding-left: 1em
}
.md-more-text-link a::before {
    content: '▶︎';
    right: 10px;
    position: absolute;
    line-height: 43px;
    font-size: 22px
}
.md-more-text-link a:hover {
    text-decoration: none;
    background-color: #e60012;
    color: #fff;
    margin: -1px
}
.md-popular-keywords {
    padding-top: 18px
}
.md-popular-keywords__title {
    width: 95px;
    height: 13px;
    background: url('/sports/rugby/2019/assets/images/common/modules/popular_keywords.png') no-repeat;
    margin-bottom: 8px
}
@media (min-width:769px) {
    .md-popular-keywords .container {
        padding: 0
    }
    .md-popular-keywords__title {
        width: 100%;
        height: 43px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px
    }
}
@media (max-width:768px) {
    .md-popular-keywords__title {
        background-size: 95px 13px
    }
    .md-popular-keywords__words {
        background-color: #f7f7f7;
        padding: 10px 5px
    }
}
.md-popular-keywords__list {
    letter-spacing: -0.4em;
    margin-bottom: -7px
}
@media (min-width:769px) {
    .md-popular-keywords__list {
        margin-right: -6px;
        margin-bottom: -14px;
        margin-left: -6px
    }
}
.md-popular-keywords__item {
    display: inline-block;
    vertical-align: middle;
    letter-spacing: normal;
    margin: 0 3px 7px
}
.md-popular-keywords__item a {
    display: block;
    font-size: 10px;
    background-color: #fff;
    border: 1px solid #d4d4d4;
    border-radius: 20px;
    padding: 3px 12px
}
@media (min-width:769px) {
    .md-popular-keywords__item {
        margin: 0 6px 14px
    }
    .md-popular-keywords__item a {
        font-size: 16px;
        padding: 6px 24px;
        transition: 0.2s ease
    }
    .md-popular-keywords__item a:hover {
        opacity: .7
    }
}
#japan .players .players-slide,
.md-scroll-y-articles,
.md-scroll-y-articles_sp {
    position: relative
}
@media (max-width:768px) {
    #japan .players .players-slide,
    .md-scroll-y-articles,
    .md-scroll-y-articles_sp {
        background-color: #f7f7f7
    }
    #japan .players .players-slide__list,
    .md-scroll-y-articles__list,
    .ruleslist__list_sp {
        padding: 0 8px
    }
}
#japan .players .players-slide .button,
.md-scroll-y-articles .button,
.md-scroll-y-articles_sp .button {
    width: 25px;
    height: 38px;
    background-color: rgba(255, 255, 255, .55);
    position: absolute;
    top: 30%;
    z-index: 1
}
#japan .players .players-slide .button::after,
.md-scroll-y-articles .button::after,
.md-scroll-y-articles_sp .button::after {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-style: solid;
    border-color: #e60012;
    margin: -3px auto 0;
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    z-index: 1
}
#japan .players .players-slide .button--prev,
.md-scroll-y-articles .button--prev,
.md-scroll-y-articles_sp .button--prev_rules {
    border-radius: 0 4px 4px 0;
    left: 0
}
#japan .players .players-slide .button--prev::after,
.md-scroll-y-articles .button--prev::after,
.md-scroll-y-articles_sp .button--prev_rules::after {
    border-width: 0 0 2px 2px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
}
#japan .players .players-slide .button--next,
.md-scroll-y-articles .button--next,
.md-scroll-y-articles_sp .button--next_rules {
    border-radius: 4px 0 0 4px;
    right: 0
}
#japan .players .players-slide .button--next::after,
.md-scroll-y-articles .button--next::after,
.md-scroll-y-articles_sp .button--next_rules::after {
    border-width: 2px 2px 0 0;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
}
#japan .players .players-slide__list,
.md-scroll-y-articles__list,
.ruleslist__list_sp {
    max-width: 1000px;
    letter-spacing: -0.4em;
    margin-right: auto;
    margin-left: auto
}
#japan .players .players-slide__list:after,
.md-scroll-y-articles__list:after,
.ruleslist__list_sp:after {
    content: 'flickity';
    display: none
}
@media (min-width:769px) {
    #japan .players .players-slide .button,
    .md-scroll-y-articles .button,
    .md-scroll-y-articles_sp .button {
        display: none
    }
    #japan .players .players-slide__list,
    .md-scroll-y-articles__list {
        margin-bottom: 20px
    }
    #japan .players .players-slide__list:after,
    .md-scroll-y-articles__list:after,
    .ruleslist__list_sp:after {
        content: ''
    }
    #japan .players .players-slide__item > a,
    .md-scroll-y-articles__item > a,
    .ruleslist__item_sp > a {
        transition: 0.2s ease
    }
}
#japan .players .players-slide__item,
.md-scroll-y-articles__item,
.ruleslist__item_sp {
    letter-spacing: normal;
    width: 303px
}
@media (max-width:768px) {
    #japan .players .players-slide__item,
    .md-scroll-y-articles__item,
    .ruleslist__item_sp {
        display: inline-block;
        vertical-align: middle;
        width: 134px;
        margin-right: 8px;
        padding-top: 8px;
        padding-bottom: 10px
    }
    #japan .players .players-slide__thumb,
    .md-scroll-y-articles__thumb,
    .ruleslist__thumb_sp {
        margin-bottom: 5px
    }
    .md-scroll-y-articles__thumb img{
        width: 134px;
        height: 134px;
        object-fit: cover;
    }
}
@media (min-width:769px) {
    .md-scroll-y-articles__thumb img{
        width: 106px;
        height: 106px;
        object-fit: cover;
    }
}
#japan .players .players-slide__item > a,
.md-scroll-y-articles__item > a,
.ruleslist__item_sp > article a {
    display: block
}
@media (min-width:769px) {
    #japan .players .players-slide__item > a article,
    .md-scroll-y-articles__item > a article {
        display: -webkit-box;
        display: flex;
        position: relative
    }
    #japan .players .players-slide__item > a:hover,
    .md-scroll-y-articles__item > a:hover {
        opacity: .7
    }
}
#japan .players .players-slide__item > article,
.md-scroll-y-articles__item > article,
.ruleslist__item_sp > article {
    display: block
}
@media (min-width:769px) {
    #japan .players .players-slide__item > article,
    .md-scroll-y-articles__item > article {
        transition: 0.2s ease;
        display: -webkit-box;
        display: flex
    }
    #japan .players .players-slide__item > article a,
    .md-scroll-y-articles__item > article a {
        transition: 0.2s ease
    }
}
#japan .players .players-slide__item > article a,
.md-scroll-y-articles__item > article a,
.ruleslist__item_sp > article a {
    display: block
}
#japan .players .players-slide__item:last-child,
.md-scroll-y-articles__item:last-child {
    margin-right: 0
}
.md-scroll-y-articles__title {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.3888888;
    margin-bottom: 5px;
    word-break: break-all
}
@media (max-width:769px) {
    .ruleslist__textwrap_sp .title {
        font-weight: 400;
        font-size: 12px;
        line-height: 1.3888888;
        margin-bottom: 5px;
        word-break: break-all
    }
}
@media (min-width:769px) {
    #japan .players .players-slide__item > article a:hover,
    .md-scroll-y-articles__item > article a:hover {
        opacity: .7
    }
    #japan .players .md-scroll-y-articles__item+.players-slide__item,
    #japan .players .players-slide__item+.md-scroll-y-articles__item,
    #japan .players .players-slide__item+.players-slide__item,
    .md-scroll-y-articles__item+.md-scroll-y-articles__item {
        margin-top: 8px
    }
    #japan .players .players-slide__thumb{
        width: 106px
    }
    #japan .players .players-slide__text-wrapper,
    .md-scroll-y-articles__text-wrapper {
        width: calc(100% - 106px);
        padding-left: 13px
    }
    .md-scroll-y-articles__title {
        font-size: 16px;
        margin-bottom: 15px
    }
}
.md-scroll-y-articles__date {
    font-size: 10px;
    color: #999
}
.m_news-list-tag-array {
    margin-top: 5px;
    margin-bottom: 5px
}
@media (min-width:769px) {
    .md-scroll-y-articles__date {
        font-size: 14px
    }
    .m_news-list-tag-array {
        margin-top: 5px;
        margin-bottom: 5px
    }
}
.m_news-list-tag-array .md-popular-keywords__item {
    margin: 0 3px 5px 0
}
.m_news-list-tag-array .md-popular-keywords__item a {
    line-height: 1;
    font-size: 10px;
    padding: 5px 6px
}
@media (min-width:769px) {
    .m_news-list-tag-array .md-popular-keywords__item {
        margin: 0 5px 5px 0
    }
    .m_news-list-tag-array .md-popular-keywords__item a {
        padding: 4px 6px;
        font-size: 11px
    }
}
#index .index-section-header {
    font-weight: 700;
    font-size: 12px;
    color: #fff;
    background-color: #e60012;
    box-shadow: inset -180px 0 180px -140px #000
}
#index .index-section-header > a {
    display: block;
    padding: 8px
}
#index .index-section-header > a span {
    display: block;
    position: relative
}
#index .index-section-header > a span::after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-width: 2px 2px 0 0;
    border-style: solid;
    border-color: #fff #fff transparent transparent;
    margin-top: -4px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 1
}
@media (min-width:769px) {
    #index .index-section-header {
        font-size: 22px
    }
    #index .index-section-header > a {
        padding: 10px 13px
    }
    #index .index-section-header > a span::after {
        right: 10px;
        width: 10px;
        height: 10px;
        margin-top: -6px
    }
}
#index .index-section-header > span {
    display: block;
    padding: 8px
}
#index .index-section-header > span span {
    display: block;
    position: relative
}
#index .latest {
    margin-bottom: 15px
}
#index .latest__header {
    font-size: 22px;
    color: #e60012;
    margin-bottom: 10px;
    font-weight: 700
}
#index .voice-wrapper {
    position: relative;
    font-size: 14px;
    width: 100%;
    border-top: 0;
    margin-bottom: 20px;
}
#index .voice-wrapper > a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
#index #voice-container {
    width: 100%;
    margin: 0 auto 20px;
    /*~09.19*/
    max-width: 1000px;
    /*max-width: 550px;*/
    overflow: hidden;
    display: block;
    padding: 10px 8px 0 8px;
}
#index .voice-header {
    background-color: #E60112;
    color: #fff;
    padding: 4px 10px 4px;
    display: flex;
}
#index .voice-contents-wrapper {
    height: 100%;
    border: dotted 1.5px #b9afaf;
    border-top: 0;
}
#index .voice-contents {
    display: flex;
    padding-bottom: 15px;
}
#index .voice-triangle {
    position: absolute;
    z-index: 0;
    background-color: #F0EDED;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 9px;
    margin: 0 2px 2px 2px;
    bottom: 0;
    left: 0;
    right: 0;
}
#index .voice-triangle a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-indent: -999px;
    z-index: 2;
    text-decoration: none;
}
#index .voice-triangle div {
    width: 0;
    height: 0;
    border-top: 7px solid #E60012;
    border-right: 8px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 8px solid transparent;
}
#index .voice-title {
    width: 80%;       
}
@media (min-width:769px) {
    #index .voice-contents-wrapper {
        border-top: 0;
        border-bottom: 0;
        /*~09.19*/
        border-right: dotted 1.5px #b9afaf;
        border-left: dotted 1.5px #b9afaf;
    }
    #index #voice-container {
        margin: 0 auto 40px;
        display: flex;
        /*~09.19*/
        border-bottom: dotted 1.5px #b9afaf;
        padding: 0;
    }
    #index .voice-triangle {
        padding-top: 10px;
        margin: 0 2px 1px 2px;
    }
    #index .voice-triangle div {
      border-top: 8px solid #E60012;
      border-right: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-left: 8px solid transparent;
    }
}
#index #voice-container img {
    width: 63px;
    margin: 15px;
    height: 100%;
}
#index .voice-list {
    word-wrap: break-word;
    padding: 12px;
}
@media (min-width:769px) {
  #index .voice-wrapper {
    margin-bottom: 0;
    /*~09.19*/
    width: 55%;
    /*width: 100%;*/
  }
  #index .voice-header {
      padding: 4px 12px 3.5px;
  }
  #index #voice-container img{
      width: 80px;
      margin: 20px;
      margin-right: 8px;
  }
  #index .voice-list {
      width: 100%;
  }
}
#index .opta-container {
    width: 100%;
    border: dotted 1.5px #b9af;
    border-top: 0;
}
#index .Opta ol, .Opta ul {
    padding-right: 2px;
}
@media (min-width:769px) {
    #index .opta-container {
        border: 0;
        width: 45%;
        border-right: dotted 1.5px #b9afaf;
    }
    #index .Opta ol, .Opta ul {
        border: 0;
        padding: 0;
    }
    #index .Opta .Opta-Nav {
        border: 0;
    }
}
#index .dazn_movie {
    font-size:12px;
    color:#fff;
    background-color: #484848;
    text-align: center;
    width:calc(100% + 16px);
    height:auto;
    margin-bottom: 60px;
    left:-8px;
    position: relative;
    padding: 0 8px 14px;
    display: none;
}
#index .dazn_movie_sp {
    font-size:12px;
    color:#fff;
    background-color: #484848;
    text-align: center;
    width:calc(100% + 8px);
    height:auto;
    margin-bottom: 60px;
    left:-8px;
    position: relative;
    padding: 0 7px 14px 15px;
    display: block;
    z-index: 0;
}
#index .dazn_movie p,
#index .dazn_movie_sp p {
    padding:10px 23px; 
}
#index .dazn_caption {
    background-color:#E60012; 
    width:100%;
    height:auto;
    margin-top: 11px;
    position: relative;
}
#index .dazn_caption a {
    position: absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    z-index: 999;
}
#index .dazn_caption .dazn_comments {
    padding: 10px 0 10px 10px;
    width: 90%;       
}
#index .dazn_caption .dazn_arrow {
    /*float:right;*/
    position: absolute;
    display:  inline-block;
    color: #fff;
    height: 55px;
    width: 10%;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 100%;
}
#index .dazn_caption .dazn_arrow::after {
    content:  '';
    width: 15px;
    height: 15px;
    display:  block;
    border-top: solid 2px;
    border-right: solid 2px;
    transform: rotate(45deg);
    position:  absolute;
    top: 3px;
    bottom:  0;
    left:  0;
    right:  0;
    margin:  auto;
}
@media (min-width:769px) {
    #index .dazn_movie {
        font-size:12px;
        color:#fff;
        background-color: #484848;
        text-align: center;
        width:calc(100% + 16px);
        height:auto;
        margin-bottom: 60px;
        left:-8px;
        position: relative;
        padding: 0 13px 14px;
        display: block;
    }
    #index .dazn_movie p {
        padding:10px 87px; 
    }
    #index .dazn_caption {
        margin-top: 10px;
        position: relative;
    }
    #index .dazn_caption .dazn_comments {
        padding: 10px 0;
        /*float:left;*/
        width: 100%;
        height:auto;
        /*position: absolute;
        margin:  auto;
        left: 0;
        right: 0;
        top: 0;
        bottom :0;*/
    }
    #index .dazn_movie_sp {
        font-size:12px;
        color:#fff;
        background-color: #484848;
        text-align: center;
        width:calc(100% + 16px);
        height:auto;
        margin-bottom: 60px;
        left:-8px;
        position: relative;
        padding: 0 13px 14px;
        display: none;
    }

}
@media (min-width:769px) {
    #index .index-section-header > span {
        padding: 10px 13px
    }
    #index .latest .latest-container {
        display: -webkit-box;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        max-width: 1000px;
        margin-right: auto;
        margin-left: auto;
        padding: 60px 15px
    }
    #index .latest .rules-container {
        padding: 0 15px 60px
    }
    #index .latest__header {
        margin-bottom: 30px;
        font-size: 21px
    }
    #index .rules_header {
        margin-top: 15px;
    }
    #index .latest .latest-list-wrapper {
        width: calc(100% - 340px);
        padding-right: 75px
    }
    #index .latest .latest-list-wrapper .container {
        padding: 0
    }
    #index .latest__list {
        margin-bottom: 20px
    }
}
#index .latest__header span {
    font-size: 34px;
    vertical-align: bottom
}
@media (max-width:768px) {
    #index .latest__list {
        padding: 8px 0 20px
    }
}
#index .commentaly__article-item,
#index .latest__item {
    margin-bottom: 4px
}
#index .commentaly__article-item > a,
#index .latest__item > a {
    display: block;
    position: relative
}
#index .commentaly__article-item > a article,
#index .latest__item > a article {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center
}
#index .commentaly__article-item > a::after,
#index .latest__item > a::after {
    content: '';
    display: block;
    width: calc(100% - 68px);
    height: 1px;
    border-bottom: 1px solid #dcdcdc;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1
}
#index .commentaly__article-item > article,
#index .latest__item > article {
    position: relative;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center
}
@media (min-width:769px) {
    #index .commentaly__article-item > a,
    #index .commentaly__article-item > article,
    #index .latest__item > a,
    #index .latest__item > article {
        transition: 0.2s ease
    }
    #index .commentaly__article-item > a::after,
    #index .latest__item > a::after {
        width: calc(100% - 86px - 15px);
        border-color: #e8e8e8
    }
    #index .commentaly__article-item > a:hover,
    #index .latest__item > a:hover {
        opacity: .7
    }
}
#index .commentaly__article-item > article::after,
#index .latest__item > article::after {
    content: '';
    display: block;
    width: calc(100% - 100px);
    height: 1px;
    border-bottom: 1px solid #dcdcdc;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1
}
#index .commentaly__article-item > article a,
#index .latest__item > article a {
    transition: 0.2s ease;
    display: block
}
@media (min-width:769px) {
    #index .commentaly__article-item > article::after,
    #index .latest__item > article::after {
        width: calc(100% - 86px - 15px);
        border-color: #e8e8e8
    }
    #index .commentaly__article-item > article a:hover,
    #index .latest__item > article a:hover {
        opacity: .7
    }
}
#index .commentaly__article-item:last-child,
#index .latest__item:last-child {
    margin-bottom: 0
}
#index .commentaly__article-item:last-child > a::after,
#index .latest__item:last-child > a::after {
    border-bottom: 0
}
#index .latest__thumb {
    padding-right: 10px
}
@media (min-width:769px) {
    #index .latest__thumb {
        padding-right: 15px
    }
    #index .latest__thumb img {
        width: 86px;
        height: 86px;
        object-fit: cover;
    }
}
@media (max-width:768px) {
    #index .latest__thumb img {
        width: 100px;
        height: 88.97px;
        object-fit: cover;
    }
}
#index .commentaly__article-text,
#index .latest__text {
    width: calc(100% - 68px);
    line-height: 1.333333;
    word-break: break-all;
    padding: 0 5px
}
#index .commentaly__article-text .title,
#index .latest__text .title {
    font-weight: 700;
    font-size: 17px;
    margin-bottom: 5px
}
@media (max-width:374px) {
    #index .commentaly__article-text .title,
    #index .latest__text .title {
        font-size: 15px
    }
}
@media (min-width:769px) {
    #index .commentaly__article-text,
    #index .latest__text {
        width: calc(100% - 86px - 15px)
    }
    #index .commentaly__article-text .title,
    #index .latest__text .title {
        font-size: 17px
    }
}
#index .commentaly__article-text .date,
#index .latest__text .date {
    font-size: 12px;
    color: #999
}
#index .latest__button {
    margin-bottom: 25px
}
@media (max-width:768px) {
    #index .latest .recommended-articles__header {
        padding: 0
    }
}
#index .ntv-ad {
    padding: 10px 0;
    position: relative;
}
#index .ntv-ad a {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
@media (min-width:769px) {
    #index .commentaly__article-text .date,
    #index .latest__text .date {
        font-size: 13px
    }
    #index .latest .recommended-articles {
        width: 340px
    }
    #index .ntv-ad {
        padding-top: 50px;
    }
    #index .latest .recommended-articles > .container {
        padding: 0
    }
    #index .latest .recommended-articles__header {
        font-size: 21px;
        color: #e60012;
        margin-bottom: 35px;
        font-weight: 700
    }
    #index .latest .recommended-articles__header span {
        font-size: 34px;
        vertical-align: bottom
    }
    #index .latest .recommended-articles #japan .players .md-scroll-y-articles__item+.players-slide__item,
    #index .latest .recommended-articles #japan .players .players-slide__item+.md-scroll-y-articles__item,
    #index .latest .recommended-articles #japan .players .players-slide__item+.players-slide__item,
    #index .latest .recommended-articles .md-scroll-y-articles__item+.md-scroll-y-articles__item,
    #japan .players #index .latest .recommended-articles .md-scroll-y-articles__item+.players-slide__item,
    #japan .players #index .latest .recommended-articles .players-slide__item+.md-scroll-y-articles__item,
    #japan .players #index .latest .recommended-articles .players-slide__item+.players-slide__item {
        width: 303px;
        margin-top: 10px
    }
    #index .latest .recommended-articles #japan .players .players-slide__item:nth-child(n+6),
    #index .latest .recommended-articles .md-scroll-y-articles__item:nth-child(n+6),
    #japan .players #index .latest .recommended-articles .players-slide__item:nth-child(n+6) {
        display: none
    }
    #index .latest .recommended-articles #japan .players .players-slide__thumb,
    #index .latest .recommended-articles .md-scroll-y-articles__thumb,
    #japan .players #index .latest .recommended-articles .players-slide__thumb {
        width: 142px
    }
    #index .latest .recommended-articles #japan .players .players-slide__text-wrapper,
    #index .latest .recommended-articles .md-scroll-y-articles__text-wrapper,
    #japan .players #index .latest .recommended-articles .players-slide__text-wrapper {
        width: calc(100% - 142px);
        padding-left: 13px
    }
}
@media (max-width:768px) {
    #index .report {
        margin-bottom: 20px
    }
}
@media (min-width:769px) {
    #index .report {
        background: url('/sports/rugby/2019/assets/images/index/report_bg.jpg') center no-repeat;
        background-size: cover;
        margin: 0 20px
    }
}
#index .report__header {
    width: 79px;
    height: 54px;
    background: url('/sports/rugby/2019/assets/images/index/report_header.png') center no-repeat;
    background-size: contain
}
#index .report .widget .widget-inner {
    border: 1px solid #fff;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, .27)
}
#index .report .widget .widget-inner+.widget-inner {
    margin-top: 20px
}
#index .commentaly {
    margin-bottom: 20px
}
@media (min-width:769px) {
    #index .report__header {
        width: 158px;
        height: 107px
    }
    #index .report .widget .widget-inner+.widget-inner {
        margin-top: 35px
    }
    #index .commentaly {
        background-color: #15161a;
        padding: 80px 0;
        margin-bottom: 0
    }
}
@media (max-width:768px) {
    #index .report__header {
        background-size: 160px 33px
    }
    #index .commentaly > .container {
        padding: 0
    }
    #index .commentaly .commentaly-container {
        background: url('/sports/rugby/2019/assets/images/index/commentaly_bg.png') 100% 0 no-repeat #15161a;
        background-size: 100% auto
    }
}
#index .commentaly .commentaly-container {
    padding: 20px 0;
    position: relative
}
#index .commentaly__live-label {
    top: 8px
}
#index .commentaly__title {
    font-weight: 700;
    font-size: 14px;
    color: #fff;
    margin-bottom: 22px
}
@media (min-width:769px) {
    #index .commentaly .commentaly-container {
        max-width: 1000px;
        margin-right: auto;
        margin-left: auto;
        padding: 0 15px
    }
    #index .commentaly .commentaly-container > .container {
        padding-top: 45px;
        background: url('/sports/rugby/2019/assets/images/index/commentaly_bg.png') 100% 0 no-repeat #15161a
    }
    #index .commentaly__live-label {
        top: 15px
    }
    #index .commentaly__title {
        font-size: 28px;
        margin-bottom: 45px
    }
}
#index .commentaly__title i {
    font-weight: 400;
    font-size: 11px
}
@media (min-width:769px) {
    #index .commentaly__title i {
        font-size: 22px
    }
}
#index .commentaly__title span {
    display: block;
    font-weight: 400;
    font-size: 10px
}
#index .commentaly .commentaly-inner {
    padding: 0 15px
}
#index .commentaly__article-list {
    position: relative
}
#index .commentaly__article-item:first-child > a::before,
#index .commentaly__article-list::after {
    width: 100%;
    position: absolute;
    display: block;
    z-index: 1;
    content: '';
    top: 0
}
#index .commentaly__article-list::after {
    height: 100%;
    box-shadow: inset 0 -110px 90px -40px #15161a;
    pointer-events: none;
    left: 0
}
#index .commentaly__article-item {
    margin-bottom: 0
}
#index .commentaly__article-item > a {
    padding: 5px 0
}
#index .commentaly__article-item > a::after {
    width: 100%;
    border-color: #aaa
}
@media (min-width:769px) {
    #index .commentaly__title span {
        font-size: 20px
    }
    #index .commentaly__article-list::after {
        box-shadow: inset 0 -200px 90px -95px #15161a
    }
    #index .commentaly__article-item > a {
        padding: 10px 0
    }
    #index .commentaly__article-item > a:hover {
        opacity: .5
    }
}
#index .commentaly__article-item:first-child > a::before {
    height: 1px;
    border-bottom: 1px solid #aaa;
    right: 0
}
#index .commentaly__article-thumb {
    padding-left: 5px
}
#index .commentaly__article-thumb img {
    width: 58px
}
@media (min-width:769px) {
    #index .commentaly__article-thumb {
        padding-left: 10px
    }
    #index .commentaly__article-thumb img {
        width: 115px
    }
}
#index .commentaly__article-text {
    width: 100%
}
#index .commentaly__article-text .title {
    word-break: break-all;
    font-size: 9px;
    color: #fff;
    margin-bottom: 2px
}
#index .commentaly__more-button {
    margin-bottom: 10px
}
@media (min-width:769px) {
    #index .commentaly__article-text .title {
        font-size: 16px;
        line-height: 1.75;
        margin-bottom: 10px
    }
    #index .commentaly__article-text .date {
        font-size: 15px
    }
    #index .commentaly__more-button {
        margin-bottom: 20px
    }
}
#index .commentaly .past-commentaly__title {
    font-weight: 700;
    font-size: 8px;
    color: #fff;
    margin-bottom: 5px
}
@media (min-width:769px) {
    #index .commentaly .past-commentaly__title {
        font-size: 16px;
        margin-bottom: 10px
    }
}
#index .commentaly .past-commentaly__item+li {
    margin-top: 5px
}
#index .dfp_banner {
    margin-bottom: 20px;
    text-align: center
}
@media (min-width:769px) {
    #index .dfp_banner {
        text-align: left
    }
}
#index .dfp_banner__head,
#voices .dfp_banner__head,
#schedule .dfp_banner__head {
    text-align: center;
}
@media (min-width:769px) {
    #index .dfp_banner__head iframe {
        margin-bottom: 20px;
    }
    #index .photo-album {
        padding-bottom: 20px
    }
}
#index .photo-album__header {
    width: 79px;
    height: 59px;
    background: url('/sports/rugby/2019/assets/images/index/photo_album_header.png') no-repeat
}
#index .photo-album__slider {
    margin-top: -8px
}
#index .photo-album__slider .slide {
    padding: 8px 8px 0;
    position: relative
}
#index .photo-album__slider .slide a {
    display: block;
}
@media (max-width:768px) {
    #index .photo-album__slider .slide a {
        font-size: 10px
    }
}
@media (min-width:769px) {
    #index .photo-album__header {
        width: 158px;
        height: 118px
    }
    #index .photo-album__slider .slide a {
        transition: 0.2s ease
    }
    #index .photo-album__slider .slide a:hover {
        opacity: .7
    }
}
#index .photo-album__figure {
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
#index .photo-album__figure img {
    position: absolute;
    max-width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    display: none;
    opacity: 0;
}
#index .photo-album__link {
    position: relative;
    width: 100%;
    padding-top: 100%;
    transition: 0.2s ease;
    overflow: hidden
}
#index .photo-album__caption {
    width: calc(100% - 16px);
    font-size: 20px;
    color: #fff;
    background-color: rgba(230, 0, 18, .65);
    padding: 6px;
    position: absolute;
    left: 8px;
    bottom: 0;
    z-index: 1;
    display: none
}
@media (min-width:769px) {
    #index .photo-album__caption {
        font-size: 22px;
        padding: 6px 12px
    }
}
#index .photo-album__date {
    font-size: 12px;
    display: block
}
@media (min-width:769px) {
    #index .photo-album__date {
        font-size: 14px
    }
}
#index .photo-album__tag {
    margin-top: 10px;
}
@media (max-width:768px) {
    #index .photo-album__tag {
        display: none;
    }
}
#index .photo-album__tag span {
    margin: 0 5px 5px 0;
    display: inline-block;
    font-size: 10px
}
@media (min-width:769px) {
    #index .photo-album__tag span {
        display: inline-block;
        font-size: 11px;
        margin: 0 5px 5px 0
    }
}
#index .photo-album__tag span a {
    border: 1px solid #fff;
    border-radius: 20px;
    padding: 2px 6px;
    display: block;
    background-color: #e60012
}
#index .photo-album .slick-current .photo-album__figure img {
    box-shadow: 0 0 8px rgba(0, 0, 0, .7)
}
#index .photo-album .slick-slide:not(.slick-current) {
    opacity: .6
}
#index .photo-album .slick-dots {
    bottom: -20px
}
@media (min-width:769px) {
    #index .photo-album__tag span a {
        border-radius: 20px;
        display: block
    }
    #index .photo-album .slick-dots {
        bottom: -30px
    }
}
#index .photo-album .slick-arrow {
    width: 10px;
    height: 10px;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 2
}
#index .photo-album .slick-arrow:before {
    content: ''
}
#index .photo-album .slick-arrow::after {
    content: '';
    width: 25px;
    height: 25px;
    border-style: solid;
    border-color: red;
    position: absolute;
    top: 0;
    z-index: 2;
    display: none
}
#index .photo-album .slick-prev {
    left: 7%
}
#index .photo-album .slick-prev::after {
    border-width: 0 0 2px 2px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
}
#index .photo-album .slick-next {
    right: 10%
}
@media (min-width:769px) {
    #index .photo-album .slick-arrow {
        width: 25px;
        height: 25px;
        font-size: 25px
    }
    #index .photo-album .slick-arrow::after {
        display: block;
        width: 25px;
        height: 25px
    }
    #index .photo-album .slick-prev {
        left: 15%
    }
    #index .photo-album .slick-next {
        right: 15%
    }
    #index .photo-album .slick-dots li {
        width: 9px;
        height: 9px;
        margin: 0 8px
    }
}
#index .photo-album .slick-next::after {
    border-width: 2px 2px 0 0;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
}
#index .photo-album .slick-dots li {
    width: 9px;
    height: 9px
}
#index .photo-album .slick-dots li button {
    width: 5px;
    height: 5px
}
#index .photo-album .slick-dots li button:before {
    content: '';
    display: block;
    width: 9px;
    height: 9px;
    background-color: #fce5e7;
    border: 1px solid #d6c9ca;
    border-radius: 50%;
    opacity: 1
}
#schedule-result .has_match_link:hover,
#schedule-result .schedule-list-wrap .schedule-list li a:hover {
    opacity: .7
}
@media (min-width:769px) {
    #index .photo-album .slick-dots li button,
    #index .photo-album .slick-dots li button:before {
        width: 9px;
        height: 9px
    }
}
#index .photo-album .slick-dots li.slick-active button:before {
    background-color: red
}
#index .slick-initialized,
#index .slick-initialized .photo-album__caption,
#index .slick-initialized .photo-album__figure img {
    display: block
}
@media (max-width:768px) {
    #index .photo-album__header {
        background-size: 79px 59px
    }
    #index .rules-top-keywords {
        border-top: 1px solid #ccc
    }
}
@media (min-width:769px) {
    #index .ruleslist__list_sp {
        display: flex;
        margin-bottom: 20px;
        flex-wrap: wrap;
        justify-content: start
    }
    #index .ruleslist__item_sp {
        width: 31%;
        margin-right: 10px
    }
    #index .ruleslist__item_sp:nth-child(3n) {
        margin-right: 0
    }
    #index .ruleslist__item_sp {
    margin-bottom: 18px
    }
    #index .ruleslist__item_sp > a {
        display: block;
        position: relative
    }
    #index .ruleslist__item_sp > a article {
        display: flex;
        align-items: center
    }
    #index .ruleslist__item_sp > article {
        position: relative;
        flex-flow: column
    }
    #index .ruleslist__item_sp:last-child {
        margin-bottom: 0
    }
    #index .ruleslist__item_sp > a,
    #index .ruleslist__item_sp > article a {
        transition: 0.2s ease
    }
    #index .ruleslist__item_sp > article a:hover {
        opacity: 1
    }
    #index .ruleslist__thumb_sp {
        width: 100%;
        padding: 0;
        margin-bottom: 15px;
        height: 100%
    }
    #index .ruleslist__thumb_sp img {
    width: 100%
    }
    #index .ruleslist__textwrap_sp {
        display: flex;
        flex-flow: column;
        justify-content: space-between
    }
    #index .ruleslist__text_sp {
        word-break: break-all;
        line-height: 1.333333
    }
    #index .ruleslist__text_sp,
    #index .ruleslist__textwrap_sp {
        width: 100%
    }
    #index .ruleslist__text_sp .title {
        font-size: 17px;
    }
}
#photos .l-main {
  padding-bottom: 0;
}
#photos .ad_header {
  background-image: url('/sports/rugby/2019/assets/images/340x750pix.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  height: 45vw;
  position: relative;
  z-index: 1;
  background-color: #AA0000;
  background-size: cover;
}
#photos .ad_header a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}
#photos .l-column-wrapper {
  display: -webkit-box;
  padding: 40px 0 80px;
}
#photos .l-main-column {
  padding-right: 0;
  color: #797979;
  width: 100%;
}
#photos .photolist__header {
  position: relative;
  padding-top: 5px;
  padding-bottom: 0.5rem;
  margin-bottom: 8px;
}
#photos .photolist__header span {
  display: block;
  font-weight: bold;
  font-size: 16px;
  line-height: 1;
}
#photos .photolist__planning {
  font-size: 15px;
  padding-left: 10px;
  font-weight: normal;
  padding-top: 25px;
}
#photos .photolist__planning span {
  font-size: 14px;
  text-align: right;
  font-weight: normal;
  padding-right: 30px;
}  
@media (min-width:971px) {
  #photos .photolist__header {
    padding-top: 0;
    padding-bottom: 1.0rem;
    margin-bottom: 16px;
  }
  #photos .photolist__header span {
    font-size: 22px;
    padding: 0;
  }
  #photos .photolist__planning {
    font-size: 15px;
    width: 65%;
  }
  #photos .photolist__planning span {
    font-size: 14px;
    padding-right: 30px;
  }  
}
#photos .photolist__txt {
    font-size: 15px;
    padding-bottom: 25px;
}

#photos .photolist .photograph-cont {
  padding-bottom: 1.5rem;
  width: 96%;
  display: block;
  margin: auto;
}
#photos .photolist .photograph-cont__ttl {
  font-size: 12px;
  font-weight: 700;
}
#photos .photolist .highlight_wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 0 3px;  
}
#photos .photolist .highlight-cont {
  width: 50%;
  padding: 0 3px 6px 3px;
}
#photos .photolist .highlight-cont:before {
  padding-top: 100%;
}
#photos .photolist .highlight-cont p {
  font-size: 12px;
  text-align: right;
}
#photos .photolist .highlight-cont img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
}
#photos .photolist .photograph-cont p {
  font-size: 12px;
  text-align: right;
  padding: 68% 0 0;  
}

#photos .highlight_box {
    position: relative;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
}
#photos .highlight_box:before {
  content:"";
  display: block;
  padding-top: 66.9%;
}
@media (min-width:971px) {
  #photos .ad_header {
    background-image: url('/sports/rugby/2019/assets/images/180x2000pix.jpg');
    background-size: auto;
    height: 180px;
  }
  #photos .l-column-wrapper {
    padding: 40px 15px 80px;
  }
  #photos .photolist .photograph-cont {
    width: 100%;
  }
  #photos .photolist .photograph-cont__ttl {
    font-size: 16px;
    padding: 5px 0;
  }
  #photos .photolist .photograph-cont p {
    font-size: 16px;
    padding: 5px 0;
  }
  #photos .photolist .highlight_wrapper {
    padding: 0;
  }
  #photos .photolist .highlight-cont {
    width: 33.3%;
    padding: 0 4px 8px 4px;
  }
  #photos .photolist .highlight-cont p {
    font-size: 16px;
  }
}
#photos .photolist .highlight_caption {
  color: #FFFFFF;
  background-color: #111112;
  padding: 5px;
  position: relative;
}
#photos .photolist .highlight_caption p {
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
#photos .highlight_caption a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-indent:-999px;
    z-index: 2;
}
@media (min-width:971px) {
  #photos .photolist .highlight_caption {
  padding: 7px;
  }
  #photos .photolist .highlight_caption p {
    padding: 0 10px;
  }
}
#photos .slide_iframe {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 67%;
}
#photos .slide_iframe iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  margin-bottom: 50px;
}
@media (min-width:971px) {
  #photos .slide_iframe iframe {
    width: 970px;
    height: 647px;    
  }
}
#photos .ad_footer {
  background-image: url('/sports/rugby/2019/assets/images/340x750pix.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  height: 45vw;
  position: relative;
  z-index: 1;
  background-color: #AA0000;
  background-size: cover;
}
#photos .ad_footer a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}
@media (min-width:971px) {
  #photos .ad_footer {
    background-image: url('/sports/rugby/2019/assets/images/180x2000pix.jpg');
    background-size: auto;
    height: 180px;
  }
}
.countdown-wrap {
    margin: 20px auto;
    padding: 8px 0;
    width: 100%;
    background-color: #fce5e7
}
.countdown-wrap .countdown {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: baseline;
    align-items: baseline
}
.countdown-wrap .countdown__text {
    font-size: 14px;
    text-align: center;
    width: 100%
}
.countdown-wrap .countdown__date {
    font-size: 18px;
    text-align: center;
    font-weight: 700
}
@media (min-width:769px) {
    .countdown-wrap {
        margin: 20px auto 0;
        padding: 30px 0;
        width: 587px
    }
    .countdown-wrap .countdown {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row
    }
    .countdown-wrap .countdown__text {
        font-size: 23px;
        padding-left: 26px;
        padding-right: 26px;
        text-align: left;
        width: auto
    }
    .countdown-wrap .countdown__date {
        font-weight: 400;
        font-size: 40px
    }
    .countdown-wrap .countdown__term {
        font-size: 22px;
        text-align: left;
        width: auto
    }
    .adv {
        margin: 0 auto;
        widows: 90%
    }
    .adv figure {
        text-align: center
    }
    .top-event-calendar {
        margin-top: 43px
    }
    .top-event-calendar__item {
        height: 80px
    }
    .top-event-calendar__link {
        display: block;
        background-color: #e60012;
        font-size: 18px;
        color: #fff;
        font-weight: 700;
        padding: 29px 0 29px 90px;
        background-image: url('/sports/rugby/2019/assets/images/index/calendar.png');
        background-repeat: no-repeat;
        background-size: 45px 45px;
        background-position: center left 20px
    }
    .l-ad-jumbotron .l-ad-jumbotron {
        padding: 0;
        border-bottom: none
    }
    #news .newslist .container {
        padding: 0
    }
}
#event .event-article__detail,
#event .eventlist__textwrap,
#rules .ruleslist__textwrap,
#stadium .stadiumlist__textwrap {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal
}
#news .dfp_banner,
#news .list-pager,
.l-ad-jumbotron {
    text-align: center
}
#news .newslist__header::after,
#news .newslist__item > a::after,
#news .newslist__item > article::after,
#photos .photolist__header::after,
#schedule .match-header::after {
    height: 1px;
    z-index: 1;
    content: '';
    bottom: 0
}
.l-ad-jumbotron {
    padding: 0;
    border-bottom: none
}
#news .newslist {
    margin-top: 25px
}
#news .newslist__header {
    padding-bottom: 8px;
    margin-bottom: 8px;
    position: relative
}
#news .newslist__header span {
    display: block;
    font-weight: 100;
    font-size: 14px;
    line-height: 1
}
#news .newslist__header::after,
#photos .photolist__header::after,
#schedule .match-header::after {
    display: block;
    width: calc(100% + 16px);
    background-color: #ccc;
    position: absolute;
    left: -8px
}
@media (min-width:769px) {
    #news .newslist__header {
        padding-bottom: 16px;
        margin-bottom: 20px
    }
    #news .newslist__header span {
        font-size: 22px
    }
    #news .newslist__header::after,
    #photos .photolist__header::after,
    #schedule .match-header::after {
        width: 100%;
        left: 0
    }
}
#news .newslist__list {
    margin-bottom: 35px
}
@media (max-width:768px) {
    #news .news-top-keywords {
        border-top: 1px solid #ccc
    }
    #news .newslist__list {
        padding: 8px 0
    }
}
@media (min-width:769px) {
    #news .newslist__list {
        margin-bottom: 70px
    }
    #news .newslist__item > a {
        transition: 0.2s ease
    }
}
#news .newslist__item {
    margin-bottom: 4px
}
#news .newslist__item > a {
    display: block;
    position: relative
}
#news .newslist__item > a article {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center
}
#news .newslist__item > a::after {
    display: block;
    width: calc(100% - 68px);
    border-bottom: 1px solid #dcdcdc;
    position: absolute;
    right: 0
}
@media (min-width:769px) {
    #news .newslist__item > a::after {
        width: calc(100% - 86px - 15px);
        border-color: #e8e8e8
    }
    #news .newslist__item > a:hover {
        opacity: .7
    }
}
#news .newslist__item > article {
    position: relative;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center
}
#news .newslist__item > article::after {
    display: block;
    width: calc(100% - 68px);
    border-bottom: 1px solid #dcdcdc;
    position: absolute;
    right: 0
}
#news .newslist__item:last-child {
    margin-bottom: 0
}
#news .newslist__thumb {
    padding-right: 10px
}
@media (min-width:769px) {
    #news .newslist__item > article::after {
        width: calc(100% - 86px - 15px);
        border-color: #e8e8e8
    }
    #news .newslist__item > article a {
        transition: 0.2s ease
    }
    #news .newslist__item > article a:hover {
        opacity: .7
    }
    #news .newslist__thumb {
        padding-right: 15px
    }
}
@media (max-width:768px) {
    #news .newslist__thumb img {
        width: 100px;
        height: 89.27px;
        object-fit: cover;
    }
}
@media (min-width:769px) {
    #news .newslist__thumb img {
        width: 86px;
        height: 86px;
        object-fit: cover;
    }
}
#news .newslist__text {
    word-break: break-all;
    width: calc(100% - 68px);
    line-height: 1.333333
}
#news .newslist__text .title {
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 5px
}
@media (max-width:374px) {
    #news .newslist__text .title {
        font-size: 14px
    }
}
@media (min-width:769px) {
    #news .newslist__text {
        width: calc(100% - 86px - 15px)
    }
    #news .newslist__text .title {
        font-size: 17px
    }
}
#news .newslist__text .date {
    font-size: 10px;
    color: #999
}
#news .newslist__button {
    margin-bottom: 25px
}
@media (min-width:769px) {
    #news .newslist__text .date {
        font-size: 13px
    }
    #news .list-pager {
        margin-top: 50px
    }
}
#news .list-pager__list {
    display: inline-block;
    letter-spacing: -0.4em
}
#news .list-pager__item {
    display: inline-block;
    vertical-align: middle;
    letter-spacing: normal;
    margin: 0 3px
}
#news .list-pager__item a {
    display: block;
    width: 28px;
    height: 28px;
    font-size: 11px;
    line-height: 28px;
    color: #666;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #a0a0a0;
    border-radius: 3px
}
@media (min-width:769px) and (min-width:769px) {
    #news .list-pager__item a {
        transition: 0.2s ease
    }
}
#news .list-pager__item.is-current a {
    color: #fff;
    background-color: #e60012;
    border-color: #e60012
}
@media (min-width:769px) {
    #news .list-pager__item a {
        width: 46px;
        height: 46px;
        font-size: 18px;
        line-height: 46px;
        border-radius: 5px
    }
    #news .list-pager__item a:hover {
        color: #fff;
        background-color: #e60012;
        border-color: #e60012
    }
    #news .list-pager__item--arrow a {
        font-size: 12px
    }
    #news.single-post .l-side-column .container {
        padding: 0
    }
    #news.single-post .l-side-column .md-popular-keywords,
    #news.single-column .l-side-column .md-popular-keywords {
        padding-top: 0;
        margin-bottom: 40px
    }
    #news .dfp_banner {
        text-align: left
    }
}
#news .dfp_banner {
    margin-bottom: 20px;
}
#news .dfp_banner__head {
    padding-bottom: 0;
    text-align: center
}
@media (min-width:769px) {
    #news .dfp_banner__head {
        padding-bottom: 20px;
    }
}
@media (max-width:768px) {
    #news .news-article {
        border-top: 1px solid #ccc;
        padding-top: 15px
    }
    #news .news-article__text+.news-article__text {
        margin-top: 10px
    }
}
#news .news-article__header {
    font-size: 18px;
    line-height: 1.0769;
    margin-bottom: 8px
}
@media (min-width:769px) {
    #news .news-article .container {
        padding: 0
    }
    #news .news-article__header {
        font-size: 24px
    }
}
#news .news-article__date {
    font-size: 12px;
    color: #999;
    margin-bottom: 10px
}
@media (min-width:769px) {
    #news .news-article__date {
        font-size: 15px;
        margin-bottom: 25px
    }
}
#news .news-article__image {
    margin-bottom: 10px
}
@media (min-width:769px) {
    #news .news-article__image {
        margin-bottom: 30px
    }
}
#news .news-article__image .figure {
    margin-bottom: 5px
}
#news .news-article__image .figure img {
    width: 100%
}
#news .news-article__image .caption {
    font-size: 11px;
    color: #999;
    text-align: right
}
#news .news-article__text {
    font-size: 15px;
    line-height: 1.66666;
    text-indent: 1em
}
#news .news-article__text+.news-article__image {
    margin-top: 15px
}
@media (min-width:769px) {
    #news .news-article__image .figure {
        margin-bottom: 15px
    }
    #news .news-article__image .caption {
        font-size: 15px
    }
    #news .news-article__text {
        font-size: 18px;
        margin-bottom: 30px
    }
    #news .news-article__text+.news-article__text {
        margin-bottom: 30px
    }
    #news .news-article__text+.news-article__image {
        margin-top: 40px
    }
}
#news .news-article__post-contents {
    font-size: 14px;
    word-break: break-word
}
@media (min-width:769px) {
    #news .news-article__post-contents {
        font-size: 18px
    }
}
#news .news-article__post-contents p {
    font-size: 15px;
    line-height: 1.66666;
    text-indent: 1em;
    max-width: 1000px;
    padding: 0 8px;
    margin-right: auto;
    margin-left: auto;
    position: relative
}
@media (max-width:768px) {
    #news .news-article__post-contents p+p {
        margin-top: 10px
    }
}
@media (min-width:769px) {
    #news .news-article__post-contents p {
        font-size: 18px;
        margin-bottom: 30px;
        padding: 0
    }
    #news .news-article__post-contents p+p {
        margin-top: 30px
    }
}
#news .news-article__post-contents p+.news-article__image {
    margin-top: 15px
}
@media (min-width:769px) {
    #news .news-article__post-contents p+.news-article__image {
        margin-top: 40px
    }
}
#news .news-article__post-contents p+div {
    margin-top: 15px
}
@media (min-width:769px) {
    #news .news-article__post-contents p+div {
        margin-top: 40px
    }
}
#news .news-article__post-contents p a {
    text-decoration: underline;
    color: #00f
}
@media (max-width:768px) {
    #news .news-article__post-contents img+p {
        margin-top: 10px
    }
}
@media (min-width:769px) {
    #news .news-article__post-contents img+p {
        margin-top: 30px
    }
}
#news .news-article__post-contents div+div {
    margin-top: 15px
}
#news .news-article__post-contents img {
    max-width: 100%;
    padding: 0 8px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10px;
    display: block
}
@media (min-width:769px) {
    #news .news-article__post-contents div+div {
        margin-top: 40px
    }
    #news .news-article__post-contents img {
        margin-bottom: 30px;
        padding: 0 15px
    }
}
#news .news-article__post-contents .wp-caption {
    display: block;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 8px;
    margin-bottom: 10px
}
@media (min-width:769px) {
    #news .news-article__post-contents .wp-caption {
        margin-bottom: 20px;
        padding: 0
    }
}
#news .news-article__post-contents .wp-caption img {
    max-width: 100%;
    display: block;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    margin-bottom: 0
}
#news .news-article__post-contents .wp-caption .wp-caption-text {
    font-size: 12px;
    color: #999;
    text-indent: 0;
    margin-top: 5px
}
@media (min-width:769px) {
    #news .news-article__post-contents .wp-caption .wp-caption-text {
        font-size: 12px;
        margin-top: 12px
    }
    #news .news-article__post-contents .alignleft {
        float: left;
        margin: 0 1em 0 0
    }
    #news .news-article__post-contents .alignright {
        float: right;
        margin: 0 0 0 1em
    }
}
#news .news-article__post-contents div.caption {
    font-size: 12px;
    color: #999;
    text-indent: 0;
    margin-top: -5px !important;
    margin-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px
}
@media (min-width:769px) {
    #news .news-article__post-contents div.caption {
        font-size: 15px;
        margin-top: -15px !important;
        margin-bottom: 30px
    }
}
#news .news-article__post-contents h1 {
    margin: 2.5em 0 1.5em;
    font-size: 112%
}
#news .news-article__post-contents h2 {
    margin: 2em 0 1em;
    font-size: 105%
}
#news .news-article__post-contents h3 {
    margin: 1.5em 0 0.5em;
    font-size: 100%
}
#news .news-article__post-contents h4,
#news .news-article__post-contents h5,
#news .news-article__post-contents h6 {
    margin: 1.5em 0 0.5em;
    font-size: 100%;
    font-weight: 400
}
#news .news-article__post-contents h1,
#news .news-article__post-contents h2,
#news .news-article__post-contents h3,
#news .news-article__post-contents h4,
#news .news-article__post-contents h5,
#news .news-article__post-contents h6 {
    padding: 0 8px
}
#news .news-article .news-article-popular-keywords {
    margin-top: 5px;
    margin-bottom: 15px
}
#news .news-article .news-article-keywords {
    margin-bottom: 20px
}
@media (min-width:769px) {
    #news .news-article__post-contents h1,
    #news .news-article__post-contents h2,
    #news .news-article__post-contents h3,
    #news .news-article__post-contents h4,
    #news .news-article__post-contents h5,
    #news .news-article__post-contents h6 {
        padding: 0
    }
    #news .news-article .news-article-keywords {
        margin-top: 30px;
        margin-bottom: 30px
    }
}
#news .news-article .news-article-keywords__title {
    font-size: 13px;
    margin-bottom: 8px
}
#news .news-article .news-article-keywords .md-popular-keywords__list {
    margin-left: -3px
}
#news .news-article .news-article-keywords .md-popular-keywords__words {
    background-color: transparent;
    padding: 0
}
#news .article-pager {
    text-align: center;
    margin-top: 30px
}
@media (min-width:769px) {
    #news .news-article .news-article-keywords__title {
        font-size: 16px;
        margin-bottom: 15px
    }
    #news .article-pager {
        margin-top: 50px
    }
}
#news .article-pager__list {
    display: inline-block;
    letter-spacing: -0.4em
}
#news .article-pager__item {
    display: inline-block;
    vertical-align: middle;
    letter-spacing: normal;
    margin: 0 8px
}
#news .article-pager__item a {
    display: block;
    width: 28px;
    height: 28px;
    font-size: 12px;
    line-height: 28px;
    color: #666;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #a0a0a0;
    border-radius: 3px
}
@media (min-width:769px) {
    #news .article-pager__item a {
        width: 46px;
        height: 46px;
        font-size: 16px;
        line-height: 46px;
        border-radius: 5px;
        transition: 0.2s ease
    }
    #news .article-pager__item a:hover {
        color: #fff;
        background-color: #e60012;
        border-color: #e60012
    }
    #news .article-pager__item--arrow a {
        font-size: 12px
    }
}
#news .article-pager__item--back a {
    width: auto;
    height: auto;
    padding: 5px 25px;
    border: none;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(102, 102, 102, .4)
}
#news .news-sns {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 30px auto
}
#news .news-sns__item a {
    width: 60px;
    height: 60px;
    display: block
}
#news .news-sns__item a span {
    display: block;
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    margin: 0 auto
}
#news .news-sns__item a .icon-facebook {
    background-image: url('/sports/rugby/2019/assets/images/common/icons/ico_fb-color.jpg');
    background-size: contain
}
#news .news-sns__item a .icon-twitter {
    background-image: url('/sports/rugby/2019/assets/images/common/icons/ico_tw-color.jpg');
    background-size: contain
}
#news .news-sns__item a .icon-line {
    background-image: url('/sports/rugby/2019/assets/images/common/icons/ico_ln-color.jpg');
    background-size: contain
}
#japan .players+.players {
    margin-top: 20px
}
#japan .players__position-label {
    font-weight: 700;
    font-size: 11px;
    color: #e60012;
    margin-bottom: 13px
}
@media (min-width:769px) {
    #news .article-pager__item--back a {
        padding: 10px 50px
    }
    #japan .players+.players {
        margin-top: 40px
    }
    #japan .players .container {
        padding: 0
    }
    #japan .players__position-label {
        font-size: 17px;
        margin-bottom: 30px
    }
    #japan .players .players-slide__list {
        display: -webkit-box;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: -10px
    }
}
#japan .players .players-slide__item {
    padding-bottom: 8px
}
#japan .players .players-slide__number {
    font-size: 9px
}
@media (min-width:769px) {
    #japan .players .players-slide__item {
        width: 32%;
        margin-left: 2%;
        padding-bottom: 10px;
        margin-bottom: 10px
    }
    #japan .players .players-slide__item:nth-child(3n+1) {
        margin-left: 0
    }
    #japan .players .players-slide__item a article {
        display: block
    }
    #japan .players .players-slide__item+.players-slide__item {
        margin-top: 0
    }
    #japan .players .players-slide__thumb {
        width: 100%;
        margin-bottom: 8px
    }
    #japan .players .players-slide__text-wrapper {
        width: 100%;
        padding-left: 0
    }
    #japan .players .players-slide__number {
        font-size: 13px
    }
}
@media (min-width:941px) {
    #japan .players .players-slide__number {
        font-size: 15px
    }
}
#japan .players .players-slide__name {
    font-weight: 400;
    font-size: 9px
}
@media (min-width:769px) {
    #japan .players .players-slide__name {
        font-size: 13px
    }
}
@media (min-width:941px) {
    #japan .players .players-slide__name {
        font-size: 15px
    }
}
@media (max-width:768px) {
    #japan .japan-news .md-scroll-y-articles,
    #japan .japan-news .players .players-slide,
    #japan .players .japan-news .players-slide {
        margin-bottom: 8px
    }
    #japan .japan-archive-main .l-side-column {
        border-top: 1px solid #ccc;
        padding-top: 15px
    }
    #japan .player-profile {
        border-top: 1px solid #ccc
    }
}
@media (min-width:769px) {
    #japan .japan-archive-main .l-side-column .container {
        padding: 0
    }
}
#japan .japan-archive-main .country-name-header {
    font-size: 14px;
    line-height: 1.3333;
    padding-bottom: 8px;
    margin-bottom: 13px;
    border-bottom: 1px solid #ccc
}
#japan .japan-archive-main .country-name-header .flag {
    display: inline-block;
    vertical-align: middle;
    width: 29px;
    margin-right: 8px
}
@media (min-width:769px) {
    #japan .japan-archive-main .country-name-header {
        font-size: 22px;
        margin-bottom: 18px
    }
    #japan .japan-archive-main .country-name-header .flag {
        width: 50px
    }
}
#japan .japan-archive-main .country-name-header .flag img {
    vertical-align: top
}
#japan .player-profile {
    color: #fff;
    padding-top: 40px;
    margin-bottom: 20px;
    position: relative
}
@media (min-width:769px) {
    #japan .player-profile {
        padding-top: 70px;
        margin-bottom: 40px
    }
}
#japan .player-profile__header {
    display: inline-block;
    height: 40px;
    font-size: 13px;
    background-color: #e60012;
    padding-top: 10px;
    padding-right: 25px;
    padding-left: 16px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1
}
@media (min-width:769px) {
    #japan .player-profile__header {
        height: 70px;
        font-size: 22px;
        padding-top: 10px;
        padding-right: 35px;
        padding-left: 25px
    }
}
#japan .player-profile__header .number {
    display: block;
    font-style: italic;
    font-size: 18px
}
@media (min-width:769px) {
    #japan .player-profile__header .number {
        font-size: 30px
    }
}
#japan .player-profile__header i {
    font-weight: 400;
    font-size: 10px
}
#japan .player-profile__header::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-width: 40px 20px;
    border-style: solid;
    border-color: transparent transparent #e60012;
    position: absolute;
    top: -40px;
    right: -20px;
    z-index: -1
}
#japan .player-profile .player-profile-container {
    background-color: #e60012;
    padding-top: 15px;
    padding-bottom: 25px
}
@media (min-width:769px) {
    #japan .player-profile__header i {
        font-size: 17px
    }
    #japan .player-profile__header::after {
        border-width: 70px 30px;
        top: -70px;
        right: -30px
    }
    #japan .player-profile .player-profile-container {
        padding-top: 20px;
        padding-bottom: 40px
    }
}
#japan .player-profile__position {
    font-weight: 100;
    font-size: 50px;
    line-height: 1;
    color: #ccc;
    position: absolute;
    top: 7px;
    right: 16px;
    z-index: 1
}
@media (min-width:769px) {
    #japan .player-profile__position {
        font-size: 66px;
        top: 28px
    }
}
@media (min-width:941px) {
    #japan .player-profile__position {
        font-size: 86px;
        top: 16px;
        right: 20px
    }
}
#japan .player-profile__copy {
    font-weight: 400;
    font-size: 12px;
    padding-left: 10px;
    border-left: 2px solid red;
    margin-bottom: 10px;
    margin-left: 8px;
    margin-right: 8px
}
#japan .player-profile__image {
    padding: 0 8px;
    margin-bottom: 15px
}
@media (min-width:769px) {
    #japan .player-profile__copy {
        font-size: 25px;
        border-width: 4px;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 15px
    }
    #japan .player-profile__image {
        padding: 0 10px;
        margin-bottom: 30px
    }
}
#japan .player-profile__image img {
    width: 100%
}
#japan .player-profile__table {
    display: -webkit-box;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-size: 9px;
    margin-bottom: 18px
}
@media (min-width:769px) {
    #japan .player-profile__table {
        font-size: 15px;
        margin-bottom: 35px
    }
}
#japan .player-profile__table dd,
#japan .player-profile__table dt {
    padding: 5px 0;
    margin-bottom: 2px
}
#japan .player-profile__table dt {
    width: 77px;
    text-align: center;
    background-color: #32435a
}
@media (min-width:769px) {
    #japan .player-profile__table dt {
        width: 130px
    }
}
#japan .player-profile__table dd {
    width: calc(100% - 77px - 5px);
    padding-left: 20px;
    border-top: 1px solid #32435a
}
@media (max-width:374px) {
    #japan .player-profile__table dd {
        padding-left: 10px
    }
}
#japan .player-profile__table dd:last-of-type {
    border-bottom: 1px solid #32435a
}
#japan .player-profile__link {
    text-align: center
}
#japan .player-profile__link a {
    font-size: 9px;
    text-decoration: underline
}
#japan .player-more-button {
    margin-top: 10px
}
@media (min-width:769px) {
    #japan .player-profile__table dd {
        width: calc(100% - 130px - 5px);
        padding-left: 35px
    }
    #japan .player-profile__link a {
        font-size: 16px
    }
    #japan .player-profile__link a:hover {
        text-decoration: none
    }
    #japan .player-more-button {
        margin-top: 40px
    }
    #japan .l-side-column .container {
        padding: 0
    }
}
#japan .related-news-label {
    width: 100%;
    height: 39px;
    background: url('/assets/images/japan/related_news.png') no-repeat;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px
}
#team .participating-countries__header {
    margin-bottom: 8px
}
#team .participating-countries__header span {
    display: block;
    width: 32px;
    height: 11px;
    background: url('/assets/images/team/participating_countries.png') no-repeat
}
@media (max-width:768px) {
    #team .participating-countries {
        border-top: 1px solid #ccc;
        padding-top: 15px
    }
    #team .participating-countries__header {
        padding: 0 8px
    }
    #team .participating-countries__header span {
        background-size: 32px 11px
    }
    #team .participating-countries__nav ul {
        max-width: 290px;
        margin-right: auto;
        margin-left: auto
    }
}
@media (min-width:769px) {
    #team .participating-countries__header {
        margin-bottom: 30px
    }
    #team .participating-countries__header span {
        width: 63px;
        height: 21px
    }
}
#team .participating-countries__nav {
    background-color: #e60012;
    padding: 15px 0;
    margin-bottom: 25px
}
#team .participating-countries__nav ul {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: -5px
}
@media (min-width:769px) {
    #team .participating-countries__nav {
        background-color: #eee;
        padding: 20px
    }
    #team .participating-countries__nav ul {
        margin-bottom: -1.5%
    }
}
#team .participating-countries__nav ul li {
    width: 68px;
    margin-bottom: 5px
}
#team .participating-countries__nav ul li a {
    display: block;
    font-weight: 700;
    font-size: 9px;
    text-align: center;
    color: #e60012;
    background: linear-gradient(#fff, #e2e4ee);
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    padding: 6px 0;
    position: relative
}
@media (min-width:769px) {
    #team .participating-countries__nav ul li {
        width: 23.58%;
        margin-bottom: 9px
    }
    #team .participating-countries__nav ul li a {
        font-size: 18px;
        box-shadow: 0 0 4px rgba(0, 0, 0, .5);
        border-radius: 3px;
        transition: 0.2s ease
    }
}
#team .participating-countries__nav ul li a::after {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-width: 2px 2px 0 0;
    border-style: solid;
    border-color: #a9aaac;
    margin-top: -3px;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    position: absolute;
    top: 50%;
    right: 5px;
    z-index: 1
}
@media (min-width:769px) {
    #team .participating-countries__nav ul li a::after {
        right: 10px;
        width: 8px;
        height: 8px;
        margin-top: -4px
    }
    #team .participating-countries__nav ul li a:hover {
        opacity: .7
    }
    #team .participating-countries .group > .container {
        padding: 0
    }
}
#team .participating-countries .group+.group {
    margin-top: 20px
}
#team .participating-countries .group__header {
    font-weight: 700;
    font-size: 12px;
    color: #e60012;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 4px
}
#team .participating-countries .group__country > a {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 6px 10px
}
#team .participating-countries .group__country .national-flag {
    width: 40px;
    text-align: center
}
@media (min-width:769px) {
    #team .participating-countries .group+.group {
        margin-top: 40px
    }
    #team .participating-countries .group__header {
        font-size: 21px;
        margin-bottom: 5px
    }
    #team .participating-countries .group__country > a {
        padding: 10px 20px;
        transition: 0.2s ease
    }
    #team .participating-countries .group__country > a:hover {
        opacity: .7
    }
    #team .participating-countries .group__country .national-flag {
        width: 70px
    }
}
#team .participating-countries .group__country .national-name {
    width: calc(100% - 40px);
    font-size: 11px;
    color: #e60012;
    padding-left: 15px
}
#team .participating-countries .group__country:nth-child(even) {
    background-color: #f8f8f8
}
@media (max-width:768px) {
    #team .l-side-column {
        border-top: 1px solid #ccc;
        padding-top: 15px
    }
}
@media (min-width:769px) {
    #team .participating-countries .group__country .national-name {
        width: calc(100% - 70px);
        font-size: 18px;
        padding-left: 25px
    }
    #team .l-side-column .container {
        padding: 0
    }
}
#team .country-name-header {
    font-size: 14px;
    line-height: 1.3333;
    padding-bottom: 8px;
    margin-bottom: 13px;
    border-bottom: 1px solid #ccc
}
#team .country-name-header .flag {
    display: inline-block;
    vertical-align: middle;
    width: 29px;
    margin-right: 8px
}
@media (min-width:769px) {
    #team .country-name-header {
        font-size: 22px;
        margin-bottom: 18px
    }
    #team .country-name-header .flag {
        width: 50px
    }
}
#team .country-name-header .flag img {
    vertical-align: top
}
#team .related-news-label {
    width: 95px;
    height: 11px;
    background: url('/assets/images/team/related_news.png') no-repeat;
    margin-bottom: 10px
}
#team .team-back-button {
    margin-top: 15px
}
@media (min-width:769px) {
    #team .related-news-label {
        width: 100%;
        height: 39px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px
    }
    #team .team-back-button {
        margin-top: 40px
    }
    #schedule-result .l-main-column .container {
        padding: 0
    }
}
@media (max-width:768px) {
    #team .related-news-label {
        background-size: 95px 11px
    }
    #japan .players #team .players-slide,
    #team #japan .players .players-slide,
    #team .md-scroll-y-articles {
        margin-bottom: 6px
    }
    #schedule-result .l-main-column {
        padding-top: 8px;
        border-top: 1px solid #ccc
    }
}
#schedule-result .schedule-header {
    padding-bottom: 8px;
    margin-bottom: 8px;
    position: relative
}
#schedule-result .schedule-header span {
    display: block;
    font-weight: 100;
    font-size: 14px;
    line-height: 1
}
#schedule-result .schedule-header::after {
    content: '';
    display: block;
    width: calc(100% + 16px);
    height: 1px;
    background-color: #ccc;
    position: absolute;
    bottom: 0;
    left: -8px;
    z-index: 1
}
@media (min-width:769px) {
    #schedule-result .schedule-header {
        padding-bottom: 16px;
        margin-bottom: 20px
    }
    #schedule-result .schedule-header span {
        font-size: 22px
    }
    #schedule-result .schedule-header::after {
        width: 100%;
        left: 0
    }
}
#schedule-result .schedule-list-wrap {
    margin: 20px 0
}
@media (min-width:769px) {
    #schedule-result .schedule-list-wrap {
        margin: 30px 0
    }
}
#schedule-result .schedule-list-wrap .schedule-list {
    display: -webkit-inline-box;
    display: inline-flex;
    flex-wrap: wrap;
    width: 100%
}
#schedule-result .schedule-list-wrap .schedule-list li {
    width: 50%;
    display: inline-block;
    text-align: center;
    position: relative
}
@media (min-width:941px) {
    #schedule-result .schedule-list-wrap .schedule-list li {
        width: 33.3%
    }
}
#schedule-result .schedule-list-wrap .schedule-list li:after,
#schedule-result .schedule-list-wrap .schedule-list li:before {
    position: absolute;
    content: "";
    width: 1px;
    height: 100%;
    background-color: #eee;
    top: 0
}
#schedule-result .schedule-list-wrap .schedule-list li:before {
    left: 0
}
#schedule-result .schedule-list-wrap .schedule-list li:after {
    right: -1px
}
#schedule-result .schedule-list-wrap .schedule-list li a {
    display: block;
    position: relative;
    padding: 10px 0;
    transition: 0.2s ease
}
#schedule-result .schedule-list-wrap .schedule-list li a:after,
#schedule-result .schedule-list-wrap .schedule-list li a:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #eee;
    left: 0
}
#schedule-result .schedule-list-wrap .schedule-list li a:before {
    top: 0
}
#schedule-result .schedule-list-wrap .schedule-list li a:after {
    bottom: -1px
}
#schedule-result .schedule-list-wrap .schedule-list li a .icon {
    vertical-align: middle;
    margin-right: 6px;
    width: 14px;
    height: 14px;
    display: inline-block;
    background: url('/assets/images/schedule/schedule-arrow.png') center center no-repeat;
    background-size: contain
}
#schedule-result .schedule-list-wrap .schedule-list li a .text {
    text-decoration: underline;
    color: #032a5b;
    display: inline-block;
    vertical-align: middle;
    font-size: 12px
}
@media (min-width:769px) {
    #schedule-result .schedule-list-wrap .schedule-list li a .icon {
        margin-right: 10px;
        width: 19px;
        height: 19px
    }
    #schedule-result .schedule-list-wrap .schedule-list li a .text {
        font-size: 15px
    }
}
#schedule-result .schedule-list-wrap .schedule-list li a:hover .text {
    text-decoration: none
}
#schedule-result .has_mach_link {
    cursor: pointer;
    transition: opacity 0.2s
}
#schedule-result .has_match_link {
    position: relative
}
#schedule-result .has_match_link:after {
    content: ">";
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 1em;
    line-height: 1
}
#schedule-result .has_match_link a {
    display: block;
    color: inherit;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    font-size: 14px
}
#schedule-result .has_match_link a span {
    font-size: 14px
}
#schedule-result .result-match-wrap {
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, .27)
}
#schedule-result .result-match-wrap+.result-match-wrap {
    margin-top: 30px
}
#schedule-result .result-match-wrap .result-match-title {
    background-color: #001229;
    width: 100%;
    padding: 8px 10px;
    font-size: 14px;
    font-weight: 700;
    color: #fff
}
#schedule-result .schedule-back-button {
    margin-top: 15px
}
@media (min-width:769px) {
    #schedule-result .result-match-wrap .result-match-title {
        font-size: 16px
    }
    #schedule-result .schedule-back-button {
        margin-top: 40px
    }
}
#_404 .l-live {
    margin-bottom: 25px
}
#_404 .l-live > span {
    padding: 25px 0
}
@media (min-width:769px) {
    #_404 .l-live {
        margin-bottom: 120px
    }
    #_404 .l-live > span {
        padding: 50px 0
    }
}
#_404 .page-notfound-label {
    font-weight: 700;
    font-size: 13px;
    margin-bottom: 20px
}
@media (min-width:769px) {
    #_404 .page-notfound-label {
        text-align: center;
        font-size: 23px;
        margin-bottom: 50px
    }
}
#_404 .page-notfound-text {
    font-size: 9px;
    margin-bottom: 20px
}
#_404 .md-button+.md-button {
    margin-top: 5px
}
#live .l-main {
    padding-bottom: 0
}
@media (min-width:769px) {
    #_404 .page-notfound-text {
        text-align: center;
        font-size: 16px;
        margin-bottom: 120px
    }
    #_404 .md-button+.md-button {
        margin-top: 20px
    }
    #live .live {
        background-color: #021938;
        padding-top: 40px;
        padding-bottom: 80px
    }
}
#live .live .live-container {
    background: url('/assets/images/live/live_bg.png') 100% 0 no-repeat #15171a;
    padding-bottom: 35px;
    background-size: 100% auto
}
#live .live__header {
    font-weight: 700;
    font-size: 14px;
    line-height: 1.1428;
    color: #fff;
    padding-top: 25px;
    margin-bottom: 20px
}
@media (min-width:769px) {
    #live .live .live-container {
        max-width: 970px;
        padding-bottom: 40px;
        margin-right: auto;
        margin-left: auto
    }
    #live .live__header {
        font-size: 28px;
        padding-top: 50px;
        padding-left: 35px
    }
}
#live .live__header i {
    font-weight: 400;
    font-size: 11px
}
@media (min-width:769px) {
    #live .live__header i {
        font-size: 22px
    }
}
#live .live__header span {
    font-weight: 400;
    font-size: 10px
}
@media (min-width:769px) {
    #live .live__header span {
        font-size: 20px
    }
}
#live .live__label {
    width: 34px;
    height: 16px;
    font-size: 7px;
    line-height: 16px;
    color: red;
    text-transform: uppercase;
    text-align: center;
    border: 1px solid red;
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 1
}
@media (min-width:769px) {
    #live .live__label {
        width: 66px;
        height: 27px;
        font-size: 14px;
        line-height: 27px;
        margin-bottom: 40px;
        top: 20px;
        right: 20px
    }
    #live .live .opta-wrap {
        max-width: 720px;
        padding-top: 80px;
        margin-right: auto;
        margin-left: auto
    }
}
#live .live .tabs {
    display: -webkit-box;
    display: flex;
    padding-top: 20px
}
@media (min-width:769px) {
    #live .live .tabs {
        max-width: 720px;
        padding-top: 80px;
        margin-right: auto;
        margin-left: auto
    }
}
#live .live .tabs .tab {
    width: 50%;
    text-align: center;
    background-color: #0f0f12;
    padding: 10px 0
}
#live .live .tabs .tab span {
    font-size: 11px;
    color: #fff
}
#live .live .tabs .tab.is-active {
    background-color: #020203;
    border-top: 2px solid #c00000
}
#live .live .live-main {
    background-color: #232426
}
@media (min-width:769px) {
    #live .live .tabs .tab {
        padding: 15px 0
    }
    #live .live .tabs .tab span {
        font-size: 22px
    }
    #live .live .tabs .tab.is-active {
        border-top-width: 3px
    }
    #live .live .live-main {
        margin: 0 35px
    }
}
#live .live .live-main .live-main-content {
    overflow: hidden
}
#live .live .live-main .live-main-content--game-data {
    padding-top: 12px;
    padding-bottom: 20px
}
@media (min-width:769px) {
    #live .live .live-main .live-main-content--game-data {
        padding-top: 30px;
        padding-bottom: 60px
    }
}
#live .live .live-main .live-main-content:not(.is-tab-active) {
    height: 0;
    padding: 0
}
#live .live .live-main .timeline {
    padding: 15px 10px 25px 0;
    overflow: hidden;
    position: relative
}
#live .live .live-main .timeline::after {
    content: '';
    display: block;
    width: 4px;
    height: 100%;
    background-color: #2d2d2d;
    position: absolute;
    top: 30px;
    left: 12px;
    z-index: 1
}
@media (min-width:769px) {
    #live .live .live-main .timeline {
        padding: 30px 112px 50px 0
    }
    #live .live .live-main .timeline::after {
        top: 57px;
        left: 115px
    }
}
#live .live .live-main .timeline__text-block {
    width: calc(100% - 35px);
    background-color: #fff;
    border-radius: 5px;
    padding: 15px;
    margin-right: 0;
    margin-left: auto;
    position: relative
}
#live .live .live-main .timeline__text-block+.timeline__text-block {
    margin-top: 6px
}
@media (min-width:769px) {
    #live .live .live-main .timeline__text-block {
        width: calc(100% - 160px);
        border-radius: 8px;
        padding: 25px
    }
    #live .live .live-main .timeline__text-block+.timeline__text-block {
        margin-top: 10px
    }
}
#live .live .live-main .timeline__text-block::before {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    background: linear-gradient(#334c6e 0, #041a39 100%);
    border: 2px solid #fff;
    border-radius: 50%;
    position: absolute;
    top: 15px;
    left: -27px;
    z-index: 2
}
@media (min-width:769px) {
    #live .live .live-main .timeline__text-block::before {
        width: 23px;
        height: 23px;
        border-width: 4px;
        top: 30px;
        left: -54px
    }
}
#live .live .live-main .timeline__text-block::after {
    content: '';
    display: block;
    border-width: 5px 8px;
    border-style: solid;
    border-color: transparent #fff transparent transparent;
    position: absolute;
    top: 15px;
    right: 100%;
    z-index: 1
}
#live .live .live-main .timeline__text-block .time {
    font-size: 8px;
    color: #777;
    margin-bottom: 10px
}
#live .live .live-main .timeline__text-block .image {
    margin-bottom: 10px
}
@media (min-width:769px) {
    #live .live .live-main .timeline__text-block::after {
        top: 30px;
        border-width: 10px 16px
    }
    #live .live .live-main .timeline__text-block .time {
        font-size: 16px
    }
    #live .live .live-main .timeline__text-block .image {
        margin-bottom: 15px
    }
}
#live .live .live-main .timeline__text-block .image img {
    width: 100%
}
#live .live .live-main .timeline__text-block .text {
    word-break: break-all;
    font-size: 11px
}
#live .live .live-main .timeline__more {
    width: calc(100% - 35px);
    text-align: center;
    background-color: #fff;
    border-radius: 4px;
    padding: 10px 0;
    margin-top: 15px;
    margin-right: 0;
    margin-left: auto
}
@media (min-width:769px) {
    #live .live .live-main .timeline__text-block .text {
        font-size: 18px
    }
    #live .live .live-main .timeline__more {
        width: calc(100% - 160px);
        padding: 18px 0;
        margin-top: 30px;
        transition: 0.2s ease
    }
}
#live .live .live-main .timeline__more span {
    display: inline-block;
    font-size: 8px;
    color: #666;
    padding-right: 16px;
    position: relative
}
#live .live .live-main .timeline__more span::before {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border: solid #666;
    border-width: 0 2px 2px 0;
    margin-top: -5px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 1
}
#live .live .live-main .timeline__more~.timeline__text-block {
    display: none
}
@media (min-width:769px) {
    #live .live .live-main .timeline__more span {
        font-size: 16px;
        padding-right: 25px
    }
    #live .live .live-main .timeline__more span::before {
        width: 10px;
        height: 10px;
        margin-top: -7px
    }
    #live .live .live-main .timeline__more:hover {
        opacity: .7
    }
}
#live .commentator-modal {
    text-align: left
}
#live .commentator-modal .commentator-modal-container {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center
}
#live .commentator-modal__image {
    width: 98px
}
@media (min-width:769px) {
    #live .commentator-modal__image {
        width: 260px
    }
}
#live .commentator-modal__image img {
    width: 100%
}
#live .commentator-modal__text-wrapper {
    -webkit-box-flex: 1;
    flex: 1;
    padding-left: 15px
}
#live .commentator-modal__name {
    font-size: 12px;
    margin-bottom: 8px
}
@media (min-width:769px) {
    #live .commentator-modal__text-wrapper {
        padding-left: 30px
    }
    #live .commentator-modal__name {
        font-size: 30px;
        margin-bottom: 12px
    }
}
#live .commentator-modal__description {
    font-size: 10px
}
.live-fixed-nav {
    width: 100%;
    border-top: 1px solid #3b485a;
    transition: 0.4s ease;
    position: relative;
    margin-bottom: -100%;
    left: 0;
    z-index: 9
}
@media (min-width:769px) {
    #live .commentator-modal__description {
        font-size: 20px;
        line-height: 1.75
    }
    .live-fixed-nav {
        margin-bottom: -100%
    }
}
.live-fixed-nav.is-slidein {
    margin-bottom: 0
}
.live-fixed-nav ul {
    display: -webkit-box;
    display: flex
}
.live-fixed-nav ul li {
    width: 50%;
    text-align: center
}
.live-fixed-nav ul li a {
    display: block;
    height: 60px;
    font-size: 13px;
    line-height: 60px;
    color: #fff;
    background-color: #e60012
}
.live-fixed-nav ul li a span {
    display: inline-block;
    background-position: 100% 50%;
    background-repeat: no-repeat
}
@media (min-width:769px) {
    .live-fixed-nav ul li a {
        height: 75px;
        font-size: 23px;
        line-height: 75px;
        transition: 0.2s ease
    }
    .live-fixed-nav ul li a:hover {
        background-color: #021938
    }
}
#stadium .stadiumlist__header::after,
.info-article__header::after {
    content: '';
    display: block;
    height: 1px;
    background-color: #ccc;
    z-index: 1;
    bottom: 0
}
.live-fixed-nav ul li:nth-child(1) {
    border-right: 1px solid #3b485a
}
.live-fixed-nav ul li:nth-child(1) a span {
    background-image: url('/assets/images/live/ico_reload.png');
    padding-right: 25px
}
@media (min-width:769px) {
    .live-fixed-nav ul li:nth-child(1) a span {
        padding-right: 60px
    }
}
.live-fixed-nav ul li:nth-child(2) a span {
    background-image: url('/assets/images/live/ico_commentator.png');
    padding-right: 20px
}
@media (max-width:768px) {
    .live-fixed-nav ul li:nth-child(1) a span {
        background-size: 22px 16px
    }
    .live-fixed-nav ul li:nth-child(2) a span {
        background-size: 18px 19px
    }
    .info-article {
        padding-top: 15px
    }
    #stadium .stadium-top-keywords {
        border-top: 1px solid #ccc
    }
}
.info-article__header {
    padding-bottom: 8px;
    margin-bottom: 12px;
    position: relative;
    padding-top: 20px;
}
.info-article__header span {
    display: block;
    font-weight: 100;
    font-size: 16px;
    line-height: 1
}
.info-article__header::after {
    width: calc(100% + 16px);
    position: absolute;
    left: -8px
}
@media (min-width:769px) {
    .live-fixed-nav ul li:nth-child(2) a span {
        padding-right: 55px
    }
    .info-article__header {
        padding-bottom: 16px;
        margin-bottom: 20px;
        padding-top: 0
    }
    .info-article__header span {
        font-size: 22px
    }
    .info-article__header::after {
        width: 100%;
        left: 0
    }
}
.info-article__text {
    font-size: 15px;
    line-height: 1.666;
    margin-bottom: 30px
}
.info-article__text--btm {
    margin-bottom: 30px;
}
.info-article__text a {
    color: #e60012;
    text-decoration: underline;
    transition: 0.5s
}
.info-article__text a:hover {
    opacity: .6;
    text-decoration: none
}
.info-article .infolist {
    margin-top: 25px
}
@media (min-width:769px) {
    .info-article__text {
        font-size: 18px
    }
    #stadium .stadiumlist .container,
    .info-article .infolist .container {
        padding: 0
    }
}
#stadium .stadiumlist__header {
    padding-bottom: 8px;
    margin-bottom: 12px;
    position: relative;
    padding-top: 20px
}
#stadium .stadiumlist__header span {
    display: block;
    font-weight: 100;
    font-size: 16px;
    line-height: 1
}
#stadium .stadiumlist__header::after {
    width: calc(100% + 16px);
    position: absolute;
    left: -8px
}
@media (min-width:769px) {
    #stadium .stadiumlist__header {
        padding-bottom: 16px;
        margin-bottom: 20px;
        padding-top: 0
    }
    #stadium .stadiumlist__header span {
        font-size: 22px
    }
    #stadium .stadiumlist__header::after {
        width: 100%;
        left: 0
    }
}
#stadium .stadiumlist__txt {
    font-size: 15px;
    padding-bottom: 25px
}
#stadium .stadiumlist__list {
    margin-bottom: 35px
}
@media (min-width:769px) {
    #stadium .stadiumlist__list {
        padding: 8px 0;
        display: -webkit-box;
        display: flex;
        margin-bottom: 70px;
        flex-wrap: wrap;
        -webkit-box-pack: start;
        justify-content: start
    }
    #stadium .stadiumlist__item {
        width: 31.5%;
        margin-right: 10px
    }
    #stadium .stadiumlist__item:nth-child(3n) {
        margin-right: 0
    }
}
#stadium .stadiumlist__item {
    margin-bottom: 18px
}
#stadium .stadiumlist__item > a {
    display: block;
    position: relative
}
#stadium .stadiumlist__item > a article {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center
}
#stadium .stadiumlist__item > article {
    position: relative;
    display: -webkit-box;
    display: flex
}
#stadium .stadiumlist__item:last-child {
    margin-bottom: 0
}
#stadium .stadiumlist__thumb {
    padding-right: 10px;
    width: 45%
}
@media (min-width:769px) {
    #stadium .stadiumlist__item > a,
    #stadium .stadiumlist__item > article a {
        transition: 0.2s ease
    }
    #stadium .stadiumlist__item > a:hover {
        opacity: .7
    }
    #stadium .stadiumlist__item > article {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-flow: column
    }
    #stadium .stadiumlist__item > article a:hover {
        opacity: 1
    }
    #stadium .stadiumlist__thumb {
        width: 100%;
        padding: 0;
        margin-bottom: 15px;
        height: 100%
    }
}
#stadium .stadiumlist__thumb img {
    width: 100%
}
#stadium .stadiumlist__textwrap {
    width: 55%;
    display: -webkit-box;
    display: flex;
    flex-flow: column;
    -webkit-box-pack: justify;
    justify-content: space-between
}
#stadium .stadiumlist__text {
    word-break: break-all;
    line-height: 1.333333
}
#stadium .stadiumlist__text .title {
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 5px
}
@media (min-width:769px) {
    #stadium .stadiumlist__text,
    #stadium .stadiumlist__textwrap {
        width: 100%
    }
    #stadium .stadiumlist__text .title {
        font-size: 17px;
        height: 3em
    }
}
#stadium .stadiumlist__text .place {
    font-size: 14px;
    color: #999
}
@media (max-width:374px) {
    #stadium .stadiumlist__text .place {
        font-size: 12px
    }
}
#stadium .stadiumlist__btn .detail-btn a {
    display: block;
    position: relative;
    font-size: 13px;
    background-color: #fff;
    border: 1px solid #dcdcdc;
    padding: 3px 6px;
    font-weight: 700;
    color: #e60012;
    transition: 0.5s
}
#stadium .stadiumlist__btn .detail-btn a::after {
    content: '▶︎';
    right: 6px;
    position: absolute;
    font-size: 18px;
    top: 0;
    bottom: 0;
    margin: auto
}
@media (max-width:374px) {
    #stadium .stadiumlist__btn .detail-btn a {
        padding: 2px 12px
    }
    #stadium .stadiumlist__btn .detail-btn a::after {
        font-size: 18px
    }
}
#stadium .stadiumlist__btn .detail-btn a:hover {
    background-color: #e60012;
    color: #fff
}
#stadium .stadiumlist__btn .detail-btn a:hover::after {
    color: #fff
}
#stadium .list-pager {
    text-align: center
}
@media (min-width:769px) {
    #stadium .list-pager {
        margin-top: 50px
    }
}
#stadium .list-pager__list {
    display: inline-block;
    letter-spacing: -0.4em
}
#stadium .list-pager__item {
    display: inline-block;
    vertical-align: middle;
    letter-spacing: normal;
    margin: 0 3px
}
#stadium .list-pager__item a {
    display: block;
    width: 28px;
    height: 28px;
    font-size: 11px;
    line-height: 28px;
    color: #666;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #a0a0a0;
    border-radius: 3px
}
@media (min-width:769px) and (min-width:769px) {
    #stadium .list-pager__item a {
        transition: 0.2s ease
    }
}
#stadium .list-pager__item.is-current a {
    color: #fff;
    background-color: #e60012;
    border-color: #e60012
}
#stadium .article-pager {
    text-align: center;
    margin-top: 30px
}
@media (min-width:769px) {
    #stadium .list-pager__item a {
        width: 46px;
        height: 46px;
        font-size: 18px;
        line-height: 46px;
        border-radius: 5px
    }
    #stadium .list-pager__item a:hover {
        color: #fff;
        background-color: #e60012;
        border-color: #e60012
    }
    #stadium .list-pager__item--arrow a {
        font-size: 12px
    }
    #stadium .article-pager {
        margin-top: 50px
    }
}
#stadium .article-pager__list {
    display: inline-block;
    letter-spacing: -0.4em
}
#stadium .article-pager__item {
    display: inline-block;
    vertical-align: middle;
    letter-spacing: normal;
    margin: 0 8px
}
#stadium .article-pager__item a {
    display: block;
    width: 28px;
    height: 28px;
    font-size: 12px;
    line-height: 28px;
    color: #666;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #a0a0a0;
    border-radius: 3px
}
@media (min-width:769px) {
    #stadium .article-pager__item a {
        width: 46px;
        height: 46px;
        font-size: 16px;
        line-height: 46px;
        border-radius: 5px;
        transition: 0.2s ease
    }
    #stadium .article-pager__item a:hover {
        color: #fff;
        background-color: #e60012;
        border-color: #e60012
    }
    #stadium .article-pager__item--arrow a {
        font-size: 12px
    }
}
#stadium .article-pager__item--back a {
    width: auto;
    height: auto;
    padding: 5px 25px;
    border: none;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(102, 102, 102, .4)
}
@media (min-width:769px) {
    #stadium .article-pager__item--back a {
        padding: 10px 50px
    }
    #stadium.single-post .l-side-column .container {
        padding: 0
    }
    #stadium.single-post .l-side-column .md-popular-keywords {
        padding-top: 0;
        margin-bottom: 40px
    }
}
#stadium .dfp_banner {
    margin-bottom: 20px;
    text-align: center
}
@media (min-width:769px) {
    #stadium .dfp_banner {
        text-align: left
    }
}
#stadium .dfp_banner__head {
    padding-bottom: 0;
    text-align: center
}
@media (min-width:769px) {
    #stadium .dfp_banner__head {
        padding-bottom: 20px;
    }
}
#stadium .stadium-article {
    margin-bottom: 30px
}
@media (max-width:768px) {
    #stadium .stadium-article {
        padding-top: 15px
    }
    #stadium .stadium-article__text+.stadium-article__text {
        margin-top: 10px
    }
}
#stadium .stadium-article__header {
    font-size: 18px;
    line-height: 1.0769;
    margin-bottom: 1em
}
@media (min-width:769px) {
    #stadium .stadium-article .container {
        padding: 0
    }
    #stadium .stadium-article__header {
        font-size: 24px
    }
}
#stadium .stadium-article__header-place {
    font-size: 13px;
    padding-left: 1em;
    font-weight: 400
}
@media (min-width:769px) {
    #stadium .stadium-article__header-place {
        font-size: 16px
    }
}
#stadium .stadium-article__date {
    font-size: 12px;
    color: #999;
    margin-bottom: 10px
}
@media (min-width:769px) {
    #stadium .stadium-article__date {
        font-size: 15px;
        margin-bottom: 25px
    }
}
#stadium .stadium-article__image {
    margin-bottom: 30px;
    position: relative
}
@media (min-width:769px) {
    #stadium .stadium-article__image {
        margin-bottom: 40px
    }
}
#stadium .stadium-article__image .figure {
    margin-bottom: 5px
}
#stadium .stadium-article__image .figure img {
    width: 100%
}
#stadium .stadium-article__image .figure-credit {
    text-align: right;
    font-size: 12px;
    color: #999
}
#stadium .stadium-article__image .caption {
    font-size: 11px;
    color: #999;
    text-align: right
}
#stadium .stadium-article__text {
    font-size: 15px;
    line-height: 1.66666;
    text-indent: 1em
}
#stadium .stadium-article__text+.stadium-article__image {
    margin-top: 15px
}
@media (min-width:769px) {
    #stadium .stadium-article__image .figure {
        margin-bottom: 15px
    }
    #stadium .stadium-article__image .caption {
        font-size: 15px
    }
    #stadium .stadium-article__text {
        font-size: 18px;
        margin-bottom: 30px
    }
    #stadium .stadium-article__text+.stadium-article__text {
        margin-bottom: 30px
    }
    #stadium .stadium-article__text+.stadium-article__image {
        margin-top: 40px
    }
}
#stadium .stadium-article__post-contents {
    font-size: 14px;
    word-break: break-word
}
@media (min-width:769px) {
    #stadium .stadium-article__post-contents {
        font-size: 18px
    }
}
#stadium .stadium-article__post-contents p {
    font-size: 15px;
    line-height: 1.66666;
    text-indent: 1em;
    max-width: 1000px;
    padding: 0 8px;
    margin-right: auto;
    margin-left: auto;
    position: relative
}
@media (max-width:768px) {
    #stadium .stadium-article__post-contents p+p {
        margin-top: 10px
    }
}
@media (min-width:769px) {
    #stadium .stadium-article__post-contents p {
        font-size: 18px;
        margin-bottom: 30px;
        padding: 0
    }
    #stadium .stadium-article__post-contents p+p {
        margin-top: 30px
    }
}
#stadium .stadium-article__post-contents p+.stadium-article__image {
    margin-top: 15px
}
@media (min-width:769px) {
    #stadium .stadium-article__post-contents p+.stadium-article__image {
        margin-top: 40px
    }
}
#stadium .stadium-article__post-contents p+div {
    margin-top: 15px
}
@media (min-width:769px) {
    #stadium .stadium-article__post-contents p+div {
        margin-top: 40px
    }
}
@media (max-width:768px) {
    #stadium .stadium-article__post-contents img+p {
        margin-top: 10px
    }
}
@media (min-width:769px) {
    #stadium .stadium-article__post-contents img+p {
        margin-top: 30px
    }
}
#stadium .stadium-article__post-contents div+div {
    margin-top: 15px
}
#stadium .stadium-article__post-contents img {
    max-width: 100%;
    padding: 0 8px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10px;
    display: block
}
@media (min-width:769px) {
    #stadium .stadium-article__post-contents div+div {
        margin-top: 40px
    }
    #stadium .stadium-article__post-contents img {
        margin-bottom: 30px;
        padding: 0 15px
    }
}
#stadium .stadium-article__post-contents .wp-caption {
    width: auto !important;
    display: block;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 8px;
    margin-bottom: 10px
}
@media (min-width:769px) {
    #stadium .stadium-article__post-contents .wp-caption {
        margin-bottom: 30px;
        padding: 0
    }
}
#stadium .stadium-article__post-contents .wp-caption img {
    max-width: 100%;
    display: block;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    margin-bottom: 0
}
#stadium .stadium-article__post-contents .wp-caption .wp-caption-text {
    font-size: 12px;
    color: #999;
    text-indent: 0;
    margin-top: 5px
}
@media (min-width:769px) {
    #stadium .stadium-article__post-contents .wp-caption .wp-caption-text {
        font-size: 15px;
        margin-top: 15px
    }
}
#stadium .stadium-article__post-contents div.caption {
    font-size: 12px;
    color: #999;
    text-indent: 0;
    margin-top: -5px !important;
    margin-bottom: 10px
}
@media (min-width:769px) {
    #stadium .stadium-article__post-contents div.caption {
        font-size: 15px;
        margin-top: -15px !important;
        margin-bottom: 30px
    }
}
#stadium .stadium-article__post-contents h1 {
    margin: 2.5em 0 1.5em;
    font-size: 112%
}
#stadium .stadium-article__post-contents h2 {
    margin: 2em 0 1em;
    font-size: 105%
}
#stadium .stadium-article__post-contents h3 {
    margin: 1.5em 0 0.5em;
    font-size: 100%
}
#stadium .stadium-article__post-contents h4,
#stadium .stadium-article__post-contents h5,
#stadium .stadium-article__post-contents h6 {
    margin: 1.5em 0 0.5em;
    font-size: 100%;
    font-weight: 400
}
#stadium .stadium-article__post-contents h1,
#stadium .stadium-article__post-contents h2,
#stadium .stadium-article__post-contents h3,
#stadium .stadium-article__post-contents h4,
#stadium .stadium-article__post-contents h5,
#stadium .stadium-article__post-contents h6 {
    padding: 0 8px
}
@media (min-width:769px) {
    #stadium .stadium-article__post-contents h1,
    #stadium .stadium-article__post-contents h2,
    #stadium .stadium-article__post-contents h3,
    #stadium .stadium-article__post-contents h4,
    #stadium .stadium-article__post-contents h5,
    #stadium .stadium-article__post-contents h6 {
        padding: 0
    }
}
#stadium .stadium-article .stadium-article-popular-keywords {
    margin-top: 5px;
    margin-bottom: 15px
}
#stadium .stadium-article__table {
    width: 100%
}
#stadium .stadium-article__t-item {
    display: -webkit-box;
    display: flex;
    font-size: 15px;
    padding-bottom: 20px
}
#stadium .stadium-article__t-left {
    width: 6em
}
@media (min-width:769px) {
    #stadium .stadium-article__t-item {
        font-size: 18px;
        padding-bottom: 30px
    }
    #stadium .stadium-article__t-left {
        width: 25%
    }
}
#stadium .stadium-article__t-right {
    width: 70%
}
#stadium .stadium-compration {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: solid 1px #e60012
}
#stadium .stadium-compration__list {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center
}
#stadium .stadium-compration__date {
    background-color: #e60012;
    font-size: 16px;
    color: #fff;
    padding: 0.6em 0.5em;
    text-align: center;
    display: inline;
    min-width: 76.047px;
}
@media (min-width:769px) {
    #stadium .stadium-article__t-right {
        width: 75%
    }
    #stadium .stadium-compration__date {
        font-size: 20px;
        padding: 1em;
        min-width: 110.063px;
    }
    #stadium .stadium-compration__week {
        font-size: 12px
    }
}
#stadium .stadium-compration__week {
    font-size: 12px
}
#stadium .stadium-compration__time {
    font-size: 13px;
    line-height: 1.5
}
@media (min-width:769px) {
    #stadium .stadium-compration__time {
        font-size: 13px;
        line-height: 1.5
    }
}
#stadium .stadium-compration__poor {
    font-size: 14px
}
#stadium .stadium-compration__company {
    font-size: 11px;
    max-width: 80px;
    text-align: center;
    padding-top: 1em
}
#stadium .stadium-compration__company .blue {
    text-decoration-color: #00f;
    text-decoration-style: solid;
    text-decoration-line: underline;
    color: #00f;
}
#stadium .stadium-compration__company img {
    margin-bottom: 5px;
    border: 1px solid black;
}
#stadium .stadium-compration__hyphen {
    border-top: solid 1px #e60012;
    width: 3%
}
#stadium .news-article-keywords {
    margin-bottom: 20px
}
@media (min-width:769px) {
    #stadium .stadium-compration__company {
        font-size: 12px;
        max-width: 90px;
        text-align: center;
        padding-top: 1em
    }
    #stadium .news-article-keywords {
        margin-top: 30px;
        margin-bottom: 30px
    }
}
#stadium .news-article-keywords__title {
    font-size: 13px;
    margin-bottom: 8px
}
@media (min-width:769px) {
    #stadium .news-article-keywords__title {
        font-size: 16px;
        margin-bottom: 15px
    }
    #rules .ruleslist .container{
        padding: 0
    }
}
#stadium .news-article-keywords .md-popular-keywords__list {
    margin-left: -3px
}
#stadium .news-article-keywords .md-popular-keywords__words {
    background-color: transparent;
    padding: 0
}
#stadium .news-sns {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 30px auto
}
#stadium .news-sns__item a {
    width: 60px;
    height: 60px;
    display: block
}
#stadium .news-sns__item a span {
    display: block;
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    margin: 0 auto
}
#stadium .news-sns__item a .icon-facebook {
    background-image: url('/sports/rugby/2019/assets/images/common/icons/ico_fb-color.jpg');
    background-size: contain
}
#stadium .news-sns__item a .icon-twitter {
    background-image: url('/sports/rugby/2019/assets/images/common/icons/ico_tw-color.jpg');
    background-size: contain
}
#stadium .news-sns__item a .icon-line {
    background-image: url('/sports/rugby/2019/assets/images/common/icons/ico_ln-color.jpg');
    background-size: contain
}

#stadium .stadium-article__related-article {
  margin-top: 40px;
}

@media (min-width: 769px) {
  #stadium .stadium-article__related-article {
    margin-top: 80px;
  }
}

#stadium .stadium-article__related-article__header {
  margin-bottom: 12px;
  position: relative;
  padding-top: 20px;
  font-weight: bold;
}

@media (min-width: 769px) {
  #stadium .stadium-article__related-article__header {
    padding-bottom: 16px;
    margin-bottom: 20px;
    padding-top: 20px;
  }
}

#stadium .stadium-article__related-article__header span {
  display: block;
  font-weight: 100;
  font-size: 16px;
  line-height: 1;
  font-weight: bold;
}

@media (min-width: 769px) {
  #stadium .stadium-article__related-article__header span {
    font-size: 18px;
  }
}

#stadium .stadium-article__related-article__header::after {
  content: '';
  display: block;
  width: calc(100% + 16px);
  height: 1px;
  background-color: #000;
  position: absolute;
  top: 0;
  left: -8px;
  z-index: 1;
}

@media (min-width: 769px) {
  #stadium .stadium-article__related-article__header::after {
    width: 100%;
    left: 0;
  }
}

#stadium .stadium-article__related-article__list li {
  font-size: 14px;
  line-height: 1.4;
  color: blue;
  border-top: 1px dashed #d3d3d3;
  position: relative;
}

@media (min-width: 769px) {
  #stadium .stadium-article__related-article__list li {
    line-height: 3;
  }
}

#stadium .stadium-article__related-article__list li::before {
  content: "";
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 5px solid #bebebe;
  position: absolute;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
}

#stadium .stadium-article__related-article__list li a {
  margin-left: 16px;
  display: inline-block;
}

#stadium .stadium-article__related-article__list li:last-child {
  border-bottom: 1px dashed #d3d3d3;
}

@media (max-width:768px) {
    #rules .rules-top-keywords {
        border-top: 1px solid #ccc
    }
}
#rules .ruleslist__header {
    padding-bottom: 8px;
    margin-bottom: 12px;
    position: relative;
    padding-top: 20px
}
#rules .ruleslist__header span {
    display: block;
    font-weight: 100;
    font-size: 16px;
    line-height: 1
}
#rules .ruleslist__header::after {
    content: '';
    display: block;
    width: calc(100% + 16px);
    height: 1px;
    background-color: #ccc;
    position: absolute;
    bottom: 0;
    left: -8px;
    z-index: 1
}
@media (min-width:769px) {
    #rules .ruleslist__header {
        padding-bottom: 16px;
        margin-bottom: 20px;
        padding-top: 0
    }
    #rules .ruleslist__header span {
        font-size: 22px
    }
    #rules .ruleslist__header::after {
        width: 100%;
        left: 0
    }
}
#rules .ruleslist__txt {
    font-size: 15px;
    padding-bottom: 25px
}
#rules .ruleslist__list {
    margin-bottom: 35px
}
@media (min-width:769px) {
    #rules .ruleslist__list {
        padding: 8px 0;
        display: -webkit-box;
        display: flex;
        margin-bottom: 70px;
        flex-wrap: wrap;
        -webkit-box-pack: start;
        justify-content: start
    }
    #rules .ruleslist__item {
        width: 32%;
        margin-right: 10px
    }
    #rules .ruleslist__item:nth-child(3n) {
        margin-right: 0
    }
}
#rules .ruleslist__item {
    margin-bottom: 18px
}
#rules .ruleslist__item > a {
    display: block;
    position: relative
}
#rules .ruleslist__item > a article {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center
}
#rules .ruleslist__item > article {
    position: relative;
    display: -webkit-box;
    display: flex
}
#rules .ruleslist__item:last-child {
    margin-bottom: 0
}
#rules .ruleslist__thumb {
    padding-right: 10px;
    width: 45%
}
@media (min-width:769px) {
    #rules .ruleslist__item > a,
    #rules .ruleslist__item > article a {
        transition: 0.2s ease
    }
    #rules .ruleslist__item > a:hover {
        opacity: .7
    }
    #rules .ruleslist__item > article {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-flow: column
    }
    #rules .ruleslist__item > article a:hover {
        opacity: 1
    }
    #rules .ruleslist__thumb {
        width: 100%;
        padding: 0;
        margin-bottom: 15px;
        height: 100%
    }
}
#rules .ruleslist__thumb img {
    width: 100%
}
#rules .ruleslist__textwrap {
    width: 55%;
    display: -webkit-box;
    display: flex;
    flex-flow: column;
    -webkit-box-pack: justify;
    justify-content: space-between
}
#rules .ruleslist__text {
    word-break: break-all;
    line-height: 1.333333
}
#rules .ruleslist__text .title {
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 5px
}
@media (min-width:769px) {
    #rules .ruleslist__text,
    #rules .ruleslist__textwrap {
        width: 100%
    }
    #rules .ruleslist__text .title {
        font-size: 17px;
        height: 3em
    }
}
#rules .ruleslist__text .place {
    font-size: 14px;
    color: #999
}
@media (max-width:374px) {
    #rules .ruleslist__text .place {
        font-size: 12px
    }
}
#rules .ruleslist__btn .detail-btn a {
    display: block;
    position: relative;
    font-size: 13px;
    background-color: #fff;
    border: 1px solid #dcdcdc;
    padding: 3px 6px;
    font-weight: 700;
    color: #e60012;
    transition: 0.5s
}
#rules .ruleslist__btn .detail-btn a::after {
    content: '▶︎';
    right: 6px;
    position: absolute;
    font-size: 18px;
    top: 0;
    bottom: 0;
    margin: auto
}
@media (max-width:374px) {
    #rules .ruleslist__btn .detail-btn a {
        padding: 2px 12px
    }
    #rules .ruleslist__btn .detail-btn a::after {
        font-size: 18px
    }
}
#rules .ruleslist__btn .detail-btn a:hover {
    background-color: #e60012;
    color: #fff
}
#rules .ruleslist__btn .detail-btn a:hover::after {
    color: #fff
}
#rules .list-pager {
    text-align: center
}
@media (min-width:769px) {
    #rules .list-pager {
        margin-top: 50px
    }
}
#rules .list-pager__list {
    display: inline-block;
    letter-spacing: -0.4em
}
#rules .list-pager__item {
    display: inline-block;
    vertical-align: middle;
    letter-spacing: normal;
    margin: 0 3px
}
#rules .list-pager__item a {
    display: block;
    width: 28px;
    height: 28px;
    font-size: 11px;
    line-height: 28px;
    color: #666;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #a0a0a0;
    border-radius: 3px
}
@media (min-width:769px) and (min-width:769px) {
    #rules .list-pager__item a {
        transition: 0.2s ease
    }
}
#rules .list-pager__item.is-current a {
    color: #fff;
    background-color: #e60012;
    border-color: #e60012
}
#rules .article-pager {
    text-align: center;
    margin-top: 30px
}
@media (min-width:769px) {
    #rules .list-pager__item a {
        width: 46px;
        height: 46px;
        font-size: 18px;
        line-height: 46px;
        border-radius: 5px
    }
    #rules .list-pager__item a:hover {
        color: #fff;
        background-color: #e60012;
        border-color: #e60012
    }
    #rules .list-pager__item--arrow a {
        font-size: 12px
    }
    #rules .article-pager {
        margin-top: 50px
    }
}
#rules .article-pager__list {
    display: inline-block;
    letter-spacing: -0.4em
}
#rules .article-pager__item {
    display: inline-block;
    vertical-align: middle;
    letter-spacing: normal;
    margin: 0 8px
}
#rules .article-pager__item a {
    display: block;
    width: 28px;
    height: 28px;
    font-size: 12px;
    line-height: 28px;
    color: #666;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #a0a0a0;
    border-radius: 3px
}
@media (min-width:769px) {
    #rules .article-pager__item a {
        width: 46px;
        height: 46px;
        font-size: 16px;
        line-height: 46px;
        border-radius: 5px;
        transition: 0.2s ease
    }
    #rules .article-pager__item a:hover {
        color: #fff;
        background-color: #e60012;
        border-color: #e60012
    }
    #rules .article-pager__item--arrow a {
        font-size: 12px
    }
}
#rules .article-pager__item--back a {
    width: auto;
    height: auto;
    padding: 5px 25px;
    border: none;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(102, 102, 102, .4)
}
@media (min-width:769px) {
    #rules .article-pager__item--back a {
        padding: 10px 50px
    }
    #rules.single-post .l-side-column .container {
        padding: 0
    }
    #rules.single-post .l-side-column .md-popular-keywords {
        padding-top: 0;
        margin-bottom: 40px
    }
}
#rules .dfp_banner {
    margin-bottom: 20px;
    text-align: center
}
@media (min-width:769px) {
    #rules .dfp_banner {
        text-align: left
    }
}
#rules .dfp_banner__head {
    padding-bottom: 0;
    text-align: center
}
@media (min-width:769px) {
    #rules .dfp_banner__head {
        padding-bottom: 20px;
    }
}
@media (max-width:768px) {
    #rules .rules-article {
        border-top: 1px solid #ccc;
        padding-top: 15px
    }
    #rules .rules-article__text+.rules-article__text {
        margin-top: 10px
    }
}
#rules .rules-article__header {
    font-size: 18px;
    line-height: 1.0769;
    margin-bottom: 1em
}
@media (min-width:769px) {
    #rules .rules-article .container {
        padding: 0
    }
    #rules .rules-article__header {
        font-size: 24px
    }
}
#rules .rules-article__header-place {
    font-size: 13px;
    padding-left: 1em;
    font-weight: 400
}
@media (min-width:769px) {
    #rules .rules-article__header-place {
        font-size: 16px
    }
}
#rules .rules-article__date {
    font-size: 12px;
    color: #999;
    margin-bottom: 10px
}
@media (min-width:769px) {
    #rules .rules-article__date {
        font-size: 15px;
        margin-bottom: 25px
    }
}
#rules .rules-article__image {
    margin-bottom: 10px;
    position: relative;
    padding-bottom: 57%
}
@media (min-width:769px) {
    #rules .rules-article__image {
        margin-bottom: 30px;
        padding-bottom: 57%
    }
}
#rules .rules-article__image .figure {
    margin-bottom: 5px
}
#rules .rules-article__image .figure img {
    width: 100%
}
#rules .rules-article__image .caption {
    font-size: 11px;
    color: #999;
    text-align: right
}
#rules .rules-article__text {
    font-size: 15px;
    line-height: 1.66666;
    text-indent: 0
}
#rules .rules-article__text+.rules-article__image {
    margin-top: 15px
}
@media (min-width:769px) {
    #rules .rules-article__image .figure {
        margin-bottom: 15px
    }
    #rules .rules-article__image .caption {
        font-size: 15px
    }
    #rules .rules-article__text {
        font-size: 18px;
        margin-bottom: 30px
    }
    #rules .rules-article__text+.rules-article__text {
        margin-bottom: 30px
    }
    #rules .rules-article__text+.rules-article__image {
        margin-top: 40px
    }
}
#rules .rules-article__post-contents {
    font-size: 14px;
    word-break: break-word
}
@media (min-width:769px) {
    #rules .rules-article__post-contents {
        font-size: 18px
    }
}
#rules .rules-article__post-contents p {
    font-size: 15px;
    line-height: 1.66666;
    text-indent: 1em;
    max-width: 1000px;
    padding: 0 8px;
    margin-right: auto;
    margin-left: auto;
    position: relative
}
@media (max-width:768px) {
    #rules .rules-article__post-contents p+p {
        margin-top: 10px
    }
}
@media (min-width:769px) {
    #rules .rules-article__post-contents p {
        font-size: 18px;
        margin-bottom: 30px;
        padding: 0
    }
    #rules .rules-article__post-contents p+p {
        margin-top: 30px
    }
}
#rules .rules-article__post-contents p+.rules-article__image {
    margin-top: 15px
}
@media (min-width:769px) {
    #rules .rules-article__post-contents p+.rules-article__image {
        margin-top: 40px
    }
}
#rules .rules-article__post-contents p+div {
    margin-top: 15px
}
@media (min-width:769px) {
    #rules .rules-article__post-contents p+div {
        margin-top: 40px
    }
}
@media (max-width:768px) {
    #rules .rules-article__post-contents img+p {
        margin-top: 10px
    }
    #event .event-top-keywords {
        border-top: 1px solid #ccc
    }
}
@media (min-width:769px) {
    #rules .rules-article__post-contents img+p {
        margin-top: 30px
    }
}
#rules .rules-article__post-contents div+div {
    margin-top: 15px
}
#rules .rules-article__post-contents img {
    max-width: 100%;
    padding: 0 8px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10px;
    display: block
}
@media (min-width:769px) {
    #rules .rules-article__post-contents div+div {
        margin-top: 40px
    }
    #rules .rules-article__post-contents img {
        margin-bottom: 30px;
        padding: 0 15px
    }
}
#rules .rules-article__post-contents .wp-caption {
    width: auto !important;
    display: block;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 8px;
    margin-bottom: 10px
}
@media (min-width:769px) {
    #rules .rules-article__post-contents .wp-caption {
        margin-bottom: 30px;
        padding: 0
    }
}
#rules .rules-article__post-contents .wp-caption img {
    max-width: 100%;
    display: block;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    margin-bottom: 0
}
#rules .rules-article__post-contents .wp-caption .wp-caption-text {
    font-size: 12px;
    color: #999;
    text-indent: 0;
    margin-top: 5px
}
@media (min-width:769px) {
    #rules .rules-article__post-contents .wp-caption .wp-caption-text {
        font-size: 15px;
        margin-top: 15px
    }
}
#rules .rules-article__post-contents div.caption {
    font-size: 12px;
    color: #999;
    text-indent: 0;
    margin-top: -5px !important;
    margin-bottom: 10px
}
@media (min-width:769px) {
    #rules .rules-article__post-contents div.caption {
        font-size: 15px;
        margin-top: -15px !important;
        margin-bottom: 30px
    }
}
#rules .rules-article__post-contents h1 {
    margin: 2.5em 0 1.5em;
    font-size: 112%
}
#rules .rules-article__post-contents h2 {
    margin: 2em 0 1em;
    font-size: 105%
}
#rules .rules-article__post-contents h3 {
    margin: 1.5em 0 0.5em;
    font-size: 100%
}
#rules .rules-article__post-contents h4,
#rules .rules-article__post-contents h5,
#rules .rules-article__post-contents h6 {
    margin: 1.5em 0 0.5em;
    font-size: 100%;
    font-weight: 400
}
#rules .rules-article__post-contents h1,
#rules .rules-article__post-contents h2,
#rules .rules-article__post-contents h3,
#rules .rules-article__post-contents h4,
#rules .rules-article__post-contents h5,
#rules .rules-article__post-contents h6 {
    padding: 0 8px
}
@media (min-width:769px) {
    #rules .rules-article__post-contents h1,
    #rules .rules-article__post-contents h2,
    #rules .rules-article__post-contents h3,
    #rules .rules-article__post-contents h4,
    #rules .rules-article__post-contents h5,
    #rules .rules-article__post-contents h6 {
        padding: 0
    }
}
#rules .rules-article .rules-article-popular-keywords {
    margin-top: 5px;
    margin-bottom: 15px
}
#rules .rules-article__table {
    width: 100%
}
#rules .rules-article__t-item {
    display: -webkit-box;
    display: flex;
    font-size: 15px;
    padding-bottom: 30px
}
#rules .rules-article__t-left {
    width: 6em
}
@media (min-width:769px) {
    #rules .rules-article__t-item {
        font-size: 18px
    }
    #rules .rules-article__t-left {
        width: 25%
    }
}
#rules .rules-article__t-right {
    width: 70%
}
#rules .news-article-keywords {
    margin-bottom: 20px
}
@media (min-width:769px) {
    #rules .rules-article__t-right {
        width: 75%
    }
    #rules .news-article-keywords {
        margin-top: 30px;
        margin-bottom: 30px
    }
}
#rules .news-article-keywords__title {
    font-size: 13px;
    margin-bottom: 8px
}
@media (min-width:769px) {
    #rules .news-article-keywords__title {
        font-size: 16px;
        margin-bottom: 15px
    }
    #event .eventlist .container {
        padding: 0
    }
}
#rules .news-article-keywords .md-popular-keywords__list {
    margin-left: -3px
}
#rules .news-article-keywords .md-popular-keywords__words {
    background-color: transparent;
    padding: 0
}
#rules .news-sns {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 30px auto
}
#rules .news-sns__item a {
    width: 60px;
    height: 60px;
    display: block
}
#rules .news-sns__item a span {
    display: block;
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    margin: 0 auto
}
#rules .news-sns__item a .icon-facebook {
    background-image: url('/sports/rugby/2019/assets/images/common/icons/ico_fb-color.jpg');
    background-size: contain
}
#rules .news-sns__item a .icon-twitter {
    background-image: url('/sports/rugby/2019/assets/images/common/icons/ico_tw-color.jpg');
    background-size: contain
}
#rules .news-sns__item a .icon-line {
    background-image: url('/sports/rugby/2019/assets/images/common/icons/ico_ln-color.jpg');
    background-size: contain
}
#event .eventlist__header {
    padding-bottom: 8px;
    margin-bottom: 12px;
    position: relative;
    padding-top: 20px
}
#event .eventlist__header span {
    display: block;
    font-weight: 100;
    font-size: 16px;
    line-height: 1
}
#event .eventlist__header::after {
    content: '';
    display: block;
    width: calc(100% + 16px);
    height: 1px;
    background-color: #ccc;
    position: absolute;
    bottom: 0;
    left: -8px;
    z-index: 1
}
@media (min-width:769px) {
    #event .eventlist__header {
        padding-bottom: 16px;
        margin-bottom: 20px;
        padding-top: 0
    }
    #event .eventlist__header span {
        font-size: 22px
    }
    #event .eventlist__header::after {
        width: 100%;
        left: 0
    }
}
#event .eventlist__txt {
    font-size: 15px;
    padding-bottom: 25px
}
#event .eventlist__list {
    margin-bottom: 35px
}
@media (min-width:769px) {
    #event .eventlist__list {
        padding: 8px 0;
        display: -webkit-box;
        display: flex;
        margin-bottom: 70px;
        flex-wrap: wrap;
        -webkit-box-pack: start;
        justify-content: start
    }
    #event .eventlist__item {
        width: 31.5%;
        margin-right: 10px
    }
    #event .eventlist__item:nth-child(3n) {
        margin-right: 0
    }
}
#event .eventlist__item {
    margin-bottom: 18px
}
#event .eventlist__item > a {
    display: block;
    position: relative
}
#event .eventlist__item > a article {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center
}
#event .eventlist__item > article {
    position: relative;
    display: -webkit-box;
    display: flex
}
#event .eventlist__item:last-child {
    margin-bottom: 0
}
#event .eventlist__thumb {
    padding-right: 10px;
    width: 45%
}
@media (min-width:769px) {
    #event .eventlist__item > a,
    #event .eventlist__item > article a {
        transition: 0.2s ease
    }
    #event .eventlist__item > a:hover {
        opacity: .7
    }
    #event .eventlist__item > article {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-flow: column
    }
    #event .eventlist__item > article a:hover {
        opacity: 1
    }
    #event .eventlist__thumb {
        width: 100%;
        padding: 0;
        margin-bottom: 15px;
        height: 100%
    }
}
#event .eventlist__thumb img {
    width: 100%
}
#event .eventlist__textwrap {
    width: 55%;
    display: -webkit-box;
    display: flex;
    flex-flow: column;
    -webkit-box-pack: justify;
    justify-content: space-between
}
#event .eventlist__text {
    word-break: break-all;
    line-height: 1.333333
}
#event .eventlist__text .title {
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 5px
}
@media (min-width:769px) {
    #event .eventlist__text,
    #event .eventlist__textwrap {
        width: 100%
    }
    #event .eventlist__text .title {
        font-size: 17px;
        height: 3em
    }
}
#event .eventlist__text .place {
    font-size: 14px;
    color: #999
}
@media (max-width:374px) {
    #event .eventlist__text .place {
        font-size: 12px
    }
}
#event .eventlist__btn .detail-btn a {
    display: block;
    position: relative;
    font-size: 13px;
    background-color: #fff;
    border: 1px solid #000;
    padding: 3px 6px;
    font-weight: 700;
    color: #e60012;
    transition: 0.5s
}
#event .eventlist__btn .detail-btn a::after {
    content: '▶︎';
    right: 6px;
    position: absolute;
    font-size: 18px;
    top: 0;
    bottom: 0;
    margin: auto
}
@media (max-width:374px) {
    #event .eventlist__btn .detail-btn a {
        padding: 2px 12px
    }
    #event .eventlist__btn .detail-btn a::after {
        font-size: 18px
    }
}
#event .eventlist__btn .detail-btn a:hover {
    background-color: #e60012;
    color: #fff
}
#event .eventlist__btn .detail-btn a:hover::after {
    color: #fff
}
#event .eventlist .other-page__wrap {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    align-self: center;
    -webkit-box-align: center;
    align-items: center
}
#event .eventlist .other-page__next,
#event .eventlist .other-page__prev {
    font-size: 22px;
    color: #e60012
}
#event .eventlist .other-page__month {
    font-size: 18px;
    margin: 0 0.5em
}
#event .eventlist .event-cont {
    padding: 1.5rem 0
}
#event .eventlist .event-cont:first-child {
    border-top: none
}
#event .eventlist .event-cont:last-child {
    border-bottom: none
}
#event .eventlist .event-cont__ttl a {
    font-size: 16px;
    font-weight: 700;
    text-decoration: underline;
    color: #00f
}
@media (min-width:769px) {
    #event .eventlist .event-cont {
        padding: 3rem 0
    }
    #event .eventlist .event-cont__ttl a {
        font-size: 20px
    }
}
#event .eventlist .event-cont__date {
    font-size: 13px;
    line-height: 1.8
}
@media (min-width:769px) {
    #event .eventlist .event-cont__date {
        font-size: 14px
    }
}
#event .eventlist .event-cont__place {
    font-size: 16px;
    line-height: 1.8
}
@media (min-width:769px) {
    #event .eventlist .event-cont__place {
        font-size: 20px
    }
}
#event .eventlist .event-cont__txt {
    font-size: 15px;
    padding: 1em;
    background: #eee;
    margin-top: 1em
}
#event .list-pager {
    text-align: center
}
@media (min-width:769px) {
    #event .list-pager {
        margin-top: 50px
    }
}
#event .list-pager__list {
    display: inline-block;
    letter-spacing: -0.4em
}
#event .list-pager__item {
    display: inline-block;
    vertical-align: middle;
    letter-spacing: normal;
    margin: 0 3px
}
#event .list-pager__item a {
    display: block;
    width: 28px;
    height: 28px;
    font-size: 11px;
    line-height: 28px;
    color: #666;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #a0a0a0;
    border-radius: 3px
}
@media (min-width:769px) and (min-width:769px) {
    #event .list-pager__item a {
        transition: 0.2s ease
    }
}
#event .list-pager__item.is-current a {
    color: #fff;
    background-color: #e60012;
    border-color: #e60012
}
#event .article-pager {
    text-align: center;
    margin-top: 30px
}
@media (min-width:769px) {
    #event .list-pager__item a {
        width: 46px;
        height: 46px;
        font-size: 18px;
        line-height: 46px;
        border-radius: 5px
    }
    #event .list-pager__item a:hover {
        color: #fff;
        background-color: #e60012;
        border-color: #e60012
    }
    #event .list-pager__item--arrow a {
        font-size: 12px
    }
    #event .article-pager {
        margin-top: 50px
    }
}
#event .article-pager__list {
    display: inline-block;
    letter-spacing: -0.4em
}
#event .article-pager__item {
    display: inline-block;
    vertical-align: middle;
    letter-spacing: normal;
    margin: 0 8px
}
#event .article-pager__item a {
    display: block;
    width: 28px;
    height: 28px;
    font-size: 12px;
    line-height: 28px;
    color: #666;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #a0a0a0;
    border-radius: 3px
}
@media (min-width:769px) {
    #event .article-pager__item a {
        width: 46px;
        height: 46px;
        font-size: 16px;
        line-height: 46px;
        border-radius: 5px;
        transition: 0.2s ease
    }
    #event .article-pager__item a:hover {
        color: #fff;
        background-color: #e60012;
        border-color: #e60012
    }
    #event .article-pager__item--arrow a {
        font-size: 12px
    }
}
#event .article-pager__item--back a {
    width: auto;
    height: auto;
    padding: 5px 25px;
    border: none;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(102, 102, 102, .4)
}
@media (min-width:769px) {
    #event .article-pager__item--back a {
        padding: 10px 50px
    }
    #event.single-post .l-side-column .container {
        padding: 0
    }
    #event.single-post .l-side-column .md-popular-keywords {
        padding-top: 0;
        margin-bottom: 40px
    }
}
#event .dfp_banner {
    margin-bottom: 20px;
    text-align: center
}
@media (min-width:769px) {
    #event .dfp_banner {
        text-align: left
    }
}
#event .dfp_banner__head {
    padding-bottom: 0;
    text-align: center
}
@media (min-width:769px) {
    #event .dfp_banner__head {
        padding-bottom: 20px;
    }
}
#event .event-article {
    margin-bottom: 30px
}
@media (max-width:768px) {
    #event .event-article {
        padding-top: 15px
    }
    #event .event-article__text+.event-article__text {
        margin-top: 10px
    }
}
#event .event-article__header {
    font-size: 18px;
    line-height: 1.0769;
    margin-bottom: 1em
}
@media (min-width:769px) {
    #event .event-article .container {
        padding: 0
    }
    #event .event-article__header {
        font-size: 24px
    }
}
#event .event-article__header-place {
    font-size: 13px;
    padding-left: 1em;
    font-weight: 400
}
@media (min-width:769px) {
    #event .event-article__header-place {
        font-size: 16px
    }
}
#event .event-article__date {
    font-size: 12px;
    color: #999;
    margin-bottom: 10px
}
@media (min-width:769px) {
    #event .event-article__date {
        font-size: 15px;
        margin-bottom: 25px
    }
}
#event .event-article__image {
    margin-bottom: 30px;
    position: relative
}
@media (min-width:769px) {
    #event .event-article__image {
        margin-bottom: 40px
    }
}
#event .event-article__image .figure {
    margin-bottom: 5px
}
#event .event-article__image .figure img {
    width: 100%
}
#event .event-article__image .caption {
    font-size: 11px;
    color: #999;
    text-align: right
}
#event .event-article__text {
    font-size: 15px;
    line-height: 1.66666;
    margin-bottom: 5px
}
#event .event-article__text+.event-article__image {
    margin-top: 15px
}
@media (min-width:769px) {
    #event .event-article__image .figure {
        margin-bottom: 15px
    }
    #event .event-article__image .caption {
        font-size: 15px
    }
    #event .event-article__text {
        font-size: 18px;
        margin-bottom: 30px
    }
    #event .event-article__text+.event-article__text {
        margin-bottom: 30px
    }
    #event .event-article__text+.event-article__image {
        margin-top: 40px
    }
}
#event .event-article__post-contents {
    font-size: 14px;
    word-break: break-word
}
@media (min-width:769px) {
    #event .event-article__post-contents {
        font-size: 18px
    }
}
#event .event-article__post-contents p {
    font-size: 15px;
    line-height: 1.66666;
    text-indent: 1em;
    max-width: 1000px;
    padding: 0 8px;
    margin-right: auto;
    margin-left: auto;
    position: relative
}
@media (max-width:768px) {
    #event .event-article__post-contents p+p {
        margin-top: 10px
    }
}
@media (min-width:769px) {
    #event .event-article__post-contents p {
        font-size: 18px;
        margin-bottom: 30px;
        padding: 0
    }
    #event .event-article__post-contents p+p {
        margin-top: 30px
    }
}
#event .event-article__post-contents p+.event-article__image {
    margin-top: 15px
}
@media (min-width:769px) {
    #event .event-article__post-contents p+.event-article__image {
        margin-top: 40px
    }
}
#event .event-article__post-contents p+div {
    margin-top: 15px
}
@media (min-width:769px) {
    #event .event-article__post-contents p+div {
        margin-top: 40px
    }
}
@media (max-width:768px) {
    #event .event-article__post-contents img+p {
        margin-top: 10px
    }
}
@media (min-width:769px) {
    #event .event-article__post-contents img+p {
        margin-top: 30px
    }
}
#event .event-article__post-contents div+div {
    margin-top: 15px
}
#event .event-article__post-contents img {
    max-width: 100%;
    padding: 0 8px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10px;
    display: block
}
@media (min-width:769px) {
    #event .event-article__post-contents div+div {
        margin-top: 40px
    }
    #event .event-article__post-contents img {
        margin-bottom: 30px;
        padding: 0 15px
    }
}
#event .event-article__post-contents .wp-caption {
    width: auto !important;
    display: block;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 8px;
    margin-bottom: 10px
}
@media (min-width:769px) {
    #event .event-article__post-contents .wp-caption {
        margin-bottom: 30px;
        padding: 0
    }
}
#event .event-article__post-contents .wp-caption img {
    max-width: 100%;
    display: block;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    margin-bottom: 0
}
#event .event-article__post-contents .wp-caption .wp-caption-text {
    font-size: 12px;
    color: #999;
    text-indent: 0;
    margin-top: 5px
}
@media (min-width:769px) {
    #event .event-article__post-contents .wp-caption .wp-caption-text {
        font-size: 15px;
        margin-top: 15px
    }
}
#event .event-article__post-contents div.caption {
    font-size: 12px;
    color: #999;
    text-indent: 0;
    margin-top: -5px !important;
    margin-bottom: 10px
}
@media (min-width:769px) {
    #event .event-article__post-contents div.caption {
        font-size: 15px;
        margin-top: -15px !important;
        margin-bottom: 30px
    }
}
#event .event-article__post-contents h1 {
    margin: 2.5em 0 1.5em;
    font-size: 112%
}
#event .event-article__post-contents h2 {
    margin: 2em 0 1em;
    font-size: 105%
}
#event .event-article__post-contents h3 {
    margin: 1.5em 0 0.5em;
    font-size: 100%
}
#event .event-article__post-contents h4,
#event .event-article__post-contents h5,
#event .event-article__post-contents h6 {
    margin: 1.5em 0 0.5em;
    font-size: 100%;
    font-weight: 400
}
#event .event-article__post-contents h1,
#event .event-article__post-contents h2,
#event .event-article__post-contents h3,
#event .event-article__post-contents h4,
#event .event-article__post-contents h5,
#event .event-article__post-contents h6 {
    padding: 0 8px
}
@media (min-width:769px) {
    #event .event-article__post-contents h1,
    #event .event-article__post-contents h2,
    #event .event-article__post-contents h3,
    #event .event-article__post-contents h4,
    #event .event-article__post-contents h5,
    #event .event-article__post-contents h6 {
        padding: 0
    }
}
#event .event-article .event-article-popular-keywords {
    margin-top: 5px;
    margin-bottom: 15px
}
#event .event-article__table {
    width: 100%
}
#event .event-article__t-item {
    display: -webkit-box;
    display: flex;
    font-size: 15px;
    padding-bottom: 20px
}
#event .event-article__t-left {
    width: 6em
}
@media (min-width:769px) {
    #event .event-article__t-item {
        font-size: 18px;
        padding-bottom: 30px
    }
    #event .event-article__t-left {
        width: 25%
    }
}
#event .event-article__t-right {
    width: 70%
}
#event .event-article__detail {
    display: -webkit-box;
    display: flex;
    flex-direction: column
}
#event .event-article__detail .event-table {
    font-size: 15px
}
#event .event-article__detail .event-table__left {
    background-color: #e60012;
    color: #fff;
    font-weight: 400;
    border-top: solid 1px #fff;
    border-bottom: solid 1px #fff;
    padding: 0.3em;
    vertical-align: middle;
    min-width: 5em
}
#event .event-article__detail .event-table__right {
    border-top: solid 1px #fff;
    border-bottom: solid 1px #fff;
    padding: 0.5em;
    vertical-align: middle;
    background-color: #f7f7f7
}
#event .event-article__image figure {
    max-width: 90%;
    margin-right: auto;
    margin-left: auto;
    text-align: center
}
@media (min-width:769px) {
    #event .event-article__t-right {
        width: 75%
    }
    #event .event-article__detail .event-table__left {
        padding: 0.5em
    }
    #event .event-article__image figure {
        max-width: 70%
    }
}
#event .event-compration {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: solid 1px #e60012
}
#event .event-compration__list {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center
}
#event .event-compration__date {
    background-color: #e60012;
    font-size: 16px;
    color: #fff;
    padding: 0.6em 0.5em;
    text-align: center;
    display: inline
}
@media (min-width:769px) {
    #event .event-compration__date {
        font-size: 20px;
        padding: 1em
    }
    #event .event-compration__week {
        font-size: 12px
    }
}
#event .event-compration__week {
    font-size: 12px
}
#event .event-compration__time {
    font-size: 13px;
    line-height: 1.5
}
@media (min-width:769px) {
    #event .event-compration__time {
        font-size: 13px;
        line-height: 1.5
    }
}
#event .event-compration__poor {
    font-size: 14px
}
#event .event-compration__company {
    font-size: 11px;
    max-width: 80px;
    text-align: center;
    padding-top: 1em
}
#event .event-compration__company img {
    margin-bottom: 5px
}
#event .event-compration__hyphen {
    border-top: solid 1px #e60012;
    width: 3%
}
#event .news-article-keywords {
    margin-bottom: 20px
}
@media (min-width:769px) {
    #event .event-compration__company {
        font-size: 12px;
        max-width: 90px;
        text-align: center;
        padding-top: 1em
    }
    #event .news-article-keywords {
        margin-top: 30px;
        margin-bottom: 30px
    }
}
#event .news-article-keywords__title {
    font-size: 13px;
    margin-bottom: 8px
}
@media (min-width:769px) {
    #event .news-article-keywords__title {
        font-size: 16px;
        margin-bottom: 15px
    }
}
#event .news-article-keywords .md-popular-keywords__list {
    margin-left: -3px
}
#event .news-article-keywords .md-popular-keywords__words {
    background-color: transparent;
    padding: 0
}
#event .news-sns {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 30px auto
}
#event .news-sns__item a {
    width: 60px;
    height: 60px;
    display: block
}
#event .news-sns__item a span {
    display: block;
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    margin: 0 auto
}
#event .news-sns__item a .icon-facebook {
    background-image: url('/sports/rugby/2019/assets/images/common/icons/ico_fb-color.jpg');
    background-size: contain
}
#event .news-sns__item a .icon-twitter {
    background-image: url('/sports/rugby/2019/assets/images/common/icons/ico_tw-color.jpg');
    background-size: contain
}
#event .news-sns__item a .icon-line {
    background-image: url('/sports/rugby/2019/assets/images/common/icons/ico_ln-color.jpg');
    background-size: contain
}
.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
    position: relative;
    font-size: 13px
}
.pagination a,
.pagination span {
    display: block;
    width: auto;
    margin: 4px;
    padding: 8px;
    border: 1px solid #000;
    background-color: #fff;
    text-decoration: none;
    text-align: center;
    line-height: 16px
}
.pagination .pager {
    width: 32px
}
.pagination .current,
.pagination a:hover {
    color: #fff;
    border-color: #E60012;
    background-color: #E60012
}
.pagination a.prev {
    margin-right: 16px
}
.pagination a.next {
    margin-left: 16px
}
.pagination span.page_num {
    display: none
}
.event-table a {
    text-decoration: underline;
    color: #00E
}
.rules-padding {
    padding-top: 60px
}
.stadiumlist__txt {
    font-size: 15px;
    padding-bottom: 25px
}
#rules .rules-article__text ul{
    list-style: disc;
    padding-left: 40px;
}
/* Alignments */
.alignleft {
  /*rtl:ignore*/
  float: left;
  /*rtl:ignore*/
  margin-right: 1rem;
}
@media only screen and (min-width: 768px) {
  .alignleft {
    /*rtl:ignore*/
    margin-right: calc(2 * 1rem);
  }
}
.alignright {
  /*rtl:ignore*/
  float: right;
  /*rtl:ignore*/
  margin-left: 1rem;
}

@media only screen and (min-width: 768px) {
  .alignright {
    /*rtl:ignore*/
    margin-left: calc(2 * 1rem);
  }
}
.aligncenter {
  clear: both;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
#rules .rules-article__text img {
    max-width:45%;
}
    .l-wrapper {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .l-footer {
      margin-top: auto;
      background-color: #e60012;
      padding: 13px 0 12px
    }
.object_fit_img {
  object-fit: cover;
  font-family: 'object-fit: cover;'
}
#event .stadiumlist__txt a{
  text-decoration: underline;
  color:blue;
}

#news .news-article__post-contents p[class^="par"] br {
    display: none;
}

/*追加編集*/
#schedule .l-header {
    z-index: 11;
}

#schedule .schedulelist .container {
  margin-top: 30px;
  width: 100%;
}

#schedule .schedulelist__header {
  padding-bottom: 8px;
  margin-bottom: 12px;
  position: relative;
  padding-top: 20px;
}

@media (min-width: 769px) {
  #schedule .schedulelist__header {
    padding-bottom: 16px;
    margin-bottom: 20px;
    padding-top: 0;
  }
}

#schedule .schedulelist__header span {
  display: block;
  font-weight: 100;
  font-size: 16px;
  line-height: 1;
}

@media (min-width: 769px) {
  #schedule .schedulelist__header span {
    font-size: 22px;
  }
}

#schedule .schedulelist__header::after {
  content: '';
  display: block;
  width: calc(100% + 16px);
  height: 1px;
  background-color: #ccc;
  position: absolute;
  bottom: 0;
  left: -8px;
  z-index: 1;
}

@media (min-width: 769px) {
  #schedule .schedulelist__header::after {
    width: 100%;
    left: 0;
  }
}

#schedule .schedulelist .schedule {
  margin-top: 20px;
}

#schedule .schedulelist .schedule__list {
  width: 100%;
  table-layout: fixed;
  margin-bottom: 35px;
}

@media (min-width: 769px) {
  #schedule .schedulelist .schedule__list {
    padding: 8px 0;
    margin-bottom: 70px;
  }
}

#schedule .schedulelist .schedule td {
  vertical-align: middle;
  text-align: center;
}

#schedule .schedulelist .schedule__item {
  margin: 0;
  height: 100px;
  width: 100%;
}

#schedule .schedulelist .schedule__item.gray {
  background-color: #f5f5f5;
}

#schedule .schedulelist .schedule__item__date {
  width: 20%;
  position: relative;
}

#schedule .schedulelist .schedule__item__date div h3 {
  font-size: 16px;
}

@media (min-width: 769px) {
  #schedule .schedulelist .schedule__item__date div h3 {
    font-size: 20px;
  }
}

#schedule .schedulelist .schedule__item__date div span {
  font-size: 12px;
  padding-left: 5px;
}

#schedule .schedulelist .schedule__item__date div p {
  font-size: 13px;
}

#schedule .schedulelist .schedule__item__date div:after {
  position: absolute;
  content: "";
  height: 55px;
  left: 100%;
  border-right: 1px dashed #ccc;
  top: 50%;
  transform: translateY(-50%);
}
#schedule .schedulelist .schedule__item__stage {
  width: 10%;
}

#schedule .schedulelist .schedule__item__stage p {
  font-size: 20px;
}

@media (min-width: 769px) {
  #schedule .schedulelist .schedule__item__stage p {
    font-size: 24px;
  }
}

#schedule .schedulelist .schedule__item__opponent {
  width: 38%;
}

#schedule .schedulelist .schedule__item__opponent__item {
  display: inline-block;
}

#schedule .schedulelist .schedule__item__opponent__item a,
#schedule .schedulelist .schedule__item__opponent__item div {
  position: relative;
  display: inline-block;
  height: 100%;
}

#schedule .schedulelist .schedule__item__opponent__item a:after,
#schedule .schedulelist .schedule__item__opponent__item div:after {
  content: attr(data-name);
  font-size: 8px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  margin-top: 5px;
  color: blue;
}
#schedule .schedulelist .schedule__item__opponent__item div:after {
  color: #000;
}

#schedule .schedulelist .schedule__item__opponent__item__flag {
  width: 67%;
  border: 1px solid #000;
}

#schedule .schedulelist .schedule__item__opponent__flex {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}

#schedule .schedulelist .schedule__item__opponent__flex > p {
  display: inline-block;
  position: relative;
  width: 40%;
}

@media (min-width: 769px) {
  #schedule .schedulelist .schedule__item__opponent__flex > p {
    width: 20%;
  }
}

#schedule .schedulelist .schedule__item__opponent__flex > p span {
  height: 2px;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  background-color: #333;
}

#schedule .schedulelist .schedule__item__opponent__flex > p span:nth-child(1) {
  transform: rotate(135deg);
}

#schedule .schedulelist .schedule__item__opponent__flex > p span:nth-child(2) {
  transform: rotate(-135deg);
}

#schedule .schedulelist .schedule__item__event {
  width: 38%;
}

#schedule .schedulelist .schedule__item__event p {
  font-size: 16px;
}

#schedule .schedulelist .schedule__item__undicided {
  width: 38%;
}

#schedule .schedulelist .schedule__item__undicided__item {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  padding: 0 10px;
  align-items: center;
}

@media (min-width: 769px) {
  #schedule .schedulelist .schedule__item__undicided__item {
    padding: 0 20px;
  }
}

#schedule .schedulelist .schedule__item__undicided__item__title {
  margin-right: 15px;
  font-size: 16px;
}

#schedule .schedulelist .schedule__item__undicided__item__detail {
  font-size: 12px;
  text-align: left;
  line-height: 1;
}

#schedule .schedulelist .schedule__item__stadium {
  width: 29%;
  position: relative;
  text-align: left;
}

#schedule .schedulelist .schedule__item__stadium div {
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
}

@media (min-width: 769px) {
  #schedule .schedulelist .schedule__item__stadium div {
    padding-left: 20px;
    padding-right: 20px;
  }
}

#schedule .schedulelist .schedule__item__stadium div a {
  font-size: 13px;
  color: blue;
}

@media (min-width: 769px) {
  #schedule .schedulelist .schedule__item__stadium div a {
    font-size: 14px;
  }
}

#schedule .schedulelist .schedule__item__stadium div:after {
  position: absolute;
  content: "";
  height: 55px;
  right: 100%;
  border-right: 1px dashed #ccc;
  top: 50%;
  transform: translateY(-50%);
}

#schedule .schedulelist .schedule__item div {
  height: 100%;
}

#schedule .schedulelist .schedule__item__table__header {
  margin: 0;
  height: 80px;
}

#schedule .schedulelist .schedule__item__table__header h2 {
  font-size: 14px;
}

#schedule .schedulelist .schedule__item__table__header td {
  text-align: center;
}

#schedule .schedulelist .schedule__item__table__header div {
  display: inline-block;
  height: 100%;
}

#schedule .schedulelist .schedule__item__table__header div:after {
  display: none;
}

#schedule .schedulelist .schedule__item.undicided {
  background-color: #fff3f3;
}

#schedule .schedulelist .schedule__item.undicided.pink {
  background-color: #ffe8e8;
}

@media (max-width: 768px) {
  #schedule .schedule-top-keywords {
    border-top: 1px solid #ccc;
  }
}

@media (min-width: 769px) {
  #schedule .schedulelist .container {
    padding: 0;
  }
}

#schedule .dfp_banner {
  text-align: center;
}

#schedule .match-header {
  position: relative;
  height: 10px;
  padding-bottom: 16px;
  margin-bottom: 20px;
  font-size: 22px;
}
#schedule .schedulelist .schedule__item .match_detail {
    font-size: 12px;
    background-color: #0AAEEF;
    border: 1px solid #0AAEEF;
    border-radius: 10px;
    color: #fff;
    width: 100%;
    margin: 7px auto;
    position: relative;
    height: 20px;
}
#schedule .match_detail a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
#schedule .schedulelist .schedule__item .match_detail::after {
  border: 0;
}    
@media (min-width: 769px) {
  #schedule .schedulelist .schedule__item .match_detail {
    font-size: 13px;
    margin: 4px auto;
    width: 75%;
  }
}


/* team用 */
.team {
  margin-bottom: 40px;
}

.team__header {
  padding-bottom: 8px;
  margin-bottom: 12px;
  position: relative;
  padding-top: 20px;
}

@media (min-width: 769px) {
  .team__header {
    padding-bottom: 16px;
    margin-bottom: 20px;
    padding-top: 0;
  }
}

.team__header span {
  display: block;
  font-weight: 100;
  font-size: 16px;
  line-height: 1;
}

@media (min-width: 769px) {
  .team__header span {
    font-size: 22px;
  }
}

.team__header::after {
  content: '';
  display: block;
  width: calc(100% + 16px);
  height: 1px;
  background-color: #ccc;
  position: absolute;
  bottom: 0;
  left: -8px;
  z-index: 1;
}

@media (min-width: 769px) {
  .team__header::after {
    width: 100%;
    left: 0;
  }
}

.team__flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 24px 0;
}

.team__list {
  display: inline-block;
  background-color: #ededed;
  margin-top: 35px;
  padding: 15px 10px 0;
  width: 48%;
}

@media (min-width: 769px) {
  .team__list {
    padding: 17px 17px 0;
  }
}

.team__list__name {
  display: inline-block;
  background-color: #f7f7f7;
  font-weight: bold;
  line-height: 1;
  width: 100%;
  text-align: center;
  padding: 10px 15px;
  font-size: 15px;
}

@media (min-width: 769px) {
  .team__list__name {
    padding: 26px 35px;
    font-size: 24px;
  }
}

.team__list__box {
  margin: 24px 0;
}

.team__list__item {
  margin-bottom: 18px;
}

.team__list__item:last-child {
  margin-bottom: 0;
}

.team__list__item a,
.team__list__item div {
  display: flex;
  align-items: center;
}

.team__list__item a img,
.team__list__item div img {
  width: 30%;
  margin-right: 10px;
}

@media (min-width: 769px) {
  .team__list__item a img,
  .team__list__item div img {
    margin-right: 20px;
  }
}

.team__list__item a p,
.team__list__item div p {
  font-size: 12px;
  color: blue;
  display: inline-block;
  line-height: 1;
}

.team__list__item div p {
  color: #000;
}

@media (min-width: 769px) {
  .team__list__item a p,
  .team__list__item div p {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  #team .news-top-keywords {
    border-top: 1px solid #ccc;
  }
}

#team.single-team .l-side-column {
  border-top: none;
}

@media (min-width: 769px) {
  #team.single-team .l-side-column .container {
    padding: 0;
  }
}

@media (min-width: 769px) {
  #team.single-team .l-side-column .md-popular-keywords {
    padding-top: 0;
    margin-bottom: 40px;
  }
}

#team .dfp_banner {
  margin-bottom: 20px;
  text-align: center;
}

@media (min-width: 769px) {
  #team .dfp_banner {
    text-align: left;
  }
}

#team .dfp_banner__head {
  padding-bottom: 0;
  text-align: center;
}

@media (min-width: 769px) {
  #team .dfp_banner__head {
    padding-bottom: 20px;
  }
}

@media (max-width: 768px) {
  #team .team-article {
    border-top: 1px solid #ccc;
    padding-top: 15px;
  }
}

#team .team-article__header {
  font-size: 18px;
  line-height: 1.0769;
  margin-bottom: 23px;
  padding-bottom: 20px;
  position: relative;
}

@media (min-width: 769px) {
  #team .team-article__header {
    font-size: 22px;
    padding-right: 0;
    padding-left: 0;
  }
}

#team .team-article__header::after {
  content: '';
  display: block;
  height: 1px;
  background-color: #ccc;
  position: absolute;
  bottom: 0;
  z-index: 1;
  width: 100%;
  left: 0;
}

@media (min-width: 769px) {
  #team .team-article__header::after {
    width: calc(100% + 16px);
    left: -8px;
    width: 100%;
    left: 0;
  }
}

#team .team-article__image {
  margin-bottom: 10px;
}

@media (min-width: 769px) {
  #team .team-article__image {
    margin-bottom: 30px;
  }
}

#team .team-article__image .figure {
  margin-bottom: 5px;
}

@media (min-width: 769px) {
  #team .team-article__image .figure {
    margin-bottom: 15px;
  }
}

#team .team-article__image .figure img {
  width: 100%;
}

#team .team-article__image .caption {
  font-size: 11px;
  color: #999;
  text-align: right;
}

@media (min-width: 769px) {
  #team .team-article__image .caption {
    font-size: 15px;
  }
}

#team .team-article__text {
  font-size: 15px;
  line-height: 1.66666;
  text-indent: 1em;
}

@media (min-width: 769px) {
  #team .team-article__text {
    font-size: 18px;
    margin-bottom: 30px;
  }
}

@media (max-width: 768px) {
  #team .team-article__text + .news-article__text {
    margin-top: 10px;
  }
}

@media (min-width: 769px) {
  #team .team-article__text + .news-article__text {
    margin-bottom: 30px;
  }
}

#team .team-article__text + .team-article__image {
  margin-top: 15px;
}

@media (min-width: 769px) {
  #team .team-article__text + .team-article__image {
    margin-top: 40px;
  }
}

#team .team-article .team-article__flags {
  background-color: #ebebeb;
  position: relative;
  height: 54px;
}

@media (min-width: 769px) {
  #team .team-article .team-article__flags {
    height: 76px;
  }
}

#team .team-article .team-article__flags img {
  height: 100%;
  float: left;
  margin: 0;
  padding: 0;
  border: 1px solid black;
}

#team .team-article .team-article__flags p {
  font-size: 12px;
  position: absolute;
  margin-left: 0;
  right: 8px;
  bottom: 8px;
}

@media (min-width: 769px) {
  #team .team-article .team-article__flags p {
    right: 13px;
    bottom: 13px;
  }
}

#team .team-article__post-contents {
  margin-top: 25px;
  font-size: 14px;
  word-break: break-word;
}

@media (min-width: 769px) {
  #team .team-article__post-contents {
    font-size: 18px;
  }
}

#team .team-article__post-contents p {
  font-size: 90%;
  line-height: 1.66666;
  text-indent: 1em;
  max-width: 1000px;
  padding: 0 8px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
}

@media (min-width: 769px) {
  #team .team-article__post-contents p {
    font-size: 14px;
    margin-bottom: 40px;
    padding: 0px;
  }
}

@media (max-width: 768px) {
  #team .team-article__post-contents p + p {
    margin-top: 10px;
  }
}

@media (min-width: 769px) {
  #team .team-article__post-contents p + p {
    margin-top: 30px;
  }
}

#team .team-article__post-contents p + .team-article__image {
  margin-top: 15px;
}

@media (min-width: 769px) {
  #team .team-article__post-contents p + .team-article__image {
    margin-top: 40px;
  }
}

#team .team-article__post-contents p + div {
  margin-top: 15px;
}

@media (min-width: 769px) {
  #team .team-article__post-contents p + div {
    margin-top: 40px;
  }
}

#team .team-article__post-contents p a {
  text-decoration: underline;
  color: #0000ff;
}

@media (max-width: 768px) {
  #team .team-article__post-contents img + p {
    margin-top: 10px;
  }
}

@media (min-width: 769px) {
  #team .team-article__post-contents img + p {
    margin-top: 30px;
  }
}

#team .team-article__post-contents div + div {
  margin-top: 15px;
}

@media (min-width: 769px) {
  #team .team-article__post-contents div + div {
    margin-top: 40px;
  }
}

#team .team-article__post-contents img {
  max-width: 100%;
  padding: 0 8px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;
  display: block;
}

@media (min-width: 769px) {
  #team .team-article__post-contents img {
    margin-bottom: 30px;
    padding: 0 15px;
  }
}

#team .team-article__post-contents .wp-caption {
  /*width: auto!important;*/
  display: block;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 8px;
  margin-bottom: 10px;
}

@media (min-width: 769px) {
  #team .team-article__post-contents .wp-caption {
    margin-bottom: 20px;
    padding: 0;
  }
}

#team .team-article__post-contents .wp-caption img {
  max-width: 100%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  margin-bottom: 0;
}

#team .team-article__post-contents .wp-caption .wp-caption-text {
  font-size: 12px;
  color: #999;
  text-indent: 0;
  margin-top: 5px;
}

@media (min-width: 769px) {
  #team .team-article__post-contents .wp-caption .wp-caption-text {
    font-size: 12px;
    margin-top: 12px;
  }
}

@media (min-width: 769px) {
  #team .team-article__post-contents .alignleft {
    float: left;
    margin: 0 1em 1em 0;
  }
}

@media (min-width: 769px) {
  #team .team-article__post-contents .alignright {
    float: right;
    margin: 0 0 1em 1em;
  }
}

@media (min-width: 769px) {
  #team .team-article__post-contents .size-full {
    padding: 0;
  }
}

#team .team-article__post-contents div.caption {
  font-size: 12px;
  color: #999;
  text-indent: 0;
  margin-top: -5px !important;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
}

@media (min-width: 769px) {
  #team .team-article__post-contents div.caption {
    font-size: 15px;
    margin-top: -15px !important;
    margin-bottom: 30px;
  }
}

#team .team-article__post-contents h1 {
  margin: 2.5em 0 1.5em;
  font-size: 112%;
}

#team .team-article__post-contents h2 {
  margin: 2em 0 1em;
  font-size: 105%;
}

#team .team-article__post-contents h3 {
  margin: 1.5em 0 0.5em;
  font-size: 90%;
}

#team .team-article__post-contents h4, #team .team-article__post-contents h5, #team .team-article__post-contents h6 {
  margin: 1.5em 0 0.5em;
  font-size: 90%;
  font-weight: normal;
}

#team .team-article__post-contents h1, #team .team-article__post-contents h2, #team .team-article__post-contents h3, #team .team-article__post-contents h4, #team .team-article__post-contents h5, #team .team-article__post-contents h6 {
  padding: 0 8px;
}

@media (min-width: 769px) {
  #team .team-article__post-contents h1, #team .team-article__post-contents h2, #team .team-article__post-contents h3, #team .team-article__post-contents h4, #team .team-article__post-contents h5, #team .team-article__post-contents h6 {
    padding: 0;
  }
}

#team .team-article .team-article-popular-keywords {
  margin-top: 5px;
  margin-bottom: 15px;
}

#team .team-article .team-article-keywords {
  margin-bottom: 20px;
}

@media (min-width: 769px) {
  #team .team-article .team-article-keywords {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}

#team .team-article .team-article-keywords__title {
  font-size: 13px;
  margin-bottom: 8px;
}

@media (min-width: 769px) {
  #team .team-article .team-article-keywords__title {
    font-size: 16px;
    margin-bottom: 15px;
  }
}

#team .team-article .team-article-keywords .md-popular-keywords__list {
  margin-left: -3px;
}

#team .team-article .team-article-keywords .md-popular-keywords__words {
  background-color: transparent;
  padding: 0;
}

#team .team-article__related-article {
  margin-top: 40px;
}

@media (min-width: 769px) {
  #team .team-article__related-article {
    margin-top: 80px;
  }
}

#team .team-article__related-article__header {
  margin-bottom: 12px;
  position: relative;
  padding-top: 20px;
  font-weight: bold;
}

@media (min-width: 769px) {
  #team .team-article__related-article__header {
    padding-bottom: 16px;
    margin-bottom: 20px;
    padding-top: 20px;
  }
}

#team .team-article__related-article__header span {
  display: block;
  font-weight: 100;
  font-size: 16px;
  line-height: 1;
  font-weight: bold;
}

@media (min-width: 769px) {
  #team .team-article__related-article__header span {
    font-size: 18px;
  }
}

#team .team-article__related-article__header::after {
  content: '';
  display: block;
  width: calc(100% + 16px);
  height: 1px;
  background-color: #000;
  position: absolute;
  top: 0;
  left: -8px;
  z-index: 1;
}

@media (min-width: 769px) {
  #team .team-article__related-article__header::after {
    width: 100%;
    left: 0;
  }
}

#team .team-article__related-article__list li {
  font-size: 14px;
  line-height: 1.4;
  color: blue;
  border-top: 1px dashed #d3d3d3;
  position: relative;
}

@media (min-width: 769px) {
  #team .team-article__related-article__list li {
    line-height: 3;
  }
}

#team .team-article__related-article__list li::before {
  content: "";
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 5px solid #bebebe;
  position: absolute;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
}

#team .team-article__related-article__list li a {
  margin-left: 16px;
  display: inline-block;
}

#team .team-article__related-article__list li:last-child {
  border-bottom: 1px dashed #d3d3d3;
}
#voices .dfp_banner,
#voices .list-pager,
.l-ad-jumbotron {
    text-align: center
}
#voices .newslist__header::after,
#voices .newslist__item > a::after,
#voices .newslist__item > article::after {
    height: 1px;
    z-index: 1;
    content: '';
    bottom: 0
}
.l-ad-jumbotron {
    padding: 0;
    border-bottom: none
}

#voices .news-article__post-contents p[class^="par"] br {
    display: none;
}

#voices .newslist {
    margin-top: 25px
}
#voices .newslist__header {
    padding-bottom: 8px;
    margin-bottom: 8px;
    position: relative;
    display:flex;
}
#voices .newslist__header .voice_title {
    width: 70%;
    display: block;
    font-weight: 100;
    font-size: 14px;
    line-height: 1
}
#voices .newslist__header::after {
    display: block;
    width: calc(100% + 16px);
    background-color: #ccc;
    position: absolute;
    left: -8px
}
#voices .voice__header {
    font-size: 12px;
    background-color: #E60112;
    color: #fff;
    padding: 5px;
}
#voices .voice_button {
    font-size: 11px;
    font-weight: 100;
    border-radius: 20px;
    background-color: #9B9B9B;
    margin-bottom: 5px;
    position: absolute;
    right: 0;
    bottom: 0;
}
#voices .voice_toplink {
    position: relative;
    width: 85px;
    height: 27px;    
}
#voices .voice_refresh_icon {
    padding-right: 7px;
}
#voices .voice_toplink a {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: #fff;
    padding-top: 5px;
    padding-left: 6px;
}
#voices .voice_toplink a::before {
    content: '\f2f9';
    font-family: 'Font Awesome 5 Free';
    font-weight: 700;
    color: #fff;
    padding: 0 5px 0 5px;
}
#voices .voice__body {
    font-size: 12px;
    padding: 15px 15px 20px;
}
#voices .voice__body a {
    text-decoration: underline;
    color: #00f;
    word-break: break-all;
}
#voices .voice__body a:active {
 color: #FF0000;
 text-decoration: underline;
}
#voices .voice__body::after {
    content: "";
    clear: both;
    display: block;
}
@media (min-width:769px) {
    #voices .voice__header {
        font-size: 14px;
    }
    #voices .newslist__header {
        padding-bottom: 16px;
        margin-bottom: 20px
    }
    #voices .newslist__header .voice_title {
        font-size: 22px;
    }
    #voices .newslist__header::after {
        width: 100%;
        left: 0
    }
    #voices .voice_title {
        width: 70%;
    } 
    #voices .voice_button {
        font-size: 15px;
        margin-left: 60px;
        margin-bottom: 13px;
        width: 100px;
        height: 35px;
    }
    #voices .voice_toplink {
        width: 100px;
        height: 25px;
    }
    #voices .voice_toplink a {
        padding-left: 3px;
        padding-top: 7px;
    }
    #voices .voice__body {
        font-size: 14px;
        padding: 15px 15px 20px;
    }
    #voices .voice_toplink a::before {
        padding: 0 6px 0 6px;
    }
}
#voices .newslist__list {
    margin-bottom: 35px
}
@media (max-width:768px) {
    #voices .newslist__list {
        padding: 8px 0
    }
}
@media (min-width:769px) {
    #voices .newslist__list {
        margin-bottom: 70px
    }
}
#voices .newslist__item {
    margin-bottom: 24px;
    border: dotted 2px #DEDEDE;
    border-top: 0;
}
#voices .newslist__item > a::after {
    display: block;
    width: calc(100% - 68px);
    border-bottom: 1px solid #dcdcdc;
    position: absolute;
    right: 0
}
#voices .newslist__item > article {
    position: relative;
    -webkit-box-align: center;
    align-items: center
}
#voices .newslist__item > article::after {
    display: block;
    width: calc(100% - 68px);
    position: absolute;
    right: 0
}
#voices .newslist__item:last-child {
    margin-bottom: 0
}
#voices .newslist__thumb {
    text-align: center;
}
@media (min-width:769px) {
    #voices .newslist__item > article::after {
        width: calc(100% - 86px - 15px);
    }
}
#voices .newslist__thumb img {
    width: 260px;
    height: auto;
    margin: 20px;
}
@media (min-width:769px) {
    #voices .newslist__thumb img {
      width: 300px;
    }  
}
#schedule .dfp_banner,
#schedule .list-pager,
.l-ad-jumbotron {
    text-align: center
}
#schedule .newslist__header::after,
#schedule .newslist__item > a::after,
#schedule .newslist__item > article::after {
    height: 1px;
    z-index: 1;
    content: '';
    bottom: 0
}
.l-ad-jumbotron {
    padding: 0;
    border-bottom: none
}

#schedule .news-article__post-contents p[class^="par"] br {
    display: none;
}

#schedule .newslist {
    margin-top: 25px
}
#schedule .newslist__header {
    padding-bottom: 8px;
    margin-bottom: 8px;
    position: relative
}
#schedule .newslist__header span {
    display: block;
    font-weight: 100;
    font-size: 14px;
    line-height: 1
}
#schedule .newslist__header::after {
    display: block;
    width: calc(100% + 16px);
    background-color: #ccc;
    position: absolute;
    left: -8px
}
#schedule .voice__header {
    font-size: 12px;
    background-color: #E60112;
    color: #fff;
    padding: 3px;
}
#schedule .voice__body {
    font-size: 12px;
    padding: 0 15px 20px;
}
@media (min-width:769px) {
    #schedule .voice__header {
        font-size: 14px;
        padding: 5px;
    }
    #schedule .newslist__header {
        padding-bottom: 16px;
        margin-bottom: 20px
    }
    #schedule .newslist__header span {
        font-size: 22px
    }
    #schedule .newslist__header::after {
        width: 100%;
        left: 0
    }
    #schedule .voice__body {
        font-size: 14px;
        padding: 0 15px 20px;
    }
}
#schedule .newslist__list {
    margin-bottom: 35px
}
@media (max-width:768px) {
    #schedule .newslist__list {
        padding: 8px 0
    }
}
@media (min-width:769px) {
    #schedule .newslist__list {
        margin-bottom: 70px
    }
}
#schedule .newslist__item {
    margin-bottom: 24px;
    border: dotted 2px #DEDEDE;
    border-top: 0;
}
#schedule .newslist__item > a::after {
    display: block;
    width: calc(100% - 68px);
    border-bottom: 1px solid #dcdcdc;
    position: absolute;
    right: 0
}
#schedule .newslist__item > article {
    position: relative;
    -webkit-box-align: center;
    align-items: center
}
#schedule .newslist__item > article::after {
    display: block;
    width: calc(100% - 68px);
    border-bottom: 1px solid #dcdcdc;
    position: absolute;
    right: 0
}
#schedule .newslist__item:last-child {
    margin-bottom: 0
}
#schedule .newslist__thumb {
    text-align: center;
    margin: 20px;
}
@media (min-width:769px) {
    #schedule .newslist__item > article::after {
        width: calc(100% - 86px - 15px);
        border-color: #e8e8e8
    }
}
#schedule .newslist__thumb img {
    width: 300px;
    height: auto;
}
#schedule .article-pager {
    text-align: center;
    margin-top: 30px
}
@media (min-width:769px) {
    #schedule .news-article .news-article-keywords__title {
        font-size: 16px;
        margin-bottom: 15px
    }
    #schedule .article-pager {
        margin-top: 50px
    }
}
#schedule .article-pager__list {
    display: inline-block;
    letter-spacing: -0.4em
}
#schedule .article-pager__item {
    display: inline-block;
    vertical-align: middle;
    letter-spacing: normal;
    margin: 0 8px
}
#schedule .article-pager__item a {
    display: block;
    width: 28px;
    height: 28px;
    font-size: 12px;
    line-height: 28px;
    color: #666;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #a0a0a0;
    border-radius: 3px
}
@media (min-width:769px) {
    #schedule .article-pager__item a {
        width: 46px;
        height: 46px;
        font-size: 16px;
        line-height: 46px;
        border-radius: 5px;
        transition: 0.2s ease
    }
    #schedule .article-pager__item a:hover {
        color: #fff;
        background-color: #e60012;
        border-color: #e60012
    }
    #schedule .article-pager__item--arrow a {
        font-size: 12px
    }
}
#schedule .article-pager__item--back a {
    width: auto;
    height: auto;
    padding: 5px 25px;
    border: none;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(102, 102, 102, .4)
}