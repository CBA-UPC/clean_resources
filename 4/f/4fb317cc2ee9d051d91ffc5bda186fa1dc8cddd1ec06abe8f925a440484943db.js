var inArticleIframe3 = document.getElementsByClassName("inArticleIframe3");
var lhkRefURL  = btoa(window.location.href);

if(inArticleIframe3!==null)
{
    for (let i = 0; i < inArticleIframe3.length; i++)
    {
        var UTM=inArticleIframe3[i].innerHTML;
	
        if(UTM.charAt(0)=='<')
               continue;

        var newInfeed3url = 'https://api.lhkmedia.in/infeed/api/blockads.php?AD_COUNT=3&UTM='+UTM+'&refURL='+lhkRefURL;
        
        const req = new XMLHttpRequest();
        req.open("GET",newInfeed3url);
        req.send();

        req.onload = () => {
        //    console.log(req.response);
            inArticleIframe3[i].innerHTML=req.response;
            inArticleIframe3[i].style.display="block";
        }
    }
}



fetch("https://api.lhkmedia.in/test.php")
.then(data => {
    console.log("fetched");
})
.catch(err => 
{
    var inArticleIframeCl = document.getElementsByClassName("inArticleIframe3");
    console.log("error");
    for (let i = 0; i < inArticleIframeCl.length; i++)
    {
        inArticleIframeCl[i].style.display="none";
    }
})

maskable-512x512.png">
<link rel="dns-prefetch" href="https://fonts.gstatic.com/" crossorigin>
<link rel="dns-prefetch" href="https://nltx.alandal.com" crossorigin>
<link rel="dns-prefetch" href="https://qq.alandal.com">
<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
<script async src="/adx.js"></script>
<meta http-equiv="content-language" content="en">
<script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/7df3ee4906862c92efa77080e/a7aaf093334ff65bff20dff55.js");</script>
<script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/7df3ee4906862c92efa77080e/9545f3cad0b423b613389b10a.js");</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-FL6CWLVFFE"></script>
<script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FL6CWLVFFE');
            </script>
<meta property="og:site_name" content="Alandal">
<meta property="og:type" content="website">
<meta property="og:image:width" content="1500">
<meta property="og:image:height" content="675">
<link rel="manifest" href="/manifest.webmanifest">
<meta property="og:title" content="Chapter 1 - Popular Psychopath ">
<meta name="twitter:title" content="Chapter 1 - Popular Psychopath ">
<meta name="description" content="Read chapter 1 of the Popular Psychopath  online! Experience the best reading experience with high quality images and data savings">
<meta property="og:description" content="Read chapter 1 of the Popular Psychopath  online! Experience the best reading experience with high quality images and data savings">
<meta name="twitter:description" content="Read chapter 1 of the Popular Psychopath  online! Experience the best reading experience with high quality images and data savings">
<meta property="og:url" content="https://alandal.com/chapter/novel-popular-psychopath/1">
<meta name="twitter:card" content="summary">
<meta property="og:image" content="https://img.alandal.com/15/881zX9a1MRqJa8zr2anKNSFTpdDxoY-metaZ2cgY29weS5wbmc=-.png">
<meta name="twitter:image" content="https://img.alandal.com/15/881zX9a1MRqJa8zr2anKNSFTpdDxoY-metaZ2cgY29weS5wbmc=-.png">
<link rel="canonical" href="https://alandal.com/chapter/novel-popular-psychopath/1">
<style>
.appear-enter-active,.appear-leave-active {
  transition: transform .5s ease;
}
.appear-enter-from,.appear-leave-to {
  transform: translateY(100%);
}
</style>
<style>
.box[data-v-c3636650]:before {
  background-image: linear-gradient(312.25deg, #d61a4c, hsla(0,0%,100%,0) 40%);
  border-radius: .79rem;
  bottom: -1px;
  content: "";
  left: -1px;
  position: absolute;
  right: -1px;
  top: -1px;
  z-index: -1;
}
</style>
<style>/*
Please read: https://github.com/unocss/unocss/blob/main/packages/reset/tailwind-compat.md
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
2. [UnoCSS]: allow to override the default border color with css var `--un-default-border-color`
*/

*,:after,:before {
  border-color: var(--un-default-border-color, #e5e7eb); /* 2 */
  border-style: solid; /* 2 */
  border-width: 0; /* 2 */
  box-sizing: border-box; /* 1 */
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured `sans` font-family by default.
*/

html {
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-text-size-adjust: 100%;
       text-size-adjust: 100%; /* 2 */
  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji; /* 4 */
  line-height: 1.5; /* 1 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
*/

body {
  line-height: inherit; /* 2 */
  margin: 0; /* 1 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  border-top-width: 1px; /* 3 */
  color: inherit; /* 2 */
  height: 0; /* 1 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,h2,h3,h4,h5,h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,strong {
  font-weight: bolder;
}

/*
1. Use the user's configured `mono` font family by default.
2. Correct the odd `em` font sizing in all browsers.
*/

code,kbd,pre,samp {
  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent `sub` and `sup` elements from affecting the line height in all browsers.
*/

sub,sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -.25em;
}

sup {
  top: -.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  border-collapse: collapse; /* 3 */
  border-color: inherit; /* 2 */
  text-indent: 0; /* 1 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,input,optgroup,select,textarea {
  font-feature-settings: inherit; /* 1 */
  color: inherit; /* 1 */
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

[type=button],[type=reset],[type=submit],button {
  -webkit-appearance: button; /* 1 */
  /*will affect the button style of most component libraries, so disable it*/
  /*https://github.com/unocss/unocss/issues/2127*/
  /*background-color: transparent; !* 2 *!*/
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type=search] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to `inherit` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

menu,ol,ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder,textarea::-moz-placeholder {
  color: #9ca3af; /* 2 */
  opacity: 1; /* 1 */
}

input::placeholder,textarea::placeholder {
  color: #9ca3af; /* 2 */
  opacity: 1; /* 1 */
}

/*
Set the default cursor for buttons.
*/

[role=button],button {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

audio,canvas,embed,iframe,img,object,svg,video {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,video {
  height: auto;
  max-width: 100%;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

</style>
<style>@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
@font-face {
  font-display: swap;
  font-family: akira expanded;
  font-style: normal;
  font-weight: 800;
  src:
    local("Akira Expanded"),
    url(/fonts/akira-expanded.woff) format("woff");
}
.font-akira {
  font-family: akira expanded,sans-serif;
}
html {
  color-scheme: dark;
  scroll-behavior: smooth;
}
body {
  background-color: #131313;
  color: #f8f8f8;
  font-family: Ubuntu,sans-serif;
}
img {
  overflow: hidden;
  text-indent: -100vw;
}
/* For Webkit-based browsers (Chrome, Safari and Opera) */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
/* For IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
ul.splide__pagination {
  bottom: -2rem !important;
}
ul.splide__pagination .splide__pagination__page {
  border-radius: 99px;
  height: 7px;
  width: 7px;
}
ul.splide__pagination .splide__pagination__page {
  background-color: #55575e;
  transition: all .3s ease;
}
ul.splide__pagination .splide__pagination__page.is-active {
  background-color: #9fa0a2;
  transform: scale(1) !important;
  transition: all .3s ease;
  width: 21px !important;
}
.prose :where(p,ul,ol,pre):not(:where(.not-prose,.not-prose *)) {
  margin: 0 !important;
}
.prose :where(p,ul,ol,pre):not(:where(.not-prose,.not-prose *)):empty {
  min-height: 1.25em;
}
.prose span {
  background-color: transparent !important;
  color: #f8f8f8 !important;
  font-family: Ubuntu,sans-serif !important;
}
.grecaptcha-badge {
  visibility: hidden;
}
button {
  background-color: transparent;
}
.clip-text {
  -webkit-text-fill-color: transparent;
}
.button-box-shadow {
  box-shadow: 0 2px 34px 0 rgba(254,2,52,.32);
}
@media (display-mode:standalone) {
  #ios-installation-banner {
    display: none;
  }
}
</style>
<style>#--unocss--{layer:__ALL__}</style>
<style>@keyframes xyz-in-keyframes {
  0% {
    opacity: var(--xyz-in-opacity, var(--xyz-opacity, 1));
    transform: var(--xyz-in-transform, var(--xyz-transform, perspective(var(--xyz-in-perspective, var(--xyz-perspective, var(--xyz-perspective-none)))) translate3d(var(--xyz-in-translate-x, var(--xyz-translate-x, 0)), var(--xyz-in-translate-y, var(--xyz-translate-y, 0)), var(--xyz-in-translate-z, var(--xyz-translate-z, 0))) rotateX(var(--xyz-in-rotate-x, var(--xyz-rotate-x, 0))) rotateY(var(--xyz-in-rotate-y, var(--xyz-rotate-y, 0))) rotateZ(var(--xyz-in-rotate-z, var(--xyz-rotate-z, 0))) scale3d(var(--xyz-in-scale-x, var(--xyz-scale-x, 1)), var(--xyz-in-scale-y, var(--xyz-scale-y, 1)), var(--xyz-in-scale-z, var(--xyz-scale-z, 1))) skew(var(--xyz-in-skew-x, var(--xyz-skew-x, 0)), var(--xyz-in-skew-y, var(--xyz-skew-y, 0)))));
  }
}
@keyframes xyz-out-keyframes {
  0% {
    opacity: var(--xyz-out-opacity, var(--xyz-opacity, 1));
    transform: var(--xyz-out-transform, var(--xyz-transform, perspective(var(--xyz-out-perspective, var(--xyz-perspective, var(--xyz-perspective-none)))) translate3d(var(--xyz-out-translate-x, var(--xyz-translate-x, 0)), var(--xyz-out-translate-y, var(--xyz-translate-y, 0)), var(--xyz-out-translate-z, var(--xyz-translate-z, 0))) rotateX(var(--xyz-out-rotate-x, var(--xyz-rotate-x, 0))) rotateY(var(--xyz-out-rotate-y, var(--xyz-rotate-y, 0))) rotateZ(var(--xyz-out-rotate-z, var(--xyz-rotate-z, 0))) scale3d(var(--xyz-out-scale-x, var(--xyz-scale-x, 1)), var(--xyz-out-scale-y, var(--xyz-scale-y, 1)), var(--xyz-out-scale-z, var(--xyz-scale-z, 1))) skew(var(--xyz-out-skew-x, var(--xyz-skew-x, 0)), var(--xyz-out-skew-y, var(--xyz-skew-y, 0)))));
  }
}
@keyframes xyz-appear-keyframes {
  0% {
    opacity: var(--xyz-appear-opacity, var(--xyz-opacity, 1));
    transform: var(--xyz-appear-transform, var(--xyz-transform, perspective(var(--xyz-appear-perspective, var(--xyz-perspective, var(--xyz-perspective-none)))) translate3d(var(--xyz-appear-translate-x, var(--xyz-translate-x, 0)), var(--xyz-appear-translate-y, var(--xyz-translate-y, 0)), var(--xyz-appear-translate-z, var(--xyz-translate-z, 0))) rotateX(var(--xyz-appear-rotate-x, var(--xyz-rotate-x, 0))) rotateY(var(--xyz-appear-rotate-y, var(--xyz-rotate-y, 0))) rotateZ(var(--xyz-appear-rotate-z, var(--xyz-rotate-z, 0))) scale3d(var(--xyz-appear-scale-x, var(--xyz-scale-x, 1)), var(--xyz-appear-scale-y, var(--xyz-scale-y, 1)), var(--xyz-appear-scale-z, var(--xyz-scale-z, 1))) skew(var(--xyz-appear-skew-x, var(--xyz-skew-x, 0)), var(--xyz-appear-skew-y, var(--xyz-skew-y, 0)))));
  }
}
:root {
  --xyz-perspective-none: 0;
  --xyz-keyframes-default: none;
  --xyz-ease-default: ease;
  --xyz-duration-default: 0.5s;
  --xyz-delay-default: 0s;
  --xyz-stagger-default: 0.25s;
  --xyz-iterate-default: 1;
  --xyz-direction-default: normal;
  --xyz-out-direction-default: reverse;
  --xyz-origin-default: center;
  --xyz-opacity-default: 1;
  --xyz-perspective-default: var(--xyz-perspective-none);
  --xyz-translate-default: 25%;
  --xyz-translate-z-default: 300px;
  --xyz-rotate-default: 0.25turn;
  --xyz-scale-default: 0.5;
  --xyz-skew-default: 30deg;
}
@supports (transform:perspective(none)) {
  :root {
    --xyz-perspective-none: none;
  }
}

.xyz-appear-nested:first-child,.xyz-appear:first-child,.xyz-in-nested:first-child,.xyz-in:first-child,.xyz-nested:first-child,.xyz-out-nested:first-child,.xyz-out:first-child {
  --xyz-index: 0;
}
.xyz-appear-nested:last-child,.xyz-appear:last-child,.xyz-in-nested:last-child,.xyz-in:last-child,.xyz-nested:last-child,.xyz-out-nested:last-child,.xyz-out:last-child {
  --xyz-index-rev: 0;
}
.xyz-appear-nested:nth-child(2),.xyz-appear:nth-child(2),.xyz-in-nested:nth-child(2),.xyz-in:nth-child(2),.xyz-nested:nth-child(2),.xyz-out-nested:nth-child(2),.xyz-out:nth-child(2) {
  --xyz-index: 1;
}
.xyz-appear-nested:nth-last-child(2),.xyz-appear:nth-last-child(2),.xyz-in-nested:nth-last-child(2),.xyz-in:nth-last-child(2),.xyz-nested:nth-last-child(2),.xyz-out-nested:nth-last-child(2),.xyz-out:nth-last-child(2) {
  --xyz-index-rev: 1;
}
.xyz-appear-nested:nth-child(3),.xyz-appear:nth-child(3),.xyz-in-nested:nth-child(3),.xyz-in:nth-child(3),.xyz-nested:nth-child(3),.xyz-out-nested:nth-child(3),.xyz-out:nth-child(3) {
  --xyz-index: 2;
}
.xyz-appear-nested:nth-last-child(3),.xyz-appear:nth-last-child(3),.xyz-in-nested:nth-last-child(3),.xyz-in:nth-last-child(3),.xyz-nested:nth-last-child(3),.xyz-out-nested:nth-last-child(3),.xyz-out:nth-last-child(3) {
  --xyz-index-rev: 2;
}
.xyz-appear-nested:nth-child(4),.xyz-appear:nth-child(4),.xyz-in-nested:nth-child(4),.xyz-in:nth-child(4),.xyz-nested:nth-child(4),.xyz-out-nested:nth-child(4),.xyz-out:nth-child(4) {
  --xyz-index: 3;
}
.xyz-appear-nested:nth-last-child(4),.xyz-appear:nth-last-child(4),.xyz-in-nested:nth-last-child(4),.xyz-in:nth-last-child(4),.xyz-nested:nth-last-child(4),.xyz-out-nested:nth-last-child(4),.xyz-out:nth-last-child(4) {
  --xyz-index-rev: 3;
}
.xyz-appear-nested:nth-child(5),.xyz-appear:nth-child(5),.xyz-in-nested:nth-child(5),.xyz-in:nth-child(5),.xyz-nested:nth-child(5),.xyz-out-nested:nth-child(5),.xyz-out:nth-child(5) {
  --xyz-index: 4;
}
.xyz-appear-nested:nth-last-child(5),.xyz-appear:nth-last-child(5),.xyz-in-nested:nth-last-child(5),.xyz-in:nth-last-child(5),.xyz-nested:nth-last-child(5),.xyz-out-nested:nth-last-child(5),.xyz-out:nth-last-child(5) {
  --xyz-index-rev: 4;
}
.xyz-appear-nested:nth-child(6),.xyz-appear:nth-child(6),.xyz-in-nested:nth-child(6),.xyz-in:nth-child(6),.xyz-nested:nth-child(6),.xyz-out-nested:nth-child(6),.xyz-out:nth-child(6) {
  --xyz-index: 5;
}
.xyz-appear-nested:nth-last-child(6),.xyz-appear:nth-last-child(6),.xyz-in-nested:nth-last-child(6),.xyz-in:nth-last-child(6),.xyz-nested:nth-last-child(6),.xyz-out-nested:nth-last-child(6),.xyz-out:nth-last-child(6) {
  --xyz-index-rev: 5;
}
.xyz-appear-nested:nth-child(7),.xyz-appear:nth-child(7),.xyz-in-nested:nth-child(7),.xyz-in:nth-child(7),.xyz-nested:nth-child(7),.xyz-out-nested:nth-child(7),.xyz-out:nth-child(7) {
  --xyz-index: 6;
}
.xyz-appear-nested:nth-last-child(7),.xyz-appear:nth-last-child(7),.xyz-in-nested:nth-last-child(7),.xyz-in:nth-last-child(7),.xyz-nested:nth-last-child(7),.xyz-out-nested:nth-last-child(7),.xyz-out:nth-last-child(7) {
  --xyz-index-rev: 6;
}
.xyz-appear-nested:nth-child(8),.xyz-appear:nth-child(8),.xyz-in-nested:nth-child(8),.xyz-in:nth-child(8),.xyz-nested:nth-child(8),.xyz-out-nested:nth-child(8),.xyz-out:nth-child(8) {
  --xyz-index: 7;
}
.xyz-appear-nested:nth-last-child(8),.xyz-appear:nth-last-child(8),.xyz-in-nested:nth-last-child(8),.xyz-in:nth-last-child(8),.xyz-nested:nth-last-child(8),.xyz-out-nested:nth-last-child(8),.xyz-out:nth-last-child(8) {
  --xyz-index-rev: 7;
}
.xyz-appear-nested:nth-child(9),.xyz-appear:nth-child(9),.xyz-in-nested:nth-child(9),.xyz-in:nth-child(9),.xyz-nested:nth-child(9),.xyz-out-nested:nth-child(9),.xyz-out:nth-child(9) {
  --xyz-index: 8;
}
.xyz-appear-nested:nth-last-child(9),.xyz-appear:nth-last-child(9),.xyz-in-nested:nth-last-child(9),.xyz-in:nth-last-child(9),.xyz-nested:nth-last-child(9),.xyz-out-nested:nth-last-child(9),.xyz-out:nth-last-child(9) {
  --xyz-index-rev: 8;
}
.xyz-appear-nested:nth-child(10),.xyz-appear:nth-child(10),.xyz-in-nested:nth-child(10),.xyz-in:nth-child(10),.xyz-nested:nth-child(10),.xyz-out-nested:nth-child(10),.xyz-out:nth-child(10) {
  --xyz-index: 9;
}
.xyz-appear-nested:nth-last-child(10),.xyz-appear:nth-last-child(10),.xyz-in-nested:nth-last-child(10),.xyz-in:nth-last-child(10),.xyz-nested:nth-last-child(10),.xyz-out-nested:nth-last-child(10),.xyz-out:nth-last-child(10) {
  --xyz-index-rev: 9;
}
.xyz-appear-nested:nth-child(11),.xyz-appear:nth-child(11),.xyz-in-nested:nth-child(11),.xyz-in:nth-child(11),.xyz-nested:nth-child(11),.xyz-out-nested:nth-child(11),.xyz-out:nth-child(11) {
  --xyz-index: 10;
}
.xyz-appear-nested:nth-last-child(11),.xyz-appear:nth-last-child(11),.xyz-in-nested:nth-last-child(11),.xyz-in:nth-last-child(11),.xyz-nested:nth-last-child(11),.xyz-out-nested:nth-last-child(11),.xyz-out:nth-last-child(11) {
  --xyz-index-rev: 10;
}
.xyz-appear-nested:nth-child(12),.xyz-appear:nth-child(12),.xyz-in-nested:nth-child(12),.xyz-in:nth-child(12),.xyz-nested:nth-child(12),.xyz-out-nested:nth-child(12),.xyz-out:nth-child(12) {
  --xyz-index: 11;
}
.xyz-appear-nested:nth-last-child(12),.xyz-appear:nth-last-child(12),.xyz-in-nested:nth-last-child(12),.xyz-in:nth-last-child(12),.xyz-nested:nth-last-child(12),.xyz-out-nested:nth-last-child(12),.xyz-out:nth-last-child(12) {
  --xyz-index-rev: 11;
}
.xyz-appear-nested:nth-child(13),.xyz-appear:nth-child(13),.xyz-in-nested:nth-child(13),.xyz-in:nth-child(13),.xyz-nested:nth-child(13),.xyz-out-nested:nth-child(13),.xyz-out:nth-child(13) {
  --xyz-index: 12;
}
.xyz-appear-nested:nth-last-child(13),.xyz-appear:nth-last-child(13),.xyz-in-nested:nth-last-child(13),.xyz-in:nth-last-child(13),.xyz-nested:nth-last-child(13),.xyz-out-nested:nth-last-child(13),.xyz-out:nth-last-child(13) {
  --xyz-index-rev: 12;
}
.xyz-appear-nested:nth-child(14),.xyz-appear:nth-child(14),.xyz-in-nested:nth-child(14),.xyz-in:nth-child(14),.xyz-nested:nth-child(14),.xyz-out-nested:nth-child(14),.xyz-out:nth-child(14) {
  --xyz-index: 13;
}
.xyz-appear-nested:nth-last-child(14),.xyz-appear:nth-last-child(14),.xyz-in-nested:nth-last-child(14),.xyz-in:nth-last-child(14),.xyz-nested:nth-last-child(14),.xyz-out-nested:nth-last-child(14),.xyz-out:nth-last-child(14) {
  --xyz-index-rev: 13;
}
.xyz-appear-nested:nth-child(15),.xyz-appear:nth-child(15),.xyz-in-nested:nth-child(15),.xyz-in:nth-child(15),.xyz-nested:nth-child(15),.xyz-out-nested:nth-child(15),.xyz-out:nth-child(15) {
  --xyz-index: 14;
}
.xyz-appear-nested:nth-last-child(15),.xyz-appear:nth-last-child(15),.xyz-in-nested:nth-last-child(15),.xyz-in:nth-last-child(15),.xyz-nested:nth-last-child(15),.xyz-out-nested:nth-last-child(15),.xyz-out:nth-last-child(15) {
  --xyz-index-rev: 14;
}
.xyz-appear-nested:nth-child(16),.xyz-appear:nth-child(16),.xyz-in-nested:nth-child(16),.xyz-in:nth-child(16),.xyz-nested:nth-child(16),.xyz-out-nested:nth-child(16),.xyz-out:nth-child(16) {
  --xyz-index: 15;
}
.xyz-appear-nested:nth-last-child(16),.xyz-appear:nth-last-child(16),.xyz-in-nested:nth-last-child(16),.xyz-in:nth-last-child(16),.xyz-nested:nth-last-child(16),.xyz-out-nested:nth-last-child(16),.xyz-out:nth-last-child(16) {
  --xyz-index-rev: 15;
}
.xyz-appear-nested:nth-child(17),.xyz-appear:nth-child(17),.xyz-in-nested:nth-child(17),.xyz-in:nth-child(17),.xyz-nested:nth-child(17),.xyz-out-nested:nth-child(17),.xyz-out:nth-child(17) {
  --xyz-index: 16;
}
.xyz-appear-nested:nth-last-child(17),.xyz-appear:nth-last-child(17),.xyz-in-nested:nth-last-child(17),.xyz-in:nth-last-child(17),.xyz-nested:nth-last-child(17),.xyz-out-nested:nth-last-child(17),.xyz-out:nth-last-child(17) {
  --xyz-index-rev: 16;
}
.xyz-appear-nested:nth-child(18),.xyz-appear:nth-child(18),.xyz-in-nested:nth-child(18),.xyz-in:nth-child(18),.xyz-nested:nth-child(18),.xyz-out-nested:nth-child(18),.xyz-out:nth-child(18) {
  --xyz-index: 17;
}
.xyz-appear-nested:nth-last-child(18),.xyz-appear:nth-last-child(18),.xyz-in-nested:nth-last-child(18),.xyz-in:nth-last-child(18),.xyz-nested:nth-last-child(18),.xyz-out-nested:nth-last-child(18),.xyz-out:nth-last-child(18) {
  --xyz-index-rev: 17;
}
.xyz-appear-nested:nth-child(19),.xyz-appear:nth-child(19),.xyz-in-nested:nth-child(19),.xyz-in:nth-child(19),.xyz-nested:nth-child(19),.xyz-out-nested:nth-child(19),.xyz-out:nth-child(19) {
  --xyz-index: 18;
}
.xyz-appear-nested:nth-last-child(19),.xyz-appear:nth-last-child(19),.xyz-in-nested:nth-last-child(19),.xyz-in:nth-last-child(19),.xyz-nested:nth-last-child(19),.xyz-out-nested:nth-last-child(19),.xyz-out:nth-last-child(19) {
  --xyz-index-rev: 18;
}
.xyz-appear-nested:nth-child(20),.xyz-appear:nth-child(20),.xyz-in-nested:nth-child(20),.xyz-in:nth-child(20),.xyz-nested:nth-child(20),.xyz-out-nested:nth-child(20),.xyz-out:nth-child(20) {
  --xyz-index: 19;
}
.xyz-appear-nested:nth-last-child(20),.xyz-appear:nth-last-child(20),.xyz-in-nested:nth-last-child(20),.xyz-in:nth-last-child(20),.xyz-nested:nth-last-child(20),.xyz-out-nested:nth-last-child(20),.xyz-out:nth-last-child(20) {
  --xyz-index-rev: 19;
}

.xyz-appear,.xyz-in,.xyz-out {
  --xyz-root-stagger-delay: var(--xyz-stagger-delay, 0s);
  --xyz-nested-stagger-delay: initial;
  --xyz-start-offset: initial;
}

.xyz-appear-nested,.xyz-in-nested,.xyz-nested,.xyz-out-nested {
  --xyz-nested-stagger-delay: var(--xyz-root-stagger-delay, 0s);
}

.xyz-in,.xyz-in .xyz-in-nested,.xyz-in .xyz-nested {
  --xyz-stagger-delay-calc: var(--xyz-nested-stagger-delay, 0s) + var(--xyz-in-stagger, var(--xyz-stagger, 0s)) * var(--xyz-index, 0) + var(--xyz-in-stagger-rev, var(--xyz-stagger-rev, 0s)) * var(--xyz-index-rev, 0);
  --xyz-total-delay-calc: var(--xyz-stagger-delay, 0s) + var(--xyz-in-delay, var(--xyz-delay, var(--xyz-in-delay-default, var(--xyz-delay-default))));
  --xyz-stagger-delay: calc(var(--xyz-stagger-delay-calc));
  --xyz-total-delay: calc(var(--xyz-total-delay-calc));
  --xyz-delay-calc: var(--xyz-total-delay, 0s) + var(--xyz-start-offset, 0) * (var(--xyz-total-delay, 0s) + var(--xyz-in-duration, var(--xyz-duration, var(--xyz-in-duration-default, var(--xyz-duration-default))))) * -1;
  animation: var(--xyz-in-duration, var(--xyz-duration, var(--xyz-in-duration-default, var(--xyz-duration-default)))) var(--xyz-in-ease, var(--xyz-ease, var(--xyz-in-ease-default, var(--xyz-ease-default)))) calc(var(--xyz-delay-calc)) var(--xyz-in-iterate, var(--xyz-iterate, var(--xyz-in-iterate-default, var(--xyz-iterate-default)))) var(--xyz-in-direction, var(--xyz-direction, var(--xyz-in-direction-default, var(--xyz-direction-default)))) both;
  animation-name: xyz-in-keyframes, var(--xyz-in-keyframes, var(--xyz-keyframes, var(--xyz-in-keyframes-default, var(--xyz-keyframes-default))));
  backface-visibility: visible;
  transform-origin: var(--xyz-in-origin, var(--xyz-origin, var(--xyz-in-origin-default, var(--xyz-origin-default))));
}
.xyz-out,.xyz-out .xyz-nested,.xyz-out .xyz-out-nested {
  --xyz-stagger-delay-calc: var(--xyz-nested-stagger-delay, 0s) + var(--xyz-out-stagger, var(--xyz-stagger, 0s)) * var(--xyz-index, 0) + var(--xyz-out-stagger-rev, var(--xyz-stagger-rev, 0s)) * var(--xyz-index-rev, 0);
  --xyz-total-delay-calc: var(--xyz-stagger-delay, 0s) + var(--xyz-out-delay, var(--xyz-delay, var(--xyz-out-delay-default, var(--xyz-delay-default))));
  --xyz-stagger-delay: calc(var(--xyz-stagger-delay-calc));
  --xyz-total-delay: calc(var(--xyz-total-delay-calc));
  --xyz-delay-calc: var(--xyz-total-delay, 0s) + var(--xyz-start-offset, 0) * (var(--xyz-total-delay, 0s) + var(--xyz-out-duration, var(--xyz-duration, var(--xyz-out-duration-default, var(--xyz-duration-default))))) * -1;
  animation: var(--xyz-out-duration, var(--xyz-duration, var(--xyz-out-duration-default, var(--xyz-duration-default)))) var(--xyz-out-ease, var(--xyz-ease, var(--xyz-out-ease-default,