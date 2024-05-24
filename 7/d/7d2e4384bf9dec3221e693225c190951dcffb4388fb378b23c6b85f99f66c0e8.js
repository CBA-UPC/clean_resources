window._bcp=window._bcp||{},window._bcp.engagementRanker=window._bcp.engagementRanker||{},window._bcp.engagementRanker.textRank=function(n,e,r){var t=r||.85,o=e||200,a=[],i=[];function accum(e){var r=0;return n[e]["in"].forEach((function(t){var o=t.index,u=function findOut(e,r){for(var t=0;t<n[e].out.length;t++)if(n[e].out[t].index===r)return n[e].out[t];return null}(o,e);r+=u?u.weight/a[o]*i[o].score:0})),r}n.forEach((function(n,e){a[e]=function sum(n){var e=0;return n.forEach((function(n){e+=n.weight})),e}(n.out),i[e]={name:n.name,vertex:e,score:Math.random()}}));for(var u=0;u<o;++u)for(var c=0;c<n.length;++c){var f=accum(c);i[c].score=1-t+t*f}return i.sort((function(n,e){return e.score-n.score})),i},window._bcp.engagementRanker.keyExGraph=function(n,e){var r=[],t={},o=n.length,a=(e||2)/2,i={},u=1;function addIfNotPresent(n){return i[n]||(i[n]=u++),i[n]-1}for(var c=0;c<o;++c){var f=n[c];if(f.pos.match(/^[NJ]/)||"ADJ"===f.pos||"CD"===f.pos)for(var h=Math.max(0,c-a),s=Math.min(o,c+a),d=h;d<s;++d)if(c!==d){var m=n[d];if(m.pos.match(/^[NJ]/)||"ADJ"===m.pos||"CD"===m.pos){var p=[f.term,m.term];p.sort(),t[p=p.join("____")]=1}}}for(var w in t){var g=w.split("____");c=addIfNotPresent(g[0]),d=addIfNotPresent(g[1]),r[c]=r[c]||{me:c,name:g[0],out:[],"in":[]},r[d]=r[d]||{me:d,name:g[1],out:[],"in":[]},r[c].out.push({index:d,weight:1}),r[c]["in"].push({index:d,weight:1}),r[d].out.push({index:c,weight:1}),r[d]["in"].push({index:c,weight:1})}return r};ckground-color: #fff9c9;
}

a.text[data-icon]:after {
  margin-left: 10px;
}

span.orange {
  color: #fc8259;
}

/**
 * Typography, headings.
 */
h1 {
  font-size: 3.2em;
  line-height: 1.2em;
  margin: 0.5em 0;
  font-weight: 800;
}

h2 {
  font-size: 1.8em;
  line-height: 1.2em;
  margin: 0.5em 0;
  font-weight: 800;
}

h3,
h5 {
  font-size: 1.4em;
  line-height: 1.3em;
  margin: 0.5em 0;
  font-weight: 800;
}

h4 {
  margin: 0 0 1.5em 0;
  font-weight: 800;
  text-transform: uppercase;
}

h4 + h1 {
  margin-top: 0.25em;
}

h1.orange,
h4 {
  color: #fc8259;
}

h4.dark {
  color: #32353a;
}

h5.subtle {
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
}

/**
 * Typography, time.
 */
time,
span.author,
p.date {
  display: block;
  margin: 0.5em 0;
  color: #888;
  font-size: 12px;
  text-transform: uppercase;
}

/**
 * Typography, label.
 */
h4.label {
  margin: 1.5em 0 0 0;
}

h4.label.podcast {
  background: url("/graphics/icons/podcast.svg") no-repeat;
  line-height: 28px;
  padding-left: 38px;
}

h4.label.livestream {
  background: url("/graphics/icons/livestream.svg") no-repeat;
  line-height: 28px;
  padding-left: 46px;
}

h4.label.magazine {
  background: url("/graphics/icons/magazine.svg") no-repeat;
  line-height: 28px;
  padding-left: 38px;
}

h4.label.editorial {
  background: url("/graphics/icons/editorial.svg") no-repeat;
  line-height: 28px;
  padding-left: 38px;
}

h4.label > span.live {
  margin-left: 10px;
  padding: 2px 6px;
  border-radius: 4px;
  background-color: #fc8259;
  color: white;
  animation: live 2s linear infinite;
}

@keyframes live {
  50% {
    opacity: 0;
  }
}

/**
 * Lists.
 */
li {
  line-height: 1.5em;
}

ol.horizontal li {
  float: left;
}

ul p {
  margin: 0 0 2em 0;
}

/**
 * Lists, section.
 */
.list ol > li {
  margin-bottom: 1em;
}

.list ol > li time,
.list ol > li span.author {
  margin-bottom: 0;
}

.list ol > li a {
  font-weight: 600;
}

/**
 * Forms and inputs.
 */
input[type=text],
input[type=email],
input[type=password],
input[type=submit],
select,
textarea {
  -webkit-appearance: none;
  -webkit-font-smoothing: antialiased;
  border-radius: 0;
}

input[type=text],
input[type=email],
input[type=password],
select,
textarea {
  border: none;
  outline: none;
  color: #888;
  font-size: 1em;
  width: 100%;
  max-width: 300px;
}

form {
  height: 100%;
}

input[type=submit],
.button {
  display: inline-block;
  padding: 1em 2em;
  font-size: 14px;
  background-color: #fc8259;
  color: white;
  border: none;
  border-radius: 4px;
  white-space: nowrap;
  cursor: pointer;
}

.button.white {
  background-color: white;
  color: #fc8259;
  border: 1px solid #fc8259;
}

/**
 * Multimedia.
 */
img {
  display: block;
  width: 100%;
  height: auto;
}

img.auto {
  display: inline-block;
  width: auto;
  max-width: 100%;
}

figure.zoom {
  overflow: hidden;
}

figure.zoom img {
  transition: transform .25s ease-out;
}

figure.zoom img:hover {
  transform: scale(1.025);
}

.video div {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.video iframe {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

audio {
  width: 100%;
  outline: none;
}

.tts {
  margin: 0 !important;
}

/**
 * Multimedia, caption.
 */
figcaption {
  margin: 1em 0;
  line-height: 1.5em;
  color: #888;
}

figcaption a {
  color: #888;
  text-decoration: underline;
}

.tts figcaption {
  margin: 0 0 0.5em 0;
  font-size: 0.8em;
  text-transform: uppercase;
}

/**
 * Multimedia, native video.
 */
video {
  outline: none;
}

video.live::-webkit-media-controls-current-time-display,
video.live::-webkit-media-controls-time-remaining-display,
video.live::-webkit-media-controls-timeline {
  display: none;
}

/**
 * Top.
 */
.top {
  height: 250px;
  margin: 10px 0 10px 180px;
}

/**
 * Header.
 */
header {
  position: relative;
  height: 90px;
  background-color: #f0f0ef;
}

header a {
  color: #aaa;
}

header > * {
  position: absolute;
  height: 90px;
}

/**
 * Header + nav, typography.
 */
header li,
nav li,
header p {
  font-size: 12px;
}

/**
 * Header, time.
 */
header > .time {
  width: 150px;
  padding: 20px 0 0 15px;
  background-color: #1d2732;
}

header > .time p {
  margin: 0.2em;
  color: #ddd;
}

/**
 * Header, logo.
 */
header > .logo {
  left: 180px;
}

header > .logo img {
  width: 180px;
  margin-top: 30px;
}

/**
 * Header, my-nav.
 */
header > .my-nav {
  right: 30px;
}

header > .my-nav > ol {
  float: left;
  height: 50px;
  margin: 20px 0;
}

header > .my-nav > ol li {
  height: 100%;
  line-height: 50px;
}

header > .my-nav > ol > li + li {
  padding-left: 10px;
}

/**
 * Header, my-nav, social.
 */
header > .my-nav > ol.social {
  margin-right: 20px;
}

header > .my-nav > ol.social > li a {
  font-size: 28px;
}

/**
 * Header, my-nav, login.
 */
header > .my-nav > ol.login {
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  padding: 0 20px;
}

header > .my-nav > ol.login li:first-child a {
  display: inline-block;
  color: white;
  background-color: #26b084;
  font-weight: 700;
  padding: 1em;
  line-height: 1em;
  border-radius: 4px;
}

/**
 * Header, my-nav, search.
 */
header > .my-nav > ol.search {
  margin-left: 20px;
  background-color: white;
}

header > .my-nav > ol.search > li:first-child {
  font-size: 28px;
  width: 40px;
  text-align: center;
}

header > .my-nav > ol.search > li input {
  float: left;
  width: 150px;
  height: 100%;
  padding: 10px 10px 10px 0;
}

/**
 * Navigation.
 */
nav {
  position: absolute;
  width: 150px;
  min-height: 100%;
  background-color: #27303f;
  padding-bottom: 150px;
}

nav a {
  color: #ddd;
}

nav ol {
  padding: 20px 0;
}

nav ol > li {
  padding: 10px 15px;
  text-transform: uppercase;
}

nav > ol + ol {
  border-top: 1px solid #1d2732;
}

/* Navigation, promoted. */

nav ol.promoted {
  background-color: #323b49;
}

nav ol.promoted li:first-child {
  font-size: 11px;
  color: white;
  font-weight: 600;
}

/**
 * Navigation, social.
 */
nav ol.social {
  padding: 30px 0 0 15px;
}

nav ol.social > li {
  width: 33%;
  font-size: 28px;
  padding: 0;
}

/**
 * Navigation, expands/expanded.
 */
nav > ol > li > ol {
  position: absolute;
  top: 0;
  left: -150px;
  width: 150px;
  min-height: 100%;
  background-color: #3d4756;
}

nav ol > li.expands > a {
  display: inline-block;
  width: 100%;
}

nav ol > li.expands a[data-icon]:after {
  position: absolute;
  right: 15px;
}

nav ol > li.expanded {
  background-color: #3d4756;
}

nav > ol > li.expanded > ol {
  left: 150px;
}

nav ol > li.expanded a[data-icon]:after {
  content: "B";
}

/**
 * Breadcrumbs.
 */
ol.breadcrumbs {
  margin: -15px 0 30px 0;
  border-bottom: 1px solid #eee;
  padding: 0 0 10px 0;
}

ol.breadcrumbs li {
  font-size: 12px;
  color: #888;
  text-transform: uppercase;
  display: inline-block;
}

ol.breadcrumbs li:after {
  content: "/";
  padding: 0 10px 0 10px;
}

ol.breadcrumbs li:last-child:after {
  content: normal;
}

/**
 * Main.
 */
main {
  position: relative;
  margin: 30px 30px 0 180px;
  min-height: 1200px;
  padding-bottom: 150px;
  display: block; /* IE. */
}

/**
 * Main, navigation expanded.
 */
.expanded main {
  left: 150px;
}

/**
 * Section.
 */
section h1:first-child {
  margin-top: 0;
}

/**
 * Article.
 */
article h1:first-child,
article h2:first-child,
article h3:first-child,
article > h4:first-child,
div.banner h5:first-child {
  margin-top: 0;
}

article :not(.v1 + div) > p:first-child {
  margin: 0;
}

section p a,
article p a,
div.body h3 a,
.links a,
label a {
  color: #2782ed;
}

/**
 * Article, stand-alone.
 */
article.stand-alone time {
  font-size: 1em;
}

article.stand-alone div.body {
  padding: 20px 0 0 0;
  margin: 25px 0;
  border-top: 1px solid #ddd;
}

article.stand-alone figure,
article.stand-alone .embed {
  margin: 20px 0;
}

/**
 * By-line.
 */
p.by-line {
  margin-bottom: 0.8em;
}

p.by-line > span,
p.by-line a {
  text-transform: uppercase;
  color: #fc8259;
  font-weight: 800;
}

p.by-line > a {
  font-size: 26px;
  vertical-align: middle;
  margin: 0 5px;
}

/**
 * Image list.
 */
article .image-list figure {
  margin: 0;
}

div.body .image-list {
  float: right;
  margin-left: 20px;
  width: 50%;
}

/**
 * Info boxes.
 */
.info-box {
  margin-top: 2em;
  padding: 1em;
  border-radius: 4px;
}

.info-box > div {
  display: flex;
  align-items: center;
  margin-bottom: -1em;
}

.info-box [data-icon]:after {
  display: block;
  font-size: 28px;
}

.info-box h4 {
  margin: 0 0 0 10px;
}

.info-box p:last-child {
  margin-bottom: 0;
}

.info-box.disclaimer {
  background-color: #fcf8e3;
}

.info-box.disclaimer * {
  color: #c09853;
}

.info-box.bio {
  background-color: #f0f0ef;
}
.info-box.bio *:not(a) {
  color: #888;
}

/**
 * Feedback.
 */
.feedback {
  display: none;
  background-color: #26b084;
  text-align: center;
  border-radius: 4px;
}

.feedback div {
  padding: 2em;
}

.feedback div:nth-child(2) {
  margin-top: -4em;
  background:
    url("/graphics/upsell/trees.svg") no-repeat 2% bottom/95px auto,
    url("/graphics/upsell/atomium.svg") no-repeat 110% bottom/150px auto
  ;
}

.feedback p,
.feedback a {
  color: #f6f1e0;
}

.feedback a {
  text-decoration: underline;
}

.feedback strong {
  font-weight: 800;
  background: url("/graphics/icons/heart.svg") no-repeat;
  background-size: 20px 100%;
  padding-left: 25px;
}

.feedback textarea {
  background-color: #f6f1e0;
  max-width: 600px;
  border-radius: 4px;
  height: 100px;
  margin: 1em auto 1em auto;
  padding: 1em;
}

.feedback input {
  background-color: #f6f1e0;
  color: #26b084;
}

.feedback input:disabled {
  opacity: 0.5;
}

/**
 * Share.
 */
.share {
  margin-bottom: -0.5em;
}

.share h4 {
  color: #32353a;
}

.share li {
  display: inline-block;
  margin: 0 0.5em 1em 0;
  border-radius: 4px;
  background-position: 10px center;
  background-size: 15px auto;
  background-repeat: no-repeat;
}

.share li:last-child {
  margin-right: 0;
}

.share li a {
  display: inline-block;
  font-size: 12px;
  color: white;
  padding: 0.5em 10px 0.5em 30px;
}

.share li.twitter {
  background-color: #1da1f2;
  background-image: url("/graphics/share/twitter.svg");
}

.share li.facebook {
  background-color: #3b5998;
  background-image: url("/graphics/share/facebook.svg");
}

.share li.linkedin {
  background-color: #0077b5;
  background-image: url("/graphics/share/linkedin.svg");
}

.share li.reddit {
  background-color: #ff4500;
  background-image: url("/graphics/share/reddit.svg");
}

.share li.whatsapp {
  background-color: #25d366;
  background-image: url("/graphics/share/whatsapp.svg");
}

.share li.mail {
  background-color: #414959;
  background-image: url("/graphics/share/mail.svg");
}

/**
 * Links.
 */
.links li {
  margin: 0.5em 0;
}

.links h4 {
  color: #32353a;
  margin: 2em 0 1em 0;
}

/**
 * Banners.
 */
.banner {
  text-align: center;
}

.banner > div {
  overflow: hidden;
}

#dfp-billboard {
  float: left;
}

#dfp-in-article {
  float: right;
  clear: right;
  margin: 0 0 20px 20px;
}

/**
 * Fixed box.
 */
div.fixed-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 4;
  padding: 0.5em 1em;
  background-color: #26b084;
}

div.fixed-box p {
  color: #f6f1e0;
  max-width: none;
  margin: 1em 0;
}

div.fixed-box a {
  color: #f6f1e0;
  text-decoration: underline;
}

/**
 * About us.
 */
.staff {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.member {
  width: 240px;
  margin: 10px;
  text-align: center;
}

.member img {
  margin: 0 auto;
  border-radius: 115px;
  max-width: 115px;
}

.member h5 {
  font-weight: normal;
  margin-bottom: 0;
}

.member h5 a {
  color: #2782ed;
}

.member p {
  margin: 0;
}

.member p:last-child {
  font-size: 12px;
  color: #888;
  margin-top: 10px;
}

/**
 * Band.
 */
.band {
  margin: 30px 0;
}

.band div:first-child {
  position: relative;
  overflow: hidden;
  height: 300px;
  /* http://colorzilla.com/gradient-editor/#27303f+0,27303f+100&amp;0+20,1+50 */
  background: linear-gradient(to right, rgba(39,48,63,0) 0%, rgba(39,48,63,0) 20%, rgba(39,48,63,1) 50%, rgba(39,48,63,1) 100%); /* W3C */
}

.band h2 {
  color: white;
  font-family: "Bitter";
  font-size: 2.5em;
  text-shadow: 1px 1px #1d2732;
  max-width: 800px;
  margin: 0.2em auto 0.5em auto;
}

.band h4 {
  font-family: "Bitter";
  font-size: 1.2em;
  line-height: 1.2em;
  text-transform: none;
  margin: 0;
}

.band p {
  color: white;
  margin: 0 auto;
  text-shadow: 1px 1px #1d2732;
}

.band img {
  position: relative;
  z-index: -1;
  height: 100%;
  min-width: 50%;
  width: auto;
}

.band div div {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  padding: 30px;
}

/**
 * Line content separator.
 */
.line-sep:after {
  content: "";
  display: block;
  margin-top: 2em;
  background-color: #ddd;
  height: 1px;
}

.line-sep:last-child:after {
  background-color: transparent;
}

/**
 * Wide.
 */
.stand-alone .wide img,
.stand-alone .wide video,
.wide.membership,
.wide.membership-upsell {
  margin-left: -30px;
  width: calc(100% + 30px);
}

/**
 * Membership.
 */
.membership {
  max-width: none !important;
  padding: 30px;
  background:
    url("/graphics/upsell/trees.svg") no-repeat 90% bottom/100px auto,
    url("/graphics/upsell/cloud.svg") no-repeat -20px 40%/100px auto,
    url("/graphics/upsell/cloud.svg") no-repeat 70% 10%/100px auto
    #26b084
  ;
}

.membership h2,
.membership h3 {
  color: #f6f1e0;
}

.membership h2 {
  margin-top: 0;
  font-size: 2.8em;
  font-weight: 700;
}

.membership h3 {
  font-weight: 500;
}

/**
 * Membership upsell.
 */
.membership-upsell {
  display: none;
  position: absolute;
  z-index: 1;
}

.membership-upsell.show {
  display: block;
}

.membership-upsell p {
  margin: 0;
  font-size: 1.15em;
  color: #f6f1e0;
}

.membership-upsell p a,
.membership-upsell h3 a {
  color: #f6f1e0 !important;
  text-decoration: underline;
}

/**
 * Membership upsell (close).
 */
.membership-upsell .close {
  display: none;
  position: absolute;
  align-items: center;
  top: 0px;
  right: 0px;
  padding: 10px;
}

.membership-upsell .close.show {
  display: flex;
}

.v1.membership-upsell .close {
  color: #f6f1e0;
  background-color: #21a178;
}

.membership-upsell .close:after {
  color: #f6f1e0;
  margin-left: 10px;
  font-size: 28px;
}

/**
 * Membership upsell (v1).
 */
.v1.membership-upsell {
  height: 100%;
  background-color: white;
  text-align: center;
}

.v1.membership-upsell.show + div {
  display: none;
}

.v1.membership-upsell > div {
  padding: 50px 30px;
  background:
    url("/graphics/upsell/house.svg") no-repeat 5% bottom/200px auto,
    url("/graphics/upsell/atomium.svg") no-repeat 300px bottom/150px auto,
    url("/graphics/upsell/trees.svg") no-repeat 90% bottom/100px auto,
    url("/graphics/upsell/cloud.svg") no-repeat -20px 60%/100px auto,
    url("/graphics/upsell/cloud.svg") no-repeat 65% 30%/100px auto,
    url("/graphics/upsell/cloud.svg") no-repeat 95% 60%/100px auto
    #26b084
  ;
}

.v1.membership-upsell h2,
.v1.membership-upsell h3 {
  color: #f6f1e0;
}

.v1.membership-upsell h2 {
  font-size: 2.8em;
  font-weight: 700;
  margin: 0;
}

.v1.membership-upsell h3 {
  font-weight: 500;
}

.v1.membership-upsell h4 {
  color: #fbf549;
}

.v1.membership-upsell div.login {
  margin: 30px 0 -20px 0;
}

.v1.membership-upsell div.login p {
  display: inline-block;
  font-size: 14px;
}

.v1.membership-upsell div.login h4 {
  display: inline-block;
  color: #f6f1e0;
  margin: 0 0.2em 0 0;
}

.v1.membership-upsell.show::before {
  position: absolute;
  content: "";
  height: 100px;
  width: 100%;
  top: -100px;
  left: 0;
  background: linear-gradient(to bottom, rgba(255,255,255,0), #fff);
  pointer-events: none;
}

/**
 * Membership upsell (plans).
 */
.membership-upsell .plans {
  margin: 30px auto 0 auto;
  max-width: 800px;
}

.membership-upsell .plans > div {
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 0 -30px;
}

.membership-upsell .plan {
  flex: 1 0 0;
  display: flex;
  flex-wrap: wrap;
  min-width: 145px;
  margin: 0 0 30px 30px;
  background-color: #26b084;
  border: 1px solid #f6f1e0;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 5px #21a178;
}

.membership-upsell .plan > * {
  flex: 1 0 100%;
}

.membership-upsell .plan > h4 {
  margin: 0;
  height: 40px;
  line-height: 40px;
  color: #26b084;
  background-color: #f6f1e0;
}

.membership-upsell .plan > div {
  padding: 20px;
}

.membership-upsell .plan > div h5 {
  margin: 0;
  color: #f6f1e0;
  font-weight: 300;
  font-size: 3.5em;
}

/**
 * Membership upsell (footer).
 */
.membership-upsell .footer {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 30px;
  text-align: left;
}

.membership-upsell .footer > div {
  flex: 1 1 0;
}

.membership-upsell .footer > div:last-child {
  display: flex;
  align-items: center;
  margin-left: 30px;
}

.membership-upsell .footer img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 5px #21a178;
  margin: 0 10px 0 0;
}

/**
 * Membership upsell (v2).
 */
.v2.membership-upsell > div {
  position: fixed;
  bottom: 0;
  height: 120px;
  width: calc(100% - 180px);
  max-width: 1130px;
  background: #26b084 70% 10px/20% auto url("/graphics/upsell/house.svg") no-repeat;
  padding: 0 50px 0 30px;
}

.expanded .v2.membership-upsell > div {
  max-width: 1010px;
}

.v2.membership-upsell div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.v2.membership-upsell h2 {
  color: #f6f1e0;
  font-size: 2.3em;
  font-weight: 700;
  border-left: 1px solid #f6f1e0;
  padding-left: 20px;
  line-height: 2.5em;
}

.v2.membership-upsell h3 {
  text-transform: uppercase;
  color: #fbf549;
  font-size: 1.4em;
  font-weight: 800;
  padding-right: 20px
}

.v2.membership-upsell .button {
  text-transform: uppercase;
  color: #26b084;
  font-weight: 700;
  box-shadow: 0px 0px 5px 5px #21a178;
  background-color: #fbf549;
  border: none;
  padding: 1em 4em;
}

/**
 * Groups.
 */
.groups {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: none !important;
}

.group {
  width: 160px;
  margin: 20px;
}

.group img {
  filter: grayscale(100%);
}

.group img:hover {
  filter: none;
}

/**
 * Modal.
 */
#modal {
  display: none;
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
}

#modal.show {
  display: flex;
}

#modal > div {
  position: relative;
}

#modal .close {
  position: absolute;
  right: 10px;
  top: 10px;
  color: white;
  font-size: 28px;
}

/**
 * Newsletter signup.
 */
.newsletter-signup {
  margin: 1em 0;
  padding: 1em;
  background: linear-gradient(120deg, rgba(238,238,238,1) 75%, rgba(255,255,255,1) 100%);
}

.newsletter-signup p {
  margin: 0;
}

.newsletter-signup > form {
  display: flex;
  margin: 1em 0;
}

.newsletter-signup input[type=email] {
  max-width: 400px;
  padding: 1em;
  margin-right: 0.8em;
}

.newsletter-signup p:last-child {
  font-size: 0.9em;
  margin-top: -0.4em;
}

/**
 * Grid.
 */
.grid {
  margin: 0 -15px;
}

.grid + .grid,
.membership-upsell + .grid {
  margin-top: 30px;
}

/**
 * Grid, column.
 */
[class*='col-'] {
  float: left;
  padding: 0 15px;
}

/**
 * Grid, widths.
 *
 * IE does not like 100%.
 */
.col-7 {
  width: calc(7/24 * 99.99%);
}

.col-8 {
  width: calc(8/24 * 99.99%);
}

.col-12 {
  width: calc(12/24 * 99.99%);
}

.col-16 {
  width: calc(16/24 * 100%);
}

.col-17 {
  width: calc(17/24 * 100%);
}

.col-24 {
  width: 100%;
}

/**
 * Grid layouts.
 */
.layout-compact .grid > div {
  width: 100%;
}

.layout-compact h4:first-child {
  margin-top: 1em;
}