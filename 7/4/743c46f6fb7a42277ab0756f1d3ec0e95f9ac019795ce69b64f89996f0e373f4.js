/*!
* cleanslate360pv
*   github.com/premasagar/cleanslate360pv
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
.cleanslate360pv, .cleanslate360pv h1, .cleanslate360pv h2, .cleanslate360pv h3, .cleanslate360pv h4, .cleanslate360pv h5, .cleanslate360pv h6, .cleanslate360pv p, .cleanslate360pv td, .cleanslate360pv dl, .cleanslate360pv tr, .cleanslate360pv dt, .cleanslate360pv ol, .cleanslate360pv form, .cleanslate360pv select, .cleanslate360pv option, .cleanslate360pv pre, .cleanslate360pv div, .cleanslate360pv table,  .cleanslate360pv th, .cleanslate360pv tbody, .cleanslate360pv tfoot, .cleanslate360pv caption, .cleanslate360pv thead, .cleanslate360pv ul, .cleanslate360pv li, .cleanslate360pv address, .cleanslate360pv blockquote, .cleanslate360pv dd, .cleanslate360pv fieldset, .cleanslate360pv li, /*.cleanslate360pv iframe,*/ .cleanslate360pv strong, .cleanslate360pv legend, .cleanslate360pv em, .cleanslate360pv summary, .cleanslate360pv cite, .cleanslate360pv span, .cleanslate360pv input, .cleanslate360pv sup, .cleanslate360pv label, .cleanslate360pv dfn, .cleanslate360pv object, .cleanslate360pv big, .cleanslate360pv q, .cleanslate360pv samp, .cleanslate360pv acronym, .cleanslate360pv small, .cleanslate360pv img, .cleanslate360pv strike, .cleanslate360pv code, .cleanslate360pv sub, .cleanslate360pv ins, .cleanslate360pv textarea, .cleanslate360pv button, .cleanslate360pv var, .cleanslate360pv a, .cleanslate360pv abbr, .cleanslate360pv applet, .cleanslate360pv del, .cleanslate360pv kbd, .cleanslate360pv tt, .cleanslate360pv b, .cleanslate360pv i, .cleanslate360pv hr,

/* HTML5 - Sept 2013 taken from MDN https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list */
.cleanslate360pv article, .cleanslate360pv aside, .cleanslate360pv figure, .cleanslate360pv figcaption, .cleanslate360pv footer, .cleanslate360pv header, .cleanslate360pv menu, .cleanslate360pv nav, .cleanslate360pv section, .cleanslate360pv time, .cleanslate360pv mark, .cleanslate360pv audio, .cleanslate360pv video, .cleanslate360pv abbr, .cleanslate360pv address, .cleanslate360pv area, .cleanslate360pv blockquote, .cleanslate360pv canvas, .cleanslate360pv caption, .cleanslate360pv cite, .cleanslate360pv code, .cleanslate360pv colgroup, .cleanslate360pv col, .cleanslate360pv datalist, .cleanslate360pv fieldset, .cleanslate360pv main, .cleanslate360pv map, .cleanslate360pv meta, .cleanslate360pv optgroup, .cleanslate360pv output, .cleanslate360pv progress, .cleanslate360pv svg {
    background-attachment:scroll;
    background-color:transparent;
    background-image:none; /* This rule affects the use of pngfix JavaScript http://dillerdesign.com/experiment/DD_BelatedPNG for IE6, which is used to force the browser to recognise alpha-transparent PNGs files that replace the IE6 lack of PNG transparency. (The rule overrides the VML image that is used to replace the given CSS background-image). If you don't know what that means, then you probably haven't used the pngfix script, and this comment may be ignored :) */
    background-position:0 0;
    background-repeat:repeat;
    border-color:black;
    border-color:initial; /* `border-color` should match font color. Modern browsers (incl. IE9) allow the use of "currentColor" to match the current font 'color' value <http://www.w3.org/TR/css3-color/#currentcolor>. For older browsers, a default of 'black' is given before this rule. Guideline to support older browsers: if you haven't already declared a border-color for an element, be sure to do so, e.g. when you first declare the border-width. */
    border-radius:0;
    border-style:none;
    border-width:medium;
    bottom:auto;
    clear:none;
    clip:auto;
    color:initial;
    counter-increment:none;
    counter-reset:none;
    cursor:auto;
    direction:initial;
    display:inline;
    float:none;
    font-family: inherit; /* As with other inherit values, this needs to be set on the root container element */
    font-size: initial;
    font-style:initial;
    font-variant:normal;
    font-weight:initial;
    height:auto;
    left:auto;
    letter-spacing:normal;
    line-height:initial;
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
    text-align:initial;
    text-decoration:initial;
    text-indent:0;
    text-transform:none;
    top:auto;
    unicode-bidi:normal;
    vertical-align:baseline;
    visibility:initial;
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
    -webkit-column-rule: medium none black;
       -moz-column-rule: medium none black;
            column-rule: medium none black;
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
.cleanslate360pv, .cleanslate360pv h3, .cleanslate360pv h5, .cleanslate360pv p, .cleanslate360pv h1, .cleanslate360pv dl, .cleanslate360pv dt, .cleanslate360pv h6, .cleanslate360pv ol, .cleanslate360pv form, .cleanslate360pv option, .cleanslate360pv pre, .cleanslate360pv div, .cleanslate360pv h2, .cleanslate360pv caption, .cleanslate360pv h4, .cleanslate360pv ul, .cleanslate360pv address, .cleanslate360pv blockquote, .cleanslate360pv dd, .cleanslate360pv fieldset, .cleanslate360pv hr,

/* HTML5 new elements */
.cleanslate360pv article, .cleanslate360pv dialog, .cleanslate360pv figure, .cleanslate360pv footer, .cleanslate360pv header, .cleanslate360pv hgroup, .cleanslate360pv menu, .cleanslate360pv nav, .cleanslate360pv section, .cleanslate360pv audio, .cleanslate360pv video, .cleanslate360pv address, .cleanslate360pv blockquote, .cleanslate360pv colgroup, .cleanslate360pv main, .cleanslate360pv progress, .cleanslate360pv summary {
    display:block;
}
.cleanslate360pv h1, .cleanslate360pv h2, .cleanslate360pv h3, .cleanslate360pv h4, .cleanslate360pv h5, .cleanslate360pv h6 {
    font-weight: bold;
}
.cleanslate360pv h1 {
    font-size: 2em;
    padding: .67em 0;
}
.cleanslate360pv h2 {
    font-size: 1.5em;
    padding: .83em 0;
}
.cleanslate360pv h3 {
    font-size: 1.17em;
    padding: .83em 0;
}
.cleanslate360pv h4 {
    font-size: 1em;
}
.cleanslate360pv h5 {
    font-size: .83em;
}
.cleanslate360pv p {
    margin: 1em 0;
}
.cleanslate360pv table {
    display: table;
}
.cleanslate360pv thead {
    display: table-header-group;
}
.cleanslate360pv tbody {
    display: table-row-group;
}
.cleanslate360pv tfoot {
    display: table-footer-group;
}
.cleanslate360pv tr {
    display: table-row;
}
.cleanslate360pv th, .cleanslate360pv td {
    display: table-cell;
    padding: 2px;
}

/* == SPECIFIC ELEMENTS == */
/* Some of these are browser defaults; some are just useful resets */
.cleanslate360pv ol, .cleanslate360pv ul {
    margin: 1em 0;
}
.cleanslate360pv ul li, .cleanslate360pv ul ul li, .cleanslate360pv ul ul ul li, .cleanslate360pv ol li, .cleanslate360pv ol ol li, .cleanslate360pv ol ol ol li, .cleanslate360pv ul ol ol li, .cleanslate360pv ul ul ol li, .cleanslate360pv ol ul ul li, .cleanslate360pv ol ol ul li {
    list-style-position: inside;
    margin-top: .08em;
}
.cleanslate360pv ol ol, .cleanslate360pv ol ol ol, .cleanslate360pv ul ul, .cleanslate360pv ul ul ul, .cleanslate360pv ol ul, .cleanslate360pv ol ul ul, .cleanslate360pv ol ol ul, .cleanslate360pv ul ol, .cleanslate360pv ul ol ol, .cleanslate360pv ul ul ol {
    padding-left: 40px;
    margin: 0;
}
/* helper for general navigation */
.cleanslate360pv nav ul, .cleanslate360pv nav ol {
    list-style-type:none;

}
.cleanslate360pv ul, .cleanslate360pv menu {
    list-style-type:disc;
}
.cleanslate360pv ol {
    list-style-type:decimal;
}
.cleanslate360pv ol ul, .cleanslate360pv ul ul, .cleanslate360pv menu ul, .cleanslate360pv ol menu, .cleanslate360pv ul menu, .cleanslate360pv menu menu {
    list-style-type:circle;
}
.cleanslate360pv ol ol ul, .cleanslate360pv ol ul ul, .cleanslate360pv ol menu ul, .cleanslate360pv ol ol menu, .cleanslate360pv ol ul menu, .cleanslate360pv ol menu menu, .cleanslate360pv ul ol ul, .cleanslate360pv ul ul ul, .cleanslate360pv ul menu ul, .cleanslate360pv ul ol menu, .cleanslate360pv ul ul menu, .cleanslate360pv ul menu menu, .cleanslate360pv menu ol ul, .cleanslate360pv menu ul ul, .cleanslate360pv menu menu ul, .cleanslate360pv menu ol menu, .cleanslate360pv menu ul menu, .cleanslate360pv menu menu menu {
    list-style-type:square;
}
.cleanslate360pv li {
    display:list-item;
    /* Fixes IE7 issue with positioning of nested bullets */
    min-height:auto;
    min-width:auto;
    padding-left: 20px; /* replace -webkit-padding-start: 40px; */
}
.cleanslate360pv strong {
    font-weight:bold;
}
.cleanslate360pv em {
    font-style:italic;
}
.cleanslate360pv kbd, .cleanslate360pv samp, .cleanslate360pv code, .cleanslate360pv pre {
  font-family:monospace;
}
.cleanslate360pv a {
    color: blue;
    text-decoration: underline;
}
.cleanslate360pv a:visited {
    color: #529;
}
.cleanslate360pv a, .cleanslate360pv a *, .cleanslate360pv input[type=submit], .cleanslate360pv input[type=button], .cleanslate360pv input[type=radio], .cleanslate360pv input[type=checkbox], .cleanslate360pv select, .cleanslate360pv button {
    cursor:pointer;
}
.cleanslate360pv button, .cleanslate360pv input[type=submit] {
    text-align: center;
    padding: 2px 6px 3px;
    border-radius: 4px;
    text-decoration: none;
    font-family: arial, helvetica, sans-serif;
    font-size: small;
    background: white;
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
.cleanslate360pv button:active, .cleanslate360pv input[type=submit]:active, .cleanslate360pv input[type=button]:active, .cleanslate360pv button:active {
	background: rgb(59,103,158); /* Old browsers */
	background: -moz-linear-gradient(top, rgba(59,103,158,1) 0%, rgba(43,136,217,1) 50%, rgba(32,124,202,1) 51%, rgba(125,185,232,1) 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(59,103,158,1)), color-stop(50%,rgba(43,136,217,1)), color-stop(51%,rgba(32,124,202,1)), color-stop(100%,rgba(125,185,232,1))); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top, rgba(59,103,158,1) 0%,rgba(43,136,217,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top, rgba(59,103,158,1) 0%,rgba(43,136,217,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%); /* Opera 11.10+ */
	background: -ms-linear-gradient(top, rgba(59,103,158,1) 0%,rgba(43,136,217,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%); /* IE10+ */
	background: linear-gradient(to bottom, rgba(59,103,158,1) 0%,rgba(43,136,217,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%); /* W3C */
	border-color: #5259b0;
}
.cleanslate360pv button {
    padding: 1px 6px 2px 6px;
    margin-right: 5px;
}
.cleanslate360pv input[type=hidden] {
    display:none;
}
/* restore form defaults */
.cleanslate360pv textarea {
    -webkit-appearance: textarea;
    background: white;
    padding: 2px;
    margin-left: 4px;
    word-wrap: break-word;
    white-space: pre-wrap;
    font-size: 11px;
    font-family: arial, helvetica, sans-serif;
    line-height: 13px;
    resize: both;
}
.cleanslate360pv select, .cleanslate360pv textarea, .cleanslate360pv input {
    border:1px solid #ccc;
}
.cleanslate360pv select {
    font-size: 11px;
    font-family: helvetica, arial, sans-serif;
    display: inline-block;
}
.cleanslate360pv textarea:focus, .cleanslate360pv input:focus {
    outline: auto 5px -webkit-focus-ring-color;
    outline: initial;
}
.cleanslate360pv input[type=text] {
    background: white;
    padding: 1px;
    font-family: initial;
    font-size: small;
}
.cleanslate360pv input[type=checkbox], .cleanslate360pv input[type=radio] {
    border: 1px #2b2b2b solid;
    border-radius: 4px;
}
.cleanslate360pv input[type=checkbox], .cleanslate360pv input[type=radio] {
    outline: initial;
}
.cleanslate360pv input[type=radio] {
    margin: 2px 2px 3px 2px;
}
.cleanslate360pv abbr[title], .cleanslate360pv acronym[title], .cleanslate360pv dfn[title] {
    cursor:help;
    border-bottom-width:1px;
    border-bottom-style:dotted;
}
.cleanslate360pv ins {
    background-color:#ff9;
    color:black;
}
.cleanslate360pv del {
    text-decoration: line-through;
}
.cleanslate360pv blockquote, .cleanslate360pv q  {
    quotes:none; /* HTML5 */
}
.cleanslate360pv blockquote:before, .cleanslate360pv blockquote:after, .cleanslate360pv q:before, .cleanslate360pv q:after, .cleanslate360pv li:before, .cleanslate360pv li:after  {
    content:"";
}
.cleanslate360pv input, .cleanslate360pv select {
    vertical-align:middle;
}

.cleanslate360pv table {
    border-collapse:collapse;
    border-spacing:0;
}
.cleanslate360pv hr {
    display:block;
    height:1px;
    border:0;
    border-top:1px solid #ccc;
    margin:1em 0;
}
.cleanslate360pv *[dir=rtl] {
    direction: rtl;
}
.cleanslate360pv mark {
    background-color:#ff9;
    color:black;
    font-style:italic;
    font-weight:bold;
}
.cleanslate360pv menu {
    padding-left: 40px;
    padding-top: 8px;
}

/* additional helpers */
.cleanslate360pv [hidden],
.cleanslate360pv template {
    display: none;
}
.cleanslate360pv abbr[title] {
    border-bottom: 1px dotted;
}
.cleanslate360pv sub, .cleanslate360pv sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}
.cleanslate360pv sup {
    top: -0.5em;
}
.cleanslate360pv sub {
    bottom: -0.25em;
}
.cleanslate360pv img {
    border: 0;
}
.cleanslate360pv figure {
    margin: 0;
}
.cleanslate360pv textarea {
    overflow: auto;
    vertical-align: top;
}

/* == ROOT CONTAINER ELEMENT == */
/* This contains default values for child elements to inherit  */
.cleanslate360pv {
    font-size: medium;
    line-height: 1;
    direction:ltr;
    text-align: left; /* for IE, Opera */
    text-align: start; /* recommended W3C Spec */
    font-family: "Times New Roman", Times, serif; /* Override this with whatever font-family is required */
    color: black;
    font-style:normal;
    font-weight:normal;
    text-decoration:none;
    list-style-type:disc;
}

.cleanslate360pv pre {
    white-space:pre;
}

/**/
#adContainerDiv #slotContainer video, #adContainerDiv #slotContainer iframe {
    width: 100%;
    height: 100%;
}