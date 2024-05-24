/*
Theme Name: Twenty Twenty
Text Domain: twentytwenty
Version: 1.8
Requires at least: 4.7
Requires PHP: 5.2.4
Description: Our default theme for 2020 is designed to take full advantage of the flexibility of the block editor. Organizations and businesses have the ability to create dynamic landing pages with endless layouts using the group and column blocks. The centered content column and fine-tuned typography also makes it perfect for traditional blogs. Complete editor styles give you a good idea of what your content will look like, even before you publish. You can give your site a personal touch by changing the background colors and the accent color in the Customizer. The colors of all elements on your site are automatically calculated based on the colors you pick, ensuring a high, accessible color contrast for your visitors.
Tags: blog, one-column, custom-background, custom-colors, custom-logo, custom-menu, editor-style, featured-images, footer-widgets, full-width-template, rtl-language-support, sticky-post, theme-options, threaded-comments, translation-ready, block-patterns, block-styles, wide-blocks, accessibility-ready
Author: the WordPress team
Author URI: https://wordpress.org/
Theme URI: https://wordpress.org/themes/twentytwenty/
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

All files, unless otherwise stated, are released under the GNU General Public
License version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html)

This theme, like WordPress, is licensed under the GPL.
Use it to make something cool, have fun, and share what you've learned
with others.
*/

/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------

	0. 	CSS Reset
	1. 	Document Setup
	2. 	Element Base
	3. 	Helper Classes
	4. 	Site Header
	5. 	Menu Modal
	6. 	Search Modal
	7. 	Page Templates
		a. 	Template: Cover Template
		c. 	Template: Full Width
	8.  Post: Archive
	9.  Post: Single
	10. Blocks
	11. Entry Content
	12. Comments
	13. Site Pagination
	14. Error 404
	15. Widgets
	16. Site Footer
	17. Media Queries

----------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */

/*	0. CSS Reset
/* -------------------------------------------------------------------------- */


html,
body {
	border: none;
	margin: 0;
	padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
address,
big,
cite,
code,
em,
font,
img,
small,
strike,
sub,
sup,
li,
ol,
ul,
fieldset,
form,
label,
legend,
button,
table,
caption,
tr,
th,
td {
	border: none;
	font-size: inherit;
	line-height: inherit;
	margin: 0;
	padding: 0;
	text-align: inherit;
}

blockquote::before,
blockquote::after {
	content: "";
}


/* -------------------------------------------------------------------------- */

/*	1. Document Setup
/* -------------------------------------------------------------------------- */


html {
	font-size: 62.5%; /* 1rem = 10px */
	scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
	html {
		scroll-behavior: auto;
	}
}

body {
	background: #f5efe0;
	box-sizing: border-box;
	color: #000;
	font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif;
	font-size: 1.8rem;
	letter-spacing: -0.015em;
	text-align: left;
}

@supports ( font-variation-settings: normal ) {

	body {
		font-family: "Inter var", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif;
	}
}

*,
*::before,
*::after {
	box-sizing: inherit;
	-webkit-font-smoothing: antialiased;
	word-break: break-word;
	word-wrap: break-word;
}

#site-content {
	overflow: hidden;
}


/* Clearing ---------------------------------- */

.group::after,
.entry-content::after {
	clear: both;
	content: "";
	display: block;
}


/* Base Transitions -------------------------- */

a,
path {
	transition: all 0.15s linear;
}


/* Screen Reader Text ------------------------ */

.screen-reader-text {
	border: 0;
	clip: rect(1px, 1px, 1px, 1px);
	-webkit-clip-path: inset(50%);
	clip-path: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute !important;
	width: 1px;
	word-wrap: normal !important;
	word-break: normal;
}

.screen-reader-text:focus {
	background-color: #f1f1f1;
	border-radius: 3px;
	box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
	clip: auto !important;
	-webkit-clip-path: none;
	clip-path: none;
	color: #21759b;
	display: block;
	font-size: 0.875rem;
	font-weight: 700;
	height: auto;
	right: 5px;
	line-height: normal;
	padding: 15px 23px 14px;
	text-decoration: none;
	top: 5px;
	width: auto;
	z-index: 100000;
}


/* Skip Link --------------------------------- */

.skip-link {
	left: -9999rem;
	top: 2.5rem;
	z-index: 999999999;
	text-decoration: underline;
}

.skip-link:focus {
	display: block;
	left: 6px;
	top: 7px;
	font-size: 14px;
	font-weight: 600;
	text-decoration: none;
	line-height: normal;
	padding: 15px 23px 14px;
	z-index: 100000;
	right: auto;
}


/* Fonts ------------------------------------- */

/*
 * Chrome renders extra-wide &nbsp; characters for the Hoefler Text font.
 * This results in a jumping cursor when typing in both the classic editor and
 * block editor. The following font-face override fixes the issue by manually
 * inserting a custom font that includes just a Hoefler Text space replacement
 * for that character instead.
 */
@font-face {
	font-family: NonBreakingSpaceOverride;
	src: url(data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMoAA0AAAAACDQAAALTAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP0ZGVE0cGh4GYACCahEICjx3CywAATYCJANUBCAFhiEHgWwbXQfILgpsY+rQRRARwyAs6uL7pxzYhxEE+32b3aeHmifR6tklkS9hiZA0ewkqGRJE+H7/+6378ASViK/PGeavqJyOzsceKi1s3BCiQsiOdn1r/RBgIJYEgCUhbm/8/8/h4saPssnTNkkiWUBrTRtjmQSajw3Ui3pZ3LYDPD+XG2C3JA/yKAS8/rU5eNfuGqRf4eNNgV4YAlIIgxglEkWe6FYpq10+wi3g+/nUgvgPFczNrz/RsTgVm/zfbPuHZlsuQECxuyqBcQwKFBjFgKO8AqP4bAN9tFJtnM9xPcbNjeXS/x1wY/xU52f5W/X1+9cnH4YwKIaoRRAkUkj/YlAAeF/624foiIDBgBmgQBeGAyhBljUPZUm/l2dTvmpqcBDUOHdbPZWd8JsBAsGr4w8/EDn82/bUPx4eh0YNrQTBuHO2FjQEAGBwK0DeI37DpQVqdERS4gZBhpeUhWCfLFz7J99aEBgsJCHvUGAdAPp4IADDCAPCEFMGpMZ9AQpTfQtQGhLbGVBZFV8BaqNyP68oTZgHNj3M8kBPfXTTC9t90UuzYhy9ciH0grVlOcqyCytisvbsERsEYztiznR0WCrmTksJwbSNK6fd1Rvr25I9oLvctUoEbNOmXJbqgYgPXEHJ82IUsrCnpkxh23F1rfZ2zcRnJYoXtauB3VTFkFXQg3uoZYD5qE0kdjDtoDoF1h2bulGmev5HbYhbrjtohQSRI4aNOkffIcT+d3v6atpaYh3JvPoQsztCcqvaBkppDSPcQ3bw3KaCBo1f5CJWTZEgW3LjLofYg51MaVezrx8xZitYbQ9KYeoRaqQdVLwSEfrKXLK1otCWOKNdR/YwYAfon5Yk8O2MJfSD10dPGA5PIJJQMkah0ugMJiv6x4Dm7LEa8xnrRGGGLAg4sAlbsA07sAt76DOsXKO3hIjtIlpnnFrt1qW4kh6NhS83P/6HB/fl1SMAAA==) format("woff2"), url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUQAA0AAAAACDQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAE9AAAABwAAAAchf5yU0dERUYAAATYAAAAHAAAAB4AJwAbT1MvMgAAAaAAAABJAAAAYJAcgU5jbWFwAAACIAAAAF4AAAFqUUxBZ2dhc3AAAATQAAAACAAAAAgAAAAQZ2x5ZgAAApAAAAAyAAAAPL0n8y9oZWFkAAABMAAAADAAAAA2Fi93Z2hoZWEAAAFgAAAAHQAAACQOSgWaaG10eAAAAewAAAAzAAAAVC7TAQBsb2NhAAACgAAAABAAAAAsAOQBAm1heHAAAAGAAAAAHQAAACAAWQALbmFtZQAAAsQAAAF6AAADIYvD/Adwb3N0AAAEQAAAAI4AAADsapk2o3jaY2BkYGAA4ov5mwzj+W2+MnCzXwCKMNzgCBSB0LfbQDQ7AxuI4mBgAlEAFKQIRHjaY2BkYGD3+NvCwMDBAALsDAyMDKhAFAA3+wH3AAAAeNpjYGRgYBBl4GBgYgABEMnIABJzAPMZAAVmAGUAAAB42mNgZlJhnMDAysDCKsKygYGBYRqEZtrDYMT4D8gHSmEHjgUFOQwODAqqf9g9/rYwMLB7MNUAhRlBcsxBrMlASoGBEQAj8QtyAAAAeNrjYGBkAAGmWQwMjO8gmBnIZ2NA0ExAzNjAAFYJVn0ASBsD6VAIDZb7AtELAgANIgb9AHjaY2BgYGaAYBkGRgYQSAHyGMF8FgYPIM3HwMHAxMDGoMCwQIFLQV8hXvXP//9AcRCfAcb///h/ygPW+w/vb7olBjUHCTCyMcAFGZmABBO6AogThgZgIUsXAEDcEzcAAHjaY2BgECMCyoEgACZaAed42mNgYmRgYGBnYGNgYAZSDJqMgorCgoqCjECRXwwNrCAKSP5mAAFGBiRgyAAAi/YFBQAAeNqtkc1OwkAUhU/5M25cEhcsZick0AwlBJq6MWwgJkAgYV/KAA2lJeUn+hY+gktXvpKv4dLTMqKycGHsTZNv7px7z50ZAFd4hYHjdw1Ls4EiHjVncIFnzVnc4F1zDkWjrzmPW+NNcwGlzIRKI3fJlUyrEjZQxb3mDH2fNGfRx4vmHKqG0JzHg6E0F9DOlFBGBxUI1GEzLNT4S0aLuTtsGAEUuYcQHkyg3KmIum1bNUvKlrjbbAIleqHHnS4iSudpQcySMYtdFiXlAxzSbAwfMxK6kZoHKhbjjespMTioOPZnzI+4ucCeTVyKMVKLfeAS6vSWaTinuZwzyy/Dc7vaed+6KaV0kukdPUk6yOcctZPvvxxqksq2lEW8RvHjMEO2FCl/zy6p3NEm0R9OFSafJdldc4QVeyaaObMBO0/5cCaa6d9Ggyubxire+lEojscdjoWUR1xGOy8KD8mG2ZLO2l2paDc3A39qmU2z2W5YNv5+u79e6QfGJY/hAAB42m3NywrCMBQE0DupWp/1AYI7/6DEaLQu66Mrd35BKUWKJSlFv1+rue4cGM7shgR981qSon+ZNwUJ8iDgoYU2OvDRRQ99DDDECAHGmGCKmf80hZSx/Kik/LliFbtmN6xmt+yOjdg9GztV4tROnRwX/Bsaaw51nt4Lc7tWaZYHp/MlzKx51LZs5htNri+2AAAAAQAB//8AD3jaY2BkYGDgAWIxIGZiYARCESBmAfMYAAR6AEMAAAABAAAAANXtRbgAAAAA2AhRFAAAAADYCNuG) format("woff");
}

/* ----------------------------------------------
Inter variable font. Usage:

@supports (font-variation-settings: normal) {
	html { font-family: 'Inter var', sans-serif; }
}
---------------------------------------------- */

@font-face {
	font-family: "Inter var";
	font-weight: 100 900; /* stylelint-disable-line font-weight-notation */
	font-style: normal;
	font-display: swap;
	src: url(./assets/fonts/inter/Inter-upright-var.woff2) format("woff2");
}

@font-face {
	font-family: "Inter var";
	font-weight: 100 900; /* stylelint-disable-line font-weight-notation */
	font-style: italic;
	font-display: swap;
	src: url(./assets/fonts/inter/Inter-italic-var.woff2) format("woff2");
}


/* Accessibility Settings -------------------- */

@media ( prefers-reduced-motion: reduce ) {

	* {
		animation-duration: 0s !important;
		transition-duration: 0s !important;
	}
}


/* -------------------------------------------------------------------------- */

/*	2. Element Base
/* ---------------------------------------------*---------------------------- */


main {
	display: block;
}

h1,
h2,
h3,
h4,
h5,
h6,
.faux-heading {
	font-feature-settings: "lnum";
	font-variant-numeric: lining-nums;
	font-weight: 700;
	letter-spacing: -0.0415625em;
	line-height: 1.25;
	margin: 3.5rem 0 2rem;
}

h1,
.heading-size-1 {
	font-size: 3.6rem;
	font-weight: 800;
	line-height: 1.138888889;
}

h2,
.heading-size-2 {
	font-size: 3.2rem;
}

h3,
.heading-size-3 {
	font-size: 2.8rem;
}

h4,
.heading-size-4 {
	font-size: 2.4rem;
}

h5,
.heading-size-5 {
	font-size: 2.1rem;
}

h6,
.heading-size-6 {
	font-size: 1.6rem;
	letter-spacing: 0.03125em;
	text-transform: uppercase;
}

p {
	line-height: 1.5;
	margin: 0 0 1em 0;
}

em,
i,
q,
dfn {
	font-style: italic;
}

em em,
em i,
i em,
i i,
cite em,
cite i {
	font-weight: bolder;
}

big {
	font-size: 1.2em;
}

small {
	font-size: 0.75em;
}

b,
strong {
	font-weight: 700;
}

ins {
	text-decoration: underline;
}

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sup {
	top: -0.5em;
}

sub {
	bottom: -0.25em;
}

abbr,
acronym {
	cursor: help;
}

address {
	line-height: 1.5;
	margin: 0 0 2rem 0;
}

hr {
	border-style: solid;
	border-width: 0.1rem 0 0 0;
	border-color: #dcd7ca;
	margin: 4rem 0;
}

.entry-content hr,
hr.styled-separator {
	background: linear-gradient(to left, currentColor calc(50% - 16px), transparent calc(50% - 16px), transparent calc(50% + 16px), currentColor calc(50% + 16px));
	background-color: transparent !important;
	border: none;
	height: 0.1rem;
	overflow: visible;
	position: relative;
}

.entry-content hr:not(.has-background),
hr.styled-separator {
	color: #6d6d6d;
}

.entry-content hr::before,
.entry-content hr::after,
hr.styled-separator::before,
hr.styled-separator::after {
	background: currentColor;
	content: "";
	display: block;
	height: 1.6rem;
	position: absolute;
	top: calc(50% - 0.8rem);
	transform: rotate(22.5deg);
	width: 0.1rem;
}

.entry-content hr::before,
hr.styled-separator::before {
	left: calc(50% - 0.5rem);
}

.entry-content hr::after,
hr.styled-separator::after {
	right: calc(50% - 0.5rem);
}

a {
	color: #cd2653;
	text-decoration: underline;
}

a:hover,
a:focus {
	text-decoration: none;
}


/* Lists ------------------------------------- */

ul,
ol {
	margin: 0 0 3rem 3rem;
}

ul {
	list-style: disc;
}

ul ul {
	list-style: circle;
}

ul ul ul {
	list-style: square;
}

ol {
	list-style: decimal;
}

ol ol {
	list-style: lower-alpha;
}

ol ol ol {
	list-style: lower-roman;
}

li {
	line-height: 1.5;
	margin: 0.5rem 0 0 2rem;
}

li > ul,
li > ol {
	margin: 1rem 0 0 2rem;
}

.reset-list-style,
.reset-list-style ul,
.reset-list-style ol {
	list-style: none;
	margin: 0;
}

.reset-list-style li {
	margin: 0;
}

dt,
dd {
	line-height: 1.5;
}

dt {
	font-weight: 700;
}

dt + dd {
	margin-top: 0.5rem;
}

dd + dt {
	margin-top: 1.5rem;
}


/* Quotes ------------------------------------ */

blockquote {
	border-color: #cd2653;
	border-style: solid;

	/*rtl:ignore*/
	border-width: 0 0 0 0.2rem;
	color: inherit;
	font-size: 1em;
	margin: 4rem 0;

	/*rtl:ignore*/
	padding: 0.5rem 0 0.5rem 2rem;
}

cite {
	color: #6d6d6d;
	font-size: 1.4rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.25;
}

blockquote cite {
	display: block;
	margin: 2rem 0 0 0;
}

blockquote p:last-child {
	margin: 0;
}


/* Code -------------------------------------- */

code,
kbd,
pre,
samp {
	font-family: monospace;
	font-size: 0.9em;
	padding: 0.4rem 0.6rem;
}

code,
kbd,
samp {
	background: rgba(0, 0, 0, 0.075);
	border-radius: 0.2rem;
}

pre {
	border: 0.1rem solid #dcd7ca;
	line-height: 1.5;
	margin: 4rem 0;
	overflow: auto;
	padding: 3rem 2rem;
	text-align: left;
}

pre code {
	background: transparent;
	padding: 0;
}


/* Media ------------------------------------- */

figure {
	display: block;
	margin: 0;
}

iframe {
	display: block;
	max-width: 100%;
}

video {
	display: block;
}

svg,
img,
embed,
object {
	display: block;
	height: auto;
	max-width: 100%;
}

figcaption,
.wp-caption-text {
	color: #6d6d6d;
	display: block;
	font-size: 1.5rem;
	font-weight: 500;
	line-height: 1.2;
	margin-top: 1.5rem;
}

figcaption a,
.wp-caption-text a {
	color: inherit;
}

blockquote.instagram-media,
iframe.instagram-media {
	margin: auto !important;
}


/* GALLERIES */

.gallery {
	display: flex;
	flex-wrap: wrap;
	margin: 3em 0 3em -0.8em;
	width: calc(100% + 1.6em);
}

.gallery-item {
	margin: 0.8em 0;
	padding: 0 0.8em;
	width: 100%;
}

.gallery-caption {
	display: block;
	margin-top: 0.8em;
}


/* Inputs ------------------------------------ */

fieldset {
	border: 0.2rem solid #dcd7ca;
	padding: 2rem;
}

legend {
	font-size: 0.85em;
	font-weight: 700;
	padding: 0 1rem;
}

label {
	display: block;
	font-size: 1.6rem;
	font-weight: 400;
	margin: 0 0 0.5rem 0;
}

label.inline,
input[type="checkbox"] + label {
	display: inline;
	font-weight: 400;
	margin-left: 0.5rem;
}

input[type="checkbox"] {
	-webkit-appearance: none;
	-moz-appearance: none;
	position: relative;
	top: 2px;
	display: inline-block;
	margin: 0;
	width: 1.5rem;
	min-width: 1.5rem;
	height: 1.5rem;
	background: #fff;
	border-radius: 0;
	border-style: solid;
	border-width: 0.1rem;
	border-color: #dcd7ca;
	box-shadow: none;
	cursor: pointer;
}

input[type="checkbox"]:checked::before {
	/* Use the "Yes" SVG Dashicon */
	content: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2020%2020%27%3E%3Cpath%20d%3D%27M14.83%204.89l1.34.94-5.81%208.38H9.02L5.78%209.67l1.34-1.25%202.57%202.4z%27%20fill%3D%27%23000000%27%2F%3E%3C%2Fsvg%3E");
	position: absolute;
	display: inline-block;
	margin: -0.1875rem 0 0 -0.25rem;
	height: 1.75rem;
	width: 1.75rem;
}

input,
textarea,
button,
.button,
.faux-button,
.wp-block-button__link,
.wp-block-file__button {
	font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif;
	line-height: 1;
}

@supports ( font-variation-settings: normal ) {

	input,
	textarea,
	button,
	.button,
	.faux-button,
	.faux-button.more-link,
	.wp-block-button__link,
	.wp-block-file__button {
		font-family: "Inter var", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif;
	}
}

input,
textarea {
	border-color: #dcd7ca;
	color: #000;
}

code,
input[type="url"],
input[type="email"],
input[type="tel"] {

	/*rtl:ignore*/
	direction: ltr;
}

input[type="text"],
input[type="password"],
input[type="email"],
input[type="url"],
input[type="date"],
input[type="month"],
input[type="time"],
input[type="datetime"],
input[type="datetime-local"],
input[type="week"],
input[type="number"],
input[type="search"],
input[type="tel"],
input[type="color"],
textarea {
	-webkit-appearance: none;
	-moz-appearance: none;
	background: #fff;
	border-radius: 0;
	border-style: solid;
	border-width: 0.1rem;
	box-shadow: none;
	display: block;
	font-size: 1.6rem;
	letter-spacing: -0.015em;
	margin: 0;
	max-width: 100%;
	padding: 1.5rem 1.8rem;
	width: 100%;
}

select {
	font-size: 1em;
}

textarea {
	height: 12rem;
	line-height: 1.5;
	width: 100%;
}

input::-webkit-input-placeholder {
	line-height: normal;
}

input:-ms-input-placeholder {
	line-height: normal;
}

input::-moz-placeholder {
	line-height: revert; /* Reset to the value from the user-agent stylesheet. */
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
	display: none;
}

button,
.button,
.faux-button,
.wp-block-button__link,
.wp-block-file .wp-block-file__button,
input[type="button"],
input[type="reset"],
input[type="submit"] {
	-webkit-appearance: none;
	-moz-appearance: none;
	background: #cd2653;
	border: none;
	border-radius: 0;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	font-size: 1.5rem;
	font-weight: 600;
	letter-spacing: 0.0333em;
	line-height: 1.25;
	margin: 0;
	opacity: 1;
	padding: 1.1em 1.44em;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	transition: opacity 0.15s linear;
}

button:focus,
button:hover,
.button:focus,
.button:hover,
.faux-button:focus,
.faux-button:hover,
.wp-block-button .wp-block-button__link:focus,
.wp-block-button .wp-block-button__link:hover,
.wp-block-file .wp-block-file__button:focus,
.wp-block-file .wp-block-file__button:hover,
input[type="button"]:focus,
input[type="button"]:hover,
input[type="reset"]:focus,
input[type="reset"]:hover,
input[type="submit"]:focus,
input[type="submit"]:hover {
	text-decoration: underline;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="password"]:focus,
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
	border-color: currentColor;
}

input[type="search"]:focus {
	outline: thin dotted;
	outline-offset: -4px;
}

/* Tables ------------------------------------ */

table {
	border: 0.1rem solid #dcd7ca;
	border-collapse: collapse;
	border-spacing: 0;
	empty-cells: show;
	font-size: 1.6rem;
	margin: 4rem 0;
	max-width: 100%;
	overflow: hidden;
	width: 100%;
}

.alignleft > table {
	margin: 0;
}

.alignright > table {
	margin: 0;
}

th,
td {
	border: 0.1rem solid #dcd7ca;
	line-height: 1.4;
	margin: 0;
	overflow: visible;
	padding: 0.5em;
}

caption {
	background: #dcd7ca;
	font-weight: 600;
	padding: 0.5em;
	text-align: center;
}

thead {
	vertical-align: bottom;
	white-space: nowrap;
}

th {
	font-weight: 700;
}


/* -------------------------------------------------------------------------- */

/*	3. Helper Classes
/* -------------------------------------------------------------------------- */


/* Layout ------------------------------------ */

.no-margin {
	margin: 0;
}

.no-padding {
	padding: 0;
}

.screen-height {
	min-height: 100vh;
}

.admin-bar .screen-height {
	min-height: calc(100vh - 32px);
}

@media (max-width: 782px) {

	.admin-bar .screen-height {
		min-height: calc(100vh - 46px);
	}
}

.screen-width {
	position: relative;
	left: calc(50% - 50vw);
	width: 100vw;
}

/* Sections ---------------------------------- */

section {
	padding: 5rem 0;
	width: 100%;
}

.section-inner {
	margin-left: auto;
	margin-right: auto;
	max-width: 120rem;
	width: calc(100% - 4rem);
}

.section-inner.max-percentage {
	width: 100%;
}

.section-inner.thin {
	max-width: 58rem;
}

.section-inner.small {
	max-width: 80rem;
}

.section-inner.medium {
	max-width: 100rem;
}

.section-inner.no-margin {
	margin: 0;
}


/* Toggles ----------------------------------- */

.toggle {
	-moz-appearance: none;
	-webkit-appearance: none;
	color: inherit;
	cursor: pointer;
	font-family: inherit;
	position: relative;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	text-align: inherit;
	user-select: none;
}

button.toggle {
	background: none;
	border: none;
	box-shadow: none;
	border-radius: 0;
	font-size: inherit;
	font-weight: 400;
	letter-spacing: inherit;
	padding: 0;
	text-transform: none;
}

/* Hiding and Showing ------------------------ */

.js .show-js {
	display: block !important;
}

.js .hide-js {
	display: none !important;
}

.no-js .show-no-js {
	display: block !important;
}

.no-js .hide-no-js {
	display: none !important;
}


/* Typography -------------------------------- */

.font-size-xl {
	font-size: 1.25em;
}

.font-size-xs {
	font-size: 0.8em;
}

.no-select {
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}


/* Colors ------------------------------------ */

/* COLOR */

.color-accent,
.color-accent-hover:focus,
.color-accent-hover:hover {
	color: #cd2653;
}

/* BACKGROUND COLOR */

.bg-accent,
.bg-accent-hover:focus,
.bg-accent-hover:hover {
	background-color: #cd2653;
}

/* BORDER COLOR */

.border-color-accent,
.border-color-accent-hover:focus,
.border-color-accent-hover:hover {
	border-color: #cd2653;
}

/* FILL COLOR */

.fill-children-accent,
.fill-children-accent * {
	fill: #cd2653;
}

.fill-children-current-color,
.fill-children-current-color * {
	fill: currentColor;
}


/* Opacity ----------------------------------- */

.opacity-0 {
	opacity: 0;
}

.opacity-5 {
	opacity: 0.05;
}

.opacity-10 {
	opacity: 0.1;
}

.opacity-15 {
	opacity: 0.15;
}

.opacity-20 {
	opacity: 0.2;
}

.opacity-25 {
	opacity: 0.25;
}

.opacity-30 {
	opacity: 0.3;
}

.opacity-35 {
	opacity: 0.35;
}

.opacity-40 {
	opacity: 0.4;
}

.opacity-45 {
	opacity: 0.45;
}

.opacity-50 {
	opacity: 0.5;
}

.opacity-55 {
	opacity: 0.55;
}

.opacity-60 {
	opacity: 0.6;
}

.opacity-65 {
	opacity: 0.65;
}

.opacity-70 {
	opacity: 0.7;
}

.opacity-75 {
	opacity: 0.75;
}

.opacity-80 {
	opacity: 0.8;
}

.opacity-85 {
	opacity: 0.85;
}

.opacity-90 {
	opacity: 0.9;
}

.blend-mode-exclusion {
	mix-blend-mode: exclusion;
}

.blend-mode-hue {
	mix-blend-mode: hue;
}

.blend-mode-saturation {
	mix-blend-mode: saturation;
}

.blend-mode-color {
	mix-blend-mode: color;
}

.blend-mode-luminosity {
	mix-blend-mode: luminosity;
}


/* Image Classes ----------------------------- */

.bg-image {
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}

.bg-attachment-fixed {
	background-attachment: fixed;
}

@supports ( -webkit-overflow-scrolling: touch ) {

	.bg-attachment-fixed {
		background-attachment: scroll;
	}
}

@media ( prefers-reduced-motion: reduce ) {

	.bg-attachment-fixed {
		background-attachment: scroll;
	}
}

.wp-block-image.is-resized {
	margin-left: auto;
	margin-right: auto;
}

/* Search Form ------------------------------- */

.search-form {
	align-items: stretch;
	display: flex;
	flex-wrap: nowrap;
	margin: 0 0 -0.8rem -0.8rem;
}

.search-form .search-field,
.search-form .search-submit {
	margin: 0 0 0.8rem 0.8rem;
}

.search-form label {
	align-items: stretch;
	display: flex;
	font-size: inherit;
	margin: 0;
	width: 100%;
}

.search-form .search-field {
	width: 100%;
}

.search-form .search-submit {
	flex-shrink: 0;
}

.search-form .search-submit:focus,
.search-form .search-submit:hover {
	text-decoration: none;
}


/* Social Icons ------------------------------ */

ul.social-icons {
	display: flex;
	flex-wrap: wrap;
	margin: -0.9rem 0 0 -0.9rem;
	width: calc(100% + 0.9rem);
}

ul.social-icons li {
	margin: 0.9rem 0 0 0.9rem;
}

.social-icons a {
	align-items: center;
	background: #cd2653;
	border-radius: 50%;
	color: #fff;
	display: flex;
	height: 4.4rem;
	justify-content: center;
	padding: 0;
	text-decoration: none;
	transition: transform 0.15s ease-in-out;
	width: 4.4rem;
}

.social-icons a:focus,
.social-icons a:hover {
	transform: scale(1.1);
	text-decoration: none;
}


/* Cover Modals ------------------------------ */

.cover-modal {
	display: none;
	-ms-overflow-style: none;
	overflow: -moz-scrollbars-none;
}

.cover-modal::-webkit-scrollbar {
	display: none !important;
}

.cover-modal.show-modal {
	display: block;
	cursor: pointer;
}

.cover-modal.show-modal > * {
	cursor: default;
}


/* -------------------------------------------------------------------------- */

/*	4.	Site Header
/* -------------------------------------------------------------------------- */


#site-header {
	background: #fff;
	position: relative;
}

.header-inner {
	max-width: 168rem;
	padding: 3.15rem 0;
	z-index: 100;
}

/* Header Titles ----------------------------- */

.header-titles-wrapper {
	align-items: center;
	display: flex;
	justify-content: center;
	padding: 0 4rem;
	text-align: center;
}

body:not(.enable-search-modal) .header-titles-wrapper {
	justify-content: flex-start;
	padding-left: 0;
	text-align: left;
}

.site-title,
.site-logo,
.site-description {
	margin: 0;
}

.site-title {
	font-size: 2.1rem;
	font-weight: 600;
	line-height: 1;
}

.site-title a {
	color: inherit;
	display: block;
	text-decoration: none;
}

.site-title a:hover,
.site-title a:focus {
	text-decoration: underline;
}

.site-description {
	margin-top: 1rem;
	color: #6d6d6d;
	font-size: 1.8rem;
	font-weight: 500;
	display: none;
	letter-spacing: -0.0311em;
	transition: all 0.15s linear;
}

.site-logo a,
.site-logo img {
	display: block;
}

.header-titles .site-logo .site-logo {
	margin: 0;
}

.site-logo img {
	max-height: 6rem;
	margin: 0 auto;
	width: auto;
}

body:not(.enable-search-modal) .site-logo img {
	margin: 0;
}

/* Overlay Header ---------------------------- */

.overlay-header #site-header {
	background: transparent;
	margin: 0;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	z-index: 2;
}

.overlay-header .header-inner {
	color: #fff;
}

.overlay-header .site-description,
.overlay-header .toggle {
	color: inherit;
}

.overlay-header .header-inner .toggle-wrapper::before {
	background-color: currentColor;
	opacity: 0.25;
}

.admin-bar.overlay-header #site-header {
	top: 32px;
}

@media (max-width: 782px) {

	.admin-bar.overlay-header #site-header {
		top: 46px;
	}
}

/* Header Navigation ------------------------- */

.header-navigation-wrapper {
	display: none;
}

/* Header Toggles ---------------------------- */

.header-toggles {
	display: none;
}

.header-inner .toggle {
	align-items: center;
	display: flex;
	overflow: visible;
	padding: 0 2rem;
}

.header-inner .toggle svg {
	display: block;
	position: relative;
	z-index: 1;
}

.header-inner .toggle path {
	fill: currentColor;
}

.toggle-inner {
	display: flex;
	justify-content: center;
	height: 2.3rem;
	position: relative;
}

.toggle-icon {
	display: block;
	overflow: hidden;
}

.toggle-inner .toggle-text {
	color: #6d6d6d;
	font-size: 1rem;
	font-weight: 600;
	position: absolute;
	top: calc(100% + 0.5rem);
	width: auto;
	white-space: nowrap;
	word-break: break-all;
}

.overlay-header .toggle-text {
	color: inherit;
}

.header-inner .toggle:focus .toggle-text,
.header-inner .toggle:hover .toggle-text {
	text-decoration: underline;
}

/* Search Toggle ----------------------------- */

.search-toggle {
	position: absolute;
	bottom: 0;
	left: 0;
	top: 0;
}

.search-toggle .toggle-icon,
.search-toggle svg {
	height: 2.5rem;
	max-width: 2.3rem;
	width: 2.3rem;
}

/* Navigation Toggle ------------------------- */

.nav-toggle {
	position: absolute;
	bottom: 0;
	right: 0;
	top: 0;
	width: 6.6rem;
}

.nav-toggle .toggle-icon,
.nav-toggle svg {
	height: 0.8rem;
	width: 2.6rem;
}

.nav-toggle .toggle-inner {
	padding-top: 0.8rem;
}

/* Primary Menu ---------------------------- */

.primary-menu-wrapper {
	display: none;
}

ul.primary-menu {
	display: flex;
	font-size: 1.8rem;
	font-weight: 500;
	letter-spacing: -0.0277em;
	flex-wrap: wrap;
	justify-content: flex-end;
	margin: -0.8rem 0 0 -1.6rem;
}

.primary-menu .icon {
	display: block;
	height: 0.7rem;
	position: absolute;
	pointer-events: none;
	transform: rotate(-45deg);
	width: 1.3rem;
}

.primary-menu .icon::before,
.primary-menu .icon::after {
	content: "";
	display: block;
	background-color: currentColor;
	position: absolute;
	bottom: calc(50% - 0.1rem);
	left: 0;
}

.primary-menu .icon::before {
	height: 0.9rem;
	width: 0.2rem;
}

.primary-menu .icon::after {
	height: 0.2rem;
	width: 0.9rem;
}

.primary-menu li {
	font-size: inherit;
	line-height: 1.25;
	position: relative;
}

.primary-menu > li {
	margin: 0.8rem 0 0 1.6rem;
}

.primary-menu > li.menu-item-has-children > a {
	padding-right: 2rem;
}

.primary-menu > li > .icon {
	right: -0.5rem;
	top: calc(50% - 0.4rem);
}

.primary-menu a {
	color: inherit;
	display: block;
	line-height: 1.2;
	text-decoration: none;
	word-break: normal;
	word-wrap: normal;
}

.primary-menu a:hover,
.primary-menu a:focus,
.primary-menu .current_page_ancestor {
	text-decoration: underline;
}

.primary-menu li.current-menu-item > a,
.primary-menu li.current-menu-item > .link-icon-wrapper > a {
	text-decoration: underline;
}

.primary-menu li.current-menu-item > a:hover,
.primary-menu li.current-menu-item > .link-icon-wrapper > a:hover,
.primary-menu li.current-menu-item > a:focus,
.primary-menu li.current-menu-item > .link-icon-wrapper > a:focus {
	text-decoration: none;
}

/* SUB MENU */

.primary-menu ul {
	background: #000;
	border-radius: 0.4rem;
	color: #fff;
	font-size: 1.7rem;
	opacity: 0;
	padding: 1rem 0;
	position: absolute;
	right: 9999rem;
	top: calc(100% + 2rem);
	transition: opacity 0.15s linear, transform 0.15s linear, right 0s 0.15s;
	transform: translateY(0.6rem);
	width: 20rem;
	z-index: 1;
}

.primary-menu li.menu-item-has-children:hover > ul,
.primary-menu li.menu-item-has-children:focus > ul,
.primary-menu li.menu-item-has-children.focus > ul {
	right: 0;
	opacity: 1;
	transform: translateY(0);
	transition: opacity 0.15s linear, transform 0.15s linear;
}

.primary-menu ul::before,
.primary-menu ul::after {
	content: "";
	display: block;
	position: absolute;
	bottom: 100%;
}

.primary-menu ul::before {
	height: 2rem;
	left: 0;
	right: 0;
}

.primary-menu ul::after {
	border: 0.8rem solid transparent;
	border-bottom-color: #000;
	right: 1.8rem;
}

.primary-menu ul a {
	background: transparent;
	border: none;
	color: inherit;
	display: block;
	padding: 1rem 2rem;
	transition: background-color 0.15s linear;
	width: 100%;
}

.primary-menu ul li.menu-item-has-children > a {
	padding-right: 4.5rem;
}

.primary-menu ul li.menu-item-has-children .icon {
	position: absolute;
	right: 1.5rem;
	top: calc(50% - 0.5rem);
}

/* DEEP DOWN */

.primary-menu ul ul {
	top: -1rem;
}

.primary-menu ul li.menu-item-has-children:hover > ul,
.primary-menu ul li.menu-item-has-children:focus > ul,
.primary-menu ul li.menu-item-has-children.focus > ul {
	right: calc(100% + 2rem);
}

.primary-menu ul ul::before {
	bottom: 0;
	height: auto;
	left: auto;
	right: -2rem;
	top: 0;
	width: 2rem;
}

.primary-menu ul ul::after {
	border-bottom-color: transparent;

	/*rtl:ignore*/
	border-left-color: #000;
	bottom: auto;
	right: -1.6rem;
	top: 2rem;
}

.rtl .primary-menu ul ul::after {
	transform: rotate(180deg);
}

/*
 * Enable nav submenu expansion with tapping on arrows on large-viewport
 * touch interfaces (e.g. tablets or laptops with touch screens).
 * These rules are supported by all browsers (>IE11) and when JS is disabled.
 */
@media (any-pointer: coarse) {

	.primary-menu > li.menu-item-has-children > a {
		padding-right: 0;
		margin-right: 2rem;
	}

	.primary-menu ul li.menu-item-has-children > a {
		margin-right: 4.5rem;
		padding-right: 0;
		width: unset;
	}

}

/* Repeat previous rules for IE11 (when JS enabled for polyfill). */
body.touch-enabled .primary-menu > li.menu-item-has-children > a {
	padding-right: 0;
	margin-right: 2rem;
}

body.touch-enabled .primary-menu ul li.menu-item-has-children > a {
	margin-right: 4.5rem;
	padding-right: 0;
	width: unset;
}

/* -------------------------------------------------------------------------- */

/*	5. Menu Modal
/* -------------------------------------------------------------------------- */


.menu-modal {
	background: #fff;
	display: none;
	opacity: 0;
	overflow-y: auto;
	overflow-x: hidden;
	position: fixed;
	bottom: 0;
	left: -99999rem;
	right: 99999rem;
	top: 0;
	transition: opacity 0.25s ease-in, left 0s 0.25s, right 0s 0.25s;
	z-index: 99;
}

.admin-bar .menu-modal {
	top: 32px;
}

@media (max-width: 782px) {

	.admin-bar .menu-modal {
		top: 46px;
	}
}

.menu-modal.show-modal {
	display: flex;
}

.menu-modal.active {
	left: 0;
	opacity: 1;
	right: 0;
	transition: opacity 0.25s ease-out;
}

.menu-modal-inner {
	background: #fff;
	display: flex;
	justify-content: stretch;
	overflow: auto;
	-ms-overflow-style: auto;
	width: 100%;
}

.menu-wrapper {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
}

button.close-nav-toggle {
	align-items: center;
	display: flex;
	font-size: 1.6rem;
	font-weight: 500;
	justify-content: flex-end;
	padding: 3.1rem 0;
	width: 100%;
}

button.close-nav-toggle svg {
	height: 1.6rem;
	width: 1.6rem;
}

button.close-nav-toggle .toggle-text {
	margin-right: 1.6rem;
}

.menu-modal .menu-top {
	flex-shrink: 0;
}


/* Main Menu --------------------------------- */

.modal-menu {
	position: relative;
	left: calc(50% - 50vw);
	width: 100vw;
}

.modal-menu li {
	border-color: #dedfdf;
	border-style: solid;
	border-width: 0.1rem 0 0 0;
	display: flex;
	flex-wrap: wrap;
	line-height: 1;
	justify-content: flex-start;
	margin: 0;
}

.modal-menu > li > a,
.modal-menu > li > .ancestor-wrapper > a {
	font-size: 2rem;
	font-weight: 700;
	letter-spacing: -0.0375em;
}

.modal-menu > li:last-child {
	border-bottom-width: 0.1rem;
}

.modal-menu .ancestor-wrapper {
	display: flex;
	justify-content: space-between;
	width: 100%;
}

.modal-menu a {
	display: block;
	padding: 2rem 2.5rem;
	text-decoration: none;
	width: 100%;
}

.modal-menu a:focus,
.modal-menu a:hover,
.modal-menu li.current-menu-item > .ancestor-wrapper > a,
.modal-menu li.current_page_ancestor > .ancestor-wrapper > a {
	text-decoration: underline;
}

button.sub-menu-toggle {
	border-left: 0.1rem solid #dedfdf;
	flex-shrink: 0;
	margin: 1rem 0;
	padding: 0 2.5rem;
}

button.sub-menu-toggle svg {
	height: 0.9rem;
	transition: transform 0.15s linear;
	width: 1.5rem;
}

button.sub-menu-toggle.active svg {
	transform: rotate(180deg);
}

.modal-menu ul {
	display: none;
	margin: 0;
	width: 100%;
}

.modal-menu ul li {
	border-left-width: 1rem;
}

.modal-menu ul li a {
	color: inherit;
	font-weight: 500;
}

/* Main menu animation ----------------------- */

.menu-wrapper .menu-item {
	position: relative;
}

.menu-wrapper .active {
	display: block;
}

.menu-wrapper.is-toggling {
	pointer-events: none;
}

.menu-wrapper.is-toggling .menu-item {
	position: absolute;
	top: 0;
	left: 0;
	margin: 0;
	width: 100%;
}

.menu-wrapper.is-toggling .menu-bottom .social-menu .menu-item {
	width: auto;
}

.menu-wrapper.is-animating .menu-item,
.menu-wrapper.is-animating .toggling-target {
	transition-duration: 250ms;
}

.menu-wrapper.is-animating .menu-item {
	transition-property: transform;
}

.menu-wrapper.is-toggling .toggling-target {
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	opacity: 1;
}

.menu-wrapper.is-toggling .toggling-target.active {
	opacity: 0;
}

.menu-wrapper.is-animating.is-toggling .toggling-target {
	display: block;
	transition-property: opacity;
	opacity: 0;
}

.menu-wrapper.is-animating.is-toggling .toggling-target.active {
	opacity: 1;
}

.menu-wrapper.is-toggling .modal-menu > li:last-child li {
	border-top-color: transparent;
	border-bottom-width: 0.1rem;
}

@media (prefers-reduced-motion: reduce) {

	.menu-wrapper.is-animating .menu-item,
	.menu-wrapper.is-animating .toggling-target {
		transition-duration: 1ms !important;
	}

}


/* Expanded Menu ----------------------------- */

.expanded-menu {
	display: none;
}

.mobile-menu {
	display: block;
}


/* Menu Bottom ------------------------------- */

.menu-bottom {
	flex-shrink: 0;
	padding: 4rem 0;
}

.menu-bottom nav {
	width: 100%;
}

.menu-copyright {
	display: none;
	font-size: 1.6rem;
	font-weight: 500;
	margin: 0;
}

.menu-copyright a:focus,
.menu-copyright a:hover {
	text-decoration: underline;
}

.menu-bottom .social-menu {
	justify-content: center;
}


/* -------------------------------------------------------------------------- */

/*	6. Search Modal
/* -------------------------------------------------------------------------- */


.search-modal {
	background: rgba(0, 0, 0, 0.2);
	display: none;
	opacity: 0;
	position: fixed;
	bottom: 0;
	left: -9999rem;
	top: 0;
	transition: opacity 0.2s linear, left 0s 0.2s linear;
	width: 100%;
	z-index: 999;
}

.admin-bar .search-modal.active {
	top: 32px;
}

@media (max-width: 782px) {

	.admin-bar .search-modal.active {
		top: 46px;
	}
}

.search-modal-inner {
	background: #fff;
	transform: translateY(-100%);
	transition: transform 0.15s linear, box-shadow 0.15s linear;
}

.search-modal-inner .section-inner {
	display: flex;
	justify-content: space-between;
	max-width: 168rem;
}

.search-modal.active {
	left: 0;
	opacity: 1;
	transition: opacity 0.2s linear;
}

.search-modal.active .search-modal-inner {
	box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.08);
	transform: translateY(0);
	transition: transform 0.25s ease-in-out, box-shadow 0.1s 0.25s linear;
}

button.search-untoggle {
	align-items: center;
	display: flex;
	flex-shrink: 0;
	justify-content: center;
	margin-right: -2.5rem;
	padding: 0 2.5rem;
}

.search-modal button.search-untoggle {
	color: inherit;
}

.search-modal.active .search-untoggle {
	animation: popIn both 0.3s 0.2s;
}

.search-untoggle svg {
	height: 1.5rem;
	transition: transform 0.15s ease-in-out;
	width: 1.5rem;
}

.search-untoggle:focus svg,
.search-untoggle:hover svg {
	transform: scale(1.15);
}


/* Modal Search Form ------------------------- */

.search-modal form {
	margin: 0;
	position: relative;
	width: 100%;
}

.search-modal .search-field {
	background: none;
	border: none;
	border-radius: 0;
	color: inherit;
	font-size: 2rem;
	letter-spacing: -0.0277em;
	height: 8.4rem;
	margin: 0 0 0 -2rem;
	max-width: calc(100% + 2rem);
	padding: 0 0 0 2rem;
	width: calc(100% + 2rem);
}

.search-modal .search-field::-webkit-input-placeholder {
	color: inherit;
}

.search-modal .search-field:-ms-input-placeholder {
	color: inherit;
}

.search-modal .search-field::-moz-placeholder {
	color: inherit;
	line-height: 4;
}

.search-modal .search-submit {
	position: absolute;
	right: -9999rem;
	top: 50%;
	transform: translateY(-50%);
}

.search-modal .search-submit:focus {
	right: 0;
}


/* -------------------------------------------------------------------------- */

/*	7a. Template: Cover Template
/* -------------------------------------------------------------------------- */


.cover-header {
	display: flex;
	overflow: hidden;
}

.cover-header-inner-wrapper {
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: flex-end;
	width: 100%;
}

.cover-header-inner {
	padding: 10rem 0 5rem 0;
	width: 100%;
}

.cover-color-overlay,
.cover-color-overlay::before {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;
}

.cover-color-overlay::before {
	background: currentColor;
	content: "";
	display: block;
}

.cover-header .entry-header {
	position: relative;
	width: 100%;
	z-index: 1;
}

.cover-header .entry-header * {
	color: #fff;
}

body.template-cover .entry-header {
	background: transparent;
	padding: 0;
}

.cover-header h1,
.cover-header h2,
.cover-header h3,
.cover-header h4,
.cover-header h5,
.cover-header h6,
.cover-header .faux-heading {
	color: inherit;
}

.cover-header .entry-header a {
	color: inherit;
}

/* To The Content ---------------------------- */

.to-the-content-wrapper {
	position: absolute;
	left: 0;
	right: 0;
	top: calc(100% + 0.5rem);
}

.to-the-content {
	align-items: center;
	display: flex;
	justify-content: center;
	height: 4rem;
	text-decoration: none;
}

.to-the-content svg {
	height: 2rem;
	transition: transform 0.15s linear;
	transform: translateY(0);
	width: 1.767rem;
}

.to-the-content:focus svg,
.to-the-content:hover svg {
	transform: translateY(20%);
}


/* -------------------------------------------------------------------------- */

/*	7c. Template: Full Width
/* -------------------------------------------------------------------------- */


body.template-full-width .entry-content > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.is-style-wide),
body.template-full-width [class*="__inner-container"] > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.is-style-wide) {
	max-width: 120rem;
}

body.template-full-width .entry-content .alignleft,
body.template-full-width .entry-content .alignright {
	position: static;
}

body.template-full-width .entry-content .alignleft,
body.template-full-width [class*="wp-block"].alignwide [class*="__inner-container"] > .alignleft,
body.template-full-width [class*="wp-block"].alignwide [class*="__inner-container"] > p .alignleft,
body.template-full-width [class*="wp-block"].alignwide [class*="__inner-container"] > .wp-block-image .alignleft {

	/*rtl:ignore*/
	margin-left: 0;
	position: static;
}

body.template-full-width .entry-content > .alignleft,
body.template-full-width [class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > .alignleft,
body.template-full-width [class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > p .alignleft,
body.template-full-width [class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > .wp-block-image .alignleft {

	/*rtl:ignore*/
	margin-left: 2rem;
	position: static;
}

body.template-full-width .entry-content .alignright,
body.template-full-width [class*="wp-block"].alignwide [class*="__inner-container"] > .alignright,
body.template-full-width [class*="wp-block"].alignwide [class*="__inner-container"] > p .alignright,
body.template-full-width [class*="wp-block"].alignwide [class*="__inner-container"] > .wp-block-image .alignright {

	/*rtl:ignore*/
	margin-right: 0;
	position: static;
}

body.template-full-width .entry-content > .alignright,
body.template-full-width [class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > .alignright,
body.template-full-width [class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > p .alignright,
body.template-full-width [class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > .wp-block-image .alignright {

	/*rtl:ignore*/
	margin-right: 2rem;
	position: static;
}


/* -------------------------------------------------------------------------- */

/*	8. Post: Archive
/* -------------------------------------------------------------------------- */


/* Archive Header ---------------------------- */

.archive-header {
	background-color: #fff;
	padding: 4rem 0;
}

.reduced-spacing .archive-header {
	padding-bottom: 2rem;
}

.archive-title {
	font-size: 2.4rem;
	font-weight: 700;
	letter-spacing: -0.026666667em;
	margin: 0;
}

.archive-subtitle p:last-child {
	margin-bottom: 0;
}


/* Posts ------------------------------------- */

body:not(.singular) main > article:first-of-type {
	padding: 4rem 0 0;
}


/* Search Results ---------------------------- */

.no-search-results-form {
	padding-top: 5rem;
}


/* -------------------------------------------------------------------------- */

/*	9. Post: Single
/* -------------------------------------------------------------------------- */


/* Post Header ------------------------------- */

.singular .entry-header {
	background-color: #fff;
	padding: 4rem 0;
}

.entry-categories {
	line-height: 1.25;
	margin-bottom: 2rem;
}

.entry-categories-inner {
	justify-content: center;
	display: flex;
	flex-wrap: wrap;
	margin: -0.5rem 0 0 -1rem;
}

.entry-categories a {
	border-bottom: 0.15rem solid currentColor;
	font-size: 1.4rem;
	font-weight: 700;
	letter-spacing: 0.036666667em;
	margin: 0.5rem 0 0 1rem;
	text-decoration: none;
	text-transform: uppercase;
}

.entry-categories a:focus,
.entry-categories a:hover {
	border-bottom-color: transparent;
}

h1.entry-title,
h2.entry-title {
	margin: 0;
}

.entry-title a {
	color: inherit;
	text-decoration: none;
}

.entry-title a:focus,
.entry-title a:hover {
	text-decoration: underline;
}

.intro-text {
	margin-top: 2rem;
}

.singular .intro-text {
	font-size: 2rem;
	letter-spacing: -0.0315em;
	line-height: 1.4;
}

/* POST META */

.post-meta-single-top .post-meta {
	justify-content: center;
}

.post-meta-wrapper {
	margin-top: 2rem;
	margin-right: auto;
	margin-left: auto;
	max-width: 58rem;
	width: 100%;
}

.post-meta {
	color: #6d6d6d;
	display: flex;
	flex-wrap: wrap;
	font-size: 1.5rem;
	font-weight: 500;
	list-style: none;
	margin: -1rem 0 0 -2rem;
}

.post-meta li {
	flex-shrink: 0;
	letter-spacing: -0.016875em;
	margin: 1rem 0 0 2rem;
	max-width: calc(100% - 2rem);
}

.post-meta a {
	color: inherit;
	text-decoration: none;
}

.post-meta a:focus,
.post-meta a:hover {
	text-decoration: underline;
}

.post-meta .meta-wrapper {
	align-items: center;
	display: flex;
	flex-wrap: nowrap;
}

.post-meta .meta-icon {
	flex-shrink: 0;
	margin-right: 1rem;
}

.sticky .post-sticky {
	color: inherit;
}

.post-meta .post-author .meta-icon svg {
	width: 1.6rem;
	height: 1.8rem;
}

.post-meta .post-categories .meta-icon svg {
	width: 1.8rem;
	height: 1.7rem;
}

.post-meta .post-comment-link .meta-icon svg {
	width: 1.8rem;
	height: 1.8rem;
}

.post-meta .post-date .meta-icon svg {
	width: 1.7rem;
	height: 1.8rem;
}

.post-meta .post-edit .meta-icon svg {
	width: 1.8rem;
	height: 1.8rem;
}

.post-meta .post-sticky .meta-icon svg {
	width: 1.5rem;
	height: 1.8rem;
}

.post-meta .post-tags .meta-icon svg {
	width: 1.8rem;
	height: 1.8rem;
}

.post-meta svg * {
	fill: currentColor;
}


/* Featured Media ---------------------------- */

.featured-media {
	margin-top: 5rem;
	position: relative;
}

.singular .featured-media {
	margin-top: 0;
}

.singular .featured-media-inner {
	position: relative;
	left: calc(50% - 50vw);
	width: 100vw;
}

.singular .featured-media::before {
	background: #fff;
	content: "";
	display: block;
	position: absolute;
	bottom: 50%;
	left: 0;
	right: 0;
	top: 0;
}

.featured-media img {
	margin: 0 auto;
}

.featured-media figcaption {
	margin: 1.5rem auto 0 auto;
	text-align: center;
	width: calc(100% - 5rem);
}

.post-inner {
	padding-top: 5rem;
}

.reduced-spacing.missing-post-thumbnail .post-inner {
	padding-top: 0;
}


/* Post Footer ------------------------------- */

/* POST NAV LINKS */

.post-nav-links {
	border-radius: 0.4rem;
	display: flex;
	font-size: 0.9em;
	font-weight: 600;
	line-height: 1;
	margin: 3em auto 0 auto;
	padding: 0;
	width: calc(100% - 4rem);
	max-width: 58rem;
}

.post-nav-links > span.label {
	padding: 1em 0;
}

.post-nav-links > * {
	padding: 1em 0.75em;
}

/* POST META BOTTOM */

.post-meta-wrapper.post-meta-single-bottom {
	margin-top: 3rem;
}


/* Author Bio -------------------------------- */

.author-bio {
	margin-top: 4rem;
	margin-right: auto;
	margin-left: auto;
	max-width: 58rem;
	width: 100%;
}

.hide-avatars .author-bio {
	padding-left: 0;
}

.author-bio .author-title-wrapper {
	align-items: center;
	display: flex;
	margin: 0 0 1rem 0;
}

.author-bio .avatar {
	border-radius: 50%;
	margin-right: 1.5rem;
	height: 5rem;
	width: 5rem;
}

.hide-avatars img.avatar {
	display: none;
}

.author-bio p:last-child {
	margin-bottom: 0;
}

.author-bio .author-title {
	margin: 0;
}

.author-bio .author-link {
	display: block;
	font-size: 1.6rem;
	font-weight: 600;
	margin-top: 1em;
	text-decoration: none;
}

.author-bio .author-link:focus,
.author-bio .author-link:hover {
	text-decoration: underline;
}


/* Single Pagination ------------------------- */

.pagination-single {
	font-size: 1.8rem;
	margin-top: 5rem;
}

.pagination-single-inner {
	display: flex;
	flex-direction: column;
}

.pagination-single hr:first-child {
	margin: 0 0 2.8rem 0;
}

.pagination-single hr:last-child {
	margin: 2.8rem 0 0.8rem 0;
}

.pagination-single a {
	align-items: baseline;
	display: flex;
	font-weight: 600;
	letter-spacing: -0.0275em;
	text-decoration: none;
	flex: 1;
}

.pagination-single a + a {
	margin-top: 1rem;
}

.pagination-single a .arrow {
	margin-right: 1rem;
}

.pagination-single a:focus .title,
.pagination-single a:hover .title {
	text-decoration: underline;
}


/* -------------------------------------------------------------------------- */

/*	10. Blocks
/* -------------------------------------------------------------------------- */


/* Block Colors ------------------------------ */

.has-text-color a {
	color: inherit;
}

/* CUSTOM COLORS */

:root .has-accent-color {
	color: #cd2653;
}

:root .has-accent-background-color {
	background-color: #cd2653;
	color: #fff;
}

:root .has-primary-color {
	color: #000;
}

:root .has-primary-background-color {
	background-color: #000;
	color: #f5efe0;
}

:root .has-secondary-color {
	color: #6d6d6d;
}

:root .has-secondary-background-color {
	background-color: #6d6d6d;
	color: #fff;
}

:root .has-subtle-background-color {
	color: #dcd7ca;
}

:root .has-subtle-background-background-color {
	background-color: #dcd7ca;
	color: #000;
}

:root .has-background-color {
	color: #f5efe0;
}

:root .has-background-background-color {
	background-color: #f5efe0;
	color: #000;
}


/* Block Typography Classes ------------------ */

.has-text-align-left {

	/*rtl:ignore*/
	text-align: left;
}

.has-text-align-center {
	text-align: center;
}

.has-text-align-right {
	text-align: right;
}

.has-drop-cap:not(:focus)::first-letter {
	color: #cd2653;
	font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif;
	font-size: 5.1em;
	font-weight: 800;
	margin: 0.05em 0.1em 0 0;
}

.has-drop-cap:not(:focus)::first-letter::after {
	content: "";
	display: table;
	clear: both;
}

.has-drop-cap:not(:focus)::after {
	padding: 0;
}


/* Block Font Families ----------------------- */

.has-drop-cap:not(:focus)::first-letter,
.entry-content .wp-block-archives,
.entry-content .wp-block-categories,
.entry-content .wp-block-cover-image,
.entry-content .wp-block-latest-comments,
.entry-content .wp-block-latest-posts,
.entry-content .wp-block-pullquote,
.entry-content .wp-block-quote.is-large,
.entry-content .wp-block-quote.is-style-large {
	font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif;
}

@supports ( font-variation-settings: normal ) {

	.has-drop-cap:not(:focus)::first-letter,
	.entry-content .wp-block-archives,
	.entry-content .wp-block-categories,
	.entry-content .wp-block-latest-posts,
	.entry-content .wp-block-latest-comments,
	.entry-content .wp-block-cover-image p,
	.entry-content .wp-block-pullquote {
		font-family: "Inter var", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif;
	}
}

/* Block Font Sizes -------------------------- */

.entry-content .has-small-font-size {
	font-size: 0.842em;
}

.entry-content .has-normal-font-size,
.entry-content .has-regular-font-size {
	font-size: 1em;
}

.entry-content .has-medium-font-size {
	font-size: 1.1em;
	line-height: 1.45;
}

.entry-content .has-large-font-size {
	font-size: 1.25em;
	line-height: 1.4;
}

.entry-content .has-larger-font-size {
	font-size: 1.5em;
	line-height: 1.3;
}


/* Block: Base Margins ----------------------- */

*[class*="_inner-container"] > *:first-child {
	margin-top: 0;
}

*[class*="_inner-container"] > *:last-child {
	margin-bottom: 0;
}

.wp-block-archives:not(.alignwide):not(.alignfull),
.wp-block-categories:not(.alignwide):not(.alignfull),
.wp-block-code,
.wp-block-columns:not(.alignwide):not(.alignfull),
.wp-block-cover:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.aligncenter),
.wp-block-embed:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.aligncenter),
.wp-block-gallery:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.aligncenter),
.wp-block-group:not(.has-background):not(.alignwide):not(.alignfull),
.wp-block-image:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.aligncenter),
.wp-block-latest-comments:not(.aligncenter):not(.alignleft):not(.alignright),
.wp-block-latest-posts:not(.aligncenter):not(.alignleft):not(.alignright),
.wp-block-media-text:not(.alignwide):not(.alignfull),
.wp-block-preformatted,
.wp-block-pullquote:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright),
.wp-block-quote,
.wp-block-quote.is-large,
.wp-block-quote.is-style-large,
.wp-block-verse,
.wp-block-video:not(.alignwide):not(.alignfull) {
	margin-bottom: 3rem;
	margin-top: 3rem;
}


/* Block: Shared Nesting Alignment Resets ---- */

[class*="__inner-container"] .wp-block-group:not(.alignfull):not(.alignwide):not(.alignleft):not(.alignright),
[class*="__inner-container"] .wp-block-cover:not(.alignfull):not(.alignwide):not(.alignleft):not(.alignright) {
	margin-left: auto;
	margin-right: auto;
	max-width: 58rem;
}


/* Block: Shared Widget Styles --------------- */

.wp-block-archives,
.wp-block-categories,
.wp-block-latest-posts,
.wp-block-latest-comments {
	list-style: none;
	margin-left: 0;
}

.wp-block-archives ul,
.wp-block-categories ul,
.wp-block-latest-posts ul,
.wp-block-latest-comments ul {
	list-style: none;
}

.entry-content .wp-block-archives > li,
.entry-content .wp-block-categories > li,
.entry-content .wp-block-latest-posts > li,
.entry-content .wp-block-latest-comment > li {
	margin-left: 0;
}

.entry-content .wp-block-archives > li:last-child,
.entry-content .wp-block-categories > li:last-child,
.entry-content .wp-block-latest-posts > li:last-child,
.entry-content .wp-block-latest-comment > li:last-child {
	margin-bottom: 0;
}

.entry-content .wp-block-archives *,
.entry-content .wp-block-categories *,
.entry-content .wp-block-latest-posts *,
.entry-content .wp-block-latest-comments * {
	font-family: inherit;
}

.entry-content .wp-block-archives li,
.entry-content .wp-block-categories li,
.entry-content .wp-block-latest-posts li {
	color: #6d6d6d;
}

.wp-block-archives a,
.wp-block-categories a,
.wp-block-latest-posts a,
.wp-block-latest-comments a {
	font-weight: 700;
	text-decoration: none;
}

.wp-block-archives a:hover,
.wp-block-categories a:hover,
.wp-block-latest-posts a:hover,
.wp-block-latest-comments a:hover,
.wp-block-archives a:focus,
.wp-block-categories a:focus,
.wp-block-latest-posts a:focus,
.wp-block-latest-comments a:focus {
	text-decoration: underline;
}

.wp-block-latest-posts a,
.wp-block-latest-comments__comment-meta {
	font-weight: 700;
	letter-spacing: -0.025em;
	line-height: 1.25;
}

.wp-block-latest-comments__comment-date,
.wp-block-latest-posts__post-date {
	color: #6d6d6d;
	font-size: 0.7em;
	font-weight: 600;
	letter-spacing: normal;
	margin-top: 0.15em;
}


/* Block: Shared Media Styles ---------------- */

.wp-block-embed figcaption,
.wp-block-image figcaption {
	color: #6d6d6d;
	font-size: 1.4rem;
	margin-bottom: 0;
	margin-top: 1.5rem;
}

/* Block: Audio ------------------------------ */

.wp-block-audio audio {
	width: 100%;
}

/* Block: Button ----------------------------- */

.wp-block-button {
	margin: 3rem 0;
}

.wp-block-button.is-style-outline {
	color: #cd2653;
}

.is-style-outline .wp-block-button__link:not(.has-text-color) {
	color: inherit;
}

.is-style-outline .wp-block-button__link {
	padding: calc(1.1em - 0.2rem) calc(1.44em - 0.2rem);
}

/* Block: Columns ---------------------------- */

.wp-block-columns.alignfull,
.alignfull:not(.has-background) .wp-block-columns {
	padding-left: 2rem;
	padding-right: 2rem;
}

.wp-block-column {
	margin-bottom: 3.2rem;
}

.wp-block-column > *:first-child {
	margin-top: 0;
}

.wp-block-column > *:last-child {
	margin-bottom: 0;
}

/* Block: Cover ------------------------------ */

.wp-block-cover-image .wp-block-cover__inner-container,
.wp-block-cover .wp-block-cover__inner-container {
	width: calc(100% - 4rem);
	padding: 2rem 0;
}

.wp-block-cover-image .wp-block-cover-image-text,
.wp-block-cover-image .wp-block-cover-text,
.wp-block-cover-image h2,
.wp-block-cover .wp-block-cover-image-text,
.wp-block-cover .wp-block-cover-text,
.wp-block-cover h2 {
	max-width: 100%;
	padding: 0;
}

.wp-block-cover-image h2,
.wp-block-cover h2 {
	font-size: 3.2rem;
}

/* Block: Embed ------------------------------ */

/* Block: File ------------------------------- */

.wp-block-file {
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}

.wp-block-file a:not(.wp-block-file__button) {
	font-weight: 700;
	text-decoration: none;
}

.wp-block-file a:not(.wp-block-file__button):not(:last-child) {
	margin-right: 1rem;
}

.wp-block-file a:not(.wp-block-file__button):focus,
.wp-block-file a:not(.wp-block-file__button):hover {
	text-decoration: underline;
}

.wp-block-file .wp-block-file__button {
	font-size: 1.5rem;
	padding: 1em 1.25em;
}

.wp-block-file a.wp-block-file__button:visited {
	opacity: 1;
}

.wp-block-file a.wp-block-file__button:active,
.wp-block-file a.wp-block-file__button:focus,
.wp-block-file a.wp-block-file__button:hover {
	opacity: 1;
	text-decoration: underline;
}


/* Block: Gallery ---------------------------- */

.wp-block-gallery ul {
	list-style: none;
	margin: 0 0 -1.6rem 0;
}

figure.wp-block-gallery.alignnone,
figure.wp-block-gallery.aligncenter {
	margin-bottom: 3rem;
	margin-top: 3rem;
}

figure.wp-block-gallery.alignleft {
	margin: 0.3rem 2rem 2rem 0;
}

figure.wp-block-gallery.alignright {
	margin: 0.3rem 0 2rem 2rem;
}

figure.wp-block-gallery.alignwide {
	margin-bottom: 4rem;
	margin-top: 4rem;
}

figure.wp-block-gallery.alignfull {
	margin-bottom: 5rem;
	margin-top: 5rem;
}

/* Block: Group ------------------------------ */

.wp-block-group.has-background {
	padding: 2rem;
	margin-bottom: 0;
	margin-top: 0;
}

.wp-block-group__inner-container {
	margin: 0 auto;
}

.wp-block-group__inner-container,
.entry-content .wp-block-group p {
	max-width: 100%;
}

.alignfull:not(.has-background) > .wp-block-group__inner-container > p:not(.has-background-color) {
	padding-left: 2rem;
	padding-right: 2rem;
}

/* Block: Image ------------------------------ */

/* Block: Media And Text --------------------- */

.wp-block-media-text .wp-block-media-text__content {
	padding: 3rem 2rem;
}

.wp-block-media-text .wp-block-media-text__content p {
	max-width: none;
}

.wp-block-media-text__content > *:first-child {
	margin-top: 0;
}

.wp-block-media-text__content > *:last-child {
	margin-bottom: 0;
}

/* Block: Pullquote -------------------------- */

/* STYLE: DEFAULT */

.wp-block-pullquote {
	padding: 0;
	position: relative;
}

.wp-block-pullquote.alignleft,
.wp-block-pullquote.alignright {
	max-width: calc(100% - 4rem);
}

.wp-block-pullquote::before {
	background: #fff;
	border-radius: 50%;
	color: #cd2653;
	content: "”";
	display: block;
	font-size: 6.2rem;
	font-weight: 500;
	line-height: 1.2;
	margin: 0 auto 1.5rem auto;
	text-align: center;
	height: 4.4rem;
	width: 4.4rem;
}

.reduced-spacing .wp-block-pullquote::before {
	border: 0.1rem solid currentColor;
	font-size: 5.9rem;
}

.wp-block-pullquote blockquote {
	border: none;
	margin: 0;
	padding: 0;
}

.wp-block-pullquote blockquote p {
	font-family: inherit;
	font-size: 2.8rem;
	font-weight: 700;
	line-height: 1.178571429;
	letter-spacing: -0.041785714em;
	max-width: 100%;
}

.wp-block-pullquote p:last-of-type {
	margin-bottom: 0;
}

.wp-block-pullquote cite {
	color: #6d6d6d;
	font-size: 1.6rem;
	font-weight: 500;
	margin-top: 1.2rem;
}

.wp-block-pullquote.alignleft p,
.wp-block-pullquote.alignright p {
	font-size: 2.8rem;
}

.wp-block-pullquote.alignleft {
	text-align: left;
}

.wp-block-pullquote.alignright {
	text-align: right;
}

.wp-block-pullquote.alignleft::before {
	margin-left: 0;
}

.wp-block-pullquote.alignright::before {
	margin-right: 0;
}

/* STYLE: SOLID BACKGROUND COLOR */

.wp-block-pullquote.is-style-solid-color {
	padding: 3rem 2rem;
}

.wp-block-pullquote.is-style-solid-color::before {
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateY(-50%) translateX(-50%);
}

.wp-block-pullquote.is-style-solid-color.alignleft::before,
.wp-block-pullquote.is-style-solid-color.alignright::before {
	transform: translateY(-50%);
}

.wp-block-pullquote.is-style-solid-color.alignleft::before {
	left: 2rem;
}

.wp-block-pullquote.is-style-solid-color.alignright::before {
	left: auto;
	right: 2rem;
}

.wp-block-pullquote.is-style-solid-color blockquote {
	max-width: 100%;
	text-align: inherit;
}

.wp-block-pullquote.is-style-solid-color cite {
	color: inherit;
}

/* Block: Separator  ------------------------- */

hr.wp-block-separator {
	margin: 3rem 0;
}

/* STYLE: WIDE */

.wp-block-separator.is-style-wide {
	max-width: calc(100vw - 4rem);
	position: relative;
	width: 100%;
}

/* STYLE: DOTS */

.wp-block-separator.is-style-dots::before {
	background: none;
	color: inherit;
	font-size: 3.2rem;
	font-weight: 700;
	height: auto;
	letter-spacing: 1em;
	padding-left: 1em;
	position: static;
	transform: none;
	width: auto;
}

.wp-block-separator.is-style-dots::after {
	content: none;
}


/* Block: Search ----------------------------- */

.wp-block-search .wp-block-search__input {
	width: auto;
}

/* Block: Table ------------------------------ */

.wp-block-table.is-style-stripes tbody tr:nth-child(odd) {
	background: #dcd7ca;
}

figure.wp-block-table.is-style-stripes {
	border-bottom: none;
}

.wp-block-table.is-style-stripes table {
	border-collapse: inherit;
}

/* Block: Quote ------------------------------ */

.wp-block-quote p,
.wp-block-quote cite {
	text-align: inherit;
}

.wp-block-quote[style="text-align:center"] {
	border-width: 0;
	padding: 0;
}

.wp-block-quote[style="text-align:right"] {

	/*rtl:begin:ignore*/
	border-width: 0 0.2rem 0 0;
	padding: 0 2rem 0 0;

	/*rtl:end:ignore*/
}

/* STYLE: LARGE */

.wp-block-quote.is-large,
.wp-block-quote.is-style-large {
	border: none;
	padding: 0;
	margin-left: auto;
	margin-right: auto;
}

.wp-block-quote.is-large p,
.wp-block-quote.is-style-large p {
	font-family: inherit;
	font-size: 2.4rem;
	font-style: normal;
	font-weight: 700;
	letter-spacing: -0.02em;
	line-height: 1.285;
}

.wp-block-quote.is-large cite,
.wp-block-quote.is-large footer,
.wp-block-quote.is-style-large cite,
.wp-block-quote.is-style-large footer {
	font-size: 1.6rem;
	text-align: inherit;
}

/* Block: Widget Latest Comments ------------- */

.entry-content .wp-block-latest-comments li {
	margin: 2rem 0;
}

.has-avatars .wp-block-latest-comments__comment .wp-block-latest-comments__comment-excerpt,
.has-avatars .wp-block-latest-comments__comment .wp-block-latest-comments__comment-meta {
	margin-left: 5.5rem;
}

.entry-content .wp-block-latest-comments a {
	text-decoration: none;
}

.entry-content .wp-block-latest-comments a:hover,
.entry-content .wp-block-latest-comments a:focus {
	text-decoration: underline;
}

.wp-block-latest-comments__comment {
	font-size: inherit;
}

.wp-block-latest-comments__comment-date {
	margin-top: 0.4em;
}

.wp-block-latest-comments__comment-excerpt p {
	font-size: 0.7em;
	margin: 0.9rem 0 2rem 0;
}

/* Block: Widget Latest Posts ---------------- */

.wp-block-latest-posts.is-grid li {
	border-top: 0.2rem solid #dcd7ca;
	margin-top: 2rem;
	padding-top: 1rem;
}

.wp-block-latest-posts.has-dates {
	list-style: none;
}

.wp-block-latest-posts.has-dates:not(.is-grid) li {
	margin-top: 1.5rem;
}

.wp-block-latest-posts.has-dates:not(.is-grid) li:first-child {
	margin-top: 0;
}

/* Block: Post Template ---------------- */

.wp-block-post-template,
.wp-block-post-template > li {
	margin-left: 0;
	margin-right: 0;
}


/* -------------------------------------------------------------------------- */

/*	11. Entry Content
/* -------------------------------------------------------------------------- */


.entry-content {
	line-height: 1.5;
}

.entry-content > * {
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 1.25em;
}

.entry-content > *:first-child {
	margin-top: 0;
}

.entry-content > *:last-child {
	margin-bottom: 0;
}

.read-more-button-wrap {
	margin-top: 1em;
	text-align: center;
}

.entry-content a:hover,
.entry-content a:focus {
	text-decoration: none;
}

.entry-content p,
.entry-content li {
	line-height: 1.4;
}

.entry-content li img {
	display: inline-block;
}

.entry-content h1,
.entry-content h2,
.entry-content h3,
.entry-content h4,
.entry-content h5,
.entry-content h6 {
	margin: 3.5rem auto 2rem;
}

.entry-content ul ul,
.entry-content ol ol,
.entry-content ul ol,
.entry-content ol ul {
	margin-bottom: 1rem;
}

.entry-content hr {
	margin: 4rem auto;
}

.post-inner .entry-content > .wp-block-cover.alignwide:first-child,
.post-inner .entry-content > .wp-block-cover.alignfull:first-child {
	margin-top: 0;
}

/* Font Families ----------------------------- */

.entry-content {
	font-family: NonBreakingSpaceOverride, "Hoefler Text", Garamond, "Times New Roman", serif;
	letter-spacing: normal;
}

.entry-content h1,
.entry-content h2,
.entry-content h3,
.entry-content h4,
.entry-content h5,
.entry-content h6,
.entry-content cite,
.entry-content figcaption,
.entry-content table,
.entry-content address,
.entry-content .wp-caption-text,
.entry-content .wp-block-file {
	font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif;
}

@supports ( font-variation-settings: normal ) {

	.entry-content h1,
	.entry-content h2,
	.entry-content h3,
	.entry-content h4,
	.entry-content h5,
	.entry-content h6,
	.entry-content cite,
	.entry-content figcaption,
	.entry-content table,
	.entry-content address,
	.entry-content .wp-caption-text,
	.entry-content .wp-block-file {
		font-family: "Inter var", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif;
	}
}


/* Alignment Classes ------------------------- */

.entry-content > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.is-style-wide) {
	max-width: 58rem;
	width: calc(100% - 4rem);
}

[class*="__inner-container"] > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.is-style-wide) {
	max-width: 58rem;
	width: 100%;
}

.alignnone,
.aligncenter,
.alignleft,
.alignright,
.alignwide {
	margin-top: 4rem;
	margin-right: auto;
	margin-bottom: 4rem;
	margin-left: auto;
}

[class*="__inner-container"] > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright) {
	margin-left: auto;
	margin-right: auto;
}

/* Full */

.alignfull {
	margin-top: 5rem;
	margin-right: auto;
	margin-bottom: 5rem;
	margin-left: auto;
	max-width: 100vw;
	position: relative;
	width: 100%;
}

[class*="__inner-container"] > .alignfull {
	max-width: 100%;
}

/* Wide */

.alignwide {
	max-width: 120rem;
	position: relative;
	width: calc(100% - 4rem);
}

[class*="__inner-container"] > .alignwide {
	width: 100%;
}

/* Center */

.aligncenter,
.aligncenter img {
	margin-left: auto;
	margin-right: auto;
}

/* Left and right */

.alignleft,
.alignright {
	max-width: 50%;
}

.alignleft {

	/*rtl:ignore*/
	float: left;
	margin: 0.3rem 2rem 2rem 2rem;
}

.alignright {

	/*rtl:ignore*/
	float: right;
	margin: 0.3rem 2rem 2rem 2rem;
}

[class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > .alignleft,
[class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > p .alignleft,
[class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > .wp-block-image .alignleft {

	/*rtl:ignore*/
	margin-left: 2rem;
}

[class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > .alignright,
[class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > p .alignright,
[class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > .wp-block-image .alignright {

	/*rtl:ignore*/
	margin-right: 2rem;
}

/* Entry Media ------------------------------- */

.alignfull > figcaption,
.alignfull > .wp-caption-text {
	margin-left: auto;
	margin-right: auto;
	max-width: 58rem;
	width: calc(100% - 4rem);
}


/* -------------------------------------------------------------------------- */

/*	12. Comments
/* -------------------------------------------------------------------------- */


/* Comment Headers ----------------------------- */

.comments-wrapper {
	margin-top: 5rem;
}

.comment-reply-title {
	margin: 0 0 4rem 0;
	text-align: center;
}


/* Comment Item ----------------------------- */

/* COMMENT HEADER */

.comments .comment,
.comments .pingback,
.comments .trackback,
.comments .review {
	padding-top: 3.5rem;
}

div.comment:first-of-type {
	margin-top: 3.5rem;
	padding-top: 0;
}

.comments .comments-header + div {
	margin-top: 0;
	padding-top: 0;
}

.comment-body {
	position: relative;
}

.comment .comment {
	padding-left: 5%;
}

.comment-meta {
	line-height: 1.1;
	margin-bottom: 1.5rem;
	min-height: 5rem;
	padding-left: 5rem;
	position: relative;
}

.hide-avatars .comment-meta {
	min-height: 0;
	padding-left: 0;
}

.comment-meta a {
	color: inherit;
}

.comment-author {
	font-size: 1.8rem;
	font-weight: 700;
	letter-spacing: -0.027777778em;
}

.comment-author a {
	text-decoration: underline;
}

.comment-author a:hover,
.comment-author a:focus {
	text-decoration: none;
}

.comment-meta .avatar {
	height: 4rem;
	position: absolute;
	left: 0;
	top: 0;
	width: 4rem;
}

.comment-author .url {
	text-decoration: underline;
}

.comment-metadata {
	color: #6d6d6d;
	font-size: 1.4rem;
	font-weight: 500;
	margin-top: 0.6rem;
}

.comment-metadata a {
	text-decoration: none;
}

.comment-metadata a:focus,
.comment-metadata a:hover {
	text-decoration: underline;
}


/* COMMENT CONTENT */

.comment-content.entry-content > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.is-style-wide) {
	width: 100%;
}

.comment-content.entry-content .alignleft {

	/*rtl:ignore*/
	margin-left: 0;
}

.comment-content.entry-content .alignright {

	/*rtl:ignore*/
	margin-right: 0;
}

/* COMMENT FOOTER */

.comment-footer-meta {
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	font-size: 1.2rem;
	font-weight: 600;
	justify-content: flex-start;
	letter-spacing: 0.030833333em;
	line-height: 1;
	margin: 1.5rem 0 -1rem -1.5rem;
	text-transform: uppercase;
}

.comment-footer-meta > * {
	margin: 0 0 1rem 1.5rem;
}

.comment-reply-link {
	background-color: #cd2653;
	color: #fff;
	display: block;
	padding: 0.7rem;
}

.bypostauthor .comment-footer-meta .by-post-author {
	display: block;
}

.comment-footer-meta a {
	text-decoration: none;
}

.comment-footer-meta a:focus,
.comment-footer-meta a:hover {
	text-decoration: underline;
}


/* Pingbacks & Trackbacks ------------------------- */

.pingback .comment-meta,
.trackback .comment-meta {
	padding-left: 0;
}


/* Comments Pagination ---------------------------- */

.comments-pagination {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-top: 6rem;
	text-align: center;
}

.comments-pagination.only-next {
	justify-content: flex-end;
}

.comments-pagination .page-numbers {
	display: none;
	text-decoration: none;
}

.comments-pagination .page-numbers:focus,
.comments-pagination .page-numbers:hover {
	text-decoration: underline;
}

.comments-pagination .prev,
.comments-pagination .next {
	display: block;
}

.comments-pagination .prev {
	left: 0;
}

.comments-pagination .next {
	right: 0;
	text-align: right;
}


/* Comment Respond ---------------------------- */

.comment-respond::after {
	clear: both;
	content: "";
	display: block;
}

.comment-respond .comment-notes,
.comment-respond .logged-in-as {
	color: #6d6d6d;
	font-size: 1.6rem;
	line-height: 1.4;
	margin: -3rem 0 4rem 0;
	text-align: center;
}

.comment-respond .comment-notes a,
.comment-respond .logged-in-as a {
	color: inherit;
	text-decoration: none;
}

.comment-respond .comment-notes a:focus,
.comment-respond .comment-notes a:hover,
.comment-respond .logged-in-as a:focus,
.comment-respond .logged-in-as a:hover {
	text-decoration: underline;
}

.comment-respond p {
	line-height: 1.1;
	margin-bottom: 2rem;
	margin-left: auto;
	margin-right: auto;
}

.comment-respond p:not(.comment-notes) {
	max-width: 58rem;
}

.comment-form-cookies-consent {
	align-items: baseline;
	display: flex;
}

.comment-respond > p:last-of-type {
	margin-bottom: 0;
}

.comment-respond label {
	display: block;
}

.comment-respond input[type="checkbox"] + label {
	font-size: 1.5rem;
	line-height: 1.25;
}

.comment-respond input[type="text"],
.comment-respond input[type="email"],
.comment-respond textarea {
	margin-bottom: 0;
}

.comment-respond textarea {
	height: 15rem;
}

.comment-respond #submit {
	display: block;
}

.comment-respond .comments-closed {
	text-align: center;
}


/* Reply Respond ---------------------------- */

.comments .comment-respond {
	padding: 3rem 0 0;
}

.comments .comment-respond .comment-reply-title,
.comments .comment-respond .comment-notes,
.comments .comment-respond .logged-in-as {
	text-align: left;
}

.comment-reply-title small {
	display: block;
	font-size: 1.6rem;
	font-weight: 600;
	letter-spacing: -0.0277em;
	margin: 0.5rem 0 0 0;
	white-space: nowrap;
}

.comment-reply-title small a {
	text-decoration: none;
}

.comment-reply-title small a:focus,
.comment-reply-title small a:hover {
	text-decoration: underline;
}


/* -------------------------------------------------------------------------- */

/*	13. Site Pagination
/* -------------------------------------------------------------------------- */


.pagination .nav-links {
	align-items: baseline;
	display: flex;
	flex-wrap: wrap;
	font-size: 1.8rem;
	font-weight: 600;
	margin: -1.5rem 0 0 -2.5rem;
	width: calc(100% + 2.5rem);
}

.pagination-separator {
	margin: 5rem 0;
}

.nav-links > * {
	margin: 1.5rem 0 0 2.5rem;
}

.nav-links .placeholder {
	display: none;
	visibility: hidden;
}

.pagination a {
	text-decoration: none;
}

.pagination a:focus,
.pagination a:hover {
	text-decoration: underline;
}

.pagination .dots {
	transform: translateY(-0.3em);
	color: #6d6d6d;
}

.nav-short {
	display: none;
}

/* -------------------------------------------------------------------------- */

/*	14. Error 404
/* -------------------------------------------------------------------------- */


.error404 #site-content {
	padding-top: 4rem;
}

.error404-content {
	text-align: center;
}

.error404 #site-content .search-form {
	justify-content: center;
	margin-top: 3rem;
}


/* -------------------------------------------------------------------------- */

/*	15.	Widgets
/* -------------------------------------------------------------------------- */


/* Widget Base ------------------------------- */

.widget {
	margin-top: 3rem;
}

.widget:first-child {
	margin-top: 0;
}

.widget-content > div > *:first-child {
	margin-top: 0;
}

.widget-content > div > *:last-child {
	margin-bottom: 0;
}

.widget .widget-title {
	margin: 0 0 2rem;
}

.widget li {
	margin: 2rem 0 0 0;
}

.widget li:first-child,
.widget li > ul,
.widget li > ol {
	margin-top: 0;
}

.widget table,
.widget table * {
	border-color: #dedfdf;
}

.widget table caption {
	background-color: #dedfdf;
}

.widget .post-date,
.widget .rss-date {
	color: #6d6d6d;
	display: block;
	font-size: 0.85em;
	font-weight: 500;
	margin-top: 0.2rem;
}

.widget select {
	max-width: 100%;
}

/* Font Families ----------------------------- */

.widget_text p,
.widget_text ol,
.widget_text ul,
.widget_text dl,
.widget_text dt,
.widget-content .rssSummary {
	font-family: NonBreakingSpaceOverride, "Hoefler Text", Garamond, "Times New Roman", serif;
	letter-spacing: normal;
}

.widget-content cite,
.widget-content figcaption,
.widget-content .wp-caption-text {
	font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif;
}

@supports ( font-variation-settings: normal ) {

	.widget-content cite,
	.widget-content figcaption,
	.widget-content .wp-caption-text {
		font-family: "Inter var", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif;
	}
}

/* Base List Widget -------------------------- */

.widget_archive ul,
.widget_categories ul,
.widget_pages ul,
.widget_meta ul,
.widget_nav_menu ul,
.widget_recent_comments ul,
.widget_recent_entries ul,
.widget_rss ul {
	list-style: none;
	margin: 0;
}

.widget_archive li,
.widget_categories li,
.widget_pages li,
.widget_meta li,
.widget_nav_menu li {
	color: #6d6d6d;
	margin: 0.3rem 0;
}

.widget_archive li li,
.widget_categories li li,
.widget_pages li li,
.widget_meta li li,
.widget_nav_menu li li {
	margin-left: 2rem;
}

.widget_archive a,
.widget_categories a,
.widget_pages a,
.widget_meta a,
.widget_nav_menu a {
	font-weight: 700;
	text-decoration: none;
}

.widget_archive a:focus,
.widget_archive a:hover,
.widget_categories a:focus,
.widget_categories a:hover,
.widget_pages a:focus,
.widget_pages a:hover,
.widget_meta a:focus,
.widget_meta a:hover,
.widget_nav_menu a:focus,
.widget_nav_menu a:hover {
	text-decoration: underline;
}

/* Widget: Calendar -------------------------- */

.calendar_wrap {
	font-size: 2.4rem;
}

.calendar_wrap th,
.calendar_wrap td,
.wp-calendar-nav span {
	display: table-cell;
	font-size: 1em;
	font-weight: 500;
	line-height: 1;
	padding: 2.5% 2.5% 1.75% 2.5%;
	text-align: center;
}

.wp-calendar-table {
	margin-bottom: 0;
}

.wp-calendar-nav {
	display: table;
	width: 100%;
	font-size: 1.8rem;
}

.calendar_wrap tfoot td {
	border-bottom: none;
}

.calendar_wrap tfoot a,
.calendar_wrap .wp-calendar-nav a {
	text-decoration: none;
}

.calendar_wrap tfoot #prev,
.calendar_wrap .wp-calendar-nav-prev {
	text-align: left;
}

.calendar_wrap tfoot #next,
.calendar_wrap .wp-calendar-nav-next {
	text-align: right;
}

/* Widget: Image ----------------------------- */

/* Widget: Gallery --------------------------- */

.widget_media_gallery .gallery {
	margin: 0 -0.4em -0.8em -0.4em;
	width: calc(100% + 0.8em);
}

.widget_media_gallery .gallery-item {
	margin: 0 0 0.8em 0;
	padding: 0 0.4em;
}

/* Widget: Nav Menu -------------------------- */

.widget_nav_menu .widget-content > div > ul {
	margin-left: 0;
}

/* Widget: Recent Comments ------------------- */

.widget_recent_comments li {
	font-weight: 700;
}

.widget_recent_comments a {
	text-decoration: none;
}

.widget_recent_comments a:focus,
.widget_recent_comments a:hover {
	text-decoration: underline;
}

/* Widget: Recent Entries -------------------- */

.widget_recent_entries a {
	font-weight: 700;
	text-decoration: none;
}

.widget_recent_entries a:focus,
.widget_recent_entries a:hover {
	text-decoration: underline;
}

/* Widget: RSS ------------------------------- */

.widget_rss .widget-title a.rsswidget:first-of-type {
	display: none;
}

.widget_rss .rsswidget {
	font-weight: 700;
}

.widget_rss a {
	text-decoration: none;
}

.widget_rss a:focus,
.widget_rss a:hover {
	text-decoration: underline;
}

.widget_rss .rssSummary {
	margin-top: 0.5rem;
}

.widget_rss cite::before {
	content: "— ";
}

/* Widget: Search ---------------------------- */

.widget_search .search-field {
	border-color: #dedfdf;
}

/* Widget: Tag Cloud ------------------------- */

.widget_tag_cloud a {
	font-weight: 700;
	margin-right: 0.5rem;
	text-decoration: none;
	white-space: nowrap;
}

.widget_tag_cloud a:focus,
.widget_tag_cloud a:hover {
	text-decoration: underline;
}

/* Widget: Text ------------------------------ */


/* -------------------------------------------------------------------------- */

/*	16. Site Footer
/* -------------------------------------------------------------------------- */


.footer-nav-widgets-wrapper,
#site-footer {
	background-color: #fff;
	border-color: #dedfdf;
	border-style: solid;
	border-width: 0;
}

.footer-top-visible .footer-nav-widgets-wrapper,
.footer-top-hidden #site-footer {
	margin-top: 5rem;
}

.reduced-spacing.footer-top-visible .footer-nav-widgets-wrapper,
.reduced-spacing.footer-top-hidden #site-footer {
	border-top-width: 0.1rem;
}

.footer-top,
.footer-widgets-outer-wrapper,
#site-footer {
	padding: 3rem 0;
}


/* Footer Top -------------------------------- */

.footer-top {
	display: flex;
	border-bottom: 0.1rem solid #dedfdf;
	justify-content: space-between;
}

/* FOOTER MENU */

.footer-menu {
	font-size: 1.8rem;
	font-weight: 700;
	letter-spacing: -0.0277em;
}

.footer-menu li {
	line-height: 1.25;
	margin: 0.25em 0 0 0;
}

.footer-menu a {
	text-decoration: none;
	word-break: normal;
	word-wrap: normal;
}

.footer-menu a:hover,
.footer-menu a:focus {
	text-decoration: underline;
}

/* FOOTER SOCIAL */

.footer-social-wrapper {
	margin: 0;
	width: 100%;
}

.has-footer-menu .footer-social-wrapper {
	flex-shrink: 0;
	margin-left: 1rem;
	width: 50%;
}

ul.footer-social {
	margin: -0.5rem 0 0 -0.5rem;
}

.has-footer-menu .footer-social {
	justify-content: flex-end;
}

ul.footer-social li {
	margin: 0.5rem 0 0 0.5rem;
}

.footer-social a {
	background-color: #cd2653;
	height: 3.6rem;
	width: 3.6rem;
}

.footer-social a::before {
	font-size: 1.6rem;
}

/* Footer Widgets ---------------------------- */

.footer-widgets-outer-wrapper {
	border-bottom: 0.1rem solid #dedfdf;
}

.footer-widgets + .footer-widgets {
	margin-top: 3rem;
}

/* Footer Bottom ----------------------------- */

#site-footer {
	font-size: 1.6rem;
}

#site-footer .section-inner {
	align-items: baseline;
	display: flex;
	justify-content: space-between;
}

#site-footer a {
	text-decoration: none;
}

#site-footer a:focus,
#site-footer a:hover {
	text-decoration: underline;
}

.footer-copyright a,
.powered-by-wordpress a {
	color: inherit;
}

.powered-by-wordpress,
.to-the-top {
	color: #6d6d6d;
}

a.to-the-top > * {
	pointer-events: none;
}

.footer-copyright {
	font-weight: 600;
	margin: 0;
}

.powered-by-wordpress {
	display: none;
	margin: 0 0 0 2.4rem;
}

.to-the-top-long {
	display: none;
}


/* -------------------------------------------------------------------------- */

/*	17. Media Queries
/* -------------------------------------------------------------------------- */

@media ( max-width: 479px ) {

	/* Blocks -------------------------------- */

	.wp-block-pullquote.alignleft,
	.wp-block-pullquote.alignright {
		float: none;
	}

	/* Entry Content ------------------------- */

	/* LISTS */

	ul,
	ol {
		margin: 0 0 3rem 2rem;
	}

	li {
		margin: 0.5rem 0 0 1rem;
	}

	/* Post Footer --------------------------- */

	/* POST NAV LINKS */

	.post-nav-links {
		margin: 3em 0 0 0;
	}
}

@media ( min-width: 480px ) {

	/* Blocks -------------------------------- */

	/* BLOCK: BASE ALIGNMENT WIDTH */

	.wp-block-pullquote.alignleft,
	.wp-block-pullquote.alignright,
	.wp-block-cover-image.alignleft,
	.wp-block-cover-image.alignright,
	.wp-block-cover.alignleft,
	.wp-block-cover.alignright,
	.wp-block-embed.alignleft,
	.wp-block-embed.alignright,
	.wp-block-gallery.alignleft,
	.wp-block-gallery.alignright {
		max-width: 26rem;
	}

	/* BLOCK: TABLE WIDTH */
	.wp-block-table.alignleft,
	.wp-block-table.alignright {
		max-width: 100%;
	}

	/* Entry Content ------------------------- */

	/* ALIGNMENT CLASSES */

	.alignleft,
	.alignright {
		max-width: 26rem;
	}

	/* Post Footer --------------------------- */

	/* POST NAV LINKS */

	.post-nav-links {
		margin: 3em 0 0 0;
	}
}

@media ( max-width: 599px ) {

	/* Blocks -------------------------------- */

	/* BLOCK: COLUMNS */

	/* While columns are stacked */
	.wp-block-column:last-child {
		margin-bottom: 0;
	}

	.wp-block-columns + .wp-block-columns {
		margin-top: 0.2rem;
	}

	.wp-block-columns.alignwide + .wp-block-columns.alignwide {
		margin-top: -0.8rem;
	}

	.wp-block-columns.alignfull + .wp-block-columns.alignfull {
		margin-top: -1.8rem;
	}

	/* Template -------------------------------- */

	/* TEMPLATE: COVER */

	.template-cover .post-inner .post-meta-wrapper,
	.template-cover .post-inner .author-bio {
		width: calc( 100% - 4rem );
	}

	/* Post Footer --------------------------- */

	/* POST NAV LINKS */

	.post-nav-links {
		margin: 3em 0 0 0;
	}
}

@media ( min-width: 600px ) {

	/* Blocks -------------------------------- */

	/* BLOCK: COLUMNS */

	.wp-block-columns.alignwide + .wp-block-columns.alignwide,
	.wp-block-columns.alignfull + .wp-block-columns.alignfull {
		margin-top: -4rem;
	}

	/* Post Footer --------------------------- */

	/* POST NAV LINKS */

	.post-nav-links {
		margin: 3em 0 0 0;
	}
}

@media ( min-width: 660px ) {

	/* Blocks -------------------------------- */

	/* BLOCK: GALLERY */

	figure.wp-block-gallery.alignleft {

		/*rtl:ignore*/
		margin-left: calc(( 100vw - 58rem - 8rem ) / -2);
	}

	figure.wp-block-gallery.alignright {

		/*rtl:ignore*/
		margin-right: calc(( 100vw - 58rem - 8rem ) / -2);
	}

	/* Entry Content ------------------------- */

	/* ALIGNMENT CLASSES */

	.entry-content > .alignleft {

		/*rtl:ignore*/
		margin-left: 4rem;
	}

	.entry-content > p .alignleft,
	.entry-content > .wp-block-image .alignleft {

		/*rtl:ignore*/
		margin-left: calc(( 100vw - 58rem - 8rem ) / -2);
	}

	[class*="wp-block"]:not(.alignwide):not(.alignfull) [class*="__inner-container"] > .alignleft,
	[class*="wp-block"]:not(.alignwide):not(.alignfull) [class*="__inner-container"] > p .alignleft,
	[class*="wp-block"]:not(.alignwide):not(.alignfull) [class*="__inner-container"] > .wp-block-image .alignleft {

		/*rtl:ignore*/
		margin-left: 0;
	}

	.entry-content > .alignright {

		/*rtl:ignore*/
		margin-right: 4rem;
	}

	.entry-content > p .alignright,
	.entry-content > .wp-block-image .alignright {

		/*rtl:ignore*/
		margin-right: calc(( 100vw - 58rem - 8rem ) / -2);
	}

	[class*="wp-block"]:not(.alignwide):not(.alignfull) [class*="__inner-container"] > .alignright,
	[class*="wp-block"]:not(.alignwide):not(.alignfull) [class*="__inner-container"] > p .alignright,
	[class*="wp-block"]:not(.alignwide):not(.alignfull) [class*="__inner-container"] > .wp-block-image .alignright {

		/*rtl:ignore*/
		margin-right: 0;
	}

	/* Post Footer --------------------------- */

	/* POST NAV LINKS */

	.post-nav-links {
		margin: 3em auto 0 auto;
	}
}

@media ( min-width: 700px ) {

	/* Element Base ------------------------- */

	ul,
	ol {
		margin-bottom: 4rem;
	}

	pre {
		padding: 3rem;
	}

	hr {
		margin: 8rem auto;
	}

	table {
		font-size: 1.8rem;
	}

	/* VANILLA GALLERIES */

	.gallery-columns-2 .gallery-item {
		max-width: 50%;
	}

	.gallery-columns-3 .gallery-item {
		max-width: 33.33%;
	}

	.gallery-columns-4 .gallery-item {
		max-width: 25%;
	}

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

	/* TITLES */

	h1,
	.heading-size-1,
	h2,
	.heading-size-2,
	h3,
	.heading-size-3 {
		margin: 6rem auto 3rem;
	}

	h4,
	.heading-size-4,
	h5,
	.heading-size-5,
	h6,
	.heading-size-6 {
		margin: 4.5rem auto 2.5rem;
	}

	h1,
	.heading-size-1 {
		font-size: 6.4rem;
	}

	h2,
	.heading-size-2 {
		font-size: 4.8rem;
	}

	h3,
	.heading-size-3 {
		font-size: 4rem;
	}

	h4,
	.heading-size-4 {
		font-size: 3.2rem;
	}

	h5,
	.heading-size-5 {
		font-size: 2.4rem;
	}

	h6,
	.heading-size-6 {
		font-size: 1.8rem;
	}

	/* INPUTS */

	fieldset {
		padding: 3rem;
	}

	legend {
		padding: 0 1.5rem;
	}

	button,
	.button,
	.faux-button,
	.wp-block-button__link,
	input[type="button"],
	input[type="reset"],
	input[type="submit"] {
		font-size: 1.7rem;
	}

	/* MEDIA */

	figcaption,
	.wp-caption-text {
		margin-top: 1.8rem;
	}


	/* Helper Classes ------------------------- */

	/* SECTIONS */

	section {
		padding: 8rem 0;
	}

	.section-inner {
		width: calc(100% - 8rem);
	}


	/* Site Header --------------------------- */

	.header-inner {
		padding: 3.8rem 0;
	}

	.site-title {
		font-size: 2.4rem;
		font-weight: 700;
	}

	.site-description {
		display: block;
	}

	.site-logo img {
		max-height: 9rem;
		transition: height 0.15s linear, width 0.15s linear, max-height 0.15s linear;
	}

	/* HEADER TOGGLES */

	.toggle-inner .toggle-text {
		font-size: 1.2rem;
	}

	.search-toggle {
		left: 2rem;
	}

	.nav-toggle {
		right: 2rem;
	}


	/* Menu Modal ---------------------------- */

	button.close-nav-toggle {
		font-size: 1.8rem;
		padding: 4rem 0;
	}

	button.close-nav-toggle svg {
		height: 2rem;
		width: 2rem;
	}

	button.close-nav-toggle .toggle-text {
		margin-right: 2.1rem;
	}

	.modal-menu {
		left: auto;
		width: 100%;
	}

	.modal-menu > li > a,
	.modal-menu > li > .ancestor-wrapper > a {
		font-size: 2.4rem;
		padding: 2.5rem 0;
	}

	.modal-menu ul li {
		border-left-color: transparent;
	}

	.modal-menu > li > .ancestor-wrapper > button.sub-menu-toggle {
		padding: 0 3rem;
	}

	.modal-menu > li > .ancestor-wrapper > button.sub-menu-toggle svg {
		height: 1.1rem;
		width: 1.8rem;
	}

	.menu-bottom {
		align-items: center;
		display: flex;
		justify-content: space-between;
		padding: 4.4rem 0;
	}

	.menu-copyright {
		display: block;
		flex-shrink: 0;
		margin-right: 4rem;
	}

	/* Modal Search Form ------------------------- */

	.search-modal form {
		position: relative;
		width: 100%;
	}

	.search-untoggle svg {
		height: 2.5rem;
		width: 2.5rem;
	}

	.search-modal .search-field {
		border: none;
		font-size: 3.2rem;
		height: 14rem;
	}

	.search-modal .search-field::-moz-placeholder {
		line-height: 4.375;
	}

	/* Sub Page ------------------------------ */

	/* FEATURED MEDIA */

	.featured-media figcaption {
		margin: 2rem auto 0 auto;
		width: calc(100% - 8rem);
	}

	/* Template: Cover Template -------------- */

	.cover-header-inner {
		padding: 18rem 0 8rem 0;
	}

	.to-the-content-wrapper {
		top: calc(100% + 1.8rem);
	}

	.to-the-content {
		height: 6rem;
	}

	.to-the-content svg {
		height: 2.4rem;
		width: 2.12rem;
	}

	/* Template: Full Width ------------------ */

	body.template-full-width .entry-content > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.is-style-wide) {
		width: calc(100% - 8rem);
	}

	body.template-full-width .alignfull:not(.has-background) > .wp-block-group__inner-container > p:not(.has-background-color) {
		padding-left: 4rem;
		padding-right: 4rem;
	}

	body.template-full-width [class*="wp-block"].alignfull [class*="__inner-container"] > .alignleft,
	body.template-full-width [class*="wp-block"].alignfull [class*="__inner-container"] > p .alignleft,
	body.template-full-width [class*="wp-block"].alignfull [class*="__inner-container"] > .wp-block-image .alignleft {

		/*rtl:ignore*/
		margin-left: 4rem;
	}

	body.template-full-width [class*="wp-block"].alignfull [class*="__inner-container"] > .alignright,
	body.template-full-width [class*="wp-block"].alignfull [class*="__inner-container"] > p .alignright,
	body.template-full-width [class*="wp-block"].alignfull [class*="__inner-container"] > .wp-block-image .alignright {

		/*rtl:ignore*/
		margin-right: 4rem;
	}

	/* Post: Archive ------------------------- */

	.archive-header {
		padding: 8rem 0;
	}

	.reduced-spacing .archive-header {
		padding-bottom: 3rem;
	}

	.archive-title {
		font-size: 3.2rem;
	}

	body:not(.singular) main > article:first-of-type {
		padding: 8rem 0 0;
	}

	h2.entry-title {
		font-size: 6.4rem;
	}

	/* SEARCH RESULTS */

	.no-search-results-form {
		padding-top: 8rem;
	}

	/* Post: Single -------------------------- */

	/* POST HEADER */

	.singular .entry-header {
		padding: 8rem 0;
	}

	.entry-categories {
		margin-bottom: 3rem;
	}

	.entry-categories-inner {
		margin: -1rem 0 0 -2rem;
	}

	.entry-categories a {
		font-size: 1.5rem;
		margin: 1rem 0 0 2rem;
	}

	.intro-text {
		font-size: 2rem;
		margin-top: 2.5rem;
	}

	.singular .intro-text {
		font-size: 2.6rem;
	}

	.post-meta-wrapper {
		margin-top: 3rem;
	}

	.post-meta {
		font-size: 1.6rem;
		margin: -1.4rem 0 0 -3rem;
	}

	.post-meta li {
		margin: 1.4rem 0 0 3rem;
		max-width: calc(100% - 3rem);
	}

	.featured-media {
		margin-top: 6rem;
	}

	.post-inner {
		padding-top: 8rem;
	}

	/* POST FOOTER */

	.post-meta-wrapper.post-meta-single-bottom {
		margin-top: 4rem;
	}

	/* AUTHOR BIO */

	.author-bio {
		margin-top: 8rem;
		min-height: 8rem;
		padding-left: 10rem;
		position: relative;
	}

	.author-bio .avatar {
		position: absolute;
		left: 0;
		top: 0;
		height: 8rem;
		width: 8rem;
	}

	/* SINGLE PAGINATION */

	.pagination-single {
		font-size: 2.4rem;
		margin-top: 8rem;
	}

	.pagination-single-inner {
		flex-direction: row;
		justify-content: space-between;
	}

	.pagination-single.only-next .pagination-single-inner {
		justify-content: flex-end;
	}

	.pagination-single hr:first-child {
		margin: 0 0 4rem 0;
	}

	.pagination-single hr:last-child {
		margin: 4rem 0 0.8rem 0;
	}

	.pagination-single a + a {
		margin: 0 0 0 4rem;
	}

	.pagination-single a .arrow {
		margin: 0 2rem 0 0;
	}

	.pagination-single .next-post {
		flex-direction: row-reverse;
		text-align: right;
	}

	.pagination-single .next-post .arrow {
		margin: 0 0 0 2rem;
	}

	/* Blocks -------------------------------- */

	/* BLOCK: SHARED MEDIA STYLES */

	.wp-block-embed figcaption,
	.wp-block-image figcaption {
		font-size: 1.6rem;
	}

	/* BLOCK: BASE MARGINS */

	.wp-block-archives:not(.alignwide):not(.alignfull),
	.wp-block-categories:not(.alignwide):not(.alignfull),
	.wp-block-code,
	.wp-block-columns:not(.alignwide):not(.alignfull),
	.wp-block-cover:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.aligncenter),
	.wp-block-embed:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.aligncenter),
	.wp-block-gallery:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.aligncenter),
	.wp-block-group:not(.has-background):not(.alignwide):not(.alignfull),
	.wp-block-image:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.aligncenter),
	.wp-block-latest-comments:not(.aligncenter):not(.alignleft):not(.alignright),
	.wp-block-latest-posts:not(.aligncenter):not(.alignleft):not(.alignright),
	.wp-block-media-text:not(.alignwide):not(.alignfull),
	.wp-block-preformatted,
	.wp-block-pullquote:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright),
	.wp-block-quote,
	.wp-block-quote.is-large,
	.wp-block-quote.is-style-large,
	.wp-block-verse,
	.wp-block-video:not(.alignwide):not(.alignfull) {
		margin-bottom: 4rem;
		margin-top: 4rem;
	}

	/* BLOCK: COLUMNS */

	.wp-block-columns.alignwide + .wp-block-columns.alignwide,
	.wp-block-columns.alignfull + .wp-block-columns.alignfull {
		margin-top: -6rem;
	}

	.entry-content .wp-block-columns h1,
	.entry-content .wp-block-columns h2,
	.entry-content .wp-block-columns h3,
	.entry-content .wp-block-columns h4,
	.entry-content .wp-block-columns h5,
	.entry-content .wp-block-columns h6 {
		margin: 3.5rem 0 2rem;
	}

	/* BLOCK: COVER */

	.wp-block-cover-image .wp-block-cover__inner-container,
	.wp-block-cover .wp-block-cover__inner-container {
		width: calc(100% - 8rem);
	}

	.wp-block-cover-image h2,
	.wp-block-cover h2 {
		font-size: 4.8rem;
	}

	/* BLOCK: GALLERY */

	figure.wp-block-gallery.alignnone,
	figure.wp-block-gallery.aligncenter {
		margin-bottom: 4rem;
		margin-top: 4rem;
	}

	figure.wp-block-gallery.alignwide,
	figure.wp-block-gallery.alignfull {
		margin-bottom: 6rem;
		margin-top: 6rem;
	}

	/* BLOCK: GROUP */

	.wp-block-group.has-background {
		padding: 4rem;
		margin-top: 0;
		margin-bottom: 0;
	}

	.alignfull:not(.has-background) > .wp-block-group__inner-container > p:not(.has-background-color) {
		padding-left: 0;
		padding-right: 0;
	}

	/* BLOCK: MEDIA AND TEXT */

	.wp-block-media-text .wp-block-media-text__content {
		padding: 4rem;
	}

	/* BLOCK: PULLQUOTE */

	.wp-block-pullquote blockquote p {
		font-size: 3.2rem;
	}

	.wp-block-pullquote cite {
		margin-top: 2rem;
	}

	.wp-block-pullquote.alignfull:not(.is-style-solid-color) {
		padding-left: 1rem;
		padding-right: 1rem;
	}

	.wp-block-pullquote.alignwide::before,
	.wp-block-pullquote.alignfull::before {
		font-size: 11.272727272rem;
		height: 8rem;
		margin-bottom: 2rem;
		width: 8rem;
	}

	.wp-block-pullquote.alignwide blockquote p,
	.wp-block-pullquote.alignfull blockquote p {
		font-size: 4.8rem;
		line-height: 1.203125;
	}

	.wp-block-pullquote.alignleft p,
	.wp-block-pullquote.alignright p,
	.wp-block-pullquote.alignleft.is-style-solid-color blockquote p,
	.wp-block-pullquote.alignright.is-style-solid-color blockquote p {
		font-size: 3.2rem;
		line-height: 1.1875;
	}

	.wp-block-pullquote.is-style-solid-color.alignwide,
	.wp-block-pullquote.is-style-solid-color.alignfull {
		padding: 6rem 4rem 4rem;
	}

	.wp-block-pullquote.alignleft.is-style-solid-color blockquote p,
	.wp-block-pullquote.alignright.is-style-solid-color blockquote p {
		font-size: 2.6rem;
	}

	/* BLOCK: QUOTE */

	.wp-block-quote.is-large p,
	.wp-block-quote.is-style-large p {
		font-size: 2.8rem;
	}

	/* BLOCK: SEPARATOR */

	hr.wp-block-separator {
		margin: 6rem auto;
	}

	.wp-block-separator.is-style-wide {
		max-width: calc(100vw - 8rem);
	}

	/* Entry Content ------------------------- */

	.entry-content {
		font-size: 2.1rem;
	}

	.entry-content p,
	.entry-content li {
		line-height: 1.476;
	}

	.entry-content h1,
	.entry-content h2,
	.entry-content h3 {
		margin: 6rem auto 3rem;
	}

	.entry-content h4,
	.entry-content h5,
	.entry-content h6 {
		margin: 4.5rem auto 2.5rem;
	}

	.alignnone,
	.aligncenter {
		margin-bottom: 4rem;
		margin-top: 4rem;
	}

	.alignleft {

		/*rtl:ignore*/
		margin: 0.3rem 2rem 2rem 0;
	}

	.alignright {

		/*rtl:ignore*/
		margin: 0.3rem 0 2rem 2rem;
	}

	.entry-content > .alignwide:not(.wp-block-group.has-background),
	.entry-content > .alignfull:not(.wp-block-group.has-background) {
		margin-bottom: 6rem;
		margin-top: 6rem;
	}

	.entry-content > .alignwide {
		max-width: calc(100vw - 8rem);
		width: calc(100vw - 8rem);
	}

	[class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > .alignleft,
	[class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > p .alignleft,
	[class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > .wp-block-image .alignleft {

		/*rtl:ignore*/
		margin-left: 4rem;
	}

	[class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > .alignright,
	[class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > p .alignright,
	[class*="wp-block"].alignfull:not(.has-background) [class*="__inner-container"] > .wp-block-image .alignright {

		/*rtl:ignore*/
		margin-right: 4rem;
	}

	.entry-content > .alignwide:first-child,
	.entry-content > .alignfull:first-child {
		margin-bottom: 8rem;
	}

	/* ENTRY MEDIA */

	.alignfull > figcaption,
	.alignfull > .wp-caption-text {
		width: calc(100% - 8rem);
	}

	/* Comments ------------------------------ */

	.comments-wrapper {
		margin-top: 8rem;
	}

	.comment-reply-title {
		margin-bottom: 4.6rem;
	}

	.comment-respond p.comment-notes,
	.comment-respond p.logged-in-as {
		font-size: 1.8rem;
		letter-spacing: -0.025em;
		margin: -2.5rem 0 4.4rem 0;
	}

	.comments .comment,
	.comments .pingback,
	.comments .trackback,
	.comments .review {
		padding-top: 5rem;
	}

	div.comment:first-of-type {
		margin-top: 5rem;
	}

	.comment-meta {
		margin-bottom: 2rem;
		min-height: 6rem;
		padding: 0.3rem 0 0 7.5rem;
	}

	.comment-meta .avatar {
		display: block;
		height: 6rem;
		position: absolute;
		left: 0;
		top: 0;
		width: 6rem;
	}

	.comment-author {
		font-size: 2.4rem;
	}

	.comment-metadata {
		font-size: 1.6rem;
		margin-top: 0.8rem;
	}

	.comment-footer-meta {
		margin-top: 2.5rem;
	}

	.comments-pagination {
		margin-top: 8rem;
	}

	/* PINGBACKS & TRACKBACKS */

	.pingback .comment-body {
		padding: 0;
	}

	/* COMMENT RESPOND */

	.comment-respond p {
		margin-bottom: 2.5rem;
	}

	.comment-form p.logged-in-as {
		margin: -2.5rem 0 4.4rem 0;
	}

	.comment-respond .comment-form-author,
	.comment-respond .comment-form-email {
		float: left;
		width: calc(50% - 1rem);
	}

	.comment-respond .comment-form-email {
		margin-left: 2rem;
	}

	.comments .comment-respond {
		padding: 5rem 0 0;
	}

	.comment-reply-title small {
		display: inline;
		margin: 0 0 0 0.5rem;
	}

	/* Site Pagination ----------------------- */

	.pagination-separator {
		margin: 8rem 0;
	}

	/* Display the full text for Newer and Older Posts. */

	.nav-short {
		display: inline;
	}

	.pagination .nav-links {
		font-size: 2.4rem;
		font-weight: 700;
		margin: -2.5rem 0 0 -4rem;
	}

	.nav-links > * {
		margin: 2.5rem 0 0 4rem;
	}


	/* Error 404 ----------------------------- */

	.error404 #site-content {
		padding-top: 8rem;
	}

	/* Widgets ------------------------------- */

	.widget .widget-title {
		margin-bottom: 3rem;
	}

	/* Site Footer --------------------------- */

	.footer-top-visible .footer-nav-widgets-wrapper,
	.footer-top-hidden #site-footer {
		margin-top: 8rem;
	}

	/* FOOTER TOP */

	.footer-top {
		padding: 3.7rem 0;
	}

	.footer-menu {
		font-size: 2.4rem;
		margin: -0.8rem 0 0 -1.6rem;
	}

	.footer-menu li {
		margin: 0.8rem 0 0 1.6rem;
	}

	.has-footer-menu .footer-social-wrapper {
		flex: 1;
		margin-left: 4rem;
		width: auto;
	}

	/* FOOTER WIDGETS */

	.footer-widgets-outer-wrapper {
		padding: 8rem 0;
	}

	.footer-widgets-wrapper {
		display: flex;
		justify-content: space-between;
		margin-left: -4rem;
		width: calc(100% + 4rem);
	}

	.footer-widgets {
		margin-left: 4rem;
		width: 50%;
	}

	.footer-widgets + .footer-widgets {
		margin-top: 0;
	}

	.footer-widgets .widget {
		border-top: none;
		margin-top: 5rem;
		padding-top: 0;
	}

	.footer-widgets .widget:first-child {
		margin-top: 0;
	}

	/* FOOTER BOTTOM */

	#site-footer {
		font-size: 1.8rem;
		padding: 4.3rem 0;
	}

	.footer-credits {
		display: flex;
	}

	.footer-copyright {
		font-weight: 700;
	}

	.powered-by-wordpress {
		display: block;
	}

	.to-the-top-long {
		display: inline;
	}

	.to-the-top-short {
		display: none;
	}

}

@media (min-width: 782px) {

	/* Blocks -------------------------------- */

	/* BLOCK: COLUMNS */

	.wp-block-column {
		margin-bottom: 0;
	}

	.wp-block-columns.alignwide + .wp-block-columns.alignwide,
	.wp-block-columns.alignfull + .wp-block-columns.alignfull {
		margin-top: -2.8rem;
	}
}

@media ( min-width: 1000px ) {


	/* Document Setup ------------------------ */

	/* Helper Classes ------------------------ */

	/* Site Header --------------------------- */

	#site-header {
		z-index: 2;
	}

	.header-inner {
		align-items: center;
		display: flex;
		justify-content: space-between;
		padding: 2.8rem 0;
	}

	.header-titles-wrapper {
		margin-right: 4rem;
		max-width: 50%;
		padding: 0;
		text-align: left;
	}

	.header-titles {
		align-items: baseline;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		margin: -1rem 0 0 -2.4rem;
	}

	.header-titles .site-title,
	.header-titles .site-logo,
	.header-titles .site-description {
		margin: 1rem 0 0 2.4rem;
	}

	.wp-custom-logo .header-titles {
		align-items: center;
	}

	/* HEADER NAVIGATION */

	.header-navigation-wrapper {
		align-items: center;
		display: flex;
	}

	.primary-menu-wrapper {
		display: block;
		width: 100%;
	}

	/* HEADER TOGGLES */

	.mobile-search-toggle,
	.mobile-nav-toggle {
		display: none !important;
	}

	.primary-menu-wrapper + .header-toggles {
		margin-left: 3rem;
	}

	.header-toggles {
		display: flex;
		flex-shrink: 0;
		margin-right: -3rem;
	}

	.header-inner .toggle {
		height: 4.4rem;
		padding: 0 3rem;
		position: relative;
		bottom: auto;
		left: auto;
		right: auto;
		top: auto;
		width: auto;
	}

	.header-inner .toggle-wrapper {
		position: relative;
	}

	.header-inner .toggle-wrapper::before {
		background: #dedfdf;
		content: "";
		display: block;
		height: 2.7rem;
		position: absolute;
		left: 0;
		top: calc(50% - 1.35rem);
		width: 0.1rem;
	}

	.header-inner .toggle-wrapper:first-child::before {
		content: none;
	}

	.header-inner .primary-menu-wrapper + .header-toggles .toggle-wrapper:first-child::before {
		content: "";
	}

	.nav-toggle-wrapper:not(.has-expanded-menu) {
		display: none;
	}

	.toggle-inner {
		position: static;
	}

	.toggle-inner .toggle-text {
		left: 0;
		right: 0;
		text-align: center;
		top: calc(100% - 0.3rem);
		width: auto;
	}

	.header-toggles:only-child .nav-toggle .toggle-inner {
		padding-top: 0;
	}

	.header-toggles:only-child .toggle-inner {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
	}

	.header-toggles:only-child .toggle-inner .svg-icon {
		order: 1;
	}

	.header-toggles:only-child .toggle-inner .toggle-text {
		position: static;
		padding-right: 20px;
		font-size: 15px;
		color: inherit;
	}

	/* Menu Modal ---------------------------- */

	.menu-modal {
		opacity: 1;
		justify-content: flex-end;
		padding: 0;
		transition: background-color 0.3s ease-in, left 0s 0.3s, right 0s 0.3s;
	}

	.menu-modal.cover-modal {
		background: rgba(0, 0, 0, 0);
	}

	.menu-modal.active {
		background: rgba(0, 0, 0, 0.2);
		transition: background-color 0.3s ease-out;
	}

	.menu-wrapper.section-inner {
		width: calc(100% - 8rem);
	}

	.menu-modal-inner {
		box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.1);
		opacity: 0;
		padding: 0;
		transform: translateX(20rem);
		transition: transform 0.2s ease-in, opacity 0.2s ease-in;
		width: 50rem;
	}

	.menu-modal.active .menu-modal-inner {
		opacity: 1;
		transform: translateX(0);
		transition-timing-function: ease-out;
	}

	.mobile-menu {
		display: none;
	}

	.expanded-menu {
		display: block;
	}

	.menu-bottom {
		padding: 6rem 0;
	}

	.menu-bottom .social-menu {
		justify-content: flex-start;
	}

	/* Sub Page ------------------------------ */

	/* FEATURED MEDIA */

	.featured-media figcaption {
		width: 100%;
	}

	/* Template: Full Width ------------------ */

	.template-full-width .wp-block-image .alignleft {

		/*rtl:ignore*/
		margin-right: 2rem;
	}

	.template-full-width .wp-block-image .alignright {

		/*rtl:ignore*/
		margin-left: 2rem;
	}

	/* Post: Archive ------------------------- */

	/* Post: Single -------------------------- */

	.singular .intro-text {
		font-size: 2.8rem;
	}

	/* Blocks -------------------------------- */

	/* BLOCK: COLUMNS */

	.wp-block-columns.alignwide + .wp-block-columns.alignwide,
	.wp-block-columns.alignfull + .wp-block-columns.alignfull {
		margin-top: -4.8rem;
	}

	/* BLOCK: GALLERY */

	figure.wp-block-gallery.alignwide,
	figure.wp-block-gallery.alignfull {
		margin-bottom: 8rem;
		margin-top: 8rem;
	}

	/* BLOCK: GROUP */

	.entry-content > .wp-block-group.alignwide.has-background,
	.entry-content > .wp-block-group.alignfull.has-background {
		padding: 8rem 4rem;
		margin-bottom: 0;
		margin-top: 0;
	}

	/* BLOCK: IMAGE */

	.wp-block-image .alignleft {

		/*rtl:ignore*/
		margin-right: 0;
	}

	.wp-block-image .alignright {

		/*rtl:ignore*/
		margin-left: 0;
	}

    .wp-block-image .aligncenter figcaption {
        text-align: center;
    }

	/* BLOCK: SEPARATOR */

	hr.wp-block-separator {
		margin: 8rem auto;
	}

	/* Entry Content ------------------------- */

	/* ALIGNMENT CLASSES */

	.entry-content > .alignleft,
	.entry-content > p .alignleft,
	.entry-content > .wp-block-image .alignleft {
		position: absolute;

		/*rtl:ignore*/
		right: calc((100vw - 58rem) / 2 + 58rem + 2rem);
		max-width: calc((100% - 58rem) / 2 - 6rem);
	}

	[class*="wp-block"]:not(.alignwide):not(.alignfull) [class*="__inner-container"] > .alignleft,
	[class*="wp-block"]:not(.alignwide):not(.alignfull) [class*="__inner-container"] > p .alignleft,
	[class*="wp-block"]:not(.alignwide):not(.alignfull) [class*="__inner-container"] > .wp-block-image .alignleft {
		position: relative;

		/*rtl:ignore*/
		right: inherit;
		max-width: inherit;
	}

	[class*="wp-block"].alignwide [class*="__inner-container"] > .alignleft,
	[class*="wp-block"].alignwide [class*="__inner-container"] > p .alignleft,
	[class*="wp-block"].alignwide [class*="__inner-container"] > .wp-block-image .alignleft,
	[class*="wp-block"].alignfull [class*="__inner-container"] > .alignleft,
	[class*="wp-block"].alignfull [class*="__inner-container"] > p .alignleft,
	[class*="wp-block"].alignfull [class*="__inner-container"] > .wp-block-image .alignleft {
		position: absolute;

		/*rtl:ignore*/
		right: calc((100% - 58rem) / 2 + 58rem + 4rem);
		max-width: calc((100% - 58rem) / 2 - 4rem);
	}

	[class*="wp-block"].alignwide.has-background [class*="__inner-container"] > .alignleft,
	[class*="wp-block"].alignwide.has-background [class*="__inner-container"] > p .alignleft,
	[class*="wp-block"].alignwide.has-background [class*="__inner-container"] > .wp-block-image .alignleft {

		/*rtl:ignore*/
		right: calc((100% - 58rem) / 2 + 58rem);
	}

	[class*="wp-block"].alignfull [class*="__inner-container"] > .alignleft,
	[class*="wp-block"].alignfull [class*="__inner-container"] > p .alignleft,
	[class*="wp-block"].alignfull [class*="__inner-container"] > .wp-block-image .alignleft {

		/*rtl:ignore*/
		margin-left: 4rem;
	}

	.entry-content > .alignright,
	.entry-content > p .alignright,
	.entry-content > .wp-block-image .alignright,
	[class*="__inner-container"] > .alignright {
		position: absolute;

		/*rtl:ignore*/
		left: calc((100vw - 58rem) / 2 + 58rem + 2rem);
		max-width: calc((100% - 58rem) / 2 - 6rem);
	}

	[class*="wp-block"]:not(.alignwide):not(.alignfull) [class*="__inner-container"] > .alignright,
	[class*="wp-block"]:not(.alignwide):not(.alignfull) [class*="__inner-container"] > p .alignright,
	[class*="wp-block"]:not(.alignwide):not(.alignfull) [class*="__inner-container"] > .wp-block-image .alignright {
		position: relative;

		/*rtl:ignore*/
		left: inherit;
		max-width: inherit;
	}

	[class*="wp-block"].alignwide [class*="__inner-container"] > .alignright,
	[class*="wp-block"].alignwide [class*="__inner-container"] > p .alignright,
	[class*="wp-block"].alignwide [class*="__inner-container"] > .wp-block-image .alignright,
	[class*="wp-block"].alignfull [class*="__inner-container"] > .alignright,
	[class*="wp-block"].alignfull [class*="__inner-container"] > p .alignright,
	[class*="wp-block"].alignfull [class*="__inner-container"] > .wp-block-image .alignright {
		position: absolute;

		/*rtl:ignore*/
		left: calc((100% - 58rem) / 2 + 58rem + 4rem);
		max-width: calc((100% - 58rem) / 2 - 4rem);
	}

	[class*="wp-block"].alignwide.has-background [class*="__inner-container"] > .alignright,
	[class*="wp-block"].alignwide.has-background [class*="__inner-container"] > p .alignright,
	[class*="wp-block"].alignwide.has-background [class*="__inner-container"] > .wp-block-image .alignright {

		/*rtl:ignore*/
		left: calc((100% - 58rem) / 2 + 58rem + 4rem);
	}

	[class*="wp-block"].alignfull [class*="__inner-container"] > .alignright,
	[class*="wp-block"].alignfull [class*="__inner-container"] > p .alignright,
	[class*="wp-block"].alignfull [class*="__inner-container"] > .wp-block-image .alignright {

		/*rtl:ignore*/
		margin-right: 4rem;
	}

	.entry-content > .alignwide:not(.wp-block-group.has-background),
	.entry-content > .alignfull:not(.wp-block-group.has-background) {
		margin-bottom: 8rem;
		margin-top: 8rem;
	}

	/* ENTRY MEDIA */

	.alignfull > figcaption,
	.alignfull > .wp-caption-text {
		width: calc(100% - 10rem);
	}

	/* Comments ------------------------------ */

	.comment-meta {
		padding-left: 0;
	}

	.comment-meta .avatar {
		left: -8rem;
	}

	/* Site Pagination ----------------------- */

	.pagination .nav-links {
		justify-content: space-between;
		margin: 0;
		width: 100%;
	}

	.nav-links > * {
		margin: 0 2rem;
	}

	.pagination .next,
	.pagination .prev {
		display: block;
	}

	.pagination .prev {
		margin: 0 auto 0 0;
	}

	.pagination .next {
		text-align: right;
		margin: 0 0 0 auto;
	}

	/* Site Footer --------------------------- */

	/* FOOTER TOP */

	.footer-top {
		align-items: center;
	}

	.footer-menu {
		align-items: baseline;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		font-size: 2.1rem;
		margin: -1.2rem 0 0 -2.4rem;
	}

	.footer-menu li {
		margin: 1.2rem 0 0 2.4rem;
	}
}


@media ( min-width: 1220px ) {

	/* Element Base -------------------------- */

	/* TITLES */

	h1,
	.heading-size-1 {
		font-size: 8.4rem;
	}

	/* Helper Classes ------------------------ */

	/* Site Header --------------------------- */

	/* PRIMARY MENU */

	ul.primary-menu {
		margin: -0.8rem 0 0 -2.5rem;
	}

	.primary-menu > li {
		margin: 0.8rem 0 0 2.5rem;
	}

	/* HEADER TOGGLES */

	.primary-menu-wrapper + .header-toggles {
		margin-left: 4rem;
	}

	.header-toggles {
		margin-right: -4rem;
	}

	.header-toggles .toggle {
		padding: 0 4rem;
	}

	/* Menu Modal ---------------------------- */

	/* Search Modal -------------------------- */

	/* Sub Page ------------------------------ */

	/* Template: Cover Template -------------- */

	.cover-header + .post-inner {
		padding-top: 10rem;
	}

	/* Post: Archive ------------------------- */

	/* Post: Single -------------------------- */

	.singular .intro-text {
		font-size: 3.2rem;
		letter-spacing: -0.03125em;
		line-height: 1.375;
	}

	/* Blocks -------------------------------- */

	/* BLOCK: COLUMNS */

	.wp-block-columns.alignfull + .wp-block-columns.alignfull {
		margin-top: -6rem;
	}

	/* BLOCK: GALLERY */

	figure.wp-block-gallery.alignfull {
		margin-bottom: 10rem;
		margin-top: 10rem;
	}

	/* BLOCK: GROUP */

	.entry-content > .wp-block-group.alignwide.has-background,
	.entry-content > .wp-block-group.alignfull.has-background {
		padding: 8rem 6rem;
		margin-bottom: 0;
		margin-top: 0;
	}

	/* BLOCK: PULLQUOTE */

	.wp-block-pullquote.alignwide blockquote p,
	.wp-block-pullquote.alignfull blockquote p {
		font-size: 6.4rem;
	}

	.wp-block-pullquote.is-style-solid-color.alignwide,
	.wp-block-pullquote.is-style-solid-color.alignfull {
		padding: 9rem 4rem 8rem;
	}

	/* Entry Content ------------------------- */

	/* ALIGNMENT CLASSES */

	.entry-content > .alignfull {
		margin-bottom: 10rem;
		margin-top: 10rem;
	}

	[class*="wp-block"].alignwide.has-background [class*="__inner-container"] > .alignleft,
	[class*="wp-block"].alignwide.has-background [class*="__inner-container"] > p .alignleft,
	[class*="wp-block"].alignwide.has-background [class*="__inner-container"] > .wp-block-image .alignleft {

		/*rtl:ignore*/
		right: calc((100% - 58rem) / 2 + 58rem - 2rem);
	}

	[class*="wp-block"].alignwide.has-background [class*="__inner-container"] > .alignright,
	[class*="wp-block"].alignwide.has-background [class*="__inner-container"] > p .alignright,
	[class*="wp-block"].alignwide.has-background [class*="__inner-container"] > .wp-block-image .alignright {

		/*rtl:ignore*/
		left: calc((100% - 58rem) / 2 + 58rem + 6rem);
	}

	/* Comments ------------------------------ */

	.comment-reply-title {
		font-size: 5.6rem;
		line-height: 1.2;
		margin-bottom: 6rem;
	}

	.comment-respond p.comment-notes,
	.comment-respond p.logged-in-as {
		margin: -4rem 0 6rem 0;
	}

	.comments .comment-respond .comment-reply-title {
		font-size: 4.8rem;
	}

	.comments .comment-respond p.comment-notes,
	.comments .comment-respond p.logged-in-as {
		margin: -4.5rem 0 4rem 0;
	}

	/* Site Pagination ----------------------- */

	/* Widgets ------------------------------- */

	.widget-content {
		font-size: 2.1rem;
	}

	/* Site Footer --------------------------- */

	.footer-menu {
		font-size: 2.4rem;
		margin: -1.5rem 0 0 -3rem;
	}

	.footer-menu li {
		margin: 1.5rem 0 0 3rem;
	}

	ul.footer-social {
		margin: -1rem 0 0 -1rem;
	}

	ul.footer-social li {
		margin: 1rem 0 0 1rem;
	}

	.footer-social a {
		height: 4.4rem;
		width: 4.4rem;
	}

	.footer-social a::before {
		font-size: 2rem;
	}

	/* FOOTER WIDGETS */

	.footer-widgets-wrapper {
		margin-left: -6rem;
		width: calc(100% + 6rem);
	}

	.footer-widgets {
		margin-left: 6rem;
	}

}

@media ( min-width: 1240px ) {


	/* Blocks -------------------------------- */

	body.template-full-width .entry-content > .alignleft {

		/*rtl:ignore*/
		margin-left: calc(( 100vw - 120rem ) / 2);
	}

	body.template-full-width .entry-content > .alignright {

		/*rtl:ignore*/
		margin-right: calc(( 100vw - 120rem ) / 2);
	}

}

@media ( min-width: 1280px ) {

	/* Blocks -------------------------------- */

	/* BLOCK: GALLERY */

	figure.wp-block-gallery.alignleft {

		/*rtl:ignore*/
		margin-left: -31rem;
	}

	figure.wp-block-gallery.alignright {

		/*rtl:ignore*/
		margin-right: -31rem;
	}

	/* BLOCK: SEPARATOR */

	.wp-block-separator.is-style-wide {
		max-width: 120rem;
		width: 120rem;
	}

	/* Entry Content ------------------------- */

	/* ALIGNMENT CLASSES */

	.entry-content > .alignleft,
	.entry-content > p .alignleft,
	.entry-content > .wp-block-image .alignleft {

		/*rtl:ignore*/
		right: calc((100vw - 58rem) / 2 + 58rem + 4rem);

		/*rtl:ignore*/
		margin-left: -31rem;
	}

	.entry-content > .alignright,
	.entry-content > p .alignright,
	.entry-content > .wp-block-image .alignright {

		/*rtl:ignore*/
		left: calc((100vw - 58rem) / 2 + 58rem + 4rem);

		/*rtl:ignore*/
		margin-right: -31rem;
	}

	.entry-content > .alignwide {
		max-width: 120rem;
		width: 120rem;
	}

	[class*="__inner-container"] > .alignwide {
		max-width: 120rem;
		width: 100%;
	}

	.alignleft,
	.alignright,
	.entry-content > .alignleft,
	.entry-content > p .alignleft,
	.entry-content > .wp-block-image .alignleft,
	.entry-content > .alignright,
	.entry-content > p .alignright,
	.entry-content > .wp-block-image .alignright,
	[class*="wp-block"].alignwide:not(.has-background) [class*="__inner-container"] > .alignleft,
	[class*="wp-block"].alignwide:not(.has-background) [class*="__inner-container"] > p .alignleft,
	[class*="wp-block"].alignwide:not(.has-background) [class*="__inner-container"] > .wp-block-image .alignleft,
	[class*="wp-block"].alignfull [class*="__inner-container"] > .alignleft,
	[class*="wp-block"].alignfull [class*="__inner-container"] > p .alignleft,
	[class*="wp-block"].alignfull [class*="__inner-container"] > .wp-block-image .alignleft,
	[class*="wp-block"].alignwide:not(.has-background) [class*="__inner-container"] > .alignright,
	[class*="wp-block"].alignwide:not(.has-background) [class*="__inner-container"] > p .alignright,
	[class*="wp-block"].alignwide:not(.has-background) [class*="__inner-container"] > .wp-block-image .alignright,
	[class*="wp-block"].alignfull [class*="__inner-container"] > .alignright,
	[class*="wp-block"].alignfull [class*="__inner-container"] > p .alignright,
	[class*="wp-block"].alignfull [class*="__inner-container"] > .wp-block-image .alignright {
		max-width: 25rem;
	}

	/* Template: Full Width ------------------ */

	body.template-full-width .alignfull:not(.has-background) > .wp-block-group__inner-container > p:not(.has-background-color) {
		padding-left: 0;
		padding-right: 0;
	}

	body.template-full-width [class*="wp-block"].alignfull [class*="__inner-container"] > .wp-block-image .alignleft {

		/*rtl:ignore*/
		margin-left: 0;
	}

	body.template-full-width [class*="wp-block"].alignfull [class*="__inner-container"] > .wp-block-image .alignright {

		/*rtl:ignore*/
		margin-right: 0;
	}

}

@media ( min-width: 1330px ) {


	/* Entry Content ------------------------- */

	/* ALIGNMENT CLASSES */

	.alignleft,
	.alignright,
	.entry-content > .alignleft,
	.entry-content > p .alignleft,
	.entry-content > .wp-block-image .alignleft,
	.entry-content > .alignright,
	.entry-content > p .alignright,
	.entry-content > .wp-block-image .alignright,
	[class*="wp-block"].alignwide:not(.has-background) [class*="__inner-container"] > .alignleft,
	[class*="wp-block"].alignwide:not(.has-background) [class*="__inner-container"] > p .alignleft,
	[class*="wp-block"].alignwide:not(.has-background) [class*="__inner-container"] > .wp-block-image .alignleft,
	[class*="wp-block"].alignfull [class*="__inner-container"] > .alignleft,
	[class*="wp-block"].alignfull [class*="__inner-container"] > p .alignleft,
	[class*="wp-block"].alignfull [class*="__inner-container"] > .wp-block-image .alignleft,
	[class*="wp-block"].alignwide:not(.has-background) [class*="__inner-container"] > .alignright,
	[class*="wp-block"].alignwide:not(.has-background) [class*="__inner-container"] > p .alignright,
	[class*="wp-block"].alignwide:not(.has-background) [class*="__inner-container"] > .wp-block-image .alignright,
	[class*="wp-block"].alignfull [class*="__inner-container"] > .alignright,
	[class*="wp-block"].alignfull [class*="__inner-container"] > p .alignright,
	[class*="wp-block"].alignfull [class*="__inner-container"] > .wp-block-image .alignright {
		max-width: 29rem;
	}

	/* Blocks -------------------------------- */

	/* BLOCK: PULLQUOTE */

	.wp-block-pullquote.is-style-solid-color.alignleft::before,
	.wp-block-pullquote.is-style-solid-color.alignright::before {
		top: 0;
	}
}
