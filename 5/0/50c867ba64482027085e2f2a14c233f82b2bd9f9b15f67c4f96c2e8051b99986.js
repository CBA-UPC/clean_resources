/*
Theme Name: Twenty Seventeen
Theme URI: https://wordpress.org/themes/twentyseventeen/
Author: the WordPress team
Author URI: https://wordpress.org/
Description: Twenty Seventeen brings your site to life with header video and immersive featured images. With a focus on business sites, it features multiple sections on the front page as well as widgets, navigation and social menus, a logo, and more. Personalize its asymmetrical grid with a custom color scheme and showcase your multimedia content with post formats. Our default theme for 2017 works great in many languages, for any abilities, and on any device.
Version: 3.5
Tested up to: 6.4
Requires at least: 4.7
Requires PHP: 5.2.4
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: twentyseventeen
Tags: one-column, two-columns, right-sidebar, flexible-header, accessibility-ready, custom-colors, custom-header, custom-menu, custom-logo, editor-style, featured-images, footer-widgets, post-formats, rtl-language-support, sticky-post, theme-options, threaded-comments, translation-ready, block-patterns

This theme, like WordPress, is licensed under the GPL.
Use it to make something cool, have fun, and share what you've learned with others.
*/

/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
1.0 Normalize
2.0 Accessibility
3.0 Alignments
4.0 Clearings
5.0 Typography
6.0 Forms
7.0 Formatting
8.0 Lists
9.0 Tables
10.0 Links
11.0 Featured Image Hover
12.0 Navigation
13.0 Layout
   13.1 Header
   13.2 Front Page
   13.3 Regular Content
   13.4 Posts
   13.5 Pages
   13.6 Footer
14.0 Comments
15.0 Widgets
16.0 Media
   16.1 Galleries
17.0 Customizer
18.0 SVGs Fallbacks
19.0 Media Queries
20.0 Print
--------------------------------------------------------------*/

/*--------------------------------------------------------------
1.0 Normalize
Styles based on Normalize v5.0.0 @link https://github.com/necolas/normalize.css
--------------------------------------------------------------*/

html {
	font-family: sans-serif;
	line-height: 1.15;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}

body {
	margin: 0;
}

article,
aside,
footer,
header,
nav,
section {
	display: block;
}

h1 {
	font-size: 2em;
	margin: 0.67em 0;
}

figcaption,
figure,
main {
	display: block;
}

figure {
	margin: 1em 0;
}

hr {
	-webkit-box-sizing: content-box;
	-moz-box-sizing: content-box;
	box-sizing: content-box;
	height: 0;
	overflow: visible;
}

pre {
	font-family: monospace, monospace;
	font-size: 1em;
}

a {
	background-color: transparent;
	-webkit-text-decoration-skip: objects;
}

a:active,
a:hover {
	outline-width: 0;
}

abbr[title] {
	border-bottom: 1px #767676 dotted;
	text-decoration: none;
}

b,
strong {
	font-weight: inherit;
}

b,
strong {
	font-weight: 700;
}

code,
kbd,
samp {
	font-family: monospace, monospace;
	font-size: 1em;
}

dfn {
	font-style: italic;
}

mark {
	background-color: #eee;
	color: #222;
}

small {
	font-size: 80%;
}

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

audio,
video {
	display: inline-block;
}

audio:not([controls]) {
	display: none;
	height: 0;
}

img {
	border-style: none;
}

svg:not(:root) {
	overflow: hidden;
}

button,
input,
optgroup,
select,
textarea {
	font-family: sans-serif;
	font-size: 100%;
	line-height: 1.15;
	margin: 0;
}

button,
input {
	overflow: visible;
}

button,
select {
	text-transform: none;
}

button,
html [type="button"],
[type="reset"],
[type="submit"] {
	-webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
	border-style: none;
	padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
	outline: 1px dotted ButtonText;
}

fieldset {
	border: 1px solid #bbb;
	margin: 0 2px;
	padding: 0.35em 0.625em 0.75em;
}

legend {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	color: inherit;
	display: table;
	max-width: 100%;
	padding: 0;
	white-space: normal;
}

progress {
	display: inline-block;
	vertical-align: baseline;
}

textarea {
	overflow: auto;
}

[type="checkbox"],
[type="radio"] {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
	height: auto;
}

[type="search"] {
	-webkit-appearance: textfield;
	outline-offset: -2px;
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
	-webkit-appearance: none;
}

::-webkit-file-upload-button {
	-webkit-appearance: button;
	font: inherit;
}

details,
menu {
	display: block;
}

summary {
	display: list-item;
}

canvas {
	display: inline-block;
}

template {
	display: none;
}

[hidden] {
	display: none;
}

/*--------------------------------------------------------------
2.0 Accessibility
--------------------------------------------------------------*/

/* Text meant only for screen readers. */

.screen-reader-text {
	clip: rect(1px, 1px, 1px, 1px);
	height: 1px;
	overflow: hidden;
	position: absolute !important;
	width: 1px;
	word-wrap: normal !important; /* Many screen reader and browser combinations announce broken words as they would appear visually. */
}

.screen-reader-text:focus {
	background-color: #f1f1f1;
	-webkit-border-radius: 3px;
	border-radius: 3px;
	-webkit-box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
	box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
	clip: auto !important;
	color: #21759b;
	display: block;
	font-size: 14px;
	font-size: 0.875rem;
	font-weight: 700;
	height: auto;
	left: 5px;
	line-height: normal;
	padding: 15px 23px 14px;
	text-decoration: none;
	top: 5px;
	width: auto;
	z-index: 100000; /* Above WP toolbar. */
}

/*--------------------------------------------------------------
3.0 Alignments
--------------------------------------------------------------*/

.alignleft {
	display: inline;
	float: left;
	margin-right: 1.5em;
}

.alignright {
	display: inline;
	float: right;
	margin-left: 1.5em;
}

.aligncenter {
	clear: both;
	display: block;
	margin-left: auto;
	margin-right: auto;
}

/*--------------------------------------------------------------
4.0 Clearings
--------------------------------------------------------------*/

.clear:before,
.clear:after,
.entry-content:before,
.entry-content:after,
.entry-footer:before,
.entry-footer:after,
.comment-content:before,
.comment-content:after,
.site-header:before,
.site-header:after,
.site-content:before,
.site-content:after,
.site-footer:before,
.site-footer:after,
.nav-links:before,
.nav-links:after,
.pagination:before,
.pagination:after,
.comment-author:before,
.comment-author:after,
.widget-area:before,
.widget-area:after,
.widget:before,
.widget:after,
.comment-meta:before,
.comment-meta:after {
	content: "";
	display: table;
	table-layout: fixed;
}

.clear:after,
.entry-content:after,
.entry-footer:after,
.comment-content:after,
.site-header:after,
.site-content:after,
.site-footer:after,
.nav-links:after,
.pagination:after,
.comment-author:after,
.widget-area:after,
.widget:after,
.comment-meta:after {
	clear: both;
}

/*--------------------------------------------------------------
5.0 Typography
--------------------------------------------------------------*/

body,
button,
input,
select,
textarea {
	color: #333;
	font-family: "Libre Franklin", "Helvetica Neue", helvetica, arial, sans-serif;
	font-size: 15px;
	font-size: 0.9375rem;
	font-weight: 400;
	line-height: 1.66;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	clear: both;
	line-height: 1.4;
	margin: 0 0 0.75em;
	padding: 1.5em 0 0;
}

h1:first-child,
h2:first-child,
h3:first-child,
h4:first-child,
h5:first-child,
h6:first-child {
	padding-top: 0;
}

h1 {
	font-size: 24px;
	font-size: 1.5rem;
	font-weight: 300;
}

h2,
.home.blog .entry-title {
	color: #666;
	font-size: 20px;
	font-size: 1.25rem;
	font-weight: 300;
}

h3 {
	color: #333;
	font-size: 18px;
	font-size: 1.125rem;
	font-weight: 300;
}

h4 {
	color: #333;
	font-size: 16px;
	font-size: 1rem;
	font-weight: 800;
}

h5 {
	color: #767676;
	font-size: 13px;
	font-size: 0.8125rem;
	font-weight: 800;
	letter-spacing: 0.15em;
	text-transform: uppercase;
}

h6 {
	color: #333;
	font-size: 15px;
	font-size: 0.9375rem;
	font-weight: 800;
}

p {
	margin: 0 0 1.5em;
	padding: 0;
}

dfn,
cite,
em,
i {
	font-style: italic;
}

blockquote {
	color: #666;
	font-size: 18px;
	font-size: 1.125rem;
	font-style: italic;
	line-height: 1.7;
	margin: 0;
	overflow: hidden;
	padding: 0;
}

blockquote cite {
	display: block;
	font-style: normal;
	font-weight: 600;
	margin-top: 0.5em;
}

address {
	margin: 0 0 1.5em;
}

pre {
	background: #eee;
	font-family: "Courier 10 Pitch", Courier, monospace;
	font-size: 15px;
	font-size: 0.9375rem;
	line-height: 1.6;
	margin-bottom: 1.6em;
	max-width: 100%;
	overflow: auto;
	padding: 1.6em;
}

code,
kbd,
tt,
var {
	font-family: Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;
	font-size: 15px;
	font-size: 0.9375rem;
}

abbr,
acronym {
	border-bottom: 1px dotted #666;
	cursor: help;
}

mark,
ins {
	background: #eee;
	text-decoration: none;
}

big {
	font-size: 125%;
}

blockquote {
	quotes: "" "";
}

q {
	quotes: "“" "”" "‘" "’";
}

blockquote:before,
blockquote:after {
	content: "";
}

:focus {
	outline: none;
}

/* Typography for Arabic Font */

html[lang="ar"] body,
html[lang="ar"] button,
html[lang="ar"] input,
html[lang="ar"] select,
html[lang="ar"] textarea,
html[lang="ary"] body,
html[lang="ary"] button,
html[lang="ary"] input,
html[lang="ary"] select,
html[lang="ary"] textarea,
html[lang="azb"] body,
html[lang="azb"] button,
html[lang="azb"] input,
html[lang="azb"] select,
html[lang="azb"] textarea,
html[lang^="fa-"] body,
html[lang^="fa-"] button,
html[lang^="fa-"] input,
html[lang^="fa-"] select,
html[lang^="fa-"] textarea,
html[lang="haz"] body,
html[lang="haz"] button,
html[lang="haz"] input,
html[lang="haz"] select,
html[lang="haz"] textarea,
html[lang="ps"] body,
html[lang="ps"] button,
html[lang="ps"] input,
html[lang="ps"] select,
html[lang="ps"] textarea,
html[lang="ur"] body,
html[lang="ur"] button,
html[lang="ur"] input,
html[lang="ur"] select,
html[lang="ur"] textarea {
	font-family: Tahoma, Arial, sans-serif;
}

html[lang="ar"] h1,
html[lang="ar"] h2,
html[lang="ar"] h3,
html[lang="ar"] h4,
html[lang="ar"] h5,
html[lang="ar"] h6,
html[lang="ary"] h1,
html[lang="ary"] h2,
html[lang="ary"] h3,
html[lang="ary"] h4,
html[lang="ary"] h5,
html[lang="ary"] h6,
html[lang="azb"] h1,
html[lang="azb"] h2,
html[lang="azb"] h3,
html[lang="azb"] h4,
html[lang="azb"] h5,
html[lang="azb"] h6,
html[lang^="fa-"] h1,
html[lang^="fa-"] h2,
html[lang^="fa-"] h3,
html[lang^="fa-"] h4,
html[lang^="fa-"] h5,
html[lang^="fa-"] h6,
html[lang="haz"] h1,
html[lang="haz"] h2,
html[lang="haz"] h3,
html[lang="haz"] h4,
html[lang="haz"] h5,
html[lang="haz"] h6,
html[lang="ps"] h1,
html[lang="ps"] h2,
html[lang="ps"] h3,
html[lang="ps"] h4,
html[lang="ps"] h5,
html[lang="ps"] h6,
html[lang="ur"] h1,
html[lang="ur"] h2,
html[lang="ur"] h3,
html[lang="ur"] h4,
html[lang="ur"] h5,
html[lang="ur"] h6 {
	font-weight: 700;
}

/* Typography for Chinese Font */

html[lang^="zh-"] body,
html[lang^="zh-"] button,
html[lang^="zh-"] input,
html[lang^="zh-"] select,
html[lang^="zh-"] textarea {
	font-family: "PingFang TC", "Helvetica Neue", Helvetica, STHeitiTC-Light, Arial, sans-serif;
}

html[lang="zh-CN"] body,
html[lang="zh-CN"] button,
html[lang="zh-CN"] input,
html[lang="zh-CN"] select,
html[lang="zh-CN"] textarea {
	font-family: "PingFang SC", "Helvetica Neue", Helvetica, STHeitiSC-Light, Arial, sans-serif;
}

html[lang^="zh-"] h1,
html[lang^="zh-"] h2,
html[lang^="zh-"] h3,
html[lang^="zh-"] h4,
html[lang^="zh-"] h5,
html[lang^="zh-"] h6 {
	font-weight: 700;
}

/* Typography for Cyrillic Font */

html[lang="bg-BG"] body,
html[lang="bg-BG"] button,
html[lang="bg-BG"] input,
html[lang="bg-BG"] select,
html[lang="bg-BG"] textarea,
html[lang="ru-RU"] body,
html[lang="ru-RU"] button,
html[lang="ru-RU"] input,
html[lang="ru-RU"] select,
html[lang="ru-RU"] textarea,
html[lang="uk"] body,
html[lang="uk"] button,
html[lang="uk"] input,
html[lang="uk"] select,
html[lang="uk"] textarea {
	font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
}

html[lang="bg-BG"] h1,
html[lang="bg-BG"] h2,
html[lang="bg-BG"] h3,
html[lang="bg-BG"] h4,
html[lang="bg-BG"] h5,
html[lang="bg-BG"] h6,
html[lang="ru-RU"] h1,
html[lang="ru-RU"] h2,
html[lang="ru-RU"] h3,
html[lang="ru-RU"] h4,
html[lang="ru-RU"] h5,
html[lang="ru-RU"] h6,
html[lang="uk"] h1,
html[lang="uk"] h2,
html[lang="uk"] h3,
html[lang="uk"] h4,
html[lang="uk"] h5,
html[lang="uk"] h6 {
	font-weight: 700;
	line-height: 1.2;
}

/* Typography for Devanagari Font */

html[lang="bn-BD"] body,
html[lang="bn-BD"] button,
html[lang="bn-BD"] input,
html[lang="bn-BD"] select,
html[lang="bn-BD"] textarea,
html[lang="hi-IN"] body,
html[lang="hi-IN"] button,
html[lang="hi-IN"] input,
html[lang="hi-IN"] select,
html[lang="hi-IN"] textarea,
html[lang="mr-IN"] body,
html[lang="mr-IN"] button,
html[lang="mr-IN"] input,
html[lang="mr-IN"] select,
html[lang="mr-IN"] textarea {
	font-family: Arial, sans-serif;
}

html[lang="bn-BD"] h1,
html[lang="bn-BD"] h2,
html[lang="bn-BD"] h3,
html[lang="bn-BD"] h4,
html[lang="bn-BD"] h5,
html[lang="bn-BD"] h6,
html[lang="hi-IN"] h1,
html[lang="hi-IN"] h2,
html[lang="hi-IN"] h3,
html[lang="hi-IN"] h4,
html[lang="hi-IN"] h5,
html[lang="hi-IN"] h6,
html[lang="mr-IN"] h1,
html[lang="mr-IN"] h2,
html[lang="mr-IN"] h3,
html[lang="mr-IN"] h4,
html[lang="mr-IN"] h5,
html[lang="mr-IN"] h6 {
	font-weight: 700;
}

/* Typography for Greek Font */

html[lang="el"] body,
html[lang="el"] button,
html[lang="el"] input,
html[lang="el"] select,
html[lang="el"] textarea {
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[lang="el"] h1,
html[lang="el"] h2,
html[lang="el"] h3,
html[lang="el"] h4,
html[lang="el"] h5,
html[lang="el"] h6 {
	font-weight: 700;
	line-height: 1.3;
}

/* Typography for Gujarati Font */

html[lang="gu-IN"] body,
html[lang="gu-IN"] button,
html[lang="gu-IN"] input,
html[lang="gu-IN"] select,
html[lang="gu-IN"] textarea {
	font-family: Arial, sans-serif;
}

html[lang="gu-IN"] h1,
html[lang="gu-IN"] h2,
html[lang="gu-IN"] h3,
html[lang="gu-IN"] h4,
html[lang="gu-IN"] h5,
html[lang="gu-IN"] h6 {
	font-weight: 700;
}

/* Typography for Hebrew Font */

html[lang="he-IL"] body,
html[lang="he-IL"] button,
html[lang="he-IL"] input,
html[lang="he-IL"] select,
html[lang="he-IL"] textarea {
	font-family: "Arial Hebrew", Arial, sans-serif;
}

html[lang="he-IL"] h1,
html[lang="he-IL"] h2,
html[lang="he-IL"] h3,
html[lang="he-IL"] h4,
html[lang="he-IL"] h5,
html[lang="he-IL"] h6 {
	font-weight: 700;
}

/* Typography for Japanese Font */

html[lang="ja"] body,
html[lang="ja"] button,
html[lang="ja"] input,
html[lang="ja"] select,
html[lang="ja"] textarea {
	font-family: "Hiragino Kaku Gothic Pro", Meiryo, sans-serif;
}

html[lang="ja"] h1,
html[lang="ja"] h2,
html[lang="ja"] h3,
html[lang="ja"] h4,
html[lang="ja"] h5,
html[lang="ja"] h6 {
	font-weight: 700;
}

/* Typography for Korean font */

html[lang="ko-KR"] body,
html[lang="ko-KR"] button,
html[lang="ko-KR"] input,
html[lang="ko-KR"] select,
html[lang="ko-KR"] textarea {
	font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic", Dotum, sans-serif;
}

html[lang="ko-KR"] h1,
html[lang="ko-KR"] h2,
html[lang="ko-KR"] h3,
html[lang="ko-KR"] h4,
html[lang="ko-KR"] h5,
html[lang="ko-KR"] h6 {
	font-weight: 600;
}

/* Typography for Thai Font */

html[lang="th"] h1,
html[lang="th"] h2,
html[lang="th"] h3,
html[lang="th"] h4,
html[lang="th"] h5,
html[lang="th"] h6 {
	line-height: 1.65;
	font-family: "Sukhumvit Set", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[lang="th"] body,
html[lang="th"] button,
html[lang="th"] input,
html[lang="th"] select,
html[lang="th"] textarea {
	line-height: 1.8;
	font-family: "Sukhumvit Set", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

/* Remove letter-spacing for all non-latin alphabets */

html[lang="ar"] *,
html[lang="ary"] *,
html[lang="azb"] *,
html[lang^="fa-"] *,
html[lang="haz"] *,
html[lang="ps"] *,
html[lang="ur"] *,
html[lang^="zh-"] *,
html[lang="bg-BG"] *,
html[lang="ru-RU"] *,
html[lang="uk"] *,
html[lang="bn-BD"] *,
html[lang="hi-IN"] *,
html[lang="mr-IN"] *,
html[lang="el"] *,
html[lang="gu-IN"] *,
html[lang="he-IL"] *,
html[lang="ja"] *,
html[lang="ko-KR"] *,
html[lang="th"] * {
	letter-spacing: 0 !important;
}

/*--------------------------------------------------------------
6.0 Forms
--------------------------------------------------------------*/

label {
	color: #333;
	display: block;
	font-weight: 800;
	margin-bottom: 0.5em;
}

fieldset {
	margin-bottom: 1em;
}

input[type="text"],
input[type="email"],
input[type="url"],
input[type="password"],
input[type="search"],
input[type="number"],
input[type="tel"],
input[type="range"],
input[type="date"],
input[type="month"],
input[type="week"],
input[type="time"],
input[type="datetime"],
input[type="datetime-local"],
input[type="color"],
textarea {
	color: #666;
	background: #fff;
	background-image: -webkit-linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0));
	border: 1px solid #bbb;
	-webkit-border-radius: 3px;
	border-radius: 3px;
	display: block;
	padding: 0.7em;
	width: 100%;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="password"]:focus,
input[type="search"]:focus,
input[type="number"]:focus,
input[type="tel"]:focus,
input[type="range"]:focus,
input[type="date"]:focus,
input[type="month"]:focus,
input[type="week"]:focus,
input[type="time"]:focus,
input[type="datetime"]:focus,
input[type="datetime-local"]:focus,
input[type="color"]:focus,
textarea:focus {
	color: #222;
	border-color: #333;
}

select {
	border: 1px solid #bbb;
	-webkit-border-radius: 3px;
	border-radius: 3px;
	height: 3em;
	max-width: 100%;
}

input[type="radio"]:focus,
input[type="checkbox"]:focus {
	outline: thin dotted #333;
}

input[type="radio"],
input[type="checkbox"] {
	margin-right: 0.5em;
}

input[type="radio"] + label,
input[type="checkbox"] + label {
	font-weight: 400;
}

button,
input[type="button"],
input[type="submit"] {
	background-color: #222;
	border: 0;
	-webkit-border-radius: 2px;
	border-radius: 2px;
	-webkit-box-shadow: none;
	box-shadow: none;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	font-size: 14px;
	font-size: 0.875rem;
	font-weight: 800;
	line-height: 1;
	padding: 1em 2em;
	text-shadow: none;
	-webkit-transition: background 0.2s;
	transition: background 0.2s;
}

input + button,
input + input[type="button"],
input + input[type="submit"] {
	padding: 0.75em 2em;
}

button.secondary,
input[type="reset"],
input[type="button"].secondary,
input[type="reset"].secondary,
input[type="submit"].secondary {
	background-color: #ddd;
	color: #222;
}

:not( .mejs-button ) > button:hover,
:not( .mejs-button ) > button:focus,
input[type="button"]:hover,
input[type="button"]:focus,
input[type="submit"]:hover,
input[type="submit"]:focus {
	background: #767676;
}

button.secondary:hover,
button.secondary:focus,
input[type="reset"]:hover,
input[type="reset"]:focus,
input[type="button"].secondary:hover,
input[type="button"].secondary:focus,
input[type="reset"].secondary:hover,
input[type="reset"].secondary:focus,
input[type="submit"].secondary:hover,
input[type="submit"].secondary:focus {
	background: #bbb;
}

/* Placeholder text color -- selectors need to be separate to work. */
::-webkit-input-placeholder {
	color: #333;
	font-family: "Libre Franklin", "Helvetica Neue", helvetica, arial, sans-serif;
}

:-moz-placeholder {
	color: #333;
	font-family: "Libre Franklin", "Helvetica Neue", helvetica, arial, sans-serif;
}

::-moz-placeholder {
	color: #333;
	font-family: "Libre Franklin", "Helvetica Neue", helvetica, arial, sans-serif;
	opacity: 1;
	/* Since FF19 lowers the opacity of the placeholder by default */
}

:-ms-input-placeholder {
	color: #333;
	font-family: "Libre Franklin", "Helvetica Neue", helvetica, arial, sans-serif;
}

/*--------------------------------------------------------------
7.0 Formatting
--------------------------------------------------------------*/

hr {
	background-color: #bbb;
	border: 0;
	height: 1px;
	margin-bottom: 1.5em;
}

/*--------------------------------------------------------------
8.0 Lists
--------------------------------------------------------------*/

ul,
ol {
	margin: 0 0 1.5em;
	padding: 0;
}

ul {
	list-style: disc;
}

ol {
	list-style: decimal;
}

li > ul,
li > ol {
	margin-bottom: 0;
	margin-left: 1.5em;
}

dt {
	font-weight: 700;
}

dd {
	margin: 0 1.5em 1.5em;
}

/*--------------------------------------------------------------
9.0 Tables
--------------------------------------------------------------*/

table {
	border-collapse: collapse;
	margin: 0 0 1.5em;
	width: 100%;
}

thead th {
	border-bottom: 2px solid #bbb;
	padding-bottom: 0.5em;
}

th {
	padding: 0.4em;
	text-align: left;
}

tr {
	border-bottom: 1px solid #eee;
}

td {
	padding: 0.4em;
}

th,
td,
th:first-child,
td:first-child {
	padding-left: 0;
}

th:last-child,
td:last-child {
	padding-right: 0;
}

/*--------------------------------------------------------------
10.0 Links
--------------------------------------------------------------*/

a {
	color: #222;
	text-decoration: none;
}

a:focus {
	outline: thin dotted;
}

a:hover,
a:active {
	color: #000;
	outline: 0;
}

/* Hover effects */

.entry-content a,
.entry-summary a,
.comment-content a,
.widget a,
.site-footer .widget-area a,
.posts-navigation a,
.widget_authors a strong {
	-webkit-box-shadow: inset 0 -1px 0 rgba(15, 15, 15, 1);
	box-shadow: inset 0 -1px 0 rgba(15, 15, 15, 1);
	-webkit-transition: color 80ms ease-in, -webkit-box-shadow 130ms ease-in-out;
	transition: color 80ms ease-in, -webkit-box-shadow 130ms ease-in-out;
	transition: color 80ms ease-in, box-shadow 130ms ease-in-out;
	transition: color 80ms ease-in, box-shadow 130ms ease-in-out, -webkit-box-shadow 130ms ease-in-out;
}

.entry-title a,
.entry-meta a,
.page-links a,
.page-links a .page-number,
.entry-footer a,
.entry-footer .cat-links a,
.entry-footer .tags-links a,
.edit-link a,
.post-navigation a,
.logged-in-as a,
.comment-navigation a,
.comment-metadata a,
.comment-metadata a.comment-edit-link,
.comment-reply-link,
a .nav-title,
.pagination a,
.comments-pagination a,
.site-info a,
.widget .widget-title a,
.widget ul li a,
.site-footer .widget-area ul li a,
.site-footer .widget-area ul li a {
	-webkit-box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 1);
	box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 1);
	text-decoration: none;
	-webkit-transition: color 80ms ease-in, -webkit-box-shadow 130ms ease-in-out;
	transition: color 80ms ease-in, -webkit-box-shadow 130ms ease-in-out;
	transition: color 80ms ease-in, box-shadow 130ms ease-in-out;
	transition: color 80ms ease-in, box-shadow 130ms ease-in-out, -webkit-box-shadow 130ms ease-in-out;
}

.entry-content a:focus,
.entry-content a:hover,
.entry-summary a:focus,
.entry-summary a:hover,
.comment-content a:focus,
.comment-content a:hover,
.widget a:focus,
.widget a:hover,
.site-footer .widget-area a:focus,
.site-footer .widget-area a:hover,
.posts-navigation a:focus,
.posts-navigation a:hover,
.comment-metadata a:focus,
.comment-metadata a:hover,
.comment-metadata a.comment-edit-link:focus,
.comment-metadata a.comment-edit-link:hover,
.comment-reply-link:focus,
.comment-reply-link:hover,
.widget_authors a:focus strong,
.widget_authors a:hover strong,
.entry-title a:focus,
.entry-title a:hover,
.entry-meta a:focus,
.entry-meta a:hover,
.page-links a:focus .page-number,
.page-links a:hover .page-number,
.entry-footer a:focus,
.entry-footer a:hover,
.entry-footer .cat-links a:focus,
.entry-footer .cat-links a:hover,
.entry-footer .tags-links a:focus,
.entry-footer .tags-links a:hover,
.post-navigation a:focus,
.post-navigation a:hover,
.pagination a:not(.prev):not(.next):focus,
.pagination a:not(.prev):not(.next):hover,
.comments-pagination a:not(.prev):not(.next):focus,
.comments-pagination a:not(.prev):not(.next):hover,
.logged-in-as a:focus,
.logged-in-as a:hover,
a:focus .nav-title,
a:hover .nav-title,
.edit-link a:focus,
.edit-link a:hover,
.site-info a:focus,
.site-info a:hover,
.widget .widget-title a:focus,
.widget .widget-title a:hover,
.widget ul li a:focus,
.widget ul li a:hover {
	color: #000;
	-webkit-box-shadow: inset 0 0 0 rgba(0, 0, 0, 0), 0 3px 0 rgba(0, 0, 0, 1);
	box-shadow: inset 0 0 0 rgba(0, 0, 0, 0), 0 3px 0 rgba(0, 0, 0, 1);
}

/* Fixes linked images */
.entry-content a img,
.comment-content a img,
.widget a img {
	-webkit-box-shadow: 0 0 0 8px #fff;
	box-shadow: 0 0 0 8px #fff;
}

.post-navigation a:focus .icon,
.post-navigation a:hover .icon {
	color: #222;
}

/*--------------------------------------------------------------
11.0 Featured Image Hover
--------------------------------------------------------------*/

.post-thumbnail {
	margin-bottom: 1em;
}

.post-thumbnail a img {
	-webkit-backface-visibility: hidden;
	-webkit-transition: opacity 0.2s;
	transition: opacity 0.2s;
}

.post-thumbnail a:hover img,
.post-thumbnail a:focus img {
	opacity: 0.7;
}

/*--------------------------------------------------------------
12.0 Navigation
--------------------------------------------------------------*/

.navigation-top {
	background: #fff;
	border-bottom: 1px solid #eee;
	border-top: 1px solid #eee;
	font-size: 16px;
	font-size: 1rem;
	position: relative;
}

.navigation-top .wrap {
	max-width: 1000px;
	padding: 0;
}

.navigation-top a {
	color: #222;
	font-weight: 600;
	-webkit-transition: color 0.2s;
	transition: color 0.2s;
}

.navigation-top .current-menu-item > a,
.navigation-top .current_page_item > a {
	color: #767676;
}

.main-navigation {
	clear: both;
	display: block;
}

.main-navigation ul {
	background: #fff;
	list-style: none;
	margin: 0;
	padding: 0 1.5em;
	text-align: left;
}

/* Hide the menu on small screens when JavaScript is available.
 * It only works with JavaScript.
 */

.js .main-navigation ul,
.main-navigation .menu-item-has-children > a > .icon,
.main-navigation .page_item_has_children > a > .icon,
.main-navigation ul a > .icon {
	display: none;
}

.main-navigation > div > ul {
	border-top: 1px solid #eee;
	padding: 0.75em 1.695em;
}

.js .main-navigation.toggled-on > div > ul {
	display: block;
}

.main-navigation ul ul {
	padding: 0 0 0 1.5em;
}

.main-navigation ul ul.toggled-on {
	display: block;
}

.main-navigation ul ul a {
	letter-spacing: 0;
	padding: 0.4em 0;
	position: relative;
	text-transform: none;
}

.main-navigation li {
	border-bottom: 1px solid #eee;
	position: relative;
}

.main-navigation li li,
.main-navigation li:last-child {
	border: 0;
}

.main-navigation a {
	display: block;
	padding: 0.5em 0;
	text-decoration: none;
}

.main-navigation a:hover {
	color: #767676;
}

/* Menu toggle */

.menu-toggle {
	background-color: transparent;
	border: 0;
	-webkit-box-shadow: none;
	box-shadow: none;
	color: #222;
	display: none;
	font-size: 14px;
	font-size: 0.875rem;
	font-weight: 800;
	line-height: 1.5;
	margin: 1px auto 2px;
	padding: 1em;
	text-shadow: none;
}

/* Display the menu toggle when JavaScript is available. */

.js .menu-toggle {
	display: block;
}

.main-navigation.toggled-on ul.nav-menu {
	display: block;
}

.menu-toggle:hover,
.menu-toggle:focus {
	background-color: transparent;
	-webkit-box-shadow: none;
	box-shadow: none;
}

.menu-toggle:focus {
	outline: thin solid;
}

.menu-toggle .icon {
	margin-right: 0.5em;
	top: -2px;
}

.toggled-on .menu-toggle .icon-bars,
.menu-toggle .icon-close {
	display: none;
}

.toggled-on .menu-toggle .icon-close {
	display: inline-block;
}

/* Dropdown Toggle */

.dropdown-toggle {
	background-color: transparent;
	border: 0;
	-webkit-box-shadow: none;
	box-shadow: none;
	color: #222;
	display: block;
	font-size: 16px;
	right: -0.5em;
	line-height: 1.5;
	margin: 0 auto;
	padding: 0.5em;
	position: absolute;
	text-shadow: none;
	top: 0;
}

.dropdown-toggle:hover,
.dropdown-toggle:focus {
	background: transparent;
}

.dropdown-toggle:focus {
	outline: thin dotted;
}

.dropdown-toggle.toggled-on .icon {
	-ms-transform: rotate(-180deg); /* IE 9 */
	-webkit-transform: rotate(-180deg); /* Chrome, Safari, Opera */
	transform: rotate(-180deg);
}

/* Scroll down arrow */

.site-header .menu-scroll-down {
	display: none;
}

/*--------------------------------------------------------------
13.0 Layout
--------------------------------------------------------------*/

html {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

*,
*:before,
*:after {
	/* Inherit box-sizing to make it easier to change the property for components that leverage other behavior; see http://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/ */
	-webkit-box-sizing: inherit;
	-moz-box-sizing: inherit;
	box-sizing: inherit;
}

body {
	background: #fff;
	/* Fallback for when there is no custom background color defined. */
}

#page {
	position: relative;
	word-wrap: break-word;
}

.wrap {
	margin-left: auto;
	margin-right: auto;
	max-width: 700px;
	padding-left: 2em;
	padding-right: 2em;
}

.wrap:after {
	clear: both;
	content: "";
	display: block;
}

/*--------------------------------------------------------------
13.1 Header
--------------------------------------------------------------*/

#masthead .wrap {
	position: relative;
}

.site-header {
	background-color: #fafafa;
	position: relative;
}

/* Site branding */

.site-branding {
	padding: 1em 0;
	position: relative;
	-webkit-transition: margin-bottom 0.2s;
	transition: margin-bottom 0.2s;
	z-index: 3;
}

.site-branding a {
	text-decoration: none;
	-webkit-transition: opacity 0.2s;
	transition: opacity 0.2s;
}

.site-branding a:hover,
.site-branding a:focus {
	opacity: 0.7;
}

.site-title {
	clear: none;
	font-size: 24px;
	font-size: 1.5rem;
	font-weight: 800;
	line-height: 1.25;
	letter-spacing: 0.08em;
	margin: 0;
	padding: 0;
	text-transform: uppercase;
}

.site-title,
.site-title a {
	color: #222;
	opacity: 1; /* Prevent opacity from changing during selective refreshes in the customize preview */
}

body.has-header-image .site-title,
body.has-header-video .site-title,
body.has-header-image .site-title a,
body.has-header-video .site-title a {
	color: #fff;
}

.site-description {
	color: #666;
	font-size: 13px;
	font-size: 0.8125rem;
	margin-bottom: 0;
}

body.has-header-image .site-description,
body.has-header-video .site-description {
	color: #fff;
	opacity: 0.8;
}

.custom-logo-link {
	display: inline-block;
	padding-right: 1em;
	vertical-align: middle;
	width: auto;
}

.custom-logo-link img {
	display: inline-block;
	max-height: 80px;
	width: auto;
}

body.home.title-tagline-hidden.has-header-image .custom-logo-link img,
body.home.title-tagline-hidden.has-header-video .custom-logo-link img {
	max-height: 200px;
	max-width: 100%;
}

.custom-logo-link a:hover,
.custom-logo-link a:focus {
	opacity: 0.9;
}

body:not(.title-tagline-hidden) .site-branding-text {
	display: inline-block;
	max-width: 100%;
	vertical-align: middle;
}

.custom-header {
	position: relative;
}

.has-header-image.twentyseventeen-front-page .custom-header,
.has-header-video.twentyseventeen-front-page .custom-header,
.has-header-image.home.blog .custom-header,
.has-header-video.home.blog .custom-header {
	display: table;
	height: 300px;
	height: 75vh;
	width: 100%;
}

.custom-header-media {
	bottom: 0;
	left: 0;
	overflow: hidden;
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
}

.custom-header-media:before {
	/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,000000+100&0+0,0.3+75 */
	background: -moz-linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 75%, rgba(0, 0, 0, 0.3) 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 75%, rgba(0, 0, 0, 0.3) 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 75%, rgba(0, 0, 0, 0.3) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	bottom: 0;
	content: "";
	display: block;
	height: 100%;
	left: 0;
	position: absolute;
	right: 0;
	z-index: 2;
}

.has-header-image .custom-header-media img,
.has-header-video .custom-header-media video,
.has-header-video .custom-header-media iframe {
	position: fixed;
	height: auto;
	left: 50%;
	max-width: 1000%;
	min-height: 100%;
	min-width: 100%;
	min-width: 100vw; /* vw prevents 1px gap on left that 100% has */
	width: auto;
	top: 50%;
	padding-bottom: 1px; /* Prevent header from extending beyond the footer */
	-ms-transform: translateX(-50%) translateY(-50%);
	-moz-transform: translateX(-50%) translateY(-50%);
	-webkit-transform: translateX(-50%) translateY(-50%);
	transform: translateX(-50%) translateY(-50%);
}

.wp-custom-header .wp-custom-header-video-button { /* Specificity prevents .color-dark button overrides */
	background-color: rgba(34, 34, 34, 0.5);
	border: 1px solid rgba(255, 255, 255, 0.6);
	color: rgba(255, 255, 255, 0.6);
	height: 45px;
	overflow: hidden;
	padding: 0;
	position: fixed;
	right: 30px;
	top: 30px;
	-webkit-transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.3s ease-in-out;
	transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.3s ease-in-out;
	width: 45px;
}

.wp-custom-header .wp-custom-header-video-button:hover,
.wp-custom-header .wp-custom-header-video-button:focus { /* Specificity prevents .color-dark button overrides */
	border-color: rgba(255, 255, 255, 0.8);
	background-color: rgba(34, 34, 34, 0.8);
	color: #fff;
}

.admin-bar .wp-custom-header-video-button {
	top: 62px;
}

.has-header-image:not(.twentyseventeen-front-page):not(.home) .custom-header-media img {
	bottom: 0;
	position: absolute;
	top: auto;
	-ms-transform: translateX(-50%) translateY(0);
	-moz-transform: translateX(-50%) translateY(0);
	-webkit-transform: translateX(-50%) translateY(0);
	transform: translateX(-50%) translateY(0);
}

/* For browsers that support 'object-fit' */
@supports ( object-fit: cover ) {
	.has-header-image .custom-header-media img,
	.has-header-video .custom-header-media video,
	.has-header-image:not(.twentyseventeen-front-page):not(.home) .custom-header-media img {
		height: 100%;
		left: 0;
		-o-object-fit: cover;
		object-fit: cover;
		top: 0;
		-ms-transform: none;
		-moz-transform: none;
		-webkit-transform: none;
		transform: none;
		width: 100%;
	}
}

/* Hides div in Customizer preview when header images or videos change. */

body:not(.has-header-image):not(.has-header-video) .custom-header-media {
	display: none;
}

.has-header-image.twentyseventeen-front-page .site-branding,
.has-header-video.twentyseventeen-front-page .site-branding,
.has-header-image.home.blog .site-branding,
.has-header-video.home.blog .site-branding {
	display: table-cell;
	height: 100%;
	vertical-align: bottom;
}

/*--------------------------------------------------------------
13.2 Front Page
--------------------------------------------------------------*/

.twentyseventeen-front-page .site-content {
	padding: 0;
}

.twentyseventeen-panel {
	overflow: hidden;
	position: relative;
}

.panel-image {
	background-position: center center;
	background-repeat: no-repeat;
	-webkit-background-size: cover;
	background-size: cover;
	position: relative;
}

.panel-image:before {
	/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,000000+100&0+0,0.3+100 */ /* FF3.6-15 */
	background: -webkit-linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%); /* Chrome10-25,Safari5.1-6 */
	background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.3)));
	background: -webkit-linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	bottom: 0;
	content: "";
	left: 0;
	right: 0;
	position: absolute;
	top: 100px;
}

.twentyseventeen-front-page article:not(.has-post-thumbnail):not(:first-child) {
	border-top: 1px solid #ddd;
}

.panel-content {
	position: relative;
}

.panel-content .wrap {
	padding-bottom: 0.5em;
	padding-top: 1.75em;
}

/* Panel edit link */

.twentyseventeen-panel .edit-link {
	display: block;
	margin: 0.3em 0 0;
}

.twentyseventeen-panel .entry-header .edit-link {
	font-size: 14px;
	font-size: 0.875rem;
}

/* Front Page - Recent Posts */

.twentyseventeen-front-page .panel-content .recent-posts article {
	border: 0;
	color: #333;
	margin-bottom: 3em;
}

.recent-posts .entry-header {
	margin-bottom: 1.2em;
}

.page .panel-content .recent-posts .entry-title {
	font-size: 20px;
	font-size: 1.25rem;
	font-weight: 300;
	letter-spacing: 0;
	text-transform: none;
}

.twentyseventeen-panel .recent-posts .entry-header .edit-link {
	color: #222;
	display: inline-block;
	font-size: 11px;
	font-size: 0.6875rem;
	margin-left: 1em;
}

/*--------------------------------------------------------------
13.3 Regular Content
--------------------------------------------------------------*/

.site-content-contain {
	background-color: #fff;
	position: relative;
}

.site-content {
	padding: 2.5em 0 0;
}

/*--------------------------------------------------------------
13.4 Posts
--------------------------------------------------------------*/

/* Post Landing Page */

.sticky {
	position: relative;
}

.post:not(.sticky) .icon-thumb-tack {
	display: none;
}

.sticky .icon-thumb-tack {
	display: block;
	height: 18px;
	left: -1.5em;
	position: absolute;
	top: 1.65em;
	width: 20px;
}

.page .panel-content .entry-title,
.page-title,
body.page:not(.twentyseventeen-front-page) .entry-title {
	color: #222;
	font-size: 14px;
	font-size: 0.875rem;
	font-weight: 800;
	letter-spacing: 0.14em;
	text-transform: uppercase;
}

.entry-header .entry-title {
	margin-bottom: 0.25em;
}

.entry-title a {
	color: #333;
	text-decoration: none;
	margin-left: -2px;
}

.entry-title:not(:first-child) {
	padding-top: 0;
}

.entry-meta {
	color: #767676;
	font-size: 11px;
	font-size: 0.6875rem;
	font-weight: 800;
	letter-spacing: 0.1818em;
	padding-bottom: 0.25em;
	text-transform: uppercase;
}

.entry-meta a {
	color: #767676;
}

.byline,
.updated:not(.published) {
	display: none;
}

.single .byline,
.group-blog .byline {
	display: inline;
}

.pagination,
.comments-pagination {
	border-top: 1px solid #eee;
	font-size: 14px;
	font-size: 0.875rem;
	font-weight: 800;
	padding: 2em 0 3em;
	text-align: center;
}

.pagination .icon,
.comments-pagination .icon {
	width: 0.666666666em;
	height: 0.666666666em;
}

.comments-pagination {
	border: 0;
}

.page-numbers {
	display: none;
	padding: 0.5em 0.75em;
}

.page-numbers.current {
	color: #767676;
	display: inline-block;
}

.page-numbers.current .screen-reader-text {
	clip: auto;
	height: auto;
	overflow: auto;
	position: relative !important;
	width: auto;
}

.prev.page-numbers,
.next.page-numbers {
	background-color: #ddd;
	-webkit-border-radius: 2px;
	border-radius: 2px;
	display: inline-block;
	font-size: 24px;
	font-size: 1.5rem;
	line-height: 1;
	padding: 0.25em 0.5em 0.4em;
}

.prev.page-numbers,
.next.page-numbers {
	-webkit-transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.3s ease-in-out;
	transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.3s ease-in-out;
}

.prev.page-numbers:focus,
.prev.page-numbers:hover,
.next.page-numbers:focus,
.next.page-numbers:hover {
	background-color: #767676;
	color: #fff;
}

.prev.page-numbers {
	float: left;
}

.next.page-numbers {
	float: right;
}

/* Aligned blockquotes */

.entry-content blockquote.alignleft,
.entry-content blockquote.alignright {
	color: #666;
	font-size: 13px;
	font-size: 0.8125rem;
	width: 48%;
}

/* Blog landing, search, archives */

.blog .site-main > article,
.archive .site-main > article,
.search .site-main > article {
	padding-bottom: 2em;
}

body:not(.twentyseventeen-front-page) .entry-header {
	padding: 1em 0;
}

body:not(.twentyseventeen-front-page) .entry-header,
body:not(.twentyseventeen-front-page) .entry-content,
body:not(.twentyseventeen-front-page) #comments {
	margin-left: auto;
	margin-right: auto;
}

body:not(.twentyseventeen-front-page) .entry-header {
	padding-top: 0;
}

.blog .entry-meta a.post-edit-link,
.archive .entry-meta a.post-edit-link,
.search .entry-meta a.post-edit-link {
	color: #222;
	display: inline-block;
	margin-left: 1em;
	white-space: nowrap;
}

.search .page .entry-meta a.post-edit-link {
	margin-left: 0;
	white-space: nowrap;
}

.taxonomy-description {
	color: #666;
	font-size: 13px;
	font-size: 0.8125rem;
}

/* More tag */

.entry-content .more-link:before {
	content: "";
	display: block;
	margin-top: 1.5em;
}

/* Single Post */

.single-post:not(.has-sidebar) #primary,
.page.page-one-column:not(.twentyseventeen-front-page) #primary,
.archive.page-one-column:not(.has-sidebar) .page-header,
.archive.page-one-column:not(.has-sidebar) #primary {
	margin-left: auto;
	margin-right: auto;
	max-width: 740px;
}

.single-featured-image-header {
	background-color: #fafafa;
	border-bottom: 1px solid #eee;
}

.single-featured-image-header img {
	display: block;
	margin: auto;
}

.page-links {
	font-size: 14px;
	font-size: 0.875rem;
	font-weight: 800;
	padding: 2em 0 3em;
}

.page-links .page-number {
	color: #767676;
	display: inline-block;
	padding: 0.5em 1em;
}

.page-links a {
	display: inline-block;
}

.page-links a .page-number {
	color: #222;
}

/* Entry footer */

.entry-footer {
	border-bottom: 1px solid #eee;
	border-top: 1px solid #eee;
	margin-top: 2em;
	padding: 2em 0;
}

.entry-footer .cat-links,
.entry-footer .tags-links {
	display: block;
	font-size: 11px;
	font-size: 0.6875rem;
	font-weight: 800;
	letter-spacing: 0.1818em;
	padding-left: 2.5em;
	position: relative;
	text-transform: uppercase;
}

.entry-footer .cat-links + .tags-links {
	margin-top: 1em;
}

.entry-footer .cat-links a,
.entry-footer .tags-links a {
	color: #333;
}

.entry-footer .cat-links .icon,
.entry-footer .tags-links .icon {
	color: #767676;
	left: 0;
	margin-right: 0.5em;
	position: absolute;
	top: 2px;
}

.entry-footer .edit-link {
	display: inline-block;
}

.entry-footer .edit-link a.post-edit-link {
	background-color: #222;
	-webkit-border-radius: 2px;
	border-radius: 2px;
	-webkit-box-shadow: none;
	box-shadow: none;
	color: #fff;
	display: inline-block;
	font-size: 14px;
	font-size: 0.875rem;
	font-weight: 800;
	margin-top: 2em;
	padding: 0.7em 2em;
	-webkit-transition: background-color 0.2s ease-in-out;
	transition: background-color 0.2s ease-in-out;
	white-space: nowrap;
}

.entry-footer .edit-link a.post-edit-link:hover,
.entry-footer .edit-link a.post-edit-link:focus {
	background-color: #767676;
}

/* Post Formats */

.blog .format-status .entry-title,
.archive .format-status .entry-title,
.blog .format-aside .entry-title,
.archive .format-aside .entry-title {
	display: none;
}

.format-quote blockquote {
	color: #333;
	font-size: 20px;
	font-size: 1.25rem;
	font-weight: 300;
	overflow: visible;
	position: relative;
}

.format-quote blockquote .icon {
	display: block;
	height: 20px;
	left: -1.25em;
	position: absolute;
	top: 0.4em;
	-webkit-transform: scale(-1, 1);
	-ms-transform: scale(-1, 1);
	transform: scale(-1, 1);
	width: 20px;
}

/* Post Navigation */

.post-navigation {
	font-weight: 800;
	margin: 3em 0;
}

.post-navigation .nav-links {
	padding: 1em 0;
}

.nav-subtitle {
	background: transparent;
	color: #767676;
	display: block;
	font-size: 11px;
	font-size: 0.6875rem;
	letter-spacing: 0.1818em;
	margin-bottom: 1em;
	text-transform: uppercase;
}

.nav-title {
	color: #333;
	font-size: 15px;
	font-size: 0.9375rem;
}

.post-navigation .nav-next {
	margin-top: 1.5em;
}

.nav-links .nav-previous .nav-title .nav-title-icon-wrapper {
	margin-right: 0.5em;
}

.nav-links .nav-next .nav-title .nav-title-icon-wrapper {
	margin-left: 0.5em;
}

/*--------------------------------------------------------------
13.5 Pages
--------------------------------------------------------------*/

.page-header {
	padding-bottom: 2em;
}

.page .entry-header .edit-link {
	font-size: 14px;
	font-size: 0.875rem;
}

.search .page .entry-header .edit-link {
	font-size: 11px;
	font-size: 0.6875rem;
}

.page-links {
	clear: both;
	margin: 0 0 1.5em;
}

.page:not(.home) #content {
	padding-bottom: 1.5em;
}

/* 404 page */

.error404 .page-content {
	padding-bottom: 4em;
}

.error404 .page-content .search-form,
.search .page-content .search-form {
	margin-bottom: 3em;
}

/*--------------------------------------------------------------
13.6 Footer
--------------------------------------------------------------*/

.site-footer {
	border-top: 1px solid #eee;
}

.site-footer .wrap {
	padding-bottom: 1.5em;
	padding-top: 2em;
}

/* Footer widgets */

.site-footer .widget-area {
	padding-bottom: 2em;
	padding-top: 2em;
}

/* Social nav */

.social-navigation {
	font-size: 16px;
	font-size: 1rem;
	margin-bottom: 1em;
}

.social-navigation ul {
	list-style: none;
	margin-bottom: 0;
	margin-left: 0;
}

.social-navigation li {
	display: inline;
}

.social-navigation a {
	background-color: #767676;
	-webkit-border-radius: 40px;
	border-radius: 40px;
	color: #fff;
	display: inline-block;
	height: 40px;
	margin: 0 1em 0.5em 0;
	text-align: center;
	width: 40px;
}

.social-navigation a:hover,
.social-navigation a:focus {
	background-color: #333;
}

.social-navigation .icon {
	height: 16px;
	top: 12px;
	width: 16px;
	vertical-align: top;
}

/* Site info */

.site-info {
	font-size: 14px;
	font-size: 0.875rem;
	margin-bottom: 1em;
}

.site-info a {
	color: #666;
}

.site-info .sep {
	margin: 0;
	display: block;
	visibility: hidden;
	height: 0;
	width: 100%;
}

.site-info span[role=separator] {
	padding: 0 0.2em 0 0.4em;
}

.site-info span[role=separator]::before {
	content: '\002f';
}

/*--------------------------------------------------------------
14.0 Comments
--------------------------------------------------------------*/

#comments {
	clear: both;
	padding: 2em 0 0.5em;
}

.comments-title {
	font-size: 20px;
	font-size: 1.25rem;
	margin-bottom: 1.5em;
}

.comment-list,
.comment-list .children {
	list-style: none;
	margin: 0;
	padding: 0;
}

.comment-list li:before {
	display: none;
}

.comment-body {
	margin-left: 65px;
}

.comment-author {
	font-size: 16px;
	font-size: 1rem;
	margin-bottom: 0.4em;
	position: relative;
	z-index: 2;
}

.comment-author .avatar {
	height: 50px;
	left: -65px;
	position: absolute;
	width: 50px;
}

.comment-author .says {
	display: none;
}

.comment-meta {
	margin-bottom: 1.5em;
}

.comment-metadata {
	color: #767676;
	font-size: 10px;
	font-size: 0.625rem;
	font-weight: 800;
	letter-spacing: 0.1818em;
	text-transform: uppercase;
}

.comment-metadata a {
	color: #767676;
}

.comment-metadata a.comment-edit-link {
	color: #222;
	margin-left: 1em;
}

.comment-body {
	color: #333;
	font-size: 14px;
	font-size: 0.875rem;
	margin-bottom: 4em;
}

.comment-reply-link {
	font-weight: 800;
	position: relative;
}

.comment-reply-link .icon {
	color: #222;
	left: -2em;
	height: 1em;
	position: absolute;
	top: 0;
	width: 1em;
}

.children .comment-author .avatar {
	height: 30px;
	left: -45px;
	width: 30px;
}

.bypostauthor > .comment-body > .comment-meta > .comment-author .avatar {
	border: 1px solid #333;
	padding: 2px;
}

.no-comments,
.comment-awaiting-moderation {
	color: #767676;
	font-size: 14px;
	font-size: 0.875rem;
	font-style: italic;
}

.comments-pagination {
	margin: 2em 0 3em;
}

.form-submit {
	text-align: right;
}

.comment-form #wp-comment-cookies-consent {
	margin: 0 10px 0 0;
}

.comment-form .comment-form-cookies-consent label {
	display: inline;
}

/*--------------------------------------------------------------
15.0 Widgets
--------------------------------------------------------------*/

#secondary {
	padding: 1em 0 2em;
}

.widget {
	padding-bottom: 3em;
}

h2.widget-title {
	color: #222;
	font-size: 13px;
	font-size: 0.8125rem;
	font-weight: 800;
	letter-spacing: 0.1818em;
	margin-bottom: 1.5em;
	text-transform: uppercase;
}

.widget-title a {
	color: inherit;
}

/* widget forms */

.widget select {
	width: 100%;
}


/* widget lists */

.widget ul {
	list-style: none;
	margin: 0;
}

.widget ul li,
.widget ol li {
	border-bottom: 1px solid #ddd;
	border-top: 1px solid #ddd;
	padding: 0.5em 0;
}

.widget:not(.widget_tag_cloud) ul li + li {
	margin-top: -1px;
}

.widget ul li ul {
	margin: 0 0 -1px;
	padding: 0;
	position: relative;
}

.widget ul li li {
	border: 0;
	padding-left: 24px;
	padding-left: 1.5rem;
}

/* Widget lists of links */

.widget_top-posts ul li ul,
.widget_rss_links ul li ul,
.widget-grofile ul.grofile-links li ul,
.widget_pages ul li ul,
.widget_meta ul li ul {
	bottom: 0;
}

.widget_nav_menu ul li li,
.widget_top-posts ul li,
.widget_top-posts ul li li,
.widget_rss_links ul li,
.widget_rss_links ul li li,
.widget-grofile ul.grofile-links li,
.widget-grofile ul.grofile-links li li {
	padding-bottom: 0.25em;
	padding-top: 0.25em;
}

.widget_rss ul li {
	padding-bottom: 1em;
	padding-top: 1em;
}

/* Widget markup */

.widget .post-date,
.widget .rss-date {
	font-size: 0.81em;
}

/* Text widget */

.widget_text {
	word-wrap: break-word;
}

.widget_text ul {
	list-style: disc;
	margin: 0 0 1.5em 1.5em;
}

.widget_text ol {
	list-style: decimal;
}

.widget_text ul li,
.widget_text ol li {
	border: none;
}

.widget_text ul li:last-child,
.widget_text ol li:last-child {
	padding-bottom: 0;
}

.widget_text ul li ul {
	margin: 0 0 0 1.5em;
}

.widget_text ul li li {
	padding-left: 0;
	padding-right: 0;
}

.widget_text ol li {
	list-style-position: inside;
}

.widget_text ol li + li {
	margin-top: -1px;
}

/* RSS Widget */

.widget_rss .widget-title .rsswidget:first-child:not(.rss-widget-title) {
	float: right;
}

.widget_rss .widget-title .rsswidget:first-child:hover {
	background-color: transparent;
}

.widget_rss .widget-title .rsswidget:first-child img {
	display: block;
}

.widget_rss ul li {
	padding: 2.125em 0;
}

.widget_rss ul li:first-child {
	border-top: none;
	padding-top: 0;
}

.widget_rss li .rsswidget {
	font-size: 22px;
	font-size: 1.375rem;
	font-weight: 300;
	line-height: 1.4;
}

.widget_rss .rss-date,
.widget_rss li cite {
	color: #767676;
	display: block;
	font-size: 10px;
	font-size: 0.625rem;
	font-style: normal;
	font-weight: 800;
	letter-spacing: 0.18em;
	line-height: 1.5;
	text-transform: uppercase;
}

.widget_rss .rss-date {
	margin: 0.5em 0 1.5em;
	padding: 0;
}

.widget_rss .rssSummary {
	margin-bottom: 0.5em;
}

/* Contact Info Widget */

.widget_contact_info .contact-map {
	margin-bottom: 0.5em;
}

/* Gravatar */

.widget-grofile h4 {
	font-size: 16px;
	font-size: 1rem;
	margin-bottom: 0;
}

/* Recent Comments */

.widget_recent_comments table,
.widget_recent_comments th,
.widget_recent_comments td {
	border: 0;
}

/* Recent Posts widget */

.widget_recent_entries .post-date {
	display: block;
}

/* Search */

.search-form {
	position: relative;
}

.search-form .search-submit {
	bottom: 3px;
	padding: 0.5em 1em;
	position: absolute;
	right: 3px;
	top: 3px;
}

.search-form .search-submit .icon {
	height: 24px;
	top: -2px;
	width: 24px;
}

/* Tag cloud widget */

.tagcloud ul li {
	float: left;
	border-top: 0;
	border-bottom: 0;
	padding: 0;
	margin: 4px 4px 0 0;
}

.tagcloud,
.widget_tag_cloud,
.wp_widget_tag_cloud {
	line-height: 1.5;
}

.widget .tagcloud a,
.widget.widget_tag_cloud a,
.wp_widget_tag_cloud a {
	border: 1px solid #ddd;
	-webkit-box-shadow: none;
	box-shadow: none;
	display: block;
	padding: 4px 10px 5px;
	position: relative;
	-webkit-transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.3s ease-in-out;
	transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.3s ease-in-out;
	width: auto;
	word-wrap: break-word;
	z-index: 0;
}

.widget .tagcloud a:hover,
.widget .tagcloud a:focus,
.widget.widget_tag_cloud a:hover,
.widget.widget_tag_cloud a:focus,
.wp_widget_tag_cloud a:hover,
.wp_widget_tag_cloud a:focus {
	border-color: #bbb;
	-webkit-box-shadow: none;
	box-shadow: none;
	text-decoration: none;
}

/* Calendar widget */

.widget_calendar .wp-calendar-table {
	margin-bottom: 0;
}

.widget_calendar .wp-calendar-nav {
	display: table;
	width: 100%;
	margin: 0 0 1.5em;
	padding: 0.4em 0;
}

.widget_calendar .wp-calendar-nav span {
	display: table-cell;
}

.widget_calendar .wp-calendar-nav-prev,
.widget_calendar .wp-calendar-nav-next {
	width: 40%;
}

.widget_calendar th,
.widget_calendar td,
.widget_calendar .wp-calendar-nav span {
	text-align: center;
}

.widget_calendar tfoot td {
	border: 0;
}

/* Gallery widget */

.gallery-columns-5 .gallery-caption,
.gallery-columns-6 .gallery-caption,
.gallery-columns-7 .gallery-caption,
.gallery-columns-8 .gallery-caption,
.gallery-columns-9 .gallery-caption {
	display: none;
}

/*--------------------------------------------------------------
16.0 Media
--------------------------------------------------------------*/

img,
video {
	height: auto; /* Make sure images are scaled correctly. */
	max-width: 100%; /* Adhere to container width. */
}

img.alignleft,
img.alignright {
	float: none;
	margin: 0;
}

.page-content .wp-smiley,
.entry-content .wp-smiley,
.comment-content .wp-smiley {
	border: none;
	margin-bottom: 0;
	margin-top: 0;
	padding: 0;
}

audio:focus,
video:focus {
	outline: thin dotted;
}

/* Make sure embeds and iframes fit their containers. */

embed,
iframe,
object {
	margin-bottom: 1.5em;
	max-width: 100%;
}

/* Remove bottom on embeds that wrapped in paragraphs via wpautop. */

p > embed:only-child,
p > iframe:only-child,
p > object:only-child {
	margin-bottom: 0;
}

.wp-caption,
.gallery-caption {
	color: #666;
	font-size: 13px;
	font-size: 0.8125rem;
	font-style: italic;
	margin-bottom: 1.5em;
	max-width: 100%;
}

.wp-caption img[class*="wp-image-"] {
	display: block;
	margin-left: auto;
	margin-right: auto;
}

.wp-caption .wp-caption-text {
	margin: 0.8075em 0;
}

/* Media Elements */

.mejs-container {
	margin-bottom: 1.5em;
}

/* Audio Player */

.mejs-controls a.mejs-horizontal-volume-slider,
.mejs-controls a.mejs-horizontal-volume-slider:focus,
.mejs-controls a.mejs-horizontal-volume-slider:hover {
	background: transparent;
	border: 0;
}

/* Playlist Color Overrides: Light */

.site-content .wp-playlist-light {
	border-color: #eee;
	color: #222;
}

.site-content .wp-playlist-light .wp-playlist-current-item .wp-playlist-item-album {
	color: #333;
}

.site-content .wp-playlist-light .wp-playlist-current-item .wp-playlist-item-artist {
	color: #767676;
}

.site-content .wp-playlist-light .wp-playlist-item {
	border-bottom: 1px dotted #eee;
	-webkit-transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.3s ease-in-out;
	transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.3s ease-in-out;
}

.site-content .wp-playlist-light .wp-playlist-item:hover,
.site-content .wp-playlist-light .wp-playlist-item:focus {
	border-bottom-color: rgba(0, 0, 0, 0);
	background-color: #767676;
	color: #fff;
}

.site-content .wp-playlist-light a.wp-playlist-caption:hover,
.site-content .wp-playlist-light .wp-playlist-item:hover a,
.site-content .wp-playlist-light .wp-playlist-item:focus a {
	color: #fff;
}

/* Playlist Color Overrides: Dark */

.site-content .wp-playlist-dark {
	background: #222;
	border-color: #333;
}

.site-content .wp-playlist-dark .mejs-container .mejs-controls {
	background-color: #333;
}

.site-content .wp-playlist-dark .wp-playlist-caption {
	color: #fff;
}

.site-content .wp-playlist-dark .wp-playlist-current-item .wp-playlist-item-album {
	color: #eee;
}

.site-content .wp-playlist-dark .wp-playlist-current-item .wp-playlist-item-artist {
	color: #aaa;
}

.site-content .wp-playlist-dark .wp-playlist-playing {
	background-color: #333;
}

.site-content .wp-playlist-dark .wp-playlist-item {
	border-bottom: 1px dotted #555;
	-webkit-transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.3s ease-in-out;
	transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.3s ease-in-out;
}

.site-content .wp-playlist-dark .wp-playlist-item:hover,
.site-content .wp-playlist-dark .wp-playlist-item:focus {
	border-bottom-color: rgba(0, 0, 0, 0);
	background-color: #aaa;
	color: #222;
}

.site-content .wp-playlist-dark a.wp-playlist-caption:hover,
.site-content .wp-playlist-dark .wp-playlist-item:hover a,
.site-content .wp-playlist-dark .wp-playlist-item:focus a {
	color: #222;
}

/* Playlist Style Overrides */

.site-content .wp-playlist {
	padding: 0.625em 0.625em 0.3125em;
}

.site-content .wp-playlist-current-item .wp-playlist-item-title {
	font-weight: 700;
}

.site-content .wp-playlist-current-item .wp-playlist-item-album {
	font-style: normal;
}

.site-content .wp-playlist-current-item .wp-playlist-item-artist {
	font-size: 10px;
	font-size: 0.625rem;
	font-weight: 800;
	letter-spacing: 0.1818em;
	text-transform: uppercase;
}

.site-content .wp-playlist-item {
	padding: 0 0.3125em;
	cursor: pointer;
}

.site-content .wp-playlist-item:last-of-type {
	border-bottom: none;
}

.site-content .wp-playlist-item a {
	padding: 0.3125em 0;
	border-bottom: none;
}

.site-content .wp-playlist-item a,
.site-content .wp-playlist-item a:focus,
.site-content .wp-playlist-item a:hover {
	-webkit-box-shadow: none;
	box-shadow: none;
	background: transparent;
}

.site-content .wp-playlist-item-length {
	top: 5px;
}

/* SVG Icons base styles */

.icon {
	display: inline-block;
	fill: currentColor;
	height: 1em;
	position: relative; /* Align more nicely with capital letters */
	top: -0.0625em;
	vertical-align: middle;
	width: 1em;
}

/*--------------------------------------------------------------
16.1 Galleries
--------------------------------------------------------------*/

.gallery-item {
	display: inline-block;
	text-align: left;
	vertical-align: top;
	margin: 0 0 1.5em;
	padding: 0 1em 0 0;
	width: 50%;
}

.gallery-columns-1 .gallery-item {
	width: 100%;
}

.gallery-columns-2 .gallery-item {
	max-width: 50%;
}

.gallery-item a,
.gallery-item a:hover,
.gallery-item a:focus,
.widget-area .gallery-item a,
.widget-area .gallery-item a:hover,
.widget-area .gallery-item a:focus {
	-webkit-box-shadow: none;
	box-shadow: none;
	background: none;
	display: inline-block;
	max-width: 100%;
}

.gallery-item a img {
	display: block;
	-webkit-transition: -webkit-filter 0.2s ease-in;
	transition: -webkit-filter 0.2s ease-in;
	transition: filter 0.2s ease-in;
	transition: filter 0.2s ease-in, -webkit-filter 0.2s ease-in;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}

.gallery-item a:hover img,
.gallery-item a:focus img {
	-webkit-filter: opacity(60%);
	filter: opacity(60%);
}

.gallery-caption {
	display: block;
	text-align: left;
	padding: 0 10px 0 0;
	margin-bottom: 0;
}

/*--------------------------------------------------------------
17.0 Customizer
--------------------------------------------------------------*/

.highlight-front-sections.twentyseventeen-customizer.twentyseventeen-front-page .twentyseventeen-panel:after {
	border: 2px dashed #0085ba; /* Matches visible edit shortcuts. */
	bottom: 1em;
	content: "";
	display: block;
	left: 1em;
	position: absolute;
	right: 1em;
	top: 1em;
	z-index: 1;
}

.highlight-front-sections.twentyseventeen-customizer.twentyseventeen-front-page .twentyseventeen-panel .panel-content {
	z-index: 2; /* Prevent :after from preventing interactions within the section */
}

/* Used for placeholder text */
.twentyseventeen-customizer.twentyseventeen-front-page .twentyseventeen-panel .twentyseventeen-panel-title {
	display: block;
	font-size: 14px;
	font-size: 0.875rem;
	font-weight: 700;
	letter-spacing: 1px;
	padding: 3em;
	text-transform: uppercase;
	text-align: center;
}

/* Show borders on the custom page panels only when the front page sections are being edited */
.highlight-front-sections.twentyseventeen-customizer.twentyseventeen-front-page .twentyseventeen-panel:nth-of-type(1):after {
	border: none;
}

.twentyseventeen-front-page.twentyseventeen-customizer #primary article.panel-placeholder {
	border: 0;
}

/* Add some space around the visual edit shortcut buttons. */
.twentyseventeen-panel > .customize-partial-edit-shortcut > button {
	top: 30px;
	left: 30px;
}

/* Ensure that placeholder icons are visible. */
.twentyseventeen-panel .customize-partial-edit-shortcut-hidden:before {
	visibility: visible;
}

/*--------------------------------------------------------------
18.0 SVGs Fallbacks
--------------------------------------------------------------*/

.svg-fallback {
	display: none;
}

.no-svg .svg-fallback {
	display: inline-block;
}

.no-svg .dropdown-toggle {
	padding: 0.5em 0 0;
	right: 0;
	text-align: center;
	width: 2em;
}

.no-svg .dropdown-toggle .svg-fallback.icon-angle-down {
	font-size: 20px;
	font-size: 1.25rem;
	font-weight: 400;
	line-height: 1;
	-webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */
	-ms-transform: rotate(180deg); /* IE 9 */
	transform: rotate(180deg);
}

.no-svg .dropdown-toggle.toggled-on .svg-fallback.icon-angle-down {
	-webkit-transform: rotate(0); /* Chrome, Safari, Opera */
	-ms-transform: rotate(0); /* IE 9 */
	transform: rotate(0);
}

.no-svg .dropdown-toggle .svg-fallback.icon-angle-down:before {
	content: "\005E";
}

/* Social Menu fallbacks */

.no-svg .social-navigation a {
	background: transparent;
	color: #222;
	height: auto;
	width: auto;
}

/* Show screen reader text in some cases */

.no-svg .next.page-numbers .screen-reader-text,
.no-svg .prev.page-numbers .screen-reader-text,
.no-svg .social-navigation li a .screen-reader-text,
.no-svg .search-submit .screen-reader-text {
	clip: auto;
	font-size: 16px;
	font-size: 1rem;
	font-weight: 400;
	height: auto;
	position: relative !important; /* overrides previous !important styles */
	width: auto;
}

/*--------------------------------------------------------------
19.0 Media Queries
--------------------------------------------------------------*/

/* Adjust positioning of edit shortcuts, override style in customize-preview.css */
@media screen and (min-width: 20em) {

	body.customize-partial-edit-shortcuts-shown .site-header .site-title {
		padding-left: 0;
	}
}

@media screen and (min-width: 30em) {

	/* Typography */

	body,
	button,
	input,
	select,
	textarea {
		font-size: 18px;
		font-size: 1.125rem;
	}

	h1 {
		font-size: 30px;
		font-size: 1.875rem;
	}

	h2,
	.home.blog .entry-title,
	.page .panel-content .recent-posts .entry-title {
		font-size: 26px;
		font-size: 1.625rem;
	}

	h3 {
		font-size: 22px;
		font-size: 1.375rem;
	}

	h4 {
		font-size: 18px;
		font-size: 1.125rem;
	}

	h5 {
		font-size: 13px;
		font-size: 0.8125rem;
	}

	h6 {
		font-size: 16px;
		font-size: 1rem;
	}

	.entry-content blockquote.alignleft,
	.entry-content blockquote.alignright {
		font-size: 14px;
		font-size: 0.875rem;
	}

	/* Fix image alignment */
	img.alignleft {
		float: left;
		margin-right: 1.5em;
	}

	img.alignright {
		float: right;
		margin-left: 1.5em;
	}

	/* Site Branding */

	.site-branding {
		padding: 3em 0;
	}

	/* Front Page */

	.panel-content .wrap {
		padding-bottom: 2em;
		padding-top: 3.5em;
	}

	.page-one-column .panel-content .wrap {
		max-width: 740px;
	}

	.panel-content .entry-header {
		margin-bottom: 4.5em;
	}

	.panel-content .recent-posts .entry-header {
		margin-bottom: 0;
	}

	/* Blog Index, Archive, Search */

	.taxonomy-description {
		font-size: 14px;
		font-size: 0.875rem;
	}

	.page-numbers.current {
		font-size: 16px;
		font-size: 1rem;
	}

	/* Site Footer */

	.site-footer {
		font-size: 16px;
		font-size: 1rem;
	}

	/* Gallery Columns */

	.gallery-item {
		max-width: 25%;
	}

	.gallery-columns-1 .gallery-item {
		max-width: 100%;
	}

	.gallery-columns-2 .gallery-item {
		max-width: 50%;
	}

	.gallery-columns-3 .gallery-item {
		max-width: 33.33%;
	}

	.gallery-columns-4 .gallery-item {
		max-width: 25%;
	}
}

@media screen and (min-width: 48em) {
	html {
		scroll-padding-top: calc( var(--wp-admin--admin-bar--height, 0px) + 72px );
	}

	/* Typography */

	body,
	button,
	input,
	select,
	textarea {
		font-size: 16px;
		font-size: 1rem;
		line-height: 1.5;
	}

	.entry-content blockquote.alignleft,
	.entry-content blockquote.alignright {
		font-size: 13px;
		font-size: 0.8125rem;
	}

	/* Layout */

	.wrap {
		max-width: 1000px;
		padding-left: 3em;
		padding-right: 3em;
	}

	.has-sidebar:not(.error404) #primary {
		float: left;
		width: 58%;
	}

	.has-sidebar #secondary {
		float: right;
		padding-top: 0;
		width: 36%;
	}

	.error404 #primary {
		float: none;
	}

	/* Site Branding */

	.site-branding {
		margin-bottom: 0;
	}

	.has-header-image.twentyseventeen-front-page .site-branding,
	.has-header-video.twentyseventeen-front-page .site-branding,
	.has-header-image.home.blog .site-branding,
	.has-header-video.home.blog .site-branding {
		bottom: 0;
		display: block;
		left: 0;
		height: auto;
		padding-top: 0;
		position: absolute;
		width: 100%;
	}

	.has-header-image.twentyseventeen-front-page .custom-header,
	.has-header-video.twentyseventeen-front-page .custom-header,
	.has-header-image.home.blog .custom-header,
	.has-header-video.home.blog .custom-header {
		display: block;
		height: auto;
	}

	.custom-header-media {
		height: 165px;
		position: relative;
	}

	.twentyseventeen-front-page.has-header-image .custom-header-media,
	.twentyseventeen-front-page.has-header-video .custom-header-media,
	.home.blog.has-header-image .custom-header-media,
	.home.blog.has-header-video .custom-header-media {
		height: 0;
		position: relative;
	}

	.has-header-image:not(.twentyseventeen-front-page):not(.home) .custom-header-media,
	.has-header-video:not(.twentyseventeen-front-page):not(.home) .custom-header-media {
		bottom: 0;
		height: auto;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
	}

	.custom-logo-link {
		padding-right: 2em;
	}

	.custom-logo-link img,
	body.home.title-tagline-hidden.has-header-image .custom-logo-link img,
	body.home.title-tagline-hidden.has-header-video .custom-logo-link img {
		max-width: 350px;
	}

	.title-tagline-hidden.home.has-header-image .custom-logo-link img,
	.title-tagline-hidden.home.has-header-video .custom-logo-link img {
		max-height: 200px;
	}

	.site-title {
		font-size: 36px;
		font-size: 2.25rem;
	}

	.site-description {
		font-size: 16px;
		font-size: 1rem;
	}

	/* Navigation */

	.navigation-top {
		bottom: 0;
		font-size: 14px;
		font-size: 0.875rem;
		left: 0;
		position: absolute;
		right: 0;
		width: 100%;
		z-index: 3;
	}

	.navigation-top .wrap {
		max-width: 1000px;
		/* The font size is 14px here and we need 50px padding in ems */
		padding: 0.75em 3.4166666666667em;
	}

	.navigation-top nav {
		margin-left: -1.25em;
	}

	.site-navigation-fixed.navigation-top {
		bottom: auto;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		width: 100%;
		z-index: 1000;
	}

	.admin-bar .site-navigation-fixed.navigation-top {
		top: 32px;
	}

	/* Main Navigation */

	.js .menu-toggle,
	.js .dropdown-toggle {
		display: none;
	}

	.main-navigation {
		width: auto;
	}

	.js .main-navigation ul,
	.js .main-navigation ul ul,
	.js .main-navigation > div > ul {
		display: block;
	}

	.main-navigation ul {
		background: transparent;
		padding: 0;
	}

	.main-navigation > div > ul {
		border: 0;
		margin-bottom: 0;
		padding: 0;
	}

	.main-navigation li {
		border: 0;
		display: inline-block;
	}

	.main-navigation li li {
		display: block;
	}

	.main-navigation a {
		padding: 1em 1.25em;
	}

	.main-navigation ul ul {
		background: #fff;
		border: 1px solid #bbb;
		left: -999em;
		padding: 0;
		position: absolute;
		top: 100%;
		z-index: 99999;
	}

	.main-navigation ul li.menu-item-has-children:before,
	.main-navigation ul li.menu-item-has-children:after,
	.main-navigation ul li.page_item_has_children:before,
	.main-navigation ul li.page_item_has_children:after {
		border-style: solid;
		border-width: 0 6px 6px;
		content: "";
		display: none;
		height: 0;
		position: absolute;
		right: 1em;
		bottom: -1px;
		width: 0;
		z-index: 100000;
	}

	.main-navigation ul li.menu-item-has-children.focus:before,
	.main-navigation ul li.menu-item-has-children:hover:before,
	.main-navigation ul li.menu-item-has-children.focus:after,
	.main-navigation ul li.menu-item-has-children:hover:after,
	.main-navigation ul li.page_item_has_children.focus:before,
	.main-navigation ul li.page_item_has_children:hover:before,
	.main-navigation ul li.page_item_has_children.focus:after,
	.main-navigation ul li.page_item_has_children:hover:after {
		display: block;
	}

	.main-navigation ul li.menu-item-has-children:before,
	.main-navigation ul li.page_item_has_children:before {
		border-color: transparent transparent #bbb;
		bottom: 0;
	}

	.main-navigation ul li.menu-item-has-children:after,
	.main-navigation ul li.page_item_has_children:after {
		border-color: transparent transparent #fff;
	}

	.main-navigation ul ul li:hover > ul,
	.main-navigation ul ul li.focus > ul {
		left: 100%;
		right: auto;
	}

	.main-navigation ul ul a {
		padding: 0.75em 1.25em;
		width: 16em;
	}

	.main-navigation li li {
		-webkit-transition: background-color 0.2s ease-in-out;
		transition: background-color 0.2s ease-in-out;
	}

	.main-navigation li li:hover,
	.main-navigation li li.focus {
		background: #767676;
	}

	.main-navigation li li a {
		-webkit-transition: color 0.3s ease-in-out;
		transition: color 0.3s ease-in-out;
	}

	.main-navigation li li.focus > a,
	.main-navigation li li:focus > a,
	.main-navigation li li:hover > a,
	.main-navigation li li a:hover,
	.main-navigation li li a:focus,
	.main-navigation li li.current_page_item a:hover,
	.main-navigation li li.current-menu-item a:hover,
	.main-navigation li li.current_page_item a:focus,
	.main-navigation li li.current-menu-item a:focus {
		color: #fff;
	}

	.main-navigation ul li:hover > ul,
	.main-navigation ul li.focus > ul {
		left: 0.5em;
		right: auto;
	}

	.main-navigation .menu-item-has-children > a > .icon,
	.main-navigation .page_item_has_children > a > .icon {
		display: inline;
		left: 5px;
		position: relative;
		top: -1px;
	}

	.main-navigation ul ul .menu-item-has-children > a > .icon,
	.main-navigation ul ul .page_item_has_children > a > .icon {
		margin-top: -9px;
		left: auto;
		position: absolute;
		right: 1em;
		top: 50%;
		-webkit-transform: rotate(-90deg); /* Chrome, Safari, Opera */
		-ms-transform: rotate(-90deg); /* IE 9 */
		transform: rotate(-90deg);
	}

	.main-navigation ul ul ul {
		left: -999em;
		margin-top: -1px;
		top: 0;
	}

	.main-navigation ul ul li.menu-item-has-children.focus:before,
	.main-navigation ul ul li.menu-item-has-children:hover:before,
	.main-navigation ul ul li.menu-item-has-children.focus:after,
	.main-navigation ul ul li.menu-item-has-children:hover:after,
	.main-navigation ul ul li.page_item_has_children.focus:before,
	.main-navigation ul ul li.page_item_has_children:hover:before,
	.main-navigation ul ul li.page_item_has_children.focus:after,
	.main-navigation ul ul li.page_item_has_children:hover:after {
		display: none;
	}

	.site-header .site-navigation-fixed .menu-scroll-down {
		display: none;
	}

	/* Scroll down arrow */

	.site-header .menu-scroll-down {
		display: block;
		padding: 1em;
		position: absolute;
		right: 0;
	}

	.site-header .menu-scroll-down .icon {
		-webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */
		-ms-transform: rotate(90deg); /* IE 9 */
		transform: rotate(90deg);
	}

	.site-header .menu-scroll-down {
		color: #fff;
		top: 2em;
	}

	.site-header .navigation-top .menu-scroll-down {
		color: #767676;
		top: 0.7em;
	}

	.menu-scroll-down:focus {
		outline: thin dotted;
	}

	.menu-scroll-down .icon {
		height: 18px;
		width: 18px;
	}

	/* Front Page */

	.twentyseventeen-front-page.has-header-image .site-branding,
	.twentyseventeen-front-page.has-header-video .site-branding,
	.home.blog.has-header-image .site-branding,
	.home.blog.has-header-video .site-branding {
		margin-bottom: 70px;
	}

	.twentyseventeen-front-page.has-header-image .custom-header-media,
	.twentyseventeen-front-page.has-header-video .custom-header-media,
	.home.blog.has-header-image .custom-header-media,
	.home.blog.has-header-video .custom-header-media {
		height: 1200px;
		height: 100vh;
		max-height: 100%;
		overflow: hidden;
	}

	.twentyseventeen-front-page.has-header-image .custom-header-media:before,
	.twentyseventeen-front-page.has-header-video .custom-header-media:before,
	.home.blog.has-header-image .custom-header-media:before,
	.home.blog.has-header-video .custom-header-media:before {
		height: 33%;
	}

	.admin-bar.twentyseventeen-front-page.has-header-image .custom-header-media,
	.admin-bar.twentyseventeen-front-page.has-header-video .custom-header-media,
	.admin-bar.home.blog.has-header-image .custom-header-media,
	.admin-bar.home.blog.has-header-video .custom-header-media {
		height: calc(100vh - 32px);
	}

	.panel-content .wrap {
		padding-bottom: 4.5em;
		padding-top: 6em;
	}

	.panel-image {
		height: 100vh;
		max-height: 1200px;
	}

	/* With panel images 100% of the screen height, we're going to fix the background image where supported to create a parallax-like effect. */
	.background-fixed .panel-image {
		background-attachment: fixed;
	}

	@supports ( -webkit-touch-callout: none ) {
		/* Image scrolls with the content in iOS Safari. */
		.background-fixed .panel-image {
			background-attachment: scroll;
		}
	}

	.page-two-column .panel-content .entry-header {
		float: left;
		width: 36%;
	}

	.page-two-column .panel-content .entry-content {
		float: right;
		width: 58%;
	}

	/* Front Page - Recent Posts */

	.page-two-column .panel-content .recent-posts {
		clear: right;
		float: right;
		width: 58%;
	}

	.panel-content .recent-posts article {
		margin-bottom: 4em;
	}

	.panel-content .recent-posts .entry-header,
	.page-two-column #primary .panel-content .recent-posts .entry-header,
	.panel-content .recent-posts .entry-content,
	.page-two-column #primary .panel-content .recent-posts .entry-content {
		float: none;
		width: 100%;
	}

	.twentyseventeen-front-page .panel-content .recent-posts .entry-header {
		margin-bottom: 1.5em;
	}

	.page .panel-content .recent-posts .entry-title {
		font-size: 26px;
		font-size: 1.625rem;
	}

	/* Posts */

	.site-content {
		padding: 5.5em 0 0;
	}

	.single-post .entry-title,
	.page .entry-title {
		font-size: 26px;
		font-size: 1.625rem;
	}

	.comments-pagination,
	.post-navigation {
		clear: both;
	}

	.post-navigation .nav-previous {
		float: left;
		width: 50%;
	}

	.post-navigation .nav-next {
		float: right;
		text-align: right;
		width: 50%;
	}

	.nav-next,
	.post-navigation .nav-next {
		margin-top: 0;
	}

	/* Blog, archive, search */

	.sticky .icon-thumb-tack {
		height: 23px;
		left: -2.5em;
		top: 1.5em;
		width: 32px;
	}

	body:not(.has-sidebar):not(.page-one-column) .page-header,
	body.has-sidebar.error404 #primary .page-header,
	body.page-two-column:not(.archive) #primary .entry-header,
	body.page-two-column.archive:not(.has-sidebar) #primary .page-header {
		float: left;
		width: 36%;
	}

	.blog:not(.has-sidebar) #primary article,
	.archive:not(.page-one-column):not(.has-sidebar) #primary article,
	.search:not(.has-sidebar) #primary article,
	.error404:not(.has-sidebar) #primary .page-content,
	.error404.has-sidebar #primary .page-content,
	body.page-two-column:not(.archive) #primary .entry-content,
	body.page-two-column #comments {
		float: right;
		width: 58%;
	}

	.blog .site-main > article,
	.archive .site-main > article,
	.search .site-main > article {
		padding-bottom: 4em;
	}

	.navigation.pagination {
		clear: both;
		float: right;
		width: 58%;
	}

	.has-sidebar .navigation.pagination,
	.archive.page-one-column:not(.has-sidebar) .navigation.pagination {
		float: none;
		width: 100%;
	}

	.entry-footer {
		display: table;
		width: 100%;
	}

	.entry-footer .cat-tags-links {
		display: table-cell;
		vertical-align: middle;
		width: 100%;
	}

	.entry-footer .edit-link {
		display: table-cell;
		text-align: right;
		vertical-align: middle;
	}

	.entry-footer .edit-link a.post-edit-link {
		margin-top: 0;
		margin-left: 1em;
	}

	/* Entry content */

	/* without sidebar */

	:not(.has-sidebar) .entry-content blockquote.alignleft {
		margin-left: -17.5%;
		width: 48%;
	}

	:not(.has-sidebar) .entry-content blockquote.alignright {
		margin-right: -17.5%;
		width: 48%;
	}

	/* with sidebar */

	.has-sidebar .entry-content blockquote.alignleft {
		margin-left: 0;
		width: 34%;
	}

	.has-sidebar .entry-content blockquote.alignright {
		margin-right: 0;
		width: 34%;
	}

	.has-sidebar #primary .entry-content blockquote.alignright.below-entry-meta {
		margin-right: -72.5%;
		width: 62%;
	}

	/* blog and archive */

	.blog:not(.has-sidebar) .entry-content blockquote.alignleft,
	.twentyseventeen-front-page.page-two-column .entry-content blockquote.alignleft,
	.archive:not(.has-sidebar) .entry-content blockquote.alignleft,
	.page-two-column .entry-content blockquote.alignleft {
		margin-left: -72.5%;
		width: 62%;
	}

	.blog:not(.has-sidebar) .entry-content blockquote.alignright,
	.twentyseventeen-front-page.page-two-column .entry-content blockquote.alignright,
	.archive:not(.has-sidebar) .entry-content blockquote.alignright,
	.page-two-column .entry-content blockquote.alignright {
		margin-right: 0;
		width: 36%;
	}

	/* Post formats */

	.format-quote blockquote .icon {
		left: -1.5em;
	}

	/* Pages */

	.page.page-one-column .entry-header,
	.twentyseventeen-front-page.page-one-column .entry-header,
	.archive.page-one-column:not(.has-sidebar) .page-header {
		margin-bottom: 4em;
	}

	.page:not(.home) #content {
		padding-bottom: 3.25em;
	}

	/* 404 page */

	.error404 .page-content {
		padding-bottom: 9em;
	}

	/* Comments */

	#comments {
		padding-top: 5em;
	}

	.comments-title {
		margin-bottom: 2.5em;
	}

	ol.children .children {
		padding-left: 2em;
	}

	/* Posts pagination */

	.nav-links .nav-title {
		position: relative;
	}

	.nav-title-icon-wrapper {
		position: absolute;
		text-align: center;
		width: 2em;
	}

	.nav-links .nav-previous .nav-title .nav-title-icon-wrapper {
		left: -2em;
	}

	.nav-links .nav-next .nav-title .nav-title-icon-wrapper {
		right: -2em;
	}

	/* Secondary */

	#secondary {
		font-size: 14px;
		font-size: 0.875rem;
		line-height: 1.6;
	}

	/* Widgets */

	h2.widget-title {
		font-size: 11px;
		font-size: 0.6875rem;
		margin-bottom: 2em;
	}

	/* Footer */

	.site-footer {
		font-size: 14px;
		font-size: 0.875rem;
		line-height: 1.6;
		margin-top: 3em;
	}

	.site-footer .widget-column.footer-widget-1 {
		float: left;
		width: 36%;
	}

	.site-footer .widget-column.footer-widget-2 {
		float: right;
		width: 58%;
	}

	.social-navigation {
		clear: left;
		float: left;
		margin-bottom: 0;
		width: 36%;
	}

	.site-info {
		float: left;
		padding: 0.7em 0 0;
		width: 58%;
	}

	.social-navigation + .site-info {
		margin-left: 6%;
	}

	.site-info .sep {
		margin: 0 0.5em;
		display: inline;
		visibility: visible;
		height: auto;
		width: auto;
	}

	/* Gallery Columns */

	.gallery-columns-5 .gallery-item {
		max-width: 20%;
	}

	.gallery-columns-6 .gallery-item {
		max-width: 16.66%;
	}

	.gallery-columns-7 .gallery-item {
		max-width: 14.28%;
	}

	.gallery-columns-8 .gallery-item {
		max-width: 12.5%;
	}

	.gallery-columns-9 .gallery-item {
		max-width: 11.11%;
	}
}

@media screen and ( min-width: 67em ) {

	/* Layout */

	/* Navigation */
	.navigation-top .wrap {
		padding: 0.75em 2em;
	}

	.navigation-top nav {
		margin-left: 0;
	}

	/* Sticky posts */

	.sticky .icon-thumb-tack {
		font-size: 32px;
		font-size: 2rem;
		height: 22px;
		left: -1.25em;
		top: 0.75em;
		width: 32px;
	}

	/* Pagination */

	.page-numbers {
		display: inline-block;
	}

	.page-numbers.current {
		font-size: 15px;
		font-size: 0.9375rem;
	}

	.page-numbers.current .screen-reader-text {
		clip: rect(1px, 1px, 1px, 1px);
		height: 1px;
		overflow: hidden;
		position: absolute !important;
		width: 1px;
	}

	/* Comments */

	.comment-body {
		margin-left: 0;
	}
}

@media screen and ( min-width: 79em ) {

	.has-sidebar .entry-content blockquote.alignleft {
		margin-left: -20%;
	}

	.blog:not(.has-sidebar) .entry-content blockquote.alignright,
	.archive:not(.has-sidebar) .entry-content blockquote.alignright,
	.page-two-column .entry-content blockquote.alignright,
	.twentyseventeen-front-page .entry-content blockquote.alignright {
		margin-right: -20%;
	}
}

@media screen and ( max-width: 48.875em ) and ( min-width: 48em ) {

	.admin-bar .site-navigation-fixed.navigation-top,
	.admin-bar .site-navigation-hidden.navigation-top {
		top: 46px;
	}
}

/*--------------------------------------------------------------
20.0 Print
--------------------------------------------------------------*/

@media print {

	/* Hide elements */

	form,
	button,
	input,
	select,
	textarea,
	.navigation-top,
	.social-navigation,
	#secondary,
	.content-bottom-widgets,
	.header-image,
	.panel-image-prop,
	.icon-thumb-tack,
	.page-links,
	.edit-link,
	.post-navigation,
	.pagination.navigation,
	.comments-pagination,
	.comment-respond,
	.comment-edit-link,
	.comment-reply-link,
	.comment-metadata .edit-link,
	.pingback .edit-link,
	.site-footer aside.widget-area,
	.site-info {
		display: none !important;
	}

	.entry-footer,
	#comments,
	.site-footer,
	.single-featured-image-header {
		border: 0;
	}

	/* Font sizes */

	body {
		font-size: 12pt;
	}

	h1 {
		font-size: 24pt;
	}

	h2 {
		font-size: 22pt;
	}

	h3 {
		font-size: 17pt;
	}

	h4 {
		font-size: 12pt;
	}

	h5 {
		font-size: 11pt;
	}

	h6 {
		font-size: 12pt;
	}

	.page .panel-content .entry-title,
	.page-title,
	body.page:not(.twentyseventeen-front-page) .entry-title {
		font-size: 10pt;
	}

	/* Layout */

	.wrap {
		padding-left: 5% !important;
		padding-right: 5% !important;
		max-width: none;
	}

	/* Site Branding */

	.site-header {
		background: transparent;
		padding: 0;
	}

	.custom-header-media {
		padding: 0;
	}

	.twentyseventeen-front-page.has-header-image .site-branding,
	.twentyseventeen-front-page.has-header-video .site-branding,
	.home.blog.has-header-image .site-branding,
	.home.blog.has-header-video .site-branding {
		position: relative;
	}

	.site-branding {
		margin-top: 0;
		margin-bottom: 1.75em !important; /* override styles added by JavaScript */
	}

	.site-title {
		font-size: 25pt;
	}

	.site-description {
		font-size: 12pt;
		opacity: 1;
	}

	/* Posts */

	.single-featured-image-header {
		background: transparent;
	}

	.entry-meta {
		font-size: 9pt;
	}

	/* Colors */

	body,
	.site {
		background: none !important; /* Brute force since user agents all print differently. */
	}

	body,
	a,
	.site-title a,
	.twentyseventeen-front-page.has-header-image .site-title,
	.twentyseventeen-front-page.has-header-video .site-title,
	.twentyseventeen-front-page.has-header-image .site-title a,
	.twentyseventeen-front-page.has-header-video .site-title a {
		color: #222 !important; /* Make sure color schemes don't affect to print */
	}

	h2,
	h5,
	blockquote,
	.site-description,
	.twentyseventeen-front-page.has-header-image .site-description,
	.twentyseventeen-front-page.has-header-video .site-description,
	.entry-meta,
	.entry-meta a {
		color: #777 !important; /* Make sure color schemes don't affect to print */
	}

	.entry-content blockquote.alignleft,
	.entry-content blockquote.alignright {
		font-size: 11pt;
		width: 34%;
	}

	.site-footer {
		padding: 0;
	}
}