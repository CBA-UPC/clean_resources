@font-face {
    font-family: 'SFS'; 
    src: url("/login/assets/fonts/SalesforceSans/SalesforceSans-Regular.eot"); /* IE9 */
    src: url("/login/assets/fonts/SalesforceSans/SalesforceSans-Regular.eot?#iefix") format('embedded-opentype'), /* IE6-IE8 */ 
         url("/login/assets/fonts/SalesforceSans/SalesforceSans-Regular.woff2") format('woff2'), /* Chrome 26+, Opera 23+ */
         url("/login/assets/fonts/SalesforceSans/SalesforceSans-Regular.woff") format('woff'), /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
         url("/login/assets/fonts/SalesforceSans/SalesforceSans-Regular.svg#web") format('svg'); /* Legacy iOS */
    
}

@font-face {
    font-family: 'SFSLight';
    src: url('/login/assets/fonts/SalesforceSans/SalesforceSans-Light.eot') format('eot'); /* IE9 */
    src: url("/login/assets/fonts/SalesforceSans/SalesforceSans-Light.eot?#iefix") format('embedded-opentype'), /* IE6-IE8 */ 
         url('/login/assets/fonts/SalesforceSans/SalesforceSans-Light.woff2') format('woff2'), /* Chrome 26+, Opera 23+ */
         url('/login/assets/fonts/SalesforceSans/SalesforceSans-Light.woff') format('woff'), /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
         url('/login/assets/fonts/SalesforceSans/SalesforceSans-Light.svg#web') format('svg'); /* Legacy iOS */
}

html, body {
	height: 100%;
	font-family: SFS, Arial, sans-serif;
	color: #16325c;
}

body {
	padding: 0px;
	margin: 0 auto;
	font-size: .8125rem;
}

h1 {
	font-size: 1.5rem;
	font-family: SFSLight, Arial, sans-serif;
}

h2 {
	font-size: 1.125rem;
	font-family: SFSLight, Arial, sans-serif;
}

h3 {
	font-size: .875rem;
	font-family: SFSLight, Arial, sans-serif;
}

:placeholder {
	color: #54698d;
}

::-webkit-input-placeholder {
	color: #54698d;
}

:-moz-placeholder { /* Firefox 18- */
	color: #54698d;
	opacity: 1;
}

::-moz-placeholder {  /* Firefox 19+ */
	color: #54698d;
	opacity: 1;
}

:-ms-input-placeholder {
	color: #54698d;
}

/* Positioning */

.pr {
	position: relative;
}

.di {
	display: inline;
}

.dib {
	display: inline-block;
}

.tc {
	text-align: center;
}

.tr {
	text-align: right;
}

/* Floats */

.fl {
	float: left;
}

.fr {
	float: right;
}

/* Margins */

.ma {
	margin: 0 auto;
}

.mr8 {
	margin-right: 8px;
}

.mr16 {
	margin-right: 16px;
}

.mb8 {
	margin-bottom: 8px;
}

.mb12 {
	margin-bottom: .75rem;
}

.mb14 {
	margin-bottom: .875rem;
}

.mb16 {
	margin-bottom: 1rem;
}

.mb20 {
	margin-bottom: 1.25rem;
}

.mb24 {
	margin-bottom: 1.5rem;
}

.mt2 {
	margin-top: 2px;
}

.mt8 {
	margin-top: .5rem;
}

.mt16 {
	margin-top: 16px;
}

.mt24 {
	margin-top: 24px;
}

/* Radius  */

.r4 {
	border-radius: 4px;
}

/* Padding */

.p16 {
	padding: 16px 0;
}

.pt16 {
	padding-top: 16px;
}

.pt20 {
	padding-top: 20px;
}

.pt40 {
	padding-top: 40px;
}

/* Borders  */

.bt {
	border-top: 1px solid #F4F6F9;
}

img.logo {
	width: 160px;
}

img {
	vertical-align: middle;
	border: 0;
}

img.licensing {
    height: 20px;
    width: 20px;
    margin: 0 4px;
}

a {
	text-decoration: none;
	transition: all 0.1s;
}

a:hover, a:active {
	color: #005fb2;
}

a:focus {
	outline: thin dotted #333;
	outline: 5px auto -webkit-focus-ring-color;
	outline-offset: -2px;
}

.required {
    color: #CF4F43;
}

p {
	display: block;
	text-align: left;
	text-align: start;
	margin:0px;
	line-height: 1.5rem;
}

ul {
	padding-left:20px;
	list-style-type: disc;
}

.whiteHeader {
	color: #fff;
}

/*the UL above seems to break the next element so put in a no-op*/
code{}

.passwordul {
	padding-left:0px;
	list-style-type: none;
}

/*the UL above seems to break the next element so put in a no-op*/
code{}

.passwordicon {
	padding-right:8px;
    width: 16px;
}

.disabled {

}

.small {
	font-size: .75rem;
}

p.small a {
	font-size: .75rem;
}

.label {
	font-size: 12px;
	color: #54698d;
	margin: 0 0 8px 0;
	line-height: inherit;
}

div, form {
	margin: 0px;
	padding: 0px;
}

/* Divider */
.divider {
	border-top: 2px solid;
	color: #939393;
}

.zen-assistiveText {
	position: absolute !important;
	height: 1px;
	width: 1px;
	overflow: hidden;
	clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
	clip: rect(1px, 1px, 1px, 1px);
}

.button {
	padding: 12px 24px;
	border-radius: 4px;
	border: 0;
	font-size: .8125rem;
	font-family: SFS, Arial, sans-serif;
	color: white;
	background-color: #D8DDE6;
	cursor: pointer;
    background-image: none !important;
}

/* Style a link to look like a button */
a.button {
	display: inline-block;
	box-sizing: border-box;
	text-align: center;
}

a.primary, a.primary:link, a.primary:visited, a.primary:hover, a.primary:active {
	color: white;
}

a.secondary, a.secondary:link, a.secondary:primary, a.secondary:hover, a.secondary:active {
	color: #0070d2;
}

button#password-button:disabled {
	cursor: default;
}

.fiftyfifty {
	width: 48%;
}

.error {
	color: #CF4F43;
}


.errorcode {
	font-size:10px;
	color: #54698d; /* Color for labels */
}


.primary {
	background-color: #0070d2;
	color: white;
	transition: all 0.1s;
	border: 1px solid transparent;
}

.primary:hover, .primary:focus {
	background-color: #005fb2;
}

.secondary {
	background-color: #ffffff;
	border: 1px solid #969492;
	color: #0070d2 !important;
}

.secondary:hover {
	background-color: #F4F6F9;
}

.wide {
	width: 100%;
}

.right {
	float:right;
}

/* Inputs */

input {
	height: auto !important;
}

input#answer {
    margin-top: 8px;
}

input.input,
select.input,
input.answer-input.input,
input.password-input.input {
	border: 1px solid #969492;
	border-radius: 4px;
	border-image-source: initial;
	border-image-slice: initial;
	border-image-width: initial;
	border-image-outset: initial;
	border-image-repeat: initial;
	background-color: #fff;
	font-family: SFS, Arial, sans-serif;
	box-sizing: border-box;
	-webkit-appearance: none;
	font-size: .8125rem;
	transition: all 0.1s;
}

.input {
	padding: 12px;
}

.password-input {
	padding: 12px !important;
}

.answer-input {
	padding: 12px !important;
}

select.input#question {
	padding: 12px 40px;
	background-image: url('/img/disclosure.gif');
	background-repeat: no-repeat;
	background-position: 14px 14px;
}

.input:focus { 
	background-color: #ffffff;
	border: 1px solid #1589ee;
	outline: 0;
	box-shadow: 0 0 3px #0070D2;
}

input[type="checkbox"] {
	width: auto;
}

input.twofactor {
	background-image: url('/img/keys.png');
	background-repeat: no-repeat;
	background-position: 12px, 12px;
	background-size: 14px 18px;
	padding: 12px 40px;
}

input.error {
	border: 1px solid #C23934;
}

input[type="radio"] {
	margin-right: 12px;
	margin-bottom: 12px;
}

/* Removes native iOS button styling */
input[type='submit'] {
	-webkit-appearance: none;
}

input[type='button'] {
	-webkit-appearance: none;
}

.tablewrapper {
	margin: 0px;
	padding: 0px;
	height: 100%;
	width: 100%;
}

.username {
	display: block;
}

.password {
	display: block;
}

input.answer-input:focus,
input.password-input:focus {
	background-color: #ffffff;
	border: 1px solid #1589ee;	
	outline: 0;
}


.password-wrapper {
	position: relative;
	background: #FFF;
}

.password-message {
	display: block;
	line-height: 45px;
	font-size:10px;
	padding: 0 10px;
	pointer-events: none;
	position: absolute;
	right: 0;
	top: 0;
}

html[dir="rtl"] .password-message {
	right: auto;
	left: 0;
}

.password-none {
	border: 1px solid #1589ee;
}

.password-none-color {
	color: #16325c;
}


input.password-input.password-weak,
input.password-input.password-weak:focus {
	border:1px solid #C23934;
}

.password-weak-color {
	color: #CF4F43;
}

input.password-input.password-good,
input.password-input.password-good:focus {
	border:1px solid #4bca81;
}

.password-good-color {
	color: green;
}

.password-focus {
	border: 1px solid #1589ee;
}

.password-strong {

}

.twofactor-input {
	background-image: url('/img/iconCode.png');
	background-repeat: no-repeat;
	background-position: 12px, 12px;
	background-size: 14px 18px;
	padding: 12px 40px;
}

.phone-input {
	background-image: url('/img/iconPhone.png');
	background-repeat: no-repeat;
	background-position: 12px, 12px;
	background-size: 14px 18px;
	padding: 12px 40px;
}

.clear-input {
	background-image: url('/img/iconClear.png');
	background-repeat: no-repeat;
	background-position: 12px, 12px;
	background-size: 14px 18px;
	padding: 12px 40px;
}

#wrapper {
	padding: 20px 0px 0px 0px;
	margin-top: 0px;
	margin-bottom: 0px;
	margin-left: auto;
	margin-right: auto;
	max-width: 380px;
	-moz-transition: all 0.25s;
	-webkit-transition: all 0.25s;
	-o-transition: all 0.25s;
	transition: all 0.25s;
}

.standard_logo_wrapper {
	height: 113px;
	overflow: hidden;
	width: 180px;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
    display: table;
}

.standard_logo {
	margin-left: auto;
	margin-right: auto;
	vertical-align: middle;
	max-width: 180px;
	max-height: 113px;
}

#header {
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	font-size: 1.5rem;
	font-family: SFSLight, Arial, sans-serif;
	display: block;
}

#wrap {
    min-height: 100%;
}

#main {
    overflow:auto;
    padding-bottom: 48px;
}  /* padding is footer height plus an extra 24px of spacing */

#footer {
    position: relative;
    margin-top: -24px; /* negative value of footer height */
    height: 24px;
    width: 100%;
    clear:both;
    text-align: center;
    font-size: .75rem;
}

#content {
	margin: 0px auto;
	padding: 1.25rem;
	border-radius: 0.25rem;
	border: 1px solid #D8DDE6;
	color: #16325c;
}

p.large {
	font-size: 1.125rem;
	font-family: SFSLight, Arial, sans-serif;
}

.important {
   font-weight: bold;
}

.wordwrap {
	word-wrap: break-word;
}

.nowrap {
    white-space: nowrap;
}
/* Login page sections */

#left {
	display: table-cell;
	height: 100%;
}

#right {
	display: table-cell;
	vertical-align: top;
	background-color: #D8DDE6;
	width: 50%;
	height: 100%;
	color: rgba(255, 255, 255, 0.6);
}

#right iframe {
	width: 100%;
	height: 100%;
	overflow: hidden;
	border: none;
	float: right;
}

.container {
	border: 1px solid #D8DDE6;
	padding: 20px;
	border-radius: 4px;
	color: #16325c;
}

/* Login form */

#pwcaps {
	font-size: 12px;
	color: #54698d;
	margin-top: -8px;
}

#pwcapsicon {
	margin-right: 8px;
}

.inputgroup {
	position: relative;
}

.loginError {
	color: #C23934;
	margin-bottom: 14px;
	font-size: 12px;
}

#idcard-container {
	background-color: #ffffff;
	border: 1px solid #969492;
	padding: 2px;
	border-radius: 4px;
}

#idcard {
	padding: 3px;
	border-radius: 4px;
	position: relative;
}

#idcard-identity {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	position: absolute;
	left: 43px;
	right: 36px;
	line-height: 32px;
}

.avatar {
	width: 24px;
	height: 24px;
	border-radius: 24px;
	vertical-align: middle;
	margin-right: 8px;
	padding: 4px;
	display: inline-block;
}

.clearlink {
	margin-right: 8px;
	margin-top: 8px;
	float: right;
}

.clearicon {
	width: 16px;
	height: 16px;
	cursor: hand;
}

/* Login hint editing */

.nonscrollable {
	border-bottom: 1px solid #D8DDE6;
	border-radius: 4px;
	border-top: 1px solid #D8DDE6;
}

#manager ul {
	margin: 0;
	padding: 0;
}

#manager li {
	list-style-type: none;
	padding: 12px;
	font-size: 14px;
	border-left: 1px solid #D8DDE6;
	border-right: 1px solid #D8DDE6;
	border-bottom: 1px solid #f4f6f9;
	position: relative;
}

#manager li:hover, #manager li:focus {
	background-color:#f4f6f9;
}

#manager span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: absolute;
    left: 68px;
    right: 36px;
    line-height: 32px;
}

.hintclearlink {
	margin-top: 8px;
	float: right;
}

.hintclearicon {
	width: 16px;
	height: 16px;
	cursor: hand;
}

/* Login hint chooser */

#chooser ul {
	margin: 0;
	padding: 0;
}

#chooser li {
	list-style-type: none;
	font-size:14px;
	border-left:1px solid #D8DDE6;
	border-right:1px solid #D8DDE6;
	border-bottom:1px solid #f4f6f9;
	margin-bottom:0px;
	position: relative;
}

#chooser li a:hover, #chooser li a:focus {
	background-color: #f4f6f9;
}

#idlist span {
	overflow: hidden;
	white-space: nowrap;
    text-overflow: ellipsis;
    position: absolute;
    left: 68px; 
    right: 12px;
    line-height: 32px;
}

#idlist a {
	color: #16325c;
	width: 100%;
	height: 100%;
	text-decoration: none;
	display: block;
	padding: 12px;
	font-size: 12px;
	box-sizing: border-box;
}

.thumbnail, .thumbnail_img, .thumbnail_div {
	width:32px;
	height:32px;
	border-radius:32px;
	vertical-align:middle;
	margin-right:8px;
	display:inline-block;
}

.thumbll_icon {
	position:absolute;
	width:20px;
	height:20px;
	left:30px;
	top:30px;
}

.scrollable {
	border-bottom:1px solid #D8DDE6;
	border-radius: 4px;
	border-top:1px solid #D8DDE6;
	max-height: 200px;
	overflow: auto;
}

.activity {
	width:8px;
	border-radius:0px;
	vertical-align:middle;
	margin-right:8px;
}

/* Login page IDP styling */

#or_use_idp {
    font-size: 16px;
    font-family: SFSLight, Arial, sans-serif;
}

#idp_section_buttons .thumbnail, #idp_section_chooser .thumbnail {
    border-radius: 4px;
}

/* button should be the same height with or without a logo */
#idp_section_buttons button {
	min-height: 50px;
	word-wrap: break-word;
    padding: 8px 20px;
    text-align: left; /* because button elements default to center */
}

#idp_chooser ul {
    margin: 0;
    padding: 0;
}

#idp_chooser li {
    list-style-type: none;
    font-size:16px;
    border-left:1px solid #D8DDE6;
    border-right:1px solid #D8DDE6;
    border-bottom:1px solid #f4f6f9;
    margin-bottom: 0px;
}

#idp_chooser li a:hover {
    background-color:#f4f6f9;
}

#idp_chooser li a:focus {
    background-color:#f4f6f9;
}

#idplist a {
    color: #16325c;
    text-decoration: none;
    display: block;
    padding: 12px;
    font-size: 14px;
    word-wrap: break-word;
}

#idpscrollable {
    border-bottom:1px solid #D8DDE6;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top:1px solid #D8DDE6;
    max-height:190px;
    overflow: auto;
}

#idp_search {
    background-image: url('/img/grey_magnifier.png');
    background-repeat: no-repeat;
    background-position: 15px 12px;
    background-size: 16px 19px;
    padding: 12px 12px 12px 44px;
    border-bottom: 0px;
    background-color: #ffffff;
}

#idp_search:focus {
    border-bottom:0px;
    background-color: #ffffff;
    border: 1px solid #1589ee;  
    outline: 0;
    box-shadow: 0 0 3px #0070D2; 
}

fieldset.borderless {
    border: 0;
    padding: 0 0 0 0;
    margin: 0;
    min-width: 0;
}

@media only screen and (max-width: 1024px) {
	#left {
		width: 100%;
	}
	
	#right {
		display: none;
	}
}
	
@media only screen and (max-width: 480px) {
	#wrapper {
		max-width: 100%;
		margin-left: inherit;
		left: inherit;
		padding-top: 20px !important;
	}
	
	#content {
		border-left: 0px;
		border-right: 0px;
		border-radius: 0px;
	}
	
	.button {
		font-size: 1rem;
	}
	
	.label, .small, #footer {
		font-size: .875rem;
	}
	
	/* font must be at least 16px to prevent auto-zooming on iOS devices */
	input.input {
	    font-size: 1rem;
	}
}

@media only screen and (min-height: 1200px) {
	#wrapper {
	   padding-top: 240px;
	}
}
@media only screen and (max-height: 1200px) {
    #wrapper {
        padding-top: 180px;
    }
}
@media only screen and (max-height: 1000px) {
    #wrapper {
        padding-top: 140px;
    }
}
@media only screen and (max-height: 900px) {
    #wrapper {
        padding-top: 100px;
    }
}
@media only screen and (max-height: 736px) {
    #wrapper {
        padding-top: 60px;
    }
}
@media only screen and (max-height: 670px) {
    #wrapper {
        padding-top: 40px;
    }
}
@media only screen and (max-height: 610px) {
	#wrapper {
	   padding-top: 20px;
	}
}t--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}body .is-layout-grid{display: grid;}body .is-layout-grid > *{margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}
:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}
</style>
<link rel='stylesheet' id='fvp-frontend-css' href='https://www.iab.com/wp-content/plugins/featured-video-plus/styles/frontend.css?ver=7.0.2' type='text/css' media='all' />
<link rel='stylesheet' id='menu-image-css' href='https://www.iab.com/wp-content/plugins/menu-image/includes/css/menu-image.css?ver=7.0.2' type='text/css' media='all' />
<link rel='stylesheet' id='dashicons-css' href='https://www.iab.com/wp-includes/css/dashicons.min.css?ver=7.0.2' type='text/css' media='all' />
<link rel='stylesheet' id='woocommerce-general-css' href='https://www.iab.com/wp-content/plugins/woocommerce/assets/css/woocommerce.css?ver=7.0.2' type='text/css' media='all' />
<style id='woocommerce-inline-inline-css' type='text/css'>
.woocommerce form .form-row .required { visibility: visible; }
</style>
<link rel='stylesheet' id='wp-smart-crop-renderer-css' href='https://www.iab.com/wp-content/plugins/wp-smartcrop/css/image-renderer.css?ver=7.0.2' type='text/css' media='all' />
<link rel='stylesheet' id='font-awesome_style-css' href='//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css?ver=6.3.2' type='text/css' media='all' />
<link rel='stylesheet' id='uikit-css-css' href='https://cdn.jsdelivr.net/npm/uikit@3.6.15/dist/css/uikit.min.css?ver=6.3.2' type='text/css' media='all' />
<link rel='stylesheet' id='font-face-css' href='https://www.iab.com/wp-content/themes/iab/lib-browser/fonts/futura/stylesheet.css?ver=7.0.2' type='text/css' media='all' />
<link rel='stylesheet' id='iab-font-icons-css' href='https://www.iab.com/wp-content/themes/iab/assets/img/icons/redesign/font/style.css?ver=7.0.2' type='text/css' media='all' />
<link rel='stylesheet' id='swiper-css-css' href='https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/css/swiper.min.css?ver=4.4.6' type='text/css' media='all' />
<link rel='stylesheet' id='dialog-polyfill-css' href='https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.5.3/dialog-polyfill.min.css?ver=0.5.3' type='text/css' media='all' />
<link rel='stylesheet' id='dialog-polyfill-init-css' href='https://www.iab.com/wp-content/themes/iab/assets/js/polyfill/init-dialog-polyfill.css?ver=7.0.2' type='text/css' media='all' />
<link rel='stylesheet' id='elasticpress-facets-css' href='https://www.iab.com/wp-content/plugins/elasticpress/dist/css/facets-styles.css?ver=7.0.2' type='text/css' media='all' />
<link rel='stylesheet' id='iab_css-css' href='https://www.iab.com/wp-content/themes/iab/assets/css/main.min.css?459adadd4c75fafbf4f5e91e20e5ca70' type='text/css' media='all' />
<link rel='stylesheet' id='iab_custom_styles-css' href='https://www.iab.com/wp-content/themes/iab/assets/css/custom_styles.css?var=24-16-01-06-58-13' type='text/css' media='all' />
<link rel='stylesheet' id='iab_font_preview-css' href='https://www.iab.com/wp-content/themes/iab/assets/css/font_styles.css?var=24-01-16-06-58-13' type='text/css' media='all' />
<script type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js' id='jquery-js'></script>
<script>window.jQuery || document.write('<script src="https://www.iab.com/wp-content/themes/iab/assets/vendor/jquery/dist/jquery.min.js?2.1.1"><\/script>')</script>
<script type='text/javascript' src='https://www.iab.com/wp-content/plugins/wsi/js/jQueryTools/jquery.tools.min.wp-front.v3.js?ver=6.3.2' id='jquery.tools.front-js'></script>
<script type='text/javascript' src='https://www.iab.com/wp-content/plugins/featured-video-plus/js/jquery.fitvids.min.js?ver=master-2015-08' id='jquery.fitvids-js'></script>
<script type='text/javascript' id='fvp-frontend-js-extra'>
/* <![CDATA[ */
var fvpdata = {"ajaxurl":"https:\/\/www.iab.com\/wp-admin\/admin-ajax.php","nonce":"3bba17befe","fitvids":"1","dynamic":"","overlay":"","opacity":"0.75","color":"b","width":"640"};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.iab.com/wp-content/plugins/featured-video-plus/js/frontend.min.js?ver=2.3.3' id='fvp-frontend-js'></script>
<script type='text/javascript' defer='defer' src='https://www.iab.com/wp-content/plugins/gravityforms/js/jquery.json.min.js?ver=2.7.13' id='gform_json-js'></script>
<script type='text/javascript' id='gform_gravityforms-js-extra'>
/* <![CDATA[ */
var gf_global = {"gf_currency_config":{"name":"U.S. Dollar","symbol_left":"$","symbol_right":"","symbol_padding":"","thousand_separator":",","decimal_separator":".","decimals":2,"code":"USD"},"base_url":"https:\/\/www.iab.com\/wp-content\/plugins\/gravityforms","number_formats":[],"spinnerUrl":"https:\/\/www.iab.com\/wp-content\/plugins\/gravityforms\/images\/spinner.svg","version_hash":"bcae1cc9919220e4c8cb20778ab15a19","strings":{"newRowAdded":"New row added.","rowRemoved":"Row removed","formSaved":"The form has been saved.  The content contains the link to return and complete the form."}};
var gform_i18n = {"datepicker":{"days":{"monday":"Mo","tuesday":"Tu","wednesday":"We","thursday":"Th","friday":"Fr","saturday":"Sa","sunday":"Su"},"months":{"january":"January","february":"February","march":"March","april":"April","may":"May","june":"June","july":"July","august":"August","september":"September","october":"October","november":"November","december":"December"},"firstDay":0,"iconText":"Select date"}};
var gf_legacy_multi = {"1":"1"};
var gform_gravityforms = {"strings":{"invalid_file_extension":"This type of file is not allowed. Must be one of the following:","delete_file":"Delete this file","in_progress":"in progress","file_exceeds_limit":"File exceeds size limit","illegal_extension":"This type of file is not allowed.","max_reached":"Maximum number of files reached","unknown_error":"There was a problem while saving the file on the server","currently_uploading":"Please wait for the uploading to complete","cancel":"Cancel","cancel_upload":"Cancel this upload","cancelled":"Cancelled"},"vars":{"images_url":"https:\/\/www.iab.com\/wp-content\/plugins\/gravityforms\/images"}};
/* ]]> */
</script>
<script id="gform_gravityforms-js-before" type="text/javascript">

</script>
<script type='text/javascript' defer='defer' src='https://www.iab.com/wp-content/plugins/gravityforms/js/gravityforms.min.js?ver=2.7.13' id='gform_gravityforms-js'></script>
<script type='text/javascript' defer='defer' src='https://www.iab.com/wp-content/plugins/gravityforms/assets/js/dist/utils.min.js?ver=59d951b75d934ae23e0ea7f9776264aa' id='gform_gravityforms_utils-js'></script>
<script type='text/javascript' src='https://cdn.jsdelivr.net/npm/uikit@3.6.15/dist/js/uikit.min.js?ver=6.3.2' id='uikit-js-js'></script>
<script type='text/javascript' src='https://cdn.jsdelivr.net/npm/uikit@3.6.15/dist/js/uikit-icons.min.js?ver=6.3.2' id='uikit-icons-js-js'></script>
<script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/mustache.js/4.1.0/mustache.min.js?ver=6.3.2' id='mustache_js-js'></script>
<script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/ramda/0.27.1/ramda.min.js?ver=6.3.2' id='ramda_js-js'></script>
<script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.2.10/iframeResizer.contentWindow.min.js?ver=6.3.2' id='iframe_resizer_remote-js'></script>
<script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.2.10/iframeResizer.min.js?ver=6.3.2' id='iframe_resizer_local-js'></script>
<script type='text/javascript' src='https://www.iab.com/wp-content/themes/iab/assets/js/init-iframe-resizer.js?ver=6.3.2' id='iframe_resizer_init-js'></script>
<script type='text/javascript' src='https://www.iab.com/wp-content/themes/iab/assets/js/widget-autoloader.js?ver=6.3.2' id='widget_autoloader_js-js'></script>
<link rel="https://api.w.org/" href="https://www.iab.com/wp-json/" /><link rel="alternate" type="application/json" href="https://www.iab.com/wp-json/wp/v2/pages/4" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://www.iab.com/xmlrpc.php?rsd" />
<link rel='shortlink' href='https://www.iab.com/' />
<link rel="alternate" type="application/json+oembed" href="https://www.iab.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.iab.com%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://www.iab.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.iab.com%2F&#038;format=xml" />
			<!-- DO NOT COPY THIS SNIPPET! Start of Page Analytics Tracking for HubSpot WordPress plugin v10.2.3-->
			<script type="text/javascript" class="hsq-set-content-id" data-content-id="standard-page">
				var _hsq = _hsq || [];
				_hsq.push(["setContentType", "standard-page"]);
			</script>
			<!-- DO NOT COPY THIS SNIPPET! End of Page Analytics Tracking for HubSpot WordPress plugin -->
			<meta name="google-site-verification" content="08-GtJKPFibb9O2BISsf-IkC3QgHVXSpGpnbfny1Dak" />	<noscript><style>.woocommerce-product-gallery{ opacity: 1 !important; }</style></noscript>
	<style type="text/css">.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}</style></head>
<body class="home page-template page-template-page-home page-template-page-home-php page page-id-4 theme-iab woocommerce-no-js">
	<dialog id="error-dialog">
  <button id="error-close">
    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line></svg>
  </button>
  <div class="error-dialog-body">
    <span style="color: gray;" uk-icon="icon: warning; ratio: 2.6;"></span>
    <span>There was an unexpected error authorizing you. Please try again.</span>
  </div>
  <button type="button" id="error-close-button" class="uk-button primary-button-red-small">
    Close
  </button>
</dialog>
<style>
  #error-dialog {
    background: white;
    border: 1px solid #dadada;
    z-index: 9999999;
    top: 25%;
    min-width: 300px;
    max-width: 400px;
    border-radius: 5px;
  }
  #error-dialog #error-close {
    float: right;
    border: none;
    background-color: transparent;
    outline: none;
  }
  #error-dialog #error-close-button {
    width: 100%;
  }
  .error-dialog-body {
    margin: 40px 0px 30px 0px;
    padding: 1rem;
    padding-top: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
</style>

		
  <!--[if lt IE 8]>
    <div class="alert alert-warning">
      You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.    </div>
  <![endif]-->

  <svg style="display: none;"><symbol viewBox="0 0 118.3 62.7" id="icon-arrow-down"><title>arrow-down</title><path d="M118.3 7.3L111.4 0 59.1 49 6.8 0 0 7.3l59.1 55.4z"/></symbol><symbol viewBox="0 0 62.7 118.3" id="icon-arrow-left"><title>arrow-left</title><path d="M55.4 118.3l7.3-6.9-49-52.3 49-52.3L55.4 0 0 59.1z"/></symbol><symbol viewBox="0 0 62.7 118.3" id="icon-arrow-right"><title>arrow-right</title><path d="M7.3 118.3L0 111.4l49-52.3L0 6.8 7.3 0l55.4 59.1z"/></symbol><symbol viewBox="0 0 118.3 62.7" id="icon-arrow-up"><title>arrow-up</title><path d="M0 55.4l6.8 7.3 52.3-49 52.3 49 6.9-7.3L59.1 0z"/></symbol><symbol viewBox="0 0 150.5 108.4" id="icon-bio"><title>bio</title><path d="M0 0h150.5v24.1H0V0zm0 42.1h150.5v24.1H0V42.1zm0 42.2h96.3v24.1H0V84.3z" fill-rule="evenodd" clip-rule="evenodd"/></symbol><symbol viewBox="0 0 108.4 108.4" id="icon-circle"><title>circle</title><circle cx="54.2" cy="54.2" r="54.2"/></symbol><symbol viewBox="0 0 108.4 108.4" id="icon-close"><title>close</title><path d="M104.68 108.322L.03 3.672l3.675-3.68 104.65 104.65zm-100.983-.004L.02 104.64 104.67-.01l3.678 3.677z"/></symbol><symbol viewBox="0 0 55.2 109.8" id="icon-download"><title>download</title><path d="M2.7 76.2s48.3.1 49.8 0c2.4-.1 3.6 2.4 2 4.4-2.3 2.7-24.2 27.1-25.5 28.4-1.3 1.3-2.9.9-3.9 0-1-1-23.8-27.7-24.7-28.5s-.5-4.3 2.3-4.3zM22.3 70.2V2.1C22.3 1 23.4 0 24.7 0h5.7c1.3 0 2.4.9 2.4 2.1v68.1"/></symbol><symbol viewBox="0 0 47.1 97.6" id="icon-facebook"><title>facebook</title><path d="M0 32.3h10.1v-9.8c0-4.3.1-11 3.3-15.1C16.6 3 21.2 0 29 0c12.7 0 18.1 1.8 18.1 1.8l-2.5 14.9s-4.2-1.2-8.1-1.2c-3.9 0-7.4 1.4-7.4 5.3v11.4h16.1L44 46.9H29v50.7H10.1V46.9H0V32.3z"/></symbol><symbol viewBox="0 0 76.4 79.2" id="icon-gplus"><title>gplus</title> <g> <path d="M24.1,35.8c0,0.1,0,0.3,0,0.4c0,2.9,0,9.3,0,9.3s12.3,0,12.9,0c0,1-1.1,4.8-4.7,7.3c-2.1,1.4-4.5,2.1-7,2.3
		c-1.8,0.1-3.5-0.1-5.2-0.6c-5.4-1.7-9.4-6.6-10-12.6c-0.1-1.5,0-2.9,0.3-4.4c1.6-7,8.3-12.2,15.9-11.1c3.4,0.5,5.3,1.9,7.1,3.4
		c2.3-2.3,4.6-4.6,7-7c-0.6-0.4-1.9-1.8-4.3-3.1c-3.5-2-7.4-3.1-11.5-3.1c-0.8,0-1.5,0-2.3,0.1c-1.4,0.1-2.7,0.3-4,0.6
		c-5.2,1.3-9.6,4.1-13,8.3c-3.3,4-5,8.6-5.3,13.8c-0.1,2.2,0,4.4,0.5,6.5c1.4,6,4.5,10.8,9.4,14.4c3.8,2.8,8.2,4.3,12.9,4.6
		c2.7,0.1,5.3-0.1,7.9-0.8c4.8-1.3,8.9-3.8,11.9-7.8c4.4-5.8,5.4-13.3,4.1-20.4C39.2,35.8,31.7,35.8,24.1,35.8z"/> <polygon points="76,36.1 67.9,36.1 67.9,27.9 67.9,27.6 67.6,27.6 61.5,27.6 61.3,27.6 61.3,27.9 61.3,36.1 53.1,36.1 52.8,36.1 
		52.8,36.3 52.8,42.4 52.8,42.7 53.1,42.7 61.3,42.7 61.3,50.9 61.3,51.1 61.5,51.1 67.6,51.1 67.9,51.1 67.9,50.9 67.9,42.7 
		76,42.7 76.3,42.7 76.3,42.4 76.3,36.3 76.3,36.1 	"/> </g> </symbol><symbol viewBox="0 0 77.3 77.3" id="icon-instagram"><title>instagram</title> <style type="text/css"> .st0{fill-rule:evenodd;clip-rule:evenodd;} </style> <g> <g> <path class="st0" d="M63.6,38.7c0-13.8-11.2-24.9-24.9-24.9c-13.8,0-24.9,11.2-24.9,24.9c0,13.8,11.2,24.9,24.9,24.9
			C52.4,63.6,63.6,52.4,63.6,38.7L63.6,38.7z M63.1,10.3c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4
			C67.1,12.1,65.3,10.3,63.1,10.3L63.1,10.3z M18.3,4.6H59c7.6,0,13.7,6.2,13.7,13.7V59c0,7.6-6.2,13.7-13.7,13.7H18.3
			c-7.5,0-13.7-6.2-13.7-13.7V18.3C4.6,10.7,10.7,4.6,18.3,4.6L18.3,4.6z M59,0H18.3C8.2,0,0,8.2,0,18.3V59
			c0,10.1,8.2,18.3,18.3,18.3H59c10.1,0,18.3-8.2,18.3-18.3V18.3C77.3,8.2,69.1,0,59,0L59,0z M18.9,38.7c0-10.9,8.8-19.8,19.8-19.8
			s19.8,8.8,19.8,19.8c0,10.9-8.8,19.8-19.8,19.8S18.9,49.6,18.9,38.7L18.9,38.7z"/> </g> </g> </symbol><symbol viewBox="0 0 80.2 73.7" id="icon-linkedin"><title>linkedin</title><path d="M17.7 73.7H2v-50h15.6v50zM9.4 17.4h-.1C3.7 17.4 0 13.5 0 8.7 0 3.7 3.8 0 9.6 0s9.3 3.7 9.4 8.7c0 4.8-3.7 8.7-9.6 8.7zm70.8 56.3H62.5V47.8c0-6.8-2.8-11.4-8.9-11.4-4.7 0-7.3 3.1-8.5 6.1-.5 1.1-.4 2.6-.4 4.1v27.1H27.2s.2-45.9 0-50h17.6v7.9c1-3.4 6.6-8.3 15.6-8.3 11.1 0 19.8 7.2 19.8 22.7v27.7z"/></symbol><symbol viewBox="0 0 165 97.3" id="icon-mail"><title>mail</title><path d="M2.4 10.8l79.2 50.5 80.9-50.5s-4.2-8.3-14.2-7.6C129.5 4.4 6.5-3 2.4 10.8zM155 97.3H10c-5.5 0-10-4.5-10-10V10C0 4.5 4.5 0 10 0h145c5.5 0 10 4.5 10 10v77.3c0 5.5-4.5 10-10 10zm3-14.8V14.8c0-5.5-2.5-8-8-8H15c-5.5 0-8 2.5-8 8v67.7c0 5.5 2.5 8 8 8h135c5.5 0 8-2.5 8-8z" fill-rule="evenodd" clip-rule="evenodd"/></symbol><symbol viewBox="0 0 142.9 102.9" id="icon-menu"><title>menu</title><path d="M0 0h142.9v17H0zm0 42.9h142.9v17H0zm0 42.9h142.9v17H0z"/></symbol><symbol viewBox="0 0 79.8 121.6" id="icon-phone"><title>phone</title><path d="M43 93.1c3.8 2.1 13.8-6.8 15.6-7.5s4-.1 7.2 3.5 13.7 16.2 13.9 18c.2 1.8-2.9 13.9-18.9 14.6-16 .7-36.2-11.9-51.4-44.5s-10-64.3.8-71.7S31.7-.4 32.5 2.6c.8 3 5.2 24.8 4.9 26.9s-1 2.6-6.2 4.6-13.7 1.9-13 10.2C19 52.5 32.5 87.2 43 93.1z"/></symbol><symbol viewBox="0 0 52.2 111.4" id="icon-play"><title>play</title><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0l52.2 55.7L0 111.4V0z"/></symbol><symbol viewBox="0 0 102 103.8" id="icon-search"><title>search</title><path d="M86 43c0 23.7-19.3 43-43 43S0 66.7 0 43 19.3 0 43 0s43 19.3 43 43zM43 7C23.1 7 7 23.1 7 43s16.1 36 36 36 36-16.1 36-36S62.9 7 43 7zm57.6 89.9l-5.4 5.4c-1.9 2-5.1 2-7.1 0L65.6 80c-2-1.9-2-5.1 0-7.1l5.4-5.4c1.9-2 5.1-2 7.1 0l22.5 22.3c1.9 1.9 1.9 5.1 0 7.1z"/></symbol><symbol viewBox="0 0 107.7 118.3" id="icon-share"><title>share</title><circle cx="87.7" cy="20.1" r="20.1"/><circle cx="87.7" cy="98.3" r="20.1"/><circle cx="20.1" cy="57.9" r="20.1"/><path d="M14.66 58.65L92.6 15.89l2.692 4.91-77.938 42.76zm-1.816-7.133L88.72 97.842l-2.918 4.78L9.926 56.296z"/></symbol><symbol viewBox="0 0 108.8 108.8" id="icon-spinner"><title>spinner</title><path d="M54.8 27.1c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1s1 .4 1 1v25.1c0 .6-.5 1-1 1zm-20.1 8c-.3 0-.5-.1-.7-.3L16.2 17.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l17.8 17.8c.4.4.4 1 0 1.4-.2.1-.4.2-.7.2zM26.1 55H1c-.6 0-1-.4-1-1s.4-1 1-1h25.1c.6 0 1 .4 1 1s-.4 1-1 1zm-9.7 37.8c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l17.8-17.8c.4-.4 1-.4 1.4 0s.4 1 0 1.4L17.1 92.5c-.2.2-.5.3-.7.3zm37.6 16c-.6 0-1-.4-1-1V82.6c0-.6.4-1 1-1s1 .4 1 1v25.1c0 .6-.5 1.1-1 1.1zm37.8-15.4c-.3 0-.5-.1-.7-.3L73.4 75.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l17.8 17.8c.4.4.4 1 0 1.4-.2.2-.5.3-.8.3zm16-37.6H82.6c-.6 0-1-.4-1-1s.4-1 1-1h25.1c.6 0 1 .4 1 1s-.4 1-.9 1zM74.6 35.7c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l17.8-17.8c.4-.4 1-.4 1.4 0s.4 1 0 1.4L75.3 35.4c-.2.2-.4.3-.7.3z"/></symbol><symbol viewBox="0 0 104.7 85.1" id="icon-twitter"><title>twitter</title><path d="M104.7 10.1c-3.9 1.7-8 2.9-12.3 3.4 4.4-2.7 7.8-6.9 9.4-11.9-4.1 2.4-8.7 4.2-13.6 5.2C84.3 2.6 78.7 0 72.5 0 60.7 0 51 9.6 51 21.5c0 1.7.2 3.3.6 4.9-17.9-.9-33.7-9.5-44.3-22.5-1.8 3.2-2.9 6.9-2.9 10.8 0 7.4 3.8 14 9.6 17.9-3.5-.1-6.8-1.1-9.7-2.7v.3c0 10.4 7.4 19.1 17.2 21.1-1.8.5-3.7.8-5.7.8-1.4 0-2.7-.1-4-.4 2.7 8.5 10.7 14.8 20.1 14.9-7.4 5.8-16.6 9.2-26.7 9.2-1.7 0-3.4-.1-5.1-.3 9.5 6.1 20.8 9.7 32.9 9.7 39.5 0 61.1-32.7 61.1-61.1 0-.9 0-1.9-.1-2.8 4.2-3.1 7.9-6.9 10.7-11.2"/></symbol><symbol viewBox="0 0 512 512" id="icon-youtube"><title>youtube</title><path d="M416 64H96c-52.8 0-96 43.2-96 96v192c0 52.8 43.2 96 96 96h320c52.8 0 96-43.2 96-96V160c0-52.8-43.2-96-96-96zM192 384V128l160 128-160 128z"/></symbol></svg>
  <div class="uk-container uk-container-expand uk-padding-remove" role="document">
    <header class="new-header" role="banner" uk-sticky="show-on-up: true; animation: uk-animation-slide-top; bottom: #bottom">
    <div class="clearfix">
                    <div class="navigation-top">
                <nav class="uk-navbar-container" uk-navbar>
                    <div class="uk-navbar-left">
                        <div class="uk-hidden mobile-navigation-top">
                            <a class="uk-navbar-toggle" href="#offcanvas-slide" uk-toggle>
                                <span class="menu-icon">
                                    <img src="https://www.iab.com/wp-content/themes/iab/lib-browser/img/icons/redesign/Hamburger.png" alt="Menu" />
                                </span>
                                <span class="menu-icon-close" style="display: none;">
                                    <img src="https://www.iab.com/wp-content/themes/iab/lib-browser/img/icons/redesign/Close.png" alt="Close" />
                                </span>
                            </a>
                            <div id="offcanvas-slide" uk-offcanvas="overlay: true">
                                                                    <div class="uk-offcanvas-bar">
                                        <ul id="primary_navigation" class="uk-nav uk-nav-default"><li class="dropdown menu-research-insights custom-link"><a class="dropdown-toggle" data-toggle="dropdown" data-target="#" tabindex="0" href="/insights/" class="fancybox">Research &#038; Insights <b class="caret"></b></a>
<ul class="dropdown-menu">
	<li class="dropdown menu-knowledge-center custom-link"><a href="/insights/" class="fancybox">Knowledge Center</a>
<ul class="dropdown-menu">
		<li class="menu-industry-research-insights custom-link"><a href="/research" class="fancybox">Industry Research &#038; Insights</a></li>
	</ul>
</li>
	<li class="menu-ad-spend-revenue custom-link"><a href="/topics/ad-revenue/?spend=1" class="fancybox">Ad Spend &#038; Revenue</a></li>
	<li class="menu-iab-pulse custom-link"><a href="https://www.iab.com/videos/iab-pulse/" class="fancybox">IAB PULSE</a></li>
	<li class="menu-iab-there custom-link"><a href="/videos/iab-there" class="fancybox">IAB THERE</a></li>
	<li class="menu-podcasts"><a href="https://www.iab.com/podcasts/" class="fancybox">Podcasts</a></li>
	<li class="menu-direct-brands-to-watch"><a href="https://www.iab.com/direct-brands-to-watch/" class="fancybox">Direct Brands to Watch</a></li>
</ul>
</li>
<li class="dropdown menu-initiatives custom-link"><a class="dropdown-toggle" data-toggle="dropdown" data-target="#" tabindex="0" class="fancybox">Initiatives <b class="caret"></b></a>
<ul class="dropdown-menu">
	<li class="menu-ad-net-zero"><a href="https://www.iab.com/iab-ad-net-zero/" class="fancybox">Ad Net Zero</a></li>
	<li class="menu-addressability custom-link"><a href="https://www.iab.com/topics/addressability/" class="fancybox">Addressability</a></li>
	<li class="menu-audio custom-link"><a href="https://www.iab.com/topics/audio/" class="fancybox">Audio</a></li>
	<li class="menu-brand-disruption custom-link"><a href="https://www.iab.com/topics/brands/" class="fancybox">Brand Disruption</a></li>
	<li class="menu-brand-safety custom-link"><a href="https://www.iab.com/topics/brand-safety/" class="fancybox">Brand Safety</a></li>
	<li class="menu-consumers custom-link"><a href="https://www.iab.com/topics/consumers/" class="fancybox">Consumers</a></li>
	<li class="menu-digital-video custom-link"><a href="https://www.iab.com/topics/digital-video/" class="fancybox">Digital Video</a></li>
	<li class="menu-measurement custom-link"><a href="https://www.iab.com/topics/measurement/" class="fancybox">Measurement</a></li>
	<li class="menu-privacy custom-link"><a href="https://www.iab.com/topics/privacy/" class="fancybox">Privacy</a></li>
	<li class="menu-state-of-data custom-link"><a href="https://www.iab.com/topics/state-of-data" class="fancybox">State of Data</a></li>
</ul>
</li>
<li class="dropdown menu-standards-guidelines custom-link"><a class="dropdown-toggle" data-toggle="dropdown" data-target="#" tabindex="0" href="/guidelines/" class="fancybox">Standards &#038; Guidelines <b class="caret"></b></a>
<ul class="dropdown-menu">
	<li class="menu-ad-products custom-link"><a href="https://www.iab.com/iab_guideline_type/ad-products/" class="fancybox">Ad Products</a></li>
	<li class="menu-ad-technology custom-link"><a href="https://www.iab.com/iab_guideline_type/ad-technology/" class="fancybox">Ad Technology</a></li>
	<li class="menu-audio-video custom-link"><a href="https://www.iab.com/iab_guideline_type/audio-video/" class="fancybox">Audio &#038; Video</a></li>
	<li class="menu-measurement custom-link"><a href="https://www.iab.com/iab_guideline_type/measurement/" class="fancybox">Measurement</a></li>
	<li class="menu-mobile custom-link"><a href="https://www.iab.com/iab_guideline_type/mobile/" class="fancybox">Mobile</a></li>
	<li class="menu-programmatic custom-link"><a href="https://www.iab.com/iab_guideline_type/programmatic/" class="fancybox">Programmatic</a></li>
	<li class="menu-terms-conditions custom-link"><a href="https://www.iab.com/iab_guideline_type/terms-conditions/" class="fancybox">Terms &#038; Conditions</a></li>
	<li class="menu-iab-tech-lab custom-link"><a href="https://www.iabtechlab.com" class="fancybox">IAB Tech Lab</a></li>
</ul>
</li>
<li class="dropdown menu-advocacy custom-link"><a class="dropdown-toggle" data-toggle="dropdown" data-target="#" tabindex="0" class="fancybox">Advocacy <b class="caret"></b></a>
<ul class="dropdown-menu">
	<li class="menu-public-policy custom-link"><a href="/topics/public-policy" class="fancybox">Public Policy</a></li>
	<li class="menu-legal-compliance custom-link"><a href="/topics/legal-affairs/" class="fancybox">Legal &#038; Compliance</a></li>
	<li class="menu-ccpa custom-link"><a href="/topics/ccpa" class="fancybox">CCPA</a></li>
</ul>
</li>
<li class="dropdown menu-events custom-link"><a class="dropdown-toggle" data-toggle="dropdown" data-target="#" tabindex="0" href="/events/" class="fancybox">Events <b class="caret"></b></a>
<ul class="dropdown-menu">
	<li class="menu-conferences custom-link"><a href="/events/?type=conferences" class="fancybox">Conferences</a></li>
	<li class="menu-professional-development custom-link"><a href="/events/?type=training/" class="fancybox">Professional Development</a></li>
	<li class="menu-online-events custom-link"><a href="/events/?type=online" class="fancybox">Online Events</a></li>
	<li class="menu-iab-international-events"><a href="https://www.iab.com/iab-international-events/" class="fancybox">IAB International Events</a></li>
</ul>
</li>
<li class="dropdown menu-training-development custom-link"><a class="dropdown-toggle" data-toggle="dropdown" data-target="#" tabindex="0" href="/training-certification/" class="fancybox">Training &#038; Development <b class="caret"></b></a>
<ul class="dropdown-menu">
	<li class="menu-training custom-link"><a href="/training-certification/#training" class="fancybox">Training</a></li>
	<li class="menu-certification custom-link"><a href="/training-certification/#certification" class="fancybox">Certification</a></li>
	<li class="menu-recertification custom-link"><a href="/recertification" class="fancybox">Recertification</a></li>
	<li class="menu-corporate custom-link"><a href="/corporate-training/" class="fancybox">Corporate</a></li>
	<li class="menu-preferred-training-partners custom-link"><a href="https://www.iab.com/training-certification/#partners" class="fancybox">Preferred Training Partners</a></li>
	<li class="menu-resources custom-link"><a href="/training-certification/#resources" class="fancybox">Resources</a></li>
	<li class="menu-store custom-link"><a href="/shop" class="fancybox">Store</a></li>
	<li class="menu-login-to-my-training custom-link"><a href="https://www.iab.com/online-training-access" class="fancybox">Login to My Training</a></li>
	<li class="menu-login-to-my-certification custom-link"><a href="https://www.iabcertification.com/recertification/" class="fancybox">Login to My Certification</a></li>
</ul>
</li>
<li class="dropdown menu-membership custom-link"><a class="dropdown-toggle" data-toggle="dropdown" data-target="#" tabindex="0" href="/get-involved/" class="fancybox">Membership <b class="caret"></b></a>
<ul class="dropdown-menu">
	<li class="menu-about-iab custom-link"><a href="https://www.iab.com/our-story/" class="fancybox">About IAB</a></li>
	<li class="menu-current-members"><a href="https://www.iab.com/member-directory/" class="fancybox">Current Members</a></li>
	<li class="menu-iab-global-network-worldwide-members"><a href="https://www.iab.com/iab-global-network-worldwide-members/" class="fancybox">IAB Global Network: Worldwide Members</a></li>
	<li class="menu-benefits custom-link"><a href="https://www.iab.com/get-involved/#membership-benefits" class="fancybox">Benefits</a></li>
	<li class="menu-tiers-requirements custom-link"><a href="/iab-membership/" class="fancybox">Tiers &#038; Requirements</a></li>
	<li class="menu-groups custom-link"><a href="/groups/" class="fancybox">Groups</a></li>
	<li class="menu-iab-careers custom-link"><a href="https://www.iab.com/careers/" class="fancybox">IAB Careers</a></li>
</ul>
</li>
</ul>                                    </div>
                                                            </div>
                        </div>
                        <a class="uk-navbar-item uk-logo" href="https://www.iab.com/">
                            <img src="https://www.iab.com/wp-content/themes/iab/assets/img/iab-logo-cropped.png" alt="IAB" />
                        </a>
                        <div class="main-menu">
                                                            <ul
    id="primary_navigation"
    class="menu uk-navbar-nav">
                        <li
                                        id="menu-item-73714"
                                        class="menu-research-insights ">
                        <a
                            href="/insights/"
                            aria-expanded="false">
                            Research & Insights<br>
                            <span class="sub"></span>
                        </a>
                                                                                    <div
                                    class="
                                        uk-navbar-dropdown
                                        uk-navbar-dropdown-width-2
                                        uk-navbar-dropdown-bottom-left">
                                    <div
                                        class="
                                            uk-navbar-dropdown-grid
                                            uk-child-width-1-2
                                            uk-grid uk-grid-collapse"
                                        uk-grid style>
                                        <div class="uk-first-column">
                                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                                                                                    <li
                                                        id="menu-item-73654"
                                                        class="menu-knowledge-center                                                        custom-link">
                                                        <a href="/insights/">
                                                            Knowledge Center<br>
                                                            <span class="sub">Browse by topic</span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-154831"
                                                        class="menu-industry-research-insights                                                        custom-link">
                                                        <a href="/research">
                                                            Industry Research & Insights<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-73658"
                                                        class="menu-ad-spend-revenue                                                        custom-link">
                                                        <a href="/topics/ad-revenue/?spend=1">
                                                            Ad Spend & Revenue<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-170762"
                                                        class="menu-iab-pulse                                                        custom-link">
                                                        <a href="https://www.iab.com/videos/iab-pulse/">
                                                            IAB PULSE<br>
                                                            <span class="sub">Thought leadership series</span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-108812"
                                                        class="menu-iab-there                                                        custom-link">
                                                        <a href="/videos/iab-there">
                                                            IAB THERE<br>
                                                            <span class="sub">Talk show about media &#038; advertising</span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-108811"
                                                        class="menu-podcasts                                                        custom-link">
                                                        <a href="https://www.iab.com/podcasts/">
                                                            Podcasts<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                            </ul>
                                        </div>
                                        <div>
                                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                                                                                    <li
                                                        id="menu-item-102089"
                                                        class="menu-direct-brands-to-watch                                                        custom-link">
                                                        <a href="https://www.iab.com/direct-brands-to-watch/">
                                                            Direct Brands to Watch<br>
                                                            <span class="sub">Need-to-know disruptors shaping the future of business</span>
                                                        </a>
                                                    </li>
                                                                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                                                    </li>
                    <li
                                        id="menu-item-121817"
                                        class="menu-initiatives ">
                        <a
                            href=""
                            aria-expanded="false">
                            Initiatives<br>
                            <span class="sub"></span>
                        </a>
                                                                                    <div
                                    class="
                                        uk-navbar-dropdown
                                        uk-navbar-dropdown-width-2
                                        uk-navbar-dropdown-bottom-left">
                                    <div
                                        class="
                                            uk-navbar-dropdown-grid
                                            uk-child-width-1-2
                                            uk-grid uk-grid-collapse"
                                        uk-grid style>
                                        <div class="uk-first-column">
                                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                                                                                    <li
                                                        id="menu-item-162082"
                                                        class="menu-ad-net-zero                                                        custom-link">
                                                        <a href="https://www.iab.com/iab-ad-net-zero/">
                                                            Ad Net Zero<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-121826"
                                                        class="menu-addressability                                                        custom-link">
                                                        <a href="https://www.iab.com/topics/addressability/">
                                                            Addressability<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-121821"
                                                        class="menu-audio                                                        custom-link">
                                                        <a href="https://www.iab.com/topics/audio/">
                                                            Audio<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-121822"
                                                        class="menu-brand-disruption                                                        custom-link">
                                                        <a href="https://www.iab.com/topics/brands/">
                                                            Brand Disruption<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-121823"
                                                        class="menu-brand-safety                                                        custom-link">
                                                        <a href="https://www.iab.com/topics/brand-safety/">
                                                            Brand Safety<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-121828"
                                                        class="menu-consumers                                                        custom-link">
                                                        <a href="https://www.iab.com/topics/consumers/">
                                                            Consumers<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                            </ul>
                                        </div>
                                        <div>
                                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                                                                                    <li
                                                        id="menu-item-121824"
                                                        class="menu-digital-video                                                        custom-link">
                                                        <a href="https://www.iab.com/topics/digital-video/">
                                                            Digital Video<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-121827"
                                                        class="menu-measurement                                                        custom-link">
                                                        <a href="https://www.iab.com/topics/measurement/">
                                                            Measurement<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-121829"
                                                        class="menu-privacy                                                        custom-link">
                                                        <a href="https://www.iab.com/topics/privacy/">
                                                            Privacy<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-161673"
                                                        class="menu-state-of-data                                                        custom-link">
                                                        <a href="https://www.iab.com/topics/state-of-data">
                                                            State of Data<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                                                    </li>
                    <li
                                        id="menu-item-73715"
                                        class="menu-standards-guidelines ">
                        <a
                            href="/guidelines/"
                            aria-expanded="false">
                            Standards & Guidelines<br>
                            <span class="sub"></span>
                        </a>
                                                                                    <div
                                    class="
                                        uk-navbar-dropdown
                                        uk-navbar-dropdown-width-2
                                        uk-navbar-dropdown-bottom-left">
                                    <div
                                        class="
                                            uk-navbar-dropdown-grid
                                            uk-child-width-1-2
                                            uk-grid uk-grid-collapse"
                                        uk-grid style>
                                        <div class="uk-first-column">
                                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                                                                                    <li
                                                        id="menu-item-73655"
                                                        class="menu-ad-products                                                        custom-link">
                                                        <a href="https://www.iab.com/iab_guideline_type/ad-products/">
                                                            Ad Products<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-73656"
                                                        class="menu-ad-technology                                                        custom-link">
                                                        <a href="https://www.iab.com/iab_guideline_type/ad-technology/">
                                                            Ad Technology<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-73660"
                                                        class="menu-audio-video                                                        custom-link">
                                                        <a href="https://www.iab.com/iab_guideline_type/audio-video/">
                                                            Audio & Video<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-73661"
                                                        class="menu-measurement                                                        custom-link">
                                                        <a href="https://www.iab.com/iab_guideline_type/measurement/">
                                                            Measurement<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-73662"
                                                        class="menu-mobile                                                        custom-link">
                                                        <a href="https://www.iab.com/iab_guideline_type/mobile/">
                                                            Mobile<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-73663"
                                                        class="menu-programmatic                                                        custom-link">
                                                        <a href="https://www.iab.com/iab_guideline_type/programmatic/">
                                                            Programmatic<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                            </ul>
                                        </div>
                                        <div>
                                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                                                                                    <li
                                                        id="menu-item-123290"
                                                        class="menu-terms-conditions                                                        custom-link">
                                                        <a href="https://www.iab.com/iab_guideline_type/terms-conditions/">
                                                            Terms & Conditions<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-123824"
                                                        class="menu-iab-tech-lab                                                        custom-link">
                                                        <a href="https://www.iabtechlab.com">
                                                            IAB Tech Lab<br>
                                                            <span class="sub">View all standards, software, and compliance programs</span>
                                                        </a>
                                                    </li>
                                                                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                                                    </li>
                    <li
                                        id="menu-item-121437"
                                        class="menu-advocacy ">
                        <a
                            href=""
                            aria-expanded="false">
                            Advocacy<br>
                            <span class="sub"></span>
                        </a>
                                                                                    <div class="uk-navbar-dropdown uk-navbar-dropdown-bottom-left">
                                    <ul class="uk-nav uk-navbar-dropdown-nav">
                                                                                                                                    <li id="menu-item-121438" class="menu-public-policy custom-link">
                                                    <a href="/topics/public-policy">
                                                        Public Policy<br>
                                                        <span class="sub"></span>
                                                    </a>
                                                </li>
                                                                                            <li id="menu-item-121439" class="menu-legal-compliance custom-link">
                                                    <a href="/topics/legal-affairs/">
                                                        Legal & Compliance<br>
                                                        <span class="sub"></span>
                                                    </a>
                                                </li>
                                                                                            <li id="menu-item-121440" class="menu-ccpa custom-link">
                                                    <a href="/topics/ccpa">
                                                        CCPA<br>
                                                        <span class="sub"></span>
                                                    </a>
                                                </li>
                                                                                                                        </ul>
                                </div>
                                                                    </li>
                    <li
                                        id="menu-item-73716"
                                        class="menu-events ">
                        <a
                            href="/events/"
                            aria-expanded="false">
                            Events<br>
                            <span class="sub"></span>
                        </a>
                                                                                    <div class="uk-navbar-dropdown uk-navbar-dropdown-bottom-left">
                                    <ul class="uk-nav uk-navbar-dropdown-nav">
                                                                                                                                    <li id="menu-item-73666" class="menu-conferences custom-link">
                                                    <a href="/events/?type=conferences">
                                                        Conferences<br>
                                                        <span class="sub">Check out our flagship events</span>
                                                    </a>
                                                </li>
                                                                                            <li id="menu-item-73665" class="menu-professional-development custom-link">
                                                    <a href="/events/?type=training/">
                                                        Professional Development<br>
                                                        <span class="sub"></span>
                                                    </a>
                                                </li>
                                                                                            <li id="menu-item-73667" class="menu-online-events custom-link">
                                                    <a href="/events/?type=online">
                                                        Online Events<br>
                                                        <span class="sub">Browse webinars, online trainings &#038; other online meetings</span>
                                                    </a>
                                                </li>
                                                                                            <li id="menu-item-168772" class="menu-iab-international-events custom-link">
                                                    <a href="https://www.iab.com/iab-international-events/">
                                                        IAB International Events<br>
                                                        <span class="sub"></span>
                                                    </a>
                                                </li>
                                                                                                                        </ul>
                                </div>
                                                                    </li>
                    <li
                                        id="menu-item-73717"
                                        class="menu-training-development ">
                        <a
                            href="/training-certification/"
                            aria-expanded="false">
                            Training & Development<br>
                            <span class="sub"></span>
                        </a>
                                                                                    <div
                                    class="
                                        uk-navbar-dropdown
                                        uk-navbar-dropdown-width-2
                                        uk-navbar-dropdown-bottom-left">
                                    <div
                                        class="
                                            uk-navbar-dropdown-grid
                                            uk-child-width-1-2
                                            uk-grid uk-grid-collapse"
                                        uk-grid style>
                                        <div class="uk-first-column">
                                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                                                                                    <li
                                                        id="menu-item-73670"
                                                        class="menu-training                                                        custom-link">
                                                        <a href="/training-certification/#training">
                                                            Training<br>
                                                            <span class="sub">In-depth crash courses covering a variety of digital media topics</span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-73671"
                                                        class="menu-certification                                                        custom-link">
                                                        <a href="/training-certification/#certification">
                                                            Certification<br>
                                                            <span class="sub">The only accredited professional certification programs in digital media</span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-73673"
                                                        class="menu-recertification                                                        custom-link">
                                                        <a href="/recertification">
                                                            Recertification<br>
                                                            <span class="sub">Maintain your IAB Certification</span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-73672"
                                                        class="menu-corporate                                                        custom-link">
                                                        <a href="/corporate-training/">
                                                            Corporate<br>
                                                            <span class="sub">Custom group trainings for your team, clients, or partners</span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-114544"
                                                        class="menu-preferred-training-partners                                                        custom-link">
                                                        <a href="https://www.iab.com/training-certification/#partners">
                                                            Preferred Training Partners<br>
                                                            <span class="sub">Learn about IAB’s trusted training partners</span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-73674"
                                                        class="menu-resources                                                        custom-link">
                                                        <a href="/training-certification/#resources">
                                                            Resources<br>
                                                            <span class="sub">Training and certification resources for digital media professionals</span>
                                                        </a>
                                                    </li>
                                                                                            </ul>
                                        </div>
                                        <div>
                                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                                                                                    <li
                                                        id="menu-item-121450"
                                                        class="menu-store                                                        custom-link">
                                                        <a href="/shop">
                                                            Store<br>
                                                            <span class="sub">Purchase IAB trainings &#038; certifications</span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-116000"
                                                        class="menu-login-to-my-training                                                        custom-link">
                                                        <a href="https://www.iab.com/online-training-access">
                                                            Login to My Training<br>
                                                            <span class="sub">Access your online training</span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-130242"
                                                        class="menu-login-to-my-certification                                                        custom-link">
                                                        <a href="https://www.iabcertification.com/recertification/">
                                                            Login to My Certification<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                                                    </li>
                    <li
                                        id="menu-item-73718"
                                        class="menu-membership ">
                        <a
                            href="/get-involved/"
                            aria-expanded="false">
                            Membership<br>
                            <span class="sub"></span>
                        </a>
                                                                                    <div
                                    class="
                                        uk-navbar-dropdown
                                        uk-navbar-dropdown-width-2
                                        uk-navbar-dropdown-bottom-left">
                                    <div
                                        class="
                                            uk-navbar-dropdown-grid
                                            uk-child-width-1-2
                                            uk-grid uk-grid-collapse"
                                        uk-grid style>
                                        <div class="uk-first-column">
                                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                                                                                    <li
                                                        id="menu-item-125097"
                                                        class="menu-about-iab                                                        custom-link">
                                                        <a href="https://www.iab.com/our-story/">
                                                            About IAB<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-79703"
                                                        class="menu-current-members                                                        custom-link">
                                                        <a href="https://www.iab.com/member-directory/">
                                                            Current Members<br>
                                                            <span class="sub">Browse IAB member companies by category</span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-172003"
                                                        class="menu-iab-global-network-worldwide-members                                                        custom-link">
                                                        <a href="https://www.iab.com/iab-global-network-worldwide-members/">
                                                            IAB Global Network: Worldwide Members<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-73684"
                                                        class="menu-benefits                                                        custom-link">
                                                        <a href="https://www.iab.com/get-involved/#membership-benefits">
                                                            Benefits<br>
                                                            <span class="sub">Learn the perks of IAB membership</span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-73686"
                                                        class="menu-tiers-requirements                                                        custom-link">
                                                        <a href="/iab-membership/">
                                                            Tiers & Requirements<br>
                                                            <span class="sub">Membership categories, dues, and requirements</span>
                                                        </a>
                                                    </li>
                                                                                                    <li
                                                        id="menu-item-73679"
                                                        class="menu-groups                                                        custom-link">
                                                        <a href="/groups/">
                                                            Groups<br>
                                                            <span class="sub">Be an active participant in shaping the industry</span>
                                                        </a>
                                                    </li>
                                                                                            </ul>
                                        </div>
                                        <div>
                                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                                                                                    <li
                                                        id="menu-item-124203"
                                                        class="menu-iab-careers                                                        custom-link">
                                                        <a href="https://www.iab.com/careers/">
                                                            IAB Careers<br>
                                                            <span class="sub"></span>
                                                        </a>
                                                    </li>
                                                                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                                                    </li>
    </ul>
                                                    </div>
                    </div>

                    <!--  IAB Login Plugin UI needed for the logout popup --> 
                    <div class="uk-navbar-right">
                        <ul id="secondary_navigation" class="menu uk-navbar-nav">
                            <li>
                                <!-- desktop search -->
<span class="desktop-navbar-search">
    <!-- open toggle -->
    <div class="navbar-overlay">
        <a class="uk-navbar-toggle" uk-search-icon uk-toggle="target: .navbar-overlay; animation: uk-animation-fade" href="#" aria-label="search"></a>
    </div>

    <!-- search form -->
    <div class="uk-navbar-item uk-width-expand navbar-overlay navbar-search-form" hidden>
        <a uk-search-icon href="#" aria-label="search"></a>
        <form id="search-navbar" role="search" method="get" class="uk-search uk-search-navbar uk-width-1-1" action="https://www.iab.com/">
            <input type="search" class="uk-search-input search-field" id="s" value=""  name="s" placeholder="Search IAB" autofocus>
        </form>

        <!-- close toggle -->
        <a class="uk-navbar-toggle" uk-close uk-toggle="target: .navbar-overlay; animation: uk-animation-fade" href="#"></a>
    </div>
</span>

<!-- mobile search -->
<span class="mobile-navbar-search visible" id="search-box-wrapper">
        <!-- search form -->
    <div id="search-box" class="uk-sticky uk-width-1-1">
        <form id="mobile-search-navbar" role="search" method="get" class="uk-search uk-search-large" action="https://www.iab.com/">
            <button type="submit" uk-icon="search" aria-label="Search"></button>
            <input type="search" class="uk-input search-field" id="s" value=""  name="s" placeholder="Search IAB" autofocus>
        </form>
    </div>
</span>                            </li>
                            <li>
                                <a uk-icon="icon: cart" href="/cart" target="_blank" aria-label="Cart" title="Cart">
                                </a>
                            </li>
                            <li>
                                <a class="user-icon" href="javascript:;" target="_blank" aria-expanded="false" aria-label="Login" title="Login" style="margin-top: 15px;min-height: 37px !important;">
                                </a>
                                                            </li>
                        </ul>
                    </div>

                </nav>
            </div><!-- .navigation-top -->
            </div>

    <script>
        $(function() {
            UIkit.util.on('#offcanvas-slide', 'show', function () {
                $('.menu-icon').toggle();
                $('.menu-icon-close').toggle();
            });
            UIkit.util.on('#offcanvas-slide', 'hide', function () {
                $('.main-menu-link').remove();  // Remove dynamic menu link
                $('.uk-offcanvas-bar .uk-nav li').removeClass('open');
                $('.uk-offcanvas-bar .uk-nav li').show(); // Show main menu
                $('.uk-offcanvas-bar .uk-nav li ul.dropdown-menu').hide(); // Hide submenus

                $('.menu-icon').toggle();
                $('.menu-icon-close').toggle();
            });
            $('.uk-offcanvas-bar ul#primary_navigation > li > a').on('click', function(event) {
                if($(this).next().is(':hidden')) {
                    event.preventDefault();
                    $('.uk-offcanvas-bar .uk-nav li').hide(); // Reset visibility of list items
                    $(this).next().show(); // Show dropdown
                    $(this).next().find('li').show(); // Show dropdown items
                    $(this).parent().show(); // Show link clicked
                    $(this).parent().addClass('open'); // Active link is open
                    $('.main-menu-link').remove(); // Reset dynamic menu link to avoid duplicates
                    $('.uk-offcanvas-slide .uk-nav-default').prepend('<li class="dropdown main-menu-link"><a class="mobile-main-menu-link" href="#">MAIN MENU</a></li>');
                }
            });
            jQuery(document).on('click', '.mobile-main-menu-link', function() {
                event.preventDefault();
                $('.main-menu-link').remove(); // Remove dynamic menu link
                $('.uk-offcanvas-bar .uk-nav li').removeClass('open');
                $('.uk-offcanvas-bar .uk-nav li').show(); // Show main menu
                $('.uk-offcanvas-bar .uk-nav li ul.dropdown-menu').hide(); // Hide submenus
            });
        });
    </script>
</header>
        <section class="main uk-container uk-container-expand uk-padding-remove" role="main">
      
<section id="home" class="home clearfix">
<section class="module-hero-module">
    <div uk-grid class="uk-grid-small">
        <div class="uk-width-3-4@l uk-width-2-3@m">
            

<div class="tile-main-column">
                  <div uk-grid class="uk-grid-small uk-child-width-1-2@m iab-feature-tiles-large">
              <div>
          <div class="iab-feature-tile uk-cover-container uk-position-relative uk-height-large iab-height-adjust"
                          onclick="window.location.href='https://www.iab.com/events/alm-2024/'"
                      >
            <!-- <a class="uk-link-reset" href="https://www.iab.com/events/alm-2024/" > -->
              <div class="uk-height-1-1 uk-width-1-1" style="

                background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%), 
                  url(https://www.iab.com/wp-content/uploads/2022/07/alm-2023-21-1024x682.webp); 
                background-size: cover, cover;
                                ">
                                  <div class="uk-overlay uk-light uk-position-top tags">
                                          <a class="uk-text-decoration-none uk-button uk-button-default module-topic has-more-tags" href="/topics/iab-alm">IAB ALM</a>
                                          <a class="uk-text-decoration-none uk-button uk-button-default module-topic has-more-tags" href="/topics/addressability">Addressability</a>
                                                              <button class="uk-text-decoration-none uk-button uk-button-default module-topic">
                        +7                      </button>

                      <!-- dropdown with additional terms -->
                      <div uk-dropdown="pos: bottom-justify;" class="results-card-badge-dropdown uk-text-left">
                                                        <a
                                  class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                  href="/topics/audio">
                                  Audio                              </a>
                                                        <a
                                  class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                  href="/topics/brand-safety">
                                  Brand Safety                              </a>
                                                        <a
                                  class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                  href="/topics/digital-video">
                                  Digital Video                              </a>
                                                        <a
                                  class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                  href="/topics/legal-affairs">
                                  Legal Affairs                              </a>
                                                        <a
                                  class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                  href="/topics/measurement">
                                  Measurement                              </a>
                                                        <a
                                  class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                  href="/topics/privacy">
                                  Privacy                              </a>
                                                        <a
                                  class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                  href="/topics/public-policy">
                                  Public Policy                              </a>
                                                </div>
                                      </div>
                
                <div class="uk-overlay uk-light uk-position-bottom">
                  <a class="uk-link-reset" href="https://www.iab.com/events/alm-2024/" ><h1 class="module-headline2">IAB Annual Leadership Meeting 2024-  Only Two Weeks Left to Register!</h1></a>
                </div>
              </div>
            <!-- </a> -->
          </div>
        </div>
              <div>
          <div class="iab-feature-tile uk-cover-container uk-position-relative uk-height-large iab-height-adjust"
                          onclick="window.location.href='https://www.iab.com/insights/quantifying-retail-media-in-store-success-measurement-innovation/'"
                      >
            <!-- <a class="uk-link-reset" href="https://www.iab.com/insights/quantifying-retail-media-in-store-success-measurement-innovation/" > -->
              <div class="uk-height-1-1 uk-width-1-1" style="

                background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%), 
                  url(https://www.iab.com/wp-content/uploads/2024/01/quantifying-retail-media-in-store-success-measurement-innovation-3-1024x312.png); 
                background-size: cover, cover;
                background-position: 71.10% 56.04%                ">
                                  <div class="uk-overlay uk-light uk-position-top tags">
                                          <a class="uk-text-decoration-none uk-button uk-button-default module-topic has-more-tags" href="/topics/measurement">Measurement</a>
                                          <a class="uk-text-decoration-none uk-button uk-button-default module-topic has-more-tags" href="/topics/retail-media">Retail Media</a>
                                                              <button class="uk-text-decoration-none uk-button uk-button-default module-topic">
                        +1                      </button>

                      <!-- dropdown with additional terms -->
                      <div uk-dropdown="pos: bottom-justify;" class="results-card-badge-dropdown uk-text-left">
                                                        <a
                                  class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                  href="/topics/the-rise-of-retail-media-networks">
                                  The Rise of Retail Media Networks                              </a>
                                                </div>
                                      </div>
                
                <div class="uk-overlay uk-light uk-position-bottom">
                  <a class="uk-link-reset" href="https://www.iab.com/insights/quantifying-retail-media-in-store-success-measurement-innovation/" ><h1 class="module-headline2">Quantifying Retail Media In-Store Success: Measurement & Innovation</h1></a>
                </div>
              </div>
            <!-- </a> -->
          </div>
        </div>
            </div>
      

          <div uk-grid uk-height-match="target: .tile-card-body > div" class="uk-margin uk-margin-bottom uk-grid-small uk-child-width-1-4@l uk-child-width-1-3@m uk-child-width-1-2 iab-feature-tiles-small">
              <div>
          <div class="uk-card uk-card-default tile-card">
              <a href="https://www.iab.com/insights/iab-us-multi-state-privacy-toolkit/" aria-label="IAB U.S. Multi-State Privacy Toolkit" title="IAB U.S. Multi-State Privacy Toolkit">
                  <div class="uk-card-media-top tile-card-image" style="background-image: url(https://www.iab.com/wp-content/uploads/2023/12/iab-u-s-multi-state-privacy-toolkit-1024x312.png), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%); height: 150px; background-size: cover, cover; background-position: 46.09% 63.70%">
                  </div>
              </a>
              <!-- card body -->
              <div class="tile-card-body">
                  <div> <!-- used to match height of card-body -->
                      <a href="https://www.iab.com/insights/iab-us-multi-state-privacy-toolkit/" >
                          <p class="tile-card-title">IAB U.S. Multi-State Privacy Toolkit</p>
                          <p class="tile-card-teaser">The number of state privacy laws continues to expand rapidly. Complying with these laws is an opportunity to develop privacy-forward practices to enhance consumer trust, but it can also be challenging to implement for many businesses – particularly where digital advertising is concerned. Compliance is a necessity, and the IAB U.S. Multi-State Privacy Toolkit provides &hellip; Continued</p>
                      </a>
                  </div>
              </div>

              <!-- tags -->
              <div class="tile-card-footer">
                  <span class="tile-card-type-date">
                      <span class="no-border-button type-and-date uk-button uk-button-default uk-text-capitalize">
                                                                                    <a class="uk-text-decoration-none uk-button uk-button-default module-topic has-more-tags" href="/topics/ccpa">CCPA</a>
                                                                                      <button class="uk-text-decoration-none uk-button uk-button-default module-topic">
                                +2                              </button>

                              <!-- dropdown with additional terms -->
                              <div uk-dropdown="pos: bottom-justify;" class="results-card-badge-dropdown uk-text-left">
                                                                        <a
                                          class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                          href="/topics/legal-affairs">
                                          Legal Affairs                                      </a>
                                                                        <a
                                          class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                          href="/topics/privacy">
                                          Privacy                                      </a>
                                                                </div>
                                                                          </span>
                  </span>
                  
                  <span class="tile-card-terms uk-hidden">
                      <!-- first tag -->
                      <a href="/topics/brand-safety" class="uk-button uk-button-default uk-text-capitalize uk-text-truncate topic-badge-button">Brand Safety</a>
                      <!-- additional tags, if any -->
                  
                  </span>
                  
                  <!-- red arrow -->
                  <a href="https://www.iab.com/insights/iab-us-multi-state-privacy-toolkit/" class="search-results-red-arrow" >
                      <img src="/wp-content/themes/iab/lib-browser/img/icons/redesign/RedBackArrow.png" alt="Menu">
                  </a>
              </div>
          </div>
        </div>
              <div>
          <div class="uk-card uk-card-default tile-card">
              <a href="https://www.iab.com/news/iab-to-appear-at-ftc-click-to-cancel-hearing" aria-label="IAB to Appear at FTC “Click To Cancel” Hearing" title="IAB to Appear at FTC “Click To Cancel” Hearing">
                  <div class="uk-card-media-top tile-card-image" style="background-image: url(https://www.iab.com/wp-content/uploads/2022/09/a-look-ahead-what-to-expect-from-a-fully-staffed-ftc-under-president-biden-6-1024x683.jpg), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%); height: 150px; background-size: cover, cover; background-position: 32.50% 65.03%">
                  </div>
              </a>
              <!-- card body -->
              <div class="tile-card-body">
                  <div> <!-- used to match height of card-body -->
                      <a href="https://www.iab.com/news/iab-to-appear-at-ftc-click-to-cancel-hearing" >
                          <p class="tile-card-title">IAB to Appear at FTC “Click To Cancel” Hearing</p>
                          <p class="tile-card-teaser">WASHINGTON, D.C. – At a virtual Federal Trade Commission (FTC) hearing this month, Interactive Advertising Bureau (IAB) will present serious concerns with proposed changes to the agency’s “Negative Option Rule” for online subscription services. In its latest public filing challenging sweeping new regulations, IAB argues the FTC is overstepping its authority with broad new rules &hellip; Continued</p>
                      </a>
                  </div>
              </div>

              <!-- tags -->
              <div class="tile-card-footer">
                  <span class="tile-card-type-date">
                      <span class="no-border-button type-and-date uk-button uk-button-default uk-text-capitalize">
                                                                                    <a class="uk-text-decoration-none uk-button uk-button-default module-topic" href="/topics/public-policy">Public Policy</a>
                                                                                                      </span>
                  </span>
                  
                  <span class="tile-card-terms uk-hidden">
                      <!-- first tag -->
                      <a href="/topics/brand-safety" class="uk-button uk-button-default uk-text-capitalize uk-text-truncate topic-badge-button">Brand Safety</a>
                      <!-- additional tags, if any -->
                  
                  </span>
                  
                  <!-- red arrow -->
                  <a href="https://www.iab.com/news/iab-to-appear-at-ftc-click-to-cancel-hearing" class="search-results-red-arrow" >
                      <img src="/wp-content/themes/iab/lib-browser/img/icons/redesign/RedBackArrow.png" alt="Menu">
                  </a>
              </div>
          </div>
        </div>
              <div>
          <div class="uk-card uk-card-default tile-card">
              <a href="https://www.iab.com/blog/2024-key-trends-in-digital-advertising/" aria-label="2024 Key Trends in Digital Advertising: Adapting to the New Privacy Norm" title="2024 Key Trends in Digital Advertising: Adapting to the New Privacy Norm">
                  <div class="uk-card-media-top tile-card-image" style="background-image: url(https://www.iab.com/wp-content/uploads/2023/12/2024-key-trends-in-digital-advertising-adapting-to-the-new-privacy-norm-3-1024x312.png), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%); height: 150px; background-size: cover, cover; background-position: 67.96% 38.66%">
                  </div>
              </a>
              <!-- card body -->
              <div class="tile-card-body">
                  <div> <!-- used to match height of card-body -->
                      <a href="https://www.iab.com/blog/2024-key-trends-in-digital-advertising/" >
                          <p class="tile-card-title">2024 Key Trends in Digital Advertising: Adapting to the New Privacy Norm</p>
                          <p class="tile-card-teaser">The 2024 landscape presents an exhilarating array of trends that echo the dynamism and evolution we’ve witnessed over the years. As we stand on the brink of transformative changes, reminiscent of the monumental shifts brought about by GDPR and Apple iOS 14.5, privacy is no longer just a buzzword but a foundational principle shaping our &hellip; Continued</p>
                      </a>
                  </div>
              </div>

              <!-- tags -->
              <div class="tile-card-footer">
                  <span class="tile-card-type-date">
                      <span class="no-border-button type-and-date uk-button uk-button-default uk-text-capitalize">
                                                </span>
                  </span>
                  
                  <span class="tile-card-terms uk-hidden">
                      <!-- first tag -->
                      <a href="/topics/brand-safety" class="uk-button uk-button-default uk-text-capitalize uk-text-truncate topic-badge-button">Brand Safety</a>
                      <!-- additional tags, if any -->
                  
                  </span>
                  
                  <!-- red arrow -->
                  <a href="https://www.iab.com/blog/2024-key-trends-in-digital-advertising/" class="search-results-red-arrow" >
                      <img src="/wp-content/themes/iab/lib-browser/img/icons/redesign/RedBackArrow.png" alt="Menu">
                  </a>
              </div>
          </div>
        </div>
              <div>
          <div class="uk-card uk-card-default tile-card">
              <a href="https://www.iab.com/insights/creator-economy-research/" aria-label="The Creator Economy Opportunity: Where Authenticity Meets Impact" title="The Creator Economy Opportunity: Where Authenticity Meets Impact">
                  <div class="uk-card-media-top tile-card-image" style="background-image: url(https://www.iab.com/wp-content/uploads/2023/12/the-creator-economy-opportunity-where-authenticity-meets-impact-1024x312.jpg), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%); height: 150px; background-size: cover, cover; background-position: 52.16% 65.69%">
                  </div>
              </a>
              <!-- card body -->
              <div class="tile-card-body">
                  <div> <!-- used to match height of card-body -->
                      <a href="https://www.iab.com/insights/creator-economy-research/" >
                          <p class="tile-card-title">The Creator Economy Opportunity: Where Authenticity Meets Impact</p>
                          <p class="tile-card-teaser">To get the full picture of the impact of creator content for consumers and advertisers, IAB partnered with Talk Shoppe on this first-of-its-kind, multi-phased research study, The Creator Economy Opportunity: Where Authenticity Meets Impact, which combines quantitative surveys, qualitative interviews, and daily digital ethnographies. In an era where digital content consumption is growing at an &hellip; Continued</p>
                      </a>
                  </div>
              </div>

              <!-- tags -->
              <div class="tile-card-footer">
                  <span class="tile-card-type-date">
                      <span class="no-border-button type-and-date uk-button uk-button-default uk-text-capitalize">
                                                                                    <a class="uk-text-decoration-none uk-button uk-button-default module-topic has-more-tags" href="/topics/consumers">Consumers</a>
                                                                                      <button class="uk-text-decoration-none uk-button uk-button-default module-topic">
                                +2                              </button>

                              <!-- dropdown with additional terms -->
                              <div uk-dropdown="pos: bottom-justify;" class="results-card-badge-dropdown uk-text-left">
                                                                        <a
                                          class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                          href="/topics/creator-economy">
                                          Creator Economy                                      </a>
                                                                        <a
                                          class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                          href="/topics/research">
                                          Research                                      </a>
                                                                </div>
                                                                          </span>
                  </span>
                  
                  <span class="tile-card-terms uk-hidden">
                      <!-- first tag -->
                      <a href="/topics/brand-safety" class="uk-button uk-button-default uk-text-capitalize uk-text-truncate topic-badge-button">Brand Safety</a>
                      <!-- additional tags, if any -->
                  
                  </span>
                  
                  <!-- red arrow -->
                  <a href="https://www.iab.com/insights/creator-economy-research/" class="search-results-red-arrow" >
                      <img src="/wp-content/themes/iab/lib-browser/img/icons/redesign/RedBackArrow.png" alt="Menu">
                  </a>
              </div>
          </div>
        </div>
              <div>
          <div class="uk-card uk-card-default tile-card">
              <a href="https://www.iab.com/news/iab-announces-robust-alm-speaker-line-up-and-themes-addressing-evolving-digital-advertising-marketplace-organization-also-unveils-events-schedule" aria-label="IAB Announces Robust ALM Speaker Lineup and Unveils 2024 Events Schedule" title="IAB Announces Robust ALM Speaker Lineup and Unveils 2024 Events Schedule">
                  <div class="uk-card-media-top tile-card-image" style="background-image: url(https://www.iab.com/wp-content/uploads/2023/11/iab-announces-robust-alm-speaker-lineup-and-themes-addressing-evolving-digital-advertising-marketplace-organization-also-unveils-events-schedule.png), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%); height: 150px; background-size: cover, cover; background-position: 50.57% 49.93%">
                  </div>
              </a>
              <!-- card body -->
              <div class="tile-card-body">
                  <div> <!-- used to match height of card-body -->
                      <a href="https://www.iab.com/news/iab-announces-robust-alm-speaker-line-up-and-themes-addressing-evolving-digital-advertising-marketplace-organization-also-unveils-events-schedule" >
                          <p class="tile-card-title">IAB Announces Robust ALM Speaker Lineup and Unveils 2024 Events Schedule</p>
                          <p class="tile-card-teaser">Save the Date for IAB’s 2024 Events Including the IAB Annual Leadership Meeting (ALM), IAB PlayFronts, IAB NewFronts, IAB Podcast Upfront, IAB Public Policy &amp; Legal Summit, IAB Privacy Compliance Salon, and IAB State Privacy Law Summit  Due to Industry Demand, IAB Connected Commerce Summit Returns bigger than ever with a Two-Day Event Experience Addressing &hellip; Continued</p>
                      </a>
                  </div>
              </div>

              <!-- tags -->
              <div class="tile-card-footer">
                  <span class="tile-card-type-date">
                      <span class="no-border-button type-and-date uk-button uk-button-default uk-text-capitalize">
                                                                                    <a class="uk-text-decoration-none uk-button uk-button-default module-topic has-more-tags" href="/topics/iab-alm">IAB ALM</a>
                                                                                      <button class="uk-text-decoration-none uk-button uk-button-default module-topic">
                                +7                              </button>

                              <!-- dropdown with additional terms -->
                              <div uk-dropdown="pos: bottom-justify;" class="results-card-badge-dropdown uk-text-left">
                                                                        <a
                                          class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                          href="/topics/addressability">
                                          Addressability                                      </a>
                                                                        <a
                                          class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                          href="/topics/creator-economy">
                                          Creator Economy                                      </a>
                                                                        <a
                                          class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                          href="/topics/measurement">
                                          Measurement                                      </a>
                                                                        <a
                                          class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                          href="/topics/news">
                                          News                                      </a>
                                                                        <a
                                          class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                          href="/topics/privacy">
                                          Privacy                                      </a>
                                                                        <a
                                          class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                          href="/topics/research">
                                          Research                                      </a>
                                                                        <a
                                          class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                          href="/topics/retail-media">
                                          Retail Media                                      </a>
                                                                </div>
                                                                          </span>
                  </span>
                  
                  <span class="tile-card-terms uk-hidden">
                      <!-- first tag -->
                      <a href="/topics/brand-safety" class="uk-button uk-button-default uk-text-capitalize uk-text-truncate topic-badge-button">Brand Safety</a>
                      <!-- additional tags, if any -->
                  
                  </span>
                  
                  <!-- red arrow -->
                  <a href="https://www.iab.com/news/iab-announces-robust-alm-speaker-line-up-and-themes-addressing-evolving-digital-advertising-marketplace-organization-also-unveils-events-schedule" class="search-results-red-arrow" >
                      <img src="/wp-content/themes/iab/lib-browser/img/icons/redesign/RedBackArrow.png" alt="Menu">
                  </a>
              </div>
          </div>
        </div>
              <div>
          <div class="uk-card uk-card-default tile-card">
              <a href="https://www.iab.com/insights/2024-outlook-survey/" aria-label="2024 Outlook Survey" title="2024 Outlook Survey">
                  <div class="uk-card-media-top tile-card-image" style="background-image: url(https://www.iab.com/wp-content/uploads/2023/11/2024-outlook-a-snapshot-into-ad-spend-opportunities-and-strategies-for-growth-1024x312.png), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%); height: 150px; background-size: cover, cover; background-position: 52.28% 45.91%">
                  </div>
              </a>
              <!-- card body -->
              <div class="tile-card-body">
                  <div> <!-- used to match height of card-body -->
                      <a href="https://www.iab.com/insights/2024-outlook-survey/" >
                          <p class="tile-card-title">2024 Outlook Survey</p>
                          <p class="tile-card-teaser">2024 Outlook: A Snapshot into Ad Spend, Opportunities, and Strategies for Growth was conducted by IAB to provide the digital ad-supported ecosystem with a forward-looking view into the 2024 ad spending marketplace (including both spend levels and strategies) being projected by buy-side ad investment decision-makers, primarily at brands and agencies. This study provides: A view &hellip; Continued</p>
                      </a>
                  </div>
              </div>

              <!-- tags -->
              <div class="tile-card-footer">
                  <span class="tile-card-type-date">
                      <span class="no-border-button type-and-date uk-button uk-button-default uk-text-capitalize">
                                                                                    <a class="uk-text-decoration-none uk-button uk-button-default module-topic" href="/topics/research">Research</a>
                                                                                                      </span>
                  </span>
                  
                  <span class="tile-card-terms uk-hidden">
                      <!-- first tag -->
                      <a href="/topics/brand-safety" class="uk-button uk-button-default uk-text-capitalize uk-text-truncate topic-badge-button">Brand Safety</a>
                      <!-- additional tags, if any -->
                  
                  </span>
                  
                  <!-- red arrow -->
                  <a href="https://www.iab.com/insights/2024-outlook-survey/" class="search-results-red-arrow" >
                      <img src="/wp-content/themes/iab/lib-browser/img/icons/redesign/RedBackArrow.png" alt="Menu">
                  </a>
              </div>
          </div>
        </div>
              <div>
          <div class="uk-card uk-card-default tile-card">
              <a href="https://www.iab.com/news/iab-privacy-unveils-accountability-program" aria-label="IAB Privacy Unveils Accountability Program" title="IAB Privacy Unveils Accountability Program">
                  <div class="uk-card-media-top tile-card-image" style="background-image: url(https://www.iab.com/wp-content/uploads/2023/09/iab-privacy-unveils-accountability-program-as-part-of-its-multi-state-privacy-agreement-for-signatories-to-earn-certification-2-1024x312.png), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%); height: 150px; background-size: cover, cover; ">
                  </div>
              </a>
              <!-- card body -->
              <div class="tile-card-body">
                  <div> <!-- used to match height of card-body -->
                      <a href="https://www.iab.com/news/iab-privacy-unveils-accountability-program" >
                          <p class="tile-card-title">IAB Privacy Unveils Accountability Program</p>
                          <p class="tile-card-teaser">The Network Advertising Initiative (NAI) Becomes First Assessor Authorized to Grant ‘MSPA Certified’ Seal New York, NY September 29, 2023 &#8212; Continuing its efforts to promote consumer privacy and comply with new state privacy laws, IAB Privacy (IAB) has established a voluntary Accountability Program as part of its Multi-State Privacy Agreement (MSPA) compliance framework. Through the &hellip; Continued</p>
                      </a>
                  </div>
              </div>

              <!-- tags -->
              <div class="tile-card-footer">
                  <span class="tile-card-type-date">
                      <span class="no-border-button type-and-date uk-button uk-button-default uk-text-capitalize">
                                                                                    <a class="uk-text-decoration-none uk-button uk-button-default module-topic has-more-tags" href="/topics/legal-affairs">Legal Affairs</a>
                                                                                      <button class="uk-text-decoration-none uk-button uk-button-default module-topic">
                                +1                              </button>

                              <!-- dropdown with additional terms -->
                              <div uk-dropdown="pos: bottom-justify;" class="results-card-badge-dropdown uk-text-left">
                                                                        <a
                                          class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                          href="/topics/privacy">
                                          Privacy                                      </a>
                                                                </div>
                                                                          </span>
                  </span>
                  
                  <span class="tile-card-terms uk-hidden">
                      <!-- first tag -->
                      <a href="/topics/brand-safety" class="uk-button uk-button-default uk-text-capitalize uk-text-truncate topic-badge-button">Brand Safety</a>
                      <!-- additional tags, if any -->
                  
                  </span>
                  
                  <!-- red arrow -->
                  <a href="https://www.iab.com/news/iab-privacy-unveils-accountability-program" class="search-results-red-arrow" >
                      <img src="/wp-content/themes/iab/lib-browser/img/icons/redesign/RedBackArrow.png" alt="Menu">
                  </a>
              </div>
          </div>
        </div>
              <div>
          <div class="uk-card uk-card-default tile-card">
              <a href="https://www.iab.com/insights/us-podcast-advertising-revenue-study-2023/" aria-label="U.S. Podcast Advertising Revenue Study 2023: Drivers, Strategies, and Tactics for Growth" title="U.S. Podcast Advertising Revenue Study 2023: Drivers, Strategies, and Tactics for Growth">
                  <div class="uk-card-media-top tile-card-image" style="background-image: url(https://www.iab.com/wp-content/uploads/2023/10/the-u-s-podcast-advertising-revenue-study-2023-part-2-drivers-strategies-and-tactics-for-growth-1024x312.png), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%); height: 150px; background-size: cover, cover; background-position: 25.59% 51.15%">
                  </div>
              </a>
              <!-- card body -->
              <div class="tile-card-body">
                  <div> <!-- used to match height of card-body -->
                      <a href="https://www.iab.com/insights/us-podcast-advertising-revenue-study-2023/" >
                          <p class="tile-card-title">U.S. Podcast Advertising Revenue Study 2023: Drivers, Strategies, and Tactics for Growth</p>
                          <p class="tile-card-teaser">Podcasting continues to be one of the fastest-growing digital media channels as U.S. ad revenues have grown over 115% from 2020 to 2022. To understand the drivers, strategies, and tactics that are propelling the market and uncover where it’s heading, IAB and PwC conducted an in-depth quantitative survey of the leading podcast publishers and a &hellip; Continued</p>
                      </a>
                  </div>
              </div>

              <!-- tags -->
              <div class="tile-card-footer">
                  <span class="tile-card-type-date">
                      <span class="no-border-button type-and-date uk-button uk-button-default uk-text-capitalize">
                                                                                    <a class="uk-text-decoration-none uk-button uk-button-default module-topic has-more-tags" href="/topics/ad-revenue">Advertising Revenue</a>
                                                                                      <button class="uk-text-decoration-none uk-button uk-button-default module-topic">
                                +4                              </button>

                              <!-- dropdown with additional terms -->
                              <div uk-dropdown="pos: bottom-justify;" class="results-card-badge-dropdown uk-text-left">
                                                                        <a
                                          class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                          href="/topics/audio">
                                          Audio                                      </a>
                                                                        <a
                                          class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                          href="/topics/consumers">
                                          Consumers                                      </a>
                                                                        <a
                                          class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                          href="/topics/digital-video">
                                          Digital Video                                      </a>
                                                                        <a
                                          class="uk-text-decoration-none uk-button uk-button-default module-topic topic-badge-button"
                                          href="/topics/research">
                                          Research                                      </a>
                                                                </div>
                                                                          </span>
                  </span>
                  
                  <span class="tile-card-terms uk-hidden">
                      <!-- first tag -->
                      <a href="/topics/brand-safety" class="uk-button uk-button-default uk-text-capitalize uk-text-truncate topic-badge-button">Brand Safety</a>
                      <!-- additional tags, if any -->
                  
                  </span>
                  
                  <!-- red arrow -->
                  <a href="https://www.iab.com/insights/us-podcast-advertising-revenue-study-2023/" class="search-results-red-arrow" >
                      <img src="/wp-content/themes/iab/lib-browser/img/icons/redesign/RedBackArrow.png" alt="Menu">
                  </a>
              </div>
          </div>
        </div>
          </div>
  </div>
        </div>
        <div class="uk-width-1-4@l uk-width-1-3@m tile-sidebar-column">
            

<div class="upcoming-sidebar uk-padding uk-padding-remove-top uk-padding-remove-bottom">
  <h3 class="module-headline2 uk-padding uk-padding-remove-left uk-padding-remove-bottom headline-adjust">Upcoming at IAB</h3>

  <ul class="uk-overflow-auto">
          <li>
        <a href="https://www.iab.com/events/alm-2024/">
          <h5 class="title">IAB Annual Leadership Meeting 2024-  Only Two Weeks Left to Register!</h5>
          <time datetime="2024-01-28 00:00">Jan 28, 2024</time>
        </a>
      </li>
          <li>
        <a href="https://www.iab.com/events/2024-iab-measurement-leadership-summit/">
          <h5 class="title">2024 IAB Measurement Leadership Summit</h5>
          <time datetime="2024-03-14 00:00">Mar 14, 2024</time>
        </a>
      </li>
          <li>
        <a href="https://www.iab.com/events/iab-playfronts-2024/">
          <h5 class="title">IAB PlayFronts 2024</h5>
          <time datetime="2024-03-26 00:00">Mar 26, 2024</time>
        </a>
      </li>
          <li>
        <a href="https://www.iab.com/events/2024-iab-public-policy-legal-summit/">
          <h5 class="title">2024 IAB Public Policy & Legal Summit</h5>
          <time datetime="2024-04-02 00:00">Apr 2, 2024</time>
        </a>
      </li>
          <li>
        <a href="https://www.iab.com/events/newfronts-2024/">
          <h5 class="title">2024 IAB NewFronts</h5>
          <time datetime="2024-04-29 00:00">Apr 29, 2024</time>
        </a>
      </li>
          <li>
        <a href="https://www.iab.com/events/podcast-upfront-2024/">
          <h5 class="title">2024 IAB Podcast Upfront</h5>
          <time datetime="2024-05-09 00:00">May 9, 2024</time>
        </a>
      </li>
          <li>
        <a href="https://www.iab.com/events/2024-iab-connected-commerce-summit/">
          <h5 class="title">2024 IAB Connected Commerce Summit</h5>
          <time datetime="2024-09-17 00:00">Sep 17, 2024</time>
        </a>
      </li>
      </ul>
</div>        </div>
    </div>
    <div
    class="
        module-hero-module__footer-non-mobile
        uk-grid-collapse uk-height-small uk-grid uk-flex uk-flex-middle uk-flex-around uk-visible@m" uk-grid>
    <div class="uk-flex uk-flex-column module-hero-module__footer-link">
        <a href="/topics/iab/diversity-initiatives/">
            <h4 class="module-hero-module__footer-link-title">
                Diversity & Inclusion            </h4>
            <span class="module-hero-module__footer-link-desc">
                Workforce development &#038; education            </span>
            <div class="module-hero-module__footer-link-icon-container">
                <span class="iabicon-arrow-in-circle-right item-arrow"></span>
            </div>
        </a>
    </div>
    <div class="uk-flex uk-flex-column module-hero-module__footer-link">
        <a href="https://iabtechlab.com/project-rearc/">
            <h4 class="module-hero-module__footer-link-title">
                Project Rearc            </h4>
            <span class="module-hero-module__footer-link-desc">
                Harmonize privacy &#038; personalization            </span>
            <div class="module-hero-module__footer-link-icon-container">
                <span class="iabicon-arrow-in-circle-right item-arrow"></span>
            </div>
        </a>
    </div>
    <div class="uk-flex uk-flex-column module-hero-module__footer-link">
        <a href="/topics/public-policy/">
            <h4 class="module-hero-module__footer-link-title">
                Public Policy            </h4>
            <span class="module-hero-module__footer-link-desc">
                CCPA, GDPR, and more            </span>
            <div class="module-hero-module__footer-link-icon-container">
                <span class="iabicon-arrow-in-circle-right item-arrow"></span>
            </div>
        </a>
    </div>
    <div class="uk-flex uk-flex-column module-hero-module__footer-link">
        <a href="/topics/ccpa/">
            <h4 class="module-hero-module__footer-link-title">
                CCPA Compliance            </h4>
            <span class="module-hero-module__footer-link-desc">
                Prepare for enforcement            </span>
            <div class="module-hero-module__footer-link-icon-container">
                <span class="iabicon-arrow-in-circle-right item-arrow"></span>
            </div>
        </a>
    </div>
    <div class="uk-flex uk-flex-column module-hero-module__footer-link">
        <a href="/topics/iab-tech-lab/">
            <h4 class="module-hero-module__footer-link-title">
                Tech Lab            </h4>
            <span class="module-hero-module__footer-link-desc">
                Nonprofit R&#038;D consortium            </span>
            <div class="module-hero-module__footer-link-icon-container">
                <span class="iabicon-arrow-in-circle-right item-arrow"></span>
            </div>
        </a>
    </div>
    <div class="uk-flex uk-flex-column module-hero-module__footer-link">
        <a href="http://iab.com/topics/direct-brands/">
            <h4 class="module-hero-module__footer-link-title">
                Direct Brand Economy            </h4>
            <span class="module-hero-module__footer-link-desc">
                Latest news and insights            </span>
            <div class="module-hero-module__footer-link-icon-container">
                <span class="iabicon-arrow-in-circle-right item-arrow"></span>
            </div>
        </a>
    </div>
</div>
    <div class="uk-hidden@m">
        <div class="module-hero-module__footer-header-mobile uk-flex uk-flex-middle uk-flex-row">
            <h3 class="">
                What is IAB?            </h3>
            <a uk-toggle="target: #module-hero-module__footer-container-mobile-id; animation: uk-animation-slide-top-small" class="module-hero-module__footer-header-action-mobile uk-margin-auto-left uk-padding-remove" href="#">
                <!--<div class="bold arrow-down-icon uk-margin-auto-left"></div>-->
                <i class="bold iabicon-arrow-in-circle-down"></i>
            </a>
        </div>
        <div class="module-hero-module__footer-container-mobile" hidden id="module-hero-module__footer-container-mobile-id">
            <ul class="uk-nav">
                                    <li>
                        <a class="uk-margin-auto-left uk-padding-remove" href="/topics/iab/diversity-initiatives/">
                            <div class="module-hero-module__footer-item-mobile uk-flex uk-flex-middle uk-flex-column">
                                <div class="uk-flex uk-flex-row uk-width-1-1">
                                    <h3 class="uk-margin-auto-right">
                                        Diversity & Inclusion                                    </h3>
                                    <i class="bold iabicon-arrow-in-circle-right item-arrow"></i>
                                </div>
                                <div class="module-hero-module__footer-item-desc-mobile uk-width-1-1">
                                    <p class="uk-margin-remove-bottom">
                                        Workforce development &#038; education                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                                    <li>
                        <a class="uk-margin-auto-left uk-padding-remove" href="https://iabtechlab.com/project-rearc/">
                            <div class="module-hero-module__footer-item-mobile uk-flex uk-flex-middle uk-flex-column">
                                <div class="uk-flex uk-flex-row uk-width-1-1">
                                    <h3 class="uk-margin-auto-right">
                                        Project Rearc                                    </h3>
                                    <i class="bold iabicon-arrow-in-circle-right item-arrow"></i>
                                </div>
                                <div class="module-hero-module__footer-item-desc-mobile uk-width-1-1">
                                    <p class="uk-margin-remove-bottom">
                                        Harmonize privacy &#038; personalization                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                                    <li>
                        <a class="uk-margin-auto-left uk-padding-remove" href="/topics/public-policy/">
                            <div class="module-hero-module__footer-item-mobile uk-flex uk-flex-middle uk-flex-column">
                                <div class="uk-flex uk-flex-row uk-width-1-1">
                                    <h3 class="uk-margin-auto-right">
                                        Public Policy                                    </h3>
                                    <i class="bold iabicon-arrow-in-circle-right item-arrow"></i>
                                </div>
                                <div class="module-hero-module__footer-item-desc-mobile uk-width-1-1">
                                    <p class="uk-margin-remove-bottom">
                                        CCPA, GDPR, and more                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                                    <li>
                        <a class="uk-margin-auto-left uk-padding-remove" href="/topics/ccpa/">
                            <div class="module-hero-module__footer-item-mobile uk-flex uk-flex-middle uk-flex-column">
                                <div class="uk-flex uk-flex-row uk-width-1-1">
                                    <h3 class="uk-margin-auto-right">
                                        CCPA Compliance                                    </h3>
                                    <i class="bold iabicon-arrow-in-circle-right item-arrow"></i>
                                </div>
                                <div class="module-hero-module__footer-item-desc-mobile uk-width-1-1">
                                    <p class="uk-margin-remove-bottom">
                                        Prepare for enforcement                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                                    <li>
                        <a class="uk-margin-auto-left uk-padding-remove" href="/topics/iab-tech-lab/">
                            <div class="module-hero-module__footer-item-mobile uk-flex uk-flex-middle uk-flex-column">
                                <div class="uk-flex uk-flex-row uk-width-1-1">
                                    <h3 class="uk-margin-auto-right">
                                        Tech Lab                                    </h3>
                                    <i class="bold iabicon-arrow-in-circle-right item-arrow"></i>
                                </div>
                                <div class="module-hero-module__footer-item-desc-mobile uk-width-1-1">
                                    <p class="uk-margin-remove-bottom">
                                        Nonprofit R&#038;D consortium                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                                    <li>
                        <a class="uk-margin-auto-left uk-padding-remove" href="http://iab.com/topics/direct-brands/">
                            <div class="module-hero-module__footer-item-mobile uk-flex uk-flex-middle uk-flex-column">
                                <div class="uk-flex uk-flex-row uk-width-1-1">
                                    <h3 class="uk-margin-auto-right">
                                        Direct Brand Economy                                    </h3>
                                    <i class="bold iabicon-arrow-in-circle-right item-arrow"></i>
                                </div>
                                <div class="module-hero-module__footer-item-desc-mobile uk-width-1-1">
                                    <p class="uk-margin-remove-bottom">
                                        Latest news and insights                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                            </ul>
        </div>
    </div>
</section>
<section class="module-our-mission">
    <div class="uk-child-width-1-1@s uk-child-width-1-2@m uk-grid-collapse" uk-grid>
        <div class="module-our-mission__panel-left uk-padding-large">
            <span class="module-our-mission__sub-title">
                Our Mission            </span>
            <h3 class="uk-margin-small-top our-mission-title">
                The Interactive Advertising Bureau (IAB) empowers the media and marketing industries to thrive in the digital economy.            </h3>
        </div>
        <div class="module-our-mission__panel-right uk-padding-large uk-width-auto">
            <span class="module-our-mission__sub-title">
                <a href="/member-directory">Our 700+ members</a> are leaders in digital advertising &amp; media, and include:            </span>
            <div class="module-our-mission__logos-container">
                
                <script src="//cdnjs.cloudflare.com/ajax/libs/ramda/0.27.0/ramda.min.js"></script>
                <script>
                    var logos = [{"url":"https:\/\/www.iab.com\/wp-content\/uploads\/2023\/08\/amazon-advertising-4.jpg","alt":"Amazon Advertising"},{"url":"https:\/\/www.iab.com\/wp-content\/uploads\/2023\/08\/disney-advertising-2.png","alt":"Disney Advertising"},{"url":"https:\/\/www.iab.com\/wp-content\/uploads\/2023\/08\/linkedin-3.png","alt":"LinkedIn"},{"url":"https:\/\/www.iab.com\/wp-content\/uploads\/2023\/08\/liveramp-6.png","alt":"LiveRamp"},{"url":"https:\/\/www.iab.com\/wp-content\/uploads\/2013\/11\/lotame-5.png","alt":"Lotame Solutions, Inc."},{"url":"https:\/\/www.iab.com\/wp-content\/uploads\/2023\/08\/magnite-2.png","alt":"Magnite"},{"url":"https:\/\/www.iab.com\/wp-content\/uploads\/2023\/08\/microsoft-4.png","alt":"Microsoft"},{"url":"https:\/\/www.iab.com\/wp-content\/uploads\/2023\/08\/nbcuniversal-4.png","alt":"NBCUniversal"},{"url":"https:\/\/www.iab.com\/wp-content\/uploads\/2023\/08\/oracle-3.png","alt":"Oracle"},{"url":"https:\/\/www.iab.com\/wp-content\/uploads\/2022\/02\/4467143_P_Static_Logos_P_ICON_LOGO_BLUE_P_ICON_LOGO_BLUE.png","alt":"Paramount"},{"url":"https:\/\/www.iab.com\/wp-content\/uploads\/2023\/08\/pubmatic-23.png","alt":"PubMatic"},{"url":"https:\/\/www.iab.com\/wp-content\/uploads\/2023\/08\/siriusxm.png","alt":"SiriusXM"},{"url":"https:\/\/www.iab.com\/wp-content\/uploads\/2023\/08\/snapchat-2.png","alt":"Snapchat"},{"url":"https:\/\/www.iab.com\/wp-content\/uploads\/2022\/12\/tiktok-for-business.png","alt":"TikTok, Inc."},{"url":"https:\/\/www.iab.com\/wp-content\/uploads\/2023\/08\/thetradedesk.jpg","alt":"theTradeDesk"},{"url":"https:\/\/www.iab.com\/wp-content\/uploads\/2019\/02\/yahoo-verizon-media.png","alt":"Yahoo"},{"url":"https:\/\/www.iab.com\/wp-content\/uploads\/2023\/08\/warner-bros-discovery.jpg","alt":"Warner Bros. Discovery"}];

                    // prettier-ignore
                    var slots = [
                        [1, 2, 3],
                        [4, 5, 6],
                        [7, 8, 9]
                    ];

                    var flattened = R.flatten(slots);

                    /**
                     * Distribute the logos like a deck of cards into the appropriate 9 slots.
                     */
                    var distributed = slots.map(function(row, r) {
                        return row.map(function(column, c) {

                            var slotIndex = (r*3 + c);
                            var everyNth = logos.filter(function(logo, i) { 
                
                                var index = slotIndex - i;
                                var modulo = flattened.length;

                                // console.log(i, index % modulo == 0 ? 'XXXXX' : '');
                                
                                return index % modulo == 0;
                            });
                            // console.log(everyNth);
                            return {slotIndex: slotIndex + 1, logos: everyNth};
                        });
                    });

                    // console.log(distributed);

                    (function($) {
                        $(document).ready(function() {
                        Mustache.parse($('#template').html()); // optional, speeds up future uses
                        $('#target').html(Mustache.render($('#template').html(), {
                            slots: distributed,
                        }));

                        window.setTimeout(function() {
                            UIkit.slideshow('#member-slideshow-1').startAutoplay();
                            UIkit.slideshow('#member-slideshow-5').startAutoplay();
                        }, 0);

                        window.setTimeout(function() {
                            UIkit.slideshow('#member-slideshow-8').startAutoplay();
                            UIkit.slideshow('#member-slideshow-2').startAutoplay();
                        }, 2000);

                        window.setTimeout(function() {
                            UIkit.slideshow('#member-slideshow-4').startAutoplay();
                        }, 4000);

                        window.setTimeout(function() {
                            UIkit.slideshow('#member-slideshow-9').startAutoplay();
                            UIkit.slideshow('#member-slideshow-3').startAutoplay();
                        }, 6000);

                        window.setTimeout(function() {
                            UIkit.slideshow('#member-slideshow-6').startAutoplay();
                            UIkit.slideshow('#member-slideshow-7').startAutoplay();
                        }, 8000);

                        });
                    })(jQuery);

                </script>

                <style>
                    .module-our-mission__logos-grid {
                        margin-top: 25px !important;
                    }
                    .module-our-mission__logos-grid img {
                        width: 100%;
                        height: 50px;
                        max-width: 150px !important;
                        max-height: 50px !important;
                        object-fit: contain;
                    }
                </style>

                <div id="target"></div>
                

                <!-- docs suggest type="x-tmpl-mustache", but type="text/html" has syntax highlighting -->
                <script id="template" type="text/html">
                    {{#slots}}
                        <div class="module-our-mission__logos-grid" uk-grid>
                            {{#.}}
                                    <div class="uk-width-1-3">
                                    <div id="member-slideshow-{{slotIndex}}" data-slideshow-index="{{slotIndex}}" class="uk-position-relative uk-visible-toggle uk-light uk-animation-slow" tabindex="-1" uk-slideshow="animation: fade; draggable: false; autoplay: false; autoplay-interval: 9000; velocity: 1000">
                                        <ul class="uk-slideshow-items">
                                            {{#logos}}
                                                <li><img src="{{url}}" alt="{{alt}}" /></li>
                                            {{/logos}}
                                        </ul>
                                    </div>
                                </div>
                            {{/.}}
                        </div>
                    {{/slots}}
                </script>

            </div>
        </div>
    </div>
</section>
<section class="module-newsletter uk-padding-large uk-background-secondary">
    <div class="form-section uk-container-xlarge">
        <h1>Get the latest from<br>IAB in your inbox</h1>
        <p>Be the first to know. Sign up to receive news about the IAB programs, standards, events, classes, and more!</p>
        <div class="subscribe-form uk-width-expand@s">
            <a href="/subscribe" target="_blank" class="primary-button-black uk-padding-small uk-flex">
                Sign up now                <div class="arrow-right"></div>
            </a>
        </div>
    </div>
</section>
<section class="module-getting-involved">
    <div class="title-section uk-padding-large uk-flex uk-child-width-expand">
        <h1>Getting Involved</h1>
        <div>
            <p class="uk-margin-remove-top gray-light-text">
                Learn and lead. Sway the competitive balance in your direction. Advance your career and ensure the success of your business. Build lifelong connections. All at IAB.            </p>
        </div>
    </div>
    <div class="news-section">
        <div class="uk-grid-small uk-child-width-1-2 uk-child-width-1-4@m uk-grid-collapse uk-grid-match" uk-grid>
                    <a class="news-info uk-card uk-child-width-expand uk-grid-collapse" href="https://www.iab.com/groups/" uk-grid>
            <div class="news-cover"  style="background-image: url(https://www.iab.com/wp-content/uploads/2022/04/CommiteesCouncils_iStock-1143297123.png);;" ></div>
            <div class="description">
                <div class="post-title module-subtitle">Committees & Councils</div>
                <p class="gray-light-text">IAB helps drive the industry forward through the efforts of committees and councils in various industry segments.</p>
            </div>
        </a>
                <a class="news-info uk-card uk-child-width-expand uk-grid-collapse" href="/centers-of-excellence" uk-grid>
            <div class="news-cover"  style="background-image: url(https://www.iab.com/wp-content/uploads/2018/12/centers-of-excellence-home.png);;" ></div>
            <div class="description">
                <div class="post-title module-subtitle">Centers of Excellence</div>
                <p class="gray-light-text">Our Centers of Excellence, fully staffed and independently funded units within IAB, work with industry experts and members to develop standards, guidelines, best practices and other solutions to improve business outcomes for the industry.</p>
            </div>
        </a>
                <a class="news-info uk-card uk-child-width-expand uk-grid-collapse" href="https://www.iab.com/organizations/tech-lab/" uk-grid>
            <div class="news-cover"  style="background-image: url(https://www.iab.com/wp-content/uploads/2019/02/Tech-Lab-Home-Page-e1579383816105.jpg);background-position: 87.91% 25.26%;" ></div>
            <div class="description">
                <div class="post-title module-subtitle">Tech Lab</div>
                <p class="gray-light-text">IAB Technology Laboratory (IAB Tech Lab) is a nonprofit research and development consortium charged with producing technical standards, specifications and protocols to support member companies.</p>
            </div>
        </a>
                <a class="news-info uk-card uk-child-width-expand uk-grid-collapse" href="/topics/diversity-inclusion/" uk-grid>
            <div class="news-cover"  style="background-image: url(https://www.iab.com/wp-content/uploads/2022/04/DI_iStock-1313246059-1.jpg);;" ></div>
            <div class="description">
                <div class="post-title module-subtitle">Diversity & Inclusion</div>
                <p class="gray-light-text">IAB is dedicated to increasing diversity, equity, and inclusion throughout the digital industry through workforce development initiatives.</p>
            </div>
        </a>
                </div>
    </div>
</section>

<section class="module-training uk-padding-large uk-background-secondary">
    <div class="uk-container-xlarge uk-flex uk-child-width-expand">
        <div class="title-section uk-padding-large uk-padding-remove-top uk-padding-remove-bottom">
            <h1>Why Learn with IAB</h1>
            <p>We train media professionals and certify their knowledge for employers and business partners. Since 2012, 19,000 professionals at 1,500 companies have participated in our professional development programs.</p>
        </div>
        <div class="menu-section uk-padding-large uk-padding-remove-top uk-padding-remove-bottom">
                        <ul id="menu-training-certification" class="uk-flex uk-flex-column"><li id="menu-item-73689" class="menu-training-courses custom-link"><a href="https://www.iab.com/training-certification/#training">Training Courses<br /><span class="sub">In-depth crash courses designed to deepen you and your team’s knowledge of digital media</span></a></li>
<li id="menu-item-73690" class="menu-certifications custom-link"><a href="https://www.iab.com/training-certification/#certification">Certifications<br /><span class="sub">Certification exams that demonstrate you and your team perform against the highest industry standards. Prep courses available via the IAB for select Certifications.</span></a></li>
<li id="menu-item-73691" class="menu-group-trainings custom-link"><a href="/training-certification/#corporate">Group Trainings<br /><span class="sub">Customized group trainings designed to meet your team’s unique education needs or train your clients and partners</span></a></li>
<li id="menu-item-110760" class="menu-resources custom-link"><a href="https://www.iab.com/training-certification/#resources">Resources<br /><span class="sub">Best practices for professional development and strategies to enhance your career potential</span></a></li>
</ul>        </div>
    </div>
</section>
<section class="module-contact uk-padding-large uk-flex uk-flex-column uk-flex-center">
    <h1 class="uk-text-center">Questions about IAB?</h1>
    <button class="uk-button uk-button-default uk-align-center uk-border-thin uk-flex default-button-black" uk-toggle="target: #contact-form-modal">
        Contact Us        <div class="iabicon-arrow-in-circle-right arrow-icon"></div>
    </button>
    <div id="contact-form-modal" uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
            <h3>Contact Us</h3>
            <button class="uk-modal-close-default" type="button" aria-label="Close" uk-close></button>
                        
<div id="iabHubspotId_40b36503-b29e-4693-b383-2bb503df0198"
		>
	<div>

				
		<script type="text/javascript">

			if (!window.oneTrustBootstrapped) {
				window.oneTrustBootstrapped = {};
			}

			window.oneTrustBootstrapped["40b36503-b29e-4693-b383-2bb503df0198"] = false;

			// check if the user is in the EEA or UK and if OK, show the form
			window.addEventListener("OneTrustGroupsUpdated", handleHubspotFormThroughOneTrust);

			// OneTrustGroupsUpdated apparently doesn't always fire. So, attempt to also attach an event to domready.
			window.addEventListener("DOMContentLoaded", handleHubspotFormThroughOneTrust);

			// since OneTrustGroupsUpdated doesn't seem to fire sometimes, set a last-ditch-effort fallback
			setTimeout(handleHubspotFormThroughOneTrust, 5000);

			// check if the user is in the EEA or UK and if OK, show the form
			function handleHubspotFormThroughOneTrust(e) {
				console.info('OneTrustGroupsUpdated', e.detail);

				// if we've already bootstrapped, cancel
				if (window.oneTrustBootstrapped["40b36503-b29e-4693-b383-2bb503df0198"]) {
					console.info('OneTrustGroupsUpdated already bootstrapped for', '40b36503-b29e-4693-b383-2bb503df0198', 'canceling');
					return;
				}

				var canShowHubspotForm = OnetrustActiveGroups && OnetrustActiveGroups.includes("C0004");
				if (!canShowHubspotForm) return handleEEAUKFallbackMessage();
				// console.info("requested hsforms load");
				(() => {
					const script = document.createElement("script");
					script.setAttribute("type", "text/javascript");
					script.src = "https://js.hsforms.net/forms/v2.js";
					script.addEventListener("load", () => {
						hbspt.forms.create({
							region: "na1",
							portalId: "23143307",
							formId: "40b36503-b29e-4693-b383-2bb503df0198"
						});
					});
					document.head.append(script);
				})();

				// if we've gotten past being able to render the form,  
				// and OnetrustActiveGroups was active, 
				// register that onetrust was already bootstrapped
				if (typeof OnetrustActiveGroups !== 'undefined') {
					window.oneTrustBootstrapped["40b36503-b29e-4693-b383-2bb503df0198"] = true;
				}
			}

			// if the user is in the EEA or UK, show a message
			function handleEEAUKFallbackMessage() {
				// provide a message to the user explaining why the form isn't showing
				var modalBody = $('#iabHubspotId_40b36503-b29e-4693-b383-2bb503df0198 > .uk-modal-body');
				var parentId = '#iabHubspotId_40b36503-b29e-4693-b383-2bb503df0198';

				if ($('#iabHubspotId_40b36503-b29e-4693-b383-2bb503df0198 .eeauk-message-container').length) {
					return console.info('eea/uk message already added');
				}
				var htmlContent = `
					<div class="uk-container uk-container-small uk-margin-large-top uk-margin-large-bottom eeauk-message-container">
						<div class="uk-padding-large" style="border: 1px solid #dc291e;">
							<h3 class="uk-text-center">Thank you for your interest in IAB.</h3>
							<p class="uk-text-center">These forms are not intended for individuals in the European Economic Area or the United Kingdom.<p>
							<p class="uk-text-center">Please visit the <a href="https://www.iab.com/global/" target="_blank" style="color: #dc291e;">IABs in the EEA</a> for industry-leading events in Europe and European market-focused research, standards, and guidelines.</p>
						</div>
					</div>
				`;
				if (modalBody.length) {
					modalBody.append(htmlContent);
				} else {
					$(parentId).append(htmlContent);
				}
				console.info("hsforms can't show due to onetrust settings");
			}
		</script>

</div>
</div>

                    </div>
    </div>
</section>
<script>
    $(function() {
        // Replace textarea max characters message
        jQuery(document).ready(function(){
            var options = {
                'displayFormat' : '#input/500 characters remaining'
            };
            if (typeof $().textareaCount !== 'undefined') $('#contact-form-modal .gform_wrapper textarea').textareaCount(options);
        });
        UIkit.util.on('#contact-form-modal', 'shown', function () {
            if($('#contact-form-modal .cancel-contact-form') && $('#contact-form-modal .cancel-contact-form').length === 0) {
                // Add cancel button
                $('#contact-form-modal .gform_footer').append('<button class="cancel-contact-form uk-button uk-button-default uk-modal-close" type="button">Cancel</button>');
                // Add submit button class
                $('#contact-form-modal .gform_footer input[type="submit"]').addClass('primary-button-black');
            }
        });
        $('#contact-form-modal .gform_wrapper .gfield_select').on('change', function() {
            const selectText = $('#contact-form-modal .gform_wrapper .selector span')
            selectText.css('color', 'black'); // span is both, value and placeholder in gforms
        });
    });
</script>
<div class="module-knowledge-center module-filterable-content">
    <section class="search-page our-story search-results-main clearfix">
        <div class="search-container-wrapper">
            <div class="search-container">
                <div class="uk-grid uk-flex">
                    <div class="uk-width-1-1@s uk-width-4-4@m search-container__results-content-container">
                        <div class="module-heading">
                            <h1 class="module-">From the Knowledge Center</h1>
                        </div>
                        <!-- filters -->
                        
<div class="search-filter container" 
    data-date-format="m.d.y" 
    data-posts-limit="8" 
    data-taxonomy=""
    data-taxonomy-term="">
    <header>
                    <h3 class="module-subtitle">Site Results <span class="content-results-num-found"></span></h3>
                <p class="filter-by">Filter by:</p>
    </header>
    <!-- filters -->
    <div class="uk-grid">

        <!-- empty span so we can calculate the width of the topic dropdown width -->
        <span class="dropdown-span-width uk-width-1-1"></span>

        <!-- Topic -->
                <div class="uk-width-1-4@m uk-width-1-2">
            <div class="search-filter__group">
                <a href="#" class="filter article-filter__dropdown" data-target="topic">
                    <span class="article-filter__selected-topic">Topic</span>
                    <svg aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow-down"></use>
                    </svg>
                    <div class="linker"></div>
                </a>
                <div class="filter-items article-filter__list topic-filter" data-dropdown="topic">
                    <div id="search-topic-filter" class="topic-all">
                        <div class="topic-filter-options">
                            <a href="#" class="filter-option active" data-range="all">Popular topics</a>
                            <a href="#" class="filter-option" data-range="a-d">A - D</a>
                            <a href="#" class="filter-option" data-range="e-h">E - H</a>
                            <a href="#" class="filter-option" data-range="i-l">I - L</a>
                            <a href="#" class="filter-option" data-range="m-p">M - P</a>
                            <a href="#" class="filter-option" data-range="q-t">Q - T</a>
                            <a href="#" class="filter-option" data-range="u-z">U - Z</a>
                        </div>
                        <ul class="topic-filter-ul">
                                                                                                                                    <li                                         class="topic-a-d"
                                                                            >
                                        <a href="https://www.iab.com/topics/addressability/"
                                           data-value="addressability"
                                           data-dropdown-value="Addressability"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            Addressability
                                        </a>
                                    </li>
                                                                                                                                                                    <li                                         class="topic-a-d"
                                                                            >
                                        <a href="https://www.iab.com/topics/ad-revenue/"
                                           data-value="ad-revenue"
                                           data-dropdown-value="Advertising Revenue"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            Advertising Revenue
                                        </a>
                                    </li>
                                                                                                                                                                    <li                                         class="topic-a-d"
                                                                            >
                                        <a href="https://www.iab.com/topics/audio/"
                                           data-value="audio"
                                           data-dropdown-value="Audio"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            Audio
                                        </a>
                                    </li>
                                                                                                                                                                    <li                                         class="topic-a-d"
                                                                            >
                                        <a href="https://www.iab.com/topics/brands/"
                                           data-value="brands"
                                           data-dropdown-value="Brand Disruption"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            Brand Disruption
                                        </a>
                                    </li>
                                                                                                                                                                    <li                                         class="topic-a-d"
                                                                            >
                                        <a href="https://www.iab.com/topics/brand-safety/"
                                           data-value="brand-safety"
                                           data-dropdown-value="Brand Safety"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            Brand Safety
                                        </a>
                                    </li>
                                                                                                                                                                                                                                <li                                         class="topic-a-d"
                                                                            >
                                        <a href="https://www.iab.com/topics/consumers/"
                                           data-value="consumers"
                                           data-dropdown-value="Consumers"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            Consumers
                                        </a>
                                    </li>
                                                                                                                                                                    <li                                         class="topic-a-d"
                                                                            >
                                        <a href="https://www.iab.com/topics/creator-economy/"
                                           data-value="creator-economy"
                                           data-dropdown-value="Creator Economy"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            Creator Economy
                                        </a>
                                    </li>
                                                                                                                                                                    <li                                         class="topic-a-d"
                                                                            >
                                        <a href="https://www.iab.com/topics/digital-video/"
                                           data-value="digital-video"
                                           data-dropdown-value="Digital Video"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            Digital Video
                                        </a>
                                    </li>
                                                                                                                                                                    <li                                         class="topic-e-h"
                                                                            >
                                        <a href="https://www.iab.com/topics/gaming/"
                                           data-value="gaming"
                                           data-dropdown-value="Gaming"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            Gaming
                                        </a>
                                    </li>
                                                                                                                                                                                                                                <li                                         class="topic-i-l"
                                                                            >
                                        <a href="https://www.iab.com/topics/iab-alm/"
                                           data-value="iab-alm"
                                           data-dropdown-value="IAB ALM"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            IAB ALM
                                        </a>
                                    </li>
                                                                                                                                                                    <li                                         class="topic-i-l"
                                                                            >
                                        <a href="https://www.iab.com/topics/iab-member-only/"
                                           data-value="iab-member-only"
                                           data-dropdown-value="IAB Member Only"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            IAB Member Only
                                        </a>
                                    </li>
                                                                                                                                                                    <li                                         class="topic-i-l"
                                                                            >
                                        <a href="https://www.iab.com/topics/legal-affairs/"
                                           data-value="legal-affairs"
                                           data-dropdown-value="Legal Affairs"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            Legal Affairs
                                        </a>
                                    </li>
                                                                                                                                                                    <li                                         class="topic-m-p"
                                                                            >
                                        <a href="https://www.iab.com/topics/measurement/"
                                           data-value="measurement"
                                           data-dropdown-value="Measurement"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            Measurement
                                        </a>
                                    </li>
                                                                                                                                                                    <li                                         class="topic-m-p"
                                                                            >
                                        <a href="https://www.iab.com/topics/news/"
                                           data-value="news"
                                           data-dropdown-value="News"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            News
                                        </a>
                                    </li>
                                                                                                                                                                    <li                                         class="topic-m-p"
                                                                            >
                                        <a href="https://www.iab.com/topics/privacy/"
                                           data-value="privacy"
                                           data-dropdown-value="Privacy"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            Privacy
                                        </a>
                                    </li>
                                                                                                                                                                    <li                                         class="topic-m-p"
                                                                            >
                                        <a href="https://www.iab.com/topics/professional-development/"
                                           data-value="professional-development"
                                           data-dropdown-value="Professional Development"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            Professional Development
                                        </a>
                                    </li>
                                                                                                                                                                    <li                                         class="topic-m-p"
                                                                            >
                                        <a href="https://www.iab.com/topics/public-policy/"
                                           data-value="public-policy"
                                           data-dropdown-value="Public Policy"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            Public Policy
                                        </a>
                                    </li>
                                                                                                                                                                    <li                                         class="topic-m-p"
                                                                            >
                                        <a href="https://www.iab.com/topics/public-policy-newsletter/"
                                           data-value="public-policy-newsletter"
                                           data-dropdown-value="Public Policy Newsletter"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            Public Policy Newsletter
                                        </a>
                                    </li>
                                                                                                                                                                    <li                                         class="topic-q-t"
                                                                            >
                                        <a href="https://www.iab.com/topics/research/"
                                           data-value="research"
                                           data-dropdown-value="Research"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            Research
                                        </a>
                                    </li>
                                                                                                                                                                    <li                                         class="topic-q-t"
                                                                            >
                                        <a href="https://www.iab.com/topics/retail-media/"
                                           data-value="retail-media"
                                           data-dropdown-value="Retail Media"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            Retail Media
                                        </a>
                                    </li>
                                                                                                                                                                    <li                                         class="topic-q-t"
                                                                            >
                                        <a href="https://www.iab.com/topics/state-of-data/"
                                           data-value="state-of-data"
                                           data-dropdown-value="State of Data"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            State of Data
                                        </a>
                                    </li>
                                                                                                                                                                    <li                                         class="topic-q-t"
                                                                            >
                                        <a href="https://www.iab.com/topics/subscriber-only/"
                                           data-value="subscriber-only"
                                           data-dropdown-value="Subscriber Only"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            Subscriber Only
                                        </a>
                                    </li>
                                                                                                                                                                    <li                                         class="topic-q-t"
                                                                            >
                                        <a href="https://www.iab.com/topics/terms-conditions/"
                                           data-value="terms-conditions"
                                           data-dropdown-value="Terms &amp; Conditions"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                                                                                                                                                    <li                                         class="topic-q-t"
                                                                            >
                                        <a href="https://www.iab.com/topics/the-rise-of-retail-media-networks/"
                                           data-value="the-rise-of-retail-media-networks"
                                           data-dropdown-value="The Rise of Retail Media Networks"
                                           class="uk-button uk-button-default uk-text-truncate uk-text-capitalize topic-badge-button filter-link"
                                        >
                                            The Rise of Retail Media Networks
                                        </a>
                                    </li>
                                                                                    </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Type -->
                <div class="uk-width-1-4@m uk-width-1-2">
            <div class="search-filter__group">
                <a href="#" class="filter article-filter__dropdown" data-target="post-type">
                    <span class="article-filter__selected-topic">Type</span>
                    <svg aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow-down"></use>
                    </svg>
                    <div class="linker"></div>
                </a>
                <ul class="filter-items article-filter__list post-type-filter" data-dropdown="post-type" >
                                            <li  class="active"  >
                                                        <a href="https://www.iab.com/post" data-value="post" data-dropdown-value="Statements & Press" class="filter-link"><span class="type-checkbox"></span>Statements & Press</a>                        </li>
                                            <li  class="active"  >
                                                        <a href="https://www.iab.com/iab_blog" data-value="iab_blog" data-dropdown-value="Blog Posts" class="filter-link"><span class="type-checkbox"></span>Blog Posts</a>                        </li>
                                            <li  class="active"  >
                                                        <a href="https://www.iab.com/iab_guideline" data-value="iab_guideline" data-dropdown-value="Standards & Guidelines" class="filter-link"><span class="type-checkbox"></span>Standards & Guidelines</a>                        </li>
                                            <li  class="active"  >
                                                        <a href="https://www.iab.com/iab_insight" data-value="iab_insight" data-dropdown-value="Reports & Studies" class="filter-link"><span class="type-checkbox"></span>Reports & Studies</a>                        </li>
                                            <li  class="active"  >
                                                        <a href="https://www.iab.com/iab_video" data-value="iab_video" data-dropdown-value="Videos" class="filter-link"><span class="type-checkbox"></span>Videos</a>                        </li>
                                    </ul>
            </div>
        </div>
                
        <!-- Date -->
        
        <!-- Search Form -->
                    <div class="uk-width-expand">
                <div class="search-filter__group">
                    <div class="search-bar-container">
    <form id="search-ajax" role="search" method="get" class="search-form form-inline" action="https://www.iab.com/">
      <label class="sr-only">Search for:</label>
      <label>You searched for:</label>
      <div class="input-group search-results-main-input-group">
        <input type="search" id="s" value="" name="s" class="search-field form-control" placeholder="Search IAB" required>
        <span class="input-group-btn">
          <!--<button type="submit" class="search-submit btn btn-default">Search</button>-->
          <button type="submit" class="search-submit"><img src="https://www.iab.com/wp-content/themes/iab/lib-browser/img/icons/redesign/Search.png" alt="Menu" /></button>
      </span>
  </div>
</form>
</div>
                </div>
            </div>
            </div>

    <!-- applied filters container -->
    <div class="search-filter__applied-filers-container" id="appliedFiltersContainer">
        <span class="filter-items appliedTopicsContainer" data-dropdown="topic"></span>
        <span class="filter-items appliedTypeContainer" data-dropdown="post-type"></span>
        <span class="filter-items appliedDateRangeContainer" data-dropdown="date-range"></span>
        <span class="filter-items clearAllFiltersContainer" data-dropdown="clear-all"></span>
    </div>

    <!-- selected filter template -->
    <script type="text/template" id="selectedFilterTemplate">
        <a href="#" class="uk-button uk-button-default uk-text-capitalize <%= button_class %>" data-value="<%= data_value %>">
            <%= selected_filter %>
            <% if (include_close_icon) { %>
            <span uk-close class="close-icon-small"></span>
            <% } %>
        </a>
    </script>
</div>
                        <!-- content results -->
                        <section class="search-page__result clearfix"></section>
    <div class="pagination-mobile__button-container uk-padding-small padding-top uk-padding-remove-bottom">
        <div class="pagination-mobile__button uk-text-center primary-button-black uk-padding-small uk-width-1-2@m uk-width-expand uk-margin-auto pointer">
            Load More        </div>
    </div>
<!-- uk-card template for content results -->
<script type="text/template" id="contentResultTemplate">
    <div class="uk-width-1-4@l uk-width-1-3@m uk-width-1-2 uk-visible@s">
    <div class="uk-card uk-card-default results-card" >
        <a href="<%= permalink %>" aria-label="<%= title %>" title="<%= title %>">
            <div class="xxx-content-results-template uk-card-media-top results-card-image" style="<% if (thumbnail) { %>background-image: url('<% if (thumbnail.sizes) { %><%= thumbnail.sizes['medium_large'] %><% } else { %><%= thumbnail.url %><% } %>');<% if (thumbnail.image_focus) { %>background-position: <%= thumbnail.image_focus.left %> <%= thumbnail.image_focus.top %>;<% } %>background-size: cover;<% } else { %>background-image: url('https://www.iab.com/wp-content/themes/iab/assets/img/placeholder.jpg');<% } %>">
            </div>
        </a>
        <!-- card body -->
        <div class="results-card-body">
            <div> <!-- used to match height of card-body -->
                <a href="<%= permalink %>">
                    <p class="results-card-title"><%= title %></p>
                    <p class="results-card-teaser"><%= excerpt %></p>
                </a>
            </div>
        </div>

        <!-- tags -->
        <div class="results-card-footer">
            <span class="results-card-type-date">
                <span class="no-border-button type-and-date uk-button uk-button-default uk-text-capitalize">
                    <%= post_type %> - <%= date %>
                </span>
            </span>
            <% if (terms.length) { %>
                <span class="results-card-terms uk-hidden">
                    <!-- first tag -->
                    <a href="/topics/<%= terms[0].slug %>" class="uk-button uk-button-default uk-text-capitalize uk-text-truncate topic-badge-button"><%= terms[0].name %></a>
                    <!-- additional tags, if any -->
                <% if (terms.length > 1) {
                    var count = terms.length;
                    %>
                    <div class="uk-inline">
                        <!-- button -->
                        <button class="uk-button uk-button-default uk-text-capitalize topic-badge-button" type="button">+<%= count-1 %></button>
                        <!-- dropdown -->
                        <div uk-dropdown="pos: bottom-justify; offset: 15" class="results-card-badge-dropdown">
                            <% for (var i=1; i < count; i++) { %>
                                <a href="/topics/<%= terms[i].slug %>" class="uk-button uk-button-default uk-text-capitalize uk-text-truncate topic-badge-button" type="button"><%= terms[i].name %></a>
                            <% } %>
                        </div>
                    </div>
                <% } %>
                </span>
            <% } else { %>
            <!-- fixes an issue with footer height when no tags (just an empty element for spacing) -->
            <div class="uk-inline uk-invisible">
                <button class="uk-button topic-badge-button" type="button">&nbsp;</button>
            </div>
            <% } %>
            <!-- red arrow -->
            <a href="<%= permalink %>" class="search-results-red-arrow">
                <img src="https://www.iab.com/wp-content/themes/iab/lib-browser/img/icons/redesign/RedBackArrow.png" alt="Menu" />
            </a>
        </div>
    </div>
</div>
<div class="uk-flex uk-width-1-1 search-page__mobile-card uk-hidden@s">
    <div class="uk-width-1-3">
        <a class="uk-link-reset" href="<%= permalink %>" aria-label="<%= title %>" title="<%= title %>">
            <div class="search-page__mobile-card-image" <% if (thumbnail) { %> style="background-image: url('<%= thumbnail.url %>')" <% } else { %> style="background-image: url(https://www.iab.com/wp-content/themes/iab/assets/img/placeholder.jpg)" <% } %> >
            </div>
        </a>
    </div>
    <div class="uk-flex uk-flex-middle uk-width-2-3 search-page__mobile-card-title">
        <a class="uk-link-reset" href="<%= permalink %>">
            <p class="results-card-title uk-margin-remove">
                <%= title %>
            </p>
        </a>
    </div>
</div></script>

<!-- uk-grid template to wrap all uk-card results -->
<script type="text/template" id="resultGridTemplate">
    <div class="uk-grid search-page__result__grid" uk-grid uk-height-match="target: .results-card-body > div">

    </div>
</script>

<!-- template for site results -->
<script type="text/template" id="siteResultTemplate">
    <div class="site-result">
    <a href="<%= permalink %>">
        <!-- icon -->
        <div class="arrow-div">
            <span class="arrow-right"></span>
        </div>

        <!-- STANDARDS & GUIDELINES (section title) -->
        <div class="text-div">
            <span class="section-title uk-text-uppercase">
                <%= section_title %>
            </span>
            <!-- Topic > Title -->
            <span class="topic-and-title">
                <% if(topic_name!=="") { %> <%= topic_name %> > <% } %> <%= title %>
            </span>
        </div>
    </a>
</div>
<hr class="site-results-divider"></script>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div></section>
    </section><!-- /.main -->
        <footer
    class="uk-height-small"
    style="background: black;max-width: 100%;" role="contentinfo">
        <div class="uk-flex uk-height-1-1">
            <div class="footer-logo-mobile">
                <a href="https://www.iab.com/">
                    <img src="https://www.iab.com/wp-content/themes/iab/assets/img/iab-footer.jpg" alt="IAB | Interactive Advertising Bureau">
                </a>
            </div>
            <div class="footer-content uk-flex uk-width-auto uk-flex-middle">
                    <div class="uk-margin-large-left social-links">
                                    <a class="uk-margin-small-right" href="https://www.facebook.com/IAB" target="_blank" aria-label="facebook">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                            <a class="uk-margin-small-right" href="https://twitter.com/iab" target="_blank" aria-label="twitter">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                            <a class="uk-margin-small-right" href="https://www.linkedin.com/company/iab/" target="_blank" aria-label="linkedin">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                            <a class="uk-margin-small-right" href="https://instagram.com/iab_com/" target="_blank" aria-label="instagram">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                            <a class="uk-margin-small-right" href="https://www.youtube.com/user/IABtv" target="_blank" aria-label="youtube-play">
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
                                </div>
            </div>
            <div class="footer-menu uk-flex uk-width-expand uk-flex-middle uk-margin-large-right">
                <div class="uk-flex uk-flex-column uk-width-1-1 uk-text-right uk-margin-medium-right">
                    <div>
                        <ul id="footer-nav" class="uk-list-inline uk-margin-remove uk-padding-remove footer-links"><li class="menu-about-iab custom-link"><a href="/our-story/" class="fancybox">About IAB</a></li>
<li class="menu-contact-us custom-link"><a href="/contact/" class="fancybox">Contact Us</a></li>
<li class="menu-statements-press custom-link"><a href="/news/" class="fancybox">Statements &#038; Press</a></li>
<li class="menu-iab-careers custom-link"><a href="/careers/" class="fancybox">IAB Careers</a></li>
<li class="menu-my-iab-app custom-link"><a href="/download-my-iab-mobile-app/" class="fancybox">My IAB App</a></li>
</ul>                        <div class="footer-submenu">
                            <ul id="secondary-footer-nav" class="uk-list-inline uk-margin-remove uk-padding-remove"><li class="menu-privacy-policy"><a href="https://www.iab.com/privacy-policy/" class="fancybox">Privacy Policy</a></li>
<li class="menu-terms-of-use"><a href="https://www.iab.com/terms-of-use/" class="fancybox">Terms of Use</a></li>
<li class="menu-your-ad-choices custom-link"><a href="http://www.aboutads.info/" class="fancybox">Your Ad Choices</a></li>
</ul>                        </div>
                    </div>
                </div>
                <div class="footer-logo">
                    <a href="https://www.iab.com/">
                        <img src="https://www.iab.com/wp-content/themes/iab/assets/img/iab-footer.jpg" alt="IAB | Interactive Advertising Bureau">
                    </a>
                </div>
            </div>
        </div>
    <!-- back to top button -->
    <a href="#" class="btn-scroll-top">
        <img src="https://www.iab.com/wp-content/themes/iab/assets/img/backtotop.png" alt="Back to Top" />
    </a>
</footer>
          <script>
        function handleLogin(redirect) {
          const url = redirect ? `/wp-admin/admin-ajax.php?redirect_to=${redirect}`: `/wp-admin/admin-ajax.php`;
          $.ajax({
            url,
            type: 'POST',
            dataType: 'json',
            data: {
              action: 'login_redirect_action',
            },
            success: function(response) {
              window.location.href = response.data;
            },
            error: function(jqXHR, textStatus, errorThrown) {
              console.error('Unable to redirect to login.')
            }
          });
        }

        $('a.user-icon, .show-login, button.redirect-login').click(function(e) {
          e.preventDefault();
          const searchParams = new URLSearchParams(window.location.search);
          const redirect_to = searchParams.get("redirect_to") || window.location.pathname + encodeURIComponent(window.location.hash);
          handleLogin(redirect_to);
        }).css({"cursor": "pointer"});
      </script>
          <script>
        $('#error-close, #error-close-button').click(function() {
          const errorDialog = document.getElementById('error-dialog');
          errorDialog.close();
          window.history.replaceState(null, '', window.location.pathname);
        });

        function showErrorDialog() {
          const errorDialog = document.getElementById('error-dialog');
          errorDialog.show();
        }
      </script>
    	<script type="text/javascript">
		(function () {
			var c = document.body.className;
			c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
			document.body.className = c;
		})()
	</script>
	<script id="mediaelement-core-js-before" type="text/javascript">
var mejsL10n = {"language":"en","strings":{"mejs.download-file":"Download File","mejs.install-flash":"You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https:\/\/get.adobe.com\/flashplayer\/","mejs.fullscreen":"Fullscreen","mejs.play":"Play","mejs.pause":"Pause","mejs.time-slider":"Time Slider","mejs.time-help-text":"Use Left\/Right Arrow keys to advance one second, Up\/Down arrows to advance ten seconds.","mejs.live-broadcast":"Live Broadcast","mejs.volume-help-text":"Use Up\/Down Arrow keys to increase or decrease volume.","mejs.unmute":"Unmute","mejs.mute":"Mute","mejs.volume-slider":"Volume Slider","mejs.video-player":"Video Player","mejs.audio-player":"Audio Player","mejs.captions-subtitles":"Captions\/Subtitles","mejs.captions-chapters":"Chapters","mejs.none":"None","mejs.afrikaans":"Afrikaans","mejs.albanian":"Albanian","mejs.arabic":"Arabic","mejs.belarusian":"Belarusian","mejs.bulgarian":"Bulgarian","mejs.catalan":"Catalan","mejs.chinese":"Chinese","mejs.chinese-simplified":"Chinese (Simplified)","mejs.chinese-traditional":"Chinese (Traditional)","mejs.croatian":"Croatian","mejs.czech":"Czech","mejs.danish":"Danish","mejs.dutch":"Dutch","mejs.english":"English","mejs.estonian":"Estonian","mejs.filipino":"Filipino","mejs.finnish":"Finnish","mejs.french":"French","mejs.galician":"Galician","mejs.german":"German","mejs.greek":"Greek","mejs.haitian-creole":"Haitian Creole","mejs.hebrew":"Hebrew","mejs.hindi":"Hindi","mejs.hungarian":"Hungarian","mejs.icelandic":"Icelandic","mejs.indonesian":"Indonesian","mejs.irish":"Irish","mejs.italian":"Italian","mejs.japanese":"Japanese","mejs.korean":"Korean","mejs.latvian":"Latvian","mejs.lithuanian":"Lithuanian","mejs.macedonian":"Macedonian","mejs.malay":"Malay","mejs.maltese":"Maltese","mejs.norwegian":"Norwegian","mejs.persian":"Persian","mejs.polish":"Polish","mejs.portuguese":"Portuguese","mejs.romanian":"Romanian","mejs.russian":"Russian","mejs.serbian":"Serbian","mejs.slovak":"Slovak","mejs.slovenian":"Slovenian","mejs.spanish":"Spanish","mejs.swahili":"Swahili","mejs.swedish":"Swedish","mejs.tagalog":"Tagalog","mejs.thai":"Thai","mejs.turkish":"Turkish","mejs.ukrainian":"Ukrainian","mejs.vietnamese":"Vietnamese","mejs.welsh":"Welsh","mejs.yiddish":"Yiddish"}};
</script>
<script type='text/javascript' src='https://www.iab.com/wp-includes/js/mediaelement/mediaelement-and-player.min.js?ver=4.2.17' id='mediaelement-core-js'></script>
<script type='text/javascript' src='https://www.iab.com/wp-includes/js/mediaelement/mediaelement-migrate.min.js?ver=6.3.2' id='mediaelement-migrate-js'></script>
<script type='text/javascript' id='mediaelement-js-extra'>
/* <![CDATA[ */
var _wpmejsSettings = {"pluginPath":"\/wp-includes\/js\/mediaelement\/","classPrefix":"mejs-","stretching":"responsive","audioShortcodeLibrary":"mediaelement","videoShortcodeLibrary":"mediaelement"};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.iab.com/wp-includes/js/mediaelement/wp-mediaelement.min.js?ver=6.3.2' id='wp-mediaelement-js'></script>
<script type='text/javascript' id='leadin-script-loader-js-js-extra'>
/* <![CDATA[ */
var leadin_wordpress = {"userRole":"visitor","pageType":"home","leadinPluginVersion":"10.2.3"};
/* ]]> */
</script>
<script type="text/plain" class="optanon-category-C0004" id="hs-script-loader" async defer src="https://js.hs-scripts.com/23143307.js?integration=WordPress&#038;ver=10.2.3"></script><script type='text/javascript' src='https://www.iab.com/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.70' id='jquery-blockui-js'></script>
<script type='text/javascript' id='wc-add-to-cart-js-extra'>
/* <![CDATA[ */
var wc_add_to_cart_params = {"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%","i18n_view_cart":"View cart","cart_url":"https:\/\/www.iab.com\/cart\/","is_cart":"","cart_redirect_after_add":"no"};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.iab.com/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=4.7.0' id='wc-add-to-cart-js'></script>
<script type='text/javascript' src='https://www.iab.com/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4' id='js-cookie-js'></script>
<script type='text/javascript' id='woocommerce-js-extra'>
/* <![CDATA[ */
var woocommerce_params = {"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%"};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.iab.com/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=4.7.0' id='woocommerce-js'></script>
<script type='text/javascript' id='jquery.wp-smartcrop-js-extra'>
/* <![CDATA[ */
var wpsmartcrop_options = {"focus_mode":"power-lines"};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.iab.com/wp-content/plugins/wp-smartcrop/js/jquery.wp-smartcrop.min.js?ver=2.0.6' id='jquery.wp-smartcrop-js'></script>
<script type='text/javascript' src='https://www.iab.com/wp-includes/js/dist/vendor/wp-polyfill-inert.min.js?ver=3.1.2' id='wp-polyfill-inert-js'></script>
<script type='text/javascript' src='https://www.iab.com/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.13.11' id='regenerator-runtime-js'></script>
<script type='text/javascript' src='https://www.iab.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0' id='wp-polyfill-js'></script>
<script type='text/javascript' src='https://www.iab.com/wp-includes/js/dist/dom-ready.min.js?ver=392bdd43726760d1f3ca' id='wp-dom-ready-js'></script>
<script type='text/javascript' src='https://www.iab.com/wp-includes/js/dist/hooks.min.js?ver=c6aec9a8d4e5a5d543a1' id='wp-hooks-js'></script>
<script type='text/javascript' src='https://www.iab.com/wp-includes/js/dist/i18n.min.js?ver=7701b0c3857f914212ef' id='wp-i18n-js'></script>
<script id="wp-i18n-js-after" type="text/javascript">
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
</script>
<script type='text/javascript' src='https://www.iab.com/wp-includes/js/dist/a11y.min.js?ver=7032343a947cfccf5608' id='wp-a11y-js'></script>
<script type='text/javascript' defer='defer' src='https://www.iab.com/wp-content/plugins/gravityforms/assets/js/dist/vendor-theme.min.js?ver=4ef53fe41c14a48b294541d9fc37387e' id='gform_gravityforms_theme_vendors-js'></script>
<script type='text/javascript' id='gform_gravityforms_theme-js-extra'>
/* <![CDATA[ */
var gform_theme_config = {"common":{"form":{"honeypot":{"version_hash":"bcae1cc9919220e4c8cb20778ab15a19"}}},"hmr_dev":"","public_path":"https:\/\/www.iab.com\/wp-content\/plugins\/gravityforms\/assets\/js\/dist\/"};
/* ]]> */
</script>
<script type='text/javascript' defer='defer' src='https://www.iab.com/wp-content/plugins/gravityforms/assets/js/dist/scripts-theme.min.js?ver=f4d12a887a23a8c5755fd2b956bc8fcf' id='gform_gravityforms_theme-js'></script>
<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/ismobilejs/0.4.1/isMobile.min.js?ver=1.1.0' id='isMobile-js'></script>
<script type='text/javascript' src='https://www.iab.com/wp-content/themes/iab/lib-browser/js/plugins/jQuery.succinct.min.js?ver=1.1.0' id='succinct-js'></script>
<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/js/swiper.min.js?ver=4.4.6' id='swiper-js'></script>
<script type='text/javascript' src='https://www.iab.com/wp-content/themes/iab/assets/js/redesign.js?ver=1.0.2' id='redesign-js'></script>
<script type='text/javascript' src='https://www.iab.com/wp-content/themes/iab/assets/js/initialize/jquery.initialize.min.js?ver=1.3.0' id='mutationobserver-js'></script>
<script type='text/javascript' src='https://www.iab.com/wp-content/themes/iab/assets/js/scrollMonitor.js?ver=1.2.2' id='scrollMonitor-js'></script>
<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.5.3/dialog-polyfill.min.js?ver=0.5.3' id='dialog-polyfill-js'></script>
<script type='text/javascript' src='https://www.iab.com/wp-content/themes/iab/assets/js/polyfill/init-dialog-polyfill.js?ver=1.0.1' id='dialog-polyfill-init-js'></script>
<script type='text/javascript' src='https://www.iab.com/wp-content/plugins/page-links-to/dist/new-tab.js?ver=3.3.6' id='page-links-to-js'></script>
<script type='text/javascript' id='iab_js-js-extra'>
/* <![CDATA[ */
var localizedVars = {"startPage":"1","postType":""};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.iab.com/wp-content/themes/iab/assets/js/scripts_unminify.js?var=24-16-01-06-58-13' id='iab_js-js'></script>
<script type='text/javascript' src='https://www.iab.com/wp-content/themes/iab/assets/js/custom_scripts.js?var=24-16-01-06-58-13' id='custom_scripts-js'></script>
<script type="text/plain" class="optanon-category-C0004" charset="utf-8" src="//js.hsforms.net/forms/embed/v2.js?ver=6.3.2"></script><script type="text/plain" class="optanon-category-C0002">
      (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
    e=o.createElement(i);r=o.getElementsByTagName(i)[0];
    e.src='//www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
    ga('create','UA-6098169-1','auto', {'allowLinker': true, userId: ''});
  // ga('require', 'linker');
  // ga('linker:autoLink', ['portal.iab.com']);
    ga('send','pageview',{'page': location.pathname + location.search + location.hash, 'dimension1': ''});
  (function($) {
    $(function() {
      if (typeof ga === 'function') {

        // documents
        $('a').filter(function() {
          if ($(this).attr('href')) {
            return $(this).attr('href').match(/\.(pdf|doc|docx|ppt|pptx|xls|slxs|txt|rtf)$/i);
          }
        }).on('click', function() { 
          ga('send', {
            hitType: 'event',
            eventCategory: 'Downloads',
            eventAction: 'download',
            eventLabel: $(this).attr('href')
          });
        });

      } else {
        console.warn('GA is not available yet.')
      }
    });
  })(jQuery);
</script>

  </div><!-- /.wrap -->

		
    	<script type="text/plain" class="optanon-category-C0004">
_linkedin_partner_id = "4331474";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script><script type="text/plain" class="optanon-category-C0004">
(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);
</script>
</body>
</html>
