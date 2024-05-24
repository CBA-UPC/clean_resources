/*
Theme Name:   Improve Digital 2021
Description:  Theme for Improve Digital
Author:       Revibiz
Author URL:   http://revibiz.com
Template:     neve
Version:      1.0
License:      GNU General Public License v2 or later
License URI:  http://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  improvedigital
*/

.footer-bottom {
	display:none!important;
}

.nv--yoast-breadcrumb, .neve-breadcrumbs-wrapper, .breadcrumb_last {
	display:none;
}

/** FONTS & IMAGES **/
a {
color: #1a1e31!important;
}

a :hover {
background: -webkit-linear-gradient(0.25turn, #7C61E9, #0099FA)!important;
-webkit-background-clip: text!important;
-webkit-text-fill-color: transparent!important;
}

p {
line-height: 1.3;
}

h1 {
  font-size: var(--h1FontSize);
  font-weight: var(--h1FontWeight);
  line-height: var(--h1LineHeight);
  letter-spacing: var(--h1LetterSpacing);
  text-transform: var(--h1TextTransform);
}

h2 {
  font-size: var(--h2FontSize);
  font-weight: var(--h2FontWeight);
  line-height: var(--h2LineHeight);
  letter-spacing: var(--h2LetterSpacing);
  text-transform: var(--h2TextTransform);
}

h3 {
  font-size: var(--h3FontSize);
  font-weight: var(--h3FontWeight);
  line-height: var(--h3LineHeight);
  letter-spacing: var(--h3LetterSpacing);
  text-transform: var(--h3TextTransform);
}

h4 {
  font-size: var(--h4FontSize);
  font-weight: var(--h4FontWeight);
  line-height: var(--h4LineHeight);
  letter-spacing: var(--h4LetterSpacing);
  text-transform: var(--h4TextTransform);
}

h5 {
  font-size: var(--h5FontSize);
  font-weight: var(--h5FontWeight);
  line-height: var(--h5LineHeight);
  letter-spacing: var(--h5LetterSpacing);
  text-transform: var(--h5TextTransform);
}

h6 {
  font-size: var(--h6FontSize);
  font-weight: var(--h6FontWeight);
  line-height: var(--h6LineHeight);
  letter-spacing: var(--h6LetterSpacing);
  text-transform: var(--h6TextTransform);
}

/** HEADER **/

.header {
position: fixed;
margin-top: 0px !important;
width: 100%;
z-index: 999900;
}

/** MENUS **/

.nav-ul .sub-menu {
left: 0!important;
}

.neve-mm-description {
color: #a1a1a1!important;
justify-content: left!important;
text-align: left!important;
padding: 0 20px 10px 20px!important;
}

.sub-menu {
min-width: 400px;
}

.sub-menu .menu-item a {
justify-content: left!important;
text-align: left!important;
}

.sub-menu .menu-item li {
display: inline-block!important;
}

.builder-item--primary-menu .nav-menu-primary > .nav-ul li:not(.woocommerce-mini-cart-item):hover > a, .builder-item--primary-menu .nav-menu-primary > .nav-ul li:hover > .has-caret > a, .builder-item--primary-menu .nav-menu-primary > .nav-ul li:hover > .has-caret {
color: #0099FA!important;
}

.caret-wrap {
display: none;
}

/** BODY **/

.value-prop-block {
	text-align:center;
}

#block-21, #block-22 {
margin: 0 !important;
padding: 0 0 5% 0;
}

.button.button-secondary:not(.secondary-default), .wp-block-button.is-style-secondary .wp-block-button__link {
color: #fff!important;
}

.builder-item > .item--inner.builder-item--button_base > .component-wrap > a.button.button-primary {
color: #fff!important;
}

.ticss-ba2b9e6f {
background: -webkit-linear-gradient(0.25turn, #427AEF, #795FE6)!important;
-webkit-background-clip: text!important;
-webkit-text-fill-color: transparent!important;
}

.wp-block-cover-image.has-background-dim:before, .wp-block-cover.has-background-dim:before {
background-color: transparent!important;
}

.partner-logo-block {
    column-gap: 70px;
}

.partner-logo {
	max-height:20px;
	padding: 30px;
}
	
.ticss-f116b419 {
background: linear-gradient(90deg, rgba(45,49,71,1) 50%, rgba(255,255,255,1) 50%);
}

/** CONTACT FORM **/
div.wpforms-container-full .wpforms-form input[type=date], div.wpforms-container-full .wpforms-form input[type=datetime], div.wpforms-container-full .wpforms-form input[type=datetime-local], div.wpforms-container-full .wpforms-form input[type=email], div.wpforms-container-full .wpforms-form input[type=month], div.wpforms-container-full .wpforms-form input[type=number], div.wpforms-container-full .wpforms-form input[type=password], div.wpforms-container-full .wpforms-form input[type=tel], div.wpforms-container-full .wpforms-form input[type=text], div.wpforms-container-full .wpforms-form input[type=time], div.wpforms-container-full .wpforms-form input[type=url], div.wpforms-container-full .wpforms-form input[type=week], div.wpforms-container-full .wpforms-form select, div.wpforms-container-full .wpforms-form textarea {
background-color: #fff;
box-sizing: border-box;
border-radius: 2px;
color: #333;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
display: block;
float: none;
font-size: 16px;
border: 0px solid #ccc;
padding: 6px 10px;
height: 38px;
width: 100%;
line-height: 1.3;
}

div.wpforms-container-full .wpforms-form .wpforms-field {
padding: 10px 0;
clear: both;
}

div.wpforms-container-full .wpforms-form input.wpforms-field-medium, div.wpforms-container-full .wpforms-form select.wpforms-field-medium, div.wpforms-container-full .wpforms-form .wpforms-field-row.wpforms-field-medium {
max-width: 100%;
}

.wpforms-confirmation-container-full {
color: #333;
margin: 0 0 24px 0;
background: #e0ffc7;
border: 0px solid #b4d39b;
padding: 15px 15px;
}

div.wpforms-container-full .wpforms-form .wpforms-field input.wpforms-error, div.wpforms-container-full .wpforms-form .wpforms-field textarea.wpforms-error, div.wpforms-container-full .wpforms-form .wpforms-field select.wpforms-error {
border: 0px solid #cc0000;
}

div.wpforms-container-full .wpforms-form label.wpforms-error {
display: block;
color: #990000;
font-size: 12px;
float: none;
}

div.wpforms-container-full .wpforms-form  .wpforms-field.wpforms-field-text {
padding: 10px 0;
clear: both;
}

div.wpforms-container-full .wpforms-form  .wpforms-field.wpforms-field-textarea {
padding: 10px 0;
clear: both;
}

div.wpforms-container-full .wpforms-form  .wpforms-field.wpforms-field-select {
padding: 10px 0;
clear: both;
}

div.wpforms-container-full .wpforms-form .wpforms-field.wpforms-field-select select {
}

div.wpforms-container-full .wpforms-form input[type=text].wpforms-field-name-first {
background-color: #fff;
box-sizing: border-box;
border-radius: 2px;
color: #333;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
display: block;
float: none;
font-size: 16px;
border: 0px solid #ccc;
padding: 6px 10px;
height: 38px;
width: 100%;
line-height: 1.3;
}

div.wpforms-container-full .wpforms-form input[type=text].wpforms-field-name-last {
background-color: #fff;
box-sizing: border-box;
border-radius: 0px;
color: #333;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
display: block;
float: none;
font-size: 16px;
border: 0px solid #ccc;
padding: 6px 10px;
height: 38px;
width: 100%;
line-height: 1.3;
}

div.wpforms-container-full .wpforms-form .wpforms-field.wpforms-field-email {
padding: 10px 0;
clear: both;
}

/** FOOTER **/

.site-footer {
padding: 6em 0 0 0;
background-color: var(--nv-dark-bg);
}

.footer-partner-logos {
max-height: 2.5em;
margin: 1em 0 0.5em 0;
}
	
.widget {
margin-bottom: 0px!important;
}

.widget-area {
margin: 0 0 0 3em;
padding: 0 0 0 2em;
}

.widget_nav_menu {
min-height: 250px;
}

.widget-area {
margin-left: 0px;
}

.site-footer .container {
padding-left: 0px;
padding-right: 0px;
}

.widget-area a {
color: #fff!important
}

.footer-menu a {
color: #fff!important;
}

.footer-menu a:hover {
text-decoration: underline!important;
}

.nv-single-page-wrap {
margin-bottom: 0px!important;
}

/** FORMS **/

.wpforms-submit {
background-color: var(--nv-primary-accent)!important;
color: #fff!important;
border-radius: 25px!important;
border: none!important;
padding: 8px 16px 8px 16px!important;
text-transform: uppercase!important;
}

.alignfull {
max-height: 100%!important;
}

.page-header {
margin-top: 55px!important;
}

.page-header-bg-gradient {
background: rgb(124,97,233);
background: linear-gradient(90deg, rgba(124,97,233,1) 0%, rgba(0,153,250,1) 100%);
}


.header-video-desktop {
margin-top: 55px!important;
}

/** MEDIA QUERIES **/
@media (max-width: 1023px) {
	
.mobile-main-menu-item-a a {	
	font-size: 0.8em!important;
	text-transform: uppercase;
}

.sub-menu-item-a {
text-indent: 1.5em!important;	
}

.header-video-mobile {
margin-top: 55px!important;
}
	
.item--inner .builder-item--footer_copyright p {
font-size: 0.1pt!important;
}

.partner-sphere .wp-block-column {
flex-basis: 33.33333% !important;
}
	
.partner-sphere .wp-block-column img {
max-width: 70px;
}
	
.leaders-sphere .wp-block-column {
flex-basis: 66.666% !important;
text-align:center;
}
	
.leaders-sphere .wp-block-column img {
max-width: 140px;
align-content:center;
}

.widget_nav_menu {
min-height: 0px;
}

#nav_menu-2, #nav_menu-3, #nav_menu-4, #nav_menu-6 {
margin-bottom: 30px!important;
}
	
.footer-improve-logo {
margin: 0 auto 30px auto;
}
	
.ticss-2de15db1 h2 {
text-align: center;
}

.ticss-f2580bb1 .wp-block-buttons {
margin-top: 40px;
}
	
.value-prop-spacer {
max-height: 30px!important;
}
	
h1, h2, p {
padding-left: 30px!important;
padding-right: 30px!important;
}

.site-footer .container {
padding: 0px 20px 60px 20px;
}
	
.neve-mm-description {
display: none!important;
}

.mobile-left .builder-item--footer-menu, .mobile-left .component-wrap, .mobile-left .nav-ul, .mobile-left .nv-nav-wrap, .mobile-left .nv-search-icon-component, .mobile-left .site-logo {
justify-content: center;
}
	
.footer-partner-logos {
max-height: 3em;
justify-content: center;
clear: both;
display: flex;
margin: 1em auto 0em auto;
float: none;
}
	
.wp-block-social-links {
display: inline-flex;
}
	
.wp-block-social-links, .wp-block-social-links.has-normal-icon-size {
font-size: 2.5em;
}

#block-21, #block-22 {
margin: 0 !important;
padding: 0 0 0% 0;
}

.ticss-f116b419 {
background: linear-gradient(0, rgba(255,255,255,1) 50%, rgba(45,49,71,1) 50%)!important;
}

.value-prop-block {
text-align: center;
}

.wp-block-buttons, .is-content-justification-left {
justify-content: center!important;
}
	
.wp-image-1070 {
max-width: 50%!important;
}

.widget-area {
text-align: center!important;
margin: 0px;
padding: 0px;
}

.builder-item {
margin-bottom: 0!important;
}
	
.partner-sphere {
background-color: #eaf6ff;
min-height: 300px;
max-height: 700px;
overflow-x: scroll;
}
	
.intro-header, .intro-header-blurb {
overflow-wrap: break-word;
}

.into-header-spacer {
height: 60px!important;
}

}

/** HIDE PERSISTENT SETTINGS **/
#ot-sdk-btn-floating .ot-floating-button__front,
#ot-sdk-btn-floating .ot-floating-button__back {
  display:none;
}

#ot-sdk-btn-floating .ot-floating-button__back,
#ot-sdk-btn-floating .ot-floating-button__front svg {
  display:none;
}

#ot-sdk-btn-floating.ot-floating-button button {
  display:none;
}

/*************************************************
 *********** IMPORTED FROM THEME PARENT **********
 *************************************************/

.wp-block-button__link, .button, button,
input[type="button"],
.btn,
input[type="submit"],
input[type="reset"] {
  cursor: pointer;
  box-sizing: border-box;
  border-color: currentColor;
  text-align: center;
  font-family: var(--bodyFontFamily), var(--nv-fallback-ff);
}

.is-style-primary .wp-block-button__link, .button.button-primary, button,
input[type="button"],
.btn,
input[type="submit"],
input[type="reset"], .wp-block-search .wp-block-search__button {
  cursor: pointer;
  box-sizing: border-box;
  background-color: var(--primaryBtnBg);
  color: var(--primaryBtnColor);
  border-style: solid;
  border-color: currentColor;
  fill: currentColor;
  border-width: var(--primaryBtnBorderWidth, 0);
  border-radius: var(--primaryBtnBorderRadius, 3px);
  padding: var(--primaryBtnPadding, 13px 15px);
  font-weight: var(--btnFontWeight, 700);
  font-size: var(--btnFs, var(--bodyFontSize));
  line-height: var(--btnLineHeight, 1.6);
  letter-spacing: var(--btnLetterSpacing, var(--bodyLetterSpacing));
  text-transform: var(--btnTextTransform, none);
}

.is-style-primary .wp-block-button__link:hover, .button.button-primary:hover, button:hover,
input[type="button"]:hover,
.btn:hover,
input[type="submit"]:hover,
input[type="reset"]:hover {
  background-color: var(--primaryBtnHoverBg);
  color: var(--primaryBtnHoverColor);
  border-color: var(--primaryBtnHoverColor);
}

.wp-block-button__link {
  cursor: pointer;
  box-sizing: border-box;
  padding: var(--btnPadding, 13px 15px);
  border-radius: var(--primaryBtnBorderRadius, 3px);
  font-weight: var(--btnFontWeight, 700);
  font-size: var(--btnFs, var(--bodyFontSize));
  line-height: var(--btnLineHeight, 1.6);
  letter-spacing: var(--btnLetterSpacing, var(--bodyLetterSpacing));
  text-transform: var(--btnTextTransform, none);
}

.is-style-secondary .wp-block-button__link, .button.button-secondary, .button {
  cursor: pointer;
  box-sizing: border-box;
  background-color: var(--secondaryBtnBg);
  color: var(--secondaryBtnColor);
  border-style: solid;
  border-color: currentColor;
  fill: currentColor;
  border-width: var(--secondaryBtnBorderWidth, 0);
  border-radius: var(--secondaryBtnBorderRadius, 3px);
  padding: var(--secondaryBtnPadding, 7px 12px);
  font-weight: var(--btnFontWeight, 700);
  font-size: var(--btnFs, var(--bodyFontSize));
  line-height: var(--btnLineHeight, 1.6);
  letter-spacing: var(--btnLetterSpacing);
  text-transform: var(--btnTextTransform, none);
}

.is-style-secondary .wp-block-button__link:hover, .button.button-secondary:hover, .button:hover {
  background-color: var(--secondaryBtnHoverBg);
  color: var(--secondaryBtnHoverColor);
  border-color: var(--secondaryBtnHoverColor);
}

form input:read-write,
form textarea,
form select,
form select option,
form.wp-block-search input.wp-block-search__input,
.widget select, .wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper {
  border-style: solid;
  border-color: var(--formFieldBorderColor);
  border-width: var(--formFieldBorderWidth);
  border-radius: var(--formFieldBorderRadius, 3px);
  background-color: var(--formFieldBgColor);
  color: var(--formFieldColor);
  padding: var(--formFieldPadding);
  text-transform: var(--formFieldTextTransform);
  font-weight: var(--formFieldFontWeight);
  font-family: var(--bodyFontFamily);
  font-size: var(--formFieldFontSize);
  letter-spacing: var(--formFieldLetterSpacing);
  line-height: var(--formFieldLineHeight);
}

form label,
.wpforms-container .wpforms-field-label {
  font-weight: var(--formLabelFontWeight, var(--bodyFontWeight));
  text-transform: var(--formLabelTextTransform);
  letter-spacing: var(--formLabelLetterSpacing);
  line-height: var(--formLabelLineHeight);
  font-size: var(--formLabelFontSize, var(--bodyFontSize));
}

.entry-summary, .nv-meta-list li {
  font-weight: var(--fontWeight);
  text-transform: var(--textTransform);
  letter-spacing: var(--letterSpacing);
  line-height: var(--lineHeight);
  font-size: var(--fontSize);
}

.title.entry-title {
  font-size: var(--fontSize, var(--h1FontSize));
  font-weight: var(--fontWeight, var(--h1FontWeight));
  line-height: var(--lineHeight, var(--h1LineHeight));
  letter-spacing: var(--letterSpacing, var(--h1LetterSpacing));
  text-transform: var(--textTransform, var(--h1TextTransform));
}

.blog-entry-title {
  font-size: var(--fontSize, var(--h3FontSize));
  font-weight: var(--fontWeight, var(--h3FontWeight));
  line-height: var(--lineHeight, var(--h3LineHeight));
  letter-spacing: var(--letterSpacing, var(--h3LetterSpacing));
  text-transform: var(--textTransform, var(--h3TextTransform));
}

.comment-reply-title {
  font-size: var(--fontSize, var(--h4FontSize));
  font-weight: var(--fontWeight, var(--h4FontWeight));
  line-height: var(--lineHeight, var(--h4LineHeight));
  letter-spacing: var(--letterSpacing, var(--h4LetterSpacing));
  text-transform: var(--textTransform, var(--h4TextTransform));
}

html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
.nv-html-content p,
h6 {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: 400;
}

ul {
  list-style: none;
}

button,
input,
select,
textarea {
  margin: 0;
}

html {
  box-sizing: border-box;
  -ms-overflow-style: scrollbar;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

img,
embed,
object,
audio,
video {
  height: auto;
  max-width: 100%;
}

iframe {
  border: 0;
  max-width: 100%;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
  text-align: left;
}

abbr,
acronym {
  text-decoration: none;
}

mark {
  background: 0;
  color: var(--nv-text-color);
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0 auto;
  max-width: var(--container);
}

.w-100 {
  width: 100%;
}

.container-fluid {
  width: 100%;
  margin: 0 auto;
}

.container-fluid > div {
  margin: 0 -15px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}

.col {
  padding: 0 15px;
  margin: 0 auto;
  flex-grow: 1;
  max-width: 100%;
}

html {
  font-size: 100%;
  overflow-x: hidden;
}

body {
  background-color: var(--nv-site-bg);
  color: var(--nv-text-color);
  font-size: var(--bodyFontSize);
  line-height: var(--bodyLineHeight);
  letter-spacing: var(--bodyLetterSpacing);
  font-family: var(--bodyFontFamily), var(--nv-fallback-ff);
  text-transform: var(--bodyTextTransform);
  font-weight: var(--bodyFontWeight);
  overflow-x: hidden;
  direction: ltr;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 30px;
  font-family: var(--headingsFontFamily), var(--nv-fallback-ff);
}

p {
  margin-bottom: 30px;
}

a {
  color: var(--nv-primary-accent);
  cursor: pointer;
  text-decoration: none;
}

a:hover, a:focus {
  opacity: 0.9;
  color: var(--nv-secondary-accent);
}

.entry-content a:not([class*="button"]),
.widget_text a:not([class*="button"]),
.nv-template .neve-main a:not([class*="button"]),
.nv-comment-content a:not([class*="button"]) {
  text-decoration: underline;
}

ins {
  text-decoration: none;
}

h1 {
  font-size: var(--h1FontSize);
  font-weight: var(--h1FontWeight);
  line-height: var(--h1LineHeight);
  letter-spacing: var(--h1LetterSpacing);
  text-transform: var(--h1TextTransform);
}

h2 {
  font-size: var(--h2FontSize);
  font-weight: var(--h2FontWeight);
  line-height: var(--h2LineHeight);
  letter-spacing: var(--h2LetterSpacing);
  text-transform: var(--h2TextTransform);
}

h3 {
  font-size: var(--h3FontSize);
  font-weight: var(--h3FontWeight);
  line-height: var(--h3LineHeight);
  letter-spacing: var(--h3LetterSpacing);
  text-transform: var(--h3TextTransform);
}

h4 {
  font-size: var(--h4FontSize);
  font-weight: var(--h4FontWeight);
  line-height: var(--h4LineHeight);
  letter-spacing: var(--h4LetterSpacing);
  text-transform: var(--h4TextTransform);
}

h5 {
  font-size: var(--h5FontSize);
  font-weight: var(--h5FontWeight);
  line-height: var(--h5LineHeight);
  letter-spacing: var(--h5LetterSpacing);
  text-transform: var(--h5TextTransform);
}

h6 {
  font-size: var(--h6FontSize);
  font-weight: var(--h6FontWeight);
  line-height: var(--h6LineHeight);
  letter-spacing: var(--h6LetterSpacing);
  text-transform: var(--h6TextTransform);
}

ul,
ol {
  padding-left: var(--listPad, 0);
}

ul {
  list-style: var(--listStyle, none);
}

.show-on-focus {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  top: 32px;
  left: 0;
  background: var(--nv-site-bg);
  padding: 10px 15px;
}

.show-on-focus:focus {
  z-index: 999999;
  width: auto;
  height: auto;
  clip: auto;
}

.screen-reader-text {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.nv-icon {
  fill: currentColor;
}

.nv-search {
  display: flex;
}

table {
  border-collapse: separate;
  border-spacing: 0;
  border-width: 1px 0 0 1px;
  margin: 0 0 20px;
  width: 100%;
  word-break: initial;
}

.wp-block-table {
  margin-top: 30px;
  margin-bottom: 30px;
}

.wp-block-table figcaption {
  margin: 15px auto;
  text-align: center;
}

.wp-block-table.is-style-stripes {
  border: 0;
}

.wp-block-table.is-style-stripes tbody tr:nth-child(odd) {
  background-color: var(--nv-light-bg);
}

th,
td {
  padding: 20px;
}

th {
  padding-bottom: 10px;
}

td {
  font-size: 0.9em;
  border-bottom: 2px solid var(--nv-text-color);
}

.wp-block-separator {
  border-bottom: 0;
  border-top: 2px solid;
}

.wp-block-separator.is-style-wide {
  border-width: 4px;
}

.wp-block-separator.is-style-dots {
  border-top: 4px dotted;
}

.wp-block-separator.is-style-dots::before {
  content: none;
}

p[class*="has-"][class*="-font-size"] {
  line-height: 1;
}

.has-medium-font-size {
  font-size: 25px!important;
  line-height:150%!important;
}

.has-large-font-size {
  font-size: font-size: 25px;
}

.has-huge-font-size {
  font-size: font-size: 25px;
  font-weight: bold;
}

.alignfull {
  width: 100vw;
  max-width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding: 0 7.5px;
}

.alignwide {
  width: 98vw;
  max-width: 98vw;
  margin-left: calc(50% - 49vw);
  margin-right: calc(50% - 49vw);
}

.nv-sidebar-left .alignfull,
.nv-sidebar-left .alignwide,
.nv-sidebar-right .alignfull,
.nv-sidebar-right .alignwide {
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

blockquote {
  margin: 40px 0;
  border-color: var(--nv-text-color);
  border-style: solid;
  border-width: 0 0 0 4px;
  padding: 0 0 0 20px;
}

blockquote p {
  margin-bottom: 10px;
}

blockquote cite {
  font-style: normal;
  font-size: 0.9em !important;
}

blockquote.has-text-align-center {
  border: 0;
  padding: 0;
}

blockquote.has-text-align-right {
  border-width: 0 4px 0 0;
  padding: 0 20px 0 0;
}

blockquote.is-style-large {
  border: 0;
  padding: 0;
}

blockquote.is-style-large.wp-block-quote > p {
  margin-bottom: 20px;
  font-style: normal;
  font-size: 1.25em;
}

.wp-block-pullquote {
  margin-top: 30px;
  margin-bottom: 30px;
  border-top: 4px solid var(--nv-text-color);
  border-bottom: 4px solid var(--nv-text-color);
  padding: 30px 20px;
}

.wp-block-pullquote p {
  font-size: 1.5em !important;
}

.wp-block-pullquote blockquote {
  padding-left: 0;
  border-left: 0;
  margin: 0;
}

.wp-block-pullquote.alignleft {
  text-align: left;
}

.wp-block-pullquote.alignright {
  text-align: right;
}

.wp-block-pullquote.is-style-solid-color {
  background-color: var(--nv-light-bg);
}

.wp-block-pullquote.is-style-solid-color blockquote {
  text-align: inherit;
  max-width: 90%;
}

.wp-block-verse {
  background-color: inherit;
  font-size: 1.25em;
  border: 0;
}

.has-neve-link-color-color {
  color: var(--nv-primary-accent) !important;
}

.has-neve-link-color-background-color {
  background-color: var(--nv-primary-accent) !important;
}

.has-neve-link-hover-color-color {
  color: var(--nv-secondary-accent) !important;
}

.has-neve-link-hover-color-background-color {
  background-color: var(--nv-secondary-accent) !important;
}

.has-neve-text-color-color {
  color: var(--nv-text-color) !important;
}

.has-neve-text-color-background-color {
  background-color: var(--nv-text-color) !important;
}

.has-nv-site-bg-color {
  color: var(--nv-site-bg) !important;
}

.has-nv-site-bg-background-color {
  background-color: var(--nv-site-bg) !important;
}

.has-nv-light-bg-color {
  color: var(--nv-light-bg) !important;
}

.has-nv-light-bg-background-color {
  background-color: var(--nv-light-bg) !important;
}

.has-nv-dark-bg-color {
  color: var(--nv-dark-bg) !important;
}

.has-nv-dark-bg-background-color {
  background-color: var(--nv-dark-bg) !important;
}

.has-nv-text-dark-bg-color {
  color: var(--nv-text-dark-bg) !important;
}

.has-nv-text-dark-bg-background-color {
  background-color: var(--nv-text-dark-bg) !important;
}

.has-nv-c-1-color {
  color: var(--nv-c-1) !important;
}

.has-nv-c-1-background-color {
  background-color: var(--nv-c-1) !important;
}

.has-nv-c-2-color {
  color: var(--nv-c-2) !important;
}

.has-nv-c-2-background-color {
  background-color: var(--nv-c-2) !important;
}

.site-logo {
  align-items: center;
  display: flex;
}

.site-logo amp-img img {
  max-height: 60px;
}

.site-logo img {
  max-width: var(--maxWidth);
  display: block;
  margin: 0 auto;
}

.site-logo .title-with-logo {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.site-logo .title-with-logo > *:first-child {
  margin-right: 10px;
}

.site-logo h1,
.site-logo p {
  font-size: 24px;
  font-weight: var(--h1FontWeight);
  line-height: var(--bodyLineHeight);
  letter-spacing: var(--bodyLetterSpacing);
  text-transform: var(--textTransform, var(--bodyTextTransform));
  margin: 0;
}

.site-logo small {
  display: block;
}

.nav-ul li:hover > .sub-menu,
.nav-ul li:focus-within > .sub-menu, .sub-menu.dropdown-open, .header-menu-sidebar .nav-ul .sub-menu {
  opacity: 1;
  visibility: visible;
}

.caret {
  transition: 0.3s ease;
}

.dd-title {
  flex-grow: var(--flexG);
}

.nav-ul {
  display: flex;
  flex-wrap: wrap;
  margin-right: calc(var(--spacing) / 2 * -1);
  margin-left: calc(var(--spacing) / 2 * -1);
}

.nav-ul li a {
  display: flex;
  align-items: center;
  min-height: var(--height);
  color: var(--color);
  position: relative;
}

.nav-ul a:hover {
  color: var(--hoverColor);
}

.nav-ul > li {
  margin: 0 calc(var(--spacing) / 2);
}

.nav-ul li {
  display: block;
  position: relative;
}

.nav-ul li.current-menu-item > a {
  color: var(--activeColor);
}

.nav-ul .caret {
  display: flex;
  margin-left: 5px;
  justify-content: center;
}

.nav-ul .caret svg {
  fill: currentColor;
  width: 0.5em;
  height: 0.5em;
}

.nav-ul .sub-menu {
  background-color: var(--bgColor, var(--overlayColor));
  z-index: 100;
  position: absolute;
  top: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
  visibility: hidden;
  opacity: 0;
  right: 0;
}

.nav-ul .sub-menu li {
  min-width: 150px;
}

.nav-ul .sub-menu a {
  padding: 10px 20px;
  white-space: nowrap;
  display: flex;
}

.nav-ul .sub-menu .sub-menu {
  left: 100%;
  top: 0;
  right: unset;
}

.header-menu-sidebar .nv-nav-wrap {
  width: 100%;
}

.header-menu-sidebar .nav-ul {
  --spacing: 0;
  flex-direction: column;
  width: 100%;
}

.header-menu-sidebar .nav-ul li {
  width: 100%;
}

.header-menu-sidebar .nav-ul a {
  padding: 15px 0;
  white-space: unset;
}

.header-menu-sidebar .nav-ul .caret svg {
  width: 1em;
  height: 1em;
}

.header-menu-sidebar .nav-ul .caret-wrap {
  margin: -15px 0;
  padding: 15px 15px 15px 20px;
}

.header-menu-sidebar .nav-ul .caret-wrap.dropdown-open .caret {
  transform: rotateX(180deg);
}

.header-menu-sidebar .nav-ul .sub-menu {
  left: unset !important;
  top: unset !important;
  right: unset !important;
  background: unset;
  position: relative;
  max-width: 100%;
  box-shadow: none;
  max-height: 0;
  overflow: hidden;
}

.header-menu-sidebar .nav-ul .sub-menu.dropdown-open {
  max-height: 1300px;
}

.header-menu-sidebar .nav-ul.dropdowns-expanded > li > .sub-menu {
  max-height: 1200px;
}

.header-menu-sidebar .nav-ul.dropdowns-expanded > li > a .caret-wrap {
  display: none;
}

.header-menu-sidebar .has-caret.amp {
  padding-right: 0;
}

.header-menu-sidebar .amp.dropdown-open + .sub-menu {
  max-height: 1300px !important;
}

.amp-desktop-caret-wrap {
  display: none;
}

.amp-caret-wrap svg {
  fill: currentColor;
  width: 1em;
}

.has-caret.amp {
  display: flex;
  align-items: center;
}

.has-caret.amp .caret-wrap {
  margin-left: auto;
}

.sub-menu .has-caret.amp {
  padding-right: 20px;
}

.nv-nav-wrap ul.primary-menu-ul > li i {
  margin-top: 0;
  font-size: inherit;
  line-height: inherit;
  width: auto;
  height: auto;
}

.nv-nav-search {
  transition: opacity 0.3s;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  right: 0;
  width: auto;
  padding: 10px;
  cursor: unset;
  z-index: 100;
  background-color: var(--nv-site-bg);
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
  display: flex;
  align-items: center;
}

.nv-nav-search .container {
  padding: 0;
}

.menu-item-nav-search.active .nv-nav-search {
  opacity: 1;
  visibility: visible;
}

.menu-item-nav-search {
  cursor: pointer;
  outline: 0;
}

.menu-item-nav-search .nv-icon:hover {
  color: var(--hoverColor);
}

.menu-item-nav-search svg {
  width: var(--iconSize);
  height: var(--iconSize);
}

.menu-item-nav-search.minimal {
  position: relative;
}

.menu-item-nav-search.minimal .search-field {
  width: 200px;
}

.menu-item-nav-search.minimal .nv-nav-search {
  display: flex;
  align-items: center;
  right: auto;
  left: 0;
  top: 100%;
}

.menu-item-nav-search.floating .form-wrap {
  flex-grow: 1;
}

.menu-item-nav-search.floating .nv-nav-search {
  align-items: unset;
  transition: top 0.2s ease-out;
  position: fixed;
  top: -100%;
  left: 0;
}

.menu-item-nav-search.floating.active .nv-nav-search {
  top: 0;
}

.menu-item-nav-search.floating .close-container {
  display: flex;
}

.menu-item-nav-search.floating .close-responsive-search {
  display: flex;
  align-items: center;
  --primaryBtnPadding: 0 20px;
}

.header-menu-sidebar .menu-item-nav-search.floating .nv-nav-search {
  position: absolute;
}

.menu-item-nav-search.canvas .nv-nav-search {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-item-nav-search.canvas .nv-nav-search .close-container {
  position: absolute;
  top: 30px;
  text-align: right;
}

.nav-clickaway-overlay {
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  z-index: 90;
  height: 100vh;
}

.close-responsive-search {
  background: 0;
  border: 0;
  --primaryBtnHoverBg: 0;
}

.close-responsive-search > svg {
  fill: var(--nv-text-color);
  width: var(--formFieldFontSize);
  min-width: 25px;
  min-height: 25px;
}

.style-border-bottom a::after {
  bottom: 0;
}

.style-border-top a::after {
  top: 0;
}

.style-border-top a:hover::after,
.style-border-bottom a:hover::after,
.style-full-height a:hover::after {
  width: 100%;
}

.style-border-top a::after,
.style-border-bottom a::after,
.style-full-height a::after {
  position: absolute;
  content: "";
  display: block;
  margin: 0 auto;
  width: 0;
  height: 2px;
  transition: opacity 0.3s ease, width 0.3s ease;
  right: 0;
  left: 0;
  pointer-events: none;
  background-color: var(--hoverColor, currentColor);
}

.style-full-height li a:hover {
  color: var(--color);
}

.style-full-height li a:hover::after {
  width: calc(100% + var(--spacing));
}

.style-full-height a {
  z-index: 1;
}

.style-full-height a::after {
  margin: 0 auto;
  top: 0;
  bottom: 0;
  left: calc(var(--spacing) / 2 * -1);
  right: calc(var(--spacing) / 2 * -1);
  height: 100%;
  z-index: -1;
}

.nav-toggle-label {
  margin-right: 5px;
  line-height: 1;
}

.navbar-toggle-wrapper {
  align-items: center;
}

.navbar-toggle {
  --primaryBtnColor: var(--color);
  --primaryBtnHoverColor: var(--color);
  --primaryBtnBg: var(--bgColor, transparent);
  --primaryBtnHoverBg: var(--bgColor, transparent);
  --primaryBtnBorderWidth: var(--borderWidth, 1px);
  --primaryBtnBorderRadius: var(--borderRadius, 0);
  padding: var(--padding, 10px 15px);
  box-shadow: none;
  display: flex;
  align-items: center;
}

.icon-bar {
  background-color: currentColor;
  transition: all 0.1s ease;
  position: relative;
  display: block;
  width: 15px;
  height: 2px;
}

.icon-bar:nth-child(2) {
  margin: 3px 0;
}

.is-menu-sidebar .navbar-toggle .icon-bar:nth-child(1) {
  transform: rotate(45deg);
  top: 5px;
}

.is-menu-sidebar .navbar-toggle .icon-bar:nth-child(2) {
  opacity: 0;
}

.is-menu-sidebar .navbar-toggle .icon-bar:nth-child(3) {
  transform: rotate(-45deg);
  bottom: 5px;
}

.wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  position: relative;
  transition: all 0.3s cubic-bezier(0.79, 0.14, 0.15, 0.86);
}

body > .wrapper:not(.et-fb-iframe-ancestor) {
  overflow: hidden;
}

.neve-main {
  flex: 1 auto;
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
input[type="submit"],
input[type="reset"],
select,
textarea {
  display: inline-block;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  resize: vertical;
}

input:read-write:focus, input:read-write:focus-visible,
select:focus,
select:focus-visible,
textarea:focus,
textarea:focus-visible,
[tabindex="-1"]:focus,
[tabindex="-1"]:focus-visible {
  outline: 0;
  box-shadow: 0 0 3px 0 var(--nv-secondary-accent);
  --formFieldBorderColor: var(--nv-secondary-accent);
}

input,
textarea,
select,
button {
  line-height: inherit;
  box-sizing: border-box;
}

::placeholder {
  color: inherit;
  opacity: 0.5;
}

select {
  min-height: 35px;
  background-repeat: no-repeat;
  background-position: right;
  background-size: 18px;
  padding-right: 20px !important;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggZmlsbD0iIzYyNjI2MiIgZD0iTTE1IDhsLTQgNi00LTZoOHoiLz48L3N2Zz4=);
}

label {
  display: inline-block;
}

fieldset {
  padding: 20px 30px;
  margin-bottom: 20px;
  border: 2px solid var(--nv-light-bg);
}

fieldset legend {
  font-weight: 700;
  padding: 0 15px;
  margin-left: -15px;
}

fieldset input[type="text"],
fieldset input[type="search"],
fieldset input[type="password"],
fieldset textarea,
fieldset select {
  width: 100%;
}

.widget-search {
  width: 100%;
  margin: 0 !important;
}

.search-form {
  display: flex;
  max-width: 100%;
  line-height: 1;
  --primaryBtnBg: var(--formFieldBgColor);
  --primaryBtnHoverBg: var(--formFieldBgColor);
  --primaryBtnColor: var(--formFieldBorderColor);
  --primaryBtnHoverColor: var(--formFieldBorderColor);
}

.search-form svg {
  fill: var(--formFieldColor);
  width: var(--formFieldFontSize);
  opacity: 0.5;
  height: auto;
}

.search-form .search-submit {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 45px;
  z-index: 1;
  --primaryBtnBorderWidth: var(--formFieldBorderWidth);
  --primaryBtnBorderColor: var(--formFieldBorderColor);
  --primaryBtnBorderRadius: var(--formFieldBorderRadius);
  --primaryBtnPadding: var(--formFieldPadding);
  height: var(--height);
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-left: 0;
  position: relative;
}

.search-form .search-submit::before {
  content: "";
  display: block;
  width: 3px;
  height: 100%;
  background-color: var(--formFieldBgColor);
  left: -3px;
  top: 0;
  bottom: 0;
  position: absolute;
}

.search-form .search-field {
  overflow: hidden;
  text-overflow: ellipsis;
  height: var(--height);
  border-right: 0;
  flex-grow: 1;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  width: calc(100% - 45px);
  max-width: 100%;
}

.search-form .search-field:focus ~ button {
  box-shadow: 0 0 3px 0 var(--nv-secondary-accent);
  border-color: var(--nv-secondary-accent);
}

.nv-meta-list {
  margin-bottom: 20px;
  font-size: 0.9em;
}

.nv-meta-list li,
.nv-meta-list span {
  display: inline;
}

.nv-meta-list li:not(:last-child)::after,
.nv-meta-list span:not(:last-child)::after {
  content: "/";
  padding: 0 8px;
}

.nv-meta-list .posted-on:not(.nv-show-updated) .updated {
  display: none;
}

.nv-meta-list .photo {
  width: var(--avatarSize);
  height: var(--avatarSize);
  border-radius: 50%;
  transform: translateY(30%);
  margin-right: 3px;
}

.nv-dynamic-author-meta .photo {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  transform: translateY(30%);
}

.entry-title {
  word-wrap: break-word;
}

.entry-title a {
  color: var(--nv-text-color);
}

.nv-index-posts {
  margin-top: 60px;
}

.nv-index-posts .nv-page-title-wrap {
  margin-top: 0;
}

.nv-post-thumbnail-wrap > a,
.nv-post-thumbnail-wrap img:not(.photo) {
  display: block;
}

.nv-post-thumbnail-wrap amp-img,
.nv-post-thumbnail-wrap img {
  box-shadow: var(--boxShadow, none);
}

.posts-wrapper > article {
  width: var(--postWidth);
}

.blog-entry-title {
  margin-bottom: 10px;
  word-wrap: break-word;
}

.article-content-col {
  width: 100%;
}

.article-content-col .content {
  width: 100%;
  border-bottom: 0 solid;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.article-content-col .content .button {
  display: inline-block;
  align-self: flex-start;
}

.bypostauthor {
  display: block;
}

.posts-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.excerpt-wrap > *:last-child {
  margin-bottom: 0;
}

.layout-grid .content > .blog-entry-title {
  margin-bottom: 10px;
}

.layout-grid .content > * {
  margin-bottom: 20px;
}

.layout-grid .content > *:last-child {
  margin-bottom: 0;
}

.nv-non-grid-article {
  margin-bottom: var(--spacing, 60px);
  display: flex;
  align-items: flex-end;
}

.nv-non-grid-article .non-grid-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.nv-non-grid-article .non-grid-content > .blog-entry-title {
  margin-bottom: 10px;
}

.nv-non-grid-article .non-grid-content > * {
  margin-bottom: 20px;
}

.nv-non-grid-article .non-grid-content > *:last-child {
  margin-bottom: 0;
}

article {
  word-break: break-word;
}

body:not(.nv-blog-default) .posts-wrapper {
  margin-left: calc(-1 * var(--gridSpacing, 30px) / 2);
  margin-right: calc(-1 * var(--gridSpacing, 30px) / 2);
}

body:not(.nv-blog-default) .posts-wrapper article {
  margin-bottom: calc(var(--gridSpacing, 30px));
  padding: 0 calc(var(--gridSpacing, 30px) / 2);
}

.nv-loader {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 3px solid var(--nv-primary-accent);
  border-left: 3px solid transparent;
  animation: spin 1s linear infinite;
  margin: 0 auto;
  display: none;
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

body .layout-grid > .article-content-col,
.layout-grid {
  display: flex;
}

.nv-non-grid-article .nv-post-thumbnail-wrap {
  margin-bottom: 20px;
}

.layout-covers .article-content-col,
.layout-covers .content,
.layout-covers .cover-post {
  height: 100%;
}

.layout-covers .content {
  border: 0;
  padding-bottom: 0;
}

.cover-post {
  box-shadow: var(--boxShadow, none);
  position: relative;
  background-size: cover;
  display: flex;
  background-position: center;
  overflow: hidden;
}

.cover-post::after {
  background-color: rgba(0, 0, 0, 0.75);
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.cover-post amp-img,
.cover-post img {
  --boxShadow: none;
}

.cover-post .inner {
  max-width: 100%;
  min-height: 350px;
  position: relative;
  z-index: 10;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: var(--color, #fff);
  flex-grow: 1;
}

.cover-post .inner a:not(.button) {
  color: var(--color, #fff);
}

.nv-single-post-wrap > div:first-child {
  margin-top: 60px;
}

.nv-single-post-wrap > div:last-child {
  padding-bottom: 30px;
}

.nv-single-post-wrap > div:not(:last-child) {
  margin-bottom: var(--spacing, 60px);
}

.nv-page-title-wrap {
  margin-top: 60px;
}

.entry-header .title {
  margin-bottom: 10px;
}

.attachment-neve-blog {
  display: flex;
}

.nv-post-navigation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.nv-post-navigation span {
  display: block;
}

.nv-post-navigation .nav-direction {
  color: var(--nv-text-color);
  font-size: 0.8em;
  text-transform: uppercase;
}

.nv-post-navigation a:hover span:last-child {
  text-decoration: underline;
}

.nv-post-navigation .next {
  grid-column: 2;
  text-align: right;
}

.post-pages-links {
  display: flex;
  list-style-type: none;
}

.post-pages-links > a:not(:last-child) span,
.post-pages-links > span {
  padding-right: 15px;
}

.post-password-form input[type="submit"] {
  margin-top: 20px;
}

.nv-tags-list a,
.wp-block-tag-cloud a,
.tagcloud a {
  margin: 0 10px 10px 0;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff !important;
  padding: 10px;
  border-radius: 4px;
  background: var(--nv-primary-accent);
  line-height: 1;
  font-size: 0.75em !important;
  display: inline-block;
}

.nv-tags-list span,
.wp-block-tag-cloud span,
.tagcloud span {
  margin-right: 10px;
}

.tagcloud {
  display: flex;
  flex-wrap: wrap;
}

.nv-post-cover {
  min-height: var(--height);
  padding: var(--padding);
  display: flex;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.nv-post-cover .nv-title-meta-wrap {
  color: var(--color, var(--nv-text-dark-bg));
  display: flex;
  flex-direction: column;
  z-index: 1;
  align-self: var(--vAlign, flex-end);
}

.nv-post-cover .nv-title-meta-wrap > *:last-child {
  margin-bottom: 0;
}

.nv-post-cover .nv-title-meta-wrap a {
  color: var(--color, var(--nv-text-dark-bg));
}

.nv-post-cover .container {
  display: flex;
}

.nv-is-boxed {
  padding: var(--padding);
  background: var(--bgColor, var(--nv-light-bg));
  color: var(--color, var(--nv-text-color));
}

.nv-is-boxed a {
  color: var(--color, var(--nv-text-color));
}

.nv-overlay {
  background-color: var(--bgColor, var(--nv-dark-bg));
  mix-blend-mode: var(--blendMode, normal);
  opacity: calc(var(--opacity) / 100);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.nv-comment-content {
  margin-bottom: 0 !important;
}

.nv-comment-content > *:last-child {
  margin-bottom: 0;
}

#comments li.comment {
  border-bottom: 2px solid;
  padding-bottom: 40px;
  margin-bottom: 40px;
}

#comments article {
  display: flex;
}

#comments .avatar {
  border-radius: 100%;
  margin-right: 20px;
}

#comments .comment-content {
  flex-grow: 1;
}

#comments input:not([type="submit"]):not([type="checkbox"]) {
  width: 100%;
}

#comments ol {
  list-style: none;
}

#comments textarea {
  max-width: 100%;
  width: 100%;
  display: block;
}

#comments .comment-reply-title {
  margin-bottom: 15px;
}

#comments .comment-reply-title small {
  float: right;
}

.nv-comment-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.nv-comment-header .vcard {
  display: grid;
}

.nv-comment-header .vcard a {
  color: var(--color, var(--nv-text-color));
}

.nv-comment-header .vcard .author {
  font-weight: 700;
}

.nv-comment-header .vcard time {
  font-size: 0.9em;
  opacity: 0.7;
}

.nv-comment-header .edit-reply {
  font-size: 0.9em;
  font-weight: 700;
  text-transform: uppercase;
  margin-left: auto;
}

.comments-title {
  margin-bottom: 80px;
}

.comment-form {
  display: grid;
  grid-column-gap: 15px;
  grid-row-gap: 10px;
}

.comment-form > p:not(.comment-notes) {
  margin-bottom: 0;
}

.comment-form label {
  display: inline-block;
}

.nv-comments-list {
  margin-bottom: 80px;
}

.nv-comments-list .children li:not(.children) {
  padding-left: 40px;
}

ul.page-numbers {
  display: flex;
  flex-wrap: wrap;
}

ul.page-numbers li {
  margin-bottom: 15px;
}

ul.page-numbers input[type="submit"] {
  all: unset;
  cursor: pointer;
}

ul.page-numbers form {
  display: flex;
}

ul.page-numbers .page-input {
  line-height: 1;
  margin-right: 10px;
  padding: 8px 15px;
  font-size: var(--bodyFontSize);
}

ul.page-numbers a,
ul.page-numbers span,
ul.page-numbers input[type="submit"] {
  line-height: 1;
  margin-right: 20px;
  background: var(--nv-light-bg);
  border-radius: 3px;
  padding: 12px 15px;
  color: var(--nv-text-color);
  display: block;
}

ul.page-numbers .dots {
  background: 0;
}

ul.page-numbers .current {
  background: var(--nv-primary-accent);
  color: var(--nv-text-dark-bg);
}

dl {
  margin: 20px 0;
}

dl dd {
  padding-left: 30px;
}

dl dt {
  font-weight: 600;
}

.nv-iframe-embed {
  position: relative;
  padding-bottom: 56.25%;
  /* 16:9 */
  height: 0;
}

.nv-iframe-embed iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

figcaption {
  font-size: 0.9em;
  opacity: 0.75;
}

code {
  background: #d0effb;
  border-radius: 5px;
  border: 1px solid var(--nv-light-bg);
  padding: 0 3px;
  color: #333;
}

pre {
  display: block;
  padding: 30px;
  background: var(--nv-light-bg);
  margin: 20px 0;
  white-space: pre-wrap;
  font-size: 0.9em;
  font-family: Courier, monospace;
}

pre code {
  border: 0;
  background: transparent;
}

.nv-content-wrap,
.excerpt-wrap {
  --listPad: 20px;
  --listStyle: disc;
}

.nv-content-wrap > ul,
.nv-content-wrap > ol,
.excerpt-wrap > ul,
.excerpt-wrap > ol {
  margin: 30px 0;
}

.nv-content-wrap li,
.excerpt-wrap li {
  margin-top: 10px;
}

.alignleft {
  float: left;
  margin: 20px 20px 20px 0;
}

.alignright {
  float: right;
  margin: 20px 0 20px 20px;
}

.aligncenter {
  display: block;
  text-align: center;
  margin: 0 auto;
}

.wp-caption {
  max-width: 100%;
}

.wp-caption-text {
  text-align: center;
  font-size: 0.8em;
  font-weight: 500;
}

.twitter-tweet.twitter-tweet-rendered {
  padding: 15px 0;
  margin: auto;
}

hr {
  color: inherit;
  height: 0;
  border: 0;
  border-top: 2px solid;
  margin: 10px 0 20px;
  display: inline-block;
  width: 100%;
}

audio {
  display: flex;
  height: 50px;
}

.gallery-columns-1 .gallery-item {
  width: 100%;
  max-width: 100%;
}

.gallery-columns-2 .gallery-item {
  max-width: 48%;
  width: 48%;
}

.gallery-columns-3 .gallery-item {
  max-width: 31.3333333333%;
  width: 31.3333333333%;
}

.gallery-columns-4 .gallery-item {
  max-width: 23%;
  width: 23%;
}

.gallery-columns-5 .gallery-item {
  max-width: 18%;
  width: 18%;
}

.gallery-columns-6 .gallery-item {
  max-width: 14.6666666667%;
  width: 14.6666666667%;
}

.gallery-columns-7 .gallery-item {
  max-width: 12.2857142857%;
  width: 12.2857142857%;
}

.gallery-columns-8 .gallery-item {
  max-width: 10.5%;
  width: 10.5%;
}

.gallery-columns-9 .gallery-item {
  max-width: 9.1111111111%;
  width: 9.1111111111%;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.gallery-item {
  display: inline-block;
  text-align: center;
  vertical-align: top;
}

.nv-content-wrap ul.wp-block-gallery {
  padding-left: 0;
}

.gallery-caption {
  box-sizing: border-box;
}

.nv-single-post-wrap,
.nv-index-posts {
  margin-bottom: 60px;
}

.nv-sidebar-wrap {
  padding: 60px 15px;
  margin-bottom: 20px;
  flex-grow: 1;
}

.nv-sidebar-wrap.hide {
  display: none;
}

.widget {
  word-break: break-word;
  margin-bottom: 40px;
}

.widget:last-child {
  margin: 0;
}

.widget select {
  max-width: 100%;
  width: 100%;
}

.widget .widget-title {
  margin-bottom: 10px;
  font-weight: 700;
  font-size: var(--h4FontSize);
}

.widget ul {
  padding: 0;
}

.widget ul ul {
  padding-left: 10px;
}

.widget li {
  margin-top: 10px;
}

.post-date {
  display: block;
  font-size: 0.9em;
  opacity: 0.7;
}

.widget_recent_entries a {
  color: var(--nv-text-color);
}

.widget_calendar td,
.widget_calendar th {
  padding: 10px;
}

.nv-title-meta-wrap .neve-breadcrumbs-wrapper,
.nv-page-title .neve-breadcrumbs-wrapper {
  margin-bottom: 30px;
  display: block;
}

.neve-breadcrumbs-wrapper a {
  color: #676767;
}

.hfg-is-group {
  display: flex;
  align-items: center;
}

.nav-ul a,
.builder-item--footer-menu,
.component-wrap,
.palette-icon-wrapper,
.site-logo,
.menu-item-nav-search,
footer .nav-ul,
.item--inner {
  justify-content: var(--justify, flex-start);
  text-align: var(--textAlign, left);
}

@media (min-width: 769px) {
  #comments .comment-form {
    grid-template-columns: repeat(3, 1fr);
  }
  #comments .comment-form > *:not(.comment-form-author):not(.comment-form-url):not(.comment-form-email) {
    grid-column: 1/-1;
  }
}

@media (min-width: 960px) {
  .neve-main > .container .col {
    max-width: 70%;
  }
  .neve-main > .container > .row {
    flex-wrap: nowrap;
  }
  .amp-desktop-caret-wrap {
    display: none;
  }
  .amp-caret-wrap {
    display: block;
  }
  .non-grid-content {
    padding: var(--padding);
  }
  .nv-non-grid-article .nv-post-thumbnail-wrap {
    margin-bottom: 0;
    grid-column: var(--thumbGridColumn, 1);
  }
  .nv-non-grid-article .content {
    display: grid;
    grid-gap: 20px;
    align-items: center;
    grid-auto-flow: dense;
  }
  .posts-wrapper > article.has-post-thumbnail .content {
    grid-template-columns: var(--postColTemplate, 35fr 65fr);
  }
  .posts-wrapper > article.has-post-thumbnail.layout-alternative:nth-child(even) {
    --thumbGridColumn: 2;
  }
  .posts-wrapper > article.has-post-thumbnail.layout-alternative:nth-child(even) .content {
    grid-template-columns: var(--postColTemplate, 65fr 35fr);
  }
  .nv-sidebar-wrap {
    max-width: 30%;
  }
  .nv-sidebar-wrap.nv-right {
    padding-left: 45px;
  }
  .nv-sidebar-wrap.nv-left {
    padding-right: 45px;
  }
  .alignwide {
    width: 70vw;
    max-width: 70vw;
    margin-left: calc(50% - 35vw);
    margin-right: calc(50% - 35vw);
  }
}

.neve-main .elementor-text-editor ul,
.neve-main .elementor-text-editor ol {
  padding-left: 15px;
}

.neve-main .elementor-text-editor ul {
  list-style: inherit;
}

.header-menu-sidebar {
  padding: 0;
  position: fixed;
  max-width: 100%;
  top: 0;
  z-index: 999900;
  visibility: hidden;
  display: flex;
  transition: all 0.3s cubic-bezier(0.79, 0.14, 0.15, 0.86);
  height: 100vh;
  /* Close Button */
}

.header-menu-sidebar .navbar-toggle-wrapper {
  display: flex;
  justify-content: flex-end;
  padding: 8px 10px;
}

.header-menu-sidebar .navbar-toggle-wrapper button.navbar-toggle {
  position: relative;
}

.header-menu-sidebar-bg {
  background-color: var(--bgColor);
  color: var(--color);
  position: relative;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  width: 100%;
}

.header-menu-sidebar-inner {
  padding: 20px 0;
  overflow-x: hidden;
  height: 100%;
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.is-menu-sidebar .header-menu-sidebar-inner {
  display: block;
  opacity: 1;
}

.hiding-header-menu-sidebar .header-menu-sidebar-inner {
  display: block;
  transition: all 0.3s ease;
  opacity: 0;
}

.header-menu-sidebar-inner .item--inner {
  width: 100%;
}

.menu_sidebar_slide_left .header-menu-sidebar {
  left: 0;
  transform: translateX(-100%);
}

.menu_sidebar_slide_right .header-menu-sidebar {
  right: 0;
  transform: translateX(100%);
}

.menu_sidebar_pull_left .wrapper {
  left: 0;
}

.menu_sidebar_pull_left .wrapper .header-menu-sidebar {
  left: 0;
  transform: translateX(-100%);
}

.menu_sidebar_pull_right .wrapper {
  right: 0;
}

.menu_sidebar_pull_right .wrapper .header-menu-sidebar {
  right: 0;
  transform: translateX(100%);
}

.menu_sidebar_dropdown .header-menu-sidebar-overlay {
  display: none;
}

.menu_sidebar_dropdown .header-menu-sidebar {
  box-shadow: none;
  position: absolute;
  top: unset;
  width: 100%;
  display: block;
}

.menu_sidebar_dropdown .header-menu-sidebar .close-sidebar-panel {
  display: none;
}

.menu_sidebar_dropdown .header-menu-sidebar-inner {
  transition: all 0.3s cubic-bezier(0.79, 0.14, 0.15, 0.86);
  max-height: 0;
  padding: 0;
}

.menu_sidebar_full_canvas .header-menu-sidebar {
  width: 100%;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.79, 0.14, 0.15, 0.86);
}

.menu_sidebar_full_canvas .header-menu-sidebar-inner {
  flex-grow: 1;
}
	
/* Showing Menu Sidebar animation. */
.is-menu-sidebar .header-menu-sidebar {
  visibility: visible;
}

.is-menu-sidebar.menu_sidebar_slide_left .header-menu-sidebar {
  transform: translate3d(0, 0, 0);
  left: 0;
}

.is-menu-sidebar.menu_sidebar_slide_right .header-menu-sidebar {
  transform: translate3d(0, 0, 0);
  right: 0;
}

.is-menu-sidebar.menu_sidebar_pull_left .header-menu-sidebar {
  transform: translateX(0);
}

.is-menu-sidebar.menu_sidebar_pull_right .header-menu-sidebar {
  transform: translateX(0);
}

.is-menu-sidebar.menu_sidebar_dropdown .header-menu-sidebar {
  height: auto;
}

.is-menu-sidebar.menu_sidebar_dropdown .header-menu-sidebar-inner {
  max-height: 400px;
  padding: 20px 0;
}

.is-menu-sidebar.menu_sidebar_full_canvas .header-menu-sidebar {
  opacity: 1;
}

.header-menu-sidebar .menu-item-nav-search {
  display: flex;
  align-items: center;
}

.header-menu-sidebar-overlay {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  transform: translate3d(0, 0, 0);
  z-index: 999899;
  transition: all 0.3s linear;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
}

.is-menu-sidebar .header-menu-sidebar-overlay {
  visibility: visible;
  opacity: 1;
  pointer-events: unset;
}

.site-footer {
  position: relative;
  z-index: 10;
}

.site-footer .item--inner {
  width: 100%;
}

.site-footer .item--inner.has_menu {
  display: flex;
}

.site-footer p:last-child {
  margin-bottom: 0;
}

.footer--row .hfg-slot {
  display: flex;
  flex-direction: column;
}

.footer--row .row {
  display: grid;
  align-items: var(--vAlign);
}

.footer--row .builder-item {
  width: 100%;
}

@media (max-width: 960px) {
  footer .footer--row-inner .row {
    grid-template-columns: 1fr;
  }
}

.site-header {
  position: relative;
}

.site-header .header--row-inner {
  align-items: center;
  display: flex;
}

.builder-item {
  margin: 4px 0;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.builder-item.hfg-end {
  margin-left: auto;
}

.builder-item.hfg-start {
  margin-right: auto;
}

@media (min-width: 960px) {
  .builder-item {
    margin: 8px 0;
  }
}

.hfg-slot {
  display: flex;
  align-items: center;
}

.hfg-slot.right {
  justify-content: flex-end;
}

.hfg-slot.center {
  justify-content: center;
}

.layout-fullwidth .container {
  max-width: 100% !important;
}

.layout-contained {
  max-width: var(--container);
  margin: 0 auto;
}

[class*="row-inner"],
.header-menu-sidebar-bg {
  position: relative;
  background-image: var(--bgImage, none);
  background-position: var(--bgPosition, center);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: var(--bgAttachment);
}

[class*="row-inner"]::before,
.header-menu-sidebar-bg::before {
  display: block;
  width: 100%;
  top: 0;
  bottom: 0;
  position: absolute;
  content: "";
  background-color: var(--overlayColor);
  opacity: var(--bgOverlayOpacity);
}

[class*="row-inner"]:not(.footer--row-inner) {
  border-bottom: var(--rowBWidth, 0) solid var(--rowBColor);
}

.footer--row-inner {
  border-top: var(--rowBWidth, 0) solid var(--rowBColor);
}

[data-row-id] {
  color: var(--color);
  background: var(--bgColor);
}

[data-row-id] a {
  color: var(--color);
}

[data-row-id] .row {
  display: grid;
  grid-template-columns: auto auto;
  min-height: var(--height, auto);
}

.has-center .row--wrapper {
  grid-template-columns: 1fr auto 1fr;
}

.hfg_header.site-header {
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);
}

.hfg-is-group > div:first-of-type .button {
  margin-right: 20px;
}

.hfg-is-group > div:last-of-type .button {
  margin-left: 20px;
}

.header .builder-item .item--inner[class*="nav-icon"], .header .builder-item .item--inner[class*="button_base"] {
  padding: 0 !important;
}

.header .builder-item [class*="button_base"] .button {
  --primaryBtnPadding: var(--padding);
}

.hfg-grid {
  display: flex;
}

@media (min-width: 960px) {
  .hide-on-desktop {
    display: none;
  }
}

@media (max-width: 959px) {
  .hide-on-tablet {
    display: none;
  }
}

@media (max-width: 576px) {
  .hide-on-mobile {
    display: none;
  }
}

.component-wrap {
  display: flex;
  margin: 4px 0;
}

.builder-item .item--inner {
  color: var(--color);
  font-family: var(--fontFamily, var(--bodyFontFamily));
  font-size: var(--fontSize, var(--bodyFontSize));
  line-height: var(--lineHeight, var(--bodyLineHeight));
  letter-spacing: var(--letterSpacing, var(--bodyLetterSpacing));
  font-weight: var(--fontWeight, var(--bodyFontWeight));
  text-transform: var(--textTransform, var(--bodyTextTransform));
  padding: var(--padding, 0);
  margin: var(--margin, 0);
}

.inherit-ff {
  font-family: var(--inheritedFF);
  font-weight: var(--inheritedFW);
}

.neve-skip-link, .show-on-focus {
	display:none!important;
}