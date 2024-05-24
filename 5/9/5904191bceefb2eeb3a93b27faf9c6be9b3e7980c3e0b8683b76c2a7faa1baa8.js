/*!
* primisslate
*   github.com/premasagar/primisslate
*
*//*
    An extreme CSS reset stylesheet, for normalising the styling of a container element and its children.

    by Premasagar Rose
        dharmafly.com

    license
        opensource.org/licenses/mit-license.php

    **

    v0.10.1

*/

    /* == BLANKET RESET RULES == */

    /* HTML 4.01 */
.primisslate, .primisslate h1, .primisslate h2, .primisslate h3, .primisslate h4, .primisslate h5, .primisslate h6, .primisslate p, .primisslate td, .primisslate dl, .primisslate tr, .primisslate dt, .primisslate ol, .primisslate form, .primisslate select, .primisslate option, .primisslate pre, .primisslate div, .primisslate table,  .primisslate th, .primisslate tbody, .primisslate tfoot, .primisslate caption, .primisslate thead, .primisslate ul, .primisslate li, .primisslate address, .primisslate blockquote, .primisslate dd, .primisslate fieldset, .primisslate li, .primisslate iframe, .primisslate strong, .primisslate legend, .primisslate em, .primisslate summary, .primisslate cite, .primisslate span, .primisslate input, .primisslate sup, .primisslate label, .primisslate dfn, .primisslate object, .primisslate big, .primisslate q, .primisslate samp, .primisslate acronym, .primisslate small, .primisslate img, .primisslate strike, .primisslate code, .primisslate sub, .primisslate ins, .primisslate textarea, .primisslate button, .primisslate var, .primisslate a, .primisslate abbr, .primisslate applet, .primisslate del, .primisslate kbd, .primisslate tt, .primisslate b, .primisslate i, .primisslate hr,

/* HTML5 - Sept 2013 taken from MDN https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list */
.primisslate article, .primisslate aside, .primisslate figure, .primisslate figcaption, .primisslate footer, .primisslate header, .primisslate menu, .primisslate nav, .primisslate section, .primisslate time, .primisslate mark, .primisslate audio, .primisslate video, .primisslate abbr, .primisslate address, .primisslate area, .primisslate blockquote, .primisslate canvas, .primisslate caption, .primisslate cite, .primisslate code, .primisslate colgroup, .primisslate col, .primisslate datalist, .primisslate fieldset, .primisslate main, .primisslate map, .primisslate meta, .primisslate optgroup, .primisslate output, .primisslate progress, .primisslate svg {
    background-attachment:scroll;
    background-color:transparent;
    background-image:none; /* This rule affects the use of pngfix JavaScript http://dillerdesign.com/experiment/DD_BelatedPNG for IE6, which is used to force the browser to recognise alpha-transparent PNGs files that replace the IE6 lack of PNG transparency. (The rule overrides the VML image that is used to replace the given CSS background-image). If you don't know what that means, then you probably haven't used the pngfix script, and this comment may be ignored :) */
    background-position:0 0;
    background-repeat:repeat;
    border-color:#000000;
    border-color:currentColor; /* `border-color` should match font color. Modern browsers (incl. IE9) allow the use of "currentColor" to match the current font 'color' value <http://www.w3.org/TR/css3-color/#currentcolor>. For older browsers, a default of 'black' is given before this rule. Guideline to support older browsers: if you haven't already declared a border-color for an element, be sure to do so, e.g. when you first declare the border-width. */
    border-radius:0;
    border-style:none;
    border-width:medium;
    bottom:auto;
    clear:none;
    clip:auto;
    color:inherit;
    counter-increment:none;
    counter-reset:none;
    cursor:auto;
    direction:inherit;
    display:inline;
    float:none;
    font-family: inherit; /* As with other inherit values, this needs to be set on the root container element */
    font-size: inherit;
    font-style:inherit;
    font-variant:normal;
    font-weight:inherit;
    height:auto;
    left:auto;
    letter-spacing:normal;
    line-height:inherit;
    list-style-type: inherit; /* Could set list-style-type to none */
    list-style-position: outside;
    list-style-image: none;
    margin:0;
    max-height:none;
    max-width:none;
    min-height:0;
    min-width:0;
    opacity:1;
    outline:invert none medium;
    overflow:visible;
    padding:0;
    position:static;
    quotes: "" "";
    right:auto;
    table-layout:auto;
    text-align:inherit;
    text-decoration:inherit;
    text-indent:0;
    text-transform:none;
    top:auto;
    unicode-bidi:normal;
    vertical-align:baseline;
    visibility:inherit;
    white-space:normal;
    width:auto;
    word-spacing:normal;
    z-index:auto;

    /* CSS3 */
    /* Including all prefixes according to http://caniuse.com/ */
    /* CSS Animations don't cascade, so don't require resetting */
    -webkit-background-origin: padding-box;
            background-origin: padding-box;
    -webkit-background-clip: border-box;
            background-clip: border-box;
    -webkit-background-size: auto;
       -moz-background-size: auto;
            background-size: auto;
    -webkit-border-image: none;
       -moz-border-image: none;
         -o-border-image: none;
            border-image: none;
    -webkit-border-radius:0;
       -moz-border-radius:0;
            border-radius: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
    -webkit-box-sizing: content-box;
       -moz-box-sizing: content-box;
            box-sizing: content-box;
    -webkit-column-count: auto;
       -moz-column-count: auto;
            column-count: auto;
    -webkit-column-gap: normal;
       -moz-column-gap: normal;
            column-gap: normal;
    -webkit-column-rule: medium none #000000;
       -moz-column-rule: medium none #000000;
            column-rule: medium none #000000;
    -webkit-column-span: 1;
       -moz-column-span: 1; /* doesn't exist yet but probably will */
            column-span: 1;
    -webkit-column-width: auto;
       -moz-column-width: auto;
            column-width: auto;
    font-feature-settings: normal;
    overflow-x: visible;
    overflow-y: visible;
    -webkit-hyphens: manual;
       -moz-hyphens: manual;
            hyphens: manual;
    -webkit-perspective: none;
       -moz-perspective: none;
        -ms-perspective: none;
         -o-perspective: none;
            perspective: none;
    -webkit-perspective-origin: 50% 50%;
       -moz-perspective-origin: 50% 50%;
        -ms-perspective-origin: 50% 50%;
         -o-perspective-origin: 50% 50%;
            perspective-origin: 50% 50%;
    -webkit-backface-visibility: visible;
       -moz-backface-visibility: visible;
        -ms-backface-visibility: visible;
         -o-backface-visibility: visible;
            backface-visibility: visible;
    text-shadow: none;
    -webkit-transition: all 0s ease 0s;
            transition: all 0s ease 0s;
    -webkit-transform: none;
       -moz-transform: none;
        -ms-transform: none;
         -o-transform: none;
            transform: none;
    -webkit-transform-origin: 50% 50%;
       -moz-transform-origin: 50% 50%;
        -ms-transform-origin: 50% 50%;
         -o-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-transform-style: flat;
       -moz-transform-style: flat;
        -ms-transform-style: flat;
         -o-transform-style: flat;
            transform-style: flat;
    word-break: normal;
}

/* == BLOCK-LEVEL == */
/* Actually, some of these should be inline-block and other values, but block works fine (TODO: rigorously verify this) */
/* HTML 4.01 */
.primisslate, .primisslate h3, .primisslate h5, .primisslate p, .primisslate h1, .primisslate dl, .primisslate dt, .primisslate h6, .primisslate ol, .primisslate form, .primisslate option, .primisslate pre, .primisslate div, .primisslate h2, .primisslate caption, .primisslate h4, .primisslate ul, .primisslate address, .primisslate blockquote, .primisslate dd, .primisslate fieldset, .primisslate hr,

/* HTML5 new elements */
.primisslate article, .primisslate dialog, .primisslate figure, .primisslate footer, .primisslate header, .primisslate hgroup, .primisslate menu, .primisslate nav, .primisslate section, .primisslate audio, .primisslate video, .primisslate address, .primisslate blockquote, .primisslate colgroup, .primisslate main, .primisslate progress, .primisslate summary {
    display:block;
}
.primisslate h1, .primisslate h2, .primisslate h3, .primisslate h4, .primisslate h5, .primisslate h6 {
    font-weight: bold;
}
.primisslate h1 {
    font-size: 2em;
    padding: .67em 0;
}
.primisslate h2 {
    font-size: 1.5em;
    padding: .83em 0;
}
.primisslate h3 {
    font-size: 1.17em;
    padding: .83em 0;
}
.primisslate h4 {
    font-size: 1em;
}
.primisslate h5 {
    font-size: .83em;
}
.primisslate p {
    margin: 1em 0;
}
.primisslate table {
    display: table;
}
.primisslate thead {
    display: table-header-group;
}
.primisslate tbody {
    display: table-row-group;
}
.primisslate tfoot {
    display: table-footer-group;
}
.primisslate tr {
    display: table-row;
}
.primisslate th, .primisslate td {
    display: table-cell;
    padding: 2px;
}

/* == SPECIFIC ELEMENTS == */
/* Some of these are browser defaults; some are just useful resets */
.primisslate ol, .primisslate ul {
    margin: 1em 0;
}
.primisslate ul li, .primisslate ul ul li, .primisslate ul ul ul li, .primisslate ol li, .primisslate ol ol li, .primisslate ol ol ol li, .primisslate ul ol ol li, .primisslate ul ul ol li, .primisslate ol ul ul li, .primisslate ol ol ul li {
    list-style-position: inside;
    margin-top: .08em;
}
.primisslate ol ol, .primisslate ol ol ol, .primisslate ul ul, .primisslate ul ul ul, .primisslate ol ul, .primisslate ol ul ul, .primisslate ol ol ul, .primisslate ul ol, .primisslate ul ol ol, .primisslate ul ul ol {
    padding-left: 40px;
    margin: 0;
}
/* helper for general navigation */
.primisslate nav ul, .primisslate nav ol {
    list-style-type:none;

}
.primisslate ul, .primisslate menu {
    list-style-type:disc;
}
.primisslate ol {
    list-style-type:decimal;
}
.primisslate ol ul, .primisslate ul ul, .primisslate menu ul, .primisslate ol menu, .primisslate ul menu, .primisslate menu menu {
    list-style-type:circle;
}
.primisslate ol ol ul, .primisslate ol ul ul, .primisslate ol menu ul, .primisslate ol ol menu, .primisslate ol ul menu, .primisslate ol menu menu, .primisslate ul ol ul, .primisslate ul ul ul, .primisslate ul menu ul, .primisslate ul ol menu, .primisslate ul ul menu, .primisslate ul menu menu, .primisslate menu ol ul, .primisslate menu ul ul, .primisslate menu menu ul, .primisslate menu ol menu, .primisslate menu ul menu, .primisslate menu menu menu {
    list-style-type:square;
}
.primisslate li {
    display:list-item;
    /* Fixes IE7 issue with positioning of nested bullets */
    min-height:auto;
    min-width:auto;
    padding-left: 20px; /* replace -webkit-padding-start: 40px; */
}
.primisslate strong {
    font-weight:bold;
}
.primisslate em {
    font-style:italic;
}
.primisslate kbd, .primisslate samp, .primisslate code, .primisslate pre {
  font-family:monospace;
}
.primisslate a {
    color: blue;
    text-decoration: underline;
}
.primisslate a:visited {
    color: #529;
}
.primisslate a, .primisslate a *, .primisslate input[type=submit], .primisslate input[type=button], .primisslate input[type=radio], .primisslate input[type=checkbox], .primisslate select, .primisslate button {
    cursor:pointer;
}
.primisslate button, .primisslate input[type=submit] {
    text-align: center;
    padding: 2px 6px 3px;
    border-radius: 4px;
    text-decoration: none;
    font-family: arial, helvetica, sans-serif;
    font-size: small;
    background: #FFFFFF;
    -webkit-appearance: push-button;
    color: buttontext;
    border: 1px #a6a6a6 solid;
    background: lightgrey; /* Old browsers */
    background: rgb(255,255,255); /* Old browsers */
    background: -moz-linear-gradient(top,  rgba(255,255,255,1) 0%, rgba(221,221,221,1) 100%, rgba(209,209,209,1) 100%, rgba(221,221,221,1) 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,1)), color-stop(100%,rgba(221,221,221,1)), color-stop(100%,rgba(209,209,209,1)), color-stop(100%,rgba(221,221,221,1))); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top,  rgba(255,255,255,1) 0%,rgba(221,221,221,1) 100%,rgba(209,209,209,1) 100%,rgba(221,221,221,1) 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top,  rgba(255,255,255,1) 0%,rgba(221,221,221,1) 100%,rgba(209,209,209,1) 100%,rgba(221,221,221,1) 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top,  rgba(255,255,255,1) 0%,rgba(221,221,221,1) 100%,rgba(209,209,209,1) 100%,rgba(221,221,221,1) 100%); /* IE10+ */
    background: linear-gradient(to bottom,  rgba(255,255,255,1) 0%,rgba(221,221,221,1) 100%,rgba(209,209,209,1) 100%,rgba(221,221,221,1) 100%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#dddddd',GradientType=0 ); /* IE6-9 */
    -webkit-box-shadow: 1px 1px 0px #eee;
       -moz-box-shadow: 1px 1px 0px #eee;
         -o-box-shadow: 1px 1px 0px #eee;
            box-shadow: 1px 1px 0px #eee;
    outline: initial;
}
.primisslate button:active, .primisslate input[type=submit]:active, .primisslate input[type=button]:active, .primisslate button:active {
	background: rgb(59,103,158); /* Old browsers */
	background: -moz-linear-gradient(top, rgba(59,103,158,1) 0%, rgba(43,136,217,1) 50%, rgba(32,124,202,1) 51%, rgba(125,185,232,1) 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(59,103,158,1)), color-stop(50%,rgba(43,136,217,1)), color-stop(51%,rgba(32,124,202,1)), color-stop(100%,rgba(125,185,232,1))); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top, rgba(59,103,158,1) 0%,rgba(43,136,217,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top, rgba(59,103,158,1) 0%,rgba(43,136,217,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%); /* Opera 11.10+ */
	background: -ms-linear-gradient(top, rgba(59,103,158,1) 0%,rgba(43,136,217,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%); /* IE10+ */
	background: linear-gradient(to bottom, rgba(59,103,158,1) 0%,rgba(43,136,217,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%); /* W3C */
	border-color: #5259b0;
}
.primisslate button {
    padding: 1px 6px 2px 6px;
    margin-right: 5px;
}
.primisslate input[type=hidden] {
    display:none;
}
/* restore form defaults */
.primisslate textarea {
    -webkit-appearance: textarea;
    background: #FFFFFF;
    padding: 2px;
    margin-left: 4px;
    word-wrap: break-word;
    white-space: pre-wrap;
    font-size: 11px;
    font-family: arial, helvetica, sans-serif;
    line-height: 13px;
    resize: both;
}
.primisslate select, .primisslate textarea, .primisslate input {
    border:1px solid #ccc;
}
.primisslate select {
    font-size: 11px;
    font-family: helvetica, arial, sans-serif;
    display: inline-block;
}
.primisslate textarea:focus, .primisslate input:focus {
    outline: auto 5px -webkit-focus-ring-color;
    outline: initial;
}
.primisslate input[type=text] {
    background: #FFFFFF;
    padding: 1px;
    font-family: initial;
    font-size: small;
}
.primisslate input[type=checkbox], .primisslate input[type=radio] {
    border: 1px #2b2b2b solid;
    border-radius: 4px;
}
.primisslate input[type=checkbox], .primisslate input[type=radio] {
    outline: initial;
}
.primisslate input[type=radio] {
    margin: 2px 2px 3px 2px;
}
.primisslate abbr[title], .primisslate acronym[title], .primisslate dfn[title] {
    cursor:help;
    border-bottom-width:1px;
    border-bottom-style:dotted;
}
.primisslate ins {
    background-color:#ff9;
    color:#000000;
}
.primisslate del {
    text-decoration: line-through;
}
.primisslate blockquote, .primisslate q  {
    quotes:none; /* HTML5 */
}
.primisslate blockquote:before, .primisslate blockquote:after, .primisslate q:before, .primisslate q:after, .primisslate li:before, .primisslate li:after  {
    content:"";
}
.primisslate input, .primisslate select {
    vertical-align:middle;
}

.primisslate table {
    border-collapse:collapse;
    border-spacing:0;
}
.primisslate hr {
    display:block;
    height:1px;
    border:0;
    border-top:1px solid #ccc;
    margin:1em 0;
}
.primisslate *[dir=rtl] {
    direction: rtl;
}
.primisslate mark {
    background-color:#ff9;
    color:#000000;
    font-style:italic;
    font-weight:bold;
}
.primisslate menu {
    padding-left: 40px;
    padding-top: 8px;
}

/* additional helpers */
.primisslate [hidden],
.primisslate template {
    display: none;
}
.primisslate abbr[title] {
    border-bottom: 1px dotted;
}
.primisslate sub, .primisslate sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}
.primisslate sup {
    top: -0.5em;
}
.primisslate sub {
    bottom: -0.25em;
}
.primisslate img {
    border: 0;
}
.primisslate figure {
    margin: 0;
}
.primisslate textarea {
    overflow: auto;
    vertical-align: top;
}

/* == ROOT CONTAINER ELEMENT == */
/* This contains default values for child elements to inherit  */
.primisslate {
    font-size: medium;
    line-height: 1;
    direction:ltr;
    text-align: left; /* for IE, Opera */
    text-align: start; /* recommended W3C Spec */
    font-family: "Times New Roman", Times, serif; /* Override this with whatever font-family is required */
    color: #000000;
    font-style:normal;
    font-weight:normal;
    text-decoration:none;
    list-style-type:disc;
}

.primisslate pre {
    white-space:pre;
}

.thubmsFixed{
    width: auto !important;
}


/**/
#adContainerDiv #slotContainer video, #adContainerDiv #slotContainer iframe, #adContainerDiv #adIma #imaSlotContainer iframe, #adContainerDiv #adIma #imaSlotContainer video, #adContainerDiv #adVpaid #slotContainer iframe {
    width: 100%;
    height: 100%;
}

/* Vast Icons */
.primisslate #primisVastIconsContainer {
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    left: 0;
    padding: 4px;
    position: absolute;
    top: 0;
}

.primisslate #primisVastIconsContainer .primisVastIconImg {
    cursor: pointer;
    opacity: 0;
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               cspNonce":"74C5vPNFi-6rYQbP51VS2Q","canaryState":"none","enableCsiLogging":true,"disableAutonav":false,"isEmbed":true,"disableCastApi":false,"disableMdxCast":false,"datasyncId":"V577fec1d||","embedsIframeOriginParam":"genius.com","canaryStage":"","chromeless":false}},"XSRF_FIELD_NAME":"session_token","XSRF_TOKEN":"QUFFLUhqbmRpSjllbEtUV2kxN0VwSWdMbWpRVmpFTC1tQXxBQ3Jtc0tuX21QRU45a2E0UmNJYUVNeWtPakhBZVZEMVFoNVAwd0Z1cW8tLXFqcmlSQXE4bWpBcmhMbmEtV3RROE1wNkY1c0l3YlJYRWhCZlhJc09pRW9hVV9qY1pnWDdpV01JcW1NOFpvRUhNNENnNVV6TzlFTQ\u003d\u003d","SERVER_VERSION":"prod","DATASYNC_ID":"V577fec1d||","SERIALIZED_CLIENT_CONFIG_DATA":"CLCHn60GENWIsAUQpcL-EhCI468FENnJrwUQt-r-EhCei7AFEPX5rwUQ8JywBRDNlbAFEMyu_hIQooGwBRC3768FEKn3rwUQ6-j-EhDqw68FENqYsAUQ34T_EhDqqbAFENafsAUQ5LP-EhCu1P4SEPOhsAUQmvCvBRCmgbAFEOe6rwUQ9KuwBRCst68FEL-jsAUQ5aiwBRDd6P4SEL2KsAUQzov_EhDKqrAFEPWrsAUQmPz-EhD8hbAFEL2ZsAUQ7qKwBRDM364FEM-osAUQiIewBRDh8q8FENPhrwUQuIuuBRComrAFEPmnsAUQvbauBRCspbAFEMn3rwUQvvmvBRC8-a8FENCNsAU%3D","ROOT_VE_TYPE":16623,"CLIENT_PROTOCOL":"HTTP/1.1","CLIENT_TRANSPORT":"tcp","TIME_CREATED_MS":1705493424682,"VALID_SESSION_TEMPDATA_DOMAINS":["youtu.be","youtube.com","www.youtube.com","web-green-qa.youtube.com","web-release-qa.youtube.com","web-integration-qa.youtube.com","m.youtube.com","mweb-green-qa.youtube.com","mweb-release-qa.youtube.com","mweb-integration-qa.youtube.com","studio.youtube.com","studio-green-qa.youtube.com","studio-integration-qa.youtube.com"],"IDENTITY_MEMENTO":{"visitor_data":"CgtXeUhPX2hPYjJGdyiwh5-tBjIOCgJFUxIIEgQSAgsMIEI%3D"},"ENABLE_JS_API":true,"PLAYER_VARS":{"embedded_player_response":"{\"responseContext\":{\"serviceTrackingParams\":[{\"service\":\"CSI\",\"params\":[{\"key\":\"c\",\"value\":\"WEB_EMBEDDED_PLAYER\"},{\"key\":\"cver\",\"value\":\"1.20240109.00.00\"},{\"key\":\"yt_li\",\"value\":\"0\"},{\"key\":\"GetEmbeddedPlayer_rid\",\"value\":\"0xa21cb4a97eb319e2\"}]},{\"service\":\"GFEEDBACK\",\"params\":[{\"key\":\"logged_in\",\"value\":\"0\"},{\"key\":\"e\",\"value\":\"23804281,23858057,23885487,23946420,23966208,23983296,23998056,24004644,24007246,24034168,24036948,24058861,24077241,24080738,24120820,24135310,24140247,24181174,24187377,24241378,24255543,24255545,24288664,24290971,24367579,24377598,24377909,24382552,24385728,24390675,24428788,24428941,24428945,24439361,24451319,24457856,24458317,24458324,24458329,24458839,24459435,24468724,24485421,24506784,24515423,24524098,24526642,24526770,24526783,24526790,24526797,24526804,24526813,24526827,24528548,24528559,24528573,24528582,24528644,24528649,24528659,24528666,24537200,24542367,24542452,24543669,24546059,24546075,24548627,24548629,24549786,24552800,24559328,24559698,24560416,24566687,24694842,24698452,51000012,51003636,51004018,51006181,51009781,51009900,51010235,51012165,51014091,51016856,51017346,51019626,51020570,51021953,51022793,51025415,51026715,51027870,51028271,51029412,51030101,51030171,51033399,51036511,51037332,51037342,51037349,51037540,51037819,51037893,51041333,51041497,51043774,51045885,51045889,51047539,51048240,51048279,51048489,51049006,51050361,51053689,51055049,51057746,51057848,51057857,51057865,51060353,51061000,51061018,51063131,51063134,51063145,51063156,51063643,51065651,51069269,51070203,51070732,51073969,51074662,51074717,51074723,51075084,51075839,51076318,51078536,51079301,51079353,51079949,51080163,51080182,51080511,51080713,51081382,51082238,51083238,51083577,51083748,51084277,51084288,51084590,51086857,51087987,51088826,51089441,51089858,51090887,51091331,51091644,51092259,51092433,51092918,51092928,51094175,51094202,51094209,51094774,51095273,51098297,51098298\"}]},{\"service\":\"GUIDED_HELP\",\"params\":[{\"key\":\"logged_in\",\"value\":\"0\"}]},{\"service\":\"ECATCHER\",\"params\":[{\"key\":\"client.version\",\"value\":\"20240109\"},{\"key\":\"client.name\",\"value\":\"WEB_EMBEDDED_PLAYER\"},{\"key\":\"client.fexp\",\"value\":\"51010235,24526790,24528573,51063145,24542367,51082238,24526797,24506784,51014091,51094202,51057857,24526804,51049006,24552800,51047539,51009900,51045885,51081382,24377598,51098297,24543669,23998056,51020570,24428945,24367579,51012165,24566687,24058861,24528666,51083748,24528659,51027870,51080713,51057865,51030171,51076318,24459435,24559698,24004644,51006181,51048279,24528559,24526783,24036948,24382552,24255545,24241378,51080511,51069269,51022793,24528582,51083577,24526770,24546075,24458839,23885487,51094175,24526813,24377909,51060353,51074662,51036511,51037540,24542452,51091644,24485421,24458329,51070203,24451319,24526827,51061000,51084288,51078536,24080738,51084590,24135310,24255543,51037332,51048489,51033399,24549786,24548629,51083238,51021953,23858057,23966208,51088826,51028271,51053689,51037893,51092918,51080182,51079301,51075839,24181174,51075084,51045889,51048240,51094774,24559328,51063156,24546059,51016856,24528548,51074717,24468724,24288664,51025415,24034168,24515423,24526642,24428941,24457856,23946420,51063134,51055049,51009781,51080163,51065651,24698452,51057746,24458317,24548627,51037819,51029412,23804281,51086857,51091331,24458324,24537200,51087987,24528649,24694842,24439361,51050361,51043774,24390675,51026715,51092259,51037349,51079353,51063643,51070732,51057848,24077241,51017346,51061018,24385728,23983296,51041333,24560416,24290971,51074723,51098298,24187377,51092928,51019626,51037342,51003636,51041497,24528644,51079949,24524098,51084277,51090887,24428788,51000012,24120820,51089858,51094209,51095273,51073969,51063131,51092433,51030101,24007246,24140247,51089441,51004018\"}]}]},\"trackingParams\":\"CAAQru4BIhMI8uD6jbLkgwMVx11PBB0EjwSY\",\"permissions\":{\"allowAdEvents\":false,\"allowImaMonetization\":false,\"allowPfpUnbranded\":false},\"attestation\":{\"playerAttestationRenderer\":{\"challenge\":\"a\u003d6\\u0026a2\u003d1\\u0026c\u003d1705493424\\u0026d\u003d56\\u0026e\u003ddCrQeUaXkLo\\u0026c1a\u003d1\\u0026c6a\u003d1\\u0026c6b\u003d1\\u0026x4\u003d1\\u0026hh\u003d2sg_7CRdcNeQKXxq7MdAAFRrH5yQxlBVSSiqeDGktuU\",\"botguardData\":{\"program\":\"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\u003d\u003d\",\"interpreterSafeUrl\":{\"privateDoNotAccessOrElseTrustedResourceUrlWrappedValue\":\"//www.google.com/js/th/e4KNrNezHvGe_SA60BxYba8nt93XKTbVAQxfSxUqUHI.js\"},\"serverEnvironment\":1}}},\"previewPlayabilityStatus\":{\"status\":\"UNPLAYABLE\",\"reason\":\"El vídeo no está disponible\",\"errorScreen\":{\"playerErrorMessageRenderer\":{\"reason\":{\"runs\":[{\"text\":\"El vídeo no está disponible\"}]},\"proceedButton\":{\"buttonRenderer\":{\"style\":\"STYLE_DEFAULT\",\"size\":\"SIZE_DEFAULT\",\"isDisabled\":false,\"text\":{\"simpleText\":\"Ver en YouTube\"},\"navigationEndpoint\":{\"clickTrackingParams\":\"CAEQ8FsiEwjy4PqNsuSDAxXHXU8EHQSPBJg\u003d\",\"urlEndpoint\":{\"url\":\"http://www.youtube.com/watch?v\u003ddCrQeUaXkLo\",\"target\":\"TARGET_NEW_WINDOW\"}},\"trackingParams\":\"CAEQ8FsiEwjy4PqNsuSDAxXHXU8EHQSPBJg\u003d\"}},\"thumbnail\":{\"thumbnails\":[{\"url\":\"//s.ytimg.com/yts/img/meh7-vflGevej7.png\",\"width\":140,\"height\":100}]},\"icon\":{\"iconType\":\"ERROR_OUTLINE\"}}},\"contextParams\":\"Q0FFU0FnZ0E\u003d\"},\"embeddedPlayerMode\":\"EMBEDDED_PLAYER_MODE_DEFAULT\",\"embeddedPlayerConfig\":{\"embeddedPlayerMode\":\"EMBEDDED_PLAYER_MODE_DEFAULT\"}}","modestbranding":true,"start":60,"showinfo":false,"video_id":"dCrQeUaXkLo","origin":"genius.com"},"POST_MESSAGE_ORIGIN":"genius.com","VIDEO_ID":"dCrQeUaXkLo","DOMAIN_ADMIN_STATE":""});window.ytcfg.obfuscatedData_ = [];</script><script nonce="74C5vPNFi-6rYQbP51VS2Q">window.yterr=window.yterr||true;window.unhandledErrorMessages={};
window.onerror=function(msg,url,line,opt_columnNumber,opt_error){var err;if(opt_error)err=opt_error;else{err=new Error;err.message=msg;err.fileName=url;err.lineNumber=line;if(!isNaN(opt_columnNumber))err["columnNumber"]=opt_columnNumber}var message=String(err.message);if(!err.message||message in window.unhandledErrorMessages)return;window.unhandledErrorMessages[message]=true;var img=new Image;window.emergencyTimeoutImg=img;img.onload=img.onerror=function(){delete window.emergencyTimeoutImg};var values=
{"client.name":ytcfg.get("INNERTUBE_CONTEXT_CLIENT_NAME"),"client.version":ytcfg.get("INNERTUBE_CONTEXT_CLIENT_VERSION"),"msg":message,"type":"UnhandledWindow"+err.name,"file":err.fileName,"line":err.lineNumber,"stack":(err.stack||"").substr(0,500)};var parts=[ytcfg.get("EMERGENCY_BASE_URL","/error_204?t=jserror&level=ERROR")];var key;for(key in values){var value=values[key];if(value)parts.push(key+"="+encodeURIComponent(value))}img.src=parts.join("&")};
</script><script nonce="74C5vPNFi-6rYQbP51VS2Q">var yterr = yterr || true;</script><link rel="preload" href="/s/player/80b90bfd/player_ias.vflset/es_ES/embed.js" name="player/embed" as="script" nonce="74C5vPNFi-6rYQbP51VS2Q"><script data-id="_gd" nonce="74C5vPNFi-6rYQbP51VS2Q">window.WIZ_global_data = {"MuJWjd":false,"nQyAE":{},"oxN3nb":{"1":false}};</script><title>YouTube</title></head><body class="date-20240117 es_ES ltr  site-center-aligned site-as-giant-card gecko gecko-45" dir="ltr"><div id="player"></div><script src="/s/player/80b90bfd/www-embed-player.vflset/www-embed-player.js" nonce="74C5vPNFi-6rYQbP51VS2Q"></script><script src="/s/player/80b90bfd/player_ias.vflset/es_ES/base.js" name="player/base" nonce="74C5vPNFi-6rYQbP51VS2Q"></script><script nonce="74C5vPNFi-6rYQbP51VS2Q">writeEmbed();</script><script nonce="74C5vPNFi-6rYQbP51VS2Q">if (window.ytcsi) {ytcsi.infoGel({serverTimeMs:  58.0 }, '');}</script><noscript><div class="player-unavailable"><h1 class="message">Se ha producido un error.</h1><div class="submessage">No se puede ejecutar JavaScript.</div></div></noscript></body></html>